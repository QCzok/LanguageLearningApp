import { PrismaClient, Prisma } from '@prisma/client';
import { CURRICULUM } from './curriculum';
import { CHAPTER_A1_1_UNITS } from './chapter-a1-1';

/**
 * Legt den Lehrplan für Deutsch als Fremdsprache an.
 *
 * Idempotent: Kapitel werden über (languageId, level, order) gefunden und
 * aktualisiert, Einheiten des ausgearbeiteten Kapitels vor dem Neuschreiben
 * gelöscht. Ein zweiter Lauf erzeugt keine Duplikate.
 *
 * Veröffentlicht wird nur, was auch Inhalt hat – die übrigen 35 Kapitel bleiben
 * als Gerüst unveröffentlicht und tauchen in der App noch nicht auf.
 */
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

  for (const seed of CURRICULUM) {
    const isShowcase = seed.level === 'A1' && seed.order === 1;

    const chapter = await prisma.chapter.upsert({
      where: {
        languageId_level_order: {
          languageId: german.id,
          level: seed.level,
          order: seed.order,
        },
      },
      create: {
        languageId: german.id,
        level: seed.level,
        order: seed.order,
        title: seed.title,
        subtitle: seed.subtitle,
        description: seed.description,
        coverEmoji: seed.coverEmoji,
        goals: seed.goals,
        estimatedMinutes: seed.estimatedMinutes,
        isPublished: isShowcase,
      },
      update: {
        title: seed.title,
        subtitle: seed.subtitle,
        description: seed.description,
        coverEmoji: seed.coverEmoji,
        goals: seed.goals,
        estimatedMinutes: seed.estimatedMinutes,
        isPublished: isShowcase,
      },
    });

    created += 1;
    if (isShowcase) published += 1;

    if (!isShowcase) continue;

    // Einheiten vollständig ersetzen – so wirken Textkorrekturen sofort.
    await prisma.chapterUnit.deleteMany({ where: { chapterId: chapter.id } });

    for (const unit of CHAPTER_A1_1_UNITS) {
      await prisma.chapterUnit.create({
        data: {
          chapterId: chapter.id,
          section: unit.section,
          order: unit.order,
          title: unit.title,
          subtitle: unit.subtitle,
          estimatedMinutes: unit.estimatedMinutes,
          content: unit.content as unknown as Prisma.InputJsonValue,
        },
      });
    }
  }

  console.log(
    `  Lehrplan Deutsch: ${created} Kapitel (${published} veröffentlicht, ${CHAPTER_A1_1_UNITS.length} Lerneinheiten)`,
  );
}
