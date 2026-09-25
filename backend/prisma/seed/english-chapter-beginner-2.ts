import type { UnitSeed } from './chapter-beginner-1';

/**
 * Englisch, Beginner, Kapitel 2: „My family“
 *
 * Familie, Besitz, Aussehen, Alter – in dieser Reihenfolge, weil jede Seite
 * die vorige braucht: Wer „my mother“ sagen kann, kann auch „my mother’s
 * car“ sagen, und wer Personen beschreiben kann, fragt als Nächstes nach
 * ihrem Alter.
 *
 * Übersetzungen wie in `english-chapter-beginner-1.ts`: `de` an Erklärungen,
 * `de` und `es` an Vokabeln.
 */
const v = 1;

export const ENGLISH_BEGINNER_2_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Familienwörter, dann my/your/his/her.
  {
    order: 1,
    title: 'This is my family',
    subtitle: 'Familienmitglieder, my, your, his, her',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'en2-1-h1', type: 'HEADING', level: 1, text: 'This is my family' },
        {
          id: 'en2-1-image',
          type: 'IMAGE',
          url: 'illustration:family-tree',
          alt: 'Ein Stammbaum mit drei Generationen, verbunden durch Linien.',
          caption: 'Three generations of one family.',
        },
        {
          id: 'en2-1-intro',
          type: 'TEXT',
          text: 'Diego shows Anna a photo on his phone. Read the dialogue: who is who in Diego’s family?',
          translations: {
            de: 'Diego zeigt Anna ein Foto auf seinem Handy. Lesen Sie den Dialog: Wer ist wer in Diegos Familie?',
          },
        },
        {
          id: 'en2-1-dlg',
          type: 'DIALOGUE',
          title: 'A family photo',
          lines: [
            { speaker: 'Anna', text: 'Is this your family, Diego?' },
            { speaker: 'Diego', text: 'Yes, it is. This is my mother, Lucía, and this is my father, Pablo.' },
            { speaker: 'Anna', text: 'And who’s the girl?' },
            { speaker: 'Diego', text: 'That’s my sister, Sofía. She’s a student. Her boyfriend is next to her.' },
            { speaker: 'Anna', text: 'And the old man?' },
            { speaker: 'Diego', text: 'That’s my grandfather. His name is Tomás. He’s great!' },
          ],
        },
        {
          id: 'en2-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Words: the family',
          items: [
            { term: 'mother / mum', translations: { de: 'die Mutter / Mama', es: 'la madre / mamá' } },
            { term: 'father / dad', translations: { de: 'der Vater / Papa', es: 'el padre / papá' } },
            { term: 'parents', translations: { de: 'die Eltern', es: 'los padres' } },
            { term: 'sister', translations: { de: 'die Schwester', es: 'la hermana' } },
            { term: 'brother', translations: { de: 'der Bruder', es: 'el hermano' } },
            { term: 'daughter', translations: { de: 'die Tochter', es: 'la hija' } },
            { term: 'son', translations: { de: 'der Sohn', es: 'el hijo' } },
            { term: 'grandmother', translations: { de: 'die Großmutter', es: 'la abuela' } },
            { term: 'grandfather', translations: { de: 'der Großvater', es: 'el abuelo' } },
            { term: 'husband / wife', translations: { de: 'der Ehemann / die Ehefrau', es: 'el marido / la mujer' } },
            { term: 'children', translations: { de: 'die Kinder', es: 'los hijos, los niños' }, example: 'They’ve got two children.' },
          ],
        },
        {
          id: 'en2-1-match',
          type: 'MATCHING',
          instruction: 'Match the pairs.',
          left: [
            { id: 'l1', text: 'mother' },
            { id: 'l2', text: 'sister' },
            { id: 'l3', text: 'son' },
            { id: 'l4', text: 'grandmother' },
          ],
          right: [
            { id: 'r1', text: 'father' },
            { id: 'r2', text: 'brother' },
            { id: 'r3', text: 'daughter' },
            { id: 'r4', text: 'grandfather' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'en2-1-info-poss',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'my, your, his, her',
          text: 'Possessive words never change their form – “my brother”, “my sister”, “my parents”. But in the third person, English asks: who owns it? A man → “his”, a woman → “her”. “Diego and his sister”, “Anna and her brother”. German looks at the thing, English looks at the owner.',
          translations: {
            de: {
              title: 'my, your, his, her',
              text: 'Possessivbegleiter ändern nie ihre Form – „my brother“, „my sister“, „my parents“. In der dritten Person fragt das Englische aber: Wem gehört es? Einem Mann → „his“, einer Frau → „her“. „Diego and his sister“, „Anna and her brother“. Das Deutsche schaut auf die Sache, das Englische auf den Besitzer.',
            },
          },
          table: {
            headers: ['Person', 'Possessive', 'Example'],
            rows: [
              ['I', 'my', 'my mother'],
              ['you', 'your', 'your father'],
              ['he', 'his', 'his sister'],
              ['she', 'her', 'her brother'],
              ['it', 'its', 'its name'],
              ['we', 'our', 'our children'],
              ['they', 'their', 'their house'],
            ],
          },
        },
        {
          id: 'en2-1-cloze',
          type: 'CLOZE',
          instruction: 'Complete with my, your, his, her or their.',
          wordBank: ['his', 'her', 'their', 'my', 'your'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Diego lives with ' },
            { kind: 'GAP', gapId: 'p1', solution: ['his'], width: 6 },
            { kind: 'TEXT', text: ' parents. Sofía is ' },
            { kind: 'GAP', gapId: 'p2', solution: ['his'], width: 6 },
            { kind: 'TEXT', text: ' sister. Sofía and ' },
            { kind: 'GAP', gapId: 'p3', solution: ['her'], width: 6 },
            { kind: 'TEXT', text: ' boyfriend are students. Lucía and Pablo love ' },
            { kind: 'GAP', gapId: 'p4', solution: ['their'], width: 7 },
            { kind: 'TEXT', text: ' children.' },
          ],
        },
        {
          id: 'en2-1-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct word.',
          question: 'Anna is from Hamburg. ___ brother lives in Berlin.',
          options: [
            { id: 'o1', text: 'His' },
            { id: 'o2', text: 'Her' },
            { id: 'o3', text: 'Their' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'The brother belongs to Anna, a woman – so it is “her brother”, even though the brother is a man.',
          explanationTranslations: {
            de: 'Der Bruder gehört zu Anna, einer Frau – also „her brother“, obwohl der Bruder ein Mann ist.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – Besitz: das Genitiv-s und „have got“.
  {
    order: 2,
    title: 'Whose is it?',
    subtitle: 'Das Genitiv-s und have got',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'en2-2-h1', type: 'HEADING', level: 1, text: 'Whose is it?' },
        {
          id: 'en2-2-image',
          type: 'IMAGE',
          url: 'illustration:belongings',
          alt: 'Eine Tasche, ein Schlüsselbund, ein Handy und eine Brille liegen auf einem Tisch.',
          caption: 'Things on the classroom table.',
        },
        {
          id: 'en2-2-dlg',
          type: 'DIALOGUE',
          title: 'After the lesson',
          lines: [
            { speaker: 'Teacher', text: 'Whose phone is this?' },
            { speaker: 'Karim', text: 'It’s Yuki’s phone. And the keys are Diego’s.' },
            { speaker: 'Teacher', text: 'And the umbrella?' },
            { speaker: 'Karim', text: 'I don’t know. Anna has got an umbrella, but hers is red.' },
            { speaker: 'Anna', text: 'That’s not my umbrella. Mine is in my bag!' },
          ],
        },
        {
          id: 'en2-2-vocab',
          type: 'VOCAB_LIST',
          title: 'Words: my things',
          items: [
            { term: 'bag', translations: { de: 'die Tasche', es: 'el bolso, la bolsa' } },
            { term: 'phone', translations: { de: 'das Handy, das Telefon', es: 'el móvil, el teléfono' } },
            { term: 'keys', translations: { de: 'die Schlüssel', es: 'las llaves' } },
            { term: 'umbrella', translations: { de: 'der Regenschirm', es: 'el paraguas' } },
            { term: 'glasses', translations: { de: 'die Brille', es: 'las gafas' } },
            { term: 'wallet', translations: { de: 'der Geldbeutel', es: 'la cartera' } },
            { term: 'watch', translations: { de: 'die Armbanduhr', es: 'el reloj' } },
            { term: 'car', translations: { de: 'das Auto', es: 'el coche' } },
            { term: 'Whose …?', translations: { de: 'Wessen …? Wem gehört …?', es: '¿De quién …?' }, example: 'Whose bag is this?' },
          ],
        },
        {
          id: 'en2-2-info-genitive',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'The ’s: Yuki’s phone',
          text: 'To say who owns something, you add ’s to the person: “Yuki’s phone”, “my mother’s car”. The owner comes first, the thing second – like in German “Yukis Handy”, but always with an apostrophe. After a plural with -s you only add the apostrophe: “my parents’ house”.',
          translations: {
            de: {
              title: 'Das ’s: Yuki’s phone',
              text: 'Um zu sagen, wem etwas gehört, hängt man ’s an die Person: „Yuki’s phone“, „my mother’s car“. Erst der Besitzer, dann die Sache – wie im deutschen „Yukis Handy“, aber immer mit Apostroph. Nach einem Plural auf -s steht nur der Apostroph: „my parents’ house“.',
            },
          },
          table: {
            headers: ['Owner', 'Example'],
            rows: [
              ['Yuki', 'Yuki’s phone'],
              ['my sister', 'my sister’s bag'],
              ['my parents', 'my parents’ house'],
              ['the children', 'the children’s toys'],
            ],
          },
        },
        {
          id: 'en2-2-choice-gen',
          type: 'CHOICE',
          instruction: 'Choose the correct form.',
          question: 'The car belongs to Diego’s father.',
          options: [
            { id: 'o1', text: 'It’s the car of Diego’s father.' },
            { id: 'o2', text: 'It’s Diego’s father’s car.' },
            { id: 'o3', text: 'It’s Diego father car.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'With people, English uses ’s: “Diego’s father’s car”. “The car of …” sounds unnatural with people.',
          explanationTranslations: {
            de: 'Bei Personen verwendet das Englische das ’s: „Diego’s father’s car“. „The car of …“ klingt bei Personen unnatürlich.',
          },
        },
        {
          id: 'en2-2-info-havegot',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'have got: I’ve got, she’s got',
          text: 'In British English, “have got” is very common for things you own and for family: “I’ve got a brother.” With he, she and it the form is “has got” – short “’s got”. Careful: “she’s got” (= she has got) looks like “she’s” (= she is).',
          translations: {
            de: {
              title: 'have got: I’ve got, she’s got',
              text: 'Im britischen Englisch ist „have got“ sehr häufig für Besitz und Familie: „I’ve got a brother.“ Bei he, she und it heißt es „has got“ – kurz „’s got“. Vorsicht: „she’s got“ (= she has got) sieht aus wie „she’s“ (= she is).',
            },
          },
          table: {
            headers: ['', '+', '–', '?'],
            rows: [
              ['I / you / we / they', 'I’ve got', 'I haven’t got', 'Have you got …?'],
              ['he / she / it', 'she’s got', 'she hasn’t got', 'Has she got …?'],
            ],
          },
        },
        {
          id: 'en2-2-cloze',
          type: 'CLOZE',
          instruction: 'Complete with have, has, haven’t or hasn’t.',
          wordBank: ['have', 'has', 'haven’t', 'hasn’t'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '▸ ' },
            { kind: 'GAP', gapId: 'h1', solution: ['Have'], width: 6 },
            { kind: 'TEXT', text: ' you got any brothers or sisters?\n▸ Yes, I’ve got a sister. She ' },
            { kind: 'GAP', gapId: 'h2', solution: ['has'], width: 5 },
            { kind: 'TEXT', text: ' got two children.\n▸ And your brother?\n▸ I ' },
            { kind: 'GAP', gapId: 'h3', solution: ['haven’t', "haven't"], width: 8 },
            { kind: 'TEXT', text: ' got a brother. And my sister ' },
            { kind: 'GAP', gapId: 'h4', solution: ['hasn’t', "hasn't"], width: 8 },
            { kind: 'TEXT', text: ' got a car.' },
          ],
        },
        {
          id: 'en2-2-order',
          type: 'ORDERING',
          instruction: 'Make a correct question.',
          items: [
            { id: 's1', text: 'Has' },
            { id: 's2', text: 'your' },
            { id: 's3', text: 'brother' },
            { id: 's4', text: 'got' },
            { id: 's5', text: 'a car?' },
          ],
          solution: ['s1', 's2', 's3', 's4', 's5'],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – Personen beschreiben: Adjektive und have got für Aussehen.
  {
    order: 3,
    title: 'What does she look like?',
    subtitle: 'Personen beschreiben',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'en2-3-h1', type: 'HEADING', level: 1, text: 'What does she look like?' },
        {
          id: 'en2-3-image',
          type: 'IMAGE',
          url: 'illustration:portraits',
          alt: 'Vier gerahmte Porträts von Menschen unterschiedlichen Alters.',
          caption: 'Four people, four faces.',
        },
        {
          id: 'en2-3-text',
          type: 'TEXT',
          text: 'My grandmother Rosa is seventy-two. She’s short and she’s got grey hair and brown eyes. She’s very friendly and funny. My cousin Leo is tall and young – he’s only nineteen. He’s got short black hair. He’s nice, but a bit quiet.',
          translations: {
            de: 'Meine Großmutter Rosa ist zweiundsiebzig. Sie ist klein und hat graue Haare und braune Augen. Sie ist sehr freundlich und lustig. Mein Cousin Leo ist groß und jung – er ist erst neunzehn. Er hat kurze schwarze Haare. Er ist nett, aber ein bisschen ruhig.',
          },
        },
        {
          id: 'en2-3-vocab',
          type: 'VOCAB_LIST',
          title: 'Words: describing people',
          items: [
            { term: 'tall', translations: { de: 'groß (Person)', es: 'alto' } },
            { term: 'short', translations: { de: 'klein; kurz', es: 'bajo; corto' } },
            { term: 'young', translations: { de: 'jung', es: 'joven' } },
            { term: 'old', translations: { de: 'alt', es: 'viejo, mayor' } },
            { term: 'friendly', translations: { de: 'freundlich', es: 'simpático, amable' } },
            { term: 'funny', translations: { de: 'lustig', es: 'divertido, gracioso' } },
            { term: 'quiet', translations: { de: 'ruhig, still', es: 'callado, tranquilo' } },
            { term: 'hair', translations: { de: 'die Haare', es: 'el pelo' }, example: 'She’s got long hair.' },
            { term: 'eyes', translations: { de: 'die Augen', es: 'los ojos' }, example: 'He’s got blue eyes.' },
            { term: 'a bit', translations: { de: 'ein bisschen', es: 'un poco' } },
          ],
        },
        {
          id: 'en2-3-info-adj',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Adjectives never change',
          text: 'English adjectives have only one form. There is no ending for man, woman or plural: “a tall man”, “a tall woman”, “tall children”. The adjective goes before the noun or after “to be”: “She’s friendly.” For hair, the order is size – colour – hair: “long black hair”.',
          translations: {
            de: {
              title: 'Adjektive ändern sich nie',
              text: 'Englische Adjektive haben nur eine Form. Es gibt keine Endung für Mann, Frau oder Plural: „a tall man“, „a tall woman“, „tall children“. Das Adjektiv steht vor dem Nomen oder nach „to be“: „She’s friendly.“ Bei Haaren ist die Reihenfolge Länge – Farbe – hair: „long black hair“.',
            },
          },
          table: {
            headers: ['German', 'English'],
            rows: [
              ['ein großer Mann', 'a tall man'],
              ['eine große Frau', 'a tall woman'],
              ['große Kinder', 'tall children'],
              ['Sie hat lange schwarze Haare.', 'She’s got long black hair.'],
            ],
          },
        },
        {
          id: 'en2-3-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'Which sentence is correct?',
          options: [
            { id: 'o1', text: 'She’s got black long hair.' },
            { id: 'o2', text: 'She’s got long black hair.' },
            { id: 'o3', text: 'She’s got longs blacks hair.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'Size comes before colour, and adjectives never get an -s: “long black hair”.',
          explanationTranslations: {
            de: 'Die Länge steht vor der Farbe, und Adjektive bekommen nie ein -s: „long black hair“.',
          },
        },
        {
          id: 'en2-3-match',
          type: 'MATCHING',
          instruction: 'Match the opposites.',
          left: [
            { id: 'l1', text: 'tall' },
            { id: 'l2', text: 'young' },
            { id: 'l3', text: 'long' },
            { id: 'l4', text: 'quiet' },
          ],
          right: [
            { id: 'r1', text: 'short (person)' },
            { id: 'r2', text: 'old' },
            { id: 'r3', text: 'short (hair)' },
            { id: 'r4', text: 'loud' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'en2-3-cloze',
          type: 'CLOZE',
          instruction: 'Read the text about Rosa and Leo again. Complete.',
          wordBank: ['short', 'grey', 'friendly', 'tall', 'black', 'old'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Rosa is ' },
            { kind: 'GAP', gapId: 'a1', solution: ['short'], width: 7 },
            { kind: 'TEXT', text: ' and she’s got ' },
            { kind: 'GAP', gapId: 'a2', solution: ['grey'], width: 6 },
            { kind: 'TEXT', text: ' hair. She’s very ' },
            { kind: 'GAP', gapId: 'a3', solution: ['friendly'], width: 9 },
            { kind: 'TEXT', text: '. Leo is ' },
            { kind: 'GAP', gapId: 'a4', solution: ['tall'], width: 6 },
            { kind: 'TEXT', text: ' and he’s got short ' },
            { kind: 'GAP', gapId: 'a5', solution: ['black'], width: 7 },
            { kind: 'TEXT', text: ' hair.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – Alter: Zahlen bis 100 und „I’m 25“.
  {
    order: 4,
    title: 'How old are you?',
    subtitle: 'Zahlen bis 100, Alter, Geburtstag',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'en2-4-h1', type: 'HEADING', level: 1, text: 'How old are you?' },
        {
          id: 'en2-4-image',
          type: 'IMAGE',
          url: 'illustration:birthday',
          alt: 'Ein Geburtstagskuchen mit Kerzen, daneben Geschenke und Luftballons.',
          caption: 'Happy birthday!',
        },
        {
          id: 'en2-4-dlg',
          type: 'DIALOGUE',
          title: 'A birthday in class',
          lines: [
            { speaker: 'Yuki', text: 'Happy birthday, Karim! How old are you today?' },
            { speaker: 'Karim', text: 'Thank you! I’m thirty-four.' },
            { speaker: 'Yuki', text: 'And how old is your son?' },
            { speaker: 'Karim', text: 'He’s six. His birthday is in May.' },
            { speaker: 'Yuki', text: 'When’s your wife’s birthday?' },
            { speaker: 'Karim', text: 'In October. She’s twenty-nine – she says!' },
          ],
        },
        {
          id: 'en2-4-info-age',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'I am 34 – not “I have 34”',
          text: 'In English, age goes with “to be”, not with “have”: “I’m thirty-four.” or “I’m thirty-four years old.” – but never “I’m thirty-four years”. The question is “How old are you?”.',
          translations: {
            de: {
              title: 'I am 34 – nicht „I have 34“',
              text: 'Im Englischen steht das Alter mit „to be“, nicht mit „have“: „I’m thirty-four.“ oder „I’m thirty-four years old.“ – aber nie „I’m thirty-four years“. Die Frage lautet „How old are you?“.',
            },
          },
        },
        {
          id: 'en2-4-info-numbers',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Numbers from 20 to 100',
          text: 'The tens end in “-ty”. Then English counts like a clock: first the ten, then the one, with a hyphen – “thirty-four”, not “four and thirty” like in German. Careful: “forty” has no “u”.',
          translations: {
            de: {
              title: 'Die Zahlen von 20 bis 100',
              text: 'Die Zehner enden auf „-ty“. Dann zählt das Englische der Reihe nach: erst der Zehner, dann der Einer, mit Bindestrich – „thirty-four“, nicht „vierunddreißig“ wie im Deutschen. Achtung: „forty“ schreibt man ohne „u“.',
            },
          },
          table: {
            headers: ['Tens', '', 'Examples'],
            rows: [
              ['20 twenty', '60 sixty', '21 twenty-one'],
              ['30 thirty', '70 seventy', '34 thirty-four'],
              ['40 forty', '80 eighty', '58 fifty-eight'],
              ['50 fifty', '90 ninety', '100 a hundred / one hundred'],
            ],
          },
        },
        {
          id: 'en2-4-match',
          type: 'MATCHING',
          instruction: 'Match the number with the word.',
          left: [
            { id: 'z1', text: '14' },
            { id: 'z2', text: '40' },
            { id: 'z3', text: '47' },
            { id: 'z4', text: '74' },
          ],
          right: [
            { id: 'y1', text: 'fourteen' },
            { id: 'y2', text: 'forty' },
            { id: 'y3', text: 'forty-seven' },
            { id: 'y4', text: 'seventy-four' },
          ],
          solution: [
            { leftId: 'z1', rightId: 'y1' },
            { leftId: 'z2', rightId: 'y2' },
            { leftId: 'z3', rightId: 'y3' },
            { leftId: 'z4', rightId: 'y4' },
          ],
        },
        {
          id: 'en2-4-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct answer.',
          question: 'How old is your grandmother?',
          options: [
            { id: 'o1', text: 'She has seventy-two years.' },
            { id: 'o2', text: 'She’s seventy-two.' },
            { id: 'o3', text: 'She’s seventy-two years.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'Age goes with “to be”. Either just the number or “… years old” – never only “years”.',
          explanationTranslations: {
            de: 'Das Alter steht mit „to be“. Entweder nur die Zahl oder „… years old“ – nie nur „years“.',
          },
        },
        {
          id: 'en2-4-vocab',
          type: 'VOCAB_LIST',
          title: 'Words: the months',
          items: [
            { term: 'January', translations: { de: 'Januar', es: 'enero' } },
            { term: 'February', translations: { de: 'Februar', es: 'febrero' } },
            { term: 'March', translations: { de: 'März', es: 'marzo' } },
            { term: 'April', translations: { de: 'April', es: 'abril' } },
            { term: 'May', translations: { de: 'Mai', es: 'mayo' } },
            { term: 'June', translations: { de: 'Juni', es: 'junio' } },
            { term: 'July', translations: { de: 'Juli', es: 'julio' } },
            { term: 'August', translations: { de: 'August', es: 'agosto' } },
            { term: 'September', translations: { de: 'September', es: 'septiembre' } },
            { term: 'October', translations: { de: 'Oktober', es: 'octubre' } },
            { term: 'November', translations: { de: 'November', es: 'noviembre' } },
            { term: 'December', translations: { de: 'Dezember', es: 'diciembre' } },
            { term: 'birthday', translations: { de: 'der Geburtstag', es: 'el cumpleaños' }, example: 'My birthday is in June.' },
          ],
        },
        {
          id: 'en2-4-cloze',
          type: 'CLOZE',
          instruction: 'Complete the dialogue.',
          wordBank: ['old', 'I’m', 'When’s', 'in', 'birthday'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '▸ How ' },
            { kind: 'GAP', gapId: 'b1', solution: ['old'], width: 5 },
            { kind: 'TEXT', text: ' are you, Anna?\n▸ ' },
            { kind: 'GAP', gapId: 'b2', solution: ['I’m', "I'm"], width: 5 },
            { kind: 'TEXT', text: ' twenty-eight.\n▸ ' },
            { kind: 'GAP', gapId: 'b3', solution: ['When’s', "When's"], width: 8 },
            { kind: 'TEXT', text: ' your birthday?\n▸ It’s ' },
            { kind: 'GAP', gapId: 'b4', solution: ['in'], width: 4 },
            { kind: 'TEXT', text: ' March. And your ' },
            { kind: 'GAP', gapId: 'b5', solution: ['birthday'], width: 9 },
            { kind: 'TEXT', text: '?' },
          ],
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
        { id: 'en2-5-h1', type: 'HEADING', level: 1, text: 'Can you do it?' },
        {
          id: 'en2-5-intro',
          type: 'TEXT',
          text: 'The whole chapter again: family words, my/his/her, the ’s, have got, describing people and saying your age.',
          translations: {
            de: 'Das ganze Kapitel noch einmal: Familienwörter, my/his/her, das ’s, have got, Personen beschreiben und das Alter sagen.',
          },
        },
        {
          id: 'en2-5-cloze',
          type: 'CLOZE',
          instruction: 'Complete Anna’s text about her family.',
          wordBank: ['got', 'her', 'his', 'brother’s', 'old'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'I’ve ' },
            { kind: 'GAP', gapId: 'f1', solution: ['got'], width: 5 },
            { kind: 'TEXT', text: ' a brother, Max, and a sister, Lena. Lena lives with ' },
            { kind: 'GAP', gapId: 'f2', solution: ['her'], width: 5 },
            { kind: 'TEXT', text: ' husband in Berlin. Max is thirty years ' },
            { kind: 'GAP', gapId: 'f3', solution: ['old'], width: 5 },
            { kind: 'TEXT', text: '. He lives with ' },
            { kind: 'GAP', gapId: 'f4', solution: ['his'], width: 5 },
            { kind: 'TEXT', text: ' girlfriend. My ' },
            { kind: 'GAP', gapId: 'f5', solution: ['brother’s', "brother's"], width: 10 },
            { kind: 'TEXT', text: ' girlfriend is very funny.' },
          ],
        },
        {
          id: 'en2-5-match',
          type: 'MATCHING',
          instruction: 'Match the question with the answer.',
          left: [
            { id: 'm1', text: 'How old is your son?' },
            { id: 'm2', text: 'Whose bag is this?' },
            { id: 'm3', text: 'Have you got any sisters?' },
            { id: 'm4', text: 'What does he look like?' },
          ],
          right: [
            { id: 'x1', text: 'He’s six.' },
            { id: 'x2', text: 'It’s Yuki’s.' },
            { id: 'x3', text: 'Yes, I’ve got one.' },
            { id: 'x4', text: 'He’s tall and he’s got dark hair.' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'x1' },
            { leftId: 'm2', rightId: 'x2' },
            { leftId: 'm3', rightId: 'x3' },
            { leftId: 'm4', rightId: 'x4' },
          ],
        },
        {
          id: 'en2-5-choice',
          type: 'CHOICE',
          instruction: 'Mark all the correct sentences.',
          question: 'Which of these sentences are correct?',
          options: [
            { id: 'r1', text: 'My sister has got two children.' },
            { id: 'r2', text: 'Diego and her sister live in Mexico.' },
            { id: 'r3', text: 'I’m twenty-five years old.' },
            { id: 'r4', text: 'They are talls.' },
          ],
          multiple: true,
          solution: ['r1', 'r3'],
          explanation: 'Diego is a man, so it is “his sister”. Adjectives never take an -s: “They are tall.”',
          explanationTranslations: {
            de: 'Diego ist ein Mann, also „his sister“. Adjektive bekommen nie ein -s: „They are tall.“',
          },
        },
        {
          id: 'en2-5-writing',
          type: 'WRITING',
          instruction: 'Describe a person from your family.',
          prompt:
            'Write four to six sentences: Who is it? How old is he or she? What does he or she look like? What is he or she like? Use “has got”, “his/her” and some adjectives.',
          minWords: 20,
          maxWords: 90,
          aiFeedback: true,
          sampleAnswer:
            'This is my brother Paul. He’s thirty-two years old and he lives in Cologne with his wife. He’s tall and he’s got short brown hair and blue eyes. He’s very funny. His wife’s name is Mia.',
        },
      ],
    },
  },
];
