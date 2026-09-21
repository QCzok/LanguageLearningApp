import type { UnitSeed } from './chapter-beginner-1';

/**
 * Spanisch, Intermediate, Kapitel 10: „Ciencia y tecnología“ (B2, Kapitel 4)
 *
 * Fünf Seiten. Nach der Argumentation (Kapitel 7) und den Zahlen (Kapitel 8)
 * geht es hier um die dritte Zutat einer erwachsenen Diskussion: den Grad der
 * Sicherheit. Wissenschaftliche Aussagen sind selten ganz oder gar nicht wahr,
 * und das Spanische hat dafür ein eigenes Repertoire – vom Futur der
 * Vermutung bis zu „cabe suponer“.
 *
 * Aufbau: Seite 1 erklärt einen Vorgang (Ablaufwortschatz, unpersönliche
 * Formen), Seite 2 liest eine Studie und trennt Befund von Deutung, Seite 3
 * bringt die Grade der Gewissheit als grammatisches System, Seite 4 wägt
 * Chancen und Risiken ab (Finalsätze mit para que, Konzessives), Seite 5 ist
 * die Popularisierung: dasselbe für ein Publikum erklären, das nichts vom
 * Fach versteht.
 *
 * Die Beispiele kommen aus verschiedenen Disziplinen und sind so gewählt, dass
 * sie ohne Fachwissen nachvollziehbar bleiben. Wo eine Studie zitiert wird,
 * ist sie erfunden und als Übungsmaterial kenntlich; es geht um die
 * sprachliche Form der Einordnung, nicht um Forschungsstände.
 *
 * Wie im gesamten B2-Teil stehen die Seiten einsprachig spanisch; die
 * Wortschatzlisten tragen deutsche und englische Entsprechungen.
 *
 * Sämtliche Texte sind eigenständig verfasst.
 */
const v = 1;

export const SPANISH_INTERMEDIATE_10_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – einen Vorgang erklären.
  {
    order: 1,
    title: 'Explicar un proceso',
    subtitle: 'Cómo funciona algo',
    estimatedMinutes: 27,
    content: {
      version: v,
      blocks: [
        { id: 'esi10-p1-h1', type: 'HEADING', level: 1, text: 'Explicar un proceso' },
        {
          id: 'esi10-p1-intro',
          type: 'TEXT',
          text: 'Explicar cómo funciona algo exige dos decisiones antes de escribir la primera frase: dónde empieza el proceso y qué no hace falta contar. Quien empieza demasiado atrás pierde al lector en la introducción; quien lo cuenta todo produce un manual, no una explicación. Una buena explicación técnica en español suele tener entre cuatro y seis pasos, y cada uno cabe en una o dos frases.',
        },
        {
          id: 'esi10-p1-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: procesos y dispositivos',
          items: [
            {
              term: 'el funcionamiento',
              translations: { en: 'operation, workings', de: 'die Funktionsweise' },
            },
            {
              term: 'el dispositivo',
              translations: { en: 'device', de: 'das Gerät' },
            },
            {
              term: 'el sensor',
              translations: { en: 'sensor', de: 'der Sensor' },
            },
            {
              term: 'la red',
              translations: { en: 'network, grid', de: 'das Netz' },
              example: 'la red eléctrica, la red de datos',
            },
            {
              term: 'el consumo',
              translations: { en: 'consumption', de: 'der Verbrauch' },
            },
            {
              term: 'el rendimiento',
              translations: { en: 'efficiency, performance', de: 'der Wirkungsgrad, die Leistung' },
            },
            {
              term: 'almacenar',
              translations: { en: 'to store', de: 'speichern' },
              example: 'La batería almacena la energía sobrante.',
            },
            {
              term: 'transformar',
              translations: { en: 'to convert', de: 'umwandeln' },
            },
            {
              term: 'desencadenar',
              translations: { en: 'to trigger', de: 'auslösen' },
            },
            {
              term: 'la avería',
              translations: { en: 'breakdown, fault', de: 'der Defekt, die Störung' },
            },
            {
              term: 'el umbral',
              translations: { en: 'threshold', de: 'der Schwellenwert' },
              example: 'Si se supera el umbral, salta la alarma.',
            },
            {
              term: 'puesta en marcha',
              translations: { en: 'start-up, commissioning', de: 'die Inbetriebnahme' },
            },
          ],
        },
        {
          id: 'esi10-p1-info-secuencia',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Marcar la secuencia',
          text: 'Un proceso se cuenta en presente de indicativo, no en futuro ni en pasado: el presente presenta el funcionamiento como algo que ocurre siempre igual. Los conectores de secuencia van al principio de la frase y conviene variarlos, porque cuatro «después» seguidos delatan que el autor no ha jerarquizado los pasos.',
          table: {
            headers: ['Momento', 'Conectores'],
            rows: [
              ['inicio', 'en primer lugar, el proceso comienza cuando…'],
              ['continuación', 'a continuación, acto seguido, una vez que…'],
              ['simultaneidad', 'al mismo tiempo, mientras, paralelamente'],
              ['condición interna', 'si se supera el umbral, en cuanto…'],
              ['final', 'por último, finalmente, el resultado es…'],
            ],
          },
        },
        {
          id: 'esi10-p1-texto-modelo',
          type: 'TEXT',
          text: 'Lea esta explicación breve y cuente los pasos: «Una bomba de calor no genera calor: lo traslada. En primer lugar, un fluido refrigerante circula por el circuito exterior y absorbe el calor del aire, incluso cuando la temperatura es baja. A continuación, un compresor eleva la presión de ese fluido, con lo que su temperatura sube de manera considerable. Ese calor se cede después al circuito interior de la vivienda. Por último, el fluido se expande, se enfría y vuelve a empezar. El rendimiento es alto precisamente porque el aparato no crea energía térmica, sino que la mueve de un sitio a otro».',
        },
        {
          id: 'esi10-p1-choice-tiempo',
          type: 'CHOICE',
          instruction: 'Elija la formulación adecuada para una explicación técnica general.',
          options: [
            { id: 'a1', text: 'El compresor elevará la presión del fluido.' },
            { id: 'a2', text: 'El compresor eleva la presión del fluido.' },
            { id: 'a3', text: 'El compresor ha elevado la presión del fluido.' },
            { id: 'a4', text: 'El compresor elevaría la presión del fluido.' },
          ],
          multiple: false,
          solution: ['a2'],
          explanation:
            'El presente de indicativo presenta el funcionamiento como algo constante. El futuro narraría un caso concreto que aún no ha pasado, el perfecto un episodio ya ocurrido y el condicional una hipótesis.',
        },
        {
          id: 'esi10-p1-ordering',
          type: 'ORDERING',
          instruction: 'Ordene los pasos de la explicación de un semáforo inteligente.',
          items: [
            {
              id: 'o1',
              text: 'Unos sensores instalados en el asfalto cuentan los vehículos que se acercan.',
            },
            { id: 'o2', text: 'Los datos se envían cada pocos segundos a la central de tráfico.' },
            {
              id: 'o3',
              text: 'Un programa compara la cifra con el umbral fijado para esa hora del día.',
            },
            {
              id: 'o4',
              text: 'Si se supera el umbral, el sistema alarga la fase verde de esa dirección.',
            },
            {
              id: 'o5',
              text: 'El resultado es un reparto del tiempo que se ajusta al tráfico real.',
            },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5'],
        },
        {
          id: 'esi10-p1-cloze',
          type: 'CLOZE',
          instruction: 'Complete la explicación con los conectores y verbos del recuadro.',
          wordBank: [
            'En primer lugar',
            'A continuación',
            'se almacena',
            'Por último',
            'una vez que',
          ],
          caseSensitive: false,
          segments: [
            { kind: 'GAP', gapId: 'c1', solution: ['En primer lugar'], width: 16 },
            { kind: 'TEXT', text: ', las placas transforman la luz en corriente continua. ' },
            { kind: 'GAP', gapId: 'c2', solution: ['A continuación'], width: 15 },
            {
              kind: 'TEXT',
              text: ', un inversor la convierte en corriente alterna. La energía sobrante ',
            },
            { kind: 'GAP', gapId: 'c3', solution: ['se almacena'], width: 12 },
            { kind: 'TEXT', text: ' en la batería o se vuelca a la red ' },
            { kind: 'GAP', gapId: 'c4', solution: ['una vez que'], width: 12 },
            { kind: 'TEXT', text: ' la batería está llena. ' },
            { kind: 'GAP', gapId: 'c5', solution: ['Por último'], width: 11 },
            {
              kind: 'TEXT',
              text: ', el contador registra lo aportado y lo consumido por separado.',
            },
          ],
        },
        {
          id: 'esi10-p1-writing',
          type: 'WRITING',
          instruction: 'Explique un proceso.',
          prompt:
            'Elija algo cuyo funcionamiento conozca bien: un electrodoméstico, un trámite administrativo, una máquina de su trabajo o incluso cómo se hace el pan. Explíquelo en 80 a 130 palabras, en presente, con entre cuatro y seis pasos y conectores de secuencia variados. Empiece por lo que el lector necesita saber y no por el principio absoluto.',
          minWords: 80,
          maxWords: 140,
          aiFeedback: true,
          sampleAnswer:
            'Un lavavajillas gasta mucha menos agua que fregar a mano, y la razón está en que reutiliza la misma. En primer lugar, la máquina llena de agua una cubeta del fondo, apenas cuatro litros. A continuación, una bomba impulsa esa agua a presión hacia los brazos giratorios, que la reparten sobre la vajilla. El agua sucia vuelve a caer al fondo, donde un filtro retiene los restos sólidos, y se bombea otra vez. Una vez terminado el ciclo de lavado, el aparato la desecha y repite la operación con agua limpia para aclarar. Por último, una resistencia calienta el interior y la vajilla se seca sola por evaporación.',
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – eine Studie lesen: Befund, Stichprobe, Deutung.
  {
    order: 2,
    title: 'Leer un estudio',
    subtitle: 'Datos, muestra y conclusiones',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'esi10-p2-h1', type: 'HEADING', level: 1, text: 'Leer un estudio' },
        {
          id: 'esi10-p2-intro',
          type: 'TEXT',
          text: 'Entre lo que mide un estudio y lo que dice el titular que lo resume suele haber un trecho considerable. El estudio observa que dos cosas aparecen juntas; el titular afirma que una causa la otra. El estudio trabaja con doscientas personas de una ciudad; el titular habla de «los españoles». Saber leer la distancia entre las dos cosas es una competencia lingüística además de científica: casi siempre está en los verbos.',
        },
        {
          id: 'esi10-p2-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: investigación',
          items: [
            {
              term: 'el estudio',
              translations: { en: 'study', de: 'die Studie' },
            },
            {
              term: 'la muestra',
              translations: { en: 'sample', de: 'die Stichprobe' },
              example: 'una muestra de 1 200 personas',
            },
            {
              term: 'el hallazgo',
              translations: { en: 'finding', de: 'der Befund' },
            },
            {
              term: 'la correlación',
              translations: { en: 'correlation', de: 'die Korrelation' },
            },
            {
              term: 'la causalidad',
              translations: { en: 'causality', de: 'die Kausalität' },
            },
            {
              term: 'el sesgo',
              translations: { en: 'bias', de: 'die Verzerrung' },
              example: 'un sesgo de selección',
            },
            {
              term: 'el ensayo clínico',
              translations: { en: 'clinical trial', de: 'die klinische Studie' },
            },
            {
              term: 'el grupo de control',
              translations: { en: 'control group', de: 'die Kontrollgruppe' },
            },
            {
              term: 'revisado por pares',
              translations: { en: 'peer-reviewed', de: 'begutachtet, peer-reviewed' },
            },
            {
              term: 'replicar',
              translations: { en: 'to replicate', de: 'replizieren, wiederholen' },
            },
            {
              term: 'arrojar (resultados)',
              translations: { en: 'to yield (results)', de: 'ergeben, liefern' },
              example: 'El ensayo arrojó resultados contradictorios.',
            },
            {
              term: 'concluyente',
              translations: { en: 'conclusive', de: 'schlüssig' },
            },
          ],
        },
        {
          id: 'esi10-p2-info-verbos',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Los verbos dicen cuánto se afirma',
          text: 'En la prosa científica, el verbo no es decorativo: mide el compromiso del autor con lo que dice. La escala va de la observación pura a la afirmación causal, y saltarse escalones es exactamente lo que hacen los titulares. Al escribir, elija el escalón que sus datos sostienen.',
          table: {
            headers: ['Grado', 'Verbo', 'Ejemplo'],
            rows: [
              ['observar', 'se observa, se registra', 'Se observa una diferencia de seis puntos.'],
              [
                'asociar',
                'se asocia con, guarda relación',
                'El hábito se asocia con menos ingresos.',
              ],
              ['sugerir', 'sugiere, apunta a', 'Los datos apuntan a un efecto moderado.'],
              ['indicar', 'indica, muestra', 'El ensayo muestra una mejora sostenida.'],
              ['demostrar', 'demuestra, prueba', 'El experimento demuestra la relación.'],
            ],
          },
        },
        {
          id: 'esi10-p2-texto-estudio',
          type: 'TEXT',
          text: 'Lea este resumen, escrito para esta unidad: «Un equipo de la Universidad de Zaragoza siguió durante dos años a 1 400 escolares de entre diez y doce años. En el grupo que caminaba al colegio se registró una media de sueño 23 minutos superior a la del grupo que acudía en coche. Los autores subrayan que no puede establecerse una relación causal, dado que las familias que van a pie viven más cerca del centro y siguen horarios distintos. El estudio, revisado por pares, recomienda replicar la observación en zonas rurales antes de extraer conclusiones generales».',
        },
        {
          id: 'esi10-p2-choice-titular',
          type: 'CHOICE',
          instruction: 'Lea el resumen anterior y elija el titular más fiel.',
          options: [
            { id: 't1', text: 'Ir andando al colegio hace dormir mejor a los niños.' },
            {
              id: 't2',
              text: 'Los niños que van a pie al colegio duermen casi media hora más, según un estudio.',
            },
            {
              id: 't3',
              text: 'Un estudio asocia el trayecto a pie al colegio con más horas de sueño, sin establecer causa.',
            },
            { id: 't4', text: 'El coche perjudica el descanso infantil.' },
          ],
          multiple: false,
          solution: ['t3'],
          explanation:
            'Solo t3 conserva el verbo del estudio (asociar) y la advertencia de los autores. t2 es casi correcto, pero omite la reserva y el lector la leerá como causa. t1 y t4 afirman una causalidad que el propio estudio descarta poder establecer.',
        },
        {
          id: 'esi10-p2-match-conceptos',
          type: 'MATCHING',
          instruction: 'Relacione cada concepto con el ejemplo que lo ilustra.',
          left: [
            { id: 'c1', text: 'correlación sin causalidad' },
            { id: 'c2', text: 'sesgo de selección' },
            { id: 'c3', text: 'muestra insuficiente' },
            { id: 'c4', text: 'grupo de control' },
          ],
          right: [
            {
              id: 'd1',
              text: 'En verano suben a la vez las ventas de helado y los ahogamientos; el helado no ahoga a nadie.',
            },
            {
              id: 'd2',
              text: 'La encuesta se hizo por internet, de modo que quien no navega quedó fuera desde el principio.',
            },
            { id: 'd3', text: 'El ensayo se hizo con doce pacientes y una sola clínica.' },
            {
              id: 'd4',
              text: 'La mitad de los participantes recibió el tratamiento y la otra mitad, un placebo.',
            },
          ],
          solution: [
            { leftId: 'c1', rightId: 'd1' },
            { leftId: 'c2', rightId: 'd2' },
            { leftId: 'c3', rightId: 'd3' },
            { leftId: 'c4', rightId: 'd4' },
          ],
        },
        {
          id: 'esi10-p2-cloze',
          type: 'CLOZE',
          instruction: 'Complete el resumen con los verbos y términos del recuadro.',
          wordBank: ['muestra', 'se observó', 'se asocia', 'concluyente', 'replicar'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'El trabajo se basa en una ' },
            { kind: 'GAP', gapId: 'c1', solution: ['muestra'], width: 9 },
            { kind: 'TEXT', text: ' de 2 300 trabajadores de tres comunidades. ' },
            { kind: 'GAP', gapId: 'c2', solution: ['se observó'], width: 11 },
            { kind: 'TEXT', text: ' que la jornada de cuatro días ' },
            { kind: 'GAP', gapId: 'c3', solution: ['se asocia'], width: 10 },
            { kind: 'TEXT', text: ' con menos bajas por estrés. El resultado no es ' },
            { kind: 'GAP', gapId: 'c4', solution: ['concluyente'], width: 12 },
            { kind: 'TEXT', text: ', y los autores proponen ' },
            { kind: 'GAP', gapId: 'c5', solution: ['replicar'], width: 9 },
            { kind: 'TEXT', text: ' el estudio en sectores con turnos nocturnos.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – die Grade der Gewissheit als grammatisches System.
  {
    order: 3,
    title: 'Grados de certeza',
    subtitle: 'Será, debe de ser, quizá sea',
    estimatedMinutes: 29,
    content: {
      version: v,
      blocks: [
        { id: 'esi10-p3-h1', type: 'HEADING', level: 1, text: 'Grados de certeza' },
        {
          id: 'esi10-p3-intro',
          type: 'TEXT',
          text: 'El español tiene una peculiaridad que sorprende a quien llega de otras lenguas: usa el futuro para hablar del presente. «¿Qué hora es?» «Serán las cinco» no anuncia nada futuro; calcula. De la misma manera, el condicional sirve para conjeturar sobre el pasado: «serían las cinco cuando llamó». Junto a estas dos formas hay una serie de perífrasis y adverbios, y entre todos forman una escala bastante fina.',
        },
        {
          id: 'esi10-p3-info-futuro',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'El futuro y el condicional de conjetura',
          text: 'La regla es simétrica y fácil de retener: para suponer sobre el presente se usa el futuro; para suponer sobre el pasado, el condicional. Con las formas compuestas se cubre el pasado reciente. En todos los casos el hablante no sabe: calcula.',
          table: {
            headers: ['Se supone sobre', 'Forma', 'Ejemplo'],
            rows: [
              ['el presente', 'futuro simple', 'Estará en una reunión.'],
              ['el pasado reciente', 'futuro compuesto', 'Habrá salido ya.'],
              ['el pasado', 'condicional simple', 'Tendría entonces unos treinta años.'],
              [
                'el pasado anterior',
                'condicional compuesto',
                'Se habría marchado antes de la tormenta.',
              ],
            ],
          },
        },
        {
          id: 'esi10-p3-info-escala',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'La escala completa',
          text: 'Fíjese en la línea de «deber»: «debe de ser» supone, «debe ser» obliga. La lengua hablada las confunde a menudo, pero en un texto que trata de probabilidades la distinción importa. Y atención a los adverbios de duda: casi todos admiten los dos modos, y el subjuntivo aumenta la reserva. «Quizá es cierto» está más cerca de creerlo que «quizá sea cierto».',
          table: {
            headers: ['Certeza', 'Expresión', 'Modo'],
            rows: [
              ['total', 'es evidente que, está demostrado que', 'indicativo'],
              ['alta', 'todo indica que, sin duda', 'indicativo'],
              ['media-alta', 'debe de ser, seguramente', 'indicativo'],
              ['media', 'probablemente, posiblemente', 'indic. o subj.'],
              ['baja', 'quizá, tal vez, puede que', 'subj. (puede que, siempre)'],
              ['nula', 'no está claro que, es dudoso que', 'subjuntivo'],
            ],
          },
        },
        {
          id: 'esi10-p3-choice-deber',
          type: 'CHOICE',
          instruction: 'Elija la frase que expresa una suposición.',
          options: [
            { id: 'd1', text: 'El aparato debe estar homologado antes de su venta.' },
            { id: 'd2', text: 'El aparato debe de estar estropeado, porque no enciende.' },
            { id: 'd3', text: 'El aparato debe encenderse con el botón lateral.' },
            { id: 'd4', text: 'El aparato debe ser revisado cada dos años.' },
          ],
          multiple: false,
          solution: ['d2'],
          explanation:
            'Solo d2 supone: la causa se deduce de un indicio. Las otras tres expresan obligación o instrucción, que es el valor de «deber» sin preposición.',
        },
        {
          id: 'esi10-p3-cloze',
          type: 'CLOZE',
          instruction: 'Complete con el futuro o el condicional de conjetura.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '▸ No contesta al teléfono. ' },
            {
              kind: 'GAP',
              gapId: 'c1',
              solution: ['Estará'],
              hint: 'estar, presente supuesto',
              width: 8,
            },
            { kind: 'TEXT', text: ' conduciendo.\n▸ El paquete no ha llegado. Se ' },
            {
              kind: 'GAP',
              gapId: 'c2',
              solution: ['habrá perdido'],
              hint: 'perderse, pasado reciente',
              width: 14,
            },
            { kind: 'TEXT', text: ' en el reparto.\n▸ Cuando construyeron el puente, no ' },
            {
              kind: 'GAP',
              gapId: 'c3',
              solution: ['habría'],
              hint: 'haber, pasado supuesto',
              width: 8,
            },
            { kind: 'TEXT', text: ' tantos coches como ahora.\n▸ La casa está vacía: sus dueños ' },
            {
              kind: 'GAP',
              gapId: 'c4',
              solution: ['se habrían mudado', 'se mudarían'],
              hint: 'mudarse, pasado',
              width: 18,
            },
            { kind: 'TEXT', text: ' hace años.' },
          ],
        },
        {
          id: 'esi10-p3-choice-modo',
          type: 'CHOICE',
          instruction: 'Marque todas las frases correctas.',
          options: [
            { id: 'q1', text: 'Puede que el resultado sea un error de medición.' },
            { id: 'q2', text: 'Puede que el resultado es un error de medición.' },
            { id: 'q3', text: 'Quizá el resultado se deba a un error de medición.' },
            { id: 'q4', text: 'No está claro que el resultado se deba a un error de medición.' },
          ],
          multiple: true,
          solution: ['q1', 'q3', 'q4'],
          explanation:
            '«Puede que» exige subjuntivo siempre, de modo que q2 es incorrecta. «Quizá» admite los dos modos y con subjuntivo marca más reserva. «No está claro que» niega la evidencia y por eso pide subjuntivo.',
        },
        {
          id: 'esi10-p3-match-grados',
          type: 'MATCHING',
          instruction: 'Ordene de mayor a menor certeza relacionando cada frase con su grado.',
          left: [
            { id: 'g1', text: 'Está demostrado que el material se dilata con el calor.' },
            { id: 'g2', text: 'Todo indica que la avería viene del sensor.' },
            { id: 'g3', text: 'Puede que la avería venga del sensor.' },
            { id: 'g4', text: 'Es dudoso que la avería venga del sensor.' },
          ],
          right: [
            { id: 'h1', text: 'Certeza total' },
            { id: 'h2', text: 'Certeza alta' },
            { id: 'h3', text: 'Posibilidad abierta' },
            { id: 'h4', text: 'Duda expresa' },
          ],
          solution: [
            { leftId: 'g1', rightId: 'h1' },
            { leftId: 'g2', rightId: 'h2' },
            { leftId: 'g3', rightId: 'h3' },
            { leftId: 'g4', rightId: 'h4' },
          ],
        },
        {
          id: 'esi10-p3-writing',
          type: 'WRITING',
          instruction: 'Escriba un diagnóstico provisional.',
          prompt:
            'En su edificio, el ascensor se para entre plantas dos o tres veces por semana, siempre por la tarde y siempre con carga alta. Escriba un mensaje de 70 a 110 palabras a la empresa de mantenimiento en el que exponga los hechos observados y aventure una causa, dejando claro que es una hipótesis. Use al menos un futuro de conjetura y dos expresiones de la escala de certeza.',
          minWords: 70,
          maxWords: 120,
          aiFeedback: true,
          sampleAnswer:
            'Les escribo para comunicarles una incidencia repetida. Desde principios de mes, el ascensor se detiene entre la segunda y la tercera planta dos o tres veces por semana. Se observa un patrón bastante claro: ocurre siempre entre las seis y las ocho de la tarde y con cuatro o más personas dentro.\n\nNo soy técnico, pero todo indica que el problema guarda relación con la carga. Será cuestión del sensor de peso o del ajuste del freno; puede que se trate simplemente de una calibración. Les agradecería que lo revisaran antes del fin de semana, ya que el edificio tiene dos vecinos con movilidad reducida.',
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – Chancen und Risiken abwägen, Finalsätze.
  {
    order: 4,
    title: 'Oportunidades y riesgos',
    subtitle: 'Para qué y a qué precio',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'esi10-p4-h1', type: 'HEADING', level: 1, text: 'Oportunidades y riesgos' },
        {
          id: 'esi10-p4-intro',
          type: 'TEXT',
          text: 'Casi ninguna tecnología es buena o mala por sí misma; lo que se discute es para qué se usa, quién la controla y qué se acepta perder a cambio. Un texto que solo enumera ventajas no convence a nadie que haya pensado un poco en el asunto, y uno que solo enumera peligros se lee como una queja. Lo que se valora en B2 es la capacidad de sostener las dos columnas y decidir después.',
        },
        {
          id: 'esi10-p4-info-final',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'La finalidad: para que + subjuntivo',
          text: 'Las oraciones finales llevan siempre subjuntivo cuando hay cambio de sujeto, e infinitivo cuando el sujeto es el mismo. Es una de las reglas más rentables del nivel, porque aparece cada vez que se explica para qué sirve algo. Tenga a mano las alternativas de registro: en un texto técnico, «con el fin de que» y «a fin de que» sustituyen a «para que».',
          table: {
            headers: ['Caso', 'Construcción', 'Ejemplo'],
            rows: [
              ['mismo sujeto', 'para + infinitivo', 'Instalamos sensores para ahorrar energía.'],
              [
                'sujeto distinto',
                'para que + subjuntivo',
                'Instalamos sensores para que el sistema ahorre.',
              ],
              ['registro formal', 'con el fin de (que)', 'con el fin de que el consumo descienda'],
              ['finalidad negativa', 'para que no / a fin de evitar', 'a fin de evitar averías'],
              [
                'finalidad en pasado',
                'para que + imperf. subj.',
                'Se instaló para que durara veinte años.',
              ],
            ],
          },
        },
        {
          id: 'esi10-p4-dialogo',
          type: 'DIALOGUE',
          title: 'Comité de compras: cámaras en el almacén',
          audioUrl: 'placeholder://es-b2-tecnologia',
          lines: [
            {
              speaker: 'Marcos',
              text: 'La propuesta es instalar catorce cámaras con reconocimiento de movimiento, para que el sistema avise solo cuando haya actividad fuera de horario.',
            },
            {
              speaker: 'Elena',
              text: '¿Y las imágenes dónde se guardan? Porque una cosa es detectar un robo y otra grabar a la plantilla ocho horas al día.',
            },
            {
              speaker: 'Marcos',
              text: 'Se guardan treinta días en un servidor propio, no en la nube del proveedor. Es una condición que pusimos precisamente para evitar ese problema.',
            },
            {
              speaker: 'Elena',
              text: 'Sigue sin convencerme del todo. Puede que sea legal y aun así resulte difícil de explicar a la gente del turno de noche.',
            },
            {
              speaker: 'Marcos',
              text: 'En eso tienes razón. ¿Qué te parecería si lo lleváramos al comité de empresa antes de firmar nada?',
            },
            {
              speaker: 'Elena',
              text: 'Mucho mejor. Y que quede por escrito para qué se instalan y quién puede ver las grabaciones.',
            },
          ],
        },
        {
          id: 'esi10-p4-info-balance',
          type: 'INFO',
          variant: 'TIP',
          title: 'Fórmulas para sopesar',
          text: 'Una valoración equilibrada tiene una arquitectura reconocible. Estas fórmulas la sostienen y evitan el vaivén de «por un lado… por otro lado…» repetido cuatro veces.',
          table: {
            headers: ['Función', 'Fórmula'],
            rows: [
              ['presentar la ventaja', 'La principal ventaja radica en…'],
              ['presentar el riesgo', 'El riesgo más serio es que… (+ subj.)'],
              ['comparar magnitudes', 'El beneficio compensa el coste solo si…'],
              ['condicionar', 'siempre y cuando + subjuntivo'],
              ['cerrar', 'En conjunto, el balance resulta favorable / desfavorable.'],
            ],
          },
        },
        {
          id: 'esi10-p4-cloze',
          type: 'CLOZE',
          instruction: 'Complete con infinitivo o subjuntivo, según haya o no cambio de sujeto.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'El ayuntamiento instala contadores inteligentes para ' },
            {
              kind: 'GAP',
              gapId: 'c1',
              solution: ['conocer'],
              hint: 'conocer, mismo sujeto',
              width: 9,
            },
            { kind: 'TEXT', text: ' el consumo real de cada barrio, y para que los vecinos ' },
            {
              kind: 'GAP',
              gapId: 'c2',
              solution: ['puedan'],
              hint: 'poder, otro sujeto',
              width: 8,
            },
            {
              kind: 'TEXT',
              text: ' seguir el suyo desde el móvil. Los datos se anonimizan a fin de ',
            },
            {
              kind: 'GAP',
              gapId: 'c3',
              solution: ['evitar'],
              hint: 'evitar, mismo sujeto',
              width: 8,
            },
            {
              kind: 'TEXT',
              text: ' cualquier identificación, y se conservan doce meses para que el técnico ',
            },
            { kind: 'GAP', gapId: 'c4', solution: ['pueda'], hint: 'poder, otro sujeto', width: 8 },
            { kind: 'TEXT', text: ' comparar temporadas.' },
          ],
        },
        {
          id: 'esi10-p4-choice-riesgo',
          type: 'CHOICE',
          instruction: 'Elija la formulación correcta.',
          options: [
            { id: 'r1', text: 'El riesgo más serio es que los datos acaban en manos de terceros.' },
            { id: 'r2', text: 'El riesgo más serio es que los datos acaben en manos de terceros.' },
            {
              id: 'r3',
              text: 'El riesgo más serio sería que los datos acabarían en manos de terceros.',
            },
            {
              id: 'r4',
              text: 'El riesgo más serio es que los datos acabarán en manos de terceros.',
            },
          ],
          multiple: false,
          solution: ['r2'],
          explanation:
            'Un riesgo es algo que puede ocurrir pero no ha ocurrido: la subordinada va en subjuntivo. Con indicativo (r1, r4) se estaría afirmando el hecho, y r3 encadena dos condicionales donde no hay condición.',
        },
        {
          id: 'esi10-p4-match-balance',
          type: 'MATCHING',
          instruction:
            'Relacione cada tecnología con el riesgo que suele discutirse a su propósito.',
          left: [
            { id: 'p1', text: 'Reconocimiento facial en espacios públicos' },
            { id: 'p2', text: 'Historia clínica digital compartida' },
            { id: 'p3', text: 'Coches autónomos' },
            { id: 'p4', text: 'Algoritmos de selección de personal' },
          ],
          right: [
            { id: 's1', text: 'Que la vigilancia se normalice sin que nadie la haya autorizado.' },
            { id: 's2', text: 'Que un acceso indebido exponga datos que no se pueden cambiar.' },
            { id: 's3', text: 'Que no esté claro quién responde cuando la máquina decide mal.' },
            {
              id: 's4',
              text: 'Que el sistema repita los sesgos de las contrataciones anteriores.',
            },
          ],
          solution: [
            { leftId: 'p1', rightId: 's1' },
            { leftId: 'p2', rightId: 's2' },
            { leftId: 'p3', rightId: 's3' },
            { leftId: 'p4', rightId: 's4' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – Divulgation: dasselbe für Laien erklären.
  {
    order: 5,
    title: 'Divulgar',
    subtitle: 'Explicárselo a quien no es del ramo',
    estimatedMinutes: 29,
    content: {
      version: v,
      blocks: [
        { id: 'esi10-p5-h1', type: 'HEADING', level: 1, text: 'Divulgar' },
        {
          id: 'esi10-p5-intro',
          type: 'TEXT',
          text: 'Divulgar no es simplificar hasta que deje de ser cierto. Es elegir qué parte del asunto necesita entender el lector para poder decidir algo, y contársela con las palabras que ya tiene. Quien divulga bien no baja el nivel: cambia el punto de entrada. Y la prueba de que ha funcionado no es que el texto se entienda, sino que el lector pueda repetirlo con sus propias palabras al día siguiente.',
        },
        {
          id: 'esi10-p5-info-recursos',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Cuatro recursos del texto divulgativo',
          text: 'La comparación traduce lo desconocido a lo conocido; la reformulación define sin interrumpir; la cifra comparada da tamaño; y la pregunta retórica organiza el texto marcando qué se responde a continuación. Con estos cuatro recursos se sostiene casi cualquier explicación.',
          table: {
            headers: ['Recurso', 'Fórmula', 'Ejemplo'],
            rows: [
              [
                'comparación',
                'es como si…, viene a ser',
                'Es como si la célula tuviera un portero.',
              ],
              [
                'reformulación',
                'es decir, o sea, esto es',
                'la conductividad, es decir, la facilidad…',
              ],
              ['cifra con referencia', 'el equivalente a…', 'el equivalente a 300 hogares'],
              ['pregunta retórica', '¿Y por qué importa esto?', '¿Y por qué importa? Porque…'],
            ],
          },
        },
        {
          id: 'esi10-p5-texto-dos',
          type: 'TEXT',
          text: 'Compare las dos versiones de la misma idea. Técnica: «La latencia de la red condiciona la viabilidad de las aplicaciones de control remoto en tiempo real». Divulgativa: «Entre que usted mueve el mando y la máquina responde pasa un tiempo. Es poco, milésimas de segundo, y para ver una película da igual. Pero si lo que se maneja a distancia es un brazo quirúrgico, esas milésimas deciden si la operación es posible». La segunda versión no dice menos: dice lo mismo desde otro sitio.',
        },
        {
          id: 'esi10-p5-choice-divulgacion',
          type: 'CHOICE',
          instruction: 'Elija la mejor frase divulgativa.',
          question: 'Quiere explicar a un público general qué es un algoritmo de recomendación.',
          options: [
            {
              id: 'x1',
              text: 'Un algoritmo de recomendación implementa un filtrado colaborativo sobre matrices dispersas.',
            },
            {
              id: 'x2',
              text: 'Es un programa que te recomienda cosas, más o menos como un amigo que te conoce.',
            },
            {
              id: 'x3',
              text: 'Es un programa que busca personas que han visto lo mismo que usted y le propone lo que vieron después. No sabe qué le gusta: sabe qué le gustó a gente parecida.',
            },
            { id: 'x4', text: 'Es una inteligencia artificial muy avanzada que aprende de usted.' },
          ],
          multiple: false,
          solution: ['x3'],
          explanation:
            'x3 explica el mecanismo real con palabras corrientes y además corrige una idea equivocada frecuente. x1 no traduce nada, x2 compara sin explicar y x4 sustituye la explicación por una etiqueta que no dice cómo funciona.',
        },
        {
          id: 'esi10-p5-cloze',
          type: 'CLOZE',
          instruction: 'Complete el texto divulgativo con las expresiones del recuadro.',
          wordBank: ['es decir', 'Es como si', 'el equivalente a', 'por qué importa', 'en cambio'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Una batería doméstica guarda unos 10 kWh, ' },
            { kind: 'GAP', gapId: 'c1', solution: ['el equivalente a'], width: 16 },
            { kind: 'TEXT', text: ' un día entero de consumo de una familia. ' },
            { kind: 'GAP', gapId: 'c2', solution: ['Es como si'], width: 11 },
            {
              kind: 'TEXT',
              text: ' tuviera usted un depósito de agua en el tejado: llena cuando sobra, vacía cuando falta. La red eléctrica, ',
            },
            { kind: 'GAP', gapId: 'c3', solution: ['en cambio'], width: 10 },
            {
              kind: 'TEXT',
              text: ', no almacena casi nada: lo que se produce se consume en el momento. ¿Y ',
            },
            { kind: 'GAP', gapId: 'c4', solution: ['por qué importa'], width: 16 },
            { kind: 'TEXT', text: '? Porque el sol no sale cuando más luz encendemos, ' },
            { kind: 'GAP', gapId: 'c5', solution: ['es decir'], width: 9 },
            { kind: 'TEXT', text: ' al anochecer.' },
          ],
        },
        {
          id: 'esi10-p5-info-trampas',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Tres trampas de la divulgación',
          text: 'La primera es la metáfora que se va de las manos: sirve para entrar y estorba si se estira más de dos frases. La segunda es el falso equilibrio, que presenta como discutido lo que no lo está solo porque alguien discrepa. La tercera es la precisión perdida: cambiar «se asocia con» por «causa» hace el texto más claro y falso, y eso no es divulgar, es otra cosa.',
        },
        {
          id: 'esi10-p5-ordering',
          type: 'ORDERING',
          instruction: 'Ordene el texto divulgativo.',
          items: [
            {
              id: 'v1',
              text: 'Cada año se tiran en España unos cuatro kilos de ropa por habitante.',
            },
            {
              id: 'v2',
              text: 'La mayor parte no se recicla: se incinera o acaba en un vertedero.',
            },
            {
              id: 'v3',
              text: 'El motivo es que casi ninguna prenda está hecha de una sola fibra, y separarlas cuesta más que fabricar tejido nuevo.',
            },
            {
              id: 'v4',
              text: 'Es como intentar recuperar el azúcar de un café con leche: el ingrediente sigue ahí, pero sacarlo no compensa.',
            },
            {
              id: 'v5',
              text: 'De ahí que la investigación se centre hoy en diseñar prendas de un solo material, antes que en mejorar las plantas de reciclaje.',
            },
          ],
          solution: ['v1', 'v2', 'v3', 'v4', 'v5'],
        },
        {
          id: 'esi10-p5-writing',
          type: 'WRITING',
          instruction: 'Escriba un texto divulgativo.',
          prompt:
            'Elija un tema técnico o científico que conozca y explíquelo en 150 a 250 palabras para la revista de un centro cívico, cuyos lectores no tienen formación en la materia. Use al menos una comparación, una cifra con referencia y una pregunta retórica. Termine con lo que el lector puede hacer o decidir con lo que acaba de leer, y no exagere la certeza de lo que se sabe.',
          minWords: 150,
          maxWords: 270,
          aiFeedback: true,
          sampleAnswer:
            'Cada vez que pedimos algo a una aplicación de inteligencia artificial, un ordenador que está a cientos de kilómetros hace un cálculo enorme y consume electricidad. ¿Cuánta? Una consulta de las habituales gasta aproximadamente lo que una bombilla de bajo consumo encendida cinco minutos. Parece poco, y lo es. El problema aparece al multiplicar: mil millones de consultas diarias equivalen al consumo eléctrico de una ciudad mediana.\n\nEs como el agua del grifo mientras uno se lava los dientes. Nadie nota el chorro de treinta segundos, y sin embargo, sumado a todos los hogares de un barrio, llena una piscina cada semana.\n\nConviene no sacar de aquí más conclusiones de las que caben. No está demostrado que este consumo vaya a seguir creciendo al ritmo actual: los modelos nuevos son bastante más eficientes que los de hace dos años, y buena parte de los centros de datos funciona ya con energía renovable. Los cálculos más citados, además, proceden de las propias empresas y todavía no se han podido verificar de forma independiente.\n\n¿Qué puede hacer usted con esto? Poca cosa a título individual, y conviene decirlo: apagar el móvil una hora no compensa nada medible. Lo que sí tiene efecto es exigir que las empresas publiquen el consumo de sus servicios, igual que los electrodomésticos llevan etiqueta energética desde hace treinta años. Sin ese dato, ni usted ni nadie puede comparar.',
        },
      ],
    },
  },
];
