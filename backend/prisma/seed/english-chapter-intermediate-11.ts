import type { UnitSeed } from './chapter-beginner-1';

/**
 * Englisch, Intermediate, Kapitel 11: „Arts and culture“ (B2, Kapitel 5)
 *
 * Beschreiben, bewerten, deuten. Seite 1 die steigernden Adjektive
 * (very good, absolutely brilliant – aber nicht „very brilliant“), Seite 2
 * zusammengesetzte Adjektive und die Sprache der Rezension, Seite 3
 * Vermutungen über die Vergangenheit (must have, might have, can’t have),
 * Seite 4 die vorsichtige Deutung eines Bildes, Seite 5 die eigene Rezension.
 *
 * Werke, Künstler und Ausstellungen sind erfunden. Einsprachig englisch;
 * Vokabeln mit `de` und `es`.
 */
const v = 1;

export const ENGLISH_INTERMEDIATE_11_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – steigernde Adjektive.
  {
    order: 1,
    title: 'Absolutely brilliant',
    subtitle: 'Steigernde und absolute Adjektive',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'eni11-1-h1', type: 'HEADING', level: 1, text: 'Absolutely brilliant' },
        {
          id: 'eni11-1-dlg',
          type: 'DIALOGUE',
          title: 'After the film',
          lines: [
            { speaker: 'Priya', text: 'So, what did you think?' },
            { speaker: 'Ben', text: 'I thought it was absolutely brilliant. The ending was really moving.' },
            { speaker: 'Sophie', text: 'Really? I found it a bit slow. The first hour was extremely boring.' },
            { speaker: 'Ben', text: 'Boring? The photography was absolutely stunning!' },
            { speaker: 'Priya', text: 'I agree with Sophie – it was quite good, but not amazing.' },
          ],
        },
        {
          id: 'eni11-1-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Gradable and extreme adjectives',
          text: 'Normal (gradable) adjectives like good, bad, big or interesting can be made stronger with very, extremely or really. Extreme (non-gradable) adjectives like brilliant, awful, huge or fascinating already contain the idea of “very” – they go with absolutely, completely or really, but not with very. So: “very good” and “absolutely brilliant”, but not “very brilliant”. “Really” works with both.',
          table: {
            headers: ['very / extremely + …', 'absolutely + …'],
            rows: [
              ['good', 'brilliant, fantastic, amazing'],
              ['bad', 'awful, terrible, dreadful'],
              ['interesting', 'fascinating'],
              ['big', 'huge, enormous'],
              ['surprised', 'astonished, amazed'],
              ['tired', 'exhausted'],
            ],
          },
        },
        {
          id: 'eni11-1-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'Which sentence is correct?',
          options: [
            { id: 'o1', text: 'The concert was very fantastic.' },
            { id: 'o2', text: 'The concert was absolutely fantastic.' },
            { id: 'o3', text: 'The concert was absolutely good.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: '“fantastic” is an extreme adjective, so it goes with “absolutely”. “good” would go with “very”.',
        },
        {
          id: 'eni11-1-cloze',
          type: 'CLOZE',
          instruction: 'Complete with very or absolutely.',
          wordBank: ['very', 'absolutely'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'The museum was ' },
            { kind: 'GAP', gapId: 'a1', solution: ['absolutely'], width: 11 },
            { kind: 'TEXT', text: ' huge. The guide was ' },
            { kind: 'GAP', gapId: 'a2', solution: ['very'], width: 11 },
            { kind: 'TEXT', text: ' interesting, but after four hours we were ' },
            { kind: 'GAP', gapId: 'a3', solution: ['absolutely'], width: 11 },
            { kind: 'TEXT', text: ' exhausted. The café was ' },
            { kind: 'GAP', gapId: 'a4', solution: ['very'], width: 11 },
            { kind: 'TEXT', text: ' expensive.' },
          ],
        },
        {
          id: 'eni11-1-match',
          type: 'MATCHING',
          instruction: 'Match the normal adjective with the extreme one.',
          left: [
            { id: 'l1', text: 'very interesting' },
            { id: 'l2', text: 'very bad' },
            { id: 'l3', text: 'very tired' },
            { id: 'l4', text: 'very big' },
          ],
          right: [
            { id: 'r1', text: 'fascinating' },
            { id: 'r2', text: 'awful' },
            { id: 'r3', text: 'exhausted' },
            { id: 'r4', text: 'enormous' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'eni11-1-info-quite',
          type: 'INFO',
          variant: 'TIP',
          title: 'quite, fairly, rather',
          text: 'In British English, “quite good” often means “okay, not great” – it can sound disappointed, depending on intonation. “rather” is often used for negative surprises (“rather long”). With extreme adjectives, “quite” means “completely”: “quite amazing” = absolutely amazing.',
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – zusammengesetzte Adjektive, Rezensionssprache.
  {
    order: 2,
    title: 'A well-written, two-hour drama',
    subtitle: 'Zusammengesetzte Adjektive und Rezensionen',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'eni11-2-h1', type: 'HEADING', level: 1, text: 'A well-written, two-hour drama' },
        {
          id: 'eni11-2-text',
          type: 'TEXT',
          text: 'Review: The Lighthouse Keeper ★★★★☆\n\nSet on a remote Scottish island in the 1950s, this beautifully shot, slow-moving drama follows a lighthouse keeper whose quiet life is changed by the arrival of a mysterious stranger. The two-hour film is carried by an outstanding performance from Ellen Hart, whose character is both strong-willed and deeply lonely. The plot is not always easy to follow, and some viewers may find the ending a little too open. Nevertheless, it is a thought-provoking, well-written film that stays with you long after the credits have rolled.',
        },
        {
          id: 'eni11-2-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Compound adjectives',
          text: 'Compound adjectives combine two words with a hyphen and go before a noun. Common patterns: adverb + past participle (well-written, badly paid), adjective + -ing (slow-moving, good-looking), noun + -ing (thought-provoking, record-breaking), number + noun (a two-hour film, a five-star hotel). Note: the noun stays singular – “a two-hour film”, not “a two-hours film”.',
          table: {
            headers: ['pattern', 'examples'],
            rows: [
              ['adverb + past participle', 'well-written, beautifully shot'],
              ['adjective + -ing', 'slow-moving, long-lasting'],
              ['noun + -ing', 'thought-provoking, award-winning'],
              ['number + noun', 'a two-hour film, a ten-minute break'],
              ['adjective + noun + -ed', 'strong-willed, open-minded'],
            ],
          },
        },
        {
          id: 'eni11-2-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct phrase.',
          question: 'The walk takes three hours.',
          options: [
            { id: 'o1', text: 'a three-hours walk' },
            { id: 'o2', text: 'a three-hour walk' },
            { id: 'o3', text: 'a three hour’s walk' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'In a compound adjective, the noun stays singular: “a three-hour walk”.',
        },
        {
          id: 'eni11-2-vocab',
          type: 'VOCAB_LIST',
          title: 'Words: reviews',
          items: [
            { term: 'plot', translations: { de: 'die Handlung', es: 'el argumento, la trama' } },
            { term: 'performance', translations: { de: 'die schauspielerische Leistung', es: 'la interpretación' } },
            { term: 'to be set in', translations: { de: 'spielen in (Ort/Zeit)', es: 'estar ambientado en' } },
            { term: 'cast', translations: { de: 'die Besetzung', es: 'el reparto' } },
            { term: 'moving', translations: { de: 'bewegend', es: 'conmovedor' } },
            { term: 'thought-provoking', translations: { de: 'zum Nachdenken anregend', es: 'que hace reflexionar' } },
            { term: 'predictable', translations: { de: 'vorhersehbar', es: 'previsible' } },
            { term: 'outstanding', translations: { de: 'herausragend', es: 'excepcional' } },
          ],
        },
        {
          id: 'eni11-2-cloze',
          type: 'CLOZE',
          instruction: 'Complete the review with compound adjectives.',
          wordBank: ['award-winning', 'well-known', 'slow-moving', 'two-hour', 'open-minded'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'This ' },
            { kind: 'GAP', gapId: 'c1', solution: ['award-winning'], width: 14 },
            { kind: 'TEXT', text: ' novel by a ' },
            { kind: 'GAP', gapId: 'c2', solution: ['well-known'], width: 14 },
            { kind: 'TEXT', text: ' author has become a ' },
            { kind: 'GAP', gapId: 'c3', solution: ['two-hour'], width: 14 },
            { kind: 'TEXT', text: ' film. The story is rather ' },
            { kind: 'GAP', gapId: 'c4', solution: ['slow-moving'], width: 14 },
            { kind: 'TEXT', text: ', but ' },
            { kind: 'GAP', gapId: 'c5', solution: ['open-minded'], width: 14 },
            { kind: 'TEXT', text: ' viewers will enjoy it.' },
          ],
        },
        {
          id: 'eni11-2-choice2',
          type: 'CHOICE',
          instruction: 'Mark all the criticisms in the review.',
          question: 'What does the reviewer NOT like?',
          options: [
            { id: 'r1', text: 'The plot is sometimes hard to follow.' },
            { id: 'r2', text: 'The photography is poor.' },
            { id: 'r3', text: 'The ending may be too open.' },
            { id: 'r4', text: 'Ellen Hart’s performance is weak.' },
          ],
          multiple: true,
          solution: ['r1', 'r3'],
          explanation: 'The film is “beautifully shot” and the performance “outstanding”. The criticisms are the plot and the ending.',
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – must have, might have, can’t have.
  {
    order: 3,
    title: 'It must have been painted …',
    subtitle: 'Vermutungen über die Vergangenheit',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'eni11-3-h1', type: 'HEADING', level: 1, text: 'It must have been painted …' },
        {
          id: 'eni11-3-text',
          type: 'TEXT',
          text: 'The mystery painting\n\nIn 2019, a small painting was found in the attic of a farmhouse in Norfolk. It shows a woman reading a letter by a window. The style is similar to the work of a famous 17th-century Dutch painter, but there is no signature. Experts disagree. “It must have been painted in Holland – the pigments are typical of that period,” says one. “The artist might have been one of his students,” says another. A third is sceptical: “It can’t have been painted by the master himself; the hands are far too clumsy.” How it ended up in an English farmhouse is still unknown. Someone may have brought it back from a trip, or it could have been a gift.',
        },
        {
          id: 'eni11-3-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Modal + have + past participle',
          text: 'To guess about the past, use a modal verb + have + past participle. The modal shows how sure you are. “must have” = I’m sure it happened. “might / may / could have” = it’s possible. “can’t / couldn’t have” = I’m sure it didn’t happen. In the passive: must have been painted.',
          table: {
            headers: ['certainty', 'example'],
            rows: [
              ['sure: yes', 'It must have been painted in Holland.'],
              ['possible', 'A student might / may / could have painted it.'],
              ['sure: no', 'The master can’t have painted it.'],
            ],
          },
        },
        {
          id: 'eni11-3-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'Anna’s light was on all night and she looks exhausted. What do you think?',
          options: [
            { id: 'o1', text: 'She can’t have slept much.' },
            { id: 'o2', text: 'She must have slept very well.' },
            { id: 'o3', text: 'She mustn’t have slept.' },
          ],
          multiple: false,
          solution: ['o1'],
          explanation: 'You’re sure she didn’t sleep much: “can’t have slept”. “mustn’t have” is not used for deductions.',
        },
        {
          id: 'eni11-3-cloze',
          type: 'CLOZE',
          instruction: 'Complete with must have, might have or can’t have.',
          wordBank: ['must have', 'might have', 'can’t have'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'The pigments are from the 17th century, so it ' },
            { kind: 'GAP', gapId: 'm1', solution: ['must have'], width: 11 },
            { kind: 'TEXT', text: ' been painted then. We don’t know who brought it – a traveller ' },
            { kind: 'GAP', gapId: 'm2', solution: ['might have'], width: 11 },
            { kind: 'TEXT', text: ' bought it abroad. The hands are clumsy, so the master ' },
            { kind: 'GAP', gapId: 'm3', solution: ['can’t have', "can't have"], width: 11 },
            { kind: 'TEXT', text: ' painted it himself.' },
          ],
        },
        {
          id: 'eni11-3-match',
          type: 'MATCHING',
          instruction: 'Match the situation with the best deduction.',
          left: [
            { id: 'l1', text: 'The streets are wet.' },
            { id: 'l2', text: 'Tom isn’t answering his phone.' },
            { id: 'l3', text: 'Priya was in Paris yesterday.' },
          ],
          right: [
            { id: 'r1', text: 'It must have rained.' },
            { id: 'r2', text: 'He might have left it at home.' },
            { id: 'r3', text: 'She can’t have been at the London meeting.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
          ],
        },
        {
          id: 'eni11-3-info-should',
          type: 'INFO',
          variant: 'TIP',
          title: 'should have – criticism',
          text: '“should have + past participle” is not a deduction but a criticism or regret: “You should have told me!” (you didn’t). “shouldn’t have” = it was a mistake: “I shouldn’t have eaten so much.”',
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – ein Bild deuten.
  {
    order: 4,
    title: 'The artist seems to suggest …',
    subtitle: 'Kunst beschreiben und deuten',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'eni11-4-h1', type: 'HEADING', level: 1, text: 'The artist seems to suggest …' },
        {
          id: 'eni11-4-text',
          type: 'TEXT',
          text: 'Gallery guide: “Morning Platform” by Nadia Osei (2021)\n\nIn the foreground of this large oil painting, a woman in a red coat waits alone on a railway platform. In the background, a crowd of grey figures hurries towards the exit. The only bright colour in the picture is her coat, which immediately draws the viewer’s eye. The woman is looking at the clock, but its hands are missing.\n\nThe missing hands appear to suggest that time has stopped for her – perhaps she is waiting for someone who will never arrive. The contrast between her stillness and the rushing crowd could be interpreted as a comment on loneliness in modern cities. Osei herself has said only that the painting is “about the moments between”.',
        },
        {
          id: 'eni11-4-info',
          type: 'INFO',
          variant: 'TIP',
          title: 'Describing and interpreting art',
          text: 'First describe what you see, using place words (in the foreground, in the background, on the left, in the top right-hand corner). Then interpret, and hedge your interpretation – there is rarely one correct answer. Useful phrases: “It seems to / appears to suggest …”, “This could be interpreted as …”, “Perhaps the artist wanted to …”, “It reminds me of …”.',
          table: {
            headers: ['describe', 'interpret'],
            rows: [
              ['In the foreground, there is …', 'This seems to suggest that …'],
              ['On the left, we can see …', 'It could be interpreted as …'],
              ['The colours are dark and cold.', 'Perhaps the artist wanted to show …'],
            ],
          },
        },
        {
          id: 'eni11-4-choice',
          type: 'CHOICE',
          instruction: 'Answer the question about the text.',
          question: 'What might the missing clock hands mean, according to the guide?',
          options: [
            { id: 'o1', text: 'The station is closed.' },
            { id: 'o2', text: 'Time has stopped for the woman.' },
            { id: 'o3', text: 'The painting is unfinished.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'The guide says the missing hands “appear to suggest that time has stopped for her”.',
        },
        {
          id: 'eni11-4-match',
          type: 'MATCHING',
          instruction: 'Description or interpretation? Match.',
          left: [
            { id: 'l1', text: 'A woman in a red coat waits alone.' },
            { id: 'l2', text: 'The contrast could be a comment on loneliness.' },
            { id: 'l3', text: 'In the background, a crowd hurries away.' },
            { id: 'l4', text: 'Perhaps she is waiting for someone who won’t come.' },
          ],
          right: [
            { id: 'r1', text: 'description (foreground)' },
            { id: 'r2', text: 'interpretation (society)' },
            { id: 'r3', text: 'description (background)' },
            { id: 'r4', text: 'interpretation (the woman)' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'eni11-4-cloze',
          type: 'CLOZE',
          instruction: 'Complete the description.',
          wordBank: ['foreground', 'background', 'seems', 'interpreted', 'draws'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'In the ' },
            { kind: 'GAP', gapId: 'd1', solution: ['foreground'], width: 11 },
            { kind: 'TEXT', text: ' there is a woman; in the ' },
            { kind: 'GAP', gapId: 'd2', solution: ['background'], width: 11 },
            { kind: 'TEXT', text: ' there is a crowd. Her red coat ' },
            { kind: 'GAP', gapId: 'd3', solution: ['draws'], width: 7 },
            { kind: 'TEXT', text: ' the viewer’s eye. The painting ' },
            { kind: 'GAP', gapId: 'd4', solution: ['seems'], width: 7 },
            { kind: 'TEXT', text: ' to be about waiting, and it could be ' },
            { kind: 'GAP', gapId: 'd5', solution: ['interpreted'], width: 12 },
            { kind: 'TEXT', text: ' as a comment on city life.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – eine Rezension schreiben.
  {
    order: 5,
    title: 'Write a review',
    subtitle: 'Eine Rezension schreiben',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'eni11-5-h1', type: 'HEADING', level: 1, text: 'Write a review' },
        {
          id: 'eni11-5-info',
          type: 'INFO',
          variant: 'TIP',
          title: 'Structure of a review',
          text: 'A review informs and evaluates. Start with the basic facts (title, type, setting, who made it) and a hook. Give a short summary without spoiling the ending. Then evaluate strengths and weaknesses with precise adjectives and examples. End with a recommendation: who would enjoy it, and how much you would recommend it.',
        },
        {
          id: 'eni11-5-order',
          type: 'ORDERING',
          instruction: 'Put the parts of a review in order.',
          items: [
            { id: 'p1', text: 'Basic facts and a hook' },
            { id: 'p2', text: 'A short summary (no spoilers!)' },
            { id: 'p3', text: 'Strengths, with examples' },
            { id: 'p4', text: 'Weaknesses, with examples' },
            { id: 'p5', text: 'Recommendation' },
          ],
          solution: ['p1', 'p2', 'p3', 'p4', 'p5'],
        },
        {
          id: 'eni11-5-match',
          type: 'MATCHING',
          instruction: 'Match the phrase with its purpose in a review.',
          left: [
            { id: 'l1', text: 'Set in 1920s Berlin, the novel …' },
            { id: 'l2', text: 'What really stands out is …' },
            { id: 'l3', text: 'My only criticism is that …' },
            { id: 'l4', text: 'I’d highly recommend it to anyone who …' },
          ],
          right: [
            { id: 'r1', text: 'giving basic facts' },
            { id: 'r2', text: 'praising a strength' },
            { id: 'r3', text: 'mentioning a weakness' },
            { id: 'r4', text: 'recommending' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'eni11-5-choice',
          type: 'CHOICE',
          instruction: 'Choose the most precise sentence for a review.',
          question: 'Which sentence gives the reader the most information?',
          options: [
            { id: 'o1', text: 'The film was very good and the actors were good too.' },
            { id: 'o2', text: 'The film’s fast-paced plot keeps you guessing, and Ellen Hart gives an absolutely outstanding performance.' },
            { id: 'o3', text: 'I liked the film a lot.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'Precise compound and extreme adjectives (fast-paced, absolutely outstanding) and a concrete detail make a review useful.',
        },
        {
          id: 'eni11-5-writing',
          type: 'WRITING',
          instruction: 'Write a review.',
          prompt:
            'Write a review (200–260 words) of a film, series, book, exhibition or concert you have seen recently. Use at least two compound adjectives, one extreme adjective with “absolutely”, and one sentence with must/might/can’t have.',
          minWords: 180,
          maxWords: 300,
          aiFeedback: true,
          sampleAnswer:
            'Small Rooms – a quietly brilliant series\n\nIf you are looking for a thought-provoking series that doesn’t rely on car chases and explosions, Small Rooms might be exactly what you need. Set in a run-down block of flats in Glasgow, this six-part drama follows four neighbours whose lives slowly become connected after a fire in the building.\n\nWhat really stands out is the writing. The dialogue is sharp and often very funny, even when the characters are dealing with serious problems such as debt, illness and loneliness. The acting is absolutely outstanding, especially from newcomer Aisha Grant as a teenage girl caring for her grandfather. She must have spent months preparing for the role, because every gesture feels completely natural.\n\nThe series is also beautifully shot. The camera rarely leaves the building, which creates a claustrophobic atmosphere that matches the characters’ feelings of being trapped.\n\nMy only criticism is that the fifth episode is rather slow-moving, and one storyline about a missing cat never really goes anywhere. The writers might have been trying to add some light relief, but it doesn’t quite work.\n\nOverall, Small Rooms is a warm, well-acted and deeply human series. I’d highly recommend it to anyone who enjoys character-driven drama – just keep a box of tissues nearby for the final episode.',
        },
      ],
    },
  },
];
