import type { UnitSeed } from './chapter-beginner-1';

/**
 * Spanisch, Intermediate, Kapitel 11: „Arte y cultura“ (B2, Kapitel 5)
 *
 * Fünf Seiten. Das Kapitel übt eine Unterscheidung, die auf B2 sprachlich
 * greifbar wird und vorher nicht: die zwischen dem, was man sieht, und dem,
 * was man daraus macht. „En el cuadro hay una silla vacía“ ist ein Befund;
 * „la silla vacía sugiere una ausencia“ ist eine Deutung. Beide Sätze sind
 * nötig, und sie dürfen nicht im selben Satz stehen.
 *
 * Aufbau: Seite 1 beschreibt (Bildaufbau, Wortschatz, ser/estar im
 * Bildkontext), Seite 2 trennt Beobachtung von Deutung und führt die Verben
 * der Wirkung ein, Seite 3 behandelt den Subjuntivo im Relativsatz, mit dem
 * man über Gesuchtes und Nichtexistentes spricht – das grammatische Kernstück
 * des Kapitels. Seite 4 liest und zerlegt eine Rezension, Seite 5 schreibt
 * eine.
 *
 * Die besprochenen Werke sind erfunden, damit das Kapitel ohne Bildrechte und
 * ohne Vorwissen auskommt; die Verfahren, mit denen über sie gesprochen wird,
 * sind es nicht.
 *
 * Wie im gesamten B2-Teil stehen die Seiten einsprachig spanisch; die
 * Wortschatzlisten tragen deutsche und englische Entsprechungen.
 *
 * Sämtliche Texte sind eigenständig verfasst.
 */
const v = 1;

export const SPANISH_INTERMEDIATE_11_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – beschreiben: Bildaufbau und Wortschatz.
  {
    order: 1,
    title: 'Describir una obra',
    subtitle: 'Lo que se ve antes de decir nada',
    estimatedMinutes: 27,
    content: {
      version: v,
      blocks: [
        { id: 'esi11-p1-h1', type: 'HEADING', level: 1, text: 'Describir una obra' },
        {
          id: 'esi11-p1-intro',
          type: 'TEXT',
          text: 'Cuando alguien describe un cuadro y empieza diciendo «transmite mucha melancolía», ha saltado un paso. La melancolía no está en el cuadro; está en lo que el cuadro hace con quien lo mira. Antes de eso hay algo que sí puede comprobarse y en lo que dos personas pueden ponerse de acuerdo aunque opinen distinto: qué hay, dónde está y cómo se ha pintado. Esta página se ocupa solo de eso.',
        },
        {
          id: 'esi11-p1-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: la obra y su factura',
          items: [
            {
              term: 'el lienzo',
              translations: { en: 'canvas', de: 'die Leinwand' },
            },
            {
              term: 'el primer plano / el fondo',
              translations: {
                en: 'foreground / background',
                de: 'der Vordergrund / der Hintergrund',
              },
            },
            {
              term: 'el encuadre',
              translations: { en: 'framing', de: 'der Bildausschnitt' },
            },
            {
              term: 'la composición',
              translations: { en: 'composition', de: 'die Komposition' },
            },
            {
              term: 'la pincelada',
              translations: { en: 'brushstroke', de: 'der Pinselstrich' },
              example: 'una pincelada suelta, casi sin dibujo',
            },
            {
              term: 'la gama cromática',
              translations: { en: 'colour range', de: 'die Farbpalette' },
            },
            {
              term: 'el contraste',
              translations: { en: 'contrast', de: 'der Kontrast' },
            },
            {
              term: 'la luz rasante',
              translations: { en: 'raking light', de: 'das Streiflicht' },
            },
            {
              term: 'la escena',
              translations: { en: 'scene', de: 'die Szene' },
            },
            {
              term: 'el personaje',
              translations: { en: 'character, figure', de: 'die Figur' },
            },
            {
              term: 'la trama',
              translations: { en: 'plot', de: 'die Handlung' },
              example: 'La trama avanza a saltos.',
            },
            {
              term: 'el desenlace',
              translations: { en: 'ending, denouement', de: 'der Ausgang, die Auflösung' },
            },
            {
              term: 'el montaje',
              translations: { en: 'editing (film)', de: 'der Schnitt' },
            },
            {
              term: 'la puesta en escena',
              translations: { en: 'staging, mise-en-scène', de: 'die Inszenierung' },
            },
          ],
        },
        {
          id: 'esi11-p1-info-ubicar',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Situar los elementos',
          text: 'Una descripción se sigue mejor si recorre el espacio en un orden reconocible: del centro a los bordes, del primer plano al fondo o de izquierda a derecha. Lo que no funciona es saltar. Atención al verbo: «hay» presenta lo que aparece por primera vez, «está» lo sitúa una vez ya mencionado.',
          table: {
            headers: ['Función', 'Expresiones'],
            rows: [
              ['presentar', 'en el centro hay…, aparece…, se distingue…'],
              ['situar', 'a la izquierda, al fondo, en el ángulo superior'],
              ['relacionar', 'frente a, junto a, detrás de, a espaldas de'],
              ['describir la factura', 'está pintado con…, resuelto a base de…'],
              ['describir la luz', 'la luz entra por…, procede de…, baña'],
            ],
          },
        },
        {
          id: 'esi11-p1-texto-modelo',
          type: 'TEXT',
          text: 'Descripción de un cuadro imaginario, «Sala de espera» (1974): «El lienzo, de casi dos metros de ancho, presenta una sala alargada con seis sillas de plástico contra la pared. En cuatro de ellas hay personas sentadas; las dos del extremo derecho están vacías. La luz entra por una ventana alta situada fuera del encuadre y cae en diagonal sobre el suelo. La gama es reducida —verdes apagados, grises, un solo rojo en el bolso de la mujer del centro— y la pincelada, muy lisa, apenas deja ver el trazo».',
        },
        {
          id: 'esi11-p1-choice-descripcion',
          type: 'CHOICE',
          instruction: 'Elija la frase que describe y no interpreta.',
          options: [
            { id: 'a1', text: 'Las sillas vacías hablan de la soledad contemporánea.' },
            { id: 'a2', text: 'Dos de las seis sillas están vacías, las dos del extremo derecho.' },
            { id: 'a3', text: 'El cuadro resulta desasosegante desde el primer vistazo.' },
            { id: 'a4', text: 'El pintor quiso denunciar la frialdad de los hospitales.' },
          ],
          multiple: false,
          solution: ['a2'],
          explanation:
            'Solo a2 enuncia algo comprobable por cualquiera que mire el cuadro. a1 y a3 dicen qué efecto produce, y a4 atribuye una intención al autor, que es la interpretación más arriesgada de las tres porque no se puede verificar en la obra.',
        },
        {
          id: 'esi11-p1-info-serestar',
          type: 'INFO',
          variant: 'TIP',
          title: 'Ser y estar delante de una obra',
          text: 'La vieja distinción vuelve aquí con un matiz propio. «Ser» describe la obra como objeto: su formato, su técnica, su fecha. «Estar» describe el estado de lo representado o de la pieza. Y con participios, la diferencia decide si se habla de la manera de pintar o del estado de conservación.',
          table: {
            headers: ['Se dice', 'Significa'],
            rows: [
              ['Es un óleo sobre tabla.', 'técnica de la obra'],
              ['Está restaurado.', 'estado actual de la pieza'],
              ['La escena es nocturna.', 'característica de lo representado'],
              ['La figura está de espaldas.', 'postura, situación momentánea'],
              ['Es pintado con espátula.', 'incorrecto: está pintado con espátula'],
            ],
          },
        },
        {
          id: 'esi11-p1-cloze',
          type: 'CLOZE',
          instruction: 'Complete la descripción con las palabras del recuadro.',
          wordBank: ['primer plano', 'fondo', 'gama', 'pincelada', 'encuadre'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'En el ' },
            { kind: 'GAP', gapId: 'c1', solution: ['primer plano'], width: 13 },
            { kind: 'TEXT', text: ' aparece una mesa con tres vasos; al ' },
            { kind: 'GAP', gapId: 'c2', solution: ['fondo'], width: 7 },
            { kind: 'TEXT', text: ', una puerta entreabierta. El ' },
            { kind: 'GAP', gapId: 'c3', solution: ['encuadre'], width: 9 },
            {
              kind: 'TEXT',
              text: ' corta la escena por la mitad, de modo que no vemos quién entra. La ',
            },
            { kind: 'GAP', gapId: 'c4', solution: ['gama'], width: 6 },
            { kind: 'TEXT', text: ' es fría, casi monocroma, y la ' },
            { kind: 'GAP', gapId: 'c5', solution: ['pincelada'], width: 10 },
            { kind: 'TEXT', text: ' se vuelve más suelta hacia los bordes.' },
          ],
        },
        {
          id: 'esi11-p1-ordering',
          type: 'ORDERING',
          instruction:
            'Ordene la descripción de manera que recorra la obra del conjunto al detalle.',
          items: [
            { id: 'o1', text: 'Se trata de un óleo de gran formato, fechado en 1974.' },
            { id: 'o2', text: 'Representa una sala alargada con seis sillas contra la pared.' },
            { id: 'o3', text: 'Cuatro están ocupadas y dos, las de la derecha, vacías.' },
            {
              id: 'o4',
              text: 'La luz entra en diagonal desde una ventana que queda fuera del cuadro.',
            },
            {
              id: 'o5',
              text: 'Solo hay una nota de color: el rojo del bolso de la mujer del centro.',
            },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5'],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – Beobachtung und Deutung trennen.
  {
    order: 2,
    title: 'Del dato a la lectura',
    subtitle: 'Separar lo que se ve de lo que se piensa',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'esi11-p2-h1', type: 'HEADING', level: 1, text: 'Del dato a la lectura' },
        {
          id: 'esi11-p2-intro',
          type: 'TEXT',
          text: 'Una interpretación no es una opinión libre: es una afirmación que debe poder apoyarse en algo de la obra. La forma de hacerlo es tan sencilla que casi parece una fórmula, y sin embargo separa un comentario sólido de una impresión. Se enuncia el dato, se enuncia la lectura y se marca gramaticalmente el paso de uno a otra. Quien no marca ese paso obliga al lector a creerle.',
        },
        {
          id: 'esi11-p2-info-verbos',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Los verbos que marcan el paso',
          text: 'Estos verbos tienen como sujeto la obra o un elemento suyo, no el espectador, y ese es su interés: permiten interpretar sin decir «yo creo» en cada frase. Van de menor a mayor compromiso, y conviene no usar «demuestra» para lo que solo «sugiere».',
          table: {
            headers: ['Grado', 'Verbo', 'Ejemplo'],
            rows: [
              ['insinuar', 'sugiere, apunta a, evoca', 'La silla vacía sugiere una ausencia.'],
              ['producir efecto', 'transmite, provoca, genera', 'El encuadre genera inquietud.'],
              [
                'remitir',
                'remite a, alude a, recuerda a',
                'La postura remite a la pintura religiosa.',
              ],
              ['afirmar', 'muestra, expresa, plantea', 'La obra plantea una pregunta moral.'],
              [
                'atribuir intención',
                'el autor busca, pretende',
                'El autor busca incomodar al espectador.',
              ],
            ],
          },
        },
        {
          id: 'esi11-p2-info-formula',
          type: 'INFO',
          variant: 'TIP',
          title: 'Dato + lectura en una sola frase',
          text: 'Hay tres maneras limpias de encadenar la observación y la interpretación. Todas dejan claro qué parte es comprobable. La tercera es la más elegante y la más frecuente en la crítica escrita en español.',
          table: {
            headers: ['Construcción', 'Ejemplo'],
            rows: [
              ['dato + verbo de efecto', 'El rojo del bolso atrae la mirada y ordena la escena.'],
              [
                'al + infinitivo',
                'Al dejar la ventana fuera del cuadro, el pintor niega el exterior.',
              ],
              ['el hecho de que + subj.', 'El hecho de que nadie se mire refuerza el aislamiento.'],
            ],
          },
        },
        {
          id: 'esi11-p2-choice-hecho',
          type: 'CHOICE',
          instruction: 'Elija la frase correcta.',
          options: [
            {
              id: 'h1',
              text: 'El hecho de que los personajes no se miran refuerza el aislamiento.',
            },
            {
              id: 'h2',
              text: 'El hecho de que los personajes no se miren refuerza el aislamiento.',
            },
            {
              id: 'h3',
              text: 'El hecho de que los personajes no se mirarán refuerza el aislamiento.',
            },
            { id: 'h4', text: 'El hecho que los personajes no se miren refuerza el aislamiento.' },
          ],
          multiple: false,
          solution: ['h2'],
          explanation:
            '«El hecho de que» lleva subjuntivo, porque no informa del hecho (ya se da por conocido) sino que lo comenta. Y no pierde la preposición: «el hecho que» es un caso de queísmo.',
        },
        {
          id: 'esi11-p2-match-dato-lectura',
          type: 'MATCHING',
          instruction: 'Relacione cada observación con la lectura que permite sostener.',
          left: [
            { id: 'd1', text: 'La cámara no corta nunca durante los once minutos de la escena.' },
            { id: 'd2', text: 'El protagonista aparece siempre reflejado en espejos o cristales.' },
            {
              id: 'd3',
              text: 'La novela está narrada por alguien que murió en el primer capítulo.',
            },
            { id: 'd4', text: 'Los diálogos ocupan cuatro quintas partes del libro.' },
          ],
          right: [
            { id: 'l1', text: 'El plano secuencia impide al espectador escapar de la situación.' },
            { id: 'l2', text: 'El recurso insiste en que solo lo conocemos de forma indirecta.' },
            { id: 'l3', text: 'La voz narradora obliga a leer toda la historia como un balance.' },
            {
              id: 'l4',
              text: 'El peso del diálogo desplaza la acción al terreno de lo que se dice.',
            },
          ],
          solution: [
            { leftId: 'd1', rightId: 'l1' },
            { leftId: 'd2', rightId: 'l2' },
            { leftId: 'd3', rightId: 'l3' },
            { leftId: 'd4', rightId: 'l4' },
          ],
        },
        {
          id: 'esi11-p2-cloze',
          type: 'CLOZE',
          instruction: 'Complete el comentario con las expresiones del recuadro.',
          wordBank: ['Al situar', 'sugiere', 'remite a', 'El hecho de que', 'transmite'],
          caseSensitive: false,
          segments: [
            { kind: 'GAP', gapId: 'c1', solution: ['Al situar'], width: 10 },
            { kind: 'TEXT', text: ' la ventana fuera del encuadre, el pintor ' },
            { kind: 'GAP', gapId: 'c2', solution: ['sugiere'], width: 9 },
            {
              kind: 'TEXT',
              text: ' un exterior al que no tenemos acceso. La disposición frontal de las figuras ',
            },
            { kind: 'GAP', gapId: 'c3', solution: ['remite a'], width: 10 },
            { kind: 'TEXT', text: ' los retratos de grupo del siglo XVII. ' },
            { kind: 'GAP', gapId: 'c4', solution: ['El hecho de que'], width: 16 },
            { kind: 'TEXT', text: ' ninguna mire al espectador ' },
            { kind: 'GAP', gapId: 'c5', solution: ['transmite'], width: 10 },
            { kind: 'TEXT', text: ' una sensación de espera sin final.' },
          ],
        },
        {
          id: 'esi11-p2-info-cautela',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Cuidado con la intención del autor',
          text: 'Decir «el autor quiso denunciar» es la interpretación más difícil de defender, porque exige saber algo que la obra no contiene: lo que pensaba alguien. Salvo que se disponga de una declaración del propio autor —y entonces se cita—, es preferible hablar de lo que la obra hace y no de lo que su autor pretendía. La crítica en español resuelve esto con fórmulas impersonales: «la obra plantea», «el texto propone», «cabe leer la escena como…».',
        },
        {
          id: 'esi11-p2-writing',
          type: 'WRITING',
          instruction: 'Describa e interprete.',
          prompt:
            'Elija una obra que conozca bien: un cuadro, una película, una canción o una novela. Escriba de 90 a 140 palabras en dos partes claramente separadas: primero tres o cuatro observaciones comprobables, después una interpretación que se apoye explícitamente en ellas. Use al menos un verbo de efecto y una construcción con «el hecho de que».',
          minWords: 90,
          maxWords: 150,
          aiFeedback: true,
          sampleAnswer:
            'La película transcurre entera en un piso de dos habitaciones, salvo el último plano. Los personajes son tres y ninguno sale nunca por la puerta que se ve al fondo, aunque se habla de ella cuatro veces. La cámara permanece siempre a la altura de una persona sentada, incluso cuando los actores están de pie. No hay música hasta el minuto ochenta.\n\nEstas decisiones no son neutras. El hecho de que la cámara nunca se levante coloca al espectador en la posición del que escucha y no interviene, que es exactamente la del hijo. La puerta, mencionada y nunca cruzada, transmite la sensación de una salida que existe y que nadie va a tomar. Cuando por fin suena la música, el alivio llega antes que el desenlace.',
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – Subjuntivo im Relativsatz: das Gesuchte und das Nichtexistente.
  {
    order: 3,
    title: 'Busco algo que me diga algo',
    subtitle: 'El subjuntivo en la oración de relativo',
    estimatedMinutes: 29,
    content: {
      version: v,
      blocks: [
        { id: 'esi11-p3-h1', type: 'HEADING', level: 1, text: 'Busco algo que me diga algo' },
        {
          id: 'esi11-p3-intro',
          type: 'TEXT',
          text: 'Compare estas dos frases: «Busco un cuadro que representa una sala de espera» y «Busco un cuadro que represente una sala de espera». La primera la dice quien sabe que ese cuadro existe y lo busca a él; la segunda, quien busca cualquiera que cumpla esa condición. El español entero de este apartado cabe en esa diferencia, y aparece constantemente cuando se habla de arte, porque hablar de arte es en buena parte buscar lo que todavía no se ha encontrado.',
        },
        {
          id: 'esi11-p3-info-relativo',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Antecedente conocido o no',
          text: 'El modo de la oración de relativo depende de una sola pregunta: ¿el hablante tiene en mente algo concreto? Si sí, indicativo. Si no —porque lo busca, lo desea o lo niega—, subjuntivo. El artículo ayuda a detectarlo: «el» suele acompañar a lo conocido, «un» y «algún» a lo indeterminado, aunque no es una regla infalible.',
          table: {
            headers: ['Situación', 'Modo', 'Ejemplo'],
            rows: [
              ['existe y lo conozco', 'indicativo', 'Tengo una amiga que pinta al óleo.'],
              ['no sé si existe', 'subjuntivo', 'Busco a alguien que pinte al óleo.'],
              ['no existe', 'subjuntivo', 'No hay nadie aquí que pinte al óleo.'],
              ['condición para elegir', 'subjuntivo', 'Quiero una obra que quepa en este muro.'],
              ['ya elegida', 'indicativo', 'Quiero la obra que cuelga en la sala 4.'],
            ],
          },
        },
        {
          id: 'esi11-p3-choice-relativo',
          type: 'CHOICE',
          instruction: 'Elija la frase adecuada a la situación.',
          question:
            'Usted entra en una librería y quiere cualquier novela ambientada en Galicia; no tiene ninguna en mente.',
          options: [
            { id: 'r1', text: 'Busco una novela que está ambientada en Galicia.' },
            { id: 'r2', text: 'Busco una novela que esté ambientada en Galicia.' },
            { id: 'r3', text: 'Busco la novela que esté ambientada en Galicia.' },
            { id: 'r4', text: 'Busco una novela que estaría ambientada en Galicia.' },
          ],
          multiple: false,
          solution: ['r2'],
          explanation:
            'No hay un libro concreto en la cabeza de quien habla, sino una condición que debe cumplirse: subjuntivo. r1 daría a entender que sabe cuál es y la está localizando; r3 combina el artículo determinado con el subjuntivo, lo que resulta contradictorio.',
        },
        {
          id: 'esi11-p3-cloze',
          type: 'CLOZE',
          instruction: 'Complete con indicativo o subjuntivo, según el caso.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '▸ Conozco una sala que ' },
            {
              kind: 'GAP',
              gapId: 'c1',
              solution: ['expone', 'tiene'],
              hint: 'exponer, sala concreta',
              width: 8,
            },
            { kind: 'TEXT', text: ' fotografía documental.\n▸ ¿Hay por aquí alguna sala que ' },
            {
              kind: 'GAP',
              gapId: 'c2',
              solution: ['exponga'],
              hint: 'exponer, no sé si existe',
              width: 9,
            },
            {
              kind: 'TEXT',
              text: ' fotografía documental?\n▸ No hay en esta ciudad ningún museo que ',
            },
            { kind: 'GAP', gapId: 'c3', solution: ['abra'], hint: 'abrir, no existe', width: 7 },
            { kind: 'TEXT', text: ' los lunes.\n▸ Quiero un marco que ' },
            { kind: 'GAP', gapId: 'c4', solution: ['quepa'], hint: 'caber, condición', width: 8 },
            { kind: 'TEXT', text: ' en esta pared.\n▸ Me llevo el marco que ' },
            {
              kind: 'GAP',
              gapId: 'c5',
              solution: ['vimos', 'está'],
              hint: 'ver / estar, ya elegido',
              width: 8,
            },
            { kind: 'TEXT', text: ' el sábado.' },
          ],
        },
        {
          id: 'esi11-p3-info-lo',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Lo + adjetivo: hablar de cualidades',
          text: 'La crítica en español usa constantemente el neutro «lo» para convertir una cualidad en sustantivo, sin necesidad de inventar palabras. «Lo mejor de la película» no se refiere a ninguna cosa concreta, sino a una cualidad considerada en bloque. La construcción «lo + adjetivo + que» añade intensidad y exige concordancia del adjetivo con el sustantivo al que se refiere.',
          table: {
            headers: ['Construcción', 'Ejemplo'],
            rows: [
              ['lo + adjetivo', 'Lo interesante es el montaje.'],
              ['lo + adj. + de', 'lo mejor de la novela, lo flojo del guion'],
              ['lo + adj. + que', 'Sorprende lo largas que son las escenas.'],
              ['lo que + verbo', 'Lo que falla es el ritmo.'],
            ],
          },
        },
        {
          id: 'esi11-p3-choice-lo',
          type: 'CHOICE',
          instruction: 'Elija la frase correcta.',
          options: [
            { id: 'v1', text: 'Sorprende lo largo que son las escenas.' },
            { id: 'v2', text: 'Sorprende lo largas que son las escenas.' },
            { id: 'v3', text: 'Sorprende las largas que son las escenas.' },
            { id: 'v4', text: 'Sorprende lo largamente que son las escenas.' },
          ],
          multiple: false,
          solution: ['v2'],
          explanation:
            'En «lo + adjetivo + que», el «lo» es invariable pero el adjetivo concuerda con el sustantivo: escenas largas, luego «lo largas que son».',
        },
        {
          id: 'esi11-p3-match-sentido',
          type: 'MATCHING',
          instruction: 'Relacione cada frase con lo que da a entender.',
          left: [
            { id: 'm1', text: 'Buscamos una obra que ocupe toda la pared del vestíbulo.' },
            { id: 'm2', text: 'Buscamos la obra que ocupaba toda la pared del vestíbulo.' },
            { id: 'm3', text: 'No encontramos ninguna obra que convenza al jurado.' },
            { id: 'm4', text: 'No encontramos la obra que convenció al jurado.' },
          ],
          right: [
            { id: 'n1', text: 'Todavía no se ha elegido nada; se fija una condición.' },
            { id: 'n2', text: 'Hay una pieza concreta que estuvo ahí y se busca.' },
            { id: 'n3', text: 'Ninguna de las vistas cumple el requisito.' },
            { id: 'n4', text: 'Existió una que gustó y ahora no aparece.' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'n1' },
            { leftId: 'm2', rightId: 'n2' },
            { leftId: 'm3', rightId: 'n3' },
            { leftId: 'm4', rightId: 'n4' },
          ],
        },
        {
          id: 'esi11-p3-writing',
          type: 'WRITING',
          instruction: 'Escriba un encargo.',
          prompt:
            'Usted organiza una exposición colectiva en un centro cívico y escribe la convocatoria para artistas. Explique en 80 a 130 palabras qué tipo de obra busca, qué condiciones debe cumplir y qué no encaja. Use al menos tres oraciones de relativo con subjuntivo y una construcción con «lo + adjetivo».',
          minWords: 80,
          maxWords: 140,
          aiFeedback: true,
          sampleAnswer:
            'El centro cívico del barrio de San Andrés convoca una exposición colectiva para el próximo otoño y busca obras que dialoguen con el espacio en el que se van a ver: un vestíbulo de paso, con mucha luz natural y sin vigilancia permanente.\n\nSe admitirá cualquier técnica, siempre que la pieza pueda colgarse de una pared o apoyarse en el suelo sin anclajes. No se aceptarán obras que necesiten corriente eléctrica ni que superen los dos metros de altura. Lo más importante es que el trabajo aguante el trato de un sitio por el que pasan cuatrocientas personas al día.\n\nBuscamos, en definitiva, artistas a quienes les interese exponer fuera de una sala cerrada.',
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – eine Rezension lesen und zerlegen.
  {
    order: 4,
    title: 'Leer una reseña',
    subtitle: 'Cómo está hecha una crítica',
    estimatedMinutes: 27,
    content: {
      version: v,
      blocks: [
        { id: 'esi11-p4-h1', type: 'HEADING', level: 1, text: 'Leer una reseña' },
        {
          id: 'esi11-p4-intro',
          type: 'TEXT',
          text: 'Una reseña cumple tres encargos a la vez y en muy poco espacio: informa de qué es la obra, dice cómo está hecha y se moja. El lector decide en quince segundos si le interesa, de modo que el orden importa. Lo que sigue es una reseña de una película inventada, escrita para esta unidad; léala primero entera y después vuelva a ella por partes.',
        },
        {
          id: 'esi11-p4-texto-resena',
          type: 'TEXT',
          text: '«El turno de noche» (Ana Vilariño, 92 min). Una enfermera de urgencias cubre tres guardias seguidas en un hospital de provincias mientras espera la llamada que le dirá si su madre ha salido del quirófano en otra ciudad. Eso es todo el argumento, y sobra.\n\nVilariño rueda casi entera la película en pasillos y salas de espera, con una cámara que sigue a la protagonista a un metro de distancia y rara vez se detiene. El recurso podría haberse agotado en veinte minutos; no ocurre, porque el guion reparte con inteligencia los momentos de quietud. Sobresale el trabajo de Marta Reixa, que sostiene el plano largo sin subrayar nada.\n\nLo más flojo es el último tramo. La directora cede a la tentación de explicar lo que ya se había entendido, y dos diálogos del final sobran por completo. Aun con ese descuido, es la película española más firme del año en un registro que suele resolverse con música y primeros planos.',
        },
        {
          id: 'esi11-p4-info-partes',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Las partes de una reseña',
          text: 'La estructura se repite en prensa española con pocas variantes. Fíjese en un detalle de estilo: la reseña evita el «yo» casi por completo y lo sustituye por juicios formulados sobre la obra, lo que hace el texto más firme sin volverlo impersonal.',
          table: {
            headers: ['Parte', 'Contenido', 'Extensión'],
            rows: [
              ['ficha', 'título, autor, duración o extensión', 'una línea'],
              ['sinopsis', 'de qué va, sin destripar el final', '2–3 frases'],
              ['análisis', 'cómo está hecha, con ejemplos', 'el grueso'],
              ['reparo', 'lo que falla, sin demoler', '1 párrafo'],
              ['veredicto', 'recomendación matizada', '1–2 frases'],
            ],
          },
        },
        {
          id: 'esi11-p4-choice-parte',
          type: 'CHOICE',
          instruction: 'Vuelva a la reseña y elija.',
          question: '¿Qué frase pertenece al análisis y no a la sinopsis ni al veredicto?',
          options: [
            { id: 'p1', text: 'Una enfermera de urgencias cubre tres guardias seguidas.' },
            {
              id: 'p2',
              text: 'La cámara sigue a la protagonista a un metro de distancia y rara vez se detiene.',
            },
            { id: 'p3', text: 'Es la película española más firme del año.' },
            { id: 'p4', text: 'Eso es todo el argumento, y sobra.' },
          ],
          multiple: false,
          solution: ['p2'],
          explanation:
            'p2 describe un procedimiento concreto de la película, que es lo propio del análisis. p1 es sinopsis, p3 veredicto y p4 un comentario de transición que cierra la sinopsis.',
        },
        {
          id: 'esi11-p4-info-valorar',
          type: 'INFO',
          variant: 'TIP',
          title: 'Valorar sin adjetivos gastados',
          text: '«Increíble», «impresionante» y «maravilloso» no dicen nada porque valen para todo. Una valoración útil nombra qué se valora: la construcción, el ritmo, la interpretación, el uso del espacio. Y el reparo se formula mejor señalando la decisión concreta que falla que despachando la obra entera.',
          table: {
            headers: ['En vez de', 'Diga'],
            rows: [
              [
                'Es una película increíble.',
                'Sostiene la tensión sin música durante ochenta minutos.',
              ],
              ['La actriz está fantástica.', 'Reixa sostiene el plano largo sin subrayar nada.'],
              ['El final es malo.', 'El final explica lo que ya se había entendido.'],
              ['Me gustó mucho.', 'Convence más por el trabajo de espacio que por el guion.'],
            ],
          },
        },
        {
          id: 'esi11-p4-match-valoracion',
          type: 'MATCHING',
          instruction: 'Relacione cada juicio vago con su versión concreta.',
          left: [
            { id: 'j1', text: 'La novela es un poco lenta.' },
            { id: 'j2', text: 'La música es muy buena.' },
            { id: 'j3', text: 'El montaje está muy logrado.' },
            { id: 'j4', text: 'El personaje no funciona.' },
          ],
          right: [
            {
              id: 'k1',
              text: 'Las primeras cien páginas repiten tres veces la misma escena de espera.',
            },
            {
              id: 'k2',
              text: 'La partitura entra solo cuatro veces y siempre con un único instrumento.',
            },
            { id: 'k3', text: 'El corte se produce siempre una frase antes de lo esperable.' },
            {
              id: 'k4',
              text: 'El hermano cambia de opinión dos veces sin que nada lo justifique.',
            },
          ],
          solution: [
            { leftId: 'j1', rightId: 'k1' },
            { leftId: 'j2', rightId: 'k2' },
            { leftId: 'j3', rightId: 'k3' },
            { leftId: 'j4', rightId: 'k4' },
          ],
        },
        {
          id: 'esi11-p4-cloze',
          type: 'CLOZE',
          instruction: 'Complete la reseña con las expresiones del recuadro.',
          wordBank: ['Sobresale', 'Lo más flojo', 'Aun con', 'resuelve', 'sin destripar'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'La novela ' },
            { kind: 'GAP', gapId: 'c1', solution: ['resuelve'], width: 9 },
            {
              kind: 'TEXT',
              text: ' en doscientas páginas una historia que otros habrían estirado al doble. ',
            },
            { kind: 'GAP', gapId: 'c2', solution: ['Sobresale'], width: 10 },
            {
              kind: 'TEXT',
              text: ' el tratamiento del tiempo: cada capítulo avanza un año sin avisar. ',
            },
            { kind: 'GAP', gapId: 'c3', solution: ['Lo más flojo'], width: 13 },
            { kind: 'TEXT', text: ' son los personajes secundarios, apenas esbozados. ' },
            { kind: 'GAP', gapId: 'c4', solution: ['Aun con'], width: 8 },
            { kind: 'TEXT', text: ' ese reparo, se lee de un tirón. Diremos, ' },
            { kind: 'GAP', gapId: 'c5', solution: ['sin destripar'], width: 14 },
            { kind: 'TEXT', text: ' nada, que el último capítulo obliga a releer el primero.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – selbst eine Rezension schreiben.
  {
    order: 5,
    title: 'Escribir una reseña',
    subtitle: 'Mojarse con argumentos',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'esi11-p5-h1', type: 'HEADING', level: 1, text: 'Escribir una reseña' },
        {
          id: 'esi11-p5-intro',
          type: 'TEXT',
          text: 'Escribir una reseña es la prueba conjunta de todo el capítulo: hay que describir sin interpretar, interpretar apoyándose en lo descrito y, al final, decir si merece la pena. Lo último es lo que más cuesta a quien aprende un idioma, porque un juicio exige precisión y la tentación es refugiarse en fórmulas vagas. Esta página reúne los recursos que faltan y termina con el encargo.',
        },
        {
          id: 'esi11-p5-info-comparar',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Comparar y situar la obra',
          text: 'Casi ninguna valoración se sostiene sola: se apoya en una comparación, explícita o no. El español dispone de un repertorio fino para situar una obra respecto a otras sin caer en la lista.',
          table: {
            headers: ['Función', 'Expresión', 'Ejemplo'],
            rows: [
              ['emparentar', 'en la línea de, a la manera de', 'en la línea del primer Erice'],
              ['distinguir', 'a diferencia de, frente a', 'a diferencia de su novela anterior'],
              [
                'superioridad',
                'supera con mucho, está por encima de',
                'supera con mucho a la adaptación',
              ],
              ['igualdad', 'a la altura de, tan… como', 'a la altura de sus mejores páginas'],
              [
                'inferioridad',
                'se queda corta frente a, no alcanza',
                'no alcanza la tensión del original',
              ],
            ],
          },
        },
        {
          id: 'esi11-p5-info-veredicto',
          type: 'INFO',
          variant: 'TIP',
          title: 'El veredicto matizado',
          text: 'Un veredicto útil dice para quién es la obra, no solo si es buena. La fórmula más eficaz junta una recomendación y su condición, y de paso deja ver que quien escribe ha pensado en lectores distintos de sí mismo.',
          table: {
            headers: ['Tipo', 'Ejemplo'],
            rows: [
              ['recomendación condicionada', 'Imprescindible para quien aguante el ritmo lento.'],
              ['reserva expresa', 'Vale la pena, aunque no por lo que anuncia el cartel.'],
              ['desaconsejar sin demoler', 'Un experimento respetable que no acaba de cuajar.'],
              ['contraste con expectativa', 'Mucho mejor de lo que su primer capítulo promete.'],
            ],
          },
        },
        {
          id: 'esi11-p5-choice-veredicto',
          type: 'CHOICE',
          instruction: 'Elija el veredicto más informativo.',
          options: [
            { id: 'w1', text: 'Una obra maestra absoluta que nadie debería perderse.' },
            {
              id: 'w2',
              text: 'A mí personalmente me gustó bastante, aunque para gustos, colores.',
            },
            {
              id: 'w3',
              text: 'Convence más por su construcción que por su historia: quien busque intriga saldrá decepcionado, quien busque un retrato de un oficio, no.',
            },
            { id: 'w4', text: 'Es una película bastante entretenida y muy bien hecha.' },
          ],
          multiple: false,
          solution: ['w3'],
          explanation:
            'w3 dice qué ofrece la obra, a quién le servirá y a quién no. w1 exagera sin argumentar, w2 renuncia al juicio y w4 usa adjetivos que valen para cualquier película.',
        },
        {
          id: 'esi11-p5-cloze',
          type: 'CLOZE',
          instruction: 'Complete el párrafo final de una reseña.',
          wordBank: [
            'a diferencia de',
            'se queda corta',
            'a la altura de',
            'quien busque',
            'Aun así',
          ],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'La segunda novela de Carreira, ' },
            { kind: 'GAP', gapId: 'c1', solution: ['a diferencia de'], width: 16 },
            {
              kind: 'TEXT',
              text: ' la primera, renuncia al humor y apuesta por un tono seco. En las escenas familiares está ',
            },
            { kind: 'GAP', gapId: 'c2', solution: ['a la altura de'], width: 15 },
            { kind: 'TEXT', text: ' lo mejor que ha escrito; en las del hospital, en cambio, ' },
            { kind: 'GAP', gapId: 'c3', solution: ['se queda corta'], width: 15 },
            { kind: 'TEXT', text: '. ' },
            { kind: 'GAP', gapId: 'c4', solution: ['Aun así'], width: 8 },
            { kind: 'TEXT', text: ', el conjunto se sostiene. ' },
            { kind: 'GAP', gapId: 'c5', solution: ['Quien busque', 'quien busque'], width: 13 },
            { kind: 'TEXT', text: ' una trama cerrada hará bien en no empezarla.' },
          ],
        },
        {
          id: 'esi11-p5-ordering',
          type: 'ORDERING',
          instruction: 'Ordene los párrafos de la reseña.',
          items: [
            { id: 'u1', text: '«La casa de enfrente» (Nuria Bages, Acantilado, 214 páginas).' },
            {
              id: 'u2',
              text: 'Dos hermanas heredan la casa en la que no han entrado desde niñas y deciden venderla sin abrirla.',
            },
            {
              id: 'u3',
              text: 'Bages construye el libro con capítulos de dos páginas que alternan las dos voces, y el efecto es el de una conversación que nunca llega a producirse.',
            },
            {
              id: 'u4',
              text: 'El reparo está en los personajes secundarios, que entran y salen sin dejar rastro.',
            },
            {
              id: 'u5',
              text: 'Con todo, es su libro más ambicioso y el que mejor resiste una segunda lectura.',
            },
          ],
          solution: ['u1', 'u2', 'u3', 'u4', 'u5'],
        },
        {
          id: 'esi11-p5-writing',
          type: 'WRITING',
          instruction: 'Escriba una reseña completa.',
          prompt:
            'Escriba una reseña de 200 a 300 palabras de una película, novela, serie, exposición o disco que haya visto o leído en el último año. Incluya las cinco partes (ficha, sinopsis sin destripar el final, análisis con al menos dos observaciones concretas, un reparo y un veredicto matizado). Apoye cada juicio en algo comprobable de la obra, evite los adjetivos comodín y use al menos una comparación y una construcción con «lo + adjetivo».',
          minWords: 200,
          maxWords: 320,
          aiFeedback: true,
          sampleAnswer:
            '«Los días contados» (Silvia Otxoa, 2024, seis episodios de 45 minutos).\n\nUna inspectora de trabajo llega a un pueblo de la costa para investigar un accidente en una conservera y descubre que la mitad de la plantilla figura como autónoma. La serie no va del accidente, sino de lo que ocurre cuando alguien de fuera empieza a hacer preguntas en un sitio donde todo el mundo depende de la misma empresa.\n\nOtxoa toma dos decisiones que sostienen la serie entera. La primera es no mostrar nunca al dueño de la fábrica: se le menciona en los seis episodios y no aparece, de modo que el poder queda como una presencia sin rostro a la que nadie puede dirigirse. La segunda es rodar todas las conversaciones importantes en espacios de trabajo, con el ruido de las máquinas encima de las voces; hay diálogos que cuesta oír, y eso es evidentemente deliberado.\n\nLo más discutible es el tercer episodio, que se va a una subtrama sentimental resuelta a toda prisa y desactiva la tensión que los dos primeros habían levantado con paciencia. A diferencia del resto, ahí la serie parece obedecer a un manual.\n\nEn conjunto, está por encima de casi todo lo que se ha estrenado este año en su género, y desde luego a la altura de las mejores series sobre trabajo que se han hecho en España. Quien busque una intriga con culpable y detención final se llevará una decepción; quien quiera entender cómo funciona un pueblo de una sola fábrica, difícilmente encontrará algo mejor.',
        },
      ],
    },
  },
];
