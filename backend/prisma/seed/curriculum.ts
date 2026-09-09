import { CefrLevel } from '@prisma/client';

/**
 * Lehrplan Deutsch als Fremdsprache – sechs Kapitel je Niveau von A1 bis C2.
 *
 * Der Aufbau folgt dem üblichen Lehrwerksmuster (Kursbuchteil mit neuen
 * Inhalten, Arbeitsbuchteil mit Übungen dazu). Titel, Themen und
 * Kann-Beschreibungen sind eigenständig formuliert und orientieren sich an den
 * GER-Deskriptoren, nicht an einem bestimmten Verlagswerk.
 *
 * Ausgearbeitet ist bisher A1 Kapitel 1 (siehe chapter-a1-1.ts); die übrigen
 * Kapitel stehen als Gerüst bereit und sind noch nicht veröffentlicht.
 */
export interface ChapterSeed {
  level: CefrLevel;
  order: number;
  title: string;
  subtitle: string;
  description: string;
  coverEmoji: string;
  goals: string[];
  estimatedMinutes: number;
}

export const CURRICULUM: ChapterSeed[] = [
  // ------------------------------------------------------------------- A1
  {
    level: 'A1',
    order: 1,
    title: 'Guten Tag!',
    subtitle: 'Begrüßen, sich vorstellen, buchstabieren',
    description:
      'Der Einstieg: Sie lernen, andere zu begrüßen, sich mit Namen und Herkunft vorzustellen, Namen zu buchstabieren und die Zahlen bis zwanzig zu verstehen.',
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
    level: 'A1',
    order: 2,
    title: 'Meine Familie und ich',
    subtitle: 'Personen beschreiben, Possessivartikel',
    description:
      'Sie sprechen über Ihre Familie, nennen Alter und Beruf und lernen, Besitz mit mein, dein und Ihr auszudrücken.',
    coverEmoji: '👨‍👩‍👧',
    goals: [
      'Ich kann meine Familie vorstellen.',
      'Ich kann nach dem Alter fragen und darauf antworten.',
      'Ich kann mit mein/dein/Ihr Zugehörigkeit ausdrücken.',
      'Ich kann die Zahlen bis 100 verstehen.',
    ],
    estimatedMinutes: 95,
  },
  {
    level: 'A1',
    order: 3,
    title: 'Essen und Trinken',
    subtitle: 'Im Café bestellen, Akkusativ',
    description:
      'Lebensmittel benennen, im Café und im Supermarkt zurechtkommen und den Akkusativ als Fall des direkten Objekts kennenlernen.',
    coverEmoji: '🥨',
    goals: [
      'Ich kann Essen und Getränke bestellen.',
      'Ich kann sagen, was ich gern esse und trinke.',
      'Ich kann nach dem Preis fragen.',
      'Ich kann den Akkusativ bei bestimmten und unbestimmten Artikeln bilden.',
    ],
    estimatedMinutes: 100,
  },
  {
    level: 'A1',
    order: 4,
    title: 'Wohnen',
    subtitle: 'Wohnung beschreiben, Präpositionen mit Dativ',
    description:
      'Räume und Möbel benennen, eine Wohnung beschreiben und mit Präpositionen sagen, wo etwas steht.',
    coverEmoji: '🏠',
    goals: [
      'Ich kann meine Wohnung beschreiben.',
      'Ich kann sagen, wo sich etwas befindet.',
      'Ich kann eine Wohnungsanzeige verstehen.',
      'Ich kann Präpositionen mit Dativ richtig verwenden.',
    ],
    estimatedMinutes: 100,
  },
  {
    level: 'A1',
    order: 5,
    title: 'Mein Tag',
    subtitle: 'Uhrzeit, Tagesablauf, trennbare Verben',
    description:
      'Die Uhrzeit verstehen und angeben, den eigenen Tagesablauf schildern und trennbare Verben im Satz richtig stellen.',
    coverEmoji: '🕗',
    goals: [
      'Ich kann nach der Uhrzeit fragen und sie nennen.',
      'Ich kann meinen Tagesablauf beschreiben.',
      'Ich kann mich verabreden.',
      'Ich kann trennbare Verben im Hauptsatz verwenden.',
    ],
    estimatedMinutes: 105,
  },
  {
    level: 'A1',
    order: 6,
    title: 'Einkaufen und Freizeit',
    subtitle: 'Kleidung, Preise, Modalverben',
    description:
      'Kleidung kaufen, über Freizeitaktivitäten sprechen und mit können, wollen und müssen Absichten und Fähigkeiten ausdrücken.',
    coverEmoji: '🛍️',
    goals: [
      'Ich kann in einem Geschäft einkaufen.',
      'Ich kann über meine Freizeit sprechen.',
      'Ich kann etwas vorschlagen und ablehnen.',
      'Ich kann die Modalverben können, wollen und müssen verwenden.',
    ],
    estimatedMinutes: 105,
  },

  // ------------------------------------------------------------------- A2
  {
    level: 'A2',
    order: 1,
    title: 'Gesundheit und Körper',
    subtitle: 'Beim Arzt, Imperativ',
    description:
      'Körperteile benennen, Beschwerden schildern, einen Termin vereinbaren und Ratschläge im Imperativ geben.',
    coverEmoji: '🩺',
    goals: [
      'Ich kann beim Arzt meine Beschwerden beschreiben.',
      'Ich kann einen Termin vereinbaren und verschieben.',
      'Ich kann Ratschläge geben und verstehen.',
      'Ich kann den Imperativ in allen Anredeformen bilden.',
    ],
    estimatedMinutes: 110,
  },
  {
    level: 'A2',
    order: 2,
    title: 'Arbeit und Beruf',
    subtitle: 'Berufe, Perfekt, Nebensätze mit weil',
    description:
      'Über Beruf und Werdegang sprechen, Vergangenes im Perfekt erzählen und Gründe mit weil angeben.',
    coverEmoji: '💼',
    goals: [
      'Ich kann über meinen Beruf und meinen Werdegang sprechen.',
      'Ich kann Vergangenes im Perfekt erzählen.',
      'Ich kann Gründe mit weil nennen.',
      'Ich kann eine einfache Stellenanzeige verstehen.',
    ],
    estimatedMinutes: 115,
  },
  {
    level: 'A2',
    order: 3,
    title: 'Reisen und Verkehr',
    subtitle: 'Wegbeschreibung, Wechselpräpositionen',
    description:
      'Nach dem Weg fragen, eine Reise planen und mit Wechselpräpositionen zwischen Ort und Richtung unterscheiden.',
    coverEmoji: '🚆',
    goals: [
      'Ich kann nach dem Weg fragen und ihn beschreiben.',
      'Ich kann eine Fahrkarte kaufen und Auskünfte einholen.',
      'Ich kann über eine Reise berichten.',
      'Ich kann Wechselpräpositionen mit Dativ und Akkusativ unterscheiden.',
    ],
    estimatedMinutes: 115,
  },
  {
    level: 'A2',
    order: 4,
    title: 'Feste und Traditionen',
    subtitle: 'Einladungen, Dativ, höfliche Bitten',
    description:
      'Einladungen aussprechen und beantworten, über Feste sprechen und höfliche Bitten mit dem Konjunktiv II formulieren.',
    coverEmoji: '🎉',
    goals: [
      'Ich kann jemanden einladen und auf eine Einladung antworten.',
      'Ich kann über Feste in meinem Land berichten.',
      'Ich kann Glückwünsche aussprechen.',
      'Ich kann höfliche Bitten mit würde und könnte formulieren.',
    ],
    estimatedMinutes: 110,
  },
  {
    level: 'A2',
    order: 5,
    title: 'Medien und Kommunikation',
    subtitle: 'Telefonieren, Nebensätze mit dass',
    description:
      'Am Telefon zurechtkommen, E-Mails schreiben und Meinungen mit dass-Sätzen wiedergeben.',
    coverEmoji: '📱',
    goals: [
      'Ich kann ein einfaches Telefongespräch führen.',
      'Ich kann eine kurze E-Mail schreiben.',
      'Ich kann wiedergeben, was jemand gesagt hat.',
      'Ich kann Nebensätze mit dass bilden.',
    ],
    estimatedMinutes: 110,
  },
  {
    level: 'A2',
    order: 6,
    title: 'Umwelt und Wetter',
    subtitle: 'Wetter, Vergleiche, Komparativ',
    description:
      'Über Wetter und Klima sprechen, vergleichen und einfache Umweltthemen diskutieren.',
    coverEmoji: '🌦️',
    goals: [
      'Ich kann das Wetter beschreiben und eine Vorhersage verstehen.',
      'Ich kann Dinge miteinander vergleichen.',
      'Ich kann über Umweltverhalten im Alltag sprechen.',
      'Ich kann Komparativ und Superlativ bilden.',
    ],
    estimatedMinutes: 115,
  },

  // ------------------------------------------------------------------- B1
  {
    level: 'B1',
    order: 1,
    title: 'Bildung und Lernen',
    subtitle: 'Schulsysteme, indirekte Fragen',
    description:
      'Über Bildungswege sprechen, Lernstrategien austauschen und indirekte Fragen höflich stellen.',
    coverEmoji: '🎓',
    goals: [
      'Ich kann meinen Bildungsweg zusammenhängend darstellen.',
      'Ich kann über Lernstrategien sprechen.',
      'Ich kann indirekte Fragen formulieren.',
      'Ich kann einen Text über Bildung zusammenfassen.',
    ],
    estimatedMinutes: 120,
  },
  {
    level: 'B1',
    order: 2,
    title: 'Wohnen und Zusammenleben',
    subtitle: 'Konflikte klären, Relativsätze',
    description:
      'In einer Wohngemeinschaft Konflikte ansprechen, Kompromisse aushandeln und mit Relativsätzen genauer beschreiben.',
    coverEmoji: '🏘️',
    goals: [
      'Ich kann ein Problem sachlich ansprechen.',
      'Ich kann einen Kompromiss vorschlagen.',
      'Ich kann eine Beschwerde schreiben.',
      'Ich kann Relativsätze in allen Fällen bilden.',
    ],
    estimatedMinutes: 120,
  },
  {
    level: 'B1',
    order: 3,
    title: 'Arbeitswelt im Wandel',
    subtitle: 'Bewerbung, Passiv',
    description:
      'Eine Bewerbung verfassen, ein Vorstellungsgespräch führen und Abläufe im Passiv beschreiben.',
    coverEmoji: '🏢',
    goals: [
      'Ich kann ein Bewerbungsschreiben verfassen.',
      'Ich kann mich in einem Vorstellungsgespräch vorstellen.',
      'Ich kann Arbeitsabläufe im Passiv beschreiben.',
      'Ich kann über Veränderungen der Arbeitswelt diskutieren.',
    ],
    estimatedMinutes: 125,
  },
  {
    level: 'B1',
    order: 4,
    title: 'Gesundheit und Lebensstil',
    subtitle: 'Ernährung, Konjunktiv II',
    description:
      'Über Ernährung und Bewegung sprechen, Ratschläge geben und Irreales mit dem Konjunktiv II ausdrücken.',
    coverEmoji: '🥗',
    goals: [
      'Ich kann über meinen Lebensstil sprechen.',
      'Ich kann begründete Ratschläge geben.',
      'Ich kann Irreales mit dem Konjunktiv II ausdrücken.',
      'Ich kann einen Zeitungsartikel über Gesundheit verstehen.',
    ],
    estimatedMinutes: 120,
  },
  {
    level: 'B1',
    order: 5,
    title: 'Kultur und Medien',
    subtitle: 'Filme und Bücher besprechen',
    description:
      'Über Filme, Bücher und Musik sprechen, eine Empfehlung begründen und eine Rezension verstehen.',
    coverEmoji: '🎬',
    goals: [
      'Ich kann einen Film oder ein Buch zusammenfassen.',
      'Ich kann meine Meinung begründen.',
      'Ich kann eine Rezension verstehen.',
      'Ich kann Nebensätze mit obwohl und trotzdem verwenden.',
    ],
    estimatedMinutes: 120,
  },
  {
    level: 'B1',
    order: 6,
    title: 'Gesellschaft und Engagement',
    subtitle: 'Ehrenamt, Finalsätze',
    description:
      'Über gesellschaftliches Engagement sprechen, Absichten mit damit und um zu ausdrücken und an einer Diskussion teilnehmen.',
    coverEmoji: '🤝',
    goals: [
      'Ich kann über ehrenamtliches Engagement sprechen.',
      'Ich kann Absichten mit damit und um zu ausdrücken.',
      'Ich kann an einer einfachen Diskussion teilnehmen.',
      'Ich kann einen Leserbrief schreiben.',
    ],
    estimatedMinutes: 125,
  },

  // ------------------------------------------------------------------- B2
  {
    level: 'B2',
    order: 1,
    title: 'Identität und Zugehörigkeit',
    subtitle: 'Biografien, Nominalisierung',
    description:
      'Über Herkunft, Sprache und Zugehörigkeit differenziert sprechen und nominale Ausdrucksweisen verwenden.',
    coverEmoji: '🧭',
    goals: [
      'Ich kann über Identität differenziert sprechen.',
      'Ich kann eine Biografie zusammenfassen.',
      'Ich kann zwischen verbalem und nominalem Stil wechseln.',
      'Ich kann implizite Aussagen in einem Text erkennen.',
    ],
    estimatedMinutes: 130,
  },
  {
    level: 'B2',
    order: 2,
    title: 'Wissenschaft und Technik',
    subtitle: 'Erklären, Partizipialattribute',
    description:
      'Wissenschaftliche Zusammenhänge verständlich erklären und komplexe Attribute verstehen.',
    coverEmoji: '🔬',
    goals: [
      'Ich kann einen Sachverhalt strukturiert erklären.',
      'Ich kann eine Grafik beschreiben und auswerten.',
      'Ich kann Partizipialattribute verstehen und auflösen.',
      'Ich kann einen populärwissenschaftlichen Text zusammenfassen.',
    ],
    estimatedMinutes: 130,
  },
  {
    level: 'B2',
    order: 3,
    title: 'Wirtschaft und Konsum',
    subtitle: 'Argumentieren, Konnektoren',
    description:
      'Über Konsum und Wirtschaft argumentieren und Argumente mit anspruchsvollen Konnektoren verknüpfen.',
    coverEmoji: '📈',
    goals: [
      'Ich kann eine Position begründet vertreten.',
      'Ich kann Gegenargumente aufgreifen und entkräften.',
      'Ich kann Konnektoren wie zumal, sofern und indem verwenden.',
      'Ich kann eine Statistik interpretieren.',
    ],
    estimatedMinutes: 135,
  },
  {
    level: 'B2',
    order: 4,
    title: 'Recht und Ordnung',
    subtitle: 'Regeln, Passiversatzformen',
    description:
      'Rechte und Pflichten verstehen, Regeln formulieren und Passiversatzformen einsetzen.',
    coverEmoji: '⚖️',
    goals: [
      'Ich kann Rechte und Pflichten beschreiben.',
      'Ich kann formelle Texte verstehen.',
      'Ich kann Passiversatzformen verwenden.',
      'Ich kann eine förmliche Beschwerde verfassen.',
    ],
    estimatedMinutes: 130,
  },
  {
    level: 'B2',
    order: 5,
    title: 'Kunst und Ästhetik',
    subtitle: 'Beschreiben und deuten',
    description:
      'Kunstwerke beschreiben, Wirkung deuten und über Geschmack differenziert sprechen.',
    coverEmoji: '🎨',
    goals: [
      'Ich kann ein Bild genau beschreiben.',
      'Ich kann Wirkung und Absicht deuten.',
      'Ich kann meinen Geschmack differenziert begründen.',
      'Ich kann bildhafte Sprache verstehen.',
    ],
    estimatedMinutes: 130,
  },
  {
    level: 'B2',
    order: 6,
    title: 'Globalisierung und Migration',
    subtitle: 'Komplexe Zusammenhänge darstellen',
    description:
      'Globale Zusammenhänge darstellen, Ursachen und Folgen abwägen und eine Erörterung schreiben.',
    coverEmoji: '🌍',
    goals: [
      'Ich kann Ursachen und Folgen darstellen.',
      'Ich kann eine Erörterung strukturiert schreiben.',
      'Ich kann Standpunkte gegeneinander abwägen.',
      'Ich kann längere Sachtexte auswerten.',
    ],
    estimatedMinutes: 135,
  },

  // ------------------------------------------------------------------- C1
  {
    level: 'C1',
    order: 1,
    title: 'Sprache und Denken',
    subtitle: 'Sprachreflexion, Modalpartikeln',
    description:
      'Über Sprache selbst reflektieren und die feinen Bedeutungen deutscher Modalpartikeln erfassen.',
    coverEmoji: '🗣️',
    goals: [
      'Ich kann über Sprache und ihre Wirkung reflektieren.',
      'Ich kann Modalpartikeln wie doch, mal und eben angemessen einsetzen.',
      'Ich kann feine Bedeutungsunterschiede erkennen.',
      'Ich kann einen linguistischen Text verstehen.',
    ],
    estimatedMinutes: 140,
  },
  {
    level: 'C1',
    order: 2,
    title: 'Forschung und Ethik',
    subtitle: 'Abwägen, Konjunktiv I',
    description:
      'Ethische Fragen abwägen und Aussagen anderer in indirekter Rede korrekt wiedergeben.',
    coverEmoji: '🧪',
    goals: [
      'Ich kann ethische Argumente abwägen.',
      'Ich kann indirekte Rede mit Konjunktiv I bilden.',
      'Ich kann Quellen korrekt wiedergeben.',
      'Ich kann eine wissenschaftliche Debatte verfolgen.',
    ],
    estimatedMinutes: 140,
  },
  {
    level: 'C1',
    order: 3,
    title: 'Politik und Öffentlichkeit',
    subtitle: 'Debatte, rhetorische Mittel',
    description:
      'Politische Debatten verfolgen, rhetorische Mittel erkennen und die eigene Position pointiert vertreten.',
    coverEmoji: '🏛️',
    goals: [
      'Ich kann einer politischen Debatte folgen.',
      'Ich kann rhetorische Mittel erkennen und benennen.',
      'Ich kann meine Position pointiert vertreten.',
      'Ich kann einen Kommentar verfassen.',
    ],
    estimatedMinutes: 140,
  },
  {
    level: 'C1',
    order: 4,
    title: 'Literatur und Interpretation',
    subtitle: 'Texte deuten',
    description:
      'Literarische Texte erschließen, Erzählperspektiven erkennen und eine Interpretation schreiben.',
    coverEmoji: '📖',
    goals: [
      'Ich kann literarische Texte erschließen.',
      'Ich kann Erzählperspektiven unterscheiden.',
      'Ich kann eine Interpretation schreiben.',
      'Ich kann Stilmittel benennen und deuten.',
    ],
    estimatedMinutes: 145,
  },
  {
    level: 'C1',
    order: 5,
    title: 'Nachhaltigkeit und Verantwortung',
    subtitle: 'Zielkonflikte darstellen',
    description:
      'Zielkonflikte der Nachhaltigkeit darstellen, Szenarien entwerfen und komplexe Argumentationen aufbauen.',
    coverEmoji: '♻️',
    goals: [
      'Ich kann Zielkonflikte darstellen.',
      'Ich kann Szenarien entwerfen und bewerten.',
      'Ich kann komplex und kohärent argumentieren.',
      'Ich kann Fachtexte kritisch lesen.',
    ],
    estimatedMinutes: 140,
  },
  {
    level: 'C1',
    order: 6,
    title: 'Digitalisierung und Gesellschaft',
    subtitle: 'Prognosen und Bewertungen',
    description:
      'Technologische Entwicklungen einordnen, Prognosen formulieren und Chancen gegen Risiken abwägen.',
    coverEmoji: '🖥️',
    goals: [
      'Ich kann Entwicklungen einordnen und bewerten.',
      'Ich kann Prognosen sprachlich abstufen.',
      'Ich kann Chancen und Risiken gegeneinander abwägen.',
      'Ich kann einen Vortrag halten.',
    ],
    estimatedMinutes: 145,
  },

  // ------------------------------------------------------------------- C2
  {
    level: 'C2',
    order: 1,
    title: 'Rhetorik und Argumentation',
    subtitle: 'Überzeugen auf hohem Niveau',
    description:
      'Argumentationsstrategien durchschauen, Trugschlüsse erkennen und frei überzeugend sprechen.',
    coverEmoji: '🎤',
    goals: [
      'Ich kann Argumentationsstrategien durchschauen.',
      'Ich kann Trugschlüsse erkennen und benennen.',
      'Ich kann frei und überzeugend sprechen.',
      'Ich kann spontan auf Einwände reagieren.',
    ],
    estimatedMinutes: 150,
  },
  {
    level: 'C2',
    order: 2,
    title: 'Wissenschaftliches Schreiben',
    subtitle: 'Präzision und Struktur',
    description:
      'Wissenschaftlich präzise formulieren, Quellen einordnen und einen Fachtext strukturieren.',
    coverEmoji: '📝',
    goals: [
      'Ich kann präzise und quellengestützt formulieren.',
      'Ich kann einen Fachtext klar strukturieren.',
      'Ich kann Hedging angemessen einsetzen.',
      'Ich kann fremde Positionen fair referieren.',
    ],
    estimatedMinutes: 150,
  },
  {
    level: 'C2',
    order: 3,
    title: 'Stil und Register',
    subtitle: 'Zwischen Ebenen wechseln',
    description:
      'Sprachregister sicher unterscheiden und den eigenen Ausdruck bewusst an Anlass und Publikum anpassen.',
    coverEmoji: '🎭',
    goals: [
      'Ich kann Register sicher unterscheiden.',
      'Ich kann meinen Stil bewusst anpassen.',
      'Ich kann Ironie und Untertreibung erkennen.',
      'Ich kann einen Text stilistisch überarbeiten.',
    ],
    estimatedMinutes: 150,
  },
  {
    level: 'C2',
    order: 4,
    title: 'Idiomatik und Nuancen',
    subtitle: 'Redewendungen sicher verwenden',
    description:
      'Redewendungen, Kollokationen und feine Konnotationen treffsicher einsetzen.',
    coverEmoji: '🧩',
    goals: [
      'Ich kann Redewendungen treffsicher verwenden.',
      'Ich kann Kollokationen korrekt bilden.',
      'Ich kann Konnotationen unterscheiden.',
      'Ich kann umgangssprachliche Register verstehen.',
    ],
    estimatedMinutes: 150,
  },
  {
    level: 'C2',
    order: 5,
    title: 'Diskurs und Debatte',
    subtitle: 'Moderieren und vermitteln',
    description:
      'Eine Diskussion moderieren, zwischen Positionen vermitteln und Ergebnisse zusammenfassen.',
    coverEmoji: '💬',
    goals: [
      'Ich kann eine Diskussion moderieren.',
      'Ich kann zwischen Positionen vermitteln.',
      'Ich kann Ergebnisse präzise zusammenfassen.',
      'Ich kann Gesprächsverhalten steuern.',
    ],
    estimatedMinutes: 155,
  },
  {
    level: 'C2',
    order: 6,
    title: 'Fachsprache und Vermittlung',
    subtitle: 'Komplexes verständlich machen',
    description:
      'Fachliche Inhalte für ein Laienpublikum aufbereiten und zwischen Fach- und Alltagssprache übersetzen.',
    coverEmoji: '🔑',
    goals: [
      'Ich kann Fachinhalte allgemein verständlich erklären.',
      'Ich kann zwischen Fach- und Alltagssprache wechseln.',
      'Ich kann Adressaten gerecht formulieren.',
      'Ich kann komplexe Texte souverän zusammenfassen.',
    ],
    estimatedMinutes: 155,
  },
];
