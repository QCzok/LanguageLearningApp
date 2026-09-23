import type { UnitSeed } from './chapter-beginner-1';

/**
 * Spanische Grammatik, Kapitel 6: „Indefinido und Imperfecto“
 *
 * Fünf Seiten – das längste Kapitel des Buchs, und zu Recht: Hier entscheidet
 * sich, ob jemand auf Spanisch erzählen kann. Die Formen sind das kleinere
 * Problem; die Wahl zwischen beiden Zeiten ist das eigentliche Thema.
 *
 * Aufbau: erst die Formen, und zwar getrennt – das Indefinido regelmäßig, dann
 * seine unregelmäßigen Stämme, dann das Imperfecto, das mit drei Ausnahmen
 * auskommt und deshalb eine kurze Seite ist. Erst danach die Gegenüberstellung,
 * und zuletzt beide Zeiten im selben Text, weil sie im Erzählen nie
 * nebeneinander, sondern ineinander stehen.
 *
 * Die Gegenüberstellung arbeitet nicht mit „abgeschlossen / nicht
 * abgeschlossen“ – beide Zeiten meinen Vergangenes, und das Imperfecto ist
 * ebenso vorbei. Getrennt wird nach dem, was der Satz tut: die Handlung
 * vorantreiben oder den Rahmen dazu aufspannen.
 */
const v = 1;

export const SPANISH_GRAMMAR_6_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Indefinido, regelmäßige Formen.
  {
    order: 1,
    title: 'Das Indefinido',
    subtitle: 'Die regelmäßigen Formen',
    estimatedMinutes: 20,
    content: {
      version: v,
      blocks: [
        { id: 'esg6-p1-h1', type: 'HEADING', level: 1, text: 'Das Indefinido' },
        {
          id: 'esg6-p1-intro',
          type: 'TEXT',
          text: 'El indefinido cuenta lo que pasó: un hecho, en un momento determinado, que hizo avanzar la historia. «Ayer llamé a Pedro», «En 2019 cambiamos de piso». Es el tiempo de la narración, el que lleva el hilo hacia adelante.',
          translations: {
            de: 'Das Indefinido erzählt, was geschah: ein Vorgang, zu einem bestimmten Zeitpunkt, der die Geschichte vorangebracht hat. „Ayer llamé a Pedro“, „En 2019 cambiamos de piso“. Es ist die Zeit der Erzählung, die den Faden weiterträgt.',
          },
        },
        {
          id: 'esg6-p1-info-formas',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Las terminaciones',
          text: 'Como en el presente, -er e -ir comparten terminaciones: aquí son idénticas en las seis personas. Fíjese en las tildes de la primera y la tercera persona del singular – sin ellas la palabra es otra: «hablo» es presente, «habló» es pasado.',
          translations: {
            de: {
              title: 'Die Endungen',
              text: 'Wie im Präsens teilen sich -er und -ir die Endungen – hier sind sie in allen sechs Personen gleich. Achten Sie auf die Akzente der ersten und dritten Person Singular: Ohne sie ist es ein anderes Wort – „hablo“ ist Präsens, „habló“ Vergangenheit.',
            },
          },
          table: {
            headers: ['Persona', 'hablar', 'comer', 'vivir'],
            rows: [
              ['yo', 'hablé', 'comí', 'viví'],
              ['tú', 'hablaste', 'comiste', 'viviste'],
              ['él / ella / usted', 'habló', 'comió', 'vivió'],
              ['nosotros', 'hablamos', 'comimos', 'vivimos'],
              ['vosotros', 'hablasteis', 'comisteis', 'vivisteis'],
              ['ellos / ellas / ustedes', 'hablaron', 'comieron', 'vivieron'],
            ],
          },
        },
        {
          id: 'esg6-p1-info-nosotros',
          type: 'INFO',
          variant: 'TIP',
          title: 'Una forma que se repite',
          text: 'En los verbos en -ar y en -ir, la forma de nosotros es igual en presente y en indefinido: «hablamos», «vivimos». Solo el contexto dice de qué tiempo se trata: «hoy hablamos» frente a «ayer hablamos». En los verbos en -er sí se distinguen: «comemos» y «comimos».',
          translations: {
            de: {
              title: 'Eine Form, die zweimal vorkommt',
              text: 'Bei Verben auf -ar und -ir ist die nosotros-Form im Präsens und im Indefinido gleich: „hablamos“, „vivimos“. Erst der Zusammenhang sagt, welche Zeit gemeint ist: „hoy hablamos“ gegenüber „ayer hablamos“. Bei Verben auf -er unterscheiden sie sich: „comemos“ und „comimos“.',
            },
          },
        },
        {
          id: 'esg6-p1-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: marcadores del indefinido',
          items: [
            { term: 'ayer', translations: { de: 'gestern', en: 'yesterday' }, example: 'Ayer trabajé hasta tarde.' },
            { term: 'anoche', translations: { de: 'gestern Abend, letzte Nacht', en: 'last night' } },
            { term: 'la semana pasada', translations: { de: 'letzte Woche', en: 'last week' } },
            { term: 'el año pasado', translations: { de: 'letztes Jahr', en: 'last year' } },
            { term: 'hace dos días', translations: { de: 'vor zwei Tagen', en: 'two days ago' } },
            { term: 'entonces', translations: { de: 'da, damals', en: 'then' } },
            { term: 'de repente', translations: { de: 'plötzlich', en: 'suddenly' } },
            { term: 'en 2018', translations: { de: 'im Jahr 2018', en: 'in 2018' } },
          ],
        },
        {
          id: 'esg6-p1-cloze',
          type: 'CLOZE',
          instruction: 'Complete con el indefinido del verbo indicado.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Ayer yo ' },
            { kind: 'GAP', gapId: 'i1', solution: ['trabajé'], hint: 'trabajar', width: 10 },
            { kind: 'TEXT', text: ' hasta las nueve.\n¿A qué hora ' },
            { kind: 'GAP', gapId: 'i2', solution: ['llegaste'], hint: 'llegar, tú', width: 10 },
            { kind: 'TEXT', text: ' a casa?\nMi hermano ' },
            { kind: 'GAP', gapId: 'i3', solution: ['vendió'], hint: 'vender', width: 9 },
            { kind: 'TEXT', text: ' el coche en marzo.\nNosotros ' },
            { kind: 'GAP', gapId: 'i4', solution: ['comimos'], hint: 'comer', width: 10 },
            { kind: 'TEXT', text: ' en un restaurante italiano.\nLos vecinos ' },
            { kind: 'GAP', gapId: 'i5', solution: ['escribieron'], hint: 'escribir', width: 12 },
            { kind: 'TEXT', text: ' una carta al ayuntamiento.' },
          ],
        },
        {
          id: 'esg6-p1-choice',
          type: 'CHOICE',
          instruction: 'Elija la frase correcta.',
          question: '¿Cuál de estas frases significa «Er sprach mit dem Chef»?',
          options: [
            { id: 'o1', text: 'Hablo con el jefe.' },
            { id: 'o2', text: 'Habló con el jefe.' },
            { id: 'o3', text: 'Hablé con el jefe.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation:
            'La tilde lo decide todo: «hablo» es «ich spreche», «habló» es «er sprach» y «hablé» es «ich sprach». Tres palabras distintas con las mismas letras.',
          explanationTranslations: {
            de: 'Der Akzent entscheidet alles: „hablo“ heißt „ich spreche“, „habló“ „er sprach“ und „hablé“ „ich sprach“. Drei verschiedene Wörter aus denselben Buchstaben.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – die unregelmäßigen Stämme des Indefinido.
  {
    order: 2,
    title: 'Unregelmäßiges Indefinido',
    subtitle: 'Eigener Stamm, gemeinsame Endungen',
    estimatedMinutes: 21,
    content: {
      version: v,
      blocks: [
        { id: 'esg6-p2-h1', type: 'HEADING', level: 1, text: 'Unregelmäßiges Indefinido' },
        {
          id: 'esg6-p2-intro',
          type: 'TEXT',
          text: 'Los verbos irregulares del indefinido tienen una ventaja inesperada: todos comparten las mismas terminaciones, distintas de las regulares. Basta con aprender la raíz de cada uno y añadir siempre la misma serie.',
          translations: {
            de: 'Die unregelmäßigen Verben des Indefinido haben einen unerwarteten Vorteil: Sie teilen sich alle dieselben Endungen, die sich von den regelmäßigen unterscheiden. Man muss nur den Stamm jedes Verbs lernen und immer dieselbe Reihe anhängen.',
          },
        },
        {
          id: 'esg6-p2-info-serie',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'La serie común: -e, -iste, -o, -imos, -isteis, -ieron',
          text: 'Lo llamativo de esta serie es que la primera y la tercera persona no llevan tilde, al revés que en los verbos regulares. Por eso se dice «tuve» y «tuvo», no «tuvé» ni «tuvó» – y la diferencia entre las dos está solo en la última letra.',
          translations: {
            de: {
              title: 'Die gemeinsame Reihe: -e, -iste, -o, -imos, -isteis, -ieron',
              text: 'Auffällig an dieser Reihe ist, dass die erste und dritte Person keinen Akzent tragen – anders als bei den regelmäßigen Verben. Deshalb heißt es „tuve“ und „tuvo“, nicht „tuvé“ oder „tuvó“ – und beide unterscheiden sich nur im letzten Buchstaben.',
            },
          },
          table: {
            headers: ['Persona', 'tener (tuv-)', 'poder (pud-)', 'hacer (hic-)'],
            rows: [
              ['yo', 'tuve', 'pude', 'hice'],
              ['tú', 'tuviste', 'pudiste', 'hiciste'],
              ['él / ella / usted', 'tuvo', 'pudo', 'hizo'],
              ['nosotros', 'tuvimos', 'pudimos', 'hicimos'],
              ['vosotros', 'tuvisteis', 'pudisteis', 'hicisteis'],
              ['ellos / ellas / ustedes', 'tuvieron', 'pudieron', 'hicieron'],
            ],
          },
        },
        {
          id: 'esg6-p2-info-raices',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Las raíces que hay que saber',
          text: 'Son unas quince y cubren prácticamente todo el idioma hablado. Los verbos con raíz en -j- pierden la «i» en la tercera persona del plural: «dijeron», no «dijieron».',
          translations: {
            de: {
              title: 'Die Stämme, die man kennen muss',
              text: 'Es sind rund fünfzehn, und sie decken praktisch die gesamte gesprochene Sprache ab. Verben mit einem Stamm auf -j- verlieren in der dritten Person Plural das „i“: „dijeron“, nicht „dijieron“.',
            },
          },
          table: {
            headers: ['Infinitivo', 'Raíz', 'yo', 'ellos'],
            rows: [
              ['estar', 'estuv-', 'estuve', 'estuvieron'],
              ['poner', 'pus-', 'puse', 'pusieron'],
              ['saber', 'sup-', 'supe', 'supieron'],
              ['querer', 'quis-', 'quise', 'quisieron'],
              ['venir', 'vin-', 'vine', 'vinieron'],
              ['decir', 'dij-', 'dije', 'dijeron'],
              ['traer', 'traj-', 'traje', 'trajeron'],
              ['dar', '(irregular)', 'di', 'dieron'],
            ],
          },
        },
        {
          id: 'esg6-p2-info-serir',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: '«ser» e «ir» comparten formas',
          text: 'Dos verbos muy usados tienen exactamente el mismo indefinido: fui, fuiste, fue, fuimos, fuisteis, fueron. No hay manera de distinguirlos por la forma, solo por lo que sigue: «Fui médico» es «ser», «Fui a Madrid» es «ir». En la práctica nunca se confunden, porque «ir» lleva casi siempre «a».',
          translations: {
            de: {
              title: '„ser“ und „ir“ teilen sich die Formen',
              text: 'Zwei häufige Verben haben genau dasselbe Indefinido: fui, fuiste, fue, fuimos, fuisteis, fueron. An der Form lassen sie sich nicht unterscheiden, nur an dem, was folgt: „Fui médico“ ist „ser“, „Fui a Madrid“ ist „ir“. In der Praxis verwechselt man sie nie, weil bei „ir“ fast immer ein „a“ steht.',
            },
          },
        },
        {
          id: 'esg6-p2-cloze',
          type: 'CLOZE',
          instruction: 'Complete con el indefinido irregular.',
          wordBank: ['tuve', 'estuvimos', 'hizo', 'dijeron', 'fue', 'vinieron'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'El año pasado ' },
            { kind: 'GAP', gapId: 'x1', solution: ['tuve'], hint: 'tener, yo', width: 7 },
            { kind: 'TEXT', text: ' un accidente pequeño.\nEn agosto ' },
            { kind: 'GAP', gapId: 'x2', solution: ['estuvimos'], hint: 'estar, nosotros', width: 11 },
            { kind: 'TEXT', text: ' en Galicia.\n¿Quién ' },
            { kind: 'GAP', gapId: 'x3', solution: ['hizo'], hint: 'hacer, él', width: 7 },
            { kind: 'TEXT', text: ' la reserva?\nMis padres no ' },
            { kind: 'GAP', gapId: 'x4', solution: ['dijeron'], hint: 'decir, ellos', width: 9 },
            { kind: 'TEXT', text: ' nada.\nLa reunión ' },
            { kind: 'GAP', gapId: 'x5', solution: ['fue'], hint: 'ser, ella', width: 6 },
            { kind: 'TEXT', text: ' muy larga.\nTus primos ' },
            { kind: 'GAP', gapId: 'x6', solution: ['vinieron'], hint: 'venir, ellos', width: 10 },
            { kind: 'TEXT', text: ' sin avisar.' },
          ],
        },
        {
          id: 'esg6-p2-match',
          type: 'MATCHING',
          instruction: 'Relacione el infinitivo con la forma de «yo» en indefinido.',
          left: [
            { id: 'l1', text: 'saber' },
            { id: 'l2', text: 'poner' },
            { id: 'l3', text: 'traer' },
            { id: 'l4', text: 'querer' },
          ],
          right: [
            { id: 'r1', text: 'supe' },
            { id: 'r2', text: 'puse' },
            { id: 'r3', text: 'traje' },
            { id: 'r4', text: 'quise' },
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
  // Seite 3 – Imperfecto: kurze Seite, drei Ausnahmen.
  {
    order: 3,
    title: 'Das Imperfecto',
    subtitle: 'Drei Ausnahmen, sonst regelmäßig',
    estimatedMinutes: 18,
    content: {
      version: v,
      blocks: [
        { id: 'esg6-p3-h1', type: 'HEADING', level: 1, text: 'Das Imperfecto' },
        {
          id: 'esg6-p3-intro',
          type: 'TEXT',
          text: 'Después del indefinido, el imperfecto se aprende en diez minutos: solo hay tres verbos irregulares en todo el idioma. Es el tiempo que describe cómo eran las cosas, lo que se hacía habitualmente y lo que estaba pasando cuando ocurrió otra cosa.',
          translations: {
            de: 'Nach dem Indefinido ist das Imperfecto in zehn Minuten gelernt: In der ganzen Sprache gibt es nur drei unregelmäßige Verben. Es ist die Zeit, die beschreibt, wie die Dinge waren, was man gewöhnlich tat und was gerade geschah, als etwas anderes eintrat.',
          },
        },
        {
          id: 'esg6-p3-info-formas',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Las terminaciones',
          text: 'Los verbos en -er y en -ir vuelven a compartir serie. La primera y la tercera persona del singular son idénticas – «hablaba» puede ser yo, él o ella –, y por eso el imperfecto es uno de los pocos tiempos en los que el pronombre se pone con cierta frecuencia.',
          translations: {
            de: {
              title: 'Die Endungen',
              text: 'Verben auf -er und -ir teilen sich wieder eine Reihe. Erste und dritte Person Singular sind gleich – „hablaba“ kann yo, él oder ella sein –, und deshalb ist das Imperfecto eine der wenigen Zeiten, in denen das Pronomen öfter gesetzt wird.',
            },
          },
          table: {
            headers: ['Persona', 'hablar', 'comer', 'vivir'],
            rows: [
              ['yo', 'hablaba', 'comía', 'vivía'],
              ['tú', 'hablabas', 'comías', 'vivías'],
              ['él / ella / usted', 'hablaba', 'comía', 'vivía'],
              ['nosotros', 'hablábamos', 'comíamos', 'vivíamos'],
              ['vosotros', 'hablabais', 'comíais', 'vivíais'],
              ['ellos / ellas / ustedes', 'hablaban', 'comían', 'vivían'],
            ],
          },
        },
        {
          id: 'esg6-p3-info-irreg',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Los tres irregulares',
          text: 'Son ser, ir y ver, y no hay más. Ningún verbo con cambio de vocal en presente lo mantiene aquí: «puedo» hace «podía», «pido» hace «pedía». El imperfecto ignora por completo esas irregularidades.',
          translations: {
            de: {
              title: 'Die drei unregelmäßigen',
              text: 'Es sind ser, ir und ver, und mehr gibt es nicht. Kein Verb mit Vokalwechsel im Präsens behält ihn hier: „puedo“ wird zu „podía“, „pido“ zu „pedía“. Das Imperfecto übergeht diese Unregelmäßigkeiten vollständig.',
            },
          },
          table: {
            headers: ['Persona', 'ser', 'ir', 'ver'],
            rows: [
              ['yo', 'era', 'iba', 'veía'],
              ['tú', 'eras', 'ibas', 'veías'],
              ['él / ella / usted', 'era', 'iba', 'veía'],
              ['nosotros', 'éramos', 'íbamos', 'veíamos'],
              ['vosotros', 'erais', 'ibais', 'veíais'],
              ['ellos / ellas / ustedes', 'eran', 'iban', 'veían'],
            ],
          },
        },
        {
          id: 'esg6-p3-cloze',
          type: 'CLOZE',
          instruction: 'Complete con el imperfecto.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'De niño yo ' },
            { kind: 'GAP', gapId: 'm1', solution: ['vivía'], hint: 'vivir', width: 8 },
            { kind: 'TEXT', text: ' en un pueblo pequeño.\nMi abuela ' },
            { kind: 'GAP', gapId: 'm2', solution: ['era'], hint: 'ser', width: 6 },
            { kind: 'TEXT', text: ' maestra.\nLos domingos ' },
            { kind: 'GAP', gapId: 'm3', solution: ['íbamos'], hint: 'ir, nosotros', width: 9 },
            { kind: 'TEXT', text: ' al río.\nDesde la ventana se ' },
            { kind: 'GAP', gapId: 'm4', solution: ['veían'], hint: 'ver, ellas', width: 8 },
            { kind: 'TEXT', text: ' las montañas.\nNo ' },
            { kind: 'GAP', gapId: 'm5', solution: ['teníamos'], hint: 'tener, nosotros', width: 10 },
            { kind: 'TEXT', text: ' coche entonces.' },
          ],
        },
        {
          id: 'esg6-p3-choice',
          type: 'CHOICE',
          instruction: 'Elija la forma correcta.',
          question: 'Cuando era estudiante, no ___ salir entre semana.',
          options: [
            { id: 'p1', text: 'puedía' },
            { id: 'p2', text: 'podía' },
            { id: 'p3', text: 'pudía' },
          ],
          multiple: false,
          solution: ['p2'],
          explanation:
            'El cambio de vocal del presente («puedo») no existe en el imperfecto. La raíz vuelve a ser la del infinitivo: pod- más la terminación regular.',
          explanationTranslations: {
            de: 'Der Vokalwechsel des Präsens („puedo“) gibt es im Imperfecto nicht. Der Stamm ist wieder der des Infinitivs: pod- plus regelmäßige Endung.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – die Gegenüberstellung, der Kern des Kapitels.
  {
    order: 4,
    title: 'Die Wahl zwischen beiden',
    subtitle: 'Was geschah – und wie es war',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'esg6-p4-h1', type: 'HEADING', level: 1, text: 'Die Wahl zwischen beiden' },
        {
          id: 'esg6-p4-intro',
          type: 'TEXT',
          text: 'Los dos tiempos hablan del pasado, así que la pregunta no es cuál está «más terminado». Lo que cambia es la función dentro del relato: el indefinido cuenta los hechos que hacen avanzar la historia; el imperfecto pinta el decorado en el que esos hechos ocurren.',
          translations: {
            de: 'Beide Zeiten sprechen von Vergangenem, die Frage ist also nicht, welche „abgeschlossener“ ist. Was sich ändert, ist die Aufgabe innerhalb der Erzählung: Das Indefinido berichtet die Vorgänge, die die Geschichte vorantreiben; das Imperfecto malt die Kulisse, in der diese Vorgänge geschehen.',
          },
        },
        {
          id: 'esg6-p4-info-funcion',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Hechos frente a decorado',
          text: 'Una prueba práctica: si la frase responde a «¿y qué pasó entonces?», es indefinido. Si responde a «¿y cómo era aquello?», es imperfecto. Un mismo hecho puede contarse de las dos maneras según lo que se quiera decir, y por eso no existe una lista de verbos que vayan siempre con uno u otro.',
          translations: {
            de: {
              title: 'Vorgang gegen Kulisse',
              text: 'Eine praktische Probe: Antwortet der Satz auf „und was geschah dann?“, ist es Indefinido. Antwortet er auf „und wie war das?“, ist es Imperfecto. Derselbe Sachverhalt lässt sich je nach Absicht auf beide Arten erzählen – deshalb gibt es keine Liste von Verben, die immer zu der einen oder anderen Zeit gehören.',
            },
          },
          table: {
            headers: ['Indefinido', 'Imperfecto'],
            rows: [
              ['hecho puntual: Llegué a las ocho.', 'descripción: Era de noche.'],
              ['acción única: Se rompió la pierna.', 'costumbre: Jugaba al fútbol cada sábado.'],
              ['serie de hechos: Entró, saludó y se sentó.', 'acción en curso: Mientras cocinaba, sonó el teléfono.'],
              ['inicio o fin: Empezó a llover.', 'edad y hora: Tenía diez años. Eran las tres.'],
            ],
          },
        },
        {
          id: 'esg6-p4-info-juntos',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Cuando se cruzan en una frase',
          text: 'El caso más típico: algo estaba pasando (imperfecto) y entonces ocurrió otra cosa (indefinido). El imperfecto describe la situación que ya estaba ahí, el indefinido nombra lo que la interrumpe. «Mientras» suele acompañar al primero, «de repente» y «entonces» al segundo.',
          translations: {
            de: {
              title: 'Wenn sie sich in einem Satz kreuzen',
              text: 'Der häufigste Fall: Etwas war im Gange (Imperfecto), und dann geschah etwas anderes (Indefinido). Das Imperfecto beschreibt die Lage, die schon da war, das Indefinido nennt, was sie unterbricht. „Mientras“ begleitet meist das erste, „de repente“ und „entonces“ das zweite.',
            },
          },
          table: {
            headers: ['Situación (imperfecto)', 'Interrupción (indefinido)'],
            rows: [
              ['Dormía tranquilamente', 'cuando sonó la alarma.'],
              ['Mientras esperábamos el tren,', 'vimos a Marta.'],
              ['Hacía mucho frío y no había nadie,', 'así que volvimos a casa.'],
              ['Iba a llamarte,', 'pero se me acabó la batería.'],
            ],
          },
        },
        {
          id: 'esg6-p4-choice',
          type: 'CHOICE',
          instruction: 'Elija la frase correcta.',
          question: '«Ich las gerade, als es klingelte.» ¿Cómo se dice en español?',
          options: [
            { id: 'o1', text: 'Leí cuando llamaban a la puerta.' },
            { id: 'o2', text: 'Leía cuando llamaron a la puerta.' },
            { id: 'o3', text: 'Leía cuando llamaban a la puerta.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation:
            'La lectura ya estaba en marcha: es el decorado, y va en imperfecto. El timbre es el hecho que irrumpe: indefinido. La tercera opción convertiría el timbre en algo habitual, como si sonara todos los días.',
          explanationTranslations: {
            de: 'Das Lesen war schon im Gange: Das ist die Kulisse und steht im Imperfecto. Das Klingeln ist der Vorgang, der hereinbricht: Indefinido. Die dritte Fassung machte das Klingeln zur Gewohnheit, als läutete es jeden Tag.',
          },
        },
        {
          id: 'esg6-p4-cloze',
          type: 'CLOZE',
          instruction: 'Complete con el tiempo adecuado.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Cuando ' },
            { kind: 'GAP', gapId: 'y1', solution: ['era'], hint: 'ser, yo – Beschreibung', width: 6 },
            { kind: 'TEXT', text: ' pequeño, todos los veranos ' },
            { kind: 'GAP', gapId: 'y2', solution: ['íbamos'], hint: 'ir – Gewohnheit', width: 9 },
            { kind: 'TEXT', text: ' al pueblo de mi abuela.\nUn año ' },
            { kind: 'GAP', gapId: 'y3', solution: ['tuvimos'], hint: 'tener – einmaliger Vorgang', width: 9 },
            { kind: 'TEXT', text: ' que quedarnos en la ciudad.\nEsa tarde ' },
            { kind: 'GAP', gapId: 'y4', solution: ['llovía'], hint: 'llover – Kulisse', width: 8 },
            { kind: 'TEXT', text: ' sin parar y de repente ' },
            { kind: 'GAP', gapId: 'y5', solution: ['se fue'], hint: 'irse – Vorgang', width: 8 },
            { kind: 'TEXT', text: ' la luz.' },
          ],
        },
        {
          id: 'esg6-p4-match',
          type: 'MATCHING',
          instruction: 'Relacione la frase con lo que expresa.',
          left: [
            { id: 'm1', text: 'Trabajaba en una panadería.' },
            { id: 'm2', text: 'Trabajé tres años en una panadería.' },
            { id: 'm3', text: 'Eran las cinco.' },
            { id: 'm4', text: 'Dieron las cinco.' },
          ],
          right: [
            { id: 'n1', text: 'Damaliger Zustand, ohne Anfang und Ende' },
            { id: 'n2', text: 'Abgegrenzter Zeitraum als ein Vorgang' },
            { id: 'n3', text: 'Uhrzeit als Hintergrund' },
            { id: 'n4', text: 'Der Glockenschlag als Ereignis' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'n1' },
            { leftId: 'm2', rightId: 'n2' },
            { leftId: 'm3', rightId: 'n3' },
            { leftId: 'm4', rightId: 'n4' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – beides im zusammenhängenden Text.
  {
    order: 5,
    title: 'Erzählen',
    subtitle: 'Beide Zeiten in einem Text',
    estimatedMinutes: 20,
    content: {
      version: v,
      blocks: [
        { id: 'esg6-p5-h1', type: 'HEADING', level: 1, text: 'Erzählen' },
        {
          id: 'esg6-p5-intro',
          type: 'TEXT',
          text: 'En un relato real los dos tiempos no se turnan por frases, sino que se entrelazan: el imperfecto abre la escena, el indefinido la mueve, el imperfecto vuelve a explicar por qué las cosas estaban así. Leer un texto entero ayuda más que cualquier regla.',
          translations: {
            de: 'In einer wirklichen Erzählung wechseln sich die beiden Zeiten nicht satzweise ab, sondern verschränken sich: Das Imperfecto eröffnet die Szene, das Indefinido bewegt sie, das Imperfecto erklärt wieder, warum die Dinge so standen. Ein ganzer Text hilft mehr als jede Regel.',
          },
        },
        {
          id: 'esg6-p5-dialogo',
          type: 'DIALOGUE',
          title: 'Un viaje que salió mal',
          lines: [
            {
              speaker: 'Lucía',
              text: 'El verano pasado quisimos ir a Portugal en coche.',
              translation: 'Letzten Sommer wollten wir mit dem Auto nach Portugal.',
            },
            {
              speaker: 'Diego',
              text: '¿Y qué pasó? Nunca me lo contaste entero.',
              translation: 'Und was ist passiert? Du hast es mir nie ganz erzählt.',
            },
            {
              speaker: 'Lucía',
              text: 'Salimos a las seis. Todavía era de noche y no había nadie en la carretera.',
              translation: 'Wir fuhren um sechs los. Es war noch dunkel und niemand war auf der Straße.',
            },
            {
              speaker: 'Lucía',
              text: 'Conducía yo y estaba bastante tranquila, pero cerca de Badajoz el coche empezó a hacer un ruido raro.',
              translation:
                'Ich fuhr und war ziemlich ruhig, aber in der Nähe von Badajoz fing das Auto an, ein seltsames Geräusch zu machen.',
            },
            {
              speaker: 'Diego',
              text: '¿Y parasteis?',
              translation: 'Und habt ihr angehalten?',
            },
            {
              speaker: 'Lucía',
              text: 'Paramos enseguida. Llamamos al seguro, esperamos dos horas y al final volvimos a casa en tren.',
              translation:
                'Wir hielten sofort an. Wir riefen die Versicherung an, warteten zwei Stunden und fuhren schließlich mit dem Zug nach Hause.',
            },
          ],
        },
        {
          id: 'esg6-p5-choice',
          type: 'CHOICE',
          instruction: 'Marque todo lo que sea cierto sobre el diálogo.',
          question: '¿Qué función tienen los tiempos en el relato de Lucía?',
          options: [
            { id: 'c1', text: '«era de noche» y «no había nadie» describen la situación de partida.' },
            { id: 'c2', text: '«empezó» marca el hecho que cambia la historia.' },
            { id: 'c3', text: '«conducía» indica que condujo una sola vez y terminó.' },
            { id: 'c4', text: '«paramos, llamamos, esperamos, volvimos» encadenan los hechos.' },
          ],
          multiple: true,
          solution: ['c1', 'c2', 'c4'],
          explanation:
            '«Conducía» no cuenta un hecho: describe lo que estaba ocurriendo cuando llegó el ruido. Para contarlo como hecho cerrado haría falta «conduje».',
          explanationTranslations: {
            de: '„Conducía“ berichtet keinen Vorgang, sondern beschreibt, was gerade geschah, als das Geräusch kam. Als abgeschlossener Vorgang hieße es „conduje“.',
          },
        },
        {
          id: 'esg6-p5-cloze',
          type: 'CLOZE',
          instruction: 'Complete el relato con el tiempo adecuado.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Aquella mañana ' },
            { kind: 'GAP', gapId: 'z1', solution: ['hacía'], hint: 'hacer frío – Kulisse', width: 8 },
            { kind: 'TEXT', text: ' mucho frío y la calle ' },
            { kind: 'GAP', gapId: 'z2', solution: ['estaba'], hint: 'estar vacía – Kulisse', width: 8 },
            { kind: 'TEXT', text: ' vacía. Yo ' },
            { kind: 'GAP', gapId: 'z3', solution: ['salí'], hint: 'salir – Vorgang', width: 7 },
            { kind: 'TEXT', text: ' de casa a las siete y ' },
            { kind: 'GAP', gapId: 'z4', solution: ['cogí'], hint: 'coger el autobús – Vorgang', width: 7 },
            { kind: 'TEXT', text: ' el primer autobús. Mientras ' },
            { kind: 'GAP', gapId: 'z5', solution: ['leía'], hint: 'leer – im Gange', width: 7 },
            { kind: 'TEXT', text: ' el periódico, alguien me ' },
            { kind: 'GAP', gapId: 'z6', solution: ['tocó'], hint: 'tocar el hombro – Vorgang', width: 7 },
            { kind: 'TEXT', text: ' el hombro: ' },
            { kind: 'GAP', gapId: 'z7', solution: ['era'], hint: 'ser – Beschreibung', width: 6 },
            { kind: 'TEXT', text: ' mi antiguo profesor.' },
          ],
        },
        {
          id: 'esg6-p5-order',
          type: 'ORDERING',
          instruction: 'Ordene las frases para formar un relato coherente.',
          items: [
            { id: 'o1', text: 'Era sábado y no teníamos planes.' },
            { id: 'o2', text: 'De repente, Marta propuso ir a la playa.' },
            { id: 'o3', text: 'Preparamos unos bocadillos y salimos enseguida.' },
            { id: 'o4', text: 'Cuando llegamos, ya no cabía ni un coche.' },
            { id: 'o5', text: 'Al final aparcamos lejos y bajamos andando.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5'],
        },
        {
          id: 'esg6-p5-writing',
          type: 'WRITING',
          instruction: 'Erzählen Sie eine Begebenheit.',
          prompt:
            'Cuente algo que le pasó: un viaje, una mudanza, un día que salió al revés. Empiece describiendo la situación en imperfecto y siga contando los hechos en indefinido. Escriba de ocho a doce frases.',
          minWords: 60,
          maxWords: 140,
          aiFeedback: true,
          sampleAnswer:
            'Hace dos años vivía en un piso muy pequeño cerca del centro. No tenía ascensor y la cocina era oscura, pero el alquiler era barato y no me quejaba. Un lunes de febrero volví del trabajo y vi agua en el pasillo. El vecino de arriba se había ido de viaje y una tubería se rompió esa misma mañana. Llamé al casero, que no contestó, así que avisé a los bomberos. Estuvimos tres horas sacando agua. Aquella noche dormí en casa de mi hermana y al día siguiente empecé a buscar otro piso.',
        },
      ],
    },
  },
];
