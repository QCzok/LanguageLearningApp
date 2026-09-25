import type { CefrLevel } from './cefr';
import type { PointsAward } from './points';

/**
 * Datenformat des Lehrwerks.
 *
 * Eine Lerneinheit ist eine geordnete Liste von Blöcken – Darstellungsblöcke
 * (Text, Dialog, Wortschatz, Grammatikkasten) und Aufgabenblöcke (Lückentext,
 * Zuordnung, Auswahl, Reihenfolge, Schreibaufgabe). Das Format orientiert sich
 * an interaktiven Lerninhalten nach H5P-Art: jeder Block ist für sich
 * bearbeitbar und einzeln auswertbar.
 *
 * Lösungen stehen in optionalen Feldern. Der Server entfernt sie, bevor eine
 * Einheit an Lernende geht, und liefert sie erst als Antwort auf eine Prüfung.
 * Deshalb ist jedes `solution`-Feld optional typisiert – im Client ist es
 * schlicht nicht vorhanden.
 */
export const WORKBOOK_CONTENT_VERSION = 1;

/**
 * Sprachen, in die Erklärungen im Heft übersetzt werden – dieselben Sprachen
 * wie unter den lernbaren Sprachen (siehe `Language`-Tabelle).
 *
 * Deutsch steht hier mit, seit es neben dem Deutschkurs auch einen
 * Spanischkurs gibt: Dessen Seiten sind einsprachig spanisch, und seine
 * Lernenden sind deutschsprachig – genau der Fall, für den die aufklappbare
 * Übersetzung gedacht ist. Dass eine Sprache hier steht, heißt nicht, dass
 * jeder Block sie mitbringt: Übersetzt wird immer nur in die Sprachen, die
 * nicht die Zielsprache des Kurses sind, und ein fehlender Eintrag blendet
 * den Umschalt-Link schlicht aus.
 */
export const TRANSLATABLE_LANGUAGES = ['de', 'en', 'es', 'fr', 'it'] as const;
export type TranslatableLanguage = (typeof TRANSLATABLE_LANGUAGES)[number];

export const BLOCK_TYPES = [
  'HEADING',
  'TEXT',
  'INFO',
  'VOCAB_LIST',
  'DIALOGUE',
  'AUDIO',
  'IMAGE',
  'CLOZE',
  'CHOICE',
  'MATCHING',
  'ORDERING',
  'WRITING',
] as const;
export type BlockType = (typeof BLOCK_TYPES)[number];

/** Aufgabenblöcke werden bewertet, Darstellungsblöcke nicht. */
export const EXERCISE_BLOCK_TYPES = ['CLOZE', 'CHOICE', 'MATCHING', 'ORDERING', 'WRITING'] as const;
export type ExerciseBlockType = (typeof EXERCISE_BLOCK_TYPES)[number];

export function isExerciseBlock(block: WorkbookBlock): block is ExerciseBlock {
  return (EXERCISE_BLOCK_TYPES as readonly string[]).includes(block.type);
}

// ------------------------------------------------------ Darstellungsblöcke

export interface HeadingBlock {
  id: string;
  type: 'HEADING';
  text: string;
  level: 1 | 2;
}

export interface TextBlock {
  id: string;
  type: 'TEXT';
  text: string;
  /** Übersetzung in die Muttersprache, in der App aufklappbar. Nur auf A1, siehe `InfoBlock.translations`. */
  translations?: Partial<Record<TranslatableLanguage, string>>;
}

export interface InfoBlock {
  id: string;
  type: 'INFO';
  variant: 'GRAMMAR' | 'TIP' | 'CULTURE' | 'IMPORTANT';
  title: string;
  text: string;
  /** Optionale Tabelle, z. B. eine Konjugation. */
  table?: { headers: string[]; rows: string[][] };
  /**
   * Übersetzung von Titel und Text in die Muttersprache – auf A1 kann man
   * eine Grammatikerklärung noch nicht auf Deutsch verstehen. Die Tabelle
   * bleibt unübersetzt: Sie enthält das zu lernende Deutsch selbst.
   */
  translations?: Partial<Record<TranslatableLanguage, { title: string; text: string }>>;
}

export interface VocabListBlock {
  id: string;
  type: 'VOCAB_LIST';
  title?: string;
  items: Array<{
    term: string;
    /**
     * Übersetzung des Begriffs, je nach Sprache. Angezeigt wird der Eintrag
     * für die Muttersprache der Lernperson; fehlt der, dient `en` als
     * Rückfalloption, da nicht jeder Begriff in allen fünf Sprachen vorliegt.
     */
    translations: Partial<Record<TranslatableLanguage, string>>;
    /** Artikel bei Substantiven – im Deutschen lernentscheidend. */
    article?: 'der' | 'die' | 'das';
    plural?: string;
    example?: string;
    audioUrl?: string;
  }>;
}

export interface DialogueBlock {
  id: string;
  type: 'DIALOGUE';
  title?: string;
  audioUrl?: string;
  lines: Array<{ speaker: string; text: string; translation?: string }>;
}

export interface AudioBlock {
  id: string;
  type: 'AUDIO';
  title: string;
  audioUrl: string;
  durationSec?: number;
  transcript?: string;
}

export interface ImageBlock {
  id: string;
  type: 'IMAGE';
  url: string;
  caption?: string;
  /** Pflicht, damit Inhalte auch mit Screenreader nutzbar bleiben. */
  alt: string;
}

// ---------------------------------------------------------- Aufgabenblöcke

/** Ein Segment eines Lückentexts: fester Text oder eine auszufüllende Lücke. */
export type ClozeSegment =
  | { kind: 'TEXT'; text: string }
  | {
      kind: 'GAP';
      gapId: string;
      /** Alle akzeptierten Schreibweisen. Fehlt im Client. */
      solution?: string[];
      hint?: string;
      /** Breite in Zeichen – nur Darstellung. */
      width?: number;
    };

export interface ClozeBlock {
  id: string;
  type: 'CLOZE';
  instruction: string;
  segments: ClozeSegment[];
  /**
   * Die Wortkarten, mit denen die Lücken gefüllt werden. Ein Wort darf in
   * mehrere Lücken passen, und der Kasten darf Ablenker enthalten.
   *
   * Im Inhalt einer Einheit ist das Feld freiwillig – fehlt es, baut der
   * Server beim Ausliefern einen Kasten aus den Lösungen (siehe
   * `stripSolutions`), denn in der App werden Lücken gezogen, nicht getippt.
   */
  wordBank?: string[];
  caseSensitive?: boolean;
}

export interface ChoiceBlock {
  id: string;
  type: 'CHOICE';
  instruction: string;
  question?: string;
  options: Array<{ id: string; text: string }>;
  /** true = Mehrfachauswahl. */
  multiple: boolean;
  solution?: string[];
  explanation?: string;
  /** Übersetzung der Erklärung in die Muttersprache, siehe `InfoBlock.translations`. */
  explanationTranslations?: Partial<Record<TranslatableLanguage, string>>;
}

export interface MatchingBlock {
  id: string;
  type: 'MATCHING';
  instruction: string;
  left: Array<{ id: string; text: string }>;
  right: Array<{ id: string; text: string }>;
  solution?: Array<{ leftId: string; rightId: string }>;
}

export interface OrderingBlock {
  id: string;
  type: 'ORDERING';
  instruction: string;
  items: Array<{ id: string; text: string }>;
  /** Item-IDs in der richtigen Reihenfolge. */
  solution?: string[];
}

export interface WritingBlock {
  id: string;
  type: 'WRITING';
  instruction: string;
  prompt?: string;
  minWords?: number;
  maxWords?: number;
  /** Premium: Die KI korrigiert den Text und erklärt die Fehler. */
  aiFeedback: boolean;
  /** Musterlösung – wird erst nach der Abgabe ausgeliefert. */
  sampleAnswer?: string;
}

export type ExerciseBlock =
  | ClozeBlock
  | ChoiceBlock
  | MatchingBlock
  | OrderingBlock
  | WritingBlock;

export type WorkbookBlock =
  | HeadingBlock
  | TextBlock
  | InfoBlock
  | VocabListBlock
  | DialogueBlock
  | AudioBlock
  | ImageBlock
  | ExerciseBlock;

export interface UnitContent {
  version: number;
  blocks: WorkbookBlock[];
}

// ------------------------------------------------------------- Antworten

export type BlockAnswer =
  | { type: 'CLOZE'; gaps: Record<string, string> }
  | { type: 'CHOICE'; selected: string[] }
  | { type: 'MATCHING'; pairs: Array<{ leftId: string; rightId: string }> }
  | { type: 'ORDERING'; order: string[] }
  | { type: 'WRITING'; text: string };

/** Alle Antworten einer Einheit, nach Block-ID. */
export type UnitAnswers = Record<string, BlockAnswer>;

export interface BlockResult {
  blockId: string;
  correct: boolean;
  scorePercent: number;
  /** Feingranulare Rückmeldung: pro Lücke, pro Paar, pro Position. */
  details?: Record<string, boolean>;
  /** Die Lösung, erst nach dem Prüfen mitgeliefert. */
  solution?: unknown;
  explanation?: string;
  explanationTranslations?: Partial<Record<TranslatableLanguage, string>>;
}

export interface UnitCheckResult extends PointsAward {
  unitId: string;
  results: BlockResult[];
  scorePercent: number;
  correctBlocks: number;
  totalBlocks: number;
}

// -------------------------------------------------------------- Struktur

/**
 * Die Bücher des Lehrwerks.
 *
 * Vorher war das Heft nach den sechs GER-Stufen sortiert und jede Stufe noch
 * einmal in Kursbuch (neue Inhalte) und Arbeitsbuch (Übungen dazu) geteilt.
 * Wer eine Seite aufschlagen wollte, entschied damit dreimal, bevor er las:
 * Niveau, Buchteil, Kapitel – und musste danach zwischen den beiden Teilen
 * hin- und herspringen, weil Erklärung und passende Aufgabe in verschiedenen
 * Heften standen.
 *
 * Jetzt gibt es vier Bücher: drei Kursbücher entlang des Könnens und ein
 * Grammatikbuch quer dazu. Ein Buch enthält durchnummerierte Kapitel, ein
 * Kapitel durchnummerierte Seiten, und auf einer Seite folgt die Übung direkt
 * auf die Erklärung, zu der sie gehört.
 */
export const WORKBOOK_BOOKS = ['BEGINNER', 'INTERMEDIATE', 'ADVANCED', 'GRAMMAR'] as const;
export type WorkbookBook = (typeof WORKBOOK_BOOKS)[number];

export const BOOK_LABELS: Record<
  WorkbookBook,
  { label: string; subtitle: string; description: string; levels: CefrLevel[] }
> = {
  BEGINNER: {
    label: 'Beginner',
    subtitle: 'Erste Schritte bis Alltag',
    description:
      'Vom ersten Gruß bis zum Gespräch über Arbeit, Reisen und Gesundheit. Jede Seite führt etwas Neues ein und lässt es sofort üben.',
    levels: ['A1', 'A2'],
  },
  INTERMEDIATE: {
    label: 'Intermediate',
    subtitle: 'Selbstständig und sicher',
    description:
      'Zusammenhängend erzählen, begründen und diskutieren – über Bildung, Arbeitswelt, Kultur und Gesellschaft.',
    levels: ['B1', 'B2'],
  },
  ADVANCED: {
    label: 'Advanced',
    subtitle: 'Differenziert und präzise',
    description:
      'Anspruchsvolle Texte verstehen, Standpunkte ausarbeiten, Stil und Register bewusst wählen.',
    levels: ['C1', 'C2'],
  },
  GRAMMAR: {
    label: 'Grammatik',
    subtitle: 'Regeln zum Nachschlagen und Üben',
    description:
      'Ein Thema pro Kapitel, von den Artikeln bis zum Konjunktiv. Zu jeder Regel stehen die Aufgaben direkt daneben.',
    levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
  },
};

/** Das Kursbuch, in dem eine GER-Stufe liegt. Das Grammatikbuch steht quer dazu. */
export function bookForLevel(level: CefrLevel): WorkbookBook {
  if (level === 'A1' || level === 'A2') return 'BEGINNER';
  if (level === 'B1' || level === 'B2') return 'INTERMEDIATE';
  return 'ADVANCED';
}

/**
 * Die Bücher, die auf dem Regal eines Niveaus liegen.
 *
 * Von den drei Kursbüchern ist immer nur eines offen – das, in dem die eigene
 * Stufe liegt (A1/A2 → Beginner). Die höheren Bände erscheinen erst, wenn das
 * Profil-Niveau dort ankommt; die niedrigeren sind durchgearbeitet. Das
 * Grammatikbuch bleibt immer dabei: Es ist kein Schritt auf der Leiter,
 * sondern das Nachschlagewerk quer dazu, und wer auf B1 die Artikel
 * nachschlagen will, soll das können.
 */
export function booksForLevel(level: CefrLevel): WorkbookBook[] {
  return [bookForLevel(level), 'GRAMMAR'];
}

export const UNIT_STATUSES = ['NOT_STARTED', 'IN_PROGRESS', 'COMPLETED'] as const;
export type UnitStatus = (typeof UNIT_STATUSES)[number];

/** Ein Buch im Regal – so viel, wie die Übersicht über ein Buch wissen muss. */
export interface BookSummaryDto {
  book: WorkbookBook;
  chapterCount: number;
  publishedChapterCount: number;
  completedUnits: number;
  totalUnits: number;
  percent: number;
  /** Die Seite, auf der es weitergeht – fehlt, solange das Buch leer ist. */
  resume?: {
    unitId: string;
    unitTitle: string;
    chapterOrder: number;
    chapterTitle: string;
    /** Noch keine Seite bearbeitet: Das Buch wird begonnen, nicht fortgesetzt. */
    isStart: boolean;
  };
}

export interface ChapterSummaryDto {
  id: string;
  book: WorkbookBook;
  /** Die GER-Stufe bleibt als Angabe erhalten, ordnet aber nicht mehr die Navigation. */
  level: CefrLevel;
  /** Fortlaufend innerhalb des Buchs, nicht mehr innerhalb der Stufe. */
  order: number;
  title: string;
  subtitle: string;
  coverEmoji: string;
  /** Kann-Beschreibungen im Sinne des GER. */
  goals: string[];
  estimatedMinutes: number;
  unitCount: number;
  isPublished: boolean;
  progress?: {
    completedUnits: number;
    totalUnits: number;
    percent: number;
    scorePercent: number | null;
  };
}

export interface UnitSummaryDto {
  id: string;
  order: number;
  title: string;
  subtitle: string | null;
  estimatedMinutes: number;
  exerciseCount: number;
  status: UnitStatus;
  scorePercent: number | null;
}

export interface ChapterDetailDto extends ChapterSummaryDto {
  description: string;
  units: UnitSummaryDto[];
}

/**
 * Das Inhaltsverzeichnis eines Buchs: alle Kapitel mit allen Seiten.
 *
 * Bewusst in einer Antwort und nicht kapitelweise nachgeladen – ein
 * Inhaltsverzeichnis, das sich erst beim Aufklappen füllt, ist keines. Die
 * Seiten kommen dabei ohne Inhalt, nur als Zeilen (`UnitSummaryDto`).
 */
export interface BookDetailDto {
  book: WorkbookBook;
  chapters: ChapterDetailDto[];
}

export interface UnitDetailDto {
  id: string;
  chapterId: string;
  chapterTitle: string;
  /** Für die Kopfzeile der Buchseite. */
  chapterOrder: number;
  book: WorkbookBook;
  level: CefrLevel;
  order: number;
  title: string;
  subtitle: string | null;
  estimatedMinutes: number;
  content: UnitContent;
  status: UnitStatus;
  /** Zwischenstand des Nutzers – Antworten überleben das Verlassen der Einheit. */
  answers: UnitAnswers;
  /** Freihand-Notizen über den Blöcken (NotebookPageContent). */
  annotations: unknown | null;
  scorePercent: number | null;
}

// -------------------------------------------------------------- Auswertung

/**
 * Normalisiert eine Lernendenantwort für den Vergleich.
 *
 * Bewusst nachsichtig: Groß-/Kleinschreibung, doppelte Leerzeichen und
 * Satzzeichen am Rand sollen keine Aufgabe scheitern lassen. Bei
 * `caseSensitive` bleibt die Schreibung erhalten – im Deutschen relevant,
 * weil Substantive großgeschrieben werden.
 */
export function normalizeAnswer(value: string, caseSensitive = false): string {
  const trimmed = value
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/^[.,!?;:]+|[.,!?;:]+$/g, '');
  return caseSensitive ? trimmed : trimmed.toLowerCase();
}

/** Zählt die bewertbaren Blöcke einer Einheit. */
export function countExercises(content: UnitContent): number {
  return content.blocks.filter(isExerciseBlock).length;
}
