import type { UnitSeed } from './chapter-beginner-1';

/**
 * Englisch, Intermediate, Kapitel 2: „Opinions“ (B1, Kapitel 2)
 *
 * Meinungen äußern und begründen. Seite 1 bringt die Wendungen für Meinung,
 * Zustimmung und Widerspruch – samt dem Klassiker „I am agree“. Seite 2 die
 * Konnektoren, mit denen aus Sätzen ein Argument wird, Seite 3 die Frage
 * Gerundium oder Infinitiv, Seite 4 Vorschläge machen. Seite 5 liest eine
 * Diskussion und schreibt einen Meinungstext.
 *
 * Einsprachig englisch wie der ganze Intermediate-Band; Vokabeln mit `de`
 * und `es`.
 */
const v = 1;

export const ENGLISH_INTERMEDIATE_2_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Meinung, Zustimmung, Widerspruch.
  {
    order: 1,
    title: 'In my opinion …',
    subtitle: 'Meinungen äußern, zustimmen, widersprechen',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'eni2-1-h1', type: 'HEADING', level: 1, text: 'In my opinion …' },
        {
          id: 'eni2-1-image',
          type: 'IMAGE',
          url: 'illustration:introduction',
          alt: 'Eine Gruppe sitzt im Halbkreis, eine Person spricht.',
          caption: 'Team meeting: should everybody work from home?',
        },
        {
          id: 'eni2-1-dlg',
          type: 'DIALOGUE',
          title: 'The Friday meeting',
          lines: [
            { speaker: 'Tom', text: 'So, the question is: should we all work from home three days a week? What do you think?' },
            { speaker: 'Ben', text: 'In my opinion, it’s a great idea. I waste two hours a day on the train.' },
            { speaker: 'Priya', text: 'I see your point, but I’m not sure. New people like Sophie need to meet the team.' },
            { speaker: 'Sophie', text: 'I agree with Priya. It’s much easier to learn when colleagues are around.' },
            { speaker: 'Ben', text: 'That’s true, but we could have one fixed office day for everybody.' },
            { speaker: 'Tom', text: 'That sounds like a good compromise.' },
          ],
        },
        {
          id: 'eni2-1-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Giving your opinion',
          text: 'English speakers often soften their opinions. A direct “You’re wrong” sounds aggressive; “I see your point, but …” or “I’m not sure about that” is the normal way to disagree. And careful: “agree” is a verb. It’s “I agree” – never “I am agree”.',
          table: {
            headers: ['opinion', 'agree', 'disagree'],
            rows: [
              ['I think / I believe …', 'I agree (with you).', 'I don’t agree.'],
              ['In my opinion, …', 'That’s true.', 'I see your point, but …'],
              ['As far as I’m concerned, …', 'Exactly!', 'I’m not so sure about that.'],
              ['It seems to me that …', 'You’re right.', 'I’m afraid I disagree.'],
            ],
          },
        },
        {
          id: 'eni2-1-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'Which sentence is correct?',
          options: [
            { id: 'o1', text: 'I am agree with you.' },
            { id: 'o2', text: 'I agree with you.' },
            { id: 'o3', text: 'I’m agreeing with you.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: '“agree” is a verb, not an adjective, so you don’t need “am”: “I agree”. It is also a state verb, so no -ing.',
        },
        {
          id: 'eni2-1-match',
          type: 'MATCHING',
          instruction: 'Is it an opinion, agreement or disagreement? Match.',
          left: [
            { id: 'l1', text: 'As far as I’m concerned, …' },
            { id: 'l2', text: 'Exactly!' },
            { id: 'l3', text: 'I see your point, but …' },
          ],
          right: [
            { id: 'r1', text: 'giving an opinion' },
            { id: 'r2', text: 'agreeing' },
            { id: 'r3', text: 'disagreeing politely' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
          ],
        },
        {
          id: 'eni2-1-choice2',
          type: 'CHOICE',
          instruction: 'Choose the most polite reaction.',
          question: 'Your manager says: “I think we should cancel the project.” You don’t agree.',
          options: [
            { id: 'o1', text: 'No. That’s wrong.' },
            { id: 'o2', text: 'I see your point, but I think we’re very close to finishing it.' },
            { id: 'o3', text: 'You don’t understand the project.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'First show that you have listened (“I see your point”), then give your own view with a reason.',
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – Konnektoren.
  {
    order: 2,
    title: 'Although, however, whereas',
    subtitle: 'Argumente verbinden',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'eni2-2-h1', type: 'HEADING', level: 1, text: 'Although, however, whereas' },
        {
          id: 'eni2-2-text',
          type: 'TEXT',
          text: 'Ben’s notes for the meeting: Working from home saves time because there is no commute. It is also cheaper, so people have more money at the end of the month. However, some people feel lonely at home. Although video calls are useful, they cannot replace a real conversation. Young employees often prefer the office, whereas older colleagues with families usually like working from home. In addition, the company could save money on office space.',
        },
        {
          id: 'eni2-2-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Linking words',
          text: 'Linking words show how ideas are connected. Pay attention to where they go: “although” and “because” start a clause inside the sentence; “however” and “in addition” usually start a new sentence and are followed by a comma. “whereas” compares two different things.',
          table: {
            headers: ['function', 'inside a sentence', 'new sentence'],
            rows: [
              ['reason', 'because, as, since', 'That’s why …'],
              ['result', 'so', 'Therefore, …'],
              ['contrast', 'although, but, whereas', 'However, … / On the other hand, …'],
              ['adding', 'and, as well as', 'In addition, … / Also, …'],
            ],
          },
        },
        {
          id: 'eni2-2-cloze',
          type: 'CLOZE',
          instruction: 'Complete with the linking words.',
          wordBank: ['because', 'However', 'Although', 'whereas', 'so'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Working from home saves time ' },
            { kind: 'GAP', gapId: 'k1', solution: ['because'], width: 9 },
            { kind: 'TEXT', text: ' there is no commute. It is cheaper, ' },
            { kind: 'GAP', gapId: 'k2', solution: ['so'], width: 4 },
            { kind: 'TEXT', text: ' people have more money. ' },
            { kind: 'GAP', gapId: 'k3', solution: ['However'], width: 9 },
            { kind: 'TEXT', text: ', some people feel lonely. ' },
            { kind: 'GAP', gapId: 'k4', solution: ['Although'], width: 9 },
            { kind: 'TEXT', text: ' video calls are useful, they cannot replace a real conversation. Young people prefer the office, ' },
            { kind: 'GAP', gapId: 'k5', solution: ['whereas'], width: 9 },
            { kind: 'TEXT', text: ' older colleagues like working from home.' },
          ],
        },
        {
          id: 'eni2-2-info-although',
          type: 'INFO',
          variant: 'TIP',
          title: 'although – despite',
          text: '“although” is followed by a clause with a subject and a verb: “Although it was raining, we went out.” “despite” / “in spite of” is followed by a noun or -ing: “Despite the rain, we went out.” German “obwohl” is always “although”.',
        },
        {
          id: 'eni2-2-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'Which sentence is correct?',
          options: [
            { id: 'o1', text: 'Despite it was expensive, we bought it.' },
            { id: 'o2', text: 'Although it was expensive, we bought it.' },
            { id: 'o3', text: 'However it was expensive, we bought it.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'A clause (“it was expensive”) follows “although”. “despite” needs a noun: “Despite the price, …”. “However” starts a new sentence.',
        },
        {
          id: 'eni2-2-match',
          type: 'MATCHING',
          instruction: 'Match the two halves.',
          left: [
            { id: 'l1', text: 'The office is noisy,' },
            { id: 'l2', text: 'I stayed at home' },
            { id: 'l3', text: 'Some people love open-plan offices,' },
            { id: 'l4', text: 'Although I was tired,' },
          ],
          right: [
            { id: 'r1', text: 'so I often wear headphones.' },
            { id: 'r2', text: 'because the trains were on strike.' },
            { id: 'r3', text: 'whereas others hate them.' },
            { id: 'r4', text: 'I finished the report.' },
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
  // Seite 3 – Gerundium oder Infinitiv.
  {
    order: 3,
    title: 'I enjoy working – I want to work',
    subtitle: 'Gerundium oder Infinitiv',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'eni2-3-h1', type: 'HEADING', level: 1, text: 'I enjoy working – I want to work' },
        {
          id: 'eni2-3-text',
          type: 'TEXT',
          text: 'Survey results: 70% of employees say they enjoy working from home, but 45% miss talking to colleagues. Most people want to keep at least one office day. Many managers have decided to try a hybrid model, and some have agreed to pay for home-office furniture. Interestingly, people who work at home avoid taking sick days – they often keep working even when they feel ill.',
        },
        {
          id: 'eni2-3-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Verb + -ing or verb + to',
          text: 'When one verb follows another, the first verb decides the form of the second. There is no simple rule, so learn the verbs in groups. After prepositions (interested in, good at, before, after, without) you always use -ing.',
          table: {
            headers: ['+ -ing', '+ to + infinitive'],
            rows: [
              ['enjoy, finish, mind', 'want, would like, hope'],
              ['avoid, suggest, keep', 'decide, agree, plan'],
              ['miss, imagine, can’t stand', 'offer, refuse, learn'],
              ['be good at, be interested in', 'need, promise, manage'],
            ],
          },
        },
        {
          id: 'eni2-3-cloze',
          type: 'CLOZE',
          instruction: 'Complete with -ing or to + infinitive.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'I enjoy ' },
            { kind: 'GAP', gapId: 'g1', solution: ['working'], hint: 'work', width: 9 },
            { kind: 'TEXT', text: ' from home, but I miss ' },
            { kind: 'GAP', gapId: 'g2', solution: ['talking'], hint: 'talk', width: 9 },
            { kind: 'TEXT', text: ' to my colleagues. We have decided ' },
            { kind: 'GAP', gapId: 'g3', solution: ['to try'], hint: 'try', width: 8 },
            { kind: 'TEXT', text: ' a hybrid model. My manager agreed ' },
            { kind: 'GAP', gapId: 'g4', solution: ['to pay'], hint: 'pay', width: 8 },
            { kind: 'TEXT', text: ' for a new chair. I’m interested in ' },
            { kind: 'GAP', gapId: 'g5', solution: ['learning'], hint: 'learn', width: 10 },
            { kind: 'TEXT', text: ' more about it.' },
          ],
        },
        {
          id: 'eni2-3-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'Which sentence is correct?',
          options: [
            { id: 'o1', text: 'He suggested to take a break.' },
            { id: 'o2', text: 'He suggested taking a break.' },
            { id: 'o3', text: 'He suggested take a break.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: '“suggest” is followed by -ing: “suggested taking”. (“suggest that we take” is also possible.)',
        },
        {
          id: 'eni2-3-info-stop',
          type: 'INFO',
          variant: 'TIP',
          title: 'stop, remember, try: two meanings',
          text: 'A few verbs take both forms with a different meaning. “I stopped smoking.” = I don’t smoke any more. “I stopped to smoke.” = I stopped (walking, working) in order to smoke. “Remember to call Ben.” = don’t forget. “I remember calling Ben.” = I have a memory of it.',
        },
        {
          id: 'eni2-3-match',
          type: 'MATCHING',
          instruction: 'Match the sentence with its meaning.',
          left: [
            { id: 'l1', text: 'I stopped drinking coffee.' },
            { id: 'l2', text: 'I stopped to drink a coffee.' },
            { id: 'l3', text: 'Remember to lock the door.' },
            { id: 'l4', text: 'I remember locking the door.' },
          ],
          right: [
            { id: 'r1', text: 'I don’t drink coffee any more.' },
            { id: 'r2', text: 'I took a break for a coffee.' },
            { id: 'r3', text: 'Don’t forget it.' },
            { id: 'r4', text: 'I’m sure I did it.' },
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

  // ====================================================== SEITE 4
  // Seite 4 – Vorschläge machen.
  {
    order: 4,
    title: 'Why don’t we …?',
    subtitle: 'Vorschläge machen und darauf reagieren',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'eni2-4-h1', type: 'HEADING', level: 1, text: 'Why don’t we …?' },
        {
          id: 'eni2-4-dlg',
          type: 'DIALOGUE',
          title: 'Planning the team day',
          lines: [
            { speaker: 'Priya', text: 'We need an idea for the team day in June. Any suggestions?' },
            { speaker: 'Ben', text: 'Why don’t we go kayaking on the Thames?' },
            { speaker: 'Sophie', text: 'Hmm, not everybody can swim. How about doing a cooking class instead?' },
            { speaker: 'Ben', text: 'I’d rather do something outside. Shall we have a picnic in Richmond Park?' },
            { speaker: 'Priya', text: 'Good idea. We could combine them: a picnic, and everybody brings a dish from their country.' },
            { speaker: 'Sophie', text: 'Let’s do that!' },
          ],
        },
        {
          id: 'eni2-4-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Making suggestions',
          text: 'Each phrase for suggestions has its own grammar – learn it with the phrase. “How about” and “What about” take -ing; “Why don’t we”, “Let’s”, “Shall we” and “We could” take the basic form. “I’d rather” (= I would prefer) is also followed by the basic form.',
          table: {
            headers: ['phrase', 'form', 'example'],
            rows: [
              ['Let’s …', 'basic form', 'Let’s go kayaking.'],
              ['Why don’t we …?', 'basic form', 'Why don’t we have a picnic?'],
              ['Shall we …?', 'basic form', 'Shall we meet at ten?'],
              ['How about / What about …?', '-ing', 'How about doing a cooking class?'],
              ['I’d rather …', 'basic form', 'I’d rather stay outside.'],
            ],
          },
        },
        {
          id: 'eni2-4-cloze',
          type: 'CLOZE',
          instruction: 'Complete with the correct form.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'How about ' },
            { kind: 'GAP', gapId: 's1', solution: ['going'], hint: 'go', width: 7 },
            { kind: 'TEXT', text: ' to the cinema? – I’d rather ' },
            { kind: 'GAP', gapId: 's2', solution: ['stay'], hint: 'stay', width: 6 },
            { kind: 'TEXT', text: ' at home. – OK, why don’t we ' },
            { kind: 'GAP', gapId: 's3', solution: ['watch'], hint: 'watch', width: 7 },
            { kind: 'TEXT', text: ' a film here, then? – Good idea. Let’s ' },
            { kind: 'GAP', gapId: 's4', solution: ['order'], hint: 'order', width: 7 },
            { kind: 'TEXT', text: ' a pizza too.' },
          ],
        },
        {
          id: 'eni2-4-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'Which sentence is correct?',
          options: [
            { id: 'o1', text: 'What about to meet on Monday?' },
            { id: 'o2', text: 'What about meeting on Monday?' },
            { id: 'o3', text: 'What about we meet on Monday?' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: '“What about” and “How about” are followed by -ing: “What about meeting …?”',
        },
        {
          id: 'eni2-4-match',
          type: 'MATCHING',
          instruction: 'Match the suggestion with a reaction.',
          left: [
            { id: 'l1', text: 'Shall we take a taxi?' },
            { id: 'l2', text: 'Let’s have lunch outside.' },
            { id: 'l3', text: 'How about asking Tom?' },
          ],
          right: [
            { id: 'r1', text: 'I’d rather walk – it’s not far.' },
            { id: 'r2', text: 'Good idea, it’s lovely today.' },
            { id: 'r3', text: 'He’s on holiday, I’m afraid.' },
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
  // Seite 5 – eine Diskussion lesen, einen Meinungstext schreiben.
  {
    order: 5,
    title: 'For and against',
    subtitle: 'Vor- und Nachteile abwägen',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'eni2-5-h1', type: 'HEADING', level: 1, text: 'For and against' },
        {
          id: 'eni2-5-text',
          type: 'TEXT',
          text: 'Should cars be banned from city centres?\n\nMore and more European cities are closing their centres to cars. Supporters argue that the air becomes cleaner and the streets become safer, especially for children and cyclists. In addition, shops often profit because people walking past are more likely to stop and buy something.\n\nOn the other hand, critics point out that not everybody can walk or cycle. Older people and people with disabilities depend on cars, and deliveries become more complicated. Some shop owners are afraid of losing customers who come from the countryside.\n\nIn my opinion, a ban can work, but only if public transport is cheap and reliable. Although it will take time, I believe most people will not want to go back once they have experienced a quiet, green city centre.',
        },
        {
          id: 'eni2-5-info',
          type: 'INFO',
          variant: 'TIP',
          title: 'How to structure an opinion essay',
          text: 'A clear opinion text has four parts: an introduction that presents the question; a paragraph with arguments for; a paragraph with arguments against; and a conclusion with your own opinion and a reason. Use linking words to guide the reader: firstly, in addition, on the other hand, however, in conclusion.',
        },
        {
          id: 'eni2-5-choice',
          type: 'CHOICE',
          instruction: 'Answer the question about the text.',
          question: 'What is the writer’s opinion?',
          options: [
            { id: 'o1', text: 'Cars should never be banned.' },
            { id: 'o2', text: 'A ban is a good idea if public transport is good.' },
            { id: 'o3', text: 'Only shop owners should decide.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'The last paragraph says: “a ban can work, but only if public transport is cheap and reliable.”',
        },
        {
          id: 'eni2-5-for',
          type: 'CHOICE',
          instruction: 'Mark all the arguments FOR a car ban.',
          question: 'Which arguments support a ban?',
          options: [
            { id: 'r1', text: 'The air becomes cleaner.' },
            { id: 'r2', text: 'Deliveries become more complicated.' },
            { id: 'r3', text: 'Streets are safer for children.' },
            { id: 'r4', text: 'Older people depend on cars.' },
          ],
          multiple: true,
          solution: ['r1', 'r3'],
          explanation: 'Cleaner air and safer streets are arguments for a ban. Deliveries and older people’s needs are arguments against it.',
        },
        {
          id: 'eni2-5-order',
          type: 'ORDERING',
          instruction: 'Put the parts of an opinion essay in order.',
          items: [
            { id: 'p1', text: 'Introduction: present the question' },
            { id: 'p2', text: 'Arguments for' },
            { id: 'p3', text: 'Arguments against' },
            { id: 'p4', text: 'Conclusion: your opinion and why' },
          ],
          solution: ['p1', 'p2', 'p3', 'p4'],
        },
        {
          id: 'eni2-5-writing',
          type: 'WRITING',
          instruction: 'Write an opinion essay.',
          prompt:
            'Choose one question: “Should everybody be allowed to work from home?” or “Should mobile phones be banned in schools?” Write 150–200 words with an introduction, arguments for and against, and your opinion. Use at least four linking words.',
          minWords: 130,
          maxWords: 240,
          aiFeedback: true,
          sampleAnswer:
            'Should mobile phones be banned in schools? This question is discussed in many countries at the moment.\n\nThere are several arguments for a ban. Firstly, students concentrate better when their phones are not on the desk. In addition, a ban can reduce cyberbullying during the school day, and children talk to each other more in the breaks.\n\nOn the other hand, phones can be useful in lessons, for example for looking up words or doing quick research. Many parents also want to be able to contact their children, especially on the way to and from school.\n\nIn my opinion, a complete ban is not the best solution. Although phones can be distracting, students need to learn how to use them responsibly. I think schools should allow phones in lessons when the teacher decides, but they should stay in bags during breaks.',
        },
      ],
    },
  },
];
