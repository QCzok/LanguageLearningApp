/**
 * Erzeugt die Audiodateien der Mediathek aus den Sprechtexten.
 *
 *   npm run media:tts                         nur fehlende Dateien
 *   npm run media:tts -- --force              alle neu
 *   npm run media:tts -- --only "Beim Bäcker" eine einzelne
 *   npm run media:tts -- --provider windows   lokale Windows-Stimmen
 *   npm run media:tts -- --voices             nur zeigen, was installiert ist
 *
 * Jede Zeile eines Skripts wird einzeln synthetisiert – so bekommt ein Dialog
 * zwei unterscheidbare Stimmen – und die Ergebnisse werden zu einer Datei
 * zusammengesetzt. MP3-Rahmen lassen sich dafür schlicht aneinanderhängen:
 * Ein Decoder liest sie der Reihe nach, genau wie bei einem Datenstrom.
 * Zwischen zwei Zeilen steht eine kurze Stille, sonst fallen die Sprechenden
 * einander ins Wort.
 *
 * Zwei Wege zur Aufnahme:
 *
 *   openai   (Vorgabe)  Sprachsynthese über die API. Beste Qualität, braucht
 *                       OPENAI_API_KEY und kostet pro Aufnahme ein paar Cent.
 *   windows             Die in Windows installierten Stimmen. Kostenlos und
 *                       offline, aber hörbar robotischer – und nur brauchbar,
 *                       wenn für die jeweilige Sprache auch eine Stimme
 *                       installiert ist (siehe `--voices`).
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
  mediaSlug,
  transcriptOf,
  type MediaScript,
  type MediaScriptLine,
} from '../prisma/seed/media-scripts';
import { readMp3DurationSec, silentMp3 } from '../src/modules/media/mp3-duration';
import { FFMPEG_HINT, ffmpegAvailable, wavToMp3 } from './ffmpeg';
import { installedVoices, pickVoice, speakToWav } from './windows-voices';

loadEnv();

/** Umstellbar für einen Proxy – und für den Durchlauf gegen eine Attrappe. */
const API_URL = process.env.OPENAI_TTS_URL ?? 'https://api.openai.com/v1/audio/speech';
/** Sprachsynthese mit Regieanweisung – deutlich natürlicher als die Vorgängermodelle. */
const MODEL = process.env.OPENAI_TTS_MODEL ?? 'gpt-4o-mini-tts';
/** Pause zwischen zwei Zeilen. Kurz genug, dass ein Dialog nicht zerfällt. */
const GAP_SEC = 0.45;

type Provider = 'openai' | 'windows';

const prisma = new PrismaClient();

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const force = args.includes('--force');
  const onlyIndex = args.indexOf('--only');
  const only = onlyIndex >= 0 ? args[onlyIndex + 1] : null;
  const providerIndex = args.indexOf('--provider');
  const provider = (
    providerIndex >= 0 ? args[providerIndex + 1] : (process.env.TTS_PROVIDER ?? 'openai')
  ) as Provider;

  if (args.includes('--voices')) {
    showVoices();
    return;
  }

  if (provider !== 'openai' && provider !== 'windows') {
    console.error(`Unbekannter Anbieter "${provider}". Möglich sind: openai, windows.`);
    process.exitCode = 1;
    return;
  }

  const scripts = only
    ? MEDIA_SCRIPTS.filter((script) => script.title === only)
    : MEDIA_SCRIPTS;
  if (scripts.length === 0) {
    console.error(`Kein Sprechtext mit dem Titel "${only}".`);
    process.exitCode = 1;
    return;
  }

  /*
    Voraussetzungen vorab prüfen, nicht erst mitten im Durchlauf: Bricht die
    fünfte von zwölf Aufnahmen ab, weil eine Stimme fehlt, liegen vier fertige
    Dateien herum und die Datenbank kennt Dauern, die zum Rest nicht passen.
  */
  let speak: (script: MediaScript, line: MediaScriptLine) => Promise<Buffer>;

  if (provider === 'openai') {
    const apiKey = process.env.OPENAI_API_KEY?.trim();
    if (!apiKey) {
      console.error(
        'OPENAI_API_KEY fehlt.\n' +
          'Tragen Sie den Schlüssel in backend/.env ein und starten Sie das Skript erneut.\n\n' +
          'Ohne Schlüssel geht es auch lokal:  npm run media:tts -- --provider windows\n' +
          'Was dafür installiert sein muss, zeigt:  npm run media:tts -- --voices',
      );
      process.exitCode = 1;
      return;
    }
    speak = (script, line) => speakOpenAi(apiKey, script, line);
  } else {
    if (!ffmpegAvailable()) {
      console.error(FFMPEG_HINT);
      process.exitCode = 1;
      return;
    }
    // Wirft mit Anleitung, wenn für eine der Sprachen keine Stimme da ist.
    try {
      for (const script of scripts) pickVoice(script.language, script.lines[0].voice);
    } catch (error) {
      console.error(error instanceof Error ? error.message : String(error));
      process.exitCode = 1;
      return;
    }
    speak = (script, line) => Promise.resolve(wavToMp3(speakToWav(script, line)));
  }

  const outDir = join(process.cwd(), process.env.STATIC_DIR ?? 'static', 'audio');
  mkdirSync(outDir, { recursive: true });

  const how = provider === 'openai' ? MODEL : 'lokalen Windows-Stimmen';
  console.log(`Sprachsynthese mit ${how} – ${scripts.length} Aufnahme(n)\n`);

  for (const script of scripts) {
    const file = join(outDir, `${mediaSlug(script.title)}.mp3`);

    if (existsSync(file) && !force) {
      const seconds = readMp3DurationSec(readFileSync(file));
      console.log(`  übersprungen  ${script.title} (vorhanden, ${format(seconds)})`);
      await saveDuration(script, seconds);
      continue;
    }

    process.stdout.write(`  ${script.title} … `);
    const parts: Buffer[] = [];

    for (const [index, line] of script.lines.entries()) {
      parts.push(await speak(script, line));
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

/** Übersicht: Was ist installiert, und reicht es für die vorhandenen Texte? */
function showVoices(): void {
  const voices = installedVoices();
  console.log('Installierte Windows-Stimmen:');
  if (voices.length === 0) console.log('  keine');
  for (const v of voices) console.log(`  ${v.name}  (${v.culture}, ${v.gender})`);

  const languages = [...new Set(MEDIA_SCRIPTS.map((s) => s.language))].sort();
  console.log('\nBenötigt für die vorhandenen Sprechtexte:');
  for (const language of languages) {
    const count = MEDIA_SCRIPTS.filter((s) => s.language === language).length;
    const ok = voices.some((v) => v.culture.toLowerCase().startsWith(language));
    console.log(`  ${language}  ${count} Aufnahme(n)  ${ok ? '✓ vorhanden' : '✗ fehlt'}`);
  }

  console.log(`\nffmpeg (WAV → MP3): ${ffmpegAvailable() ? '✓ gefunden' : '✗ fehlt'}`);
  const missing = languages.filter(
    (l) => !voices.some((v) => v.culture.toLowerCase().startsWith(l)),
  );
  if (missing.length > 0) {
    console.log(
      '\nFehlende Stimmen nachinstallieren: Einstellungen → Zeit und Sprache →\n' +
        'Sprache und Region → Sprache hinzufügen → "Sprachausgabe" ankreuzen.\n' +
        'Danach das Terminal neu starten.',
    );
  }
}

/** Eine einzelne Zeile über die OpenAI-Sprachsynthese erzeugen. */
async function speakOpenAi(
  apiKey: string,
  script: MediaScript,
  line: MediaScriptLine,
): Promise<Buffer> {
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
