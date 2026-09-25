import {
  ADVANCED as A,
  GRAMMAR as G,
  choice,
  cloze,
  culture,
  grammar,
  lessons,
  match,
  order,
  text,
  tip,
  vocabBuilder,
} from './builders';

const words = vocabBuilder('de');

/** Spanisch C1 – Advanced, Kapitel 1 bis 6, dazu se-Konstruktionen und Zweifel aus dem Grammatikbuch. */
export const ES_C1 = lessons('es-c1', [
  // ------------------------------------------------ Capítulo 1: Variedad
  {
    kind: 'VOCAB',
    title: 'Hablar de la lengua',
    ref: [A, 1, 1],
    learn: [
      words('La variación', [
        ['la variedad', 'die Varietät'],
        ['el rasgo', 'das Merkmal'],
        ['la norma culta', 'die Bildungsnorm'],
        ['el registro', 'das Register'],
        ['el prestigio', 'das Prestige'],
        ['el calco', 'die Lehnübersetzung'],
        ['predominar', 'vorherrschen'],
        ['estar mal visto', 'verpönt sein'],
      ]),
    ],
    test: [
      cloze(
        'Complete.',
        'Cada [variedad] tiene sus [rasgos] y su propia [norma] culta. Entre amigos y en una entrevista cambia el [registro], no la variedad.',
        ['prestigio', 'calco'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Una norma policéntrica',
    ref: [A, 1, 1],
    learn: [
      culture(
        'Varios centros, ninguno manda',
        'Las academias de todos los países hispanohablantes trabajan juntas en la ASALE. Diccionario, gramática y ortografía registran varias normas cultas y su extensión: «ordenador» (España), «computadora» (gran parte de América) y «computador» (Colombia, Chile) son igual de correctos.',
      ),
    ],
    test: [
      choice('Elija.', '¿Qué significa «norma policéntrica»?', [
        'Que cada hablante decide qué es correcto.',
        '*Que hay varias normas cultas, ninguna subordinada a otra.',
        'Que la norma de España es la referencia y las demás, adaptaciones.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Tres ejes de variación',
    ref: [A, 1, 1],
    learn: [
      grammar(
        'Lugar, grupo, situación',
        'La variación diatópica depende del lugar; la diastrática, del grupo social; la diafásica, de la situación. Solo la primera separa variedades: un mismo hablante recorre el eje diafásico varias veces al día.',
        {
          headers: ['Eje', 'Depende de', 'Ejemplo'],
          rows: [
            ['diatópico', 'el lugar', 'zumo / jugo'],
            ['diastrático', 'el grupo social', 'haiga en lugar de haya'],
            ['diafásico', 'la situación', '¿qué tal? / le saluda atentamente'],
          ],
        },
      ),
    ],
    test: [
      match('¿Qué eje?', [
        ['En Sevilla se dice «guagua» solo en broma; en Canarias, siempre.', 'diatópico'],
        ['El mismo abogado habla distinto con su hermano y con el juez.', 'diafásico'],
        ['Algunos hablantes dicen «dijieron»; otros nunca.', 'diastrático'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Vos sabés',
    ref: [A, 1, 2],
    learn: [
      grammar(
        'Las formas del voseo',
        'Las formas de «vos» salen de las de vosotros sin la -i-: habláis → hablás. El acento va al final y el verbo no diptonga: podés, querés, dormís. Ser: sos. El imperativo pierde la -d: hablá, vení, decí.',
        {
          headers: ['Infinitivo', 'tú', 'vos'],
          rows: [
            ['poder', 'puedes', 'podés'],
            ['tener', 'tienes', 'tenés'],
            ['ser', 'eres', 'sos'],
            ['venir (imperativo)', 'ven', 'vení'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete con «vos».',
        '¿[Querés] venir mañana? Si [podés], [traé] el informe. Ya sé que [sos] el que más sabe.',
        ['quieres', 'puedes', 'eres'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Vos te llevaste tu abrigo',
    ref: [A, 1, 2],
    learn: [
      tip(
        'Solo cambian el sujeto y el presente',
        'Con «vos» el pronombre átono sigue siendo «te» y el posesivo «tu». Pretérito, imperfecto y futuro son los de «tú». Nunca «os» ni «vuestro».',
      ),
    ],
    test: [
      choice('¿Qué frase respeta el voseo rioplatense?', 'Elija.', [
        'Vos os quedáis acá.',
        'Vos puedes venir cuando quieras.',
        '*Vos te olvidaste tu paraguas en mi casa.',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Dónde se vosea',
    ref: [A, 1, 2],
    learn: [
      culture(
        'Un mapa desigual',
        'En el Río de la Plata «vos» sustituye del todo a «tú», también por escrito. En Centroamérica convive con «tú» y «usted». En Chile el voseo es verbal e informal («tú sabís»). En México, Perú, el Caribe y España no se vosea.',
      ),
    ],
    test: [
      match('¿Dónde?', [
        ['Vos sabés. (en la prensa y en la escuela)', 'Río de la Plata'],
        ['¿Cachái? (solo entre amigos)', 'Chile'],
        ['Tú sabes. (sin voseo)', 'México'],
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Carro, coche, auto',
    ref: [A, 1, 3],
    learn: [
      tip(
        'Objetos cotidianos, nombres distintos',
        'Todas las formas pertenecen a la norma culta de su zona. Lo peligroso no es el sinónimo, sino la palabra con otra acepción: «coger» es malsonante en México y en el Río de la Plata; allí se dice «tomar» o «agarrar».',
        {
          headers: ['España', 'México', 'Río de la Plata'],
          rows: [
            ['el coche', 'el carro', 'el auto'],
            ['el móvil', 'el celular', 'el celular'],
            ['la piscina', 'la alberca', 'la pileta'],
            ['el autobús', 'el camión', 'el colectivo'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Un mexicano le escribe. Complete.',
        'Te recojo en el [carro] a las ocho y te marco al [celular]. Después vamos a la [alberca] del hotel.',
        ['coche', 'móvil', 'pileta'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: '¿Ya almorzaste?',
    ref: [A, 1, 4],
    learn: [
      grammar(
        'Ustedes y el indefinido',
        'Fuera de España, «ustedes» sirve para la confianza y para el respeto. Y en gran parte de América el indefinido cubre también lo ocurrido hoy: «Hoy me levanté temprano» es la forma esperada, no un error.',
        {
          headers: ['Centro y norte de España', 'Gran parte de América'],
          rows: [
            ['¿Vosotros venís?', '¿Ustedes vienen?'],
            ['Hoy he desayunado a las siete.', 'Hoy desayuné a las siete.'],
            ['sentaos', 'siéntense'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Adapte a un destinatario de Lima.',
        '¿[Pueden] revisar el informe? Esta mañana [llegó] el pedido. [Siéntense], por favor.',
        ['podéis', 'ha llegado', 'sentaos'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: '¿Qué español hablar?',
    ref: [A, 1, 5],
    learn: [
      tip(
        'Tres criterios',
        'Sea coherente: «vosotros» con «carro» llama más la atención que cualquier acento. Elija según su vida real, no según el prestigio. Y distinga producir de comprender: se habla una variedad, pero se entienden todas.',
      ),
    ],
    test: [
      match('¿Qué decisión?', [
        ['Va a trabajar dos años en Quito.', 'Adoptar «ustedes» y el léxico local.'],
        ['Redacta un manual para todos los países.', 'Quedarse en el fondo común, sin regionalismos.'],
        ['Su equipo está en Madrid, Lima y Buenos Aires.', 'Una variedad propia y el oído entrenado para las demás.'],
      ]),
    ],
  },

  // ------------------------------------------------ Capítulo 2: Administración
  {
    kind: 'VOCAB',
    title: 'Trámites y expedientes',
    ref: [A, 2, 1],
    learn: [
      words('La administración', [
        ['el trámite', 'der Behördengang, das Verfahren'],
        ['la solicitud', 'der Antrag'],
        ['el expediente', 'die Akte'],
        ['la resolución', 'der Bescheid'],
        ['el plazo', 'die Frist'],
        ['el recurso', 'der Widerspruch'],
        ['subsanar', 'beheben, nachbessern'],
        ['desestimar', 'ablehnen'],
      ]),
    ],
    test: [
      cloze(
        'Complete.',
        'Su [solicitud] está incompleta. Tiene diez días para [subsanar] la falta. Indique el número de [expediente]. Contra la resolución cabe [recurso].',
        ['plazo', 'desestimar'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Se procederá a la devolución',
    ref: [A, 2, 1],
    learn: [
      grammar(
        'El estilo administrativo',
        'Sustantivos en lugar de verbos, agente oculto, nexos largos y fórmulas fijas. Nada de eso es incorrecto; juntos hacen frases correctas y difíciles.',
        {
          headers: ['Administrativo', 'Llano'],
          rows: [
            ['Se procederá a la devolución del importe.', 'Le devolveremos el dinero.'],
            ['Queda denegada la solicitud.', 'Hemos rechazado su solicitud.'],
            ['con carácter previo a', 'antes de'],
          ],
        },
      ),
    ],
    test: [
      match('¿Qué significa?', [
        ['efectuar el abono', 'pagar'],
        ['a los efectos oportunos', 'para lo que haga falta'],
        ['dar traslado del escrito', 'enviar el documento a otra parte'],
        ['proceder a la subsanación', 'corregir el error'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Las partes de una resolución',
    ref: [A, 2, 2],
    learn: [
      grammar(
        'Dónde está cada cosa',
        'Antecedentes de hecho: lo ocurrido. Fundamentos de derecho: las normas. Parte dispositiva («RESUELVE»): la decisión. Pie de recurso: qué se puede hacer, ante quién y en qué plazo.',
      ),
    ],
    test: [
      order('Ordene las partes.', [
        'encabezamiento',
        'antecedentes de hecho',
        'fundamentos de derecho',
        'parte dispositiva',
        'pie de recurso',
      ]),
      choice('Elija.', '¿Dónde busca primero qué se ha decidido?', [
        'en los antecedentes de hecho',
        '*en la parte dispositiva',
        'en los fundamentos de derecho',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Diez días hábiles',
    ref: [A, 2, 2],
    learn: [
      tip(
        'Contar un plazo',
        '«Hábiles» excluye sábados, domingos y festivos; «naturales», nada. Se cuenta «desde el día siguiente» a la notificación. Si la resolución «no agota la vía administrativa», aún se puede recurrir ante la propia administración.',
      ),
    ],
    test: [
      match('¿Qué significa?', [
        ['días hábiles', 'sin fines de semana ni festivos'],
        ['días naturales', 'todos los días del calendario'],
        ['desde el día siguiente', 'el día de la notificación no cuenta'],
        ['agotar la vía administrativa', 'no quedar recurso ante la administración'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Expone que… solicita que…',
    ref: [A, 2, 3],
    learn: [
      grammar(
        'Hechos y peticiones',
        'Los apartados empiezan con «Que» porque dependen del título: «[la interesada] expone que…», «solicita que…». Tras EXPONE se cuentan hechos en indicativo; tras SOLICITA se pide, en subjuntivo.',
        {
          headers: ['Bloque', 'Modo', 'Ejemplo'],
          rows: [
            ['EXPONE', 'indicativo', 'Que la notificación llegó el 20 de abril.'],
            ['SOLICITA', 'subjuntivo', 'Que se anule la sanción.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'EXPONE: Que la multa se [impuso] cuando el coche ya estaba vendido. SOLICITA: Que se [anule] la sanción y se [devuelva] el importe.',
        ['imponga', 'anula', 'devuelve'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Una petición concreta',
    ref: [A, 2, 3],
    learn: [
      tip(
        'Lo que se puede conceder',
        'La petición tiene que poder concederse o denegarse tal cual: qué acto, qué consecuencia. Las quejas van, si acaso, bajo EXPONE. La firmeza se consigue con hechos y fechas, no con adjetivos.',
      ),
    ],
    test: [
      choice('Elija la mejor petición.', 'SOLICITA:', [
        'Que se tenga en cuenta todo lo anterior y se actúe como corresponda.',
        '*Que se anule la sanción del expediente 2025/0417 y se devuelvan los 200 euros abonados.',
        'Que es una vergüenza el trato recibido.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Salvo que, siempre que',
    ref: [A, 2, 4],
    learn: [
      grammar(
        'Condiciones en los contratos',
        'Todos llevan subjuntivo, pero no dicen lo mismo. «Siempre que» pone una condición necesaria; «salvo que» y «a no ser que», una excepción; «en caso de que», una hipótesis.',
        {
          headers: ['Conector', 'Valor'],
          rows: [
            ['siempre que', 'condición necesaria'],
            ['salvo que / a no ser que', 'excepción'],
            ['en caso de que', 'hipótesis'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'La fianza se devuelve [siempre que] el piso esté en buen estado. El contrato se prorroga [salvo que] una parte lo rescinda. [En caso de que] haya daños, los paga el inquilino.',
        ['porque', 'aunque'],
      ),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'La letra pequeña',
    ref: [A, 2, 4],
    learn: [
      words('El contrato', [
        ['la cláusula', 'die Klausel'],
        ['el arrendatario', 'der Mieter'],
        ['la fianza', 'die Kaution'],
        ['la prórroga tácita', 'die stillschweigende Verlängerung'],
        ['rescindir', 'kündigen, auflösen'],
        ['el preaviso', 'die Kündigungsfrist'],
        ['correr a cargo de', 'zulasten gehen von'],
      ]),
    ],
    test: [
      match('¿Qué significa en la práctica?', [
        ['Las reparaciones menores correrán a cargo del arrendatario.', 'Si se rompe un grifo, paga el inquilino.'],
        ['Podrá rescindirse con un mes de preaviso.', 'Quien quiera irse avisa con treinta días.'],
        ['El contrato se prorrogará tácitamente.', 'Si nadie dice nada, sigue un año más.'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Se prohíbe, se admiten',
    ref: [G, 12, 2],
    learn: [
      grammar(
        'Pasiva refleja e impersonal',
        'Los textos oficiales ocultan al agente con «se». Con un objeto de cosa, el verbo concuerda con él: «se admiten solicitudes» (pasiva refleja). Con personas precedidas de «a», el verbo va en singular: «se notificó a los interesados» (impersonal).',
        {
          headers: ['Construcción', 'Ejemplo'],
          rows: [
            ['pasiva refleja, singular', 'Se prohíbe el subarriendo.'],
            ['pasiva refleja, plural', 'Se admiten recursos hasta el día 30.'],
            ['impersonal con «a»', 'Se citó a los vecinos afectados.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'No se [admiten] solicitudes fuera de plazo. Se [notificó] a todos los interesados. Se [requiere] el DNI original.',
        ['admite', 'notificaron', 'requieren'],
      ),
    ],
  },

  // ------------------------------------------------ Capítulo 3: Investigación
  {
    kind: 'VOCAB',
    title: 'El método',
    ref: [A, 3, 1],
    learn: [
      words('Investigar', [
        ['la hipótesis', 'die Hypothese'],
        ['la muestra', 'die Stichprobe'],
        ['el sesgo', 'die Verzerrung'],
        ['el grupo de control', 'die Kontrollgruppe'],
        ['replicar', 'replizieren'],
        ['la revisión por pares', 'das Peer-Review'],
        ['el hallazgo', 'der Befund'],
      ]),
    ],
    test: [
      cloze(
        'Complete.',
        'El equipo partía de la [hipótesis] de que el ruido afecta a la memoria. La [muestra] era de 300 personas, repartidas al azar; el grupo de [control] trabajó en silencio. Otro laboratorio logró [replicar] el resultado.',
        ['sesgo', 'hallazgo'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Del indicio a la prueba',
    ref: [A, 3, 1],
    learn: [
      grammar(
        'Qué puede mostrar cada diseño',
        'Un estudio observacional encuentra asociaciones, pero no demuestra causas. Un ensayo aleatorizado reparte a los participantes al azar y así puede mostrar una causa. Un metaanálisis reúne muchos estudios.',
      ),
    ],
    test: [
      match('¿Qué problema?', [
        ['Solo participan voluntarios que ya hacen deporte.', 'sesgo de selección'],
        ['Otro laboratorio no obtiene el mismo resultado.', 'falta de replicación'],
        ['Con doce participantes, todo puede ser casual.', 'muestra demasiado pequeña'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'El fármaco reduciría el riesgo',
    ref: [A, 3, 2],
    learn: [
      grammar(
        'Graduar la certeza',
        '«Todo indica que» y «los datos sugieren que» llevan indicativo: son inferencias. «Es posible que» y «no cabe descartar que» llevan subjuntivo. El condicional de rumor presenta un dato ajeno sin confirmarlo: «según la empresa, el fármaco reduciría el riesgo».',
        {
          headers: ['Expresión', 'Modo'],
          rows: [
            ['Los datos sugieren que…', 'indicativo'],
            ['No cabe descartar que…', 'subjuntivo'],
            ['Según la empresa, el fármaco…', 'condicional'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'Los datos sugieren que el tratamiento [funciona]. No cabe descartar que el efecto se [deba] al placebo. Según la empresa, el producto [reduciría] los síntomas.',
        ['funcione', 'debe', 'reduce'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Correlación no es causa',
    ref: [A, 3, 2],
    learn: [
      tip(
        'Tres explicaciones antes de hablar de causa',
        'Causalidad inversa: quizá es B lo que causa A. Variable de confusión: un tercer factor causa las dos cosas. Azar: con muchas comparaciones, alguna coincide.',
      ),
    ],
    test: [
      choice('Un estudio observacional: los niños que desayunan sacan mejores notas.', '¿Qué titular es fiel?', [
        'Desayunar mejora las notas.',
        '*Los niños que desayunan sacan mejores notas, según un estudio que no aclara la causa.',
        'Saltarse el desayuno provoca el fracaso escolar.',
      ]),
      match('¿Qué explicación?', [
        ['Quien va mucho al médico está más enfermo.', 'causalidad inversa'],
        ['Con más helados vendidos hay más ahogados.', 'variable de confusión'],
        ['De cien alimentos, uno se asocia con la calvicie.', 'azar'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Aunque sea fiable',
    ref: [A, 3, 3],
    learn: [
      grammar(
        'Concesivas',
        '«Aunque» + indicativo reconoce un hecho; + subjuntivo lo concede sin discutirlo. «Si bien» es culto y va con indicativo. «Por mucho que» y «aun cuando» suelen ir con subjuntivo.',
        {
          headers: ['Conector', 'Ejemplo'],
          rows: [
            ['aunque + indicativo', 'Aunque el test es fiable, plantea riesgos. (lo es)'],
            ['aunque + subjuntivo', 'Aunque el test sea fiable, plantea riesgos. (da igual)'],
            ['si bien', 'Si bien el coste ha bajado, sigue siendo alto.'],
            ['por mucho que', 'Por mucho que avance la técnica, el dilema sigue.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'Si bien el test [detecta] la enfermedad a tiempo, plantea dudas. Por mucho que la técnica [avance], el dilema seguirá. Aun cuando el paciente [quiera] saberlo, su familia quizá no.',
        ['detecte', 'avanza', 'quiere'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Plantear un dilema',
    ref: [A, 3, 3],
    learn: [
      text(
        'Un dilema no es una pregunta difícil, sino un choque entre dos valores legítimos. Primero se describe la situación sin adjetivos, luego se nombran los valores en conflicto, se da a cada uno su mejor argumento y, solo al final, se propone una salida.',
      ),
    ],
    test: [
      order('Ordene el planteamiento.', [
        'Un test detecta el riesgo de una enfermedad hereditaria.',
        'Chocan el derecho a saber y el derecho a no saber.',
        'Por un lado, permite prevenir.',
        'Por otro, afecta a familiares que no han consentido.',
        'Una salida sería ofrecer antes asesoramiento genético.',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Cuatro principios',
    ref: [A, 3, 4],
    learn: [
      grammar(
        'La ética de la investigación',
        'Autonomía: respetar la decisión informada. Beneficencia: buscar un beneficio real. No maleficencia: no causar daño evitable. Justicia: repartir cargas y beneficios con equidad. El consentimiento es válido si es informado, libre y revocable en cualquier momento.',
      ),
    ],
    test: [
      match('¿Qué principio se vulnera?', [
        ['Se prueba un fármaco solo en presos.', 'justicia'],
        ['El formulario está en un idioma que no entienden.', 'autonomía'],
        ['Se da placebo aunque ya existe un tratamiento eficaz.', 'no maleficencia'],
        ['El estudio es tan pequeño que no servirá para nada.', 'beneficencia'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Sopesar y concluir',
    ref: [A, 3, 5],
    learn: [
      tip(
        'Fórmulas para ponderar',
        'Una ponderación decide, condiciona la decisión y nombra lo que sacrifica: «En este caso debe prevalecer…», «siempre y cuando se garantice que…», «Ello supone renunciar a…», «Esta conclusión no sería válida si…».',
      ),
    ],
    test: [
      choice('Elija.', '¿Qué conclusión pondera de verdad?', [
        'La ciencia siempre debe avanzar, cueste lo que cueste.',
        'Ambas posturas tienen razón y cada uno debe decidir.',
        '*Debe prevalecer el derecho a no saber, siempre y cuando el paciente pueda compartir el resultado; ello supone renunciar a una prevención más amplia.',
      ]),
      cloze(
        'Complete.',
        'El proyecto es aceptable siempre y cuando se [garantice] el anonimato. Ello [supone] renunciar a parte de los datos.',
        ['garantiza', 'suponga'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'No creo que sea casual',
    ref: [G, 9, 4],
    learn: [
      grammar(
        'Duda y negación',
        'Los verbos de opinión negados («no creo», «no pienso», «no está claro») y los de duda («dudo», «es dudoso») llevan subjuntivo. «No dudo que» y «está claro que» afirman, y llevan indicativo.',
        {
          headers: ['Expresión', 'Modo'],
          rows: [
            ['Dudo que el efecto sea real.', 'subjuntivo'],
            ['No está claro que la muestra baste.', 'subjuntivo'],
            ['No dudo que el efecto es real.', 'indicativo'],
            ['Está claro que la muestra no basta.', 'indicativo'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'Dudo que la muestra [sea] representativa. Está claro que el estudio [tiene] limitaciones. No creo que el resultado [pueda] generalizarse.',
        ['es', 'tenga', 'puede'],
      ),
    ],
  },

  // ------------------------------------------------ Capítulo 4: Literatura
  {
    kind: 'VOCAB',
    title: 'Hablar de un texto',
    ref: [A, 4, 1],
    learn: [
      words('El análisis literario', [
        ['el narrador', 'der Erzähler'],
        ['la trama', 'die Handlung'],
        ['el desenlace', 'der Ausgang'],
        ['el verso', 'der Vers'],
        ['la estrofa', 'die Strophe'],
        ['el yo lírico', 'das lyrische Ich'],
        ['el recurso estilístico', 'das Stilmittel'],
        ['evocar', 'heraufbeschwören'],
      ]),
    ],
    test: [
      cloze(
        'Complete.',
        'El poema tiene tres [estrofas] de cuatro [versos]. El [yo lírico] habla a una persona ausente. La novela tiene un [desenlace] abierto.',
        ['trama', 'narrador'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Argumento, tema, tono',
    ref: [A, 4, 1],
    learn: [
      grammar(
        'Tres palabras que se confunden',
        'El argumento es lo que pasa, contado con detalle. El tema es de qué trata en el fondo, en una frase y con un sustantivo abstracto. El tono es la actitud de la voz: irónica, nostálgica, solemne.',
      ),
    ],
    test: [
      choice(
        'Un anciano guarda durante décadas las cartas de su hijo emigrado, sin abrirlas nunca.',
        '¿Cuál es el tema?',
        [
          'Un anciano guarda unas cartas en un cajón.',
          '*El miedo a que la realidad destruya el recuerdo.',
          'El cuento es muy triste.',
        ],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: '¿Quién cuenta?',
    ref: [A, 4, 2],
    learn: [
      grammar(
        'Tipos de narrador',
        'Omnisciente: tercera persona, conoce lo que piensan todos. Limitado: tercera persona, sabe lo que sabe un personaje. Protagonista: primera persona, cuenta su historia. Testigo: primera persona, cuenta la de otro.',
      ),
    ],
    test: [
      match('¿Qué narrador?', [
        ['«Aquel verano mi tío dejó de hablar; yo tenía nueve años.»', 'testigo'],
        ['«Clara sabía que el tren no llegaría; el jefe de estación pensaba en su hija.»', 'omnisciente'],
        ['«Nací en un pueblo sin río y me fui en cuanto pude.»', 'protagonista'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'No vendría. ¿Cómo había podido creerlo?',
    ref: [A, 4, 2],
    learn: [
      grammar(
        'El estilo indirecto libre',
        'Conserva la tercera persona y los tiempos del estilo indirecto, pero suprime el verbo introductor y adopta la voz del personaje, con sus preguntas y exclamaciones.',
        {
          headers: ['Estilo', 'Ejemplo'],
          rows: [
            ['directo', 'Pensó: «No vendrá».'],
            ['indirecto', 'Pensó que no vendría.'],
            ['indirecto libre', 'No vendría. Claro que no vendría.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Pase al estilo indirecto libre: «¿Por qué no me ha llamado? Seguro que está enfadado.»',
        '¿Por qué no la [había] llamado? Seguro que [estaba] enfadado.',
        ['ha', 'está'],
      ),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Es hielo abrasador',
    ref: [A, 4, 3],
    learn: [
      grammar(
        'Figuras frecuentes',
        'Metáfora: identifica dos realidades. Oxímoron: une contrarios. Anáfora: repite el inicio de varios versos. Hipérbaton: altera el orden. Hipérbole: exagera. Paradoja: contradicción aparente.',
        {
          headers: ['Figura', 'Ejemplo'],
          rows: [
            ['metáfora', 'Nuestras vidas son los ríos (Manrique)'],
            ['oxímoron', 'es hielo abrasador, es fuego helado (Quevedo)'],
            ['hipérbaton', 'del salón en el ángulo oscuro (Bécquer)'],
            ['paradoja', 'se hace camino al andar (Machado)'],
          ],
        },
      ),
    ],
    test: [
      match('¿Qué figura?', [
        ['Érase un hombre a una nariz pegado', 'hipérbole'],
        ['Volverán las oscuras golondrinas… / Volverán las tupidas madreselvas', 'anáfora'],
        ['es hielo abrasador, es fuego helado', 'oxímoron'],
        ['del salón en el ángulo oscuro', 'hipérbaton'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'De la figura al efecto',
    ref: [A, 4, 3],
    learn: [
      tip(
        'Nombrar no es interpretar',
        'Después de identificar la figura, pregunte qué añade frente a la versión literal. En «Nuestras vidas son los ríos / que van a dar en la mar», la metáfora dice sin enunciarlo que la vida fluye, tiene una dirección y termina siempre en el mismo sitio.',
      ),
    ],
    test: [
      choice('Elija.', '¿Qué efecto tiene «Caminante, no hay camino, / se hace camino al andar»?', [
        'Describe un paisaje sin caminos.',
        '*Niega un destino previo: el camino es el resultado de la vida, no su punto de partida.',
        'Aconseja llevar mapa.',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Textos en su tiempo',
    ref: [A, 4, 4],
    learn: [
      culture(
        'Cinco momentos',
        'Siglo de Oro (XVI–XVII): Cervantes, Quevedo, Sor Juana. Romanticismo (primera mitad del XIX): Bécquer, Rosalía de Castro. Modernismo (finales del XIX): Rubén Darío, Martí. Generación del 98: Unamuno, Machado. Boom (años sesenta y setenta): García Márquez, Cortázar. En el realismo mágico, lo extraordinario se cuenta con el mismo tono que lo cotidiano, y nadie se asombra.',
      ),
    ],
    test: [
      order('Ordene cronológicamente.', [
        'Siglo de Oro',
        'Romanticismo',
        'Modernismo',
        'Generación del 98',
        'Boom latinoamericano',
      ]),
      choice('Elija.', '¿Qué fragmento responde al realismo mágico?', [
        'Cuando vio el fantasma, Elena gritó y huyó de la casa.',
        '*El año en que llovieron peces, la abuela sacó la sartén grande; lo que la inquietaba era que siempre caían en martes.',
        'La nave aterrizó en Marte en el año 3000.',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'El comentario de texto',
    ref: [A, 4, 5],
    learn: [
      grammar(
        'Los pasos',
        'Localización, tema, estructura, análisis de la forma al servicio del sentido y conclusión. Se escribe en presente («el poeta contrapone») y las citas se integran con el número de verso.',
      ),
    ],
    test: [
      order('Ordene el comentario.', [
        'El poema pertenece a las «Rimas» de Bécquer.',
        'El texto gira en torno a la irrepetibilidad del amor.',
        'Cabe distinguir dos movimientos: lo que volverá y lo que no.',
        'La anáfora de «volverán» subraya lo cíclico de la naturaleza.',
        'En suma, la estructura enfrenta la repetición a lo único.',
      ]),
    ],
  },

  // ------------------------------------------------ Capítulo 5: Economía
  {
    kind: 'VOCAB',
    title: 'Crecer y desarrollarse',
    ref: [A, 5, 1],
    learn: [
      words('Economía y desarrollo', [
        ['el crecimiento', 'das Wachstum'],
        ['la renta per cápita', 'das Pro-Kopf-Einkommen'],
        ['la desigualdad', 'die Ungleichheit'],
        ['la brecha', 'die Kluft'],
        ['la materia prima', 'der Rohstoff'],
        ['el empleo informal', 'die informelle Beschäftigung'],
        ['el tejido productivo', 'die Wirtschaftsstruktur'],
        ['la cohesión social', 'der gesellschaftliche Zusammenhalt'],
      ]),
    ],
    test: [
      cloze(
        'Complete.',
        'Exportar solo [materias primas] apenas diversifica el [tejido productivo]. Sin inversión, el empleo sigue siendo [informal] y la [brecha] entre regiones no se cierra.',
        ['renta', 'cohesión'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Qué mide cada indicador',
    ref: [A, 5, 1],
    learn: [
      grammar(
        'Ningún indicador lo mide todo',
        'El PIB mide la producción, no el reparto. La renta per cápita es una media y oculta a los que quedan muy por debajo. El índice de Gini mide la desigualdad de 0 (todos igual) a 1 (uno lo tiene todo).',
      ),
    ],
    test: [
      choice('La renta per cápita sube un 15 % y el Gini pasa de 0,42 a 0,50.', '¿Qué se puede afirmar?', [
        'Todos son un 15 % más ricos.',
        '*Se produce más por habitante, pero el reparto es más desigual.',
        'La desigualdad ha bajado.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'La subida de los precios',
    ref: [A, 5, 2],
    learn: [
      grammar(
        'El estilo nominal',
        'El verbo se convierte en sustantivo y su sujeto pasa a un complemento con «de»: «los precios suben» → «la subida de los precios». Condensa y encadena causas; a cambio, oculta al agente.',
        {
          headers: ['Verbo', 'Sustantivo'],
          rows: [
            ['caer', 'la caída'],
            ['encarecer', 'el encarecimiento'],
            ['reducir', 'la reducción'],
            ['recuperarse', 'la recuperación'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'El [aumento] de los tipos y el [endurecimiento] del crédito explican la [caída] de la inversión.',
        ['aumentar', 'caer'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Cuatro sustantivos seguidos',
    ref: [A, 5, 2],
    learn: [
      tip(
        'Dosificar',
        'El estilo nominal sirve en títulos y resúmenes. Falla cuando se encadenan tres o cuatro sustantivos con «de», o cuando esconde a quien actúa: «se ha producido una reducción de plantilla» suena más suave que «la empresa ha despedido a doscientas personas».',
      ),
    ],
    test: [
      choice(
        '«La implementación de la mejora de la gestión de la recaudación permitió la reducción del déficit.»',
        '¿Qué versión es más clara?',
        [
          '*Al recaudar mejor los impuestos, el Estado redujo el déficit.',
          'La reducción del déficit se implementó mediante la recaudación de la gestión.',
          'Se produjo una mejora de la reducción de la recaudación.',
        ],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Dos puntos, no un 2 %',
    ref: [A, 5, 3],
    learn: [
      grammar(
        'Puntos porcentuales',
        'Si el paro pasa del 10 % al 12 %, sube dos puntos porcentuales, pero un 20 % respecto a su valor anterior. Entre dos tasas se habla de puntos.',
        {
          headers: ['Cambio', 'En puntos', 'En porcentaje'],
          rows: [
            ['del 10 % al 12 %', '+2 puntos', '+20 %'],
            ['del 4 % al 3 %', '−1 punto', '−25 %'],
          ],
        },
      ),
    ],
    test: [
      choice('La inflación pasa del 3 % al 6 %.', '¿Qué frase es exacta?', [
        'Ha subido un 3 %.',
        '*Ha subido tres puntos; se ha duplicado.',
        'Ha subido un 50 %.',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Dispararse, estancarse, repuntar',
    ref: [A, 5, 3],
    learn: [
      words('Verbos de la variación', [
        ['dispararse', 'in die Höhe schnellen'],
        ['desplomarse', 'einbrechen'],
        ['repuntar', 'wieder anziehen'],
        ['estancarse', 'stagnieren'],
        ['desacelerarse', 'sich verlangsamen'],
        ['experimentar un descenso', 'einen Rückgang verzeichnen'],
      ]),
    ],
    test: [
      match('¿Qué verbo?', [
        ['Ventas: 100, 98, 60', 'se desplomaron'],
        ['Crecimiento: 4 %, 3 %, 2 %', 'se desaceleró'],
        ['Paro: 12 %, 12 %, 12 %', 'se estancó'],
        ['Turistas: 5, 3, 4 millones', 'repuntaron'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'A costa de, sin que',
    ref: [A, 5, 4],
    learn: [
      grammar(
        'El precio de un objetivo',
        '«A costa de» y «en detrimento de» nombran lo que se sacrifica. «Sin que» + subjuntivo niega una consecuencia esperada. «En la medida en que» establece una proporción; «cuanto más…, menos…», una relación gradual.',
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'La economía creció [sin que] mejoraran los salarios. El auge se logró [a costa de] los acuíferos. [Cuanto más] se retrase la reforma, mayor será el coste.',
        ['porque', 'gracias a'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Posiciones frente a frente',
    ref: [A, 5, 5],
    learn: [
      tip(
        'Exponer con justicia',
        'Atribuya cada postura a quien la sostiene, formúlela en su versión más sólida y use verbos neutros: «sostienen», «defienden», «consideran». «Pretenden» o «alegan» ya insinúan que el otro se equivoca.',
      ),
    ],
    test: [
      choice('Elija.', '¿Qué frase presenta la postura sin desacreditarla?', [
        'Otros pretenden que la culpa es de la productividad.',
        '*Frente a ello, otros consideran que el origen está en la baja productividad.',
        'Algunos ingenuos creen que basta con dar créditos.',
      ]),
    ],
  },

  // ------------------------------------------------ Capítulo 6: Discurso
  {
    kind: 'VOCAB',
    title: 'Engañar sin mentir',
    ref: [A, 6, 1],
    learn: [
      words('Discurso y manipulación', [
        ['el encuadre', 'das Framing'],
        ['el titular', 'die Schlagzeile'],
        ['el eufemismo', 'der Euphemismus'],
        ['la falacia', 'der Trugschluss'],
        ['insinuar', 'andeuten, unterstellen'],
        ['tergiversar', 'verdrehen'],
        ['descontextualizar', 'aus dem Zusammenhang reißen'],
        ['desmentir', 'dementieren'],
      ]),
    ],
    test: [
      match('¿Qué término?', [
        ['Se cita media frase del entrevistado, que completa dice lo contrario.', 'descontextualizar'],
        ['«Ajuste de plantilla» por doscientos despidos.', 'eufemismo'],
        ['El concejal niega públicamente la noticia.', 'desmentir'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Recortes o ajustes',
    ref: [A, 6, 2],
    learn: [
      grammar(
        'El encuadre',
        'Dos palabras pueden designar la misma realidad y activar marcos distintos: «recortes» evoca daño; «ajustes», corrección. «Una ola de turistas inunda el centro» trae el marco de la catástrofe natural.',
        {
          headers: ['Marco A', 'Marco B'],
          rows: [
            ['recortes', 'ajustes'],
            ['carga fiscal', 'contribución'],
            ['guerra contra la droga', 'política de drogas'],
          ],
        },
      ),
    ],
    test: [
      match('¿Qué marco activa?', [
        ['El Gobierno rescata a la banca con dinero público', 'privilegio de unos a costa de todos'],
        ['El Gobierno inyecta liquidez para estabilizar el sistema', 'medida técnica de prevención'],
        ['Los sindicatos paralizan el país', 'perjuicio causado por una organización'],
        ['Miles de trabajadores secundan la huelga', 'apoyo masivo a una reivindicación'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: '¿Quién cerró la biblioteca?',
    ref: [A, 6, 2],
    learn: [
      grammar(
        'Borrar al agente',
        'La pasiva sin agente, el «se» impersonal y la nominalización permiten contar un hecho sin decir quién lo hizo.',
        {
          headers: ['Construcción', 'Ejemplo'],
          rows: [
            ['activa', 'El ayuntamiento cerró la biblioteca.'],
            ['pasiva sin agente', 'La biblioteca fue cerrada.'],
            ['se impersonal', 'Se cerró la biblioteca.'],
            ['nominalización', 'El cierre afectó a cientos de lectores.'],
          ],
        },
      ),
    ],
    test: [
      order('De más a menos visible el responsable.', [
        'El ayuntamiento cerró la biblioteca.',
        'La biblioteca fue cerrada por el ayuntamiento.',
        'Se cerró la biblioteca.',
        'El cierre de la biblioteca afectó a cientos de lectores.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: '¿Ha dejado de mentir?',
    ref: [A, 6, 3],
    learn: [
      grammar(
        'Presuposiciones',
        'Algunas palabras dan algo por hecho sin afirmarlo. Verbos de cambio («dejar de», «volver a»), verbos factivos («reconocer», «lamentar»), preguntas con «por qué» y adverbios como «todavía».',
      ),
      tip(
        'Desactivarlas',
        'Responder a la pregunta es aceptar la premisa. Primero se nombra: «Su pregunta da por hecho algo que no es cierto…».',
      ),
    ],
    test: [
      match('¿Qué presupone?', [
        ['¿Sigue usted defendiendo esa ley?', 'que antes la defendía'],
        ['¿Lamenta haber mentido?', 'que mintió'],
        ['¿Por qué vuelve a subir los impuestos?', 'que ya los subió antes'],
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Falacias',
    ref: [A, 6, 4],
    learn: [
      grammar(
        'Seis trampas frecuentes',
        'Ad hominem: atacar a la persona. Hombre de paja: deformar la postura contraria. Falso dilema: solo dos opciones. Pendiente resbaladiza: consecuencias encadenadas sin pruebas. Generalización apresurada: concluir de pocos casos. Falsa autoridad: citar a quien no es experto.',
      ),
    ],
    test: [
      match('¿Qué falacia?', [
        ['«Si permitimos terrazas hasta las doce, pronto no dormirá nadie.»', 'pendiente resbaladiza'],
        ['«O subimos los impuestos o cerramos hospitales.»', 'falso dilema'],
        ['«¿Usted habla de ecología, con el coche que tiene?»', 'ad hominem'],
        ['«O sea, que quiere abrir las fronteras sin control.»', 'hombre de paja'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Responder a una falacia',
    ref: [A, 6, 4],
    learn: [
      tip(
        'Mostrar el mecanismo',
        'Nombrar la falacia con su término técnico suena pedante. Es más eficaz mostrarla con palabras normales: «Yo no he dicho eso; he dicho…», «Hay más opciones que esas dos», «Hablemos del argumento, no de mi coche».',
      ),
    ],
    test: [
      choice('«O construimos la autopista o esta comarca se muere.»', '¿Qué respuesta desmonta mejor la falacia?', [
        'Eso es un falso dilema, una falacia informal conocida.',
        '*Hay más de dos caminos: mejorar el tren o la carretera actual cuesta menos.',
        'Usted siempre exagera.',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Leer contra el texto',
    ref: [A, 6, 5],
    learn: [
      text(
        '«Otra vez el Ayuntamiento nos castiga. La nueva tasa es un sablazo más a unas familias asfixiadas. ¿Hasta cuándo van a seguir metiendo la mano en nuestro bolsillo? Mi cuñado ya paga más en impuestos que en alquiler. O el alcalde la retira, o esta ciudad se vaciará.»',
      ),
    ],
    test: [
      match('¿Qué procedimiento?', [
        ['«Otra vez», «seguir metiendo la mano»', 'presuposición'],
        ['«castiga», «sablazo», «asfixiadas»', 'encuadre'],
        ['«Mi cuñado ya paga más…»', 'generalización apresurada'],
        ['«O la retira, o la ciudad se vaciará.»', 'falso dilema'],
      ]),
    ],
  },
]);
