import { CEFR_LEVELS, PLACEMENT_PASS_CORRECT, PLACEMENT_QUESTIONS_PER_LEVEL } from '@lingua/shared';
import type { CefrLevel } from '@lingua/shared';

/**
 * Die Regeln der Einstufungsleiter – ohne Datenbank, damit sie prüfbar sind.
 *
 * Der Test ist eine Leiter: fünf Fragen je Stufe, drei richtige führen eine
 * Stufe höher. Die erste Stufe, die nicht mehr reicht, ist das Ergebnis –
 * dort sitzt der Stoff, der noch fehlt, und genau dort soll gelernt werden.
 */

/** Ergebnis einer Stufe: wie viele der gestellten Fragen richtig waren. */
export interface LevelScore {
  correct: number;
  total: number;
}

/**
 * Bestanden ist eine Stufe mit drei von fünf richtigen Antworten.
 *
 * Gerechnet wird über den Anteil, nicht über die feste Zahl: Eine Sprache,
 * für die erst drei Fragen je Stufe redaktionell fertig sind, bekäme sonst
 * eine unerfüllbare Hürde. Bei fünf Fragen kommt genau die Regel heraus, die
 * die Oberfläche ansagt.
 */
export function isLevelPassed({ correct, total }: LevelScore): boolean {
  if (total === 0) return false;
  return correct >= Math.ceil(total * (PLACEMENT_PASS_CORRECT / PLACEMENT_QUESTIONS_PER_LEVEL));
}

/**
 * Das Ergebnis eines Durchlaufs: die Stufe, auf der es hakt.
 *
 * Stufen ohne Antworten werden übersprungen – bricht ein Durchlauf ab oder
 * fehlen für eine Sprache noch Fragen, zählt nur, was tatsächlich beantwortet
 * wurde. Wer jede angetretene Stufe besteht, landet eine Stufe darüber, und
 * über C2 hinaus geht nichts.
 */
export function determineLevel(perLevel: Map<CefrLevel, LevelScore>): CefrLevel {
  let highestAttempted: CefrLevel = 'A1';

  for (const level of CEFR_LEVELS) {
    const score = perLevel.get(level);
    if (!score || score.total === 0) continue;

    highestAttempted = level;
    if (!isLevelPassed(score)) return level;
  }

  const index = CEFR_LEVELS.indexOf(highestAttempted);
  return CEFR_LEVELS[index + 1] ?? highestAttempted;
}

/** Die nächste Stufe der Leiter – null, wenn C2 erreicht ist. */
export function nextLevel(level: CefrLevel): CefrLevel | null {
  return CEFR_LEVELS[CEFR_LEVELS.indexOf(level) + 1] ?? null;
}
