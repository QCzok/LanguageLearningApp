import { CefrLevel, ExerciseType, LibraryType } from '@prisma/client';

/**
 * Lesetexte für die Bibliothek.
 *
 * Ein Text ist in Abschnitte gegliedert (meist ein Absatz je Abschnitt) statt
 * ein einzelner Fließtext-String – siehe `LibrarySection` in
 * `packages/shared`. Jeder Abschnitt kann eine Übersetzung in die
 * Muttersprache tragen (aufklappbar in der App, wie die Erklärungen im
 * Lehrwerk) sowie ein kurzes Glossar für Wörter, die über das Niveau des
 * Texts hinausgehen – die Erklärung steht dabei bewusst in derselben Sprache
 * wie der Text selbst (ein echtes Lernglossar, keine Übersetzung), das
 * funktioniert unabhängig von der eingestellten Muttersprache und bleibt so
 * für jeden Text gleich einfach zu pflegen.
 *
 * Absatzübersetzungen tragen bisher zwei Bestände: der deutsche
 * Wochenmarkt-Text in alle vier Sprachen (die Referenz für das Format) und
 * die gesamte spanische Bibliothek nach Englisch. Die englischen Texte haben
 * noch keine. Die App blendet den Übersetzungsschalter ohnehin nur dort ein,
 * wo für die Muttersprache des Lesenden tatsächlich etwas hinterlegt ist.
 *
 * Die spanische Bibliothek (`LIBRARY_SEEDS_ES`) beginnt auf B2: Wer dort
 * ankommt, verlässt gerade den Bereich, in dem man noch mit vereinfachten
 * Texten lernt, und liest hier zum ersten Mal etwas, das auch ein
 * Muttersprachler ohne Anpassung lesen würde – ein Zeitungsessay, eine
 * Kurzgeschichte. Die englische Fassung steht deshalb als ganzer Absatz
 * daneben und nicht Wort für Wort: Sie soll tragen, wenn ein langer Satz
 * kippt, und nicht das Lesen im Original ersetzen.
 */

type Translations = Partial<Record<'en' | 'es' | 'fr' | 'it', string>>;

interface GlossarySeed {
  term: string;
  explanation: string;
}

interface SectionSeed {
  text: string;
  translations?: Translations;
  glossary?: GlossarySeed[];
}

interface ExerciseSeed {
  type: ExerciseType;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface LibraryContentSeed {
  type: LibraryType;
  level: CefrLevel;
  title: string;
  summary: string;
  author: string;
  tags: string[];
  sections: SectionSeed[];
  exercises: ExerciseSeed[];
}

// ============================================================ Deutsch (Zielsprache)

export const LIBRARY_SEEDS_DE: LibraryContentSeed[] = [
  {
    type: LibraryType.ARTICLE,
    level: CefrLevel.A2,
    title: 'Ein Morgen auf dem Wochenmarkt',
    summary: 'Ein kurzer Text über einen Samstagmorgen auf dem Wochenmarkt.',
    author: 'Lingua Redaktion',
    tags: ['alltag', 'einkaufen'],
    sections: [
      {
        text: 'Jeden Samstagmorgen geht Mara zu dem Wochenmarkt in der Nähe ihrer Wohnung. Sie nimmt eine Stofftasche und einen kleinen Einkaufszettel mit.',
        translations: {
          en: 'Every Saturday morning, Mara goes to the farmers market near her flat. She takes a cloth bag and a small shopping list with her.',
          es: 'Cada sábado por la mañana, Mara va al mercado semanal cerca de su piso. Se lleva una bolsa de tela y una pequeña lista de la compra.',
          fr: 'Chaque samedi matin, Mara se rend au marché hebdomadaire près de son appartement. Elle emporte un sac en tissu et une petite liste de courses.',
          it: 'Ogni sabato mattina, Mara va al mercato settimanale vicino al suo appartamento. Porta con sé una borsa di stoffa e una piccola lista della spesa.',
        },
        glossary: [
          {
            term: 'Wochenmarkt',
            explanation:
              'ein Markt, der regelmäßig, oft einmal in der Woche, im Freien stattfindet und wo man frische Lebensmittel kaufen kann.',
          },
        ],
      },
      {
        text: 'Der Markt öffnet um acht Uhr. Zu dieser Zeit ist das Brot noch warm und die Schlange ist kurz. Mara kauft zwei Brote, ein Stück Käse und eine Schale Erdbeeren. Die Frau am Käsestand gibt ihr immer ein kleines Stück zum Probieren.',
        translations: {
          en: "The market opens at eight o'clock. At that time the bread is still warm and the queue is short. Mara buys two loaves, a piece of cheese and a box of strawberries. The woman at the cheese stall always gives her a small piece to try.",
          es: 'El mercado abre a las ocho. A esa hora el pan todavía está caliente y la cola es corta. Mara compra dos panes, un trozo de queso y una caja de fresas. La mujer del puesto de quesos siempre le da un trocito para probar.',
          fr: "Le marché ouvre à huit heures. À cette heure-là, le pain est encore chaud et la file d'attente est courte. Mara achète deux pains, un morceau de fromage et une barquette de fraises. La femme du stand de fromages lui donne toujours un petit morceau à goûter.",
          it: 'Il mercato apre alle otto. A quell’ora il pane è ancora caldo e la fila è corta. Mara compra due pagnotte, un pezzo di formaggio e una vaschetta di fragole. La donna al banco dei formaggi le dà sempre un pezzetto da assaggiare.',
        },
        glossary: [
          { term: 'die Schlange (hier)', explanation: 'mehrere Menschen, die hintereinander auf etwas warten.' },
          { term: 'probieren', explanation: 'von etwas ein kleines Stück essen, um zu wissen, wie es schmeckt.' },
        ],
      },
      {
        text: '„Was kostet der Käse?", fragt Mara.\n„Sechs Euro", sagt die Frau. „Er kommt von einem Bauernhof am See."',
        translations: {
          en: '"How much is the cheese?" Mara asks.\n"Six euros," the woman says. "It is from a farm by the lake."',
          es: '—¿Cuánto cuesta el queso? —pregunta Mara.\n—Seis euros —dice la mujer—. Es de una granja junto al lago.',
          fr: '« Combien coûte le fromage ? » demande Mara.\n« Six euros », dit la femme. « Il vient d’une ferme au bord du lac. »',
          it: '«Quanto costa il formaggio?» chiede Mara.\n«Sei euro» dice la donna. «Viene da una fattoria vicino al lago».',
        },
        glossary: [
          {
            term: 'der Bauernhof',
            explanation: 'ein Ort auf dem Land, wo Menschen Tiere halten und Pflanzen für Essen anbauen.',
          },
        ],
      },
      {
        text: 'Mara bezahlt bar. Dann setzt sie sich mit einem Kaffee auf eine Bank und beobachtet die Leute. Manche kommen mit Kindern, manche mit Hunden. Ein Mann spielt Gitarre neben dem Blumenstand.',
        translations: {
          en: 'Mara pays in cash. Then she sits on a bench with a coffee and watches the people. Some come with children, some with dogs. A man plays guitar next to the flower stall.',
          es: 'Mara paga en efectivo. Luego se sienta en un banco con un café y observa a la gente. Algunos vienen con niños, otros con perros. Un hombre toca la guitarra junto al puesto de flores.',
          fr: "Mara paie en espèces. Puis elle s'assoit sur un banc avec un café et observe les gens. Certains viennent avec des enfants, d'autres avec des chiens. Un homme joue de la guitare à côté du stand de fleurs.",
          it: 'Mara paga in contanti. Poi si siede su una panchina con un caffè e osserva la gente. Alcuni vengono con i bambini, altri con i cani. Un uomo suona la chitarra accanto al banco dei fiori.',
        },
        glossary: [
          { term: 'bar bezahlen', explanation: 'mit Geldscheinen und Münzen bezahlen, nicht mit Karte.' },
          { term: 'beobachten', explanation: 'aufmerksam anschauen, was passiert.' },
        ],
      },
      {
        text: 'Um zehn Uhr ist der Markt voll. Mara geht langsam nach Hause. Ihre Tasche ist schwer, aber sie ist glücklich. Der Samstagmorgen ist ihre liebste Zeit der Woche.',
        translations: {
          en: 'At ten o’clock the market is full. Mara walks home slowly. Her bag is heavy, but she is happy. Saturday morning is her favourite time of the week.',
          es: 'A las diez el mercado está lleno. Mara camina despacio hacia casa. Su bolsa pesa, pero está contenta. El sábado por la mañana es su momento favorito de la semana.',
          fr: 'À dix heures, le marché est plein. Mara rentre lentement chez elle. Son sac est lourd, mais elle est heureuse. Le samedi matin est son moment préféré de la semaine.',
          it: 'Alle dieci il mercato è pieno. Mara torna a casa lentamente. La sua borsa è pesante, ma lei è felice. Il sabato mattina è il suo momento preferito della settimana.',
        },
      },
    ],
    exercises: [
      {
        type: ExerciseType.MULTIPLE_CHOICE,
        question: 'Wann öffnet der Markt?',
        options: ['Um sieben Uhr', 'Um acht Uhr', 'Um neun Uhr', 'Um zehn Uhr'],
        correctIndex: 1,
        explanation: 'Im Text steht: „Der Markt öffnet um acht Uhr."',
      },
      {
        type: ExerciseType.MULTIPLE_CHOICE,
        question: 'Wie bezahlt Mara den Käse?',
        options: ['Mit Karte', 'Bar', 'Mit einem Gutschein', 'Sie bezahlt nicht'],
        correctIndex: 1,
        explanation: '„Mara bezahlt bar."',
      },
      {
        type: ExerciseType.TRUE_FALSE,
        question: 'Mara geht jeden Sonntag auf den Markt.',
        options: ['Richtig', 'Falsch'],
        correctIndex: 1,
        explanation: 'Sie geht jeden Samstagmorgen dorthin.',
      },
      {
        type: ExerciseType.OPEN,
        question: 'Beschreibe in drei Sätzen deinen eigenen Samstagmorgen auf Deutsch.',
        options: [],
        correctIndex: -1,
        explanation: 'Nutze das Präsens und Zeitangaben wie „um acht Uhr", „am Morgen".',
      },
    ],
  },
  {
    type: LibraryType.STORY,
    level: CefrLevel.B1,
    title: 'Der Leuchtturmwärter',
    summary: 'Eine kurze Geschichte über Einsamkeit, Gewohnheit und eine unerwartete Begegnung.',
    author: 'Lingua Redaktion',
    tags: ['geschichte', 'natur'],
    sections: [
      {
        text: 'Neunzehn Jahre lang kümmerte sich Tomas um das Licht am Sker Point. Er kannte den Klang jeder Welle an den Felsen, und er konnte am Flug der Möwen das Wetter erkennen.',
        glossary: [
          {
            term: 'der Leuchtturmwärter',
            explanation:
              'eine Person, die früher dafür sorgte, dass das Licht in einem Leuchtturm nachts brannte, damit Schiffe sicher fahren konnten.',
          },
          { term: 'die Möwe', explanation: 'ein weißgrauer Vogel, der am Meer lebt.' },
        ],
      },
      {
        text: 'Die Routine änderte sich nie. In der Dämmerung stieg er die zweiundneunzig Stufen hinauf, prüfte die Lampe, trug das Datum ins Logbuch ein und stieg wieder hinunter. Einmal im Monat brachte ein Boot Vorräte und Briefe, die selten für ihn waren.',
        glossary: [
          { term: 'die Dämmerung', explanation: 'die Zeit, in der es langsam dunkel wird, am Abend.' },
          {
            term: 'das Logbuch',
            explanation: 'ein Buch, in dem wichtige Ereignisse und Daten regelmäßig aufgeschrieben werden.',
          },
          { term: 'die Vorräte', explanation: 'Essen und andere Dinge, die man für später sammelt und aufbewahrt.' },
        ],
      },
      {
        text: 'Dann, an einem grauen Dienstag im November, fand er ein Mädchen schlafend auf dem Landesteg.',
        glossary: [
          { term: 'der Landesteg', explanation: 'eine schmale Plattform am Wasser, an der Boote anlegen können.' },
        ],
      },
      {
        text: 'Sie sagte, sie heiße Ines und ihr Boot habe eine Panne gehabt. Sie war vielleicht zwanzig. Tomas gab ihr trockene Kleidung und Suppe und erwartete, dass sie mit der nächsten Flut abreisen würde.',
        glossary: [
          {
            term: 'die Panne',
            explanation: 'ein technisches Problem, durch das etwas (z. B. ein Boot oder Auto) nicht mehr funktioniert.',
          },
          { term: 'die Flut', explanation: 'wenn das Meerwasser steigt und näher an das Land kommt.' },
        ],
      },
      {
        text: 'Sie blieb elf Tage. Sie stellte Fragen, die ihm seit Jahren niemand gestellt hatte: warum er hierher gekommen sei, ob er das Festland vermisse, was er jeden Abend ins Logbuch schreibe. Er stellte fest, dass er Antworten hatte, und dass es sie ein wenig veränderte, sie laut auszusprechen.',
        glossary: [
          { term: 'das Festland', explanation: 'das große Land, im Gegensatz zu einer kleinen Insel.' },
          { term: 'vermissen', explanation: 'traurig sein, weil jemand oder etwas nicht da ist.' },
        ],
      },
      {
        text: 'Als das Reparaturboot endlich kam, schüttelte Ines ihm auf dem Landesteg die Hand.\n„Du solltest mehr schreiben als nur das Datum", sagte sie.',
      },
      {
        text: 'An diesem Abend stieg Tomas die zweiundneunzig Stufen hinauf, prüfte die Lampe und öffnete das Logbuch. Unter das Datum schrieb er zum ersten Mal einen vollständigen Satz.',
      },
    ],
    exercises: [
      {
        type: ExerciseType.MULTIPLE_CHOICE,
        question: 'Wie lange arbeitete Tomas schon am Leuchtturm?',
        options: ['Neun Jahre', 'Elf Jahre', 'Neunzehn Jahre', 'Zweiundneunzig Jahre'],
        correctIndex: 2,
        explanation: '„Neunzehn Jahre lang kümmerte sich Tomas um das Licht am Sker Point."',
      },
      {
        type: ExerciseType.MULTIPLE_CHOICE,
        question: 'Was meint Ines mit „Du solltest mehr schreiben als nur das Datum"?',
        options: [
          'Er soll für seinen Arbeitgeber ein besseres Logbuch führen.',
          'Er soll seine eigenen Gedanken und sein Leben festhalten, nicht nur Fakten.',
          'Er soll Briefe ans Festland schreiben.',
          'Er soll schneller schreiben lernen.',
        ],
        correctIndex: 1,
        explanation:
          'Der letzte Absatz zeigt die Wirkung: Er schreibt zum ersten Mal einen ganzen Satz über sich.',
      },
      {
        type: ExerciseType.TRUE_FALSE,
        question: 'Ines reiste mit der nächsten Flut ab.',
        options: ['Richtig', 'Falsch'],
        correctIndex: 1,
        explanation: 'Sie blieb elf Tage.',
      },
      {
        type: ExerciseType.OPEN,
        question: 'Was verändert sich für Tomas durch die Begegnung? Antworte in 3–4 Sätzen.',
        options: [],
        correctIndex: -1,
        explanation: 'Achte auf Präteritum und Plusquamperfekt zur Unterscheidung der Zeitebenen.',
      },
    ],
  },
  {
    type: LibraryType.ARTICLE,
    level: CefrLevel.B2,
    title: 'Warum Städte leiser werden',
    summary: 'Ein Sachtext über Elektromobilität, Stadtplanung und die Folgen für den Alltag.',
    author: 'Lingua Redaktion',
    tags: ['gesellschaft', 'umwelt'],
    sections: [
      {
        text: 'Wer nach einem Jahrzehnt im Ausland in eine europäische Innenstadt zurückkehrt, bemerkt meist zuerst eines: Es ist leiser geworden.',
        glossary: [{ term: 'das Jahrzehnt', explanation: 'ein Zeitraum von zehn Jahren.' }],
      },
      {
        text: 'Ein Teil der Erklärung liegt auf der Hand. Elektrofahrzeuge erzeugen bei niedriger Geschwindigkeit nur einen Bruchteil des Lärms von Verbrennungsmotoren, und Städte haben ihre Busflotten schneller umgerüstet, als private Fahrer ihre Autos ersetzt haben. Ingenieure weisen jedoch darauf hin, dass der Effekt ungleich verteilt ist. Oberhalb von etwa 30 km/h dominieren Reifen- und Windgeräusche, sodass eine Autobahn mit Elektroautos ganz ähnlich klingt wie eine mit Benzinern.',
        glossary: [
          {
            term: 'auf der Hand liegen',
            explanation: 'so klar und offensichtlich sein, dass man es leicht verstehen kann.',
          },
          { term: 'der Bruchteil', explanation: 'ein sehr kleiner Teil von etwas.' },
          {
            term: 'der Verbrennungsmotor',
            explanation: 'ein Motor, der durch das Verbrennen von Benzin oder Diesel Energie erzeugt.',
          },
          { term: 'umrüsten', explanation: 'Fahrzeuge oder Geräte technisch verändern, z. B. von Benzin auf Strom umstellen.' },
        ],
      },
      {
        text: 'Der größere Wandel ist wohl weniger technischer als regulatorischer Natur. Umweltzonen, reduzierte Tempolimits und die Umwandlung von Durchgangsstraßen in Wohnstraßen haben verändert, wie sich der Verkehr bewegt, nicht nur, womit er fährt. Forscher in Barcelona maßen in Straßen, die im Rahmen des städtischen Superblock-Programms umgestaltet wurden, einen Rückgang von mehreren Dezibel – ein Unterschied, groß genug, um als etwa halb so laut wahrgenommen zu werden.',
        glossary: [
          {
            term: 'die Umweltzone',
            explanation: 'ein Bereich in einer Stadt, in dem nur bestimmte, meist wenig umweltschädliche Fahrzeuge fahren dürfen.',
          },
          { term: 'die Durchgangsstraße', explanation: 'eine Straße, die viele Autos nutzen, um schnell durch ein Gebiet zu fahren.' },
          { term: 'das Dezibel', explanation: 'eine Maßeinheit für Lautstärke.' },
        ],
      },
      {
        text: 'Nicht alle begrüßen die Veränderung. Verbände für blinde und sehbehinderte Fußgänger warnten früh davor, dass nahezu geräuschlose Fahrzeuge schwerer wahrzunehmen sind, und Vorschriften in der EU und anderswo schreiben inzwischen künstliche Geräusche bei niedriger Geschwindigkeit vor. Andere argumentieren, dass leisere Straßen die Gentrifizierung beschleunigen und ohnehin begehrte Viertel noch teurer machen.',
        glossary: [
          { term: 'der Verband', explanation: 'eine Organisation, die die Interessen einer bestimmten Gruppe von Menschen vertritt.' },
          {
            term: 'die Gentrifizierung',
            explanation: 'ein Prozess, bei dem ein Stadtviertel aufgewertet wird und dadurch für viele Menschen zu teuer wird.',
          },
        ],
      },
      {
        text: 'Klar ist: Lärm, lange als unvermeidliches Nebenprodukt des Stadtlebens hingenommen, ist zu etwas geworden, worüber Städte glauben, entscheiden zu können.',
        glossary: [
          {
            term: 'das Nebenprodukt',
            explanation: 'etwas, das zusätzlich bei einem Vorgang entsteht, ohne dass es das eigentliche Ziel war.',
          },
          { term: 'hinnehmen', explanation: 'etwas akzeptieren, auch wenn man es nicht ändern kann oder will.' },
        ],
      },
    ],
    exercises: [
      {
        type: ExerciseType.MULTIPLE_CHOICE,
        question: 'Warum werden laut dem Text Autobahnen durch Elektroautos nicht leiser?',
        options: [
          'Elektroautos sind bei hoher Geschwindigkeit lauter.',
          'Oberhalb von etwa 30 km/h dominieren Reifen- und Windgeräusche.',
          'Auf Autobahnen gibt es noch keine Elektroautos.',
          'Autobahnbeläge verstärken Motorengeräusche.',
        ],
        correctIndex: 1,
        explanation: 'Der zweite Absatz nennt genau diese Schwelle.',
      },
      {
        type: ExerciseType.MULTIPLE_CHOICE,
        question: 'Was hatte laut Text die größere Wirkung?',
        options: [
          'Die Technik der Fahrzeuge',
          'Regulierung und Straßengestaltung',
          'Das Verhalten einzelner Fahrer',
          'Die Wetterbedingungen in Innenstädten',
        ],
        correctIndex: 1,
        explanation: '„Der größere Wandel ist wohl weniger technischer als regulatorischer Natur."',
      },
      {
        type: ExerciseType.TRUE_FALSE,
        question: 'Der Text stellt leisere Straßen als durchweg positiv dar.',
        options: ['Richtig', 'Falsch'],
        correctIndex: 1,
        explanation: 'Es werden Einwände genannt: Sicherheit für blinde Menschen und Gentrifizierung.',
      },
      {
        type: ExerciseType.OPEN,
        question: 'Fasse das Hauptargument des Textes in zwei Sätzen zusammen und nenne einen Gegeneinwand.',
        options: [],
        correctIndex: -1,
        explanation: 'Nützliche Wendungen: „Das Hauptargument ist, dass …", „Kritiker weisen jedoch darauf hin, dass …"',
      },
    ],
  },
];

// ============================================================ Englisch (Zielsprache)

export const LIBRARY_SEEDS_EN: LibraryContentSeed[] = [
  {
    type: LibraryType.ARTICLE,
    level: CefrLevel.A2,
    title: 'A Day at the Farmers Market',
    summary: 'Ein kurzer Text über einen Samstagmorgen auf dem Wochenmarkt.',
    author: 'Lingua Redaktion',
    tags: ['alltag', 'einkaufen'],
    sections: [
      {
        text: 'Every Saturday morning, Mara walks to the farmers market near her flat. She takes a cloth bag and a small list.',
        glossary: [
          { term: 'flat', explanation: 'a set of rooms for living in, usually on one floor of a building (British English for "apartment").' },
        ],
      },
      {
        text: 'The market opens at eight. At that time, the bread is still warm and the queue is short. Mara buys two loaves, a piece of cheese and a box of strawberries. The woman at the cheese stand always gives her a small piece to try.',
        glossary: [
          { term: 'queue', explanation: 'a line of people waiting for something.' },
          { term: 'loaf (plural: loaves)', explanation: 'a shaped piece of baked bread.' },
        ],
      },
      {
        text: '"How much is the cheese?" Mara asks.\n"Six euros," the woman says. "It is from a farm near the lake."',
      },
      {
        text: 'Mara pays in cash. Then she sits on a bench with a coffee and watches the people. Some come with children, some with dogs. A man plays the guitar next to the flower stand.',
        glossary: [{ term: 'in cash', explanation: 'paying with paper money and coins, not by card.' }],
      },
      {
        text: 'At ten o’clock the market is full. Mara walks home slowly. Her bag is heavy, but she is happy. Saturday morning is her favourite time of the week.',
      },
    ],
    exercises: [
      {
        type: ExerciseType.MULTIPLE_CHOICE,
        question: 'When does the market open?',
        options: ['At seven', 'At eight', 'At nine', 'At ten'],
        correctIndex: 1,
        explanation: 'Im Text steht: "The market opens at eight."',
      },
      {
        type: ExerciseType.MULTIPLE_CHOICE,
        question: 'How does Mara pay for the cheese?',
        options: ['By card', 'In cash', 'With a voucher', 'She does not pay'],
        correctIndex: 1,
        explanation: '"Mara pays in cash."',
      },
      {
        type: ExerciseType.TRUE_FALSE,
        question: 'Mara goes to the market every Sunday.',
        options: ['Richtig', 'Falsch'],
        correctIndex: 1,
        explanation: 'Sie geht jeden Samstagmorgen ("Every Saturday morning").',
      },
      {
        type: ExerciseType.OPEN,
        question: 'Beschreibe in drei Sätzen deinen eigenen Samstagmorgen auf Englisch.',
        options: [],
        correctIndex: -1,
        explanation: 'Nutze das Present Simple und Zeitangaben wie "at eight", "in the morning".',
      },
    ],
  },
  {
    type: LibraryType.STORY,
    level: CefrLevel.B1,
    title: 'The Lighthouse Keeper',
    summary: 'Eine kurze Geschichte über Einsamkeit, Gewohnheit und eine unerwartete Begegnung.',
    author: 'Lingua Redaktion',
    tags: ['geschichte', 'natur'],
    sections: [
      {
        text: 'For nineteen years, Tomas had kept the light on Sker Point. He knew the sound of every wave against the rocks, and he could tell the weather by the way the gulls flew.',
        glossary: [
          {
            term: 'lighthouse keeper',
            explanation: 'a person who used to look after a lighthouse and keep its light working so ships could travel safely.',
          },
          { term: 'gull', explanation: 'a grey and white bird that lives near the sea.' },
        ],
      },
      {
        text: 'The routine never changed. He climbed the ninety-two steps at dusk, checked the lamp, wrote the date in the logbook, and climbed down again. Once a month, a boat brought supplies and letters that were rarely for him.',
        glossary: [
          { term: 'dusk', explanation: 'the time of day just before it gets dark.' },
          { term: 'logbook', explanation: 'a book where important events or dates are regularly written down.' },
        ],
      },
      {
        text: 'Then, on a grey Tuesday in November, he found a girl asleep on the landing stage.',
        glossary: [{ term: 'landing stage', explanation: 'a platform by the water where boats can stop.' }],
      },
      {
        text: 'She said her name was Ines and that her boat had failed. She was perhaps twenty. Tomas gave her dry clothes and soup, and expected her to leave with the next tide.',
        glossary: [{ term: 'tide', explanation: 'the regular rise and fall of the sea.' }],
      },
      {
        text: 'She stayed eleven days. She asked questions he had not been asked in years: why he had come, whether he missed the mainland, what he wrote in the logbook every evening. He found that he had answers, and that saying them aloud changed them slightly.',
        glossary: [{ term: 'mainland', explanation: 'the main area of land of a country, not an island.' }],
      },
      {
        text: 'When the repair boat finally came, Ines shook his hand at the landing stage.\n"You should write more than the date," she said.',
      },
      {
        text: 'That evening Tomas climbed the ninety-two steps, checked the lamp, and opened the logbook. Under the date he wrote a full sentence for the first time.',
      },
    ],
    exercises: [
      {
        type: ExerciseType.MULTIPLE_CHOICE,
        question: 'How long had Tomas worked at the lighthouse?',
        options: ['Nine years', 'Eleven years', 'Nineteen years', 'Ninety-two years'],
        correctIndex: 2,
        explanation: '"For nineteen years, Tomas had kept the light on Sker Point."',
      },
      {
        type: ExerciseType.MULTIPLE_CHOICE,
        question: 'What does Ines mean by "You should write more than the date"?',
        options: [
          'He should keep a better logbook for his employer.',
          'He should record his own thoughts and life, not only facts.',
          'He should write letters to the mainland.',
          'He should learn to write faster.',
        ],
        correctIndex: 1,
        explanation:
          'Der letzte Absatz zeigt die Wirkung: Er schreibt zum ersten Mal einen ganzen Satz über sich.',
      },
      {
        type: ExerciseType.TRUE_FALSE,
        question: 'Ines left with the next tide.',
        options: ['Richtig', 'Falsch'],
        correctIndex: 1,
        explanation: 'Sie blieb elf Tage ("She stayed eleven days").',
      },
      {
        type: ExerciseType.OPEN,
        question: 'Was verändert sich für Tomas durch die Begegnung? Antworte in 3–4 Sätzen.',
        options: [],
        correctIndex: -1,
        explanation: 'Achte auf Past Simple und Past Perfect zur Unterscheidung der Zeitebenen.',
      },
    ],
  },
  {
    type: LibraryType.ARTICLE,
    level: CefrLevel.B2,
    title: 'Why Cities Are Getting Quieter',
    summary: 'Ein Sachtext über Elektromobilität, Stadtplanung und die Folgen für den Alltag.',
    author: 'Lingua Redaktion',
    tags: ['gesellschaft', 'umwelt'],
    sections: [
      {
        text: 'Anyone who has returned to a European city centre after a decade away tends to notice the same thing before they notice anything else: it is quieter.',
        glossary: [{ term: 'decade', explanation: 'a period of ten years.' }],
      },
      {
        text: 'Part of the explanation is obvious. Electric vehicles produce a fraction of the noise of combustion engines at low speeds, and cities have been replacing bus fleets faster than private drivers have replaced their cars. But engineers point out that the effect is not evenly distributed. Above roughly 30 km/h, tyre and wind noise dominate, so a motorway lined with electric cars sounds much like a motorway lined with petrol ones.',
        glossary: [
          { term: 'a fraction of', explanation: 'a small part of something, much less than the whole.' },
          { term: 'combustion engine', explanation: 'an engine that creates power by burning fuel such as petrol or diesel.' },
          { term: 'fleet', explanation: 'a group of vehicles, such as buses, owned by one organisation.' },
        ],
      },
      {
        text: "The larger shift is arguably not technological but regulatory. Low-emission zones, reduced speed limits and the conversion of through-roads into residential streets have changed how traffic moves rather than merely what it runs on. Researchers in Barcelona measured a drop of several decibels in streets converted under the city's superblock programme, a change large enough to be perceived as roughly halving the loudness.",
        glossary: [
          { term: 'low-emission zone', explanation: 'an area of a city where only vehicles that pollute little are allowed to drive.' },
          { term: 'through-road', explanation: 'a road that many cars use to pass quickly through an area.' },
          { term: 'decibel', explanation: 'a unit used to measure how loud a sound is.' },
        ],
      },
      {
        text: 'Not everyone welcomes the change. Associations for blind and partially sighted pedestrians warned early that near-silent vehicles are harder to detect, and regulations in the EU and elsewhere now require artificial sound at low speeds. Others argue that quieter streets accelerate gentrification, making already desirable districts more expensive.',
        glossary: [
          { term: 'pedestrian', explanation: 'a person walking, especially in a street or town.' },
          {
            term: 'gentrification',
            explanation:
              'a process in which a neighbourhood is improved and, as a result, becomes too expensive for many of the people who used to live there.',
          },
        ],
      },
      {
        text: 'What is clear is that noise, long treated as an unavoidable by-product of urban life, has become something cities believe they can decide about.',
        glossary: [
          { term: 'by-product', explanation: 'something extra that is produced as a result of a process, without being the main goal.' },
        ],
      },
    ],
    exercises: [
      {
        type: ExerciseType.MULTIPLE_CHOICE,
        question: 'Why does the article say electric cars do not make motorways quieter?',
        options: [
          'Electric cars are louder at high speed.',
          'Above about 30 km/h, tyre and wind noise dominate.',
          'Motorways have no electric cars yet.',
          'Motorway surfaces amplify engine noise.',
        ],
        correctIndex: 1,
        explanation: 'Der zweite Absatz nennt genau diese Schwelle.',
      },
      {
        type: ExerciseType.MULTIPLE_CHOICE,
        question: 'According to the text, what has had the larger effect?',
        options: [
          'The technology of the vehicles',
          'Regulation and street design',
          'The behaviour of individual drivers',
          'Weather conditions in city centres',
        ],
        correctIndex: 1,
        explanation: '"The larger shift is arguably not technological but regulatory."',
      },
      {
        type: ExerciseType.TRUE_FALSE,
        question: 'The article presents quieter streets as entirely positive.',
        options: ['Richtig', 'Falsch'],
        correctIndex: 1,
        explanation: 'Es werden Einwände genannt: Sicherheit für blinde Menschen und Gentrifizierung.',
      },
      {
        type: ExerciseType.OPEN,
        question: 'Fasse das Hauptargument des Textes in zwei Sätzen zusammen und nenne einen Gegeneinwand.',
        options: [],
        correctIndex: -1,
        explanation: 'Nützliche Wendungen: "The main argument is that …", "However, critics point out …"',
      },
    ],
  },
];

// ============================================================ Spanisch (Zielsprache)

export const LIBRARY_SEEDS_ES: LibraryContentSeed[] = [
  {
    type: LibraryType.ARTICLE,
    level: CefrLevel.B2,
    title: 'El renacer de los pueblos vacíos',
    summary: 'Un reportaje sobre la despoblación rural en España y los intentos, no siempre exitosos, de revertirla.',
    author: 'Redacción Lingua',
    tags: ['dorf', 'gesellschaft'],
    sections: [
      {
        text: 'Hace quince años, el ayuntamiento de Fuenteguinaldo cerró la única escuela del pueblo: quedaban tres alumnos matriculados. El mes pasado volvió a abrir sus puertas, esta vez con once.',
        translations: {
          en: "Fifteen years ago, the town council of Fuenteguinaldo closed the village's only school: three pupils were still enrolled. Last month it opened its doors again, this time with eleven.",
        },
        glossary: [
          {
            term: 'el ayuntamiento',
            explanation: 'la institución que gobierna un pueblo o una ciudad, y también el edificio donde tiene su sede.',
          },
          {
            term: 'matricular',
            explanation: 'inscribir oficialmente a alguien en un colegio, una universidad o un curso.',
          },
        ],
      },
      {
        text: 'Fuenteguinaldo no es un caso aislado. Desde los años sesenta, millones de personas abandonaron el campo español para instalarse en Madrid, Barcelona o Bilbao, atraídas primero por la industria y después por los servicios. El resultado es lo que los geógrafos bautizaron como «la España vaciada»: una extensión enorme del interior peninsular con una densidad de población comparable a la de Laponia.',
        translations: {
          en: "Fuenteguinaldo is not an isolated case. Since the 1960s, millions of people have left the Spanish countryside to settle in Madrid, Barcelona or Bilbao, drawn first by industry and later by the service sector. The result is what geographers christened 'emptied Spain': a vast stretch of the interior of the peninsula with a population density comparable to Lapland's.",
        },
        glossary: [
          { term: 'instalarse', explanation: 'irse a vivir a un lugar de forma más o menos permanente.' },
          {
            term: 'la densidad de población',
            explanation: 'el número de habitantes que corresponde a cada kilómetro cuadrado de un territorio.',
          },
          {
            term: 'bautizar (aquí)',
            explanation: 'darle un nombre nuevo a algo, normalmente porque describe bien lo que es.',
          },
        ],
      },
      {
        text: 'Lo que ha cambiado en los últimos años no es tanto el paisaje como la conexión a internet. La llegada de la fibra óptica a comarcas que antes apenas tenían cobertura para hacer una llamada, sumada a la normalización del teletrabajo tras la pandemia, ha hecho posible algo impensable hace una generación: seguir cobrando un sueldo urbano sin vivir en la ciudad.',
        translations: {
          en: 'What has changed in recent years is not so much the landscape as the internet connection. The arrival of fibre optics in districts that previously barely had the coverage to make a phone call, together with remote work becoming normal after the pandemic, has made something possible that was unthinkable a generation ago: going on drawing a city salary without living in the city.',
        },
        glossary: [
          { term: 'la fibra óptica', explanation: 'un tipo de cable que permite una conexión a internet muy rápida.' },
          {
            term: 'la comarca',
            explanation: 'una región formada por varios pueblos cercanos que comparten características geográficas o históricas.',
          },
          {
            term: 'el teletrabajo',
            explanation: 'la forma de trabajar desde casa u otro lugar, conectado por internet, en vez de acudir a una oficina.',
          },
        ],
      },
      {
        text: 'Los alcaldes de la zona son los primeros en pedir prudencia. Un puñado de nuevos vecinos no basta para mantener abierto un centro de salud ni una línea de autobús, y muchos de los pueblos que ganan población siguen perdiendo, en paralelo, a sus habitantes de más edad. A eso se suma la falta de vivienda en alquiler: hay casas vacías, pero sus dueños no siempre viven cerca ni tienen prisa por decidir qué hacer con ellas.',
        translations: {
          en: 'The mayors of the area are the first to urge caution. A handful of new residents is not enough to keep a health centre or a bus route open, and many of the villages that are gaining population are at the same time still losing their oldest inhabitants. On top of that comes the shortage of rental housing: there are empty houses, but their owners do not always live nearby, nor are they in any hurry to decide what to do with them.',
        },
        glossary: [
          { term: 'el alcalde', explanation: 'la persona elegida para dirigir el ayuntamiento de un pueblo o una ciudad.' },
          { term: 'un puñado de', explanation: 'una cantidad pequeña de personas o cosas.' },
          { term: 'la vivienda', explanation: 'una casa o un piso en el que vive una persona o una familia.' },
        ],
      },
      {
        text: 'En Fuenteguinaldo nadie habla todavía de haber revertido décadas de éxodo rural. Pero la escuela vuelve a tener ruido de recreo, y eso, después de tanto silencio, ya se celebra como una buena noticia.',
        translations: {
          en: 'In Fuenteguinaldo nobody is talking yet about having reversed decades of rural exodus. But the school has the noise of break time again, and after so much silence that alone is being welcomed as good news.',
        },
        glossary: [
          { term: 'revertir', explanation: 'hacer que un proceso vuelva al estado en el que estaba antes.' },
          {
            term: 'el éxodo',
            explanation: 'la salida de un gran número de personas de un lugar, generalmente en busca de mejores condiciones de vida.',
          },
          { term: 'el recreo', explanation: 'el tiempo de descanso entre las clases en un colegio.' },
        ],
      },
    ],
    exercises: [
      {
        type: ExerciseType.MULTIPLE_CHOICE,
        question: '¿Qué diferencia hay entre el cierre y la reapertura de la escuela de Fuenteguinaldo?',
        options: [
          'La escuela cerró con once alumnos y reabrió con tres.',
          'La escuela cerró con tres alumnos y reabrió con once.',
          'La escuela nunca llegó a cerrar.',
          'La escuela cerró y se convirtió en un centro de salud.',
        ],
        correctIndex: 1,
        explanation: 'El texto dice que al cerrar «quedaban tres alumnos matriculados», y que reabrió «con once».',
      },
      {
        type: ExerciseType.MULTIPLE_CHOICE,
        question: 'Según el texto, ¿qué papel ha tenido la fibra óptica en este cambio?',
        options: [
          'Ha sustituido a la agricultura como principal actividad económica.',
          'Ha permitido que la gente trabaje para empresas urbanas sin vivir en la ciudad.',
          'Ha servido sobre todo para atraer turistas a los pueblos.',
          'Ha reducido el precio de la vivienda en el campo.',
        ],
        correctIndex: 1,
        explanation:
          'El texto señala que la fibra óptica, junto con el teletrabajo, permite «seguir cobrando un sueldo urbano sin vivir en la ciudad».',
      },
      {
        type: ExerciseType.TRUE_FALSE,
        question: 'El texto presenta la repoblación de estos pueblos como un proceso ya resuelto.',
        options: ['Verdadero', 'Falso'],
        correctIndex: 1,
        explanation:
          'Los alcaldes piden prudencia: pocos vecinos nuevos no bastan para mantener los servicios, y muchos pueblos siguen perdiendo población de más edad.',
      },
      {
        type: ExerciseType.OPEN,
        question:
          'Según el texto, ¿qué dos obstáculos dificultan que más familias se muden a estos pueblos? Explica cada uno en una frase.',
        options: [],
        correctIndex: -1,
        explanation:
          'Fíjate en el cuarto párrafo: la falta de servicios públicos (centro de salud, línea de autobús) y la falta de vivienda en alquiler.',
      },
    ],
  },
  {
    type: LibraryType.STORY,
    level: CefrLevel.B2,
    title: 'El cuaderno de recetas',
    summary: 'Una historia breve sobre tres generaciones de mujeres, una cocina y un cuaderno manchado de aceite.',
    author: 'Redacción Lingua',
    tags: ['familie', 'essen'],
    sections: [
      {
        text: 'El cuaderno tiene las tapas de hule y las esquinas redondeadas de tanto abrirse. En la primera página, con una letra picuda que ya casi nadie usa, pone: «Recetas de la abuela Pilar, para cuando yo falte».',
        translations: {
          en: "The notebook has oilcloth covers and corners rounded off from being opened so often. On the first page, in a spiky hand that almost nobody writes in any more, it says: 'Grandma Pilar's recipes, for when I'm gone.'",
        },
        glossary: [
          {
            term: 'el hule',
            explanation: 'un material impermeable, a menudo de plástico, que se usa para cubrir mesas o cuadernos.',
          },
          { term: 'faltar (aquí)', explanation: 'morir; dejar de estar presente en la vida de alguien.' },
        ],
      },
      {
        text: 'Pilar lo empezó a los veinte años, recién casada, porque su suegra le dictaba las cantidades de memoria y ella no confiaba en la suya. «Ajo, al ojo. Sal, la que pida el guiso.» Con los años fue añadiendo sus propias notas al margen: «más despacio», «con el fuego bajo», «a Andrés no le gusta tan picante».',
        translations: {
          en: "Pilar started it at twenty, newly married, because her mother-in-law would dictate the quantities from memory and she did not trust her own. 'Garlic, by eye. Salt, however much the stew asks for.' Over the years she added notes of her own in the margin: 'more slowly', 'on a low flame', 'Andrés doesn't like it this spicy'.",
        },
        glossary: [
          { term: 'la suegra', explanation: 'la madre del marido o de la mujer de una persona.' },
          {
            term: 'el guiso',
            explanation: 'un plato de cocina, generalmente de carne o legumbres, cocinado a fuego lento con salsa.',
          },
          { term: 'al margen', explanation: 'en el borde de una página, fuera del texto principal.' },
        ],
      },
      {
        text: 'Cuando Pilar murió, el cuaderno pasó a su hija Marisa, que durante años lo tuvo guardado en un cajón sin abrirlo. Le dolía demasiado la letra de su madre para usarlo como un libro de cocina cualquiera.',
        translations: {
          en: "When Pilar died, the notebook passed to her daughter Marisa, who kept it shut away in a drawer for years without opening it. Her mother's handwriting hurt too much for her to use it as just another cookery book.",
        },
        glossary: [
          { term: 'el cajón', explanation: 'una caja que se abre y se cierra deslizándola, dentro de un mueble.' },
        ],
      },
      {
        text: 'Marisa lo sacó por fin la Nochebuena en que su hija Elena, de dieciséis años, le pidió ayuda para hacer las croquetas «como las de la bisabuela». Cocinaron juntas por primera vez en mucho tiempo, siguiendo instrucciones que no explicaban nada y lo daban todo por sabido.',
        translations: {
          en: "Marisa finally took it out on the Christmas Eve when her sixteen-year-old daughter Elena asked for help making the croquettes 'like great-grandma's'. They cooked together for the first time in a long while, following instructions that explained nothing and took everything for granted.",
        },
        glossary: [
          { term: 'la Nochebuena', explanation: 'la noche del 24 de diciembre, víspera de Navidad.' },
          { term: 'la bisabuela', explanation: 'la madre de la abuela o del abuelo de una persona.' },
          {
            term: 'dar algo por sabido',
            explanation: 'no explicar algo porque se supone que la otra persona ya lo conoce.',
          },
        ],
      },
      {
        text: 'Las croquetas les salieron demasiado líquidas la primera vez, y quemadas la segunda. A la tercera, Elena entendió que «al ojo» no significaba «sin pensar», sino algo que solo se aprende con las manos, repitiendo el mismo gesto muchas veces.',
        translations: {
          en: "The croquettes came out too runny the first time, and burnt the second. On the third, Elena understood that 'by eye' did not mean 'without thinking', but something you can only learn with your hands, by repeating the same movement many times over.",
        },
      },
      {
        text: 'Ahora Elena tiene su propio cuaderno, uno nuevo, de tapas azules. Copia en él las recetas de Pilar, pero también añade las suyas, y dibuja pequeñas flechas hacia los márgenes: «esto se puede hacer sin gluten», «mi madre le pone más ajo».',
        translations: {
          en: "Now Elena has a notebook of her own, a new one with blue covers. She copies Pilar's recipes into it, but she adds her own as well, and draws little arrows out to the margins: 'this can be made gluten-free', 'my mother puts more garlic in'.",
        },
        glossary: [
          { term: 'la flecha', explanation: 'un símbolo con forma de línea y punta que señala una dirección.' },
        ],
      },
      {
        text: 'El cuaderno viejo, el de tapas de hule, ha vuelto al cajón. Pero esta vez no es porque nadie quiera abrirlo, sino porque ya ha hecho su trabajo: enseñar a alguien a cocinar sin necesitarlo.',
        translations: {
          en: 'The old notebook, the one with the oilcloth covers, has gone back into the drawer. But this time it is not because nobody wants to open it; it is because it has already done its job: teaching someone to cook without it.',
        },
      },
    ],
    exercises: [
      {
        type: ExerciseType.MULTIPLE_CHOICE,
        question: '¿Por qué Pilar empezó a escribir el cuaderno de recetas?',
        options: [
          'Porque quería publicar un libro de cocina.',
          'Porque no confiaba en su memoria y quería anotar las cantidades que le dictaba su suegra.',
          'Porque se lo pidió su hija Marisa.',
          'Porque trabajaba como cocinera profesional.',
        ],
        correctIndex: 1,
        explanation:
          'El texto dice que lo empezó «porque su suegra le dictaba las cantidades de memoria y ella no confiaba en la suya».',
      },
      {
        type: ExerciseType.MULTIPLE_CHOICE,
        question: '¿Por qué Marisa no usó el cuaderno durante años?',
        options: [
          'Porque no sabía cocinar.',
          'Porque el cuaderno se había perdido.',
          'Porque le dolía demasiado ver la letra de su madre.',
          'Porque prefería recetas más modernas.',
        ],
        correctIndex: 2,
        explanation: '«Le dolía demasiado la letra de su madre para usarlo como un libro de cocina cualquiera.»',
      },
      {
        type: ExerciseType.TRUE_FALSE,
        question: 'A Elena le salieron perfectas las croquetas la primera vez que las hizo.',
        options: ['Verdadero', 'Falso'],
        correctIndex: 1,
        explanation:
          'Le salieron demasiado líquidas la primera vez y quemadas la segunda; solo a la tercera consiguió hacerlas bien.',
      },
      {
        type: ExerciseType.OPEN,
        question:
          '¿Qué crees que significa la expresión «al ojo» en una receta? Explica tu respuesta con tus propias palabras, en dos o tres frases.',
        options: [],
        correctIndex: -1,
        explanation:
          'La historia sugiere que es una medida que no se puede escribir con números exactos: solo se aprende practicando, con las manos.',
      },
    ],
  },
  {
    type: LibraryType.ARTICLE,
    level: CefrLevel.B2,
    title: 'Cuando el teléfono decide por ti',
    summary: 'Un artículo sobre cómo los algoritmos de recomendación moldean lo que vemos y compramos sin que nos demos cuenta.',
    author: 'Redacción Lingua',
    tags: ['technologie', 'gesellschaft'],
    sections: [
      {
        text: 'Abres el teléfono para comprobar la hora y, veinte minutos después, sigues ahí, mirando vídeos que no recuerdas haber elegido. No ha sido casualidad: alguien ha diseñado esa aplicación precisamente para que ocurra.',
        translations: {
          en: "You open your phone to check the time and, twenty minutes later, you are still there, watching videos you don't remember choosing. It was no accident: somebody designed that app precisely so that it would happen.",
        },
        glossary: [
          { term: 'la casualidad', explanation: 'algo que ocurre sin haber sido planeado ni buscado por nadie.' },
        ],
      },
      {
        text: 'Detrás de cada red social hay un sistema de recomendación: un programa que analiza qué contenidos has visto antes, cuánto tiempo te has quedado en cada uno y en qué momento has dejado de mirar. Con esos datos, predice qué es más probable que te haga quedarte un minuto más, y te lo enseña primero.',
        translations: {
          en: 'Behind every social network there is a recommendation system: a program that analyses which content you have watched before, how long you stayed with each item and at what point you stopped looking. From that data it predicts what is most likely to keep you there a minute longer, and shows you that first.',
        },
        glossary: [
          {
            term: 'el sistema de recomendación',
            explanation: 'un programa informático que sugiere contenidos, productos o personas según los gustos que ha detectado en el usuario.',
          },
          {
            term: 'predecir',
            explanation: 'anunciar o calcular algo que va a suceder en el futuro, antes de que ocurra.',
          },
        ],
      },
      {
        text: 'El objetivo de estas empresas no es que el usuario esté satisfecho al cerrar la aplicación, sino que la abra de nuevo cuanto antes. Por eso hablan menos de «satisfacción» y más de «tiempo de uso» o «tasa de retorno», métricas que se pueden medir y optimizar con precisión.',
        translations: {
          en: "The aim of these companies is not for users to be satisfied when they close the app, but for them to open it again as soon as possible. That is why they talk less about 'satisfaction' and more about 'time on app' or 'return rate' - metrics that can be measured and optimised precisely.",
        },
        glossary: [
          { term: 'la métrica', explanation: 'un dato numérico que se usa para medir el rendimiento o el éxito de algo.' },
          { term: 'optimizar', explanation: 'mejorar algo hasta conseguir el mejor resultado posible.' },
        ],
      },
      {
        text: 'Algunos ingenieros que trabajaron en el diseño de estos sistemas han reconocido públicamente que evitaban dar ciertas funciones a sus propios hijos. No porque la tecnología sea mala en sí misma, dicen, sino porque saben exactamente qué mecanismos activa y lo difícil que resulta resistirse a ellos, incluso siendo consciente de cómo funcionan.',
        translations: {
          en: 'Some engineers who worked on the design of these systems have publicly admitted that they kept certain features away from their own children. Not because the technology is bad in itself, they say, but because they know exactly which mechanisms it triggers and how hard it is to resist them, even when you are aware of how they work.',
        },
      },
      {
        text: 'Frente a esto han surgido movimientos que piden un «diseño ético»: aplicaciones que muestren cuánto tiempo llevas usándolas, que permitan desactivar las notificaciones automáticas o que, simplemente, no tengan scroll infinito. La pregunta de fondo, sin embargo, sigue abierta: ¿debe ser el usuario quien controle su propio consumo, o la empresa quien limite un producto que, cuanto más adictivo, más dinero genera?',
        translations: {
          en: "In response, movements have sprung up calling for 'ethical design': apps that show you how long you have been using them, that let you turn off automatic notifications, or that simply have no infinite scroll. The underlying question, however, remains open: should it be the user who controls their own consumption, or the company that limits a product which makes more money the more addictive it is?",
        },
        glossary: [
          {
            term: 'el scroll infinito',
            explanation: 'una función que carga contenido nuevo automáticamente al llegar al final de la pantalla, para que el usuario nunca encuentre un final natural.',
          },
          {
            term: 'adictivo',
            explanation: 'que provoca una necesidad fuerte y difícil de controlar de repetir una acción.',
          },
        ],
      },
    ],
    exercises: [
      {
        type: ExerciseType.MULTIPLE_CHOICE,
        question: 'Según el texto, ¿qué analiza un sistema de recomendación?',
        options: [
          'La edad y el lugar de residencia del usuario',
          'Qué contenidos ha visto el usuario antes y cuánto tiempo se ha quedado en cada uno',
          'Solo los contenidos que el usuario ha compartido con otros',
          'Las opiniones que otros usuarios tienen sobre él',
        ],
        correctIndex: 1,
        explanation:
          'El texto dice que el sistema «analiza qué contenidos has visto antes, cuánto tiempo te has quedado en cada uno y en qué momento has dejado de mirar».',
      },
      {
        type: ExerciseType.MULTIPLE_CHOICE,
        question: '¿Cuál es, según el texto, el verdadero objetivo de estas aplicaciones?',
        options: [
          'Que el usuario esté satisfecho al cerrar la aplicación',
          'Que el usuario vuelva a abrirla cuanto antes',
          'Que el usuario aprenda a usar menos el teléfono',
          'Que el usuario comparta más contenido con sus amigos',
        ],
        correctIndex: 1,
        explanation:
          'El texto lo dice explícitamente: el objetivo «no es que el usuario esté satisfecho al cerrar la aplicación, sino que la abra de nuevo cuanto antes».',
      },
      {
        type: ExerciseType.TRUE_FALSE,
        question: 'El texto afirma que la tecnología es mala en sí misma.',
        options: ['Verdadero', 'Falso'],
        correctIndex: 1,
        explanation: 'El texto dice explícitamente: «No porque la tecnología sea mala en sí misma».',
      },
      {
        type: ExerciseType.OPEN,
        question:
          '¿Qué opinas de las propuestas de «diseño ético» que menciona el texto? ¿Crees que serían suficientes? Responde en tres o cuatro frases.',
        options: [],
        correctIndex: -1,
        explanation: 'Puedes usar expresiones como «en mi opinión», «por un lado… por otro lado», «aunque…».',
      },
    ],
  },
];
