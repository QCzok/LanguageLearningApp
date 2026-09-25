import type { UnitSeed } from './chapter-beginner-1';

/**
 * Englisch, Advanced, Kapitel 11: „Debate and mediation“ (C2, Kapitel 5)
 *
 * Fünf Seiten. Nach dem Überzeugen (Kapitel 7) das Gegenteil: nicht Partei
 * ergreifen. Wer eine Diskussion leitet oder vermittelt, braucht eine
 * Sprache, die steuert, ohne zu werten – und die heikle Themen anspricht,
 * ohne jemanden bloßzustellen.
 *
 * Aufbau: Seite 1 eine Diskussion eröffnen und leiten, Seite 2 Redezeit
 * steuern und höflich unterbrechen, Seite 3 neutral zusammenfassen, Seite 4
 * vermitteln und heikle Themen taktvoll ansprechen, Seite 5 das Protokoll
 * (minutes) und eigene Schreibaufgabe.
 *
 * Diskussionen und Personen sind erfunden. Sämtliche Texte sind
 * eigenständig verfasst.
 */
const v = 1;

export const ENGLISH_ADVANCED_11_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  {
    order: 1,
    title: 'Chairing a discussion',
    subtitle: 'Eine Diskussion eröffnen und leiten',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'ena11-1-h1', type: 'HEADING', level: 1, text: 'Chairing a discussion' },
        {
          id: 'ena11-1-intro',
          type: 'TEXT',
          text: 'A good chair is barely noticed. They don’t win the debate; they make it possible. They open and close, share out the time, bring the discussion back on track and summarise so the audience doesn’t get lost. All of this requires a particular linguistic skill: intervening firmly without taking sides.',
        },
        {
          id: 'ena11-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Words: meetings and debates',
          items: [
            { term: 'chair / chairperson', translations: { de: 'der/die Vorsitzende, die Moderation', es: 'el presidente, el moderador' } },
            { term: 'agenda', translations: { de: 'die Tagesordnung', es: 'el orden del día' } },
            { term: 'to give somebody the floor', translations: { de: 'jemandem das Wort erteilen', es: 'dar la palabra a alguien' } },
            { term: 'to stick to the point', translations: { de: 'beim Thema bleiben', es: 'ceñirse al tema' } },
            { term: 'to interrupt', translations: { de: 'unterbrechen', es: 'interrumpir' } },
            { term: 'consensus', translations: { de: 'der Konsens', es: 'el consenso' } },
            { term: 'compromise', translations: { de: 'der Kompromiss', es: 'el acuerdo, el compromiso' } },
            { term: 'impartial', translations: { de: 'unparteiisch', es: 'imparcial' } },
            { term: 'common ground', translations: { de: 'die gemeinsame Basis', es: 'el terreno común' } },
            { term: 'minutes (of a meeting)', translations: { de: 'das Protokoll', es: 'el acta' } },
            { term: 'heated', translations: { de: 'hitzig', es: 'acalorado' } },
          ],
        },
        {
          id: 'ena11-1-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Phrases for chairing',
          text: 'The chair often uses inclusive “we” and “let’s”, and impersonal phrasing (“It has been suggested that …”). “I” is kept for procedural decisions: “I’m going to ask you to keep it brief.”',
          table: {
            headers: ['Function', 'Phrase'],
            rows: [
              ['open', 'Welcome, everyone. Tonight we’re discussing …'],
              ['set rules', 'Each speaker will have three minutes for an opening statement.'],
              ['give the floor', 'Ms Weber, the floor is yours. / Over to you, Ms Weber.'],
              ['move on', 'Let’s move on to the question of funding.'],
              ['close', 'Thank you all for a lively discussion.'],
            ],
          },
        },
        {
          id: 'ena11-1-match',
          type: 'MATCHING',
          instruction: 'Match each sentence with its function.',
          left: [
            { id: 'a1', text: 'Mr Vidal, I’d remind you we’re talking about transport, not health.' },
            { id: 'a2', text: 'To start, each panellist has three minutes.' },
            { id: 'a3', text: 'So far, both sides agree on the problem, but not on the solution.' },
            { id: 'a4', text: 'Dr Patel, over to you.' },
          ],
          right: [
            { id: 'b1', text: 'bringing the discussion back on track' },
            { id: 'b2', text: 'setting the rules' },
            { id: 'b3', text: 'summarising' },
            { id: 'b4', text: 'giving the floor' },
          ],
          solution: [
            { leftId: 'a1', rightId: 'b1' },
            { leftId: 'a2', rightId: 'b2' },
            { leftId: 'a3', rightId: 'b3' },
            { leftId: 'a4', rightId: 'b4' },
          ],
        },
        {
          id: 'ena11-1-choice',
          type: 'CHOICE',
          instruction: 'Choose the impartial response.',
          question: 'A panellist has just set out their position on raising water prices. Which response keeps the chair impartial?',
          options: [
            { id: 'c1', text: 'Excellent point. Let’s see how Ms Ruiz can possibly answer that.' },
            { id: 'c2', text: 'Thank you. Ms Ruiz, what’s your view on the increase?' },
            { id: 'c3', text: 'Well, that’s debatable. Ms Ruiz, I’m sure you see it differently.' },
            { id: 'c4', text: 'Thank you. Ms Ruiz, don’t you think that was a bit exaggerated?' },
          ],
          multiple: false,
          solution: ['c2'],
          explanation:
            'The second response thanks the speaker and passes the floor with an open question. The others judge what was said or put words into the next speaker’s mouth.',
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  {
    order: 2,
    title: 'Sorry to interrupt',
    subtitle: 'Redezeit steuern und höflich unterbrechen',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'ena11-2-h1', type: 'HEADING', level: 1, text: 'Sorry to interrupt' },
        {
          id: 'ena11-2-intro',
          type: 'TEXT',
          text: 'The trickiest moment for a chair is the interruption. One speaker overruns, another cuts in, a third wanders off the subject. The chair must intervene firmly without sounding hostile. The key is softening: apologise for interrupting, acknowledge the value of what was said, and justify the interruption by the rules, not by the content.',
        },
        {
          id: 'ena11-2-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Interrupting politely',
          text: 'The phrases range from gentle to firm. Modal verbs and “just” soften; references to time and fairness depersonalise the intervention.',
          table: {
            headers: ['Level', 'Phrase'],
            rows: [
              ['warning', 'You have about a minute left.'],
              ['suggestion', 'Could I ask you to start wrapping up?'],
              ['request', 'I’m going to have to ask you to finish there.'],
              ['interruption', 'Sorry to interrupt, but we’re running short of time.'],
              ['firm', 'I’m afraid I need to stop you there. Mr Park, the floor is yours.'],
            ],
          },
        },
        {
          id: 'ena11-2-dialogue',
          type: 'DIALOGUE',
          title: 'A parents’ meeting',
          lines: [
            { speaker: 'Mr Baker', text: '… and on top of that, the gym roof has been leaking for years, and the toilets, and last winter …' },
            { speaker: 'Chair', text: 'Sorry to interrupt, Mr Baker. The gym is an important issue, but tonight we’re focusing on after-school care. Could we put it on the agenda for next time?' },
            { speaker: 'Mrs Young', text: 'Exactly, that’s not what we’re –' },
            { speaker: 'Chair', text: 'Just a moment, Mrs Young – you’re next. Mr Baker, anything else on after-school care?' },
            { speaker: 'Mr Baker', text: 'Only that we need more staff.' },
            { speaker: 'Chair', text: 'Thank you. Mrs Young, over to you.' },
          ],
        },
        {
          id: 'ena11-2-match',
          type: 'MATCHING',
          instruction: 'What is the chair doing?',
          left: [
            { id: 'l1', text: 'Could we put it on the agenda for next time?' },
            { id: 'l2', text: 'Just a moment, Mrs Young – you’re next.' },
            { id: 'l3', text: 'Anything else on after-school care?' },
          ],
          right: [
            { id: 'r1', text: 'acknowledging a point and postponing it' },
            { id: 'r2', text: 'holding off an interruption' },
            { id: 'r3', text: 'bringing the speaker back to the topic' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
          ],
        },
        {
          id: 'ena11-2-choice',
          type: 'CHOICE',
          instruction: 'Choose the most skilful intervention.',
          question: 'Two panellists are talking over each other and the audience can’t follow. What does the chair say?',
          options: [
            { id: 'r1', text: 'Quiet, please! Nobody can understand a word.' },
            { id: 'r2', text: 'Can I ask you to take turns? Ms Soto, please finish, and then Mr Mena will have the floor.' },
            { id: 'r3', text: 'Mr Mena, let Ms Soto speak – she’s right.' },
            { id: 'r4', text: 'Well, let them both talk and see what happens.' },
          ],
          multiple: false,
          solution: ['r2'],
          explanation:
            'The second option appeals to a shared rule, allocates the floor and reassures the other speaker that their turn will come. The third takes sides (“she’s right”); the fourth gives up chairing.',
        },
        {
          id: 'ena11-2-cloze',
          type: 'CLOZE',
          instruction: 'Complete the chair’s interventions.',
          wordBank: ['interrupt', 'wrapping', 'point', 'floor'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Sorry to ' },
            { kind: 'GAP', gapId: 't1', solution: ['interrupt'], width: 10 },
            { kind: 'TEXT', text: ', Ms Díaz. Could I ask you to start ' },
            { kind: 'GAP', gapId: 't2', solution: ['wrapping'], width: 9 },
            { kind: 'TEXT', text: ' up? Let’s stick to the ' },
            { kind: 'GAP', gapId: 't3', solution: ['point'], width: 6 },
            { kind: 'TEXT', text: ' – the timetable. Mr Ortiz, the ' },
            { kind: 'GAP', gapId: 't4', solution: ['floor'], width: 6 },
            { kind: 'TEXT', text: ' is yours.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  {
    order: 3,
    title: 'Summarising without taking sides',
    subtitle: 'Neutral zusammenfassen',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'ena11-3-h1', type: 'HEADING', level: 1, text: 'Summarising without taking sides' },
        {
          id: 'ena11-3-intro',
          type: 'TEXT',
          text: 'Summarising sounds easy until you try it with two opposing positions. Every choice – what to include, in what order, with which verb – can favour one side. A neutral summary is not one without judgement, but one in which both sides recognise themselves.',
        },
        {
          id: 'ena11-3-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'The traps of summarising',
          text: 'Four things reveal unintended bias. The reporting verb: “insists”, “claims” and “admits” judge; “argues”, “proposes” and “believes” don’t. The order: what comes last sounds like the answer. The length: three sentences for one side and one for the other is taking sides. And the adjectives: “a compelling argument” versus “an argument”.',
          table: {
            headers: ['Biased', 'Neutral'],
            rows: [
              ['Ms Ruiz insists that …', 'Ms Ruiz argues that …'],
              ['Mr Gil admits that …', 'Mr Gil points out that …'],
              ['X makes a compelling proposal.', 'X makes a proposal.'],
              ['Although A says …, B shows …', 'A believes …; B, on the other hand, believes …'],
            ],
          },
        },
        {
          id: 'ena11-3-choice',
          type: 'CHOICE',
          instruction: 'Choose the most neutral summary.',
          question: 'A debate about a wind farm. Which summary treats both sides fairly?',
          options: [
            { id: 'q1', text: 'The mayor says the wind farm will bring jobs; residents, however, keep going on about noise.' },
            {
              id: 'q2',
              text: 'The mayor argues that the wind farm will bring jobs and revenue; residents, for their part, point to the impact of noise and on the landscape. Both agree that the village needs investment.',
            },
            { id: 'q3', text: 'Residents raise some concerns about noise, but the mayor demonstrates that the wind farm will bring jobs.' },
            { id: 'q4', text: 'As always, some people want progress and others don’t.' },
          ],
          multiple: false,
          solution: ['q2'],
          explanation:
            'The second summary uses neutral verbs, gives both sides similar space and adds the point of agreement. The first belittles residents (“keep going on”); the third gives the mayor the last word with a verb that endorses him.',
        },
        {
          id: 'ena11-3-match',
          type: 'MATCHING',
          instruction: 'Match each loaded verb with a neutral alternative.',
          left: [
            { id: 'v1', text: 'keeps going on about' },
            { id: 'v2', text: 'claims' },
            { id: 'v3', text: 'is forced to admit' },
            { id: 'v4', text: 'complains that' },
          ],
          right: [
            { id: 'w1', text: 'repeatedly raises' },
            { id: 'w2', text: 'states' },
            { id: 'w3', text: 'acknowledges' },
            { id: 'w4', text: 'expresses concern that' },
          ],
          solution: [
            { leftId: 'v1', rightId: 'w1' },
            { leftId: 'v2', rightId: 'w2' },
            { leftId: 'v3', rightId: 'w3' },
            { leftId: 'v4', rightId: 'w4' },
          ],
        },
        {
          id: 'ena11-3-info-reported',
          type: 'INFO',
          variant: 'TIP',
          title: 'Reported speech and parallel structure',
          text: 'Summaries are usually in reported speech, with backshift after a past reporting verb: “She said the project would be profitable.” Parallel structure – “X argues that …; Y, on the other hand, believes that …” – makes equal treatment visible. “For their part”, “in turn” and “by contrast” link positions without ranking them.',
        },
        {
          id: 'ena11-3-cloze',
          type: 'CLOZE',
          instruction: 'Complete the neutral summary.',
          wordBank: ['argued', 'for their part', 'suggested', 'agreed', 'would'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'The head teacher ' },
            { kind: 'GAP', gapId: 'n1', solution: ['argued'], width: 7 },
            { kind: 'TEXT', text: ' that the new timetable ' },
            { kind: 'GAP', gapId: 'n2', solution: ['would'], width: 6 },
            { kind: 'TEXT', text: ' improve results. Parents, ' },
            { kind: 'GAP', gapId: 'n3', solution: ['for their part'], width: 15 },
            { kind: 'TEXT', text: ', raised concerns about childcare. The union ' },
            { kind: 'GAP', gapId: 'n4', solution: ['suggested'], width: 10 },
            { kind: 'TEXT', text: ' a trial period. Everyone ' },
            { kind: 'GAP', gapId: 'n5', solution: ['agreed'], width: 7 },
            { kind: 'TEXT', text: ' that the results should be evaluated.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  {
    order: 4,
    title: 'Finding common ground',
    subtitle: 'Vermitteln und heikle Themen taktvoll ansprechen',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'ena11-4-h1', type: 'HEADING', level: 1, text: 'Finding common ground' },
        {
          id: 'ena11-4-intro',
          type: 'TEXT',
          text: 'Two neighbours are arguing about a tree. One wants it cut down; the other won’t have it touched. Those are their positions. Ask a few questions and it turns out the first wants sunlight on her terrace and the second wants shade in summer. Those are their interests – and pruning the tree satisfies both. Mediation means moving from positions to interests.',
        },
        {
          id: 'ena11-4-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Techniques of mediation',
          text: 'Active listening restates what someone has said, without the emotional charge, to check understanding. Open questions uncover interests. Naming common ground builds trust. Hypothetical questions open options without committing anyone.',
          table: {
            headers: ['Technique', 'Phrase'],
            rows: [
              ['active listening', 'If I’ve understood correctly, what matters to you is …'],
              ['asking about interests', 'What’s most important to you here?'],
              ['acknowledging feelings', 'I can see this has been really frustrating.'],
              ['naming common ground', 'It sounds as though you both want …'],
              ['opening options', 'What if …? / Would it be possible to …?'],
            ],
          },
        },
        {
          id: 'ena11-4-choice',
          type: 'CHOICE',
          instruction: 'Choose the best response for a mediator.',
          question: 'A tenant says angrily: “The guy upstairs is completely selfish! Music every night till two!” What would a mediator say?',
          options: [
            { id: 'm1', text: 'You’re right, he sounds completely selfish.' },
            { id: 'm2', text: 'Come on, it can’t be that bad.' },
            { id: 'm3', text: 'I can see how frustrating that is. If I’ve understood correctly, what you need most is to be able to sleep at night.' },
            { id: 'm4', text: 'Why didn’t you say something earlier?' },
          ],
          multiple: false,
          solution: ['m3'],
          explanation:
            'The third response acknowledges the feeling, drops the insult and translates the complaint into an interest that can be negotiated. The others take sides, minimise or blame.',
        },
        {
          id: 'ena11-4-info-tact',
          type: 'INFO',
          variant: 'TIP',
          title: 'Raising a sensitive issue tactfully',
          text: 'When you must raise something uncomfortable – a colleague’s behaviour, a delicate personal matter – prepare the ground, describe behaviour rather than character, speak from your own perspective and invite the other person’s view.',
          table: {
            headers: ['Step', 'Phrase'],
            rows: [
              ['prepare the ground', 'There’s something I’d like to talk about, if now’s a good time.'],
              ['describe behaviour', 'In the last three meetings, the report came in after the deadline.'],
              ['speak for yourself', 'I’m finding it hard to plan when …'],
              ['invite their view', 'How do you see it? Is there something I’m not aware of?'],
            ],
          },
        },
        {
          id: 'ena11-4-match',
          type: 'MATCHING',
          instruction: 'Match each tactless sentence with a tactful alternative.',
          left: [
            { id: 'l1', text: 'You’re always late.' },
            { id: 'l2', text: 'Your report is a mess.' },
            { id: 'l3', text: 'You never listen.' },
            { id: 'l4', text: 'We need to talk. Now.' },
          ],
          right: [
            { id: 'r1', text: 'You’ve arrived after nine three times this week – is everything OK?' },
            { id: 'r2', text: 'I found the report hard to follow in places. Could we go through the structure together?' },
            { id: 'r3', text: 'I don’t feel my point came across. Can I try again?' },
            { id: 'r4', text: 'Could we find a moment to talk, if now’s a good time?' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'ena11-4-cloze',
          type: 'CLOZE',
          instruction: 'Complete the mediator’s words.',
          wordBank: ['understood', 'important', 'both', 'What if'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'If I’ve ' },
            { kind: 'GAP', gapId: 'k1', solution: ['understood'], width: 11 },
            { kind: 'TEXT', text: ' correctly, you need quiet at night. What’s most ' },
            { kind: 'GAP', gapId: 'k2', solution: ['important'], width: 10 },
            { kind: 'TEXT', text: ' to you, Mr Lee? It sounds as though you ' },
            { kind: 'GAP', gapId: 'k3', solution: ['both'], width: 5 },
            { kind: 'TEXT', text: ' want to stay on good terms. ' },
            { kind: 'GAP', gapId: 'k4', solution: ['What if'], width: 8 },
            { kind: 'TEXT', text: ' the music stopped at ten on weeknights?' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  {
    order: 5,
    title: 'Taking the minutes',
    subtitle: 'Ergebnisse festhalten',
    estimatedMinutes: 34,
    content: {
      version: v,
      blocks: [
        { id: 'ena11-5-h1', type: 'HEADING', level: 1, text: 'Taking the minutes' },
        {
          id: 'ena11-5-intro',
          type: 'TEXT',
          text: 'At the end of a meeting come the minutes. Action minutes record what was decided, who will do what by when, and which questions remain open. They are short, factual and neutral. Views are reported (“Ms Weber said the costs were too high”); decisions are stated, usually in the passive (“It was agreed that …”).',
        },
        {
          id: 'ena11-5-info',
          type: 'INFO',
          variant: 'TIP',
          title: 'Building blocks of minutes',
          text: 'The heading lists the meeting, date, attendees and apologies. Each agenda item is recorded separately. Action points should be verifiable: who, what, by when.',
          table: {
            headers: ['Element', 'Phrasing'],
            rows: [
              ['decision', 'It was agreed that … / The motion was carried by 12 votes to 3.'],
              ['view', 'Ms Weber pointed out that the costs were too high.'],
              ['action', 'ACTION: Mr Brown to prepare a cost plan by 15 March.'],
              ['open question', 'It remained unclear how the project would be funded.'],
              ['postponed', 'The item was deferred to the next meeting.'],
            ],
          },
        },
        {
          id: 'ena11-5-ordering',
          type: 'ORDERING',
          instruction: 'Put the parts of the minutes in order.',
          items: [
            { id: 'o1', text: 'Minutes of the parents’ meeting, 12 February. Present: 24 parents, head teacher. Apologies: Mr Chen.' },
            { id: 'o2', text: 'Item 1: The head teacher presented the plan for after-school care.' },
            { id: 'o3', text: 'Several parents pointed out that there were not enough staff.' },
            { id: 'o4', text: 'It was agreed to set up a working group. ACTION: Mrs Young to call the first meeting by 1 March.' },
            { id: 'o5', text: 'The condition of the gym was deferred to the next meeting.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5'],
        },
        {
          id: 'ena11-5-cloze',
          type: 'CLOZE',
          instruction: 'Complete the summary of the chapter.',
          wordBank: ['impartial', 'interrupt', 'argues', 'interests', 'behaviour', 'agreed'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'A chair must be ' },
            { kind: 'GAP', gapId: 'z1', solution: ['impartial'], width: 10 },
            { kind: 'TEXT', text: '. “Sorry to ' },
            { kind: 'GAP', gapId: 'z2', solution: ['interrupt'], width: 10 },
            { kind: 'TEXT', text: '” softens an intervention. In a neutral summary, someone “' },
            { kind: 'GAP', gapId: 'z3', solution: ['argues'], width: 7 },
            { kind: 'TEXT', text: '” rather than “claims”. Mediation moves from positions to ' },
            { kind: 'GAP', gapId: 'z4', solution: ['interests'], width: 10 },
            { kind: 'TEXT', text: '. When raising a sensitive issue, describe ' },
            { kind: 'GAP', gapId: 'z5', solution: ['behaviour', 'behavior'], width: 10 },
            { kind: 'TEXT', text: ', not character. And in the minutes: “It was ' },
            { kind: 'GAP', gapId: 'z6', solution: ['agreed'], width: 7 },
            { kind: 'TEXT', text: ' that …”.' },
          ],
        },
        {
          id: 'ena11-5-writing',
          type: 'WRITING',
          instruction: 'Write the minutes.',
          prompt:
            'At a residents’ meeting, people discussed how to redesign the shared courtyard. Families want a playground; older residents are worried about noise and would prefer benches and flower beds; one resident wants bike racks. There was a tense moment when one resident accused the chair of the residents’ association of “only caring about her own grandchildren”. In the end, it was agreed to divide the courtyard; costs are still unclear. Write the minutes (180–250 words), with a heading, neutral reported views, the decision, action points with deadlines and the open question.',
          minWords: 180,
          maxWords: 260,
          aiFeedback: true,
          sampleAnswer:
            'Minutes of the Residents’ Meeting\n8 Linden Road, 3 April, 6.30–8.00 p.m.\nPresent: 17 residents; Ms Roth (property management)\nChair: Mr Jansen. Minutes: Ms Kaya\n\nItem 1: Redesign of the courtyard\n\nMs Roth outlined the current state of the courtyard and explained that a budget was available from the property management, although the amount had not yet been confirmed.\n\nSeveral families pointed out that eleven children now lived in the building and that there was no safe place for them to play. They proposed a small playground.\n\nA number of older residents expressed concern that a playground would cause considerable noise, particularly in the afternoons. They suggested benches and flower beds instead.\n\nMr Meier proposed adding covered bike racks, as bicycles were currently being stored in the stairwell.\n\nDuring the discussion, there was a brief disagreement between two residents, which the chair brought back to the substance of the proposals.\n\nDecision: After a full discussion, it was agreed by 14 votes to 3 to divide the courtyard, with a play area at the back and a seating area with flower beds at the front. Bike racks will be installed along the wall by the entrance.\n\nActions:\n– Ms Roth to obtain two quotes by 30 April.\n– Mr Jansen and Ms Osei to draft a layout plan by 15 May.\n\nOpen question: It remained unclear whether the costs would be covered entirely by the property management or whether residents would need to contribute.\n\nNext meeting: 20 May.',
        },
      ],
    },
  },
];
