/**
 * Rendert das App-Icon: ein Panda-Gesicht als flache Strichzeichnung, wie die
 * übrigen Bildmarken der App (siehe `render-home-covers.mjs`) über
 * vorzeichenbehaftete Abstandsfelder (SDF) gerechnet statt mit einer
 * Bildbearbeitung erzeugt.
 *
 * Ein App-Icon muss auf 40×40 Punkten noch erkennbar sein – deshalb wenige,
 * große, kontrastreiche Formen statt Verlauf oder Kornstruktur: weißer Kopf,
 * zwei schwarze Ohren, zwei schräg stehende Augenflecken, dazu Nase und ein
 * kleines Lächeln.
 *
 * Drei Dateien entstehen daraus:
 *  - assets/icon.png            – 1024×1024, deckend, mit dem Rot des Bands
 *    als Fläche (siehe `theme.colors.primary`).
 *  - assets/adaptive-icon.png   – 1024×1024, transparent, nur der Panda
 *    kleiner gesetzt, damit er innerhalb der runden/eckigen Maske von Android
 *    nicht beschnitten wird.
 *  - assets/favicon.png         – 48×48 fürs Browser-Tab, dieselbe Zeichnung
 *    wie das App-Icon, nur klein gerechnet statt herunterskaliert.
 *
 * Aufruf:  node scripts/render-app-icon.mjs
 */
import { deflateSync } from 'node:zlib';
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = resolve(ROOT, 'mobile/assets');

// --------------------------------------------------------------- Mathe/Hilfen

const clamp = (v, lo, hi) => (v < lo ? lo : v > hi ? hi : v);
const mix = (a, b, t) => a + (b - a) * t;

function smoothstep(edge0, edge1, x) {
  const t = clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
}

const mixColor = (a, b, t) => [mix(a[0], b[0], t), mix(a[1], b[1], t), mix(a[2], b[2], t)];

function toLocal(px, py, cx, cy, angle) {
  const dx = px - cx;
  const dy = py - cy;
  const c = Math.cos(-angle);
  const s = Math.sin(-angle);
  return [dx * c - dy * s, dx * s + dy * c];
}

function sdCircle(x, y, cx, cy, r) {
  return Math.hypot(x - cx, y - cy) - r;
}

/** Abstand zu einer Ellipse, im mitgedrehten System des Kreises angenähert. */
function sdEllipse(x, y, cx, cy, angle, rx, ry) {
  const [lx, ly] = toLocal(x, y, cx, cy, angle);
  // Auf einen Einheitskreis stauchen und den Abstand zurück in Bildmaß skalieren –
  // für die kompakten, fast kreisförmigen Formen hier genau genug.
  const q = Math.hypot(lx / rx, ly / ry);
  return (q - 1) * Math.min(rx, ry);
}

function sdRoundRect(x, y, halfW, halfH, r) {
  const qx = Math.abs(x) - halfW + r;
  const qy = Math.abs(y) - halfH + r;
  const outside = Math.hypot(Math.max(qx, 0), Math.max(qy, 0));
  return Math.min(Math.max(qx, qy), 0) + outside - r;
}

// ------------------------------------------------------------------ Leinwand

class Canvas {
  /** `channels`: 3 = RGB (deckend), 4 = RGBA (mit Alpha, für die Android-Ebene). */
  constructor(width, height, channels = 3) {
    this.width = width;
    this.height = height;
    this.channels = channels;
    this.data = new Float32Array(width * height * channels);
  }

  /** Farbe an einer Stelle mit Deckung `alpha` darüberlegen. */
  blend(i, color, alpha) {
    if (alpha <= 0) return;
    const a = alpha > 1 ? 1 : alpha;
    const d = this.data;
    d[i] = mix(d[i], color[0], a);
    d[i + 1] = mix(d[i + 1], color[1], a);
    d[i + 2] = mix(d[i + 2], color[2], a);
    if (this.channels === 4) d[i + 3] = mix(d[i + 3], 255, a);
  }
}

// ------------------------------------------------------------------- PNG-Ausgabe

const CRC_TABLE = (() => {
  const table = new Int32Array(256);
  for (let n = 0; n < 256; n += 1) {
    let c = n;
    for (let k = 0; k < 8; k += 1) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c;
  }
  return table;
})();

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i += 1) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, body) {
  const head = Buffer.alloc(8);
  head.writeUInt32BE(body.length, 0);
  head.write(type, 4, 'ascii');
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([head.subarray(4), body])), 0);
  return Buffer.concat([head, body, crc]);
}

/** Paeth-Prädiktor aus der PNG-Spezifikation. */
function paeth(a, b, c) {
  const p = a + b - c;
  const pa = Math.abs(p - a);
  const pb = Math.abs(p - b);
  const pc = Math.abs(p - c);
  if (pa <= pb && pa <= pc) return a;
  return pb <= pc ? b : c;
}

function writePng(canvas, file) {
  const { width, height, data, channels } = canvas;
  const stride = width * channels;
  const bpp = channels;

  const raw = Buffer.alloc((stride + 1) * height);
  const prev = new Uint8Array(stride);
  const row = new Uint8Array(stride);
  const candidate = new Uint8Array(stride);
  const best = new Uint8Array(stride);

  for (let y = 0; y < height; y += 1) {
    // `Canvas.blend` accumulates colour weighted by coverage – premultiplied
    // alpha. PNG expects straight alpha, so RGB is divided back out here;
    // fully transparent pixels have no meaningful colour and stay at 0.
    for (let x = 0; x < width; x += 1) {
      const base = (y * width + x) * channels;
      if (channels === 4) {
        const a = data[base + 3] / 255;
        for (let c = 0; c < 3; c += 1) {
          const straight = a > 0 ? data[base + c] / a : 0;
          row[x * 4 + c] = clamp(Math.round(straight), 0, 255);
        }
        row[x * 4 + 3] = clamp(Math.round(data[base + 3]), 0, 255);
      } else {
        for (let c = 0; c < channels; c += 1) {
          row[x * channels + c] = clamp(Math.round(data[base + c]), 0, 255);
        }
      }
    }

    let bestType = 0;
    let bestScore = Infinity;

    for (let type = 0; type < 5; type += 1) {
      let score = 0;
      for (let x = 0; x < stride; x += 1) {
        const a = x >= bpp ? row[x - bpp] : 0;
        const b = prev[x];
        const c = x >= bpp ? prev[x - bpp] : 0;
        let value;
        if (type === 0) value = row[x];
        else if (type === 1) value = row[x] - a;
        else if (type === 2) value = row[x] - b;
        else if (type === 3) value = row[x] - ((a + b) >> 1);
        else value = row[x] - paeth(a, b, c);
        value &= 0xff;
        candidate[x] = value;
        score += value < 128 ? value : 256 - value;
      }
      if (score < bestScore) {
        bestScore = score;
        bestType = type;
        best.set(candidate);
      }
    }

    const base = y * (stride + 1);
    raw[base] = bestType;
    raw.set(best, base + 1);
    prev.set(row);
  }

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // Bittiefe
  ihdr[9] = channels === 4 ? 6 : 2; // Farbtyp: RGBA bzw. RGB
  const png = Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ]);

  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, png);
  return png.length;
}

// --------------------------------------------------------------------- Farben

const PANDA_WHITE = [255, 255, 255];
const PANDA_BLACK = [26, 24, 24];
const BRAND_RED = [0x73, 0x03, 0x0d]; // theme.colors.primary
const BLUSH = [231, 138, 143];

/**
 * Das Pandagesicht selbst, größenunabhängig: `cx`/`cy`/`r` in Pixeln geben
 * Mittelpunkt und Kopfradius vor, alle übrigen Maße hängen von `r` ab. So
 * liefert dieselbe Funktion das große Icon, die kleiner gesetzte
 * Android-Ebene und das winzige Favicon ohne separate Skalierung.
 */
function paintPanda(canvas, cx, cy, r, aa) {
  const { width: W, height: H, channels } = canvas;

  const earR = r * 0.46;
  const earDX = r * 0.86;
  const earDY = r * 0.86;

  const patchAngle = (18 * Math.PI) / 180;
  const patchDX = r * 0.44;
  const patchDY = r * -0.06;
  const patchRX = r * 0.34;
  const patchRY = r * 0.44;

  const eyeDX = r * 0.4;
  const eyeDY = r * 0.02;
  const eyeR = r * 0.1;
  const pupilR = r * 0.052;
  const pupilOffX = r * 0.02;
  const pupilOffY = r * 0.03;
  const highlightR = r * 0.02;

  const noseCY = cy + r * 0.28;
  const noseHW = r * 0.15;
  const noseHH = r * 0.1;

  const cheekDX = r * 0.5;
  const cheekDY = r * 0.32;
  const cheekR = r * 0.16;

  for (let y = 0; y < H; y += 1) {
    for (let x = 0; x < W; x += 1) {
      const i = (y * W + x) * channels;

      // --- Ohren: zwei schwarze Kreise, teils hinter dem Kopf.
      for (const side of [-1, 1]) {
        const d = sdCircle(x, y, cx + side * earDX, cy - earDY, earR);
        canvas.blend(i, PANDA_BLACK, smoothstep(aa, -aa, d));
      }

      // --- Kopf: weißer Kreis über den Ohren.
      const headD = sdCircle(x, y, cx, cy, r);
      const headCov = smoothstep(aa, -aa, headD);
      canvas.blend(i, PANDA_WHITE, headCov);
      if (headCov <= 0) continue;

      // --- Wangen: ein Hauch Farbe, nur innerhalb des Kopfs.
      for (const side of [-1, 1]) {
        const d = sdCircle(x, y, cx + side * cheekDX, cy + cheekDY, cheekR);
        canvas.blend(i, BLUSH, smoothstep(aa, -aa, d) * headCov * 0.35);
      }

      // --- Augenflecken: schräg stehende schwarze Ellipsen.
      for (const side of [-1, 1]) {
        const d = sdEllipse(x, y, cx + side * patchDX, cy + patchDY, side * patchAngle, patchRX, patchRY);
        canvas.blend(i, PANDA_BLACK, smoothstep(aa, -aa, d) * headCov);
      }

      // --- Augen: weißer Kreis, schwarze Pupille, kleiner Lichtpunkt.
      for (const side of [-1, 1]) {
        const ex = cx + side * eyeDX;
        const ey = cy + eyeDY;
        const eyeCov = smoothstep(aa, -aa, sdCircle(x, y, ex, ey, eyeR)) * headCov;
        canvas.blend(i, PANDA_WHITE, eyeCov);
        const pupilCov =
          smoothstep(aa, -aa, sdCircle(x, y, ex + side * pupilOffX, ey + pupilOffY, pupilR)) * headCov;
        canvas.blend(i, PANDA_BLACK, pupilCov);
        const hlCov =
          smoothstep(aa, -aa, sdCircle(x, y, ex + side * pupilOffX - r * 0.02, ey + pupilOffY - r * 0.02, highlightR)) *
          headCov;
        canvas.blend(i, PANDA_WHITE, hlCov);
      }

      // --- Nase: kleine schwarze Pille.
      const noseD = sdRoundRect(x - cx, y - noseCY, noseHW, noseHH, noseHH);
      canvas.blend(i, PANDA_BLACK, smoothstep(aa, -aa, noseD) * headCov);

      // --- Lächeln: von der Nase aus ansteigende Kurve – die Mitte liegt
      // tiefer als die Mundwinkel, wie bei einem lächelnden Mund.
      const smileBase = noseCY + noseHH * 0.7;
      for (const side of [-1, 1]) {
        const lx = x - cx;
        const t = clamp((side * lx) / (r * 0.3), 0, 1);
        const curveX = side * t * r * 0.3;
        const curveY = smileBase - t * t * r * 0.16;
        const dSeg = Math.hypot(lx - curveX, y - curveY);
        canvas.blend(i, PANDA_BLACK, smoothstep(r * 0.026, r * 0.026 - aa, dSeg) * headCov);
      }
    }
  }
}

// ------------------------------------------------------------------------ Icons

/** assets/icon.png – deckende Fläche in Bandrot, Panda mittig, knapper Rand. */
function renderIcon(size) {
  const canvas = new Canvas(size, size, 3);
  const S = size;
  for (let y = 0; y < S; y += 1) {
    for (let x = 0; x < S; x += 1) {
      const i = (y * S + x) * 3;
      canvas.blend(i, BRAND_RED, 1);
    }
  }
  paintPanda(canvas, S * 0.5, S * 0.53, S * 0.33, S * 0.0016);
  return canvas;
}

/** assets/adaptive-icon.png – transparente Ebene, Panda innerhalb der Android-Sicherheitszone. */
function renderAdaptiveIcon(size) {
  const canvas = new Canvas(size, size, 4);
  paintPanda(canvas, size * 0.5, size * 0.53, size * 0.24, size * 0.0016);
  return canvas;
}

/** assets/favicon.png – dieselbe Zeichnung wie das App-Icon, klein gerechnet. */
function renderFavicon(size) {
  return renderIcon(size);
}

// --------------------------------------------------------------------- Ausführen

const written = [
  [renderIcon(1024), 'icon.png'],
  [renderAdaptiveIcon(1024), 'adaptive-icon.png'],
  [renderFavicon(48), 'favicon.png'],
];

for (const [canvas, name] of written) {
  const file = resolve(OUT_DIR, name);
  const bytes = writePng(canvas, file);
  console.log(`${name}: ${(bytes / 1024).toFixed(1)} KB`);
}
