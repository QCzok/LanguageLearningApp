import type { UnitSeed } from './chapter-beginner-1';

/**
 * Englisch, Advanced, Kapitel 6: „Media and discourse“ (C1, Kapitel 6)
 *
 * Fünf Seiten. Das letzte C1-Kapitel liest Texte gegen den Strich: nicht
 * mehr „Was steht da?“, sondern „Was soll ich denken, und woran merke ich
 * das?“. Framing, Präsuppositionen, rhetorische Mittel in Reden und
 * Trugschlüsse – jeweils mit dem sprachlichen Merkmal, an dem man sie
 * erkennt.
 *
 * Aufbau: Seite 1 Wortschatz und die Mittel, ohne Lüge zu täuschen, Seite 2
 * Framing, Seite 3 eine Rede analysieren, Seite 4 Trugschlüsse, Seite 5
 * einen Kommentar analysieren.
 *
 * Schlagzeilen, Reden und Kommentare sind erfunden; reale Medien und
 * Parteien werden nicht genannt. Sämtliche Texte sind eigenständig verfasst.
 */
const v = 1;

export const ENGLISH_ADVANCED_6_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  {
    order: 1,
    title: 'Misleading without lying',
    subtitle: 'Wortschatz der Diskursanalyse',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'ena6-1-h1', type: 'HEADING', level: 1, text: 'Misleading without lying' },
        {
          id: 'ena6-1-intro',
          type: 'TEXT',
          text: 'Every text informs us about something and, at the same time, does something to us: it reassures, alarms, puts us on one side. A headline can be accurate in every word and still lead to a false conclusion. This chapter is about that second layer – the one you miss if you only check whether the facts are true.',
        },
        {
          id: 'ena6-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Words: media and manipulation',
          items: [
            { term: 'framing', translations: { de: 'das Framing, die Rahmung', es: 'el encuadre' } },
            { term: 'headline', translations: { de: 'die Schlagzeile', es: 'el titular' } },
            { term: 'source', translations: { de: 'die Quelle', es: 'la fuente' } },
            { term: 'bias', translations: { de: 'die Voreingenommenheit', es: 'el sesgo' } },
            { term: 'euphemism', translations: { de: 'der Euphemismus', es: 'el eufemismo' } },
            { term: 'misinformation / disinformation', translations: { de: 'Falschinformation / gezielte Desinformation', es: 'la desinformación' } },
            { term: 'to imply', translations: { de: 'andeuten, implizieren', es: 'insinuar, implicar' } },
            { term: 'to take out of context', translations: { de: 'aus dem Zusammenhang reißen', es: 'sacar de contexto' } },
            { term: 'to spin', translations: { de: 'schönfärben, drehen', es: 'dar un sesgo favorable' } },
            { term: 'loaded (word, question)', translations: { de: 'suggestiv, wertend', es: 'tendencioso' } },
            { term: 'fallacy', translations: { de: 'der Trugschluss', es: 'la falacia' } },
          ],
        },
        {
          id: 'ena6-1-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Three ways to mislead without lying',
          text: 'Lies can be exposed, so interested communication prefers methods that are not strictly false. You can select: report only the favourable facts. You can frame: choose words that trigger a particular interpretation. And you can presuppose: take for granted, without stating it, something that has not been shown.',
          table: {
            headers: ['Method', 'Example', 'What it hides'],
            rows: [
              ['selection', 'Youth unemployment fell in March.', 'that it rose in the previous eleven months'],
              ['framing', 'a flood of applications', 'that the number is normal for the time of year'],
              ['presupposition', 'When will the minister stop lying?', 'that it has not been shown that he lied'],
            ],
          },
        },
        {
          id: 'ena6-1-info-mis',
          type: 'INFO',
          variant: 'TIP',
          title: 'misinformation or disinformation?',
          text: 'Misinformation is false information spread without the intention to deceive – someone shares a wrong statistic in good faith. Disinformation is false information spread deliberately to mislead. The difference is intention, which is why accusing someone of “disinformation” is a much stronger claim.',
        },
        {
          id: 'ena6-1-match',
          type: 'MATCHING',
          instruction: 'Match each case with the term that describes it.',
          left: [
            { id: 'a1', text: 'A newspaper quotes only half a sentence; the full sentence says the opposite.' },
            { id: 'a2', text: 'A company calls 200 redundancies “a workforce adjustment”.' },
            { id: 'a3', text: 'Someone shares a fake statistic, believing it to be true.' },
            { id: 'a4', text: 'A campaign knowingly spreads a false claim before an election.' },
          ],
          right: [
            { id: 'b1', text: 'taking out of context' },
            { id: 'b2', text: 'euphemism' },
            { id: 'b3', text: 'misinformation' },
            { id: 'b4', text: 'disinformation' },
          ],
          solution: [
            { leftId: 'a1', rightId: 'b1' },
            { leftId: 'a2', rightId: 'b2' },
            { leftId: 'a3', rightId: 'b3' },
            { leftId: 'a4', rightId: 'b4' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  {
    order: 2,
    title: 'Framing',
    subtitle: 'Wie Wörter einen Rahmen setzen',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'ena6-2-h1', type: 'HEADING', level: 1, text: 'Framing' },
        {
          id: 'ena6-2-intro',
          type: 'TEXT',
          text: '“Tax relief” and “tax cuts” can describe exactly the same policy. The first phrase presents taxes as an affliction from which people need relief; the second is more neutral. Whoever chooses one or the other is not lying, but they are choosing the frame in which readers will think about the issue – and frames work best when nobody notices them.',
        },
        {
          id: 'ena6-2-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Pairs that frame',
          text: 'Each pair can refer to the same reality. Neither option is entirely neutral. The attentive reader does not look for the “objective” word but notices which frame each word activates and what it leaves out.',
          table: {
            headers: ['Frame A', 'Frame B', 'What changes'],
            rows: [
              ['tax relief', 'tax cuts', 'burden vs policy'],
              ['estate tax', 'death tax', 'inheritance vs punishment for dying'],
              ['climate change', 'climate crisis', 'process vs emergency'],
              ['illegal immigrants', 'undocumented migrants', 'crime vs administrative status'],
              ['job creators', 'business owners', 'benefactors vs a neutral group'],
            ],
          },
        },
        {
          id: 'ena6-2-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct answer.',
          question: 'A headline reads: “Tourists swamp historic city centre.” What effect does the verb “swamp” have?',
          options: [
            { id: 'c1', text: 'None – it simply says there are many tourists.' },
            { id: 'c2', text: 'It presents tourists as an uncontrollable natural force that overwhelms the city, favouring restrictions.' },
            { id: 'c3', text: 'It suggests tourists are welcome and bring wealth.' },
            { id: 'c4', text: 'It indicates that the city centre is near water.' },
          ],
          multiple: false,
          solution: ['c2'],
          explanation:
            '“Swamp” belongs to the frame of floods and natural disasters: something that arrives uncontrollably and must be held back. “The city centre welcomes record visitor numbers” would frame the same data differently.',
        },
        {
          id: 'ena6-2-info-agent',
          type: 'INFO',
          variant: 'TIP',
          title: 'Grammatical framing: who is the subject?',
          text: 'Framing is not only about words but also about syntax. “Police fired on protesters” and “Several protesters were injured in clashes” may describe the same events; in the second, the agent has disappeared and the injuries seem to have happened by themselves. The passive, nominalisation and vague verbs like “clashes” are the usual tools.',
          table: {
            headers: ['Structure', 'Example', 'Agent'],
            rows: [
              ['active', 'The company laid off 200 workers.', 'visible'],
              ['passive without agent', '200 workers were laid off.', 'hidden'],
              ['nominalisation', 'The layoffs affected 200 workers.', 'gone'],
              ['ergative verb', '200 jobs disappeared.', 'gone – jobs seem to vanish by themselves'],
            ],
          },
        },
        {
          id: 'ena6-2-ordering',
          type: 'ORDERING',
          instruction: 'Order the versions from the one that shows responsibility most clearly to the one that hides it most.',
          items: [
            { id: 'o1', text: 'The council closed the local library.' },
            { id: 'o2', text: 'The local library was closed by the council.' },
            { id: 'o3', text: 'The local library was closed.' },
            { id: 'o4', text: 'The library’s closure affected hundreds of readers.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4'],
        },
        {
          id: 'ena6-2-match',
          type: 'MATCHING',
          instruction: 'Match each headline with the frame it activates.',
          left: [
            { id: 't1', text: 'Government bails out banks with taxpayers’ money' },
            { id: 't2', text: 'Government injects liquidity to stabilise financial system' },
            { id: 't3', text: 'Unions bring country to a standstill' },
            { id: 't4', text: 'Thousands of workers join strike' },
          ],
          right: [
            { id: 'u1', text: 'privileges for a few at everyone’s expense' },
            { id: 'u2', text: 'a technical, preventive measure' },
            { id: 'u3', text: 'damage caused by an organisation' },
            { id: 'u4', text: 'mass support for a demand' },
          ],
          solution: [
            { leftId: 't1', rightId: 'u1' },
            { leftId: 't2', rightId: 'u2' },
            { leftId: 't3', rightId: 'u3' },
            { leftId: 't4', rightId: 'u4' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  {
    order: 3,
    title: 'Analysing a speech',
    subtitle: 'Rhetorische Mittel in Reden',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'ena6-3-h1', type: 'HEADING', level: 1, text: 'Analysing a speech' },
        {
          id: 'ena6-3-text',
          type: 'TEXT',
          text: '“Friends, they told us it couldn’t be done. They told us it was too expensive, too ambitious, too late. And they were wrong. Because this town has never waited for permission to build its future. We built the bridge. We built the school. We built the hospital. And now – are we really going to let a few spreadsheets stop us from building the railway? I don’t think so. They see a cost; we see an investment. They see a problem; we see a promise.” (Extract from a fictional campaign speech)',
        },
        {
          id: 'ena6-3-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Rhetorical devices in speeches',
          text: 'Most devices rely on repetition or contrast, because the ear detects both instantly. In an analysis, always name the device, quote it and explain its effect on the audience.',
          table: {
            headers: ['Device', 'Example from the speech', 'Effect'],
            rows: [
              ['tricolon', 'too expensive, too ambitious, too late', 'rhythm, sense of completeness'],
              ['anaphora', 'We built the bridge. We built the school. We built …', 'emphasis, momentum'],
              ['antithesis', 'They see a cost; we see an investment.', 'sharp contrast, us vs them'],
              ['rhetorical question', 'Are we really going to let …?', 'assumes agreement'],
              ['inclusive “we”', 'we built …', 'identification with the audience'],
            ],
          },
        },
        {
          id: 'ena6-3-match',
          type: 'MATCHING',
          instruction: 'Match each extract with the main device.',
          left: [
            { id: 'l1', text: 'too expensive, too ambitious, too late' },
            { id: 'l2', text: 'They see a problem; we see a promise.' },
            { id: 'l3', text: 'Are we really going to let a few spreadsheets stop us?' },
            { id: 'l4', text: 'a few spreadsheets' },
          ],
          right: [
            { id: 'r1', text: 'tricolon' },
            { id: 'r2', text: 'antithesis' },
            { id: 'r3', text: 'rhetorical question' },
            { id: 'r4', text: 'belittling metaphor for financial objections' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'ena6-3-choice',
          type: 'CHOICE',
          instruction: 'Choose the best analysis.',
          question: 'What is the effect of calling the critics’ objections “a few spreadsheets”?',
          options: [
            { id: 'q1', text: 'It accurately describes the financial analysis.' },
            { id: 'q2', text: 'It reduces serious cost concerns to something trivial and bureaucratic, so the speaker does not have to answer them.' },
            { id: 'q3', text: 'It shows that the speaker has studied the figures carefully.' },
            { id: 'q4', text: 'It invites the audience to look at the spreadsheets.' },
          ],
          multiple: false,
          solution: ['q2'],
          explanation:
            'The phrase shrinks the opposing argument instead of refuting it. It is effective rhetoric – but the audience learns nothing about whether the railway is affordable.',
        },
        {
          id: 'ena6-3-cloze',
          type: 'CLOZE',
          instruction: 'Complete the analysis.',
          wordBank: ['anaphora', 'tricolon', 'antithesis', 'inclusive', 'effect'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'The speaker opens with a ' },
            { kind: 'GAP', gapId: 'k1', solution: ['tricolon'], width: 9 },
            { kind: 'TEXT', text: ' of objections. The ' },
            { kind: 'GAP', gapId: 'k2', solution: ['anaphora'], width: 9 },
            { kind: 'TEXT', text: ' “We built …” creates momentum, while the ' },
            { kind: 'GAP', gapId: 'k3', solution: ['inclusive'], width: 10 },
            { kind: 'TEXT', text: ' “we” makes the audience part of the achievement. The closing ' },
            { kind: 'GAP', gapId: 'k4', solution: ['antithesis'], width: 11 },
            { kind: 'TEXT', text: ' divides the world into “they” and “we”. The overall ' },
            { kind: 'GAP', gapId: 'k5', solution: ['effect'], width: 7 },
            { kind: 'TEXT', text: ' is to mobilise rather than to inform.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  {
    order: 4,
    title: 'Fallacies',
    subtitle: 'Trugschlüsse erkennen und benennen',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'ena6-4-h1', type: 'HEADING', level: 1, text: 'Fallacies' },
        {
          id: 'ena6-4-intro',
          type: 'TEXT',
          text: 'A fallacy is an argument that looks valid but isn’t. Its power lies in the fact that it works on anyone who doesn’t stop to think. Being able to name it helps in two ways: you are not carried along by it, and in a debate you can take it apart in one sentence instead of arguing about its conclusion.',
        },
        {
          id: 'ena6-4-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Six common fallacies',
          text: 'The list is not complete, but it covers most of what you hear on talk shows and social media. Notice the typical wording of each.',
          table: {
            headers: ['Fallacy', 'Mechanism', 'Typical wording'],
            rows: [
              ['ad hominem', 'attacking the person, not the argument', 'Coming from someone like you …'],
              ['straw man', 'distorting the other position', 'So you’re saying that …'],
              ['false dilemma', 'allowing only two options', 'Either … or …'],
              ['slippery slope', 'unproven chain of consequences', 'Today …, tomorrow …'],
              ['hasty generalisation', 'concluding from too few cases', 'I know someone who …, so all …'],
              ['whataboutism', 'deflecting with another issue', 'But what about …?'],
            ],
          },
        },
        {
          id: 'ena6-4-match',
          type: 'MATCHING',
          instruction: 'Match each statement with the fallacy.',
          left: [
            { id: 'f1', text: '“If we allow bars to stay open till midnight, soon they’ll be open all night and nobody will sleep.”' },
            { id: 'f2', text: '“Either we raise taxes or we close the hospitals.”' },
            { id: 'f3', text: '“My neighbour gets benefits and doesn’t look for work – the unemployed just don’t want to work.”' },
            { id: 'f4', text: '“You talk about the environment? With the car you drive?”' },
            { id: 'f5', text: '“So you want to open the borders to everyone without any control.”' },
          ],
          right: [
            { id: 'g1', text: 'slippery slope' },
            { id: 'g2', text: 'false dilemma' },
            { id: 'g3', text: 'hasty generalisation' },
            { id: 'g4', text: 'ad hominem' },
            { id: 'g5', text: 'straw man' },
          ],
          solution: [
            { leftId: 'f1', rightId: 'g1' },
            { leftId: 'f2', rightId: 'g2' },
            { leftId: 'f3', rightId: 'g3' },
            { leftId: 'f4', rightId: 'g4' },
            { leftId: 'f5', rightId: 'g5' },
          ],
        },
        {
          id: 'ena6-4-info-respond',
          type: 'INFO',
          variant: 'TIP',
          title: 'Responding to a fallacy',
          text: 'Naming a fallacy with its Latin label rarely convinces an audience. It is more effective to expose the mechanism in plain words: “That’s not what I said – what I said was …” (straw man), “There are more options than those two” (false dilemma), “Let’s talk about the argument, not my car” (ad hominem).',
        },
        {
          id: 'ena6-4-choice',
          type: 'CHOICE',
          instruction: 'Choose the most effective reply.',
          question: 'In a debate, someone says: “Either we build the motorway or this region dies.” Which reply best exposes the fallacy?',
          options: [
            { id: 'h1', text: 'That is a false dilemma, a well-known informal fallacy.' },
            { id: 'h2', text: 'There are more than two options: improving the railway or the existing road would cost less and help just as much.' },
            { id: 'h3', text: 'You always exaggerate.' },
            { id: 'h4', text: 'Then let it die, if that’s what people want.' },
          ],
          multiple: false,
          solution: ['h2'],
          explanation:
            'The second reply shows that other options exist, which is enough to dissolve the dilemma. The first is correct but unpersuasive; the third answers with another fallacy.',
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  {
    order: 5,
    title: 'Reading against the text',
    subtitle: 'Einen Kommentar analysieren',
    estimatedMinutes: 34,
    content: {
      version: v,
      blocks: [
        { id: 'ena6-5-h1', type: 'HEADING', level: 1, text: 'Reading against the text' },
        {
          id: 'ena6-5-text',
          type: 'TEXT',
          text: '“Once again, the council is punishing us. The new bin tax – cynically rebranded as a ‘green levy’ – is yet another raid on hard-working families who are already struggling to survive. How long will they keep dipping into our pockets? My brother-in-law, who runs a small business, already pays more in tax than in rent. If we accept this levy, tomorrow they will charge us for breathing. Either the mayor scraps it, or this town will empty.”',
        },
        {
          id: 'ena6-5-choice',
          type: 'CHOICE',
          instruction: 'Mark all the techniques you can find in the text.',
          question: 'Which techniques from this chapter appear in the comment?',
          options: [
            { id: 'x1', text: 'Presupposition with “once again” and “keep dipping”.' },
            { id: 'x2', text: 'Hasty generalisation from the brother-in-law.' },
            { id: 'x3', text: 'Slippery slope: “tomorrow they will charge us for breathing”.' },
            { id: 'x4', text: 'False dilemma in the final sentence.' },
            { id: 'x5', text: 'Precise official data about the levy.' },
          ],
          multiple: true,
          solution: ['x1', 'x2', 'x3', 'x4'],
          explanation:
            'The text does not give a single fact about the levy – neither its amount nor what it pays for. Its effect rests on framing (“punishing”, “raid”, “struggling to survive”), presuppositions and three fallacies in a row.',
        },
        {
          id: 'ena6-5-info',
          type: 'INFO',
          variant: 'TIP',
          title: 'How to analyse a persuasive text',
          text: 'A structured analysis moves from what the text wants to how it achieves it. First the claim: what does it want the reader to think or do? Then the evidence: what facts does it give, and from which sources? Then the framing: which words and metaphors dominate? Finally the reasoning: what does it take for granted, and which fallacies does it use? The conclusion judges whether the text informs or merely mobilises.',
          table: {
            headers: ['Step', 'Question'],
            rows: [
              ['claim', 'What does it want the reader to think or do?'],
              ['evidence', 'What facts does it give? From where?'],
              ['framing', 'Which frames do its words activate?'],
              ['reasoning', 'What does it presuppose? Which fallacies?'],
              ['evaluation', 'Does it inform or only mobilise?'],
            ],
          },
        },
        {
          id: 'ena6-5-cloze',
          type: 'CLOZE',
          instruction: 'Complete the summary of the chapter.',
          wordBank: ['framing', 'agent', 'presupposes', 'fallacy', 'dilemma', 'sources'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Choosing “tax relief” or “tax cuts” is a question of ' },
            { kind: 'GAP', gapId: 'z1', solution: ['framing'], width: 8 },
            { kind: 'TEXT', text: '. The passive can hide the ' },
            { kind: 'GAP', gapId: 'z2', solution: ['agent'], width: 6 },
            { kind: 'TEXT', text: '. “When will he stop lying?” ' },
            { kind: 'GAP', gapId: 'z3', solution: ['presupposes'], width: 12 },
            { kind: 'TEXT', text: ' that he lies. A ' },
            { kind: 'GAP', gapId: 'z4', solution: ['fallacy'], width: 8 },
            { kind: 'TEXT', text: ' looks valid but isn’t; offering only two options is a false ' },
            { kind: 'GAP', gapId: 'z5', solution: ['dilemma'], width: 8 },
            { kind: 'TEXT', text: '. And before believing a text, ask about its ' },
            { kind: 'GAP', gapId: 'z6', solution: ['sources'], width: 8 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'ena6-5-writing',
          type: 'WRITING',
          instruction: 'Write an analysis.',
          prompt:
            'Analyse the comment about the “green levy” on this page in 180–260 words. Follow the steps in the box: claim, evidence, framing, reasoning and evaluation. Identify at least two framing choices and two fallacies, quote the exact words and explain their effect. End by stating what information a reader would need to form their own opinion.',
          minWords: 180,
          maxWords: 270,
          aiFeedback: true,
          sampleAnswer:
            'The comment makes a clear claim: the new “green levy” is unfair and the mayor should scrap it.\n\nWhat is striking, first of all, is the absence of evidence. The text does not say how much the levy costs, who has to pay it or what the money will be used for. The only “proof” is a single case – the writer’s brother-in-law – from which the situation of all families is inferred. This is a hasty generalisation.\n\nThe persuasive effect relies instead on framing. The council does not charge a fee; it is “punishing” residents. The levy is not a payment but a “raid”, and families are not facing costs but “struggling to survive”. The vocabulary comes from the frame of attack and crime. Even the official name is dismissed in advance as “cynically rebranded”.\n\nPresuppositions reinforce this frame. “Once again” and “keep dipping into our pockets” take it for granted that the council has been exploiting residents for some time, without showing it. The rhetorical question “How long will they …?” makes any answer that does not accept this premise impossible.\n\nThe reasoning ends with two fallacies. “Tomorrow they will charge us for breathing” is a slippery slope, and the final sentence – either the levy goes or the town empties – is a false dilemma that ignores obvious middle ground, such as reduced rates for low-income households.\n\nOverall, the text mobilises rather than informs. To form their own view, readers would need to know the amount of the levy, how it compares with other towns, whether there are exemptions and what services it will fund.',
        },
      ],
    },
  },
];
