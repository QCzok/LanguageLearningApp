/**
 * Erzeugt die Audiodateien der Mediathek aus den Sprechtexten.
 *
 *   npm run media:tts            nur fehlende Dateien
 *   npm run media:tts -- --force alle neu
 *   npm run media:tts -- --only "Beim Bäcker"
 *
 * Jede Zeile eines Skripts wird einzeln synthetisiert – so bekommt ein Dialog
 * zwei unterscheidbare Stimmen – und die Ergebnisse werden zu einer Datei
 * zusammengesetzt. MP3-Rahmen lassen sich dafür schlicht aneinanderhängen:
 * Ein Decoder liest sie der Reihe nach, genau wie bei einem Datenstrom.
 * Zwischen zwei Zeilen steht eine kurze Stille, sonst fallen die Sprechenden
 * einander ins Wort.
 *
 * Am Ende trägt das Skript die tatsächlich gemessene Spieldauer in die
 * Datenbank ein. Die Zahl aus dem Seed ist nur eine Schätzung aus der
 * Textlänge (siehe `estimatedDurationSec`); erst die fertige Datei weiß es
 * genau.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { config as loadEnv } from 'dotenv';
import { PrismaClient } from '@prisma/client';
import {
  MEDIA_SCRIPTS,
  transcriptOf,
  type MediaScript,
  type MediaScriptLine,
} from '../prisma/seed/media-scripts';
import { readMp3DurationSec, silentMp3 } from '../src/modules/media/mp3-duration';

loadEnv();

/** Umstellbar für einen Proxy – und für den Durchlauf gegen eine Attrappe. */
const API_URL = process.env.OPENAI_TTS_URL ?? 'https://api.openai.com/v1/audio/speech';
/** Sprachsynthese mit Regieanweisung – deutlich natürlicher als die Vorgängermodelle. */
const MODEL = process.env.OPENAI_TTS_MODEL ?? 'gpt-4o-mini-tts';
/** Pause zwischen zwei Zeilen. Kurz genug, dass ein Dialog nicht zerfällt. */
const GAP_SEC = 0.45;

const prisma = new PrismaClient();

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const force = args.includes('--force');
  const onlyIndex = args.indexOf('--only');
  const only = onlyIndex >= 0 ? args[onlyIndex + 1] : null;

  const apiKey = process.env.OPENAI_API_KEY?.trim();
  if (!apiKey) {
    console.error(
      'OPENAI_API_KEY fehlt.\n' +
        'Tragen Sie den Schlüssel in backend/.env ein und starten Sie das Skript erneut.\n' +
        'Ohne Schlüssel lässt sich keine Sprachausgabe erzeugen; die Mediathek bleibt bis dahin ohne Ton.',
    );
    process.exitCode = 1;
    return;
  }

  const outDir = join(process.cwd(), process.env.STATIC_DIR ?? 'static', 'audio');
  mkdirSync(outDir, { recursive: true });

  const scripts = only
    ? MEDIA_SCRIPTS.filter((script) => script.title === only)
    : MEDIA_SCRIPTS;
  if (scripts.length === 0) {
    console.error(`Kein Sprechtext mit dem Titel "${only}".`);
    process.exitCode = 1;
    return;
  }

  console.log(`Sprachsynthese mit ${MODEL} – ${scripts.length} Aufnahme(n)\n`);

  for (const script of scripts) {
    const file = join(outDir, `${slugify(script.title)}.mp3`);

    if (existsSync(file) && !force) {
      const seconds = readMp3DurationSec(readFileSync(file));
      console.log(`  übersprungen  ${script.title} (vorhanden, ${format(seconds)})`);
      await saveDuration(script, seconds);
      continue;
    }

    process.stdout.write(`  ${script.title} … `);
    const parts: Buffer[] = [];

    for (const [index, line] of script.lines.entries()) {
      parts.push(await speak(apiKey, script, line));
      if (index < script.lines.length - 1) parts.push(silentMp3(GAP_SEC));
      process.stdout.write('.');
    }

    const audio = Buffer.concat(parts);
    writeFileSync(file, audio);
    const seconds = readMp3DurationSec(audio);
    await saveDuration(script, seconds);
    console.log(` fertig (${format(seconds)}, ${(audio.length / 1024).toFixed(0)} KB)`);
  }

  console.log(`\nAbgelegt in ${outDir}`);
}

/** Eine einzelne Zeile synthetisieren. */
async function speak(apiKey: string, script: MediaScript, line: MediaScriptLine): Promise<Buffer> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: MODEL,
      voice: line.voice,
      input: line.text,
      instructions: script.instructions,
      speed: script.speed,
      response_format: 'mp3',
    }),
  });

  if (!response.ok) {
    throw new Error(
      `Sprachsynthese fehlgeschlagen (${response.status}): ${(await response.text()).slice(0, 300)}`,
    );
  }
  return Buffer.from(await response.arrayBuffer());
}

/** Die gemessene Dauer in die Datenbank schreiben – für alle Sprachen mit diesem Titel. */
async function saveDuration(script: MediaScript, seconds: number): Promise<void> {
  if (seconds <= 0) return;
  const result = await prisma.mediaItem.updateMany({
    where: { title: script.title },
    data: { durationSec: seconds, transcript: transcriptOf(script) },
  });
  if (result.count === 0) {
    console.warn(`    Hinweis: kein Mediathek-Eintrag "${script.title}" – Seed schon gelaufen?`);
  }
}

/** Dieselbe Regel wie im Seed, damit Datei und `audioUrl` zusammenpassen. */
function slugify(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

function format(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}

main()
  .catch((error: unknown) => {
    console.error('\n' + (error instanceof Error ? error.message : String(error)));
    process.exitCode = 1;
  })
  .finally(() => void prisma.$disconnect());
