import type { UnitSeed } from './chapter-beginner-1';

/**
 * Englisch, Intermediate, Kapitel 1: „The world of work“ (B1, Kapitel 1)
 *
 * Der Einstieg in das zweite Kursbuch. Seite 1 liest eine Stellenanzeige,
 * Seite 2 bringt das Present Perfect für Erfahrungen und seine Grenze zum
 * Past Simple, Seite 3 for und since, Seite 4 die förmliche E-Mail, Seite 5
 * das Vorstellungsgespräch als Anwendung von allem.
 *
 * Ab dem zweiten Band sind die Seiten einsprachig englisch – die
 * aufklappbare Übersetzung bleibt dem Beginner-Band vorbehalten (siehe
 * `spanish-chapter-intermediate-1.ts`). Die Wortschatzlisten führen weiter
 * Deutsch und Spanisch, weil ein einzelnes Wort ohne Kontext sonst nicht zu
 * erschließen ist.
 *
 * Neue Personen für den neuen Band: Sophie Klein aus Köln, die in einer
 * Londoner Firma anfängt, ihr Kollege Ben Carter und die Personalerin Priya
 * Shah. Firmen und Anzeigen sind erfunden.
 */
const v = 1;

export const ENGLISH_INTERMEDIATE_1_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – eine Stellenanzeige lesen.
  {
    order: 1,
    title: 'Looking for a job',
    subtitle: 'Eine Stellenanzeige lesen',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'eni1-1-h1', type: 'HEADING', level: 1, text: 'Looking for a job' },
        {
          id: 'eni1-1-image',
          type: 'IMAGE',
          url: 'illustration:greeting-office',
          alt: 'Zwei Personen begrüßen sich morgens im Büro.',
          caption: 'A new job, a new office.',
        },
        {
          id: 'eni1-1-intro',
          type: 'TEXT',
          text: 'Job adverts in English follow a clear pattern: who the company is, what the job involves, what they are looking for and what they offer. Once you know about twenty key words, you can read almost any advert – and you will know quickly whether it is worth applying.',
        },
        {
          id: 'eni1-1-advert',
          type: 'TEXT',
          text: 'MARKETING ASSISTANT – Greenleaf Travel, London (full-time, permanent)\n\nGreenleaf Travel is a fast-growing company that organises sustainable holidays in Europe. We are looking for a motivated marketing assistant to join our team.\n\nResponsibilities: managing our social media channels, writing newsletters, supporting the team at trade fairs.\n\nRequirements: a degree in marketing or a similar subject, at least one year’s experience, excellent written English. A second European language is an advantage.\n\nWe offer: a competitive salary (£30,000–£34,000), 25 days’ holiday, flexible working hours and two days a week working from home.\n\nTo apply, please send your CV and a covering letter to jobs@greenleaf-travel.co.uk by 15 March.',
        },
        {
          id: 'eni1-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Words: job adverts',
          items: [
            { term: 'vacancy', translations: { de: 'die offene Stelle', es: 'la vacante' } },
            { term: 'to apply (for)', translations: { de: 'sich bewerben (um)', es: 'solicitar, presentarse (a)' }, example: 'She applied for the job.' },
            { term: 'full-time / part-time', translations: { de: 'Vollzeit / Teilzeit', es: 'a tiempo completo / parcial' } },
            { term: 'permanent / temporary', translations: { de: 'unbefristet / befristet', es: 'fijo / temporal' } },
            { term: 'responsibilities', translations: { de: 'die Aufgaben', es: 'las responsabilidades' } },
            { term: 'requirements', translations: { de: 'die Anforderungen', es: 'los requisitos' } },
            { term: 'experience', translations: { de: 'die Erfahrung', es: 'la experiencia' } },
            { term: 'degree', translations: { de: 'der Studienabschluss', es: 'la licenciatura, el título' } },
            { term: 'salary', translations: { de: 'das Gehalt', es: 'el sueldo' } },
            { term: 'CV (UK) / résumé (US)', translations: { de: 'der Lebenslauf', es: 'el currículum' } },
            { term: 'covering letter', translations: { de: 'das Anschreiben', es: 'la carta de presentación' } },
            { term: 'an advantage', translations: { de: 'von Vorteil', es: 'una ventaja' } },
          ],
        },
        {
          id: 'eni1-1-choice',
          type: 'CHOICE',
          instruction: 'Read the advert. Mark all the things Greenleaf Travel offers.',
          question: 'What does the company offer?',
          options: [
            { id: 'r1', text: 'flexible working hours' },
            { id: 'r2', text: 'a company car' },
            { id: 'r3', text: 'two days a week working from home' },
            { id: 'r4', text: 'a free holiday in Europe' },
          ],
          multiple: true,
          solution: ['r1', 'r3'],
          explanation: 'Under “We offer” you find the salary, 25 days’ holiday, flexible hours and two home-office days – no car and no free trip.',
        },
        {
          id: 'eni1-1-match',
          type: 'MATCHING',
          instruction: 'Match the words from the advert with their meaning.',
          left: [
            { id: 'l1', text: 'permanent' },
            { id: 'l2', text: 'requirements' },
            { id: 'l3', text: 'competitive salary' },
            { id: 'l4', text: 'an advantage' },
          ],
          right: [
            { id: 'r1', text: 'with no end date' },
            { id: 'r2', text: 'what you need to have' },
            { id: 'r3', text: 'good pay compared to other companies' },
            { id: 'r4', text: 'useful, but not necessary' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'eni1-1-info',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'CV and covering letter',
          text: 'A British CV is usually two pages long and has no photo, no date of birth and no signature – employers are not allowed to choose people by age or appearance. The covering letter (US: cover letter) is short: three or four paragraphs that explain why you want this job and why you are the right person.',
        },
        {
          id: 'eni1-1-choice2',
          type: 'CHOICE',
          instruction: 'Choose the correct answer.',
          question: 'Sophie wants to apply for the job. What should she NOT put on her CV?',
          options: [
            { id: 'o1', text: 'her work experience' },
            { id: 'o2', text: 'a photo of herself' },
            { id: 'o3', text: 'the languages she speaks' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'British CVs usually have no photo, because employers must not choose people by their appearance.',
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – Present Perfect für Erfahrungen.
  {
    order: 2,
    title: 'Have you ever …?',
    subtitle: 'Present Perfect für Erfahrungen',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'eni1-2-h1', type: 'HEADING', level: 1, text: 'Have you ever …?' },
        {
          id: 'eni1-2-dlg',
          type: 'DIALOGUE',
          title: 'A first phone interview',
          lines: [
            { speaker: 'Priya', text: 'So, Sophie, have you ever worked in the travel industry?' },
            { speaker: 'Sophie', text: 'Yes, I have. I worked for a tour operator in Cologne for two years.' },
            { speaker: 'Priya', text: 'And have you managed social media accounts before?' },
            { speaker: 'Sophie', text: 'Yes – I’ve run the Instagram account of a small hotel, and I’ve written a lot of newsletters.' },
            { speaker: 'Priya', text: 'Great. Have you ever lived in an English-speaking country?' },
            { speaker: 'Sophie', text: 'No, I haven’t. But I spent six months in Dublin as a student.' },
          ],
        },
        {
          id: 'eni1-2-info-form',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'have/has + past participle',
          text: 'The present perfect is formed with “have” or “has” and the past participle (the third form of the verb). Regular verbs: worked, lived. Irregular verbs have their own form: be – been, do – done, go – gone, write – written, see – seen. It connects the past with now: the experience happened at some time in your life, and it is part of what you are today.',
          table: {
            headers: ['', 'example'],
            rows: [
              ['+', 'I’ve worked in marketing.'],
              ['–', 'She hasn’t lived abroad.'],
              ['?', 'Have you ever been to Canada?'],
              ['short answer', 'Yes, I have. / No, I haven’t.'],
            ],
          },
        },
        {
          id: 'eni1-2-match',
          type: 'MATCHING',
          instruction: 'Match the verb with its past participle.',
          left: [
            { id: 'l1', text: 'write' },
            { id: 'l2', text: 'be' },
            { id: 'l3', text: 'do' },
            { id: 'l4', text: 'speak' },
            { id: 'l5', text: 'meet' },
          ],
          right: [
            { id: 'r1', text: 'written' },
            { id: 'r2', text: 'been' },
            { id: 'r3', text: 'done' },
            { id: 'r4', text: 'spoken' },
            { id: 'r5', text: 'met' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
            { leftId: 'l5', rightId: 'r5' },
          ],
        },
        {
          id: 'eni1-2-info-past',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Present perfect or past simple?',
          text: 'This is where English and German really differ. As soon as you say or ask WHEN something happened – yesterday, in 2019, when I was a student – you must use the past simple. The present perfect is only for “at some time up to now”. So in a CV conversation: “I’ve worked in tourism.” (experience) – “I worked for TUI from 2019 to 2021.” (finished period).',
          table: {
            headers: ['present perfect (no time)', 'past simple (finished time)'],
            rows: [
              ['I’ve been to Dublin.', 'I went to Dublin in 2018.'],
              ['Have you ever managed a team?', 'When did you manage the team?'],
              ['She’s written three books.', 'She wrote her first book at 25.'],
            ],
          },
        },
        {
          id: 'eni1-2-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'Which sentence is correct?',
          options: [
            { id: 'o1', text: 'I have finished my degree in 2020.' },
            { id: 'o2', text: 'I finished my degree in 2020.' },
            { id: 'o3', text: 'I have finish my degree in 2020.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: '“in 2020” is a finished time, so you need the past simple: “I finished my degree in 2020.”',
        },
        {
          id: 'eni1-2-cloze',
          type: 'CLOZE',
          instruction: 'Present perfect or past simple? Complete with the verb in brackets.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '▸ ' },
            { kind: 'GAP', gapId: 'p1', solution: ['Have you ever been'], hint: 'you / ever / be', width: 18 },
            { kind: 'TEXT', text: ' to London?\n▸ Yes, I ' },
            { kind: 'GAP', gapId: 'p2', solution: ['have'], width: 6 },
            { kind: 'TEXT', text: '. I ' },
            { kind: 'GAP', gapId: 'p3', solution: ['went'], hint: 'go', width: 6 },
            { kind: 'TEXT', text: ' there last summer for a conference.\n▸ And ' },
            { kind: 'GAP', gapId: 'p4', solution: ['have you worked', 'have you ever worked'], hint: 'you / work', width: 16 },
            { kind: 'TEXT', text: ' with British clients?\n▸ No, I ' },
            { kind: 'GAP', gapId: 'p5', solution: ['haven’t', "haven't", 'have not'], width: 8 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'eni1-2-info-gone',
          type: 'INFO',
          variant: 'TIP',
          title: 'been or gone?',
          text: '“She’s been to Paris.” means she went there and came back. “She’s gone to Paris.” means she is there now. For experiences, you almost always need “been”.',
        },
        {
          id: 'eni1-2-choice2',
          type: 'CHOICE',
          instruction: 'Choose the correct answer.',
          question: '“Where’s Ben?” – “He’s not here. He’s ___ to the bank.”',
          options: [
            { id: 'o1', text: 'been' },
            { id: 'o2', text: 'gone' },
            { id: 'o3', text: 'went' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'Ben is at the bank now, he hasn’t come back: “He’s gone to the bank.”',
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – for und since, how long.
  {
    order: 3,
    title: 'How long have you …?',
    subtitle: 'for, since und die Dauer bis heute',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'eni1-3-h1', type: 'HEADING', level: 1, text: 'How long have you …?' },
        {
          id: 'eni1-3-text',
          type: 'TEXT',
          text: 'Sophie’s first week at Greenleaf Travel. Her colleague Ben shows her around: “I’ve been here since 2021, so I know everybody. Priya has worked in HR for ten years – she’s the one who hired you. And Tom, our boss, has had this company since he was twenty-five. The coffee machine? That’s been broken for a month. Sorry!”',
        },
        {
          id: 'eni1-3-info',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Ich arbeite seit … – I have worked for/since …',
          text: 'German uses the present tense for something that started in the past and is still true: “Ich arbeite hier seit 2021.” English cannot do this. It uses the present perfect: “I’ve worked here since 2021.” – never “I work here since 2021”. After “for” comes a period of time (for ten years, for a month), after “since” a point in time (since 2021, since Monday, since I was a child).',
          table: {
            headers: ['for + period', 'since + point in time'],
            rows: [
              ['for three years', 'since 2023'],
              ['for a long time', 'since January'],
              ['for two weeks', 'since last Monday'],
              ['for ages', 'since I left school'],
            ],
          },
        },
        {
          id: 'eni1-3-cloze',
          type: 'CLOZE',
          instruction: 'Complete with for or since.',
          wordBank: ['for', 'since'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Ben has been at the company ' },
            { kind: 'GAP', gapId: 'f1', solution: ['since'], width: 6 },
            { kind: 'TEXT', text: ' 2021. Priya has worked in HR ' },
            { kind: 'GAP', gapId: 'f2', solution: ['for'], width: 6 },
            { kind: 'TEXT', text: ' ten years. The coffee machine has been broken ' },
            { kind: 'GAP', gapId: 'f3', solution: ['for'], width: 6 },
            { kind: 'TEXT', text: ' a month. Tom has had the company ' },
            { kind: 'GAP', gapId: 'f4', solution: ['since'], width: 6 },
            { kind: 'TEXT', text: ' he was twenty-five.' },
          ],
        },
        {
          id: 'eni1-3-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct translation.',
          question: '“Ich wohne seit drei Jahren in London.”',
          options: [
            { id: 'o1', text: 'I live in London since three years.' },
            { id: 'o2', text: 'I’ve lived in London for three years.' },
            { id: 'o3', text: 'I’ve lived in London since three years.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'It started in the past and is still true, so it’s the present perfect. “three years” is a period, so it’s “for”.',
        },
        {
          id: 'eni1-3-info-cont',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'have been + -ing',
          text: 'With action verbs like work, live, wait or learn, English often uses the present perfect continuous to stress that the activity has been going on the whole time: “I’ve been learning English for six years.”, “How long have you been waiting?” With state verbs (know, have, be) only the simple form is possible: “I’ve known her since school.”',
          table: {
            headers: ['present perfect continuous', 'present perfect simple'],
            rows: [
              ['I’ve been working here for a year.', 'I’ve known Ben for a year.'],
              ['She’s been waiting since ten.', 'She’s been here since ten.'],
            ],
          },
        },
        {
          id: 'eni1-3-order',
          type: 'ORDERING',
          instruction: 'Make a correct question.',
          items: [
            { id: 's1', text: 'How long' },
            { id: 's2', text: 'have' },
            { id: 's3', text: 'you' },
            { id: 's4', text: 'been learning' },
            { id: 's5', text: 'English?' },
          ],
          solution: ['s1', 's2', 's3', 's4', 's5'],
        },
        {
          id: 'eni1-3-match',
          type: 'MATCHING',
          instruction: 'Match the question with the answer.',
          left: [
            { id: 'q1', text: 'How long have you known Ben?' },
            { id: 'q2', text: 'How long have you been waiting?' },
            { id: 'q3', text: 'When did you start here?' },
            { id: 'q4', text: 'Have you ever worked abroad?' },
          ],
          right: [
            { id: 'a1', text: 'Since my first day.' },
            { id: 'a2', text: 'For about twenty minutes.' },
            { id: 'a3', text: 'Last Monday.' },
            { id: 'a4', text: 'Yes, in Dublin, for six months.' },
          ],
          solution: [
            { leftId: 'q1', rightId: 'a1' },
            { leftId: 'q2', rightId: 'a2' },
            { leftId: 'q3', rightId: 'a3' },
            { leftId: 'q4', rightId: 'a4' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – die förmliche E-Mail.
  {
    order: 4,
    title: 'Dear Ms Shah',
    subtitle: 'Die förmliche E-Mail',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'eni1-4-h1', type: 'HEADING', level: 1, text: 'Dear Ms Shah' },
        {
          id: 'eni1-4-email',
          type: 'TEXT',
          text: 'Dear Ms Shah,\n\nI am writing to apply for the position of Marketing Assistant, which was advertised on your website.\n\nI have a degree in tourism management and I have worked in marketing for three years. In my current job at Rheinreisen GmbH, I am responsible for our social media channels and our monthly newsletter. I have also organised our stand at two international trade fairs.\n\nI would be very interested in joining Greenleaf Travel because sustainable travel is something I really care about. I speak German, English and French.\n\nPlease find my CV attached. I would be grateful for the opportunity to discuss my application with you.\n\nI look forward to hearing from you.\n\nYours sincerely,\nSophie Klein',
        },
        {
          id: 'eni1-4-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Formal and informal emails',
          text: 'A formal email uses full forms (I am, I would), longer and more polite phrases, and fixed openings and endings. If you know the person’s name, begin with “Dear Ms/Mr + surname” and end with “Yours sincerely”. If you don’t know the name, “Dear Sir or Madam” goes with “Yours faithfully”. “Kind regards” and “Best wishes” are safe, slightly less formal endings.',
          table: {
            headers: ['informal', 'formal'],
            rows: [
              ['Hi Priya,', 'Dear Ms Shah,'],
              ['Just a quick note about …', 'I am writing to enquire about …'],
              ['Can you send me …?', 'I would be grateful if you could send me …'],
              ['Here’s my CV.', 'Please find my CV attached.'],
              ['Speak soon!', 'I look forward to hearing from you.'],
              ['Cheers, Sophie', 'Yours sincerely, Sophie Klein'],
            ],
          },
        },
        {
          id: 'eni1-4-match',
          type: 'MATCHING',
          instruction: 'Match the informal phrase with the formal one.',
          left: [
            { id: 'l1', text: 'I want to ask about …' },
            { id: 'l2', text: 'Can you call me?' },
            { id: 'l3', text: 'Sorry for …' },
            { id: 'l4', text: 'Write back soon!' },
          ],
          right: [
            { id: 'r1', text: 'I am writing to enquire about …' },
            { id: 'r2', text: 'I would be grateful if you could call me.' },
            { id: 'r3', text: 'Please accept my apologies for …' },
            { id: 'r4', text: 'I look forward to hearing from you.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'eni1-4-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct ending.',
          question: 'You start an email with “Dear Sir or Madam”. How do you end it?',
          options: [
            { id: 'o1', text: 'Yours sincerely' },
            { id: 'o2', text: 'Yours faithfully' },
            { id: 'o3', text: 'Love' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: '“Dear Sir or Madam” (no name) goes with “Yours faithfully”. “Yours sincerely” is for letters where you use the person’s name.',
        },
        {
          id: 'eni1-4-cloze',
          type: 'CLOZE',
          instruction: 'Complete the formal email.',
          wordBank: ['writing', 'grateful', 'attached', 'forward', 'sincerely'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Dear Mr Carter,\nI am ' },
            { kind: 'GAP', gapId: 'e1', solution: ['writing'], width: 9 },
            { kind: 'TEXT', text: ' about the meeting on Friday. I would be ' },
            { kind: 'GAP', gapId: 'e2', solution: ['grateful'], width: 9 },
            { kind: 'TEXT', text: ' if you could send me the agenda. Please find the report ' },
            { kind: 'GAP', gapId: 'e3', solution: ['attached'], width: 9 },
            { kind: 'TEXT', text: '.\nI look ' },
            { kind: 'GAP', gapId: 'e4', solution: ['forward'], width: 8 },
            { kind: 'TEXT', text: ' to hearing from you.\nYours ' },
            { kind: 'GAP', gapId: 'e5', solution: ['sincerely'], width: 10 },
            { kind: 'TEXT', text: ',\nSophie Klein' },
          ],
        },
        {
          id: 'eni1-4-info-lookforward',
          type: 'INFO',
          variant: 'TIP',
          title: 'look forward to + -ing',
          text: 'In “I look forward to hearing from you”, “to” is a preposition, not part of an infinitive – so the verb takes -ing. “I look forward to meet you” is a very common mistake.',
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – das Vorstellungsgespräch.
  {
    order: 5,
    title: 'The interview',
    subtitle: 'Das Vorstellungsgespräch',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'eni1-5-h1', type: 'HEADING', level: 1, text: 'The interview' },
        {
          id: 'eni1-5-dlg',
          type: 'DIALOGUE',
          title: 'At Greenleaf Travel',
          lines: [
            { speaker: 'Tom', text: 'Thanks for coming in, Sophie. Could you tell us a bit about yourself?' },
            { speaker: 'Sophie', text: 'Of course. I’ve worked in travel marketing for three years. Before that, I studied tourism in Cologne.' },
            { speaker: 'Tom', text: 'What would you say is your biggest strength?' },
            { speaker: 'Sophie', text: 'I’m very organised, and I enjoy working with people from different countries.' },
            { speaker: 'Priya', text: 'Can you give us an example of a problem you’ve solved at work?' },
            { speaker: 'Sophie', text: 'Last year our printer cancelled our brochures a week before a trade fair. I found a new one in two days, and we were ready on time.' },
            { speaker: 'Tom', text: 'Impressive. Do you have any questions for us?' },
            { speaker: 'Sophie', text: 'Yes – what would a typical day look like in this role?' },
          ],
        },
        {
          id: 'eni1-5-vocab',
          type: 'VOCAB_LIST',
          title: 'Words: interviews',
          items: [
            { term: 'strength / weakness', translations: { de: 'die Stärke / die Schwäche', es: 'el punto fuerte / débil' } },
            { term: 'skills', translations: { de: 'die Fähigkeiten', es: 'las habilidades' } },
            { term: 'to be responsible for', translations: { de: 'zuständig sein für', es: 'ser responsable de' } },
            { term: 'to be good at + -ing', translations: { de: 'gut sein in', es: 'ser bueno en/para' }, example: 'I’m good at solving problems.' },
            { term: 'to hire', translations: { de: 'einstellen', es: 'contratar' } },
            { term: 'colleague', translations: { de: 'der Kollege, die Kollegin', es: 'el/la compañero/a' } },
            { term: 'role', translations: { de: 'die Stelle, die Rolle', es: 'el puesto, el papel' } },
          ],
        },
        {
          id: 'eni1-5-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct answer.',
          question: 'Why does Sophie talk about the printer?',
          options: [
            { id: 'o1', text: 'To show that she can solve problems quickly.' },
            { id: 'o2', text: 'To complain about her old company.' },
            { id: 'o3', text: 'To explain why she wants a new job.' },
          ],
          multiple: false,
          solution: ['o1'],
          explanation: 'Priya asks for an example of a problem she has solved, and Sophie shows how quickly she found a solution.',
        },
        {
          id: 'eni1-5-cloze',
          type: 'CLOZE',
          instruction: 'Complete with the correct form of the verb.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Sophie ' },
            { kind: 'GAP', gapId: 'v1', solution: ['has worked', '’s worked', "'s worked", 'has been working'], hint: 'work', width: 12 },
            { kind: 'TEXT', text: ' in travel marketing for three years. Before that, she ' },
            { kind: 'GAP', gapId: 'v2', solution: ['studied'], hint: 'study', width: 9 },
            { kind: 'TEXT', text: ' tourism. Last year she ' },
            { kind: 'GAP', gapId: 'v3', solution: ['found'], hint: 'find', width: 7 },
            { kind: 'TEXT', text: ' a new printer in two days. She’s good at ' },
            { kind: 'GAP', gapId: 'v4', solution: ['organising', 'organizing'], hint: 'organise', width: 11 },
            { kind: 'TEXT', text: ' things.' },
          ],
        },
        {
          id: 'eni1-5-order',
          type: 'ORDERING',
          instruction: 'Put the interview in a typical order.',
          items: [
            { id: 'd1', text: 'Thanks for coming in.' },
            { id: 'd2', text: 'Could you tell us a bit about yourself?' },
            { id: 'd3', text: 'What is your biggest strength?' },
            { id: 'd4', text: 'Do you have any questions for us?' },
            { id: 'd5', text: 'We’ll be in touch by Friday.' },
          ],
          solution: ['d1', 'd2', 'd3', 'd4', 'd5'],
        },
        {
          id: 'eni1-5-writing',
          type: 'WRITING',
          instruction: 'Write a formal email of application.',
          prompt:
            'Choose a job you would like to have. Write a formal email (120–180 words): say which job you are applying for, describe your experience with the present perfect and past simple, explain why you want the job, and end politely.',
          minWords: 100,
          maxWords: 220,
          aiFeedback: true,
          sampleAnswer:
            'Dear Mr Evans,\n\nI am writing to apply for the position of IT support technician, which was advertised on your website last week.\n\nI have worked in IT support for four years. I started at a small software company in Leipzig in 2021, and since 2023 I have been responsible for the computers of a school with 600 students. I have solved hundreds of problems, from broken laptops to network failures, and I am good at explaining technical things in simple words.\n\nI would like to work for your company because I have always been interested in the education sector and I would enjoy working in an international team. I speak German and English fluently.\n\nPlease find my CV attached. I would be grateful for the opportunity to discuss my application with you.\n\nI look forward to hearing from you.\n\nYours sincerely,\nJonas Becker',
        },
      ],
    },
  },
];
