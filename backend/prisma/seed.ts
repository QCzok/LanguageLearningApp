/**
 * Seed-Daten für die Entwicklung.
 *
 * Idempotent: mehrfaches Ausführen legt nichts doppelt an (upsert über natürliche
 * Schlüssel). Inhalte sind bewusst klein gehalten – sie zeigen die Struktur, die
 * produktive Redaktion füllt später über das Editor-Backend nach.
 */
import { CefrLevel, ExerciseType, LibraryType, MediaType, PrismaClient } from '@prisma/client';
import * as argon2 from 'argon2';
import { seedWorkbook } from './seed/workbook';

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
  const en = languages.get('en')!;
  const es = languages.get('es')!;

  // ------------------------------------------------------ Einstufungstest
  const placementSeeds: Array<{
    level: CefrLevel;
    prompt: string;
    helperText?: string;
    options: string[];
    correctIndex: number;
  }> = [
    {
      level: 'A1',
      prompt: 'Choose the correct form: "She ___ a teacher."',
      options: ['is', 'are', 'am', 'be'],
      correctIndex: 0,
    },
    {
      level: 'A1',
      prompt: 'What is the plural of "child"?',
      options: ['childs', 'children', 'childrens', 'childes'],
      correctIndex: 1,
    },
    {
      level: 'A1',
      prompt: 'Complete: "I ___ coffee every morning."',
      options: ['drinks', 'drinking', 'drink', 'drank'],
      correctIndex: 2,
    },
    {
      level: 'A1',
      prompt: 'Which word means "Haus"?',
      options: ['horse', 'house', 'hose', 'mouse'],
      correctIndex: 1,
    },
    {
      level: 'A2',
      prompt: 'Complete: "Yesterday I ___ to the cinema."',
      options: ['go', 'gone', 'went', 'going'],
      correctIndex: 2,
    },
    {
      level: 'A2',
      prompt: 'Choose the comparative: "This book is ___ than that one."',
      options: ['more interesting', 'interestinger', 'most interesting', 'the interesting'],
      correctIndex: 0,
    },
    {
      level: 'A2',
      prompt: 'Complete: "There ___ any milk in the fridge."',
      options: ["isn't", "aren't", "wasn't been", 'not is'],
      correctIndex: 0,
    },
    {
      level: 'A2',
      prompt: 'Which sentence is correct?',
      options: [
        'I am living here since 2019.',
        'I live here since 2019.',
        'I have lived here since 2019.',
        'I lived here since 2019.',
      ],
      correctIndex: 2,
    },
    {
      level: 'B1',
      prompt: 'Complete: "If I had more time, I ___ travel more often."',
      options: ['will', 'would', 'have', 'did'],
      correctIndex: 1,
    },
    {
      level: 'B1',
      prompt: 'Choose the best phrasal verb: "Could you ___ the meeting to next week?"',
      options: ['put off', 'put on', 'put up', 'put down'],
      correctIndex: 0,
    },
    {
      level: 'B1',
      prompt: 'Passive voice: "They built the bridge in 1890." →',
      options: [
        'The bridge was built in 1890.',
        'The bridge is built in 1890.',
        'The bridge has built in 1890.',
        'The bridge were built in 1890.',
      ],
      correctIndex: 0,
    },
    {
      level: 'B1',
      prompt: 'Complete: "She suggested ___ a different approach."',
      options: ['to try', 'trying', 'try', 'tried'],
      correctIndex: 1,
    },
    {
      level: 'B2',
      prompt: 'Complete: "Hardly ___ the door when the phone rang."',
      options: ['I had closed', 'had I closed', 'I closed', 'did I close'],
      correctIndex: 1,
    },
    {
      level: 'B2',
      prompt: 'Which word best fits: "The evidence was largely ___ ."',
      options: ['circumstantial', 'circumstance', 'circumstantially', 'circumstanced'],
      correctIndex: 0,
    },
    {
      level: 'B2',
      prompt: 'Choose the correct sentence.',
      options: [
        'I wish I would have known earlier.',
        'I wish I had known earlier.',
        'I wish I knew it earlier yesterday.',
        'I wish I have known earlier.',
      ],
      correctIndex: 1,
    },
    {
      level: 'B2',
      prompt: 'Complete: "The proposal is contingent ___ approval from the board."',
      options: ['of', 'to', 'on', 'in'],
      correctIndex: 2,
    },
    {
      level: 'C1',
      prompt: 'Choose the closest meaning of "to hedge one\'s bets".',
      options: [
        'to commit fully to one option',
        'to reduce risk by keeping options open',
        'to gamble recklessly',
        'to abandon a plan',
      ],
      correctIndex: 1,
    },
    {
      level: 'C1',
      prompt: 'Complete: "Not until much later ___ the full extent of the damage."',
      options: [
        'we realised',
        'did we realise',
        'we had realised',
        'realised we',
      ],
      correctIndex: 1,
    },
    {
      level: 'C1',
      prompt: 'Which register is most formal?',
      options: [
        'We should look into it.',
        "Let's check it out.",
        'The matter warrants further investigation.',
        'Someone ought to have a look.',
      ],
      correctIndex: 2,
    },
    {
      level: 'C1',
      prompt: 'Complete: "His argument, ___ compelling, ultimately rested on flawed data."',
      options: ['however', 'albeit', 'whereas', 'despite'],
      correctIndex: 1,
    },
    {
      level: 'C2',
      prompt: 'Identify the sentence with correct subjunctive usage.',
      options: [
        'It is imperative that he submits the report.',
        'It is imperative that he submit the report.',
        'It is imperative that he will submit the report.',
        'It is imperative that he submitted the report.',
      ],
      correctIndex: 1,
    },
    {
      level: 'C2',
      prompt: 'What does "to damn with faint praise" mean?',
      options: [
        'to criticise openly',
        'to praise so mildly that it implies criticism',
        'to give overwhelming praise',
        'to remain silent about a failure',
      ],
      correctIndex: 1,
    },
    {
      level: 'C2',
      prompt: 'Choose the most idiomatic completion: "The reforms were, ___, a resounding success."',
      options: ['by and large', 'by and by', 'large and by', 'at large by'],
      correctIndex: 0,
    },
    {
      level: 'C2',
      prompt: 'Which sentence contains a mixed conditional?',
      options: [
        'If I had studied medicine, I would be a doctor now.',
        'If I study medicine, I will be a doctor.',
        'If I studied medicine, I would be a doctor.',
        'If I had studied medicine, I would have been a doctor.',
      ],
      correctIndex: 0,
    },
  ];

  await prisma.placementQuestion.deleteMany({ where: { languageId: en } });
  await prisma.placementQuestion.createMany({
    data: placementSeeds.map((seed, index) => ({
      languageId: en,
      level: seed.level,
      prompt: seed.prompt,
      helperText: seed.helperText ?? null,
      options: seed.options,
      correctIndex: seed.correctIndex,
      sortOrder: index,
    })),
  });

  // Spanisch bekommt einen kleinen Test, damit der Sprachwechsel testbar ist.
  await prisma.placementQuestion.deleteMany({ where: { languageId: es } });
  await prisma.placementQuestion.createMany({
    data: [
      {
        languageId: es,
        level: CefrLevel.A1,
        prompt: 'Completa: "Yo ___ estudiante."',
        options: ['soy', 'eres', 'es', 'son'],
        correctIndex: 0,
        sortOrder: 0,
      },
      {
        languageId: es,
        level: CefrLevel.A2,
        prompt: 'Completa: "Ayer ___ al mercado."',
        options: ['voy', 'fui', 'iré', 'iba a ir'],
        correctIndex: 1,
        sortOrder: 1,
      },
      {
        languageId: es,
        level: CefrLevel.B1,
        prompt: 'Elige el subjuntivo correcto: "Espero que ___ pronto."',
        options: ['vienes', 'vengas', 'vendrás', 'viniste'],
        correctIndex: 1,
        sortOrder: 2,
      },
    ],
  });

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

  for (const [index, seed] of deckSeeds.entries()) {
    const existing = await prisma.vocabDeck.findFirst({
      where: { languageId: en, title: seed.title, isSystem: true },
    });

    const deck = existing
      ? await prisma.vocabDeck.update({
          where: { id: existing.id },
          data: { description: seed.description, level: seed.level, sortOrder: index },
        })
      : await prisma.vocabDeck.create({
          data: {
            languageId: en,
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
      data: seed.items.map(([term, translation, example, exampleDe, pos], itemIndex) => ({
        deckId: deck.id,
        term,
        translation,
        exampleSentence: example,
        exampleTranslation: exampleDe,
        partOfSpeech: pos,
        tags: [seed.level],
        sortOrder: itemIndex,
      })),
    });
  }

  // ----------------------------------------------------------- Bibliothek
  const librarySeeds = [
    {
      type: LibraryType.ARTICLE,
      level: CefrLevel.A2,
      title: 'A Day at the Farmers Market',
      summary: 'Ein kurzer Text über einen Samstagmorgen auf dem Wochenmarkt.',
      author: 'Lingua Redaktion',
      tags: ['alltag', 'einkaufen'],
      body: `Every Saturday morning, Mara walks to the farmers market near her flat. She takes a cloth bag and a small list.

The market opens at eight. At that time, the bread is still warm and the queue is short. Mara buys two loaves, a piece of cheese and a box of strawberries. The woman at the cheese stand always gives her a small piece to try.

"How much is the cheese?" Mara asks.
"Six euros," the woman says. "It is from a farm near the lake."

Mara pays in cash. Then she sits on a bench with a coffee and watches the people. Some come with children, some with dogs. A man plays the guitar next to the flower stand.

At ten o'clock the market is full. Mara walks home slowly. Her bag is heavy, but she is happy. Saturday morning is her favourite time of the week.`,
      exercises: [
        {
          type: ExerciseType.MULTIPLE_CHOICE,
          question: 'When does the market open?',
          options: ['At seven', 'At eight', 'At nine', 'At ten'],
          correctIndex: 1,
          explanation: 'Im Text steht: "The market opens at eight."',
        },
        {
          type: ExerciseType.MULTIPLE_CHOICE,
          question: 'How does Mara pay for the cheese?',
          options: ['By card', 'In cash', 'With a voucher', 'She does not pay'],
          correctIndex: 1,
          explanation: '"Mara pays in cash."',
        },
        {
          type: ExerciseType.TRUE_FALSE,
          question: 'Mara goes to the market every Sunday.',
          options: ['Richtig', 'Falsch'],
          correctIndex: 1,
          explanation: 'Sie geht jeden Samstagmorgen ("Every Saturday morning").',
        },
        {
          type: ExerciseType.OPEN,
          question: 'Beschreibe in drei Sätzen deinen eigenen Samstagmorgen auf Englisch.',
          options: [],
          correctIndex: -1,
          explanation: 'Nutze das Present Simple und Zeitangaben wie "at eight", "in the morning".',
        },
      ],
    },
    {
      type: LibraryType.STORY,
      level: CefrLevel.B1,
      title: 'The Lighthouse Keeper',
      summary: 'Eine kurze Geschichte über Einsamkeit, Gewohnheit und eine unerwartete Begegnung.',
      author: 'Lingua Redaktion',
      tags: ['geschichte', 'natur'],
      body: `For nineteen years, Tomas had kept the light on Sker Point. He knew the sound of every wave against the rocks, and he could tell the weather by the way the gulls flew.

The routine never changed. He climbed the ninety-two steps at dusk, checked the lamp, wrote the date in the logbook, and climbed down again. Once a month, a boat brought supplies and letters that were rarely for him.

Then, on a grey Tuesday in November, he found a girl asleep on the landing stage.

She said her name was Ines and that her boat had failed. She was perhaps twenty. Tomas gave her dry clothes and soup, and expected her to leave with the next tide.

She stayed eleven days. She asked questions he had not been asked in years: why he had come, whether he missed the mainland, what he wrote in the logbook every evening. He found that he had answers, and that saying them aloud changed them slightly.

When the repair boat finally came, Ines shook his hand at the landing stage.
"You should write more than the date," she said.

That evening Tomas climbed the ninety-two steps, checked the lamp, and opened the logbook. Under the date he wrote a full sentence for the first time.`,
      exercises: [
        {
          type: ExerciseType.MULTIPLE_CHOICE,
          question: 'How long had Tomas worked at the lighthouse?',
          options: ['Nine years', 'Eleven years', 'Nineteen years', 'Ninety-two years'],
          correctIndex: 2,
          explanation: '"For nineteen years, Tomas had kept the light on Sker Point."',
        },
        {
          type: ExerciseType.MULTIPLE_CHOICE,
          question: 'What does Ines mean by "You should write more than the date"?',
          options: [
            'He should keep a better logbook for his employer.',
            'He should record his own thoughts and life, not only facts.',
            'He should write letters to the mainland.',
            'He should learn to write faster.',
          ],
          correctIndex: 1,
          explanation:
            'Der letzte Absatz zeigt die Wirkung: Er schreibt zum ersten Mal einen ganzen Satz über sich.',
        },
        {
          type: ExerciseType.TRUE_FALSE,
          question: 'Ines left with the next tide.',
          options: ['Richtig', 'Falsch'],
          correctIndex: 1,
          explanation: 'Sie blieb elf Tage ("She stayed eleven days").',
        },
        {
          type: ExerciseType.OPEN,
          question: 'Was verändert sich für Tomas durch die Begegnung? Antworte in 3–4 Sätzen.',
          options: [],
          correctIndex: -1,
          explanation: 'Achte auf Past Simple und Past Perfect zur Unterscheidung der Zeitebenen.',
        },
      ],
    },
    {
      type: LibraryType.ARTICLE,
      level: CefrLevel.B2,
      title: 'Why Cities Are Getting Quieter',
      summary: 'Ein Sachtext über Elektromobilität, Stadtplanung und die Folgen für den Alltag.',
      author: 'Lingua Redaktion',
      tags: ['gesellschaft', 'umwelt'],
      body: `Anyone who has returned to a European city centre after a decade away tends to notice the same thing before they notice anything else: it is quieter.

Part of the explanation is obvious. Electric vehicles produce a fraction of the noise of combustion engines at low speeds, and cities have been replacing bus fleets faster than private drivers have replaced their cars. But engineers point out that the effect is not evenly distributed. Above roughly 30 km/h, tyre and wind noise dominate, so a motorway lined with electric cars sounds much like a motorway lined with petrol ones.

The larger shift is arguably not technological but regulatory. Low-emission zones, reduced speed limits and the conversion of through-roads into residential streets have changed how traffic moves rather than merely what it runs on. Researchers in Barcelona measured a drop of several decibels in streets converted under the city's superblock programme, a change large enough to be perceived as roughly halving the loudness.

Not everyone welcomes the change. Associations for blind and partially sighted pedestrians warned early that near-silent vehicles are harder to detect, and regulations in the EU and elsewhere now require artificial sound at low speeds. Others argue that quieter streets accelerate gentrification, making already desirable districts more expensive.

What is clear is that noise, long treated as an unavoidable by-product of urban life, has become something cities believe they can decide about.`,
      exercises: [
        {
          type: ExerciseType.MULTIPLE_CHOICE,
          question: 'Why does the article say electric cars do not make motorways quieter?',
          options: [
            'Electric cars are louder at high speed.',
            'Above about 30 km/h, tyre and wind noise dominate.',
            'Motorways have no electric cars yet.',
            'Motorway surfaces amplify engine noise.',
          ],
          correctIndex: 1,
          explanation: 'Der zweite Absatz nennt genau diese Schwelle.',
        },
        {
          type: ExerciseType.MULTIPLE_CHOICE,
          question: 'According to the text, what has had the larger effect?',
          options: [
            'The technology of the vehicles',
            'Regulation and street design',
            'The behaviour of individual drivers',
            'Weather conditions in city centres',
          ],
          correctIndex: 1,
          explanation: '"The larger shift is arguably not technological but regulatory."',
        },
        {
          type: ExerciseType.TRUE_FALSE,
          question: 'The article presents quieter streets as entirely positive.',
          options: ['Richtig', 'Falsch'],
          correctIndex: 1,
          explanation:
            'Es werden Einwände genannt: Sicherheit für blinde Menschen und Gentrifizierung.',
        },
        {
          type: ExerciseType.OPEN,
          question:
            'Fasse das Hauptargument des Textes in zwei Sätzen zusammen und nenne einen Gegeneinwand.',
          options: [],
          correctIndex: -1,
          explanation: 'Nützliche Wendungen: "The main argument is that …", "However, critics point out …"',
        },
      ],
    },
  ];

  for (const seed of librarySeeds) {
    const existing = await prisma.libraryContent.findFirst({
      where: { languageId: en, title: seed.title },
    });

    const wordCount = seed.body.split(/\s+/).length;
    const data = {
      languageId: en,
      level: seed.level,
      type: seed.type,
      title: seed.title,
      summary: seed.summary,
      body: seed.body,
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

  // ------------------------------------------------------------ Mediathek
  const mediaSeeds = [
    {
      type: MediaType.DIALOGUE,
      level: CefrLevel.A1,
      title: 'At the Bakery',
      description: 'Ein kurzer Dialog: Brot kaufen, bezahlen, sich verabschieden.',
      durationSec: 96,
      tags: ['dialog', 'alltag'],
      transcript:
        'A: Good morning! What would you like?\nB: Good morning. Two rolls, please.\nA: Anything else?\nB: A small loaf of bread, please. How much is that?\nA: Three euros twenty.\nB: Here you are.\nA: Thank you. Have a nice day!',
    },
    {
      type: MediaType.AUDIO_LESSON,
      level: CefrLevel.A2,
      title: 'Talking About Your Weekend',
      description: 'Redemittel und Übungen zum Past Simple im Gespräch.',
      durationSec: 421,
      tags: ['grammatik', 'past simple'],
      transcript: null,
    },
    {
      type: MediaType.PODCAST,
      level: CefrLevel.B1,
      title: 'Slow News: Working From Anywhere',
      description: 'Langsam gesprochene Nachrichtenfolge über ortsunabhängiges Arbeiten.',
      durationSec: 738,
      tags: ['podcast', 'arbeit'],
      transcript: null,
    },
    {
      type: MediaType.PODCAST,
      level: CefrLevel.B2,
      title: 'The Language Lab: How Accents Change',
      description: 'Interviewfolge über Sprachwandel und regionale Aussprache.',
      durationSec: 1284,
      tags: ['podcast', 'linguistik'],
      transcript: null,
    },
  ];

  const mediaBase = process.env.MEDIA_BASE_URL ?? 'http://localhost:3000/static';
  for (const seed of mediaSeeds) {
    const existing = await prisma.mediaItem.findFirst({
      where: { languageId: en, title: seed.title },
    });
    const slug = seed.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const data = {
      languageId: en,
      level: seed.level,
      type: seed.type,
      title: seed.title,
      description: seed.description,
      durationSec: seed.durationSec,
      tags: seed.tags,
      transcript: seed.transcript,
      audioUrl: `${mediaBase}/audio/${slug}.mp3`,
    };

    if (existing) {
      await prisma.mediaItem.update({ where: { id: existing.id }, data });
    } else {
      await prisma.mediaItem.create({ data });
    }
  }

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
