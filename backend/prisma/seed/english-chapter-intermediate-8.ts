import type { UnitSeed } from './chapter-beginner-1';

/**
 * Englisch, Intermediate, Kapitel 8: „Business and economy“ (B2, Kapitel 2)
 *
 * Die Sprache der Zahlen und der Verhandlung. Seite 1 beschreibt Trends – mit
 * den Präpositionen by, to und from, an denen die Genauigkeit hängt. Seite 2
 * verhandelt mit vorsichtigen Angeboten im Konjunktiv, Seite 3 präsentiert
 * mit Gliederungssignalen, Seite 4 bringt das Passiv der Berichtssprache
 * (is expected to, it is estimated that), Seite 5 den kurzen Bericht.
 *
 * Firmen und Zahlen sind erfunden; die Personen stammen aus der B1-Hälfte
 * (Sophie, Ben, Tom bei Greenleaf Travel).
 *
 * Einsprachig englisch; Vokabeln mit `de` und `es`.
 */
const v = 1;

export const ENGLISH_INTERMEDIATE_8_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Trends beschreiben.
  {
    order: 1,
    title: 'Sales rose by 12%',
    subtitle: 'Trends und Zahlen beschreiben',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'eni8-1-h1', type: 'HEADING', level: 1, text: 'Sales rose by 12%' },
        {
          id: 'eni8-1-text',
          type: 'TEXT',
          text: 'Greenleaf Travel – annual results\n\nIn the first quarter, bookings fell slightly, from 4,200 to 4,050. They then rose sharply in spring and reached a peak of 7,800 in July. After the summer, demand dropped significantly, before levelling off at around 5,000 in the last quarter. Overall, revenue increased by 12% to £6.3 million, while costs remained stable. There was a dramatic rise in bookings for train holidays, which almost doubled.',
        },
        {
          id: 'eni8-1-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Verbs, nouns and prepositions for trends',
          text: 'Trends can be described with a verb + adverb (“rose sharply”) or with an adjective + noun (“a sharp rise”). The prepositions carry the precise meaning: “by” = the size of the change, “to” = the new level, “from … to” = the start and end. “rise” has no object (sales rose); “raise” has one (we raised prices).',
          table: {
            headers: ['verb + adverb', 'adjective + noun', 'meaning'],
            rows: [
              ['rise / increase sharply', 'a sharp rise / increase', 'big and fast up'],
              ['fall / drop slightly', 'a slight fall / drop', 'small down'],
              ['grow steadily', 'steady growth', 'regular up'],
              ['level off / remain stable', '—', 'stop changing'],
              ['reach a peak', 'a peak', 'the highest point'],
            ],
          },
        },
        {
          id: 'eni8-1-cloze',
          type: 'CLOZE',
          instruction: 'Complete with by, to, from or at.',
          wordBank: ['by', 'to', 'from', 'at'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Bookings fell ' },
            { kind: 'GAP', gapId: 'p1', solution: ['from'], width: 5 },
            { kind: 'TEXT', text: ' 4,200 to 4,050. Revenue increased ' },
            { kind: 'GAP', gapId: 'p2', solution: ['by'], width: 5 },
            { kind: 'TEXT', text: ' 12% ' },
            { kind: 'GAP', gapId: 'p3', solution: ['to'], width: 5 },
            { kind: 'TEXT', text: ' £6.3 million. Demand levelled off ' },
            { kind: 'GAP', gapId: 'p4', solution: ['at'], width: 5 },
            { kind: 'TEXT', text: ' around 5,000.' },
          ],
        },
        {
          id: 'eni8-1-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'Prices were £100 and are now £110.',
          options: [
            { id: 'o1', text: 'Prices rose to 10%.' },
            { id: 'o2', text: 'Prices rose by 10%.' },
            { id: 'o3', text: 'Prices raised by 10%.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: '“by” gives the size of the change. “rise” has no object; “raise” needs one (“The company raised prices by 10%”).',
        },
        {
          id: 'eni8-1-match',
          type: 'MATCHING',
          instruction: 'Match the verb phrase with the noun phrase.',
          left: [
            { id: 'l1', text: 'rose sharply' },
            { id: 'l2', text: 'fell slightly' },
            { id: 'l3', text: 'grew steadily' },
            { id: 'l4', text: 'dropped dramatically' },
          ],
          right: [
            { id: 'r1', text: 'a sharp rise' },
            { id: 'r2', text: 'a slight fall' },
            { id: 'r3', text: 'steady growth' },
            { id: 'r4', text: 'a dramatic drop' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'eni8-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Words: business and figures',
          items: [
            { term: 'revenue / turnover', translations: { de: 'der Umsatz', es: 'los ingresos, la facturación' } },
            { term: 'profit / loss', translations: { de: 'der Gewinn / der Verlust', es: 'el beneficio / la pérdida' } },
            { term: 'costs', translations: { de: 'die Kosten', es: 'los costes' } },
            { term: 'demand', translations: { de: 'die Nachfrage', es: 'la demanda' } },
            { term: 'quarter', translations: { de: 'das Quartal', es: 'el trimestre' } },
            { term: 'to double', translations: { de: 'sich verdoppeln', es: 'duplicarse' } },
            { term: 'to reach a peak', translations: { de: 'einen Höchststand erreichen', es: 'alcanzar un máximo' } },
            { term: 'billion', translations: { de: 'die Milliarde', es: 'mil millones' } },
          ],
        },
        {
          id: 'eni8-1-info-billion',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'billion ≠ Billion',
          text: 'English “a billion” is 1,000,000,000 – German “eine Milliarde”. German “eine Billion” is “a trillion” in English. Also note the punctuation: English writes 6,300,000 and 6.3 – the opposite of German.',
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – verhandeln.
  {
    order: 2,
    title: 'If you could …, we would …',
    subtitle: 'Verhandeln',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'eni8-2-h1', type: 'HEADING', level: 1, text: 'If you could …, we would …' },
        {
          id: 'eni8-2-dlg',
          type: 'DIALOGUE',
          title: 'Negotiating with a rail company',
          lines: [
            { speaker: 'Sophie', text: 'We’d like to book around 3,000 train tickets next year. What sort of discount would you be able to offer?' },
            { speaker: 'Mr Lang', text: 'For that volume, we could offer 8%.' },
            { speaker: 'Sophie', text: 'That’s a little lower than we were hoping for. Would you consider 12% if we committed to a two-year contract?' },
            { speaker: 'Mr Lang', text: 'Twelve would be difficult. But if you paid in advance each quarter, we might be able to go to 10%.' },
            { speaker: 'Sophie', text: 'I think we could work with that, provided that the tickets are fully flexible.' },
            { speaker: 'Mr Lang', text: 'Let me check with my manager, but that should be possible.' },
          ],
        },
        {
          id: 'eni8-2-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Tentative language',
          text: 'Negotiators rarely say “We want 12%.” They use conditional forms (would, could, might), past tenses with present meaning (“we were hoping for”), and softeners (a little, slightly, around). Offers are linked to conditions with “if”, “provided that”, “as long as” or “on condition that”. A second conditional (“if you paid …, we could …”) sounds less pushy than a first conditional.',
          table: {
            headers: ['direct', 'tentative'],
            rows: [
              ['We want a discount.', 'We were wondering if you could offer a discount.'],
              ['That’s too expensive.', 'That’s a little more than we were expecting.'],
              ['Give us 12%.', 'Would you consider 12%?'],
              ['We’ll pay in advance.', 'We could pay in advance, provided that …'],
            ],
          },
        },
        {
          id: 'eni8-2-choice',
          type: 'CHOICE',
          instruction: 'Choose the most diplomatic reply.',
          question: 'The supplier offers 5%. You think this is far too low.',
          options: [
            { id: 'o1', text: '5%? That’s ridiculous.' },
            { id: 'o2', text: 'That’s a little lower than we were hoping for. Is there any flexibility?' },
            { id: 'o3', text: 'We want 15%, or we go somewhere else.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'Softeners (“a little”), the past continuous (“were hoping”) and an open question keep the negotiation friendly.',
        },
        {
          id: 'eni8-2-cloze',
          type: 'CLOZE',
          instruction: 'Complete the negotiation.',
          wordBank: ['would', 'could', 'paid', 'provided', 'hoping'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '▸ What discount ' },
            { kind: 'GAP', gapId: 'n1', solution: ['would', 'could'], width: 7 },
            { kind: 'TEXT', text: ' you be able to offer?\n▸ We ' },
            { kind: 'GAP', gapId: 'n2', solution: ['could'], width: 7 },
            { kind: 'TEXT', text: ' offer 8%.\n▸ We were ' },
            { kind: 'GAP', gapId: 'n3', solution: ['hoping'], width: 8 },
            { kind: 'TEXT', text: ' for a bit more.\n▸ If you ' },
            { kind: 'GAP', gapId: 'n4', solution: ['paid'], width: 6 },
            { kind: 'TEXT', text: ' in advance, we might go to 10%.\n▸ Fine, ' },
            { kind: 'GAP', gapId: 'n5', solution: ['provided'], width: 9 },
            { kind: 'TEXT', text: ' that the tickets are flexible.' },
          ],
        },
        {
          id: 'eni8-2-order',
          type: 'ORDERING',
          instruction: 'Put the stages of a negotiation in a typical order.',
          items: [
            { id: 's1', text: 'State what you want in general terms.' },
            { id: 's2', text: 'Listen to the first offer.' },
            { id: 's3', text: 'Make a counter-offer with a condition.' },
            { id: 's4', text: 'Agree on the details.' },
            { id: 's5', text: 'Confirm the agreement in writing.' },
          ],
          solution: ['s1', 's2', 's3', 's4', 's5'],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – präsentieren.
  {
    order: 3,
    title: 'Let me walk you through …',
    subtitle: 'Eine Präsentation gliedern',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'eni8-3-h1', type: 'HEADING', level: 1, text: 'Let me walk you through …' },
        {
          id: 'eni8-3-text',
          type: 'TEXT',
          text: 'Sophie’s presentation to the board:\n\n“Good morning, everyone. Today I’d like to talk about our new train holiday range. I’ve divided my presentation into three parts. First, I’ll look at last year’s figures. Then I’ll move on to our plans for next year, and finally I’ll talk about the budget. Please feel free to interrupt if you have any questions.\n\nSo, let’s start with the figures. As you can see on this slide, bookings almost doubled … That brings me to my second point … To sum up, train holidays are our fastest-growing product. Thank you for your attention – I’m happy to take any questions.”',
        },
        {
          id: 'eni8-3-info',
          type: 'INFO',
          variant: 'TIP',
          title: 'Signposting',
          text: 'Listeners can’t go back a page, so good presenters tell them where they are. These “signposts” mark the structure: the introduction announces it, transitions move between parts, and the conclusion sums up.',
          table: {
            headers: ['stage', 'phrases'],
            rows: [
              ['introduce', 'Today I’d like to talk about … / I’ve divided my talk into three parts.'],
              ['move on', 'Let’s move on to … / That brings me to my next point.'],
              ['refer to visuals', 'As you can see on this slide, … / If you look at the graph, …'],
              ['conclude', 'To sum up, … / In conclusion, …'],
              ['questions', 'I’m happy to take any questions.'],
            ],
          },
        },
        {
          id: 'eni8-3-order',
          type: 'ORDERING',
          instruction: 'Put the signposts in the order of a presentation.',
          items: [
            { id: 'p1', text: 'Today I’d like to talk about our new product.' },
            { id: 'p2', text: 'I’ve divided my presentation into three parts.' },
            { id: 'p3', text: 'Let’s start with the figures.' },
            { id: 'p4', text: 'That brings me to my second point.' },
            { id: 'p5', text: 'To sum up, …' },
            { id: 'p6', text: 'I’m happy to take any questions.' },
          ],
          solution: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6'],
        },
        {
          id: 'eni8-3-match',
          type: 'MATCHING',
          instruction: 'Match the purpose with the phrase.',
          left: [
            { id: 'l1', text: 'showing a chart' },
            { id: 'l2', text: 'changing topic' },
            { id: 'l3', text: 'ending' },
          ],
          right: [
            { id: 'r1', text: 'If you look at the graph, you’ll notice …' },
            { id: 'r2', text: 'Let’s move on to the budget.' },
            { id: 'r3', text: 'Thank you for your attention.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
          ],
        },
        {
          id: 'eni8-3-choice',
          type: 'CHOICE',
          instruction: 'Choose the most natural sentence.',
          question: 'You want to introduce the second part of your talk.',
          options: [
            { id: 'o1', text: 'Now comes point two.' },
            { id: 'o2', text: 'That brings me to my second point.' },
            { id: 'o3', text: 'Second point is now coming.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: '“That brings me to …” is a standard, natural transition in presentations.',
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – Passiv der Berichtssprache.
  {
    order: 4,
    title: 'Sales are expected to rise',
    subtitle: 'Das Passiv mit Berichtsverben',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'eni8-4-h1', type: 'HEADING', level: 1, text: 'Sales are expected to rise' },
        {
          id: 'eni8-4-text',
          type: 'TEXT',
          text: 'Economic outlook\n\nIt is estimated that the UK travel market will grow by 4% next year. Demand for sustainable holidays is expected to rise even faster, and train travel is said to be the main winner. However, it is feared that higher energy prices could reduce people’s budgets. Several airlines are reported to be planning cuts to short-haul routes, which is thought to benefit rail companies.',
        },
        {
          id: 'eni8-4-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'It is said that … / X is said to …',
          text: 'Reports often present information without saying exactly who believes it. Two passive structures do this with verbs like say, think, believe, expect, estimate, report. (1) It + passive + that-clause: “It is expected that sales will rise.” (2) Subject + passive + to-infinitive: “Sales are expected to rise.” For something happening now, use “to be + -ing”; for the past, “to have + past participle”.',
          table: {
            headers: ['structure', 'example'],
            rows: [
              ['It is + p.p. + that …', 'It is believed that the CEO will resign.'],
              ['subject + is + p.p. + to …', 'The CEO is believed to be leaving.'],
              ['… + to have + p.p. (past)', 'The company is said to have lost £2 million.'],
            ],
          },
        },
        {
          id: 'eni8-4-cloze',
          type: 'CLOZE',
          instruction: 'Rewrite with the second structure. Complete.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'It is expected that demand will rise. → Demand is expected ' },
            { kind: 'GAP', gapId: 'r1', solution: ['to rise'], width: 9 },
            { kind: 'TEXT', text: '.\nIt is said that train travel is the winner. → Train travel is said ' },
            { kind: 'GAP', gapId: 'r2', solution: ['to be'], width: 7 },
            { kind: 'TEXT', text: ' the winner.\nIt is reported that the firm lost £2m. → The firm is reported ' },
            { kind: 'GAP', gapId: 'r3', solution: ['to have lost'], width: 13 },
            { kind: 'TEXT', text: ' £2m.' },
          ],
        },
        {
          id: 'eni8-4-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'Which sentence is correct?',
          options: [
            { id: 'o1', text: 'The minister is thought that he will resign.' },
            { id: 'o2', text: 'It thinks that the minister will resign soon.' },
            { id: 'o3', text: 'It is thought that the minister will resign soon.' },
          ],
          multiple: false,
          solution: ['o3'],
          explanation: 'The structure is passive: “It is thought that + clause”. “The minister is thought that he …” mixes the two structures, and “It thinks” is active.',
        },
        {
          id: 'eni8-4-match',
          type: 'MATCHING',
          instruction: 'Match the report with its meaning.',
          left: [
            { id: 'l1', text: 'Airlines are reported to be planning cuts.' },
            { id: 'l2', text: 'The company is said to have lost money.' },
            { id: 'l3', text: 'Prices are expected to rise.' },
          ],
          right: [
            { id: 'r1', text: 'People say they are planning cuts now.' },
            { id: 'r2', text: 'People say it lost money in the past.' },
            { id: 'r3', text: 'People think prices will go up.' },
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
  // Seite 5 – der kurze Bericht.
  {
    order: 5,
    title: 'Writing a short report',
    subtitle: 'Einen Bericht verfassen',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'eni8-5-h1', type: 'HEADING', level: 1, text: 'Writing a short report' },
        {
          id: 'eni8-5-info',
          type: 'INFO',
          variant: 'TIP',
          title: 'Report structure',
          text: 'Unlike an essay, a report is written for a reader who needs to make a decision. It has a title and headings (Introduction, Findings, Recommendations), uses a neutral, impersonal style and presents facts before opinions. Recommendations often use “should”, “it is recommended that” or “we suggest”.',
        },
        {
          id: 'eni8-5-text',
          type: 'TEXT',
          text: 'Report: Train holidays – results and recommendations\n\nIntroduction\nThe aim of this report is to evaluate the performance of our train holiday range and to make recommendations for next year.\n\nFindings\nBookings for train holidays rose by 94% compared with the previous year. Customer satisfaction reached 4.7 out of 5, the highest score across all products. However, the average profit per booking was 15% lower than for flight-based trips, mainly because of higher ticket costs.\n\nRecommendations\nIt is recommended that the range should be expanded to include Italy and Spain. In addition, the new contract with the rail company should reduce costs by around 10%.',
        },
        {
          id: 'eni8-5-choice',
          type: 'CHOICE',
          instruction: 'Answer the question about the report.',
          question: 'What is the main weakness of train holidays according to the report?',
          options: [
            { id: 'o1', text: 'Customers are not satisfied.' },
            { id: 'o2', text: 'The profit per booking is lower.' },
            { id: 'o3', text: 'Bookings have fallen.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'The findings say the profit per booking was 15% lower because of higher ticket costs.',
        },
        {
          id: 'eni8-5-match',
          type: 'MATCHING',
          instruction: 'Which section does each sentence belong to?',
          left: [
            { id: 'l1', text: 'The aim of this report is to …' },
            { id: 'l2', text: 'Bookings rose by 94%.' },
            { id: 'l3', text: 'It is recommended that …' },
          ],
          right: [
            { id: 'r1', text: 'Introduction' },
            { id: 'r2', text: 'Findings' },
            { id: 'r3', text: 'Recommendations' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
          ],
        },
        {
          id: 'eni8-5-cloze',
          type: 'CLOZE',
          instruction: 'Complete the report sentences.',
          wordBank: ['aim', 'rose', 'compared', 'recommended', 'expected'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'The ' },
            { kind: 'GAP', gapId: 'w1', solution: ['aim'], width: 5 },
            { kind: 'TEXT', text: ' of this report is to evaluate our sales. Revenue ' },
            { kind: 'GAP', gapId: 'w2', solution: ['rose'], width: 6 },
            { kind: 'TEXT', text: ' by 12% ' },
            { kind: 'GAP', gapId: 'w3', solution: ['compared'], width: 9 },
            { kind: 'TEXT', text: ' with last year. Costs are ' },
            { kind: 'GAP', gapId: 'w4', solution: ['expected'], width: 9 },
            { kind: 'TEXT', text: ' to fall. It is ' },
            { kind: 'GAP', gapId: 'w5', solution: ['recommended'], width: 12 },
            { kind: 'TEXT', text: ' that we expand the range.' },
          ],
        },
        {
          id: 'eni8-5-writing',
          type: 'WRITING',
          instruction: 'Write a short report.',
          prompt:
            'Your manager has asked you to report on a product, service or event you know (for example the canteen, a training course, a new app). Write 200–250 words with a title and the headings Introduction, Findings and Recommendations. Describe at least two trends with figures and use one “is expected / is said to” structure.',
          minWords: 180,
          maxWords: 290,
          aiFeedback: true,
          sampleAnswer:
            'Report: The staff canteen\n\nIntroduction\nThe aim of this report is to evaluate the staff canteen after its first year under the new caterer and to suggest improvements.\n\nFindings\nThe number of employees eating in the canteen rose steadily from 120 per day in January to 185 in December. The vegetarian dishes were particularly popular: their share of all meals grew from 25% to 40%. However, there was a sharp drop in visitors on Fridays, when many staff work from home. Satisfaction with the quality of the food increased by 20 percentage points, but complaints about waiting times at lunchtime doubled. Food prices are expected to rise by around 5% next year because of higher energy costs.\n\nRecommendations\nIt is recommended that a second till should be opened between 12:00 and 13:30 to reduce waiting times. In addition, the canteen should consider offering a smaller menu on Fridays in order to avoid food waste. Finally, we suggest carrying out a short staff survey every six months so that the menu can be adapted to changing demand.',
        },
      ],
    },
  },
];
