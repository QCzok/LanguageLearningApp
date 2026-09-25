import type { UnitSeed } from './chapter-beginner-1';

/**
 * Englische Grammatik, Kapitel 8: „Adjectives and comparison“
 *
 * Drei Seiten: Komparativ, Superlativ, dann Adjektiv gegen Adverb samt
 * „as … as“. Englische Adjektive werden nicht gebeugt – das ist die leichte
 * Seite. Die schwierige ist das Adverb: Wo das Deutsche „Sie singt schön“
 * sagt, braucht das Englische „beautifully“.
 *
 * Erklärungen tragen eine deutsche Übersetzung, Tabellen bleiben englisch.
 */
const v = 1;

export const ENGLISH_GRAMMAR_8_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Komparativ.
  {
    order: 1,
    title: 'older, more interesting',
    subtitle: 'Der Komparativ',
    estimatedMinutes: 20,
    content: {
      version: v,
      blocks: [
        { id: 'eng8-1-h1', type: 'HEADING', level: 1, text: 'older, more interesting' },
        {
          id: 'eng8-1-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'The number of syllables decides',
          text: 'One syllable: + er (old → older). Two syllables ending in -y: -ier (happy → happier). Other two-syllable and longer adjectives: more (modern → more modern, interesting → more interesting). Then “than”. For a big difference, add “much” or “a lot”: “much older”.',
          translations: {
            de: {
              title: 'Die Silbenzahl entscheidet',
              text: 'Eine Silbe: + er (old → older). Zwei Silben auf -y: -ier (happy → happier). Andere zweisilbige und längere Adjektive: more (modern → more modern, interesting → more interesting). Danach „than“. Für einen großen Unterschied „much“ oder „a lot“: „much older“.',
            },
          },
          table: {
            headers: ['syllables', 'adjective', 'comparative'],
            rows: [
              ['1', 'old, long, big', 'older, longer, bigger'],
              ['2 with -y', 'happy, heavy', 'happier, heavier'],
              ['2+', 'modern, expensive', 'more modern, more expensive'],
              ['irregular', 'good, bad, far', 'better, worse, further/farther'],
            ],
          },
        },
        {
          id: 'eng8-1-cloze',
          type: 'CLOZE',
          instruction: 'Write the comparative.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'This bag is ' },
            { kind: 'GAP', gapId: 'c1', solution: ['heavier'], hint: 'heavy', width: 9 },
            { kind: 'TEXT', text: ' than that one. The book was ' },
            { kind: 'GAP', gapId: 'c2', solution: ['more interesting'], hint: 'interesting', width: 17 },
            { kind: 'TEXT', text: ' than the film. My cold is ' },
            { kind: 'GAP', gapId: 'c3', solution: ['worse'], hint: 'bad', width: 7 },
            { kind: 'TEXT', text: ' today. Summers are ' },
            { kind: 'GAP', gapId: 'c4', solution: ['hotter'], hint: 'hot', width: 8 },
            { kind: 'TEXT', text: ' than they used to be.' },
          ],
        },
        {
          id: 'eng8-1-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'Which sentence is correct?',
          options: [
            { id: 'o1', text: 'She is more old than me.' },
            { id: 'o2', text: 'She is much older than me.' },
            { id: 'o3', text: 'She is very older than me.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: '“old” is short: “older”. To make the difference bigger, use “much”, not “very”.',
          explanationTranslations: {
            de: '„old“ ist kurz: „older“. Zur Verstärkung steht „much“, nicht „very“.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – Superlativ.
  {
    order: 2,
    title: 'the oldest, the most interesting',
    subtitle: 'Der Superlativ',
    estimatedMinutes: 18,
    content: {
      version: v,
      blocks: [
        { id: 'eng8-2-h1', type: 'HEADING', level: 1, text: 'the oldest, the most interesting' },
        {
          id: 'eng8-2-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'the + -est / the most',
          text: 'The superlative uses the same rules: -est or “most”, and always “the”. After it, use “in” for places and groups (“the best player in the team”) and “of” for time periods (“the best day of my life”). The present perfect with “ever” often follows: “the best film I’ve ever seen”.',
          translations: {
            de: {
              title: 'the + -est / the most',
              text: 'Der Superlativ folgt denselben Regeln: -est oder „most“, und immer „the“. Danach steht „in“ bei Orten und Gruppen („the best player in the team“) und „of“ bei Zeiträumen („the best day of my life“). Häufig folgt das Present Perfect mit „ever“: „the best film I’ve ever seen“.',
            },
          },
          table: {
            headers: ['adjective', 'superlative'],
            rows: [
              ['long', 'the longest'],
              ['happy', 'the happiest'],
              ['important', 'the most important'],
              ['good / bad', 'the best / the worst'],
              ['far', 'the furthest'],
            ],
          },
        },
        {
          id: 'eng8-2-cloze',
          type: 'CLOZE',
          instruction: 'Write the superlative.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'The Nile is the ' },
            { kind: 'GAP', gapId: 's1', solution: ['longest'], hint: 'long', width: 9 },
            { kind: 'TEXT', text: ' river in Africa. It was the ' },
            { kind: 'GAP', gapId: 's2', solution: ['happiest'], hint: 'happy', width: 10 },
            { kind: 'TEXT', text: ' day of my life. That’s the ' },
            { kind: 'GAP', gapId: 's3', solution: ['most important'], hint: 'important', width: 15 },
            { kind: 'TEXT', text: ' question.' },
          ],
        },
        {
          id: 'eng8-2-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct preposition.',
          question: 'It’s the tallest building ___ the world.',
          options: [
            { id: 'o1', text: 'of' },
            { id: 'o2', text: 'in' },
            { id: 'o3', text: 'than' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'Places go with “in” after a superlative: “in the world”.',
          explanationTranslations: {
            de: 'Orte stehen nach einem Superlativ mit „in“: „in the world“.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – Adjektiv oder Adverb, as … as.
  {
    order: 3,
    title: 'quick or quickly?',
    subtitle: 'Adjektiv und Adverb, as … as',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'eng8-3-h1', type: 'HEADING', level: 1, text: 'quick or quickly?' },
        {
          id: 'eng8-3-info',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Adjective or adverb?',
          text: 'German uses the same word for both: “Er ist langsam.” – “Er fährt langsam.” English doesn’t. An adjective describes a noun: “a slow driver”. An adverb describes a verb – how someone does something – and usually ends in -ly: “He drives slowly.” Irregular: good → well, fast → fast, hard → hard.',
          translations: {
            de: {
              title: 'Adjektiv oder Adverb?',
              text: 'Das Deutsche verwendet dasselbe Wort: „Er ist langsam.“ – „Er fährt langsam.“ Das Englische nicht. Ein Adjektiv beschreibt ein Nomen: „a slow driver“. Ein Adverb beschreibt ein Verb – wie jemand etwas tut – und endet meist auf -ly: „He drives slowly.“ Unregelmäßig: good → well, fast → fast, hard → hard.',
            },
          },
          table: {
            headers: ['adjective', 'adverb'],
            rows: [
              ['slow', 'slowly'],
              ['careful', 'carefully'],
              ['easy', 'easily'],
              ['good', 'well'],
              ['fast / hard', 'fast / hard'],
            ],
          },
        },
        {
          id: 'eng8-3-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'How do you say “Sie spricht sehr gut Englisch”?',
          options: [
            { id: 'o1', text: 'She speaks English very good.' },
            { id: 'o2', text: 'She speaks English very well.' },
            { id: 'o3', text: 'She speaks very good English well.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: '“speaks” is a verb, so it needs the adverb “well”. (“She speaks very good English.” is also possible – there “good” describes the noun “English”.)',
          explanationTranslations: {
            de: '„speaks“ ist ein Verb und braucht das Adverb „well“. („She speaks very good English.“ geht auch – dort beschreibt „good“ das Nomen „English“.)',
          },
        },
        {
          id: 'eng8-3-cloze',
          type: 'CLOZE',
          instruction: 'Adjective or adverb?',
          wordBank: ['careful', 'carefully', 'quiet', 'quietly', 'good', 'well'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Please drive ' },
            { kind: 'GAP', gapId: 'a1', solution: ['carefully'], width: 10 },
            { kind: 'TEXT', text: '. She’s a very ' },
            { kind: 'GAP', gapId: 'a2', solution: ['careful'], width: 10 },
            { kind: 'TEXT', text: ' driver. The children played ' },
            { kind: 'GAP', gapId: 'a3', solution: ['quietly'], width: 9 },
            { kind: 'TEXT', text: '. He cooks really ' },
            { kind: 'GAP', gapId: 'a4', solution: ['well'], width: 6 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'eng8-3-info-asas',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'as … as',
          text: '“as + adjective/adverb + as” means “the same”: “Tom is as tall as his father.”, “I can’t run as fast as you.” “not as … as” means “less”: “The film wasn’t as good as the book.”',
          translations: {
            de: {
              title: 'as … as',
              text: '„as + Adjektiv/Adverb + as“ bedeutet „genauso … wie“: „Tom is as tall as his father.“, „I can’t run as fast as you.“ „not as … as“ bedeutet „nicht so … wie“: „The film wasn’t as good as the book.“',
            },
          },
        },
        {
          id: 'eng8-3-match',
          type: 'MATCHING',
          instruction: 'Same meaning?',
          left: [
            { id: 'l1', text: 'The film wasn’t as good as the book.' },
            { id: 'l2', text: 'Tom is as tall as his father.' },
            { id: 'l3', text: 'Buses aren’t as fast as trains.' },
          ],
          right: [
            { id: 'r1', text: 'The book was better than the film.' },
            { id: 'r2', text: 'Tom and his father are the same height.' },
            { id: 'r3', text: 'Trains are faster than buses.' },
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
];
