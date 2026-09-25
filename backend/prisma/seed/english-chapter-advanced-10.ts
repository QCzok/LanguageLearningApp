import type { UnitSeed } from './chapter-beginner-1';

/**
 * Englisch, Advanced, Kapitel 10: „Idioms and nuance“ (C2, Kapitel 4)
 *
 * Fünf Seiten. Idiome, Kollokationen, Anspielungen und Ironie – das, was man
 * nicht wörtlich nimmt. Auf C2 fällt man weniger auf, weil man ein Idiom
 * nicht kennt, als weil man es leicht verbiegt oder im falschen Moment
 * verwendet.
 *
 * Aufbau: Seite 1 verbreitete Idiome, Seite 2 Kollokationen, Seite 3
 * Anspielungen (Shakespeare, Bibel, Märchen, Popkultur), Seite 4 Ironie und
 * Understatement, Seite 5 Konnotationen und die Frage, wann Idiomatik passt.
 *
 * Regionale Ausdrücke sind gekennzeichnet. Sämtliche Texte sind
 * eigenständig verfasst.
 */
const v = 1;

export const ENGLISH_ADVANCED_10_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  {
    order: 1,
    title: 'Spill the beans',
    subtitle: 'Redewendungen treffsicher verwenden',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'ena10-1-h1', type: 'HEADING', level: 1, text: 'Spill the beans' },
        {
          id: 'ena10-1-intro',
          type: 'TEXT',
          text: 'If someone “spills the beans”, nothing has been dropped in the kitchen, and a person who is “under the weather” is not standing in the rain. Idioms mean more than the sum of their words – and they are fixed. Say “spill the peas” and people will understand you, but you will immediately sound like a textbook.',
        },
        {
          id: 'ena10-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Common idioms',
          items: [
            { term: 'to spill the beans', translations: { de: 'etwas ausplaudern', es: 'descubrir el pastel' } },
            { term: 'to put your foot in it', translations: { de: 'ins Fettnäpfchen treten', es: 'meter la pata' } },
            { term: 'to be under the weather', translations: { de: 'angeschlagen sein', es: 'estar pachucho' } },
            { term: 'to hit the nail on the head', translations: { de: 'den Nagel auf den Kopf treffen', es: 'dar en el clavo' } },
            { term: 'to cost an arm and a leg', translations: { de: 'ein Vermögen kosten', es: 'costar un ojo de la cara' } },
            { term: 'a piece of cake', translations: { de: 'ein Kinderspiel', es: 'pan comido' } },
            { term: 'to beat around the bush', translations: { de: 'um den heißen Brei herumreden', es: 'andarse por las ramas' } },
            { term: 'to turn a blind eye', translations: { de: 'ein Auge zudrücken', es: 'hacer la vista gorda' } },
            { term: 'to be fed up (with)', translations: { de: 'die Nase voll haben', es: 'estar harto (de)' } },
            { term: 'to call it a day', translations: { de: 'Feierabend machen', es: 'dar por terminado' } },
            { term: 'the last straw', translations: { de: 'der Tropfen, der das Fass zum Überlaufen bringt', es: 'la gota que colma el vaso' } },
          ],
        },
        {
          id: 'ena10-1-match',
          type: 'MATCHING',
          instruction: 'Match each situation with the idiom.',
          left: [
            { id: 'l1', text: 'You ask a colleague when her baby is due – she isn’t pregnant.' },
            { id: 'l2', text: 'The teacher sees you copying and says nothing.' },
            { id: 'l3', text: 'You ask for the time and get a story about someone’s childhood.' },
            { id: 'l4', text: 'The exam was so easy you finished in ten minutes.' },
            { id: 'l5', text: 'Your brother tells everyone the baby’s name before the official announcement.' },
          ],
          right: [
            { id: 'r1', text: 'put your foot in it' },
            { id: 'r2', text: 'turn a blind eye' },
            { id: 'r3', text: 'beat around the bush' },
            { id: 'r4', text: 'a piece of cake' },
            { id: 'r5', text: 'spill the beans' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
            { leftId: 'l5', rightId: 'r5' },
          ],
        },
        {
          id: 'ena10-1-info',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'What can change – and what can’t',
          text: 'The verb changes tense and person (“She put her foot in it”), and possessives adapt (“I put my foot in it”). The nouns, prepositions and articles stay fixed. Adjectives are rarely inserted: to intensify, English uses fixed extensions, such as “put your foot right in it”.',
          table: {
            headers: ['Correct', 'Incorrect'],
            rows: [
              ['It cost an arm and a leg.', 'It cost an arm and a foot.'],
              ['You hit the nail on the head.', 'You hit the nail on its head.'],
              ['That was the last straw.', 'That was the final straw of hay.'],
            ],
          },
        },
        {
          id: 'ena10-1-cloze',
          type: 'CLOZE',
          instruction: 'Complete the idioms with the exact word.',
          wordBank: ['beans', 'nail', 'leg', 'weather', 'day'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Don’t spill the ' },
            { kind: 'GAP', gapId: 'g1', solution: ['beans'], width: 6 },
            { kind: 'TEXT', text: ' about the party! You hit the ' },
            { kind: 'GAP', gapId: 'g2', solution: ['nail'], width: 5 },
            { kind: 'TEXT', text: ' on the head. The new flat cost an arm and a ' },
            { kind: 'GAP', gapId: 'g3', solution: ['leg'], width: 4 },
            { kind: 'TEXT', text: '. I’m feeling a bit under the ' },
            { kind: 'GAP', gapId: 'g4', solution: ['weather'], width: 8 },
            { kind: 'TEXT', text: ', so let’s call it a ' },
            { kind: 'GAP', gapId: 'g5', solution: ['day'], width: 4 },
            { kind: 'TEXT', text: '.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  {
    order: 2,
    title: 'Make a decision, do homework',
    subtitle: 'Kollokationen korrekt bilden',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'ena10-2-h1', type: 'HEADING', level: 1, text: 'Make a decision, do homework' },
        {
          id: 'ena10-2-intro',
          type: 'TEXT',
          text: 'In German you “treffen” a decision; in English you “make” one. Collocations are word combinations that cannot be derived logically – they are simply what speakers say. Mistakes here are never really confusing, but they immediately reveal that someone is not a native speaker. The classic trap for German speakers is “make” versus “do”.',
        },
        {
          id: 'ena10-2-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'make, do, take, have',
          text: 'As a rough guide, “make” is for creating or producing, “do” for tasks and activities. But many collocations must simply be learned, and “take” and “have” add further fixed combinations.',
          table: {
            headers: ['make', 'do', 'take', 'have'],
            rows: [
              ['a decision', 'homework', 'a photo', 'a shower'],
              ['a mistake', 'the shopping', 'a break', 'a look'],
              ['an effort', 'a favour', 'place', 'a go'],
              ['progress', 'research', 'part (in)', 'breakfast'],
              ['a complaint', 'business (with)', 'responsibility', 'a chat'],
            ],
          },
        },
        {
          id: 'ena10-2-match',
          type: 'MATCHING',
          instruction: 'Match each noun with the right verb.',
          left: [
            { id: 'l1', text: 'a mistake' },
            { id: 'l2', text: 'someone a favour' },
            { id: 'l3', text: 'a photo' },
            { id: 'l4', text: 'a look' },
            { id: 'l5', text: 'research' },
          ],
          right: [
            { id: 'r1', text: 'make' },
            { id: 'r2', text: 'do' },
            { id: 'r3', text: 'take' },
            { id: 'r4', text: 'have' },
            { id: 'r5', text: 'carry out' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
            { leftId: 'l5', rightId: 'r5' },
          ],
        },
        {
          id: 'ena10-2-cloze',
          type: 'CLOZE',
          instruction: 'Complete with make, do, take or have in the right form.',
          wordBank: ['made', 'did', 'took', 'have', 'making'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'The director ' },
            { kind: 'GAP', gapId: 'k1', solution: ['made'], width: 5 },
            { kind: 'TEXT', text: ' the decision alone. She ' },
            { kind: 'GAP', gapId: 'k2', solution: ['did'], width: 4 },
            { kind: 'TEXT', text: ' a lot of research beforehand and ' },
            { kind: 'GAP', gapId: 'k3', solution: ['took'], width: 5 },
            { kind: 'TEXT', text: ' full responsibility for the result. We’re ' },
            { kind: 'GAP', gapId: 'k4', solution: ['making'], width: 7 },
            { kind: 'TEXT', text: ' good progress now. Shall we ' },
            { kind: 'GAP', gapId: 'k5', solution: ['have'], width: 5 },
            { kind: 'TEXT', text: ' a break?' },
          ],
        },
        {
          id: 'ena10-2-info-adj',
          type: 'INFO',
          variant: 'TIP',
          title: 'Adjective collocations',
          text: 'Adjectives have preferred partners too. English speaks of “heavy rain”, “strong coffee”, “a high temperature”, “heavy traffic” and “a big mistake” – not “strong rain”, “heavy coffee” or “a large mistake”. Everyone understands the wrong versions; nobody says them.',
        },
        {
          id: 'ena10-2-choice',
          type: 'CHOICE',
          instruction: 'Choose the natural collocation.',
          question: 'Which sentence sounds natural?',
          options: [
            { id: 'c1', text: 'There was strong rain all night.' },
            { id: 'c2', text: 'There was heavy rain all night.' },
            { id: 'c3', text: 'There was big rain all night.' },
            { id: 'c4', text: 'There was thick rain all night.' },
          ],
          multiple: false,
          solution: ['c2'],
          explanation: 'Rain is “heavy” in English (German: „starker Regen“). Wind, on the other hand, is “strong”.',
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  {
    order: 3,
    title: 'Allusions',
    subtitle: 'Anspielungen verstehen',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'ena10-3-h1', type: 'HEADING', level: 1, text: 'Allusions' },
        {
          id: 'ena10-3-intro',
          type: 'TEXT',
          text: 'An allusion is a brief, unexplained reference to something the speaker assumes everyone knows: a play, a Bible story, a fairy tale, a famous event. English is full of them, and many have become so common that speakers no longer know where they come from. A newspaper that calls a small company’s lawsuit against a tech giant “a David and Goliath battle” expects readers to fill in the rest.',
        },
        {
          id: 'ena10-3-info',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'Common allusions and their sources',
          text: 'Shakespeare and the King James Bible (1611) have given English more everyday expressions than any other sources. Others come from classical myths, fairy tales and history.',
          table: {
            headers: ['Expression', 'Source', 'Meaning'],
            rows: [
              ['a David and Goliath battle', 'the Bible', 'a small side against a much stronger one'],
              ['a good Samaritan', 'the Bible', 'someone who helps a stranger'],
              ['green-eyed monster', 'Shakespeare, Othello', 'jealousy'],
              ['Achilles’ heel', 'Greek myth', 'a fatal weakness'],
              ['to open Pandora’s box', 'Greek myth', 'to cause many unforeseen problems'],
              ['to cross the Rubicon', 'Julius Caesar', 'to take an irreversible step'],
              ['a Cinderella story', 'fairy tale', 'sudden success after obscurity'],
            ],
          },
        },
        {
          id: 'ena10-3-match',
          type: 'MATCHING',
          instruction: 'Match each sentence with its meaning.',
          left: [
            { id: 'l1', text: 'Signing that contract was crossing the Rubicon.' },
            { id: 'l2', text: 'Public speaking is his Achilles’ heel.' },
            { id: 'l3', text: 'Changing the tax system would open Pandora’s box.' },
            { id: 'l4', text: 'The team’s rise from the fourth division was a real Cinderella story.' },
          ],
          right: [
            { id: 'r1', text: 'There was no going back after that.' },
            { id: 'r2', text: 'It is his one serious weakness.' },
            { id: 'r3', text: 'It would cause many unexpected problems.' },
            { id: 'r4', text: 'They went from unknown to successful.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'ena10-3-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct interpretation.',
          question: 'A headline reads: “Village bakery takes on supermarket giant in David and Goliath battle.” What does the headline suggest?',
          options: [
            { id: 'q1', text: 'The bakery is owned by someone called David.' },
            { id: 'q2', text: 'A small business is fighting a much more powerful opponent – and the reader may sympathise with it.' },
            { id: 'q3', text: 'The supermarket is certain to win.' },
            { id: 'q4', text: 'The story is about a religious festival.' },
          ],
          multiple: false,
          solution: ['q2'],
          explanation:
            'In the Bible story, the young shepherd David defeats the giant Goliath. The allusion frames the bakery as the underdog – and, implicitly, hints that it might win.',
        },
        {
          id: 'ena10-3-cloze',
          type: 'CLOZE',
          instruction: 'Complete with the right allusion.',
          wordBank: ['Samaritan', 'Rubicon', 'Achilles', 'Pandora’s'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'A stranger stopped to help me change the tyre – a real good ' },
            { kind: 'GAP', gapId: 'a1', solution: ['Samaritan'], width: 10 },
            { kind: 'TEXT', text: '. Once the email was sent, we had crossed the ' },
            { kind: 'GAP', gapId: 'a2', solution: ['Rubicon'], width: 8 },
            { kind: 'TEXT', text: '. His temper is his ' },
            { kind: 'GAP', gapId: 'a3', solution: ['Achilles'], width: 9 },
            { kind: 'TEXT', text: '’ heel. Reopening that old dispute would open ' },
            { kind: 'GAP', gapId: 'a4', solution: ['Pandora’s', "Pandora's"], width: 10 },
            { kind: 'TEXT', text: ' box.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  {
    order: 4,
    title: 'Oh, brilliant',
    subtitle: 'Ironie und Understatement',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'ena10-4-h1', type: 'HEADING', level: 1, text: 'Oh, brilliant' },
        {
          id: 'ena10-4-intro',
          type: 'TEXT',
          text: 'The train is cancelled, it is pouring with rain and your umbrella is at home. “Oh, brilliant.” Nobody takes that as enthusiasm. Irony says the opposite of what is meant and relies on the situation to reveal it. Its quieter relative is understatement: “It’s not ideal” about a complete disaster. British English in particular uses both constantly – which is why learners sometimes miss the point.',
        },
        {
          id: 'ena10-4-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Signals of irony',
          text: 'Irony is recognised mainly by the contrast with the situation, often reinforced by exaggerated praise, emphatic “oh” or “well”, and fixed phrases. In writing, the tone of voice is missing, which is why irony in emails is easily misunderstood.',
          table: {
            headers: ['Expression', 'Usually means'],
            rows: [
              ['Oh, brilliant. / Great, just great.', 'This is annoying.'],
              ['Well, that went well.', 'That went badly.'],
              ['Thanks a lot!', 'You haven’t helped at all.'],
              ['Tell me about it.', 'I know exactly – I’ve experienced it too.'],
              ['That’s all I needed.', 'This makes things worse.'],
            ],
          },
        },
        {
          id: 'ena10-4-choice',
          type: 'CHOICE',
          instruction: 'What does the speaker mean?',
          question: 'Your colleague spills coffee over the boss’s keyboard on his first day. He says: “Well, that went well.”',
          options: [
            { id: 'i1', text: 'He is pleased with how the day has started.' },
            { id: 'i2', text: 'He means, ironically, that it went badly.' },
            { id: 'i3', text: 'He is asking whether it went well.' },
            { id: 'i4', text: 'He is apologising formally.' },
          ],
          multiple: false,
          solution: ['i2'],
          explanation: 'The phrase contradicts the situation so obviously that only an ironic reading makes sense.',
        },
        {
          id: 'ena10-4-info-litotes',
          type: 'INFO',
          variant: 'TIP',
          title: 'Understatement and litotes',
          text: 'Understatement says less than is meant; litotes denies the opposite: “not bad” (= good), “not exactly cheap” (= expensive), “not the brightest” (= rather stupid). It can be modest, polite or ironic – and “not bad at all!” can be high praise.',
          table: {
            headers: ['Understatement', 'Meaning'],
            rows: [
              ['It’s not exactly cheap.', 'It’s very expensive.'],
              ['That was a bit of a disaster.', 'That was a total disaster.'],
              ['She’s not the most patient person.', 'She is very impatient.'],
              ['Not bad at all!', 'Very good!'],
            ],
          },
        },
        {
          id: 'ena10-4-match',
          type: 'MATCHING',
          instruction: 'What is really meant?',
          left: [
            { id: 'l1', text: 'The situation is not ideal.' },
            { id: 'l2', text: 'He’s not the most talkative person.' },
            { id: 'l3', text: 'Great, the battery’s dead.' },
            { id: 'l4', text: 'Not bad, this cake!' },
          ],
          right: [
            { id: 'r1', text: 'The situation is bad.' },
            { id: 'r2', text: 'He hardly speaks.' },
            { id: 'r3', text: 'This is annoying.' },
            { id: 'r4', text: 'This cake is really good.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'ena10-4-cloze',
          type: 'CLOZE',
          instruction: 'Complete with an ironic or understated expression.',
          wordBank: ['all I needed', 'exactly', 'bit', 'bad'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'A flat tyre in the middle of a storm – that’s ' },
            { kind: 'GAP', gapId: 'u1', solution: ['all I needed'], width: 13 },
            { kind: 'TEXT', text: '. A hotel at £400 a night isn’t ' },
            { kind: 'GAP', gapId: 'u2', solution: ['exactly'], width: 8 },
            { kind: 'TEXT', text: ' cheap. The journey home was a ' },
            { kind: 'GAP', gapId: 'u3', solution: ['bit'], width: 4 },
            { kind: 'TEXT', text: ' of a nightmare. But the view from the room wasn’t ' },
            { kind: 'GAP', gapId: 'u4', solution: ['bad'], width: 4 },
            { kind: 'TEXT', text: ' at all.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  {
    order: 5,
    title: 'Knowing when not to',
    subtitle: 'Konnotationen und Fingerspitzengefühl',
    estimatedMinutes: 32,
    content: {
      version: v,
      blocks: [
        { id: 'ena10-5-h1', type: 'HEADING', level: 1, text: 'Knowing when not to' },
        {
          id: 'ena10-5-intro',
          type: 'TEXT',
          text: 'Learners who have just discovered idioms want to use them. But three idioms in one paragraph do not sound native; they sound like someone showing off. Native speakers use idioms sparingly, mostly in speech and informal writing. Mastery also means knowing when to choose the plain word – and knowing that near-synonyms rarely mean exactly the same.',
        },
        {
          id: 'ena10-5-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Connotation: same thing, different judgement',
          text: 'Many sets of near-synonyms differ in the attitude they express. The denotation – what they refer to – is the same; the connotation – the judgement – is not. Choosing the wrong one is not a grammar mistake, but it can be an insult.',
          table: {
            headers: ['Positive', 'Neutral', 'Negative'],
            rows: [
              ['slim', 'thin', 'skinny, scrawny'],
              ['thrifty', 'careful with money', 'stingy, tight-fisted'],
              ['determined', 'firm', 'stubborn, pig-headed'],
              ['curious', 'interested', 'nosy'],
              ['confident', 'self-assured', 'arrogant'],
            ],
          },
        },
        {
          id: 'ena10-5-choice',
          type: 'CHOICE',
          instruction: 'Choose the most natural version.',
          question: 'You email a colleague to thank them for help with a project. Which version sounds most natural?',
          options: [
            { id: 'y1', text: 'You went the extra mile, hit the nail on the head and saved my bacon – you’re a diamond in the rough!' },
            { id: 'y2', text: 'Thanks so much for your help with the budget – your suggestion really hit the nail on the head.' },
            { id: 'y3', text: 'I hereby express my most sincere gratitude for the assistance rendered.' },
            { id: 'y4', text: 'Thanks for spilling the beans on the budget.' },
          ],
          multiple: false,
          solution: ['y2'],
          explanation:
            'The second version uses one well-chosen idiom. The first piles up four (and “diamond in the rough” is an odd compliment here), the third is far too stiff, and the fourth misuses the idiom.',
        },
        {
          id: 'ena10-5-match',
          type: 'MATCHING',
          instruction: 'Replace each negative word with a positive one.',
          left: [
            { id: 't1', text: 'stingy' },
            { id: 't2', text: 'stubborn' },
            { id: 't3', text: 'skinny' },
            { id: 't4', text: 'nosy' },
          ],
          right: [
            { id: 'u1', text: 'thrifty' },
            { id: 'u2', text: 'determined' },
            { id: 'u3', text: 'slim' },
            { id: 'u4', text: 'curious' },
          ],
          solution: [
            { leftId: 't1', rightId: 'u1' },
            { leftId: 't2', rightId: 'u2' },
            { leftId: 't3', rightId: 'u3' },
            { leftId: 't4', rightId: 'u4' },
          ],
        },
        {
          id: 'ena10-5-cloze',
          type: 'CLOZE',
          instruction: 'Complete the summary of the chapter.',
          wordBank: ['fixed', 'make', 'allusion', 'irony', 'connotation', 'sparingly'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'The nouns in an idiom are ' },
            { kind: 'GAP', gapId: 'z1', solution: ['fixed'], width: 6 },
            { kind: 'TEXT', text: '. In English you ' },
            { kind: 'GAP', gapId: 'z2', solution: ['make'], width: 5 },
            { kind: 'TEXT', text: ' a decision. “A David and Goliath battle” is an ' },
            { kind: 'GAP', gapId: 'z3', solution: ['allusion'], width: 9 },
            { kind: 'TEXT', text: '. “Well, that went well” is usually ' },
            { kind: 'GAP', gapId: 'z4', solution: ['irony'], width: 6 },
            { kind: 'TEXT', text: '. “Thrifty” and “stingy” differ in ' },
            { kind: 'GAP', gapId: 'z5', solution: ['connotation'], width: 12 },
            { kind: 'TEXT', text: '. And idioms should be used ' },
            { kind: 'GAP', gapId: 'z6', solution: ['sparingly'], width: 10 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'ena10-5-writing',
          type: 'WRITING',
          instruction: 'Write a story.',
          prompt:
            'Write a long message to a friend (180–250 words) about a day when everything went wrong but ended well. Use, naturally and sparingly, at least three idioms from this chapter, one allusion, one ironic remark, one example of understatement and two correct collocations with make, do, take or have.',
          minWords: 180,
          maxWords: 260,
          aiFeedback: true,
          sampleAnswer:
            'Hi Sophie,\n\nI have to tell you about yesterday. It was one of those days when you should really just stay in bed.\n\nIt started when my alarm didn’t go off. I rushed to my job interview, missed the bus, of course, and stood at the stop in pouring rain. Oh, brilliant. Then a neighbour drove past and gave me a lift – I was only ten minutes late, which felt like a miracle.\n\nIn the interview, though, I put my foot in it straight away. I asked the head of department whether the woman at reception was his daughter. She was his wife. I wanted the ground to swallow me up.\n\nBut here’s the thing: he just laughed and said people made that mistake all the time and it was the best compliment he ever got. After that, the atmosphere was completely relaxed. I gave my presentation, they asked exactly the questions I’d prepared for, and it felt like a piece of cake. This morning they called – I’ve got the job! It was a bit of a David and Goliath situation, too: the other candidates all had much more experience.\n\nSo I suppose the day wasn’t a total disaster after all. Not bad for a morning that began in a thunderstorm!\n\nLet’s have a drink at the weekend to celebrate – I’ll take a day off on Friday anyway.\n\nLove,\nLena',
        },
      ],
    },
  },
];
