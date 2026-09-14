import { PrismaClient, Prisma, WorkbookBook } from '@prisma/client';
import { CURRICULUM } from './curriculum';
import { BEGINNER_1_UNITS, type UnitSeed } from './chapter-beginner-1';
import { GRAMMAR_1_UNITS } from './chapter-grammar-1';

/**
 * Legt das Lehrwerk Deutsch als Fremdsprache an: drei Kursbücher zu je zwölf
 * Kapiteln und ein Grammatikbuch mit zwölf Kapiteln.
 *
 * Idempotent: Kapitel werden über (languageId, book, order) gefunden und
 * aktualisiert, Seiten der ausgearbeiteten Kapitel vor dem Neuschreiben
 * gelöscht. Ein zweiter Lauf erzeugt keine Duplikate.
 *
 * Veröffentlicht wird nur, was auch Inhalt hat – die übrigen Kapitel bleiben
 * als Gerüst unveröffentlicht und stehen in der App ausgegraut im
 * Inhaltsverzeichnis, damit der Aufbau des Buchs von Anfang an sichtbar ist.
 */
const SHOWCASE_UNITS: Array<{ book: WorkbookBook; order: number; units: UnitSeed[] }> = [
  { book: WorkbookBook.BEGINNER, order: 1, units: BEGINNER_1_UNITS },
  { book: WorkbookBook.GRAMMAR, order: 1, units: GRAMMAR_1_UNITS },
];

export async function seedWorkbook(prisma: PrismaClient): Promise<void> {
  const german = await prisma.language.upsert({
    where: { code: 'de' },
    create: {
      code: 'de',
      name: 'Deutsch',
      nativeName: 'Deutsch',
      flagEmoji: '🇩🇪',
      sortOrder: 0,
    },
    update: { name: 'Deutsch', nativeName: 'Deutsch', flagEmoji: '🇩🇪', sortOrder: 0 },
  });

  let created = 0;
  let published = 0;
  let pages = 0;

  for (const seed of CURRICULUM) {
    const showcase = SHOWCASE_UNITS.find(
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
          languageId: german.id,
          book: seed.book,
          order: seed.order,
        },
      },
      create: { languageId: german.id, book: seed.book, level: seed.level, order: seed.order, ...data },
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

  console.log(`  Lehrwerk Deutsch: ${created} Kapitel (${published} veröffentlicht, ${pages} Seiten)`);
}
