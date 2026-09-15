import type { CefrLevel } from '@lingua/shared';
import { determineLevel, isLevelPassed, nextLevel } from './placement.rules';

/** Kurzschreibweise: { A1: [4, 5] } heißt „vier von fünf auf A1 richtig". */
function scores(entries: Partial<Record<CefrLevel, [number, number]>>) {
  return new Map<CefrLevel, { correct: number; total: number }>(
    Object.entries(entries).map(([level, [correct, total]]) => [
      level as CefrLevel,
      { correct, total },
    ]),
  );
}

describe('isLevelPassed', () => {
  it('lässt drei von fünf durch, zwei nicht', () => {
    expect(isLevelPassed({ correct: 3, total: 5 })).toBe(true);
    expect(isLevelPassed({ correct: 2, total: 5 })).toBe(false);
  });

  it('hält den Anteil, wenn eine Sprache weniger Fragen hat', () => {
    // Drei Fragen: zwei richtige entsprechen derselben Hürde wie 3/5.
    expect(isLevelPassed({ correct: 2, total: 3 })).toBe(true);
    expect(isLevelPassed({ correct: 1, total: 3 })).toBe(false);
  });

  it('wertet eine Stufe ohne Fragen nie als bestanden', () => {
    expect(isLevelPassed({ correct: 0, total: 0 })).toBe(false);
  });
});

describe('determineLevel', () => {
  it('nimmt die erste Stufe, die nicht mehr reicht', () => {
    expect(determineLevel(scores({ A1: [5, 5], A2: [4, 5], B1: [2, 5] }))).toBe('B1');
  });

  it('bleibt auf A1, wenn schon dort zu wenig stimmt', () => {
    expect(determineLevel(scores({ A1: [1, 5] }))).toBe('A1');
  });

  it('steigt nach jeder bestandenen Stufe eine höher', () => {
    expect(determineLevel(scores({ A1: [5, 5], A2: [3, 5] }))).toBe('B1');
  });

  it('endet bei C2, wenn auch die letzte Stufe sitzt', () => {
    expect(
      determineLevel(
        scores({ A1: [5, 5], A2: [5, 5], B1: [5, 5], B2: [4, 5], C1: [3, 5], C2: [3, 5] }),
      ),
    ).toBe('C2');
  });

  it('gibt C2 aus, wenn C1 bestanden ist und es keine C2-Fragen gab', () => {
    expect(determineLevel(scores({ A1: [5, 5], A2: [5, 5], B1: [4, 5], B2: [3, 5], C1: [3, 5] }))).toBe(
      'C2',
    );
  });

  it('überspringt Stufen ohne Antworten', () => {
    expect(determineLevel(scores({ A1: [5, 5], B1: [1, 5] }))).toBe('B1');
  });
});

describe('nextLevel', () => {
  it('führt die Leiter aufwärts und endet über C2', () => {
    expect(nextLevel('A1')).toBe('A2');
    expect(nextLevel('C1')).toBe('C2');
    expect(nextLevel('C2')).toBeNull();
  });
});
