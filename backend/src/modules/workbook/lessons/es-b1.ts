import {
  INTERMEDIATE as I,
  GRAMMAR as G,
  choice,
  cloze,
  culture,
  dialogue,
  grammar,
  lessons,
  match,
  order,
  text,
  tip,
  vocabBuilder,
} from './builders';

const words = vocabBuilder('de');

/** Spanisch B1 – Intermediate, Kapitel 1 bis 6, dazu Subjuntivo und Imperativ aus dem Grammatikbuch. */
export const ES_B1 = lessons('es-b1', [
  // ------------------------------------------------ Capítulo 1: El trabajo
  {
    kind: 'VOCAB',
    title: 'La oferta de empleo',
    ref: [I, 1, 1],
    learn: [
      words('Vocabulario', [
        ['el puesto', 'die Stelle'],
        ['los requisitos', 'die Anforderungen'],
        ['la jornada completa / parcial', 'Vollzeit / Teilzeit'],
        ['el contrato temporal / indefinido', 'befristeter / unbefristeter Vertrag'],
        ['el sueldo bruto / neto', 'Brutto- / Nettogehalt'],
        ['se valorará', 'ist von Vorteil'],
        ['imprescindible', 'unbedingt erforderlich'],
      ]),
    ],
    test: [
      match('Relacione.', [
        ['imprescindible', 'sin eso no le llamarán'],
        ['se valorará', 'suma puntos, pero no es obligatorio'],
        ['brutos/mes', 'antes de impuestos'],
        ['contrato indefinido', 'sin fecha de fin'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Se busca librero',
    ref: [I, 1, 1],
    learn: [
      text(
        'Librería Altamar (Vigo) busca LIBRERO/A para su tienda del centro. Funciones: atención al público, pedidos a proveedores y organización de presentaciones de libros. Requisitos: experiencia mínima de un año en comercio; gallego y castellano. Imprescindible disponibilidad los sábados por la mañana. Se valorará formación en biblioteconomía. Ofrecemos: contrato indefinido a jornada parcial.',
      ),
    ],
    test: [
      choice('Lea el anuncio.', '¿Qué es obligatorio?', [
        'formación en biblioteconomía',
        '*poder trabajar los sábados por la mañana',
        'jornada completa',
      ]),
      choice('Lea el anuncio.', '¿Qué tipo de contrato ofrecen?', [
        'temporal a jornada completa',
        '*indefinido a jornada parcial',
        'de prácticas',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'La carta de presentación',
    ref: [I, 1, 2],
    learn: [
      grammar(
        'Tres párrafos',
        '1: a qué puesto se presenta y dónde lo vio. 2: qué sabe hacer y qué encaja con lo que piden. 3: qué pide usted ahora.',
      ),
      tip(
        'Apertura y cierre',
        'La carta formal se abre con dos puntos, no con coma: «Estimada señora Ferreiro:». Si no sabe el nombre: «Estimados señores:». Cierre: «Atentamente,» o «Un cordial saludo,».',
      ),
    ],
    test: [
      order('Ordene la carta.', [
        'Estimada señora Ferreiro:',
        'En relación con su anuncio, me dirijo a usted para presentar mi candidatura.',
        'Durante los últimos dos años he trabajado en una papelería.',
        'Quedo a su disposición para una entrevista.',
        'Atentamente,',
      ]),
      choice('Elija.', 'No sabe quién va a leer la carta. ¿Cómo empieza?', [
        'Hola:',
        '*Estimados señores:',
        'Querido señor,',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Le escribo, su anuncio',
    ref: [I, 1, 2],
    learn: [
      grammar(
        'Usted y ustedes',
        'El tratamiento formal usa la tercera persona del verbo, y eso arrastra pronombres y posesivos. El error más frecuente es pasar al «tú» a mitad de carta.',
        {
          headers: ['Informal', 'Formal (usted)'],
          rows: [
            ['¿Puedes enviarme…?', '¿Puede usted enviarme…?'],
            ['tu anuncio', 'su anuncio'],
            ['te escribo', 'le escribo'],
            ['gracias por tu tiempo', 'gracias por su tiempo'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete en registro formal.',
        'Estimada señora Ruiz: [le] escribo en relación con [su] anuncio. ¿[Puede] usted enviarme más información? Gracias por [su] tiempo.',
        ['te', 'tu', 'Puedes'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'He trabajado, trabajé, llevo trabajando',
    ref: [I, 1, 3],
    learn: [
      grammar(
        'Contar la experiencia',
        '«He trabajado» presenta la experiencia como parte de lo que usted trae hoy. «Trabajé» cierra una etapa, normalmente con fecha. «Trabajaba» es lo habitual de entonces. «Llevo trabajando» sigue ahora mismo.',
        {
          headers: ['Se dice', 'Cuándo', 'Ejemplo'],
          rows: [
            ['he trabajado', 'experiencia que cuenta', 'He trabajado en tres librerías.'],
            ['trabajé', 'etapa cerrada', 'Trabajé allí en 2021.'],
            ['trabajaba', 'lo habitual', 'Me encargaba de la caja.'],
            ['llevo trabajando', 'sigue ahora', 'Llevo dos años trabajando allí.'],
          ],
        },
      ),
    ],
    test: [
      match('¿Qué dice la frase?', [
        ['Trabajé en una tienda de fotos en 2022.', 'etapa cerrada'],
        ['He trabajado con proveedores.', 'experiencia que cuenta hoy'],
        ['Llevo un año organizando talleres.', 'sigue ahora mismo'],
        ['Me encargaba de los pedidos.', 'lo habitual de entonces'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Llevo un año, suelo hacer',
    ref: [I, 1, 3],
    learn: [
      grammar(
        'llevar + gerundio, soler + infinitivo',
        'Donde el alemán dice «seit», el español dice «llevo»: «Llevo un año organizando talleres». «soler» dice que algo es lo habitual: «Suelo hacer el pedido los lunes». En pasado: «solía».',
      ),
    ],
    test: [
      cloze(
        'Complete.',
        '[Llevo] dos años en la papelería. [Suelo] hacer el pedido los lunes. Antes [solía] cerrar yo la tienda.',
        ['Suele', 'Llevaba'],
      ),
      order('Ordene.', ['Llevo', 'seis', 'meses', 'estudiando', 'gallego.']),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Más de mil euros',
    ref: [I, 1, 4],
    learn: [
      grammar(
        'Comparar condiciones',
        '«más / menos … que». Delante de un número, «que» se cambia por «de»: «gano más de mil euros». Irregulares: mejor, peor, mayor, menor.',
      ),
      text(
        'OFERTA A: gestoría del centro; 1 500 € brutos; horario partido de 9 a 14 y de 16 a 19; quince minutos andando; contrato temporal. OFERTA B: polígono a 25 km; 1 750 € brutos; jornada continua de 8 a 15; contrato indefinido; dos días de teletrabajo.',
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'En la oferta B se gana [más] que en la A. En la A trabajo [más de] ocho horas al día. El horario de B es [mejor] que el de A.',
        ['más que', 'más bueno'],
      ),
      choice('Lea las ofertas.', '¿Qué ventaja tiene la oferta A?', [
        'el sueldo',
        '*la distancia',
        'el contrato',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Condiciones de trabajo',
    ref: [I, 1, 4],
    learn: [
      words('Cómo es un trabajo', [
        ['el horario partido', 'geteilte Arbeitszeit'],
        ['las horas extra', 'die Überstunden'],
        ['el ambiente de trabajo', 'das Arbeitsklima'],
        ['la baja', 'die Krankschreibung'],
        ['el teletrabajo', 'die Telearbeit, Homeoffice'],
        ['estar quemado', 'ausgebrannt sein'],
        ['conciliar', 'Beruf und Familie vereinbaren'],
        ['el desplazamiento', 'der Arbeitsweg'],
      ]),
      tip(
        'Valorar',
        '«Merece la pena por el horario.» – «No me compensa por tan poco dinero.» – «Lo peor es el desplazamiento.» – «Lo bueno es que se sale a las tres.»',
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'Tardo una hora en el [desplazamiento]. Trabajo muchas [horas] extra y estoy [quemado]. Por eso no me [compensa].',
        ['baja', 'conciliar'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: '¿Me podrías mandar el archivo?',
    ref: [I, 1, 5],
    learn: [
      grammar(
        'Del imperativo al condicional',
        'Cuanto más lejos se pone la petición del presente, más suave suena.',
        {
          headers: ['Forma', 'Ejemplo', 'Cuándo'],
          rows: [
            ['imperativo', 'Mándame el archivo.', 'confianza, urgencia'],
            ['presente + poder', '¿Me mandas el archivo?', 'compañeros'],
            ['condicional', '¿Me podrías mandar el archivo?', 'neutro'],
            ['condicional formal', '¿Podría usted enviarme el archivo?', 'jefes, clientes'],
            ['muy formal', 'Le agradecería que me lo enviara hoy.', 'muy formal'],
          ],
        },
      ),
    ],
    test: [
      order('De más directo a más formal', [
        'Mándame el archivo.',
        '¿Me mandas el archivo?',
        '¿Me podrías mandar el archivo?',
        '¿Podría usted enviarme el archivo?',
      ]),
      choice('Elija.', 'Escribe a un cliente importante. ¿Qué frase usa?', [
        'Envíame la factura.',
        '*¿Podría enviarme la factura?',
        '¿Me mandas la factura?',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Un cambio de turno',
    ref: [I, 1, 5],
    learn: [
      dialogue('En la librería', [
        'Nerea: Oye, Brais, ¿tienes un momento? Quería pedirte una cosa.',
        'Brais: Dime.',
        'Nerea: ¿Te importaría cambiarme el turno del sábado? Es que tengo la boda de mi hermana.',
        'Brais: A ver… el sábado había quedado, pero puedo moverlo. ¿Tú me cubres el jueves siguiente?',
        'Nerea: Claro, sin problema. Te lo agradezco mucho.',
        'Brais: Nada. Pero díselo hoy a Ferreiro, que si se entera el viernes se enfada.',
      ]),
    ],
    test: [
      choice('Lea el diálogo.', '¿Por qué quiere Nerea cambiar el turno?', [
        'Está enferma.',
        '*Tiene la boda de su hermana.',
        'Tiene un examen.',
      ]),
      choice('Lea el diálogo.', '¿Qué pide Brais a cambio?', [
        '*Que Nerea le cubra el jueves.',
        'Dinero.',
        'Nada.',
      ]),
      choice('¿Qué fórmula suaviza la petición?', 'Elija.', [
        'Dime.',
        '*¿Te importaría…?',
        'Ni se te ocurra.',
      ]),
    ],
  },

  // ------------------------------------------------ Capítulo 2: El subjuntivo
  {
    kind: 'GRAMMAR',
    title: '¿Para qué sirve el subjuntivo?',
    ref: [I, 2, 1],
    learn: [
      grammar(
        'Los hechos y lo demás',
        'El indicativo informa. El subjuntivo aparece cuando el verbo principal no informa, sino que desea, valora, duda o pide.',
        {
          headers: ['Indicativo: se informa', 'Subjuntivo: no se informa'],
          rows: [
            ['Sé que viene el sábado.', 'Quiero que venga el sábado.'],
            ['Es verdad que llueve.', 'Espero que no llueva.'],
            ['Creo que tiene razón.', 'Dudo que tenga razón.'],
          ],
        },
      ),
    ],
    test: [
      match('¿Indicativo o subjuntivo?', [
        ['Sé que …', 'indicativo'],
        ['Quiero que …', 'subjuntivo'],
        ['Dudo que …', 'subjuntivo'],
        ['Es verdad que …', 'indicativo'],
        ['Espero que …', 'subjuntivo'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Quiero ir – quiero que vayas',
    ref: [I, 2, 1],
    learn: [
      grammar(
        'No siempre hace falta «que»',
        'Si las dos partes tienen el mismo sujeto, se usa el infinitivo: «Quiero ir al cine». Solo con sujetos distintos: «que» + subjuntivo: «Quiero que vayas al cine».',
      ),
    ],
    test: [
      choice('Elija.', 'Yo quiero y yo descanso:', ['Quiero que descanse.', '*Quiero descansar.']),
      choice('Elija.', 'Yo espero, tú llegas a tiempo:', [
        'Espero llegar a tiempo.',
        '*Espero que llegues a tiempo.',
      ]),
      choice('Elija.', 'Necesito … (yo, dormir más).', ['*dormir más', 'que duerma más']),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Del «yo» al subjuntivo',
    ref: [I, 2, 2],
    learn: [
      grammar(
        'Cómo se forma',
        'Tome el «yo» del presente, quite la -o y añada las terminaciones contrarias: -ar toma -e, -er/-ir toman -a. Lo irregular del «yo» se hereda: tengo → tenga, conozco → conozca.',
        {
          headers: ['', 'hablar', 'comer', 'tener'],
          rows: [
            ['yo', 'hable', 'coma', 'tenga'],
            ['tú', 'hables', 'comas', 'tengas'],
            ['él / ella', 'hable', 'coma', 'tenga'],
            ['nosotros', 'hablemos', 'comamos', 'tengamos'],
            ['ellos', 'hablen', 'coman', 'tengan'],
          ],
        },
      ),
    ],
    test: [
      match('Presente (yo) y subjuntivo', [
        ['hago', 'haga'],
        ['digo', 'diga'],
        ['salgo', 'salga'],
        ['conozco', 'conozca'],
        ['pido', 'pida'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'sea, esté, vaya, haya, sepa, dé',
    ref: [I, 2, 2],
    learn: [
      grammar(
        'Los seis que no siguen la regla',
        'Su «yo» no termina en -o (soy, voy, sé, estoy, doy, he).',
        {
          headers: ['Infinitivo', 'Subjuntivo', 'Ejemplo'],
          rows: [
            ['ser', 'sea', 'Espero que sea fácil.'],
            ['estar', 'esté', 'Ojalá esté abierto.'],
            ['ir', 'vaya', 'Quiero que vayas tú.'],
            ['haber', 'haya', 'No creo que haya sitio.'],
            ['saber', 'sepa', 'Dudo que lo sepa.'],
            ['dar', 'dé', 'Espero que le dé tiempo.'],
          ],
        },
      ),
      tip('Ortografía', 'buscar → busque, llegar → llegue, empezar → empiece.'),
    ],
    test: [
      cloze(
        'Complete con el subjuntivo.',
        'Ojalá [esté] abierto. Espero que el examen [sea] fácil. No creo que [haya] sitio. Quiero que [vayas] tú.',
        ['está', 'es'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Quiero que, espero que, ojalá',
    ref: [I, 2, 3],
    learn: [
      grammar(
        'Deseos y peticiones',
        'Querer, esperar, pedir, aconsejar, recomendar, prohibir, permitir + que + subjuntivo. «ojalá» siempre lleva subjuntivo y no necesita «que».',
        {
          headers: ['Construcción', 'Ejemplo'],
          rows: [
            ['querer que', 'Quiero que me llames.'],
            ['pedir a alguien que', 'Le pido que me llame.'],
            ['aconsejar que', 'Te aconsejo que descanses.'],
            ['ojalá', 'Ojalá no llueva.'],
          ],
        },
      ),
      culture('Ojalá', 'Viene del árabe y significaba «si Dios quiere».'),
    ],
    test: [
      cloze(
        'Complete.',
        'Te aconsejo que [descanses]. Mi madre quiere que [duerma] ocho horas. Ojalá no [llueva] mañana.',
        ['descansas', 'duermo', 'llueve'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'La noche antes del examen',
    ref: [I, 2, 3],
    learn: [
      dialogue('Lucía y Diego', [
        'Lucía: Ojalá mañana no me toque el tema cinco. Es el único que no llevo bien.',
        'Diego: Te aconsejo que lo mires media hora esta noche y que te acuestes pronto.',
        'Lucía: Mi madre quiere que duerma ocho horas.',
        'Diego: Pues tiene razón. Prefiero que llegues descansada.',
        'Lucía: Oye, ¿te importa que te llame mañana al salir?',
        'Diego: Claro. Espero que me cuentes que ha ido bien.',
      ]),
    ],
    test: [
      choice('Lea el diálogo.', '¿Qué le preocupa a Lucía?', [
        'todo el examen',
        '*el tema cinco',
        'llegar tarde',
      ]),
      choice('Lea el diálogo.', '¿Qué le aconseja Diego?', [
        'estudiar toda la noche',
        '*mirar el tema media hora y acostarse pronto',
        'no ir al examen',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Es normal que estés cansado',
    ref: [I, 2, 4],
    learn: [
      grammar('Valorar', 'La valoración no pide nada, comenta – y aun así lleva subjuntivo.', {
        headers: ['Fórmula', 'Ejemplo'],
        rows: [
          ['es normal que', 'Es normal que estés cansado.'],
          ['es importante que', 'Es importante que llegues pronto.'],
          ['es una pena que', 'Es una pena que no puedas venir.'],
          ['me parece bien que', 'Me parece bien que lo digas.'],
        ],
      }),
      tip(
        'En el pasado',
        'Si lo valorado ya pasó: «haya» + participio. «Me alegra que hayas venido.»',
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'Es una pena que no [puedas] venir. Es importante que [llegues] pronto. Me alegra que [hayas] venido.',
        ['puedes', 'llegas', 'has'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Creo que viene – no creo que venga',
    ref: [I, 2, 4],
    learn: [
      grammar(
        'La negación cambia el modo',
        'Los verbos de certeza informan en afirmativo (indicativo). Al negarlos dejan de informar (subjuntivo). «Dudar» lleva subjuntivo siempre.',
        {
          headers: ['Afirmativo', 'Negativo'],
          rows: [
            ['Creo que viene.', 'No creo que venga.'],
            ['Es verdad que lo sabe.', 'No es verdad que lo sepa.'],
            ['Estoy seguro de que funciona.', 'No estoy seguro de que funcione.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        '¿Indicativo o subjuntivo?',
        'Creo que Ana [tiene] razón. No creo que Luis [tenga] razón. Dudo que [lleguen] a tiempo.',
        ['llegan'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Quizá, a lo mejor, puede que',
    ref: [I, 2, 4],
    learn: [
      tip(
        'Adverbios de duda',
        '«quizá» y «tal vez» admiten los dos modos (con subjuntivo, más duda). «a lo mejor» y «seguramente» llevan siempre indicativo. «puede que» lleva siempre subjuntivo.',
      ),
    ],
    test: [
      match('¿Qué modo?', [
        ['A lo mejor …', 'siempre indicativo'],
        ['Puede que …', 'siempre subjuntivo'],
        ['Quizá …', 'los dos'],
      ]),
      choice('Elija.', 'A lo mejor … mañana.', ['*viene', 'venga']),
      choice('Elija.', 'Puede que … tarde.', ['llega', '*llegue']),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Dar una opinión',
    ref: [I, 2, 5],
    learn: [
      words('Expresar una opinión', [
        ['en mi opinión', 'meiner Meinung nach'],
        ['desde mi punto de vista', 'aus meiner Sicht'],
        ['estar de acuerdo con', 'einverstanden sein mit'],
        ['llevar / tener razón', 'recht haben'],
        ['por un lado… por otro', 'einerseits… andererseits'],
        ['lo que pasa es que', 'die Sache ist die, dass'],
        ['estar en contra de', 'dagegen sein'],
      ]),
    ],
    test: [
      cloze(
        'Complete.',
        'Por un [lado] el móvil es útil, por [otro] distrae. En eso llevas [razón]. Yo estoy en [contra] de prohibirlo.',
        ['punto', 'acuerdo'],
      ),
    ],
  },

  // ------------------------------------------------ Capítulo 3: Noticias
  {
    kind: 'VOCAB',
    title: 'La prensa',
    ref: [I, 3, 1],
    learn: [
      words('Vocabulario', [
        ['el titular', 'die Schlagzeile'],
        ['la entradilla', 'der Vorspann'],
        ['la fuente', 'die Quelle'],
        ['el bulo', 'die Falschmeldung'],
        ['difundir', 'verbreiten'],
        ['desmentir', 'dementieren'],
        ['la portada', 'die Titelseite'],
      ]),
      tip(
        'La pirámide invertida',
        'La noticia va de lo más importante a lo menos. El titular y el primer párrafo contienen lo esencial: qué, quién, cuándo, dónde y por qué.',
      ),
    ],
    test: [
      match('Relacione.', [
        ['el titular', 'el hecho, en una línea'],
        ['la entradilla', 'las cinco preguntas'],
        ['el bulo', 'una noticia falsa'],
        ['desmentir', 'negar algo publicado'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Vuelve el tren nocturno',
    ref: [I, 3, 1],
    learn: [
      text(
        'El tren nocturno entre Valencia y Gijón volverá a circular en junio. El servicio, suprimido en 2019 por falta de viajeros, se recuperará el próximo 15 de junio con tres frecuencias semanales. Así lo anunció ayer la consejera de Transportes, Elena Vidal, durante la presentación del plan ferroviario en la estación de Zamora.',
      ),
    ],
    test: [
      match('Las cinco preguntas', [
        ['¿Qué?', 'vuelve el tren nocturno'],
        ['¿Quién lo anunció?', 'la consejera Elena Vidal'],
        ['¿Cuándo empieza?', 'el 15 de junio'],
        ['¿Por qué se suprimió?', 'por falta de viajeros'],
      ]),
      choice('Lea la noticia.', '¿Cuántas veces a la semana circulará?', [
        'cada día',
        '*tres',
        'una',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Resumir sin cambiar el sentido',
    ref: [I, 3, 2],
    learn: [
      tip(
        'Verbos para resumir',
        'Evitan que todo suene igual de seguro: «anunciar» (está decidido), «proponer» (falta aprobarlo), «pedir / reclamar» (lo quiere alguien que no decide), «confirmar», «desmentir», «advertir de».',
      ),
    ],
    test: [
      match('¿Qué verbo?', [
        ['Está decidido y se comunica.', 'anunciar'],
        ['Se plantea, falta aprobarlo.', 'proponer'],
        ['Se niega algo publicado antes.', 'desmentir'],
        ['Se avisa de un riesgo.', 'advertir de'],
      ]),
      choice('Elija.', '«La universidad estudia adelantar las clases.» En el resumen:', [
        'La universidad adelanta las clases.',
        '*La universidad se plantea adelantar las clases.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Dice que está cansada',
    ref: [I, 3, 3],
    learn: [
      grammar(
        'Estilo indirecto con verbo en presente',
        'Si el verbo introductor está en presente, no cambia el tiempo: solo la persona y el posesivo.',
        {
          headers: ['Palabras exactas', 'Estilo indirecto'],
          rows: [
            ['«Estoy cansada.»', 'Dice que está cansada.'],
            ['«Vendré el lunes.»', 'Dice que vendrá el lunes.'],
            ['«He perdido mi móvil.»', 'Dice que ha perdido su móvil.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        '«No me gusta.» → Dice que no [le] gusta. «Mi hermano viene.» → Dice que [su] hermano viene.',
        ['me', 'mi'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Dijo que trabajaba allí',
    ref: [I, 3, 3],
    learn: [
      grammar(
        'Con verbo en pasado, los tiempos retroceden',
        'Cada tiempo baja un escalón. Imperfecto y pluscuamperfecto ya no bajan más.',
        {
          headers: ['Palabras exactas', 'Dijo que…'],
          rows: [
            ['«Trabajo aquí.»', 'trabajaba allí'],
            ['«He terminado.»', 'había terminado'],
            ['«Llegué tarde.»', 'había llegado tarde'],
            ['«Iré.»', 'iría'],
          ],
        },
      ),
    ],
    test: [
      match('Palabras exactas y estilo indirecto (dijo que…)', [
        ['«La caldera está bien.»', 'estaba bien'],
        ['«Volveré el jueves.»', 'volvería el jueves'],
        ['«No he traído la pieza.»', 'no había traído la pieza'],
        ['«Llegué a las diez.»', 'había llegado a las diez'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Me preguntó si…, me pidió que…',
    ref: [I, 3, 3],
    learn: [
      grammar(
        'Preguntas y peticiones',
        'Pregunta sí/no: «si». Pregunta abierta: conserva «qué, dónde, cuándo» con tilde. Una orden pasa a subjuntivo.',
        {
          headers: ['Palabras exactas', 'Estilo indirecto'],
          rows: [
            ['«¿Vienes?»', 'Me preguntó si iba.'],
            ['«¿Dónde vives?»', 'Me preguntó dónde vivía.'],
            ['«Llámame.»', 'Me pide que le llame. / Me pidió que le llamara.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        '«¿Estaréis en casa?» → Me preguntó [si] estaríamos en casa. «¿Cuándo vuelves?» → Me preguntó [cuándo] volvía. «Apagad la calefacción.» → Nos pide [que] la apaguemos.',
        ['cuando', 'qué'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Antes de reenviar',
    ref: [I, 3, 4],
    learn: [
      text(
        'Dos mensajes reenviados por un grupo de vecinos. A) «URGENTE: a partir del lunes el agua del barrio no será potable durante 3 días. Pásalo a todos tus contactos». B) «El ayuntamiento informa: el 14 de marzo se corta el agua entre las 9.00 y las 14.00 en las calles Mayor y Olivo por obras en la red. Comunicado en la web municipal, sección Avisos».',
      ),
      tip(
        'Señales de alarma',
        '«Pásalo a todos», mayúsculas y «URGENTE», «según varios expertos» sin nombre, falta de fecha, indignación rápida. Compruebe: fecha, medio, fuente, otros medios.',
      ),
    ],
    test: [
      choice('Lea los mensajes.', '¿Qué mensaje parece fiable?', ['A', '*B']),
      choice('Lea los mensajes.', '¿Qué señal de alarma tiene el mensaje A?', [
        'cita la web municipal',
        '*pide que se reenvíe a todos',
        'da calles concretas',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Todos los días, de vez en cuando',
    ref: [I, 3, 5],
    learn: [
      grammar(
        'Decir cada cuánto',
        '«todos los días» lleva artículo, «cada día» no. «de vez en cuando» es invariable.',
        {
          headers: ['Frecuencia', 'Expresiones'],
          rows: [
            ['siempre', 'todo el rato, constantemente'],
            ['mucho', 'todos los días, varias veces al día'],
            ['normal', 'a menudo, suelo + infinitivo'],
            ['poco', 'de vez en cuando'],
            ['nunca', 'casi nunca, no… nunca'],
          ],
        },
      ),
    ],
    test: [
      order('De más a menos', [
        'constantemente',
        'varias veces al día',
        'a menudo',
        'de vez en cuando',
        'casi nunca',
      ]),
      cloze(
        'Complete.',
        'Miro el móvil [todos] los días. Subo fotos [de] vez en cuando. Llevo dos horas [viendo] vídeos.',
        ['cada', 'ver'],
      ),
    ],
  },

  // ------------------------------------------------ Capítulo 4: Relaciones
  {
    kind: 'VOCAB',
    title: 'La gente de mi vida',
    ref: [I, 4, 1],
    learn: [
      words('Relaciones', [
        ['el conocido', 'der Bekannte'],
        ['la pareja', 'der Partner, das Paar'],
        ['llevarse bien / mal con', 'sich gut / schlecht verstehen mit'],
        ['hacer las paces', 'sich versöhnen'],
        ['echar de menos', 'vermissen'],
        ['contar con alguien', 'auf jemanden zählen'],
        ['dar plantón', 'versetzen'],
      ]),
    ],
    test: [
      cloze(
        'Complete.',
        'Me [llevo] muy bien con mi compañera de piso. Después de discutir, siempre hacemos las [paces]. Cuando estoy fuera, [echo] de menos a mi familia.',
        ['cuento', 'plantón'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'discutir no es besprechen',
    ref: [I, 4, 1],
    learn: [
      tip(
        'Tres parejas que se confunden',
        '«discutir» es reñir, no «besprechen» (eso es «hablar de»). «enfadado» es wütend, no gelangweilt («aburrido»). «echar de menos» es vermissen.',
      ),
    ],
    test: [
      match('¿Qué significa?', [
        ['discutir', 'streiten'],
        ['hablar de', 'besprechen'],
        ['estar enfadado', 'wütend sein'],
        ['estar aburrido', 'gelangweilt sein'],
        ['echar de menos', 'vermissen'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Me alegra que vengas',
    ref: [I, 4, 2],
    learn: [
      grammar(
        'Los verbos de sentimiento',
        'Con otro sujeto: subjuntivo. Con el mismo sujeto: infinitivo – «me alegra verte» / «me alegra que vengas». Muchos funcionan como «gustar». Ojo con las preposiciones: alegrarse DE, preocuparse POR, hartarse DE.',
        {
          headers: ['Tipo «gustar»', 'Tipo normal'],
          rows: [
            ['Me alegra que vengas.', 'Me alegro de que vengas.'],
            ['Me da pena que se vaya.', 'Siento que se vaya.'],
            ['Le sorprende que lo sepas.', 'Se sorprende de que lo sepas.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'Me alegro [de] que estés mejor. Me molesta que no [avise]. Estoy harto [de] que lo deje todo tirado.',
        ['avisa', 'por'],
      ),
      choice('Elija.', 'Me da pena … (yo me voy).', ['*irme', 'que me vaya']),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Subir y bajar la intensidad',
    ref: [I, 4, 2],
    learn: [
      tip(
        'De menos a más',
        'Elegir mal el grado convierte un comentario en una bronca. Para suavizar cualquier frase: «No me lo tomes a mal, pero…».',
      ),
    ],
    test: [
      order('De más suave a más fuerte', [
        'Me da un poco de rabia que…',
        'Me molesta que…',
        'Me fastidia bastante que…',
        'Estoy harto de que…',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Contar un conflicto',
    ref: [I, 4, 3],
    learn: [
      text(
        '«Era viernes y los dos veníamos de una semana horrible. Yo llevaba tres días durmiendo mal y ella acababa de discutir con su jefe. Llegué a casa, vi los platos de tres días en el fregadero y dije algo que no debía decir. Ella contestó, subí la voz y acabamos gritando por una tontería. Al final me fui a dar una vuelta.»',
      ),
      tip(
        'Los dos pasados',
        'El indefinido cuenta lo que pasó, una cosa detrás de otra. El imperfecto describe el fondo: cómo estaban las cosas.',
      ),
    ],
    test: [
      match('¿Fondo o acción?', [
        ['Era viernes.', 'fondo (imperfecto)'],
        ['Vi los platos en el fregadero.', 'acción (indefinido)'],
        ['Llevaba tres días durmiendo mal.', 'fondo (imperfecto)'],
        ['Me fui a dar una vuelta.', 'acción (indefinido)'],
      ]),
      choice('Lea el relato.', '¿Por qué empezó la discusión?', [
        'por dinero',
        '*por los platos sucios, tras una semana horrible',
        'por el jefe',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'No estoy de acuerdo',
    ref: [I, 4, 4],
    learn: [
      tip(
        'Discrepar sin romper nada',
        'Casi todas las fórmulas empiezan reconociendo algo del otro. Esa primera mitad permite que la segunda se escuche.',
      ),
      dialogue('El cuadrante de la limpieza', [
        'Rocío: Llevo tres semanas fregando yo sola.',
        'Iván: Hombre, tanto como sola… El martes fregué yo.',
        'Rocío: Vale. Pero entiéndeme: de veintiún días, uno.',
        'Nadia: A ver, ¿y si hacemos un cuadrante?',
      ]),
    ],
    test: [
      order('De más suave a más fuerte', [
        'No sé, yo lo veo de otra manera.',
        'Sí, pero también es verdad que…',
        'Pues yo no lo veo así.',
        'No estoy nada de acuerdo.',
      ]),
      choice('Lea el diálogo.', '¿Qué hace Nadia?', [
        'Da la razón a Rocío.',
        '*Propone una solución concreta.',
        'Se enfada con Iván.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Siento haberte hablado así',
    ref: [I, 4, 5],
    learn: [
      grammar(
        'Pedir perdón',
        'Tres partes: reconocer, explicar sin excusarse, reparar. «Siento haber…» (mismo sujeto) frente a «Siento que te hayas enterado por otro» (otro sujeto). «Perdona que» lleva subjuntivo.',
      ),
      tip(
        'La disculpa que no lo es',
        '«Siento que te lo hayas tomado así» o «Si te ha molestado, lo siento» trasladan la responsabilidad al otro.',
      ),
    ],
    test: [
      choice('¿Qué es una disculpa de verdad?', 'Elija.', [
        'Siento que te lo hayas tomado así.',
        '*Siento haberte hablado de esa manera.',
        'Yo solo dije la verdad.',
      ]),
      cloze('Complete.', 'Perdona que te lo [diga] tan tarde. Siento [haberte] hablado así.', [
        'digo',
        'que te',
      ]),
    ],
  },

  // ------------------------------------------------ Capítulo 5: La ciudad
  {
    kind: 'VOCAB',
    title: 'Aquí hay un problema',
    ref: [I, 5, 1],
    learn: [
      words('La ciudad', [
        ['la acera', 'der Gehweg'],
        ['el carril bici', 'der Radweg'],
        ['el contenedor', 'der Müllcontainer'],
        ['los residuos', 'die Abfälle'],
        ['el atasco', 'der Stau'],
        ['la zona peatonal', 'die Fußgängerzone'],
        ['el ayuntamiento', 'die Stadtverwaltung'],
        ['quejarse de', 'sich beschweren über'],
      ]),
      tip(
        'Describir un problema',
        'Qué pasa, dónde, desde cuándo («desde hace», «llevamos») y a quién afecta.',
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'Los coches aparcan en la [acera]. [Llevamos] un año con el mismo problema. Los vecinos se [quejan] del ruido.',
        ['atasco', 'desde'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'como, porque, debido a',
    ref: [I, 5, 2],
    learn: [
      grammar(
        'Causa y consecuencia',
        '«como» solo va al principio de la frase; «porque» solo en medio. «debido a» + sustantivo. Consecuencia: «así que», «por eso», «por lo tanto».',
        {
          headers: ['Función', 'Ejemplo'],
          rows: [
            ['causa, al principio', 'Como no hay aparcamiento, se aparca en doble fila.'],
            ['causa, en medio', 'Se aparca mal porque no hay sitio.'],
            ['causa formal', 'Debido al tráfico, el aire empeora.'],
            ['consecuencia', 'No hay sitio, así que aparcan en la acera.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        '[Como] el autobús pasa poco, la gente va en coche. Hay atascos [porque] todos salen a la vez. [Debido] a las obras, la calle está cortada.',
        ['Porque', 'Como a'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Propongo que…',
    ref: [I, 5, 3],
    learn: [
      grammar(
        'Proponer soluciones',
        '«¿Y si…?» + presente propone sin comprometerse. «propongo que» / «es importante que» + subjuntivo. «habría que», «se podría», «lo mejor sería» + infinitivo.',
        {
          headers: ['Fórmula', 'Ejemplo'],
          rows: [
            ['¿Y si + presente?', '¿Y si pedimos una reunión?'],
            ['propongo que + subj.', 'Propongo que pidamos una reunión.'],
            ['habría que + inf.', 'Habría que pintar los pasos de peatones.'],
            ['se podría + inf.', 'Se podría ampliar la acera.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'Propongo que [pidamos] las dos cosas a la vez. Habría que [poner] bolardos. ¿Y si [hablamos] con el ayuntamiento?',
        ['pedimos', 'ponga', 'hablemos'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Expone y solicita',
    ref: [I, 5, 4],
    learn: [
      text(
        'Asociación de Vecinos Las Fuentes. Al Ayuntamiento de Vilanova, Área de Movilidad. EXPONE: Que desde el pasado mes de junio los vehículos estacionan habitualmente sobre las aceras de las calles Olivo y Mayor. Que dicha situación obliga a los peatones, y especialmente a las personas con movilidad reducida, a bajar a la calzada. SOLICITA: Que se repinten los pasos de peatones y que se estudie la instalación de bolardos.',
      ),
      tip(
        'La forma de la petición',
        'Después de SOLICITA: «que» + subjuntivo, casi siempre con «se»: «Que se proceda a…», «Que se nos comunique…».',
      ),
    ],
    test: [
      match('¿En qué parte del escrito?', [
        ['los vehículos estacionan sobre las aceras', 'EXPONE'],
        ['que se repinten los pasos de peatones', 'SOLICITA'],
        ['Asociación de Vecinos Las Fuentes', 'identificación'],
      ]),
      choice('Elija.', 'Que … la instalación de bolardos.', [
        'se estudia',
        '*se estudie',
        'estudiar',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Los vasos de plástico',
    ref: [I, 5, 5],
    learn: [
      dialogue('En la cocina de la oficina', [
        'Sonia: Han quitado los vasos de plástico. Ahora hay que traerse la taza de casa.',
        'Javi: Aquí somos cuarenta personas. Eso no salva el planeta.',
        'Sonia: Claro que no. Pero eran doscientos vasos al día, unos cuarenta mil al año solo en esta planta.',
        'Javi: Visto así suena a más. Aun así, nos cargan a nosotros lo que tendrían que arreglar otros.',
        'Sonia: En eso estoy de acuerdo, y por eso pedimos también que cambien la máquina de café de cápsulas.',
      ]),
    ],
    test: [
      choice('Lea el diálogo.', '¿Cuántos vasos se usaban al día?', [
        'cuarenta',
        '*doscientos',
        'cuarenta mil',
      ]),
      choice('Lea el diálogo.', '¿Qué convence al final a Javi?', [
        'el número de personas',
        '*que también se pide un cambio a la empresa',
        'que las tazas son bonitas',
      ]),
    ],
  },

  // ------------------------------------------------ Capítulo 6: Contar
  {
    kind: 'GRAMMAR',
    title: 'La prueba del «¿y luego?»',
    ref: [I, 6, 1],
    learn: [
      grammar(
        'Indefinido e imperfecto',
        'No es cuestión de duración («vivió allí cuarenta años» es indefinido). Pregúntese si la frase hace avanzar la historia: si se puede decir «¿y luego?», indefinido. Si es el fondo, imperfecto.',
      ),
    ],
    test: [
      cloze(
        'Complete.',
        '[Era] finales de agosto y todavía [hacía] calor. Aquel jueves [llegué] en el último autobús y [abrí] la cancela.',
        ['fue', 'hizo', 'llegaba'],
      ),
      choice('Elija.', 'Mi abuelo … en ese pueblo cuarenta años y después se mudó.', [
        'vivía',
        '*vivió',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Cenábamos cuando se fue la luz',
    ref: [I, 6, 1],
    learn: [
      tip(
        'Cuando una cosa interrumpe a otra',
        'El imperfecto pone lo que estaba pasando, el indefinido lo que lo cortó.',
        {
          headers: ['Estructura', 'Ejemplo'],
          rows: [
            ['imperfecto + cuando + indefinido', 'Cenábamos cuando se fue la luz.'],
            ['mientras + imperfecto', 'Mientras yo cocinaba, ella puso la mesa.'],
            ['estaba + gerundio', 'Estaba saliendo cuando sonó el teléfono.'],
            ['al + infinitivo', 'Al abrir la puerta, lo vi todo claro.'],
          ],
        },
      ),
    ],
    test: [
      order('Ordene.', ['Estaba', 'saliendo', 'de', 'casa', 'cuando', 'sonó', 'el', 'teléfono.']),
      cloze('Complete.', 'Mientras yo [cocinaba], ella [puso] la mesa.', ['cociné', 'ponía']),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Ya se había ido',
    ref: [I, 6, 2],
    learn: [
      grammar(
        'El pluscuamperfecto',
        'Imperfecto de «haber» + participio. Vuelve atrás para contar algo anterior a lo que se está contando. No se separan: «no había llegado», no «había no llegado».',
      ),
      text(
        'Sin pluscuamperfecto: «Llegué a casa. Antes de eso, mi hermana recogió su habitación y se fue». Con pluscuamperfecto: «Cuando llegué a casa, mi hermana ya había recogido su habitación y se había ido».',
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'Cuando llegamos, los niños ya se [habían] dormido. ¿No [habías] estado nunca aquí?',
        ['han', 'has'],
      ),
      choice('Elija.', 'Cuando la conocí, yo ya … a Madrid.', [
        'me mudé',
        '*me había mudado',
        'me mudaba',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Las cuatro juntas',
    ref: [I, 6, 3],
    learn: [
      grammar(
        'Elegir el tiempo',
        '¿El periodo sigue abierto o está cerrado? ¿El hecho es anterior a otro pasado?',
        {
          headers: ['Tiempo', 'Marcadores'],
          rows: [
            ['pret. perfecto', 'hoy, este año, ya, todavía no, nunca'],
            ['indefinido', 'ayer, el lunes, en 2019, hace tres años'],
            ['imperfecto', 'antes, siempre, todos los días, mientras'],
            ['pluscuamperfecto', 'ya, antes de eso, cuando llegué'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'Este año [he cambiado] de casa. En 2019 [cambié] de trabajo. Antes [vivía] en el centro. Cuando la conocí, ya me [había mudado].',
        ['cambiaba', 'viví'],
      ),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Montar la historia',
    ref: [I, 6, 4],
    learn: [
      tip(
        'Principio, nudo, desarrollo, desenlace',
        'No cuente el final en la primera frase. Conectores: «Resulta que…», «Aquel día…», «Total, que…», «De repente…», «Al final…».',
      ),
      dialogue('La anécdota del perro', [
        'Rosa: Pues nada, que mi tío vivía solo en el campo y tenía un perro viejísimo.',
        'Rosa: Un domingo se fue a dar una vuelta y lo dejó en casa durmiendo.',
        'Rosa: Cuando volvió, el perro no estaba. Se había esfumado.',
        'Rosa: Y de repente, a las once, oyó un ruido en el desván.',
      ]),
    ],
    test: [
      match('¿Qué función tiene?', [
        ['Resulta que…', 'empezar'],
        ['Aquel día…', 'situar'],
        ['De repente…', 'sorprender'],
        ['Total, que al final…', 'terminar'],
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: '¡No me digas!',
    ref: [I, 6, 5],
    learn: [
      words('Contar y reaccionar', [
        ['meter la pata', 'ins Fettnäpfchen treten'],
        ['el malentendido', 'das Missverständnis'],
        ['de milagro', 'wie durch ein Wunder'],
        ['partirse de risa', 'sich totlachen'],
        ['¡Anda ya!', 'Ach was! Nie im Leben!'],
        ['¿Y qué pasó?', 'Und was ist passiert?'],
        ['¡No me digas!', 'Was du nicht sagst!'],
      ]),
      tip(
        'El oyente también trabaja',
        'Quien escucha en silencio absoluto parece aburrido. Se espera: «Ya…», «¿En serio?», «¿Y entonces?», «Qué horror».',
      ),
    ],
    test: [
      match('¿Qué se dice?', [
        ['mostrar sorpresa', '¿En serio?'],
        ['pedir que siga', '¿Y entonces?'],
        ['compadecer', 'Qué horror.'],
        ['seguir la historia', 'Claro… sí, sí.'],
      ]),
    ],
  },

  // ------------------------------------------------ Gramática B1
  {
    kind: 'GRAMMAR',
    title: 'Cuando llegue a casa',
    ref: [G, 9, 5],
    learn: [
      grammar(
        '«cuando» mirando al futuro',
        'Si la frase habla de algo habitual o pasado, «cuando» lleva indicativo. Si mira al futuro, subjuntivo – nunca futuro: «cuando llegaré» no existe. Igual con «en cuanto», «hasta que».',
        {
          headers: ['Habitual o pasado', 'Futuro'],
          rows: [
            ['Cuando llego a casa, ceno.', 'Cuando llegue a casa, cenaré.'],
            ['Cuando era niño, vivía aquí.', 'Cuando seas mayor, lo entenderás.'],
            ['Siempre espero hasta que vuelve.', 'Esperaré hasta que vuelva.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'Cuando [llegue] a casa, te llamaré. Cuando [era] pequeño, vivía en Cádiz. En cuanto [termine] el curso, me iré de viaje.',
        ['llegaré', 'termino', 'sea'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'para que, aunque',
    ref: [G, 9, 5],
    learn: [
      grammar(
        'Finalidad y concesión',
        '«para que» lleva siempre subjuntivo; con un solo sujeto, «para» + infinitivo. «aunque» + indicativo: un hecho conocido. «aunque» + subjuntivo: una posibilidad.',
        {
          headers: ['Expresión', 'Ejemplo', 'Sentido'],
          rows: [
            ['para + infinitivo', 'Lo hago para ahorrar.', 'ein Subjekt'],
            ['para que + subj.', 'Lo hago para que ahorres.', 'zwei Subjekte'],
            ['aunque + indicativo', 'Aunque llueve, salimos.', 'es regnet tatsächlich'],
            ['aunque + subjuntivo', 'Aunque llueva, saldremos.', 'selbst wenn es regnen sollte'],
          ],
        },
      ),
    ],
    test: [
      match('¿Qué significa?', [
        ['Aunque llueve, salimos.', 'Es regnet, und wir gehen trotzdem.'],
        ['Aunque llueva, saldremos.', 'Auch wenn es regnen sollte, gehen wir.'],
      ]),
      cloze('Complete.', 'Hablo despacio para que me [entiendas]. Llama antes de que se [vaya].', [
        'entiendes',
        'va',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Hablad, ven, haz',
    ref: [G, 10, 1],
    learn: [
      grammar(
        'El imperativo afirmativo',
        'tú: presente sin -s (habla). vosotros: infinitivo con -d en lugar de -r (hablad). usted / ustedes: subjuntivo (hable, hablen). Ocho irregulares en «tú»: ten, ven, haz, ve, pon, sal, di, sé.',
      ),
    ],
    test: [
      match('Infinitivo e imperativo (tú)', [
        ['tener', 'ten'],
        ['poner', 'pon'],
        ['salir', 'sal'],
        ['decir', 'di'],
        ['hacer', 'haz'],
      ]),
      cloze('Complete (vosotros).', '[Venid] aquí. [Comed] la sopa. [Escribid] vuestros nombres.', [
        'Venir',
        'Comer',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Dímelo – no me lo digas',
    ref: [G, 10, 3],
    learn: [
      grammar(
        'Imperativo negativo y pronombres',
        'El imperativo negativo sale del subjuntivo: habla → no hables, ven → no vengas, haz → no hagas. En el afirmativo los pronombres se pegan detrás (dímelo); en el negativo van delante y separados (no me lo digas).',
        {
          headers: ['Afirmativo', 'Negativo'],
          rows: [
            ['Dímelo.', 'No me lo digas.'],
            ['Siéntate.', 'No te sientes.'],
            ['Dáselo a tu hermana.', 'No se lo des.'],
          ],
        },
      ),
    ],
    test: [
      match('Afirmativo y negativo', [
        ['Ven.', 'No vengas.'],
        ['Hazlo.', 'No lo hagas.'],
        ['Siéntate.', 'No te sientes.'],
        ['Dímelo.', 'No me lo digas.'],
      ]),
    ],
  },
]);
