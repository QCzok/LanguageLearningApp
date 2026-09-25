import type { CefrLevel } from './cefr';
import { POINTS, pointsForImprovement } from './points';
import type { PointsAward } from './points';
import type {
  BlockResult,
  DialogueBlock,
  ExerciseBlock,
  InfoBlock,
  TextBlock,
  VocabListBlock,
  WorkbookBook,
} from './workbook';

/**
 * Lektionen – das Lehrwerk in kleinen Schritten.
 *
 * Vorher wurden die Sitzungen zur Laufzeit aus den Buchseiten geschnitten.
 * Das ergab Themen, die mal aus einem Satz Einleitung, mal aus drei
 * Erklärkästen bestanden, und Aufgaben, die sich auf einen Dialog zwei Karten
 * vorher bezogen. Jetzt gibt es je Niveau 50 eigens geschriebene Lektionen:
 *
 *   Lernen (ein kurzer Text, ein Grammatikpunkt oder ein paar neue Wörter)
 *   → Prüfung (1–3 Aufgaben, sofort bewertet, mit Punkten)
 *   → nächste Lektion.
 *
 * Jede Lektion behandelt genau einen kleinen Aspekt und verweist auf die
 * Buchseite, auf der er ausführlich steht (`bookRef`).
 */

export const STUDY_LESSON_KINDS = ['TEXT', 'GRAMMAR', 'VOCAB'] as const;
export type StudyLessonKind = (typeof STUDY_LESSON_KINDS)[number];

/** So viele Lektionen hat jedes Niveau. */
export const STUDY_LESSONS_PER_LEVEL = 50;

/** Was im Lernteil einer Lektion stehen darf. */
export type StudyTheoryBlock = InfoBlock | TextBlock | VocabListBlock | DialogueBlock;

/**
 * Schreibaufgaben gehören nicht in eine Lektion: Sie haben keine eindeutige
 * Lösung und damit keine Punkte. Sie bleiben im Buch.
 */
export type StudyExerciseBlock = Exclude<ExerciseBlock, { type: 'WRITING' }>;

/** Die Buchseite, auf der das Thema einer Lektion ausführlich steht. */
export interface StudyBookRef {
  book: WorkbookBook;
  /** Kapitelnummer im Buch. */
  chapter: number;
  /** Seitennummer im Kapitel. */
  unit: number;
}

/** Eine Lektion, wie sie im Server liegt – mit Lösungen. */
export interface StudyLesson {
  /** Stabil über Inhaltsänderungen hinweg, z. B. `de-a1-07` – der Fortschritt hängt daran. */
  id: string;
  kind: StudyLessonKind;
  title: string;
  theory: StudyTheoryBlock[];
  exercises: StudyExerciseBlock[];
  bookRef: StudyBookRef;
}

// ------------------------------------------------------------------ Punkte

/** Höchstpunktzahl einer Aufgabe; Teillösungen geben anteilig. */
export const STUDY_POINTS_PER_EXERCISE = POINTS.STUDY_EXERCISE;

/** Punkte für eine Antwort – nur Verbesserungen zählen (siehe `pointsForImprovement`). */
export function studyPointsFor(scorePercent: number, previousBest: number | null): number {
  return pointsForImprovement(STUDY_POINTS_PER_EXERCISE, scorePercent, previousBest);
}

// -------------------------------------------------------------------- DTOs

export interface StudyLessonSummaryDto {
  id: string;
  /** 1 bis 50 innerhalb des Niveaus. */
  number: number;
  kind: StudyLessonKind;
  title: string;
  exerciseCount: number;
  /** Alle Aufgaben mindestens einmal beantwortet. */
  done: boolean;
  /** Durchschnitt der besten Ergebnisse, `null` solange nicht alles beantwortet ist. */
  scorePercent: number | null;
  points: number;
  maxPoints: number;
}

export interface StudyLevelSummaryDto {
  level: CefrLevel;
  lessonCount: number;
  doneCount: number;
}

export interface StudyOverviewDto {
  /** Der gemeinsame Punktestand über alle Bereiche. */
  totalPoints: number;
  /** Das angezeigte Niveau. */
  level: CefrLevel;
  /** Alle Niveaus, für die es Lektionen gibt. */
  levels: StudyLevelSummaryDto[];
  lessons: StudyLessonSummaryDto[];
  /** Die erste noch offene Lektion des Niveaus – `null`, wenn alle erledigt sind. */
  nextLessonId: string | null;
}

export interface StudyLessonDto {
  id: string;
  number: number;
  total: number;
  level: CefrLevel;
  kind: StudyLessonKind;
  title: string;
  theory: StudyTheoryBlock[];
  exercises: Array<{
    /** Ohne Lösung – die kommt erst mit der Antwort. */
    block: StudyExerciseBlock;
    /** Bestes bisheriges Ergebnis in Prozent, `null` = noch nie beantwortet. */
    bestScore: number | null;
  }>;
  /** Die Buchseite zum Nachschlagen; `null`, wenn sie (noch) nicht veröffentlicht ist. */
  bookPage: {
    unitId: string;
    book: WorkbookBook;
    chapterOrder: number;
    chapterTitle: string;
    unitTitle: string;
  } | null;
  previousLessonId: string | null;
  nextLessonId: string | null;
}

export interface StudyAnswerResultDto extends PointsAward {
  result: BlockResult;
  bestScore: number;
}
