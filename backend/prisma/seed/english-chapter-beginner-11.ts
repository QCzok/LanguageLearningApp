import type { UnitSeed } from './chapter-beginner-1';

/**
 * Englisch, Beginner, Kapitel 11: „Home and neighbourhood“ (A2, Kapitel 5)
 *
 * Wohnen und vergleichen. Seite 1 Zimmer und Möbel, Seite 2 der Komparativ,
 * Seite 3 der Superlativ, Seite 4 „as … as“ an einer Wohnungsanzeige. Die
 * Steigerung hängt im Englischen an der Silbenzahl, nicht an der Endung –
 * deshalb stehen die Regeln nach Wortlänge geordnet.
 *
 * Übersetzungen wie im ganzen Beginner-Band.
 */
const v = 1;

export const ENGLISH_BEGINNER_11_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Zimmer und Möbel.
  {
    order: 1,
    title: 'My new flat',
    subtitle: 'Zimmer und Möbel',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'en11-1-h1', type: 'HEADING', level: 1, text: 'My new flat' },
        {
          id: 'en11-1-image',
          type: 'IMAGE',
          url: 'illustration:living-room',
          alt: 'Ein Wohnzimmer mit Sofa, Couchtisch, Stehlampe und einem Bücherregal.',
          caption: 'A cosy living room.',
        },
        {
          id: 'en11-1-text',
          type: 'TEXT',
          text: 'Diego writes to his sister: “I moved last week! The flat is on the second floor. There’s a living room with a big sofa and a bookshelf, a small kitchen, a bedroom and a bathroom with a shower. There isn’t a balcony, but there’s a garden behind the building. The fridge is quite old, and I haven’t got a washing machine yet – but I love it!”',
          translations: {
            de: 'Diego schreibt seiner Schwester: „Ich bin letzte Woche umgezogen! Die Wohnung liegt im zweiten Stock. Es gibt ein Wohnzimmer mit einem großen Sofa und einem Bücherregal, eine kleine Küche, ein Schlafzimmer und ein Bad mit Dusche. Einen Balkon gibt es nicht, aber hinter dem Haus ist ein Garten. Der Kühlschrank ist ziemlich alt, und eine Waschmaschine habe ich noch nicht – aber ich liebe sie!“',
          },
        },
        {
          id: 'en11-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Words: the home',
          items: [
            { term: 'living room', translations: { de: 'das Wohnzimmer', es: 'el salón' } },
            { term: 'bedroom', translations: { de: 'das Schlafzimmer', es: 'el dormitorio' } },
            { term: 'kitchen', translations: { de: 'die Küche', es: 'la cocina' } },
            { term: 'bathroom', translations: { de: 'das Badezimmer', es: 'el baño' } },
            { term: 'sofa', translations: { de: 'das Sofa', es: 'el sofá' } },
            { term: 'bookshelf', translations: { de: 'das Bücherregal', es: 'la estantería' } },
            { term: 'fridge', translations: { de: 'der Kühlschrank', es: 'la nevera' } },
            { term: 'washing machine', translations: { de: 'die Waschmaschine', es: 'la lavadora' } },
            { term: 'cupboard', translations: { de: 'der Schrank (Küche)', es: 'el armario' } },
            { term: 'to move (house)', translations: { de: 'umziehen', es: 'mudarse' } },
            { term: 'flat (UK) / apartment (US)', translations: { de: 'die Wohnung', es: 'el piso' } },
          ],
        },
        {
          id: 'en11-1-match',
          type: 'MATCHING',
          instruction: 'Where do you usually find it?',
          left: [
            { id: 'l1', text: 'a fridge' },
            { id: 'l2', text: 'a shower' },
            { id: 'l3', text: 'a bed' },
            { id: 'l4', text: 'a sofa' },
          ],
          right: [
            { id: 'r1', text: 'in the kitchen' },
            { id: 'r2', text: 'in the bathroom' },
            { id: 'r3', text: 'in the bedroom' },
            { id: 'r4', text: 'in the living room' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'en11-1-info-floor',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'ground floor, first floor',
          text: 'In the UK the floor at street level is the “ground floor”, and the next one up is the “first floor” – like in Germany. In the USA, the street level is already the “first floor”! And British “flat” is American “apartment”.',
          translations: {
            de: {
              title: 'ground floor, first floor',
              text: 'In Großbritannien heißt die Etage auf Straßenhöhe „ground floor“ (Erdgeschoss), die darüber „first floor“ – wie in Deutschland. In den USA ist die Straßenebene schon der „first floor“! Und die britische „flat“ ist das amerikanische „apartment“.',
            },
          },
        },
        {
          id: 'en11-1-choice',
          type: 'CHOICE',
          instruction: 'Answer the question about the text.',
          question: 'What hasn’t Diego got yet?',
          options: [
            { id: 'o1', text: 'a sofa' },
            { id: 'o2', text: 'a washing machine' },
            { id: 'o3', text: 'a fridge' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'Diego writes: “I haven’t got a washing machine yet.” The fridge is there, but it is old.',
          explanationTranslations: {
            de: 'Diego schreibt: „I haven’t got a washing machine yet.“ Einen Kühlschrank hat er, aber er ist alt.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – der Komparativ.
  {
    order: 2,
    title: 'Bigger and more expensive',
    subtitle: 'Der Komparativ',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'en11-2-h1', type: 'HEADING', level: 1, text: 'Bigger and more expensive' },
        {
          id: 'en11-2-dlg',
          type: 'DIALOGUE',
          title: 'Old flat, new flat',
          lines: [
            { speaker: 'Anna', text: 'So, is the new flat better than the old one?' },
            { speaker: 'Diego', text: 'Yes, much better! It’s bigger and brighter.' },
            { speaker: 'Anna', text: 'Is it more expensive?' },
            { speaker: 'Diego', text: 'A bit, yes. But it’s quieter, and it’s closer to work.' },
            { speaker: 'Anna', text: 'And the neighbours?' },
            { speaker: 'Diego', text: 'Friendlier than the old ones – they brought me a cake!' },
          ],
        },
        {
          id: 'en11-2-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Comparatives: -er or more',
          text: 'Short adjectives (one syllable) add -er: “big → bigger”, “cheap → cheaper”. Adjectives with two syllables ending in -y change to -ier: “friendly → friendlier”, “easy → easier”. Longer adjectives use “more”: “more expensive”, “more comfortable”. After the comparative comes “than” (German “als”).',
          translations: {
            de: {
              title: 'Komparativ: -er oder more',
              text: 'Kurze Adjektive (eine Silbe) bekommen -er: „big → bigger“, „cheap → cheaper“. Zweisilbige auf -y werden zu -ier: „friendly → friendlier“, „easy → easier“. Längere Adjektive nehmen „more“: „more expensive“, „more comfortable“. Nach dem Komparativ steht „than“ (deutsch „als“).',
            },
          },
          table: {
            headers: ['rule', 'adjective', 'comparative'],
            rows: [
              ['short: + er', 'cheap, quiet', 'cheaper, quieter'],
              ['-e: + r', 'nice, close', 'nicer, closer'],
              ['short vowel + consonant: double', 'big, hot', 'bigger, hotter'],
              ['-y → -ier', 'easy, friendly', 'easier, friendlier'],
              ['long: more', 'expensive, modern', 'more expensive, more modern'],
              ['irregular', 'good, bad, far', 'better, worse, further'],
            ],
          },
        },
        {
          id: 'en11-2-cloze',
          type: 'CLOZE',
          instruction: 'Write the comparative.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'The new flat is ' },
            { kind: 'GAP', gapId: 'c1', solution: ['bigger'], hint: 'big', width: 8 },
            { kind: 'TEXT', text: ' than the old one. It’s ' },
            { kind: 'GAP', gapId: 'c2', solution: ['more expensive'], hint: 'expensive', width: 15 },
            { kind: 'TEXT', text: ', but the neighbours are ' },
            { kind: 'GAP', gapId: 'c3', solution: ['friendlier'], hint: 'friendly', width: 11 },
            { kind: 'TEXT', text: ' and the kitchen is ' },
            { kind: 'GAP', gapId: 'c4', solution: ['better'], hint: 'good', width: 8 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'en11-2-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'Which sentence is correct?',
          options: [
            { id: 'o1', text: 'London is more big than Manchester.' },
            { id: 'o2', text: 'London is bigger as Manchester.' },
            { id: 'o3', text: 'London is bigger than Manchester.' },
          ],
          multiple: false,
          solution: ['o3'],
          explanation: '“big” is short, so it is “bigger” (with double g). German “als” is “than” after a comparative.',
          explanationTranslations: {
            de: '„big“ ist kurz, also „bigger“ (mit doppeltem g). Das deutsche „als“ heißt nach einem Komparativ „than“.',
          },
        },
        {
          id: 'en11-2-match',
          type: 'MATCHING',
          instruction: 'Match the adjective with its comparative.',
          left: [
            { id: 'l1', text: 'good' },
            { id: 'l2', text: 'bad' },
            { id: 'l3', text: 'hot' },
            { id: 'l4', text: 'comfortable' },
          ],
          right: [
            { id: 'r1', text: 'better' },
            { id: 'r2', text: 'worse' },
            { id: 'r3', text: 'hotter' },
            { id: 'r4', text: 'more comfortable' },
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

  // ====================================================== SEITE 3
  // Seite 3 – der Superlativ.
  {
    order: 3,
    title: 'The best café in town',
    subtitle: 'Der Superlativ',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'en11-3-h1', type: 'HEADING', level: 1, text: 'The best café in town' },
        {
          id: 'en11-3-text',
          type: 'TEXT',
          text: 'A local magazine asks: “What’s the best thing about your neighbourhood?” Karim answers: “Rusholme has the best curry restaurants in Manchester – and the busiest street on a Saturday night! The park is the most beautiful place in spring. The worst thing? Parking. It’s the most difficult thing in the world here.”',
          translations: {
            de: 'Ein Stadtteilmagazin fragt: „Was ist das Beste an Ihrem Viertel?“ Karim antwortet: „Rusholme hat die besten Curry-Restaurants in Manchester – und samstagabends die belebteste Straße! Der Park ist im Frühling der schönste Ort. Das Schlimmste? Das Parken. Das ist hier das Schwierigste auf der Welt.“',
          },
        },
        {
          id: 'en11-3-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Superlatives: the -est, the most',
          text: 'The superlative follows the same rules as the comparative: short adjectives add -est, long adjectives use “most”. It almost always has “the” in front of it. After a superlative, places go with “in”: “the best café in town”, “the tallest building in the world”.',
          translations: {
            de: {
              title: 'Superlativ: the -est, the most',
              text: 'Der Superlativ folgt denselben Regeln wie der Komparativ: Kurze Adjektive bekommen -est, lange nehmen „most“. Davor steht fast immer „the“. Orte stehen nach einem Superlativ mit „in“: „the best café in town“, „the tallest building in the world“.',
            },
          },
          table: {
            headers: ['adjective', 'comparative', 'superlative'],
            rows: [
              ['cheap', 'cheaper', 'the cheapest'],
              ['big', 'bigger', 'the biggest'],
              ['busy', 'busier', 'the busiest'],
              ['beautiful', 'more beautiful', 'the most beautiful'],
              ['good', 'better', 'the best'],
              ['bad', 'worse', 'the worst'],
            ],
          },
        },
        {
          id: 'en11-3-cloze',
          type: 'CLOZE',
          instruction: 'Write the superlative.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'It’s the ' },
            { kind: 'GAP', gapId: 's1', solution: ['cheapest'], hint: 'cheap', width: 9 },
            { kind: 'TEXT', text: ' supermarket in the area. This is the ' },
            { kind: 'GAP', gapId: 's2', solution: ['most expensive'], hint: 'expensive', width: 15 },
            { kind: 'TEXT', text: ' restaurant in town. That was the ' },
            { kind: 'GAP', gapId: 's3', solution: ['worst'], hint: 'bad', width: 7 },
            { kind: 'TEXT', text: ' film of the year. Sunday is the ' },
            { kind: 'GAP', gapId: 's4', solution: ['quietest'], hint: 'quiet', width: 9 },
            { kind: 'TEXT', text: ' day of the week.' },
          ],
        },
        {
          id: 'en11-3-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'Which sentence is correct?',
          options: [
            { id: 'o1', text: 'It’s the most big park of the city.' },
            { id: 'o2', text: 'It’s the biggest park in the city.' },
            { id: 'o3', text: 'It’s biggest park in the city.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: '“big” is short: “the biggest”. Don’t forget “the”, and places go with “in”.',
          explanationTranslations: {
            de: '„big“ ist kurz: „the biggest“. Das „the“ nicht vergessen, und Orte stehen mit „in“.',
          },
        },
        {
          id: 'en11-3-order',
          type: 'ORDERING',
          instruction: 'Make a correct sentence.',
          items: [
            { id: 'w1', text: 'This is' },
            { id: 'w2', text: 'the most' },
            { id: 'w3', text: 'beautiful' },
            { id: 'w4', text: 'place' },
            { id: 'w5', text: 'in spring.' },
          ],
          solution: ['w1', 'w2', 'w3', 'w4', 'w5'],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – Wohnungsanzeige, as … as.
  {
    order: 4,
    title: 'Flat to rent',
    subtitle: 'Eine Anzeige lesen, as … as',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'en11-4-h1', type: 'HEADING', level: 1, text: 'Flat to rent' },
        {
          id: 'en11-4-text',
          type: 'TEXT',
          text: 'FLAT TO RENT – Didsbury. Bright two-bedroom flat on the first floor. Large living room, modern kitchen, bathroom with bath and shower. Small balcony. Close to shops and the tram stop – 15 minutes to the city centre. No pets. £950 per month, bills not included. Available from 1st October.',
          translations: {
            de: 'WOHNUNG ZU VERMIETEN – Didsbury. Helle Wohnung mit zwei Schlafzimmern im ersten Stock. Großes Wohnzimmer, moderne Küche, Bad mit Wanne und Dusche. Kleiner Balkon. Nah an Geschäften und der Straßenbahnhaltestelle – 15 Minuten ins Stadtzentrum. Keine Haustiere. 950 £ pro Monat, Nebenkosten nicht inklusive. Frei ab 1. Oktober.',
          },
        },
        {
          id: 'en11-4-choice',
          type: 'CHOICE',
          instruction: 'Answer the question about the advert.',
          question: 'Yuki has a cat. Can she rent this flat?',
          options: [
            { id: 'o1', text: 'Yes, cats are OK.' },
            { id: 'o2', text: 'No, pets aren’t allowed.' },
            { id: 'o3', text: 'Only from 1st October.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'The advert says “No pets.”',
          explanationTranslations: {
            de: 'In der Anzeige steht „No pets.“ – keine Haustiere.',
          },
        },
        {
          id: 'en11-4-vocab',
          type: 'VOCAB_LIST',
          title: 'Words: renting',
          items: [
            { term: 'to rent', translations: { de: 'mieten, vermieten', es: 'alquilar' } },
            { term: 'rent', translations: { de: 'die Miete', es: 'el alquiler' } },
            { term: 'bills', translations: { de: 'die Nebenkosten, Rechnungen', es: 'los gastos, las facturas' } },
            { term: 'included', translations: { de: 'inklusive', es: 'incluido' } },
            { term: 'bright', translations: { de: 'hell', es: 'luminoso' } },
            { term: 'landlord', translations: { de: 'der Vermieter', es: 'el casero' } },
            { term: 'neighbour', translations: { de: 'der Nachbar, die Nachbarin', es: 'el/la vecino/a' } },
          ],
        },
        {
          id: 'en11-4-info-asas',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'as … as – not as … as',
          text: 'To say two things are the same, use “as + adjective + as”: “My flat is as big as yours.” (= genauso groß wie). For “less”, use “not as … as”: “Didsbury isn’t as cheap as Rusholme.” (= nicht so billig wie).',
          translations: {
            de: {
              title: 'as … as – not as … as',
              text: 'Um zu sagen, dass zwei Dinge gleich sind, verwendet man „as + Adjektiv + as“: „My flat is as big as yours.“ (= genauso groß wie). Für „weniger“ steht „not as … as“: „Didsbury isn’t as cheap as Rusholme.“ (= nicht so billig wie).',
            },
          },
          table: {
            headers: ['German', 'English'],
            rows: [
              ['genauso groß wie', 'as big as'],
              ['nicht so teuer wie', 'not as expensive as'],
              ['größer als', 'bigger than'],
            ],
          },
        },
        {
          id: 'en11-4-cloze',
          type: 'CLOZE',
          instruction: 'Complete with as, than or more.',
          wordBank: ['as', 'than', 'more'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'The Didsbury flat is ' },
            { kind: 'GAP', gapId: 'a1', solution: ['more'], width: 5 },
            { kind: 'TEXT', text: ' expensive ' },
            { kind: 'GAP', gapId: 'a2', solution: ['than'], width: 5 },
            { kind: 'TEXT', text: ' Diego’s flat. It isn’t ' },
            { kind: 'GAP', gapId: 'a3', solution: ['as'], width: 4 },
            { kind: 'TEXT', text: ' close to the centre ' },
            { kind: 'GAP', gapId: 'a4', solution: ['as'], width: 4 },
            { kind: 'TEXT', text: ' Diego’s.' },
          ],
        },
        {
          id: 'en11-4-match',
          type: 'MATCHING',
          instruction: 'Same meaning?',
          left: [
            { id: 'l1', text: 'My flat isn’t as big as yours.' },
            { id: 'l2', text: 'Tea isn’t as expensive as coffee.' },
            { id: 'l3', text: 'Anna is as tall as Yuki.' },
          ],
          right: [
            { id: 'r1', text: 'Your flat is bigger than mine.' },
            { id: 'r2', text: 'Coffee is more expensive than tea.' },
            { id: 'r3', text: 'They are the same height.' },
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

  // ====================================================== SEITE 5
  // Seite 5 – Rückblick.
  {
    order: 5,
    title: 'Can you do it?',
    subtitle: 'Rückblick auf das ganze Kapitel',
    estimatedMinutes: 18,
    content: {
      version: v,
      blocks: [
        { id: 'en11-5-h1', type: 'HEADING', level: 1, text: 'Can you do it?' },
        {
          id: 'en11-5-intro',
          type: 'TEXT',
          text: 'The whole chapter again: rooms and furniture, comparatives, superlatives and as … as.',
          translations: {
            de: 'Das ganze Kapitel noch einmal: Zimmer und Möbel, Komparativ, Superlativ und as … as.',
          },
        },
        {
          id: 'en11-5-cloze',
          type: 'CLOZE',
          instruction: 'Complete the text.',
          wordBank: ['than', 'best', 'as', 'most', 'worse'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'My new neighbourhood is quieter ' },
            { kind: 'GAP', gapId: 'f1', solution: ['than'], width: 5 },
            { kind: 'TEXT', text: ' the old one. It has the ' },
            { kind: 'GAP', gapId: 'f2', solution: ['best'], width: 5 },
            { kind: 'TEXT', text: ' bakery in the city. The flat isn’t ' },
            { kind: 'GAP', gapId: 'f3', solution: ['as'], width: 4 },
            { kind: 'TEXT', text: ' big as my last one, but the view is the ' },
            { kind: 'GAP', gapId: 'f4', solution: ['most'], width: 5 },
            { kind: 'TEXT', text: ' beautiful I know. The only problem: the bus service is ' },
            { kind: 'GAP', gapId: 'f5', solution: ['worse'], width: 6 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'en11-5-match',
          type: 'MATCHING',
          instruction: 'Match the adjective with the superlative.',
          left: [
            { id: 'm1', text: 'good' },
            { id: 'm2', text: 'busy' },
            { id: 'm3', text: 'modern' },
            { id: 'm4', text: 'hot' },
          ],
          right: [
            { id: 'x1', text: 'the best' },
            { id: 'x2', text: 'the busiest' },
            { id: 'x3', text: 'the most modern' },
            { id: 'x4', text: 'the hottest' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'x1' },
            { leftId: 'm2', rightId: 'x2' },
            { leftId: 'm3', rightId: 'x3' },
            { leftId: 'm4', rightId: 'x4' },
          ],
        },
        {
          id: 'en11-5-choice',
          type: 'CHOICE',
          instruction: 'Mark all the correct sentences.',
          question: 'Which of these sentences are correct?',
          options: [
            { id: 'r1', text: 'Our kitchen is smaller than yours.' },
            { id: 'r2', text: 'This is the more expensive flat in the building.' },
            { id: 'r3', text: 'My room is as big as the living room.' },
            { id: 'r4', text: 'The weather is gooder today.' },
          ],
          multiple: true,
          solution: ['r1', 'r3'],
          explanation: 'One of many → superlative: “the most expensive flat”. “good” is irregular: “better”.',
          explanationTranslations: {
            de: 'Eine von vielen → Superlativ: „the most expensive flat“. „good“ ist unregelmäßig: „better“.',
          },
        },
        {
          id: 'en11-5-writing',
          type: 'WRITING',
          instruction: 'Describe your home.',
          prompt:
            'Write six to eight sentences: What rooms are there? What’s your favourite room and why? Compare your home now with an old home. What’s the best thing about your neighbourhood?',
          minWords: 50,
          maxWords: 150,
          aiFeedback: true,
          sampleAnswer:
            'I live in a flat with two bedrooms, a living room, a kitchen and a small bathroom. My favourite room is the kitchen because it’s the brightest room in the flat. My old flat was bigger than this one, but it was darker and more expensive. My new neighbourhood is quieter and greener. The best thing about it is the market on Saturdays.',
        },
      ],
    },
  },
];
