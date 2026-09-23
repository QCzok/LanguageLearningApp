/**
 * Rendert Bilder der App als echte PNG-Dateien.
 *
 * Hintergrund: die Kacheln der Startseite und die Buchdeckel im Regal waren
 * flache SVG-Zeichnungen (siehe `features/home/HomeCovers.tsx` und
 * `features/workbook/BookCovers.tsx`). Wo ein richtiges Bild stehen soll – mit
 * weichem Licht, Schatten und Materialstruktur – lässt sich das als Vektor nur
 * mühsam nachbauen, deshalb wird hier pixelweise gerendert und das Ergebnis
 * als PNG ins Asset-Verzeichnis geschrieben.
 *
 * Gezeichnet wird über vorzeichenbehaftete Abstandsfelder (SDF): jede Form
 * liefert für einen Punkt den Abstand zu ihrem Rand, daraus ergibt sich die
 * Deckung (weiche Kante) und – mit größerem Weichzeichnungsradius und Versatz –
 * auch gleich der Schlagschatten.
 *
 * Aufruf:  node scripts/render-home-covers.mjs
 */
import { deflateSync } from 'node:zlib';
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

// --------------------------------------------------------------- Mathe/Hilfen

const clamp = (v, lo, hi) => (v < lo ? lo : v > hi ? hi : v);
const mix = (a, b, t) => a + (b - a) * t;

/** Weicher 0→1-Übergang zwischen `edge0` und `edge1`. */
function smoothstep(edge0, edge1, x) {
  const t = clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
}

const mixColor = (a, b, t) => [mix(a[0], b[0], t), mix(a[1], b[1], t), mix(a[2], b[2], t)];

/** Punkt in das lokale (mitgedrehte) Koordinatensystem einer Form bringen. */
function toLocal(px, py, cx, cy, angle) {
  const dx = px - cx;
  const dy = py - cy;
  const c = Math.cos(-angle);
  const s = Math.sin(-angle);
  return [dx * c - dy * s, dx * s + dy * c];
}

/** Abstand zu einem abgerundeten Rechteck, Ursprung in der Mitte. */
function sdRoundRect(x, y, halfW, halfH, r) {
  const qx = Math.abs(x) - halfW + r;
  const qy = Math.abs(y) - halfH + r;
  const outside = Math.hypot(Math.max(qx, 0), Math.max(qy, 0));
  return Math.min(Math.max(qx, qy), 0) + outside - r;
}

/** Abstand zu einer Strecke – Basis für Stift, Kanten und Striche. */
function sdSegment(px, py, ax, ay, bx, by) {
  const vx = bx - ax;
  const vy = by - ay;
  const wx = px - ax;
  const wy = py - ay;
  const t = clamp((wx * vx + wy * vy) / (vx * vx + vy * vy), 0, 1);
  return Math.hypot(wx - vx * t, wy - vy * t);
}

/** Abstand zu einem Dreieck (für die Stiftspitze). */
function sdTriangle(px, py, p0, p1, p2) {
  const edge = (a, b) => {
    const ex = b[0] - a[0];
    const ey = b[1] - a[1];
    const wx = px - a[0];
    const wy = py - a[1];
    const t = clamp((wx * ex + wy * ey) / (ex * ex + ey * ey), 0, 1);
    return Math.hypot(wx - ex * t, wy - ey * t);
  };
  const d = Math.min(edge(p0, p1), edge(p1, p2), edge(p2, p0));
  const sign = (a, b, c) => (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
  const d0 = sign(p0, p1, [px, py]);
  const d1 = sign(p1, p2, [px, py]);
  const d2 = sign(p2, p0, [px, py]);
  const inside = (d0 >= 0 && d1 >= 0 && d2 >= 0) || (d0 <= 0 && d1 <= 0 && d2 <= 0);
  return inside ? -d : d;
}

// ------------------------------------------------------------------- Rauschen

/** Deterministisches Pixelrauschen (0..1) – gleicher Seed, gleiches Bild. */
function hash2(x, y) {
  let h = x * 374761393 + y * 668265263;
  h = (h ^ (h >> 13)) * 1274126177;
  return ((h ^ (h >> 16)) >>> 0) / 4294967295;
}

/** Weiches Wertrauschen für großflächige Wolken im Hintergrund. */
function valueNoise(x, y) {
  const x0 = Math.floor(x);
  const y0 = Math.floor(y);
  const fx = x - x0;
  const fy = y - y0;
  const ux = fx * fx * (3 - 2 * fx);
  const uy = fy * fy * (3 - 2 * fy);
  const n00 = hash2(x0, y0);
  const n10 = hash2(x0 + 1, y0);
  const n01 = hash2(x0, y0 + 1);
  const n11 = hash2(x0 + 1, y0 + 1);
  return mix(mix(n00, n10, ux), mix(n01, n11, ux), uy);
}

// ------------------------------------------------------------------ Leinwand

class Canvas {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.data = new Float32Array(width * height * 3);
  }

  /** Farbe an einer Stelle mit Deckung `alpha` darüberlegen. */
  blend(i, color, alpha) {
    if (alpha <= 0) return;
    const a = alpha > 1 ? 1 : alpha;
    const d = this.data;
    d[i] = mix(d[i], color[0], a);
    d[i + 1] = mix(d[i + 1], color[1], a);
    d[i + 2] = mix(d[i + 2], color[2], a);
  }
}

// ------------------------------------------------------------------ PNG-Ausgabe

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

/**
 * PNG schreiben. Für jede Zeile werden alle fünf Filter durchprobiert und der
 * mit der kleinsten Summe der Absolutbeträge genommen – das ist die übliche
 * Heuristik und drückt bei weichen Verläufen deutlich mehr als ein fester
 * Filter.
 */
function writePng(canvas, file) {
  const { width, height, data } = canvas;
  const stride = width * 3;
  const bpp = 3;

  const raw = Buffer.alloc((stride + 1) * height);
  const prev = new Uint8Array(stride);
  const row = new Uint8Array(stride);
  const candidate = new Uint8Array(stride);
  const best = new Uint8Array(stride);

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < stride; x += 1) {
      row[x] = clamp(Math.round(data[y * stride + x]), 0, 255);
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
  ihdr[9] = 2; // Farbtyp: RGB
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

/** Paeth-Prädiktor aus der PNG-Spezifikation. */
function paeth(a, b, c) {
  const p = a + b - c;
  const pa = Math.abs(p - a);
  const pb = Math.abs(p - b);
  const pc = Math.abs(p - c);
  if (pa <= pb && pa <= pc) return a;
  return pb <= pc ? b : c;
}

// ------------------------------------------------- Szene: Vokabeltrainer

/**
 * Karteikartenstapel auf einer Tischfläche, von links oben angeleuchtet.
 * Die drei Karten liegen im Querformat und leicht gegeneinander verdreht; die
 * oberste trägt einen blauen Wortbalken, zwei ruhige Übersetzungszeilen, eine
 * Sprachmarkierung und einen kleinen Fortschrittsbalken. Rechts unten liegt
 * ein Stift quer über der Fläche.
 */
const CARDS = [
  // Von hinten nach vorn: Mitte (Anteil von Breite/Höhe), Drehung, Helligkeit.
  { cx: 0.432, cy: 0.598, deg: -12, tone: 0.84 },
  { cx: 0.464, cy: 0.549, deg: -5.5, tone: 0.93 },
  { cx: 0.498, cy: 0.496, deg: 2.5, tone: 1 },
];

const CARD_HW = 0.288; // halbe Kartenbreite, in Bildhöhen
const CARD_HH = 0.197; // halbe Kartenhöhe
const CARD_MARGIN = -0.244; // linker Textrand auf der Karte

const PAPER_LIGHT = [255, 255, 255];
const PAPER_DARK = [219, 229, 244];
const INK_BLUE = [37, 99, 235];
const INK_SOFT = [183, 198, 224];
const SHADOW = [44, 70, 118];

// Kornstärke in Farbstufen. Siehe Kommentar unten: alles über 0 schlägt
// spürbar auf die Dateigröße durch, deshalb hier aus.
const GRAIN_GLOBAL = 0;
const GRAIN_PAPER = 0;

function renderVocabulary(WIDTH, HEIGHT) {
  const canvas = new Canvas(WIDTH, HEIGHT);
  const S = HEIGHT; // Bezugsgröße für alle Anteilsmaße
  const aa = 1.1; // Kantenglättung in Pixeln

  const cards = CARDS.map((c) => ({
    ...c,
    px: c.cx * WIDTH,
    py: c.cy * HEIGHT,
    w: CARD_HW * S,
    h: CARD_HH * S,
    r: 0.026 * S,
    angle: (c.deg * Math.PI) / 180,
  }));

  const top = cards[cards.length - 1];

  // Stift: Achse quer über die rechte untere Ecke.
  const penAngle = (-34 * Math.PI) / 180;
  const penCx = 0.855 * WIDTH;
  const penCy = 0.775 * HEIGHT;
  const penHalfLen = 0.29 * S;
  const penHalfThick = 0.025 * S;

  for (let y = 0; y < HEIGHT; y += 1) {
    for (let x = 0; x < WIDTH; x += 1) {
      const i = (y * WIDTH + x) * 3;
      const nx = x / WIDTH;
      const ny = y / HEIGHT;

      // --- Hintergrund: Verlauf, Lichtkegel von links oben, weiche Wolken.
      let col = mixColor([236, 244, 255], [150, 182, 228], smoothstep(-0.2, 1.1, ny));

      const glow = Math.exp(-(((nx - 0.28) ** 2) / 0.24 + ((ny - 0.16) ** 2) / 0.18));
      col = mixColor(col, [255, 255, 255], glow * 0.6);

      const cloud = valueNoise(nx * 3.2 + 11, ny * 3.2 + 7);
      col = mixColor(col, [116, 155, 213], (cloud - 0.5) * 0.14 + 0.06);

      // --- Tischfläche: die untere Hälfte liegt etwas satter und kühler.
      const desk = smoothstep(0.55, 0.95, ny + (nx - 0.5) * 0.06);
      col = mixColor(col, [126, 162, 212], desk * 0.5);

      // --- Lichtpfütze hinter dem Stapel, damit sich die Karten abheben.
      const pool = Math.exp(-(((nx - 0.45) ** 2) / 0.1 + ((ny - 0.52) ** 2) / 0.14));
      col = mixColor(col, [255, 255, 255], pool * 0.32);

      // --- Karten inkl. Schlagschatten, von hinten nach vorn.
      let onPaper = 0;
      for (const card of cards) {
        // Zwei Schattenlagen: ein breiter weicher Umgebungsschatten und ein
        // schmaler Kontaktschatten direkt an der Kante. Nur zusammen sieht es
        // so aus, als läge die Karte wirklich auf der Fläche.
        for (const [offset, blur, strength] of [
          [0.03 * S, 0.075 * S, 0.3],
          [0.008 * S, 0.018 * S, 0.3],
        ]) {
          const [sx, sy] = toLocal(x, y - offset, card.px, card.py, card.angle);
          const sd = sdRoundRect(sx, sy, card.w, card.h, card.r);
          col = mixColor(col, SHADOW, smoothstep(blur, -blur * 0.2, sd) * strength);
        }

        // Kartenfläche.
        const [lx, ly] = toLocal(x, y, card.px, card.py, card.angle);
        const d = sdRoundRect(lx, ly, card.w, card.h, card.r);
        const cov = smoothstep(aa, -aa, d);
        if (cov <= 0) continue;

        // Papier: Licht von links oben; hintere Karten liegen im Halbschatten.
        const lightT = clamp((lx / card.w) * 0.3 + (ly / card.h) * 0.45 + 0.5, 0, 1);
        let paper = mixColor(PAPER_LIGHT, PAPER_DARK, lightT);
        paper = mixColor(paper, [143, 172, 212], (1 - card.tone) * 1.5);

        // Feine Randlinie, damit sich die Karten voneinander absetzen.
        paper = mixColor(paper, [136, 165, 210], smoothstep(2.6, 0.4, Math.abs(d)) * 0.5);

        col = mixColor(col, paper, cov);
        onPaper = Math.max(onPaper, cov * card.tone);
      }

      // --- Inhalt der obersten Karte, im mitgedrehten System der Karte.
      const [tx, ty] = toLocal(x, y, top.px, top.py, top.angle);
      const inTop = smoothstep(aa, -aa, sdRoundRect(tx, ty, top.w, top.h, top.r));
      if (inTop > 0) {
        /** Linksbündige Zeile: `w`/`h` und `oy` als Anteil der Bildhöhe. */
        const line = (w, h, oy, color) => {
          const ox = CARD_MARGIN + w / 2;
          const d = sdRoundRect(tx - ox * S, ty - oy * S, (w * S) / 2, (h * S) / 2, (h * S) / 2);
          col = mixColor(col, color, smoothstep(aa, -aa, d) * inTop);
        };

        // Sprachmarkierung oben rechts.
        const tagD = sdRoundRect(tx - 0.212 * S, ty + 0.126 * S, 0.027 * S, 0.027 * S, 0.009 * S);
        col = mixColor(col, [216, 230, 252], smoothstep(aa, -aa, tagD) * inTop);
        const tagInner = sdRoundRect(tx - 0.212 * S, ty + 0.126 * S, 0.0105 * S, 0.0105 * S, 0.0035 * S);
        col = mixColor(col, INK_BLUE, smoothstep(aa, -aa, tagInner) * inTop * 0.9);

        // Das Wort, darunter die Übersetzung in zwei ruhigeren Zeilen.
        line(0.34, 0.032, -0.108, INK_BLUE);
        line(0.25, 0.018, -0.036, INK_SOFT);
        line(0.17, 0.018, 0.009, INK_SOFT);

        // Fortschrittsbalken am unteren Kartenrand.
        line(0.25, 0.015, 0.111, [208, 220, 238]);
        line(0.135, 0.015, 0.111, [59, 130, 246]);
      }

      // --- Stift rechts unten.
      {
        const [px, py] = toLocal(x, y, penCx, penCy, penAngle);
        const bodyD = sdRoundRect(px + penHalfLen * 0.25, py, penHalfLen * 0.75, penHalfThick, penHalfThick * 0.45);
        const tipD = sdTriangle(px, py, [penHalfLen * 0.5, -penHalfThick], [penHalfLen * 0.5, penHalfThick], [penHalfLen * 0.92, 0]);
        const leadD = sdTriangle(px, py, [penHalfLen * 0.82, -penHalfThick * 0.32], [penHalfLen * 0.82, penHalfThick * 0.32], [penHalfLen * 0.92, 0]);
        const penD = Math.min(bodyD, tipD);

        col = mixColor(col, SHADOW, smoothstep(0.045 * S, -0.012 * S, penD - 0.011 * S) * 0.3);

        // Runder Körper: heller Streifen oben, dunkle Kante unten.
        const round = clamp(py / penHalfThick, -1, 1);
        let penCol = mixColor([245, 187, 88], [172, 110, 38], smoothstep(-0.9, 1, round));
        penCol = mixColor(penCol, [255, 236, 198], smoothstep(-0.2, -0.85, round) * 0.75);
        col = mixColor(col, penCol, smoothstep(aa, -aa, bodyD));

        const woodCol = mixColor([242, 216, 176], [184, 146, 98], smoothstep(-0.9, 1, round));
        col = mixColor(col, woodCol, smoothstep(aa, -aa, tipD));
        col = mixColor(col, [66, 70, 82], smoothstep(aa, -aa, leadD));

        // Metallzwinge am Übergang zum Körper.
        const ferruleD = sdRoundRect(px - penHalfLen * 0.44, py, penHalfThick * 0.5, penHalfThick, penHalfThick * 0.3);
        const ferruleCol = mixColor([228, 233, 240], [148, 158, 174], smoothstep(-0.9, 1, round));
        col = mixColor(col, ferruleCol, smoothstep(aa, -aa, ferruleD));
      }

      // --- Unschärfekreise oben rechts für etwas Tiefe.
      for (const [bx, by, br, ba] of [
        [0.86, 0.15, 0.08, 0.28],
        [0.74, 0.08, 0.042, 0.2],
        [0.94, 0.33, 0.028, 0.16],
      ]) {
        const dist = Math.hypot(nx - bx, (ny - by) * (HEIGHT / WIDTH));
        col = mixColor(col, [255, 255, 255], smoothstep(br, br * 0.1, dist) * ba);
      }

      // --- Korn. Standardmäßig aus: zufälliges Pixelrauschen ist für PNG der
      // schlechteste Fall und hat die Datei früher mehr als vervierfacht
      // (396 kB statt 88 kB). Bei Tachengröße sieht man es ohnehin nicht.
      if (GRAIN_PAPER > 0 || GRAIN_GLOBAL > 0) {
        const grain = hash2(x, y) - 0.5;
        const amount = GRAIN_GLOBAL + onPaper * GRAIN_PAPER;
        col = [col[0] + grain * amount, col[1] + grain * amount, col[2] + grain * amount];
      }

      // --- Vignette: Ränder leicht abdunkeln, damit die Kachel Fokus bekommt.
      const vig = Math.hypot(nx - 0.5, (ny - 0.5) * 0.8);
      col = mixColor(col, [56, 82, 128], smoothstep(0.34, 0.8, vig) * 0.18);

      canvas.blend(i, col, 1);
    }
  }

  return canvas;
}

/**
 * Ein Stift schräg über der Fläche – gemeinsame Geometrie für mehrere
 * Kacheln (Vokabeltrainer, Lehrwerk). `s` ist die Bezugsgröße (üblicherweise
 * die Bildhöhe), an der Länge und Stärke hängen.
 */
function drawPen(col, x, y, s, aa, o) {
  const angle = (o.angleDeg * Math.PI) / 180;
  const halfLen = o.halfLen * s;
  const halfThick = o.halfThick * s;
  const [px, py] = toLocal(x, y, o.cx, o.cy, angle);
  const bodyD = sdRoundRect(px + halfLen * 0.25, py, halfLen * 0.75, halfThick, halfThick * 0.45);
  const tipD = sdTriangle(px, py, [halfLen * 0.5, -halfThick], [halfLen * 0.5, halfThick], [halfLen * 0.92, 0]);
  const leadD = sdTriangle(
    px,
    py,
    [halfLen * 0.82, -halfThick * 0.32],
    [halfLen * 0.82, halfThick * 0.32],
    [halfLen * 0.92, 0],
  );
  const penD = Math.min(bodyD, tipD);

  col = mixColor(col, o.shadow, smoothstep(0.045 * s, -0.012 * s, penD - 0.011 * s) * 0.3);

  const round = clamp(py / halfThick, -1, 1);
  let penCol = mixColor(o.barrelLight, o.barrelDark, smoothstep(-0.9, 1, round));
  penCol = mixColor(penCol, [255, 255, 255], smoothstep(-0.2, -0.85, round) * 0.4);
  col = mixColor(col, penCol, smoothstep(aa, -aa, bodyD));

  const tipCol = mixColor(o.tipLight ?? [242, 216, 176], o.tipDark ?? [184, 146, 98], smoothstep(-0.9, 1, round));
  col = mixColor(col, tipCol, smoothstep(aa, -aa, tipD));
  col = mixColor(col, o.lead ?? [66, 70, 82], smoothstep(aa, -aa, leadD));

  const ferruleD = sdRoundRect(px - halfLen * 0.44, py, halfThick * 0.5, halfThick, halfThick * 0.3);
  const ferruleCol = mixColor([228, 233, 240], [148, 158, 174], smoothstep(-0.9, 1, round));
  col = mixColor(col, ferruleCol, smoothstep(aa, -aa, ferruleD));

  return col;
}

/** Weicher Bildhintergrund: Verlauf, ein Lichtkegel, feine Wolkigkeit. */
function paintBackdrop(nx, ny, top, bottom, glowX, glowY, glowSpread) {
  let col = mixColor(top, bottom, smoothstep(-0.2, 1.1, ny));
  const glow = Math.exp(-(((nx - glowX) ** 2) / glowSpread + ((ny - glowY) ** 2) / (glowSpread * 0.75)));
  col = mixColor(col, [255, 255, 255], glow * 0.55);
  const cloud = valueNoise(nx * 3.2 + 11, ny * 3.2 + 7);
  col = mixColor(col, bottom, (cloud - 0.5) * 0.12 + 0.05);
  return col;
}

// ------------------------------------------------------- Szene: Lernheft

/** Aufgeschlagenes Heft mit Stift – zweite Fassung der Home-Kachel. */
function renderNotebook(WIDTH, HEIGHT) {
  const canvas = new Canvas(WIDTH, HEIGHT);
  const S = HEIGHT;
  const aa = 1.1;

  const PAGE = [255, 253, 248];
  const PAGE_SHADE = [237, 226, 202];
  const RULE = [227, 202, 155];
  const PEN_SHADOW = [110, 66, 40];

  const leftPage = { cx: 0.415 * WIDTH, cy: 0.5 * HEIGHT, deg: -7 };
  const rightPage = { cx: 0.585 * WIDTH, cy: 0.5 * HEIGHT, deg: 7 };
  const pageHalfW = 0.225 * S;
  const pageHalfH = 0.31 * S;
  const pageR = 0.018 * S;

  for (let y = 0; y < HEIGHT; y += 1) {
    for (let x = 0; x < WIDTH; x += 1) {
      const i = (y * WIDTH + x) * 3;
      const nx = x / WIDTH;
      const ny = y / HEIGHT;

      let col = paintBackdrop(nx, ny, [252, 240, 210], [237, 206, 149], 0.28, 0.16, 0.26);

      // Tischschatten unter dem Heft.
      const deskPool = Math.exp(-(((nx - 0.5) ** 2) / 0.14 + ((ny - 0.56) ** 2) / 0.12));
      col = mixColor(col, [255, 252, 240], deskPool * 0.3);

      for (const page of [leftPage, rightPage]) {
        const angle = (page.deg * Math.PI) / 180;
        const [sx, sy] = toLocal(x, y - 0.02 * S, page.cx, page.cy, angle);
        const sd = sdRoundRect(sx, sy, pageHalfW, pageHalfH, pageR);
        col = mixColor(col, [120, 90, 54], smoothstep(0.07 * S, -0.02 * S, sd) * 0.28);

        const [lx, ly] = toLocal(x, y, page.cx, page.cy, angle);
        const d = sdRoundRect(lx, ly, pageHalfW, pageHalfH, pageR);
        const cov = smoothstep(aa, -aa, d);
        if (cov <= 0) continue;

        const lightT = clamp((lx / pageHalfW) * 0.25 + (ly / pageHalfH) * 0.4 + 0.5, 0, 1);
        const paper = mixColor(PAGE, PAGE_SHADE, lightT);
        col = mixColor(col, paper, cov);

        // Linierung, zur Buchmitte hin ausgerichtet.
        const towardsSpine = page === leftPage ? 1 : -1;
        for (const ry of [-0.09, -0.02, 0.05, 0.12]) {
          const lineD = sdRoundRect(
            lx - towardsSpine * 0.02 * S,
            ly - ry * S,
            pageHalfW * 0.62,
            0.006 * S,
            0.006 * S,
          );
          col = mixColor(col, RULE, smoothstep(aa, -aa, lineD) * 0.85);
        }
      }

      // Buchrücken-Schatten in der Mitte, wo beide Seiten aufeinandertreffen.
      const spine = Math.exp(-(((nx - 0.5) ** 2) / 0.0009));
      col = mixColor(col, [90, 63, 34], spine * 0.35);

      col = drawPen(col, x, y, S, aa, {
        cx: 0.815 * WIDTH,
        cy: 0.755 * HEIGHT,
        angleDeg: -32,
        halfLen: 0.27,
        halfThick: 0.023,
        shadow: PEN_SHADOW,
        barrelLight: [224, 92, 78],
        barrelDark: [162, 51, 44],
        tipLight: [237, 210, 176],
        tipDark: [180, 142, 96],
      });

      for (const [bx, by, br, ba] of [
        [0.86, 0.15, 0.075, 0.24],
        [0.72, 0.09, 0.04, 0.18],
      ]) {
        const dist = Math.hypot(nx - bx, (ny - by) * (HEIGHT / WIDTH));
        col = mixColor(col, [255, 255, 255], smoothstep(br, br * 0.1, dist) * ba);
      }

      const vig = Math.hypot(nx - 0.5, (ny - 0.5) * 0.8);
      col = mixColor(col, [96, 66, 32], smoothstep(0.34, 0.8, vig) * 0.16);

      canvas.blend(i, col, 1);
    }
  }

  return canvas;
}

// ------------------------------------------------------ Szene: Bibliothek

/** Ein kleines Bücherregal – dritte Fassung der Home-Kachel. */
function renderLibraryShelf(WIDTH, HEIGHT) {
  const canvas = new Canvas(WIDTH, HEIGHT);
  const S = HEIGHT;
  const aa = 1.1;

  const BOOKS = [
    // x-Anteil, Breite, Höhe (in S), Farbe.
    { nx: 0.3, w: 0.052, h: 0.44, color: [70, 140, 108] },
    { nx: 0.358, w: 0.044, h: 0.52, color: [86, 158, 122] },
    { nx: 0.407, w: 0.056, h: 0.36, color: [196, 96, 84] },
    { nx: 0.469, w: 0.05, h: 0.48, color: [70, 140, 108] },
    { nx: 0.525, w: 0.052, h: 0.4, color: [222, 172, 84] },
    { nx: 0.582, w: 0.044, h: 0.54, color: [86, 158, 122] },
    { nx: 0.632, w: 0.056, h: 0.34, color: [70, 140, 108] },
    { nx: 0.694, w: 0.048, h: 0.46, color: [196, 96, 84] },
  ];
  const SHELF_Y = 0.63;
  const SHELF_H = 0.05;

  for (let y = 0; y < HEIGHT; y += 1) {
    for (let x = 0; x < WIDTH; x += 1) {
      const i = (y * WIDTH + x) * 3;
      const nx = x / WIDTH;
      const ny = y / HEIGHT;

      let col = paintBackdrop(nx, ny, [223, 240, 227], [176, 216, 191], 0.28, 0.16, 0.26);

      // Weiche Ablage-Schatten unter dem Regalbrett.
      const shelfShadow = smoothstep(SHELF_Y + SHELF_H + 0.09, SHELF_Y + SHELF_H, ny);
      col = mixColor(col, [70, 96, 80], shelfShadow * 0.2 * smoothstep(0.15, 0.85, nx));

      for (const book of BOOKS) {
        const left = book.nx * WIDTH;
        const right = left + book.w * S;
        const top = (SHELF_Y - book.h) * S;
        const bottom = SHELF_Y * S;
        const r = 0.008 * S;

        // Kontaktschatten, den das Buch aufs Nachbarbuch/Brett wirft.
        const shadowD = sdRoundRect(x - (right + 0.006 * S), y - (top + bottom) / 2, book.w * S * 0.5, (bottom - top) / 2, r);
        col = mixColor(col, [40, 60, 48], smoothstep(0.02 * S, -0.006 * S, shadowD) * 0.22);

        const d = sdRoundRect(x - (left + right) / 2, y - (top + bottom) / 2, (right - left) / 2, (bottom - top) / 2, r);
        const cov = smoothstep(aa, -aa, d);
        if (cov <= 0) continue;

        const lightT = clamp(((x - left) / (right - left)) * 0.85, 0, 1);
        const spine = mixColor(mixColor(book.color, [255, 255, 255], 0.22), mixColor(book.color, [0, 0, 0], 0.28), lightT);
        col = mixColor(col, spine, cov);

        // Kapitalband oben am Buchrücken.
        const bandD = sdRoundRect(x - (left + right) / 2, y - (top + 0.028 * S), (right - left) / 2 - 0.004 * S, 0.01 * S, 0.004 * S);
        col = mixColor(col, [255, 255, 255], smoothstep(aa, -aa, bandD) * cov * 0.35);
      }

      // Regalbrett mit Vorderkante und Schattenfuge darunter.
      const boardTop = SHELF_Y * S;
      const boardD = sdRoundRect(x - WIDTH / 2, y - (boardTop + SHELF_H * S / 2), WIDTH / 2, (SHELF_H * S) / 2, 0.006 * S);
      col = mixColor(col, mixColor([138, 96, 58], [96, 64, 36], smoothstep(0, SHELF_H * S, y - boardTop)), smoothstep(aa, -aa, boardD));

      for (const [bx, by, br, ba] of [
        [0.86, 0.15, 0.075, 0.24],
        [0.72, 0.09, 0.04, 0.18],
      ]) {
        const dist = Math.hypot(nx - bx, (ny - by) * (HEIGHT / WIDTH));
        col = mixColor(col, [255, 255, 255], smoothstep(br, br * 0.1, dist) * ba);
      }

      const vig = Math.hypot(nx - 0.5, (ny - 0.5) * 0.8);
      col = mixColor(col, [40, 68, 52], smoothstep(0.34, 0.8, vig) * 0.16);

      canvas.blend(i, col, 1);
    }
  }

  return canvas;
}

// ------------------------------------------------------- Szene: Mediathek

/**
 * Bildschirm mit Abspielzeichen und Untertitelzeile – vierte Fassung der
 * Home-Kachel.
 *
 * Vorher standen hier Kopfhörer: Die Mediathek bestand aus Hörfolgen. Sie
 * besteht jetzt aus Videos, und ein Kopfhörer führte an der Kachel in die
 * Irre. Geblieben ist das Blaugrün der alten Fassung, damit die Kachelreihe
 * ihre Farbfolge behält. Der Untertitelbalken ist kein Beiwerk: Er ist der
 * Grund, warum man diese Videos zum Lernen ansieht.
 */
function renderMedia(WIDTH, HEIGHT) {
  const canvas = new Canvas(WIDTH, HEIGHT);
  const S = HEIGHT;
  const aa = 1.1;

  const SCREEN = [8, 133, 165];
  const SCREEN_DARK = [6, 98, 124];
  const GLASS = [231, 249, 252];

  const cx = 0.47 * WIDTH;
  const cy = 0.45 * HEIGHT;
  const halfW = 0.3 * S;
  const halfH = 0.19 * S;
  const bezel = 0.022 * S;

  // Das Abspieldreieck – leicht nach rechts versetzt, sonst wirkt es zu
  // links stehend: Der Schwerpunkt eines Dreiecks liegt nicht in der Mitte
  // seiner Grundlinie.
  const playR = 0.072 * S;
  const playCx = cx + playR * 0.14;
  const playCy = cy - halfH * 0.16;
  const play = [
    [playCx - playR * 0.78, playCy - playR],
    [playCx - playR * 0.78, playCy + playR],
    [playCx + playR * 0.86, playCy],
  ];

  // Zwei Untertitelbalken am unteren Rand der Scheibe.
  const subW = [0.34, 0.22];
  const subH = 0.016 * S;
  const subTop = cy + halfH - bezel - 0.075 * S;

  for (let y = 0; y < HEIGHT; y += 1) {
    for (let x = 0; x < WIDTH; x += 1) {
      const i = (y * WIDTH + x) * 3;
      const nx = x / WIDTH;
      const ny = y / HEIGHT;

      let col = paintBackdrop(nx, ny, [219, 243, 246], [161, 220, 229], 0.28, 0.16, 0.26);

      const pool = Math.exp(-(((nx - cx / WIDTH) ** 2) / 0.09 + ((ny - cy / HEIGHT) ** 2) / 0.12));
      col = mixColor(col, [255, 255, 255], pool * 0.3);

      // Fuß: eine kurze Säule und ein flacher Teller darunter.
      const stemD = sdRoundRect(x - cx, y - (cy + halfH + 0.045 * S), 0.028 * S, 0.045 * S, 0.008 * S);
      const baseD = sdRoundRect(x - cx, y - (cy + halfH + 0.095 * S), 0.115 * S, 0.016 * S, 0.014 * S);
      const footD = Math.min(stemD, baseD);

      // Schlagschatten des ganzen Geräts.
      const shadowD = Math.min(
        sdRoundRect(x - cx - 0.012 * S, y - cy - 0.03 * S, halfW, halfH, 0.05 * S),
        footD,
      );
      col = mixColor(col, [30, 74, 92], smoothstep(0.05 * S, -0.01 * S, shadowD) * 0.22);

      col = mixColor(col, mixColor(SCREEN, SCREEN_DARK, 0.55), smoothstep(aa, -aa, footD));

      // Gehäuse: von oben links hell nach unten rechts dunkel.
      const caseD = sdRoundRect(x - cx, y - cy, halfW, halfH, 0.05 * S);
      const caseCov = smoothstep(aa, -aa, caseD);
      if (caseCov > 0) {
        const lightT = clamp(((x - cx) / halfW + (y - cy) / halfH) * 0.35 + 0.5, 0, 1);
        const caseCol = mixColor(mixColor(SCREEN, [255, 255, 255], 0.28), SCREEN_DARK, lightT);
        col = mixColor(col, caseCol, caseCov);
      }

      // Scheibe.
      const glassD = sdRoundRect(x - cx, y - cy, halfW - bezel, halfH - bezel, 0.032 * S);
      const glassCov = smoothstep(aa, -aa, glassD);
      if (glassCov > 0) {
        const glassCol = mixColor(GLASS, [255, 255, 255], smoothstep(1, -0.2, (y - cy) / halfH));
        col = mixColor(col, glassCol, glassCov);

        const playD = sdTriangle(x, y, play[0], play[1], play[2]);
        col = mixColor(col, SCREEN, smoothstep(aa, -aa, playD) * glassCov);

        for (let row = 0; row < subW.length; row += 1) {
          const barCy = subTop + row * (subH * 2.6);
          const barD = sdRoundRect(x - cx, y - barCy, subW[row] * halfW, subH, subH);
          col = mixColor(col, SCREEN_DARK, smoothstep(aa, -aa, barD) * glassCov * 0.55);
        }

        // Schräglicht auf der Scheibe – ein Bildschirm ohne Spiegelung sieht
        // aus wie ein Loch.
        const sheen = smoothstep(0.04 * S, -0.04 * S, (x - cx) * 0.55 + (y - cy) * 1.4 + 0.11 * S);
        col = mixColor(col, [255, 255, 255], sheen * glassCov * 0.22);
      }

      for (const [bx, by, br, ba] of [
        [0.86, 0.15, 0.075, 0.24],
        [0.16, 0.82, 0.05, 0.16],
      ]) {
        const dist = Math.hypot(nx - bx, (ny - by) * (HEIGHT / WIDTH));
        col = mixColor(col, [255, 255, 255], smoothstep(br, br * 0.1, dist) * ba);
      }

      const vig = Math.hypot(nx - 0.5, (ny - 0.5) * 0.8);
      col = mixColor(col, [18, 62, 78], smoothstep(0.34, 0.8, vig) * 0.16);

      canvas.blend(i, col, 1);
    }
  }

  return canvas;
}

// ------------------------------------------------------------ Szene: KI

/** Sprechblase mit Funken – fünfte Fassung der Home-Kachel. */
function renderAi(WIDTH, HEIGHT) {
  const canvas = new Canvas(WIDTH, HEIGHT);
  const S = HEIGHT;
  const aa = 1.1;

  const BUBBLE = [255, 255, 255];
  const ACCENT = [124, 58, 237];

  const bubbleCx = 0.46 * WIDTH;
  const bubbleCy = 0.46 * HEIGHT;
  const bubbleHw = 0.235 * S;
  const bubbleHh = 0.155 * S;
  const bubbleR = 0.05 * S;

  for (let y = 0; y < HEIGHT; y += 1) {
    for (let x = 0; x < WIDTH; x += 1) {
      const i = (y * WIDTH + x) * 3;
      const nx = x / WIDTH;
      const ny = y / HEIGHT;

      let col = paintBackdrop(nx, ny, [238, 231, 251], [211, 190, 244], 0.26, 0.16, 0.26);

      const pool = Math.exp(-(((nx - bubbleCx / WIDTH) ** 2) / 0.1 + ((ny - bubbleCy / HEIGHT) ** 2) / 0.12));
      col = mixColor(col, [255, 255, 255], pool * 0.3);

      // Sprechblase: Rechteck plus Schwänzchen unten links, als Vereinigung.
      const bodyD = sdRoundRect(x - bubbleCx, y - bubbleCy, bubbleHw, bubbleHh, bubbleR);
      const tailD = sdTriangle(
        x,
        y,
        [bubbleCx - bubbleHw * 0.35, bubbleCy + bubbleHh * 0.92],
        [bubbleCx - bubbleHw * 0.35, bubbleCy + bubbleHh * 1.55],
        [bubbleCx - bubbleHw * 0.05, bubbleCy + bubbleHh * 0.92],
      );
      const bubbleD = Math.min(bodyD, tailD);

      const shadowD = Math.min(
        sdRoundRect(x - bubbleCx - 0.012 * S, y - bubbleCy - 0.022 * S, bubbleHw, bubbleHh, bubbleR),
        sdTriangle(
          x - 0.012 * S,
          y - 0.022 * S,
          [bubbleCx - bubbleHw * 0.35, bubbleCy + bubbleHh * 0.92],
          [bubbleCx - bubbleHw * 0.35, bubbleCy + bubbleHh * 1.55],
          [bubbleCx - bubbleHw * 0.05, bubbleCy + bubbleHh * 0.92],
        ),
      );
      col = mixColor(col, [86, 64, 133], smoothstep(0.055 * S, -0.015 * S, shadowD) * 0.28);

      const cov = smoothstep(aa, -aa, bubbleD);
      if (cov > 0) {
        const lightT = clamp(((x - bubbleCx) / bubbleHw) * 0.3 + ((y - bubbleCy) / bubbleHh) * 0.4 + 0.5, 0, 1);
        const bubbleCol = mixColor(BUBBLE, [225, 214, 240], lightT);
        col = mixColor(col, bubbleCol, cov);

        // Drei Punkte, wie eine Denkpause im Chat.
        for (const dx of [-0.072, 0, 0.072]) {
          const dotD = Math.hypot(x - (bubbleCx + dx * S), y - bubbleCy) - 0.019 * S;
          col = mixColor(col, ACCENT, smoothstep(aa, -aa, dotD) * cov);
        }
      }

      // Funken: zwei rautenförmige Glanzpunkte oben rechts, mit weichem Schein.
      for (const [sx, sy, size, alpha] of [
        [0.775, 0.24, 0.028, 0.9],
        [0.865, 0.42, 0.019, 0.7],
      ]) {
        const px = sx * WIDTH;
        const py = sy * HEIGHT;
        const glow = Math.exp(-(((x - px) ** 2 + (y - py) ** 2) / (2 * (size * S * 2.2) ** 2)));
        col = mixColor(col, ACCENT, glow * alpha * 0.35);
        const sparkD = Math.abs(x - px) + Math.abs(y - py) - size * S;
        col = mixColor(col, [255, 255, 255], smoothstep(aa, -aa, sparkD) * alpha);
        col = mixColor(col, ACCENT, smoothstep(aa, -aa, sparkD - 0.01 * S) * alpha * 0.4);
      }

      for (const [bx, by, br, ba] of [
        [0.15, 0.8, 0.06, 0.16],
      ]) {
        const dist = Math.hypot(nx - bx, (ny - by) * (HEIGHT / WIDTH));
        col = mixColor(col, [255, 255, 255], smoothstep(br, br * 0.1, dist) * ba);
      }

      const vig = Math.hypot(nx - 0.5, (ny - 0.5) * 0.8);
      col = mixColor(col, [64, 42, 102], smoothstep(0.34, 0.8, vig) * 0.18);

      canvas.blend(i, col, 1);
    }
  }

  return canvas;
}

// ----------------------------------------------- Szene: Buchdeckel im Regal

/**
 * Die vier Bände im Regal – flache, moderne Cover statt Leinen und Gold.
 *
 * Zwei frühere Fassungen standen hier schon: erst ein aufgeklebtes Etikett,
 * dann ein Leinenband mit Goldprägung und Zierrahmen – beides wirkte gegen
 * den Rest der App altmodisch, die sonst auf klare Flächen statt auf
 * Materialnachbildung setzt. Jetzt ist es ein Farbfeld-Cover, wie man es von
 * modernen Editionen kennt: ein durchgehender Verlauf in der Akzentfarbe,
 * ein weicher, asymmetrisch platzierter Kreis als einziges Bildmotiv, darauf
 * ein klares geometrisches Zeichen mit einem einzigen weichen Schatten (keine
 * Prägung, kein Glanz). Der Bundsteg ist ein flacher Farbblock.
 *
 * Die drei Kursbücher tragen ihre Stufenziffer als große, geometrische
 * Digitalanzeige-Ziffer (Segmentbalken, keine Schreibschrift-Kurven – das
 * lässt sich mit denselben abgerundeten Rechtecken bauen wie der Rest der
 * App). Das Grammatikbuch bekommt statt einer Ziffer ein kleines Raster, weil
 * es quer zu den Stufen steht.
 *
 * Gerechnet wird im 120x160-System des ursprünglichen SVG, `renderBookCover`
 * ist für alle vier Bände gleich – nur Akzentfarbe und Motiv wechseln.
 */
const CREAM = [250, 245, 238];
const INK = [58, 26, 30];

const BOOK_ACCENTS = {
  BEGINNER: [179, 90, 99], // theme.bookColors.BEGINNER.accent
  INTERMEDIATE: [142, 40, 51], // theme.bookColors.INTERMEDIATE.accent
  ADVANCED: [94, 4, 13], // theme.bookColors.ADVANCED.accent
  GRAMMAR: [43, 75, 111], // theme.bookColors.GRAMMAR.accent
};

/** Abstand zu einem Rechteck, angegeben über seine Kanten im 120x160-Raster. */
function bookBox(u, v, u0, v0, u1, v1, r) {
  return sdRoundRect(u - (u0 + u1) / 2, v - (v0 + v1) / 2, (u1 - u0) / 2, (v1 - v0) / 2, r);
}

/** Die Stufenziffer „1“: Schaft, kurzes Fähnchen, Fußserife. */
function digitOne(u, v) {
  const stem = bookBox(u, v, 53, 42, 68, 112, 4);
  const flag = sdTriangle(u, v, [53, 42], [53, 51], [44.5, 49]);
  const base = bookBox(u, v, 40, 106, 81, 116, 4.5);
  return Math.min(stem, Math.min(flag, base));
}

/**
 * Ziffern „2“ und „3“ als Digitalanzeige: fünf Segmentbalken aus
 * abgerundeten Rechtecken, dieselbe Balkenstärke wie der Schaft der „1“.
 * Die Balken überlappen sich an den Ecken, damit die Vereinigung dort keine
 * Kerben zeigt.
 */
function sevenSegmentDigit(u, v, { lowerLeft }) {
  const top = bookBox(u, v, 44, 40, 77, 53, 5);
  const upperRight = bookBox(u, v, 68, 40, 81, 78, 5);
  const middle = bookBox(u, v, 44, 71.5, 77, 84.5, 5);
  const lower = lowerLeft ? bookBox(u, v, 40, 78, 53, 116, 5) : bookBox(u, v, 68, 78, 81, 116, 5);
  const bottom = bookBox(u, v, 44, 103, 77, 116, 5);
  return Math.min(top, Math.min(upperRight, Math.min(middle, Math.min(lower, bottom))));
}
const digitTwo = (u, v) => sevenSegmentDigit(u, v, { lowerLeft: true });
const digitThree = (u, v) => sevenSegmentDigit(u, v, { lowerLeft: false });

/** Grammatik: ein 2x2-Raster statt einer Ziffer, weil das Buch quer zu den Stufen steht. */
function grammarGrid(u, v) {
  const a = bookBox(u, v, 42, 52, 58, 68, 4);
  const b = bookBox(u, v, 63, 52, 79, 68, 4);
  const c = bookBox(u, v, 42, 73, 58, 89, 4);
  const d = bookBox(u, v, 63, 73, 79, 89, 4);
  return Math.min(Math.min(a, b), Math.min(c, d));
}

function renderBookCover(W, H, accentKey, motif) {
  const canvas = new Canvas(W, H);
  const U = 120;
  const V = 160;
  const aa = (U / W) * 1.2; // Kantenglättung, in u-Einheiten

  const accent = BOOK_ACCENTS[accentKey];
  const accentDeep = mixColor(accent, [0, 0, 0], 0.32);
  const spineDark = mixColor(accent, [0, 0, 0], 0.46);
  const blobTint = mixColor(accent, [255, 255, 255], 0.6);
  const blobTintDim = mixColor(accent, [0, 0, 0], 0.16);

  for (let y = 0; y < H; y += 1) {
    for (let x = 0; x < W; x += 1) {
      const i = (y * W + x) * 3;
      const u = ((x + 0.5) / W) * U;
      const v = ((y + 0.5) / H) * V;
      const nv = v / V;

      // --- Grundfläche: ein einziger ruhiger Verlauf, kein Material, keine
      // Lichtkegel – die Fläche soll wie eine bedruckte Farbe wirken.
      let col = mixColor(accent, accentDeep, smoothstep(-0.1, 1.1, nv));

      // --- Das eine Bildmotiv: ein weicher, heller Kreis, der oben rechts
      // über den Rand hinausläuft, dazu ein kleiner dunkler Gegenpart unten
      // links. Asymmetrisch, damit die Fläche nicht statisch wirkt.
      const blobBig = Math.hypot(u - 90, v - 20) - 52;
      col = mixColor(col, blobTint, smoothstep(aa, -aa, blobBig) * 0.85);
      const blobSmall = Math.hypot(u - 10, v - 152) - 26;
      col = mixColor(col, blobTintDim, smoothstep(aa, -aa, blobSmall) * 0.55);

      // --- Bundsteg: flacher Farbblock.
      col = mixColor(col, spineDark, smoothstep(13, 10, u) * 0.85);
      col = mixColor(col, [0, 0, 0], Math.exp(-((u - 12.6) ** 2) / 2.2) * 0.18);

      // --- Kopfleiste: schmaler, dunkler Streifen mit zwei kurzen Marken –
      // ein moderner Miniatur-Kicker statt einer Titelzeile aus Goldlinien.
      const headband = bookBox(u, v, 18, 12, 106, 24, 3);
      col = mixColor(col, INK, smoothstep(aa, -aa, headband) * 0.92);
      const mark = (u0, u1, vc) => {
        const d = bookBox(u, v, u0, vc - 1.1, u1, vc + 1.1, 1.1);
        col = mixColor(col, CREAM, smoothstep(aa, -aa, d) * 0.9);
      };
      mark(26, 46, 18);
      mark(50, 64, 18);

      // --- Das Motiv: klare Fläche in Cremeweiß, ein weicher Schlagschatten
      // für Tiefe – keine Prägung, kein Glanzrand.
      const d = motif(u, v);
      const shadowD = motif(u - 1.6, v - 2.4);
      col = mixColor(col, [0, 0, 0], smoothstep(5, -2, shadowD) * 0.22);
      col = mixColor(col, CREAM, smoothstep(aa, -aa, d) * 0.98);

      // --- Unterzeile: eine einzelne schmale, ruhige Marke unter dem Motiv.
      const sub = bookBox(u, v, 47, 128, 73, 132.6, 2.3);
      col = mixColor(col, CREAM, smoothstep(aa, -aa, sub) * 0.55);

      canvas.blend(i, col, 1);
    }
  }

  return canvas;
}

const renderBeginnerBook = (W, H) => renderBookCover(W, H, 'BEGINNER', digitOne);
const renderIntermediateBook = (W, H) => renderBookCover(W, H, 'INTERMEDIATE', digitTwo);
const renderAdvancedBook = (W, H) => renderBookCover(W, H, 'ADVANCED', digitThree);
const renderGrammarBook = (W, H) => renderBookCover(W, H, 'GRAMMAR', grammarGrid);

// -------------------------------------------------- Szene: Bibliothekscover

/**
 * Hochformat-Titelbilder der Bibliothek (3:4) – dieselbe Idee wie die
 * Start-Kacheln, nur je nach Thema des Texts (siehe `LibraryCovers.tsx`:
 * Marktstand, Leuchtturm, Straße, neutrales Buch).
 */

/** Rechteck, dessen Breite zum unteren Rand hin abnimmt – für den Turm. */
function taperedBox(u, v, cx, top, bottom, topHalfW, bottomHalfW, r) {
  const t = clamp((v - top) / (bottom - top), 0, 1);
  const halfW = mix(topHalfW, bottomHalfW, t);
  return sdRoundRect(u - cx, v - (top + bottom) / 2, halfW, (bottom - top) / 2, r);
}

/** A2 „Ein Morgen auf dem Wochenmarkt“: Marktstand mit Markise, Obst, Käse. */
function renderLibraryMarket(WIDTH, HEIGHT) {
  const canvas = new Canvas(WIDTH, HEIGHT);
  const S = HEIGHT;
  const aa = 1.1;

  const RED = [194, 86, 75];
  const CREAM = [251, 240, 220];
  const WOOD_TOP = [150, 100, 56];
  const WOOD_FRONT = [176, 121, 68];

  const awningTop = 0.07 * S;
  const awningBottom = 0.2 * S;
  const stripes = 7;

  const FRUITS = [
    { nx: 0.32, r: 0.052, color: RED },
    { nx: 0.43, r: 0.058, color: [217, 122, 46] },
    { nx: 0.55, r: 0.05, color: [217, 122, 46] },
    { nx: 0.66, r: 0.056, color: RED },
    { nx: 0.77, r: 0.046, color: RED },
  ];
  const tableTop = 0.56 * S;

  for (let y = 0; y < HEIGHT; y += 1) {
    for (let x = 0; x < WIDTH; x += 1) {
      const i = (y * WIDTH + x) * 3;
      const nx = x / WIDTH;
      const ny = y / HEIGHT;

      let col = paintBackdrop(nx, ny, CREAM, [237, 202, 148], 0.5, 0.35, 0.4);

      // Markise: gestreifte Zeltbahn mit Wellensaum.
      const bandD = sdRoundRect(x - WIDTH / 2, y - (awningTop + awningBottom) / 2, WIDTH * 0.47, (awningBottom - awningTop) / 2, 0.01 * S);
      if (bandD < aa) {
        const stripeIdx = Math.floor(((nx - 0.03) / 0.94) * stripes);
        const stripeCol = stripeIdx % 2 === 0 ? RED : CREAM;
        col = mixColor(col, stripeCol, smoothstep(aa, -aa, bandD));
      }
      for (let s = 0; s < stripes; s += 1) {
        const scallopX = (0.03 + (s + 0.5) * (0.94 / stripes)) * WIDTH;
        const scallopD = Math.hypot(x - scallopX, y - awningBottom) - 0.028 * S;
        const onScallop = y >= awningBottom ? smoothstep(aa, -aa, scallopD) : 0;
        col = mixColor(col, s % 2 === 0 ? RED : CREAM, onScallop);
      }
      col = mixColor(col, [0, 0, 0], smoothstep(0.03 * S, 0, y - awningBottom) * smoothstep(-0.005 * S, 0.015 * S, Math.abs(bandD)) * 0.12);

      // Tisch: Platte oben, Schürze darunter, beide mit leichtem Lichtverlauf.
      const tableTopD = sdRoundRect(x - WIDTH / 2, y - (tableTop + 0.03 * S), WIDTH * 0.44, 0.03 * S, 0.006 * S);
      col = mixColor(col, mixColor(WOOD_TOP, [0, 0, 0], 0.18), smoothstep(aa, -aa, tableTopD));
      const skirtTop = tableTop + 0.06 * S;
      const skirtD = sdRoundRect(x - WIDTH / 2, y - (skirtTop + 0.14 * S), WIDTH * 0.42, 0.14 * S, 0.006 * S);
      const skirtCov = smoothstep(aa, -aa, skirtD);
      if (skirtCov > 0) {
        const lightT = clamp((x / WIDTH - 0.15) * 0.9, 0, 1);
        col = mixColor(col, mixColor(mixColor(WOOD_FRONT, [255, 255, 255], 0.12), mixColor(WOOD_FRONT, [0, 0, 0], 0.22), lightT), skirtCov);
      }

      // Obst: Kugeln mit weichem Schlagschatten und Lichtpunkt.
      for (const fruit of FRUITS) {
        const cx = fruit.nx * WIDTH;
        const cy = tableTop - fruit.r * S * 0.72;
        const r = fruit.r * S;
        const shadowD = Math.hypot(x - cx - 0.012 * S, y - cy - 0.02 * S) - r;
        col = mixColor(col, [90, 58, 30], smoothstep(0.02 * S, -0.006 * S, shadowD) * 0.22);
        const d = Math.hypot(x - cx, y - cy) - r;
        const cov = smoothstep(aa, -aa, d);
        if (cov <= 0) continue;
        const lightT = clamp((x - (cx - r * 0.6)) / (r * 1.6) + (y - (cy - r * 0.6)) / (r * 1.6), 0, 1);
        const shaded = mixColor(mixColor(fruit.color, [255, 255, 255], 0.35), mixColor(fruit.color, [0, 0, 0], 0.25), lightT);
        col = mixColor(col, shaded, cov);
      }

      // Käseecke, links neben dem Obst, damit sich nichts überschneidet.
      const cheeseD = sdTriangle(x, y, [0.09 * WIDTH, tableTop - 0.005 * S], [0.17 * WIDTH, tableTop - 0.005 * S], [0.125 * WIDTH, tableTop - 0.13 * S]);
      col = mixColor(col, [0, 0, 0], smoothstep(0.02 * S, -0.005 * S, cheeseD - 0.006 * S) * 0.2);
      col = mixColor(col, [230, 190, 70], smoothstep(aa, -aa, cheeseD));

      for (const [bx, by, br, ba] of [[0.85, 0.1, 0.09, 0.22]]) {
        const dist = Math.hypot(nx - bx, (ny - by) * (HEIGHT / WIDTH));
        col = mixColor(col, [255, 255, 255], smoothstep(br, br * 0.1, dist) * ba);
      }
      const vig = Math.hypot(nx - 0.5, (ny - 0.42) * 0.85);
      col = mixColor(col, [90, 58, 30], smoothstep(0.42, 0.9, vig) * 0.2);

      canvas.blend(i, col, 1);
    }
  }

  return canvas;
}

/** B1 „Der Leuchtturmwärter“: Turm in der Dämmerung, Lichtkegel, Felsen. */
const RED_ROOF = [194, 86, 75];

function renderLibraryLighthouse(WIDTH, HEIGHT) {
  const canvas = new Canvas(WIDTH, HEIGHT);
  const S = HEIGHT;
  const aa = 1.1;

  const SKY_TOP = [40, 56, 92];
  const SKY_BOTTOM = [92, 116, 152];
  const TOWER = [234, 240, 246];
  const DARK = [46, 58, 82];
  const GLOW = [246, 224, 150];

  const towerCx = 0.5 * WIDTH;
  const towerTop = 0.28 * S;
  const towerBottom = 0.78 * S;
  const rockTop = 0.68 * S;

  for (let y = 0; y < HEIGHT; y += 1) {
    for (let x = 0; x < WIDTH; x += 1) {
      const i = (y * WIDTH + x) * 3;
      const nx = x / WIDTH;
      const ny = y / HEIGHT;

      let col = mixColor(SKY_TOP, SKY_BOTTOM, smoothstep(-0.1, 1.05, ny));
      const cloud = valueNoise(nx * 2.6 + 4, ny * 2.6 + 2);
      col = mixColor(col, SKY_BOTTOM, (cloud - 0.5) * 0.1 + 0.04);

      // Lichtkegel aus der Laterne, weich nach rechts oben auslaufend.
      const beamD = sdTriangle(x, y, [towerCx + 0.03 * S, 0.335 * S], [WIDTH + 40, -40], [WIDTH + 40, 0.32 * S]);
      col = mixColor(col, GLOW, smoothstep(0.05 * S, -0.03 * S, beamD) * 0.3);

      // Möwe: zwei kurze Striche.
      const gullD = Math.min(
        sdSegment(x, y, 0.2 * WIDTH, 0.16 * S, 0.24 * WIDTH, 0.135 * S),
        sdSegment(x, y, 0.24 * WIDTH, 0.135 * S, 0.28 * WIDTH, 0.16 * S),
      );
      col = mixColor(col, [230, 238, 246], smoothstep(0.006 * S + aa, 0.006 * S - aa, gullD));

      // Fels als dunkles Dreieck unter dem Turm.
      const rockD = sdTriangle(x, y, [0.32 * WIDTH, HEIGHT + 20], [towerCx, rockTop], [0.74 * WIDTH, HEIGHT + 20]);
      col = mixColor(col, DARK, smoothstep(aa, -aa, rockD));

      // Turm: leicht konisch, mit zwei dunklen Bändern.
      const towerD = taperedBox(x, y, towerCx, towerTop, towerBottom, 0.05 * S, 0.09 * S, 0.01 * S);
      const towerCov = smoothstep(aa, -aa, towerD);
      if (towerCov > 0) {
        const lightT = clamp((x - towerCx) / (0.1 * S) + 0.5, 0, 1);
        col = mixColor(col, mixColor(mixColor(TOWER, [255, 255, 255], 0.15), mixColor(TOWER, [0, 0, 0], 0.2), lightT), towerCov);
      }
      for (const by of [0.44, 0.58]) {
        const bandD = taperedBox(x, y, towerCx, by * S, by * S + 0.028 * S, 0.052 * S, 0.07 * S, 0.006 * S);
        col = mixColor(col, DARK, smoothstep(aa, -aa, bandD));
      }

      // Laternenhaus mit Licht und rotem Dach.
      const lanternD = sdRoundRect(x - towerCx, y - 0.315 * S, 0.05 * S, 0.035 * S, 0.006 * S);
      col = mixColor(col, DARK, smoothstep(aa, -aa, lanternD));
      const lightD = Math.hypot(x - towerCx, y - 0.315 * S) - 0.017 * S;
      const glow = Math.exp(-(((x - towerCx) ** 2 + (y - 0.315 * S) ** 2) / (2 * (0.05 * S) ** 2)));
      col = mixColor(col, GLOW, glow * 0.5);
      col = mixColor(col, [255, 245, 210], smoothstep(aa, -aa, lightD));
      const roofD = sdTriangle(x, y, [towerCx - 0.055 * S, 0.28 * S], [towerCx + 0.055 * S, 0.28 * S], [towerCx, 0.245 * S]);
      col = mixColor(col, RED_ROOF, smoothstep(aa, -aa, roofD));

      // Wasser mit weichen Wellenlinien.
      const waterD = y - 0.83 * S;
      col = mixColor(col, [30, 42, 66], smoothstep(-0.01 * S, 0.02 * S, waterD));
      if (waterD > 0) {
        const wave = Math.sin(nx * 18 + ny * 4) * 0.004 * S;
        col = mixColor(col, [52, 68, 98], smoothstep(1.4, 0, Math.abs((y - 0.9 * S) % (0.05 * S) - 0.025 * S + wave)) * 0.3);
      }

      const vig = Math.hypot(nx - 0.5, (ny - 0.4) * 0.85);
      col = mixColor(col, [16, 24, 44], smoothstep(0.42, 0.92, vig) * 0.25);

      canvas.blend(i, col, 1);
    }
  }

  return canvas;
}

/** B2 „Warum Städte leiser werden“: Häuserzeile, Baum, leises E-Auto. */
function renderLibraryCity(WIDTH, HEIGHT) {
  const canvas = new Canvas(WIDTH, HEIGHT);
  const S = HEIGHT;
  const aa = 1.1;

  const BUILDINGS = [
    { nx: 0.1, w: 0.16, h: 0.32, color: [138, 154, 147] },
    { nx: 0.28, w: 0.19, h: 0.46, color: [166, 179, 171] },
    { nx: 0.5, w: 0.16, h: 0.28, color: [138, 154, 147] },
    { nx: 0.68, w: 0.15, h: 0.4, color: [156, 170, 162] },
  ];
  const streetTop = 0.78 * S;

  for (let y = 0; y < HEIGHT; y += 1) {
    for (let x = 0; x < WIDTH; x += 1) {
      const i = (y * WIDTH + x) * 3;
      const nx = x / WIDTH;
      const ny = y / HEIGHT;

      let col = paintBackdrop(nx, ny, [231, 236, 233], [199, 213, 205], 0.3, 0.14, 0.32);

      for (const b of BUILDINGS) {
        const left = b.nx * WIDTH;
        const w = b.w * S;
        const top = streetTop - b.h * S;
        const d = sdRoundRect(x - (left + w / 2), y - (top + streetTop) / 2, w / 2, (streetTop - top) / 2, 0.008 * S);
        const cov = smoothstep(aa, -aa, d);
        if (cov <= 0) continue;
        const lightT = clamp((x - left) / w, 0, 1);
        col = mixColor(col, mixColor(mixColor(b.color, [255, 255, 255], 0.18), mixColor(b.color, [0, 0, 0], 0.16), lightT), cov);

        // Sparsames Fensterraster – modern statt vollflächig gerastert.
        const cols = Math.max(2, Math.round(w / (0.038 * S)));
        const rows = Math.max(2, Math.round((streetTop - top) / (0.07 * S)));
        for (let cRow = 0; cRow < rows; cRow += 1) {
          for (let cCol = 0; cCol < cols; cCol += 1) {
            const wx = left + w * ((cCol + 0.5) / cols);
            const wy = top + 0.03 * S + (streetTop - top - 0.06 * S) * ((cRow + 0.5) / rows);
            const winD = sdRoundRect(x - wx, y - wy, 0.009 * S, 0.012 * S, 0.002 * S);
            col = mixColor(col, [237, 241, 238], smoothstep(aa, -aa, winD) * cov * 0.8);
          }
        }
      }

      // Straße mit Fahrbahnmarkierung.
      const streetCov = smoothstep(streetTop - aa, streetTop + aa, y);
      col = mixColor(col, [96, 106, 100], streetCov);
      col = mixColor(col, [230, 236, 232], smoothstep(1.2, 0, Math.abs(y - (streetTop + 0.05 * S))) * 0.4 * streetCov);

      // Baum rechts.
      const trunkD = sdRoundRect(x - 0.83 * WIDTH, y - (streetTop - 0.03 * S), 0.008 * S, 0.045 * S, 0.004 * S);
      col = mixColor(col, [122, 83, 39], smoothstep(aa, -aa, trunkD));
      const canopyD = Math.hypot(x - 0.83 * WIDTH, y - (streetTop - 0.09 * S)) - 0.05 * S;
      col = mixColor(col, [0, 0, 0], smoothstep(0.02 * S, -0.006 * S, canopyD - 0.006 * S) * 0.15);
      col = mixColor(col, [104, 140, 108], smoothstep(aa, -aa, canopyD));

      // Leises E-Auto.
      const carCx = 0.28 * WIDTH;
      const carCy = streetTop + 0.05 * S;
      const carD = sdRoundRect(x - carCx, y - carCy, 0.075 * S, 0.026 * S, 0.014 * S);
      col = mixColor(col, RED_ROOF, smoothstep(aa, -aa, carD));
      for (const wx of [-0.05, 0.05]) {
        const wheelD = Math.hypot(x - (carCx + wx * S), y - (carCy + 0.028 * S)) - 0.013 * S;
        col = mixColor(col, [46, 58, 82], smoothstep(aa, -aa, wheelD));
      }

      // Verklingende Schallwellen rechts vom Auto – dasselbe Prinzip wie bei
      // den Kopfhörern der Start-Kachel.
      for (const [r, t, alpha] of [
        [0.035 * S, 0.006 * S, 0.5],
        [0.06 * S, 0.005 * S, 0.3],
      ]) {
        const dw = Math.hypot(x - (carCx + 0.09 * S), y - carCy) - r;
        const onArc = x >= carCx + 0.09 * S ? smoothstep(aa, -aa, Math.abs(dw) - t / 2) : 0;
        col = mixColor(col, [156, 170, 162], onArc * alpha);
      }

      const vig = Math.hypot(nx - 0.5, (ny - 0.42) * 0.85);
      col = mixColor(col, [40, 56, 48], smoothstep(0.42, 0.92, vig) * 0.18);

      canvas.blend(i, col, 1);
    }
  }

  return canvas;
}

/** B2 „El renacer de los pueblos vacíos“: Dorf am Hang, Kirchturm, Signalbögen über einem Dach. */
function renderLibraryVillage(WIDTH, HEIGHT) {
  const canvas = new Canvas(WIDTH, HEIGHT);
  const S = HEIGHT;
  const aa = 1.1;

  const SKY_TOP = [246, 214, 158];
  const SKY_BOTTOM = [237, 176, 137];
  const HILL_FAR = [176, 156, 108];
  const HILL_NEAR = [143, 128, 82];
  const STONE = [214, 199, 174];
  const ROOF = [176, 96, 66];

  const HOUSES = [
    { nx: 0.2, w: 0.15, h: 0.15, roofH: 0.07 },
    { nx: 0.38, w: 0.12, h: 0.12, roofH: 0.055 },
    { nx: 0.6, w: 0.17, h: 0.18, roofH: 0.08 },
  ];
  const groundY = 0.72 * S;
  const hillFarTop = 0.5 * S;

  for (let y = 0; y < HEIGHT; y += 1) {
    for (let x = 0; x < WIDTH; x += 1) {
      const i = (y * WIDTH + x) * 3;
      const nx = x / WIDTH;
      const ny = y / HEIGHT;

      let col = mixColor(SKY_TOP, SKY_BOTTOM, smoothstep(-0.1, 0.85, ny));

      // Ferner Hügelzug, weich gewellt. Deckung steigt unterhalb der (gewellten)
      // Horizontlinie, statt wie bei einer SDF innerhalb einer Form.
      const farWave = Math.sin(nx * 5.5 + 1.4) * 0.02 * S + Math.sin(nx * 2.1) * 0.015 * S;
      col = mixColor(col, HILL_FAR, smoothstep(-2, 2, y - (hillFarTop + farWave)));

      // Naher Hügel, auf dem das Dorf steht.
      const nearWave = Math.sin(nx * 3.2 + 0.6) * 0.018 * S;
      col = mixColor(col, HILL_NEAR, smoothstep(-2, 2, y - (groundY + nearWave)));

      // Kirchturm mittig im Hintergrund.
      const towerCx = 0.5 * WIDTH;
      const towerTop = groundY - 0.28 * S;
      const towerD = sdRoundRect(x - towerCx, y - (towerTop + groundY) / 2, 0.028 * S, (groundY - towerTop) / 2, 0.004 * S);
      col = mixColor(col, mixColor(STONE, [0, 0, 0], 0.12), smoothstep(aa, -aa, towerD));
      const spireD = sdTriangle(x, y, [towerCx - 0.032 * S, towerTop], [towerCx + 0.032 * S, towerTop], [towerCx, towerTop - 0.06 * S]);
      col = mixColor(col, ROOF, smoothstep(aa, -aa, spireD));

      // Häuser: Blockkörper plus Satteldach, von links angeleuchtet.
      for (const house of HOUSES) {
        const left = house.nx * WIDTH;
        const w = house.w * S;
        const top = groundY - house.h * S;
        const bodyD = sdRoundRect(x - (left + w / 2), y - (top + groundY) / 2, w / 2, (groundY - top) / 2, 0.006 * S);
        const cov = smoothstep(aa, -aa, bodyD);
        if (cov > 0) {
          const lightT = clamp((x - left) / w, 0, 1);
          col = mixColor(col, mixColor(mixColor(STONE, [255, 255, 255], 0.15), mixColor(STONE, [0, 0, 0], 0.18), lightT), cov);
          const winD = sdRoundRect(x - (left + w * 0.5), y - (top + house.h * S * 0.55), 0.012 * S, 0.016 * S, 0.002 * S);
          col = mixColor(col, [232, 186, 108], smoothstep(aa, -aa, winD) * cov);
        }
        const roofD = sdTriangle(x, y, [left - 0.012 * S, top], [left + w + 0.012 * S, top], [left + w / 2, top - house.roofH * S]);
        col = mixColor(col, mixColor(ROOF, [0, 0, 0], clamp((x - left) / w, 0, 0.3)), smoothstep(aa, -aa, roofD));
      }

      // Baum rechts am Hang.
      col = drawTree(col, x, y, 0.86 * WIDTH, groundY + 0.01 * S, 0.05 * S, aa);

      // Signalbögen über dem mittleren Haus, wie bei einem Wifi-Symbol – das
      // Dorf, das jetzt am Netz hängt.
      const signalCx = 0.38 * WIDTH;
      const signalCy = groundY - 0.14 * S;
      for (const [r, alpha] of [
        [0.03 * S, 0.55],
        [0.05 * S, 0.35],
        [0.07 * S, 0.2],
      ]) {
        const arcD = Math.abs(Math.hypot(x - signalCx, y - signalCy) - r) - 0.006 * S;
        const onArc = y <= signalCy ? smoothstep(aa, -aa, arcD) : 0;
        col = mixColor(col, [255, 244, 214], onArc * alpha);
      }

      const vig = Math.hypot(nx - 0.5, (ny - 0.4) * 0.85);
      col = mixColor(col, [96, 62, 40], smoothstep(0.44, 0.94, vig) * 0.2);

      canvas.blend(i, col, 1);
    }
  }

  return canvas;
}

/** B2 „El cuaderno de recetas“: aufgeschlagenes Rezeptheft auf dem Küchentisch, Tasse mit Dampf. */
function renderLibraryKitchen(WIDTH, HEIGHT) {
  const canvas = new Canvas(WIDTH, HEIGHT);
  const S = HEIGHT;
  const aa = 1.1;

  const TABLE_TOP = [150, 100, 56];
  const TABLE_LIGHT = [186, 132, 76];
  const PAGE = [250, 244, 228];
  const PAGE_SHADE = [222, 208, 176];
  const RULE = [178, 158, 118];
  const INK_RED = [176, 66, 52];
  const MUG = [186, 96, 66];
  const MUG_DARK = [150, 72, 48];

  const pageCx = 0.44 * WIDTH;
  const pageCy = 0.52 * S;
  const pageHalfW = 0.24 * S;
  const pageHalfH = 0.19 * S;
  const pageDeg = -6;
  const mugCx = 0.83 * WIDTH;
  const mugCy = 0.62 * S;

  for (let y = 0; y < HEIGHT; y += 1) {
    for (let x = 0; x < WIDTH; x += 1) {
      const i = (y * WIDTH + x) * 3;
      const nx = x / WIDTH;
      const ny = y / HEIGHT;

      // Tischplatte, warm von oben rechts angeleuchtet, mit weicher Maserung.
      let col = paintBackdrop(nx, ny, [244, 226, 196], TABLE_LIGHT, 0.7, 0.15, 0.6);
      const lightT = clamp((nx - 0.1) * 0.85, 0, 1);
      col = mixColor(col, mixColor(mixColor(TABLE_TOP, [255, 255, 255], 0.08), mixColor(TABLE_TOP, [0, 0, 0], 0.24), lightT), 0.4);
      const grain = Math.sin(ny * 46 + nx * 2.4) * 0.5 + 0.5;
      col = mixColor(col, [0, 0, 0], grain * 0.025);

      // Aufgeschlagenes Rezeptheft, leicht gekippt, mit Schlagschatten.
      const angle = (pageDeg * Math.PI) / 180;
      const shadowD = sdRoundRect(...toLocal(x, y - 0.02 * S, pageCx, pageCy, angle), pageHalfW, pageHalfH, 0.014 * S);
      col = mixColor(col, [60, 34, 16], smoothstep(0.05 * S, -0.015 * S, shadowD) * 0.3);

      const [lx, ly] = toLocal(x, y, pageCx, pageCy, angle);
      const pageD = sdRoundRect(lx, ly, pageHalfW, pageHalfH, 0.014 * S);
      const pageCov = smoothstep(aa, -aa, pageD);
      if (pageCov > 0) {
        const shade = clamp((lx / pageHalfW) * 0.2 + (ly / pageHalfH) * 0.3 + 0.5, 0, 1);
        col = mixColor(col, mixColor(PAGE, PAGE_SHADE, shade), pageCov);

        // Mittelfalz.
        const fold = Math.exp(-((lx / (0.02 * S)) ** 2));
        col = mixColor(col, PAGE_SHADE, fold * 0.5 * pageCov);

        // Handschriftliche Zeilen, unterschiedlich lang – eine in Rot, wie
        // eine spätere Randnotiz zwischen den ursprünglichen Mengenangaben.
        for (let row = -3; row <= 3; row += 1) {
          const rowY = row * 0.045 * S;
          const seed = hash2(row + 8, 3.1);
          const lineHalf = pageHalfW * (0.55 + 0.3 * seed) * 0.5;
          const startX = -pageHalfW * 0.55 + pageHalfW * 0.1 * hash2(row, 1.7);
          const lineD = sdRoundRect(lx - (startX + lineHalf), ly - rowY, lineHalf, 0.006 * S, 0.006 * S);
          const isRed = row === 2;
          col = mixColor(col, isRed ? INK_RED : RULE, smoothstep(aa, -aa, lineD) * pageCov * 0.85);
        }
      }

      // Tasse mit Dampf, rechts auf dem Tisch.
      const mugD = sdRoundRect(x - mugCx, y - mugCy, 0.055 * S, 0.05 * S, 0.012 * S);
      col = mixColor(col, [0, 0, 0], smoothstep(0.03 * S, -0.01 * S, mugD - 0.01 * S) * 0.2);
      const mugCov = smoothstep(aa, -aa, mugD);
      if (mugCov > 0) {
        const mugLightT = clamp(((x - mugCx) / (0.055 * S)) * 0.5 + 0.5, 0, 1);
        col = mixColor(col, mixColor(MUG, MUG_DARK, mugLightT), mugCov);
      }
      const handleD = Math.abs(Math.hypot(x - (mugCx + 0.07 * S), y - mugCy) - 0.024 * S) - 0.008 * S;
      const handleMask = x > mugCx ? smoothstep(aa, -aa, handleD) : 0;
      col = mixColor(col, MUG_DARK, handleMask);

      for (const [ox, amp, alpha] of [
        [-0.012, 0.01, 0.5],
        [0.014, 0.008, 0.35],
      ]) {
        const steamX = mugCx + ox * S + Math.sin(ny * 22 + ox * 40) * amp * S;
        const steamBand =
          smoothstep(0.012 * S, 0, Math.abs(x - steamX)) * smoothstep(mugCy - 0.02 * S, mugCy - 0.24 * S, y);
        col = mixColor(col, [255, 255, 255], steamBand * alpha);
      }

      const vig = Math.hypot(nx - 0.5, (ny - 0.42) * 0.85);
      col = mixColor(col, [70, 42, 22], smoothstep(0.44, 0.94, vig) * 0.2);

      canvas.blend(i, col, 1);
    }
  }

  return canvas;
}

/** B2 „Cuando el teléfono decide por ti“: leuchtendes Telefon im Dunkeln, Benachrichtigungen. */
function renderLibraryPhone(WIDTH, HEIGHT) {
  const canvas = new Canvas(WIDTH, HEIGHT);
  const S = HEIGHT;
  const aa = 1.1;

  const DARK_TOP = [16, 20, 34];
  const DARK_BOTTOM = [28, 34, 54];
  const SCREEN_GLOW = [110, 176, 255];
  const SCREEN_DARK = [18, 30, 52];
  const FRAME = [12, 14, 22];
  const NOTIF = [255, 92, 92];

  const phoneCx = 0.5 * WIDTH;
  const phoneCy = 0.52 * S;
  const phoneHalfW = 0.16 * S;
  const phoneHalfH = 0.27 * S;

  for (let y = 0; y < HEIGHT; y += 1) {
    for (let x = 0; x < WIDTH; x += 1) {
      const i = (y * WIDTH + x) * 3;
      const nx = x / WIDTH;
      const ny = y / HEIGHT;

      let col = mixColor(DARK_TOP, DARK_BOTTOM, smoothstep(-0.1, 1.05, ny));
      const cloud = valueNoise(nx * 2.4 + 6, ny * 2.4 + 9);
      col = mixColor(col, DARK_BOTTOM, (cloud - 0.5) * 0.06);

      // Weicher Lichthof um das Telefon, wie ein Bildschirm im dunklen Zimmer.
      const glowDist = Math.hypot(x - phoneCx, y - phoneCy);
      const glow = Math.exp(-((glowDist / (0.34 * S)) ** 2));
      col = mixColor(col, SCREEN_GLOW, glow * 0.4);

      // Schatten und Rahmen des Telefons.
      const shadowD = sdRoundRect(x - phoneCx - 0.02 * S, y - phoneCy - 0.03 * S, phoneHalfW, phoneHalfH, 0.03 * S);
      col = mixColor(col, [0, 0, 0], smoothstep(0.04 * S, -0.02 * S, shadowD) * 0.35);

      const frameD = sdRoundRect(x - phoneCx, y - phoneCy, phoneHalfW, phoneHalfH, 0.032 * S);
      const frameCov = smoothstep(aa, -aa, frameD);
      if (frameCov > 0) col = mixColor(col, FRAME, frameCov);

      // Bildschirm, etwas kleiner als der Rahmen, mit drei Inhaltskarten.
      const screenD = sdRoundRect(x - phoneCx, y - phoneCy, phoneHalfW * 0.86, phoneHalfH * 0.9, 0.02 * S);
      const screenCov = smoothstep(aa, -aa, screenD);
      if (screenCov > 0) {
        const lx = x - phoneCx;
        const ly = y - phoneCy;
        const shade = clamp(0.5 - ly / (phoneHalfH * 1.8), 0.15, 0.85);
        col = mixColor(col, mixColor(SCREEN_GLOW, SCREEN_DARK, 1 - shade), screenCov);

        for (const ry of [-0.55, -0.15, 0.25]) {
          const cardD = sdRoundRect(lx, ly - ry * phoneHalfH, phoneHalfW * 0.68, phoneHalfH * 0.13, 0.01 * S);
          col = mixColor(col, mixColor(SCREEN_DARK, [255, 255, 255], 0.15), smoothstep(aa, -aa, cardD) * screenCov * 0.6);
        }
      }

      // Benachrichtigungspunkte, die oben rechts aus dem Rahmen „ausbrechen“.
      for (const [dx, dy, r] of [
        [0.14, -0.24, 0.028],
        [0.19, -0.18, 0.018],
      ]) {
        const dotD = Math.hypot(x - (phoneCx + dx * S), y - (phoneCy + dy * S)) - r * S;
        col = mixColor(col, [0, 0, 0], smoothstep(0.012 * S, -0.004 * S, dotD - 0.006 * S) * 0.2);
        col = mixColor(col, NOTIF, smoothstep(aa, -aa, dotD));
      }

      const vig = Math.hypot(nx - 0.5, (ny - 0.42) * 0.85);
      col = mixColor(col, [4, 6, 14], smoothstep(0.42, 0.92, vig) * 0.35);

      canvas.blend(i, col, 1);
    }
  }

  return canvas;
}

/** Neutrales Motiv für Inhalte ohne passenden Themen-Tag: aufgeschlagenes Buch. */
function renderLibraryGenericBook(WIDTH, HEIGHT) {
  const canvas = new Canvas(WIDTH, HEIGHT);
  const S = HEIGHT;
  const aa = 1.1;

  const PAGE = [255, 255, 255];
  const PAGE_SHADE = [219, 226, 236];
  const RULE = [176, 190, 212];
  const MARK = [30, 61, 107];

  const leftPage = { cx: 0.41 * WIDTH, cy: 0.53 * HEIGHT, deg: -9 };
  const rightPage = { cx: 0.59 * WIDTH, cy: 0.53 * HEIGHT, deg: 9 };
  const pageHalfW = 0.22 * S;
  const pageHalfH = 0.185 * S;
  const pageR = 0.014 * S;

  for (let y = 0; y < HEIGHT; y += 1) {
    for (let x = 0; x < WIDTH; x += 1) {
      const i = (y * WIDTH + x) * 3;
      const nx = x / WIDTH;
      const ny = y / HEIGHT;

      let col = paintBackdrop(nx, ny, [237, 241, 247], [206, 216, 232], 0.5, 0.3, 0.4);

      for (const page of [leftPage, rightPage]) {
        const angle = (page.deg * Math.PI) / 180;
        const [sx, sy] = toLocal(x, y - 0.018 * S, page.cx, page.cy, angle);
        const sd = sdRoundRect(sx, sy, pageHalfW, pageHalfH, pageR);
        col = mixColor(col, [150, 165, 190], smoothstep(0.05 * S, -0.015 * S, sd) * 0.28);

        const [lx, ly] = toLocal(x, y, page.cx, page.cy, angle);
        const d = sdRoundRect(lx, ly, pageHalfW, pageHalfH, pageR);
        const cov = smoothstep(aa, -aa, d);
        if (cov <= 0) continue;

        const lightT = clamp((lx / pageHalfW) * 0.25 + (ly / pageHalfH) * 0.4 + 0.5, 0, 1);
        col = mixColor(col, mixColor(PAGE, PAGE_SHADE, lightT), cov);

        const towardsSpine = page === leftPage ? 1 : -1;
        for (const ry of [-0.06, 0, 0.06]) {
          const lineD = sdRoundRect(lx - towardsSpine * 0.018 * S, ly - ry * S, pageHalfW * 0.6, 0.005 * S, 0.005 * S);
          col = mixColor(col, RULE, smoothstep(aa, -aa, lineD) * 0.8);
        }
      }

      const spine = Math.exp(-(((nx - 0.5) ** 2) / 0.001));
      col = mixColor(col, [150, 165, 190], spine * 0.3);

      // Lesezeichen: steckt oben in der rechten Seite, statt lose darüber zu
      // schweben – Rechteck und Spitze überlappen bewusst mit der Seite.
      const ribbonCx = 0.62 * WIDTH;
      const ribbonTop = 0.32 * S;
      const ribbonRectBottom = 0.45 * S;
      const ribbonTipY = 0.52 * S;
      const ribbonHalfW = 0.022 * S;
      const ribbonRectD = sdRoundRect(x - ribbonCx, y - (ribbonTop + ribbonRectBottom) / 2, ribbonHalfW, (ribbonRectBottom - ribbonTop) / 2, 0.002 * S);
      const ribbonTipD = sdTriangle(
        x,
        y,
        [ribbonCx - ribbonHalfW, ribbonRectBottom],
        [ribbonCx + ribbonHalfW, ribbonRectBottom],
        [ribbonCx, ribbonTipY],
      );
      const ribbonD = Math.min(ribbonRectD, ribbonTipD);
      col = mixColor(col, [0, 0, 0], smoothstep(0.02 * S, -0.005 * S, ribbonD - 0.006 * S) * 0.15);
      col = mixColor(col, MARK, smoothstep(aa, -aa, ribbonD));

      const vig = Math.hypot(nx - 0.5, (ny - 0.42) * 0.85);
      col = mixColor(col, [90, 104, 130], smoothstep(0.42, 0.9, vig) * 0.16);

      canvas.blend(i, col, 1);
    }
  }

  return canvas;
}

// -------------------------------------------------- Szene: Lehrwerk-Bilder

/**
 * Die zwölf Szenenbilder des Lehrwerks (siehe `SceneIllustrations.tsx`) –
 * bisher flache SVG-Zeichnungen mit Strichlinien, jetzt gefüllte, weiche
 * Flächen im selben Stil wie die übrigen Bilder dieser Datei. Drei Bausteine
 * wiederholen sich über mehrere Szenen: eine Porträtkarte (Kopf plus
 * Schultern in einem Rähmchen), eine Kartennadel und eine gestrichelte
 * Linie – deshalb stehen sie hier als gemeinsame Funktionen.
 */
const PRINT_RED = [115, 3, 13]; // theme.book.printRed
const PRINT_SLATE = [51, 54, 59]; // theme.book.printSlate
const OCHRE = [138, 90, 50];

/** Deckung einer gestrichelten Strecke zwischen zwei Punkten. */
function dashCoverage(x, y, ax, ay, bx, by, dashLen, gapLen, thickness, aa) {
  const vx = bx - ax;
  const vy = by - ay;
  const len = Math.hypot(vx, vy) || 1;
  const ux = vx / len;
  const uy = vy / len;
  const wx = x - ax;
  const wy = y - ay;
  const t = wx * ux + wy * uy;
  if (t < -thickness || t > len + thickness) return 0;
  const perp = wx * uy - wy * ux;
  const period = dashLen + gapLen;
  const phase = ((t % period) + period) % period;
  if (phase > dashLen) return 0;
  return smoothstep(thickness / 2 + aa, thickness / 2 - aa, Math.abs(perp));
}

/** Kartennadel: Kreis mit Spitze, wie ein Tropfen. */
function pinDist(x, y, cx, cy, r) {
  const circleD = Math.hypot(x - cx, y - cy) - r;
  const tailD = sdTriangle(x, y, [cx - r * 0.62, cy + r * 0.55], [cx + r * 0.62, cy + r * 0.55], [cx, cy + r * 1.9]);
  return Math.min(circleD, tailD);
}

/** Porträtkarte: Rähmchen, Kopf, angedeutete Schultern. */
function drawPortraitCard(col, x, y, cx, cy, w, h, accent, aa) {
  const frameD = sdRoundRect(x - cx, y - cy, w / 2, h / 2, h * 0.07);
  const shadowD = sdRoundRect(x - cx - 0.012 * h, y - cy - 0.02 * h, w / 2, h / 2, h * 0.07);
  col = mixColor(col, [0, 0, 0], smoothstep(0.05 * h, -0.015 * h, shadowD) * 0.16);
  const cov = smoothstep(aa, -aa, frameD);
  if (cov > 0) {
    col = mixColor(col, [255, 255, 255], cov);
    const headR = w * 0.16;
    const headCy = cy - h * 0.14;
    const headD = Math.hypot(x - cx, y - headCy) - headR;
    col = mixColor(col, accent, smoothstep(aa, -aa, headD) * cov);
    const shoulderD = sdRoundRect(x - cx, y - (cy + h * 0.3), w * 0.19, h * 0.14, h * 0.14);
    col = mixColor(col, accent, smoothstep(aa, -aa, shoulderD) * cov * 0.8);
  }
  return col;
}

/** Sprechblase mit drei Punkten – wiederkehrendes Motiv für Dialogszenen. */
function drawSpeechBubble(col, x, y, cx, cy, hw, hh, accent, aa) {
  const bodyD = sdRoundRect(x - cx, y - cy, hw, hh, hh * 0.5);
  const tailD = sdTriangle(x, y, [cx - hw * 0.25, cy + hh * 0.92], [cx - hw * 0.05, cy + hh * 0.92], [cx - hw * 0.16, cy + hh * 1.6]);
  const d = Math.min(bodyD, tailD);
  const shadowD = Math.min(
    sdRoundRect(x - cx - 0.1 * hh, y - cy - 0.16 * hh, hw, hh, hh * 0.5),
    sdTriangle(x - 0.1 * hh, y - 0.16 * hh, [cx - hw * 0.25, cy + hh * 0.92], [cx - hw * 0.05, cy + hh * 0.92], [cx - hw * 0.16, cy + hh * 1.6]),
  );
  col = mixColor(col, accent, smoothstep(0.4 * hh, -0.1 * hh, shadowD) * 0.16);
  const cov = smoothstep(aa, -aa, d);
  if (cov > 0) {
    col = mixColor(col, [255, 255, 255], cov);
    for (const dx of [-0.32, 0, 0.32]) {
      const dotD = Math.hypot(x - (cx + dx * hw), y - cy) - hh * 0.16;
      col = mixColor(col, accent, smoothstep(aa, -aa, dotD) * cov);
    }
  }
  return col;
}

/** Ein flach gezeichneter Baum: Kreiskrone plus Stamm. */
function drawTree(col, x, y, cx, groundY, r, aa) {
  const trunkD = sdRoundRect(x - cx, y - (groundY - r * 0.3), r * 0.16, r * 0.5, r * 0.06);
  col = mixColor(col, OCHRE, smoothstep(aa, -aa, trunkD));
  const canopyCy = groundY - r * 1.15;
  const shadowD = Math.hypot(x - cx - 0.1 * r, y - canopyCy - 0.14 * r) - r;
  col = mixColor(col, [0, 0, 0], smoothstep(0.25 * r, -0.05 * r, shadowD) * 0.14);
  const canopyD = Math.hypot(x - cx, y - canopyCy) - r;
  col = mixColor(col, [108, 150, 112], smoothstep(aa, -aa, canopyD));
  return col;
}

/** A2 „Guten Morgen im Büro“: zwei Figuren begrüßen sich. */
function renderSceneGreeting(WIDTH, HEIGHT) {
  const canvas = new Canvas(WIDTH, HEIGHT);
  const S = HEIGHT;
  const aa = 1.1;

  for (let y = 0; y < HEIGHT; y += 1) {
    for (let x = 0; x < WIDTH; x += 1) {
      const i = (y * WIDTH + x) * 3;
      const nx = x / WIDTH;
      const ny = y / HEIGHT;

      let col = paintBackdrop(nx, ny, [246, 237, 238], [232, 216, 218], 0.5, 0.2, 0.5);
      col = mixColor(col, [221, 203, 203], smoothstep(0.82 * S - aa, 0.82 * S + aa, y));

      // Figur links, Hand zum Gruß erhoben.
      const px1 = 0.3 * WIDTH;
      col = mixColor(col, [58, 46, 43], smoothstep(aa, -aa, Math.hypot(x - px1, y - 0.44 * S) - 0.075 * S));
      const bodyD1 = sdRoundRect(x - px1, y - 0.64 * S, 0.09 * S, 0.16 * S, 0.05 * S);
      col = mixColor(col, PRINT_RED, smoothstep(aa, -aa, bodyD1));
      const armD1 = sdSegment(x, y, px1 + 0.08 * S, 0.56 * S, px1 + 0.15 * S, 0.36 * S);
      col = mixColor(col, [58, 46, 43], smoothstep(0.017 * S + aa, 0.017 * S - aa, armD1));

      // Figur rechts, winkt zurück.
      const px2 = 0.66 * WIDTH;
      col = mixColor(col, [91, 70, 54], smoothstep(aa, -aa, Math.hypot(x - px2, y - 0.46 * S) - 0.075 * S));
      const bodyD2 = sdRoundRect(x - px2, y - 0.65 * S, 0.09 * S, 0.155 * S, 0.05 * S);
      col = mixColor(col, [51, 54, 59], smoothstep(aa, -aa, bodyD2));
      const armD2 = sdSegment(x, y, px2 - 0.08 * S, 0.52 * S, px2 - 0.14 * S, 0.34 * S);
      col = mixColor(col, [91, 70, 54], smoothstep(0.017 * S + aa, 0.017 * S - aa, armD2));

      col = drawSpeechBubble(col, x, y, 0.48 * WIDTH, 0.24 * S, 0.13 * S, 0.075 * S, PRINT_RED, aa);

      const vig = Math.hypot(nx - 0.5, (ny - 0.4) * 0.85);
      col = mixColor(col, [90, 60, 58], smoothstep(0.44, 0.92, vig) * 0.16);

      canvas.blend(i, col, 1);
    }
  }

  return canvas;
}

/** A1 „Wie heißt du?“: zwei Namensschilder auf einem Tisch. */
function renderSceneIntroduction(WIDTH, HEIGHT) {
  const canvas = new Canvas(WIDTH, HEIGHT);
  const S = HEIGHT;
  const aa = 1.1;

  const TAGS = [
    { cx: 0.33 * WIDTH, cy: 0.58 * S, deg: -4, accent: PRINT_RED },
    { cx: 0.68 * WIDTH, cy: 0.55 * S, deg: 4, accent: PRINT_SLATE },
  ];

  for (let y = 0; y < HEIGHT; y += 1) {
    for (let x = 0; x < WIDTH; x += 1) {
      const i = (y * WIDTH + x) * 3;
      const nx = x / WIDTH;
      const ny = y / HEIGHT;

      let col = paintBackdrop(nx, ny, [237, 241, 247], [212, 220, 234], 0.5, 0.22, 0.5);
      col = mixColor(col, [193, 179, 145], smoothstep(0.76 * S - aa, 0.76 * S + aa, y));

      for (const tag of TAGS) {
        const angle = (tag.deg * Math.PI) / 180;
        const [sx, sy] = toLocal(x, y - 0.02 * S, tag.cx, tag.cy, angle);
        const shadowD = sdRoundRect(sx, sy, 0.155 * S, 0.075 * S, 0.014 * S);
        col = mixColor(col, [90, 76, 50], smoothstep(0.05 * S, -0.015 * S, shadowD) * 0.22);

        const [lx, ly] = toLocal(x, y, tag.cx, tag.cy, angle);
        const d = sdRoundRect(lx, ly, 0.155 * S, 0.075 * S, 0.014 * S);
        const cov = smoothstep(aa, -aa, d);
        if (cov <= 0) continue;
        col = mixColor(col, [255, 255, 255], cov);
        const line1 = sdRoundRect(lx - 0.04 * S, ly - 0.03 * S, 0.075 * S, 0.011 * S, 0.011 * S);
        col = mixColor(col, tag.accent, smoothstep(aa, -aa, line1) * cov);
        const line2 = sdRoundRect(lx - 0.055 * S, ly + 0.015 * S, 0.09 * S, 0.008 * S, 0.008 * S);
        col = mixColor(col, [214, 219, 230], smoothstep(aa, -aa, line2) * cov * 0.85);
      }

      col = drawSpeechBubble(col, x, y, 0.5 * WIDTH, 0.22 * S, 0.115 * S, 0.07 * S, PRINT_RED, aa);

      const vig = Math.hypot(nx - 0.5, (ny - 0.4) * 0.85);
      col = mixColor(col, [70, 82, 104], smoothstep(0.44, 0.92, vig) * 0.16);

      canvas.blend(i, col, 1);
    }
  }

  return canvas;
}

/** Europakarte mit Reiseorten und gestrichelten Verbindungslinien. */
function renderSceneWorldMap(WIDTH, HEIGHT) {
  const canvas = new Canvas(WIDTH, HEIGHT);
  const S = HEIGHT;
  const aa = 1.1;

  const HOME = { x: 0.47 * WIDTH, y: 0.38 * S, color: PRINT_RED };
  const PINS = [
    { x: 0.33 * WIDTH, y: 0.56 * S, color: PRINT_SLATE },
    { x: 0.72 * WIDTH, y: 0.68 * S, color: OCHRE },
    { x: 0.63 * WIDTH, y: 0.84 * S, color: [63, 81, 107] },
  ];

  for (let y = 0; y < HEIGHT; y += 1) {
    for (let x = 0; x < WIDTH; x += 1) {
      const i = (y * WIDTH + x) * 3;
      const nx = x / WIDTH;
      const ny = y / HEIGHT;

      let col = paintBackdrop(nx, ny, [233, 240, 235], [208, 223, 213], 0.6, 0.25, 0.55);

      // Weiche Landmasse.
      const landD = Math.hypot((x - 0.5 * WIDTH) * 0.85, y - 0.55 * S) - 0.4 * S;
      col = mixColor(col, [193, 213, 199], smoothstep(aa, -aa, landD) * 0.9);

      for (const pin of PINS) {
        col = mixColor(col, pin.color, dashCoverage(x, y, HOME.x, HOME.y, pin.x, pin.y, 0.018 * S, 0.012 * S, 0.006 * S, aa) * 0.75);
      }

      for (const pin of [...PINS, HOME]) {
        const ringD = Math.abs(Math.hypot(x - pin.x, y - pin.y) - 0.028 * S) - 0.003 * S;
        col = mixColor(col, pin.color, smoothstep(aa, -aa, ringD) * 0.5);
        const dotD = pinDist(x, y, pin.x, pin.y, 0.017 * S);
        col = mixColor(col, [0, 0, 0], smoothstep(0.03 * S, -0.008 * S, dotD - 0.006 * S) * 0.16);
        col = mixColor(col, pin.color, smoothstep(aa, -aa, dotD));
      }

      // Kompassrose oben rechts.
      const compassCx = 0.85 * WIDTH;
      const compassCy = 0.2 * S;
      const compassD = Math.hypot(x - compassCx, y - compassCy) - 0.06 * S;
      col = mixColor(col, [255, 255, 255], smoothstep(aa, -aa, compassD));
      col = mixColor(col, [200, 208, 202], smoothstep(0.006 * S + aa, 0.006 * S - aa, Math.abs(compassD)));
      const needleD = Math.abs(x - compassCx) + Math.abs(y - compassCy) - 0.03 * S;
      col = mixColor(col, [110, 122, 114], smoothstep(aa, -aa, needleD));

      const vig = Math.hypot(nx - 0.5, (ny - 0.42) * 0.85);
      col = mixColor(col, [48, 68, 54], smoothstep(0.44, 0.92, vig) * 0.16);

      canvas.blend(i, col, 1);
    }
  }

  return canvas;
}

/** Tafel mit Buchstaben und Zahlen, dazu ein Telefonhörer. */
function renderSceneAlphabetNumbers(WIDTH, HEIGHT) {
  const canvas = new Canvas(WIDTH, HEIGHT);
  const S = HEIGHT;
  const aa = 1.1;

  const boardCx = 0.44 * WIDTH;
  const boardCy = 0.46 * S;
  const boardHw = 0.32 * S;
  const boardHh = 0.24 * S;

  for (let y = 0; y < HEIGHT; y += 1) {
    for (let x = 0; x < WIDTH; x += 1) {
      const i = (y * WIDTH + x) * 3;
      const nx = x / WIDTH;
      const ny = y / HEIGHT;

      let col = paintBackdrop(nx, ny, [237, 233, 224], [220, 213, 194], 0.5, 0.22, 0.5);

      const frameD = sdRoundRect(x - boardCx, y - boardCy, boardHw + 0.014 * S, boardHh + 0.014 * S, 0.02 * S);
      col = mixColor(col, [0, 0, 0], smoothstep(0.05 * S, -0.015 * S, frameD) * 0.14);
      col = mixColor(col, OCHRE, smoothstep(aa, -aa, frameD));
      const boardD = sdRoundRect(x - boardCx, y - boardCy, boardHw, boardHh, 0.014 * S);
      col = mixColor(col, [51, 54, 59], smoothstep(aa, -aa, boardD));

      // Buchstaben-Chips.
      for (let c = 0; c < 7; c += 1) {
        const cx = boardCx - boardHw + (c + 0.7) * (boardHw * 2 * 0.135);
        const chipD = sdRoundRect(x - cx, y - (boardCy - 0.11 * S), 0.028 * S, 0.036 * S, 0.006 * S);
        col = mixColor(col, [237, 234, 227], smoothstep(aa, -aa, chipD) * 0.9);
      }
      // Zahlen-Chips.
      for (let c = 0; c < 8; c += 1) {
        const cx = boardCx - boardHw + (c + 0.65) * (boardHw * 2 * 0.118);
        const dotD = Math.hypot(x - cx, y - (boardCy + 0.05 * S)) - 0.017 * S;
        col = mixColor(col, [237, 234, 227], smoothstep(aa, -aa, dotD) * 0.85);
      }

      // Telefonhörer unten rechts.
      const phoneCx = 0.82 * WIDTH;
      const phoneCy = 0.78 * S;
      const haloD = Math.hypot(x - phoneCx, y - phoneCy) - 0.1 * S;
      col = mixColor(col, [0, 0, 0], smoothstep(0.05 * S, -0.015 * S, haloD) * 0.12);
      col = mixColor(col, [255, 255, 255], smoothstep(aa, -aa, haloD));
      const handsetAngle = (-40 * Math.PI) / 180;
      const [hx, hy] = toLocal(x, y, phoneCx, phoneCy, handsetAngle);
      const barD = sdRoundRect(hx, hy, 0.05 * S, 0.014 * S, 0.014 * S);
      const capA = Math.hypot(hx + 0.05 * S, hy) - 0.024 * S;
      const capB = Math.hypot(hx - 0.05 * S, hy) - 0.024 * S;
      const handsetD = Math.min(barD, Math.min(capA, capB));
      col = mixColor(col, PRINT_RED, smoothstep(aa, -aa, handsetD));

      const vig = Math.hypot(nx - 0.5, (ny - 0.42) * 0.85);
      col = mixColor(col, [66, 56, 34], smoothstep(0.44, 0.92, vig) * 0.16);

      canvas.blend(i, col, 1);
    }
  }

  return canvas;
}

/** Stammbaum aus drei Generationen gerahmter Porträts. */
function renderSceneFamilyTree(WIDTH, HEIGHT) {
  const canvas = new Canvas(WIDTH, HEIGHT);
  const S = HEIGHT;
  const aa = 1.1;

  const TOP = [{ cx: 0.5 * WIDTH, cy: 0.2 * S, accent: PRINT_SLATE }];
  const MID = [
    { cx: 0.33 * WIDTH, cy: 0.48 * S, accent: PRINT_RED },
    { cx: 0.67 * WIDTH, cy: 0.48 * S, accent: OCHRE },
  ];
  const BOTTOM = [
    { cx: 0.2 * WIDTH, cy: 0.78 * S, accent: [63, 81, 107] },
    { cx: 0.5 * WIDTH, cy: 0.78 * S, accent: PRINT_SLATE },
    { cx: 0.8 * WIDTH, cy: 0.78 * S, accent: PRINT_RED },
  ];
  const w = 0.19 * S;
  const h = 0.24 * S;

  for (let y = 0; y < HEIGHT; y += 1) {
    for (let x = 0; x < WIDTH; x += 1) {
      const i = (y * WIDTH + x) * 3;
      const nx = x / WIDTH;
      const ny = y / HEIGHT;

      let col = paintBackdrop(nx, ny, [243, 238, 230], [227, 216, 198], 0.5, 0.18, 0.55);

      // Verbindungslinien Großeltern -> Eltern -> Kinder.
      col = mixColor(col, [186, 168, 138], smoothstep(0.006 * S + aa, 0.006 * S - aa, sdSegment(x, y, TOP[0].cx, TOP[0].cy + h * 0.5, TOP[0].cx, 0.34 * S)) * 0.8);
      col = mixColor(col, [186, 168, 138], smoothstep(0.006 * S + aa, 0.006 * S - aa, sdSegment(x, y, MID[0].cx, 0.34 * S, MID[1].cx, 0.34 * S)) * 0.8);
      for (const m of MID) {
        col = mixColor(col, [186, 168, 138], smoothstep(0.006 * S + aa, 0.006 * S - aa, sdSegment(x, y, m.cx, 0.34 * S, m.cx, m.cy - h * 0.5)) * 0.8);
        col = mixColor(col, [186, 168, 138], smoothstep(0.006 * S + aa, 0.006 * S - aa, sdSegment(x, y, m.cx, m.cy + h * 0.5, m.cx, 0.63 * S)) * 0.8);
      }
      col = mixColor(col, [186, 168, 138], smoothstep(0.006 * S + aa, 0.006 * S - aa, sdSegment(x, y, BOTTOM[0].cx, 0.63 * S, BOTTOM[2].cx, 0.63 * S)) * 0.8);
      for (const b of BOTTOM) {
        col = mixColor(col, [186, 168, 138], smoothstep(0.006 * S + aa, 0.006 * S - aa, sdSegment(x, y, b.cx, 0.63 * S, b.cx, b.cy - h * 0.5)) * 0.8);
      }

      for (const node of [...TOP, ...MID, ...BOTTOM]) {
        col = drawPortraitCard(col, x, y, node.cx, node.cy, w, h, node.accent, aa);
      }

      const vig = Math.hypot(nx - 0.5, (ny - 0.42) * 0.85);
      col = mixColor(col, [78, 62, 40], smoothstep(0.44, 0.92, vig) * 0.14);

      canvas.blend(i, col, 1);
    }
  }

  return canvas;
}

/** Drei Gegenstände mit Anhängern – wem gehört was. */
function renderSceneBelongings(WIDTH, HEIGHT) {
  const canvas = new Canvas(WIDTH, HEIGHT);
  const S = HEIGHT;
  const aa = 1.1;

  const ITEMS = [
    { cx: 0.2 * WIDTH, color: PRINT_RED },
    { cx: 0.5 * WIDTH, color: PRINT_SLATE },
    { cx: 0.8 * WIDTH, color: OCHRE },
  ];
  const tableTop = 0.78 * S;
  const tagY = 0.22 * S;
  const itemY = 0.56 * S;

  for (let y = 0; y < HEIGHT; y += 1) {
    for (let x = 0; x < WIDTH; x += 1) {
      const i = (y * WIDTH + x) * 3;
      const nx = x / WIDTH;
      const ny = y / HEIGHT;

      let col = paintBackdrop(nx, ny, [238, 241, 236], [216, 227, 217], 0.5, 0.2, 0.5);
      col = mixColor(col, [193, 179, 145], smoothstep(tableTop - aa, tableTop + aa, y));

      for (const item of ITEMS) {
        col = mixColor(col, item.color, dashCoverage(x, y, item.cx, tagY + 0.05 * S, item.cx, itemY - 0.06 * S, 0.012 * S, 0.01 * S, 0.005 * S, aa) * 0.7);

        const tagD = sdRoundRect(x - item.cx, y - tagY, 0.085 * S, 0.032 * S, 0.008 * S);
        col = mixColor(col, [0, 0, 0], smoothstep(0.03 * S, -0.008 * S, tagD) * 0.12);
        const tagCov = smoothstep(aa, -aa, tagD);
        if (tagCov > 0) {
          col = mixColor(col, [255, 255, 255], tagCov);
          const dotD = Math.hypot(x - (item.cx - 0.05 * S), y - tagY) - 0.011 * S;
          col = mixColor(col, item.color, smoothstep(aa, -aa, dotD) * tagCov);
          const lineD = sdRoundRect(x - (item.cx + 0.01 * S), y - tagY, 0.045 * S, 0.007 * S, 0.007 * S);
          col = mixColor(col, item.color, smoothstep(aa, -aa, lineD) * tagCov * 0.85);
        }
      }

      // Buch links.
      const bookD = sdRoundRect(x - ITEMS[0].cx, y - itemY, 0.1 * S, 0.085 * S, 0.008 * S);
      col = mixColor(col, [0, 0, 0], smoothstep(0.03 * S, -0.01 * S, bookD) * 0.16);
      const bookCov = smoothstep(aa, -aa, bookD);
      if (bookCov > 0) {
        col = mixColor(col, [255, 255, 255], bookCov);
        const spineD = sdRoundRect(x - (ITEMS[0].cx - 0.078 * S), y - itemY, 0.022 * S, 0.085 * S, 0.006 * S);
        col = mixColor(col, PRINT_RED, smoothstep(aa, -aa, spineD) * bookCov);
        const l1 = sdRoundRect(x - (ITEMS[0].cx + 0.02 * S), y - (itemY - 0.02 * S), 0.038 * S, 0.006 * S, 0.006 * S);
        col = mixColor(col, [214, 219, 230], smoothstep(aa, -aa, l1) * bookCov * 0.8);
      }

      // Schlüsselbund Mitte.
      const ringD = Math.abs(Math.hypot(x - ITEMS[1].cx, y - (itemY - 0.02 * S)) - 0.032 * S) - 0.007 * S;
      col = mixColor(col, [0, 0, 0], smoothstep(0.03 * S, -0.008 * S, ringD) * 0.14);
      col = mixColor(col, PRINT_SLATE, smoothstep(aa, -aa, ringD));
      for (const ty of [0.045, 0.075]) {
        const toothD = sdRoundRect(x - ITEMS[1].cx, y - (itemY + ty * S), 0.02 * S, 0.007 * S, 0.007 * S);
        col = mixColor(col, PRINT_SLATE, smoothstep(aa, -aa, toothD));
      }

      // Tasse rechts.
      const mugD = sdRoundRect(x - ITEMS[2].cx, y - (itemY + 0.01 * S), 0.06 * S, 0.06 * S, 0.014 * S);
      col = mixColor(col, [0, 0, 0], smoothstep(0.03 * S, -0.01 * S, mugD) * 0.16);
      const mugCov = smoothstep(aa, -aa, mugD);
      if (mugCov > 0) col = mixColor(col, [255, 255, 255], mugCov);
      const handleOuter = Math.hypot(x - (ITEMS[2].cx + 0.06 * S), y - (itemY + 0.01 * S)) - 0.028 * S;
      const handleInner = Math.hypot(x - (ITEMS[2].cx + 0.06 * S), y - (itemY + 0.01 * S)) - 0.015 * S;
      const onHandle = x >= ITEMS[2].cx + 0.052 * S ? smoothstep(aa, -aa, handleOuter) - smoothstep(aa, -aa, handleInner) : 0;
      col = mixColor(col, [255, 255, 255], clamp(onHandle, 0, 1));

      const vig = Math.hypot(nx - 0.5, (ny - 0.4) * 0.85);
      col = mixColor(col, [50, 66, 52], smoothstep(0.44, 0.92, vig) * 0.16);

      canvas.blend(i, col, 1);
    }
  }

  return canvas;
}

/** Zwei gerahmte Porträts mit Schreiblinien darunter. */
function renderScenePortraits(WIDTH, HEIGHT) {
  const canvas = new Canvas(WIDTH, HEIGHT);
  const S = HEIGHT;
  const aa = 1.1;

  const PEOPLE = [
    { cx: 0.3 * WIDTH, accent: PRINT_RED },
    { cx: 0.7 * WIDTH, accent: PRINT_SLATE },
  ];
  const cy = 0.42 * S;
  const w = 0.32 * S;
  const h = 0.42 * S;

  for (let y = 0; y < HEIGHT; y += 1) {
    for (let x = 0; x < WIDTH; x += 1) {
      const i = (y * WIDTH + x) * 3;
      const nx = x / WIDTH;
      const ny = y / HEIGHT;

      let col = paintBackdrop(nx, ny, [244, 239, 241], [228, 217, 222], 0.5, 0.2, 0.5);

      for (const p of PEOPLE) {
        col = drawPortraitCard(col, x, y, p.cx, cy, w, h, p.accent, aa);
        const line1 = sdRoundRect(x - p.cx, y - 0.76 * S, w * 0.36, 0.012 * S, 0.012 * S);
        col = mixColor(col, [176, 190, 212], smoothstep(aa, -aa, line1) * 0.85);
        const line2 = sdRoundRect(x - (p.cx - w * 0.1), y - 0.82 * S, w * 0.24, 0.01 * S, 0.01 * S);
        col = mixColor(col, [176, 190, 212], smoothstep(aa, -aa, line2) * 0.6);
      }

      const vig = Math.hypot(nx - 0.5, (ny - 0.42) * 0.85);
      col = mixColor(col, [86, 60, 66], smoothstep(0.44, 0.92, vig) * 0.14);

      canvas.blend(i, col, 1);
    }
  }

  return canvas;
}

/** Zweistöckige Geburtstagstorte mit Kerzen, daneben eine Zahlenreihe. */
function renderSceneBirthday(WIDTH, HEIGHT) {
  const canvas = new Canvas(WIDTH, HEIGHT);
  const S = HEIGHT;
  const aa = 1.1;

  const cakeCx = 0.36 * WIDTH;
  const tierBottomY = 0.76 * S;
  const tierBottomH = 0.14 * S;
  const tierTopY = tierBottomY - tierBottomH;
  const tierTopH = 0.1 * S;

  for (let y = 0; y < HEIGHT; y += 1) {
    for (let x = 0; x < WIDTH; x += 1) {
      const i = (y * WIDTH + x) * 3;
      const nx = x / WIDTH;
      const ny = y / HEIGHT;

      let col = paintBackdrop(nx, ny, [246, 239, 232], [230, 213, 191], 0.5, 0.22, 0.5);
      col = mixColor(col, [193, 179, 145], smoothstep(0.86 * S - aa, 0.86 * S + aa, y));

      // Untere Schicht.
      const lowerD = sdRoundRect(x - cakeCx, y - (tierBottomY - tierBottomH / 2), 0.19 * S, tierBottomH / 2, 0.016 * S);
      col = mixColor(col, [0, 0, 0], smoothstep(0.04 * S, -0.012 * S, lowerD) * 0.14);
      col = mixColor(col, [255, 255, 255], smoothstep(aa, -aa, lowerD));
      // Zuckerguss-Welle am Übergang.
      for (let s = 0; s < 6; s += 1) {
        const sx = cakeCx - 0.19 * S + (s + 0.5) * (0.38 * S / 6);
        const scallopD = Math.hypot(x - sx, y - tierTopY) - 0.032 * S;
        col = mixColor(col, PRINT_RED, (y <= tierTopY ? smoothstep(aa, -aa, scallopD) : 0) * 0.9);
      }
      // Obere Schicht.
      const upperD = sdRoundRect(x - cakeCx, y - (tierTopY - tierTopH / 2), 0.14 * S, tierTopH / 2, 0.014 * S);
      col = mixColor(col, [0, 0, 0], smoothstep(0.03 * S, -0.01 * S, upperD) * 0.12);
      col = mixColor(col, [255, 255, 255], smoothstep(aa, -aa, upperD));

      // Kerzen.
      const candleTopY = tierTopY - tierTopH - 0.09 * S;
      for (const cx of [cakeCx - 0.08 * S, cakeCx - 0.026 * S, cakeCx + 0.026 * S, cakeCx + 0.08 * S]) {
        const candleD = sdRoundRect(x - cx, y - (candleTopY + 0.045 * S), 0.008 * S, 0.045 * S, 0.003 * S);
        col = mixColor(col, PRINT_SLATE, smoothstep(aa, -aa, candleD));
        const flameD = sdTriangle(x, y, [cx - 0.008 * S, candleTopY - 0.006 * S], [cx + 0.008 * S, candleTopY - 0.006 * S], [cx, candleTopY - 0.032 * S]);
        const glow = Math.exp(-(((x - cx) ** 2 + (y - (candleTopY - 0.018 * S)) ** 2) / (2 * (0.02 * S) ** 2)));
        col = mixColor(col, [246, 200, 110], glow * 0.4);
        col = mixColor(col, PRINT_RED, smoothstep(aa, -aa, flameD));
      }

      // Zahlenreihe rechts.
      for (let r = 0; r < 4; r += 1) {
        const ry = 0.16 * S + r * 0.15 * S;
        const chipD = sdRoundRect(x - 0.83 * WIDTH, y - ry, 0.1 * S, 0.045 * S, 0.012 * S);
        col = mixColor(col, [0, 0, 0], smoothstep(0.025 * S, -0.008 * S, chipD) * 0.12);
        const cov = smoothstep(aa, -aa, chipD);
        if (cov > 0) {
          col = mixColor(col, [255, 255, 255], cov);
          const lineD = sdRoundRect(x - (0.83 * WIDTH - 0.02 * S + r * 0.006 * S), y - ry, 0.045 * S + r * 0.006 * S, 0.009 * S, 0.009 * S);
          col = mixColor(col, PRINT_SLATE, smoothstep(aa, -aa, lineD) * cov * 0.8);
        }
      }

      const vig = Math.hypot(nx - 0.5, (ny - 0.42) * 0.85);
      col = mixColor(col, [90, 66, 40], smoothstep(0.44, 0.92, vig) * 0.16);

      canvas.blend(i, col, 1);
    }
  }

  return canvas;
}

/** Häuserzeile mit Ladenfronten, Straße und zwei Bäumen. */
function renderSceneCityStreet(WIDTH, HEIGHT) {
  const canvas = new Canvas(WIDTH, HEIGHT);
  const S = HEIGHT;
  const aa = 1.1;

  const HOUSES = [
    { cx: 0.13 * WIDTH, h: 0.42 * S, wall: [255, 255, 255], roof: PRINT_RED },
    { cx: 0.34 * WIDTH, h: 0.54 * S, wall: [241, 228, 225], roof: PRINT_SLATE },
    { cx: 0.55 * WIDTH, h: 0.36 * S, wall: [255, 255, 255], roof: OCHRE },
    { cx: 0.76 * WIDTH, h: 0.48 * S, wall: [241, 228, 225], roof: PRINT_RED },
  ];
  const houseW = 0.18 * S;
  const streetTop = 0.78 * S;

  for (let y = 0; y < HEIGHT; y += 1) {
    for (let x = 0; x < WIDTH; x += 1) {
      const i = (y * WIDTH + x) * 3;
      const nx = x / WIDTH;
      const ny = y / HEIGHT;

      let col = paintBackdrop(nx, ny, [231, 237, 243], [207, 220, 230], 0.5, 0.2, 0.5);

      for (const house of HOUSES) {
        const top = streetTop - house.h;
        const d = sdRoundRect(x - house.cx, y - (top + streetTop) / 2, houseW / 2, (streetTop - top) / 2, 0.01 * S);
        const cov = smoothstep(aa, -aa, d);
        if (cov > 0) {
          const lightT = clamp((x - (house.cx - houseW / 2)) / houseW, 0, 1);
          col = mixColor(col, mixColor(house.wall, mixColor(house.wall, [0, 0, 0], 0.14), lightT), cov);
          // Schaufenster.
          const shopD = sdRoundRect(x - house.cx, y - (streetTop - 0.07 * S), houseW * 0.3, 0.045 * S, 0.006 * S);
          col = mixColor(col, [214, 227, 238], smoothstep(aa, -aa, shopD) * cov);
          // Fenster darüber.
          for (const fx of [-0.045, 0.045]) {
            const winD = sdRoundRect(x - (house.cx + fx * S), y - (top + 0.075 * S), 0.022 * S, 0.028 * S, 0.004 * S);
            col = mixColor(col, [214, 227, 238], smoothstep(aa, -aa, winD) * cov);
          }
        }
        // Dach.
        const roofD = sdRoundRect(x - house.cx, y - (top - 0.012 * S), houseW / 2 + 0.006 * S, 0.012 * S, 0.004 * S);
        col = mixColor(col, house.roof, smoothstep(aa, -aa, roofD));
      }

      // Gehweg und Straße.
      col = mixColor(col, [203, 211, 220], smoothstep(streetTop - aa, streetTop + aa, y));
      col = mixColor(col, [185, 194, 204], smoothstep(streetTop + 0.03 * S - aa, streetTop + 0.03 * S + aa, y));
      const laneWave = Math.abs(((x + 0) % (0.09 * S)) - 0.045 * S);
      col = mixColor(col, [237, 241, 247], smoothstep(0.012 * S, 0, laneWave) * smoothstep(streetTop + 0.09 * S, streetTop + 0.1 * S, y) * smoothstep(streetTop + 0.14 * S, streetTop + 0.13 * S, y));

      col = drawTree(col, x, y, 0.24 * WIDTH, streetTop, 0.05 * S, aa);
      col = drawTree(col, x, y, 0.88 * WIDTH, streetTop, 0.045 * S, aa);

      const vig = Math.hypot(nx - 0.5, (ny - 0.4) * 0.85);
      col = mixColor(col, [40, 56, 70], smoothstep(0.44, 0.92, vig) * 0.14);

      canvas.blend(i, col, 1);
    }
  }

  return canvas;
}

/** Stadtplanausschnitt mit Straßenraster, Platz und Standortmarkierung. */
function renderSceneCityMap(WIDTH, HEIGHT) {
  const canvas = new Canvas(WIDTH, HEIGHT);
  const S = HEIGHT;
  const aa = 1.1;

  const BLOCKS = [
    [0.16, 0.24], [0.5, 0.24], [0.84, 0.24],
    [0.16, 0.68], [0.84, 0.68],
  ];
  const streetX = 0.33 * WIDTH;
  const streetX2 = 0.67 * WIDTH;
  const streetY = 0.46 * S;

  for (let y = 0; y < HEIGHT; y += 1) {
    for (let x = 0; x < WIDTH; x += 1) {
      const i = (y * WIDTH + x) * 3;
      const nx = x / WIDTH;
      const ny = y / HEIGHT;

      let col = paintBackdrop(nx, ny, [240, 237, 228], [223, 218, 200], 0.5, 0.2, 0.5);

      // Straßenraster.
      col = mixColor(col, [201, 194, 178], smoothstep(0.024 * S + aa, 0.024 * S - aa, Math.abs(y - streetY)));
      col = mixColor(col, [201, 194, 178], smoothstep(0.024 * S + aa, 0.024 * S - aa, Math.abs(x - streetX)));
      col = mixColor(col, [201, 194, 178], smoothstep(0.024 * S + aa, 0.024 * S - aa, Math.abs(x - streetX2)));

      for (const [bx, by] of BLOCKS) {
        const cx = bx * WIDTH;
        const cy = by * S;
        const d = sdRoundRect(x - cx, y - cy, 0.15 * S, 0.14 * S, 0.01 * S);
        const cov = smoothstep(aa, -aa, d);
        col = mixColor(col, [255, 255, 255], cov * 0.85);
      }

      // Platz mit Grünfläche in der Mitte.
      const plazaD = Math.hypot(x - 0.5 * WIDTH, y - streetY) - 0.075 * S;
      col = mixColor(col, [201, 194, 178], smoothstep(aa, -aa, plazaD));
      const greenD = Math.hypot(x - 0.5 * WIDTH, y - streetY) - 0.046 * S;
      col = mixColor(col, [156, 181, 155], smoothstep(aa, -aa, greenD));

      // Standortmarkierung mit Kreuz.
      const locCx = 0.19 * WIDTH;
      const locCy = 0.72 * S;
      const haloD = Math.hypot(x - locCx, y - locCy) - 0.04 * S;
      col = mixColor(col, PRINT_RED, smoothstep(aa, -aa, haloD) * 0.18);
      const crossD = Math.min(
        sdSegment(x, y, locCx - 0.028 * S, locCy - 0.028 * S, locCx + 0.028 * S, locCy + 0.028 * S),
        sdSegment(x, y, locCx + 0.028 * S, locCy - 0.028 * S, locCx - 0.028 * S, locCy + 0.028 * S),
      );
      col = mixColor(col, PRINT_RED, smoothstep(0.01 * S + aa, 0.01 * S - aa, crossD));

      // Zielnadel rechts oben.
      const pinCx = 0.84 * WIDTH;
      const pinCy = 0.72 * S;
      const pinD = pinDist(x, y, pinCx, pinCy, 0.032 * S);
      col = mixColor(col, [0, 0, 0], smoothstep(0.03 * S, -0.01 * S, pinD - 0.01 * S) * 0.15);
      col = mixColor(col, PRINT_SLATE, smoothstep(aa, -aa, pinD));
      col = mixColor(col, [255, 255, 255], smoothstep(aa, -aa, Math.hypot(x - pinCx, y - pinCy) - 0.011 * S));

      const vig = Math.hypot(nx - 0.5, (ny - 0.4) * 0.85);
      col = mixColor(col, [66, 56, 34], smoothstep(0.44, 0.92, vig) * 0.14);

      canvas.blend(i, col, 1);
    }
  }

  return canvas;
}

/** Wegweiser mit drei Schildern und Pfeil auf dem Pfosten. */
function renderSceneSignpost(WIDTH, HEIGHT) {
  const canvas = new Canvas(WIDTH, HEIGHT);
  const S = HEIGHT;
  const aa = 1.1;

  const postCx = 0.5 * WIDTH;
  const groundY = 0.88 * S;

  /** Wegweiser-Schild: Rechteck mit Pfeilspitze auf einer Seite. */
  const signDist = (x, y, cx, cy, hw, hh, pointRight) => {
    const bodyD = sdRoundRect(x - (cx - (pointRight ? hw * 0.12 : -hw * 0.12)), y - cy, hw * 0.88, hh, hh * 0.18);
    const tipX = pointRight ? cx + hw : cx - hw;
    const tipD = sdTriangle(x, y, [cx + (pointRight ? hw * 0.76 : -hw * 0.76), cy - hh], [cx + (pointRight ? hw * 0.76 : -hw * 0.76), cy + hh], [tipX, cy]);
    return Math.min(bodyD, tipD);
  };

  const SIGNS = [
    { cy: 0.34 * S, hw: 0.145 * S, hh: 0.052 * S, right: false, color: PRINT_RED },
    { cy: 0.5 * S, hw: 0.16 * S, hh: 0.052 * S, right: true, color: PRINT_SLATE },
    { cy: 0.66 * S, hw: 0.12 * S, hh: 0.05 * S, right: false, color: OCHRE },
  ];

  for (let y = 0; y < HEIGHT; y += 1) {
    for (let x = 0; x < WIDTH; x += 1) {
      const i = (y * WIDTH + x) * 3;
      const nx = x / WIDTH;
      const ny = y / HEIGHT;

      let col = paintBackdrop(nx, ny, [234, 240, 236], [211, 225, 217], 0.5, 0.2, 0.5);
      col = mixColor(col, [187, 202, 191], smoothstep(groundY - aa, groundY + aa, y));

      const postD = sdRoundRect(x - postCx, y - (0.18 * S + groundY) / 2, 0.011 * S, (groundY - 0.18 * S) / 2, 0.004 * S);
      col = mixColor(col, OCHRE, smoothstep(aa, -aa, postD));

      for (const sign of SIGNS) {
        const offset = sign.right ? postCx : postCx;
        const d = signDist(x, y, offset, sign.cy, sign.hw, sign.hh, sign.right);
        col = mixColor(col, [0, 0, 0], smoothstep(0.03 * S, -0.01 * S, d - 0.01 * S) * 0.14);
        const cov = smoothstep(aa, -aa, d);
        if (cov > 0) {
          col = mixColor(col, [255, 255, 255], cov);
          const lineCx = postCx + (sign.right ? 1 : -1) * sign.hw * 0.15;
          const lineD = sdRoundRect(x - lineCx, y - sign.cy, sign.hw * 0.5, sign.hh * 0.22, sign.hh * 0.22);
          col = mixColor(col, sign.color, smoothstep(aa, -aa, lineD) * cov);
        }
      }

      // Pfeil geradeaus oben auf dem Pfosten.
      const arrowD = Math.min(
        sdTriangle(x, y, [postCx - 0.024 * S, 0.13 * S], [postCx + 0.024 * S, 0.13 * S], [postCx, 0.09 * S]),
        sdRoundRect(x - postCx, y - 0.145 * S, 0.011 * S, 0.02 * S, 0.004 * S),
      );
      col = mixColor(col, PRINT_RED, smoothstep(aa, -aa, arrowD));

      const vig = Math.hypot(nx - 0.5, (ny - 0.42) * 0.85);
      col = mixColor(col, [40, 62, 48], smoothstep(0.44, 0.92, vig) * 0.16);

      canvas.blend(i, col, 1);
    }
  }

  return canvas;
}

/** A1 „La rutina diaria“: Wanduhr zwischen Sonne und Mond. */
function renderSceneClockDay(WIDTH, HEIGHT) {
  const canvas = new Canvas(WIDTH, HEIGHT);
  const S = HEIGHT;
  const aa = 1.1;

  const clockCx = 0.5 * WIDTH;
  const clockCy = 0.5 * S;
  const clockR = 0.29 * S;
  // Zeiger auf zwanzig nach sieben – eine Uhrzeit, die im Kapitel vorkommt.
  const hourAngle = (7 / 12 + 20 / 720) * Math.PI * 2 - Math.PI / 2;
  const minuteAngle = (20 / 60) * Math.PI * 2 - Math.PI / 2;

  const sunCx = 0.15 * WIDTH;
  const sunCy = 0.27 * S;
  const sunR = 0.1 * S;
  const moonCx = 0.85 * WIDTH;
  const moonCy = 0.73 * S;
  const moonR = 0.095 * S;

  for (let y = 0; y < HEIGHT; y += 1) {
    for (let x = 0; x < WIDTH; x += 1) {
      const i = (y * WIDTH + x) * 3;
      const nx = x / WIDTH;
      const ny = y / HEIGHT;

      // Der Verlauf läuft von der hellen Morgenecke zur kühlen Nachtecke.
      let col = paintBackdrop(nx, ny, [251, 241, 224], [214, 221, 237], 0.18, 0.2, 0.62);

      // Sonne links oben, mit Strahlen.
      for (let ray = 0; ray < 8; ray += 1) {
        const a = (ray / 8) * Math.PI * 2;
        const x0 = sunCx + Math.cos(a) * sunR * 1.3;
        const y0 = sunCy + Math.sin(a) * sunR * 1.3;
        const x1 = sunCx + Math.cos(a) * sunR * 1.72;
        const y1 = sunCy + Math.sin(a) * sunR * 1.72;
        const rayD = sdSegment(x, y, x0, y0, x1, y1) - 0.007 * S;
        col = mixColor(col, OCHRE, smoothstep(aa, -aa, rayD) * 0.85);
      }
      const sunD = Math.hypot(x - sunCx, y - sunCy) - sunR;
      col = mixColor(col, [233, 178, 88], smoothstep(aa, -aa, sunD));
      col = mixColor(col, [246, 214, 158], smoothstep(aa, -aa, Math.hypot(x - (sunCx - sunR * 0.28), y - (sunCy - sunR * 0.3)) - sunR * 0.52) * 0.7);

      // Mond rechts unten: Vollkreis minus versetzter Kreis.
      const moonD = Math.hypot(x - moonCx, y - moonCy) - moonR;
      const biteD = Math.hypot(x - (moonCx + moonR * 0.52), y - (moonCy - moonR * 0.38)) - moonR * 0.86;
      const crescent = Math.max(moonD, -biteD);
      col = mixColor(col, [116, 130, 168], smoothstep(aa, -aa, crescent));

      // Gehäuse und Zifferblatt.
      const caseD = Math.hypot(x - clockCx, y - clockCy) - clockR;
      col = mixColor(col, [0, 0, 0], smoothstep(0.1 * S, -0.02 * S, caseD - 0.012 * S) * 0.16);
      col = mixColor(col, PRINT_SLATE, smoothstep(aa, -aa, caseD));
      const faceD = Math.hypot(x - clockCx, y - clockCy) - clockR * 0.88;
      const faceCov = smoothstep(aa, -aa, faceD);
      if (faceCov > 0) {
        col = mixColor(col, [255, 253, 248], faceCov);
        // Zwölf Striche, die vollen Stunden etwas länger.
        for (let m = 0; m < 12; m += 1) {
          const a = (m / 12) * Math.PI * 2 - Math.PI / 2;
          const long = m % 3 === 0;
          const inner = clockR * (long ? 0.62 : 0.7);
          const outer = clockR * 0.78;
          const tickD =
            sdSegment(
              x,
              y,
              clockCx + Math.cos(a) * inner,
              clockCy + Math.sin(a) * inner,
              clockCx + Math.cos(a) * outer,
              clockCy + Math.sin(a) * outer,
            ) - (long ? 0.011 : 0.006) * S;
          col = mixColor(col, PRINT_SLATE, smoothstep(aa, -aa, tickD) * faceCov);
        }
        // Stundenzeiger kurz und kräftig, Minutenzeiger lang und schlank.
        const hourD =
          sdSegment(x, y, clockCx, clockCy, clockCx + Math.cos(hourAngle) * clockR * 0.42, clockCy + Math.sin(hourAngle) * clockR * 0.42) -
          0.014 * S;
        col = mixColor(col, PRINT_SLATE, smoothstep(aa, -aa, hourD) * faceCov);
        const minuteD =
          sdSegment(x, y, clockCx, clockCy, clockCx + Math.cos(minuteAngle) * clockR * 0.66, clockCy + Math.sin(minuteAngle) * clockR * 0.66) -
          0.009 * S;
        col = mixColor(col, PRINT_RED, smoothstep(aa, -aa, minuteD) * faceCov);
        const pinD = Math.hypot(x - clockCx, y - clockCy) - 0.022 * S;
        col = mixColor(col, PRINT_RED, smoothstep(aa, -aa, pinD) * faceCov);
      }

      const vig = Math.hypot(nx - 0.5, (ny - 0.45) * 0.85);
      col = mixColor(col, [52, 52, 64], smoothstep(0.46, 0.94, vig) * 0.15);

      canvas.blend(i, col, 1);
    }
  }

  return canvas;
}

/** A1 „De compras“: Marktstand mit Markise und Kisten. */
function renderSceneMarketStall(WIDTH, HEIGHT) {
  const canvas = new Canvas(WIDTH, HEIGHT);
  const S = HEIGHT;
  const aa = 1.1;

  const stallCx = 0.5 * WIDTH;
  const counterY = 0.68 * S;
  const groundY = 0.9 * S;
  const awningY = 0.28 * S;
  const halfW = 0.34 * WIDTH;

  const CRATES = [
    { cx: stallCx - halfW * 0.6, fruit: [198, 90, 70] },
    { cx: stallCx, fruit: [226, 162, 66] },
    { cx: stallCx + halfW * 0.6, fruit: [126, 158, 104] },
  ];

  for (let y = 0; y < HEIGHT; y += 1) {
    for (let x = 0; x < WIDTH; x += 1) {
      const i = (y * WIDTH + x) * 3;
      const nx = x / WIDTH;
      const ny = y / HEIGHT;

      let col = paintBackdrop(nx, ny, [243, 236, 224], [219, 210, 195], 0.5, 0.18, 0.55);
      col = mixColor(col, [199, 190, 176], smoothstep(groundY - aa, groundY + aa, y));

      // Die beiden Pfosten stehen hinter allem anderen.
      for (const px of [stallCx - halfW, stallCx + halfW]) {
        const postD = sdRoundRect(x - px, y - (awningY + groundY) / 2, 0.011 * S, (groundY - awningY) / 2, 0.004 * S);
        col = mixColor(col, OCHRE, smoothstep(aa, -aa, postD));
      }

      // Markise: gerades Dach mit gewellter Kante, rot-weiß gestreift.
      const scallop = 0.018 * S * Math.abs(Math.sin(((x - (stallCx - halfW)) / (0.075 * S)) * Math.PI));
      const awningD = sdRoundRect(x - stallCx, y - (awningY + 0.045 * S), halfW + 0.012 * S, 0.045 * S + scallop, 0.01 * S);
      const awningCov = smoothstep(aa, -aa, awningD);
      if (awningCov > 0) {
        const stripe = Math.floor((x - (stallCx - halfW)) / (0.075 * S)) % 2 === 0;
        col = mixColor(col, stripe ? PRINT_RED : [252, 248, 242], awningCov);
      }
      col = mixColor(col, [0, 0, 0], smoothstep(0.07 * S, 0, Math.abs(y - (awningY + 0.1 * S))) * smoothstep(halfW + aa, halfW - aa, Math.abs(x - stallCx)) * 0.08);

      // Ladentisch.
      const counterD = sdRoundRect(x - stallCx, y - (counterY + 0.05 * S), halfW * 0.96, 0.05 * S, 0.008 * S);
      col = mixColor(col, [0, 0, 0], smoothstep(0.06 * S, -0.01 * S, counterD - 0.01 * S) * 0.15);
      col = mixColor(col, [229, 216, 197], smoothstep(aa, -aa, counterD));

      // Kisten auf dem Tisch, jede mit einer Lage Früchte darin.
      for (const crate of CRATES) {
        const crateHalfW = 0.085 * S;
        const crateCy = counterY - 0.045 * S;
        const crateD = sdRoundRect(x - crate.cx, y - crateCy, crateHalfW, 0.045 * S, 0.006 * S);
        const crateCov = smoothstep(aa, -aa, crateD);
        if (crateCov > 0) {
          col = mixColor(col, [206, 176, 134], crateCov);
          // Zwei waagerechte Fugen deuten die Bretter an.
          for (const fy of [-0.012, 0.018]) {
            const slatD = Math.abs(y - (crateCy + fy * S)) - 0.003 * S;
            col = mixColor(col, [186, 154, 112], smoothstep(aa, -aa, slatD) * crateCov);
          }
        }
        for (const fx of [-0.048, 0, 0.048]) {
          const fruitD = Math.hypot(x - (crate.cx + fx * S), y - (crateCy - 0.052 * S)) - 0.023 * S;
          col = mixColor(col, crate.fruit, smoothstep(aa, -aa, fruitD));
          const glossD = Math.hypot(x - (crate.cx + fx * S - 0.007 * S), y - (crateCy - 0.06 * S)) - 0.008 * S;
          col = mixColor(col, [255, 255, 255], smoothstep(aa, -aa, glossD) * 0.4);
        }
      }

      // Preisschild an der linken Ecke des Tischs.
      const tagD = sdRoundRect(x - (stallCx - halfW * 0.86), y - (counterY + 0.05 * S), 0.045 * S, 0.028 * S, 0.006 * S);
      const tagCov = smoothstep(aa, -aa, tagD);
      if (tagCov > 0) {
        col = mixColor(col, [255, 253, 248], tagCov);
        for (const ly of [-0.008, 0.006]) {
          const lineD = sdRoundRect(x - (stallCx - halfW * 0.86), y - (counterY + 0.05 * S + ly * S), 0.026 * S, 0.0035 * S, 0.0035 * S);
          col = mixColor(col, PRINT_RED, smoothstep(aa, -aa, lineD) * tagCov);
        }
      }

      const vig = Math.hypot(nx - 0.5, (ny - 0.44) * 0.85);
      col = mixColor(col, [62, 50, 38], smoothstep(0.44, 0.92, vig) * 0.16);

      canvas.blend(i, col, 1);
    }
  }

  return canvas;
}

/** A1 „De compras“: zwei volle Einkaufstaschen mit Kassenzettel. */
function renderSceneShoppingBags(WIDTH, HEIGHT) {
  const canvas = new Canvas(WIDTH, HEIGHT);
  const S = HEIGHT;
  const aa = 1.1;

  const groundY = 0.84 * S;
  const BAGS = [
    { cx: 0.36 * WIDTH, halfW: 0.13 * S, halfH: 0.17 * S, color: [193, 106, 86] },
    { cx: 0.58 * WIDTH, halfW: 0.115 * S, halfH: 0.145 * S, color: [126, 150, 168] },
  ];

  for (let y = 0; y < HEIGHT; y += 1) {
    for (let x = 0; x < WIDTH; x += 1) {
      const i = (y * WIDTH + x) * 3;
      const nx = x / WIDTH;
      const ny = y / HEIGHT;

      let col = paintBackdrop(nx, ny, [246, 242, 233], [222, 215, 203], 0.45, 0.2, 0.55);
      col = mixColor(col, [204, 196, 183], smoothstep(groundY - aa, groundY + aa, y));

      for (const bag of BAGS) {
        const bagCy = groundY - bag.halfH;
        // Henkel: zwei Bögen aus je drei Segmenten, hinter der Tasche.
        for (const side of [-1, 1]) {
          const hx = bag.cx + side * bag.halfW * 0.45;
          const topY = bagCy - bag.halfH - 0.055 * S;
          const handleD =
            Math.min(
              sdSegment(x, y, hx - bag.halfW * 0.22, bagCy - bag.halfH, hx - bag.halfW * 0.16, topY),
              sdSegment(x, y, hx - bag.halfW * 0.16, topY, hx + bag.halfW * 0.16, topY),
              sdSegment(x, y, hx + bag.halfW * 0.16, topY, hx + bag.halfW * 0.22, bagCy - bag.halfH),
            ) - 0.007 * S;
          col = mixColor(col, mixColor(bag.color, [0, 0, 0], 0.25), smoothstep(aa, -aa, handleD));
        }

        const bodyD = sdRoundRect(x - bag.cx, y - bagCy, bag.halfW, bag.halfH, 0.012 * S);
        col = mixColor(col, [0, 0, 0], smoothstep(0.08 * S, -0.01 * S, bodyD - 0.012 * S) * 0.16);
        const cov = smoothstep(aa, -aa, bodyD);
        if (cov > 0) {
          // Licht von links: die rechte Kante der Tasche läuft dunkler aus.
          const lightT = clamp((x - (bag.cx - bag.halfW)) / (bag.halfW * 2), 0, 1);
          col = mixColor(col, mixColor(bag.color, mixColor(bag.color, [0, 0, 0], 0.22), lightT), cov);
          const foldD = Math.abs(x - bag.cx) - 0.004 * S;
          col = mixColor(col, mixColor(bag.color, [0, 0, 0], 0.14), smoothstep(aa, -aa, foldD) * cov * 0.6);
          const rimD = Math.abs(y - (bagCy - bag.halfH + 0.022 * S)) - 0.008 * S;
          col = mixColor(col, mixColor(bag.color, [255, 255, 255], 0.3), smoothstep(aa, -aa, rimD) * cov);
        }

        // Was oben herausschaut: Brot in der großen, Grünzeug in der kleinen Tasche.
        if (bag.halfH > 0.16 * S) {
          const loafD = sdRoundRect(...toLocal(x, y, bag.cx + bag.halfW * 0.3, bagCy - bag.halfH - 0.03 * S, -0.35), 0.055 * S, 0.02 * S, 0.02 * S);
          col = mixColor(col, [211, 168, 110], smoothstep(aa, -aa, loafD));
        } else {
          for (const lx of [-0.035, 0, 0.032]) {
            const leafD = Math.hypot(x - (bag.cx + lx * S), y - (bagCy - bag.halfH - 0.028 * S)) - 0.026 * S;
            col = mixColor(col, [124, 158, 108], smoothstep(aa, -aa, leafD));
          }
        }
      }

      // Kassenzettel rechts, leicht gedreht, mit angedeuteten Zeilen.
      const [rx, ry] = toLocal(x, y, 0.79 * WIDTH, 0.73 * S, 0.14);
      const receiptD = sdRoundRect(rx, ry, 0.062 * S, 0.11 * S, 0.006 * S);
      col = mixColor(col, [0, 0, 0], smoothstep(0.05 * S, -0.01 * S, receiptD - 0.008 * S) * 0.14);
      const receiptCov = smoothstep(aa, -aa, receiptD);
      if (receiptCov > 0) {
        col = mixColor(col, [255, 253, 248], receiptCov);
        for (let line = 0; line < 6; line += 1) {
          const ly = -0.072 * S + line * 0.026 * S;
          const lineHalfW = line === 5 ? 0.02 * S : 0.042 * S - (line % 3) * 0.006 * S;
          const lineD = sdRoundRect(rx + (line === 5 ? 0.02 * S : 0), ry - ly, lineHalfW, 0.004 * S, 0.004 * S);
          col = mixColor(col, line === 5 ? PRINT_RED : [176, 170, 160], smoothstep(aa, -aa, lineD) * receiptCov);
        }
      }

      const vig = Math.hypot(nx - 0.5, (ny - 0.44) * 0.85);
      col = mixColor(col, [58, 52, 44], smoothstep(0.44, 0.92, vig) * 0.16);

      canvas.blend(i, col, 1);
    }
  }

  return canvas;
}

/** A1 „En el restaurante“: gedeckter Tisch von oben. */
function renderSceneRestaurantTable(WIDTH, HEIGHT) {
  const canvas = new Canvas(WIDTH, HEIGHT);
  const S = HEIGHT;
  const aa = 1.1;

  const plateCx = 0.42 * WIDTH;
  const plateCy = 0.56 * S;
  const plateR = 0.2 * S;

  for (let y = 0; y < HEIGHT; y += 1) {
    for (let x = 0; x < WIDTH; x += 1) {
      const i = (y * WIDTH + x) * 3;
      const nx = x / WIDTH;
      const ny = y / HEIGHT;

      // Tischplatte aus Holz: Grundton plus weiche Maserung.
      let col = paintBackdrop(nx, ny, [190, 152, 112], [160, 122, 86], 0.4, 0.15, 0.6);
      const grain = valueNoise(nx * 3.2, ny * 22);
      col = mixColor(col, [146, 110, 76], grain * 0.18);

      // Serviette unter dem Besteck, leicht gedreht.
      const [sx, sy] = toLocal(x, y, 0.72 * WIDTH, 0.58 * S, -0.06);
      const napkinD = sdRoundRect(sx, sy, 0.11 * S, 0.17 * S, 0.008 * S);
      col = mixColor(col, [0, 0, 0], smoothstep(0.05 * S, -0.01 * S, napkinD) * 0.14);
      const napkinCov = smoothstep(aa, -aa, napkinD);
      col = mixColor(col, [238, 231, 220], napkinCov);
      col = mixColor(col, [220, 211, 198], smoothstep(aa, -aa, Math.abs(sx - 0.03 * S) - 0.002 * S) * napkinCov);

      // Teller mit Rand.
      const plateD = Math.hypot(x - plateCx, y - plateCy) - plateR;
      col = mixColor(col, [0, 0, 0], smoothstep(0.09 * S, -0.02 * S, plateD - 0.012 * S) * 0.18);
      const plateCov = smoothstep(aa, -aa, plateD);
      if (plateCov > 0) {
        col = mixColor(col, [252, 250, 246], plateCov);
        const rimD = Math.hypot(x - plateCx, y - plateCy) - plateR * 0.74;
        col = mixColor(col, [226, 220, 210], smoothstep(aa, -aa, rimD) * plateCov * 0.7);
        const innerD = Math.hypot(x - plateCx, y - plateCy) - plateR * 0.68;
        col = mixColor(col, [255, 254, 251], smoothstep(aa, -aa, innerD) * plateCov);
      }

      // Gabel links vom Teller: Stiel und drei Zinken.
      const forkCx = plateCx - plateR * 1.4;
      const forkD = sdRoundRect(x - forkCx, y - (plateCy + 0.03 * S), 0.009 * S, 0.075 * S, 0.008 * S);
      let cutlery = forkD;
      for (const tx of [-0.016, 0, 0.016]) {
        cutlery = Math.min(
          cutlery,
          sdRoundRect(x - (forkCx + tx * S), y - (plateCy - 0.085 * S), 0.004 * S, 0.035 * S, 0.004 * S),
        );
      }
      // Messer rechts: Griff plus schmaler werdende Klinge.
      const knifeCx = plateCx + plateR * 1.36;
      cutlery = Math.min(cutlery, sdRoundRect(x - knifeCx, y - (plateCy + 0.06 * S), 0.011 * S, 0.055 * S, 0.01 * S));
      cutlery = Math.min(
        cutlery,
        sdTriangle(x, y, [knifeCx - 0.009 * S, plateCy + 0.01 * S], [knifeCx + 0.009 * S, plateCy + 0.01 * S], [knifeCx, plateCy - 0.11 * S]),
      );
      col = mixColor(col, [0, 0, 0], smoothstep(0.035 * S, -0.005 * S, cutlery - 0.006 * S) * 0.16);
      col = mixColor(col, [198, 203, 209], smoothstep(aa, -aa, cutlery));
      col = mixColor(col, [235, 238, 242], smoothstep(aa, -aa, cutlery + 0.004 * S) * 0.5);

      // Weinglas oben rechts: Kelch, Stiel, Fuß.
      const glassCx = 0.87 * WIDTH;
      const glassCy = 0.34 * S;
      const bowlD = Math.hypot(x - glassCx, (y - glassCy) * 0.8) - 0.055 * S;
      const glassCov = smoothstep(aa, -aa, bowlD);
      col = mixColor(col, [225, 231, 236], glassCov * 0.8);
      // Der Wein füllt den Kelch nur bis zur Hälfte: Kelch geschnitten mit der
      // Halbebene unterhalb der Füllhöhe.
      const wineD = Math.max(bowlD + 0.006 * S, glassCy + 0.012 * S - y);
      col = mixColor(col, [141, 48, 54], smoothstep(aa, -aa, wineD) * 0.85);
      const rimRingD = Math.abs(bowlD + 0.003 * S) - 0.0035 * S;
      col = mixColor(col, [178, 186, 195], smoothstep(aa, -aa, rimRingD) * 0.9);
      const stemD = sdRoundRect(x - glassCx, y - (glassCy + 0.085 * S), 0.005 * S, 0.04 * S, 0.004 * S);
      col = mixColor(col, [225, 231, 236], smoothstep(aa, -aa, stemD) * 0.85);
      const footD = Math.hypot((x - glassCx) * 0.35, y - (glassCy + 0.13 * S)) - 0.014 * S;
      col = mixColor(col, [225, 231, 236], smoothstep(aa, -aa, footD) * 0.85);

      // Aufgeschlagene Karte links unten, angeschnitten.
      const [mx, my] = toLocal(x, y, 0.12 * WIDTH, 0.8 * S, 0.1);
      const menuD = sdRoundRect(mx, my, 0.13 * S, 0.16 * S, 0.008 * S);
      col = mixColor(col, [0, 0, 0], smoothstep(0.06 * S, -0.01 * S, menuD - 0.01 * S) * 0.15);
      const menuCov = smoothstep(aa, -aa, menuD);
      if (menuCov > 0) {
        col = mixColor(col, [250, 245, 236], menuCov);
        for (let line = 0; line < 5; line += 1) {
          const ly = -0.1 * S + line * 0.032 * S;
          const lineD = sdRoundRect(mx + 0.01 * S, my - ly, line === 0 ? 0.045 * S : 0.085 * S, 0.005 * S, 0.005 * S);
          col = mixColor(col, line === 0 ? PRINT_RED : [182, 172, 158], smoothstep(aa, -aa, lineD) * menuCov);
        }
      }

      const vig = Math.hypot(nx - 0.5, (ny - 0.45) * 0.85);
      col = mixColor(col, [48, 32, 20], smoothstep(0.42, 0.92, vig) * 0.2);

      canvas.blend(i, col, 1);
    }
  }

  return canvas;
}

/** A2 „El fin de semana pasado“: Kalenderblatt mit markiertem Wochenende. */
function renderSceneCalendarWeekend(WIDTH, HEIGHT) {
  const canvas = new Canvas(WIDTH, HEIGHT);
  const S = HEIGHT;
  const aa = 1.1;

  const sheetCx = 0.5 * WIDTH;
  const sheetCy = 0.54 * S;
  const halfW = 0.3 * WIDTH;
  const halfH = 0.33 * S;
  const headerH = 0.1 * S;

  // Sieben Spalten, vier Zeilen; die letzten beiden Spalten sind das Wochenende.
  const gridLeft = sheetCx - halfW + 0.045 * S;
  const gridTop = sheetCy - halfH + headerH + 0.08 * S;
  const stepX = (2 * halfW - 0.09 * S) / 6;
  const stepY = 0.098 * S;

  for (let y = 0; y < HEIGHT; y += 1) {
    for (let x = 0; x < WIDTH; x += 1) {
      const i = (y * WIDTH + x) * 3;
      const nx = x / WIDTH;
      const ny = y / HEIGHT;

      let col = paintBackdrop(nx, ny, [240, 236, 228], [216, 210, 198], 0.5, 0.2, 0.55);

      // Zwei Ringbinder-Ösen über dem Blatt.
      for (const rx of [-0.11, 0.11]) {
        const ringD = Math.abs(Math.hypot(x - (sheetCx + rx * WIDTH), y - (sheetCy - halfH - 0.012 * S)) - 0.02 * S) - 0.006 * S;
        col = mixColor(col, [150, 156, 164], smoothstep(aa, -aa, ringD));
      }

      const sheetD = sdRoundRect(x - sheetCx, y - sheetCy, halfW, halfH, 0.016 * S);
      col = mixColor(col, [0, 0, 0], smoothstep(0.1 * S, -0.02 * S, sheetD - 0.014 * S) * 0.17);
      const sheetCov = smoothstep(aa, -aa, sheetD);
      if (sheetCov > 0) {
        col = mixColor(col, [255, 253, 249], sheetCov);

        // Kopfzeile mit Monatsbalken.
        const headD = sdRoundRect(x - sheetCx, y - (sheetCy - halfH + headerH / 2), halfW, headerH / 2, 0.016 * S);
        col = mixColor(col, PRINT_RED, smoothstep(aa, -aa, headD) * sheetCov);
        const titleD = sdRoundRect(x - (sheetCx - halfW * 0.42), y - (sheetCy - halfH + headerH / 2), 0.075 * S, 0.011 * S, 0.011 * S);
        col = mixColor(col, [255, 240, 238], smoothstep(aa, -aa, titleD) * sheetCov);

        for (let row = 0; row < 5; row += 1) {
          for (let cell = 0; cell < 7; cell += 1) {
            const cx = gridLeft + cell * stepX;
            const cy = gridTop + row * stepY;
            const weekend = cell >= 5;
            // Die letzte Woche ist die vergangene: dort sind Samstag und
            // Sonntag ausgefüllt, sonst nur als heller Kasten angedeutet.
            const marked = weekend && row === 3;
            const d = sdRoundRect(x - cx, y - cy, 0.03 * S, 0.03 * S, 0.008 * S);
            const cov = smoothstep(aa, -aa, d) * sheetCov;
            if (cov <= 0) continue;
            if (marked) col = mixColor(col, PRINT_RED, cov);
            else col = mixColor(col, weekend ? [236, 225, 222] : [232, 234, 238], cov);
          }
        }
      }

      const vig = Math.hypot(nx - 0.5, (ny - 0.45) * 0.85);
      col = mixColor(col, [58, 50, 44], smoothstep(0.44, 0.92, vig) * 0.16);

      canvas.blend(i, col, 1);
    }
  }

  return canvas;
}

/** A2 „Cuando era niño“: Bauklötze, Ball und Teddy. */
function renderSceneChildhoodToys(WIDTH, HEIGHT) {
  const canvas = new Canvas(WIDTH, HEIGHT);
  const S = HEIGHT;
  const aa = 1.1;

  const groundY = 0.82 * S;
  const blockS = 0.105 * S;
  const stackCx = 0.3 * WIDTH;
  const BLOCKS = [
    { cy: groundY - blockS / 2, color: PRINT_RED },
    { cy: groundY - blockS * 1.5, color: [214, 166, 78] },
    { cy: groundY - blockS * 2.5, color: [108, 138, 168] },
  ];

  const bearCx = 0.68 * WIDTH;
  const bearHeadCy = groundY - 0.27 * S;
  const bearFur = [178, 142, 106];

  for (let y = 0; y < HEIGHT; y += 1) {
    for (let x = 0; x < WIDTH; x += 1) {
      const i = (y * WIDTH + x) * 3;
      const nx = x / WIDTH;
      const ny = y / HEIGHT;

      let col = paintBackdrop(nx, ny, [242, 234, 224], [219, 206, 192], 0.5, 0.22, 0.55);
      // Teppichkante statt harter Bodenlinie.
      col = mixColor(col, [203, 186, 170], smoothstep(groundY - aa, groundY + aa, y));

      for (const block of BLOCKS) {
        const d = sdRoundRect(x - stackCx, y - block.cy, blockS / 2, blockS / 2, 0.01 * S);
        col = mixColor(col, [0, 0, 0], smoothstep(0.05 * S, -0.01 * S, d - 0.01 * S) * 0.14);
        const cov = smoothstep(aa, -aa, d);
        if (cov > 0) {
          const lightT = clamp((x - (stackCx - blockS / 2)) / blockS, 0, 1);
          col = mixColor(col, mixColor(block.color, mixColor(block.color, [0, 0, 0], 0.2), lightT), cov);
          // Helles Feld in der Mitte, wie der Buchstabe auf einem Klotz.
          const faceD = sdRoundRect(x - stackCx, y - block.cy, blockS * 0.22, blockS * 0.22, 0.006 * S);
          col = mixColor(col, [250, 245, 236], smoothstep(aa, -aa, faceD) * cov * 0.9);
        }
      }

      // Ball vor dem Turm.
      const ballCx = 0.46 * WIDTH;
      const ballR = 0.088 * S;
      const ballD = Math.hypot(x - ballCx, y - (groundY - ballR)) - ballR;
      col = mixColor(col, [0, 0, 0], smoothstep(0.06 * S, -0.01 * S, ballD - 0.01 * S) * 0.14);
      const ballCov = smoothstep(aa, -aa, ballD);
      if (ballCov > 0) {
        col = mixColor(col, [226, 224, 216], ballCov);
        const bandD = Math.abs(y - (groundY - ballR)) - 0.016 * S;
        col = mixColor(col, [96, 134, 160], smoothstep(aa, -aa, bandD) * ballCov);
        const glossD = Math.hypot(x - (ballCx - ballR * 0.35), y - (groundY - ballR * 1.35)) - ballR * 0.22;
        col = mixColor(col, [255, 255, 255], smoothstep(aa, -aa, glossD) * ballCov * 0.5);
      }

      // Teddy: Ohren, Kopf, Körper, zwei Beine.
      let bearD = Math.hypot(x - bearCx, y - (groundY - 0.105 * S)) - 0.12 * S;
      bearD = Math.min(bearD, Math.hypot(x - bearCx, y - bearHeadCy) - 0.088 * S);
      for (const ex of [-0.07, 0.07]) {
        bearD = Math.min(bearD, Math.hypot(x - (bearCx + ex * S), y - (bearHeadCy - 0.064 * S)) - 0.034 * S);
      }
      for (const lx of [-0.07, 0.07]) {
        bearD = Math.min(bearD, Math.hypot(x - (bearCx + lx * S), y - (groundY - 0.03 * S)) - 0.038 * S);
      }
      col = mixColor(col, [0, 0, 0], smoothstep(0.07 * S, -0.01 * S, bearD - 0.012 * S) * 0.15);
      const bearCov = smoothstep(aa, -aa, bearD);
      if (bearCov > 0) {
        const lightT = clamp((x - (bearCx - 0.13 * S)) / (0.26 * S), 0, 1);
        col = mixColor(col, mixColor(bearFur, mixColor(bearFur, [0, 0, 0], 0.18), lightT), bearCov);
        // Schnauze und Augen.
        const muzzleD = Math.hypot(x - bearCx, (y - (bearHeadCy + 0.026 * S)) * 1.25) - 0.037 * S;
        col = mixColor(col, [225, 205, 180], smoothstep(aa, -aa, muzzleD) * bearCov);
        for (const ex of [-0.031, 0.031]) {
          const eyeD = Math.hypot(x - (bearCx + ex * S), y - (bearHeadCy - 0.012 * S)) - 0.01 * S;
          col = mixColor(col, PRINT_SLATE, smoothstep(aa, -aa, eyeD) * bearCov);
        }
      }

      const vig = Math.hypot(nx - 0.5, (ny - 0.45) * 0.85);
      col = mixColor(col, [60, 46, 34], smoothstep(0.44, 0.92, vig) * 0.16);

      canvas.blend(i, col, 1);
    }
  }

  return canvas;
}

/** A2 „Salud y cuerpo“: Stethoskop, Thermometer und Karteikarte. */
function renderSceneDoctorVisit(WIDTH, HEIGHT) {
  const canvas = new Canvas(WIDTH, HEIGHT);
  const S = HEIGHT;
  const aa = 1.1;

  const chestCx = 0.36 * WIDTH;
  const chestCy = 0.68 * S;
  const steel = [156, 166, 176];
  const tube = [70, 96, 122];

  for (let y = 0; y < HEIGHT; y += 1) {
    for (let x = 0; x < WIDTH; x += 1) {
      const i = (y * WIDTH + x) * 3;
      const nx = x / WIDTH;
      const ny = y / HEIGHT;

      let col = paintBackdrop(nx, ny, [238, 242, 244], [214, 224, 228], 0.45, 0.2, 0.55);

      // Karteikarte im Hintergrund, leicht gedreht.
      const [cx, cy] = toLocal(x, y, 0.66 * WIDTH, 0.55 * S, -0.07);
      const cardD = sdRoundRect(cx, cy, 0.145 * S, 0.19 * S, 0.01 * S);
      col = mixColor(col, [0, 0, 0], smoothstep(0.07 * S, -0.01 * S, cardD - 0.012 * S) * 0.15);
      const cardCov = smoothstep(aa, -aa, cardD);
      if (cardCov > 0) {
        col = mixColor(col, [255, 253, 249], cardCov);
        const barD = sdRoundRect(cx, cy + 0.155 * S, 0.145 * S, 0.035 * S, 0.01 * S);
        col = mixColor(col, [223, 233, 238], smoothstep(aa, -aa, barD) * cardCov);
        for (let line = 0; line < 5; line += 1) {
          const ly = -0.135 * S + line * 0.042 * S;
          const lineD = sdRoundRect(cx + 0.012 * S, cy - ly, line === 0 ? 0.055 * S : 0.1 * S, 0.006 * S, 0.006 * S);
          col = mixColor(col, line === 0 ? PRINT_RED : [186, 192, 198], smoothstep(aa, -aa, lineD) * cardCov);
        }
      }

      // Thermometer, quer über der Karte.
      const [tx, ty] = toLocal(x, y, 0.72 * WIDTH, 0.84 * S, 0.34);
      const thermoD = sdRoundRect(tx, ty, 0.115 * S, 0.014 * S, 0.014 * S);
      col = mixColor(col, [0, 0, 0], smoothstep(0.04 * S, -0.005 * S, thermoD - 0.008 * S) * 0.15);
      const thermoCov = smoothstep(aa, -aa, thermoD);
      if (thermoCov > 0) {
        col = mixColor(col, [250, 250, 248], thermoCov);
        const mercuryD = sdRoundRect(tx + 0.055 * S, ty, 0.055 * S, 0.006 * S, 0.006 * S);
        col = mixColor(col, PRINT_RED, smoothstep(aa, -aa, mercuryD) * thermoCov);
      }

      // Stethoskop: Bruststück, Schlauch in drei Bögen, zwei Ohrbügel.
      const hoseD =
        Math.min(
          sdSegment(x, y, chestCx, chestCy - 0.05 * S, chestCx - 0.03 * WIDTH, 0.46 * S),
          sdSegment(x, y, chestCx - 0.03 * WIDTH, 0.46 * S, chestCx - 0.005 * WIDTH, 0.3 * S),
          sdSegment(x, y, chestCx - 0.005 * WIDTH, 0.3 * S, chestCx - 0.07 * WIDTH, 0.2 * S),
          sdSegment(x, y, chestCx - 0.005 * WIDTH, 0.3 * S, chestCx + 0.06 * WIDTH, 0.2 * S),
        ) - 0.011 * S;
      col = mixColor(col, [0, 0, 0], smoothstep(0.045 * S, -0.005 * S, hoseD - 0.008 * S) * 0.14);
      col = mixColor(col, tube, smoothstep(aa, -aa, hoseD));

      for (const [ex, ey] of [[-0.07, 0.2], [0.06, 0.2]]) {
        const tipD = Math.hypot(x - (chestCx + ex * WIDTH), y - ey * S) - 0.019 * S;
        col = mixColor(col, steel, smoothstep(aa, -aa, tipD));
      }

      const chestD = Math.hypot(x - chestCx, y - chestCy) - 0.075 * S;
      col = mixColor(col, [0, 0, 0], smoothstep(0.07 * S, -0.015 * S, chestD - 0.012 * S) * 0.18);
      const chestCov = smoothstep(aa, -aa, chestD);
      if (chestCov > 0) {
        const lightT = clamp((x - (chestCx - 0.075 * S)) / (0.15 * S), 0, 1);
        col = mixColor(col, mixColor([196, 204, 212], [138, 148, 158], lightT), chestCov);
        const membraneD = Math.hypot(x - chestCx, y - chestCy) - 0.055 * S;
        col = mixColor(col, [232, 236, 240], smoothstep(aa, -aa, membraneD) * chestCov);
        const glossD = Math.hypot(x - (chestCx - 0.022 * S), y - (chestCy - 0.024 * S)) - 0.016 * S;
        col = mixColor(col, [255, 255, 255], smoothstep(aa, -aa, glossD) * chestCov * 0.55);
      }

      const vig = Math.hypot(nx - 0.5, (ny - 0.45) * 0.85);
      col = mixColor(col, [40, 56, 68], smoothstep(0.44, 0.92, vig) * 0.15);

      canvas.blend(i, col, 1);
    }
  }

  return canvas;
}

/** A2 „Planes de viaje“: Zug am Bahnsteig mit Anzeigetafel und Koffer. */
function renderSceneTrainPlatform(WIDTH, HEIGHT) {
  const canvas = new Canvas(WIDTH, HEIGHT);
  const S = HEIGHT;
  const aa = 1.1;

  const platformY = 0.78 * S;
  const railY = 0.9 * S;
  const trainTop = 0.28 * S;
  const trainCx = 0.56 * WIDTH;
  const trainHalfW = 0.4 * WIDTH;

  for (let y = 0; y < HEIGHT; y += 1) {
    for (let x = 0; x < WIDTH; x += 1) {
      const i = (y * WIDTH + x) * 3;
      const nx = x / WIDTH;
      const ny = y / HEIGHT;

      let col = paintBackdrop(nx, ny, [230, 236, 240], [203, 214, 222], 0.55, 0.18, 0.55);

      // Gleisbett unter dem Zug, Bahnsteig davor.
      col = mixColor(col, [176, 178, 180], smoothstep(railY - aa, railY + aa, y));

      // Wagen: langer Kasten mit Fensterband und Türfuge.
      const bodyD = sdRoundRect(x - trainCx, y - (trainTop + railY) / 2, trainHalfW, (railY - trainTop) / 2, 0.03 * S);
      col = mixColor(col, [0, 0, 0], smoothstep(0.1 * S, -0.02 * S, bodyD - 0.014 * S) * 0.16);
      const bodyCov = smoothstep(aa, -aa, bodyD);
      if (bodyCov > 0) {
        const lightT = clamp((y - trainTop) / (railY - trainTop), 0, 1);
        col = mixColor(col, mixColor([248, 249, 250], [206, 212, 218], lightT), bodyCov);
        // Farbband auf Höhe der Fenster.
        const stripeD = sdRoundRect(x - trainCx, y - (trainTop + 0.2 * S), trainHalfW, 0.016 * S, 0.006 * S);
        col = mixColor(col, PRINT_RED, smoothstep(aa, -aa, stripeD) * bodyCov);
        for (let w = 0; w < 9; w += 1) {
          const wx = trainCx - trainHalfW + 0.09 * S + w * 0.148 * S;
          const winD = sdRoundRect(x - wx, y - (trainTop + 0.1 * S), 0.055 * S, 0.042 * S, 0.012 * S);
          const winCov = smoothstep(aa, -aa, winD) * bodyCov;
          col = mixColor(col, [96, 122, 142], winCov);
          const glassD = sdRoundRect(x - wx, y - (trainTop + 0.088 * S), 0.045 * S, 0.018 * S, 0.008 * S);
          col = mixColor(col, [150, 176, 194], smoothstep(aa, -aa, glassD) * winCov);
        }
        // Tür rechts außen.
        const doorD = Math.abs(x - (trainCx + trainHalfW * 0.55)) - 0.004 * S;
        col = mixColor(col, [178, 186, 194], smoothstep(aa, -aa, doorD) * bodyCov * smoothstep(trainTop + 0.24 * S, trainTop + 0.26 * S, y));
      }

      // Bahnsteigkante mit gelbem Sicherheitsstreifen.
      const platD = sdRoundRect(x - 0.5 * WIDTH, y - (platformY + 0.11 * S), 0.6 * WIDTH, 0.11 * S, 0.004 * S);
      col = mixColor(col, [214, 210, 202], smoothstep(aa, -aa, platD));
      const warnD = sdRoundRect(x - 0.5 * WIDTH, y - (platformY + 0.016 * S), 0.6 * WIDTH, 0.008 * S, 0.003 * S);
      col = mixColor(col, [226, 176, 70], smoothstep(aa, -aa, warnD));

      // Anzeigetafel links, an einem Mast.
      const boardCx = 0.13 * WIDTH;
      const boardCy = 0.3 * S;
      const mastD = sdRoundRect(x - boardCx, y - (boardCy + 0.24 * S), 0.008 * S, 0.22 * S, 0.004 * S);
      col = mixColor(col, [150, 156, 162], smoothstep(aa, -aa, mastD));
      const boardD = sdRoundRect(x - boardCx, y - boardCy, 0.095 * S, 0.06 * S, 0.008 * S);
      col = mixColor(col, [0, 0, 0], smoothstep(0.06 * S, -0.01 * S, boardD - 0.01 * S) * 0.16);
      const boardCov = smoothstep(aa, -aa, boardD);
      if (boardCov > 0) {
        col = mixColor(col, PRINT_SLATE, boardCov);
        for (let line = 0; line < 3; line += 1) {
          const ly = -0.03 * S + line * 0.03 * S;
          const lineD = sdRoundRect(x - (boardCx - 0.02 * S), y - (boardCy + ly), 0.055 * S, 0.006 * S, 0.006 * S);
          col = mixColor(col, [226, 176, 70], smoothstep(aa, -aa, lineD) * boardCov);
        }
      }

      // Koffer auf dem Bahnsteig.
      const caseCx = 0.3 * WIDTH;
      const caseCy = platformY - 0.055 * S;
      const handleD = Math.min(
        sdSegment(x, y, caseCx - 0.022 * S, caseCy - 0.055 * S, caseCx - 0.022 * S, caseCy - 0.085 * S),
        sdSegment(x, y, caseCx - 0.022 * S, caseCy - 0.085 * S, caseCx + 0.022 * S, caseCy - 0.085 * S),
        sdSegment(x, y, caseCx + 0.022 * S, caseCy - 0.085 * S, caseCx + 0.022 * S, caseCy - 0.055 * S),
      ) - 0.005 * S;
      col = mixColor(col, [92, 78, 66], smoothstep(aa, -aa, handleD));
      const caseD = sdRoundRect(x - caseCx, y - caseCy, 0.05 * S, 0.055 * S, 0.008 * S);
      col = mixColor(col, [0, 0, 0], smoothstep(0.05 * S, -0.01 * S, caseD - 0.01 * S) * 0.16);
      const caseCov = smoothstep(aa, -aa, caseD);
      if (caseCov > 0) {
        col = mixColor(col, OCHRE, caseCov);
        for (const by of [-0.02, 0.02]) {
          const beltD = Math.abs(y - (caseCy + by * S)) - 0.004 * S;
          col = mixColor(col, [104, 66, 36], smoothstep(aa, -aa, beltD) * caseCov);
        }
      }

      const vig = Math.hypot(nx - 0.5, (ny - 0.45) * 0.85);
      col = mixColor(col, [44, 56, 66], smoothstep(0.44, 0.92, vig) * 0.16);

      canvas.blend(i, col, 1);
    }
  }

  return canvas;
}

/** A2 „Mi casa, mi barrio“: Wohnzimmer mit Sofa, Lampe und Fenster. */
function renderSceneLivingRoom(WIDTH, HEIGHT) {
  const canvas = new Canvas(WIDTH, HEIGHT);
  const S = HEIGHT;
  const aa = 1.1;

  const floorY = 0.74 * S;
  const sofaCx = 0.44 * WIDTH;
  const sofaCy = floorY - 0.075 * S;
  const sofaHalfW = 0.21 * WIDTH;
  const sofaColor = [122, 138, 156];

  const windowCx = 0.82 * WIDTH;
  const windowCy = 0.34 * S;

  for (let y = 0; y < HEIGHT; y += 1) {
    for (let x = 0; x < WIDTH; x += 1) {
      const i = (y * WIDTH + x) * 3;
      const nx = x / WIDTH;
      const ny = y / HEIGHT;

      // Wand oben, Boden unten.
      let col = paintBackdrop(nx, ny, [240, 234, 224], [225, 216, 203], 0.75, 0.25, 0.5);
      col = mixColor(col, [196, 174, 148], smoothstep(floorY - aa, floorY + aa, y));

      // Fenster mit Kreuzsprosse; von dort kommt das Licht.
      const winD = sdRoundRect(x - windowCx, y - windowCy, 0.1 * S, 0.13 * S, 0.008 * S);
      const winCov = smoothstep(aa, -aa, winD);
      if (winCov > 0) {
        col = mixColor(col, mixColor([214, 230, 240], [242, 235, 214], clamp((y - (windowCy - 0.13 * S)) / (0.26 * S), 0, 1)), winCov);
        const barV = Math.abs(x - windowCx) - 0.005 * S;
        const barH = Math.abs(y - windowCy) - 0.005 * S;
        col = mixColor(col, [250, 248, 244], smoothstep(aa, -aa, Math.min(barV, barH)) * winCov);
      }
      const frameD = Math.abs(sdRoundRect(x - windowCx, y - windowCy, 0.1 * S, 0.13 * S, 0.008 * S)) - 0.008 * S;
      col = mixColor(col, [246, 243, 238], smoothstep(aa, -aa, frameD));

      // Teppich als flache Ellipse auf dem Boden.
      const rugD = Math.hypot((x - 0.46 * WIDTH) * 0.42, y - (floorY + 0.11 * S)) - 0.1 * S;
      col = mixColor(col, [188, 158, 128], smoothstep(2 * aa, -2 * aa, rugD) * 0.8);

      // Sofa: Rückenlehne, Sitzfläche, zwei Armlehnen, zwei Kissen.
      const backD = sdRoundRect(x - sofaCx, y - (sofaCy - 0.05 * S), sofaHalfW, 0.055 * S, 0.018 * S);
      const seatD = sdRoundRect(x - sofaCx, y - (sofaCy + 0.035 * S), sofaHalfW, 0.04 * S, 0.014 * S);
      let armD = 1e9;
      for (const ax of [-1, 1]) {
        armD = Math.min(armD, sdRoundRect(x - (sofaCx + ax * sofaHalfW), y - sofaCy, 0.022 * S, 0.075 * S, 0.016 * S));
      }
      const sofaD = Math.min(backD, seatD, armD);
      col = mixColor(col, [0, 0, 0], smoothstep(0.09 * S, -0.015 * S, sofaD - 0.012 * S) * 0.17);
      const sofaCov = smoothstep(aa, -aa, sofaD);
      if (sofaCov > 0) {
        const lightT = clamp((y - (sofaCy - 0.11 * S)) / (0.22 * S), 0, 1);
        col = mixColor(col, mixColor(sofaColor, mixColor(sofaColor, [0, 0, 0], 0.24), lightT), sofaCov);
      }
      // Naht zwischen Lehne und Sitzfläche, sonst liest sich das Sofa als Kasten.
      const seamD = sdRoundRect(x - sofaCx, y - (sofaCy - 0.002 * S), sofaHalfW - 0.026 * S, 0.0035 * S, 0.0035 * S);
      col = mixColor(col, mixColor(sofaColor, [0, 0, 0], 0.32), smoothstep(aa, -aa, seamD));

      for (const px of [-0.09, 0.09]) {
        const pillowD = sdRoundRect(x - (sofaCx + px * WIDTH), y - (sofaCy - 0.045 * S), 0.035 * S, 0.033 * S, 0.012 * S);
        col = mixColor(col, [216, 178, 142], smoothstep(aa, -aa, pillowD));
      }
      // Beine.
      for (const lx of [-0.8, 0.8]) {
        const legD = sdRoundRect(x - (sofaCx + lx * sofaHalfW), y - (floorY + 0.008 * S), 0.008 * S, 0.018 * S, 0.004 * S);
        col = mixColor(col, [96, 74, 56], smoothstep(aa, -aa, legD));
      }

      // Stehlampe links: Fuß, Stange, Schirm.
      const lampCx = 0.14 * WIDTH;
      const baseD = sdRoundRect(x - lampCx, y - (floorY + 0.012 * S), 0.045 * S, 0.012 * S, 0.008 * S);
      const poleD = sdRoundRect(x - lampCx, y - (floorY - 0.13 * S), 0.006 * S, 0.14 * S, 0.004 * S);
      col = mixColor(col, [104, 96, 88], smoothstep(aa, -aa, Math.min(baseD, poleD)));
      // Trapez statt Dreieck: ein Lampenschirm ist oben schmal, nicht spitz.
      const shadeD = taperedBox(x, y, lampCx, floorY - 0.36 * S, floorY - 0.26 * S, 0.034 * S, 0.062 * S, 0.006 * S);
      col = mixColor(col, [0, 0, 0], smoothstep(0.06 * S, -0.01 * S, shadeD - 0.01 * S) * 0.14);
      const shadeCov = smoothstep(aa, -aa, shadeD);
      col = mixColor(col, mixColor([246, 226, 186], [222, 196, 152], clamp((y - (floorY - 0.36 * S)) / (0.1 * S), 0, 1)), shadeCov);

      const vig = Math.hypot(nx - 0.5, (ny - 0.45) * 0.85);
      col = mixColor(col, [58, 44, 34], smoothstep(0.44, 0.92, vig) * 0.17);

      canvas.blend(i, col, 1);
    }
  }

  return canvas;
}

/** A2 „Fiestas y tradiciones“: Wimpelkette und Lampions am Abendhimmel. */
function renderSceneFiestaLights(WIDTH, HEIGHT) {
  const canvas = new Canvas(WIDTH, HEIGHT);
  const S = HEIGHT;
  const aa = 1.1;

  const FLAGS = [PRINT_RED, [226, 176, 70], [108, 150, 112], [108, 138, 168], [198, 120, 70]];
  const LANTERNS = [
    { cx: 0.2 * WIDTH, cy: 0.56 * S, r: 0.055 * S, color: [232, 176, 96] },
    { cx: 0.44 * WIDTH, cy: 0.63 * S, r: 0.045 * S, color: [216, 122, 96] },
    { cx: 0.68 * WIDTH, cy: 0.58 * S, r: 0.05 * S, color: [238, 198, 118] },
    { cx: 0.88 * WIDTH, cy: 0.66 * S, r: 0.04 * S, color: [214, 140, 104] },
  ];

  /** Höhe der durchhängenden Schnur an der Stelle x. */
  const ropeY = (px, top, sag) => top + sag * Math.sin((px / WIDTH) * Math.PI);

  for (let y = 0; y < HEIGHT; y += 1) {
    for (let x = 0; x < WIDTH; x += 1) {
      const i = (y * WIDTH + x) * 3;
      const nx = x / WIDTH;
      const ny = y / HEIGHT;

      // Abendhimmel: warm am Horizont, kühl nach oben.
      let col = paintBackdrop(nx, ny, [72, 82, 118], [206, 154, 122], 0.5, 1.0, 0.7);

      // Zwei Schnüre mit Wimpeln, die zweite tiefer und kleiner.
      for (const line of [
        { top: 0.16 * S, sag: 0.1 * S, size: 0.055 * S, count: 9 },
        { top: 0.3 * S, sag: 0.08 * S, size: 0.042 * S, count: 11 },
      ]) {
        const ry = ropeY(x, line.top, line.sag);
        col = mixColor(col, [238, 232, 220], smoothstep(0.004 * S, 0, Math.abs(y - ry)) * 0.8);

        const step = WIDTH / line.count;
        const index = Math.floor(x / step);
        const anchorX = (index + 0.5) * step;
        const anchorY = ropeY(anchorX, line.top, line.sag);
        const flagD = sdTriangle(
          x,
          y,
          [anchorX - line.size * 0.5, anchorY],
          [anchorX + line.size * 0.5, anchorY],
          [anchorX, anchorY + line.size],
        );
        col = mixColor(col, FLAGS[index % FLAGS.length], smoothstep(aa, -aa, flagD) * 0.95);
      }

      // Lampions: Kugel mit Aufhängung und warmem Schein.
      for (const lamp of LANTERNS) {
        const glow = Math.hypot(x - lamp.cx, y - lamp.cy) - lamp.r;
        col = mixColor(col, mixColor(lamp.color, [255, 240, 210], 0.4), smoothstep(lamp.r * 2.2, 0, glow) * 0.22);
        // Die Schnur endet nicht in der Luft, sondern an der unteren Leine.
        const cordD = sdSegment(x, y, lamp.cx, lamp.cy - lamp.r, lamp.cx, ropeY(lamp.cx, 0.3 * S, 0.08 * S)) - 0.0025 * S;
        col = mixColor(col, [226, 220, 208], smoothstep(aa, -aa, cordD) * 0.7);
        const bodyD = Math.hypot(x - lamp.cx, (y - lamp.cy) * 1.15) - lamp.r;
        const cov = smoothstep(aa, -aa, bodyD);
        if (cov > 0) {
          col = mixColor(col, lamp.color, cov);
          // Zwei Rippen und ein Glanzpunkt geben dem Papier Form.
          for (const rx of [-0.45, 0.45]) {
            const ribD = Math.abs(x - (lamp.cx + rx * lamp.r)) - 0.0035 * S;
            col = mixColor(col, mixColor(lamp.color, [0, 0, 0], 0.18), smoothstep(aa, -aa, ribD) * cov);
          }
          const glossD = Math.hypot(x - (lamp.cx - lamp.r * 0.35), y - (lamp.cy - lamp.r * 0.4)) - lamp.r * 0.2;
          col = mixColor(col, [255, 246, 226], smoothstep(aa, -aa, glossD) * cov * 0.5);
        }
      }

      const vig = Math.hypot(nx - 0.5, (ny - 0.45) * 0.85);
      col = mixColor(col, [26, 28, 46], smoothstep(0.42, 0.94, vig) * 0.22);

      canvas.blend(i, col, 1);
    }
  }

  return canvas;
}

/** Neutrales Motiv für Einheiten ohne eigenes Bildthema: aufgeschlagenes Buch. */
function renderSceneGenericBook(WIDTH, HEIGHT) {
  const canvas = new Canvas(WIDTH, HEIGHT);
  const S = HEIGHT;
  const aa = 1.1;

  const leftPage = { cx: 0.41 * WIDTH, cy: 0.52 * S, deg: -8 };
  const rightPage = { cx: 0.59 * WIDTH, cy: 0.52 * S, deg: 8 };
  const pageHalfW = 0.21 * S;
  const pageHalfH = 0.28 * S;
  const pageR = 0.014 * S;

  for (let y = 0; y < HEIGHT; y += 1) {
    for (let x = 0; x < WIDTH; x += 1) {
      const i = (y * WIDTH + x) * 3;
      const nx = x / WIDTH;
      const ny = y / HEIGHT;

      let col = paintBackdrop(nx, ny, [242, 242, 242], [223, 223, 223], 0.5, 0.25, 0.5);

      for (const page of [leftPage, rightPage]) {
        const angle = (page.deg * Math.PI) / 180;
        const [sx, sy] = toLocal(x, y - 0.016 * S, page.cx, page.cy, angle);
        const sd = sdRoundRect(sx, sy, pageHalfW, pageHalfH, pageR);
        col = mixColor(col, [120, 120, 120], smoothstep(0.05 * S, -0.015 * S, sd) * 0.22);

        const [lx, ly] = toLocal(x, y, page.cx, page.cy, angle);
        const d = sdRoundRect(lx, ly, pageHalfW, pageHalfH, pageR);
        const cov = smoothstep(aa, -aa, d);
        if (cov <= 0) continue;
        const lightT = clamp((lx / pageHalfW) * 0.25 + (ly / pageHalfH) * 0.4 + 0.5, 0, 1);
        col = mixColor(col, mixColor([255, 255, 255], [219, 219, 219], lightT), cov);
      }

      const spine = Math.exp(-(((nx - 0.5) ** 2) / 0.001));
      col = mixColor(col, [140, 140, 140], spine * 0.3);

      const markD = Math.min(
        sdRoundRect(x - 0.61 * WIDTH, y - 0.29 * S, 0.022 * S, 0.05 * S, 0.002 * S),
        sdTriangle(x, y, [0.588 * WIDTH, 0.34 * S], [0.632 * WIDTH, 0.34 * S], [0.61 * WIDTH, 0.38 * S]),
      );
      col = mixColor(col, [0, 0, 0], smoothstep(0.02 * S, -0.005 * S, markD - 0.006 * S) * 0.15);
      col = mixColor(col, PRINT_RED, smoothstep(aa, -aa, markD));

      const vig = Math.hypot(nx - 0.5, (ny - 0.42) * 0.85);
      col = mixColor(col, [70, 70, 70], smoothstep(0.44, 0.92, vig) * 0.14);

      canvas.blend(i, col, 1);
    }
  }

  return canvas;
}

// ---------------------------------------------------------------------- Start

const COVERS = [
  // Kachel der Startseite: 16:9, rund 47 % der Bildschirmbreite bei 3x.
  { file: 'mobile/assets/covers/vocabulary.png', width: 768, height: 432, render: renderVocabulary },
  { file: 'mobile/assets/covers/notebook.png', width: 768, height: 432, render: renderNotebook },
  { file: 'mobile/assets/covers/library-shelf.png', width: 768, height: 432, render: renderLibraryShelf },
  { file: 'mobile/assets/covers/video.png', width: 768, height: 432, render: renderMedia },
  { file: 'mobile/assets/covers/ai.png', width: 768, height: 432, render: renderAi },
  // Buchdeckel im Regal: 3:4, 62 pt breit – 384 px reichen auch auf 3x-Geräten.
  { file: 'mobile/assets/covers/book-beginner.png', width: 384, height: 512, render: renderBeginnerBook },
  { file: 'mobile/assets/covers/book-intermediate.png', width: 384, height: 512, render: renderIntermediateBook },
  { file: 'mobile/assets/covers/book-advanced.png', width: 384, height: 512, render: renderAdvancedBook },
  { file: 'mobile/assets/covers/book-grammar.png', width: 384, height: 512, render: renderGrammarBook },
  // Bibliothekscover: 3:4, ganze Kachel bei ~47 % Bildschirmbreite.
  { file: 'mobile/assets/covers/library-market.png', width: 480, height: 640, render: renderLibraryMarket },
  { file: 'mobile/assets/covers/library-lighthouse.png', width: 480, height: 640, render: renderLibraryLighthouse },
  { file: 'mobile/assets/covers/library-city.png', width: 480, height: 640, render: renderLibraryCity },
  { file: 'mobile/assets/covers/library-village.png', width: 480, height: 640, render: renderLibraryVillage },
  { file: 'mobile/assets/covers/library-kitchen.png', width: 480, height: 640, render: renderLibraryKitchen },
  { file: 'mobile/assets/covers/library-phone.png', width: 480, height: 640, render: renderLibraryPhone },
  { file: 'mobile/assets/covers/library-book.png', width: 480, height: 640, render: renderLibraryGenericBook },
  // Lehrwerk-Szenen: 8:5 wie das bisherige 320x200-Raster.
  { file: 'mobile/assets/covers/scene-greeting-office.png', width: 720, height: 450, render: renderSceneGreeting },
  { file: 'mobile/assets/covers/scene-introduction.png', width: 720, height: 450, render: renderSceneIntroduction },
  { file: 'mobile/assets/covers/scene-world-map.png', width: 720, height: 450, render: renderSceneWorldMap },
  { file: 'mobile/assets/covers/scene-alphabet-numbers.png', width: 720, height: 450, render: renderSceneAlphabetNumbers },
  { file: 'mobile/assets/covers/scene-family-tree.png', width: 720, height: 450, render: renderSceneFamilyTree },
  { file: 'mobile/assets/covers/scene-belongings.png', width: 720, height: 450, render: renderSceneBelongings },
  { file: 'mobile/assets/covers/scene-portraits.png', width: 720, height: 450, render: renderScenePortraits },
  { file: 'mobile/assets/covers/scene-birthday.png', width: 720, height: 450, render: renderSceneBirthday },
  { file: 'mobile/assets/covers/scene-city-street.png', width: 720, height: 450, render: renderSceneCityStreet },
  { file: 'mobile/assets/covers/scene-city-map.png', width: 720, height: 450, render: renderSceneCityMap },
  { file: 'mobile/assets/covers/scene-signpost.png', width: 720, height: 450, render: renderSceneSignpost },
  { file: 'mobile/assets/covers/scene-clock-day.png', width: 720, height: 450, render: renderSceneClockDay },
  { file: 'mobile/assets/covers/scene-market-stall.png', width: 720, height: 450, render: renderSceneMarketStall },
  { file: 'mobile/assets/covers/scene-shopping-bags.png', width: 720, height: 450, render: renderSceneShoppingBags },
  { file: 'mobile/assets/covers/scene-restaurant-table.png', width: 720, height: 450, render: renderSceneRestaurantTable },
  { file: 'mobile/assets/covers/scene-calendar-weekend.png', width: 720, height: 450, render: renderSceneCalendarWeekend },
  { file: 'mobile/assets/covers/scene-childhood-toys.png', width: 720, height: 450, render: renderSceneChildhoodToys },
  { file: 'mobile/assets/covers/scene-doctor-visit.png', width: 720, height: 450, render: renderSceneDoctorVisit },
  { file: 'mobile/assets/covers/scene-train-platform.png', width: 720, height: 450, render: renderSceneTrainPlatform },
  { file: 'mobile/assets/covers/scene-living-room.png', width: 720, height: 450, render: renderSceneLivingRoom },
  { file: 'mobile/assets/covers/scene-fiesta-lights.png', width: 720, height: 450, render: renderSceneFiestaLights },
  { file: 'mobile/assets/covers/scene-generic-book.png', width: 720, height: 450, render: renderSceneGenericBook },
];

for (const cover of COVERS) {
  const target = resolve(ROOT, cover.file);
  const bytes = writePng(cover.render(cover.width, cover.height), target);
  const name = cover.file.split('/').pop();
  console.log(`${name.padEnd(22)} ${cover.width}x${cover.height}  ${(bytes / 1024).toFixed(1)} kB`);
}
