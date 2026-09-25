import type { UnitSeed } from './chapter-beginner-1';

/**
 * Spanisch, Advanced, Kapitel 7: „Retórica y persuasión“
 *
 * Fünf Seiten. Das erste C2-Kapitel dreht die Blickrichtung von Kapitel 6
 * um: Dort wurde Rhetorik durchschaut, hier wird sie gebaut. Rhetorik als
 * Handwerk – Aufbau, Figuren, Umgang mit dem Einwand, Schluss.
 *
 * Aufbau: Seite 1 die drei Überzeugungsmittel (ethos, pathos, logos),
 * Seite 2 die klassische Gliederung einer Rede, Seite 3 die Figuren der
 * gesprochenen Rede (Trikolon, Anapher, Chiasmus, rhetorische Frage),
 * Seite 4 das Einräumen als Angriff, Seite 5 Anfang und Schluss und eine
 * eigene Rede.
 *
 * Die Redeausschnitte sind eigens verfasst. Sämtliche Texte sind
 * eigenständig formuliert.
 */
const v = 1;

export const SPANISH_ADVANCED_7_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – ethos, pathos, logos.
  {
    order: 1,
    title: 'Tres maneras de convencer',
    subtitle: 'Ethos, pathos, logos',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'esa7-p1-h1', type: 'HEADING', level: 1, text: 'Tres maneras de convencer' },
        {
          id: 'esa7-p1-intro',
          type: 'TEXT',
          text: 'Hace más de dos mil años, Aristóteles observó que un orador convence por tres vías: por lo que es, por lo que hace sentir y por lo que demuestra. La clasificación ha sobrevivido a todos los cambios de medio —del ágora a la radio, de la radio a los vídeos de un minuto— porque describe algo que no depende del medio, sino de cómo decidimos a quién creer.',
        },
        {
          id: 'esa7-p1-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: el oficio del orador',
          items: [
            { term: 'el orador, la oradora', translations: { en: 'speaker, orator', de: 'der Redner, die Rednerin' } },
            { term: 'el auditorio', translations: { en: 'audience', de: 'das Publikum, die Zuhörerschaft' } },
            { term: 'la credibilidad', translations: { en: 'credibility', de: 'die Glaubwürdigkeit' } },
            { term: 'apelar a', translations: { en: 'to appeal to', de: 'appellieren an' }, example: 'apelar a las emociones' },
            { term: 'conmover', translations: { en: 'to move (emotionally)', de: 'rühren, bewegen' } },
            { term: 'rebatir', translations: { en: 'to rebut', de: 'widerlegen, entkräften' } },
            { term: 'la objeción', translations: { en: 'objection', de: 'der Einwand' } },
            { term: 'captar la atención', translations: { en: 'to catch attention', de: 'Aufmerksamkeit gewinnen' } },
            { term: 'el golpe de efecto', translations: { en: 'coup de théâtre, punchline', de: 'der Knalleffekt, die Pointe' } },
            { term: 'la elocuencia', translations: { en: 'eloquence', de: 'die Beredsamkeit' } },
          ],
        },
        {
          id: 'esa7-p1-info-pruebas',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Las tres pruebas',
          text: 'El ethos es la credibilidad del orador: su experiencia, su honradez, la impresión de que habla en interés del auditorio. El pathos es la emoción que despierta: indignación, esperanza, miedo, compasión. El logos es el razonamiento: datos, ejemplos, causas y consecuencias. Un buen discurso los combina; uno que solo usa uno de ellos suena a informe, a sermón o a panfleto.',
          table: {
            headers: ['Prueba', 'Pregunta del público', 'Ejemplo'],
            rows: [
              ['ethos', '¿Por qué debo creerle a usted?', 'Llevo veinte años atendiendo urgencias en este hospital.'],
              ['pathos', '¿Por qué debería importarme?', 'Anoche una madre esperó seis horas con su hijo en brazos.'],
              ['logos', '¿Es verdad y se sigue de ello?', 'El tiempo de espera ha pasado de dos a cinco horas en tres años.'],
            ],
          },
        },
        {
          id: 'esa7-p1-match',
          type: 'MATCHING',
          instruction: 'Relacione cada frase con la prueba que predomina.',
          left: [
            { id: 'a1', text: 'Como alcaldesa de este pueblo durante doce años, conozco cada una de sus calles.' },
            { id: 'a2', text: 'Piensen en sus hijos, que heredarán lo que hoy decidamos.' },
            { id: 'a3', text: 'Si la tarifa sube un 10 % y el uso baja un 15 %, la recaudación disminuye.' },
          ],
          right: [
            { id: 'b1', text: 'ethos' },
            { id: 'b2', text: 'pathos' },
            { id: 'b3', text: 'logos' },
          ],
          solution: [
            { leftId: 'a1', rightId: 'b1' },
            { leftId: 'a2', rightId: 'b2' },
            { leftId: 'a3', rightId: 'b3' },
          ],
        },
        {
          id: 'esa7-p1-info-equilibrio',
          type: 'INFO',
          variant: 'TIP',
          title: 'El ethos se gana también con lo que se concede',
          text: 'Paradójicamente, uno de los modos más eficaces de ganar credibilidad es reconocer límites: «no tengo todas las respuestas», «en esto mis adversarios tienen razón». El público desconfía de quien lo sabe todo y de quien no ve ningún mérito en el contrario. Un pathos excesivo, en cambio, destruye el ethos: se percibe como manipulación.',
        },
        {
          id: 'esa7-p1-choice',
          type: 'CHOICE',
          instruction: 'Elija la mejor apertura.',
          question: 'Una ingeniera defiende ante los vecinos un proyecto de parque eólico. ¿Qué inicio combina mejor las tres pruebas?',
          options: [
            { id: 'c1', text: 'El proyecto es técnicamente perfecto y no admite discusión.' },
            {
              id: 'c2',
              text: 'Vivo a dos kilómetros de donde irán los molinos, como muchos de ustedes. Sé que les preocupa el ruido, y por eso traigo las mediciones de tres parques iguales: ninguno supera los niveles de una calle tranquila.',
            },
            { id: 'c3', text: '¡Imaginen un futuro sin contaminación, lleno de luz y esperanza para todos!' },
            { id: 'c4', text: 'Según la norma técnica 61400, los aerogeneradores de clase II cumplen los requisitos.' },
          ],
          multiple: false,
          solution: ['c2'],
          explanation:
            'La segunda opción establece un ethos de vecina afectada, reconoce una emoción del público y responde con datos. La primera es solo autoridad, la tercera solo emoción y la cuarta solo tecnicismo.',
        },
        {
          id: 'esa7-p1-cloze',
          type: 'CLOZE',
          instruction: 'Complete el texto.',
          wordBank: ['auditorio', 'credibilidad', 'apela', 'rebatir', 'objeción'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Antes de hablar, el orador estudia a su ' },
            { kind: 'GAP', gapId: 'g1', solution: ['auditorio'], width: 10 },
            { kind: 'TEXT', text: '. Sin ' },
            { kind: 'GAP', gapId: 'g2', solution: ['credibilidad'], width: 13 },
            { kind: 'TEXT', text: ', ningún dato convence. Quien solo ' },
            { kind: 'GAP', gapId: 'g3', solution: ['apela'], width: 6 },
            { kind: 'TEXT', text: ' a las emociones parece manipular. Y un buen discurso anticipa la principal ' },
            { kind: 'GAP', gapId: 'g4', solution: ['objeción', 'objecion'], width: 9 },
            { kind: 'TEXT', text: ' del público y la sabe ' },
            { kind: 'GAP', gapId: 'g5', solution: ['rebatir'], width: 8 },
            { kind: 'TEXT', text: ' antes de que nadie la plantee.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – die klassische Gliederung einer Rede.
  {
    order: 2,
    title: 'La arquitectura del discurso',
    subtitle: 'Eine Rede aufbauen',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'esa7-p2-h1', type: 'HEADING', level: 1, text: 'La arquitectura del discurso' },
        {
          id: 'esa7-p2-intro',
          type: 'TEXT',
          text: 'Un texto escrito puede releerse; un discurso, no. Quien escucha no puede volver atrás, y por eso el discurso necesita una arquitectura más visible que la de un ensayo: anunciar adónde va, recordar dónde está y repetir al final lo esencial. La retórica clásica fijó cinco partes que siguen siendo una guía excelente.',
        },
        {
          id: 'esa7-p2-info-partes',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Las cinco partes',
          text: 'El exordio capta la atención y predispone al público. La narración expone los hechos de forma breve y clara. La argumentación presenta las pruebas a favor de la tesis. La refutación desmonta los argumentos contrarios. La peroración, o epílogo, resume y apela al público para que actúe o recuerde.',
          table: {
            headers: ['Parte', 'Función', 'Fórmula útil'],
            rows: [
              ['exordio', 'captar y predisponer', 'Permítanme empezar con una pregunta…'],
              ['narración', 'exponer los hechos', 'Recordemos lo que ha pasado…'],
              ['argumentación', 'probar la tesis', 'Hay tres razones para…'],
              ['refutación', 'desmontar objeciones', 'Se dirá que… Pero…'],
              ['peroración', 'resumir y mover', 'Por eso les pido hoy que…'],
            ],
          },
        },
        {
          id: 'esa7-p2-ordering',
          type: 'ORDERING',
          instruction: 'Ordene los fragmentos de este discurso ante un pleno municipal.',
          items: [
            { id: 'o1', text: '¿Cuántos de ustedes han cruzado esta plaza de noche en el último mes?' },
            { id: 'o2', text: 'Desde que se retiraron las farolas en marzo, los vecinos evitan pasar por aquí.' },
            { id: 'o3', text: 'Reponer la iluminación cuesta menos que un solo mes de vigilancia privada, y devuelve la plaza a su uso.' },
            { id: 'o4', text: 'Se dirá que no hay presupuesto. Pero sí lo hubo para cambiar los bancos.' },
            { id: 'o5', text: 'Por eso les pido hoy que aprobemos la moción y devolvamos la plaza a quienes viven en ella.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5'],
        },
        {
          id: 'esa7-p2-info-senalizar',
          type: 'INFO',
          variant: 'TIP',
          title: 'Señalizar el camino',
          text: 'En la oralidad, los marcadores de estructura son más necesarios que en la escritura, e incluso más explícitos. Se anuncia la estructura («Voy a hablarles de tres cosas»), se señala el paso de una a otra («Paso ahora a la segunda») y se recapitula («Hemos visto que…»). Lo que en un ensayo sería redundante, en un discurso es una cortesía con quien escucha.',
          table: {
            headers: ['Función', 'Marcador'],
            rows: [
              ['anunciar', 'Voy a centrarme en tres aspectos.'],
              ['avanzar', 'Paso ahora a… / Vayamos a la segunda cuestión.'],
              ['recapitular', 'Hemos visto, pues, que…'],
              ['anunciar el cierre', 'Termino ya. / Y una última idea.'],
            ],
          },
        },
        {
          id: 'esa7-p2-match',
          type: 'MATCHING',
          instruction: 'Relacione cada frase con la parte del discurso a la que pertenece.',
          left: [
            { id: 'p1', text: 'Hace un año, en esta misma sala, se nos prometió un nuevo centro de salud.' },
            { id: 'p2', text: 'Hay quien sostiene que el centro no es rentable. Olvida que la salud no se mide en rentabilidad.' },
            { id: 'p3', text: 'Les pido que no dejen que otra promesa se quede en papel.' },
            { id: 'p4', text: 'Buenas tardes. Vengo a hablarles de algo que nos afecta a todos: el tiempo que tardamos en ver a un médico.' },
          ],
          right: [
            { id: 'q1', text: 'narración' },
            { id: 'q2', text: 'refutación' },
            { id: 'q3', text: 'peroración' },
            { id: 'q4', text: 'exordio' },
          ],
          solution: [
            { leftId: 'p1', rightId: 'q1' },
            { leftId: 'p2', rightId: 'q2' },
            { leftId: 'p3', rightId: 'q3' },
            { leftId: 'p4', rightId: 'q4' },
          ],
        },
        {
          id: 'esa7-p2-choice',
          type: 'CHOICE',
          instruction: 'Elija la respuesta correcta.',
          question: '¿Por qué un discurso repite al final ideas que ya ha expuesto, cuando en un texto escrito eso sería redundante?',
          options: [
            { id: 'r1', text: 'Porque el orador no ha preparado bien el final.' },
            { id: 'r2', text: 'Porque el oyente no puede releer: la repetición fija lo esencial en la memoria.' },
            { id: 'r3', text: 'Porque así el discurso dura más tiempo.' },
            { id: 'r4', text: 'Porque la retórica clásica prohíbe introducir ideas nuevas.' },
          ],
          multiple: false,
          solution: ['r2'],
          explanation:
            'La oralidad es lineal: lo que no se ha retenido se ha perdido. La recapitulación compensa esa limitación y ordena en la memoria del público lo que ha oído.',
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – die Figuren der gesprochenen Rede.
  {
    order: 3,
    title: 'El ritmo de la palabra',
    subtitle: 'Figuren der Rede',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'esa7-p3-h1', type: 'HEADING', level: 1, text: 'El ritmo de la palabra' },
        {
          id: 'esa7-p3-intro',
          type: 'TEXT',
          text: 'Las frases que se recuerdan de un discurso casi nunca son las que contenían más información. Son las que tenían forma: tres elementos en serie, una repetición al principio de cada frase, una inversión inesperada. La retórica oral se apoya en figuras que dan ritmo y hacen que una idea se pueda repetir de memoria.',
        },
        {
          id: 'esa7-p3-info-figuras',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Figuras del discurso oral',
          text: 'Todas las figuras de la tabla se basan en la repetición o en la simetría, porque el oído las detecta sin esfuerzo. El tricolon agrupa tres elementos de extensión creciente. La anáfora repite el comienzo de varias frases. El quiasmo cruza dos elementos en orden inverso. La gradación o clímax ordena de menor a mayor intensidad. La pregunta retórica no espera respuesta: la impone.',
          table: {
            headers: ['Figura', 'Esquema', 'Ejemplo'],
            rows: [
              ['tricolon', 'A, B y C', 'Vinimos a escuchar, a aprender y a cambiar las cosas.'],
              ['anáfora', 'X… / X… / X…', 'Queremos escuelas. Queremos médicos. Queremos futuro.'],
              ['quiasmo', 'A B / B A', 'No vivimos para trabajar; trabajamos para vivir.'],
              ['gradación', 'de menos a más', 'Lo dudé, lo temí, lo supe.'],
              ['pregunta retórica', 'pregunta que afirma', '¿Alguien cree de verdad que esto es justo?'],
              ['antítesis', 'contraste de ideas', 'Ellos hablan de gasto; nosotros, de inversión.'],
            ],
          },
        },
        {
          id: 'esa7-p3-match',
          type: 'MATCHING',
          instruction: 'Relacione cada frase con la figura que usa.',
          left: [
            { id: 'f1', text: 'No es la ciudad la que cambia a la gente; es la gente la que cambia la ciudad.' },
            { id: 'f2', text: 'Por nuestros padres, por nuestros hijos, por quienes todavía no han nacido.' },
            { id: 'f3', text: '¿Vamos a quedarnos de brazos cruzados?' },
            { id: 'f4', text: 'Primero lo ignoraron, luego lo criticaron y al final lo copiaron.' },
          ],
          right: [
            { id: 'g1', text: 'quiasmo' },
            { id: 'g2', text: 'anáfora y tricolon' },
            { id: 'g3', text: 'pregunta retórica' },
            { id: 'g4', text: 'gradación' },
          ],
          solution: [
            { leftId: 'f1', rightId: 'g1' },
            { leftId: 'f2', rightId: 'g2' },
            { leftId: 'f3', rightId: 'g3' },
            { leftId: 'f4', rightId: 'g4' },
          ],
        },
        {
          id: 'esa7-p3-info-tres',
          type: 'INFO',
          variant: 'TIP',
          title: 'Por qué tres',
          text: 'Dos elementos se perciben como un contraste; cuatro, como una lista. Tres dan sensación de totalidad y cierre, y el oído espera el tercero como se espera la última nota de una melodía. Por eso tantas consignas tienen tres miembros. Funciona mejor si el tercero es el más largo o el más fuerte: la frase termina en su punto más alto.',
        },
        {
          id: 'esa7-p3-cloze',
          type: 'CLOZE',
          instruction: 'Complete para formar la figura indicada.',
          caseSensitive: false,
          wordBank: ['trabajamos', 'Queremos', 'inversión', 'cambiar'],
          segments: [
            { kind: 'TEXT', text: 'Quiasmo: No vivimos para trabajar; ' },
            { kind: 'GAP', gapId: 'k1', solution: ['trabajamos'], width: 11 },
            { kind: 'TEXT', text: ' para vivir. Anáfora: Queremos trabajo. ' },
            { kind: 'GAP', gapId: 'k2', solution: ['Queremos'], width: 9 },
            { kind: 'TEXT', text: ' vivienda. Antítesis: Ellos lo llaman gasto; nosotros, ' },
            { kind: 'GAP', gapId: 'k3', solution: ['inversión', 'inversion'], width: 10 },
            { kind: 'TEXT', text: '. Tricolon: Vinimos a escuchar, a aprender y a ' },
            { kind: 'GAP', gapId: 'k4', solution: ['cambiar'], width: 8 },
            { kind: 'TEXT', text: ' las cosas.' },
          ],
        },
        {
          id: 'esa7-p3-choice',
          type: 'CHOICE',
          instruction: 'Elija la versión más eficaz para cerrar un discurso.',
          question: '¿Qué versión tiene más fuerza rítmica?',
          options: [
            { id: 'h1', text: 'Necesitamos transporte, y también vivienda, además de empleo digno para los jóvenes de la comarca.' },
            { id: 'h2', text: 'Necesitamos transporte. Necesitamos vivienda. Y, sobre todo, necesitamos que nuestros jóvenes no tengan que irse para trabajar.' },
            { id: 'h3', text: 'Transporte, vivienda, empleo, sanidad, cultura, deporte y ocio son necesarios.' },
            { id: 'h4', text: 'Hay cosas que se necesitan en la comarca.' },
          ],
          multiple: false,
          solution: ['h2'],
          explanation:
            'La segunda versión combina anáfora («Necesitamos…») y un tricolon cuyo tercer miembro es el más largo y el más cargado emocionalmente. La tercera es una lista de siete elementos: el oído no la retiene.',
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – Einräumen als Angriff: die elegante Widerlegung.
  {
    order: 4,
    title: 'Conceder para ganar',
    subtitle: 'Einwände elegant aufnehmen',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'esa7-p4-h1', type: 'HEADING', level: 1, text: 'Conceder para ganar' },
        {
          id: 'esa7-p4-intro',
          type: 'TEXT',
          text: 'La tentación de quien defiende una postura es ignorar las objeciones o descalificarlas. Ambas cosas debilitan el discurso: el público las conoce, y si el orador no las menciona pensará que no tiene respuesta. El orador hábil hace lo contrario: formula la objeción mejor que su adversario, reconoce lo que tiene de cierto y solo entonces la desmonta.',
        },
        {
          id: 'esa7-p4-info-concesion',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'La concesión táctica',
          text: 'La estructura es siempre la misma: concesión + giro + réplica. El giro lo marca un conector adversativo o una construcción que cambia el foco. «No se trata de… sino de…» desplaza la discusión a otro terreno. «Lejos de…» invierte la consecuencia que el adversario esperaba. «Cierto es que…, pero…» reconoce un hecho y lo relativiza.',
          table: {
            headers: ['Fórmula', 'Ejemplo'],
            rows: [
              ['Es cierto que…; ahora bien,…', 'Es cierto que la obra es cara; ahora bien, más caro es no hacerla.'],
              ['Admitamos que… Aun así,…', 'Admitamos que el plazo sea ajustado. Aun así, es factible.'],
              ['No se trata de… sino de…', 'No se trata de gastar más, sino de gastar mejor.'],
              ['Lejos de + infinitivo,…', 'Lejos de frenar la economía, la medida la ha reactivado.'],
              ['Se dirá que… Y sin embargo…', 'Se dirá que es utópico. Y sin embargo, ya funciona en otras ciudades.'],
            ],
          },
        },
        {
          id: 'esa7-p4-cloze',
          type: 'CLOZE',
          instruction: 'Complete las réplicas con la fórmula adecuada.',
          wordBank: ['Lejos de', 'No se trata de', 'ahora bien', 'Admitamos que'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Es cierto que la peatonalización molesta a algunos comercios; ' },
            { kind: 'GAP', gapId: 'c1', solution: ['ahora bien'], width: 11 },
            { kind: 'TEXT', text: ', las ventas globales han subido. ' },
            { kind: 'GAP', gapId: 'c2', solution: ['Lejos de'], width: 9 },
            { kind: 'TEXT', text: ' vaciar el centro, lo ha llenado de gente. ' },
            { kind: 'GAP', gapId: 'c3', solution: ['No se trata de'], width: 15 },
            { kind: 'TEXT', text: ' prohibir los coches, sino de devolver la calle a quien camina. ' },
            { kind: 'GAP', gapId: 'c4', solution: ['Admitamos que'], width: 14 },
            { kind: 'TEXT', text: ' el cambio exija un esfuerzo. Aun así, merece la pena.' },
          ],
        },
        {
          id: 'esa7-p4-info-steelman',
          type: 'INFO',
          variant: 'TIP',
          title: 'Mejorar la objeción antes de responderla',
          text: 'Responder a una versión débil de la objeción es fácil y no convence a nadie: es el hombre de paja del capítulo anterior, visto desde el otro lado. Lo eficaz es formular la versión más fuerte —«el argumento más serio contra esta propuesta es…»— y responder a esa. Si se gana contra la mejor versión, el resto de objeciones cae solo.',
        },
        {
          id: 'esa7-p4-choice',
          type: 'CHOICE',
          instruction: 'Elija la réplica más eficaz.',
          question: 'Defiende la semana laboral de cuatro días. El adversario dice que reducirá la productividad. ¿Qué respuesta es más sólida?',
          options: [
            { id: 's1', text: 'Eso es lo que dicen siempre los que no quieren que nada cambie.' },
            { id: 's2', text: 'La productividad no importa; lo que importa es la felicidad de los trabajadores.' },
            {
              id: 's3',
              text: 'Es una preocupación legítima: si cada trabajador produjera lo mismo por hora, perderíamos un día de producción. Ahora bien, en las empresas que lo han probado la productividad por hora ha subido lo suficiente para compensarlo.',
            },
            { id: 's4', text: 'No voy a entrar en esa cuestión.' },
          ],
          multiple: false,
          solution: ['s3'],
          explanation:
            'La tercera respuesta formula la objeción en su versión más razonable, la reconoce y la responde con un dato. La primera es un ataque personal, la segunda cambia de tema y la cuarta rehúye el debate.',
        },
        {
          id: 'esa7-p4-ordering',
          type: 'ORDERING',
          instruction: 'Ordene la réplica: concesión, giro y respuesta.',
          items: [
            { id: 'r1', text: 'Se dirá que la biblioteca apenas tiene usuarios.' },
            { id: 'r2', text: 'Y es verdad: el año pasado bajaron las visitas.' },
            { id: 'r3', text: 'Pero bajaron porque se redujo el horario a las mañanas, cuando la gente trabaja.' },
            { id: 'r4', text: 'Ampliemos el horario, y veremos quién tiene razón.' },
          ],
          solution: ['r1', 'r2', 'r3', 'r4'],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – Anfang, Schluss und eine eigene Rede.
  {
    order: 5,
    title: 'Empezar y terminar',
    subtitle: 'Den ersten und den letzten Satz setzen',
    estimatedMinutes: 34,
    content: {
      version: v,
      blocks: [
        { id: 'esa7-p5-h1', type: 'HEADING', level: 1, text: 'Empezar y terminar' },
        {
          id: 'esa7-p5-intro',
          type: 'TEXT',
          text: 'Los primeros treinta segundos deciden si el público escuchará; los últimos, qué recordará. Entre ambos momentos cabe casi cualquier contenido, pero el principio y el final deben escribirse palabra por palabra. Improvisar el cierre es la forma más segura de terminar con «bueno, pues eso es todo».',
        },
        {
          id: 'esa7-p5-info-inicios',
          type: 'INFO',
          variant: 'TIP',
          title: 'Cinco inicios y tres cierres',
          text: 'Un buen inicio crea una pregunta en la mente del público; un buen cierre la responde o la devuelve transformada. La técnica del círculo —volver al final a la imagen del principio— da al discurso una sensación de unidad difícil de conseguir de otro modo.',
          table: {
            headers: ['Tipo', 'Ejemplo'],
            rows: [
              ['inicio: pregunta', '¿Cuánto vale una hora de su vida?'],
              ['inicio: anécdota', 'El martes pasado, una vecina de ochenta años subió a pie seis pisos.'],
              ['inicio: dato sorprendente', 'Uno de cada tres alimentos que compramos acaba en la basura.'],
              ['inicio: cita', 'Decía Machado que se hace camino al andar.'],
              ['inicio: contraste', 'Hace diez años, esta plaza era un aparcamiento.'],
              ['cierre: llamada a la acción', 'Les pido que voten hoy a favor.'],
              ['cierre: círculo', 'Aquella vecina, si aprobamos esto, tendrá ascensor.'],
              ['cierre: imagen', 'Imaginen esta plaza dentro de diez años, llena de niños.'],
            ],
          },
        },
        {
          id: 'esa7-p5-choice',
          type: 'CHOICE',
          instruction: 'Elija el mejor cierre.',
          question: 'Un discurso empezó así: «El martes pasado, una vecina de ochenta años subió a pie seis pisos con la compra». ¿Qué cierre aprovecha mejor ese inicio?',
          options: [
            { id: 'c1', text: 'Bueno, pues eso es todo lo que quería decir. Gracias.' },
            { id: 'c2', text: 'En conclusión, los ascensores son importantes para la accesibilidad.' },
            {
              id: 'c3',
              text: 'Si hoy aprobamos esta ayuda, el martes que viene nuestra vecina subirá esos seis pisos en ascensor. Está en nuestras manos.',
            },
            { id: 'c4', text: 'Por último, quiero recordar el artículo 3 de la ordenanza municipal.' },
          ],
          multiple: false,
          solution: ['c3'],
          explanation:
            'La tercera opción cierra el círculo: vuelve a la vecina del principio y convierte la anécdota en consecuencia de la decisión. Además termina con una llamada a la acción breve.',
        },
        {
          id: 'esa7-p5-cloze',
          type: 'CLOZE',
          instruction: 'Complete el resumen del capítulo.',
          wordBank: ['ethos', 'exordio', 'refutación', 'quiasmo', 'concesión', 'círculo'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'La credibilidad del orador es el ' },
            { kind: 'GAP', gapId: 'z1', solution: ['ethos'], width: 6 },
            { kind: 'TEXT', text: '. El discurso empieza con el ' },
            { kind: 'GAP', gapId: 'z2', solution: ['exordio'], width: 8 },
            { kind: 'TEXT', text: ' y desmonta las objeciones en la ' },
            { kind: 'GAP', gapId: 'z3', solution: ['refutación', 'refutacion'], width: 11 },
            { kind: 'TEXT', text: '. «No vivimos para trabajar; trabajamos para vivir» es un ' },
            { kind: 'GAP', gapId: 'z4', solution: ['quiasmo'], width: 8 },
            { kind: 'TEXT', text: '. Reconocer lo cierto de una objeción antes de rebatirla es una ' },
            { kind: 'GAP', gapId: 'z5', solution: ['concesión', 'concesion'], width: 10 },
            { kind: 'TEXT', text: ' táctica. Y volver al final a la imagen del principio es cerrar el ' },
            { kind: 'GAP', gapId: 'z6', solution: ['círculo', 'circulo'], width: 8 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'esa7-p5-writing',
          type: 'WRITING',
          instruction: 'Escriba un discurso breve.',
          prompt:
            'Su barrio va a votar si convierte un solar abandonado en un huerto urbano o en un aparcamiento. Escriba un discurso de entre 200 y 280 palabras, para leer en voz alta en la asamblea de vecinos, en defensa de la opción que prefiera. Debe tener exordio, argumentación, una refutación con concesión táctica y una peroración que cierre el círculo. Use al menos un tricolon, una anáfora y una pregunta retórica.',
          minWords: 200,
          maxWords: 290,
          aiFeedback: true,
          sampleAnswer:
            'Buenas tardes a todos. Les propongo un pequeño ejercicio: cierren los ojos un momento e imaginen el solar de la calle Olmo. ¿Qué ven? Yo veo hierbajos, bolsas de plástico y una valla rota desde hace siete años.\n\nEse solar puede ser otra cosa. Un huerto urbano cuesta poco, lo mantienen los propios vecinos y produce algo más que tomates. Produce encuentro, porque obliga a trabajar junto a quien antes solo saludábamos en el ascensor. Produce aprendizaje, porque los colegios del barrio podrían usarlo como aula. Y produce sombra, verde y aire limpio en una calle que en agosto alcanza los cuarenta grados.\n\nSe dirá que lo que falta en el barrio es aparcamiento. Y es cierto: encontrar sitio a las ocho de la tarde es una pesadilla, y no voy a negarlo. Ahora bien, cuarenta plazas nuevas no resuelven ese problema; lo desplazan unos meses, hasta que lleguen cuarenta coches más. Lejos de aliviar el tráfico, un aparcamiento lo atrae.\n\nNo se trata de elegir entre coches y lechugas. Se trata de decidir qué queremos que sea este barrio dentro de diez años. Queremos un barrio donde los niños jueguen en la calle. Queremos un barrio donde los mayores tengan un lugar al que ir por las mañanas. Queremos un barrio que se parezca a quienes vivimos en él.\n\nPor eso les pido que voten por el huerto. Y les propongo que, dentro de un año, volvamos a cerrar los ojos y a imaginar el solar de la calle Olmo. Estoy convencida de que ya no veremos hierbajos, sino a nuestros vecinos.',
        },
      ],
    },
  },
];
