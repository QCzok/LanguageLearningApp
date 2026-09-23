import type { UnitSeed } from './chapter-beginner-1';

/**
 * Spanisch, Beginner, Kapitel 10: „Planes de viaje“ (A2, Kapitel 4)
 *
 * Fünf Seiten, Aufbau wie in den Kapiteln davor.
 *
 * Nach drei Kapiteln Vergangenheit dreht sich die Blickrichtung um. Die
 * Zukunft kommt dabei in der Reihenfolge, in der sie auch gesprochen wird:
 * erst „ir a + Infinitiv“, mit dem Spanischsprachige den Alltag planen, dann
 * das einfache Futur, das seltener ist, als Lehrbücher glauben machen. Seite 2
 * sagt deshalb ausdrücklich, wann man welches nimmt – sonst lernt man eine
 * Form, die man kaum braucht, und benutzt sie überall.
 *
 * Die Unregelmäßigkeiten des Futurs sind lohnend wie kaum etwas sonst: Es
 * sind neun veränderte Stämme, und dieselben neun gelten später unverändert
 * für den Konditional. Wer sie hier lernt, hat eine ganze Zeitform im Voraus
 * mitgenommen.
 *
 * Seite 4 bringt den Bedingungssatz nur in seiner einfachsten Gestalt – „si“
 * plus Präsens, Hauptsatz im Futur. Die irrealen Formen gehören in den
 * Grammatikband.
 *
 * Fahrpläne, Preise und Unterkünfte sind erfunden.
 *
 * Seiten einsprachig spanisch mit aufklappbarer Übersetzung (Beginner-Band).
 */
const v = 1;

export const SPANISH_BEGINNER_10_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – die nahe Zukunft, mit der tatsächlich geplant wird.
  {
    order: 1,
    title: 'Vamos a viajar',
    subtitle: '„ir a“ + Infinitiv und der Wortschatz der Reise',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'es10-p1-h1', type: 'HEADING', level: 1, text: 'Vamos a viajar' },
        {
          id: 'es10-p1-image',
          type: 'IMAGE',
          url: 'illustration:train-platform',
          alt: 'Ein Zug am Bahnsteig, daneben eine Anzeigetafel und ein Koffer.',
          caption: 'El tren de las siete y media.',
        },
        {
          id: 'es10-p1-intro',
          type: 'TEXT',
          text: 'Para hablar de lo que viene, el español echa mano casi siempre de una construcción muy sencilla: el verbo «ir», la preposición «a» y un infinitivo. Con eso se planea todo, desde la tarde del sábado hasta un viaje de tres semanas.',
          translations: {
            de: 'Um über das zu sprechen, was kommt, greift das Spanische fast immer zu einer sehr einfachen Konstruktion: das Verb „ir“, die Präposition „a“ und ein Infinitiv. Damit plant man alles, vom Samstagnachmittag bis zur dreiwöchigen Reise.',
          },
        },
        {
          id: 'es10-p1-info-ira',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'ir + a + infinitivo',
          text: 'Solo se conjuga «ir»; el otro verbo se queda en infinitivo y no cambia nunca. La «a» tampoco se puede saltar, aunque en alemán no haya nada parecido. Y si el infinitivo es «ir», se repite sin problema: «voy a ir al médico» es correcto y frecuente.',
          translations: {
            de: {
              title: 'ir + a + Infinitiv',
              text: 'Konjugiert wird nur „ir“; das andere Verb bleibt im Infinitiv und ändert sich nie. Das „a“ darf man ebenfalls nicht auslassen, auch wenn es im Deutschen keine Entsprechung gibt. Und wenn der Infinitiv „ir“ ist, wiederholt man es ohne Weiteres: „voy a ir al médico“ ist richtig und häufig.',
            },
          },
          table: {
            headers: ['', 'ir', 'Ejemplo'],
            rows: [
              ['yo', 'voy a', 'Voy a comprar los billetes esta tarde.'],
              ['tú', 'vas a', '¿Vas a venir con nosotros?'],
              ['él / ella / usted', 'va a', 'Marta va a llegar el jueves.'],
              ['nosotros', 'vamos a', 'Vamos a alquilar un coche.'],
              ['vosotros', 'vais a', '¿Dónde vais a dormir?'],
              ['ellos / ustedes', 'van a', 'Mis padres van a quedarse una semana.'],
            ],
          },
        },
        {
          id: 'es10-p1-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: el viaje',
          items: [
            { term: 'el billete', translations: { en: 'ticket', de: 'die Fahrkarte' } },
            { term: 'de ida y vuelta', translations: { en: 'return (ticket)', de: 'hin und zurück' } },
            { term: 'el andén', translations: { en: 'platform', de: 'der Bahnsteig' } },
            { term: 'el vuelo', translations: { en: 'flight', de: 'der Flug' } },
            { term: 'la maleta', translations: { en: 'suitcase', de: 'der Koffer' } },
            { term: 'el equipaje', translations: { en: 'luggage', de: 'das Gepäck' } },
            { term: 'hacer transbordo', translations: { en: 'to change (trains)', de: 'umsteigen' } },
            { term: 'el retraso', translations: { en: 'delay', de: 'die Verspätung' }, example: 'El tren lleva veinte minutos de retraso.' },
            { term: 'la estancia', translations: { en: 'stay', de: 'der Aufenthalt' } },
            { term: 'alojarse', translations: { en: 'to stay (in a hotel)', de: 'unterkommen, wohnen' } },
            { term: 'el alojamiento', translations: { en: 'accommodation', de: 'die Unterkunft' } },
            { term: 'reservar', translations: { en: 'to book', de: 'buchen, reservieren' } },
          ],
        },
        {
          id: 'es10-p1-dlg',
          type: 'DIALOGUE',
          title: 'Planes para el puente',
          lines: [
            { speaker: 'Rocío', text: '¿Qué vais a hacer en el puente?' },
            { speaker: 'Sergio', text: 'Vamos a ir a Asturias. Salimos el jueves por la noche.' },
            { speaker: 'Rocío', text: '¿En coche?' },
            { speaker: 'Sergio', text: 'No, en tren. Voy a comprar los billetes esta tarde, que ahora están baratos.' },
            { speaker: 'Rocío', text: '¿Y dónde os vais a alojar?' },
            { speaker: 'Sergio', text: 'En casa de unos amigos. Nos van a dejar una habitación.' },
          ],
        },
        {
          id: 'es10-p1-cloze',
          type: 'CLOZE',
          instruction: 'Complete con «ir a» + infinitivo.',
          wordBank: ['voy a', 'vamos a', 'va a', 'van a', 'vas a'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Este verano ' },
            { kind: 'GAP', gapId: 'a1', solution: ['vamos a'], width: 9 },
            { kind: 'TEXT', text: ' viajar por Andalucía.\nYo ' },
            { kind: 'GAP', gapId: 'a2', solution: ['voy a'], width: 7 },
            { kind: 'TEXT', text: ' reservar el hotel mañana.\n¿Tú ' },
            { kind: 'GAP', gapId: 'a3', solution: ['vas a'], width: 7 },
            { kind: 'TEXT', text: ' llevar mucho equipaje?\nEl avión ' },
            { kind: 'GAP', gapId: 'a4', solution: ['va a'], width: 6 },
            { kind: 'TEXT', text: ' salir con retraso.\nMis hermanos ' },
            { kind: 'GAP', gapId: 'a5', solution: ['van a'], width: 7 },
            { kind: 'TEXT', text: ' quedarse en un albergue.' },
          ],
        },
        {
          id: 'es10-p1-choice',
          type: 'CHOICE',
          instruction: 'Marque todas las frases correctas.',
          question: '¿Cuáles de estas frases son correctas?',
          options: [
            { id: 'o1', text: 'Mañana voy a hacer la maleta.' },
            { id: 'o2', text: 'Mañana voy hacer la maleta.' },
            { id: 'o3', text: 'El domingo vamos a ir a la playa.' },
            { id: 'o4', text: 'El domingo vamos a vamos a la playa.' },
          ],
          multiple: true,
          solution: ['o1', 'o3'],
          explanation:
            'La «a» es obligatoria, y detrás va siempre el infinitivo – también cuando ese infinitivo es «ir».',
          explanationTranslations: {
            de: 'Das „a“ ist Pflicht, und dahinter steht immer der Infinitiv – auch dann, wenn dieser Infinitiv „ir“ ist.',
          },
        },
        {
          id: 'es10-p1-match',
          type: 'MATCHING',
          instruction: 'Relacione la pregunta con la respuesta.',
          left: [
            { id: 'l1', text: '¿Cuándo vais a salir?' },
            { id: 'l2', text: '¿Vas a llevar maleta grande?' },
            { id: 'l3', text: '¿Dónde os vais a alojar?' },
            { id: 'l4', text: '¿Vais a alquilar un coche?' },
          ],
          right: [
            { id: 'r1', text: 'El jueves por la noche, después del trabajo.' },
            { id: 'r2', text: 'No, solo una mochila.' },
            { id: 'r3', text: 'En un apartamento cerca del centro.' },
            { id: 'r4', text: 'No hace falta, allí hay tranvía.' },
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
  // Seite 2 – das einfache Futur: eine Endung für alle drei Gruppen.
  {
    order: 2,
    title: 'El futuro simple',
    subtitle: 'Eine Endung für alle Verben',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'es10-p2-h1', type: 'HEADING', level: 1, text: 'El futuro simple' },
        {
          id: 'es10-p2-intro',
          type: 'TEXT',
          text: 'Hay una segunda manera de hablar del futuro, y en algo es más fácil que todo lo anterior: las terminaciones no se pegan a la raíz, sino al infinitivo entero, y son las mismas para -ar, -er e -ir.',
          translations: {
            de: 'Es gibt eine zweite Art, über die Zukunft zu sprechen, und in einem Punkt ist sie leichter als alles bisher: Die Endungen hängen nicht am Stamm, sondern am ganzen Infinitiv, und sie sind für -ar, -er und -ir dieselben.',
          },
        },
        {
          id: 'es10-p2-info-formas',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Infinitivo entero más terminación',
          text: 'Solo la forma de nosotros no lleva acento; todas las demás sí. Y como el infinitivo se conserva, la forma es fácil de reconocer incluso en un verbo que no se ha visto nunca.',
          translations: {
            de: {
              title: 'Ganzer Infinitiv plus Endung',
              text: 'Nur die nosotros-Form trägt keinen Akzent; alle übrigen schon. Und weil der Infinitiv erhalten bleibt, ist die Form selbst bei einem nie gesehenen Verb leicht zu erkennen.',
            },
          },
          table: {
            headers: ['', 'viajar', 'volver', 'salir'],
            rows: [
              ['yo', 'viajaré', 'volveré', 'saldré'],
              ['tú', 'viajarás', 'volverás', 'saldrás'],
              ['él / ella / usted', 'viajará', 'volverá', 'saldrá'],
              ['nosotros', 'viajaremos', 'volveremos', 'saldremos'],
              ['vosotros', 'viajaréis', 'volveréis', 'saldréis'],
              ['ellos / ustedes', 'viajarán', 'volverán', 'saldrán'],
            ],
          },
        },
        {
          id: 'es10-p2-info-irregulares',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Nueve raíces distintas, y ninguna más',
          text: 'Unos pocos verbos no usan el infinitivo tal cual, sino una raíz acortada; las terminaciones, en cambio, son las mismas. Vale la pena aprenderlas de memoria por una razón práctica: estas nueve raíces valen también para el condicional, que llega en el libro de gramática. Quien las sepa aquí, tendrá esa forma medio aprendida.',
          translations: {
            de: {
              title: 'Neun andere Stämme, mehr nicht',
              text: 'Einige wenige Verben nehmen nicht den Infinitiv, sondern einen verkürzten Stamm; die Endungen bleiben dieselben. Es lohnt sich, sie auswendig zu lernen, und zwar aus einem praktischen Grund: Dieselben neun Stämme gelten auch für den Konditional, der im Grammatikband kommt. Wer sie hier kann, hat jene Form halb gelernt.',
            },
          },
          table: {
            headers: ['Infinitivo', 'Raíz', 'Ejemplo'],
            rows: [
              ['tener', 'tendr-', 'Tendré tiempo el viernes.'],
              ['poner', 'pondr-', '¿Dónde pondremos las maletas?'],
              ['salir', 'saldr-', 'El tren saldrá a las ocho.'],
              ['venir', 'vendr-', '¿Vendrás con nosotros?'],
              ['poder', 'podr-', 'No podré llegar antes.'],
              ['saber', 'sabr-', 'Mañana sabremos el precio.'],
              ['querer', 'querr-', 'Nadie querrá conducir de noche.'],
              ['hacer', 'har-', '¿Qué haréis en agosto?'],
              ['decir', 'dir-', 'Te diré algo esta tarde.'],
            ],
          },
        },
        {
          id: 'es10-p2-cloze',
          type: 'CLOZE',
          instruction: 'Complete con el futuro simple.',
          wordBank: ['llegaremos', 'tendrá', 'saldrá', 'podré', 'harán'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'El avión ' },
            { kind: 'GAP', gapId: 'b1', solution: ['saldrá'], width: 9, hint: 'salir' },
            { kind: 'TEXT', text: ' a las siete y cuarto.\n' },
            { kind: 'GAP', gapId: 'b2', solution: ['Llegaremos'], width: 12, hint: 'llegar, nosotros' },
            { kind: 'TEXT', text: ' sobre las diez.\nEl hotel ' },
            { kind: 'GAP', gapId: 'b3', solution: ['tendrá'], width: 9, hint: 'tener' },
            { kind: 'TEXT', text: ' la habitación lista.\nEsta semana no ' },
            { kind: 'GAP', gapId: 'b4', solution: ['podré'], width: 8, hint: 'poder, yo' },
            { kind: 'TEXT', text: ' llamarte.\n¿Qué ' },
            { kind: 'GAP', gapId: 'b5', solution: ['harán'], width: 8, hint: 'hacer, ellos' },
            { kind: 'TEXT', text: ' tus padres mientras tanto?' },
          ],
        },
        {
          id: 'es10-p2-info-cual',
          type: 'INFO',
          variant: 'TIP',
          title: '¿Cuál de las dos se usa?',
          text: 'En la conversación diaria gana «ir a», sobre todo para lo que ya está decidido y está cerca. El futuro simple aparece más en lo lejano, en lo formal y en las previsiones – el tiempo, los horarios, las noticias. Hay además un uso que sorprende: con el futuro se expresa una suposición sobre el presente. «Serán las cinco» no habla de mañana, significa «es werden wohl fünf Uhr sein».',
          translations: {
            de: {
              title: 'Welche von beiden nimmt man?',
              text: 'Im Alltagsgespräch gewinnt „ir a“, vor allem für Beschlossenes und Nahes. Das einfache Futur erscheint eher bei Fernem, Förmlichem und bei Vorhersagen – Wetter, Fahrpläne, Nachrichten. Dazu kommt ein überraschender Gebrauch: Mit dem Futur drückt man eine Vermutung über die Gegenwart aus. „Serán las cinco“ spricht nicht von morgen, sondern heißt „es werden wohl fünf Uhr sein“.',
            },
          },
          table: {
            headers: ['Se usa', 'Ejemplo'],
            rows: [
              ['ir a: plan cercano y decidido', 'Mañana voy a hablar con el jefe.'],
              ['futuro: previsión o plazo largo', 'El año que viene habrá más vuelos.'],
              ['futuro: suposición sobre el presente', '¿Dónde está Ana? – Estará en el tren.'],
            ],
          },
        },
        {
          id: 'es10-p2-choice',
          type: 'CHOICE',
          instruction: 'Elija la interpretación correcta.',
          question: 'Alguien dice: «Serán las diez». ¿Qué significa?',
          options: [
            { id: 'p1', text: 'Nos veremos a las diez.' },
            { id: 'p2', text: 'Supongo que ahora son las diez.' },
            { id: 'p3', text: 'Mañana a las diez estaremos allí.' },
          ],
          multiple: false,
          solution: ['p2'],
          explanation:
            'El futuro sirve también para suponer algo del presente. Quien lo dice no mira el reloj: calcula.',
          explanationTranslations: {
            de: 'Das Futur dient auch dazu, etwas über die Gegenwart zu vermuten. Wer das sagt, schaut nicht auf die Uhr: Er schätzt.',
          },
        },
        {
          id: 'es10-p2-match',
          type: 'MATCHING',
          instruction: 'Relacione el infinitivo con la forma de futuro.',
          left: [
            { id: 'm1', text: 'poder (yo)' },
            { id: 'm2', text: 'venir (tú)' },
            { id: 'm3', text: 'decir (nosotros)' },
            { id: 'm4', text: 'poner (ellos)' },
          ],
          right: [
            { id: 'n1', text: 'podré' },
            { id: 'n2', text: 'vendrás' },
            { id: 'n3', text: 'diremos' },
            { id: 'n4', text: 'pondrán' },
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
  // Seite 3 – die Buchung: fragen, bestätigen, nachhaken.
  {
    order: 3,
    title: 'Quería reservar una habitación',
    subtitle: 'Unterkunft buchen und nachfragen',
    estimatedMinutes: 23,
    content: {
      version: v,
      blocks: [
        { id: 'es10-p3-h1', type: 'HEADING', level: 1, text: 'Quería reservar una habitación' },
        {
          id: 'es10-p3-intro',
          type: 'TEXT',
          text: 'Reservar es pedir algo y confirmar cuatro datos: cuántas personas, qué fechas, qué tipo de habitación y qué está incluido. La fórmula con la que se empieza es «quería» – un imperfecto que aquí no habla del pasado, sino que suaviza la petición.',
          translations: {
            de: 'Buchen heißt, um etwas zu bitten und vier Angaben zu bestätigen: wie viele Personen, welche Daten, welche Art Zimmer und was inbegriffen ist. Die Formel, mit der man beginnt, lautet „quería“ – ein Imperfecto, das hier nicht von der Vergangenheit spricht, sondern die Bitte abmildert.',
          },
        },
        {
          id: 'es10-p3-dlg',
          type: 'DIALOGUE',
          title: 'Por teléfono con el hostal',
          lines: [
            { speaker: 'Recepción', text: 'Hostal La Marina, buenos días.' },
            { speaker: 'Cliente', text: 'Buenos días. Quería reservar una habitación doble para el puente de mayo.' },
            { speaker: 'Recepción', text: '¿Para qué días exactamente?' },
            { speaker: 'Cliente', text: 'Del jueves treinta al domingo tres, tres noches.' },
            { speaker: 'Recepción', text: 'Un momento… Sí, nos queda una con baño y vistas al puerto. Son sesenta y cinco euros la noche.' },
            { speaker: 'Cliente', text: '¿El desayuno está incluido?' },
            { speaker: 'Recepción', text: 'Sí, de ocho a diez y media. ¿A qué hora llegarán ustedes?' },
            { speaker: 'Cliente', text: 'Sobre las nueve de la noche. ¿Es un problema?' },
            { speaker: 'Recepción', text: 'En absoluto, la recepción está abierta hasta medianoche.' },
          ],
        },
        {
          id: 'es10-p3-info-quería',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Pedir sin sonar brusco',
          text: 'El presente «quiero» es correcto, pero en un mostrador o al teléfono suena seco. El español suaviza de dos maneras: con el imperfecto «quería» y con la pregunta «¿puede…?». Las dos son fáciles y valen para cualquier petición, no solo en hoteles.',
          translations: {
            de: {
              title: 'Bitten, ohne schroff zu klingen',
              text: 'Das Präsens „quiero“ ist korrekt, klingt aber am Schalter oder am Telefon trocken. Das Spanische mildert auf zwei Arten: mit dem Imperfecto „quería“ und mit der Frage „¿puede…?“. Beide sind leicht und gelten für jede Bitte, nicht nur im Hotel.',
            },
          },
          table: {
            headers: ['Directo', 'Más amable'],
            rows: [
              ['Quiero una habitación.', 'Quería una habitación, por favor.'],
              ['Deme la llave.', '¿Me puede dar la llave?'],
              ['Necesito otra toalla.', '¿Me puede traer otra toalla?'],
            ],
          },
        },
        {
          id: 'es10-p3-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: el alojamiento',
          items: [
            { term: 'una habitación doble', translations: { en: 'double room', de: 'ein Doppelzimmer' } },
            { term: 'una habitación individual', translations: { en: 'single room', de: 'ein Einzelzimmer' } },
            { term: 'con baño', translations: { en: 'with a bathroom', de: 'mit Bad' } },
            { term: 'el desayuno incluido', translations: { en: 'breakfast included', de: 'Frühstück inbegriffen' } },
            { term: 'media pensión', translations: { en: 'half board', de: 'Halbpension' } },
            { term: 'la recepción', translations: { en: 'reception', de: 'die Rezeption' } },
            { term: 'la llave', translations: { en: 'key', de: 'der Schlüssel' } },
            { term: 'la planta', translations: { en: 'floor, storey', de: 'das Stockwerk' } },
            { term: 'el ascensor', translations: { en: 'lift', de: 'der Aufzug' } },
            { term: 'la noche', translations: { en: 'night', de: 'die Nacht' }, example: 'Son sesenta euros la noche.' },
          ],
        },
        {
          id: 'es10-p3-choice',
          type: 'CHOICE',
          instruction: 'Lea el diálogo otra vez y marque todo lo que es cierto.',
          question: '¿Qué sabemos de la reserva?',
          options: [
            { id: 'q1', text: 'Son tres noches.' },
            { id: 'q2', text: 'La habitación cuesta sesenta y cinco euros por noche.' },
            { id: 'q3', text: 'El desayuno se paga aparte.' },
            { id: 'q4', text: 'Pueden llegar por la noche sin problema.' },
          ],
          multiple: true,
          solution: ['q1', 'q2', 'q4'],
          explanation: 'El desayuno está incluido, de ocho a diez y media.',
          explanationTranslations: {
            de: 'Das Frühstück ist inbegriffen, von acht bis halb elf.',
          },
        },
        {
          id: 'es10-p3-cloze',
          type: 'CLOZE',
          instruction: 'Complete la reserva por correo.',
          wordBank: ['quería', 'doble', 'noches', 'incluido', 'llegaremos'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Buenos días:\n\n' },
            { kind: 'GAP', gapId: 'c1', solution: ['Quería'], width: 8 },
            { kind: 'TEXT', text: ' reservar una habitación ' },
            { kind: 'GAP', gapId: 'c2', solution: ['doble'], width: 7 },
            { kind: 'TEXT', text: ' para dos personas, tres ' },
            { kind: 'GAP', gapId: 'c3', solution: ['noches'], width: 8 },
            { kind: 'TEXT', text: ', del 12 al 15 de junio. ¿El desayuno está ' },
            { kind: 'GAP', gapId: 'c4', solution: ['incluido'], width: 10 },
            { kind: 'TEXT', text: '? ' },
            { kind: 'GAP', gapId: 'c5', solution: ['Llegaremos'], width: 12 },
            { kind: 'TEXT', text: ' el viernes por la tarde.\n\nUn saludo,\nLaura Beltrán' },
          ],
        },
        {
          id: 'es10-p3-ordering',
          type: 'ORDERING',
          instruction: 'Ordene la conversación telefónica.',
          items: [
            { id: 'w1', text: 'Hostal La Marina, buenos días.' },
            { id: 'w2', text: 'Quería reservar una habitación doble.' },
            { id: 'w3', text: '¿Para qué días exactamente?' },
            { id: 'w4', text: 'Del jueves al domingo, tres noches.' },
            { id: 'w5', text: 'Nos queda una con vistas al puerto.' },
            { id: 'w6', text: 'Perfecto, la reservo. Muchas gracias.' },
          ],
          solution: ['w1', 'w2', 'w3', 'w4', 'w5', 'w6'],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – sich verabreden und Bedingungen nennen.
  {
    order: 4,
    title: '¿Quedamos el sábado?',
    subtitle: 'Verabredungen und Bedingungen',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'es10-p4-h1', type: 'HEADING', level: 1, text: '¿Quedamos el sábado?' },
        {
          id: 'es10-p4-intro',
          type: 'TEXT',
          text: 'Para citarse con alguien el español usa un verbo propio: «quedar». No significa aquí «quedarse» ni «faltar», sino ponerse de acuerdo en una hora y un sitio. Quien lo domina, organiza una tarde entera con tres frases.',
          translations: {
            de: 'Um sich mit jemandem zu verabreden, hat das Spanische ein eigenes Verb: „quedar“. Es heißt hier weder „bleiben“ noch „übrig sein“, sondern sich auf Zeit und Ort einigen. Wer es beherrscht, organisiert einen ganzen Abend mit drei Sätzen.',
          },
        },
        {
          id: 'es10-p4-info-quedar',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'quedar: citarse',
          text: 'La forma más habitual es la de nosotros, en presente y con entonación de pregunta: «¿quedamos?». Detrás va la hora con «a», el sitio con «en» y la persona con «con». Para responder bastan dos palabras – y para decir que no, conviene añadir un motivo, que si no suena cortante.',
          translations: {
            de: {
              title: 'quedar: sich verabreden',
              text: 'Am gebräuchlichsten ist die nosotros-Form, im Präsens und mit Frageintonation: „¿quedamos?“. Dahinter steht die Uhrzeit mit „a“, der Ort mit „en“ und die Person mit „con“. Zum Zusagen genügen zwei Wörter – und zum Absagen sollte man einen Grund nennen, sonst klingt es schroff.',
            },
          },
          table: {
            headers: ['Función', 'Frase'],
            rows: [
              ['proponer', '¿Quedamos el sábado a las siete?'],
              ['proponer un sitio', '¿Quedamos en la plaza?'],
              ['preguntar si va bien', '¿Te viene bien a las ocho?'],
              ['aceptar', 'Vale, perfecto. / Me viene genial.'],
              ['rechazar con motivo', 'Uf, el sábado no puedo, trabajo.'],
              ['proponer otra cosa', '¿Y el domingo? / Mejor un poco más tarde.'],
            ],
          },
        },
        {
          id: 'es10-p4-dlg',
          type: 'DIALOGUE',
          title: 'Mensajes el miércoles',
          lines: [
            { speaker: 'Iker', text: '¿Quedamos el viernes para cenar?' },
            { speaker: 'Nadia', text: 'El viernes trabajo hasta tarde. ¿Y el sábado?' },
            { speaker: 'Iker', text: 'Por mí bien. ¿A las nueve en la plaza?' },
            { speaker: 'Nadia', text: 'Un poco antes, mejor. ¿A las ocho y media?' },
            { speaker: 'Iker', text: 'Vale. Si llueve, nos metemos en el bar de siempre.' },
            { speaker: 'Nadia', text: 'Perfecto. Si llego tarde, te aviso.' },
          ],
        },
        {
          id: 'es10-p4-info-si',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'si + presente',
          text: 'Para una condición posible, detrás de «si» va el presente – nunca el futuro, aunque en alemán sí se pueda. La otra parte de la frase puede ir en presente, en futuro o en imperativo, según lo que se quiera decir. Y no confunda «si» con «sí»: el acento distingue la condición de la afirmación.',
          translations: {
            de: {
              title: 'si + Präsens',
              text: 'Für eine mögliche Bedingung steht nach „si“ das Präsens – nie das Futur, auch wenn das Deutsche es zulässt. Der andere Satzteil kann im Präsens, im Futur oder im Imperativ stehen, je nachdem, was man sagen will. Und verwechseln Sie „si“ nicht mit „sí“: Der Akzent unterscheidet die Bedingung von der Zustimmung.',
            },
          },
          table: {
            headers: ['Condición', 'Consecuencia'],
            rows: [
              ['Si llueve,', 'nos quedamos en casa.'],
              ['Si hace buen tiempo,', 'iremos a la playa.'],
              ['Si llegas tarde,', 'avísame.'],
              ['Si no hay billetes,', 'cogeremos el autobús.'],
            ],
          },
        },
        {
          id: 'es10-p4-cloze',
          type: 'CLOZE',
          instruction: 'Complete los mensajes.',
          wordBank: ['quedamos', 'viene', 'Si', 'puedo', 'avisaré'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '¿' },
            { kind: 'GAP', gapId: 'd1', solution: ['quedamos'], width: 10 },
            { kind: 'TEXT', text: ' mañana a las seis?\n¿Te ' },
            { kind: 'GAP', gapId: 'd2', solution: ['viene'], width: 7 },
            { kind: 'TEXT', text: ' bien en la estación?\nHoy no ' },
            { kind: 'GAP', gapId: 'd3', solution: ['puedo'], width: 7 },
            { kind: 'TEXT', text: ', tengo médico.\n' },
            { kind: 'GAP', gapId: 'd4', solution: ['Si'], width: 4 },
            { kind: 'TEXT', text: ' salgo antes del trabajo, te ' },
            { kind: 'GAP', gapId: 'd5', solution: ['avisaré'], width: 9 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'es10-p4-choice',
          type: 'CHOICE',
          instruction: 'Elija la frase correcta.',
          question: '«Wenn es morgen regnet, bleiben wir zu Hause.»',
          options: [
            { id: 'x1', text: 'Si lloverá mañana, nos quedamos en casa.' },
            { id: 'x2', text: 'Si llueve mañana, nos quedamos en casa.' },
            { id: 'x3', text: 'Sí llueve mañana, nos quedamos en casa.' },
          ],
          multiple: false,
          solution: ['x2'],
          explanation:
            'Detrás de «si» no puede ir el futuro, aunque se hable de mañana: va el presente. Y «si» de condición no lleva acento.',
          explanationTranslations: {
            de: 'Nach „si“ kann kein Futur stehen, auch wenn von morgen die Rede ist: Es steht das Präsens. Und das bedingende „si“ trägt keinen Akzent.',
          },
        },
        {
          id: 'es10-p4-match',
          type: 'MATCHING',
          instruction: 'Relacione la propuesta con la respuesta.',
          left: [
            { id: 'm1', text: '¿Quedamos el jueves?' },
            { id: 'm2', text: '¿Te viene bien a las siete?' },
            { id: 'm3', text: '¿En tu casa o en la mía?' },
            { id: 'm4', text: 'Si llueve, ¿qué hacemos?' },
          ],
          right: [
            { id: 'n1', text: 'El jueves no puedo, tengo clase.' },
            { id: 'n2', text: 'Mejor media hora más tarde.' },
            { id: 'n3', text: 'En la tuya, que está más cerca.' },
            { id: 'n4', text: 'Nos metemos en el bar de la esquina.' },
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
        { id: 'es10-p5-h1', type: 'HEADING', level: 1, text: '¿Ya sabes hacerlo?' },
        {
          id: 'es10-p5-intro',
          type: 'TEXT',
          text: 'Aquí vuelve todo el capítulo: «ir a» + infinitivo, el futuro simple con sus nueve raíces, la reserva y la manera de quedar con alguien.',
          translations: {
            de: 'Hier kommt das ganze Kapitel noch einmal: „ir a“ + Infinitiv, das einfache Futur mit seinen neun Stämmen, die Buchung und die Art, sich zu verabreden.',
          },
        },
        {
          id: 'es10-p5-cloze',
          type: 'CLOZE',
          instruction: 'Complete el plan de Ana.',
          wordBank: ['vamos a', 'saldrá', 'tendremos', 'Si', 'quedaremos'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'En septiembre ' },
            { kind: 'GAP', gapId: 'g1', solution: ['vamos a'], width: 9 },
            { kind: 'TEXT', text: ' ir a Lisboa. El avión ' },
            { kind: 'GAP', gapId: 'g2', solution: ['saldrá'], width: 8 },
            { kind: 'TEXT', text: ' el viernes a las seis, así que ' },
            { kind: 'GAP', gapId: 'g3', solution: ['tendremos'], width: 11 },
            { kind: 'TEXT', text: ' toda la tarde libre. ' },
            { kind: 'GAP', gapId: 'g4', solution: ['Si'], width: 4 },
            { kind: 'TEXT', text: ' hace buen tiempo, iremos andando al mirador. El sábado ' },
            { kind: 'GAP', gapId: 'g5', solution: ['quedaremos'], width: 12 },
            { kind: 'TEXT', text: ' con unos amigos que viven allí.' },
          ],
        },
        {
          id: 'es10-p5-choice',
          type: 'CHOICE',
          instruction: 'Marque todas las frases correctas.',
          question: '¿Cuáles de estas frases son correctas?',
          options: [
            { id: 's1', text: 'Mañana vamos a hacer la maleta.' },
            { id: 's2', text: 'Mañana vamos hacer la maleta.' },
            { id: 's3', text: 'El domingo no podré venir.' },
            { id: 's4', text: 'El domingo no poderé venir.' },
          ],
          multiple: true,
          solution: ['s1', 's3'],
          explanation:
            'La «a» de «ir a» no se puede quitar, y «poder» tiene raíz propia en futuro: «podr-».',
          explanationTranslations: {
            de: 'Das „a“ von „ir a“ kann nicht wegfallen, und „poder“ hat im Futur einen eigenen Stamm: „podr-“.',
          },
        },
        {
          id: 'es10-p5-match',
          type: 'MATCHING',
          instruction: 'Relacione la pregunta con la respuesta.',
          left: [
            { id: 'a1', text: '¿Qué vais a hacer en agosto?' },
            { id: 'a2', text: '¿A qué hora sale el tren?' },
            { id: 'a3', text: '¿El desayuno está incluido?' },
            { id: 'a4', text: '¿Quedamos a las ocho?' },
          ],
          right: [
            { id: 'b1', text: 'Vamos a recorrer el norte en coche.' },
            { id: 'b2', text: 'Saldrá a las siete y media del andén cuatro.' },
            { id: 'b3', text: 'Sí, de ocho a diez y media.' },
            { id: 'b4', text: 'Mejor a las ocho y media, salgo tarde.' },
          ],
          solution: [
            { leftId: 'a1', rightId: 'b1' },
            { leftId: 'a2', rightId: 'b2' },
            { leftId: 'a3', rightId: 'b3' },
            { leftId: 'a4', rightId: 'b4' },
          ],
        },
        {
          id: 'es10-p5-ordering',
          type: 'ORDERING',
          instruction: 'Ordene los pasos de un viaje.',
          items: [
            { id: 'z1', text: 'Vamos a buscar vuelos baratos.' },
            { id: 'z2', text: 'Reservaremos el hotel esta semana.' },
            { id: 'z3', text: 'El jueves haré la maleta.' },
            { id: 'z4', text: 'El viernes cogeremos el avión de las seis.' },
            { id: 'z5', text: 'Llegaremos al hostal sobre las nueve.' },
            { id: 'z6', text: 'El sábado quedaremos con Pedro en el centro.' },
          ],
          solution: ['z1', 'z2', 'z3', 'z4', 'z5', 'z6'],
        },
        {
          id: 'es10-p5-writing',
          type: 'WRITING',
          instruction: 'Escriba sus planes.',
          prompt:
            'Cuente un viaje o un fin de semana que tiene planeado, en seis u ocho frases: ¿adónde va?, ¿cuándo?, ¿con quién?, ¿qué hará allí? Use «ir a» + infinitivo al menos dos veces, el futuro simple al menos dos veces y una frase con «si».',
          minWords: 30,
          maxWords: 120,
          aiFeedback: true,
          sampleAnswer:
            'El mes que viene voy a ir a Valencia con dos amigas. Vamos a coger el tren el viernes por la tarde y llegaremos sobre las nueve. Dormiremos en un hostal cerca de la playa, porque los hoteles del centro son carísimos. El sábado haremos una visita por el casco antiguo y por la noche quedaremos con una amiga que vive allí. Si hace buen tiempo, iremos a la playa el domingo por la mañana. Volveremos el domingo por la noche.',
        },
      ],
    },
  },
];
