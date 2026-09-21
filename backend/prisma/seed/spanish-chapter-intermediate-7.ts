import type { UnitSeed } from './chapter-beginner-1';

/**
 * Spanisch, Intermediate, Kapitel 7: „Sociedad y política“ (B2, Kapitel 1)
 *
 * Fünf Seiten. Das erste ausgearbeitete Kapitel des zweiten Kursbuchs und der
 * Einstieg in die B2-Hälfte: Bis hierher hat das Lehrwerk gezeigt, wie man
 * etwas erzählt und beschreibt. Ab hier geht es darum, etwas zu behaupten und
 * die Behauptung zu halten.
 *
 * Aufbau: Seite 1 bringt den Wortschatz der Meinungsäußerung samt der Regel,
 * an der B2 im Spanischen nicht vorbeikommt – verneinte Meinungsverben
 * verlangen den Subjuntivo. Seite 2 stellt die Konnektoren bereit, die eine
 * Argumentation gliedern, Seite 3 das Zugeständnis und den Widerspruch
 * (aunque mit Indikativ oder Subjuntivo, je nachdem, ob das Zugestandene neu
 * ist). Seite 4 zeigt beides in einer Podiumsdebatte, Seite 5 überführt das
 * Gesprochene in den geschriebenen Argumentationstext.
 *
 * Ab dieser Stufe stehen die Seiten ohne Übersetzung – wie im C1-Kapitel und
 * aus demselben Grund: Wer auf B2 über Gesellschaft diskutiert, liest die
 * Erklärung dazu auf Spanisch. Nur die Wortschatzlisten führen weiter
 * deutsche und englische Entsprechungen, weil ein einzelnes Wort ohne Kontext
 * sonst nicht zu erschließen ist.
 *
 * Die Beispiele sind parteipolitisch unbestimmt gehalten: Geübt wird die Form
 * der Argumentation, nicht eine Position. Wo ein Streitpunkt nötig ist, stehen
 * Themen mit echten Argumenten auf beiden Seiten.
 *
 * Sämtliche Texte sind eigenständig verfasst.
 */
const v = 1;

export const SPANISH_INTERMEDIATE_7_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – eine Meinung haben und sie als Meinung kennzeichnen.
  {
    order: 1,
    title: 'Tomar postura',
    subtitle: 'Opinar, matizar, no creer que',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'esi7-p1-h1', type: 'HEADING', level: 1, text: 'Tomar postura' },
        {
          id: 'esi7-p1-intro',
          type: 'TEXT',
          text: 'Opinar no es lo mismo que afirmar. Quien dice «el transporte público de esta ciudad funciona mal» presenta un juicio como si fuera un dato; quien dice «a mí me parece que el transporte público funciona mal, sobre todo fuera del centro» hace tres cosas a la vez: opina, se hace responsable de la opinión y la limita. En una discusión seria, esas tres cosas valen más que el volumen de la voz.',
        },
        {
          id: 'esi7-p1-intro2',
          type: 'TEXT',
          text: 'Este capítulo trata de cómo se sostiene una postura en español: con qué verbos se introduce, con qué conectores se ordena y de qué manera se reconoce lo que tiene de razón el otro sin abandonar lo propio. Empezamos por lo primero, que es también lo que más problemas gramaticales da.',
        },
        {
          id: 'esi7-p1-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: la discusión pública',
          items: [
            {
              term: 'la postura',
              translations: { en: 'stance, position', de: 'der Standpunkt' },
              example: 'Defendió su postura con datos.',
            },
            {
              term: 'el argumento',
              translations: { en: 'argument', de: 'das Argument' },
            },
            {
              term: 'la medida',
              translations: { en: 'measure, policy', de: 'die Maßnahme' },
              example: 'La medida entró en vigor en enero.',
            },
            {
              term: 'el debate',
              translations: { en: 'debate', de: 'die Debatte' },
            },
            {
              term: 'la ciudadanía',
              translations: { en: 'the citizenry', de: 'die Bürgerschaft' },
            },
            {
              term: 'el partidario, la partidaria',
              translations: { en: 'supporter', de: 'der Befürworter, die Befürworterin' },
              example: 'Es partidaria de ampliar el horario.',
            },
            {
              term: 'estar a favor de / en contra de',
              translations: { en: 'to be for / against', de: 'dafür / dagegen sein' },
            },
            {
              term: 'plantear',
              translations: { en: 'to raise, to put forward', de: 'aufwerfen, vorbringen' },
              example: 'Quisiera plantear una objeción.',
            },
            {
              term: 'sostener',
              translations: { en: 'to maintain, to claim', de: 'behaupten, vertreten' },
            },
            {
              term: 'matizar',
              translations: { en: 'to qualify, to nuance', de: 'differenzieren, einschränken' },
              example: 'Habría que matizar esa afirmación.',
            },
            {
              term: 'el matiz',
              translations: { en: 'nuance', de: 'die Nuance, der Zwischenton' },
            },
            {
              term: 'poner en duda',
              translations: { en: 'to call into question', de: 'in Zweifel ziehen' },
            },
            {
              term: 'a mi juicio',
              translations: { en: 'in my view', de: 'meines Erachtens' },
            },
            {
              term: 'en la práctica',
              translations: { en: 'in practice', de: 'in der Praxis' },
            },
          ],
        },
        {
          id: 'esi7-p1-info-opinar',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Creo que sí, no creo que sea',
          text: 'Los verbos de opinión (creer, pensar, parecer, considerar, estar claro) llevan indicativo en afirmativo y subjuntivo en negativo. La razón es lógica antes que gramatical: al afirmar, se presenta el contenido como algo que uno sostiene; al negar, se lo retira del terreno de lo afirmado y el verbo lo marca. En preguntas la elección es libre y significa algo: con indicativo se pregunta de verdad, con subjuntivo se sugiere ya la respuesta negativa.',
          table: {
            headers: ['Forma', 'Ejemplo', 'Modo'],
            rows: [
              ['afirmativa', 'Creo que la medida funciona.', 'indicativo'],
              ['negativa', 'No creo que la medida funcione.', 'subjuntivo'],
              ['pregunta abierta', '¿Crees que funciona?', 'indicativo'],
              ['pregunta orientada', '¿Crees que funcione, de verdad?', 'subjuntivo'],
              ['valoración', 'Es lógico que la gente proteste.', 'subjuntivo'],
              ['constatación', 'Es evidente que la gente protesta.', 'indicativo'],
            ],
          },
        },
        {
          id: 'esi7-p1-choice-modo',
          type: 'CHOICE',
          instruction: 'Elija la frase correcta.',
          question: '¿Cuál de estas frases está bien construida?',
          options: [
            { id: 'm1', text: 'No me parece que la propuesta resuelve el problema de fondo.' },
            { id: 'm2', text: 'No me parece que la propuesta resuelva el problema de fondo.' },
            { id: 'm3', text: 'Es evidente que la propuesta resuelva el problema de fondo.' },
            { id: 'm4', text: 'Dudo que la propuesta resuelve el problema de fondo.' },
          ],
          multiple: false,
          solution: ['m2'],
          explanation:
            'Parecer negado pide subjuntivo: resuelva. En m3 el error es el contrario, porque «es evidente» constata y por eso lleva indicativo (resuelve). En m4, dudar expresa duda y pide subjuntivo también en afirmativo: dudo que resuelva.',
        },
        {
          id: 'esi7-p1-matizar',
          type: 'TEXT',
          text: 'Junto al modo verbal hay un segundo recurso, menos visible y igual de importante: el matiz. Una afirmación sin matizar es fácil de rebatir, porque basta un contraejemplo para tumbarla. «Los jóvenes no leen» cae con un solo joven que lea. «Entre los jóvenes ha bajado la lectura de libros, aunque ha subido la de textos en pantalla» ya no cae: dice menos, pero lo que dice se sostiene.',
        },
        {
          id: 'esi7-p1-info-matices',
          type: 'INFO',
          variant: 'TIP',
          title: 'Instrumentos para matizar',
          text: 'Matizar no es dudar de lo que uno dice: es decir exactamente hasta dónde llega. Hay cuatro maneras de hacerlo y conviene tenerlas separadas, porque responden a preguntas distintas: cuánto, dónde, con qué seguridad y según quién.',
          table: {
            headers: ['Qué se limita', 'Expresión', 'Ejemplo'],
            rows: [
              [
                'la cantidad',
                'en buena parte, la mayoría de',
                'La mayoría de los casos se resuelven así.',
              ],
              ['el ámbito', 'en el caso de, sobre todo en', 'Sobre todo en las ciudades grandes.'],
              ['la certeza', 'todo indica que, parece que', 'Todo indica que la tendencia sigue.'],
              ['la fuente', 'según, de acuerdo con', 'Según el último informe municipal.'],
            ],
          },
        },
        {
          id: 'esi7-p1-cloze',
          type: 'CLOZE',
          instruction: 'Complete con la forma correcta del verbo indicado.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Creo que el problema ' },
            { kind: 'GAP', gapId: 'c1', solution: ['es'], hint: 'ser', width: 6 },
            { kind: 'TEXT', text: ' más antiguo de lo que se dice, pero no creo que ' },
            { kind: 'GAP', gapId: 'c2', solution: ['tenga'], hint: 'tener', width: 7 },
            { kind: 'TEXT', text: ' una solución rápida. Es evidente que la gente ' },
            { kind: 'GAP', gapId: 'c3', solution: ['está'], hint: 'estar', width: 6 },
            { kind: 'TEXT', text: ' cansada, y me parece lógico que ' },
            { kind: 'GAP', gapId: 'c4', solution: ['pida', 'pidan'], hint: 'pedir', width: 7 },
            { kind: 'TEXT', text: ' explicaciones. Dudo, eso sí, que las ' },
            {
              kind: 'GAP',
              gapId: 'c5',
              solution: ['reciba', 'reciban'],
              hint: 'recibir',
              width: 8,
            },
            { kind: 'TEXT', text: ' antes de las elecciones.' },
          ],
        },
        {
          id: 'esi7-p1-match-matices',
          type: 'MATCHING',
          instruction: 'Relacione cada afirmación tajante con su versión matizada.',
          left: [
            { id: 'a1', text: 'El teletrabajo es más productivo.' },
            { id: 'a2', text: 'Nadie confía ya en los medios.' },
            { id: 'a3', text: 'Las ayudas no sirven para nada.' },
            { id: 'a4', text: 'La ciudad se ha vuelto inhabitable.' },
          ],
          right: [
            {
              id: 'b1',
              text: 'Según varios estudios recientes, el teletrabajo aumenta la productividad en las tareas que exigen concentración.',
            },
            {
              id: 'b2',
              text: 'La confianza en los medios tradicionales ha descendido, sobre todo entre los menores de treinta años.',
            },
            {
              id: 'b3',
              text: 'Las ayudas llegan a quien ya sabe pedirlas, de modo que en la práctica no alcanzan a los casos más urgentes.',
            },
            {
              id: 'b4',
              text: 'Vivir en el centro se ha encarecido hasta un punto que expulsa a los vecinos de toda la vida.',
            },
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

  // ====================================================== SEITE 2
  // Seite 2 – die Konnektoren: was ein Argument mit dem nächsten verbindet.
  {
    order: 2,
    title: 'Los conectores',
    subtitle: 'Ordenar un razonamiento',
    estimatedMinutes: 27,
    content: {
      version: v,
      blocks: [
        { id: 'esi7-p2-h1', type: 'HEADING', level: 1, text: 'Los conectores' },
        {
          id: 'esi7-p2-intro',
          type: 'TEXT',
          text: 'Una argumentación no es una lista de frases verdaderas. Es una cadena en la que cada eslabón indica qué relación tiene con el anterior: si lo refuerza, si lo contradice, si saca una consecuencia o si abre una excepción. Los conectores son las señales de esa cadena, y en un texto de nivel B2 son lo primero que se nota cuando faltan: el lector entiende todas las frases y no entiende el conjunto.',
        },
        {
          id: 'esi7-p2-info-tipos',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Cinco funciones, muchos conectores',
          text: 'Agrupe los conectores por lo que hacen, no por su aspecto. Dentro de cada grupo las diferencias son de registro y de posición en la frase, pero la función es la misma, y esa es la que decide cuál se puede usar en cada punto del texto.',
          table: {
            headers: ['Función', 'Conectores', 'Ejemplo'],
            rows: [
              ['añadir', 'además, asimismo, a esto se suma', 'Además, el coste sería menor.'],
              [
                'contrastar',
                'sin embargo, no obstante, en cambio',
                'Sin embargo, el plazo es corto.',
              ],
              ['concluir', 'por lo tanto, así pues, de ahí que', 'Por lo tanto, conviene esperar.'],
              ['causar', 'ya que, dado que, puesto que', 'Dado que el plazo termina hoy…'],
              [
                'reformular',
                'es decir, en otras palabras, o sea',
                'Es decir, nadie se hace cargo.',
              ],
            ],
          },
        },
        {
          id: 'esi7-p2-registro',
          type: 'TEXT',
          text: 'Dentro de un mismo grupo no todo vale en cualquier sitio. «O sea» reformula en una conversación y desentona en un informe, donde se escribe «es decir». «No obstante» es formal y suele abrir frase; «pero» es neutro y nunca abre párrafo en un texto cuidado. Y «de ahí que» arrastra una particularidad gramatical que conviene recordar: exige subjuntivo. De ahí que muchos lo eviten.',
        },
        {
          id: 'esi7-p2-info-deahique',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Conectores que cambian el modo',
          text: 'La mayoría de los conectores no tocan el verbo. Unos pocos sí lo hacen, y son precisamente los que más suben el nivel de un texto: «de ahí que» y «no es que» piden siempre subjuntivo; «aunque» admite los dos modos con significados distintos, y de eso trata la página siguiente.',
          table: {
            headers: ['Conector', 'Modo', 'Ejemplo'],
            rows: [
              ['de ahí que', 'subjuntivo', 'Faltan datos; de ahí que nadie decida.'],
              [
                'no es que… sino que',
                'subj. + indic.',
                'No es que falte dinero, sino que está mal repartido.',
              ],
              ['puesto que / dado que', 'indicativo', 'Dado que faltan datos, nadie decide.'],
              ['para que', 'subjuntivo', 'Se publicó para que todos lo supieran.'],
            ],
          },
        },
        {
          id: 'esi7-p2-choice-conector',
          type: 'CHOICE',
          instruction: 'Complete el razonamiento.',
          question:
            'El ayuntamiento anunció la reforma sin consultar a los vecinos. ______, la oposición pidió que se retirara el proyecto.',
          options: [
            { id: 'x1', text: 'Por el contrario' },
            { id: 'x2', text: 'Por lo tanto' },
            { id: 'x3', text: 'Es decir' },
            { id: 'x4', text: 'Aun así' },
          ],
          multiple: false,
          solution: ['x2'],
          explanation:
            'La segunda frase es la consecuencia de la primera, no su contrario ni su reformulación. «Por lo tanto» marca esa relación. «Aun así» diría lo opuesto: que la oposición no pidió nada a pesar de la falta de consulta.',
        },
        {
          id: 'esi7-p2-cloze',
          type: 'CLOZE',
          instruction:
            'Complete el texto con los conectores del recuadro. Cada uno se usa una sola vez.',
          wordBank: ['Dado que', 'Sin embargo', 'Además', 'por lo tanto', 'es decir'],
          caseSensitive: false,
          segments: [
            { kind: 'GAP', gapId: 'c1', solution: ['Dado que'], width: 10 },
            {
              kind: 'TEXT',
              text: ' el número de usuarios ha crecido un 40 %, la red actual se ha quedado corta. ',
            },
            { kind: 'GAP', gapId: 'c2', solution: ['Además'], width: 9 },
            { kind: 'TEXT', text: ', los trenes circulan con material de hace treinta años. ' },
            { kind: 'GAP', gapId: 'c3', solution: ['Sin embargo'], width: 12 },
            {
              kind: 'TEXT',
              text: ', el presupuesto de este año no prevé ninguna compra. La ampliación, ',
            },
            { kind: 'GAP', gapId: 'c4', solution: ['es decir'], width: 9 },
            { kind: 'TEXT', text: ' lo único que resolvería el problema de fondo, queda ' },
            { kind: 'GAP', gapId: 'c5', solution: ['por lo tanto'], width: 13 },
            { kind: 'TEXT', text: ' aplazada un año más.' },
          ],
        },
        {
          id: 'esi7-p2-ordering',
          type: 'ORDERING',
          instruction: 'Ordene los fragmentos para que formen un párrafo argumentativo coherente.',
          items: [
            { id: 'o1', text: 'La ciudad quiere reducir el tráfico en el centro histórico.' },
            { id: 'o2', text: 'Para ello ha propuesto cerrar tres calles al coche particular.' },
            { id: 'o3', text: 'Sin embargo, la medida no viene acompañada de más autobuses.' },
            {
              id: 'o4',
              text: 'De ahí que los comerciantes teman perder a los clientes de los barrios exteriores.',
            },
            { id: 'o5', text: 'Convendría, por lo tanto, aprobar las dos cosas a la vez.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5'],
        },
        {
          id: 'esi7-p2-info-posicion',
          type: 'INFO',
          variant: 'TIP',
          title: 'Dónde va el conector',
          text: 'Los conectores de párrafo (sin embargo, además, por lo tanto) abren la frase y van entre comas si se desplazan. Las conjunciones (pero, ya que, aunque) unen dentro de la frase y no pueden abrir párrafo en un texto formal. Un error frecuente de quien escribe en español desde el alemán es colocar el conector en primera posición y mover el verbo delante del sujeto: en español el orden no cambia, y «Sin embargo es el plazo corto» suena a traducción.',
        },
        {
          id: 'esi7-p2-writing',
          type: 'WRITING',
          instruction: 'Escriba un párrafo encadenado.',
          prompt:
            'Escriba un párrafo de entre 80 y 120 palabras sobre la propuesta de limitar a 30 km/h la velocidad en todas las calles de una ciudad. Use al menos cuatro conectores de funciones distintas (añadir, contrastar, causar, concluir) y sostenga una sola postura de principio a fin.',
          minWords: 80,
          maxWords: 130,
          aiFeedback: true,
          sampleAnswer:
            'La limitación general a 30 km/h reduce de forma comprobada la gravedad de los accidentes, dado que a esa velocidad la distancia de frenado se acorta casi a la mitad. Además, el ruido del tráfico baja de manera perceptible, algo que agradece cualquiera que viva en una calle de paso. Sin embargo, la medida solo convence si los tiempos de viaje no se disparan, y eso depende de los semáforos más que del límite. Por lo tanto, la ciudad debería aprobar el límite y revisar a la vez la coordinación semafórica; de lo contrario, la norma se cumplirá a regañadientes y durará poco.',
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – das Zugeständnis: aunque mit Indikativ oder Subjuntivo.
  {
    order: 3,
    title: 'Conceder y rebatir',
    subtitle: 'Aunque, si bien, ahora bien',
    estimatedMinutes: 29,
    content: {
      version: v,
      blocks: [
        { id: 'esi7-p3-h1', type: 'HEADING', level: 1, text: 'Conceder y rebatir' },
        {
          id: 'esi7-p3-intro',
          type: 'TEXT',
          text: 'Quien no concede nada no convence a nadie. Un argumento que ignora por completo lo que dice el otro da a entender una de dos cosas: o no se ha entendido, o se prefiere no verlo. En cambio, quien reconoce primero lo que el otro tiene de razón y solo después explica por qué eso no basta, gana dos cosas a la vez: credibilidad y el control de la conversación.',
        },
        {
          id: 'esi7-p3-info-aunque',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Aunque: indicativo o subjuntivo',
          text: 'Aunque admite los dos modos y la diferencia no es de cortesía, sino de información. Con indicativo, lo que sigue a aunque es un hecho que se presenta como nuevo o que se quiere destacar. Con subjuntivo, es algo ya sabido por los dos, admitido de paso, o bien una hipótesis que ni siquiera se da por cierta. «Aunque cuesta mucho» informa del precio; «aunque cueste mucho» lo da por descontado y pasa de largo.',
          table: {
            headers: ['Frase', 'Modo', 'Lo que significa'],
            rows: [
              ['Aunque la obra cuesta mucho, hay que hacerla.', 'indicativo', 'informo del coste'],
              [
                'Aunque la obra cueste mucho, hay que hacerla.',
                'subjuntivo',
                'ya lo sabemos; lo admito',
              ],
              ['Aunque cueste el doble, hay que hacerla.', 'subjuntivo', 'hipótesis: puede costar'],
              ['Aunque costó mucho, mereció la pena.', 'indicativo', 'hecho pasado, informativo'],
            ],
          },
        },
        {
          id: 'esi7-p3-choice-aunque',
          type: 'CHOICE',
          instruction: 'Lea la situación y elija.',
          question:
            'Todo el mundo en la reunión sabe que el plazo es muy corto. Usted quiere admitirlo y seguir adelante. ¿Qué dice?',
          options: [
            { id: 'a1', text: 'Aunque el plazo es muy corto, podemos intentarlo.' },
            { id: 'a2', text: 'Aunque el plazo sea muy corto, podemos intentarlo.' },
            { id: 'a3', text: 'Aunque el plazo fuera muy corto, podemos intentarlo.' },
            { id: 'a4', text: 'Aunque el plazo será muy corto, podemos intentarlo.' },
          ],
          multiple: false,
          solution: ['a2'],
          explanation:
            'El dato es conocido por todos y usted lo admite de paso: subjuntivo (sea). Con indicativo (a1) estaría informando de algo que la sala ya sabe, lo que suena a reproche. En a3 el imperfecto de subjuntivo lo presenta como irreal, y en a4 el futuro no cabe detrás de aunque.',
        },
        {
          id: 'esi7-p3-info-concesivos',
          type: 'INFO',
          variant: 'TIP',
          title: 'La familia del «sí, pero»',
          text: 'Aunque no está solo. Estas expresiones hacen lo mismo con distinto grado de formalidad y distinta fuerza: «si bien» es de texto escrito y concede poco; «ahora bien» concede primero y luego gira con fuerza; «eso sí» añade una reserva al final; «por más que» insiste en que la concesión no cambia nada.',
          table: {
            headers: ['Expresión', 'Registro', 'Ejemplo'],
            rows: [
              ['si bien', 'escrito, formal', 'Si bien la cifra ha bajado, sigue siendo alta.'],
              ['ahora bien', 'neutro', 'Tiene razón. Ahora bien, el coste lo paga otro.'],
              ['eso sí', 'oral, neutro', 'Funciona. Eso sí, hay que esperar seis meses.'],
              ['por más que', 'neutro, enfático', 'Por más que lo repita, nadie le hace caso.'],
              ['a pesar de (que)', 'neutro', 'A pesar de las protestas, se aprobó.'],
            ],
          },
        },
        {
          id: 'esi7-p3-texto',
          type: 'TEXT',
          text: 'La estructura que mejor funciona en una réplica tiene tres pasos y siempre el mismo orden. Primero se reformula lo que ha dicho el otro, con sus mejores palabras y no con las peores. Después se concede el punto que es cierto. Y solo al final se explica por qué, aun siendo cierto, no lleva a la conclusión que él saca. Invertir el orden —negar primero y conceder al final— produce el efecto contrario: suena a retirada.',
        },
        {
          id: 'esi7-p3-match-replica',
          type: 'MATCHING',
          instruction: 'Relacione cada paso de la réplica con la fórmula que le corresponde.',
          left: [
            { id: 'r1', text: 'Reformular la postura ajena' },
            { id: 'r2', text: 'Conceder lo que es cierto' },
            { id: 'r3', text: 'Introducir la objeción' },
            { id: 'r4', text: 'Cerrar con la propia conclusión' },
          ],
          right: [
            { id: 's1', text: 'Si le he entendido bien, usted sostiene que…' },
            { id: 's2', text: 'Es cierto que… y en eso estamos de acuerdo.' },
            { id: 's3', text: 'Ahora bien, de ahí no se sigue que…' },
            { id: 's4', text: 'Por eso creo que convendría más bien…' },
          ],
          solution: [
            { leftId: 'r1', rightId: 's1' },
            { leftId: 'r2', rightId: 's2' },
            { leftId: 'r3', rightId: 's3' },
            { leftId: 'r4', rightId: 's4' },
          ],
        },
        {
          id: 'esi7-p3-cloze',
          type: 'CLOZE',
          instruction:
            'Complete con la forma verbal adecuada. Fíjese en si el dato es nuevo o ya conocido.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '▸ Como todos sabemos, aunque el presupuesto ' },
            { kind: 'GAP', gapId: 'c1', solution: ['sea'], hint: 'ser, dato conocido', width: 6 },
            {
              kind: 'TEXT',
              text: ' ajustado, la reforma sigue siendo necesaria.\n▸ Quizá no lo sepan: aunque el edificio ',
            },
            { kind: 'GAP', gapId: 'c2', solution: ['tiene'], hint: 'tener, dato nuevo', width: 7 },
            {
              kind: 'TEXT',
              text: ' cien años, la estructura está en perfecto estado.\n▸ Por más que ustedes ',
            },
            { kind: 'GAP', gapId: 'c3', solution: ['insistan'], hint: 'insistir', width: 9 },
            { kind: 'TEXT', text: ', el plazo no se puede mover.\n▸ Si bien la participación ' },
            {
              kind: 'GAP',
              gapId: 'c4',
              solution: ['bajó', 'ha bajado'],
              hint: 'bajar, pasado',
              width: 9,
            },
            { kind: 'TEXT', text: ' respecto al año pasado, el resultado es válido.' },
          ],
        },
        {
          id: 'esi7-p3-writing',
          type: 'WRITING',
          instruction: 'Escriba una réplica en tres pasos.',
          prompt:
            'Alguien sostiene en una reunión de vecinos: «Poner ascensor en el edificio es un lujo; los que vivimos en el primero pagaríamos por algo que no usamos». Escriba una réplica de entre 90 y 140 palabras siguiendo los tres pasos: reformular, conceder, objetar. Use «aunque» al menos una vez y «ahora bien» o «si bien» otra.',
          minWords: 90,
          maxWords: 150,
          aiFeedback: true,
          sampleAnswer:
            'Si le he entendido bien, usted dice que el reparto del coste sería injusto para quienes viven en las plantas bajas. Es cierto: el uso será muy desigual, y aunque la ley reparta por coeficiente, nadie discute que usted subirá al ascensor menos que el del quinto. Ahora bien, de ahí no se sigue que la obra sea un lujo. Un edificio sin ascensor pierde valor entero, también el primero, y encierra en casa a quien no puede con las escaleras, que hoy son dos vecinos y mañana podemos ser cualquiera de nosotros. Por eso propongo aprobar la obra con un reparto corregido por planta, que es exactamente lo que su objeción reclama.',
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – die Debatte in Betrieb: Wortmeldung, Unterbrechung, Rückgabe.
  {
    order: 4,
    title: 'En el debate',
    subtitle: 'Tomar y ceder la palabra',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'esi7-p4-h1', type: 'HEADING', level: 1, text: 'En el debate' },
        {
          id: 'esi7-p4-intro',
          type: 'TEXT',
          text: 'Hasta aquí, la argumentación por escrito. En una discusión hablada se añade un problema que el papel no tiene: hay que entrar. Quien espera educadamente a que le den la palabra en una mesa de cinco personas no habla nunca; quien interrumpe sin fórmula alguna queda como un maleducado. El español tiene un repertorio bastante fijo para las dos cosas, y merece la pena aprendérselo de memoria.',
        },
        {
          id: 'esi7-p4-dialogo',
          type: 'DIALOGUE',
          title: 'Mesa redonda: ¿turismo sin límite?',
          audioUrl: 'placeholder://es-b2-debate',
          lines: [
            {
              speaker: 'Moderadora',
              text: 'Empezamos por usted, señora Iriarte. ¿Habría que limitar el número de pisos turísticos en el casco antiguo?',
            },
            {
              speaker: 'Iriarte',
              text: 'Sin ninguna duda. El barrio ha perdido en diez años la mitad de sus vecinos empadronados. No es que el turismo sea el único culpable, pero es el factor que más ha pesado.',
            },
            {
              speaker: 'Ferrán',
              text: 'Perdone que la interrumpa un momento. ¿No estará confundiendo dos cosas? Los vecinos se van también porque los sueldos no dan para vivir en el centro.',
            },
            {
              speaker: 'Iriarte',
              text: 'Déjeme terminar la idea y le contesto. Se van, efectivamente, por el precio. Y el precio sube porque un piso alquilado por noches renta el triple. Es el mismo fenómeno visto por los dos lados.',
            },
            {
              speaker: 'Ferrán',
              text: 'En eso tiene razón, y lo concedo. Ahora bien, de ahí a prohibir hay un trecho. Yo plantearía más bien un tope por edificio, no una prohibición general.',
            },
            {
              speaker: 'Moderadora',
              text: 'Señor Ferrán, ¿me permite? Vayamos a lo concreto: ¿qué tope propone usted?',
            },
            {
              speaker: 'Ferrán',
              text: 'Un piso por cada diez viviendas. Es lo que funcionó en Oporto, por citar un caso cercano.',
            },
            {
              speaker: 'Iriarte',
              text: 'Por alusiones, le respondo brevemente: en Oporto el tope llegó cuando el centro ya estaba vaciado. Aquí todavía estamos a tiempo, y esa es toda la diferencia.',
            },
          ],
        },
        {
          id: 'esi7-p4-info-turnos',
          type: 'INFO',
          variant: 'TIP',
          title: 'Fórmulas para el turno de palabra',
          text: 'Estas expresiones no aportan contenido: gestionan quién habla. Por eso se aprenden como bloques, sin analizarlas, igual que se aprende «¿me pasas la sal?». Obsérvelas en el diálogo anterior: están todas.',
          table: {
            headers: ['Para qué', 'Fórmula'],
            rows: [
              ['pedir la palabra', '¿Me permite? / Si me permite un momento'],
              ['interrumpir con cortesía', 'Perdone que le interrumpa, pero…'],
              ['defender el turno', 'Déjeme terminar la idea y le contesto.'],
              ['responder a una alusión', 'Por alusiones, le respondo brevemente.'],
              ['ceder el turno', 'No sé qué opina usted. / Le dejo con la palabra.'],
              ['volver al tema', 'Volviendo a lo que decíamos… / Vayamos a lo concreto.'],
            ],
          },
        },
        {
          id: 'esi7-p4-choice-turno',
          type: 'CHOICE',
          instruction: 'Elija la reacción adecuada.',
          question:
            'Usted está exponiendo su argumento y alguien le corta a media frase. Quiere terminar sin crear un conflicto. ¿Qué dice?',
          options: [
            { id: 't1', text: '¡No me interrumpa!' },
            { id: 't2', text: 'Déjeme terminar la idea y ahora mismo le contesto.' },
            { id: 't3', text: 'Bueno, da igual, siga usted.' },
            { id: 't4', text: 'Es que usted siempre hace lo mismo.' },
          ],
          multiple: false,
          solution: ['t2'],
          explanation:
            'La fórmula defiende el turno y promete la respuesta, con lo que el otro no pierde nada por esperar. t1 y t4 convierten el desacuerdo en un choque personal; t3 regala el turno y con él el argumento a medio exponer.',
        },
        {
          id: 'esi7-p4-ordering',
          type: 'ORDERING',
          instruction: 'Ordene la intervención de manera que resulte cortés y eficaz.',
          items: [
            { id: 'd1', text: 'Perdone que le interrumpa un momento.' },
            { id: 'd2', text: 'Ha dicho usted que la medida no costaría nada al ayuntamiento.' },
            { id: 'd3', text: 'Es cierto que no figura en el presupuesto de este año.' },
            {
              id: 'd4',
              text: 'Ahora bien, el mantenimiento sí aparecerá en el del año que viene.',
            },
            { id: 'd5', text: 'Me gustaría saber quién lo va a asumir.' },
          ],
          solution: ['d1', 'd2', 'd3', 'd4', 'd5'],
        },
        {
          id: 'esi7-p4-info-cortesia',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'El solapamiento no siempre es descortesía',
          text: 'En buena parte del mundo hispanohablante se habla con solapamientos: se empieza la frase antes de que el otro haya terminado la suya, y eso no se interpreta como una falta de respeto sino como señal de interés. Quien viene de una cultura de turnos estrictos suele leerlo como agresividad y, peor aún, se queda callado esperando un silencio que no llega. La regla práctica es sencilla: entre en cuanto el otro cierre una idea, no cuando haga una pausa, porque la pausa quizá no llegue.',
        },
        {
          id: 'esi7-p4-cloze',
          type: 'CLOZE',
          instruction: 'Complete las intervenciones con las fórmulas del recuadro.',
          wordBank: ['Por alusiones', 'me permite', 'Volviendo', 'Déjeme', 'interrumpa'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '▸ Señora presidenta, ¿' },
            { kind: 'GAP', gapId: 'c1', solution: ['me permite'], width: 11 },
            { kind: 'TEXT', text: '? Quisiera añadir un dato.\n▸ Perdone que le ' },
            { kind: 'GAP', gapId: 'c2', solution: ['interrumpa'], width: 11 },
            { kind: 'TEXT', text: ', pero esa cifra es del año pasado.\n▸ ' },
            { kind: 'GAP', gapId: 'c3', solution: ['Déjeme'], width: 8 },
            { kind: 'TEXT', text: ' acabar y le doy la palabra enseguida.\n▸ ' },
            { kind: 'GAP', gapId: 'c4', solution: ['Por alusiones'], width: 14 },
            { kind: 'TEXT', text: ', debo aclarar que nunca dije tal cosa.\n▸ ' },
            { kind: 'GAP', gapId: 'c5', solution: ['Volviendo'], width: 10 },
            { kind: 'TEXT', text: ' al asunto que nos ocupa, ¿cuándo empezarían las obras?' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – vom gesprochenen Streit zum geschriebenen Argumentationstext.
  {
    order: 5,
    title: 'Del debate al texto',
    subtitle: 'Escribir una argumentación',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'esi7-p5-h1', type: 'HEADING', level: 1, text: 'Del debate al texto' },
        {
          id: 'esi7-p5-intro',
          type: 'TEXT',
          text: 'Un texto argumentativo tiene una ventaja sobre la discusión hablada y una desventaja. La ventaja es que nadie interrumpe. La desventaja es la misma: nadie interrumpe, de modo que el autor debe anticipar las objeciones y responderlas él mismo, o el lector se quedará con la suya y dejará de leer. De ahí que la estructura clásica incluya siempre un apartado dedicado al adversario.',
        },
        {
          id: 'esi7-p5-info-estructura',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Las cuatro partes de un texto argumentativo',
          text: 'La secuencia no es un capricho escolar: cada parte responde a una pregunta que el lector se hace en ese punto exacto. Saltarse la tercera es el error más común y el más caro, porque deja intactas las razones del que piensa lo contrario.',
          table: {
            headers: ['Parte', 'Pregunta del lector', 'Extensión'],
            rows: [
              ['presentación del tema', '¿De qué me hablan y por qué ahora?', '1 párrafo'],
              ['tesis y argumentos', '¿Qué sostiene y con qué razones?', '2–3 párrafos'],
              ['objeción y respuesta', '¿Y lo que yo pienso, lo ha tenido en cuenta?', '1 párrafo'],
              ['conclusión', '¿Qué hago con esto?', '1 párrafo'],
            ],
          },
        },
        {
          id: 'esi7-p5-texto-modelo',
          type: 'TEXT',
          text: 'Lea el siguiente párrafo de objeción y respuesta, que concentra casi todo lo visto en el capítulo: «Se objetará que una consulta ciudadana retrasa las obras varios meses, y la objeción es seria: quien espera un ascensor a los ochenta años no tiene meses que perder. Ahora bien, conviene recordar que el proyecto anterior se paralizó dos años enteros por los recursos vecinales. Consultar antes no es perder tiempo; es gastarlo en un momento distinto y con menos riesgo de perderlo todo».',
        },
        {
          id: 'esi7-p5-choice-tesis',
          type: 'CHOICE',
          instruction: 'Elija la mejor tesis para un texto argumentativo de unas 300 palabras.',
          options: [
            { id: 'z1', text: 'En este texto voy a hablar del transporte público de mi ciudad.' },
            { id: 'z2', text: 'El transporte público es un tema muy importante hoy en día.' },
            {
              id: 'z3',
              text: 'La gratuidad del transporte público sería un error mientras la red siga sin llegar a los barrios exteriores.',
            },
            {
              id: 'z4',
              text: 'Hay quien está a favor de la gratuidad y hay quien está en contra.',
            },
          ],
          multiple: false,
          solution: ['z3'],
          explanation:
            'Una tesis afirma algo discutible y acotado, de modo que se pueda estar en desacuerdo con ella. z1 anuncia el tema en vez de sostener nada, z2 es una fórmula vacía y z4 describe el debate desde fuera sin entrar en él.',
        },
        {
          id: 'esi7-p5-match-funciones',
          type: 'MATCHING',
          instruction: 'Relacione cada frase con la parte del texto a la que pertenece.',
          left: [
            {
              id: 'p1',
              text: 'Desde el pasado mes de marzo, catorce ciudades españolas han aprobado alguna forma de zona de bajas emisiones.',
            },
            {
              id: 'p2',
              text: 'A mi juicio, estas zonas solo cumplen su función si van unidas a una ampliación del transporte público.',
            },
            {
              id: 'p3',
              text: 'Se dirá que quien no puede cambiar de coche queda excluido del centro, y es una objeción de peso.',
            },
            {
              id: 'p4',
              text: 'Convendría, en definitiva, aprobar las dos medidas en el mismo pleno y no en dos legislaturas distintas.',
            },
          ],
          right: [
            { id: 'q1', text: 'Presentación del tema' },
            { id: 'q2', text: 'Tesis' },
            { id: 'q3', text: 'Objeción' },
            { id: 'q4', text: 'Conclusión' },
          ],
          solution: [
            { leftId: 'p1', rightId: 'q1' },
            { leftId: 'p2', rightId: 'q2' },
            { leftId: 'p3', rightId: 'q3' },
            { leftId: 'p4', rightId: 'q4' },
          ],
        },
        {
          id: 'esi7-p5-info-registro',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'El registro del texto argumentativo',
          text: 'En un texto formal se evita la primera persona del plural inclusiva («todos sabemos que…»), que da por supuesto el acuerdo que hay que ganar. Se prefiere la impersonal con «se» (se objetará, cabe recordar, conviene distinguir) o una primera persona declarada y escasa («a mi juicio», una o dos veces en todo el texto). Y se evitan los superlativos: «absolutamente insostenible» convence menos que «insostenible», porque el adverbio delata que el autor no confía en el adjetivo.',
        },
        {
          id: 'esi7-p5-cloze',
          type: 'CLOZE',
          instruction: 'Complete el párrafo de objeción con las expresiones del recuadro.',
          wordBank: ['Se objetará', 'cabe recordar', 'Ahora bien', 'de ahí que', 'Conviene'],
          caseSensitive: false,
          segments: [
            { kind: 'GAP', gapId: 'c1', solution: ['Se objetará'], width: 12 },
            { kind: 'TEXT', text: ' que la formación en horario laboral cuesta productividad. ' },
            { kind: 'GAP', gapId: 'c2', solution: ['Ahora bien'], width: 11 },
            { kind: 'TEXT', text: ', ' },
            { kind: 'GAP', gapId: 'c3', solution: ['cabe recordar'], width: 14 },
            {
              kind: 'TEXT',
              text: ' que la rotación de personal cuesta bastante más. La empresa pierde cada año a un trabajador de cada cinco, ',
            },
            { kind: 'GAP', gapId: 'c4', solution: ['de ahí que'], width: 11 },
            { kind: 'TEXT', text: ' el cálculo deba hacerse a tres años y no a uno. ' },
            { kind: 'GAP', gapId: 'c5', solution: ['Conviene'], width: 9 },
            { kind: 'TEXT', text: ', por lo tanto, comparar las dos cifras antes de decidir.' },
          ],
        },
        {
          id: 'esi7-p5-writing',
          type: 'WRITING',
          instruction: 'Escriba un texto argumentativo completo.',
          prompt:
            'Su ayuntamiento estudia prohibir los coches particulares en el casco antiguo los fines de semana. Escriba un texto de entre 200 y 300 palabras para la sección de opinión del periódico local. Siga las cuatro partes (presentación, tesis y argumentos, objeción y respuesta, conclusión), sostenga una postura clara, dedique un párrafo entero a la objeción más fuerte de quien piensa lo contrario y mantenga un registro formal con conectores variados.',
          minWords: 200,
          maxWords: 320,
          aiFeedback: true,
          sampleAnswer:
            'El pleno municipal estudia desde el mes pasado cerrar el casco antiguo al coche particular los sábados y domingos. La propuesta ha encendido el debate más vivo que ha tenido esta ciudad en años, y merece discutirse con algo más que consignas.\n\nA mi juicio, la medida debería aprobarse, pero no por el motivo que suele alegarse. El argumento del aire limpio es real y a la vez modesto: dos días sin coches mejoran poco una media anual. La razón de peso es otra, y es de espacio. Las calles del casco tienen entre cuatro y seis metros de ancho; con coches aparcados a un lado y circulando por el otro, al peatón le queda menos de un metro. Devolver esos metros dos días por semana cambia el uso de un barrio entero, y eso sí se nota desde el primer fin de semana.\n\nSe objetará que la medida perjudica a los comercios, que viven precisamente del sábado. La objeción es la más seria de cuantas se han planteado y no puede despacharse diciendo que ya se verá. Ahora bien, los datos de las ciudades que lo han hecho antes apuntan en dirección contraria: donde se peatonalizó el centro, la facturación del comercio de proximidad subió y la del que dependía del cliente de paso bajó. No es que nadie pierda; es que cambia quién gana, y eso exige acompañar la medida con ayudas de transición para los locales afectados.\n\nConvendría, en definitiva, aprobar el cierre junto con esas ayudas y con un refuerzo del autobús de fin de semana, y revisarlo con cifras al cabo de un año. Aprobarlo solo, sin lo demás, sería regalar el argumento a quienes quieren que fracase.',
        },
      ],
    },
  },
];
