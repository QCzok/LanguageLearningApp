/**
 * Lokale Sprachausgabe über die in Windows installierten Stimmen.
 *
 * Gegenstück zur OpenAI-Sprachsynthese: Ohne API-Schlüssel lassen sich die
 * Aufnahmen der Mediathek hiermit kostenlos und offline erzeugen. Die Qualität
 * liegt hörbar unter der eines heutigen TTS-Modells – für eine Vorschau reicht
 * sie, als endgültige Hörvorlage einer Sprachlern-App eher nicht.
 *
 * Der heikle Punkt ist die Sprachzuordnung. Windows liefert je nach
 * Installation nur englische Stimmen mit; eine englische Stimme, die einen
 * spanischen Text vorliest, ergibt eine Aufnahme, die Lernenden falsche
 * Aussprache beibringt. Deshalb bricht dieses Modul lieber ab, als auf eine
 * Stimme der falschen Sprache auszuweichen – siehe `pickVoice`.
 */
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import type { MediaScript, MediaScriptLine, MediaVoice } from '../prisma/seed/media-scripts';

export interface WindowsVoice {
  name: string;
  culture: string;
  gender: string;
}

const PS_SCRIPT = join(__dirname, 'windows-tts.ps1');

/** Sprache eines Sprechtexts auf das Kürzel der Windows-Kultur (`es-ES`, `de-DE`). */
const CULTURE_PREFIX: Record<MediaScript['language'], string> = {
  de: 'de',
  en: 'en',
  es: 'es',
};

/**
 * Welche der OpenAI-Stimmen eher weiblich, welche eher männlich klingt.
 *
 * Die Sprechtexte sind auf diese Namen hin geschrieben – ein Dialog wechselt
 * zwischen `nova` und `onyx`, damit zwei Personen hörbar auseinanderfallen.
 * Für die lokale Ausgabe zählt davon nur, welches Geschlecht die Stimme
 * nahelegt; die passende Windows-Stimme wird danach gewählt, damit der
 * Wechsel im Dialog erhalten bleibt.
 */
const VOICE_GENDER: Record<MediaVoice, 'Female' | 'Male'> = {
  alloy: 'Female',
  nova: 'Female',
  shimmer: 'Female',
  sage: 'Female',
  echo: 'Male',
  onyx: 'Male',
  fable: 'Male',
};

function runPowerShell(args: string[]): string {
  return execFileSync(
    'powershell.exe',
    ['-NoProfile', '-NonInteractive', '-ExecutionPolicy', 'Bypass', '-File', PS_SCRIPT, ...args],
    { encoding: 'utf8', windowsHide: true },
  );
}

/** Die installierten Stimmen, einmal abgefragt und danach gemerkt. */
let cache: WindowsVoice[] | null = null;

export function installedVoices(): WindowsVoice[] {
  if (cache) return cache;
  try {
    const raw = runPowerShell(['-List']).trim();
    cache = raw ? (JSON.parse(raw) as WindowsVoice[]) : [];
  } catch (error) {
    throw new Error(
      'Die installierten Sprachausgabe-Stimmen ließen sich nicht abfragen. ' +
        'Läuft dieses Skript auf Windows?\n' +
        (error instanceof Error ? error.message : String(error)),
    );
  }
  return cache;
}

/**
 * Die passende Stimme für eine Zeile – oder ein Abbruch mit Anleitung.
 *
 * Fehlt die Sprache ganz, hat es keinen Sinn weiterzumachen: Eine Aufnahme mit
 * der falschen Sprache wäre schlimmer als gar keine.
 */
export function pickVoice(language: MediaScript['language'], voice: MediaVoice): string {
  const prefix = CULTURE_PREFIX[language];
  const matching = installedVoices().filter((v) => v.culture.toLowerCase().startsWith(prefix));

  if (matching.length === 0) {
    const have = installedVoices().map((v) => `${v.name} (${v.culture})`).join(', ') || 'keine';
    throw new Error(
      `Für "${language}" ist keine Windows-Stimme installiert.\n` +
        `Vorhanden: ${have}.\n\n` +
        'Nachinstallieren: Einstellungen → Zeit und Sprache → Sprache und Region →\n' +
        'Sprache hinzufügen → bei den Sprachfunktionen "Sprachausgabe" ankreuzen.\n' +
        'Danach Terminal neu starten, damit die Stimme sichtbar wird.',
    );
  }

  const wanted = VOICE_GENDER[voice];
  // Passt das Geschlecht nicht, ist das nur ein Schönheitsfehler – die
  // Sprache stimmt, und darauf kommt es an.
  return (matching.find((v) => v.gender === wanted) ?? matching[0]).name;
}

/**
 * Sprechtempo umrechnen.
 *
 * Die Sprechtexte notieren einen Faktor um 1 herum (0.85 für eine langsam
 * gelesene A2-Lektion). System.Speech kennt stattdessen eine Stufe von -10
 * bis 10. Der Faktor 10 trifft die gewohnte Abstufung gut: 0.85 wird zu -1.5,
 * gerundet -2, also spürbar langsamer, ohne zu zerdehnen.
 */
export function toSapiRate(speed: number): number {
  return Math.max(-10, Math.min(10, Math.round((speed - 1) * 10)));
}

/**
 * Eine Zeile lokal synthetisieren und als WAV zurückgeben.
 *
 * Text und Ausgabe laufen über Dateien: Über die Kommandozeile gingen
 * Anführungszeichen und Sonderzeichen wie „ñ" oder „ß" je nach Codepage
 * verloren – genau die Zeichen, um die es hier geht.
 */
export function speakToWav(script: MediaScript, line: MediaScriptLine): Buffer {
  const dir = mkdtempSync(join(tmpdir(), 'lingua-tts-'));
  const textFile = join(dir, 'line.txt');
  const wavFile = join(dir, 'line.wav');
  try {
    writeFileSync(textFile, line.text, 'utf8');
    runPowerShell([
      '-TextFile',
      textFile,
      '-OutFile',
      wavFile,
      '-Voice',
      pickVoice(script.language, line.voice),
      '-Rate',
      String(toSapiRate(script.speed)),
    ]);
    return readFileSync(wavFile);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}
