import type { UnitSeed } from './chapter-beginner-1';

/**
 * Englische Grammatik, Kapitel 5: „Present continuous“
 *
 * Drei Seiten: Form und -ing-Schreibung, dann die Gegenüberstellung mit dem
 * Present Simple, zuletzt die Zustandsverben, die keine Verlaufsform bilden.
 * Der Kern ist Seite 2 – das Deutsche unterscheidet „ich arbeite“ (immer)
 * und „ich arbeite“ (gerade) nicht, das Englische muss es.
 *
 * Erklärungen tragen eine deutsche Übersetzung, Tabellen bleiben englisch.
 */
const v = 1;

export const ENGLISH_GRAMMAR_5_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Form und Schreibung.
  {
    order: 1,
    title: 'I’m working',
    subtitle: 'Form und -ing-Schreibung',
    estimatedMinutes: 18,
    content: {
      version: v,
      blocks: [
        { id: 'eng5-1-h1', type: 'HEADING', level: 1, text: 'I’m working' },
        {
          id: 'eng5-1-info-form',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'am / is / are + verb-ing',
          text: 'The present continuous has two parts: the right form of “to be” and the main verb with -ing. Questions and negatives work like with “to be” alone – no “do”: “Are you working?”, “She isn’t sleeping.”',
          translations: {
            de: {
              title: 'am / is / are + Verb-ing',
              text: 'Das Present Continuous hat zwei Teile: die passende Form von „to be“ und das Hauptverb mit -ing. Fragen und Verneinungen funktionieren wie bei „to be“ allein – ohne „do“: „Are you working?“, „She isn’t sleeping.“',
            },
          },
          table: {
            headers: ['', '+', '–', '?'],
            rows: [
              ['I', 'I’m working', 'I’m not working', 'Am I working?'],
              ['he / she / it', 'she’s working', 'she isn’t working', 'Is she working?'],
              ['you / we / they', 'we’re working', 'we aren’t working', 'Are we working?'],
            ],
          },
        },
        {
          id: 'eng5-1-info-spelling',
          type: 'INFO',
          variant: 'TIP',
          title: 'Spelling rules for -ing',
          text: 'Most verbs: + ing. Final -e drops: make → making. Short stressed vowel + one consonant: double it: stop → stopping, begin → beginning. -ie → -ying: die → dying, lie → lying.',
          translations: {
            de: {
              title: 'Schreibregeln für -ing',
              text: 'Die meisten Verben: + ing. Ein End-e fällt weg: make → making. Kurzer betonter Vokal + ein Konsonant: verdoppeln: stop → stopping, begin → beginning. -ie → -ying: die → dying, lie → lying.',
            },
          },
          table: {
            headers: ['rule', 'examples'],
            rows: [
              ['+ ing', 'read → reading, play → playing'],
              ['-e → -ing', 'write → writing, dance → dancing'],
              ['double consonant', 'sit → sitting, swim → swimming'],
              ['-ie → -ying', 'lie → lying'],
            ],
          },
        },
        {
          id: 'eng5-1-cloze',
          type: 'CLOZE',
          instruction: 'Write the -ing form.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'She’s ' },
            { kind: 'GAP', gapId: 'i1', solution: ['writing'], hint: 'write', width: 9 },
            { kind: 'TEXT', text: ' an email. They’re ' },
            { kind: 'GAP', gapId: 'i2', solution: ['swimming'], hint: 'swim', width: 10 },
            { kind: 'TEXT', text: ' in the lake. I’m ' },
            { kind: 'GAP', gapId: 'i3', solution: ['lying'], hint: 'lie', width: 7 },
            { kind: 'TEXT', text: ' on the beach. We’re ' },
            { kind: 'GAP', gapId: 'i4', solution: ['playing'], hint: 'play', width: 9 },
            { kind: 'TEXT', text: ' cards.' },
          ],
        },
        {
          id: 'eng5-1-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct question.',
          question: 'You want to know if Tom is sleeping.',
          options: [
            { id: 'o1', text: 'Does Tom sleeping?' },
            { id: 'o2', text: 'Is Tom sleeping?' },
            { id: 'o3', text: 'Is sleeping Tom?' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'The present continuous makes questions with “to be”, not “do”: “Is Tom sleeping?”',
          explanationTranslations: {
            de: 'Das Present Continuous bildet Fragen mit „to be“, nicht mit „do“: „Is Tom sleeping?“',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – Present Simple oder Continuous?
  {
    order: 2,
    title: 'Simple or continuous?',
    subtitle: 'Immer oder gerade?',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'eng5-2-h1', type: 'HEADING', level: 1, text: 'Simple or continuous?' },
        {
          id: 'eng5-2-intro',
          type: 'TEXT',
          text: 'German “Ich arbeite” can mean “I have a job” or “I’m busy right now”. English has to choose. The present simple looks at the whole picture; the present continuous looks at this moment or this period of time.',
          translations: {
            de: '„Ich arbeite“ kann im Deutschen heißen „ich habe eine Arbeit“ oder „ich bin gerade beschäftigt“. Das Englische muss sich entscheiden. Das Present Simple betrachtet das Gesamtbild, das Present Continuous diesen Moment oder diesen Zeitraum.',
          },
        },
        {
          id: 'eng5-2-info',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Signal words',
          text: 'Some words point to one form. With always, usually, often, every day → present simple. With now, at the moment, today, this week, Look!, Listen! → present continuous. The continuous is also used for temporary situations: “I’m living with my parents this summer.”',
          translations: {
            de: {
              title: 'Signalwörter',
              text: 'Manche Wörter zeigen auf eine Form. Mit always, usually, often, every day → Present Simple. Mit now, at the moment, today, this week, Look!, Listen! → Present Continuous. Die Verlaufsform steht auch für vorübergehende Situationen: „I’m living with my parents this summer.“',
            },
          },
          table: {
            headers: ['present simple', 'present continuous'],
            rows: [
              ['I work in a bank.', 'I’m working from home today.'],
              ['He usually drives.', 'He’s walking because his car is broken.'],
              ['It rains a lot here.', 'Look! It’s raining.'],
            ],
          },
        },
        {
          id: 'eng5-2-cloze',
          type: 'CLOZE',
          instruction: 'Choose the correct form.',
          wordBank: ['drinks', 'is drinking', 'go', 'am going', 'rains', 'is raining'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Tom usually ' },
            { kind: 'GAP', gapId: 's1', solution: ['drinks'], width: 12 },
            { kind: 'TEXT', text: ' coffee, but today he ' },
            { kind: 'GAP', gapId: 's2', solution: ['is drinking'], width: 12 },
            { kind: 'TEXT', text: ' tea. I ' },
            { kind: 'GAP', gapId: 's3', solution: ['go'], width: 9 },
            { kind: 'TEXT', text: ' to the gym every Monday. Take an umbrella – it ' },
            { kind: 'GAP', gapId: 's4', solution: ['is raining'], width: 11 },
            { kind: 'TEXT', text: '!' },
          ],
        },
        {
          id: 'eng5-2-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: '“Listen! Somebody ___ at the door.”',
          options: [
            { id: 'o1', text: 'knocks' },
            { id: 'o2', text: 'is knocking' },
            { id: 'o3', text: 'knock' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: '“Listen!” shows it is happening now: “is knocking”.',
          explanationTranslations: {
            de: '„Listen!“ zeigt, dass es gerade passiert: „is knocking“.',
          },
        },
        {
          id: 'eng5-2-match',
          type: 'MATCHING',
          instruction: 'Match the sentence with its meaning.',
          left: [
            { id: 'l1', text: 'She teaches French.' },
            { id: 'l2', text: 'She’s teaching French this term.' },
            { id: 'l3', text: 'He plays the piano.' },
            { id: 'l4', text: 'He’s playing the piano.' },
          ],
          right: [
            { id: 'r1', text: 'It’s her job.' },
            { id: 'r2', text: 'It’s only for a few months.' },
            { id: 'r3', text: 'He can play it.' },
            { id: 'r4', text: 'You can hear it now.' },
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

  // ====================================================== SEITE 3
  // Seite 3 – Zustandsverben.
  {
    order: 3,
    title: 'I know – not “I’m knowing”',
    subtitle: 'Zustandsverben',
    estimatedMinutes: 18,
    content: {
      version: v,
      blocks: [
        { id: 'eng5-3-h1', type: 'HEADING', level: 1, text: 'I know – not “I’m knowing”' },
        {
          id: 'eng5-3-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'State verbs',
          text: 'Some verbs describe states – feelings, thoughts, owning – not actions. They don’t normally use the continuous form, even when you mean “now”: “I know the answer.”, “She wants a coffee.”, “This bag belongs to me.”',
          translations: {
            de: {
              title: 'Zustandsverben',
              text: 'Manche Verben beschreiben Zustände – Gefühle, Gedanken, Besitz –, keine Handlungen. Sie stehen normalerweise nicht in der Verlaufsform, auch wenn „jetzt“ gemeint ist: „I know the answer.“, „She wants a coffee.“, „This bag belongs to me.“',
            },
          },
          table: {
            headers: ['group', 'verbs'],
            rows: [
              ['feelings', 'like, love, hate, want, prefer, need'],
              ['thinking', 'know, understand, believe, remember, mean'],
              ['owning', 'have (= own), belong, own'],
              ['senses', 'seem, sound, taste, smell'],
            ],
          },
        },
        {
          id: 'eng5-3-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'Which sentence is correct?',
          options: [
            { id: 'o1', text: 'I’m not understanding this word.' },
            { id: 'o2', text: 'I don’t understand this word.' },
            { id: 'o3', text: 'I not understand this word.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: '“understand” is a state verb, so it stays in the present simple: “I don’t understand.”',
          explanationTranslations: {
            de: '„understand“ ist ein Zustandsverb und bleibt im Present Simple: „I don’t understand.“',
          },
        },
        {
          id: 'eng5-3-info-have',
          type: 'INFO',
          variant: 'TIP',
          title: 'have: state or action?',
          text: '“have” meaning “own” is a state: “I have a car.” But “have” in expressions like “have breakfast”, “have a shower” or “have a good time” is an action, so the continuous is fine: “We’re having dinner.”',
          translations: {
            de: {
              title: 'have: Zustand oder Handlung?',
              text: '„have“ im Sinn von „besitzen“ ist ein Zustand: „I have a car.“ In Wendungen wie „have breakfast“, „have a shower“ oder „have a good time“ ist „have“ aber eine Handlung – dann geht die Verlaufsform: „We’re having dinner.“',
            },
          },
        },
        {
          id: 'eng5-3-cloze',
          type: 'CLOZE',
          instruction: 'Choose the correct form.',
          wordBank: ['want', 'am wanting', 'are having', 'have', 'knows', 'is knowing'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'I ' },
            { kind: 'GAP', gapId: 'k1', solution: ['want'], width: 11 },
            { kind: 'TEXT', text: ' a new phone. Can I call you back? We ' },
            { kind: 'GAP', gapId: 'k2', solution: ['are having'], width: 11 },
            { kind: 'TEXT', text: ' dinner. Ask Anna – she ' },
            { kind: 'GAP', gapId: 'k3', solution: ['knows'], width: 11 },
            { kind: 'TEXT', text: ' the way.' },
          ],
        },
      ],
    },
  },
];
