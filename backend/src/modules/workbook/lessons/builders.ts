import type {
  ChoiceBlock,
  ClozeBlock,
  ClozeSegment,
  DialogueBlock,
  InfoBlock,
  MatchingBlock,
  OrderingBlock,
  StudyExerciseBlock,
  StudyLesson,
  StudyLessonKind,
  StudyTheoryBlock,
  TextBlock,
  TranslatableLanguage,
  VocabListBlock,
  WorkbookBook,
} from '@lingua/shared';

/**
 * Kurzschreibweise für die Lektionen.
 *
 * 400 Lektionen als rohe Blöcke mit IDs, Segmentlisten und Lösungsfeldern
 * wären vor allem Klammern. Die Bausteine hier nehmen das Wesentliche – Text,
 * Optionen, Paare – und bauen daraus die Blöcke, die auch das Buch verwendet.
 * IDs vergibt `lesson()`: `t1`, `t2` … für den Lernteil, `e1`, `e2` … für die
 * Aufgaben. Der Fortschritt hängt an (Lektion, Aufgabe), deshalb Aufgaben
 * nachträglich nur hinten anfügen.
 */

type Draft<T> = Omit<T, 'id'>;
type TheoryDraft =
  Draft<InfoBlock> | Draft<TextBlock> | Draft<VocabListBlock> | Draft<DialogueBlock>;
type ExerciseDraft =
  Draft<ChoiceBlock> | Draft<ClozeBlock> | Draft<MatchingBlock> | Draft<OrderingBlock>;

export const BEGINNER: WorkbookBook = 'BEGINNER';
export const INTERMEDIATE: WorkbookBook = 'INTERMEDIATE';
export const ADVANCED: WorkbookBook = 'ADVANCED';
export const GRAMMAR: WorkbookBook = 'GRAMMAR';

export interface LessonInput {
  kind: StudyLessonKind;
  title: string;
  /** Buch, Kapitel, Seite. */
  ref: [WorkbookBook, number, number];
  learn: TheoryDraft[];
  test: ExerciseDraft[];
}

/** Baut die Lektionen eines Niveaus und nummeriert sie: `de-a1-01` … */
export function lessons(prefix: string, inputs: LessonInput[]): StudyLesson[] {
  return inputs.map((input, index) => {
    const id = `${prefix}-${String(index + 1).padStart(2, '0')}`;
    return {
      id,
      kind: input.kind,
      title: input.title,
      bookRef: { book: input.ref[0], chapter: input.ref[1], unit: input.ref[2] },
      theory: input.learn.map(
        (block, i) => ({ ...block, id: `${id}-t${i + 1}` }) as StudyTheoryBlock,
      ),
      exercises: input.test.map((block, i) => finishExercise(block, `${id}-e${i + 1}`)),
    };
  });
}

/** Mischungen hängen an der endgültigen ID – erst hier steht sie fest. */
function finishExercise(block: ExerciseDraft, id: string): StudyExerciseBlock {
  switch (block.type) {
    case 'CHOICE':
      return { ...block, id, options: shuffle(block.options, id) };
    case 'MATCHING':
      return { ...block, id, right: shuffle(block.right, id) };
    case 'CLOZE':
      return { ...block, id, wordBank: block.wordBank && shuffle(block.wordBank, id) };
    case 'ORDERING':
      return { ...block, id };
  }
}

// ------------------------------------------------------------- Lernteil

type Table = { headers: string[]; rows: string[][] };

export const grammar = (title: string, text: string, table?: Table): Draft<InfoBlock> => ({
  type: 'INFO',
  variant: 'GRAMMAR',
  title,
  text,
  table,
});

export const tip = (title: string, text: string, table?: Table): Draft<InfoBlock> => ({
  type: 'INFO',
  variant: 'TIP',
  title,
  text,
  table,
});

export const culture = (title: string, text: string, table?: Table): Draft<InfoBlock> => ({
  type: 'INFO',
  variant: 'CULTURE',
  title,
  text,
  table,
});

export const text = (value: string): Draft<TextBlock> => ({ type: 'TEXT', text: value });

/** Zeilen als `Sprecher: Text`. */
export const dialogue = (title: string, lines: string[]): Draft<DialogueBlock> => ({
  type: 'DIALOGUE',
  title,
  lines: lines.map((line) => {
    const at = line.indexOf(': ');
    return { speaker: line.slice(0, at), text: line.slice(at + 2) };
  }),
});

/**
 * Wortschatz: `[Begriff, Übersetzung, Beispiel?]`. Die Übersetzung steht in
 * `gloss` – Englisch im Deutschkurs (Rückfall für alle Muttersprachen),
 * Deutsch im Spanischkurs. Den Rest übernimmt die KI-Übersetzung der Lektion.
 * Deutsche Artikel am Wortanfang werden als Artikel erkannt und farbig gesetzt.
 */
export function vocabBuilder(gloss: TranslatableLanguage) {
  return (title: string, items: Array<[string, string, string?]>): Draft<VocabListBlock> => ({
    type: 'VOCAB_LIST',
    title,
    items: items.map(([term, translation, example]) => {
      const match = gloss === 'en' ? /^(der|die|das) (.+)$/.exec(term) : null;
      return {
        term: match ? match[2] : term,
        article: match ? (match[1] as 'der' | 'die' | 'das') : undefined,
        translations: { [gloss]: translation },
        example,
      };
    }),
  });
}

// ------------------------------------------------------------- Aufgaben

/** Einfachauswahl – die richtige Option beginnt mit `*`. Gemischt wird automatisch. */
export function choice(
  instruction: string,
  question: string,
  options: string[],
  explanation?: string,
): Draft<ChoiceBlock> {
  const solution: string[] = [];
  const built = options.map((option, index) => {
    const id = `o${index + 1}`;
    if (option.startsWith('*')) solution.push(id);
    return { id, text: option.replace(/^\*/, '') };
  });
  if (solution.length !== 1) {
    throw new Error(`Auswahl „${question}“: genau eine Option braucht ein *.`);
  }
  return {
    type: 'CHOICE',
    instruction,
    question,
    options: built,
    multiple: false,
    solution,
    explanation,
  };
}

/**
 * Lückentext: Lücken in eckigen Klammern, weitere akzeptierte Schreibweisen
 * mit `|` getrennt – `Ich [heiße] Anna.` Der Wortkasten besteht aus den
 * Lösungen und den Ablenkern in `distractors`.
 */
export function cloze(
  instruction: string,
  source: string,
  distractors: string[] = [],
): Draft<ClozeBlock> {
  const segments: ClozeSegment[] = [];
  const words: string[] = [];
  const pattern = /\[([^\]]+)\]/g;
  let last = 0;
  let gap = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(source))) {
    if (match.index > last) segments.push({ kind: 'TEXT', text: source.slice(last, match.index) });
    const solution = match[1].split('|').map((word) => word.trim());
    gap += 1;
    segments.push({ kind: 'GAP', gapId: `g${gap}`, solution });
    if (!words.includes(solution[0])) words.push(solution[0]);
    last = match.index + match[0].length;
  }
  if (last < source.length) segments.push({ kind: 'TEXT', text: source.slice(last) });
  if (gap === 0) throw new Error(`Lückentext ohne Lücke: „${source}“`);

  const wordBank = [...words, ...distractors.filter((word) => !words.includes(word))];
  return { type: 'CLOZE', instruction, segments, wordBank };
}

/** Zuordnung: Paare `[links, rechts]`, rechts wird gemischt. */
export function match(instruction: string, pairs: Array<[string, string]>): Draft<MatchingBlock> {
  return {
    type: 'MATCHING',
    instruction,
    left: pairs.map(([left], index) => ({ id: `l${index + 1}`, text: left })),
    right: pairs.map(([, right], index) => ({ id: `r${index + 1}`, text: right })),
    solution: pairs.map((_, index) => ({ leftId: `l${index + 1}`, rightId: `r${index + 1}` })),
  };
}

/** Reihenfolge: Teile in der richtigen Reihenfolge; gemischt wird beim Ausliefern. */
export function order(instruction: string, items: string[]): Draft<OrderingBlock> {
  return {
    type: 'ORDERING',
    instruction,
    items: items.map((item, index) => ({ id: `i${index + 1}`, text: item })),
    solution: items.map((_, index) => `i${index + 1}`),
  };
}

// ---------------------------------------------------------------- Helfer

/** Stabil gemischt anhand eines Schlüssels – dieselbe Lektion sieht immer gleich aus. */
function shuffle<T>(items: T[], seed: string): T[] {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    hash = (hash * 1103515245 + 12345) >>> 0;
    const j = hash % (i + 1);
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
