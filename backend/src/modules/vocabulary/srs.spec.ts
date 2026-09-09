import { reviewCard, SRS_DEFAULTS } from '@lingua/shared';
import type { SrsState } from '@lingua/shared';

/**
 * Der SM-2-Algorithmus entscheidet, wann eine Vokabel wiederkommt – Fehler hier
 * wären für Lernende unsichtbar, aber folgenreich. Daher direkt getestet.
 */
describe('reviewCard (SM-2)', () => {
  const now = new Date('2025-01-01T10:00:00.000Z');

  function minutesFromNow(date: Date): number {
    return Math.round((date.getTime() - now.getTime()) / 60_000);
  }

  it('zeigt eine neue Karte nach der ersten guten Antwort in 10 Minuten erneut', () => {
    const result = reviewCard(SRS_DEFAULTS, 4, now);

    expect(result.repetitions).toBe(1);
    expect(result.intervalDays).toBe(1);
    expect(minutesFromNow(result.dueAt)).toBe(10);
    expect(result.status).toBe('LEARNING');
  });

  it('wächst bei wiederholt guten Antworten auf Tagesintervalle', () => {
    let state: SrsState = SRS_DEFAULTS;
    let due = now;

    for (let i = 0; i < 3; i++) {
      const result = reviewCard(state, 4, now);
      state = result;
      due = result.dueAt;
    }

    expect(state.repetitions).toBe(3);
    expect(state.intervalDays).toBeGreaterThanOrEqual(6);
    expect(due.getTime()).toBeGreaterThan(now.getTime() + 86_400_000);
    expect(state.status).toBe('REVIEW');
  });

  it('setzt bei einer falschen Antwort zurück und zählt einen Lapse', () => {
    const learned = reviewCard(reviewCard(SRS_DEFAULTS, 5, now), 5, now);
    const failed = reviewCard(learned, 1, now);

    expect(failed.repetitions).toBe(0);
    expect(failed.lapses).toBe(1);
    expect(failed.intervalDays).toBe(0);
    expect(failed.status).toBe('LEARNING');
    expect(minutesFromNow(failed.dueAt)).toBe(1);
  });

  it('senkt den Easiness-Faktor bei schweren Karten, aber nie unter 1.3', () => {
    let state: SrsState = SRS_DEFAULTS;
    for (let i = 0; i < 12; i++) {
      state = reviewCard(state, 0, now);
    }
    expect(state.easeFactor).toBeGreaterThanOrEqual(1.3);
    expect(state.easeFactor).toBeLessThan(SRS_DEFAULTS.easeFactor);
  });

  it('verkuerzt bei "schwer" und verlaengert bei "einfach"', () => {
    const base = reviewCard(reviewCard(SRS_DEFAULTS, 4, now), 4, now);

    const hard = reviewCard(base, 3, now);
    const easy = reviewCard(base, 5, now);

    expect(hard.intervalDays).toBeLessThan(easy.intervalDays);
  });

  it('markiert lange Intervalle als gemeistert', () => {
    let state: SrsState = SRS_DEFAULTS;
    for (let i = 0; i < 6; i++) {
      state = reviewCard(state, 5, now);
    }
    expect(state.intervalDays).toBeGreaterThanOrEqual(60);
    expect(state.status).toBe('MASTERED');
  });
});
