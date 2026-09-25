import type { UnitSeed } from './chapter-beginner-1';

/**
 * Englisch, Intermediate, Kapitel 4: „Relationships“ (B1, Kapitel 4)
 *
 * Über Gefühle und Beziehungen sprechen. Seite 1 die Adjektive auf -ed und
 * -ing (bored/boring), Seite 2 Phrasal Verbs aus dem Beziehungswortschatz,
 * Seite 3 Pflicht und Rat mit must, have to, mustn’t, don’t have to und
 * should – mit der Falle „must not“ ≠ „muss nicht“. Seite 4 each other und
 * die Reflexivpronomen, Seite 5 eine Ratgeberkolumne.
 *
 * Einsprachig englisch wie der ganze Intermediate-Band; Vokabeln mit `de`
 * und `es`.
 */
const v = 1;

export const ENGLISH_INTERMEDIATE_4_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – -ed und -ing.
  {
    order: 1,
    title: 'Bored or boring?',
    subtitle: 'Gefühle beschreiben: -ed und -ing',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'eni4-1-h1', type: 'HEADING', level: 1, text: 'Bored or boring?' },
        {
          id: 'eni4-1-image',
          type: 'IMAGE',
          url: 'illustration:portraits',
          alt: 'Vier gerahmte Porträts von Menschen unterschiedlichen Alters.',
          caption: 'Every face tells a story.',
        },
        {
          id: 'eni4-1-text',
          type: 'TEXT',
          text: 'Sophie writes to her friend Lena in Cologne: “The first month in London was exciting, but also a bit tiring. I was often confused on the Tube, and the weekends were boring because I didn’t know anybody. But now I’m really pleased: Ben invited me to a quiz night at his local pub. I was embarrassed because I couldn’t answer a single question about British TV – but everybody was so friendly. It was an amazing evening!”',
        },
        {
          id: 'eni4-1-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: '-ed = how you feel, -ing = what causes it',
          text: 'Many adjectives for feelings have two forms. The -ed form describes how a person feels: “I’m bored.” The -ing form describes the thing (or person) that causes the feeling: “The film is boring.” If you say “I’m boring”, you are saying that other people find you boring!',
          table: {
            headers: ['how you feel (-ed)', 'what causes it (-ing)'],
            rows: [
              ['I’m bored.', 'The lesson is boring.'],
              ['She’s interested.', 'The article is interesting.'],
              ['We were tired.', 'It was a tiring day.'],
              ['He’s confused.', 'The instructions are confusing.'],
              ['I was embarrassed.', 'That was an embarrassing moment.'],
            ],
          },
        },
        {
          id: 'eni4-1-cloze',
          type: 'CLOZE',
          instruction: 'Choose -ed or -ing.',
          wordBank: ['exciting', 'excited', 'confused', 'confusing', 'embarrassed', 'embarrassing'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'The first month was ' },
            { kind: 'GAP', gapId: 'a1', solution: ['exciting'], width: 12 },
            { kind: 'TEXT', text: '. Sophie was often ' },
            { kind: 'GAP', gapId: 'a2', solution: ['confused'], width: 12 },
            { kind: 'TEXT', text: ' on the Tube, because the map is really ' },
            { kind: 'GAP', gapId: 'a3', solution: ['confusing'], width: 12 },
            { kind: 'TEXT', text: '. At the quiz she felt ' },
            { kind: 'GAP', gapId: 'a4', solution: ['embarrassed'], width: 12 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'eni4-1-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'You want to say that you have nothing to do and feel unhappy about it.',
          options: [
            { id: 'o1', text: 'I’m so boring today.' },
            { id: 'o2', text: 'I’m so bored today.' },
            { id: 'o3', text: 'I have boredom today.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'Your feeling is “bored”. “I’m boring” means that other people find you uninteresting.',
        },
        {
          id: 'eni4-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Words: feelings',
          items: [
            { term: 'pleased', translations: { de: 'zufrieden, erfreut', es: 'contento' } },
            { term: 'embarrassed', translations: { de: 'verlegen, peinlich berührt', es: 'avergonzado' } },
            { term: 'upset', translations: { de: 'aufgebracht, gekränkt', es: 'disgustado' } },
            { term: 'jealous', translations: { de: 'eifersüchtig', es: 'celoso' } },
            { term: 'lonely', translations: { de: 'einsam', es: 'solo' } },
            { term: 'annoyed', translations: { de: 'verärgert', es: 'molesto' } },
            { term: 'relieved', translations: { de: 'erleichtert', es: 'aliviado' } },
            { term: 'proud (of)', translations: { de: 'stolz (auf)', es: 'orgulloso (de)' } },
          ],
        },
        {
          id: 'eni4-1-match',
          type: 'MATCHING',
          instruction: 'How do they feel? Match.',
          left: [
            { id: 'l1', text: 'Her exam results were better than expected.' },
            { id: 'l2', text: 'His friend has a new car and he wants one too.' },
            { id: 'l3', text: 'She moved to a new city and knows nobody.' },
            { id: 'l4', text: 'The lost keys were in his pocket all the time.' },
          ],
          right: [
            { id: 'r1', text: 'proud' },
            { id: 'r2', text: 'jealous' },
            { id: 'r3', text: 'lonely' },
            { id: 'r4', text: 'relieved' },
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

  // ====================================================== SEITE 2
  // Seite 2 – Phrasal Verbs.
  {
    order: 2,
    title: 'We get on well',
    subtitle: 'Phrasal Verbs für Beziehungen',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'eni4-2-h1', type: 'HEADING', level: 1, text: 'We get on well' },
        {
          id: 'eni4-2-text',
          type: 'TEXT',
          text: 'Ben talks about his friends: “I grew up in Brighton with my best friend Jake. We’ve always got on really well. When we were sixteen, we fell out over a girl and didn’t speak for months – but in the end we made up, and now we laugh about it. Jake’s sister Amy and her boyfriend broke up last year, and Jake looked after her for a few weeks. She’s fine now. She’s just started going out with someone new.”',
        },
        {
          id: 'eni4-2-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Phrasal verbs',
          text: 'A phrasal verb is a verb + a small word (on, out, up, after …). Together they often have a meaning you can’t guess from the parts: “get on” with someone has nothing to do with getting on a bus. Learn them like new words, with an example sentence. Some take an object in the middle, some at the end: “She looks after her brother.”',
          table: {
            headers: ['phrasal verb', 'meaning'],
            rows: [
              ['get on (with sb)', 'have a good relationship'],
              ['fall out (with sb)', 'have an argument and stop being friends'],
              ['make up', 'become friends again after an argument'],
              ['break up (with sb)', 'end a romantic relationship'],
              ['look after sb', 'take care of sb'],
              ['go out (with sb)', 'have a romantic relationship'],
              ['grow up', 'become an adult'],
            ],
          },
        },
        {
          id: 'eni4-2-match',
          type: 'MATCHING',
          instruction: 'Match the phrasal verb with its meaning.',
          left: [
            { id: 'l1', text: 'fall out' },
            { id: 'l2', text: 'make up' },
            { id: 'l3', text: 'break up' },
            { id: 'l4', text: 'look after' },
          ],
          right: [
            { id: 'r1', text: 'have an argument' },
            { id: 'r2', text: 'be friends again' },
            { id: 'r3', text: 'end a relationship' },
            { id: 'r4', text: 'take care of' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'eni4-2-cloze',
          type: 'CLOZE',
          instruction: 'Complete the text with the phrasal verbs.',
          wordBank: ['grew', 'get', 'fell', 'made', 'looked'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Ben ' },
            { kind: 'GAP', gapId: 'v1', solution: ['grew'], width: 6 },
            { kind: 'TEXT', text: ' up in Brighton. He and Jake always ' },
            { kind: 'GAP', gapId: 'v2', solution: ['get'], width: 5 },
            { kind: 'TEXT', text: ' on well. At sixteen they ' },
            { kind: 'GAP', gapId: 'v3', solution: ['fell'], width: 5 },
            { kind: 'TEXT', text: ' out, but later they ' },
            { kind: 'GAP', gapId: 'v4', solution: ['made'], width: 6 },
            { kind: 'TEXT', text: ' up. Jake ' },
            { kind: 'GAP', gapId: 'v5', solution: ['looked'], width: 7 },
            { kind: 'TEXT', text: ' after his sister.' },
          ],
        },
        {
          id: 'eni4-2-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct meaning.',
          question: '“Amy and Leo broke up last year.”',
          options: [
            { id: 'o1', text: 'They started a relationship.' },
            { id: 'o2', text: 'They ended their relationship.' },
            { id: 'o3', text: 'They had a car accident.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: '“break up” means to end a romantic relationship.',
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – must, have to, mustn’t, don’t have to, should.
  {
    order: 3,
    title: 'You don’t have to …',
    subtitle: 'Pflicht, Verbot, Rat',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'eni4-3-h1', type: 'HEADING', level: 1, text: 'You don’t have to …' },
        {
          id: 'eni4-3-text',
          type: 'TEXT',
          text: 'Flatmate rules – 14 Albert Road\n\n• You have to pay the rent by the 1st of each month.\n• You mustn’t smoke inside the flat.\n• You don’t have to eat together, but it’s nice if you join us on Sundays!\n• You should tell the others if you’re having guests for the night.\n• We must keep the kitchen clean – it’s the only way to stay friends!',
        },
        {
          id: 'eni4-3-info',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'mustn’t ≠ muss nicht',
          text: 'This is one of the most dangerous “false friends”. “You mustn’t” means it is forbidden: “Du darfst nicht”. “You don’t have to” means it isn’t necessary: “Du musst nicht”. “must” and “have to” are both obligation; “must” is often the speaker’s own feeling or a written rule, “have to” an obligation from outside.',
          table: {
            headers: ['English', 'meaning', 'German'],
            rows: [
              ['You must / have to pay.', 'obligation', 'Du musst zahlen.'],
              ['You mustn’t smoke.', 'forbidden', 'Du darfst nicht rauchen.'],
              ['You don’t have to eat with us.', 'not necessary', 'Du musst nicht mit uns essen.'],
              ['You should tell us.', 'good idea, advice', 'Du solltest es uns sagen.'],
            ],
          },
        },
        {
          id: 'eni4-3-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct translation.',
          question: '“Du musst nicht kommen, wenn du keine Zeit hast.”',
          options: [
            { id: 'o1', text: 'You mustn’t come if you haven’t got time.' },
            { id: 'o2', text: 'You don’t have to come if you haven’t got time.' },
            { id: 'o3', text: 'You haven’t to come if you haven’t got time.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: '“nicht müssen” = not necessary = “don’t have to”. “mustn’t” would mean that it is forbidden to come.',
        },
        {
          id: 'eni4-3-cloze',
          type: 'CLOZE',
          instruction: 'Complete with have to, mustn’t, don’t have to or should.',
          wordBank: ['have to', 'mustn’t', 'don’t have to', 'should'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'You ' },
            { kind: 'GAP', gapId: 'm1', solution: ['have to'], width: 13 },
            { kind: 'TEXT', text: ' pay the rent by the 1st. You ' },
            { kind: 'GAP', gapId: 'm2', solution: ['mustn’t', "mustn't"], width: 13 },
            { kind: 'TEXT', text: ' smoke inside. You ' },
            { kind: 'GAP', gapId: 'm3', solution: ['don’t have to', "don't have to"], width: 13 },
            { kind: 'TEXT', text: ' eat with us, but you ' },
            { kind: 'GAP', gapId: 'm4', solution: ['should'], width: 13 },
            { kind: 'TEXT', text: ' tell us about guests.' },
          ],
        },
        {
          id: 'eni4-3-info-past',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'must in the past: had to',
          text: '“must” has no past form. For the past, use “had to”: “I had to work late yesterday.” The negative is “didn’t have to”: “We didn’t have to pay – it was free!”',
        },
        {
          id: 'eni4-3-match',
          type: 'MATCHING',
          instruction: 'Match the rule with its meaning.',
          left: [
            { id: 'l1', text: 'You mustn’t park here.' },
            { id: 'l2', text: 'You don’t have to book.' },
            { id: 'l3', text: 'You have to show your ticket.' },
            { id: 'l4', text: 'You should arrive early.' },
          ],
          right: [
            { id: 'r1', text: 'It’s not allowed.' },
            { id: 'r2', text: 'It’s not necessary.' },
            { id: 'r3', text: 'It’s necessary.' },
            { id: 'r4', text: 'It’s a good idea.' },
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

  // ====================================================== SEITE 4
  // Seite 4 – each other und Reflexivpronomen.
  {
    order: 4,
    title: 'Each other',
    subtitle: 'each other und Reflexivpronomen',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'eni4-4-h1', type: 'HEADING', level: 1, text: 'Each other' },
        {
          id: 'eni4-4-dlg',
          type: 'DIALOGUE',
          title: 'After an argument',
          lines: [
            { speaker: 'Sophie', text: 'Are you and Jake OK? You didn’t talk to each other all evening.' },
            { speaker: 'Ben', text: 'We had a stupid argument about money. I blame myself, really.' },
            { speaker: 'Sophie', text: 'Don’t be so hard on yourself. You’ve known each other for twenty years.' },
            { speaker: 'Ben', text: 'You’re right. I’ll call him tomorrow – we always sort things out ourselves.' },
          ],
        },
        {
          id: 'eni4-4-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'myself – each other',
          text: 'German “sich” has two jobs in English. If the action goes back to the same person, use a reflexive pronoun: “I blame myself.” If two or more people do it to one another, use “each other”: “Ben and Jake didn’t talk to each other.” Many German reflexive verbs are NOT reflexive in English: sich treffen = meet, sich erinnern = remember, sich entspannen = relax, sich fühlen = feel.',
          table: {
            headers: ['reflexive', 'example'],
            rows: [
              ['myself / yourself', 'I hurt myself. / Look after yourself!'],
              ['himself / herself / itself', 'She taught herself Spanish.'],
              ['ourselves / yourselves / themselves', 'They enjoyed themselves.'],
              ['each other', 'We see each other every day.'],
            ],
          },
        },
        {
          id: 'eni4-4-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct translation.',
          question: '“Wir treffen uns um acht.”',
          options: [
            { id: 'o1', text: 'We meet ourselves at eight.' },
            { id: 'o2', text: 'We meet each other at eight.' },
            { id: 'o3', text: 'We’re meeting at eight.' },
          ],
          multiple: false,
          solution: ['o3'],
          explanation: '“meet” is not reflexive in English, and “each other” is normally not needed with “meet”. A fixed arrangement uses the present continuous.',
        },
        {
          id: 'eni4-4-cloze',
          type: 'CLOZE',
          instruction: 'Complete with a reflexive pronoun or each other.',
          wordBank: ['myself', 'yourself', 'herself', 'themselves', 'each other'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'I cut ' },
            { kind: 'GAP', gapId: 'x1', solution: ['myself'], width: 10 },
            { kind: 'TEXT', text: ' while I was cooking. Amy taught ' },
            { kind: 'GAP', gapId: 'x2', solution: ['herself'], width: 10 },
            { kind: 'TEXT', text: ' to play the guitar. Did the children enjoy ' },
            { kind: 'GAP', gapId: 'x3', solution: ['themselves'], width: 11 },
            { kind: 'TEXT', text: '? Ben and Jake have known ' },
            { kind: 'GAP', gapId: 'x4', solution: ['each other'], width: 11 },
            { kind: 'TEXT', text: ' since school. Take care of ' },
            { kind: 'GAP', gapId: 'x5', solution: ['yourself'], width: 10 },
            { kind: 'TEXT', text: '!' },
          ],
        },
        {
          id: 'eni4-4-choice2',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: '“Ich kann mich nicht an seinen Namen erinnern.”',
          options: [
            { id: 'o1', text: 'I can’t remember myself his name.' },
            { id: 'o2', text: 'I can’t remember his name.' },
            { id: 'o3', text: 'I can’t remember me his name.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: '“remember” is not reflexive in English.',
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – eine Ratgeberkolumne.
  {
    order: 5,
    title: 'Dear Annie',
    subtitle: 'Eine Ratgeberkolumne lesen und beantworten',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'eni4-5-h1', type: 'HEADING', level: 1, text: 'Dear Annie' },
        {
          id: 'eni4-5-letter',
          type: 'TEXT',
          text: 'Dear Annie,\nMy best friend and I have shared a flat for two years, and we used to get on really well. But since she started going out with her new boyfriend, he’s at our flat almost every day. He eats our food, leaves the bathroom in a mess and never helps with the cleaning. I don’t want to fall out with my friend, but I’m getting more and more annoyed. What should I do?\nFrustrated flatmate',
        },
        {
          id: 'eni4-5-reply',
          type: 'TEXT',
          text: 'Dear Frustrated flatmate,\nYou’re not being unreasonable – you pay rent, he doesn’t. But you mustn’t wait until you explode. You should talk to your friend when you’re both relaxed, not in the middle of an argument. Tell her how you feel, but don’t attack her boyfriend. You could suggest some simple rules, for example that guests have to help with the cleaning. If he stays more than three nights a week, he should probably pay something towards the bills. Good friendships can survive a difficult conversation – I’m sure you’ll sort it out.\nAnnie',
        },
        {
          id: 'eni4-5-choice',
          type: 'CHOICE',
          instruction: 'Mark all the pieces of advice Annie gives.',
          question: 'What does Annie suggest?',
          options: [
            { id: 'r1', text: 'Talk to your friend when you are both calm.' },
            { id: 'r2', text: 'Tell the boyfriend to leave immediately.' },
            { id: 'r3', text: 'Suggest some simple flat rules.' },
            { id: 'r4', text: 'Look for a new flat.' },
          ],
          multiple: true,
          solution: ['r1', 'r3'],
          explanation: 'Annie says to talk when relaxed and to suggest rules. She says not to attack the boyfriend, and she doesn’t mention moving out.',
        },
        {
          id: 'eni4-5-info',
          type: 'INFO',
          variant: 'TIP',
          title: 'Giving advice',
          text: 'Advice sounds friendlier with a mix of phrases: “You should …”, “You could …”, “Why don’t you …?”, “If I were you, I’d …”, “It might be a good idea to …”. Use “must” and “mustn’t” only for really important points.',
        },
        {
          id: 'eni4-5-match',
          type: 'MATCHING',
          instruction: 'Match the problem with the advice.',
          left: [
            { id: 'l1', text: 'I always fall out with my sister.' },
            { id: 'l2', text: 'I feel lonely in my new town.' },
            { id: 'l3', text: 'My friend is always late.' },
          ],
          right: [
            { id: 'r1', text: 'Why don’t you spend some time together, just the two of you?' },
            { id: 'r2', text: 'You could join a club or a sports team.' },
            { id: 'r3', text: 'If I were you, I’d tell her how it makes you feel.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
          ],
        },
        {
          id: 'eni4-5-writing',
          type: 'WRITING',
          instruction: 'Write a reply to a problem letter.',
          prompt:
            'A reader writes: “My best friend has moved to another country and we hardly talk any more. I miss her, but I feel she’s too busy with her new life. What should I do?” Write Annie’s reply (120–160 words). Use should, could, don’t have to and at least one phrasal verb.',
          minWords: 100,
          maxWords: 200,
          aiFeedback: true,
          sampleAnswer:
            'Dear reader,\nIt’s completely normal to feel like this. When a friend moves abroad, everything changes for both of you, and it doesn’t mean she doesn’t care. You should tell her that you miss her – she might feel exactly the same. You don’t have to talk every day; a regular video call once a week or once a month can be enough to keep a friendship alive. You could also send her small things from home, like photos or her favourite sweets. If you can, why don’t you plan a visit? Seeing her new life will help you understand it. Good friends can grow apart for a while, but they often find their way back to each other. Look after yourself, and try not to take it personally.\nAnnie',
        },
      ],
    },
  },
];
