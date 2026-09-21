import { PrismaClient, Prisma, WorkbookBook } from '@prisma/client';
import { CURRICULUM, type ChapterSeed } from './curriculum';
import { BEGINNER_1_UNITS, type UnitSeed } from './chapter-beginner-1';
import { GRAMMAR_1_UNITS } from './chapter-grammar-1';
import { SPANISH_CURRICULUM } from './spanish-curriculum';
import { SPANISH_BEGINNER_1_UNITS } from './spanish-chapter-beginner-1';
import { SPANISH_BEGINNER_2_UNITS } from './spanish-chapter-beginner-2';
import { SPANISH_BEGINNER_3_UNITS } from './spanish-chapter-beginner-3';
import { SPANISH_INTERMEDIATE_1_UNITS } from './spanish-chapter-intermediate-1';
import { SPANISH_INTERMEDIATE_2_UNITS } from './spanish-chapter-intermediate-2';
import { SPANISH_INTERMEDIATE_3_UNITS } from './spanish-chapter-intermediate-3';
import { SPANISH_INTERMEDIATE_4_UNITS } from './spanish-chapter-intermediate-4';
import { SPANISH_INTERMEDIATE_5_UNITS } from './spanish-chapter-intermediate-5';
import { SPANISH_INTERMEDIATE_6_UNITS } from './spanish-chapter-intermediate-6';
import { SPANISH_INTERMEDIATE_7_UNITS } from './spanish-chapter-intermediate-7';
import { SPANISH_INTERMEDIATE_8_UNITS } from './spanish-chapter-intermediate-8';
import { SPANISH_INTERMEDIATE_9_UNITS } from './spanish-chapter-intermediate-9';
import { SPANISH_INTERMEDIATE_10_UNITS } from './spanish-chapter-intermediate-10';
import { SPANISH_INTERMEDIATE_11_UNITS } from './spanish-chapter-intermediate-11';
import { SPANISH_INTERMEDIATE_12_UNITS } from './spanish-chapter-intermediate-12';
import { SPANISH_ADVANCED_1_UNITS } from './spanish-chapter-advanced-1';
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
      // Der Intermediate-Band ist vollständig: B1 stellt die Kapitel 1 bis 6,
      // B2 die Kapitel 7 bis 12.
      { book: WorkbookBook.INTERMEDIATE, order: 1, units: SPANISH_INTERMEDIATE_1_UNITS },
      { book: WorkbookBook.INTERMEDIATE, order: 2, units: SPANISH_INTERMEDIATE_2_UNITS },
      { book: WorkbookBook.INTERMEDIATE, order: 3, units: SPANISH_INTERMEDIATE_3_UNITS },
      { book: WorkbookBook.INTERMEDIATE, order: 4, units: SPANISH_INTERMEDIATE_4_UNITS },
      { book: WorkbookBook.INTERMEDIATE, order: 5, units: SPANISH_INTERMEDIATE_5_UNITS },
      { book: WorkbookBook.INTERMEDIATE, order: 6, units: SPANISH_INTERMEDIATE_6_UNITS },
      { book: WorkbookBook.INTERMEDIATE, order: 7, units: SPANISH_INTERMEDIATE_7_UNITS },
      { book: WorkbookBook.INTERMEDIATE, order: 8, units: SPANISH_INTERMEDIATE_8_UNITS },
      { book: WorkbookBook.INTERMEDIATE, order: 9, units: SPANISH_INTERMEDIATE_9_UNITS },
      { book: WorkbookBook.INTERMEDIATE, order: 10, units: SPANISH_INTERMEDIATE_10_UNITS },
      { book: WorkbookBook.INTERMEDIATE, order: 11, units: SPANISH_INTERMEDIATE_11_UNITS },
      { book: WorkbookBook.INTERMEDIATE, order: 12, units: SPANISH_INTERMEDIATE_12_UNITS },
      { book: WorkbookBook.ADVANCED, order: 1, units: SPANISH_ADVANCED_1_UNITS },
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
    let dropped = 0;

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
        create: {
          languageId: language.id,
          book: seed.book,
          level: seed.level,
          order: seed.order,
          ...data,
        },
        update: { level: seed.level, ...data },
      });

      created += 1;
      if (!showcase) continue;
      published += 1;

      // Seiten über (chapterId, order) aktualisieren statt löschen und neu
      // anlegen. Der Unterschied ist nicht kosmetisch: An `ChapterUnit` hängt
      // `UnitProgress` mit `onDelete: Cascade` (siehe `schema.prisma`). Ein
      // Löschen nähme jeder Lernenden ihren Stand, ihre Antworten und ihre
      // Notizen zu dieser Seite mit – lokal egal, auf einer Datenbank mit
      // echten Nutzern ein nicht behebbarer Datenverlust. Beim Aktualisieren
      // bleibt die ID der Seite erhalten, und damit der Fortschritt daran.
      for (const unit of showcase.units) {
        const data = {
          title: unit.title,
          subtitle: unit.subtitle,
          estimatedMinutes: unit.estimatedMinutes,
          content: unit.content as unknown as Prisma.InputJsonValue,
        };

        await prisma.chapterUnit.upsert({
          where: { chapterId_order: { chapterId: chapter.id, order: unit.order } },
          create: { chapterId: chapter.id, order: unit.order, ...data },
          update: data,
        });
        pages += 1;
      }

      // Wurde ein Kapitel gekürzt, bleiben sonst die überzähligen Seiten
      // stehen. Nur diese verschwinden – der Fortschritt an ihnen ist
      // ohnehin gegenstandslos, weil es die Seite nicht mehr gibt.
      const removed = await prisma.chapterUnit.deleteMany({
        where: {
          chapterId: chapter.id,
          order: { notIn: showcase.units.map((unit) => unit.order) },
        },
      });
      dropped += removed.count;
    }

    console.log(
      `  Lehrwerk ${workbook.label}: ${created} Kapitel (${published} veröffentlicht, ${pages} Seiten` +
        `${dropped > 0 ? `, ${dropped} entfernt` : ''})`,
    );
  }
}
