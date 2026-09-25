import type { UnitSeed } from './chapter-beginner-1';

/**
 * Englisch, Beginner, Kapitel 9: „Health“ (A2, Kapitel 3)
 *
 * Seite 1 bringt Körperteile und Beschwerden, Seite 2 das Present Continuous
 * – hier im Wartezimmer eingeführt, weil „What are you doing?“ und „I’m not
 * feeling well“ genau dort gebraucht werden. Seite 3 gibt Ratschläge mit
 * should, Seite 4 den Termin am Telefon.
 *
 * Übersetzungen wie im ganzen Beginner-Band.
 */
const v = 1;

export const ENGLISH_BEGINNER_9_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Körper und Beschwerden.
  {
    order: 1,
    title: 'What’s the matter?',
    subtitle: 'Körperteile und Beschwerden',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'en9-1-h1', type: 'HEADING', level: 1, text: 'What’s the matter?' },
        {
          id: 'en9-1-image',
          type: 'IMAGE',
          url: 'illustration:doctor-visit',
          alt: 'Eine Ärztin mit Stethoskop spricht mit einem Patienten in einer Praxis.',
          caption: 'At the doctor’s.',
        },
        {
          id: 'en9-1-dlg',
          type: 'DIALOGUE',
          title: 'In the break',
          lines: [
            { speaker: 'Yuki', text: 'Are you OK, Diego? You look pale.' },
            { speaker: 'Diego', text: 'Not really. I’ve got a terrible headache and my throat hurts.' },
            { speaker: 'Yuki', text: 'Oh no. Have you got a temperature?' },
            { speaker: 'Diego', text: 'I think so. And my back hurts too.' },
            { speaker: 'Yuki', text: 'Maybe it’s the flu. Go home and rest!' },
          ],
        },
        {
          id: 'en9-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Words: the body',
          items: [
            { term: 'head', translations: { de: 'der Kopf', es: 'la cabeza' } },
            { term: 'throat', translations: { de: 'der Hals (innen)', es: 'la garganta' } },
            { term: 'back', translations: { de: 'der Rücken', es: 'la espalda' } },
            { term: 'stomach', translations: { de: 'der Magen, der Bauch', es: 'el estómago' } },
            { term: 'arm / hand', translations: { de: 'der Arm / die Hand', es: 'el brazo / la mano' } },
            { term: 'leg / foot', translations: { de: 'das Bein / der Fuß', es: 'la pierna / el pie' } },
            { term: 'tooth – teeth', translations: { de: 'der Zahn – die Zähne', es: 'el diente – los dientes' } },
            { term: 'ear', translations: { de: 'das Ohr', es: 'la oreja, el oído' } },
            { term: 'a temperature', translations: { de: 'Fieber', es: 'fiebre' }, example: 'I’ve got a temperature.' },
            { term: 'a cold / the flu', translations: { de: 'eine Erkältung / die Grippe', es: 'un resfriado / la gripe' } },
          ],
        },
        {
          id: 'en9-1-info-ache',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'I’ve got a headache – my arm hurts',
          text: 'There are two common ways to say what is wrong. With some parts of the body you use “-ache”: “I’ve got a headache / stomach ache / toothache / backache”. With every part you can say “My … hurts”: “My leg hurts.”, “My feet hurt.”. Note: English uses “my”, not “the”: “My head hurts.” (German: “Mir tut der Kopf weh.”)',
          translations: {
            de: {
              title: 'I’ve got a headache – my arm hurts',
              text: 'Es gibt zwei übliche Arten zu sagen, was einem fehlt. Bei manchen Körperteilen verwendet man „-ache“: „I’ve got a headache / stomach ache / toothache / backache“. Bei allen Körperteilen geht „My … hurts“: „My leg hurts.“, „My feet hurt.“. Beachten Sie: Das Englische sagt „my“, nicht „the“: „My head hurts.“ (Deutsch: „Mir tut der Kopf weh.“)',
            },
          },
          table: {
            headers: ['German', 'English'],
            rows: [
              ['Ich habe Kopfschmerzen.', 'I’ve got a headache.'],
              ['Mir tut der Bauch weh.', 'I’ve got stomach ache. / My stomach hurts.'],
              ['Mir tun die Füße weh.', 'My feet hurt.'],
              ['Ich habe Halsschmerzen.', 'I’ve got a sore throat.'],
            ],
          },
        },
        {
          id: 'en9-1-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'How do you say “Mir tut der Rücken weh”?',
          options: [
            { id: 'o1', text: 'Me hurts the back.' },
            { id: 'o2', text: 'My back hurts.' },
            { id: 'o3', text: 'The back hurts me.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'English uses the possessive and the body part as the subject: “My back hurts.”',
          explanationTranslations: {
            de: 'Das Englische verwendet den Possessivbegleiter und macht den Körperteil zum Subjekt: „My back hurts.“',
          },
        },
        {
          id: 'en9-1-match',
          type: 'MATCHING',
          instruction: 'Match the problem with the body part.',
          left: [
            { id: 'l1', text: 'a headache' },
            { id: 'l2', text: 'toothache' },
            { id: 'l3', text: 'a sore throat' },
            { id: 'l4', text: 'stomach ache' },
          ],
          right: [
            { id: 'r1', text: 'head' },
            { id: 'r2', text: 'teeth' },
            { id: 'r3', text: 'throat' },
            { id: 'r4', text: 'stomach' },
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
  // Seite 2 – Present Continuous.
  {
    order: 2,
    title: 'I’m waiting for the doctor',
    subtitle: 'Das Present Continuous',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'en9-2-h1', type: 'HEADING', level: 1, text: 'I’m waiting for the doctor' },
        {
          id: 'en9-2-dlg',
          type: 'DIALOGUE',
          title: 'A phone call from the waiting room',
          lines: [
            { speaker: 'Emma', text: 'Hi, Diego. Where are you? The lesson is starting.' },
            { speaker: 'Diego', text: 'Sorry, Emma. I’m sitting in the waiting room at the doctor’s.' },
            { speaker: 'Emma', text: 'Oh dear. Are you feeling bad?' },
            { speaker: 'Diego', text: 'Yes, I’m not feeling well at all. Lots of people are waiting here.' },
            { speaker: 'Emma', text: 'Don’t worry about the lesson. The others are doing a test anyway!' },
          ],
        },
        {
          id: 'en9-2-info-form',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Present continuous: am/is/are + -ing',
          text: 'The present continuous is for things happening now, at the moment of speaking, or around now. You form it with “to be” + verb-ing. German uses the normal present for this (“Ich warte”), sometimes with “gerade”.',
          translations: {
            de: {
              title: 'Present Continuous: am/is/are + -ing',
              text: 'Das Present Continuous steht für das, was jetzt gerade passiert – im Moment des Sprechens oder in dieser Zeit. Man bildet es mit „to be“ + Verb-ing. Das Deutsche nimmt dafür das normale Präsens („Ich warte“), manchmal mit „gerade“.',
            },
          },
          table: {
            headers: ['', 'example'],
            rows: [
              ['+', 'I’m waiting. / She’s sleeping. / They’re working.'],
              ['–', 'I’m not feeling well. / He isn’t eating.'],
              ['?', 'Are you feeling bad? / What is she doing?'],
            ],
          },
        },
        {
          id: 'en9-2-info-spelling',
          type: 'INFO',
          variant: 'TIP',
          title: 'Spelling with -ing',
          text: 'Most verbs just add -ing. A final -e disappears: “make → making”. A short stressed vowel + one consonant doubles the consonant: “sit → sitting”, “run → running”. “-ie” becomes “-y”: “lie → lying”.',
          translations: {
            de: {
              title: 'Schreibung mit -ing',
              text: 'Die meisten Verben bekommen einfach -ing. Ein End-e fällt weg: „make → making“. Nach kurzem betontem Vokal + einem Konsonanten wird der Konsonant verdoppelt: „sit → sitting“, „run → running“. Aus „-ie“ wird „-y“: „lie → lying“.',
            },
          },
        },
        {
          id: 'en9-2-cloze',
          type: 'CLOZE',
          instruction: 'Complete with the present continuous.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Diego ' },
            { kind: 'GAP', gapId: 'c1', solution: ['is sitting', '’s sitting', "'s sitting"], hint: 'sit', width: 11 },
            { kind: 'TEXT', text: ' in the waiting room. Lots of people ' },
            { kind: 'GAP', gapId: 'c2', solution: ['are waiting'], hint: 'wait', width: 12 },
            { kind: 'TEXT', text: '. The other students ' },
            { kind: 'GAP', gapId: 'c3', solution: ['are doing'], hint: 'do', width: 10 },
            { kind: 'TEXT', text: ' a test. Diego ' },
            { kind: 'GAP', gapId: 'c4', solution: ['isn’t feeling', "isn't feeling", 'is not feeling'], hint: 'not / feel', width: 14 },
            { kind: 'TEXT', text: ' well.' },
          ],
        },
        {
          id: 'en9-2-info-simple',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Now or usually?',
          text: 'Present simple = usually, always, in general: “I work in an office.” Present continuous = now, at the moment: “Today I’m working at home.” Some verbs are almost never used with -ing because they describe states, not actions: like, love, want, know, need, understand, believe.',
          translations: {
            de: {
              title: 'Jetzt oder normalerweise?',
              text: 'Present Simple = normalerweise, immer, allgemein: „I work in an office.“ Present Continuous = jetzt, im Moment: „Today I’m working at home.“ Einige Verben stehen fast nie mit -ing, weil sie Zustände beschreiben, keine Handlungen: like, love, want, know, need, understand, believe.',
            },
          },
          table: {
            headers: ['usually (simple)', 'now (continuous)'],
            rows: [
              ['I walk to work.', 'I’m taking the bus today.'],
              ['She drinks coffee.', 'She’s drinking tea at the moment.'],
              ['They live in York.', 'They’re staying in a hotel this week.'],
            ],
          },
        },
        {
          id: 'en9-2-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'Which sentence is correct?',
          options: [
            { id: 'o1', text: 'I’m needing a doctor.' },
            { id: 'o2', text: 'I need a doctor.' },
            { id: 'o3', text: 'I needing a doctor.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: '“need” is a state verb, so it stays in the present simple even when you mean “now”.',
          explanationTranslations: {
            de: '„need“ ist ein Zustandsverb und bleibt im Present Simple, auch wenn „jetzt“ gemeint ist.',
          },
        },
        {
          id: 'en9-2-choice2',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'Look! It ___.',
          options: [
            { id: 'o1', text: 'snows' },
            { id: 'o2', text: '’s snowing' },
            { id: 'o3', text: 'snowing' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: '“Look!” shows that it is happening right now: present continuous, “It’s snowing.”',
          explanationTranslations: {
            de: '„Look!“ zeigt, dass es gerade jetzt passiert: Present Continuous, „It’s snowing.“',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – Ratschläge mit should.
  {
    order: 3,
    title: 'You should rest',
    subtitle: 'Ratschläge mit should',
    estimatedMinutes: 20,
    content: {
      version: v,
      blocks: [
        { id: 'en9-3-h1', type: 'HEADING', level: 1, text: 'You should rest' },
        {
          id: 'en9-3-dlg',
          type: 'DIALOGUE',
          title: 'In the consulting room',
          lines: [
            { speaker: 'Doctor', text: 'Hello, Mr Ruiz. What seems to be the problem?' },
            { speaker: 'Diego', text: 'I’ve got a headache and a sore throat, and I feel very tired.' },
            { speaker: 'Doctor', text: 'Let me have a look … It’s the flu. You should stay in bed for a few days.' },
            { speaker: 'Diego', text: 'Should I take any medicine?' },
            { speaker: 'Doctor', text: 'You can take paracetamol for the headache. And you should drink lots of water.' },
            { speaker: 'Diego', text: 'Can I go to work?' },
            { speaker: 'Doctor', text: 'No, you shouldn’t go to work this week.' },
          ],
        },
        {
          id: 'en9-3-info-should',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'should – sollte',
          text: '“should” gives advice: “You should rest.” = “Du solltest dich ausruhen.” Like “can”, it never changes and the next verb has no “to”. The negative is “shouldn’t”. To ask for advice: “Should I …?”, “What should I do?”',
          translations: {
            de: {
              title: 'should – sollte',
              text: '„should“ gibt einen Rat: „You should rest.“ = „Du solltest dich ausruhen.“ Wie „can“ ändert es sich nie, und das nächste Verb steht ohne „to“. Die Verneinung lautet „shouldn’t“. Um Rat bitten: „Should I …?“, „What should I do?“',
            },
          },
          table: {
            headers: ['', 'example'],
            rows: [
              ['+', 'You should drink lots of water.'],
              ['–', 'You shouldn’t go to work.'],
              ['?', 'Should I take any medicine?'],
            ],
          },
        },
        {
          id: 'en9-3-match',
          type: 'MATCHING',
          instruction: 'Match the problem with the advice.',
          left: [
            { id: 'l1', text: 'I’ve got toothache.' },
            { id: 'l2', text: 'I’m always tired.' },
            { id: 'l3', text: 'I’ve got a cold.' },
            { id: 'l4', text: 'My back hurts.' },
          ],
          right: [
            { id: 'r1', text: 'You should see a dentist.' },
            { id: 'r2', text: 'You should go to bed earlier.' },
            { id: 'r3', text: 'You should drink hot tea with honey.' },
            { id: 'r4', text: 'You shouldn’t carry heavy bags.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'en9-3-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'Which sentence is correct?',
          options: [
            { id: 'o1', text: 'You should to see a doctor.' },
            { id: 'o2', text: 'You shoulds see a doctor.' },
            { id: 'o3', text: 'You should see a doctor.' },
          ],
          multiple: false,
          solution: ['o3'],
          explanation: '“should” is followed by the basic form without “to”, and it never takes an -s.',
          explanationTranslations: {
            de: 'Auf „should“ folgt die Grundform ohne „to“, und es bekommt nie ein -s.',
          },
        },
        {
          id: 'en9-3-cloze',
          type: 'CLOZE',
          instruction: 'Complete with should or shouldn’t.',
          wordBank: ['should', 'shouldn’t'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'You have the flu. You ' },
            { kind: 'GAP', gapId: 's1', solution: ['should'], width: 9 },
            { kind: 'TEXT', text: ' stay in bed. You ' },
            { kind: 'GAP', gapId: 's2', solution: ['shouldn’t', "shouldn't"], width: 9 },
            { kind: 'TEXT', text: ' go to work. You ' },
            { kind: 'GAP', gapId: 's3', solution: ['should'], width: 9 },
            { kind: 'TEXT', text: ' drink lots of water, and you ' },
            { kind: 'GAP', gapId: 's4', solution: ['shouldn’t', "shouldn't"], width: 9 },
            { kind: 'TEXT', text: ' smoke.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – einen Termin vereinbaren.
  {
    order: 4,
    title: 'Making an appointment',
    subtitle: 'Einen Termin am Telefon vereinbaren',
    estimatedMinutes: 20,
    content: {
      version: v,
      blocks: [
        { id: 'en9-4-h1', type: 'HEADING', level: 1, text: 'Making an appointment' },
        {
          id: 'en9-4-dlg',
          type: 'DIALOGUE',
          title: 'On the phone to the surgery',
          lines: [
            { speaker: 'Receptionist', text: 'Good morning, Park Road Surgery. How can I help?' },
            { speaker: 'Karim', text: 'Hello. I’d like to make an appointment with a doctor, please.' },
            { speaker: 'Receptionist', text: 'Is it urgent?' },
            { speaker: 'Karim', text: 'Not really. I’ve had a pain in my knee for two weeks.' },
            { speaker: 'Receptionist', text: 'The first appointment is on Thursday at 10:20. Is that OK?' },
            { speaker: 'Karim', text: 'Thursday at 10:20 … Yes, that’s fine.' },
            { speaker: 'Receptionist', text: 'Can I have your name and date of birth?' },
            { speaker: 'Karim', text: 'Karim Hassan, the fourth of May, nineteen ninety.' },
          ],
        },
        {
          id: 'en9-4-vocab',
          type: 'VOCAB_LIST',
          title: 'Words: at the surgery',
          items: [
            { term: 'appointment', translations: { de: 'der Termin', es: 'la cita' } },
            { term: 'surgery (UK)', translations: { de: 'die Arztpraxis', es: 'el consultorio' } },
            { term: 'urgent', translations: { de: 'dringend', es: 'urgente' } },
            { term: 'pain', translations: { de: 'der Schmerz', es: 'el dolor' } },
            { term: 'date of birth', translations: { de: 'das Geburtsdatum', es: 'la fecha de nacimiento' } },
            { term: 'prescription', translations: { de: 'das Rezept', es: 'la receta' } },
            { term: 'chemist’s / pharmacy', translations: { de: 'die Apotheke', es: 'la farmacia' } },
            { term: 'medicine', translations: { de: 'das Medikament', es: 'la medicina' } },
          ],
        },
        {
          id: 'en9-4-info-nhs',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'The GP and the NHS',
          text: 'In the UK, your family doctor is called a GP (general practitioner), and the practice is a “surgery” – even though nobody has an operation there. Health care is free through the NHS (National Health Service). In an emergency, call 999 or go to A&E (Accident and Emergency).',
          translations: {
            de: {
              title: 'Der GP und der NHS',
              text: 'In Großbritannien heißt der Hausarzt GP (general practitioner), und die Praxis ist eine „surgery“ – obwohl dort niemand operiert wird. Die Gesundheitsversorgung ist über den NHS (National Health Service) kostenlos. Im Notfall ruft man 999 an oder geht in die Notaufnahme, „A&E“ (Accident and Emergency).',
            },
          },
        },
        {
          id: 'en9-4-order',
          type: 'ORDERING',
          instruction: 'Put the phone call in order.',
          items: [
            { id: 'd1', text: 'Good morning, Park Road Surgery.' },
            { id: 'd2', text: 'I’d like to make an appointment, please.' },
            { id: 'd3', text: 'Is Thursday at 10:20 OK?' },
            { id: 'd4', text: 'Yes, that’s fine.' },
            { id: 'd5', text: 'Can I have your name, please?' },
          ],
          solution: ['d1', 'd2', 'd3', 'd4', 'd5'],
        },
        {
          id: 'en9-4-choice',
          type: 'CHOICE',
          instruction: 'Answer the question about the dialogue.',
          question: 'What is Karim’s problem?',
          options: [
            { id: 'o1', text: 'He has had a pain in his knee for two weeks.' },
            { id: 'o2', text: 'He has got the flu.' },
            { id: 'o3', text: 'He needs a prescription for his son.' },
          ],
          multiple: false,
          solution: ['o1'],
          explanation: 'Karim says: “I’ve had a pain in my knee for two weeks.”',
          explanationTranslations: {
            de: 'Karim sagt: „I’ve had a pain in my knee for two weeks.“ – Er hat seit zwei Wochen Knieschmerzen.',
          },
        },
        {
          id: 'en9-4-info-dates',
          type: 'INFO',
          variant: 'TIP',
          title: 'Saying dates',
          text: 'You write “4 May” or “4th May”, but you say “the fourth of May”. Years are said in two parts: 1990 = “nineteen ninety”, 2026 = “twenty twenty-six”.',
          translations: {
            de: {
              title: 'Daten aussprechen',
              text: 'Man schreibt „4 May“ oder „4th May“, sagt aber „the fourth of May“. Jahreszahlen spricht man in zwei Teilen: 1990 = „nineteen ninety“, 2026 = „twenty twenty-six“.',
            },
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – Rückblick.
  {
    order: 5,
    title: 'Can you do it?',
    subtitle: 'Rückblick auf das ganze Kapitel',
    estimatedMinutes: 18,
    content: {
      version: v,
      blocks: [
        { id: 'en9-5-h1', type: 'HEADING', level: 1, text: 'Can you do it?' },
        {
          id: 'en9-5-intro',
          type: 'TEXT',
          text: 'The whole chapter again: the body, aches and pains, the present continuous, should, and making an appointment.',
          translations: {
            de: 'Das ganze Kapitel noch einmal: der Körper, Schmerzen, das Present Continuous, should und einen Termin vereinbaren.',
          },
        },
        {
          id: 'en9-5-cloze',
          type: 'CLOZE',
          instruction: 'Complete the text.',
          wordBank: ['headache', 'hurts', 'am', 'should', 'appointment'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'I’ve got a ' },
            { kind: 'GAP', gapId: 'f1', solution: ['headache'], width: 9 },
            { kind: 'TEXT', text: ' and my throat ' },
            { kind: 'GAP', gapId: 'f2', solution: ['hurts'], width: 6 },
            { kind: 'TEXT', text: '. Right now I ' },
            { kind: 'GAP', gapId: 'f3', solution: ['am'], width: 4 },
            { kind: 'TEXT', text: ' lying on the sofa. My friend says I ' },
            { kind: 'GAP', gapId: 'f4', solution: ['should'], width: 7 },
            { kind: 'TEXT', text: ' see a doctor, so now I’m calling the surgery to make an ' },
            { kind: 'GAP', gapId: 'f5', solution: ['appointment'], width: 12 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'en9-5-match',
          type: 'MATCHING',
          instruction: 'Match the question with the answer.',
          left: [
            { id: 'm1', text: 'What’s the matter?' },
            { id: 'm2', text: 'What are you doing?' },
            { id: 'm3', text: 'What should I do?' },
            { id: 'm4', text: 'Is it urgent?' },
          ],
          right: [
            { id: 'x1', text: 'I’ve got a sore throat.' },
            { id: 'x2', text: 'I’m waiting for the doctor.' },
            { id: 'x3', text: 'You should stay in bed.' },
            { id: 'x4', text: 'No, not really.' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'x1' },
            { leftId: 'm2', rightId: 'x2' },
            { leftId: 'm3', rightId: 'x3' },
            { leftId: 'm4', rightId: 'x4' },
          ],
        },
        {
          id: 'en9-5-choice',
          type: 'CHOICE',
          instruction: 'Mark all the correct sentences.',
          question: 'Which of these sentences are correct?',
          options: [
            { id: 'r1', text: 'She’s working from home today.' },
            { id: 'r2', text: 'I’m knowing the answer.' },
            { id: 'r3', text: 'You shouldn’t eat so much sugar.' },
            { id: 'r4', text: 'The head hurts me.' },
          ],
          multiple: true,
          solution: ['r1', 'r3'],
          explanation: '“know” is a state verb: “I know the answer.” And pain is said with “my”: “My head hurts.”',
          explanationTranslations: {
            de: '„know“ ist ein Zustandsverb: „I know the answer.“ Und Schmerzen drückt man mit „my“ aus: „My head hurts.“',
          },
        },
        {
          id: 'en9-5-writing',
          type: 'WRITING',
          instruction: 'Write a message to your teacher.',
          prompt:
            'You are ill and can’t come to the lesson. Write a short message (five to seven sentences): What’s the matter? What are you doing now? What did the doctor say you should do?',
          minWords: 40,
          maxWords: 120,
          aiFeedback: true,
          sampleAnswer:
            'Hi Emma, I’m sorry, but I can’t come to the lesson today. I’ve got a bad cold and a temperature. At the moment I’m lying in bed and drinking lots of tea. I went to the doctor this morning. She said I should stay at home for three days and I shouldn’t go out. I hope I can come next week. Best wishes, Anna',
        },
      ],
    },
  },
];
