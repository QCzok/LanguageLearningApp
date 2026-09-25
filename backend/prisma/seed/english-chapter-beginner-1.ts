import type { UnitSeed } from './chapter-beginner-1';

/**
 * Englisch, Beginner, Kapitel 1: „Hello!“
 *
 * Der englische Gegenpart zu `chapter-beginner-1.ts` und
 * `spanish-chapter-beginner-1.ts`: dieselben vier Situationen (begrüßen,
 * vorstellen, Herkunft, buchstabieren und zählen), darauf ein Rückblick.
 *
 * Die Seiten sind einsprachig englisch. Erklärkästen, Fließtext und
 * Erklärungen zu Aufgaben tragen eine deutsche Übersetzung (`de`), die in der
 * App auf A1 aufklappbar ist. Die Vokabellisten tragen Deutsch und Spanisch –
 * Englisch, sonst die Brückensprache, ist hier die Zielsprache und fällt
 * deshalb weg. Tabellen bleiben englisch: Sie enthalten den Stoff selbst.
 *
 * Wiederkehrende Personen des Bandes: die Lehrerin Emma Clarke und ihre
 * Kursteilnehmenden Anna (Deutschland), Diego (Mexiko), Yuki (Japan) und
 * Karim (Ägypten) an einer Sprachschule in Manchester.
 *
 * Sämtliche Texte sind eigenständig verfasst.
 */
const v = 1;

export const ENGLISH_BEGINNER_1_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Begrüßung: Wörter, dann formell/informell, dann die Tageszeit.
  {
    order: 1,
    title: 'Hello!',
    subtitle: 'Begrüßen und verabschieden',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'en1-1-h1', type: 'HEADING', level: 1, text: 'Hello!' },
        {
          id: 'en1-1-image',
          type: 'IMAGE',
          url: 'illustration:greeting-office',
          alt: 'Zwei Personen begrüßen sich morgens im Büro, eine Sprechblase mit drei Punkten schwebt zwischen ihnen.',
          caption: 'A greeting at the office in the morning.',
        },
        {
          id: 'en1-1-intro',
          type: 'TEXT',
          text: 'People say hello every day. How they do it depends on the time of day and on how well they know each other. Read the two dialogues.',
          translations: {
            de: 'Menschen begrüßen sich jeden Tag. Wie sie das tun, hängt von der Tageszeit ab – und davon, wie gut sie sich kennen. Lesen Sie die beiden Dialoge.',
          },
        },
        {
          id: 'en1-1-dlg1',
          type: 'DIALOGUE',
          title: 'At the office – nine o’clock in the morning',
          lines: [
            { speaker: 'Mrs Patel', text: 'Good morning, Mr Brown.' },
            { speaker: 'Mr Brown', text: 'Good morning, Mrs Patel. How are you?' },
            { speaker: 'Mrs Patel', text: 'Very well, thank you. And you?' },
            { speaker: 'Mr Brown', text: 'I’m fine, thanks.' },
          ],
        },
        {
          id: 'en1-1-dlg2',
          type: 'DIALOGUE',
          title: 'At the language school – two classmates',
          lines: [
            { speaker: 'Anna', text: 'Hi, Diego! How’s it going?' },
            { speaker: 'Diego', text: 'Hi, Anna! Good, thanks. And you?' },
            { speaker: 'Anna', text: 'Not bad. See you later!' },
            { speaker: 'Diego', text: 'Bye!' },
          ],
        },
        {
          id: 'en1-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Words: hello and goodbye',
          items: [
            { term: 'hello', translations: { de: 'hallo, guten Tag', es: 'hola' }, example: 'Hello, Mrs Patel!' },
            { term: 'hi', translations: { de: 'hi, hallo', es: 'hola' }, example: 'Hi, Diego!' },
            { term: 'good morning', translations: { de: 'guten Morgen', es: 'buenos días' } },
            { term: 'good afternoon', translations: { de: 'guten Tag (nachmittags)', es: 'buenas tardes' } },
            { term: 'good evening', translations: { de: 'guten Abend', es: 'buenas tardes/noches' } },
            { term: 'goodbye', translations: { de: 'auf Wiedersehen', es: 'adiós' } },
            { term: 'bye', translations: { de: 'tschüss', es: 'chao, adiós' } },
            { term: 'see you later', translations: { de: 'bis später', es: 'hasta luego' } },
            { term: 'How are you?', translations: { de: 'Wie geht es Ihnen/dir?', es: '¿Cómo estás/está?' } },
            { term: 'thank you / thanks', translations: { de: 'danke', es: 'gracias' } },
          ],
        },
        {
          id: 'en1-1-match',
          type: 'MATCHING',
          instruction: 'Match each greeting with a good answer.',
          left: [
            { id: 'l1', text: 'Good morning!' },
            { id: 'l2', text: 'How are you?' },
            { id: 'l3', text: 'Goodbye!' },
            { id: 'l4', text: 'How’s it going?' },
          ],
          right: [
            { id: 'r1', text: 'Good morning!' },
            { id: 'r2', text: 'Very well, thank you. And you?' },
            { id: 'r3', text: 'Bye! See you tomorrow.' },
            { id: 'r4', text: 'Not bad, thanks.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'en1-1-info-register',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'One “you” for everybody',
          text: 'English has only one word for “du” and “Sie”: “you”. You show politeness in other ways – with titles (Mr, Mrs, Ms), with the surname, and with more formal words. “Hi” and “How’s it going?” are for friends and colleagues; “Good morning” and “How are you?” work everywhere.',
          translations: {
            de: {
              title: 'Ein „you“ für alle',
              text: 'Das Englische hat nur ein Wort für „du“ und „Sie“: „you“. Höflichkeit zeigt man anders – mit Anreden (Mr, Mrs, Ms), mit dem Nachnamen und mit förmlicheren Wörtern. „Hi“ und „How’s it going?“ sind für Freunde und Kollegen; „Good morning“ und „How are you?“ passen überall.',
            },
          },
          table: {
            headers: ['', 'informal', 'formal'],
            rows: [
              ['Hello', 'Hi, Diego!', 'Good morning, Mr Brown.'],
              ['Question', 'How’s it going?', 'How are you?'],
              ['Answer', 'Not bad, thanks.', 'Very well, thank you.'],
              ['Goodbye', 'Bye! See you!', 'Goodbye.'],
            ],
          },
        },
        {
          id: 'en1-1-choice-register',
          type: 'CHOICE',
          instruction: 'Read the box again and choose.',
          question: 'It’s your first day at a new job. What do you say to your boss?',
          options: [
            { id: 'o1', text: 'Hi! How’s it going?' },
            { id: 'o2', text: 'Good morning. How are you?' },
            { id: 'o3', text: 'Bye! See you!' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation:
            'On the first day your boss is still a stranger, so a formal greeting is best: “Good morning. How are you?”. “Hi! How’s it going?” is for friends.',
          explanationTranslations: {
            de: 'Am ersten Tag ist die Chefin noch eine fremde Person – eine förmliche Begrüßung passt am besten: „Good morning. How are you?“. „Hi! How’s it going?“ sagt man unter Freunden.',
          },
        },
        {
          id: 'en1-1-info-time',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'Which greeting when?',
          text: 'The time of day decides the formal greeting. Be careful with “Good night”: it is not a greeting. You only say it when you leave in the evening or go to bed.',
          translations: {
            de: {
              title: 'Welche Begrüßung wann?',
              text: 'Die Tageszeit entscheidet über die förmliche Begrüßung. Vorsicht bei „Good night“: Das ist keine Begrüßung. Man sagt es nur, wenn man abends geht oder ins Bett geht.',
            },
          },
          table: {
            headers: ['Time', 'Hello', 'Goodbye'],
            rows: [
              ['until 12:00', 'Good morning.', 'Goodbye. / Have a nice day.'],
              ['12:00 – 18:00', 'Good afternoon.', 'Goodbye.'],
              ['after 18:00', 'Good evening.', 'Good night.'],
            ],
          },
        },
        {
          id: 'en1-1-choice-time',
          type: 'CHOICE',
          instruction: 'Choose the right greeting.',
          question: 'It’s eight o’clock in the evening. You walk into a hotel. What do you say?',
          options: [
            { id: 'p1', text: 'Good night.' },
            { id: 'p2', text: 'Good evening.' },
            { id: 'p3', text: 'Good morning.' },
          ],
          multiple: false,
          solution: ['p2'],
          explanation: 'When you arrive in the evening, you say “Good evening”. “Good night” is only for saying goodbye.',
          explanationTranslations: {
            de: 'Wer abends ankommt, sagt „Good evening“. „Good night“ sagt man nur zum Abschied.',
          },
        },
        {
          id: 'en1-1-order',
          type: 'ORDERING',
          instruction: 'Put the words in the right order.',
          items: [
            { id: 'g1', text: 'Good' },
            { id: 'g2', text: 'afternoon,' },
            { id: 'g3', text: 'Mrs' },
            { id: 'g4', text: 'Patel.' },
          ],
          solution: ['g1', 'g2', 'g3', 'g4'],
        },
        {
          id: 'en1-1-cloze',
          type: 'CLOZE',
          instruction: 'Complete the dialogue. The words in the box help you.',
          wordBank: ['morning', 'are', 'thank', 'Goodbye'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '▸ Good ' },
            { kind: 'GAP', gapId: 'g1', solution: ['morning'], width: 9 },
            { kind: 'TEXT', text: ', Mr Brown. How ' },
            { kind: 'GAP', gapId: 'g2', solution: ['are'], width: 5 },
            { kind: 'TEXT', text: ' you?\n▸ Very well, ' },
            { kind: 'GAP', gapId: 'g3', solution: ['thank'], width: 7 },
            { kind: 'TEXT', text: ' you.\n▸ ' },
            { kind: 'GAP', gapId: 'g4', solution: ['Goodbye'], width: 9 },
            { kind: 'TEXT', text: ', see you tomorrow!' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – sich vorstellen: erst „to be“ im Singular, dann die Kurzformen.
  {
    order: 2,
    title: 'I’m Anna',
    subtitle: 'Sich vorstellen, das Verb „to be“',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'en1-2-h1', type: 'HEADING', level: 1, text: 'I’m Anna' },
        {
          id: 'en1-2-image',
          type: 'IMAGE',
          url: 'illustration:introduction',
          alt: 'Eine Person stellt sich einer Gruppe vor, die anderen sitzen im Halbkreis.',
          caption: 'The first day of the course.',
        },
        {
          id: 'en1-2-intro',
          type: 'TEXT',
          text: 'On the first day of the course, everybody introduces themselves. Read the dialogue and look at the small words after “I”, “you” and “she”.',
          translations: {
            de: 'Am ersten Kurstag stellen sich alle vor. Lesen Sie den Dialog und achten Sie auf die kleinen Wörter nach „I“, „you“ und „she“.',
          },
        },
        {
          id: 'en1-2-dlg',
          type: 'DIALOGUE',
          title: 'The first day of the course',
          lines: [
            { speaker: 'Teacher', text: 'Good morning, everyone. My name’s Emma Clarke. I’m your teacher.' },
            { speaker: 'Anna', text: 'Hello. I’m Anna Weber.' },
            { speaker: 'Teacher', text: 'Nice to meet you, Anna. Are you a student?' },
            { speaker: 'Anna', text: 'No, I’m not. I’m a nurse.' },
            { speaker: 'Diego', text: 'Hi, Anna. I’m Diego. And this is Yuki. She’s from Japan.' },
            { speaker: 'Yuki', text: 'Hello! Nice to meet you.' },
            { speaker: 'Anna', text: 'Nice to meet you too.' },
          ],
        },
        {
          id: 'en1-2-vocab',
          type: 'VOCAB_LIST',
          title: 'Words: introducing yourself',
          items: [
            { term: 'name', translations: { de: 'der Name', es: 'el nombre' }, example: 'My name’s Emma.' },
            { term: 'first name', translations: { de: 'der Vorname', es: 'el nombre (de pila)' } },
            { term: 'surname', translations: { de: 'der Nachname', es: 'el apellido' } },
            { term: 'to be', translations: { de: 'sein', es: 'ser, estar' }, example: 'I’m a nurse.' },
            { term: 'Nice to meet you.', translations: { de: 'Freut mich.', es: 'Encantado/a.' } },
            { term: 'teacher', translations: { de: 'der Lehrer, die Lehrerin', es: 'el/la profesor/a' } },
            { term: 'student', translations: { de: 'der Student, die Studentin', es: 'el/la estudiante' } },
            { term: 'this is …', translations: { de: 'das ist …', es: 'este/esta es …' }, example: 'This is Yuki.' },
            { term: 'everyone', translations: { de: 'alle', es: 'todos' } },
            { term: 'too', translations: { de: 'auch', es: 'también' }, example: 'Nice to meet you too.' },
          ],
        },
        {
          id: 'en1-2-info-be',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'to be: I am, you are, he is',
          text: '“to be” is the most important verb in English, and it is irregular. When people speak, they almost always use the short forms: “I’m” instead of “I am”, “she’s” instead of “she is”. Unlike in German, the pronoun can never be left out.',
          translations: {
            de: {
              title: 'to be: I am, you are, he is',
              text: '„to be“ ist das wichtigste Verb des Englischen, und es ist unregelmäßig. Beim Sprechen verwendet man fast immer die Kurzformen: „I’m“ statt „I am“, „she’s“ statt „she is“. Das Pronomen darf – wie im Deutschen – nie fehlen.',
            },
          },
          table: {
            headers: ['Person', 'long form', 'short form'],
            rows: [
              ['I', 'I am', 'I’m'],
              ['you', 'you are', 'you’re'],
              ['he', 'he is', 'he’s'],
              ['she', 'she is', 'she’s'],
              ['it', 'it is', 'it’s'],
            ],
          },
        },
        {
          id: 'en1-2-cloze-be',
          type: 'CLOZE',
          instruction: 'Complete with am, are or is.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'I ' },
            { kind: 'GAP', gapId: 'v1', solution: ['am'], hint: 'be', width: 5 },
            { kind: 'TEXT', text: ' Anna.\nYou ' },
            { kind: 'GAP', gapId: 'v2', solution: ['are'], hint: 'be', width: 5 },
            { kind: 'TEXT', text: ' my teacher.\nDiego ' },
            { kind: 'GAP', gapId: 'v3', solution: ['is'], hint: 'be', width: 5 },
            { kind: 'TEXT', text: ' a student.\nShe ' },
            { kind: 'GAP', gapId: 'v4', solution: ['is'], hint: 'be', width: 5 },
            { kind: 'TEXT', text: ' from Japan.' },
          ],
        },
        {
          id: 'en1-2-info-name',
          type: 'INFO',
          variant: 'TIP',
          title: 'What’s your name?',
          text: 'There are two common ways to say your name: “My name’s Emma.” and “I’m Emma.” Both are correct. To ask, you say “What’s your name?” – “what’s” is the short form of “what is”.',
          translations: {
            de: {
              title: 'Wie heißen Sie?',
              text: 'Es gibt zwei übliche Arten, seinen Namen zu sagen: „My name’s Emma.“ und „I’m Emma.“ Beide sind richtig. Fragen kann man mit „What’s your name?“ – „what’s“ ist die Kurzform von „what is“.',
            },
          },
          table: {
            headers: ['Question', 'Answer'],
            rows: [
              ['What’s your name?', 'My name’s Diego.'],
              ['What’s your surname?', 'It’s Ruiz. R-U-I-Z.'],
              ['What’s her name?', 'Her name’s Yuki.'],
            ],
          },
        },
        {
          id: 'en1-2-match',
          type: 'MATCHING',
          instruction: 'Match the question with the answer.',
          left: [
            { id: 'q1', text: 'What’s your name?' },
            { id: 'q2', text: 'Are you a student?' },
            { id: 'q3', text: 'Who’s this?' },
            { id: 'q4', text: 'Nice to meet you.' },
          ],
          right: [
            { id: 'a1', text: 'I’m Anna.' },
            { id: 'a2', text: 'No, I’m a nurse.' },
            { id: 'a3', text: 'This is Yuki.' },
            { id: 'a4', text: 'Nice to meet you too.' },
          ],
          solution: [
            { leftId: 'q1', rightId: 'a1' },
            { leftId: 'q2', rightId: 'a2' },
            { leftId: 'q3', rightId: 'a3' },
            { leftId: 'q4', rightId: 'a4' },
          ],
        },
        {
          id: 'en1-2-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'How do you say “Sie ist Lehrerin”?',
          options: [
            { id: 'n1', text: 'Is teacher.' },
            { id: 'n2', text: 'She’s a teacher.' },
            { id: 'n3', text: 'She a teacher.' },
          ],
          multiple: false,
          solution: ['n2'],
          explanation:
            'An English sentence needs a subject (“she”) and a verb (“is”). With jobs, English also uses “a”: “She’s a teacher.”',
          explanationTranslations: {
            de: 'Ein englischer Satz braucht ein Subjekt („she“) und ein Verb („is“). Bei Berufen steht im Englischen außerdem „a“: „She’s a teacher.“',
          },
        },
        {
          id: 'en1-2-order',
          type: 'ORDERING',
          instruction: 'Make a correct question.',
          items: [
            { id: 's1', text: 'What’s' },
            { id: 's2', text: 'your' },
            { id: 's3', text: 'first' },
            { id: 's4', text: 'name?' },
          ],
          solution: ['s1', 's2', 's3', 's4'],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – Herkunft: „to be“ im Plural, Fragen und Länder.
  {
    order: 3,
    title: 'Where are you from?',
    subtitle: 'Herkunft und Wohnort',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'en1-3-h1', type: 'HEADING', level: 1, text: 'Where are you from?' },
        {
          id: 'en1-3-image',
          type: 'IMAGE',
          url: 'illustration:world-map',
          alt: 'Eine Weltkarte mit Markierungen auf mehreren Kontinenten.',
          caption: 'People speak English all over the world.',
        },
        {
          id: 'en1-3-dlg',
          type: 'DIALOGUE',
          title: 'In the break',
          lines: [
            { speaker: 'Karim', text: 'Where are you from, Anna?' },
            { speaker: 'Anna', text: 'I’m from Germany, from Hamburg. And you?' },
            { speaker: 'Karim', text: 'I’m from Egypt. But I live here in Manchester now.' },
            { speaker: 'Anna', text: 'Are Diego and Yuki from Spain?' },
            { speaker: 'Karim', text: 'No, they aren’t. Diego’s from Mexico and Yuki’s from Japan. We’re all new here!' },
          ],
        },
        {
          id: 'en1-3-info-be-plural',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'to be: all persons, questions and “not”',
          text: 'In the plural, all forms of “to be” are the same: “are”. For a question, the verb goes in front of the subject: “You are from Mexico.” → “Are you from Mexico?” For the negative, you put “not” after the verb: “I’m not”, “she isn’t”, “they aren’t”.',
          translations: {
            de: {
              title: 'to be: alle Personen, Fragen und „not“',
              text: 'Im Plural lauten alle Formen von „to be“ gleich: „are“. Für eine Frage rückt das Verb vor das Subjekt: „You are from Mexico.“ → „Are you from Mexico?“ Für die Verneinung setzt man „not“ hinter das Verb: „I’m not“, „she isn’t“, „they aren’t“.',
            },
          },
          table: {
            headers: ['Person', '+', '–', '?'],
            rows: [
              ['I', 'I’m', 'I’m not', 'Am I …?'],
              ['you', 'you’re', 'you aren’t', 'Are you …?'],
              ['he / she / it', 'he’s', 'he isn’t', 'Is he …?'],
              ['we', 'we’re', 'we aren’t', 'Are we …?'],
              ['they', 'they’re', 'they aren’t', 'Are they …?'],
            ],
          },
        },
        {
          id: 'en1-3-cloze',
          type: 'CLOZE',
          instruction: 'Complete with the correct form of “to be” or “live”.',
          wordBank: ['are', 'I’m', 'live', 'is', 'aren’t'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '▸ Where ' },
            { kind: 'GAP', gapId: 'e1', solution: ['are'], width: 6 },
            { kind: 'TEXT', text: ' you from, Karim?\n▸ ' },
            { kind: 'GAP', gapId: 'e2', solution: ['I’m', "I'm"], width: 6 },
            { kind: 'TEXT', text: ' from Egypt, but I ' },
            { kind: 'GAP', gapId: 'e3', solution: ['live'], width: 6 },
            { kind: 'TEXT', text: ' in Manchester now.\n▸ And where ' },
            { kind: 'GAP', gapId: 'e4', solution: ['is'], width: 5 },
            { kind: 'TEXT', text: ' your family?\n▸ In Cairo. My parents ' },
            { kind: 'GAP', gapId: 'e5', solution: ['aren’t', "aren't"], width: 8 },
            { kind: 'TEXT', text: ' here.' },
          ],
        },
        {
          id: 'en1-3-vocab',
          type: 'VOCAB_LIST',
          title: 'Words: countries and nationalities',
          items: [
            { term: 'Germany', translations: { de: 'Deutschland', es: 'Alemania' }, example: 'I’m from Germany.' },
            { term: 'German', translations: { de: 'deutsch; Deutsch', es: 'alemán' } },
            { term: 'Mexico', translations: { de: 'Mexiko', es: 'México' } },
            { term: 'Mexican', translations: { de: 'mexikanisch', es: 'mexicano' } },
            { term: 'Japan', translations: { de: 'Japan', es: 'Japón' } },
            { term: 'Japanese', translations: { de: 'japanisch; Japanisch', es: 'japonés' } },
            { term: 'Egypt', translations: { de: 'Ägypten', es: 'Egipto' } },
            { term: 'Egyptian', translations: { de: 'ägyptisch', es: 'egipcio' } },
            { term: 'country', translations: { de: 'das Land', es: 'el país' } },
            { term: 'language', translations: { de: 'die Sprache', es: 'el idioma' } },
          ],
        },
        {
          id: 'en1-3-info-capital',
          type: 'INFO',
          variant: 'TIP',
          title: 'Capital letters',
          text: 'In English, countries, nationalities and languages always start with a capital letter: Germany, German, Spain, Spanish. But normal nouns don’t: “a teacher”, “a country”. And “I” is always a capital letter.',
          translations: {
            de: {
              title: 'Großbuchstaben',
              text: 'Im Englischen schreibt man Länder, Nationalitäten und Sprachen immer groß: Germany, German, Spain, Spanish. Normale Nomen dagegen klein: „a teacher“, „a country“. Und „I“ ist immer groß.',
            },
          },
        },
        {
          id: 'en1-3-match',
          type: 'MATCHING',
          instruction: 'Match the country with the nationality.',
          left: [
            { id: 'c1', text: 'Germany' },
            { id: 'c2', text: 'Mexico' },
            { id: 'c3', text: 'Japan' },
            { id: 'c4', text: 'Spain' },
          ],
          right: [
            { id: 'd1', text: 'German' },
            { id: 'd2', text: 'Mexican' },
            { id: 'd3', text: 'Japanese' },
            { id: 'd4', text: 'Spanish' },
          ],
          solution: [
            { leftId: 'c1', rightId: 'd1' },
            { leftId: 'c2', rightId: 'd2' },
            { leftId: 'c3', rightId: 'd3' },
            { leftId: 'c4', rightId: 'd4' },
          ],
        },
        {
          id: 'en1-3-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'Diego and Yuki are not from Spain. What do you say?',
          options: [
            { id: 'w1', text: 'They isn’t from Spain.' },
            { id: 'w2', text: 'They aren’t from Spain.' },
            { id: 'w3', text: 'They not from Spain.' },
          ],
          multiple: false,
          solution: ['w2'],
          explanation: '“They” goes with “are”, and the negative is “are not” – short: “aren’t”.',
          explanationTranslations: {
            de: 'Zu „they“ gehört „are“, und die Verneinung lautet „are not“ – kurz: „aren’t“.',
          },
        },
        {
          id: 'en1-3-order',
          type: 'ORDERING',
          instruction: 'Make a correct question.',
          items: [
            { id: 'p1', text: 'Where' },
            { id: 'p2', text: 'are' },
            { id: 'p3', text: 'you' },
            { id: 'p4', text: 'from?' },
          ],
          solution: ['p1', 'p2', 'p3', 'p4'],
        },
        {
          id: 'en1-3-info-culture',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'Not only in England',
          text: 'English is the first language of about 380 million people – in the UK, the USA, Canada, Australia, Ireland, New Zealand and more. Many more people speak it as a second language, for example in India and Nigeria. That’s why there are many Englishes, and none of them is “the right one”.',
          translations: {
            de: {
              title: 'Nicht nur in England',
              text: 'Englisch ist die Muttersprache von etwa 380 Millionen Menschen – in Großbritannien, den USA, Kanada, Australien, Irland, Neuseeland und weiteren Ländern. Noch viel mehr Menschen sprechen es als Zweitsprache, zum Beispiel in Indien und Nigeria. Deshalb gibt es viele Varianten des Englischen – und keine davon ist „die richtige“.',
            },
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – Alphabet und Zahlen: erst buchstabieren, dann zählen.
  {
    order: 4,
    title: 'The alphabet and numbers',
    subtitle: 'Buchstabieren und zählen von 0 bis 20',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'en1-4-h1', type: 'HEADING', level: 1, text: 'The alphabet and numbers' },
        {
          id: 'en1-4-image',
          type: 'IMAGE',
          url: 'illustration:alphabet-numbers',
          alt: 'Buchstaben und Ziffern in losen Reihen angeordnet.',
          caption: 'Twenty-six letters – and some of them sound surprising.',
        },
        {
          id: 'en1-4-intro',
          type: 'TEXT',
          text: 'When you book a room or give your name on the phone, you often have to spell it. The English alphabet has the same 26 letters as the German one, but many of them have different names.',
          translations: {
            de: 'Wenn man ein Zimmer bucht oder am Telefon seinen Namen angibt, muss man ihn oft buchstabieren. Das englische Alphabet hat dieselben 26 Buchstaben wie das deutsche, aber viele davon heißen anders.',
          },
        },
        {
          id: 'en1-4-info-letters',
          type: 'INFO',
          variant: 'TIP',
          title: 'Letters that trick German speakers',
          text: 'Some letter names sound like a different German letter. Learn these pairs carefully. For two of the same letter, English says “double”: “Anna” is “A, double N, A”.',
          translations: {
            de: {
              title: 'Buchstaben, die Deutschsprachige in die Irre führen',
              text: 'Manche Buchstabennamen klingen wie ein anderer deutscher Buchstabe. Lernen Sie diese Paare sorgfältig. Für zwei gleiche Buchstaben sagt man im Englischen „double“: „Anna“ ist „A, double N, A“.',
            },
          },
          table: {
            headers: ['Letter', 'sounds like (German)', 'Example'],
            rows: [
              ['A', '„äi“', 'Anna'],
              ['E', '„ii“', 'Emma'],
              ['I', '„ai“', 'India'],
              ['G', '„dschii“', 'Germany'],
              ['J', '„dschäi“', 'Japan'],
              ['R', '„aa“', 'Ruiz'],
              ['Y', '„wai“', 'Yuki'],
            ],
          },
        },
        {
          id: 'en1-4-dlg',
          type: 'DIALOGUE',
          title: 'On the phone',
          lines: [
            { speaker: 'Reception', text: 'Hotel Riverside, good afternoon.' },
            { speaker: 'Ms Weber', text: 'Good afternoon. I’d like to book a room, please.' },
            { speaker: 'Reception', text: 'Of course. What’s your surname, please?' },
            { speaker: 'Ms Weber', text: 'Weber.' },
            { speaker: 'Reception', text: 'How do you spell that?' },
            { speaker: 'Ms Weber', text: 'W, E, B, E, R.' },
            { speaker: 'Reception', text: 'Thank you, Ms Weber.' },
          ],
        },
        {
          id: 'en1-4-choice',
          type: 'CHOICE',
          instruction: 'Choose the right answer.',
          question: 'How do you spell the name “Jessie”?',
          options: [
            { id: 'b1', text: 'G, E, double S, I, E' },
            { id: 'b2', text: 'J, E, double S, I, E' },
            { id: 'b3', text: 'J, I, double S, E, I' },
          ],
          multiple: false,
          solution: ['b2'],
          explanation:
            '“Jessie” starts with J (“dschäi”), not G (“dschii”). Two S together are “double S”.',
          explanationTranslations: {
            de: '„Jessie“ beginnt mit J („dschäi“), nicht mit G („dschii“). Zwei S hintereinander heißen „double S“.',
          },
        },
        {
          id: 'en1-4-info-numbers',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Numbers from 0 to 20',
          text: 'From zero to twelve, every number has its own word. From thirteen to nineteen, the numbers end in “-teen”. Say “-teen” with stress at the end – “thirTEEN” – so people don’t hear “THIRty”. For 0, English also says “oh”, for example in phone numbers.',
          translations: {
            de: {
              title: 'Die Zahlen von 0 bis 20',
              text: 'Von null bis zwölf hat jede Zahl ein eigenes Wort. Von dreizehn bis neunzehn enden die Zahlen auf „-teen“. Betonen Sie „-teen“ am Ende – „thirTEEN“ –, damit niemand „THIRty“ (30) versteht. Für die 0 sagt man auch „oh“, zum Beispiel bei Telefonnummern.',
            },
          },
          table: {
            headers: ['0–6', '7–13', '14–20'],
            rows: [
              ['0 zero', '7 seven', '14 fourteen'],
              ['1 one', '8 eight', '15 fifteen'],
              ['2 two', '9 nine', '16 sixteen'],
              ['3 three', '10 ten', '17 seventeen'],
              ['4 four', '11 eleven', '18 eighteen'],
              ['5 five', '12 twelve', '19 nineteen'],
              ['6 six', '13 thirteen', '20 twenty'],
            ],
          },
        },
        {
          id: 'en1-4-cloze',
          type: 'CLOZE',
          instruction: 'Write the number as a word.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'I’ve got ' },
            { kind: 'GAP', gapId: 'n1', solution: ['three'], hint: '3', width: 8 },
            { kind: 'TEXT', text: ' brothers.\nThe course starts at ' },
            { kind: 'GAP', gapId: 'n2', solution: ['nine'], hint: '9', width: 8 },
            { kind: 'TEXT', text: ' o’clock.\nThere are ' },
            { kind: 'GAP', gapId: 'n3', solution: ['twelve'], hint: '12', width: 8 },
            { kind: 'TEXT', text: ' students in the class.\nMy sister is ' },
            { kind: 'GAP', gapId: 'n4', solution: ['fifteen'], hint: '15', width: 9 },
            { kind: 'TEXT', text: ' years old.' },
          ],
        },
        {
          id: 'en1-4-match',
          type: 'MATCHING',
          instruction: 'Match the number with the word.',
          left: [
            { id: 'z1', text: '8' },
            { id: 'z2', text: '11' },
            { id: 'z3', text: '13' },
            { id: 'z4', text: '20' },
          ],
          right: [
            { id: 'y1', text: 'eight' },
            { id: 'y2', text: 'eleven' },
            { id: 'y3', text: 'thirteen' },
            { id: 'y4', text: 'twenty' },
          ],
          solution: [
            { leftId: 'z1', rightId: 'y1' },
            { leftId: 'z2', rightId: 'y2' },
            { leftId: 'z3', rightId: 'y3' },
            { leftId: 'z4', rightId: 'y4' },
          ],
        },
        {
          id: 'en1-4-order',
          type: 'ORDERING',
          instruction: 'Put the numbers in order, from small to big.',
          items: [
            { id: 'o1', text: 'five' },
            { id: 'o2', text: 'twelve' },
            { id: 'o3', text: 'sixteen' },
            { id: 'o4', text: 'nineteen' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4'],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – Rückblick: alles aus dem Kapitel noch einmal gemischt.
  {
    order: 5,
    title: 'Can you do it?',
    subtitle: 'Rückblick auf das ganze Kapitel',
    estimatedMinutes: 18,
    content: {
      version: v,
      blocks: [
        { id: 'en1-5-h1', type: 'HEADING', level: 1, text: 'Can you do it?' },
        {
          id: 'en1-5-intro',
          type: 'TEXT',
          text: 'Here is the whole chapter again: saying hello, introducing yourself, saying where you are from, spelling and counting. If something is difficult, go back to the page – that’s completely normal.',
          translations: {
            de: 'Hier kommt das ganze Kapitel noch einmal: begrüßen, sich vorstellen, die Herkunft nennen, buchstabieren und zählen. Wenn etwas schwerfällt, gehen Sie zurück auf die Seite – das ist völlig normal.',
          },
        },
        {
          id: 'en1-5-cloze',
          type: 'CLOZE',
          instruction: 'Complete the introduction.',
          wordBank: ['name’s', 'I’m', 'live', 'speak', 'meet'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Hello! My ' },
            { kind: 'GAP', gapId: 'f1', solution: ['name’s', "name's"], width: 8 },
            { kind: 'TEXT', text: ' Yuki Tanaka. ' },
            { kind: 'GAP', gapId: 'f2', solution: ['I’m', "I'm"], width: 6 },
            { kind: 'TEXT', text: ' from Japan, from Osaka. Now I ' },
            { kind: 'GAP', gapId: 'f3', solution: ['live'], width: 6 },
            { kind: 'TEXT', text: ' in Manchester and I’m a student. I ' },
            { kind: 'GAP', gapId: 'f4', solution: ['speak'], width: 7 },
            { kind: 'TEXT', text: ' Japanese and a little English. Nice to ' },
            { kind: 'GAP', gapId: 'f5', solution: ['meet'], width: 6 },
            { kind: 'TEXT', text: ' you!' },
          ],
        },
        {
          id: 'en1-5-match',
          type: 'MATCHING',
          instruction: 'Match the situation with the right sentence.',
          left: [
            { id: 'm1', text: 'It’s 9 a.m. and you arrive at the office.' },
            { id: 'm2', text: 'A classmate asks your name.' },
            { id: 'm3', text: 'You leave in the evening.' },
            { id: 'm4', text: 'The hotel asks you to spell your name.' },
          ],
          right: [
            { id: 'x1', text: 'Good morning. How are you?' },
            { id: 'x2', text: 'I’m Diego. And you?' },
            { id: 'x3', text: 'Good night! See you tomorrow.' },
            { id: 'x4', text: 'Weber: W, E, B, E, R.' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'x1' },
            { leftId: 'm2', rightId: 'x2' },
            { leftId: 'm3', rightId: 'x3' },
            { leftId: 'm4', rightId: 'x4' },
          ],
        },
        {
          id: 'en1-5-choice',
          type: 'CHOICE',
          instruction: 'Mark all the correct sentences.',
          question: 'Which of these sentences are correct?',
          options: [
            { id: 'r1', text: 'I’m from Germany.' },
            { id: 'r2', text: 'Is from Mexico.' },
            { id: 'r3', text: 'We’re students.' },
            { id: 'r4', text: 'She are a teacher.' },
          ],
          multiple: true,
          solution: ['r1', 'r3'],
          explanation:
            '“Is from Mexico” has no subject: “He’s from Mexico.” And “she” goes with “is”: “She’s a teacher.”',
          explanationTranslations: {
            de: '„Is from Mexico“ fehlt das Subjekt: „He’s from Mexico.“ Und zu „she“ gehört „is“: „She’s a teacher.“',
          },
        },
        {
          id: 'en1-5-writing',
          type: 'WRITING',
          instruction: 'Introduce yourself.',
          prompt:
            'Write three to five sentences: What’s your name? Where are you from? Where do you live? What languages do you speak? Use “I’m”, “My name’s”, “I live” and “I speak”.',
          minWords: 15,
          maxWords: 80,
          aiFeedback: true,
          sampleAnswer:
            'Hello! My name’s Jan Becker. I’m from Germany, from Hamburg. Now I live in Munich and I’m an engineer. I speak German and a little English. Nice to meet you!',
        },
      ],
    },
  },
];
