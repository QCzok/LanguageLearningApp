import type { UnitSeed } from './chapter-beginner-1';

/**
 * Englisch, Advanced, Kapitel 1: „Englishes“ (C1, Kapitel 1)
 *
 * Fünf Seiten. Der Advanced-Band beginnt mit der Einsicht, die der Rest des
 * Lehrwerks stillschweigend übergangen hat: Es gibt nicht ein Englisch,
 * sondern viele. Mehr Menschen sprechen Englisch als Zweit- oder Fremdsprache
 * als als Muttersprache – die „Besitzer“ der Sprache sind längst in der
 * Minderheit.
 *
 * Aufbau: Seite 1 das Begriffswerkzeug (variety, standard, accent, dialect),
 * Seite 2 britisches und amerikanisches Englisch in Wortschatz, Schreibung
 * und Grammatik, Seite 3 Aussprache und Akzente, Seite 4 die „New
 * Englishes“ (Indien, Nigeria, Singapur) und Englisch als Lingua franca,
 * Seite 5 die Frage, welches Englisch man selbst spricht.
 *
 * Einsprachig englisch; Vokabeln mit `de` und `es`. Sämtliche Texte sind
 * eigenständig verfasst.
 */
const v = 1;

export const ENGLISH_ADVANCED_1_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – das Begriffswerkzeug.
  {
    order: 1,
    title: 'One language, many Englishes',
    subtitle: 'Varietät, Standard, Akzent, Dialekt',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'ena1-1-h1', type: 'HEADING', level: 1, text: 'One language, many Englishes' },
        {
          id: 'ena1-1-image',
          type: 'IMAGE',
          url: 'illustration:world-map',
          alt: 'A world map with the English-speaking countries highlighted.',
          caption: 'English is an official language in more than fifty countries.',
        },
        {
          id: 'ena1-1-text',
          type: 'TEXT',
          text: 'Roughly 400 million people speak English as their first language. At least three times as many speak it as a second or foreign language. In other words, the typical English speaker today is not from London or Chicago but from Lagos, Mumbai, Manila or Berlin – and most conversations in English take place between people for whom it is not a mother tongue.\n\nThis changes an old question. For a long time, learners were told there were two “correct” Englishes, British and American, and everything else was a deviation. Linguists today describe English as a pluricentric language: a family of standard varieties, each with its own norms, none of them the single original from which the others have strayed.',
        },
        {
          id: 'ena1-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Words: talking about language',
          items: [
            { term: 'variety', translations: { de: 'die Varietät', es: 'la variedad' }, example: 'Indian English is a variety with its own norms.' },
            { term: 'standard (language)', translations: { de: 'die Standardsprache', es: 'la lengua estándar' } },
            { term: 'accent', translations: { de: 'der Akzent (Aussprache)', es: 'el acento' } },
            { term: 'dialect', translations: { de: 'der Dialekt', es: 'el dialecto' } },
            { term: 'native speaker', translations: { de: 'der Muttersprachler', es: 'el hablante nativo' } },
            { term: 'lingua franca', translations: { de: 'die Verkehrssprache', es: 'la lengua franca' } },
            { term: 'mother tongue', translations: { de: 'die Muttersprache', es: 'la lengua materna' } },
            { term: 'to deviate (from)', translations: { de: 'abweichen (von)', es: 'desviarse (de)' } },
            { term: 'prestige', translations: { de: 'das Prestige', es: 'el prestigio' } },
            { term: 'mutually intelligible', translations: { de: 'gegenseitig verständlich', es: 'mutuamente inteligible' } },
          ],
        },
        {
          id: 'ena1-1-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Accent, dialect, variety',
          text: 'An accent is only about pronunciation. A dialect also includes vocabulary and grammar. A variety is the neutral umbrella term for any recognisable form of a language. Everyone has an accent – including newsreaders. What we call “no accent” is simply the accent with the most prestige in a given place.',
          table: {
            headers: ['Term', 'Covers', 'Example'],
            rows: [
              ['accent', 'pronunciation only', 'a Glaswegian accent'],
              ['dialect', 'pronunciation, words, grammar', 'Yorkshire dialect: “Were you sat there?” for “Were you sitting there?”'],
              ['variety', 'any recognisable form', 'Nigerian English, Scottish English'],
              ['standard', 'the form used in education and print', 'Standard American English'],
            ],
          },
        },
        {
          id: 'ena1-1-choice',
          type: 'CHOICE',
          instruction: 'Read the text.',
          question: 'What does it mean to call English a “pluricentric” language?',
          options: [
            { id: 'c1', text: 'British English is the original and all others are adaptations.' },
            { id: 'c2', text: 'There are several standard varieties, each with its own norms.' },
            { id: 'c3', text: 'Anyone can decide what is correct.' },
            { id: 'c4', text: 'There are no real differences between varieties.' },
          ],
          multiple: false,
          solution: ['c2'],
          explanation:
            'Pluricentric does not mean “anything goes”: each standard has its own rules. It means there is more than one centre, and none of them is the original from which the others deviate.',
        },
        {
          id: 'ena1-1-cloze',
          type: 'CLOZE',
          instruction: 'Complete the text.',
          wordBank: ['accent', 'dialect', 'variety', 'lingua franca', 'prestige'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Everyone speaks with an ' },
            { kind: 'GAP', gapId: 'g1', solution: ['accent'], width: 7 },
            { kind: 'TEXT', text: '. A ' },
            { kind: 'GAP', gapId: 'g2', solution: ['dialect'], width: 8 },
            { kind: 'TEXT', text: ' also has its own words and grammar. Singapore English is a ' },
            { kind: 'GAP', gapId: 'g3', solution: ['variety'], width: 8 },
            { kind: 'TEXT', text: ' with its own norms. When a Brazilian and a Korean negotiate in English, they use it as a ' },
            { kind: 'GAP', gapId: 'g4', solution: ['lingua franca'], width: 13 },
            { kind: 'TEXT', text: '. The idea that one accent is “neutral” is really a question of ' },
            { kind: 'GAP', gapId: 'g5', solution: ['prestige'], width: 9 },
            { kind: 'TEXT', text: '.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – British and American English.
  {
    order: 2,
    title: 'Two nations divided by a common language',
    subtitle: 'Britisches und amerikanisches Englisch',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'ena1-2-h1', type: 'HEADING', level: 1, text: 'Two nations divided by a common language' },
        {
          id: 'ena1-2-intro',
          type: 'TEXT',
          text: 'The line about Britain and America being “divided by a common language” is often attributed to George Bernard Shaw, though nobody has found it in his writings. Whoever said it, the differences are real but modest: an American and a British speaker understand each other almost perfectly. The trouble lies in the small number of words that exist in both varieties with different meanings.',
        },
        {
          id: 'ena1-2-info-vocab',
          type: 'INFO',
          variant: 'TIP',
          title: 'Same thing, different words',
          text: 'Both forms in each row are standard English. Most educated speakers understand both.',
          table: {
            headers: ['British', 'American'],
            rows: [
              ['flat', 'apartment'],
              ['lorry', 'truck'],
              ['pavement', 'sidewalk'],
              ['queue', 'line'],
              ['holiday', 'vacation'],
              ['mobile (phone)', 'cell (phone)'],
              ['ground floor / first floor', 'first floor / second floor'],
            ],
          },
        },
        {
          id: 'ena1-2-info-false',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Words that change meaning',
          text: 'These are the ones that cause real misunderstandings. In Britain, “pants” are underwear; in the US, they are trousers. A British “rubber” erases pencil marks; in American slang it is a condom. And if a British colleague says a plan is “quite good”, they may mean “not very good” – while an American “quite good” means “very good”.',
          table: {
            headers: ['Word', 'In Britain', 'In the US'],
            rows: [
              ['pants', 'underwear', 'trousers'],
              ['chips', 'hot fried potatoes', 'crisps'],
              ['quite good', 'fairly good, often lukewarm', 'very good'],
              ['to table (a proposal)', 'to put forward for discussion', 'to postpone discussion'],
            ],
          },
        },
        {
          id: 'ena1-2-match',
          type: 'MATCHING',
          instruction: 'Match the British word with its American equivalent.',
          left: [
            { id: 'l1', text: 'lorry' },
            { id: 'l2', text: 'pavement' },
            { id: 'l3', text: 'queue' },
            { id: 'l4', text: 'flat' },
            { id: 'l5', text: 'crisps' },
          ],
          right: [
            { id: 'r1', text: 'truck' },
            { id: 'r2', text: 'sidewalk' },
            { id: 'r3', text: 'line' },
            { id: 'r4', text: 'apartment' },
            { id: 'r5', text: 'chips' },
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
          id: 'ena1-2-info-grammar',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Spelling and grammar',
          text: 'American spelling largely goes back to Noah Webster’s dictionaries of the early 1800s, which simplified some British forms. In grammar, American English uses the past simple more often for recent events, prefers “gotten” as a past participle, and treats collective nouns as singular.',
          table: {
            headers: ['Feature', 'British', 'American'],
            rows: [
              ['-our / -or', 'colour, favour', 'color, favor'],
              ['-re / -er', 'centre, theatre', 'center, theater'],
              ['-ise / -ize', 'organise (also -ize)', 'organize'],
              ['recent past', 'I’ve just eaten.', 'I just ate.'],
              ['collective nouns', 'The team are winning.', 'The team is winning.'],
              ['past participle', 'It’s got better.', 'It’s gotten better.'],
            ],
          },
        },
        {
          id: 'ena1-2-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct answer.',
          question: 'An American colleague writes: “Let’s table the budget question.” What does she want?',
          options: [
            { id: 'q1', text: 'To discuss the budget immediately.' },
            { id: 'q2', text: 'To postpone the discussion of the budget.' },
            { id: 'q3', text: 'To put the budget in a table.' },
            { id: 'q4', text: 'To cancel the budget.' },
          ],
          multiple: false,
          solution: ['q2'],
          explanation:
            'In American English, “to table” a proposal means to set it aside. In British English, it means the opposite: to bring it forward for discussion. In an international meeting, it is safer to say “postpone” or “put on the agenda”.',
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – accents.
  {
    order: 3,
    title: 'Where are you from?',
    subtitle: 'Akzente erkennen und einordnen',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'ena1-3-h1', type: 'HEADING', level: 1, text: 'Where are you from?' },
        {
          id: 'ena1-3-intro',
          type: 'TEXT',
          text: 'Native speakers place each other within seconds, and not by magic. A handful of features do most of the work: whether the “r” in “car” is pronounced, how “bath” sounds, whether the “t” in “water” becomes a soft “d”. Knowing these features explains why one speaker is easy to follow and another, saying exactly the same words, is hard.',
        },
        {
          id: 'ena1-3-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Five features that give a speaker away',
          text: 'Accents are described as rhotic (the “r” after a vowel is pronounced, as in most of North America, Scotland and Ireland) or non-rhotic (it is dropped, as in most of England, Australia and New Zealand). “RP” (Received Pronunciation) is the traditional prestige accent of southern England; only a small minority of British people actually speak it.',
          table: {
            headers: ['Feature', 'Example', 'Where'],
            rows: [
              ['rhotic “r”', 'car = /kɑːr/', 'US, Canada, Scotland, Ireland'],
              ['non-rhotic', 'car = /kɑː/', 'most of England, Australia, New Zealand'],
              ['flapped “t”', 'water sounds like “wadder”', 'US, Canada, Australia'],
              ['“bath” vowel', 'long /ɑː/ vs short /æ/', 'southern England vs northern England and the US'],
              ['glottal stop', 'bottle = “bo’le”', 'London and many British cities'],
            ],
          },
        },
        {
          id: 'ena1-3-audio',
          type: 'AUDIO',
          title: 'One sentence, four speakers',
          audioUrl: 'placeholder://en-a1-accents',
          durationSec: 50,
          transcript:
            'Speaker 1 (London): I left the car by the water after the party.\nSpeaker 2 (Boston): I left the car by the water after the party.\nSpeaker 3 (Glasgow): I left the car by the water after the party.\nSpeaker 4 (Sydney): I left the car by the water after the party.',
        },
        {
          id: 'ena1-3-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct answer.',
          question: 'A speaker pronounces the “r” in “car” clearly and says “water” like “wadder”. Where is the speaker most likely from?',
          options: [
            { id: 'a1', text: 'London' },
            { id: 'a2', text: 'the United States' },
            { id: 'a3', text: 'Sydney' },
            { id: 'a4', text: 'Glasgow' },
          ],
          multiple: false,
          solution: ['a2'],
          explanation:
            'The rhotic “r” rules out London and Sydney; the flapped “t” is typical of North American English and unusual in Scotland. Together they point to the US or Canada.',
        },
        {
          id: 'ena1-3-match',
          type: 'MATCHING',
          instruction: 'Match the feature with its description.',
          left: [
            { id: 'l1', text: 'rhotic accent' },
            { id: 'l2', text: 'glottal stop' },
            { id: 'l3', text: 'RP' },
            { id: 'l4', text: 'flapped “t”' },
          ],
          right: [
            { id: 'r1', text: 'the “r” after a vowel is pronounced' },
            { id: 'r2', text: 'the “t” is replaced by a catch in the throat' },
            { id: 'r3', text: 'the traditional prestige accent of southern England' },
            { id: 'r4', text: 'the “t” between vowels sounds like a soft “d”' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'ena1-3-info-attitude',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'Accent and prejudice',
          text: 'Studies in Britain have repeatedly found that listeners judge speakers with certain regional or working-class accents as less competent, even when they say exactly the same thing. Many broadcasters now deliberately employ presenters with a range of accents. For learners, the practical lesson is double: do not try to “lose” your own accent as long as you are understood, and do not judge others by theirs.',
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – New Englishes and English as a lingua franca.
  {
    order: 4,
    title: 'New Englishes',
    subtitle: 'Indien, Nigeria, Singapur – und Englisch als Lingua franca',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'ena1-4-h1', type: 'HEADING', level: 1, text: 'New Englishes' },
        {
          id: 'ena1-4-intro',
          type: 'TEXT',
          text: 'In India, Nigeria, Kenya, Singapore and the Philippines, English arrived with colonialism and stayed after independence – as a language of government, education and business, and as a neutral bridge between speakers of many local languages. Over generations it has developed its own forms. These are not “mistakes” but features of established varieties, used by educated speakers in formal contexts.',
        },
        {
          id: 'ena1-4-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Features of some New Englishes',
          text: 'Each variety has borrowed words from local languages and developed its own grammar. Some features, such as using the present continuous with stative verbs, are shared across many of them.',
          table: {
            headers: ['Variety', 'Feature', 'Example'],
            rows: [
              ['Indian English', 'prepone (opposite of postpone)', 'Can we prepone the meeting to Monday?'],
              ['Indian English', 'continuous with stative verbs', 'I am having two brothers.'],
              ['Nigerian English', 'to flash (call and hang up)', 'Flash me when you arrive.'],
              ['Singapore English (Singlish)', 'final particle “lah”', 'Don’t worry lah.'],
              ['many varieties', 'invariant tag “isn’t it?”', 'You are coming tomorrow, isn’t it?'],
            ],
          },
        },
        {
          id: 'ena1-4-match',
          type: 'MATCHING',
          instruction: 'Match the sentence with its meaning in a standard British or American paraphrase.',
          left: [
            { id: 'l1', text: 'Let’s prepone the deadline by two days.' },
            { id: 'l2', text: 'Flash me when you’re outside.' },
            { id: 'l3', text: 'You finished the report, isn’t it?' },
            { id: 'l4', text: 'I am knowing him since school.' },
          ],
          right: [
            { id: 'r1', text: 'Let’s bring the deadline forward by two days.' },
            { id: 'r2', text: 'Give me a missed call when you’re outside.' },
            { id: 'r3', text: 'You finished the report, didn’t you?' },
            { id: 'r4', text: 'I have known him since school.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'ena1-4-info-elf',
          type: 'INFO',
          variant: 'TIP',
          title: 'English as a lingua franca',
          text: 'In most international meetings, nobody is a native speaker – and when one is present, they are often the hardest to understand. Research on English as a lingua franca shows that successful communication depends less on native-like idioms than on clarity: short sentences, avoiding culture-specific idioms (“a sticky wicket”, “a home run”), checking understanding and paraphrasing. Native speakers often have to learn these skills too.',
          table: {
            headers: ['Risky in international settings', 'Clearer'],
            rows: [
              ['That’s a whole different ball game.', 'That’s a very different situation.'],
              ['Let’s touch base next week.', 'Let’s talk again next week.'],
              ['We’re on a sticky wicket.', 'We’re in a difficult position.'],
            ],
          },
        },
        {
          id: 'ena1-4-choice',
          type: 'CHOICE',
          instruction: 'Choose the best answer.',
          question: 'In a video call with colleagues from Japan, Brazil and Germany, which sentence is the clearest?',
          options: [
            { id: 'e1', text: 'We need to get our ducks in a row before we pitch this.' },
            { id: 'e2', text: 'We need to organise everything carefully before we present this to the client.' },
            { id: 'e3', text: 'Let’s not jump the gun, yeah?' },
            { id: 'e4', text: 'It’s not rocket science, but it’s a tall order.' },
          ],
          multiple: false,
          solution: ['e2'],
          explanation:
            'The other sentences rely on idioms that many non-native speakers – and some native speakers from other regions – will not know. Clarity matters more than sounding native.',
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – which English should I speak?
  {
    order: 5,
    title: 'Which English should I speak?',
    subtitle: 'Mit Bedacht wählen und das Kapitel wiederholen',
    estimatedMinutes: 32,
    content: {
      version: v,
      blocks: [
        { id: 'ena1-5-h1', type: 'HEADING', level: 1, text: 'Which English should I speak?' },
        {
          id: 'ena1-5-intro',
          type: 'TEXT',
          text: 'Having described the variation, we come to the question that matters for a learner: which one to choose? The sensible answer is not “the most neutral one” – there is no such thing. It is to be consistent in what you produce, flexible in what you understand, and guided by the people you actually talk to.',
        },
        {
          id: 'ena1-5-info',
          type: 'INFO',
          variant: 'TIP',
          title: 'Three principles',
          text: 'Be consistent: “colour” with “apartment” and “gotten” looks less like a choice than like a mix-up. Be realistic: choose the variety of the people you work and live with. Distinguish production from comprehension: produce one variety, but train your ear on many – podcasts and films from different countries are the best teachers.',
          table: {
            headers: ['Question', 'Principle'],
            rows: [
              ['What do I write?', 'One spelling system, consistently.'],
              ['What do I need to understand?', 'As many varieties as possible.'],
              ['Which do I choose?', 'The one I actually use with others.'],
              ['What about my accent?', 'Aim to be clear, not native-like.'],
            ],
          },
        },
        {
          id: 'ena1-5-match',
          type: 'MATCHING',
          instruction: 'Match each situation with the most sensible decision.',
          left: [
            { id: 's1', text: 'You are moving to Toronto for two years.' },
            { id: 's2', text: 'You write a user manual for customers worldwide.' },
            { id: 's3', text: 'Your team is spread across Manchester, Mumbai and Denver.' },
            { id: 's4', text: 'You are writing a thesis at an Irish university.' },
          ],
          right: [
            { id: 't1', text: 'Adopt North American vocabulary and spelling.' },
            { id: 't2', text: 'Use short, idiom-free sentences and one consistent spelling.' },
            { id: 't3', text: 'Keep your own variety and train your ear for the others.' },
            { id: 't4', text: 'Follow British spelling, as the university expects.' },
          ],
          solution: [
            { leftId: 's1', rightId: 't1' },
            { leftId: 's2', rightId: 't2' },
            { leftId: 's3', rightId: 't3' },
            { leftId: 's4', rightId: 't4' },
          ],
        },
        {
          id: 'ena1-5-cloze',
          type: 'CLOZE',
          instruction: 'Complete the summary of the chapter.',
          wordBank: ['pluricentric', 'accent', 'pants', 'rhotic', 'prepone', 'consistent'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'English is a ' },
            { kind: 'GAP', gapId: 'z1', solution: ['pluricentric'], width: 13 },
            { kind: 'TEXT', text: ' language with several standards. Everyone has an ' },
            { kind: 'GAP', gapId: 'z2', solution: ['accent'], width: 7 },
            { kind: 'TEXT', text: '. In Britain, “' },
            { kind: 'GAP', gapId: 'z3', solution: ['pants'], width: 6 },
            { kind: 'TEXT', text: '” are underwear. An accent that pronounces the “r” in “car” is ' },
            { kind: 'GAP', gapId: 'z4', solution: ['rhotic'], width: 7 },
            { kind: 'TEXT', text: '. In Indian English, you can “' },
            { kind: 'GAP', gapId: 'z5', solution: ['prepone'], width: 8 },
            { kind: 'TEXT', text: '” a meeting. And whatever variety you choose, be ' },
            { kind: 'GAP', gapId: 'z6', solution: ['consistent'], width: 11 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'ena1-5-writing',
          type: 'WRITING',
          instruction: 'Write an opinion piece.',
          prompt:
            'A language school in your city advertises “Perfect English – lose your accent in 10 weeks!”. Write a letter to the editor of a local magazine (180–250 words) in which you respond to the advertisement. Explain what is misleading about it, acknowledge the real need behind it, and suggest a better goal for learners. Use at least three terms from this chapter.',
          minWords: 180,
          maxWords: 260,
          aiFeedback: true,
          sampleAnswer:
            'Dear Editor,\n\nI was struck by the advertisement in last week’s issue promising “Perfect English – lose your accent in 10 weeks!”. I would like to explain why I think this promise is both misleading and unhelpful.\n\nFirst, nobody speaks without an accent. The accents we perceive as “neutral” – such as RP in Britain or General American in the US – are simply those with the most prestige. Native speakers from Glasgow, Lagos or Sydney all have accents, and nobody would call their English imperfect.\n\nSecond, English today is a pluricentric language. Far more people use it as a lingua franca than as a mother tongue. In an international meeting, what matters is not sounding like a Londoner but being understood by colleagues from Tokyo and São Paulo.\n\nI do understand the need behind the advertisement. Some learners are genuinely difficult to follow, and some worry that their accent will be held against them – unfortunately, not without reason.\n\nHowever, the better goal is intelligibility, not imitation. A good course would focus on the few sounds that really cause misunderstandings, on clear sentence stress and on strategies such as paraphrasing. It would also train learners to understand a wide range of varieties.\n\nThat is a promise I would happily see in your magazine.\n\nYours faithfully,\nAnna Keller',
        },
      ],
    },
  },
];
