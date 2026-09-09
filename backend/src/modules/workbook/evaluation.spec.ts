import type {
  ChoiceBlock,
  ClozeBlock,
  MatchingBlock,
  OrderingBlock,
  UnitContent,
  WritingBlock,
} from '@lingua/shared';
import { evaluateBlock, stripSolutions } from './evaluation';

/**
 * Die Auswertung entscheidet, ob eine Aufgabe als gelöst gilt – und `stripSolutions`
 * verhindert, dass Lösungen überhaupt an die App gelangen. Beides ist sicherheits-
 * bzw. lernrelevant und deshalb direkt getestet.
 */
describe('evaluateBlock', () => {
  describe('CLOZE', () => {
    const block: ClozeBlock = {
      id: 'c1',
      type: 'CLOZE',
      instruction: 'Ergänzen Sie.',
      segments: [
        { kind: 'TEXT', text: 'Ich ' },
        { kind: 'GAP', gapId: 'g1', solution: ['heiße'] },
        { kind: 'TEXT', text: ' Mira und komme ' },
        { kind: 'GAP', gapId: 'g2', solution: ['aus'] },
        { kind: 'TEXT', text: ' Polen.' },
      ],
    };

    it('akzeptiert abweichende Groß-/Kleinschreibung und Leerzeichen', () => {
      const result = evaluateBlock(block, {
        type: 'CLOZE',
        gaps: { g1: '  HEISSE ', g2: 'Aus' },
      });
      // "HEISSE" ist eine andere Schreibung als "heiße" – nur g2 darf passen.
      expect(result.details).toEqual({ g1: false, g2: true });
    });

    it('erkennt exakt richtige Antworten unabhängig von der Schreibung', () => {
      const result = evaluateBlock(block, {
        type: 'CLOZE',
        gaps: { g1: 'Heiße', g2: 'aus' },
      });
      expect(result.correct).toBe(true);
      expect(result.scorePercent).toBe(100);
    });

    it('gibt Teilpunkte, gilt aber erst bei allen Lücken als gelöst', () => {
      const result = evaluateBlock(block, { type: 'CLOZE', gaps: { g1: 'heiße', g2: 'in' } });
      expect(result.scorePercent).toBe(50);
      expect(result.correct).toBe(false);
    });

    it('akzeptiert alle hinterlegten Schreibvarianten', () => {
      const variants: ClozeBlock = {
        ...block,
        segments: [{ kind: 'GAP', gapId: 'g', solution: ['Tschüss', 'Tschüs'] }],
      };
      expect(evaluateBlock(variants, { type: 'CLOZE', gaps: { g: 'Tschüs' } }).correct).toBe(true);
    });

    it('wertet eine fehlende Antwort als falsch statt zu scheitern', () => {
      const result = evaluateBlock(block, undefined);
      expect(result.correct).toBe(false);
      expect(result.scorePercent).toBe(0);
    });
  });

  describe('CHOICE', () => {
    const single: ChoiceBlock = {
      id: 'ch1',
      type: 'CHOICE',
      instruction: 'Wählen Sie.',
      multiple: false,
      options: [
        { id: 'a', text: 'Wie geht es Ihnen?' },
        { id: 'b', text: 'Wie geht es du?' },
      ],
      solution: ['a'],
    };

    const multi: ChoiceBlock = {
      ...single,
      id: 'ch2',
      multiple: true,
      options: [
        { id: 'a', text: 'Guten Abend' },
        { id: 'b', text: 'Guten Morgen' },
        { id: 'c', text: 'Hallo' },
      ],
      solution: ['a', 'c'],
    };

    it('erkennt die richtige Einzelauswahl', () => {
      expect(evaluateBlock(single, { type: 'CHOICE', selected: ['a'] }).correct).toBe(true);
      expect(evaluateBlock(single, { type: 'CHOICE', selected: ['b'] }).correct).toBe(false);
    });

    it('wertet bei Mehrfachauswahl nur die exakte Menge als richtig', () => {
      expect(evaluateBlock(multi, { type: 'CHOICE', selected: ['a', 'c'] }).correct).toBe(true);
      expect(evaluateBlock(multi, { type: 'CHOICE', selected: ['c', 'a'] }).correct).toBe(true);
    });

    it('lässt "alles ankreuzen" nicht als Lösung durchgehen', () => {
      const result = evaluateBlock(multi, { type: 'CHOICE', selected: ['a', 'b', 'c'] });
      expect(result.correct).toBe(false);
    });

    it('wertet eine unvollständige Mehrfachauswahl als falsch', () => {
      expect(evaluateBlock(multi, { type: 'CHOICE', selected: ['a'] }).correct).toBe(false);
    });
  });

  describe('MATCHING', () => {
    const block: MatchingBlock = {
      id: 'm1',
      type: 'MATCHING',
      instruction: 'Ordnen Sie zu.',
      left: [
        { id: 'l1', text: 'Wien' },
        { id: 'l2', text: 'Zürich' },
      ],
      right: [
        { id: 'r1', text: 'Österreich' },
        { id: 'r2', text: 'die Schweiz' },
      ],
      solution: [
        { leftId: 'l1', rightId: 'r1' },
        { leftId: 'l2', rightId: 'r2' },
      ],
    };

    it('bewertet jedes Paar einzeln', () => {
      const result = evaluateBlock(block, {
        type: 'MATCHING',
        pairs: [
          { leftId: 'l1', rightId: 'r1' },
          { leftId: 'l2', rightId: 'r1' },
        ],
      });
      expect(result.details).toEqual({ l1: true, l2: false });
      expect(result.scorePercent).toBe(50);
    });
  });

  describe('ORDERING', () => {
    const block: OrderingBlock = {
      id: 'o1',
      type: 'ORDERING',
      instruction: 'Sortieren Sie.',
      items: [
        { id: 'w1', text: 'Wie' },
        { id: 'w2', text: 'heißen' },
        { id: 'w3', text: 'Sie' },
      ],
      solution: ['w1', 'w2', 'w3'],
    };

    it('erkennt die richtige Reihenfolge', () => {
      expect(evaluateBlock(block, { type: 'ORDERING', order: ['w1', 'w2', 'w3'] }).correct).toBe(
        true,
      );
    });

    it('bewertet positionsweise', () => {
      const result = evaluateBlock(block, { type: 'ORDERING', order: ['w1', 'w3', 'w2'] });
      expect(result.details).toEqual({ w1: true, w2: false, w3: false });
    });
  });

  describe('WRITING', () => {
    const block: WritingBlock = {
      id: 'w1',
      type: 'WRITING',
      instruction: 'Stellen Sie sich vor.',
      minWords: 5,
      aiFeedback: true,
      sampleAnswer: 'Ich heiße Nadia und komme aus Marokko.',
    };

    it('akzeptiert einen Text ab der geforderten Wortzahl', () => {
      expect(
        evaluateBlock(block, { type: 'WRITING', text: 'Ich heiße Mira und wohne in Leipzig.' })
          .correct,
      ).toBe(true);
    });

    it('weist einen zu kurzen Text mit Hinweis zurück', () => {
      const result = evaluateBlock(block, { type: 'WRITING', text: 'Ich heiße Mira.' });
      expect(result.correct).toBe(false);
      expect(result.explanation).toContain('mindestens 5');
    });
  });
});

describe('stripSolutions', () => {
  const content: UnitContent = {
    version: 1,
    blocks: [
      { id: 'h', type: 'HEADING', level: 1, text: 'Titel' },
      {
        id: 'c',
        type: 'CLOZE',
        instruction: 'Ergänzen Sie.',
        segments: [
          { kind: 'TEXT', text: 'Ich ' },
          { kind: 'GAP', gapId: 'g', solution: ['heiße'], hint: 'Verb im Infinitiv' },
        ],
      },
      {
        id: 'ch',
        type: 'CHOICE',
        instruction: 'Wählen Sie.',
        multiple: false,
        options: [{ id: 'a', text: 'A' }],
        solution: ['a'],
        explanation: 'Weil A richtig ist.',
      },
      {
        id: 'o',
        type: 'ORDERING',
        instruction: 'Sortieren.',
        items: [
          { id: '1', text: 'eins' },
          { id: '2', text: 'zwei' },
          { id: '3', text: 'drei' },
          { id: '4', text: 'vier' },
        ],
        solution: ['1', '2', '3', '4'],
      },
      {
        id: 'w',
        type: 'WRITING',
        instruction: 'Schreiben Sie.',
        aiFeedback: false,
        sampleAnswer: 'Geheime Musterlösung',
      },
    ],
  };

  const stripped = stripSolutions(content);
  const serialized = JSON.stringify(stripped);

  it('entfernt jede Lösungsangabe aus dem gesamten Inhalt', () => {
    expect(serialized).not.toContain('heiße');
    expect(serialized).not.toContain('Weil A richtig ist');
    expect(serialized).not.toContain('Geheime Musterlösung');
    expect(serialized).not.toContain('solution');
    expect(serialized).not.toContain('sampleAnswer');
  });

  it('behält Hinweise und Darstellungsblöcke unverändert', () => {
    expect(serialized).toContain('Verb im Infinitiv'); // hint bleibt erhalten
    expect(stripped.blocks[0]).toEqual(content.blocks[0]);
  });

  it('mischt Reihenfolge-Aufgaben, damit die Ausgangsfolge nicht die Lösung ist', () => {
    const ordering = stripped.blocks.find((block) => block.id === 'o');
    const ids = (ordering as { items: Array<{ id: string }> }).items.map((item) => item.id);
    expect(ids).toHaveLength(4);
    expect([...ids].sort()).toEqual(['1', '2', '3', '4']);
    expect(ids).not.toEqual(['1', '2', '3', '4']);
  });

  it('mischt dabei stabil, damit gespeicherte Antworten weiter passen', () => {
    const first = stripSolutions(content).blocks.find((block) => block.id === 'o');
    const second = stripSolutions(content).blocks.find((block) => block.id === 'o');
    expect(JSON.stringify(first)).toEqual(JSON.stringify(second));
  });
});
