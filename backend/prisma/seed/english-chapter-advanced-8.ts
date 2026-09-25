import type { UnitSeed } from './chapter-beginner-1';

/**
 * Englisch, Advanced, Kapitel 8: „Academic writing“ (C2, Kapitel 2)
 *
 * Fünf Seiten. Akademisches Englisch unterscheidet sich vom deutschen vor
 * allem im Ideal: Clarity und concision gelten als Tugend, lange
 * Nominalketten als Schwäche. Das Kapitel lehrt die Gliederung (IMRaD), das
 * Einbinden von Quellen mit reporting verbs, Hedging, präzises und knappes
 * Formulieren und das Zusammenfassen.
 *
 * Aufbau: Seite 1 Aufbau eines Artikels, Seite 2 Quellen einbinden,
 * Seite 3 Hedging und Boosting, Seite 4 Präzision und typische Fehler,
 * Seite 5 Paraphrase, Zusammenfassung und Abstract.
 *
 * Die zitierten Autorinnen und Studien sind erfunden. Sämtliche Texte sind
 * eigenständig verfasst.
 */
const v = 1;

export const ENGLISH_ADVANCED_8_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  {
    order: 1,
    title: 'The shape of a paper',
    subtitle: 'Einen akademischen Text gliedern',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'ena8-1-h1', type: 'HEADING', level: 1, text: 'The shape of a paper' },
        {
          id: 'ena8-1-intro',
          type: 'TEXT',
          text: 'Nobody reads an academic article from beginning to end. Readers look at the abstract, then the conclusion, then perhaps the method. Each section therefore has to be findable and understandable on its own. In the sciences and much of the social sciences, articles follow the IMRaD structure: Introduction, Methods, Results and Discussion.',
        },
        {
          id: 'ena8-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Words: academic work',
          items: [
            { term: 'abstract', translations: { de: 'das Abstract, die Kurzfassung', es: 'el resumen' } },
            { term: 'literature review', translations: { de: 'der Forschungsüberblick', es: 'el estado de la cuestión' } },
            { term: 'research question', translations: { de: 'die Forschungsfrage', es: 'la pregunta de investigación' } },
            { term: 'methodology', translations: { de: 'die Methodik', es: 'la metodología' } },
            { term: 'findings', translations: { de: 'die Ergebnisse, Befunde', es: 'los hallazgos' } },
            { term: 'to cite', translations: { de: 'zitieren, anführen', es: 'citar' } },
            { term: 'reference list', translations: { de: 'das Literaturverzeichnis', es: 'la bibliografía' } },
            { term: 'plagiarism', translations: { de: 'das Plagiat', es: 'el plagio' } },
            { term: 'dissertation', translations: { de: 'die Abschlussarbeit, Dissertation', es: 'la tesis' } },
            { term: 'limitation', translations: { de: 'die Einschränkung', es: 'la limitación' } },
          ],
        },
        {
          id: 'ena8-1-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Sections and their tenses',
          text: 'Each section has a function and a typical tense. The introduction and discussion mostly use the present (what is known, what it means) and the present perfect (research so far). Methods and results use the past (what was done and found). Academic English increasingly accepts “we” and even “I” for decisions and claims.',
          table: {
            headers: ['Section', 'Function', 'Typical sentence'],
            rows: [
              ['introduction', 'problem, gap, aim', 'This study examines how …'],
              ['literature review', 'what is known', 'Several studies have shown that …'],
              ['methods', 'what was done', '120 teachers were interviewed.'],
              ['results', 'what was found', 'Sixty per cent preferred …'],
              ['discussion', 'what it means', 'These findings suggest that …'],
            ],
          },
        },
        {
          id: 'ena8-1-match',
          type: 'MATCHING',
          instruction: 'Match each sentence with its section.',
          left: [
            { id: 'a1', text: 'We analysed 120 editorials published between 2015 and 2020.' },
            { id: 'a2', text: 'This paper examines the use of irony in sports journalism.' },
            { id: 'a3', text: 'Three out of four editorials used hyperbole.' },
            { id: 'a4', text: 'These results suggest that irony builds a bond with readers.' },
            { id: 'a5', text: 'Since Ruiz (2009), newspaper irony has received growing attention.' },
          ],
          right: [
            { id: 'b1', text: 'methods' },
            { id: 'b2', text: 'introduction' },
            { id: 'b3', text: 'results' },
            { id: 'b4', text: 'discussion' },
            { id: 'b5', text: 'literature review' },
          ],
          solution: [
            { leftId: 'a1', rightId: 'b1' },
            { leftId: 'a2', rightId: 'b2' },
            { leftId: 'a3', rightId: 'b3' },
            { leftId: 'a4', rightId: 'b4' },
            { leftId: 'a5', rightId: 'b5' },
          ],
        },
        {
          id: 'ena8-1-info-gap',
          type: 'INFO',
          variant: 'TIP',
          title: 'Creating a research space',
          text: 'Good introductions follow a three-step move: establish the territory (“X is increasingly important”), show a gap (“However, little is known about …”) and fill it (“This study therefore investigates …”). The gap is the heart of the introduction: it answers the reader’s question “Why should I read this?”.',
        },
        {
          id: 'ena8-1-ordering',
          type: 'ORDERING',
          instruction: 'Put the sentences of this introduction in order.',
          items: [
            { id: 'o1', text: 'Short-video platforms have become the main source of news for many teenagers.' },
            { id: 'o2', text: 'Several studies have examined their effect on attention span.' },
            { id: 'o3', text: 'However, little is known about how teenagers judge the reliability of what they see there.' },
            { id: 'o4', text: 'This study therefore investigates how 14- to 16-year-olds evaluate news on these platforms.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4'],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  {
    order: 2,
    title: 'Using sources',
    subtitle: 'Quellen einbinden und bewerten',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'ena8-2-h1', type: 'HEADING', level: 1, text: 'Using sources' },
        {
          id: 'ena8-2-intro',
          type: 'TEXT',
          text: 'Much of academic writing consists of reporting what others have said. The difficulty lies not in the quotation itself but in the verb that introduces it. “Morales argues”, “Morales admits” and “Morales claims” attribute the same idea to the same author, but say three different things about it – and about the writer’s own view.',
        },
        {
          id: 'ena8-2-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Reporting verbs and what they signal',
          text: 'Neutral verbs only attribute. Others show how strongly the source makes its claim, or whether the writer agrees. Note the patterns: argue/claim/suggest THAT …; emphasise/note THAT …; acknowledge/concede THAT …; question/challenge + noun.',
          table: {
            headers: ['Type', 'Verbs', 'Signals'],
            rows: [
              ['neutral', 'states, notes, argues, observes', 'attribution only'],
              ['tentative (source)', 'suggests, implies, speculates', 'the source is cautious'],
              ['concession (source)', 'acknowledges, concedes, admits', 'the source gives ground'],
              ['writer agrees', 'shows, demonstrates, establishes', 'the writer accepts it as proven'],
              ['writer distances', 'claims, asserts, alleges', 'the writer is not convinced'],
            ],
          },
        },
        {
          id: 'ena8-2-match',
          type: 'MATCHING',
          instruction: 'What does each verb suggest about the writer’s position?',
          left: [
            { id: 'v1', text: 'Morales (2019) demonstrates that voseo is spreading in the press.' },
            { id: 'v2', text: 'Morales (2019) claims that voseo is spreading in the press.' },
            { id: 'v3', text: 'Morales (2019) argues that voseo is spreading in the press.' },
            { id: 'v4', text: 'Morales (2019) suggests that voseo may be spreading in the press.' },
          ],
          right: [
            { id: 'w1', text: 'The writer considers the claim proven.' },
            { id: 'w2', text: 'The writer doubts the claim.' },
            { id: 'w3', text: 'The writer only reports the claim.' },
            { id: 'w4', text: 'Morales herself is cautious.' },
          ],
          solution: [
            { leftId: 'v1', rightId: 'w1' },
            { leftId: 'v2', rightId: 'w2' },
            { leftId: 'v3', rightId: 'w3' },
            { leftId: 'v4', rightId: 'w4' },
          ],
        },
        {
          id: 'ena8-2-info-cite',
          type: 'INFO',
          variant: 'TIP',
          title: 'Quoting, paraphrasing, summarising',
          text: 'Quote only when the exact wording matters – a definition, a striking phrase. Paraphrase to restate an idea in your own words; summarise to condense a longer argument. All three require a citation. In author–date styles such as Harvard or APA, the citation can be integral (the author is part of the sentence) or non-integral (in brackets).',
          table: {
            headers: ['Form', 'Example'],
            rows: [
              ['quotation', 'Voseo is “the most visible marker of Rioplatense identity” (Morales, 2019, p. 45).'],
              ['integral citation', 'Morales (2019) considers voseo the main marker of Rioplatense identity.'],
              ['non-integral citation', 'Voseo is widely seen as a marker of identity (Morales, 2019; Díaz, 2021).'],
            ],
          },
        },
        {
          id: 'ena8-2-choice',
          type: 'CHOICE',
          instruction: 'Choose the fair report of the source.',
          question: 'The source says: “Our data indicate that remote work may slightly increase productivity.” Which report is accurate?',
          options: [
            { id: 'c1', text: 'Schulz (2022) proves that remote work increases productivity.' },
            { id: 'c2', text: 'Schulz (2022) claims that remote work makes people more productive.' },
            { id: 'c3', text: 'Schulz (2022) suggests that remote work may slightly increase productivity.' },
            { id: 'c4', text: 'Remote work increases productivity.' },
          ],
          multiple: false,
          solution: ['c3'],
          explanation:
            'The source is cautious (“indicate”, “may”, “slightly”). “Proves” overstates it, “claims” implies doubt on your part, and without a citation the last option would be plagiarism.',
        },
        {
          id: 'ena8-2-cloze',
          type: 'CLOZE',
          instruction: 'Complete with suitable reporting verbs.',
          wordBank: ['argues', 'acknowledges', 'claim', 'demonstrated'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'García (2015) ' },
            { kind: 'GAP', gapId: 'r1', solution: ['argues'], hint: 'neutral', width: 7 },
            { kind: 'TEXT', text: ' that anglicisms are increasing among young speakers, although she ' },
            { kind: 'GAP', gapId: 'r2', solution: ['acknowledges'], hint: 'concession', width: 13 },
            { kind: 'TEXT', text: ' that her sample is small. Other authors ' },
            { kind: 'GAP', gapId: 'r3', solution: ['claim'], hint: 'writer distances', width: 6 },
            { kind: 'TEXT', text: ' that the trend threatens the language, a view that Díaz (2020) has ' },
            { kind: 'GAP', gapId: 'r4', solution: ['demonstrated'], hint: 'writer agrees', width: 13 },
            { kind: 'TEXT', text: ' to be unfounded.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  {
    order: 3,
    title: 'Hedging and boosting',
    subtitle: 'Vorsichtig und bestimmt formulieren',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'ena8-3-h1', type: 'HEADING', level: 1, text: 'Hedging and boosting' },
        {
          id: 'ena8-3-intro',
          type: 'TEXT',
          text: 'Academic writers constantly calibrate how strongly they claim things. Hedges soften a claim (may, appear to, tend to, arguably); boosters strengthen it (clearly, undoubtedly, it is evident that). Neither is a virtue in itself. Too many hedges make you sound unsure of your own results; too many boosters make you sound as though you are overselling them.',
        },
        {
          id: 'ena8-3-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Tools for hedging',
          text: 'You can hedge with modal verbs, tentative verbs, adverbs, and by limiting the scope of a claim. Often the best hedge is precision: “in the sample studied” is both more cautious and more informative than “maybe”.',
          table: {
            headers: ['Too strong', 'Appropriate', 'Too weak'],
            rows: [
              ['The data prove that …', 'The data suggest that …', 'It could perhaps possibly be that …'],
              ['All teenagers …', 'Most of the participants …', 'Some people maybe …'],
              ['This is the cause.', 'This is likely to be a major factor.', 'This might in some way play a certain role.'],
            ],
          },
        },
        {
          id: 'ena8-3-choice',
          type: 'CHOICE',
          instruction: 'Choose the appropriately hedged sentence.',
          question: 'A survey of 200 students at one university found that 70% prefer reading on paper.',
          options: [
            { id: 'h1', text: 'Students prefer reading on paper.' },
            { id: 'h2', text: 'In the sample studied, a clear majority preferred reading on paper.' },
            { id: 'h3', text: 'It could perhaps be the case that some students might possibly prefer paper.' },
            { id: 'h4', text: 'This study proves that paper is better than screens.' },
          ],
          multiple: false,
          solution: ['h2'],
          explanation:
            'The second sentence limits the scope (“in the sample studied”) and reports the result clearly. The first and fourth overgeneralise; the third is so hedged that it says nothing.',
        },
        {
          id: 'ena8-3-cloze',
          type: 'CLOZE',
          instruction: 'Complete with appropriate hedges.',
          wordBank: ['suggest', 'tend', 'likely', 'appears', 'sample'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'The results ' },
            { kind: 'GAP', gapId: 'k1', solution: ['suggest'], width: 8 },
            { kind: 'TEXT', text: ' that younger participants ' },
            { kind: 'GAP', gapId: 'k2', solution: ['tend'], width: 5 },
            { kind: 'TEXT', text: ' to use digital media more often. This is ' },
            { kind: 'GAP', gapId: 'k3', solution: ['likely'], width: 7 },
            { kind: 'TEXT', text: ' to be linked to smartphone ownership. However, the effect ' },
            { kind: 'GAP', gapId: 'k4', solution: ['appears'], width: 8 },
            { kind: 'TEXT', text: ' to be weaker in our ' },
            { kind: 'GAP', gapId: 'k5', solution: ['sample'], width: 7 },
            { kind: 'TEXT', text: ' than in previous studies.' },
          ],
        },
        {
          id: 'ena8-3-match',
          type: 'MATCHING',
          instruction: 'Match each overstated claim with an appropriate version.',
          left: [
            { id: 'l1', text: 'This is the cause.' },
            { id: 'l2', text: 'All teachers are overworked.' },
            { id: 'l3', text: 'The study proves this.' },
          ],
          right: [
            { id: 'r1', text: 'This is likely to be a major cause.' },
            { id: 'r2', text: 'Most of the teachers surveyed reported being overworked.' },
            { id: 'r3', text: 'The study provides support for this view.' },
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
  {
    order: 4,
    title: 'Precision and concision',
    subtitle: 'Genau und knapp formulieren',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'ena8-4-h1', type: 'HEADING', level: 1, text: 'Precision and concision' },
        {
          id: 'ena8-4-intro',
          type: 'TEXT',
          text: '“The implementation of the evaluation of the results was carried out by the research team.” The sentence is grammatical and nearly unreadable: three nouns in a chain and a vague verb. “The team evaluated the results” says the same. Where German academic prose often tolerates long nominal chains, English academic style values the shortest clear version.',
        },
        {
          id: 'ena8-4-info',
          type: 'INFO',
          variant: 'TIP',
          title: 'Five ways to cut wordiness',
          text: 'Replace nominalisations with verbs, prefer precise verbs to “do/make/get”, cut redundant pairs, avoid empty openers and use the active voice where the agent matters. The passive remains useful in methods sections, where the action matters more than who did it.',
          table: {
            headers: ['Wordy', 'Concise'],
            rows: [
              ['carry out an analysis of', 'analyse'],
              ['due to the fact that', 'because'],
              ['in order to', 'to'],
              ['It is important to note that X', 'X (or: Importantly, X)'],
              ['each and every; first and foremost', 'each; first'],
            ],
          },
        },
        {
          id: 'ena8-4-info-errors',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Three errors examiners notice',
          text: 'A dangling modifier has no logical subject: “Having analysed the data, the results were clear” (the results did not analyse anything). A comma splice joins two sentences with only a comma: “The sample was small, the results are tentative.” And “data” is traditionally plural in academic writing (“the data show”), although singular use is increasingly accepted.',
          table: {
            headers: ['Error', 'Wrong', 'Right'],
            rows: [
              ['dangling modifier', 'Having analysed the data, the results were clear.', 'Having analysed the data, we found clear results.'],
              ['comma splice', 'The sample was small, the results are tentative.', 'The sample was small, so the results are tentative.'],
              ['vague “this”', 'This shows that …', 'This difference shows that …'],
            ],
          },
        },
        {
          id: 'ena8-4-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentences.',
          question: 'Which sentences are correct and concise? (Choose all that apply.)',
          options: [
            { id: 'e1', text: 'We analysed the interviews to identify recurring themes.' },
            { id: 'e2', text: 'Having collected the questionnaires, the analysis began.' },
            { id: 'e3', text: 'The response rate was low; therefore, the findings should be treated with caution.' },
            { id: 'e4', text: 'The response rate was low, the findings are tentative.' },
            { id: 'e5', text: 'An analysis was carried out in order to make an identification of themes.' },
          ],
          multiple: true,
          solution: ['e1', 'e3'],
          explanation:
            'The second has a dangling modifier (the analysis did not collect anything), the fourth is a comma splice and the fifth is needlessly wordy.',
        },
        {
          id: 'ena8-4-cloze',
          type: 'CLOZE',
          instruction: 'Replace the wordy phrase with a concise verb.',
          wordBank: ['analysed', 'because', 'to', 'investigated'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'We ' },
            { kind: 'GAP', gapId: 'p1', solution: ['analysed', 'analyzed'], hint: 'carried out an analysis of', width: 9 },
            { kind: 'TEXT', text: ' the data ' },
            { kind: 'GAP', gapId: 'p2', solution: ['to'], hint: 'in order to', width: 3 },
            { kind: 'TEXT', text: ' test the hypothesis. The effect was small ' },
            { kind: 'GAP', gapId: 'p3', solution: ['because'], hint: 'due to the fact that', width: 8 },
            { kind: 'TEXT', text: ' the sample was limited. Future studies should examine what we ' },
            { kind: 'GAP', gapId: 'p4', solution: ['investigated'], hint: 'conducted an investigation into', width: 13 },
            { kind: 'TEXT', text: ' only briefly.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  {
    order: 5,
    title: 'Summaries and abstracts',
    subtitle: 'Präzise zusammenfassen',
    estimatedMinutes: 34,
    content: {
      version: v,
      blocks: [
        { id: 'ena8-5-h1', type: 'HEADING', level: 1, text: 'Summaries and abstracts' },
        {
          id: 'ena8-5-intro',
          type: 'TEXT',
          text: 'The abstract is the most-read part of any paper – and often the only one. In 150 to 250 words it must state the aim, method, main results and conclusion. It promises nothing the paper does not deliver, and it usually contains no citations or abbreviations. Paraphrase and summary are the underlying skills: restating others’ ideas accurately in fewer, different words.',
        },
        {
          id: 'ena8-5-ordering',
          type: 'ORDERING',
          instruction: 'Put the sentences of the abstract in the usual order.',
          items: [
            { id: 'o1', text: 'This study examines the use of voseo in Uruguayan advertising.' },
            { id: 'o2', text: 'A corpus of 300 television adverts broadcast between 2018 and 2023 was analysed.' },
            { id: 'o3', text: 'Voseo appeared in 92% of adverts aimed at young people, compared with 40% of those aimed at older audiences.' },
            { id: 'o4', text: 'The findings suggest that voseo functions as a marker of generational closeness.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4'],
        },
        {
          id: 'ena8-5-info',
          type: 'INFO',
          variant: 'TIP',
          title: 'A good paraphrase',
          text: 'A good paraphrase changes the structure as well as the words, keeps the meaning and the degree of certainty, and is still cited. Replacing a few words with synonyms while keeping the original sentence structure is “patchwriting” – and can count as plagiarism.',
          table: {
            headers: ['Original', 'Paraphrase'],
            rows: [
              [
                'Remote workers reported higher job satisfaction but greater difficulty separating work from private life.',
                'While working from home made employees more satisfied with their jobs, it also blurred the line between work and leisure (Schulz, 2022).',
              ],
            ],
          },
        },
        {
          id: 'ena8-5-cloze',
          type: 'CLOZE',
          instruction: 'Complete the summary of the chapter.',
          wordBank: ['gap', 'claims', 'hedges', 'dangling', 'abstract', 'patchwriting'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'A good introduction shows a research ' },
            { kind: 'GAP', gapId: 'z1', solution: ['gap'], width: 4 },
            { kind: 'TEXT', text: '. A writer who says an author “' },
            { kind: 'GAP', gapId: 'z2', solution: ['claims'], width: 7 },
            { kind: 'TEXT', text: '” something is signalling doubt. Words like “may” and “tend to” are ' },
            { kind: 'GAP', gapId: 'z3', solution: ['hedges'], width: 7 },
            { kind: 'TEXT', text: '. “Having analysed the data, the results were clear” contains a ' },
            { kind: 'GAP', gapId: 'z4', solution: ['dangling'], width: 9 },
            { kind: 'TEXT', text: ' modifier. The ' },
            { kind: 'GAP', gapId: 'z5', solution: ['abstract'], width: 9 },
            { kind: 'TEXT', text: ' summarises the whole paper. And swapping synonyms into someone else’s sentence is ' },
            { kind: 'GAP', gapId: 'z6', solution: ['patchwriting'], width: 13 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'ena8-5-writing',
          type: 'WRITING',
          instruction: 'Write an abstract.',
          prompt:
            'Imagine you have carried out a study: you surveyed 250 university students in Madrid and Bogotá about their use of English loanwords in messaging apps. 70% in Madrid and 64% in Bogotá say they use them daily, mainly for technology and entertainment; in both groups, use drops in messages to family members. Write the abstract (150–220 words) with aim, method, results and conclusion. Use appropriate tenses, at least one hedge and no unnecessary nominalisations.',
          minWords: 150,
          maxWords: 230,
          aiFeedback: true,
          sampleAnswer:
            'This study examines how often, and in what contexts, Spanish-speaking university students use English loanwords in informal written communication, and whether usage differs between two varieties of Spanish.\n\nWe surveyed 250 undergraduate students in Madrid and Bogotá about their use of English loanwords in messaging apps, the topics in which these appeared and the people to whom the messages were sent.\n\nSeventy per cent of respondents in Madrid and 64% in Bogotá reported using English loanwords every day. In both groups, loanwords occurred mainly in messages about technology and entertainment, and their use fell markedly in messages to family members.\n\nThe findings suggest that the difference between the two cities is small and that the recipient of a message matters more than the speaker’s variety. English loanwords therefore appear to function in this age group as a marker of informal, peer-to-peer register rather than as a regional feature. Because the data are self-reported, however, further research based on a corpus of real messages is needed to confirm these patterns.',
        },
      ],
    },
  },
];
