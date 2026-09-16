import type { UnitSeed } from './chapter-beginner-1';

/**
 * Spanische Grammatik, Kapitel 1: „Artikel und Substantive“
 *
 * Musterkapitel des spanischen Grammatikbuchs, drei Seiten lang – gebaut wie
 * `chapter-grammar-1.ts`: eine Regel, ihre Tabelle, und unmittelbar danach die
 * Aufgabe, die genau diese Regel abfragt.
 *
 * Der Stoff ist bewusst nicht der des deutschen Kapitels. Dort ist die
 * Botschaft, dass man den Artikel mitlernen muss, weil man ihn dem Wort nicht
 * ansieht; hier ist sie fast die umgekehrte: Im Spanischen verrät die Endung
 * das Geschlecht meistens – und die Arbeit steckt in den Ausnahmen.
 *
 * Erklärungen tragen eine deutsche Übersetzung (siehe
 * `spanish-chapter-beginner-1.ts` zur Begründung), die Tabellen bleiben
 * spanisch: Sie enthalten den zu lernenden Stoff selbst.
 */
const v = 1;

export const SPANISH_GRAMMAR_1_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – was ein Artikel ist und dass er sich doppelt richtet.
  {
    order: 1,
    title: 'el, la, un, una',
    subtitle: 'Bestimmter und unbestimmter Artikel',
    estimatedMinutes: 20,
    content: {
      version: v,
      blocks: [
        { id: 'esg1-1-h1', type: 'HEADING', level: 1, text: 'el, la, un, una' },
        {
          id: 'esg1-1-intro',
          type: 'TEXT',
          text: 'Todo sustantivo español es masculino o femenino. No hay un tercer género como el «das» alemán, pero hay algo que el alemán no tiene: el artículo cambia también en plural. Es decir, se ajusta dos veces, en género y en número.',
          translations: {
            de: 'Jedes spanische Substantiv ist männlich oder weiblich. Ein drittes Geschlecht wie das deutsche „das“ gibt es nicht, dafür aber etwas, das dem Deutschen fehlt: Der Artikel ändert sich auch im Plural. Er richtet sich also zweifach – nach Geschlecht und nach Zahl.',
          },
        },
        {
          id: 'esg1-1-info-articulos',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: '¿Determinado o indeterminado?',
          text: 'El artículo determinado (el, la, los, las) señala algo ya conocido: «el libro» es un libro del que ya se ha hablado. El indeterminado (un, una, unos, unas) introduce algo nuevo: «un libro» es uno cualquiera. En plural, «unos» y «unas» significan más bien «algunos».',
          translations: {
            de: {
              title: 'Bestimmt oder unbestimmt?',
              text: 'Der bestimmte Artikel (el, la, los, las) verweist auf etwas Bekanntes: „el libro“ ist ein Buch, von dem schon die Rede war. Der unbestimmte (un, una, unos, unas) führt etwas Neues ein: „un libro“ ist irgendeines. Im Plural bedeuten „unos“ und „unas“ eher „einige“.',
            },
          },
          table: {
            headers: ['', 'masculino', 'femenino'],
            rows: [
              ['determinado, singular', 'el libro', 'la casa'],
              ['determinado, plural', 'los libros', 'las casas'],
              ['indeterminado, singular', 'un libro', 'una casa'],
              ['indeterminado, plural', 'unos libros', 'unas casas'],
            ],
          },
        },
        {
          id: 'esg1-1-choice',
          type: 'CHOICE',
          instruction: 'Elija el artículo correcto.',
          question: '«___ ciudad es muy grande.» ¿Qué artículo falta?',
          options: [
            { id: 'o1', text: 'El' },
            { id: 'o2', text: 'La' },
            { id: 'o3', text: 'Los' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation:
            '«ciudad» es femenino y está en singular, así que el artículo determinado es «la».',
          explanationTranslations: {
            de: '„ciudad“ ist weiblich und steht im Singular, der bestimmte Artikel lautet also „la“.',
          },
        },
        {
          id: 'esg1-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: sustantivos con artículo',
          items: [
            { term: 'el libro', translations: { en: 'book', de: 'das Buch' }, example: 'El libro está en la mesa.' },
            { term: 'la casa', translations: { en: 'house', de: 'das Haus' } },
            { term: 'el coche', translations: { en: 'car', de: 'das Auto' } },
            { term: 'la ciudad', translations: { en: 'city', de: 'die Stadt' } },
            { term: 'el problema', translations: { en: 'problem', de: 'das Problem' } },
            { term: 'la mano', translations: { en: 'hand', de: 'die Hand' } },
            { term: 'el día', translations: { en: 'day', de: 'der Tag' } },
            { term: 'la canción', translations: { en: 'song', de: 'das Lied' } },
            { term: 'el color', translations: { en: 'color', de: 'die Farbe' } },
            { term: 'la flor', translations: { en: 'flower', de: 'die Blume' } },
          ],
        },
        {
          id: 'esg1-1-match',
          type: 'MATCHING',
          instruction: 'Relacione el sustantivo con su artículo determinado.',
          left: [
            { id: 'l1', text: '___ mesa' },
            { id: 'l2', text: '___ coches' },
            { id: 'l3', text: '___ flores' },
            { id: 'l4', text: '___ problema' },
          ],
          right: [
            { id: 'r1', text: 'la' },
            { id: 'r2', text: 'los' },
            { id: 'r3', text: 'las' },
            { id: 'r4', text: 'el' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'esg1-1-info-agua',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'el agua es femenina',
          text: 'Unas pocas palabras femeninas llevan «el» en singular: las que empiezan por «a» acentuada, como agua, águila, aula, hacha. Es solo una cuestión de sonido – «la agua» sería difícil de pronunciar. La palabra sigue siendo femenina, y se nota en dos sitios: el adjetivo («el agua fría») y el plural («las aguas frías»).',
          translations: {
            de: {
              title: 'el agua ist weiblich',
              text: 'Einige wenige weibliche Wörter stehen im Singular mit „el“: die, die mit betontem „a“ beginnen, etwa agua, águila, aula, hacha. Das ist reine Lautung – „la agua“ wäre schwer auszusprechen. Das Wort bleibt weiblich, und man sieht es an zwei Stellen: am Adjektiv („el agua fría“) und im Plural („las aguas frías“).',
            },
          },
          table: {
            headers: ['Singular', 'Plural'],
            rows: [
              ['el agua fría', 'las aguas frías'],
              ['el aula nueva', 'las aulas nuevas'],
              ['el águila blanca', 'las águilas blancas'],
            ],
          },
        },
        {
          id: 'esg1-1-cloze',
          type: 'CLOZE',
          instruction:
            'Complete con el artículo correcto. Atención: después de «hay» el artículo es siempre indeterminado.',
          wordBank: ['la', 'un', 'las', 'los'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Mira, ahí está ' },
            { kind: 'GAP', gapId: 'a1', solution: ['la'], width: 5 },
            { kind: 'TEXT', text: ' casa de Ana. Delante hay ' },
            { kind: 'GAP', gapId: 'a2', solution: ['un'], width: 5 },
            { kind: 'TEXT', text: ' coche azul. En el jardín crecen ' },
            { kind: 'GAP', gapId: 'a3', solution: ['las'], width: 5 },
            { kind: 'TEXT', text: ' flores que plantó su madre, y en la entrada están ' },
            { kind: 'GAP', gapId: 'a4', solution: ['los'], width: 5 },
            { kind: 'TEXT', text: ' libros que me prestó.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – die Endung verrät das Geschlecht, und wo sie es nicht tut.
  {
    order: 2,
    title: 'Die Endung verrät das Geschlecht',
    subtitle: 'Die Regel und ihre Ausnahmen',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'esg1-2-h1', type: 'HEADING', level: 1, text: 'Die Endung verrät das Geschlecht' },
        {
          id: 'esg1-2-intro',
          type: 'TEXT',
          text: 'Aquí el español es más amable que el alemán. En alemán hay que aprender el artículo con cada palabra; en español, la terminación lo dice casi siempre. «-o» suele ser masculino, «-a» femenino, y algunas terminaciones más son seguras al cien por cien.',
          translations: {
            de: 'Hier ist das Spanische freundlicher als das Deutsche. Im Deutschen muss man den Artikel zu jedem Wort mitlernen; im Spanischen sagt ihn die Endung fast immer. „-o“ ist meist männlich, „-a“ weiblich, und einige weitere Endungen sind hundertprozentig verlässlich.',
          },
        },
        {
          id: 'esg1-2-info-terminaciones',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Terminaciones y su género',
          text: 'Estas terminaciones son fiables. Las de la columna derecha no tienen prácticamente excepciones: todo lo que acaba en «-ción», «-sión», «-dad», «-tad» o «-tud» es femenino.',
          translations: {
            de: {
              title: 'Endungen und ihr Geschlecht',
              text: 'Diese Endungen sind verlässlich. Die der rechten Spalte haben praktisch keine Ausnahmen: Alles, was auf „-ción“, „-sión“, „-dad“, „-tad“ oder „-tud“ endet, ist weiblich.',
            },
          },
          table: {
            headers: ['Masculino', 'Ejemplo', 'Femenino', 'Ejemplo'],
            rows: [
              ['-o', 'el libro', '-a', 'la casa'],
              ['-or', 'el color', '-ción', 'la canción'],
              ['-aje', 'el viaje', '-sión', 'la decisión'],
              ['-ma (de origen griego)', 'el problema', '-dad', 'la ciudad'],
              ['-és', 'el interés', '-tud', 'la juventud'],
            ],
          },
        },
        {
          id: 'esg1-2-match',
          type: 'MATCHING',
          instruction: 'Relacione la palabra con su artículo.',
          left: [
            { id: 'm1', text: '___ universidad' },
            { id: 'm2', text: '___ paisaje' },
            { id: 'm3', text: '___ televisión' },
            { id: 'm4', text: '___ profesor' },
          ],
          right: [
            { id: 'n1', text: 'la (por «-dad»)' },
            { id: 'n2', text: 'el (por «-aje»)' },
            { id: 'n3', text: 'la (por «-sión»)' },
            { id: 'n4', text: 'el (por «-or»)' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'n1' },
            { leftId: 'm2', rightId: 'n2' },
            { leftId: 'm3', rightId: 'n3' },
            { leftId: 'm4', rightId: 'n4' },
          ],
        },
        {
          id: 'esg1-2-info-excepciones',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Las excepciones que hay que saber',
          text: 'Son pocas, pero muy frecuentes, así que conviene aprenderlas de memoria. Un grupo entero viene del griego y acaba en «-ma»: son masculinas aunque terminen en «-a». Y algunas palabras en «-o» son femeninas porque son abreviaciones de una palabra femenina: «la foto» viene de «la fotografía», «la moto» de «la motocicleta».',
          translations: {
            de: {
              title: 'Die Ausnahmen, die man kennen muss',
              text: 'Es sind wenige, aber sehr häufige – man lernt sie am besten auswendig. Eine ganze Gruppe stammt aus dem Griechischen und endet auf „-ma“: Sie ist männlich, obwohl sie auf „-a“ endet. Und einige Wörter auf „-o“ sind weiblich, weil sie Kurzformen eines weiblichen Wortes sind: „la foto“ kommt von „la fotografía“, „la moto“ von „la motocicleta“.',
            },
          },
          table: {
            headers: ['Acaba en -a, pero masculino', 'Acaba en -o, pero femenino'],
            rows: [
              ['el problema', 'la mano'],
              ['el sistema', 'la foto'],
              ['el idioma', 'la moto'],
              ['el clima', 'la radio'],
              ['el día', ''],
              ['el mapa', ''],
            ],
          },
        },
        {
          id: 'esg1-2-cloze',
          type: 'CLOZE',
          instruction: 'Complete con «el» o «la».',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'No entiendo ' },
            { kind: 'GAP', gapId: 'b1', solution: ['el'], hint: 'problema', width: 5 },
            { kind: 'TEXT', text: ' problema.\n' },
            { kind: 'GAP', gapId: 'b2', solution: ['La'], hint: 'mano', width: 5 },
            { kind: 'TEXT', text: ' mano derecha me duele.\n' },
            { kind: 'GAP', gapId: 'b3', solution: ['El'], hint: 'mapa', width: 5 },
            { kind: 'TEXT', text: ' mapa está en el coche.\nMe gusta ' },
            { kind: 'GAP', gapId: 'b4', solution: ['la'], hint: 'canción', width: 5 },
            { kind: 'TEXT', text: ' canción nueva.' },
          ],
        },
        {
          id: 'esg1-2-choice',
          type: 'CHOICE',
          instruction: 'Marque todas las palabras masculinas.',
          question: '¿Cuáles de estas palabras son masculinas?',
          options: [
            { id: 'p1', text: 'idioma' },
            { id: 'p2', text: 'libertad' },
            { id: 'p3', text: 'viaje' },
            { id: 'p4', text: 'mano' },
          ],
          multiple: true,
          solution: ['p1', 'p3'],
          explanation:
            '«idioma» acaba en «-ma» de origen griego y es masculino; «viaje» acaba en «-aje», también masculino. «libertad» es femenino por «-tad», y «mano» es una de las excepciones femeninas en «-o».',
          explanationTranslations: {
            de: '„idioma“ endet auf griechisches „-ma“ und ist männlich; „viaje“ endet auf „-aje“, ebenfalls männlich. „libertad“ ist wegen „-tad“ weiblich, und „mano“ ist eine der weiblichen Ausnahmen auf „-o“.',
          },
        },
        {
          id: 'esg1-2-info-e',
          type: 'INFO',
          variant: 'TIP',
          title: 'Las palabras en «-e» hay que aprenderlas',
          text: 'La terminación «-e» no dice nada: hay tantas masculinas como femeninas. «el coche», «el nombre», «el parque» frente a «la noche», «la clase», «la gente». Aquí sí conviene hacer lo que se hace en alemán: aprender la palabra siempre con su artículo.',
          translations: {
            de: {
              title: 'Wörter auf „-e“ muss man lernen',
              text: 'Die Endung „-e“ sagt nichts aus: Es gibt ebenso viele männliche wie weibliche. „el coche“, „el nombre“, „el parque“ gegenüber „la noche“, „la clase“, „la gente“. Hier lohnt es sich, es wie im Deutschen zu machen: das Wort immer mit seinem Artikel lernen.',
            },
          },
        },
        {
          id: 'esg1-2-choice-e',
          type: 'CHOICE',
          instruction: 'Elija la forma correcta.',
          question: '«Por ___ noche no hay autobuses.»',
          options: [
            { id: 'q1', text: 'el' },
            { id: 'q2', text: 'la' },
            { id: 'q3', text: 'las' },
          ],
          multiple: false,
          solution: ['q2'],
          explanation:
            '«noche» acaba en «-e», así que la terminación no ayuda: es una de las femeninas. Se dice «la noche», «por la noche».',
          explanationTranslations: {
            de: '„noche“ endet auf „-e“, die Endung hilft hier also nicht: Es ist eines der weiblichen. Es heißt „la noche“, „por la noche“.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – der Plural, und was der Akzent dabei macht.
  {
    order: 3,
    title: 'Der Plural',
    subtitle: 'Zwei Regeln und ein Akzent',
    estimatedMinutes: 20,
    content: {
      version: v,
      blocks: [
        { id: 'esg1-3-h1', type: 'HEADING', level: 1, text: 'Der Plural' },
        {
          id: 'esg1-3-intro',
          type: 'TEXT',
          text: 'El alemán tiene cinco maneras de formar el plural y hay que aprender cuál vale para cada palabra. El español tiene dos, y se decide mirando la última letra. Lo único que sorprende es el acento escrito, que a veces aparece y a veces desaparece.',
          translations: {
            de: 'Das Deutsche hat fünf Arten, den Plural zu bilden, und man muss zu jedem Wort lernen, welche gilt. Das Spanische hat zwei, und man entscheidet durch einen Blick auf den letzten Buchstaben. Überraschend ist nur der Schriftakzent, der mal auftaucht und mal verschwindet.',
          },
        },
        {
          id: 'esg1-3-info-plural',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Dos reglas',
          text: 'Si la palabra acaba en vocal, se añade «-s». Si acaba en consonante, se añade «-es». Hay un solo caso especial: la «-z» final se convierte en «-c» antes de «-es», porque en español no se escribe «ze».',
          translations: {
            de: {
              title: 'Zwei Regeln',
              text: 'Endet das Wort auf einen Vokal, hängt man „-s“ an. Endet es auf einen Konsonanten, hängt man „-es“ an. Es gibt nur einen Sonderfall: Das End-„z“ wird vor „-es“ zu „-c“, weil man im Spanischen kein „ze“ schreibt.',
            },
          },
          table: {
            headers: ['Acaba en', 'Se añade', 'Singular', 'Plural'],
            rows: [
              ['vocal', '-s', 'la casa', 'las casas'],
              ['vocal', '-s', 'el libro', 'los libros'],
              ['consonante', '-es', 'la ciudad', 'las ciudades'],
              ['consonante', '-es', 'el profesor', 'los profesores'],
              ['-z', '-ces', 'el lápiz', 'los lápices'],
              ['-z', '-ces', 'la vez', 'las veces'],
            ],
          },
        },
        {
          id: 'esg1-3-cloze',
          type: 'CLOZE',
          instruction: 'Escriba el plural.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'una casa → dos ' },
            { kind: 'GAP', gapId: 'c1', solution: ['casas'], width: 9 },
            { kind: 'TEXT', text: '\nuna ciudad → tres ' },
            { kind: 'GAP', gapId: 'c2', solution: ['ciudades'], width: 11 },
            { kind: 'TEXT', text: '\nun lápiz → cuatro ' },
            { kind: 'GAP', gapId: 'c3', solution: ['lápices', 'lapices'], width: 10 },
            { kind: 'TEXT', text: '\nun profesor → cinco ' },
            { kind: 'GAP', gapId: 'c4', solution: ['profesores'], width: 12 },
          ],
        },
        {
          id: 'esg1-3-info-acento',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'El acento se mueve con la sílaba',
          text: 'El acento escrito no adorna: marca dónde está la fuerza de la voz cuando la palabra no sigue la regla normal. Al añadir una sílaba, la palabra a veces empieza a seguir la regla, y entonces el acento sobra: «avión» lo necesita, «aviones» ya no. Y al revés: «joven» no lo lleva, «jóvenes» sí.',
          translations: {
            de: {
              title: 'Der Akzent wandert mit der Silbe',
              text: 'Der Schriftakzent ist keine Zierde: Er markiert, wo die Betonung liegt, wenn das Wort nicht der Normalregel folgt. Kommt eine Silbe dazu, folgt das Wort manchmal plötzlich doch der Regel, und dann ist der Akzent überflüssig: „avión“ braucht ihn, „aviones“ nicht mehr. Und umgekehrt: „joven“ trägt keinen, „jóvenes“ schon.',
            },
          },
          table: {
            headers: ['Singular', 'Plural', '¿Qué pasa?'],
            rows: [
              ['el avión', 'los aviones', 'pierde el acento'],
              ['la canción', 'las canciones', 'pierde el acento'],
              ['el joven', 'los jóvenes', 'gana un acento'],
              ['el examen', 'los exámenes', 'gana un acento'],
              ['el lunes', 'los lunes', 'no cambia nada'],
            ],
          },
        },
        {
          id: 'esg1-3-match',
          type: 'MATCHING',
          instruction: 'Relacione el singular con su plural.',
          left: [
            { id: 's1', text: 'el avión' },
            { id: 's2', text: 'el joven' },
            { id: 's3', text: 'la vez' },
            { id: 's4', text: 'el martes' },
          ],
          right: [
            { id: 't1', text: 'los aviones' },
            { id: 't2', text: 'los jóvenes' },
            { id: 't3', text: 'las veces' },
            { id: 't4', text: 'los martes' },
          ],
          solution: [
            { leftId: 's1', rightId: 't1' },
            { leftId: 's2', rightId: 't2' },
            { leftId: 's3', rightId: 't3' },
            { leftId: 's4', rightId: 't4' },
          ],
        },
        {
          id: 'esg1-3-order',
          type: 'ORDERING',
          instruction: 'Forme una frase correcta.',
          items: [
            { id: 'w1', text: 'Los' },
            { id: 'w2', text: 'exámenes' },
            { id: 'w3', text: 'son' },
            { id: 'w4', text: 'en junio.' },
          ],
          solution: ['w1', 'w2', 'w3', 'w4'],
        },
        {
          id: 'esg1-3-writing',
          type: 'WRITING',
          instruction: 'Describa su habitación.',
          prompt:
            'Escriba de cuatro a seis frases: ¿Qué hay en su habitación? Use al menos tres sustantivos en plural y fíjese en los artículos.',
          minWords: 20,
          maxWords: 90,
          aiFeedback: true,
          sampleAnswer:
            'Mi habitación es pequeña, pero tiene mucha luz. A la izquierda hay una mesa y dos sillas. En la pared cuelgan tres fotos de mi familia. En la estantería están los libros de la universidad y una lámpara vieja. Las ventanas son grandes, así que nunca está oscuro.',
        },
      ],
    },
  },
];
