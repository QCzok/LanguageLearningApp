import type { UnitSeed } from './chapter-beginner-1';

/**
 * Spanische Grammatik, Kapitel 3: „Das Präsens“
 *
 * Vier Seiten. Das Kapitel, aus dem jedes andere schöpft: Ohne Präsens gibt es
 * keinen Satz, und die Vokalwechsel von Seite 2 kehren im Subjuntivo (Kapitel
 * 9) und im Imperativ (Kapitel 10) unverändert wieder.
 *
 * Aufbau: erst das Regelmäßige, das drei Endungsreihen umfasst und damit schon
 * die Mehrheit aller Verben abdeckt; dann die Verben mit Vokalwechsel im
 * Stamm, die nur scheinbar unregelmäßig sind – ihr Wechsel folgt der Betonung;
 * dann die echten Unregelmäßigkeiten, die sich meist auf die erste Person
 * beschränken; zuletzt die reflexiven Verben, die keine eigene Konjugation
 * haben, sondern nur ein Pronomen davor.
 *
 * Die Reihenfolge ist bewusst gewählt: Wer die diphthongierenden Verben als
 * eine Gruppe mit einer Regel versteht, muss sie nicht einzeln auswendig
 * lernen. Deshalb steht die Betonungsregel vor den Listen und nicht hinter
 * ihnen.
 */
const v = 1;

export const SPANISH_GRAMMAR_3_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – die drei regelmäßigen Konjugationen.
  {
    order: 1,
    title: 'Die drei Konjugationen',
    subtitle: '-ar, -er und -ir',
    estimatedMinutes: 20,
    content: {
      version: v,
      blocks: [
        { id: 'esg3-p1-h1', type: 'HEADING', level: 1, text: 'Die drei Konjugationen' },
        {
          id: 'esg3-p1-intro',
          type: 'TEXT',
          text: 'Todos los infinitivos españoles terminan en -ar, -er o -ir. Esa terminación decide cómo se conjuga el verbo, y por eso es lo primero que hay que mirar al aprender uno nuevo. Quien domina las tres series puede conjugar la gran mayoría de los verbos del idioma sin haberlos visto nunca antes.',
          translations: {
            de: 'Alle spanischen Infinitive enden auf -ar, -er oder -ir. Diese Endung entscheidet, wie das Verb konjugiert wird, und deshalb schaut man bei einem neuen Verb zuerst darauf. Wer die drei Reihen beherrscht, kann die große Mehrheit der Verben konjugieren, ohne sie je gesehen zu haben.',
          },
        },
        {
          id: 'esg3-p1-info-tabla',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Las tres series de terminaciones',
          text: 'Se quita la terminación del infinitivo y se añade la del cuadro. Fíjese en que -er e -ir solo se diferencian en dos formas: nosotros y vosotros. En el resto son idénticas, así que hay menos que aprender de lo que parece.',
          translations: {
            de: {
              title: 'Die drei Endungsreihen',
              text: 'Man streicht die Infinitivendung und hängt die Endung aus der Tabelle an. Beachten Sie, dass sich -er und -ir nur in zwei Formen unterscheiden: nosotros und vosotros. Im Übrigen sind sie gleich – es ist also weniger zu lernen, als es scheint.',
            },
          },
          table: {
            headers: ['Persona', 'hablar', 'comer', 'vivir'],
            rows: [
              ['yo', 'hablo', 'como', 'vivo'],
              ['tú', 'hablas', 'comes', 'vives'],
              ['él / ella / usted', 'habla', 'come', 'vive'],
              ['nosotros', 'hablamos', 'comemos', 'vivimos'],
              ['vosotros', 'habláis', 'coméis', 'vivís'],
              ['ellos / ellas / ustedes', 'hablan', 'comen', 'viven'],
            ],
          },
        },
        {
          id: 'esg3-p1-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: verbos regulares frecuentes',
          items: [
            {
              term: 'trabajar',
              translations: { de: 'arbeiten', en: 'to work' },
              example: 'Trabajo en un hospital.',
            },
            { term: 'estudiar', translations: { de: 'lernen, studieren', en: 'to study' } },
            { term: 'escuchar', translations: { de: 'hören, zuhören', en: 'to listen' } },
            { term: 'comprar', translations: { de: 'kaufen', en: 'to buy' } },
            { term: 'beber', translations: { de: 'trinken', en: 'to drink' } },
            { term: 'leer', translations: { de: 'lesen', en: 'to read' } },
            { term: 'aprender', translations: { de: 'lernen', en: 'to learn' } },
            { term: 'escribir', translations: { de: 'schreiben', en: 'to write' } },
            { term: 'abrir', translations: { de: 'öffnen', en: 'to open' } },
            { term: 'recibir', translations: { de: 'bekommen, empfangen', en: 'to receive' } },
          ],
        },
        {
          id: 'esg3-p1-cloze',
          type: 'CLOZE',
          instruction: 'Complete con el presente del verbo indicado.',
          wordBank: ['estudio', 'trabaja', 'bebemos', 'escribís', 'aprenden', 'abre'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Yo ' },
            { kind: 'GAP', gapId: 'g1', solution: ['estudio'], hint: 'estudiar', width: 9 },
            { kind: 'TEXT', text: ' español desde enero.\nMi hermana ' },
            { kind: 'GAP', gapId: 'g2', solution: ['trabaja'], hint: 'trabajar', width: 9 },
            { kind: 'TEXT', text: ' en Sevilla.\nNosotros ' },
            { kind: 'GAP', gapId: 'g3', solution: ['bebemos'], hint: 'beber', width: 9 },
            { kind: 'TEXT', text: ' café por la mañana.\n¿Vosotros ' },
            { kind: 'GAP', gapId: 'g4', solution: ['escribís'], hint: 'escribir', width: 9 },
            { kind: 'TEXT', text: ' muchos correos?\nLos niños ' },
            { kind: 'GAP', gapId: 'g5', solution: ['aprenden'], hint: 'aprender', width: 9 },
            { kind: 'TEXT', text: ' muy rápido.\nLa tienda ' },
            { kind: 'GAP', gapId: 'g6', solution: ['abre'], hint: 'abrir', width: 7 },
            { kind: 'TEXT', text: ' a las nueve.' },
          ],
        },
        {
          id: 'esg3-p1-info-sujeto',
          type: 'INFO',
          variant: 'TIP',
          title: 'La terminación ya dice quién',
          text: 'En alemán el pronombre es obligatorio, porque las formas verbales se repiten. En español cada persona tiene su propia terminación, así que el pronombre sobra y normalmente se omite: se dice «hablo español», no «yo hablo español». Solo aparece cuando se quiere subrayar el contraste: «Yo trabajo, tú duermes».',
          translations: {
            de: {
              title: 'Die Endung sagt schon, wer',
              text: 'Im Deutschen ist das Pronomen Pflicht, weil sich die Verbformen wiederholen. Im Spanischen hat jede Person ihre eigene Endung, das Pronomen ist also überflüssig und bleibt in der Regel weg: Man sagt „hablo español“, nicht „yo hablo español“. Gesetzt wird es nur, wenn man den Gegensatz betonen will: „Yo trabajo, tú duermes“.',
            },
          },
        },
        {
          id: 'esg3-p1-choice',
          type: 'CHOICE',
          instruction: 'Marque todas las formas correctas.',
          question: '¿Cuáles de estas formas del presente son correctas?',
          options: [
            { id: 'o1', text: 'nosotros comemos' },
            { id: 'o2', text: 'nosotros vivemos' },
            { id: 'o3', text: 'vosotros habláis' },
            { id: 'o4', text: 'ellos abren' },
          ],
          multiple: true,
          solution: ['o1', 'o3', 'o4'],
          explanation:
            'Los verbos en -er y en -ir solo se distinguen en nosotros y vosotros: «comemos» pero «vivimos», «coméis» pero «vivís». «Vivemos» mezcla las dos series.',
          explanationTranslations: {
            de: 'Verben auf -er und auf -ir unterscheiden sich nur bei nosotros und vosotros: „comemos“, aber „vivimos“; „coméis“, aber „vivís“. „Vivemos“ mischt die beiden Reihen.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – Vokalwechsel im Stamm, erklärt über die Betonung.
  {
    order: 2,
    title: 'Verben mit Vokalwechsel',
    subtitle: 'e → ie, o → ue, e → i',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'esg3-p2-h1', type: 'HEADING', level: 1, text: 'Verben mit Vokalwechsel' },
        {
          id: 'esg3-p2-intro',
          type: 'TEXT',
          text: 'Un grupo grande de verbos cambia la vocal de la raíz: «querer» hace «quiero», «poder» hace «puedo». Las terminaciones siguen siendo las regulares – lo único que se mueve es la vocal. Por eso no son verbos irregulares de verdad, sino verbos con una regla propia.',
          translations: {
            de: 'Eine große Gruppe von Verben ändert den Stammvokal: „querer“ wird zu „quiero“, „poder“ zu „puedo“. Die Endungen bleiben die regelmäßigen – es bewegt sich allein der Vokal. Deshalb sind es keine echten unregelmäßigen Verben, sondern Verben mit einer eigenen Regel.',
          },
        },
        {
          id: 'esg3-p2-info-regla',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'El cambio sigue al acento',
          text: 'La regla que ahorra listas: la vocal solo cambia cuando la fuerza de la voz cae sobre ella. En nosotros y vosotros el acento se va a la terminación, y entonces la raíz se queda como en el infinitivo. Por eso el cuadro de estos verbos tiene siempre la misma forma: cuatro formas cambiadas arriba y abajo, dos intactas en el medio.',
          translations: {
            de: {
              title: 'Der Wechsel folgt der Betonung',
              text: 'Die Regel, die Listen erspart: Der Vokal wechselt nur, wenn die Betonung auf ihn fällt. Bei nosotros und vosotros wandert die Betonung auf die Endung, und dann bleibt der Stamm wie im Infinitiv. Deshalb hat die Tabelle dieser Verben immer dieselbe Gestalt: oben und unten vier gewechselte Formen, in der Mitte zwei unveränderte.',
            },
          },
          table: {
            headers: ['Persona', 'querer (e→ie)', 'poder (o→ue)', 'pedir (e→i)'],
            rows: [
              ['yo', 'quiero', 'puedo', 'pido'],
              ['tú', 'quieres', 'puedes', 'pides'],
              ['él / ella / usted', 'quiere', 'puede', 'pide'],
              ['nosotros', 'queremos', 'podemos', 'pedimos'],
              ['vosotros', 'queréis', 'podéis', 'pedís'],
              ['ellos / ellas / ustedes', 'quieren', 'pueden', 'piden'],
            ],
          },
        },
        {
          id: 'esg3-p2-info-grupos',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Los tres grupos',
          text: 'El cambio e→i solo se da en verbos terminados en -ir. Los otros dos aparecen en las tres conjugaciones. Un caso aparte es «jugar», el único verbo que cambia u→ue.',
          translations: {
            de: {
              title: 'Die drei Gruppen',
              text: 'Der Wechsel e→i kommt nur bei Verben auf -ir vor. Die beiden anderen treten in allen drei Konjugationen auf. Ein Sonderfall ist „jugar“ – das einzige Verb mit dem Wechsel u→ue.',
            },
          },
          table: {
            headers: ['Cambio', 'Verbos', 'Forma de «yo»'],
            rows: [
              ['e → ie', 'querer, pensar, empezar, entender, preferir, cerrar', 'quiero, pienso, empiezo'],
              ['o → ue', 'poder, dormir, volver, encontrar, recordar, costar', 'puedo, duermo, vuelvo'],
              ['e → i', 'pedir, servir, repetir, seguir, vestir', 'pido, sirvo, repito'],
              ['u → ue', 'jugar (único)', 'juego'],
            ],
          },
        },
        {
          id: 'esg3-p2-cloze',
          type: 'CLOZE',
          instruction: 'Complete con el presente. Cuidado con nosotros y vosotros.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Yo no ' },
            { kind: 'GAP', gapId: 'c1', solution: ['puedo'], hint: 'poder', width: 8 },
            { kind: 'TEXT', text: ' venir mañana.\nNosotros ' },
            { kind: 'GAP', gapId: 'c2', solution: ['podemos'], hint: 'poder', width: 9 },
            { kind: 'TEXT', text: ' ayudarte el sábado.\n¿Qué ' },
            { kind: 'GAP', gapId: 'c3', solution: ['piensas'], hint: 'pensar', width: 9 },
            { kind: 'TEXT', text: ' tú de la idea?\nLos niños ' },
            { kind: 'GAP', gapId: 'c4', solution: ['duermen'], hint: 'dormir', width: 9 },
            { kind: 'TEXT', text: ' diez horas.\nNosotros ' },
            { kind: 'GAP', gapId: 'c5', solution: ['dormimos'], hint: 'dormir', width: 9 },
            { kind: 'TEXT', text: ' poco entre semana.\nÉl siempre ' },
            { kind: 'GAP', gapId: 'c6', solution: ['pide'], hint: 'pedir', width: 7 },
            { kind: 'TEXT', text: ' lo mismo.' },
          ],
        },
        {
          id: 'esg3-p2-choice',
          type: 'CHOICE',
          instruction: 'Elija la explicación correcta.',
          question: '¿Por qué se dice «puedo» pero «podemos»?',
          options: [
            { id: 'p1', text: 'Porque la primera persona es siempre irregular en español.' },
            {
              id: 'p2',
              text: 'Porque la vocal solo cambia cuando lleva el acento, y en «podemos» el acento está en la terminación.',
            },
            { id: 'p3', text: 'Porque «podemos» es plural y el plural nunca cambia la raíz.' },
          ],
          multiple: false,
          solution: ['p2'],
          explanation:
            'El plural no tiene nada que ver: «pueden» es plural y sí cambia. Lo que decide es el acento, y en nosotros y vosotros cae fuera de la raíz.',
          explanationTranslations: {
            de: 'Am Plural liegt es nicht: „pueden“ ist Plural und wechselt sehr wohl. Entscheidend ist die Betonung, und bei nosotros und vosotros fällt sie außerhalb des Stamms.',
          },
        },
        {
          id: 'esg3-p2-match',
          type: 'MATCHING',
          instruction: 'Relacione el infinitivo con la forma de «yo».',
          left: [
            { id: 'l1', text: 'empezar' },
            { id: 'l2', text: 'volver' },
            { id: 'l3', text: 'seguir' },
            { id: 'l4', text: 'jugar' },
          ],
          right: [
            { id: 'r1', text: 'empiezo' },
            { id: 'r2', text: 'vuelvo' },
            { id: 'r3', text: 'sigo' },
            { id: 'r4', text: 'juego' },
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
  // Seite 3 – die echten Unregelmäßigkeiten, nach Muster geordnet.
  {
    order: 3,
    title: 'Unregelmäßige Verben',
    subtitle: 'Meist ist nur die erste Person betroffen',
    estimatedMinutes: 20,
    content: {
      version: v,
      blocks: [
        { id: 'esg3-p3-h1', type: 'HEADING', level: 1, text: 'Unregelmäßige Verben' },
        {
          id: 'esg3-p3-intro',
          type: 'TEXT',
          text: 'Los verbos verdaderamente irregulares son pocos, y muchos lo son solo a medias: cambian la primera persona del singular y siguen la regla en todas las demás. Conviene aprenderlos por grupos, porque las irregularidades se repiten de un verbo a otro.',
          translations: {
            de: 'Wirklich unregelmäßige Verben gibt es wenige, und viele sind es nur halb: Sie ändern die erste Person Singular und folgen sonst der Regel. Man lernt sie am besten in Gruppen, denn die Unregelmäßigkeiten wiederholen sich von Verb zu Verb.',
          },
        },
        {
          id: 'esg3-p3-info-yo',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Solo la forma de «yo»',
          text: 'En este grupo todo es regular menos la primera persona. Vale la pena fijarse en el patrón: casi todos añaden una -g-. Quien lo ve una vez deja de tratarlos como excepciones sueltas.',
          translations: {
            de: {
              title: 'Nur die „yo“-Form',
              text: 'In dieser Gruppe ist alles regelmäßig außer der ersten Person. Das Muster lohnt einen Blick: Fast alle schieben ein -g- ein. Wer das einmal sieht, behandelt sie nicht länger als lose Ausnahmen.',
            },
          },
          table: {
            headers: ['Infinitivo', 'yo', 'tú', 'nosotros'],
            rows: [
              ['hacer', 'hago', 'haces', 'hacemos'],
              ['poner', 'pongo', 'pones', 'ponemos'],
              ['salir', 'salgo', 'sales', 'salimos'],
              ['traer', 'traigo', 'traes', 'traemos'],
              ['conocer', 'conozco', 'conoces', 'conocemos'],
              ['saber', 'sé', 'sabes', 'sabemos'],
              ['dar', 'doy', 'das', 'damos'],
              ['ver', 'veo', 'ves', 'vemos'],
            ],
          },
        },
        {
          id: 'esg3-p3-info-dobles',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Los que acumulan dos irregularidades',
          text: '«tener», «venir» y «decir» juntan las dos cosas: la -g- en la primera persona y el cambio de vocal en el resto. Son de los verbos más usados del idioma, así que el esfuerzo se amortiza enseguida. «ir» va por libre: no se parece a nada.',
          translations: {
            de: {
              title: 'Die mit zwei Unregelmäßigkeiten',
              text: '„tener“, „venir“ und „decir“ verbinden beides: das -g- in der ersten Person und den Vokalwechsel in den übrigen. Es sind die meistgebrauchten Verben der Sprache, die Mühe zahlt sich also sofort aus. „ir“ steht für sich – es ähnelt nichts.',
            },
          },
          table: {
            headers: ['Persona', 'tener', 'venir', 'decir', 'ir'],
            rows: [
              ['yo', 'tengo', 'vengo', 'digo', 'voy'],
              ['tú', 'tienes', 'vienes', 'dices', 'vas'],
              ['él / ella / usted', 'tiene', 'viene', 'dice', 'va'],
              ['nosotros', 'tenemos', 'venimos', 'decimos', 'vamos'],
              ['vosotros', 'tenéis', 'venís', 'decís', 'vais'],
              ['ellos / ellas / ustedes', 'tienen', 'vienen', 'dicen', 'van'],
            ],
          },
        },
        {
          id: 'esg3-p3-cloze',
          type: 'CLOZE',
          instruction: 'Complete con el presente del verbo indicado.',
          wordBank: ['tengo', 'hago', 'salgo', 'vienen', 'vamos', 'dice', 'conozco'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Yo ' },
            { kind: 'GAP', gapId: 'u1', solution: ['tengo'], hint: 'tener', width: 8 },
            { kind: 'TEXT', text: ' dos hermanos.\nLos domingos ' },
            { kind: 'GAP', gapId: 'u2', solution: ['hago'], hint: 'hacer', width: 7 },
            { kind: 'TEXT', text: ' la compra.\nNormalmente ' },
            { kind: 'GAP', gapId: 'u3', solution: ['salgo'], hint: 'salir', width: 8 },
            { kind: 'TEXT', text: ' de casa a las ocho.\nMis primos ' },
            { kind: 'GAP', gapId: 'u4', solution: ['vienen'], hint: 'venir', width: 8 },
            { kind: 'TEXT', text: ' en agosto.\nNosotros ' },
            { kind: 'GAP', gapId: 'u5', solution: ['vamos'], hint: 'ir', width: 7 },
            { kind: 'TEXT', text: ' al cine esta noche.\nElla siempre ' },
            { kind: 'GAP', gapId: 'u6', solution: ['dice'], hint: 'decir', width: 7 },
            { kind: 'TEXT', text: ' la verdad.\nNo ' },
            { kind: 'GAP', gapId: 'u7', solution: ['conozco'], hint: 'conocer', width: 9 },
            { kind: 'TEXT', text: ' esta ciudad.' },
          ],
        },
        {
          id: 'esg3-p3-choice',
          type: 'CHOICE',
          instruction: 'Elija la forma correcta.',
          question: 'Yo no ___ dónde está la estación, pero mi vecino ___ bien el barrio.',
          options: [
            { id: 'q1', text: 'sé … conoce' },
            { id: 'q2', text: 'conozco … sabe' },
            { id: 'q3', text: 'sé … sabe' },
          ],
          multiple: false,
          solution: ['q1'],
          explanation:
            '«saber» se usa con datos y con oraciones subordinadas («sé dónde…»); «conocer», con personas y lugares en los que se ha estado. El barrio se conoce, el dato de dónde está la estación se sabe.',
          explanationTranslations: {
            de: '„saber“ steht bei Fakten und bei Nebensätzen („sé dónde…“), „conocer“ bei Personen und Orten, an denen man gewesen ist. Das Viertel kennt man, die Angabe, wo der Bahnhof liegt, weiß man.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – reflexive Verben: keine eigene Konjugation, nur ein Pronomen.
  {
    order: 4,
    title: 'Reflexive Verben',
    subtitle: 'me, te, se – und was sie verändern',
    estimatedMinutes: 20,
    content: {
      version: v,
      blocks: [
        { id: 'esg3-p4-h1', type: 'HEADING', level: 1, text: 'Reflexive Verben' },
        {
          id: 'esg3-p4-intro',
          type: 'TEXT',
          text: 'Un verbo reflexivo no tiene conjugación propia: se conjuga como cualquier otro y se le pone delante un pronombre que concuerda con el sujeto. El infinitivo se reconoce por el -se final: levantarse, llamarse, ducharse.',
          translations: {
            de: 'Ein reflexives Verb hat keine eigene Konjugation: Es wird wie jedes andere konjugiert, und davor tritt ein Pronomen, das zum Subjekt passt. Den Infinitiv erkennt man am angehängten -se: levantarse, llamarse, ducharse.',
          },
        },
        {
          id: 'esg3-p4-info-conj',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'El pronombre va delante',
          text: 'En la frase conjugada el pronombre se coloca antes del verbo y separado de él. Solo se pega detrás cuando el verbo está en infinitivo o en gerundio: «quiero levantarme», «estoy levantándome».',
          translations: {
            de: {
              title: 'Das Pronomen steht davor',
              text: 'Im konjugierten Satz steht das Pronomen vor dem Verb und getrennt davon. Angehängt wird es nur, wenn das Verb im Infinitiv oder Gerundium steht: „quiero levantarme“, „estoy levantándome“.',
            },
          },
          table: {
            headers: ['Persona', 'levantarse', 'llamarse'],
            rows: [
              ['yo', 'me levanto', 'me llamo'],
              ['tú', 'te levantas', 'te llamas'],
              ['él / ella / usted', 'se levanta', 'se llama'],
              ['nosotros', 'nos levantamos', 'nos llamamos'],
              ['vosotros', 'os levantáis', 'os llamáis'],
              ['ellos / ellas / ustedes', 'se levantan', 'se llaman'],
            ],
          },
        },
        {
          id: 'esg3-p4-info-sentido',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'El pronombre cambia el sentido',
          text: 'Muchos verbos existen en las dos versiones, y la diferencia no es de estilo: sin pronombre la acción recae en otra cosa, con pronombre recae en el propio sujeto. El alemán a veces lo marca igual («sich waschen») y a veces con un verbo distinto («gehen» frente a «weggehen»).',
          translations: {
            de: {
              title: 'Das Pronomen ändert die Bedeutung',
              text: 'Viele Verben gibt es in beiden Fassungen, und der Unterschied ist keiner des Stils: Ohne Pronomen trifft die Handlung etwas anderes, mit Pronomen das Subjekt selbst. Das Deutsche markiert das mal genauso („sich waschen“), mal mit einem eigenen Verb („gehen“ gegenüber „weggehen“).',
            },
          },
          table: {
            headers: ['Sin pronombre', 'Con pronombre'],
            rows: [
              ['lavar – waschen', 'lavarse – sich waschen'],
              ['llamar – rufen, anrufen', 'llamarse – heißen'],
              ['ir – gehen, fahren', 'irse – weggehen'],
              ['dormir – schlafen', 'dormirse – einschlafen'],
              ['acordar – vereinbaren', 'acordarse de – sich erinnern an'],
            ],
          },
        },
        {
          id: 'esg3-p4-cloze',
          type: 'CLOZE',
          instruction: 'Complete con el pronombre y la forma verbal que faltan.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '¿Cómo ' },
            { kind: 'GAP', gapId: 'r1', solution: ['te llamas'], hint: 'llamarse, tú', width: 11 },
            { kind: 'TEXT', text: '?\nYo ' },
            { kind: 'GAP', gapId: 'r2', solution: ['me levanto'], hint: 'levantarse, yo', width: 12 },
            { kind: 'TEXT', text: ' a las seis y media.\nMi hijo ' },
            { kind: 'GAP', gapId: 'r3', solution: ['se ducha'], hint: 'ducharse, él', width: 10 },
            { kind: 'TEXT', text: ' por la noche.\nNosotros ' },
            {
              kind: 'GAP',
              gapId: 'r4',
              solution: ['nos acostamos'],
              hint: 'acostarse, nosotros',
              width: 14,
            },
            { kind: 'TEXT', text: ' tarde los viernes.\nLos niños ' },
            { kind: 'GAP', gapId: 'r5', solution: ['se duermen'], hint: 'dormirse, ellos', width: 12 },
            { kind: 'TEXT', text: ' en el coche.' },
          ],
        },
        {
          id: 'esg3-p4-order',
          type: 'ORDERING',
          instruction: 'Forme una frase correcta.',
          items: [
            { id: 'w1', text: 'Normalmente' },
            { id: 'w2', text: 'me' },
            { id: 'w3', text: 'despierto' },
            { id: 'w4', text: 'antes' },
            { id: 'w5', text: 'del despertador.' },
          ],
          solution: ['w1', 'w2', 'w3', 'w4', 'w5'],
        },
        {
          id: 'esg3-p4-writing',
          type: 'WRITING',
          instruction: 'Beschreiben Sie Ihren Tagesablauf.',
          prompt:
            'Escriba de cinco a ocho frases sobre un día normal suyo, desde que se levanta hasta que se acuesta. Use al menos tres verbos reflexivos y al menos dos verbos con cambio de vocal.',
          minWords: 30,
          maxWords: 100,
          aiFeedback: true,
          sampleAnswer:
            'Me despierto a las seis y media y me levanto enseguida. Primero me ducho y después desayuno con mi mujer. Salgo de casa a las ocho y voy al trabajo en bici. Empiezo a las nueve y almuerzo sobre la una. Por la tarde vuelvo a casa y juego un rato con mis hijos. Ceno tarde, leo un poco y me acuesto sobre las once.',
        },
      ],
    },
  },
];
