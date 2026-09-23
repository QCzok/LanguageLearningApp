/**
 * Seed-Daten für die Entwicklung.
 *
 * Idempotent: mehrfaches Ausführen legt nichts doppelt an (upsert über natürliche
 * Schlüssel). Inhalte sind bewusst klein gehalten – sie zeigen die Struktur, die
 * produktive Redaktion füllt später über das Editor-Backend nach.
 */
import { CefrLevel, Prisma, PrismaClient } from '@prisma/client';
import * as argon2 from 'argon2';
import type { LibrarySection } from '@lingua/shared';
import { seedWorkbook } from './seed/workbook';
import { seedVideos } from './seed/videos';
import { LIBRARY_SEEDS_DE, LIBRARY_SEEDS_EN, LIBRARY_SEEDS_ES, type LibraryContentSeed } from './seed/library';
import { PLACEMENT_SEEDS_DE, PLACEMENT_SEEDS_EN, PLACEMENT_SEEDS_ES } from './seed/placement';
import { seedVocabulary } from './seed/vocab';

const prisma = new PrismaClient();

/**
 * Lesegeschwindigkeit in Wörtern pro Minute, nach Niveau gestaffelt.
 *
 * Muttersprachler lesen rund 200–250 WpM; Lernende liegen deutlich darunter und
 * lesen auf niedrigen Stufen fast Wort für Wort. Eine feste Rate würde einen
 * A2-Text als „1 min" ausweisen, obwohl er realistisch das Dreifache braucht.
 */
const WORDS_PER_MINUTE: Record<CefrLevel, number> = {
  A1: 60,
  A2: 80,
  B1: 110,
  B2: 140,
  C1: 170,
  C2: 200,
};

function estimateReadingMinutes(wordCount: number, level: CefrLevel): number {
  return Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE[level]));
}

async function main(): Promise<void> {
  console.log('Seed startet …');

  // ------------------------------------------------------------- Sprachen
  const languageSeeds = [
    // Gleiche Daten wie in seed/workbook.ts – idempotent per upsert über den
    // Code, deshalb spielt es keine Rolle, welcher der beiden Seed-Läufe die
    // Sprache zuerst anlegt.
    //
    // Lernen lassen sich nur Deutsch, Englisch und Spanisch. `isLearnable`
    // steht bei allen Sprachen ausdrücklich da, damit ein erneuter Seed-Lauf
    // den Stand in einer bestehenden Datenbank auch wieder umstellt.
    {
      code: 'de',
      name: 'Deutsch',
      nativeName: 'Deutsch',
      flagEmoji: '🇩🇪',
      sortOrder: 0,
      isLearnable: true,
    },
    {
      code: 'en',
      name: 'Englisch',
      nativeName: 'English',
      flagEmoji: '🇬🇧',
      sortOrder: 1,
      isLearnable: true,
    },
    {
      code: 'es',
      name: 'Spanisch',
      nativeName: 'Español',
      flagEmoji: '🇪🇸',
      sortOrder: 2,
      isLearnable: true,
    },
    // Nur als Muttersprache wählbar (siehe `isLearnable`): Für sie gibt es
    // keinen eigenen Kurs – kein Kapitel, kein Vokabelstapel, kein
    // Einstufungstest –, deshalb dürfen sie in der Lernsprachen-Auswahl
    // nicht auftauchen.
    {
      code: 'fr',
      name: 'Französisch',
      nativeName: 'Français',
      flagEmoji: '🇫🇷',
      sortOrder: 3,
      isLearnable: false,
    },
    {
      code: 'it',
      name: 'Italienisch',
      nativeName: 'Italiano',
      flagEmoji: '🇮🇹',
      sortOrder: 4,
      isLearnable: false,
    },
    {
      code: 'uk',
      name: 'Ukrainisch',
      nativeName: 'Українська',
      flagEmoji: '🇺🇦',
      sortOrder: 5,
      isLearnable: false,
    },
    {
      code: 'pl',
      name: 'Polnisch',
      nativeName: 'Polski',
      flagEmoji: '🇵🇱',
      sortOrder: 6,
      isLearnable: false,
    },
    {
      code: 'tr',
      name: 'Türkisch',
      nativeName: 'Türkçe',
      flagEmoji: '🇹🇷',
      sortOrder: 7,
      isLearnable: false,
    },
  ];

  const languages = new Map<string, string>();
  for (const seed of languageSeeds) {
    const language = await prisma.language.upsert({
      where: { code: seed.code },
      create: seed,
      update: seed,
    });
    languages.set(seed.code, language.id);
  }
  const de = languages.get('de')!;
  const en = languages.get('en')!;
  const es = languages.get('es')!;

  // ------------------------------------------------------ Einstufungstest
  // Beide Tests haben denselben Aufbau: fünf Fragen je Niveau, A1 bis C2
  // (siehe `seed/placement`). Die Reihenfolge im Array ist die Reihenfolge im
  // Test – `sortOrder` hält sie fest, damit die Leiter nicht durcheinander
  // gerät, wenn die Datenbank anders sortiert.
  for (const [languageId, seeds] of [
    [de, PLACEMENT_SEEDS_DE],
    [en, PLACEMENT_SEEDS_EN],
    [es, PLACEMENT_SEEDS_ES],
  ] as const) {
    await prisma.placementQuestion.deleteMany({ where: { languageId } });
    await prisma.placementQuestion.createMany({
      data: seeds.map((seed, index) => ({
        languageId,
        level: seed.level,
        prompt: seed.prompt,
        helperText: seed.helperText ?? null,
        options: seed.options,
        correctIndex: seed.correctIndex,
        sortOrder: index,
      })),
    });
  }

  // ------------------------------------------------------------- Vokabeln
  // Ein gemeinsamer Wortschatz für alle Lernsprachen: sechs Niveaus mit je
  // acht Kategorien zu 50 Begriffen, jeder Begriff in allen Oberflächen-
  // sprachen hinterlegt (siehe seed/vocab). Daraus entstehen die Stapel für
  // Deutsch, Englisch und Spanisch – mit Übersetzungen in jede Muttersprache.
  await seedVocabulary(prisma, { de, en, es });

  // ----------------------------------------------------------- Bibliothek
  async function seedLibraryContent(languageId: string, seeds: LibraryContentSeed[]): Promise<void> {
    for (const seed of seeds) {
      const existing = await prisma.libraryContent.findFirst({
        where: { languageId, title: seed.title },
      });

      const body: LibrarySection[] = seed.sections.map((section, index) => ({
        id: `sec-${index}`,
        text: section.text,
        translations: section.translations,
        glossary: section.glossary,
      }));

      const wordCount = seed.sections.reduce((sum, section) => sum + section.text.split(/\s+/).length, 0);
      const data = {
        languageId,
        level: seed.level,
        type: seed.type,
        title: seed.title,
        summary: seed.summary,
        body: body as unknown as Prisma.InputJsonValue,
        author: seed.author,
        tags: seed.tags,
        wordCount,
        estimatedMinutes: estimateReadingMinutes(wordCount, seed.level),
      };

      const content = existing
        ? await prisma.libraryContent.update({ where: { id: existing.id }, data })
        : await prisma.libraryContent.create({ data });

      await prisma.libraryExercise.deleteMany({ where: { contentId: content.id } });
      await prisma.libraryExercise.createMany({
        data: seed.exercises.map((exercise, index) => ({
          contentId: content.id,
          order: index,
          type: exercise.type,
          question: exercise.question,
          options: exercise.options,
          correctIndex: exercise.correctIndex,
          explanation: exercise.explanation,
        })),
      });
    }
  }

  await seedLibraryContent(en, LIBRARY_SEEDS_EN);
  await seedLibraryContent(de, LIBRARY_SEEDS_DE);
  await seedLibraryContent(es, LIBRARY_SEEDS_ES);

  // ------------------------------------------------------------ Mediathek
  // Der Katalog ist erzeugt (`npm run videos:refresh`) und steht in
  // seed/video-catalog.ts. Das Schreiben liegt in seed/videos.ts, weil es auch
  // allein gebraucht wird – beim Ausrollen (siehe `npm run videos:seed`).
  await seedVideos(prisma);

  // ------------------------------------------------------------ Lehrplan
  await seedWorkbook(prisma);

  // --------------------------------------------------------- Demo-Konten
  const demoPassword = await argon2.hash('Passwort123');

  const demo = await prisma.user.upsert({
    where: { email: 'demo@lingua.app' },
    create: {
      email: 'demo@lingua.app',
      passwordHash: demoPassword,
      displayName: 'Demo',
      nativeLanguage: 'de',
      onboardingCompleted: true,
    },
    update: {},
  });

  const premium = await prisma.user.upsert({
    where: { email: 'premium@lingua.app' },
    create: {
      email: 'premium@lingua.app',
      passwordHash: demoPassword,
      displayName: 'Premium-Demo',
      nativeLanguage: 'de',
      plan: 'PREMIUM',
      premiumUntil: new Date(Date.now() + 365 * 86_400_000),
      onboardingCompleted: true,
    },
    update: { plan: 'PREMIUM', premiumUntil: new Date(Date.now() + 365 * 86_400_000) },
  });

  /*
    Das Startprofil der Demo-Konten.

    Der Seed läuft auch auf einer Datenbank, in der schon gearbeitet wurde.
    Vorher setzte er das Englisch-Profil dabei hart auf aktiv, ohne die
    anderen abzuschalten – wer in der App auf Deutsch gewechselt hatte, hatte
    danach zwei aktive Profile, und App und Dashboard suchten sich
    verschiedene davon aus. Deshalb läuft das Aktivieren hier durch dieselbe
    Transaktion wie im `UsersService`: erst alle abschalten, dann genau eines
    einschalten. Der partielle Unique-Index aus der Migration
    `20260916150000_one_active_profile_per_user` würde einen Rückfall ohnehin
    abweisen.

    Ein bereits aktives Profil in einer anderen Sprache bleibt unangetastet:
    Wer die Demo-Konten zum Deutschlernen benutzt, soll nach einem erneuten
    Seed nicht wieder bei Englisch landen.
  */
  for (const user of [demo, premium]) {
    await prisma.$transaction(async (tx) => {
      const alreadyActive = await tx.learningProfile.findFirst({
        where: { userId: user.id, isActive: true },
      });
      const makeActive = !alreadyActive || alreadyActive.languageId === en;

      if (makeActive) {
        await tx.learningProfile.updateMany({
          where: { userId: user.id, isActive: true },
          data: { isActive: false },
        });
      }

      await tx.learningProfile.upsert({
        where: { userId_languageId: { userId: user.id, languageId: en } },
        create: {
          userId: user.id,
          languageId: en,
          level: CefrLevel.A2,
          levelSource: 'SELF_SELECTED',
          isActive: makeActive,
        },
        update: { isActive: makeActive },
      });
    });
  }

  console.log('Seed fertig.');
  console.log('  Demo-Konto:    demo@lingua.app / Passwort123');
  console.log('  Premium-Konto: premium@lingua.app / Passwort123');
}

main()
  .catch((error) => {
    console.error('Seed fehlgeschlagen:', error);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
