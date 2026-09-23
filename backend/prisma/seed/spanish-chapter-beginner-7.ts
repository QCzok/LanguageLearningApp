import type { UnitSeed } from './chapter-beginner-1';

/**
 * Spanisch, Beginner, Kapitel 7: „El fin de semana pasado“ (A2, Kapitel 1)
 *
 * Fünf Seiten, Aufbau wie in den Kapiteln davor. Erstes Kapitel der Stufe A2.
 *
 * Hier beginnt die Vergangenheit, und sie beginnt mit dem Indefinido, weil
 * das die Zeit ist, mit der man erzählt, was am Wochenende passiert ist – der
 * erste Anlass, aus dem Lernende überhaupt eine Vergangenheit brauchen.
 *
 * Die Reihenfolge ist absichtlich: Seite 1 die regelmäßigen Formen, Seite 2
 * die unregelmäßigen. Sie sind nicht als Ausnahmenliste gesetzt, sondern als
 * eigene Gruppe mit eigener Logik – ein veränderter Stamm und ein Endungssatz
 * ohne Akzente, der für alle gilt. Wer das als System sieht, lernt neun Verben
 * statt neun Unregelmäßigkeiten.
 *
 * Das Imperfecto kommt hier noch nicht vor, auch nicht nebenbei. Die
 * Gegenüberstellung der beiden Zeiten ist das Thema des nächsten Kapitels und
 * verlangt, dass das Indefinido vorher sitzt.
 *
 * Die Seiten bleiben einsprachig spanisch mit aufklappbarer Übersetzung – das
 * gilt für den ganzen Beginner-Band; erst ab dem Intermediate-Band fällt die
 * Übersetzung weg (siehe `spanish-chapter-intermediate-1.ts`).
 */
const v = 1;

export const SPANISH_BEGINNER_7_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – die regelmäßigen Formen; -er und -ir fallen zusammen.
  {
    order: 1,
    title: '¿Qué hiciste el sábado?',
    subtitle: 'Das Indefinido der regelmäßigen Verben',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'es7-p1-h1', type: 'HEADING', level: 1, text: '¿Qué hiciste el sábado?' },
        {
          id: 'es7-p1-image',
          type: 'IMAGE',
          url: 'illustration:calendar-weekend',
          alt: 'Ein Kalenderblatt, auf dem Samstag und Sonntag rot markiert sind.',
          caption: 'El fin de semana ya pasó.',
        },
        {
          id: 'es7-p1-intro',
          type: 'TEXT',
          text: 'Hasta ahora usted contaba lo que hace todos los días. Ahora toca lo que pasó una vez y se terminó: el sábado por la mañana, anoche, el verano pasado. Para eso el español usa el indefinido, y es la primera forma del pasado que hay que aprender.',
          translations: {
            de: 'Bisher haben Sie erzählt, was Sie jeden Tag tun. Jetzt kommt das, was einmal geschah und vorbei ist: am Samstagmorgen, gestern Abend, im letzten Sommer. Dafür verwendet das Spanische das Indefinido, und es ist die erste Vergangenheitsform, die man lernen muss.',
          },
        },
        {
          id: 'es7-p1-info-formas',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Las terminaciones del indefinido',
          text: 'Como en el presente, la terminación se pega a la raíz. La ventaja aquí es que los verbos en -er y los verbos en -ir tienen exactamente las mismas terminaciones, así que en realidad son dos juegos y no tres. Fíjese en los acentos: la primera y la tercera persona del singular los llevan siempre, y sin ellos la palabra es otra (hablo / habló).',
          translations: {
            de: {
              title: 'Die Endungen des Indefinido',
              text: 'Wie im Präsens hängt die Endung am Stamm. Der Vorteil hier: Verben auf -er und Verben auf -ir haben genau dieselben Endungen, es sind also zwei Sätze und nicht drei. Achten Sie auf die Akzente: Die erste und die dritte Person Singular tragen sie immer, und ohne sie ist es ein anderes Wort (hablo / habló).',
            },
          },
          table: {
            headers: ['', 'hablar', 'comer', 'vivir'],
            rows: [
              ['yo', 'hablé', 'comí', 'viví'],
              ['tú', 'hablaste', 'comiste', 'viviste'],
              ['él / ella / usted', 'habló', 'comió', 'vivió'],
              ['nosotros / nosotras', 'hablamos', 'comimos', 'vivimos'],
              ['vosotros / vosotras', 'hablasteis', 'comisteis', 'vivisteis'],
              ['ellos / ellas / ustedes', 'hablaron', 'comieron', 'vivieron'],
            ],
          },
        },
        {
          id: 'es7-p1-dlg',
          type: 'DIALOGUE',
          title: 'El lunes en la oficina',
          lines: [
            { speaker: 'Álvaro', text: '¿Qué tal el fin de semana? ¿Qué hiciste?' },
            { speaker: 'Lucía', text: 'El sábado limpié la casa por la mañana y por la tarde salí con Nerea.' },
            { speaker: 'Álvaro', text: '¿Y adónde fuisteis?' },
            { speaker: 'Lucía', text: 'Cenamos en un sitio nuevo del centro. Comimos muy bien.' },
            { speaker: 'Álvaro', text: '¿Y el domingo?' },
            { speaker: 'Lucía', text: 'El domingo no hice nada. Dormí hasta las once y leí un rato.' },
          ],
        },
        {
          id: 'es7-p1-cloze',
          type: 'CLOZE',
          instruction: 'Complete con el indefinido del verbo entre paréntesis.',
          wordBank: ['trabajé', 'cenaste', 'salió', 'volvimos', 'escribieron'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'El viernes yo ' },
            { kind: 'GAP', gapId: 'a1', solution: ['trabajé'], width: 10, hint: 'trabajar' },
            { kind: 'TEXT', text: ' hasta las ocho.\n¿Dónde ' },
            { kind: 'GAP', gapId: 'a2', solution: ['cenaste'], width: 10, hint: 'cenar, tú' },
            { kind: 'TEXT', text: ' anoche?\nMarta ' },
            { kind: 'GAP', gapId: 'a3', solution: ['salió'], width: 8, hint: 'salir' },
            { kind: 'TEXT', text: ' con sus amigas el sábado.\nNosotros ' },
            { kind: 'GAP', gapId: 'a4', solution: ['volvimos'], width: 10, hint: 'volver' },
            { kind: 'TEXT', text: ' a casa muy tarde.\nMis padres me ' },
            { kind: 'GAP', gapId: 'a5', solution: ['escribieron'], width: 13, hint: 'escribir' },
            { kind: 'TEXT', text: ' el domingo por la noche.' },
          ],
        },
        {
          id: 'es7-p1-info-trampa',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Dos formas que ya conoce',
          text: 'En los verbos en -ar y en -ir, la forma de nosotros es idéntica en presente y en indefinido: «hablamos» y «vivimos» valen para hoy y para ayer. No es un fallo del sistema y no hay que distinguirlas: lo hace la frase. «Hoy hablamos con el jefe» es presente, «ayer hablamos con el jefe» es pasado. Solo los verbos en -er cambian (comemos / comimos).',
          translations: {
            de: {
              title: 'Zwei Formen, die Sie schon kennen',
              text: 'Bei den Verben auf -ar und -ir ist die nosotros-Form in Präsens und Indefinido gleich: „hablamos“ und „vivimos“ gelten für heute wie für gestern. Das ist kein Fehler im System, und man muss sie nicht unterscheiden: Das tut der Satz. „Hoy hablamos con el jefe“ ist Präsens, „ayer hablamos con el jefe“ ist Vergangenheit. Nur die Verben auf -er ändern sich (comemos / comimos).',
            },
          },
          table: {
            headers: ['Presente', 'Indefinido'],
            rows: [
              ['hoy hablamos', 'ayer hablamos'],
              ['hoy vivimos aquí', 'en 2019 vivimos allí'],
              ['hoy comemos fuera', 'ayer comimos fuera'],
            ],
          },
        },
        {
          id: 'es7-p1-choice',
          type: 'CHOICE',
          instruction: 'Elija la forma correcta.',
          question: '«Ayer mi hermana ___ dos horas en el parque.»',
          options: [
            { id: 'o1', text: 'corrí' },
            { id: 'o2', text: 'corrió' },
            { id: 'o3', text: 'corrieron' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation:
            '«Mi hermana» es una sola persona y no soy yo: es la tercera persona del singular, y en -er esa forma es «-ió».',
          explanationTranslations: {
            de: '„Mi hermana“ ist eine einzelne Person und nicht ich: Es ist die dritte Person Singular, und bei -er lautet diese Form „-ió“.',
          },
        },
        {
          id: 'es7-p1-match',
          type: 'MATCHING',
          instruction: 'Relacione el sujeto con la forma.',
          left: [
            { id: 'l1', text: 'yo (comprar)' },
            { id: 'l2', text: 'tú (beber)' },
            { id: 'l3', text: 'vosotros (escribir)' },
            { id: 'l4', text: 'ellos (bailar)' },
          ],
          right: [
            { id: 'r1', text: 'compré' },
            { id: 'r2', text: 'bebiste' },
            { id: 'r3', text: 'escribisteis' },
            { id: 'r4', text: 'bailaron' },
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
  // Seite 2 – die unregelmäßigen Formen als eigene Gruppe, nicht als Liste.
  {
    order: 2,
    title: 'Los verbos fuertes',
    subtitle: 'Unregelmäßige Formen im Indefinido',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'es7-p2-h1', type: 'HEADING', level: 1, text: 'Los verbos fuertes' },
        {
          id: 'es7-p2-intro',
          type: 'TEXT',
          text: 'Los verbos más usados del español son irregulares en el indefinido, y no hay forma de evitarlos: sin «fui», «tuve» y «hice» no se cuenta ningún fin de semana. La buena noticia es que no son casos sueltos, sino un grupo con una regla propia.',
          translations: {
            de: 'Die gebräuchlichsten Verben des Spanischen sind im Indefinido unregelmäßig, und man kommt nicht um sie herum: Ohne „fui“, „tuve“ und „hice“ erzählt man kein Wochenende. Die gute Nachricht ist, dass es keine Einzelfälle sind, sondern eine Gruppe mit einer eigenen Regel.',
          },
        },
        {
          id: 'es7-p2-info-fuertes',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Raíz nueva, terminaciones iguales',
          text: 'Estos verbos cambian la raíz, y a esa raíz nueva le añaden todos el mismo juego de terminaciones: -e, -iste, -o, -imos, -isteis, -ieron. Y aquí está el detalle que más se olvida: estas terminaciones no llevan acento. Se dice «tuve» y «tuvo», no «tuvé» ni «tuvó».',
          translations: {
            de: {
              title: 'Neuer Stamm, gleiche Endungen',
              text: 'Diese Verben ändern den Stamm, und an diesen neuen Stamm hängen sie alle denselben Endungssatz: -e, -iste, -o, -imos, -isteis, -ieron. Und hier die Kleinigkeit, die am häufigsten vergessen wird: Diese Endungen tragen keinen Akzent. Es heißt „tuve“ und „tuvo“, nicht „tuvé“ oder „tuvó“.',
            },
          },
          table: {
            headers: ['Infinitivo', 'Raíz', 'yo', 'él / ella'],
            rows: [
              ['tener', 'tuv-', 'tuve', 'tuvo'],
              ['estar', 'estuv-', 'estuve', 'estuvo'],
              ['poder', 'pud-', 'pude', 'pudo'],
              ['poner', 'pus-', 'puse', 'puso'],
              ['querer', 'quis-', 'quise', 'quiso'],
              ['venir', 'vin-', 'vine', 'vino'],
              ['hacer', 'hic-', 'hice', 'hizo'],
              ['decir', 'dij-', 'dije', 'dijo'],
            ],
          },
        },
        {
          id: 'es7-p2-info-serir',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'ser e ir tienen las mismas formas',
          text: 'Dos verbos comparten todo el indefinido: «fui» significa tanto «ich war» como «ich ging». Nunca hay confusión, porque el resto de la frase lo aclara: detrás de «ir» va casi siempre un «a». «Fui a Sevilla» es un viaje, «fui camarero» es una profesión. «Dar» va con las terminaciones de -er, aunque sea un verbo en -ar: di, diste, dio.',
          translations: {
            de: {
              title: 'ser und ir haben dieselben Formen',
              text: 'Zwei Verben teilen sich das ganze Indefinido: „fui“ heißt sowohl „ich war“ als auch „ich ging“. Verwechslungen gibt es nie, weil der Rest des Satzes es klärt: Nach „ir“ steht fast immer ein „a“. „Fui a Sevilla“ ist eine Reise, „fui camarero“ ein Beruf. „Dar“ nimmt die Endungen von -er, obwohl es ein Verb auf -ar ist: di, diste, dio.',
            },
          },
          table: {
            headers: ['', 'ser / ir', 'dar', 'hacer'],
            rows: [
              ['yo', 'fui', 'di', 'hice'],
              ['tú', 'fuiste', 'diste', 'hiciste'],
              ['él / ella / usted', 'fue', 'dio', 'hizo'],
              ['nosotros', 'fuimos', 'dimos', 'hicimos'],
              ['vosotros', 'fuisteis', 'disteis', 'hicisteis'],
              ['ellos / ustedes', 'fueron', 'dieron', 'hicieron'],
            ],
          },
        },
        {
          id: 'es7-p2-cloze',
          type: 'CLOZE',
          instruction: 'Complete con el indefinido.',
          wordBank: ['fui', 'tuve', 'hizo', 'estuvimos', 'vinieron'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'El sábado ' },
            { kind: 'GAP', gapId: 'b1', solution: ['fui'], width: 6, hint: 'ir, yo' },
            { kind: 'TEXT', text: ' a casa de mis padres.\nNo ' },
            { kind: 'GAP', gapId: 'b2', solution: ['tuve'], width: 7, hint: 'tener, yo' },
            { kind: 'TEXT', text: ' tiempo de llamarte, lo siento.\nMi hermano ' },
            { kind: 'GAP', gapId: 'b3', solution: ['hizo'], width: 7, hint: 'hacer' },
            { kind: 'TEXT', text: ' una tarta buenísima.\nPor la tarde ' },
            { kind: 'GAP', gapId: 'b4', solution: ['estuvimos'], width: 11, hint: 'estar, nosotros' },
            { kind: 'TEXT', text: ' en el parque.\nMis primos ' },
            { kind: 'GAP', gapId: 'b5', solution: ['vinieron'], width: 10, hint: 'venir' },
            { kind: 'TEXT', text: ' a cenar.' },
          ],
        },
        {
          id: 'es7-p2-info-tercera',
          type: 'INFO',
          variant: 'TIP',
          title: 'Cambios solo en la tercera persona',
          text: 'Hay un grupo pequeño que cambia únicamente en «él» y en «ellos», y por eso pasa desapercibido hasta que se cuenta algo de otra persona. Los verbos en -ir con e o o en la raíz la cambian (pedir → pidió, dormir → durmió), y los verbos cuya raíz acaba en vocal escriben «y» en vez de «i» (leer → leyó, oír → oyó).',
          translations: {
            de: {
              title: 'Änderungen nur in der dritten Person',
              text: 'Es gibt eine kleine Gruppe, die sich nur bei „él“ und „ellos“ ändert und deshalb unbemerkt bleibt, bis man von jemand anderem erzählt. Verben auf -ir mit e oder o im Stamm wandeln diesen (pedir → pidió, dormir → durmió), und Verben, deren Stamm auf einen Vokal endet, schreiben „y“ statt „i“ (leer → leyó, oír → oyó).',
            },
          },
          table: {
            headers: ['Infinitivo', 'yo', 'él / ella', 'ellos'],
            rows: [
              ['pedir', 'pedí', 'pidió', 'pidieron'],
              ['dormir', 'dormí', 'durmió', 'durmieron'],
              ['preferir', 'preferí', 'prefirió', 'prefirieron'],
              ['leer', 'leí', 'leyó', 'leyeron'],
              ['oír', 'oí', 'oyó', 'oyeron'],
            ],
          },
        },
        {
          id: 'es7-p2-choice',
          type: 'CHOICE',
          instruction: 'Marque todas las frases correctas.',
          question: '¿Cuáles de estas frases son correctas?',
          options: [
            { id: 'x1', text: 'Ayer tuve mucho trabajo.' },
            { id: 'x2', text: 'Ayer tuvé mucho trabajo.' },
            { id: 'x3', text: 'El camarero no me oyó.' },
            { id: 'x4', text: 'El camarero no me oió.' },
          ],
          multiple: true,
          solution: ['x1', 'x3'],
          explanation:
            'Las terminaciones de los verbos fuertes no llevan acento: «tuve». Y cuando la raíz acaba en vocal, la tercera persona se escribe con «y»: «oyó».',
          explanationTranslations: {
            de: 'Die Endungen der starken Verben tragen keinen Akzent: „tuve“. Und wenn der Stamm auf einen Vokal endet, schreibt sich die dritte Person mit „y“: „oyó“.',
          },
        },
        {
          id: 'es7-p2-match',
          type: 'MATCHING',
          instruction: 'Relacione el infinitivo con la forma de «él».',
          left: [
            { id: 'm1', text: 'hacer' },
            { id: 'm2', text: 'ir' },
            { id: 'm3', text: 'decir' },
            { id: 'm4', text: 'poder' },
          ],
          right: [
            { id: 'n1', text: 'hizo' },
            { id: 'n2', text: 'fue' },
            { id: 'n3', text: 'dijo' },
            { id: 'n4', text: 'pudo' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'n1' },
            { leftId: 'm2', rightId: 'n2' },
            { leftId: 'm3', rightId: 'n3' },
            { leftId: 'm4', rightId: 'n4' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – ein zusammenhängender Text; Lesen vor Produzieren.
  {
    order: 3,
    title: 'Un fin de semana en Granada',
    subtitle: 'Einen Bericht lesen und verstehen',
    estimatedMinutes: 23,
    content: {
      version: v,
      blocks: [
        { id: 'es7-p3-h1', type: 'HEADING', level: 1, text: 'Un fin de semana en Granada' },
        {
          id: 'es7-p3-intro',
          type: 'TEXT',
          text: 'Lea el correo que Nerea escribió a su hermana. Antes de fijarse en las formas, léalo entero una vez: casi todos los verbos están en indefinido, y ya conoce las terminaciones.',
          translations: {
            de: 'Lesen Sie die Mail, die Nerea ihrer Schwester geschrieben hat. Bevor Sie auf die Formen achten, lesen Sie sie einmal ganz: Fast alle Verben stehen im Indefinido, und die Endungen kennen Sie bereits.',
          },
        },
        {
          id: 'es7-p3-texto',
          type: 'TEXT',
          text: '¡Hola, Marta!\n\nEl fin de semana pasado estuvimos en Granada. Llegamos el viernes por la noche y dejamos las maletas en un hostal pequeño del centro. El sábado nos levantamos temprano y subimos a la Alhambra. Compramos las entradas por internet dos semanas antes, y menos mal, porque en la taquilla no quedaban. Pasamos allí casi cuatro horas.\n\nPor la tarde bajamos al Albaicín y tomamos algo en una terraza. Pedí un plato de verduras que no conocía y me encantó. Luego Álvaro quiso ver la puesta de sol desde el mirador, así que subimos otra vez. Volvimos al hostal a las once, agotados.\n\nEl domingo no hicimos casi nada: desayunamos tranquilos, dimos una vuelta por el mercado y cogimos el tren de las cinco. Fue un fin de semana corto, pero valió la pena.\n\nUn beso,\nNerea',
          translations: {
            de: 'Hallo Marta!\n\nLetztes Wochenende waren wir in Granada. Wir kamen Freitagabend an und ließen die Koffer in einem kleinen Hostal im Zentrum. Am Samstag standen wir früh auf und stiegen zur Alhambra hinauf. Die Tickets hatten wir zwei Wochen vorher im Internet gekauft, zum Glück, denn an der Kasse gab es keine mehr. Wir verbrachten dort fast vier Stunden.\n\nAm Nachmittag gingen wir hinunter ins Albaicín und tranken etwas auf einer Terrasse. Ich bestellte ein Gemüsegericht, das ich nicht kannte, und es hat mir sehr geschmeckt. Dann wollte Álvaro den Sonnenuntergang vom Aussichtspunkt sehen, also stiegen wir noch einmal hinauf. Um elf kamen wir erschöpft zum Hostal zurück.\n\nAm Sonntag taten wir fast nichts: Wir frühstückten in Ruhe, drehten eine Runde über den Markt und nahmen den Zug um fünf. Es war ein kurzes Wochenende, aber es hat sich gelohnt.\n\nEinen Kuss,\nNerea',
          },
        },
        {
          id: 'es7-p3-choice1',
          type: 'CHOICE',
          instruction: 'Lea otra vez y elija.',
          question: '¿Por qué fue buena idea comprar las entradas por internet?',
          options: [
            { id: 'q1', text: 'Porque en la taquilla eran más caras.' },
            { id: 'q2', text: 'Porque en la taquilla ya no había entradas.' },
            { id: 'q3', text: 'Porque la Alhambra estaba cerrada.' },
          ],
          multiple: false,
          solution: ['q2'],
          explanation: 'Nerea escribe: «en la taquilla no quedaban», es decir, ya no había.',
          explanationTranslations: {
            de: 'Nerea schreibt: „en la taquilla no quedaban“, es gab also keine mehr.',
          },
        },
        {
          id: 'es7-p3-choice2',
          type: 'CHOICE',
          instruction: 'Marque todo lo que hicieron el domingo.',
          question: '¿Qué hicieron el domingo?',
          options: [
            { id: 'y1', text: 'Desayunaron sin prisa.' },
            { id: 'y2', text: 'Subieron a la Alhambra.' },
            { id: 'y3', text: 'Pasearon por el mercado.' },
            { id: 'y4', text: 'Volvieron en tren.' },
          ],
          multiple: true,
          solution: ['y1', 'y3', 'y4'],
          explanation:
            'La Alhambra fue el sábado. El domingo desayunaron, dieron una vuelta por el mercado y cogieron el tren.',
          explanationTranslations: {
            de: 'Die Alhambra war am Samstag. Am Sonntag frühstückten sie, drehten eine Runde über den Markt und nahmen den Zug.',
          },
        },
        {
          id: 'es7-p3-ordering',
          type: 'ORDERING',
          instruction: 'Ordene el fin de semana de Nerea.',
          items: [
            { id: 'w1', text: 'Llegaron a Granada el viernes por la noche.' },
            { id: 'w2', text: 'El sábado subieron a la Alhambra.' },
            { id: 'w3', text: 'Por la tarde tomaron algo en el Albaicín.' },
            { id: 'w4', text: 'Vieron la puesta de sol desde el mirador.' },
            { id: 'w5', text: 'El domingo pasearon por el mercado.' },
            { id: 'w6', text: 'Cogieron el tren de las cinco.' },
          ],
          solution: ['w1', 'w2', 'w3', 'w4', 'w5', 'w6'],
        },
        {
          id: 'es7-p3-cloze',
          type: 'CLOZE',
          instruction: 'Cuente el viaje de Álvaro con las formas de «él».',
          wordBank: ['llegó', 'subió', 'pidió', 'quiso', 'volvió'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Álvaro ' },
            { kind: 'GAP', gapId: 'c1', solution: ['llegó'], width: 8 },
            { kind: 'TEXT', text: ' el viernes por la noche y el sábado ' },
            { kind: 'GAP', gapId: 'c2', solution: ['subió'], width: 8 },
            { kind: 'TEXT', text: ' a la Alhambra. Por la tarde ' },
            { kind: 'GAP', gapId: 'c3', solution: ['pidió'], width: 8 },
            { kind: 'TEXT', text: ' una cerveza en una terraza y luego ' },
            { kind: 'GAP', gapId: 'c4', solution: ['quiso'], width: 8 },
            { kind: 'TEXT', text: ' ver la puesta de sol. ' },
            { kind: 'GAP', gapId: 'c5', solution: ['Volvió'], width: 8 },
            { kind: 'TEXT', text: ' al hostal a las once.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – Zeitangaben und Verknüpfungen; aus Sätzen wird eine Erzählung.
  {
    order: 4,
    title: 'Ayer, anoche, hace dos días',
    subtitle: 'Zeitangaben der Vergangenheit',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'es7-p4-h1', type: 'HEADING', level: 1, text: 'Ayer, anoche, hace dos días' },
        {
          id: 'es7-p4-intro',
          type: 'TEXT',
          text: 'Una forma verbal sola no cuenta nada: hace falta decir cuándo. Estas expresiones son además la señal más fiable de que toca indefinido – donde aparece «ayer», no cabe otra cosa.',
          translations: {
            de: 'Eine Verbform allein erzählt nichts: Man muss sagen, wann. Diese Ausdrücke sind zugleich das zuverlässigste Zeichen dafür, dass das Indefinido an der Reihe ist – wo „ayer“ steht, passt nichts anderes.',
          },
        },
        {
          id: 'es7-p4-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: cuándo pasó',
          items: [
            { term: 'ayer', translations: { en: 'yesterday', de: 'gestern' } },
            { term: 'anteayer', translations: { en: 'the day before yesterday', de: 'vorgestern' } },
            { term: 'anoche', translations: { en: 'last night', de: 'gestern Abend, heute Nacht' } },
            { term: 'el lunes pasado', translations: { en: 'last Monday', de: 'letzten Montag' } },
            { term: 'la semana pasada', translations: { en: 'last week', de: 'letzte Woche' } },
            { term: 'el mes pasado', translations: { en: 'last month', de: 'letzten Monat' } },
            { term: 'el año pasado', translations: { en: 'last year', de: 'letztes Jahr' } },
            { term: 'hace dos días', translations: { en: 'two days ago', de: 'vor zwei Tagen' } },
            { term: 'en 2019', translations: { en: 'in 2019', de: '2019' } },
            { term: 'entonces', translations: { en: 'then, at that moment', de: 'damals, da' } },
            { term: 'al final', translations: { en: 'in the end', de: 'am Ende' } },
            { term: 'de repente', translations: { en: 'suddenly', de: 'plötzlich' } },
          ],
        },
        {
          id: 'es7-p4-info-hace',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: '«hace» para contar hacia atrás',
          text: 'Para decir cuánto tiempo hace que algo pasó, el español pone «hace» delante del tiempo, no detrás: «hace tres días», «hace un año». La palabra no cambia nunca, aunque el plazo sea largo. Y ojo con el orden: en alemán la indicación va detrás («vor drei Tagen»), en español siempre delante.',
          translations: {
            de: {
              title: '„hace“, um zurückzurechnen',
              text: 'Um zu sagen, wie lange etwas her ist, stellt das Spanische „hace“ vor die Zeitangabe, nicht dahinter: „hace tres días“, „hace un año“. Das Wort ändert sich nie, auch bei langen Zeiträumen. Und Achtung bei der Stellung: Im Deutschen steht die Angabe hinten („vor drei Tagen“), im Spanischen immer vorn.',
            },
          },
          table: {
            headers: ['Español', 'Alemán'],
            rows: [
              ['hace dos horas', 'vor zwei Stunden'],
              ['hace una semana', 'vor einer Woche'],
              ['hace muchos años', 'vor vielen Jahren'],
              ['¿Cuánto hace que llegaste?', 'Wann bist du angekommen?'],
            ],
          },
        },
        {
          id: 'es7-p4-audio',
          type: 'AUDIO',
          title: 'Escuche: el lunes por la mañana',
          audioUrl: 'placeholder://es-k7-lunes',
          durationSec: 34,
          transcript:
            '¿Qué tal el finde? – Muy bien. El viernes fui al cine con Pablo y llegamos tarde, así que no vimos el principio. El sábado me levanté a las once y estuve todo el día en casa. Y el domingo comí con mis abuelos, como siempre. ¿Y tú? – Yo trabajé el sábado. El domingo no hice nada.',
        },
        {
          id: 'es7-p4-choice',
          type: 'CHOICE',
          instruction: 'Escuche o lea el texto otra vez y elija.',
          question: '¿Por qué no vieron el principio de la película?',
          options: [
            { id: 'p1', text: 'Porque la película empezó antes de tiempo.' },
            { id: 'p2', text: 'Porque llegaron tarde al cine.' },
            { id: 'p3', text: 'Porque no encontraron entradas.' },
          ],
          multiple: false,
          solution: ['p2'],
          explanation: 'Dice: «llegamos tarde, así que no vimos el principio».',
          explanationTranslations: {
            de: 'Es heißt: „llegamos tarde, así que no vimos el principio“.',
          },
        },
        {
          id: 'es7-p4-cloze',
          type: 'CLOZE',
          instruction: 'Complete con la expresión de tiempo del cuadro.',
          wordBank: ['Anoche', 'hace', 'pasada', 'Al final', 'de repente'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '' },
            { kind: 'GAP', gapId: 'd1', solution: ['Anoche'], width: 8 },
            { kind: 'TEXT', text: ' cenamos en casa de Rosa.\nLa semana ' },
            { kind: 'GAP', gapId: 'd2', solution: ['pasada'], width: 8 },
            { kind: 'TEXT', text: ' estuve en Bilbao.\nLlegué a España ' },
            { kind: 'GAP', gapId: 'd3', solution: ['hace'], width: 6 },
            { kind: 'TEXT', text: ' cuatro años.\nEmpezó a llover ' },
            { kind: 'GAP', gapId: 'd4', solution: ['de repente'], width: 11 },
            { kind: 'TEXT', text: ' y nos mojamos.\n' },
            { kind: 'GAP', gapId: 'd5', solution: ['Al final'], width: 9 },
            { kind: 'TEXT', text: ' cogimos un taxi.' },
          ],
        },
        {
          id: 'es7-p4-ordering',
          type: 'ORDERING',
          instruction: 'Ordene la historia de la noche del sábado.',
          items: [
            { id: 'z1', text: 'Primero quedamos en la plaza a las nueve.' },
            { id: 'z2', text: 'Luego cenamos en un bar del centro.' },
            { id: 'z3', text: 'Después fuimos a un concierto.' },
            { id: 'z4', text: 'De repente empezó a llover.' },
            { id: 'z5', text: 'Al final volvimos a casa en taxi.' },
          ],
          solution: ['z1', 'z2', 'z3', 'z4', 'z5'],
        },
        {
          id: 'es7-p4-writing',
          type: 'WRITING',
          instruction: 'Conteste el mensaje.',
          prompt:
            'Un amigo le escribe: «¿Qué tal el fin de semana?». Conteste en cuatro o cinco frases. Cuente dos cosas del sábado y una del domingo, y use al menos dos expresiones de tiempo.',
          minWords: 20,
          maxWords: 80,
          aiFeedback: true,
          sampleAnswer:
            '¡Hola! El fin de semana estuvo muy bien. El sábado por la mañana limpié la casa y por la tarde fui al cine con mi hermana. Después cenamos en un japonés y volvimos tarde. El domingo no hice casi nada: me levanté a las once y leí en el sofá. ¿Y tú?',
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – Rückblick auf das ganze Kapitel.
  {
    order: 5,
    title: '¿Ya sabes hacerlo?',
    subtitle: 'Rückblick auf das ganze Kapitel',
    estimatedMinutes: 19,
    content: {
      version: v,
      blocks: [
        { id: 'es7-p5-h1', type: 'HEADING', level: 1, text: '¿Ya sabes hacerlo?' },
        {
          id: 'es7-p5-intro',
          type: 'TEXT',
          text: 'Aquí vuelve todo el capítulo: las terminaciones regulares, los verbos fuertes y las expresiones que sitúan una historia en el pasado.',
          translations: {
            de: 'Hier kommt das ganze Kapitel noch einmal: die regelmäßigen Endungen, die starken Verben und die Ausdrücke, die eine Geschichte in der Vergangenheit verorten.',
          },
        },
        {
          id: 'es7-p5-cloze',
          type: 'CLOZE',
          instruction: 'Complete el texto de Daniel.',
          wordBank: ['fuimos', 'llegamos', 'hizo', 'comimos', 'volví', 'hace'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'El verano pasado mis amigos y yo ' },
            { kind: 'GAP', gapId: 'g1', solution: ['fuimos'], width: 8 },
            { kind: 'TEXT', text: ' a la costa. ' },
            { kind: 'GAP', gapId: 'g2', solution: ['Llegamos'], width: 10 },
            { kind: 'TEXT', text: ' un sábado por la mañana y ' },
            { kind: 'GAP', gapId: 'g3', solution: ['hizo'], width: 7 },
            { kind: 'TEXT', text: ' buen tiempo toda la semana. Un día ' },
            { kind: 'GAP', gapId: 'g4', solution: ['comimos'], width: 9 },
            { kind: 'TEXT', text: ' pescado en un chiringuito de la playa. Yo ' },
            { kind: 'GAP', gapId: 'g5', solution: ['volví'], width: 7 },
            { kind: 'TEXT', text: ' antes que los demás, porque empecé a trabajar ' },
            { kind: 'GAP', gapId: 'g6', solution: ['hace'], width: 6 },
            { kind: 'TEXT', text: ' dos meses.' },
          ],
        },
        {
          id: 'es7-p5-match',
          type: 'MATCHING',
          instruction: 'Relacione la pregunta con la respuesta.',
          left: [
            { id: 'a1', text: '¿Qué hiciste anoche?' },
            { id: 'a2', text: '¿Cuándo llegasteis?' },
            { id: 'a3', text: '¿Dónde estuvisteis el sábado?' },
            { id: 'a4', text: '¿Te gustó la película?' },
          ],
          right: [
            { id: 'b1', text: 'Nada especial. Cené y me acosté pronto.' },
            { id: 'b2', text: 'Hace dos horas, en el tren de las seis.' },
            { id: 'b3', text: 'En casa de mis suegros, en el pueblo.' },
            { id: 'b4', text: 'Sí, mucho. La vimos dos veces.' },
          ],
          solution: [
            { leftId: 'a1', rightId: 'b1' },
            { leftId: 'a2', rightId: 'b2' },
            { leftId: 'a3', rightId: 'b3' },
            { leftId: 'a4', rightId: 'b4' },
          ],
        },
        {
          id: 'es7-p5-choice',
          type: 'CHOICE',
          instruction: 'Marque todas las frases correctas.',
          question: '¿Cuáles de estas frases son correctas?',
          options: [
            { id: 's1', text: 'El año pasado fuimos a México.' },
            { id: 's2', text: 'El año pasado fuimos a México hace.' },
            { id: 's3', text: 'Mi madre hizo una tarta para la fiesta.' },
            { id: 's4', text: 'Mi madre hació una tarta para la fiesta.' },
          ],
          multiple: true,
          solution: ['s1', 's3'],
          explanation:
            '«hace» va delante de un plazo de tiempo, no al final de la frase. Y «hacer» es fuerte en indefinido: «hizo», no «hació».',
          explanationTranslations: {
            de: '„hace“ steht vor einer Zeitspanne, nicht am Satzende. Und „hacer“ ist im Indefinido stark: „hizo“, nicht „hació“.',
          },
        },
        {
          id: 'es7-p5-ordering',
          type: 'ORDERING',
          instruction: 'Ordene las frases para formar un relato.',
          items: [
            { id: 'v1', text: 'El viernes salí del trabajo a las seis.' },
            { id: 'v2', text: 'Fui directamente a la estación.' },
            { id: 'v3', text: 'Cogí el tren de las siete y media.' },
            { id: 'v4', text: 'Llegué al pueblo a las nueve.' },
            { id: 'v5', text: 'Mis padres me esperaron en el andén.' },
            { id: 'v6', text: 'Cenamos juntos y me acosté enseguida.' },
          ],
          solution: ['v1', 'v2', 'v3', 'v4', 'v5', 'v6'],
        },
        {
          id: 'es7-p5-writing',
          type: 'WRITING',
          instruction: 'Cuente un viaje.',
          prompt:
            'Escriba de seis a ocho frases sobre un viaje o una salida que hizo: ¿adónde fue?, ¿con quién?, ¿qué hizo allí?, ¿qué tal fue? Use el indefinido, al menos tres verbos fuertes y dos expresiones de tiempo.',
          minWords: 30,
          maxWords: 120,
          aiFeedback: true,
          sampleAnswer:
            'Hace dos años fui a Lisboa con mi hermana. Llegamos un jueves por la tarde y estuvimos cuatro días. El primer día paseamos por el centro y cenamos en un sitio muy pequeño cerca del río. El viernes subimos al castillo y sacamos muchas fotos. El sábado hizo mal tiempo, así que fuimos a un museo. Mi hermana quiso volver en barco, pero al final cogimos el tren. Fue un viaje corto y me gustó mucho.',
        },
      ],
    },
  },
];
