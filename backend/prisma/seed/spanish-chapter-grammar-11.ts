import type { UnitSeed } from './chapter-beginner-1';

/**
 * Spanische Grammatik, Kapitel 11: „Bedingungssätze“
 *
 * Vier Seiten. Drei Typen, drei Formenpaare – und zwei Zeiten, die vorher im
 * Buch noch nicht vorkamen: der Condicional und der Subjuntivo Imperfecto.
 * Beide werden hier gebildet, weil sie ohne die Bedingungssätze kaum gebraucht
 * werden und mit ihnen sofort.
 *
 * Aufbau: erst der reale Typ, der keine neue Form verlangt und die Regel
 * aufstellt, die das ganze Kapitel trägt – nach „si“ steht nie das Futur;
 * dann die beiden neuen Zeiten samt dem irrealen Typ; dann der unerfüllbare,
 * der nur eine Ebene tiefer liegt; zuletzt alle drei nebeneinander, weil im
 * Gespräch niemand ankündigt, welcher Typ gleich kommt.
 *
 * Die Reihenfolge der Sätze bleibt durchgehend frei: „si“ darf vorn oder
 * hinten stehen. Wichtig ist allein, welche Form in welchem Satzteil steht –
 * und das ist der Punkt, an dem es schiefgeht.
 */
const v = 1;

export const SPANISH_GRAMMAR_11_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – der reale Typ.
  {
    order: 1,
    title: 'Der reale Bedingungssatz',
    subtitle: 'si tengo tiempo, voy',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'esg11-p1-h1', type: 'HEADING', level: 1, text: 'Der reale Bedingungssatz' },
        {
          id: 'esg11-p1-intro',
          type: 'TEXT',
          text: 'El primer tipo habla de algo que puede ocurrir perfectamente: «Si tengo tiempo, voy». No hace falta ninguna forma nueva – presente en la condición, presente o futuro en la consecuencia. Lo único que hay que aprender es una prohibición.',
          translations: {
            de: 'Der erste Typ spricht von etwas, das durchaus eintreten kann: „Si tengo tiempo, voy“. Es braucht keine neue Form – Präsens in der Bedingung, Präsens oder Futur in der Folge. Zu lernen ist nur ein Verbot.',
          },
        },
        {
          id: 'esg11-p1-info-regla',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Después de «si» nunca va futuro',
          text: 'Esta es la regla que más se infringe, porque el alemán permite lo contrario. «Si tendré tiempo» no existe: hay que decir «si tengo tiempo», aunque se hable del año que viene. El futuro solo puede aparecer en la otra mitad de la frase.',
          translations: {
            de: {
              title: 'Nach „si“ steht nie das Futur',
              text: 'Diese Regel wird am häufigsten verletzt, weil das Deutsche das Gegenteil erlaubt. „Si tendré tiempo“ gibt es nicht: Es muss „si tengo tiempo“ heißen, auch wenn vom nächsten Jahr die Rede ist. Das Futur darf nur in der anderen Satzhälfte stehen.',
            },
          },
          table: {
            headers: ['Correcto', 'Incorrecto'],
            rows: [
              ['Si llueve, no salimos.', 'Si lloverá, no salimos.'],
              ['Si apruebo, lo celebraremos.', 'Si aprobaré, lo celebraremos.'],
              ['Si me llamas, te lo cuento.', 'Si me llamarás, te lo cuento.'],
            ],
          },
        },
        {
          id: 'esg11-p1-info-combinaciones',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Qué puede ir en la otra mitad',
          text: 'La consecuencia admite tres formas según lo que se quiera decir: presente para lo habitual, futuro para lo que pasará, imperativo para lo que hay que hacer. El orden de las dos partes es libre; solo cambia la coma, que se pone cuando «si» va delante.',
          translations: {
            de: {
              title: 'Was in der anderen Hälfte stehen kann',
              text: 'Die Folge lässt je nach Aussage drei Formen zu: Präsens für Gewohnheiten, Futur für das, was eintreten wird, Imperativ für das, was zu tun ist. Die Reihenfolge der beiden Teile ist frei; nur das Komma wechselt – es steht, wenn „si“ vorangeht.',
            },
          },
          table: {
            headers: ['Consecuencia', 'Ejemplo'],
            rows: [
              ['presente (habitual)', 'Si hace sol, comemos fuera.'],
              ['futuro', 'Si hace sol, comeremos fuera.'],
              ['imperativo', 'Si hace sol, llama a los vecinos.'],
              ['orden invertido', 'Comeremos fuera si hace sol.'],
            ],
          },
        },
        {
          id: 'esg11-p1-info-futuro',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'El futuro simple, de paso',
          text: 'Se forma sobre el infinitivo entero, sin quitarle nada, y las terminaciones son iguales para las tres conjugaciones. Doce verbos acortan la raíz – «tendré», «podré», «haré», «diré», «saldré», «pondré», «vendré», «sabré», «querré», «habré», «cabré», «valdré» –, pero las terminaciones no cambian nunca.',
          translations: {
            de: {
              title: 'Das Futur, nebenbei',
              text: 'Es wird auf dem ganzen Infinitiv gebildet, ohne etwas zu streichen, und die Endungen sind für alle drei Konjugationen gleich. Zwölf Verben kürzen den Stamm – „tendré“, „podré“, „haré“, „diré“, „saldré“, „pondré“, „vendré“, „sabré“, „querré“, „habré“, „cabré“, „valdré“ –, die Endungen aber wechseln nie.',
            },
          },
          table: {
            headers: ['Persona', 'hablar', 'tener'],
            rows: [
              ['yo', 'hablaré', 'tendré'],
              ['tú', 'hablarás', 'tendrás'],
              ['él / ella / usted', 'hablará', 'tendrá'],
              ['nosotros', 'hablaremos', 'tendremos'],
              ['vosotros', 'hablaréis', 'tendréis'],
              ['ellos / ellas / ustedes', 'hablarán', 'tendrán'],
            ],
          },
        },
        {
          id: 'esg11-p1-cloze',
          type: 'CLOZE',
          instruction: 'Complete el condicional real.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Si mañana ' },
            { kind: 'GAP', gapId: 'a1', solution: ['hace'], hint: 'hacer buen tiempo', width: 6 },
            { kind: 'TEXT', text: ' buen tiempo, ' },
            { kind: 'GAP', gapId: 'a2', solution: ['iremos'], hint: 'ir, nosotros – Futur', width: 8 },
            { kind: 'TEXT', text: ' a la sierra.\nSi ' },
            { kind: 'GAP', gapId: 'a3', solution: ['terminas'], hint: 'terminar, tú', width: 9 },
            { kind: 'TEXT', text: ' pronto, llámame.\nSi no ' },
            { kind: 'GAP', gapId: 'a4', solution: ['puedes'], hint: 'poder, tú', width: 8 },
            { kind: 'TEXT', text: ' venir, no pasa nada.\nSi el tren ' },
            { kind: 'GAP', gapId: 'a5', solution: ['llega'], hint: 'llegar, él', width: 7 },
            { kind: 'TEXT', text: ' tarde, ' },
            { kind: 'GAP', gapId: 'a6', solution: ['perderé'], hint: 'perder, yo – Futur', width: 9 },
            { kind: 'TEXT', text: ' la reunión.' },
          ],
        },
        {
          id: 'esg11-p1-choice',
          type: 'CHOICE',
          instruction: 'Elija la frase correcta.',
          question: '«Wenn ich nächstes Jahr Geld habe, reise ich nach Chile.»',
          options: [
            { id: 'o1', text: 'Si tendré dinero el año que viene, viajaré a Chile.' },
            { id: 'o2', text: 'Si tengo dinero el año que viene, viajaré a Chile.' },
            { id: 'o3', text: 'Si tenga dinero el año que viene, viajaré a Chile.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation:
            'Aunque se hable del año que viene, después de «si» va presente de indicativo. Tampoco cabe el subjuntivo: «si tenga» no existe en español.',
          explanationTranslations: {
            de: 'Auch wenn vom nächsten Jahr die Rede ist, steht nach „si“ das Präsens Indikativ. Der Subjuntivo passt ebenso wenig: „si tenga“ gibt es im Spanischen nicht.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – irreal in der Gegenwart.
  {
    order: 2,
    title: 'Der irreale Bedingungssatz',
    subtitle: 'si tuviera tiempo, iría',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'esg11-p2-h1', type: 'HEADING', level: 1, text: 'Der irreale Bedingungssatz' },
        {
          id: 'esg11-p2-intro',
          type: 'TEXT',
          text: 'El segundo tipo habla de lo que no es el caso: «Si tuviera tiempo, iría contigo» – pero no lo tengo. Aquí sí hacen falta dos formas nuevas, una para cada mitad de la frase.',
          translations: {
            de: 'Der zweite Typ spricht von dem, was nicht der Fall ist: „Si tuviera tiempo, iría contigo“ – aber ich habe keine. Hier braucht es zwei neue Formen, eine für jede Satzhälfte.',
          },
        },
        {
          id: 'esg11-p2-info-subjimp',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'El imperfecto de subjuntivo',
          text: 'Se saca de la tercera persona del plural del indefinido: se quita el -ron y se añaden las terminaciones. Como el indefinido ya trae todas las irregularidades, aquí no hay ninguna nueva – ni una sola excepción en todo el idioma. Existen dos series, -ra y -se, completamente intercambiables; la primera es hoy la más corriente.',
          translations: {
            de: {
              title: 'Der Subjuntivo Imperfecto',
              text: 'Er wird aus der dritten Person Plural des Indefinido gewonnen: Man streicht das -ron und hängt die Endungen an. Da das Indefinido alle Unregelmäßigkeiten schon mitbringt, gibt es hier keine neuen – in der ganzen Sprache keine einzige Ausnahme. Es gibt zwei Reihen, -ra und -se, die völlig austauschbar sind; die erste ist heute die gebräuchlichere.',
            },
          },
          table: {
            headers: ['Infinitivo', 'ellos (indefinido)', 'yo (-ra)', 'yo (-se)'],
            rows: [
              ['hablar', 'hablaron', 'hablara', 'hablase'],
              ['comer', 'comieron', 'comiera', 'comiese'],
              ['tener', 'tuvieron', 'tuviera', 'tuviese'],
              ['ser / ir', 'fueron', 'fuera', 'fuese'],
              ['poder', 'pudieron', 'pudiera', 'pudiese'],
              ['decir', 'dijeron', 'dijera', 'dijese'],
            ],
          },
        },
        {
          id: 'esg11-p2-info-condicional',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'El condicional simple',
          text: 'Se forma como el futuro – sobre el infinitivo entero – pero con las terminaciones del imperfecto de los verbos en -er. Y acorta la raíz en los mismos doce verbos: quien sepa «tendré» sabe «tendría».',
          translations: {
            de: {
              title: 'Der Condicional',
              text: 'Er wird wie das Futur gebildet – auf dem ganzen Infinitiv –, aber mit den Imperfecto-Endungen der Verben auf -er. Und er kürzt den Stamm bei denselben zwölf Verben: Wer „tendré“ kann, kann „tendría“.',
            },
          },
          table: {
            headers: ['Persona', 'hablar', 'poder'],
            rows: [
              ['yo', 'hablaría', 'podría'],
              ['tú', 'hablarías', 'podrías'],
              ['él / ella / usted', 'hablaría', 'podría'],
              ['nosotros', 'hablaríamos', 'podríamos'],
              ['vosotros', 'hablaríais', 'podríais'],
              ['ellos / ellas / ustedes', 'hablarían', 'podrían'],
            ],
          },
        },
        {
          id: 'esg11-p2-info-reparto',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Cada forma en su mitad',
          text: 'El subjuntivo va siempre con «si», el condicional siempre en la consecuencia. Cambiarlos de sitio es el error clásico: «si tendría tiempo» se oye a veces incluso entre hispanohablantes, y está considerado incorrecto.',
          translations: {
            de: {
              title: 'Jede Form in ihrer Hälfte',
              text: 'Der Subjuntivo steht immer bei „si“, der Condicional immer in der Folge. Sie zu vertauschen ist der klassische Fehler: „si tendría tiempo“ hört man gelegentlich sogar unter Muttersprachlern und gilt als falsch.',
            },
          },
          table: {
            headers: ['Condición (si + subj. imperfecto)', 'Consecuencia (condicional)'],
            rows: [
              ['Si tuviera dinero,', 'me compraría una casa.'],
              ['Si fuera tú,', 'no diría nada.'],
              ['Si pudiéramos elegir,', 'nos quedaríamos aquí.'],
              ['Si no lloviera tanto,', 'saldríamos a pasear.'],
            ],
          },
        },
        {
          id: 'esg11-p2-cloze',
          type: 'CLOZE',
          instruction: 'Complete el condicional irreal.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Si yo ' },
            { kind: 'GAP', gapId: 'b1', solution: ['tuviera'], hint: 'tener, yo – Subj. Imperfecto', width: 9 },
            { kind: 'TEXT', text: ' más tiempo, ' },
            { kind: 'GAP', gapId: 'b2', solution: ['estudiaría'], hint: 'estudiar, yo – Condicional', width: 12 },
            { kind: 'TEXT', text: ' otro idioma.\nSi ' },
            { kind: 'GAP', gapId: 'b3', solution: ['fuera'], hint: 'ser, yo', width: 7 },
            { kind: 'TEXT', text: ' rico, no ' },
            { kind: 'GAP', gapId: 'b4', solution: ['trabajaría'], hint: 'trabajar, yo', width: 12 },
            { kind: 'TEXT', text: ' los sábados.\nSi nosotros ' },
            { kind: 'GAP', gapId: 'b5', solution: ['viviéramos'], hint: 'vivir, nosotros', width: 12 },
            { kind: 'TEXT', text: ' en la costa, ' },
            { kind: 'GAP', gapId: 'b6', solution: ['iríamos'], hint: 'ir, nosotros', width: 9 },
            { kind: 'TEXT', text: ' a nadar cada día.' },
          ],
        },
        {
          id: 'esg11-p2-choice',
          type: 'CHOICE',
          instruction: 'Marque todas las frases correctas.',
          question: '¿Cuáles están bien construidas?',
          options: [
            { id: 'q1', text: 'Si tendría tiempo, te ayudaría.' },
            { id: 'q2', text: 'Si tuviera tiempo, te ayudaría.' },
            { id: 'q3', text: 'Si tuviese tiempo, te ayudaría.' },
            { id: 'q4', text: 'Si tuviera tiempo, te ayudara.' },
          ],
          multiple: true,
          solution: ['q2', 'q3'],
          explanation:
            'Las dos series del subjuntivo, -ra y -se, valen igual. Lo que no puede es ir el condicional detrás de «si» ni el subjuntivo en la consecuencia.',
          explanationTranslations: {
            de: 'Beide Reihen des Subjuntivo, -ra und -se, sind gleichwertig. Nicht möglich ist der Condicional nach „si“ oder der Subjuntivo in der Folge.',
          },
        },
        {
          id: 'esg11-p2-info-cortesia',
          type: 'INFO',
          variant: 'TIP',
          title: 'El condicional también sirve para pedir',
          text: 'Fuera de los condicionales, esta forma es la manera normal de pedir algo con educación: «¿Podría repetirlo?», «Querría una habitación doble», «Me gustaría reservar una mesa». Es el equivalente exacto del «hätte gern» alemán.',
          translations: {
            de: {
              title: 'Der Condicional dient auch zum Bitten',
              text: 'Außerhalb der Bedingungssätze ist diese Form die übliche Art, höflich um etwas zu bitten: „¿Podría repetirlo?“, „Querría una habitación doble“, „Me gustaría reservar una mesa“. Es entspricht genau dem deutschen „hätte gern“.',
            },
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – unerfüllbar, Vergangenheit.
  {
    order: 3,
    title: 'Der unerfüllbare Bedingungssatz',
    subtitle: 'si hubiera sabido, habría venido',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'esg11-p3-h1', type: 'HEADING', level: 1, text: 'Der unerfüllbare Bedingungssatz' },
        {
          id: 'esg11-p3-intro',
          type: 'TEXT',
          text: 'El tercer tipo mira hacia atrás y habla de lo que ya no puede cambiar: «Si hubiera sabido que estabas aquí, habría venido antes». Es el tipo del arrepentimiento y del reproche, y también el más largo de decir.',
          translations: {
            de: 'Der dritte Typ blickt zurück und spricht von dem, was sich nicht mehr ändern lässt: „Si hubiera sabido que estabas aquí, habría venido antes“. Es ist der Typ des Bedauerns und des Vorwurfs – und der längste beim Aussprechen.',
          },
        },
        {
          id: 'esg11-p3-info-formas',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Las mismas dos formas, una capa más abajo',
          text: 'No hay nada nuevo que aprender: se toman las dos formas de la página anterior y se convierten en compuestas con «haber». «Tuviera» da «hubiera tenido»; «tendría» da «habría tenido». El participio es el mismo del capítulo 7.',
          translations: {
            de: {
              title: 'Dieselben zwei Formen, eine Ebene tiefer',
              text: 'Es gibt nichts Neues zu lernen: Man nimmt die beiden Formen der vorigen Seite und macht sie mit „haber“ zusammengesetzt. „Tuviera“ ergibt „hubiera tenido“, „tendría“ ergibt „habría tenido“. Das Partizip ist dasselbe wie in Kapitel 7.',
            },
          },
          table: {
            headers: ['Persona', 'si + hubiera …', 'habría …'],
            rows: [
              ['yo', 'hubiera sabido', 'habría venido'],
              ['tú', 'hubieras sabido', 'habrías venido'],
              ['él / ella / usted', 'hubiera sabido', 'habría venido'],
              ['nosotros', 'hubiéramos sabido', 'habríamos venido'],
              ['vosotros', 'hubierais sabido', 'habríais venido'],
              ['ellos / ellas / ustedes', 'hubieran sabido', 'habrían venido'],
            ],
          },
        },
        {
          id: 'esg11-p3-info-mixtas',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Las frases mixtas',
          text: 'Muy frecuentes y muy útiles: la condición está en el pasado, pero la consecuencia sigue afectando al presente. «Si hubiera estudiado medicina, ahora sería médico» – la decisión es antigua, la situación es de hoy. Se combina el pasado de la condición con el condicional simple.',
          translations: {
            de: {
              title: 'Die gemischten Sätze',
              text: 'Sehr häufig und sehr brauchbar: Die Bedingung liegt in der Vergangenheit, die Folge wirkt bis in die Gegenwart. „Si hubiera estudiado medicina, ahora sería médico“ – die Entscheidung ist alt, die Lage ist die von heute. Man verbindet die Vergangenheitsbedingung mit dem einfachen Condicional.',
            },
          },
          table: {
            headers: ['Condición', 'Consecuencia', 'Sentido'],
            rows: [
              ['Si hubiera estudiado,', 'habría aprobado.', 'alles in der Vergangenheit'],
              ['Si hubiera estudiado,', 'ahora tendría trabajo.', 'Folge in der Gegenwart'],
              ['Si no fuera tan tímido,', 'habría dicho algo.', 'dauernde Eigenschaft, einmaliger Vorgang'],
            ],
          },
        },
        {
          id: 'esg11-p3-cloze',
          type: 'CLOZE',
          instruction: 'Complete el condicional irreal del pasado.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Si me lo ' },
            { kind: 'GAP', gapId: 'c1', solution: ['hubieras dicho'], hint: 'decir, tú', width: 16 },
            { kind: 'TEXT', text: ' antes, ' },
            { kind: 'GAP', gapId: 'c2', solution: ['habría cambiado'], hint: 'cambiar, yo', width: 17 },
            { kind: 'TEXT', text: ' los billetes.\nSi no ' },
            { kind: 'GAP', gapId: 'c3', solution: ['hubiera llovido'], hint: 'llover', width: 17 },
            { kind: 'TEXT', text: ' tanto, la fiesta ' },
            { kind: 'GAP', gapId: 'c4', solution: ['habría sido'], hint: 'ser', width: 13 },
            { kind: 'TEXT', text: ' en el jardín.\nSi ' },
            { kind: 'GAP', gapId: 'c5', solution: ['hubiéramos salido'], hint: 'salir, nosotros', width: 19 },
            { kind: 'TEXT', text: ' a las seis, ahora ' },
            { kind: 'GAP', gapId: 'c6', solution: ['estaríamos'], hint: 'estar, nosotros – jetzt', width: 12 },
            { kind: 'TEXT', text: ' en Valencia.' },
          ],
        },
        {
          id: 'esg11-p3-choice',
          type: 'CHOICE',
          instruction: 'Elija la frase correcta.',
          question: '«Wenn ich damals Jura studiert hätte, wäre ich heute Anwalt.»',
          options: [
            { id: 'r1', text: 'Si hubiera estudiado derecho, hoy sería abogado.' },
            { id: 'r2', text: 'Si hubiera estudiado derecho, hoy habría sido abogado.' },
            { id: 'r3', text: 'Si estudiara derecho, hoy sería abogado.' },
          ],
          multiple: false,
          solution: ['r1'],
          explanation:
            'La decisión pertenece al pasado, así que la condición es compuesta. Pero la consecuencia habla de hoy, y por eso va en condicional simple, no compuesto.',
          explanationTranslations: {
            de: 'Die Entscheidung gehört der Vergangenheit an, die Bedingung ist also zusammengesetzt. Die Folge spricht aber von heute und steht deshalb im einfachen, nicht im zusammengesetzten Condicional.',
          },
        },
        {
          id: 'esg11-p3-order',
          type: 'ORDERING',
          instruction: 'Forme una frase correcta.',
          items: [
            { id: 'w1', text: 'Si hubiéramos' },
            { id: 'w2', text: 'reservado antes,' },
            { id: 'w3', text: 'no habríamos' },
            { id: 'w4', text: 'pagado' },
            { id: 'w5', text: 'tanto por el hotel.' },
          ],
          solution: ['w1', 'w2', 'w3', 'w4', 'w5'],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – alle drei nebeneinander.
  {
    order: 4,
    title: 'Die drei Typen nebeneinander',
    subtitle: 'Und was sonst noch mit si und como si geht',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'esg11-p4-h1', type: 'HEADING', level: 1, text: 'Die drei Typen nebeneinander' },
        {
          id: 'esg11-p4-intro',
          type: 'TEXT',
          text: 'En una conversación nadie anuncia de qué tipo va a ser la frase siguiente: hay que decidirlo sobre la marcha. Esta página pone los tres juntos y añade las construcciones vecinas que usan las mismas formas.',
          translations: {
            de: 'Im Gespräch kündigt niemand an, von welchem Typ der nächste Satz sein wird: Man muss es im Moment entscheiden. Diese Seite stellt die drei zusammen und ergänzt die verwandten Konstruktionen, die dieselben Formen verwenden.',
          },
        },
        {
          id: 'esg11-p4-info-resumen',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Los tres de un vistazo',
          text: 'Lo que decide no es el tiempo del que se habla, sino la distancia que el hablante pone: posible, improbable, imposible. La misma situación admite los tres según cómo se vea.',
          translations: {
            de: {
              title: 'Die drei auf einen Blick',
              text: 'Entscheidend ist nicht die Zeit, von der die Rede ist, sondern der Abstand, den die sprechende Person setzt: möglich, unwahrscheinlich, unmöglich. Dieselbe Lage lässt alle drei zu, je nachdem, wie man sie sieht.',
            },
          },
          table: {
            headers: ['Tipo', 'Condición', 'Consecuencia'],
            rows: [
              ['real', 'si + presente', 'presente / futuro / imperativo'],
              ['irreal', 'si + imperfecto de subjuntivo', 'condicional simple'],
              ['imposible', 'si + pluscuamperfecto de subjuntivo', 'condicional compuesto'],
              ['mixto', 'si + pluscuamperfecto de subjuntivo', 'condicional simple'],
            ],
          },
        },
        {
          id: 'esg11-p4-info-vecinas',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Construcciones vecinas',
          text: 'Tres expresiones reutilizan el imperfecto de subjuntivo fuera de los condicionales. «Como si» lo lleva siempre, aunque la frase principal esté en presente. «Ojalá» cambia de sentido según la forma: con presente de subjuntivo pide algo posible, con imperfecto lamenta algo que no es.',
          translations: {
            de: {
              title: 'Verwandte Konstruktionen',
              text: 'Drei Ausdrücke greifen den Subjuntivo Imperfecto außerhalb der Bedingungssätze auf. „Como si“ steht immer damit, auch wenn der Hauptsatz im Präsens ist. „Ojalá“ wechselt je nach Form den Sinn: mit Presente de Subjuntivo erbittet es Mögliches, mit dem Imperfecto beklagt es, was nicht ist.',
            },
          },
          table: {
            headers: ['Expresión', 'Ejemplo', 'Sentido'],
            rows: [
              ['como si', 'Habla como si fuera el jefe.', 'als ob er der Chef wäre'],
              ['ojalá + presente subj.', 'Ojalá venga mañana.', 'hoffentlich kommt er'],
              ['ojalá + imperfecto subj.', 'Ojalá viniera mañana.', 'wenn er doch käme'],
              ['ojalá + pluscuamperfecto', 'Ojalá hubiera venido.', 'wäre er doch gekommen'],
              ['por si', 'Llévate paraguas por si llueve.', 'für den Fall, dass'],
            ],
          },
        },
        {
          id: 'esg11-p4-cloze',
          type: 'CLOZE',
          instruction: 'Complete con la forma adecuada según el tipo de condición.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Si ' },
            { kind: 'GAP', gapId: 'd1', solution: ['puedo'], hint: 'poder, yo – real', width: 8 },
            { kind: 'TEXT', text: ', paso a verte esta tarde.\nSi ' },
            { kind: 'GAP', gapId: 'd2', solution: ['fuera'], hint: 'ser, yo – irreal', width: 7 },
            { kind: 'TEXT', text: ' tú, aceptaría la oferta.\nSi me ' },
            { kind: 'GAP', gapId: 'd3', solution: ['hubieran avisado'], hint: 'avisar, ellos – unmöglich', width: 18 },
            { kind: 'TEXT', text: ', habría ido.\nHabla como si lo ' },
            { kind: 'GAP', gapId: 'd4', solution: ['supiera'], hint: 'saber, él – como si', width: 9 },
            { kind: 'TEXT', text: ' todo.\nOjalá ' },
            { kind: 'GAP', gapId: 'd5', solution: ['tuviéramos'], hint: 'tener, nosotros – Bedauern', width: 12 },
            { kind: 'TEXT', text: ' más tiempo.' },
          ],
        },
        {
          id: 'esg11-p4-match',
          type: 'MATCHING',
          instruction: 'Relacione la frase con lo que expresa.',
          left: [
            { id: 'm1', text: 'Si llueve, nos quedamos en casa.' },
            { id: 'm2', text: 'Si lloviera, nos quedaríamos en casa.' },
            { id: 'm3', text: 'Si hubiera llovido, nos habríamos quedado en casa.' },
            { id: 'm4', text: 'Si hubiera llovido, ahora estaríamos en casa.' },
          ],
          right: [
            { id: 'n1', text: 'Möglich – es kann noch regnen.' },
            { id: 'n2', text: 'Unwahrscheinlich – es sieht nicht danach aus.' },
            { id: 'n3', text: 'Vorbei – es hat nicht geregnet.' },
            { id: 'n4', text: 'Vergangene Bedingung, gegenwärtige Folge.' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'n1' },
            { leftId: 'm2', rightId: 'n2' },
            { leftId: 'm3', rightId: 'n3' },
            { leftId: 'm4', rightId: 'n4' },
          ],
        },
        {
          id: 'esg11-p4-choice',
          type: 'CHOICE',
          instruction: 'Marque todas las frases correctas.',
          question: '¿Cuáles están bien construidas?',
          options: [
            { id: 'z1', text: 'Se comporta como si tuviera veinte años.' },
            { id: 'z2', text: 'Se comporta como si tiene veinte años.' },
            { id: 'z3', text: 'Ojalá hubiera aceptado aquel trabajo.' },
            { id: 'z4', text: 'Si habría sabido, no habría venido.' },
          ],
          multiple: true,
          solution: ['z1', 'z3'],
          explanation:
            '«Como si» exige siempre subjuntivo, nunca indicativo. Y después de «si» no puede ir el condicional: la forma correcta es «si hubiera sabido».',
          explanationTranslations: {
            de: '„Como si“ verlangt immer den Subjuntivo, nie den Indikativ. Und nach „si“ steht kein Condicional: richtig ist „si hubiera sabido“.',
          },
        },
        {
          id: 'esg11-p4-writing',
          type: 'WRITING',
          instruction: 'Schreiben Sie über Entscheidungen.',
          prompt:
            'Escriba de ocho a doce frases: qué haría si pudiera cambiar algo de su vida, y qué habría hecho de otra manera si hubiera podido. Use los tres tipos de condicional al menos una vez cada uno.',
          minWords: 50,
          maxWords: 130,
          aiFeedback: true,
          sampleAnswer:
            'Si tuviera menos obligaciones, me iría a vivir un año al extranjero. No sería un viaje largo: si encuentro un trabajo en Valencia, me mudo el verano que viene. Mirando atrás, si hubiera aprendido español a los veinte, ahora hablaría mucho mejor. Tampoco habría perdido tanto tiempo con cursos que no servían para nada. Si pudiera aconsejar algo a alguien que empieza, le diría que hable desde el primer día. Ojalá alguien me lo hubiera dicho a mí.',
        },
      ],
    },
  },
];
