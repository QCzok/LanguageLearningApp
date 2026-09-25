import type { UnitSeed } from './chapter-beginner-1';

/**
 * Spanisch, Advanced, Kapitel 4: „Literatura hispánica“
 *
 * Fünf Seiten. Kein Literaturgeschichts-Crashkurs, sondern das Werkzeug zum
 * Deuten: Wer erzählt, mit welchen Mitteln, aus welcher Zeit heraus – und
 * wie schreibt man darüber einen comentario de texto, die Textsorte, die
 * jede Schülerin in Spanien und Lateinamerika beherrscht.
 *
 * Aufbau: Seite 1 legt den Analysewortschatz, Seite 2 behandelt
 * Erzählinstanz und erlebte Rede, Seite 3 die Stilfiguren, Seite 4 die
 * großen Epochen als Orientierung, Seite 5 den comentario de texto.
 *
 * Zitiert werden nur gemeinfreie Verse (Garcilaso, Quevedo, Machado,
 * Bécquer) und nur in kurzen Auszügen. Die Prosabeispiele sind eigens
 * verfasst und keinem Werk entnommen.
 */
const v = 1;

export const SPANISH_ADVANCED_4_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – das Begriffswerkzeug der Textanalyse.
  {
    order: 1,
    title: 'Leer despacio',
    subtitle: 'Der Wortschatz der Textanalyse',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'esa4-p1-h1', type: 'HEADING', level: 1, text: 'Leer despacio' },
        {
          id: 'esa4-p1-intro',
          type: 'TEXT',
          text: 'Leer literatura en otra lengua suele empezar como una carrera de obstáculos: se busca cada palabra, se reconstruye la frase y, al final de la página, se sabe qué ha pasado pero no por qué importa. En el nivel avanzado el ritmo se invierte. El significado de las palabras ya no es el problema; lo es el de su disposición. Para hablar de ella hacen falta unos términos precisos.',
        },
        {
          id: 'esa4-p1-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: hablar de un texto',
          items: [
            { term: 'el narrador', translations: { en: 'narrator', de: 'der Erzähler' } },
            { term: 'el punto de vista', translations: { en: 'point of view', de: 'die Erzählperspektive' } },
            { term: 'la trama', translations: { en: 'plot', de: 'die Handlung' } },
            { term: 'el desenlace', translations: { en: 'ending, outcome', de: 'der Ausgang, die Auflösung' } },
            { term: 'el verso', translations: { en: 'line of verse', de: 'der Vers' } },
            { term: 'la estrofa', translations: { en: 'stanza', de: 'die Strophe' } },
            { term: 'la rima', translations: { en: 'rhyme', de: 'der Reim' } },
            {
              term: 'el tono',
              translations: { en: 'tone', de: 'der Ton, die Stimmung' },
              example: 'El tono del poema es elegíaco.',
            },
            { term: 'el recurso estilístico', translations: { en: 'stylistic device', de: 'das Stilmittel' } },
            {
              term: 'evocar',
              translations: { en: 'to evoke', de: 'heraufbeschwören, anklingen lassen' },
            },
            { term: 'el tema', translations: { en: 'theme, subject', de: 'das Thema' } },
            {
              term: 'el yo lírico',
              translations: { en: 'lyrical I, speaker', de: 'das lyrische Ich' },
            },
          ],
        },
        {
          id: 'esa4-p1-info-tema',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Argumento, tema, tono',
          text: 'Tres palabras que el principiante confunde. El argumento es lo que pasa; se cuenta en pasado y con detalle. El tema es aquello de lo que trata el texto en el fondo; se enuncia con un sustantivo abstracto y en una frase: «la imposibilidad de volver al pasado». El tono es la actitud que transmite la voz: irónica, nostálgica, solemne, desengañada.',
          table: {
            headers: ['Término', 'Pregunta', 'Ejemplo'],
            rows: [
              ['argumento', '¿Qué pasa?', 'Un hombre vuelve a su pueblo tras treinta años.'],
              ['tema', '¿De qué trata en el fondo?', 'la imposibilidad de recuperar el pasado'],
              ['tono', '¿Con qué actitud se cuenta?', 'nostálgico, con toques de ironía'],
            ],
          },
        },
        {
          id: 'esa4-p1-match',
          type: 'MATCHING',
          instruction: 'Relacione cada frase con lo que describe.',
          left: [
            { id: 'a1', text: 'Una joven deja su aldea para trabajar en la capital y no regresa.' },
            { id: 'a2', text: 'el desarraigo' },
            { id: 'a3', text: 'melancólico, sin dramatismo' },
            { id: 'a4', text: 'Nadie volvió a verla en la plaza del pueblo.' },
          ],
          right: [
            { id: 'b1', text: 'argumento' },
            { id: 'b2', text: 'tema' },
            { id: 'b3', text: 'tono' },
            { id: 'b4', text: 'desenlace' },
          ],
          solution: [
            { leftId: 'a1', rightId: 'b1' },
            { leftId: 'a2', rightId: 'b2' },
            { leftId: 'a3', rightId: 'b3' },
            { leftId: 'a4', rightId: 'b4' },
          ],
        },
        {
          id: 'esa4-p1-choice',
          type: 'CHOICE',
          instruction: 'Elija la formulación adecuada del tema.',
          question: 'Un cuento narra cómo un anciano guarda durante décadas las cartas de un hijo que emigró, sin abrirlas nunca. ¿Cuál es la mejor formulación del tema?',
          options: [
            { id: 'c1', text: 'Un anciano guarda unas cartas en un cajón.' },
            { id: 'c2', text: 'El miedo a que la realidad destruya el recuerdo.' },
            { id: 'c3', text: 'El cuento es muy triste y está bien escrito.' },
            { id: 'c4', text: 'La emigración a Europa en el siglo XX y sus causas económicas.' },
          ],
          multiple: false,
          solution: ['c2'],
          explanation:
            'El tema se formula en abstracto y en una línea. La primera opción resume el argumento, la tercera es una valoración y la cuarta nombra el contexto, no aquello de lo que trata el texto.',
        },
        {
          id: 'esa4-p1-cloze',
          type: 'CLOZE',
          instruction: 'Complete la descripción del poema.',
          wordBank: ['estrofas', 'versos', 'rima', 'yo lírico', 'tono'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'El poema consta de cuatro ' },
            { kind: 'GAP', gapId: 'g1', solution: ['estrofas'], width: 9 },
            { kind: 'TEXT', text: ' de cuatro ' },
            { kind: 'GAP', gapId: 'g2', solution: ['versos'], width: 8 },
            { kind: 'TEXT', text: ' cada una, con ' },
            { kind: 'GAP', gapId: 'g3', solution: ['rima'], width: 6 },
            { kind: 'TEXT', text: ' asonante en los pares. El ' },
            { kind: 'GAP', gapId: 'g4', solution: ['yo lírico'], width: 10 },
            { kind: 'TEXT', text: ' se dirige a una persona ausente, y el ' },
            { kind: 'GAP', gapId: 'g5', solution: ['tono'], width: 6 },
            { kind: 'TEXT', text: ' pasa de la queja a la aceptación.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – wer erzählt: Erzählinstanz und erlebte Rede.
  {
    order: 2,
    title: '¿Quién cuenta?',
    subtitle: 'Erzähler und erlebte Rede',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'esa4-p2-h1', type: 'HEADING', level: 1, text: '¿Quién cuenta?' },
        {
          id: 'esa4-p2-intro',
          type: 'TEXT',
          text: 'El autor escribe; el narrador cuenta. La distinción parece escolar hasta que un narrador miente, se equivoca o sabe menos que el lector. Preguntarse quién cuenta, desde dónde y cuánto sabe es la primera operación de cualquier análisis de un texto narrativo.',
        },
        {
          id: 'esa4-p2-info-narradores',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Tipos de narrador',
          text: 'El narrador omnisciente habla en tercera persona y conoce los pensamientos de todos los personajes. El narrador en tercera persona limitado se pega a uno solo y sabe lo que él sabe. El narrador protagonista cuenta su propia historia en primera persona; el narrador testigo cuenta en primera persona la historia de otro. Menos frecuente es la segunda persona, que interpela al lector o a sí misma: «Entras en la casa y no reconoces nada».',
          table: {
            headers: ['Narrador', 'Persona', 'Sabe…'],
            rows: [
              ['omnisciente', 'tercera', 'todo, también lo que piensan los personajes'],
              ['limitado', 'tercera', 'lo que sabe un personaje'],
              ['protagonista', 'primera', 'lo que vivió, y lo interpreta a su manera'],
              ['testigo', 'primera', 'lo que vio de otro'],
              ['en segunda persona', 'segunda', 'lo que vive el «tú» al que se dirige'],
            ],
          },
        },
        {
          id: 'esa4-p2-text',
          type: 'TEXT',
          text: 'Fragmento A. «Aquel verano mi tío Ramiro dejó de hablar. Yo tenía nueve años y creí que era un juego; tardé mucho en entender que no lo era.»\nFragmento B. «Clara miró el reloj de la estación. El tren no llegaría, lo sabía; y sin embargo se quedó, porque irse habría sido admitirlo. En el otro andén, el jefe de estación pensaba en su hija y no la vio.»\nFragmento C. «Abres la puerta despacio, como si alguien pudiera oírte. Nadie te espera.»',
        },
        {
          id: 'esa4-p2-match',
          type: 'MATCHING',
          instruction: 'Relacione cada fragmento con su tipo de narrador.',
          left: [
            { id: 'n1', text: 'Fragmento A' },
            { id: 'n2', text: 'Fragmento B' },
            { id: 'n3', text: 'Fragmento C' },
          ],
          right: [
            { id: 'm1', text: 'narrador testigo: cuenta en primera persona la historia de otro' },
            { id: 'm2', text: 'narrador omnisciente: conoce lo que piensan varios personajes' },
            { id: 'm3', text: 'narración en segunda persona' },
          ],
          solution: [
            { leftId: 'n1', rightId: 'm1' },
            { leftId: 'n2', rightId: 'm2' },
            { leftId: 'n3', rightId: 'm3' },
          ],
        },
        {
          id: 'esa4-p2-info-libre',
          type: 'INFO',
          variant: 'TIP',
          title: 'El estilo indirecto libre',
          text: 'Entre el estilo directo («Pensó: "No vendrá"») y el indirecto («Pensó que no vendría») existe un tercero. El estilo indirecto libre conserva los tiempos del indirecto, pero suprime el verbo introductor y adopta la voz del personaje: «No vendría. Claro que no vendría. ¿Cómo había podido creerlo?». La tercera persona y el pasado siguen ahí, pero quien se pregunta y se reprocha es el personaje. Es el recurso con el que la novela moderna entra en la cabeza de sus personajes sin anunciarlo.',
          table: {
            headers: ['Estilo', 'Ejemplo'],
            rows: [
              ['directo', 'Pensó: «No vendrá. ¿Cómo he podido creerlo?»'],
              ['indirecto', 'Pensó que no vendría y se preguntó cómo había podido creerlo.'],
              ['indirecto libre', 'No vendría. ¿Cómo había podido creerlo?'],
            ],
          },
        },
        {
          id: 'esa4-p2-choice',
          type: 'CHOICE',
          instruction: 'Identifique el estilo indirecto libre.',
          question: '¿Qué frase está en estilo indirecto libre?',
          options: [
            { id: 'e1', text: 'Julia dijo: «Mañana me voy, y no pienso volver».' },
            { id: 'e2', text: 'Julia dijo que al día siguiente se iba y que no pensaba volver.' },
            { id: 'e3', text: 'Julia cerró la maleta. Al día siguiente se iba, y no pensaba volver, eso desde luego que no.' },
            { id: 'e4', text: 'Julia se fue al día siguiente y no volvió.' },
          ],
          multiple: false,
          solution: ['e3'],
          explanation:
            'La tercera frase mantiene el pasado y la tercera persona, pero la insistencia «eso desde luego que no» es la voz de Julia, sin verbo que la introduzca. La cuarta es simple narración: cuenta hechos, no pensamientos.',
        },
        {
          id: 'esa4-p2-cloze',
          type: 'CLOZE',
          instruction: 'Transforme el pensamiento en estilo indirecto libre.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Directo: «¿Por qué no me ha llamado? Seguro que está enfadado.» → Indirecto libre: ¿Por qué no la ' },
            { kind: 'GAP', gapId: 'l1', solution: ['había'], hint: 'haber', width: 7 },
            { kind: 'TEXT', text: ' llamado? Seguro que ' },
            { kind: 'GAP', gapId: 'l2', solution: ['estaba'], hint: 'estar', width: 7 },
            { kind: 'TEXT', text: ' enfadado.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – Stilfiguren an gemeinfreien Versen.
  {
    order: 3,
    title: 'Figuras que dicen más',
    subtitle: 'Stilmittel benennen und deuten',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'esa4-p3-h1', type: 'HEADING', level: 1, text: 'Figuras que dicen más' },
        {
          id: 'esa4-p3-intro',
          type: 'TEXT',
          text: 'Nombrar una figura no es interpretarla. Un comentario que dice «en el verso tres hay una metáfora» no ha dicho nada todavía; lo interesante empieza con la pregunta siguiente: ¿qué hace esa metáfora que no haría una expresión literal? Las figuras son decisiones, y toda decisión tiene un efecto.',
        },
        {
          id: 'esa4-p3-info-figuras',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Ocho figuras frecuentes',
          text: 'Los ejemplos proceden de poetas clásicos cuyos textos son de dominio público. Fíjese en que casi todas las figuras son operaciones sencillas —comparar, repetir, invertir, oponer—, y en que su efecto depende siempre del contexto.',
          table: {
            headers: ['Figura', 'Operación', 'Ejemplo'],
            rows: [
              ['metáfora', 'identificar dos realidades', 'Nuestras vidas son los ríos / que van a dar en la mar (Manrique)'],
              ['comparación o símil', 'relacionar con «como»', 'como el ave que vuela sin dejar rastro'],
              ['antítesis / oxímoron', 'oponer contrarios', 'es hielo abrasador, es fuego helado (Quevedo)'],
              ['anáfora', 'repetir al inicio', 'Volverán las oscuras golondrinas… / Volverán las tupidas madreselvas (Bécquer)'],
              ['hipérbaton', 'alterar el orden', 'del salón en el ángulo oscuro (Bécquer)'],
              ['personificación', 'dar rasgos humanos', 'la tarde, cansada, se sentaba en los tejados'],
              ['hipérbole', 'exagerar', 'Érase un hombre a una nariz pegado (Quevedo)'],
              ['paradoja', 'contradicción aparente', 'Caminante, no hay camino, / se hace camino al andar (Machado)'],
            ],
          },
        },
        {
          id: 'esa4-p3-match',
          type: 'MATCHING',
          instruction: 'Relacione cada verso con la figura que predomina.',
          left: [
            { id: 'f1', text: 'es hielo abrasador, es fuego helado' },
            { id: 'f2', text: 'del salón en el ángulo oscuro' },
            { id: 'f3', text: 'Érase un hombre a una nariz pegado' },
            { id: 'f4', text: 'Nuestras vidas son los ríos' },
          ],
          right: [
            { id: 'g1', text: 'oxímoron' },
            { id: 'g2', text: 'hipérbaton' },
            { id: 'g3', text: 'hipérbole' },
            { id: 'g4', text: 'metáfora' },
          ],
          solution: [
            { leftId: 'f1', rightId: 'g1' },
            { leftId: 'f2', rightId: 'g2' },
            { leftId: 'f3', rightId: 'g3' },
            { leftId: 'f4', rightId: 'g4' },
          ],
        },
        {
          id: 'esa4-p3-info-efecto',
          type: 'INFO',
          variant: 'TIP',
          title: 'De la figura al efecto',
          text: 'Para cada figura, pregúntese qué cambia respecto a la versión literal. En el verso de Manrique, identificar la vida con un río añade tres ideas sin enunciarlas: la vida fluye sin detenerse, tiene una dirección fija y acaba siempre en el mismo lugar —la mar, es decir, la muerte—. La metáfora condensa en cinco palabras un argumento completo.',
          table: {
            headers: ['Paso', 'Pregunta'],
            rows: [
              ['identificar', '¿Qué figura es?'],
              ['contrastar', '¿Cómo sería la versión literal?'],
              ['interpretar', '¿Qué añade la figura que la versión literal no dice?'],
              ['relacionar', '¿Cómo se conecta con el tema del texto?'],
            ],
          },
        },
        {
          id: 'esa4-p3-choice',
          type: 'CHOICE',
          instruction: 'Elija la interpretación más adecuada.',
          question: 'En «Caminante, no hay camino, / se hace camino al andar», ¿qué efecto tiene la paradoja?',
          options: [
            { id: 'h1', text: 'Describe con exactitud un paisaje sin caminos.' },
            {
              id: 'h2',
              text: 'Niega que exista un destino previo: el camino no precede a la vida, sino que es su resultado.',
            },
            { id: 'h3', text: 'Aconseja no salir de viaje sin un mapa.' },
            { id: 'h4', text: 'Es un error lógico que el poeta no advirtió.' },
          ],
          multiple: false,
          solution: ['h2'],
          explanation:
            'La contradicción es solo aparente: «no hay camino» antes de andar, pero sí después. Así el poema convierte una observación banal en una idea sobre la existencia: no hay un trazado previo, cada vida lo va creando.',
        },
        {
          id: 'esa4-p3-cloze',
          type: 'CLOZE',
          instruction: 'Complete el análisis con el nombre de la figura.',
          wordBank: ['anáfora', 'personificación', 'antítesis', 'comparación'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'En «la ciudad dormía con un ojo abierto» hay una ' },
            { kind: 'GAP', gapId: 'r1', solution: ['personificación', 'personificacion'], width: 16 },
            { kind: 'TEXT', text: '. «Volverán… Volverán…» al inicio de dos versos es una ' },
            { kind: 'GAP', gapId: 'r2', solution: ['anáfora', 'anafora'], width: 8 },
            { kind: 'TEXT', text: '. Oponer «tanto amor» y «tanto olvido» es una ' },
            { kind: 'GAP', gapId: 'r3', solution: ['antítesis', 'antitesis'], width: 10 },
            { kind: 'TEXT', text: ', y «frágil como el cristal» es una ' },
            { kind: 'GAP', gapId: 'r4', solution: ['comparación', 'comparacion'], width: 12 },
            { kind: 'TEXT', text: '.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – Epochen als Orientierung, nicht als Schubladen.
  {
    order: 4,
    title: 'Textos en su tiempo',
    subtitle: 'Epochen und Kontext',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'esa4-p4-h1', type: 'HEADING', level: 1, text: 'Textos en su tiempo' },
        {
          id: 'esa4-p4-intro',
          type: 'TEXT',
          text: 'Situar un texto en su época no es colgarle una etiqueta, sino recuperar las preguntas a las que respondía. El desengaño barroco se entiende mejor sabiendo que España llevaba décadas de crisis tras un siglo de imperio; la obsesión de la Generación del 98 por Castilla, sabiendo que el país acababa de perder sus últimas colonias. Los movimientos no son cajones: son conversaciones.',
        },
        {
          id: 'esa4-p4-info-epocas',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'Cinco momentos de la literatura en español',
          text: 'La tabla no pretende ser un canon, sino un mapa mínimo. Observe que a partir del siglo XIX el centro de gravedad se desplaza: el modernismo nace en América y viaja a España, y en el siglo XX la novela latinoamericana se convierte en referencia mundial.',
          table: {
            headers: ['Momento', 'Época', 'Rasgos', 'Nombres'],
            rows: [
              ['Siglo de Oro', 'siglos XVI–XVII', 'renovación poética, novela picaresca, teatro nacional; en el Barroco, desengaño', 'Garcilaso, Cervantes, Lope, Quevedo, Sor Juana'],
              ['Romanticismo', 'primera mitad del XIX', 'subjetividad, emoción, rebeldía', 'Bécquer, Rosalía de Castro, Espronceda'],
              ['Modernismo', 'finales del XIX', 'musicalidad, exotismo, renovación formal', 'Rubén Darío, José Martí'],
              ['Generación del 98', 'hacia 1898', 'reflexión sobre España, paisaje castellano, sobriedad', 'Unamuno, Machado, Baroja'],
              ['Boom latinoamericano', 'años sesenta y setenta', 'experimentación narrativa, realismo mágico', 'García Márquez, Cortázar, Vargas Llosa, Fuentes'],
            ],
          },
        },
        {
          id: 'esa4-p4-match',
          type: 'MATCHING',
          instruction: 'Relacione cada rasgo con el movimiento al que corresponde.',
          left: [
            { id: 'm1', text: 'Un nicaragüense renueva el verso con cisnes, princesas y una música nueva.' },
            { id: 'm2', text: 'Tras perder Cuba y Filipinas, los escritores se preguntan qué es España.' },
            { id: 'm3', text: 'Lo extraordinario aparece en la novela como parte natural de la vida del pueblo.' },
            { id: 'm4', text: 'La vida es sueño y la gloria, humo: todo pasa.' },
          ],
          right: [
            { id: 'n1', text: 'Modernismo' },
            { id: 'n2', text: 'Generación del 98' },
            { id: 'n3', text: 'Boom y realismo mágico' },
            { id: 'n4', text: 'Barroco' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'n1' },
            { leftId: 'm2', rightId: 'n2' },
            { leftId: 'm3', rightId: 'n3' },
            { leftId: 'm4', rightId: 'n4' },
          ],
        },
        {
          id: 'esa4-p4-info-magico',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Realismo mágico no es fantasía',
          text: 'La etiqueta más exportada de la literatura latinoamericana se usa a menudo mal. En la literatura fantástica, lo imposible irrumpe y los personajes se asombran o se aterran. En el realismo mágico, lo extraordinario se narra con el mismo tono que lo cotidiano, y nadie se sorprende: una mujer asciende al cielo mientras tiende la ropa, y lo que preocupa a la familia son las sábanas. El efecto no está en el prodigio, sino en la naturalidad con que se cuenta.',
        },
        {
          id: 'esa4-p4-choice',
          type: 'CHOICE',
          instruction: 'Elija el fragmento que mejor encaja con el realismo mágico.',
          question: '¿Qué fragmento, escrito para este ejercicio, responde al procedimiento del realismo mágico?',
          options: [
            {
              id: 'k1',
              text: 'Cuando el fantasma apareció en el pasillo, Elena gritó y huyó de la casa para no volver jamás.',
            },
            {
              id: 'k2',
              text: 'El año en que llovieron peces, la abuela se limitó a sacar la sartén grande; lo que la inquietaba era que siempre caían en martes.',
            },
            { id: 'k3', text: 'La nave aterrizó en Marte en el año 3000 y los colonos fundaron una ciudad.' },
            { id: 'k4', text: 'Llovió toda la tarde y la abuela preparó pescado para cenar.' },
          ],
          multiple: false,
          solution: ['k2'],
          explanation:
            'Lo prodigioso —llueven peces— se cuenta sin asombro y se integra en la rutina doméstica. En la primera opción el prodigio provoca terror, como en el relato fantástico; la tercera es ciencia ficción; la cuarta no contiene nada extraordinario.',
        },
        {
          id: 'esa4-p4-ordering',
          type: 'ORDERING',
          instruction: 'Ordene los movimientos cronológicamente.',
          items: [
            { id: 'o1', text: 'Siglo de Oro' },
            { id: 'o2', text: 'Romanticismo' },
            { id: 'o3', text: 'Modernismo' },
            { id: 'o4', text: 'Generación del 98' },
            { id: 'o5', text: 'Boom latinoamericano' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5'],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – der comentario de texto.
  {
    order: 5,
    title: 'El comentario de texto',
    subtitle: 'Eine Deutung schriftlich ausführen',
    estimatedMinutes: 34,
    content: {
      version: v,
      blocks: [
        { id: 'esa4-p5-h1', type: 'HEADING', level: 1, text: 'El comentario de texto' },
        {
          id: 'esa4-p5-intro',
          type: 'TEXT',
          text: 'En la escuela hispana, el comentario de texto es un género con reglas propias: una lectura ordenada que va de lo general a lo particular y vuelve a lo general. No es un resumen ni una opinión, sino una demostración: se afirma algo sobre el texto y se prueba con el texto mismo.',
        },
        {
          id: 'esa4-p5-info-pasos',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Los pasos del comentario',
          text: 'El comentario se escribe en presente —el presente del análisis: «el poeta contrapone», «el narrador omite»— y en tercera persona o con el plural de modestia («observamos»). Las citas se integran en la frase entre comillas, con el número de verso o de línea.',
          table: {
            headers: ['Paso', 'Contenido', 'Fórmula útil'],
            rows: [
              ['localización', 'autor, obra, época, género', 'El fragmento pertenece a…'],
              ['tema', 'una frase abstracta', 'El texto gira en torno a…'],
              ['estructura', 'partes y su función', 'Cabe distinguir tres partes…'],
              ['análisis', 'forma al servicio del sentido', 'La anáfora de los versos 3 y 4 subraya…'],
              ['conclusión', 'síntesis y valoración', 'En suma, el texto…'],
            ],
          },
        },
        {
          id: 'esa4-p5-ordering',
          type: 'ORDERING',
          instruction: 'Ordene las frases de este comentario breve de la rima de Bécquer «Volverán las oscuras golondrinas».',
          items: [
            { id: 'p1', text: 'El poema pertenece a las «Rimas» de Gustavo Adolfo Bécquer, figura central del Romanticismo tardío español.' },
            { id: 'p2', text: 'El texto gira en torno a la irrepetibilidad del amor verdadero.' },
            { id: 'p3', text: 'Cabe distinguir dos movimientos: lo que volverá y lo que no volverá nunca.' },
            {
              id: 'p4',
              text: 'La anáfora de «volverán» subraya la naturaleza cíclica del paisaje, que contrasta con el «no volverán» de la conclusión de cada estrofa.',
            },
            { id: 'p5', text: 'En suma, la estructura misma del poema enfrenta la repetición de la naturaleza a la unicidad de lo vivido.' },
          ],
          solution: ['p1', 'p2', 'p3', 'p4', 'p5'],
        },
        {
          id: 'esa4-p5-choice',
          type: 'CHOICE',
          instruction: 'Elija la frase propia de un comentario de texto.',
          question: '¿Qué frase cumple las convenciones del comentario?',
          options: [
            { id: 'q1', text: 'Me ha gustado mucho el poema porque es muy bonito.' },
            { id: 'q2', text: 'El poeta contrapone el «fuego» del verso 2 al «hielo» del verso 4 para expresar la contradicción del amor.' },
            { id: 'q3', text: 'Bécquer nació en Sevilla en 1836 y tuvo una vida difícil.' },
            { id: 'q4', text: 'En el poema pasa que un hombre está triste.' },
          ],
          multiple: false,
          solution: ['q2'],
          explanation:
            'La segunda frase une una observación formal, una cita localizada y una interpretación. Las demás son valoración personal, biografía o resumen, que tienen poco lugar en un comentario.',
        },
        {
          id: 'esa4-p5-cloze',
          type: 'CLOZE',
          instruction: 'Complete el resumen del capítulo.',
          wordBank: ['narrador', 'indirecto libre', 'efecto', 'tema', 'Boom', 'presente'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'El autor escribe; el ' },
            { kind: 'GAP', gapId: 'z1', solution: ['narrador'], width: 9 },
            { kind: 'TEXT', text: ' cuenta. El estilo ' },
            { kind: 'GAP', gapId: 'z2', solution: ['indirecto libre'], width: 15 },
            { kind: 'TEXT', text: ' adopta la voz del personaje sin verbo introductor. Nombrar una figura no basta: hay que explicar su ' },
            { kind: 'GAP', gapId: 'z3', solution: ['efecto'], width: 7 },
            { kind: 'TEXT', text: '. El ' },
            { kind: 'GAP', gapId: 'z4', solution: ['tema'], width: 6 },
            { kind: 'TEXT', text: ' se formula en abstracto y en una frase. El realismo mágico es una seña del ' },
            { kind: 'GAP', gapId: 'z5', solution: ['Boom'], width: 6 },
            { kind: 'TEXT', text: ' latinoamericano. Y el comentario se escribe en ' },
            { kind: 'GAP', gapId: 'z6', solution: ['presente'], width: 9 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'esa4-p5-writing',
          type: 'WRITING',
          instruction: 'Escriba un comentario de texto breve.',
          prompt:
            'Comente la primera estrofa del poema «Proverbios y cantares XXIX» de Antonio Machado: «Caminante, son tus huellas / el camino y nada más; / caminante, no hay camino, / se hace camino al andar.» Escriba entre 180 y 260 palabras siguiendo los pasos del capítulo: localización, tema, estructura, análisis de al menos dos recursos (con cita) y conclusión. Use el presente del análisis.',
          minWords: 180,
          maxWords: 270,
          aiFeedback: true,
          sampleAnswer:
            'Los versos pertenecen a «Proverbios y cantares», una serie de poemas breves incluida en «Campos de Castilla», de Antonio Machado, poeta vinculado a la Generación del 98. Se trata de una estrofa de cuatro versos octosílabos, con la sencillez sentenciosa de la copla popular.\n\nEl texto gira en torno a la idea de que la vida no sigue un trazado previo, sino que se construye al vivirla.\n\nCabe distinguir dos partes. Los dos primeros versos definen el camino como la suma de las huellas ya dejadas; los dos últimos niegan que exista un camino antes de andar.\n\nEl recurso central es la paradoja de los versos 3 y 4: «no hay camino» y, sin embargo, «se hace camino al andar». La contradicción es solo aparente y obliga al lector a detenerse: el camino no precede al viajero, es su consecuencia. La repetición del vocativo «caminante» al inicio de los versos 1 y 3 funciona como una anáfora que da al poema un tono de consejo dirigido a cualquiera, y la metáfora que identifica la vida con un viaje recorre toda la estrofa.\n\nLa forma contribuye al sentido: el octosílabo y la rima aguda en «más» y «andar» acercan la reflexión filosófica al refrán, de modo que una idea compleja se enuncia con la naturalidad de un saber popular.\n\nEn suma, la estrofa condensa en menos de veinte palabras una concepción de la existencia como construcción personal y sin destino fijado.',
        },
      ],
    },
  },
];
