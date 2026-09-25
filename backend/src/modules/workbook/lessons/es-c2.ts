import {
  ADVANCED as A,
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

/** Spanisch C2 – Advanced, Kapitel 7 bis 12, dazu der höfliche Imperativ und die indirekte Rede aus dem Grammatikbuch. */
export const ES_C2 = lessons('es-c2', [
  // ------------------------------------------------ Capítulo 7: Retórica
  {
    kind: 'VOCAB',
    title: 'El oficio del orador',
    ref: [A, 7, 1],
    learn: [
      words('Retórica', [
        ['el auditorio', 'das Publikum'],
        ['la credibilidad', 'die Glaubwürdigkeit'],
        ['apelar a', 'appellieren an'],
        ['conmover', 'rühren, bewegen'],
        ['rebatir', 'widerlegen'],
        ['la objeción', 'der Einwand'],
        ['captar la atención', 'Aufmerksamkeit gewinnen'],
        ['el golpe de efecto', 'die Pointe'],
      ]),
    ],
    test: [
      cloze(
        'Complete.',
        'Sin [credibilidad], ningún dato convence. Quien solo [apela] a las emociones parece manipular. Un buen discurso anticipa la [objeción] principal y la sabe [rebatir].',
        ['auditorio', 'conmover'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Ethos, pathos, logos',
    ref: [A, 7, 1],
    learn: [
      grammar(
        'Las tres pruebas',
        'El ethos es la credibilidad de quien habla; el pathos, la emoción que despierta; el logos, el razonamiento. Un discurso que solo usa una suena a informe, a sermón o a panfleto. Reconocer límites («en esto mis adversarios tienen razón») refuerza el ethos; un pathos excesivo lo destruye.',
      ),
    ],
    test: [
      match('¿Qué prueba predomina?', [
        ['Como alcaldesa durante doce años, conozco cada calle.', 'ethos'],
        ['Piensen en sus hijos, que heredarán lo que hoy decidamos.', 'pathos'],
        ['Si la tarifa sube un 10 % y el uso baja un 15 %, se recauda menos.', 'logos'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Las cinco partes del discurso',
    ref: [A, 7, 2],
    learn: [
      grammar(
        'La arquitectura clásica',
        'Exordio: captar y predisponer. Narración: exponer los hechos. Argumentación: probar la tesis. Refutación: desmontar las objeciones. Peroración: resumir y mover a actuar.',
      ),
    ],
    test: [
      order('Ordene el discurso ante el pleno.', [
        '¿Cuántos de ustedes han cruzado esta plaza de noche este mes?',
        'Desde que se retiraron las farolas, los vecinos evitan pasar por aquí.',
        'Reponer la luz cuesta menos que un mes de vigilancia privada.',
        'Se dirá que no hay presupuesto. Lo hubo para cambiar los bancos.',
        'Por eso les pido que aprobemos hoy la moción.',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Paso ahora a…',
    ref: [A, 7, 2],
    learn: [
      tip(
        'Señalizar el camino',
        'Quien escucha no puede releer. Por eso el discurso anuncia su estructura, marca cada paso y recapitula: lo que en un ensayo sería redundante, en un discurso es cortesía.',
        {
          headers: ['Función', 'Marcador'],
          rows: [
            ['anunciar', 'Voy a centrarme en tres aspectos.'],
            ['avanzar', 'Paso ahora a la segunda cuestión.'],
            ['recapitular', 'Hemos visto, pues, que…'],
            ['anunciar el cierre', 'Termino ya.'],
          ],
        },
      ),
    ],
    test: [
      match('¿Qué función?', [
        ['Voy a hablarles de tres cosas.', 'anunciar la estructura'],
        ['Vayamos a la segunda cuestión.', 'avanzar'],
        ['Hemos visto, pues, que el coste es menor.', 'recapitular'],
        ['Y una última idea.', 'anunciar el cierre'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Trabajamos para vivir',
    ref: [A, 7, 3],
    learn: [
      grammar(
        'Figuras del discurso oral',
        'Tricolon: tres elementos, el último el más largo. Anáfora: repetir el comienzo. Quiasmo: cruzar dos elementos (A B / B A). Gradación: de menos a más. Pregunta retórica: una pregunta que afirma. Tres elementos dan sensación de cierre; dos parecen un contraste, cuatro una lista.',
      ),
    ],
    test: [
      match('¿Qué figura?', [
        ['No es la ciudad la que cambia a la gente; es la gente la que cambia la ciudad.', 'quiasmo'],
        ['Queremos escuelas. Queremos médicos. Queremos futuro.', 'anáfora'],
        ['Primero lo ignoraron, luego lo criticaron y al final lo copiaron.', 'gradación'],
        ['¿Vamos a quedarnos de brazos cruzados?', 'pregunta retórica'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Lejos de frenar la economía',
    ref: [A, 7, 4],
    learn: [
      grammar(
        'La concesión táctica',
        'Concesión + giro + réplica. «Es cierto que…; ahora bien,…» reconoce y relativiza. «No se trata de… sino de…» cambia el terreno. «Lejos de» + infinitivo invierte la consecuencia esperada. «Admitamos que» + subjuntivo concede como hipótesis.',
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'Es cierto que la obra es cara; [ahora bien], más caro es no hacerla. [Lejos de] vaciar el centro, lo ha llenado. [No se trata de] gastar más, sino de gastar mejor.',
        ['por lo tanto', 'Gracias a'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Mejorar la objeción',
    ref: [A, 7, 4],
    learn: [
      tip(
        'Responder a la mejor versión',
        'Responder a una versión débil de la objeción es un hombre de paja visto desde el otro lado. Se formula la versión más fuerte —«el argumento más serio contra esta propuesta es…»—, se reconoce lo que tiene de cierto y se responde a ella.',
      ),
    ],
    test: [
      choice('Defiende la semana de cuatro días. Le objetan que bajará la productividad.', '¿Qué réplica es más sólida?', [
        'Eso lo dicen siempre los que no quieren cambios.',
        'La productividad no importa; importa la felicidad.',
        '*Es una preocupación legítima; ahora bien, donde se ha probado, la productividad por hora ha subido lo suficiente para compensarlo.',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Empezar y terminar',
    ref: [A, 7, 5],
    learn: [
      tip(
        'El primer y el último minuto',
        'El inicio crea una pregunta: una anécdota, un dato sorprendente, una pregunta, un contraste. El cierre la responde. Volver al final a la imagen del principio —cerrar el círculo— da unidad al discurso. Improvisar el final lleva al temido «bueno, pues eso es todo».',
      ),
    ],
    test: [
      choice(
        'El discurso empezó: «El martes pasado, una vecina de ochenta años subió a pie seis pisos con la compra».',
        '¿Qué cierre lo aprovecha mejor?',
        [
          'Bueno, pues eso es todo. Gracias.',
          'En conclusión, los ascensores son importantes.',
          '*Si hoy aprobamos la ayuda, el martes que viene nuestra vecina subirá en ascensor. Está en nuestras manos.',
        ],
      ),
    ],
  },

  // ------------------------------------------------ Capítulo 8: Escritura académica
  {
    kind: 'VOCAB',
    title: 'El trabajo académico',
    ref: [A, 8, 1],
    learn: [
      words('Escribir un trabajo', [
        ['el resumen', 'das Abstract'],
        ['el estado de la cuestión', 'der Forschungsstand'],
        ['el marco teórico', 'der theoretische Rahmen'],
        ['la cita textual', 'das wörtliche Zitat'],
        ['la paráfrasis', 'die Paraphrase'],
        ['la nota al pie', 'die Fußnote'],
        ['el trabajo de fin de grado', 'die Bachelorarbeit'],
        ['el plagio', 'das Plagiat'],
      ]),
    ],
    test: [
      cloze(
        'Complete.',
        'El [resumen] condensa el trabajo. El [estado de la cuestión] recoge lo que otros ya han dicho. Citar sin dar la fuente es [plagio].',
        ['marco teórico', 'nota al pie'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Se entrevistó, los datos indican',
    ref: [A, 8, 1],
    learn: [
      grammar(
        'Cada sección, su tiempo',
        'Introducción y discusión, en presente: hablan de lo que se sabe y de lo que significa. Metodología y resultados, en pretérito: cuentan lo que se hizo y se encontró.',
        {
          headers: ['Sección', 'Ejemplo'],
          rows: [
            ['introducción', 'Este trabajo analiza…'],
            ['metodología', 'Se entrevistó a 40 docentes.'],
            ['resultados', 'El 60 % prefirió…'],
            ['discusión', 'Los datos indican que…'],
          ],
        },
      ),
    ],
    test: [
      match('¿Qué sección?', [
        ['Se analizaron 120 editoriales de 2015 a 2020.', 'metodología'],
        ['Este trabajo examina la ironía en la prensa deportiva.', 'introducción'],
        ['Tres de cada cuatro editoriales recurrieron a la hipérbole.', 'resultados'],
        ['Estos resultados sugieren una función de complicidad.', 'discusión'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Afirma, admite, pretende',
    ref: [A, 8, 2],
    learn: [
      grammar(
        'Verbos para introducir a otros',
        'Neutros: afirmar, señalar, sostener. Cautela de la fuente: sugerir, apuntar. Concesión de la fuente: admitir, reconocer. Aval de quien escribe: demostrar, constatar. Distancia de quien escribe: pretender, alegar, aducir.',
      ),
    ],
    test: [
      match('¿Qué comunica?', [
        ['Morales demuestra que…', 'Quien escribe lo da por probado.'],
        ['Morales pretende que…', 'Quien escribe no lo comparte.'],
        ['Morales sostiene que…', 'Solo se atribuye, sin valorar.'],
        ['Morales reconoce que…', 'La propia autora cede en algo.'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Cita, paráfrasis, alusión',
    ref: [A, 8, 2],
    learn: [
      tip(
        'Tres maneras de traer a otro',
        'La cita textual va entre comillas, con página, y se reserva para formulaciones que importan en sí mismas. La paráfrasis reformula con palabras propias, y también lleva la referencia. La alusión solo remite a una obra: «véase Morales (2019)».',
      ),
    ],
    test: [
      match('¿Qué forma?', [
        ['Para Morales, el voseo es «la marca más visible de la identidad rioplatense» (2019: 45).', 'cita textual'],
        ['Morales (2019) considera el voseo el rasgo más identitario del habla rioplatense.', 'paráfrasis'],
        ['Sobre el voseo en la prensa, véase Morales (2019).', 'alusión'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Consideramos, se observa',
    ref: [A, 8, 3],
    learn: [
      grammar(
        'Cuatro maneras de no decir «yo»',
        'Plural de modestia («consideramos»): implica al lector. Se impersonal o pasiva refleja («se entrevistó»): borra al investigador. Sujeto textual («este artículo defiende»): da la voz al texto. La primera persona se reserva para decisiones explícitas («he optado por…»).',
      ),
    ],
    test: [
      match('Pase al registro académico.', [
        ['Hemos visto a 40 profes.', 'Se entrevistó a 40 docentes.'],
        ['Yo pienso que la teoría no vale.', 'A nuestro juicio, la teoría presenta limitaciones.'],
        ['Está clarísimo que funciona.', 'Los datos indican que el método es eficaz.'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Atenuar sin diluir',
    ref: [A, 8, 3],
    learn: [
      tip(
        'Ni demasiado fuerte ni demasiado débil',
        'Se atenúa donde hay razones y se afirma donde los datos lo permiten. «Los datos prueban» exagera; «podría quizás parecer» hace dudar del autor. Lo adecuado: «los datos indican», «cabe pensar», «en la mayoría de los casos».',
      ),
    ],
    test: [
      choice('Elija.', '¿Qué formulación es adecuada para una conclusión con datos sólidos pero no definitivos?', [
        'Es indudable que el método funciona siempre.',
        '*Los datos indican que el método es eficaz en la mayoría de los casos.',
        'Tal vez podría quizás parecer que el método pudiera funcionar.',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Analizar, no «realizar un análisis»',
    ref: [A, 8, 4],
    learn: [
      tip(
        'Verbos comodín',
        '«Hacer», «tener», «poner», «dar» y «realizar» sirven para todo y no dicen casi nada. Sustitúyalos por el verbo preciso.',
        {
          headers: ['Impreciso', 'Preciso'],
          rows: [
            ['hacer una encuesta', 'aplicar una encuesta'],
            ['tener problemas', 'presentar deficiencias'],
            ['realizar un análisis', 'analizar'],
            ['hay una relación entre X e Y', 'X se correlaciona con Y'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'En este capítulo [analizamos] los datos. El cuestionario [presenta] algunas limitaciones. La edad [se correlaciona] con el uso de anglicismos.',
        ['realizamos', 'tiene', 'hace'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Estoy seguro de que',
    ref: [A, 8, 4],
    learn: [
      grammar(
        'Tres errores que delatan',
        'Dequeísmo: «pienso de que» → «pienso que». Queísmo: «me acuerdo que» → «me acuerdo de que». Prueba: sustituya por «eso» («me acuerdo de eso» → «de que»). Gerundio de posterioridad: «se publicó en 2010, siendo traducido en 2015» → «y se tradujo en 2015».',
      ),
    ],
    test: [
      match('¿Qué error?', [
        ['Me alegro que hayas venido.', 'queísmo'],
        ['Creo de que tienes razón.', 'dequeísmo'],
        ['Se fundó en 1950, cerrando en 1980.', 'gerundio de posterioridad'],
      ]),
      choice('Elija la frase correcta.', 'Elija.', [
        'No cabe duda que el efecto es real.',
        '*Nos dimos cuenta de que faltaban datos.',
        'Los autores opinan de que la muestra es pequeña.',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'El párrafo académico',
    ref: [A, 8, 5],
    learn: [
      text(
        'Un párrafo, una idea. Empieza con una oración temática, sigue con datos, ejemplos o citas y termina cerrando la idea o preparando la siguiente. Conectores del registro: asimismo, no obstante, por consiguiente, es decir.',
      ),
    ],
    test: [
      order('Ordene el párrafo.', [
        'El voseo ha ganado presencia en la publicidad uruguaya.',
        'En el corpus, pasó del 55 % de los anuncios en 2013 al 81 % en 2023.',
        'El aumento se concentra en productos para menores de treinta años.',
        'Cabe interpretarlo, por tanto, como una marca de cercanía generacional.',
      ]),
    ],
  },

  // ------------------------------------------------ Capítulo 9: Registro
  {
    kind: 'VOCAB',
    title: 'Fallecer, morir, palmarla',
    ref: [A, 9, 1],
    learn: [
      grammar(
        'La escala de registros',
        'Solemne, formal, neutro, coloquial, vulgar. La misma realidad cambia de palabra según la situación. También cambia la sintaxis: el coloquial yuxtapone frases cortas; el formal subordina.',
        {
          headers: ['Formal', 'Neutro', 'Coloquial'],
          rows: [
            ['fallecer', 'morir', 'irse'],
            ['el domicilio', 'la casa', 'el piso (Esp.) / el depa (Méx.)'],
            ['numerosos', 'muchos', 'un montón de'],
            ['abonar', 'pagar', 'soltar la pasta (Esp.)'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Pase al registro formal.',
        'He cambiado de [domicilio]. Ha [fallecido] el abuelo de Ana. Acudieron [numerosos] clientes. Deberá [abonar] el importe antes del lunes.',
        ['casa', 'muerto', 'pagar'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Pues nada, total que',
    ref: [A, 9, 2],
    learn: [
      dialogue('Dos amigas en Madrid', [
        'Irene: ¿Qué tal el finde?',
        'Marta: Buah, fatal. O sea, el sábado bien, pero el domingo…',
        'Irene: A ver, cuenta.',
        'Marta: Pues nada, que Dani me deja tirada a última hora. En plan, media hora antes.',
        'Irene: ¿En serio? Qué morro tiene.',
        'Marta: Ya ves. Total, que me quedé en casa.',
      ]),
    ],
    test: [
      match('¿Qué función?', [
        ['O sea', 'reformular'],
        ['Pues nada, que…', 'arrancar el relato'],
        ['Total, que…', 'resumir y cerrar'],
        ['A ver, cuenta.', 'invitar al otro a hablar'],
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'El finde, la profe, súper',
    ref: [A, 9, 2],
    learn: [
      tip(
        'Rasgos del español coloquial',
        'Acortamientos (el finde, la profe, el cole), intensificadores (súper, re- en Argentina, un montón), presente histórico («y el tío me deja tirada») y expresiones valorativas que cambian de país: qué morro (Esp.), qué padre (Méx.), qué bacán (Chile, Perú).',
      ),
    ],
    test: [
      choice('Elija.', '«Qué morro tiene» (España) significa…', [
        'que tiene una cara peculiar.',
        '*que es un descarado.',
        'que tiene mucha suerte.',
      ]),
      cloze(
        'Complete.',
        '[Pues nada], llego y [resulta que] la reunión era ayer. [Total, que] me tocó pedir perdón.',
        ['o sea'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Le agradecería que me enviara',
    ref: [A, 9, 3],
    learn: [
      grammar(
        'Atenuar una petición',
        'Del imperativo directo a la petición más cortés: pregunta, condicional («¿podría…?»), imperfecto de cortesía («quería pedirle…»), agradecimiento anticipado («le agradecería que» + imperfecto de subjuntivo).',
      ),
    ],
    test: [
      order('De más directa a más atenuada.', [
        'Cierre la ventana.',
        '¿Cierra la ventana?',
        '¿Podría cerrar la ventana?',
        '¿Le importaría cerrar la ventana, si no es molestia?',
      ]),
      cloze(
        'Complete.',
        'Le escribo porque [quería] consultarle una duda. Le [agradecería] que me [enviara] el desglose.',
        ['quiero', 'agradezco', 'envíe'],
      ),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Estimada Sra. Ortega',
    ref: [A, 9, 3],
    learn: [
      tip(
        'Saludos y despedidas',
        '«Estimado/a» + nombre es la fórmula profesional más extendida. «Un cordial saludo» o «Saludos cordiales» cierran con seguridad; «Atentamente» es más distante. Entre colegas basta «Hola, Laura:» y «Un saludo».',
      ),
    ],
    test: [
      match('¿Qué distancia?', [
        ['Distinguido señor: … Atentamente,', 'máxima'],
        ['Estimada Sra. Ortega: … Un cordial saludo,', 'profesional'],
        ['Hola, Laura: … Un saludo,', 'entre colegas'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Dígamelo, por favor',
    ref: [G, 10, 3],
    learn: [
      grammar(
        'Pronombres y cortesía en el imperativo',
        'En el imperativo afirmativo los pronombres se pegan al verbo, a menudo con tilde: dígamelo, envíenoslo. En el negativo van delante y separados: no me lo diga. Para no sonar a orden, se suaviza con «por favor», «si no le importa» o se pasa a una pregunta con «¿podría…?».',
        {
          headers: ['Afirmativo', 'Negativo'],
          rows: [
            ['Dígamelo.', 'No me lo diga.'],
            ['Envíenoslo hoy.', 'No nos lo envíen hoy.'],
            ['Siéntese, por favor.', 'No se siente ahí.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'El informe, [envíemelo] hoy, por favor, pero no se [lo] mande al cliente todavía. La contraseña, no me la [diga] por teléfono.',
        ['me lo envíe', 'le', 'dice'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Decir lo mismo de otra manera',
    ref: [A, 9, 4],
    learn: [
      text(
        'Formal: «Lamentamos comunicarle que, debido a una incidencia, su pedido sufrirá un retraso de aproximadamente tres días.» Neutro: «Su pedido llegará unos tres días tarde por un problema en el almacén.» Coloquial: «Oye, que lo tuyo se retrasa como tres días, han tenido un lío. ¡Perdona!»',
      ),
    ],
    test: [
      match('Coloquial → formal', [
        ['No hay manera de pillar cita.', 'Resulta muy difícil obtener una cita.'],
        ['Me han subido el alquiler un montón.', 'El alquiler ha experimentado un aumento considerable.'],
        ['El jefe se ha puesto hecho una fiera.', 'El director ha reaccionado con gran enfado.'],
        ['Esto no hay quien lo entienda.', 'El texto resulta prácticamente incomprensible.'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Romper el registro',
    ref: [A, 9, 5],
    learn: [
      tip(
        'El cambio deliberado',
        'Un descenso breve al coloquial en un texto formal crea complicidad o afila una crítica. Un ascenso al solemne en un tema trivial produce humor: es la base de la parodia. Funciona porque es breve; una mezcla sostenida parece descuido.',
      ),
    ],
    test: [
      choice(
        'Un editorial muy formal sobre una reforma fiscal termina: «En resumidas cuentas: que pague el de siempre».',
        '¿Qué efecto tiene?',
        [
          'Es un descuido del autor.',
          '*Condensa la crítica en la voz de la calle y crea complicidad con el lector.',
          'Indica que el autor apoya la reforma.',
        ],
      ),
    ],
  },

  // ------------------------------------------------ Capítulo 10: Modismos
  {
    kind: 'VOCAB',
    title: 'Meter la pata',
    ref: [A, 10, 1],
    learn: [
      words('Frases hechas', [
        ['meter la pata', 'ins Fettnäpfchen treten'],
        ['tomar el pelo', 'auf den Arm nehmen'],
        ['no tener pelos en la lengua', 'kein Blatt vor den Mund nehmen'],
        ['dar en el clavo', 'den Nagel auf den Kopf treffen'],
        ['hacer la vista gorda', 'ein Auge zudrücken'],
        ['irse por las ramas', 'vom Thema abschweifen'],
        ['ser pan comido', 'ein Kinderspiel sein'],
        ['a regañadientes', 'widerwillig'],
      ]),
    ],
    test: [
      match('¿Qué frase hecha?', [
        ['Le preguntas cuándo nace el bebé, y no está embarazada.', 'meter la pata'],
        ['El profesor ve que copias y no dice nada.', 'hacer la vista gorda'],
        ['Te preguntan la hora y hablas de tu infancia.', 'irse por las ramas'],
        ['El examen fue facilísimo.', 'ser pan comido'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Me tomaron el pelo',
    ref: [A, 10, 1],
    learn: [
      grammar(
        'Lo que se puede cambiar',
        'El verbo se conjuga y los pronombres se adaptan. Los sustantivos, las preposiciones y el número no cambian, y no se añaden adjetivos: para intensificar, «meter la pata hasta el fondo».',
        {
          headers: ['Correcto', 'Incorrecto'],
          rows: [
            ['Me tomaron el pelo.', 'Me tomaron los pelos.'],
            ['Diste en el clavo.', 'Diste al clavo.'],
            ['Costó un ojo de la cara.', 'Costó un ojo en la cara.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'Te está tomando el [pelo]. La doctora dio en el [clavo]. El piso nos costó un ojo [de] la cara. ¿Me echas una [mano]?',
        ['pelos', 'en', 'pata'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: '¡Lo que faltaba!',
    ref: [A, 10, 2],
    learn: [
      grammar(
        'Marcas de la ironía',
        'La ironía dice lo contrario y confía en el contexto. Se reconoce por exclamativas exageradas, intensificadores fuera de lugar («menudo», «vaya»), diminutivos y fórmulas fijas.',
        {
          headers: ['Expresión', 'Sentido irónico'],
          rows: [
            ['¡Lo que faltaba!', 'esto lo empeora todo'],
            ['¡Menudo favor me has hecho!', 'me has perjudicado'],
            ['Muy bonito, sí señor.', 'lo que has hecho está mal'],
            ['¡Pues sí que estamos buenos!', 'estamos en un apuro'],
          ],
        },
      ),
    ],
    test: [
      choice('Su compañero llega dos horas tarde. La jefa: «Muy puntual, como siempre».', '¿Qué quiere decir?', [
        'Le felicita por su puntualidad.',
        '*Le reprocha el retraso y sugiere que no es la primera vez.',
        'Le pide que llegue antes la próxima vez.',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'No es precisamente barato',
    ref: [A, 10, 2],
    learn: [
      tip(
        'La lítote',
        'Atenúa negando lo contrario: «no está mal» (está bien), «no es tonto» (es listo). «No es precisamente» permite criticar sin decir nada negativo.',
      ),
    ],
    test: [
      match('¿Qué significa?', [
        ['El restaurante no es precisamente barato.', 'Es muy caro.'],
        ['Tu hermano no es ningún tonto.', 'Es muy listo.'],
        ['No me hace mucha gracia la idea.', 'No me gusta nada.'],
        ['La película no estuvo nada mal.', 'Me gustó mucho.'],
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Esbelto, delgado, flaco',
    ref: [A, 10, 3],
    learn: [
      grammar(
        'Connotación',
        'Mismo hecho, otra valoración. Elegir mal no es un error gramatical, pero puede ser una ofensa.',
        {
          headers: ['Positivo', 'Neutro', 'Negativo'],
          rows: [
            ['esbelto', 'delgado', 'flaco'],
            ['ahorrador', 'cuidadoso con el dinero', 'tacaño'],
            ['perseverante', 'firme', 'terco'],
            ['curioso', 'interesado', 'chismoso'],
          ],
        },
      ),
    ],
    test: [
      choice('Elija.', 'En una carta de recomendación, alguien que defiende sus ideas con insistencia es…', [
        'una persona terca.',
        'un cabezota.',
        '*una persona decidida y perseverante.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Te oigo, pero no te escucho',
    ref: [A, 10, 3],
    learn: [
      grammar(
        'Pares que se confunden',
        '«Oír» y «ver» son percepciones que ocurren; «escuchar» y «mirar», acciones voluntarias. «Enterarse» es recibir una noticia; «darse cuenta», comprender algo por uno mismo. «Pedir» es solicitar algo; «preguntar», solicitar información.',
      ),
    ],
    test: [
      cloze(
        'Complete.',
        '[Me enteré] de la noticia por la radio, pero hasta la noche no [me di cuenta] de lo que significaba. Estuve un rato sin [escuchar] lo que me decían.',
        ['Me acordé', 'oír'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Dime con quién andas…',
    ref: [A, 10, 4],
    learn: [
      culture(
        'Refranes vivos',
        'Los refranes rara vez se citan enteros: basta la primera mitad. Citarlos completos y a menudo suena anticuado. «No hay mal que por bien no venga», «Más vale pájaro en mano que ciento volando», «En casa de herrero, cuchillo de palo».',
      ),
    ],
    test: [
      match('¿Qué refrán?', [
        ['El hijo del dentista tiene los dientes picados.', 'En casa de herrero, cuchillo de palo.'],
        ['Perdió el trabajo y fundó su propia empresa.', 'No hay mal que por bien no venga.'],
        ['Rechazó una oferta segura por otra que nunca llegó.', 'Más vale pájaro en mano que ciento volando.'],
        ['Se distrajo y otro se llevó el último billete.', 'Camarón que se duerme se lo lleva la corriente.'],
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Qué padre, qué guay, qué copado',
    ref: [A, 10, 4],
    learn: [
      tip(
        'La idiomática es regional',
        'Todo se entiende fuera de su zona, pero usarlo en la zona equivocada marca de inmediato.',
        {
          headers: ['Idea', 'España', 'México', 'Río de la Plata'],
          rows: [
            ['¡genial!', '¡qué guay!', '¡qué padre!', '¡qué copado!'],
            ['dinero', 'la pasta', 'la lana', 'la guita'],
            ['trabajo', 'el curro', 'la chamba', 'el laburo'],
          ],
        },
      ),
    ],
    test: [
      choice('Un amigo de Ciudad de México le cuenta que tiene nuevo empleo.', '¿Qué respuesta suena natural allí?', [
        '¡Qué guay, tío! Ya tienes curro y pasta.',
        '*¡Qué padre! Ya tienes chamba y lana.',
        '¡Qué copado, che! Ya tenés laburo y guita.',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Cuándo sí y cuándo no',
    ref: [A, 10, 5],
    learn: [
      tip(
        'La dosis',
        'Tres frases hechas en un párrafo no suenan a nativo, sino a alguien que quiere demostrar que las conoce. Antes de usar una: ¿encaja con el registro?, ¿se usa en esta región?, ¿es la única del párrafo?, ¿la sé exactamente?',
      ),
    ],
    test: [
      choice('Agradece a un colega su ayuda con un proyecto.', '¿Qué versión suena más natural?', [
        'Me echaste una mano cuando estaba con el agua al cuello, diste en el clavo y lo bordaste.',
        '*Muchas gracias por echarme una mano con el presupuesto. Tu propuesta dio justo en el clavo.',
        'Le expreso mi más profundo agradecimiento por la asistencia prestada.',
      ]),
    ],
  },

  // ------------------------------------------------ Capítulo 11: Mediación
  {
    kind: 'VOCAB',
    title: 'Tiene la palabra',
    ref: [A, 11, 1],
    learn: [
      words('El debate', [
        ['el / la ponente', 'der Referent, die Referentin'],
        ['el turno de palabra', 'das Rederecht'],
        ['ceder la palabra', 'das Wort überlassen'],
        ['la réplica', 'die Erwiderung'],
        ['ceñirse al tema', 'beim Thema bleiben'],
        ['recapitular', 'zusammenfassen'],
        ['la discrepancia', 'die Meinungsverschiedenheit'],
        ['imparcial', 'unparteiisch'],
      ]),
    ],
    test: [
      cloze(
        'Complete.',
        'Nos acompañan tres [ponentes]. Cada uno tendrá un [turno] de tres minutos y un minuto de [réplica]. Les pido [ceñirse] al tema.',
        ['discrepancia', 'imparcial'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Moderar sin opinar',
    ref: [A, 11, 1],
    learn: [
      grammar(
        'Las funciones del moderador',
        'Abrir, dar la palabra, reconducir, recapitular y cerrar. El moderador usa la primera persona del plural inclusiva («pasemos a») o el impersonal («se ha planteado») y reserva el «yo» para las decisiones de procedimiento.',
      ),
    ],
    test: [
      choice('Un ponente acaba de exponer su postura.', '¿Qué intervención es imparcial?', [
        'Muy interesante y acertado. Veamos qué responde la señora Ruiz.',
        '*Gracias. Señora Ruiz, ¿cuál es su postura?',
        'Gracias. Señora Ruiz, ¿no le parece exagerado lo que acaba de oír?',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Permítame que le interrumpa',
    ref: [A, 11, 2],
    learn: [
      grammar(
        'Interrumpir con cortesía',
        'Se atenúa con subjuntivo y condicional, y se justifica por las reglas, no por el contenido. «Ir» + gerundio pide cerrar poco a poco.',
        {
          headers: ['Grado', 'Fórmula'],
          rows: [
            ['aviso', 'Le queda un minuto.'],
            ['sugerencia', 'Si le parece, vaya concluyendo.'],
            ['petición', 'Le rogaría que fuera terminando.'],
            ['firme', 'Lo siento, debo cortarle aquí.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'Permítame que le [interrumpa], señora Díaz. Le rogaría que [fuera] terminando. [Volvamos], si les parece, a la cuestión del horario.',
        ['interrumpo', 'sea', 'Volvemos'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Resumir sin tomar partido',
    ref: [A, 11, 3],
    learn: [
      tip(
        'Las trampas del resumen',
        'El verbo («insiste», «pretende» valoran; «sostiene», «propone» no), el orden (lo último pesa más), la extensión y los adjetivos. «Por su parte» y «a su vez» articulan las posturas sin jerarquizarlas.',
      ),
    ],
    test: [
      choice('Debate sobre un parque eólico.', '¿Qué resumen es neutral?', [
        'El alcalde defiende el empleo; los vecinos, sin embargo, se empeñan en hablar del ruido.',
        '*El alcalde sostiene que traerá empleo; los vecinos, por su parte, señalan el ruido y el paisaje. Ambos coinciden en que el pueblo necesita inversión.',
        'Los vecinos plantean dudas, pero el alcalde demuestra que el parque traerá empleo.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Dijo que el proyecto sería rentable',
    ref: [G, 12, 3],
    learn: [
      grammar(
        'El estilo indirecto en el resumen',
        'Con el verbo introductor en pasado, los tiempos retroceden: presente → imperfecto, futuro → condicional, perfecto e indefinido → pluscuamperfecto. El modo no cambia: sigue siendo indicativo.',
        {
          headers: ['Dijo', 'Dijo que…'],
          rows: [
            ['«El proyecto es rentable.»', 'el proyecto era rentable.'],
            ['«Será rentable.»', 'sería rentable.'],
            ['«Hemos cumplido los plazos.»', 'habían cumplido los plazos.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete el acta.',
        'La directora afirmó que el nuevo horario [mejoraría] el rendimiento. El sindicato señaló que no se [había] consultado a nadie. Las familias dijeron que [necesitaban] más información.',
        ['mejorará', 'ha', 'necesiten'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Posiciones e intereses',
    ref: [A, 11, 4],
    learn: [
      text(
        'Dos vecinos discuten por un árbol: uno quiere talarlo, el otro no quiere que se toque. Son sus posiciones. Detrás hay intereses: el primero quiere luz en su terraza; el segundo, sombra en verano. Una poda resuelve ambas cosas. Mediar es pasar de lo que cada parte dice que quiere a por qué lo quiere.',
      ),
    ],
    test: [
      match('¿Qué interés puede esconder?', [
        ['«Que quite la barbacoa de la terraza.»', 'no soportar el humo al tender la ropa'],
        ['«No pienso trabajar más los sábados.»', 'pasar tiempo con su familia'],
        ['«Exijo que me cambien de departamento.»', 'dejar de trabajar con un jefe con el que chocó'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Si lo entiendo bien',
    ref: [A, 11, 4],
    learn: [
      grammar(
        'Técnicas de la mediación',
        'Reformular: «Si le he entendido bien, lo que usted necesita es…». Preguntar por el interés: «¿Qué es lo que más le preocupa de…?». Buscar lo común: «Ambos coinciden en…». Abrir opciones: «¿Qué pasaría si…?».',
      ),
    ],
    test: [
      choice(
        '«¡El del quinto es un maleducado! Pone la música hasta las dos y no hay quien duerma.»',
        '¿Qué reformulación usaría un mediador?',
        [
          'Tiene usted toda la razón, es un maleducado.',
          '*Si la entiendo bien, lo que usted necesita es poder descansar por la noche.',
          'Eso lo tendría que haber hablado antes con él.',
        ],
      ),
      cloze(
        'Complete.',
        'Veo que ambos [coinciden] en querer una buena relación. ¿Qué [pasaría] si fijaran juntos un horario?',
        ['coincidan', 'pasa'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Desactivar una escalada',
    ref: [A, 11, 5],
    learn: [
      tip(
        'Cuando el debate descarrila',
        'Ante un ataque personal: separar persona y argumento. Ante una acusación vaga: pedir concreción. Ante la emoción: nombrarla sin juzgarla. Si nada funciona: una pausa.',
      ),
    ],
    test: [
      match('¿Qué respuesta?', [
        ['ataque personal', 'Centrémonos en la propuesta, no en quien la hace.'],
        ['acusación vaga', '¿Podría concretar a qué se refiere?'],
        ['emoción desbordada', 'Entiendo que el tema le afecta directamente.'],
        ['bloqueo', 'Propongo una pausa de cinco minutos.'],
      ]),
    ],
  },

  // ------------------------------------------------ Capítulo 12: Divulgación
  {
    kind: 'VOCAB',
    title: 'Divulgar',
    ref: [A, 12, 1],
    learn: [
      words('La divulgación', [
        ['el lector lego', 'der Laie'],
        ['el tecnicismo', 'der Fachausdruck'],
        ['la analogía', 'die Analogie'],
        ['simplificar', 'vereinfachen'],
        ['trivializar', 'verharmlosen, banalisieren'],
        ['el rigor', 'die Genauigkeit'],
        ['el gancho', 'der Aufhänger'],
        ['accesible', 'verständlich'],
      ]),
    ],
    test: [
      cloze(
        'Complete.',
        'Escribe para el lector [lego], no para colegas. Evita el [tecnicismo] innecesario y empieza con un [gancho]. Simplificar sin perder el [rigor] es el reto.',
        ['analogía', 'accesible'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Simplificar no es trivializar',
    ref: [A, 12, 1],
    learn: [
      grammar(
        'El límite',
        'Simplificar es quitar detalles sin cambiar la verdad de lo que queda. Trivializar es quitar lo que la hacía verdadera. «El ADN contiene las instrucciones para fabricar proteínas» simplifica; «el ADN decide todo lo que somos» trivializa.',
      ),
    ],
    test: [
      choice('Elija.', '¿Qué frase explica el efecto invernadero sin falsearlo?', [
        'El CO₂ forma un techo de cristal sobre la Tierra.',
        '*Algunos gases dejan pasar la luz del sol, pero retienen parte del calor que la Tierra devuelve.',
        'El sol calienta más porque la capa de ozono tiene un agujero.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Si la Tierra fuera una manzana',
    ref: [A, 12, 2],
    learn: [
      grammar(
        'Introducir una analogía',
        '«Funciona como», «es como»: neutras. «Imagine que»: invita a construir la escena. «Del mismo modo que…, …»: paralelismo. «Si X fuera Y, …»: hipótesis, con imperfecto de subjuntivo y condicional.',
        {
          headers: ['Fórmula', 'Ejemplo'],
          rows: [
            ['funciona como', 'La memoria RAM funciona como una mesa de trabajo.'],
            ['si X fuera Y', 'Si la Tierra fuera una manzana, la atmósfera sería más fina que su piel.'],
            ['del mismo modo que', 'Del mismo modo que un cerrojo solo admite su llave, cada receptor reconoce una molécula.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'Si la historia de la Tierra [durara] un año, los humanos [aparecerían] el 31 de diciembre. Si el átomo [fuera] un estadio, el núcleo sería un guisante.',
        ['dura', 'aparecerán', 'es'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Dónde termina la analogía',
    ref: [A, 12, 2],
    learn: [
      tip(
        'Marcar el límite',
        'Toda analogía se rompe en algún punto. Basta una frase: «La comparación tiene un límite: …», «A diferencia de un libro, …». Comparar el sistema inmunitario con un ejército explica la defensa, pero oculta que también tolera y convive con microorganismos útiles.',
      ),
    ],
    test: [
      match('¿Qué analogía?', [
        ['la memoria RAM', 'una mesa de trabajo'],
        ['un receptor celular', 'una cerradura que solo abre su llave'],
        ['la expansión del universo', 'un bizcocho con pasas que crece en el horno'],
        ['la resistencia a los antibióticos', 'un insecticida que deja vivos a los más resistentes'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Lo que se conoce como…',
    ref: [A, 12, 3],
    learn: [
      grammar(
        'Integrar un tecnicismo',
        'Aposición: «las mitocondrias, las centrales energéticas de la célula». Reformulador: «hipoxia, es decir, falta de oxígeno». Definición funcional: «la insulina sirve para…». Inversión: primero la idea, luego el nombre, «lo que se conoce como…».',
      ),
    ],
    test: [
      match('¿Qué técnica?', [
        ['Los glaciares pierden más hielo del que ganan, lo que los geólogos llaman balance negativo.', 'inversión'],
        ['La placenta, el órgano que une a la madre con el feto, se forma en el embarazo.', 'aposición'],
        ['Es un anticoagulante, esto es, impide que la sangre forme coágulos.', 'reformulador'],
        ['Los estomas sirven para que la planta intercambie gases.', 'definición funcional'],
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Tres de cada diez mil',
    ref: [A, 12, 4],
    learn: [
      grammar(
        'Traducir magnitudes',
        'Compare con una unidad familiar (piscinas olímpicas), reduzca a una persona o a un día, y use frecuencias naturales: «3 de cada 10.000» se entiende mejor que «0,03 %». Un «aumento del 50 %» puede ser pasar de 2 a 3 casos por cada 10.000.',
      ),
    ],
    test: [
      choice('Un fármaco eleva el riesgo de trombosis de 2 a 3 casos por cada 10.000 mujeres.', '¿Qué titular informa mejor?', [
        'Un fármaco dispara un 50 % el riesgo de trombosis.',
        'El fármaco es totalmente seguro.',
        '*El fármaco eleva el riesgo de trombosis de 2 a 3 casos por cada 10.000 mujeres.',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Todavía no sabemos',
    ref: [A, 12, 4],
    learn: [
      tip(
        'Comunicar la incertidumbre',
        'Ocultarla destruye la confianza cuando los datos cambian; exagerarla paraliza. Se distingue lo seguro («hoy sabemos que»), lo probable («todo apunta a que»), lo que está en estudio («los primeros datos sugieren») y lo desconocido («todavía no sabemos si»).',
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'Hoy [sabemos] con seguridad que el embalse ha perdido la mitad del agua. Los primeros datos [sugieren] que la causa es la sequía, aunque [todavía] no sabemos cuánto influye el riego ilegal.',
        ['sugiera', 'ya'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Resumir lo complejo',
    ref: [A, 12, 5],
    learn: [
      tip(
        'El arco divulgativo',
        'Gancho que conecta con la experiencia, pregunta, mecanismo con una analogía, dato concreto, límite o incertidumbre y cierre que vuelve al principio. Una idea central bien explicada vale más que un resumen proporcional que nadie retiene.',
      ),
    ],
    test: [
      order('Ordene el texto divulgativo.', [
        '¿Por qué el mar es salado y los ríos no?',
        'La lluvia disuelve sales de las rocas y los ríos las llevan al mar.',
        'Allí el agua se evapora, pero la sal se queda, como el poso en una taza.',
        'Tras millones de años, cada litro de agua de mar tiene unos 35 gramos de sal.',
        'Así que el agua del río también lleva sal, solo que tan poca que no se nota.',
      ]),
    ],
  },
]);
