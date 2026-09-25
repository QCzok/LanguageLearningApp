import type { UnitSeed } from './chapter-beginner-1';

/**
 * Englische Grammatik, Kapitel 3: „Present simple“
 *
 * Vier Seiten: die Form und die Schreibung des -s, dann do/does in Fragen und
 * Verneinung, dann W-Fragen, zuletzt die Stellung der Häufigkeitsadverbien.
 * Die zweite Seite ist der Kern: Dass ein Satz ein Hilfsverb braucht, das
 * nichts bedeutet, hat im Deutschen keine Entsprechung.
 *
 * Erklärungen tragen eine deutsche Übersetzung, Tabellen bleiben englisch.
 */
const v = 1;

export const ENGLISH_GRAMMAR_3_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Form und Gebrauch, das -s.
  {
    order: 1,
    title: 'I work – she works',
    subtitle: 'Form und Gebrauch',
    estimatedMinutes: 18,
    content: {
      version: v,
      blocks: [
        { id: 'eng3-1-h1', type: 'HEADING', level: 1, text: 'I work – she works' },
        {
          id: 'eng3-1-info-use',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'When to use the present simple',
          text: 'The present simple is for habits and routines (“I get up at seven.”), for facts (“Water boils at 100 degrees.”) and for things that are true for a long time (“She lives in Leeds.”). It is not for things happening right now – that is the present continuous (Chapter 5).',
          translations: {
            de: {
              title: 'Wann das Present Simple steht',
              text: 'Das Present Simple steht für Gewohnheiten und Routinen („I get up at seven.“), für Tatsachen („Water boils at 100 degrees.“) und für Dinge, die länger gelten („She lives in Leeds.“). Für das, was gerade jetzt passiert, steht es nicht – dafür gibt es das Present Continuous (Kapitel 5).',
            },
          },
        },
        {
          id: 'eng3-1-info-s',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'The -s and its spelling',
          text: 'Only he, she and it (and every singular noun) get an ending. Normally it is -s. After -s, -sh, -ch, -x and -o it is -es. Consonant + y becomes -ies, vowel + y just gets -s. Two verbs are irregular: “have → has” and “be → is”.',
          translations: {
            de: {
              title: 'Das -s und seine Schreibung',
              text: 'Nur he, she und it (und jedes Nomen im Singular) bekommen eine Endung. Normalerweise -s. Nach -s, -sh, -ch, -x und -o wird es -es. Aus Konsonant + y wird -ies, nach Vokal + y kommt nur -s. Zwei Verben sind unregelmäßig: „have → has“ und „be → is“.',
            },
          },
          table: {
            headers: ['rule', 'I / you / we / they', 'he / she / it'],
            rows: [
              ['+ s', 'live, work', 'lives, works'],
              ['+ es', 'wash, teach, go, do', 'washes, teaches, goes, does'],
              ['consonant + y → -ies', 'study, try', 'studies, tries'],
              ['vowel + y + s', 'play, pay', 'plays, pays'],
              ['irregular', 'have', 'has'],
            ],
          },
        },
        {
          id: 'eng3-1-cloze',
          type: 'CLOZE',
          instruction: 'Write the he/she/it form.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'She ' },
            { kind: 'GAP', gapId: 'v1', solution: ['teaches'], hint: 'teach', width: 9 },
            { kind: 'TEXT', text: ' maths. He ' },
            { kind: 'GAP', gapId: 'v2', solution: ['plays'], hint: 'play', width: 7 },
            { kind: 'TEXT', text: ' football. My son ' },
            { kind: 'GAP', gapId: 'v3', solution: ['tries'], hint: 'try', width: 7 },
            { kind: 'TEXT', text: ' hard. The film ' },
            { kind: 'GAP', gapId: 'v4', solution: ['finishes'], hint: 'finish', width: 9 },
            { kind: 'TEXT', text: ' at ten. She ' },
            { kind: 'GAP', gapId: 'v5', solution: ['does'], hint: 'do', width: 6 },
            { kind: 'TEXT', text: ' yoga.' },
          ],
        },
        {
          id: 'eng3-1-choice',
          type: 'CHOICE',
          instruction: 'Mark all the correct forms.',
          question: 'Which forms are correct?',
          options: [
            { id: 'r1', text: 'he goes' },
            { id: 'r2', text: 'she studys' },
            { id: 'r3', text: 'it haves' },
            { id: 'r4', text: 'he pays' },
          ],
          multiple: true,
          solution: ['r1', 'r4'],
          explanation: '“study” has consonant + y, so it becomes “studies”. “have” is irregular: “has”.',
          explanationTranslations: {
            de: '„study“ endet auf Konsonant + y, also „studies“. „have“ ist unregelmäßig: „has“.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – do und does.
  {
    order: 2,
    title: 'do and does',
    subtitle: 'Fragen und Verneinung',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'eng3-2-h1', type: 'HEADING', level: 1, text: 'do and does' },
        {
          id: 'eng3-2-intro',
          type: 'TEXT',
          text: 'In German you make a question by changing the order: “Du spielst.” → “Spielst du?”. English only does that with “to be”, “can” and a few other helper verbs. With every other verb it needs “do” – a helper that means nothing, but carries the question and the negative.',
          translations: {
            de: 'Im Deutschen bildet man eine Frage durch Umstellen: „Du spielst.“ → „Spielst du?“. Das Englische macht das nur mit „to be“, „can“ und wenigen anderen Hilfsverben. Bei allen anderen Verben braucht es „do“ – ein Hilfsverb, das nichts bedeutet, aber die Frage und die Verneinung trägt.',
          },
        },
        {
          id: 'eng3-2-info-do',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Only one -s per sentence',
          text: 'With he, she and it the helper is “does”. The -s is now on “does”, so the main verb goes back to its basic form: “She plays.” → “Does she play?” → “She doesn’t play.” Think of it this way: there is only one -s, and the helper takes it.',
          translations: {
            de: {
              title: 'Nur ein -s pro Satz',
              text: 'Bei he, she und it heißt das Hilfsverb „does“. Das -s sitzt jetzt an „does“, deshalb steht das Hauptverb wieder in der Grundform: „She plays.“ → „Does she play?“ → „She doesn’t play.“ Merkhilfe: Es gibt nur ein -s, und das Hilfsverb nimmt es sich.',
            },
          },
          table: {
            headers: ['', 'I / you / we / they', 'he / she / it'],
            rows: [
              ['+', 'You play.', 'She plays.'],
              ['?', 'Do you play?', 'Does she play?'],
              ['–', 'You don’t play.', 'She doesn’t play.'],
              ['short answer', 'Yes, I do. / No, I don’t.', 'Yes, she does. / No, she doesn’t.'],
            ],
          },
        },
        {
          id: 'eng3-2-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'Which sentence is correct?',
          options: [
            { id: 'o1', text: 'He doesn’t likes coffee.' },
            { id: 'o2', text: 'He don’t like coffee.' },
            { id: 'o3', text: 'He doesn’t like coffee.' },
          ],
          multiple: false,
          solution: ['o3'],
          explanation: '“he” needs “doesn’t”, and then the main verb has no -s: “doesn’t like”.',
          explanationTranslations: {
            de: 'Zu „he“ gehört „doesn’t“, und dann steht das Hauptverb ohne -s: „doesn’t like“.',
          },
        },
        {
          id: 'eng3-2-cloze',
          type: 'CLOZE',
          instruction: 'Complete with do, does, don’t or doesn’t.',
          wordBank: ['Do', 'Does', 'don’t', 'doesn’t'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '▸ ' },
            { kind: 'GAP', gapId: 'd1', solution: ['Does'], width: 6 },
            { kind: 'TEXT', text: ' your sister live in London?\n▸ No, she ' },
            { kind: 'GAP', gapId: 'd2', solution: ['doesn’t', "doesn't"], width: 8 },
            { kind: 'TEXT', text: '. She lives in Bristol.\n▸ ' },
            { kind: 'GAP', gapId: 'd3', solution: ['Do'], width: 5 },
            { kind: 'TEXT', text: ' you visit her often?\n▸ Not really. I ' },
            { kind: 'GAP', gapId: 'd4', solution: ['don’t', "don't"], width: 7 },
            { kind: 'TEXT', text: ' have much time.' },
          ],
        },
        {
          id: 'eng3-2-info-be',
          type: 'INFO',
          variant: 'TIP',
          title: 'No “do” with “to be”',
          text: 'Never mix “do” and “to be”. “Are you tired?” – not “Do you be tired?”. “She isn’t here.” – not “She doesn’t be here.”',
          translations: {
            de: {
              title: 'Kein „do“ mit „to be“',
              text: 'Mischen Sie nie „do“ und „to be“. „Are you tired?“ – nicht „Do you be tired?“. „She isn’t here.“ – nicht „She doesn’t be here.“',
            },
          },
        },
        {
          id: 'eng3-2-match',
          type: 'MATCHING',
          instruction: 'Match the question with the short answer.',
          left: [
            { id: 'q1', text: 'Is he your brother?' },
            { id: 'q2', text: 'Does he drive?' },
            { id: 'q3', text: 'Are you busy?' },
            { id: 'q4', text: 'Do you cook?' },
          ],
          right: [
            { id: 'a1', text: 'Yes, he is.' },
            { id: 'a2', text: 'Yes, he does.' },
            { id: 'a3', text: 'No, I’m not.' },
            { id: 'a4', text: 'No, I don’t.' },
          ],
          solution: [
            { leftId: 'q1', rightId: 'a1' },
            { leftId: 'q2', rightId: 'a2' },
            { leftId: 'q3', rightId: 'a3' },
            { leftId: 'q4', rightId: 'a4' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – W-Fragen.
  {
    order: 3,
    title: 'Where do you live?',
    subtitle: 'Fragen mit Fragewort',
    estimatedMinutes: 18,
    content: {
      version: v,
      blocks: [
        { id: 'eng3-3-h1', type: 'HEADING', level: 1, text: 'Where do you live?' },
        {
          id: 'eng3-3-info-qasi',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Q – A – S – I',
          text: 'Questions with a question word always follow the same order: Question word – Auxiliary (do/does) – Subject – Infinitive. “Where do you live?”, “What time does the film start?”',
          translations: {
            de: {
              title: 'Q – A – S – I',
              text: 'Fragen mit Fragewort folgen immer derselben Reihenfolge: Fragewort (Question word) – Hilfsverb (Auxiliary: do/does) – Subjekt – Grundform (Infinitive). „Where do you live?“, „What time does the film start?“',
            },
          },
          table: {
            headers: ['Question word', 'Auxiliary', 'Subject', 'Infinitive'],
            rows: [
              ['Where', 'do', 'you', 'live?'],
              ['What', 'does', 'she', 'do?'],
              ['When', 'does', 'the shop', 'open?'],
              ['How often', 'do', 'they', 'call?'],
            ],
          },
        },
        {
          id: 'eng3-3-order',
          type: 'ORDERING',
          instruction: 'Make a correct question.',
          items: [
            { id: 's1', text: 'What' },
            { id: 's2', text: 'does' },
            { id: 's3', text: 'your father' },
            { id: 's4', text: 'do?' },
          ],
          solution: ['s1', 's2', 's3', 's4'],
        },
        {
          id: 'eng3-3-vocab',
          type: 'VOCAB_LIST',
          title: 'Question words',
          items: [
            { term: 'what', translations: { de: 'was', es: 'qué' } },
            { term: 'where', translations: { de: 'wo, wohin', es: 'dónde' } },
            { term: 'when', translations: { de: 'wann', es: 'cuándo' } },
            { term: 'who', translations: { de: 'wer', es: 'quién' } },
            { term: 'why', translations: { de: 'warum', es: 'por qué' } },
            { term: 'how', translations: { de: 'wie', es: 'cómo' } },
            { term: 'what time', translations: { de: 'um wie viel Uhr', es: 'a qué hora' } },
            { term: 'how often', translations: { de: 'wie oft', es: 'con qué frecuencia' } },
          ],
        },
        {
          id: 'eng3-3-match',
          type: 'MATCHING',
          instruction: 'Match the question with the answer.',
          left: [
            { id: 'q1', text: 'Where does she work?' },
            { id: 'q2', text: 'When do you get up?' },
            { id: 'q3', text: 'Why do you learn English?' },
            { id: 'q4', text: 'How do you get to work?' },
          ],
          right: [
            { id: 'a1', text: 'In a hospital.' },
            { id: 'a2', text: 'At half past six.' },
            { id: 'a3', text: 'For my job.' },
            { id: 'a4', text: 'By bike.' },
          ],
          solution: [
            { leftId: 'q1', rightId: 'a1' },
            { leftId: 'q2', rightId: 'a2' },
            { leftId: 'q3', rightId: 'a3' },
            { leftId: 'q4', rightId: 'a4' },
          ],
        },
        {
          id: 'eng3-3-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct question.',
          question: 'You want to know when the museum opens.',
          options: [
            { id: 'o1', text: 'When opens the museum?' },
            { id: 'o2', text: 'When does the museum open?' },
            { id: 'o3', text: 'When does the museum opens?' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'Q – A – S – I: When – does – the museum – open?',
          explanationTranslations: {
            de: 'Fragewort – Hilfsverb – Subjekt – Grundform: When – does – the museum – open?',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – Häufigkeitsadverbien.
  {
    order: 4,
    title: 'always, often, never',
    subtitle: 'Häufigkeit und ihre Stellung im Satz',
    estimatedMinutes: 18,
    content: {
      version: v,
      blocks: [
        { id: 'eng3-4-h1', type: 'HEADING', level: 1, text: 'always, often, never' },
        {
          id: 'eng3-4-info-position',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Before the verb – after “to be”',
          text: 'Adverbs of frequency stand between the subject and the main verb: “I often read.” With “to be” they come after the verb: “I’m often tired.” In negatives and questions they come after “don’t” and after the subject: “I don’t usually drive.”, “Do you often cook?”',
          translations: {
            de: {
              title: 'Vor dem Verb – nach „to be“',
              text: 'Häufigkeitsadverbien stehen zwischen Subjekt und Hauptverb: „I often read.“ Bei „to be“ stehen sie nach dem Verb: „I’m often tired.“ In Verneinungen und Fragen stehen sie nach „don’t“ bzw. nach dem Subjekt: „I don’t usually drive.“, „Do you often cook?“',
            },
          },
          table: {
            headers: ['', 'example'],
            rows: [
              ['main verb', 'She always walks to work.'],
              ['to be', 'She is always on time.'],
              ['negative', 'She doesn’t usually drive.'],
              ['question', 'Does she often work late?'],
            ],
          },
        },
        {
          id: 'eng3-4-order',
          type: 'ORDERING',
          instruction: 'Make a correct sentence.',
          items: [
            { id: 's1', text: 'We' },
            { id: 's2', text: 'don’t' },
            { id: 's3', text: 'usually' },
            { id: 's4', text: 'eat' },
            { id: 's5', text: 'meat.' },
          ],
          solution: ['s1', 's2', 's3', 's4', 's5'],
        },
        {
          id: 'eng3-4-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'Which sentence is correct?',
          options: [
            { id: 'o1', text: 'I drink never coffee.' },
            { id: 'o2', text: 'I never drink coffee.' },
            { id: 'o3', text: 'Never I drink coffee.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'The adverb goes before the main verb: “I never drink”.',
          explanationTranslations: {
            de: 'Das Adverb steht vor dem Hauptverb: „I never drink“.',
          },
        },
        {
          id: 'eng3-4-info-expressions',
          type: 'INFO',
          variant: 'TIP',
          title: 'every day, once a week',
          text: 'Longer time expressions usually go at the end of the sentence: “I go swimming twice a week.”, “She calls her mum every day.” Say “once” for one time and “twice” for two times; from three it is “three times”.',
          translations: {
            de: {
              title: 'every day, once a week',
              text: 'Längere Zeitangaben stehen meist am Satzende: „I go swimming twice a week.“, „She calls her mum every day.“ Für einmal sagt man „once“, für zweimal „twice“; ab drei heißt es „three times“.',
            },
          },
        },
        {
          id: 'eng3-4-cloze',
          type: 'CLOZE',
          instruction: 'Complete the sentences.',
          wordBank: ['once', 'twice', 'times', 'every', 'always'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'I go to the gym ' },
            { kind: 'GAP', gapId: 'e1', solution: ['twice'], width: 7 },
            { kind: 'TEXT', text: ' a week (2×). My English course is ' },
            { kind: 'GAP', gapId: 'e2', solution: ['once'], width: 6 },
            { kind: 'TEXT', text: ' a week (1×). I drink coffee three ' },
            { kind: 'GAP', gapId: 'e3', solution: ['times'], width: 7 },
            { kind: 'TEXT', text: ' a day. I read the news ' },
            { kind: 'GAP', gapId: 'e4', solution: ['every'], width: 7 },
            { kind: 'TEXT', text: ' morning. My bus is ' },
            { kind: 'GAP', gapId: 'e5', solution: ['always'], width: 8 },
            { kind: 'TEXT', text: ' late!' },
          ],
        },
      ],
    },
  },
];
