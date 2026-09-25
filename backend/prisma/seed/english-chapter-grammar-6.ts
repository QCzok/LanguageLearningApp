import type { UnitSeed } from './chapter-beginner-1';

/**
 * Englische Grammatik, Kapitel 6: „Past simple“
 *
 * Drei Seiten: regelmäßige Formen mit Schreibung und Aussprache von -ed,
 * dann die unregelmäßigen Verben samt was/were, zuletzt did in Fragen und
 * Verneinungen. Dazu der Hinweis, der Deutschsprachigen am meisten hilft:
 * Das englische Past Simple steht dort, wo man im Deutschen mündlich das
 * Perfekt sagt.
 *
 * Erklärungen tragen eine deutsche Übersetzung, Tabellen bleiben englisch.
 */
const v = 1;

export const ENGLISH_GRAMMAR_6_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – regelmäßige Verben.
  {
    order: 1,
    title: 'worked, lived, stopped',
    subtitle: 'Regelmäßige Verben',
    estimatedMinutes: 20,
    content: {
      version: v,
      blocks: [
        { id: 'eng6-1-h1', type: 'HEADING', level: 1, text: 'worked, lived, stopped' },
        {
          id: 'eng6-1-info-use',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Past simple, not “Perfekt”',
          text: 'In spoken German you say “Ich habe gestern gearbeitet.” In English, a finished action at a finished time is always past simple: “I worked yesterday.” – never “I have worked yesterday.” Words like yesterday, last week, ago and in 2019 are clear signals.',
          translations: {
            de: {
              title: 'Past Simple, nicht „Perfekt“',
              text: 'Im gesprochenen Deutsch sagt man „Ich habe gestern gearbeitet.“ Im Englischen steht eine abgeschlossene Handlung zu einer abgeschlossenen Zeit immer im Past Simple: „I worked yesterday.“ – nie „I have worked yesterday.“ Wörter wie yesterday, last week, ago und in 2019 sind klare Signale.',
            },
          },
        },
        {
          id: 'eng6-1-info-spelling',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Spelling of -ed',
          text: 'Most verbs add -ed. Verbs ending in -e add only -d. Consonant + y becomes -ied (but vowel + y just adds -ed: played). A short stressed vowel + one consonant doubles the consonant.',
          translations: {
            de: {
              title: 'Schreibung von -ed',
              text: 'Die meisten Verben bekommen -ed. Verben auf -e bekommen nur -d. Aus Konsonant + y wird -ied (nach Vokal + y nur -ed: played). Nach kurzem betontem Vokal + einem Konsonanten wird der Konsonant verdoppelt.',
            },
          },
          table: {
            headers: ['rule', 'examples'],
            rows: [
              ['+ ed', 'walk → walked, play → played'],
              ['-e + d', 'like → liked, arrive → arrived'],
              ['consonant + y → -ied', 'carry → carried, try → tried'],
              ['double consonant', 'stop → stopped, plan → planned'],
            ],
          },
        },
        {
          id: 'eng6-1-cloze',
          type: 'CLOZE',
          instruction: 'Write the past simple.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'We ' },
            { kind: 'GAP', gapId: 'e1', solution: ['arrived'], hint: 'arrive', width: 9 },
            { kind: 'TEXT', text: ' late. He ' },
            { kind: 'GAP', gapId: 'e2', solution: ['carried'], hint: 'carry', width: 9 },
            { kind: 'TEXT', text: ' my bag. They ' },
            { kind: 'GAP', gapId: 'e3', solution: ['planned'], hint: 'plan', width: 9 },
            { kind: 'TEXT', text: ' the trip. She ' },
            { kind: 'GAP', gapId: 'e4', solution: ['enjoyed'], hint: 'enjoy', width: 9 },
            { kind: 'TEXT', text: ' the film.' },
          ],
        },
        {
          id: 'eng6-1-info-sound',
          type: 'INFO',
          variant: 'TIP',
          title: 'Three sounds of -ed',
          text: 'After t and d, -ed is an extra syllable “id”: wanted, needed. After voiceless sounds (p, k, s, sh, ch, f) it sounds like “t”: stopped, watched. Everywhere else it sounds like “d”: played, lived. Never say “play-ed”!',
          translations: {
            de: {
              title: 'Drei Aussprachen von -ed',
              text: 'Nach t und d ist -ed eine eigene Silbe „id“: wanted, needed. Nach stimmlosen Lauten (p, k, s, sh, ch, f) klingt es wie „t“: stopped, watched. Sonst klingt es wie „d“: played, lived. Nie „play-ed“ sagen!',
            },
          },
        },
        {
          id: 'eng6-1-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'How do you say “Ich habe sie letzte Woche angerufen”?',
          options: [
            { id: 'o1', text: 'I have called her last week.' },
            { id: 'o2', text: 'I called her last week.' },
            { id: 'o3', text: 'I have call her last week.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: '“last week” is a finished time, so English uses the past simple: “I called her last week.”',
          explanationTranslations: {
            de: '„last week“ ist eine abgeschlossene Zeit, also steht im Englischen das Past Simple: „I called her last week.“',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – unregelmäßige Verben, was/were.
  {
    order: 2,
    title: 'went, saw, was',
    subtitle: 'Unregelmäßige Verben',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'eng6-2-h1', type: 'HEADING', level: 1, text: 'went, saw, was' },
        {
          id: 'eng6-2-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'The most important irregular verbs',
          text: 'About 150 verbs are irregular, and they include most of the verbs you use every day. Some groups help: many verbs with -ought/-aught (bring → brought, buy → bought, teach → taught); some don’t change at all (put, cut, cost, let).',
          translations: {
            de: {
              title: 'Die wichtigsten unregelmäßigen Verben',
              text: 'Etwa 150 Verben sind unregelmäßig, darunter die meisten, die man täglich braucht. Einige Gruppen helfen: viele Verben auf -ought/-aught (bring → brought, buy → bought, teach → taught); manche ändern sich gar nicht (put, cut, cost, let).',
            },
          },
          table: {
            headers: ['verb', 'past', 'verb', 'past'],
            rows: [
              ['be', 'was / were', 'know', 'knew'],
              ['bring', 'brought', 'leave', 'left'],
              ['buy', 'bought', 'put', 'put'],
              ['drink', 'drank', 'say', 'said'],
              ['feel', 'felt', 'speak', 'spoke'],
              ['give', 'gave', 'think', 'thought'],
            ],
          },
        },
        {
          id: 'eng6-2-match',
          type: 'MATCHING',
          instruction: 'Match the verb with its past form.',
          left: [
            { id: 'l1', text: 'think' },
            { id: 'l2', text: 'leave' },
            { id: 'l3', text: 'know' },
            { id: 'l4', text: 'put' },
            { id: 'l5', text: 'say' },
          ],
          right: [
            { id: 'r1', text: 'thought' },
            { id: 'r2', text: 'left' },
            { id: 'r3', text: 'knew' },
            { id: 'r4', text: 'put' },
            { id: 'r5', text: 'said' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
            { leftId: 'l5', rightId: 'r5' },
          ],
        },
        {
          id: 'eng6-2-cloze',
          type: 'CLOZE',
          instruction: 'Complete with the past simple.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'I ' },
            { kind: 'GAP', gapId: 'r1', solution: ['felt'], hint: 'feel', width: 6 },
            { kind: 'TEXT', text: ' tired, so I ' },
            { kind: 'GAP', gapId: 'r2', solution: ['left'], hint: 'leave', width: 6 },
            { kind: 'TEXT', text: ' early. My parents ' },
            { kind: 'GAP', gapId: 'r3', solution: ['were'], hint: 'be', width: 6 },
            { kind: 'TEXT', text: ' at home. My dad ' },
            { kind: 'GAP', gapId: 'r4', solution: ['said'], hint: 'say', width: 6 },
            { kind: 'TEXT', text: ' hello and ' },
            { kind: 'GAP', gapId: 'r5', solution: ['gave'], hint: 'give', width: 6 },
            { kind: 'TEXT', text: ' me a cup of tea.' },
          ],
        },
        {
          id: 'eng6-2-choice',
          type: 'CHOICE',
          instruction: 'Mark all the correct forms.',
          question: 'Which past forms are correct?',
          options: [
            { id: 'r1', text: 'bought' },
            { id: 'r2', text: 'teached' },
            { id: 'r3', text: 'spoke' },
            { id: 'r4', text: 'drinked' },
          ],
          multiple: true,
          solution: ['r1', 'r3'],
          explanation: '“teach” and “drink” are irregular: “taught” and “drank”.',
          explanationTranslations: {
            de: '„teach“ und „drink“ sind unregelmäßig: „taught“ und „drank“.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – did.
  {
    order: 3,
    title: 'Did you …? – I didn’t …',
    subtitle: 'Fragen und Verneinung',
    estimatedMinutes: 20,
    content: {
      version: v,
      blocks: [
        { id: 'eng6-3-h1', type: 'HEADING', level: 1, text: 'Did you …? – I didn’t …' },
        {
          id: 'eng6-3-info',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'did carries the past',
          text: 'As in the present, normal verbs need a helper for questions and negatives. In the past it is “did” for every person. Since “did” is already past, the main verb goes back to the basic form: “Did she go?”, “She didn’t go.” “to be” and “could” don’t use “did”: “Was she there?”, “She couldn’t come.”',
          translations: {
            de: {
              title: 'did trägt die Vergangenheit',
              text: 'Wie im Präsens brauchen normale Verben für Fragen und Verneinungen ein Hilfsverb. In der Vergangenheit ist es „did“, für jede Person. Weil „did“ schon Vergangenheit ist, steht das Hauptverb wieder in der Grundform: „Did she go?“, „She didn’t go.“ „to be“ und „could“ brauchen kein „did“: „Was she there?“, „She couldn’t come.“',
            },
          },
          table: {
            headers: ['', 'normal verbs', 'to be'],
            rows: [
              ['?', 'Did you see it?', 'Were you there?'],
              ['–', 'I didn’t see it.', 'I wasn’t there.'],
              ['question word', 'What did you see?', 'Where were you?'],
            ],
          },
        },
        {
          id: 'eng6-3-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct question.',
          question: 'Which question is correct?',
          options: [
            { id: 'o1', text: 'Did you were at home?' },
            { id: 'o2', text: 'Were you at home?' },
            { id: 'o3', text: 'Did you be at home?' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: '“to be” never uses “did”: “Were you at home?”',
          explanationTranslations: {
            de: '„to be“ steht nie mit „did“: „Were you at home?“',
          },
        },
        {
          id: 'eng6-3-cloze',
          type: 'CLOZE',
          instruction: 'Make the sentences negative.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'She went to work. → She ' },
            { kind: 'GAP', gapId: 'n1', solution: ['didn’t go', "didn't go", 'did not go'], width: 11 },
            { kind: 'TEXT', text: ' to work.\nWe bought milk. → We ' },
            { kind: 'GAP', gapId: 'n2', solution: ['didn’t buy', "didn't buy", 'did not buy'], width: 11 },
            { kind: 'TEXT', text: ' milk.\nIt was cold. → It ' },
            { kind: 'GAP', gapId: 'n3', solution: ['wasn’t', "wasn't", 'was not'], width: 8 },
            { kind: 'TEXT', text: ' cold.' },
          ],
        },
        {
          id: 'eng6-3-order',
          type: 'ORDERING',
          instruction: 'Make a correct question.',
          items: [
            { id: 's1', text: 'What time' },
            { id: 's2', text: 'did' },
            { id: 's3', text: 'the train' },
            { id: 's4', text: 'arrive?' },
          ],
          solution: ['s1', 's2', 's3', 's4'],
        },
      ],
    },
  },
];
