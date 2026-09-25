import type { UnitSeed } from './chapter-beginner-1';

/**
 * Englisch, Beginner, Kapitel 12: „Celebrations“ (A2, Kapitel 6)
 *
 * Das letzte Kapitel des Beginner-Bandes. Seite 1 stellt Feste vor und
 * bringt die Datumsangaben, Seite 2 Einladungen annehmen und ablehnen,
 * Seite 3 Glückwünsche und Verben mit zwei Objekten („give her a present“),
 * Seite 4 eine Erzählung, in der die Vergangenheitsformen aus Kapitel 7 und 8
 * zusammenkommen.
 *
 * Übersetzungen wie im ganzen Beginner-Band.
 */
const v = 1;

export const ENGLISH_BEGINNER_12_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Feste und Daten.
  {
    order: 1,
    title: 'Festivals',
    subtitle: 'Feste im englischsprachigen Raum, Daten',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'en12-1-h1', type: 'HEADING', level: 1, text: 'Festivals' },
        {
          id: 'en12-1-image',
          type: 'IMAGE',
          url: 'illustration:fiesta-lights',
          alt: 'Bunte Lichterketten und Wimpel über einer abendlichen Straße.',
          caption: 'Time to celebrate!',
        },
        {
          id: 'en12-1-text',
          type: 'TEXT',
          text: 'Some special days in the English-speaking world: On the 5th of November, people in Britain celebrate Bonfire Night with fireworks and big fires. In the USA, families meet for Thanksgiving on the fourth Thursday in November and eat turkey. At Christmas, British people pull crackers and wear paper crowns, and on the 26th of December – Boxing Day – many shops have big sales. And on the 17th of March, the whole world seems to be Irish: it’s St Patrick’s Day.',
          translations: {
            de: 'Einige besondere Tage in der englischsprachigen Welt: Am 5. November feiert man in Großbritannien die Bonfire Night mit Feuerwerk und großen Feuern. In den USA treffen sich die Familien am vierten Donnerstag im November zu Thanksgiving und essen Truthahn. An Weihnachten ziehen Britinnen und Briten an Knallbonbons und tragen Papierkronen, und am 26. Dezember – dem Boxing Day – haben viele Geschäfte großen Ausverkauf. Und am 17. März scheint die ganze Welt irisch zu sein: Es ist St Patrick’s Day.',
          },
        },
        {
          id: 'en12-1-match',
          type: 'MATCHING',
          instruction: 'Match the festival with the date.',
          left: [
            { id: 'l1', text: 'Bonfire Night' },
            { id: 'l2', text: 'Boxing Day' },
            { id: 'l3', text: 'St Patrick’s Day' },
            { id: 'l4', text: 'Thanksgiving' },
          ],
          right: [
            { id: 'r1', text: 'the 5th of November' },
            { id: 'r2', text: 'the 26th of December' },
            { id: 'r3', text: 'the 17th of March' },
            { id: 'r4', text: 'the fourth Thursday in November' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'en12-1-info-dates',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Dates: on the 5th of November',
          text: 'Dates use ordinal numbers. British English writes “5 November” or “5th November” and says “the fifth of November”. American English writes “November 5” and says “November fifth”. Dates go with “on”: “on the 5th of November”, “on Christmas Day” – but “at Christmas” for the whole holiday.',
          translations: {
            de: {
              title: 'Daten: on the 5th of November',
              text: 'Daten stehen mit Ordnungszahlen. Britisches Englisch schreibt „5 November“ oder „5th November“ und sagt „the fifth of November“. Amerikanisches Englisch schreibt „November 5“ und sagt „November fifth“. Daten stehen mit „on“: „on the 5th of November“, „on Christmas Day“ – aber „at Christmas“ für die Feiertage insgesamt.',
            },
          },
          table: {
            headers: ['written', 'said (UK)'],
            rows: [
              ['1 January', 'the first of January'],
              ['22 February', 'the twenty-second of February'],
              ['3 May', 'the third of May'],
              ['31 October', 'the thirty-first of October'],
            ],
          },
        },
        {
          id: 'en12-1-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'Which sentence is correct?',
          options: [
            { id: 'o1', text: 'My birthday is in the 3rd of June.' },
            { id: 'o2', text: 'My birthday is on the 3rd of June.' },
            { id: 'o3', text: 'My birthday is at 3 June.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'Dates go with “on”: “on the 3rd of June”. Months alone go with “in”: “in June”.',
          explanationTranslations: {
            de: 'Daten stehen mit „on“: „on the 3rd of June“. Monate allein stehen mit „in“: „in June“.',
          },
        },
        {
          id: 'en12-1-cloze',
          type: 'CLOZE',
          instruction: 'Complete with in, on or at.',
          wordBank: ['in', 'on', 'at'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'We have a big family dinner ' },
            { kind: 'GAP', gapId: 'p1', solution: ['at'], width: 4 },
            { kind: 'TEXT', text: ' Christmas. My sister’s birthday is ' },
            { kind: 'GAP', gapId: 'p2', solution: ['on'], width: 4 },
            { kind: 'TEXT', text: ' the 17th of March. The festival is always ' },
            { kind: 'GAP', gapId: 'p3', solution: ['in'], width: 4 },
            { kind: 'TEXT', text: ' August.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – Einladungen.
  {
    order: 2,
    title: 'Would you like to come?',
    subtitle: 'Einladen, zusagen, absagen',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'en12-2-h1', type: 'HEADING', level: 1, text: 'Would you like to come?' },
        {
          id: 'en12-2-text',
          type: 'TEXT',
          text: 'Hi everyone! It’s the end of our course, so I’m having a party at my flat on Saturday the 21st, from 7 p.m. There will be food from all our countries – please bring something small from yours! Would you like to come? Let me know by Thursday. Emma',
          translations: {
            de: 'Hallo zusammen! Unser Kurs geht zu Ende, deshalb mache ich am Samstag, dem 21., ab 19 Uhr eine Party in meiner Wohnung. Es gibt Essen aus all unseren Ländern – bringt bitte eine Kleinigkeit aus eurem mit! Habt ihr Lust zu kommen? Sagt mir bis Donnerstag Bescheid. Emma',
          },
        },
        {
          id: 'en12-2-dlg',
          type: 'DIALOGUE',
          title: 'Answers',
          lines: [
            { speaker: 'Diego', text: 'Thanks, Emma, I’d love to! I’ll bring some tacos.' },
            { speaker: 'Yuki', text: 'That sounds great. Can I bring my flatmate?' },
            { speaker: 'Karim', text: 'I’m afraid I can’t come until nine – I’m working late. Is that OK?' },
            { speaker: 'Emma', text: 'Of course! Come when you can.' },
          ],
        },
        {
          id: 'en12-2-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Inviting, accepting, refusing',
          text: 'To invite someone politely, use “Would you like to + verb?”. For a less formal invitation: “Do you want to …?” or “Let’s …”. When you say no, English speakers almost always say sorry and give a reason: “I’m afraid I can’t – I’m working.” A simple “No.” sounds very rude.',
          translations: {
            de: {
              title: 'Einladen, zusagen, absagen',
              text: 'Höflich lädt man mit „Would you like to + Verb?“ ein. Weniger förmlich: „Do you want to …?“ oder „Let’s …“. Wer absagt, entschuldigt sich im Englischen fast immer und nennt einen Grund: „I’m afraid I can’t – I’m working.“ Ein einfaches „No.“ klingt sehr unhöflich.',
            },
          },
          table: {
            headers: ['invite', 'yes', 'no'],
            rows: [
              ['Would you like to come?', 'I’d love to!', 'I’m afraid I can’t.'],
              ['Do you want to join us?', 'Sure, sounds great.', 'Sorry, I’m busy that day.'],
              ['Let’s go to the cinema.', 'Good idea!', 'Maybe another time?'],
            ],
          },
        },
        {
          id: 'en12-2-choice',
          type: 'CHOICE',
          instruction: 'Choose the most polite answer.',
          question: '“Would you like to come to dinner on Friday?” – You can’t.',
          options: [
            { id: 'o1', text: 'No, I don’t want.' },
            { id: 'o2', text: 'I’m afraid I can’t. I’m visiting my parents. But thanks!' },
            { id: 'o3', text: 'No.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'A polite “no” has three parts: “I’m afraid I can’t”, a reason, and “thanks”.',
          explanationTranslations: {
            de: 'Ein höfliches Nein hat drei Teile: „I’m afraid I can’t“, einen Grund und ein „thanks“.',
          },
        },
        {
          id: 'en12-2-cloze',
          type: 'CLOZE',
          instruction: 'Complete the invitation and the answer.',
          wordBank: ['like', 'to', 'love', 'afraid', 'Let’s'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '▸ Would you ' },
            { kind: 'GAP', gapId: 'i1', solution: ['like'], width: 5 },
            { kind: 'TEXT', text: ' ' },
            { kind: 'GAP', gapId: 'i2', solution: ['to'], width: 4 },
            { kind: 'TEXT', text: ' come to my party?\n▸ I’d ' },
            { kind: 'GAP', gapId: 'i3', solution: ['love'], width: 5 },
            { kind: 'TEXT', text: ' to! But I’m ' },
            { kind: 'GAP', gapId: 'i4', solution: ['afraid'], width: 7 },
            { kind: 'TEXT', text: ' I can’t come before nine.\n▸ No problem. ' },
            { kind: 'GAP', gapId: 'i5', solution: ['Let’s', "Let's"], width: 6 },
            { kind: 'TEXT', text: ' say nine, then.' },
          ],
        },
        {
          id: 'en12-2-match',
          type: 'MATCHING',
          instruction: 'Match the invitation with the answer.',
          left: [
            { id: 'l1', text: 'Would you like to come for a drink?' },
            { id: 'l2', text: 'Let’s have a picnic on Sunday.' },
            { id: 'l3', text: 'Do you want to join us for lunch?' },
          ],
          right: [
            { id: 'r1', text: 'I’d love to. Where shall we meet?' },
            { id: 'r2', text: 'Good idea! I’ll bring the sandwiches.' },
            { id: 'r3', text: 'Sorry, I’ve got a meeting. Maybe tomorrow?' },
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

  // ====================================================== SEITE 3
  // Seite 3 – Glückwünsche, Verben mit zwei Objekten.
  {
    order: 3,
    title: 'Congratulations!',
    subtitle: 'Glückwünsche und Geschenke',
    estimatedMinutes: 20,
    content: {
      version: v,
      blocks: [
        { id: 'en12-3-h1', type: 'HEADING', level: 1, text: 'Congratulations!' },
        {
          id: 'en12-3-vocab',
          type: 'VOCAB_LIST',
          title: 'Words: wishes',
          items: [
            { term: 'Happy birthday!', translations: { de: 'Alles Gute zum Geburtstag!', es: '¡Feliz cumpleaños!' } },
            { term: 'Congratulations!', translations: { de: 'Herzlichen Glückwunsch!', es: '¡Enhorabuena!' }, example: 'Congratulations on your new job!' },
            { term: 'Good luck!', translations: { de: 'Viel Glück!', es: '¡Buena suerte!' } },
            { term: 'Merry Christmas!', translations: { de: 'Frohe Weihnachten!', es: '¡Feliz Navidad!' } },
            { term: 'Happy New Year!', translations: { de: 'Frohes neues Jahr!', es: '¡Feliz Año Nuevo!' } },
            { term: 'Get well soon!', translations: { de: 'Gute Besserung!', es: '¡Que te mejores!' } },
            { term: 'Have a great time!', translations: { de: 'Viel Spaß!', es: '¡Que lo pases bien!' } },
            { term: 'present / gift', translations: { de: 'das Geschenk', es: 'el regalo' } },
            { term: 'card', translations: { de: 'die Karte', es: 'la tarjeta' } },
          ],
        },
        {
          id: 'en12-3-match',
          type: 'MATCHING',
          instruction: 'What do you say?',
          left: [
            { id: 'l1', text: 'A friend is ill.' },
            { id: 'l2', text: 'A colleague has an exam tomorrow.' },
            { id: 'l3', text: 'Your brother is getting married.' },
            { id: 'l4', text: 'It’s the 1st of January.' },
          ],
          right: [
            { id: 'r1', text: 'Get well soon!' },
            { id: 'r2', text: 'Good luck!' },
            { id: 'r3', text: 'Congratulations!' },
            { id: 'r4', text: 'Happy New Year!' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'en12-3-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'give somebody something',
          text: 'Verbs like give, send, bring, buy and show can have two objects. The person usually comes first, without a preposition: “I gave Emma a book.”, “She sent me a card.” If the thing comes first, you need “to” (or “for” with buy): “I gave a book to Emma.”, “I bought flowers for my mum.”',
          translations: {
            de: {
              title: 'give somebody something',
              text: 'Verben wie give, send, bring, buy und show können zwei Objekte haben. Die Person steht meist zuerst, ohne Präposition: „I gave Emma a book.“, „She sent me a card.“ Steht die Sache zuerst, braucht man „to“ (bzw. „for“ bei buy): „I gave a book to Emma.“, „I bought flowers for my mum.“',
            },
          },
          table: {
            headers: ['person first', 'thing first'],
            rows: [
              ['I gave Emma a book.', 'I gave a book to Emma.'],
              ['She sent me a card.', 'She sent a card to me.'],
              ['We bought him a cake.', 'We bought a cake for him.'],
            ],
          },
        },
        {
          id: 'en12-3-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'Which sentence is correct?',
          options: [
            { id: 'o1', text: 'I gave to her a present.' },
            { id: 'o2', text: 'I gave her a present.' },
            { id: 'o3', text: 'I gave a present her.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'Person first → no preposition: “gave her a present”. Thing first → “to”: “gave a present to her”.',
          explanationTranslations: {
            de: 'Person zuerst → ohne Präposition: „gave her a present“. Sache zuerst → mit „to“: „gave a present to her“.',
          },
        },
        {
          id: 'en12-3-order',
          type: 'ORDERING',
          instruction: 'Make a correct sentence.',
          items: [
            { id: 'w1', text: 'Karim' },
            { id: 'w2', text: 'sent' },
            { id: 'w3', text: 'his mother' },
            { id: 'w4', text: 'some flowers.' },
          ],
          solution: ['w1', 'w2', 'w3', 'w4'],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – von einem Fest erzählen.
  {
    order: 4,
    title: 'It was a great party',
    subtitle: 'Von einem Fest erzählen',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'en12-4-h1', type: 'HEADING', level: 1, text: 'It was a great party' },
        {
          id: 'en12-4-text',
          type: 'TEXT',
          text: 'Yuki writes in her diary: “What a night! When I arrived at Emma’s flat, Diego was cooking tacos in the kitchen and Anna was putting up lights. Everybody brought something: I made sushi, and Karim came at nine with Egyptian sweets. We ate far too much! Later, while we were dancing, Emma gave each of us a small present – a notebook with the words ‘Keep learning!’. I think it was the best evening of the whole year. I’m going to miss them.”',
          translations: {
            de: 'Yuki schreibt in ihr Tagebuch: „Was für ein Abend! Als ich bei Emma ankam, kochte Diego gerade Tacos in der Küche, und Anna hängte Lichterketten auf. Alle hatten etwas mitgebracht: Ich hatte Sushi gemacht, und Karim kam um neun mit ägyptischen Süßigkeiten. Wir haben viel zu viel gegessen! Später, während wir tanzten, schenkte Emma jedem von uns ein kleines Geschenk – ein Notizbuch mit den Worten ‚Keep learning!‘. Ich glaube, es war der beste Abend des ganzen Jahres. Sie werden mir fehlen.“',
          },
        },
        {
          id: 'en12-4-choice',
          type: 'CHOICE',
          instruction: 'Answer the question about the text.',
          question: 'What was Anna doing when Yuki arrived?',
          options: [
            { id: 'o1', text: 'She was cooking tacos.' },
            { id: 'o2', text: 'She was putting up lights.' },
            { id: 'o3', text: 'She was dancing.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: '“Anna was putting up lights.” Diego was the one cooking tacos.',
          explanationTranslations: {
            de: '„Anna was putting up lights.“ Tacos gekocht hat Diego.',
          },
        },
        {
          id: 'en12-4-order',
          type: 'ORDERING',
          instruction: 'Put the evening in order.',
          items: [
            { id: 'd1', text: 'Yuki arrived at Emma’s flat.' },
            { id: 'd2', text: 'Karim came with Egyptian sweets.' },
            { id: 'd3', text: 'They ate too much.' },
            { id: 'd4', text: 'Emma gave everybody a notebook.' },
          ],
          solution: ['d1', 'd2', 'd3', 'd4'],
        },
        {
          id: 'en12-4-info',
          type: 'INFO',
          variant: 'TIP',
          title: 'Telling a story: all past forms together',
          text: 'A good story mixes the forms of chapters 7 and 8: the past continuous for the background (“Diego was cooking”), the past simple for the events (“Karim came at nine”), and first/then/later/when/while to connect them. Adjectives and superlatives make it more alive: “the best evening of the year”.',
          translations: {
            de: {
              title: 'Erzählen: alle Vergangenheitsformen zusammen',
              text: 'Eine gute Geschichte mischt die Formen aus Kapitel 7 und 8: das Past Continuous für den Hintergrund („Diego was cooking“), das Past Simple für die Ereignisse („Karim came at nine“) und first/then/later/when/while als Verbindung. Adjektive und Superlative machen sie lebendiger: „the best evening of the year“.',
            },
          },
        },
        {
          id: 'en12-4-cloze',
          type: 'CLOZE',
          instruction: 'Complete with the past simple or past continuous.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'When Yuki ' },
            { kind: 'GAP', gapId: 'p1', solution: ['arrived'], hint: 'arrive', width: 8 },
            { kind: 'TEXT', text: ', Diego ' },
            { kind: 'GAP', gapId: 'p2', solution: ['was cooking'], hint: 'cook', width: 12 },
            { kind: 'TEXT', text: '. Karim ' },
            { kind: 'GAP', gapId: 'p3', solution: ['came'], hint: 'come', width: 6 },
            { kind: 'TEXT', text: ' at nine. While they ' },
            { kind: 'GAP', gapId: 'p4', solution: ['were dancing'], hint: 'dance', width: 13 },
            { kind: 'TEXT', text: ', Emma ' },
            { kind: 'GAP', gapId: 'p5', solution: ['gave'], hint: 'give', width: 6 },
            { kind: 'TEXT', text: ' everybody a present.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – Rückblick auf Kapitel und Band.
  {
    order: 5,
    title: 'Can you do it?',
    subtitle: 'Rückblick auf das Kapitel – und auf A2',
    estimatedMinutes: 20,
    content: {
      version: v,
      blocks: [
        { id: 'en12-5-h1', type: 'HEADING', level: 1, text: 'Can you do it?' },
        {
          id: 'en12-5-intro',
          type: 'TEXT',
          text: 'The last page of the Beginner book! Here you practise this chapter and some important points from the whole of A2: the past, the future and comparisons.',
          translations: {
            de: 'Die letzte Seite des Beginner-Buchs! Hier üben Sie dieses Kapitel und einige wichtige Punkte aus ganz A2: die Vergangenheit, die Zukunft und Vergleiche.',
          },
        },
        {
          id: 'en12-5-cloze',
          type: 'CLOZE',
          instruction: 'Complete the text.',
          wordBank: ['on', 'afraid', 'gave', 'going', 'best'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'My friend invited me to her wedding ' },
            { kind: 'GAP', gapId: 'f1', solution: ['on'], width: 4 },
            { kind: 'TEXT', text: ' the 12th of June. At first I was ' },
            { kind: 'GAP', gapId: 'f2', solution: ['afraid'], width: 7 },
            { kind: 'TEXT', text: ' I couldn’t go, but I changed my plans. I ' },
            { kind: 'GAP', gapId: 'f3', solution: ['gave'], width: 6 },
            { kind: 'TEXT', text: ' her a painting. It was the ' },
            { kind: 'GAP', gapId: 'f4', solution: ['best'], width: 5 },
            { kind: 'TEXT', text: ' wedding I know – and next year I’m ' },
            { kind: 'GAP', gapId: 'f5', solution: ['going'], width: 6 },
            { kind: 'TEXT', text: ' to visit her in Canada.' },
          ],
        },
        {
          id: 'en12-5-match',
          type: 'MATCHING',
          instruction: 'Match the situation with the right sentence.',
          left: [
            { id: 'm1', text: 'A friend has a new job.' },
            { id: 'm2', text: 'You can’t go to a party.' },
            { id: 'm3', text: 'You invite a colleague.' },
            { id: 'm4', text: 'You say a date.' },
          ],
          right: [
            { id: 'x1', text: 'Congratulations!' },
            { id: 'x2', text: 'I’m afraid I can’t come.' },
            { id: 'x3', text: 'Would you like to come for dinner?' },
            { id: 'x4', text: 'the twenty-first of May' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'x1' },
            { leftId: 'm2', rightId: 'x2' },
            { leftId: 'm3', rightId: 'x3' },
            { leftId: 'm4', rightId: 'x4' },
          ],
        },
        {
          id: 'en12-5-choice',
          type: 'CHOICE',
          instruction: 'Mark all the correct sentences.',
          question: 'Which of these sentences are correct?',
          options: [
            { id: 'r1', text: 'We celebrate Bonfire Night on the 5th of November.' },
            { id: 'r2', text: 'Would you like come to my party?' },
            { id: 'r3', text: 'She bought her brother a new watch.' },
            { id: 'r4', text: 'I gave to him a card.' },
          ],
          multiple: true,
          solution: ['r1', 'r3'],
          explanation: '“Would you like” needs “to”: “Would you like to come?”. Person first → no “to”: “I gave him a card.”',
          explanationTranslations: {
            de: '„Would you like“ braucht „to“: „Would you like to come?“. Person zuerst → kein „to“: „I gave him a card.“',
          },
        },
        {
          id: 'en12-5-writing',
          type: 'WRITING',
          instruction: 'Write about a celebration.',
          prompt:
            'Write about a party, a wedding or a festival you went to (eight to ten sentences). When was it? Who was there? What was happening when you arrived? What did you do, eat and give? Was it the best party ever?',
          minWords: 60,
          maxWords: 180,
          aiFeedback: true,
          sampleAnswer:
            'Last December my grandmother celebrated her eightieth birthday. The party was on the 14th, in a small restaurant in her village. When we arrived, my cousins were decorating the room and my uncle was playing the piano. About forty people came. We gave her a photo album with pictures from her whole life, and she cried a little. We ate a huge cake and danced until midnight. It was one of the best parties I can remember. Next year we’re going to celebrate my parents’ anniversary.',
        },
      ],
    },
  },
];
