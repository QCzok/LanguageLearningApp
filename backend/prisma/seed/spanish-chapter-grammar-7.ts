import type { UnitSeed } from './chapter-beginner-1';

/**
 * Spanische Grammatik, Kapitel 7: „Perfecto und Pluscuamperfecto“
 *
 * Drei Seiten. Nach den beiden einfachen Vergangenheitszeiten von Kapitel 6
 * kommen hier die zusammengesetzten – dieselbe Bauweise wie im Deutschen,
 * aber mit einer Einschränkung, die das Deutsche nicht kennt: „haber“ und
 * das Partizip dürfen nicht getrennt werden, und das Partizip verändert sich
 * dabei nie.
 *
 * Aufbau: erst das Partizip und das Perfecto, dann die Abgrenzung zum
 * Indefinido, die weniger eine Grammatikfrage ist als eine geographische,
 * und zuletzt das Pluscuamperfecto, das nach dem Perfecto kaum noch Mühe
 * macht.
 *
 * Die Abgrenzung auf Seite 2 nennt die Verhältnisse, wie sie sind: In Spanien
 * gilt die Zeitraum-Regel, in weiten Teilen Amerikas nicht. Eine Regel, die
 * nur für ein Land gilt, als allgemeine auszugeben, hilft niemandem.
 */
const v = 1;

export const SPANISH_GRAMMAR_7_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Partizip und Perfecto.
  {
    order: 1,
    title: 'Partizip und Perfecto',
    subtitle: 'haber + participio',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'esg7-p1-h1', type: 'HEADING', level: 1, text: 'Partizip und Perfecto' },
        {
          id: 'esg7-p1-intro',
          type: 'TEXT',
          text: 'El pretérito perfecto se forma como el alemán: un verbo auxiliar más el participio. Pero el español usa siempre «haber», nunca «ser» ni «estar». No existe la distinción entre «ich habe gearbeitet» y «ich bin gegangen»: las dos frases llevan «he».',
          translations: {
            de: 'Das Perfecto wird gebaut wie das deutsche Perfekt: ein Hilfsverb plus Partizip. Nur nimmt das Spanische immer „haber“, nie „ser“ oder „estar“. Den Unterschied zwischen „ich habe gearbeitet“ und „ich bin gegangen“ gibt es nicht: Beide Sätze stehen mit „he“.',
          },
        },
        {
          id: 'esg7-p1-info-participio',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'El participio',
          text: 'Regular en casi todos los verbos: -ado para los de -ar, -ido para los de -er e -ir. Es la parte fácil; la lista de irregulares que viene después es corta y se aprende de una vez.',
          translations: {
            de: {
              title: 'Das Partizip',
              text: 'Bei fast allen Verben regelmäßig: -ado bei -ar, -ido bei -er und -ir. Das ist der leichte Teil; die Liste der unregelmäßigen danach ist kurz und auf einmal zu lernen.',
            },
          },
          table: {
            headers: ['Infinitivo', 'Participio'],
            rows: [
              ['hablar', 'hablado'],
              ['comer', 'comido'],
              ['vivir', 'vivido'],
              ['trabajar', 'trabajado'],
              ['perder', 'perdido'],
            ],
          },
        },
        {
          id: 'esg7-p1-info-irregulares',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Los participios irregulares',
          text: 'Son unos doce, y valen también para los verbos derivados: quien sabe «escrito» sabe «descrito» e «inscrito»; quien sabe «puesto» sabe «compuesto» y «supuesto». Así la lista rinde el triple de lo que parece.',
          translations: {
            de: {
              title: 'Die unregelmäßigen Partizipien',
              text: 'Es sind rund zwölf, und sie gelten auch für die abgeleiteten Verben: Wer „escrito“ kennt, kennt „descrito“ und „inscrito“; wer „puesto“ kennt, kennt „compuesto“ und „supuesto“. So trägt die Liste dreimal so weit, wie sie aussieht.',
            },
          },
          table: {
            headers: ['Infinitivo', 'Participio', 'Infinitivo', 'Participio'],
            rows: [
              ['hacer', 'hecho', 'ver', 'visto'],
              ['decir', 'dicho', 'poner', 'puesto'],
              ['escribir', 'escrito', 'volver', 'vuelto'],
              ['abrir', 'abierto', 'romper', 'roto'],
              ['morir', 'muerto', 'cubrir', 'cubierto'],
              ['resolver', 'resuelto', 'descubrir', 'descubierto'],
            ],
          },
        },
        {
          id: 'esg7-p1-info-haber',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Nada se mete entre «haber» y el participio',
          text: 'En alemán el participio se va al final de la frase y entre medias cabe de todo. En español los dos elementos van pegados: ni la negación, ni los pronombres, ni un adverbio pueden colarse entre ellos. Y el participio termina siempre en -o, sin concordar con nadie.',
          translations: {
            de: {
              title: 'Zwischen „haber“ und Partizip passt nichts',
              text: 'Im Deutschen rückt das Partizip ans Satzende, und dazwischen hat vieles Platz. Im Spanischen stehen beide Teile unmittelbar beieinander: Weder die Verneinung noch die Pronomen noch ein Adverb dürfen dazwischen. Und das Partizip endet immer auf -o, ohne sich nach irgendetwas zu richten.',
            },
          },
          table: {
            headers: ['Persona', 'haber', 'Ejemplo'],
            rows: [
              ['yo', 'he', 'No lo he visto.'],
              ['tú', 'has', '¿Ya has comido?'],
              ['él / ella / usted', 'ha', 'Ha escrito tres libros.'],
              ['nosotros', 'hemos', 'Hemos vuelto tarde.'],
              ['vosotros', 'habéis', '¿Habéis abierto la ventana?'],
              ['ellos / ellas / ustedes', 'han', 'Han dicho que sí.'],
            ],
          },
        },
        {
          id: 'esg7-p1-cloze',
          type: 'CLOZE',
          instruction: 'Complete con el pretérito perfecto.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Esta mañana ' },
            { kind: 'GAP', gapId: 'h1', solution: ['he hablado'], hint: 'hablar, yo', width: 12 },
            { kind: 'TEXT', text: ' con el médico.\n¿Ya ' },
            { kind: 'GAP', gapId: 'h2', solution: ['has hecho'], hint: 'hacer, tú', width: 11 },
            { kind: 'TEXT', text: ' los deberes?\nMi jefe ' },
            { kind: 'GAP', gapId: 'h3', solution: ['ha vuelto'], hint: 'volver, él', width: 11 },
            { kind: 'TEXT', text: ' de Lisboa.\nNosotros no ' },
            { kind: 'GAP', gapId: 'h4', solution: ['hemos visto'], hint: 'ver, nosotros', width: 13 },
            { kind: 'TEXT', text: ' esa película.\nLos niños ' },
            { kind: 'GAP', gapId: 'h5', solution: ['han roto'], hint: 'romper, ellos', width: 11 },
            { kind: 'TEXT', text: ' el cristal.' },
          ],
        },
        {
          id: 'esg7-p1-choice',
          type: 'CHOICE',
          instruction: 'Marque todas las frases correctas.',
          question: '¿Cuáles de estas frases están bien construidas?',
          options: [
            { id: 'o1', text: 'No he comido nada.' },
            { id: 'o2', text: 'He no comido nada.' },
            { id: 'o3', text: 'Las cartas he escrito ayer.' },
            { id: 'o4', text: 'Todavía no las he escrito.' },
          ],
          multiple: true,
          solution: ['o1', 'o4'],
          explanation:
            'La negación y los pronombres van delante de «haber», nunca entre «haber» y el participio. Y el participio no concuerda: es «escrito» aunque se hable de «las cartas».',
          explanationTranslations: {
            de: 'Verneinung und Pronomen stehen vor „haber“, niemals zwischen „haber“ und Partizip. Und das Partizip gleicht sich nicht an: Es heißt „escrito“, auch wenn von „las cartas“ die Rede ist.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – Perfecto oder Indefinido.
  {
    order: 2,
    title: 'Perfecto oder Indefinido',
    subtitle: 'Eine Frage des Zeitraums – und der Landkarte',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'esg7-p2-h1', type: 'HEADING', level: 1, text: 'Perfecto oder Indefinido' },
        {
          id: 'esg7-p2-intro',
          type: 'TEXT',
          text: 'Las dos formas traducen el mismo tiempo alemán, así que hay que decidir cuál se usa. En el español de España la regla es clara y se basa en el marco temporal. Fuera de España la cosa cambia, y conviene saberlo antes de viajar.',
          translations: {
            de: 'Beide Formen geben dieselbe deutsche Zeit wieder, man muss sich also entscheiden. Im Spanisch Spaniens ist die Regel klar und hängt am Zeitrahmen. Außerhalb Spaniens sieht es anders aus, und das sollte man vor der Reise wissen.',
          },
        },
        {
          id: 'esg7-p2-info-regla',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'La regla en España: ¿el periodo sigue abierto?',
          text: 'Si el momento del que se habla forma parte de un periodo que todavía no ha terminado – hoy, esta semana, este año, mi vida entera –, se usa el perfecto. Si el periodo está cerrado, indefinido. Por eso «esta mañana he ido» a las once, pero «esta mañana fui» si ya es de noche: el periodo se cerró.',
          translations: {
            de: {
              title: 'Die Regel in Spanien: Ist der Zeitraum noch offen?',
              text: 'Gehört der genannte Zeitpunkt zu einem Zeitraum, der noch nicht abgelaufen ist – heute, diese Woche, dieses Jahr, mein ganzes Leben –, steht das Perfecto. Ist der Zeitraum geschlossen, das Indefinido. Deshalb „esta mañana he ido“ um elf, aber „esta mañana fui“, wenn es schon Abend ist: Der Zeitraum ist zu.',
            },
          },
          table: {
            headers: ['Perfecto (periodo abierto)', 'Indefinido (periodo cerrado)'],
            rows: [
              ['hoy', 'ayer'],
              ['esta semana / este mes / este año', 'la semana pasada / en 2019'],
              ['hace un rato', 'hace tres años'],
              ['nunca / ya / todavía no / alguna vez', 'entonces / aquel día'],
            ],
          },
        },
        {
          id: 'esg7-p2-info-america',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'En América casi siempre indefinido',
          text: 'En gran parte de Hispanoamérica el perfecto apenas se usa: se dice «hoy comí muy bien» y «¿ya llegaste?» donde en Madrid se diría «he comido» y «has llegado». No es descuido ni registro informal, es la norma culta de esos países. Para quien aprende, lo sensato es dominar la regla peninsular y no sorprenderse al oír otra cosa.',
          translations: {
            de: {
              title: 'In Amerika fast immer das Indefinido',
              text: 'In weiten Teilen Hispanoamerikas kommt das Perfecto kaum vor: Man sagt „hoy comí muy bien“ und „¿ya llegaste?“, wo es in Madrid „he comido“ und „has llegado“ hieße. Das ist weder nachlässig noch umgangssprachlich, sondern die Hochsprache dieser Länder. Für Lernende ist es vernünftig, die spanische Regel zu beherrschen und sich über anderes nicht zu wundern.',
            },
          },
        },
        {
          id: 'esg7-p2-cloze',
          type: 'CLOZE',
          instruction: 'Complete según la norma del español de España.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Esta semana ' },
            { kind: 'GAP', gapId: 'w1', solution: ['he tenido'], hint: 'tener, yo', width: 11 },
            { kind: 'TEXT', text: ' mucho trabajo.\nEl año pasado ' },
            { kind: 'GAP', gapId: 'w2', solution: ['estuve'], hint: 'estar, yo', width: 9 },
            { kind: 'TEXT', text: ' en Perú.\n¿Alguna vez ' },
            { kind: 'GAP', gapId: 'w3', solution: ['has probado'], hint: 'probar, tú', width: 13 },
            { kind: 'TEXT', text: ' el ceviche?\nAnoche ' },
            { kind: 'GAP', gapId: 'w4', solution: ['cenamos'], hint: 'cenar, nosotros', width: 9 },
            { kind: 'TEXT', text: ' con los vecinos.\nTodavía no ' },
            { kind: 'GAP', gapId: 'w5', solution: ['he leído'], hint: 'leer, yo', width: 10 },
            { kind: 'TEXT', text: ' tu correo.' },
          ],
        },
        {
          id: 'esg7-p2-match',
          type: 'MATCHING',
          instruction: 'Relacione el marcador temporal con el tiempo que pide en España.',
          left: [
            { id: 'l1', text: 'hace dos horas' },
            { id: 'l2', text: 'hace dos años' },
            { id: 'l3', text: 'nunca' },
            { id: 'l4', text: 'aquel verano' },
          ],
          right: [
            { id: 'r1', text: 'perfecto' },
            { id: 'r2', text: 'indefinido' },
            { id: 'r3', text: 'perfecto' },
            { id: 'r4', text: 'indefinido' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'esg7-p2-choice',
          type: 'CHOICE',
          instruction: 'Elija la explicación correcta.',
          question: 'Son las once de la noche. ¿Por qué se dice «esta mañana fui al banco» y no «he ido»?',
          options: [
            { id: 'q1', text: 'Porque «ir» no admite el perfecto.' },
            { id: 'q2', text: 'Porque la mañana ya ha terminado, aunque el día siga.' },
            { id: 'q3', text: 'Porque el perfecto solo se usa en preguntas.' },
          ],
          multiple: false,
          solution: ['q2'],
          explanation:
            'Lo que cuenta es el periodo concreto que se menciona, no el día entero. Por la mañana se diría «he ido»; por la noche, esa mañana ya es un periodo cerrado.',
          explanationTranslations: {
            de: 'Es zählt der genannte Zeitraum, nicht der ganze Tag. Am Vormittag hieße es „he ido“; am Abend ist dieser Vormittag ein geschlossener Zeitraum.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – Pluscuamperfecto.
  {
    order: 3,
    title: 'Das Pluscuamperfecto',
    subtitle: 'Was noch davor lag',
    estimatedMinutes: 20,
    content: {
      version: v,
      blocks: [
        { id: 'esg7-p3-h1', type: 'HEADING', level: 1, text: 'Das Pluscuamperfecto' },
        {
          id: 'esg7-p3-intro',
          type: 'TEXT',
          text: 'Cuando se cuenta algo en pasado y hace falta retroceder un paso más, se usa el pluscuamperfecto: el imperfecto de «haber» más el mismo participio de antes. Es el equivalente exacto del «Plusquamperfekt» alemán, y se usa igual de a menudo.',
          translations: {
            de: 'Wenn man in der Vergangenheit erzählt und noch einen Schritt weiter zurückmuss, steht das Pluscuamperfecto: das Imperfecto von „haber“ plus dasselbe Partizip wie zuvor. Es entspricht genau dem deutschen Plusquamperfekt und wird ebenso häufig gebraucht.',
          },
        },
        {
          id: 'esg7-p3-info-formas',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'La formación',
          text: 'Solo cambia el auxiliar: donde el perfecto dice «he», el pluscuamperfecto dice «había». El participio no se toca, así que quien domine la página 1 ya tiene la mitad del trabajo hecho.',
          translations: {
            de: {
              title: 'Die Bildung',
              text: 'Nur das Hilfsverb wechselt: Wo das Perfecto „he“ sagt, sagt das Pluscuamperfecto „había“. Am Partizip ändert sich nichts – wer Seite 1 beherrscht, hat die halbe Arbeit schon getan.',
            },
          },
          table: {
            headers: ['Persona', 'Pluscuamperfecto'],
            rows: [
              ['yo', 'había hablado'],
              ['tú', 'habías comido'],
              ['él / ella / usted', 'había salido'],
              ['nosotros', 'habíamos visto'],
              ['vosotros', 'habíais dicho'],
              ['ellos / ellas / ustedes', 'habían vuelto'],
            ],
          },
        },
        {
          id: 'esg7-p3-info-uso',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Dos hechos, dos niveles',
          text: 'La frase suele tener dos verbos: uno en indefinido o imperfecto, que marca el momento del relato, y otro en pluscuamperfecto, que cuenta lo que ya había ocurrido antes. Palabras como «ya», «todavía no» y «cuando» acompañan casi siempre al segundo.',
          translations: {
            de: {
              title: 'Zwei Vorgänge, zwei Ebenen',
              text: 'Der Satz hat meist zwei Verben: eines im Indefinido oder Imperfecto, das den Erzählzeitpunkt markiert, und eines im Pluscuamperfecto, das nennt, was davor schon geschehen war. Wörter wie „ya“, „todavía no“ und „cuando“ begleiten fast immer das zweite.',
            },
          },
          table: {
            headers: ['Momento del relato', 'Lo anterior'],
            rows: [
              ['Cuando llegué,', 'la fiesta ya había terminado.'],
              ['No pude entrar', 'porque había perdido la llave.'],
              ['Me dijo', 'que nunca había estado en España.'],
              ['Todavía no habíamos cenado', 'cuando llamaron a la puerta.'],
            ],
          },
        },
        {
          id: 'esg7-p3-cloze',
          type: 'CLOZE',
          instruction: 'Complete con el pluscuamperfecto.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Cuando llegamos al cine, la película ya ' },
            { kind: 'GAP', gapId: 'k1', solution: ['había empezado'], hint: 'empezar, ella', width: 16 },
            { kind: 'TEXT', text: '.\nNo reconocí la ciudad porque ' },
            { kind: 'GAP', gapId: 'k2', solution: ['había cambiado'], hint: 'cambiar, ella', width: 16 },
            { kind: 'TEXT', text: ' mucho.\nMe contó que nunca ' },
            { kind: 'GAP', gapId: 'k3', solution: ['había visto'], hint: 'ver, él', width: 13 },
            { kind: 'TEXT', text: ' el mar.\nNosotros ya ' },
            { kind: 'GAP', gapId: 'k4', solution: ['habíamos comido'], hint: 'comer, nosotros', width: 17 },
            { kind: 'TEXT', text: ' cuando llegaron.\nLos ladrones ' },
            { kind: 'GAP', gapId: 'k5', solution: ['habían roto'], hint: 'romper, ellos', width: 13 },
            { kind: 'TEXT', text: ' la ventana para entrar.' },
          ],
        },
        {
          id: 'esg7-p3-order',
          type: 'ORDERING',
          instruction: 'Forme una frase correcta.',
          items: [
            { id: 'w1', text: 'Cuando volví' },
            { id: 'w2', text: 'a casa,' },
            { id: 'w3', text: 'mi hermano' },
            { id: 'w4', text: 'ya se había ido' },
            { id: 'w5', text: 'al aeropuerto.' },
          ],
          solution: ['w1', 'w2', 'w3', 'w4', 'w5'],
        },
        {
          id: 'esg7-p3-choice',
          type: 'CHOICE',
          instruction: 'Elija la frase correcta.',
          question: '«Als ich ankam, war der Zug schon abgefahren.»',
          options: [
            { id: 'z1', text: 'Cuando llegué, el tren ya había salido.' },
            { id: 'z2', text: 'Cuando llegaba, el tren ya ha salido.' },
            { id: 'z3', text: 'Cuando he llegado, el tren ya salía.' },
          ],
          multiple: false,
          solution: ['z1'],
          explanation:
            'La llegada es un hecho puntual: indefinido. La salida del tren ocurrió antes de ese momento, así que va en pluscuamperfecto. Mezclar el perfecto aquí desordena los dos niveles.',
          explanationTranslations: {
            de: 'Das Ankommen ist ein punktueller Vorgang: Indefinido. Die Abfahrt des Zuges lag davor, also Pluscuamperfecto. Das Perfecto dazwischenzumischen bringt die beiden Ebenen durcheinander.',
          },
        },
        {
          id: 'esg7-p3-writing',
          type: 'WRITING',
          instruction: 'Erzählen Sie von einem verpassten Termin.',
          prompt:
            'Escriba de seis a ocho frases sobre una vez que llegó tarde a algo. Cuente qué encontró al llegar y qué había pasado ya. Use al menos tres veces el pluscuamperfecto.',
          minWords: 40,
          maxWords: 110,
          aiFeedback: true,
          sampleAnswer:
            'El mes pasado llegué tarde a una entrevista de trabajo. Salí con tiempo, pero el metro se paró veinte minutos entre dos estaciones. Cuando por fin llegué a la oficina, la recepcionista me dijo que el director ya se había ido a una reunión. Los otros candidatos habían entrado todos a su hora. Nadie había avisado de que la entrevista empezaba antes. Me disculpé y volví a casa bastante enfadado conmigo mismo.',
        },
      ],
    },
  },
];
