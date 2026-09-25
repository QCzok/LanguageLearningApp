import { POINTS, pointsForImprovement, vocabComboBonus } from '@lingua/shared';

describe('pointsForImprovement', () => {
  it('zählt beim ersten Mal das Ergebnis anteilig', () => {
    expect(pointsForImprovement(POINTS.READING_EXERCISES, 100, null)).toBe(20);
    expect(pointsForImprovement(POINTS.READING_EXERCISES, 50, null)).toBe(10);
    expect(pointsForImprovement(POINTS.WORKBOOK_UNIT, 0, null)).toBe(0);
  });

  it('gibt beim Wiederholen nur die Verbesserung', () => {
    expect(pointsForImprovement(POINTS.WORKBOOK_UNIT, 100, 50)).toBe(15);
    expect(pointsForImprovement(POINTS.WORKBOOK_UNIT, 100, 100)).toBe(0);
    expect(pointsForImprovement(POINTS.WORKBOOK_UNIT, 40, 80)).toBe(0);
  });
});

describe('vocabComboBonus', () => {
  it('steigt mit der Serie und ist gedeckelt', () => {
    expect(vocabComboBonus(0)).toBe(0);
    expect(vocabComboBonus(3)).toBe(1);
    expect(vocabComboBonus(5)).toBe(2);
    expect(vocabComboBonus(50)).toBe(3);
  });
});
