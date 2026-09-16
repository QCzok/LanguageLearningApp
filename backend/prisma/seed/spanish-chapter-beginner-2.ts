import type { UnitSeed } from './chapter-beginner-1';

/**
 * Spanisch, Beginner, Kapitel 2: „Mi familia“
 *
 * Fünf Seiten, Aufbau wie Kapitel 1: Die Aufgabe steht direkt hinter der
 * Erklärung, zu der sie gehört.
 *
 * Der rote Faden ist das Besitzanzeigende. Erst die Familienmitglieder und
 * „tener“, dann die Begleiter mi/tu/su – und an ihnen die Regel, die
 * deutschsprachigen Lernenden am meisten Mühe macht: Sie richten sich nach dem
 * Besessenen, nicht nach dem Besitzer. „su hermana“ heißt deshalb je nach
 * Zusammenhang seine, ihre oder Ihre Schwester. Danach die Adjektive mit ihrer
 * Angleichung und zuletzt das Alter, das im Spanischen niemand „ist“, sondern
 * „hat“.
 *
 * Seiten einsprachig spanisch, Erklärungen mit deutscher Übersetzung – siehe
 * `spanish-chapter-beginner-1.ts` zur Begründung.
 */
const v = 1;

export const SPANISH_BEGINNER_2_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – wer zur Familie gehört, und das Verb, das man dafür braucht.
  {
    order: 1,
    title: 'Esta es mi familia',
    subtitle: 'Familienmitglieder und das Verb „tener“',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'es2-p1-h1', type: 'HEADING', level: 1, text: 'Esta es mi familia' },
        {
          id: 'es2-p1-image',
          type: 'IMAGE',
          url: 'illustration:family-tree',
          alt: 'Ein Stammbaum aus gerahmten Porträts, durch Linien verbunden.',
          caption: 'Tres generaciones en un árbol genealógico.',
        },
        {
          id: 'es2-p1-intro',
          type: 'TEXT',
          text: 'Para hablar de la familia hacen falta dos cosas: los nombres de los parientes y el verbo «tener». Nadia enseña unas fotos a Tomás.',
          translations: {
            de: 'Um über die Familie zu sprechen, braucht man zweierlei: die Namen der Verwandten und das Verb „tener“. Nadia zeigt Tomás ein paar Fotos.',
          },
        },
        {
          id: 'es2-p1-dlg',
          type: 'DIALOGUE',
          title: 'Fotos en el móvil',
          lines: [
            { speaker: 'Nadia', text: 'Mira, esta es mi familia. Estos son mis padres.' },
            { speaker: 'Tomás', text: '¿Y tienes hermanos?' },
            { speaker: 'Nadia', text: 'Sí, tengo dos: un hermano y una hermana.' },
            { speaker: 'Tomás', text: '¿Y ellos también viven en Casablanca?' },
            { speaker: 'Nadia', text: 'Mi hermana sí. Mi hermano vive en París, tiene dos hijos.' },
            { speaker: 'Tomás', text: 'Entonces eres tía. Yo no tengo sobrinos todavía.' },
          ],
        },
        {
          id: 'es2-p1-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: la familia',
          items: [
            { term: 'la familia', translation: 'die Familie', example: 'Esta es mi familia.' },
            { term: 'el padre', translation: 'der Vater' },
            { term: 'la madre', translation: 'die Mutter' },
            { term: 'los padres', translation: 'die Eltern', example: 'Estos son mis padres.' },
            { term: 'el hermano', translation: 'der Bruder' },
            { term: 'la hermana', translation: 'die Schwester' },
            { term: 'el hijo', translation: 'der Sohn' },
            { term: 'la hija', translation: 'die Tochter' },
            { term: 'el abuelo', translation: 'der Großvater' },
            { term: 'la abuela', translation: 'die Großmutter' },
            { term: 'el sobrino', translation: 'der Neffe' },
            { term: 'la sobrina', translation: 'die Nichte' },
          ],
        },
        {
          id: 'es2-p1-info-masculino',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'Un plural que incluye a todos',
          text: 'En español el plural masculino vale para un grupo mixto. «los padres» son el padre y la madre, «los hermanos» pueden ser un hermano y una hermana, y «los hijos» son los hijos y las hijas juntos. Solo si el grupo es exclusivamente femenino se dice «las hermanas», «las hijas».',
          translations: {
            de: {
              title: 'Ein Plural, der alle einschließt',
              text: 'Im Spanischen gilt der männliche Plural für eine gemischte Gruppe. „los padres“ sind Vater und Mutter, „los hermanos“ können ein Bruder und eine Schwester sein, und „los hijos“ sind Söhne und Töchter zusammen. Nur wenn die Gruppe ausschließlich weiblich ist, sagt man „las hermanas“, „las hijas“.',
            },
          },
        },
        {
          id: 'es2-p1-info-tener',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'El verbo «tener»',
          text: '«tener» es irregular por partida doble: en la primera persona añade una «g» («tengo»), y en las demás la «e» se convierte en «ie». Solo «nosotros» y «vosotros» siguen la forma regular.',
          translations: {
            de: {
              title: 'Das Verb „tener“',
              text: '„tener“ ist doppelt unregelmäßig: In der ersten Person kommt ein „g“ dazu („tengo“), in den übrigen wird das „e“ zu „ie“. Nur „nosotros“ und „vosotros“ folgen der regelmäßigen Form.',
            },
          },
          table: {
            headers: ['Persona', 'tener'],
            rows: [
              ['yo', 'tengo'],
              ['tú', 'tienes'],
              ['él / ella / usted', 'tiene'],
              ['nosotros', 'tenemos'],
              ['vosotros', 'tenéis'],
              ['ellos / ellas / ustedes', 'tienen'],
            ],
          },
        },
        {
          id: 'es2-p1-cloze',
          type: 'CLOZE',
          instruction: 'Complete con la forma correcta de «tener».',
          wordBank: ['tengo', 'tienes', 'tiene', 'tenemos'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Yo ' },
            { kind: 'GAP', gapId: 't1', solution: ['tengo'], width: 8 },
            { kind: 'TEXT', text: ' una hermana pequeña.\n¿Cuántos hermanos ' },
            { kind: 'GAP', gapId: 't2', solution: ['tienes'], width: 8 },
            { kind: 'TEXT', text: ' tú?\nMi hermano ' },
            { kind: 'GAP', gapId: 't3', solution: ['tiene'], width: 8 },
            { kind: 'TEXT', text: ' dos hijos.\nEn casa ' },
            { kind: 'GAP', gapId: 't4', solution: ['tenemos'], width: 9 },
            { kind: 'TEXT', text: ' un perro muy viejo.' },
          ],
        },
        {
          id: 'es2-p1-match',
          type: 'MATCHING',
          instruction: 'Relacione cada persona con su parentesco.',
          left: [
            { id: 'f1', text: 'la madre de mi madre' },
            { id: 'f2', text: 'el hijo de mi hermana' },
            { id: 'f3', text: 'la hija de mis padres' },
            { id: 'f4', text: 'el padre de mi padre' },
          ],
          right: [
            { id: 'g1', text: 'mi abuela' },
            { id: 'g2', text: 'mi sobrino' },
            { id: 'g3', text: 'mi hermana' },
            { id: 'g4', text: 'mi abuelo' },
          ],
          solution: [
            { leftId: 'f1', rightId: 'g1' },
            { leftId: 'f2', rightId: 'g2' },
            { leftId: 'f3', rightId: 'g3' },
            { leftId: 'f4', rightId: 'g4' },
          ],
        },
        {
          id: 'es2-p1-choice',
          type: 'CHOICE',
          instruction: 'Elija la respuesta correcta.',
          question: 'Una familia con dos hijos y una hija. ¿Cómo se dice en español?',
          options: [
            { id: 'o1', text: 'Tienen tres hijos.' },
            { id: 'o2', text: 'Tienen dos hijos y una hija.' },
            { id: 'o3', text: 'Las dos frases son correctas.' },
          ],
          multiple: false,
          solution: ['o3'],
          explanation:
            'El plural masculino «hijos» incluye a los tres, así que «tienen tres hijos» es correcto. Si se quiere precisar, también vale nombrarlos por separado.',
          explanationTranslations: {
            de: 'Der männliche Plural „hijos“ schließt alle drei ein, „tienen tres hijos“ ist also richtig. Wer genauer sein will, kann sie ebenso getrennt nennen.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – die Possessivbegleiter und ihre eine überraschende Regel.
  {
    order: 2,
    title: 'Mi, tu, su',
    subtitle: 'Sagen, wem etwas gehört',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'es2-p2-h1', type: 'HEADING', level: 1, text: 'Mi, tu, su' },
        {
          id: 'es2-p2-image',
          type: 'IMAGE',
          url: 'illustration:belongings',
          alt: 'Drei Gegenstände nebeneinander, jeder mit einem kleinen Anhänger beschriftet.',
          caption: '¿De quién es cada cosa?',
        },
        {
          id: 'es2-p2-info-posesivos',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Los posesivos',
          text: 'Delante del sustantivo se usan estas formas. «mi», «tu» y «su» solo cambian en plural; «nuestro» y «vuestro» cambian también en femenino.',
          translations: {
            de: {
              title: 'Die Possessivbegleiter',
              text: 'Vor dem Substantiv stehen diese Formen. „mi“, „tu“ und „su“ ändern sich nur im Plural; „nuestro“ und „vuestro“ ändern sich zusätzlich im Femininum.',
            },
          },
          table: {
            headers: ['Persona', 'Singular', 'Plural'],
            rows: [
              ['yo', 'mi hermano / mi casa', 'mis hermanos / mis casas'],
              ['tú', 'tu hermano / tu casa', 'tus hermanos / tus casas'],
              ['él / ella / usted', 'su hermano / su casa', 'sus hermanos / sus casas'],
              ['nosotros', 'nuestro hermano / nuestra casa', 'nuestros hermanos / nuestras casas'],
              ['vosotros', 'vuestro hermano / vuestra casa', 'vuestros hermanos / vuestras casas'],
              ['ellos / ellas / ustedes', 'su hermano / su casa', 'sus hermanos / sus casas'],
            ],
          },
        },
        {
          id: 'es2-p2-info-concordancia',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'El posesivo mira a la cosa, no al dueño',
          text: 'Esta es la diferencia más importante con el alemán. En alemán el posesivo se ajusta al dueño: «sein Haus» si es de él, «ihr Haus» si es de ella. En español da igual quién sea el dueño: lo que manda es la cosa poseída. Por eso «su casa» sirve para él, para ella, para ellos y para usted – y «sus casas» solo cambia porque hay varias casas, no porque haya varios dueños.',
          translations: {
            de: {
              title: 'Der Begleiter richtet sich nach der Sache, nicht nach dem Besitzer',
              text: 'Das ist der wichtigste Unterschied zum Deutschen. Im Deutschen richtet sich der Begleiter nach dem Besitzer: „sein Haus“, wenn es ihm gehört, „ihr Haus“, wenn es ihr gehört. Im Spanischen ist der Besitzer gleichgültig – es zählt die besessene Sache. Deshalb passt „su casa“ für ihn, für sie, für sie (Plural) und für Sie – und „sus casas“ ändert sich nur, weil es mehrere Häuser gibt, nicht weil es mehrere Besitzer gibt.',
            },
          },
          table: {
            headers: ['Alemán', 'Español'],
            rows: [
              ['sein Bruder (von ihm)', 'su hermano'],
              ['ihr Bruder (von ihr)', 'su hermano'],
              ['ihr Bruder (von ihnen)', 'su hermano'],
              ['Ihr Bruder (von Ihnen)', 'su hermano'],
              ['seine Brüder', 'sus hermanos'],
            ],
          },
        },
        {
          id: 'es2-p2-cloze',
          type: 'CLOZE',
          instruction: 'Complete con el posesivo correcto.',
          wordBank: ['mi', 'mis', 'tu', 'nuestra'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Esta es ' },
            { kind: 'GAP', gapId: 'p1', solution: ['mi'], width: 6 },
            { kind: 'TEXT', text: ' hermana Laila.\nEstos son ' },
            { kind: 'GAP', gapId: 'p2', solution: ['mis'], width: 6 },
            { kind: 'TEXT', text: ' padres.\n¿Dónde viven ' },
            { kind: 'GAP', gapId: 'p3', solution: ['tu'], width: 6 },
            { kind: 'TEXT', text: ' abuela y tu abuelo?\nEn agosto vamos a ' },
            { kind: 'GAP', gapId: 'p4', solution: ['nuestra'], width: 9 },
            { kind: 'TEXT', text: ' casa del pueblo.' },
          ],
        },
        {
          id: 'es2-p2-info-su',
          type: 'INFO',
          variant: 'TIP',
          title: 'Cuando «su» no está claro',
          text: 'Como «su» sirve para tantas personas, a veces no se entiende de quién se habla. Entonces se añade «de él», «de ella», «de ellos» o «de usted»: «la casa de ella», «el coche de usted». No es obligatorio, solo se usa cuando el contexto no basta.',
          translations: {
            de: {
              title: 'Wenn „su“ nicht eindeutig ist',
              text: 'Weil „su“ für so viele Personen steht, ist manchmal unklar, von wem die Rede ist. Dann hängt man „de él“, „de ella“, „de ellos“ oder „de usted“ an: „la casa de ella“, „el coche de usted“. Das ist keine Pflicht, sondern nur nötig, wenn der Zusammenhang nicht ausreicht.',
            },
          },
        },
        {
          id: 'es2-p2-choice',
          type: 'CHOICE',
          instruction: 'Elija la forma correcta.',
          question: 'Ana habla de los dos hermanos de Pedro. ¿Cómo lo dice?',
          options: [
            { id: 'q1', text: 'sus hermanos' },
            { id: 'q2', text: 'su hermanos' },
            { id: 'q3', text: 'suyos hermanos' },
          ],
          multiple: false,
          solution: ['q1'],
          explanation:
            'Hay dos hermanos, así que el posesivo va en plural: «sus hermanos». Que el dueño sea una sola persona (Pedro) no cambia nada.',
          explanationTranslations: {
            de: 'Es sind zwei Brüder, also steht der Begleiter im Plural: „sus hermanos“. Dass der Besitzer nur eine Person ist (Pedro), ändert daran nichts.',
          },
        },
        {
          id: 'es2-p2-match',
          type: 'MATCHING',
          instruction: 'Relacione la frase alemana con la española.',
          left: [
            { id: 'a1', text: 'unsere Wohnung' },
            { id: 'a2', text: 'eure Kinder' },
            { id: 'a3', text: 'meine Bücher' },
            { id: 'a4', text: 'ihre Mutter (von ihr)' },
          ],
          right: [
            { id: 'b1', text: 'nuestro piso' },
            { id: 'b2', text: 'vuestros hijos' },
            { id: 'b3', text: 'mis libros' },
            { id: 'b4', text: 'su madre' },
          ],
          solution: [
            { leftId: 'a1', rightId: 'b1' },
            { leftId: 'a2', rightId: 'b2' },
            { leftId: 'a3', rightId: 'b3' },
            { leftId: 'a4', rightId: 'b4' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – Adjektive: Angleichung und die Stellung hinter dem Substantiv.
  {
    order: 3,
    title: '¿Cómo es?',
    subtitle: 'Personen beschreiben',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'es2-p3-h1', type: 'HEADING', level: 1, text: '¿Cómo es?' },
        {
          id: 'es2-p3-image',
          type: 'IMAGE',
          url: 'illustration:portraits',
          alt: 'Zwei gerahmte Porträts nebeneinander, darunter je eine leere Schreiblinie.',
          caption: 'Dos retratos, dos descripciones.',
        },
        {
          id: 'es2-p3-dlg',
          type: 'DIALOGUE',
          title: '¿Quién es quién?',
          lines: [
            { speaker: 'Tomás', text: '¿Y quién es esta de la foto?' },
            { speaker: 'Nadia', text: 'Es mi hermana Laila. Es alta y morena, como mi padre.' },
            { speaker: 'Tomás', text: '¿Y cómo es?' },
            { speaker: 'Nadia', text: 'Muy simpática, pero bastante seria. Mi hermano es más divertido.' },
            { speaker: 'Tomás', text: 'Mis hermanas son rubias las dos. No se parecen a mí.' },
          ],
        },
        {
          id: 'es2-p3-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: describir a alguien',
          items: [
            { term: 'alto / alta', translation: 'groß (Person)' },
            { term: 'bajo / baja', translation: 'klein (Person)' },
            { term: 'delgado / delgada', translation: 'schlank' },
            { term: 'moreno / morena', translation: 'dunkelhaarig' },
            { term: 'rubio / rubia', translation: 'blond' },
            { term: 'simpático / simpática', translation: 'sympathisch' },
            { term: 'serio / seria', translation: 'ernst' },
            { term: 'divertido / divertida', translation: 'lustig' },
            { term: 'inteligente', translation: 'intelligent' },
            { term: 'joven', translation: 'jung' },
            { term: 'mayor', translation: 'älter, alt (Person)' },
            { term: 'parecerse a', translation: 'ähneln' },
          ],
        },
        {
          id: 'es2-p3-info-concordancia',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'El adjetivo se ajusta al sustantivo',
          text: 'El adjetivo cambia según el género y el número de la palabra que describe. Los que acaban en «-o» tienen cuatro formas. Los que acaban en «-e» o en consonante no distinguen el género: solo cambian en plural.',
          translations: {
            de: {
              title: 'Das Adjektiv richtet sich nach dem Substantiv',
              text: 'Das Adjektiv ändert sich nach Geschlecht und Zahl des Wortes, das es beschreibt. Die auf „-o“ haben vier Formen. Die auf „-e“ oder auf einen Konsonanten unterscheiden das Geschlecht nicht – sie ändern sich nur im Plural.',
            },
          },
          table: {
            headers: ['', 'masc. sing.', 'fem. sing.', 'masc. pl.', 'fem. pl.'],
            rows: [
              ['en -o', 'alto', 'alta', 'altos', 'altas'],
              ['en -e', 'inteligente', 'inteligente', 'inteligentes', 'inteligentes'],
              ['en consonante', 'joven', 'joven', 'jóvenes', 'jóvenes'],
            ],
          },
        },
        {
          id: 'es2-p3-cloze',
          type: 'CLOZE',
          instruction: 'Complete con la forma correcta del adjetivo.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Mi hermana es muy ' },
            { kind: 'GAP', gapId: 'c1', solution: ['alta'], hint: 'alto', width: 8 },
            { kind: 'TEXT', text: '.\nMis primos son bastante ' },
            { kind: 'GAP', gapId: 'c2', solution: ['serios'], hint: 'serio', width: 9 },
            { kind: 'TEXT', text: '.\nLaila y Ana son muy ' },
            { kind: 'GAP', gapId: 'c3', solution: ['simpáticas', 'simpaticas'], hint: 'simpático', width: 12 },
            { kind: 'TEXT', text: '.\nMi abuelo ya es ' },
            { kind: 'GAP', gapId: 'c4', solution: ['mayor'], hint: 'mayor', width: 8 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'es2-p3-info-posicion',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'El adjetivo va detrás',
          text: 'En alemán el adjetivo va delante del sustantivo: «eine hohe Stadt». En español va detrás: «una ciudad alta». Es el orden normal y conviene acostumbrarse a él desde el principio.',
          translations: {
            de: {
              title: 'Das Adjektiv steht hinten',
              text: 'Im Deutschen steht das Adjektiv vor dem Substantiv: „eine große Stadt“. Im Spanischen steht es dahinter: „una ciudad grande“. Das ist die normale Reihenfolge, und man gewöhnt sich am besten von Anfang an daran.',
            },
          },
          table: {
            headers: ['Alemán', 'Español'],
            rows: [
              ['ein netter Mann', 'un hombre simpático'],
              ['eine blonde Frau', 'una mujer rubia'],
              ['zwei junge Leute', 'dos personas jóvenes'],
            ],
          },
        },
        {
          id: 'es2-p3-order',
          type: 'ORDERING',
          instruction: 'Forme una frase correcta.',
          items: [
            { id: 'o1', text: 'Mi' },
            { id: 'o2', text: 'hermano' },
            { id: 'o3', text: 'es' },
            { id: 'o4', text: 'un chico' },
            { id: 'o5', text: 'muy divertido.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5'],
        },
        {
          id: 'es2-p3-choice',
          type: 'CHOICE',
          instruction: 'Marque todas las frases correctas.',
          question: '¿Cuáles de estas frases son correctas?',
          options: [
            { id: 'r1', text: 'Mis hermanas son rubias.' },
            { id: 'r2', text: 'Tengo una simpática hermana.' },
            { id: 'r3', text: 'Mi padre es muy inteligente.' },
            { id: 'r4', text: 'Los chicos son jovenes.' },
          ],
          multiple: true,
          solution: ['r1', 'r3'],
          explanation:
            'En la segunda el adjetivo debe ir detrás: «una hermana simpática». En la cuarta falta el acento del plural: «jóvenes».',
          explanationTranslations: {
            de: 'Im zweiten Satz muss das Adjektiv hinten stehen: „una hermana simpática“. Im vierten fehlt der Akzent des Plurals: „jóvenes“.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – das Alter, das man im Spanischen hat statt ist.
  {
    order: 4,
    title: '¿Cuántos años tienes?',
    subtitle: 'Das Alter und die Zahlen bis 100',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'es2-p4-h1', type: 'HEADING', level: 1, text: '¿Cuántos años tienes?' },
        {
          id: 'es2-p4-image',
          type: 'IMAGE',
          url: 'illustration:birthday',
          alt: 'Eine Torte mit brennenden Kerzen, daneben eine Zahlenreihe.',
          caption: 'En español la edad no se es, se tiene.',
        },
        {
          id: 'es2-p4-info-edad',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'La edad se tiene',
          text: 'En alemán uno «ist» treinta años; en español uno «tiene» treinta años. Es un error muy frecuente al principio, porque la traducción palabra por palabra no funciona. Y no se puede omitir «años»: se dice «tengo treinta años», no «tengo treinta».',
          translations: {
            de: {
              title: 'Das Alter hat man',
              text: 'Im Deutschen ist man dreißig Jahre alt, im Spanischen hat man dreißig Jahre. Das ist ein sehr häufiger Anfängerfehler, weil die wörtliche Übersetzung nicht funktioniert. Und „años“ darf nicht wegfallen: Es heißt „tengo treinta años“, nicht „tengo treinta“.',
            },
          },
          table: {
            headers: ['Pregunta', 'Respuesta'],
            rows: [
              ['¿Cuántos años tienes?', 'Tengo veintiocho años.'],
              ['¿Cuántos años tiene usted?', 'Tengo cuarenta y dos años.'],
              ['¿Cuántos años tiene tu hijo?', 'Tiene seis años.'],
            ],
          },
        },
        {
          id: 'es2-p4-info-numeros',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Los números del 20 al 100',
          text: 'Del 21 al 29 se escribe todo junto: veintiuno, veintidós, veintitrés. A partir del 31 se escribe en tres palabras, con «y» en medio: treinta y uno, cuarenta y cinco. Solo las decenas del 21 al 29 llevan esa forma unida.',
          translations: {
            de: {
              title: 'Die Zahlen von 20 bis 100',
              text: 'Von 21 bis 29 schreibt man alles zusammen: veintiuno, veintidós, veintitrés. Ab 31 schreibt man in drei Wörtern mit „y“ dazwischen: treinta y uno, cuarenta y cinco. Nur die Zahlen von 21 bis 29 haben diese zusammengeschriebene Form.',
            },
          },
          table: {
            headers: ['Decenas', 'Ejemplo compuesto'],
            rows: [
              ['20 veinte', '21 veintiuno'],
              ['30 treinta', '32 treinta y dos'],
              ['40 cuarenta', '45 cuarenta y cinco'],
              ['50 cincuenta', '58 cincuenta y ocho'],
              ['60 sesenta', '61 sesenta y uno'],
              ['70 setenta', '77 setenta y siete'],
              ['80 ochenta', '84 ochenta y cuatro'],
              ['90 noventa', '99 noventa y nueve'],
              ['100 cien', ''],
            ],
          },
        },
        {
          id: 'es2-p4-audio',
          type: 'AUDIO',
          title: 'Escuche: las decenas',
          audioUrl: 'placeholder://es-k2-decenas',
          durationSec: 30,
          transcript:
            'veinte – treinta – cuarenta – cincuenta – sesenta – setenta – ochenta – noventa – cien\nveintiuno – treinta y uno – cuarenta y uno',
        },
        {
          id: 'es2-p4-cloze',
          type: 'CLOZE',
          instruction: 'Escriba el número en letras.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Mi madre tiene ' },
            { kind: 'GAP', gapId: 'n1', solution: ['cincuenta'], hint: '50', width: 11 },
            { kind: 'TEXT', text: ' años.\nMi hermana tiene ' },
            { kind: 'GAP', gapId: 'n2', solution: ['veintitrés', 'veintitres'], hint: '23', width: 12 },
            { kind: 'TEXT', text: ' años.\nMi abuelo tiene ' },
            { kind: 'GAP', gapId: 'n3', solution: ['ochenta y uno'], hint: '81', width: 14 },
            { kind: 'TEXT', text: ' años.\nEn el curso somos ' },
            { kind: 'GAP', gapId: 'n4', solution: ['treinta y dos'], hint: '32', width: 14 },
            { kind: 'TEXT', text: ' personas.' },
          ],
        },
        {
          id: 'es2-p4-match',
          type: 'MATCHING',
          instruction: 'Relacione la cifra con la palabra.',
          left: [
            { id: 'z1', text: '25' },
            { id: 'z2', text: '40' },
            { id: 'z3', text: '67' },
            { id: 'z4', text: '100' },
          ],
          right: [
            { id: 'y1', text: 'veinticinco' },
            { id: 'y2', text: 'cuarenta' },
            { id: 'y3', text: 'sesenta y siete' },
            { id: 'y4', text: 'cien' },
          ],
          solution: [
            { leftId: 'z1', rightId: 'y1' },
            { leftId: 'z2', rightId: 'y2' },
            { leftId: 'z3', rightId: 'y3' },
            { leftId: 'z4', rightId: 'y4' },
          ],
        },
        {
          id: 'es2-p4-choice',
          type: 'CHOICE',
          instruction: 'Elija la frase correcta.',
          question: 'Usted quiere decir: „Mein Sohn ist neun Jahre alt."',
          options: [
            { id: 'w1', text: 'Mi hijo es nueve años.' },
            { id: 'w2', text: 'Mi hijo tiene nueve.' },
            { id: 'w3', text: 'Mi hijo tiene nueve años.' },
          ],
          multiple: false,
          solution: ['w3'],
          explanation:
            'La edad se expresa con «tener», y la palabra «años» no se puede omitir.',
          explanationTranslations: {
            de: 'Das Alter wird mit „tener“ ausgedrückt, und das Wort „años“ darf nicht wegfallen.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – Rückblick: Familie, Besitz, Beschreibung und Alter gemischt.
  {
    order: 5,
    title: '¿Ya sabes hacerlo?',
    subtitle: 'Rückblick auf das ganze Kapitel',
    estimatedMinutes: 18,
    content: {
      version: v,
      blocks: [
        { id: 'es2-p5-h1', type: 'HEADING', level: 1, text: '¿Ya sabes hacerlo?' },
        {
          id: 'es2-p5-intro',
          type: 'TEXT',
          text: 'Aquí vuelve todo el capítulo: los parientes, los posesivos, los adjetivos y la edad. Si algo no sale, vuelva a la página correspondiente.',
          translations: {
            de: 'Hier kommt das ganze Kapitel noch einmal: die Verwandten, die Possessivbegleiter, die Adjektive und das Alter. Wenn etwas nicht klappt, gehen Sie zurück auf die entsprechende Seite.',
          },
        },
        {
          id: 'es2-p5-cloze',
          type: 'CLOZE',
          instruction: 'Complete la presentación de la familia.',
          wordBank: ['mi', 'tiene', 'mis', 'simpáticos', 'tengo'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Esta es ' },
            { kind: 'GAP', gapId: 'f1', solution: ['mi'], width: 6 },
            { kind: 'TEXT', text: ' familia. Yo ' },
            { kind: 'GAP', gapId: 'f2', solution: ['tengo'], width: 8 },
            { kind: 'TEXT', text: ' dos hermanos. Laila, la mayor, ' },
            { kind: 'GAP', gapId: 'f3', solution: ['tiene'], width: 8 },
            { kind: 'TEXT', text: ' treinta y un años. ' },
            { kind: 'GAP', gapId: 'f4', solution: ['Mis'], width: 6 },
            { kind: 'TEXT', text: ' padres viven en Casablanca. Todos son muy ' },
            { kind: 'GAP', gapId: 'f5', solution: ['simpáticos', 'simpaticos'], width: 12 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'es2-p5-match',
          type: 'MATCHING',
          instruction: 'Relacione la pregunta con la respuesta.',
          left: [
            { id: 'm1', text: '¿Cuántos hermanos tienes?' },
            { id: 'm2', text: '¿Cuántos años tiene tu abuela?' },
            { id: 'm3', text: '¿Cómo es tu hermana?' },
            { id: 'm4', text: '¿De quién es este coche?' },
          ],
          right: [
            { id: 'x1', text: 'Tengo dos: un hermano y una hermana.' },
            { id: 'x2', text: 'Tiene ochenta y cuatro años.' },
            { id: 'x3', text: 'Es alta, morena y muy divertida.' },
            { id: 'x4', text: 'Es de mis padres.' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'x1' },
            { leftId: 'm2', rightId: 'x2' },
            { leftId: 'm3', rightId: 'x3' },
            { leftId: 'm4', rightId: 'x4' },
          ],
        },
        {
          id: 'es2-p5-choice',
          type: 'CHOICE',
          instruction: 'Marque todas las frases correctas.',
          question: '¿Cuáles de estas frases son correctas?',
          options: [
            { id: 's1', text: 'Mis padres tienen una casa pequeña.' },
            { id: 's2', text: 'Mi hermana es veinte años.' },
            { id: 's3', text: 'Sus hermanos son muy simpáticos.' },
            { id: 's4', text: 'Tengo dos altas hermanas.' },
          ],
          multiple: true,
          solution: ['s1', 's3'],
          explanation:
            'La segunda necesita «tener»: «tiene veinte años». En la cuarta el adjetivo va detrás: «dos hermanas altas».',
          explanationTranslations: {
            de: 'Der zweite Satz braucht „tener“: „tiene veinte años“. Im vierten steht das Adjektiv hinten: „dos hermanas altas“.',
          },
        },
        {
          id: 'es2-p5-writing',
          type: 'WRITING',
          instruction: 'Presente a su familia.',
          prompt:
            'Escriba de cuatro a seis frases sobre su familia: ¿Cuántas personas son? ¿Cómo se llaman? ¿Cuántos años tienen? ¿Cómo son? Use «tener», los posesivos y al menos tres adjetivos.',
          minWords: 20,
          maxWords: 90,
          aiFeedback: true,
          sampleAnswer:
            'Mi familia es pequeña. Somos cuatro: mis padres, mi hermano y yo. Mi padre tiene cincuenta y nueve años y es muy tranquilo. Mi madre tiene cincuenta y cuatro y es bastante divertida. Mi hermano tiene veintiséis años, es alto y moreno. Nuestros abuelos viven en el norte.',
        },
      ],
    },
  },
];
