// ------------------------------------------------------------------ Punkte

/**
 * Die eine Punktewährung der App.
 *
 * Vokabeln, Lektionen, Buchseiten, Lesen und Hören zahlen alle in denselben
 * Punktestand ein (in der Datenbank `User.xp` bzw. `DailyActivity.xp`). Die
 * Werte stehen hier an einer Stelle, damit sich die Bereiche nicht
 * auseinanderentwickeln: eine volle Aufgabe ist grob so viel wert wie ein
 * gelesener Text oder ein gehörtes Video.
 */
export const POINTS = {
  /** Eine richtig beantwortete Vokabelkarte (plus Serienbonus). */
  VOCAB_CORRECT: 2,
  /** Eine Aufgabe einer Lektion bei 100 %. */
  STUDY_EXERCISE: 10,
  /** Eine Buchseite mit Aufgaben bei 100 %. */
  WORKBOOK_UNIT: 30,
  /** Eine reine Leseseite im Buch, abgehakt. */
  WORKBOOK_READING_UNIT: 10,
  /** Ein Text der Bibliothek, zu Ende gelesen. */
  READING_FINISHED: 10,
  /** Die Verständnisfragen zu einem Text bei 100 %. */
  READING_EXERCISES: 20,
  /** Ein Video oder Hörtext, zu Ende gehört. */
  LISTENING_FINISHED: 15,
} as const;

/** Bonus für richtige Vokabeln in Folge – belohnt Konzentration, nicht Masse. */
export function vocabComboBonus(combo: number): number {
  if (combo >= 10) return 3;
  if (combo >= 5) return 2;
  if (combo >= 3) return 1;
  return 0;
}

/**
 * Punkte für ein Ergebnis, das man wiederholen kann.
 *
 * Beim ersten Mal zählt das Ergebnis anteilig an `max`. Danach gibt es nur
 * noch die Verbesserung gegenüber dem bisher besten Ergebnis – wer eine
 * Aufgabe wiederholt, kann sich steigern, aber nicht dieselben Punkte zweimal
 * holen.
 */
export function pointsForImprovement(
  max: number,
  scorePercent: number,
  previousBest: number | null,
): number {
  const toPoints = (percent: number) => Math.round((max * percent) / 100);
  return Math.max(0, toPoints(scorePercent) - (previousBest === null ? 0 : toPoints(previousBest)));
}

/**
 * Was jeder Endpunkt, der Punkte vergibt, zusätzlich zurückgibt – damit die
 * App überall gleich gratulieren und den Punktestand nachziehen kann.
 */
export interface PointsAward {
  /** Mit dieser Aktion neu verdient; 0, wenn es nichts gab. */
  pointsEarned: number;
  /** Punktestand danach, über alle Bereiche. */
  totalPoints: number;
}
