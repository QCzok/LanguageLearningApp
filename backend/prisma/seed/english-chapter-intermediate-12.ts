import type { UnitSeed } from './chapter-beginner-1';

/**
 * Englisch, Intermediate, Kapitel 12: „Identity“ (B2, Kapitel 6)
 *
 * Das letzte Kapitel des Intermediate-Bandes. Migration, Sprache,
 * Zugehörigkeit. Seite 1 den Wortschatz, Seite 2 die Redewiedergabe mit
 * Berichtsverben (claim, admit, deny, suggest – jedes mit eigenem Muster),
 * Seite 3 indirekte Fragen und Aufforderungen, Seite 4 used to / be used to /
 * get used to, Seite 5 die Zusammenfassung eines längeren Textes mit
 * eigener Stellungnahme.
 *
 * Die Interviews sind erfunden, die Personen fiktiv. Einsprachig englisch;
 * Vokabeln mit `de` und `es`.
 */
const v = 1;

export const ENGLISH_INTERMEDIATE_12_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Wortschatz: Migration und Zugehörigkeit.
  {
    order: 1,
    title: 'Where is home?',
    subtitle: 'Migration und Zugehörigkeit',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'eni12-1-h1', type: 'HEADING', level: 1, text: 'Where is home?' },
        {
          id: 'eni12-1-text',
          type: 'TEXT',
          text: 'Three voices from a radio series about identity:\n\nMarta, 34, moved from Poland to Bristol twelve years ago: “When I go back to Kraków, people say I sound British. Here, people ask where I’m from. For a long time I felt I didn’t fully belong anywhere. Now I think I belong to both places.”\n\nKwame, 19, born in London to Ghanaian parents: “My parents still call Ghana ‘home’. For me, home is London – but I’m proud of my heritage. I speak Twi with my grandmother and English with everyone else.”\n\nSophie, 29, from Cologne: “I didn’t expect to feel so German until I moved abroad. Suddenly I noticed how punctual I am!”',
        },
        {
          id: 'eni12-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Words: identity and migration',
          items: [
            { term: 'to belong (to)', translations: { de: 'dazugehören, gehören (zu)', es: 'pertenecer (a)' } },
            { term: 'sense of belonging', translations: { de: 'das Zugehörigkeitsgefühl', es: 'el sentido de pertenencia' } },
            { term: 'heritage', translations: { de: 'das (kulturelle) Erbe', es: 'la herencia, el patrimonio' } },
            { term: 'to emigrate / immigrate', translations: { de: 'auswandern / einwandern', es: 'emigrar / inmigrar' } },
            { term: 'native language', translations: { de: 'die Muttersprache', es: 'la lengua materna' } },
            { term: 'to fit in', translations: { de: 'sich einfügen, dazupassen', es: 'encajar' } },
            { term: 'to settle (in)', translations: { de: 'sich einleben, sich niederlassen', es: 'instalarse, adaptarse' } },
            { term: 'homesick', translations: { de: 'heimwehkrank', es: 'nostálgico' } },
            { term: 'citizenship', translations: { de: 'die Staatsbürgerschaft', es: 'la ciudadanía' } },
            { term: 'bilingual', translations: { de: 'zweisprachig', es: 'bilingüe' } },
          ],
        },
        {
          id: 'eni12-1-match',
          type: 'MATCHING',
          instruction: 'Match the words with their meaning.',
          left: [
            { id: 'l1', text: 'homesick' },
            { id: 'l2', text: 'heritage' },
            { id: 'l3', text: 'to fit in' },
            { id: 'l4', text: 'bilingual' },
          ],
          right: [
            { id: 'r1', text: 'missing the place you come from' },
            { id: 'r2', text: 'traditions and culture from your family’s past' },
            { id: 'r3', text: 'to be accepted by a group' },
            { id: 'r4', text: 'speaking two languages' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'eni12-1-choice',
          type: 'CHOICE',
          instruction: 'Mark all the sentences that are true according to the texts.',
          question: 'What do the three speakers say?',
          options: [
            { id: 'r1', text: 'Marta now feels she belongs to two places.' },
            { id: 'r2', text: 'Kwame’s parents consider London their home.' },
            { id: 'r3', text: 'Sophie noticed her German habits only after moving.' },
            { id: 'r4', text: 'Kwame doesn’t speak any Twi.' },
          ],
          multiple: true,
          solution: ['r1', 'r3'],
          explanation: 'Kwame’s parents still call Ghana “home”, and he speaks Twi with his grandmother.',
        },
        {
          id: 'eni12-1-info',
          type: 'INFO',
          variant: 'TIP',
          title: 'emigrate or immigrate?',
          text: 'The perspective decides. You emigrate FROM a country (seen from the country you leave) and immigrate TO a country (seen from the new country). “migrate” and “migrant” are neutral. Be careful with sensitive words: “expat” is often used for well-off Western migrants, “immigrant” for others – a difference that many people criticise.',
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – Berichtsverben.
  {
    order: 2,
    title: 'She admitted feeling homesick',
    subtitle: 'Redewiedergabe mit Berichtsverben',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'eni12-2-h1', type: 'HEADING', level: 1, text: 'She admitted feeling homesick' },
        {
          id: 'eni12-2-text',
          type: 'TEXT',
          text: 'From the programme notes: In the interview, Marta admitted feeling homesick during her first winter. She explained that she had not spoken to anyone for days. Kwame claimed to be “more of a Londoner than most Londoners”. He denied feeling torn between two cultures, but he suggested that schools should teach more about the history of migration. Both of them encouraged listeners to learn at least a few words of their neighbours’ languages.',
        },
        {
          id: 'eni12-2-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Reporting verbs and their patterns',
          text: '“say” and “tell” only report the words. Reporting verbs also show what the speaker was doing: admitting, denying, promising, warning. Each verb has its own pattern – learn them together. Note: “suggest” is never followed by an infinitive (“He suggested to go” is wrong).',
          table: {
            headers: ['pattern', 'verbs', 'example'],
            rows: [
              ['+ -ing', 'admit, deny, suggest, recommend', 'She admitted feeling lonely.'],
              ['+ to + infinitive', 'agree, promise, refuse, claim, offer', 'He refused to answer.'],
              ['+ person + to + infinitive', 'tell, ask, warn, advise, encourage', 'She advised me to wait.'],
              ['+ that + clause', 'explain, admit, claim, suggest, point out', 'He explained that he was tired.'],
            ],
          },
        },
        {
          id: 'eni12-2-cloze',
          type: 'CLOZE',
          instruction: 'Complete with the correct form.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Marta admitted ' },
            { kind: 'GAP', gapId: 'r1', solution: ['feeling'], hint: 'feel', width: 9 },
            { kind: 'TEXT', text: ' homesick. Kwame claimed ' },
            { kind: 'GAP', gapId: 'r2', solution: ['to be'], hint: 'be', width: 7 },
            { kind: 'TEXT', text: ' a real Londoner. He denied ' },
            { kind: 'GAP', gapId: 'r3', solution: ['feeling'], hint: 'feel', width: 9 },
            { kind: 'TEXT', text: ' torn. They encouraged listeners ' },
            { kind: 'GAP', gapId: 'r4', solution: ['to learn'], hint: 'learn', width: 9 },
            { kind: 'TEXT', text: ' a few words of other languages.' },
          ],
        },
        {
          id: 'eni12-2-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'Direct speech: “Let’s take a break,” said Ben.',
          options: [
            { id: 'o1', text: 'Ben suggested to take a break.' },
            { id: 'o2', text: 'Ben suggested taking a break.' },
            { id: 'o3', text: 'Ben suggested us to take a break.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: '“suggest” + -ing, or “suggest that we (should) take a break”. Never “suggest to do” or “suggest somebody to do”.',
        },
        {
          id: 'eni12-2-match',
          type: 'MATCHING',
          instruction: 'Match the direct speech with the reported version.',
          left: [
            { id: 'l1', text: '“Yes, I broke the vase.”' },
            { id: 'l2', text: '“I didn’t take the money!”' },
            { id: 'l3', text: '“I’ll call you tomorrow.”' },
            { id: 'l4', text: '“Don’t touch the wire!”' },
          ],
          right: [
            { id: 'r1', text: 'He admitted breaking the vase.' },
            { id: 'r2', text: 'She denied taking the money.' },
            { id: 'r3', text: 'He promised to call me the next day.' },
            { id: 'r4', text: 'She warned us not to touch the wire.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'eni12-2-info-time',
          type: 'INFO',
          variant: 'TIP',
          title: 'Changing time and place words',
          text: 'When you report later or somewhere else, time and place words change too: now → then, today → that day, tomorrow → the next day, yesterday → the day before, here → there, this → that. If the statement is still true, you don’t have to change the tense: “She said she lives in Bristol.”',
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – indirekte Fragen und Aufforderungen.
  {
    order: 3,
    title: 'She asked me where I was from',
    subtitle: 'Indirekte Fragen und Aufforderungen',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'eni12-3-h1', type: 'HEADING', level: 1, text: 'She asked me where I was from' },
        {
          id: 'eni12-3-dlg',
          type: 'DIALOGUE',
          title: 'The citizenship interview (as Marta remembers it)',
          lines: [
            { speaker: 'Officer', text: 'How long have you lived in the UK?' },
            { speaker: 'Officer', text: 'Do you have any other citizenship?' },
            { speaker: 'Officer', text: 'Why do you want to become a British citizen?' },
            { speaker: 'Officer', text: 'Please sign here.' },
          ],
        },
        {
          id: 'eni12-3-text',
          type: 'TEXT',
          text: 'Marta later told a friend: “She asked me how long I had lived in the UK. Then she wanted to know whether I had any other citizenship. She asked me why I wanted to become British – I said it was because my children were born here. Finally, she asked me to sign the form.”',
        },
        {
          id: 'eni12-3-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Reported questions',
          text: 'In reported questions, the word order is the same as in a statement (subject before verb), there is no do/does/did, and there is no question mark. Wh-questions keep the question word; yes/no questions use “if” or “whether”. Commands and requests use tell/ask + person + (not) to + infinitive.',
          table: {
            headers: ['direct', 'reported'],
            rows: [
              ['“Where do you live?”', 'She asked me where I lived.'],
              ['“Are you married?”', 'She asked (me) if / whether I was married.'],
              ['“Please sign here.”', 'She asked me to sign.'],
              ['“Don’t be late!”', 'He told us not to be late.'],
            ],
          },
        },
        {
          id: 'eni12-3-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct reported question.',
          question: 'Direct: “Where do you work?”',
          options: [
            { id: 'o1', text: 'He asked me where did I work.' },
            { id: 'o2', text: 'He asked me where I worked.' },
            { id: 'o3', text: 'He asked me where do I work?' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'Reported questions have statement word order and no “do/did”: “where I worked”.',
        },
        {
          id: 'eni12-3-cloze',
          type: 'CLOZE',
          instruction: 'Complete the reported questions and requests.',
          wordBank: ['how', 'whether', 'why', 'to', 'not'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'She asked me ' },
            { kind: 'GAP', gapId: 'q1', solution: ['how'], width: 8 },
            { kind: 'TEXT', text: ' long I had lived in the UK. She wanted to know ' },
            { kind: 'GAP', gapId: 'q2', solution: ['whether', 'if'], width: 8 },
            { kind: 'TEXT', text: ' I had another citizenship and ' },
            { kind: 'GAP', gapId: 'q3', solution: ['why'], width: 8 },
            { kind: 'TEXT', text: ' I wanted to become British. She asked me ' },
            { kind: 'GAP', gapId: 'q4', solution: ['to'], width: 5 },
            { kind: 'TEXT', text: ' sign the form and told me ' },
            { kind: 'GAP', gapId: 'q5', solution: ['not'], width: 5 },
            { kind: 'TEXT', text: ' to forget my passport next time.' },
          ],
        },
        {
          id: 'eni12-3-info-indirect',
          type: 'INFO',
          variant: 'TIP',
          title: 'Polite indirect questions',
          text: 'The same word order is used in polite questions in the present: “Could you tell me where the station is?” (not “where is the station”), “Do you know if the office is open?”, “I was wondering whether you could help me.”',
        },
        {
          id: 'eni12-3-choice2',
          type: 'CHOICE',
          instruction: 'Choose the correct polite question.',
          question: 'You want to know the time of the next train.',
          options: [
            { id: 'o1', text: 'Could you tell me when does the next train leave?' },
            { id: 'o2', text: 'Could you tell me when the next train leaves?' },
            { id: 'o3', text: 'Could you tell me when leaves the next train?' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'After “Could you tell me …”, use statement word order without “does”.',
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – used to, be used to, get used to.
  {
    order: 4,
    title: 'I’m used to it now',
    subtitle: 'used to, be used to, get used to',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'eni12-4-h1', type: 'HEADING', level: 1, text: 'I’m used to it now' },
        {
          id: 'eni12-4-text',
          type: 'TEXT',
          text: 'Sophie writes to Lena, three years after moving: “Remember how I used to hate the London rain? Well, I’m used to it now – I don’t even carry an umbrella any more! It took me a long time to get used to people saying ‘sorry’ all the time, and I still can’t get used to warm beer. But I’m getting used to making small talk with strangers, and I’ve realised that I actually enjoy it.”',
        },
        {
          id: 'eni12-4-info',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Three different structures',
          text: 'These look similar but mean different things. “used to + infinitive” = a past habit or state that is over (früher). “be used to + -ing / noun” = be familiar with something, it’s normal for you (gewohnt sein). “get used to + -ing / noun” = the process of becoming familiar (sich gewöhnen an). In the last two, “to” is a preposition, so it is followed by -ing, not an infinitive.',
          table: {
            headers: ['structure', 'meaning', 'example'],
            rows: [
              ['used to + verb', 'früher (not now)', 'I used to hate the rain.'],
              ['be used to + -ing/noun', 'gewohnt sein', 'I’m used to the rain. / I’m used to getting wet.'],
              ['get used to + -ing/noun', 'sich gewöhnen an', 'I’m getting used to making small talk.'],
            ],
          },
        },
        {
          id: 'eni12-4-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: '“Ich bin es gewohnt, früh aufzustehen.”',
          options: [
            { id: 'o1', text: 'I used to get up early.' },
            { id: 'o2', text: 'I’m used to getting up early.' },
            { id: 'o3', text: 'I’m used to get up early.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: '“gewohnt sein” = be used to + -ing. “I used to get up early” means “früher bin ich früh aufgestanden”.',
        },
        {
          id: 'eni12-4-cloze',
          type: 'CLOZE',
          instruction: 'Complete with used to, am used to or get used to.',
          wordBank: ['used to', 'am used to', 'get used to'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'I ' },
            { kind: 'GAP', gapId: 'u1', solution: ['used to'], width: 12 },
            { kind: 'TEXT', text: ' live in a village, but now I live in London. I ' },
            { kind: 'GAP', gapId: 'u2', solution: ['am used to'], width: 12 },
            { kind: 'TEXT', text: ' the noise now – it doesn’t bother me. But I can’t ' },
            { kind: 'GAP', gapId: 'u3', solution: ['get used to'], width: 12 },
            { kind: 'TEXT', text: ' the prices!' },
          ],
        },
        {
          id: 'eni12-4-match',
          type: 'MATCHING',
          instruction: 'Match the sentence with its meaning.',
          left: [
            { id: 'l1', text: 'I used to drive on the right.' },
            { id: 'l2', text: 'I’m used to driving on the left.' },
            { id: 'l3', text: 'I’m getting used to driving on the left.' },
          ],
          right: [
            { id: 'r1', text: 'That was my habit in the past.' },
            { id: 'r2', text: 'It feels normal to me now.' },
            { id: 'r3', text: 'It’s becoming easier.' },
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
  // Seite 5 – einen längeren Text zusammenfassen und Stellung nehmen.
  {
    order: 5,
    title: 'Summary and response',
    subtitle: 'Zusammenfassen und Stellung nehmen',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'eni12-5-h1', type: 'HEADING', level: 1, text: 'Summary and response' },
        {
          id: 'eni12-5-text',
          type: 'TEXT',
          text: 'The language we dream in\n\nFor many people who grow up with more than one language, identity is not a single thing but a combination. Researchers who have interviewed bilingual adults report that many feel like “slightly different people” in each language: more direct in one, more polite or humorous in another. This is not a sign of confusion. Rather, each language carries its own habits, expressions and relationships.\n\nHowever, the experience is not always positive. Children of immigrants sometimes lose their parents’ language as teenagers, often because they want to fit in at school. Years later, many regret this, as it can make it difficult to talk to grandparents or to feel at home in their family’s country of origin. For this reason, a growing number of cities now offer weekend schools where children can keep up their heritage languages.\n\nThe researchers conclude that multilingualism should be seen as a resource rather than a problem. Societies, they argue, benefit when people can move confidently between cultures – and individuals benefit when they do not have to choose one identity over another.',
        },
        {
          id: 'eni12-5-choice',
          type: 'CHOICE',
          instruction: 'Choose the best summary of the text.',
          question: 'Which summary is the most accurate?',
          options: [
            { id: 'o1', text: 'The text argues that bilingual people are confused about who they are and should choose one language.' },
            { id: 'o2', text: 'The text explains that bilingual people often feel slightly different in each language, that heritage languages are sometimes lost, and that multilingualism should be seen as a resource.' },
            { id: 'o3', text: 'The text describes weekend schools in several cities and how they are financed.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'The second option covers all three main points. The first contradicts the text; the third focuses on a detail.',
        },
        {
          id: 'eni12-5-info',
          type: 'INFO',
          variant: 'TIP',
          title: 'Summary and response',
          text: 'A “summary and response” task has two clearly separated parts. The summary reports the author’s main points neutrally, using reporting verbs: “The author argues / points out / concludes that …”. The response gives your own view: “I strongly agree with the author’s claim that …”, “However, I am less convinced that …”, supported by your own experience or examples.',
        },
        {
          id: 'eni12-5-cloze',
          type: 'CLOZE',
          instruction: 'Complete the summary with reporting verbs.',
          wordBank: ['explains', 'points out', 'concludes', 'argues'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'The author ' },
            { kind: 'GAP', gapId: 's1', solution: ['explains'], width: 11 },
            { kind: 'TEXT', text: ' that bilingual people often feel slightly different in each language. She ' },
            { kind: 'GAP', gapId: 's2', solution: ['points out'], width: 11 },
            { kind: 'TEXT', text: ' that many children lose their heritage language. Finally, she ' },
            { kind: 'GAP', gapId: 's3', solution: ['concludes', 'argues'], width: 11 },
            { kind: 'TEXT', text: ' that multilingualism is a resource.' },
          ],
        },
        {
          id: 'eni12-5-choice2',
          type: 'CHOICE',
          instruction: 'Why do some children lose their parents’ language, according to the text?',
          question: 'Choose the correct answer.',
          options: [
            { id: 'o1', text: 'Their parents don’t want them to speak it.' },
            { id: 'o2', text: 'They want to fit in at school.' },
            { id: 'o3', text: 'Schools forbid it.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'The text says children often lose the language “because they want to fit in at school”.',
        },
        {
          id: 'eni12-5-writing',
          type: 'WRITING',
          instruction: 'Write a summary and a response.',
          prompt:
            'Write a summary of “The language we dream in” (80–100 words), followed by your response (130–170 words). In the response, say whether you agree with the author’s conclusion and support your view with examples from your own experience or from people you know. Use at least three different reporting verbs.',
          minWords: 200,
          maxWords: 300,
          aiFeedback: true,
          sampleAnswer:
            'Summary\nThe author explains that many people who grow up with two or more languages feel slightly different in each of them, because every language carries its own habits and relationships. She points out, however, that children of immigrants often lose their parents’ language in order to fit in, and that many later regret it. She mentions that some cities now offer weekend schools for heritage languages. Finally, she concludes that multilingualism should be treated as a resource for both individuals and society.\n\nResponse\nI strongly agree with the author’s conclusion. My cousin grew up in Stuttgart with a Turkish father and a German mother. As a teenager she refused to speak Turkish because she was embarrassed in front of her friends. Today she is thirty and admits that she finds it painful not to be able to talk properly with her grandmother.\n\nI also recognise the idea of being a “slightly different person” in another language. When I speak English, I am more relaxed and I make more jokes than in German.\n\nHowever, I am less convinced that weekend schools alone can solve the problem. In my view, what matters most is whether a language is valued in everyday life – at school, in the media and at work. If children see that their heritage language is respected, they are much more likely to keep it.',
        },
      ],
    },
  },
];
