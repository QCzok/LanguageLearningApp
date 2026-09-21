import type { UnitSeed } from './chapter-beginner-1';

/**
 * Spanisch, Intermediate, Kapitel 5: „Ciudad y medio ambiente“ (B1, Kapitel 5)
 *
 * Fünf Seiten. Ein Problem beschreiben, Ursachen und Folgen verknüpfen,
 * Vorschläge machen und Forderungen stellen.
 *
 * Aufbau: Seite 1 der Wortschatz von Stadt und Umwelt, Seite 2 die
 * Verknüpfung von Ursache und Folge (die Konnektoren, die in Kapitel 7 zur
 * vollen Argumentation ausgebaut werden), Seite 3 der Vorschlag – hier kommt
 * der Subjuntivo aus Kapitel 2 als Werkzeug zurück –, Seite 4 die Forderung
 * und das Beschwerdeschreiben, Seite 5 die eigene Verantwortung, mit der
 * Unterscheidung zwischen dem, was Einzelne tun, und dem, was entschieden
 * werden muss.
 *
 * Zum Ton: Das Kapitel behandelt Umwelt als Sachfrage mit realen
 * Zielkonflikten und nicht als moralische Prüfung. Seite 5 sagt ausdrücklich,
 * dass individuelle Maßnahmen und politische Entscheidungen verschiedene
 * Größenordnungen haben – das ist eine sachliche Feststellung und keine
 * Aufforderung, das eine oder das andere zu lassen.
 *
 * Die Seiten stehen einsprachig spanisch; die Wortschatzlisten führen
 * deutsche und englische Entsprechungen. Städte, Zahlen und Vorfälle sind
 * erfunden.
 *
 * Sämtliche Texte sind eigenständig verfasst.
 */
const v = 1;

export const SPANISH_INTERMEDIATE_5_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – das Problem benennen.
  {
    order: 1,
    title: 'Aquí hay un problema',
    subtitle: 'Describir lo que no funciona',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'esi5-p1-h1', type: 'HEADING', level: 1, text: 'Aquí hay un problema' },
        {
          id: 'esi5-p1-image',
          type: 'IMAGE',
          url: 'illustration:city-street',
          alt: 'Una calle de ciudad con tráfico, aceras estrechas y edificios a ambos lados.',
          caption: 'Una calle cualquiera, con sus problemas de siempre.',
        },
        {
          id: 'esi5-p1-intro',
          type: 'TEXT',
          text: 'Para que un problema se pueda discutir hay que saber nombrarlo. «La calle está fatal» no lleva a ninguna parte; «las aceras miden ochenta centímetros y hay dos contenedores en medio» sí, porque ya contiene lo que habría que cambiar. Esta página da las palabras para pasar de lo primero a lo segundo.',
        },
        {
          id: 'esi5-p1-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: la ciudad y el medio ambiente',
          items: [
            {
              term: 'la acera',
              translations: { en: 'pavement, sidewalk', de: 'der Gehweg' },
            },
            {
              term: 'el carril bici',
              translations: { en: 'bike lane', de: 'der Radweg' },
            },
            {
              term: 'el contenedor',
              translations: { en: 'waste container', de: 'der Container' },
            },
            {
              term: 'los residuos',
              translations: { en: 'waste', de: 'der Abfall' },
              example: 'la recogida de residuos',
            },
            {
              term: 'la basura',
              translations: { en: 'rubbish', de: 'der Müll' },
            },
            {
              term: 'reciclar',
              translations: { en: 'to recycle', de: 'recyceln' },
            },
            {
              term: 'la contaminación',
              translations: { en: 'pollution', de: 'die Verschmutzung' },
              example: 'la contaminación del aire',
            },
            {
              term: 'el ruido',
              translations: { en: 'noise', de: 'der Lärm' },
            },
            {
              term: 'la calidad del aire',
              translations: { en: 'air quality', de: 'die Luftqualität' },
            },
            {
              term: 'el atasco',
              translations: { en: 'traffic jam', de: 'der Stau' },
            },
            {
              term: 'la zona peatonal',
              translations: { en: 'pedestrian zone', de: 'die Fußgängerzone' },
            },
            {
              term: 'la zona verde',
              translations: { en: 'green space', de: 'die Grünfläche' },
            },
            {
              term: 'el ayuntamiento',
              translations: { en: 'town council', de: 'die Stadtverwaltung' },
            },
            {
              term: 'el vecindario',
              translations: { en: 'neighbourhood', de: 'die Nachbarschaft' },
            },
            {
              term: 'quejarse (de)',
              translations: { en: 'to complain (about)', de: 'sich beschweren' },
              example: 'Los vecinos se quejan del ruido.',
            },
          ],
        },
        {
          id: 'esi5-p1-info-describir',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Cómo se describe un problema',
          text: 'Cuatro elementos y el problema queda descrito: qué pasa, dónde, desde cuándo y a quién afecta. El tercero se dice casi siempre con «desde hace» o con «llevar», que vuelve del capítulo 1.',
          table: {
            headers: ['Elemento', 'Fórmulas'],
            rows: [
              ['qué pasa', 'hay demasiado…, falta…, no funciona…'],
              ['dónde', 'en la calle…, a la altura del número…'],
              ['desde cuándo', 'desde hace tres meses, llevamos un año con…'],
              ['a quién afecta', 'sobre todo a…, los más perjudicados son…'],
              ['con qué frecuencia', 'todas las noches, cada vez que llueve'],
            ],
          },
        },
        {
          id: 'esi5-p1-choice-concreto',
          type: 'CHOICE',
          instruction: 'Elija la descripción más útil para una queja.',
          options: [
            { id: 'a1', text: 'El barrio está abandonado y a nadie le importa.' },
            {
              id: 'a2',
              text: 'Desde hace tres meses no se recoge el contenedor de la calle Olivo los fines de semana, y el lunes la basura llega hasta la acera.',
            },
            { id: 'a3', text: 'Hay mucha suciedad por todas partes últimamente.' },
            { id: 'a4', text: 'Esto es una vergüenza y alguien tendría que hacer algo.' },
          ],
          multiple: false,
          solution: ['a2'],
          explanation:
            'a2 dice qué, dónde, desde cuándo y con qué frecuencia, de modo que quien la lea sabe exactamente qué tiene que arreglar. Las otras tres expresan enfado sin dar ningún dato con el que se pueda actuar.',
        },
        {
          id: 'esi5-p1-cloze',
          type: 'CLOZE',
          instruction: 'Complete la descripción del problema.',
          wordBank: ['desde hace', 'falta', 'ruido', 'afecta', 'llevamos'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'En la plaza del Mercado ' },
            { kind: 'GAP', gapId: 'c1', solution: ['falta'], width: 7 },
            { kind: 'TEXT', text: ' alumbrado: cuatro farolas están apagadas ' },
            { kind: 'GAP', gapId: 'c2', solution: ['desde hace'], width: 11 },
            { kind: 'TEXT', text: ' dos meses. Además, ' },
            { kind: 'GAP', gapId: 'c3', solution: ['llevamos'], width: 9 },
            { kind: 'TEXT', text: ' todo el verano con el ' },
            { kind: 'GAP', gapId: 'c4', solution: ['ruido'], width: 7 },
            { kind: 'TEXT', text: ' de las terrazas hasta las dos de la madrugada. Esto ' },
            { kind: 'GAP', gapId: 'c5', solution: ['afecta'], width: 8 },
            { kind: 'TEXT', text: ' sobre todo a los pisos bajos.' },
          ],
        },
        {
          id: 'esi5-p1-match-problemas',
          type: 'MATCHING',
          instruction: 'Relacione cada problema con su consecuencia más directa.',
          left: [
            { id: 'l1', text: 'Aceras de ochenta centímetros' },
            { id: 'l2', text: 'Contenedores sin recoger el fin de semana' },
            { id: 'l3', text: 'Ninguna zona verde en el barrio' },
            { id: 'l4', text: 'Tráfico de paso por una calle estrecha' },
          ],
          right: [
            { id: 'r1', text: 'Una silla de ruedas o un carrito no pueden pasar.' },
            { id: 'r2', text: 'El lunes la basura está fuera y huele.' },
            { id: 'r3', text: 'Los niños juegan en el aparcamiento.' },
            { id: 'r4', text: 'Ruido constante y mala calidad del aire.' },
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
  // Seite 2 – Ursache und Folge verknüpfen.
  {
    order: 2,
    title: 'Causas y consecuencias',
    subtitle: 'Por qué pasa y qué provoca',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'esi5-p2-h1', type: 'HEADING', level: 1, text: 'Causas y consecuencias' },
        {
          id: 'esi5-p2-intro',
          type: 'TEXT',
          text: 'Casi ningún problema urbano tiene una sola causa, y ahí está la dificultad. Si el aire del centro está mal, no basta con decir «por los coches»: hay que poder encadenar una cosa con otra, porque solo así se ve dónde se puede intervenir. El español tiene para esto un juego de conectores bastante fino.',
        },
        {
          id: 'esi5-p2-info-conectores',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Los conectores de causa y consecuencia',
          text: 'Dos advertencias prácticas. «Como» solo va al principio de la frase; «porque» solo en medio. Y «debido a» es una preposición: le sigue un sustantivo, no un verbo conjugado.',
          table: {
            headers: ['Función', 'Conector', 'Ejemplo'],
            rows: [
              ['causa, al principio', 'como', 'Como no hay aparcamiento, se aparca en doble fila.'],
              ['causa, en medio', 'porque, ya que', 'Se aparca mal porque no hay sitio.'],
              ['causa formal', 'debido a + sustantivo', 'Debido al tráfico, el aire empeora.'],
              ['consecuencia', 'por eso, así que', 'No hay sitio, así que aparcan en la acera.'],
              [
                'consecuencia formal',
                'por lo tanto, de modo que',
                'Por lo tanto, el peatón pierde espacio.',
              ],
              ['finalidad', 'para + infinitivo', 'Se cortó la calle para reducir el ruido.'],
            ],
          },
        },
        {
          id: 'esi5-p2-choice-como',
          type: 'CHOICE',
          instruction: 'Marque todas las frases correctas.',
          options: [
            { id: 'b1', text: 'Como llueve mucho, la parada se inunda.' },
            { id: 'b2', text: 'La parada se inunda como llueve mucho.' },
            { id: 'b3', text: 'La parada se inunda porque llueve mucho.' },
            { id: 'b4', text: 'Debido a que llueve mucho, la parada se inunda.' },
          ],
          multiple: true,
          solution: ['b1', 'b3', 'b4'],
          explanation:
            '«Como» abre la frase y «porque» va dentro; b2 los intercambia. «Debido a que» es correcto con verbo, aunque suena formal; con sustantivo sería «debido a las lluvias».',
        },
        {
          id: 'esi5-p2-texto-cadena',
          type: 'TEXT',
          text: 'Lea esta cadena y fíjese en que cada eslabón es a la vez consecuencia del anterior y causa del siguiente: «Como el autobús solo pasa cada cuarenta minutos, mucha gente del barrio va en coche al centro. Eso provoca atascos en las dos calles de salida, de modo que el trayecto se alarga y todavía más vecinos deciden coger el coche para no depender del horario. El resultado es que la línea pierde viajeros cada año, y por eso el ayuntamiento se plantea reducir frecuencias, lo que agravaría el problema desde el principio».',
        },
        {
          id: 'esi5-p2-cloze',
          type: 'CLOZE',
          instruction: 'Complete la cadena con los conectores del recuadro.',
          wordBank: ['Como', 'por eso', 'debido a', 'de modo que', 'para'],
          caseSensitive: false,
          segments: [
            { kind: 'GAP', gapId: 'c1', solution: ['Como'], width: 6 },
            {
              kind: 'TEXT',
              text: ' el barrio no tiene ninguna zona verde, los niños juegan en la calle. Los coches pasan rápido, ',
            },
            { kind: 'GAP', gapId: 'c2', solution: ['de modo que'], width: 12 },
            { kind: 'TEXT', text: ' los padres no les dejan salir solos. ' },
            { kind: 'GAP', gapId: 'c3', solution: ['Debido a'], width: 10 },
            {
              kind: 'TEXT',
              text: ' esa situación, la asociación de vecinos ha pedido una plaza peatonal. ',
            },
            { kind: 'GAP', gapId: 'c4', solution: ['por eso'], width: 8 },
            {
              kind: 'TEXT',
              text: ' se han recogido ochocientas firmas, que se entregarán el lunes ',
            },
            { kind: 'GAP', gapId: 'c5', solution: ['para'], width: 6 },
            { kind: 'TEXT', text: ' llevar el asunto al pleno.' },
          ],
        },
        {
          id: 'esi5-p2-ordering',
          type: 'ORDERING',
          instruction: 'Ordene la cadena de causas y consecuencias.',
          items: [
            { id: 'o1', text: 'El mercado del barrio cerró hace dos años.' },
            {
              id: 'o2',
              text: 'Como no quedó ninguna tienda de alimentación, hay que ir al supermercado del polígono.',
            },
            {
              id: 'o3',
              text: 'Allí solo se llega en coche, de modo que quien no tiene depende de un vecino.',
            },
            { id: 'o4', text: 'Por eso la gente mayor hace la compra una vez cada quince días.' },
            { id: 'o5', text: 'El resultado es que compran sobre todo conservas y congelados.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5'],
        },
        {
          id: 'esi5-p2-info-verbos',
          type: 'INFO',
          variant: 'TIP',
          title: 'Verbos que también encadenan',
          text: 'Además de los conectores hay verbos que llevan la causa dentro. Usarlos evita repetir «porque» seis veces en un párrafo.',
          table: {
            headers: ['Verbo', 'Ejemplo'],
            rows: [
              ['provocar', 'El tráfico provoca ruido constante.'],
              ['deberse a', 'El atasco se debe a unas obras.'],
              ['dar lugar a', 'La falta de sitio da lugar a conflictos.'],
              ['empeorar / agravar', 'La reducción de frecuencias agravaría el problema.'],
              ['depender de', 'Todo depende del presupuesto.'],
            ],
          },
        },
        {
          id: 'esi5-p2-writing',
          type: 'WRITING',
          instruction: 'Explique un problema con sus causas.',
          prompt:
            'Elija un problema real de su ciudad o su barrio y explíquelo en 80 a 130 palabras: qué pasa, por qué pasa y qué consecuencias tiene. Use al menos cuatro conectores distintos de causa o consecuencia (incluido uno al principio de frase con «como») y dos verbos del recuadro. Todavía no proponga soluciones: eso es la página siguiente.',
          minWords: 80,
          maxWords: 140,
          aiFeedback: true,
          sampleAnswer:
            'En mi barrio el problema más serio es el aparcamiento en las aceras. Como se construyeron los edificios cuando casi nadie tenía coche, hay unas cuatrocientas viviendas y ciento veinte plazas de garaje.\n\nLa consecuencia es que la gente aparca donde puede, sobre todo en las esquinas y encima de las aceras. Eso provoca dos problemas distintos. El primero es que quien va con un carrito o en silla de ruedas tiene que bajar a la calzada, de modo que el más vulnerable acaba caminando entre los coches. El segundo es de visibilidad: los coches de las esquinas tapan los pasos de peatones, y por eso ha habido ya dos atropellos leves este año.',
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – Vorschläge machen.
  {
    order: 3,
    title: 'Proponer soluciones',
    subtitle: 'Yo propongo que…',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'esi5-p3-h1', type: 'HEADING', level: 1, text: 'Proponer soluciones' },
        {
          id: 'esi5-p3-intro',
          type: 'TEXT',
          text: 'Una propuesta es más difícil que una queja, porque obliga a decir quién hace qué. Y gramaticalmente pide el subjuntivo del capítulo 2, que aquí encuentra por fin su uso más práctico: casi todos los verbos de propuesta lo llevan detrás.',
        },
        {
          id: 'esi5-p3-info-proponer',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Las fórmulas de propuesta',
          text: 'Fíjese en la diferencia de fuerza. «¿Y si…?» propone sin comprometerse; «propongo que» pone la propuesta a nombre de uno; «habría que» dice lo que conviene sin decir quién lo hace, que es cómodo y a veces demasiado cómodo.',
          table: {
            headers: ['Fórmula', 'Modo', 'Ejemplo'],
            rows: [
              ['¿Y si + presente?', 'indicativo', '¿Y si pedimos una reunión?'],
              ['propongo que', 'subjuntivo', 'Propongo que pidamos una reunión.'],
              ['es importante que', 'subjuntivo', 'Es importante que vengan los técnicos.'],
              ['habría que', 'infinitivo', 'Habría que pintar los pasos de peatones.'],
              ['se podría', 'infinitivo', 'Se podría ampliar la acera un metro.'],
              ['lo mejor sería', 'infinitivo', 'Lo mejor sería empezar por la esquina.'],
            ],
          },
        },
        {
          id: 'esi5-p3-choice-modo',
          type: 'CHOICE',
          instruction: 'Elija la frase correcta.',
          options: [
            { id: 'c1', text: 'Propongo que el ayuntamiento amplía la acera.' },
            { id: 'c2', text: 'Propongo que el ayuntamiento amplíe la acera.' },
            { id: 'c3', text: 'Es importante que el ayuntamiento amplía la acera.' },
            { id: 'c4', text: 'Habría que que el ayuntamiento amplíe la acera.' },
          ],
          multiple: false,
          solution: ['c2'],
          explanation:
            '«Proponer que» y «es importante que» piden subjuntivo, así que c1 y c3 fallan. «Habría que» va directamente con infinitivo y no admite «que»: «habría que ampliar la acera».',
        },
        {
          id: 'esi5-p3-dialogo',
          type: 'DIALOGUE',
          title: 'Reunión de la asociación de vecinos',
          audioUrl: 'placeholder://es-b1-propuestas',
          lines: [
            {
              speaker: 'Presidenta',
              text: 'Tenemos veinte minutos y tres problemas. Empecemos por el aparcamiento en las aceras. ¿Ideas?',
            },
            {
              speaker: 'Tomás',
              text: 'Habría que poner bolardos en las esquinas. Es lo único que funciona.',
            },
            {
              speaker: 'Amparo',
              text: 'Ya, pero eso cuesta dinero y tarda. ¿Y si pedimos primero que pinten los pasos de peatones? Eso lo pueden hacer en una semana.',
            },
            {
              speaker: 'Tomás',
              text: 'Hombre, pintar sin más no arregla nada.',
            },
            {
              speaker: 'Amparo',
              text: 'Arregla la visibilidad, que es por donde han sido los dos sustos. Y propongo que pidamos las dos cosas a la vez: la pintura para ya y los bolardos para el presupuesto del año que viene.',
            },
            {
              speaker: 'Presidenta',
              text: 'Eso me parece más realista. ¿Quién se encarga de redactar el escrito?',
            },
            {
              speaker: 'Amparo',
              text: 'Lo hago yo, pero es importante que lo firme todo el mundo antes del viernes.',
            },
          ],
        },
        {
          id: 'esi5-p3-cloze',
          type: 'CLOZE',
          instruction: 'Complete las propuestas con la forma correcta.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Propongo que ' },
            { kind: 'GAP', gapId: 'c1', solution: ['pidamos'], hint: 'pedir, nosotros', width: 9 },
            { kind: 'TEXT', text: ' una reunión con el concejal. Es importante que ' },
            {
              kind: 'GAP',
              gapId: 'c2',
              solution: ['vengan'],
              hint: 'venir, los técnicos',
              width: 9,
            },
            { kind: 'TEXT', text: ' también los técnicos. Habría que ' },
            {
              kind: 'GAP',
              gapId: 'c3',
              solution: ['preparar'],
              hint: 'preparar, infinitivo',
              width: 9,
            },
            { kind: 'TEXT', text: ' las fotos antes. ¿Y si ' },
            {
              kind: 'GAP',
              gapId: 'c4',
              solution: ['hacemos'],
              hint: 'hacer, nosotros, indicativo',
              width: 9,
            },
            { kind: 'TEXT', text: ' un pequeño dosier? Lo mejor sería ' },
            {
              kind: 'GAP',
              gapId: 'c5',
              solution: ['empezar'],
              hint: 'empezar, infinitivo',
              width: 9,
            },
            { kind: 'TEXT', text: ' por lo más barato.' },
          ],
        },
        {
          id: 'esi5-p3-info-realista',
          type: 'INFO',
          variant: 'TIP',
          title: 'Una propuesta que se pueda aceptar',
          text: 'Amparo gana la discusión del diálogo porque su propuesta cumple cuatro condiciones. Compruébelas antes de proponer nada por escrito.',
          table: {
            headers: ['Condición', 'En el diálogo'],
            rows: [
              ['dice quién lo hace', 'el ayuntamiento pinta; ella redacta'],
              ['dice cuándo', 'la pintura ya, los bolardos el año que viene'],
              ['empieza por lo barato', 'pintar antes que instalar bolardos'],
              ['recoge la idea del otro', 'no descarta los bolardos de Tomás'],
            ],
          },
        },
        {
          id: 'esi5-p3-match-propuestas',
          type: 'MATCHING',
          instruction: 'Relacione cada problema con una propuesta realista.',
          left: [
            { id: 'p1', text: 'Los contenedores no se recogen el fin de semana.' },
            { id: 'p2', text: 'No hay ninguna zona verde en el barrio.' },
            { id: 'p3', text: 'El autobús pasa cada cuarenta minutos.' },
            { id: 'p4', text: 'Las terrazas hacen ruido hasta las dos.' },
          ],
          right: [
            { id: 'q1', text: 'Propongo que pidamos una recogida más los sábados por la tarde.' },
            { id: 'q2', text: 'Se podría abrir el patio del colegio fuera del horario escolar.' },
            { id: 'q3', text: 'Habría que reforzar la línea en las horas de entrada y salida.' },
            { id: 'q4', text: 'Es importante que se revise el horario de cierre este verano.' },
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
  // Seite 4 – die Forderung und das Beschwerdeschreiben.
  {
    order: 4,
    title: 'Escribir al ayuntamiento',
    subtitle: 'De la queja a la reclamación',
    estimatedMinutes: 27,
    content: {
      version: v,
      blocks: [
        { id: 'esi5-p4-h1', type: 'HEADING', level: 1, text: 'Escribir al ayuntamiento' },
        {
          id: 'esi5-p4-intro',
          type: 'TEXT',
          text: 'Un escrito a una administración no se parece a un mensaje de enfado, y no porque haya que ser sumiso: porque el enfado no se puede tramitar. Lo que se tramita es un hecho, una fecha, un lugar y una petición concreta. Con esas cuatro cosas, un escrito de diez líneas tiene más efecto que dos páginas de indignación.',
        },
        {
          id: 'esi5-p4-info-estructura',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Las partes del escrito',
          text: 'Las dos palabras que estructuran cualquier instancia en español son EXPONE y SOLICITA, tradicionalmente en mayúsculas. Aunque hoy se admiten escritos más normales, mantener las dos partes separadas sigue siendo lo más eficaz.',
          table: {
            headers: ['Parte', 'Contenido', 'Fórmula'],
            rows: [
              [
                'identificación',
                'quién escribe y en calidad de qué',
                'En nombre de la asociación…',
              ],
              ['EXPONE', 'los hechos, con fechas y lugares', 'Que desde el pasado mes de…'],
              ['SOLICITA', 'lo que se pide, en una frase', 'Que se proceda a…'],
              ['cierre', 'disponibilidad y despedida', 'Quedamos a su disposición.'],
            ],
          },
        },
        {
          id: 'esi5-p4-modelo',
          type: 'TEXT',
          text: 'Asociación de Vecinos Las Fuentes\nAl Ayuntamiento de Vilanova, Área de Movilidad\n\nEXPONE:\n\nQue desde el pasado mes de junio los vehículos estacionan habitualmente sobre las aceras de las calles Olivo y Mayor, en especial en los cruces.\n\nQue dicha situación obliga a los peatones, y muy especialmente a las personas con movilidad reducida y a quienes llevan carritos, a bajar a la calzada.\n\nQue el pasado 3 de septiembre se produjo un atropello leve en el cruce de ambas calles, según consta en el atestado de la Policía Local.\n\nSOLICITA:\n\nQue se repinten los pasos de peatones de ambos cruces y que se estudie la instalación de bolardos en las cuatro esquinas, con cargo al presupuesto del próximo ejercicio.\n\nQuedamos a su disposición para cualquier aclaración.\n\nVilanova, 14 de octubre de 2026',
        },
        {
          id: 'esi5-p4-info-solicita',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'La forma de la petición',
          text: 'Después de SOLICITA todo va con «que» más subjuntivo, y casi siempre en forma impersonal con «se»: no se pide a una persona, se pide a una institución. Aquí se juntan el subjuntivo del capítulo 2 y la pasiva refleja, que se estudia a fondo en el capítulo 8.',
          table: {
            headers: ['Se quiere pedir', 'Se escribe'],
            rows: [
              ['que pinten los pasos', 'Que se repinten los pasos de peatones.'],
              ['que arreglen las farolas', 'Que se proceda a la reparación del alumbrado.'],
              ['que estudien una medida', 'Que se estudie la instalación de…'],
              ['que contesten', 'Que se nos comunique la resolución adoptada.'],
            ],
          },
        },
        {
          id: 'esi5-p4-choice-registro',
          type: 'CHOICE',
          instruction: 'Elija la frase adecuada para el apartado SOLICITA.',
          options: [
            {
              id: 'd1',
              text: 'Que arreglen las farolas de una vez, que llevamos dos meses a oscuras.',
            },
            {
              id: 'd2',
              text: 'Que se proceda a la reparación del alumbrado de la plaza del Mercado.',
            },
            { id: 'd3', text: '¿Podrían arreglar las farolas, por favor?' },
            { id: 'd4', text: 'Es una vergüenza que las farolas sigan apagadas.' },
          ],
          multiple: false,
          solution: ['d2'],
          explanation:
            'd2 usa la impersonal con «se», nombra el lugar exacto y pide una sola cosa. d1 mezcla la petición con el reproche, d3 es demasiado coloquial para una instancia y d4 no pide nada: solo valora.',
        },
        {
          id: 'esi5-p4-cloze',
          type: 'CLOZE',
          instruction: 'Complete el escrito con la forma correcta.',
          caseSensitive: false,
          segments: [
            {
              kind: 'TEXT',
              text: 'EXPONE: Que desde el mes de mayo el contenedor de la calle Olivo no ',
            },
            {
              kind: 'GAP',
              gapId: 'c1',
              solution: ['se recoge'],
              hint: 'recoger, impersonal',
              width: 11,
            },
            { kind: 'TEXT', text: ' los fines de semana.\n\nSOLICITA: Que ' },
            {
              kind: 'GAP',
              gapId: 'c2',
              solution: ['se amplíe'],
              hint: 'ampliar, impersonal',
              width: 11,
            },
            { kind: 'TEXT', text: ' el servicio de recogida al sábado por la tarde; que ' },
            {
              kind: 'GAP',
              gapId: 'c3',
              solution: ['se estudie'],
              hint: 'estudiar, impersonal',
              width: 12,
            },
            { kind: 'TEXT', text: ' la colocación de un segundo contenedor, y que ' },
            {
              kind: 'GAP',
              gapId: 'c4',
              solution: ['se nos comunique'],
              hint: 'comunicar, impersonal',
              width: 17,
            },
            { kind: 'TEXT', text: ' la resolución adoptada.' },
          ],
        },
        {
          id: 'esi5-p4-match-registro',
          type: 'MATCHING',
          instruction: 'Relacione cada frase coloquial con su versión para un escrito oficial.',
          left: [
            { id: 'f1', text: 'Llevamos meses sin luz en la plaza.' },
            { id: 'f2', text: 'Que vengan a ver cómo está esto.' },
            { id: 'f3', text: 'Queremos que nos contesten.' },
            { id: 'f4', text: 'El sábado casi atropellan a un niño.' },
          ],
          right: [
            {
              id: 'g1',
              text: 'Que desde el mes de agosto el alumbrado de la plaza permanece apagado.',
            },
            { id: 'g2', text: 'Que se gire visita de inspección al lugar de los hechos.' },
            { id: 'g3', text: 'Que se nos comunique por escrito la resolución adoptada.' },
            {
              id: 'g4',
              text: 'Que el pasado sábado 7 se produjo un incidente con un menor en dicho cruce.',
            },
          ],
          solution: [
            { leftId: 'f1', rightId: 'g1' },
            { leftId: 'f2', rightId: 'g2' },
            { leftId: 'f3', rightId: 'g3' },
            { leftId: 'f4', rightId: 'g4' },
          ],
        },
        {
          id: 'esi5-p4-writing',
          type: 'WRITING',
          instruction: 'Escriba una reclamación.',
          prompt:
            'Escriba al ayuntamiento sobre el problema que describió en la página 2 de este capítulo, o sobre otro que conozca. Use 120 a 180 palabras con las cuatro partes (identificación, EXPONE, SOLICITA, cierre). En EXPONE incluya al menos una fecha concreta y a quién afecta; en SOLICITA pida dos cosas, una inmediata y otra a más largo plazo, con «que se» más subjuntivo. No incluya reproches.',
          minWords: 120,
          maxWords: 190,
          aiFeedback: true,
          sampleAnswer:
            'Jan Czok, vecino de la calle Mayor n.º 14, con domicilio a efectos de notificación en dicha dirección,\n\nEXPONE:\n\nQue desde el pasado mes de junio los vehículos estacionan de forma habitual sobre las aceras de las calles Mayor y Olivo, en especial en los cruces entre ambas.\n\nQue esta situación obliga a los peatones a caminar por la calzada, y afecta sobre todo a las personas mayores, a quienes usan silla de ruedas y a las familias con carritos.\n\nQue el pasado 3 de septiembre se produjo un atropello leve en dicho cruce, atendido por la Policía Local.\n\nSOLICITA:\n\nQue se repinten con carácter urgente los pasos de peatones de ambos cruces, actualmente borrados.\n\nQue se estudie la instalación de bolardos en las cuatro esquinas con cargo al presupuesto del próximo ejercicio, y que se nos comunique por escrito la resolución adoptada.\n\nQuedo a su disposición para cualquier aclaración.\n\nVilanova, 20 de septiembre de 2026',
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – die eigene Verantwortung und die Größenordnungen.
  {
    order: 5,
    title: '¿Y yo qué puedo hacer?',
    subtitle: 'Lo individual y lo colectivo',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'esi5-p5-h1', type: 'HEADING', level: 1, text: '¿Y yo qué puedo hacer?' },
        {
          id: 'esi5-p5-intro',
          type: 'TEXT',
          text: 'Esta pregunta aparece en toda conversación sobre medio ambiente y suele resolverse mal de dos maneras opuestas. Una es la culpa: cada gesto individual se vive como un examen moral. La otra es la resignación: como lo que yo haga no cambia nada, no hago nada. Las dos se apoyan en no distinguir órdenes de magnitud, que es justamente lo que esta página propone hacer.',
        },
        {
          id: 'esi5-p5-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: hábitos y decisiones',
          items: [
            {
              term: 'el hábito',
              translations: { en: 'habit', de: 'die Gewohnheit' },
            },
            {
              term: 'el consumo',
              translations: { en: 'consumption', de: 'der Verbrauch' },
            },
            {
              term: 'ahorrar',
              translations: { en: 'to save', de: 'sparen' },
              example: 'ahorrar agua, ahorrar energía',
            },
            {
              term: 'el envase',
              translations: { en: 'packaging', de: 'die Verpackung' },
            },
            {
              term: 'de usar y tirar',
              translations: { en: 'single-use', de: 'Einweg-' },
            },
            {
              term: 'la huella de carbono',
              translations: { en: 'carbon footprint', de: 'der CO₂-Fußabdruck' },
            },
            {
              term: 'la normativa',
              translations: { en: 'regulations', de: 'die Vorschriften' },
            },
            {
              term: 'la subvención',
              translations: { en: 'subsidy', de: 'die Förderung' },
            },
            {
              term: 'a gran escala',
              translations: { en: 'on a large scale', de: 'in großem Maßstab' },
            },
            {
              term: 'poner de su parte',
              translations: { en: 'to do one’s bit', de: 'seinen Teil beitragen' },
            },
            {
              term: 'echar la culpa a',
              translations: { en: 'to blame', de: 'die Schuld geben' },
            },
            {
              term: 'dar ejemplo',
              translations: { en: 'to set an example', de: 'mit gutem Beispiel vorangehen' },
            },
          ],
        },
        {
          id: 'esi5-p5-info-escalas',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Dos escalas distintas',
          text: 'Lo individual y lo colectivo no compiten: hacen cosas distintas. Un hábito cambia un consumo propio y, sobre todo, cambia lo que se considera normal en un entorno. Una decisión política cambia el marco en el que todos deciden. Discutir cuál de los dos «sirve de verdad» es discutir mal el asunto, porque ninguno sustituye al otro.',
          table: {
            headers: ['Escala', 'Qué cambia', 'Ejemplo'],
            rows: [
              ['individual', 'el consumo propio y el ejemplo', 'ir en bici al trabajo'],
              ['comunitaria', 'las costumbres de un grupo', 'un huerto o un grupo de consumo'],
              ['política', 'las reglas para todos', 'normativa de edificios o de residuos'],
              ['empresarial', 'lo que se produce y cómo', 'cambiar los envases de un producto'],
            ],
          },
        },
        {
          id: 'esi5-p5-choice-escala',
          type: 'CHOICE',
          instruction: 'Elija la respuesta más precisa.',
          question:
            'Alguien dice: «Reciclar no sirve de nada, si total las grandes empresas contaminan muchísimo más».',
          options: [
            { id: 'h1', text: 'Tienes razón, es una pérdida de tiempo.' },
            { id: 'h2', text: 'No, lo que de verdad importa es lo que hace cada uno en su casa.' },
            {
              id: 'h3',
              text: 'Es verdad que las escalas no se parecen, pero una cosa no quita la otra: los hábitos cambian lo que se considera normal y las normas cambian el marco.',
            },
            { id: 'h4', text: 'Eso lo dices para no tener que reciclar.' },
          ],
          multiple: false,
          solution: ['h3'],
          explanation:
            'h3 concede el dato cierto (las escalas son muy distintas) y explica por qué no lleva a la conclusión que el otro saca. h1 y h2 eligen una escala y niegan la otra; h4 responde a la persona en vez de al argumento.',
        },
        {
          id: 'esi5-p5-dialogo',
          type: 'DIALOGUE',
          title: 'En la cocina de la oficina',
          audioUrl: 'placeholder://es-b1-medioambiente',
          lines: [
            {
              speaker: 'Sonia',
              text: 'Han quitado los vasos de plástico. Ahora hay que traerse la taza de casa.',
            },
            {
              speaker: 'Javi',
              text: 'Para lo que va a servir… Aquí somos cuarenta personas. Eso no salva el planeta.',
            },
            {
              speaker: 'Sonia',
              text: 'Claro que no. Pero eran doscientos vasos al día, que son unos cuarenta mil al año solo en esta planta.',
            },
            {
              speaker: 'Javi',
              text: 'Visto así suena a más. Aun así, me sigue pareciendo que nos cargan a nosotros lo que tendrían que arreglar otros.',
            },
            {
              speaker: 'Sonia',
              text: 'En eso estoy de acuerdo contigo, y por eso pedimos también que cambien el contrato de la máquina de café, que viene con cápsulas de aluminio.',
            },
            {
              speaker: 'Javi',
              text: 'Ah, eso no lo sabía. Si es así, me traigo la taza sin protestar.',
            },
          ],
        },
        {
          id: 'esi5-p5-cloze',
          type: 'CLOZE',
          instruction: 'Complete el texto.',
          wordBank: ['ahorrar', 'normativa', 'a gran escala', 'de usar y tirar', 'de su parte'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'En casa intentamos ' },
            { kind: 'GAP', gapId: 'c1', solution: ['ahorrar'], width: 9 },
            { kind: 'TEXT', text: ' agua y evitamos los productos ' },
            { kind: 'GAP', gapId: 'c2', solution: ['de usar y tirar'], width: 16 },
            { kind: 'TEXT', text: '. Está bien que cada uno ponga ' },
            { kind: 'GAP', gapId: 'c3', solution: ['de su parte'], width: 12 },
            { kind: 'TEXT', text: ', aunque los cambios ' },
            { kind: 'GAP', gapId: 'c4', solution: ['a gran escala'], width: 14 },
            { kind: 'TEXT', text: ' dependen sobre todo de la ' },
            { kind: 'GAP', gapId: 'c5', solution: ['normativa'], width: 10 },
            { kind: 'TEXT', text: ' y de las empresas.' },
          ],
        },
        {
          id: 'esi5-p5-match-escalas',
          type: 'MATCHING',
          instruction: 'Relacione cada medida con la escala a la que pertenece.',
          left: [
            { id: 'p1', text: 'Cambiar la caldera de gas por una bomba de calor.' },
            { id: 'p2', text: 'Obligar a que los edificios nuevos lleven aislamiento reforzado.' },
            { id: 'p3', text: 'Montar un grupo de compra de verdura con ocho vecinos.' },
            { id: 'p4', text: 'Rediseñar un envase para que use la mitad de plástico.' },
          ],
          right: [
            { id: 'q1', text: 'Escala individual' },
            { id: 'q2', text: 'Escala política' },
            { id: 'q3', text: 'Escala comunitaria' },
            { id: 'q4', text: 'Escala empresarial' },
          ],
          solution: [
            { leftId: 'p1', rightId: 'q1' },
            { leftId: 'p2', rightId: 'q2' },
            { leftId: 'p3', rightId: 'q3' },
            { leftId: 'p4', rightId: 'q4' },
          ],
        },
        {
          id: 'esi5-p5-writing',
          type: 'WRITING',
          instruction: 'Escriba su posición.',
          prompt:
            'Un compañero dice que los gestos individuales no sirven de nada. Escriba su respuesta en 100 a 150 palabras: reconozca lo que tiene de cierto, distinga las escalas con un ejemplo concreto de cada una y termine diciendo qué hace usted y qué cree que habría que decidir. Use al menos una propuesta con subjuntivo, dos conectores de consecuencia y una expresión de desacuerdo matizado del capítulo 4.',
          minWords: 100,
          maxWords: 160,
          aiFeedback: true,
          sampleAnswer:
            'Entiendo lo que dices y en parte llevas razón: comparar lo que hago yo con una refinería es ridículo, y a veces parece que nos echan la culpa a nosotros para no tocar lo importante.\n\nAhora bien, yo no lo veo así del todo. Son dos escalas distintas y no compiten. Yo voy en bici al trabajo; eso no cambia nada en las cifras del país, pero mi vecino se compró una el mes pasado porque me veía salir cada mañana. Lo que sí cambia las cifras es la normativa: cuando obligaron a aislar los edificios nuevos, el consumo de calefacción bajó en todo el barrio a la vez.\n\nPor eso propongo que pidamos las dos cosas. Yo sigo con la bici, y en la próxima reunión de vecinos defiendo que se estudie el aislamiento del bloque.',
        },
      ],
    },
  },
];
