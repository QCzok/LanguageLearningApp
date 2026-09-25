import type { UnitSeed } from './chapter-beginner-1';

/**
 * Spanisch, Advanced, Kapitel 9: „Estilo y registro“
 *
 * Fünf Seiten. Kapitel 1 hat das Register vom Dialekt getrennt, Kapitel 2
 * und 8 haben zwei hohe Register geübt. Hier wird die ganze Skala
 * durchlaufen: vom Kondolenzschreiben bis zur Sprachnachricht unter
 * Freunden – und zurück. Ziel ist nicht, jedes Register zu beherrschen,
 * sondern es zu halten und bewusst zu wechseln.
 *
 * Aufbau: Seite 1 die Registerskala und ihre Wortpaare, Seite 2 das
 * gesprochene Umgangsspanisch, Seite 3 die formelle Höflichkeit, Seite 4
 * das Umschreiben eines Inhalts in mehrere Register, Seite 5 der bewusste
 * Registerbruch und eine eigene Umformung.
 *
 * Umgangssprachliches ist, wo es regional gebunden ist, als solches
 * gekennzeichnet. Sämtliche Texte sind eigenständig verfasst.
 */
const v = 1;

export const SPANISH_ADVANCED_9_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – die Registerskala.
  {
    order: 1,
    title: 'La escala de registros',
    subtitle: 'Von feierlich bis vulgär',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'esa9-p1-h1', type: 'HEADING', level: 1, text: 'La escala de registros' },
        {
          id: 'esa9-p1-intro',
          type: 'TEXT',
          text: '«Falleció», «murió», «se fue», «la palmó». Las cuatro formas comunican el mismo hecho y ninguna es incorrecta. Lo que las distingue es la situación en la que resultan adecuadas. Un hablante nativo cambia de registro varias veces al día sin pensarlo; el aprendiz avanzado, en cambio, suele quedarse en un registro medio que funciona en todas partes y no brilla en ninguna.',
        },
        {
          id: 'esa9-p1-info-escala',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Cinco escalones',
          text: 'La escala es continua, pero cinco puntos de referencia bastan para orientarse. El registro solemne aparece en discursos, liturgia y textos jurídicos; el formal, en la correspondencia profesional y la prensa; el neutro, en la conversación entre desconocidos; el coloquial, entre amigos y familia; el vulgar, en contextos de mucha confianza o de agresividad. Lo que más delata el registro es el léxico, pero también la sintaxis: el coloquial prefiere frases cortas y yuxtapuestas; el formal, la subordinación.',
          table: {
            headers: ['Solemne', 'Formal', 'Neutro', 'Coloquial', 'Jerga o vulgar'],
            rows: [
              ['fallecer', 'morir', 'morir', 'irse', 'palmarla'],
              ['ingerir', 'consumir', 'comer', 'zampar', 'jamar (Esp.)'],
              ['el cónyuge', 'el esposo', 'el marido', 'mi media naranja', '—'],
              ['el óbolo', 'la aportación', 'el dinero', 'la pasta (Esp.) / la plata (Am.)', 'la guita (Arg.)'],
              ['la morada', 'el domicilio', 'la casa', 'el depa (Méx.) / el piso (Esp.)', '—'],
            ],
          },
        },
        {
          id: 'esa9-p1-match',
          type: 'MATCHING',
          instruction: 'Relacione cada palabra con su equivalente en registro formal.',
          left: [
            { id: 'a1', text: 'currar (Esp.) / chambear (Méx., Perú)' },
            { id: 'a2', text: 'un montón de' },
            { id: 'a3', text: 'flipar (Esp.)' },
            { id: 'a4', text: 'mandar a alguien a paseo' },
            { id: 'a5', text: 'la movida' },
          ],
          right: [
            { id: 'b1', text: 'trabajar' },
            { id: 'b2', text: 'numerosos' },
            { id: 'b3', text: 'sorprenderse' },
            { id: 'b4', text: 'rechazar a alguien de forma tajante' },
            { id: 'b5', text: 'la situación, el asunto' },
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
          id: 'esa9-p1-choice',
          type: 'CHOICE',
          instruction: 'Elija la forma adecuada a la situación.',
          question: 'Escribe una nota de pésame a la familia de un compañero de trabajo. ¿Qué frase corresponde?',
          options: [
            { id: 'c1', text: 'Siento mucho que tu padre la haya palmado.' },
            { id: 'c2', text: 'Lamento profundamente el fallecimiento de tu padre y te acompaño en estos momentos.' },
            { id: 'c3', text: 'Me enteré de que tu padre murió. ¿Qué tal lo llevas?' },
            { id: 'c4', text: 'Por medio de la presente se le comunica el pésame por el óbito de su progenitor.' },
          ],
          multiple: false,
          solution: ['c2'],
          explanation:
            'Una nota de pésame a un compañero pide un registro formal pero cálido. La primera es vulgar y ofensiva; la tercera, demasiado informal; la cuarta, tan solemne y burocrática que suena fría.',
        },
        {
          id: 'esa9-p1-cloze',
          type: 'CLOZE',
          instruction: 'Complete con la forma formal.',
          wordBank: ['domicilio', 'fallecido', 'numerosos', 'abonar'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Coloquial: «Me mudé de casa.» → Formal: He cambiado de ' },
            { kind: 'GAP', gapId: 'g1', solution: ['domicilio'], width: 10 },
            { kind: 'TEXT', text: '. «Se ha muerto el abuelo de Ana.» → Ha ' },
            { kind: 'GAP', gapId: 'g2', solution: ['fallecido'], width: 10 },
            { kind: 'TEXT', text: ' el abuelo de Ana. «Vinieron un montón de clientes.» → Acudieron ' },
            { kind: 'GAP', gapId: 'g3', solution: ['numerosos'], width: 10 },
            { kind: 'TEXT', text: ' clientes. «Hay que pagar antes del lunes.» → Deberá ' },
            { kind: 'GAP', gapId: 'g4', solution: ['abonar'], width: 7 },
            { kind: 'TEXT', text: ' el importe antes del lunes.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – das gesprochene Umgangsspanisch.
  {
    order: 2,
    title: 'Lo coloquial',
    subtitle: 'Wie Spanisch unter Freunden klingt',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'esa9-p2-h1', type: 'HEADING', level: 1, text: 'Lo coloquial' },
        {
          id: 'esa9-p2-intro',
          type: 'TEXT',
          text: 'La lengua coloquial no es una versión descuidada de la formal: tiene sus propias reglas, y quien no las conoce suena a libro incluso cuando no comete ningún error. Se caracteriza por la economía (se abrevia todo lo que el contexto aclara), la expresividad (se intensifica y se exagera) y la interacción (se comprueba constantemente que el otro sigue ahí).',
        },
        {
          id: 'esa9-p2-dialogue',
          type: 'DIALOGUE',
          title: 'Dos amigas en Madrid',
          lines: [
            { speaker: 'Irene', text: '¿Qué tal el finde?' },
            { speaker: 'Marta', text: 'Buah, fatal. O sea, el sábado bien, pero el domingo… no te lo vas a creer.' },
            { speaker: 'Irene', text: 'A ver, cuenta.' },
            { speaker: 'Marta', text: 'Pues nada, que quedo con Dani para ir a la sierra, y el tío me deja tirada a última hora. En plan, media hora antes.' },
            { speaker: 'Irene', text: '¿En serio? Qué morro tiene.' },
            { speaker: 'Marta', text: 'Ya ves. Total, que me quedé en casa viendo series. Súper triste todo.' },
          ],
        },
        {
          id: 'esa9-p2-info-rasgos',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Rasgos del español coloquial',
          text: 'Los marcadores discursivos organizan la conversación: «o sea» reformula, «pues nada» arranca un relato, «total, que» resume y concluye, «en plan» (Esp.) introduce una aproximación o una cita. El «que» inicial («que quedo con Dani…») retoma el hilo de la narración. El presente histórico da viveza al relato. Y abundan los acortamientos y los intensificadores.',
          table: {
            headers: ['Rasgo', 'Ejemplos'],
            rows: [
              ['acortamiento', 'el finde, la profe, el cole, la tele, el boli'],
              ['intensificador', 'súper, re- (Arg.: rebueno), muy muy, un montón'],
              ['marcador de relato', 'pues nada, total que, resulta que'],
              ['marcador de contacto', '¿sabes?, ¿viste? (Arg.), ¿no?, ¿me entiendes?'],
              ['presente histórico', 'y el tío me deja tirada'],
              ['expresiones valorativas', 'qué morro, qué fuerte, qué padre (Méx.), qué bacán (Chile, Perú)'],
            ],
          },
        },
        {
          id: 'esa9-p2-match',
          type: 'MATCHING',
          instruction: 'Relacione cada marcador con su función en el diálogo.',
          left: [
            { id: 'm1', text: 'O sea' },
            { id: 'm2', text: 'Pues nada, que…' },
            { id: 'm3', text: 'Total, que…' },
            { id: 'm4', text: 'A ver, cuenta.' },
          ],
          right: [
            { id: 'n1', text: 'reformular o precisar lo dicho' },
            { id: 'n2', text: 'arrancar el relato' },
            { id: 'n3', text: 'resumir y cerrar' },
            { id: 'n4', text: 'invitar al otro a hablar' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'n1' },
            { leftId: 'm2', rightId: 'n2' },
            { leftId: 'm3', rightId: 'n3' },
            { leftId: 'm4', rightId: 'n4' },
          ],
        },
        {
          id: 'esa9-p2-choice',
          type: 'CHOICE',
          instruction: 'Elija la interpretación correcta.',
          question: 'En el diálogo, Irene dice «Qué morro tiene». ¿Qué quiere decir?',
          options: [
            { id: 'q1', text: 'Que Dani tiene una cara peculiar.' },
            { id: 'q2', text: 'Que Dani es un descarado: ha actuado sin consideración y sin vergüenza.' },
            { id: 'q3', text: 'Que Dani tiene mucha suerte.' },
            { id: 'q4', text: 'Que Dani está enfadado.' },
          ],
          multiple: false,
          solution: ['q2'],
          explanation:
            '«Tener morro» (Esp.) significa tener descaro, aprovecharse de los demás sin reparo. Es un ejemplo típico de expresión coloquial que no se deduce del significado literal de «morro» (hocico, labios).',
        },
        {
          id: 'esa9-p2-cloze',
          type: 'CLOZE',
          instruction: 'Complete el relato coloquial con los marcadores.',
          wordBank: ['Pues nada', 'resulta que', 'o sea', 'Total, que', '¿sabes?'],
          caseSensitive: false,
          segments: [
            { kind: 'GAP', gapId: 'k1', solution: ['Pues nada'], width: 10 },
            { kind: 'TEXT', text: ', llego a la oficina y ' },
            { kind: 'GAP', gapId: 'k2', solution: ['resulta que'], width: 12 },
            { kind: 'TEXT', text: ' la reunión era ayer. Ayer, ' },
            { kind: 'GAP', gapId: 'k3', solution: ['o sea'], width: 6 },
            { kind: 'TEXT', text: ', que me la perdí entera. Y el jefe ni me había avisado, ' },
            { kind: 'GAP', gapId: 'k4', solution: ['¿sabes?'], width: 8 },
            { kind: 'TEXT', text: ' ' },
            { kind: 'GAP', gapId: 'k5', solution: ['Total, que'], width: 11 },
            { kind: 'TEXT', text: ' me tocó pedir perdón a mí.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – formelle Höflichkeit.
  {
    order: 3,
    title: 'La cortesía formal',
    subtitle: 'Höflich, ohne steif zu werden',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'esa9-p3-h1', type: 'HEADING', level: 1, text: 'La cortesía formal' },
        {
          id: 'esa9-p3-intro',
          type: 'TEXT',
          text: 'La cortesía formal en español tiene fama de recargada, y en ciertos géneros lo es. Pero en la correspondencia profesional actual se tiende a una sobriedad amable: fórmulas de saludo y despedida estables, peticiones atenuadas y ninguna floritura. Lo difícil no es aprender las fórmulas, sino no pasarse.',
        },
        {
          id: 'esa9-p3-info-atenuacion',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Atenuar una petición',
          text: 'La petición directa en imperativo es aceptable entre iguales y en instrucciones, pero en un correo formal resulta brusca. El español atenúa con el condicional («¿podría…?»), el imperfecto de cortesía («quería pedirle…»), el subjuntivo en «quisiera», las perífrasis («le agradecería que + subjuntivo») y los adverbios («si fuera posible», «cuando le venga bien»).',
          table: {
            headers: ['Grado', 'Ejemplo'],
            rows: [
              ['directo', 'Mándeme el informe.'],
              ['pregunta', '¿Me manda el informe?'],
              ['condicional', '¿Podría mandarme el informe?'],
              ['imperfecto de cortesía', 'Quería pedirle que me mandara el informe.'],
              ['agradecimiento anticipado', 'Le agradecería que me enviara el informe cuando le sea posible.'],
            ],
          },
        },
        {
          id: 'esa9-p3-info-formulas',
          type: 'INFO',
          variant: 'TIP',
          title: 'Saludos y despedidas',
          text: 'En la correspondencia profesional, «Estimado/a + nombre» es la fórmula más extendida en todo el mundo hispánico; «Muy señor mío» queda ya para contextos muy protocolarios. La despedida más segura es «Un cordial saludo» o «Saludos cordiales»; «Atentamente» es algo más distante. En América se oyen además «Quedo atento a sus comentarios» y «Reciba un cordial saludo». En un correo interno entre colegas basta «Hola, Laura:» y «Un saludo».',
          table: {
            headers: ['Distancia', 'Saludo', 'Despedida'],
            rows: [
              ['máxima', 'Distinguido señor:', 'Atentamente,'],
              ['profesional', 'Estimada Sra. Ortega:', 'Un cordial saludo,'],
              ['colegas', 'Hola, Laura:', 'Un saludo,'],
            ],
          },
        },
        {
          id: 'esa9-p3-choice',
          type: 'CHOICE',
          instruction: 'Elija la petición adecuada.',
          question: 'Escribe por primera vez a una profesora de otra universidad para pedirle un artículo que no encuentra. ¿Qué frase es adecuada?',
          options: [
            { id: 'r1', text: 'Mándeme su artículo de 2021, que no lo encuentro.' },
            { id: 'r2', text: 'Le agradecería mucho que, si le fuera posible, me enviara una copia de su artículo de 2021.' },
            { id: 'r3', text: 'Oye, ¿me pasas el artículo ese del 2021?' },
            { id: 'r4', text: 'Por medio de la presente, se procede a solicitar la remisión del artículo de referencia.' },
          ],
          multiple: false,
          solution: ['r2'],
          explanation:
            'La segunda frase atenúa con «le agradecería», el imperfecto de subjuntivo y «si le fuera posible», sin volverse burocrática. La cuarta es formal, pero impersonal y fría para un primer contacto humano.',
        },
        {
          id: 'esa9-p3-cloze',
          type: 'CLOZE',
          instruction: 'Complete el correo formal.',
          wordBank: ['Estimado', 'quería', 'agradecería', 'enviara', 'cordial'],
          caseSensitive: false,
          segments: [
            { kind: 'GAP', gapId: 'f1', solution: ['Estimado'], width: 9 },
            { kind: 'TEXT', text: ' Sr. Lozano:\nLe escribo porque ' },
            { kind: 'GAP', gapId: 'f2', solution: ['quería'], width: 7 },
            { kind: 'TEXT', text: ' consultarle una duda sobre el presupuesto. Le ' },
            { kind: 'GAP', gapId: 'f3', solution: ['agradecería'], width: 12 },
            { kind: 'TEXT', text: ' que me ' },
            { kind: 'GAP', gapId: 'f4', solution: ['enviara', 'enviase'], width: 8 },
            { kind: 'TEXT', text: ' el desglose de los gastos cuando le sea posible.\nUn ' },
            { kind: 'GAP', gapId: 'f5', solution: ['cordial'], width: 8 },
            { kind: 'TEXT', text: ' saludo,\nNuria Blanco' },
          ],
        },
        {
          id: 'esa9-p3-ordering',
          type: 'ORDERING',
          instruction: 'Ordene las peticiones de la más directa a la más atenuada.',
          items: [
            { id: 'o1', text: 'Cierre la ventana.' },
            { id: 'o2', text: '¿Cierra la ventana?' },
            { id: 'o3', text: '¿Podría cerrar la ventana?' },
            { id: 'o4', text: '¿Le importaría cerrar la ventana, si no es molestia?' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4'],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – denselben Inhalt in mehreren Registern.
  {
    order: 4,
    title: 'Decir lo mismo de otra manera',
    subtitle: 'Einen Inhalt stilistisch umformen',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'esa9-p4-h1', type: 'HEADING', level: 1, text: 'Decir lo mismo de otra manera' },
        {
          id: 'esa9-p4-intro',
          type: 'TEXT',
          text: 'Cambiar de registro no es cambiar unas palabras por sus sinónimos. Cambia la sintaxis, el orden de la información, el grado de explicitud y la relación que se establece con quien lee. Compare las tres versiones del mismo aviso: el retraso de una entrega.',
        },
        {
          id: 'esa9-p4-text',
          type: 'TEXT',
          text: 'Formal: «Lamentamos comunicarle que, debido a una incidencia en nuestro almacén, su pedido sufrirá un retraso de aproximadamente tres días hábiles. Le rogamos disculpe las molestias.»\nNeutro: «Su pedido llegará unos tres días más tarde de lo previsto por un problema en el almacén. Sentimos las molestias.»\nColoquial: «Oye, que lo tuyo se retrasa, eh. Han tenido un lío en el almacén y tarda como tres días más. ¡Perdona!»',
        },
        {
          id: 'esa9-p4-info-cambios',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Qué cambia al cambiar de registro',
          text: 'Observe lo que se transforma entre las tres versiones. El tratamiento pasa de usted a tú. La causa se expresa con un conector formal («debido a») o con simple yuxtaposición. La cifra se matiza con «aproximadamente», «unos» o «como». Y la disculpa pasa de fórmula («le rogamos disculpe») a exclamación («¡perdona!»).',
          table: {
            headers: ['Elemento', 'Formal', 'Neutro', 'Coloquial'],
            rows: [
              ['tratamiento', 'usted', 'usted', 'tú'],
              ['causa', 'debido a', 'por', 'yuxtaposición'],
              ['aproximación', 'aproximadamente', 'unos', 'como'],
              ['disculpa', 'le rogamos disculpe', 'sentimos las molestias', '¡perdona!'],
              ['léxico', 'incidencia', 'problema', 'lío'],
            ],
          },
        },
        {
          id: 'esa9-p4-match',
          type: 'MATCHING',
          instruction: 'Relacione cada versión coloquial con su equivalente formal.',
          left: [
            { id: 'u1', text: 'No hay manera de pillar cita con el médico.' },
            { id: 'u2', text: 'Me han subido el alquiler un montón.' },
            { id: 'u3', text: 'El jefe se ha puesto hecho una fiera.' },
            { id: 'u4', text: 'Esto no hay quien lo entienda.' },
          ],
          right: [
            { id: 'v1', text: 'Resulta muy difícil obtener una cita médica.' },
            { id: 'v2', text: 'El alquiler ha experimentado un aumento considerable.' },
            { id: 'v3', text: 'El director ha reaccionado con gran enfado.' },
            { id: 'v4', text: 'El texto resulta prácticamente incomprensible.' },
          ],
          solution: [
            { leftId: 'u1', rightId: 'v1' },
            { leftId: 'u2', rightId: 'v2' },
            { leftId: 'u3', rightId: 'v3' },
            { leftId: 'u4', rightId: 'v4' },
          ],
        },
        {
          id: 'esa9-p4-choice',
          type: 'CHOICE',
          instruction: 'Elija la versión neutra.',
          question: 'Formal: «Se informa a los usuarios de que el servicio permanecerá inoperativo durante la jornada del sábado por labores de mantenimiento.» ¿Qué versión es neutra?',
          options: [
            { id: 'w1', text: 'Ojo, que el sábado esto no va, están arreglándolo.' },
            { id: 'w2', text: 'El sábado el servicio no funcionará porque estaremos haciendo tareas de mantenimiento.' },
            { id: 'w3', text: 'Se comunica la inoperatividad del servicio en la jornada sabatina.' },
            { id: 'w4', text: 'El sábado, nada de nada.' },
          ],
          multiple: false,
          solution: ['w2'],
          explanation:
            'La versión neutra conserva toda la información con un léxico corriente y una sintaxis sencilla. La primera y la cuarta son coloquiales; la tercera es todavía más formal que el original.',
        },
        {
          id: 'esa9-p4-cloze',
          type: 'CLOZE',
          instruction: 'Pase el aviso del registro coloquial al formal.',
          wordBank: ['debido a', 'aproximadamente', 'rogamos', 'incidencia'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '«Han tenido un lío con el sistema y va a tardar como una hora. ¡Perdonad!» → Lamentamos informarles de que, ' },
            { kind: 'GAP', gapId: 'x1', solution: ['debido a'], width: 9 },
            { kind: 'TEXT', text: ' una ' },
            { kind: 'GAP', gapId: 'x2', solution: ['incidencia'], width: 11 },
            { kind: 'TEXT', text: ' técnica, el servicio se restablecerá en ' },
            { kind: 'GAP', gapId: 'x3', solution: ['aproximadamente'], width: 16 },
            { kind: 'TEXT', text: ' una hora. Les ' },
            { kind: 'GAP', gapId: 'x4', solution: ['rogamos'], width: 8 },
            { kind: 'TEXT', text: ' disculpen las molestias.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – der bewusste Registerbruch; Wiederholung.
  {
    order: 5,
    title: 'Romper el registro',
    subtitle: 'Den Registerbruch gezielt einsetzen',
    estimatedMinutes: 34,
    content: {
      version: v,
      blocks: [
        { id: 'esa9-p5-h1', type: 'HEADING', level: 1, text: 'Romper el registro' },
        {
          id: 'esa9-p5-intro',
          type: 'TEXT',
          text: 'Un registro sostenido de principio a fin da coherencia; un cambio brusco llama la atención. Cuando es involuntario, parece un error. Cuando es deliberado, puede ser uno de los recursos más eficaces del estilo: el columnista que interrumpe un análisis económico con un «vamos, que nos han tomado el pelo» consigue en seis palabras lo que no lograría con un párrafo.',
        },
        {
          id: 'esa9-p5-info-efectos',
          type: 'INFO',
          variant: 'TIP',
          title: 'Para qué sirve un cambio de registro',
          text: 'Un descenso al coloquial en un texto formal crea complicidad o subraya una crítica. Un ascenso al solemne en un contexto trivial produce humor: la parodia se basa casi siempre en aplicar el registro de un género a un tema que no le corresponde. En ambos casos, el cambio funciona porque es breve y porque el resto del texto mantiene su registro.',
          table: {
            headers: ['Movimiento', 'Ejemplo', 'Efecto'],
            rows: [
              ['descenso', 'Las previsiones eran optimistas. Vamos, que nadie vio venir nada.', 'crítica, complicidad'],
              ['ascenso', 'Procedo a comunicar solemnemente que se ha acabado el café.', 'humor, parodia'],
              ['mezcla sostenida', 'Un informe técnico escrito con giros coloquiales', 'suele parecer descuido'],
            ],
          },
        },
        {
          id: 'esa9-p5-choice',
          type: 'CHOICE',
          instruction: 'Elija la interpretación correcta.',
          question: 'Un editorial muy formal sobre una reforma fiscal termina así: «En resumidas cuentas: que pague el de siempre». ¿Qué efecto tiene el final?',
          options: [
            { id: 'y1', text: 'Es un descuido: el autor no ha sabido mantener el registro.' },
            { id: 'y2', text: 'El descenso al registro coloquial condensa la crítica y crea complicidad con el lector.' },
            { id: 'y3', text: 'Indica que el autor está de acuerdo con la reforma.' },
            { id: 'y4', text: 'Es una cita textual del ministro.' },
          ],
          multiple: false,
          solution: ['y2'],
          explanation:
            'Tras un texto formal, la frase coloquial final funciona como un guiño: dice con la voz de la calle lo que el análisis ha mostrado con la voz técnica. Precisamente porque el resto es formal, se nota y se recuerda.',
        },
        {
          id: 'esa9-p5-cloze',
          type: 'CLOZE',
          instruction: 'Complete el resumen del capítulo.',
          wordBank: ['registro', 'marcadores', 'condicional', 'tratamiento', 'parodia', 'breve'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '«Fallecer» y «palmarla» se distinguen por el ' },
            { kind: 'GAP', gapId: 'z1', solution: ['registro'], width: 9 },
            { kind: 'TEXT', text: '. «Pues nada» y «total, que» son ' },
            { kind: 'GAP', gapId: 'z2', solution: ['marcadores'], width: 11 },
            { kind: 'TEXT', text: ' del relato coloquial. Una petición formal se atenúa con el ' },
            { kind: 'GAP', gapId: 'z3', solution: ['condicional'], width: 12 },
            { kind: 'TEXT', text: '. Al cambiar de registro cambia también el ' },
            { kind: 'GAP', gapId: 'z4', solution: ['tratamiento'], width: 12 },
            { kind: 'TEXT', text: ': de usted a tú. Aplicar el registro solemne a un tema trivial produce ' },
            { kind: 'GAP', gapId: 'z5', solution: ['parodia'], width: 8 },
            { kind: 'TEXT', text: '. Y un cambio de registro deliberado funciona cuando es ' },
            { kind: 'GAP', gapId: 'z6', solution: ['breve'], width: 6 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'esa9-p5-writing',
          type: 'WRITING',
          instruction: 'Escriba el mismo contenido en tres registros.',
          prompt:
            'La empresa en la que trabaja cierra la cafetería del edificio durante un mes por obras. Redacte tres versiones del aviso (en total, entre 180 y 260 palabras): (1) un comunicado formal para la plantilla, (2) un mensaje neutro para el tablón de anuncios y (3) un mensaje coloquial a un compañero de confianza. Después, en dos o tres frases, explique qué ha cambiado entre las versiones además del vocabulario.',
          minWords: 180,
          maxWords: 270,
          aiFeedback: true,
          sampleAnswer:
            '1. Comunicado formal\nEstimados compañeros:\nLes informamos de que, con motivo de las obras de reforma de la planta baja, la cafetería del edificio permanecerá cerrada del 1 al 30 de junio, ambos inclusive. Durante ese periodo, los empleados podrán hacer uso de las máquinas expendedoras de la segunda planta y disfrutarán de un descuento del 20 % en la cafetería del edificio contiguo. Lamentamos las molestias que esta situación pueda ocasionarles y agradecemos de antemano su comprensión.\nUn cordial saludo,\nDepartamento de Recursos Humanos\n\n2. Aviso neutro\nLa cafetería estará cerrada del 1 al 30 de junio por obras. Mientras tanto, pueden usar las máquinas de la segunda planta o ir a la cafetería del edificio de al lado, donde tenemos un 20 % de descuento. Sentimos las molestias.\n\n3. Mensaje coloquial\nOye, ¿te has enterado? Nos cierran la cafe todo junio por obras. Un mes entero sin nuestro cortado de las once… Dicen que nos hacen descuento en la de al lado, así que nada, nos toca cruzar la calle. ¿Bajamos juntos mañana y lo estrenamos?\n\nComentario\nAdemás del léxico, cambia el tratamiento (ustedes, ustedes, tú) y la estructura: el comunicado formal empieza por la causa y usa fórmulas fijas de apertura y cierre; el aviso neutro va directo a la información; el mensaje coloquial se centra en la experiencia compartida y termina con una propuesta.',
        },
      ],
    },
  },
];
