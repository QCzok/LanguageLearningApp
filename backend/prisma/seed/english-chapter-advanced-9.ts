import type { UnitSeed } from './chapter-beginner-1';

/**
 * Englisch, Advanced, Kapitel 9: „Style and register“ (C2, Kapitel 3)
 *
 * Fünf Seiten. Vom Slang bis zum Amtsenglisch. Das Englische markiert
 * Register weniger über Anredeformen (es gibt kein Sie) als über Wortschatz –
 * germanische gegen lateinische Wörter, Phrasal Verbs gegen Einzelverben –
 * und über Höflichkeitsstrategien, die für Deutschsprachige oft
 * überraschend indirekt sind.
 *
 * Aufbau: Seite 1 die Registerskala und das Germanic/Latinate-Prinzip,
 * Seite 2 gesprochenes und umgangssprachliches Englisch, Seite 3 Höflichkeit
 * und Indirektheit, Seite 4 dasselbe in mehreren Registern, Seite 5 der
 * bewusste Registerbruch und eigene Umformung.
 *
 * Regionale Formen sind gekennzeichnet. Sämtliche Texte sind eigenständig
 * verfasst.
 */
const v = 1;

export const ENGLISH_ADVANCED_9_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  {
    order: 1,
    title: 'Pass away, die, kick the bucket',
    subtitle: 'Die Registerskala',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'ena9-1-h1', type: 'HEADING', level: 1, text: 'Pass away, die, kick the bucket' },
        {
          id: 'ena9-1-intro',
          type: 'TEXT',
          text: '“He passed away”, “he died”, “he kicked the bucket” – three sentences, one fact. Read the third in a condolence card and you would be shocked; hear the first among friends and it might sound stiff. English has no formal “you”, so register is carried mostly by vocabulary and sentence structure. One pattern explains a great deal: short words of Germanic origin and phrasal verbs sound informal; longer words of Latin or French origin sound formal.',
        },
        {
          id: 'ena9-1-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Germanic and Latinate',
          text: 'After the Norman Conquest of 1066, French became the language of the court, law and administration for several centuries, while English remained the language of everyday life. Traces of this survive: “begin” and “commence”, “ask” and “enquire”, “buy” and “purchase”. The Latinate word is not more correct – but it is more formal, and often more distant.',
          table: {
            headers: ['Informal (phrasal / Germanic)', 'Neutral', 'Formal (Latinate)'],
            rows: [
              ['find out', 'learn', 'ascertain'],
              ['put off', 'delay', 'postpone'],
              ['get', 'receive', 'obtain'],
              ['go up', 'rise', 'increase'],
              ['look into', 'check', 'investigate'],
              ['kick the bucket', 'die', 'pass away / decease'],
            ],
          },
        },
        {
          id: 'ena9-1-match',
          type: 'MATCHING',
          instruction: 'Match each informal expression with its formal equivalent.',
          left: [
            { id: 'a1', text: 'put off' },
            { id: 'a2', text: 'find out' },
            { id: 'a3', text: 'get in touch' },
            { id: 'a4', text: 'go on' },
            { id: 'a5', text: 'sort out' },
          ],
          right: [
            { id: 'b1', text: 'postpone' },
            { id: 'b2', text: 'ascertain' },
            { id: 'b3', text: 'contact' },
            { id: 'b4', text: 'continue' },
            { id: 'b5', text: 'resolve' },
          ],
          solution: [
            { leftId: 'a1', rightId: 'b1' },
            { leftId: 'a2', rightId: 'b2' },
            { leftId: 'a3', rightId: 'b3' },
            { leftId: 'a4', rightId: 'b4' },
            { leftId: 'a5', rightId: 'b5' },
          ],
        },
        {
          id: 'ena9-1-choice',
          type: 'CHOICE',
          instruction: 'Choose the sentence that suits the situation.',
          question: 'You are writing a condolence card to a colleague whose father has died. Which sentence is appropriate?',
          options: [
            { id: 'c1', text: 'Sorry your dad kicked the bucket.' },
            { id: 'c2', text: 'I was so sorry to hear about the loss of your father. My thoughts are with you and your family.' },
            { id: 'c3', text: 'Heard your dad died. How are you holding up?' },
            { id: 'c4', text: 'Please be advised of my condolences regarding the decease of your parent.' },
          ],
          multiple: false,
          solution: ['c2'],
          explanation:
            'A condolence card to a colleague calls for a formal but warm register. The first is offensive, the third too casual, and the fourth so bureaucratic that it sounds cold.',
        },
        {
          id: 'ena9-1-cloze',
          type: 'CLOZE',
          instruction: 'Rewrite in a formal register.',
          wordBank: ['postpone', 'investigating', 'obtained', 'contact'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '“We’ll have to put off the meeting.” → We will have to ' },
            { kind: 'GAP', gapId: 'g1', solution: ['postpone'], width: 9 },
            { kind: 'TEXT', text: ' the meeting. “We’re looking into it.” → We are ' },
            { kind: 'GAP', gapId: 'g2', solution: ['investigating'], width: 14 },
            { kind: 'TEXT', text: ' the matter. “You can get a form at reception.” → Forms may be ' },
            { kind: 'GAP', gapId: 'g3', solution: ['obtained'], width: 9 },
            { kind: 'TEXT', text: ' at reception. “Get in touch if you have questions.” → Please ' },
            { kind: 'GAP', gapId: 'g4', solution: ['contact'], width: 8 },
            { kind: 'TEXT', text: ' us if you have any questions.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  {
    order: 2,
    title: 'How people really talk',
    subtitle: 'Gesprochenes und umgangssprachliches Englisch',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'ena9-2-h1', type: 'HEADING', level: 1, text: 'How people really talk' },
        {
          id: 'ena9-2-intro',
          type: 'TEXT',
          text: 'Spoken English follows its own rules – not wrong ones, different ones. Learners who have only studied written English often understand newspapers better than conversations, and sound like a newsreader over breakfast.',
        },
        {
          id: 'ena9-2-dialogue',
          type: 'DIALOGUE',
          title: 'Two flatmates in Manchester',
          lines: [
            { speaker: 'Tom', text: 'All right? How was the exam?' },
            { speaker: 'Mia', text: 'Don’t ask. Totally bombed it, I reckon.' },
            { speaker: 'Tom', text: 'Seriously? It wasn’t that bad, was it?' },
            { speaker: 'Mia', text: 'For you maybe. I was stuck on question one for like an hour. Anyway, whatever.' },
            { speaker: 'Tom', text: 'Fancy going for a drink tonight? Take your mind off it.' },
            { speaker: 'Mia', text: 'Go on then. Not too late though – got a nine o’clock tomorrow.' },
          ],
        },
        {
          id: 'ena9-2-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Features of informal spoken English',
          text: 'Informal speech drops predictable words (“Got a nine o’clock” for “I’ve got a nine o’clock lecture”), uses tag questions to check agreement, fillers (like, you know, I mean) and vague language (and stuff, or something). These are normal in speech and in informal messages – and out of place in an essay.',
          table: {
            headers: ['Feature', 'Spoken', 'Written standard'],
            rows: [
              ['ellipsis', 'Got a nine o’clock tomorrow.', 'I have a lecture at nine tomorrow.'],
              ['tag question', 'It wasn’t that bad, was it?', 'It was not very difficult.'],
              ['filler', 'I was stuck for like an hour.', 'I was stuck for about an hour.'],
              ['vague language', 'books and stuff', 'books and similar materials'],
              ['contraction', 'wanna, gonna, gotta', 'want to, going to, have got to'],
            ],
          },
        },
        {
          id: 'ena9-2-match',
          type: 'MATCHING',
          instruction: 'Match each informal expression from the dialogue with its meaning.',
          left: [
            { id: 'm1', text: 'All right?' },
            { id: 'm2', text: 'bombed it' },
            { id: 'm3', text: 'I reckon' },
            { id: 'm4', text: 'Fancy going for a drink?' },
            { id: 'm5', text: 'Go on then.' },
          ],
          right: [
            { id: 'n1', text: 'Hello, how are you? (British greeting)' },
            { id: 'n2', text: 'did very badly' },
            { id: 'n3', text: 'I think' },
            { id: 'n4', text: 'Would you like to go for a drink?' },
            { id: 'n5', text: 'OK, you’ve persuaded me.' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'n1' },
            { leftId: 'm2', rightId: 'n2' },
            { leftId: 'm3', rightId: 'n3' },
            { leftId: 'm4', rightId: 'n4' },
            { leftId: 'm5', rightId: 'n5' },
          ],
        },
        {
          id: 'ena9-2-info-regional',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'Informal English varies by region',
          text: 'Slang is the most regional layer of any language. The same idea can sound completely different in London, New York or Sydney. All forms below are informal.',
          table: {
            headers: ['Idea', 'UK', 'US', 'Australia'],
            rows: [
              ['great!', 'brilliant! / cracking!', 'awesome!', 'ripper! / grouse!'],
              ['friend', 'mate', 'buddy / dude', 'mate'],
              ['tired', 'knackered', 'beat', 'stuffed'],
              ['afternoon', 'afternoon', 'afternoon', 'arvo'],
            ],
          },
        },
        {
          id: 'ena9-2-choice',
          type: 'CHOICE',
          instruction: 'Read the dialogue.',
          question: 'What does Mia mean by “Anyway, whatever”?',
          options: [
            { id: 'q1', text: 'She wants to talk about the exam in more detail.' },
            { id: 'q2', text: 'She wants to drop the subject; it can’t be changed now.' },
            { id: 'q3', text: 'She is angry with Tom.' },
            { id: 'q4', text: 'She doesn’t understand Tom’s question.' },
          ],
          multiple: false,
          solution: ['q2'],
          explanation:
            '“Anyway” signals a change of subject, and “whatever” dismisses the topic as not worth further discussion. Depending on tone, “whatever” can also sound rude – here it is resigned.',
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  {
    order: 3,
    title: 'I was wondering if …',
    subtitle: 'Höflichkeit und Indirektheit',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'ena9-3-h1', type: 'HEADING', level: 1, text: 'I was wondering if …' },
        {
          id: 'ena9-3-intro',
          type: 'TEXT',
          text: 'For many German speakers, English politeness feels surprisingly indirect. A direct request that is perfectly polite in German (“Schicken Sie mir bitte den Bericht”) can sound abrupt when translated word for word. English softens requests with past tenses, modal verbs, “just” and questions – and British English in particular often says less than it means.',
        },
        {
          id: 'ena9-3-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Softening a request',
          text: 'The past tense (“I was wondering”, “I wanted to ask”) and the continuous form create distance and make a request feel less demanding. “Would”, “could” and “might” add tentativeness. Minimisers (“just”, “a quick question”, “a bit”) make the request seem small.',
          table: {
            headers: ['Level', 'Example'],
            rows: [
              ['direct', 'Send me the report.'],
              ['question', 'Can you send me the report?'],
              ['modal', 'Could you send me the report?'],
              ['past + continuous', 'I was wondering if you could send me the report.'],
              ['minimiser + conditional', 'Would you mind just sending me the report when you have a moment?'],
            ],
          },
        },
        {
          id: 'ena9-3-ordering',
          type: 'ORDERING',
          instruction: 'Order the requests from most direct to most indirect.',
          items: [
            { id: 'o1', text: 'Close the window.' },
            { id: 'o2', text: 'Can you close the window?' },
            { id: 'o3', text: 'Could you close the window, please?' },
            { id: 'o4', text: 'Would you mind closing the window, if it’s not too much trouble?' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4'],
        },
        {
          id: 'ena9-3-info-british',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'What the British say – and what they mean',
          text: 'British understatement can confuse even Americans. The meaning depends heavily on tone and context, and this table is only a tendency – but it is a well-known one.',
          table: {
            headers: ['They say', 'They often mean'],
            rows: [
              ['That’s not bad.', 'That’s good.'],
              ['I’ll bear it in mind.', 'I will probably not do it.'],
              ['With the greatest respect …', 'I think you are wrong.'],
              ['It’s a bit of a problem.', 'It’s a serious problem.'],
              ['Interesting …', 'I don’t agree / I’m not convinced.'],
            ],
          },
        },
        {
          id: 'ena9-3-choice',
          type: 'CHOICE',
          instruction: 'Choose the appropriate request.',
          question: 'You are emailing a professor at another university for the first time to ask for a copy of her paper. Which sentence is appropriate?',
          options: [
            { id: 'r1', text: 'Send me your 2021 paper, I can’t find it.' },
            { id: 'r2', text: 'I was wondering if you might be able to send me a copy of your 2021 paper.' },
            { id: 'r3', text: 'Hey, can u send me that paper from 2021?' },
            { id: 'r4', text: 'It is hereby requested that the aforementioned paper be forwarded.' },
          ],
          multiple: false,
          solution: ['r2'],
          explanation:
            'The second sentence softens the request with past continuous and “might”, without becoming bureaucratic. The fourth is formal but cold and impersonal for a first contact.',
        },
        {
          id: 'ena9-3-cloze',
          type: 'CLOZE',
          instruction: 'Complete the polite email.',
          wordBank: ['wondering', 'could', 'just', 'mind', 'regards'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Dear Dr Lawson,\nI was ' },
            { kind: 'GAP', gapId: 'f1', solution: ['wondering'], width: 10 },
            { kind: 'TEXT', text: ' if you ' },
            { kind: 'GAP', gapId: 'f2', solution: ['could'], width: 6 },
            { kind: 'TEXT', text: ' help me with a quick question about the budget. Would you ' },
            { kind: 'GAP', gapId: 'f3', solution: ['mind'], width: 5 },
            { kind: 'TEXT', text: ' sending me the breakdown of costs? I ' },
            { kind: 'GAP', gapId: 'f4', solution: ['just'], width: 5 },
            { kind: 'TEXT', text: ' need the totals.\nKind ' },
            { kind: 'GAP', gapId: 'f5', solution: ['regards'], width: 8 },
            { kind: 'TEXT', text: ',\nNora Blake' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  {
    order: 4,
    title: 'Same message, different voices',
    subtitle: 'Denselben Inhalt stilistisch umformen',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'ena9-4-h1', type: 'HEADING', level: 1, text: 'Same message, different voices' },
        {
          id: 'ena9-4-intro',
          type: 'TEXT',
          text: 'Changing register is not just a matter of swapping words for synonyms. Sentence structure, the order of information, how much is made explicit and the relationship with the reader all change. Compare three versions of the same message: a delivery is late.',
        },
        {
          id: 'ena9-4-text',
          type: 'TEXT',
          text: 'Formal: “We regret to inform you that, owing to an operational issue at our warehouse, your order will be delayed by approximately three working days. We apologise for any inconvenience caused.”\nNeutral: “Your order will arrive about three days late because of a problem at our warehouse. Sorry for the inconvenience.”\nInformal: “Hey, bad news – your stuff’s running late. Something went wrong at the warehouse, so it’ll be about three days. Really sorry!”',
        },
        {
          id: 'ena9-4-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'What changes between registers',
          text: 'Beyond vocabulary, notice how the cause is expressed (owing to / because of / “something went wrong”), how numbers are approximated (approximately / about / about), and how the apology changes from a fixed formula to an exclamation.',
          table: {
            headers: ['Element', 'Formal', 'Neutral', 'Informal'],
            rows: [
              ['opening', 'We regret to inform you that', '—', 'Hey, bad news –'],
              ['cause', 'owing to', 'because of', 'something went wrong'],
              ['approximation', 'approximately', 'about', 'about'],
              ['apology', 'We apologise for any inconvenience caused.', 'Sorry for the inconvenience.', 'Really sorry!'],
              ['vocabulary', 'order, operational issue', 'order, problem', 'stuff'],
            ],
          },
        },
        {
          id: 'ena9-4-match',
          type: 'MATCHING',
          instruction: 'Match each informal sentence with its formal equivalent.',
          left: [
            { id: 'u1', text: 'There’s no way to get an appointment.' },
            { id: 'u2', text: 'My rent’s gone up loads.' },
            { id: 'u3', text: 'The boss totally lost it.' },
            { id: 'u4', text: 'Nobody can make head or tail of this.' },
          ],
          right: [
            { id: 'v1', text: 'It is extremely difficult to obtain an appointment.' },
            { id: 'v2', text: 'My rent has increased considerably.' },
            { id: 'v3', text: 'The director reacted very angrily.' },
            { id: 'v4', text: 'The text is almost incomprehensible.' },
          ],
          solution: [
            { leftId: 'u1', rightId: 'v1' },
            { leftId: 'u2', rightId: 'v2' },
            { leftId: 'u3', rightId: 'v3' },
            { leftId: 'u4', rightId: 'v4' },
          ],
        },
        {
          id: 'ena9-4-choice',
          type: 'CHOICE',
          instruction: 'Choose the neutral version.',
          question: 'Formal: “Users are advised that the service will be unavailable on Saturday owing to scheduled maintenance.” Which version is neutral?',
          options: [
            { id: 'w1', text: 'Heads up – the site’s down Saturday, they’re fixing stuff.' },
            { id: 'w2', text: 'The service won’t be available on Saturday because of planned maintenance.' },
            { id: 'w3', text: 'Service unavailability shall be effective for the duration of Saturday.' },
            { id: 'w4', text: 'Saturday: nope.' },
          ],
          multiple: false,
          solution: ['w2'],
          explanation:
            'The neutral version keeps all the information in everyday vocabulary. The first and fourth are informal; the third is even more formal than the original.',
        },
        {
          id: 'ena9-4-cloze',
          type: 'CLOZE',
          instruction: 'Rewrite the informal message formally.',
          wordBank: ['owing to', 'approximately', 'apologise', 'regret'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '“Something went wrong with the system, so it’ll be down for about an hour. Sorry!” → We ' },
            { kind: 'GAP', gapId: 'x1', solution: ['regret'], width: 7 },
            { kind: 'TEXT', text: ' to inform you that, ' },
            { kind: 'GAP', gapId: 'x2', solution: ['owing to'], width: 9 },
            { kind: 'TEXT', text: ' a technical fault, the service will be unavailable for ' },
            { kind: 'GAP', gapId: 'x3', solution: ['approximately'], width: 14 },
            { kind: 'TEXT', text: ' one hour. We ' },
            { kind: 'GAP', gapId: 'x4', solution: ['apologise', 'apologize'], width: 10 },
            { kind: 'TEXT', text: ' for any inconvenience caused.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  {
    order: 5,
    title: 'Breaking the register',
    subtitle: 'Den Registerbruch gezielt einsetzen',
    estimatedMinutes: 34,
    content: {
      version: v,
      blocks: [
        { id: 'ena9-5-h1', type: 'HEADING', level: 1, text: 'Breaking the register' },
        {
          id: 'ena9-5-intro',
          type: 'TEXT',
          text: 'A register maintained from beginning to end creates coherence; a sudden shift attracts attention. When it is accidental, it looks like a mistake. When it is deliberate, it can be one of the most effective tools of style: the columnist who ends a careful economic analysis with “In other words, we’ve been had” achieves in five words what a paragraph could not.',
        },
        {
          id: 'ena9-5-info',
          type: 'INFO',
          variant: 'TIP',
          title: 'What a register shift can do',
          text: 'A drop into informal language in a formal text creates intimacy or sharpens criticism. A rise into solemn language on a trivial subject creates humour: parody almost always applies the register of one genre to a topic that does not belong to it. In both cases, the shift works because it is brief and the rest of the text keeps its register.',
          table: {
            headers: ['Shift', 'Example', 'Effect'],
            rows: [
              ['drop', 'The forecasts were optimistic. In other words, nobody saw it coming.', 'criticism, complicity'],
              ['rise', 'It is with profound regret that I announce the coffee machine is broken.', 'humour, parody'],
              ['sustained mix', 'a technical report full of slang', 'usually looks careless'],
            ],
          },
        },
        {
          id: 'ena9-5-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct interpretation.',
          question: 'A very formal editorial on a tax reform ends: “In short: same old story – the little guy pays.” What is the effect?',
          options: [
            { id: 'y1', text: 'It is a mistake: the writer failed to maintain the register.' },
            { id: 'y2', text: 'The drop into informal language condenses the criticism and creates complicity with the reader.' },
            { id: 'y3', text: 'It shows the writer supports the reform.' },
            { id: 'y4', text: 'It is a quotation from the minister.' },
          ],
          multiple: false,
          solution: ['y2'],
          explanation:
            'After a formal text, the colloquial ending works like a wink: it says in the voice of the street what the analysis has shown in technical language. Because the rest is formal, the shift is noticed and remembered.',
        },
        {
          id: 'ena9-5-cloze',
          type: 'CLOZE',
          instruction: 'Complete the summary of the chapter.',
          wordBank: ['Latinate', 'phrasal', 'ellipsis', 'wondering', 'understatement', 'parody'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Words of ' },
            { kind: 'GAP', gapId: 'z1', solution: ['Latinate'], width: 9 },
            { kind: 'TEXT', text: ' origin tend to sound formal, while ' },
            { kind: 'GAP', gapId: 'z2', solution: ['phrasal'], width: 8 },
            { kind: 'TEXT', text: ' verbs sound informal. Leaving out predictable words in speech is called ' },
            { kind: 'GAP', gapId: 'z3', solution: ['ellipsis'], width: 9 },
            { kind: 'TEXT', text: '. “I was ' },
            { kind: 'GAP', gapId: 'z4', solution: ['wondering'], width: 10 },
            { kind: 'TEXT', text: ' if …” softens a request. “That’s not bad” is an example of British ' },
            { kind: 'GAP', gapId: 'z5', solution: ['understatement'], width: 15 },
            { kind: 'TEXT', text: '. And applying a solemn register to a trivial topic creates ' },
            { kind: 'GAP', gapId: 'z6', solution: ['parody'], width: 7 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'ena9-5-writing',
          type: 'WRITING',
          instruction: 'Write the same content in three registers.',
          prompt:
            'The gym where you work is closing for three weeks for renovation. Write three versions of the announcement (200–280 words in total): (1) a formal email to all members, (2) a short, informal social-media post, (3) a message to a colleague you are friends with. Then explain in two or three sentences what changed apart from vocabulary.',
          minWords: 200,
          maxWords: 290,
          aiFeedback: true,
          sampleAnswer:
            '1. Formal email\nDear Members,\nWe are writing to inform you that, owing to extensive renovation work, the gym will be closed from 1 to 21 July inclusive. During this period, we will be refurbishing the changing rooms and the studio. Your membership will be extended automatically by three weeks, and no action is required on your part. In the meantime, you are welcome to use our branch on Station Road free of charge. We apologise for any inconvenience and look forward to welcoming you back on 22 July.\nKind regards,\nThe North Gym Team\n\n2. Social-media post\nWe’re getting a makeover! From 1 to 21 July it’s hard hats, not hand weights. New changing rooms, new studio – trust us, it’ll be worth it. Till then, head over to Station Road and train there for free. See you on the 22nd!\n\n3. Message to a colleague\nHey Jen, have you heard? We’re shut for three weeks from 1 July – they’re finally doing the renovation. Bye-bye, ancient lockers! I’m picking up a few shifts at Station Road in the meantime – you in? At least we can moan about it together.\n\nComment\nApart from vocabulary, the relationship with the reader changes: the email is impersonal and complete, including the practical details members need; the post relies on wordplay and exclamations; the private message leaves out details and shares feelings instead. Sentence length and structure change accordingly.',
        },
      ],
    },
  },
];
