import {
  INTERMEDIATE as I,
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

/** Englisch B1 – Intermediate, Kapitel 1 bis 6, dazu Present Perfect und Modalverben aus dem Grammatikbuch. */
export const EN_B1 = lessons('en-b1', [
  // ------------------------------------------------ Chapter 1: The world of work
  {
    kind: 'VOCAB',
    title: 'Job adverts',
    ref: [I, 1, 1],
    learn: [
      words('Job adverts', [
        ['vacancy', 'offene Stelle'],
        ['to apply (for)', 'sich bewerben (um)'],
        ['full-time / part-time', 'Vollzeit / Teilzeit'],
        ['permanent / temporary', 'unbefristet / befristet'],
        ['requirements', 'Anforderungen'],
        ['experience', 'Erfahrung'],
        ['salary', 'Gehalt'],
        ['CV', 'Lebenslauf'],
        ['covering letter', 'Anschreiben'],
      ]),
    ],
    test: [
      match('Match.', [
        ['permanent', 'with no end date'],
        ['requirements', 'what you need to have'],
        ['an advantage', 'useful, but not necessary'],
      ]),
      cloze('Complete.', 'I’d like to [apply] for the job. Please find my [CV] attached.', [
        'salary',
        'vacancy',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'A British CV',
    ref: [I, 1, 1],
    learn: [
      culture(
        'CV and covering letter',
        'A British CV is usually two pages long and has no photo, no date of birth and no signature – employers must not choose people by age or appearance. The covering letter explains in three or four short paragraphs why you want the job.',
      ),
    ],
    test: [
      choice('Choose.', 'What should you NOT put on a British CV?', [
        'your work experience',
        '*a photo of yourself',
        'the languages you speak',
      ]),
      choice('Choose.', 'How long is a typical British CV?', [
        '*about two pages',
        'one line',
        'ten pages',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Have you ever …?',
    ref: [I, 1, 2],
    learn: [
      grammar(
        'Present perfect for experience',
        'have/has + past participle for experiences at some time up to now – without saying when. “ever” in questions, “never” in negatives.',
        {
          headers: ['', 'example'],
          rows: [
            ['+', 'I’ve worked in marketing.'],
            ['–', 'She’s never lived abroad.'],
            ['?', 'Have you ever managed a team?'],
          ],
        },
      ),
    ],
    test: [
      match('Match the verb with its past participle.', [
        ['write', 'written'],
        ['be', 'been'],
        ['do', 'done'],
        ['speak', 'spoken'],
      ]),
      order('Make the question.', ['Have', 'you', 'ever', 'worked', 'abroad?']),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Present perfect or past simple?',
    ref: [I, 1, 2],
    learn: [
      grammar(
        'When? → past simple',
        'As soon as you say or ask when – yesterday, in 2019, when I was a student – use the past simple. The present perfect is only for “at some time up to now”.',
        {
          headers: ['present perfect', 'past simple'],
          rows: [
            ['I’ve been to Dublin.', 'I went to Dublin in 2018.'],
            ['Have you ever managed a team?', 'When did you manage the team?'],
          ],
        },
      ),
    ],
    test: [
      choice('Choose.', 'Which sentence is correct?', [
        'I have finished my degree in 2020.',
        '*I finished my degree in 2020.',
        'I have finish my degree in 2020.',
      ]),
      cloze('Complete.', 'Have you ever [been] to London? – Yes, I [went] there last summer.', [
        'gone',
        'go',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'for and since',
    ref: [I, 1, 3],
    learn: [
      grammar(
        'seit = for / since',
        'German uses the present for “seit”: “Ich arbeite seit 2021 hier.” English needs the present perfect: “I’ve worked here since 2021.” for + period, since + point in time.',
        {
          headers: ['for', 'since'],
          rows: [
            ['for three years', 'since 2023'],
            ['for two weeks', 'since last Monday'],
            ['for ages', 'since I left school'],
          ],
        },
      ),
    ],
    test: [
      choice('Choose.', '“Ich wohne seit drei Jahren in London.”', [
        'I live in London since three years.',
        '*I’ve lived in London for three years.',
        'I’ve lived in London since three years.',
      ]),
      cloze('Complete.', 'Ben has been here [since] 2021. Priya has worked in HR [for] ten years.'),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'How long have you been …?',
    ref: [I, 1, 3],
    learn: [
      grammar(
        'have been + -ing',
        'With action verbs, the present perfect continuous stresses the whole time up to now: “I’ve been learning English for six years.” State verbs stay simple: “I’ve known her since school.”',
      ),
    ],
    test: [
      order('Make the question.', ['How long', 'have', 'you', 'been learning', 'English?']),
      choice('Choose.', 'Which sentence is correct?', [
        'I’ve been knowing Ben for a year.',
        '*I’ve known Ben for a year.',
        'I know Ben since a year.',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Formal emails',
    ref: [I, 1, 4],
    learn: [
      grammar(
        'Formal phrases',
        'Formal emails use full forms and fixed phrases. “Dear Ms Shah” → “Yours sincerely”. “Dear Sir or Madam” → “Yours faithfully”.',
        {
          headers: ['informal', 'formal'],
          rows: [
            ['I want to ask about …', 'I am writing to enquire about …'],
            ['Can you send me …?', 'I would be grateful if you could send me …'],
            ['Here’s my CV.', 'Please find my CV attached.'],
            ['Speak soon!', 'I look forward to hearing from you.'],
          ],
        },
      ),
    ],
    test: [
      choice('Choose.', 'You start with “Dear Sir or Madam”. How do you end?', [
        'Yours sincerely',
        '*Yours faithfully',
        'Love',
      ]),
      cloze(
        'Complete.',
        'I would be [grateful] if you could call me. I look [forward] to hearing from you.',
        ['thankful', 'ahead'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'The interview',
    ref: [I, 1, 5],
    learn: [
      dialogue('At Greenleaf Travel', [
        'Tom: Could you tell us a bit about yourself?',
        'Sophie: I’ve worked in travel marketing for three years. Before that, I studied tourism in Cologne.',
        'Priya: Can you give us an example of a problem you’ve solved at work?',
        'Sophie: Last year our printer cancelled our brochures a week before a trade fair. I found a new one in two days.',
      ]),
      tip(
        'look forward to + -ing',
        '“to” here is a preposition: “I look forward to meeting you.” – not “to meet”.',
      ),
    ],
    test: [
      choice('Choose.', 'Why does Sophie talk about the printer?', [
        '*To show that she can solve problems.',
        'To complain about her old company.',
        'To explain why she wants a new job.',
      ]),
      choice('Choose.', 'Which sentence is correct?', [
        'I look forward to meet you.',
        '*I look forward to meeting you.',
        'I look forward meeting you.',
      ]),
    ],
  },

  // ------------------------------------------------ Chapter 2: Opinions
  {
    kind: 'VOCAB',
    title: 'Giving your opinion',
    ref: [I, 2, 1],
    learn: [
      words('Opinions', [
        ['In my opinion, …', 'Meiner Meinung nach …'],
        ['As far as I’m concerned, …', 'Was mich betrifft …'],
        ['I agree (with you).', 'Ich stimme (dir) zu.'],
        ['I see your point, but …', 'Ich verstehe, was du meinst, aber …'],
        ['I’m not so sure about that.', 'Da bin ich mir nicht so sicher.'],
        ['compromise', 'Kompromiss'],
      ]),
    ],
    test: [
      choice('Choose.', 'Which sentence is correct?', [
        'I am agree with you.',
        '*I agree with you.',
        'I’m agreeing with you.',
      ]),
      match('Match.', [
        ['As far as I’m concerned, …', 'giving an opinion'],
        ['Exactly!', 'agreeing'],
        ['I see your point, but …', 'disagreeing politely'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Disagreeing politely',
    ref: [I, 2, 1],
    learn: [
      tip(
        'Softening',
        'A direct “You’re wrong” sounds aggressive in English. First show that you have listened (“I see your point”, “That’s true, but …”), then give your view with a reason.',
      ),
    ],
    test: [
      choice(
        'Choose the most polite reaction.',
        'Your manager wants to cancel a project. You disagree.',
        [
          'No. That’s wrong.',
          '*I see your point, but I think we’re very close to finishing it.',
          'You don’t understand the project.',
        ],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Linking words',
    ref: [I, 2, 2],
    learn: [
      grammar(
        'because, so, although, however, whereas',
        '“although”, “because”, “whereas” and “so” connect clauses inside a sentence. “However” and “In addition” usually start a new sentence and take a comma.',
        {
          headers: ['function', 'inside', 'new sentence'],
          rows: [
            ['reason', 'because, as', 'That’s why …'],
            ['result', 'so', 'Therefore, …'],
            ['contrast', 'although, whereas', 'However, …'],
            ['adding', 'and', 'In addition, …'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'It saves time [because] there is no commute. [However], some people feel lonely. Young people prefer the office, [whereas] older colleagues like home.',
        ['so', 'Although'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'although or despite?',
    ref: [I, 2, 2],
    learn: [
      grammar(
        'obwohl = although',
        '“although” + clause (subject + verb): “Although it was raining, we went out.” “despite / in spite of” + noun or -ing: “Despite the rain, we went out.”',
      ),
    ],
    test: [
      choice('Choose.', 'Which sentence is correct?', [
        'Despite it was expensive, we bought it.',
        '*Although it was expensive, we bought it.',
        'However it was expensive, we bought it.',
      ]),
      match('Match.', [
        ['The office is noisy,', 'so I often wear headphones.'],
        ['I stayed at home', 'because the trains were on strike.'],
        ['Although I was tired,', 'I finished the report.'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'enjoy doing, want to do',
    ref: [I, 2, 3],
    learn: [
      grammar(
        'Verb + -ing or to',
        'The first verb decides. Learn them in groups. After prepositions, always -ing.',
        {
          headers: ['+ -ing', '+ to'],
          rows: [
            ['enjoy, finish, mind', 'want, hope, would like'],
            ['avoid, suggest, keep', 'decide, agree, plan'],
            ['miss, can’t stand', 'offer, refuse, manage'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'I enjoy [working] from home. We decided [to try] a new model. I’m interested in [learning] more.',
        ['to work', 'trying', 'to learn'],
      ),
      choice('Choose.', 'Which sentence is correct?', [
        'He suggested to take a break.',
        '*He suggested taking a break.',
        'He suggested take a break.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'stop doing – stop to do',
    ref: [I, 2, 3],
    learn: [
      tip(
        'Two meanings',
        '“I stopped smoking.” = I don’t smoke any more. “I stopped to smoke.” = I stopped in order to smoke. “Remember to call.” = don’t forget. “I remember calling.” = I have a memory of it.',
      ),
    ],
    test: [
      match('Match.', [
        ['I stopped drinking coffee.', 'I don’t drink coffee any more.'],
        ['I stopped to drink a coffee.', 'I took a break for a coffee.'],
        ['Remember to lock the door.', 'Don’t forget it.'],
        ['I remember locking the door.', 'I’m sure I did it.'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Making suggestions',
    ref: [I, 2, 4],
    learn: [
      grammar(
        'Let’s, Why don’t we, How about',
        '“Let’s”, “Why don’t we”, “Shall we”, “We could” and “I’d rather” + basic form. “How about” and “What about” + -ing.',
      ),
    ],
    test: [
      choice('Choose.', 'Which sentence is correct?', [
        'What about to meet on Monday?',
        '*What about meeting on Monday?',
        'What about we meet on Monday?',
      ]),
      cloze('Complete.', 'How about [going] to the cinema? – I’d rather [stay] at home.', [
        'go',
        'staying',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'For and against',
    ref: [I, 2, 5],
    learn: [
      text(
        'Should cars be banned from city centres? Supporters say the air becomes cleaner and the streets safer. On the other hand, older people depend on cars and deliveries become complicated. In my opinion, a ban can work, but only if public transport is cheap and reliable.',
      ),
      tip(
        'Opinion essay',
        'Introduction → arguments for → arguments against → conclusion with your opinion.',
      ),
    ],
    test: [
      choice('Choose.', 'What is the writer’s opinion?', [
        'Cars should never be banned.',
        '*A ban is a good idea if public transport is good.',
        'Only shop owners should decide.',
      ]),
      order('Put the parts of an opinion essay in order.', [
        'Introduction',
        'Arguments for',
        'Arguments against',
        'Conclusion',
      ]),
    ],
  },

  // ------------------------------------------------ Chapter 3: Media
  {
    kind: 'GRAMMAR',
    title: 'Headline grammar',
    ref: [I, 3, 1],
    learn: [
      grammar(
        'Short and special',
        'Headlines leave out articles and “to be”. Present simple = already happened. to + infinitive = future. Past participle alone = passive.',
        {
          headers: ['headline', 'meaning'],
          rows: [
            ['Minister quits', 'The minister has resigned.'],
            ['City to ban cars', 'The city is going to ban cars.'],
            ['200 jobs cut', '200 jobs have been cut.'],
          ],
        },
      ),
    ],
    test: [
      choice('Choose.', '“PRIME MINISTER TO VISIT CHINA”', [
        'The prime minister visited China yesterday.',
        '*The prime minister is going to visit China.',
        'The prime minister wants China to visit.',
      ]),
      match('Match.', [
        ['MINISTER QUITS', 'The minister has left the job.'],
        ['200 JOBS CUT', '200 people have lost their jobs.'],
        ['TEENAGER FINDS COINS', 'A young person has found some coins.'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'The passive',
    ref: [I, 3, 2],
    learn: [
      grammar(
        'be + past participle',
        'The passive puts the action or the thing in the centre. “by” says who did it.',
        {
          headers: ['tense', 'passive'],
          rows: [
            ['present', 'The coins are made.'],
            ['past', 'The coins were found (by Maya).'],
            ['present perfect', '200 jobs have been cut.'],
            ['will', 'The coins will be shown.'],
          ],
        },
      ),
    ],
    test: [
      choice('Choose.', 'Active: “Somebody stole my bike yesterday.”', [
        'My bike stole yesterday.',
        '*My bike was stolen yesterday.',
        'My bike is stolen yesterday.',
      ]),
      cloze(
        'Complete.',
        'The coins [were] found last weekend. They will [be] shown at the museum.',
        ['are', 'been'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: '“wird” is not “will”',
    ref: [I, 3, 2],
    learn: [
      tip(
        'German passive → English passive',
        'German “werden” in the passive is “be” in English: “Das Haus wird gebaut.” = “The house is being built.” “will be built” is the future.',
      ),
    ],
    test: [
      match('Match.', [
        ['Das Auto wird repariert.', 'The car is being repaired.'],
        ['Das Auto wurde repariert.', 'The car was repaired.'],
        ['Das Auto wird repariert werden.', 'The car will be repaired.'],
        ['Das Auto ist repariert worden.', 'The car has been repaired.'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'say or tell?',
    ref: [I, 3, 3],
    learn: [
      grammar(
        'tell somebody',
        '“tell” always needs a person after it: “She told me that …”. “say” has no person, or “to” + person: “She said (to me) that …”.',
      ),
    ],
    test: [
      choice('Choose.', 'Which sentence is correct?', [
        'She said me that she was tired.',
        '*She told me that she was tired.',
        'She told that she was tired.',
      ]),
      cloze('Complete.', 'Ben [told] Sophie the news. He [said] that he was sorry.'),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Reported speech',
    ref: [I, 3, 3],
    learn: [
      grammar(
        'One step back',
        'Reporting what someone said in the past, the tense usually moves back: present → past, will → would, am going to → was going to, past → past perfect.',
        {
          headers: ['direct', 'reported'],
          rows: [
            ['“I want to study.”', 'She said she wanted to study.'],
            ['“We will help.”', 'They said they would help.'],
            ['“I was shocked.”', 'She said she had been shocked.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        '“I’m busy.” → He said he [was] busy. “I’ll call you.” → He said he [would] call me. “I missed the train.” → He said he [had] missed it.',
        ['is', 'will'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'who, which, where, whose',
    ref: [I, 3, 4],
    learn: [
      grammar(
        'Relative clauses',
        'who = people, which = things, that = both, where = places, whose = possession. No comma before a clause that says which person or thing you mean.',
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'Maya is the girl [who] found the coins. This is the garden [where] they were found. Maya, [whose] father is a gardener, wants to study archaeology.',
        ['which'],
      ),
      choice('Choose.', 'Which sentence is correct?', [
        'The man which wrote the article is famous.',
        '*The man who wrote the article is famous.',
        'The man, who wrote the article is famous.',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Spotting fake news',
    ref: [I, 3, 4],
    learn: [
      words('News and sources', [
        ['source', 'Quelle'],
        ['reliable', 'zuverlässig'],
        ['to publish', 'veröffentlichen'],
        ['to share', 'teilen'],
        ['to check', 'überprüfen'],
        ['headline', 'Schlagzeile'],
      ]),
    ],
    test: [
      choice('Choose.', 'Which of these should make you careful?', [
        'Several newspapers report the story.',
        '*The account was created last week.',
        'You can find the original source.',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Writing a summary',
    ref: [I, 3, 5],
    learn: [
      tip(
        'A good summary',
        'Only the main points, in your own words, neutral. Start with the source and topic (“A study by … shows that …”), then key results, then the conclusion. No examples, no opinion.',
      ),
    ],
    test: [
      choice('Choose.', 'Which is the best first sentence for a summary?', [
        'I think young people should watch more TV.',
        '*A study by the University of Leeds shows that most young people get their news from social media.',
        'The researchers asked many questions.',
      ]),
    ],
  },

  // ------------------------------------------------ Chapter 4: Relationships
  {
    kind: 'GRAMMAR',
    title: 'bored or boring?',
    ref: [I, 4, 1],
    learn: [
      grammar(
        '-ed and -ing',
        '-ed describes how you feel: “I’m bored.” -ing describes what causes the feeling: “The film is boring.”',
        {
          headers: ['-ed', '-ing'],
          rows: [
            ['I’m interested.', 'It’s interesting.'],
            ['We were tired.', 'It was tiring.'],
            ['He’s confused.', 'It’s confusing.'],
          ],
        },
      ),
    ],
    test: [
      choice('Choose.', 'You have nothing to do and feel unhappy.', [
        'I’m so boring today.',
        '*I’m so bored today.',
        'I have boredom today.',
      ]),
      cloze('Complete.', 'The Tube map is really [confusing]. I was [embarrassed] at the quiz.', [
        'confused',
        'embarrassing',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Feelings',
    ref: [I, 4, 1],
    learn: [
      words('Feelings', [
        ['pleased', 'zufrieden'],
        ['upset', 'aufgebracht, gekränkt'],
        ['jealous', 'eifersüchtig'],
        ['lonely', 'einsam'],
        ['annoyed', 'verärgert'],
        ['relieved', 'erleichtert'],
        ['proud (of)', 'stolz (auf)'],
      ]),
    ],
    test: [
      match('How do they feel?', [
        ['Her results were better than expected.', 'proud'],
        ['She moved to a new city and knows nobody.', 'lonely'],
        ['The lost keys were in his pocket.', 'relieved'],
        ['His friend has a new car and he wants one.', 'jealous'],
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Phrasal verbs',
    ref: [I, 4, 2],
    learn: [
      words('Relationships', [
        ['get on (with)', 'sich verstehen (mit)'],
        ['fall out (with)', 'sich zerstreiten (mit)'],
        ['make up', 'sich versöhnen'],
        ['break up (with)', 'sich trennen (von)'],
        ['look after', 'sich kümmern um'],
        ['go out (with)', 'zusammen sein (mit)'],
        ['grow up', 'aufwachsen'],
      ]),
    ],
    test: [
      match('Match.', [
        ['fall out', 'have an argument'],
        ['make up', 'be friends again'],
        ['break up', 'end a relationship'],
        ['look after', 'take care of'],
      ]),
      choice('Choose.', '“We’ve always got on really well.” means …', [
        '*We have a good relationship.',
        'We often travel together.',
        'We had an argument.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'mustn’t ≠ muss nicht',
    ref: [I, 4, 3],
    learn: [
      grammar(
        'Obligation and prohibition',
        'must / have to = necessary. mustn’t = forbidden (nicht dürfen). don’t have to = not necessary (nicht müssen). should = good idea.',
        {
          headers: ['English', 'German'],
          rows: [
            ['You mustn’t smoke.', 'Du darfst nicht rauchen.'],
            ['You don’t have to eat with us.', 'Du musst nicht mit uns essen.'],
          ],
        },
      ),
    ],
    test: [
      choice('Choose.', '“Du musst nicht kommen, wenn du keine Zeit hast.”', [
        'You mustn’t come if you haven’t got time.',
        '*You don’t have to come if you haven’t got time.',
        'You haven’t to come if you haven’t got time.',
      ]),
      match('Match.', [
        ['You mustn’t park here.', 'It’s not allowed.'],
        ['You don’t have to book.', 'It’s not necessary.'],
        ['You should arrive early.', 'It’s a good idea.'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'myself and each other',
    ref: [I, 4, 4],
    learn: [
      grammar(
        'Two kinds of “sich”',
        'Back to the same person: myself, yourself, herself … “I blame myself.” Two people to one another: each other. “They didn’t talk to each other.” Not reflexive in English: meet, remember, relax, feel.',
      ),
    ],
    test: [
      choice('Choose.', '“Ich kann mich nicht an seinen Namen erinnern.”', [
        'I can’t remember myself his name.',
        '*I can’t remember his name.',
        'I can’t remember me his name.',
      ]),
      cloze(
        'Complete.',
        'I cut [myself] while cooking. Ben and Jake have known [each other] since school.',
        ['themselves', 'ourselves'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Dear Annie',
    ref: [I, 4, 5],
    learn: [
      text(
        'A reader’s friend has a new boyfriend who is at their flat every day and never helps. Annie replies: “You should talk to your friend when you’re both relaxed. Tell her how you feel, but don’t attack her boyfriend. You could suggest some simple rules, for example that guests have to help with the cleaning.”',
      ),
    ],
    test: [
      choice('Choose.', 'What does Annie suggest first?', [
        'Tell the boyfriend to leave.',
        '*Talk to the friend when both are calm.',
        'Look for a new flat.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Giving advice',
    ref: [I, 4, 5],
    learn: [
      tip(
        'Mix your phrases',
        '“You should …”, “You could …”, “Why don’t you …?”, “If I were you, I’d …”, “It might be a good idea to …”.',
      ),
    ],
    test: [
      match('Match.', [
        ['I always fall out with my sister.', 'Why don’t you spend some time together?'],
        ['I feel lonely in my new town.', 'You could join a club.'],
        ['My friend is always late.', 'If I were you, I’d tell her how you feel.'],
      ]),
    ],
  },

  // ------------------------------------------------ Chapter 5: Environment
  {
    kind: 'VOCAB',
    title: 'The environment',
    ref: [I, 5, 1],
    learn: [
      words('Environment', [
        ['climate change', 'Klimawandel'],
        ['pollution', 'Verschmutzung'],
        ['waste', 'Abfall'],
        ['to recycle', 'recyceln'],
        ['carbon emissions', 'CO₂-Emissionen'],
        ['fossil fuels', 'fossile Brennstoffe'],
        ['renewable energy', 'erneuerbare Energie'],
        ['sustainable', 'nachhaltig'],
      ]),
    ],
    test: [
      match('Match.', [
        ['renewable energy', 'power from the sun, wind or water'],
        ['fossil fuels', 'coal, oil and gas'],
        ['to recycle', 'to use materials again'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'If we take the train, …',
    ref: [I, 5, 2],
    learn: [
      grammar(
        'First conditional',
        'if + present simple, will + verb. For a real possibility in the future. Never “will” in the if-clause.',
        {
          headers: ['if-clause', 'result'],
          rows: [
            ['If we take the train,', 'we’ll save emissions.'],
            ['If you don’t hurry,', 'you’ll miss the bus.'],
          ],
        },
      ),
    ],
    test: [
      choice('Choose.', 'Which sentence is correct?', [
        'If it will be sunny tomorrow, we’ll cycle.',
        '*If it is sunny tomorrow, we’ll cycle.',
        'If it is sunny tomorrow, we cycle.',
      ]),
      cloze('Complete.', 'If we [recycle] more, we [will] produce less waste.', [
        'will recycle',
        'would',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'wenn = if or when?',
    ref: [I, 5, 2],
    learn: [
      tip(
        'Possible or certain?',
        '“if” = it may or may not happen. “when” = it will certainly happen. “If I get the job, I’ll move.” – “When I get home, I’ll call you.”',
      ),
    ],
    test: [
      choice('Choose.', '“Wenn ich morgen aufwache, schreibe ich dir.”', [
        'If I wake up tomorrow, I’ll text you.',
        '*When I wake up tomorrow, I’ll text you.',
        'When I will wake up tomorrow, I’ll text you.',
      ]),
      choice('Choose.', '“Wenn ich im Lotto gewinne, kaufe ich ein Haus.”', [
        '*If I win the lottery, I’ll buy a house.',
        'When I win the lottery, I’ll buy a house.',
        'If I will win the lottery, I buy a house.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'unless and as long as',
    ref: [I, 5, 3],
    learn: [
      grammar(
        'unless = if … not',
        '“Unless we use less plastic, …” = “If we don’t use less plastic, …”. The verb after “unless” is positive. “as long as” = only if. Zero conditional (always true): if + present, present: “If you heat ice, it melts.”',
      ),
    ],
    test: [
      choice('Choose the same meaning.', '“If we don’t leave now, we’ll miss the train.”', [
        'Unless we don’t leave now, we’ll miss the train.',
        '*Unless we leave now, we’ll miss the train.',
        'As long as we leave now, we’ll miss the train.',
      ]),
      cloze('Complete.', 'You can use my car [as long as] you fill up the tank.', ['unless']),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'too much, not enough',
    ref: [I, 5, 4],
    learn: [
      grammar(
        'Quantifiers',
        'Countable: many, few, a few. Uncountable: much, little, a little. “too much/many” = more than good. “not enough” = less than needed. “few/little” = almost none; “a few/a little” = some.',
      ),
    ],
    test: [
      choice('Choose.', 'Which sentence is correct?', [
        'There are too much cars.',
        '*There are too many cars.',
        'There is too many car.',
      ]),
      match('Match.', [
        ['I have a little time.', 'Let’s talk.'],
        ['I have little time.', 'I’m very busy.'],
        ['Few people came.', 'Almost nobody came.'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'A letter to the council',
    ref: [I, 5, 5],
    learn: [
      text(
        'Ben writes to the council: “Our street has become far too dangerous: there is too much traffic, and very few children walk to school. Firstly, a 20 mph speed limit would make the street safer. Secondly, if the council builds a protected bike lane, more people will cycle. Unless something is done soon, there will be a serious accident.”',
      ),
    ],
    test: [
      choice('Choose.', 'What does Ben NOT suggest?', [
        'a lower speed limit',
        'a bike lane',
        '*a new car park',
      ]),
      choice('Choose.', 'What will happen, according to Ben, unless something is done?', [
        '*There will be an accident.',
        'People will move away.',
        'The shops will close.',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Firstly, secondly, finally',
    ref: [I, 5, 5],
    learn: [
      tip(
        'Structuring a proposal',
        'Describe the problem, list suggestions (Firstly, Secondly, Finally), give the result of each with a first conditional, and end with a polite request: “We would be grateful if you could …”.',
      ),
    ],
    test: [
      order('Put the parts of a proposal in order.', [
        'I am writing on behalf of …',
        'The problem is …',
        'Firstly, … Secondly, …',
        'We would be grateful if you could …',
      ]),
    ],
  },

  // ------------------------------------------------ Chapter 6: Stories
  {
    kind: 'GRAMMAR',
    title: 'Past perfect',
    ref: [I, 6, 1],
    learn: [
      grammar(
        'had + past participle',
        'The “past of the past”: for something that happened before another past event. “When she arrived, the train had left.”',
      ),
    ],
    test: [
      choice('Choose.', '“When we got to the cinema, the film had started.”', [
        'The film started after we arrived.',
        '*The film started before we arrived.',
        'The film started exactly when we arrived.',
      ]),
      cloze(
        'Complete.',
        'She missed the train because she had [written] down the wrong time. She [hadn’t] eaten since breakfast.',
        ['wrote', 'didn’t'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Narrative tenses',
    ref: [I, 6, 2],
    learn: [
      grammar(
        'Three tenses, three jobs',
        'Past continuous = background. Past simple = main events. Past perfect = earlier events.',
        {
          headers: ['tense', 'example'],
          rows: [
            ['past continuous', 'It was snowing.'],
            ['past simple', 'He noticed a dog.'],
            ['past perfect', 'Someone had left it there.'],
          ],
        },
      ),
    ],
    test: [
      match('Match.', [
        ['The wind was blowing.', 'background'],
        ['She opened the door.', 'main event'],
        ['Somebody had broken the window.', 'earlier event'],
      ]),
      choice('Choose.', 'Which sentence is correct?', [
        'I didn’t recognise him because he grew a beard.',
        '*I didn’t recognise him because he had grown a beard.',
        'I didn’t recognise him because he was growing a beard.',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Biscuit',
    ref: [I, 6, 2],
    learn: [
      text(
        'It was a cold night in December. Ben was walking home from the station and it was snowing heavily. Suddenly he noticed a small dog that was sitting in a doorway. Someone had tied it to a door handle and had left a note: “Please look after him.” Ben took the dog home.',
      ),
    ],
    test: [
      choice('Choose.', 'What had someone done before Ben arrived?', [
        '*They had tied the dog to a door handle.',
        'They had called the police.',
        'They had taken the dog home.',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Time linkers',
    ref: [I, 6, 3],
    learn: [
      words('Time linkers', [
        ['as soon as', 'sobald'],
        ['by the time', 'bis (zu dem Zeitpunkt, als)'],
        ['while', 'während'],
        ['suddenly', 'plötzlich'],
        ['eventually', 'schließlich, am Ende'],
      ]),
      tip(
        'eventually ≠ eventuell',
        '“eventually” = in the end. German “eventuell” = maybe, possibly.',
      ),
    ],
    test: [
      choice('Choose.', '“Ich komme eventuell später.”', [
        'I’ll eventually come later.',
        '*I might come later.',
        'I come eventually later.',
      ]),
      match('Match.', [
        ['By the time the police arrived,', 'the thieves had disappeared.'],
        ['As soon as I got home,', 'I made a cup of tea.'],
        ['Before leaving the house,', 'she checked the windows.'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'The wrong umbrella',
    ref: [I, 6, 4],
    learn: [
      text(
        'A tall man rushed into a café, grabbed a black umbrella and hurried out. Clara’s umbrella had gone – in its place was another black umbrella with a phone number on it. She called. “I’m so sorry,” said a nervous voice. “I was late for a job interview.” They met the next day. He had got the job.',
      ),
    ],
    test: [
      order('Put the events in order.', [
        'A man took an umbrella and left.',
        'Clara noticed her umbrella had gone.',
        'She called the number on the label.',
        'They met at the café.',
      ]),
      choice('Choose.', 'Why did the man take the wrong umbrella?', [
        'He wanted to meet Clara.',
        '*He was in a hurry.',
        'His umbrella was broken.',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Strong verbs for stories',
    ref: [I, 6, 4],
    learn: [
      words('Instead of “go” and “take”', [
        ['to rush', 'eilen, stürzen'],
        ['to hurry', 'sich beeilen'],
        ['to grab', 'schnappen, packen'],
        ['to whisper', 'flüstern'],
        ['to shout', 'rufen, schreien'],
        ['to notice', 'bemerken'],
      ]),
      tip(
        'Make it alive',
        'Strong verbs and a little direct speech make a story more vivid than “go”, “take” and “say”.',
      ),
    ],
    test: [
      cloze('Complete.', 'He [rushed] into the café, [grabbed] an umbrella and left.', [
        'whispered',
        'noticed',
      ]),
      choice('Choose.', 'Which sentence is the most vivid?', [
        'He went out of the room.',
        '*He rushed out of the room, shouting her name.',
        'He left the room.',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Planning a story',
    ref: [I, 6, 5],
    learn: [
      tip(
        'Four parts',
        '1. Set the scene (past continuous). 2. The problem (past simple, suddenly). 3. The development (past perfect for background). 4. The ending, ideally with a small surprise.',
      ),
    ],
    test: [
      choice('Choose.', 'Which beginning makes the reader want to continue?', [
        'One day I went to a shop.',
        '*It was the last train of the night, and I was the only passenger – or so I thought.',
        'This is a story about something that happened.',
      ]),
    ],
  },

  // ------------------------------------------------ Grammar book
  {
    kind: 'GRAMMAR',
    title: 'just, already, yet',
    ref: [G, 9, 2],
    learn: [
      grammar(
        'Position matters',
        '“just” (gerade eben) and “already” (schon) go between have and the participle. “yet” (bis jetzt) goes at the end of questions and negatives.',
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'Have you finished [yet]? – Yes, I’ve [already] sent it. I’ve [just] arrived – two minutes ago.',
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'I lost my keys yesterday',
    ref: [G, 9, 3],
    learn: [
      grammar(
        'Finished time or not?',
        'Finished time (yesterday, ago, in 2015) → past simple. No time, or up to now (ever, today, so far) → present perfect. “I’ve lost my keys.” (still lost) – “I lost my keys yesterday.”',
      ),
    ],
    test: [
      choice('Choose.', 'Which sentence is correct?', [
        'I have lost my keys yesterday.',
        '*I lost my keys yesterday.',
        'I’ve lost yesterday my keys.',
      ]),
      choice('Choose.', '“Why are your hands so dirty?” – “I ___ in the garden.”', [
        '*’ve been working',
        'worked last year',
        'work',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'be able to',
    ref: [G, 10, 1],
    learn: [
      grammar(
        'can has no future',
        'Two modal verbs can’t stand together. “can” has no infinitive or future, so use “be able to”: “I’ll be able to come.” Polite requests: “Could you …?”, “Would you mind + -ing?”',
      ),
    ],
    test: [
      choice('Choose.', '“Ich werde morgen kommen können.”', [
        'I will can come tomorrow.',
        '*I will be able to come tomorrow.',
        'I can to come tomorrow.',
      ]),
      choice('Choose.', 'Which request is correct?', [
        'Would you mind to close the door?',
        '*Would you mind closing the door?',
        'Would you mind close the door?',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'had to',
    ref: [G, 10, 2],
    learn: [
      grammar(
        'must in the past',
        '“must” has no past form: use “had to” and “didn’t have to”. “I had to work late.” – “We didn’t have to pay.”',
      ),
    ],
    test: [
      choice('Choose.', 'Which sentence is correct?', [
        'I musted work yesterday.',
        '*I had to work yesterday.',
        'I must work yesterday.',
      ]),
      match('Match.', [
        ['We had to leave early.', 'Wir mussten früh gehen.'],
        ['We didn’t have to pay.', 'Wir mussten nicht bezahlen.'],
        ['You mustn’t tell anybody.', 'Du darfst es niemandem sagen.'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'must be, might be, can’t be',
    ref: [G, 10, 3],
    learn: [
      grammar(
        'How sure are you?',
        '“must” = I’m sure it’s true. “might / may / could” = possible. “can’t” = I’m sure it’s not true. The opposite of “must” here is “can’t”, not “mustn’t”.',
      ),
    ],
    test: [
      match('Match.', [
        ['It must be expensive.', 'I’m sure it is.'],
        ['It might be expensive.', 'Perhaps it is.'],
        ['It can’t be expensive.', 'I’m sure it isn’t.'],
      ]),
      cloze(
        'Complete.',
        'You’ve worked twelve hours – you [must] be exhausted. That [can’t] be Sophie – she’s in Paris.',
        ['mustn’t', 'should'],
      ),
    ],
  },
]);
