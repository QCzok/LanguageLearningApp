import type { UnitSeed } from './chapter-beginner-1';

/**
 * Englisch, Intermediate, Kapitel 7: „Society and politics“ (B2, Kapitel 1)
 *
 * Der Einstieg in die B2-Hälfte. Bis hierher ging es darum, eine Meinung zu
 * haben; ab hier darum, sie zu vertreten. Seite 1 bringt vorsichtiges
 * Formulieren (hedging) – das Merkmal, an dem man englische Argumentation
 * am schnellsten erkennt. Seite 2 die Diskursmarker, Seite 3 das
 * Zugeständnis, Seite 4 eine Podiumsdebatte samt Spaltsätzen zur
 * Hervorhebung, Seite 5 den Argumentationsaufsatz.
 *
 * Wie im spanischen Band sind die Beispiele parteipolitisch unbestimmt:
 * Geübt wird die Form der Argumentation, nicht eine Position.
 *
 * Einsprachig englisch; Vokabeln mit `de` und `es`.
 */
const v = 1;

export const ENGLISH_INTERMEDIATE_7_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Wortschatz und hedging.
  {
    order: 1,
    title: 'It could be argued that …',
    subtitle: 'Vorsichtig argumentieren',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'eni7-1-h1', type: 'HEADING', level: 1, text: 'It could be argued that …' },
        {
          id: 'eni7-1-intro',
          type: 'TEXT',
          text: 'In English public debate, strong claims often sound less convincing, not more. A speaker who says “This is obviously the only solution” invites the audience to look for a second one. Experienced speakers therefore “hedge”: they show that they have considered other views, and they make their claims only as strong as the evidence allows. This is not weakness – it is what makes the rest of the argument credible.',
        },
        {
          id: 'eni7-1-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Hedging: making claims carefully',
          text: 'Hedging uses modal verbs (may, might, could), tentative verbs (seem, appear, tend to), impersonal structures (It could be argued that …) and softening adverbs (arguably, largely, to some extent). Compare the two columns: the claims on the right are harder to attack.',
          table: {
            headers: ['direct', 'hedged'],
            rows: [
              ['This law will reduce crime.', 'This law may well reduce crime.'],
              ['Young people don’t vote.', 'Young people tend to vote less often.'],
              ['The policy has failed.', 'It could be argued that the policy has largely failed.'],
              ['Everyone agrees.', 'There seems to be broad agreement.'],
            ],
          },
        },
        {
          id: 'eni7-1-choice',
          type: 'CHOICE',
          instruction: 'Choose the most carefully hedged version.',
          question: 'Original: “Social media destroys democracy.”',
          options: [
            { id: 'o1', text: 'Social media totally destroys democracy.' },
            { id: 'o2', text: 'Social media may, to some extent, weaken democratic debate.' },
            { id: 'o3', text: 'Social media is democracy.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: '“may” and “to some extent” limit the claim, and “weaken debate” is more precise than “destroy democracy”.',
        },
        {
          id: 'eni7-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Words: society and politics',
          items: [
            { term: 'policy', translations: { de: 'die politische Maßnahme, die Politik (inhaltlich)', es: 'la política, la medida' } },
            { term: 'politics', translations: { de: 'die Politik (als Bereich)', es: 'la política' } },
            { term: 'government', translations: { de: 'die Regierung', es: 'el gobierno' } },
            { term: 'election', translations: { de: 'die Wahl', es: 'las elecciones' } },
            { term: 'to vote', translations: { de: 'wählen, abstimmen', es: 'votar' } },
            { term: 'citizen', translations: { de: 'der Bürger, die Bürgerin', es: 'el/la ciudadano/a' } },
            { term: 'inequality', translations: { de: 'die Ungleichheit', es: 'la desigualdad' } },
            { term: 'to tackle (a problem)', translations: { de: '(ein Problem) angehen', es: 'abordar (un problema)' } },
            { term: 'controversial', translations: { de: 'umstritten', es: 'polémico' } },
            { term: 'arguably', translations: { de: 'wohl, man könnte sagen', es: 'posiblemente, podría decirse' } },
          ],
        },
        {
          id: 'eni7-1-info-policy',
          type: 'INFO',
          variant: 'TIP',
          title: 'policy, politics, political',
          text: 'German “Politik” has two English translations. “politics” is the field or activity (“She went into politics.”). “a policy” is a concrete plan or rule (“the government’s housing policy”). A company can have a policy too: “our returns policy”.',
        },
        {
          id: 'eni7-1-cloze',
          type: 'CLOZE',
          instruction: 'Complete with politics, policy or political.',
          wordBank: ['politics', 'policy', 'political'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'My grandfather was never interested in ' },
            { kind: 'GAP', gapId: 'p1', solution: ['politics'], width: 10 },
            { kind: 'TEXT', text: '. The new housing ' },
            { kind: 'GAP', gapId: 'p2', solution: ['policy'], width: 10 },
            { kind: 'TEXT', text: ' is very controversial. Every ' },
            { kind: 'GAP', gapId: 'p3', solution: ['political'], width: 10 },
            { kind: 'TEXT', text: ' party has a different view on it.' },
          ],
        },
        {
          id: 'eni7-1-match',
          type: 'MATCHING',
          instruction: 'Match the hedging device with its example.',
          left: [
            { id: 'l1', text: 'modal verb' },
            { id: 'l2', text: 'tentative verb' },
            { id: 'l3', text: 'impersonal structure' },
            { id: 'l4', text: 'softening adverb' },
          ],
          right: [
            { id: 'r1', text: 'Taxes might rise.' },
            { id: 'r2', text: 'Prices tend to go up in winter.' },
            { id: 'r3', text: 'It has been suggested that …' },
            { id: 'r4', text: 'This is arguably the main problem.' },
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

  // ====================================================== SEITE 2
  // Seite 2 – Diskursmarker.
  {
    order: 2,
    title: 'Furthermore, nevertheless',
    subtitle: 'Diskursmarker, die ein Argument tragen',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'eni7-2-h1', type: 'HEADING', level: 1, text: 'Furthermore, nevertheless' },
        {
          id: 'eni7-2-text',
          type: 'TEXT',
          text: 'Should voting be compulsory?\n\nIn Australia, citizens who do not vote pay a small fine. As a result, turnout regularly exceeds 90%. Supporters argue that a government elected by almost everyone has a stronger mandate. Furthermore, parties can no longer win simply by mobilising their most loyal voters.\n\nNevertheless, compulsory voting raises serious questions. Some people argue that the freedom to vote should include the freedom not to. Moreover, voters who are forced to take part may choose at random. In addition, some critics argue that a low turnout sends a message that politicians should hear.\n\nConsequently, the debate is less about numbers than about what democracy is for.',
        },
        {
          id: 'eni7-2-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Formal linking words',
          text: 'At B2, you replace simple linkers (and, but, so) with more precise ones, especially in writing. Most of them start a sentence and are followed by a comma. Be careful with “on the contrary”: it rejects the previous statement completely (“That’s not true – on the contrary, …”). For a simple contrast between two facts, use “on the other hand”.',
          table: {
            headers: ['function', 'simple', 'formal'],
            rows: [
              ['adding', 'and, also', 'Furthermore, Moreover, In addition'],
              ['contrast', 'but', 'However, Nevertheless, On the other hand'],
              ['result', 'so', 'As a result, Consequently, Therefore'],
              ['correcting', 'no, …', 'On the contrary, …'],
              ['example', 'like', 'For instance, such as'],
            ],
          },
        },
        {
          id: 'eni7-2-cloze',
          type: 'CLOZE',
          instruction: 'Complete with the linking words.',
          wordBank: ['As a result', 'Furthermore', 'Nevertheless', 'Consequently', 'On the other hand'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Voting is compulsory in Australia. ' },
            { kind: 'GAP', gapId: 'd1', solution: ['As a result'], width: 18 },
            { kind: 'TEXT', text: ', turnout is very high. ' },
            { kind: 'GAP', gapId: 'd2', solution: ['Furthermore'], width: 18 },
            { kind: 'TEXT', text: ', governments have a stronger mandate. ' },
            { kind: 'GAP', gapId: 'd3', solution: ['Nevertheless'], width: 18 },
            { kind: 'TEXT', text: ', compulsory voting raises serious questions about freedom.' },
          ],
        },
        {
          id: 'eni7-2-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct linker.',
          question: '“Is the policy too expensive?” – “Not at all. ___, it will save money in the long term.”',
          options: [
            { id: 'o1', text: 'On the other hand' },
            { id: 'o2', text: 'On the contrary' },
            { id: 'o3', text: 'Furthermore' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'The speaker rejects the idea completely and says the opposite is true: “On the contrary”.',
        },
        {
          id: 'eni7-2-match',
          type: 'MATCHING',
          instruction: 'Match the linker with its function.',
          left: [
            { id: 'l1', text: 'Moreover' },
            { id: 'l2', text: 'Consequently' },
            { id: 'l3', text: 'Nevertheless' },
            { id: 'l4', text: 'For instance' },
          ],
          right: [
            { id: 'r1', text: 'adding a point' },
            { id: 'r2', text: 'showing a result' },
            { id: 'r3', text: 'introducing a contrast' },
            { id: 'r4', text: 'giving an example' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'eni7-2-choice2',
          type: 'CHOICE',
          instruction: 'Answer the question about the text.',
          question: 'According to the text, what is the debate really about?',
          options: [
            { id: 'o1', text: 'the size of the fine' },
            { id: 'o2', text: 'what democracy is for' },
            { id: 'o3', text: 'the Australian economy' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'The last sentence says the debate is “less about numbers than about what democracy is for”.',
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – Zugeständnis.
  {
    order: 3,
    title: 'Even though, while, admittedly',
    subtitle: 'Zugestehen und widersprechen',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'eni7-3-h1', type: 'HEADING', level: 1, text: 'Even though, while, admittedly' },
        {
          id: 'eni7-3-intro',
          type: 'TEXT',
          text: 'A strong argument admits what is true on the other side – and then explains why it is still not enough. This move is called a concession. It shows fairness, and it takes away the opponent’s best argument before they can use it.',
        },
        {
          id: 'eni7-3-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Structures for concession',
          text: '“although” and “even though” (stronger) are followed by a clause. “despite” and “in spite of” are followed by a noun, a pronoun or -ing – or by “the fact that” + clause. “While” at the start of a sentence can also mean “although”. “Admittedly, …” and “It is true that …, but …” concede a point in a separate sentence.',
          table: {
            headers: ['structure', 'example'],
            rows: [
              ['even though + clause', 'Even though the scheme is expensive, it works.'],
              ['despite + noun / -ing', 'Despite its cost, the scheme works.'],
              ['despite the fact that + clause', 'Despite the fact that it is expensive, …'],
              ['while + clause', 'While I accept that it is expensive, …'],
              ['Admittedly, …', 'Admittedly, it is expensive. However, …'],
            ],
          },
        },
        {
          id: 'eni7-3-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'Which sentence is correct?',
          options: [
            { id: 'o1', text: 'Despite it rained, the demonstration went ahead.' },
            { id: 'o2', text: 'Despite the rain, the demonstration went ahead.' },
            { id: 'o3', text: 'Even though the rain, the demonstration went ahead.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: '“despite” + noun (“the rain”). With a clause you need “although / even though it rained” or “despite the fact that it rained”.',
        },
        {
          id: 'eni7-3-cloze',
          type: 'CLOZE',
          instruction: 'Complete with even though, despite, while or admittedly.',
          wordBank: ['Even though', 'Despite', 'While', 'Admittedly'],
          caseSensitive: false,
          segments: [
            { kind: 'GAP', gapId: 'c1', solution: ['Despite'], width: 12 },
            { kind: 'TEXT', text: ' strong opposition, the law was passed. ' },
            { kind: 'GAP', gapId: 'c2', solution: ['Even though', 'While'], width: 12 },
            { kind: 'TEXT', text: ' turnout was low, the result was clear. ' },
            { kind: 'GAP', gapId: 'c3', solution: ['Admittedly'], width: 12 },
            { kind: 'TEXT', text: ', the plan has some weaknesses. However, it is the best option we have.' },
          ],
        },
        {
          id: 'eni7-3-order',
          type: 'ORDERING',
          instruction: 'Put the parts of a concession argument in order.',
          items: [
            { id: 'a1', text: 'It is true that a four-day week could reduce output.' },
            { id: 'a2', text: 'However, studies suggest that rested employees work more efficiently.' },
            { id: 'a3', text: 'Therefore, the overall effect on productivity may well be positive.' },
          ],
          solution: ['a1', 'a2', 'a3'],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – Podiumsdebatte und Spaltsätze.
  {
    order: 4,
    title: 'What we need is …',
    subtitle: 'In der Debatte: das Wort ergreifen, hervorheben',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'eni7-4-h1', type: 'HEADING', level: 1, text: 'What we need is …' },
        {
          id: 'eni7-4-dlg',
          type: 'DIALOGUE',
          title: 'Panel debate: “Should the voting age be lowered to 16?”',
          lines: [
            { speaker: 'Chair', text: 'Let’s start with you, Ms Adeyemi. Should sixteen-year-olds be allowed to vote?' },
            { speaker: 'Ms Adeyemi', text: 'Absolutely. What matters is not age but interest – and many teenagers are more informed than adults.' },
            { speaker: 'Mr Grant', text: 'If I could just come in here – with respect, it’s not interest that decides. It’s experience.' },
            { speaker: 'Ms Adeyemi', text: 'Sorry, could I finish my point? Sixteen-year-olds can work and pay taxes. What I find difficult to accept is that they have no say in how those taxes are spent.' },
            { speaker: 'Mr Grant', text: 'That’s a fair point. But what worries me is that schools could become political battlegrounds.' },
            { speaker: 'Chair', text: 'Let’s take a question from the audience.' },
          ],
        },
        {
          id: 'eni7-4-info-turn',
          type: 'INFO',
          variant: 'TIP',
          title: 'Managing a discussion',
          text: 'In a lively debate, you need phrases to get the floor, keep it and give credit. Interrupting is acceptable in English if you do it politely and briefly.',
          table: {
            headers: ['purpose', 'phrase'],
            rows: [
              ['interrupt', 'If I could just come in here, … / Sorry to interrupt, but …'],
              ['keep the floor', 'Could I just finish my point? / Let me finish, please.'],
              ['give credit', 'That’s a fair point. / I take your point, but …'],
              ['return to topic', 'Coming back to what I said earlier, …'],
            ],
          },
        },
        {
          id: 'eni7-4-info-cleft',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Cleft sentences for emphasis',
          text: 'To put a key idea in focus, English often splits a sentence in two. “What …” clauses: “We need more teachers.” → “What we need is more teachers.” “It is / was …” clauses: “Experience decides.” → “It’s experience that decides.” German often uses word order or stress for the same effect.',
          table: {
            headers: ['normal', 'cleft'],
            rows: [
              ['We need better schools.', 'What we need is better schools.'],
              ['Their age worries me.', 'What worries me is their age.'],
              ['The cost is the problem.', 'It’s the cost that is the problem.'],
            ],
          },
        },
        {
          id: 'eni7-4-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct cleft sentence.',
          question: '“Interest matters, not age.” Put the focus on “interest”.',
          options: [
            { id: 'o1', text: 'It’s interest that matters, not age.' },
            { id: 'o2', text: 'What matters it is interest.' },
            { id: 'o3', text: 'Interest is what it matters.' },
          ],
          multiple: false,
          solution: ['o1'],
          explanation: 'It + be + the focus + that + rest of the sentence: “It’s interest that matters.”',
        },
        {
          id: 'eni7-4-cloze',
          type: 'CLOZE',
          instruction: 'Complete the cleft sentences.',
          wordBank: ['What', 'is', 'It’s', 'that'],
          caseSensitive: false,
          segments: [
            { kind: 'GAP', gapId: 'c1', solution: ['What'], width: 6 },
            { kind: 'TEXT', text: ' worries me ' },
            { kind: 'GAP', gapId: 'c2', solution: ['is'], width: 4 },
            { kind: 'TEXT', text: ' the lack of trust. ' },
            { kind: 'GAP', gapId: 'c3', solution: ['It’s', "It's"], width: 5 },
            { kind: 'TEXT', text: ' young people ' },
            { kind: 'GAP', gapId: 'c4', solution: ['that', 'who'], width: 5 },
            { kind: 'TEXT', text: ' will live with the consequences.' },
          ],
        },
        {
          id: 'eni7-4-match',
          type: 'MATCHING',
          instruction: 'Match the situation with a phrase.',
          left: [
            { id: 'l1', text: 'Someone interrupts you.' },
            { id: 'l2', text: 'You want to add something now.' },
            { id: 'l3', text: 'Your opponent makes a good argument.' },
          ],
          right: [
            { id: 'r1', text: 'Sorry, could I just finish my point?' },
            { id: 'r2', text: 'If I could just come in here …' },
            { id: 'r3', text: 'That’s a fair point, but …' },
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
  // Seite 5 – der Argumentationsaufsatz.
  {
    order: 5,
    title: 'The argumentative essay',
    subtitle: 'Vom Gesprochenen zum Geschriebenen',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'eni7-5-h1', type: 'HEADING', level: 1, text: 'The argumentative essay' },
        {
          id: 'eni7-5-info',
          type: 'INFO',
          variant: 'TIP',
          title: 'From debate to essay',
          text: 'An argumentative essay does in writing what a good debater does aloud. The introduction presents the issue and why it matters. Each body paragraph has one main idea, stated in a topic sentence and supported with evidence or an example. One paragraph deals fairly with the other side (concession). The conclusion does not add new arguments; it weighs up the points and gives a clear, hedged position.',
        },
        {
          id: 'eni7-5-text',
          type: 'TEXT',
          text: 'Model paragraph:\n\nOne of the strongest arguments for lowering the voting age is the link between rights and responsibilities. In many countries, sixteen-year-olds can leave school, work full-time and pay income tax. It seems inconsistent, therefore, to deny them a voice in decisions about how that tax is used. Admittedly, some teenagers may not yet follow politics closely. However, the same is true of many adult voters, and no one suggests that they should lose the right to vote.',
        },
        {
          id: 'eni7-5-choice',
          type: 'CHOICE',
          instruction: 'Look at the model paragraph.',
          question: 'Which sentence is the topic sentence?',
          options: [
            { id: 'o1', text: 'One of the strongest arguments for lowering the voting age is the link between rights and responsibilities.' },
            { id: 'o2', text: 'Admittedly, some teenagers may not yet follow politics closely.' },
            { id: 'o3', text: 'However, the same is true of many adult voters.' },
          ],
          multiple: false,
          solution: ['o1'],
          explanation: 'The topic sentence opens the paragraph and states its one main idea.',
        },
        {
          id: 'eni7-5-choice2',
          type: 'CHOICE',
          instruction: 'Mark all the techniques the model paragraph uses.',
          question: 'What does the writer do?',
          options: [
            { id: 'r1', text: 'makes a concession' },
            { id: 'r2', text: 'uses a statistic from a study' },
            { id: 'r3', text: 'hedges a claim' },
            { id: 'r4', text: 'asks the reader a direct question' },
          ],
          multiple: true,
          solution: ['r1', 'r3'],
          explanation: '“Admittedly …” is a concession and “It seems inconsistent” is hedged. There are no statistics and no direct questions.',
        },
        {
          id: 'eni7-5-order',
          type: 'ORDERING',
          instruction: 'Put the parts of an argumentative essay in order.',
          items: [
            { id: 'p1', text: 'Introduction: the issue and why it matters' },
            { id: 'p2', text: 'Body paragraph 1: your strongest argument' },
            { id: 'p3', text: 'Body paragraph 2: a further argument' },
            { id: 'p4', text: 'Body paragraph 3: the other side (concession)' },
            { id: 'p5', text: 'Conclusion: weighing up and your position' },
          ],
          solution: ['p1', 'p2', 'p3', 'p4', 'p5'],
        },
        {
          id: 'eni7-5-writing',
          type: 'WRITING',
          instruction: 'Write an argumentative essay.',
          prompt:
            'Choose one topic: “Should voting be compulsory?” or “Should the voting age be lowered to 16?” Write 220–280 words. Include at least one concession, three formal linking words, one cleft sentence and some hedging.',
          minWords: 200,
          maxWords: 320,
          aiFeedback: true,
          sampleAnswer:
            'In several countries, including Australia and Belgium, citizens are legally required to vote. As turnout falls in many democracies, the question of whether other countries should follow their example is becoming increasingly relevant.\n\nThe main argument in favour of compulsory voting is legitimacy. A government elected by more than 90% of citizens can arguably claim a stronger mandate than one chosen by barely half. Furthermore, when everyone votes, parties cannot win simply by mobilising their most loyal supporters; they have to appeal to the whole population.\n\nAdmittedly, forcing people to vote raises questions about freedom. It could be argued that the right to vote should include the right to abstain. However, most systems with compulsory voting allow citizens to hand in a blank ballot, so nobody is actually forced to support a candidate. What they are required to do is simply to take part.\n\nA more serious concern is that uninformed voters may choose at random. Nevertheless, there is little evidence that this changes election results significantly, and compulsory voting may in fact encourage people to inform themselves.\n\nOn balance, it seems to me that the benefits outweigh the drawbacks. What democracies need is not only free elections but broad participation, and compulsory voting, combined with the option of a blank vote, appears to be an effective way of achieving it.',
        },
      ],
    },
  },
];
