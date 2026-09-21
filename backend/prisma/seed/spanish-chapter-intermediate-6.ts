import type { UnitSeed } from './chapter-beginner-1';

/**
 * Spanisch, Intermediate, Kapitel 6: „Historias y relatos“ (B1, Kapitel 6)
 *
 * Fünf Seiten. Das Schlusskapitel der B1-Hälfte und die Stelle, an der alle
 * Vergangenheitszeiten aufeinandertreffen. Die einzelnen Zeiten sind aus dem
 * Beginner-Band bekannt; neu ist das Pluscuamperfecto und – vor allem – ihr
 * Zusammenspiel in einem längeren Text.
 *
 * Aufbau: Seite 1 stellt Indefinido und Imperfecto als Vordergrund und
 * Hintergrund gegenüber, Seite 2 führt das Pluscuamperfecto für das ein, was
 * vorher geschah, Seite 3 fügt das Perfecto hinzu und klärt, wann welche Zeit
 * gewählt wird (samt dem Hinweis, dass das in Amerika anders läuft). Seite 4
 * gliedert eine Erzählung – Anfang, Wendepunkt, Schluss –, Seite 5 ist die
 * lange Erzählaufgabe, mit der der Band schließt.
 *
 * Kapitel 4, Seite 3 hat die beiden einfachen Vergangenheitszeiten schon im
 * Dienst einer Konfliktschilderung geübt. Hier wird daraus das vollständige
 * System; wer Kapitel 4 gemacht hat, erkennt die Regel wieder und lernt das
 * Neue drumherum.
 *
 * Die Seiten stehen einsprachig spanisch; die Wortschatzlisten führen
 * deutsche und englische Entsprechungen. Die Geschichten sind erfunden.
 *
 * Sämtliche Texte sind eigenständig verfasst.
 */
const v = 1;

export const SPANISH_INTERMEDIATE_6_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Vordergrund und Hintergrund.
  {
    order: 1,
    title: 'Lo que pasó y cómo era',
    subtitle: 'Indefinido e imperfecto',
    estimatedMinutes: 27,
    content: {
      version: v,
      blocks: [
        { id: 'esi6-p1-h1', type: 'HEADING', level: 1, text: 'Lo que pasó y cómo era' },
        {
          id: 'esi6-p1-intro',
          type: 'TEXT',
          text: 'Toda historia tiene dos capas. Una avanza: primero esto, luego aquello, al final lo de más allá. La otra no avanza: describe el decorado en el que ocurre lo primero. El español separa las dos con dos tiempos verbales, y esa separación es lo que hace que un relato se entienda. No es una cuestión de duración, aunque muchas gramáticas lo expliquen así.',
        },
        {
          id: 'esi6-p1-info-dos',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'La prueba del «¿y luego?»',
          text: 'Olvide por un momento las explicaciones de «acción larga» y «acción corta», que fallan en cuanto aparece un ejemplo como «vivió allí cuarenta años». Pregúntese si la frase hace avanzar la historia. Si después de ella se puede decir «¿y luego?», va en indefinido. Si es el fondo sobre el que pasan las cosas, va en imperfecto.',
          table: {
            headers: ['Función', 'Tiempo', 'Ejemplo'],
            rows: [
              ['la historia avanza', 'indefinido', 'Abrió la puerta y entró.'],
              ['decorado y ambiente', 'imperfecto', 'Era de noche y llovía.'],
              ['cómo estaban los personajes', 'imperfecto', 'Estábamos muertos de sueño.'],
              ['costumbre de aquella época', 'imperfecto', 'Todos los veranos íbamos allí.'],
              ['edad, hora, tiempo', 'imperfecto', 'Tenía nueve años. Eran las seis.'],
              ['duración cerrada', 'indefinido', 'Vivió allí cuarenta años.'],
            ],
          },
        },
        {
          id: 'esi6-p1-relato',
          type: 'TEXT',
          text: 'Lea el principio de esta historia y observe las dos capas: «Era finales de agosto y todavía hacía calor por la noche. Mi abuela vivía sola en una casa demasiado grande, en un pueblo donde ya no quedaba casi nadie. Aquel jueves yo llegué en el último autobús, abrí la cancela y la encontré sentada en el patio, a oscuras. No estaba dormida. Me miró, sonrió y me dijo que llevaba dos horas esperándome, porque sabía que iba a venir aunque yo no había avisado a nadie».',
        },
        {
          id: 'esi6-p1-choice-capas',
          type: 'CHOICE',
          instruction: 'Vuelva al texto y elija.',
          question:
            '¿Por qué «la encontré sentada en el patio» va en indefinido y no en imperfecto?',
          options: [
            { id: 'a1', text: 'Porque es una acción muy corta.' },
            { id: 'a2', text: 'Porque hace avanzar la historia: es lo que ocurrió al llegar.' },
            { id: 'a3', text: 'Porque describe cómo era la abuela.' },
            { id: 'a4', text: 'Porque va detrás de una fecha.' },
          ],
          multiple: false,
          solution: ['a2'],
          explanation:
            'Encontrarla es un hecho de la cadena: llegué, abrí y la encontré. «Estaba sentada» sí sería descripción, y de hecho el texto usa el imperfecto un poco después, en «no estaba dormida».',
        },
        {
          id: 'esi6-p1-cloze',
          type: 'CLOZE',
          instruction: 'Complete el relato con indefinido o imperfecto.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Aquella mañana ' },
            { kind: 'GAP', gapId: 'c1', solution: ['hacía'], hint: 'hacer, ambiente', width: 8 },
            { kind: 'TEXT', text: ' un frío horrible y la calle ' },
            {
              kind: 'GAP',
              gapId: 'c2',
              solution: ['estaba'],
              hint: 'estar, descripción',
              width: 8,
            },
            { kind: 'TEXT', text: ' vacía. Yo ' },
            { kind: 'GAP', gapId: 'c3', solution: ['salí'], hint: 'salir, acción', width: 7 },
            { kind: 'TEXT', text: ' de casa a las siete, ' },
            { kind: 'GAP', gapId: 'c4', solution: ['cogí'], hint: 'coger, acción', width: 7 },
            { kind: 'TEXT', text: ' el primer metro y me ' },
            { kind: 'GAP', gapId: 'c5', solution: ['senté'], hint: 'sentarse, acción', width: 8 },
            { kind: 'TEXT', text: ' al lado de una señora que ' },
            { kind: 'GAP', gapId: 'c6', solution: ['leía'], hint: 'leer, fondo', width: 7 },
            { kind: 'TEXT', text: ' el periódico.' },
          ],
        },
        {
          id: 'esi6-p1-info-interrupcion',
          type: 'INFO',
          variant: 'TIP',
          title: 'Cuando una cosa interrumpe a otra',
          text: 'Es la combinación más útil de todas: el imperfecto pone lo que estaba pasando y el indefinido lo que lo cortó. Se reconoce por la palabra «cuando», aunque no siempre aparece.',
          table: {
            headers: ['Estructura', 'Ejemplo'],
            rows: [
              ['imperfecto + cuando + indefinido', 'Cenábamos cuando se fue la luz.'],
              ['mientras + imperfecto', 'Mientras yo cocinaba, ella puso la mesa.'],
              ['estar + gerundio en imperfecto', 'Estaba saliendo cuando sonó el teléfono.'],
              ['al + infinitivo', 'Al abrir la puerta, lo vi todo claro.'],
            ],
          },
        },
        {
          id: 'esi6-p1-match-funcion',
          type: 'MATCHING',
          instruction: 'Relacione cada frase con la función que cumple en un relato.',
          left: [
            { id: 'l1', text: 'Eran las tres de la madrugada.' },
            { id: 'l2', text: 'Se levantó sin decir nada y salió.' },
            { id: 'l3', text: 'De pequeños veraneábamos siempre en el mismo sitio.' },
            { id: 'l4', text: 'Estábamos recogiendo la mesa cuando llamaron.' },
          ],
          right: [
            { id: 'r1', text: 'Sitúa la escena: hora, ambiente.' },
            { id: 'r2', text: 'Hace avanzar la historia.' },
            { id: 'r3', text: 'Cuenta una costumbre de entonces.' },
            { id: 'r4', text: 'Una acción interrumpe a otra.' },
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

  // ====================================================== SEITE 2
  // Seite 2 – das Pluscuamperfecto.
  {
    order: 2,
    title: 'Lo que había pasado antes',
    subtitle: 'El pluscuamperfecto',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'esi6-p2-h1', type: 'HEADING', level: 1, text: 'Lo que había pasado antes' },
        {
          id: 'esi6-p2-intro',
          type: 'TEXT',
          text: 'Las historias no se cuentan en orden. A mitad de relato hace falta volver atrás para explicar algo que ocurrió antes de lo que se está contando, y para eso existe un tiempo propio: el pluscuamperfecto. Es el más fácil de formar de todos y resuelve un problema que sin él obliga a rodeos.',
        },
        {
          id: 'esi6-p2-info-forma',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'La forma',
          text: 'Imperfecto de «haber» más participio. El participio no cambia nunca y las dos palabras no se separan: no se dice «había no llegado», sino «no había llegado».',
          table: {
            headers: ['Persona', 'haber', 'Ejemplo'],
            rows: [
              ['yo', 'había', 'Yo ya había cenado.'],
              ['tú', 'habías', '¿No habías estado nunca aquí?'],
              ['él / ella / usted', 'había', 'Se había marchado sin avisar.'],
              ['nosotros', 'habíamos', 'Habíamos quedado a las ocho.'],
              ['vosotros', 'habíais', '¿Ya lo habíais visto?'],
              ['ellos / ustedes', 'habían', 'Los niños se habían dormido.'],
            ],
          },
        },
        {
          id: 'esi6-p2-info-participios',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Los participios irregulares',
          text: 'Son los mismos que ya usa con el pretérito perfecto, de modo que no hay nada nuevo que aprender. Estos son los que más aparecen.',
          table: {
            headers: ['Infinitivo', 'Participio', 'Infinitivo', 'Participio'],
            rows: [
              ['hacer', 'hecho', 'decir', 'dicho'],
              ['ver', 'visto', 'escribir', 'escrito'],
              ['poner', 'puesto', 'volver', 'vuelto'],
              ['abrir', 'abierto', 'romper', 'roto'],
              ['morir', 'muerto', 'resolver', 'resuelto'],
            ],
          },
        },
        {
          id: 'esi6-p2-texto',
          type: 'TEXT',
          text: 'Compare estas dos versiones del mismo momento. Sin pluscuamperfecto: «Llegué a casa. Antes de eso, mi hermana recogió su habitación y se fue». Con pluscuamperfecto: «Cuando llegué a casa, mi hermana ya había recogido su habitación y se había ido». La segunda es más corta, más clara y coloca cada cosa en su orden real sin tener que anunciarlo.',
        },
        {
          id: 'esi6-p2-choice-orden',
          type: 'CHOICE',
          instruction: 'Elija la frase que ordena bien los hechos.',
          question:
            'Primero se perdió el tren; después usted llegó a la estación. ¿Cómo lo cuenta?',
          options: [
            { id: 'b1', text: 'Cuando llegué a la estación, el tren salió.' },
            { id: 'b2', text: 'Cuando llegué a la estación, el tren ya había salido.' },
            { id: 'b3', text: 'Cuando llegaba a la estación, el tren había salido.' },
            { id: 'b4', text: 'Cuando había llegado a la estación, el tren salía.' },
          ],
          multiple: false,
          solution: ['b2'],
          explanation:
            'La salida del tren es anterior a la llegada: pluscuamperfecto. b1 daría a entender que el tren salió justo en ese momento, que es exactamente lo contrario de lo que pasó.',
        },
        {
          id: 'esi6-p2-cloze',
          type: 'CLOZE',
          instruction: 'Complete con pluscuamperfecto.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Cuando por fin encontramos el restaurante, ya ' },
            {
              kind: 'GAP',
              gapId: 'c1',
              solution: ['habían cerrado'],
              hint: 'cerrar, ellos',
              width: 15,
            },
            { kind: 'TEXT', text: ' la cocina. Resulta que mi hermano ' },
            {
              kind: 'GAP',
              gapId: 'c2',
              solution: ['había reservado'],
              hint: 'reservar, él',
              width: 16,
            },
            { kind: 'TEXT', text: ' para el día anterior. Nadie se ' },
            {
              kind: 'GAP',
              gapId: 'c3',
              solution: ['había dado'],
              hint: 'darse cuenta, él',
              width: 11,
            },
            { kind: 'TEXT', text: ' cuenta, porque nunca ' },
            {
              kind: 'GAP',
              gapId: 'c4',
              solution: ['habíamos ido'],
              hint: 'ir, nosotros',
              width: 13,
            },
            { kind: 'TEXT', text: ' antes. Al final cenamos en un bar que nos ' },
            {
              kind: 'GAP',
              gapId: 'c5',
              solution: ['había recomendado'],
              hint: 'recomendar, alguien',
              width: 18,
            },
            { kind: 'TEXT', text: ' el camarero.' },
          ],
        },
        {
          id: 'esi6-p2-ordering',
          type: 'ORDERING',
          instruction:
            'Ordene el relato según el orden en que se cuenta, no según el orden de los hechos.',
          items: [
            { id: 'o1', text: 'El lunes por la mañana llegué a la oficina más pronto que nunca.' },
            { id: 'o2', text: 'La puerta estaba abierta y las luces encendidas.' },
            { id: 'o3', text: 'Alguien había entrado antes que yo.' },
            {
              id: 'o4',
              text: 'Era el nuevo, que se había equivocado de hora y llevaba allí desde las seis.',
            },
            { id: 'o5', text: 'Le preparé un café y empezamos la semana charlando.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5'],
        },
        {
          id: 'esi6-p2-writing',
          type: 'WRITING',
          instruction: 'Cuente un malentendido.',
          prompt:
            'Cuente en 70 a 110 palabras una vez en que llegó a algún sitio y algo ya había ocurrido: una cita equivocada, una tienda cerrada, una fiesta que había terminado. Use al menos tres pluscuamperfectos, uno de ellos con participio irregular, y combine las tres capas: descripción en imperfecto, acción en indefinido y lo anterior en pluscuamperfecto.',
          minWords: 70,
          maxWords: 120,
          aiFeedback: true,
          sampleAnswer:
            'Era mi segunda semana en la ciudad y todavía no conocía a casi nadie. Una compañera me había invitado a su cumpleaños y me había escrito la dirección en un papel.\n\nLlegué a las once, subí al tercero y llamé al timbre. Me abrió un señor en pijama que no había oído hablar de ninguna fiesta. Entonces miré otra vez el papel: había leído mal el número y la casa era la del portal de enfrente.\n\nCuando por fin entré, ya habían partido la tarta y alguien se había puesto mi abrigo. Aun así, fue la mejor noche de aquel mes.',
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – alle vier Zeiten zusammen.
  {
    order: 3,
    title: 'Elegir el tiempo',
    subtitle: 'Las cuatro juntas',
    estimatedMinutes: 27,
    content: {
      version: v,
      blocks: [
        { id: 'esi6-p3-h1', type: 'HEADING', level: 1, text: 'Elegir el tiempo' },
        {
          id: 'esi6-p3-intro',
          type: 'TEXT',
          text: 'Falta una cuarta pieza: el pretérito perfecto. Lo conoce desde el capítulo 1, donde servía para contar la experiencia en una entrevista. En un relato cumple otra función: une lo contado con el momento en que se cuenta. Esta página pone las cuatro formas juntas y da el criterio para elegir.',
        },
        {
          id: 'esi6-p3-info-cuatro',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Las cuatro, en una tabla',
          text: 'La primera pregunta es si el periodo del que se habla sigue abierto (hoy, esta semana, este año) o está cerrado (ayer, el lunes, en 2019). La segunda es si el hecho es anterior a otro hecho pasado.',
          table: {
            headers: ['Tiempo', 'Cuándo', 'Ejemplo'],
            rows: [
              ['pret. perfecto', 'periodo abierto o sin fecha', 'Este año he cambiado de casa.'],
              ['indefinido', 'periodo cerrado', 'En 2019 cambié de casa.'],
              ['imperfecto', 'descripción o costumbre', 'Antes vivía en el centro.'],
              [
                'pluscuamperfecto',
                'anterior a otro pasado',
                'Cuando la conocí, ya me había mudado.',
              ],
            ],
          },
        },
        {
          id: 'esi6-p3-info-marcadores',
          type: 'INFO',
          variant: 'TIP',
          title: 'Los marcadores que deciden',
          text: 'Muchas veces la propia frase lleva la pista. Estos son los marcadores que aparecen con cada tiempo, y memorizarlos ahorra dudar.',
          table: {
            headers: ['Tiempo', 'Marcadores'],
            rows: [
              ['pret. perfecto', 'hoy, esta semana, este año, ya, todavía no, nunca'],
              ['indefinido', 'ayer, anoche, el lunes, en 2019, hace tres años'],
              ['imperfecto', 'antes, siempre, todos los días, mientras'],
              ['pluscuamperfecto', 'ya, todavía no, antes de eso, cuando llegué'],
            ],
          },
        },
        {
          id: 'esi6-p3-info-america',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'En América se elige distinto',
          text: 'Lo que acaba de leer describe la norma del centro y el norte de España. En la mayor parte de América, y también en zonas de España como Galicia, Asturias o Canarias, el indefinido ocupa buena parte del terreno del pretérito perfecto: se dice «hoy comí muy tarde» donde en Madrid se diría «hoy he comido muy tarde». Ninguna de las dos es incorrecta, y ambas se entienden en todas partes. Elija una y sea coherente dentro de un mismo texto.',
        },
        {
          id: 'esi6-p3-choice-marcador',
          type: 'CHOICE',
          instruction: 'Elija la forma que corresponde a la norma peninsular.',
          question: 'Complete: «Esta mañana ______ el autobús y he llegado tarde».',
          options: [
            { id: 'c1', text: 'perdí' },
            { id: 'c2', text: 'he perdido' },
            { id: 'c3', text: 'perdía' },
            { id: 'c4', text: 'había perdido' },
          ],
          multiple: false,
          solution: ['c2'],
          explanation:
            '«Esta mañana» es un periodo que todavía no ha terminado, de modo que en la norma peninsular pide pretérito perfecto, en coherencia con «he llegado». En buena parte de América, en cambio, «perdí» sería lo natural.',
        },
        {
          id: 'esi6-p3-cloze',
          type: 'CLOZE',
          instruction: 'Complete con el tiempo adecuado. Siga la norma peninsular.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Esta semana ' },
            {
              kind: 'GAP',
              gapId: 'c1',
              solution: ['he tenido'],
              hint: 'tener, periodo abierto',
              width: 10,
            },
            { kind: 'TEXT', text: ' mucho lío. El martes ' },
            { kind: 'GAP', gapId: 'c2', solution: ['fui'], hint: 'ir, día cerrado', width: 6 },
            { kind: 'TEXT', text: ' al médico porque ' },
            {
              kind: 'GAP',
              gapId: 'c3',
              solution: ['llevaba', 'tenía'],
              hint: 'llevar/tener, estado',
              width: 9,
            },
            { kind: 'TEXT', text: ' dos semanas con tos. Me dijo que no era nada, aunque yo ya ' },
            {
              kind: 'GAP',
              gapId: 'c4',
              solution: ['había pensado'],
              hint: 'pensar, anterior',
              width: 14,
            },
            { kind: 'TEXT', text: ' lo peor. Antes nunca ' },
            {
              kind: 'GAP',
              gapId: 'c5',
              solution: ['me ponía', 'me preocupaba'],
              hint: 'ponerse/preocuparse, costumbre',
              width: 12,
            },
            { kind: 'TEXT', text: ' así por una tontería.' },
          ],
        },
        {
          id: 'esi6-p3-match-tiempos',
          type: 'MATCHING',
          instruction: 'Relacione cada frase con el motivo de su tiempo verbal.',
          left: [
            { id: 'p1', text: 'Este mes he leído tres libros.' },
            { id: 'p2', text: 'El verano pasado leí tres libros.' },
            { id: 'p3', text: 'De pequeño leía todas las noches.' },
            { id: 'p4', text: 'Cuando empezó la película, yo ya había leído el libro.' },
          ],
          right: [
            { id: 'q1', text: 'El periodo sigue abierto.' },
            { id: 'q2', text: 'El periodo está cerrado.' },
            { id: 'q3', text: 'Es una costumbre del pasado.' },
            { id: 'q4', text: 'Es anterior a otro hecho pasado.' },
          ],
          solution: [
            { leftId: 'p1', rightId: 'q1' },
            { leftId: 'p2', rightId: 'q2' },
            { leftId: 'p3', rightId: 'q3' },
            { leftId: 'p4', rightId: 'q4' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – eine Erzählung gliedern.
  {
    order: 4,
    title: 'Montar la historia',
    subtitle: 'Principio, giro y final',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'esi6-p4-h1', type: 'HEADING', level: 1, text: 'Montar la historia' },
        {
          id: 'esi6-p4-intro',
          type: 'TEXT',
          text: 'Con los tiempos resueltos queda lo otro: que la historia se sostenga. Un relato que interesa no es el que tiene los hechos más extraordinarios, sino el que los coloca en el orden adecuado y no los adelanta. La regla más útil de todas es sencilla: no cuente el final en la primera frase.',
        },
        {
          id: 'esi6-p4-info-partes',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Las cuatro partes de un relato',
          text: 'Esta estructura vale para una anécdota de dos minutos y para una novela. Lo que cambia es la extensión de cada parte, no su orden.',
          table: {
            headers: ['Parte', 'Qué hace', 'Tiempo dominante'],
            rows: [
              ['situación inicial', 'dónde, cuándo, quién', 'imperfecto'],
              ['nudo', 'algo rompe la normalidad', 'indefinido'],
              ['desarrollo', 'lo que se hizo para resolverlo', 'indefinido'],
              ['desenlace', 'cómo acabó y qué quedó', 'indefinido + perfecto'],
            ],
          },
        },
        {
          id: 'esi6-p4-info-conectores',
          type: 'INFO',
          variant: 'TIP',
          title: 'Conectores para narrar',
          text: 'Un relato hablado se apoya en muy pocos conectores, y casi todos marcan el paso del tiempo. Los de la última fila son los que dan vida: anuncian que viene lo bueno.',
          table: {
            headers: ['Momento', 'Expresiones'],
            rows: [
              ['empezar', 'Resulta que… / Pues nada, que…'],
              ['situar', 'Aquel día… / Era un martes cualquiera…'],
              ['seguir', 'Entonces… / Total, que… / Al cabo de un rato…'],
              ['sorprender', 'De repente… / Y de pronto…'],
              ['terminar', 'Al final… / Total, que al final…'],
              ['valorar al final', 'Nunca se me olvidará. / Todavía nos reímos.'],
            ],
          },
        },
        {
          id: 'esi6-p4-dialogo',
          type: 'DIALOGUE',
          title: 'La anécdota del perro',
          audioUrl: 'placeholder://es-b1-relato',
          lines: [
            {
              speaker: 'Rosa',
              text: '¿Os he contado alguna vez lo del perro de mi tío?',
            },
            {
              speaker: 'Pablo',
              text: 'Creo que no.',
            },
            {
              speaker: 'Rosa',
              text: 'Pues nada, que mi tío vivía solo en el campo y tenía un perro viejísimo, sordo perdido. Un domingo de invierno se fue a dar una vuelta y lo dejó en casa durmiendo.',
            },
            {
              speaker: 'Pablo',
              text: 'Ya me imagino el final.',
            },
            {
              speaker: 'Rosa',
              text: 'No, espera. Cuando volvió, dos horas después, el perro no estaba. La puerta seguía cerrada y las ventanas también. Se había esfumado.',
            },
            {
              speaker: 'Pablo',
              text: 'Anda ya.',
            },
            {
              speaker: 'Rosa',
              text: 'Mi tío llamó a los vecinos, salió a buscarlo, estuvo hasta las diez de la noche dando vueltas. Y de repente, a las once, oyó un ruido en el desván.',
            },
            {
              speaker: 'Pablo',
              text: 'No me digas que…',
            },
            {
              speaker: 'Rosa',
              text: 'Había subido por una escalera que nadie había visto nunca usar. Total, que el perro sordo llevaba seis horas dormido encima de una manta, tan tranquilo. Todavía nos reímos.',
            },
          ],
        },
        {
          id: 'esi6-p4-choice-estructura',
          type: 'CHOICE',
          instruction: 'Analice el relato de Rosa y elija.',
          question: '¿Cuál es el nudo de la historia, es decir, lo que rompe la normalidad?',
          options: [
            { id: 'd1', text: 'Que el tío vivía solo en el campo.' },
            { id: 'd2', text: 'Que al volver el perro no estaba y la casa seguía cerrada.' },
            { id: 'd3', text: 'Que el perro era sordo.' },
            { id: 'd4', text: 'Que el perro estaba en el desván.' },
          ],
          multiple: false,
          solution: ['d2'],
          explanation:
            'd1 y d3 son la situación inicial, en imperfecto. d4 es el desenlace. El nudo es la desaparición imposible, que es lo que obliga a hacer algo y pone la historia en marcha.',
        },
        {
          id: 'esi6-p4-ordering',
          type: 'ORDERING',
          instruction: 'Ordene la anécdota.',
          items: [
            {
              id: 'o1',
              text: 'Resulta que aquel verano trabajaba yo de socorrista en una piscina pequeña.',
            },
            {
              id: 'o2',
              text: 'Un martes por la tarde no había nadie y me puse a leer en la silla alta.',
            },
            { id: 'o3', text: 'De repente oí un grito tremendo y me tiré al agua sin mirar.' },
            {
              id: 'o4',
              text: 'Cuando saqué la cabeza, vi que el grito venía de una señora que había visto una avispa.',
            },
            {
              id: 'o5',
              text: 'Total, que salí empapado, con el libro en la mano y toda la piscina mirándome.',
            },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5'],
        },
        {
          id: 'esi6-p4-cloze',
          type: 'CLOZE',
          instruction: 'Complete la anécdota con los conectores narrativos del recuadro.',
          wordBank: ['Resulta que', 'Aquel día', 'Entonces', 'De repente', 'Total, que'],
          caseSensitive: false,
          segments: [
            { kind: 'GAP', gapId: 'c1', solution: ['Resulta que'], width: 12 },
            { kind: 'TEXT', text: ' mi hermana y yo habíamos quedado en el aeropuerto. ' },
            { kind: 'GAP', gapId: 'c2', solution: ['Aquel día'], width: 10 },
            { kind: 'TEXT', text: ' había una huelga de metro y llegué con el tiempo justo. ' },
            { kind: 'GAP', gapId: 'c3', solution: ['Entonces'], width: 9 },
            { kind: 'TEXT', text: ' me di cuenta de que no llevaba el documento de identidad. ' },
            { kind: 'GAP', gapId: 'c4', solution: ['De repente'], width: 11 },
            { kind: 'TEXT', text: ' la vi aparecer por la puerta con mi cartera en la mano. ' },
            { kind: 'GAP', gapId: 'c5', solution: ['Total, que'], width: 11 },
            { kind: 'TEXT', text: ' cogimos el avión de milagro.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – die lange Erzählaufgabe, Abschluss der B1-Hälfte.
  {
    order: 5,
    title: 'Cuente usted',
    subtitle: 'La tarea final del nivel',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'esi6-p5-h1', type: 'HEADING', level: 1, text: 'Cuente usted' },
        {
          id: 'esi6-p5-intro',
          type: 'TEXT',
          text: 'Esta es la última página de la primera mitad del libro. Lo que viene a continuación, a partir del capítulo 7, ya no trata de contar lo que pasó, sino de defender lo que se piensa. Antes de dar ese paso conviene comprobar que el relato está firme, porque casi todo lo que se argumenta después se apoya en un ejemplo contado.',
        },
        {
          id: 'esi6-p5-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: contar y reaccionar',
          items: [
            {
              term: 'el relato',
              translations: { en: 'account, story', de: 'die Erzählung' },
            },
            {
              term: 'la anécdota',
              translations: { en: 'anecdote', de: 'die Anekdote' },
            },
            {
              term: 'el malentendido',
              translations: { en: 'misunderstanding', de: 'das Missverständnis' },
            },
            {
              term: 'la casualidad',
              translations: { en: 'coincidence', de: 'der Zufall' },
              example: 'Fue pura casualidad.',
            },
            {
              term: 'de milagro',
              translations: { en: 'by a miracle, only just', de: 'wie durch ein Wunder' },
            },
            {
              term: 'darse cuenta de',
              translations: { en: 'to realize', de: 'merken' },
            },
            {
              term: 'meter la pata',
              translations: { en: 'to put one’s foot in it', de: 'ins Fettnäpfchen treten' },
            },
            {
              term: 'pasar vergüenza',
              translations: { en: 'to be embarrassed', de: 'sich schämen' },
            },
            {
              term: 'partirse de risa',
              translations: { en: 'to crack up laughing', de: 'sich kaputtlachen' },
            },
            {
              term: '¡Anda ya!',
              translations: { en: 'No way!', de: 'Ach, komm!' },
            },
            {
              term: '¿Y qué pasó?',
              translations: { en: 'And what happened?', de: 'Und dann?' },
            },
            {
              term: 'No me digas',
              translations: { en: 'You don’t say', de: 'Was du nicht sagst' },
            },
          ],
        },
        {
          id: 'esi6-p5-info-oyente',
          type: 'INFO',
          variant: 'TIP',
          title: 'El oyente también trabaja',
          text: 'En español, quien escucha una historia no se queda callado: interviene constantemente con pequeñas señales. Si usted escucha en silencio absoluto, el que cuenta pensará que le está aburriendo. Estas son las señales que se esperan.',
          table: {
            headers: ['Función', 'Expresiones'],
            rows: [
              ['seguir la historia', 'Ya… / Claro… / Sí, sí…'],
              ['mostrar sorpresa', '¡No me digas! / ¡Anda ya! / ¿En serio?'],
              ['pedir que siga', '¿Y qué pasó? / ¿Y entonces?'],
              ['compadecer', 'Qué horror. / Vaya tela.'],
              ['celebrar el final', 'Qué bueno. / Me parto.'],
            ],
          },
        },
        {
          id: 'esi6-p5-choice-reaccion',
          type: 'CHOICE',
          instruction: 'Elija la reacción natural.',
          question:
            'Alguien le cuenta: «…y cuando abrí la maleta, me di cuenta de que no era la mía».',
          options: [
            { id: 'e1', text: 'Es correcto lo que dices.' },
            { id: 'e2', text: '¡No me digas! ¿Y qué pasó?' },
            { id: 'e3', text: 'Sí.' },
            { id: 'e4', text: 'Deberías haber mirado la etiqueta antes.' },
          ],
          multiple: false,
          solution: ['e2'],
          explanation:
            'e2 muestra sorpresa y pide que siga, que es justo lo que espera quien cuenta. e3 corta la historia, e1 suena a corrección de examen y e4 da una lección cuando lo que toca es escuchar.',
        },
        {
          id: 'esi6-p5-cloze',
          type: 'CLOZE',
          instruction: 'Complete el relato con los tiempos adecuados.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Resulta que aquel día yo ' },
            { kind: 'GAP', gapId: 'c1', solution: ['estaba'], hint: 'estar, situación', width: 8 },
            { kind: 'TEXT', text: ' esperando en el andén. ' },
            { kind: 'GAP', gapId: 'c2', solution: ['Había'], hint: 'haber, descripción', width: 7 },
            { kind: 'TEXT', text: ' mucha gente porque un tren anterior ' },
            {
              kind: 'GAP',
              gapId: 'c3',
              solution: ['se había retrasado'],
              hint: 'retrasarse, anterior',
              width: 19,
            },
            { kind: 'TEXT', text: '. De repente ' },
            { kind: 'GAP', gapId: 'c4', solution: ['vi'], hint: 'ver, acción', width: 5 },
            { kind: 'TEXT', text: ' a una señora que ' },
            {
              kind: 'GAP',
              gapId: 'c5',
              solution: ['llevaba'],
              hint: 'llevar, descripción',
              width: 9,
            },
            { kind: 'TEXT', text: ' mi mismo abrigo, y entonces ' },
            {
              kind: 'GAP',
              gapId: 'c6',
              solution: ['me di'],
              hint: 'darse cuenta, acción',
              width: 7,
            },
            { kind: 'TEXT', text: ' cuenta de que era mi madre.' },
          ],
        },
        {
          id: 'esi6-p5-match-repaso',
          type: 'MATCHING',
          instruction: 'Repaso del capítulo: relacione cada tiempo con su función principal.',
          left: [
            { id: 'p1', text: 'Imperfecto' },
            { id: 'p2', text: 'Indefinido' },
            { id: 'p3', text: 'Pluscuamperfecto' },
            { id: 'p4', text: 'Pretérito perfecto' },
          ],
          right: [
            { id: 'q1', text: 'El decorado: cómo era todo mientras pasaban las cosas.' },
            { id: 'q2', text: 'La cadena de hechos que hace avanzar la historia.' },
            { id: 'q3', text: 'Lo que ya había ocurrido antes de ese momento.' },
            { id: 'q4', text: 'Lo que conecta el pasado con el momento de contarlo.' },
          ],
          solution: [
            { leftId: 'p1', rightId: 'q1' },
            { leftId: 'p2', rightId: 'q2' },
            { leftId: 'p3', rightId: 'q3' },
            { leftId: 'p4', rightId: 'q4' },
          ],
        },
        {
          id: 'esi6-p5-writing',
          type: 'WRITING',
          instruction: 'Tarea final: cuente una historia completa.',
          prompt:
            'Cuente una historia real de su vida en 180 a 280 palabras: un viaje que salió mal, un malentendido, una casualidad, el día que conoció a alguien importante. Use las cuatro partes (situación inicial, nudo, desarrollo, desenlace) y los cuatro tiempos del capítulo, cada uno en su función. Empiece con un conector de apertura, incluya al menos dos pluscuamperfectos y no adelante el final. Termine con una valoración desde hoy.',
          minWords: 180,
          maxWords: 300,
          aiFeedback: true,
          sampleAnswer:
            'Resulta que en mi primer año en España me apunté a un curso de cerámica los jueves por la tarde. Yo entonces entendía bastante menos de lo que creía, y en clase asentía a todo para no quedar mal.\n\nAquel jueves la profesora explicó algo largo sobre el horno y terminó diciendo una frase que entendí a medias. Yo asentí, como siempre. Los demás recogieron sus piezas y se fueron, y yo me quedé trabajando otra media hora, muy satisfecho.\n\nCuando salí, el taller estaba a oscuras y la puerta de la calle, cerrada con llave. La profesora había dicho que aquel día cerraban antes porque tenían una reunión. Me había quedado encerrado.\n\nEstuve veinte minutos buscando una salida. Llamé al timbre interior, que no funcionaba, y me asomé a una ventana que daba a un patio. Al final encontré un teléfono pegado en la pared, llamé y me contestó el conserje, que ya se había ido a su casa y vivía a dos calles. Vino de mal humor, abrió sin decir una palabra y me miró como se mira a un niño que ha hecho una tontería.\n\nAl día siguiente le conté lo ocurrido a la profesora, muerto de vergüenza, y se partió de risa delante de toda la clase. Desde entonces no he vuelto a asentir sin haber entendido, que es probablemente lo más útil que he aprendido en este idioma. Todavía me acuerdo cada vez que alguien me habla rápido.',
        },
      ],
    },
  },
];
