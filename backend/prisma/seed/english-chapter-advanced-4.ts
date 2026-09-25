import type { UnitSeed } from './chapter-beginner-1';

/**
 * Englisch, Advanced, Kapitel 4: „Literature in English“ (C1, Kapitel 4)
 *
 * Fünf Seiten. Das Werkzeug zum Deuten literarischer Texte: Erzählinstanz,
 * Stilmittel, Epochen – und die englische Textsorte, in der das alles
 * zusammenkommt, der close-reading essay.
 *
 * Aufbau: Seite 1 Analysewortschatz, Seite 2 Erzählperspektive und free
 * indirect speech, Seite 3 Stilmittel, Seite 4 Epochen und Kontext,
 * Seite 5 eine Interpretation schreiben.
 *
 * Zitiert werden nur gemeinfreie Texte (Shakespeare, Wordsworth, Austen,
 * Dickens, Poe, Dickinson, Joyce, Woolf) und nur in kurzen Auszügen. Die
 * Prosabeispiele ohne Quellenangabe sind eigens verfasst.
 */
const v = 1;

export const ENGLISH_ADVANCED_4_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  {
    order: 1,
    title: 'Reading closely',
    subtitle: 'Der Wortschatz der Textanalyse',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'ena4-1-h1', type: 'HEADING', level: 1, text: 'Reading closely' },
        {
          id: 'ena4-1-intro',
          type: 'TEXT',
          text: '“It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.” The first sentence of Jane Austen’s Pride and Prejudice (1813) sounds like a solemn general law. Within a few pages, the reader realises it is ironic: the “truth” is really the wishful thinking of mothers with unmarried daughters. Reading literature at this level means noticing not only what a text says but how – and what the how does to the what.',
        },
        {
          id: 'ena4-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Words: analysing texts',
          items: [
            { term: 'narrator', translations: { de: 'der Erzähler', es: 'el narrador' } },
            { term: 'plot', translations: { de: 'die Handlung', es: 'la trama' } },
            { term: 'character', translations: { de: 'die Figur', es: 'el personaje' } },
            { term: 'theme', translations: { de: 'das Thema', es: 'el tema' } },
            { term: 'tone', translations: { de: 'der Ton, die Stimmung', es: 'el tono' } },
            { term: 'stanza', translations: { de: 'die Strophe', es: 'la estrofa' } },
            { term: 'line (of verse)', translations: { de: 'der Vers', es: 'el verso' } },
            { term: 'speaker (of a poem)', translations: { de: 'das lyrische Ich', es: 'el yo lírico' } },
            { term: 'imagery', translations: { de: 'die Bildsprache', es: 'las imágenes' } },
            { term: 'irony', translations: { de: 'die Ironie', es: 'la ironía' } },
            { term: 'to convey', translations: { de: 'vermitteln, ausdrücken', es: 'transmitir' } },
          ],
        },
        {
          id: 'ena4-1-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Plot, theme, tone',
          text: 'The plot is what happens, told in the present tense. The theme is what the text is really about, expressed with an abstract noun in one sentence. The tone is the attitude of the voice: ironic, nostalgic, detached, bitter. Literary analysis is written in the present tense: “Austen suggests”, not “Austen suggested”.',
          table: {
            headers: ['Term', 'Question', 'Example'],
            rows: [
              ['plot', 'What happens?', 'A young woman misjudges a rich man and later changes her mind.'],
              ['theme', 'What is it really about?', 'the danger of first impressions'],
              ['tone', 'With what attitude is it told?', 'witty, ironic, affectionate'],
            ],
          },
        },
        {
          id: 'ena4-1-choice',
          type: 'CHOICE',
          instruction: 'Choose the best statement of the theme.',
          question: 'A story tells how an old man keeps his emigrant son’s letters for decades without ever opening them. What is its theme?',
          options: [
            { id: 'c1', text: 'An old man keeps some letters in a drawer.' },
            { id: 'c2', text: 'The fear that reality might destroy memory.' },
            { id: 'c3', text: 'The story is very sad and well written.' },
            { id: 'c4', text: 'Emigration in the twentieth century and its economic causes.' },
          ],
          multiple: false,
          solution: ['c2'],
          explanation:
            'A theme is abstract and stated in one line. The first option summarises the plot, the third is a personal judgement and the fourth names the context, not what the story is about.',
        },
        {
          id: 'ena4-1-cloze',
          type: 'CLOZE',
          instruction: 'Complete the analysis.',
          wordBank: ['stanzas', 'lines', 'speaker', 'imagery', 'tone'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'The poem consists of three ' },
            { kind: 'GAP', gapId: 'g1', solution: ['stanzas'], width: 8 },
            { kind: 'TEXT', text: ' of four ' },
            { kind: 'GAP', gapId: 'g2', solution: ['lines'], width: 6 },
            { kind: 'TEXT', text: ' each. The ' },
            { kind: 'GAP', gapId: 'g3', solution: ['speaker'], width: 8 },
            { kind: 'TEXT', text: ' addresses an absent lover. The ' },
            { kind: 'GAP', gapId: 'g4', solution: ['imagery'], width: 8 },
            { kind: 'TEXT', text: ' of winter and darkness dominates, and the ' },
            { kind: 'GAP', gapId: 'g5', solution: ['tone'], width: 5 },
            { kind: 'TEXT', text: ' moves from bitterness to acceptance.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  {
    order: 2,
    title: 'Who is telling the story?',
    subtitle: 'Erzählperspektive und erlebte Rede',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'ena4-2-h1', type: 'HEADING', level: 1, text: 'Who is telling the story?' },
        {
          id: 'ena4-2-intro',
          type: 'TEXT',
          text: 'The author writes; the narrator tells. The distinction seems academic until a narrator lies, is mistaken or knows less than the reader. Asking who is telling the story, from where and how much they know is the first step in analysing any narrative.',
        },
        {
          id: 'ena4-2-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Points of view',
          text: 'An omniscient narrator knows everything, including all characters’ thoughts, and may comment. A third-person limited narrator stays close to one character. A first-person narrator tells their own story – and may be unreliable. Second-person narration (“You open the door …”) is rare but powerful.',
          table: {
            headers: ['Point of view', 'Person', 'Knows …'],
            rows: [
              ['omniscient', 'third', 'everything, including all characters’ thoughts'],
              ['third-person limited', 'third', 'what one character knows'],
              ['first-person', 'first', 'what they experienced, as they interpret it'],
              ['unreliable narrator', 'usually first', 'less, or other, than they claim'],
              ['second-person', 'second', 'what the “you” experiences'],
            ],
          },
        },
        {
          id: 'ena4-2-match',
          type: 'MATCHING',
          instruction: 'Match each extract with its point of view.',
          left: [
            { id: 'l1', text: '“That summer my uncle stopped speaking. I was nine and thought it was a game.”' },
            { id: 'l2', text: '“Clara knew the train would not come. On the other platform, the stationmaster was thinking about his daughter.”' },
            { id: 'l3', text: '“You open the door slowly, as if someone could hear you. Nobody is waiting.”' },
          ],
          right: [
            { id: 'r1', text: 'first-person narrator telling someone else’s story' },
            { id: 'r2', text: 'omniscient narrator: knows several characters’ thoughts' },
            { id: 'r3', text: 'second-person narration' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
          ],
        },
        {
          id: 'ena4-2-info-fis',
          type: 'INFO',
          variant: 'TIP',
          title: 'Free indirect speech',
          text: 'Free indirect speech keeps the third person and the past tense of reported speech, but drops the reporting verb and takes on the character’s voice. Virginia Woolf’s Mrs Dalloway (1925) opens: “Mrs Dalloway said she would buy the flowers herself.” A few lines later: “What a lark! What a plunge!” – the exclamations are hers, not the narrator’s. It is the technique by which the modern novel slips into characters’ minds without announcing it.',
          table: {
            headers: ['Style', 'Example'],
            rows: [
              ['direct', 'She thought, “He won’t come. How could I have believed him?”'],
              ['indirect', 'She thought that he wouldn’t come and wondered how she could have believed him.'],
              ['free indirect', 'He wouldn’t come. How could she have believed him?'],
            ],
          },
        },
        {
          id: 'ena4-2-choice',
          type: 'CHOICE',
          instruction: 'Identify free indirect speech.',
          question: 'Which sentence is in free indirect speech?',
          options: [
            { id: 'e1', text: 'Julia said, “I’m leaving tomorrow and I’m never coming back.”' },
            { id: 'e2', text: 'Julia said that she was leaving the next day and would never come back.' },
            { id: 'e3', text: 'Julia closed her suitcase. She was leaving tomorrow, and she was never coming back – never.' },
            { id: 'e4', text: 'Julia left the next day and did not come back.' },
          ],
          multiple: false,
          solution: ['e3'],
          explanation:
            'The third sentence keeps the past tense and third person, but “tomorrow” and the insistent “never” are Julia’s own voice, without a reporting verb. The fourth is plain narration of events.',
        },
        {
          id: 'ena4-2-cloze',
          type: 'CLOZE',
          instruction: 'Turn the thought into free indirect speech: “Why hasn’t he called me? He must be angry.”',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Why ' },
            { kind: 'GAP', gapId: 'k1', solution: ['hadn’t', "hadn't"], hint: 'have not', width: 7 },
            { kind: 'TEXT', text: ' he called her? He ' },
            { kind: 'GAP', gapId: 'k2', solution: ['must'], hint: 'must', width: 5 },
            { kind: 'TEXT', text: ' be angry.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  {
    order: 3,
    title: 'Figures of speech',
    subtitle: 'Stilmittel benennen und deuten',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'ena4-3-h1', type: 'HEADING', level: 1, text: 'Figures of speech' },
        {
          id: 'ena4-3-intro',
          type: 'TEXT',
          text: 'Naming a figure of speech is not yet interpreting it. An essay that says “in line 3 there is a metaphor” has not said anything about the poem. The interesting part is the next question: what does the metaphor do that a literal phrase could not?',
        },
        {
          id: 'ena4-3-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Common figures of speech',
          text: 'All examples are from public-domain texts. Notice that most figures are simple operations – comparing, repeating, contrasting, giving life to things – and that their effect always depends on context.',
          table: {
            headers: ['Figure', 'Example'],
            rows: [
              ['simile', 'I wandered lonely as a cloud (Wordsworth)'],
              ['metaphor', '“Hope” is the thing with feathers (Dickinson)'],
              ['personification', 'Death … kindly stopped for me (Dickinson)'],
              ['antithesis', 'It was the best of times, it was the worst of times (Dickens)'],
              ['alliteration', 'While I nodded, nearly napping (Poe, “The Raven”)'],
              ['rhetorical question', 'Shall I compare thee to a summer’s day? (Shakespeare, Sonnet 18)'],
            ],
          },
        },
        {
          id: 'ena4-3-match',
          type: 'MATCHING',
          instruction: 'Match each line with its main figure of speech.',
          left: [
            { id: 'f1', text: 'I wandered lonely as a cloud' },
            { id: 'f2', text: 'It was the best of times, it was the worst of times' },
            { id: 'f3', text: '“Hope” is the thing with feathers' },
            { id: 'f4', text: 'While I nodded, nearly napping' },
          ],
          right: [
            { id: 'g1', text: 'simile' },
            { id: 'g2', text: 'antithesis' },
            { id: 'g3', text: 'metaphor' },
            { id: 'g4', text: 'alliteration' },
          ],
          solution: [
            { leftId: 'f1', rightId: 'g1' },
            { leftId: 'f2', rightId: 'g2' },
            { leftId: 'f3', rightId: 'g3' },
            { leftId: 'f4', rightId: 'g4' },
          ],
        },
        {
          id: 'ena4-3-info-effect',
          type: 'INFO',
          variant: 'TIP',
          title: 'From figure to effect',
          text: 'A good interpretation has three parts: the observation (which figure, where), the quotation as evidence and the function (what it does in context). Useful verbs: suggests, conveys, emphasises, evokes, underlines, contrasts.',
          table: {
            headers: ['Step', 'Example'],
            rows: [
              ['observation', 'In the first line, Dickinson uses a metaphor:'],
              ['evidence', 'hope is “the thing with feathers” (l. 1).'],
              ['function', 'The image of a bird suggests that hope is light, fragile and alive – something that lives inside us rather than an idea we hold.'],
            ],
          },
        },
        {
          id: 'ena4-3-choice',
          type: 'CHOICE',
          instruction: 'Choose the best interpretation.',
          question: 'Dickens opens A Tale of Two Cities (1859), set during the French Revolution, with “It was the best of times, it was the worst of times”. What does the antithesis achieve?',
          options: [
            { id: 'h1', text: 'It shows that Dickens could not decide how to describe the period.' },
            { id: 'h2', text: 'It presents the era as one of extreme contradictions, preparing the reader for a story of opposites.' },
            { id: 'h3', text: 'It is simply a nice rhythm with no particular meaning.' },
            { id: 'h4', text: 'It tells the reader that the story has a happy ending.' },
          ],
          multiple: false,
          solution: ['h2'],
          explanation:
            'The opening continues in a long series of such pairs. Together they set up a world of extremes – two cities, hope and despair – which the novel then explores.',
        },
        {
          id: 'ena4-3-cloze',
          type: 'CLOZE',
          instruction: 'Name the figure of speech.',
          wordBank: ['personification', 'simile', 'antithesis', 'alliteration'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '“The city slept with one eye open” is ' },
            { kind: 'GAP', gapId: 'r1', solution: ['personification'], width: 16 },
            { kind: 'TEXT', text: '. “As fragile as glass” is a ' },
            { kind: 'GAP', gapId: 'r2', solution: ['simile'], width: 7 },
            { kind: 'TEXT', text: '. “So much loved, so soon forgotten” is an ' },
            { kind: 'GAP', gapId: 'r3', solution: ['antithesis'], width: 11 },
            { kind: 'TEXT', text: ', and “silent, silver, sleeping sea” uses ' },
            { kind: 'GAP', gapId: 'r4', solution: ['alliteration'], width: 13 },
            { kind: 'TEXT', text: '.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  {
    order: 4,
    title: 'Texts in their time',
    subtitle: 'Epochen und Kontext',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'ena4-4-h1', type: 'HEADING', level: 1, text: 'Texts in their time' },
        {
          id: 'ena4-4-intro',
          type: 'TEXT',
          text: 'Placing a text in its period is not about sticking a label on it, but about recovering the questions it was answering. The Romantics’ love of nature makes more sense when you know that England was being transformed by factories and cities. Modernist fragmentation makes more sense after the First World War had shattered old certainties. Periods are not boxes; they are conversations.',
        },
        {
          id: 'ena4-4-info',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'Five moments in literature in English',
          text: 'This is a minimal map, not a canon. Note how, in the twentieth century, the centre of gravity shifts: writers from Nigeria, India, the Caribbean and elsewhere take English in new directions.',
          table: {
            headers: ['Period', 'Dates (approx.)', 'Features', 'Names'],
            rows: [
              ['Renaissance / Elizabethan', 'c. 1550–1660', 'sonnets, drama, rich rhetoric', 'Shakespeare, Marlowe'],
              ['Romanticism', 'c. 1790–1830', 'nature, emotion, imagination', 'Wordsworth, Keats, Mary Shelley'],
              ['Victorian', 'c. 1837–1901', 'social realism, industrial society', 'Dickens, George Eliot'],
              ['Modernism', 'c. 1910–1940', 'fragmentation, stream of consciousness', 'Woolf, Joyce, T. S. Eliot'],
              ['Postcolonial', 'from c. 1950', 'identity, empire, language', 'Achebe, Rushdie, Walcott'],
            ],
          },
        },
        {
          id: 'ena4-4-match',
          type: 'MATCHING',
          instruction: 'Match each description with its period.',
          left: [
            { id: 'm1', text: 'A poet walks in the hills and finds comfort in daffodils.' },
            { id: 'm2', text: 'A novel follows an orphan through the poverty of an industrial city.' },
            { id: 'm3', text: 'A novel follows one day in the mind of a woman, jumping between thoughts and memories.' },
            { id: 'm4', text: 'A Nigerian novel shows a village before and after the arrival of British missionaries.' },
          ],
          right: [
            { id: 'n1', text: 'Romanticism' },
            { id: 'n2', text: 'Victorian' },
            { id: 'n3', text: 'Modernism' },
            { id: 'n4', text: 'Postcolonial' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'n1' },
            { leftId: 'm2', rightId: 'n2' },
            { leftId: 'm3', rightId: 'n3' },
            { leftId: 'm4', rightId: 'n4' },
          ],
        },
        {
          id: 'ena4-4-ordering',
          type: 'ORDERING',
          instruction: 'Put the periods in chronological order.',
          items: [
            { id: 'o1', text: 'Renaissance' },
            { id: 'o2', text: 'Romanticism' },
            { id: 'o3', text: 'Victorian' },
            { id: 'o4', text: 'Modernism' },
            { id: 'o5', text: 'Postcolonial' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5'],
        },
        {
          id: 'ena4-4-choice',
          type: 'CHOICE',
          instruction: 'Choose the best contextual reading.',
          question: 'Why does stream of consciousness – following a character’s thoughts as they flow, as in Joyce’s Ulysses (1922) – fit the Modernist period?',
          options: [
            { id: 'k1', text: 'Because Modernists wanted to describe nature as calmly as possible.' },
            { id: 'k2', text: 'Because, after the collapse of old certainties, writers turned to the fragmented inner experience of individuals.' },
            { id: 'k3', text: 'Because Modernists wrote only poetry.' },
            { id: 'k4', text: 'Because readers of the time preferred short, simple sentences.' },
          ],
          multiple: false,
          solution: ['k2'],
          explanation:
            'Modernism responds to a world in which shared frameworks – religion, empire, progress – had been shaken, not least by the First World War. The inner, disordered flow of consciousness becomes the new reality to capture.',
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  {
    order: 5,
    title: 'Writing an interpretation',
    subtitle: 'Eine Deutung schriftlich ausführen',
    estimatedMinutes: 34,
    content: {
      version: v,
      blocks: [
        { id: 'ena4-5-h1', type: 'HEADING', level: 1, text: 'Writing an interpretation' },
        {
          id: 'ena4-5-intro',
          type: 'TEXT',
          text: 'A literary interpretation is neither a summary nor an opinion but an argument. It makes a claim about the text – a thesis – and proves it with the text itself, quotation by quotation. The “PEE” structure taught in British schools (Point, Evidence, Explanation) is a simple way to keep every paragraph focused.',
        },
        {
          id: 'ena4-5-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'The structure of an interpretation',
          text: 'Write in the present tense and integrate short quotations into your own sentences, with line numbers. Avoid “I think”: the whole essay is your view; what matters is the evidence.',
          table: {
            headers: ['Part', 'Useful phrase'],
            rows: [
              ['introduction', 'In “…” (year), X explores …'],
              ['thesis', 'This essay argues that …'],
              ['point', 'The poem’s central image is …'],
              ['evidence', 'as the phrase “…” (l. 3) shows'],
              ['explanation', 'This suggests / conveys / emphasises that …'],
              ['conclusion', 'Ultimately, the poem …'],
            ],
          },
        },
        {
          id: 'ena4-5-ordering',
          type: 'ORDERING',
          instruction: 'Put the sentences of this short interpretation in order.',
          items: [
            { id: 'p1', text: 'In Sonnet 18, Shakespeare compares his beloved to a summer’s day.' },
            { id: 'p2', text: 'This essay argues that the poem is less about the beloved than about the power of poetry itself.' },
            { id: 'p3', text: 'The speaker first finds the comparison inadequate, since summer is too short and too changeable.' },
            { id: 'p4', text: 'The final couplet, “So long lives this, and this gives life to thee” (l. 14), shows that the poem itself will preserve the beloved’s beauty.' },
            { id: 'p5', text: 'Ultimately, the sonnet celebrates writing as a way of defeating time.' },
          ],
          solution: ['p1', 'p2', 'p3', 'p4', 'p5'],
        },
        {
          id: 'ena4-5-choice',
          type: 'CHOICE',
          instruction: 'Choose the sentence that follows the conventions of an interpretation.',
          question: 'Which sentence would you find in a good literary essay?',
          options: [
            { id: 'q1', text: 'I really liked this poem because it is beautiful.' },
            { id: 'q2', text: 'The repeated dashes in lines 2–4 slow the reader down and suggest a voice that is still searching for words.' },
            { id: 'q3', text: 'Emily Dickinson was born in 1830 in Amherst and rarely left her home.' },
            { id: 'q4', text: 'In the poem, there is a bird and it sings.' },
          ],
          multiple: false,
          solution: ['q2'],
          explanation:
            'The second sentence combines an observation, a precise reference and an interpretation. The others are personal opinion, biography and plot summary.',
        },
        {
          id: 'ena4-5-cloze',
          type: 'CLOZE',
          instruction: 'Complete the summary of the chapter.',
          wordBank: ['narrator', 'free indirect', 'function', 'theme', 'Romantics', 'present'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'The author writes; the ' },
            { kind: 'GAP', gapId: 'z1', solution: ['narrator'], width: 9 },
            { kind: 'TEXT', text: ' tells. In ' },
            { kind: 'GAP', gapId: 'z2', solution: ['free indirect'], width: 14 },
            { kind: 'TEXT', text: ' speech, the character’s voice appears without a reporting verb. Naming a figure is not enough: you must explain its ' },
            { kind: 'GAP', gapId: 'z3', solution: ['function'], width: 9 },
            { kind: 'TEXT', text: '. A ' },
            { kind: 'GAP', gapId: 'z4', solution: ['theme'], width: 6 },
            { kind: 'TEXT', text: ' is stated in abstract terms. The ' },
            { kind: 'GAP', gapId: 'z5', solution: ['Romantics'], width: 10 },
            { kind: 'TEXT', text: ' turned to nature as industry grew. And literary analysis is written in the ' },
            { kind: 'GAP', gapId: 'z6', solution: ['present'], width: 8 },
            { kind: 'TEXT', text: ' tense.' },
          ],
        },
        {
          id: 'ena4-5-writing',
          type: 'WRITING',
          instruction: 'Write a short interpretation.',
          prompt:
            'Interpret the first stanza of Emily Dickinson’s poem (written c. 1861): “‘Hope’ is the thing with feathers – / That perches in the soul – / And sings the tune without the words – / And never stops – at all –”. Write 180–260 words with an introduction and thesis, analysis of at least two features (with line references) and a conclusion. Use the present tense.',
          minWords: 180,
          maxWords: 270,
          aiFeedback: true,
          sampleAnswer:
            'In “‘Hope’ is the thing with feathers”, written around 1861, Emily Dickinson turns an abstract idea into a living creature. This essay argues that the stanza presents hope not as something we choose or control, but as a quiet, independent presence inside us.\n\nThe central device is an extended metaphor. Hope is “the thing with feathers” (l. 1) – a bird, although the word “bird” never appears. The vague noun “thing” keeps the image slightly mysterious, while “feathers” suggests lightness and fragility. The bird “perches in the soul” (l. 2): the verb implies that it has chosen to rest there, as a bird might settle on a branch, rather than being placed there by us.\n\nThe third line develops the image in a striking way. The bird “sings the tune without the words” (l. 3). Hope, in other words, does not offer arguments or promises; it communicates something more basic than language. This fits the poem’s own brevity and its refusal to explain.\n\nFinally, Dickinson’s characteristic dashes shape how the stanza is read. They break each line into pauses, so that the last line – “And never stops – at all –” (l. 4) – seems to stretch out, just like the song it describes. The emphatic “at all” insists on hope’s persistence even when everything else fails.\n\nUltimately, the stanza suggests that hope is not a belief we hold but a small, stubborn life within us that continues to sing without needing reasons.',
        },
      ],
    },
  },
];
