import type { UnitSeed } from './chapter-beginner-1';

/**
 * Spanisch, Intermediate, Kapitel 8: „Trabajo y economía“ (B2, Kapitel 2)
 *
 * Fünf Seiten. Kapitel 7 hat gezeigt, wie man eine Meinung hält; hier kommt
 * dazu, was eine Meinung im Wirtschaftlichen belegt: Zahlen. Der sprachliche
 * Kern des Kapitels ist die Entpersönlichung – Passiv, pasiva refleja und das
 * unpersönliche „se“ –, denn genau dort, wo über Märkte und Entscheidungen
 * geschrieben wird, verschwindet der Handelnde aus dem Satz. Das Kapitel
 * behandelt das nicht nur als Formenlehre, sondern auch als Frage: Wer ist
 * weg, und warum?
 *
 * Aufbau: Seite 1 der Wortschatz der Wirtschaftsnachricht, Seite 2 die
 * Beschreibung einer Entwicklung (steigen, fallen, stagnieren, Prozentangaben,
 * Vergleiche), Seite 3 die drei Entpersönlichungen im Kontrast, Seite 4 die
 * Verhandlung mit dem Condicional als Höflichkeitsform, Seite 5 der
 * Sachbericht als Schreibaufgabe.
 *
 * Wie im gesamten B2-Teil stehen die Seiten einsprachig spanisch; die
 * Wortschatzlisten tragen deutsche und englische Entsprechungen.
 *
 * Die Zahlen in den Beispielen sind erfunden und als Übungsmaterial gedacht,
 * nicht als Angaben über reale Volkswirtschaften. Sie sind so gewählt, dass
 * sie sich im Kopf nachrechnen lassen.
 *
 * Sämtliche Texte sind eigenständig verfasst.
 */
const v = 1;

export const SPANISH_INTERMEDIATE_8_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – der Wortschatz, mit dem eine Wirtschaftsmeldung gelesen wird.
  {
    order: 1,
    title: 'Leer una cifra',
    subtitle: 'El vocabulario de la economía',
    estimatedMinutes: 27,
    content: {
      version: v,
      blocks: [
        { id: 'esi8-p1-h1', type: 'HEADING', level: 1, text: 'Leer una cifra' },
        {
          id: 'esi8-p1-intro',
          type: 'TEXT',
          text: 'Una noticia económica suele decirse en dos frases y esconder tres preguntas. «El paro bajó tres décimas en el segundo trimestre» informa de un movimiento, pero no dice respecto a qué, ni si el movimiento es grande o pequeño, ni si la cifra que baja mide lo que su nombre promete. Quien sabe leer esas tres preguntas entiende la noticia; quien solo retiene la cifra, repite un titular.',
        },
        {
          id: 'esi8-p1-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: economía y trabajo',
          items: [
            {
              term: 'el paro / el desempleo',
              translations: { en: 'unemployment', de: 'die Arbeitslosigkeit' },
              example: 'La tasa de paro se sitúa en el 11 %.',
            },
            {
              term: 'la tasa',
              translations: { en: 'rate', de: 'die Quote, die Rate' },
            },
            {
              term: 'el crecimiento',
              translations: { en: 'growth', de: 'das Wachstum' },
            },
            {
              term: 'la inflación',
              translations: { en: 'inflation', de: 'die Inflation' },
              example: 'La inflación se moderó en otoño.',
            },
            {
              term: 'el poder adquisitivo',
              translations: { en: 'purchasing power', de: 'die Kaufkraft' },
            },
            {
              term: 'la oferta y la demanda',
              translations: { en: 'supply and demand', de: 'Angebot und Nachfrage' },
            },
            {
              term: 'la plantilla',
              translations: { en: 'workforce, staff', de: 'die Belegschaft' },
              example: 'La plantilla ronda los ochocientos empleados.',
            },
            {
              term: 'el convenio colectivo',
              translations: { en: 'collective agreement', de: 'der Tarifvertrag' },
            },
            {
              term: 'la jornada laboral',
              translations: { en: 'working hours, workday', de: 'die Arbeitszeit' },
            },
            {
              term: 'el contrato indefinido',
              translations: { en: 'permanent contract', de: 'der unbefristete Vertrag' },
            },
            {
              term: 'la facturación',
              translations: { en: 'turnover, revenue', de: 'der Umsatz' },
            },
            {
              term: 'el beneficio',
              translations: { en: 'profit', de: 'der Gewinn' },
            },
            {
              term: 'la inversión',
              translations: { en: 'investment', de: 'die Investition' },
            },
            {
              term: 'el sector servicios',
              translations: { en: 'the service sector', de: 'der Dienstleistungssektor' },
            },
            {
              term: 'a la baja / al alza',
              translations: { en: 'downward / upward', de: 'nach unten / nach oben' },
              example: 'Las previsiones se han revisado a la baja.',
            },
          ],
        },
        {
          id: 'esi8-p1-info-preguntas',
          type: 'INFO',
          variant: 'TIP',
          title: 'Las tres preguntas de toda cifra',
          text: 'Antes de comentar un dato conviene responderse estas tres preguntas. La primera evita comparar lo incomparable; la segunda distingue un movimiento real de un ruido estadístico; la tercera es la más incómoda, porque muchas magnitudes miden algo distinto de lo que su nombre sugiere.',
          table: {
            headers: ['Pregunta', 'En español', 'Por qué importa'],
            rows: [
              ['¿Comparado con qué?', 'respecto al trimestre anterior', 'un mes no es un año'],
              ['¿Cuánto es mucho?', 'frente a una media del 2 %', 'sin referencia no hay tamaño'],
              ['¿Qué mide exactamente?', 'según la definición de…', 'el nombre no es la medida'],
            ],
          },
        },
        {
          id: 'esi8-p1-texto-paro',
          type: 'TEXT',
          text: 'Un ejemplo de la tercera pregunta: la tasa de paro no cuenta a todas las personas sin trabajo, sino a las que buscan empleo de manera activa. Quien ha dejado de buscar porque ya no espera encontrarlo sale de la estadística, y la tasa baja sin que nadie haya sido contratado. Por eso los informes serios publican junto a ella la tasa de actividad, que dice cuánta gente está dentro del mercado laboral.',
        },
        {
          id: 'esi8-p1-choice-tasa',
          type: 'CHOICE',
          instruction: 'Lea el texto anterior y elija.',
          question:
            'En una región, la tasa de paro baja del 14 % al 12 % y la tasa de actividad baja también. ¿Qué conclusión es la más prudente?',
          options: [
            { id: 'c1', text: 'Se han creado muchos puestos de trabajo.' },
            {
              id: 'c2',
              text: 'Parte de la bajada puede deberse a que hay gente que ha dejado de buscar empleo.',
            },
            { id: 'c3', text: 'La economía de la región ha crecido con seguridad.' },
            { id: 'c4', text: 'Los datos son falsos.' },
          ],
          multiple: false,
          solution: ['c2'],
          explanation:
            'Si menos gente busca empleo, el denominador de la tasa se reduce y el paro baja sin que aumente el número de contratos. No prueba que no se haya creado empleo, pero obliga a matizar: de ahí la palabra «parte».',
        },
        {
          id: 'esi8-p1-match-terminos',
          type: 'MATCHING',
          instruction: 'Relacione cada término con su definición.',
          left: [
            { id: 'l1', text: 'la inflación' },
            { id: 'l2', text: 'el poder adquisitivo' },
            { id: 'l3', text: 'la facturación' },
            { id: 'l4', text: 'el convenio colectivo' },
          ],
          right: [
            { id: 'r1', text: 'Subida general y sostenida de los precios.' },
            { id: 'r2', text: 'Lo que se puede comprar con un salario determinado.' },
            { id: 'r3', text: 'Total de ingresos por ventas en un periodo.' },
            {
              id: 'r4',
              text: 'Acuerdo entre empresa y representantes de los trabajadores sobre salarios y condiciones.',
            },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'esi8-p1-cloze',
          type: 'CLOZE',
          instruction: 'Complete la noticia con las palabras del recuadro.',
          wordBank: ['tasa', 'plantilla', 'facturación', 'inversión', 'sector'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'La empresa cerró el año con una ' },
            { kind: 'GAP', gapId: 'c1', solution: ['facturación'], width: 12 },
            { kind: 'TEXT', text: ' de 42 millones y anunció una ' },
            { kind: 'GAP', gapId: 'c2', solution: ['inversión'], width: 10 },
            { kind: 'TEXT', text: ' de ocho millones en su centro de Valencia. La ' },
            { kind: 'GAP', gapId: 'c3', solution: ['plantilla'], width: 10 },
            { kind: 'TEXT', text: ' crecerá en sesenta personas, casi todas del ' },
            { kind: 'GAP', gapId: 'c4', solution: ['sector'], width: 8 },
            { kind: 'TEXT', text: ' tecnológico, donde la ' },
            { kind: 'GAP', gapId: 'c5', solution: ['tasa'], width: 6 },
            { kind: 'TEXT', text: ' de paro es la más baja de la comunidad.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – eine Entwicklung beschreiben: Verben, Prozente, Vergleiche.
  {
    order: 2,
    title: 'Describir una evolución',
    subtitle: 'Subir, caer, estancarse',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'esi8-p2-h1', type: 'HEADING', level: 1, text: 'Describir una evolución' },
        {
          id: 'esi8-p2-intro',
          type: 'TEXT',
          text: 'Describir un gráfico parece fácil y se estropea de dos maneras. La primera es repetir «subir» y «bajar» doce veces, con lo que el lector deja de distinguir un repunte de un desplome. La segunda es confundir el movimiento con el nivel: una cifra que sube sigue siendo baja si venía de muy abajo, y decir que «mejora» sin añadir desde dónde es media verdad.',
        },
        {
          id: 'esi8-p2-info-verbos',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Verbos de evolución, por intensidad',
          text: 'El español distingue con bastante precisión la fuerza de un movimiento. Elegir el verbo adecuado ahorra un adverbio y evita exagerar: «se desplomó» dice por sí solo lo que «bajó muchísimo» dice mal.',
          table: {
            headers: ['Dirección', 'Suave', 'Marcado', 'Extremo'],
            rows: [
              ['hacia arriba', 'repuntar, mejorar', 'subir, aumentar, crecer', 'dispararse'],
              ['hacia abajo', 'moderarse, ceder', 'bajar, descender, caer', 'desplomarse'],
              ['sin cambio', 'mantenerse', 'estancarse', 'congelarse'],
              ['cambio de rumbo', 'invertirse la tendencia', 'tocar techo / tocar suelo', '—'],
            ],
          },
        },
        {
          id: 'esi8-p2-info-porcentajes',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Por ciento y puntos porcentuales',
          text: 'Si una tasa pasa del 8 % al 10 %, ha subido dos puntos porcentuales, no un 2 %: en términos relativos ha subido un 25 %. Confundir las dos cosas es el error más frecuente al comentar datos y el más fácil de detectar por un lector atento. En español se dice «subir dos puntos» para la diferencia y «subir un 25 %» para la proporción; el artículo «un» delante del porcentaje no es opcional.',
          table: {
            headers: ['Se quiere decir', 'Forma correcta'],
            rows: [
              ['del 8 % al 10 %', 'ha subido dos puntos porcentuales'],
              ['proporción de esa subida', 'ha subido un 25 %'],
              ['comparación con el año pasado', 'un 3 % más que en 2024'],
              ['aproximación', 'en torno al 10 %, alrededor de un 10 %'],
            ],
          },
        },
        {
          id: 'esi8-p2-choice-puntos',
          type: 'CHOICE',
          instruction: 'Elija la formulación correcta.',
          question: 'La tasa de ahorro pasó del 12 % al 15 %. ¿Cómo se dice?',
          options: [
            { id: 'p1', text: 'La tasa de ahorro subió un 3 %.' },
            { id: 'p2', text: 'La tasa de ahorro subió tres puntos porcentuales.' },
            { id: 'p3', text: 'La tasa de ahorro subió tres por cientos.' },
            { id: 'p4', text: 'La tasa de ahorro subió en un 15 %.' },
          ],
          multiple: false,
          solution: ['p2'],
          explanation:
            'La diferencia entre dos porcentajes se mide en puntos porcentuales. En términos relativos la subida sería de un 25 %, no de un 3 %. «Tres por cientos» no existe: el porcentaje no tiene plural.',
        },
        {
          id: 'esi8-p2-texto-grafico',
          type: 'TEXT',
          text: 'Lea esta descripción y fíjese en cómo se encadenan los tiempos verbales: «El consumo eléctrico industrial creció con fuerza hasta 2022, cuando tocó techo. Desde entonces se ha mantenido casi plano, con un ligero repunte el invierno pasado que se explica por el frío y no por la actividad. Las previsiones apuntan a un descenso moderado si los precios siguen donde están».',
        },
        {
          id: 'esi8-p2-info-tiempos',
          type: 'INFO',
          variant: 'TIP',
          title: 'Qué tiempo verbal para qué tramo',
          text: 'Una descripción de evolución recorre tres zonas temporales y cada una tiene su tiempo. El indefinido narra el tramo cerrado, el pretérito perfecto conecta con hoy, y el futuro o una perífrasis de probabilidad se reservan para la previsión, que nunca se afirma en presente.',
          table: {
            headers: ['Tramo', 'Tiempo', 'Ejemplo'],
            rows: [
              ['periodo cerrado', 'indefinido', 'creció con fuerza hasta 2022'],
              ['desde entonces hasta hoy', 'pret. perfecto', 'se ha mantenido plano'],
              ['estado actual', 'presente', 'ronda los 40 000 GWh'],
              ['previsión', 'futuro / apuntar a', 'apuntan a un descenso moderado'],
            ],
          },
        },
        {
          id: 'esi8-p2-cloze',
          type: 'CLOZE',
          instruction: 'Complete la descripción con los verbos del recuadro en la forma adecuada.',
          wordBank: ['se disparó', 'se ha estancado', 'repuntó', 'ronda', 'apuntan'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'El precio del alquiler ' },
            { kind: 'GAP', gapId: 'c1', solution: ['se disparó'], width: 11 },
            { kind: 'TEXT', text: ' entre 2021 y 2023, con subidas de dos dígitos. En 2024 ' },
            { kind: 'GAP', gapId: 'c2', solution: ['se ha estancado'], width: 15 },
            { kind: 'TEXT', text: ', aunque en las capitales ' },
            { kind: 'GAP', gapId: 'c3', solution: ['repuntó'], width: 9 },
            { kind: 'TEXT', text: ' ligeramente en verano. La media nacional ' },
            { kind: 'GAP', gapId: 'c4', solution: ['ronda'], width: 7 },
            { kind: 'TEXT', text: ' hoy los 980 euros, y las previsiones ' },
            { kind: 'GAP', gapId: 'c5', solution: ['apuntan'], width: 9 },
            { kind: 'TEXT', text: ' a una subida moderada el año próximo.' },
          ],
        },
        {
          id: 'esi8-p2-ordering',
          type: 'ORDERING',
          instruction: 'Ordene las frases para formar una descripción coherente de la evolución.',
          items: [
            {
              id: 'g1',
              text: 'Las exportaciones del sector crecieron sin interrupción hasta 2019.',
            },
            { id: 'g2', text: 'En 2020 se desplomaron un 31 % por el cierre de fronteras.' },
            { id: 'g3', text: 'La recuperación empezó en 2021 y fue más rápida de lo previsto.' },
            {
              id: 'g4',
              text: 'Desde 2023 la cifra se ha mantenido en torno a los niveles previos.',
            },
            { id: 'g5', text: 'Todo apunta, por lo tanto, a una normalización ya consolidada.' },
          ],
          solution: ['g1', 'g2', 'g3', 'g4', 'g5'],
        },
        {
          id: 'esi8-p2-writing',
          type: 'WRITING',
          instruction: 'Describa una evolución.',
          prompt:
            'Una empresa de reparto pasó de 120 empleados en 2020 a 340 en 2023, cayó a 290 en 2024 tras perder un contrato importante y se mantiene en esa cifra. Describa la evolución en 70 a 110 palabras. Use al menos tres verbos de evolución distintos, una cifra en porcentaje y una previsión.',
          minWords: 70,
          maxWords: 120,
          aiFeedback: true,
          sampleAnswer:
            'La plantilla de la empresa creció con fuerza entre 2020 y 2023, cuando llegó a triplicarse y alcanzó los 340 empleados. La pérdida del contrato con la cadena de supermercados invirtió la tendencia en 2024: el personal descendió un 15 % y se quedó en 290 personas. Desde entonces la cifra se ha mantenido estable, sin nuevas salidas ni contrataciones relevantes. La dirección no prevé despidos, pero tampoco anuncia incorporaciones, de modo que todo apunta a un año de crecimiento plano a la espera de que se resuelva el concurso público al que la empresa se ha presentado.',
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – Passiv, pasiva refleja und unpersönliches se im Kontrast.
  {
    order: 3,
    title: 'Cuando desaparece el sujeto',
    subtitle: 'La pasiva y el «se»',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'esi8-p3-h1', type: 'HEADING', level: 1, text: 'Cuando desaparece el sujeto' },
        {
          id: 'esi8-p3-intro',
          type: 'TEXT',
          text: 'En el lenguaje económico y administrativo, el que actúa suele no aparecer. «Se ha decidido cerrar la planta» no dice quién lo ha decidido; «la planta fue cerrada en marzo» tampoco. A veces la omisión es natural, porque el autor es evidente o irrelevante. Otras veces es una decisión de quien escribe, y conviene saber reconocerla. Este apartado presenta las tres construcciones y después pregunta por lo segundo.',
        },
        {
          id: 'esi8-p3-info-tres',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Tres maneras de quitar al agente',
          text: 'La pasiva con ser es la menos usada en español hablado y bastante frecuente en prensa; exige un participio concordado y admite el agente con «por». La pasiva refleja usa «se» y concuerda con la cosa, que es el sujeto gramatical: por eso «se venden pisos», en plural. La impersonal con «se» deja el verbo siempre en singular y se usa con verbos intransitivos o con complemento de persona introducido por «a».',
          table: {
            headers: ['Construcción', 'Ejemplo', 'Concordancia'],
            rows: [
              [
                'pasiva con ser',
                'Los pisos fueron vendidos por la promotora.',
                'participio con sujeto',
              ],
              ['pasiva refleja', 'Se vendieron los pisos en dos semanas.', 'verbo con la cosa'],
              ['impersonal con se', 'Se despidió a doce empleados.', 'siempre en singular'],
              ['tercera del plural', 'Han despedido a doce empleados.', 'sin sujeto expreso'],
            ],
          },
        },
        {
          id: 'esi8-p3-info-error',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'El error de concordancia más común',
          text: 'Con pasiva refleja, el verbo concuerda con lo vendido, contratado o alquilado, no con nadie más: «se necesitan camareros», no «se necesita camareros». La excepción la marca la preposición «a»: cuando el complemento es de persona y lleva «a», la construcción pasa a ser impersonal y el verbo se queda en singular: «se necesita a los dos testigos». Regla práctica: si hay «a» delante de persona, singular; si no la hay, concordancia.',
          table: {
            headers: ['Frase', '¿Correcta?'],
            rows: [
              ['Se alquilan habitaciones.', 'sí, pasiva refleja'],
              ['Se alquila habitaciones.', 'no'],
              ['Se contrató a dos ingenieras.', 'sí, impersonal con a'],
              ['Se contrataron a dos ingenieras.', 'no'],
            ],
          },
        },
        {
          id: 'esi8-p3-choice-concordancia',
          type: 'CHOICE',
          instruction: 'Elija las frases correctas. Puede haber más de una.',
          options: [
            { id: 'v1', text: 'Se buscan programadores con experiencia.' },
            { id: 'v2', text: 'Se busca programadores con experiencia.' },
            { id: 'v3', text: 'Se informó a los trabajadores el lunes.' },
            { id: 'v4', text: 'Se informaron a los trabajadores el lunes.' },
          ],
          multiple: true,
          solution: ['v1', 'v3'],
          explanation:
            'v1 es pasiva refleja sin «a»: el verbo concuerda con «programadores». v3 lleva «a» delante de persona, luego es impersonal y va en singular. v2 y v4 invierten justamente esa regla.',
        },
        {
          id: 'esi8-p3-texto-quien',
          type: 'TEXT',
          text: 'Hasta aquí la gramática. Queda la otra pregunta, la que no resuelve ninguna tabla: si el agente desaparece, ¿desaparece también la responsabilidad? Compare estas tres frases sobre el mismo hecho: «se han congelado los salarios», «la dirección ha congelado los salarios» y «los salarios no han subido». Las tres son verdaderas. Solo una dice quién decidió, y solo una sugiere que no hubo decisión alguna.',
        },
        {
          id: 'esi8-p3-match-efecto',
          type: 'MATCHING',
          instruction: 'Relacione cada frase con el efecto que produce en el lector.',
          left: [
            { id: 'e1', text: 'La empresa despidió a cuarenta personas.' },
            { id: 'e2', text: 'Se procedió a un ajuste de plantilla.' },
            { id: 'e3', text: 'Cuarenta personas perdieron su empleo.' },
            { id: 'e4', text: 'La plantilla fue reducida por decisión del consejo.' },
          ],
          right: [
            { id: 'f1', text: 'Agente explícito y responsable identificable.' },
            { id: 'f2', text: 'Agente borrado y hecho presentado como trámite.' },
            { id: 'f3', text: 'Perspectiva de los afectados, sin agente.' },
            { id: 'f4', text: 'Pasiva con agente: forma distante, responsable nombrado.' },
          ],
          solution: [
            { leftId: 'e1', rightId: 'f1' },
            { leftId: 'e2', rightId: 'f2' },
            { leftId: 'e3', rightId: 'f3' },
            { leftId: 'e4', rightId: 'f4' },
          ],
        },
        {
          id: 'esi8-p3-cloze',
          type: 'CLOZE',
          instruction: 'Complete con la forma verbal correcta. Atención a la concordancia.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'En la reunión ' },
            {
              kind: 'GAP',
              gapId: 'c1',
              solution: ['se aprobaron'],
              hint: 'aprobar, pasiva refleja',
              width: 13,
            },
            { kind: 'TEXT', text: ' las tres propuestas del comité. Después ' },
            { kind: 'GAP', gapId: 'c2', solution: ['se convocó'], hint: 'convocar + a', width: 11 },
            { kind: 'TEXT', text: ' a los delegados de cada centro. ' },
            {
              kind: 'GAP',
              gapId: 'c3',
              solution: ['Se necesitan'],
              hint: 'necesitar, pasiva refleja',
              width: 13,
            },
            {
              kind: 'TEXT',
              text: ' dos firmas más para cerrar el acuerdo, y el texto definitivo ',
            },
            {
              kind: 'GAP',
              gapId: 'c4',
              solution: ['será publicado', 'fue publicado'],
              hint: 'publicar, pasiva con ser',
              width: 15,
            },
            { kind: 'TEXT', text: ' en el tablón la semana que viene.' },
          ],
        },
        {
          id: 'esi8-p3-writing',
          type: 'WRITING',
          instruction: 'Reescriba y comente.',
          prompt:
            'Un comunicado interno dice: «Se ha procedido a la reorganización de los turnos y se ha visto afectado el personal de tarde». Reescriba el comunicado en 60 a 100 palabras de modo que quede claro quién decide y a quién afecta, sin dejar de ser un texto formal de empresa. Añada después una frase explicando qué cambia para el lector.',
          minWords: 60,
          maxWords: 110,
          aiFeedback: true,
          sampleAnswer:
            'La dirección de operaciones ha reorganizado los turnos con efecto del 1 de octubre. El cambio afecta a las veintidós personas del turno de tarde, que pasarán a entrar una hora más tarde y librarán un sábado de cada tres. Quien necesite ajustar su situación personal puede dirigirse a Recursos Humanos antes del día 20; cada caso se estudiará de forma individual.\n\nLo que cambia para el lector: en la versión original nadie había decidido nada y el personal «se veía afectado», como por el tiempo. Ahora hay un sujeto que decide, un número de personas concreto y una fecha a la que agarrarse.',
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – verhandeln: Condicional als Höflichkeitsform, Bedingungen.
  {
    order: 4,
    title: 'Negociar',
    subtitle: 'Proponer, condicionar, cerrar',
    estimatedMinutes: 27,
    content: {
      version: v,
      blocks: [
        { id: 'esi8-p4-h1', type: 'HEADING', level: 1, text: 'Negociar' },
        {
          id: 'esi8-p4-intro',
          type: 'TEXT',
          text: 'En una negociación, la forma verbal hace parte del trabajo. El presente de indicativo exige («quiero un 5 % más»), el condicional propone («me gustaría llegar a un 5 %») y el imperfecto de cortesía suaviza todavía un poco más («quería comentarle una cosa»). Ninguna de las tres es más sincera que las otras: son tres distancias distintas, y elegir mal la distancia es lo que hace fracasar conversaciones que estaban ganadas.',
        },
        {
          id: 'esi8-p4-dialogo',
          type: 'DIALOGUE',
          title: 'Revisión salarial',
          audioUrl: 'placeholder://es-b2-negociacion',
          lines: [
            {
              speaker: 'Nadia',
              text: 'Quería hablar con usted de la revisión de mi contrato, si tiene diez minutos.',
            },
            {
              speaker: 'Director',
              text: 'Claro, siéntese. Le adelanto que este año el margen es estrecho.',
            },
            {
              speaker: 'Nadia',
              text: 'Lo entiendo. Aun así, me gustaría plantearle los datos de mi área: hemos cerrado el ejercicio con un 18 % más de facturación y con una persona menos en el equipo.',
            },
            {
              speaker: 'Director',
              text: 'Esa cifra la conozco y le reconozco el mérito. Ahora bien, la subida general está fijada en el convenio y no puedo salirme de ahí.',
            },
            {
              speaker: 'Nadia',
              text: 'Entonces le propongo otra cosa. Si el convenio impide subir el salario base, ¿podríamos hablar de un complemento por objetivos?',
            },
            {
              speaker: 'Director',
              text: 'Eso sí entraría dentro de lo posible. Tendríamos que definir los objetivos por escrito y revisarlos en junio.',
            },
            {
              speaker: 'Nadia',
              text: 'Me parece razonable. ¿Le vendría bien que le mandara una propuesta de tres indicadores esta semana?',
            },
            {
              speaker: 'Director',
              text: 'Mándemela el jueves y la llevo al comité del viernes. Si sale adelante, lo aplicaríamos desde enero.',
            },
          ],
        },
        {
          id: 'esi8-p4-info-cortesia',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Condicional e imperfecto de cortesía',
          text: 'El condicional presenta lo que se pide como algo que aún no está sobre la mesa, lo que permite al otro decir que no sin cerrar la puerta. El imperfecto hace lo mismo desplazando la petición al pasado, como si ya se hubiera formulado antes y solo se recordara. Los dos se usan en la primera intervención, no en la última: al cerrar un acuerdo se vuelve al presente, porque lo acordado sí está sobre la mesa.',
          table: {
            headers: ['Función', 'Forma', 'Ejemplo'],
            rows: [
              ['abrir el tema', 'imperfecto', 'Quería comentarle una cosa.'],
              ['proponer', 'condicional', 'Me gustaría llegar a un acuerdo.'],
              ['sondear', 'condicional + poder', '¿Podríamos hablar de un complemento?'],
              [
                'plantear condición',
                'si + presente',
                'Si el convenio lo impide, propongo otra vía.',
              ],
              ['cerrar', 'presente', 'De acuerdo, lo aplicamos desde enero.'],
            ],
          },
        },
        {
          id: 'esi8-p4-choice-registro',
          type: 'CHOICE',
          instruction: 'Elija la formulación más eficaz para abrir la negociación.',
          options: [
            { id: 'n1', text: 'Necesito que me suba el sueldo este año.' },
            { id: 'n2', text: 'Quería plantearle la revisión de mi contrato.' },
            { id: 'n3', text: 'Supongo que no habrá posibilidad de subida, ¿verdad?' },
            { id: 'n4', text: 'Si no me sube el sueldo, tendré que buscar otra cosa.' },
          ],
          multiple: false,
          solution: ['n2'],
          explanation:
            'n2 abre el tema sin fijar todavía la cifra, que es justamente lo que permite negociar después. n1 exige de entrada, n3 ofrece al otro la negativa ya formulada, y n4 pone una amenaza sobre la mesa en la primera frase, cuando todavía no hace falta.',
        },
        {
          id: 'esi8-p4-cloze',
          type: 'CLOZE',
          instruction: 'Complete con el condicional o el imperfecto de cortesía.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '▸ Buenos días, ' },
            {
              kind: 'GAP',
              gapId: 'c1',
              solution: ['quería', 'quisiera'],
              hint: 'querer, cortesía',
              width: 9,
            },
            { kind: 'TEXT', text: ' consultarle una duda del contrato.\n▸ ¿' },
            {
              kind: 'GAP',
              gapId: 'c2',
              solution: ['Podríamos'],
              hint: 'poder, condicional',
              width: 10,
            },
            {
              kind: 'TEXT',
              text: ' fijar una reunión para la semana que viene?\n▸ A nosotros nos ',
            },
            {
              kind: 'GAP',
              gapId: 'c3',
              solution: ['vendría'],
              hint: 'venir, condicional',
              width: 9,
            },
            { kind: 'TEXT', text: ' mejor el martes por la tarde.\n▸ En ese caso, les ' },
            {
              kind: 'GAP',
              gapId: 'c4',
              solution: ['agradecería'],
              hint: 'agradecer, condicional',
              width: 12,
            },
            { kind: 'TEXT', text: ' que me confirmaran la hora por correo.' },
          ],
        },
        {
          id: 'esi8-p4-info-tacticas',
          type: 'INFO',
          variant: 'TIP',
          title: 'Cuatro movimientos de una negociación',
          text: 'Además de las formas verbales, hay cuatro movimientos que conviene tener nombrados. En el diálogo anterior aparecen los cuatro, en este orden, y es el orden que suele funcionar.',
          table: {
            headers: ['Movimiento', 'Fórmula'],
            rows: [
              ['aportar el dato', 'Me gustaría plantearle los datos de…'],
              ['reconocer el límite del otro', 'Lo entiendo / Eso lo doy por descontado.'],
              ['abrir una vía alternativa', 'Si X no es posible, ¿podríamos hablar de Y?'],
              ['concretar el siguiente paso', '¿Le vendría bien que le mandara…?'],
            ],
          },
        },
        {
          id: 'esi8-p4-ordering',
          type: 'ORDERING',
          instruction: 'Ordene la intervención de quien negocia.',
          items: [
            { id: 'h1', text: 'Quería comentarle el presupuesto del proyecto.' },
            { id: 'h2', text: 'La previsión inicial se ha quedado corta en un 12 %.' },
            { id: 'h3', text: 'Entiendo que ampliar la partida este año es complicado.' },
            { id: 'h4', text: 'Si no hay margen, ¿podríamos aplazar la segunda fase a enero?' },
            { id: 'h5', text: '¿Le parece que le envíe las dos opciones por escrito mañana?' },
          ],
          solution: ['h1', 'h2', 'h3', 'h4', 'h5'],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – der Sachbericht: Struktur, Register, Schreibaufgabe.
  {
    order: 5,
    title: 'El informe',
    subtitle: 'Exponer sin opinar',
    estimatedMinutes: 29,
    content: {
      version: v,
      blocks: [
        { id: 'esi8-p5-h1', type: 'HEADING', level: 1, text: 'El informe' },
        {
          id: 'esi8-p5-intro',
          type: 'TEXT',
          text: 'Un informe no es un artículo de opinión con cifras. Su compromiso es otro: exponer los hechos de manera que el lector pueda sacar su conclusión, y solo después, en un apartado claramente separado, ofrecer la del autor. Mezclar las dos cosas es lo que hace que un informe se lea con desconfianza, y una vez perdida esa confianza ya no se recupera en el apartado siguiente.',
        },
        {
          id: 'esi8-p5-info-estructura',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Las partes de un informe',
          text: 'La estructura es fija porque el lector de informes no lee de principio a fin: busca. Un jefe lee el resumen y las conclusiones; un técnico salta a los datos. Si cada parte está donde se espera, las dos lecturas funcionan.',
          table: {
            headers: ['Apartado', 'Contenido', 'Tiempo verbal'],
            rows: [
              ['objeto', 'qué se ha analizado y por encargo de quién', 'pret. perfecto'],
              ['metodología', 'de dónde salen los datos', 'pasiva refleja'],
              ['resultados', 'las cifras, sin valorarlas', 'indefinido / presente'],
              ['conclusiones', 'qué se deduce', 'presente'],
              ['recomendaciones', 'qué convendría hacer', 'condicional'],
            ],
          },
        },
        {
          id: 'esi8-p5-texto-modelo',
          type: 'TEXT',
          text: 'Observe el cambio de registro entre dos apartados del mismo informe. Resultados: «El 62 % de las incidencias se concentró en el turno de noche. El tiempo medio de resolución fue de 4,3 horas, frente a 1,8 en el turno de mañana». Recomendaciones: «Convendría reforzar el turno de noche con un segundo técnico. La medida supondría un coste anual en torno a los 38 000 euros y reduciría, según la estimación del área, más de la mitad del tiempo de resolución».',
        },
        {
          id: 'esi8-p5-choice-registro',
          type: 'CHOICE',
          instruction:
            'Elija la frase que corresponde al apartado de resultados y no al de conclusiones.',
          options: [
            { id: 'i1', text: 'Los datos revelan una situación preocupante en el turno de noche.' },
            {
              id: 'i2',
              text: 'El 62 % de las incidencias se registró entre las 22.00 y las 6.00.',
            },
            { id: 'i3', text: 'Es evidente que hace falta más personal nocturno.' },
            { id: 'i4', text: 'El turno de noche funciona claramente peor que los demás.' },
          ],
          multiple: false,
          solution: ['i2'],
          explanation:
            'Solo i2 expone un dato sin calificarlo. «Preocupante», «es evidente» y «claramente peor» son valoraciones: pertenecen a las conclusiones, donde además habría que justificarlas con el dato de i2.',
        },
        {
          id: 'esi8-p5-info-formulas',
          type: 'INFO',
          variant: 'TIP',
          title: 'Fórmulas del informe',
          text: 'El informe tiene un repertorio fijo de expresiones que señalan en qué apartado se está. Usarlas ahorra explicaciones y evita el tono personal, que en este género se lee como falta de rigor.',
          table: {
            headers: ['Para', 'Fórmula'],
            rows: [
              ['presentar el objeto', 'El presente informe analiza…'],
              ['citar la fuente', 'Los datos proceden de… / según el registro interno'],
              ['presentar un resultado', 'Se observa que… / Los resultados muestran…'],
              ['comparar', 'frente a… / en comparación con el mismo periodo'],
              ['concluir', 'De lo anterior se desprende que…'],
              ['recomendar', 'Convendría… / Se recomienda…'],
            ],
          },
        },
        {
          id: 'esi8-p5-cloze',
          type: 'CLOZE',
          instruction: 'Complete el informe con las fórmulas del recuadro.',
          wordBank: ['El presente informe', 'proceden', 'Se observa', 'frente a', 'se desprende'],
          caseSensitive: false,
          segments: [
            { kind: 'GAP', gapId: 'c1', solution: ['El presente informe'], width: 20 },
            {
              kind: 'TEXT',
              text: ' analiza las bajas por enfermedad en los tres centros. Los datos ',
            },
            { kind: 'GAP', gapId: 'c2', solution: ['proceden'], width: 9 },
            { kind: 'TEXT', text: ' del registro de personal del último ejercicio. ' },
            { kind: 'GAP', gapId: 'c3', solution: ['Se observa'], width: 11 },
            {
              kind: 'TEXT',
              text: ' una concentración en el centro de logística: 9,1 días por empleado, ',
            },
            { kind: 'GAP', gapId: 'c4', solution: ['frente a'], width: 9 },
            { kind: 'TEXT', text: ' 4,4 en los otros dos. De lo anterior ' },
            { kind: 'GAP', gapId: 'c5', solution: ['se desprende'], width: 13 },
            { kind: 'TEXT', text: ' que el problema no es general, sino de ese centro.' },
          ],
        },
        {
          id: 'esi8-p5-match-apartados',
          type: 'MATCHING',
          instruction: 'Relacione cada frase con el apartado del informe al que pertenece.',
          left: [
            { id: 'j1', text: 'Se han revisado los 1 240 partes de incidencia del año 2025.' },
            { id: 'j2', text: 'El tiempo medio de resolución fue de 4,3 horas.' },
            {
              id: 'j3',
              text: 'De lo anterior se desprende que el cuello de botella está en la noche.',
            },
            { id: 'j4', text: 'Convendría incorporar un segundo técnico en ese turno.' },
          ],
          right: [
            { id: 'k1', text: 'Metodología' },
            { id: 'k2', text: 'Resultados' },
            { id: 'k3', text: 'Conclusiones' },
            { id: 'k4', text: 'Recomendaciones' },
          ],
          solution: [
            { leftId: 'j1', rightId: 'k1' },
            { leftId: 'j2', rightId: 'k2' },
            { leftId: 'j3', rightId: 'k3' },
            { leftId: 'j4', rightId: 'k4' },
          ],
        },
        {
          id: 'esi8-p5-writing',
          type: 'WRITING',
          instruction: 'Escriba un informe breve.',
          prompt:
            'Usted trabaja en una cadena de seis librerías. Estos son los datos del año: la facturación total subió un 4 %, pero las dos tiendas de centro comercial cayeron un 11 % mientras que las cuatro de barrio subieron un 9 %. Las ventas por internet pasaron del 6 % al 14 % del total. Escriba un informe de 180 a 280 palabras con los cinco apartados (objeto, metodología, resultados, conclusiones, recomendaciones). Mantenga los datos sin valorar en resultados y reserve el juicio para las conclusiones.',
          minWords: 180,
          maxWords: 300,
          aiFeedback: true,
          sampleAnswer:
            'Objeto. El presente informe analiza la evolución de las ventas de las seis librerías de la cadena durante el ejercicio 2025, por encargo de la dirección comercial.\n\nMetodología. Se han revisado los datos de facturación mensual de cada establecimiento y los registros de la tienda en línea. No se incluyen las ventas a bibliotecas, que se facturan por otra vía.\n\nResultados. La facturación conjunta creció un 4 % respecto al año anterior. El resultado, sin embargo, no es homogéneo: las dos librerías situadas en centros comerciales descendieron un 11 %, mientras que las cuatro de barrio crecieron un 9 %. Las ventas por internet pasaron de representar el 6 % del total al 14 %, con el mayor incremento en el último trimestre.\n\nConclusiones. De lo anterior se desprende que el crecimiento de la cadena procede íntegramente de las tiendas de barrio y del canal en línea, y que compensa la caída de los centros comerciales. El modelo de gran superficie, que hace cinco años sostenía la cuenta de resultados, es hoy la parte que resta.\n\nRecomendaciones. Convendría revisar la renovación de los dos contratos de alquiler en centro comercial, que vencen en marzo, antes de comprometer otro periodo largo. Sería asimismo recomendable reforzar la logística del canal en línea, cuyo crecimiento se ha producido hasta ahora sin inversión específica, y estudiar la apertura de un quinto local de barrio en el distrito norte.',
        },
      ],
    },
  },
];
