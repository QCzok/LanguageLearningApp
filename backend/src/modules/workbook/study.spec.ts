import { studyPointsFor } from '@lingua/shared';

describe('studyPointsFor', () => {
  it('zählt beim ersten Mal das Ergebnis', () => {
    expect(studyPointsFor(100, null)).toBe(10);
    expect(studyPointsFor(50, null)).toBe(5);
    expect(studyPointsFor(0, null)).toBe(0);
  });

  it('gibt beim Wiederholen nur die Verbesserung', () => {
    expect(studyPointsFor(100, 50)).toBe(5);
    expect(studyPointsFor(100, 100)).toBe(0);
    expect(studyPointsFor(30, 80)).toBe(0);
  });
});
