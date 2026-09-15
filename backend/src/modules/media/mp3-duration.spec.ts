import {
  SILENT_FRAME,
  SILENT_FRAME_SEC,
  readMp3DurationSec,
  readMp3Info,
  silentMp3,
} from './mp3-duration';

/**
 * Die Rahmen werden hier von Hand gebaut, statt eine Beispieldatei ins
 * Repository zu legen: So steht im Test, welche Kopfbits welche Dauer ergeben
 * sollen, und nicht nur „diese Datei ist 3 Sekunden lang".
 */
function frame({
  bitrateIndex,
  rateIndex = 0,
  padding = 0,
}: {
  bitrateIndex: number;
  rateIndex?: number;
  padding?: number;
}): Buffer {
  const BITRATES = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 0];
  const RATES = [44_100, 48_000, 32_000];
  const byte2 = (bitrateIndex << 4) | (rateIndex << 2) | (padding << 1);
  const size = Math.floor((144 * BITRATES[bitrateIndex] * 1000) / RATES[rateIndex]) + padding;
  return Buffer.concat([Buffer.from([0xff, 0xfb, byte2, 0xc4]), Buffer.alloc(size - 4)]);
}

describe('readMp3Info', () => {
  it('zählt Rahmen und rechnet sie in Sekunden um', () => {
    const one = frame({ bitrateIndex: 9 }); // 128 kbit/s, 44,1 kHz
    const info = readMp3Info(Buffer.concat(Array.from({ length: 100 }, () => one)));

    expect(info.frames).toBe(100);
    expect(info.sampleRate).toBe(44_100);
    // 100 Rahmen à 1152 Abtastwerte bei 44,1 kHz
    expect(info.seconds).toBeCloseTo((100 * 1152) / 44_100, 5);
  });

  it('liest die Rahmenlänge aus Bitrate und Abtastrate, nicht aus einer festen Zahl', () => {
    // Drei verschiedene Bitraten: Wer die Länge fest verdrahtet, zählt falsch.
    for (const bitrateIndex of [5, 9, 14]) {
      const one = frame({ bitrateIndex });
      const data = Buffer.concat(Array.from({ length: 40 }, () => one));
      expect(readMp3Info(data).frames).toBe(40);
    }
  });

  it('berücksichtigt das Auffüllbit', () => {
    const padded = frame({ bitrateIndex: 9, padding: 1 });
    const data = Buffer.concat(Array.from({ length: 20 }, () => padded));
    expect(readMp3Info(data).frames).toBe(20);
  });

  it('erkennt 48 kHz als Abtastrate', () => {
    const one = frame({ bitrateIndex: 9, rateIndex: 1 });
    const info = readMp3Info(Buffer.concat(Array.from({ length: 50 }, () => one)));
    expect(info.sampleRate).toBe(48_000);
    expect(info.seconds).toBeCloseTo((50 * 1152) / 48_000, 5);
  });

  it('überspringt einen ID3v2-Kopf', () => {
    const payloadSize = 300;
    const id3 = Buffer.concat([
      Buffer.from('ID3'),
      Buffer.from([0x03, 0x00, 0x00]),
      // Größe in vier 7-Bit-Gruppen: 300 = 0b10_0101100
      Buffer.from([0x00, 0x00, 0x02, 0x2c]),
      Buffer.alloc(payloadSize, 0xff), // 0xFF-Füllung: darf nicht als Rahmen zählen
    ]);
    const audio = Buffer.concat(Array.from({ length: 10 }, () => frame({ bitrateIndex: 9 })));

    expect(readMp3Info(Buffer.concat([id3, audio])).frames).toBe(10);
  });

  it('liefert 0 für Daten ohne einen einzigen gültigen Rahmen', () => {
    expect(readMp3Info(Buffer.alloc(2048)).seconds).toBe(0);
    expect(readMp3DurationSec(Buffer.alloc(0))).toBe(0);
  });

  it('zählt aneinandergehängte Abschnitte zusammen – so entsteht ein Dialog', () => {
    const a = Buffer.concat(Array.from({ length: 30 }, () => frame({ bitrateIndex: 9 })));
    const b = Buffer.concat(Array.from({ length: 45 }, () => frame({ bitrateIndex: 9 })));
    const gap = silentMp3(0.5);

    const info = readMp3Info(Buffer.concat([a, gap, b]));
    expect(info.frames).toBe(30 + 45 + gap.length / SILENT_FRAME.length);
  });
});

describe('silentMp3', () => {
  it('erzeugt Stille von etwa der gewünschten Länge', () => {
    expect(readMp3Info(silentMp3(1)).seconds).toBeCloseTo(1, 1);
    expect(readMp3Info(silentMp3(0.45)).seconds).toBeCloseTo(0.45, 1);
  });

  it('erzeugt gültige Rahmen und keine Nullbytes', () => {
    const data = silentMp3(0.25);
    expect(data.length % SILENT_FRAME.length).toBe(0);
    expect(data[0]).toBe(0xff);
    expect(readMp3Info(data).frames).toBe(data.length / SILENT_FRAME.length);
  });

  it('ist bei 0 Sekunden leer', () => {
    expect(silentMp3(0).length).toBe(0);
    expect(silentMp3(-1).length).toBe(0);
  });

  it('nennt die Rahmendauer passend zur erzeugten Stille', () => {
    expect(SILENT_FRAME_SEC).toBeCloseTo(0.02612, 5);
  });
});
