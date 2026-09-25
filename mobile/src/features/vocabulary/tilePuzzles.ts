import { normalizeAnswer } from './answerCheck';
import { shuffled } from './PairsBoard';

/**
 * Die Bausteine der beiden Legeübungen: „Satz ordnen“ (fehlende Wörter in
 * die Lücken eines Beispielsatzes legen) und „Wort bauen“ (den Begriff aus
 * Silben bzw. Buchstaben zusammensetzen). Hier steht nur die Logik – welche
 * Wörter zur Lücke werden, wie ein Wort in Silben zerfällt –, die Karten
 * dazu in `TileCards.tsx`.
 */

/** Ein Plättchen zum Legen. `id` unterscheidet gleichlautende Plättchen. */
export interface Tile {
  id: number;
  text: string;
  /** Letztes Stück eines Wortes – danach folgt beim Anzeigen ein Leerzeichen. */
  wordEnd?: boolean;
}

// ------------------------------------------------------------ Satz ordnen

export type SentencePart = { kind: 'text'; text: string } | { kind: 'gap'; index: number; answer: string };

export interface SentencePuzzle {
  parts: SentencePart[];
  /** Die Lösungen der Lücken, in Satzreihenfolge. */
  answers: string[];
  tiles: Tile[];
}

/** Satzzeichen am Wortrand bleiben stehen, nur das Wort selbst wird zur Lücke. */
const EDGE_PUNCTUATION = /^([¿¡"„“«(']*)(.*?)([.,!?;:…"“”»)']*)$/;
const LETTER = /\p{L}/u;

/** So viele Lücken bekommt ein Satz – „ungefähr drei“, bei kurzen Sätzen weniger. */
function gapCount(words: number): number {
  if (words >= 6) return 3;
  if (words >= 4) return 2;
  return 1;
}

/** Passt ein Wort des Satzes zum geübten Begriff? Gebeugte Formen zählen über den Wortanfang. */
function matchesTerm(word: string, termWords: string[]): boolean {
  const plain = word.toLowerCase();
  return termWords.some(
    (termWord) => plain === termWord || (termWord.length >= 4 && plain.startsWith(termWord.slice(0, 4))),
  );
}

/**
 * Macht aus einem Beispielsatz die Lückenübung. Das geübte Wort wird immer
 * zur Lücke (sofern es im Satz steht), die übrigen Lücken fallen auf die
 * längsten Wörter – kurze Füllwörter wie „a“ oder „die“ wären zu beliebig.
 * `null`, wenn sich keine Lücke findet.
 */
export function buildSentencePuzzle(sentence: string, term: string): SentencePuzzle | null {
  const tokens = sentence.trim().split(/\s+/).filter(Boolean);
  const split = tokens.map((token) => {
    const [, before = '', core = '', after = ''] = EDGE_PUNCTUATION.exec(token) ?? [];
    return { before, core, after };
  });

  const candidates = split
    .map((token, index) => ({ index, core: token.core }))
    .filter(({ core }) => core.length >= 2 && LETTER.test(core));
  if (candidates.length === 0) return null;

  const termWords = normalizeAnswer(term.split(',')[0] ?? term)
    .split(' ')
    .filter((word) => word.length >= 2);
  const count = Math.min(gapCount(tokens.length), candidates.length);

  const chosen = new Set<number>();
  const target = candidates.find(({ core }) => matchesTerm(core, termWords));
  if (target) chosen.add(target.index);
  // Unter den längeren Wörtern zufällig – so sieht derselbe Satz beim
  // nächsten Mal etwas anders aus.
  const rest = shuffled(candidates.filter(({ index }) => !chosen.has(index))).sort(
    (a, b) => Math.min(b.core.length, 6) - Math.min(a.core.length, 6),
  );
  for (const { index } of rest) {
    if (chosen.size >= count) break;
    chosen.add(index);
  }

  const parts: SentencePart[] = [];
  const answers: string[] = [];
  let text = '';
  const flush = () => {
    if (text) parts.push({ kind: 'text', text });
    text = '';
  };
  split.forEach((token, index) => {
    const separator = index > 0 ? ' ' : '';
    if (!chosen.has(index)) {
      text += separator + tokens[index];
      return;
    }
    text += separator + token.before;
    flush();
    parts.push({ kind: 'gap', index: answers.length, answer: token.core });
    answers.push(token.core);
    text = token.after;
  });
  flush();

  return { parts, answers, tiles: shuffledTiles(answers.map((answer, id) => ({ id, text: answer }))) };
}

// -------------------------------------------------------------- Wort bauen

export interface WordPuzzle {
  /** Die Lösung, wie sie gelegt werden muss (ohne Klammerzusätze, nur die erste Bedeutung). */
  solution: string;
  tiles: Tile[];
}

const VOWELS = 'aeiouyäöüáéíóúàèìòùâêîôûœæ';
/** Buchstabenfolgen, die nicht getrennt werden – sie klingen wie ein Laut. */
const CLUSTERS = ['sch', 'ch', 'ck', 'ph', 'th', 'sh', 'll', 'rr'];

function isVowel(char: string): boolean {
  return VOWELS.includes(char.toLowerCase());
}

/**
 * Trennt ein Wort grob in Silben: zwischen zwei Vokalgruppen geht der letzte
 * Konsonant (bzw. ein untrennbarer Laut wie „sch“) zur nächsten Silbe –
 * „Ta-sche“, „ven-ta-na“, „win-dow“. Keine Silbentrennung nach Wörterbuch,
 * aber für eine Legeübung klingt jedes Stück wie ein Teil des Wortes.
 */
export function syllables(word: string): string[] {
  const chars = [...word];
  const pieces: string[] = [];
  let start = 0;
  let i = 0;

  // Bis zur ersten Vokalgruppe gehört alles zur ersten Silbe.
  while (i < chars.length && !isVowel(chars[i])) i++;
  while (i < chars.length) {
    while (i < chars.length && isVowel(chars[i])) i++;
    const clusterStart = i;
    while (i < chars.length && !isVowel(chars[i])) i++;
    if (i >= chars.length) break; // Kein Vokal mehr – der Rest bleibt an der Silbe.

    const cluster = chars.slice(clusterStart, i).join('').toLowerCase();
    // „sch“ beginnt die nächste Silbe auch mitten im Cluster: „Kühl-schrank“.
    const sch = cluster.indexOf('sch');
    const joined = CLUSTERS.find((sound) => cluster.endsWith(sound));
    const take = sch >= 0 ? cluster.length - sch : joined ? joined.length : Math.min(cluster.length, 1);

    const cut = i - take;
    if (cut > start) {
      pieces.push(chars.slice(start, cut).join(''));
      start = cut;
    }
  }
  pieces.push(chars.slice(start).join(''));
  return pieces.filter(Boolean);
}

/** Teilt ein Stück in Anlaut und Rest („Str|umpf“), ohne Anlaut den ersten Buchstaben ab. */
function splitPiece(piece: string): string[] {
  const chars = [...piece];
  const firstVowel = chars.findIndex(isVowel);
  const cut = firstVowel > 0 ? firstVowel : 1;
  return [chars.slice(0, cut).join(''), chars.slice(cut).join('')];
}

/** Unter so vielen Plättchen wäre es kein Rätsel. */
const MIN_TILES = 4;

/**
 * Zerlegt den Begriff in Plättchen: Silben, und solange das zu wenige sind,
 * wird das längste Stück weiter geteilt – so entsteht die Mischung aus
 * Silben und Buchstaben. Artikel und „to“ bleiben dabei: Das Genus gehört
 * zum Wort. `null`, wenn es nichts zu legen gibt.
 */
export function buildWordPuzzle(term: string): WordPuzzle | null {
  const solution = (term.split(',')[0] ?? term).replace(/\([^)]*\)/g, ' ').replace(/\s+/g, ' ').trim();
  const words = solution.split(' ').filter(Boolean);
  if (words.length === 0) return null;

  const pieces = words.map(syllables);
  for (;;) {
    const total = pieces.reduce((sum, list) => sum + list.length, 0);
    if (total >= MIN_TILES) break;
    let longest: { word: number; index: number; length: number } | null = null;
    pieces.forEach((list, word) =>
      list.forEach((piece, index) => {
        const length = [...piece].length;
        if (length >= 2 && (!longest || length > longest.length)) longest = { word, index, length };
      }),
    );
    if (!longest) break;
    const { word, index } = longest as { word: number; index: number };
    pieces[word].splice(index, 1, ...splitPiece(pieces[word][index]));
  }

  const tiles: Tile[] = [];
  pieces.forEach((list) =>
    list.forEach((text, index) => tiles.push({ id: tiles.length, text, wordEnd: index === list.length - 1 })),
  );
  if (tiles.length < 2) return null;
  return { solution, tiles: shuffledTiles(tiles) };
}

/** Stimmt das Gelegte? Leerzeichen zählen nicht – die Buchstabenfolge entscheidet. */
export function isWordSolved(placed: Tile[], solution: string): boolean {
  return placed.map((tile) => tile.text).join('') === solution.replace(/ /g, '');
}

/** Gemischt, aber nie zufällig schon in der richtigen Reihenfolge. */
function shuffledTiles(tiles: Tile[]): Tile[] {
  const original = tiles.map((tile) => tile.text).join('|');
  if (new Set(tiles.map((tile) => tile.text)).size < 2) return tiles;
  let result = shuffled(tiles);
  for (let attempt = 0; attempt < 10 && result.map((tile) => tile.text).join('|') === original; attempt++) {
    result = shuffled(tiles);
  }
  return result;
}
