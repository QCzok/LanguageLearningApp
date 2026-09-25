import type { UnitSeed } from './chapter-beginner-1';

/**
 * Englisch, Intermediate, Kapitel 6: „Stories“ (B1, Kapitel 6)
 *
 * Das letzte B1-Kapitel. Seite 1 führt das Past Perfect ein, Seite 2 setzt
 * die drei Erzählzeiten zusammen, Seite 3 bringt die Zeitkonnektoren (as
 * soon as, by the time, eventually), Seite 4 liest eine Kurzgeschichte und
 * achtet auf die Mittel, die sie lebendig machen. Seite 5 schreibt selbst.
 *
 * Die Kurzgeschichte ist eigenständig verfasst. Einsprachig englisch wie der
 * ganze Intermediate-Band; Vokabeln mit `de` und `es`.
 */
const v = 1;

export const ENGLISH_INTERMEDIATE_6_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Past Perfect.
  {
    order: 1,
    title: 'The train had already left',
    subtitle: 'Das Past Perfect',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'eni6-1-h1', type: 'HEADING', level: 1, text: 'The train had already left' },
        {
          id: 'eni6-1-text',
          type: 'TEXT',
          text: 'Sophie’s trip to Paris didn’t start well. When she arrived at St Pancras, the train had already left – she had written down the wrong time. She bought a new ticket, but then she realised she had forgotten her laptop charger at home. By the time she finally sat down on the next train, she had spent £120 and she hadn’t eaten anything since breakfast.',
        },
        {
          id: 'eni6-1-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'had + past participle',
          text: 'The past perfect is the “past of the past”. When you are already telling a story in the past, you use it for something that happened even earlier: “When she arrived (1), the train had left (before 1).” It is formed with “had” + past participle for all persons. Compare: “When she arrived, the train left.” = it left at that moment, she saw it go.',
          table: {
            headers: ['', 'example'],
            rows: [
              ['+', 'She had forgotten her charger.'],
              ['–', 'She hadn’t eaten anything.'],
              ['?', 'Had the train already left?'],
            ],
          },
        },
        {
          id: 'eni6-1-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct meaning.',
          question: '“When we got to the cinema, the film had started.”',
          options: [
            { id: 'o1', text: 'The film started after we arrived.' },
            { id: 'o2', text: 'The film started before we arrived.' },
            { id: 'o3', text: 'The film started exactly when we arrived.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'The past perfect (“had started”) shows that it happened before the other past action.',
        },
        {
          id: 'eni6-1-cloze',
          type: 'CLOZE',
          instruction: 'Complete with the past perfect.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Sophie missed the train because she ' },
            { kind: 'GAP', gapId: 'p1', solution: ['had written', '’d written', "'d written"], hint: 'write', width: 12 },
            { kind: 'TEXT', text: ' down the wrong time. She realised she ' },
            { kind: 'GAP', gapId: 'p2', solution: ['had forgotten', '’d forgotten', "'d forgotten"], hint: 'forget', width: 14 },
            { kind: 'TEXT', text: ' her charger. She was hungry because she ' },
            { kind: 'GAP', gapId: 'p3', solution: ['hadn’t eaten', "hadn't eaten", 'had not eaten'], hint: 'not / eat', width: 13 },
            { kind: 'TEXT', text: ' since breakfast.' },
          ],
        },
        {
          id: 'eni6-1-order',
          type: 'ORDERING',
          instruction: 'Put the events in the order they really happened.',
          items: [
            { id: 'e1', text: 'Sophie wrote down the wrong time.' },
            { id: 'e2', text: 'The train left.' },
            { id: 'e3', text: 'Sophie arrived at St Pancras.' },
            { id: 'e4', text: 'She bought a new ticket.' },
          ],
          solution: ['e1', 'e2', 'e3', 'e4'],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – die drei Erzählzeiten.
  {
    order: 2,
    title: 'Narrative tenses',
    subtitle: 'Past Simple, Past Continuous, Past Perfect',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'eni6-2-h1', type: 'HEADING', level: 1, text: 'Narrative tenses' },
        {
          id: 'eni6-2-text',
          type: 'TEXT',
          text: 'It was a cold night in December. Ben was walking home from the station and it was snowing heavily. Suddenly he noticed a small dog that was sitting in a doorway. It was shaking. Someone had tied it to a door handle and had left a note: “Please look after him.” Ben took the dog home. Three years later, Biscuit still sleeps at the end of his bed.',
        },
        {
          id: 'eni6-2-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Three tenses, three jobs',
          text: 'A good story uses three past tenses together. The past simple tells the main events in order. The past continuous sets the scene – what was going on in the background. The past perfect goes back in time to explain what had happened before.',
          table: {
            headers: ['tense', 'job', 'example'],
            rows: [
              ['past continuous', 'background, scene', 'It was snowing. Ben was walking home.'],
              ['past simple', 'main events', 'He noticed a dog. He took it home.'],
              ['past perfect', 'earlier events', 'Someone had tied it to the door.'],
            ],
          },
        },
        {
          id: 'eni6-2-cloze',
          type: 'CLOZE',
          instruction: 'Complete with the correct past tense.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'It ' },
            { kind: 'GAP', gapId: 't1', solution: ['was snowing'], hint: 'snow', width: 12 },
            { kind: 'TEXT', text: ' heavily. Ben ' },
            { kind: 'GAP', gapId: 't2', solution: ['noticed'], hint: 'notice', width: 9 },
            { kind: 'TEXT', text: ' a small dog. Someone ' },
            { kind: 'GAP', gapId: 't3', solution: ['had left', '’d left', "'d left"], hint: 'leave', width: 9 },
            { kind: 'TEXT', text: ' it there. The dog ' },
            { kind: 'GAP', gapId: 't4', solution: ['was shaking'], hint: 'shake', width: 12 },
            { kind: 'TEXT', text: ', so Ben ' },
            { kind: 'GAP', gapId: 't5', solution: ['took'], hint: 'take', width: 6 },
            { kind: 'TEXT', text: ' it home.' },
          ],
        },
        {
          id: 'eni6-2-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'Which sentence is correct?',
          options: [
            { id: 'o1', text: 'I didn’t recognise him because he grew a beard.' },
            { id: 'o2', text: 'I didn’t recognise him because he had grown a beard.' },
            { id: 'o3', text: 'I didn’t recognise him because he was growing a beard.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'The beard grew before the moment of not recognising him, so you need the past perfect.',
        },
        {
          id: 'eni6-2-match',
          type: 'MATCHING',
          instruction: 'Match the sentence with the job of its tense.',
          left: [
            { id: 'l1', text: 'The wind was blowing.' },
            { id: 'l2', text: 'She opened the door.' },
            { id: 'l3', text: 'Somebody had broken the window.' },
          ],
          right: [
            { id: 'r1', text: 'background' },
            { id: 'r2', text: 'main event' },
            { id: 'r3', text: 'earlier event' },
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
  // Seite 3 – Zeitkonnektoren.
  {
    order: 3,
    title: 'As soon as, by the time',
    subtitle: 'Zeitkonnektoren',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'eni6-3-h1', type: 'HEADING', level: 1, text: 'As soon as, by the time' },
        {
          id: 'eni6-3-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Time linkers',
          text: 'Time linkers show the order of events and make a story easy to follow. Some are followed by a clause, some by a noun or -ing. “eventually” means “in the end, after a long time” – it is NOT German “eventuell” (= maybe, possibly).',
          table: {
            headers: ['linker', 'meaning', 'example'],
            rows: [
              ['as soon as', 'immediately after', 'As soon as he saw the dog, he stopped.'],
              ['by the time', 'not later than', 'By the time we arrived, everyone had gone.'],
              ['while', 'during the same time', 'While I was waiting, it started to rain.'],
              ['after / before + -ing', 'after / before doing', 'After finishing work, she went home.'],
              ['suddenly', 'quickly and unexpectedly', 'Suddenly the lights went out.'],
              ['eventually', 'in the end', 'Eventually, we found the hotel.'],
            ],
          },
        },
        {
          id: 'eni6-3-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct translation.',
          question: '“Ich komme eventuell später.”',
          options: [
            { id: 'o1', text: 'I’ll eventually come later.' },
            { id: 'o2', text: 'I might come later.' },
            { id: 'o3', text: 'I come eventually later.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'German “eventuell” means “maybe”, so use “might” or “perhaps”. English “eventually” means “in the end”.',
        },
        {
          id: 'eni6-3-cloze',
          type: 'CLOZE',
          instruction: 'Complete with the time linkers.',
          wordBank: ['As soon as', 'By the time', 'While', 'Eventually', 'After'],
          caseSensitive: false,
          segments: [
            { kind: 'GAP', gapId: 'l1', solution: ['While'], width: 12 },
            { kind: 'TEXT', text: ' Sophie was waiting for the next train, she called the hotel. ' },
            { kind: 'GAP', gapId: 'l2', solution: ['As soon as'], width: 12 },
            { kind: 'TEXT', text: ' the train arrived, she jumped on. ' },
            { kind: 'GAP', gapId: 'l3', solution: ['By the time'], width: 12 },
            { kind: 'TEXT', text: ' she got to Paris, it was dark. ' },
            { kind: 'GAP', gapId: 'l4', solution: ['After'], width: 12 },
            { kind: 'TEXT', text: ' checking in, she went straight to bed. ' },
            { kind: 'GAP', gapId: 'l5', solution: ['Eventually'], width: 12 },
            { kind: 'TEXT', text: ', the trip was a success.' },
          ],
        },
        {
          id: 'eni6-3-match',
          type: 'MATCHING',
          instruction: 'Match the two halves.',
          left: [
            { id: 'l1', text: 'By the time the police arrived,' },
            { id: 'l2', text: 'As soon as I got home,' },
            { id: 'l3', text: 'Before leaving the house,' },
          ],
          right: [
            { id: 'r1', text: 'the thieves had disappeared.' },
            { id: 'r2', text: 'I made a cup of tea.' },
            { id: 'r3', text: 'she checked all the windows.' },
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

  // ====================================================== SEITE 4
  // Seite 4 – eine Kurzgeschichte lesen.
  {
    order: 4,
    title: 'The wrong umbrella',
    subtitle: 'Eine Kurzgeschichte lesen',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'eni6-4-h1', type: 'HEADING', level: 1, text: 'The wrong umbrella' },
        {
          id: 'eni6-4-story',
          type: 'TEXT',
          text: 'It had been raining all day, and the café was full of wet coats. Clara was reading at a corner table when a tall man rushed in, looked at his watch and ordered a coffee to take away. A few minutes later, he grabbed a black umbrella from the stand and hurried out.\n\nClara didn’t think about it until she was ready to leave. Her umbrella – black, with a wooden handle – had gone. In its place stood another black umbrella, almost the same, but with a small silver label: “If found, please call 07700 900 311.”\n\nShe laughed and called the number. “I think you’ve got my umbrella,” she said, “and I’ve got yours.” There was a long silence. Then a nervous voice said: “I’m so sorry. I was late for a job interview. Can I buy you a coffee to say sorry?”\n\nThey met the next day at the same café. He had got the job. A year later, they bought their first flat together – and a very large umbrella, big enough for two.',
        },
        {
          id: 'eni6-4-vocab',
          type: 'VOCAB_LIST',
          title: 'Words: telling stories',
          items: [
            { term: 'to rush', translations: { de: 'eilen, stürzen', es: 'apresurarse' } },
            { term: 'to grab', translations: { de: 'schnappen, packen', es: 'agarrar' } },
            { term: 'to hurry', translations: { de: 'sich beeilen', es: 'darse prisa' } },
            { term: 'handle', translations: { de: 'der Griff', es: 'el mango' } },
            { term: 'label', translations: { de: 'das Etikett, Schild', es: 'la etiqueta' } },
            { term: 'nervous', translations: { de: 'nervös', es: 'nervioso' } },
            { term: 'silence', translations: { de: 'die Stille', es: 'el silencio' } },
          ],
        },
        {
          id: 'eni6-4-order',
          type: 'ORDERING',
          instruction: 'Put the events of the story in order.',
          items: [
            { id: 'e1', text: 'A tall man took an umbrella and left.' },
            { id: 'e2', text: 'Clara noticed that her umbrella had gone.' },
            { id: 'e3', text: 'She called the number on the label.' },
            { id: 'e4', text: 'They met at the café the next day.' },
            { id: 'e5', text: 'They bought a flat together.' },
          ],
          solution: ['e1', 'e2', 'e3', 'e4', 'e5'],
        },
        {
          id: 'eni6-4-choice',
          type: 'CHOICE',
          instruction: 'Answer the question about the story.',
          question: 'Why did the man take the wrong umbrella?',
          options: [
            { id: 'o1', text: 'He wanted to meet Clara.' },
            { id: 'o2', text: 'He was in a hurry because he was late for an interview.' },
            { id: 'o3', text: 'His umbrella was broken.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'He says: “I was late for a job interview.” He took the first black umbrella he saw.',
        },
        {
          id: 'eni6-4-info',
          type: 'INFO',
          variant: 'TIP',
          title: 'What makes a story work',
          text: 'Notice how the story sets the scene with the past perfect continuous and past continuous (“It had been raining”, “Clara was reading”), uses strong verbs instead of “go” (rush, hurry, grab), adds direct speech to bring the characters to life, and ends with a surprise that links back to the beginning (the umbrella).',
        },
        {
          id: 'eni6-4-choice2',
          type: 'CHOICE',
          instruction: 'Mark all the sentences that are true.',
          question: 'What do we learn from the story?',
          options: [
            { id: 'r1', text: 'The two umbrellas looked very similar.' },
            { id: 'r2', text: 'Clara was angry on the phone.' },
            { id: 'r3', text: 'The man got the job.' },
            { id: 'r4', text: 'They met again a year later.' },
          ],
          multiple: true,
          solution: ['r1', 'r3'],
          explanation: 'Clara laughed, she wasn’t angry, and they met again the next day, not a year later.',
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – selbst erzählen.
  {
    order: 5,
    title: 'Your story',
    subtitle: 'Eine Geschichte schreiben',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'eni6-5-h1', type: 'HEADING', level: 1, text: 'Your story' },
        {
          id: 'eni6-5-info',
          type: 'INFO',
          variant: 'TIP',
          title: 'Planning a story',
          text: 'Before you write, plan four parts. 1. Set the scene: when, where, who, and what was happening (past continuous). 2. The problem: something unexpected happens (past simple, suddenly). 3. The development: what the characters did, and what had happened before (past perfect). 4. The ending: how it was solved – ideally with a small surprise.',
        },
        {
          id: 'eni6-5-order',
          type: 'ORDERING',
          instruction: 'Put these story parts in a logical order.',
          items: [
            { id: 's1', text: 'It was a hot afternoon, and we were sitting on the beach.' },
            { id: 's2', text: 'Suddenly, my little brother shouted that he couldn’t find his shoes.' },
            { id: 's3', text: 'We looked everywhere, but the tide had come in.' },
            { id: 's4', text: 'Eventually, a dog came running out of the sea – with one shoe in its mouth.' },
          ],
          solution: ['s1', 's2', 's3', 's4'],
        },
        {
          id: 'eni6-5-cloze',
          type: 'CLOZE',
          instruction: 'Complete the story with the correct tense.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'We ' },
            { kind: 'GAP', gapId: 'w1', solution: ['were driving'], hint: 'drive', width: 13 },
            { kind: 'TEXT', text: ' through the mountains when the car suddenly ' },
            { kind: 'GAP', gapId: 'w2', solution: ['stopped'], hint: 'stop', width: 9 },
            { kind: 'TEXT', text: '. My dad ' },
            { kind: 'GAP', gapId: 'w3', solution: ['had forgotten', '’d forgotten', "'d forgotten"], hint: 'forget', width: 14 },
            { kind: 'TEXT', text: ' to fill up the tank. By the time help ' },
            { kind: 'GAP', gapId: 'w4', solution: ['arrived'], hint: 'arrive', width: 9 },
            { kind: 'TEXT', text: ', it ' },
            { kind: 'GAP', gapId: 'w5', solution: ['had got', '’d got', "'d got", 'had gotten'], hint: 'get', width: 9 },
            { kind: 'TEXT', text: ' dark.' },
          ],
        },
        {
          id: 'eni6-5-choice',
          type: 'CHOICE',
          instruction: 'Choose the best first sentence for a story.',
          question: 'Which beginning makes the reader want to continue?',
          options: [
            { id: 'o1', text: 'One day I went to a shop.' },
            { id: 'o2', text: 'It was the last train of the night, and I was the only passenger – or so I thought.' },
            { id: 'o3', text: 'This is a story about something that happened.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'A good first sentence sets the scene and creates a question in the reader’s mind.',
        },
        {
          id: 'eni6-5-writing',
          type: 'WRITING',
          instruction: 'Write a story.',
          prompt:
            'Write a story (150–200 words) that begins: “I had never been so nervous in my life.” Use the past simple, past continuous and past perfect, at least three time linkers, and some direct speech.',
          minWords: 130,
          maxWords: 240,
          aiFeedback: true,
          sampleAnswer:
            'I had never been so nervous in my life. It was my first concert as a singer, and the hall was full. While the band was tuning their instruments, I was standing behind the curtain, trying to remember the words of the first song.\n\nSuddenly, my phone rang. It was my mother. “Good luck, darling,” she said. “We’re in the second row.” I hadn’t known that my parents were coming – they had driven four hours to surprise me.\n\nAs soon as the lights went on, I walked onto the stage. For a moment I couldn’t see anything. Then I noticed my father, who was waving a small flag with my name on it. I started to laugh, and after that the nervousness disappeared.\n\nBy the time we played the last song, the whole audience was singing with us. Eventually, when I came off the stage, my mother hugged me and said: “I knew you could do it.” It was the best night of my life.',
        },
      ],
    },
  },
];
