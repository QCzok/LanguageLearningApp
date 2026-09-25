import type { UnitSeed } from './chapter-beginner-1';

/**
 * Englisch, Advanced, Kapitel 5: „Global economy“ (C1, Kapitel 5)
 *
 * Fünf Seiten. Wirtschaftstexte sind voller Zahlen und Zielkonflikte. Das
 * Kapitel lehrt, Trends und Statistiken präzise zu versprachlichen, die
 * typischen Fallen (per cent vs percentage points, Durchschnitt vs Median)
 * zu erkennen und Zielkonflikte darzustellen, ohne vorschnell Partei zu
 * ergreifen.
 *
 * Aufbau: Seite 1 Wachstum und Entwicklung, Seite 2 Trends beschreiben,
 * Seite 3 Statistiken richtig lesen, Seite 4 Zielkonflikte, Seite 5
 * Lösungen bewerten und einen Bericht schreiben.
 *
 * Alle Zahlen sind gerundet oder erfunden. Sämtliche Texte sind
 * eigenständig verfasst.
 */
const v = 1;

export const ENGLISH_ADVANCED_5_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  {
    order: 1,
    title: 'Growth is not the same as development',
    subtitle: 'Wachstum und Entwicklung',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'ena5-1-h1', type: 'HEADING', level: 1, text: 'Growth is not the same as development' },
        {
          id: 'ena5-1-text',
          type: 'TEXT',
          text: 'A country can grow for years without most people’s lives changing. If the increase in output is concentrated in one sector and a few hands, GDP rises while poverty stays where it was. Economists therefore distinguish between growth – how much more is produced – and development – how much living conditions improve. Much of the debate about the global economy turns on the gap between the two.',
        },
        {
          id: 'ena5-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Words: the economy',
          items: [
            { term: 'GDP (gross domestic product)', translations: { de: 'das BIP', es: 'el PIB' } },
            { term: 'per capita', translations: { de: 'pro Kopf', es: 'per cápita' } },
            { term: 'inequality', translations: { de: 'die Ungleichheit', es: 'la desigualdad' } },
            { term: 'the gap (between)', translations: { de: 'die Kluft, die Lücke', es: 'la brecha' } },
            { term: 'commodity', translations: { de: 'der Rohstoff, die Ware', es: 'la materia prima' } },
            { term: 'informal economy', translations: { de: 'die Schattenwirtschaft', es: 'la economía informal' } },
            { term: 'public debt', translations: { de: 'die Staatsverschuldung', es: 'la deuda pública' } },
            { term: 'investment', translations: { de: 'die Investition', es: 'la inversión' } },
            { term: 'supply chain', translations: { de: 'die Lieferkette', es: 'la cadena de suministro' } },
            { term: 'tariff', translations: { de: 'der Zoll', es: 'el arancel' } },
            { term: 'sustainable', translations: { de: 'nachhaltig', es: 'sostenible' } },
          ],
        },
        {
          id: 'ena5-1-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'What each indicator measures',
          text: 'No single indicator measures everything. GDP adds up what is produced but says nothing about who gets it. GDP per capita divides the total by the population – an average that hides those far below it. The Gini coefficient measures inequality from 0 (perfect equality) to 1 (one person has everything). The Human Development Index combines income, life expectancy and education.',
          table: {
            headers: ['Indicator', 'Measures', 'Does not measure'],
            rows: [
              ['GDP', 'total output', 'distribution'],
              ['GDP per capita', 'average output per person', 'how far people are from the average'],
              ['Gini coefficient', 'income inequality', 'absolute living standards'],
              ['HDI', 'income, health, education', 'environmental sustainability'],
            ],
          },
        },
        {
          id: 'ena5-1-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct conclusion.',
          question: 'In a country, GDP per capita has risen by 15% in five years, and the Gini coefficient has gone from 0.42 to 0.50. What can you conclude?',
          options: [
            { id: 'c1', text: 'Everyone is 15% richer.' },
            { id: 'c2', text: 'Output per person has grown, but income is distributed more unequally.' },
            { id: 'c3', text: 'Inequality has fallen, because the Gini has risen.' },
            { id: 'c4', text: 'The country has developed in a balanced way.' },
          ],
          multiple: false,
          solution: ['c2'],
          explanation:
            'A higher average is compatible with many people earning less. A rising Gini means more inequality: the gains have gone to part of the population.',
        },
        {
          id: 'ena5-1-cloze',
          type: 'CLOZE',
          instruction: 'Complete the text.',
          wordBank: ['commodities', 'investment', 'informal', 'gap', 'tariffs'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'During the boom in copper and soya prices, many economies grew by exporting ' },
            { kind: 'GAP', gapId: 'g1', solution: ['commodities'], width: 12 },
            { kind: 'TEXT', text: '. Without ' },
            { kind: 'GAP', gapId: 'g2', solution: ['investment'], width: 11 },
            { kind: 'TEXT', text: ' in industry and services, however, much employment remained ' },
            { kind: 'GAP', gapId: 'g3', solution: ['informal'], width: 9 },
            { kind: 'TEXT', text: ', and the ' },
            { kind: 'GAP', gapId: 'g4', solution: ['gap'], width: 4 },
            { kind: 'TEXT', text: ' between regions stayed wide. When rich countries raised ' },
            { kind: 'GAP', gapId: 'g5', solution: ['tariffs'], width: 8 },
            { kind: 'TEXT', text: ', exports fell sharply.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  {
    order: 2,
    title: 'Describing trends',
    subtitle: 'Entwicklungen und Grafiken beschreiben',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'ena5-2-h1', type: 'HEADING', level: 1, text: 'Describing trends' },
        {
          id: 'ena5-2-intro',
          type: 'TEXT',
          text: 'Economic reports rarely say “went up” and “went down”. The verb itself carries information about the speed and shape of the change, and adverbs add precision. A good description of a graph selects the main trend, the key exceptions and the most striking figures – it does not list every data point.',
        },
        {
          id: 'ena5-2-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Verbs and nouns of change',
          text: 'Many verbs have a matching noun: “Prices rose sharply” = “There was a sharp rise in prices”. Adjectives go with nouns (a slight fall), adverbs with verbs (fell slightly). Note the prepositions: rise BY 5% (the amount), rise TO 8% (the new level), a rise OF 5% (noun).',
          table: {
            headers: ['Movement', 'Verbs', 'Typical adverbs'],
            rows: [
              ['up', 'rise, increase, grow, climb', 'slightly, steadily, sharply'],
              ['up fast', 'soar, surge, rocket', '—'],
              ['down', 'fall, decrease, decline, drop', 'gradually, significantly'],
              ['down fast', 'plummet, plunge, collapse', '—'],
              ['no change', 'remain stable, level off, stagnate', '—'],
              ['back up', 'recover, rebound, pick up', 'strongly, modestly'],
            ],
          },
        },
        {
          id: 'ena5-2-match',
          type: 'MATCHING',
          instruction: 'Match each set of figures with the best description.',
          left: [
            { id: 'v1', text: 'Sales: 100, 98, 60' },
            { id: 'v2', text: 'Growth: 4%, 3%, 2%' },
            { id: 'v3', text: 'Unemployment: 7%, 7%, 7%' },
            { id: 'v4', text: 'Tourists: 5m, 3m, 4.5m' },
          ],
          right: [
            { id: 'w1', text: 'plummeted' },
            { id: 'w2', text: 'slowed down' },
            { id: 'w3', text: 'remained stable' },
            { id: 'w4', text: 'rebounded' },
          ],
          solution: [
            { leftId: 'v1', rightId: 'w1' },
            { leftId: 'v2', rightId: 'w2' },
            { leftId: 'v3', rightId: 'w3' },
            { leftId: 'v4', rightId: 'w4' },
          ],
        },
        {
          id: 'ena5-2-cloze',
          type: 'CLOZE',
          instruction: 'Complete the report with the right preposition or word.',
          wordBank: ['by', 'to', 'of', 'sharply', 'off'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'In the first quarter, exports rose ' },
            { kind: 'GAP', gapId: 'x1', solution: ['by'], hint: 'amount of change', width: 3 },
            { kind: 'TEXT', text: ' 6%, ' },
            { kind: 'GAP', gapId: 'x2', solution: ['to'], hint: 'new level', width: 3 },
            { kind: 'TEXT', text: ' €42 billion. This was followed by a fall ' },
            { kind: 'GAP', gapId: 'x3', solution: ['of'], hint: 'after a noun', width: 3 },
            { kind: 'TEXT', text: ' 2% in April. Imports increased ' },
            { kind: 'GAP', gapId: 'x4', solution: ['sharply'], hint: 'adverb, fast', width: 8 },
            { kind: 'TEXT', text: ' in the spring before levelling ' },
            { kind: 'GAP', gapId: 'x5', solution: ['off'], width: 4 },
            { kind: 'TEXT', text: ' in the summer.' },
          ],
        },
        {
          id: 'ena5-2-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'Which sentence is correct?',
          options: [
            { id: 'q1', text: 'There was a sharply rise in prices.' },
            { id: 'q2', text: 'Prices rose sharp in March.' },
            { id: 'q3', text: 'There was a sharp rise in prices in March.' },
            { id: 'q4', text: 'Prices had a rise sharply in March.' },
          ],
          multiple: false,
          solution: ['q3'],
          explanation:
            'With the noun “rise”, use the adjective “sharp”. With the verb “rose”, use the adverb “sharply”: “Prices rose sharply in March.”',
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  {
    order: 3,
    title: 'Numbers that mislead',
    subtitle: 'Statistiken richtig lesen',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'ena5-3-h1', type: 'HEADING', level: 1, text: 'Numbers that mislead' },
        {
          id: 'ena5-3-intro',
          type: 'TEXT',
          text: 'Most errors with statistics are not errors of calculation but of language. People confuse a percentage with a percentage point, say something has “doubled” when it has risen by half, or present slower growth as a fall. Whoever writes about the economy needs a precise repertoire.',
        },
        {
          id: 'ena5-3-info',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Per cent or percentage points?',
          text: 'If unemployment goes from 10% to 12%, it has risen by two percentage points – but by 20% relative to its previous level. Both statements are true and say very different things. When comparing two rates, use percentage points.',
          table: {
            headers: ['Change', 'In points', 'In relative terms'],
            rows: [
              ['10% → 12%', '+2 percentage points', '+20%'],
              ['4% → 3%', '−1 percentage point', '−25%'],
              ['50% → 55%', '+5 percentage points', '+10%'],
            ],
          },
        },
        {
          id: 'ena5-3-choice',
          type: 'CHOICE',
          instruction: 'Choose the accurate sentence.',
          question: 'Inflation has gone from 3% to 6%. Which sentence is accurate?',
          options: [
            { id: 'p1', text: 'Inflation has risen by 3%.' },
            { id: 'p2', text: 'Inflation has risen by three percentage points – it has doubled.' },
            { id: 'p3', text: 'Inflation has risen by 6%.' },
            { id: 'p4', text: 'Inflation has risen by 50%.' },
          ],
          multiple: false,
          solution: ['p2'],
          explanation:
            'Three percentage points is the difference between the two rates; since the new rate is twice the old, it has also doubled. “Risen by 3%” confuses points with relative change.',
        },
        {
          id: 'ena5-3-info-average',
          type: 'INFO',
          variant: 'TIP',
          title: 'Mean, median and “average”',
          text: 'The mean adds everything up and divides by the number of people; a few billionaires can pull it up dramatically. The median is the middle value: half earn more, half less. When incomes are unequal, the median is usually a better guide to the “typical” person. Always ask which “average” a report means.',
        },
        {
          id: 'ena5-3-match',
          type: 'MATCHING',
          instruction: 'Match each statement with what is wrong with it.',
          left: [
            { id: 'm1', text: 'Growth fell from 3% to 2%, so the economy shrank.' },
            { id: 'm2', text: 'Average income rose, so the typical family is better off.' },
            { id: 'm3', text: 'The rate rose by 2% (from 4% to 6%).' },
          ],
          right: [
            { id: 'n1', text: 'Growth slowed, but the economy still grew.' },
            { id: 'n2', text: 'The mean may have risen because of a few very high incomes.' },
            { id: 'n3', text: 'It rose by 2 percentage points, or 50%.' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'n1' },
            { leftId: 'm2', rightId: 'n2' },
            { leftId: 'm3', rightId: 'n3' },
          ],
        },
        {
          id: 'ena5-3-cloze',
          type: 'CLOZE',
          instruction: 'Complete the report.',
          wordBank: ['percentage points', 'doubled', 'median', 'roughly', 'slowed'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Unemployment fell by two ' },
            { kind: 'GAP', gapId: 'y1', solution: ['percentage points'], width: 18 },
            { kind: 'TEXT', text: ', to 9%. Foreign investment ' },
            { kind: 'GAP', gapId: 'y2', solution: ['doubled'], width: 8 },
            { kind: 'TEXT', text: ', from $2bn to $4bn. The ' },
            { kind: 'GAP', gapId: 'y3', solution: ['median'], width: 7 },
            { kind: 'TEXT', text: ' household income barely changed. Growth ' },
            { kind: 'GAP', gapId: 'y4', solution: ['slowed'], width: 7 },
            { kind: 'TEXT', text: ' but remained positive, at ' },
            { kind: 'GAP', gapId: 'y5', solution: ['roughly'], width: 8 },
            { kind: 'TEXT', text: ' 1.5%.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  {
    order: 4,
    title: 'Trade-offs',
    subtitle: 'Zielkonflikte darstellen',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'ena5-4-h1', type: 'HEADING', level: 1, text: 'Trade-offs' },
        {
          id: 'ena5-4-text',
          type: 'TEXT',
          text: 'A region in the Andes has one of the world’s largest lithium deposits. Mining it would bring investment, jobs and tax revenue for schools and hospitals. But extraction uses vast amounts of water in an already dry area, where communities depend on it for farming. And lithium is essential for the batteries of the energy transition. None of these goals is illegitimate; not all of them can be met at once.',
        },
        {
          id: 'ena5-4-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Expressing the price of a goal',
          text: '“At the expense of” and “at the cost of” name what is sacrificed. “Trade-off” is the noun for the whole situation. “Without” + -ing denies an expected consequence. “To the extent that” expresses proportion, and “the more …, the less …” a gradual relationship.',
          table: {
            headers: ['Expression', 'Example'],
            rows: [
              ['at the expense of', 'The region grew at the expense of its water reserves.'],
              ['a trade-off between', 'There is a trade-off between cheap energy and environmental protection.'],
              ['without + -ing', 'GDP grew without reducing poverty.'],
              ['to the extent that', 'The mine is acceptable to the extent that it protects the aquifers.'],
              ['the more …, the less …', 'The more lithium is extracted, the less water remains for farming.'],
            ],
          },
        },
        {
          id: 'ena5-4-cloze',
          type: 'CLOZE',
          instruction: 'Complete with the right expression.',
          wordBank: ['at the expense of', 'without', 'The more', 'trade-off', 'to the extent that'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'The economy grew by 5% a year ' },
            { kind: 'GAP', gapId: 'c1', solution: ['without'], width: 8 },
            { kind: 'TEXT', text: ' raising wages. The boom was achieved ' },
            { kind: 'GAP', gapId: 'c2', solution: ['at the expense of', 'at the cost of'], width: 17 },
            { kind: 'TEXT', text: ' local water supplies. ' },
            { kind: 'GAP', gapId: 'c3', solution: ['The more'], width: 9 },
            { kind: 'TEXT', text: ' diversification is delayed, the greater the dependence. There is a clear ' },
            { kind: 'GAP', gapId: 'c4', solution: ['trade-off'], width: 10 },
            { kind: 'TEXT', text: ' between jobs and water. The mine is acceptable only ' },
            { kind: 'GAP', gapId: 'c5', solution: ['to the extent that'], width: 18 },
            { kind: 'TEXT', text: ' communities share in the decisions.' },
          ],
        },
        {
          id: 'ena5-4-choice',
          type: 'CHOICE',
          instruction: 'Choose the sentence that describes the conflict without taking sides.',
          question: 'Which sentence presents the lithium conflict fairly?',
          options: [
            { id: 'e1', text: 'Mining companies are destroying the region to get rich.' },
            { id: 'e2', text: 'Opposing the mine means opposing progress and clean energy.' },
            {
              id: 'e3',
              text: 'Mining would bring tax revenue and a key material for the energy transition, but at the expense of water on which local communities depend.',
            },
            { id: 'e4', text: 'Lithium is the future; water can always be brought from elsewhere.' },
          ],
          multiple: false,
          solution: ['e3'],
          explanation: 'The balanced sentence names the benefits and the cost with equal precision. The others pick a side and present it as obvious.',
        },
        {
          id: 'ena5-4-match',
          type: 'MATCHING',
          instruction: 'Match each policy with the trade-off it may involve.',
          left: [
            { id: 'k1', text: 'raising the minimum wage' },
            { id: 'k2', text: 'cutting corporate taxes' },
            { id: 'k3', text: 'imposing tariffs on imports' },
            { id: 'k4', text: 'clearing forest for farmland' },
          ],
          right: [
            { id: 'l1', text: 'higher incomes vs possible job losses' },
            { id: 'l2', text: 'more investment vs less public revenue' },
            { id: 'l3', text: 'protecting domestic jobs vs higher prices for consumers' },
            { id: 'l4', text: 'more food production vs loss of biodiversity' },
          ],
          solution: [
            { leftId: 'k1', rightId: 'l1' },
            { leftId: 'k2', rightId: 'l2' },
            { leftId: 'k3', rightId: 'l3' },
            { leftId: 'k4', rightId: 'l4' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  {
    order: 5,
    title: 'Evaluating solutions',
    subtitle: 'Lösungen bewerten und einen Bericht schreiben',
    estimatedMinutes: 32,
    content: {
      version: v,
      blocks: [
        { id: 'ena5-5-h1', type: 'HEADING', level: 1, text: 'Evaluating solutions' },
        {
          id: 'ena5-5-intro',
          type: 'TEXT',
          text: 'A report that evaluates policy options is not an opinion piece. It sets out each option with its likely benefits, costs and risks, judges them against clear criteria and only then makes a recommendation – usually with conditions. The language is impersonal and measured: “this option is likely to”, “a key drawback is”, “on balance”.',
        },
        {
          id: 'ena5-5-info',
          type: 'INFO',
          variant: 'TIP',
          title: 'Phrases for evaluating options',
          text: 'Use neutral verbs to present each option and save your judgement for the recommendation. Presenting options with loaded words (“reckless”, “visionary”) undermines the credibility of the report.',
          table: {
            headers: ['Function', 'Phrase'],
            rows: [
              ['benefit', 'The main advantage of this option is that …'],
              ['drawback', 'A key drawback is … / The risk is that …'],
              ['likelihood', 'This is likely / unlikely to …'],
              ['comparison', 'Compared with option A, option B …'],
              ['recommendation', 'On balance, we recommend …, provided that …'],
            ],
          },
        },
        {
          id: 'ena5-5-ordering',
          type: 'ORDERING',
          instruction: 'Put the sections of the report in a logical order.',
          items: [
            { id: 'o1', text: 'This report evaluates two options for reducing informal employment.' },
            { id: 'o2', text: 'Option A, simplifying business registration, is cheap and quick to implement.' },
            { id: 'o3', text: 'However, it is unlikely to help businesses whose profits are too low to pay any tax.' },
            { id: 'o4', text: 'Option B, offering micro-loans and training, addresses productivity, but is more expensive.' },
            { id: 'o5', text: 'On balance, we recommend combining both, provided that the loans are targeted at the smallest firms.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5'],
        },
        {
          id: 'ena5-5-cloze',
          type: 'CLOZE',
          instruction: 'Complete the summary of the chapter.',
          wordBank: ['development', 'Gini', 'sharply', 'points', 'median', 'expense'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Growth measures output; ' },
            { kind: 'GAP', gapId: 'z1', solution: ['development'], width: 12 },
            { kind: 'TEXT', text: ' measures living conditions. The ' },
            { kind: 'GAP', gapId: 'z2', solution: ['Gini'], width: 5 },
            { kind: 'TEXT', text: ' coefficient measures inequality. Prices can rise ' },
            { kind: 'GAP', gapId: 'z3', solution: ['sharply'], width: 8 },
            { kind: 'TEXT', text: ' or slightly. Between two rates, we speak of percentage ' },
            { kind: 'GAP', gapId: 'z4', solution: ['points'], width: 7 },
            { kind: 'TEXT', text: '. The ' },
            { kind: 'GAP', gapId: 'z5', solution: ['median'], width: 7 },
            { kind: 'TEXT', text: ' shows the typical case better than the mean. And “at the ' },
            { kind: 'GAP', gapId: 'z6', solution: ['expense'], width: 8 },
            { kind: 'TEXT', text: ' of” names what is sacrificed.' },
          ],
        },
        {
          id: 'ena5-5-writing',
          type: 'WRITING',
          instruction: 'Write a short report.',
          prompt:
            'A government is considering raising the national minimum wage by 20% in a country where 45% of workers are in the informal economy. Write a short report (200–280 words) for a policy committee. Present the two main positions fairly, describe the trade-off, use at least two accurate expressions for numbers or trends, and end with a conditional recommendation.',
          minWords: 200,
          maxWords: 290,
          aiFeedback: true,
          sampleAnswer:
            'Proposed increase in the minimum wage: options and recommendation\n\nThis report assesses the proposal to raise the national minimum wage by 20%.\n\nSupporters argue that the minimum wage has lost purchasing power in recent years. Since 2019, prices have risen by around 30%, while the minimum wage has increased by only 12%. An increase would therefore restore some of this loss for roughly one million formal workers, and higher spending could partly offset the cost to businesses.\n\nCritics point out that 45% of workers are employed informally. In this context, a sharp rise could make formal employment more expensive and push small businesses out of the formal economy altogether. The gains for some workers might thus come at the expense of protection for others.\n\nBoth positions agree that the current minimum wage is too low and that informality is the main weakness of the labour market. The disagreement lies in the order of reforms.\n\nThere is a clear trade-off: the larger the increase, the greater the benefit to formal workers, but also the greater the risk to formal employment in low-productivity sectors.\n\nOn balance, we recommend a phased increase – for example, 8% this year and a further increase next year, depending on employment data – provided that it is combined with incentives for small businesses to formalise, such as simplified registration and reduced social security contributions in the first two years. This approach is likely to deliver most of the benefits while limiting the risk of increased informality.',
        },
      ],
    },
  },
];
