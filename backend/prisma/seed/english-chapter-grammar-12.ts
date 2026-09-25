import type { UnitSeed } from './chapter-beginner-1';

/**
 * Englische Grammatik, Kapitel 12: „Passive and reported speech“
 *
 * Vier Seiten: das Passiv in allen Zeiten, dann die unpersönlichen
 * Konstruktionen (It is said that …, have something done), die indirekte
 * Rede mit Zeitenverschiebung und zuletzt indirekte Fragen und
 * Berichtsverben. Das letzte Kapitel des Grammatikbuchs – beide Themen
 * verbindet, dass der Sprecher oder Handelnde in den Hintergrund tritt.
 *
 * Erklärungen tragen wie im ganzen Grammatikbuch eine deutsche Übersetzung.
 */
const v = 1;

export const ENGLISH_GRAMMAR_12_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Passiv in allen Zeiten.
  {
    order: 1,
    title: 'The passive in all tenses',
    subtitle: 'be + Partizip',
    estimatedMinutes: 20,
    content: {
      version: v,
      blocks: [
        { id: 'eng12-1-h1', type: 'HEADING', level: 1, text: 'The passive in all tenses' },
        {
          id: 'eng12-1-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'be + past participle',
          text: 'The passive is formed with “be” in the tense you need + past participle. German uses “werden” (Vorgangspassiv); English uses “be” – so “wird gebaut” is “is being built” (now) or “is built” (in general), never “will built”. Use the passive when the action is more important than who does it, or when the doer is unknown or obvious.',
          translations: {
            de: {
              title: 'be + Partizip Perfekt',
              text: 'Das Passiv bildet man mit „be“ in der benötigten Zeit + Partizip Perfekt. Das Deutsche nimmt „werden“, das Englische „be“ – „wird gebaut“ ist also „is being built“ (gerade) oder „is built“ (allgemein), nie „will built“. Das Passiv steht, wenn die Handlung wichtiger ist als der Handelnde oder dieser unbekannt oder offensichtlich ist.',
            },
          },
          table: {
            headers: ['tense', 'example'],
            rows: [
              ['present simple', 'English is spoken here.'],
              ['present continuous', 'The road is being repaired.'],
              ['past simple', 'The letter was sent yesterday.'],
              ['past continuous', 'The house was being painted.'],
              ['present perfect', 'The tickets have been sold.'],
              ['past perfect', 'The film had already been shown.'],
              ['future / modal', 'It will be finished. / It must be done.'],
            ],
          },
        },
        {
          id: 'eng12-1-cloze',
          type: 'CLOZE',
          instruction: 'Complete with the passive.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'The road ' },
            { kind: 'GAP', gapId: 'p1', solution: ['is being repaired'], hint: 'repair, now', width: 18 },
            { kind: 'TEXT', text: ' at the moment. All the tickets ' },
            { kind: 'GAP', gapId: 'p2', solution: ['have been sold'], hint: 'sell, present perfect', width: 15 },
            { kind: 'TEXT', text: '. When we arrived, dinner ' },
            { kind: 'GAP', gapId: 'p3', solution: ['had already been served'], hint: 'already / serve, past perfect', width: 23 },
            { kind: 'TEXT', text: '. The results ' },
            { kind: 'GAP', gapId: 'p4', solution: ['will be published'], hint: 'publish, future', width: 17 },
            { kind: 'TEXT', text: ' next week.' },
          ],
        },
        {
          id: 'eng12-1-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct translation.',
          question: '“Das Museum wird gerade renoviert.”',
          options: [
            { id: 'o1', text: 'The museum will renovated.' },
            { id: 'o2', text: 'The museum is being renovated.' },
            { id: 'o3', text: 'The museum is renovating.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: '“wird gerade” = present continuous passive: “is being renovated”.',
          explanationTranslations: {
            de: '„wird gerade“ = Present Continuous Passive: „is being renovated“.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – It is said that, have something done.
  {
    order: 2,
    title: 'It is said that …',
    subtitle: 'Unpersönliche Konstruktionen, have something done',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'eng12-2-h1', type: 'HEADING', level: 1, text: 'It is said that …' },
        {
          id: 'eng12-2-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Passive reporting structures',
          text: 'With verbs like say, think, believe, expect, report, there are two passive structures. It + passive + that: “It is said that the castle is haunted.” Subject + passive + to-infinitive: “The castle is said to be haunted.” For the past: “to have + past participle” – “He is believed to have left the country.”',
          translations: {
            de: {
              title: 'Unpersönliche Passivkonstruktionen',
              text: 'Mit Verben wie say, think, believe, expect, report gibt es zwei Passivstrukturen. It + Passiv + that: „It is said that the castle is haunted.“ (Man sagt, dass …). Subjekt + Passiv + to-Infinitiv: „The castle is said to be haunted.“ (Das Schloss soll … sein). Für die Vergangenheit: „to have + Partizip“ – „He is believed to have left the country.“',
            },
          },
          table: {
            headers: ['German', 'English'],
            rows: [
              ['Man sagt, dass …', 'It is said that …'],
              ['Er soll reich sein.', 'He is said to be rich.'],
              ['Sie soll das Land verlassen haben.', 'She is believed to have left the country.'],
            ],
          },
        },
        {
          id: 'eng12-2-cloze',
          type: 'CLOZE',
          instruction: 'Rewrite with the subject + passive + infinitive structure.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'It is said that he is very rich. → He is said ' },
            { kind: 'GAP', gapId: 'r1', solution: ['to be'], width: 7 },
            { kind: 'TEXT', text: ' very rich.\nIt is believed that she left last night. → She is believed ' },
            { kind: 'GAP', gapId: 'r2', solution: ['to have left'], width: 13 },
            { kind: 'TEXT', text: ' last night.' },
          ],
        },
        {
          id: 'eng12-2-info-have',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'have / get something done',
          text: 'German “etwas machen lassen” (a service somebody does for you) is “have + object + past participle”: “I had my hair cut.” “get” is more informal. The same structure is used for bad experiences: “She had her bag stolen.” (Ihr wurde die Tasche gestohlen.)',
          translations: {
            de: {
              title: 'have / get something done',
              text: 'Das deutsche „etwas machen lassen“ (eine Dienstleistung, die jemand für einen erledigt) heißt „have + Objekt + Partizip“: „I had my hair cut.“ „get“ ist umgangssprachlicher. Dieselbe Struktur steht bei unangenehmen Erfahrungen: „She had her bag stolen.“ (Ihr wurde die Tasche gestohlen.)',
            },
          },
        },
        {
          id: 'eng12-2-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct translation.',
          question: '“Ich habe mir die Haare schneiden lassen.”',
          options: [
            { id: 'o1', text: 'I have cut my hair.' },
            { id: 'o2', text: 'I had my hair cut.' },
            { id: 'o3', text: 'I let cut my hair.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: '“etwas machen lassen” = have + object + past participle.',
          explanationTranslations: {
            de: '„etwas machen lassen“ = have + Objekt + Partizip.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – indirekte Rede, Zeitenverschiebung.
  {
    order: 3,
    title: 'She said she was tired',
    subtitle: 'Indirekte Rede und Zeitenverschiebung',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'eng12-3-h1', type: 'HEADING', level: 1, text: 'She said she was tired' },
        {
          id: 'eng12-3-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Backshift',
          text: 'German uses the Konjunktiv for indirect speech (“Sie sagte, sie sei müde”). English uses the indicative but moves the tense back when the reporting verb is in the past. If what was said is still true, the backshift is optional: “She said she lives in Leeds.” Could, would, should, might and past perfect don’t change.',
          translations: {
            de: {
              title: 'Zeitenverschiebung',
              text: 'Das Deutsche nimmt für die indirekte Rede den Konjunktiv („Sie sagte, sie sei müde“). Das Englische bleibt im Indikativ, verschiebt aber die Zeit eine Stufe zurück, wenn das Einleitungsverb in der Vergangenheit steht. Gilt das Gesagte noch, ist die Verschiebung freiwillig: „She said she lives in Leeds.“ Could, would, should, might und Past Perfect ändern sich nicht.',
            },
          },
          table: {
            headers: ['direct', 'reported'],
            rows: [
              ['present simple: “I am tired.”', 'past simple: she was tired'],
              ['present continuous: “I’m working.”', 'past continuous: he was working'],
              ['past / present perfect: “I saw / have seen it.”', 'past perfect: she had seen it'],
              ['will: “I’ll help.”', 'would: he would help'],
              ['can: “I can swim.”', 'could: she could swim'],
            ],
          },
        },
        {
          id: 'eng12-3-cloze',
          type: 'CLOZE',
          instruction: 'Report the sentences.',
          wordBank: ['was', 'had', 'would', 'could', 'were'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '“I’m busy.” → He said he ' },
            { kind: 'GAP', gapId: 'b1', solution: ['was'], width: 6 },
            { kind: 'TEXT', text: ' busy.\n“We’re leaving.” → They said they ' },
            { kind: 'GAP', gapId: 'b2', solution: ['were'], width: 6 },
            { kind: 'TEXT', text: ' leaving.\n“I have finished.” → She said she ' },
            { kind: 'GAP', gapId: 'b3', solution: ['had'], width: 6 },
            { kind: 'TEXT', text: ' finished.\n“I’ll come.” → He said he ' },
            { kind: 'GAP', gapId: 'b4', solution: ['would'], width: 6 },
            { kind: 'TEXT', text: ' come.\n“I can swim.” → She said she ' },
            { kind: 'GAP', gapId: 'b5', solution: ['could'], width: 6 },
            { kind: 'TEXT', text: ' swim.' },
          ],
        },
        {
          id: 'eng12-3-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct reported sentence.',
          question: 'Direct: “I saw the film yesterday,” said Tom.',
          options: [
            { id: 'o1', text: 'Tom said he saw the film yesterday.' },
            { id: 'o2', text: 'Tom said he had seen the film the day before.' },
            { id: 'o3', text: 'Tom said he has seen the film yesterday.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'past simple → past perfect, and “yesterday” → “the day before” when you report later.',
          explanationTranslations: {
            de: 'Past Simple → Past Perfect, und „yesterday“ → „the day before“, wenn man später berichtet.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – indirekte Fragen und Berichtsverben.
  {
    order: 4,
    title: 'She asked where I lived',
    subtitle: 'Indirekte Fragen, Aufforderungen, Berichtsverben',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'eng12-4-h1', type: 'HEADING', level: 1, text: 'She asked where I lived' },
        {
          id: 'eng12-4-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Reported questions and commands',
          text: 'Reported questions use statement word order and no do/does/did. Yes/no questions are introduced with “if” or “whether”. Commands and requests use “tell / ask + person + (not) to + infinitive”.',
          translations: {
            de: {
              title: 'Indirekte Fragen und Aufforderungen',
              text: 'Indirekte Fragen haben die Wortstellung eines Aussagesatzes und kein do/does/did. Ja/Nein-Fragen werden mit „if“ oder „whether“ eingeleitet (ob). Aufforderungen und Bitten: „tell / ask + Person + (not) to + Infinitiv“.',
            },
          },
          table: {
            headers: ['direct', 'reported'],
            rows: [
              ['“Where do you live?”', 'She asked where I lived.'],
              ['“Is it far?”', 'He asked if / whether it was far.'],
              ['“Please wait.”', 'She asked me to wait.'],
              ['“Don’t move!”', 'He told us not to move.'],
            ],
          },
        },
        {
          id: 'eng12-4-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct reported question.',
          question: 'Direct: “Did you enjoy the party?”',
          options: [
            { id: 'o1', text: 'She asked me did I enjoy the party.' },
            { id: 'o2', text: 'She asked me if I had enjoyed the party.' },
            { id: 'o3', text: 'She asked me if had I enjoyed the party.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'Yes/no question → “if”, statement word order (I had enjoyed), no “did”.',
          explanationTranslations: {
            de: 'Ja/Nein-Frage → „if“, Wortstellung wie im Aussagesatz (I had enjoyed), kein „did“.',
          },
        },
        {
          id: 'eng12-4-info-verbs',
          type: 'INFO',
          variant: 'TIP',
          title: 'Reporting verbs',
          text: 'Instead of always using “say”, choose a verb that shows the function of what was said – and use its pattern: admit / deny + -ing; agree / refuse / promise / offer + to; advise / warn / remind / persuade + person + to; suggest + -ing or that-clause.',
          translations: {
            de: {
              title: 'Berichtsverben',
              text: 'Statt immer „say“ zu verwenden, wählt man ein Verb, das die Funktion des Gesagten zeigt – mit seinem Muster: admit / deny + -ing; agree / refuse / promise / offer + to; advise / warn / remind / persuade + Person + to; suggest + -ing oder that-Satz.',
            },
          },
        },
        {
          id: 'eng12-4-match',
          type: 'MATCHING',
          instruction: 'Match the direct speech with the reporting verb.',
          left: [
            { id: 'l1', text: '“OK, I’ll do it.”' },
            { id: 'l2', text: '“No, I won’t help you.”' },
            { id: 'l3', text: '“It was me who lost the key.”' },
            { id: 'l4', text: '“Don’t forget to lock the door.”' },
          ],
          right: [
            { id: 'r1', text: 'He agreed to do it.' },
            { id: 'r2', text: 'She refused to help.' },
            { id: 'r3', text: 'He admitted losing the key.' },
            { id: 'r4', text: 'She reminded me to lock the door.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'eng12-4-cloze',
          type: 'CLOZE',
          instruction: 'Complete with the correct form.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'He denied ' },
            { kind: 'GAP', gapId: 'v1', solution: ['taking'], hint: 'take', width: 8 },
            { kind: 'TEXT', text: ' the money. She advised me ' },
            { kind: 'GAP', gapId: 'v2', solution: ['to see'], hint: 'see', width: 8 },
            { kind: 'TEXT', text: ' a doctor. They offered ' },
            { kind: 'GAP', gapId: 'v3', solution: ['to help'], hint: 'help', width: 8 },
            { kind: 'TEXT', text: '. He suggested ' },
            { kind: 'GAP', gapId: 'v4', solution: ['going'], hint: 'go', width: 8 },
            { kind: 'TEXT', text: ' by train.' },
          ],
        },
      ],
    },
  },
];
