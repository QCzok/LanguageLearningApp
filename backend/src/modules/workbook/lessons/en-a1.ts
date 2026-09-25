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

/** Englisch A1 – Beginner, Kapitel 1 bis 6, dazu die A1-Kapitel des Grammatikbuchs. */
export const EN_A1 = lessons('en-a1', [
  // ------------------------------------------------ Chapter 1: Hello!
  {
    kind: 'VOCAB',
    title: 'Hello and goodbye',
    ref: [B, 1, 1],
    learn: [
      words('Saying hello and goodbye', [
        ['hello', 'hallo, guten Tag'],
        ['hi', 'hi, hallo'],
        ['good morning', 'guten Morgen'],
        ['good afternoon', 'guten Tag (nachmittags)'],
        ['good evening', 'guten Abend'],
        ['goodbye', 'auf Wiedersehen'],
        ['bye', 'tschüss'],
        ['see you later', 'bis später'],
        ['How are you?', 'Wie geht es Ihnen/dir?'],
      ]),
    ],
    test: [
      match('Match.', [
        ['How are you?', 'Very well, thank you.'],
        ['Good morning!', 'Good morning!'],
        ['See you later!', 'Bye!'],
      ]),
      choice('Choose.', 'You leave the office at five. What do you say?', [
        '*Goodbye, see you tomorrow!',
        'Hello!',
        'Good morning.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'One “you” for everybody',
    ref: [B, 1, 1],
    learn: [
      grammar(
        'Formal and informal',
        'English has only one “you” – for friends and for strangers. You show politeness with titles (Mr, Mrs, Ms), with the surname and with more formal words.',
        {
          headers: ['', 'informal', 'formal'],
          rows: [
            ['Hello', 'Hi, Diego!', 'Good morning, Mr Brown.'],
            ['Question', 'How’s it going?', 'How are you?'],
            ['Goodbye', 'Bye! See you!', 'Goodbye.'],
          ],
        },
      ),
    ],
    test: [
      choice('Choose.', 'You meet your new boss for the first time.', [
        'Hi! How’s it going?',
        '*Good morning. How are you?',
      ]),
      choice('Choose.', 'You meet a classmate in the café.', [
        '*Hi! How’s it going?',
        'Good afternoon, Mr Ruiz.',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Good evening – good night',
    ref: [B, 1, 1],
    learn: [
      culture(
        'Which greeting when?',
        'The time of day decides the formal greeting. “Good night” is not a greeting: you only say it when you leave in the evening or go to bed.',
        {
          headers: ['Time', 'Hello', 'Goodbye'],
          rows: [
            ['until 12:00', 'Good morning.', 'Goodbye.'],
            ['12:00 – 18:00', 'Good afternoon.', 'Goodbye.'],
            ['after 18:00', 'Good evening.', 'Good night.'],
          ],
        },
      ),
    ],
    test: [
      match('Which greeting fits?', [
        ['9:00, you arrive', 'Good morning.'],
        ['15:00, you arrive', 'Good afternoon.'],
        ['20:00, you arrive', 'Good evening.'],
        ['23:00, you leave', 'Good night.'],
      ]),
      choice('Choose.', 'It’s 8 p.m. You walk into a restaurant. What do you say?', [
        '*Good evening.',
        'Good night.',
        'Good afternoon.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'I’m, you’re, she’s',
    ref: [B, 1, 2],
    learn: [
      grammar(
        'to be: singular',
        '“to be” is irregular. In speaking, people almost always use the short forms. The pronoun can never be left out.',
        {
          headers: ['Person', 'long form', 'short form'],
          rows: [
            ['I', 'I am', 'I’m'],
            ['you', 'you are', 'you’re'],
            ['he', 'he is', 'he’s'],
            ['she', 'she is', 'she’s'],
            ['it', 'it is', 'it’s'],
          ],
        },
      ),
    ],
    test: [
      cloze('Complete.', 'I [am] Anna. You [are] my teacher. Diego [is] from Mexico.', [
        'be',
        'has',
      ]),
      match('Match.', [
        ['I am', 'I’m'],
        ['you are', 'you’re'],
        ['she is', 'she’s'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'What’s your name?',
    ref: [B, 1, 2],
    learn: [
      tip(
        'Saying your name',
        'Two common ways: “My name’s Emma.” and “I’m Emma.” To ask, say “What’s your name?” – “what’s” is “what is”.',
        {
          headers: ['Question', 'Answer'],
          rows: [
            ['What’s your name?', 'My name’s Diego.'],
            ['What’s her name?', 'Her name’s Yuki.'],
            ['Nice to meet you.', 'Nice to meet you too.'],
          ],
        },
      ),
    ],
    test: [
      order('Make the question.', ['What’s', 'your', 'first', 'name?']),
      choice('Choose.', 'How do you say “Sie ist Lehrerin”?', [
        'Is teacher.',
        '*She’s a teacher.',
        'She a teacher.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Where are you from?',
    ref: [B, 1, 3],
    learn: [
      grammar(
        'to be: questions and “not”',
        'In the plural, the form is always “are”. For a question, the verb goes before the subject. For the negative, “not” goes after the verb.',
        {
          headers: ['Person', '+', '–', '?'],
          rows: [
            ['I', 'I’m', 'I’m not', 'Am I …?'],
            ['he / she', 'he’s', 'he isn’t', 'Is he …?'],
            ['we / you / they', 'we’re', 'we aren’t', 'Are we …?'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'Where [are] you from? – I’m from Germany. Diego and Yuki [aren’t] from Spain.',
        ['is', 'isn’t'],
      ),
      order('Make the question.', ['Where', 'are', 'you', 'from?']),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Countries and nationalities',
    ref: [B, 1, 3],
    learn: [
      words('Countries and nationalities', [
        ['Germany – German', 'Deutschland – deutsch'],
        ['Spain – Spanish', 'Spanien – spanisch'],
        ['Mexico – Mexican', 'Mexiko – mexikanisch'],
        ['Japan – Japanese', 'Japan – japanisch'],
        ['Egypt – Egyptian', 'Ägypten – ägyptisch'],
        ['country', 'das Land'],
        ['language', 'die Sprache'],
      ]),
      tip(
        'Capital letters',
        'Countries, nationalities and languages always start with a capital letter in English: Germany, German, Spanish.',
      ),
    ],
    test: [
      match('Match the country with the nationality.', [
        ['Germany', 'German'],
        ['Mexico', 'Mexican'],
        ['Japan', 'Japanese'],
        ['Spain', 'Spanish'],
      ]),
      choice('Choose.', 'Which sentence is written correctly?', [
        'I speak german.',
        '*I speak German.',
        'I Speak German.',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Spelling and numbers',
    ref: [B, 1, 4],
    learn: [
      tip(
        'Tricky letters',
        'Some English letter names sound like a different German letter. Two of the same letter are “double”: Anna = A, double N, A.',
        {
          headers: ['Letter', 'sounds like'],
          rows: [
            ['E', '„ii“'],
            ['I', '„ai“'],
            ['G', '„dschii“'],
            ['J', '„dschäi“'],
            ['Y', '„wai“'],
          ],
        },
      ),
      text(
        'Numbers: 13 thirteen, 14 fourteen, 15 fifteen … 19 nineteen, 20 twenty. Stress the end: “thirTEEN”.',
      ),
    ],
    test: [
      choice('Choose.', 'How do you spell “Jessie”?', [
        'G, E, double S, I, E',
        '*J, E, double S, I, E',
        'J, I, double S, E, I',
      ]),
      match('Match.', [
        ['11', 'eleven'],
        ['12', 'twelve'],
        ['15', 'fifteen'],
        ['20', 'twenty'],
      ]),
    ],
  },

  // ------------------------------------------------ Chapter 2: My family
  {
    kind: 'VOCAB',
    title: 'The family',
    ref: [B, 2, 1],
    learn: [
      words('Family', [
        ['mother / mum', 'Mutter / Mama'],
        ['father / dad', 'Vater / Papa'],
        ['parents', 'Eltern'],
        ['sister', 'Schwester'],
        ['brother', 'Bruder'],
        ['daughter', 'Tochter'],
        ['son', 'Sohn'],
        ['grandmother', 'Großmutter'],
        ['husband / wife', 'Ehemann / Ehefrau'],
        ['children', 'Kinder'],
      ]),
    ],
    test: [
      match('Match the pairs.', [
        ['mother', 'father'],
        ['sister', 'brother'],
        ['daughter', 'son'],
        ['wife', 'husband'],
      ]),
      choice('Choose.', 'Your mother’s mother is your …', [
        '*grandmother.',
        'sister.',
        'daughter.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'my, your, his, her',
    ref: [B, 2, 1],
    learn: [
      grammar(
        'Look at the owner',
        'Possessives never change their form. In the third person, English asks who the owner is: a man → his, a woman → her. “Anna and her brother”, “Diego and his sister”.',
        {
          headers: ['Person', 'Possessive'],
          rows: [
            ['I', 'my'],
            ['you', 'your'],
            ['he', 'his'],
            ['she', 'her'],
            ['we', 'our'],
            ['they', 'their'],
          ],
        },
      ),
    ],
    test: [
      choice('Choose.', 'Anna lives in Manchester. ___ brother lives in Berlin.', [
        'His',
        '*Her',
        'Their',
      ]),
      cloze(
        'Complete.',
        'Diego lives with [his] parents. Sofía and [her] boyfriend are students. Lucía and Pablo love [their] children.',
        ['our', 'its'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Yuki’s phone',
    ref: [B, 2, 2],
    learn: [
      grammar(
        'The ’s',
        'To say who owns something, add ’s to the person: “Yuki’s phone”, “my mother’s car”. After a plural with -s, only the apostrophe: “my parents’ house”.',
      ),
    ],
    test: [
      choice('Choose.', 'The car belongs to Diego’s father.', [
        'It’s the car of Diego’s father.',
        '*It’s Diego’s father’s car.',
        'It’s Diego father car.',
      ]),
      cloze(
        'Complete.',
        'This is my [sister’s] bag. The house belongs to my parents – it’s my [parents’] house.',
        ['sisters', 'parent’s'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'have got',
    ref: [B, 2, 2],
    learn: [
      grammar(
        'I’ve got – she’s got',
        'British English often uses “have got” for things you own and for family. With he, she and it it is “has got”, short “’s got”.',
        {
          headers: ['', '+', '–', '?'],
          rows: [
            ['I / you / we / they', 'I’ve got', 'I haven’t got', 'Have you got …?'],
            ['he / she / it', 'she’s got', 'she hasn’t got', 'Has she got …?'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        '[Have] you got any brothers? – No, but I’ve got a sister. She [has] got two children. My brother [hasn’t] got a car.',
        ['haven’t', 'is'],
      ),
      order('Make the question.', ['Has', 'your', 'sister', 'got', 'a car?']),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Describing people',
    ref: [B, 2, 3],
    learn: [
      words('Describing people', [
        ['tall', 'groß (Person)'],
        ['short', 'klein; kurz'],
        ['young', 'jung'],
        ['old', 'alt'],
        ['friendly', 'freundlich'],
        ['funny', 'lustig'],
        ['quiet', 'ruhig'],
        ['hair', 'Haare'],
        ['eyes', 'Augen'],
      ]),
    ],
    test: [
      match('Match the opposites.', [
        ['tall', 'short'],
        ['young', 'old'],
        ['quiet', 'loud'],
      ]),
      choice('Choose.', 'Rosa is seventy-two. She is …', ['young.', '*old.', 'tall.']),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Adjectives never change',
    ref: [B, 2, 3],
    learn: [
      grammar(
        'One form for everything',
        'English adjectives have no endings: “a tall man”, “a tall woman”, “tall children”. For hair, size comes before colour: “long black hair”.',
        {
          headers: ['German', 'English'],
          rows: [
            ['ein großer Mann', 'a tall man'],
            ['große Kinder', 'tall children'],
            ['lange schwarze Haare', 'long black hair'],
          ],
        },
      ),
    ],
    test: [
      choice('Choose.', 'Which sentence is correct?', [
        'She’s got black long hair.',
        '*She’s got long black hair.',
        'She’s got longs blacks hair.',
      ]),
      choice('Choose.', 'Which sentence is correct?', [
        'They are talls.',
        '*They are tall.',
        'They are tallen.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'How old are you?',
    ref: [B, 2, 4],
    learn: [
      grammar(
        'I’m 34 – not “I have 34”',
        'Age goes with “to be”: “I’m thirty-four.” or “I’m thirty-four years old.” – never “I have 34” and never just “34 years”.',
      ),
      text(
        'Tens end in -ty: twenty, thirty, forty (no u!), fifty. Then the one with a hyphen: 34 = thirty-four.',
      ),
    ],
    test: [
      choice('Choose.', 'How old is your grandmother?', [
        'She has seventy-two years.',
        '*She’s seventy-two.',
        'She’s seventy-two years.',
      ]),
      match('Match.', [
        ['14', 'fourteen'],
        ['40', 'forty'],
        ['47', 'forty-seven'],
        ['74', 'seventy-four'],
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Months and birthdays',
    ref: [B, 2, 4],
    learn: [
      words('Months', [
        ['January', 'Januar'],
        ['March', 'März'],
        ['May', 'Mai'],
        ['June', 'Juni'],
        ['July', 'Juli'],
        ['October', 'Oktober'],
        ['December', 'Dezember'],
        ['birthday', 'Geburtstag'],
      ]),
      tip(
        'in + month',
        'Months start with a capital letter and go with “in”: “My birthday is in May.”',
      ),
    ],
    test: [
      cloze('Complete.', '[When’s] your birthday? – It’s [in] March.', ['on', 'Who’s']),
      order('Put the months in order.', ['February', 'April', 'August', 'November']),
    ],
  },

  // ------------------------------------------------ Chapter 3: In town
  {
    kind: 'VOCAB',
    title: 'Places in town',
    ref: [B, 3, 1],
    learn: [
      words('Places', [
        ['supermarket', 'Supermarkt'],
        ['bank', 'Bank'],
        ['post office', 'Post'],
        ['station', 'Bahnhof'],
        ['bus stop', 'Bushaltestelle'],
        ['chemist’s', 'Apotheke, Drogerie'],
        ['hospital', 'Krankenhaus'],
        ['cinema', 'Kino'],
        ['museum', 'Museum'],
      ]),
    ],
    test: [
      match('Where do you go?', [
        ['You want to see a film.', 'the cinema'],
        ['You want to take a train.', 'the station'],
        ['You need medicine.', 'the chemist’s'],
        ['You want to send a letter.', 'the post office'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'there is – there are',
    ref: [B, 3, 1],
    learn: [
      grammar(
        'es gibt',
        'One thing → “there is” (there’s). More things → “there are”. In negatives and questions with plurals, use “any”.',
        {
          headers: ['', 'singular', 'plural'],
          rows: [
            ['+', 'There’s a park.', 'There are two cafés.'],
            ['–', 'There isn’t a cinema.', 'There aren’t any shops.'],
            ['?', 'Is there a bank?', 'Are there any hotels?'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'There [is] a small supermarket and there [are] two bus stops. There [isn’t] a cinema.',
        ['aren’t', 'be'],
      ),
      choice('Choose.', '___ any good restaurants near here?', [
        'Is there',
        '*Are there',
        'There are',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Prepositions of place',
    ref: [B, 3, 2],
    learn: [
      grammar(
        'Where is it?',
        'The article never changes after a preposition: always “next to the bank”, “opposite the station”. Streets go with “in”: “in King Street”.',
        {
          headers: ['English', 'German'],
          rows: [
            ['next to', 'neben'],
            ['opposite', 'gegenüber'],
            ['between … and …', 'zwischen … und …'],
            ['in front of', 'vor'],
            ['behind', 'hinter'],
          ],
        },
      ),
    ],
    test: [
      match('Match.', [
        ['behind the station', 'hinter dem Bahnhof'],
        ['opposite the bank', 'gegenüber der Bank'],
        ['in front of the cinema', 'vor dem Kino'],
        ['next to the park', 'neben dem Park'],
      ]),
      cloze(
        'Complete.',
        'The museum is [next] to the bank. The post office is [between] the café and the chemist’s.',
        ['near', 'behind'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Asking the way',
    ref: [B, 3, 3],
    learn: [
      dialogue('In the street', [
        'Diego: Excuse me, how do I get to the station, please?',
        'Woman: Go straight on and turn left at the traffic lights.',
        'Woman: Then take the second street on the right.',
        'Diego: Is it far?',
        'Woman: No, it’s about five minutes on foot.',
      ]),
    ],
    test: [
      order('Put the directions in order.', [
        'Go straight on.',
        'Turn left at the traffic lights.',
        'Take the second street on the right.',
      ]),
      choice('Choose.', 'How long does it take to the station?', [
        '*Five minutes on foot.',
        'Five minutes by bus.',
        'Fifteen minutes on foot.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'The imperative',
    ref: [B, 3, 3],
    learn: [
      grammar(
        'Turn left! – Don’t turn right!',
        'For instructions, use the verb without a subject. It is the same for everybody. The negative starts with “Don’t”. Add “please” to sound polite.',
        {
          headers: ['+', '–'],
          rows: [
            ['Turn left.', 'Don’t turn left.'],
            ['Cross the street.', 'Don’t cross the street.'],
          ],
        },
      ),
    ],
    test: [
      choice('Choose.', 'Tell somebody not to cross the street here.', [
        'Not cross the street here.',
        '*Don’t cross the street here.',
        'You not cross the street here.',
      ]),
      cloze('Complete.', 'Go [straight] on and [turn] right at the corner.', ['take', 'left']),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'By bus or on foot',
    ref: [B, 3, 4],
    learn: [
      words('Getting around', [
        ['by bus', 'mit dem Bus'],
        ['by train', 'mit dem Zug'],
        ['by bike', 'mit dem Fahrrad'],
        ['by car', 'mit dem Auto'],
        ['on foot', 'zu Fuß'],
        ['tram', 'Straßenbahn'],
      ]),
      tip(
        'by – no article',
        'Transport goes with “by” and no article: “by bus”. The exception is “on foot”.',
      ),
    ],
    test: [
      choice('Choose.', 'How does Anna get to school?', [
        'She goes with the bike.',
        '*She goes by bike.',
        'She goes by the bike.',
      ]),
      cloze('Complete.', 'Yuki walks – she goes [on] foot. Diego goes [by] tram.', ['with', 'in']),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'first, second, third',
    ref: [B, 3, 4],
    learn: [
      grammar(
        'Ordinal numbers',
        'Most ordinal numbers end in -th. The first three are special. Short forms: 1st, 2nd, 3rd, 4th.',
        {
          headers: ['', '', ''],
          rows: [
            ['1st first', '4th fourth', '7th seventh'],
            ['2nd second', '5th fifth', '8th eighth'],
            ['3rd third', '6th sixth', '10th tenth'],
          ],
        },
      ),
    ],
    test: [
      match('Match.', [
        ['1st', 'first'],
        ['2nd', 'second'],
        ['3rd', 'third'],
        ['5th', 'fifth'],
      ]),
    ],
  },

  // ------------------------------------------------ Chapter 4: My day
  {
    kind: 'GRAMMAR',
    title: 'What time is it?',
    ref: [B, 4, 1],
    learn: [
      grammar(
        'past and to',
        'Up to half past, say “past”: “ten past eight”. After half past, say “to”: “twenty to nine”. Careful: “half past eight” is 8:30 – “halb neun” in German!',
        {
          headers: ['Time', 'English'],
          rows: [
            ['8:00', 'eight o’clock'],
            ['8:15', 'quarter past eight'],
            ['8:30', 'half past eight'],
            ['8:45', 'quarter to nine'],
          ],
        },
      ),
    ],
    test: [
      match('Match.', [
        ['7:30', 'half past seven'],
        ['9:15', 'quarter past nine'],
        ['10:45', 'quarter to eleven'],
        ['6:05', 'five past six'],
      ]),
      choice('Choose.', '“halb drei” in English is …', [
        'half past three.',
        '*half past two.',
        'half to three.',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'The daily routine',
    ref: [B, 4, 2],
    learn: [
      words('My day', [
        ['get up', 'aufstehen'],
        ['have a shower', 'duschen'],
        ['have breakfast', 'frühstücken'],
        ['go to work', 'zur Arbeit gehen'],
        ['have lunch', 'zu Mittag essen'],
        ['finish work', 'Feierabend machen'],
        ['get home', 'nach Hause kommen'],
        ['go to bed', 'ins Bett gehen'],
      ]),
    ],
    test: [
      order('Put the day in order.', [
        'get up',
        'have breakfast',
        'go to work',
        'have lunch',
        'go to bed',
      ]),
      cloze('Complete.', 'I [have] breakfast at seven and I go to [bed] at eleven.', [
        'get',
        'work',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'she works – the -s',
    ref: [B, 4, 2],
    learn: [
      grammar(
        'Present simple: he, she, it + -s',
        'The verb is the same for everybody – except he, she and it. They get -s. After -sh, -ch, -ss, -o: -es. Consonant + y: -ies. “have” becomes “has”.',
        {
          headers: ['I / you / we / they', 'he / she / it'],
          rows: [
            ['work', 'works'],
            ['watch', 'watches'],
            ['go', 'goes'],
            ['study', 'studies'],
            ['have', 'has'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'Anna [gets] up at six. She [watches] TV in the evening. Diego [studies] every day.',
        ['get', 'watchs', 'studys'],
      ),
      choice('Choose.', 'Which sentence is correct?', [
        'My sister work in a bank.',
        '*My sister works in a bank.',
        'My sister is work in a bank.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Do you …? Does she …?',
    ref: [B, 4, 3],
    learn: [
      grammar(
        'The helper verbs do and does',
        'Normal verbs need a helper for questions and negatives: “do”, or “does” for he, she, it. The -s moves to the helper, so the main verb has no -s.',
        {
          headers: ['', 'I / you / we / they', 'he / she / it'],
          rows: [
            ['?', 'Do you work?', 'Does she work?'],
            ['–', 'I don’t work.', 'She doesn’t work.'],
          ],
        },
      ),
    ],
    test: [
      choice('Choose.', 'You want to know if Yuki speaks Chinese.', [
        'Speaks Yuki Chinese?',
        'Does Yuki speaks Chinese?',
        '*Does Yuki speak Chinese?',
      ]),
      cloze('Complete.', '[Do] you like your job? – Yes, but my husband [doesn’t] like his.', [
        'Does',
        'don’t',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Short answers',
    ref: [B, 4, 3],
    learn: [
      tip(
        'Yes, I do. – No, she doesn’t.',
        'Just “Yes.” or “No.” can sound unfriendly. Answer with the helper verb from the question.',
        {
          headers: ['Question', 'Yes', 'No'],
          rows: [
            ['Do you work?', 'Yes, I do.', 'No, I don’t.'],
            ['Does he work?', 'Yes, he does.', 'No, he doesn’t.'],
          ],
        },
      ),
    ],
    test: [
      match('Match.', [
        ['Do you live in London?', 'No, I don’t.'],
        ['Does Karim have a son?', 'Yes, he does.'],
        ['Do they study English?', 'Yes, they do.'],
        ['Does the shop open on Sundays?', 'No, it doesn’t.'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'always, usually, never',
    ref: [B, 4, 4],
    learn: [
      grammar(
        'Where do they go?',
        'Adverbs of frequency go before the main verb: “I often cook.” But after “to be”: “She is always late.”',
        {
          headers: ['word', 'German'],
          rows: [
            ['always', 'immer'],
            ['usually', 'normalerweise'],
            ['often', 'oft'],
            ['sometimes', 'manchmal'],
            ['never', 'nie'],
          ],
        },
      ),
    ],
    test: [
      order('Make a sentence.', ['I', 'usually', 'go', 'to the gym', 'on Tuesdays.']),
      choice('Choose.', 'Which sentence is correct?', [
        '*Karim is often tired.',
        'Karim often is tired.',
        'Often Karim tired is.',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Days and at – on – in',
    ref: [B, 4, 4],
    learn: [
      words('Days of the week', [
        ['Monday', 'Montag'],
        ['Tuesday', 'Dienstag'],
        ['Wednesday', 'Mittwoch'],
        ['Thursday', 'Donnerstag'],
        ['Friday', 'Freitag'],
        ['Saturday', 'Samstag'],
        ['Sunday', 'Sonntag'],
      ]),
      tip(
        'at, on, in',
        '“at” + clock time (at 7 o’clock), “on” + day (on Monday), “in” + month or part of the day (in June, in the morning). But: at night, at the weekend.',
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'I get up [at] seven. [On] Fridays I go to the gym. I read [in] the evening.',
        [],
      ),
      order('Put the days in order.', ['Monday', 'Wednesday', 'Thursday', 'Saturday']),
    ],
  },

  // ------------------------------------------------ Chapter 5: Shopping
  {
    kind: 'VOCAB',
    title: 'At the market',
    ref: [B, 5, 1],
    learn: [
      words('Food and amounts', [
        ['apple', 'Apfel'],
        ['tomato', 'Tomate'],
        ['potato', 'Kartoffel'],
        ['bread', 'Brot'],
        ['milk', 'Milch'],
        ['eggs', 'Eier'],
        ['a kilo of', 'ein Kilo'],
        ['a bottle of', 'eine Flasche'],
        ['a packet of', 'eine Packung'],
      ]),
    ],
    test: [
      match('Match.', [
        ['a bottle of', 'water'],
        ['a kilo of', 'potatoes'],
        ['a packet of', 'biscuits'],
      ]),
      choice('Choose.', 'Which is correct?', [
        'a kilo apples',
        '*a kilo of apples',
        'a kilo from apples',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'How much is it?',
    ref: [B, 5, 1],
    learn: [
      grammar(
        'Asking the price',
        'For one thing: “How much is it?”. For more things: “How much are they?”.',
        {
          headers: ['Question', 'Answer'],
          rows: [
            ['How much is the melon?', 'It’s £1.50.'],
            ['How much are the tomatoes?', 'They’re £2 a kilo.'],
          ],
        },
      ),
      culture(
        'Pounds and pence',
        '£3.50 is “three pounds fifty”, 80p is “eighty p” or “eighty pence”.',
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'How much [are] the apples? – They’re £1.80. And how much [is] the bread?',
        ['be'],
      ),
      match('Match.', [
        ['£2.50', 'two pounds fifty'],
        ['75p', 'seventy-five pence'],
        ['£12', 'twelve pounds'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'this, that, these, those',
    ref: [B, 5, 2],
    learn: [
      grammar(
        'Near and far',
        '“this/these” for things near you, “that/those” for things further away. “this/that” for one, “these/those” for more.',
        {
          headers: ['', 'near', 'far'],
          rows: [
            ['one', 'this cake', 'that cake'],
            ['more', 'these rolls', 'those rolls'],
          ],
        },
      ),
    ],
    test: [
      choice('Choose.', 'You are holding two bananas. “___ bananas are very sweet.”', [
        'This',
        '*These',
        'Those',
      ]),
      cloze(
        'Complete.',
        '(in your hand) Is [this] your phone? (across the street) Look at [that] car! (in the window) How much are [those] shoes?',
        ['these'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Plurals',
    ref: [B, 5, 2],
    learn: [
      tip(
        '-s, -es, -ies',
        'Most nouns add -s. After -s, -sh, -ch, -x add -es. Consonant + y becomes -ies. Irregular: man – men, woman – women, child – children, person – people.',
      ),
    ],
    test: [
      match('Match.', [
        ['box', 'boxes'],
        ['strawberry', 'strawberries'],
        ['child', 'children'],
        ['person', 'people'],
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Clothes',
    ref: [B, 5, 3],
    learn: [
      words('Clothes', [
        ['jacket', 'Jacke'],
        ['shirt', 'Hemd'],
        ['trousers', 'Hose'],
        ['jeans', 'Jeans'],
        ['dress', 'Kleid'],
        ['shoes', 'Schuhe'],
        ['size', 'Größe'],
        ['try on', 'anprobieren'],
      ]),
      tip(
        'trousers are',
        'Trousers, jeans and shorts are always plural: “These jeans are too big.”',
      ),
    ],
    test: [
      choice('Choose.', 'Which sentence is correct?', [
        'This jeans is too big.',
        '*These jeans are too big.',
        'These jean are too big.',
      ]),
      cloze('Complete.', 'Can I [try] it on? – Of course. What [size] are you?', [
        'help',
        'colour',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'too big – not big enough',
    ref: [B, 5, 3],
    learn: [
      grammar(
        'When it doesn’t fit',
        '“too” goes before the adjective: “It’s too small.” “not … enough” goes around it: “It isn’t big enough.” Both mean the same.',
        {
          headers: ['too …', 'not … enough'],
          rows: [
            ['It’s too small.', 'It isn’t big enough.'],
            ['They’re too short.', 'They aren’t long enough.'],
          ],
        },
      ),
    ],
    test: [
      match('Same meaning?', [
        ['It’s too small.', 'It isn’t big enough.'],
        ['It’s too expensive.', 'It isn’t cheap enough.'],
        ['They’re too short.', 'They aren’t long enough.'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Can I pay by card?',
    ref: [B, 5, 4],
    learn: [
      grammar(
        'can',
        '“can” never changes – no -s – and the next verb has no “to”: “Can I pay by card?”, “She can speak Spanish.” The negative is “can’t”. “Could” is more polite.',
      ),
      words('Paying', [
        ['pay by card', 'mit Karte zahlen'],
        ['pay in cash', 'bar zahlen'],
        ['receipt', 'Kassenbon'],
        ['change', 'Wechselgeld'],
      ]),
    ],
    test: [
      choice('Choose.', 'Which sentence is correct?', [
        'Can I to pay by card?',
        'Yuki cans speak Japanese.',
        '*Can I pay by card?',
      ]),
      order('Put the dialogue in order.', [
        'That’s £15.40, please.',
        'Can I pay in cash?',
        'Of course.',
        'Here’s your change.',
      ]),
    ],
  },

  // ------------------------------------------------ Chapter 6: Food and drink
  {
    kind: 'VOCAB',
    title: 'Food and drink',
    ref: [B, 6, 1],
    learn: [
      words('Food and drink', [
        ['meat', 'Fleisch'],
        ['chicken', 'Hähnchen'],
        ['fish', 'Fisch'],
        ['vegetables', 'Gemüse'],
        ['rice', 'Reis'],
        ['cheese', 'Käse'],
        ['juice', 'Saft'],
        ['vegetarian', 'vegetarisch'],
      ]),
    ],
    test: [
      match('Match.', [
        ['a drink', 'juice'],
        ['from the sea', 'fish'],
        ['no meat', 'vegetarian'],
      ]),
      choice('Choose.', 'Karim doesn’t eat meat or fish. He is …', [
        '*vegetarian.',
        'hungry.',
        'a chicken.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'I like cooking',
    ref: [B, 6, 1],
    learn: [
      grammar(
        'like, love, hate',
        'After like, love and hate you use a noun or a verb with -ing: “I like fish.” – “I like cooking.” Remember the -s and do/does: “She likes tea.”, “Do you like cheese?”',
      ),
    ],
    test: [
      choice('Choose.', 'Which sentence is correct?', [
        'I like swim.',
        '*I like swimming.',
        'I am like swimming.',
      ]),
      cloze('Complete.', 'Diego [loves] pizza. Anna hates [cooking]. [Do] you like vegetables?', [
        'love',
        'cook',
        'Does',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'How much or how many?',
    ref: [B, 6, 2],
    learn: [
      grammar(
        'Countable and uncountable',
        'You can count eggs and tomatoes: “How many?”. You can’t count milk, rice or bread: no plural, no “a” – “How much?”.',
        {
          headers: ['countable', 'uncountable'],
          rows: [
            ['an egg – two eggs', 'milk'],
            ['a tomato – tomatoes', 'rice'],
            ['How many eggs?', 'How much milk?'],
          ],
        },
      ),
    ],
    test: [
      choice('Choose.', 'You want to know the amount of rice.', [
        'How many rice do we need?',
        '*How much rice do we need?',
        'How much rices do we need?',
      ]),
      match('Match.', [
        ['a loaf of', 'bread'],
        ['a cup of', 'tea'],
        ['a carton of', 'milk'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'some and any',
    ref: [B, 6, 2],
    learn: [
      grammar(
        'some and any',
        '“some” in positive sentences, “any” in negatives and questions. For offers and requests, use “some” in the question: “Would you like some tea?”',
        {
          headers: ['', 'example'],
          rows: [
            ['+', 'There’s some rice.'],
            ['–', 'There isn’t any milk.'],
            ['?', 'Have we got any eggs?'],
            ['offer', 'Would you like some tea?'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete with some or any.',
        'There’s [some] cheese, but there aren’t [any] eggs. Have we got [any] juice? Would you like [some] water?',
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'I like – I’d like',
    ref: [B, 6, 3],
    learn: [
      grammar(
        'Two very different things',
        '“I like coffee.” = in general (Ich mag Kaffee). “I’d like a coffee.” = now, please (Ich hätte gern einen Kaffee). To order, say “I’d like” or “Can I have”. To offer, say “Would you like …?”.',
        {
          headers: ['', 'meaning'],
          rows: [
            ['I like tea.', 'in general'],
            ['I’d like a tea, please.', 'now, polite'],
            ['Would you like some milk?', 'offer'],
          ],
        },
      ),
    ],
    test: [
      choice('Choose.', 'You are in a café. What do you say to the waiter?', [
        'I like an orange juice.',
        '*I’d like an orange juice, please.',
        'I want orange juice.',
      ]),
      match('Match.', [
        ['Would you like some water?', 'Yes, please. Just a glass.'],
        ['Do you like fish?', 'Yes, I love it.'],
        ['What would you like?', 'A hot chocolate, please.'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'In a café',
    ref: [B, 6, 3],
    learn: [
      dialogue('In a café', [
        'Waiter: Hi, what would you like?',
        'Yuki: I’d like a cup of tea, please.',
        'Waiter: Would you like milk with it?',
        'Yuki: No, thank you.',
        'Anna: Can I have a cappuccino and a piece of carrot cake, please?',
        'Waiter: Sure. Eat in or take away?',
        'Anna: Eat in, please.',
      ]),
    ],
    test: [
      choice('Choose.', 'What does Yuki order?', [
        '*a tea without milk',
        'a tea with milk',
        'a cappuccino',
      ]),
      choice('Choose.', 'Where does Anna eat her cake?', [
        '*in the café',
        'at home',
        'in the park',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'At the restaurant',
    ref: [B, 6, 4],
    learn: [
      words('Restaurant', [
        ['menu', 'Speisekarte'],
        ['a table for two', 'ein Tisch für zwei'],
        ['starter', 'Vorspeise'],
        ['main course', 'Hauptgericht'],
        ['dessert', 'Nachtisch'],
        ['order', 'bestellen'],
        ['the bill', 'die Rechnung'],
        ['tip', 'Trinkgeld'],
      ]),
    ],
    test: [
      order('Put the evening in order.', [
        'Have you got a reservation?',
        'Here are the menus.',
        'Are you ready to order?',
        'Could we have the bill, please?',
      ]),
      order('Put the meal in order.', ['starter', 'main course', 'dessert']),
    ],
  },
  {
    kind: 'TEXT',
    title: 'The bill and the tip',
    ref: [B, 6, 4],
    learn: [
      culture(
        'Paying in a restaurant',
        'In the UK you ask for “the bill”, in the USA for “the check”. In British restaurants a tip of about 10–12.5% is normal, sometimes already on the bill as a “service charge”. In the USA, 15–20% is expected. In pubs, you order at the bar and don’t tip.',
      ),
    ],
    test: [
      choice('Choose.', 'You want to pay in a London restaurant.', [
        '*Could we have the bill, please?',
        'Give me the invoice.',
        'I’d like to pay the menu.',
      ]),
      choice('Choose.', 'Where do you usually not tip in the UK?', [
        'in a restaurant',
        '*in a pub',
        'in a café with table service',
      ]),
    ],
  },

  // ------------------------------------------------ Grammar book
  {
    kind: 'GRAMMAR',
    title: 'a or an?',
    ref: [G, 1, 1],
    learn: [
      grammar(
        'The sound decides',
        '“an” comes before a vowel sound, not a vowel letter: “an hour” (silent h), but “a university” (sounds like “ju”). Jobs always need a/an: “She’s an architect.”',
        {
          headers: ['a', 'an'],
          rows: [
            ['a book', 'an apple'],
            ['a house', 'an hour'],
            ['a university', 'an umbrella'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete with a or an.',
        'She’s [an] engineer. It takes [an] hour. It’s [a] university town.',
      ),
      choice('Choose.', 'How do you say “Mein Bruder ist Arzt”?', [
        'My brother is doctor.',
        '*My brother is a doctor.',
        'My brother is the doctor.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'No article for things in general',
    ref: [G, 1, 2],
    learn: [
      grammar(
        'I like music',
        'When you talk about something in general, English uses no article: “I like music.”, “Life is short.” Also no article in “have breakfast”, “go to work”, “at home”, “speak English”.',
      ),
    ],
    test: [
      choice('Choose.', 'Which sentence is correct?', [
        'I love the music.',
        '*I love music.',
        'I love a music.',
      ]),
      match('Match.', [
        ['zur Arbeit gehen', 'go to work'],
        ['zu Hause', 'at home'],
        ['zu Mittag essen', 'have lunch'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Irregular plurals',
    ref: [G, 1, 3],
    learn: [
      tip('Learn them one by one', 'Only a few nouns are irregular, but they are very common.', {
        headers: ['singular', 'plural'],
        rows: [
          ['man', 'men'],
          ['woman', 'women'],
          ['child', 'children'],
          ['foot', 'feet'],
          ['tooth', 'teeth'],
        ],
      }),
    ],
    test: [
      match('Match.', [
        ['foot', 'feet'],
        ['tooth', 'teeth'],
        ['woman', 'women'],
        ['mouse', 'mice'],
      ]),
      choice('Choose.', 'Which plural is correct?', ['childs', '*children', 'childrens']),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'I’m hungry',
    ref: [G, 2, 1],
    learn: [
      grammar(
        '“to be” where German uses “haben”',
        'Age, hunger, thirst and feeling cold go with “to be” in English: “I’m 30.”, “I’m hungry.”, “I’m thirsty.”, “I’m cold.” And “Du hast recht.” is “You’re right.”',
      ),
    ],
    test: [
      choice('Choose.', 'How do you say “Wir haben Hunger”?', [
        'We have hunger.',
        '*We’re hungry.',
        'We’ve hungry.',
      ]),
      match('Match.', [
        ['Ich habe Durst.', 'I’m thirsty.'],
        ['Mir ist kalt.', 'I’m cold.'],
        ['Sie hat recht.', 'She’s right.'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Where do you live?',
    ref: [G, 3, 3],
    learn: [
      grammar(
        'Q – A – S – I',
        'Questions with a question word: Question word – Auxiliary (do/does) – Subject – Infinitive.',
        {
          headers: ['Q', 'A', 'S', 'I'],
          rows: [
            ['Where', 'do', 'you', 'live?'],
            ['What', 'does', 'she', 'do?'],
            ['When', 'does', 'the shop', 'open?'],
          ],
        },
      ),
    ],
    test: [
      order('Make the question.', ['What time', 'does', 'the film', 'start?']),
      choice('Choose.', 'You want to know when the museum opens.', [
        'When opens the museum?',
        '*When does the museum open?',
        'When does the museum opens?',
      ]),
    ],
  },
]);
