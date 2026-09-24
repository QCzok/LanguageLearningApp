import type { CefrLevel } from './cefr';
import {
  isExerciseBlock,
  type AudioBlock,
  type BlockResult,
  type DialogueBlock,
  type ExerciseBlock,
  type InfoBlock,
  type TextBlock,
  type UnitContent,
  type VocabListBlock,
  type WorkbookBook,
} from './workbook';

/**
 * Lernsitzungen – das Lehrwerk in Karten.
 *
 * Die Bücher bleiben, aber wer „einfach lernen“ will, soll nicht erst ein Buch
 * aufschlagen und eine Seite wählen müssen. Eine Sitzung zieht ein paar Themen
 * aus dem Buch und stellt jedes als Kartenfolge dar:
 *
 *   Theorie → Aufgabe → Lösung → Aufgabe → Lösung …
 *
 * Eigene Inhalte gibt es dafür nicht. Die Seiten sind bereits so gebaut, dass
 * die Übung direkt auf die Erklärung folgt, zu der sie gehört – ein Thema ist
 * also genau ein Erklärkasten (`INFO`) samt den Aufgaben, die bis zum nächsten
 * Kasten folgen. `splitIntoStudyTopics` schneidet eine Seite an diesen Stellen.
 */

/** Was auf der Theoriekarte stehen darf. */
export type StudyTheoryBlock = InfoBlock | TextBlock | VocabListBlock;

/** Was eine Aufgabe als Vorlage braucht, etwa der Dialog, auf den sich die Fragen beziehen. */
export type StudyContextBlock = DialogueBlock | AudioBlock | TextBlock;

/**
 * Schreibaufgaben gehören nicht in eine Sitzung: Sie haben keine eindeutige
 * Lösung und damit keine Punkte. Sie bleiben im Buch.
 */
export type StudyExerciseBlock = Exclude<ExerciseBlock, { type: 'WRITING' }>;

export interface StudyTopicDraft {
  /** Block-ID, an der das Thema beginnt – zusammen mit der Seite eindeutig. */
  anchorId: string;
  title: string;
  theory: StudyTheoryBlock[];
  exercises: Array<{ block: StudyExerciseBlock; context: StudyContextBlock[] }>;
}

/**
 * Zerlegt eine Buchseite in Lernthemen.
 *
 * - Ein Erklärkasten eröffnet ein neues Thema; stehen mehrere Kästen ohne
 *   Aufgabe dazwischen hintereinander, landen sie gemeinsam auf einer
 *   Theoriekarte.
 * - Wortschatzlisten gehören zur Theorie des folgenden Themas – die Aufgabe
 *   danach fragt die Wörter ab.
 * - Dialoge, Hörtexte und Lesetexte sind Vorlage der nächsten Aufgabe.
 * - Aufgaben vor dem ersten Kasten (Einstiegsübungen zum Dialog) bekommen die
 *   Einleitung der Seite als Theorie.
 * - Erklärkästen, auf die keine Aufgabe mehr folgt, fallen weg: Eine
 *   Theoriekarte ohne Übung ist eine Buchseite, keine Sitzung.
 */
export function splitIntoStudyTopics(content: UnitContent, unitTitle: string): StudyTopicDraft[] {
  const topics: StudyTopicDraft[] = [];
  let current: StudyTopicDraft | null = null;
  let intro: TextBlock | null = null;
  let introUsed = false;
  let seenInfoOrExercise = false;
  let seenInfo = false;
  let pendingInfo: InfoBlock[] = [];
  let pendingVocab: VocabListBlock[] = [];
  let pendingContext: StudyContextBlock[] = [];

  for (const block of content.blocks) {
    if (block.type === 'INFO') {
      seenInfoOrExercise = true;
      seenInfo = true;
      current = null;
      pendingInfo.push(block);
      continue;
    }
    if (block.type === 'VOCAB_LIST') {
      pendingVocab.push(block);
      continue;
    }
    if (block.type === 'TEXT') {
      if (!seenInfoOrExercise && !intro) intro = block;
      else pendingContext.push(block);
      continue;
    }
    if (block.type === 'DIALOGUE' || block.type === 'AUDIO') {
      pendingContext.push(block);
      continue;
    }
    if (!isExerciseBlock(block) || block.type === 'WRITING') continue;

    seenInfoOrExercise = true;
    if (!current || pendingInfo.length > 0 || pendingVocab.length > 0) {
      const theory: StudyTheoryBlock[] = [...pendingInfo];
      // Die Einleitung erklärt die Seite als Ganzes – sie gehört vor das
      // erste Thema, nicht zu einem späteren, das schon eigene Theorie hat.
      if (!seenInfo && intro && !introUsed) {
        theory.push(intro);
        introUsed = true;
      }
      theory.push(...pendingVocab);

      current = {
        anchorId: pendingInfo[0]?.id ?? pendingVocab[0]?.id ?? block.id,
        title: pendingInfo[0]?.title ?? pendingVocab[0]?.title ?? unitTitle,
        theory,
        exercises: [],
      };
      topics.push(current);
      pendingInfo = [];
      pendingVocab = [];
    }

    current.exercises.push({ block, context: pendingContext });
    pendingContext = [];
  }

  return topics;
}

// ------------------------------------------------------------------ Punkte

/** Höchstpunktzahl einer Aufgabe; Teillösungen geben anteilig. */
export const STUDY_POINTS_PER_EXERCISE = 10;

/** So viele Themen hat eine Sitzung, wenn nichts anderes verlangt wird. */
export const STUDY_SESSION_TOPICS = 3;

/**
 * Punkte für eine Antwort.
 *
 * Beim ersten Mal zählt das Ergebnis voll. Danach gibt es nur noch die
 * Verbesserung gegenüber der bisher besten Antwort – wer eine Aufgabe
 * wiederholt, kann sich steigern, aber nicht dieselben Punkte zweimal holen.
 */
export function studyPointsFor(scorePercent: number, previousBest: number | null): number {
  const toPoints = (percent: number) => Math.round((STUDY_POINTS_PER_EXERCISE * percent) / 100);
  return Math.max(0, toPoints(scorePercent) - (previousBest === null ? 0 : toPoints(previousBest)));
}

// -------------------------------------------------------------------- DTOs

export interface StudyExerciseDto {
  /** Ohne Lösung – die kommt erst mit der Antwort. */
  block: StudyExerciseBlock;
  context: StudyContextBlock[];
  /** Bestes bisheriges Ergebnis in Prozent, `null` = noch nie beantwortet. */
  bestScore: number | null;
}

export interface StudyTopicDto {
  /** `unitId:anchorId` */
  id: string;
  unitId: string;
  book: WorkbookBook;
  level: CefrLevel;
  chapterOrder: number;
  chapterTitle: string;
  unitTitle: string;
  title: string;
  theory: StudyTheoryBlock[];
  exercises: StudyExerciseDto[];
}

export interface StudySessionDto {
  book: WorkbookBook;
  topics: StudyTopicDto[];
  /** Alles im Buch ist schon bearbeitet – die Sitzung wiederholt die schwächsten Themen. */
  isReview: boolean;
}

export interface StudyAnswerResultDto {
  result: BlockResult;
  pointsEarned: number;
  bestScore: number;
  /** Punkte über alle Sitzungen, nach dieser Antwort. */
  totalPoints: number;
}

export interface StudyBookProgressDto {
  book: WorkbookBook;
  topicsTotal: number;
  /** Alle Aufgaben mindestens einmal beantwortet. */
  topicsDone: number;
  /** Alle Aufgaben fehlerfrei. */
  topicsMastered: number;
  points: number;
  pointsPossible: number;
}

export interface StudyOverviewDto {
  totalPoints: number;
  books: StudyBookProgressDto[];
}
