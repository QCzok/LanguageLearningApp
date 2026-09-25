import {
  ADVANCED as A,
  GRAMMAR as G,
  choice,
  cloze,
  culture,
  grammar,
  lessons,
  match,
  order,
  text,
  tip,
  vocabBuilder,
} from './builders';

const words = vocabBuilder('de');

/** Englisch C1 – Advanced, Kapitel 1 bis 6, dazu Modalverben der Vermutung und „It is said that“ aus dem Grammatikbuch. */
export const EN_C1 = lessons('en-c1', [
  // ------------------------------------------------ Chapter 1: Englishes
  {
    kind: 'VOCAB',
    title: 'Talking about language',
    ref: [A, 1, 1],
    learn: [
      words('Language and variety', [
        ['variety', 'Varietät'],
        ['standard (language)', 'Standardsprache'],
        ['accent', 'Akzent'],
        ['dialect', 'Dialekt'],
        ['lingua franca', 'Verkehrssprache'],
        ['mother tongue', 'Muttersprache'],
        ['prestige', 'Prestige'],
        ['mutually intelligible', 'gegenseitig verständlich'],
      ]),
    ],
    test: [
      cloze(
        'Complete.',
        'Everyone speaks with an [accent]. A [dialect] also has its own words and grammar. When a Brazilian and a Korean negotiate in English, it is their [lingua franca].',
        ['prestige', 'variety'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'A pluricentric language',
    ref: [A, 1, 1],
    learn: [
      text(
        'Roughly 400 million people speak English as their first language; at least three times as many speak it as a second or foreign language. Linguists describe English as pluricentric: a family of standard varieties, each with its own norms, none of them the original from which the others have strayed.',
      ),
    ],
    test: [
      choice('Read the text.', 'What does “pluricentric” mean?', [
        'British English is the original and the others are adaptations.',
        '*There are several standard varieties, each with its own norms.',
        'Anyone can decide what is correct.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Accent, dialect, variety',
    ref: [A, 1, 1],
    learn: [
      grammar(
        'Three terms',
        'An accent is pronunciation only. A dialect also includes vocabulary and grammar. A variety is the neutral umbrella term for any recognisable form of a language. Everyone has an accent – what we call “no accent” is just the one with the most prestige.',
      ),
    ],
    test: [
      match('Match.', [
        ['a Glaswegian way of pronouncing words', 'accent'],
        ['“Were you sat there?” for “Were you sitting there?”', 'dialect'],
        ['Nigerian English', 'variety'],
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Flat or apartment?',
    ref: [A, 1, 2],
    learn: [
      tip(
        'British and American words',
        'Both columns are standard English. The real traps are words that exist in both varieties with different meanings: British “pants” are underwear; American “pants” are trousers. In a US meeting, to “table” a proposal means to postpone it; in Britain, to bring it forward.',
        {
          headers: ['British', 'American'],
          rows: [
            ['flat', 'apartment'],
            ['lorry', 'truck'],
            ['pavement', 'sidewalk'],
            ['queue', 'line'],
            ['crisps', 'chips'],
          ],
        },
      ),
    ],
    test: [
      match('British → American', [
        ['lorry', 'truck'],
        ['pavement', 'sidewalk'],
        ['queue', 'line'],
        ['holiday', 'vacation'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'I just ate – I’ve just eaten',
    ref: [A, 1, 2],
    learn: [
      grammar(
        'Spelling and grammar differences',
        'American spelling goes back largely to Noah Webster: color, center, organize. American English uses the past simple more for recent events (“I just ate”), prefers “gotten”, and treats collective nouns as singular (“The team is winning”).',
        {
          headers: ['British', 'American'],
          rows: [
            ['colour, centre', 'color, center'],
            ['I’ve just eaten.', 'I just ate.'],
            ['The team are winning.', 'The team is winning.'],
            ['It’s got better.', 'It’s gotten better.'],
          ],
        },
      ),
    ],
    test: [
      choice('Which sentence is typically American?', 'Choose.', [
        'The team are playing well this season.',
        '*Things have gotten much better since the spring.',
        'I’ve just finished the report.',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Rhotic or non-rhotic?',
    ref: [A, 1, 3],
    learn: [
      grammar(
        'Features of accents',
        'Rhotic accents pronounce the “r” in “car” (US, Canada, Scotland, Ireland); non-rhotic accents drop it (most of England, Australia). The flapped “t” (“water” like “wadder”) is North American and Australian. The glottal stop (“bo’le”) is common in London. RP is the traditional prestige accent of southern England.',
      ),
    ],
    test: [
      match('Match.', [
        ['rhotic accent', 'the “r” after a vowel is pronounced'],
        ['glottal stop', 'the “t” becomes a catch in the throat'],
        ['RP', 'traditional prestige accent of southern England'],
        ['flapped “t”', '“water” sounds like “wadder”'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Prepone the meeting',
    ref: [A, 1, 4],
    learn: [
      culture(
        'New Englishes',
        'In India, Nigeria, Singapore and elsewhere, English developed its own forms, used by educated speakers in formal contexts. Indian English “prepone” is the opposite of “postpone”; Nigerians “flash” someone (call and hang up); Singapore English adds the particle “lah”. These are features of established varieties, not mistakes.',
      ),
    ],
    test: [
      match('Paraphrase in British or American English.', [
        ['Let’s prepone the deadline.', 'Let’s bring the deadline forward.'],
        ['Flash me when you’re outside.', 'Give me a missed call when you’re outside.'],
        ['You finished the report, isn’t it?', 'You finished the report, didn’t you?'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'English as a lingua franca',
    ref: [A, 1, 4],
    learn: [
      tip(
        'Clarity beats idioms',
        'In most international meetings, nobody is a native speaker. Successful communication depends less on native-like idioms than on clarity: short sentences, no culture-specific idioms (“a sticky wicket”, “a home run”), checking understanding and paraphrasing.',
      ),
    ],
    test: [
      choice('A video call with colleagues from Japan, Brazil and Germany.', 'Which sentence is clearest?', [
        'We need to get our ducks in a row before we pitch this.',
        '*We need to organise everything carefully before we present this to the client.',
        'Let’s not jump the gun, yeah?',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Which English should I speak?',
    ref: [A, 1, 5],
    learn: [
      tip(
        'Three principles',
        'Be consistent: “colour” with “apartment” and “gotten” looks like a mix-up, not a choice. Be realistic: choose the variety of the people you actually work and live with. Produce one variety, but train your ear on many.',
      ),
    ],
    test: [
      match('Which decision is most sensible?', [
        ['You are moving to Toronto for two years.', 'Adopt North American vocabulary and spelling.'],
        ['You write a user manual for customers worldwide.', 'Use short, idiom-free sentences and one consistent spelling.'],
        ['You write a thesis at an Irish university.', 'Follow British spelling, as the university expects.'],
      ]),
    ],
  },

  // ------------------------------------------------ Chapter 2: Law and administration
  {
    kind: 'VOCAB',
    title: 'Legal words',
    ref: [A, 2, 1],
    learn: [
      words('Law and administration', [
        ['tenant / landlord', 'Mieter / Vermieter'],
        ['to sublet', 'untervermieten'],
        ['consent', 'Zustimmung'],
        ['clause', 'Klausel'],
        ['to be liable (for)', 'haften (für)'],
        ['breach (of contract)', 'Vertragsbruch'],
        ['notice period', 'Kündigungsfrist'],
        ['to appeal (against)', 'Widerspruch einlegen (gegen)'],
      ]),
    ],
    test: [
      cloze(
        'Complete.',
        'The [tenant] may not [sublet] the flat without the landlord’s written [consent]. Anyone who wants to end the contract must respect the [notice period].',
        ['clause', 'breach'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Hereinafter and thereof',
    ref: [A, 2, 1],
    learn: [
      grammar(
        'Habits of legal English',
        'Doublets (null and void), archaic here-/there- words (hereinafter, thereof), “shall” for obligation and heavy nominalisation (“upon termination of the agreement”). Once you recognise the habits, legal texts become much less intimidating.',
        {
          headers: ['Legal', 'Plain'],
          rows: [
            ['null and void', 'invalid'],
            ['hereinafter referred to as', 'from now on called'],
            ['any part thereof', 'any part of it'],
            ['prior to', 'before'],
          ],
        },
      ),
    ],
    test: [
      match('Legal → plain', [
        ['null and void', 'invalid'],
        ['any part thereof', 'any part of it'],
        ['prior to', 'before'],
        ['in the event that', 'if'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'shall, may, must',
    ref: [A, 2, 2],
    learn: [
      grammar(
        'Modal verbs in contracts',
        '“Shall” and “must” impose a duty; “may” grants a right, not a possibility; “shall not” and “may not” prohibit. Modern drafting increasingly prefers “must” to the ambiguous “shall”.',
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'The Tenant [shall] pay the rent monthly in advance. The Landlord [may] inspect the property with 24 hours’ notice. The Tenant [shall not] keep pets.',
        ['might', 'will'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'provided that, unless, notwithstanding',
    ref: [A, 2, 2],
    learn: [
      grammar(
        'Conditions and exceptions',
        '“Provided that” = only if. “Unless” = except if. “Notwithstanding” = despite, and signals that this clause overrides another. “Subject to” = depending on, limited by.',
      ),
    ],
    test: [
      choice(
        '“This agreement shall renew automatically unless either party gives two months’ written notice.” It is 15 November; the agreement ends on 31 December.',
        'What happens if you give notice today?',
        [
          'The agreement ends on 31 December.',
          '*The agreement renews for another year.',
          'The agreement ends immediately.',
        ],
      ),
      cloze(
        'Complete.',
        'The deposit will be returned [provided that] the flat is clean. [Notwithstanding] clause 7, the tenant may keep a bicycle in the hall.',
        ['unless', 'despite'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Should you wish to challenge …',
    ref: [A, 2, 3],
    learn: [
      tip(
        'Reading an official letter',
        'Official letters hide the actor (“has been issued”), prefer formal verbs (“is payable”) and use inverted conditionals: “Should you wish to challenge this notice” = “If you want to challenge this notice”. Read in three passes: What happened? What must I do, by when? What are my options?',
      ),
    ],
    test: [
      match('Formal → plain', [
        ['is payable within 28 days', 'you must pay within 28 days'],
        ['Should you require further information,', 'If you need to know more,'],
        ['Please find enclosed', 'I’m sending you'],
        ['We regret to inform you that', 'Unfortunately,'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Were we to cancel …',
    ref: [A, 2, 3],
    learn: [
      grammar(
        'Inverted conditionals',
        'In formal English, “if” can be dropped and the auxiliary moved to the front: “If you have questions” → “Should you have questions”; “If we were to cancel” → “Were we to cancel”; “If you had told us” → “Had you told us”.',
      ),
    ],
    test: [
      cloze(
        'Rewrite formally.',
        '[Should] you have any questions, please contact us. [Were] we to cancel the order, you would receive a refund. [Had] you told us earlier, we could have helped.',
        ['If', 'Did'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'I am writing to appeal against …',
    ref: [A, 2, 4],
    learn: [
      grammar(
        'A formal appeal',
        'Reference; purpose in the first sentence; facts in order; grounds with evidence; one clear request. “Dear Sir/Madam” pairs with “Yours faithfully”, “Dear Ms Smith” with “Yours sincerely” (British usage). Requests often use the subjunctive: “I request that the notice be cancelled.”',
      ),
    ],
    test: [
      order('Put the appeal in order.', [
        'Re: Penalty Charge Notice PCN 4471 2290',
        'I am writing to appeal against the above notice.',
        'On that day, the sign was completely covered by scaffolding.',
        'I enclose two photographs taken at the time.',
        'I therefore request that the notice be cancelled.',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Plain English',
    ref: [A, 2, 5],
    learn: [
      tip(
        'Five rules',
        'Use “you” and “we”; prefer active verbs; use verbs, not nouns (“apply for”, not “make an application for”); use everyday words (start, end, more than); keep sentences short.',
      ),
    ],
    test: [
      choice(
        '“In the event of non-receipt of the requisite documentation, the application will be deemed to have been withdrawn.”',
        'Which plain-English version is best?',
        [
          'Non-receipt of documents means withdrawal of application.',
          '*If you do not send us the documents we asked for, we will treat your application as withdrawn.',
          'Send stuff or it’s cancelled.',
        ],
      ),
    ],
  },

  // ------------------------------------------------ Chapter 3: Research and ethics
  {
    kind: 'VOCAB',
    title: 'Research methods',
    ref: [A, 3, 1],
    learn: [
      words('Research', [
        ['hypothesis', 'Hypothese'],
        ['sample', 'Stichprobe'],
        ['bias', 'Verzerrung'],
        ['control group', 'Kontrollgruppe'],
        ['correlation', 'Korrelation'],
        ['causation', 'Kausalität'],
        ['to replicate', 'replizieren'],
        ['confounding variable', 'Störvariable'],
      ]),
    ],
    test: [
      cloze(
        'Complete.',
        'The team started from the [hypothesis] that noise harms memory. The [sample] was 300 students; the [control group] worked in silence. Another lab managed to [replicate] the result.',
        ['bias', 'causation'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'From clue to proof',
    ref: [A, 3, 1],
    learn: [
      grammar(
        'What each design can show',
        'An observational study finds associations but cannot prove causes. A randomised controlled trial assigns people at random, which cancels out other differences, so it can show a causal effect. A meta-analysis combines many studies.',
      ),
    ],
    test: [
      match('Name the problem.', [
        ['Only people already interested in fitness volunteer.', 'selection bias'],
        ['Another lab gets a different result.', 'failure to replicate'],
        ['With twelve participants, anything could be chance.', 'sample too small'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'The data suggest …',
    ref: [A, 3, 2],
    learn: [
      grammar(
        'Grading certainty',
        'Modal verbs (may, might, could), tentative verbs (suggest, indicate, appear), adverbs (possibly, probably) and impersonal phrases (It is likely that …) let you claim exactly as much as the evidence supports. “Is associated with” reports a correlation; “reduces” claims a cause.',
      ),
    ],
    test: [
      choice('An observational study: children who eat breakfast get better marks.', 'Which headline is accurate?', [
        'Eating breakfast improves school marks.',
        '*Children who eat breakfast get better marks, study finds – but the reason is unclear.',
        'Skipping breakfast causes school failure.',
      ]),
      cloze(
        'Complete.',
        'Dog ownership is [associated] with a lower risk. The data [suggest] that walking plays a role, although income [may] also be a factor.',
        ['proves', 'causes'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Three explanations',
    ref: [A, 3, 2],
    learn: [
      tip(
        'Before claiming a cause',
        'Reverse causation: perhaps B causes A. A confounding variable: a third factor causes both. Chance: with enough comparisons, something will look significant.',
      ),
    ],
    test: [
      match('Which explanation?', [
        ['People who see the doctor often are sicker.', 'reverse causation'],
        ['More ice cream sales, more drownings.', 'confounding variable'],
        ['One of 100 foods is linked to hair loss.', 'chance'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'It must be – it can’t be',
    ref: [G, 10, 3],
    learn: [
      grammar(
        'Modals of deduction',
        '“Must” = I’m almost sure it’s true; “can’t” = I’m almost sure it isn’t; “might / may / could” = it’s possible. For the past: modal + have + past participle (“The results must have been checked”).',
        {
          headers: ['Certainty', 'Present', 'Past'],
          rows: [
            ['almost certain (yes)', 'It must be an error.', 'It must have been an error.'],
            ['possible', 'It might be an error.', 'It might have been an error.'],
            ['almost certain (no)', 'It can’t be an error.', 'It can’t have been an error.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'The results are identical in three labs – they [must] be reliable. With only ten participants, the effect [might] be due to chance. The data were published in 2019, so they [can’t] have included this year’s cases.',
        ['should', 'mustn’t'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Although, even if, despite',
    ref: [A, 3, 3],
    learn: [
      grammar(
        'Concessive structures',
        '“Although / even though” + clause concede a fact; “even if” concedes a possibility; “despite / in spite of” + noun or -ing; “however much / no matter how” stress that something does not change the conclusion; “admittedly” and “granted” open a concession.',
      ),
    ],
    test: [
      choice('Which sentence is correct?', 'Choose.', [
        'Despite the test is cheap, many people refuse it.',
        '*Despite being cheap, the test is refused by many people.',
        'Although of the low price, many people refuse it.',
      ]),
      cloze(
        'Complete.',
        '[Although] the test detects the disease early, it is controversial. [Even if] a patient wants to know, their siblings may not.',
        ['Despite', 'However'],
      ),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Four principles',
    ref: [A, 3, 4],
    learn: [
      grammar(
        'Research ethics',
        'Autonomy (informed consent), beneficence (a real benefit), non-maleficence (avoiding harm) and justice (fair distribution of burdens and benefits). Consent is valid only if it is informed, free and can be withdrawn at any time without penalty.',
      ),
    ],
    test: [
      match('Which principle is violated?', [
        ['A drug is tested only on prisoners.', 'justice'],
        ['The form is in a language participants don’t understand.', 'autonomy'],
        ['Seriously ill patients get placebo although a treatment exists.', 'non-maleficence'],
        ['The study is too small to reach any conclusion.', 'beneficence'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Anticipating objections',
    ref: [A, 3, 5],
    learn: [
      tip(
        'Phrases for weighing up',
        'Anticipate (“It could be argued that …”), concede (“This is a fair point; however, …”), rebut (“This objection overlooks the fact that …”), weigh (“On balance, … outweighs …”), limit (“This conclusion would not hold if …”).',
      ),
    ],
    test: [
      choice('Choose the best conclusion.', 'Which conclusion genuinely weighs the two sides?', [
        'Science must always move forward, whatever the cost.',
        'Both sides are right, so everyone should decide for themselves.',
        '*On balance, the right not to know should prevail, provided that patients can choose to share their results; this means accepting less prevention.',
      ]),
    ],
  },

  // ------------------------------------------------ Chapter 4: Literature in English
  {
    kind: 'VOCAB',
    title: 'Analysing texts',
    ref: [A, 4, 1],
    learn: [
      words('Literary analysis', [
        ['narrator', 'Erzähler'],
        ['plot', 'Handlung'],
        ['theme', 'Thema'],
        ['tone', 'Ton, Stimmung'],
        ['stanza', 'Strophe'],
        ['speaker (of a poem)', 'lyrisches Ich'],
        ['imagery', 'Bildsprache'],
        ['to convey', 'vermitteln'],
      ]),
    ],
    test: [
      cloze(
        'Complete.',
        'The poem has three [stanzas]. The [speaker] addresses an absent lover. The [imagery] of winter dominates, and the [tone] moves from bitterness to acceptance.',
        ['plot', 'narrator'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'A truth universally acknowledged',
    ref: [A, 4, 1],
    learn: [
      text(
        '“It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.” The first sentence of Jane Austen’s Pride and Prejudice (1813) sounds like a solemn law. Within pages, the reader realises it is ironic: the “truth” is really the wishful thinking of mothers with unmarried daughters. Literary analysis is written in the present tense: “Austen suggests”.',
      ),
    ],
    test: [
      choice('An old man keeps his emigrant son’s letters for decades without opening them.', 'What is the theme?', [
        'An old man keeps some letters in a drawer.',
        '*The fear that reality might destroy memory.',
        'The story is very sad and well written.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Who is telling the story?',
    ref: [A, 4, 2],
    learn: [
      grammar(
        'Points of view',
        'Omniscient: knows all characters’ thoughts. Third-person limited: stays close to one character. First-person: tells their own story and may be unreliable. Second-person: “You open the door …”.',
      ),
    ],
    test: [
      match('Match.', [
        ['“That summer my uncle stopped speaking. I was nine.”', 'first-person narrator telling someone else’s story'],
        ['“Clara knew the train wouldn’t come; the stationmaster was thinking of his daughter.”', 'omniscient narrator'],
        ['“You open the door slowly. Nobody is waiting.”', 'second-person narration'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'What a lark! What a plunge!',
    ref: [A, 4, 2],
    learn: [
      grammar(
        'Free indirect speech',
        'It keeps the third person and past tense of reported speech but drops the reporting verb and takes on the character’s voice. Woolf’s Mrs Dalloway (1925): “Mrs Dalloway said she would buy the flowers herself.” Then: “What a lark! What a plunge!” – her exclamations, not the narrator’s.',
        {
          headers: ['Style', 'Example'],
          rows: [
            ['direct', 'She thought, “He won’t come.”'],
            ['indirect', 'She thought that he wouldn’t come.'],
            ['free indirect', 'He wouldn’t come. How could she have believed him?'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Turn into free indirect speech: “Why hasn’t he called me? He must be angry.”',
        'Why [hadn’t] he called her? He [must] be angry.',
        ['hasn’t', 'will'],
      ),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Figures of speech',
    ref: [A, 4, 3],
    learn: [
      grammar(
        'Common figures',
        'Simile (“lonely as a cloud”), metaphor (“Hope is the thing with feathers”), personification, antithesis (“the best of times, the worst of times”), alliteration (“nodded, nearly napping”).',
        {
          headers: ['Figure', 'Example'],
          rows: [
            ['simile', 'I wandered lonely as a cloud (Wordsworth)'],
            ['metaphor', '“Hope” is the thing with feathers (Dickinson)'],
            ['antithesis', 'It was the best of times, it was the worst of times (Dickens)'],
            ['alliteration', 'While I nodded, nearly napping (Poe)'],
          ],
        },
      ),
    ],
    test: [
      match('Match.', [
        ['I wandered lonely as a cloud', 'simile'],
        ['It was the best of times, it was the worst of times', 'antithesis'],
        ['“Hope” is the thing with feathers', 'metaphor'],
        ['While I nodded, nearly napping', 'alliteration'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'From figure to effect',
    ref: [A, 4, 3],
    learn: [
      tip(
        'Point, evidence, explanation',
        'Name the figure and where it is, quote it with a line number, and explain its function: “In the first line, Dickinson uses a metaphor: hope is ‘the thing with feathers’ (l. 1). The image suggests that hope is light, fragile and alive.”',
      ),
    ],
    test: [
      choice('Dickens opens A Tale of Two Cities with “It was the best of times, it was the worst of times”.', 'What does the antithesis achieve?', [
        'It shows Dickens could not decide how to describe the period.',
        '*It presents an era of extreme contradictions, preparing the reader for a story of opposites.',
        'It tells the reader the story has a happy ending.',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Texts in their time',
    ref: [A, 4, 4],
    learn: [
      culture(
        'Five moments',
        'Renaissance (Shakespeare), Romanticism (Wordsworth, Keats: nature, emotion), Victorian (Dickens, George Eliot: social realism), Modernism (Woolf, Joyce: fragmentation, stream of consciousness), Postcolonial (Achebe, Rushdie: identity, empire).',
      ),
    ],
    test: [
      order('Put the periods in chronological order.', [
        'Renaissance',
        'Romanticism',
        'Victorian',
        'Modernism',
        'Postcolonial',
      ]),
      match('Which period?', [
        ['A poet finds comfort in daffodils on a hillside.', 'Romanticism'],
        ['An orphan struggles through an industrial city.', 'Victorian'],
        ['One day in a woman’s mind, jumping between thoughts.', 'Modernism'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Writing an interpretation',
    ref: [A, 4, 5],
    learn: [
      grammar(
        'The structure',
        'Introduction with a thesis (“This essay argues that …”); paragraphs built on point, evidence, explanation; conclusion (“Ultimately, the poem …”). Present tense, short integrated quotations with line numbers, no “I think”.',
      ),
    ],
    test: [
      choice('Which sentence belongs in a literary essay?', 'Choose.', [
        'I really liked this poem because it is beautiful.',
        '*The repeated dashes in lines 2–4 slow the reader down and suggest a voice still searching for words.',
        'Emily Dickinson was born in 1830 and rarely left home.',
      ]),
    ],
  },

  // ------------------------------------------------ Chapter 5: Global economy
  {
    kind: 'VOCAB',
    title: 'The economy',
    ref: [A, 5, 1],
    learn: [
      words('Economy', [
        ['GDP (gross domestic product)', 'BIP'],
        ['per capita', 'pro Kopf'],
        ['inequality', 'Ungleichheit'],
        ['commodity', 'Rohstoff'],
        ['informal economy', 'Schattenwirtschaft'],
        ['public debt', 'Staatsverschuldung'],
        ['supply chain', 'Lieferkette'],
        ['tariff', 'Zoll'],
      ]),
    ],
    test: [
      cloze(
        'Complete.',
        'Many economies grew by exporting [commodities]. When rich countries raised [tariffs], exports fell. Growth did not reduce [inequality].',
        ['debt', 'supply chain'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Growth and development',
    ref: [A, 5, 1],
    learn: [
      grammar(
        'What indicators measure',
        'GDP measures output, not distribution. GDP per capita is an average that hides those far below it. The Gini coefficient measures inequality from 0 (equal) to 1 (one person has everything). The HDI combines income, health and education.',
      ),
    ],
    test: [
      choice('GDP per capita rises by 15%; the Gini goes from 0.42 to 0.50.', 'What can you conclude?', [
        'Everyone is 15% richer.',
        '*Output per person has grown, but income is distributed more unequally.',
        'Inequality has fallen.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Rose sharply – a sharp rise',
    ref: [A, 5, 2],
    learn: [
      grammar(
        'Describing trends',
        'Verbs take adverbs (rose sharply); nouns take adjectives (a sharp rise). Rise BY 5% = the amount of change; rise TO 8% = the new level; a rise OF 5% after a noun. Strong verbs: soar, plummet; no change: level off, remain stable; back up: rebound, recover.',
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'Exports rose [by] 6%, [to] €42 billion. There was a fall [of] 2% in April. Imports increased [sharply] before levelling off.',
        ['with', 'sharp'],
      ),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Plummet, level off, rebound',
    ref: [A, 5, 2],
    learn: [
      words('Verbs of change', [
        ['to soar', 'in die Höhe schnellen'],
        ['to plummet', 'einbrechen, abstürzen'],
        ['to level off', 'sich einpendeln'],
        ['to rebound', 'sich erholen, wieder anziehen'],
        ['to stagnate', 'stagnieren'],
        ['to slow down', 'sich verlangsamen'],
      ]),
    ],
    test: [
      match('Which description?', [
        ['Sales: 100, 98, 60', 'plummeted'],
        ['Growth: 4%, 3%, 2%', 'slowed down'],
        ['Unemployment: 7%, 7%, 7%', 'remained stable'],
        ['Tourists: 5m, 3m, 4.5m', 'rebounded'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Percentage points',
    ref: [A, 5, 3],
    learn: [
      grammar(
        'Per cent or percentage points?',
        'If unemployment goes from 10% to 12%, it has risen by two percentage points – but by 20% relative to its previous level. When comparing two rates, use percentage points.',
      ),
    ],
    test: [
      choice('Inflation goes from 3% to 6%.', 'Which sentence is accurate?', [
        'Inflation has risen by 3%.',
        '*Inflation has risen by three percentage points – it has doubled.',
        'Inflation has risen by 50%.',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Mean and median',
    ref: [A, 5, 3],
    learn: [
      tip(
        'Which average?',
        'The mean adds everything up and divides; a few billionaires can pull it up dramatically. The median is the middle value. When incomes are unequal, the median is a better guide to the typical person.',
      ),
    ],
    test: [
      match('What is wrong?', [
        ['Growth fell from 3% to 2%, so the economy shrank.', 'Growth slowed, but the economy still grew.'],
        ['Average income rose, so the typical family is better off.', 'The mean may have risen because of a few very high incomes.'],
        ['The rate rose by 2% (from 4% to 6%).', 'It rose by 2 percentage points, or 50%.'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'At the expense of',
    ref: [A, 5, 4],
    learn: [
      grammar(
        'Expressing trade-offs',
        '“At the expense of / at the cost of” name what is sacrificed; “a trade-off between X and Y” names the conflict; “without + -ing” denies an expected consequence; “the more …, the less …” shows a gradual relationship; “to the extent that” expresses proportion.',
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'The economy grew [without] raising wages. The boom came [at the expense of] local water supplies. [The more] lithium is mined, the less water remains.',
        ['despite', 'because of'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Evaluating options',
    ref: [A, 5, 5],
    learn: [
      tip(
        'Phrases for a report',
        'The main advantage is … / A key drawback is … / This is likely to … / Compared with option A, option B … / On balance, we recommend …, provided that … Save your judgement for the recommendation; avoid loaded words like “reckless” or “visionary”.',
      ),
    ],
    test: [
      order('Put the report in a logical order.', [
        'This report evaluates two options for reducing informal employment.',
        'Option A, simplifying registration, is cheap and quick.',
        'However, it is unlikely to help very low-profit businesses.',
        'Option B, micro-loans and training, addresses productivity but costs more.',
        'On balance, we recommend combining both.',
      ]),
    ],
  },

  // ------------------------------------------------ Chapter 6: Media and discourse
  {
    kind: 'VOCAB',
    title: 'Media and manipulation',
    ref: [A, 6, 1],
    learn: [
      words('Media', [
        ['framing', 'Framing'],
        ['headline', 'Schlagzeile'],
        ['bias', 'Voreingenommenheit'],
        ['euphemism', 'Euphemismus'],
        ['to imply', 'andeuten'],
        ['to take out of context', 'aus dem Zusammenhang reißen'],
        ['loaded (word)', 'wertend, suggestiv'],
        ['fallacy', 'Trugschluss'],
      ]),
    ],
    test: [
      match('Match.', [
        ['Half a sentence is quoted; the full sentence says the opposite.', 'taking out of context'],
        ['200 redundancies are called “a workforce adjustment”.', 'euphemism'],
        ['A false claim is spread deliberately before an election.', 'disinformation'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Misinformation or disinformation?',
    ref: [A, 6, 1],
    learn: [
      tip(
        'Intention makes the difference',
        'Misinformation is false information spread without the intention to deceive. Disinformation is false information spread deliberately. Selection, framing and presupposition mislead without technically lying.',
      ),
    ],
    test: [
      choice('Someone shares a fake statistic, believing it to be true.', 'What is it?', [
        '*misinformation',
        'disinformation',
        'a euphemism',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Tax relief or tax cuts?',
    ref: [A, 6, 2],
    learn: [
      grammar(
        'Pairs that frame',
        'Tax relief (burden) vs tax cuts (policy); death tax vs estate tax; climate crisis vs climate change; illegal immigrants vs undocumented migrants. Syntax frames too: “200 workers were laid off” hides who did it.',
      ),
    ],
    test: [
      match('Which frame?', [
        ['Government bails out banks with taxpayers’ money', 'privileges for a few at everyone’s expense'],
        ['Government injects liquidity to stabilise the system', 'a technical, preventive measure'],
        ['Unions bring country to a standstill', 'damage caused by an organisation'],
        ['Thousands of workers join strike', 'mass support for a demand'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Who closed the library?',
    ref: [A, 6, 2],
    learn: [
      tip(
        'Hiding the agent',
        'Active: “The council closed the library.” Passive: “The library was closed.” Nominalisation: “The closure affected hundreds.” Ergative verb: “200 jobs disappeared” – as if by themselves.',
      ),
    ],
    test: [
      order('From most to least visible responsibility.', [
        'The council closed the local library.',
        'The local library was closed by the council.',
        'The local library was closed.',
        'The library’s closure affected hundreds of readers.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'They see a cost; we see an investment',
    ref: [A, 6, 3],
    learn: [
      grammar(
        'Rhetorical devices in speeches',
        'Tricolon (three items), anaphora (repeated openings), antithesis (contrast), rhetorical question (assumes agreement), inclusive “we” (identification). Always name the device, quote it and explain its effect.',
      ),
    ],
    test: [
      match('Which device?', [
        ['too expensive, too ambitious, too late', 'tricolon'],
        ['They see a problem; we see a promise.', 'antithesis'],
        ['Are we really going to let a few spreadsheets stop us?', 'rhetorical question'],
        ['We built the bridge. We built the school.', 'anaphora'],
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Straw man and slippery slope',
    ref: [A, 6, 4],
    learn: [
      grammar(
        'Six common fallacies',
        'Ad hominem (attacking the person), straw man (distorting the other position), false dilemma (only two options), slippery slope (unproven chain of consequences), hasty generalisation (too few cases), whataboutism (deflecting with another issue).',
      ),
    ],
    test: [
      match('Which fallacy?', [
        ['If bars stay open till midnight, soon nobody will sleep.', 'slippery slope'],
        ['Either we raise taxes or we close hospitals.', 'false dilemma'],
        ['You talk about the environment? With your car?', 'ad hominem'],
        ['So you want to open the borders without any control.', 'straw man'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Exposing a fallacy',
    ref: [A, 6, 4],
    learn: [
      tip(
        'Plain words work best',
        'Latin labels rarely convince an audience. Expose the mechanism instead: “That’s not what I said – what I said was …”, “There are more options than those two”, “Let’s talk about the argument, not my car.”',
      ),
    ],
    test: [
      choice('“Either we build the motorway or this region dies.”', 'Which reply works best?', [
        'That is a false dilemma, a well-known informal fallacy.',
        '*There are more than two options: improving the railway or the existing road would cost less.',
        'You always exaggerate.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'The minister is said to have known',
    ref: [G, 12, 2],
    learn: [
      grammar(
        'Impersonal reporting',
        'News writing often distances itself from claims: “It is said / reported / believed that …” or “X is said / thought / alleged to …”. For past events, use the perfect infinitive: “He is said to have known.”',
        {
          headers: ['Structure', 'Example'],
          rows: [
            ['It is + past participle + that', 'It is reported that the minister knew.'],
            ['Subject + is + past participle + to-infinitive', 'The minister is reported to know.'],
            ['… + perfect infinitive (past)', 'The minister is reported to have known.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'It is [alleged] that the company hid the data. The director is believed [to] have resigned. The factory is said to [have] closed last year.',
        ['says', 'has'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Reading against the text',
    ref: [A, 6, 5],
    learn: [
      text(
        '“Once again, the council is punishing us. The new bin tax is yet another raid on hard-working families. How long will they keep dipping into our pockets? My brother-in-law already pays more in tax than in rent. If we accept this levy, tomorrow they will charge us for breathing. Either the mayor scraps it, or this town will empty.”',
      ),
    ],
    test: [
      match('Which technique?', [
        ['“Once again”, “keep dipping into our pockets”', 'presupposition'],
        ['“punishing”, “raid”', 'framing'],
        ['“My brother-in-law already pays more …”', 'hasty generalisation'],
        ['“Either the mayor scraps it, or this town will empty.”', 'false dilemma'],
      ]),
    ],
  },
]);
