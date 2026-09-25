import type { UnitSeed } from './chapter-beginner-1';

/**
 * Englisch, Beginner, Kapitel 8: „When I was young“ (A2, Kapitel 2)
 *
 * Erinnerungen an die Kindheit. Seite 1 wiederholt was/were und bringt
 * could/couldn’t, Seite 2 „used to“ für frühere Gewohnheiten, Seite 3 das
 * Past Continuous und Seite 4 dessen Zusammenspiel mit dem Past Simple
 * (when/while) – der Hintergrund und das, was ihn unterbricht.
 *
 * Übersetzungen wie im ganzen Beginner-Band.
 */
const v = 1;

export const ENGLISH_BEGINNER_8_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Kindheit, was/were, could.
  {
    order: 1,
    title: 'My childhood',
    subtitle: 'Erinnerungen, could und couldn’t',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'en8-1-h1', type: 'HEADING', level: 1, text: 'My childhood' },
        {
          id: 'en8-1-image',
          type: 'IMAGE',
          url: 'illustration:childhood-toys',
          alt: 'Altes Spielzeug: ein Teddybär, Bauklötze, ein kleines Holzauto und ein Ball.',
          caption: 'Toys from long ago.',
        },
        {
          id: 'en8-1-text',
          type: 'TEXT',
          text: 'Karim remembers: “I was born in a small village near Luxor. Our house wasn’t big, but there was a garden with a lemon tree. My grandparents lived next door. I was a shy child, and I couldn’t swim until I was twelve – but I could run very fast! My best friend was a boy called Omar. We were always together.”',
          translations: {
            de: 'Karim erinnert sich: „Ich bin in einem kleinen Dorf in der Nähe von Luxor geboren. Unser Haus war nicht groß, aber es gab einen Garten mit einem Zitronenbaum. Meine Großeltern wohnten nebenan. Ich war ein schüchternes Kind, und bis ich zwölf war, konnte ich nicht schwimmen – aber ich konnte sehr schnell laufen! Mein bester Freund war ein Junge namens Omar. Wir waren immer zusammen.“',
          },
        },
        {
          id: 'en8-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Words: childhood',
          items: [
            { term: 'childhood', translations: { de: 'die Kindheit', es: 'la infancia' } },
            { term: 'I was born in …', translations: { de: 'ich bin in … geboren', es: 'nací en …' }, example: 'I was born in 1995.' },
            { term: 'village', translations: { de: 'das Dorf', es: 'el pueblo' } },
            { term: 'grandparents', translations: { de: 'die Großeltern', es: 'los abuelos' } },
            { term: 'shy', translations: { de: 'schüchtern', es: 'tímido' } },
            { term: 'best friend', translations: { de: 'der beste Freund, die beste Freundin', es: 'el/la mejor amigo/a' } },
            { term: 'toy', translations: { de: 'das Spielzeug', es: 'el juguete' } },
            { term: 'primary school', translations: { de: 'die Grundschule', es: 'la escuela primaria' } },
            { term: 'remember', translations: { de: 'sich erinnern (an)', es: 'recordar, acordarse de' } },
          ],
        },
        {
          id: 'en8-1-info-born',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'I was born – not “I am born”',
          text: 'In German you say “ich bin geboren”. In English, birth is always in the past: “I was born in 1990.”, “Where were you born?”',
          translations: {
            de: {
              title: 'I was born – nicht „I am born“',
              text: 'Im Deutschen sagt man „ich bin geboren“. Im Englischen steht die Geburt immer in der Vergangenheit: „I was born in 1990.“, „Where were you born?“',
            },
          },
        },
        {
          id: 'en8-1-info-could',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'could – the past of can',
          text: 'For abilities in the past, use “could” and “couldn’t”. Like “can”, it never changes and the next verb has no “to”: “I could read when I was four.”, “She couldn’t swim.”',
          translations: {
            de: {
              title: 'could – die Vergangenheit von can',
              text: 'Für Fähigkeiten in der Vergangenheit steht „could“ bzw. „couldn’t“. Wie „can“ ändert es sich nie, und das nächste Verb steht ohne „to“: „I could read when I was four.“, „She couldn’t swim.“',
            },
          },
          table: {
            headers: ['now', 'in the past'],
            rows: [
              ['I can swim.', 'I could swim.'],
              ['He can’t cook.', 'He couldn’t cook.'],
              ['Can you ride a bike?', 'Could you ride a bike?'],
            ],
          },
        },
        {
          id: 'en8-1-cloze',
          type: 'CLOZE',
          instruction: 'Read the text again. Complete.',
          wordBank: ['was', 'were', 'couldn’t', 'could', 'lived'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Karim ' },
            { kind: 'GAP', gapId: 'c1', solution: ['was'], width: 5 },
            { kind: 'TEXT', text: ' born near Luxor. His grandparents ' },
            { kind: 'GAP', gapId: 'c2', solution: ['lived'], width: 6 },
            { kind: 'TEXT', text: ' next door. He ' },
            { kind: 'GAP', gapId: 'c3', solution: ['couldn’t', "couldn't"], width: 9 },
            { kind: 'TEXT', text: ' swim, but he ' },
            { kind: 'GAP', gapId: 'c4', solution: ['could'], width: 6 },
            { kind: 'TEXT', text: ' run fast. He and Omar ' },
            { kind: 'GAP', gapId: 'c5', solution: ['were'], width: 5 },
            { kind: 'TEXT', text: ' best friends.' },
          ],
        },
        {
          id: 'en8-1-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct question.',
          question: 'You want to know the city of someone’s birth.',
          options: [
            { id: 'o1', text: 'Where are you born?' },
            { id: 'o2', text: 'Where were you born?' },
            { id: 'o3', text: 'Where did you born?' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'Birth is always in the past with “to be”: “Where were you born?”',
          explanationTranslations: {
            de: 'Die Geburt steht immer in der Vergangenheit mit „to be“: „Where were you born?“',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – used to.
  {
    order: 2,
    title: 'I used to …',
    subtitle: 'Frühere Gewohnheiten mit used to',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'en8-2-h1', type: 'HEADING', level: 1, text: 'I used to …' },
        {
          id: 'en8-2-dlg',
          type: 'DIALOGUE',
          title: 'Old photos',
          lines: [
            { speaker: 'Yuki', text: 'Is that you, Anna? With the long hair?' },
            { speaker: 'Anna', text: 'Yes! I used to have really long hair. And I used to wear glasses.' },
            { speaker: 'Yuki', text: 'Did you use to play an instrument? There’s a guitar in the photo.' },
            { speaker: 'Anna', text: 'Yes, I did. I used to play every day. But I don’t play any more.' },
            { speaker: 'Yuki', text: 'I didn’t use to like music at all. Now I love it!' },
          ],
        },
        {
          id: 'en8-2-info-usedto',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'used to – früher',
          text: '“used to” + verb describes things that were true or happened regularly in the past, but not now. German says “früher” with the past tense: “Früher hatte ich lange Haare.” = “I used to have long hair.” Questions and negatives use “did” – and then it is “use to”, without -d: “Did you use to …?”, “I didn’t use to …”.',
          translations: {
            de: {
              title: 'used to – früher',
              text: '„used to“ + Verb beschreibt, was früher galt oder regelmäßig geschah, heute aber nicht mehr. Das Deutsche sagt „früher“ mit Vergangenheit: „Früher hatte ich lange Haare.“ = „I used to have long hair.“ Fragen und Verneinungen bilden sich mit „did“ – und dann heißt es „use to“, ohne -d: „Did you use to …?“, „I didn’t use to …“.',
            },
          },
          table: {
            headers: ['', 'example'],
            rows: [
              ['+', 'I used to wear glasses.'],
              ['–', 'I didn’t use to like music.'],
              ['?', 'Did you use to play an instrument?'],
            ],
          },
        },
        {
          id: 'en8-2-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: '“Früher habe ich in Berlin gewohnt.” (Now I live in Munich.)',
          options: [
            { id: 'o1', text: 'I use to live in Berlin.' },
            { id: 'o2', text: 'I used to live in Berlin.' },
            { id: 'o3', text: 'I am used to live in Berlin.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'For a past situation that is not true now: “used to” + basic form.',
          explanationTranslations: {
            de: 'Für einen früheren Zustand, der heute nicht mehr gilt: „used to“ + Grundform.',
          },
        },
        {
          id: 'en8-2-cloze',
          type: 'CLOZE',
          instruction: 'Complete with used to, use to or didn’t use to.',
          wordBank: ['used to', 'use to', 'didn’t use to'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'When I was a child, I ' },
            { kind: 'GAP', gapId: 'u1', solution: ['used to'], width: 9 },
            { kind: 'TEXT', text: ' play in the street every day. I ' },
            { kind: 'GAP', gapId: 'u2', solution: ['didn’t use to', "didn't use to"], width: 13 },
            { kind: 'TEXT', text: ' like vegetables. Did you ' },
            { kind: 'GAP', gapId: 'u3', solution: ['use to'], width: 8 },
            { kind: 'TEXT', text: ' have a pet?' },
          ],
        },
        {
          id: 'en8-2-info-anymore',
          type: 'INFO',
          variant: 'TIP',
          title: 'not … any more',
          text: 'To say that something stopped, use “not … any more” at the end of the sentence: “I don’t play the guitar any more.” = “Ich spiele nicht mehr Gitarre.”',
          translations: {
            de: {
              title: 'not … any more',
              text: 'Um zu sagen, dass etwas aufgehört hat, verwendet man „not … any more“ am Satzende: „I don’t play the guitar any more.“ = „Ich spiele nicht mehr Gitarre.“',
            },
          },
        },
        {
          id: 'en8-2-match',
          type: 'MATCHING',
          instruction: 'Match then and now.',
          left: [
            { id: 'l1', text: 'I used to smoke.' },
            { id: 'l2', text: 'I used to live with my parents.' },
            { id: 'l3', text: 'I used to be shy.' },
            { id: 'l4', text: 'I didn’t use to like coffee.' },
          ],
          right: [
            { id: 'r1', text: 'I don’t smoke any more.' },
            { id: 'r2', text: 'Now I’ve got my own flat.' },
            { id: 'r3', text: 'Now I talk to everybody.' },
            { id: 'r4', text: 'Now I drink three cups a day.' },
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
  // Seite 3 – Past Continuous.
  {
    order: 3,
    title: 'What were you doing?',
    subtitle: 'Das Past Continuous',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'en8-3-h1', type: 'HEADING', level: 1, text: 'What were you doing?' },
        {
          id: 'en8-3-text',
          type: 'TEXT',
          text: 'Emma asks the class: “What were you doing yesterday at eight o’clock in the evening?” Diego was watching a film. Anna was working at the hospital. Yuki and her flatmate were cooking dinner. And Karim? He was sleeping on the sofa – with the TV on!',
          translations: {
            de: 'Emma fragt den Kurs: „Was habt ihr gestern Abend um acht Uhr gerade gemacht?“ Diego hat gerade einen Film geschaut. Anna hat im Krankenhaus gearbeitet. Yuki und ihre Mitbewohnerin haben gerade Abendessen gekocht. Und Karim? Er hat auf dem Sofa geschlafen – bei laufendem Fernseher!',
          },
        },
        {
          id: 'en8-3-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Past continuous: was/were + -ing',
          text: 'The past continuous describes an action that was in progress at a moment in the past – it had started, but it wasn’t finished. You form it with “was/were” and the verb + -ing. German has no special form; it says “gerade” or “dabei sein, etwas zu tun”.',
          translations: {
            de: {
              title: 'Past Continuous: was/were + -ing',
              text: 'Das Past Continuous beschreibt eine Handlung, die zu einem Zeitpunkt in der Vergangenheit gerade im Gange war – sie hatte begonnen, war aber nicht abgeschlossen. Man bildet es mit „was/were“ und dem Verb + -ing. Das Deutsche hat keine eigene Form; es sagt „gerade“ oder „dabei sein, etwas zu tun“.',
            },
          },
          table: {
            headers: ['', 'example'],
            rows: [
              ['I / he / she / it', 'I was watching a film.'],
              ['you / we / they', 'They were cooking.'],
              ['–', 'She wasn’t sleeping.'],
              ['?', 'What were you doing?'],
            ],
          },
        },
        {
          id: 'en8-3-cloze',
          type: 'CLOZE',
          instruction: 'Complete with the past continuous.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'At eight o’clock, Diego ' },
            { kind: 'GAP', gapId: 'p1', solution: ['was watching'], hint: 'watch', width: 13 },
            { kind: 'TEXT', text: ' a film. Yuki and her flatmate ' },
            { kind: 'GAP', gapId: 'p2', solution: ['were cooking'], hint: 'cook', width: 13 },
            { kind: 'TEXT', text: ' dinner. Karim ' },
            { kind: 'GAP', gapId: 'p3', solution: ['was sleeping'], hint: 'sleep', width: 13 },
            { kind: 'TEXT', text: ' on the sofa.' },
          ],
        },
        {
          id: 'en8-3-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct answer.',
          question: '“What were you doing at 10 p.m. last night?”',
          options: [
            { id: 'o1', text: 'I was reading a book.' },
            { id: 'o2', text: 'I were reading a book.' },
            { id: 'o3', text: 'I was read a book.' },
          ],
          multiple: false,
          solution: ['o1'],
          explanation: '“I” goes with “was”, and the main verb needs -ing: “I was reading”.',
          explanationTranslations: {
            de: 'Zu „I“ gehört „was“, und das Hauptverb braucht -ing: „I was reading“.',
          },
        },
        {
          id: 'en8-3-order',
          type: 'ORDERING',
          instruction: 'Make a correct question.',
          items: [
            { id: 's1', text: 'What' },
            { id: 's2', text: 'were' },
            { id: 's3', text: 'you' },
            { id: 's4', text: 'doing' },
            { id: 's5', text: 'at eight?' },
          ],
          solution: ['s1', 's2', 's3', 's4', 's5'],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – when und while: Hintergrund und Unterbrechung.
  {
    order: 4,
    title: 'While I was walking …',
    subtitle: 'Past Continuous und Past Simple zusammen',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'en8-4-h1', type: 'HEADING', level: 1, text: 'While I was walking …' },
        {
          id: 'en8-4-text',
          type: 'TEXT',
          text: 'Anna tells a story from her childhood: “I was eight. It was a sunny day and my brother and I were playing in the garden. While we were playing, a big dog ran through the gate. My brother screamed and climbed a tree. I wasn’t afraid – I gave the dog my sandwich. When my mum came out, the dog was sitting next to me and we were sharing lunch!”',
          translations: {
            de: 'Anna erzählt eine Geschichte aus ihrer Kindheit: „Ich war acht. Es war ein sonniger Tag, und mein Bruder und ich spielten im Garten. Während wir spielten, rannte ein großer Hund durch das Tor. Mein Bruder schrie und kletterte auf einen Baum. Ich hatte keine Angst – ich gab dem Hund mein Sandwich. Als meine Mutter herauskam, saß der Hund neben mir, und wir teilten uns das Mittagessen!“',
          },
        },
        {
          id: 'en8-4-info',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'The background and the event',
          text: 'In a story, the past continuous is the background – what was going on. The past simple is the event that happens in the middle of it. “while” usually introduces the background, “when” the short event: “While we were playing, a dog ran into the garden.” – “We were playing when a dog ran into the garden.”',
          translations: {
            de: {
              title: 'Hintergrund und Ereignis',
              text: 'In einer Geschichte ist das Past Continuous der Hintergrund – was gerade los war. Das Past Simple ist das Ereignis, das mittendrin passiert. „while“ leitet meist den Hintergrund ein, „when“ das kurze Ereignis: „While we were playing, a dog ran into the garden.“ – „We were playing when a dog ran into the garden.“',
            },
          },
          table: {
            headers: ['background (was/were + -ing)', 'event (past simple)'],
            rows: [
              ['While I was cooking,', 'the phone rang.'],
              ['I was walking home', 'when it started to rain.'],
              ['While they were sleeping,', 'somebody knocked on the door.'],
            ],
          },
        },
        {
          id: 'en8-4-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'Which sentence is correct?',
          options: [
            { id: 'o1', text: 'I was having a shower when the phone was ringing.' },
            { id: 'o2', text: 'I was having a shower when the phone rang.' },
            { id: 'o3', text: 'I had a shower when the phone was ring.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'The shower is the background (past continuous), the phone call is the short event (past simple).',
          explanationTranslations: {
            de: 'Das Duschen ist der Hintergrund (Past Continuous), das Klingeln das kurze Ereignis (Past Simple).',
          },
        },
        {
          id: 'en8-4-cloze',
          type: 'CLOZE',
          instruction: 'Complete with the past simple or the past continuous.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'While I ' },
            { kind: 'GAP', gapId: 'w1', solution: ['was walking'], hint: 'walk', width: 12 },
            { kind: 'TEXT', text: ' to school, I ' },
            { kind: 'GAP', gapId: 'w2', solution: ['found'], hint: 'find', width: 7 },
            { kind: 'TEXT', text: ' a £10 note. My friends ' },
            { kind: 'GAP', gapId: 'w3', solution: ['were waiting'], hint: 'wait', width: 13 },
            { kind: 'TEXT', text: ' for me when I ' },
            { kind: 'GAP', gapId: 'w4', solution: ['arrived'], hint: 'arrive', width: 8 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'en8-4-match',
          type: 'MATCHING',
          instruction: 'Match the two halves.',
          left: [
            { id: 'l1', text: 'While we were playing in the garden,' },
            { id: 'l2', text: 'My brother screamed' },
            { id: 'l3', text: 'When my mum came out,' },
          ],
          right: [
            { id: 'r1', text: 'a big dog ran through the gate.' },
            { id: 'r2', text: 'and climbed a tree.' },
            { id: 'r3', text: 'the dog was sitting next to me.' },
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
        { id: 'en8-5-h1', type: 'HEADING', level: 1, text: 'Can you do it?' },
        {
          id: 'en8-5-intro',
          type: 'TEXT',
          text: 'The whole chapter again: was born, could, used to, the past continuous and when/while.',
          translations: {
            de: 'Das ganze Kapitel noch einmal: was born, could, used to, das Past Continuous und when/while.',
          },
        },
        {
          id: 'en8-5-cloze',
          type: 'CLOZE',
          instruction: 'Complete the text.',
          wordBank: ['born', 'used', 'couldn’t', 'was', 'when'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'I was ' },
            { kind: 'GAP', gapId: 'f1', solution: ['born'], width: 6 },
            { kind: 'TEXT', text: ' in Graz. As a child I ' },
            { kind: 'GAP', gapId: 'f2', solution: ['used'], width: 6 },
            { kind: 'TEXT', text: ' to spend every summer with my grandma. I ' },
            { kind: 'GAP', gapId: 'f3', solution: ['couldn’t', "couldn't"], width: 9 },
            { kind: 'TEXT', text: ' ride a bike until I was ten. One day I ' },
            { kind: 'GAP', gapId: 'f4', solution: ['was'], width: 5 },
            { kind: 'TEXT', text: ' riding down a hill ' },
            { kind: 'GAP', gapId: 'f5', solution: ['when'], width: 6 },
            { kind: 'TEXT', text: ' I fell off. I still have the scar!' },
          ],
        },
        {
          id: 'en8-5-match',
          type: 'MATCHING',
          instruction: 'Match the question with the answer.',
          left: [
            { id: 'm1', text: 'Where were you born?' },
            { id: 'm2', text: 'Did you use to have a pet?' },
            { id: 'm3', text: 'What were you doing when I called?' },
            { id: 'm4', text: 'Could you read when you were five?' },
          ],
          right: [
            { id: 'x1', text: 'In a small town in Poland.' },
            { id: 'x2', text: 'Yes, we used to have a cat.' },
            { id: 'x3', text: 'I was driving.' },
            { id: 'x4', text: 'No, I couldn’t.' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'x1' },
            { leftId: 'm2', rightId: 'x2' },
            { leftId: 'm3', rightId: 'x3' },
            { leftId: 'm4', rightId: 'x4' },
          ],
        },
        {
          id: 'en8-5-choice',
          type: 'CHOICE',
          instruction: 'Mark all the correct sentences.',
          question: 'Which of these sentences are correct?',
          options: [
            { id: 'r1', text: 'I used to live in London.' },
            { id: 'r2', text: 'I am born in 1998.' },
            { id: 'r3', text: 'While she was cooking, the lights went out.' },
            { id: 'r4', text: 'Did you used to play football?' },
          ],
          multiple: true,
          solution: ['r1', 'r3'],
          explanation: 'Birth is in the past: “I was born”. After “did” it is “use to”: “Did you use to play …?”',
          explanationTranslations: {
            de: 'Die Geburt steht in der Vergangenheit: „I was born“. Nach „did“ heißt es „use to“: „Did you use to play …?“',
          },
        },
        {
          id: 'en8-5-writing',
          type: 'WRITING',
          instruction: 'Write about your childhood.',
          prompt:
            'Write six to eight sentences: Where were you born? Where did you live? What did you use to do? What could or couldn’t you do? Tell a short story with “while” or “when”.',
          minWords: 50,
          maxWords: 150,
          aiFeedback: true,
          sampleAnswer:
            'I was born in Leipzig in 1992. We lived in a flat on the fourth floor. I used to play football with my neighbours every afternoon, and I used to hate school. I could climb trees very well, but I couldn’t swim. One day, while I was climbing the big tree in the park, my trousers got caught on a branch. My friends laughed for a week!',
        },
      ],
    },
  },
];
