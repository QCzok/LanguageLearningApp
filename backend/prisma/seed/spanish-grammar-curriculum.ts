import { CefrLevel, WorkbookBook } from '@prisma/client';
import type { ChapterSeed } from './curriculum';

/**
 * Das spanische Grammatikbuch – zwölf Kapitel, eines je Thema.
 *
 * Es steht quer zu den drei Kursbüchern: Wer im Beginner-Buch über ser und
 * estar stolpert, schlägt hier das Kapitel dazu auf, ohne dafür eine Stufe zu
 * wechseln.
 *
 * Die Reihenfolge folgt dem Aufbau des Spanischen, nicht dem des Deutschen.
 * Der deutsche Band ordnet nach Fällen und Satzklammer; beides gibt es hier
 * nicht. Stattdessen führt der Weg über das, was einen spanischen Satz trägt
 * (Artikel, die beiden „sein“-Verben, das Präsens, Objektpronomen), dann über
 * die Vergangenheitszeiten, deren Unterscheidung die eigentliche Arbeit ist,
 * und zuletzt über den Subjuntivo, der das Spanische bis C1 begleitet.
 *
 * `level` ist wie im deutschen Band eine Angabe, ab wann das Thema gebraucht
 * wird, keine Sortierung: Das Buch läuft von Kapitel 1 bis 12 durch.
 */
const GRAMMAR_CHAPTERS: Array<Omit<ChapterSeed, 'book'>> = [
  {
    level: CefrLevel.A1,
    order: 1,
    title: 'Artikel und Substantive',
    subtitle: 'el, la, los, las – und das Geschlecht',
    description:
      'Jedes spanische Substantiv ist männlich oder weiblich, und anders als im Deutschen verrät die Endung es meistens. Dieses Kapitel zeigt die Regel, ihre bekannten Ausnahmen und die Bildung des Plurals.',
    coverEmoji: '🔤',
    goals: [
      'Ich kann bestimmte und unbestimmte Artikel unterscheiden.',
      'Ich kann an der Endung das Geschlecht eines Substantivs erkennen.',
      'Ich kann den Plural regelmäßig bilden.',
      'Ich kann die häufigsten Ausnahmen benennen.',
    ],
    estimatedMinutes: 60,
  },
  {
    level: CefrLevel.A1,
    order: 2,
    title: 'ser und estar',
    subtitle: 'Zwei Verben für „sein“',
    description:
      'Die erste echte Hürde des Spanischen. „ser“ nennt, was etwas ist, „estar“, wie oder wo es gerade ist. Dieses Kapitel stellt beide nebeneinander – mit den Fällen, in denen dasselbe Adjektiv mit beiden etwas anderes bedeutet.',
    coverEmoji: '⚖️',
    goals: [
      'Ich kann ser und estar konjugieren.',
      'Ich kann entscheiden, welches der beiden Verben passt.',
      'Ich kann Ort und Befinden mit estar ausdrücken.',
      'Ich kann Bedeutungsunterschiede wie „ser listo“ und „estar listo“ erklären.',
    ],
    estimatedMinutes: 75,
  },
  {
    level: CefrLevel.A1,
    order: 3,
    title: 'Das Präsens',
    subtitle: 'Regelmäßig, diphthongierend, unregelmäßig',
    description:
      'Die Gegenwart, mit der man anfängt: die drei Konjugationen auf -ar, -er und -ir, die Vokalwechsel der diphthongierenden Verben und die Verben, die man einzeln lernt.',
    coverEmoji: '⚙️',
    goals: [
      'Ich kann regelmäßige Verben aller drei Konjugationen bilden.',
      'Ich kann den Vokalwechsel e→ie und o→ue anwenden.',
      'Ich kann die häufigsten unregelmäßigen Verben verwenden.',
      'Ich kann reflexive Verben konjugieren.',
    ],
    estimatedMinutes: 80,
  },
  {
    level: CefrLevel.A1,
    order: 4,
    title: 'Pronomen',
    subtitle: 'Subjekt, Objekt und ihre Stellung',
    description:
      'Wer handelt, wen betrifft es, wem nützt es. Dieses Kapitel ordnet die Personal-, Akkusativ- und Dativpronomen – und klärt die Frage, die daran hängt: wo im Satz sie stehen.',
    coverEmoji: '🔗',
    goals: [
      'Ich kann direkte und indirekte Objektpronomen unterscheiden.',
      'Ich kann beide Pronomen in der richtigen Reihenfolge setzen.',
      'Ich kann Pronomen an den Infinitiv und das Gerundium anhängen.',
      'Ich kann das Subjektpronomen weglassen, wo es überflüssig ist.',
    ],
    estimatedMinutes: 80,
  },
  {
    level: CefrLevel.A2,
    order: 5,
    title: 'gustar und verwandte Verben',
    subtitle: 'Wenn das Subjekt hinten steht',
    description:
      'Nicht ich mag das Buch – das Buch gefällt mir. Eine kleine Gruppe von Verben dreht den Satzbau um. Wer sie einmal durchschaut hat, kann auch doler, interesar, encantar und faltar.',
    coverEmoji: '🔄',
    goals: [
      'Ich kann Sätze mit gustar korrekt bilden.',
      'Ich kann das indirekte Objekt mit „a“ verstärken.',
      'Ich kann verwandte Verben nach demselben Muster verwenden.',
      'Ich kann Zustimmung und Ablehnung ausdrücken.',
    ],
    estimatedMinutes: 65,
  },
  {
    level: CefrLevel.A2,
    order: 6,
    title: 'Indefinido und Imperfecto',
    subtitle: 'Die Vergangenheit unterscheiden',
    description:
      'Das Kapitel, das über das Spanische entscheidet. Beide Formen sind Vergangenheit, aber sie erzählen Verschiedenes: das Indefinido, was geschah, das Imperfecto, wie es war. Hier stehen sie gegenüber.',
    coverEmoji: '🕰️',
    goals: [
      'Ich kann beide Zeiten regelmäßig bilden.',
      'Ich kann die wichtigsten unregelmäßigen Formen verwenden.',
      'Ich kann Handlung und Hintergrund unterscheiden.',
      'Ich kann beide Zeiten in einer Erzählung verbinden.',
    ],
    estimatedMinutes: 100,
  },
  {
    level: CefrLevel.A2,
    order: 7,
    title: 'Perfecto und Pluscuamperfecto',
    subtitle: 'Das Zusammengesetzte',
    description:
      'Mit „haber“ und dem Partizip entstehen die zusammengesetzten Zeiten: das Perfecto für das, was nachwirkt, das Pluscuamperfecto für das, was noch davor lag.',
    coverEmoji: '⏳',
    goals: [
      'Ich kann das Partizip regelmäßig und unregelmäßig bilden.',
      'Ich kann das Perfecto verwenden.',
      'Ich kann Vorzeitigkeit mit dem Pluscuamperfecto ausdrücken.',
      'Ich kann Perfecto und Indefinido regional einordnen.',
    ],
    estimatedMinutes: 75,
  },
  {
    level: CefrLevel.A2,
    order: 8,
    title: 'Adjektive und Vergleich',
    subtitle: 'Angleichung, Steigerung, Stellung',
    description:
      'Adjektive richten sich im Spanischen nach dem Substantiv – in Geschlecht und Zahl. Dazu die Vergleichsformen und die Fälle, in denen die Stellung des Adjektivs die Bedeutung ändert.',
    coverEmoji: '📐',
    goals: [
      'Ich kann Adjektive korrekt angleichen.',
      'Ich kann mit más, menos und tan vergleichen.',
      'Ich kann den Superlativ bilden.',
      'Ich kann die Bedeutung nachgestellter und vorangestellter Adjektive unterscheiden.',
    ],
    estimatedMinutes: 70,
  },
  {
    level: CefrLevel.B1,
    order: 9,
    title: 'Der Subjuntivo',
    subtitle: 'Wunsch, Wertung, Zweifel',
    description:
      'Keine Zeit, sondern ein Modus: Der Subjuntivo markiert, dass etwas gewünscht, bewertet oder bezweifelt wird. Dieses Kapitel bildet die Formen und ordnet die Auslöser, an denen man ihn erkennt.',
    coverEmoji: '🌀',
    goals: [
      'Ich kann den Presente de Subjuntivo bilden.',
      'Ich kann die typischen Auslöser erkennen.',
      'Ich kann Wunsch, Zweifel und Wertung ausdrücken.',
      'Ich kann Indikativ und Subjuntivo gegenüberstellen.',
    ],
    estimatedMinutes: 105,
  },
  {
    level: CefrLevel.B1,
    order: 10,
    title: 'Imperativ und Aufforderung',
    subtitle: 'Bitten, raten, verbieten',
    description:
      'Der bejahte Imperativ hat eigene Formen, der verneinte leiht sich die des Subjuntivo. Dazu die Frage, wo die Pronomen bleiben – angehängt oder davor.',
    coverEmoji: '❗',
    goals: [
      'Ich kann den bejahten Imperativ bilden.',
      'Ich kann Verbote mit dem verneinten Imperativ ausdrücken.',
      'Ich kann Pronomen korrekt anschließen.',
      'Ich kann höflich auffordern.',
    ],
    estimatedMinutes: 75,
  },
  {
    level: CefrLevel.B2,
    order: 11,
    title: 'Bedingungssätze',
    subtitle: 'Real, irreal, unerfüllbar',
    description:
      'Drei Typen, drei Formenpaare: vom erfüllbaren „si tengo tiempo“ über das irreale „si tuviera tiempo“ bis zum unerfüllbaren „si hubiera tenido tiempo“. Mit dem Subjuntivo Imperfecto.',
    coverEmoji: '🔀',
    goals: [
      'Ich kann die drei Typen unterscheiden.',
      'Ich kann den Subjuntivo Imperfecto bilden.',
      'Ich kann über Hypothetisches sprechen.',
      'Ich kann Bedauern über Vergangenes ausdrücken.',
    ],
    estimatedMinutes: 100,
  },
  {
    level: CefrLevel.B2,
    order: 12,
    title: 'Passiv, se und indirekte Rede',
    subtitle: 'Wenn der Handelnde verschwindet',
    description:
      'Das echte Passiv ist im Spanischen selten – gebräuchlicher sind die Konstruktionen mit „se“. Dazu die indirekte Rede mit ihrer Zeitenverschiebung.',
    coverEmoji: '🕯️',
    goals: [
      'Ich kann das Passiv mit ser bilden.',
      'Ich kann die Konstruktionen mit se verwenden.',
      'Ich kann Aussagen in der indirekten Rede wiedergeben.',
      'Ich kann die Zeitenverschiebung korrekt anwenden.',
    ],
    estimatedMinutes: 100,
  },
];

export const SPANISH_GRAMMAR_CURRICULUM: ChapterSeed[] = GRAMMAR_CHAPTERS.map((chapter) => ({
  ...chapter,
  book: WorkbookBook.GRAMMAR,
}));
