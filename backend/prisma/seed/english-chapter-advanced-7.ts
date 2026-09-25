import type { UnitSeed } from './chapter-beginner-1';

/**
 * Englisch, Advanced, Kapitel 7: „Rhetoric and persuasion“ (C2, Kapitel 1)
 *
 * Fünf Seiten. Kapitel 6 hat Rhetorik durchschaut, hier wird sie gebaut:
 * die drei Überzeugungsmittel, die Architektur einer Rede, die Figuren der
 * gesprochenen Sprache, der elegante Umgang mit Einwänden, Anfang und
 * Schluss.
 *
 * Aufbau: Seite 1 ethos, pathos, logos; Seite 2 Aufbau einer Rede und
 * Signposting; Seite 3 rhetorische Figuren; Seite 4 Einwände aufnehmen und
 * spontan reagieren; Seite 5 Anfang, Schluss und eigene Rede.
 *
 * Die Redeausschnitte sind eigens verfasst. Sämtliche Texte sind
 * eigenständig formuliert.
 */
const v = 1;

export const ENGLISH_ADVANCED_7_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  {
    order: 1,
    title: 'Three ways to persuade',
    subtitle: 'Ethos, pathos, logos',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'ena7-1-h1', type: 'HEADING', level: 1, text: 'Three ways to persuade' },
        {
          id: 'ena7-1-intro',
          type: 'TEXT',
          text: 'More than two thousand years ago, Aristotle observed that a speaker persuades in three ways: through who they are, through what they make the audience feel, and through what they demonstrate. The classification has survived every change of medium – from the marketplace to radio to one-minute videos – because it describes how people decide whom to believe, not how messages are delivered.',
        },
        {
          id: 'ena7-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Words: the speaker’s craft',
          items: [
            { term: 'audience', translations: { de: 'das Publikum', es: 'el público' } },
            { term: 'credibility', translations: { de: 'die Glaubwürdigkeit', es: 'la credibilidad' } },
            { term: 'to appeal to', translations: { de: 'appellieren an', es: 'apelar a' }, example: 'to appeal to people’s emotions' },
            { term: 'to rebut', translations: { de: 'widerlegen', es: 'rebatir' } },
            { term: 'counter-argument', translations: { de: 'das Gegenargument', es: 'el contraargumento' } },
            { term: 'to concede', translations: { de: 'einräumen', es: 'conceder' } },
            { term: 'compelling', translations: { de: 'überzeugend, zwingend', es: 'convincente' } },
            { term: 'to win somebody over', translations: { de: 'jemanden für sich gewinnen', es: 'ganarse a alguien' } },
            { term: 'sound bite', translations: { de: 'der prägnante O-Ton', es: 'la frase efectista' } },
            { term: 'eloquent', translations: { de: 'redegewandt', es: 'elocuente' } },
          ],
        },
        {
          id: 'ena7-1-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'The three appeals',
          text: 'Ethos is the speaker’s credibility: experience, honesty, the impression that they speak in the audience’s interest. Pathos is the emotion they arouse: anger, hope, fear, compassion. Logos is the reasoning: data, examples, causes and consequences. A strong speech combines all three; one that relies on a single appeal sounds like a report, a sermon or propaganda.',
          table: {
            headers: ['Appeal', 'Audience’s question', 'Example'],
            rows: [
              ['ethos', 'Why should I believe you?', 'I have worked in this emergency department for twenty years.'],
              ['pathos', 'Why should I care?', 'Last night a mother waited six hours with her child in her arms.'],
              ['logos', 'Is it true, and does it follow?', 'Waiting times have risen from two to five hours in three years.'],
            ],
          },
        },
        {
          id: 'ena7-1-match',
          type: 'MATCHING',
          instruction: 'Match each sentence with the appeal it mainly uses.',
          left: [
            { id: 'a1', text: 'As mayor of this town for twelve years, I know every one of its streets.' },
            { id: 'a2', text: 'Think of your children, who will inherit what we decide today.' },
            { id: 'a3', text: 'If fares rise by 10% and use falls by 15%, total revenue falls.' },
          ],
          right: [
            { id: 'b1', text: 'ethos' },
            { id: 'b2', text: 'pathos' },
            { id: 'b3', text: 'logos' },
          ],
          solution: [
            { leftId: 'a1', rightId: 'b1' },
            { leftId: 'a2', rightId: 'b2' },
            { leftId: 'a3', rightId: 'b3' },
          ],
        },
        {
          id: 'ena7-1-info-ethos',
          type: 'INFO',
          variant: 'TIP',
          title: 'Ethos is also built by conceding',
          text: 'Paradoxically, one of the most effective ways to gain credibility is to admit limits: “I don’t have all the answers”, “on this point my opponents are right”. Audiences distrust speakers who know everything and see no merit in the other side. Excessive pathos, on the other hand, destroys ethos: it is perceived as manipulation.',
        },
        {
          id: 'ena7-1-choice',
          type: 'CHOICE',
          instruction: 'Choose the best opening.',
          question: 'An engineer defends a wind farm project in front of local residents. Which opening combines the three appeals best?',
          options: [
            { id: 'c1', text: 'The project is technically perfect and beyond discussion.' },
            {
              id: 'c2',
              text: 'I live two kilometres from where the turbines will stand, like many of you. I know you’re worried about noise, so I’ve brought measurements from three identical sites: none is louder than a quiet street.',
            },
            { id: 'c3', text: 'Imagine a future without pollution, full of light and hope for everyone!' },
            { id: 'c4', text: 'According to standard IEC 61400, class II turbines comply with all requirements.' },
          ],
          multiple: false,
          solution: ['c2'],
          explanation:
            'The second option establishes ethos as a fellow resident, acknowledges the audience’s feelings and answers with data. The others rely on authority, emotion or jargon alone.',
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  {
    order: 2,
    title: 'The architecture of a speech',
    subtitle: 'Eine Rede aufbauen',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'ena7-2-h1', type: 'HEADING', level: 1, text: 'The architecture of a speech' },
        {
          id: 'ena7-2-intro',
          type: 'TEXT',
          text: 'A written text can be re-read; a speech cannot. Listeners cannot go back, so a speech needs a more visible structure than an essay: it announces where it is going, reminds the audience where it is, and repeats the essentials at the end. The old advice – “Tell them what you’re going to tell them, tell them, then tell them what you’ve told them” – still holds.',
        },
        {
          id: 'ena7-2-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'A classic structure',
          text: 'The opening wins attention and goodwill. The background sets out the facts briefly. The argument presents the reasons for the claim, usually saving the strongest for last. The rebuttal deals with objections. The close sums up and calls the audience to act or remember.',
          table: {
            headers: ['Part', 'Purpose', 'Useful phrase'],
            rows: [
              ['opening', 'attention, goodwill', 'Let me start with a question …'],
              ['background', 'the facts', 'Let’s remember what happened …'],
              ['argument', 'reasons', 'There are three reasons why …'],
              ['rebuttal', 'objections', 'Some will say that … But …'],
              ['close', 'summary, call to action', 'That is why I’m asking you today to …'],
            ],
          },
        },
        {
          id: 'ena7-2-ordering',
          type: 'ORDERING',
          instruction: 'Put the parts of this speech to a town council in order.',
          items: [
            { id: 'o1', text: 'How many of you have walked across this square after dark in the last month?' },
            { id: 'o2', text: 'Since the street lights were removed in March, residents have avoided it.' },
            { id: 'o3', text: 'Restoring the lights costs less than one month of private security and gives the square back to the public.' },
            { id: 'o4', text: 'Some will say there is no budget. But there was a budget for new benches.' },
            { id: 'o5', text: 'That is why I’m asking you today to approve this motion.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5'],
        },
        {
          id: 'ena7-2-info-signpost',
          type: 'INFO',
          variant: 'TIP',
          title: 'Signposting',
          text: 'In speech, structural markers are more necessary – and more explicit – than in writing. What would be redundant in an essay is a courtesy to listeners.',
          table: {
            headers: ['Function', 'Signpost'],
            rows: [
              ['announce', 'I’d like to focus on three points.'],
              ['move on', 'This brings me to my second point. / Turning now to …'],
              ['recap', 'So far, we’ve seen that …'],
              ['signal the end', 'To sum up … / Let me leave you with one thought.'],
            ],
          },
        },
        {
          id: 'ena7-2-match',
          type: 'MATCHING',
          instruction: 'Match each sentence with its part of the speech.',
          left: [
            { id: 'p1', text: 'A year ago, in this very room, we were promised a new health centre.' },
            { id: 'p2', text: 'Some say the centre isn’t cost-effective. They forget that health isn’t measured in profit.' },
            { id: 'p3', text: 'I urge you not to let another promise stay on paper.' },
            { id: 'p4', text: 'Good evening. I’m here to talk about something that affects us all: how long we wait to see a doctor.' },
          ],
          right: [
            { id: 'q1', text: 'background' },
            { id: 'q2', text: 'rebuttal' },
            { id: 'q3', text: 'close' },
            { id: 'q4', text: 'opening' },
          ],
          solution: [
            { leftId: 'p1', rightId: 'q1' },
            { leftId: 'p2', rightId: 'q2' },
            { leftId: 'p3', rightId: 'q3' },
            { leftId: 'p4', rightId: 'q4' },
          ],
        },
        {
          id: 'ena7-2-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct answer.',
          question: 'Why does a speech repeat ideas at the end that would be redundant in a written text?',
          options: [
            { id: 'r1', text: 'Because the speaker has not prepared the ending properly.' },
            { id: 'r2', text: 'Because listeners cannot re-read: repetition fixes the essentials in memory.' },
            { id: 'r3', text: 'Because it makes the speech longer.' },
            { id: 'r4', text: 'Because classical rhetoric forbids new ideas at the end.' },
          ],
          multiple: false,
          solution: ['r2'],
          explanation:
            'Speech is linear: what was not retained is lost. The recap compensates for this and organises what the audience has heard.',
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  {
    order: 3,
    title: 'The rhythm of words',
    subtitle: 'Rhetorische Figuren gezielt einsetzen',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'ena7-3-h1', type: 'HEADING', level: 1, text: 'The rhythm of words' },
        {
          id: 'ena7-3-intro',
          type: 'TEXT',
          text: 'The lines people remember from speeches are rarely the ones with the most information. They are the ones with shape: three items in a row, a repeated opening, an unexpected reversal. Oral rhetoric relies on figures that create rhythm and make an idea easy to repeat.',
        },
        {
          id: 'ena7-3-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Figures of speech for speaking',
          text: 'All of these rely on repetition or symmetry, because the ear detects them without effort. The tricolon groups three items, ideally of increasing length. Anaphora repeats the opening words. Chiasmus reverses two elements (A B / B A). Climax builds from weaker to stronger.',
          table: {
            headers: ['Figure', 'Pattern', 'Example'],
            rows: [
              ['tricolon', 'A, B and C', 'We came to listen, to learn and to change things.'],
              ['anaphora', 'X … / X … / X …', 'We want schools. We want doctors. We want a future.'],
              ['chiasmus', 'A B / B A', 'We don’t live to work; we work to live.'],
              ['climax', 'weaker → stronger', 'I doubted it, I feared it, I knew it.'],
              ['antithesis', 'contrast of ideas', 'They talk about cost; we talk about value.'],
            ],
          },
        },
        {
          id: 'ena7-3-match',
          type: 'MATCHING',
          instruction: 'Match each sentence with the figure it uses.',
          left: [
            { id: 'f1', text: 'It is not the city that changes people; it is people who change the city.' },
            { id: 'f2', text: 'For our parents, for our children, for those not yet born.' },
            { id: 'f3', text: 'Are we going to sit back and do nothing?' },
            { id: 'f4', text: 'First they ignored it, then they criticised it, and finally they copied it.' },
          ],
          right: [
            { id: 'g1', text: 'chiasmus' },
            { id: 'g2', text: 'anaphora and tricolon' },
            { id: 'g3', text: 'rhetorical question' },
            { id: 'g4', text: 'climax' },
          ],
          solution: [
            { leftId: 'f1', rightId: 'g1' },
            { leftId: 'f2', rightId: 'g2' },
            { leftId: 'f3', rightId: 'g3' },
            { leftId: 'f4', rightId: 'g4' },
          ],
        },
        {
          id: 'ena7-3-info-three',
          type: 'INFO',
          variant: 'TIP',
          title: 'Why three?',
          text: 'Two items feel like a contrast; four feel like a list. Three give a sense of completeness, and the ear waits for the third like the final note of a tune. It works best when the third item is the longest or strongest, so the sentence ends at its peak.',
        },
        {
          id: 'ena7-3-cloze',
          type: 'CLOZE',
          instruction: 'Complete to form the figure indicated.',
          wordBank: ['work', 'want', 'value', 'change'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Chiasmus: We don’t live to work; we ' },
            { kind: 'GAP', gapId: 'k1', solution: ['work'], width: 5 },
            { kind: 'TEXT', text: ' to live. Anaphora: We want jobs. We ' },
            { kind: 'GAP', gapId: 'k2', solution: ['want'], width: 5 },
            { kind: 'TEXT', text: ' homes. Antithesis: They talk about cost; we talk about ' },
            { kind: 'GAP', gapId: 'k3', solution: ['value'], width: 6 },
            { kind: 'TEXT', text: '. Tricolon: We came to listen, to learn and to ' },
            { kind: 'GAP', gapId: 'k4', solution: ['change'], width: 7 },
            { kind: 'TEXT', text: ' things.' },
          ],
        },
        {
          id: 'ena7-3-choice',
          type: 'CHOICE',
          instruction: 'Choose the most effective closing line.',
          question: 'Which version has the strongest rhythm?',
          options: [
            { id: 'h1', text: 'We need transport, and housing too, plus decent jobs for young people in the region.' },
            { id: 'h2', text: 'We need transport. We need housing. And above all, we need our young people not to have to leave to find work.' },
            { id: 'h3', text: 'Transport, housing, jobs, health, culture, sport and leisure are all needed.' },
            { id: 'h4', text: 'There are things the region needs.' },
          ],
          multiple: false,
          solution: ['h2'],
          explanation:
            'The second version combines anaphora (“We need …”) with a tricolon whose third item is the longest and most emotional. The third version is a list of seven items: the ear cannot hold it.',
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  {
    order: 4,
    title: 'Conceding to win',
    subtitle: 'Einwände aufnehmen und spontan reagieren',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'ena7-4-h1', type: 'HEADING', level: 1, text: 'Conceding to win' },
        {
          id: 'ena7-4-intro',
          type: 'TEXT',
          text: 'The temptation, when defending a position, is to ignore objections or dismiss them. Both weaken a speech: the audience knows the objections, and if the speaker does not mention them, they assume there is no answer. The skilful speaker does the opposite: states the objection better than the opponent would, acknowledges what is true in it, and only then takes it apart.',
        },
        {
          id: 'ena7-4-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'The tactical concession',
          text: 'The structure is: concession + turn + reply. The turn is marked by a contrastive connector or by a phrase that shifts the ground. “It’s not about … it’s about …” moves the discussion elsewhere. “Far from + -ing” reverses the expected consequence.',
          table: {
            headers: ['Phrase', 'Example'],
            rows: [
              ['It’s true that …; however, …', 'It’s true that the project is expensive; however, doing nothing costs more.'],
              ['Granted, … But …', 'Granted, the deadline is tight. But it is achievable.'],
              ['It’s not about … it’s about …', 'It’s not about spending more, it’s about spending better.'],
              ['Far from + -ing, …', 'Far from slowing the economy, the measure has boosted it.'],
              ['Some will say … And yet …', 'Some will say it’s utopian. And yet it already works elsewhere.'],
            ],
          },
        },
        {
          id: 'ena7-4-cloze',
          type: 'CLOZE',
          instruction: 'Complete the replies.',
          wordBank: ['Far from', 'It’s not about', 'however', 'Granted'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'It’s true that pedestrianisation annoys some shops; ' },
            { kind: 'GAP', gapId: 'c1', solution: ['however'], width: 8 },
            { kind: 'TEXT', text: ', overall sales have risen. ' },
            { kind: 'GAP', gapId: 'c2', solution: ['Far from'], width: 9 },
            { kind: 'TEXT', text: ' emptying the centre, it has filled it with people. ' },
            { kind: 'GAP', gapId: 'c3', solution: ['It’s not about', "It's not about"], width: 15 },
            { kind: 'TEXT', text: ' banning cars; it’s about giving the street back to pedestrians. ' },
            { kind: 'GAP', gapId: 'c4', solution: ['Granted'], width: 8 },
            { kind: 'TEXT', text: ', the change takes effort. But it’s worth it.' },
          ],
        },
        {
          id: 'ena7-4-info-spontaneous',
          type: 'INFO',
          variant: 'TIP',
          title: 'Buying time and answering on your feet',
          text: 'In a live debate, you rarely have time to prepare. A few phrases give you a moment to think without sounding evasive, and a clarifying question can reveal that an objection is weaker than it sounded.',
          table: {
            headers: ['Function', 'Phrase'],
            rows: [
              ['buy time', 'That’s an important question, and I want to answer it properly.'],
              ['clarify', 'When you say “too expensive”, compared with what?'],
              ['ask for evidence', 'What’s that based on?'],
              ['reframe', 'I’d put it slightly differently: …'],
            ],
          },
        },
        {
          id: 'ena7-4-choice',
          type: 'CHOICE',
          instruction: 'Choose the most effective reply.',
          question: 'You are arguing for a four-day week. An opponent says productivity will fall. Which reply is strongest?',
          options: [
            { id: 's1', text: 'That’s what people who don’t want change always say.' },
            { id: 's2', text: 'Productivity doesn’t matter; what matters is happiness.' },
            {
              id: 's3',
              text: 'That’s a fair concern: if each hour were as productive as now, we’d lose a day of output. However, in companies that have tried it, productivity per hour has risen enough to make up for it.',
            },
            { id: 's4', text: 'I’m not going to go into that.' },
          ],
          multiple: false,
          solution: ['s3'],
          explanation:
            'The third reply states the objection in its strongest form, accepts it and answers with evidence. The first attacks the person, the second changes the subject and the fourth avoids the debate.',
        },
        {
          id: 'ena7-4-ordering',
          type: 'ORDERING',
          instruction: 'Put the reply in order: concession, turn, answer.',
          items: [
            { id: 'r1', text: 'Some will say the library hardly has any users.' },
            { id: 'r2', text: 'And it’s true: visits fell last year.' },
            { id: 'r3', text: 'But they fell because opening hours were cut to weekday mornings, when people are at work.' },
            { id: 'r4', text: 'Extend the hours, and we’ll see who’s right.' },
          ],
          solution: ['r1', 'r2', 'r3', 'r4'],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  {
    order: 5,
    title: 'Beginnings and endings',
    subtitle: 'Den ersten und letzten Satz setzen',
    estimatedMinutes: 34,
    content: {
      version: v,
      blocks: [
        { id: 'ena7-5-h1', type: 'HEADING', level: 1, text: 'Beginnings and endings' },
        {
          id: 'ena7-5-intro',
          type: 'TEXT',
          text: 'The first thirty seconds decide whether the audience listens; the last thirty decide what it remembers. Almost anything can go in between, but the beginning and the end should be written out word for word. Improvising the close is the surest way to end with “So, yeah, that’s about it.”',
        },
        {
          id: 'ena7-5-info',
          type: 'INFO',
          variant: 'TIP',
          title: 'Five openings and three closings',
          text: 'A good opening raises a question in the listener’s mind; a good closing answers it or returns it transformed. The “full circle” technique – returning at the end to the image of the beginning – gives a speech a unity that is hard to achieve otherwise.',
          table: {
            headers: ['Type', 'Example'],
            rows: [
              ['opening: question', 'What is an hour of your life worth?'],
              ['opening: story', 'Last Tuesday, an eighty-year-old neighbour climbed six floors on foot.'],
              ['opening: surprising fact', 'One in three items of food we buy ends up in the bin.'],
              ['opening: contrast', 'Ten years ago, this square was a car park.'],
              ['closing: call to action', 'I’m asking you to vote yes tonight.'],
              ['closing: full circle', 'If we approve this, that neighbour will have a lift.'],
              ['closing: image', 'Picture this square in ten years, full of children.'],
            ],
          },
        },
        {
          id: 'ena7-5-choice',
          type: 'CHOICE',
          instruction: 'Choose the best closing.',
          question: 'A speech began: “Last Tuesday, an eighty-year-old neighbour climbed six floors on foot with her shopping.” Which closing uses that opening best?',
          options: [
            { id: 'c1', text: 'So, yeah, that’s about it. Thanks.' },
            { id: 'c2', text: 'In conclusion, lifts are important for accessibility.' },
            {
              id: 'c3',
              text: 'If we approve this grant tonight, next Tuesday our neighbour will take the lift. It’s in our hands.',
            },
            { id: 'c4', text: 'Finally, I’d like to mention article 3 of the building regulations.' },
          ],
          multiple: false,
          solution: ['c3'],
          explanation:
            'The third option comes full circle: it returns to the neighbour and turns the story into a consequence of the decision, ending with a short call to action.',
        },
        {
          id: 'ena7-5-cloze',
          type: 'CLOZE',
          instruction: 'Complete the summary of the chapter.',
          wordBank: ['ethos', 'signposting', 'chiasmus', 'concession', 'circle', 'tricolon'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'A speaker’s credibility is their ' },
            { kind: 'GAP', gapId: 'z1', solution: ['ethos'], width: 6 },
            { kind: 'TEXT', text: '. Phrases like “This brings me to my second point” are ' },
            { kind: 'GAP', gapId: 'z2', solution: ['signposting'], width: 12 },
            { kind: 'TEXT', text: '. “We don’t live to work; we work to live” is a ' },
            { kind: 'GAP', gapId: 'z3', solution: ['chiasmus'], width: 9 },
            { kind: 'TEXT', text: '. Three items in a row form a ' },
            { kind: 'GAP', gapId: 'z4', solution: ['tricolon'], width: 9 },
            { kind: 'TEXT', text: '. Accepting what is true in an objection before rebutting it is a tactical ' },
            { kind: 'GAP', gapId: 'z5', solution: ['concession'], width: 11 },
            { kind: 'TEXT', text: '. And returning to the opening image means coming full ' },
            { kind: 'GAP', gapId: 'z6', solution: ['circle'], width: 7 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'ena7-5-writing',
          type: 'WRITING',
          instruction: 'Write a short speech.',
          prompt:
            'Your neighbourhood is voting on whether to turn an empty lot into a community garden or a car park. Write a speech of 220–300 words, to be read aloud at the residents’ meeting, defending the option you prefer. Include an opening, arguments, a rebuttal with a tactical concession and a close that comes full circle. Use at least one tricolon, one anaphora and one rhetorical question.',
          minWords: 220,
          maxWords: 310,
          aiFeedback: true,
          sampleAnswer:
            'Good evening, everyone. I’d like you to try something: close your eyes for a moment and picture the empty lot on Elm Street. What do you see? I see weeds, plastic bags and a fence that’s been broken for seven years.\n\nThat lot could be something else. A community garden costs little, is looked after by residents themselves, and produces more than tomatoes. It produces connection, because it makes us work side by side with people we used to just nod to in the lift. It produces learning, because the schools nearby could use it as an outdoor classroom. And it produces shade, green space and cleaner air on a street that reaches thirty-five degrees in August.\n\nSome will say that what this neighbourhood really needs is parking. And it’s true – finding a space at eight in the evening is a nightmare, and I won’t pretend otherwise. However, forty new spaces won’t solve that problem; they’ll move it back a few months, until forty more cars arrive. Far from easing traffic, a car park attracts it.\n\nSo this isn’t really a choice between cars and lettuces. It’s a choice about what kind of neighbourhood we want in ten years. We want a neighbourhood where children play outside. We want a neighbourhood where older residents have somewhere to go in the morning. We want a neighbourhood that looks like the people who live in it.\n\nSo I’m asking you to vote for the garden. And I’d like to propose that a year from now, we all close our eyes again and picture the lot on Elm Street. I’m sure we won’t see weeds. We’ll see our neighbours.',
        },
      ],
    },
  },
];
