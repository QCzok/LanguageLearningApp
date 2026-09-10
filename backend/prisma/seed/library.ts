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
 * Volle Übersetzungen (Englisch/Spanisch/Französisch/Italienisch) gibt es
 * bislang nur für den deutschen Wochenmarkt-Text als Referenz – die übrigen
 * Texte tragen schon die neue Struktur samt Glossar, aber noch keine
 * Absatzübersetzung. Der Umschalt-Link erscheint in der App ohnehin nur dort,
 * wo eine Übersetzung tatsächlich hinterlegt ist.
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
