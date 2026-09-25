import {
  INTERMEDIATE as I,
  GRAMMAR as G,
  choice,
  cloze,
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

/** Englisch B2 – Intermediate, Kapitel 7 bis 12, dazu Bedingungssätze, Passiv und indirekte Rede aus dem Grammatikbuch. */
export const EN_B2 = lessons('en-b2', [
  // ------------------------------------------------ Chapter 7: Society and politics
  {
    kind: 'GRAMMAR',
    title: 'Hedging',
    ref: [I, 7, 1],
    learn: [
      grammar(
        'Making claims carefully',
        'Careful claims are harder to attack. Use modals (may, might, could), tentative verbs (seem, tend to), impersonal structures (It could be argued that …) and softening adverbs (arguably, largely, to some extent).',
        {
          headers: ['direct', 'hedged'],
          rows: [
            ['This law will reduce crime.', 'This law may well reduce crime.'],
            ['Young people don’t vote.', 'Young people tend to vote less often.'],
            ['The policy has failed.', 'It could be argued that the policy has largely failed.'],
          ],
        },
      ),
    ],
    test: [
      choice('Choose the most carefully hedged version.', '“Social media destroys democracy.”', [
        'Social media totally destroys democracy.',
        '*Social media may, to some extent, weaken democratic debate.',
        'Social media is democracy.',
      ]),
      match('Match.', [
        ['modal verb', 'Taxes might rise.'],
        ['tentative verb', 'Prices tend to go up in winter.'],
        ['softening adverb', 'This is arguably the main problem.'],
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'policy or politics?',
    ref: [I, 7, 1],
    learn: [
      words('Society and politics', [
        ['policy', 'politische Maßnahme, Politik (inhaltlich)'],
        ['politics', 'Politik (als Bereich)'],
        ['election', 'Wahl'],
        ['citizen', 'Bürger/in'],
        ['inequality', 'Ungleichheit'],
        ['to tackle', 'angehen'],
        ['controversial', 'umstritten'],
      ]),
    ],
    test: [
      cloze(
        'Complete.',
        'She went into [politics] after university. The government’s new housing [policy] is very [controversial].',
        ['political', 'election'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Furthermore, nevertheless',
    ref: [I, 7, 2],
    learn: [
      grammar(
        'Formal linking words',
        'In formal writing, replace and/but/so with precise linkers at the start of a sentence, followed by a comma.',
        {
          headers: ['function', 'formal'],
          rows: [
            ['adding', 'Furthermore, Moreover, In addition'],
            ['contrast', 'However, Nevertheless, On the other hand'],
            ['result', 'As a result, Consequently, Therefore'],
          ],
        },
      ),
    ],
    test: [
      match('Match.', [
        ['Moreover', 'adding a point'],
        ['Consequently', 'showing a result'],
        ['Nevertheless', 'introducing a contrast'],
        ['For instance', 'giving an example'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'on the contrary ≠ on the other hand',
    ref: [I, 7, 2],
    learn: [
      tip(
        'Two kinds of contrast',
        '“on the other hand” compares two facts that are both true. “on the contrary” rejects the previous statement and says the opposite is true: “Is it expensive?” – “On the contrary, it’s very cheap.”',
      ),
    ],
    test: [
      choice('Choose.', '“Is the policy too expensive?” – “Not at all. ___, it will save money.”', [
        'On the other hand',
        '*On the contrary',
        'Furthermore',
      ]),
      choice('Choose.', 'The city is expensive. ___, salaries are high.', [
        '*On the other hand',
        'On the contrary',
        'As a result',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Concession',
    ref: [I, 7, 3],
    learn: [
      grammar(
        'Admitting a point',
        'even though / although + clause. despite / in spite of + noun or -ing (or “the fact that” + clause). Admittedly, … However, …',
      ),
    ],
    test: [
      choice('Choose.', 'Which sentence is correct?', [
        'Despite it rained, the demonstration went ahead.',
        '*Despite the rain, the demonstration went ahead.',
        'Even though the rain, the demonstration went ahead.',
      ]),
      order('Put the concession argument in order.', [
        'It is true that a four-day week could reduce output.',
        'However, rested employees work more efficiently.',
        'Therefore, the overall effect may well be positive.',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Managing a debate',
    ref: [I, 7, 4],
    learn: [
      words('Debate phrases', [
        ['If I could just come in here, …', 'Wenn ich kurz einhaken darf, …'],
        ['Could I just finish my point?', 'Darf ich kurz ausreden?'],
        ['That’s a fair point, but …', 'Das ist ein berechtigter Einwand, aber …'],
        ['With respect, …', 'Bei allem Respekt, …'],
        ['Coming back to …', 'Um auf … zurückzukommen'],
      ]),
    ],
    test: [
      match('Match.', [
        ['Someone interrupts you.', 'Could I just finish my point?'],
        ['You want to add something now.', 'If I could just come in here …'],
        ['Your opponent makes a good argument.', 'That’s a fair point, but …'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'What we need is …',
    ref: [I, 7, 4],
    learn: [
      grammar(
        'Cleft sentences',
        'To focus on a key idea, split the sentence: “We need better schools.” → “What we need is better schools.” / “It’s better schools that we need.”',
      ),
    ],
    test: [
      choice('Choose.', '“Interest matters, not age.” Put the focus on “interest”.', [
        '*It’s interest that matters, not age.',
        'What matters it is interest.',
        'Interest is what it matters.',
      ]),
      cloze('Complete.', '[What] worries me [is] the lack of trust.', ['That', 'are']),
    ],
  },
  {
    kind: 'TEXT',
    title: 'The argumentative essay',
    ref: [I, 7, 5],
    learn: [
      tip(
        'Structure',
        'Introduction (issue and why it matters) → body paragraphs with one idea each and a topic sentence → a fair paragraph on the other side → conclusion that weighs up and takes a hedged position. No new arguments in the conclusion.',
      ),
    ],
    test: [
      order('Put the parts in order.', [
        'Introduction',
        'Strongest argument',
        'Further argument',
        'The other side',
        'Conclusion',
      ]),
      choice('Choose.', 'What should a conclusion NOT do?', [
        'weigh up the arguments',
        'give a clear position',
        '*introduce a completely new argument',
      ]),
    ],
  },

  // ------------------------------------------------ Chapter 8: Business and economy
  {
    kind: 'GRAMMAR',
    title: 'Describing trends',
    ref: [I, 8, 1],
    learn: [
      grammar(
        'rise sharply – a sharp rise',
        'Verb + adverb or adjective + noun. Prepositions: by = size of change, to = new level, from … to = start and end. “rise” has no object; “raise” has one.',
      ),
    ],
    test: [
      choice('Choose.', 'Prices were £100 and are now £110.', [
        'Prices rose to 10%.',
        '*Prices rose by 10%.',
        'Prices raised by 10%.',
      ]),
      match('Match.', [
        ['rose sharply', 'a sharp rise'],
        ['fell slightly', 'a slight fall'],
        ['grew steadily', 'steady growth'],
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Business figures',
    ref: [I, 8, 1],
    learn: [
      words('Figures', [
        ['revenue / turnover', 'Umsatz'],
        ['profit / loss', 'Gewinn / Verlust'],
        ['demand', 'Nachfrage'],
        ['quarter', 'Quartal'],
        ['to reach a peak', 'einen Höchststand erreichen'],
        ['billion', 'Milliarde'],
      ]),
      tip(
        'billion ≠ Billion',
        'English “a billion” = eine Milliarde. German “eine Billion” = a trillion. English writes 6,300,000 and 6.3.',
      ),
    ],
    test: [
      choice('Choose.', 'German “zwei Milliarden Euro” is …', [
        'two trillion euros',
        '*two billion euros',
        'two millions euros',
      ]),
      cloze('Complete.', 'Revenue increased [by] 12% [to] £6.3 million.', ['at', 'of']),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Tentative language',
    ref: [I, 8, 2],
    learn: [
      grammar(
        'Negotiating diplomatically',
        'Use would/could/might, past forms with present meaning (“we were hoping for”) and softeners (a little, slightly). Link offers to conditions: if, provided that, as long as.',
        {
          headers: ['direct', 'tentative'],
          rows: [
            ['We want a discount.', 'We were wondering if you could offer a discount.'],
            ['That’s too expensive.', 'That’s a little more than we were expecting.'],
            ['Give us 12%.', 'Would you consider 12%?'],
          ],
        },
      ),
    ],
    test: [
      choice(
        'Choose the most diplomatic reply.',
        'The supplier offers 5%. You think it is far too low.',
        [
          '5%? That’s ridiculous.',
          '*That’s a little lower than we were hoping for. Is there any flexibility?',
          'We want 15%, or we go somewhere else.',
        ],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'A negotiation',
    ref: [I, 8, 2],
    learn: [
      dialogue('Negotiating with a rail company', [
        'Sophie: What sort of discount would you be able to offer?',
        'Mr Lang: For that volume, we could offer 8%.',
        'Sophie: Would you consider 12% if we committed to a two-year contract?',
        'Mr Lang: Twelve would be difficult. But if you paid in advance, we might go to 10%.',
        'Sophie: I think we could work with that, provided that the tickets are fully flexible.',
      ]),
    ],
    test: [
      choice('Choose.', 'What is the final discount?', ['8%', '*10%', '12%']),
      choice('Choose.', 'What is Sophie’s condition?', [
        'a two-year contract',
        '*fully flexible tickets',
        'payment after the trip',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'provided that, as long as',
    ref: [I, 8, 2],
    learn: [
      grammar(
        'Linking offers to conditions',
        '“provided (that)”, “as long as” and “on condition that” mean “only if”. A second conditional sounds softer than a first: “If you paid in advance, we could offer 10%.”',
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'We can offer 10%, [provided] that you pay in advance. If you [signed] a two-year contract, we could go to 12%.',
        ['unless', 'will sign'],
      ),
      choice('Choose the softer offer.', 'Which sounds less pushy?', [
        'If you pay now, we will give you 10%.',
        '*If you paid now, we could give you 10%.',
        'Pay now and get 10%.',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Signposting a presentation',
    ref: [I, 8, 3],
    learn: [
      words('Presentations', [
        ['I’ve divided my talk into …', 'Ich habe meinen Vortrag in … gegliedert'],
        ['Let’s move on to …', 'Kommen wir zu …'],
        ['That brings me to …', 'Damit komme ich zu …'],
        ['As you can see on this slide, …', 'Wie Sie auf dieser Folie sehen, …'],
        ['To sum up, …', 'Zusammenfassend …'],
      ]),
    ],
    test: [
      order('Put the signposts in order.', [
        'Today I’d like to talk about …',
        'I’ve divided my presentation into three parts.',
        'That brings me to my second point.',
        'To sum up, …',
        'I’m happy to take any questions.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Sales are expected to rise',
    ref: [I, 8, 4],
    learn: [
      grammar(
        'Passive reporting structures',
        'It is expected that sales will rise. = Sales are expected to rise. Past: The firm is said to have lost £2m. Now: Airlines are reported to be planning cuts.',
      ),
    ],
    test: [
      cloze('Complete.', 'Demand is expected [to rise]. The firm is reported [to have lost] £2m.', [
        'rising',
        'to lose',
      ]),
      choice('Choose.', 'Which sentence is correct?', [
        'The minister is thought that he will resign.',
        'It thinks that the minister will resign.',
        '*It is thought that the minister will resign.',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Writing a report',
    ref: [I, 8, 5],
    learn: [
      tip(
        'Report structure',
        'A report helps a reader decide. It has a title and headings (Introduction, Findings, Recommendations), is neutral and impersonal, and gives facts before opinions. Recommendations: should, it is recommended that, we suggest.',
      ),
    ],
    test: [
      match('Which section?', [
        ['The aim of this report is to …', 'Introduction'],
        ['Bookings rose by 94%.', 'Findings'],
        ['It is recommended that …', 'Recommendations'],
      ]),
    ],
  },

  // ------------------------------------------------ Chapter 9: What if?
  {
    kind: 'GRAMMAR',
    title: 'If I won the lottery',
    ref: [I, 9, 1],
    learn: [
      grammar(
        'Second conditional',
        'if + past simple, would + verb for imaginary or unlikely situations. Never “would” in the if-clause. “If I were you, I’d …” for advice.',
      ),
    ],
    test: [
      choice('Choose.', '“Wenn ich mehr Zeit hätte, würde ich reisen.”', [
        'If I would have more time, I would travel.',
        '*If I had more time, I would travel.',
        'If I have more time, I would travel.',
      ]),
      cloze('Complete.', 'If I [were] you, I [wouldn’t] sign that contract.', ['am', 'won’t']),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Real or imaginary?',
    ref: [I, 9, 1],
    learn: [
      tip(
        'First or second conditional?',
        '“If I get the job, I’ll move.” = it’s possible. “If I got the job, I’d move.” = unlikely, or just imagining.',
      ),
    ],
    test: [
      match('Match.', [
        ['If it rains tomorrow, we’ll stay in.', 'a real possibility'],
        ['If I had wings, I’d fly to work.', 'an impossible situation'],
        ['If I were you, I’d apologise.', 'advice'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'If I had known …',
    ref: [I, 9, 2],
    learn: [
      grammar(
        'Third conditional',
        'if + past perfect, would have + past participle – an imagined different past. Often for regret or criticism. Write “would have”, never “would of”.',
      ),
    ],
    test: [
      choice('Choose.', '“Wenn du angerufen hättest, hätte ich dich abgeholt.”', [
        'If you would have called, I would have picked you up.',
        '*If you had called, I would have picked you up.',
        'If you called, I had picked you up.',
      ]),
      choice(
        'Choose the meaning.',
        '“If I had known about the strike, I would have taken the bus.”',
        [
          'I knew and took the bus.',
          '*I didn’t know and didn’t take the bus.',
          'I will take the bus if there is a strike.',
        ],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Sliding doors',
    ref: [I, 9, 2],
    learn: [
      text(
        'Sophie: “Five years ago I almost didn’t go to a party. If I had stayed at home, I wouldn’t have met Priya’s cousin. If she hadn’t mentioned Greenleaf Travel, I would never have applied – and I wouldn’t have discovered how much I love London.”',
      ),
    ],
    test: [
      order('Put the real events in order.', [
        'Sophie went to a party.',
        'She met Priya’s cousin.',
        'She heard about Greenleaf Travel.',
        'She applied and moved to London.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Mixed conditionals',
    ref: [I, 9, 3],
    learn: [
      grammar(
        'Past and present together',
        'Past condition → present result: if + past perfect, would + verb (“If I had studied medicine, I would be a doctor now.”). Present condition → past result: if + past simple, would have + p.p.',
      ),
    ],
    test: [
      choice('Choose.', 'You didn’t sleep last night. Now you are tired.', [
        '*If I had slept last night, I wouldn’t be so tired now.',
        'If I slept last night, I wouldn’t have been tired now.',
        'If I would sleep last night, I’m not tired now.',
      ]),
      match('Match.', [
        ['If I had saved more money,', 'I could afford a car now.'],
        ['If she weren’t allergic to cats,', 'she would have adopted the kitten.'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'I wish I had …',
    ref: [I, 9, 4],
    learn: [
      grammar(
        'wish and if only',
        'Present: wish + past simple. Past regret: wish + past perfect. Ability: wish + could. Annoyance: wish + would. For a real future chance, use “hope”.',
      ),
    ],
    test: [
      choice('Choose.', 'You didn’t study and failed the exam.', [
        'I wish I studied more.',
        '*I wish I had studied more.',
        'I wish I would study more.',
      ]),
      choice('Choose.', 'Your friend has an interview tomorrow.', [
        'I wish you get the job.',
        '*I hope you get the job.',
        'I wish you got the job.',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Writing hypothetically',
    ref: [I, 9, 5],
    learn: [
      tip(
        'Stay in the imagined world',
        'Set up the situation with “if”, then continue with “would” alone. Use “might” or “could” for less certain results, and third or mixed conditionals for how the past would have been different.',
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'If cars [had] never been invented, cities [would] look very different today, and many industries would never [have] developed.',
        ['will', 'has'],
      ),
    ],
  },

  // ------------------------------------------------ Chapter 10: Science and technology
  {
    kind: 'GRAMMAR',
    title: 'The passive in every tense',
    ref: [I, 10, 1],
    learn: [
      grammar(
        'be + past participle',
        'is made – is being developed – was broken – has been tested – will be replaced – can be recycled.',
      ),
    ],
    test: [
      choice('Choose.', 'Workers are building the bridge right now.', [
        'The bridge is built.',
        '*The bridge is being built.',
        'The bridge has built.',
      ]),
      cloze(
        'Complete.',
        'The glass has [been] tested many times. New types are [being] developed.',
        ['be'],
      ),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'become ≠ bekommen',
    ref: [I, 10, 1],
    learn: [
      words('Science and technology', [
        ['research', 'Forschung'],
        ['to develop', 'entwickeln'],
        ['device', 'Gerät'],
        ['breakthrough', 'Durchbruch'],
        ['to replace', 'ersetzen'],
        ['to become', 'werden'],
        ['to get / receive', 'bekommen'],
      ]),
    ],
    test: [
      choice('Choose.', '“Ich habe gestern die Ergebnisse bekommen.”', [
        'I became the results yesterday.',
        '*I got the results yesterday.',
        'I have become the results yesterday.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'have something done',
    ref: [I, 10, 2],
    learn: [
      grammar(
        'etwas machen lassen',
        'have + object + past participle: “I’m having my phone repaired.” “get” is more informal. Careful: “I had my hair cut” ≠ “I had cut my hair”.',
      ),
    ],
    test: [
      choice('Choose.', '“Ich lasse mein Auto waschen.”', [
        'I let my car wash.',
        '*I’m having my car washed.',
        'I have washed my car.',
      ]),
      match('Where?', [
        ['have your eyes tested', 'at the optician’s'],
        ['have your hair cut', 'at the hairdresser’s'],
        ['have your car serviced', 'at the garage'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Participle clauses',
    ref: [I, 10, 3],
    learn: [
      grammar(
        'Shorter relative clauses',
        'Active → -ing: “drivers who are looking” → “drivers looking”. Passive → past participle: “data which is collected” → “data collected”. “Having + p.p.” = after doing something.',
      ),
    ],
    test: [
      choice('Choose.', '“The report which was published yesterday shows …”', [
        'The report publishing yesterday shows …',
        '*The report published yesterday shows …',
        'The report having published yesterday shows …',
      ]),
      match('Match.', [
        ['students who are studying abroad', 'students studying abroad'],
        ['cars which are made in Germany', 'cars made in Germany'],
        ['After she had finished, she …', 'Having finished, she …'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Smart cities',
    ref: [I, 10, 3],
    learn: [
      text(
        'Many cities now use sensors installed in streets and buildings. Data collected by these sensors helps to control traffic lights and street lighting. Drivers looking for a parking space can see free spaces on an app. Having analysed the data, one city reduced its energy use for street lighting by 30%. However, critics worried about privacy say the same technology could be used to follow people.',
      ),
    ],
    test: [
      choice('Choose.', 'What did one city achieve?', [
        '*30% less energy for street lighting',
        '30% less traffic',
        '30% more parking spaces',
      ]),
      choice('Choose.', 'What are critics worried about?', [
        'the cost',
        '*privacy',
        'broken sensors',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'By 2040, we will have …',
    ref: [I, 10, 4],
    learn: [
      grammar(
        'Future continuous and future perfect',
        'will be + -ing = in progress at a future time (“At 9 tomorrow I’ll be sitting in a meeting.”). will have + p.p. = finished before a future time (“By Friday I’ll have finished.”).',
      ),
    ],
    test: [
      choice('Choose.', '“Don’t call me at eight – I ___ dinner then.”', [
        'will have had',
        '*will be having',
        'have',
      ]),
      cloze(
        'Complete.',
        'By Friday I will [have] finished the report. This time next year we’ll [be] testing the buses.',
        ['had', 'being'],
      ),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'How likely is it?',
    ref: [I, 10, 4],
    learn: [
      tip(
        'Degrees of certainty',
        'will definitely → will probably → is likely to → may well → is unlikely to. The adverb goes after “will” but before “won’t”: “It will probably rain.” – “It probably won’t rain.”',
      ),
    ],
    test: [
      order('Order from most certain to least certain.', [
        'will definitely happen',
        'will probably happen',
        'may well happen',
        'is unlikely to happen',
      ]),
      choice('Choose.', 'Which sentence is correct?', [
        'It won’t probably rain.',
        '*It probably won’t rain.',
        'It will not probably rain.',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Can AI help doctors?',
    ref: [I, 10, 5],
    learn: [
      text(
        'AI systems trained on millions of images have detected certain cancers as accurately as experienced doctors. However, they are only as good as their training data, and it is unclear who is responsible when a mistake is made. Most experts agree that AI is unlikely to replace doctors; instead, many doctors will probably be working with AI as a second opinion.',
      ),
    ],
    test: [
      choice('Choose.', 'What do most experts predict?', [
        'AI will replace doctors.',
        '*Doctors will use AI as a second opinion.',
        'AI will be banned from hospitals.',
      ]),
      choice('Choose.', 'Which risk does the text mention?', [
        'AI is too expensive.',
        '*Unclear responsibility for mistakes.',
        'Patients refuse AI.',
      ]),
    ],
  },

  // ------------------------------------------------ Chapter 11: Arts and culture
  {
    kind: 'GRAMMAR',
    title: 'very good – absolutely brilliant',
    ref: [I, 11, 1],
    learn: [
      grammar(
        'Gradable and extreme adjectives',
        'very / extremely + normal adjectives (good, bad, big). absolutely + extreme adjectives (brilliant, awful, huge). Not “very brilliant”. “really” works with both.',
      ),
    ],
    test: [
      choice('Choose.', 'Which sentence is correct?', [
        'The concert was very fantastic.',
        '*The concert was absolutely fantastic.',
        'The concert was absolutely good.',
      ]),
      match('Match.', [
        ['very interesting', 'fascinating'],
        ['very bad', 'awful'],
        ['very tired', 'exhausted'],
        ['very big', 'enormous'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Compound adjectives',
    ref: [I, 11, 2],
    learn: [
      grammar(
        'well-written, two-hour',
        'Compound adjectives have a hyphen and go before the noun: well-written, slow-moving, thought-provoking, strong-willed. With numbers, the noun stays singular: a two-hour film.',
      ),
    ],
    test: [
      choice('Choose.', 'The walk takes three hours.', [
        'a three-hours walk',
        '*a three-hour walk',
        'a three hour’s walk',
      ]),
      cloze('Complete.', 'This [award-winning] novel is by a [well-known] author.', [
        'two-hour',
        'slow-moving',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Words for reviews',
    ref: [I, 11, 2],
    learn: [
      words('Reviews', [
        ['plot', 'Handlung'],
        ['performance', 'schauspielerische Leistung'],
        ['to be set in', 'spielen in'],
        ['cast', 'Besetzung'],
        ['moving', 'bewegend'],
        ['predictable', 'vorhersehbar'],
        ['outstanding', 'herausragend'],
      ]),
    ],
    test: [
      match('Match.', [
        ['plot', 'what happens in the story'],
        ['cast', 'all the actors'],
        ['predictable', 'you know what will happen'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'must have, might have, can’t have',
    ref: [I, 11, 3],
    learn: [
      grammar(
        'Guessing about the past',
        'must have + p.p. = I’m sure it happened. might / may / could have = possible. can’t have = I’m sure it didn’t happen. (Not “mustn’t have”.)',
      ),
    ],
    test: [
      choice('Choose.', 'Anna’s light was on all night and she looks exhausted.', [
        '*She can’t have slept much.',
        'She must have slept very well.',
        'She mustn’t have slept.',
      ]),
      match('Match.', [
        ['The streets are wet.', 'It must have rained.'],
        ['Tom isn’t answering.', 'He might have left his phone at home.'],
        ['Priya was in Paris yesterday.', 'She can’t have been at the London meeting.'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'should have',
    ref: [I, 11, 3],
    learn: [
      tip(
        'Criticism and regret',
        '“should have + p.p.” = it would have been right, but it didn’t happen: “You should have told me!” “shouldn’t have” = it was a mistake: “I shouldn’t have eaten so much.”',
      ),
    ],
    test: [
      choice('Choose.', 'You didn’t bring a coat and now you are cold.', [
        '*I should have brought a coat.',
        'I must have brought a coat.',
        'I should bring a coat yesterday.',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Describing a painting',
    ref: [I, 11, 4],
    learn: [
      words('Art', [
        ['in the foreground', 'im Vordergrund'],
        ['in the background', 'im Hintergrund'],
        ['to draw the viewer’s eye', 'den Blick auf sich ziehen'],
        ['It seems to suggest …', 'Es scheint anzudeuten …'],
        ['It could be interpreted as …', 'Man könnte es deuten als …'],
      ]),
    ],
    test: [
      cloze(
        'Complete.',
        'In the [foreground] there is a woman; in the [background] there is a crowd. The painting [seems] to be about waiting.',
        ['middle', 'is'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Structure of a review',
    ref: [I, 11, 5],
    learn: [
      tip(
        'Informing and evaluating',
        'Basic facts and a hook → short summary (no spoilers) → strengths → weaknesses → recommendation. Use precise adjectives and concrete examples.',
      ),
    ],
    test: [
      match('Match.', [
        ['Set in 1920s Berlin, the novel …', 'giving basic facts'],
        ['What really stands out is …', 'praising a strength'],
        ['My only criticism is that …', 'mentioning a weakness'],
        ['I’d highly recommend it to …', 'recommending'],
      ]),
    ],
  },

  // ------------------------------------------------ Chapter 12: Identity
  {
    kind: 'VOCAB',
    title: 'Identity and migration',
    ref: [I, 12, 1],
    learn: [
      words('Identity', [
        ['to belong (to)', 'dazugehören'],
        ['heritage', 'kulturelles Erbe'],
        ['to fit in', 'sich einfügen'],
        ['to settle in', 'sich einleben'],
        ['homesick', 'heimwehkrank'],
        ['citizenship', 'Staatsbürgerschaft'],
        ['bilingual', 'zweisprachig'],
      ]),
      tip('emigrate or immigrate?', 'You emigrate FROM a country and immigrate TO a country.'),
    ],
    test: [
      match('Match.', [
        ['homesick', 'missing the place you come from'],
        ['heritage', 'culture from your family’s past'],
        ['bilingual', 'speaking two languages'],
      ]),
      choice('Choose.', 'Marta left Poland in 2013. She …', [
        '*emigrated from Poland.',
        'immigrated from Poland.',
        'emigrated to Poland.',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Where is home?',
    ref: [I, 12, 1],
    learn: [
      text(
        'Marta moved from Poland to Bristol twelve years ago: “For a long time I felt I didn’t fully belong anywhere. Now I think I belong to both places.” Kwame, born in London to Ghanaian parents: “My parents still call Ghana ‘home’. For me, home is London – but I’m proud of my heritage.”',
      ),
    ],
    test: [
      choice('Choose.', 'How does Marta feel now?', [
        'She doesn’t belong anywhere.',
        '*She belongs to both places.',
        'She wants to go back to Poland.',
      ]),
      choice('Choose.', 'What do Kwame’s parents call “home”?', ['London', '*Ghana', 'Bristol']),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Reporting verbs',
    ref: [I, 12, 2],
    learn: [
      grammar(
        'Each verb has its pattern',
        '+ -ing: admit, deny, suggest, recommend. + to: agree, promise, refuse, claim, offer. + person + to: tell, ask, warn, advise, encourage. “suggest” is never followed by “to”.',
      ),
    ],
    test: [
      choice('Choose.', '“Let’s take a break,” said Ben.', [
        'Ben suggested to take a break.',
        '*Ben suggested taking a break.',
        'Ben suggested us to take a break.',
      ]),
      match('Match.', [
        ['“Yes, I broke the vase.”', 'He admitted breaking the vase.'],
        ['“I didn’t take the money!”', 'She denied taking the money.'],
        ['“I’ll call you tomorrow.”', 'He promised to call me.'],
        ['“Don’t touch the wire!”', 'She warned us not to touch it.'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Reported questions',
    ref: [I, 12, 3],
    learn: [
      grammar(
        'Statement word order',
        'No do/does/did, no question mark, subject before verb. Yes/no questions: if / whether. Commands: tell/ask + person + (not) to.',
      ),
    ],
    test: [
      choice('Choose.', 'Direct: “Where do you work?”', [
        'He asked me where did I work.',
        '*He asked me where I worked.',
        'He asked me where do I work?',
      ]),
      cloze(
        'Complete.',
        'She wanted to know [whether] I had another citizenship. She asked me [to] sign and told me [not] to forget my passport.',
        ['that', 'for'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Polite indirect questions',
    ref: [I, 12, 3],
    learn: [
      tip(
        'Could you tell me …?',
        'Polite questions use the same word order: “Could you tell me where the station is?”, “Do you know if the office is open?”',
      ),
    ],
    test: [
      choice('Choose.', 'You want to know when the next train leaves.', [
        'Could you tell me when does the next train leave?',
        '*Could you tell me when the next train leaves?',
        'Could you tell me when leaves the next train?',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'used to – be used to – get used to',
    ref: [I, 12, 4],
    learn: [
      grammar(
        'Three structures',
        'used to + verb = früher. be used to + -ing/noun = gewohnt sein. get used to + -ing/noun = sich gewöhnen an. In the last two, “to” is a preposition → -ing.',
        {
          headers: ['structure', 'example'],
          rows: [
            ['used to + verb', 'I used to hate the rain.'],
            ['be used to + -ing', 'I’m used to getting wet.'],
            ['get used to + -ing', 'I’m getting used to making small talk.'],
          ],
        },
      ),
    ],
    test: [
      choice('Choose.', '“Ich bin es gewohnt, früh aufzustehen.”', [
        'I used to get up early.',
        '*I’m used to getting up early.',
        'I’m used to get up early.',
      ]),
      match('Match.', [
        ['I used to drive on the right.', 'That was my habit in the past.'],
        ['I’m used to driving on the left.', 'It feels normal to me now.'],
        ['I’m getting used to driving on the left.', 'It’s becoming easier.'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Summary and response',
    ref: [I, 12, 5],
    learn: [
      tip(
        'Two separate parts',
        'Summary: the author’s main points, neutral, with reporting verbs (The author argues / points out / concludes that …). Response: your own view, supported by examples (I strongly agree that … / However, I am less convinced that …).',
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'The author [explains] that bilingual people feel different in each language. She [points out] that many children lose their heritage language.',
        ['says me', 'tells'],
      ),
      choice('Choose.', 'Where does your own opinion belong?', [
        'in the summary',
        '*in the response',
        'in both',
      ]),
    ],
  },

  // ------------------------------------------------ Grammar book
  {
    kind: 'GRAMMAR',
    title: 'in case ≠ if',
    ref: [G, 11, 1],
    learn: [
      grammar(
        'Precaution',
        '“Take an umbrella in case it rains.” = take it now, because it might rain. “Take an umbrella if it rains.” = only when it is raining. Time words (when, as soon as, until) also take the present, not “will”.',
      ),
    ],
    test: [
      choice('Choose.', 'Write down my number ___ you get lost.', ['if', '*in case', 'unless']),
      choice('Choose.', 'Which sentence is correct?', [
        'I’ll call you as soon as I will arrive.',
        '*I’ll call you as soon as I arrive.',
        'I call you as soon as I will arrive.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'No “würde” in the if-clause',
    ref: [G, 11, 2],
    learn: [
      grammar(
        'würde → would only once',
        'German often says “würde” in both parts: “Wenn er fragen würde, würde ich helfen.” English uses “would” only in the result: “If he asked, I would help.”',
      ),
    ],
    test: [
      choice('Choose.', '“Wenn sie mich fragen würde, würde ich helfen.”', [
        'If she would ask me, I would help.',
        '*If she asked me, I would help.',
        'If she asks me, I would help.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: '’d = had or would?',
    ref: [G, 11, 3],
    learn: [
      tip(
        'Look at the next word',
        'Before a past participle, ’d = had: “If I’d seen him …”. Before a basic form or “have”, ’d = would: “I’d have said hello.”, “I’d go.”',
      ),
    ],
    test: [
      choice('Choose.', '“If I’d seen him, I’d have said hello.”', [
        'If I would seen him, I had have said hello.',
        '*If I had seen him, I would have said hello.',
        'If I had seen him, I had have said hello.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: '“wird gebaut” = is being built',
    ref: [G, 12, 1],
    learn: [
      grammar(
        'werden → be',
        'German forms the passive with “werden”, English with “be”. “Das Museum wird gerade renoviert.” = “The museum is being renovated.” Never “will renovated”.',
      ),
    ],
    test: [
      choice('Choose.', '“Das Museum wird gerade renoviert.”', [
        'The museum will renovated.',
        '*The museum is being renovated.',
        'The museum is renovating.',
      ]),
      cloze(
        'Complete.',
        'All the tickets have [been] sold. The results will [be] published next week.',
        ['being', 'was'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'He is said to be rich',
    ref: [G, 12, 2],
    learn: [
      grammar(
        'Er soll reich sein.',
        '“sollen” for rumours = be said to / be believed to: “He is said to be rich.” Past: “She is believed to have left the country.”',
      ),
    ],
    test: [
      choice('Choose.', '“Das Schloss soll verflucht sein.”', [
        'The castle should be haunted.',
        '*The castle is said to be haunted.',
        'The castle says to be haunted.',
      ]),
      cloze('Complete.', 'She is believed [to have left] the country last year.', [
        'to leave',
        'having left',
      ]),
    ],
  },
]);
