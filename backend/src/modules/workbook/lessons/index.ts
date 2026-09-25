import type { CefrLevel, StudyLesson } from '@lingua/shared';
import { DE_A1 } from './de-a1';
import { DE_A2 } from './de-a2';
import { DE_B1 } from './de-b1';
import { DE_B2 } from './de-b2';
import { DE_C1 } from './de-c1';
import { DE_C2 } from './de-c2';
import { EN_A1 } from './en-a1';
import { EN_A2 } from './en-a2';
import { EN_B1 } from './en-b1';
import { EN_B2 } from './en-b2';
import { EN_C1 } from './en-c1';
import { EN_C2 } from './en-c2';
import { ES_A1 } from './es-a1';
import { ES_A2 } from './es-a2';
import { ES_B1 } from './es-b1';
import { ES_B2 } from './es-b2';
import { ES_C1 } from './es-c1';
import { ES_C2 } from './es-c2';

/**
 * Alle Lektionen, nach Sprachcode und Niveau.
 *
 * Grundlage sind die Kursbücher und das Grammatikbuch der jeweiligen Sprache:
 * Jede Lektion nimmt einen kleinen Aspekt einer Buchseite und verweist
 * dorthin. Für alle drei Sprachen sind A1 bis C2 ausgearbeitet.
 */
export const STUDY_CATALOG: Record<string, Partial<Record<CefrLevel, StudyLesson[]>>> = {
  de: { A1: DE_A1, A2: DE_A2, B1: DE_B1, B2: DE_B2, C1: DE_C1, C2: DE_C2 },
  en: { A1: EN_A1, A2: EN_A2, B1: EN_B1, B2: EN_B2, C1: EN_C1, C2: EN_C2 },
  es: { A1: ES_A1, A2: ES_A2, B1: ES_B1, B2: ES_B2, C1: ES_C1, C2: ES_C2 },
};

const INDEX = new Map<
  string,
  { lesson: StudyLesson; level: CefrLevel; index: number; list: StudyLesson[] }
>();
for (const levels of Object.values(STUDY_CATALOG)) {
  for (const [level, list] of Object.entries(levels) as Array<[CefrLevel, StudyLesson[]]>) {
    list.forEach((lesson, index) => INDEX.set(lesson.id, { lesson, level, index, list }));
  }
}

/** Eine Lektion samt Niveau und Nachbarn. */
export function findLesson(id: string) {
  return INDEX.get(id);
}
