import { CefrLevel, WorkbookBook } from '@prisma/client';
import type { ChapterSeed } from './curriculum';

/**
 * Das englische Grammatikbuch – zwölf Kapitel, eines je Thema.
 *
 * Wie im deutschen und spanischen Band steht es quer zu den Kursbüchern: Wer
 * im Beginner-Buch über „does“ stolpert, schlägt hier das Kapitel zum Present
 * Simple auf.
 *
 * Die Reihenfolge folgt dem, was Deutschsprachigen am Englischen schwerfällt:
 * Artikel und Plural sind leicht, dafür verlangt das Verb Hilfsverben (do,
 * does, did), die das Deutsche nicht kennt, und die Zeiten unterscheiden
 * Verlaufsform und einfache Form. Das Present Perfect, das nicht dem deutschen
 * Perfekt entspricht, kommt erst, wenn die Vergangenheit sitzt.
 *
 * `level` ist eine Angabe, ab wann das Thema gebraucht wird, keine Sortierung:
 * Das Buch läuft von Kapitel 1 bis 12 durch.
 */
const GRAMMAR_CHAPTERS: Array<Omit<ChapterSeed, 'book'>> = [
  {
    level: CefrLevel.A1,
    order: 1,
    title: 'Articles and nouns',
    subtitle: 'a, an, the – und der Plural',
    description:
      'Englische Substantive haben kein Geschlecht, und „the“ passt zu allem. Die Arbeit steckt woanders: in der Wahl zwischen „a“ und „an“, in den Fällen, in denen gar kein Artikel steht, und in den unregelmäßigen Pluralformen.',
    coverEmoji: '🔤',
    goals: [
      'Ich kann zwischen „a“ und „an“ nach dem Anlaut entscheiden.',
      'Ich kann „the“ und „a“ richtig einsetzen.',
      'Ich kann den Plural regelmäßig bilden.',
      'Ich kann die häufigsten unregelmäßigen Pluralformen verwenden.',
    ],
    estimatedMinutes: 60,
  },
  {
    level: CefrLevel.A1,
    order: 2,
    title: 'to be',
    subtitle: 'am, is, are – und there is',
    description:
      'Das wichtigste Verb des Englischen, mit Kurzformen, Fragen und Verneinung. Dazu „there is“ und „there are“, mit denen man sagt, was es wo gibt.',
    coverEmoji: '🧩',
    goals: [
      'Ich kann „to be“ in allen Personen bilden.',
      'Ich kann Fragen und Verneinungen mit „to be“ bilden.',
      'Ich kann Kurzformen wie „I’m“ und „isn’t“ verwenden.',
      'Ich kann mit „there is/are“ sagen, was es gibt.',
    ],
    estimatedMinutes: 70,
  },
  {
    level: CefrLevel.A1,
    order: 3,
    title: 'Present simple',
    subtitle: 'Gewohnheiten, Fakten – und do/does',
    description:
      'Die Zeit für das, was immer oder regelmäßig geschieht. Einfach in der Form, bis auf zwei Dinge: das „-s“ in der dritten Person und das Hilfsverb „do“, ohne das keine Frage und keine Verneinung auskommt.',
    coverEmoji: '⚙️',
    goals: [
      'Ich kann das Present Simple bilden – mit dem -s bei he, she, it.',
      'Ich kann Fragen mit do und does bilden.',
      'Ich kann mit don’t und doesn’t verneinen.',
      'Ich kann Häufigkeitsadverbien richtig stellen.',
    ],
    estimatedMinutes: 80,
  },
  {
    level: CefrLevel.A1,
    order: 4,
    title: 'Pronouns and possessives',
    subtitle: 'I, me, my – und das Genitiv-s',
    description:
      'Wer handelt, wen es betrifft, wem etwas gehört. Dieses Kapitel ordnet Subjekt- und Objektpronomen, die Possessivbegleiter und das „’s“ – und dazu this, that, these und those.',
    coverEmoji: '🔗',
    goals: [
      'Ich kann Subjekt- und Objektpronomen unterscheiden.',
      'Ich kann Besitz mit my, your, his, her … ausdrücken.',
      'Ich kann das Genitiv-s richtig setzen.',
      'Ich kann this, that, these und those verwenden.',
    ],
    estimatedMinutes: 75,
  },
  {
    level: CefrLevel.A2,
    order: 5,
    title: 'Present continuous',
    subtitle: 'Was gerade passiert',
    description:
      'Das Deutsche sagt „ich arbeite“ für jetzt und für immer, das Englische nicht. Dieses Kapitel stellt die Verlaufsform neben das Present Simple und zeigt, welche Verben keine Verlaufsform bilden.',
    coverEmoji: '⏳',
    goals: [
      'Ich kann das Present Continuous bilden.',
      'Ich kann zwischen Present Simple und Continuous entscheiden.',
      'Ich kann Zustandsverben erkennen.',
      'Ich kann mit dem Present Continuous über Pläne sprechen.',
    ],
    estimatedMinutes: 80,
  },
  {
    level: CefrLevel.A2,
    order: 6,
    title: 'Past simple',
    subtitle: 'Regelmäßig, unregelmäßig, did',
    description:
      'Die Erzählzeit des Englischen. Regelmäßige Verben enden auf -ed, die häufigsten Verben sind unregelmäßig, und für Fragen und Verneinung kommt „did“ ins Spiel.',
    coverEmoji: '📜',
    goals: [
      'Ich kann regelmäßige Verben im Past Simple bilden.',
      'Ich kann die häufigsten unregelmäßigen Formen verwenden.',
      'Ich kann Fragen und Verneinungen mit did bilden.',
      'Ich kann was/were richtig einsetzen.',
    ],
    estimatedMinutes: 85,
  },
  {
    level: CefrLevel.A2,
    order: 7,
    title: 'The future',
    subtitle: 'will, going to, Present Continuous',
    description:
      'Drei Wege, über die Zukunft zu sprechen – und keiner davon ist falsch, aber jeder sagt etwas anderes: eine spontane Entscheidung, einen Plan, eine feste Verabredung.',
    coverEmoji: '🔭',
    goals: [
      'Ich kann Vorhersagen und spontane Entscheidungen mit will ausdrücken.',
      'Ich kann Pläne mit going to beschreiben.',
      'Ich kann feste Termine mit dem Present Continuous angeben.',
      'Ich kann zwischen den drei Formen wählen.',
    ],
    estimatedMinutes: 80,
  },
  {
    level: CefrLevel.A2,
    order: 8,
    title: 'Adjectives and comparison',
    subtitle: '-er, more, the most',
    description:
      'Englische Adjektive werden nicht gebeugt – dafür hängt die Steigerung an der Silbenzahl. Dazu Adverbien auf -ly und die Vergleiche mit „as … as“.',
    coverEmoji: '📏',
    goals: [
      'Ich kann Komparativ und Superlativ bilden.',
      'Ich kann die unregelmäßigen Formen good, bad, far verwenden.',
      'Ich kann Adjektiv und Adverb unterscheiden.',
      'Ich kann mit as … as vergleichen.',
    ],
    estimatedMinutes: 75,
  },
  {
    level: CefrLevel.B1,
    order: 9,
    title: 'Present perfect',
    subtitle: 'Nicht das deutsche Perfekt',
    description:
      'Das Present Perfect sieht aus wie das deutsche Perfekt und bedeutet etwas anderes: Es verbindet die Vergangenheit mit der Gegenwart. Dieses Kapitel zeigt, wann es steht, wann das Past Simple – und was for und since damit zu tun haben.',
    coverEmoji: '🔁',
    goals: [
      'Ich kann das Present Perfect bilden.',
      'Ich kann zwischen Present Perfect und Past Simple entscheiden.',
      'Ich kann for und since richtig verwenden.',
      'Ich kann ever, never, already, yet und just einsetzen.',
    ],
    estimatedMinutes: 95,
  },
  {
    level: CefrLevel.B1,
    order: 10,
    title: 'Modal verbs',
    subtitle: 'can, must, have to, should',
    description:
      'Können, müssen, sollen, dürfen – auf Englisch mit einigen Fallen: „must not“ heißt nicht „muss nicht“, und in der Vergangenheit brauchen die meisten Modalverben einen Ersatz.',
    coverEmoji: '🗝️',
    goals: [
      'Ich kann Fähigkeit, Erlaubnis und Pflicht ausdrücken.',
      'Ich kann must not und don’t have to unterscheiden.',
      'Ich kann Ratschläge mit should geben.',
      'Ich kann Vermutungen mit might und must ausdrücken.',
    ],
    estimatedMinutes: 90,
  },
  {
    level: CefrLevel.B2,
    order: 11,
    title: 'Conditionals',
    subtitle: 'Real, irreal, vergangen',
    description:
      'Die Bedingungssätze vom Typ 0 bis 3 und die gemischten Formen. Dazu „wish“ und „if only“, mit denen man bedauert, was nicht ist oder nicht war.',
    coverEmoji: '🔀',
    goals: [
      'Ich kann reale Bedingungen formulieren.',
      'Ich kann irreale Bedingungen in Gegenwart und Vergangenheit bilden.',
      'Ich kann gemischte Bedingungssätze verstehen.',
      'Ich kann mit wish Bedauern ausdrücken.',
    ],
    estimatedMinutes: 100,
  },
  {
    level: CefrLevel.B2,
    order: 12,
    title: 'Passive and reported speech',
    subtitle: 'Wenn der Handelnde verschwindet',
    description:
      'Das Passiv in allen Zeiten und die indirekte Rede mit ihrer Zeitenverschiebung – zwei Werkzeuge, ohne die Nachrichten und Berichte nicht auskommen.',
    coverEmoji: '🕯️',
    goals: [
      'Ich kann das Passiv in den wichtigsten Zeiten bilden.',
      'Ich kann entscheiden, wann ein Passiv sinnvoll ist.',
      'Ich kann Aussagen und Fragen in der indirekten Rede wiedergeben.',
      'Ich kann die Zeitenverschiebung korrekt anwenden.',
    ],
    estimatedMinutes: 100,
  },
];

export const ENGLISH_GRAMMAR_CURRICULUM: ChapterSeed[] = GRAMMAR_CHAPTERS.map((chapter) => ({
  ...chapter,
  book: WorkbookBook.GRAMMAR,
}));
