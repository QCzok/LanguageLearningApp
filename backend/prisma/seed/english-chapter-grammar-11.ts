import type { UnitSeed } from './chapter-beginner-1';

/**
 * Englische Grammatik, Kapitel 11: „Conditionals“
 *
 * Vier Seiten, geordnet nach Abstand zur Wirklichkeit: reale Bedingungen
 * (Typ 0 und 1, unless, in case, provided), Typ 2, Typ 3, zuletzt die
 * gemischten Formen samt wish. Die eine Regel, die alle Seiten verbindet:
 * Im if-Satz steht kein „would“ – das deutsche „würde“ im wenn-Satz ist die
 * häufigste Fehlerquelle.
 *
 * Erklärungen tragen wie im ganzen Grammatikbuch eine deutsche Übersetzung.
 */
const v = 1;

export const ENGLISH_GRAMMAR_11_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – reale Bedingungen.
  {
    order: 1,
    title: 'Real conditions',
    subtitle: 'Typ 0 und 1, unless, in case, provided',
    estimatedMinutes: 20,
    content: {
      version: v,
      blocks: [
        { id: 'eng11-1-h1', type: 'HEADING', level: 1, text: 'Real conditions' },
        {
          id: 'eng11-1-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Zero and first conditional',
          text: 'Zero conditional (if + present, present) for general truths: “If you press this button, the machine starts.” First conditional (if + present, will + verb) for real future possibilities: “If it rains, we’ll stay in.” In both, the if-clause never contains “will”.',
          translations: {
            de: {
              title: 'Bedingungssätze Typ 0 und 1',
              text: 'Typ 0 (if + Präsens, Präsens) für allgemeine Wahrheiten: „If you press this button, the machine starts.“ Typ 1 (if + Präsens, will + Verb) für reale Möglichkeiten in der Zukunft: „If it rains, we’ll stay in.“ In beiden steht im if-Satz nie „will“.',
            },
          },
          table: {
            headers: ['conjunction', 'meaning', 'example'],
            rows: [
              ['unless', 'if … not', 'Unless you hurry, you’ll miss it.'],
              ['provided / as long as', 'only if', 'You can go, provided you’re back by ten.'],
              ['in case', 'as a precaution', 'Take an umbrella in case it rains.'],
            ],
          },
        },
        {
          id: 'eng11-1-info-incase',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'in case ≠ if',
          text: '“in case” is not the same as “if”. “Take an umbrella in case it rains.” = take it now, as a precaution, because it might rain. “Take an umbrella if it rains.” = only take it when it is actually raining.',
          translations: {
            de: {
              title: 'in case ≠ if',
              text: '„in case“ ist nicht dasselbe wie „if“. „Take an umbrella in case it rains.“ = nimm ihn jetzt mit, vorsorglich, weil es regnen könnte (für den Fall, dass). „Take an umbrella if it rains.“ = nimm ihn nur mit, wenn es tatsächlich regnet.',
            },
          },
        },
        {
          id: 'eng11-1-cloze',
          type: 'CLOZE',
          instruction: 'Complete with if, unless, in case or provided.',
          wordBank: ['if', 'unless', 'in case', 'provided'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Write down my number ' },
            { kind: 'GAP', gapId: 'c1', solution: ['in case'], width: 9 },
            { kind: 'TEXT', text: ' you get lost. You can borrow the car ' },
            { kind: 'GAP', gapId: 'c2', solution: ['provided'], width: 9 },
            { kind: 'TEXT', text: ' you fill it up. We’ll be late ' },
            { kind: 'GAP', gapId: 'c3', solution: ['unless'], width: 9 },
            { kind: 'TEXT', text: ' we leave now. ' },
            { kind: 'GAP', gapId: 'c4', solution: ['If'], width: 9 },
            { kind: 'TEXT', text: ' you heat ice, it melts.' },
          ],
        },
        {
          id: 'eng11-1-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'Which sentence is correct?',
          options: [
            { id: 'o1', text: 'I’ll call you as soon as I will arrive.' },
            { id: 'o2', text: 'I’ll call you as soon as I arrive.' },
            { id: 'o3', text: 'I call you as soon as I will arrive.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'Like “if”, time conjunctions (when, as soon as, before, after, until) take the present, not “will”.',
          explanationTranslations: {
            de: 'Wie nach „if“ steht auch nach Zeitkonjunktionen (when, as soon as, before, after, until) das Präsens, nicht „will“.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – Typ 2.
  {
    order: 2,
    title: 'If I were …',
    subtitle: 'Typ 2: irreal in der Gegenwart',
    estimatedMinutes: 20,
    content: {
      version: v,
      blocks: [
        { id: 'eng11-2-h1', type: 'HEADING', level: 1, text: 'If I were …' },
        {
          id: 'eng11-2-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'if + past simple, would + verb',
          text: 'The second conditional is for imaginary or unlikely situations now or in the future. The past form in the if-clause does not refer to the past; it shows distance from reality. With “be”, “were” is used for all persons in careful English (“If I were you”); “was” is common in speech.',
          translations: {
            de: {
              title: 'if + Past Simple, would + Verb',
              text: 'Typ 2 steht für gedachte oder unwahrscheinliche Situationen jetzt oder in der Zukunft. Die Vergangenheitsform im if-Satz meint keine Vergangenheit, sondern zeigt Abstand zur Wirklichkeit – wie der deutsche Konjunktiv II. Bei „be“ steht im sorgfältigen Englisch „were“ für alle Personen („If I were you“); „was“ ist mündlich üblich.',
            },
          },
          table: {
            headers: ['German', 'English'],
            rows: [
              ['Wenn ich Zeit hätte, würde ich kommen.', 'If I had time, I would come.'],
              ['Wenn ich du wäre, …', 'If I were you, …'],
              ['Wenn er fragen würde, …', 'If he asked, … (not: if he would ask)'],
            ],
          },
        },
        {
          id: 'eng11-2-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: '“Wenn sie mich fragen würde, würde ich helfen.”',
          options: [
            { id: 'o1', text: 'If she would ask me, I would help.' },
            { id: 'o2', text: 'If she asked me, I would help.' },
            { id: 'o3', text: 'If she asks me, I would help.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'German often uses “würde” in both parts; English uses “would” only in the result: “If she asked me, …”.',
          explanationTranslations: {
            de: 'Das Deutsche sagt oft in beiden Teilen „würde“; das Englische nur im Hauptsatz: „If she asked me, …“.',
          },
        },
        {
          id: 'eng11-2-cloze',
          type: 'CLOZE',
          instruction: 'Complete the second conditional.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'If I ' },
            { kind: 'GAP', gapId: 's1', solution: ['knew'], hint: 'know', width: 7 },
            { kind: 'TEXT', text: ' the answer, I ' },
            { kind: 'GAP', gapId: 's2', solution: ['would tell', '’d tell', "'d tell"], hint: 'tell', width: 11 },
            { kind: 'TEXT', text: ' you. If we ' },
            { kind: 'GAP', gapId: 's3', solution: ['lived'], hint: 'live', width: 7 },
            { kind: 'TEXT', text: ' closer, we ' },
            { kind: 'GAP', gapId: 's4', solution: ['could'], hint: 'can', width: 7 },
            { kind: 'TEXT', text: ' visit more often.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – Typ 3.
  {
    order: 3,
    title: 'If I had known …',
    subtitle: 'Typ 3: irreal in der Vergangenheit',
    estimatedMinutes: 20,
    content: {
      version: v,
      blocks: [
        { id: 'eng11-3-h1', type: 'HEADING', level: 1, text: 'If I had known …' },
        {
          id: 'eng11-3-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'if + past perfect, would have + past participle',
          text: 'The third conditional imagines a different past and its result. Both parts are unreal: “If I had known, I would have come.” = I didn’t know, so I didn’t come. Instead of “would”, “could” or “might” are possible. In speech, “had” and “would” are both contracted to ’d – the verb form tells you which one it is.',
          translations: {
            de: {
              title: 'if + Past Perfect, would have + Partizip',
              text: 'Typ 3 stellt sich eine andere Vergangenheit und ihr Ergebnis vor. Beide Teile sind irreal: „If I had known, I would have come.“ = Ich wusste es nicht, also kam ich nicht. Statt „would“ gehen auch „could“ oder „might“. Mündlich werden „had“ und „would“ beide zu ’d verkürzt – die Verbform zeigt, welches gemeint ist.',
            },
          },
          table: {
            headers: ['German', 'English'],
            rows: [
              ['Wenn ich es gewusst hätte, wäre ich gekommen.', 'If I had known, I would have come.'],
              ['Wenn wir früher losgefahren wären, …', 'If we had left earlier, …'],
              ['… hätten wir den Zug erwischt.', '… we would have caught the train.'],
            ],
          },
        },
        {
          id: 'eng11-3-cloze',
          type: 'CLOZE',
          instruction: 'Complete the third conditional.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'If you ' },
            { kind: 'GAP', gapId: 't1', solution: ['had told', '’d told', "'d told"], hint: 'tell', width: 10 },
            { kind: 'TEXT', text: ' me, I ' },
            { kind: 'GAP', gapId: 't2', solution: ['would have helped', '’d have helped', "'d have helped"], hint: 'help', width: 18 },
            { kind: 'TEXT', text: '. If it ' },
            { kind: 'GAP', gapId: 't3', solution: ['hadn’t rained', "hadn't rained", 'had not rained'], hint: 'not / rain', width: 14 },
            { kind: 'TEXT', text: ', we ' },
            { kind: 'GAP', gapId: 't4', solution: ['could have played', 'would have played'], hint: 'could / play', width: 18 },
            { kind: 'TEXT', text: ' outside.' },
          ],
        },
        {
          id: 'eng11-3-choice',
          type: 'CHOICE',
          instruction: 'What does ’d mean?',
          question: '“If I’d seen him, I’d have said hello.”',
          options: [
            { id: 'o1', text: 'If I would seen him, I had have said hello.' },
            { id: 'o2', text: 'If I had seen him, I would have said hello.' },
            { id: 'o3', text: 'If I had seen him, I had have said hello.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'Before a past participle (seen), ’d = had. Before “have”, ’d = would.',
          explanationTranslations: {
            de: 'Vor einem Partizip (seen) ist ’d = had. Vor „have“ ist ’d = would.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – gemischte Formen und wish.
  {
    order: 4,
    title: 'Mixed conditionals and wish',
    subtitle: 'Gemischte Formen, wish, if only',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'eng11-4-h1', type: 'HEADING', level: 1, text: 'Mixed conditionals and wish' },
        {
          id: 'eng11-4-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Mixing the times',
          text: 'When the condition and the result belong to different times, mix the forms. Past condition, present result: “If I had taken the job, I would be rich now.” Present condition, past result: “If I weren’t afraid of flying, I would have visited you.”',
          translations: {
            de: {
              title: 'Die Zeiten mischen',
              text: 'Gehören Bedingung und Folge zu verschiedenen Zeiten, mischt man die Formen. Bedingung in der Vergangenheit, Folge in der Gegenwart: „If I had taken the job, I would be rich now.“ Bedingung in der Gegenwart, Folge in der Vergangenheit: „If I weren’t afraid of flying, I would have visited you.“',
            },
          },
        },
        {
          id: 'eng11-4-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'You missed breakfast this morning. Now you are hungry.',
          options: [
            { id: 'o1', text: 'If I had eaten breakfast, I wouldn’t be hungry now.' },
            { id: 'o2', text: 'If I ate breakfast, I wouldn’t have been hungry now.' },
            { id: 'o3', text: 'If I would eat breakfast, I’m not hungry.' },
          ],
          multiple: false,
          solution: ['o1'],
          explanation: 'Past condition (had eaten) + present result (wouldn’t be now).',
          explanationTranslations: {
            de: 'Bedingung in der Vergangenheit (had eaten) + Folge in der Gegenwart (wouldn’t be now).',
          },
        },
        {
          id: 'eng11-4-info-wish',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'wish and if only',
          text: '“wish” follows the conditional pattern: one step back in time. Present wish: wish + past simple (“I wish I had more time”). Past regret: wish + past perfect (“I wish I hadn’t said that”). Annoyance: wish + would (“I wish you would stop”). “If only” is a stronger version.',
          translations: {
            de: {
              title: 'wish und if only',
              text: '„wish“ folgt dem Muster der Bedingungssätze: eine Zeitstufe zurück. Wunsch zur Gegenwart: wish + Past Simple („I wish I had more time“ = Ich wünschte, ich hätte mehr Zeit). Bedauern über die Vergangenheit: wish + Past Perfect („I wish I hadn’t said that“). Ärger über andere: wish + would („I wish you would stop“). „If only“ ist die stärkere Form.',
            },
          },
          table: {
            headers: ['wish about', 'example'],
            rows: [
              ['now', 'I wish I lived by the sea.'],
              ['the past', 'I wish I had studied harder.'],
              ['other people', 'I wish he would call.'],
            ],
          },
        },
        {
          id: 'eng11-4-cloze',
          type: 'CLOZE',
          instruction: 'Complete the wishes.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'I don’t speak Italian. I wish I ' },
            { kind: 'GAP', gapId: 'w1', solution: ['spoke', 'could speak'], hint: 'speak', width: 7 },
            { kind: 'TEXT', text: ' Italian.\nI missed the concert. I wish I ' },
            { kind: 'GAP', gapId: 'w2', solution: ['hadn’t missed', "hadn't missed", 'had not missed'], hint: 'not / miss', width: 14 },
            { kind: 'TEXT', text: ' it.\nHe never listens. I wish he ' },
            { kind: 'GAP', gapId: 'w3', solution: ['would listen', '’d listen', "'d listen"], hint: 'listen', width: 13 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'eng11-4-match',
          type: 'MATCHING',
          instruction: 'Match the sentence with its meaning.',
          left: [
            { id: 'l1', text: 'I wish I had a car.' },
            { id: 'l2', text: 'I wish I had bought that car.' },
            { id: 'l3', text: 'I wish you would sell that car.' },
          ],
          right: [
            { id: 'r1', text: 'I don’t have a car now.' },
            { id: 'r2', text: 'I didn’t buy it, and I regret it.' },
            { id: 'r3', text: 'Your car annoys me.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
          ],
        },
      ],
    },
  },
];
