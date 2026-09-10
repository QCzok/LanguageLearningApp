import type { CefrLevel } from './cefr';

/**
 * Datenformat des Arbeitsbuchs.
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
 * Sprachen, in die Erklärungen im Heft übersetzt werden. Dieselben vier
 * Sprachen wie unter den lernbaren Sprachen (siehe `Language`-Tabelle),
 * abzüglich Deutsch – wer Deutsch als Muttersprache angibt, braucht keine
 * Übersetzung der deutschen Erklärungen.
 */
export const TRANSLATABLE_LANGUAGES = ['en', 'es', 'fr', 'it'] as const;
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
    translation: string;
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
  /** Wortkasten zur Auswahl; ohne ihn wird frei getippt. */
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

export interface UnitCheckResult {
  unitId: string;
  results: BlockResult[];
  scorePercent: number;
  correctBlocks: number;
  totalBlocks: number;
  xpEarned: number;
}

// -------------------------------------------------------------- Struktur

export const UNIT_SECTIONS = ['KURSBUCH', 'ARBEITSBUCH'] as const;
export type UnitSection = (typeof UNIT_SECTIONS)[number];

export const SECTION_LABELS: Record<UnitSection, { label: string; description: string }> = {
  KURSBUCH: {
    label: 'Kursbuch',
    description: 'Neue Inhalte kennenlernen: Dialoge, Wortschatz, Grammatik',
  },
  ARBEITSBUCH: {
    label: 'Arbeitsbuch',
    description: 'Üben und festigen: Aufgaben zu allem aus dem Kursbuch',
  },
};

export const UNIT_STATUSES = ['NOT_STARTED', 'IN_PROGRESS', 'COMPLETED'] as const;
export type UnitStatus = (typeof UNIT_STATUSES)[number];

export interface ChapterSummaryDto {
  id: string;
  level: CefrLevel;
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
  section: UnitSection;
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

export interface UnitDetailDto {
  id: string;
  chapterId: string;
  chapterTitle: string;
  /** Für die Kopfzeile der Buchseite. */
  chapterOrder: number;
  level: CefrLevel;
  section: UnitSection;
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
