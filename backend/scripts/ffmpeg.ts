/**
 * WAV nach MP3 – der eine Schritt, den die lokale Sprachausgabe braucht.
 *
 * System.Speech kann nur WAV schreiben, die Mediathek erwartet aber MP3: Die
 * Adressen in der Datenbank enden auf `.mp3`, und der Generator setzt die
 * Zeilen einer Folge zusammen, indem er MP3-Rahmen aneinanderhängt (siehe
 * `mp3-duration.ts`). Bei WAV ginge das nicht – dessen Kopfdaten stehen einmal
 * am Anfang und enthalten die Gesamtlänge.
 *
 * Für den OpenAI-Weg wird dieses Modul nicht gebraucht; dort kommt bereits
 * MP3 zurück.
 */
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

/** Über `FFMPEG_PATH` lässt sich eine Installation außerhalb des PATH angeben. */
const FFMPEG = process.env.FFMPEG_PATH ?? 'ffmpeg';

export function ffmpegAvailable(): boolean {
  try {
    execFileSync(FFMPEG, ['-version'], { stdio: 'ignore', windowsHide: true });
    return true;
  } catch {
    return false;
  }
}

export const FFMPEG_HINT =
  `ffmpeg wurde nicht gefunden (gesucht als "${FFMPEG}").\n` +
  'Die lokale Sprachausgabe liefert WAV; für die Mediathek wird daraus MP3.\n\n' +
  'Installieren, z. B.:  winget install Gyan.FFmpeg\n' +
  'Danach das Terminal neu starten, damit ffmpeg im PATH liegt.\n' +
  'Alternativ den vollen Pfad in FFMPEG_PATH eintragen.';

/**
 * Eine WAV-Aufnahme nach MP3 wandeln.
 *
 * Mono mit 24 kHz und 64 kbit/s: Sprache braucht nicht mehr, und die Dateien
 * bleiben klein genug, um sie über ein Mobilfunknetz zu laden.
 */
export function wavToMp3(wav: Buffer): Buffer {
  const dir = mkdtempSync(join(tmpdir(), 'lingua-mp3-'));
  const inFile = join(dir, 'in.wav');
  const outFile = join(dir, 'out.mp3');
  try {
    writeFileSync(inFile, wav);
    execFileSync(
      FFMPEG,
      ['-loglevel', 'error', '-y', '-i', inFile, '-ac', '1', '-ar', '24000', '-b:a', '64k', outFile],
      { stdio: 'pipe', windowsHide: true },
    );
    return readFileSync(outFile);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}
