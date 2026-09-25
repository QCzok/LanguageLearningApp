import type { UnitSeed } from './chapter-beginner-1';

/**
 * Englisch, Intermediate, Kapitel 3: „Media“ (B1, Kapitel 3)
 *
 * Nachrichten lesen und weitergeben. Seite 1 entschlüsselt die Sprache der
 * Schlagzeilen, Seite 2 bringt das Passiv (Präsens und Vergangenheit), weil
 * Nachrichtentexte davon leben, Seite 3 say und tell samt einfacher
 * indirekter Rede, Seite 4 Relativsätze beim Prüfen von Quellen. Seite 5
 * fasst einen Bericht zusammen.
 *
 * Alle Meldungen sind erfunden. Einsprachig englisch wie der ganze
 * Intermediate-Band; Vokabeln mit `de` und `es`.
 */
const v = 1;

export const ENGLISH_INTERMEDIATE_3_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Schlagzeilen.
  {
    order: 1,
    title: 'Headlines',
    subtitle: 'Die Sprache der Schlagzeilen',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'eni3-1-h1', type: 'HEADING', level: 1, text: 'Headlines' },
        {
          id: 'eni3-1-image',
          type: 'IMAGE',
          url: 'illustration:world-map',
          alt: 'Eine Weltkarte mit Markierungen auf mehreren Kontinenten.',
          caption: 'News from around the world.',
        },
        {
          id: 'eni3-1-text',
          type: 'TEXT',
          text: 'Headlines from today’s news app:\n\nCITY TO BAN CARS FROM CENTRE BY 2030\nMINISTER QUITS OVER EXPENSES ROW\n200 JOBS CUT AT CAR FACTORY\nHOSPITAL WAITING TIMES FALL\nTEENAGER FINDS ROMAN COINS IN GARDEN',
        },
        {
          id: 'eni3-1-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Headline grammar',
          text: 'Headlines save space, so they follow their own rules. Articles and “to be” are left out. The present simple is used for things that have already happened (“Minister quits” = the minister has quit). “to” + infinitive means the future (“City to ban cars” = the city is going to ban cars). A past participle alone is a passive (“200 jobs cut” = 200 jobs have been cut).',
          table: {
            headers: ['headline', 'full sentence'],
            rows: [
              ['Minister quits', 'The minister has resigned.'],
              ['City to ban cars', 'The city is going to ban cars.'],
              ['200 jobs cut', '200 jobs have been cut.'],
              ['Waiting times fall', 'Waiting times have fallen.'],
            ],
          },
        },
        {
          id: 'eni3-1-match',
          type: 'MATCHING',
          instruction: 'Match the headline with its meaning.',
          left: [
            { id: 'l1', text: 'CITY TO BAN CARS' },
            { id: 'l2', text: 'MINISTER QUITS' },
            { id: 'l3', text: '200 JOBS CUT' },
            { id: 'l4', text: 'TEENAGER FINDS COINS' },
          ],
          right: [
            { id: 'r1', text: 'The city is going to stop cars.' },
            { id: 'r2', text: 'The minister has left the job.' },
            { id: 'r3', text: '200 people have lost their jobs.' },
            { id: 'r4', text: 'A young person has found some coins.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'eni3-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Words: headline words',
          items: [
            { term: 'to quit', translations: { de: 'zurücktreten, aufhören', es: 'dimitir, dejar' } },
            { term: 'row', translations: { de: 'der Streit (Schlagzeile)', es: 'la polémica, la disputa' } },
            { term: 'to cut', translations: { de: 'streichen, kürzen', es: 'recortar' } },
            { term: 'to ban', translations: { de: 'verbieten', es: 'prohibir' } },
            { term: 'to back', translations: { de: 'unterstützen', es: 'apoyar' } },
            { term: 'bid', translations: { de: 'der Versuch, das Angebot', es: 'el intento, la oferta' } },
            { term: 'probe', translations: { de: 'die Untersuchung', es: 'la investigación' } },
          ],
        },
        {
          id: 'eni3-1-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct meaning.',
          question: '“PRIME MINISTER TO VISIT CHINA”',
          options: [
            { id: 'o1', text: 'The prime minister visited China yesterday.' },
            { id: 'o2', text: 'The prime minister is going to visit China.' },
            { id: 'o3', text: 'The prime minister wants China to visit.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: '“to” + infinitive in a headline refers to the future.',
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – Passiv.
  {
    order: 2,
    title: 'It was reported that …',
    subtitle: 'Das Passiv in Präsens und Vergangenheit',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'eni3-2-h1', type: 'HEADING', level: 1, text: 'It was reported that …' },
        {
          id: 'eni3-2-text',
          type: 'TEXT',
          text: 'Roman coins found in Bristol garden\n\nMore than 300 Roman coins were discovered in a garden in Bristol last weekend. The coins were found by 16-year-old Maya Evans while she was helping her father plant a tree. They were made around 250 AD and are believed to be very valuable. The garden is now being examined by archaeologists, and the coins will be shown at the city museum next year.',
        },
        {
          id: 'eni3-2-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'be + past participle',
          text: 'The passive puts the action or the thing in the centre, not the person who does it. It is formed with “to be” in the right tense and the past participle. If you want to say who did it, use “by”. News reports use the passive a lot, because the result is often more important than the person: “300 coins were found.”',
          table: {
            headers: ['tense', 'active', 'passive'],
            rows: [
              ['present simple', 'They make the coins.', 'The coins are made.'],
              ['past simple', 'Maya found the coins.', 'The coins were found (by Maya).'],
              ['present perfect', 'They have cut 200 jobs.', '200 jobs have been cut.'],
              ['will', 'They will show the coins.', 'The coins will be shown.'],
            ],
          },
        },
        {
          id: 'eni3-2-cloze',
          type: 'CLOZE',
          instruction: 'Complete with the passive.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'The coins ' },
            { kind: 'GAP', gapId: 'p1', solution: ['were discovered'], hint: 'discover (past)', width: 16 },
            { kind: 'TEXT', text: ' last weekend. They ' },
            { kind: 'GAP', gapId: 'p2', solution: ['were made'], hint: 'make (past)', width: 10 },
            { kind: 'TEXT', text: ' around 250 AD. Today, most coins ' },
            { kind: 'GAP', gapId: 'p3', solution: ['are produced'], hint: 'produce (present)', width: 13 },
            { kind: 'TEXT', text: ' by machines. The coins ' },
            { kind: 'GAP', gapId: 'p4', solution: ['will be shown'], hint: 'show (future)', width: 14 },
            { kind: 'TEXT', text: ' at the museum.' },
          ],
        },
        {
          id: 'eni3-2-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct passive sentence.',
          question: 'Active: “Somebody stole my bike yesterday.”',
          options: [
            { id: 'o1', text: 'My bike stole yesterday.' },
            { id: 'o2', text: 'My bike was stolen yesterday.' },
            { id: 'o3', text: 'My bike is stolen yesterday.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'Past simple passive: was/were + past participle. “steal – stole – stolen”.',
        },
        {
          id: 'eni3-2-info-german',
          type: 'INFO',
          variant: 'TIP',
          title: '“wird” is not “will”',
          text: 'German forms the passive with “werden”: “Das Haus wird gebaut.” English uses “be”: “The house is being built.” Don’t translate “wird” as “will” – “The house will be built” means it happens in the future.',
        },
        {
          id: 'eni3-2-match',
          type: 'MATCHING',
          instruction: 'Match the German with the English.',
          left: [
            { id: 'l1', text: 'Das Auto wird repariert.' },
            { id: 'l2', text: 'Das Auto wurde repariert.' },
            { id: 'l3', text: 'Das Auto wird repariert werden.' },
            { id: 'l4', text: 'Das Auto ist repariert worden.' },
          ],
          right: [
            { id: 'r1', text: 'The car is being repaired.' },
            { id: 'r2', text: 'The car was repaired.' },
            { id: 'r3', text: 'The car will be repaired.' },
            { id: 'r4', text: 'The car has been repaired.' },
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
  // Seite 3 – say, tell und indirekte Rede.
  {
    order: 3,
    title: 'She said that …',
    subtitle: 'say, tell und einfache indirekte Rede',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'eni3-3-h1', type: 'HEADING', level: 1, text: 'She said that …' },
        {
          id: 'eni3-3-dlg',
          type: 'DIALOGUE',
          title: 'An interview on local radio',
          lines: [
            { speaker: 'Reporter', text: 'Maya, how did you feel when you found the coins?' },
            { speaker: 'Maya', text: 'I was shocked! I thought they were old buttons.' },
            { speaker: 'Reporter', text: 'What are you going to do now?' },
            { speaker: 'Maya', text: 'I want to study archaeology. And I’m going to dig up the whole garden!' },
          ],
        },
        {
          id: 'eni3-3-text',
          type: 'TEXT',
          text: 'The next day, the newspaper reported: Maya said that she had been shocked. She told the reporter that she thought they were old buttons. She said she wanted to study archaeology and that she was going to dig up the whole garden.',
        },
        {
          id: 'eni3-3-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Reported speech: one step back',
          text: 'When you report what someone said in the past, the tense usually moves one step back: present → past, “will” → “would”, “am going to” → “was going to”, past → past perfect. Pronouns change too: “I” becomes “she”. “that” can be left out.',
          table: {
            headers: ['direct speech', 'reported speech'],
            rows: [
              ['“I want to study.”', 'She said (that) she wanted to study.'],
              ['“I’m going to dig.”', 'She said she was going to dig.'],
              ['“We will help.”', 'They said they would help.'],
              ['“I was shocked.”', 'She said she had been shocked.'],
            ],
          },
        },
        {
          id: 'eni3-3-info-saytell',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'say or tell?',
          text: '“tell” always needs a person directly after it: “She told me / the reporter / us.” “say” has no person after it – or “to” + person: “She said (to me) that …”. So never “She said me”.',
          table: {
            headers: ['say', 'tell'],
            rows: [
              ['She said that …', 'She told me that …'],
              ['He said hello.', 'He told us a story.'],
              ['They said to him that …', 'They told him that …'],
            ],
          },
        },
        {
          id: 'eni3-3-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'Which sentence is correct?',
          options: [
            { id: 'o1', text: 'She said me that she was tired.' },
            { id: 'o2', text: 'She told me that she was tired.' },
            { id: 'o3', text: 'She told that she was tired.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: '“tell” needs a person: “told me”. “say” doesn’t take a person directly: “she said that …”.',
        },
        {
          id: 'eni3-3-cloze',
          type: 'CLOZE',
          instruction: 'Report what Ben said. Complete.',
          wordBank: ['said', 'told', 'was', 'would', 'had'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '“I’m busy.” → Ben ' },
            { kind: 'GAP', gapId: 'r1', solution: ['said'], width: 6 },
            { kind: 'TEXT', text: ' that he ' },
            { kind: 'GAP', gapId: 'r2', solution: ['was'], width: 5 },
            { kind: 'TEXT', text: ' busy.\n“I’ll call you later, Sophie.” → Ben ' },
            { kind: 'GAP', gapId: 'r3', solution: ['told'], width: 6 },
            { kind: 'TEXT', text: ' Sophie that he ' },
            { kind: 'GAP', gapId: 'r4', solution: ['would'], width: 6 },
            { kind: 'TEXT', text: ' call her later.\n“I missed the train.” → He said he ' },
            { kind: 'GAP', gapId: 'r5', solution: ['had'], width: 5 },
            { kind: 'TEXT', text: ' missed the train.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – Quellen prüfen, Relativsätze.
  {
    order: 4,
    title: 'Is it true?',
    subtitle: 'Quellen prüfen, Relativsätze',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'eni3-4-h1', type: 'HEADING', level: 1, text: 'Is it true?' },
        {
          id: 'eni3-4-text',
          type: 'TEXT',
          text: 'How to spot fake news – five questions:\n1. Who wrote it? A journalist who works for a known newspaper is more reliable than an account that appeared last week.\n2. Where does it come from? Look for the original source which the article is based on.\n3. When was it published? Old stories are often shared as if they were new.\n4. Do other media report it? A story that nobody else mentions should make you careful.\n5. How does it make you feel? Posts which make you very angry are often designed to be shared, not to inform.',
        },
        {
          id: 'eni3-4-vocab',
          type: 'VOCAB_LIST',
          title: 'Words: news and sources',
          items: [
            { term: 'source', translations: { de: 'die Quelle', es: 'la fuente' } },
            { term: 'reliable', translations: { de: 'zuverlässig', es: 'fiable' } },
            { term: 'to publish', translations: { de: 'veröffentlichen', es: 'publicar' } },
            { term: 'to share', translations: { de: 'teilen', es: 'compartir' } },
            { term: 'fake news', translations: { de: 'Falschmeldungen', es: 'noticias falsas' } },
            { term: 'to check', translations: { de: 'überprüfen', es: 'comprobar' } },
            { term: 'journalist', translations: { de: 'der/die Journalist/in', es: 'el/la periodista' } },
            { term: 'headline', translations: { de: 'die Schlagzeile', es: 'el titular' } },
          ],
        },
        {
          id: 'eni3-4-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Relative clauses: who, which, that, where',
          text: 'Relative clauses give more information about a noun. Use “who” for people, “which” for things, and “that” for both (it is very common in speaking). “where” is for places, “whose” shows possession. Unlike German, there is no comma before a clause that defines which person or thing you mean.',
          table: {
            headers: ['word', 'for', 'example'],
            rows: [
              ['who', 'people', 'a journalist who works for the BBC'],
              ['which', 'things', 'the article which I read'],
              ['that', 'people and things', 'a story that nobody mentions'],
              ['where', 'places', 'the garden where the coins were found'],
              ['whose', 'possession', 'the girl whose father planted a tree'],
            ],
          },
        },
        {
          id: 'eni3-4-cloze',
          type: 'CLOZE',
          instruction: 'Complete with who, which, where or whose.',
          wordBank: ['who', 'which', 'where', 'whose'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Maya is the girl ' },
            { kind: 'GAP', gapId: 'r1', solution: ['who', 'that'], width: 6 },
            { kind: 'TEXT', text: ' found the coins. The coins, ' },
            { kind: 'GAP', gapId: 'r2', solution: ['which'], width: 6 },
            { kind: 'TEXT', text: ' are 1,800 years old, are very valuable. This is the garden ' },
            { kind: 'GAP', gapId: 'r3', solution: ['where'], width: 6 },
            { kind: 'TEXT', text: ' they were found. Maya, ' },
            { kind: 'GAP', gapId: 'r4', solution: ['whose'], width: 6 },
            { kind: 'TEXT', text: ' father is a gardener, wants to study archaeology.' },
          ],
        },
        {
          id: 'eni3-4-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'Which sentence is correct?',
          options: [
            { id: 'o1', text: 'The man which wrote the article is a famous journalist.' },
            { id: 'o2', text: 'The man who wrote the article is a famous journalist.' },
            { id: 'o3', text: 'The man, who wrote the article is a famous journalist.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: '“who” is for people. The clause tells us which man, so there are no commas.',
        },
        {
          id: 'eni3-4-choice2',
          type: 'CHOICE',
          instruction: 'Read the tips again. Mark all the warning signs.',
          question: 'Which of these should make you careful?',
          options: [
            { id: 'r1', text: 'The account was created last week.' },
            { id: 'r2', text: 'Several newspapers report the same story.' },
            { id: 'r3', text: 'The post makes you extremely angry.' },
            { id: 'r4', text: 'You can find the original source.' },
          ],
          multiple: true,
          solution: ['r1', 'r3'],
          explanation: 'New accounts and posts that make you very angry are warning signs. Other media and an original source make a story more reliable.',
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – einen Bericht zusammenfassen.
  {
    order: 5,
    title: 'Summing up',
    subtitle: 'Einen Bericht zusammenfassen',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'eni3-5-h1', type: 'HEADING', level: 1, text: 'Summing up' },
        {
          id: 'eni3-5-text',
          type: 'TEXT',
          text: 'Young people and the news\n\nA new study by the University of Leeds shows that most people under 25 no longer get their news from television or newspapers. Instead, 78% say they mainly use social media, especially short videos. The researchers, who asked 2,000 young people, found that many of them do not check where a story comes from. However, the study also showed some good news: young people who had learned about fake news at school were twice as likely to check a source. The authors say that media education should be taught in every school.',
        },
        {
          id: 'eni3-5-info',
          type: 'INFO',
          variant: 'TIP',
          title: 'Writing a summary',
          text: 'A summary gives only the main points, in your own words and in a neutral tone. Start with the source and the topic (“A study by … shows that …”), then give the key results, and end with the conclusion. Leave out examples and details, and don’t add your opinion.',
        },
        {
          id: 'eni3-5-choice',
          type: 'CHOICE',
          instruction: 'Choose the best summary sentence.',
          question: 'Which sentence is the best start for a summary of the text?',
          options: [
            { id: 'o1', text: 'I think young people should watch more TV.' },
            { id: 'o2', text: 'A study by the University of Leeds shows that most young people get their news from social media.' },
            { id: 'o3', text: 'The researchers asked 2,000 young people many questions.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'A good first sentence names the source and the main result. The first option is an opinion, the third a detail.',
        },
        {
          id: 'eni3-5-cloze',
          type: 'CLOZE',
          instruction: 'Complete the summary.',
          wordBank: ['shows', 'who', 'However', 'were', 'should'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'A study by the University of Leeds ' },
            { kind: 'GAP', gapId: 's1', solution: ['shows'], width: 6 },
            { kind: 'TEXT', text: ' that most young people use social media for news. Many of them don’t check sources. ' },
            { kind: 'GAP', gapId: 's2', solution: ['However'], width: 8 },
            { kind: 'TEXT', text: ', those ' },
            { kind: 'GAP', gapId: 's3', solution: ['who'], width: 5 },
            { kind: 'TEXT', text: ' had learned about fake news at school ' },
            { kind: 'GAP', gapId: 's4', solution: ['were'], width: 5 },
            { kind: 'TEXT', text: ' more careful. The authors say media education ' },
            { kind: 'GAP', gapId: 's5', solution: ['should'], width: 7 },
            { kind: 'TEXT', text: ' be taught in all schools.' },
          ],
        },
        {
          id: 'eni3-5-choice2',
          type: 'CHOICE',
          instruction: 'Mark all the sentences that are true according to the text.',
          question: 'What does the study say?',
          options: [
            { id: 'r1', text: '78% of young people mainly use social media for news.' },
            { id: 'r2', text: 'Young people never check sources.' },
            { id: 'r3', text: 'School lessons about fake news seem to help.' },
            { id: 'r4', text: 'Young people prefer newspapers.' },
          ],
          multiple: true,
          solution: ['r1', 'r3'],
          explanation: 'The text says “many” don’t check – not “never”. And young people no longer get their news from newspapers.',
        },
        {
          id: 'eni3-5-writing',
          type: 'WRITING',
          instruction: 'Write about your media habits.',
          prompt:
            'Write 120–160 words: Where do you get your news? How do you check if a story is true? Report something a friend or family member said about the news, and use at least one passive sentence and one relative clause.',
          minWords: 100,
          maxWords: 200,
          aiFeedback: true,
          sampleAnswer:
            'I usually get my news from two apps on my phone and from the radio, which I listen to in the car. I rarely watch TV news any more. When I read a surprising story, I check if it is reported by other media. Last month, for example, a post about a new tax was shared by many of my friends, but I couldn’t find it on any news website, so I didn’t believe it. My father, who reads a newspaper every morning, told me that he doesn’t trust social media at all. He said that newspapers were more reliable because their articles were checked by editors. I think he is partly right, but good journalism can be found online too.',
        },
      ],
    },
  },
];
