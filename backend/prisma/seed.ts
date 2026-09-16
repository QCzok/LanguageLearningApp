/**
 * Seed-Daten für die Entwicklung.
 *
 * Idempotent: mehrfaches Ausführen legt nichts doppelt an (upsert über natürliche
 * Schlüssel). Inhalte sind bewusst klein gehalten – sie zeigen die Struktur, die
 * produktive Redaktion füllt später über das Editor-Backend nach.
 */
import { CefrLevel, MediaType, Prisma, PrismaClient } from '@prisma/client';
import * as argon2 from 'argon2';
import type { LibrarySection } from '@lingua/shared';
import { seedWorkbook } from './seed/workbook';
import {
  MEDIA_SCRIPT_BY_TITLE,
  estimatedDurationSec,
  mediaSlug,
  transcriptOf,
} from './seed/media-scripts';
import { LIBRARY_SEEDS_DE, LIBRARY_SEEDS_EN, type LibraryContentSeed } from './seed/library';
import { PLACEMENT_SEEDS_DE, PLACEMENT_SEEDS_EN, PLACEMENT_SEEDS_ES } from './seed/placement';
import { GERMAN_VOCAB_A1 } from './seed/german-vocab-a1';
import { GERMAN_VOCAB_A2 } from './seed/german-vocab-a2';
import { GERMAN_VOCAB_B1 } from './seed/german-vocab-b1';
import { GERMAN_VOCAB_B2 } from './seed/german-vocab-b2';
import { GERMAN_VOCAB_C1 } from './seed/german-vocab-c1';
import { GERMAN_VOCAB_C2 } from './seed/german-vocab-c2';
import { SPANISH_VOCAB_A1 } from './seed/spanish-vocab-a1';
import { SPANISH_VOCAB_A2 } from './seed/spanish-vocab-a2';
import { SPANISH_VOCAB_B1 } from './seed/spanish-vocab-b1';
import { SPANISH_VOCAB_B2 } from './seed/spanish-vocab-b2';
import { SPANISH_VOCAB_C1 } from './seed/spanish-vocab-c1';
import { SPANISH_VOCAB_C2 } from './seed/spanish-vocab-c2';

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

interface VocabDeckSeed {
  title: string;
  level: CefrLevel;
  description: string;
  iconEmoji: string;
  /** Je Eintrag: [Begriff, Übersetzung, Beispielsatz, Beispielübersetzung, Wortart] */
  items: string[][];
}

/** Legt System-Vokabeldecks für eine Sprache an oder aktualisiert sie. */
async function seedVocabDecks(languageId: string, deckSeeds: VocabDeckSeed[]): Promise<void> {
  // System-Decks, die nicht mehr im Seed vorkommen, verschwinden mit – sonst
  // blieben nach einer Umbenennung/Neustrukturierung alte Decks samt Wörtern
  // liegen und die Gesamtzahl pro Niveau stimmt nicht mehr.
  await prisma.vocabDeck.deleteMany({
    where: { languageId, isSystem: true, title: { notIn: deckSeeds.map((seed) => seed.title) } },
  });

  for (const [index, seed] of deckSeeds.entries()) {
    const existing = await prisma.vocabDeck.findFirst({
      where: { languageId, title: seed.title, isSystem: true },
    });

    const deck = existing
      ? await prisma.vocabDeck.update({
          where: { id: existing.id },
          data: { description: seed.description, level: seed.level, sortOrder: index },
        })
      : await prisma.vocabDeck.create({
          data: {
            languageId,
            level: seed.level,
            title: seed.title,
            description: seed.description,
            iconEmoji: seed.iconEmoji,
            isSystem: true,
            sortOrder: index,
          },
        });

    await prisma.vocabItem.deleteMany({ where: { deckId: deck.id } });
    await prisma.vocabItem.createMany({
      data: seed.items.map(([term, translation, example, exampleTranslation, pos], itemIndex) => ({
        deckId: deck.id,
        term,
        translation,
        exampleSentence: example,
        exampleTranslation,
        partOfSpeech: pos,
        tags: [seed.level],
        sortOrder: itemIndex,
      })),
    });
  }
}

async function main(): Promise<void> {
  console.log('Seed startet …');

  // ------------------------------------------------------------- Sprachen
  const languageSeeds = [
    // Gleiche Daten wie in seed/workbook.ts – idempotent per upsert über den
    // Code, deshalb spielt es keine Rolle, welcher der beiden Seed-Läufe die
    // Sprache zuerst anlegt.
    { code: 'de', name: 'Deutsch', nativeName: 'Deutsch', flagEmoji: '🇩🇪', sortOrder: 0 },
    { code: 'en', name: 'Englisch', nativeName: 'English', flagEmoji: '🇬🇧', sortOrder: 1 },
    { code: 'es', name: 'Spanisch', nativeName: 'Español', flagEmoji: '🇪🇸', sortOrder: 2 },
    { code: 'fr', name: 'Französisch', nativeName: 'Français', flagEmoji: '🇫🇷', sortOrder: 3 },
    { code: 'it', name: 'Italienisch', nativeName: 'Italiano', flagEmoji: '🇮🇹', sortOrder: 4 },
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
  const deckSeeds = [
    {
      title: 'Erste Wörter',
      level: CefrLevel.A1,
      description: 'Die 20 wichtigsten Wörter für den Anfang',
      iconEmoji: '🌱',
      items: [
        ['hello', 'hallo', 'Hello, how are you?', 'Hallo, wie geht es dir?', 'interjection'],
        ['thank you', 'danke', 'Thank you very much.', 'Vielen Dank.', 'phrase'],
        ['please', 'bitte', 'Two coffees, please.', 'Zwei Kaffee, bitte.', 'adverb'],
        ['house', 'das Haus', 'Our house is small.', 'Unser Haus ist klein.', 'noun'],
        ['water', 'das Wasser', 'I drink water every day.', 'Ich trinke jeden Tag Wasser.', 'noun'],
        ['friend', 'der Freund', 'She is my best friend.', 'Sie ist meine beste Freundin.', 'noun'],
        ['to eat', 'essen', 'We eat at seven.', 'Wir essen um sieben.', 'verb'],
        ['to work', 'arbeiten', 'I work from home.', 'Ich arbeite von zu Hause.', 'verb'],
        ['big', 'groß', 'That is a big city.', 'Das ist eine große Stadt.', 'adjective'],
        ['small', 'klein', 'A small problem.', 'Ein kleines Problem.', 'adjective'],
      ],
    },
    {
      title: 'Alltag & Einkaufen',
      level: CefrLevel.A2,
      description: 'Wortschatz für Supermarkt, Bahn und Restaurant',
      iconEmoji: '🛒',
      items: [
        ['receipt', 'der Kassenbon', 'Can I have the receipt?', 'Kann ich den Kassenbon haben?', 'noun'],
        ['discount', 'der Rabatt', 'Is there a discount?', 'Gibt es einen Rabatt?', 'noun'],
        ['to order', 'bestellen', 'I would like to order.', 'Ich möchte bestellen.', 'verb'],
        ['platform', 'das Gleis', 'The train leaves from platform 4.', 'Der Zug fährt von Gleis 4.', 'noun'],
        ['delay', 'die Verspätung', 'The train has a delay.', 'Der Zug hat Verspätung.', 'noun'],
        ['to try on', 'anprobieren', 'May I try this on?', 'Darf ich das anprobieren?', 'phrasal verb'],
        ['cash', 'das Bargeld', 'Do you take cash?', 'Nehmen Sie Bargeld?', 'noun'],
        ['refund', 'die Rückerstattung', 'I would like a refund.', 'Ich hätte gern eine Rückerstattung.', 'noun'],
      ],
    },
    {
      title: 'Arbeit & Büro',
      level: CefrLevel.B1,
      description: 'Formulierungen für Meetings, E-Mails und Small Talk',
      iconEmoji: '💼',
      items: [
        ['deadline', 'die Frist', 'We missed the deadline.', 'Wir haben die Frist verpasst.', 'noun'],
        ['to schedule', 'terminieren', 'Let us schedule a call.', 'Lass uns einen Anruf terminieren.', 'verb'],
        ['agenda', 'die Tagesordnung', 'What is on the agenda?', 'Was steht auf der Tagesordnung?', 'noun'],
        ['to follow up', 'nachfassen', 'I will follow up tomorrow.', 'Ich fasse morgen nach.', 'phrasal verb'],
        ['stakeholder', 'die Interessengruppe', 'We informed all stakeholders.', 'Wir haben alle Interessengruppen informiert.', 'noun'],
        ['workload', 'die Arbeitsbelastung', 'My workload is heavy.', 'Meine Arbeitsbelastung ist hoch.', 'noun'],
        ['to delegate', 'delegieren', 'She delegates well.', 'Sie delegiert gut.', 'verb'],
        ['feasible', 'machbar', 'That is not feasible.', 'Das ist nicht machbar.', 'adjective'],
      ],
    },
    {
      title: 'Meinung & Diskussion',
      level: CefrLevel.B2,
      description: 'Argumentieren, widersprechen, abwägen',
      iconEmoji: '💬',
      items: [
        ['to argue', 'argumentieren', 'He argued convincingly.', 'Er hat überzeugend argumentiert.', 'verb'],
        ['on the contrary', 'im Gegenteil', 'On the contrary, it helped.', 'Im Gegenteil, es hat geholfen.', 'phrase'],
        ['to concede', 'einräumen', 'I concede that point.', 'Ich räume diesen Punkt ein.', 'verb'],
        ['bias', 'die Voreingenommenheit', 'The study shows bias.', 'Die Studie zeigt Voreingenommenheit.', 'noun'],
        ['compelling', 'überzeugend', 'A compelling argument.', 'Ein überzeugendes Argument.', 'adjective'],
        ['to undermine', 'untergraben', 'That undermines the claim.', 'Das untergräbt die Behauptung.', 'verb'],
      ],
    },
  ];

  /**
   * Deutsch als Fremdsprache: 250 Wörter pro Niveau (A1–C2), je fünf
   * Themenpakete zu 50 Wörtern – ausgelagert nach `seed/german-vocab-*.ts`,
   * damit diese Datei nicht auf mehrere tausend Zeilen anwächst.
   */
  const germanDeckSeeds = [
    ...GERMAN_VOCAB_A1,
    ...GERMAN_VOCAB_A2,
    ...GERMAN_VOCAB_B1,
    ...GERMAN_VOCAB_B2,
    ...GERMAN_VOCAB_C1,
    ...GERMAN_VOCAB_C2,
  ];

  /**
   * Spanisch als Fremdsprache: gleicher Aufbau wie die Deutsch-Stapel,
   * 250 Wörter pro Niveau (A1–C2) in fünf Themenpaketen zu 50 Wörtern.
   * Übersetzt wird hier ins Deutsche, weil die Oberfläche deutsch ist.
   */
  const spanishDeckSeeds = [
    ...SPANISH_VOCAB_A1,
    ...SPANISH_VOCAB_A2,
    ...SPANISH_VOCAB_B1,
    ...SPANISH_VOCAB_B2,
    ...SPANISH_VOCAB_C1,
    ...SPANISH_VOCAB_C2,
  ];

  await seedVocabDecks(en, deckSeeds);
  await seedVocabDecks(de, germanDeckSeeds);
  await seedVocabDecks(es, spanishDeckSeeds);

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

  // ------------------------------------------------------------ Mediathek
  const mediaSeeds = [
    {
      type: MediaType.DIALOGUE,
      level: CefrLevel.A1,
      title: 'At the Bakery',
      description: 'Ein kurzer Dialog: Brot kaufen, bezahlen, sich verabschieden.',
      tags: ['dialog', 'alltag'],
    },
    {
      type: MediaType.AUDIO_LESSON,
      level: CefrLevel.A2,
      title: 'Talking About Your Weekend',
      description: 'Redemittel und Übungen zum Past Simple im Gespräch.',
      tags: ['grammatik', 'past simple'],
    },
    {
      type: MediaType.PODCAST,
      level: CefrLevel.B1,
      title: 'Slow News: Working From Anywhere',
      description: 'Langsam gesprochene Nachrichtenfolge über ortsunabhängiges Arbeiten.',
      tags: ['podcast', 'arbeit'],
    },
    {
      type: MediaType.PODCAST,
      level: CefrLevel.B2,
      title: 'The Language Lab: How Accents Change',
      description: 'Interviewfolge über Sprachwandel und regionale Aussprache.',
      tags: ['podcast', 'linguistik'],
    },
  ];

  /**
   * Dasselbe Problem wie bei den Vokabeldecks: Ohne deutschsprachige Einträge
   * ist die Mediathek für ein aktives Deutsch-Profil leer. Gleiche vier
   * Formate und Niveaus wie beim Englisch-Set, nur inhaltlich auf Deutsch.
   */
  const mediaSeedsDe = [
    {
      type: MediaType.DIALOGUE,
      level: CefrLevel.A1,
      title: 'Beim Bäcker',
      description: 'Ein kurzer Dialog: Brot kaufen, bezahlen, sich verabschieden.',
      tags: ['dialog', 'alltag'],
    },
    {
      type: MediaType.AUDIO_LESSON,
      level: CefrLevel.A2,
      title: 'Vom Wochenende erzählen',
      description: 'Redemittel und Übungen zum Perfekt im Gespräch.',
      tags: ['grammatik', 'perfekt'],
    },
    {
      type: MediaType.PODCAST,
      level: CefrLevel.B1,
      title: 'Langsame Nachrichten: Von überall arbeiten',
      description: 'Langsam gesprochene Nachrichtenfolge über ortsunabhängiges Arbeiten.',
      tags: ['podcast', 'arbeit'],
    },
    {
      type: MediaType.PODCAST,
      level: CefrLevel.B2,
      title: 'Das Sprachlabor: Wie sich Akzente verändern',
      description: 'Interviewfolge über Sprachwandel und regionale Aussprache.',
      tags: ['podcast', 'linguistik'],
    },
  ];

  const mediaBase = process.env.MEDIA_BASE_URL ?? '/static';
  async function seedMediaItems(languageId: string, seeds: typeof mediaSeeds): Promise<void> {
    for (const seed of seeds) {
      const existing = await prisma.mediaItem.findFirst({
        where: { languageId, title: seed.title },
      });
      const slug = mediaSlug(seed.title);
      /*
        Transkript und Spieldauer stammen aus dem Sprechtext (siehe
        media-scripts.ts) – derselben Quelle, aus der `npm run media:tts` die
        Aufnahme erzeugt. Vorher standen hier frei gewählte Zahlen: Ein
        Eintrag behauptete 21 Minuten Spielzeit, während es überhaupt keine
        Datei gab. Die Dauer ist zunächst aus der Textlänge geschätzt; der
        Generator ersetzt sie durch die gemessene, sobald die MP3 existiert.
      */
      const script = MEDIA_SCRIPT_BY_TITLE.get(seed.title);
      const data = {
        languageId,
        level: seed.level,
        type: seed.type,
        title: seed.title,
        description: seed.description,
        durationSec: script ? estimatedDurationSec(script) : 0,
        tags: seed.tags,
        transcript: script ? transcriptOf(script) : null,
        audioUrl: `${mediaBase}/audio/${slug}.mp3`,
      };

      if (existing) {
        // Die Dauer wird hier bewusst auf die Schätzung zurückgesetzt. Den
        // genauen Wert trägt `npm run media:tts` nach – das Skript misst ihn
        // auch dann, wenn die Datei schon vorhanden ist und nicht neu
        // synthetisiert wird. Ein Sonderfall, der gemessene Werte im Seed
        // verteidigt, hätte hier nur die alten Fantasiezahlen konserviert.
        await prisma.mediaItem.update({ where: { id: existing.id }, data });
      } else {
        await prisma.mediaItem.create({ data });
      }
    }
  }

  const mediaSeedsEs = [
    {
      type: MediaType.DIALOGUE,
      level: CefrLevel.A1,
      title: 'En la panadería',
      description: 'Ein kurzer Dialog: Brot kaufen, bezahlen, sich verabschieden.',
      tags: ['dialog', 'alltag'],
    },
    {
      type: MediaType.AUDIO_LESSON,
      level: CefrLevel.A2,
      title: 'Contar el fin de semana',
      description: 'Redemittel und Übungen zum Indefinido im Gespräch.',
      tags: ['grammatik', 'indefinido'],
    },
    {
      type: MediaType.PODCAST,
      level: CefrLevel.B1,
      title: 'Noticias lentas: trabajar desde cualquier lugar',
      description: 'Langsam gesprochene Nachrichtenfolge über ortsunabhängiges Arbeiten.',
      tags: ['podcast', 'arbeit'],
    },
    {
      type: MediaType.PODCAST,
      level: CefrLevel.B2,
      title: 'El laboratorio de lenguas: cómo cambian los acentos',
      description: 'Interviewfolge über Sprachwandel und die Varietäten des Spanischen.',
      tags: ['podcast', 'linguistik'],
    },
  ];

  await seedMediaItems(en, mediaSeeds);
  await seedMediaItems(de, mediaSeedsDe);
  await seedMediaItems(es, mediaSeedsEs);

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

  for (const user of [demo, premium]) {
    await prisma.learningProfile.upsert({
      where: { userId_languageId: { userId: user.id, languageId: en } },
      create: {
        userId: user.id,
        languageId: en,
        level: CefrLevel.A2,
        levelSource: 'SELF_SELECTED',
        isActive: true,
      },
      update: { isActive: true },
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
