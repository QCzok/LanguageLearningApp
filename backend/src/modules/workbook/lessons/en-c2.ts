import {
  ADVANCED as A,
  GRAMMAR as G,
  choice,
  cloze,
  culture,
  dialogue,
  grammar,
  lessons,
  match,
  order,
  text,
  tip,
  vocabBuilder,
} from './builders';

const words = vocabBuilder('de');

/** Englisch C2 – Advanced, Kapitel 7 bis 12, dazu indirekte Rede und irreale Bedingungssätze aus dem Grammatikbuch. */
export const EN_C2 = lessons('en-c2', [
  // ------------------------------------------------ Chapter 7: Rhetoric and persuasion
  {
    kind: 'VOCAB',
    title: 'The speaker’s craft',
    ref: [A, 7, 1],
    learn: [
      words('Rhetoric', [
        ['audience', 'Publikum'],
        ['credibility', 'Glaubwürdigkeit'],
        ['to appeal to', 'appellieren an'],
        ['to rebut', 'widerlegen'],
        ['counter-argument', 'Gegenargument'],
        ['to concede', 'einräumen'],
        ['compelling', 'überzeugend'],
        ['sound bite', 'prägnanter O-Ton'],
      ]),
    ],
    test: [
      cloze(
        'Complete.',
        'Without [credibility], no statistic convinces. A speaker who only [appeals] to emotions seems manipulative. A good speech anticipates the main [counter-argument] and knows how to [rebut] it.',
        ['audience', 'compelling'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Ethos, pathos, logos',
    ref: [A, 7, 1],
    learn: [
      grammar(
        'The three appeals',
        'Ethos is the speaker’s credibility; pathos the emotion they arouse; logos the reasoning. A speech that relies on one alone sounds like a report, a sermon or propaganda. Admitting limits builds ethos; excessive pathos destroys it.',
      ),
    ],
    test: [
      match('Which appeal?', [
        ['As mayor for twelve years, I know every street in this town.', 'ethos'],
        ['Think of your children, who will inherit what we decide.', 'pathos'],
        ['If fares rise by 10% and use falls by 15%, revenue falls.', 'logos'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'The architecture of a speech',
    ref: [A, 7, 2],
    learn: [
      grammar(
        'A classic structure',
        'Opening (attention, goodwill), background (the facts), argument (reasons, strongest last), rebuttal (objections), close (summary, call to action). “Tell them what you’re going to tell them, tell them, then tell them what you’ve told them.”',
      ),
    ],
    test: [
      order('Put the speech in order.', [
        'How many of you have crossed this square after dark this month?',
        'Since the lights were removed in March, residents have avoided it.',
        'Restoring the lights costs less than a month of private security.',
        'Some will say there is no budget. There was one for new benches.',
        'That is why I’m asking you today to approve this motion.',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'This brings me to my second point',
    ref: [A, 7, 2],
    learn: [
      tip(
        'Signposting',
        'Listeners cannot re-read, so a speech announces its structure, marks each step and recaps. Announce: “I’d like to focus on three points.” Move on: “This brings me to my second point.” Recap: “So far, we’ve seen that …” Signal the end: “Let me leave you with one thought.”',
      ),
    ],
    test: [
      match('Which function?', [
        ['I’d like to focus on three points.', 'announcing the structure'],
        ['Turning now to the question of cost, …', 'moving on'],
        ['So far, we’ve seen that the plan is affordable.', 'recapping'],
        ['Let me leave you with one thought.', 'signalling the end'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'We don’t live to work',
    ref: [A, 7, 3],
    learn: [
      grammar(
        'Figures for speaking',
        'Tricolon (three items, the last the longest), anaphora (repeated openings), chiasmus (A B / B A), climax (from weaker to stronger), antithesis (contrast). Two items feel like a contrast, four like a list; three feel complete.',
      ),
    ],
    test: [
      match('Which figure?', [
        ['It is not the city that changes people; it is people who change the city.', 'chiasmus'],
        ['We want schools. We want doctors. We want a future.', 'anaphora'],
        ['First they ignored it, then they criticised it, and finally they copied it.', 'climax'],
        ['They talk about cost; we talk about value.', 'antithesis'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Far from slowing the economy …',
    ref: [A, 7, 4],
    learn: [
      grammar(
        'The tactical concession',
        'Concession + turn + reply. “It’s true that …; however, …” acknowledges and qualifies. “It’s not about … it’s about …” shifts the ground. “Far from + -ing” reverses the expected consequence. “Granted, … But …” concedes a point.',
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'It’s true that the project is expensive; [however], doing nothing costs more. [Far from] emptying the centre, it has filled it with people. [Granted], the deadline is tight. But it is achievable.',
        ['therefore', 'Despite'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Thinking on your feet',
    ref: [A, 7, 4],
    learn: [
      tip(
        'Buying time and clarifying',
        'Buy time: “That’s an important question, and I want to answer it properly.” Clarify: “When you say ‘too expensive’, compared with what?” Ask for evidence: “What’s that based on?” Reframe: “I’d put it slightly differently: …”',
      ),
    ],
    test: [
      choice('You argue for a four-day week. An opponent says productivity will fall.', 'Which reply is strongest?', [
        'That’s what people who don’t want change always say.',
        'Productivity doesn’t matter; happiness does.',
        '*That’s a fair concern. However, in companies that have tried it, productivity per hour has risen enough to make up for it.',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Coming full circle',
    ref: [A, 7, 5],
    learn: [
      tip(
        'Openings and closings',
        'Open with a question, a story, a surprising fact or a contrast. Close with a call to action, an image or by returning to the opening – coming full circle. Write the first and last sentences word for word; never improvise the ending.',
      ),
    ],
    test: [
      choice(
        'The speech began: “Last Tuesday, an eighty-year-old neighbour climbed six floors on foot with her shopping.”',
        'Which closing uses that opening best?',
        [
          'So, yeah, that’s about it. Thanks.',
          'In conclusion, lifts are important for accessibility.',
          '*If we approve this grant tonight, next Tuesday our neighbour will take the lift. It’s in our hands.',
        ],
      ),
    ],
  },

  // ------------------------------------------------ Chapter 8: Academic writing
  {
    kind: 'VOCAB',
    title: 'Academic work',
    ref: [A, 8, 1],
    learn: [
      words('Academic writing', [
        ['abstract', 'Abstract, Kurzfassung'],
        ['literature review', 'Forschungsüberblick'],
        ['research question', 'Forschungsfrage'],
        ['methodology', 'Methodik'],
        ['findings', 'Ergebnisse, Befunde'],
        ['reference list', 'Literaturverzeichnis'],
        ['plagiarism', 'Plagiat'],
        ['limitation', 'Einschränkung'],
      ]),
    ],
    test: [
      cloze(
        'Complete.',
        'The [abstract] summarises the whole paper. The [literature review] shows what is already known. Every source must appear in the [reference list]; otherwise it is [plagiarism].',
        ['findings', 'limitation'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'IMRaD and its tenses',
    ref: [A, 8, 1],
    learn: [
      grammar(
        'Sections and tenses',
        'Introduction and discussion: mostly present (what is known, what it means) and present perfect (research so far). Methods and results: past (what was done and found).',
        {
          headers: ['Section', 'Example'],
          rows: [
            ['introduction', 'This study examines how …'],
            ['literature review', 'Several studies have shown that …'],
            ['methods', '120 teachers were interviewed.'],
            ['discussion', 'These findings suggest that …'],
          ],
        },
      ),
    ],
    test: [
      match('Which section?', [
        ['We analysed 120 editorials published between 2015 and 2020.', 'methods'],
        ['This paper examines irony in sports journalism.', 'introduction'],
        ['Three out of four editorials used hyperbole.', 'results'],
        ['These results suggest that irony builds a bond with readers.', 'discussion'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Showing the gap',
    ref: [A, 8, 1],
    learn: [
      tip(
        'Creating a research space',
        'Establish the territory (“X is increasingly important”), show a gap (“However, little is known about …”) and fill it (“This study therefore investigates …”). The gap answers the reader’s question: why should I read this?',
      ),
    ],
    test: [
      order('Put the introduction in order.', [
        'Short-video platforms have become the main news source for many teenagers.',
        'Several studies have examined their effect on attention span.',
        'However, little is known about how teenagers judge the reliability of what they see.',
        'This study therefore investigates how 14- to 16-year-olds evaluate news on these platforms.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'argues, claims, demonstrates',
    ref: [A, 8, 2],
    learn: [
      grammar(
        'Reporting verbs',
        'Neutral: states, notes, argues. Tentative source: suggests, implies. Source concedes: acknowledges, admits. Writer agrees: shows, demonstrates, establishes. Writer distances: claims, asserts, alleges.',
      ),
    ],
    test: [
      match('What does the verb signal?', [
        ['Morales demonstrates that …', 'The writer considers it proven.'],
        ['Morales claims that …', 'The writer doubts it.'],
        ['Morales argues that …', 'The writer only reports it.'],
        ['Morales acknowledges that …', 'Morales concedes a point.'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Reporting a source fairly',
    ref: [A, 8, 2],
    learn: [
      tip(
        'Keep the source’s certainty',
        'Quote only when the exact words matter; otherwise paraphrase or summarise – always with a citation. Integral citation: “Morales (2019) considers …”. Non-integral: “… (Morales, 2019)”. Keep the source’s level of certainty: “may” should not become “proves”.',
      ),
    ],
    test: [
      choice('The source says: “Our data indicate that remote work may slightly increase productivity.”', 'Which report is accurate?', [
        'Schulz (2022) proves that remote work increases productivity.',
        'Schulz (2022) claims that remote work makes people more productive.',
        '*Schulz (2022) suggests that remote work may slightly increase productivity.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Hedging and boosting',
    ref: [A, 8, 3],
    learn: [
      grammar(
        'Calibrating claims',
        'Hedges soften (may, appear to, tend to, arguably); boosters strengthen (clearly, undoubtedly). Too many hedges sound unsure; too many boosters sound like overselling. Limiting the scope (“in the sample studied”) is often the best hedge.',
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'The results [suggest] that younger participants [tend] to use digital media more. This is [likely] to be linked to smartphone ownership.',
        ['prove', 'always'],
      ),
      choice('200 students at one university; 70% prefer paper.', 'Which sentence is appropriately hedged?', [
        'Students prefer reading on paper.',
        '*In the sample studied, a clear majority preferred reading on paper.',
        'It could perhaps be the case that some students might possibly prefer paper.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Dangling modifiers and comma splices',
    ref: [A, 8, 4],
    learn: [
      grammar(
        'Errors examiners notice',
        'Dangling modifier: “Having analysed the data, the results were clear” (the results did not analyse anything). Comma splice: “The sample was small, the results are tentative.” Wordiness: “carry out an analysis of” → “analyse”; “due to the fact that” → “because”.',
      ),
    ],
    test: [
      choice('Which sentence is correct and concise?', 'Choose.', [
        'Having collected the questionnaires, the analysis began.',
        'The response rate was low, the findings are tentative.',
        '*The response rate was low, so the findings should be treated with caution.',
      ]),
      cloze(
        'Make it concise.',
        'We [analysed] the data [to] test the hypothesis. The effect was small [because] the sample was limited.',
        ['carried out', 'due to'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Paraphrase, not patchwriting',
    ref: [A, 8, 5],
    learn: [
      tip(
        'Summaries and abstracts',
        'An abstract states aim, method, main results and conclusion in 150–250 words. A good paraphrase changes structure as well as words, keeps the meaning and certainty, and is cited. Swapping synonyms into someone else’s sentence is patchwriting – and can count as plagiarism.',
      ),
    ],
    test: [
      order('Put the abstract in the usual order.', [
        'This study examines the use of voseo in Uruguayan advertising.',
        'A corpus of 300 television adverts was analysed.',
        'Voseo appeared in 92% of adverts aimed at young people.',
        'The findings suggest that voseo marks generational closeness.',
      ]),
    ],
  },

  // ------------------------------------------------ Chapter 9: Style and register
  {
    kind: 'VOCAB',
    title: 'Put off or postpone?',
    ref: [A, 9, 1],
    learn: [
      grammar(
        'Germanic and Latinate',
        'Short Germanic words and phrasal verbs sound informal; longer words of Latin or French origin sound formal – a legacy of the Norman Conquest. The Latinate word is not more correct, just more formal.',
        {
          headers: ['Informal', 'Neutral', 'Formal'],
          rows: [
            ['find out', 'learn', 'ascertain'],
            ['put off', 'delay', 'postpone'],
            ['get', 'receive', 'obtain'],
            ['look into', 'check', 'investigate'],
          ],
        },
      ),
    ],
    test: [
      match('Informal → formal', [
        ['put off', 'postpone'],
        ['find out', 'ascertain'],
        ['get in touch', 'contact'],
        ['sort out', 'resolve'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'The right register',
    ref: [A, 9, 1],
    learn: [
      tip(
        'Matching the situation',
        'A condolence card to a colleague calls for a formal but warm register – neither casual (“Sorry your dad kicked the bucket”) nor bureaucratic (“Please be advised of my condolences”).',
      ),
    ],
    test: [
      choice('A condolence card to a colleague whose father has died.', 'Which sentence is appropriate?', [
        'Heard your dad died. How are you holding up?',
        '*I was so sorry to hear about the loss of your father. My thoughts are with you.',
        'Please be advised of my condolences regarding the decease of your parent.',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Fancy a drink?',
    ref: [A, 9, 2],
    learn: [
      dialogue('Two flatmates in Manchester', [
        'Tom: All right? How was the exam?',
        'Mia: Don’t ask. Totally bombed it, I reckon.',
        'Tom: Seriously? It wasn’t that bad, was it?',
        'Mia: I was stuck on question one for like an hour. Anyway, whatever.',
        'Tom: Fancy going for a drink tonight?',
        'Mia: Go on then. Not too late though – got a nine o’clock tomorrow.',
      ]),
    ],
    test: [
      match('What does it mean?', [
        ['All right?', 'Hello, how are you?'],
        ['bombed it', 'did very badly'],
        ['I reckon', 'I think'],
        ['Go on then.', 'OK, you’ve persuaded me.'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Got a nine o’clock tomorrow',
    ref: [A, 9, 2],
    learn: [
      grammar(
        'Features of spoken English',
        'Ellipsis (dropping predictable words), tag questions, fillers (like, you know), vague language (and stuff) and contractions (gonna, wanna). Normal in speech and informal messages; out of place in an essay.',
      ),
    ],
    test: [
      match('Spoken → written', [
        ['Got a nine o’clock tomorrow.', 'I have a lecture at nine tomorrow.'],
        ['I was stuck for like an hour.', 'I was stuck for about an hour.'],
        ['books and stuff', 'books and similar materials'],
        ['I’m gonna call her.', 'I am going to call her.'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'I was wondering if you could …',
    ref: [A, 9, 3],
    learn: [
      grammar(
        'Softening requests',
        'English softens requests with the past tense and continuous (“I was wondering”), modal verbs (could, would, might) and minimisers (“just”, “a quick question”). A word-for-word translation of a polite German request can sound abrupt.',
      ),
    ],
    test: [
      order('From most direct to most indirect.', [
        'Close the window.',
        'Can you close the window?',
        'Could you close the window, please?',
        'Would you mind closing the window, if it’s not too much trouble?',
      ]),
      cloze(
        'Complete.',
        'I was [wondering] if you [could] help me. Would you [mind] sending me the figures?',
        ['wonder', 'can'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'That’s not bad',
    ref: [A, 9, 3],
    learn: [
      culture(
        'British understatement',
        'What the British say is often less than what they mean – a tendency, not a rule. “That’s not bad” = good. “I’ll bear it in mind” = probably not. “With the greatest respect …” = I think you are wrong. “It’s a bit of a problem” = it’s a serious problem.',
      ),
    ],
    test: [
      match('What is often meant?', [
        ['That’s not bad.', 'That’s good.'],
        ['I’ll bear it in mind.', 'I will probably not do it.'],
        ['With the greatest respect …', 'I think you are wrong.'],
        ['It’s a bit of a problem.', 'It’s a serious problem.'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Same message, different voices',
    ref: [A, 9, 4],
    learn: [
      text(
        'Formal: “We regret to inform you that, owing to an operational issue, your order will be delayed by approximately three working days.” Neutral: “Your order will arrive about three days late because of a problem at our warehouse.” Informal: “Hey, bad news – your stuff’s running late. Something went wrong at the warehouse. Really sorry!”',
      ),
    ],
    test: [
      match('Informal → formal', [
        ['There’s no way to get an appointment.', 'It is extremely difficult to obtain an appointment.'],
        ['My rent’s gone up loads.', 'My rent has increased considerably.'],
        ['The boss totally lost it.', 'The director reacted very angrily.'],
        ['Nobody can make head or tail of this.', 'The text is almost incomprehensible.'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Breaking the register',
    ref: [A, 9, 5],
    learn: [
      tip(
        'A deliberate shift',
        'A brief drop into informal language in a formal text sharpens criticism or creates intimacy. A rise into solemn language on a trivial subject creates humour – the basis of parody. It works because it is brief; a sustained mix looks careless.',
      ),
    ],
    test: [
      choice('A formal editorial on tax reform ends: “In short: same old story – the little guy pays.”', 'What is the effect?', [
        'It is a mistake: the writer failed to keep the register.',
        '*The informal ending condenses the criticism and creates complicity with the reader.',
        'It shows the writer supports the reform.',
      ]),
    ],
  },

  // ------------------------------------------------ Chapter 10: Idioms and nuance
  {
    kind: 'VOCAB',
    title: 'Spill the beans',
    ref: [A, 10, 1],
    learn: [
      words('Idioms', [
        ['to spill the beans', 'etwas ausplaudern'],
        ['to put your foot in it', 'ins Fettnäpfchen treten'],
        ['to be under the weather', 'angeschlagen sein'],
        ['to hit the nail on the head', 'den Nagel auf den Kopf treffen'],
        ['to beat around the bush', 'um den heißen Brei herumreden'],
        ['to turn a blind eye', 'ein Auge zudrücken'],
        ['a piece of cake', 'ein Kinderspiel'],
        ['the last straw', 'der Tropfen, der das Fass zum Überlaufen bringt'],
      ]),
    ],
    test: [
      match('Which idiom?', [
        ['You ask a colleague when her baby is due – she isn’t pregnant.', 'put your foot in it'],
        ['The teacher sees you copying and says nothing.', 'turn a blind eye'],
        ['You ask for the time and get a life story.', 'beat around the bush'],
        ['The exam was easy.', 'a piece of cake'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'An arm and a leg, not a foot',
    ref: [A, 10, 1],
    learn: [
      tip(
        'What is fixed',
        'The verb changes tense and possessives adapt (“I put my foot in it”), but nouns, prepositions and articles stay fixed: not “an arm and a foot”, not “the nail on its head”.',
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'Don’t spill the [beans]! You hit the [nail] on the head. The flat cost an arm and a [leg]. I’m a bit under the [weather] today.',
        ['peas', 'foot'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Make or do?',
    ref: [A, 10, 2],
    learn: [
      grammar(
        'Collocations with make, do, take, have',
        'Make a decision / a mistake / progress / an effort; do homework / research / someone a favour; take a photo / a break / responsibility; have a look / a shower / a go.',
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'She [made] the decision alone. She [did] a lot of research beforehand and [took] full responsibility. Shall we [have] a break?',
        ['did', 'made', 'had'],
      ),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Heavy rain, strong coffee',
    ref: [A, 10, 2],
    learn: [
      tip(
        'Adjective collocations',
        'Heavy rain, strong wind, strong coffee, heavy traffic, a high temperature, a big mistake. Everyone understands “strong rain” – but nobody says it.',
      ),
    ],
    test: [
      choice('Which sentence sounds natural?', 'Choose.', [
        'There was strong rain all night.',
        '*There was heavy rain all night.',
        'There was big rain all night.',
      ]),
      match('Which adjective?', [
        ['___ traffic', 'heavy'],
        ['___ coffee', 'strong'],
        ['___ temperature', 'high'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'A David and Goliath battle',
    ref: [A, 10, 3],
    learn: [
      culture(
        'Allusions',
        'Many everyday expressions come from the Bible, Shakespeare, myths and history: a good Samaritan, the green-eyed monster (jealousy, from Othello), an Achilles’ heel, opening Pandora’s box, crossing the Rubicon.',
      ),
    ],
    test: [
      match('What does it mean?', [
        ['Signing the contract was crossing the Rubicon.', 'There was no going back.'],
        ['Public speaking is his Achilles’ heel.', 'It is his one serious weakness.'],
        ['Changing the tax system would open Pandora’s box.', 'It would cause many unexpected problems.'],
        ['The team’s rise was a Cinderella story.', 'They went from unknown to successful.'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Well, that went well',
    ref: [A, 10, 4],
    learn: [
      grammar(
        'Irony',
        'Irony says the opposite of what is meant and relies on the situation to reveal it. Typical phrases: “Oh, brilliant”, “Well, that went well”, “Thanks a lot!”, “That’s all I needed.” In writing, the tone is missing, so irony is easily misunderstood.',
      ),
    ],
    test: [
      choice('Your colleague spills coffee on the boss’s keyboard on his first day: “Well, that went well.”', 'What does he mean?', [
        'He is pleased with how the day has started.',
        '*He means, ironically, that it went badly.',
        'He is asking whether it went well.',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Not exactly cheap',
    ref: [A, 10, 4],
    learn: [
      tip(
        'Understatement and litotes',
        'Saying less than you mean, or denying the opposite: “not bad” (good), “not exactly cheap” (expensive), “a bit of a disaster” (a total disaster), “not the most patient person” (very impatient).',
      ),
    ],
    test: [
      match('What is really meant?', [
        ['The situation is not ideal.', 'The situation is bad.'],
        ['He’s not the most talkative person.', 'He hardly speaks.'],
        ['Great, the battery’s dead.', 'This is annoying.'],
        ['Not bad, this cake!', 'This cake is really good.'],
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Thrifty or stingy?',
    ref: [A, 10, 5],
    learn: [
      grammar(
        'Connotation',
        'Same thing, different judgement: slim / thin / skinny; thrifty / careful with money / stingy; determined / firm / stubborn; curious / interested / nosy. Choosing the wrong one is not a grammar mistake, but it can be an insult. And use idioms sparingly: three in a paragraph sounds like showing off.',
      ),
    ],
    test: [
      match('Negative → positive', [
        ['stingy', 'thrifty'],
        ['stubborn', 'determined'],
        ['skinny', 'slim'],
        ['nosy', 'curious'],
      ]),
    ],
  },

  // ------------------------------------------------ Chapter 11: Debate and mediation
  {
    kind: 'VOCAB',
    title: 'Chairing a meeting',
    ref: [A, 11, 1],
    learn: [
      words('Meetings and debates', [
        ['chair / chairperson', 'Vorsitzende(r), Moderation'],
        ['agenda', 'Tagesordnung'],
        ['to give somebody the floor', 'jemandem das Wort erteilen'],
        ['to stick to the point', 'beim Thema bleiben'],
        ['impartial', 'unparteiisch'],
        ['common ground', 'gemeinsame Basis'],
        ['minutes', 'Protokoll'],
        ['heated', 'hitzig'],
      ]),
    ],
    test: [
      match('Which function?', [
        ['Mr Vidal, I’d remind you we’re talking about transport.', 'bringing the discussion back on track'],
        ['To start, each panellist has three minutes.', 'setting the rules'],
        ['So far, both sides agree on the problem.', 'summarising'],
        ['Dr Patel, over to you.', 'giving the floor'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Staying impartial',
    ref: [A, 11, 1],
    learn: [
      tip(
        'No judgements',
        'A good chair doesn’t win the debate; they make it possible. They don’t praise or criticise contributions and they ask open questions. “I” is kept for procedure: “I’m going to ask you to keep it brief.”',
      ),
    ],
    test: [
      choice('A panellist has just set out their position.', 'Which response is impartial?', [
        'Excellent point. Let’s see how Ms Ruiz can possibly answer that.',
        '*Thank you. Ms Ruiz, what’s your view?',
        'Thank you. Ms Ruiz, don’t you think that was a bit exaggerated?',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Sorry to interrupt',
    ref: [A, 11, 2],
    learn: [
      grammar(
        'Interrupting politely',
        'From gentle to firm: “You have about a minute left.” – “Could I ask you to start wrapping up?” – “Sorry to interrupt, but we’re running short of time.” – “I’m afraid I need to stop you there.” Justify by the rules, not by the content.',
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'Sorry to [interrupt], Ms Díaz. Could I ask you to start [wrapping] up? Let’s stick to the [point]. Mr Ortiz, the [floor] is yours.',
        ['stop', 'word'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Holding off an interruption',
    ref: [A, 11, 2],
    learn: [
      dialogue('A parents’ meeting', [
        'Mr Baker: … and the gym roof has been leaking for years, and last winter …',
        'Chair: Sorry to interrupt, Mr Baker. The gym is important, but tonight we’re focusing on after-school care. Could we put it on the agenda for next time?',
        'Mrs Young: Exactly, that’s not what we’re –',
        'Chair: Just a moment, Mrs Young – you’re next. Mr Baker, anything else on after-school care?',
      ]),
    ],
    test: [
      match('What is the chair doing?', [
        ['Could we put it on the agenda for next time?', 'acknowledging a point and postponing it'],
        ['Just a moment, Mrs Young – you’re next.', 'holding off an interruption'],
        ['Anything else on after-school care?', 'bringing the speaker back to the topic'],
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Argues, not insists',
    ref: [A, 11, 3],
    learn: [
      grammar(
        'Neutral summarising',
        'Loaded verbs (insists, claims, keeps going on about), loaded adjectives, order (the last word sounds like the answer) and unequal length reveal bias. Parallel structure – “X argues that …; Y, on the other hand, believes that …” – makes equal treatment visible.',
      ),
    ],
    test: [
      match('Loaded → neutral', [
        ['keeps going on about', 'repeatedly raises'],
        ['claims', 'states'],
        ['is forced to admit', 'acknowledges'],
        ['complains that', 'expresses concern that'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'She said the plan would work',
    ref: [G, 12, 3],
    learn: [
      grammar(
        'Reported speech in summaries',
        'After a past reporting verb, tenses usually shift back: present → past, will → would, past and present perfect → past perfect. Pronouns and time expressions change too: “tomorrow” → “the next day”.',
        {
          headers: ['Direct', 'Reported'],
          rows: [
            ['“The plan works.”', 'She said the plan worked.'],
            ['“It will be profitable.”', 'She said it would be profitable.'],
            ['“We have met the deadline.”', 'She said they had met the deadline.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete the minutes.',
        'The head teacher argued that the new timetable [would] improve results. The union said that nobody [had] been consulted. Parents said they [needed] more information.',
        ['will', 'has', 'need'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Positions and interests',
    ref: [A, 11, 4],
    learn: [
      grammar(
        'Mediation',
        'Positions are what people demand; interests are why. Active listening (“If I’ve understood correctly, what matters to you is …”), open questions, acknowledging feelings, naming common ground and hypothetical options (“What if …?”) move a dispute from positions to interests.',
      ),
    ],
    test: [
      choice('A tenant says angrily: “The guy upstairs is completely selfish! Music every night till two!”', 'What would a mediator say?', [
        'You’re right, he sounds completely selfish.',
        'Come on, it can’t be that bad.',
        '*I can see how frustrating that is. If I’ve understood correctly, what you need most is to be able to sleep at night.',
      ]),
      cloze(
        'Complete.',
        'It sounds as though you [both] want to stay on good terms. [What if] the music stopped at ten on weeknights?',
        ['all', 'Why not'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Raising a sensitive issue',
    ref: [A, 11, 4],
    learn: [
      tip(
        'Tact',
        'Prepare the ground (“There’s something I’d like to talk about, if now’s a good time”), describe behaviour rather than character, speak for yourself (“I’m finding it hard to plan when …”) and invite the other person’s view.',
      ),
    ],
    test: [
      match('Tactless → tactful', [
        ['You’re always late.', 'You’ve arrived after nine three times this week – is everything OK?'],
        ['Your report is a mess.', 'I found the report hard to follow in places. Could we go through it together?'],
        ['You never listen.', 'I don’t feel my point came across. Can I try again?'],
        ['We need to talk. Now.', 'Could we find a moment to talk, if now’s a good time?'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Taking the minutes',
    ref: [A, 11, 5],
    learn: [
      tip(
        'Who, what, by when',
        'Minutes record decisions (“It was agreed that …”), reported views (“Ms Weber said the costs were too high”), action points with names and deadlines, open questions and postponed items (“deferred to the next meeting”).',
      ),
    ],
    test: [
      order('Put the minutes in order.', [
        'Minutes of the parents’ meeting, 12 February. Present: 24 parents, head teacher.',
        'Item 1: The head teacher presented the plan for after-school care.',
        'Several parents pointed out that there were not enough staff.',
        'It was agreed to set up a working group. ACTION: Mrs Young, by 1 March.',
        'The condition of the gym was deferred to the next meeting.',
      ]),
    ],
  },

  // ------------------------------------------------ Chapter 12: Explaining science
  {
    kind: 'VOCAB',
    title: 'Explaining science',
    ref: [A, 12, 1],
    learn: [
      words('Science communication', [
        ['jargon', 'Fachjargon'],
        ['layperson', 'Laie'],
        ['target audience', 'Zielgruppe'],
        ['to simplify', 'vereinfachen'],
        ['to oversimplify', 'übermäßig vereinfachen'],
        ['to distort', 'verzerren'],
        ['accessible', 'verständlich'],
        ['the curse of knowledge', 'der Fluch des Wissens'],
      ]),
    ],
    test: [
      cloze(
        'Complete.',
        'Experts often forget what a [layperson] doesn’t know – the [curse of knowledge]. You may simplify, but you must not [distort] the facts.',
        ['jargon', 'accessible'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Simplifying, not oversimplifying',
    ref: [A, 12, 1],
    learn: [
      grammar(
        'Where the line is',
        'To simplify is to leave out detail without making what remains untrue. To oversimplify is to remove what made the claim true. “DNA contains the instructions for making proteins” simplifies; “DNA decides everything about who we are” oversimplifies.',
      ),
    ],
    test: [
      choice('Which sentence explains the greenhouse effect without distorting it?', 'Choose.', [
        'CO₂ forms a layer that covers the Earth like a glass roof.',
        '*Some gases let sunlight through but trap part of the heat the Earth gives off.',
        'The sun is hotter because of the hole in the ozone layer.',
      ]),
      match('Jargon → everyday English', [
        ['hypertension', 'high blood pressure'],
        ['prophylactic', 'preventive'],
        ['contraindication', 'a reason not to use a treatment'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'What doctors call resistance',
    ref: [A, 12, 2],
    learn: [
      grammar(
        'Introducing a technical term',
        'Apposition (“Mitochondria, the power stations of the cell, …”), reformulation (“in other words”, “that is”), functional definition (“Insulin helps sugar move into the cells”) and reversal: explain first, then name – “what doctors call antimicrobial resistance”.',
      ),
    ],
    test: [
      match('Which technique?', [
        ['Glaciers lose more ice than they gain, a process glaciologists call a negative mass balance.', 'reversal'],
        ['The placenta, the organ that connects mother and foetus, forms in pregnancy.', 'apposition'],
        ['The drug is an anticoagulant; that is, it stops blood from clotting.', 'reformulation'],
        ['Stomata allow the plant to exchange gases with the air.', 'functional definition'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'If the Earth were an apple',
    ref: [G, 11, 2],
    learn: [
      grammar(
        'The second conditional in comparisons',
        'Hypothetical comparisons use the past simple (or “were”) in the if-clause and “would” in the main clause: “If an atom were the size of a stadium, its nucleus would be a pea.” “Were” is preferred in formal writing for all persons.',
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'If the Earth [were] an apple, the atmosphere [would] be thinner than its skin. If the history of life [were] a single day, humans would appear only seconds before midnight.',
        ['is', 'will'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Just as a key fits its lock …',
    ref: [A, 12, 3],
    learn: [
      grammar(
        'Language for analogies',
        '“Works like” and “like” compare directly. “Imagine …” invites the reader to build the picture. “Just as …, so …” draws an explicit parallel. “To scale” signals a size comparison.',
        {
          headers: ['Phrase', 'Example'],
          rows: [
            ['works like', 'A computer’s memory works like a desk.'],
            ['Imagine …', 'Imagine each cell as a tiny factory.'],
            ['Just as …, so …', 'Just as a key fits only its lock, so a receptor recognises only one molecule.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        '[Imagine] each cell as a tiny factory. A computer’s memory works [like] a desk. [Just as] a key fits only its lock, so a receptor recognises only one molecule.',
        ['Suppose', 'As if'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Every analogy has its limits',
    ref: [A, 12, 3],
    learn: [
      tip(
        'Mark where it ends',
        'The immune system as an army explains defence but hides that the body lives with trillions of useful bacteria. One sentence is enough: “The comparison has its limits: …” or “Unlike a recipe book, DNA …”.',
      ),
    ],
    test: [
      match('Which analogy fits?', [
        ['a computer’s working memory', 'a desk: the bigger, the more you can work on at once'],
        ['a cell receptor and its molecule', 'a lock that only one key will open'],
        ['the expansion of the universe', 'a rising loaf of raisin bread'],
        ['antibiotic resistance', 'a pesticide that leaves only the toughest insects alive'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Three in ten thousand',
    ref: [A, 12, 4],
    learn: [
      grammar(
        'Numbers people can picture',
        'Compare with familiar units (Olympic swimming pools), bring numbers down to one person or one day, use natural frequencies (“3 in 10,000” instead of “0.03%”) and always pair relative risks (“50% higher”) with absolute ones (“from 2 to 3 in 10,000”).',
      ),
    ],
    test: [
      choice('A drug raises the risk of clots from 2 to 3 in every 10,000 women.', 'Which headline informs best?', [
        'Drug raises clot risk by 50%!',
        'Drug is completely safe.',
        '*Drug slightly raises clot risk: 3 cases instead of 2 in every 10,000 women.',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'We don’t yet know',
    ref: [A, 12, 4],
    learn: [
      tip(
        'Communicating uncertainty',
        'Well established: “We know that …”. Very likely: “The evidence strongly suggests …”. Preliminary: “Early studies indicate …, but this has yet to be confirmed.” Unknown: “We don’t yet know whether …”.',
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'We [know] that exercise protects the heart. The evidence [strongly] suggests that thirty minutes a day is enough. Early studies [indicate] that memory may also benefit.',
        ['think', 'prove'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Leaving out what doesn’t matter',
    ref: [A, 12, 5],
    learn: [
      tip(
        'The arc of a popular science piece',
        'Hook from everyday experience, question, mechanism with an analogy, a meaningful number, an open question, and an ending that returns to the start. Summarising means selecting, not shrinking everything proportionally.',
      ),
    ],
    test: [
      order('Put the text in order.', [
        'Have you ever wondered why the sea is salty but rivers aren’t?',
        'Rain dissolves tiny amounts of salt from rocks, and rivers carry it to the sea.',
        'The water evaporates but the salt stays behind – like the ring in a saucepan.',
        'Over millions of years, this has built up to about 35 grams per litre.',
        'So river water is slightly salty too – just too little to taste.',
      ]),
    ],
  },
]);
