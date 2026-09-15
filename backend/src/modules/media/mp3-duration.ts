/**
 * Spieldauer einer MP3 aus den Rahmenköpfen.
 *
 * Bewusst ohne zusätzliche Abhängigkeit: Ein MPEG-Layer-III-Rahmen trägt immer
 * 1152 Abtastwerte, die Dauer ergibt sich also aus Rahmenzahl und Abtastrate.
 * Der Rahmenkopf nennt Bitrate, Abtastrate und Auffüllbit, daraus folgt die
 * Länge des Rahmens und damit der Beginn des nächsten.
 *
 * Gebraucht wird das von `scripts/generate-media-audio.ts`: Die Dauer einer
 * Folge steht in der Datenbank und trägt in der App den Fortschrittsbalken.
 * Eine geschätzte Zahl reicht dafür nicht – bis hierher behauptete ein
 * Mediathek-Eintrag 21 Minuten Spielzeit, während es die Datei gar nicht gab.
 *
 * Verarbeitet auch aneinandergehängte Dateien, wie sie beim Zusammensetzen
 * eines Dialogs aus einzeln synthetisierten Zeilen entstehen.
 */

/** Bitraten in kbit/s nach Index, MPEG-1 Layer III. 0 = ungültig. */
const BITRATES = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 0];

/** Abtastraten in Hz nach Index, MPEG-1. 0 = reserviert. */
const SAMPLE_RATES = [44_100, 48_000, 32_000, 0];

/** Abtastwerte je Rahmen – bei Layer III unveränderlich. */
const SAMPLES_PER_FRAME = 1152;

export interface Mp3Info {
  seconds: number;
  frames: number;
  sampleRate: number;
}

export function readMp3Info(buffer: Buffer | Uint8Array): Mp3Info {
  const bytes = Buffer.isBuffer(buffer) ? buffer : Buffer.from(buffer);
  let offset = skipId3(bytes);

  let frames = 0;
  let sampleRate = 0;

  while (offset + 4 <= bytes.length) {
    // Rahmensynchronisation: elf gesetzte Bits am Stück.
    if (bytes[offset] !== 0xff || (bytes[offset + 1] & 0xe0) !== 0xe0) {
      offset += 1;
      continue;
    }

    const bitrate = BITRATES[(bytes[offset + 2] & 0xf0) >> 4] * 1000;
    const rate = SAMPLE_RATES[(bytes[offset + 2] & 0x0c) >> 2];
    if (bitrate === 0 || rate === 0) {
      offset += 1; // kein gültiger Kopf, nur eine zufällige Bitfolge
      continue;
    }

    const padding = (bytes[offset + 2] & 0x02) >> 1;
    const size = Math.floor((144 * bitrate) / rate) + padding;
    if (size <= 0) {
      offset += 1;
      continue;
    }

    frames += 1;
    sampleRate = rate;
    offset += size;
  }

  return {
    frames,
    sampleRate,
    seconds: sampleRate > 0 ? (frames * SAMPLES_PER_FRAME) / sampleRate : 0,
  };
}

/** Länge in ganzen Sekunden – die Form, in der die Datenbank sie führt. */
export function readMp3DurationSec(buffer: Buffer | Uint8Array): number {
  return Math.round(readMp3Info(buffer).seconds);
}

/**
 * Überspringt einen ID3v2-Kopf am Dateianfang. Seine Größe steht in vier
 * Bytes, die je nur sieben Bit nutzen – sonst könnte darin versehentlich ein
 * Synchronisationsmuster stehen.
 */
function skipId3(bytes: Buffer): number {
  if (bytes.length < 10 || bytes.toString('latin1', 0, 3) !== 'ID3') return 0;
  const size =
    ((bytes[6] & 0x7f) << 21) |
    ((bytes[7] & 0x7f) << 14) |
    ((bytes[8] & 0x7f) << 7) |
    (bytes[9] & 0x7f);
  return 10 + size;
}

/**
 * Ein stiller MPEG-Rahmen, 26,12 ms lang (128 kbit/s, 44,1 kHz, mono).
 *
 * Für die Pause zwischen zwei Sprechenden. Einfach Nullbytes einzuschieben
 * ginge nicht: Ein Decoder erwartet lückenlos aufeinanderfolgende Rahmen und
 * verlöre sonst die Synchronisation.
 */
export const SILENT_FRAME: Buffer = Buffer.concat([
  Buffer.from([0xff, 0xfb, 0x90, 0xc4]),
  Buffer.alloc(413),
]);

export const SILENT_FRAME_SEC = SAMPLES_PER_FRAME / 44_100;

/** Stille der gewünschten Länge, aufgerundet auf ganze Rahmen. */
export function silentMp3(seconds: number): Buffer {
  const count = Math.max(0, Math.round(seconds / SILENT_FRAME_SEC));
  return Buffer.concat(Array.from({ length: count }, () => SILENT_FRAME));
}
