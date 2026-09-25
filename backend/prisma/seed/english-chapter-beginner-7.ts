import type { UnitSeed } from './chapter-beginner-1';

/**
 * Englisch, Beginner, Kapitel 7: „Last weekend“ (A2, Kapitel 1)
 *
 * Hier beginnt die Vergangenheit. Seite 1 bringt die regelmäßigen Formen
 * samt Schreibung, Seite 2 die unregelmäßigen und was/were, Seite 3 das
 * Hilfsverb „did“ – dieselbe Logik wie do/does aus Kapitel 4, nur eine Stufe
 * zurück. Seite 4 setzt alles zu einer Erzählung zusammen.
 *
 * Übersetzungen wie im A1-Teil (siehe `english-chapter-beginner-1.ts`):
 * `de` an Erklärungen, `de` und `es` an Vokabeln. Der ganze Beginner-Band
 * behält sie.
 */
const v = 1;

export const ENGLISH_BEGINNER_7_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – regelmäßige Verben und Zeitangaben.
  {
    order: 1,
    title: 'What did you do?',
    subtitle: 'Past Simple: regelmäßige Verben',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'en7-1-h1', type: 'HEADING', level: 1, text: 'What did you do?' },
        {
          id: 'en7-1-image',
          type: 'IMAGE',
          url: 'illustration:calendar-weekend',
          alt: 'Ein Wandkalender, auf dem Samstag und Sonntag farbig markiert sind.',
          caption: 'Saturday and Sunday – how was your weekend?',
        },
        {
          id: 'en7-1-text',
          type: 'TEXT',
          text: 'On Monday morning, Emma asks the class about their weekend. Diego says: “On Saturday I stayed at home. I cleaned my flat and I watched a football match on TV. In the evening I cooked for some friends. On Sunday I visited the museum and I walked in the park. It was lovely!”',
          translations: {
            de: 'Am Montagmorgen fragt Emma den Kurs nach dem Wochenende. Diego erzählt: „Am Samstag bin ich zu Hause geblieben. Ich habe meine Wohnung geputzt und ein Fußballspiel im Fernsehen angeschaut. Am Abend habe ich für ein paar Freunde gekocht. Am Sonntag habe ich das Museum besucht und bin im Park spazieren gegangen. Es war schön!“',
          },
        },
        {
          id: 'en7-1-info-ed',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Past simple: + -ed',
          text: 'The past simple is for finished actions at a finished time: yesterday, last weekend, in 2020. Regular verbs add -ed – and the form is the same for everybody, even for he, she and it. German often uses the Perfekt here (“ich habe gekocht”); English uses the past simple.',
          translations: {
            de: {
              title: 'Past Simple: + -ed',
              text: 'Das Past Simple steht für abgeschlossene Handlungen zu einer abgeschlossenen Zeit: gestern, letztes Wochenende, 2020. Regelmäßige Verben bekommen -ed – und die Form ist für alle gleich, auch bei he, she und it. Das Deutsche nimmt hier oft das Perfekt („ich habe gekocht“), das Englische das Past Simple.',
            },
          },
          table: {
            headers: ['rule', 'verb', 'past'],
            rows: [
              ['+ ed', 'watch, cook, visit', 'watched, cooked, visited'],
              ['-e + d', 'live, dance', 'lived, danced'],
              ['consonant + y → -ied', 'study, try', 'studied, tried'],
              ['short vowel + consonant: double', 'stop, plan', 'stopped, planned'],
            ],
          },
        },
        {
          id: 'en7-1-cloze',
          type: 'CLOZE',
          instruction: 'Complete with the past simple.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Yesterday I ' },
            { kind: 'GAP', gapId: 'v1', solution: ['worked'], hint: 'work', width: 8 },
            { kind: 'TEXT', text: ' until six. Then I ' },
            { kind: 'GAP', gapId: 'v2', solution: ['phoned'], hint: 'phone', width: 8 },
            { kind: 'TEXT', text: ' my mum. My brother ' },
            { kind: 'GAP', gapId: 'v3', solution: ['studied'], hint: 'study', width: 9 },
            { kind: 'TEXT', text: ' all weekend. The bus ' },
            { kind: 'GAP', gapId: 'v4', solution: ['stopped'], hint: 'stop', width: 9 },
            { kind: 'TEXT', text: ' in front of the school.' },
          ],
        },
        {
          id: 'en7-1-info-time',
          type: 'INFO',
          variant: 'TIP',
          title: 'yesterday, last, ago',
          text: '“last” goes without “the”: “last week”, “last Saturday” (not “the last week”). “ago” comes after the time: “two days ago” = “vor zwei Tagen”. Time words usually go at the end or at the beginning of the sentence.',
          translations: {
            de: {
              title: 'yesterday, last, ago',
              text: '„last“ steht ohne „the“: „last week“, „last Saturday“ (nicht „the last week“). „ago“ steht nach der Zeitangabe: „two days ago“ = „vor zwei Tagen“. Zeitangaben stehen meist am Ende oder am Anfang des Satzes.',
            },
          },
          table: {
            headers: ['English', 'German'],
            rows: [
              ['yesterday', 'gestern'],
              ['yesterday evening', 'gestern Abend'],
              ['last night', 'gestern Abend / letzte Nacht'],
              ['last week', 'letzte Woche'],
              ['three years ago', 'vor drei Jahren'],
            ],
          },
        },
        {
          id: 'en7-1-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'How do you say “Vor zwei Wochen habe ich meine Oma besucht”?',
          options: [
            { id: 'o1', text: 'Before two weeks I visited my grandma.' },
            { id: 'o2', text: 'I visited my grandma two weeks ago.' },
            { id: 'o3', text: 'I have visited my grandma ago two weeks.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: '“vor” with a time is “ago”, and it comes after the time: “two weeks ago”. A finished time needs the past simple: “I visited”.',
          explanationTranslations: {
            de: '„vor“ mit einer Zeitangabe heißt „ago“ und steht nach der Zeit: „two weeks ago“. Eine abgeschlossene Zeit verlangt das Past Simple: „I visited“.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – unregelmäßige Verben und was/were.
  {
    order: 2,
    title: 'We went to the seaside',
    subtitle: 'Unregelmäßige Verben, was und were',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'en7-2-h1', type: 'HEADING', level: 1, text: 'We went to the seaside' },
        {
          id: 'en7-2-text',
          type: 'TEXT',
          text: 'Yuki writes: “Last weekend was fantastic! On Saturday Anna and I went to Blackpool by train. The weather wasn’t great, but we had fish and chips on the beach and we saw the famous tower. I bought some postcards. We got home very late and I was really tired.”',
          translations: {
            de: 'Yuki schreibt: „Letztes Wochenende war fantastisch! Am Samstag sind Anna und ich mit dem Zug nach Blackpool gefahren. Das Wetter war nicht toll, aber wir haben am Strand Fish and Chips gegessen und den berühmten Turm gesehen. Ich habe ein paar Postkarten gekauft. Wir sind sehr spät nach Hause gekommen, und ich war richtig müde.“',
          },
        },
        {
          id: 'en7-2-info-irregular',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Irregular verbs',
          text: 'Many of the most common verbs are irregular. They don’t add -ed; they have their own past form. There is no rule – you learn them like words. The good news: like regular verbs, the form is the same for all persons.',
          translations: {
            de: {
              title: 'Unregelmäßige Verben',
              text: 'Viele der häufigsten Verben sind unregelmäßig. Sie bekommen kein -ed, sondern haben eine eigene Vergangenheitsform. Eine Regel gibt es nicht – man lernt sie wie Vokabeln. Die gute Nachricht: Wie bei den regelmäßigen Verben ist die Form für alle Personen gleich.',
            },
          },
          table: {
            headers: ['verb', 'past', 'verb', 'past'],
            rows: [
              ['go', 'went', 'see', 'saw'],
              ['have', 'had', 'buy', 'bought'],
              ['get', 'got', 'eat', 'ate'],
              ['make', 'made', 'take', 'took'],
              ['come', 'came', 'meet', 'met'],
              ['do', 'did', 'write', 'wrote'],
            ],
          },
        },
        {
          id: 'en7-2-match',
          type: 'MATCHING',
          instruction: 'Match the verb with its past form.',
          left: [
            { id: 'l1', text: 'go' },
            { id: 'l2', text: 'buy' },
            { id: 'l3', text: 'see' },
            { id: 'l4', text: 'eat' },
            { id: 'l5', text: 'take' },
          ],
          right: [
            { id: 'r1', text: 'went' },
            { id: 'r2', text: 'bought' },
            { id: 'r3', text: 'saw' },
            { id: 'r4', text: 'ate' },
            { id: 'r5', text: 'took' },
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
          id: 'en7-2-info-was',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'was and were',
          text: '“to be” is the only verb with two past forms: “was” for I, he, she, it and “were” for you, we, they. The negative is “wasn’t” and “weren’t”.',
          translations: {
            de: {
              title: 'was und were',
              text: '„to be“ ist das einzige Verb mit zwei Vergangenheitsformen: „was“ bei I, he, she, it und „were“ bei you, we, they. Die Verneinung lautet „wasn’t“ und „weren’t“.',
            },
          },
          table: {
            headers: ['', '+', '–'],
            rows: [
              ['I / he / she / it', 'I was tired.', 'It wasn’t cold.'],
              ['you / we / they', 'We were at home.', 'They weren’t there.'],
            ],
          },
        },
        {
          id: 'en7-2-cloze',
          type: 'CLOZE',
          instruction: 'Read Yuki’s text again. Complete.',
          wordBank: ['went', 'wasn’t', 'had', 'saw', 'was', 'goed'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Yuki and Anna ' },
            { kind: 'GAP', gapId: 'b1', solution: ['went'], width: 6 },
            { kind: 'TEXT', text: ' to Blackpool. The weather ' },
            { kind: 'GAP', gapId: 'b2', solution: ['wasn’t', "wasn't"], width: 8 },
            { kind: 'TEXT', text: ' great. They ' },
            { kind: 'GAP', gapId: 'b3', solution: ['had'], width: 5 },
            { kind: 'TEXT', text: ' fish and chips and ' },
            { kind: 'GAP', gapId: 'b4', solution: ['saw'], width: 5 },
            { kind: 'TEXT', text: ' the tower. Yuki ' },
            { kind: 'GAP', gapId: 'b5', solution: ['was'], width: 5 },
            { kind: 'TEXT', text: ' tired in the evening.' },
          ],
        },
        {
          id: 'en7-2-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'Which sentence is correct?',
          options: [
            { id: 'o1', text: 'We was at the beach.' },
            { id: 'o2', text: 'We were at the beach.' },
            { id: 'o3', text: 'We are at the beach yesterday.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: '“we” goes with “were”. “was” is only for I, he, she and it.',
          explanationTranslations: {
            de: 'Zu „we“ gehört „were“. „was“ steht nur bei I, he, she und it.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – Fragen und Verneinung mit did.
  {
    order: 3,
    title: 'Did you have a good weekend?',
    subtitle: 'Fragen und Verneinung mit did',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'en7-3-h1', type: 'HEADING', level: 1, text: 'Did you have a good weekend?' },
        {
          id: 'en7-3-dlg',
          type: 'DIALOGUE',
          title: 'Monday morning',
          lines: [
            { speaker: 'Karim', text: 'Hi, Anna. Did you have a good weekend?' },
            { speaker: 'Anna', text: 'Yes, I did. Yuki and I went to Blackpool.' },
            { speaker: 'Karim', text: 'Oh, nice! Did you go on the rides?' },
            { speaker: 'Anna', text: 'No, we didn’t. It was too windy. What did you do?' },
            { speaker: 'Karim', text: 'Not much. I didn’t go out – my son was ill.' },
            { speaker: 'Anna', text: 'Oh no! Is he better now?' },
            { speaker: 'Karim', text: 'Yes, he’s fine, thanks.' },
          ],
        },
        {
          id: 'en7-3-info-did',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'did – the past of do',
          text: 'Questions and negatives in the past work like in the present, but with “did” for everybody. The past is now in “did”, so the main verb goes back to the basic form: “Did you go?” (not “Did you went?”), “I didn’t buy” (not “I didn’t bought”). Only “to be” works without “did”: “Were you tired?”',
          translations: {
            de: {
              title: 'did – die Vergangenheit von do',
              text: 'Fragen und Verneinungen in der Vergangenheit funktionieren wie in der Gegenwart, aber mit „did“ für alle Personen. Die Vergangenheit steckt jetzt in „did“, deshalb steht das Hauptverb wieder in der Grundform: „Did you go?“ (nicht „Did you went?“), „I didn’t buy“ (nicht „I didn’t bought“). Nur „to be“ kommt ohne „did“ aus: „Were you tired?“',
            },
          },
          table: {
            headers: ['', 'example'],
            rows: [
              ['+', 'She went to Blackpool.'],
              ['?', 'Did she go to Blackpool?'],
              ['–', 'She didn’t go to Blackpool.'],
              ['short answer', 'Yes, she did. / No, she didn’t.'],
              ['question word', 'Where did she go?'],
            ],
          },
        },
        {
          id: 'en7-3-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct question.',
          question: 'You want to know what Karim bought.',
          options: [
            { id: 'o1', text: 'What did Karim bought?' },
            { id: 'o2', text: 'What Karim bought?' },
            { id: 'o3', text: 'What did Karim buy?' },
          ],
          multiple: false,
          solution: ['o3'],
          explanation: 'After “did” the verb is in the basic form: “What did Karim buy?”',
          explanationTranslations: {
            de: 'Nach „did“ steht das Verb in der Grundform: „What did Karim buy?“',
          },
        },
        {
          id: 'en7-3-cloze',
          type: 'CLOZE',
          instruction: 'Complete with did, didn’t, was or wasn’t.',
          wordBank: ['Did', 'did', 'didn’t', 'was', 'wasn’t'],
          caseSensitive: true,
          segments: [
            { kind: 'TEXT', text: '▸ ' },
            { kind: 'GAP', gapId: 'd1', solution: ['Did'], width: 5 },
            { kind: 'TEXT', text: ' you see the film on Friday?\n▸ No, I ' },
            { kind: 'GAP', gapId: 'd2', solution: ['didn’t', "didn't"], width: 7 },
            { kind: 'TEXT', text: '. I ' },
            { kind: 'GAP', gapId: 'd3', solution: ['was'], width: 5 },
            { kind: 'TEXT', text: ' at work until nine.\n▸ What ' },
            { kind: 'GAP', gapId: 'd4', solution: ['did'], width: 5 },
            { kind: 'TEXT', text: ' you do on Saturday then?\n▸ I went shopping, but it ' },
            { kind: 'GAP', gapId: 'd5', solution: ['wasn’t', "wasn't"], width: 7 },
            { kind: 'TEXT', text: ' much fun.' },
          ],
        },
        {
          id: 'en7-3-order',
          type: 'ORDERING',
          instruction: 'Make a correct question.',
          items: [
            { id: 's1', text: 'Where' },
            { id: 's2', text: 'did' },
            { id: 's3', text: 'you' },
            { id: 's4', text: 'go' },
            { id: 's5', text: 'last summer?' },
          ],
          solution: ['s1', 's2', 's3', 's4', 's5'],
        },
        {
          id: 'en7-3-match',
          type: 'MATCHING',
          instruction: 'Match the question with the answer.',
          left: [
            { id: 'q1', text: 'Did you have a good weekend?' },
            { id: 'q2', text: 'Where did you go?' },
            { id: 'q3', text: 'Was it expensive?' },
            { id: 'q4', text: 'Did your son go to school?' },
          ],
          right: [
            { id: 'a1', text: 'Yes, I did, thanks.' },
            { id: 'a2', text: 'To Blackpool.' },
            { id: 'a3', text: 'No, it wasn’t.' },
            { id: 'a4', text: 'No, he didn’t. He was ill.' },
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

  // ====================================================== SEITE 4
  // Seite 4 – eine Geschichte erzählen: Reihenfolge-Wörter.
  {
    order: 4,
    title: 'First, then, after that',
    subtitle: 'Eine kleine Geschichte erzählen',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'en7-4-h1', type: 'HEADING', level: 1, text: 'First, then, after that' },
        {
          id: 'en7-4-text',
          type: 'TEXT',
          text: 'A bad day for Diego: “First, my alarm didn’t ring, so I woke up at half past eight. Then I ran to the bus stop, but I missed the bus. After that I took a taxi – it was very expensive! When I got to work, I found out that the meeting was cancelled. Finally, in the evening, I lost my keys. What a day!”',
          translations: {
            de: 'Ein schlechter Tag für Diego: „Zuerst hat mein Wecker nicht geklingelt, also bin ich um halb neun aufgewacht. Dann bin ich zur Bushaltestelle gerannt, habe den Bus aber verpasst. Danach habe ich ein Taxi genommen – das war sehr teuer! Als ich bei der Arbeit ankam, habe ich erfahren, dass die Besprechung abgesagt war. Und am Abend habe ich schließlich meine Schlüssel verloren. Was für ein Tag!“',
          },
        },
        {
          id: 'en7-4-vocab',
          type: 'VOCAB_LIST',
          title: 'Words: telling a story',
          items: [
            { term: 'first', translations: { de: 'zuerst', es: 'primero' } },
            { term: 'then', translations: { de: 'dann', es: 'luego, después' } },
            { term: 'after that', translations: { de: 'danach', es: 'después de eso' } },
            { term: 'when', translations: { de: 'als', es: 'cuando' }, example: 'When I got to work, …' },
            { term: 'finally', translations: { de: 'schließlich, zum Schluss', es: 'finalmente, al final' } },
            { term: 'so', translations: { de: 'also, deshalb', es: 'así que' } },
            { term: 'wake up – woke up', translations: { de: 'aufwachen', es: 'despertarse' } },
            { term: 'miss – missed', translations: { de: 'verpassen', es: 'perder (el autobús)' } },
            { term: 'lose – lost', translations: { de: 'verlieren', es: 'perder' } },
            { term: 'find out – found out', translations: { de: 'herausfinden, erfahren', es: 'enterarse' } },
          ],
        },
        {
          id: 'en7-4-order',
          type: 'ORDERING',
          instruction: 'Put Diego’s day in order.',
          items: [
            { id: 'd1', text: 'His alarm didn’t ring.' },
            { id: 'd2', text: 'He missed the bus.' },
            { id: 'd3', text: 'He took a taxi.' },
            { id: 'd4', text: 'He found out about the meeting.' },
            { id: 'd5', text: 'He lost his keys.' },
          ],
          solution: ['d1', 'd2', 'd3', 'd4', 'd5'],
        },
        {
          id: 'en7-4-choice',
          type: 'CHOICE',
          instruction: 'Answer the question about the text.',
          question: 'Why did Diego take a taxi?',
          options: [
            { id: 'o1', text: 'Because he missed the bus.' },
            { id: 'o2', text: 'Because he lost his keys.' },
            { id: 'o3', text: 'Because the meeting was cancelled.' },
          ],
          multiple: false,
          solution: ['o1'],
          explanation: 'He ran to the bus stop, but he missed the bus. After that, he took a taxi.',
          explanationTranslations: {
            de: 'Er rannte zur Bushaltestelle, verpasste aber den Bus. Danach nahm er ein Taxi.',
          },
        },
        {
          id: 'en7-4-info-when',
          type: 'INFO',
          variant: 'TIP',
          title: '“als” is “when”',
          text: 'For one moment in the past, German says “als” – English says “when”: “When I got to work, …”. Don’t use “as” here. And German “wann” in questions is also “when”: “When did you arrive?”',
          translations: {
            de: {
              title: '„als“ heißt „when“',
              text: 'Für einen Zeitpunkt in der Vergangenheit sagt das Deutsche „als“ – das Englische „when“: „When I got to work, …“. „as“ passt hier nicht. Auch das deutsche „wann“ in Fragen heißt „when“: „When did you arrive?“',
            },
          },
        },
        {
          id: 'en7-4-cloze',
          type: 'CLOZE',
          instruction: 'Complete the story.',
          wordBank: ['First', 'Then', 'When', 'so', 'Finally'],
          caseSensitive: false,
          segments: [
            { kind: 'GAP', gapId: 's1', solution: ['First'], width: 7 },
            { kind: 'TEXT', text: ', I made breakfast. ' },
            { kind: 'GAP', gapId: 's2', solution: ['Then'], width: 6 },
            { kind: 'TEXT', text: ' I called my sister. ' },
            { kind: 'GAP', gapId: 's3', solution: ['When'], width: 6 },
            { kind: 'TEXT', text: ' I left the house, it started to rain, ' },
            { kind: 'GAP', gapId: 's4', solution: ['so'], width: 4 },
            { kind: 'TEXT', text: ' I went back for my umbrella. ' },
            { kind: 'GAP', gapId: 's5', solution: ['Finally'], width: 8 },
            { kind: 'TEXT', text: ', I arrived at the station – ten minutes late.' },
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
        { id: 'en7-5-h1', type: 'HEADING', level: 1, text: 'Can you do it?' },
        {
          id: 'en7-5-intro',
          type: 'TEXT',
          text: 'The whole chapter again: regular and irregular verbs, was/were, did, and telling a story.',
          translations: {
            de: 'Das ganze Kapitel noch einmal: regelmäßige und unregelmäßige Verben, was/were, did und eine Geschichte erzählen.',
          },
        },
        {
          id: 'en7-5-cloze',
          type: 'CLOZE',
          instruction: 'Complete with the past simple.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Last Sunday we ' },
            { kind: 'GAP', gapId: 'f1', solution: ['went'], hint: 'go', width: 6 },
            { kind: 'TEXT', text: ' to the lake. We ' },
            { kind: 'GAP', gapId: 'f2', solution: ['took'], hint: 'take', width: 6 },
            { kind: 'TEXT', text: ' a picnic and ' },
            { kind: 'GAP', gapId: 'f3', solution: ['played'], hint: 'play', width: 8 },
            { kind: 'TEXT', text: ' football. It ' },
            { kind: 'GAP', gapId: 'f4', solution: ['was'], hint: 'be', width: 5 },
            { kind: 'TEXT', text: ' sunny, but we ' },
            { kind: 'GAP', gapId: 'f5', solution: ['didn’t', "didn't", 'did not'], hint: 'not', width: 8 },
            { kind: 'TEXT', text: ' swim – the water was too cold.' },
          ],
        },
        {
          id: 'en7-5-match',
          type: 'MATCHING',
          instruction: 'Match the question with the answer.',
          left: [
            { id: 'm1', text: 'What did you do yesterday?' },
            { id: 'm2', text: 'When did you get home?' },
            { id: 'm3', text: 'Were your parents there?' },
            { id: 'm4', text: 'Did you buy anything?' },
          ],
          right: [
            { id: 'x1', text: 'I visited a friend.' },
            { id: 'x2', text: 'At about midnight.' },
            { id: 'x3', text: 'No, they weren’t.' },
            { id: 'x4', text: 'Yes, a new jacket.' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'x1' },
            { leftId: 'm2', rightId: 'x2' },
            { leftId: 'm3', rightId: 'x3' },
            { leftId: 'm4', rightId: 'x4' },
          ],
        },
        {
          id: 'en7-5-choice',
          type: 'CHOICE',
          instruction: 'Mark all the correct sentences.',
          question: 'Which of these sentences are correct?',
          options: [
            { id: 'r1', text: 'I didn’t see him last week.' },
            { id: 'r2', text: 'Did you went to the party?' },
            { id: 'r3', text: 'She bought a new car two years ago.' },
            { id: 'r4', text: 'They was very happy.' },
          ],
          multiple: true,
          solution: ['r1', 'r3'],
          explanation: 'After “did” you need the basic form: “Did you go?”. And “they” goes with “were”.',
          explanationTranslations: {
            de: 'Nach „did“ steht die Grundform: „Did you go?“. Und zu „they“ gehört „were“.',
          },
        },
        {
          id: 'en7-5-writing',
          type: 'WRITING',
          instruction: 'Write about your last weekend.',
          prompt:
            'Write five to eight sentences: Where did you go? What did you do? Who did you meet? How was it? Use regular and irregular verbs and words like first, then and after that.',
          minWords: 40,
          maxWords: 130,
          aiFeedback: true,
          sampleAnswer:
            'Last weekend was very relaxing. On Saturday I got up late and had a long breakfast. Then I met my friend Lisa in town and we went to a new café. After that we walked along the river. On Sunday it rained, so I stayed at home and read a book. In the evening I cooked pasta for my family. It was a nice weekend.',
        },
      ],
    },
  },
];
