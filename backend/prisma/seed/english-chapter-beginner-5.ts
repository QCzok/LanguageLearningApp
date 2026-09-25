import type { UnitSeed } from './chapter-beginner-1';

/**
 * Englisch, Beginner, Kapitel 5: „Shopping“
 *
 * Einkaufen in vier Schritten: Mengen und Preise auf dem Markt, dann das
 * Zeigen auf Dinge (this/that/these/those), dann Kleidung und Größen und
 * zuletzt das Verkaufsgespräch mit „can“ für Bitten.
 *
 * Übersetzungen wie in `english-chapter-beginner-1.ts`.
 */
const v = 1;

export const ENGLISH_BEGINNER_5_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Markt: Lebensmittel, Mengen, Preise.
  {
    order: 1,
    title: 'At the market',
    subtitle: 'Lebensmittel, Mengen, Preise',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'en5-1-h1', type: 'HEADING', level: 1, text: 'At the market' },
        {
          id: 'en5-1-image',
          type: 'IMAGE',
          url: 'illustration:market-stall',
          alt: 'Ein Marktstand mit Obst- und Gemüsekisten unter einer gestreiften Markise.',
          caption: 'Fresh fruit and vegetables.',
        },
        {
          id: 'en5-1-dlg',
          type: 'DIALOGUE',
          title: 'At the fruit and vegetable stall',
          lines: [
            { speaker: 'Seller', text: 'Morning! What can I get you?' },
            { speaker: 'Yuki', text: 'A kilo of tomatoes, please. How much are they?' },
            { speaker: 'Seller', text: 'They’re two pounds a kilo.' },
            { speaker: 'Yuki', text: 'OK. And how much is the melon?' },
            { speaker: 'Seller', text: 'One pound fifty. Anything else?' },
            { speaker: 'Yuki', text: 'No, thanks. That’s all.' },
            { speaker: 'Seller', text: 'That’s three pounds fifty, then.' },
          ],
        },
        {
          id: 'en5-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Words: food and amounts',
          items: [
            { term: 'apple', translations: { de: 'der Apfel', es: 'la manzana' } },
            { term: 'banana', translations: { de: 'die Banane', es: 'el plátano' } },
            { term: 'tomato', translations: { de: 'die Tomate', es: 'el tomate' }, example: 'a kilo of tomatoes' },
            { term: 'potato', translations: { de: 'die Kartoffel', es: 'la patata' } },
            { term: 'bread', translations: { de: 'das Brot', es: 'el pan' } },
            { term: 'milk', translations: { de: 'die Milch', es: 'la leche' } },
            { term: 'eggs', translations: { de: 'die Eier', es: 'los huevos' } },
            { term: 'a kilo of', translations: { de: 'ein Kilo', es: 'un kilo de' } },
            { term: 'a bottle of', translations: { de: 'eine Flasche', es: 'una botella de' } },
            { term: 'a packet of', translations: { de: 'eine Packung', es: 'un paquete de' } },
            { term: 'That’s all.', translations: { de: 'Das ist alles.', es: 'Eso es todo.' } },
          ],
        },
        {
          id: 'en5-1-info-howmuch',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'How much is it? – How much are they?',
          text: 'To ask the price, you say “How much …?”. For one thing: “How much is it?”, for more things: “How much are they?”. Amounts need “of”: “a kilo of apples”, “a bottle of water” – German has no word there.',
          translations: {
            de: {
              title: 'How much is it? – How much are they?',
              text: 'Nach dem Preis fragt man mit „How much …?“. Für eine Sache: „How much is it?“, für mehrere: „How much are they?“. Mengenangaben brauchen „of“: „a kilo of apples“, „a bottle of water“ – im Deutschen steht dort kein Wort.',
            },
          },
          table: {
            headers: ['Question', 'Answer'],
            rows: [
              ['How much is the melon?', 'It’s £1.50.'],
              ['How much are the tomatoes?', 'They’re £2 a kilo.'],
              ['How much is that?', 'That’s £3.50.'],
            ],
          },
        },
        {
          id: 'en5-1-info-money',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'Pounds and pence',
          text: 'In the UK, people pay in pounds (£) and pence (p). 100 pence make a pound. You say £3.50 as “three pounds fifty” or just “three fifty”, and 80p as “eighty p” or “eighty pence”. In the USA it is dollars and cents: $3.50 = “three dollars fifty”.',
          translations: {
            de: {
              title: 'Pfund und Pence',
              text: 'In Großbritannien bezahlt man mit Pfund (£) und Pence (p). 100 Pence sind ein Pfund. £3.50 spricht man „three pounds fifty“ oder einfach „three fifty“, 80p „eighty p“ oder „eighty pence“. In den USA sind es Dollar und Cent: $3.50 = „three dollars fifty“.',
            },
          },
        },
        {
          id: 'en5-1-match',
          type: 'MATCHING',
          instruction: 'Match the price with the words.',
          left: [
            { id: 'l1', text: '£2.50' },
            { id: 'l2', text: '75p' },
            { id: 'l3', text: '£12' },
            { id: 'l4', text: '£1.20' },
          ],
          right: [
            { id: 'r1', text: 'two pounds fifty' },
            { id: 'r2', text: 'seventy-five pence' },
            { id: 'r3', text: 'twelve pounds' },
            { id: 'r4', text: 'one pound twenty' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'en5-1-cloze',
          type: 'CLOZE',
          instruction: 'Complete the dialogue.',
          wordBank: ['much', 'are', 'of', 'else', 'all'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '▸ How ' },
            { kind: 'GAP', gapId: 'm1', solution: ['much'], width: 6 },
            { kind: 'TEXT', text: ' are the apples?\n▸ They ' },
            { kind: 'GAP', gapId: 'm2', solution: ['are'], width: 5 },
            { kind: 'TEXT', text: ' £1.80 a kilo.\n▸ Two kilos, please. And a bottle ' },
            { kind: 'GAP', gapId: 'm3', solution: ['of'], width: 4 },
            { kind: 'TEXT', text: ' water.\n▸ Anything ' },
            { kind: 'GAP', gapId: 'm4', solution: ['else'], width: 6 },
            { kind: 'TEXT', text: '?\n▸ No, that’s ' },
            { kind: 'GAP', gapId: 'm5', solution: ['all'], width: 5 },
            { kind: 'TEXT', text: ', thanks.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – this, that, these, those.
  {
    order: 2,
    title: 'This one or that one?',
    subtitle: 'this, that, these, those',
    estimatedMinutes: 20,
    content: {
      version: v,
      blocks: [
        { id: 'en5-2-h1', type: 'HEADING', level: 1, text: 'This one or that one?' },
        {
          id: 'en5-2-image',
          type: 'IMAGE',
          url: 'illustration:shopping-bags',
          alt: 'Mehrere Einkaufstüten in verschiedenen Farben und Größen.',
          caption: 'A day of shopping.',
        },
        {
          id: 'en5-2-dlg',
          type: 'DIALOGUE',
          title: 'At the bakery',
          lines: [
            { speaker: 'Karim', text: 'Can I have this cake, please?' },
            { speaker: 'Assistant', text: 'This one here?' },
            { speaker: 'Karim', text: 'No, sorry – that one, at the back. And four of these rolls.' },
            { speaker: 'Assistant', text: 'These ones?' },
            { speaker: 'Karim', text: 'Yes. Oh, and what are those, in the window?' },
            { speaker: 'Assistant', text: 'Those are scones. They’re very good with tea.' },
          ],
        },
        {
          id: 'en5-2-info-this',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'this, that, these, those',
          text: 'English points at things with four words. “this” and “these” are for things near you (here), “that” and “those” for things further away (there). “this” and “that” are singular, “these” and “those” are plural. Instead of repeating the noun, you can say “one” or “ones”: “this one”, “those ones”.',
          translations: {
            de: {
              title: 'this, that, these, those',
              text: 'Das Englische zeigt mit vier Wörtern auf Dinge. „this“ und „these“ für Dinge in der Nähe (hier), „that“ und „those“ für Dinge weiter weg (dort). „this“ und „that“ sind Singular, „these“ und „those“ Plural. Statt das Nomen zu wiederholen, kann man „one“ oder „ones“ sagen: „this one“, „those ones“.',
            },
          },
          table: {
            headers: ['', 'near (here)', 'far (there)'],
            rows: [
              ['singular', 'this cake', 'that cake'],
              ['plural', 'these rolls', 'those rolls'],
            ],
          },
        },
        {
          id: 'en5-2-cloze',
          type: 'CLOZE',
          instruction: 'Complete with this, that, these or those.',
          wordBank: ['this', 'that', 'these', 'those'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '(in your hand) Is ' },
            { kind: 'GAP', gapId: 't1', solution: ['this'], width: 6 },
            { kind: 'TEXT', text: ' your phone?\n(in your hand) ' },
            { kind: 'GAP', gapId: 't2', solution: ['These'], width: 6 },
            { kind: 'TEXT', text: ' apples are very good.\n(across the street) Look at ' },
            { kind: 'GAP', gapId: 't3', solution: ['that'], width: 6 },
            { kind: 'TEXT', text: ' car!\n(in the window) How much are ' },
            { kind: 'GAP', gapId: 't4', solution: ['those'], width: 6 },
            { kind: 'TEXT', text: ' shoes?' },
          ],
        },
        {
          id: 'en5-2-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct word.',
          question: 'You are holding two bananas. “___ bananas are very sweet.”',
          options: [
            { id: 'o1', text: 'This' },
            { id: 'o2', text: 'These' },
            { id: 'o3', text: 'Those' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'The bananas are near (in your hand) and there are two – plural and near: “these”.',
          explanationTranslations: {
            de: 'Die Bananen sind nah (in der Hand), und es sind zwei – Plural und nah: „these“.',
          },
        },
        {
          id: 'en5-2-info-plural',
          type: 'INFO',
          variant: 'TIP',
          title: 'Plurals: -s, -es, -ies',
          text: 'Most nouns just add -s: “roll – rolls”. After -s, -sh, -ch, -x and many words ending in -o, add -es: “box – boxes”, “tomato – tomatoes”. Consonant + y becomes -ies: “strawberry – strawberries”. A few are irregular: “man – men”, “woman – women”, “child – children”, “person – people”.',
          translations: {
            de: {
              title: 'Plural: -s, -es, -ies',
              text: 'Die meisten Nomen bekommen einfach -s: „roll – rolls“. Nach -s, -sh, -ch, -x und bei vielen Wörtern auf -o kommt -es dazu: „box – boxes“, „tomato – tomatoes“. Aus Konsonant + y wird -ies: „strawberry – strawberries“. Einige sind unregelmäßig: „man – men“, „woman – women“, „child – children“, „person – people“.',
            },
          },
        },
        {
          id: 'en5-2-match',
          type: 'MATCHING',
          instruction: 'Match the singular with the plural.',
          left: [
            { id: 'l1', text: 'box' },
            { id: 'l2', text: 'strawberry' },
            { id: 'l3', text: 'child' },
            { id: 'l4', text: 'person' },
          ],
          right: [
            { id: 'r1', text: 'boxes' },
            { id: 'r2', text: 'strawberries' },
            { id: 'r3', text: 'children' },
            { id: 'r4', text: 'people' },
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
  // Seite 3 – Kleidung, Farben, Größen.
  {
    order: 3,
    title: 'Clothes',
    subtitle: 'Kleidung, Farben, Größen',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'en5-3-h1', type: 'HEADING', level: 1, text: 'Clothes' },
        {
          id: 'en5-3-dlg',
          type: 'DIALOGUE',
          title: 'In a clothes shop',
          lines: [
            { speaker: 'Assistant', text: 'Hello, can I help you?' },
            { speaker: 'Anna', text: 'Yes, I’m looking for a jacket.' },
            { speaker: 'Assistant', text: 'What size are you?' },
            { speaker: 'Anna', text: 'Medium, I think. Have you got this one in blue?' },
            { speaker: 'Assistant', text: 'Yes, here you are.' },
            { speaker: 'Anna', text: 'Can I try it on?' },
            { speaker: 'Assistant', text: 'Of course. The changing rooms are over there.' },
          ],
        },
        {
          id: 'en5-3-vocab',
          type: 'VOCAB_LIST',
          title: 'Words: clothes and colours',
          items: [
            { term: 'jacket', translations: { de: 'die Jacke', es: 'la chaqueta' } },
            { term: 'shirt', translations: { de: 'das Hemd', es: 'la camisa' } },
            { term: 'T-shirt', translations: { de: 'das T-Shirt', es: 'la camiseta' } },
            { term: 'trousers', translations: { de: 'die Hose', es: 'los pantalones' }, example: 'These trousers are too long.' },
            { term: 'jeans', translations: { de: 'die Jeans', es: 'los vaqueros' } },
            { term: 'dress', translations: { de: 'das Kleid', es: 'el vestido' } },
            { term: 'shoes', translations: { de: 'die Schuhe', es: 'los zapatos' } },
            { term: 'size', translations: { de: 'die Größe', es: 'la talla' } },
            { term: 'try on', translations: { de: 'anprobieren', es: 'probarse' } },
            { term: 'red, blue, green, black, white', translations: { de: 'rot, blau, grün, schwarz, weiß', es: 'rojo, azul, verde, negro, blanco' } },
          ],
        },
        {
          id: 'en5-3-info-trousers',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'trousers are – always plural',
          text: 'Some clothes are always plural in English because they have two legs: trousers, jeans, shorts – and also glasses. So you say “These trousers are nice.”, not “This trousers is nice.” To count them, use “a pair of”: “two pairs of jeans”.',
          translations: {
            de: {
              title: 'trousers are – immer Plural',
              text: 'Manche Kleidungsstücke sind im Englischen immer Plural, weil sie zwei Beine haben: trousers, jeans, shorts – und auch glasses (Brille). Man sagt also „These trousers are nice.“, nicht „This trousers is nice.“ Zum Zählen nimmt man „a pair of“: „two pairs of jeans“.',
            },
          },
        },
        {
          id: 'en5-3-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'Which sentence is correct?',
          options: [
            { id: 'o1', text: 'This jeans is too big.' },
            { id: 'o2', text: 'These jeans are too big.' },
            { id: 'o3', text: 'These jean are too big.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: '“jeans” is always plural: “these jeans are”.',
          explanationTranslations: {
            de: '„jeans“ ist immer Plural: „these jeans are“.',
          },
        },
        {
          id: 'en5-3-info-too',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'too big – not big enough',
          text: 'When something doesn’t fit, you use “too” before the adjective: “It’s too small.” Or “not … enough” after it: “It isn’t big enough.” Both mean the same.',
          translations: {
            de: {
              title: 'too big – not big enough',
              text: 'Wenn etwas nicht passt, steht „too“ (zu) vor dem Adjektiv: „It’s too small.“ Oder „not … enough“ (nicht … genug) danach: „It isn’t big enough.“ Beides bedeutet dasselbe.',
            },
          },
          table: {
            headers: ['too …', 'not … enough'],
            rows: [
              ['It’s too small.', 'It isn’t big enough.'],
              ['They’re too short.', 'They aren’t long enough.'],
              ['It’s too expensive.', 'It isn’t cheap enough.'],
            ],
          },
        },
        {
          id: 'en5-3-cloze',
          type: 'CLOZE',
          instruction: 'Complete the dialogue.',
          wordBank: ['help', 'size', 'try', 'too', 'enough'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '▸ Can I ' },
            { kind: 'GAP', gapId: 'k1', solution: ['help'], width: 6 },
            { kind: 'TEXT', text: ' you?\n▸ Yes, have you got this shirt in a bigger ' },
            { kind: 'GAP', gapId: 'k2', solution: ['size'], width: 6 },
            { kind: 'TEXT', text: '? This one is ' },
            { kind: 'GAP', gapId: 'k3', solution: ['too'], width: 5 },
            { kind: 'TEXT', text: ' small.\n▸ Here’s a large. Do you want to ' },
            { kind: 'GAP', gapId: 'k4', solution: ['try'], width: 5 },
            { kind: 'TEXT', text: ' it on?\n▸ Hmm … it isn’t long ' },
            { kind: 'GAP', gapId: 'k5', solution: ['enough'], width: 8 },
            { kind: 'TEXT', text: '.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – an der Kasse: can für Bitten, bezahlen.
  {
    order: 4,
    title: 'Can I pay by card?',
    subtitle: 'Bitten mit can, bezahlen',
    estimatedMinutes: 20,
    content: {
      version: v,
      blocks: [
        { id: 'en5-4-h1', type: 'HEADING', level: 1, text: 'Can I pay by card?' },
        {
          id: 'en5-4-dlg',
          type: 'DIALOGUE',
          title: 'At the checkout',
          lines: [
            { speaker: 'Cashier', text: 'Hi there. Have you got a bag?' },
            { speaker: 'Diego', text: 'No, I haven’t. Can I have a bag, please?' },
            { speaker: 'Cashier', text: 'Sure, that’s 20p. So that’s twenty-four pounds sixty altogether.' },
            { speaker: 'Diego', text: 'Can I pay by card?' },
            { speaker: 'Cashier', text: 'Yes, of course. Just tap it here … Great. Do you want the receipt?' },
            { speaker: 'Diego', text: 'Yes, please. Thanks!' },
          ],
        },
        {
          id: 'en5-4-info-can',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'can: asking for something',
          text: '“can” is the easiest way to ask for something or to ask if something is possible. “can” never changes – no -s for he, she, it – and the next verb has no “to”: “Can I pay by card?”, “She can speak Spanish.” The negative is “can’t”. For more politeness, use “could”: “Could I have a bag, please?”',
          translations: {
            de: {
              title: 'can: um etwas bitten',
              text: '„can“ ist der einfachste Weg, um etwas zu bitten oder zu fragen, ob etwas möglich ist. „can“ ändert sich nie – kein -s bei he, she, it –, und das folgende Verb steht ohne „to“: „Can I pay by card?“, „She can speak Spanish.“ Die Verneinung ist „can’t“. Noch höflicher klingt „could“: „Could I have a bag, please?“',
            },
          },
          table: {
            headers: ['', 'example'],
            rows: [
              ['request', 'Can I have a bag, please?'],
              ['possible?', 'Can I pay by card?'],
              ['ability', 'She can speak three languages.'],
              ['negative', 'Sorry, you can’t pay by card here.'],
            ],
          },
        },
        {
          id: 'en5-4-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'Which sentence is correct?',
          options: [
            { id: 'o1', text: 'Can I to pay by card?' },
            { id: 'o2', text: 'Yuki cans speak Japanese.' },
            { id: 'o3', text: 'Can I pay by card?' },
          ],
          multiple: false,
          solution: ['o3'],
          explanation: '“can” never gets an -s, and the next verb comes without “to”.',
          explanationTranslations: {
            de: '„can“ bekommt nie ein -s, und das folgende Verb steht ohne „to“.',
          },
        },
        {
          id: 'en5-4-vocab',
          type: 'VOCAB_LIST',
          title: 'Words: paying',
          items: [
            { term: 'pay by card', translations: { de: 'mit Karte zahlen', es: 'pagar con tarjeta' } },
            { term: 'pay in cash', translations: { de: 'bar zahlen', es: 'pagar en efectivo' } },
            { term: 'receipt', translations: { de: 'der Kassenbon, die Quittung', es: 'el recibo, el tique' } },
            { term: 'change', translations: { de: 'das Wechselgeld', es: 'el cambio' } },
            { term: 'altogether', translations: { de: 'insgesamt', es: 'en total' } },
            { term: 'cheap', translations: { de: 'billig, günstig', es: 'barato' } },
            { term: 'expensive', translations: { de: 'teuer', es: 'caro' } },
            { term: 'Here you are.', translations: { de: 'Bitte schön. (beim Geben)', es: 'Aquí tiene.' } },
          ],
        },
        {
          id: 'en5-4-order',
          type: 'ORDERING',
          instruction: 'Put the dialogue in the right order.',
          items: [
            { id: 'd1', text: 'That’s £15.40, please.' },
            { id: 'd2', text: 'Can I pay in cash?' },
            { id: 'd3', text: 'Of course.' },
            { id: 'd4', text: 'Here you are – twenty pounds.' },
            { id: 'd5', text: 'Thanks. And here’s your change.' },
          ],
          solution: ['d1', 'd2', 'd3', 'd4', 'd5'],
        },
        {
          id: 'en5-4-match',
          type: 'MATCHING',
          instruction: 'Match the question with the answer.',
          left: [
            { id: 'q1', text: 'Can I pay by card?' },
            { id: 'q2', text: 'Do you want the receipt?' },
            { id: 'q3', text: 'Can I have a bag, please?' },
            { id: 'q4', text: 'How much is it altogether?' },
          ],
          right: [
            { id: 'a1', text: 'Sorry, cash only.' },
            { id: 'a2', text: 'No, thanks.' },
            { id: 'a3', text: 'Sure, here you are.' },
            { id: 'a4', text: 'Twenty-four pounds sixty.' },
          ],
          solution: [
            { leftId: 'q1', rightId: 'a1' },
            { leftId: 'q2', rightId: 'a2' },
            { leftId: 'q3', rightId: 'a3' },
            { leftId: 'q4', rightId: 'a4' },
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
        { id: 'en5-5-h1', type: 'HEADING', level: 1, text: 'Can you do it?' },
        {
          id: 'en5-5-intro',
          type: 'TEXT',
          text: 'The whole chapter again: prices and amounts, this/that/these/those, clothes and paying.',
          translations: {
            de: 'Das ganze Kapitel noch einmal: Preise und Mengen, this/that/these/those, Kleidung und Bezahlen.',
          },
        },
        {
          id: 'en5-5-cloze',
          type: 'CLOZE',
          instruction: 'Complete the dialogue in the shop.',
          wordBank: ['much', 'these', 'are', 'Can', 'card'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '▸ How ' },
            { kind: 'GAP', gapId: 'f1', solution: ['much'], width: 6 },
            { kind: 'TEXT', text: ' are ' },
            { kind: 'GAP', gapId: 'f2', solution: ['these'], width: 6 },
            { kind: 'TEXT', text: ' shoes here?\n▸ They ' },
            { kind: 'GAP', gapId: 'f3', solution: ['are'], width: 5 },
            { kind: 'TEXT', text: ' £45.\n▸ ' },
            { kind: 'GAP', gapId: 'f4', solution: ['Can'], width: 5 },
            { kind: 'TEXT', text: ' I pay by ' },
            { kind: 'GAP', gapId: 'f5', solution: ['card'], width: 6 },
            { kind: 'TEXT', text: '?\n▸ Yes, of course.' },
          ],
        },
        {
          id: 'en5-5-match',
          type: 'MATCHING',
          instruction: 'Match the situation with the right sentence.',
          left: [
            { id: 'm1', text: 'You want a smaller T-shirt.' },
            { id: 'm2', text: 'You want to know the price of one melon.' },
            { id: 'm3', text: 'You want to wear the jacket in the shop.' },
            { id: 'm4', text: 'You don’t need anything more.' },
          ],
          right: [
            { id: 'x1', text: 'Have you got this in a small?' },
            { id: 'x2', text: 'How much is this melon?' },
            { id: 'x3', text: 'Can I try it on?' },
            { id: 'x4', text: 'That’s all, thanks.' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'x1' },
            { leftId: 'm2', rightId: 'x2' },
            { leftId: 'm3', rightId: 'x3' },
            { leftId: 'm4', rightId: 'x4' },
          ],
        },
        {
          id: 'en5-5-choice',
          type: 'CHOICE',
          instruction: 'Mark all the correct sentences.',
          question: 'Which of these sentences are correct?',
          options: [
            { id: 'r1', text: 'Those trousers are too long.' },
            { id: 'r2', text: 'How much is these apples?' },
            { id: 'r3', text: 'I’d like a bottle of water.' },
            { id: 'r4', text: 'She cans pay in cash.' },
          ],
          multiple: true,
          solution: ['r1', 'r3'],
          explanation: '“apples” is plural: “How much are these apples?” And “can” never gets an -s: “She can pay in cash.”',
          explanationTranslations: {
            de: '„apples“ ist Plural: „How much are these apples?“ Und „can“ bekommt nie ein -s: „She can pay in cash.“',
          },
        },
        {
          id: 'en5-5-writing',
          type: 'WRITING',
          instruction: 'Write a shopping dialogue.',
          prompt:
            'Write a short dialogue (six to eight lines) in a shop or at the market. Ask for the price, say what you want, and pay. Use “How much …?”, “this/these” and “Can I …?”.',
          minWords: 30,
          maxWords: 110,
          aiFeedback: true,
          sampleAnswer:
            '– Hello, can I help you?\n– Yes, how much are these strawberries?\n– They’re three pounds a box.\n– Two boxes, please. And can I have that bread?\n– This one?\n– Yes, please. Can I pay by card?\n– Of course. That’s seven pounds twenty.',
        },
      ],
    },
  },
];
