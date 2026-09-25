import type { UnitSeed } from './chapter-beginner-1';

/**
 * Englisch, Advanced, Kapitel 3: „Research and ethics“ (C1, Kapitel 3)
 *
 * Fünf Seiten. Wissenschaftliche Aussagen leben von ihrer Vorsicht: Wer
 * „reduces“ schreibt, wo die Studie „may reduce“ sagt, hat sie falsch
 * wiedergegeben. Das Kapitel übt die Sprache der Methode, das Abstufen von
 * Gewissheit, die Darstellung eines Dilemmas und das Vorwegnehmen von
 * Einwänden.
 *
 * Aufbau: Seite 1 Wortschatz der Methode, Seite 2 Korrelation und Kausalität
 * mit Hedging, Seite 3 ein Dilemma mit konzessiven Konnektoren darstellen,
 * Seite 4 Prinzipien der Forschungsethik, Seite 5 Einwände vorwegnehmen und
 * eine Abwägung schreiben.
 *
 * Studien und Zahlen sind erfunden. Sämtliche Texte sind eigenständig
 * verfasst.
 */
const v = 1;

export const ENGLISH_ADVANCED_3_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  {
    order: 1,
    title: 'How do we know?',
    subtitle: 'Der Wortschatz der Methode',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'ena3-1-h1', type: 'HEADING', level: 1, text: 'How do we know?' },
        {
          id: 'ena3-1-intro',
          type: 'TEXT',
          text: 'Every week a headline announces that coffee lengthens your life – or shortens it. Behind each one is a study with a particular design, a sample of a certain size and limitations the headline rarely mentions. To judge the news, you need to read the study; and to read the study, you need the small set of words scientists use to describe their own methods.',
        },
        {
          id: 'ena3-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Words: research methods',
          items: [
            { term: 'hypothesis', translations: { de: 'die Hypothese', es: 'la hipótesis' } },
            { term: 'sample', translations: { de: 'die Stichprobe', es: 'la muestra' }, example: 'A sample of 40 people is too small to generalise from.' },
            { term: 'bias', translations: { de: 'die Verzerrung', es: 'el sesgo' } },
            { term: 'control group', translations: { de: 'die Kontrollgruppe', es: 'el grupo de control' } },
            { term: 'randomised controlled trial (RCT)', translations: { de: 'die randomisierte kontrollierte Studie', es: 'el ensayo controlado aleatorizado' } },
            { term: 'correlation', translations: { de: 'die Korrelation', es: 'la correlación' } },
            { term: 'causation', translations: { de: 'die Kausalität', es: 'la causalidad' } },
            { term: 'to replicate', translations: { de: 'replizieren', es: 'replicar' } },
            { term: 'peer review', translations: { de: 'das Peer-Review', es: 'la revisión por pares' } },
            { term: 'finding', translations: { de: 'der Befund', es: 'el hallazgo' } },
            { term: 'confounding variable', translations: { de: 'die Störvariable', es: 'la variable de confusión' } },
          ],
        },
        {
          id: 'ena3-1-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'From clue to proof',
          text: 'An observational study looks at what already happens and can find associations, but not prove causes. A randomised controlled trial assigns participants at random to a treatment group and a control group, which cancels out other differences. A meta-analysis combines the results of many studies.',
          table: {
            headers: ['Design', 'What it can show', 'Main limitation'],
            rows: [
              ['case study', 'that something is possible', 'cannot be generalised'],
              ['observational study', 'an association', 'cannot separate cause from coincidence'],
              ['RCT', 'a causal effect', 'expensive, sometimes unethical'],
              ['meta-analysis', 'the weight of evidence', 'only as good as the studies it combines'],
            ],
          },
        },
        {
          id: 'ena3-1-match',
          type: 'MATCHING',
          instruction: 'Match each problem with the term that names it.',
          left: [
            { id: 'a1', text: 'Only people already interested in fitness volunteer.' },
            { id: 'a2', text: 'Another lab repeats the experiment and gets a different result.' },
            { id: 'a3', text: 'Nobody knows if patients improved because of the drug or because they expected to.' },
            { id: 'a4', text: 'With twelve participants, any difference could be chance.' },
          ],
          right: [
            { id: 'b1', text: 'selection bias' },
            { id: 'b2', text: 'failure to replicate' },
            { id: 'b3', text: 'no placebo control group' },
            { id: 'b4', text: 'sample too small' },
          ],
          solution: [
            { leftId: 'a1', rightId: 'b1' },
            { leftId: 'a2', rightId: 'b2' },
            { leftId: 'a3', rightId: 'b3' },
            { leftId: 'a4', rightId: 'b4' },
          ],
        },
        {
          id: 'ena3-1-cloze',
          type: 'CLOZE',
          instruction: 'Complete the description of the study.',
          wordBank: ['hypothesis', 'sample', 'randomly', 'control', 'finding'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'The team started from the ' },
            { kind: 'GAP', gapId: 'g1', solution: ['hypothesis'], width: 11 },
            { kind: 'TEXT', text: ' that lack of sleep harms memory. They recruited a ' },
            { kind: 'GAP', gapId: 'g2', solution: ['sample'], width: 7 },
            { kind: 'TEXT', text: ' of 300 students and assigned them ' },
            { kind: 'GAP', gapId: 'g3', solution: ['randomly'], width: 9 },
            { kind: 'TEXT', text: ' to two groups: one slept five hours; the ' },
            { kind: 'GAP', gapId: 'g4', solution: ['control'], width: 8 },
            { kind: 'TEXT', text: ' group slept eight. The main ' },
            { kind: 'GAP', gapId: 'g5', solution: ['finding'], width: 8 },
            { kind: 'TEXT', text: ' was a 20% drop in a recall test.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  {
    order: 2,
    title: 'Correlation is not causation',
    subtitle: 'Gewissheit sprachlich abstufen',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'ena3-2-h1', type: 'HEADING', level: 1, text: 'Correlation is not causation' },
        {
          id: 'ena3-2-text',
          type: 'TEXT',
          text: 'A study of ten thousand adults finds that dog owners have fewer heart attacks. The temptation is immediate: owning a dog protects your heart. But dog owners walk more, are more likely to have a garden and perhaps a higher income – and any of those differences could explain the result. The authors know this, which is why they write that dog ownership “is associated with” a lower risk, not that it “reduces” it. The gap between those two phrases is exactly the gap between correlation and causation.',
        },
        {
          id: 'ena3-2-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Grading certainty',
          text: 'Academic English has a fine scale for how sure you are. Modal verbs (may, might, could), tentative verbs (suggest, indicate, appear), adverbs (possibly, probably, arguably) and impersonal structures (It is likely that …) let you claim exactly as much as the evidence supports.',
          table: {
            headers: ['Certainty', 'Expression'],
            rows: [
              ['high', 'The data show / demonstrate that …'],
              ['fairly high', 'The data strongly suggest / indicate that …'],
              ['medium', 'It is likely / probable that … ; X may …'],
              ['low', 'It is possible that … ; X might / could …'],
              ['reported', 'According to the manufacturer, the drug reduces …'],
            ],
          },
        },
        {
          id: 'ena3-2-choice',
          type: 'CHOICE',
          instruction: 'Choose the headline that respects what the study can claim.',
          question: 'An observational study finds that children who eat breakfast get better marks. Which headline is accurate?',
          options: [
            { id: 'c1', text: 'Eating breakfast improves school marks.' },
            { id: 'c2', text: 'Children who eat breakfast get better marks, study finds – but the reason is unclear.' },
            { id: 'c3', text: 'Science proves breakfast is key to passing exams.' },
            { id: 'c4', text: 'Skipping breakfast causes school failure.' },
          ],
          multiple: false,
          solution: ['c2'],
          explanation:
            'An observational study can report an association. The other headlines claim a cause – but perhaps families who eat breakfast together also have more time to help with homework.',
        },
        {
          id: 'ena3-2-info-alt',
          type: 'INFO',
          variant: 'TIP',
          title: 'Three explanations before you claim a cause',
          text: 'Reverse causation: maybe it isn’t exercise that improves mood, but good mood that makes people exercise. A confounding variable: a third factor, such as income, affects both things. Chance: with enough comparisons, something will turn out “significant” by accident.',
        },
        {
          id: 'ena3-2-match',
          type: 'MATCHING',
          instruction: 'Match each association with the most likely alternative explanation.',
          left: [
            { id: 'e1', text: 'People who see the doctor more often are sicker.' },
            { id: 'e2', text: 'In months when more ice cream is sold, more people drown.' },
            { id: 'e3', text: 'Of 100 foods tested, one is linked to hair loss.' },
          ],
          right: [
            { id: 'f1', text: 'reverse causation: they see the doctor because they are sick' },
            { id: 'f2', text: 'confounding variable: hot weather increases both' },
            { id: 'f3', text: 'chance: among so many comparisons, one will match' },
          ],
          solution: [
            { leftId: 'e1', rightId: 'f1' },
            { leftId: 'e2', rightId: 'f2' },
            { leftId: 'e3', rightId: 'f3' },
          ],
        },
        {
          id: 'ena3-2-cloze',
          type: 'CLOZE',
          instruction: 'Complete with suitable hedging.',
          wordBank: ['suggest', 'may', 'associated', 'likely'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Dog ownership is ' },
            { kind: 'GAP', gapId: 'h1', solution: ['associated'], width: 11 },
            { kind: 'TEXT', text: ' with a lower risk of heart disease. The data ' },
            { kind: 'GAP', gapId: 'h2', solution: ['suggest'], width: 8 },
            { kind: 'TEXT', text: ' that daily walks play a role, although income ' },
            { kind: 'GAP', gapId: 'h3', solution: ['may'], width: 4 },
            { kind: 'TEXT', text: ' also be a factor. It is ' },
            { kind: 'GAP', gapId: 'h4', solution: ['likely'], width: 7 },
            { kind: 'TEXT', text: ' that several causes work together.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  {
    order: 3,
    title: 'Presenting a dilemma',
    subtitle: 'Zwei Seiten, ohne vorab zu entscheiden',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'ena3-3-h1', type: 'HEADING', level: 1, text: 'Presenting a dilemma' },
        {
          id: 'ena3-3-intro',
          type: 'TEXT',
          text: 'A dilemma is not a difficult question but one where two legitimate values collide. A new genetic test can detect a serious hereditary disease early – but it also reveals information about relatives who never asked for it. Presenting such a case fairly means giving each side its strongest argument before leaning towards one. The grammatical tools for this are concessive structures.',
        },
        {
          id: 'ena3-3-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'although, even if, however much',
          text: '“Although” and “even though” concede a fact. “Even if” concedes a possibility. “While” and “whereas” contrast two sides. “However much”, “no matter how” and “despite / in spite of” (+ noun or -ing) stress that something does not change the conclusion. “Admittedly” and “granted” open a concession at the start of a sentence.',
          table: {
            headers: ['Connector', 'Example'],
            rows: [
              ['although / even though', 'Although the test is reliable, it raises concerns.'],
              ['even if', 'Even if the patient consents, the family has not.'],
              ['however much / no matter how', 'However much the technology improves, the dilemma remains.'],
              ['despite + noun / -ing', 'Despite its low cost, the test is controversial.'],
              ['admittedly / granted', 'Admittedly, early detection saves lives. But …'],
            ],
          },
        },
        {
          id: 'ena3-3-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'Which sentence is grammatically correct?',
          options: [
            { id: 'q1', text: 'Despite the test is cheap, many people refuse it.' },
            { id: 'q2', text: 'Despite being cheap, the test is refused by many people.' },
            { id: 'q3', text: 'Although of the low price, many people refuse it.' },
            { id: 'q4', text: 'Even the test is cheap, many people refuse it.' },
          ],
          multiple: false,
          solution: ['q2'],
          explanation:
            '“Despite” is a preposition and needs a noun or an -ing form, not a clause. With a clause, use “although” or “even though”.',
        },
        {
          id: 'ena3-3-cloze',
          type: 'CLOZE',
          instruction: 'Complete the paragraph.',
          wordBank: ['Although', 'Even if', 'However much', 'Despite', 'Admittedly'],
          caseSensitive: false,
          segments: [
            { kind: 'GAP', gapId: 'n1', solution: ['Although'], width: 9 },
            { kind: 'TEXT', text: ' the test detects the disease years in advance, its use is controversial. ' },
            { kind: 'GAP', gapId: 'n2', solution: ['However much'], width: 13 },
            { kind: 'TEXT', text: ' the technology improves, the dilemma will remain. ' },
            { kind: 'GAP', gapId: 'n3', solution: ['Even if'], width: 8 },
            { kind: 'TEXT', text: ' a patient wants to know, their siblings may not. ' },
            { kind: 'GAP', gapId: 'n4', solution: ['Despite'], width: 8 },
            { kind: 'TEXT', text: ' these concerns, many doctors support it. ' },
            { kind: 'GAP', gapId: 'n5', solution: ['Admittedly'], width: 11 },
            { kind: 'TEXT', text: ', early detection saves lives.' },
          ],
        },
        {
          id: 'ena3-3-ordering',
          type: 'ORDERING',
          instruction: 'Put the sentences in order to present the dilemma fairly.',
          items: [
            { id: 'o1', text: 'A new test identifies the risk of a serious hereditary disease.' },
            { id: 'o2', text: 'Here, the right to know collides with the right not to know.' },
            { id: 'o3', text: 'On the one hand, knowing the risk allows preventive measures.' },
            { id: 'o4', text: 'On the other hand, the result affects relatives who have not consented.' },
            { id: 'o5', text: 'A reasonable solution would be to offer genetic counselling before any results are shared.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5'],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  {
    order: 4,
    title: 'Principles of research ethics',
    subtitle: 'Einwilligung, Nutzen, Gerechtigkeit',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'ena3-4-h1', type: 'HEADING', level: 1, text: 'Principles of research ethics' },
        {
          id: 'ena3-4-intro',
          type: 'TEXT',
          text: 'Research ethics grew out of scandal. After the medical experiments of the Second World War and later abuses – such as the Tuskegee study in the United States, in which Black men with syphilis were left untreated for decades – the research community agreed on principles that every ethics committee now applies before a study may begin.',
        },
        {
          id: 'ena3-4-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Four principles',
          text: 'Autonomy requires respecting each participant’s informed decision. Beneficence means aiming at a real benefit; non-maleficence means avoiding harm. Justice demands that burdens and benefits be shared fairly: you cannot always experiment on the most vulnerable to benefit everyone else.',
          table: {
            headers: ['Principle', 'Requires', 'Violated if …'],
            rows: [
              ['autonomy', 'informed consent', 'the purpose of the study is hidden'],
              ['beneficence', 'a real potential benefit', 'the study cannot produce useful results'],
              ['non-maleficence', 'minimising risk', 'participants face avoidable harm'],
              ['justice', 'fair distribution', 'only people with no alternative take part'],
            ],
          },
        },
        {
          id: 'ena3-4-match',
          type: 'MATCHING',
          instruction: 'Match each case with the principle it violates.',
          left: [
            { id: 'p1', text: 'A drug is tested only on prisoners in exchange for shorter sentences.' },
            { id: 'p2', text: 'Participants sign a form in a language they don’t understand.' },
            { id: 'p3', text: 'Seriously ill patients are kept on placebo although an effective treatment exists.' },
            { id: 'p4', text: 'A study is so small it cannot reach any conclusion.' },
          ],
          right: [
            { id: 'q1', text: 'justice' },
            { id: 'q2', text: 'autonomy' },
            { id: 'q3', text: 'non-maleficence' },
            { id: 'q4', text: 'beneficence' },
          ],
          solution: [
            { leftId: 'p1', rightId: 'q1' },
            { leftId: 'p2', rightId: 'q2' },
            { leftId: 'p3', rightId: 'q3' },
            { leftId: 'p4', rightId: 'q4' },
          ],
        },
        {
          id: 'ena3-4-cloze',
          type: 'CLOZE',
          instruction: 'Complete the consent form.',
          wordBank: ['voluntary', 'withdraw', 'risks', 'confidential', 'anonymised'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Your participation is ' },
            { kind: 'GAP', gapId: 'k1', solution: ['voluntary'], width: 10 },
            { kind: 'TEXT', text: '. You may ' },
            { kind: 'GAP', gapId: 'k2', solution: ['withdraw'], width: 9 },
            { kind: 'TEXT', text: ' at any time without giving a reason. The possible ' },
            { kind: 'GAP', gapId: 'k3', solution: ['risks'], width: 6 },
            { kind: 'TEXT', text: ' and benefits have been explained to you. All information will be kept ' },
            { kind: 'GAP', gapId: 'k4', solution: ['confidential'], width: 13 },
            { kind: 'TEXT', text: ', and your data will be ' },
            { kind: 'GAP', gapId: 'k5', solution: ['anonymised'], width: 11 },
            { kind: 'TEXT', text: ' before analysis.' },
          ],
        },
        {
          id: 'ena3-4-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct answer.',
          question: 'A participant wants to leave a trial halfway through. The team tells her she will lose free access to her doctor if she does. What is the ethical problem?',
          options: [
            { id: 'r1', text: 'None – she signed the consent form at the start.' },
            { id: 'r2', text: 'It violates autonomy, because withdrawing must be possible without penalty.' },
            { id: 'r3', text: 'It is acceptable if the trial is important enough.' },
            { id: 'r4', text: 'It is a question of justice, not autonomy.' },
          ],
          multiple: false,
          solution: ['r2'],
          explanation:
            'Consent is not a contract that binds you to continue; it can be withdrawn at any time. A penalty for leaving turns the decision into one made under pressure.',
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  {
    order: 5,
    title: 'Anticipating objections',
    subtitle: 'Einwände vorwegnehmen und abwägen',
    estimatedMinutes: 32,
    content: {
      version: v,
      blocks: [
        { id: 'ena3-5-h1', type: 'HEADING', level: 1, text: 'Anticipating objections' },
        {
          id: 'ena3-5-intro',
          type: 'TEXT',
          text: 'The strongest arguments answer objections before the reader raises them. Doing this signals that you have thought about the other side – and it takes away your opponent’s best lines. The conclusion of a weighing-up should then say why, in this particular case, one value outweighs the other, and under what conditions that answer would change.',
        },
        {
          id: 'ena3-5-info',
          type: 'INFO',
          variant: 'TIP',
          title: 'Phrases for anticipating and weighing',
          text: 'These phrases structure an argument. Note that “It could be argued that” and “Critics may object that” introduce a view you are about to answer, not your own position.',
          table: {
            headers: ['Function', 'Phrase'],
            rows: [
              ['anticipate', 'It could be argued that … / Critics may object that …'],
              ['concede', 'This is a fair point; however, …'],
              ['rebut', 'This objection overlooks the fact that …'],
              ['weigh', 'On balance, … outweighs …'],
              ['limit', 'This conclusion would not hold if …'],
            ],
          },
        },
        {
          id: 'ena3-5-choice',
          type: 'CHOICE',
          instruction: 'Choose the best conclusion for a weighing-up.',
          question: 'Which conclusion genuinely weighs the two sides?',
          options: [
            { id: 's1', text: 'In short, science must always move forward, whatever the cost.' },
            {
              id: 's2',
              text: 'On balance, the right not to know should prevail here, provided that patients can choose to share their results; this means accepting less comprehensive prevention.',
            },
            { id: 's3', text: 'Both sides are right, so everyone should decide for themselves.' },
            { id: 's4', text: 'Obviously, privacy is the most important thing of all.' },
          ],
          multiple: false,
          solution: ['s2'],
          explanation:
            'The second option decides, states a condition and names the cost. The others either declare an absolute value or avoid deciding.',
        },
        {
          id: 'ena3-5-cloze',
          type: 'CLOZE',
          instruction: 'Complete the summary of the chapter.',
          wordBank: ['correlation', 'bias', 'suggest', 'Despite', 'autonomy', 'outweighs'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'A ' },
            { kind: 'GAP', gapId: 'z1', solution: ['correlation'], width: 12 },
            { kind: 'TEXT', text: ' does not prove a cause. Using only motivated volunteers creates selection ' },
            { kind: 'GAP', gapId: 'z2', solution: ['bias'], width: 5 },
            { kind: 'TEXT', text: '. Data that “' },
            { kind: 'GAP', gapId: 'z3', solution: ['suggest'], width: 8 },
            { kind: 'TEXT', text: '” something do not prove it. “' },
            { kind: 'GAP', gapId: 'z4', solution: ['Despite'], width: 8 },
            { kind: 'TEXT', text: '” is followed by a noun or an -ing form. Informed consent protects ' },
            { kind: 'GAP', gapId: 'z5', solution: ['autonomy'], width: 9 },
            { kind: 'TEXT', text: '. And weighing up means explaining why one value ' },
            { kind: 'GAP', gapId: 'z6', solution: ['outweighs'], width: 10 },
            { kind: 'TEXT', text: ' another.' },
          ],
        },
        {
          id: 'ena3-5-writing',
          type: 'WRITING',
          instruction: 'Write an argumentative text.',
          prompt:
            'A hospital wants to use 100,000 anonymised patient records to train software that detects skin cancer in photographs. It will not ask each patient for consent. Write a text of 200–280 words that presents the dilemma, gives each side its strongest argument, anticipates at least one objection and reaches a conditional conclusion. Use at least two concessive structures and appropriate hedging.',
          minWords: 200,
          maxWords: 290,
          aiFeedback: true,
          sampleAnswer:
            'The hospital’s plan brings two legitimate goods into conflict: better diagnosis, which could save lives, and each patient’s control over their own data.\n\nThe case for the project is strong. Software trained on large numbers of images appears to detect lesions that the human eye misses, and asking 100,000 people for individual consent would make the study practically impossible. Moreover, the records would be anonymised before use.\n\nThe case against rests on autonomy. Even if the data are anonymised, it is possible that a photograph of someone’s skin could be traced back to them. Patients shared their information in order to be treated, not to train software. However worthy the aim, using data without consent sets a precedent that may be difficult to limit.\n\nIt could be argued that anonymisation removes the ethical problem altogether. This objection, however, overlooks the fact that trust in hospitals depends not only on whether harm occurs, but on whether patients feel respected.\n\nOn balance, I believe the project can be justified, provided that three conditions are met: the hospital informs the public about it, any patient can opt out through a simple procedure, and an independent committee supervises the use of the data. Admittedly, this would mean a smaller dataset and a delay of some months. Although that is a real cost, it seems reasonable compared with the alternative.\n\nThis conclusion would not hold, however, if the software were developed for commercial purposes. In that case, the benefit would no longer be shared, and the argument from public good would lose most of its weight.',
        },
      ],
    },
  },
];
