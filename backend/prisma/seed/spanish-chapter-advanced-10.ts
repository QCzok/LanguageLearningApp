import type { UnitSeed } from './chapter-beginner-1';

/**
 * Spanisch, Advanced, Kapitel 10: „Modismos y matices“
 *
 * Fünf Seiten. Idiomatik ist der Bereich, in dem man auf C2 noch am ehesten
 * auffällt – weniger, weil man Redewendungen nicht kennt, als weil man sie
 * im falschen Moment, in der falschen Region oder leicht verbogen benutzt.
 * Das Kapitel lehrt deshalb neben den Wendungen selbst ihr Gewicht.
 *
 * Aufbau: Seite 1 die verbreitetsten festen Wendungen, Seite 2 Ironie und
 * Untertreibung, Seite 3 Synonyme, die keine sind, Seite 4 Sprichwörter und
 * regionale Idiomatik, Seite 5 die Frage, wann man sie verwendet – und wann
 * lieber nicht.
 *
 * Regionale Wendungen sind gekennzeichnet; ohne Kennzeichnung heißt: im
 * ganzen spanischsprachigen Raum verständlich. Sämtliche Texte sind
 * eigenständig verfasst.
 */
const v = 1;

export const SPANISH_ADVANCED_10_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – feste Wendungen mit breiter Verbreitung.
  {
    order: 1,
    title: 'Frases hechas',
    subtitle: 'Feste Wendungen, die man überall versteht',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'esa10-p1-h1', type: 'HEADING', level: 1, text: 'Frases hechas' },
        {
          id: 'esa10-p1-intro',
          type: 'TEXT',
          text: 'Una frase hecha no se entiende sumando sus palabras. «Meter la pata» no tiene nada que ver con animales, ni «tomar el pelo» con el cabello. Precisamente por eso no admite cambios: quien dice «meter el pie» o «tomar los pelos» no suena creativo, sino extranjero. Las expresiones de esta página se entienden en todo el mundo hispánico.',
        },
        {
          id: 'esa10-p1-vocab',
          type: 'VOCAB_LIST',
          title: 'Frases hechas de uso general',
          items: [
            {
              term: 'meter la pata',
              translations: { en: 'to put one’s foot in it', de: 'ins Fettnäpfchen treten' },
              example: 'Metí la pata al preguntarle por su exmujer.',
            },
            { term: 'tomar el pelo a alguien', translations: { en: 'to pull someone’s leg', de: 'jemanden auf den Arm nehmen' } },
            { term: 'no tener pelos en la lengua', translations: { en: 'to be outspoken', de: 'kein Blatt vor den Mund nehmen' } },
            { term: 'dar en el clavo', translations: { en: 'to hit the nail on the head', de: 'den Nagel auf den Kopf treffen' } },
            { term: 'costar un ojo de la cara', translations: { en: 'to cost an arm and a leg', de: 'ein Vermögen kosten' } },
            { term: 'echar una mano', translations: { en: 'to lend a hand', de: 'mit anpacken, helfen' } },
            { term: 'ser pan comido', translations: { en: 'to be a piece of cake', de: 'ein Kinderspiel sein' } },
            { term: 'estar en las nubes', translations: { en: 'to have one’s head in the clouds', de: 'geistesabwesend sein' } },
            { term: 'hacer la vista gorda', translations: { en: 'to turn a blind eye', de: 'ein Auge zudrücken' } },
            { term: 'irse por las ramas', translations: { en: 'to beat about the bush', de: 'vom Thema abschweifen' } },
            { term: 'llover sobre mojado', translations: { en: 'to add insult to injury', de: 'noch dazukommen, ein Unglück kommt selten allein' } },
            { term: 'a regañadientes', translations: { en: 'reluctantly', de: 'widerwillig, zähneknirschend' } },
          ],
        },
        {
          id: 'esa10-p1-match',
          type: 'MATCHING',
          instruction: 'Relacione cada situación con la frase hecha que la describe.',
          left: [
            { id: 'a1', text: 'Le preguntas a alguien cuándo nace el bebé, y no está embarazada.' },
            { id: 'a2', text: 'El profesor sabe que copiaste, pero no dice nada.' },
            { id: 'a3', text: 'Te preguntan la hora y respondes hablando de tu infancia.' },
            { id: 'a4', text: 'El examen fue tan fácil que lo terminaste en diez minutos.' },
            { id: 'a5', text: 'Tu amiga dice exactamente lo que piensa, aunque moleste.' },
          ],
          right: [
            { id: 'b1', text: 'meter la pata' },
            { id: 'b2', text: 'hacer la vista gorda' },
            { id: 'b3', text: 'irse por las ramas' },
            { id: 'b4', text: 'ser pan comido' },
            { id: 'b5', text: 'no tener pelos en la lengua' },
          ],
          solution: [
            { leftId: 'a1', rightId: 'b1' },
            { leftId: 'a2', rightId: 'b2' },
            { leftId: 'a3', rightId: 'b3' },
            { leftId: 'a4', rightId: 'b4' },
            { leftId: 'a5', rightId: 'b5' },
          ],
        },
        {
          id: 'esa10-p1-info-fijacion',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Lo que se puede cambiar y lo que no',
          text: 'En una frase hecha el verbo se conjuga con normalidad y los pronombres se adaptan: «me tomó el pelo», «nos echaron una mano». Lo que no se cambia son los sustantivos, las preposiciones ni el número: no es «tomar los pelos», ni «dar al clavo», ni «costar un ojo en la cara». Tampoco se añaden adjetivos: «meter la pata grande» suena mal; para intensificar se dice «meter la pata hasta el fondo».',
          table: {
            headers: ['Correcto', 'Incorrecto'],
            rows: [
              ['Me tomaron el pelo.', 'Me tomaron los pelos.'],
              ['Diste en el clavo.', 'Diste al clavo.'],
              ['Costó un ojo de la cara.', 'Costó un ojo en la cara.'],
              ['Metí la pata hasta el fondo.', 'Metí la pata grande.'],
            ],
          },
        },
        {
          id: 'esa10-p1-cloze',
          type: 'CLOZE',
          instruction: 'Complete las frases hechas con la palabra exacta.',
          wordBank: ['pelo', 'clavo', 'ojo', 'mano', 'nubes'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'No te creas lo del premio, te está tomando el ' },
            { kind: 'GAP', gapId: 'g1', solution: ['pelo'], width: 5 },
            { kind: 'TEXT', text: '. Con ese diagnóstico, la doctora dio en el ' },
            { kind: 'GAP', gapId: 'g2', solution: ['clavo'], width: 6 },
            { kind: 'TEXT', text: '. El piso nuevo nos ha costado un ' },
            { kind: 'GAP', gapId: 'g3', solution: ['ojo'], width: 4 },
            { kind: 'TEXT', text: ' de la cara. ¿Me echas una ' },
            { kind: 'GAP', gapId: 'g4', solution: ['mano'], width: 5 },
            { kind: 'TEXT', text: ' con la mudanza? Perdona, no te he oído: estaba en las ' },
            { kind: 'GAP', gapId: 'g5', solution: ['nubes'], width: 6 },
            { kind: 'TEXT', text: '.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – Ironie und Untertreibung.
  {
    order: 2,
    title: 'Ironía y atenuación',
    subtitle: 'Das Gegenteil sagen, weniger sagen',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'esa10-p2-h1', type: 'HEADING', level: 1, text: 'Ironía y atenuación' },
        {
          id: 'esa10-p2-intro',
          type: 'TEXT',
          text: 'Llueve a cántaros, se ha perdido el autobús y alguien dice: «¡Qué día más estupendo!». Nadie lo interpreta literalmente. La ironía dice lo contrario de lo que quiere decir y confía en que el contexto lo deshaga. La atenuación, su pariente discreta, dice menos de lo que quiere decir: «no es precisamente barato» significa «es carísimo». Ambas son constantes en la conversación española, y entenderlas es imprescindible para no quedarse fuera.',
        },
        {
          id: 'esa10-p2-info-ironia',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Marcas de la ironía',
          text: 'La ironía se reconoce por el desajuste con la situación y, a menudo, por marcas lingüísticas: exclamativas exageradas («¡Qué bien!», «¡Genial!»), intensificadores fuera de lugar («menudo», «vaya»), diminutivos («¡qué detallito!») y fórmulas fijas («¡Lo que faltaba!», «¡Pues sí que estamos buenos!»). «Menudo» es especialmente útil: «¡Menudo día!» puede ser elogio o queja, y solo el contexto lo decide.',
          table: {
            headers: ['Expresión', 'Literal', 'Sentido irónico habitual'],
            rows: [
              ['¡Lo que faltaba!', 'era lo que faltaba', 'esto empeora aún más las cosas'],
              ['¡Qué detallito!', 'un pequeño detalle', 'un gesto mezquino'],
              ['¡Pues sí que estamos buenos!', 'estamos bien', 'estamos en un apuro'],
              ['¡Menudo favor me has hecho!', 'un gran favor', 'me has perjudicado'],
              ['Muy bonito, sí señor.', 'es bonito', 'lo que has hecho está mal'],
            ],
          },
        },
        {
          id: 'esa10-p2-choice',
          type: 'CHOICE',
          instruction: 'Elija la interpretación correcta.',
          question: 'Su compañero llega dos horas tarde a una reunión importante. La jefa le dice: «Muy puntual, como siempre». ¿Qué quiere decir?',
          options: [
            { id: 'c1', text: 'Le felicita por su puntualidad habitual.' },
            { id: 'c2', text: 'Le reprocha el retraso, y además sugiere que no es la primera vez.' },
            { id: 'c3', text: 'Le informa de que la reunión ha empezado a tiempo.' },
            { id: 'c4', text: 'Le pide que llegue aún antes la próxima vez.' },
          ],
          multiple: false,
          solution: ['c2'],
          explanation:
            'El elogio contradice la situación, y «como siempre» extiende el reproche a su comportamiento habitual. Es la estructura típica de la ironía: la frase literal es positiva y el contexto la invierte.',
        },
        {
          id: 'esa10-p2-info-litote',
          type: 'INFO',
          variant: 'TIP',
          title: 'La lítote: negar lo contrario',
          text: 'La lítote atenúa negando el contrario de lo que se quiere decir: «no está mal» (está bien), «no es tonto» (es listo), «no es precisamente barato» (es caro). Según la entonación y el contexto, puede ser modestia, cortesía o ironía. «No es precisamente» es la fórmula más productiva: permite criticar sin decir nada negativo.',
          table: {
            headers: ['Lítote', 'Significado'],
            rows: [
              ['No está nada mal.', 'Está muy bien.'],
              ['No es precisamente un genio.', 'Es bastante torpe.'],
              ['No me disgusta la idea.', 'Me gusta la idea.'],
              ['No anda muy sobrado de paciencia.', 'Tiene poca paciencia.'],
            ],
          },
        },
        {
          id: 'esa10-p2-match',
          type: 'MATCHING',
          instruction: 'Relacione cada atenuación con lo que realmente significa.',
          left: [
            { id: 'l1', text: 'El restaurante no es precisamente barato.' },
            { id: 'l2', text: 'Tu hermano no es ningún tonto.' },
            { id: 'l3', text: 'No me hace mucha gracia esa idea.' },
            { id: 'l4', text: 'La película no estuvo nada mal.' },
          ],
          right: [
            { id: 'm1', text: 'Es muy caro.' },
            { id: 'm2', text: 'Es muy listo.' },
            { id: 'm3', text: 'No me gusta nada.' },
            { id: 'm4', text: 'Me gustó mucho.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'm1' },
            { leftId: 'l2', rightId: 'm2' },
            { leftId: 'l3', rightId: 'm3' },
            { leftId: 'l4', rightId: 'm4' },
          ],
        },
        {
          id: 'esa10-p2-cloze',
          type: 'CLOZE',
          instruction: 'Complete con la expresión irónica o atenuada adecuada.',
          wordBank: ['Lo que faltaba', 'precisamente', 'Menudo', 'nada mal'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Se nos pincha una rueda en plena tormenta: «¡' },
            { kind: 'GAP', gapId: 'i1', solution: ['Lo que faltaba'], width: 15 },
            { kind: 'TEXT', text: '!». Un hotel de cuatrocientos euros la noche no es ' },
            { kind: 'GAP', gapId: 'i2', solution: ['precisamente'], width: 13 },
            { kind: 'TEXT', text: ' económico. «¡' },
            { kind: 'GAP', gapId: 'i3', solution: ['Menudo'], width: 7 },
            { kind: 'TEXT', text: ' viajecito!», dice mi padre al llegar. Aunque, visto ahora, el paisaje no estuvo ' },
            { kind: 'GAP', gapId: 'i4', solution: ['nada mal'], width: 9 },
            { kind: 'TEXT', text: '.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – Synonyme, die keine sind.
  {
    order: 3,
    title: 'Sinónimos que no lo son',
    subtitle: 'Nuancen zwischen verwandten Wörtern',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'esa10-p3-h1', type: 'HEADING', level: 1, text: 'Sinónimos que no lo son' },
        {
          id: 'esa10-p3-intro',
          type: 'TEXT',
          text: 'Los diccionarios de sinónimos engañan por omisión: agrupan palabras que comparten un núcleo de significado, pero no dicen en qué se distinguen. Y en el nivel más alto, eso es lo que importa. «Delgado», «flaco» y «esbelto» describen el mismo cuerpo; solo la tercera es un elogio seguro.',
        },
        {
          id: 'esa10-p3-info-connotacion',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Connotación: el mismo hecho, otra valoración',
          text: 'Muchas series de sinónimos se ordenan por la valoración que transmiten. La denotación —lo que designan— es la misma; la connotación —la actitud que expresan— cambia. Elegir mal no es un error gramatical, pero puede ser una ofensa.',
          table: {
            headers: ['Positivo', 'Neutro', 'Negativo'],
            rows: [
              ['esbelto', 'delgado', 'flaco, escuálido'],
              ['ahorrador', 'cuidadoso con el dinero', 'tacaño, agarrado'],
              ['decidido', 'firme', 'terco, cabezota'],
              ['sencillo', 'modesto', 'simplón'],
              ['curioso', 'interesado', 'cotilla (Esp.), chismoso'],
            ],
          },
        },
        {
          id: 'esa10-p3-info-pares',
          type: 'INFO',
          variant: 'TIP',
          title: 'Pares que se confunden',
          text: 'Otros pares no se distinguen por la valoración, sino por el matiz del significado. Varios se distinguen por la intención: «oír» y «ver» son percepciones que ocurren; «escuchar» y «mirar», acciones voluntarias. «Enterarse» es recibir una información; «darse cuenta», comprender algo por uno mismo.',
          table: {
            headers: ['Palabra', 'Matiz', 'Ejemplo'],
            rows: [
              ['oír / escuchar', 'percibir / prestar atención', 'Te oigo, pero no te escucho.'],
              ['ver / mirar', 'percibir / dirigir la vista', 'Miré por la ventana y no vi a nadie.'],
              ['enterarse / darse cuenta', 'recibir noticia / comprender', 'Me enteré por la radio; luego me di cuenta de la gravedad.'],
              ['recordar / acordarse de', 'traer a la memoria (transitivo) / (pronominal)', 'Recuerdo su cara. Me acuerdo de su cara.'],
              ['pedir / preguntar', 'solicitar algo / solicitar información', 'Le pedí ayuda y le pregunté la hora.'],
            ],
          },
        },
        {
          id: 'esa10-p3-choice',
          type: 'CHOICE',
          instruction: 'Elija la palabra adecuada al contexto.',
          question: 'En una carta de recomendación para un antiguo empleado, ¿cómo describiría a alguien que defiende sus ideas con insistencia?',
          options: [
            { id: 'q1', text: 'Es una persona terca.' },
            { id: 'q2', text: 'Es un cabezota.' },
            { id: 'q3', text: 'Es una persona decidida y perseverante.' },
            { id: 'q4', text: 'Es un tozudo de cuidado.' },
          ],
          multiple: false,
          solution: ['q3'],
          explanation:
            'Las cuatro opciones describen el mismo rasgo, pero solo la tercera lo valora de forma positiva. En una carta de recomendación, «terco» o «cabezota» serían una crítica, además de coloquiales.',
        },
        {
          id: 'esa10-p3-cloze',
          type: 'CLOZE',
          instruction: 'Complete con la palabra del par adecuada.',
          wordBank: ['escuchar', 'Me enteré', 'me di cuenta', 'mirar', 'preguntar'],
          caseSensitive: false,
          segments: [
            { kind: 'GAP', gapId: 's1', solution: ['Me enteré', 'Me entere'], width: 10 },
            { kind: 'TEXT', text: ' de la noticia por un vecino, pero hasta la noche no ' },
            { kind: 'GAP', gapId: 's2', solution: ['me di cuenta'], width: 13 },
            { kind: 'TEXT', text: ' de lo que significaba. Me quedé un rato sin ' },
            { kind: 'GAP', gapId: 's3', solution: ['mirar'], width: 6 },
            { kind: 'TEXT', text: ' a nadie, sin ' },
            { kind: 'GAP', gapId: 's4', solution: ['escuchar'], width: 9 },
            { kind: 'TEXT', text: ' lo que me decían, sin atreverme a ' },
            { kind: 'GAP', gapId: 's5', solution: ['preguntar'], width: 10 },
            { kind: 'TEXT', text: ' nada.' },
          ],
        },
        {
          id: 'esa10-p3-match',
          type: 'MATCHING',
          instruction: 'Relacione cada palabra negativa con su equivalente positivo.',
          left: [
            { id: 't1', text: 'tacaño' },
            { id: 't2', text: 'terco' },
            { id: 't3', text: 'flaco' },
            { id: 't4', text: 'chismoso' },
          ],
          right: [
            { id: 'u1', text: 'ahorrador' },
            { id: 'u2', text: 'perseverante' },
            { id: 'u3', text: 'esbelto' },
            { id: 'u4', text: 'curioso' },
          ],
          solution: [
            { leftId: 't1', rightId: 'u1' },
            { leftId: 't2', rightId: 'u2' },
            { leftId: 't3', rightId: 'u3' },
            { leftId: 't4', rightId: 'u4' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – Sprichwörter und regionale Idiomatik.
  {
    order: 4,
    title: 'Refranes y geografía',
    subtitle: 'Sprichwörter und regionale Wendungen',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'esa10-p4-h1', type: 'HEADING', level: 1, text: 'Refranes y geografía' },
        {
          id: 'esa10-p4-intro',
          type: 'TEXT',
          text: 'El refranero español es enorme, y buena parte de él sigue vivo. Pero en la conversación actual los refranes rara vez se citan enteros: basta con la primera mitad para que el otro complete la segunda. «Dime con quién andas…» y el interlocutor ya ha entendido. Citarlos enteros, y con frecuencia, suena anticuado o sentencioso.',
        },
        {
          id: 'esa10-p4-info-refranes',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'Refranes vivos',
          text: 'Estos refranes se oyen en todos los países hispanohablantes, a veces con pequeñas variantes. Fíjese en su estructura bimembre, a menudo con rima: es lo que los hace memorables y lo que permite cortarlos por la mitad.',
          table: {
            headers: ['Refrán', 'Sentido'],
            rows: [
              ['Dime con quién andas y te diré quién eres.', 'Las compañías revelan cómo es alguien.'],
              ['No hay mal que por bien no venga.', 'De una desgracia puede salir algo bueno.'],
              ['A quien madruga, Dios le ayuda.', 'El esfuerzo temprano tiene recompensa.'],
              ['Más vale pájaro en mano que ciento volando.', 'Mejor algo seguro que mucho incierto.'],
              ['Camarón que se duerme se lo lleva la corriente.', 'Quien se descuida pierde su oportunidad.'],
              ['En casa de herrero, cuchillo de palo.', 'Falta algo justo donde debería abundar.'],
            ],
          },
        },
        {
          id: 'esa10-p4-match',
          type: 'MATCHING',
          instruction: 'Relacione cada situación con el refrán que la comenta.',
          left: [
            { id: 'r1', text: 'El hijo del dentista tiene todos los dientes picados.' },
            { id: 'r2', text: 'Perdió el trabajo y, gracias a eso, fundó su propia empresa.' },
            { id: 'r3', text: 'Rechazó una oferta segura esperando otra mejor que nunca llegó.' },
            { id: 'r4', text: 'Se distrajo un momento y otro se quedó con el último billete.' },
          ],
          right: [
            { id: 's1', text: 'En casa de herrero, cuchillo de palo.' },
            { id: 's2', text: 'No hay mal que por bien no venga.' },
            { id: 's3', text: 'Más vale pájaro en mano que ciento volando.' },
            { id: 's4', text: 'Camarón que se duerme se lo lleva la corriente.' },
          ],
          solution: [
            { leftId: 'r1', rightId: 's1' },
            { leftId: 'r2', rightId: 's2' },
            { leftId: 'r3', rightId: 's3' },
            { leftId: 'r4', rightId: 's4' },
          ],
        },
        {
          id: 'esa10-p4-info-regional',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Una misma idea, muchas geografías',
          text: 'La idiomática coloquial es la parte más regional de la lengua. Para expresar entusiasmo, un madrileño dice «¡qué guay!», un mexicano «¡qué padre!», un colombiano o venezolano «¡qué chévere!», un chileno o peruano «¡qué bacán!» y un argentino «¡qué copado!». Todas se entienden fuera de su zona, pero usarlas en la zona equivocada marca de inmediato. Lo mismo ocurre con el dinero, el trabajo o el aburrimiento.',
          table: {
            headers: ['Idea', 'España', 'México', 'Río de la Plata', 'Caribe / Andes'],
            rows: [
              ['¡genial!', '¡qué guay!', '¡qué padre!', '¡qué copado!', '¡qué chévere! / ¡qué bacán!'],
              ['dinero', 'la pasta', 'la lana', 'la guita', 'la plata'],
              ['trabajo', 'el curro', 'la chamba', 'el laburo', 'la chamba (Perú)'],
              ['amigo', 'tío, colega', 'güey, cuate', 'che, boludo (entre íntimos)', 'pana (Ven.), parcero (Col.)'],
            ],
          },
        },
        {
          id: 'esa10-p4-choice',
          type: 'CHOICE',
          instruction: 'Elija la respuesta correcta.',
          question: 'Un amigo de Ciudad de México le cuenta que ha conseguido un nuevo empleo con buen sueldo. ¿Qué respuesta sonaría más natural en su variedad?',
          options: [
            { id: 'w1', text: '¡Qué guay, tío! Ya tienes curro y pasta.' },
            { id: 'w2', text: '¡Qué padre, güey! Ya tienes chamba y lana.' },
            { id: 'w3', text: '¡Qué copado, che! Ya tenés laburo y guita.' },
            { id: 'w4', text: '¡Qué chévere, pana! Ya tienes trabajo y plata.' },
          ],
          multiple: false,
          solution: ['w2'],
          explanation:
            'La segunda respuesta usa la idiomática mexicana de principio a fin. Las otras son coherentes, pero corresponden a España, al Río de la Plata y a Venezuela. Todas se entenderían; solo una sonaría local.',
        },
        {
          id: 'esa10-p4-cloze',
          type: 'CLOZE',
          instruction: 'Complete la segunda mitad de cada refrán.',
          wordBank: ['quién eres', 'bien no venga', 'Dios le ayuda', 'cuchillo de palo'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Dime con quién andas y te diré ' },
            { kind: 'GAP', gapId: 'x1', solution: ['quién eres', 'quien eres'], width: 11 },
            { kind: 'TEXT', text: '. No hay mal que por ' },
            { kind: 'GAP', gapId: 'x2', solution: ['bien no venga'], width: 14 },
            { kind: 'TEXT', text: '. A quien madruga, ' },
            { kind: 'GAP', gapId: 'x3', solution: ['Dios le ayuda'], width: 14 },
            { kind: 'TEXT', text: '. En casa de herrero, ' },
            { kind: 'GAP', gapId: 'x4', solution: ['cuchillo de palo'], width: 17 },
            { kind: 'TEXT', text: '.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – wann Idiomatik passt; Wiederholung.
  {
    order: 5,
    title: 'Cuándo sí y cuándo no',
    subtitle: 'Idiomatik mit Gespür einsetzen',
    estimatedMinutes: 32,
    content: {
      version: v,
      blocks: [
        { id: 'esa10-p5-h1', type: 'HEADING', level: 1, text: 'Cuándo sí y cuándo no' },
        {
          id: 'esa10-p5-intro',
          type: 'TEXT',
          text: 'Existe un error típico del aprendiz avanzado que acaba de descubrir la idiomática: usarla en exceso. Tres frases hechas en un párrafo no suenan a nativo, sino a alguien que quiere demostrar que las conoce. Los hablantes nativos recurren a ellas con naturalidad, de vez en cuando, y casi nunca en textos formales. El dominio de una expresión incluye saber cuándo no usarla.',
        },
        {
          id: 'esa10-p5-info-criterios',
          type: 'INFO',
          variant: 'TIP',
          title: 'Cuatro preguntas antes de usar una frase hecha',
          text: 'Antes de lanzarse, conviene preguntarse por el registro (¿es un texto formal?), por la geografía (¿se usa donde estoy?), por la dosis (¿he usado ya otra en este párrafo?) y por la exactitud (¿la sé entera y sin cambios?). Si alguna respuesta es dudosa, la versión literal casi siempre es la opción segura.',
          table: {
            headers: ['Pregunta', 'Si la respuesta es dudosa…'],
            rows: [
              ['¿Encaja con el registro?', 'use la expresión literal'],
              ['¿Se usa en esta región?', 'elija una de uso general'],
              ['¿Es la única del párrafo?', 'quite alguna'],
              ['¿La sé exactamente?', 'no la improvise'],
            ],
          },
        },
        {
          id: 'esa10-p5-choice',
          type: 'CHOICE',
          instruction: 'Elija la versión más natural.',
          question: 'Escribe a un colega de trabajo para agradecerle su ayuda en un proyecto. ¿Qué versión suena más natural?',
          options: [
            {
              id: 'y1',
              text: 'Me echaste una mano cuando estaba con el agua al cuello, diste en el clavo con el presupuesto y, como quien no quiere la cosa, lo bordaste.',
            },
            { id: 'y2', text: 'Muchas gracias por echarme una mano con el presupuesto. Tu propuesta dio justo en el clavo.' },
            { id: 'y3', text: 'Le expreso mi más profundo agradecimiento por la asistencia prestada.' },
            { id: 'y4', text: 'Gracias por tomarme el pelo con el presupuesto.' },
          ],
          multiple: false,
          solution: ['y2'],
          explanation:
            'La segunda versión usa dos expresiones de uso general, bien integradas y sin acumulación. La primera encadena cuatro y suena forzada; la tercera es innecesariamente solemne; la cuarta usa «tomar el pelo» con un sentido que no tiene.',
        },
        {
          id: 'esa10-p5-cloze',
          type: 'CLOZE',
          instruction: 'Complete el resumen del capítulo.',
          wordBank: ['fija', 'ironía', 'lítote', 'connotación', 'regional', 'dosis'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Una frase hecha tiene una forma ' },
            { kind: 'GAP', gapId: 'z1', solution: ['fija'], width: 5 },
            { kind: 'TEXT', text: ': el verbo se conjuga, pero los sustantivos no cambian. La ' },
            { kind: 'GAP', gapId: 'z2', solution: ['ironía', 'ironia'], width: 7 },
            { kind: 'TEXT', text: ' dice lo contrario de lo que quiere decir; la ' },
            { kind: 'GAP', gapId: 'z3', solution: ['lítote', 'litote'], width: 7 },
            { kind: 'TEXT', text: ' niega lo contrario. «Tacaño» y «ahorrador» se distinguen por su ' },
            { kind: 'GAP', gapId: 'z4', solution: ['connotación', 'connotacion'], width: 12 },
            { kind: 'TEXT', text: '. La idiomática coloquial es muy ' },
            { kind: 'GAP', gapId: 'z5', solution: ['regional'], width: 9 },
            { kind: 'TEXT', text: '. Y con las frases hechas, como con la sal, lo importante es la ' },
            { kind: 'GAP', gapId: 'z6', solution: ['dosis'], width: 6 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'esa10-p5-writing',
          type: 'WRITING',
          instruction: 'Escriba un relato breve.',
          prompt:
            'Escriba un mensaje largo a un amigo (entre 180 y 250 palabras) en el que le cuente un día en el que todo salió mal. Use con naturalidad al menos tres frases hechas del capítulo, un refrán (entero o cortado), una expresión irónica y una lítote. Elija una variedad regional y manténgala de forma coherente, o use solo expresiones de uso general.',
          minWords: 180,
          maxWords: 260,
          aiFeedback: true,
          sampleAnswer:
            '¡Hola, Javi!\n\nTe tengo que contar el día de ayer, porque no te lo vas a creer. Empieza con que se me olvidó poner el despertador. A quien madruga, Dios le ayuda, dicen; pues a quien se duerme, ni Dios ni nadie. Llegué a la oficina a las diez, justo cuando empezaba la reunión con el cliente nuevo.\n\nY ahí metí la pata hasta el fondo. Me presentaron a un señor mayor y, como estaba en las nubes, le pregunté si era el padre de la directora. Era su marido. ¡Qué buen comienzo!, pensé. La directora no dijo nada, pero su cara no era precisamente de alegría.\n\nPara que lloviera sobre mojado, al salir descubrí que me habían puesto una multa por aparcar en zona de carga. Setenta euros. Muy bonito todo, sí señor.\n\nLo único bueno fue la tarde. Mi hermana vino a echarme una mano con la mudanza y, entre caja y caja, acabamos riéndonos de todo. Hasta me dijo que la metedura de pata con el cliente no estuvo nada mal como anécdota para la cena de Navidad.\n\nAsí que ya ves: no hay mal que por bien no venga. Al menos tengo historia para contarte.\n\nUn abrazo,\nLucía',
        },
      ],
    },
  },
];
