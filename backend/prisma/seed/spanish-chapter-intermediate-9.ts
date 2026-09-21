import type { UnitSeed } from './chapter-beginner-1';

/**
 * Spanisch, Intermediate, Kapitel 9: „Si fuera posible“ (B2, Kapitel 3)
 *
 * Fünf Seiten. Das grammatische Herzstück der B2-Stufe: die Bedingungssätze
 * und der Imperfecto de Subjuntivo, den sie voraussetzen.
 *
 * Aufbau: Seite 1 stellt die drei Typen nebeneinander, damit der Unterschied
 * als Bedeutungsunterschied sichtbar wird, bevor irgendeine Form geübt wird.
 * Seite 2 baut die Form selbst auf – über die dritte Person Plural des
 * Indefinido, was die unregelmäßigen Verben mit einem Schlag erledigt. Seite 3
 * übt das Irreale der Gegenwart, Seite 4 das Irreale der Vergangenheit samt
 * Bedauern und Vorwurf. Seite 5 sammelt ein, was den Subjuntivo Imperfecto
 * sonst noch verlangt: como si, ojalá, de haber + Infinitiv.
 *
 * Die Reihenfolge ist bewusst nicht die der Grammatiken, die mit Typ I
 * beginnen und die Form nebenbei einführen. Hier steht die Form auf einer
 * eigenen Seite, weil sie neu ist und weil alles Weitere auf ihr aufbaut.
 *
 * Wie im gesamten B2-Teil stehen die Seiten einsprachig spanisch; die
 * Wortschatzlisten tragen deutsche und englische Entsprechungen.
 *
 * Sämtliche Texte sind eigenständig verfasst.
 */
const v = 1;

export const SPANISH_INTERMEDIATE_9_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – die drei Typen im Überblick, als Bedeutungsunterschied.
  {
    order: 1,
    title: 'Tres maneras de suponer',
    subtitle: 'Lo posible, lo improbable, lo perdido',
    estimatedMinutes: 27,
    content: {
      version: v,
      blocks: [
        { id: 'esi9-p1-h1', type: 'HEADING', level: 1, text: 'Tres maneras de suponer' },
        {
          id: 'esi9-p1-intro',
          type: 'TEXT',
          text: 'Las tres frases siguientes hablan de lo mismo y dicen cosas muy distintas: «Si llueve, no salimos». «Si lloviera, no saldríamos». «Si hubiera llovido, no habríamos salido». La primera cuenta con la lluvia; la segunda la considera poco probable; la tercera sabe ya que no llovió. El español marca esa diferencia en el verbo, y marcarla mal cambia el sentido de lo que se dice, no solo su corrección.',
        },
        {
          id: 'esi9-p1-info-tipos',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Los tres tipos de condicional',
          text: 'Fíjese en una cosa antes que en ninguna otra: detrás de «si» nunca va presente de subjuntivo ni condicional. Es el error más persistente de quien aprende español, porque en otras lenguas sí ocurre. «Si tendría tiempo» y «si tenga tiempo» son las dos formas que no existen.',
          table: {
            headers: ['Tipo', 'Prótasis (si…)', 'Apódosis', 'Ejemplo'],
            rows: [
              [
                'I: real',
                'presente de indicativo',
                'presente / futuro / imperativo',
                'Si llueve, no salimos.',
              ],
              [
                'II: irreal del presente',
                'imperfecto de subjuntivo',
                'condicional simple',
                'Si lloviera, no saldríamos.',
              ],
              [
                'III: irreal del pasado',
                'pluscuamperfecto de subj.',
                'condicional compuesto',
                'Si hubiera llovido, no habríamos salido.',
              ],
            ],
          },
        },
        {
          id: 'esi9-p1-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: suposiciones y consecuencias',
          items: [
            {
              term: 'suponer',
              translations: { en: 'to suppose, to assume', de: 'annehmen, unterstellen' },
              example: 'Supongamos que el tren llega tarde.',
            },
            {
              term: 'la hipótesis',
              translations: { en: 'hypothesis', de: 'die Hypothese' },
            },
            {
              term: 'darse el caso',
              translations: { en: 'for the case to arise', de: 'der Fall eintreten' },
              example: 'Si se diera el caso, avisaríamos.',
            },
            {
              term: 'de lo contrario',
              translations: { en: 'otherwise', de: 'andernfalls' },
            },
            {
              term: 'en tal caso',
              translations: { en: 'in that case', de: 'in diesem Fall' },
            },
            {
              term: 'a no ser que',
              translations: { en: 'unless', de: 'es sei denn, dass' },
              example: 'Iremos, a no ser que llueva.',
            },
            {
              term: 'siempre y cuando',
              translations: { en: 'provided that', de: 'vorausgesetzt, dass' },
            },
            {
              term: 'arrepentirse (de)',
              translations: { en: 'to regret', de: 'bereuen' },
              example: 'Se arrepiente de no haberlo intentado.',
            },
            {
              term: 'el remordimiento',
              translations: { en: 'remorse', de: 'das Gewissensbissgefühl, die Reue' },
            },
            {
              term: 'merecer la pena',
              translations: { en: 'to be worth it', de: 'sich lohnen' },
            },
            {
              term: 'dar por hecho',
              translations: { en: 'to take for granted', de: 'als gegeben ansehen' },
            },
          ],
        },
        {
          id: 'esi9-p1-choice-tipo',
          type: 'CHOICE',
          instruction: 'Lea la situación y elija.',
          question:
            'Usted no tiene coche y no piensa comprarlo. Quiere decir qué haría en caso de tenerlo. ¿Qué frase le corresponde?',
          options: [
            { id: 's1', text: 'Si tengo coche, voy a la playa todos los domingos.' },
            { id: 's2', text: 'Si tuviera coche, iría a la playa todos los domingos.' },
            {
              id: 's3',
              text: 'Si hubiera tenido coche, habría ido a la playa todos los domingos.',
            },
            { id: 's4', text: 'Si tendría coche, iría a la playa todos los domingos.' },
          ],
          multiple: false,
          solution: ['s2'],
          explanation:
            'La hipótesis se refiere al presente y usted la considera improbable: tipo II. s1 daría por posible la compra, s3 hablaría de un pasado ya cerrado y s4 coloca detrás de «si» un condicional, que es precisamente lo que el español no admite.',
        },
        {
          id: 'esi9-p1-texto-orden',
          type: 'TEXT',
          text: 'Las dos partes de la oración pueden ir en cualquier orden, y ese orden cambia el énfasis. «Si tuviera tiempo, te ayudaría» pone el peso en la condición; «Te ayudaría si tuviera tiempo» lo pone en lo que se haría. Una regla ortográfica va con ello: cuando la condición va delante, se escribe coma entre las dos partes; cuando va detrás, no.',
        },
        {
          id: 'esi9-p1-match-sentido',
          type: 'MATCHING',
          instruction: 'Relacione cada frase con lo que da a entender.',
          left: [
            { id: 'a1', text: 'Si me llaman esta tarde, te aviso.' },
            { id: 'a2', text: 'Si me llamaran esta tarde, te avisaría.' },
            { id: 'a3', text: 'Si me hubieran llamado, te habría avisado.' },
            { id: 'a4', text: 'Si me llaman, que me llamen al móvil.' },
          ],
          right: [
            { id: 'b1', text: 'Cuento con que puedan llamar; es una posibilidad real.' },
            { id: 'b2', text: 'Lo veo poco probable, aunque todavía no está descartado.' },
            { id: 'b3', text: 'Ya sé que no llamaron; hablo de algo que no pasó.' },
            { id: 'b4', text: 'Doy una instrucción para el caso de que llamen.' },
          ],
          solution: [
            { leftId: 'a1', rightId: 'b1' },
            { leftId: 'a2', rightId: 'b2' },
            { leftId: 'a3', rightId: 'b3' },
            { leftId: 'a4', rightId: 'b4' },
          ],
        },
        {
          id: 'esi9-p1-choice-error',
          type: 'CHOICE',
          instruction: 'Marque todas las frases incorrectas.',
          options: [
            { id: 'e1', text: 'Si tendría más espacio, compraría un piano.' },
            { id: 'e2', text: 'Si tuviera más espacio, compraría un piano.' },
            { id: 'e3', text: 'Si tenga más espacio, compraré un piano.' },
            { id: 'e4', text: 'Si tengo más espacio, compraré un piano.' },
          ],
          multiple: true,
          solution: ['e1', 'e3'],
          explanation:
            'Detrás de «si» condicional no aparecen ni el condicional (e1) ni el presente de subjuntivo (e3). Las formas posibles son el presente de indicativo (e4), el imperfecto de subjuntivo (e2) y el pluscuamperfecto de subjuntivo.',
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – die Form: Imperfecto de Subjuntivo aus der 3. Pl. des Indefinido.
  {
    order: 2,
    title: 'El imperfecto de subjuntivo',
    subtitle: 'Una forma que se saca del indefinido',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'esi9-p2-h1', type: 'HEADING', level: 1, text: 'El imperfecto de subjuntivo' },
        {
          id: 'esi9-p2-intro',
          type: 'TEXT',
          text: 'Este tiempo tiene fama de difícil y no lo es, porque no hay que aprender ninguna lista de irregulares: ya se aprendieron con el indefinido. Toda la regla cabe en una línea. Tome la tercera persona del plural del indefinido, quite la terminación -ron y añada las terminaciones de este tiempo. Lo que era irregular en el indefinido sigue siéndolo aquí, de la misma manera y sin sorpresas.',
        },
        {
          id: 'esi9-p2-info-formacion',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Cómo se forma',
          text: 'Las tres conjugaciones comparten terminaciones, de modo que solo hay un juego que aprender. La primera persona del plural lleva tilde: habláramos, comiéramos, fuéramos. Y cuidado con la primera y la tercera del singular, que son idénticas: «si yo fuera» y «si él fuera».',
          table: {
            headers: ['Verbo', '3.ª pl. indefinido', 'Raíz', 'yo / él'],
            rows: [
              ['hablar', 'hablaron', 'habla-', 'hablara'],
              ['comer', 'comieron', 'comie-', 'comiera'],
              ['vivir', 'vivieron', 'vivie-', 'viviera'],
              ['ser / ir', 'fueron', 'fue-', 'fuera'],
              ['tener', 'tuvieron', 'tuvie-', 'tuviera'],
              ['hacer', 'hicieron', 'hicie-', 'hiciera'],
              ['poder', 'pudieron', 'pudie-', 'pudiera'],
              ['decir', 'dijeron', 'dije-', 'dijera'],
            ],
          },
        },
        {
          id: 'esi9-p2-info-terminaciones',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Las terminaciones y la forma en -se',
          text: 'Existen dos series, -ra y -se, equivalentes en el uso condicional: «si tuviera» y «si tuviese» dicen exactamente lo mismo. La serie en -ra es hoy mucho más frecuente en América y también en España; la serie en -se suena algo más literaria y sigue viva en la escritura. Aprenda a producir la primera y a reconocer la segunda.',
          table: {
            headers: ['Persona', 'serie -ra', 'serie -se'],
            rows: [
              ['yo', 'tuviera', 'tuviese'],
              ['tú', 'tuvieras', 'tuvieses'],
              ['él / ella / usted', 'tuviera', 'tuviese'],
              ['nosotros', 'tuviéramos', 'tuviésemos'],
              ['vosotros', 'tuvierais', 'tuvieseis'],
              ['ellos / ustedes', 'tuvieran', 'tuviesen'],
            ],
          },
        },
        {
          id: 'esi9-p2-cloze-formas',
          type: 'CLOZE',
          instruction: 'Forme el imperfecto de subjuntivo (serie -ra) del verbo indicado.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Si yo ' },
            {
              kind: 'GAP',
              gapId: 'c1',
              solution: ['supiera', 'supiese'],
              hint: 'saber, yo',
              width: 9,
            },
            { kind: 'TEXT', text: ' la respuesta, te la diría. Si nosotros ' },
            {
              kind: 'GAP',
              gapId: 'c2',
              solution: ['pudiéramos', 'pudiésemos'],
              hint: 'poder, nosotros',
              width: 12,
            },
            { kind: 'TEXT', text: ', iríamos andando. Si ellos ' },
            {
              kind: 'GAP',
              gapId: 'c3',
              solution: ['quisieran', 'quisiesen'],
              hint: 'querer, ellos',
              width: 11,
            },
            { kind: 'TEXT', text: ', ya estaría resuelto. Si tú ' },
            {
              kind: 'GAP',
              gapId: 'c4',
              solution: ['vinieras', 'vinieses'],
              hint: 'venir, tú',
              width: 10,
            },
            { kind: 'TEXT', text: ' conmigo, sería más fácil. Y si ella ' },
            { kind: 'GAP', gapId: 'c5', solution: ['fuera', 'fuese'], hint: 'ser, ella', width: 8 },
            { kind: 'TEXT', text: ' la responsable, lo sabríamos.' },
          ],
        },
        {
          id: 'esi9-p2-choice-raiz',
          type: 'CHOICE',
          instruction: 'Elija la forma correcta.',
          question:
            '¿Cuál es el imperfecto de subjuntivo de «traer» en primera persona del singular?',
          options: [
            { id: 't1', text: 'traiera' },
            { id: 't2', text: 'trajera' },
            { id: 't3', text: 'traería' },
            { id: 't4', text: 'traiga' },
          ],
          multiple: false,
          solution: ['t2'],
          explanation:
            'La tercera del plural del indefinido es «trajeron»; quitando -ron queda «traje-» y se añade la terminación: trajera. t3 es el condicional y t4 el presente de subjuntivo, dos tiempos distintos que no caben detrás de «si».',
        },
        {
          id: 'esi9-p2-info-usos',
          type: 'INFO',
          variant: 'TIP',
          title: 'Dónde aparece, además de con «si»',
          text: 'El imperfecto de subjuntivo no vive solo en las condicionales. Aparece siempre que un subjuntivo depende de un verbo en pasado o en condicional, y esa es la mitad de su uso real. Si el verbo principal está en presente, el subjuntivo va en presente; si retrocede al pasado, el subjuntivo retrocede con él.',
          table: {
            headers: ['Verbo principal', 'Subordinada', 'Ejemplo'],
            rows: [
              ['presente', 'presente de subj.', 'Quiero que vengas.'],
              ['indefinido', 'imperf. de subj.', 'Quise que vinieras.'],
              ['imperfecto', 'imperf. de subj.', 'Quería que vinieras.'],
              ['condicional', 'imperf. de subj.', 'Me gustaría que vinieras.'],
            ],
          },
        },
        {
          id: 'esi9-p2-cloze-concordancia',
          type: 'CLOZE',
          instruction:
            'Complete con presente o imperfecto de subjuntivo, según el verbo principal.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Le pido que me ' },
            { kind: 'GAP', gapId: 'c1', solution: ['llame'], hint: 'llamar', width: 8 },
            { kind: 'TEXT', text: ' mañana. / Le pedí que me ' },
            {
              kind: 'GAP',
              gapId: 'c2',
              solution: ['llamara', 'llamase'],
              hint: 'llamar',
              width: 10,
            },
            { kind: 'TEXT', text: ' al día siguiente.\nEs necesario que lo ' },
            {
              kind: 'GAP',
              gapId: 'c3',
              solution: ['revisemos'],
              hint: 'revisar, nosotros',
              width: 11,
            },
            { kind: 'TEXT', text: ' hoy. / Era necesario que lo ' },
            {
              kind: 'GAP',
              gapId: 'c4',
              solution: ['revisáramos', 'revisásemos'],
              hint: 'revisar, nosotros',
              width: 13,
            },
            { kind: 'TEXT', text: ' aquel día.\nMe gustaría que ustedes ' },
            {
              kind: 'GAP',
              gapId: 'c5',
              solution: ['estuvieran', 'estuviesen'],
              hint: 'estar',
              width: 12,
            },
            { kind: 'TEXT', text: ' presentes en la firma.' },
          ],
        },
        {
          id: 'esi9-p2-ordering',
          type: 'ORDERING',
          instruction: 'Ordene los pasos para formar el imperfecto de subjuntivo de «poner».',
          items: [
            { id: 'o1', text: 'Buscar la tercera persona del plural del indefinido: pusieron.' },
            { id: 'o2', text: 'Quitar la terminación -ron: pusie-.' },
            { id: 'o3', text: 'Añadir la terminación de persona: -ra, -ras, -ra, -ramos…' },
            { id: 'o4', text: 'Comprobar la tilde en la forma de nosotros: pusiéramos.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4'],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – das Irreale der Gegenwart.
  {
    order: 3,
    title: 'Lo irreal del presente',
    subtitle: 'Si tuviera, haría',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'esi9-p3-h1', type: 'HEADING', level: 1, text: 'Lo irreal del presente' },
        {
          id: 'esi9-p3-intro',
          type: 'TEXT',
          text: 'El tipo II sirve para dos cosas que conviene no confundir. Una es hablar de lo que no es: «si viviera en Lisboa, iría al mar todos los días» lo dice alguien que no vive allí. La otra es hablar de lo que sí podría ser, pero se presenta como remoto por cortesía o por prudencia: «si pudiera usted enviarme el informe, se lo agradecería». En el segundo caso, la irrealidad es una forma de educación.',
        },
        {
          id: 'esi9-p3-info-usos',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Cuatro usos del tipo II',
          text: 'La estructura es siempre la misma —imperfecto de subjuntivo detrás de «si», condicional en la otra parte— y sirve para cuatro cosas distintas. Reconocerlas ayuda a no leer como irreal lo que solo es cortés.',
          table: {
            headers: ['Uso', 'Ejemplo'],
            rows: [
              ['hipótesis irreal', 'Si fuera más alto, jugaría al baloncesto.'],
              ['situación improbable', 'Si me tocara la lotería, no dejaría de trabajar.'],
              ['petición cortés', 'Si pudiera usted firmarlo hoy, lo agradeceríamos.'],
              ['consejo suave', 'Yo que tú, se lo diría. / Si yo fuera tú, se lo diría.'],
            ],
          },
        },
        {
          id: 'esi9-p3-dialogo',
          type: 'DIALOGUE',
          title: 'Dos compañeros de piso hacen cuentas',
          audioUrl: 'placeholder://es-b2-condicional',
          lines: [
            {
              speaker: 'Rubén',
              text: 'Si no pagáramos tanto de calefacción, podríamos permitirnos el piso del centro.',
            },
            {
              speaker: 'Alba',
              text: 'Ya, pero si viviéramos en el centro, pagaríamos doscientos euros más de alquiler. No saldría a cuenta.',
            },
            {
              speaker: 'Rubén',
              text: 'Saldría si dejáramos el coche. Allí no haría falta para nada.',
            },
            {
              speaker: 'Alba',
              text: 'Eso es verdad. Aunque si mi madre siguiera en el pueblo, lo echaría de menos los fines de semana.',
            },
            {
              speaker: 'Rubén',
              text: 'Yo que tú lo hablaría con ella antes de descartarlo. A lo mejor le parece bien.',
            },
            {
              speaker: 'Alba',
              text: 'Si me dijera que sí, mañana mismo llamaba a la inmobiliaria. Pero la conozco.',
            },
          ],
        },
        {
          id: 'esi9-p3-info-coloquial',
          type: 'INFO',
          variant: 'CULTURE',
          title: '«Si me dijera que sí, mañana llamaba»',
          text: 'En la lengua hablada, el imperfecto de indicativo sustituye a menudo al condicional en la segunda parte: «si me tocara la lotería, me compraba una casa». No es un error, es un rasgo coloquial muy extendido en todo el ámbito hispanohablante, y conviene reconocerlo al oírlo. En un texto escrito, en cambio, se mantiene el condicional: «me compraría una casa».',
        },
        {
          id: 'esi9-p3-cloze',
          type: 'CLOZE',
          instruction: 'Complete las frases del tipo II con la forma adecuada.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Si el alquiler ' },
            { kind: 'GAP', gapId: 'c1', solution: ['fuera', 'fuese'], hint: 'ser', width: 8 },
            { kind: 'TEXT', text: ' más bajo, nos ' },
            {
              kind: 'GAP',
              gapId: 'c2',
              solution: ['quedaríamos'],
              hint: 'quedarse, condicional',
              width: 12,
            },
            { kind: 'TEXT', text: ' en el barrio. Si tú ' },
            {
              kind: 'GAP',
              gapId: 'c3',
              solution: ['tuvieras', 'tuvieses'],
              hint: 'tener',
              width: 10,
            },
            { kind: 'TEXT', text: ' que elegir hoy, ¿qué ' },
            {
              kind: 'GAP',
              gapId: 'c4',
              solution: ['harías'],
              hint: 'hacer, condicional',
              width: 8,
            },
            { kind: 'TEXT', text: '? Yo, si ' },
            { kind: 'GAP', gapId: 'c5', solution: ['pudiera', 'pudiese'], hint: 'poder', width: 9 },
            { kind: 'TEXT', text: ', me lo pensaría un mes más.' },
          ],
        },
        {
          id: 'esi9-p3-choice-cortesia',
          type: 'CHOICE',
          instruction: 'Elija la versión más cortés para un correo formal.',
          options: [
            { id: 'p1', text: 'Mándeme el presupuesto antes del viernes.' },
            { id: 'p2', text: 'Quiero el presupuesto antes del viernes.' },
            {
              id: 'p3',
              text: 'Si pudiera enviarme el presupuesto antes del viernes, se lo agradecería.',
            },
            { id: 'p4', text: 'Si me manda el presupuesto antes del viernes, mejor.' },
          ],
          multiple: false,
          solution: ['p3'],
          explanation:
            'El tipo II presenta la petición como algo que quizá no sea posible, y eso deja al otro margen para responder. p1 y p2 ordenan; p4 es correcto pero informal, y en un correo profesional resulta seco.',
        },
        {
          id: 'esi9-p3-match-usos',
          type: 'MATCHING',
          instruction: 'Relacione cada frase con su uso.',
          left: [
            { id: 'u1', text: 'Si me tocara la lotería, seguiría trabajando media jornada.' },
            { id: 'u2', text: 'Si tuviera usted un momento, le explicaría el caso.' },
            { id: 'u3', text: 'Yo que tú, no firmaría nada esta semana.' },
            { id: 'u4', text: 'Si el mundo fuera justo, esto no pasaría.' },
          ],
          right: [
            { id: 'w1', text: 'Situación improbable pero imaginable.' },
            { id: 'w2', text: 'Petición cortés.' },
            { id: 'w3', text: 'Consejo suavizado.' },
            { id: 'w4', text: 'Hipótesis claramente irreal.' },
          ],
          solution: [
            { leftId: 'u1', rightId: 'w1' },
            { leftId: 'u2', rightId: 'w2' },
            { leftId: 'u3', rightId: 'w3' },
            { leftId: 'u4', rightId: 'w4' },
          ],
        },
        {
          id: 'esi9-p3-writing',
          type: 'WRITING',
          instruction: 'Escriba sobre una hipótesis.',
          prompt:
            'Imagine que su ciudad decide, de un día para otro, suprimir por completo el coche particular dentro de la ronda. Escriba de 90 a 140 palabras sobre qué cambiaría en su vida diaria y qué haría usted. Use al menos cuatro condicionales de tipo II y no caiga en el tipo I: se trata de una hipótesis, no de un plan.',
          minWords: 90,
          maxWords: 150,
          aiFeedback: true,
          sampleAnswer:
            'Si desapareciera el coche del centro, lo primero que notaría sería el ruido, o más bien su ausencia. Vivo en una calle por la que pasan dos mil vehículos al día, y si dejaran de pasar, podría abrir la ventana en verano sin oír un motor cada diez segundos. En lo práctico, tendría que reorganizar la compra semanal: si no pudiera cargar el coche una vez por semana, iría a diario a la tienda del barrio, que es más cara pero está a cien metros. A mis padres los llevo al médico cada mes, y ahí sí tendría un problema serio si no hubiera excepciones para el transporte de personas mayores. Con esa salvedad, creo que saldría ganando.',
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – das Irreale der Vergangenheit: Bedauern und Vorwurf.
  {
    order: 4,
    title: 'Lo irreal del pasado',
    subtitle: 'Si hubiera sabido…',
    estimatedMinutes: 29,
    content: {
      version: v,
      blocks: [
        { id: 'esi9-p4-h1', type: 'HEADING', level: 1, text: 'Lo irreal del pasado' },
        {
          id: 'esi9-p4-intro',
          type: 'TEXT',
          text: 'El tipo III habla de lo que ya no puede cambiarse. Por eso no es un tiempo neutro: casi siempre lleva encima un arrepentimiento, un reproche o un alivio. «Si hubiéramos salido antes, no habríamos perdido el tren» no informa de nada; lamenta. Y «si me lo hubieras dicho, te habría ayudado» tampoco informa: reprocha. Conviene saberlo antes de usarlo, porque el interlocutor lo oirá así aunque uno no lo pretenda.',
        },
        {
          id: 'esi9-p4-info-forma',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'La forma del tipo III',
          text: 'Las dos partes son compuestas: haber en la forma que toque más el participio. Detrás de «si» va el pluscuamperfecto de subjuntivo (hubiera + participio); en la otra parte, el condicional compuesto (habría + participio). En la lengua hablada, y también en buena prosa, la forma «hubiera» aparece con frecuencia en las dos partes: «si hubiera sabido, hubiera venido». Es correcto; al revés, con «habría» detrás de «si», no lo es.',
          table: {
            headers: ['Parte', 'Forma', 'Ejemplo'],
            rows: [
              ['si…', 'hubiera / hubiese + participio', 'Si hubiera sabido la fecha…'],
              ['consecuencia', 'habría + participio', '…te habría avisado.'],
              ['variante admitida', 'hubiera + participio', '…te hubiera avisado.'],
              ['forma incorrecta', 'si habría + participio', '—'],
            ],
          },
        },
        {
          id: 'esi9-p4-texto-mixtas',
          type: 'TEXT',
          text: 'Los dos tipos irreales pueden mezclarse cuando la causa está en el pasado y la consecuencia en el presente. «Si hubiera estudiado medicina, hoy sería médico»: el estudio no ocurrió (pasado), y la consecuencia se mide ahora (presente). También al revés, aunque es menos frecuente: «si fuera más ordenado, no habría perdido las llaves» atribuye a un rasgo permanente una consecuencia pasada.',
        },
        {
          id: 'esi9-p4-choice-mixta',
          type: 'CHOICE',
          instruction: 'Elija la frase correcta.',
          question:
            'Usted no aceptó un trabajo en Sevilla hace cinco años y hoy vive en Bilbao. ¿Cómo lo expresa?',
          options: [
            { id: 'm1', text: 'Si hubiera aceptado aquel puesto, hoy viviría en Sevilla.' },
            { id: 'm2', text: 'Si aceptara aquel puesto, hoy viviría en Sevilla.' },
            { id: 'm3', text: 'Si habría aceptado aquel puesto, hoy viviría en Sevilla.' },
            { id: 'm4', text: 'Si acepté aquel puesto, hoy viviría en Sevilla.' },
          ],
          multiple: false,
          solution: ['m1'],
          explanation:
            'Condición en el pasado (pluscuamperfecto de subjuntivo) y consecuencia en el presente (condicional simple): es la condicional mixta. m3 pone «habría» detrás de «si», que es la construcción prohibida.',
        },
        {
          id: 'esi9-p4-cloze',
          type: 'CLOZE',
          instruction: 'Complete con las formas del tipo III.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Si nos ' },
            {
              kind: 'GAP',
              gapId: 'c1',
              solution: ['hubieran avisado', 'hubiesen avisado'],
              hint: 'avisar, ellos',
              width: 17,
            },
            { kind: 'TEXT', text: ' a tiempo, ' },
            {
              kind: 'GAP',
              gapId: 'c2',
              solution: ['habríamos cambiado', 'hubiéramos cambiado'],
              hint: 'cambiar, nosotros',
              width: 19,
            },
            { kind: 'TEXT', text: ' la fecha. Si tú ' },
            {
              kind: 'GAP',
              gapId: 'c3',
              solution: ['hubieras leído', 'hubieses leído'],
              hint: 'leer, tú',
              width: 15,
            },
            { kind: 'TEXT', text: ' el contrato entero, no ' },
            {
              kind: 'GAP',
              gapId: 'c4',
              solution: ['habrías firmado', 'hubieras firmado'],
              hint: 'firmar, tú',
              width: 16,
            },
            { kind: 'TEXT', text: '. Y si yo ' },
            {
              kind: 'GAP',
              gapId: 'c5',
              solution: ['hubiera estudiado', 'hubiese estudiado'],
              hint: 'estudiar, yo',
              width: 18,
            },
            { kind: 'TEXT', text: ' más idiomas, hoy tendría otro trabajo.' },
          ],
        },
        {
          id: 'esi9-p4-info-reproche',
          type: 'INFO',
          variant: 'TIP',
          title: 'Lamentar sin reprochar',
          text: 'Si el tipo III lleva «tú» como sujeto, suena a reproche casi siempre. Para lamentar algo sin acusar a nadie hay tres recursos: poner el sujeto en primera persona del plural, usar una construcción impersonal, o sustituir la condicional por una expresión de arrepentimiento. El sentido se mantiene y la conversación no se rompe.',
          table: {
            headers: ['Reproche', 'Versión neutra'],
            rows: [
              ['Si me lo hubieras dicho…', 'Si lo hubiéramos hablado antes…'],
              ['Si hubieras llamado…', 'Si se hubiera avisado a tiempo…'],
              ['Tenías que haberlo revisado.', 'Habría convenido revisarlo.'],
              ['Fue culpa tuya.', 'Es una pena que saliera así.'],
            ],
          },
        },
        {
          id: 'esi9-p4-match-actitud',
          type: 'MATCHING',
          instruction: 'Relacione cada frase con la actitud que expresa.',
          left: [
            { id: 'x1', text: 'Si hubiera salido diez minutos antes, habría llegado.' },
            { id: 'x2', text: 'Si me lo hubieras contado, no habría hecho el ridículo.' },
            {
              id: 'x3',
              text: 'Menos mal: si hubiéramos cogido ese vuelo, seguiríamos en el aeropuerto.',
            },
            { id: 'x4', text: 'Si se hubiera revisado el presupuesto, esto no habría ocurrido.' },
          ],
          right: [
            { id: 'y1', text: 'Arrepentimiento propio.' },
            { id: 'y2', text: 'Reproche a otra persona.' },
            { id: 'y3', text: 'Alivio por lo que no pasó.' },
            { id: 'y4', text: 'Crítica impersonal, sin señalar a nadie.' },
          ],
          solution: [
            { leftId: 'x1', rightId: 'y1' },
            { leftId: 'x2', rightId: 'y2' },
            { leftId: 'x3', rightId: 'y3' },
            { leftId: 'x4', rightId: 'y4' },
          ],
        },
        {
          id: 'esi9-p4-writing',
          type: 'WRITING',
          instruction: 'Escriba una reflexión sobre una decisión pasada.',
          prompt:
            'Piense en una decisión que tomó hace años y que podría haber sido otra: una mudanza, unos estudios, un trabajo que aceptó o rechazó. Escriba de 100 a 160 palabras sobre cómo habría sido su vida si hubiera decidido lo contrario. Use al menos tres condicionales de tipo III y una condicional mixta (pasado con consecuencia en el presente). Evite el reproche a terceros.',
          minWords: 100,
          maxWords: 170,
          aiFeedback: true,
          sampleAnswer:
            'Hace nueve años me ofrecieron un puesto en una oficina de Hamburgo y lo rechacé en dos días, casi sin pensarlo. A veces me pregunto qué habría pasado si lo hubiera aceptado. Habría aprendido alemán de verdad, no a medias como ahora, y probablemente habría ganado bastante más durante los primeros años. Si me hubiera ido entonces, hoy tendría una carrera muy distinta y seguramente viviría allí.\n\nTambién sé lo que habría perdido. No habría conocido a la mitad de la gente que ahora me importa, y mi hermana pasó justo aquel invierno una operación complicada: si hubiera estado a dos mil kilómetros, no habría podido acompañarla. No me arrepiento, aunque reconozco que decidí demasiado deprisa. Si volviera a pasarme algo así, me daría al menos dos semanas para pensarlo.',
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – der Rest des Imperfecto: como si, ojalá, de haber + Infinitiv.
  {
    order: 5,
    title: 'Más allá de «si»',
    subtitle: 'Como si, ojalá, de haberlo sabido',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'esi9-p5-h1', type: 'HEADING', level: 1, text: 'Más allá de «si»' },
        {
          id: 'esi9-p5-intro',
          type: 'TEXT',
          text: 'La conjunción «si» no tiene el monopolio de la hipótesis. El español dispone de otras entradas, y algunas son las que separan un texto correcto de uno que suena a español de verdad: «como si» para la comparación irreal, «ojalá» para el deseo, y las construcciones con infinitivo o gerundio que se ahorran la conjunción entera.',
        },
        {
          id: 'esi9-p5-info-comosi',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Como si: siempre subjuntivo',
          text: 'Detrás de «como si» nunca va indicativo, en ninguna circunstancia: la comparación es irreal por definición. Solo hay que elegir entre dos tiempos. Si lo comparado es simultáneo, imperfecto de subjuntivo; si es anterior, pluscuamperfecto. «Habla como si fuera el jefe» (lo es ahora mismo, en la comparación); «habla como si hubiera estado allí» (la estancia sería anterior a su manera de hablar).',
          table: {
            headers: ['Relación temporal', 'Forma', 'Ejemplo'],
            rows: [
              ['simultánea', 'como si + imperf. subj.', 'Me mira como si no me conociera.'],
              ['anterior', 'como si + plusc. subj.', 'Lo cuenta como si lo hubiera visto.'],
              ['equivalentes', 'igual que si, ni que', 'Ni que fuéramos millonarios.'],
            ],
          },
        },
        {
          id: 'esi9-p5-info-ojala',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Ojalá: cuatro tiempos, cuatro deseos',
          text: 'Ojalá viene del árabe «law šā’ allāh», ojalá quiera Dios, y ha conservado de ese origen el subjuntivo obligatorio. El tiempo que se elige dice cuánta esperanza hay: con presente de subjuntivo el deseo es posible; con imperfecto, improbable; con pluscuamperfecto, imposible, porque el momento ya pasó.',
          table: {
            headers: ['Forma', 'Ejemplo', 'Grado'],
            rows: [
              ['ojalá + pres. subj.', 'Ojalá llueva mañana.', 'posible'],
              ['ojalá + imperf. subj.', 'Ojalá lloviera de una vez.', 'improbable'],
              ['ojalá + pret. perf. subj.', 'Ojalá haya llegado bien.', 'posible, ya ocurrido'],
              ['ojalá + plusc. subj.', 'Ojalá hubiera llovido en mayo.', 'imposible'],
            ],
          },
        },
        {
          id: 'esi9-p5-cloze-comosi',
          type: 'CLOZE',
          instruction: 'Complete con el tiempo adecuado detrás de «como si» y «ojalá».',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Nos trató como si no nos ' },
            {
              kind: 'GAP',
              gapId: 'c1',
              solution: ['conociera', 'conociese'],
              hint: 'conocer, simultáneo',
              width: 11,
            },
            { kind: 'TEXT', text: '. Habla del proyecto como si ya lo ' },
            {
              kind: 'GAP',
              gapId: 'c2',
              solution: ['hubieran aprobado', 'hubiesen aprobado'],
              hint: 'aprobar, anterior',
              width: 18,
            },
            { kind: 'TEXT', text: '. Ojalá ' },
            {
              kind: 'GAP',
              gapId: 'c3',
              solution: ['salga'],
              hint: 'salir, deseo posible',
              width: 8,
            },
            { kind: 'TEXT', text: ' bien la entrevista de mañana. Ojalá me lo ' },
            {
              kind: 'GAP',
              gapId: 'c4',
              solution: ['hubieran dicho', 'hubiesen dicho'],
              hint: 'decir, ya imposible',
              width: 15,
            },
            { kind: 'TEXT', text: ' la semana pasada.' },
          ],
        },
        {
          id: 'esi9-p5-info-sinsi',
          type: 'INFO',
          variant: 'TIP',
          title: 'Condiciones sin «si»',
          text: 'Estas construcciones dicen lo mismo que una condicional y suben el registro de un texto escrito. «De haberlo sabido» equivale exactamente a «si lo hubiera sabido» y es frecuente en prensa y en lengua cuidada. Las conjunciones de la segunda mitad de la tabla piden siempre subjuntivo.',
          table: {
            headers: ['Construcción', 'Equivale a', 'Ejemplo'],
            rows: [
              ['de + infinitivo', 'si + subj.', 'De haberlo sabido, no habría venido.'],
              ['gerundio', 'si + indic.', 'Corriendo, llegas todavía.'],
              ['en caso de que', 'si acaso', 'En caso de que llueva, lo pasamos dentro.'],
              ['a no ser que', 'salvo si', 'Iremos, a no ser que avisen de lo contrario.'],
              [
                'siempre que / siempre y cuando',
                'solo si',
                'Te lo presto siempre que lo devuelvas.',
              ],
              ['como + subj.', 'si (amenaza)', 'Como llegues tarde otra vez, no entras.'],
            ],
          },
        },
        {
          id: 'esi9-p5-choice-sinsi',
          type: 'CHOICE',
          instruction: 'Elija la transformación correcta.',
          question: '«Si lo hubiéramos sabido antes, no habríamos comprado los billetes.»',
          options: [
            { id: 'r1', text: 'De saberlo antes, no habríamos comprado los billetes.' },
            { id: 'r2', text: 'De haberlo sabido antes, no habríamos comprado los billetes.' },
            { id: 'r3', text: 'Sabiéndolo antes, no habríamos comprado los billetes.' },
            { id: 'r4', text: 'En caso de saberlo antes, no habríamos comprado los billetes.' },
          ],
          multiple: false,
          solution: ['r2'],
          explanation:
            'La condición es anterior y no se cumplió, luego el infinitivo debe ser compuesto: de haberlo sabido. «De saberlo» (r1) apuntaría al presente, y r4 desplaza la frase a un futuro hipotético que no corresponde.',
        },
        {
          id: 'esi9-p5-match-equivalencias',
          type: 'MATCHING',
          instruction: 'Relacione cada frase con su equivalente.',
          left: [
            { id: 'q1', text: 'Como vuelvas a llegar tarde, hablamos seriamente.' },
            { id: 'q2', text: 'Te dejo el coche siempre y cuando lo devuelvas con gasolina.' },
            { id: 'q3', text: 'De haber llamado, se lo habrían explicado.' },
            { id: 'q4', text: 'A no ser que cambie el tiempo, la carrera se celebra.' },
          ],
          right: [
            { id: 'z1', text: 'Si vuelves a llegar tarde… (amenaza)' },
            { id: 'z2', text: 'Solo si lo devuelves con gasolina.' },
            { id: 'z3', text: 'Si hubiera llamado…' },
            { id: 'z4', text: 'Salvo si cambia el tiempo.' },
          ],
          solution: [
            { leftId: 'q1', rightId: 'z1' },
            { leftId: 'q2', rightId: 'z2' },
            { leftId: 'q3', rightId: 'z3' },
            { leftId: 'q4', rightId: 'z4' },
          ],
        },
        {
          id: 'esi9-p5-ordering',
          type: 'ORDERING',
          instruction: 'Ordene el párrafo.',
          items: [
            { id: 'n1', text: 'La reunión se convocó con tres días de antelación.' },
            {
              id: 'n2',
              text: 'De haberse avisado antes, habrían podido asistir los delegados de fuera.',
            },
            { id: 'n3', text: 'Aun así, acudieron once de los quince convocados.' },
            { id: 'n4', text: 'Ojalá la próxima se anuncie con dos semanas de margen.' },
          ],
          solution: ['n1', 'n2', 'n3', 'n4'],
        },
        {
          id: 'esi9-p5-writing',
          type: 'WRITING',
          instruction: 'Escriba un texto con hipótesis variadas.',
          prompt:
            'Escriba de 120 a 180 palabras sobre una oportunidad que su ciudad, su empresa o su familia dejó pasar. Use al menos: una condicional de tipo III, una construcción con «de + infinitivo compuesto», un «como si» y un «ojalá». Que el texto se lea como una reflexión, no como una lista de ejercicios.',
          minWords: 120,
          maxWords: 190,
          aiFeedback: true,
          sampleAnswer:
            'En 2014 se ofreció a mi pueblo la posibilidad de recuperar la antigua estación para convertirla en biblioteca y centro cívico. El proyecto llegó con financiación europea y con un plazo de seis meses para responder. El pleno lo discutió tres veces y acabó dejándolo pasar.\n\nDe haber aceptado aquella oferta, hoy tendríamos un edificio de mil metros cuadrados en el centro, y no una nave cerrada con las ventanas rotas. Si el ayuntamiento hubiera nombrado a alguien que se ocupara del expediente, seguramente habría salido adelante; el problema no fue el dinero, sino que nadie lo llevó.\n\nLo que más molesta es cómo se cuenta ahora. Algunos hablan de aquello como si la decisión la hubiera tomado otro gobierno, o como si la oferta nunca hubiera existido. Ojalá vuelva a presentarse una ocasión parecida, aunque me temo que las estaciones abandonadas no se ofrecen dos veces.',
        },
      ],
    },
  },
];
