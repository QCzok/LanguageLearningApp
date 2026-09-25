import {
  BEGINNER as B,
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

/** Englisch A2 – Beginner, Kapitel 7 bis 12, dazu die A2-Kapitel des Grammatikbuchs. */
export const EN_A2 = lessons('en-a2', [
  // ------------------------------------------------ Chapter 7: Last weekend
  {
    kind: 'GRAMMAR',
    title: 'Past simple: -ed',
    ref: [B, 7, 1],
    learn: [
      grammar(
        'Regular verbs',
        'The past simple is for finished actions at a finished time. Regular verbs add -ed – the same form for everybody.',
        {
          headers: ['rule', 'verb', 'past'],
          rows: [
            ['+ ed', 'watch', 'watched'],
            ['-e + d', 'live', 'lived'],
            ['-y → -ied', 'study', 'studied'],
            ['double', 'stop', 'stopped'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'Yesterday I [worked] until six. My brother [studied] all weekend. The bus [stopped] here.',
        ['workt', 'studyed', 'stoped'],
      ),
      choice('Choose.', 'Which sentence is correct?', [
        '*She cleaned the flat yesterday.',
        'She cleans the flat yesterday.',
        'She clean the flat yesterday.',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'yesterday, last, ago',
    ref: [B, 7, 1],
    learn: [
      words('Past time words', [
        ['yesterday', 'gestern'],
        ['yesterday evening', 'gestern Abend'],
        ['last night', 'gestern Abend / letzte Nacht'],
        ['last week', 'letzte Woche'],
        ['last year', 'letztes Jahr'],
        ['two days ago', 'vor zwei Tagen'],
      ]),
      tip(
        'last and ago',
        '“last” has no “the”: “last week”. “ago” comes after the time: “three years ago” = “vor drei Jahren”.',
      ),
    ],
    test: [
      choice('Choose.', '“Vor zwei Wochen habe ich meine Oma besucht.”', [
        'Before two weeks I visited my grandma.',
        '*I visited my grandma two weeks ago.',
        'I visited my grandma the last two weeks.',
      ]),
      cloze('Complete.', 'I saw her [last] Friday. We moved here five years [ago].', [
        'before',
        'the',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Irregular verbs',
    ref: [B, 7, 2],
    learn: [
      grammar(
        'No -ed',
        'Many common verbs are irregular. You learn their past forms like words – but they are the same for all persons.',
        {
          headers: ['verb', 'past', 'verb', 'past'],
          rows: [
            ['go', 'went', 'see', 'saw'],
            ['have', 'had', 'buy', 'bought'],
            ['get', 'got', 'eat', 'ate'],
            ['make', 'made', 'take', 'took'],
          ],
        },
      ),
    ],
    test: [
      match('Match.', [
        ['go', 'went'],
        ['buy', 'bought'],
        ['see', 'saw'],
        ['eat', 'ate'],
        ['take', 'took'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'was and were',
    ref: [B, 7, 2],
    learn: [
      grammar(
        'The past of “to be”',
        '“was” for I, he, she, it. “were” for you, we, they. Negatives: wasn’t, weren’t.',
        {
          headers: ['', '+', '–'],
          rows: [
            ['I / he / she / it', 'was', 'wasn’t'],
            ['you / we / they', 'were', 'weren’t'],
          ],
        },
      ),
    ],
    test: [
      choice('Choose.', 'Which sentence is correct?', [
        'We was at the beach.',
        '*We were at the beach.',
        'We are at the beach yesterday.',
      ]),
      cloze(
        'Complete.',
        'The weather [wasn’t] great, but the people [were] very friendly. I [was] tired.',
        ['weren’t'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'A trip to Blackpool',
    ref: [B, 7, 2],
    learn: [
      text(
        'Yuki writes: “Last weekend was fantastic! On Saturday Anna and I went to Blackpool by train. The weather wasn’t great, but we had fish and chips on the beach and we saw the famous tower. I bought some postcards. We got home very late and I was really tired.”',
      ),
    ],
    test: [
      choice('Choose.', 'How did they travel to Blackpool?', ['*by train', 'by car', 'by bus']),
      choice('Choose.', 'What did Yuki buy?', ['fish and chips', '*postcards', 'a tower']),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Did you …?',
    ref: [B, 7, 3],
    learn: [
      grammar(
        'did for everybody',
        'Questions and negatives in the past use “did” + basic form: “Did you go?”, “I didn’t buy it.” – not “Did you went?”. “to be” works without “did”: “Were you tired?”',
        {
          headers: ['', 'example'],
          rows: [
            ['?', 'Did she go?'],
            ['–', 'She didn’t go.'],
            ['short answer', 'Yes, she did. / No, she didn’t.'],
            ['question word', 'Where did she go?'],
          ],
        },
      ),
    ],
    test: [
      choice('Choose.', 'You want to know what Karim bought.', [
        'What did Karim bought?',
        'What Karim bought?',
        '*What did Karim buy?',
      ]),
      order('Make the question.', ['Where', 'did', 'you', 'go', 'last summer?']),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Short answers in the past',
    ref: [B, 7, 3],
    learn: [
      tip(
        'Yes, I did. – No, it wasn’t.',
        'Answer with the helper verb from the question: “Did …?” → “Yes, I did.” “Was …?” → “No, it wasn’t.”',
      ),
    ],
    test: [
      match('Match.', [
        ['Did you have a good weekend?', 'Yes, I did, thanks.'],
        ['Was it expensive?', 'No, it wasn’t.'],
        ['Did your son go to school?', 'No, he didn’t.'],
        ['Were your friends there?', 'Yes, they were.'],
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'First, then, after that',
    ref: [B, 7, 4],
    learn: [
      words('Telling a story', [
        ['first', 'zuerst'],
        ['then', 'dann'],
        ['after that', 'danach'],
        ['when', 'als'],
        ['finally', 'schließlich'],
        ['so', 'also, deshalb'],
      ]),
      tip(
        'als = when',
        'For one moment in the past, German “als” is “when”: “When I got to work, …”.',
      ),
    ],
    test: [
      cloze(
        'Complete.',
        '[First], I made breakfast. [Then] I called my sister. [When] I left, it started to rain, [so] I went back for my umbrella.',
        ['as', 'Before'],
      ),
      order('Put Diego’s day in order.', [
        'His alarm didn’t ring.',
        'He missed the bus.',
        'He took a taxi.',
        'He lost his keys.',
      ]),
    ],
  },

  // ------------------------------------------------ Chapter 8: When I was young
  {
    kind: 'VOCAB',
    title: 'Childhood',
    ref: [B, 8, 1],
    learn: [
      words('Childhood', [
        ['childhood', 'Kindheit'],
        ['I was born in …', 'ich bin in … geboren'],
        ['village', 'Dorf'],
        ['grandparents', 'Großeltern'],
        ['shy', 'schüchtern'],
        ['toy', 'Spielzeug'],
        ['primary school', 'Grundschule'],
        ['remember', 'sich erinnern'],
      ]),
      grammar(
        'I was born',
        'Birth is always in the past: “I was born in 1990.”, “Where were you born?”',
      ),
    ],
    test: [
      choice('Choose.', 'Which question is correct?', [
        'Where are you born?',
        '*Where were you born?',
        'Where did you born?',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'could and couldn’t',
    ref: [B, 8, 1],
    learn: [
      grammar(
        'The past of can',
        'For abilities in the past, use could / couldn’t + basic form: “I could read when I was four.”, “She couldn’t swim.”',
        {
          headers: ['now', 'in the past'],
          rows: [
            ['I can swim.', 'I could swim.'],
            ['He can’t cook.', 'He couldn’t cook.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'Karim [couldn’t] swim until he was twelve, but he [could] run very fast.',
        ['can', 'didn’t'],
      ),
      choice('Choose.', 'Which sentence is correct?', [
        'I could to read at four.',
        '*I could read at four.',
        'I coulded read at four.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'used to',
    ref: [B, 8, 2],
    learn: [
      grammar(
        'früher',
        '“used to” + verb = something that was true or happened regularly in the past, but not now. Questions and negatives: “Did you use to …?”, “I didn’t use to …” (no -d!).',
        {
          headers: ['', 'example'],
          rows: [
            ['+', 'I used to wear glasses.'],
            ['–', 'I didn’t use to like music.'],
            ['?', 'Did you use to play an instrument?'],
          ],
        },
      ),
    ],
    test: [
      choice('Choose.', '“Früher habe ich in Berlin gewohnt.”', [
        'I use to live in Berlin.',
        '*I used to live in Berlin.',
        'I am used to live in Berlin.',
      ]),
      cloze('Complete.', 'Did you [use] to have a pet? – Yes, we [used] to have a cat.', ['using']),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'not … any more',
    ref: [B, 8, 2],
    learn: [
      tip(
        'Things that stopped',
        '“not … any more” at the end of the sentence = “nicht mehr”: “I don’t play the guitar any more.”',
      ),
    ],
    test: [
      match('Match then and now.', [
        ['I used to smoke.', 'I don’t smoke any more.'],
        ['I used to live with my parents.', 'Now I’ve got my own flat.'],
        ['I used to be shy.', 'Now I talk to everybody.'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Past continuous',
    ref: [B, 8, 3],
    learn: [
      grammar(
        'was/were + -ing',
        'The past continuous describes an action in progress at a moment in the past: “At eight o’clock I was watching a film.”',
        {
          headers: ['', 'example'],
          rows: [
            ['I / he / she / it', 'I was watching a film.'],
            ['you / we / they', 'They were cooking.'],
            ['?', 'What were you doing?'],
          ],
        },
      ),
    ],
    test: [
      choice('Choose.', '“What were you doing at 10 p.m.?”', [
        '*I was reading a book.',
        'I were reading a book.',
        'I was read a book.',
      ]),
      cloze('Complete.', 'Diego [was] watching a film. Yuki and her flatmate [were] cooking.', [
        'did',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'At eight o’clock yesterday',
    ref: [B, 8, 3],
    learn: [
      text(
        'Emma asks: “What were you doing yesterday at eight o’clock in the evening?” Diego was watching a film. Anna was working at the hospital. Yuki and her flatmate were cooking dinner. And Karim was sleeping on the sofa – with the TV on!',
      ),
    ],
    test: [
      match('Who was doing what?', [
        ['Diego', 'was watching a film.'],
        ['Anna', 'was working.'],
        ['Karim', 'was sleeping.'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'when and while',
    ref: [B, 8, 4],
    learn: [
      grammar(
        'Background and event',
        'Past continuous = the background. Past simple = the short event in the middle. “While we were playing, a dog ran into the garden.” – “I was walking home when it started to rain.”',
      ),
    ],
    test: [
      choice('Choose.', 'Which sentence is correct?', [
        'I was having a shower when the phone was ringing.',
        '*I was having a shower when the phone rang.',
        'I had a shower when the phone was ring.',
      ]),
      cloze('Complete.', 'While I [was] walking to school, I [found] a £10 note.', [
        'find',
        'were',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Anna and the dog',
    ref: [B, 8, 4],
    learn: [
      text(
        '“I was eight. My brother and I were playing in the garden. While we were playing, a big dog ran through the gate. My brother screamed and climbed a tree. I wasn’t afraid – I gave the dog my sandwich. When my mum came out, the dog was sitting next to me!”',
      ),
    ],
    test: [
      choice('Choose.', 'What did Anna’s brother do?', [
        'He gave the dog a sandwich.',
        '*He climbed a tree.',
        'He called his mum.',
      ]),
      choice('Choose.', 'What was the dog doing when Anna’s mum came out?', [
        'It was running away.',
        '*It was sitting next to Anna.',
        'It was climbing a tree.',
      ]),
    ],
  },

  // ------------------------------------------------ Chapter 9: Health
  {
    kind: 'VOCAB',
    title: 'The body',
    ref: [B, 9, 1],
    learn: [
      words('The body', [
        ['head', 'Kopf'],
        ['throat', 'Hals (innen)'],
        ['back', 'Rücken'],
        ['stomach', 'Magen, Bauch'],
        ['arm / hand', 'Arm / Hand'],
        ['leg / foot', 'Bein / Fuß'],
        ['tooth – teeth', 'Zahn – Zähne'],
        ['a temperature', 'Fieber'],
      ]),
    ],
    test: [
      match('Match.', [
        ['a headache', 'head'],
        ['toothache', 'teeth'],
        ['a sore throat', 'throat'],
        ['stomach ache', 'stomach'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'My back hurts',
    ref: [B, 9, 1],
    learn: [
      grammar(
        'Saying what’s wrong',
        '“I’ve got a headache / stomach ache / a sore throat.” Or with any body part: “My … hurts.” English uses “my”: “My back hurts.” (Mir tut der Rücken weh.)',
      ),
    ],
    test: [
      choice('Choose.', '“Mir tut der Rücken weh.”', [
        'Me hurts the back.',
        '*My back hurts.',
        'The back hurts me.',
      ]),
      cloze('Complete.', 'I’ve [got] a headache and my feet [hurt].', ['hurts', 'have']),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Present continuous',
    ref: [B, 9, 2],
    learn: [
      grammar(
        'am/is/are + -ing',
        'For things happening now or around now: “I’m waiting for the doctor.”, “He isn’t feeling well.”, “What are you doing?”',
        {
          headers: ['', 'example'],
          rows: [
            ['+', 'I’m waiting.'],
            ['–', 'He isn’t eating.'],
            ['?', 'Are you feeling bad?'],
          ],
        },
      ),
    ],
    test: [
      choice('Choose.', 'Look! It ___.', ['snows', '*’s snowing', 'snowing']),
      cloze('Complete.', 'Diego [is] sitting in the waiting room. Lots of people [are] waiting.', [
        'does',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Now or usually?',
    ref: [B, 9, 2],
    learn: [
      grammar(
        'Simple or continuous',
        'Present simple = usually, in general. Present continuous = now, at the moment. State verbs (like, want, need, know, understand) stay simple.',
        {
          headers: ['usually', 'now'],
          rows: [
            ['I walk to work.', 'I’m taking the bus today.'],
            ['She drinks coffee.', 'She’s drinking tea at the moment.'],
          ],
        },
      ),
    ],
    test: [
      choice('Choose.', 'Which sentence is correct?', [
        'I’m needing a doctor.',
        '*I need a doctor.',
        'I needing a doctor.',
      ]),
      choice('Choose.', 'I usually walk, but today I ___ the bus.', [
        'take',
        '*’m taking',
        'takes',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'You should rest',
    ref: [B, 9, 3],
    learn: [
      grammar(
        'should – sollte',
        '“should” gives advice. It never changes and has no “to” after it: “You should rest.”, “You shouldn’t go to work.”, “What should I do?”',
      ),
    ],
    test: [
      match('Match the problem with the advice.', [
        ['I’ve got toothache.', 'You should see a dentist.'],
        ['I’m always tired.', 'You should go to bed earlier.'],
        ['My back hurts.', 'You shouldn’t carry heavy bags.'],
      ]),
      choice('Choose.', 'Which sentence is correct?', [
        'You should to see a doctor.',
        'You shoulds see a doctor.',
        '*You should see a doctor.',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'At the doctor’s',
    ref: [B, 9, 3],
    learn: [
      dialogue('In the consulting room', [
        'Doctor: What seems to be the problem?',
        'Diego: I’ve got a headache and a sore throat, and I feel very tired.',
        'Doctor: It’s the flu. You should stay in bed for a few days.',
        'Diego: Can I go to work?',
        'Doctor: No, you shouldn’t go to work this week. And drink lots of water.',
      ]),
    ],
    test: [
      choice('Choose.', 'What’s the matter with Diego?', [
        '*He has the flu.',
        'He broke his leg.',
        'He has toothache.',
      ]),
      choice('Choose.', 'What should he do?', [
        'Go to work.',
        '*Stay in bed and drink water.',
        'Go to the hospital.',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Making an appointment',
    ref: [B, 9, 4],
    learn: [
      words('At the surgery', [
        ['appointment', 'Termin'],
        ['surgery (UK)', 'Arztpraxis'],
        ['urgent', 'dringend'],
        ['pain', 'Schmerz'],
        ['date of birth', 'Geburtsdatum'],
        ['prescription', 'Rezept'],
      ]),
    ],
    test: [
      order('Put the phone call in order.', [
        'Good morning, Park Road Surgery.',
        'I’d like to make an appointment, please.',
        'Is Thursday at 10:20 OK?',
        'Yes, that’s fine.',
      ]),
      cloze('Complete.', 'I’d like to make an [appointment]. – Is it [urgent]?', ['prescription']),
    ],
  },
  {
    kind: 'TEXT',
    title: 'The GP and the NHS',
    ref: [B, 9, 4],
    learn: [
      culture(
        'Health care in the UK',
        'Your family doctor is a GP, and the practice is a “surgery”. Health care is free through the NHS. In an emergency, call 999 or go to A&E.',
      ),
      tip('Saying dates', 'Write “4 May”, say “the fourth of May”. 1990 = “nineteen ninety”.'),
    ],
    test: [
      choice('Choose.', 'What number do you call in an emergency in the UK?', [
        '112 only',
        '*999',
        '911',
      ]),
      choice('Choose.', 'How do you say 4 May?', [
        'four May',
        '*the fourth of May',
        'the four of May',
      ]),
    ],
  },

  // ------------------------------------------------ Chapter 10: Travel plans
  {
    kind: 'GRAMMAR',
    title: 'going to',
    ref: [B, 10, 1],
    learn: [
      grammar(
        'Plans',
        '“going to” is for plans you have already decided and for things you can see will happen: “We’re going to visit Edinburgh.”, “Look at those clouds – it’s going to rain.”',
        {
          headers: ['', 'example'],
          rows: [
            ['+', 'I’m going to paint the flat.'],
            ['–', 'She isn’t going to travel.'],
            ['?', 'What are you going to do?'],
          ],
        },
      ),
    ],
    test: [
      choice('Choose.', 'The sky is black and very windy.', [
        'It rains.',
        '*It’s going to rain.',
        'It going to rain.',
      ]),
      order('Make the question.', ['What', 'are', 'you', 'going to', 'do?']),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Holiday plans',
    ref: [B, 10, 1],
    learn: [
      dialogue('Plans for the holidays', [
        'Emma: What are you going to do in the holidays?',
        'Anna: Yuki and I are going to travel around Scotland.',
        'Karim: I’m not going to travel. I’m going to paint our flat!',
        'Diego: And I’m going to look for a new job.',
      ]),
    ],
    test: [
      match('Who is going to do what?', [
        ['Anna and Yuki', 'travel around Scotland.'],
        ['Karim', 'paint his flat.'],
        ['Diego', 'look for a new job.'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'will',
    ref: [B, 10, 2],
    learn: [
      grammar(
        'Decided now',
        '“will” (’ll) is for decisions made while speaking, offers, promises and predictions. Negative: won’t. Careful: German “ich will” = “I want”!',
        {
          headers: ['use', 'example'],
          rows: [
            ['decision now', 'I’ll make a sandwich.'],
            ['offer', 'I’ll help you.'],
            ['promise', 'I won’t tell anybody.'],
            ['prediction', 'I think it will be sunny.'],
          ],
        },
      ),
    ],
    test: [
      choice('Choose.', '“Ich will ein Eis.”', [
        'I will an ice cream.',
        '*I want an ice cream.',
        'I’ll an ice cream.',
      ]),
      match('Match.', [
        ['The phone is ringing.', 'I’ll answer it.'],
        ['It’s cold in here.', 'I’ll close the window.'],
        ['Please don’t tell Diego.', 'Don’t worry, I won’t.'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'will or going to?',
    ref: [B, 10, 2],
    learn: [
      tip(
        'When did you decide?',
        'Decided before → going to: “I’m going to visit my aunt on Sunday.” Decided now → will: “Oh, it’s Sunday? Then I’ll visit my aunt.”',
      ),
    ],
    test: [
      cloze(
        'Complete.',
        '▸ Why have you got a paintbrush? ▸ I’m [going to] paint the kitchen. ▸ The paint is on the top shelf. I[’ll] get it for you.',
        ['will to'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Arrangements',
    ref: [B, 10, 3],
    learn: [
      grammar(
        'Present continuous for the future',
        'When something is fixed – a ticket, a booking, an appointment – English often uses the present continuous with a future time: “We’re arriving on the 14th.”, “I’m meeting Tom at six.”',
      ),
    ],
    test: [
      choice('Choose.', 'You have a ticket for a concert on Saturday.', [
        'I go to a concert on Saturday.',
        '*I’m going to a concert on Saturday.',
        'I’ll go to a concert on Saturday, I think.',
      ]),
      cloze('Complete.', 'We’re [arriving] on Friday and we’re [staying] for two nights.', [
        'arrive',
        'stay',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Booking a room',
    ref: [B, 10, 3],
    learn: [
      words('Accommodation', [
        ['B&B', 'Frühstückspension'],
        ['single / double room', 'Einzel- / Doppelzimmer'],
        ['twin room', 'Zimmer mit zwei Einzelbetten'],
        ['to book', 'buchen'],
        ['check in / check out', 'einchecken / auschecken'],
        ['a night', 'pro Nacht'],
      ]),
    ],
    test: [
      match('Match.', [
        ['one bed for one person', 'a single room'],
        ['one big bed for two', 'a double room'],
        ['two beds', 'a twin room'],
      ]),
      cloze('Complete.', 'Have you got a room for two [nights]? – Yes, it’s £90 a [night].', [
        'day',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'At the station',
    ref: [B, 10, 4],
    learn: [
      words('Trains', [
        ['single', 'einfache Fahrkarte'],
        ['return', 'Hin- und Rückfahrkarte'],
        ['platform', 'Gleis'],
        ['to leave', 'abfahren'],
        ['to arrive', 'ankommen'],
        ['to change', 'umsteigen'],
        ['delayed', 'verspätet'],
        ['cancelled', 'ausgefallen'],
      ]),
    ],
    test: [
      match('Match.', [
        ['a return ticket', 'eine Hin- und Rückfahrkarte'],
        ['to change trains', 'umsteigen'],
        ['the train is delayed', 'der Zug hat Verspätung'],
      ]),
      choice('Choose.', 'You go to Edinburgh and come back on Sunday. You need …', [
        'a single.',
        '*a return.',
        'a platform.',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'An announcement',
    ref: [B, 10, 4],
    learn: [
      text(
        '“Platform 4 for the 9:15 service to Edinburgh. This train is delayed by approximately ten minutes. We apologise for the delay. The 9:30 service to Newcastle is cancelled.”',
      ),
      tip(
        'Timetables',
        'Timetables use the present simple for the future: “The train leaves at 9:15.”',
      ),
    ],
    test: [
      choice('Choose.', 'When will the train to Edinburgh leave?', [
        '*At about 9:25.',
        'At 9:15, on time.',
        'It’s cancelled.',
      ]),
      choice('Choose.', 'Which train doesn’t run?', [
        'the 9:15 to Edinburgh',
        '*the 9:30 to Newcastle',
        'the 9:25 to Newcastle',
      ]),
    ],
  },

  // ------------------------------------------------ Chapter 11: Home and neighbourhood
  {
    kind: 'VOCAB',
    title: 'Rooms and furniture',
    ref: [B, 11, 1],
    learn: [
      words('The home', [
        ['living room', 'Wohnzimmer'],
        ['bedroom', 'Schlafzimmer'],
        ['kitchen', 'Küche'],
        ['bathroom', 'Badezimmer'],
        ['sofa', 'Sofa'],
        ['fridge', 'Kühlschrank'],
        ['washing machine', 'Waschmaschine'],
        ['to move (house)', 'umziehen'],
      ]),
    ],
    test: [
      match('Where do you usually find it?', [
        ['a fridge', 'in the kitchen'],
        ['a shower', 'in the bathroom'],
        ['a bed', 'in the bedroom'],
        ['a sofa', 'in the living room'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'ground floor, first floor',
    ref: [B, 11, 1],
    learn: [
      culture(
        'Floors and flats',
        'In the UK the street level is the “ground floor”, the next one up the “first floor”. In the USA, the street level is the “first floor”. British “flat” = American “apartment”.',
      ),
    ],
    test: [
      choice('Choose.', 'In London, you walk into a building from the street. You are on the …', [
        '*ground floor.',
        'first floor.',
        'second floor.',
      ]),
      choice('Choose.', 'An American says “apartment”. A British person says …', [
        '*flat.',
        'house.',
        'floor.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Comparatives',
    ref: [B, 11, 2],
    learn: [
      grammar(
        '-er or more',
        'Short adjectives: + er (bigger, cheaper). -y: -ier (friendlier). Long: more (more expensive). Irregular: good → better, bad → worse. After it: “than”.',
        {
          headers: ['adjective', 'comparative'],
          rows: [
            ['cheap', 'cheaper'],
            ['big', 'bigger'],
            ['easy', 'easier'],
            ['expensive', 'more expensive'],
            ['good', 'better'],
          ],
        },
      ),
    ],
    test: [
      choice('Choose.', 'Which sentence is correct?', [
        'London is more big than Manchester.',
        'London is bigger as Manchester.',
        '*London is bigger than Manchester.',
      ]),
      match('Match.', [
        ['good', 'better'],
        ['bad', 'worse'],
        ['hot', 'hotter'],
        ['comfortable', 'more comfortable'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Superlatives',
    ref: [B, 11, 3],
    learn: [
      grammar(
        'the -est, the most',
        'Same rules as the comparative, with “the”: the cheapest, the busiest, the most beautiful, the best, the worst. Places go with “in”: “the best café in town”.',
      ),
    ],
    test: [
      choice('Choose.', 'Which sentence is correct?', [
        'It’s the most big park of the city.',
        '*It’s the biggest park in the city.',
        'It’s biggest park in the city.',
      ]),
      cloze('Complete.', 'It’s the [cheapest] supermarket in the area, but the [worst] bakery.', [
        'cheaper',
        'baddest',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'My neighbourhood',
    ref: [B, 11, 3],
    learn: [
      text(
        'Karim: “Rusholme has the best curry restaurants in Manchester – and the busiest street on a Saturday night! The park is the most beautiful place in spring. The worst thing? Parking. It’s the most difficult thing in the world here.”',
      ),
    ],
    test: [
      choice('Choose.', 'What is the worst thing about Rusholme?', [
        'the restaurants',
        '*parking',
        'the park',
      ]),
      choice('Choose.', 'When is the park most beautiful?', [
        'in summer',
        '*in spring',
        'on Saturday night',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'as … as',
    ref: [B, 11, 4],
    learn: [
      grammar(
        'The same – or less',
        '“as big as” = genauso groß wie. “not as expensive as” = nicht so teuer wie.',
        {
          headers: ['German', 'English'],
          rows: [
            ['genauso groß wie', 'as big as'],
            ['nicht so teuer wie', 'not as expensive as'],
            ['größer als', 'bigger than'],
          ],
        },
      ),
    ],
    test: [
      match('Same meaning?', [
        ['My flat isn’t as big as yours.', 'Your flat is bigger than mine.'],
        ['Tea isn’t as expensive as coffee.', 'Coffee is more expensive than tea.'],
        ['Anna is as tall as Yuki.', 'They are the same height.'],
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Flat to rent',
    ref: [B, 11, 4],
    learn: [
      words('Renting', [
        ['to rent', 'mieten'],
        ['rent', 'Miete'],
        ['bills', 'Nebenkosten'],
        ['included', 'inklusive'],
        ['bright', 'hell'],
        ['landlord', 'Vermieter'],
        ['neighbour', 'Nachbar/in'],
      ]),
      text(
        'Advert: “Bright two-bedroom flat. Close to the tram stop. No pets. £950 per month, bills not included.”',
      ),
    ],
    test: [
      choice('Choose.', 'Yuki has a cat. Can she rent this flat?', [
        'Yes, cats are OK.',
        '*No, pets aren’t allowed.',
      ]),
      choice('Choose.', 'Is the electricity in the £950?', [
        'Yes, bills are included.',
        '*No, bills are extra.',
      ]),
    ],
  },

  // ------------------------------------------------ Chapter 12: Celebrations
  {
    kind: 'TEXT',
    title: 'Festivals',
    ref: [B, 12, 1],
    learn: [
      culture(
        'Special days',
        'Bonfire Night (5 November, UK): fireworks and big fires. Thanksgiving (fourth Thursday in November, USA): families eat turkey. Boxing Day (26 December): big sales. St Patrick’s Day (17 March): the Irish national day.',
      ),
    ],
    test: [
      match('Match.', [
        ['Bonfire Night', 'the 5th of November'],
        ['Boxing Day', 'the 26th of December'],
        ['St Patrick’s Day', 'the 17th of March'],
      ]),
      choice('Choose.', 'What do American families usually eat at Thanksgiving?', [
        '*turkey',
        'fish and chips',
        'crackers',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Dates',
    ref: [B, 12, 1],
    learn: [
      grammar(
        'on the 5th of November',
        'Dates use ordinal numbers: write “5 November”, say “the fifth of November”. Dates go with “on”, months with “in”, and “at Christmas” for the holiday.',
      ),
    ],
    test: [
      choice('Choose.', 'Which sentence is correct?', [
        'My birthday is in the 3rd of June.',
        '*My birthday is on the 3rd of June.',
        'My birthday is at 3 June.',
      ]),
      cloze(
        'Complete.',
        'We have a big dinner [at] Christmas. Her birthday is [on] the 17th. The festival is [in] August.',
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Invitations',
    ref: [B, 12, 2],
    learn: [
      grammar(
        'Would you like to …?',
        'Invite with “Would you like to + verb?” or “Let’s …”. Accept: “I’d love to!” Refuse politely: “I’m afraid I can’t – I’m working. But thanks!”',
      ),
    ],
    test: [
      choice(
        'Choose the most polite answer.',
        '“Would you like to come to dinner on Friday?” – You can’t.',
        ['No, I don’t want.', '*I’m afraid I can’t. I’m visiting my parents. But thanks!', 'No.'],
      ),
      cloze('Complete.', 'Would you like [to] come to my party? – I’d [love] to!', ['like', 'for']),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Wishes',
    ref: [B, 12, 3],
    learn: [
      words('Wishes', [
        ['Happy birthday!', 'Alles Gute zum Geburtstag!'],
        ['Congratulations!', 'Herzlichen Glückwunsch!'],
        ['Good luck!', 'Viel Glück!'],
        ['Get well soon!', 'Gute Besserung!'],
        ['Happy New Year!', 'Frohes neues Jahr!'],
        ['Have a great time!', 'Viel Spaß!'],
      ]),
    ],
    test: [
      match('What do you say?', [
        ['A friend is ill.', 'Get well soon!'],
        ['A colleague has an exam.', 'Good luck!'],
        ['Your brother is getting married.', 'Congratulations!'],
        ['It’s the 1st of January.', 'Happy New Year!'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'give somebody something',
    ref: [B, 12, 3],
    learn: [
      grammar(
        'Two objects',
        'Person first, no preposition: “I gave Emma a book.” Thing first, with “to” (or “for” with buy): “I gave a book to Emma.”',
      ),
    ],
    test: [
      choice('Choose.', 'Which sentence is correct?', [
        'I gave to her a present.',
        '*I gave her a present.',
        'I gave a present her.',
      ]),
      order('Make a sentence.', ['Karim', 'sent', 'his mother', 'some flowers.']),
    ],
  },
  {
    kind: 'TEXT',
    title: 'The end-of-course party',
    ref: [B, 12, 4],
    learn: [
      text(
        'Yuki: “When I arrived at Emma’s flat, Diego was cooking tacos and Anna was putting up lights. Karim came at nine with Egyptian sweets. Later, while we were dancing, Emma gave each of us a small notebook. It was the best evening of the year.”',
      ),
    ],
    test: [
      choice('Choose.', 'What was Anna doing when Yuki arrived?', [
        'She was cooking tacos.',
        '*She was putting up lights.',
        'She was dancing.',
      ]),
      order('Put the evening in order.', [
        'Yuki arrived.',
        'Karim came with sweets.',
        'Emma gave everybody a notebook.',
      ]),
    ],
  },

  // ------------------------------------------------ Grammar book
  {
    kind: 'GRAMMAR',
    title: 'State verbs',
    ref: [G, 5, 3],
    learn: [
      grammar(
        'No -ing',
        'Verbs for feelings, thinking and owning don’t normally take -ing: like, love, want, need, know, understand, believe, belong. But “have breakfast” is an action: “We’re having breakfast.”',
      ),
    ],
    test: [
      choice('Choose.', 'Which sentence is correct?', [
        'I’m not understanding this word.',
        '*I don’t understand this word.',
        'I not understand this word.',
      ]),
      choice('Choose.', 'Can I call you back? We ___ dinner.', ['have', '*’re having', 'having']),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Past simple, not “Perfekt”',
    ref: [G, 6, 1],
    learn: [
      grammar(
        'I worked yesterday',
        'Spoken German says “Ich habe gestern gearbeitet.” English uses the past simple for a finished time: “I worked yesterday.” – never “I have worked yesterday.”',
      ),
      tip(
        '-ed sounds',
        'After t/d: “id” (wanted). After p, k, s, sh, ch, f: “t” (stopped). Otherwise: “d” (played).',
      ),
    ],
    test: [
      choice('Choose.', '“Ich habe sie letzte Woche angerufen.”', [
        'I have called her last week.',
        '*I called her last week.',
        'I have call her last week.',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'More irregular verbs',
    ref: [G, 6, 2],
    learn: [
      grammar(
        'Learn them in groups',
        'bring → brought, buy → bought, think → thought, teach → taught. Some don’t change: put → put, cut → cut, cost → cost.',
        {
          headers: ['verb', 'past'],
          rows: [
            ['feel', 'felt'],
            ['leave', 'left'],
            ['know', 'knew'],
            ['say', 'said'],
            ['give', 'gave'],
          ],
        },
      ),
    ],
    test: [
      match('Match.', [
        ['think', 'thought'],
        ['leave', 'left'],
        ['know', 'knew'],
        ['put', 'put'],
      ]),
      choice('Choose.', 'Which past form is correct?', ['teached', '*taught', 'tought']),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Which future?',
    ref: [G, 7, 3],
    learn: [
      grammar(
        'Three forms',
        'Decided now → will. Plan → going to. Fixed arrangement → present continuous. Timetable → present simple.',
        {
          headers: ['form', 'example'],
          rows: [
            ['will', 'I’ll have the fish.'],
            ['going to', 'I’m going to cook tonight.'],
            ['present continuous', 'I’m meeting Sam at 8.'],
            ['present simple', 'The film starts at 8.'],
          ],
        },
      ),
    ],
    test: [
      choice('Choose.', '“We haven’t got any milk.” – “Oh, really? ___ some.”', [
        'I’m going to buy',
        '*I’ll buy',
        'I buy',
      ]),
      match('Match.', [
        ['I’m flying to Oslo on Friday.', 'I have a ticket.'],
        ['I’m going to learn to swim.', 'It’s my plan for this year.'],
        ['The flight leaves at 6:05.', 'It’s on the timetable.'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'quick or quickly?',
    ref: [G, 8, 3],
    learn: [
      grammar(
        'Adjective or adverb',
        'An adjective describes a noun: “a slow driver”. An adverb describes a verb and usually ends in -ly: “He drives slowly.” Irregular: good → well, fast → fast, hard → hard.',
        {
          headers: ['adjective', 'adverb'],
          rows: [
            ['careful', 'carefully'],
            ['easy', 'easily'],
            ['good', 'well'],
          ],
        },
      ),
    ],
    test: [
      choice('Choose.', '“Sie spricht sehr gut Englisch.”', [
        'She speaks English very good.',
        '*She speaks English very well.',
        'She speaks very well English.',
      ]),
      cloze('Complete.', 'Please drive [carefully]. She’s a very [careful] driver.'),
    ],
  },
]);
