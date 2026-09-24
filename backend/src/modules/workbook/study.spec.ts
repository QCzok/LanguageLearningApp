import {
  splitIntoStudyTopics,
  studyPointsFor,
  type ChoiceBlock,
  type InfoBlock,
  type UnitContent,
} from '@lingua/shared';

const info = (id: string, title: string): InfoBlock => ({
  id,
  type: 'INFO',
  variant: 'GRAMMAR',
  title,
  text: '…',
});
const choice = (id: string): ChoiceBlock => ({
  id,
  type: 'CHOICE',
  instruction: '…',
  multiple: false,
  options: [{ id: 'a', text: 'a' }],
  solution: ['a'],
});

describe('splitIntoStudyTopics', () => {
  it('schneidet an jedem Erklärkasten und hängt die folgenden Aufgaben an', () => {
    const content: UnitContent = {
      version: 1,
      blocks: [
        { id: 'h', type: 'HEADING', level: 1, text: 'Seite' },
        info('i1', 'Regel 1'),
        choice('c1'),
        choice('c2'),
        info('i2', 'Regel 2'),
        choice('c3'),
      ],
    };

    const topics = splitIntoStudyTopics(content, 'Seite');
    expect(topics.map((t) => t.title)).toEqual(['Regel 1', 'Regel 2']);
    expect(topics.map((t) => t.exercises.map((e) => e.block.id))).toEqual([['c1', 'c2'], ['c3']]);
  });

  it('gibt Einstiegsaufgaben die Einleitung als Theorie und den Dialog als Vorlage', () => {
    const content: UnitContent = {
      version: 1,
      blocks: [
        { id: 'intro', type: 'TEXT', text: 'Einleitung' },
        { id: 'd', type: 'DIALOGUE', lines: [{ speaker: 'A', text: 'Hallo' }] },
        choice('c1'),
      ],
    };

    const [topic] = splitIntoStudyTopics(content, 'Seite');
    expect(topic.title).toBe('Seite');
    expect(topic.theory.map((b) => b.id)).toEqual(['intro']);
    expect(topic.exercises[0].context.map((b) => b.id)).toEqual(['d']);
  });

  it('fasst Kästen ohne Aufgabe dazwischen zusammen und verwirft Kästen am Ende', () => {
    const content: UnitContent = {
      version: 1,
      blocks: [info('i1', 'A'), info('i2', 'B'), choice('c1'), info('i3', 'C')],
    };

    const topics = splitIntoStudyTopics(content, 'Seite');
    expect(topics).toHaveLength(1);
    expect(topics[0].theory.map((b) => b.id)).toEqual(['i1', 'i2']);
  });

  it('lässt Schreibaufgaben aus', () => {
    const content: UnitContent = {
      version: 1,
      blocks: [info('i1', 'A'), { id: 'w', type: 'WRITING', instruction: '…', aiFeedback: false }],
    };
    expect(splitIntoStudyTopics(content, 'Seite')).toEqual([]);
  });
});

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
