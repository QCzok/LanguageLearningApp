import type { CardStatus, ReviewGrade } from './enums';

/**
 * SM-2 Spaced-Repetition-Algorithmus (SuperMemo 2, Wozniak).
 *
 * Reine Funktion ohne Seiteneffekte – identisch nutzbar im Backend
 * (autoritative Berechnung) und in der App (optimistische Vorschau).
 */
export interface SrsState {
  easeFactor: number; // >= 1.3
  intervalDays: number;
  repetitions: number;
  lapses: number;
  status: CardStatus;
}

export interface SrsResult extends SrsState {
  dueAt: Date;
}

export const SRS_DEFAULTS: SrsState = {
  easeFactor: 2.5,
  intervalDays: 0,
  repetitions: 0,
  lapses: 0,
  status: 'NEW',
};

/** Lernschritte in Minuten, solange die Karte nicht sitzt. */
const LEARNING_STEPS_MINUTES = [1, 10];
const MIN_EASE_FACTOR = 1.3;
const MASTERED_INTERVAL_DAYS = 60;

export function reviewCard(state: SrsState, grade: ReviewGrade, now: Date = new Date()): SrsResult {
  const passed = grade >= 3;

  let { easeFactor, intervalDays, repetitions, lapses } = state;

  // EF-Anpassung nach SM-2 – auch bei Fehlern, damit schwere Karten häufiger kommen.
  easeFactor = Math.max(
    MIN_EASE_FACTOR,
    easeFactor + (0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02)),
  );

  if (!passed) {
    repetitions = 0;
    lapses += 1;
    intervalDays = 0;
    return {
      easeFactor,
      intervalDays,
      repetitions,
      lapses,
      status: 'LEARNING',
      dueAt: addMinutes(now, LEARNING_STEPS_MINUTES[0]),
    };
  }

  repetitions += 1;

  if (repetitions === 1) {
    intervalDays = 1;
  } else if (repetitions === 2) {
    intervalDays = 6;
  } else {
    intervalDays = Math.round(intervalDays * easeFactor);
  }

  // "Hard" (grade 3) verkürzt das Intervall, "easy" (5) verlängert es.
  if (grade === 3) intervalDays = Math.max(1, Math.round(intervalDays * 0.8));
  if (grade === 5) intervalDays = Math.round(intervalDays * 1.3);

  const status: CardStatus =
    intervalDays >= MASTERED_INTERVAL_DAYS ? 'MASTERED' : repetitions >= 2 ? 'REVIEW' : 'LEARNING';

  // Erste erfolgreiche Wiederholung bleibt in Minuten-Schritten, danach in Tagen.
  const dueAt =
    repetitions === 1 ? addMinutes(now, LEARNING_STEPS_MINUTES[1]) : addDays(now, intervalDays);

  return { easeFactor, intervalDays, repetitions, lapses, status, dueAt };
}

function addDays(date: Date, days: number): Date {
  return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
}

function addMinutes(date: Date, minutes: number): Date {
  return new Date(date.getTime() + minutes * 60 * 1000);
}

/** Mapping der vier App-Buttons auf SM-2-Noten. */
export const GRADE_BUTTONS = [
  { grade: 1 as ReviewGrade, label: 'Nochmal', color: '#EF4444' },
  { grade: 3 as ReviewGrade, label: 'Schwer', color: '#F59E0B' },
  { grade: 4 as ReviewGrade, label: 'Gut', color: '#10B981' },
  { grade: 5 as ReviewGrade, label: 'Einfach', color: '#3B82F6' },
];
