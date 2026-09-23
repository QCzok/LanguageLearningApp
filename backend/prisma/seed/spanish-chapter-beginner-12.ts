import type { UnitSeed } from './chapter-beginner-1';

/**
 * Spanisch, Beginner, Kapitel 12: „Fiestas y tradiciones“ (A2, Kapitel 6)
 *
 * Fünf Seiten, Aufbau wie in den Kapiteln davor. Letztes Kapitel des
 * Beginner-Bands.
 *
 * Das Kapitel schließt die Vergangenheit ab, die in Kapitel 7 begonnen hat:
 * Nach Indefinido und Imperfecto kommt das Perfecto – die Zeit für das, was
 * noch in die Gegenwart hineinreicht. Deshalb steht es am Ende und nicht am
 * Anfang: Erst wenn die beiden anderen sitzen, lässt sich sagen, wodurch sich
 * dieses unterscheidet.
 *
 * Seite 2 nennt dabei offen, was viele Lehrwerke verschweigen: Die Regel
 * „heute, diese Woche, schon, noch nie → Perfecto“ ist die Regel Spaniens.
 * In weiten Teilen Lateinamerikas steht an derselben Stelle das Indefinido.
 * Wer das früh weiß, hält die eigene Regel nicht für ein Naturgesetz und
 * erschrickt nicht, wenn er in Buenos Aires etwas anderes hört.
 *
 * Die Feste sind der zweite Strang. Sie stehen hier nicht als Folklore,
 * sondern weil man sie beschreiben können soll – dafür kommen das unpersönliche
 * „se“ und „soler“ dazu, mit denen man sagt, was man üblicherweise tut, ohne
 * jemanden zu nennen.
 *
 * Seiten einsprachig spanisch mit aufklappbarer Übersetzung (Beginner-Band).
 */
const v = 1;

export const SPANISH_BEGINNER_12_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – die Feste des Jahres: Wortschatz und Landeskunde.
  {
    order: 1,
    title: 'Las fiestas del año',
    subtitle: 'Feste benennen und einordnen',
    estimatedMinutes: 23,
    content: {
      version: v,
      blocks: [
        { id: 'es12-p1-h1', type: 'HEADING', level: 1, text: 'Las fiestas del año' },
        {
          id: 'es12-p1-image',
          type: 'IMAGE',
          url: 'illustration:fiesta-lights',
          alt: 'Eine Wimpelkette und bunte Lampions vor einem Abendhimmel.',
          caption: 'La plaza, la noche de la fiesta.',
        },
        {
          id: 'es12-p1-intro',
          type: 'TEXT',
          text: 'Cada país tiene su calendario, y las fechas no coinciden. Aquí hay seis fiestas del mundo hispanohablante, con lo que se hace en ellas. No hace falta aprenderlo todo de memoria: basta con poder decir cuándo es, qué se celebra y qué hace la gente.',
          translations: {
            de: 'Jedes Land hat seinen Kalender, und die Daten decken sich nicht. Hier stehen sechs Feste der spanischsprachigen Welt und was an ihnen getan wird. Man muss das nicht auswendig lernen: Es genügt, sagen zu können, wann es ist, was gefeiert wird und was die Leute tun.',
          },
        },
        {
          id: 'es12-p1-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: celebrar',
          items: [
            { term: 'la fiesta', translations: { en: 'festival, party', de: 'das Fest' } },
            { term: 'celebrar', translations: { en: 'to celebrate', de: 'feiern' } },
            { term: 'la costumbre', translations: { en: 'custom', de: 'der Brauch' } },
            { term: 'el desfile', translations: { en: 'parade', de: 'der Umzug' } },
            { term: 'los fuegos artificiales', translations: { en: 'fireworks', de: 'das Feuerwerk' } },
            { term: 'disfrazarse', translations: { en: 'to dress up', de: 'sich verkleiden' } },
            { term: 'el regalo', translations: { en: 'present', de: 'das Geschenk' } },
            { term: 'reunirse', translations: { en: 'to get together', de: 'sich versammeln' } },
            { term: 'la Nochebuena', translations: { en: 'Christmas Eve', de: 'Heiligabend' } },
            { term: 'la Nochevieja', translations: { en: "New Year's Eve", de: 'Silvester' } },
            { term: 'el día festivo', translations: { en: 'public holiday', de: 'der Feiertag' } },
            { term: 'el santo', translations: { en: 'name day', de: 'der Namenstag' } },
          ],
        },
        {
          id: 'es12-p1-info-fiestas',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'Seis fechas',
          text: 'Dos cosas llaman la atención de quien viene de Alemania. La primera: en España los regalos de Navidad los traen tradicionalmente los Reyes Magos, el 6 de enero, aunque Papá Noel gane terreno. La segunda: el Día de Muertos mexicano no es una fiesta triste – se monta un altar con la comida que le gustaba a la persona y se pasa la noche con ella.',
          translations: {
            de: {
              title: 'Sechs Daten',
              text: 'Zweierlei fällt auf, wenn man aus Deutschland kommt. Erstens: In Spanien bringen die Weihnachtsgeschenke traditionell die Heiligen Drei Könige, am 6. Januar, auch wenn der Weihnachtsmann an Boden gewinnt. Zweitens: Der mexikanische Día de Muertos ist kein trauriges Fest – man baut einen Altar mit den Speisen, die der Verstorbene mochte, und verbringt die Nacht bei ihm.',
            },
          },
          table: {
            headers: ['Fiesta', 'Cuándo', 'Dónde'],
            rows: [
              ['Nochevieja', '31 de diciembre', 'todo el mundo hispano'],
              ['Reyes', '6 de enero', 'España'],
              ['Carnaval', 'febrero o marzo', 'España y América'],
              ['Semana Santa', 'marzo o abril', 'España y América'],
              ['las Fallas', '15–19 de marzo', 'Valencia'],
              ['Día de Muertos', '1–2 de noviembre', 'México'],
            ],
          },
        },
        {
          id: 'es12-p1-texto',
          type: 'TEXT',
          text: 'En Nochevieja, a las doce, casi todas las familias españolas hacen lo mismo: comen doce uvas, una con cada campanada del reloj de la Puerta del Sol, que sale por televisión. Hay que darse prisa, porque entre campanada y campanada pasan tres segundos, y quien no termina las doce empieza el año riéndose. Después la gente sale a la calle y muchos no vuelven a casa hasta el desayuno.',
          translations: {
            de: 'An Silvester tun um zwölf fast alle spanischen Familien dasselbe: Sie essen zwölf Weintrauben, eine bei jedem Glockenschlag der Uhr an der Puerta del Sol, die im Fernsehen übertragen wird. Man muss sich beeilen, denn zwischen den Schlägen liegen drei Sekunden, und wer die zwölf nicht schafft, beginnt das Jahr lachend. Danach gehen die Leute auf die Straße, und viele kommen erst zum Frühstück nach Hause.',
          },
        },
        {
          id: 'es12-p1-choice',
          type: 'CHOICE',
          instruction: 'Lea otra vez y elija.',
          question: '¿Por qué hay que darse prisa con las uvas?',
          options: [
            { id: 'o1', text: 'Porque solo hay tres segundos entre campanada y campanada.' },
            { id: 'o2', text: 'Porque la televisión termina a las doce y cinco.' },
            { id: 'o3', text: 'Porque las uvas son muy grandes.' },
          ],
          multiple: false,
          solution: ['o1'],
          explanation: 'El texto dice: «entre campanada y campanada pasan tres segundos».',
          explanationTranslations: {
            de: 'Im Text heißt es: „entre campanada y campanada pasan tres segundos“.',
          },
        },
        {
          id: 'es12-p1-match',
          type: 'MATCHING',
          instruction: 'Relacione la fiesta con la costumbre.',
          left: [
            { id: 'l1', text: 'Nochevieja' },
            { id: 'l2', text: 'Reyes' },
            { id: 'l3', text: 'Carnaval' },
            { id: 'l4', text: 'Día de Muertos' },
          ],
          right: [
            { id: 'r1', text: 'Se comen doce uvas a medianoche.' },
            { id: 'r2', text: 'Los niños reciben los regalos el 6 de enero.' },
            { id: 'r3', text: 'La gente se disfraza y hay desfiles.' },
            { id: 'r4', text: 'Se prepara un altar para recordar a los muertos.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'es12-p1-cloze',
          type: 'CLOZE',
          instruction: 'Complete con el vocabulario de la fiesta.',
          wordBank: ['celebra', 'desfile', 'disfrazan', 'fuegos', 'regalos'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'El Carnaval se ' },
            { kind: 'GAP', gapId: 'a1', solution: ['celebra'], width: 9 },
            { kind: 'TEXT', text: ' en febrero o en marzo.\nHay un ' },
            { kind: 'GAP', gapId: 'a2', solution: ['desfile'], width: 9 },
            { kind: 'TEXT', text: ' por las calles del centro.\nLos niños se ' },
            { kind: 'GAP', gapId: 'a3', solution: ['disfrazan'], width: 11 },
            { kind: 'TEXT', text: ' de lo que quieren.\nAl final hay ' },
            { kind: 'GAP', gapId: 'a4', solution: ['fuegos'], width: 8 },
            { kind: 'TEXT', text: ' artificiales en la playa.\nEn Reyes, los ' },
            { kind: 'GAP', gapId: 'a5', solution: ['regalos'], width: 9 },
            { kind: 'TEXT', text: ' llegan el día 6.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – das Perfecto: zwei Teile, einer davon unveränderlich.
  {
    order: 2,
    title: 'El pretérito perfecto',
    subtitle: 'haber + Partizip',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'es12-p2-h1', type: 'HEADING', level: 1, text: 'El pretérito perfecto' },
        {
          id: 'es12-p2-intro',
          type: 'TEXT',
          text: 'Esta es la tercera y última forma del pasado del libro, y la única que se construye con dos palabras. Se parece mucho al «Perfekt» alemán por fuera, pero no se usa igual: en español no sustituye al indefinido, sino que reparte el trabajo con él según el tiempo del que se habla.',
          translations: {
            de: 'Das ist die dritte und letzte Vergangenheitsform dieses Buchs und die einzige, die aus zwei Wörtern besteht. Von außen ähnelt sie dem deutschen Perfekt sehr, wird aber nicht gleich verwendet: Im Spanischen ersetzt sie das Indefinido nicht, sondern teilt sich die Arbeit mit ihm – je nachdem, von welchem Zeitraum die Rede ist.',
          },
        },
        {
          id: 'es12-p2-info-formas',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'haber + participio',
          text: 'Solo se conjuga «haber»; el participio no cambia nunca, ni por género ni por número: «ellas han llegado», no «llegadas». El participio regular se forma con «-ado» en los verbos en -ar y con «-ido» en los de -er e -ir. Y entre las dos palabras no se mete nada: ni el sujeto, ni «no», ni un adverbio.',
          translations: {
            de: {
              title: 'haber + Partizip',
              text: 'Konjugiert wird nur „haber“; das Partizip ändert sich nie, weder nach Geschlecht noch nach Zahl: „ellas han llegado“, nicht „llegadas“. Das regelmäßige Partizip bildet sich mit „-ado“ bei Verben auf -ar und mit „-ido“ bei denen auf -er und -ir. Und zwischen die beiden Wörter kommt nichts: weder das Subjekt noch „no“ noch ein Adverb.',
            },
          },
          table: {
            headers: ['', 'haber', 'Ejemplo'],
            rows: [
              ['yo', 'he', 'He trabajado mucho esta semana.'],
              ['tú', 'has', '¿Has comido ya?'],
              ['él / ella / usted', 'ha', 'Ana ha salido hace un rato.'],
              ['nosotros', 'hemos', 'Hemos vivido aquí tres años.'],
              ['vosotros', 'habéis', '¿Habéis visto la película?'],
              ['ellos / ustedes', 'han', 'No han llegado todavía.'],
            ],
          },
        },
        {
          id: 'es12-p2-info-participios',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Diez participios irregulares',
          text: 'Son pocos, pero salen en cada conversación. Convienen de memoria, porque no se parecen a nada: no hay forma de deducir «visto» de «ver». Los verbos que derivan de estos heredan la irregularidad: de «volver» sale «devuelto», de «poner», «compuesto».',
          translations: {
            de: {
              title: 'Zehn unregelmäßige Partizipien',
              text: 'Es sind wenige, aber sie kommen in jedem Gespräch vor. Man lernt sie am besten auswendig, denn sie ähneln nichts: „visto“ lässt sich aus „ver“ nicht herleiten. Verben, die von diesen abgeleitet sind, erben die Unregelmäßigkeit: aus „volver“ wird „devuelto“, aus „poner“ „compuesto“.',
            },
          },
          table: {
            headers: ['Infinitivo', 'Participio', 'Infinitivo', 'Participio'],
            rows: [
              ['hacer', 'hecho', 'ver', 'visto'],
              ['decir', 'dicho', 'escribir', 'escrito'],
              ['poner', 'puesto', 'volver', 'vuelto'],
              ['abrir', 'abierto', 'romper', 'roto'],
              ['morir', 'muerto', 'cubrir', 'cubierto'],
            ],
          },
        },
        {
          id: 'es12-p2-cloze',
          type: 'CLOZE',
          instruction: 'Complete con el pretérito perfecto.',
          wordBank: ['he comido', 'has visto', 'ha hecho', 'hemos vuelto', 'han escrito'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Hoy todavía no ' },
            { kind: 'GAP', gapId: 'b1', solution: ['he comido'], width: 11, hint: 'comer, yo' },
            { kind: 'TEXT', text: ' nada.\n¿' },
            { kind: 'GAP', gapId: 'b2', solution: ['Has visto'], width: 11, hint: 'ver, tú' },
            { kind: 'TEXT', text: ' mi móvil?\nMi hermano ' },
            { kind: 'GAP', gapId: 'b3', solution: ['ha hecho'], width: 10, hint: 'hacer' },
            { kind: 'TEXT', text: ' una tarta para la fiesta.\nEsta mañana ' },
            { kind: 'GAP', gapId: 'b4', solution: ['hemos vuelto'], width: 14, hint: 'volver, nosotros' },
            { kind: 'TEXT', text: ' del pueblo.\nMis padres me ' },
            { kind: 'GAP', gapId: 'b5', solution: ['han escrito'], width: 13, hint: 'escribir' },
            { kind: 'TEXT', text: ' esta semana.' },
          ],
        },
        {
          id: 'es12-p2-info-cuando',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Cuándo se usa, y dónde',
          text: 'El perfecto vale para lo que ocurrió dentro de un tiempo que todavía dura – hoy, esta semana, este año – y para la experiencia sin fecha: «he estado en México». El indefinido vale para lo cerrado: ayer, el lunes, en 2019. Ahora bien, esa repartición es la del español de España. En gran parte de América – y también en las islas Canarias – se dice «hoy comí» donde en Madrid se diría «hoy he comido». Las dos son correctas; conviene saberlo para no corregir a quien no se equivoca.',
          translations: {
            de: {
              title: 'Wann man es verwendet – und wo',
              text: 'Das Perfecto gilt für das, was in einem noch andauernden Zeitraum geschah – heute, diese Woche, dieses Jahr – und für die Erfahrung ohne Datum: „he estado en México“. Das Indefinido gilt für Abgeschlossenes: gestern, am Montag, 2019. Diese Aufteilung ist allerdings die des Spanischen in Spanien. In weiten Teilen Amerikas – und auch auf den Kanaren – sagt man „hoy comí“, wo es in Madrid „hoy he comido“ hieße. Beides ist richtig; man sollte es wissen, um niemanden zu korrigieren, der sich nicht irrt.',
            },
          },
          table: {
            headers: ['Perfecto', 'Indefinido'],
            rows: [
              ['hoy, esta mañana', 'ayer, anoche'],
              ['esta semana, este mes, este año', 'la semana pasada, en 2019'],
              ['ya, todavía no, alguna vez, nunca', 'el lunes, hace dos días'],
              ['Este año he viajado poco.', 'El año pasado viajé mucho.'],
            ],
          },
        },
        {
          id: 'es12-p2-choice',
          type: 'CHOICE',
          instruction: 'Marque todas las frases correctas.',
          question: '¿Cuáles de estas frases son correctas?',
          options: [
            { id: 'x1', text: 'Esta mañana he hablado con el jefe.' },
            { id: 'x2', text: 'Esta mañana he hablado con el jefe, pero ayer hablé con su secretaria.' },
            { id: 'x3', text: 'He ya comido.' },
            { id: 'x4', text: 'Las cartas han llegadas hoy.' },
          ],
          multiple: true,
          solution: ['x1', 'x2'],
          explanation:
            'Entre «haber» y el participio no se mete nada: «ya he comido». Y el participio no se ajusta al sujeto: «han llegado».',
          explanationTranslations: {
            de: 'Zwischen „haber“ und das Partizip kommt nichts: „ya he comido“. Und das Partizip richtet sich nicht nach dem Subjekt: „han llegado“.',
          },
        },
        {
          id: 'es12-p2-match',
          type: 'MATCHING',
          instruction: 'Relacione el infinitivo con el participio.',
          left: [
            { id: 'm1', text: 'escribir' },
            { id: 'm2', text: 'poner' },
            { id: 'm3', text: 'abrir' },
            { id: 'm4', text: 'decir' },
          ],
          right: [
            { id: 'n1', text: 'escrito' },
            { id: 'n2', text: 'puesto' },
            { id: 'n3', text: 'abierto' },
            { id: 'n4', text: 'dicho' },
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
  // Seite 3 – Erfahrungen: ya, todavía no, alguna vez, nunca.
  {
    order: 3,
    title: '¿Alguna vez has…?',
    subtitle: 'Über Erfahrungen sprechen',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'es12-p3-h1', type: 'HEADING', level: 1, text: '¿Alguna vez has…?' },
        {
          id: 'es12-p3-intro',
          type: 'TEXT',
          text: 'El uso más agradecido del perfecto es hablar de lo que uno ha hecho alguna vez en la vida, sin decir cuándo. Basta con cuatro palabras para preguntar y responder.',
          translations: {
            de: 'Der dankbarste Gebrauch des Perfecto ist, davon zu sprechen, was man irgendwann im Leben getan hat, ohne zu sagen wann. Vier Wörter genügen zum Fragen und Antworten.',
          },
        },
        {
          id: 'es12-p3-info-experiencia',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'ya, todavía no, alguna vez, nunca',
          text: 'La pregunta se hace con «alguna vez» y se responde de tres maneras: con «sí» y el número de veces, con «todavía no» si falta pero se cuenta con ello, o con «nunca» si no ha pasado y punto. Ninguna de estas palabras se mete entre «haber» y el participio: van delante de las dos o detrás de las dos.',
          translations: {
            de: {
              title: 'ya, todavía no, alguna vez, nunca',
              text: 'Gefragt wird mit „alguna vez“, und geantwortet wird auf drei Arten: mit „sí“ und der Zahl der Male, mit „todavía no“, wenn es noch aussteht, aber erwartet wird, oder mit „nunca“, wenn es nicht geschehen ist, basta. Keines dieser Wörter tritt zwischen „haber“ und das Partizip: Sie stehen vor beiden oder hinter beiden.',
            },
          },
          table: {
            headers: ['Pregunta / respuesta', 'Ejemplo'],
            rows: [
              ['¿Alguna vez…?', '¿Alguna vez has estado en México?'],
              ['sí, una vez / dos veces', 'Sí, he estado dos veces.'],
              ['ya', 'Ya he visto esa película.'],
              ['todavía no', 'Todavía no he probado el mole.'],
              ['nunca', 'Nunca he ido a un carnaval.'],
            ],
          },
        },
        {
          id: 'es12-p3-dlg',
          type: 'DIALOGUE',
          title: 'En la cola del aeropuerto',
          lines: [
            { speaker: 'Bea', text: '¿Alguna vez has estado en México?' },
            { speaker: 'Hugo', text: 'Sí, dos veces, pero siempre en verano.' },
            { speaker: 'Bea', text: 'Entonces no has visto el Día de Muertos.' },
            { speaker: 'Hugo', text: 'No, todavía no. Y tengo muchas ganas.' },
            { speaker: 'Bea', text: 'Yo he ido una vez, hace tres años. No se me ha olvidado.' },
            { speaker: 'Hugo', text: '¿Y qué hiciste allí?' },
            { speaker: 'Bea', text: 'Pasé la noche en el cementerio con una familia del pueblo. Fue lo mejor del viaje.' },
          ],
        },
        {
          id: 'es12-p3-info-mezcla',
          type: 'INFO',
          variant: 'TIP',
          title: 'Primero el perfecto, después el indefinido',
          text: 'Fíjese en el diálogo: mientras se habla de la experiencia en general, todo va en perfecto. En cuanto alguien pregunta «¿y qué hiciste?», es decir, por aquella vez concreta, se pasa al indefinido y ya no se vuelve. Es el recorrido normal de una conversación: se abre con el perfecto y se cuenta con el indefinido.',
          translations: {
            de: {
              title: 'Erst das Perfecto, dann das Indefinido',
              text: 'Achten Sie auf den Dialog: Solange von der Erfahrung im Allgemeinen die Rede ist, steht alles im Perfecto. Sobald jemand „¿y qué hiciste?“ fragt, also nach dem einen konkreten Mal, wechselt man ins Indefinido und kehrt nicht zurück. Das ist der übliche Verlauf eines Gesprächs: Man eröffnet mit dem Perfecto und erzählt im Indefinido.',
            },
          },
        },
        {
          id: 'es12-p3-cloze',
          type: 'CLOZE',
          instruction: 'Complete con el perfecto o el indefinido.',
          wordBank: ['he estado', 'fui', 'has probado', 'hemos visto', 'celebramos'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Nunca ' },
            { kind: 'GAP', gapId: 'c1', solution: ['he estado'], width: 11 },
            { kind: 'TEXT', text: ' en Valencia en marzo.\nEl año pasado ' },
            { kind: 'GAP', gapId: 'c2', solution: ['fui'], width: 6 },
            { kind: 'TEXT', text: ' en septiembre, y no había nadie.\n¿' },
            { kind: 'GAP', gapId: 'c3', solution: ['Has probado'], width: 13 },
            { kind: 'TEXT', text: ' alguna vez el roscón de Reyes?\nEste año ' },
            { kind: 'GAP', gapId: 'c4', solution: ['hemos visto'], width: 13 },
            { kind: 'TEXT', text: ' el desfile desde el balcón.\nEn Nochevieja ' },
            { kind: 'GAP', gapId: 'c5', solution: ['celebramos'], width: 12 },
            { kind: 'TEXT', text: ' la fiesta en casa de mis suegros, como cada año.' },
          ],
        },
        {
          id: 'es12-p3-choice',
          type: 'CHOICE',
          instruction: 'Elija la forma que corresponde al español de España.',
          question: '«Ayer ___ a mis primos y hoy ___ con ellos.»',
          options: [
            { id: 'p1', text: 'vi … he comido' },
            { id: 'p2', text: 'he visto … comí' },
            { id: 'p3', text: 'he visto … he comido' },
          ],
          multiple: false,
          solution: ['p1'],
          explanation:
            '«Ayer» es un tiempo cerrado y pide indefinido; «hoy» todavía dura y pide perfecto. En buena parte de América las dos irían en indefinido.',
          explanationTranslations: {
            de: '„Ayer“ ist ein abgeschlossener Zeitraum und verlangt das Indefinido; „hoy“ dauert noch an und verlangt das Perfecto. In weiten Teilen Amerikas stünden beide im Indefinido.',
          },
        },
        {
          id: 'es12-p3-match',
          type: 'MATCHING',
          instruction: 'Relacione la pregunta con la respuesta.',
          left: [
            { id: 'm1', text: '¿Has estado alguna vez en Perú?' },
            { id: 'm2', text: '¿Ya has comido?' },
            { id: 'm3', text: '¿Has visto la última película de Almodóvar?' },
            { id: 'm4', text: '¿Habéis llegado bien?' },
          ],
          right: [
            { id: 'n1', text: 'Sí, una vez, hace muchos años.' },
            { id: 'n2', text: 'Todavía no, iba a preparar algo ahora.' },
            { id: 'n3', text: 'No, nunca voy al cine, la veré en casa.' },
            { id: 'n4', text: 'Sí, hemos llegado hace media hora.' },
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

  // ====================================================== SEITE 4
  // Seite 4 – Bräuche beschreiben, ohne jemanden zu nennen.
  {
    order: 4,
    title: 'Cómo se celebra',
    subtitle: 'Das unpersönliche „se“ und „soler“',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'es12-p4-h1', type: 'HEADING', level: 1, text: 'Cómo se celebra' },
        {
          id: 'es12-p4-intro',
          type: 'TEXT',
          text: 'Al explicar una costumbre no interesa quién la hace: la hace todo el mundo, o nadie en particular. El español tiene para eso una construcción muy cómoda con «se», y otra con «soler» para lo que se hace habitualmente.',
          translations: {
            de: 'Wenn man einen Brauch erklärt, interessiert nicht, wer ihn ausübt: Es tun ihn alle oder niemand Bestimmtes. Dafür hat das Spanische eine sehr bequeme Konstruktion mit „se“ und eine zweite mit „soler“ für das, was man gewöhnlich tut.',
          },
        },
        {
          id: 'es12-p4-info-se',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'se + verbo',
          text: 'Es la forma de las recetas, los carteles y las costumbres. El verbo va en tercera persona y se ajusta a lo que viene detrás: una cosa, singular; varias, plural. Por eso se dice «se come turrón», pero «se comen doce uvas». En alemán le corresponde el «man», que en cambio no cambia nunca.',
          translations: {
            de: {
              title: 'se + Verb',
              text: 'Das ist die Form der Rezepte, der Schilder und der Bräuche. Das Verb steht in der dritten Person und richtet sich nach dem, was folgt: eine Sache, Singular; mehrere, Plural. Deshalb heißt es „se come turrón“, aber „se comen doce uvas“. Im Deutschen entspricht ihm das „man“, das sich seinerseits nie ändert.',
            },
          },
          table: {
            headers: ['Español', 'Alemán'],
            rows: [
              ['En Navidad se come turrón.', 'An Weihnachten isst man Turrón.'],
              ['Se comen doce uvas.', 'Man isst zwölf Weintrauben.'],
              ['Aquí se habla catalán.', 'Hier spricht man Katalanisch.'],
              ['¿Cómo se dice esto en español?', 'Wie sagt man das auf Spanisch?'],
            ],
          },
        },
        {
          id: 'es12-p4-info-soler',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'soler + infinitivo',
          text: '«Soler» no se traduce con una palabra: significa hacer algo con regularidad, y en alemán se resuelve con «normalerweise» o «meistens». Se conjuga como los verbos que cambian o en ue, y detrás va siempre un infinitivo. Importante: no existe en indefinido, porque una costumbre no ocurre una sola vez.',
          translations: {
            de: {
              title: 'soler + Infinitiv',
              text: '„Soler“ lässt sich nicht mit einem Wort übersetzen: Es heißt, etwas regelmäßig zu tun, und im Deutschen löst man es mit „normalerweise“ oder „meistens“. Es wird konjugiert wie die Verben mit o zu ue, und dahinter steht immer ein Infinitiv. Wichtig: Im Indefinido gibt es das Verb nicht, denn eine Gewohnheit geschieht nicht ein einziges Mal.',
            },
          },
          table: {
            headers: ['Forma', 'Ejemplo'],
            rows: [
              ['suelo', 'Suelo pasar la Nochebuena con mis padres.'],
              ['sueles', '¿Sueles salir en Nochevieja?'],
              ['suele', 'La gente suele reunirse en la plaza.'],
              ['solemos', 'Solemos comer a las tres.'],
              ['suelen', 'Los niños suelen disfrazarse de superhéroes.'],
            ],
          },
        },
        {
          id: 'es12-p4-cloze',
          type: 'CLOZE',
          instruction: 'Complete con «se» + verbo o con «soler».',
          wordBank: ['se celebra', 'se comen', 'suele', 'solemos', 'se dice'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'La fiesta ' },
            { kind: 'GAP', gapId: 'd1', solution: ['se celebra'], width: 12 },
            { kind: 'TEXT', text: ' el segundo domingo de mayo.\nEse día ' },
            { kind: 'GAP', gapId: 'd2', solution: ['se comen'], width: 10 },
            { kind: 'TEXT', text: ' unos dulces típicos de la zona.\nLa gente ' },
            { kind: 'GAP', gapId: 'd3', solution: ['suele'], width: 8 },
            { kind: 'TEXT', text: ' salir a la calle por la tarde.\nEn mi familia ' },
            { kind: 'GAP', gapId: 'd4', solution: ['solemos'], width: 9 },
            { kind: 'TEXT', text: ' ir todos juntos.\n¿Cómo ' },
            { kind: 'GAP', gapId: 'd5', solution: ['se dice'], width: 9 },
            { kind: 'TEXT', text: ' «Feiertag» en español?' },
          ],
        },
        {
          id: 'es12-p4-choice',
          type: 'CHOICE',
          instruction: 'Elija la forma correcta.',
          question: '«An Silvester isst man zwölf Weintrauben.»',
          options: [
            { id: 'q1', text: 'En Nochevieja se come doce uvas.' },
            { id: 'q2', text: 'En Nochevieja se comen doce uvas.' },
            { id: 'q3', text: 'En Nochevieja uno come doce uvas.' },
          ],
          multiple: false,
          solution: ['q2'],
          explanation:
            'El verbo se ajusta a «doce uvas», que es plural. La tercera frase no es incorrecta, pero suena rara para una costumbre general.',
          explanationTranslations: {
            de: 'Das Verb richtet sich nach „doce uvas“, und das ist Plural. Der dritte Satz ist nicht falsch, klingt für einen allgemeinen Brauch aber schief.',
          },
        },
        {
          id: 'es12-p4-ordering',
          type: 'ORDERING',
          instruction: 'Ordene la descripción de la Nochevieja.',
          items: [
            { id: 'w1', text: 'La familia se reúne para cenar sobre las nueve.' },
            { id: 'w2', text: 'Antes de las doce se ponen las uvas en un plato.' },
            { id: 'w3', text: 'A medianoche se comen doce uvas con las campanadas.' },
            { id: 'w4', text: 'Después la gente suele brindar con cava.' },
            { id: 'w5', text: 'Los jóvenes salen a la calle hasta la madrugada.' },
            { id: 'w6', text: 'Por la mañana se desayuna chocolate con churros.' },
          ],
          solution: ['w1', 'w2', 'w3', 'w4', 'w5', 'w6'],
        },
        {
          id: 'es12-p4-writing',
          type: 'WRITING',
          instruction: 'Explique una fiesta de su país.',
          prompt:
            'Describa una fiesta de su país a alguien que no la conoce, en cinco o seis frases: ¿cuándo es?, ¿qué se celebra?, ¿qué se come?, ¿qué suele hacer la gente? Use «se» + verbo al menos dos veces y «soler» una vez.',
          minWords: 25,
          maxWords: 110,
          aiFeedback: true,
          sampleAnswer:
            'En mi país el Carnaval se celebra en febrero, antes de la Cuaresma. Ese día la gente se disfraza y hay desfiles por el centro de la ciudad. Se comen dulces fritos que solo se hacen en esas semanas. Los niños suelen ir disfrazados al colegio y por la tarde hay una fiesta en la plaza. Nosotros solemos quedarnos en casa, porque hace mucho frío.',
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – Rückblick auf Kapitel und auf den ganzen Beginner-Band.
  {
    order: 5,
    title: '¿Ya sabes hacerlo?',
    subtitle: 'Rückblick auf das ganze Kapitel',
    estimatedMinutes: 19,
    content: {
      version: v,
      blocks: [
        { id: 'es12-p5-h1', type: 'HEADING', level: 1, text: '¿Ya sabes hacerlo?' },
        {
          id: 'es12-p5-intro',
          type: 'TEXT',
          text: 'Aquí vuelve todo el capítulo: las fiestas, el perfecto con sus participios, el reparto con el indefinido y las formas impersonales. Con esto termina el nivel A2 y el primer libro entero: ya puede contar lo que pasó, describir cómo era, hablar de lo que hará y explicar cómo se hacen las cosas donde usted vive.',
          translations: {
            de: 'Hier kommt das ganze Kapitel noch einmal: die Feste, das Perfecto mit seinen Partizipien, die Aufteilung mit dem Indefinido und die unpersönlichen Formen. Damit endet die Stufe A2 und das ganze erste Buch: Sie können jetzt erzählen, was geschah, beschreiben, wie es war, sagen, was Sie tun werden, und erklären, wie die Dinge bei Ihnen gemacht werden.',
          },
        },
        {
          id: 'es12-p5-cloze',
          type: 'CLOZE',
          instruction: 'Complete el mensaje de Clara.',
          wordBank: ['he estado', 'se celebra', 'suelen', 'fui', 'ha gustado'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Esta semana ' },
            { kind: 'GAP', gapId: 'g1', solution: ['he estado'], width: 11 },
            { kind: 'TEXT', text: ' en Valencia por primera vez. Allí ' },
            { kind: 'GAP', gapId: 'g2', solution: ['se celebra'], width: 12 },
            { kind: 'TEXT', text: ' una fiesta enorme en marzo. Los vecinos ' },
            { kind: 'GAP', gapId: 'g3', solution: ['suelen'], width: 8 },
            { kind: 'TEXT', text: ' preparar las figuras durante todo el año. El año pasado ' },
            { kind: 'GAP', gapId: 'g4', solution: ['fui'], width: 6 },
            { kind: 'TEXT', text: ' en verano y no vi nada de esto. Me ' },
            { kind: 'GAP', gapId: 'g5', solution: ['ha gustado'], width: 12 },
            { kind: 'TEXT', text: ' muchísimo.' },
          ],
        },
        {
          id: 'es12-p5-choice',
          type: 'CHOICE',
          instruction: 'Marque todas las frases correctas.',
          question: '¿Cuáles de estas frases son correctas?',
          options: [
            { id: 's1', text: 'Este año he visto el desfile desde el balcón.' },
            { id: 's2', text: 'Este año he vi el desfile desde el balcón.' },
            { id: 's3', text: 'En esa zona se hablan dos lenguas.' },
            { id: 's4', text: 'En esa zona se habla dos lenguas.' },
          ],
          multiple: true,
          solution: ['s1', 's3'],
          explanation:
            'El perfecto se forma con «haber» y el participio, nunca con otra forma del pasado. Y con «se» el verbo se ajusta a lo que sigue: «dos lenguas» es plural.',
          explanationTranslations: {
            de: 'Das Perfecto besteht aus „haber“ und Partizip, nie aus einer anderen Vergangenheitsform. Und bei „se“ richtet sich das Verb nach dem Folgenden: „dos lenguas“ ist Plural.',
          },
        },
        {
          id: 'es12-p5-match',
          type: 'MATCHING',
          instruction: 'Relacione la pregunta con la respuesta.',
          left: [
            { id: 'a1', text: '¿Alguna vez has ido a las Fallas?' },
            { id: 'a2', text: '¿Qué se come en Nochevieja?' },
            { id: 'a3', text: '¿Qué hiciste el año pasado en Navidad?' },
            { id: 'a4', text: '¿Sueles salir en Carnaval?' },
          ],
          right: [
            { id: 'b1', text: 'Todavía no, pero este año quiero ir.' },
            { id: 'b2', text: 'Doce uvas, una con cada campanada.' },
            { id: 'b3', text: 'Fui a casa de mis padres y comimos allí.' },
            { id: 'b4', text: 'No mucho. Suelo quedarme en casa.' },
          ],
          solution: [
            { leftId: 'a1', rightId: 'b1' },
            { leftId: 'a2', rightId: 'b2' },
            { leftId: 'a3', rightId: 'b3' },
            { leftId: 'a4', rightId: 'b4' },
          ],
        },
        {
          id: 'es12-p5-ordering',
          type: 'ORDERING',
          instruction: 'Ordene el relato de la fiesta.',
          items: [
            { id: 'z1', text: 'Este año hemos ido por primera vez a la fiesta del pueblo.' },
            { id: 'z2', text: 'Llegamos el viernes por la tarde.' },
            { id: 'z3', text: 'Por la noche hubo un desfile con música.' },
            { id: 'z4', text: 'El sábado comimos todos juntos en la plaza.' },
            { id: 'z5', text: 'Por la noche hubo fuegos artificiales.' },
            { id: 'z6', text: 'Ha sido uno de los mejores fines de semana del año.' },
          ],
          solution: ['z1', 'z2', 'z3', 'z4', 'z5', 'z6'],
        },
        {
          id: 'es12-p5-writing',
          type: 'WRITING',
          instruction: 'Cuente una fiesta a la que ha ido.',
          prompt:
            'Escriba de seis a ocho frases sobre una fiesta a la que ha ido: primero diga si ha estado alguna vez en fiestas parecidas (perfecto) y después cuente aquella vez concreta (indefinido e imperfecto). Añada una frase con «se» o con «soler» sobre lo que hace la gente allí.',
          minWords: 35,
          maxWords: 130,
          aiFeedback: true,
          sampleAnswer:
            'He estado en muchas fiestas de pueblo, pero nunca he visto nada como la de Ciudad Rodrigo. Fui hace dos años con unos amigos, en febrero. Hacía muchísimo frío y las calles estaban llenas de gente disfrazada. Por la tarde hubo un desfile larguísimo y por la noche cenamos en casa de una vecina. Allí la gente suele invitar a los de fuera sin conocerlos de nada. Volvimos el domingo, agotados y contentos. Este año quiero repetir.',
        },
      ],
    },
  },
];
