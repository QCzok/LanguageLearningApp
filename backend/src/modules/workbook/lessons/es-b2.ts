import {
  INTERMEDIATE as I,
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

/** Spanisch B2 – Intermediate, Kapitel 7 bis 12, dazu Bedingungssätze, Passiv und indirekte Rede aus dem Grammatikbuch. */
export const ES_B2 = lessons('es-b2', [
  // ------------------------------------------------ Capítulo 7: Argumentar
  {
    kind: 'VOCAB',
    title: 'Tomar postura',
    ref: [I, 7, 1],
    learn: [
      words('La discusión pública', [
        ['la postura', 'die Haltung, der Standpunkt'],
        ['la medida', 'die Maßnahme'],
        ['el partidario', 'der Befürworter'],
        ['plantear', 'aufwerfen, vorschlagen'],
        ['sostener', 'behaupten, vertreten'],
        ['matizar', 'differenzieren, einschränken'],
        ['poner en duda', 'in Frage stellen'],
        ['a mi juicio', 'meines Erachtens'],
      ]),
    ],
    test: [
      cloze(
        'Complete.',
        'Los [partidarios] de la [medida] sostienen que reducirá el tráfico. Otros la ponen en [duda]. A mi [juicio], hay que [matizar] los datos.',
        ['postura', 'plantear'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Creo que funciona – no creo que funcione',
    ref: [I, 7, 1],
    learn: [
      grammar(
        'Opinar con el modo',
        'Los verbos de opinión llevan indicativo en afirmativo y subjuntivo en negativo. En preguntas, el indicativo pregunta de verdad; el subjuntivo sugiere ya la respuesta negativa. Valoración («es lógico que») → subjuntivo; constatación («es evidente que») → indicativo.',
        {
          headers: ['Forma', 'Ejemplo', 'Modo'],
          rows: [
            ['afirmativa', 'Creo que la medida funciona.', 'indicativo'],
            ['negativa', 'No creo que la medida funcione.', 'subjuntivo'],
            ['valoración', 'Es lógico que la gente proteste.', 'subjuntivo'],
            ['constatación', 'Es evidente que la gente protesta.', 'indicativo'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'Es evidente que el tráfico [ha] aumentado. No creo que la nueva línea [sea] suficiente. Es lógico que los vecinos [protesten].',
        ['haya', 'es', 'protestan'],
      ),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Matizar',
    ref: [I, 7, 1],
    learn: [
      tip(
        'Hasta dónde llega lo que digo',
        '«Los jóvenes no leen» cae con un solo joven que lea. Matizar es limitar la cantidad (en buena parte), el ámbito (sobre todo en), la certeza (todo indica que) o la fuente (según).',
      ),
    ],
    test: [
      match('¿Qué se limita?', [
        ['la mayoría de los casos', 'la cantidad'],
        ['sobre todo en las ciudades grandes', 'el ámbito'],
        ['todo indica que', 'la certeza'],
        ['según el último informe', 'la fuente'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Sin embargo, por lo tanto, es decir',
    ref: [I, 7, 2],
    learn: [
      grammar(
        'Cinco funciones',
        'Agrupe los conectores por lo que hacen. «o sea» es oral; en un informe, «es decir». Los conectores de párrafo abren la frase sin cambiar el orden: «Sin embargo, el plazo es corto» (no «Sin embargo es el plazo corto»).',
        {
          headers: ['Función', 'Conectores'],
          rows: [
            ['añadir', 'además, asimismo, a esto se suma'],
            ['contrastar', 'sin embargo, no obstante, en cambio'],
            ['concluir', 'por lo tanto, así pues, de ahí que'],
            ['causar', 'ya que, dado que, puesto que'],
            ['reformular', 'es decir, en otras palabras'],
          ],
        },
      ),
    ],
    test: [
      match('¿Qué función?', [
        ['asimismo', 'añadir'],
        ['no obstante', 'contrastar'],
        ['así pues', 'concluir'],
        ['dado que', 'causar'],
        ['en otras palabras', 'reformular'],
      ]),
      choice('Elija la frase correcta.', 'Elija.', [
        'Sin embargo es el plazo corto.',
        '*Sin embargo, el plazo es corto.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'De ahí que, no es que',
    ref: [I, 7, 2],
    learn: [
      grammar(
        'Conectores que cambian el modo',
        '«de ahí que» y «no es que» piden siempre subjuntivo. «puesto que» y «dado que», indicativo.',
        {
          headers: ['Conector', 'Ejemplo'],
          rows: [
            ['de ahí que', 'Faltan datos; de ahí que nadie decida.'],
            ['no es que… sino que', 'No es que falte dinero, sino que está mal repartido.'],
            ['dado que', 'Dado que faltan datos, nadie decide.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'El plazo es corto; de ahí que nadie [quiera] presentarse. No es que [falten] voluntarios, sino que nadie los [organiza]. Dado que [llueve], aplazamos la reunión.',
        ['quiere', 'faltan de', 'llueva'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Aunque cuesta – aunque cueste',
    ref: [I, 7, 3],
    learn: [
      grammar(
        'Aunque: informar o conceder',
        'Con indicativo, lo que sigue a «aunque» se presenta como información nueva. Con subjuntivo, es algo ya sabido que se admite de paso, o una hipótesis.',
        {
          headers: ['Frase', 'Significa'],
          rows: [
            ['Aunque la obra cuesta mucho, hay que hacerla.', 'informo del coste'],
            ['Aunque la obra cueste mucho, hay que hacerla.', 'ya lo sabemos; lo admito'],
            ['Aunque cueste el doble, hay que hacerla.', 'hipótesis'],
          ],
        },
      ),
    ],
    test: [
      match('¿Qué dice la frase?', [
        ['Aunque llueve, salimos.', 'Es regnet – das ist neu für dich.'],
        ['Aunque llueva, saldremos.', 'Selbst wenn es regnen sollte.'],
        ['Aunque costó mucho, mereció la pena.', 'Tatsache in der Vergangenheit.'],
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Si bien, ahora bien, eso sí',
    ref: [I, 7, 3],
    learn: [
      tip(
        'La familia del «sí, pero»',
        '«si bien»: escrito, concede poco. «ahora bien»: concede y gira con fuerza. «eso sí»: reserva al final, oral. «por más que»: la concesión no cambia nada. Estructura de una réplica: reformular, conceder, explicar por qué no basta.',
      ),
    ],
    test: [
      cloze(
        'Complete.',
        '[Si] bien la cifra ha bajado, sigue siendo alta. Tiene razón. [Ahora] bien, el coste lo paga otro. Funciona. Eso [sí], hay que esperar seis meses. Por [más] que lo repita, nadie le hace caso.',
        ['Aunque', 'no'],
      ),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Tomar y ceder la palabra',
    ref: [I, 7, 4],
    learn: [
      tip(
        'Gestionar el turno',
        'Estas fórmulas no aportan contenido: gestionan quién habla. Se aprenden como bloques.',
      ),
      culture(
        'El solapamiento',
        'En buena parte del mundo hispanohablante se empieza a hablar antes de que el otro termine, y no se interpreta como falta de respeto. Entre en cuanto el otro cierre una idea, no cuando haga una pausa.',
      ),
    ],
    test: [
      match('¿Para qué sirve?', [
        ['¿Me permite?', 'pedir la palabra'],
        ['Perdone que le interrumpa, pero…', 'interrumpir con cortesía'],
        ['Déjeme terminar la idea.', 'defender el turno'],
        ['Le dejo con la palabra.', 'ceder el turno'],
        ['Volviendo a lo que decíamos…', 'volver al tema'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Escribir una argumentación',
    ref: [I, 7, 5],
    learn: [
      grammar(
        'Las cuatro partes',
        'Presentación del tema, tesis y argumentos, objeción y respuesta, conclusión. Saltarse la objeción es el error más caro: deja intactas las razones del que piensa lo contrario.',
      ),
      tip(
        'Registro',
        'Evite «todos sabemos que…». Prefiera «se objetará», «cabe recordar», «conviene distinguir», y «a mi juicio» una o dos veces. «absolutamente insostenible» convence menos que «insostenible».',
      ),
    ],
    test: [
      order('Ordene las partes.', [
        'presentación del tema',
        'tesis y argumentos',
        'objeción y respuesta',
        'conclusión',
      ]),
      choice('¿Qué frase tiene el registro adecuado?', 'Elija.', [
        'Todos sabemos que la consulta es absolutamente necesaria.',
        '*Se objetará que la consulta retrasa las obras.',
        'O sea, la consulta mola.',
      ]),
    ],
  },

  // ------------------------------------------------ Capítulo 8: Economía
  {
    kind: 'VOCAB',
    title: 'Leer una cifra',
    ref: [I, 8, 1],
    learn: [
      words('Economía y trabajo', [
        ['el paro / el desempleo', 'die Arbeitslosigkeit'],
        ['la tasa', 'die Quote, Rate'],
        ['el poder adquisitivo', 'die Kaufkraft'],
        ['la plantilla', 'die Belegschaft'],
        ['el convenio colectivo', 'der Tarifvertrag'],
        ['la facturación', 'der Umsatz'],
        ['el beneficio', 'der Gewinn'],
        ['al alza / a la baja', 'steigend / fallend'],
      ]),
    ],
    test: [
      match('Relacione.', [
        ['la plantilla', 'Belegschaft'],
        ['la facturación', 'Umsatz'],
        ['el beneficio', 'Gewinn'],
        ['el convenio colectivo', 'Tarifvertrag'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Las tres preguntas de toda cifra',
    ref: [I, 8, 1],
    learn: [
      tip(
        'Antes de comentar un dato',
        '¿Comparado con qué? ¿Cuánto es mucho? ¿Qué mide exactamente?',
      ),
      text(
        'La tasa de paro no cuenta a todas las personas sin trabajo, sino a las que buscan empleo de manera activa. Quien ha dejado de buscar porque ya no espera encontrarlo sale de la estadística, y la tasa baja sin que nadie haya sido contratado. Por eso los informes serios publican junto a ella la tasa de actividad.',
      ),
    ],
    test: [
      choice('Lea el texto.', '¿Por qué puede bajar la tasa de paro sin nuevos contratos?', [
        'por la inflación',
        '*porque hay gente que deja de buscar empleo',
        'porque sube la facturación',
      ]),
      choice('¿Qué pregunta responde el texto?', 'Elija.', [
        '¿Comparado con qué?',
        '¿Cuánto es mucho?',
        '*¿Qué mide exactamente?',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Subir, caer, dispararse',
    ref: [I, 8, 2],
    learn: [
      grammar(
        'Verbos de evolución',
        'Elegir el verbo adecuado ahorra un adverbio y evita exagerar: «se desplomó» dice lo que «bajó muchísimo» dice mal.',
        {
          headers: ['Dirección', 'Suave', 'Marcado', 'Extremo'],
          rows: [
            ['arriba', 'repuntar', 'subir, aumentar', 'dispararse'],
            ['abajo', 'moderarse, ceder', 'bajar, caer', 'desplomarse'],
            ['sin cambio', 'mantenerse', 'estancarse', 'congelarse'],
          ],
        },
      ),
    ],
    test: [
      order('De la caída más suave a la más fuerte', ['ceder', 'bajar', 'desplomarse']),
      match('Relacione.', [
        ['subir muchísimo de golpe', 'dispararse'],
        ['subir un poco tras bajar', 'repuntar'],
        ['no moverse durante mucho tiempo', 'estancarse'],
        ['llegar al punto más alto', 'tocar techo'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Dos puntos o un 25 %',
    ref: [I, 8, 2],
    learn: [
      grammar(
        'Por ciento y puntos porcentuales',
        'Si una tasa pasa del 8 % al 10 %, ha subido dos puntos porcentuales; en términos relativos, un 25 %. El artículo «un» delante del porcentaje no es opcional.',
      ),
      tip(
        'Qué tiempo para qué tramo',
        'Tramo cerrado: indefinido («creció hasta 2022»). Desde entonces hasta hoy: perfecto («se ha mantenido»). Previsión: futuro o «apuntar a».',
      ),
    ],
    test: [
      choice('Elija.', 'El paro pasa del 10 % al 12 %. Ha subido…', [
        'un 2 %',
        '*dos puntos porcentuales',
        'un 12 %',
      ]),
      choice('Elija.', 'Y en términos relativos ha subido…', ['un 2 %', '*un 20 %', 'dos puntos']),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Cuando desaparece el sujeto',
    ref: [I, 8, 3],
    learn: [
      grammar(
        'Tres maneras de quitar al agente',
        'Pasiva con ser: participio concordado, agente con «por». Pasiva refleja: «se» + verbo que concuerda con la cosa («se vendieron los pisos»). Impersonal con «se»: siempre singular, con persona introducida por «a» («se despidió a doce empleados»).',
        {
          headers: ['Construcción', 'Ejemplo'],
          rows: [
            ['pasiva con ser', 'Los pisos fueron vendidos por la promotora.'],
            ['pasiva refleja', 'Se vendieron los pisos en dos semanas.'],
            ['impersonal con se', 'Se despidió a doce empleados.'],
            ['tercera del plural', 'Han despedido a doce empleados.'],
          ],
        },
      ),
    ],
    test: [
      match('¿Qué construcción?', [
        ['La planta fue cerrada en marzo.', 'pasiva con ser'],
        ['Se cerraron dos plantas.', 'pasiva refleja'],
        ['Se contrató a tres ingenieras.', 'impersonal con se'],
      ]),
      choice('¿Quién decidió?', '¿Qué frase lo dice?', [
        'Se han congelado los salarios.',
        '*La dirección ha congelado los salarios.',
        'Los salarios no han subido.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Se necesitan camareros',
    ref: [I, 8, 3],
    learn: [
      tip(
        'El error de concordancia más común',
        'Con pasiva refleja, el verbo concuerda con lo vendido o contratado: «se necesitan camareros». Si hay «a» delante de persona, singular: «se contrató a dos ingenieras».',
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'Se [alquilan] habitaciones. Se [busca] camarero. Se [contrató] a dos ingenieras. Se [venden] pisos.',
        ['alquila', 'contrataron', 'vende'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Quería comentarle una cosa',
    ref: [I, 8, 4],
    learn: [
      grammar(
        'Negociar con el verbo',
        'El presente exige, el condicional propone, el imperfecto de cortesía suaviza todavía más. Al cerrar un acuerdo se vuelve al presente.',
        {
          headers: ['Función', 'Ejemplo'],
          rows: [
            ['abrir el tema', 'Quería comentarle una cosa.'],
            ['proponer', 'Me gustaría llegar a un acuerdo.'],
            ['sondear', '¿Podríamos hablar de un complemento?'],
            ['condición', 'Si el convenio lo impide, propongo otra vía.'],
            ['cerrar', 'De acuerdo, lo aplicamos desde enero.'],
          ],
        },
      ),
    ],
    test: [
      order('Ordene la negociación.', [
        'Quería comentarle una cosa.',
        'Me gustaría plantearle los datos de este año.',
        'Lo entiendo, eso lo doy por descontado.',
        'Si la subida no es posible, ¿podríamos hablar de un día más de vacaciones?',
        'De acuerdo, lo aplicamos desde enero.',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'El informe',
    ref: [I, 8, 5],
    learn: [
      text(
        'Resultados: «El 62 % de las incidencias se concentró en el turno de noche. El tiempo medio de resolución fue de 4,3 horas, frente a 1,8 en el turno de mañana». Recomendaciones: «Convendría reforzar el turno de noche con un segundo técnico. La medida supondría un coste anual en torno a los 38 000 euros».',
      ),
      tip(
        'Fórmulas del informe',
        'Objeto: «El presente informe analiza…». Fuente: «Los datos proceden de…». Resultado: «Se observa que…». Conclusión: «De lo anterior se desprende que…». Recomendación: «Convendría…».',
      ),
    ],
    test: [
      match('¿En qué apartado?', [
        ['El 62 % de las incidencias se concentró de noche.', 'resultados'],
        ['Convendría reforzar el turno de noche.', 'recomendaciones'],
        ['Los datos proceden del registro interno.', 'metodología'],
        ['De lo anterior se desprende que…', 'conclusiones'],
      ]),
      choice('¿Qué tiempo verbal usan las recomendaciones?', 'Elija.', [
        'indefinido',
        '*condicional',
        'imperativo',
      ]),
    ],
  },

  // ------------------------------------------------ Capítulo 9: Suponer
  {
    kind: 'GRAMMAR',
    title: 'Si llueve, si lloviera, si hubiera llovido',
    ref: [I, 9, 1],
    learn: [
      grammar(
        'Tres tipos de condición',
        'Detrás de «si» nunca va presente de subjuntivo ni condicional: «si tendría» y «si tenga» no existen.',
        {
          headers: ['Tipo', 'si…', 'consecuencia'],
          rows: [
            ['I: real', 'presente de indicativo', 'presente / futuro / imperativo'],
            ['II: irreal del presente', 'imperfecto de subjuntivo', 'condicional'],
            ['III: irreal del pasado', 'pluscuamperfecto de subjuntivo', 'condicional compuesto'],
          ],
        },
      ),
    ],
    test: [
      match('¿Qué dice la frase?', [
        ['Si llueve, no salimos.', 'cuenta con la lluvia'],
        ['Si lloviera, no saldríamos.', 'la considera poco probable'],
        ['Si hubiera llovido, no habríamos salido.', 'sabe que no llovió'],
      ]),
      choice('Elija la frase correcta.', 'Elija.', [
        'Si tendría tiempo, te ayudaría.',
        '*Si tuviera tiempo, te ayudaría.',
        'Si tenga tiempo, te ayudaría.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'tuviera, hiciera, fuera',
    ref: [I, 9, 2],
    learn: [
      grammar(
        'El imperfecto de subjuntivo',
        'Tercera persona del plural del indefinido, sin -ron, más las terminaciones: -ra, -ras, -ra, -ramos, -rais, -ran. Las irregularidades ya vienen del indefinido. La serie en -se (tuviese) es equivalente.',
        {
          headers: ['Verbo', 'ellos (indefinido)', 'yo / él'],
          rows: [
            ['hablar', 'hablaron', 'hablara'],
            ['tener', 'tuvieron', 'tuviera'],
            ['hacer', 'hicieron', 'hiciera'],
            ['ser / ir', 'fueron', 'fuera'],
            ['decir', 'dijeron', 'dijera'],
          ],
        },
      ),
    ],
    test: [
      match('Infinitivo e imperfecto de subjuntivo', [
        ['poder', 'pudiera'],
        ['estar', 'estuviera'],
        ['venir', 'viniera'],
        ['saber', 'supiera'],
        ['dar', 'diera'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Quiero que vengas – quería que vinieras',
    ref: [I, 9, 2],
    learn: [
      grammar(
        'El subjuntivo sigue al verbo principal',
        'Si el verbo principal está en presente, el subjuntivo va en presente. Si está en pasado o en condicional, el subjuntivo retrocede al imperfecto.',
        {
          headers: ['Verbo principal', 'Ejemplo'],
          rows: [
            ['presente', 'Quiero que vengas.'],
            ['indefinido', 'Quise que vinieras.'],
            ['imperfecto', 'Quería que vinieras.'],
            ['condicional', 'Me gustaría que vinieras.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'Espero que [llegues] pronto. Me pidió que lo [llamara]. Me gustaría que [vinieras] a la cena.',
        ['llegaras', 'llame', 'vengas'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Si fuera tú…',
    ref: [I, 9, 3],
    learn: [
      grammar(
        'Cuatro usos del tipo II',
        'Hipótesis irreal, situación improbable, petición cortés y consejo suave. «Si pudiera usted firmarlo hoy» no es irreal: es cortés.',
        {
          headers: ['Uso', 'Ejemplo'],
          rows: [
            ['hipótesis irreal', 'Si fuera más alto, jugaría al baloncesto.'],
            ['improbable', 'Si me tocara la lotería, no dejaría de trabajar.'],
            ['petición cortés', 'Si pudiera usted firmarlo hoy, lo agradeceríamos.'],
            ['consejo', 'Yo que tú, se lo diría.'],
          ],
        },
      ),
      culture(
        'Si me tocara, me compraba…',
        'En la lengua hablada, el imperfecto de indicativo sustituye a menudo al condicional: «me compraba una casa». Por escrito, «me compraría».',
      ),
    ],
    test: [
      match('¿Qué uso?', [
        ['Si pudiera enviármelo hoy, se lo agradecería.', 'petición cortés'],
        ['Yo que tú, lo aceptaría.', 'consejo'],
        ['Si viviera en Lisboa, iría al mar cada día.', 'hipótesis irreal'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Si hubiera sabido…',
    ref: [I, 9, 4],
    learn: [
      grammar(
        'El tipo III',
        'si + hubiera + participio, consecuencia con habría + participio. Admitido también: «hubiera» en las dos partes. Incorrecto: «si habría».',
      ),
      tip(
        'Lamentar sin reprochar',
        'Con «tú» suena a reproche. Neutro: «Si lo hubiéramos hablado antes…», «Si se hubiera avisado a tiempo…».',
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'Si [hubiera] sabido la fecha, te [habría] avisado. Si [hubiéramos] salido antes, no habríamos perdido el tren.',
        ['habría sabido', 'hubiéramos habido'],
      ),
      choice('¿Qué frase lamenta sin reprochar?', 'Elija.', [
        'Si me lo hubieras dicho…',
        '*Si lo hubiéramos hablado antes…',
        'Fue culpa tuya.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Si hubiera estudiado, hoy sería médico',
    ref: [G, 11, 3],
    learn: [
      grammar(
        'Frases mixtas',
        'La condición está en el pasado y la consecuencia afecta al presente: pluscuamperfecto de subjuntivo + condicional simple. También al revés: una característica permanente con consecuencia pasada.',
        {
          headers: ['Condición', 'Consecuencia', 'Sentido'],
          rows: [
            ['Si hubiera estudiado,', 'habría aprobado.', 'todo en el pasado'],
            ['Si hubiera estudiado,', 'ahora tendría trabajo.', 'consecuencia hoy'],
            ['Si no fuera tan tímido,', 'habría dicho algo.', 'rasgo permanente'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'Si hubiera aceptado aquel trabajo, ahora [viviría] en Chile. Si fuera más ordenado, no [habría] perdido las llaves.',
        ['hubiera vivido', 'hubiera'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Como si fuera el jefe',
    ref: [I, 9, 5],
    learn: [
      grammar(
        'Como si: siempre subjuntivo',
        'Simultáneo: imperfecto de subjuntivo («habla como si fuera el jefe»). Anterior: pluscuamperfecto («lo cuenta como si lo hubiera visto»).',
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'Me mira como si no me [conociera]. Lo cuenta como si lo [hubiera] visto. Gasta como si [fuera] millonario.',
        ['conoce', 'ha', 'es'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Ojalá llueva – ojalá lloviera',
    ref: [I, 9, 5],
    learn: [
      grammar('Cuatro tiempos, cuatro deseos', 'El tiempo dice cuánta esperanza hay.', {
        headers: ['Forma', 'Ejemplo', 'Grado'],
        rows: [
          ['presente subj.', 'Ojalá llueva mañana.', 'posible'],
          ['imperfecto subj.', 'Ojalá lloviera de una vez.', 'improbable'],
          ['perfecto subj.', 'Ojalá haya llegado bien.', 'posible, ya ocurrido'],
          ['pluscuamperfecto subj.', 'Ojalá hubiera llovido en mayo.', 'imposible'],
        ],
      }),
    ],
    test: [
      match('¿Qué grado de esperanza?', [
        ['Ojalá apruebe mañana.', 'posible'],
        ['Ojalá tuviera veinte años menos.', 'improbable / irreal'],
        ['Ojalá hubiera ido a la fiesta.', 'imposible, ya pasó'],
        ['Ojalá haya llegado bien.', 'posible, ya ocurrido'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'De haberlo sabido',
    ref: [I, 9, 5],
    learn: [
      tip(
        'Condiciones sin «si»',
        '«De haberlo sabido» = «si lo hubiera sabido». «en caso de que», «a no ser que», «siempre que», «siempre y cuando» piden siempre subjuntivo. «Como» + subjuntivo amenaza: «Como llegues tarde otra vez, no entras».',
      ),
    ],
    test: [
      match('¿Qué significa?', [
        ['De haberlo sabido, no habría venido.', 'Si lo hubiera sabido…'],
        ['Iremos, a no ser que llueva.', 'salvo si llueve'],
        ['Te lo presto siempre que lo devuelvas.', 'solo si lo devuelves'],
        ['Como llegues tarde, no entras.', 'una amenaza'],
      ]),
      choice('Elija.', 'En caso de que … , lo pasamos dentro.', ['llueve', '*llueva', 'lloverá']),
    ],
  },

  // ------------------------------------------------ Capítulo 10: Ciencia
  {
    kind: 'VOCAB',
    title: 'Explicar un proceso',
    ref: [I, 10, 1],
    learn: [
      words('Procesos y dispositivos', [
        ['el funcionamiento', 'die Funktionsweise'],
        ['el dispositivo', 'das Gerät'],
        ['el rendimiento', 'die Leistung, der Wirkungsgrad'],
        ['almacenar', 'speichern'],
        ['desencadenar', 'auslösen'],
        ['la avería', 'die Panne, der Defekt'],
        ['el umbral', 'der Schwellenwert'],
      ]),
      tip(
        'Marcar la secuencia',
        'Un proceso se cuenta en presente. Conectores: en primer lugar, a continuación, una vez que, al mismo tiempo, si se supera el umbral, por último.',
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'En primer [lugar], el sensor mide la temperatura. A [continuación], si se supera el [umbral], se [desencadena] la alarma.',
        ['avería', 'después'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'La bomba de calor',
    ref: [I, 10, 1],
    learn: [
      text(
        'Una bomba de calor no genera calor: lo traslada. En primer lugar, un fluido refrigerante circula por el circuito exterior y absorbe el calor del aire, incluso cuando la temperatura es baja. A continuación, un compresor eleva la presión de ese fluido, con lo que su temperatura sube de manera considerable. Ese calor se cede después al circuito interior de la casa.',
      ),
    ],
    test: [
      order('Ordene los pasos.', [
        'El refrigerante absorbe el calor del aire.',
        'El compresor eleva la presión.',
        'La temperatura del fluido sube.',
        'El calor se cede al circuito interior.',
      ]),
      choice('Lea el texto.', 'Según el texto, una bomba de calor…', [
        'genera calor quemando gas',
        '*traslada calor de fuera hacia dentro',
        'solo funciona en verano',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Leer un estudio',
    ref: [I, 10, 2],
    learn: [
      words('Investigación', [
        ['la muestra', 'die Stichprobe'],
        ['el hallazgo', 'der Befund'],
        ['la correlación', 'die Korrelation'],
        ['la causalidad', 'die Kausalität'],
        ['el sesgo', 'die Verzerrung'],
        ['el grupo de control', 'die Kontrollgruppe'],
        ['concluyente', 'schlüssig'],
      ]),
      grammar(
        'Los verbos dicen cuánto se afirma',
        'De menos a más: se observa → se asocia con → sugiere / apunta a → muestra / indica → demuestra. Elija el escalón que sus datos sostienen.',
      ),
    ],
    test: [
      order('De menor a mayor compromiso', [
        'se observa',
        'se asocia con',
        'sugiere',
        'muestra',
        'demuestra',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Ir andando al colegio',
    ref: [I, 10, 2],
    learn: [
      text(
        'Un equipo de la Universidad de Zaragoza siguió durante dos años a 1 400 escolares de entre diez y doce años. En el grupo que caminaba al colegio se registró una media de sueño 23 minutos superior a la del grupo que acudía en coche. Los autores subrayan que no puede establecerse una relación causal, dado que las familias que van a pie viven más cerca del centro.',
      ),
    ],
    test: [
      choice('Lea el resumen.', '¿Cuál es el hallazgo?', [
        'Caminar causa más sueño.',
        '*Los que caminan duermen de media 23 minutos más.',
        'Los niños en coche duermen más.',
      ]),
      choice('Lea el resumen.', '¿Qué titular sería fiel al estudio?', [
        'Caminar al colegio hace dormir más.',
        '*Los escolares que van andando duermen algo más, según un estudio.',
        'El coche quita el sueño a los niños.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Serán las cinco',
    ref: [I, 10, 3],
    learn: [
      grammar(
        'Futuro y condicional de conjetura',
        'Para suponer sobre el presente: futuro. Sobre el pasado: condicional. El hablante no sabe: calcula.',
        {
          headers: ['Se supone sobre', 'Forma', 'Ejemplo'],
          rows: [
            ['el presente', 'futuro simple', 'Estará en una reunión.'],
            ['el pasado reciente', 'futuro compuesto', 'Habrá salido ya.'],
            ['el pasado', 'condicional', 'Tendría entonces unos treinta años.'],
          ],
        },
      ),
    ],
    test: [
      match('¿Qué significa?', [
        ['Serán las cinco.', 'Es ist wohl fünf Uhr.'],
        ['Serían las cinco cuando llamó.', 'Es war wohl fünf Uhr, als er anrief.'],
        ['Habrá salido ya.', 'Er ist wohl schon gegangen.'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Debe de ser – debe ser',
    ref: [I, 10, 3],
    learn: [
      grammar(
        'La escala de la certeza',
        '«debe de ser» supone; «debe ser» obliga. Con adverbios de duda, el subjuntivo aumenta la reserva: «quizá es cierto» cree más que «quizá sea cierto». «puede que» lleva siempre subjuntivo.',
      ),
    ],
    test: [
      match('¿Qué significa?', [
        ['Debe de estar enfermo.', 'Er ist wahrscheinlich krank.'],
        ['Debe estar aquí a las ocho.', 'Er muss um acht hier sein.'],
      ]),
      order('De más a menos seguro', [
        'está demostrado que',
        'todo indica que',
        'seguramente',
        'quizá',
        'es dudoso que',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Para que, con el fin de que',
    ref: [I, 10, 4],
    learn: [
      grammar(
        'La finalidad',
        'Mismo sujeto: para + infinitivo. Sujeto distinto: para que + subjuntivo. Registro técnico: «con el fin de (que)», «a fin de». En pasado: «para que + imperfecto de subjuntivo».',
        {
          headers: ['Caso', 'Ejemplo'],
          rows: [
            ['mismo sujeto', 'Instalamos sensores para ahorrar energía.'],
            ['sujeto distinto', 'Instalamos sensores para que el sistema ahorre.'],
            ['formal', 'con el fin de que el consumo descienda'],
            ['pasado', 'Se instaló para que durara veinte años.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'Se instaló el sistema para que [durara] veinte años. Revisamos las piezas a fin de [evitar] averías. Lo explico para que todos lo [entiendan].',
        ['dure', 'que evitar', 'entienden'],
      ),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Divulgar',
    ref: [I, 10, 5],
    learn: [
      tip(
        'Cuatro recursos',
        'Comparación («es como si…»), reformulación («es decir»), cifra con referencia («el equivalente a 300 hogares») y pregunta retórica («¿Y por qué importa esto?»).',
      ),
      tip(
        'Tres trampas',
        'La metáfora que se estira demasiado, el falso equilibrio y la precisión perdida: cambiar «se asocia con» por «causa» hace el texto más claro y falso.',
      ),
    ],
    test: [
      match('¿Qué recurso?', [
        ['Es como si la célula tuviera un portero.', 'comparación'],
        ['la conductividad, es decir, la facilidad…', 'reformulación'],
        ['el equivalente a 300 hogares', 'cifra con referencia'],
        ['¿Y por qué importa esto?', 'pregunta retórica'],
      ]),
    ],
  },

  // ------------------------------------------------ Capítulo 11: Arte
  {
    kind: 'VOCAB',
    title: 'Describir una obra',
    ref: [I, 11, 1],
    learn: [
      words('La obra', [
        ['el lienzo', 'die Leinwand'],
        ['el primer plano / el fondo', 'der Vordergrund / der Hintergrund'],
        ['el encuadre', 'der Bildausschnitt'],
        ['la pincelada', 'der Pinselstrich'],
        ['la gama cromática', 'die Farbpalette'],
        ['el desenlace', 'das Ende, die Auflösung'],
        ['el montaje', 'der Schnitt (Film)'],
      ]),
      tip(
        'Situar',
        'Recorra el espacio en un orden reconocible: del centro a los bordes o del primer plano al fondo. «hay» presenta, «está» sitúa.',
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'En el primer [plano] hay seis sillas. Al [fondo] se distingue una ventana. La gama [cromática] es reducida: verdes y grises.',
        ['lienzo', 'montaje'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Es un óleo, está restaurado',
    ref: [I, 11, 1],
    learn: [
      grammar(
        'Ser y estar ante una obra',
        '«ser» describe la obra como objeto: formato, técnica, fecha. «estar» describe el estado de lo representado o de la pieza. «Es pintado con espátula» es incorrecto: «está pintado».',
        {
          headers: ['Se dice', 'Significa'],
          rows: [
            ['Es un óleo sobre tabla.', 'técnica'],
            ['Está restaurado.', 'estado actual'],
            ['La escena es nocturna.', 'característica'],
            ['La figura está de espaldas.', 'postura'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'ser o estar?',
        'El cuadro [es] de 1974. [Está] pintado con espátula. La mujer [está] de espaldas. La escena [es] nocturna.',
      ),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Del dato a la lectura',
    ref: [I, 11, 2],
    learn: [
      grammar(
        'Los verbos que marcan el paso',
        'Tienen como sujeto la obra, no el espectador. De menor a mayor compromiso: sugiere / evoca → transmite / genera → remite a → muestra / plantea → el autor busca.',
      ),
      tip(
        'Cuidado con la intención',
        '«El autor quiso denunciar» exige saber lo que alguien pensaba. Mejor: «la obra plantea», «cabe leer la escena como…».',
      ),
    ],
    test: [
      match('Complete la interpretación.', [
        ['La silla vacía', 'sugiere una ausencia.'],
        ['El encuadre', 'genera inquietud.'],
        ['La postura', 'remite a la pintura religiosa.'],
      ]),
      choice('¿Qué interpretación es más fácil de defender?', 'Elija.', [
        'El pintor quiso denunciar la soledad.',
        '*El hecho de que nadie se mire refuerza el aislamiento.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Busco un cuadro que represente…',
    ref: [I, 11, 3],
    learn: [
      grammar(
        'El subjuntivo en el relativo',
        '¿El hablante tiene en mente algo concreto? Sí → indicativo. No, porque lo busca, lo desea o lo niega → subjuntivo.',
        {
          headers: ['Situación', 'Ejemplo'],
          rows: [
            ['existe y lo conozco', 'Tengo una amiga que pinta al óleo.'],
            ['no sé si existe', 'Busco a alguien que pinte al óleo.'],
            ['no existe', 'No hay nadie aquí que pinte al óleo.'],
            ['ya elegida', 'Quiero la obra que cuelga en la sala 4.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'Busco un libro que me [haga] pensar. Tengo un amigo que [trabaja] en el museo. No hay nadie que [entienda] esta obra.',
        ['hace', 'trabaje', 'entiende'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Lo mejor de la película',
    ref: [I, 11, 3],
    learn: [
      grammar(
        'lo + adjetivo',
        'Convierte una cualidad en sustantivo: «lo interesante es el montaje», «lo mejor de la novela». Con «que» añade intensidad y el adjetivo concuerda: «sorprende lo largas que son las escenas».',
      ),
    ],
    test: [
      cloze(
        'Complete.',
        '[Lo] mejor de la película es el final. Sorprende lo [largas] que son las escenas. [Lo] que falla es el ritmo.',
        ['El', 'largo'],
      ),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Valorar sin adjetivos gastados',
    ref: [I, 11, 4],
    learn: [
      tip(
        'Nombrar qué se valora',
        '«Increíble» o «maravilloso» valen para todo y no dicen nada. Una valoración útil nombra la construcción, el ritmo, la interpretación o el uso del espacio. Partes de una reseña: ficha, sinopsis, análisis, reparo, veredicto.',
      ),
    ],
    test: [
      match('En vez de… diga…', [
        ['Es una película increíble.', 'Sostiene la tensión sin música durante ochenta minutos.'],
        ['El final es malo.', 'El final explica lo que ya se había entendido.'],
        ['La actriz está fantástica.', 'Sostiene el plano largo sin subrayar nada.'],
      ]),
      order('Ordene las partes de una reseña.', [
        'ficha',
        'sinopsis',
        'análisis',
        'reparo',
        'veredicto',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'El veredicto matizado',
    ref: [I, 11, 5],
    learn: [
      tip(
        'Situar y recomendar',
        'Situar: «en la línea de», «a diferencia de», «a la altura de», «se queda corta frente a». Un veredicto útil dice para quién es la obra: «Imprescindible para quien aguante el ritmo lento».',
      ),
    ],
    test: [
      match('¿Qué expresa?', [
        ['en la línea del primer Erice', 'emparentar'],
        ['a diferencia de su novela anterior', 'distinguir'],
        ['no alcanza la tensión del original', 'inferioridad'],
        ['Imprescindible para quien aguante el ritmo lento.', 'recomendación condicionada'],
      ]),
    ],
  },

  // ------------------------------------------------ Capítulo 12: Migración
  {
    kind: 'VOCAB',
    title: 'Las palabras pesan',
    ref: [I, 12, 1],
    learn: [
      words('Movimiento y pertenencia', [
        ['el refugiado', 'der Geflüchtete (anerkannt)'],
        ['solicitar asilo', 'Asyl beantragen'],
        ['el permiso de residencia', 'die Aufenthaltserlaubnis'],
        ['el arraigo', 'die Verwurzelung'],
        ['la acogida', 'die Aufnahme'],
        ['la remesa', 'die Rücküberweisung'],
        ['el prejuicio', 'das Vorurteil'],
      ]),
      culture(
        'Términos que no son sinónimos',
        '«refugiado» y «solicitante de asilo» son términos jurídicos. «inmigrante», «emigrante» y «migrante» describen desde dónde se mira. «expatriado» es de uso, no jurídico. «Ilegal» aplicado a una persona es inexacto.',
      ),
    ],
    test: [
      match('¿Qué designa?', [
        ['refugiado', 'quien tiene protección reconocida'],
        ['solicitante de asilo', 'quien la ha pedido y espera'],
        ['emigrante', 'quien se va, visto desde el país de origen'],
        ['inmigrante', 'quien llega, visto desde el país de llegada'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Un país de emigración',
    ref: [I, 12, 1],
    learn: [
      text(
        'España fue durante un siglo un país de emigración. Entre 1850 y 1950 salieron hacia América cerca de tres millones y medio de personas, y entre 1960 y 1973 otro millón largo se fue a trabajar a Alemania, Francia y Suiza. La palabra «remesa» entró en el vocabulario español desde el otro lado.',
      ),
    ],
    test: [
      choice('Lea el texto.', '¿Adónde emigraron muchos españoles entre 1960 y 1973?', [
        'a América',
        '*a Alemania, Francia y Suiza',
        'a Marruecos',
      ]),
      choice('Lea el texto.', '¿Qué quiere decir que «remesa» entró «desde el otro lado»?', [
        '*Eran los españoles emigrados quienes enviaban dinero a casa.',
        'La palabra viene del alemán.',
        'España recibía muchos inmigrantes.',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'La cifra y el caso',
    ref: [I, 12, 2],
    learn: [
      text(
        'Según el padrón de 2025, el 19 % de los residentes del distrito nació fuera de España, frente al 11 % de hace diez años. La media, sin embargo, oculta lo que ocurre dentro: en dos de los seis barrios la proporción no llega al 8 %, mientras que en el barrio de la estación supera el 40 %.',
      ),
      tip(
        'El caso ilustra la cifra, no la sustituye',
        'Marque el paso: «es el caso de…» (ilustrar), «la media oculta que…» (advertir), «ahora bien, no siempre es así» (excepción), «según el padrón» (fuente).',
      ),
    ],
    test: [
      choice('Lea el texto.', '¿Qué oculta la media del 19 %?', [
        'que la cifra ha bajado',
        '*las grandes diferencias entre barrios',
        'la fuente de los datos',
      ]),
      match('Trampas con las cifras', [
        ['«12 000 personas» sin decir sobre cuántas', 'pedir el porcentaje'],
        ['«subió un 200 %» partiendo de tres casos', 'pedir la cifra bruta'],
        ['comparar sin corregir por edad o renta', 'preguntar qué se ha igualado'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Aquí → allí, mañana → al día siguiente',
    ref: [I, 12, 3],
    learn: [
      grammar(
        'Lo que se mueve además del verbo',
        'Quien reproduce está en otro sitio y otro día: las palabras que señalan el aquí y el ahora cambian.',
        {
          headers: ['Directo', 'Indirecto'],
          rows: [
            ['aquí / este', 'allí / aquel'],
            ['hoy / ahora', 'aquel día / entonces'],
            ['ayer', 'el día anterior'],
            ['mañana', 'al día siguiente'],
            ['venir / traer', 'ir / llevar'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete (la conversación fue hace un mes).',
        '«Vuelvo mañana.» → Dijo que volvía [al día siguiente]. «Ayer llegué aquí.» → Dijo que había llegado [allí] el día [anterior].',
        ['mañana', 'aquí', 'siguiente'],
      ),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'El verbo introductor toma partido',
    ref: [I, 12, 3],
    learn: [
      tip(
        'No son intercambiables',
        '«dijo que no había trabajo» transmite; «alegó que no había trabajo» lo pone en duda. Neutros: decir, contar, explicar, señalar. Refuerzo: subrayar, insistir en. Duda: alegar, pretender. Concesión: reconocer, admitir. Queja: lamentar, denunciar.',
      ),
    ],
    test: [
      match('¿Qué actitud?', [
        ['explicó que', 'neutra'],
        ['subrayó que', 'refuerzo'],
        ['alegó que', 'duda'],
        ['reconoció que', 'concesión'],
        ['denunció que', 'queja'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Dijo que lo llamara',
    ref: [G, 12, 4],
    learn: [
      grammar(
        'Órdenes en estilo indirecto',
        'El imperativo se convierte en subjuntivo: presente si el verbo introductor está en presente, imperfecto si está en pasado.',
        {
          headers: ['Orden', 'Presente', 'Pasado'],
          rows: [
            ['«Llámame.»', 'Dice que lo llame.', 'Dijo que lo llamara.'],
            ['«No llegues tarde.»', 'Pide que no llegue tarde.', 'Pidió que no llegara tarde.'],
            ['«Espérame aquí.»', 'Dice que la espere allí.', 'Dijo que la esperara allí.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        '«Trae el informe.» → Me pidió que [trajera] el informe. «No fumes.» → Me dice que no [fume].',
        ['traiga', 'fumara'],
      ),
      choice('Elija.', '«¿Vienes mañana?» → Me preguntó …', [
        'que viniera mañana.',
        '*si iba al día siguiente.',
        'si vienes mañana.',
      ]),
    ],
  },

  // ------------------------------------------------ Gramática B2
  {
    kind: 'GRAMMAR',
    title: 'Fue firmado – está firmado',
    ref: [G, 12, 1],
    learn: [
      grammar(
        'La pasiva con ser',
        'El participio concuerda con el sujeto; el agente va con «por». Es frecuente en prensa y poco usada al hablar. «ser» cuenta la acción, «estar» el resultado.',
        {
          headers: ['Con ser (acción)', 'Con estar (estado)'],
          rows: [
            ['La tienda fue abierta en 1980.', 'La tienda está abierta hasta las ocho.'],
            ['El problema fue resuelto ayer.', 'El problema ya está resuelto.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'Los ladrones fueron [detenidos] por la policía. La lista será [publicada] mañana. El problema ya [está] resuelto.',
        ['detenido', 'publicado', 'es'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Se me ha roto el móvil',
    ref: [G, 12, 2],
    learn: [
      tip(
        'El «se» que quita la culpa',
        'Cuando algo se estropea, se pierde o se olvida: «se + pronombre + verbo». «Se me ha roto el vaso» no dice que yo lo rompiera.',
        {
          headers: ['Español', 'Alemán'],
          rows: [
            ['Se me ha roto el móvil.', 'Mein Handy ist kaputtgegangen.'],
            ['Se nos olvidaron las llaves.', 'Wir haben die Schlüssel vergessen.'],
            ['Se le cayó el plato.', 'Ihm ist der Teller heruntergefallen.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'Se [me] ha perdido el billete. Se nos [olvidaron] las llaves. A Pedro se le [cayó] el plato.',
        ['olvidó', 'cayeron', 'mí'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Si llueve – nunca «si lloverá»',
    ref: [G, 11, 1],
    learn: [
      grammar(
        'El condicional real',
        'Después de «si» nunca va futuro, aunque se hable del año que viene. La consecuencia puede ir en presente (habitual), futuro o imperativo. Con «si» delante, coma.',
        {
          headers: ['Correcto', 'Incorrecto'],
          rows: [
            ['Si llueve, no salimos.', 'Si lloverá, no salimos.'],
            ['Si apruebo, lo celebraremos.', 'Si aprobaré, lo celebraremos.'],
            ['Si me llamas, te lo cuento.', 'Si me llamarás, te lo cuento.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'Si [apruebo] el examen, lo celebraremos. Si [tienes] tiempo, llámame. Comeremos fuera si [hace] sol.',
        ['aprobaré', 'tendrás', 'hará'],
      ),
    ],
  },
]);
