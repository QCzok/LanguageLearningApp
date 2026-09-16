import { CefrLevel } from '@prisma/client';
import { toBookChapters, type ChapterSeed, type LevelChapterSeed } from './curriculum';
import { SPANISH_GRAMMAR_CURRICULUM } from './spanish-grammar-curriculum';

/**
 * Lehrplan Spanisch als Fremdsprache – drei Kursbücher zu je zwölf Kapiteln.
 *
 * Aufbau wie im Deutschlehrplan (siehe `curriculum.ts`): Je zwei GER-Stufen
 * bilden ein Buch (A1/A2 Beginner, B1/B2 Intermediate, C1/C2 Advanced), die
 * Kapitel laufen darin von 1 bis 12 durch. Die Umrechnung von der
 * Lehrplansicht in die Zählung des Buchs übernimmt `toBookChapters`.
 *
 * Die Themen sind nicht aus dem Deutschlehrplan übersetzt, sondern für das
 * Spanische gesetzt: Wo dort der Akkusativ und die trennbaren Verben den Takt
 * vorgeben, sind es hier ser/estar, die Vergangenheitszeiten und der
 * Subjuntivo. Titel, Untertitel und Kann-Beschreibungen sind eigenständig
 * formuliert und orientieren sich an den GER-Deskriptoren.
 *
 * Ausgearbeitet ist Beginner Kapitel 1 (siehe `spanish-chapter-beginner-1.ts`);
 * das Grammatikbuch steuert Kapitel 1 bei (siehe
 * `spanish-chapter-grammar-1.ts`). Die übrigen Kapitel stehen als Gerüst
 * bereit und sind noch nicht veröffentlicht.
 */
const COURSE_CHAPTERS: LevelChapterSeed[] = [
  // ------------------------------------------------------------------- A1
  {
    level: CefrLevel.A1,
    orderInLevel: 1,
    title: '¡Hola!',
    subtitle: 'Begrüßen, sich vorstellen, buchstabieren',
    description:
      'Der Einstieg: Sie lernen, andere zu begrüßen, sich mit Namen und Herkunft vorzustellen, Namen zu buchstabieren und die Zahlen bis zwanzig zu verstehen. Dazu der erste Blick auf die beiden Verben, die im Spanischen „sein“ heißen.',
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
    title: 'Mi familia',
    subtitle: 'Familie, Besitz, Beschreibungen',
    description:
      'Wer gehört zu wem? Dieses Kapitel bringt die Familienmitglieder, die besitzanzeigenden Begleiter (mi, tu, su) und die ersten Adjektive, mit denen sich Menschen beschreiben lassen.',
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
    title: 'En la ciudad',
    subtitle: 'Nach dem Weg fragen, Orte benennen',
    description:
      'Sich in einer fremden Stadt zurechtfinden: Orte benennen, nach dem Weg fragen, eine Wegbeschreibung verstehen – und mit „hay“ sagen, was es wo gibt.',
    coverEmoji: '🏙️',
    goals: [
      'Ich kann nach dem Weg fragen und eine Auskunft verstehen.',
      'Ich kann sagen, wo sich etwas befindet.',
      'Ich kann öffentliche Orte benennen.',
      'Ich kann „hay“ von „está“ unterscheiden.',
    ],
    estimatedMinutes: 100,
  },
  {
    level: CefrLevel.A1,
    orderInLevel: 4,
    title: 'La rutina diaria',
    subtitle: 'Tagesablauf, Uhrzeit, reflexive Verben',
    description:
      'Der Tag von morgens bis abends. Mit der Uhrzeit, den regelmäßigen Verben im Präsens und den reflexiven Verben, ohne die sich auf Spanisch niemand die Zähne putzt.',
    coverEmoji: '⏰',
    goals: [
      'Ich kann meinen Tagesablauf beschreiben.',
      'Ich kann die Uhrzeit erfragen und angeben.',
      'Ich kann regelmäßige Verben im Präsens verwenden.',
      'Ich kann über meine Gewohnheiten sprechen.',
    ],
    estimatedMinutes: 100,
  },
  {
    level: CefrLevel.A1,
    orderInLevel: 5,
    title: 'De compras',
    subtitle: 'Einkaufen, Preise, Mengen',
    description:
      'Im Geschäft und auf dem Markt: nach dem Preis fragen, Mengen angeben, bezahlen. Dazu die Demonstrativbegleiter este, ese und aquel, die im Spanischen drei Entfernungen unterscheiden.',
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
    title: 'En el restaurante',
    subtitle: 'Bestellen, Vorlieben, gustar',
    description:
      'Essen gehen auf Spanisch. Die Speisekarte verstehen, bestellen, zahlen – und die Konstruktion mit „gustar“, die den Satz umdreht: Nicht ich mag das Essen, das Essen gefällt mir.',
    coverEmoji: '🥘',
    goals: [
      'Ich kann im Restaurant bestellen und bezahlen.',
      'Ich kann sagen, was mir schmeckt und was nicht.',
      'Ich kann „gustar“ richtig verwenden.',
      'Ich kann höflich um etwas bitten.',
    ],
    estimatedMinutes: 100,
  },

  // ------------------------------------------------------------------- A2
  {
    level: CefrLevel.A2,
    orderInLevel: 1,
    title: 'El fin de semana pasado',
    subtitle: 'Erzählen im Indefinido',
    description:
      'Das erste Mal in der Vergangenheit. Das Indefinido erzählt, was abgeschlossen geschehen ist – der Standardfall, wenn man berichtet, wie das Wochenende war.',
    coverEmoji: '📅',
    goals: [
      'Ich kann von vergangenen Ereignissen berichten.',
      'Ich kann regelmäßige Verben im Indefinido bilden.',
      'Ich kann die häufigsten unregelmäßigen Formen verwenden.',
      'Ich kann Zeitangaben der Vergangenheit einsetzen.',
    ],
    estimatedMinutes: 110,
  },
  {
    level: CefrLevel.A2,
    orderInLevel: 2,
    title: 'Cuando era niño',
    subtitle: 'Das Imperfecto und die Erinnerung',
    description:
      'Wie es früher war: Das Imperfecto beschreibt Zustände und Gewohnheiten in der Vergangenheit. Hier steht es neben dem Indefinido – der Unterschied ist die eigentliche Hürde.',
    coverEmoji: '🧸',
    goals: [
      'Ich kann beschreiben, wie etwas früher war.',
      'Ich kann das Imperfecto bilden und verwenden.',
      'Ich kann Imperfecto und Indefinido unterscheiden.',
      'Ich kann eine kurze Kindheitserinnerung erzählen.',
    ],
    estimatedMinutes: 115,
  },
  {
    level: CefrLevel.A2,
    orderInLevel: 3,
    title: 'Salud y cuerpo',
    subtitle: 'Beim Arzt, Beschwerden schildern',
    description:
      'Körperteile, Beschwerden und der Arztbesuch. Mit „doler“, das wie „gustar“ funktioniert, und den ersten Empfehlungen im Imperativ.',
    coverEmoji: '🩺',
    goals: [
      'Ich kann Beschwerden beim Arzt schildern.',
      'Ich kann Körperteile benennen.',
      'Ich kann Ratschläge verstehen und geben.',
      'Ich kann „doler“ richtig verwenden.',
    ],
    estimatedMinutes: 105,
  },
  {
    level: CefrLevel.A2,
    orderInLevel: 4,
    title: 'Planes de viaje',
    subtitle: 'Zukunft, Verabredungen, Buchungen',
    description:
      'Eine Reise planen: Verkehrsmittel, Unterkunft, Termine. Mit der nahen Zukunft „ir a + Infinitiv“ und dem einfachen Futur.',
    coverEmoji: '🚆',
    goals: [
      'Ich kann über meine Pläne sprechen.',
      'Ich kann eine Unterkunft buchen und Fragen dazu stellen.',
      'Ich kann „ir a + Infinitiv“ verwenden.',
      'Ich kann mich verabreden und Termine vereinbaren.',
    ],
    estimatedMinutes: 110,
  },
  {
    level: CefrLevel.A2,
    orderInLevel: 5,
    title: 'Mi casa, mi barrio',
    subtitle: 'Wohnen, vergleichen, beschreiben',
    description:
      'Die Wohnung und das Viertel beschreiben – und beides mit anderem vergleichen. Hier kommen die Vergleichsformen dazu: más … que, menos … que, tan … como.',
    coverEmoji: '🏠',
    goals: [
      'Ich kann meine Wohnung ausführlich beschreiben.',
      'Ich kann zwei Dinge miteinander vergleichen.',
      'Ich kann Vor- und Nachteile nennen.',
      'Ich kann den Superlativ bilden.',
    ],
    estimatedMinutes: 105,
  },
  {
    level: CefrLevel.A2,
    orderInLevel: 6,
    title: 'Fiestas y tradiciones',
    subtitle: 'Feste im spanischsprachigen Raum',
    description:
      'Von der Semana Santa bis zum Día de Muertos: Feste beschreiben, Bräuche erklären, über Gewohnheiten sprechen. Mit dem Perfecto für das, was noch nachwirkt.',
    coverEmoji: '🎊',
    goals: [
      'Ich kann ein Fest beschreiben und einordnen.',
      'Ich kann das Perfecto bilden und verwenden.',
      'Ich kann über Erfahrungen sprechen, die ich gemacht habe.',
      'Ich kann kulturelle Unterschiede benennen.',
    ],
    estimatedMinutes: 115,
  },

  // ------------------------------------------------------------------- B1
  {
    level: CefrLevel.B1,
    orderInLevel: 1,
    title: 'El mundo laboral',
    subtitle: 'Bewerbung, Büroalltag, Arbeitsbedingungen',
    description:
      'Arbeit und Beruf: eine Bewerbung schreiben, ein Vorstellungsgespräch führen, über Arbeitsbedingungen sprechen. Dazu die höfliche Anrede im beruflichen Umfeld.',
    coverEmoji: '💼',
    goals: [
      'Ich kann mich schriftlich auf eine Stelle bewerben.',
      'Ich kann in einem Vorstellungsgespräch über meine Erfahrung sprechen.',
      'Ich kann Arbeitsbedingungen beschreiben und bewerten.',
      'Ich kann im Beruf angemessen höflich formulieren.',
    ],
    estimatedMinutes: 120,
  },
  {
    level: CefrLevel.B1,
    orderInLevel: 2,
    title: 'Opiniones y deseos',
    subtitle: 'Der Subjuntivo beginnt',
    description:
      'Die Schwelle zum fortgeschrittenen Spanisch. Nach Ausdrücken des Wunsches, der Wertung und des Zweifels steht der Subjuntivo – dieses Kapitel führt ihn ein und übt seine häufigsten Auslöser.',
    coverEmoji: '💭',
    goals: [
      'Ich kann Wünsche und Hoffnungen ausdrücken.',
      'Ich kann den Presente de Subjuntivo bilden.',
      'Ich kann meine Meinung begründet äußern.',
      'Ich kann Zweifel und Unsicherheit formulieren.',
    ],
    estimatedMinutes: 130,
  },
  {
    level: CefrLevel.B1,
    orderInLevel: 3,
    title: 'Medios y redes',
    subtitle: 'Nachrichten, soziale Medien, Quellen',
    description:
      'Nachrichten verstehen und einordnen: eine Meldung zusammenfassen, Quellen prüfen, über den eigenen Umgang mit sozialen Medien sprechen. Mit der indirekten Rede.',
    coverEmoji: '📱',
    goals: [
      'Ich kann eine Nachricht zusammenfassen.',
      'Ich kann wiedergeben, was jemand gesagt hat.',
      'Ich kann eine Quelle kritisch einordnen.',
      'Ich kann über Mediennutzung diskutieren.',
    ],
    estimatedMinutes: 125,
  },
  {
    level: CefrLevel.B1,
    orderInLevel: 4,
    title: 'Relaciones',
    subtitle: 'Gefühle, Konflikte, Vermittlung',
    description:
      'Über Beziehungen sprechen: Freundschaft, Streit, Versöhnung. Mit den Verben, die Gefühle ausdrücken, und dem Subjuntivo, den viele von ihnen nach sich ziehen.',
    coverEmoji: '❤️',
    goals: [
      'Ich kann über Gefühle differenziert sprechen.',
      'Ich kann einen Konflikt schildern und vermitteln.',
      'Ich kann Verben der Gefühlsäußerung korrekt anschließen.',
      'Ich kann höflich widersprechen.',
    ],
    estimatedMinutes: 120,
  },
  {
    level: CefrLevel.B1,
    orderInLevel: 5,
    title: 'Ciudad y medio ambiente',
    subtitle: 'Umwelt, Verkehr, Verantwortung',
    description:
      'Stadtleben und seine Kehrseiten: Verkehr, Müll, Luftqualität. Vorschläge machen, Forderungen formulieren, über Verantwortung sprechen.',
    coverEmoji: '🌍',
    goals: [
      'Ich kann ein Umweltproblem beschreiben.',
      'Ich kann Vorschläge zur Verbesserung machen.',
      'Ich kann Forderungen formulieren.',
      'Ich kann Ursachen und Folgen verknüpfen.',
    ],
    estimatedMinutes: 125,
  },
  {
    level: CefrLevel.B1,
    orderInLevel: 6,
    title: 'Historias y relatos',
    subtitle: 'Erzählen mit allen Vergangenheitszeiten',
    description:
      'Eine längere Geschichte erzählen. Alle Vergangenheitszeiten treffen hier aufeinander – Indefinido, Imperfecto, Perfecto und das Pluscuamperfecto für das, was davor geschah.',
    coverEmoji: '📖',
    goals: [
      'Ich kann eine zusammenhängende Geschichte erzählen.',
      'Ich kann die Vergangenheitszeiten sicher unterscheiden.',
      'Ich kann Vorzeitigkeit mit dem Pluscuamperfecto ausdrücken.',
      'Ich kann eine Erzählung spannend gliedern.',
    ],
    estimatedMinutes: 130,
  },

  // ------------------------------------------------------------------- B2
  {
    level: CefrLevel.B2,
    orderInLevel: 1,
    title: 'Sociedad y política',
    subtitle: 'Debattieren, argumentieren, abwägen',
    description:
      'Gesellschaftliche Themen diskutieren: einen Standpunkt vertreten, Gegenargumente entkräften, abwägen. Mit den Konnektoren, die eine Argumentation tragen.',
    coverEmoji: '🏛️',
    goals: [
      'Ich kann einen Standpunkt strukturiert vertreten.',
      'Ich kann Gegenargumente aufgreifen und entkräften.',
      'Ich kann Konnektoren zur Gliederung einsetzen.',
      'Ich kann in einer Debatte sachlich bleiben.',
    ],
    estimatedMinutes: 140,
  },
  {
    level: CefrLevel.B2,
    orderInLevel: 2,
    title: 'Trabajo y economía',
    subtitle: 'Märkte, Verhandlungen, Berichte',
    description:
      'Wirtschaftliche Zusammenhänge darstellen: Zahlen interpretieren, eine Entwicklung beschreiben, verhandeln. Mit dem Passiv und den unpersönlichen Konstruktionen mit „se“.',
    coverEmoji: '📈',
    goals: [
      'Ich kann eine Entwicklung anhand von Zahlen beschreiben.',
      'Ich kann das Passiv und Ersatzformen verwenden.',
      'Ich kann in einer Verhandlung Position beziehen.',
      'Ich kann einen sachlichen Bericht verfassen.',
    ],
    estimatedMinutes: 140,
  },
  {
    level: CefrLevel.B2,
    orderInLevel: 3,
    title: 'Si fuera posible',
    subtitle: 'Bedingungssätze und Irreales',
    description:
      'Was wäre, wenn: die drei Typen der Bedingungssätze, vom Realen bis zum Irrealen der Vergangenheit. Der Subjuntivo Imperfecto gehört dazu.',
    coverEmoji: '🔀',
    goals: [
      'Ich kann reale und irreale Bedingungen unterscheiden.',
      'Ich kann den Subjuntivo Imperfecto bilden.',
      'Ich kann über Hypothetisches sprechen.',
      'Ich kann Bedauern über Vergangenes ausdrücken.',
    ],
    estimatedMinutes: 145,
  },
  {
    level: CefrLevel.B2,
    orderInLevel: 4,
    title: 'Ciencia y tecnología',
    subtitle: 'Erklären, einordnen, bewerten',
    description:
      'Wissenschaftliche und technische Themen verständlich darstellen: einen Vorgang erklären, eine Studie einordnen, Chancen und Risiken abwägen.',
    coverEmoji: '🔬',
    goals: [
      'Ich kann einen technischen Vorgang erklären.',
      'Ich kann Studienergebnisse einordnen.',
      'Ich kann Chancen und Risiken gegenüberstellen.',
      'Ich kann Fachbegriffe im Kontext erschließen.',
    ],
    estimatedMinutes: 140,
  },
  {
    level: CefrLevel.B2,
    orderInLevel: 5,
    title: 'Arte y cultura',
    subtitle: 'Beschreiben und deuten',
    description:
      'Kunst, Film und Literatur besprechen: ein Werk beschreiben, eine Wirkung benennen, eine Deutung begründen – und dabei den eigenen Eindruck vom Befund trennen.',
    coverEmoji: '🎭',
    goals: [
      'Ich kann ein Kunstwerk differenziert beschreiben.',
      'Ich kann eine Deutung begründen.',
      'Ich kann eine Rezension verstehen und verfassen.',
      'Ich kann Eindruck und Beobachtung auseinanderhalten.',
    ],
    estimatedMinutes: 135,
  },
  {
    level: CefrLevel.B2,
    orderInLevel: 6,
    title: 'Migración e identidad',
    subtitle: 'Komplexe Zusammenhänge darstellen',
    description:
      'Migration, Mehrsprachigkeit und Identität im spanischsprachigen Raum. Ein Thema, das sich nur mit Zwischentönen behandeln lässt – genau darum geht es hier.',
    coverEmoji: '🌐',
    goals: [
      'Ich kann komplexe Zusammenhänge strukturiert darstellen.',
      'Ich kann differenziert Stellung nehmen.',
      'Ich kann Zwischentöne sprachlich markieren.',
      'Ich kann einen längeren Text argumentativ aufbauen.',
    ],
    estimatedMinutes: 145,
  },

  // ------------------------------------------------------------------- C1
  {
    level: CefrLevel.C1,
    orderInLevel: 1,
    title: 'Lengua y variedad',
    subtitle: 'Spanisch in zwanzig Ländern',
    description:
      'Das Spanische ist nicht eines. Dieses Kapitel behandelt die großen Varietäten – Voseo, Aussprache, Wortschatz – und wann welche Norm angemessen ist.',
    coverEmoji: '🗣️',
    goals: [
      'Ich kann regionale Varietäten erkennen und einordnen.',
      'Ich kann meine Sprache der Region anpassen.',
      'Ich kann über Sprachnormen reflektiert sprechen.',
      'Ich kann das Voseo verstehen und einordnen.',
    ],
    estimatedMinutes: 150,
  },
  {
    level: CefrLevel.C1,
    orderInLevel: 2,
    title: 'Derecho y administración',
    subtitle: 'Behörden, Verträge, Formalien',
    description:
      'Die Sprache der Ämter und Verträge: einen Bescheid verstehen, einen Widerspruch formulieren, eine Klausel durchschauen.',
    coverEmoji: '⚖️',
    goals: [
      'Ich kann einen amtlichen Bescheid verstehen.',
      'Ich kann einen formellen Widerspruch verfassen.',
      'Ich kann Vertragsklauseln erschließen.',
      'Ich kann im Amtsdeutsch entsprechende Register treffen.',
    ],
    estimatedMinutes: 150,
  },
  {
    level: CefrLevel.C1,
    orderInLevel: 3,
    title: 'Investigación y ética',
    subtitle: 'Abwägen und begründen',
    description:
      'Forschung und ihre Grenzen: eine Methode beurteilen, ein ethisches Dilemma darstellen, eine Abwägung schriftlich begründen.',
    coverEmoji: '🧪',
    goals: [
      'Ich kann eine Methode kritisch beurteilen.',
      'Ich kann ein Dilemma sachlich darstellen.',
      'Ich kann eine Abwägung nachvollziehbar begründen.',
      'Ich kann wissenschaftliche Register verwenden.',
    ],
    estimatedMinutes: 155,
  },
  {
    level: CefrLevel.C1,
    orderInLevel: 4,
    title: 'Literatura hispánica',
    subtitle: 'Texte deuten',
    description:
      'Literarische Texte aus Spanien und Lateinamerika lesen und deuten: Erzählperspektive, Stilmittel, historischer Kontext.',
    coverEmoji: '📚',
    goals: [
      'Ich kann literarische Texte selbstständig deuten.',
      'Ich kann Stilmittel benennen und ihre Wirkung erklären.',
      'Ich kann einen Text historisch einordnen.',
      'Ich kann eine Interpretation schriftlich ausführen.',
    ],
    estimatedMinutes: 155,
  },
  {
    level: CefrLevel.C1,
    orderInLevel: 5,
    title: 'Economía y desarrollo',
    subtitle: 'Zielkonflikte darstellen',
    description:
      'Wirtschaftliche Entwicklung und ihre Zielkonflikte: Wachstum gegen Nachhaltigkeit, Ungleichheit, Strukturwandel. Mit Nominalstil und dichter Fügung.',
    coverEmoji: '📊',
    goals: [
      'Ich kann Zielkonflikte präzise darstellen.',
      'Ich kann statistische Aussagen sprachlich fassen.',
      'Ich kann dichte Fachtexte verfassen.',
      'Ich kann Positionen fair gegenüberstellen.',
    ],
    estimatedMinutes: 150,
  },
  {
    level: CefrLevel.C1,
    orderInLevel: 6,
    title: 'Medios y discurso',
    subtitle: 'Rhetorik durchschauen',
    description:
      'Wie Sprache wirkt: Framing, Suggestivfragen, Auslassungen. Einen Text auf seine rhetorischen Mittel hin lesen – und die eigenen bewusst einsetzen.',
    coverEmoji: '🎙️',
    goals: [
      'Ich kann rhetorische Mittel in Texten erkennen.',
      'Ich kann Framing benennen und aufbrechen.',
      'Ich kann bewusst überzeugend formulieren.',
      'Ich kann Manipulation sprachlich nachweisen.',
    ],
    estimatedMinutes: 155,
  },

  // ------------------------------------------------------------------- C2
  {
    level: CefrLevel.C2,
    orderInLevel: 1,
    title: 'Retórica y persuasión',
    subtitle: 'Überzeugen auf hohem Niveau',
    description:
      'Eine Rede aufbauen, ein Publikum führen, einen Einwand elegant wenden. Rhetorik als Handwerk, nicht als Zierde.',
    coverEmoji: '🏆',
    goals: [
      'Ich kann eine Rede wirkungsvoll aufbauen.',
      'Ich kann Einwände elegant aufnehmen.',
      'Ich kann Pointen setzen.',
      'Ich kann frei und strukturiert sprechen.',
    ],
    estimatedMinutes: 160,
  },
  {
    level: CefrLevel.C2,
    orderInLevel: 2,
    title: 'Escritura académica',
    subtitle: 'Präzision und Struktur',
    description:
      'Wissenschaftliches Schreiben auf Spanisch: Gliederung, Zitierweise, Distanz zum Referierten. Der Unterschied zwischen Behaupten und Belegen.',
    coverEmoji: '✒️',
    goals: [
      'Ich kann eine wissenschaftliche Arbeit gliedern.',
      'Ich kann korrekt zitieren und referieren.',
      'Ich kann sprachlich Distanz zum Referierten halten.',
      'Ich kann präzise und ökonomisch formulieren.',
    ],
    estimatedMinutes: 160,
  },
  {
    level: CefrLevel.C2,
    orderInLevel: 3,
    title: 'Estilo y registro',
    subtitle: 'Zwischen Ebenen wechseln',
    description:
      'Vom Behördenbrief zur Nachricht an Freunde: dasselbe sagen, ganz anders. Register erkennen, halten und bewusst brechen.',
    coverEmoji: '🎚️',
    goals: [
      'Ich kann Register sicher erkennen und halten.',
      'Ich kann denselben Inhalt stilistisch umformen.',
      'Ich kann einen Registerbruch gezielt einsetzen.',
      'Ich kann Nähe und Distanz sprachlich steuern.',
    ],
    estimatedMinutes: 155,
  },
  {
    level: CefrLevel.C2,
    orderInLevel: 4,
    title: 'Modismos y matices',
    subtitle: 'Redewendungen sicher verwenden',
    description:
      'Die Wendungen, die kein Wörterbuch erschließt: Idiomatik, Ironie, Untertreibung – und das Gespür dafür, wann sie passen und wann nicht.',
    coverEmoji: '🗝️',
    goals: [
      'Ich kann idiomatische Wendungen treffsicher einsetzen.',
      'Ich kann Ironie verstehen und erzeugen.',
      'Ich kann Nuancen zwischen Synonymen unterscheiden.',
      'Ich kann umgangssprachliche Register angemessen nutzen.',
    ],
    estimatedMinutes: 160,
  },
  {
    level: CefrLevel.C2,
    orderInLevel: 5,
    title: 'Debate y mediación',
    subtitle: 'Moderieren und vermitteln',
    description:
      'Eine Diskussion leiten, zwischen Positionen vermitteln, zusammenfassen, ohne Partei zu ergreifen. Sprachliche Neutralität als Fertigkeit.',
    coverEmoji: '🤝',
    goals: [
      'Ich kann eine Diskussion moderieren.',
      'Ich kann zwischen Positionen vermitteln.',
      'Ich kann neutral zusammenfassen.',
      'Ich kann Redebeiträge fair steuern.',
    ],
    estimatedMinutes: 160,
  },
  {
    level: CefrLevel.C2,
    orderInLevel: 6,
    title: 'Divulgación',
    subtitle: 'Komplexes verständlich machen',
    description:
      'Fachinhalte für ein Laienpublikum aufbereiten, ohne sie zu verfälschen. Die schwierigste Übung: weglassen, was nicht trägt.',
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
 * Der vollständige spanische Lehrplan: die drei Kursbücher, dann das
 * Grammatikbuch.
 */
export const SPANISH_CURRICULUM: ChapterSeed[] = [
  ...toBookChapters(COURSE_CHAPTERS),
  ...SPANISH_GRAMMAR_CURRICULUM,
];
