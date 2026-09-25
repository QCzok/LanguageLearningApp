import type { UnitSeed } from './chapter-beginner-1';

/**
 * Englische Grammatik, Kapitel 9: „Present perfect“
 *
 * Drei Seiten: Form und Erfahrung (ever, never, been/gone), dann die
 * Signalwörter just, already, yet und for/since, zuletzt die Abgrenzung
 * zum Past Simple und die Verlaufsform. Das Kapitel steht quer zu
 * Intermediate Kapitel 1, das dieselbe Zeit an einer Bewerbung übt.
 *
 * Die Erklärungen tragen wie im ganzen Grammatikbuch eine deutsche
 * Übersetzung – hier ist sie besonders nötig, weil das deutsche Perfekt der
 * Hauptgrund für die Fehler ist.
 */
const v = 1;

export const ENGLISH_GRAMMAR_9_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Form, Erfahrung, ever/never.
  {
    order: 1,
    title: 'I’ve been there',
    subtitle: 'Form und Erfahrungen',
    estimatedMinutes: 20,
    content: {
      version: v,
      blocks: [
        { id: 'eng9-1-h1', type: 'HEADING', level: 1, text: 'I’ve been there' },
        {
          id: 'eng9-1-intro',
          type: 'TEXT',
          text: 'The present perfect looks like the German Perfekt – “I have seen” / “ich habe gesehen” – but it is used very differently. It always has a link to the present: an experience you have now, a result you can see now, or a situation that is still going on.',
          translations: {
            de: 'Das Present Perfect sieht aus wie das deutsche Perfekt – „I have seen“ / „ich habe gesehen“ –, wird aber ganz anders verwendet. Es hat immer eine Verbindung zur Gegenwart: eine Erfahrung, die man jetzt hat, ein Ergebnis, das jetzt sichtbar ist, oder eine Situation, die noch andauert.',
          },
        },
        {
          id: 'eng9-1-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'have/has + past participle',
          text: 'Form: have/has + past participle. For experiences, use “ever” in questions (“at any time in your life”) and “never” in negative statements. Don’t say when – as soon as the time is mentioned, it’s the past simple.',
          translations: {
            de: {
              title: 'have/has + Partizip Perfekt',
              text: 'Form: have/has + Partizip Perfekt (dritte Verbform). Für Erfahrungen steht in Fragen „ever“ („irgendwann in deinem Leben“) und in verneinten Aussagen „never“. Kein Zeitpunkt – sobald er genannt wird, steht das Past Simple.',
            },
          },
          table: {
            headers: ['', 'example'],
            rows: [
              ['+', 'I’ve visited Scotland twice.'],
              ['never', 'She’s never eaten sushi.'],
              ['ever', 'Have you ever been to Japan?'],
              ['short answer', 'Yes, I have. / No, I haven’t.'],
            ],
          },
        },
        {
          id: 'eng9-1-cloze',
          type: 'CLOZE',
          instruction: 'Write the present perfect.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'I ' },
            { kind: 'GAP', gapId: 'p1', solution: ['have seen', '’ve seen', "'ve seen"], hint: 'see', width: 10 },
            { kind: 'TEXT', text: ' this film three times. ' },
            { kind: 'GAP', gapId: 'p2', solution: ['Have you ever met'], hint: 'you / ever / meet', width: 17 },
            { kind: 'TEXT', text: ' a famous person? She ' },
            { kind: 'GAP', gapId: 'p3', solution: ['has never flown', '’s never flown', "'s never flown"], hint: 'never / fly', width: 16 },
            { kind: 'TEXT', text: ' in a plane.' },
          ],
        },
        {
          id: 'eng9-1-info-been',
          type: 'INFO',
          variant: 'TIP',
          title: 'been or gone?',
          text: '“He has been to Rome.” = he went and came back (experience). “He has gone to Rome.” = he is there now or on his way.',
          translations: {
            de: {
              title: 'been oder gone?',
              text: '„He has been to Rome.“ = er war dort und ist zurück (Erfahrung). „He has gone to Rome.“ = er ist jetzt dort oder unterwegs dorthin.',
            },
          },
        },
        {
          id: 'eng9-1-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'Anna is in Spain at the moment.',
          options: [
            { id: 'o1', text: 'Anna has been to Spain.' },
            { id: 'o2', text: 'Anna has gone to Spain.' },
            { id: 'o3', text: 'Anna went to Spain since Monday.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'She is still there, so “has gone”. “has been” would mean she is back.',
          explanationTranslations: {
            de: 'Sie ist noch dort, also „has gone“. „has been“ hieße, dass sie zurück ist.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – just, already, yet, for, since.
  {
    order: 2,
    title: 'just, already, yet',
    subtitle: 'Signalwörter und for/since',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'eng9-2-h1', type: 'HEADING', level: 1, text: 'just, already, yet' },
        {
          id: 'eng9-2-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'just, already, yet',
          text: '“just” = a very short time ago; “already” = earlier than expected; both go between have and the participle. “yet” = until now, used in questions and negatives, and it goes at the end.',
          translations: {
            de: {
              title: 'just, already, yet',
              text: '„just“ = gerade eben; „already“ = schon (früher als erwartet); beide stehen zwischen have und dem Partizip. „yet“ = bis jetzt, steht in Fragen und Verneinungen, und zwar am Satzende.',
            },
          },
          table: {
            headers: ['word', 'position', 'example'],
            rows: [
              ['just', 'have + just + participle', 'I’ve just finished.'],
              ['already', 'have + already + participle', 'She’s already left.'],
              ['yet (?)', 'end', 'Have you eaten yet?'],
              ['yet (–)', 'end', 'I haven’t decided yet.'],
            ],
          },
        },
        {
          id: 'eng9-2-cloze',
          type: 'CLOZE',
          instruction: 'Complete with just, already or yet.',
          wordBank: ['just', 'already', 'yet'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Have you finished the report ' },
            { kind: 'GAP', gapId: 'y1', solution: ['yet'], width: 8 },
            { kind: 'TEXT', text: '? – Yes, I’ve ' },
            { kind: 'GAP', gapId: 'y2', solution: ['already'], width: 8 },
            { kind: 'TEXT', text: ' sent it to Tom. – Great! I’ve ' },
            { kind: 'GAP', gapId: 'y3', solution: ['just'], width: 8 },
            { kind: 'TEXT', text: ' got here – two minutes ago. And the tickets? – I haven’t booked them ' },
            { kind: 'GAP', gapId: 'y4', solution: ['yet'], width: 8 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'eng9-2-info-seit',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'seit = for / since + present perfect',
          text: 'German says “Ich wohne seit 2020 hier” in the present. English needs the present perfect: “I’ve lived here since 2020.” “for” + a period (for six years), “since” + a starting point (since 2020, since Monday).',
          translations: {
            de: {
              title: 'seit = for / since + Present Perfect',
              text: 'Das Deutsche sagt „Ich wohne seit 2020 hier“ im Präsens. Das Englische braucht das Present Perfect: „I’ve lived here since 2020.“ „for“ + Zeitraum (for six years), „since“ + Zeitpunkt (since 2020, since Monday).',
            },
          },
        },
        {
          id: 'eng9-2-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct translation.',
          question: '“Wir kennen uns seit zehn Jahren.”',
          options: [
            { id: 'o1', text: 'We know each other since ten years.' },
            { id: 'o2', text: 'We’ve known each other for ten years.' },
            { id: 'o3', text: 'We knew each other for ten years.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'Still true now → present perfect. “ten years” is a period → “for”.',
          explanationTranslations: {
            de: 'Gilt noch heute → Present Perfect. „zehn Jahre“ ist ein Zeitraum → „for“.',
          },
        },
        {
          id: 'eng9-2-match',
          type: 'MATCHING',
          instruction: 'for or since? Match.',
          left: [
            { id: 'l1', text: 'three weeks' },
            { id: 'l2', text: 'last summer' },
            { id: 'l3', text: 'a long time' },
            { id: 'l4', text: 'I was a child' },
          ],
          right: [
            { id: 'r1', text: 'for three weeks' },
            { id: 'r2', text: 'since last summer' },
            { id: 'r3', text: 'for a long time' },
            { id: 'r4', text: 'since I was a child' },
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
  // Seite 3 – Present Perfect oder Past Simple, Verlaufsform.
  {
    order: 3,
    title: 'Perfect or past?',
    subtitle: 'Present Perfect, Past Simple, Verlaufsform',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'eng9-3-h1', type: 'HEADING', level: 1, text: 'Perfect or past?' },
        {
          id: 'eng9-3-info',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'The time decides',
          text: 'Ask yourself: is the time finished, or is it connected to now? Finished time (yesterday, last year, in 2015, when I was young, ago) → past simple. Unfinished time or no time (today, this week, ever, never, so far, for/since up to now) → present perfect. A conversation often starts with the present perfect and then continues in the past simple: “I’ve been to Rome.” – “Really? When did you go?”',
          translations: {
            de: {
              title: 'Die Zeit entscheidet',
              text: 'Fragen Sie sich: Ist der Zeitraum abgeschlossen oder reicht er bis jetzt? Abgeschlossen (yesterday, last year, in 2015, when I was young, ago) → Past Simple. Nicht abgeschlossen oder keine Zeitangabe (today, this week, ever, never, so far, for/since bis jetzt) → Present Perfect. Ein Gespräch beginnt oft im Present Perfect und geht dann im Past Simple weiter: „I’ve been to Rome.“ – „Really? When did you go?“',
            },
          },
          table: {
            headers: ['past simple', 'present perfect'],
            rows: [
              ['I saw her yesterday.', 'I’ve seen her today.'],
              ['He lived in Leeds for 5 years. (now he doesn’t)', 'He’s lived in Leeds for 5 years. (and still does)'],
              ['Did you finish it last night?', 'Have you finished it yet?'],
            ],
          },
        },
        {
          id: 'eng9-3-cloze',
          type: 'CLOZE',
          instruction: 'Present perfect or past simple?',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '▸ ' },
            { kind: 'GAP', gapId: 'x1', solution: ['Have you ever tried'], hint: 'you / ever / try', width: 19 },
            { kind: 'TEXT', text: ' Korean food?\n▸ Yes, I ' },
            { kind: 'GAP', gapId: 'x2', solution: ['have'], width: 6 },
            { kind: 'TEXT', text: '. I ' },
            { kind: 'GAP', gapId: 'x3', solution: ['went'], hint: 'go', width: 6 },
            { kind: 'TEXT', text: ' to a Korean restaurant last month.\n▸ What ' },
            { kind: 'GAP', gapId: 'x4', solution: ['did you have'], hint: 'you / have', width: 13 },
            { kind: 'TEXT', text: '?' },
          ],
        },
        {
          id: 'eng9-3-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'Which sentence is correct?',
          options: [
            { id: 'o1', text: 'I have lost my keys yesterday.' },
            { id: 'o2', text: 'I lost my keys yesterday.' },
            { id: 'o3', text: 'I’ve lost yesterday my keys.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: '“yesterday” is finished time: past simple. Without “yesterday”, “I’ve lost my keys” (= and I still don’t have them) would be correct.',
          explanationTranslations: {
            de: '„yesterday“ ist abgeschlossene Zeit: Past Simple. Ohne „yesterday“ wäre „I’ve lost my keys“ (= und habe sie immer noch nicht) richtig.',
          },
        },
        {
          id: 'eng9-3-info-cont',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'have been + -ing',
          text: 'The present perfect continuous (have/has been + -ing) stresses an activity that has been going on up to now, often with how long: “I’ve been waiting for an hour.” It can also explain a present result: “You look tired.” – “I’ve been working all night.” State verbs stay in the simple form.',
          translations: {
            de: {
              title: 'have been + -ing',
              text: 'Das Present Perfect Continuous (have/has been + -ing) betont eine Tätigkeit, die bis jetzt andauert, oft mit der Dauer: „I’ve been waiting for an hour.“ Es kann auch ein jetziges Ergebnis erklären: „You look tired.“ – „I’ve been working all night.“ Zustandsverben bleiben in der einfachen Form.',
            },
          },
        },
        {
          id: 'eng9-3-choice2',
          type: 'CHOICE',
          instruction: 'Choose the best answer.',
          question: '“Why are your hands so dirty?” – “I ___ in the garden.”',
          options: [
            { id: 'o1', text: '’ve been working' },
            { id: 'o2', text: 'worked last year' },
            { id: 'o3', text: 'work' },
          ],
          multiple: false,
          solution: ['o1'],
          explanation: 'The activity explains what you can see now: present perfect continuous.',
          explanationTranslations: {
            de: 'Die Tätigkeit erklärt, was man jetzt sieht: Present Perfect Continuous.',
          },
        },
      ],
    },
  },
];
