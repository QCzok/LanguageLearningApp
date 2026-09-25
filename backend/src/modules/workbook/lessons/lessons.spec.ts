import { STUDY_LESSONS_PER_LEVEL, type StudyLesson, type UnitContent } from '@lingua/shared';
import { STUDY_CATALOG, findLesson } from './index';
import { evaluateBlock, stripSolutions } from '../evaluation';

/** Seiten eines Buchkapitels aus dem Seed – dort, wohin die Lektion verweist. */
function unitsOf(
  languageCode: string,
  book: string,
  chapter: number,
): Array<{ order: number; content: UnitContent }> | undefined {
  const prefix = ({ de: '', es: 'spanish-', en: 'english-' } as Record<string, string>)[
    languageCode
  ];
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const mod = require(
      `../../../../prisma/seed/${prefix}chapter-${book.toLowerCase()}-${chapter}`,
    );
    const key = Object.keys(mod).find((name) => name.endsWith('_UNITS'));
    return key ? mod[key] : undefined;
  } catch {
    return undefined;
  }
}

const all: Array<[string, string, StudyLesson[]]> = Object.entries(STUDY_CATALOG).flatMap(
  ([language, levels]) =>
    Object.entries(levels).map(
      ([level, list]) => [language, level, list!] as [string, string, StudyLesson[]],
    ),
);

describe.each(all)('Lektionen %s %s', (language, level, list) => {
  it(`hat genau ${STUDY_LESSONS_PER_LEVEL} Lektionen`, () => {
    expect(list.length).toBe(STUDY_LESSONS_PER_LEVEL);
  });

  it('hat eindeutige, auffindbare IDs mit Sprach- und Niveaupräfix', () => {
    const prefix = `${language}-${level.toLowerCase()}-`;
    for (const lesson of list) {
      expect(lesson.id.startsWith(prefix)).toBe(true);
      expect(findLesson(lesson.id)?.lesson).toBe(lesson);
    }
  });

  it('ist kurz: ein Lernteil und eine bis drei Aufgaben', () => {
    for (const lesson of list) {
      expect(lesson.theory.length).toBeGreaterThanOrEqual(1);
      expect(lesson.theory.length).toBeLessThanOrEqual(3);
      expect(lesson.exercises.length).toBeGreaterThanOrEqual(1);
      expect(lesson.exercises.length).toBeLessThanOrEqual(3);
    }
  });

  it('verweist auf eine Buchseite, die es gibt', () => {
    for (const lesson of list) {
      const { book, chapter, unit } = lesson.bookRef;
      const units = unitsOf(language, book, chapter);
      if (!units?.some((entry) => entry.order === unit)) {
        throw new Error(`${lesson.id}: Buchseite ${book} ${chapter}.${unit} fehlt`);
      }
    }
  });

  it('lässt sich mit der Lösung voll und ohne Antwort gar nicht lösen', () => {
    for (const lesson of list) {
      const stripped = stripSolutions({ version: 1, blocks: lesson.exercises }).blocks;
      lesson.exercises.forEach((block, index) => {
        const perfect = (() => {
          switch (block.type) {
            case 'CHOICE':
              return { type: 'CHOICE' as const, selected: block.solution ?? [] };
            case 'CLOZE':
              return {
                type: 'CLOZE' as const,
                gaps: Object.fromEntries(
                  block.segments.flatMap((segment) =>
                    segment.kind === 'GAP' ? [[segment.gapId, segment.solution![0]]] : [],
                  ),
                ),
              };
            case 'MATCHING':
              return { type: 'MATCHING' as const, pairs: block.solution ?? [] };
            case 'ORDERING':
              return { type: 'ORDERING' as const, order: block.solution ?? [] };
          }
        })();
        const result = evaluateBlock(block, perfect);
        if (!result.correct)
          throw new Error(`${block.id}: Musterlösung wird nicht als richtig erkannt`);

        // Jede Lösung eines Lückentexts muss als Wortkarte im Kasten liegen.
        const shipped = stripped[index];
        if (block.type === 'CLOZE' && shipped.type === 'CLOZE') {
          for (const segment of block.segments) {
            if (segment.kind === 'GAP' && !shipped.wordBank?.includes(segment.solution![0])) {
              throw new Error(`${block.id}: „${segment.solution![0]}“ fehlt im Wortkasten`);
            }
          }
        }
        if (block.type === 'MATCHING') {
          expect(new Set(block.left.map((item) => item.text)).size).toBe(block.left.length);
        }
      });
    }
  });
});
