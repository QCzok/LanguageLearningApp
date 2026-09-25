import type { UnitSeed } from './chapter-beginner-1';

/**
 * Englische Grammatik, Kapitel 4: „Pronouns and possessives“
 *
 * Vier Seiten: Subjekt- und Objektpronomen, Possessivbegleiter und
 * -pronomen (my/mine), das Genitiv-s samt „whose“, zuletzt this/that/
 * these/those mit one/ones. Das Englische hat hier weniger Formen als das
 * Deutsche – kein Dativ, kein Akkusativ im Nomen –, dafür eine Falle, die
 * Deutschsprachige immer wieder erwischt: his/her richtet sich nach dem
 * Besitzer, nicht nach der Sache.
 *
 * Erklärungen tragen eine deutsche Übersetzung, Tabellen bleiben englisch.
 */
const v = 1;

export const ENGLISH_GRAMMAR_4_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Subjekt- und Objektpronomen.
  {
    order: 1,
    title: 'I and me',
    subtitle: 'Subjekt- und Objektpronomen',
    estimatedMinutes: 18,
    content: {
      version: v,
      blocks: [
        { id: 'eng4-1-h1', type: 'HEADING', level: 1, text: 'I and me' },
        {
          id: 'eng4-1-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Subject and object pronouns',
          text: 'Subject pronouns do the action and come before the verb: “She calls him.” Object pronouns come after the verb or after a preposition: “He calls her.”, “with me”, “for them”. English has only one object form – German “mir” and “mich” are both “me”.',
          translations: {
            de: {
              title: 'Subjekt- und Objektpronomen',
              text: 'Subjektpronomen handeln und stehen vor dem Verb: „She calls him.“ Objektpronomen stehen nach dem Verb oder nach einer Präposition: „He calls her.“, „with me“, „for them“. Das Englische hat nur eine Objektform – deutsches „mir“ und „mich“ sind beide „me“.',
            },
          },
          table: {
            headers: ['subject', 'object', 'example'],
            rows: [
              ['I', 'me', 'Can you help me?'],
              ['you', 'you', 'I love you.'],
              ['he', 'him', 'Call him later.'],
              ['she', 'her', 'I know her.'],
              ['it', 'it', 'I like it.'],
              ['we', 'us', 'Come with us.'],
              ['they', 'them', 'Ask them.'],
            ],
          },
        },
        {
          id: 'eng4-1-cloze',
          type: 'CLOZE',
          instruction: 'Complete with an object pronoun.',
          wordBank: ['me', 'him', 'her', 'us', 'them'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Where’s Tom? I want to talk to ' },
            { kind: 'GAP', gapId: 'o1', solution: ['him'], width: 5 },
            { kind: 'TEXT', text: '. Anna’s nice – I like ' },
            { kind: 'GAP', gapId: 'o2', solution: ['her'], width: 5 },
            { kind: 'TEXT', text: '. These shoes are great, but I can’t buy ' },
            { kind: 'GAP', gapId: 'o3', solution: ['them'], width: 6 },
            { kind: 'TEXT', text: '. We’re going to the park – come with ' },
            { kind: 'GAP', gapId: 'o4', solution: ['us'], width: 4 },
            { kind: 'TEXT', text: '! Can you give ' },
            { kind: 'GAP', gapId: 'o5', solution: ['me'], width: 4 },
            { kind: 'TEXT', text: ' the salt, please?' },
          ],
        },
        {
          id: 'eng4-1-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'Which sentence is correct?',
          options: [
            { id: 'o1', text: 'Can you help I?' },
            { id: 'o2', text: 'Her is my friend.' },
            { id: 'o3', text: 'She visits us every week.' },
          ],
          multiple: false,
          solution: ['o3'],
          explanation: 'After a verb you need the object form (“help me”), before the verb the subject form (“She is my friend.”).',
          explanationTranslations: {
            de: 'Nach dem Verb braucht man die Objektform („help me“), vor dem Verb die Subjektform („She is my friend.“).',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – my und mine.
  {
    order: 2,
    title: 'my and mine',
    subtitle: 'Possessivbegleiter und -pronomen',
    estimatedMinutes: 20,
    content: {
      version: v,
      blocks: [
        { id: 'eng4-2-h1', type: 'HEADING', level: 1, text: 'my and mine' },
        {
          id: 'eng4-2-info-owner',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'his or her? Look at the owner',
          text: 'German “sein/ihr” depends on the owner, too – but German then changes the ending for the thing: “ihr Bruder”, “ihre Schwester”. English never changes: “her brother”, “her sister”, “her parents”. Only the owner counts: a man → his, a woman → her, a thing or animal → its, many → their.',
          translations: {
            de: {
              title: 'his oder her? Auf den Besitzer schauen',
              text: 'Auch im Deutschen hängt „sein/ihr“ vom Besitzer ab – danach ändert das Deutsche aber die Endung je nach Sache: „ihr Bruder“, „ihre Schwester“. Das Englische ändert nie etwas: „her brother“, „her sister“, „her parents“. Es zählt nur der Besitzer: ein Mann → his, eine Frau → her, eine Sache oder ein Tier → its, mehrere → their.',
            },
          },
        },
        {
          id: 'eng4-2-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct word.',
          question: 'Tom loves ___ mother.',
          options: [
            { id: 'o1', text: 'her' },
            { id: 'o2', text: 'his' },
            { id: 'o3', text: 'its' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'The owner is Tom, a man – so “his mother”, even though the mother is a woman.',
          explanationTranslations: {
            de: 'Der Besitzer ist Tom, ein Mann – also „his mother“, auch wenn die Mutter eine Frau ist.',
          },
        },
        {
          id: 'eng4-2-info-mine',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'my book – the book is mine',
          text: 'Before a noun you use my, your, his … When there is no noun after it, you use mine, yours, his, hers, ours, theirs: “Is this your bag?” – “Yes, it’s mine.” These forms never have an apostrophe: “yours”, not “your’s”.',
          translations: {
            de: {
              title: 'my book – the book is mine',
              text: 'Vor einem Nomen steht my, your, his … Folgt kein Nomen, verwendet man mine, yours, his, hers, ours, theirs: „Is this your bag?“ – „Yes, it’s mine.“ Diese Formen haben nie einen Apostroph: „yours“, nicht „your’s“.',
            },
          },
          table: {
            headers: ['+ noun', 'without noun'],
            rows: [
              ['my', 'mine'],
              ['your', 'yours'],
              ['his', 'his'],
              ['her', 'hers'],
              ['our', 'ours'],
              ['their', 'theirs'],
            ],
          },
        },
        {
          id: 'eng4-2-cloze',
          type: 'CLOZE',
          instruction: 'Complete with mine, yours, hers, ours or theirs.',
          wordBank: ['mine', 'yours', 'hers', 'ours', 'theirs'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'This isn’t my phone. ' },
            { kind: 'GAP', gapId: 'p1', solution: ['Mine'], width: 7 },
            { kind: 'TEXT', text: ' is black. Is it ' },
            { kind: 'GAP', gapId: 'p2', solution: ['yours'], width: 7 },
            { kind: 'TEXT', text: '? – No, ask Anna. Maybe it’s ' },
            { kind: 'GAP', gapId: 'p3', solution: ['hers'], width: 6 },
            { kind: 'TEXT', text: '. The red car is our neighbours’ – it’s ' },
            { kind: 'GAP', gapId: 'p4', solution: ['theirs'], width: 7 },
            { kind: 'TEXT', text: '. The blue one is ' },
            { kind: 'GAP', gapId: 'p5', solution: ['ours'], width: 6 },
            { kind: 'TEXT', text: '.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – Genitiv-s und whose.
  {
    order: 3,
    title: 'Tom’s car',
    subtitle: 'Das Genitiv-s und whose',
    estimatedMinutes: 18,
    content: {
      version: v,
      blocks: [
        { id: 'eng4-3-h1', type: 'HEADING', level: 1, text: 'Tom’s car' },
        {
          id: 'eng4-3-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: '’s, s’ and of',
          text: 'With people and animals, English uses ’s: “Tom’s car”, “the dog’s bed”. After a plural with -s, only the apostrophe is added: “my parents’ flat”. Irregular plurals get ’s: “the children’s room”. With things and places, “of” is more common: “the end of the street”, “the name of the hotel”.',
          translations: {
            de: {
              title: '’s, s’ und of',
              text: 'Bei Personen und Tieren verwendet das Englische ’s: „Tom’s car“, „the dog’s bed“. Nach einem Plural auf -s kommt nur der Apostroph: „my parents’ flat“. Unregelmäßige Plurale bekommen ’s: „the children’s room“. Bei Dingen und Orten ist „of“ üblicher: „the end of the street“, „the name of the hotel“.',
            },
          },
          table: {
            headers: ['owner', 'form', 'example'],
            rows: [
              ['one person', '’s', 'my sister’s job'],
              ['plural in -s', 's’', 'my sisters’ jobs'],
              ['irregular plural', '’s', 'the women’s team'],
              ['thing / place', 'of', 'the centre of town'],
            ],
          },
        },
        {
          id: 'eng4-3-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct form.',
          question: 'Mr and Mrs Lee have a house. It is …',
          options: [
            { id: 'o1', text: 'the Lees’ house.' },
            { id: 'o2', text: 'the Lee’s house.' },
            { id: 'o3', text: 'the house of the Lees’.' },
          ],
          multiple: false,
          solution: ['o1'],
          explanation: '“the Lees” is a plural ending in -s, so only an apostrophe is added: “the Lees’ house”.',
          explanationTranslations: {
            de: '„the Lees“ ist ein Plural auf -s, also kommt nur ein Apostroph dazu: „the Lees’ house“.',
          },
        },
        {
          id: 'eng4-3-info-whose',
          type: 'INFO',
          variant: 'TIP',
          title: 'Whose? – Who’s?',
          text: 'To ask who owns something, say “Whose …?”: “Whose keys are these?” Don’t confuse it with “Who’s …?” (= who is): “Who’s that man?” Both sound the same.',
          translations: {
            de: {
              title: 'Whose? – Who’s?',
              text: 'Um nach dem Besitzer zu fragen, sagt man „Whose …?“: „Whose keys are these?“ Nicht verwechseln mit „Who’s …?“ (= who is): „Who’s that man?“ Beide klingen gleich.',
            },
          },
        },
        {
          id: 'eng4-3-match',
          type: 'MATCHING',
          instruction: 'Match the question with the answer.',
          left: [
            { id: 'q1', text: 'Whose bag is this?' },
            { id: 'q2', text: 'Who’s that woman?' },
            { id: 'q3', text: 'Whose are these shoes?' },
            { id: 'q4', text: 'Who’s your teacher?' },
          ],
          right: [
            { id: 'a1', text: 'It’s Karim’s.' },
            { id: 'a2', text: 'That’s my aunt.' },
            { id: 'a3', text: 'They’re my son’s.' },
            { id: 'a4', text: 'Ms Clarke.' },
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

  // ====================================================== SEITE 4
  // Seite 4 – this, that, these, those und one/ones.
  {
    order: 4,
    title: 'this, that, these, those',
    subtitle: 'Hinweisen – und one/ones',
    estimatedMinutes: 18,
    content: {
      version: v,
      blocks: [
        { id: 'eng4-4-h1', type: 'HEADING', level: 1, text: 'this, that, these, those' },
        {
          id: 'eng4-4-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Near and far, one and many',
          text: 'English has four demonstratives. Two questions decide which one: Is it near or far? Is it one or more than one? They can stand before a noun (“this book”) or alone (“This is my book.”). On the phone, you say “This is Anna.” to introduce yourself.',
          translations: {
            de: {
              title: 'Nah und fern, eins und mehrere',
              text: 'Das Englische hat vier Demonstrativwörter. Zwei Fragen entscheiden: Ist es nah oder fern? Ist es eins oder mehrere? Sie stehen vor einem Nomen („this book“) oder allein („This is my book.“). Am Telefon stellt man sich mit „This is Anna.“ vor.',
            },
          },
          table: {
            headers: ['', 'near', 'far'],
            rows: [
              ['one', 'this', 'that'],
              ['more', 'these', 'those'],
            ],
          },
        },
        {
          id: 'eng4-4-cloze',
          type: 'CLOZE',
          instruction: 'Complete with this, that, these or those.',
          wordBank: ['this', 'that', 'these', 'those'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '(on the phone) Hello, ' },
            { kind: 'GAP', gapId: 'd1', solution: ['this'], width: 6 },
            { kind: 'TEXT', text: ' is Karim.\n(pointing at a building far away) What’s ' },
            { kind: 'GAP', gapId: 'd2', solution: ['that'], width: 6 },
            { kind: 'TEXT', text: '?\n(holding some photos) ' },
            { kind: 'GAP', gapId: 'd3', solution: ['These'], width: 6 },
            { kind: 'TEXT', text: ' are from my holiday.\n(birds in the sky) Look at ' },
            { kind: 'GAP', gapId: 'd4', solution: ['those'], width: 6 },
            { kind: 'TEXT', text: ' birds!' },
          ],
        },
        {
          id: 'eng4-4-info-one',
          type: 'INFO',
          variant: 'TIP',
          title: 'one and ones',
          text: 'To avoid repeating a countable noun, English uses “one” (singular) or “ones” (plural): “I don’t like the red shirt. I prefer the blue one.” – “Which shoes? The black ones.” With uncountable nouns, you can’t use “one”.',
          translations: {
            de: {
              title: 'one und ones',
              text: 'Um ein zählbares Nomen nicht zu wiederholen, verwendet das Englische „one“ (Singular) oder „ones“ (Plural): „I don’t like the red shirt. I prefer the blue one.“ – „Which shoes? The black ones.“ Bei nicht zählbaren Nomen geht „one“ nicht.',
            },
          },
        },
        {
          id: 'eng4-4-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct answer.',
          question: '“Which glasses do you want – the big glasses or the small glasses?” – “The small …, please.”',
          options: [
            { id: 'o1', text: 'one' },
            { id: 'o2', text: 'ones' },
            { id: 'o3', text: 'it' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: '“glasses” is plural, so you replace it with “ones”: “the small ones”.',
          explanationTranslations: {
            de: '„glasses“ ist Plural, also ersetzt man es durch „ones“: „the small ones“.',
          },
        },
      ],
    },
  },
];
