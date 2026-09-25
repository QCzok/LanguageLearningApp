import { CefrLevel } from '@prisma/client';
import { toBookChapters, type ChapterSeed, type LevelChapterSeed } from './curriculum';
import { ENGLISH_GRAMMAR_CURRICULUM } from './english-grammar-curriculum';

/**
 * Lehrplan Englisch als Fremdsprache – drei Kursbücher zu je zwölf Kapiteln.
 *
 * Aufbau wie im deutschen und spanischen Lehrplan (siehe `curriculum.ts`): Je
 * zwei GER-Stufen bilden ein Buch, die Kapitel laufen darin von 1 bis 12
 * durch; die Umrechnung übernimmt `toBookChapters`.
 *
 * Die Themen sind für das Englische gesetzt: Den Takt geben hier nicht Fälle
 * oder ser/estar vor, sondern die Hilfsverben (be, do, have) und die
 * Unterscheidung zwischen einfacher Form und Verlaufsform.
 *
 * Ausgearbeitet sind alle drei Kursbücher – Beginner (A1/A2), Intermediate
 * (B1/B2) und Advanced (C1/C2), jeweils Kapitel 1 bis 12 – und das ganze
 * Grammatikbuch (siehe die Dateien `english-chapter-*.ts`; welches Kapitel
 * welche Seiten bekommt, steht in `workbook.ts`).
 */
const COURSE_CHAPTERS: LevelChapterSeed[] = [
  // ------------------------------------------------------------------- A1
  {
    level: CefrLevel.A1,
    orderInLevel: 1,
    title: 'Hello!',
    subtitle: 'Begrüßen, sich vorstellen, buchstabieren',
    description:
      'Der Einstieg: Sie lernen, andere zu begrüßen, sich mit Namen und Herkunft vorzustellen, Namen zu buchstabieren und die Zahlen bis zwanzig zu verstehen. Dazu das erste und wichtigste Verb: „to be“.',
    coverEmoji: '👋',
    goals: [
      'Ich kann jemanden begrüßen und mich verabschieden.',
      'Ich kann sagen, wie ich heiße und woher ich komme.',
      'Ich kann meinen Namen buchstabieren.',
      'Ich kann die Zahlen von 0 bis 20 verstehen und sagen.',
    ],
    estimatedMinutes: 90,
  },
  {
    level: CefrLevel.A1,
    orderInLevel: 2,
    title: 'My family',
    subtitle: 'Familie, Besitz, Alter',
    description:
      'Wer gehört zu wem? Dieses Kapitel bringt die Familienmitglieder, die Possessivbegleiter (my, your, his, her), das Genitiv-s und „have got“ – und die Zahlen bis hundert, damit sich das Alter sagen lässt.',
    coverEmoji: '👨‍👩‍👧',
    goals: [
      'Ich kann meine Familie vorstellen.',
      'Ich kann sagen, wem etwas gehört.',
      'Ich kann Personen mit einfachen Adjektiven beschreiben.',
      'Ich kann nach dem Alter fragen und es angeben.',
    ],
    estimatedMinutes: 95,
  },
  {
    level: CefrLevel.A1,
    orderInLevel: 3,
    title: 'In town',
    subtitle: 'Orte, Wege, there is',
    description:
      'Sich in einer fremden Stadt zurechtfinden: Orte benennen, mit „there is“ und „there are“ sagen, was es gibt, nach dem Weg fragen und eine Wegbeschreibung verstehen.',
    coverEmoji: '🏙️',
    goals: [
      'Ich kann nach dem Weg fragen und eine Auskunft verstehen.',
      'Ich kann sagen, wo sich etwas befindet.',
      'Ich kann öffentliche Orte benennen.',
      'Ich kann „there is“ und „there are“ verwenden.',
    ],
    estimatedMinutes: 100,
  },
  {
    level: CefrLevel.A1,
    orderInLevel: 4,
    title: 'My day',
    subtitle: 'Tagesablauf, Uhrzeit, Present Simple',
    description:
      'Der Tag von morgens bis abends: die Uhrzeit, das Present Simple mit seinem -s in der dritten Person und „do“ und „does“, ohne die im Englischen keine Frage auskommt.',
    coverEmoji: '⏰',
    goals: [
      'Ich kann meinen Tagesablauf beschreiben.',
      'Ich kann die Uhrzeit erfragen und angeben.',
      'Ich kann Fragen und Verneinungen im Present Simple bilden.',
      'Ich kann sagen, wie oft ich etwas tue.',
    ],
    estimatedMinutes: 100,
  },
  {
    level: CefrLevel.A1,
    orderInLevel: 5,
    title: 'Shopping',
    subtitle: 'Einkaufen, Preise, Kleidung',
    description:
      'Im Geschäft und auf dem Markt: nach dem Preis fragen, Mengen angeben, bezahlen, Kleidung anprobieren. Dazu this, that, these und those – und „can“ für höfliche Bitten.',
    coverEmoji: '🛍️',
    goals: [
      'Ich kann nach dem Preis fragen und ihn verstehen.',
      'Ich kann Mengen und Größen angeben.',
      'Ich kann ein einfaches Verkaufsgespräch führen.',
      'Ich kann auf Dinge in meiner Nähe und Ferne zeigen.',
    ],
    estimatedMinutes: 95,
  },
  {
    level: CefrLevel.A1,
    orderInLevel: 6,
    title: 'Food and drink',
    subtitle: 'Vorlieben, bestellen, some und any',
    description:
      'Essen und Trinken auf Englisch: sagen, was man mag, zählbare und nicht zählbare Nomen unterscheiden, im Café bestellen – höflich mit „I’d like“ – und die Rechnung verlangen.',
    coverEmoji: '🍽️',
    goals: [
      'Ich kann sagen, was ich gern esse und trinke.',
      'Ich kann some und any richtig verwenden.',
      'Ich kann im Café oder Restaurant bestellen und bezahlen.',
      'Ich kann höflich um etwas bitten.',
    ],
    estimatedMinutes: 100,
  },

  // ------------------------------------------------------------------- A2
  {
    level: CefrLevel.A2,
    orderInLevel: 1,
    title: 'Last weekend',
    subtitle: 'Erzählen im Past Simple',
    description:
      'Das erste Mal in der Vergangenheit: was man am Wochenende gemacht hat, mit regelmäßigen und den häufigsten unregelmäßigen Verben.',
    coverEmoji: '📅',
    goals: [
      'Ich kann von vergangenen Ereignissen berichten.',
      'Ich kann regelmäßige Verben im Past Simple bilden.',
      'Ich kann die häufigsten unregelmäßigen Formen verwenden.',
      'Ich kann Fragen mit did stellen.',
    ],
    estimatedMinutes: 110,
  },
  {
    level: CefrLevel.A2,
    orderInLevel: 2,
    title: 'When I was young',
    subtitle: 'Erinnerungen, used to',
    description:
      'Kindheit und frühere Gewohnheiten: was man früher tat und heute nicht mehr, mit „used to“ und dem Past Continuous für Hintergründe.',
    coverEmoji: '🧸',
    goals: [
      'Ich kann über meine Kindheit sprechen.',
      'Ich kann frühere Gewohnheiten mit used to beschreiben.',
      'Ich kann das Past Continuous verwenden.',
      'Ich kann Vergangenheit und Gegenwart vergleichen.',
    ],
    estimatedMinutes: 110,
  },
  {
    level: CefrLevel.A2,
    orderInLevel: 3,
    title: 'Health',
    subtitle: 'Beim Arzt, Present Continuous, should',
    description:
      'Körperteile, Beschwerden, ein Termin beim Arzt. Dazu das Present Continuous für das, was gerade passiert – und Ratschläge mit „should“.',
    coverEmoji: '🩺',
    goals: [
      'Ich kann Beschwerden beschreiben.',
      'Ich kann einen Arzttermin vereinbaren.',
      'Ich kann sagen, was gerade passiert.',
      'Ich kann Ratschläge geben und verstehen.',
    ],
    estimatedMinutes: 105,
  },
  {
    level: CefrLevel.A2,
    orderInLevel: 4,
    title: 'Travel plans',
    subtitle: 'Zukunft, Buchungen, Verkehrsmittel',
    description:
      'Eine Reise planen und buchen: going to für Pläne, will für spontane Entscheidungen, am Bahnhof und im Hotel.',
    coverEmoji: '🧳',
    goals: [
      'Ich kann über Reisepläne sprechen.',
      'Ich kann eine Fahrkarte oder ein Zimmer buchen.',
      'Ich kann going to und will unterscheiden.',
      'Ich kann Durchsagen und Fahrpläne verstehen.',
    ],
    estimatedMinutes: 110,
  },
  {
    level: CefrLevel.A2,
    orderInLevel: 5,
    title: 'Home and neighbourhood',
    subtitle: 'Wohnen, vergleichen, beschreiben',
    description:
      'Die Wohnung, die Nachbarschaft, der Umzug – und Vergleiche mit Komparativ und Superlativ.',
    coverEmoji: '🏠',
    goals: [
      'Ich kann meine Wohnung beschreiben.',
      'Ich kann Dinge miteinander vergleichen.',
      'Ich kann eine Wohnungsanzeige verstehen.',
      'Ich kann über meine Nachbarschaft sprechen.',
    ],
    estimatedMinutes: 105,
  },
  {
    level: CefrLevel.A2,
    orderInLevel: 6,
    title: 'Celebrations',
    subtitle: 'Feste im englischsprachigen Raum',
    description:
      'Thanksgiving, Bonfire Night, Geburtstage: Einladungen schreiben, gratulieren, von einem Fest erzählen.',
    coverEmoji: '🎉',
    goals: [
      'Ich kann eine Einladung schreiben und beantworten.',
      'Ich kann gratulieren und Glückwünsche aussprechen.',
      'Ich kann Feste beschreiben.',
      'Ich kann von einem Fest in der Vergangenheit erzählen.',
    ],
    estimatedMinutes: 105,
  },

  // ------------------------------------------------------------------- B1
  {
    level: CefrLevel.B1,
    orderInLevel: 1,
    title: 'The world of work',
    subtitle: 'Bewerbung, Büroalltag, E-Mails',
    description:
      'Stellenanzeigen, Vorstellungsgespräch und die förmliche E-Mail. Grammatisch geht es um das Present Perfect: für Erfahrungen (ever, never), für Dauer (for, since) – und um die Grenze zum Past Simple, die im Lebenslauf verläuft.',
    coverEmoji: '💼',
    goals: [
      'Ich kann eine Bewerbung schreiben.',
      'Ich kann über meine Berufserfahrung sprechen.',
      'Ich kann formelle E-Mails verfassen.',
      'Ich kann an einem Vorstellungsgespräch teilnehmen.',
      'Ich kann for und since richtig verwenden.',
    ],
    estimatedMinutes: 125,
  },
  {
    level: CefrLevel.B1,
    orderInLevel: 2,
    title: 'Opinions',
    subtitle: 'Meinungen äußern und begründen',
    description:
      'Zustimmen, widersprechen, abwägen – mit den Wendungen, die eine Diskussion höflich halten. Dazu Konnektoren wie although und however und die Frage, welches Verb -ing und welches to verlangt.',
    coverEmoji: '💬',
    goals: [
      'Ich kann meine Meinung äußern und begründen.',
      'Ich kann höflich widersprechen.',
      'Ich kann Vor- und Nachteile abwägen.',
      'Ich kann Konnektoren sicher verwenden.',
      'Ich kann Gerundium und Infinitiv unterscheiden.',
    ],
    estimatedMinutes: 120,
  },
  {
    level: CefrLevel.B1,
    orderInLevel: 3,
    title: 'Media',
    subtitle: 'Nachrichten, soziale Medien, Quellen',
    description:
      'Schlagzeilen verstehen, Quellen prüfen, über Mediennutzung sprechen. Grammatisch: das Passiv in Präsens und Vergangenheit, einfache indirekte Rede mit say und tell und Relativsätze mit who, which und that.',
    coverEmoji: '📰',
    goals: [
      'Ich kann die Hauptaussagen von Nachrichten verstehen.',
      'Ich kann über Mediennutzung sprechen.',
      'Ich kann Quellen einschätzen.',
      'Ich kann einen kurzen Bericht zusammenfassen.',
      'Ich kann Relativsätze bilden.',
    ],
    estimatedMinutes: 120,
  },
  {
    level: CefrLevel.B1,
    orderInLevel: 4,
    title: 'Relationships',
    subtitle: 'Gefühle, Konflikte, Ratschläge',
    description:
      'Über Gefühle sprechen, Konflikte beschreiben, Rat geben – mit -ed- und -ing-Adjektiven, Phrasal Verbs, Modalverben der Pflicht und each other.',
    coverEmoji: '🤝',
    goals: [
      'Ich kann Gefühle beschreiben.',
      'Ich kann Ratschläge geben.',
      'Ich kann häufige Phrasal Verbs verstehen.',
      'Ich kann einen Konflikt schildern.',
    ],
    estimatedMinutes: 120,
  },
  {
    level: CefrLevel.B1,
    orderInLevel: 5,
    title: 'Environment',
    subtitle: 'Umwelt, Verkehr, Verantwortung',
    description:
      'Klima, Müll, Verkehr: Probleme beschreiben, Lösungen vorschlagen, Bedingungen formulieren – mit den Bedingungssätzen Typ 0 und 1, unless und Mengenangaben wie too much und not enough.',
    coverEmoji: '🌍',
    goals: [
      'Ich kann Umweltprobleme beschreiben.',
      'Ich kann Lösungen vorschlagen.',
      'Ich kann reale Bedingungssätze bilden.',
      'Ich kann über mein eigenes Verhalten sprechen.',
    ],
    estimatedMinutes: 120,
  },
  {
    level: CefrLevel.B1,
    orderInLevel: 6,
    title: 'Stories',
    subtitle: 'Erzählen mit allen Vergangenheitszeiten',
    description:
      'Eine Geschichte erzählen: Past Simple, Past Continuous und Past Perfect im Zusammenspiel, verbunden durch Zeitkonnektoren wie as soon as und by the time.',
    coverEmoji: '📖',
    goals: [
      'Ich kann eine Geschichte zusammenhängend erzählen.',
      'Ich kann das Past Perfect verwenden.',
      'Ich kann Zeitenfolgen korrekt bilden.',
      'Ich kann Erzähltexte verstehen.',
    ],
    estimatedMinutes: 125,
  },

  // ------------------------------------------------------------------- B2
  {
    level: CefrLevel.B2,
    orderInLevel: 1,
    title: 'Society and politics',
    subtitle: 'Debattieren, argumentieren, abwägen',
    description:
      'Gesellschaftliche Fragen diskutieren und Positionen strukturiert vertreten: Diskursmarker, die ein Argument gliedern, Zugeständnisse mit even though und while, vorsichtiges Formulieren (hedging) und Hervorhebung mit Spaltsätzen.',
    coverEmoji: '🏛️',
    goals: [
      'Ich kann an einer Debatte teilnehmen.',
      'Ich kann Argumente strukturiert vortragen.',
      'Ich kann Gegenargumente entkräften.',
      'Ich kann politische Texte verstehen.',
    ],
    estimatedMinutes: 135,
  },
  {
    level: CefrLevel.B2,
    orderInLevel: 2,
    title: 'Business and economy',
    subtitle: 'Märkte, Verhandlungen, Berichte',
    description:
      'Verhandeln, präsentieren, Zahlen und Entwicklungen beschreiben – mit der Präzision, die Zahlen verlangen (by, to, from), vorsichtigen Angeboten im Konjunktiv und dem Passiv der Berichtssprache (Sales are expected to rise).',
    coverEmoji: '📈',
    goals: [
      'Ich kann Entwicklungen und Trends beschreiben.',
      'Ich kann an einer Verhandlung teilnehmen.',
      'Ich kann eine kurze Präsentation halten.',
      'Ich kann Geschäftsberichte verstehen.',
    ],
    estimatedMinutes: 135,
  },
  {
    level: CefrLevel.B2,
    orderInLevel: 3,
    title: 'What if?',
    subtitle: 'Bedingungssätze und Irreales',
    description:
      'Hypothesen, Bedauern und Alternativen: der zweite und dritte Bedingungssatz, gemischte Formen und wish / if only – die Grammatik dessen, was nicht ist oder nicht war.',
    coverEmoji: '🔮',
    goals: [
      'Ich kann irreale Bedingungen formulieren.',
      'Ich kann Bedauern ausdrücken.',
      'Ich kann Hypothesen aufstellen.',
      'Ich kann gemischte Bedingungssätze verwenden.',
    ],
    estimatedMinutes: 130,
  },
  {
    level: CefrLevel.B2,
    orderInLevel: 4,
    title: 'Science and technology',
    subtitle: 'Erklären, einordnen, bewerten',
    description:
      'Technische Vorgänge erklären, Chancen und Risiken bewerten: das Passiv in allen Zeiten, have something done, Partizipialsätze und das Future Perfect für Prognosen.',
    coverEmoji: '🔬',
    goals: [
      'Ich kann Vorgänge im Passiv beschreiben.',
      'Ich kann populärwissenschaftliche Texte verstehen.',
      'Ich kann Chancen und Risiken abwägen.',
      'Ich kann Fachbegriffe umschreiben.',
      'Ich kann Prognosen mit will have und will be -ing formulieren.',
    ],
    estimatedMinutes: 130,
  },
  {
    level: CefrLevel.B2,
    orderInLevel: 5,
    title: 'Arts and culture',
    subtitle: 'Beschreiben und deuten',
    description:
      'Filme, Bücher und Bilder beschreiben, deuten und kritisch besprechen – mit steigernden Adjektiven, Vermutungen über die Vergangenheit (must have, might have) und vorsichtiger Deutung.',
    coverEmoji: '🎭',
    goals: [
      'Ich kann eine Rezension schreiben.',
      'Ich kann ein Kunstwerk beschreiben und deuten.',
      'Ich kann Geschmack begründen.',
      'Ich kann Kulturbeiträge verstehen.',
    ],
    estimatedMinutes: 130,
  },
  {
    level: CefrLevel.B2,
    orderInLevel: 6,
    title: 'Identity',
    subtitle: 'Komplexe Zusammenhänge darstellen',
    description:
      'Migration, Sprache und Zugehörigkeit – komplexe Themen differenziert darstellen. Dazu die Redewiedergabe mit Berichtsverben (claim, admit, deny), indirekte Fragen und der Unterschied zwischen used to, be used to und get used to.',
    coverEmoji: '🧭',
    goals: [
      'Ich kann komplexe Zusammenhänge darstellen.',
      'Ich kann Aussagen in indirekter Rede wiedergeben.',
      'Ich kann differenziert Stellung nehmen.',
      'Ich kann längere Texte zusammenfassen.',
    ],
    estimatedMinutes: 135,
  },

  // ------------------------------------------------------------------- C1
  {
    level: CefrLevel.C1,
    orderInLevel: 1,
    title: 'Englishes',
    subtitle: 'Englisch in der ganzen Welt',
    description:
      'Britisches, amerikanisches, australisches und indisches Englisch – Varietäten erkennen und einordnen.',
    coverEmoji: '🗺️',
    goals: [
      'Ich kann Varietäten des Englischen unterscheiden.',
      'Ich kann regionale Ausdrücke verstehen.',
      'Ich kann über Sprache reflektieren.',
      'Ich kann Akzente einordnen.',
    ],
    estimatedMinutes: 150,
  },
  {
    level: CefrLevel.C1,
    orderInLevel: 2,
    title: 'Law and administration',
    subtitle: 'Behörden, Verträge, Formalien',
    description: 'Verträge, Formulare und amtliche Schreiben verstehen und selbst verfassen.',
    coverEmoji: '⚖️',
    goals: [
      'Ich kann Verträge im Wesentlichen verstehen.',
      'Ich kann formelle Schreiben verfassen.',
      'Ich kann mit Behörden kommunizieren.',
      'Ich kann Fachsprache umschreiben.',
    ],
    estimatedMinutes: 150,
  },
  {
    level: CefrLevel.C1,
    orderInLevel: 3,
    title: 'Research and ethics',
    subtitle: 'Abwägen und begründen',
    description: 'Ethische Fragen der Forschung diskutieren und Positionen präzise begründen.',
    coverEmoji: '🧪',
    goals: [
      'Ich kann ethische Fragen diskutieren.',
      'Ich kann präzise begründen.',
      'Ich kann Fachtexte kritisch lesen.',
      'Ich kann Einwände vorwegnehmen.',
    ],
    estimatedMinutes: 150,
  },
  {
    level: CefrLevel.C1,
    orderInLevel: 4,
    title: 'Literature in English',
    subtitle: 'Texte deuten',
    description: 'Kurzgeschichten und Gedichte aus der englischsprachigen Welt lesen und deuten.',
    coverEmoji: '📚',
    goals: [
      'Ich kann literarische Texte deuten.',
      'Ich kann Stilmittel erkennen.',
      'Ich kann eine Interpretation schreiben.',
      'Ich kann Texte in ihren Kontext einordnen.',
    ],
    estimatedMinutes: 155,
  },
  {
    level: CefrLevel.C1,
    orderInLevel: 5,
    title: 'Global economy',
    subtitle: 'Zielkonflikte darstellen',
    description: 'Wirtschaft und Entwicklung: Zielkonflikte darstellen und bewerten.',
    coverEmoji: '🌐',
    goals: [
      'Ich kann Zielkonflikte darstellen.',
      'Ich kann Statistiken interpretieren.',
      'Ich kann Wirtschaftstexte verstehen.',
      'Ich kann Lösungen bewerten.',
    ],
    estimatedMinutes: 150,
  },
  {
    level: CefrLevel.C1,
    orderInLevel: 6,
    title: 'Media and discourse',
    subtitle: 'Rhetorik durchschauen',
    description: 'Framing, Rhetorik und Manipulation erkennen und benennen.',
    coverEmoji: '🎙️',
    goals: [
      'Ich kann rhetorische Mittel erkennen.',
      'Ich kann Framing benennen.',
      'Ich kann Reden analysieren.',
      'Ich kann Argumentationen bewerten.',
    ],
    estimatedMinutes: 150,
  },

  // ------------------------------------------------------------------- C2
  {
    level: CefrLevel.C2,
    orderInLevel: 1,
    title: 'Rhetoric and persuasion',
    subtitle: 'Überzeugen auf hohem Niveau',
    description: 'Reden und Texte, die überzeugen – und die Mittel, mit denen sie es tun.',
    coverEmoji: '🗣️',
    goals: [
      'Ich kann überzeugend argumentieren.',
      'Ich kann rhetorische Mittel gezielt einsetzen.',
      'Ich kann eine Rede verfassen.',
      'Ich kann spontan und präzise reagieren.',
    ],
    estimatedMinutes: 160,
  },
  {
    level: CefrLevel.C2,
    orderInLevel: 2,
    title: 'Academic writing',
    subtitle: 'Präzision und Struktur',
    description: 'Wissenschaftlich schreiben: gliedern, belegen, vorsichtig formulieren (hedging).',
    coverEmoji: '🎓',
    goals: [
      'Ich kann akademische Texte gliedern.',
      'Ich kann Quellen korrekt einbinden.',
      'Ich kann vorsichtig formulieren.',
      'Ich kann präzise zusammenfassen.',
    ],
    estimatedMinutes: 160,
  },
  {
    level: CefrLevel.C2,
    orderInLevel: 3,
    title: 'Style and register',
    subtitle: 'Zwischen Ebenen wechseln',
    description: 'Vom Slang bis zum Amtsenglisch: Register erkennen und bewusst wechseln.',
    coverEmoji: '🎚️',
    goals: [
      'Ich kann Register unterscheiden.',
      'Ich kann Texte stilistisch anpassen.',
      'Ich kann Nuancen erkennen.',
      'Ich kann umgangssprachliche Wendungen verstehen.',
    ],
    estimatedMinutes: 160,
  },
  {
    level: CefrLevel.C2,
    orderInLevel: 4,
    title: 'Idioms and nuance',
    subtitle: 'Redewendungen sicher verwenden',
    description: 'Idiome, Anspielungen und Zwischentöne – das, was man nicht wörtlich nimmt.',
    coverEmoji: '🧠',
    goals: [
      'Ich kann Redewendungen sicher verwenden.',
      'Ich kann Anspielungen verstehen.',
      'Ich kann Ironie erkennen.',
      'Ich kann Zwischentöne ausdrücken.',
    ],
    estimatedMinutes: 160,
  },
  {
    level: CefrLevel.C2,
    orderInLevel: 5,
    title: 'Debate and mediation',
    subtitle: 'Moderieren und vermitteln',
    description: 'Diskussionen leiten, zwischen Positionen vermitteln, Ergebnisse festhalten.',
    coverEmoji: '🕊️',
    goals: [
      'Ich kann eine Diskussion moderieren.',
      'Ich kann zwischen Positionen vermitteln.',
      'Ich kann Ergebnisse zusammenfassen.',
      'Ich kann heikle Themen taktvoll ansprechen.',
    ],
    estimatedMinutes: 160,
  },
  {
    level: CefrLevel.C2,
    orderInLevel: 6,
    title: 'Explaining science',
    subtitle: 'Komplexes verständlich machen',
    description: 'Fachinhalte für ein Laienpublikum aufbereiten, ohne sie zu verfälschen.',
    coverEmoji: '💡',
    goals: [
      'Ich kann Fachinhalte allgemein verständlich erklären.',
      'Ich kann zwischen Fach- und Alltagssprache wechseln.',
      'Ich kann adressatengerecht formulieren.',
      'Ich kann komplexe Texte souverän zusammenfassen.',
    ],
    estimatedMinutes: 160,
  },
];

/**
 * Der vollständige englische Lehrplan: die drei Kursbücher, dann das
 * Grammatikbuch.
 */
export const ENGLISH_CURRICULUM: ChapterSeed[] = [
  ...toBookChapters(COURSE_CHAPTERS),
  ...ENGLISH_GRAMMAR_CURRICULUM,
];
