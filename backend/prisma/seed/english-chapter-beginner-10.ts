import type { UnitSeed } from './chapter-beginner-1';

/**
 * Englisch, Beginner, Kapitel 10: „Travel plans“ (A2, Kapitel 4)
 *
 * Die Zukunft in drei Formen, je eine Seite: going to für Pläne, will für
 * spontane Entscheidungen und Vorhersagen, das Present Continuous für feste
 * Verabredungen (hier mit der Hotelbuchung). Seite 4 führt an den Bahnhof.
 * Das Deutsche sagt in allen drei Fällen meist einfach Präsens – deshalb die
 * Mühe, den Unterschied an Situationen festzumachen statt an Regeln.
 *
 * Übersetzungen wie im ganzen Beginner-Band.
 */
const v = 1;

export const ENGLISH_BEGINNER_10_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – going to.
  {
    order: 1,
    title: 'We’re going to visit Scotland',
    subtitle: 'Pläne mit going to',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'en10-1-h1', type: 'HEADING', level: 1, text: 'We’re going to visit Scotland' },
        {
          id: 'en10-1-image',
          type: 'IMAGE',
          url: 'illustration:train-platform',
          alt: 'Ein Bahnsteig mit einem einfahrenden Zug und einer Anzeigetafel.',
          caption: 'Ready for a trip.',
        },
        {
          id: 'en10-1-dlg',
          type: 'DIALOGUE',
          title: 'Plans for the holidays',
          lines: [
            { speaker: 'Emma', text: 'The course finishes next week. What are you going to do in the holidays?' },
            { speaker: 'Anna', text: 'Yuki and I are going to travel around Scotland. We’re going to visit Edinburgh first.' },
            { speaker: 'Karim', text: 'I’m not going to travel. I’m going to paint our flat!' },
            { speaker: 'Diego', text: 'And I’m going to look for a new job.' },
            { speaker: 'Emma', text: 'Are you going to take the train to Scotland, Anna?' },
            { speaker: 'Anna', text: 'Yes – it’s more relaxing than driving.' },
          ],
        },
        {
          id: 'en10-1-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'going to + verb',
          text: '“going to” is for plans and intentions – things you have already decided: “We’re going to visit Edinburgh.” You form it with “to be” + going to + basic form. It is also used when you can see that something will happen: “Look at those clouds. It’s going to rain.”',
          translations: {
            de: {
              title: 'going to + Verb',
              text: '„going to“ steht für Pläne und Absichten – Dinge, die schon entschieden sind: „We’re going to visit Edinburgh.“ Man bildet es mit „to be“ + going to + Grundform. Es steht auch, wenn man schon sieht, dass etwas passieren wird: „Look at those clouds. It’s going to rain.“',
            },
          },
          table: {
            headers: ['', 'example'],
            rows: [
              ['+', 'I’m going to paint the flat.'],
              ['–', 'She isn’t going to travel.'],
              ['?', 'What are you going to do?'],
              ['you can see it', 'It’s going to rain.'],
            ],
          },
        },
        {
          id: 'en10-1-cloze',
          type: 'CLOZE',
          instruction: 'Complete with the correct form of going to.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Anna and Yuki ' },
            { kind: 'GAP', gapId: 'g1', solution: ['are going to'], hint: 'travel', width: 13 },
            { kind: 'TEXT', text: ' travel around Scotland. Karim ' },
            { kind: 'GAP', gapId: 'g2', solution: ['is going to', '’s going to', "'s going to"], hint: 'paint', width: 12 },
            { kind: 'TEXT', text: ' paint his flat. Diego ' },
            { kind: 'GAP', gapId: 'g3', solution: ['isn’t going to', "isn't going to", 'is not going to'], hint: 'not', width: 15 },
            { kind: 'TEXT', text: ' go on holiday.' },
          ],
        },
        {
          id: 'en10-1-choice',
          type: 'CHOICE',
          instruction: 'Choose the best sentence.',
          question: 'The sky is black and it’s very windy.',
          options: [
            { id: 'o1', text: 'It rains.' },
            { id: 'o2', text: 'It’s going to rain.' },
            { id: 'o3', text: 'It going to rain.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'You can see that it will rain soon: “It’s going to rain.” Don’t forget “is”.',
          explanationTranslations: {
            de: 'Man sieht schon, dass es gleich regnen wird: „It’s going to rain.“ Das „is“ nicht vergessen.',
          },
        },
        {
          id: 'en10-1-order',
          type: 'ORDERING',
          instruction: 'Make a correct question.',
          items: [
            { id: 's1', text: 'What' },
            { id: 's2', text: 'are' },
            { id: 's3', text: 'you' },
            { id: 's4', text: 'going to' },
            { id: 's5', text: 'do?' },
          ],
          solution: ['s1', 's2', 's3', 's4', 's5'],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – will.
  {
    order: 2,
    title: 'I’ll carry that for you',
    subtitle: 'Spontane Entscheidungen und Vorhersagen mit will',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'en10-2-h1', type: 'HEADING', level: 1, text: 'I’ll carry that for you' },
        {
          id: 'en10-2-dlg',
          type: 'DIALOGUE',
          title: 'Packing',
          lines: [
            { speaker: 'Yuki', text: 'This suitcase is so heavy!' },
            { speaker: 'Anna', text: 'I’ll carry it for you.' },
            { speaker: 'Yuki', text: 'Thanks! Oh no, I haven’t got a raincoat.' },
            { speaker: 'Anna', text: 'Don’t worry, I’ll lend you mine. It will probably rain a lot in Scotland.' },
            { speaker: 'Yuki', text: 'Do you think we’ll see the Loch Ness Monster?' },
            { speaker: 'Anna', text: 'No, I don’t think we will!' },
          ],
        },
        {
          id: 'en10-2-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'will – decided now',
          text: 'Use “will” (short: ’ll) for decisions you make at the moment of speaking, for offers and promises: “I’ll carry it.” Also for predictions – what you think or believe about the future: “It will probably rain.”, “I think you’ll like it.” The negative is “won’t” (= will not). Careful: German “ich will” means “I want”, not “I will”!',
          translations: {
            de: {
              title: 'will – jetzt entschieden',
              text: '„will“ (kurz: ’ll) steht für Entscheidungen, die man im Moment des Sprechens trifft, für Angebote und Versprechen: „I’ll carry it.“ Außerdem für Vorhersagen – was man über die Zukunft denkt oder glaubt: „It will probably rain.“, „I think you’ll like it.“ Die Verneinung ist „won’t“ (= will not). Vorsicht: Das deutsche „ich will“ heißt „I want“, nicht „I will“!',
            },
          },
          table: {
            headers: ['use', 'example'],
            rows: [
              ['decision now', 'I’m hungry – I’ll make a sandwich.'],
              ['offer', 'I’ll help you with your bag.'],
              ['promise', 'I won’t tell anybody.'],
              ['prediction', 'I think it will be sunny tomorrow.'],
            ],
          },
        },
        {
          id: 'en10-2-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct translation.',
          question: '“Ich will ein Eis.”',
          options: [
            { id: 'o1', text: 'I will an ice cream.' },
            { id: 'o2', text: 'I want an ice cream.' },
            { id: 'o3', text: 'I’ll an ice cream.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'German “wollen” is “want” in English. English “will” is for the future.',
          explanationTranslations: {
            de: 'Das deutsche „wollen“ heißt auf Englisch „want“. Das englische „will“ drückt die Zukunft aus.',
          },
        },
        {
          id: 'en10-2-match',
          type: 'MATCHING',
          instruction: 'Match the situation with the reaction.',
          left: [
            { id: 'l1', text: 'The phone is ringing.' },
            { id: 'l2', text: 'It’s cold in here.' },
            { id: 'l3', text: 'I can’t open this jar.' },
            { id: 'l4', text: 'Please don’t tell Diego.' },
          ],
          right: [
            { id: 'r1', text: 'I’ll answer it.' },
            { id: 'r2', text: 'I’ll close the window.' },
            { id: 'r3', text: 'Give it to me – I’ll try.' },
            { id: 'r4', text: 'Don’t worry, I won’t.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'en10-2-info-compare',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'will or going to?',
          text: 'Decided before → going to: “I’m going to visit my aunt on Sunday.” (it’s my plan). Decided now → will: “Oh, it’s Sunday? Then I’ll visit my aunt.”',
          translations: {
            de: {
              title: 'will oder going to?',
              text: 'Vorher entschieden → going to: „I’m going to visit my aunt on Sunday.“ (das ist mein Plan). Jetzt entschieden → will: „Oh, it’s Sunday? Then I’ll visit my aunt.“',
            },
          },
        },
        {
          id: 'en10-2-cloze',
          type: 'CLOZE',
          instruction: 'Complete with ’ll or going to.',
          wordBank: ['’ll', 'going to'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '▸ Why have you got a paintbrush?\n▸ I’m ' },
            { kind: 'GAP', gapId: 'w1', solution: ['going to'], width: 9 },
            { kind: 'TEXT', text: ' paint the kitchen. I decided last week.\n▸ Oh, the paint is on the top shelf. I' },
            { kind: 'GAP', gapId: 'w2', solution: ['’ll', "'ll"], width: 5 },
            { kind: 'TEXT', text: ' get it for you.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – Present Continuous für Verabredungen, Hotel buchen.
  {
    order: 3,
    title: 'We’re staying at a B&B',
    subtitle: 'Feste Termine, ein Zimmer buchen',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'en10-3-h1', type: 'HEADING', level: 1, text: 'We’re staying at a B&B' },
        {
          id: 'en10-3-dlg',
          type: 'DIALOGUE',
          title: 'Booking a room',
          lines: [
            { speaker: 'Owner', text: 'Thistle B&B, good afternoon.' },
            { speaker: 'Anna', text: 'Hello. Have you got a twin room for two nights, from the 14th of July?' },
            { speaker: 'Owner', text: 'Let me check … Yes, we have. It’s £90 a night, with breakfast.' },
            { speaker: 'Anna', text: 'Great. We’re arriving on the 14th in the evening. Is that a problem?' },
            { speaker: 'Owner', text: 'Not at all. Check-in is until ten. Can I have your name and email?' },
            { speaker: 'Anna', text: 'Anna Weber – W-E-B-E-R. My email is anna.weber@mailbox.de.' },
          ],
        },
        {
          id: 'en10-3-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Present continuous for arrangements',
          text: 'When something is fixed – you have a ticket, a booking or an appointment – English often uses the present continuous for the future: “We’re arriving on the 14th.”, “I’m meeting Tom at six.” You always need a future time word, or it means “now”.',
          translations: {
            de: {
              title: 'Present Continuous für feste Termine',
              text: 'Wenn etwas feststeht – man hat eine Fahrkarte, eine Buchung oder einen Termin –, verwendet das Englische für die Zukunft oft das Present Continuous: „We’re arriving on the 14th.“, „I’m meeting Tom at six.“ Man braucht immer eine Zeitangabe für die Zukunft, sonst bedeutet es „jetzt“.',
            },
          },
          table: {
            headers: ['form', 'meaning', 'example'],
            rows: [
              ['going to', 'plan, intention', 'We’re going to see Edinburgh.'],
              ['present continuous', 'fixed arrangement', 'We’re taking the 9:15 train on Monday.'],
              ['will', 'decision now, prediction', 'I think we’ll love it.'],
            ],
          },
        },
        {
          id: 'en10-3-vocab',
          type: 'VOCAB_LIST',
          title: 'Words: accommodation',
          items: [
            { term: 'B&B (bed and breakfast)', translations: { de: 'die Pension, Frühstückspension', es: 'el alojamiento con desayuno' } },
            { term: 'single / double room', translations: { de: 'das Einzel- / Doppelzimmer', es: 'la habitación individual / doble' } },
            { term: 'twin room', translations: { de: 'Zimmer mit zwei Einzelbetten', es: 'habitación con dos camas' } },
            { term: 'to book', translations: { de: 'buchen', es: 'reservar' } },
            { term: 'check in / check out', translations: { de: 'einchecken / auschecken', es: 'registrarse / dejar la habitación' } },
            { term: 'a night', translations: { de: 'pro Nacht', es: 'por noche' }, example: '£90 a night' },
            { term: 'available', translations: { de: 'verfügbar, frei', es: 'disponible' } },
          ],
        },
        {
          id: 'en10-3-choice',
          type: 'CHOICE',
          instruction: 'Choose the best sentence.',
          question: 'You have a ticket for a concert on Saturday.',
          options: [
            { id: 'o1', text: 'I go to a concert on Saturday.' },
            { id: 'o2', text: 'I’m going to a concert on Saturday.' },
            { id: 'o3', text: 'I’ll go to a concert on Saturday, I think.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'You have a ticket – it is a fixed arrangement, so the present continuous is best: “I’m going to a concert on Saturday.”',
          explanationTranslations: {
            de: 'Sie haben eine Karte – der Termin steht fest, also passt das Present Continuous am besten: „I’m going to a concert on Saturday.“',
          },
        },
        {
          id: 'en10-3-cloze',
          type: 'CLOZE',
          instruction: 'Read the dialogue again. Complete.',
          wordBank: ['twin', 'nights', 'night', 'arriving', 'Check-in'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Anna books a ' },
            { kind: 'GAP', gapId: 'h1', solution: ['twin'], width: 6 },
            { kind: 'TEXT', text: ' room for two ' },
            { kind: 'GAP', gapId: 'h2', solution: ['nights'], width: 7 },
            { kind: 'TEXT', text: '. It costs £90 a ' },
            { kind: 'GAP', gapId: 'h3', solution: ['night'], width: 6 },
            { kind: 'TEXT', text: '. They’re ' },
            { kind: 'GAP', gapId: 'h4', solution: ['arriving'], width: 9 },
            { kind: 'TEXT', text: ' in the evening. ' },
            { kind: 'GAP', gapId: 'h5', solution: ['Check-in'], width: 9 },
            { kind: 'TEXT', text: ' is until ten.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – am Bahnhof.
  {
    order: 4,
    title: 'At the station',
    subtitle: 'Fahrkarten, Gleise, Durchsagen',
    estimatedMinutes: 20,
    content: {
      version: v,
      blocks: [
        { id: 'en10-4-h1', type: 'HEADING', level: 1, text: 'At the station' },
        {
          id: 'en10-4-dlg',
          type: 'DIALOGUE',
          title: 'At the ticket office',
          lines: [
            { speaker: 'Yuki', text: 'Two returns to Edinburgh, please.' },
            { speaker: 'Clerk', text: 'When are you coming back?' },
            { speaker: 'Yuki', text: 'On Sunday.' },
            { speaker: 'Clerk', text: 'That’s £142, please. The next train leaves at 9:15 from platform 4.' },
            { speaker: 'Yuki', text: 'Do we have to change?' },
            { speaker: 'Clerk', text: 'No, it’s a direct train. It arrives at 12:40.' },
          ],
        },
        {
          id: 'en10-4-vocab',
          type: 'VOCAB_LIST',
          title: 'Words: travelling by train',
          items: [
            { term: 'single (ticket)', translations: { de: 'einfache Fahrkarte', es: 'billete de ida' } },
            { term: 'return (ticket)', translations: { de: 'Hin- und Rückfahrkarte', es: 'billete de ida y vuelta' } },
            { term: 'platform', translations: { de: 'das Gleis, der Bahnsteig', es: 'el andén, la vía' } },
            { term: 'to leave / to depart', translations: { de: 'abfahren', es: 'salir' } },
            { term: 'to arrive', translations: { de: 'ankommen', es: 'llegar' } },
            { term: 'to change (trains)', translations: { de: 'umsteigen', es: 'hacer transbordo' } },
            { term: 'delayed', translations: { de: 'verspätet', es: 'con retraso' } },
            { term: 'cancelled', translations: { de: 'gestrichen, ausgefallen', es: 'cancelado' } },
          ],
        },
        {
          id: 'en10-4-info-timetable',
          type: 'INFO',
          variant: 'TIP',
          title: 'Timetables: present simple',
          text: 'For timetables and schedules, English uses the present simple even for the future: “The train leaves at 9:15.”, “The film starts at eight.”',
          translations: {
            de: {
              title: 'Fahrpläne: Present Simple',
              text: 'Bei Fahrplänen und festen Zeitplänen verwendet das Englische auch für die Zukunft das Present Simple: „The train leaves at 9:15.“, „The film starts at eight.“',
            },
          },
        },
        {
          id: 'en10-4-text',
          type: 'TEXT',
          text: 'Announcement: “Platform 4 for the 9:15 LNER service to Edinburgh. This train is delayed by approximately ten minutes. We apologise for the delay. The 9:30 service to Newcastle is cancelled.”',
          translations: {
            de: 'Durchsage: „Gleis 4, der LNER-Zug um 9:15 nach Edinburgh. Dieser Zug hat voraussichtlich etwa zehn Minuten Verspätung. Wir bitten die Verspätung zu entschuldigen. Der Zug um 9:30 nach Newcastle fällt aus.“',
          },
        },
        {
          id: 'en10-4-choice',
          type: 'CHOICE',
          instruction: 'Answer the question about the announcement.',
          question: 'When will the train to Edinburgh leave?',
          options: [
            { id: 'o1', text: 'At about 9:25.' },
            { id: 'o2', text: 'At 9:15, on time.' },
            { id: 'o3', text: 'It’s cancelled.' },
          ],
          multiple: false,
          solution: ['o1'],
          explanation: 'It is delayed by about ten minutes: 9:15 + 10 = about 9:25. The Newcastle train is cancelled.',
          explanationTranslations: {
            de: 'Er hat etwa zehn Minuten Verspätung: 9:15 + 10 = etwa 9:25. Ausfallen wird der Zug nach Newcastle.',
          },
        },
        {
          id: 'en10-4-match',
          type: 'MATCHING',
          instruction: 'Match the English with the German.',
          left: [
            { id: 'l1', text: 'a return ticket' },
            { id: 'l2', text: 'to change trains' },
            { id: 'l3', text: 'the train is delayed' },
            { id: 'l4', text: 'platform 4' },
          ],
          right: [
            { id: 'r1', text: 'eine Hin- und Rückfahrkarte' },
            { id: 'r2', text: 'umsteigen' },
            { id: 'r3', text: 'der Zug hat Verspätung' },
            { id: 'r4', text: 'Gleis 4' },
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

  // ====================================================== SEITE 5
  // Seite 5 – Rückblick.
  {
    order: 5,
    title: 'Can you do it?',
    subtitle: 'Rückblick auf das ganze Kapitel',
    estimatedMinutes: 18,
    content: {
      version: v,
      blocks: [
        { id: 'en10-5-h1', type: 'HEADING', level: 1, text: 'Can you do it?' },
        {
          id: 'en10-5-intro',
          type: 'TEXT',
          text: 'The whole chapter again: going to, will, the present continuous for arrangements, hotels and trains.',
          translations: {
            de: 'Das ganze Kapitel noch einmal: going to, will, das Present Continuous für feste Termine, Hotels und Züge.',
          },
        },
        {
          id: 'en10-5-cloze',
          type: 'CLOZE',
          instruction: 'Complete the text.',
          wordBank: ['going', 'leaves', 'staying', '’ll', 'won’t'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Next month I’m ' },
            { kind: 'GAP', gapId: 'f1', solution: ['going'], width: 6 },
            { kind: 'TEXT', text: ' to visit London. My train ' },
            { kind: 'GAP', gapId: 'f2', solution: ['leaves'], width: 7 },
            { kind: 'TEXT', text: ' at 7:40 on Friday. I’m ' },
            { kind: 'GAP', gapId: 'f3', solution: ['staying'], width: 8 },
            { kind: 'TEXT', text: ' with a friend. I think it' },
            { kind: 'GAP', gapId: 'f4', solution: ['’ll', "'ll"], width: 5 },
            { kind: 'TEXT', text: ' be great, but it ' },
            { kind: 'GAP', gapId: 'f5', solution: ['won’t', "won't"], width: 6 },
            { kind: 'TEXT', text: ' be cheap!' },
          ],
        },
        {
          id: 'en10-5-match',
          type: 'MATCHING',
          instruction: 'Match the situation with the best sentence.',
          left: [
            { id: 'm1', text: 'You decided last week.' },
            { id: 'm2', text: 'You decide now.' },
            { id: 'm3', text: 'You have a booking.' },
            { id: 'm4', text: 'It’s a timetable.' },
          ],
          right: [
            { id: 'x1', text: 'I’m going to learn to drive.' },
            { id: 'x2', text: 'OK, I’ll have the soup.' },
            { id: 'x3', text: 'We’re flying to Rome on Monday.' },
            { id: 'x4', text: 'The bus leaves at 6:10.' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'x1' },
            { leftId: 'm2', rightId: 'x2' },
            { leftId: 'm3', rightId: 'x3' },
            { leftId: 'm4', rightId: 'x4' },
          ],
        },
        {
          id: 'en10-5-choice',
          type: 'CHOICE',
          instruction: 'Mark all the correct sentences.',
          question: 'Which of these sentences are correct?',
          options: [
            { id: 'r1', text: 'I think it will be sunny tomorrow.' },
            { id: 'r2', text: 'She going to buy a car.' },
            { id: 'r3', text: 'I’m meeting my boss at three.' },
            { id: 'r4', text: 'I will a coffee, please.' },
          ],
          multiple: true,
          solution: ['r1', 'r3'],
          explanation: '“going to” needs “to be”: “She’s going to buy …”. To order, say “I’d like a coffee” – “will” needs a verb.',
          explanationTranslations: {
            de: '„going to“ braucht „to be“: „She’s going to buy …“. Zum Bestellen sagt man „I’d like a coffee“ – „will“ braucht ein Verb.',
          },
        },
        {
          id: 'en10-5-writing',
          type: 'WRITING',
          instruction: 'Write about your next trip.',
          prompt:
            'Write six to eight sentences: Where are you going to go? How are you travelling? Where are you staying? What do you think the weather will be like? What are you going to do there?',
          minWords: 50,
          maxWords: 150,
          aiFeedback: true,
          sampleAnswer:
            'In August I’m going to visit my cousin in Dublin. I’m flying from Frankfurt on the 3rd, and I’m staying at her flat for a week. I think the weather will be quite cool, so I’m going to take a jacket. We’re going to walk along the coast and visit some pubs. I think it will be a lot of fun.',
        },
      ],
    },
  },
];
