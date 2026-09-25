import type { UnitSeed } from './chapter-beginner-1';

/**
 * Englische Grammatik, Kapitel 7: „The future“
 *
 * Drei Seiten, eine je Form: will, going to, Present Continuous – jeweils mit
 * der Situation, in der sie steht. Seite 3 stellt alle drei nebeneinander.
 * Das Deutsche kommt hier fast immer mit dem Präsens aus; der häufigste
 * Fehler ist deshalb nicht die falsche Zukunftsform, sondern gar keine.
 *
 * Erklärungen tragen eine deutsche Übersetzung, Tabellen bleiben englisch.
 */
const v = 1;

export const ENGLISH_GRAMMAR_7_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – will.
  {
    order: 1,
    title: 'will and won’t',
    subtitle: 'Vorhersagen, Entscheidungen, Versprechen',
    estimatedMinutes: 20,
    content: {
      version: v,
      blocks: [
        { id: 'eng7-1-h1', type: 'HEADING', level: 1, text: 'will and won’t' },
        {
          id: 'eng7-1-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'will + basic form',
          text: '“will” is the same for all persons, short “’ll”. The negative is “won’t”. Use it for predictions (often with I think, probably, maybe), for decisions made while speaking, and for offers and promises.',
          translations: {
            de: {
              title: 'will + Grundform',
              text: '„will“ ist für alle Personen gleich, kurz „’ll“. Die Verneinung lautet „won’t“. Es steht für Vorhersagen (oft mit I think, probably, maybe), für Entscheidungen im Moment des Sprechens sowie für Angebote und Versprechen.',
            },
          },
          table: {
            headers: ['use', 'example'],
            rows: [
              ['prediction', 'I think it’ll be cold tomorrow.'],
              ['decision now', 'The blue one? OK, I’ll take it.'],
              ['offer', 'I’ll help you.'],
              ['promise', 'I won’t be late.'],
            ],
          },
        },
        {
          id: 'eng7-1-info-false',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Don’t forget the future',
          text: 'German often uses the present for the future: “Morgen regnet es.” English needs a future form: “It will rain tomorrow.” or “It’s going to rain tomorrow.” – not “It rains tomorrow.” And remember: German “ich will” = “I want”.',
          translations: {
            de: {
              title: 'Die Zukunft nicht vergessen',
              text: 'Das Deutsche nimmt für die Zukunft oft das Präsens: „Morgen regnet es.“ Das Englische braucht eine Zukunftsform: „It will rain tomorrow.“ oder „It’s going to rain tomorrow.“ – nicht „It rains tomorrow.“ Und: Das deutsche „ich will“ heißt „I want“.',
            },
          },
        },
        {
          id: 'eng7-1-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: '“Ich rufe dich morgen an.” (a promise)',
          options: [
            { id: 'o1', text: 'I call you tomorrow.' },
            { id: 'o2', text: 'I’ll call you tomorrow.' },
            { id: 'o3', text: 'I want call you tomorrow.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'A promise about the future needs “will”: “I’ll call you tomorrow.”',
          explanationTranslations: {
            de: 'Ein Versprechen für die Zukunft braucht „will“: „I’ll call you tomorrow.“',
          },
        },
        {
          id: 'eng7-1-cloze',
          type: 'CLOZE',
          instruction: 'Complete with ’ll or won’t.',
          wordBank: ['’ll', 'won’t'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Don’t worry, I ' },
            { kind: 'GAP', gapId: 'w1', solution: ['won’t', "won't"], width: 6 },
            { kind: 'TEXT', text: ' tell anybody. It’s late – I' },
            { kind: 'GAP', gapId: 'w2', solution: ['’ll', "'ll"], width: 5 },
            { kind: 'TEXT', text: ' drive you home. Take a jacket – I’m sure it ' },
            { kind: 'GAP', gapId: 'w3', solution: ['won’t', "won't"], width: 6 },
            { kind: 'TEXT', text: ' be warm tonight.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – going to.
  {
    order: 2,
    title: 'going to',
    subtitle: 'Pläne und sichtbare Anzeichen',
    estimatedMinutes: 18,
    content: {
      version: v,
      blocks: [
        { id: 'eng7-2-h1', type: 'HEADING', level: 1, text: 'going to' },
        {
          id: 'eng7-2-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'am/is/are + going to + basic form',
          text: 'Use “going to” for plans you made before speaking (“I’m going to learn Spanish next year.”) and for predictions based on what you can see now (“Careful! You’re going to fall!”).',
          translations: {
            de: {
              title: 'am/is/are + going to + Grundform',
              text: '„going to“ steht für Pläne, die schon vor dem Sprechen gefasst wurden („I’m going to learn Spanish next year.“), und für Vorhersagen aufgrund dessen, was man jetzt sieht („Careful! You’re going to fall!“).',
            },
          },
          table: {
            headers: ['', 'example'],
            rows: [
              ['+', 'We’re going to move in May.'],
              ['–', 'He isn’t going to come.'],
              ['?', 'Are you going to buy it?'],
              ['evidence', 'Look at the traffic! We’re going to be late.'],
            ],
          },
        },
        {
          id: 'eng7-2-match',
          type: 'MATCHING',
          instruction: 'What’s going to happen?',
          left: [
            { id: 'l1', text: 'The glass is at the edge of the table.' },
            { id: 'l2', text: 'She has bought a ticket to Rome.' },
            { id: 'l3', text: 'The sky is very dark.' },
            { id: 'l4', text: 'He has sold his car.' },
          ],
          right: [
            { id: 'r1', text: 'It’s going to fall.' },
            { id: 'r2', text: 'She’s going to visit Rome.' },
            { id: 'r3', text: 'It’s going to rain.' },
            { id: 'r4', text: 'He’s going to take the bus.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'eng7-2-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'Which sentence is correct?',
          options: [
            { id: 'o1', text: 'I going to study medicine.' },
            { id: 'o2', text: 'I’m going to study medicine.' },
            { id: 'o3', text: 'I’m going study medicine.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'All three parts are necessary: “am” + “going to” + basic form.',
          explanationTranslations: {
            de: 'Alle drei Teile sind nötig: „am“ + „going to“ + Grundform.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – alle drei Formen im Vergleich.
  {
    order: 3,
    title: 'Which future?',
    subtitle: 'will, going to und Present Continuous im Vergleich',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'eng7-3-h1', type: 'HEADING', level: 1, text: 'Which future?' },
        {
          id: 'eng7-3-info',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Three forms, three meanings',
          text: 'The question is: when did you decide, and how fixed is it? Decided now → will. Decided before, it’s my plan → going to. Fixed with other people, a time and a place → present continuous. Timetables use the present simple.',
          translations: {
            de: {
              title: 'Drei Formen, drei Bedeutungen',
              text: 'Die Frage lautet: Wann wurde entschieden, und wie fest steht es? Jetzt entschieden → will. Vorher entschieden, mein Plan → going to. Mit anderen fest verabredet, mit Zeit und Ort → Present Continuous. Fahrpläne stehen im Present Simple.',
            },
          },
          table: {
            headers: ['form', 'situation', 'example'],
            rows: [
              ['will', 'decision now / prediction', 'I’ll have the fish.'],
              ['going to', 'plan / evidence', 'I’m going to cook tonight.'],
              ['present continuous', 'arrangement', 'I’m meeting Sam at 8.'],
              ['present simple', 'timetable', 'The film starts at 8.'],
            ],
          },
        },
        {
          id: 'eng7-3-cloze',
          type: 'CLOZE',
          instruction: 'Choose the best form.',
          wordBank: ['’ll help', 'am meeting', 'leaves', 'is going to'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'That box looks heavy. I' },
            { kind: 'GAP', gapId: 'f1', solution: ['’ll help', "'ll help"], width: 10 },
            { kind: 'TEXT', text: ' you. I ' },
            { kind: 'GAP', gapId: 'f2', solution: ['am meeting'], width: 11 },
            { kind: 'TEXT', text: ' the dentist at 3 – it’s in my diary. The last bus ' },
            { kind: 'GAP', gapId: 'f3', solution: ['leaves'], width: 8 },
            { kind: 'TEXT', text: ' at 11:40. My sister ' },
            { kind: 'GAP', gapId: 'f4', solution: ['is going to'], width: 12 },
            { kind: 'TEXT', text: ' study law – she decided last year.' },
          ],
        },
        {
          id: 'eng7-3-choice',
          type: 'CHOICE',
          instruction: 'Choose the best answer.',
          question: '“We haven’t got any milk.” – “Oh, really? ___ some.”',
          options: [
            { id: 'o1', text: 'I’m going to buy' },
            { id: 'o2', text: 'I’ll buy' },
            { id: 'o3', text: 'I buy' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'You decide at the moment of speaking, so “will” is best: “I’ll buy some.”',
          explanationTranslations: {
            de: 'Die Entscheidung fällt im Moment des Sprechens, also passt „will“ am besten: „I’ll buy some.“',
          },
        },
        {
          id: 'eng7-3-match',
          type: 'MATCHING',
          instruction: 'Match the sentence with the situation.',
          left: [
            { id: 'l1', text: 'I’m flying to Oslo on Friday.' },
            { id: 'l2', text: 'I’m going to learn to swim.' },
            { id: 'l3', text: 'I’ll open the window.' },
            { id: 'l4', text: 'The flight leaves at 6:05.' },
          ],
          right: [
            { id: 'r1', text: 'I have a ticket.' },
            { id: 'r2', text: 'It’s my plan for this year.' },
            { id: 'r3', text: 'It’s hot – I decide now.' },
            { id: 'r4', text: 'It’s on the timetable.' },
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
];
