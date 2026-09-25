import type { UnitSeed } from './chapter-beginner-1';

/**
 * Englisch, Intermediate, Kapitel 9: „What if?“ (B2, Kapitel 3)
 *
 * Die Grammatik dessen, was nicht ist oder nicht war. Seite 1 der zweite
 * Bedingungssatz (If I had …, I would …), Seite 2 der dritte (If I had
 * known …), Seite 3 die gemischten Formen, Seite 4 wish und if only, Seite 5
 * ein hypothetischer Aufsatz. Der typische Fehler Deutschsprachiger ist
 * „would“ im if-Satz – nach dem Muster von „wenn ich hätte“/„würde“.
 *
 * Einsprachig englisch; Vokabeln mit `de` und `es`.
 */
const v = 1;

export const ENGLISH_INTERMEDIATE_9_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – zweiter Bedingungssatz.
  {
    order: 1,
    title: 'If I won the lottery …',
    subtitle: 'Irreales in der Gegenwart',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'eni9-1-h1', type: 'HEADING', level: 1, text: 'If I won the lottery …' },
        {
          id: 'eni9-1-dlg',
          type: 'DIALOGUE',
          title: 'Lunch break',
          lines: [
            { speaker: 'Ben', text: 'What would you do if you won ten million pounds?' },
            { speaker: 'Sophie', text: 'Honestly? I’d buy a small house by the sea and I’d keep working – but only three days a week.' },
            { speaker: 'Ben', text: 'Really? If I had that much money, I wouldn’t work at all. I’d travel round the world.' },
            { speaker: 'Priya', text: 'You’d be bored after a month! If I were you, I’d start a company.' },
            { speaker: 'Ben', text: 'If I started a company, I’d have even less free time than now!' },
          ],
        },
        {
          id: 'eni9-1-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'if + past simple, would + verb',
          text: 'The second conditional is for situations that are imaginary, unlikely or contrary to the facts in the present or future. The if-clause uses the past simple, although the meaning is not past. The result uses would (or could, might). Never use “would” in the if-clause. With “be”, formal English uses “were” for all persons: “If I were you, …”.',
          table: {
            headers: ['if-clause (past simple)', 'result (would + verb)'],
            rows: [
              ['If I won the lottery,', 'I would buy a house.'],
              ['If I had more time,', 'I could learn the piano.'],
              ['If she lived closer,', 'we might see her more often.'],
              ['If I were you,', 'I’d start a company.'],
            ],
          },
        },
        {
          id: 'eni9-1-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: '“Wenn ich mehr Zeit hätte, würde ich reisen.”',
          options: [
            { id: 'o1', text: 'If I would have more time, I would travel.' },
            { id: 'o2', text: 'If I had more time, I would travel.' },
            { id: 'o3', text: 'If I have more time, I would travel.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'if + past simple (“had”), then would + verb. “would” never goes in the if-clause.',
        },
        {
          id: 'eni9-1-cloze',
          type: 'CLOZE',
          instruction: 'Complete the second conditional.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'If I ' },
            { kind: 'GAP', gapId: 'c1', solution: ['had'], hint: 'have', width: 6 },
            { kind: 'TEXT', text: ' a car, I ' },
            { kind: 'GAP', gapId: 'c2', solution: ['would drive', '’d drive', "'d drive"], hint: 'drive', width: 12 },
            { kind: 'TEXT', text: ' to work. If I ' },
            { kind: 'GAP', gapId: 'c3', solution: ['were', 'was'], hint: 'be', width: 6 },
            { kind: 'TEXT', text: ' you, I ' },
            { kind: 'GAP', gapId: 'c4', solution: ['wouldn’t', "wouldn't", 'would not'], hint: 'not', width: 9 },
            { kind: 'TEXT', text: ' sign that contract.' },
          ],
        },
        {
          id: 'eni9-1-info-first',
          type: 'INFO',
          variant: 'TIP',
          title: 'First or second conditional?',
          text: 'The difference is how real you think the situation is. “If I get the job, I’ll move.” = I have applied; it’s possible. “If I got the job, I’d move.” = I don’t think it will happen, or I’m just imagining.',
        },
        {
          id: 'eni9-1-match',
          type: 'MATCHING',
          instruction: 'Match the sentence with its meaning.',
          left: [
            { id: 'l1', text: 'If it rains tomorrow, we’ll stay in.' },
            { id: 'l2', text: 'If I had wings, I’d fly to work.' },
            { id: 'l3', text: 'If I were you, I’d apologise.' },
          ],
          right: [
            { id: 'r1', text: 'a real possibility' },
            { id: 'r2', text: 'an impossible situation' },
            { id: 'r3', text: 'advice' },
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

  // ====================================================== SEITE 2
  // Seite 2 – dritter Bedingungssatz.
  {
    order: 2,
    title: 'If I had known …',
    subtitle: 'Irreales in der Vergangenheit',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'eni9-2-h1', type: 'HEADING', level: 1, text: 'If I had known …' },
        {
          id: 'eni9-2-text',
          type: 'TEXT',
          text: 'Sophie’s blog: Sliding doors\n\nFive years ago I almost didn’t go to a friend’s party in Cologne. I was tired and it was raining. If I had stayed at home, I wouldn’t have met Priya’s cousin, who told me about her job in London. If she hadn’t mentioned Greenleaf Travel, I would never have applied. And if I hadn’t moved to London, I wouldn’t have discovered how much I love this city. Sometimes I wonder how different my life would have been.',
        },
        {
          id: 'eni9-2-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'if + past perfect, would have + past participle',
          text: 'The third conditional imagines a different past – something that did not happen – and its imagined result. The if-clause uses the past perfect, the result “would have” + past participle (or could have, might have). It is often used for regrets and criticism. In speech, “would have” is contracted to “would’ve” and sounds like “wouldof” – but never write “would of”.',
          table: {
            headers: ['if-clause (past perfect)', 'result (would have + p.p.)'],
            rows: [
              ['If I had stayed at home,', 'I wouldn’t have met her.'],
              ['If we had left earlier,', 'we could have caught the train.'],
              ['If you had asked me,', 'I would have helped you.'],
            ],
          },
        },
        {
          id: 'eni9-2-cloze',
          type: 'CLOZE',
          instruction: 'Complete the third conditional.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'If Sophie ' },
            { kind: 'GAP', gapId: 't1', solution: ['had stayed', '’d stayed', "'d stayed"], hint: 'stay', width: 11 },
            { kind: 'TEXT', text: ' at home, she ' },
            { kind: 'GAP', gapId: 't2', solution: ['wouldn’t have met', "wouldn't have met", 'would not have met'], hint: 'not / meet', width: 18 },
            { kind: 'TEXT', text: ' Priya’s cousin. If she ' },
            { kind: 'GAP', gapId: 't3', solution: ['hadn’t applied', "hadn't applied", 'had not applied'], hint: 'not / apply', width: 15 },
            { kind: 'TEXT', text: ', she ' },
            { kind: 'GAP', gapId: 't4', solution: ['wouldn’t have moved', "wouldn't have moved", 'would not have moved'], hint: 'not / move', width: 19 },
            { kind: 'TEXT', text: ' to London.' },
          ],
        },
        {
          id: 'eni9-2-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: '“Wenn du angerufen hättest, hätte ich dich abgeholt.”',
          options: [
            { id: 'o1', text: 'If you would have called, I would have picked you up.' },
            { id: 'o2', text: 'If you had called, I would have picked you up.' },
            { id: 'o3', text: 'If you called, I had picked you up.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'Past perfect in the if-clause (“had called”), would have + participle in the result.',
        },
        {
          id: 'eni9-2-choice2',
          type: 'CHOICE',
          instruction: 'Choose the meaning.',
          question: '“If I had known about the strike, I would have taken the bus.”',
          options: [
            { id: 'o1', text: 'I knew about the strike and took the bus.' },
            { id: 'o2', text: 'I didn’t know about the strike and didn’t take the bus.' },
            { id: 'o3', text: 'I will take the bus if there is a strike.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'The third conditional describes the opposite of what really happened.',
        },
        {
          id: 'eni9-2-order',
          type: 'ORDERING',
          instruction: 'Make a correct sentence.',
          items: [
            { id: 'w1', text: 'If we' },
            { id: 'w2', text: 'had left' },
            { id: 'w3', text: 'earlier,' },
            { id: 'w4', text: 'we could have' },
            { id: 'w5', text: 'caught the train.' },
          ],
          solution: ['w1', 'w2', 'w3', 'w4', 'w5'],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – gemischte Bedingungssätze.
  {
    order: 3,
    title: 'If I had studied medicine, I would be …',
    subtitle: 'Gemischte Bedingungssätze',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'eni9-3-h1', type: 'HEADING', level: 1, text: 'If I had studied medicine, I would be …' },
        {
          id: 'eni9-3-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Mixing past and present',
          text: 'Sometimes the condition is in the past but the result is in the present, or the other way round. Then you mix the forms. Past condition → present result: if + past perfect, would + verb (“If I had studied medicine, I would be a doctor now.”). Present condition → past result: if + past simple, would have + p.p. (“If I weren’t so shy, I would have spoken to her.”).',
          table: {
            headers: ['condition', 'result', 'example'],
            rows: [
              ['past (had + p.p.)', 'present (would + verb)', 'If I had taken the job, I would live in Paris now.'],
              ['present (past simple)', 'past (would have + p.p.)', 'If I spoke French, I would have understood him.'],
            ],
          },
        },
        {
          id: 'eni9-3-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'You didn’t sleep last night. Now you are tired.',
          options: [
            { id: 'o1', text: 'If I had slept last night, I wouldn’t be so tired now.' },
            { id: 'o2', text: 'If I slept last night, I wouldn’t have been tired now.' },
            { id: 'o3', text: 'If I would sleep last night, I’m not tired now.' },
          ],
          multiple: false,
          solution: ['o1'],
          explanation: 'Past condition (had slept) → present result (wouldn’t be now).',
        },
        {
          id: 'eni9-3-cloze',
          type: 'CLOZE',
          instruction: 'Complete the mixed conditionals.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'If I ' },
            { kind: 'GAP', gapId: 'm1', solution: ['had taken'], hint: 'take', width: 10 },
            { kind: 'TEXT', text: ' that job in Paris, I ' },
            { kind: 'GAP', gapId: 'm2', solution: ['would live', '’d live', "'d live"], hint: 'live', width: 11 },
            { kind: 'TEXT', text: ' in France now. If Ben ' },
            { kind: 'GAP', gapId: 'm3', solution: ['were', 'was'], hint: 'be', width: 6 },
            { kind: 'TEXT', text: ' more organised, he ' },
            { kind: 'GAP', gapId: 'm4', solution: ['wouldn’t have missed', "wouldn't have missed", 'would not have missed'], hint: 'not / miss', width: 20 },
            { kind: 'TEXT', text: ' the deadline yesterday.' },
          ],
        },
        {
          id: 'eni9-3-match',
          type: 'MATCHING',
          instruction: 'Match the two halves.',
          left: [
            { id: 'l1', text: 'If I had saved more money,' },
            { id: 'l2', text: 'If she weren’t allergic to cats,' },
            { id: 'l3', text: 'If they had booked earlier,' },
          ],
          right: [
            { id: 'r1', text: 'I could afford a car now.' },
            { id: 'r2', text: 'she would have adopted the kitten.' },
            { id: 'r3', text: 'they would have got cheaper tickets.' },
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
  // Seite 4 – wish, if only.
  {
    order: 4,
    title: 'I wish I had …',
    subtitle: 'wish und if only',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'eni9-4-h1', type: 'HEADING', level: 1, text: 'I wish I had …' },
        {
          id: 'eni9-4-dlg',
          type: 'DIALOGUE',
          title: 'Monday morning',
          lines: [
            { speaker: 'Ben', text: 'I wish it weren’t Monday. I wish I could stay in bed.' },
            { speaker: 'Sophie', text: 'You look terrible. Did you go to Jake’s party?' },
            { speaker: 'Ben', text: 'Yes. I wish I hadn’t stayed so long. If only I’d gone home at midnight!' },
            { speaker: 'Sophie', text: 'And I wish you would stop complaining – we’ve got a meeting in five minutes.' },
          ],
        },
        {
          id: 'eni9-4-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'wish + past forms',
          text: '“wish” works like a conditional: it moves one step back in time. A wish about the present uses the past simple; a regret about the past uses the past perfect. “wish … would” expresses irritation about someone else’s behaviour. “If only …” means the same as “I wish”, but is stronger.',
          table: {
            headers: ['wish about', 'form', 'example'],
            rows: [
              ['the present', 'wish + past simple', 'I wish I had more time. (= I don’t)'],
              ['the past (regret)', 'wish + past perfect', 'I wish I hadn’t said that. (= I did)'],
              ['ability', 'wish + could', 'I wish I could speak Japanese.'],
              ['other people’s behaviour', 'wish + would', 'I wish you would listen.'],
            ],
          },
        },
        {
          id: 'eni9-4-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'You didn’t study for the exam, and you failed. What do you say?',
          options: [
            { id: 'o1', text: 'I wish I studied more.' },
            { id: 'o2', text: 'I wish I had studied more.' },
            { id: 'o3', text: 'I wish I would study more.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'A regret about the past needs the past perfect: “I wish I had studied”.',
        },
        {
          id: 'eni9-4-cloze',
          type: 'CLOZE',
          instruction: 'Complete the wishes.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'I live in a tiny flat. I wish I ' },
            { kind: 'GAP', gapId: 'w1', solution: ['had'], hint: 'have', width: 6 },
            { kind: 'TEXT', text: ' a garden.\nI can’t swim. I wish I ' },
            { kind: 'GAP', gapId: 'w2', solution: ['could'], width: 7 },
            { kind: 'TEXT', text: ' swim.\nI sold my old guitar. I wish I ' },
            { kind: 'GAP', gapId: 'w3', solution: ['hadn’t sold', "hadn't sold", 'had not sold'], hint: 'not / sell', width: 12 },
            { kind: 'TEXT', text: ' it.\nMy neighbour plays loud music. I wish he ' },
            { kind: 'GAP', gapId: 'w4', solution: ['would stop', '’d stop', "'d stop"], hint: 'stop', width: 11 },
            { kind: 'TEXT', text: '!' },
          ],
        },
        {
          id: 'eni9-4-info-german',
          type: 'INFO',
          variant: 'TIP',
          title: 'Ich wünschte … – I wish …',
          text: 'German “Ich wünschte, ich hätte …” works almost the same way. But “Ich wünsche dir …” (a good wish) is “I wish you …” + noun: “I wish you a happy birthday.” – and a wish for the future with a real chance is “I hope”: “I hope you get the job.”',
        },
        {
          id: 'eni9-4-choice2',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'Your friend has a job interview tomorrow.',
          options: [
            { id: 'o1', text: 'I wish you get the job.' },
            { id: 'o2', text: 'I hope you get the job.' },
            { id: 'o3', text: 'I wish you got the job.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'For a real possibility in the future, use “hope”. “wish” is for things that are unreal or unlikely.',
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – ein hypothetischer Aufsatz.
  {
    order: 5,
    title: 'Imagine a world without …',
    subtitle: 'Hypothesen aufstellen und diskutieren',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'eni9-5-h1', type: 'HEADING', level: 1, text: 'Imagine a world without …' },
        {
          id: 'eni9-5-text',
          type: 'TEXT',
          text: 'What if the internet had never been invented?\n\nIt is hard to imagine, but if the internet had never been invented, our everyday lives would look very different. We would still use paper maps, and we would have to phone a cinema to find out what time a film started. Many of today’s largest companies would not exist, and millions of people who now work from home would have to commute every day.\n\nSome things might actually be better. If we weren’t constantly checking our phones, we might sleep better and talk to each other more. On the other hand, scientists would not have been able to share data as quickly during the pandemic, and it would have taken much longer to develop vaccines.\n\nOverall, I suspect we would be calmer but also poorer, less informed and more isolated from the rest of the world.',
        },
        {
          id: 'eni9-5-choice',
          type: 'CHOICE',
          instruction: 'Mark all the points the writer mentions.',
          question: 'What would be different without the internet, according to the text?',
          options: [
            { id: 'r1', text: 'People would have to commute more.' },
            { id: 'r2', text: 'There would be no cinemas.' },
            { id: 'r3', text: 'Vaccines would have taken longer to develop.' },
            { id: 'r4', text: 'People would sleep less.' },
          ],
          multiple: true,
          solution: ['r1', 'r3'],
          explanation: 'Cinemas would still exist (you would phone them), and the writer thinks we might sleep better, not less.',
        },
        {
          id: 'eni9-5-info',
          type: 'INFO',
          variant: 'TIP',
          title: 'Writing hypothetically',
          text: 'A hypothetical essay keeps the reader in the imagined world. Once you have set up the situation with “if”, you can continue with “would” alone for many sentences. Use “might” or “could” for less certain results, and mix in third and mixed conditionals when you talk about how the past would have been different.',
        },
        {
          id: 'eni9-5-cloze',
          type: 'CLOZE',
          instruction: 'Complete with would, might, had or have.',
          wordBank: ['would', 'might', 'had', 'have'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'If cars ' },
            { kind: 'GAP', gapId: 'h1', solution: ['had'], width: 7 },
            { kind: 'TEXT', text: ' never been invented, cities ' },
            { kind: 'GAP', gapId: 'h2', solution: ['would'], width: 7 },
            { kind: 'TEXT', text: ' look very different today. The air ' },
            { kind: 'GAP', gapId: 'h3', solution: ['might', 'would'], width: 7 },
            { kind: 'TEXT', text: ' be cleaner, but many industries would never ' },
            { kind: 'GAP', gapId: 'h4', solution: ['have'], width: 7 },
            { kind: 'TEXT', text: ' developed.' },
          ],
        },
        {
          id: 'eni9-5-writing',
          type: 'WRITING',
          instruction: 'Write a hypothetical essay.',
          prompt:
            'Choose one: “What if you had been born 100 years earlier?”, “What would the world be like without money?” or “If you could change one decision in your life, what would it be?” Write 200–260 words using second, third and mixed conditionals, and at least one sentence with “wish”.',
          minWords: 180,
          maxWords: 300,
          aiFeedback: true,
          sampleAnswer:
            'If I had been born a hundred years earlier, in the 1920s, my life would have been completely different.\n\nFirst of all, I probably wouldn’t have gone to university. My great-grandparents were farmers, and if I had grown up on their farm, I would have had to start working at fourteen. As a woman, I would have had far fewer choices: I might have become a teacher or a nurse, but I would almost certainly not have become an engineer, which is my job today.\n\nDaily life would also have been much harder. There would have been no washing machine, no central heating and, of course, no internet. If I wanted to talk to a friend in another city, I would have to write a letter and wait a week for the answer. On the other hand, people knew their neighbours better, and I sometimes wish we still had that kind of community.\n\nThe biggest difference, however, would have been history itself. If I had been born in 1920, I would have lived through the Second World War as a young adult. I can’t imagine how frightening that must have been.\n\nOverall, I am grateful that I was born when I was. If I had lived a century ago, I would be a very different person today – assuming I were still here at all.',
        },
      ],
    },
  },
];
