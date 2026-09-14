import { CefrLevel, WorkbookBook } from '@prisma/client';
import type { ChapterSeed } from './curriculum';

/**
 * Das Grammatikbuch – zwölf Kapitel, eines je Thema.
 *
 * Es steht quer zu den drei Kursbüchern: Wer im Beginner-Buch über den
 * Akkusativ stolpert, schlägt hier das Kapitel dazu auf, ohne dafür eine Stufe
 * zu wechseln. Die Reihenfolge folgt dem Aufbau der Sprache – erst, was ein
 * Satz braucht (Artikel, Fälle, Verb, Satzbau), dann, was ihn ausbaut
 * (Nebensätze, Präpositionen, Adjektive), und zuletzt die Formen, die man erst
 * spät braucht (Passiv, Konjunktiv).
 *
 * `level` ist hier eine Angabe, ab wann das Thema gebraucht wird, keine
 * Sortierung: Das Buch läuft von Kapitel 1 bis 12 durch.
 */
const GRAMMAR_CHAPTERS: Array<Omit<ChapterSeed, 'book'>> = [
  {
    level: CefrLevel.A1,
    order: 1,
    title: 'Artikel und Nomen',
    subtitle: 'der, die, das – und der Plural',
    description:
      'Jedes deutsche Nomen hat ein Geschlecht, und man sieht es ihm selten an. Dieses Kapitel zeigt, welche Endungen das Geschlecht doch verraten, wann der unbestimmte Artikel steht und wie der Plural gebildet wird.',
    coverEmoji: '🔤',
    goals: [
      'Ich kann bestimmte und unbestimmte Artikel unterscheiden.',
      'Ich kann an typischen Endungen das Geschlecht eines Nomens erkennen.',
      'Ich kann die häufigsten Pluralformen bilden.',
      'Ich kann Nomen richtig großschreiben.',
    ],
    estimatedMinutes: 60,
  },
  {
    level: CefrLevel.A1,
    order: 2,
    title: 'Die vier Fälle',
    subtitle: 'Nominativ, Akkusativ, Dativ, Genitiv',
    description:
      'Der Fall zeigt, welche Rolle ein Nomen im Satz spielt. Hier stehen alle vier Fälle in einer Tabelle nebeneinander – mit den Fragen, an denen man sie erkennt.',
    coverEmoji: '🧭',
    goals: [
      'Ich kann Subjekt und Objekt im Satz bestimmen.',
      'Ich kann die Artikel in allen vier Fällen beugen.',
      'Ich kann Verben mit Dativ von Verben mit Akkusativ unterscheiden.',
      'Ich kann den Genitiv als Fall der Zugehörigkeit verwenden.',
    ],
    estimatedMinutes: 75,
  },
  {
    level: CefrLevel.A1,
    order: 3,
    title: 'Verben im Präsens',
    subtitle: 'Regelmäßig, unregelmäßig, trennbar',
    description:
      'Die Gegenwart ist die Zeitform, mit der man anfängt. Dieses Kapitel ordnet die Endungen, die Vokalwechsel der starken Verben und das Auseinanderfallen der trennbaren Verben.',
    coverEmoji: '⚙️',
    goals: [
      'Ich kann regelmäßige Verben im Präsens konjugieren.',
      'Ich kann den Vokalwechsel bei starken Verben anwenden.',
      'Ich kann trennbare Verben im Satz richtig stellen.',
      'Ich kann sein, haben und werden sicher verwenden.',
    ],
    estimatedMinutes: 70,
  },
  {
    level: CefrLevel.A2,
    order: 4,
    title: 'Über Vergangenes sprechen',
    subtitle: 'Perfekt, Präteritum, Plusquamperfekt',
    description:
      'Gesprochen wird im Perfekt, geschrieben oft im Präteritum. Hier steht, wie beide gebildet werden, wann haben und wann sein als Hilfsverb steht und wozu das Plusquamperfekt gut ist.',
    coverEmoji: '⏮️',
    goals: [
      'Ich kann das Perfekt mit haben und sein bilden.',
      'Ich kann Partizipien regelmäßiger und unregelmäßiger Verben bilden.',
      'Ich kann das Präteritum der häufigen Verben verwenden.',
      'Ich kann mit dem Plusquamperfekt Vorzeitigkeit ausdrücken.',
    ],
    estimatedMinutes: 80,
  },
  {
    level: CefrLevel.A2,
    order: 5,
    title: 'Modalverben',
    subtitle: 'können, müssen, dürfen, sollen, wollen, mögen',
    description:
      'Sechs Verben, die nicht sagen, was passiert, sondern wie es gemeint ist – als Fähigkeit, Pflicht, Erlaubnis oder Wunsch. Mit ihnen kommt die Verbklammer in den Satz.',
    coverEmoji: '🔑',
    goals: [
      'Ich kann die sechs Modalverben im Präsens konjugieren.',
      'Ich kann die Verbklammer im Hauptsatz bilden.',
      'Ich kann müssen und dürfen in der Verneinung unterscheiden.',
      'Ich kann Modalverben im Präteritum verwenden.',
    ],
    estimatedMinutes: 70,
  },
  {
    level: CefrLevel.A2,
    order: 6,
    title: 'Der Satzbau',
    subtitle: 'Position 2, Fragen, Verbklammer',
    description:
      'Im deutschen Hauptsatz steht das gebeugte Verb an zweiter Stelle – fast alles andere darf sich davor und dahinter sortieren. Dieses Kapitel macht die Regel und ihre Folgen sichtbar.',
    coverEmoji: '🧱',
    goals: [
      'Ich kann das Verb im Hauptsatz an Position 2 stellen.',
      'Ich kann W-Fragen und Ja/Nein-Fragen bilden.',
      'Ich kann Satzteile vor das Verb stellen, um sie hervorzuheben.',
      'Ich kann die Verbklammer bei Modalverben und Perfekt bilden.',
    ],
    estimatedMinutes: 75,
  },
  {
    level: CefrLevel.B1,
    order: 7,
    title: 'Nebensätze und Konjunktionen',
    subtitle: 'weil, dass, wenn – und das Verb am Ende',
    description:
      'Nebensätze schieben das Verb ans Ende. Hier stehen die häufigen Konjunktionen nach ihrer Bedeutung geordnet – Grund, Bedingung, Zeit, Gegensatz – samt der Frage, welche den Satzbau ändern und welche nicht.',
    coverEmoji: '🔗',
    goals: [
      'Ich kann Haupt- und Nebensatz unterscheiden.',
      'Ich kann mit weil, da und denn begründen.',
      'Ich kann Bedingungen mit wenn und falls ausdrücken.',
      'Ich kann Relativsätze bilden.',
    ],
    estimatedMinutes: 85,
  },
  {
    level: CefrLevel.B1,
    order: 8,
    title: 'Präpositionen',
    subtitle: 'Mit Akkusativ, mit Dativ, wechselnd',
    description:
      'Präpositionen bestimmen den Fall des Nomens, das ihnen folgt. Die schwierige Gruppe sind die Wechselpräpositionen: Bei ihnen entscheidet die Frage wohin oder wo.',
    coverEmoji: '📍',
    goals: [
      'Ich kann Präpositionen mit festem Fall verwenden.',
      'Ich kann bei Wechselpräpositionen zwischen wo und wohin unterscheiden.',
      'Ich kann Verben mit fester Präposition verwenden.',
      'Ich kann lokale, temporale und kausale Präpositionen einordnen.',
    ],
    estimatedMinutes: 85,
  },
  {
    level: CefrLevel.B1,
    order: 9,
    title: 'Adjektive',
    subtitle: 'Deklination und Steigerung',
    description:
      'Steht ein Adjektiv vor dem Nomen, bekommt es eine Endung – welche, hängt vom Artikel davor ab. Dazu kommen Komparativ und Superlativ und die Vergleiche mit wie und als.',
    coverEmoji: '🎨',
    goals: [
      'Ich kann Adjektive nach bestimmtem und unbestimmtem Artikel beugen.',
      'Ich kann Adjektive ohne Artikel richtig beugen.',
      'Ich kann Komparativ und Superlativ bilden.',
      'Ich kann mit als und wie vergleichen.',
    ],
    estimatedMinutes: 90,
  },
  {
    level: CefrLevel.B2,
    order: 10,
    title: 'Pronomen',
    subtitle: 'Personal-, Possessiv-, Reflexiv- und Relativpronomen',
    description:
      'Pronomen ersetzen, was schon gesagt ist. Dieses Kapitel ordnet die Formen nach Fall und zeigt, wie zwei Pronomen im Satz zueinander stehen.',
    coverEmoji: '🪞',
    goals: [
      'Ich kann Personalpronomen in allen Fällen verwenden.',
      'Ich kann Possessivpronomen richtig beugen.',
      'Ich kann reflexive Verben mit sich verwenden.',
      'Ich kann die Stellung zweier Objekte im Satz bestimmen.',
    ],
    estimatedMinutes: 80,
  },
  {
    level: CefrLevel.B2,
    order: 11,
    title: 'Das Passiv',
    subtitle: 'Wenn die Handlung wichtiger ist als der Handelnde',
    description:
      'Im Passiv rückt das Objekt an die Stelle des Subjekts. Gebraucht wird es überall dort, wo Vorgänge zählen und nicht Personen – in Berichten, Anleitungen, Vorschriften.',
    coverEmoji: '🔄',
    goals: [
      'Ich kann das Vorgangspassiv in allen Zeitformen bilden.',
      'Ich kann Zustands- und Vorgangspassiv unterscheiden.',
      'Ich kann den Handelnden mit von oder durch nennen.',
      'Ich kann Passivsätze in Aktivsätze umformen.',
    ],
    estimatedMinutes: 85,
  },
  {
    level: CefrLevel.C1,
    order: 12,
    title: 'Konjunktiv und indirekte Rede',
    subtitle: 'Höflichkeit, Irreales, Zitiertes',
    description:
      'Der Konjunktiv II macht aus einer Behauptung eine Möglichkeit, aus einer Bitte eine Höflichkeit. Der Konjunktiv I hält in Berichten Abstand zum Gesagten.',
    coverEmoji: '🕯️',
    goals: [
      'Ich kann irreale Bedingungen mit dem Konjunktiv II ausdrücken.',
      'Ich kann höflich bitten und Vorschläge machen.',
      'Ich kann Wünsche und Vermutungen formulieren.',
      'Ich kann in der indirekten Rede den Konjunktiv I verwenden.',
    ],
    estimatedMinutes: 95,
  },
];

export const GRAMMAR_CURRICULUM: ChapterSeed[] = GRAMMAR_CHAPTERS.map((chapter) => ({
  ...chapter,
  book: WorkbookBook.GRAMMAR,
}));
