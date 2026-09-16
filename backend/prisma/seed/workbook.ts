import { PrismaClient, Prisma, WorkbookBook } from '@prisma/client';
import { CURRICULUM, type ChapterSeed } from './curriculum';
import { BEGINNER_1_UNITS, type UnitSeed } from './chapter-beginner-1';
import { GRAMMAR_1_UNITS } from './chapter-grammar-1';
import { SPANISH_CURRICULUM } from './spanish-curriculum';
import { SPANISH_BEGINNER_1_UNITS } from './spanish-chapter-beginner-1';
import { SPANISH_BEGINNER_2_UNITS } from './spanish-chapter-beginner-2';
import { SPANISH_BEGINNER_3_UNITS } from './spanish-chapter-beginner-3';
import { SPANISH_GRAMMAR_1_UNITS } from './spanish-chapter-grammar-1';
import { SPANISH_GRAMMAR_2_UNITS } from './spanish-chapter-grammar-2';

/**
 * Legt die Lehrwerke an: je Sprache drei Kursbücher zu zwölf Kapiteln und ein
 * Grammatikbuch mit zwölf Kapiteln.
 *
 * Idempotent: Kapitel werden über (languageId, book, order) gefunden und
 * aktualisiert, Seiten der ausgearbeiteten Kapitel vor dem Neuschreiben
 * gelöscht. Ein zweiter Lauf erzeugt keine Duplikate.
 *
 * Veröffentlicht wird nur, was auch Inhalt hat – die übrigen Kapitel bleiben
 * als Gerüst unveröffentlicht und stehen in der App ausgegraut im
 * Inhaltsverzeichnis, damit der Aufbau des Buchs von Anfang an sichtbar ist.
 */

/** Ein ausgearbeitetes Kapitel: welches Buch, welche Nummer, welche Seiten. */
interface ShowcaseUnits {
  book: WorkbookBook;
  order: number;
  units: UnitSeed[];
}

/**
 * Ein Lehrwerk: die Sprache, für die es gilt, ihr Lehrplan und die Kapitel,
 * die schon Seiten haben.
 *
 * Die Sprache steht hier als Code und wird beim Seeden aufgelöst – angelegt
 * sind die Sprachen bereits in `seed.ts`, deshalb genügt hier ein Nachschlagen
 * statt eines weiteren Upserts.
 */
interface WorkbookSeed {
  languageCode: string;
  label: string;
  curriculum: ChapterSeed[];
  showcase: ShowcaseUnits[];
}

const WORKBOOKS: WorkbookSeed[] = [
  {
    languageCode: 'de',
    label: 'Deutsch',
    curriculum: CURRICULUM,
    showcase: [
      { book: WorkbookBook.BEGINNER, order: 1, units: BEGINNER_1_UNITS },
      { book: WorkbookBook.GRAMMAR, order: 1, units: GRAMMAR_1_UNITS },
    ],
  },
  {
    languageCode: 'es',
    label: 'Spanisch',
    curriculum: SPANISH_CURRICULUM,
    showcase: [
      { book: WorkbookBook.BEGINNER, order: 1, units: SPANISH_BEGINNER_1_UNITS },
      { book: WorkbookBook.BEGINNER, order: 2, units: SPANISH_BEGINNER_2_UNITS },
      { book: WorkbookBook.BEGINNER, order: 3, units: SPANISH_BEGINNER_3_UNITS },
      { book: WorkbookBook.GRAMMAR, order: 1, units: SPANISH_GRAMMAR_1_UNITS },
      { book: WorkbookBook.GRAMMAR, order: 2, units: SPANISH_GRAMMAR_2_UNITS },
    ],
  },
];

export async function seedWorkbook(prisma: PrismaClient): Promise<void> {
  for (const workbook of WORKBOOKS) {
    const language = await prisma.language.findUnique({
      where: { code: workbook.languageCode },
    });

    if (!language) {
      // Die Sprachen legt `seed.ts` vor diesem Aufruf an. Fehlt eine, ist das
      // ein Fehler in der Reihenfolge und keine Lücke, die man still übergeht.
      throw new Error(
        `Lehrwerk ${workbook.label}: Sprache "${workbook.languageCode}" fehlt – wird sie vor seedWorkbook() angelegt?`,
      );
    }

    let created = 0;
    let published = 0;
    let pages = 0;

    for (const seed of workbook.curriculum) {
      const showcase = workbook.showcase.find(
        (entry) => entry.book === seed.book && entry.order === seed.order,
      );

      const data = {
        title: seed.title,
        subtitle: seed.subtitle,
        description: seed.description,
        coverEmoji: seed.coverEmoji,
        goals: seed.goals,
        estimatedMinutes: seed.estimatedMinutes,
        isPublished: Boolean(showcase),
      };

      const chapter = await prisma.chapter.upsert({
        where: {
          languageId_book_order: {
            languageId: language.id,
            book: seed.book,
            order: seed.order,
          },
        },
        create: { languageId: language.id, book: seed.book, level: seed.level, order: seed.order, ...data },
        update: { level: seed.level, ...data },
      });

      created += 1;
      if (!showcase) continue;
      published += 1;

      // Seiten vollständig ersetzen – so wirken Textkorrekturen sofort.
      await prisma.chapterUnit.deleteMany({ where: { chapterId: chapter.id } });

      for (const unit of showcase.units) {
        await prisma.chapterUnit.create({
          data: {
            chapterId: chapter.id,
            order: unit.order,
            title: unit.title,
            subtitle: unit.subtitle,
            estimatedMinutes: unit.estimatedMinutes,
            content: unit.content as unknown as Prisma.InputJsonValue,
          },
        });
        pages += 1;
      }
    }

    console.log(
      `  Lehrwerk ${workbook.label}: ${created} Kapitel (${published} veröffentlicht, ${pages} Seiten)`,
    );
  }
}
