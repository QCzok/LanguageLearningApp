import type { UnitSeed } from './chapter-beginner-1';

/**
 * Englische Grammatik, Kapitel 1: „Articles and nouns“
 *
 * Drei Seiten, gebaut wie `chapter-grammar-1.ts`: eine Regel, ihre Tabelle,
 * und unmittelbar danach die Aufgabe, die genau diese Regel abfragt.
 *
 * Die Botschaft ist die Umkehrung des deutschen Kapitels: Das Geschlecht, an
 * dem man im Deutschen jahrelang lernt, gibt es hier nicht. Die Arbeit steckt
 * in a/an nach dem Laut, im fehlenden Artikel bei allgemeinen Aussagen und in
 * den unregelmäßigen Pluralformen.
 *
 * Erklärungen tragen eine deutsche Übersetzung, Tabellen bleiben englisch.
 */
const v = 1;

export const ENGLISH_GRAMMAR_1_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – a und an.
  {
    order: 1,
    title: 'a and an',
    subtitle: 'Der unbestimmte Artikel',
    estimatedMinutes: 18,
    content: {
      version: v,
      blocks: [
        { id: 'eng1-1-h1', type: 'HEADING', level: 1, text: 'a and an' },
        {
          id: 'eng1-1-intro',
          type: 'TEXT',
          text: 'Good news first: English nouns have no gender. There is no “der, die, das” and no “ein, eine” – there is only “a”, and before a vowel sound “an”. The article never changes after a preposition either.',
          translations: {
            de: 'Zuerst die gute Nachricht: Englische Nomen haben kein Geschlecht. Es gibt kein „der, die, das“ und kein „ein, eine“ – es gibt nur „a“, und vor einem Vokallaut „an“. Auch nach einer Präposition ändert sich der Artikel nie.',
          },
        },
        {
          id: 'eng1-1-info-sound',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'The sound decides, not the letter',
          text: '“an” comes before a vowel sound: “an apple”, “an egg”. What matters is how you say the next word. “university” starts with the sound “ju”, so it is “a university”. In “hour”, the h is silent, so it is “an hour”.',
          translations: {
            de: {
              title: 'Der Laut entscheidet, nicht der Buchstabe',
              text: '„an“ steht vor einem Vokallaut: „an apple“, „an egg“. Entscheidend ist, wie man das nächste Wort ausspricht. „university“ beginnt mit dem Laut „ju“, also „a university“. In „hour“ ist das h stumm, also „an hour“.',
            },
          },
          table: {
            headers: ['a + consonant sound', 'an + vowel sound'],
            rows: [
              ['a book', 'an apple'],
              ['a house', 'an hour'],
              ['a university', 'an umbrella'],
              ['a European city', 'an interesting city'],
            ],
          },
        },
        {
          id: 'eng1-1-choice',
          type: 'CHOICE',
          instruction: 'Choose a or an.',
          question: 'It takes ___ hour by train.',
          options: [
            { id: 'o1', text: 'a' },
            { id: 'o2', text: 'an' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'The h in “hour” is silent. The word begins with a vowel sound, so it is “an hour”.',
          explanationTranslations: {
            de: 'Das h in „hour“ ist stumm. Das Wort beginnt mit einem Vokallaut, also „an hour“.',
          },
        },
        {
          id: 'eng1-1-cloze',
          type: 'CLOZE',
          instruction: 'Complete with a or an.',
          wordBank: ['a', 'an'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'She’s ' },
            { kind: 'GAP', gapId: 'a1', solution: ['an'], width: 4 },
            { kind: 'TEXT', text: ' engineer. He’s got ' },
            { kind: 'GAP', gapId: 'a2', solution: ['a'], width: 4 },
            { kind: 'TEXT', text: ' big house. I’d like ' },
            { kind: 'GAP', gapId: 'a3', solution: ['an'], width: 4 },
            { kind: 'TEXT', text: ' orange juice. It’s ' },
            { kind: 'GAP', gapId: 'a4', solution: ['a'], width: 4 },
            { kind: 'TEXT', text: ' university town.' },
          ],
        },
        {
          id: 'eng1-1-info-jobs',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'a with jobs',
          text: 'German says “Ich bin Lehrerin” – without an article. English needs “a” or “an” with jobs: “I’m a teacher.”, “She’s an architect.”',
          translations: {
            de: {
              title: 'a bei Berufen',
              text: 'Das Deutsche sagt „Ich bin Lehrerin“ – ohne Artikel. Das Englische braucht bei Berufen „a“ oder „an“: „I’m a teacher.“, „She’s an architect.“',
            },
          },
        },
        {
          id: 'eng1-1-choice-jobs',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'How do you say “Mein Bruder ist Arzt”?',
          options: [
            { id: 'o1', text: 'My brother is doctor.' },
            { id: 'o2', text: 'My brother is a doctor.' },
            { id: 'o3', text: 'My brother is the doctor.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'Jobs need “a” in English: “a doctor”. “the doctor” would mean one specific doctor you already know.',
          explanationTranslations: {
            de: 'Berufe brauchen im Englischen „a“: „a doctor“. „the doctor“ wäre ein bestimmter, bereits bekannter Arzt.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – the, a oder gar kein Artikel.
  {
    order: 2,
    title: 'the, a or nothing?',
    subtitle: 'Bestimmt, unbestimmt, ohne Artikel',
    estimatedMinutes: 20,
    content: {
      version: v,
      blocks: [
        { id: 'eng1-2-h1', type: 'HEADING', level: 1, text: 'the, a or nothing?' },
        {
          id: 'eng1-2-info-the',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'a for new things, the for known things',
          text: '“a” introduces something new: “I’ve got a cat.” When you talk about it again, both people know which one – so it is “the”: “The cat is black.” You also use “the” when there is only one: “the sun”, “the station” (in our town).',
          translations: {
            de: {
              title: 'a für Neues, the für Bekanntes',
              text: '„a“ führt etwas Neues ein: „I’ve got a cat.“ Spricht man wieder davon, wissen beide, welche gemeint ist – also „the“: „The cat is black.“ „the“ steht auch, wenn es nur eines gibt: „the sun“, „the station“ (in unserer Stadt).',
            },
          },
        },
        {
          id: 'eng1-2-cloze-the',
          type: 'CLOZE',
          instruction: 'Complete with a or the.',
          wordBank: ['a', 'the'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'We’ve got ' },
            { kind: 'GAP', gapId: 't1', solution: ['a'], width: 5 },
            { kind: 'TEXT', text: ' dog and ' },
            { kind: 'GAP', gapId: 't2', solution: ['a'], width: 5 },
            { kind: 'TEXT', text: ' cat. ' },
            { kind: 'GAP', gapId: 't3', solution: ['The'], width: 5 },
            { kind: 'TEXT', text: ' dog is very old, but ' },
            { kind: 'GAP', gapId: 't4', solution: ['the'], width: 5 },
            { kind: 'TEXT', text: ' cat is only two.' },
          ],
        },
        {
          id: 'eng1-2-info-zero',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'No article for things in general',
          text: 'Here English and German are different. When you talk about something in general, English uses no article: “I like music.” (not “the music”), “Life is short.”, “Dogs are friendly.” Also no article with meals, languages, most countries and many places: “have breakfast”, “speak English”, “go to work”, “at home”.',
          translations: {
            de: {
              title: 'Kein Artikel für Allgemeines',
              text: 'Hier unterscheiden sich Englisch und Deutsch. Wer allgemein über etwas spricht, verwendet im Englischen keinen Artikel: „I like music.“ (nicht „the music“), „Life is short.“, „Dogs are friendly.“ Ebenfalls ohne Artikel: Mahlzeiten, Sprachen, die meisten Länder und viele Orte: „have breakfast“, „speak English“, „go to work“, „at home“.',
            },
          },
          table: {
            headers: ['German', 'English'],
            rows: [
              ['Ich mag die Natur.', 'I like nature.'],
              ['Das Leben ist schön.', 'Life is beautiful.'],
              ['nach dem Frühstück', 'after breakfast'],
              ['in der Schweiz', 'in Switzerland'],
            ],
          },
        },
        {
          id: 'eng1-2-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'Which sentence is correct?',
          options: [
            { id: 'o1', text: 'I love the music.' },
            { id: 'o2', text: 'I love music.' },
            { id: 'o3', text: 'I love a music.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'Music in general has no article in English. “the music” means a specific piece of music, for example at a party.',
          explanationTranslations: {
            de: 'Musik im Allgemeinen steht im Englischen ohne Artikel. „the music“ meint eine bestimmte Musik, etwa auf einer Party.',
          },
        },
        {
          id: 'eng1-2-match',
          type: 'MATCHING',
          instruction: 'Match the German with the English.',
          left: [
            { id: 'l1', text: 'zur Arbeit gehen' },
            { id: 'l2', text: 'zu Hause' },
            { id: 'l3', text: 'zu Mittag essen' },
            { id: 'l4', text: 'Deutsch sprechen' },
          ],
          right: [
            { id: 'r1', text: 'go to work' },
            { id: 'r2', text: 'at home' },
            { id: 'r3', text: 'have lunch' },
            { id: 'r4', text: 'speak German' },
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
  // Seite 3 – der Plural.
  {
    order: 3,
    title: 'Plurals',
    subtitle: 'Regelmäßig und unregelmäßig',
    estimatedMinutes: 20,
    content: {
      version: v,
      blocks: [
        { id: 'eng1-3-h1', type: 'HEADING', level: 1, text: 'Plurals' },
        {
          id: 'eng1-3-info-regular',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Regular plurals',
          text: 'English plurals are much easier than German ones. Almost every noun just adds -s. After a hissing sound (-s, -ss, -sh, -ch, -x) you add -es, so you can say it. Consonant + y becomes -ies; but vowel + y just adds -s. Many nouns in -f or -fe change to -ves.',
          translations: {
            de: {
              title: 'Regelmäßiger Plural',
              text: 'Der englische Plural ist viel einfacher als der deutsche. Fast jedes Nomen bekommt einfach -s. Nach einem Zischlaut (-s, -ss, -sh, -ch, -x) kommt -es dazu, damit man es aussprechen kann. Aus Konsonant + y wird -ies; nach Vokal + y kommt nur -s dazu. Viele Nomen auf -f oder -fe werden zu -ves.',
            },
          },
          table: {
            headers: ['rule', 'singular', 'plural'],
            rows: [
              ['+ s', 'book', 'books'],
              ['-s, -sh, -ch, -x + es', 'bus, dish, watch, box', 'buses, dishes, watches, boxes'],
              ['consonant + y → -ies', 'city, baby', 'cities, babies'],
              ['vowel + y + s', 'day, boy', 'days, boys'],
              ['-f / -fe → -ves', 'knife, wife', 'knives, wives'],
            ],
          },
        },
        {
          id: 'eng1-3-cloze',
          type: 'CLOZE',
          instruction: 'Write the plural.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'two ' },
            { kind: 'GAP', gapId: 'p1', solution: ['buses'], hint: 'bus', width: 8 },
            { kind: 'TEXT', text: ', three ' },
            { kind: 'GAP', gapId: 'p2', solution: ['cities'], hint: 'city', width: 8 },
            { kind: 'TEXT', text: ', four ' },
            { kind: 'GAP', gapId: 'p3', solution: ['days'], hint: 'day', width: 7 },
            { kind: 'TEXT', text: ', five ' },
            { kind: 'GAP', gapId: 'p4', solution: ['knives'], hint: 'knife', width: 8 },
            { kind: 'TEXT', text: ', six ' },
            { kind: 'GAP', gapId: 'p5', solution: ['watches'], hint: 'watch', width: 9 },
          ],
        },
        {
          id: 'eng1-3-info-irregular',
          type: 'INFO',
          variant: 'TIP',
          title: 'Irregular plurals',
          text: 'A small group of very common nouns are irregular. You have to learn them one by one – but there are only a few. Some nouns are the same in singular and plural: one sheep, two sheep; one fish, two fish.',
          translations: {
            de: {
              title: 'Unregelmäßiger Plural',
              text: 'Eine kleine Gruppe sehr häufiger Nomen ist unregelmäßig. Man muss sie einzeln lernen – aber es sind nur wenige. Manche Nomen sind im Singular und Plural gleich: one sheep, two sheep; one fish, two fish.',
            },
          },
          table: {
            headers: ['singular', 'plural'],
            rows: [
              ['man', 'men'],
              ['woman', 'women'],
              ['child', 'children'],
              ['person', 'people'],
              ['foot', 'feet'],
              ['tooth', 'teeth'],
              ['mouse', 'mice'],
            ],
          },
        },
        {
          id: 'eng1-3-match',
          type: 'MATCHING',
          instruction: 'Match the singular with the plural.',
          left: [
            { id: 'l1', text: 'woman' },
            { id: 'l2', text: 'foot' },
            { id: 'l3', text: 'child' },
            { id: 'l4', text: 'person' },
          ],
          right: [
            { id: 'r1', text: 'women' },
            { id: 'r2', text: 'feet' },
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
        {
          id: 'eng1-3-choice',
          type: 'CHOICE',
          instruction: 'Mark all the correct plurals.',
          question: 'Which plurals are correct?',
          options: [
            { id: 'r1', text: 'babies' },
            { id: 'r2', text: 'boxs' },
            { id: 'r3', text: 'men' },
            { id: 'r4', text: 'childs' },
          ],
          multiple: true,
          solution: ['r1', 'r3'],
          explanation: '“box” ends in -x, so it is “boxes”. “child” is irregular: “children”.',
          explanationTranslations: {
            de: '„box“ endet auf -x, also „boxes“. „child“ ist unregelmäßig: „children“.',
          },
        },
      ],
    },
  },
];
