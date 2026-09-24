import type { CefrLevel, StudyLesson } from '@lingua/shared';
import { DE_A1 } from './de-a1';
import { DE_A2 } from './de-a2';
import { DE_B1 } from './de-b1';
import { DE_B2 } from './de-b2';
import { ES_A1 } from './es-a1';
import { ES_A2 } from './es-a2';
import { ES_B1 } from './es-b1';
import { ES_B2 } from './es-b2';

/**
 * Alle Lektionen, nach Sprachcode und Niveau.
 *
 * Grundlage sind die Kursbücher und das Grammatikbuch der jeweiligen Sprache:
 * Jede Lektion nimmt einen kleinen Aspekt einer Buchseite und verweist
 * dorthin. C1 und C2 fehlen, solange das Advanced-Buch nicht ausgearbeitet
 * ist – ohne Buch gäbe es nichts, worauf eine Lektion verweisen könnte.
 */
export const STUDY_CATALOG: Record<string, Partial<Record<CefrLevel, StudyLesson[]>>> = {
  de: { A1: DE_A1, A2: DE_A2, B1: DE_B1, B2: DE_B2 },
  es: { A1: ES_A1, A2: ES_A2, B1: ES_B1, B2: ES_B2 },
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
