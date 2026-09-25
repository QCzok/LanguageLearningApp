import type { UnitSeed } from './chapter-beginner-1';

/**
 * Englisch, Intermediate, Kapitel 5: „Environment“ (B1, Kapitel 5)
 *
 * Umwelt, Verkehr, Verantwortung. Seite 1 bringt den Wortschatz, Seite 2 den
 * Bedingungssatz Typ 1 – mit der deutschen Falle „wenn“, das mal „if“, mal
 * „when“ heißt. Seite 3 Typ 0 und unless, Seite 4 Mengenangaben (too much,
 * not enough, few, little), Seite 5 Lösungen vorschlagen.
 *
 * Einsprachig englisch wie der ganze Intermediate-Band; Vokabeln mit `de`
 * und `es`.
 */
const v = 1;

export const ENGLISH_INTERMEDIATE_5_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Umweltwortschatz.
  {
    order: 1,
    title: 'Our planet',
    subtitle: 'Umweltprobleme benennen',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'eni5-1-h1', type: 'HEADING', level: 1, text: 'Our planet' },
        {
          id: 'eni5-1-image',
          type: 'IMAGE',
          url: 'illustration:city-street',
          alt: 'Eine Straße mit Geschäften, einem Café und einer Bushaltestelle.',
          caption: 'Cleaner air starts in our streets.',
        },
        {
          id: 'eni5-1-text',
          type: 'TEXT',
          text: 'Greenleaf Travel has started a “green office” project. Sophie reads the first report: “Every year our office produces around two tonnes of waste, and less than a third of it is recycled. Most of our electricity still comes from fossil fuels. Business flights are responsible for 80% of our carbon emissions. The good news: small changes can make a big difference. Switching to renewable energy alone would reduce our emissions by a quarter.”',
        },
        {
          id: 'eni5-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Words: the environment',
          items: [
            { term: 'climate change', translations: { de: 'der Klimawandel', es: 'el cambio climático' } },
            { term: 'pollution', translations: { de: 'die Verschmutzung', es: 'la contaminación' } },
            { term: 'waste', translations: { de: 'der Abfall; verschwenden', es: 'los residuos; desperdiciar' } },
            { term: 'to recycle', translations: { de: 'recyceln', es: 'reciclar' } },
            { term: 'carbon emissions', translations: { de: 'die CO₂-Emissionen', es: 'las emisiones de carbono' } },
            { term: 'fossil fuels', translations: { de: 'fossile Brennstoffe', es: 'los combustibles fósiles' } },
            { term: 'renewable energy', translations: { de: 'erneuerbare Energie', es: 'la energía renovable' } },
            { term: 'to reduce', translations: { de: 'verringern', es: 'reducir' } },
            { term: 'plastic packaging', translations: { de: 'die Plastikverpackung', es: 'el envase de plástico' } },
            { term: 'sustainable', translations: { de: 'nachhaltig', es: 'sostenible' } },
          ],
        },
        {
          id: 'eni5-1-match',
          type: 'MATCHING',
          instruction: 'Match the words with their meaning.',
          left: [
            { id: 'l1', text: 'renewable energy' },
            { id: 'l2', text: 'fossil fuels' },
            { id: 'l3', text: 'to recycle' },
            { id: 'l4', text: 'sustainable' },
          ],
          right: [
            { id: 'r1', text: 'power from the sun, wind or water' },
            { id: 'r2', text: 'coal, oil and gas' },
            { id: 'r3', text: 'to use materials again' },
            { id: 'r4', text: 'possible for a long time without damaging nature' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'eni5-1-choice',
          type: 'CHOICE',
          instruction: 'Answer the question about the report.',
          question: 'What causes most of the office’s carbon emissions?',
          options: [
            { id: 'o1', text: 'waste' },
            { id: 'o2', text: 'business flights' },
            { id: 'o3', text: 'electricity' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'The report says business flights are responsible for 80% of the emissions.',
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – Bedingungssatz Typ 1.
  {
    order: 2,
    title: 'If we don’t act now …',
    subtitle: 'Bedingungssätze Typ 1',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'eni5-2-h1', type: 'HEADING', level: 1, text: 'If we don’t act now …' },
        {
          id: 'eni5-2-dlg',
          type: 'DIALOGUE',
          title: 'The green office meeting',
          lines: [
            { speaker: 'Sophie', text: 'If we take the train to Paris instead of flying, we’ll save about 90% of the emissions.' },
            { speaker: 'Tom', text: 'But if the trip takes longer, we’ll lose a working day.' },
            { speaker: 'Sophie', text: 'Not really. If you work on the train, you won’t lose any time at all.' },
            { speaker: 'Ben', text: 'And if our clients hear about it, they’ll like it. It fits our brand.' },
            { speaker: 'Tom', text: 'OK. If the prices are similar, we’ll try it for the next trip.' },
          ],
        },
        {
          id: 'eni5-2-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'if + present, will + verb',
          text: 'The first conditional talks about a real possibility in the future and its result. The if-clause is in the present simple – even though it refers to the future. The result uses “will” (or can, might, should, an imperative). Never use “will” in the if-clause: “If it will rain” is wrong. If the if-clause comes first, put a comma after it.',
          table: {
            headers: ['if-clause (present)', 'result (will + verb)'],
            rows: [
              ['If we take the train,', 'we’ll save emissions.'],
              ['If it rains,', 'the event will be inside.'],
              ['If you don’t hurry,', 'you’ll miss the bus.'],
              ['If you see Ben,', 'tell him about the meeting.'],
            ],
          },
        },
        {
          id: 'eni5-2-cloze',
          type: 'CLOZE',
          instruction: 'Complete the first conditional.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'If we ' },
            { kind: 'GAP', gapId: 'c1', solution: ['recycle'], hint: 'recycle', width: 9 },
            { kind: 'TEXT', text: ' more, we ' },
            { kind: 'GAP', gapId: 'c2', solution: ['will produce', '’ll produce', "'ll produce"], hint: 'produce', width: 13 },
            { kind: 'TEXT', text: ' less waste. If the train ' },
            { kind: 'GAP', gapId: 'c3', solution: ['is'], hint: 'be', width: 5 },
            { kind: 'TEXT', text: ' late, I ' },
            { kind: 'GAP', gapId: 'c4', solution: ['will call', '’ll call', "'ll call"], hint: 'call', width: 10 },
            { kind: 'TEXT', text: ' you. If you ' },
            { kind: 'GAP', gapId: 'c5', solution: ['don’t leave', "don't leave", 'do not leave'], hint: 'not / leave', width: 12 },
            { kind: 'TEXT', text: ' now, you’ll miss it.' },
          ],
        },
        {
          id: 'eni5-2-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'Which sentence is correct?',
          options: [
            { id: 'o1', text: 'If it will be sunny tomorrow, we’ll cycle to work.' },
            { id: 'o2', text: 'If it is sunny tomorrow, we’ll cycle to work.' },
            { id: 'o3', text: 'If it is sunny tomorrow, we cycle to work.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'No “will” in the if-clause: “If it is sunny”. The result needs “will”: “we’ll cycle”.',
        },
        {
          id: 'eni5-2-info-when',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'wenn = if or when?',
          text: 'German “wenn” has two English translations. Use “if” when something may or may not happen: “If I get the job, I’ll move to London.” Use “when” when you are sure it will happen: “When I get home, I’ll call you.” The grammar is the same: present in the clause, will in the result.',
        },
        {
          id: 'eni5-2-choice2',
          type: 'CHOICE',
          instruction: 'Choose if or when.',
          question: '“Wenn ich morgen früh aufwache, schreibe ich dir.” (You will certainly wake up.)',
          options: [
            { id: 'o1', text: 'If I wake up tomorrow, I’ll text you.' },
            { id: 'o2', text: 'When I wake up tomorrow, I’ll text you.' },
            { id: 'o3', text: 'When I will wake up tomorrow, I’ll text you.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'Waking up is certain, so it’s “when”. And no “will” after “when” either.',
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – Typ 0 und unless.
  {
    order: 3,
    title: 'Unless we change …',
    subtitle: 'Typ 0, unless und as long as',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'eni5-3-h1', type: 'HEADING', level: 1, text: 'Unless we change …' },
        {
          id: 'eni5-3-text',
          type: 'TEXT',
          text: 'Facts about plastic: If plastic ends up in the sea, it breaks into tiny pieces. If fish eat these pieces, the plastic enters the food chain. Plastic bottles only get recycled if people put them in the right bin. Unless we use less plastic, there will be more plastic than fish in the oceans by 2050. But there is hope: as long as governments and companies work together, the problem can be solved.',
        },
        {
          id: 'eni5-3-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Zero conditional: facts',
          text: 'For things that are always true – facts, rules, scientific results – English uses the present simple in both parts: “If you heat ice, it melts.” Here “if” means almost the same as “when” or “every time”.',
          table: {
            headers: ['type', 'if-clause', 'result', 'use'],
            rows: [
              ['0', 'present', 'present', 'always true'],
              ['1', 'present', 'will + verb', 'possible future'],
            ],
          },
        },
        {
          id: 'eni5-3-info-unless',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'unless = if … not',
          text: '“unless” means “if not” (German “es sei denn”, “außer wenn”). The clause after “unless” is positive: “Unless we use less plastic, …” = “If we don’t use less plastic, …”. “as long as” means “only if”: “You can borrow my bike as long as you bring it back tonight.”',
          table: {
            headers: ['with if not', 'with unless'],
            rows: [
              ['If you don’t hurry, you’ll be late.', 'Unless you hurry, you’ll be late.'],
              ['I won’t go if it doesn’t stop raining.', 'I won’t go unless it stops raining.'],
            ],
          },
        },
        {
          id: 'eni5-3-choice',
          type: 'CHOICE',
          instruction: 'Choose the sentence with the same meaning.',
          question: '“If we don’t leave now, we’ll miss the train.”',
          options: [
            { id: 'o1', text: 'Unless we don’t leave now, we’ll miss the train.' },
            { id: 'o2', text: 'Unless we leave now, we’ll miss the train.' },
            { id: 'o3', text: 'As long as we leave now, we’ll miss the train.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: '“unless” already contains the “not”, so the verb after it is positive.',
        },
        {
          id: 'eni5-3-cloze',
          type: 'CLOZE',
          instruction: 'Complete with if, unless or as long as.',
          wordBank: ['If', 'Unless', 'as long as'],
          caseSensitive: false,
          segments: [
            { kind: 'GAP', gapId: 'u1', solution: ['If'], width: 11 },
            { kind: 'TEXT', text: ' you heat water to 100 degrees, it boils. ' },
            { kind: 'GAP', gapId: 'u2', solution: ['Unless'], width: 11 },
            { kind: 'TEXT', text: ' we act now, it will be too late. You can use my car ' },
            { kind: 'GAP', gapId: 'u3', solution: ['as long as'], width: 11 },
            { kind: 'TEXT', text: ' you fill up the tank.' },
          ],
        },
        {
          id: 'eni5-3-match',
          type: 'MATCHING',
          instruction: 'Match the two halves.',
          left: [
            { id: 'l1', text: 'If plastic ends up in the sea,' },
            { id: 'l2', text: 'Bottles only get recycled' },
            { id: 'l3', text: 'Unless we use less plastic,' },
          ],
          right: [
            { id: 'r1', text: 'it breaks into tiny pieces.' },
            { id: 'r2', text: 'if people use the right bin.' },
            { id: 'r3', text: 'there will be more plastic than fish.' },
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
  // Seite 4 – Mengenangaben.
  {
    order: 4,
    title: 'Too much, not enough',
    subtitle: 'Mengenangaben',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'eni5-4-h1', type: 'HEADING', level: 1, text: 'Too much, not enough' },
        {
          id: 'eni5-4-text',
          type: 'TEXT',
          text: 'Ben’s complaint about his street: “There’s far too much traffic and too many lorries. There aren’t enough bike lanes, and very few people cycle because it’s dangerous. There’s very little green space – just one tiny park. A lot of neighbours want a 20 mph speed limit, but the council hasn’t done much yet.”',
        },
        {
          id: 'eni5-4-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'much, many, few, little, enough',
          text: 'Countable nouns (cars, people) go with many, few, a few. Uncountable nouns (traffic, space, money) go with much, little, a little. “too much / too many” means more than is good. “not enough” means less than you need. Careful: “few / little” is negative (almost none), “a few / a little” is positive (some).',
          table: {
            headers: ['', 'countable', 'uncountable'],
            rows: [
              ['more than good', 'too many cars', 'too much traffic'],
              ['less than needed', 'not enough bike lanes', 'not enough space'],
              ['almost none (negative)', 'few people', 'little money'],
              ['some (positive)', 'a few people', 'a little money'],
              ['large amount', 'a lot of / lots of cars', 'a lot of / lots of noise'],
            ],
          },
        },
        {
          id: 'eni5-4-cloze',
          type: 'CLOZE',
          instruction: 'Complete with much, many, few or little.',
          wordBank: ['much', 'many', 'few', 'little'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'There’s too ' },
            { kind: 'GAP', gapId: 'q1', solution: ['much'], width: 6 },
            { kind: 'TEXT', text: ' traffic and too ' },
            { kind: 'GAP', gapId: 'q2', solution: ['many'], width: 6 },
            { kind: 'TEXT', text: ' lorries. Very ' },
            { kind: 'GAP', gapId: 'q3', solution: ['few'], width: 6 },
            { kind: 'TEXT', text: ' people cycle, and there’s very ' },
            { kind: 'GAP', gapId: 'q4', solution: ['little'], width: 6 },
            { kind: 'TEXT', text: ' green space.' },
          ],
        },
        {
          id: 'eni5-4-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'Which sentence is correct?',
          options: [
            { id: 'o1', text: 'There are too much cars in the centre.' },
            { id: 'o2', text: 'There are too many cars in the centre.' },
            { id: 'o3', text: 'There is too many car in the centre.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: '“cars” is countable and plural, so it’s “too many cars”.',
        },
        {
          id: 'eni5-4-match',
          type: 'MATCHING',
          instruction: 'Match the sentence with its meaning.',
          left: [
            { id: 'l1', text: 'I have a little time.' },
            { id: 'l2', text: 'I have little time.' },
            { id: 'l3', text: 'A few people came.' },
            { id: 'l4', text: 'Few people came.' },
          ],
          right: [
            { id: 'r1', text: 'I have some time – let’s talk.' },
            { id: 'r2', text: 'I’m very busy.' },
            { id: 'r3', text: 'Some people came.' },
            { id: 'r4', text: 'Almost nobody came.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – Lösungen vorschlagen.
  {
    order: 5,
    title: 'What can we do?',
    subtitle: 'Lösungen vorschlagen',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'eni5-5-h1', type: 'HEADING', level: 1, text: 'What can we do?' },
        {
          id: 'eni5-5-text',
          type: 'TEXT',
          text: 'Letter to the local council\n\nDear Councillor Reid,\n\nI am writing on behalf of the residents of Albert Road. Our street has become far too dangerous: there is too much traffic, and very few children walk or cycle to school.\n\nWe would like to suggest three changes. Firstly, a 20 mph speed limit would make the street safer. Secondly, if the council builds a protected bike lane, more people will cycle. Finally, we would be happy to plant trees ourselves if the council provides them.\n\nUnless something is done soon, there will be a serious accident. We would be grateful if you could discuss our proposal at the next council meeting.\n\nYours sincerely,\nBen Carter',
        },
        {
          id: 'eni5-5-choice',
          type: 'CHOICE',
          instruction: 'Mark all the suggestions in Ben’s letter.',
          question: 'What does Ben suggest?',
          options: [
            { id: 'r1', text: 'a lower speed limit' },
            { id: 'r2', text: 'closing the street completely' },
            { id: 'r3', text: 'a protected bike lane' },
            { id: 'r4', text: 'a new car park' },
          ],
          multiple: true,
          solution: ['r1', 'r3'],
          explanation: 'Ben suggests a 20 mph limit, a bike lane and trees – not closing the street or a car park.',
        },
        {
          id: 'eni5-5-info',
          type: 'INFO',
          variant: 'TIP',
          title: 'Structuring a proposal',
          text: 'A good proposal describes the problem, lists the suggestions clearly (Firstly, Secondly, Finally), explains the result of each one – often with a first conditional – and ends with a polite request.',
        },
        {
          id: 'eni5-5-order',
          type: 'ORDERING',
          instruction: 'Put the parts of the letter in order.',
          items: [
            { id: 'p1', text: 'I am writing on behalf of the residents …' },
            { id: 'p2', text: 'Our street has become far too dangerous …' },
            { id: 'p3', text: 'We would like to suggest three changes …' },
            { id: 'p4', text: 'We would be grateful if you could discuss …' },
            { id: 'p5', text: 'Yours sincerely, Ben Carter' },
          ],
          solution: ['p1', 'p2', 'p3', 'p4', 'p5'],
        },
        {
          id: 'eni5-5-cloze',
          type: 'CLOZE',
          instruction: 'Complete the sentences.',
          wordBank: ['too', 'enough', 'builds', 'will', 'Unless'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'There is ' },
            { kind: 'GAP', gapId: 'f1', solution: ['too'], width: 5 },
            { kind: 'TEXT', text: ' much traffic and not ' },
            { kind: 'GAP', gapId: 'f2', solution: ['enough'], width: 7 },
            { kind: 'TEXT', text: ' space for bikes. If the council ' },
            { kind: 'GAP', gapId: 'f3', solution: ['builds'], width: 7 },
            { kind: 'TEXT', text: ' a bike lane, more people ' },
            { kind: 'GAP', gapId: 'f4', solution: ['will'], width: 5 },
            { kind: 'TEXT', text: ' cycle. ' },
            { kind: 'GAP', gapId: 'f5', solution: ['Unless'], width: 7 },
            { kind: 'TEXT', text: ' something changes, there will be an accident.' },
          ],
        },
        {
          id: 'eni5-5-writing',
          type: 'WRITING',
          instruction: 'Write a proposal.',
          prompt:
            'Think of an environmental problem in your town, school or workplace. Write a short proposal (130–170 words): describe the problem, make two or three suggestions and explain their results with first conditionals. Use quantifiers like too much, not enough and a few.',
          minWords: 110,
          maxWords: 210,
          aiFeedback: true,
          sampleAnswer:
            'Dear colleagues,\n\nI would like to suggest some changes to make our office greener. At the moment we use far too much paper: most documents are printed, and very few of them are read twice. There also aren’t enough recycling bins – there is only one on each floor.\n\nFirstly, if we print only when it is really necessary, we will save a lot of paper and money. Secondly, if we put a recycling bin in every kitchen, people will recycle more. Finally, we could switch off computers at night. If everybody does this, we will reduce our electricity use by around ten per cent.\n\nUnless we start now, nothing will change. I would be happy to organise a short meeting next week to discuss these ideas.\n\nBest regards,\nMaria',
        },
      ],
    },
  },
];
