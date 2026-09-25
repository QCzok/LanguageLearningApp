import type { UnitSeed } from './chapter-beginner-1';

/**
 * Englisch, Intermediate, Kapitel 10: „Science and technology“ (B2, Kapitel 4)
 *
 * Erklären und einordnen. Seite 1 das Passiv in allen Zeiten, auch mit
 * Modalverben und in der Verlaufsform, Seite 2 have/get something done,
 * Seite 3 Partizipialsätze, mit denen Fachtexte Relativsätze verkürzen,
 * Seite 4 Prognosen mit Future Continuous und Future Perfect, Seite 5 ein
 * populärwissenschaftlicher Artikel und seine Zusammenfassung.
 *
 * Die Zahlen im Artikel sind gerundet und dienen der Übung, nicht als
 * Quelle. Einsprachig englisch; Vokabeln mit `de` und `es`.
 */
const v = 1;

export const ENGLISH_INTERMEDIATE_10_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Passiv in allen Zeiten.
  {
    order: 1,
    title: 'How it is made',
    subtitle: 'Das Passiv in allen Zeiten',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'eni10-1-h1', type: 'HEADING', level: 1, text: 'How it is made' },
        {
          id: 'eni10-1-text',
          type: 'TEXT',
          text: 'From sand to smartphone\n\nThe glass on your phone screen is made from sand. First, the sand is melted at over 1,500 °C and mixed with other minerals. The glass is then rolled into very thin sheets and strengthened in a chemical bath. At the moment, new types of glass are being developed that can repair small scratches by themselves. In the past, screens were often broken by a single fall; today’s glass has been tested thousands of times. In the future, it may even be replaced by flexible materials that can be folded like paper.',
        },
        {
          id: 'eni10-1-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'be + past participle – in every tense',
          text: 'Scientific and technical texts use the passive because the process matters more than the person. The rule is always the same: the correct form of “be” + past participle. The continuous passive uses “being” (is being tested), the perfect passive uses “been” (has been tested), and modal verbs take “be” (can be recycled).',
          table: {
            headers: ['tense', 'passive'],
            rows: [
              ['present simple', 'Glass is made from sand.'],
              ['present continuous', 'New types are being developed.'],
              ['past simple', 'Screens were broken easily.'],
              ['present perfect', 'It has been tested thousands of times.'],
              ['will / modal', 'It will be replaced. / It can be recycled.'],
            ],
          },
        },
        {
          id: 'eni10-1-cloze',
          type: 'CLOZE',
          instruction: 'Complete with the passive.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'The sand ' },
            { kind: 'GAP', gapId: 'p1', solution: ['is melted'], hint: 'melt, present', width: 11 },
            { kind: 'TEXT', text: ' at 1,500 °C. At the moment, new glass ' },
            { kind: 'GAP', gapId: 'p2', solution: ['is being developed'], hint: 'develop, now', width: 19 },
            { kind: 'TEXT', text: '. The glass ' },
            { kind: 'GAP', gapId: 'p3', solution: ['has been tested'], hint: 'test, present perfect', width: 16 },
            { kind: 'TEXT', text: ' thousands of times. One day it ' },
            { kind: 'GAP', gapId: 'p4', solution: ['may be replaced', 'might be replaced', 'will be replaced'], hint: 'may / replace', width: 16 },
            { kind: 'TEXT', text: ' by flexible materials.' },
          ],
        },
        {
          id: 'eni10-1-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'The bridge is not finished. Workers are building it now.',
          options: [
            { id: 'o1', text: 'The bridge is built.' },
            { id: 'o2', text: 'The bridge is being built.' },
            { id: 'o3', text: 'The bridge has built.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'An action in progress now: present continuous passive – “is being built”.',
        },
        {
          id: 'eni10-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Words: science and technology',
          items: [
            { term: 'research', translations: { de: 'die Forschung', es: 'la investigación' } },
            { term: 'to develop', translations: { de: 'entwickeln', es: 'desarrollar' } },
            { term: 'device', translations: { de: 'das Gerät', es: 'el dispositivo' } },
            { term: 'to invent', translations: { de: 'erfinden', es: 'inventar' } },
            { term: 'breakthrough', translations: { de: 'der Durchbruch', es: 'el avance' } },
            { term: 'artificial intelligence (AI)', translations: { de: 'künstliche Intelligenz (KI)', es: 'la inteligencia artificial (IA)' } },
            { term: 'data', translations: { de: 'die Daten', es: 'los datos' } },
            { term: 'to replace', translations: { de: 'ersetzen', es: 'sustituir' } },
          ],
        },
        {
          id: 'eni10-1-info-become',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'become ≠ bekommen',
          text: 'A classic false friend: “become” means “werden”, not “bekommen”. “Phones became cheaper.” = Handys wurden billiger. “bekommen” is “get” or “receive”: “We got the results yesterday.”',
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – have/get something done.
  {
    order: 2,
    title: 'I’m having my phone repaired',
    subtitle: 'have / get something done',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'eni10-2-h1', type: 'HEADING', level: 1, text: 'I’m having my phone repaired' },
        {
          id: 'eni10-2-dlg',
          type: 'DIALOGUE',
          title: 'At the office',
          lines: [
            { speaker: 'Ben', text: 'Why haven’t you answered my messages?' },
            { speaker: 'Sophie', text: 'Sorry – I dropped my phone. I’m having the screen replaced.' },
            { speaker: 'Ben', text: 'Again? You should get a better case.' },
            { speaker: 'Sophie', text: 'I know. And my laptop’s slow too. I need to get it checked.' },
            { speaker: 'Ben', text: 'The IT team can do that. I had mine cleaned last week – it’s like new.' },
          ],
        },
        {
          id: 'eni10-2-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'have + object + past participle',
          text: 'When someone else does a job for you (usually a service you pay for), English uses “have + object + past participle”. German says “Ich lasse mein Handy reparieren.” “get” is also possible and a little more informal. The word order matters: “I had my hair cut” (someone cut it for me) is not the same as “I had cut my hair” (past perfect – I did it myself).',
          table: {
            headers: ['I do it myself', 'someone does it for me'],
            rows: [
              ['I repaired my phone.', 'I had my phone repaired.'],
              ['She cuts her hair.', 'She has her hair cut.'],
              ['We’re painting the flat.', 'We’re having the flat painted.'],
              ['I need to check it.', 'I need to get it checked.'],
            ],
          },
        },
        {
          id: 'eni10-2-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct translation.',
          question: '“Ich lasse mein Auto waschen.”',
          options: [
            { id: 'o1', text: 'I let my car wash.' },
            { id: 'o2', text: 'I’m having my car washed.' },
            { id: 'o3', text: 'I have washed my car.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'German “etwas machen lassen” = have + object + past participle.',
        },
        {
          id: 'eni10-2-cloze',
          type: 'CLOZE',
          instruction: 'Complete with have/get + object + past participle.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Sophie is ' },
            { kind: 'GAP', gapId: 'h1', solution: ['having the screen replaced', 'getting the screen replaced'], hint: 'have / the screen / replace', width: 26 },
            { kind: 'TEXT', text: '. Ben ' },
            { kind: 'GAP', gapId: 'h2', solution: ['had his laptop cleaned', 'got his laptop cleaned'], hint: 'have / his laptop / clean', width: 23 },
            { kind: 'TEXT', text: ' last week.' },
          ],
        },
        {
          id: 'eni10-2-match',
          type: 'MATCHING',
          instruction: 'Where do you have it done?',
          left: [
            { id: 'l1', text: 'have your eyes tested' },
            { id: 'l2', text: 'have your hair cut' },
            { id: 'l3', text: 'have your car serviced' },
            { id: 'l4', text: 'have a suit made' },
          ],
          right: [
            { id: 'r1', text: 'at the optician’s' },
            { id: 'r2', text: 'at the hairdresser’s' },
            { id: 'r3', text: 'at the garage' },
            { id: 'r4', text: 'at the tailor’s' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – Partizipialsätze.
  {
    order: 3,
    title: 'Data collected by sensors …',
    subtitle: 'Partizipialsätze',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'eni10-3-h1', type: 'HEADING', level: 1, text: 'Data collected by sensors …' },
        {
          id: 'eni10-3-text',
          type: 'TEXT',
          text: 'Smart cities\n\nMany cities now use sensors installed in streets and buildings. Data collected by these sensors helps to control traffic lights, street lighting and waste collection. Drivers looking for a parking space can see free spaces on an app. Having analysed the data, one city in Spain reduced its energy use for street lighting by 30%. However, critics worried about privacy point out that the same technology could be used to follow people.',
        },
        {
          id: 'eni10-3-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Shortening relative clauses',
          text: 'Formal and technical texts often shorten relative clauses with participles. An active clause becomes -ing: “drivers who are looking for a space” → “drivers looking for a space”. A passive clause becomes a past participle: “data which is collected by sensors” → “data collected by sensors”. “Having + past participle” at the start of a sentence shows that one action was finished before the next.',
          table: {
            headers: ['full clause', 'participle clause'],
            rows: [
              ['people who live in cities', 'people living in cities'],
              ['sensors which were installed in 2020', 'sensors installed in 2020'],
              ['After they had analysed the data, they …', 'Having analysed the data, they …'],
            ],
          },
        },
        {
          id: 'eni10-3-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct shortened version.',
          question: '“The report which was published yesterday shows a rise in costs.”',
          options: [
            { id: 'o1', text: 'The report publishing yesterday shows a rise in costs.' },
            { id: 'o2', text: 'The report published yesterday shows a rise in costs.' },
            { id: 'o3', text: 'The report having published yesterday shows a rise in costs.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'The report was published (passive), so use the past participle: “published”.',
        },
        {
          id: 'eni10-3-cloze',
          type: 'CLOZE',
          instruction: 'Complete with the -ing form or the past participle.',
          wordBank: ['installed', 'looking', 'collected', 'Having', 'worried'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Sensors ' },
            { kind: 'GAP', gapId: 'c1', solution: ['installed'], width: 10 },
            { kind: 'TEXT', text: ' in the streets measure traffic. Data ' },
            { kind: 'GAP', gapId: 'c2', solution: ['collected'], width: 10 },
            { kind: 'TEXT', text: ' by them is sent to a central computer. Drivers ' },
            { kind: 'GAP', gapId: 'c3', solution: ['looking'], width: 10 },
            { kind: 'TEXT', text: ' for parking use an app. ' },
            { kind: 'GAP', gapId: 'c4', solution: ['Having'], width: 10 },
            { kind: 'TEXT', text: ' tested the system, the city introduced it everywhere. Critics ' },
            { kind: 'GAP', gapId: 'c5', solution: ['worried'], width: 10 },
            { kind: 'TEXT', text: ' about privacy are not convinced.' },
          ],
        },
        {
          id: 'eni10-3-match',
          type: 'MATCHING',
          instruction: 'Match the long and the short version.',
          left: [
            { id: 'l1', text: 'students who are studying abroad' },
            { id: 'l2', text: 'cars which are made in Germany' },
            { id: 'l3', text: 'After she had finished the test, she …' },
          ],
          right: [
            { id: 'r1', text: 'students studying abroad' },
            { id: 'r2', text: 'cars made in Germany' },
            { id: 'r3', text: 'Having finished the test, she …' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – Prognosen: Future Continuous und Future Perfect.
  {
    order: 4,
    title: 'By 2040, we will have …',
    subtitle: 'Prognosen: Future Continuous und Future Perfect',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'eni10-4-h1', type: 'HEADING', level: 1, text: 'By 2040, we will have …' },
        {
          id: 'eni10-4-text',
          type: 'TEXT',
          text: 'Predictions from a technology conference:\n\n“By 2035, most new cars in Europe will have become electric.”\n“In ten years’ time, many of us will be working alongside AI assistants every day.”\n“By the end of the decade, scientists will have developed batteries that charge in five minutes.”\n“This time next year, we will be testing the first self-driving buses in our city.”',
        },
        {
          id: 'eni10-4-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'will be + -ing / will have + past participle',
          text: 'The future continuous (will be + -ing) describes an action in progress at a point in the future: “This time tomorrow I’ll be flying to Rome.” The future perfect (will have + past participle) describes an action that will be complete before a point in the future, usually with “by”: “By 2040, we will have replaced petrol cars.”',
          table: {
            headers: ['form', 'meaning', 'example'],
            rows: [
              ['will be + -ing', 'in progress at a future time', 'At 9 tomorrow I’ll be sitting in a meeting.'],
              ['will have + p.p.', 'finished before a future time', 'By Friday I’ll have finished the report.'],
            ],
          },
        },
        {
          id: 'eni10-4-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct form.',
          question: '“Don’t call me at eight – I ___ dinner then.”',
          options: [
            { id: 'o1', text: 'will have had' },
            { id: 'o2', text: 'will be having' },
            { id: 'o3', text: 'have' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'At eight, dinner will be in progress: future continuous.',
        },
        {
          id: 'eni10-4-cloze',
          type: 'CLOZE',
          instruction: 'Complete with the future continuous or future perfect.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'By 2035, most new cars ' },
            { kind: 'GAP', gapId: 'f1', solution: ['will have become'], hint: 'become', width: 17 },
            { kind: 'TEXT', text: ' electric. This time next year we ' },
            { kind: 'GAP', gapId: 'f2', solution: ['will be testing', '’ll be testing', "'ll be testing"], hint: 'test', width: 16 },
            { kind: 'TEXT', text: ' self-driving buses. By Friday I ' },
            { kind: 'GAP', gapId: 'f3', solution: ['will have finished', '’ll have finished', "'ll have finished"], hint: 'finish', width: 19 },
            { kind: 'TEXT', text: ' the report.' },
          ],
        },
        {
          id: 'eni10-4-info-hedge',
          type: 'INFO',
          variant: 'TIP',
          title: 'How sure are the experts?',
          text: 'Predictions are rarely certain. Add adverbs and phrases to show how likely something is: “will almost certainly”, “will probably”, “is likely to”, “may well”, “is unlikely to”. The adverb goes after “will” but before “won’t”: “It will probably rain.” – “It probably won’t rain.”',
        },
        {
          id: 'eni10-4-order',
          type: 'ORDERING',
          instruction: 'Order from most certain to least certain.',
          items: [
            { id: 'c1', text: 'will definitely happen' },
            { id: 'c2', text: 'will probably happen' },
            { id: 'c3', text: 'may well happen' },
            { id: 'c4', text: 'is unlikely to happen' },
          ],
          solution: ['c1', 'c2', 'c3', 'c4'],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – populärwissenschaftlicher Artikel.
  {
    order: 5,
    title: 'Risks and opportunities',
    subtitle: 'Einen Fachartikel verstehen und bewerten',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'eni10-5-h1', type: 'HEADING', level: 1, text: 'Risks and opportunities' },
        {
          id: 'eni10-5-text',
          type: 'TEXT',
          text: 'Can AI help doctors?\n\nArtificial intelligence is already being used in hospitals to analyse X-rays and scans. In some studies, systems trained on millions of images have detected certain cancers as accurately as experienced doctors – and sometimes earlier. Supporters argue that this could reduce waiting times and allow doctors to spend more time with patients.\n\nHowever, the technology raises difficult questions. AI systems are only as good as the data they have been trained on; if that data comes mainly from one group of patients, the results may be less reliable for others. It is also unclear who is responsible when a mistake is made – the doctor, the hospital or the company that developed the software.\n\nMost experts agree that AI is unlikely to replace doctors. Instead, by the end of the decade, many doctors will probably be working with AI as a second opinion – a tool that is checked by humans, not the other way round.',
        },
        {
          id: 'eni10-5-choice',
          type: 'CHOICE',
          instruction: 'Mark all the risks mentioned in the article.',
          question: 'What problems does the article mention?',
          options: [
            { id: 'r1', text: 'Results may be less reliable for some groups of patients.' },
            { id: 'r2', text: 'AI is too expensive for hospitals.' },
            { id: 'r3', text: 'It is unclear who is responsible for mistakes.' },
            { id: 'r4', text: 'Patients refuse to be examined by AI.' },
          ],
          multiple: true,
          solution: ['r1', 'r3'],
          explanation: 'The article mentions biased training data and unclear responsibility – not cost or patients refusing.',
        },
        {
          id: 'eni10-5-choice2',
          type: 'CHOICE',
          instruction: 'Answer the question about the article.',
          question: 'What do most experts predict?',
          options: [
            { id: 'o1', text: 'AI will replace doctors within ten years.' },
            { id: 'o2', text: 'Doctors will use AI as a second opinion.' },
            { id: 'o3', text: 'AI will be banned from hospitals.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'The last paragraph: AI is unlikely to replace doctors; they will work with it “as a second opinion”.',
        },
        {
          id: 'eni10-5-match',
          type: 'MATCHING',
          instruction: 'Find the grammar in the article. Match.',
          left: [
            { id: 'l1', text: 'is already being used' },
            { id: 'l2', text: 'systems trained on millions of images' },
            { id: 'l3', text: 'will probably be working' },
          ],
          right: [
            { id: 'r1', text: 'present continuous passive' },
            { id: 'r2', text: 'participle clause' },
            { id: 'r3', text: 'future continuous' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
          ],
        },
        {
          id: 'eni10-5-writing',
          type: 'WRITING',
          instruction: 'Write an article about a technology.',
          prompt:
            'Choose a technology (for example self-driving cars, smart homes, AI in schools, lab-grown meat). Write an article of 200–260 words for a general reader: explain briefly how it works, discuss one opportunity and one risk, and make a hedged prediction. Use the passive, a participle clause and the future continuous or future perfect.',
          minWords: 180,
          maxWords: 300,
          aiFeedback: true,
          sampleAnswer:
            'Will your next car drive itself?\n\nSelf-driving cars are already being tested on public roads in several countries. They are controlled by software that combines information from cameras, radar and sensors placed around the vehicle. Using this data, the car can recognise other vehicles, pedestrians and traffic signs, and decide how to react.\n\nThe main opportunity is safety. More than 90% of road accidents are caused by human error, such as tiredness or distraction. A computer does not get tired or look at its phone, so in theory, many accidents could be prevented. Self-driving cars could also give more independence to older people and people with disabilities who cannot drive themselves.\n\nHowever, the technology is not perfect. Sensors can be confused by heavy snow or unusual situations, and it is still unclear who should be held responsible when an accident happens. There are also concerns about data: a car that records every journey knows a great deal about its owner.\n\nIt seems unlikely that human drivers will disappear completely in the near future. Nevertheless, by the middle of the next decade, many of us will probably have used a self-driving taxi, and some motorways may well have special lanes for autonomous vehicles. Whether we will ever feel comfortable taking our hands off the wheel is another question.',
        },
      ],
    },
  },
];
