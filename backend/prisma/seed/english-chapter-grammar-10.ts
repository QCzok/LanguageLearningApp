import type { UnitSeed } from './chapter-beginner-1';

/**
 * Englische Grammatik, Kapitel 10: „Modal verbs“
 *
 * Drei Seiten: Fähigkeit und Erlaubnis (can, could, be able to, may), Pflicht
 * und Verbot (must, have to, mustn’t, don’t have to), zuletzt Rat und
 * Vermutung (should, might, must, can’t). Die Modalverben sehen deutschen
 * Verben ähnlich und bedeuten oft etwas anderes – „must not“ ist das
 * bekannteste Beispiel, „will“ und „become“ gehören in dieselbe Familie der
 * falschen Freunde.
 *
 * Erklärungen tragen wie im ganzen Grammatikbuch eine deutsche Übersetzung.
 */
const v = 1;

export const ENGLISH_GRAMMAR_10_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Fähigkeit und Erlaubnis.
  {
    order: 1,
    title: 'can, could, be able to',
    subtitle: 'Fähigkeit und Erlaubnis',
    estimatedMinutes: 20,
    content: {
      version: v,
      blocks: [
        { id: 'eng10-1-h1', type: 'HEADING', level: 1, text: 'can, could, be able to' },
        {
          id: 'eng10-1-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'What all modal verbs have in common',
          text: 'Modal verbs (can, could, must, should, might, may, will, would) never change: no -s, no -ing, no -ed. They are followed by the basic form without “to”. Questions and negatives work without “do”: “Can you swim?”, “She can’t come.” Because they have no infinitive or past participle, English uses substitutes: “be able to” for can, “have to” for must.',
          translations: {
            de: {
              title: 'Was alle Modalverben gemeinsam haben',
              text: 'Modalverben (can, could, must, should, might, may, will, would) ändern sich nie: kein -s, kein -ing, kein -ed. Auf sie folgt die Grundform ohne „to“. Fragen und Verneinungen kommen ohne „do“ aus: „Can you swim?“, „She can’t come.“ Weil sie weder Infinitiv noch Partizip haben, verwendet das Englische Ersatzformen: „be able to“ für can, „have to“ für must.',
            },
          },
          table: {
            headers: ['use', 'example'],
            rows: [
              ['ability now', 'She can speak four languages.'],
              ['ability in the past', 'He could read when he was four.'],
              ['one success in the past', 'After an hour we were able to open the door.'],
              ['future / other forms', 'I’ll be able to help you tomorrow. / I’d love to be able to sing.'],
              ['permission', 'Can / Could / May I sit here?'],
            ],
          },
        },
        {
          id: 'eng10-1-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: '“Ich werde morgen kommen können.”',
          options: [
            { id: 'o1', text: 'I will can come tomorrow.' },
            { id: 'o2', text: 'I will be able to come tomorrow.' },
            { id: 'o3', text: 'I can to come tomorrow.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'Two modal verbs can’t stand together. “can” has no future form, so use “will be able to”.',
          explanationTranslations: {
            de: 'Zwei Modalverben können nicht nebeneinanderstehen. „can“ hat keine Zukunftsform, also „will be able to“.',
          },
        },
        {
          id: 'eng10-1-cloze',
          type: 'CLOZE',
          instruction: 'Complete with can, could, couldn’t or able.',
          wordBank: ['can', 'could', 'couldn’t', 'able'],
          caseSensitive: false,
          segments: [
            { kind: 'GAP', gapId: 'c1', solution: ['Could', 'Can'], width: 8 },
            { kind: 'TEXT', text: ' I open the window, please? When I was young I ' },
            { kind: 'GAP', gapId: 'c2', solution: ['couldn’t', "couldn't"], width: 9 },
            { kind: 'TEXT', text: ' swim. Now I ' },
            { kind: 'GAP', gapId: 'c3', solution: ['can'], width: 8 },
            { kind: 'TEXT', text: ' swim 2 km. I hope I’ll be ' },
            { kind: 'GAP', gapId: 'c4', solution: ['able'], width: 6 },
            { kind: 'TEXT', text: ' to swim across the lake next summer.' },
          ],
        },
        {
          id: 'eng10-1-info-polite',
          type: 'INFO',
          variant: 'TIP',
          title: 'Polite requests',
          text: '“Can I …?” is normal, “Could I …?” is more polite, “May I …?” is formal. To ask others to do something: “Could you …?” or “Would you mind + -ing?”: “Would you mind closing the door?”',
          translations: {
            de: {
              title: 'Höfliche Bitten',
              text: '„Can I …?“ ist normal, „Could I …?“ höflicher, „May I …?“ förmlich. Um andere um etwas zu bitten: „Could you …?“ oder „Would you mind + -ing?“: „Would you mind closing the door?“',
            },
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – Pflicht und Verbot.
  {
    order: 2,
    title: 'must, have to, mustn’t',
    subtitle: 'Pflicht, Verbot, keine Notwendigkeit',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'eng10-2-h1', type: 'HEADING', level: 1, text: 'must, have to, mustn’t' },
        {
          id: 'eng10-2-info',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'must not ≠ muss nicht',
          text: '“must” and “have to” both express obligation. The negatives are completely different: “mustn’t” = it is forbidden (nicht dürfen); “don’t have to” = it isn’t necessary (nicht müssen). In the past, both become “had to” / “didn’t have to”.',
          translations: {
            de: {
              title: 'must not ≠ muss nicht',
              text: '„must“ und „have to“ drücken beide eine Pflicht aus. Die Verneinungen sind völlig verschieden: „mustn’t“ = verboten (nicht dürfen); „don’t have to“ = nicht nötig (nicht müssen). In der Vergangenheit werden beide zu „had to“ / „didn’t have to“.',
            },
          },
          table: {
            headers: ['English', 'German'],
            rows: [
              ['You must / have to wear a helmet.', 'Du musst einen Helm tragen.'],
              ['You mustn’t use your phone here.', 'Du darfst hier dein Handy nicht benutzen.'],
              ['You don’t have to come.', 'Du musst nicht kommen.'],
              ['I had to wait for an hour.', 'Ich musste eine Stunde warten.'],
            ],
          },
        },
        {
          id: 'eng10-2-match',
          type: 'MATCHING',
          instruction: 'Match the English with the German.',
          left: [
            { id: 'l1', text: 'You mustn’t tell anybody.' },
            { id: 'l2', text: 'You don’t have to tell anybody.' },
            { id: 'l3', text: 'We had to leave early.' },
            { id: 'l4', text: 'We didn’t have to pay.' },
          ],
          right: [
            { id: 'r1', text: 'Du darfst es niemandem sagen.' },
            { id: 'r2', text: 'Du musst es niemandem sagen.' },
            { id: 'r3', text: 'Wir mussten früh gehen.' },
            { id: 'r4', text: 'Wir mussten nicht bezahlen.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'eng10-2-cloze',
          type: 'CLOZE',
          instruction: 'Complete with must, mustn’t, don’t have to or had to.',
          wordBank: ['must', 'mustn’t', 'don’t have to', 'had to'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Passengers ' },
            { kind: 'GAP', gapId: 'o1', solution: ['must'], width: 13 },
            { kind: 'TEXT', text: ' show their tickets. You ' },
            { kind: 'GAP', gapId: 'o2', solution: ['mustn’t', "mustn't"], width: 13 },
            { kind: 'TEXT', text: ' smoke on the train. It’s Sunday, so I ' },
            { kind: 'GAP', gapId: 'o3', solution: ['don’t have to', "don't have to"], width: 13 },
            { kind: 'TEXT', text: ' get up early. Yesterday I ' },
            { kind: 'GAP', gapId: 'o4', solution: ['had to'], width: 13 },
            { kind: 'TEXT', text: ' work until nine.' },
          ],
        },
        {
          id: 'eng10-2-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'Which sentence is correct?',
          options: [
            { id: 'o1', text: 'I musted work yesterday.' },
            { id: 'o2', text: 'I had to work yesterday.' },
            { id: 'o3', text: 'I must work yesterday.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: '“must” has no past form. Use “had to”.',
          explanationTranslations: {
            de: '„must“ hat keine Vergangenheitsform. Man nimmt „had to“.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – Rat und Vermutung.
  {
    order: 3,
    title: 'should, might, must, can’t',
    subtitle: 'Rat und Vermutung',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'eng10-3-h1', type: 'HEADING', level: 1, text: 'should, might, must, can’t' },
        {
          id: 'eng10-3-info-advice',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Advice: should, ought to',
          text: '“should” (and the more formal “ought to”) gives advice or says what is right: “You should see a doctor.” “shouldn’t” = it’s not a good idea. It is weaker than “must”.',
          translations: {
            de: {
              title: 'Rat: should, ought to',
              text: '„should“ (und das förmlichere „ought to“) gibt einen Rat oder sagt, was richtig ist: „You should see a doctor.“ „shouldn’t“ = keine gute Idee. Es ist schwächer als „must“.',
            },
          },
        },
        {
          id: 'eng10-3-info-deduction',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Deduction: how sure are you?',
          text: 'Modal verbs can also show how sure you are about something. “must” = I’m sure it’s true (based on evidence). “might / may / could” = it’s possible. “can’t” = I’m sure it’s not true. Careful: the opposite of “must” here is “can’t”, not “mustn’t”.',
          translations: {
            de: {
              title: 'Vermutung: Wie sicher sind Sie?',
              text: 'Modalverben können auch ausdrücken, wie sicher man sich ist. „must“ = ich bin sicher, dass es stimmt (aufgrund von Hinweisen). „might / may / could“ = es ist möglich. „can’t“ = ich bin sicher, dass es nicht stimmt. Vorsicht: Das Gegenteil von „must“ ist hier „can’t“, nicht „mustn’t“.',
            },
          },
          table: {
            headers: ['certainty', 'example'],
            rows: [
              ['100% yes', 'The lights are on. They must be at home.'],
              ['50%', 'She might be at work. / She may be ill.'],
              ['100% no', 'He can’t be hungry – he’s just eaten.'],
            ],
          },
        },
        {
          id: 'eng10-3-cloze',
          type: 'CLOZE',
          instruction: 'Complete with must, might or can’t.',
          wordBank: ['must', 'might', 'can’t'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'You’ve worked twelve hours – you ' },
            { kind: 'GAP', gapId: 'd1', solution: ['must'], width: 7 },
            { kind: 'TEXT', text: ' be exhausted. I’m not sure where Ben is. He ' },
            { kind: 'GAP', gapId: 'd2', solution: ['might'], width: 7 },
            { kind: 'TEXT', text: ' be in a meeting. That ' },
            { kind: 'GAP', gapId: 'd3', solution: ['can’t', "can't"], width: 7 },
            { kind: 'TEXT', text: ' be Sophie – she’s in Paris this week.' },
          ],
        },
        {
          id: 'eng10-3-choice',
          type: 'CHOICE',
          instruction: 'Choose the best sentence.',
          question: 'Your friend is wearing a heavy winter coat. It’s 35 °C. What do you say?',
          options: [
            { id: 'o1', text: 'She mustn’t be cold.' },
            { id: 'o2', text: 'She must be really hot.' },
            { id: 'o3', text: 'She should be hot.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'You are sure because of the evidence (coat, 35 °C): “must be”.',
          explanationTranslations: {
            de: 'Sie sind sich aufgrund der Hinweise (Mantel, 35 °C) sicher: „must be“.',
          },
        },
        {
          id: 'eng10-3-match',
          type: 'MATCHING',
          instruction: 'Match the sentence with its meaning.',
          left: [
            { id: 'l1', text: 'It must be expensive.' },
            { id: 'l2', text: 'It might be expensive.' },
            { id: 'l3', text: 'It can’t be expensive.' },
            { id: 'l4', text: 'You should buy it.' },
          ],
          right: [
            { id: 'r1', text: 'I’m sure it is.' },
            { id: 'r2', text: 'Perhaps it is.' },
            { id: 'r3', text: 'I’m sure it isn’t.' },
            { id: 'r4', text: 'It’s a good idea.' },
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
