import type { UnitSeed } from './chapter-beginner-1';

/**
 * Spanisch, Advanced, Kapitel 6: „Medios y discurso“
 *
 * Fünf Seiten. Das letzte C1-Kapitel liest Texte gegen den Strich: nicht
 * mehr „Was steht da?“, sondern „Was soll ich dabei denken, und woran merke
 * ich das?“. Framing, Suggestivfragen, Trugschlüsse – jeweils mit dem
 * sprachlichen Merkmal, an dem man sie erkennt.
 *
 * Aufbau: Seite 1 legt den Wortschatz, Seite 2 das Framing durch
 * Wortwahl, Seite 3 Präsuppositionen und Suggestivfragen, Seite 4 die
 * häufigsten Trugschlüsse, Seite 5 die Analyse eines ganzen Kommentars.
 *
 * Die Beispielschlagzeilen und -kommentare sind erfunden; reale Medien und
 * Parteien werden bewusst nicht genannt, damit die Übung an der Sprache
 * hängt und nicht am Lager. Sämtliche Texte sind eigenständig verfasst.
 */
const v = 1;

export const SPANISH_ADVANCED_6_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – das Vokabular der Diskursanalyse.
  {
    order: 1,
    title: 'Lo que dice y lo que hace',
    subtitle: 'Der Wortschatz der Diskursanalyse',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'esa6-p1-h1', type: 'HEADING', level: 1, text: 'Lo que dice y lo que hace' },
        {
          id: 'esa6-p1-intro',
          type: 'TEXT',
          text: 'Todo texto informa de algo y, a la vez, hace algo con quien lo lee: lo tranquiliza, lo alarma, lo pone de un lado. Un titular puede ser exacto en cada palabra y, aun así, conducir a una conclusión falsa. Este capítulo trata de esa segunda capa, la que no se ve si solo se comprueba si los datos son ciertos.',
        },
        {
          id: 'esa6-p1-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: discurso y manipulación',
          items: [
            { term: 'el encuadre', translations: { en: 'framing', de: 'das Framing, die Rahmung' } },
            { term: 'el titular', translations: { en: 'headline', de: 'die Schlagzeile' } },
            { term: 'la fuente', translations: { en: 'source', de: 'die Quelle' } },
            { term: 'el eufemismo', translations: { en: 'euphemism', de: 'der Euphemismus' } },
            { term: 'la falacia', translations: { en: 'fallacy', de: 'der Trugschluss' } },
            { term: 'la desinformación', translations: { en: 'disinformation', de: 'die Desinformation' } },
            {
              term: 'insinuar',
              translations: { en: 'to insinuate', de: 'andeuten, unterstellen' },
              example: 'El texto insinúa, sin decirlo, que el alcalde mintió.',
            },
            { term: 'tergiversar', translations: { en: 'to distort', de: 'verdrehen, entstellen' } },
            {
              term: 'descontextualizar',
              translations: { en: 'to take out of context', de: 'aus dem Zusammenhang reißen' },
            },
            { term: 'la presuposición', translations: { en: 'presupposition', de: 'die Präsupposition, stillschweigende Voraussetzung' } },
            { term: 'el sesgo informativo', translations: { en: 'media bias', de: 'die einseitige Berichterstattung' } },
            { term: 'desmentir', translations: { en: 'to deny, to refute', de: 'dementieren, widerlegen' } },
          ],
        },
        {
          id: 'esa6-p1-info-niveles',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Tres maneras de engañar sin mentir',
          text: 'La mentira es arriesgada: se puede desmentir. Por eso el discurso interesado prefiere procedimientos que no son falsos en sentido estricto. Se puede seleccionar: contar solo los datos favorables. Se puede encuadrar: elegir las palabras que activan una interpretación. Y se puede presuponer: dar por hecho, sin afirmarlo, algo que no está probado.',
          table: {
            headers: ['Procedimiento', 'Ejemplo', 'Qué oculta'],
            rows: [
              ['selección', 'El paro juvenil bajó en marzo.', 'que subió en los once meses anteriores'],
              ['encuadre', 'una avalancha de solicitudes', 'que la cifra es normal para la época'],
              ['presuposición', '¿Cuándo dejará el ministro de mentir?', 'que no se ha probado que mintiera'],
            ],
          },
        },
        {
          id: 'esa6-p1-match',
          type: 'MATCHING',
          instruction: 'Relacione cada caso con el término que lo describe.',
          left: [
            { id: 'a1', text: 'Se cita solo la mitad de una frase del entrevistado, que dice lo contrario completa.' },
            { id: 'a2', text: 'Una empresa llama «ajuste de plantilla» a doscientos despidos.' },
            { id: 'a3', text: 'Un titular afirma «Los expertos alertan» y cita a una sola persona.' },
            { id: 'a4', text: 'Se difunde a sabiendas un dato falso para influir en unas elecciones.' },
          ],
          right: [
            { id: 'b1', text: 'descontextualizar' },
            { id: 'b2', text: 'eufemismo' },
            { id: 'b3', text: 'generalización a partir de una fuente' },
            { id: 'b4', text: 'desinformación' },
          ],
          solution: [
            { leftId: 'a1', rightId: 'b1' },
            { leftId: 'a2', rightId: 'b2' },
            { leftId: 'a3', rightId: 'b3' },
            { leftId: 'a4', rightId: 'b4' },
          ],
        },
        {
          id: 'esa6-p1-cloze',
          type: 'CLOZE',
          instruction: 'Complete el texto.',
          wordBank: ['fuente', 'titular', 'desmintió', 'insinúa', 'tergiversa'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'El ' },
            { kind: 'GAP', gapId: 'g1', solution: ['titular'], width: 8 },
            { kind: 'TEXT', text: ' dice «El concejal cobró de una constructora». No lo afirma el cuerpo de la noticia, que solo ' },
            { kind: 'GAP', gapId: 'g2', solution: ['insinúa', 'insinua'], width: 8 },
            { kind: 'TEXT', text: ' una relación. La única ' },
            { kind: 'GAP', gapId: 'g3', solution: ['fuente'], width: 7 },
            { kind: 'TEXT', text: ' es anónima. El concejal lo ' },
            { kind: 'GAP', gapId: 'g4', solution: ['desmintió', 'desmintio'], width: 10 },
            { kind: 'TEXT', text: ' ese mismo día. Un titular así ' },
            { kind: 'GAP', gapId: 'g5', solution: ['tergiversa'], width: 11 },
            { kind: 'TEXT', text: ' la información que contiene la noticia.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – Framing durch Wortwahl und Metaphern.
  {
    order: 2,
    title: 'El encuadre',
    subtitle: 'Wie Wörter einen Rahmen setzen',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'esa6-p2-h1', type: 'HEADING', level: 1, text: 'El encuadre' },
        {
          id: 'esa6-p2-intro',
          type: 'TEXT',
          text: '«Recortes» y «ajustes» pueden referirse a la misma reducción del gasto público. La primera palabra evoca algo que se mutila; la segunda, algo que se pone en su sitio. Quien elige una u otra no miente, pero decide desde qué marco va a pensar el lector el problema. Ese marco se llama encuadre, y funciona mejor cuanto menos se nota.',
        },
        {
          id: 'esa6-p2-info-pares',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Pares que encuadran',
          text: 'Cada par de la tabla puede designar la misma realidad. Ninguna de las opciones es neutra del todo: incluso la palabra técnica implica una perspectiva. Lo que el lector atento hace no es buscar la palabra «objetiva», sino notar qué marco activa cada una y qué deja fuera.',
          table: {
            headers: ['Marco A', 'Marco B', 'Qué cambia'],
            rows: [
              ['recortes', 'ajustes', 'daño frente a corrección'],
              ['carga fiscal', 'contribución', 'peso frente a aportación'],
              ['okupas', 'personas sin vivienda que ocupan un inmueble', 'delito frente a necesidad'],
              ['inmigrantes ilegales', 'personas en situación irregular', 'la persona frente a su situación administrativa'],
              ['guerra contra la droga', 'política de drogas', 'combate frente a gestión'],
            ],
          },
        },
        {
          id: 'esa6-p2-choice',
          type: 'CHOICE',
          instruction: 'Elija la respuesta correcta.',
          question: 'Un periódico titula: «Una ola de turistas inunda el centro histórico». ¿Qué efecto tiene la metáfora?',
          options: [
            { id: 'c1', text: 'Ninguno: solo describe que hay muchos turistas.' },
            { id: 'c2', text: 'Presenta a los turistas como un fenómeno natural incontrolable y dañino, lo que favorece medidas de contención.' },
            { id: 'c3', text: 'Sugiere que los turistas son bienvenidos y aportan riqueza.' },
            { id: 'c4', text: 'Indica que el centro histórico está junto al mar.' },
          ],
          multiple: false,
          solution: ['c2'],
          explanation:
            '«Ola» e «inundar» pertenecen al marco de las catástrofes naturales: algo que llega sin control y que hay que frenar. Con «el centro recibe un número récord de visitantes», el mismo dato activaría otro marco.',
        },
        {
          id: 'esa6-p2-match',
          type: 'MATCHING',
          instruction: 'Relacione cada titular con el marco que activa.',
          left: [
            { id: 't1', text: 'El Gobierno rescata a la banca con dinero público' },
            { id: 't2', text: 'El Gobierno inyecta liquidez para estabilizar el sistema financiero' },
            { id: 't3', text: 'Los sindicatos paralizan el país' },
            { id: 't4', text: 'Miles de trabajadores secundan la huelga' },
          ],
          right: [
            { id: 'u1', text: 'privilegio de unos a costa de todos' },
            { id: 'u2', text: 'medida técnica de prevención' },
            { id: 'u3', text: 'perjuicio causado por una organización' },
            { id: 'u4', text: 'apoyo masivo a una reivindicación' },
          ],
          solution: [
            { leftId: 't1', rightId: 'u1' },
            { leftId: 't2', rightId: 'u2' },
            { leftId: 't3', rightId: 'u3' },
            { leftId: 't4', rightId: 'u4' },
          ],
        },
        {
          id: 'esa6-p2-info-agente',
          type: 'INFO',
          variant: 'TIP',
          title: 'El encuadre gramatical: quién aparece como sujeto',
          text: 'El encuadre no depende solo de las palabras, sino también de la sintaxis. «La policía disparó contra los manifestantes» y «Varios manifestantes resultaron heridos en los enfrentamientos» pueden narrar lo mismo; en la segunda, el agente ha desaparecido y los heridos parecen haberlo sido por azar. La pasiva, el «se» impersonal y la nominalización son las herramientas habituales para borrar a quien actúa.',
          table: {
            headers: ['Construcción', 'Ejemplo', 'Agente'],
            rows: [
              ['activa', 'La empresa despidió a 200 personas.', 'visible'],
              ['pasiva sin agente', '200 personas fueron despedidas.', 'oculto'],
              ['se impersonal', 'Se despidió a 200 personas.', 'oculto'],
              ['nominalización', 'Los despidos afectaron a 200 personas.', 'desaparecido'],
            ],
          },
        },
        {
          id: 'esa6-p2-ordering',
          type: 'ORDERING',
          instruction: 'Ordene las versiones de la que más a la que menos visibiliza al responsable.',
          items: [
            { id: 'o1', text: 'El ayuntamiento cerró la biblioteca del barrio.' },
            { id: 'o2', text: 'La biblioteca del barrio fue cerrada por el ayuntamiento.' },
            { id: 'o3', text: 'Se cerró la biblioteca del barrio.' },
            { id: 'o4', text: 'El cierre de la biblioteca afectó a cientos de lectores.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4'],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – Präsuppositionen und Suggestivfragen.
  {
    order: 3,
    title: 'Preguntas que ya contestan',
    subtitle: 'Präsuppositionen und Suggestivfragen',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'esa6-p3-h1', type: 'HEADING', level: 1, text: 'Preguntas que ya contestan' },
        {
          id: 'esa6-p3-intro',
          type: 'TEXT',
          text: '«¿Por qué ha fracasado el plan de vivienda?» La pregunta no pregunta si ha fracasado: lo da por hecho. Quien responde a las razones del fracaso ya ha aceptado el fracaso. Esa información que se desliza sin afirmarse se llama presuposición, y es la herramienta favorita de las entrevistas agresivas y de los debates televisivos.',
        },
        {
          id: 'esa6-p3-info-presup',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Dónde se esconden las presuposiciones',
          text: 'Ciertas palabras activan presuposiciones de forma automática. Los verbos de cambio («dejar de», «volver a», «seguir») presuponen un estado anterior. Los verbos factivos («lamentar», «reconocer», «saber que») presuponen que lo que sigue es verdad. Las preguntas con «por qué» o «cuándo» presuponen el hecho. Y los adverbios como «todavía» o «también» presuponen algo más.',
          table: {
            headers: ['Enunciado', 'Presupone'],
            rows: [
              ['¿Ha dejado usted de recibir comisiones?', 'que las recibía'],
              ['La ministra reconoce el error.', 'que hubo un error'],
              ['¿Por qué oculta el informe?', 'que lo oculta'],
              ['Otra vez sube la luz.', 'que ya había subido antes'],
              ['Todavía no ha pedido perdón.', 'que debería pedirlo'],
            ],
          },
        },
        {
          id: 'esa6-p3-match',
          type: 'MATCHING',
          instruction: 'Relacione cada pregunta con lo que presupone.',
          left: [
            { id: 'p1', text: '¿Cuándo va a devolver el dinero?' },
            { id: 'p2', text: '¿Sigue usted defendiendo esa ley?' },
            { id: 'p3', text: '¿Lamenta haber mentido al Parlamento?' },
            { id: 'p4', text: '¿Por qué su partido vuelve a subir los impuestos?' },
          ],
          right: [
            { id: 'q1', text: 'que se quedó con un dinero que no era suyo' },
            { id: 'q2', text: 'que antes la defendía' },
            { id: 'q3', text: 'que mintió al Parlamento' },
            { id: 'q4', text: 'que ya los había subido antes' },
          ],
          solution: [
            { leftId: 'p1', rightId: 'q1' },
            { leftId: 'p2', rightId: 'q2' },
            { leftId: 'p3', rightId: 'q3' },
            { leftId: 'p4', rightId: 'q4' },
          ],
        },
        {
          id: 'esa6-p3-info-desactivar',
          type: 'INFO',
          variant: 'TIP',
          title: 'Desactivar la presuposición',
          text: 'Ante una pregunta cargada, responder a lo que se pregunta es aceptar lo que se presupone. La estrategia es nombrar la presuposición y rechazarla antes de contestar: «Su pregunta da por hecho algo que no es cierto…», «Permítame corregir la premisa…», «Antes de responder, conviene aclarar que…».',
        },
        {
          id: 'esa6-p3-choice',
          type: 'CHOICE',
          instruction: 'Elija la mejor respuesta.',
          question: 'Un periodista pregunta a una alcaldesa: «¿Por qué ha dejado usted que el barrio se degrade?». ¿Qué respuesta desactiva la presuposición?',
          options: [
            { id: 'r1', text: 'Porque no teníamos presupuesto suficiente.' },
            { id: 'r2', text: 'La culpa es del gobierno anterior.' },
            {
              id: 'r3',
              text: 'Su pregunta da por hecho que el barrio se ha degradado, y los datos de seguridad y limpieza dicen lo contrario. Si quiere, le explico qué ha cambiado.',
            },
            { id: 'r4', text: 'Estamos trabajando para solucionarlo cuanto antes.' },
          ],
          multiple: false,
          solution: ['r3'],
          explanation:
            'Las respuestas 1, 2 y 4 aceptan que el barrio se ha degradado y solo discuten la causa o el remedio. La tercera nombra la presuposición y la cuestiona antes de seguir.',
        },
        {
          id: 'esa6-p3-cloze',
          type: 'CLOZE',
          instruction: 'Complete con el elemento que activa la presuposición indicada.',
          wordBank: ['vuelve a', 'reconoce', 'todavía', 'dejado de'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'El director ' },
            { kind: 'GAP', gapId: 's1', solution: ['reconoce'], hint: 'presupone que es verdad', width: 9 },
            { kind: 'TEXT', text: ' que hubo errores. La empresa ' },
            { kind: 'GAP', gapId: 's2', solution: ['vuelve a'], hint: 'presupone que ya pasó', width: 9 },
            { kind: 'TEXT', text: ' subir los precios. ¿Ha ' },
            { kind: 'GAP', gapId: 's3', solution: ['dejado de'], hint: 'presupone un estado anterior', width: 10 },
            { kind: 'TEXT', text: ' contaminar el río? Y ' },
            { kind: 'GAP', gapId: 's4', solution: ['todavía', 'todavia'], hint: 'presupone que debería haber ocurrido', width: 8 },
            { kind: 'TEXT', text: ' no ha presentado el plan.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – die häufigsten Trugschlüsse.
  {
    order: 4,
    title: 'Falacias',
    subtitle: 'Trugschlüsse erkennen und benennen',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'esa6-p4-h1', type: 'HEADING', level: 1, text: 'Falacias' },
        {
          id: 'esa6-p4-intro',
          type: 'TEXT',
          text: 'Una falacia es un razonamiento que parece válido y no lo es. Su fuerza está en que funciona: convence a quien no se detiene. Saber nombrarla sirve para dos cosas. Primero, para no dejarse arrastrar. Segundo, para responder en un debate con una sola frase que desmonta el argumento en lugar de discutir su conclusión.',
        },
        {
          id: 'esa6-p4-info-falacias',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Seis falacias frecuentes',
          text: 'La lista no es completa, pero cubre la mayor parte de lo que se oye en tertulias y redes sociales. Fíjese en las marcas lingüísticas típicas de cada una.',
          table: {
            headers: ['Falacia', 'En qué consiste', 'Marca típica'],
            rows: [
              ['ad hominem', 'atacar a la persona, no al argumento', '¿Y lo dice usted, que…?'],
              ['hombre de paja', 'deformar la postura contraria para rebatirla', 'O sea, que usted quiere…'],
              ['falso dilema', 'presentar solo dos opciones', 'O estás con nosotros o contra nosotros.'],
              ['pendiente resbaladiza', 'encadenar consecuencias sin probarlas', 'Hoy es esto; mañana…'],
              ['generalización apresurada', 'concluir de pocos casos', 'Conozco a uno que…, así que todos…'],
              ['falsa autoridad', 'invocar a quien no es experto en el tema', 'Hasta un famoso actor lo recomienda.'],
            ],
          },
        },
        {
          id: 'esa6-p4-match',
          type: 'MATCHING',
          instruction: 'Relacione cada intervención con la falacia que comete.',
          left: [
            { id: 'f1', text: '«Si permitimos terrazas hasta las doce, pronto será hasta las tres y luego no dormirá nadie.»' },
            { id: 'f2', text: '«O subimos los impuestos o cerramos los hospitales.»' },
            { id: 'f3', text: '«Mi vecino cobra el subsidio y no busca trabajo: los parados no quieren trabajar.»' },
            { id: 'f4', text: '«¿Usted habla de ecología, con el coche que tiene?»' },
            { id: 'f5', text: '«O sea, que usted quiere abrir las fronteras a todo el mundo sin control.»' },
          ],
          right: [
            { id: 'g1', text: 'pendiente resbaladiza' },
            { id: 'g2', text: 'falso dilema' },
            { id: 'g3', text: 'generalización apresurada' },
            { id: 'g4', text: 'ad hominem' },
            { id: 'g5', text: 'hombre de paja' },
          ],
          solution: [
            { leftId: 'f1', rightId: 'g1' },
            { leftId: 'f2', rightId: 'g2' },
            { leftId: 'f3', rightId: 'g3' },
            { leftId: 'f4', rightId: 'g4' },
            { leftId: 'f5', rightId: 'g5' },
          ],
        },
        {
          id: 'esa6-p4-info-responder',
          type: 'INFO',
          variant: 'TIP',
          title: 'Responder a una falacia',
          text: 'Acusar al otro de cometer una falacia con su nombre técnico suena pedante y rara vez convence al público. Es más eficaz mostrar el mecanismo con palabras normales: «Yo no he dicho eso; lo que he dicho es…» (hombre de paja), «Hay más opciones que esas dos» (falso dilema), «Hablemos del argumento, no de mi coche» (ad hominem).',
        },
        {
          id: 'esa6-p4-choice',
          type: 'CHOICE',
          instruction: 'Elija la respuesta más eficaz.',
          question: 'En un debate le dicen: «O construimos la autopista o esta comarca se muere». ¿Qué respuesta desmonta mejor la falacia?',
          options: [
            { id: 'h1', text: 'Eso es un falso dilema, una falacia informal bien conocida.' },
            { id: 'h2', text: 'Hay más de dos caminos: se puede mejorar el tren o la carretera actual, y ambas opciones cuestan menos.' },
            { id: 'h3', text: 'Usted siempre exagera en todo lo que dice.' },
            { id: 'h4', text: 'Pues que se muera, si es lo que quiere la gente.' },
          ],
          multiple: false,
          solution: ['h2'],
          explanation:
            'La segunda respuesta muestra que existen otras opciones, y eso basta para deshacer el dilema. La primera tiene razón, pero no convence a nadie; la tercera responde con otra falacia, un ataque personal.',
        },
        {
          id: 'esa6-p4-cloze',
          type: 'CLOZE',
          instruction: 'Complete el análisis.',
          wordBank: ['ad hominem', 'hombre de paja', 'pendiente resbaladiza', 'falsa autoridad'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Cuando el tertuliano dice que la reforma llevará «primero al caos y después a la ruina», comete una ' },
            { kind: 'GAP', gapId: 'k1', solution: ['pendiente resbaladiza'], width: 21 },
            { kind: 'TEXT', text: '. Al resumir la postura del otro como «quieren prohibir los coches», construye un ' },
            { kind: 'GAP', gapId: 'k2', solution: ['hombre de paja'], width: 15 },
            { kind: 'TEXT', text: '. Al recordar el divorcio de la ministra, incurre en un ' },
            { kind: 'GAP', gapId: 'k3', solution: ['ad hominem'], width: 11 },
            { kind: 'TEXT', text: '. Y al citar a un futbolista como experto en energía, recurre a una ' },
            { kind: 'GAP', gapId: 'k4', solution: ['falsa autoridad'], width: 16 },
            { kind: 'TEXT', text: '.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – einen ganzen Kommentar analysieren; Wiederholung.
  {
    order: 5,
    title: 'Leer contra el texto',
    subtitle: 'Einen Kommentar analysieren',
    estimatedMinutes: 34,
    content: {
      version: v,
      blocks: [
        { id: 'esa6-p5-h1', type: 'HEADING', level: 1, text: 'Leer contra el texto' },
        {
          id: 'esa6-p5-text',
          type: 'TEXT',
          text: '«Otra vez el Ayuntamiento nos castiga. La nueva tasa de basuras, que ya han bautizado como "tasa verde" para que suene mejor, es un sablazo más a unas familias asfixiadas. ¿Hasta cuándo van a seguir metiendo la mano en nuestro bolsillo? Mi cuñado, que es autónomo, ya paga más en impuestos que en alquiler. Si aceptamos esta tasa, mañana nos cobrarán por respirar. O el alcalde la retira, o esta ciudad se vaciará.»',
        },
        {
          id: 'esa6-p5-choice',
          type: 'CHOICE',
          instruction: 'Marque todos los procedimientos presentes en el texto.',
          question: '¿Qué recursos de los estudiados en el capítulo aparecen en el comentario?',
          options: [
            { id: 'x1', text: 'Presuposición con «otra vez» y «seguir».' },
            { id: 'x2', text: 'Generalización apresurada a partir del cuñado.' },
            { id: 'x3', text: 'Pendiente resbaladiza: «mañana nos cobrarán por respirar».' },
            { id: 'x4', text: 'Falso dilema en la frase final.' },
            { id: 'x5', text: 'Cita precisa de datos oficiales sobre la tasa.' },
          ],
          multiple: true,
          solution: ['x1', 'x2', 'x3', 'x4'],
          explanation:
            'El texto no aporta ni un solo dato sobre la tasa: ni su importe ni su destino. Todo su efecto descansa en el encuadre («castiga», «sablazo», «asfixiadas»), las presuposiciones y tres falacias encadenadas.',
        },
        {
          id: 'esa6-p5-info-analisis',
          type: 'INFO',
          variant: 'TIP',
          title: 'Cómo analizar un texto persuasivo',
          text: 'Un análisis ordenado va de lo que el texto quiere a cómo lo consigue. Primero, la tesis: ¿qué quiere que piense el lector? Después, los datos: ¿qué se afirma y con qué fuentes? Luego, el encuadre: ¿qué palabras y metáforas dominan? Por último, los razonamientos: ¿hay presuposiciones o falacias? La conclusión valora si el texto informa o solo moviliza.',
          table: {
            headers: ['Paso', 'Pregunta'],
            rows: [
              ['tesis', '¿Qué quiere que piense o haga el lector?'],
              ['datos', '¿Qué hechos aporta y de dónde salen?'],
              ['encuadre', '¿Qué marcos activan sus palabras?'],
              ['razonamiento', '¿Qué da por hecho? ¿Qué falacias usa?'],
              ['valoración', '¿Informa o solo moviliza?'],
            ],
          },
        },
        {
          id: 'esa6-p5-cloze',
          type: 'CLOZE',
          instruction: 'Complete el resumen del capítulo.',
          wordBank: ['encuadre', 'agente', 'presupone', 'falacia', 'dilema', 'fuentes'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Elegir «recortes» o «ajustes» es una cuestión de ' },
            { kind: 'GAP', gapId: 'z1', solution: ['encuadre'], width: 9 },
            { kind: 'TEXT', text: '. La pasiva y el «se» impersonal pueden ocultar al ' },
            { kind: 'GAP', gapId: 'z2', solution: ['agente'], width: 7 },
            { kind: 'TEXT', text: '. «¿Por qué oculta el informe?» ' },
            { kind: 'GAP', gapId: 'z3', solution: ['presupone'], width: 10 },
            { kind: 'TEXT', text: ' que lo oculta. Una ' },
            { kind: 'GAP', gapId: 'z4', solution: ['falacia'], width: 8 },
            { kind: 'TEXT', text: ' parece un razonamiento válido sin serlo; ofrecer solo dos opciones es un falso ' },
            { kind: 'GAP', gapId: 'z5', solution: ['dilema'], width: 7 },
            { kind: 'TEXT', text: '. Y antes de creer un texto conviene preguntarse por sus ' },
            { kind: 'GAP', gapId: 'z6', solution: ['fuentes'], width: 8 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'esa6-p5-writing',
          type: 'WRITING',
          instruction: 'Escriba un análisis.',
          prompt:
            'Analice el comentario sobre la tasa de basuras de esta página en un texto de entre 180 y 260 palabras. Siga los pasos del cuadro: tesis, datos, encuadre, razonamiento y valoración. Identifique al menos dos presuposiciones y dos falacias, cite las expresiones concretas y explique su efecto. Termine indicando qué información necesitaría un lector para formarse una opinión propia.',
          minWords: 180,
          maxWords: 270,
          aiFeedback: true,
          sampleAnswer:
            'El comentario defiende una tesis clara: la nueva tasa de basuras es injusta y el alcalde debe retirarla.\n\nLlama la atención, en primer lugar, la ausencia de datos. El texto no indica cuánto cuesta la tasa, a quién afecta ni a qué se destinará lo recaudado. La única prueba es un caso particular, el del cuñado autónomo, del que se deduce la situación de todas las familias: una generalización apresurada.\n\nEl efecto persuasivo descansa en el encuadre. El Ayuntamiento no cobra, sino que «castiga»; la tasa no es un pago, sino un «sablazo»; las familias no tienen gastos, sino que están «asfixiadas». Todo el vocabulario procede del marco de la agresión.\n\nA ello se suman las presuposiciones. «Otra vez» y «seguir metiendo la mano» dan por hecho que el Ayuntamiento lleva tiempo abusando, sin demostrarlo, y la pregunta retórica «¿Hasta cuándo…?» impide cualquier respuesta que no acepte esa premisa.\n\nEl razonamiento culmina con dos falacias. «Mañana nos cobrarán por respirar» es una pendiente resbaladiza, y el cierre —o se retira la tasa o la ciudad se vaciará— plantea un falso dilema que excluye cualquier término medio, como una tasa reducida para las rentas bajas.\n\nEn conjunto, el texto moviliza más que informa. Para formarse una opinión, el lector necesitaría saber el importe de la tasa, cómo se compara con la de otras ciudades, si existen bonificaciones y qué servicio financiará.',
        },
      ],
    },
  },
];
