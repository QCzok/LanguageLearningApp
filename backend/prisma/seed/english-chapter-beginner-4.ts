import type { UnitSeed } from './chapter-beginner-1';

/**
 * Englisch, Beginner, Kapitel 4: „My day“
 *
 * Das Present Simple in drei Schritten: erst die Aussage mit dem -s in der
 * dritten Person, dann Fragen und Verneinung mit do/does – das, was
 * Deutschsprachigen am Englischen am fremdesten ist –, zuletzt die
 * Häufigkeitsadverbien und Zeitpräpositionen. Davor die Uhrzeit, weil jeder
 * Tagesablauf sie braucht.
 *
 * Übersetzungen wie in `english-chapter-beginner-1.ts`.
 */
const v = 1;

export const ENGLISH_BEGINNER_4_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – die Uhrzeit.
  {
    order: 1,
    title: 'What time is it?',
    subtitle: 'Die Uhrzeit',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'en4-1-h1', type: 'HEADING', level: 1, text: 'What time is it?' },
        {
          id: 'en4-1-image',
          type: 'IMAGE',
          url: 'illustration:clock-day',
          alt: 'Eine große Uhr, umgeben von Symbolen für Morgen, Mittag, Abend und Nacht.',
          caption: 'From morning to night.',
        },
        {
          id: 'en4-1-dlg',
          type: 'DIALOGUE',
          title: 'Before the lesson',
          lines: [
            { speaker: 'Anna', text: 'Excuse me, what time is it?' },
            { speaker: 'Karim', text: 'It’s quarter to nine.' },
            { speaker: 'Anna', text: 'Oh good. The lesson starts at nine, right?' },
            { speaker: 'Karim', text: 'Yes, and it finishes at half past twelve.' },
          ],
        },
        {
          id: 'en4-1-info-time',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Telling the time',
          text: 'Up to half past, English says “past” (nach): “ten past eight”. After half past, it says “to” (vor): “twenty to nine”. Careful: “half past eight” is 8:30 – in German that is “halb neun”! In everyday life, people also just say the numbers: “eight thirty”.',
          translations: {
            de: {
              title: 'Die Uhrzeit sagen',
              text: 'Bis zur halben Stunde sagt man „past“ (nach): „ten past eight“. Danach „to“ (vor): „twenty to nine“. Vorsicht: „half past eight“ ist 8:30 – auf Deutsch „halb neun“! Im Alltag nennt man auch einfach die Zahlen: „eight thirty“.',
            },
          },
          table: {
            headers: ['Time', 'English', 'or'],
            rows: [
              ['8:00', 'eight o’clock', 'eight'],
              ['8:10', 'ten past eight', 'eight ten'],
              ['8:15', 'quarter past eight', 'eight fifteen'],
              ['8:30', 'half past eight', 'eight thirty'],
              ['8:45', 'quarter to nine', 'eight forty-five'],
              ['8:50', 'ten to nine', 'eight fifty'],
            ],
          },
        },
        {
          id: 'en4-1-match',
          type: 'MATCHING',
          instruction: 'Match the time with the words.',
          left: [
            { id: 'l1', text: '7:30' },
            { id: 'l2', text: '9:15' },
            { id: 'l3', text: '10:45' },
            { id: 'l4', text: '6:05' },
          ],
          right: [
            { id: 'r1', text: 'half past seven' },
            { id: 'r2', text: 'quarter past nine' },
            { id: 'r3', text: 'quarter to eleven' },
            { id: 'r4', text: 'five past six' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'en4-1-choice',
          type: 'CHOICE',
          instruction: 'Choose the right time.',
          question: 'Your German friend says: “Wir treffen uns um halb drei.” What time is that in English?',
          options: [
            { id: 'o1', text: 'half past three' },
            { id: 'o2', text: 'half past two' },
            { id: 'o3', text: 'half to three' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: '“halb drei” is 2:30. English counts from the last full hour: “half past two”.',
          explanationTranslations: {
            de: '„halb drei“ ist 2:30. Das Englische zählt von der letzten vollen Stunde aus: „half past two“.',
          },
        },
        {
          id: 'en4-1-info-ampm',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'a.m. and p.m.',
          text: 'In Britain and the USA, people usually use the 12-hour clock. “a.m.” is before midday, “p.m.” is after midday: 9 a.m. = 9:00, 9 p.m. = 21:00. You see the 24-hour clock mostly on timetables.',
          translations: {
            de: {
              title: 'a.m. und p.m.',
              text: 'In Großbritannien und den USA verwendet man meist die 12-Stunden-Uhr. „a.m.“ ist vor Mittag, „p.m.“ nach Mittag: 9 a.m. = 9:00, 9 p.m. = 21:00. Die 24-Stunden-Uhr sieht man vor allem auf Fahrplänen.',
            },
          },
        },
        {
          id: 'en4-1-cloze',
          type: 'CLOZE',
          instruction: 'Write the time in words.',
          wordBank: ['past', 'to', 'o’clock', 'half', 'quarter'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '6:00 → six ' },
            { kind: 'GAP', gapId: 'c1', solution: ['o’clock', "o'clock"], width: 8 },
            { kind: 'TEXT', text: '\n4:30 → ' },
            { kind: 'GAP', gapId: 'c2', solution: ['half'], width: 6 },
            { kind: 'TEXT', text: ' past four\n11:20 → twenty ' },
            { kind: 'GAP', gapId: 'c3', solution: ['past'], width: 6 },
            { kind: 'TEXT', text: ' eleven\n1:45 → ' },
            { kind: 'GAP', gapId: 'c4', solution: ['quarter'], width: 8 },
            { kind: 'TEXT', text: ' to two\n3:55 → five ' },
            { kind: 'GAP', gapId: 'c5', solution: ['to'], width: 4 },
            { kind: 'TEXT', text: ' four' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – Tagesablauf, Present Simple mit dem -s.
  {
    order: 2,
    title: 'A normal day',
    subtitle: 'Tagesablauf, Present Simple',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'en4-2-h1', type: 'HEADING', level: 1, text: 'A normal day' },
        {
          id: 'en4-2-text',
          type: 'TEXT',
          text: 'Anna is a nurse. She works at a hospital. On weekdays she gets up at six o’clock. She has a shower and has breakfast at half past six. She goes to work by bike and starts at seven. She has lunch at the hospital. She finishes work at three and goes to her English course. In the evening she watches TV or reads, and she goes to bed at ten.',
          translations: {
            de: 'Anna ist Krankenpflegerin. Sie arbeitet in einem Krankenhaus. An Werktagen steht sie um sechs Uhr auf. Sie duscht und frühstückt um halb sieben. Sie fährt mit dem Fahrrad zur Arbeit und fängt um sieben an. Sie isst im Krankenhaus zu Mittag. Um drei hat sie Feierabend und geht zu ihrem Englischkurs. Abends sieht sie fern oder liest, und um zehn geht sie ins Bett.',
          },
        },
        {
          id: 'en4-2-vocab',
          type: 'VOCAB_LIST',
          title: 'Words: the daily routine',
          items: [
            { term: 'get up', translations: { de: 'aufstehen', es: 'levantarse' } },
            { term: 'have a shower', translations: { de: 'duschen', es: 'ducharse' } },
            { term: 'have breakfast', translations: { de: 'frühstücken', es: 'desayunar' } },
            { term: 'go to work', translations: { de: 'zur Arbeit gehen/fahren', es: 'ir al trabajo' } },
            { term: 'start', translations: { de: 'anfangen', es: 'empezar' } },
            { term: 'have lunch', translations: { de: 'zu Mittag essen', es: 'comer, almorzar' } },
            { term: 'finish', translations: { de: 'aufhören, beenden', es: 'terminar' } },
            { term: 'get home', translations: { de: 'nach Hause kommen', es: 'llegar a casa' } },
            { term: 'watch TV', translations: { de: 'fernsehen', es: 'ver la tele' } },
            { term: 'go to bed', translations: { de: 'ins Bett gehen', es: 'acostarse' } },
          ],
        },
        {
          id: 'en4-2-info-present',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Present simple: he, she, it + -s',
          text: 'The present simple is for things you do regularly and for facts. It is easy: the verb has the same form for everybody – except he, she and it. They get an -s: “I work”, but “she works”. After -sh, -ch, -ss, -o you add -es; after consonant + y it becomes -ies. “have” is irregular: “she has”.',
          translations: {
            de: {
              title: 'Present Simple: he, she, it + -s',
              text: 'Das Present Simple steht für regelmäßige Handlungen und für Tatsachen. Es ist einfach: Das Verb hat für alle dieselbe Form – außer bei he, she und it. Dort kommt ein -s dazu: „I work“, aber „she works“. Nach -sh, -ch, -ss, -o hängt man -es an; aus Konsonant + y wird -ies. „have“ ist unregelmäßig: „she has“.',
            },
          },
          table: {
            headers: ['I / you / we / they', 'he / she / it', 'rule'],
            rows: [
              ['work', 'works', '+ s'],
              ['watch', 'watches', '-ch → + es'],
              ['go', 'goes', '-o → + es'],
              ['study', 'studies', '-y → -ies'],
              ['have', 'has', 'irregular'],
            ],
          },
        },
        {
          id: 'en4-2-cloze',
          type: 'CLOZE',
          instruction: 'Complete with the correct form of the verb.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Anna ' },
            { kind: 'GAP', gapId: 'v1', solution: ['gets'], hint: 'get', width: 7 },
            { kind: 'TEXT', text: ' up at six. She ' },
            { kind: 'GAP', gapId: 'v2', solution: ['has'], hint: 'have', width: 6 },
            { kind: 'TEXT', text: ' breakfast at half past six.\nHer brothers ' },
            { kind: 'GAP', gapId: 'v3', solution: ['live'], hint: 'live', width: 7 },
            { kind: 'TEXT', text: ' in Berlin. In the evening she ' },
            { kind: 'GAP', gapId: 'v4', solution: ['watches'], hint: 'watch', width: 9 },
            { kind: 'TEXT', text: ' TV. Diego ' },
            { kind: 'GAP', gapId: 'v5', solution: ['studies'], hint: 'study', width: 9 },
            { kind: 'TEXT', text: ' English every day.' },
          ],
        },
        {
          id: 'en4-2-order',
          type: 'ORDERING',
          instruction: 'Read the text again. Put Anna’s day in order.',
          items: [
            { id: 'd1', text: 'She gets up.' },
            { id: 'd2', text: 'She has breakfast.' },
            { id: 'd3', text: 'She starts work.' },
            { id: 'd4', text: 'She goes to her English course.' },
            { id: 'd5', text: 'She goes to bed.' },
          ],
          solution: ['d1', 'd2', 'd3', 'd4', 'd5'],
        },
        {
          id: 'en4-2-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'Which sentence is correct?',
          options: [
            { id: 'o1', text: 'My sister work in a bank.' },
            { id: 'o2', text: 'My sister works in a bank.' },
            { id: 'o3', text: 'My sister is work in a bank.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: '“My sister” is “she”, so the verb gets an -s: “works”. You don’t need “is” with another verb.',
          explanationTranslations: {
            de: '„My sister“ ist „she“, also bekommt das Verb ein -s: „works“. Neben einem anderen Verb braucht man kein „is“.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – Fragen und Verneinung mit do/does.
  {
    order: 3,
    title: 'Do you work on Saturdays?',
    subtitle: 'Fragen und Verneinung mit do und does',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'en4-3-h1', type: 'HEADING', level: 1, text: 'Do you work on Saturdays?' },
        {
          id: 'en4-3-dlg',
          type: 'DIALOGUE',
          title: 'Diego and Anna talk about work',
          lines: [
            { speaker: 'Diego', text: 'Do you work on Saturdays, Anna?' },
            { speaker: 'Anna', text: 'Yes, I do – every second Saturday. And you?' },
            { speaker: 'Diego', text: 'No, I don’t. I work in an office, from Monday to Friday.' },
            { speaker: 'Anna', text: 'Does your office open early?' },
            { speaker: 'Diego', text: 'No, it doesn’t. It opens at nine. I don’t get up before eight!' },
          ],
        },
        {
          id: 'en4-3-info-do',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'do and does – the helper verbs',
          text: 'In German you just swap: “Arbeitest du?” English can’t do that with normal verbs. It needs a helper: “do” – or “does” for he, she, it. The -s moves to the helper, so the main verb has no -s: “Does she work?” (not “Does she works?”). The negative works the same way: “I don’t work”, “she doesn’t work”.',
          translations: {
            de: {
              title: 'do und does – die Hilfsverben',
              text: 'Im Deutschen stellt man einfach um: „Arbeitest du?“ Mit normalen Verben geht das im Englischen nicht. Es braucht ein Hilfsverb: „do“ – bzw. „does“ bei he, she, it. Das -s wandert dabei zum Hilfsverb, das Hauptverb bleibt ohne -s: „Does she work?“ (nicht „Does she works?“). Die Verneinung funktioniert genauso: „I don’t work“, „she doesn’t work“.',
            },
          },
          table: {
            headers: ['', 'I / you / we / they', 'he / she / it'],
            rows: [
              ['?', 'Do you work?', 'Does she work?'],
              ['–', 'I don’t work.', 'She doesn’t work.'],
              ['short answer +', 'Yes, I do.', 'Yes, she does.'],
              ['short answer –', 'No, I don’t.', 'No, she doesn’t.'],
            ],
          },
        },
        {
          id: 'en4-3-cloze',
          type: 'CLOZE',
          instruction: 'Complete with do, does, don’t or doesn’t.',
          wordBank: ['Do', 'Does', 'don’t', 'doesn’t'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '▸ ' },
            { kind: 'GAP', gapId: 'd1', solution: ['Do'], width: 5 },
            { kind: 'TEXT', text: ' you like your job?\n▸ Yes, but I ' },
            { kind: 'GAP', gapId: 'd2', solution: ['don’t', "don't"], width: 7 },
            { kind: 'TEXT', text: ' like the early mornings.\n▸ ' },
            { kind: 'GAP', gapId: 'd3', solution: ['Does'], width: 6 },
            { kind: 'TEXT', text: ' your husband work too?\n▸ No, he ' },
            { kind: 'GAP', gapId: 'd4', solution: ['doesn’t', "doesn't"], width: 8 },
            { kind: 'TEXT', text: '. He’s a student.' },
          ],
        },
        {
          id: 'en4-3-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct question.',
          question: 'You want to know if Yuki speaks Chinese.',
          options: [
            { id: 'o1', text: 'Speaks Yuki Chinese?' },
            { id: 'o2', text: 'Does Yuki speaks Chinese?' },
            { id: 'o3', text: 'Does Yuki speak Chinese?' },
          ],
          multiple: false,
          solution: ['o3'],
          explanation: 'A question needs “does” for he/she/it, and then the main verb has no -s: “Does Yuki speak …?”',
          explanationTranslations: {
            de: 'Eine Frage braucht bei he/she/it „does“, und dann steht das Hauptverb ohne -s: „Does Yuki speak …?“',
          },
        },
        {
          id: 'en4-3-match',
          type: 'MATCHING',
          instruction: 'Match the question with the short answer.',
          left: [
            { id: 'q1', text: 'Do you live in London?' },
            { id: 'q2', text: 'Does Karim have a son?' },
            { id: 'q3', text: 'Do Anna and Diego study English?' },
            { id: 'q4', text: 'Does the shop open on Sundays?' },
          ],
          right: [
            { id: 'a1', text: 'No, I don’t. I live in Manchester.' },
            { id: 'a2', text: 'Yes, he does.' },
            { id: 'a3', text: 'Yes, they do.' },
            { id: 'a4', text: 'No, it doesn’t.' },
          ],
          solution: [
            { leftId: 'q1', rightId: 'a1' },
            { leftId: 'q2', rightId: 'a2' },
            { leftId: 'q3', rightId: 'a3' },
            { leftId: 'q4', rightId: 'a4' },
          ],
        },
        {
          id: 'en4-3-order',
          type: 'ORDERING',
          instruction: 'Make a correct question.',
          items: [
            { id: 's1', text: 'What time' },
            { id: 's2', text: 'does' },
            { id: 's3', text: 'the lesson' },
            { id: 's4', text: 'start?' },
          ],
          solution: ['s1', 's2', 's3', 's4'],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – wie oft? Häufigkeitsadverbien, Wochentage, at/on/in.
  {
    order: 4,
    title: 'How often?',
    subtitle: 'Häufigkeit, Wochentage, at – on – in',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'en4-4-h1', type: 'HEADING', level: 1, text: 'How often?' },
        {
          id: 'en4-4-text',
          type: 'TEXT',
          text: 'Yuki answers a questionnaire: “I always have breakfast. I usually go to the gym on Tuesdays and Thursdays. I often cook in the evening, and I sometimes eat out with friends at the weekend. I never watch TV in the morning – I don’t have time!”',
          translations: {
            de: 'Yuki beantwortet einen Fragebogen: „Ich frühstücke immer. Dienstags und donnerstags gehe ich normalerweise ins Fitnessstudio. Abends koche ich oft, und am Wochenende gehe ich manchmal mit Freunden essen. Morgens sehe ich nie fern – ich habe keine Zeit!“',
          },
        },
        {
          id: 'en4-4-info-freq',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'always, usually, often, sometimes, never',
          text: 'These words say how often you do something. They go before the main verb: “I often cook.” But they go after “to be”: “She is always late.” That is different from German, where they come after the verb: “Ich koche oft.”',
          translations: {
            de: {
              title: 'always, usually, often, sometimes, never',
              text: 'Diese Wörter sagen, wie oft man etwas tut. Sie stehen vor dem Hauptverb: „I often cook.“ Nach „to be“ stehen sie aber dahinter: „She is always late.“ Das ist anders als im Deutschen, wo sie nach dem Verb stehen: „Ich koche oft.“',
            },
          },
          table: {
            headers: ['word', 'German', 'example'],
            rows: [
              ['always', 'immer', 'I always have breakfast.'],
              ['usually', 'normalerweise', 'I usually walk to work.'],
              ['often', 'oft', 'We often eat out.'],
              ['sometimes', 'manchmal', 'He sometimes cooks.'],
              ['never', 'nie', 'She is never late.'],
            ],
          },
        },
        {
          id: 'en4-4-order',
          type: 'ORDERING',
          instruction: 'Make a correct sentence.',
          items: [
            { id: 's1', text: 'I' },
            { id: 's2', text: 'usually' },
            { id: 's3', text: 'go' },
            { id: 's4', text: 'to the gym' },
            { id: 's5', text: 'on Tuesdays.' },
          ],
          solution: ['s1', 's2', 's3', 's4', 's5'],
        },
        {
          id: 'en4-4-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'Which sentence is correct?',
          options: [
            { id: 'o1', text: 'Karim is often tired.' },
            { id: 'o2', text: 'Karim often is tired.' },
            { id: 'o3', text: 'Karim is tired often always.' },
          ],
          multiple: false,
          solution: ['o1'],
          explanation: 'With “to be”, the frequency word comes after the verb: “is often”.',
          explanationTranslations: {
            de: 'Bei „to be“ steht das Häufigkeitswort nach dem Verb: „is often“.',
          },
        },
        {
          id: 'en4-4-vocab',
          type: 'VOCAB_LIST',
          title: 'Words: the days of the week',
          items: [
            { term: 'Monday', translations: { de: 'Montag', es: 'lunes' } },
            { term: 'Tuesday', translations: { de: 'Dienstag', es: 'martes' } },
            { term: 'Wednesday', translations: { de: 'Mittwoch', es: 'miércoles' } },
            { term: 'Thursday', translations: { de: 'Donnerstag', es: 'jueves' } },
            { term: 'Friday', translations: { de: 'Freitag', es: 'viernes' } },
            { term: 'Saturday', translations: { de: 'Samstag', es: 'sábado' } },
            { term: 'Sunday', translations: { de: 'Sonntag', es: 'domingo' } },
            { term: 'the weekend', translations: { de: 'das Wochenende', es: 'el fin de semana' } },
          ],
        },
        {
          id: 'en4-4-info-prep',
          type: 'INFO',
          variant: 'TIP',
          title: 'at, on, in',
          text: 'Three small words for time: “at” for clock times, “on” for days and dates, “in” for longer periods like months, years and parts of the day. Exceptions to learn: “at night” and “at the weekend” (British English).',
          translations: {
            de: {
              title: 'at, on, in',
              text: 'Drei kleine Wörter für die Zeit: „at“ für Uhrzeiten, „on“ für Tage und Daten, „in“ für längere Zeiträume wie Monate, Jahre und Tageszeiten. Ausnahmen zum Lernen: „at night“ und „at the weekend“ (britisches Englisch).',
            },
          },
          table: {
            headers: ['at', 'on', 'in'],
            rows: [
              ['at 7 o’clock', 'on Monday', 'in the morning'],
              ['at night', 'on 3rd May', 'in June'],
              ['at the weekend', 'on Sundays', 'in 2026'],
            ],
          },
        },
        {
          id: 'en4-4-cloze',
          type: 'CLOZE',
          instruction: 'Complete with at, on or in.',
          wordBank: ['at', 'on', 'in'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'I get up ' },
            { kind: 'GAP', gapId: 'p1', solution: ['at'], width: 4 },
            { kind: 'TEXT', text: ' seven o’clock. ' },
            { kind: 'GAP', gapId: 'p2', solution: ['On'], width: 4 },
            { kind: 'TEXT', text: ' Fridays I go to the gym. I read ' },
            { kind: 'GAP', gapId: 'p3', solution: ['in'], width: 4 },
            { kind: 'TEXT', text: ' the evening. My birthday is ' },
            { kind: 'GAP', gapId: 'p4', solution: ['in'], width: 4 },
            { kind: 'TEXT', text: ' July, and I never work ' },
            { kind: 'GAP', gapId: 'p5', solution: ['at'], width: 4 },
            { kind: 'TEXT', text: ' the weekend.' },
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
        { id: 'en4-5-h1', type: 'HEADING', level: 1, text: 'Can you do it?' },
        {
          id: 'en4-5-intro',
          type: 'TEXT',
          text: 'The whole chapter again: the time, the daily routine, do and does, how often, and at/on/in.',
          translations: {
            de: 'Das ganze Kapitel noch einmal: die Uhrzeit, der Tagesablauf, do und does, wie oft, und at/on/in.',
          },
        },
        {
          id: 'en4-5-cloze',
          type: 'CLOZE',
          instruction: 'Complete the text about Karim.',
          wordBank: ['gets', 'takes', 'doesn’t', 'at', 'always'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Karim ' },
            { kind: 'GAP', gapId: 'f1', solution: ['gets'], width: 6 },
            { kind: 'TEXT', text: ' up at half past six. He ' },
            { kind: 'GAP', gapId: 'f2', solution: ['takes'], width: 6 },
            { kind: 'TEXT', text: ' his son to school by car. He ' },
            { kind: 'GAP', gapId: 'f3', solution: ['doesn’t', "doesn't"], width: 8 },
            { kind: 'TEXT', text: ' work on Fridays. He has his English lesson ' },
            { kind: 'GAP', gapId: 'f4', solution: ['at'], width: 4 },
            { kind: 'TEXT', text: ' nine, and he is ' },
            { kind: 'GAP', gapId: 'f5', solution: ['always'], width: 7 },
            { kind: 'TEXT', text: ' on time.' },
          ],
        },
        {
          id: 'en4-5-match',
          type: 'MATCHING',
          instruction: 'Match the question with the answer.',
          left: [
            { id: 'm1', text: 'What time is it?' },
            { id: 'm2', text: 'What time do you get up?' },
            { id: 'm3', text: 'Does she work on Sundays?' },
            { id: 'm4', text: 'How often do you cook?' },
          ],
          right: [
            { id: 'x1', text: 'It’s half past ten.' },
            { id: 'x2', text: 'At seven o’clock.' },
            { id: 'x3', text: 'No, she doesn’t.' },
            { id: 'x4', text: 'Almost every day.' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'x1' },
            { leftId: 'm2', rightId: 'x2' },
            { leftId: 'm3', rightId: 'x3' },
            { leftId: 'm4', rightId: 'x4' },
          ],
        },
        {
          id: 'en4-5-choice',
          type: 'CHOICE',
          instruction: 'Mark all the correct sentences.',
          question: 'Which of these sentences are correct?',
          options: [
            { id: 'r1', text: 'She doesn’t like coffee.' },
            { id: 'r2', text: 'Do he live here?' },
            { id: 'r3', text: 'We never eat meat.' },
            { id: 'r4', text: 'He go to work at eight.' },
          ],
          multiple: true,
          solution: ['r1', 'r3'],
          explanation: '“he” needs “does”: “Does he live here?” And the verb after “he” needs an -es: “He goes to work.”',
          explanationTranslations: {
            de: 'Zu „he“ gehört „does“: „Does he live here?“ Und das Verb nach „he“ braucht ein -es: „He goes to work.“',
          },
        },
        {
          id: 'en4-5-writing',
          type: 'WRITING',
          instruction: 'Describe your normal day.',
          prompt:
            'Write five to seven sentences: When do you get up? What do you do in the morning, afternoon and evening? What do you never do? Use times and words like always, usually and sometimes.',
          minWords: 30,
          maxWords: 110,
          aiFeedback: true,
          sampleAnswer:
            'I usually get up at half past six. I have a coffee and a shower, and then I go to work by train. I start at eight and finish at five. In the evening I often cook with my wife. We sometimes watch a film. I never go to bed before eleven.',
        },
      ],
    },
  },
];
