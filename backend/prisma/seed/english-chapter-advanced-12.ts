import type { UnitSeed } from './chapter-beginner-1';

/**
 * Englisch, Advanced, Kapitel 12: „Explaining science“ (C2, Kapitel 6)
 *
 * Fünf Seiten. Das letzte Kapitel des Lehrwerks verlangt, was am Ende des
 * Lernwegs steht: die Fachsprache so gut zu beherrschen, dass man sie
 * weglassen kann. Allgemeinverständlich schreiben heißt nicht vereinfachen,
 * bis es falsch wird, sondern auswählen, was trägt.
 *
 * Aufbau: Seite 1 Fach- und Alltagssprache und das Publikum, Seite 2
 * Fachbegriffe einführen, Seite 3 Analogien und ihre Grenzen, Seite 4 Zahlen
 * und Unsicherheit, Seite 5 Komplexes zusammenfassen – und damit ein
 * Rückblick.
 *
 * Die Sachverhalte sind vereinfacht, aber korrekt wiedergegeben. Sämtliche
 * Texte sind eigenständig verfasst.
 */
const v = 1;

export const ENGLISH_ADVANCED_12_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  {
    order: 1,
    title: 'Who am I writing for?',
    subtitle: 'Fach- und Alltagssprache',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'ena12-1-h1', type: 'HEADING', level: 1, text: 'Who am I writing for?' },
        {
          id: 'ena12-1-intro',
          type: 'TEXT',
          text: '“The patient presents with marked hypertension and recurrent cephalalgia.” For a doctor, that is a precise sentence. For the patient, it is a riddle: he has very high blood pressure and keeps getting headaches. Technical language is not bad – it is exact and efficient among experts. The problem arises when it reaches people who don’t share it. The most common mistake of experts is not using difficult words but forgetting what the reader doesn’t know – the so-called “curse of knowledge”.',
        },
        {
          id: 'ena12-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Words: explaining science',
          items: [
            { term: 'jargon', translations: { de: 'der Fachjargon', es: 'la jerga' } },
            { term: 'layperson / lay audience', translations: { de: 'der Laie / das Laienpublikum', es: 'el lego / el público lego' } },
            { term: 'target audience', translations: { de: 'die Zielgruppe', es: 'el público objetivo' } },
            { term: 'to simplify', translations: { de: 'vereinfachen', es: 'simplificar' } },
            { term: 'to oversimplify', translations: { de: 'übermäßig vereinfachen', es: 'simplificar en exceso' } },
            { term: 'to distort', translations: { de: 'verzerren, verfälschen', es: 'distorsionar' } },
            { term: 'analogy', translations: { de: 'die Analogie', es: 'la analogía' } },
            { term: 'accessible', translations: { de: 'verständlich, zugänglich', es: 'accesible' } },
            { term: 'the curse of knowledge', translations: { de: 'der Fluch des Wissens', es: 'la maldición del conocimiento' } },
            { term: 'science communication', translations: { de: 'die Wissenschaftskommunikation', es: 'la divulgación científica' } },
          ],
        },
        {
          id: 'ena12-1-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Simplifying is not oversimplifying',
          text: 'To simplify is to leave out detail without making what remains untrue: “vaccines train the immune system to recognise a germ” leaves out almost everything but says nothing false. To oversimplify is to remove what made the claim true: “vaccines make you immune” ignores that protection is partial and can fade. The line is not the amount of detail but whether the reader ends up with a correct idea.',
          table: {
            headers: ['Statement', 'Judgement'],
            rows: [
              ['DNA contains the instructions for making proteins.', 'fair simplification'],
              ['DNA decides everything about who we are.', 'oversimplification: ignores environment'],
              ['A black hole pulls so hard that not even light escapes if it gets too close.', 'fair simplification'],
              ['A black hole sucks in everything around it.', 'oversimplification: distant objects can orbit it'],
            ],
          },
        },
        {
          id: 'ena12-1-match',
          type: 'MATCHING',
          instruction: 'Translate the jargon into everyday English.',
          left: [
            { id: 'l1', text: 'hypertension' },
            { id: 'l2', text: 'to be taken postprandially' },
            { id: 'l3', text: 'prophylactic' },
            { id: 'l4', text: 'contraindication' },
          ],
          right: [
            { id: 'r1', text: 'high blood pressure' },
            { id: 'r2', text: 'to be taken after meals' },
            { id: 'r3', text: 'preventive' },
            { id: 'r4', text: 'a reason not to use a treatment' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'ena12-1-choice',
          type: 'CHOICE',
          instruction: 'Choose the fair simplification.',
          question: 'Which sentence explains the greenhouse effect without distorting it?',
          options: [
            { id: 'c1', text: 'CO₂ forms a layer that covers the Earth like a glass roof.' },
            {
              id: 'c2',
              text: 'Some gases in the atmosphere let sunlight through but trap part of the heat the Earth gives off; the more of these gases, the more heat is trapped.',
            },
            { id: 'c3', text: 'The greenhouse effect is bad and is caused by pollution.' },
            { id: 'c4', text: 'The sun is hotter now because of the hole in the ozone layer.' },
          ],
          multiple: false,
          solution: ['c2'],
          explanation:
            'The second sentence leaves out the physics but keeps the mechanism. The first suggests a solid layer, the third ignores that without a natural greenhouse effect the Earth would be uninhabitable, and the fourth confuses two different phenomena.',
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  {
    order: 2,
    title: 'What scientists call …',
    subtitle: 'Fachbegriffe einführen',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'ena12-2-h1', type: 'HEADING', level: 1, text: 'What scientists call …' },
        {
          id: 'ena12-2-intro',
          type: 'TEXT',
          text: 'Writing for a general audience does not mean removing every technical term. Some the audience needs, because they will meet them again in the news – “inflation”, “immune system”, “algorithm”. The question is how to introduce them without interrupting the flow with dictionary definitions.',
        },
        {
          id: 'ena12-2-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Four ways to introduce a term',
          text: 'Apposition explains the term in passing, between commas or dashes. A reformulation marker (“that is”, “in other words”) adds the explanation afterwards. A functional definition says what something does rather than what it is. Often the most elegant is the reversal: explain the thing first, then give its name – “what scientists call …”.',
          table: {
            headers: ['Technique', 'Example'],
            rows: [
              ['apposition', 'Mitochondria, the power stations of the cell, produce energy.'],
              ['reformulation', 'The patient was hypoxic – in other words, his tissues lacked oxygen.'],
              ['functional definition', 'Insulin helps sugar move from the blood into the cells.'],
              ['reversal', 'Some bacteria survive antibiotics – what doctors call antimicrobial resistance.'],
            ],
          },
        },
        {
          id: 'ena12-2-match',
          type: 'MATCHING',
          instruction: 'Match each sentence with the technique it uses.',
          left: [
            { id: 'a1', text: 'Glaciers are losing more ice than they gain, a process glaciologists call a negative mass balance.' },
            { id: 'a2', text: 'The placenta, the organ that connects mother and foetus, forms during pregnancy.' },
            { id: 'a3', text: 'The drug is an anticoagulant; that is, it stops the blood from clotting.' },
            { id: 'a4', text: 'Stomata allow the plant to exchange gases with the air.' },
          ],
          right: [
            { id: 'b1', text: 'reversal' },
            { id: 'b2', text: 'apposition' },
            { id: 'b3', text: 'reformulation' },
            { id: 'b4', text: 'functional definition' },
          ],
          solution: [
            { leftId: 'a1', rightId: 'b1' },
            { leftId: 'a2', rightId: 'b2' },
            { leftId: 'a3', rightId: 'b3' },
            { leftId: 'a4', rightId: 'b4' },
          ],
        },
        {
          id: 'ena12-2-choice',
          type: 'CHOICE',
          instruction: 'Choose the most accessible introduction.',
          question: 'Which version best introduces the term “epigenetics” to newspaper readers?',
          options: [
            { id: 'e1', text: 'Epigenetics studies heritable changes in gene expression that do not involve changes to the DNA sequence.' },
            {
              id: 'e2',
              text: 'Identical twins share the same DNA, yet over the years their genes are switched on and off differently depending on how they live. This is what scientists study in the field of epigenetics.',
            },
            { id: 'e3', text: 'Epigenetics is a very important and fashionable field.' },
            { id: 'e4', text: 'Epigenetics comes from the Greek prefix epi-, meaning “upon”.' },
          ],
          multiple: false,
          solution: ['e2'],
          explanation:
            'The second version starts with a concrete, understandable case and only then names the field – the reversal technique. The first is accurate but written for specialists; the fourth explains the word, not the phenomenon.',
        },
        {
          id: 'ena12-2-cloze',
          type: 'CLOZE',
          instruction: 'Complete the explanations.',
          wordBank: ['in other words', 'helps', 'call', 'the organ'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'The liver filters the blood – ' },
            { kind: 'GAP', gapId: 't1', solution: ['in other words', 'that is'], width: 15 },
            { kind: 'TEXT', text: ', it removes toxins. Bile ' },
            { kind: 'GAP', gapId: 't2', solution: ['helps'], width: 6 },
            { kind: 'TEXT', text: ' the body digest fat. When the liver stops working, doctors ' },
            { kind: 'GAP', gapId: 't3', solution: ['call'], width: 5 },
            { kind: 'TEXT', text: ' it liver failure. The pancreas, ' },
            { kind: 'GAP', gapId: 't4', solution: ['the organ'], width: 10 },
            { kind: 'TEXT', text: ' that produces insulin, lies behind the stomach.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  {
    order: 3,
    title: 'Imagine that …',
    subtitle: 'Analogien und ihre Grenzen',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'ena12-3-h1', type: 'HEADING', level: 1, text: 'Imagine that …' },
        {
          id: 'ena12-3-intro',
          type: 'TEXT',
          text: 'The analogy is the most powerful tool of science communication – and the most dangerous. The heart as a pump, DNA as a recipe book, the internet as a road network: a good analogy transfers a whole structure at once. It fails when the reader also transfers what doesn’t fit.',
        },
        {
          id: 'ena12-3-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Language for analogies',
          text: '“Like” and “works like” compare directly. “Imagine …” invites readers to build the picture themselves. “If X were Y, …” builds a hypothetical comparison of scale, with the past subjunctive and “would”. “Just as …, so …” draws an explicit parallel.',
          table: {
            headers: ['Phrase', 'Example'],
            rows: [
              ['works like', 'A computer’s memory works like a desk: the bigger it is, the more you can work on at once.'],
              ['Imagine …', 'Imagine each cell as a tiny factory.'],
              ['If X were Y, …', 'If the Earth were an apple, the atmosphere would be thinner than its skin.'],
              ['Just as …, so …', 'Just as a key fits only its lock, so a receptor recognises only one molecule.'],
              ['to scale', 'If an atom were the size of a stadium, its nucleus would be a pea.'],
            ],
          },
        },
        {
          id: 'ena12-3-cloze',
          type: 'CLOZE',
          instruction: 'Complete the analogies with the right verb forms.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'If the history of the Earth ' },
            { kind: 'GAP', gapId: 'k1', solution: ['were', 'was'], hint: 'be', width: 5 },
            { kind: 'TEXT', text: ' a single day, humans ' },
            { kind: 'GAP', gapId: 'k2', solution: ['would'], hint: 'modal', width: 6 },
            { kind: 'TEXT', text: ' appear only a few seconds before midnight. ' },
            { kind: 'GAP', gapId: 'k3', solution: ['Imagine'], hint: 'imperative', width: 8 },
            { kind: 'TEXT', text: ' holding a grain of sand: it could contain millions of bacteria.' },
          ],
        },
        {
          id: 'ena12-3-info-limits',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Mark where the analogy ends',
          text: 'Every analogy breaks down somewhere, and responsible communicators say where. DNA is like a recipe book – but unlike a recipe book, it is “read” differently depending on the environment. One sentence is enough: “The comparison has its limits: …” or “Unlike a …, …”.',
        },
        {
          id: 'ena12-3-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct answer.',
          question: 'The immune system is often compared to an army defending a country. What false idea can this analogy create if it is not qualified?',
          options: [
            { id: 'q1', text: 'That the immune system protects the body.' },
            { id: 'q2', text: 'That it is made up of different specialised cells.' },
            { id: 'q3', text: 'That everything foreign is an enemy – when in fact the body lives with trillions of useful bacteria.' },
            { id: 'q4', text: 'That it reacts to invaders.' },
          ],
          multiple: false,
          solution: ['q3'],
          explanation:
            'The military image explains defence well, but it hides the fact that the immune system must also tolerate and regulate. Allergies are an example of too much “war”.',
        },
        {
          id: 'ena12-3-match',
          type: 'MATCHING',
          instruction: 'Match each concept with a suitable analogy.',
          left: [
            { id: 'm1', text: 'a computer’s working memory' },
            { id: 'm2', text: 'a cell receptor and its molecule' },
            { id: 'm3', text: 'the expansion of the universe' },
            { id: 'm4', text: 'antibiotic resistance' },
          ],
          right: [
            { id: 'n1', text: 'a desk: the bigger it is, the more you can work on at once' },
            { id: 'n2', text: 'a lock that only one key will open' },
            { id: 'n3', text: 'a rising loaf of raisin bread, in which every raisin moves away from every other' },
            { id: 'n4', text: 'a pesticide that leaves only the toughest insects alive' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'n1' },
            { leftId: 'm2', rightId: 'n2' },
            { leftId: 'm3', rightId: 'n3' },
            { leftId: 'm4', rightId: 'n4' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  {
    order: 4,
    title: 'Three in ten thousand',
    subtitle: 'Zahlen und Unsicherheit vermitteln',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'ena12-4-h1', type: 'HEADING', level: 1, text: 'Three in ten thousand' },
        {
          id: 'ena12-4-intro',
          type: 'TEXT',
          text: 'Nobody has an intuitive sense of 150 billion litres of water or a probability of 0.0003. Very large and very small numbers are both perceived simply as “a lot” or “very little”. Good science communication translates magnitudes into human scales – and, where there is uncertainty, communicates it without causing panic or false reassurance.',
        },
        {
          id: 'ena12-4-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Making numbers meaningful',
          text: 'There are three main strategies: compare with a familiar unit (“the volume of 60,000 Olympic swimming pools”), bring it down to one person or one day, and use natural frequencies instead of percentages: “1 in 1,000” is easier to grasp than “0.1%”. Always pair relative risks (“50% higher”) with absolute ones.',
          table: {
            headers: ['Original figure', 'Translation'],
            rows: [
              ['150 billion litres', 'about 60,000 Olympic swimming pools'],
              ['a 0.03% risk', '3 in 10,000 people'],
              ['a 50% increase in risk', 'from 2 to 3 cases in every 10,000 people'],
              ['an increase of 400%', 'five times as much as before'],
            ],
          },
        },
        {
          id: 'ena12-4-choice',
          type: 'CHOICE',
          instruction: 'Choose the most honest headline.',
          question: 'A study shows that a drug raises the risk of blood clots from 2 to 3 in every 10,000 women who take it. Which headline informs best?',
          options: [
            { id: 'r1', text: 'Drug raises clot risk by 50%!' },
            { id: 'r2', text: 'Drug is completely safe.' },
            { id: 'r3', text: 'Drug slightly raises clot risk: 3 cases instead of 2 in every 10,000 women.' },
            { id: 'r4', text: 'Clot risk rises by 0.01 percentage points.' },
          ],
          multiple: false,
          solution: ['r3'],
          explanation:
            'The 50% is a relative risk: accurate, but alarming without the baseline. “Completely safe” denies a real risk. The fourth is correct but almost impossible to picture. The third gives the absolute risk in natural frequencies.',
        },
        {
          id: 'ena12-4-info-uncertainty',
          type: 'INFO',
          variant: 'TIP',
          title: 'Communicating uncertainty',
          text: 'Science rarely offers certainty, and the public knows it. Hiding uncertainty destroys trust when the evidence changes; exaggerating it paralyses. Separate what is well established, what is likely and what is unknown – and say what would change the conclusion.',
          table: {
            headers: ['Level', 'Phrase'],
            rows: [
              ['well established', 'We know that …'],
              ['very likely', 'The evidence strongly suggests that …'],
              ['preliminary', 'Early studies indicate that …, but this has yet to be confirmed.'],
              ['unknown', 'We don’t yet know whether …'],
            ],
          },
        },
        {
          id: 'ena12-4-cloze',
          type: 'CLOZE',
          instruction: 'Complete the article.',
          wordBank: ['know', 'strongly', 'indicate', 'yet', 'in'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'We ' },
            { kind: 'GAP', gapId: 'u1', solution: ['know'], width: 5 },
            { kind: 'TEXT', text: ' that exercise protects the heart. The evidence ' },
            { kind: 'GAP', gapId: 'u2', solution: ['strongly'], width: 9 },
            { kind: 'TEXT', text: ' suggests that thirty minutes a day is enough. Early studies ' },
            { kind: 'GAP', gapId: 'u3', solution: ['indicate'], width: 9 },
            { kind: 'TEXT', text: ' that memory may also benefit, although we don’t ' },
            { kind: 'GAP', gapId: 'u4', solution: ['yet'], width: 4 },
            { kind: 'TEXT', text: ' know why. About three ' },
            { kind: 'GAP', gapId: 'u5', solution: ['in'], width: 3 },
            { kind: 'TEXT', text: ' ten adults don’t move enough.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  {
    order: 5,
    title: 'Leaving out what doesn’t matter',
    subtitle: 'Komplexes souverän zusammenfassen',
    estimatedMinutes: 36,
    content: {
      version: v,
      blocks: [
        { id: 'ena12-5-h1', type: 'HEADING', level: 1, text: 'Leaving out what doesn’t matter' },
        {
          id: 'ena12-5-intro',
          type: 'TEXT',
          text: 'A good popular science text is not a scaled-down copy of the original in which every section gets its share. It selects: one central idea, the two or three points that support it, and nothing more. What is left out is not lost; it belongs in another text. The test is simple: can the reader explain the idea to a friend afterwards?',
        },
        {
          id: 'ena12-5-info',
          type: 'INFO',
          variant: 'TIP',
          title: 'The shape of a popular science piece',
          text: 'Many successful pieces follow the same arc. They start from the reader’s own experience, ask a question, explain the mechanism with an analogy, make it concrete with a number, admit an open question and return at the end to the everyday experience, now seen differently.',
          table: {
            headers: ['Step', 'Example (topic: sleep)'],
            rows: [
              ['hook', 'Why do we forget where we put our keys after a short night?'],
              ['question', 'What does the brain do while we sleep?'],
              ['mechanism + analogy', 'It sorts the day’s experiences, like someone tidying their desk in the evening.'],
              ['number', 'People who sleep less than six hours remember less of what they learned the day before.'],
              ['open question', 'How the brain decides what to keep is not yet fully understood.'],
              ['ending', 'So next time you lose your keys, it may not be your memory that’s missing, but your sleep.'],
            ],
          },
        },
        {
          id: 'ena12-5-ordering',
          type: 'ORDERING',
          instruction: 'Put the sentences of this short popular science text in order.',
          items: [
            { id: 'o1', text: 'Have you ever wondered why the sea is salty but rivers aren’t?' },
            { id: 'o2', text: 'Rain dissolves tiny amounts of salt from rocks, and rivers carry it to the sea.' },
            { id: 'o3', text: 'There, the water evaporates but the salt stays behind – like the ring left in a saucepan.' },
            { id: 'o4', text: 'Over millions of years, this has built up to about 35 grams of salt in every litre of seawater.' },
            { id: 'o5', text: 'So river water is slightly salty too – just too little for us to taste.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5'],
        },
        {
          id: 'ena12-5-choice',
          type: 'CHOICE',
          instruction: 'Choose all the statements that summarise the chapter correctly.',
          question: 'Which statements are true? (Choose all that apply.)',
          options: [
            { id: 'y1', text: 'Simplifying is acceptable as long as the reader ends up with a correct idea.' },
            { id: 'y2', text: 'A good analogy does not need to be qualified.' },
            { id: 'y3', text: '“3 in 10,000” is easier to understand than “0.03%”.' },
            { id: 'y4', text: 'Explaining the idea before naming the technical term helps understanding.' },
            { id: 'y5', text: 'A good summary gives every section of the original equal space.' },
          ],
          multiple: true,
          solution: ['y1', 'y3', 'y4'],
          explanation:
            'Every analogy breaks down somewhere, and saying where prevents false ideas. And a good summary selects rather than shrinking everything proportionally.',
        },
        {
          id: 'ena12-5-cloze',
          type: 'CLOZE',
          instruction: 'Complete the summary of the chapter.',
          wordBank: ['curse', 'oversimplify', 'reversal', 'limits', 'frequencies', 'selects'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Experts suffer from the ' },
            { kind: 'GAP', gapId: 'z1', solution: ['curse'], width: 6 },
            { kind: 'TEXT', text: ' of knowledge. You may simplify, but not ' },
            { kind: 'GAP', gapId: 'z2', solution: ['oversimplify'], width: 13 },
            { kind: 'TEXT', text: '. Explaining first and naming the term afterwards is the ' },
            { kind: 'GAP', gapId: 'z3', solution: ['reversal'], width: 9 },
            { kind: 'TEXT', text: ' technique. Every analogy has its ' },
            { kind: 'GAP', gapId: 'z4', solution: ['limits'], width: 7 },
            { kind: 'TEXT', text: '. Natural ' },
            { kind: 'GAP', gapId: 'z5', solution: ['frequencies'], width: 12 },
            { kind: 'TEXT', text: ' are clearer than percentages. And a good summary ' },
            { kind: 'GAP', gapId: 'z6', solution: ['selects'], width: 8 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'ena12-5-writing',
          type: 'WRITING',
          instruction: 'Write a popular science article.',
          prompt:
            'Choose a topic you know well from your job, studies or hobby, and write a short article (220–300 words) for the science page of a general newspaper. Follow the arc on this page: hook, question, mechanism with an analogy (and its limit), a number made meaningful, an open question and an ending that returns to the start. Introduce at least one technical term using a technique from page 2.',
          minWords: 220,
          maxWords: 310,
          aiFeedback: true,
          sampleAnswer:
            'Why does yesterday’s bread go hard?\n\nWe all know the feeling: the loaf that was crisp and soft yesterday is tough and dry today. Strangely, it hasn’t simply dried out – even in an airtight bag, it goes hard. So what is happening inside it?\n\nThe answer lies in starch, the main ingredient of flour. During baking, heat and water break up the neat, tightly packed starch molecules, leaving them loose and tangled, a bit like a ball of wool that has come undone. As the bread cools, the molecules slowly line up again into rigid structures, squeezing out some of the water as they do so – a process food scientists call retrogradation. The wool comparison has its limits, of course: wool doesn’t release water when you rewind it, but starch does. That is why the crust goes soft while the crumb goes hard.\n\nThe process is surprisingly fast. At room temperature, bread loses much of its freshness within a day, and in the fridge it goes stale up to three times faster, because cold speeds up the rearrangement of the molecules. In the freezer, by contrast, the process almost stops.\n\nFood scientists are still trying to find out how to slow retrogradation without additives. Some wholegrain flours seem to keep bread fresh for longer, but this has yet to be confirmed.\n\nUntil then, there is an old trick: a few minutes in a hot oven. The heat breaks up the order again. So yesterday’s bread isn’t ruined after all – it has simply tidied itself up.',
        },
      ],
    },
  },
];
