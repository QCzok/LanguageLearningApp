import type { UnitSeed } from './chapter-beginner-1';

/**
 * Englische Grammatik, Kapitel 2: „to be“
 *
 * Drei Seiten: die Formen samt Kurzformen, dann Frage, Verneinung und
 * Kurzantwort, zuletzt there is / there are. „to be“ ist das einzige
 * englische Verb, das Fragen ohne „do“ bildet – deshalb steht es vor dem
 * Present Simple (Kapitel 3), damit der Unterschied später auffällt.
 *
 * Erklärungen tragen eine deutsche Übersetzung, Tabellen bleiben englisch.
 */
const v = 1;

export const ENGLISH_GRAMMAR_2_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Formen und Kurzformen.
  {
    order: 1,
    title: 'am, is, are',
    subtitle: 'Formen und Kurzformen',
    estimatedMinutes: 18,
    content: {
      version: v,
      blocks: [
        { id: 'eng2-1-h1', type: 'HEADING', level: 1, text: 'am, is, are' },
        {
          id: 'eng2-1-info-forms',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'The forms of “to be”',
          text: '“to be” has three forms in the present: “am” only with I, “is” with he, she, it and every singular noun, “are” with you, we, they and every plural noun. In speaking and in informal writing, people use the short forms.',
          translations: {
            de: {
              title: 'Die Formen von „to be“',
              text: '„to be“ hat im Präsens drei Formen: „am“ nur mit I, „is“ mit he, she, it und jedem Nomen im Singular, „are“ mit you, we, they und jedem Nomen im Plural. Beim Sprechen und in lockeren Texten verwendet man die Kurzformen.',
            },
          },
          table: {
            headers: ['Person', 'long form', 'short form'],
            rows: [
              ['I', 'I am', 'I’m'],
              ['you', 'you are', 'you’re'],
              ['he / she / it', 'he is', 'he’s'],
              ['we', 'we are', 'we’re'],
              ['they', 'they are', 'they’re'],
            ],
          },
        },
        {
          id: 'eng2-1-cloze',
          type: 'CLOZE',
          instruction: 'Complete with am, is or are.',
          wordBank: ['am', 'is', 'are'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'I ' },
            { kind: 'GAP', gapId: 'b1', solution: ['am'], width: 4 },
            { kind: 'TEXT', text: ' tired. My parents ' },
            { kind: 'GAP', gapId: 'b2', solution: ['are'], width: 4 },
            { kind: 'TEXT', text: ' on holiday. The weather ' },
            { kind: 'GAP', gapId: 'b3', solution: ['is'], width: 4 },
            { kind: 'TEXT', text: ' great. You ' },
            { kind: 'GAP', gapId: 'b4', solution: ['are'], width: 4 },
            { kind: 'TEXT', text: ' right. Paris ' },
            { kind: 'GAP', gapId: 'b5', solution: ['is'], width: 4 },
            { kind: 'TEXT', text: ' beautiful.' },
          ],
        },
        {
          id: 'eng2-1-info-uses',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: '“to be” where German uses “haben”',
          text: 'Some things that German says with “haben” use “to be” in English: age (“I’m 30”), hunger and thirst (“I’m hungry”, “I’m thirsty”), and feeling hot or cold (“I’m cold”). Also: “You’re right.” = “Du hast recht.”',
          translations: {
            de: {
              title: '„to be“, wo das Deutsche „haben“ sagt',
              text: 'Einiges, was im Deutschen mit „haben“ steht, sagt das Englische mit „to be“: das Alter („I’m 30“), Hunger und Durst („I’m hungry“, „I’m thirsty“) und Wärme oder Kälte („I’m cold“ = mir ist kalt). Außerdem: „You’re right.“ = „Du hast recht.“',
            },
          },
          table: {
            headers: ['German', 'English'],
            rows: [
              ['Ich habe Hunger.', 'I’m hungry.'],
              ['Er hat Durst.', 'He’s thirsty.'],
              ['Mir ist kalt.', 'I’m cold.'],
              ['Sie hat recht.', 'She’s right.'],
            ],
          },
        },
        {
          id: 'eng2-1-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'How do you say “Wir haben Hunger”?',
          options: [
            { id: 'o1', text: 'We have hunger.' },
            { id: 'o2', text: 'We’re hungry.' },
            { id: 'o3', text: 'We’ve hungry.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'Hunger goes with “to be” and the adjective “hungry”: “We’re hungry.”',
          explanationTranslations: {
            de: 'Hunger steht mit „to be“ und dem Adjektiv „hungry“: „We’re hungry.“',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – Frage, Verneinung, Kurzantwort.
  {
    order: 2,
    title: 'Are you ready?',
    subtitle: 'Fragen, Verneinung, Kurzantworten',
    estimatedMinutes: 20,
    content: {
      version: v,
      blocks: [
        { id: 'eng2-2-h1', type: 'HEADING', level: 1, text: 'Are you ready?' },
        {
          id: 'eng2-2-info-questions',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Questions: the verb goes first',
          text: 'With “to be” a question works like in German: the verb moves in front of the subject. “She is at home.” → “Is she at home?” Question words come first: “Where is she?”',
          translations: {
            de: {
              title: 'Fragen: das Verb nach vorn',
              text: 'Mit „to be“ funktioniert eine Frage wie im Deutschen: Das Verb rückt vor das Subjekt. „She is at home.“ → „Is she at home?“ Fragewörter stehen ganz vorn: „Where is she?“',
            },
          },
          table: {
            headers: ['statement', 'question'],
            rows: [
              ['You are ready.', 'Are you ready?'],
              ['He is from Spain.', 'Is he from Spain?'],
              ['They are at work.', 'Where are they?'],
            ],
          },
        },
        {
          id: 'eng2-2-order',
          type: 'ORDERING',
          instruction: 'Make a correct question.',
          items: [
            { id: 's1', text: 'Where' },
            { id: 's2', text: 'are' },
            { id: 's3', text: 'your' },
            { id: 's4', text: 'keys?' },
          ],
          solution: ['s1', 's2', 's3', 's4'],
        },
        {
          id: 'eng2-2-info-negative',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Negatives and short answers',
          text: 'For the negative, “not” comes after the verb: “I’m not”, “he isn’t”, “we aren’t”. There is no short form “amn’t”. Answering with just “Yes.” or “No.” can sound unfriendly; English prefers a short answer with the verb: “Yes, I am.”, “No, she isn’t.” In a positive short answer, there is no short form: “Yes, I am.” (not “Yes, I’m.”).',
          translations: {
            de: {
              title: 'Verneinung und Kurzantworten',
              text: 'Für die Verneinung steht „not“ hinter dem Verb: „I’m not“, „he isn’t“, „we aren’t“. Eine Kurzform „amn’t“ gibt es nicht. Nur „Yes.“ oder „No.“ kann unfreundlich klingen; das Englische bevorzugt eine Kurzantwort mit dem Verb: „Yes, I am.“, „No, she isn’t.“ In der bejahten Kurzantwort gibt es keine Kurzform: „Yes, I am.“ (nicht „Yes, I’m.“).',
            },
          },
          table: {
            headers: ['question', 'yes', 'no'],
            rows: [
              ['Are you tired?', 'Yes, I am.', 'No, I’m not.'],
              ['Is she at home?', 'Yes, she is.', 'No, she isn’t.'],
              ['Are they ready?', 'Yes, they are.', 'No, they aren’t.'],
            ],
          },
        },
        {
          id: 'eng2-2-match',
          type: 'MATCHING',
          instruction: 'Match the question with the short answer.',
          left: [
            { id: 'q1', text: 'Are you a student?' },
            { id: 'q2', text: 'Is your brother married?' },
            { id: 'q3', text: 'Are we late?' },
            { id: 'q4', text: 'Is it cold outside?' },
          ],
          right: [
            { id: 'a1', text: 'Yes, I am.' },
            { id: 'a2', text: 'No, he isn’t.' },
            { id: 'a3', text: 'No, we aren’t.' },
            { id: 'a4', text: 'Yes, it is.' },
          ],
          solution: [
            { leftId: 'q1', rightId: 'a1' },
            { leftId: 'q2', rightId: 'a2' },
            { leftId: 'q3', rightId: 'a3' },
            { leftId: 'q4', rightId: 'a4' },
          ],
        },
        {
          id: 'eng2-2-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct answer.',
          question: '“Are you from Berlin?” – “Yes, …”',
          options: [
            { id: 'o1', text: 'I’m.' },
            { id: 'o2', text: 'I am.' },
            { id: 'o3', text: 'I do.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'A positive short answer uses the long form: “Yes, I am.” “do” is not used with “to be”.',
          explanationTranslations: {
            de: 'Die bejahte Kurzantwort steht in der Langform: „Yes, I am.“ „do“ wird mit „to be“ nicht verwendet.',
          },
        },
        {
          id: 'eng2-2-cloze',
          type: 'CLOZE',
          instruction: 'Make the sentences negative. Use short forms.',
          wordBank: ['isn’t', 'aren’t', 'not'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'I’m ' },
            { kind: 'GAP', gapId: 'n1', solution: ['not'], width: 5 },
            { kind: 'TEXT', text: ' hungry.\nThe shop ' },
            { kind: 'GAP', gapId: 'n2', solution: ['isn’t', "isn't"], width: 7 },
            { kind: 'TEXT', text: ' open.\nMy friends ' },
            { kind: 'GAP', gapId: 'n3', solution: ['aren’t', "aren't"], width: 7 },
            { kind: 'TEXT', text: ' here.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – there is / there are.
  {
    order: 3,
    title: 'there is, there are',
    subtitle: 'Sagen, was es gibt',
    estimatedMinutes: 18,
    content: {
      version: v,
      blocks: [
        { id: 'eng2-3-h1', type: 'HEADING', level: 1, text: 'there is, there are' },
        {
          id: 'eng2-3-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'there is – there are',
          text: 'For “es gibt”, English uses “there” + “to be”. The verb agrees with what comes after it: one thing → “there is”, more things → “there are”. Questions and negatives work like all forms of “to be”: “Is there …?”, “There aren’t …”.',
          translations: {
            de: {
              title: 'there is – there are',
              text: 'Für „es gibt“ verwendet das Englische „there“ + „to be“. Das Verb richtet sich nach dem, was folgt: eine Sache → „there is“, mehrere → „there are“. Fragen und Verneinungen funktionieren wie bei allen Formen von „to be“: „Is there …?“, „There aren’t …“.',
            },
          },
          table: {
            headers: ['', 'singular', 'plural'],
            rows: [
              ['+', 'There’s a problem.', 'There are two problems.'],
              ['–', 'There isn’t a lift.', 'There aren’t any lifts.'],
              ['?', 'Is there a lift?', 'Are there any lifts?'],
              ['short answer', 'Yes, there is.', 'No, there aren’t.'],
            ],
          },
        },
        {
          id: 'eng2-3-cloze',
          type: 'CLOZE',
          instruction: 'Complete with is or are.',
          wordBank: ['is', 'are'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'In our hotel there ' },
            { kind: 'GAP', gapId: 'h1', solution: ['is'], width: 4 },
            { kind: 'TEXT', text: ' a swimming pool and there ' },
            { kind: 'GAP', gapId: 'h2', solution: ['are'], width: 4 },
            { kind: 'TEXT', text: ' three restaurants. ' },
            { kind: 'GAP', gapId: 'h3', solution: ['Is'], width: 4 },
            { kind: 'TEXT', text: ' there a gym? – No, but there ' },
            { kind: 'GAP', gapId: 'h4', solution: ['are'], width: 4 },
            { kind: 'TEXT', text: ' some bikes for guests.' },
          ],
        },
        {
          id: 'eng2-3-info-it',
          type: 'INFO',
          variant: 'TIP',
          title: 'there is or it is?',
          text: '“There is” says that something exists. “It is” describes something you have already mentioned. “There’s a café in my street. It’s very small.”',
          translations: {
            de: {
              title: 'there is oder it is?',
              text: '„There is“ sagt, dass es etwas gibt. „It is“ beschreibt etwas, das schon erwähnt wurde. „There’s a café in my street. It’s very small.“',
            },
          },
        },
        {
          id: 'eng2-3-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct word.',
          question: 'There’s a new cinema in town. ___ very modern.',
          options: [
            { id: 'o1', text: 'There’s' },
            { id: 'o2', text: 'It’s' },
            { id: 'o3', text: 'They’re' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'The cinema is already mentioned, so you describe it with “it’s”.',
          explanationTranslations: {
            de: 'Das Kino wurde schon erwähnt, also beschreibt man es mit „it’s“.',
          },
        },
      ],
    },
  },
];
