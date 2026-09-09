import { CardStatus } from '@prisma/client';
import { reviewCard as sharedReviewCard, SRS_DEFAULTS as SHARED_DEFAULTS } from '@lingua/shared';
import type { ReviewGrade, SrsState } from '@lingua/shared';

/**
 * Dünne Adapterschicht zwischen dem geteilten SM-2-Algorithmus und den Prisma-Typen.
 * Der Algorithmus selbst lebt in @lingua/shared, damit die App identisch rechnen kann.
 */
export interface PrismaSrsState {
  easeFactor: number;
  intervalDays: number;
  repetitions: number;
  lapses: number;
  status: CardStatus;
}

export const SRS_DEFAULTS = {
  easeFactor: SHARED_DEFAULTS.easeFactor,
  intervalDays: SHARED_DEFAULTS.intervalDays,
  repetitions: SHARED_DEFAULTS.repetitions,
  lapses: SHARED_DEFAULTS.lapses,
  status: CardStatus.NEW,
};

export function reviewCard(state: PrismaSrsState, grade: number, now: Date = new Date()) {
  const result = sharedReviewCard(state as SrsState, grade as ReviewGrade, now);
  return { ...result, status: result.status as CardStatus };
}

/** Zufällige Auswahl aus einer Liste – für die Modusrotation. */
export function shuffleSeedFree<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}
