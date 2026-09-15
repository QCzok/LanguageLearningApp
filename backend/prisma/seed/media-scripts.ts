/**
 * Die Sprechtexte der Mediathek.
 *
 * Eine Quelle für zwei Dinge: Aus derselben Zeilenliste entsteht das
 * Transkript, das die App unter der Folge anzeigt, und die Audiodatei, die
 * `scripts/generate-media-audio.ts` daraus synthetisiert. Getrennte Fassungen
 * würden auseinanderlaufen, sobald jemand einen Satz ändert – und ein
 * Transkript, das nicht zum Gehörten passt, ist beim Hörverstehen schlimmer
 * als keines.
 *
 * Jede Zeile trägt ihre Stimme. Ein Dialog mit zwei Sprechenden wird deshalb
 * Zeile für Zeile synthetisiert und zusammengesetzt, statt von einer Stimme
 * durchgelesen zu werden – wer Hörverstehen übt, muss zwei Personen
 * auseinanderhalten können.
 *
 * Sämtliche Texte sind eigenständig verfasst.
 */

/** Stimmen der OpenAI-Sprachsynthese, auf die hier zurückgegriffen wird. */
export type MediaVoice = 'alloy' | 'echo' | 'fable' | 'nova' | 'onyx' | 'sage' | 'shimmer';

export interface MediaScriptLine {
  /** Sprecherkürzel wie im Transkript. Fehlt bei durchgehender Erzählung. */
  speaker?: string;
  voice: MediaVoice;
  text: string;
}

export interface MediaScript {
  /** Titel des Mediathek-Eintrags – darüber wird zugeordnet. */
  title: string;
  /** Sprache der Aufnahme; steuert die Aussprache-Anweisung an das Modell. */
  language: 'de' | 'en';
  /**
   * Sprechtempo. Auf den unteren Niveaus bewusst unter 1: Eine A2-Lektion in
   * Muttersprachlergeschwindigkeit ist kein Hörverstehen, sondern ein Test.
   */
  speed: number;
  /** Regieanweisung an das Modell – Tonfall, Haltung, Pausen. */
  instructions: string;
  lines: MediaScriptLine[];
}

// ------------------------------------------------------------------ Deutsch

const BEIM_BAECKER: MediaScript = {
  title: 'Beim Bäcker',
  language: 'de',
  speed: 0.9,
  instructions:
    'Alltagsgespräch an einer Ladentheke. Freundlich, deutlich artikuliert, ohne Hast. Kurze Pause am Satzende.',
  lines: [
    { speaker: 'A', voice: 'nova', text: 'Guten Morgen! Was darf es sein?' },
    { speaker: 'B', voice: 'onyx', text: 'Guten Morgen. Zwei Brötchen, bitte.' },
    { speaker: 'A', voice: 'nova', text: 'Sonst noch etwas?' },
    { speaker: 'B', voice: 'onyx', text: 'Noch ein kleines Brot, bitte. Was macht das zusammen?' },
    { speaker: 'A', voice: 'nova', text: 'Drei Euro zwanzig.' },
    { speaker: 'B', voice: 'onyx', text: 'Bitte schön.' },
    { speaker: 'A', voice: 'nova', text: 'Danke schön. Einen schönen Tag noch!' },
  ],
};

const WOCHENENDE: MediaScript = {
  title: 'Vom Wochenende erzählen',
  language: 'de',
  speed: 0.9,
  instructions:
    'Ruhige Lehrerstimme für eine Audiolektion. Erklärungen sachlich und deutlich; Beispielsätze etwas langsamer und betont, damit man sie mitsprechen kann.',
  lines: [
    {
      voice: 'sage',
      text: 'Willkommen zu dieser Lektion. Heute geht es um eine Frage, die Sie am Montagmorgen fast überall hören: Wie war dein Wochenende?',
    },
    {
      voice: 'sage',
      text: 'Wenn Sie darauf antworten, sprechen Sie über die Vergangenheit. Im gesprochenen Deutsch nimmt man dafür fast immer das Perfekt. Das Perfekt besteht aus zwei Teilen: einem Hilfsverb und einem Partizip.',
    },
    {
      voice: 'sage',
      text: 'Das Hilfsverb ist haben oder sein. Es steht an zweiter Stelle im Satz und wird gebeugt. Das Partizip steht ganz am Ende und verändert sich nicht. Hören Sie den Unterschied.',
    },
    { speaker: 'Beispiel', voice: 'nova', text: 'Ich habe am Samstag lange geschlafen.' },
    { speaker: 'Beispiel', voice: 'nova', text: 'Ich bin am Sonntag ins Schwimmbad gegangen.' },
    {
      voice: 'sage',
      text: 'Im ersten Satz steht habe, im zweiten bin. Woran liegt das? Die meisten Verben bilden das Perfekt mit haben. Mit sein bilden es die Verben der Bewegung von einem Ort zum anderen – gehen, fahren, fliegen, kommen – und ein paar Verben der Veränderung, zum Beispiel aufstehen, einschlafen und bleiben.',
    },
    { voice: 'sage', text: 'Hören Sie drei Sätze mit sein und sprechen Sie sie nach.' },
    { speaker: 'Beispiel', voice: 'nova', text: 'Wir sind am Freitag nach Leipzig gefahren.' },
    { speaker: 'Beispiel', voice: 'nova', text: 'Ich bin um sieben Uhr aufgestanden.' },
    { speaker: 'Beispiel', voice: 'nova', text: 'Am Sonntag bin ich zu Hause geblieben.' },
    {
      voice: 'sage',
      text: 'Und jetzt drei Sätze mit haben. Achten Sie darauf, dass das Partizip immer am Satzende steht.',
    },
    { speaker: 'Beispiel', voice: 'nova', text: 'Ich habe einen Film gesehen.' },
    { speaker: 'Beispiel', voice: 'nova', text: 'Wir haben zusammen gekocht.' },
    { speaker: 'Beispiel', voice: 'nova', text: 'Meine Schwester hat mich angerufen.' },
    {
      voice: 'sage',
      text: 'Bei regelmäßigen Verben bilden Sie das Partizip mit ge am Anfang und t am Ende: kochen wird zu gekocht, machen zu gemacht, arbeiten zu gearbeitet. Bei unregelmäßigen Verben steht am Ende ein en, und oft ändert sich der Vokal: sehen wird zu gesehen, trinken zu getrunken, gehen zu gegangen. Diese Formen lernt man einzeln.',
    },
    {
      voice: 'sage',
      text: 'Zwei Gruppen bekommen kein ge. Trennbare Verben schieben es in die Mitte: anrufen wird zu angerufen, einkaufen zu eingekauft. Und Verben auf ieren sowie Verben mit den Vorsilben be, ver, er und ent bilden das Partizip ganz ohne ge: telefonieren wird zu telefoniert, besuchen zu besucht, vergessen zu vergessen.',
    },
    { voice: 'sage', text: 'Jetzt ein kleines Gespräch. Hören Sie zu.' },
    { speaker: 'A', voice: 'nova', text: 'Und, wie war dein Wochenende?' },
    {
      speaker: 'B',
      voice: 'onyx',
      text: 'Ganz gut, danke. Am Samstag habe ich lange geschlafen und danach eingekauft. Abends sind Freunde gekommen, und wir haben zusammen gekocht.',
    },
    { speaker: 'A', voice: 'nova', text: 'Und am Sonntag?' },
    {
      speaker: 'B',
      voice: 'onyx',
      text: 'Am Sonntag bin ich mit dem Rad an den See gefahren. Das Wetter war schön. Und du? Was hast du gemacht?',
    },
    {
      speaker: 'A',
      voice: 'nova',
      text: 'Nicht viel. Ich habe die Wohnung aufgeräumt und einen Film gesehen. Am Sonntag bin ich zu Hause geblieben.',
    },
    {
      voice: 'sage',
      text: 'Haben Sie es bemerkt? Die Frage lautet: Was hast du gemacht? Auch hier steht das Hilfsverb an zweiter Stelle und das Partizip am Ende. Zwischen beiden steht alles andere.',
    },
    {
      voice: 'sage',
      text: 'Überlegen Sie sich jetzt zwei Sätze über Ihr letztes Wochenende. Einen mit haben, einen mit sein. Sagen Sie sie laut. Bis zum nächsten Mal.',
    },
  ],
};

const NACHRICHTEN: MediaScript = {
  title: 'Langsame Nachrichten: Von überall arbeiten',
  language: 'de',
  speed: 0.9,
  instructions:
    'Nachrichtensprecher, ruhig und sachlich, deutlich langsamer als im Rundfunk üblich. Deutliche Pausen zwischen den Abschnitten.',
  lines: [
    {
      voice: 'alloy',
      text: 'Langsame Nachrichten. Ihr Thema heute: das Arbeiten von überall. Wir sprechen langsam und deutlich. Die wichtigsten Wörter wiederholen wir.',
    },
    {
      voice: 'alloy',
      text: 'Seit einigen Jahren arbeiten viele Menschen nicht mehr jeden Tag im Büro. Sie arbeiten zu Hause, in einem gemeinsam genutzten Büro oder in einer anderen Stadt. Man nennt das ortsunabhängiges Arbeiten.',
    },
    {
      voice: 'alloy',
      text: 'Für die Beschäftigten hat das Vorteile. Der Weg zur Arbeit fällt weg. Wer nicht pendelt, gewinnt am Tag oft eine ganze Stunde. Viele sagen außerdem, sie könnten sich zu Hause besser konzentrieren, weil sie seltener unterbrochen werden.',
    },
    {
      voice: 'alloy',
      text: 'Es gibt aber auch Nachteile. Wer allein zu Hause sitzt, verliert leicht den Kontakt zu den Kolleginnen und Kollegen. Gespräche in der Kaffeeküche fallen weg, und mit ihnen ein Teil der Absprachen, die sonst nebenbei passieren. Manche berichten, dass die Grenze zwischen Arbeit und Freizeit verschwimmt: Der Laptop steht am Abend noch offen auf dem Tisch.',
    },
    {
      voice: 'alloy',
      text: 'Viele Unternehmen suchen deshalb einen Mittelweg. Sie vereinbaren feste Bürotage. An zwei oder drei Tagen in der Woche kommen alle zusammen, an den übrigen Tagen arbeitet jeder dort, wo es am besten passt. Fachleute nennen dieses Modell hybrides Arbeiten.',
    },
    {
      voice: 'alloy',
      text: 'Auch die Städte verändern sich dadurch. In manchen Innenstädten stehen Büroflächen leer. Einige Städte bauen sie zu Wohnungen um. Andernorts profitieren kleinere Orte, weil Menschen aufs Land ziehen und trotzdem ihre Stelle in der Stadt behalten.',
    },
    {
      voice: 'alloy',
      text: 'Offen bleibt die Frage nach der Gerechtigkeit. Nicht jeder kann von überall arbeiten. In der Pflege, im Handwerk, im Verkehr und im Handel muss man vor Ort sein. Gewerkschaften fordern deshalb, die Vorteile nicht nur einer Gruppe zukommen zu lassen, sondern auch dort über Arbeitszeiten zu sprechen, wo Homeoffice nicht möglich ist.',
    },
    {
      voice: 'alloy',
      text: 'Die wichtigsten Wörter von heute: ortsunabhängig arbeiten. Pendeln. Der Bürotag. Das hybride Arbeiten. Die Bürofläche. Das war unsere Folge. Vielen Dank fürs Zuhören.',
    },
  ],
};

const SPRACHLABOR: MediaScript = {
  title: 'Das Sprachlabor: Wie sich Akzente verändern',
  language: 'de',
  speed: 1,
  instructions:
    'Podcast-Interview in normalem Sprechtempo. Die Moderation neugierig und locker, die Fachperson erklärend, mit natürlichen Betonungen.',
  lines: [
    {
      speaker: 'Moderation',
      voice: 'nova',
      text: 'Willkommen im Sprachlabor. Ich habe heute eine Sprachwissenschaftlerin zu Gast, die untersucht, wie sich Aussprache über die Zeit verändert. Schön, dass Sie da sind.',
    },
    { speaker: 'Gast', voice: 'sage', text: 'Vielen Dank für die Einladung.' },
    {
      speaker: 'Moderation',
      voice: 'nova',
      text: 'Fangen wir grundsätzlich an. Warum klingt eine Sprache nicht überall gleich?',
    },
    {
      speaker: 'Gast',
      voice: 'sage',
      text: 'Weil Sprache nicht von einer zentralen Stelle festgelegt wird, sondern in Gesprächen entsteht. Wir passen uns ständig an die Menschen an, mit denen wir reden – meist ohne es zu merken. Wer viel miteinander spricht, klingt mit der Zeit ähnlicher. Wer wenig Kontakt hat, entwickelt sich auseinander. Aus diesem einfachen Mechanismus entstehen über Generationen ganze Dialektlandschaften.',
    },
    {
      speaker: 'Moderation',
      voice: 'nova',
      text: 'Es heißt oft, die Dialekte würden verschwinden. Stimmt das?',
    },
    {
      speaker: 'Gast',
      voice: 'sage',
      text: 'Das ist zu einfach gesagt. Richtig ist: Die alten Ortsdialekte, die von Dorf zu Dorf verschieden waren, gehen zurück. Was an ihre Stelle tritt, ist aber keine einheitliche Standardsprache, sondern eine regionale Zwischenform. Man hört einem Menschen also weiterhin an, aus welcher Gegend er kommt – nur nicht mehr, aus welchem Dorf.',
    },
    {
      speaker: 'Moderation',
      voice: 'nova',
      text: 'Woran merken Sie in Ihrer Forschung, dass sich etwas verändert?',
    },
    {
      speaker: 'Gast',
      voice: 'sage',
      text: 'Wir vergleichen Aufnahmen aus verschiedenen Jahrzehnten und messen einzelne Laute nach – zum Beispiel, wie lang ein Vokal gesprochen wird oder wo genau im Mund er gebildet wird. Solche Verschiebungen sind winzig. Über vierzig Jahre summieren sie sich aber so weit, dass jeder den Unterschied hört.',
    },
    {
      speaker: 'Moderation',
      voice: 'nova',
      text: 'Haben Medien und Internet daran einen Anteil?',
    },
    {
      speaker: 'Gast',
      voice: 'sage',
      text: 'Weniger, als die meisten vermuten. Vom bloßen Zuhören ändert sich die eigene Aussprache kaum. Entscheidend ist das Gespräch, in dem man selbst antwortet. Was sich über Medien schnell verbreitet, sind einzelne Wörter und Wendungen – die Aussprache selbst folgt eher der Frage, mit wem man täglich redet.',
    },
    {
      speaker: 'Moderation',
      voice: 'nova',
      text: 'Was bedeutet das für Menschen, die Deutsch als Fremdsprache lernen?',
    },
    {
      speaker: 'Gast',
      voice: 'sage',
      text: 'Vor allem eine Entlastung. Es gibt nicht die eine richtige Aussprache, der man nacheifern müsste. Verständlichkeit ist das Ziel, nicht Akzentfreiheit. Ich würde jedem raten, sich an der Region zu orientieren, in der er tatsächlich lebt – und den eigenen Akzent nicht als Fehler zu betrachten. Er sagt etwas darüber aus, wo jemand herkommt, und das ist bei Muttersprachlern genauso.',
    },
    {
      speaker: 'Moderation',
      voice: 'nova',
      text: 'Ein schöner Schlusssatz. Vielen Dank für das Gespräch.',
    },
    { speaker: 'Gast', voice: 'sage', text: 'Sehr gerne.' },
  ],
};

// ------------------------------------------------------------------ Englisch

const AT_THE_BAKERY: MediaScript = {
  title: 'At the Bakery',
  language: 'en',
  speed: 0.9,
  instructions:
    'Everyday exchange at a shop counter. Friendly, clearly articulated, unhurried. Short pause at the end of each line.',
  lines: [
    { speaker: 'A', voice: 'nova', text: 'Good morning! What would you like?' },
    { speaker: 'B', voice: 'onyx', text: 'Good morning. Two rolls, please.' },
    { speaker: 'A', voice: 'nova', text: 'Anything else?' },
    { speaker: 'B', voice: 'onyx', text: 'A small loaf of bread, please. How much is that?' },
    { speaker: 'A', voice: 'nova', text: 'Three euros twenty.' },
    { speaker: 'B', voice: 'onyx', text: 'Here you are.' },
    { speaker: 'A', voice: 'nova', text: 'Thank you. Have a nice day!' },
  ],
};

const WEEKEND: MediaScript = {
  title: 'Talking About Your Weekend',
  language: 'en',
  speed: 0.9,
  instructions:
    'Calm teaching voice for an audio lesson. Explanations matter-of-fact and clear; example sentences slightly slower and stressed so learners can repeat them.',
  lines: [
    {
      voice: 'sage',
      text: 'Welcome to this lesson. Today we look at a question you will hear almost every Monday morning: How was your weekend?',
    },
    {
      voice: 'sage',
      text: 'To answer it, you talk about the past. In everyday English that usually means the past simple. For most verbs you form it by adding e d to the base form.',
    },
    { speaker: 'Example', voice: 'nova', text: 'I watched a film on Saturday.' },
    { speaker: 'Example', voice: 'nova', text: 'We cooked dinner together.' },
    { speaker: 'Example', voice: 'nova', text: 'She called me on Sunday morning.' },
    {
      voice: 'sage',
      text: 'The ending is written the same way every time, but it is not always pronounced the same. After a voiced sound it sounds like d, as in called. After a voiceless sound it sounds like t, as in watched. And after t or d it adds a whole syllable: wanted, decided.',
    },
    {
      voice: 'sage',
      text: 'Many common verbs are irregular. They do not take e d at all, and you learn each one separately. Listen.',
    },
    { speaker: 'Example', voice: 'nova', text: 'I went to the swimming pool.' },
    { speaker: 'Example', voice: 'nova', text: 'We had breakfast in the garden.' },
    { speaker: 'Example', voice: 'nova', text: 'I got up at seven and made coffee.' },
    {
      voice: 'sage',
      text: 'Now the part learners most often get wrong: questions and negatives. Here you use did, and the main verb goes back to its base form. Not did you went, but did you go.',
    },
    { speaker: 'Example', voice: 'nova', text: 'What did you do at the weekend?' },
    { speaker: 'Example', voice: 'nova', text: 'Did you go out on Friday?' },
    { speaker: 'Example', voice: 'nova', text: 'I did not stay at home.' },
    { voice: 'sage', text: 'Let us listen to a short conversation.' },
    { speaker: 'A', voice: 'nova', text: 'So, how was your weekend?' },
    {
      speaker: 'B',
      voice: 'onyx',
      text: 'Pretty good, thanks. On Saturday I slept in, and then I did the shopping. In the evening some friends came round and we cooked together.',
    },
    { speaker: 'A', voice: 'nova', text: 'And on Sunday?' },
    {
      speaker: 'B',
      voice: 'onyx',
      text: 'On Sunday I cycled out to the lake. The weather was lovely. What about you? What did you get up to?',
    },
    {
      speaker: 'A',
      voice: 'nova',
      text: 'Not much. I tidied the flat and watched a film. I stayed at home all Sunday.',
    },
    {
      voice: 'sage',
      text: 'Notice the last question: What did you get up to? It is a very common, friendly way of asking what someone did. Did carries the past, and get up to stays in the base form.',
    },
    {
      voice: 'sage',
      text: 'Now think of two sentences about your own last weekend: one regular verb, one irregular. Say them out loud. See you next time.',
    },
  ],
};

const SLOW_NEWS: MediaScript = {
  title: 'Slow News: Working From Anywhere',
  language: 'en',
  speed: 0.9,
  instructions:
    'News reader, calm and factual, noticeably slower than normal broadcast pace. Clear pauses between sections.',
  lines: [
    {
      voice: 'alloy',
      text: 'Slow News. Today: working from anywhere. We speak slowly and clearly, and we repeat the key words at the end.',
    },
    {
      voice: 'alloy',
      text: 'For several years now, many people have no longer gone into an office every day. They work from home, from a shared workspace, or from another city altogether. This is usually called remote work.',
    },
    {
      voice: 'alloy',
      text: 'For employees there are clear advantages. The journey to work disappears. People who no longer commute often gain a full hour a day. Many also say they concentrate better at home, because they are interrupted less often.',
    },
    {
      voice: 'alloy',
      text: 'But there are drawbacks. Someone sitting alone at home can easily lose touch with colleagues. The conversations by the coffee machine disappear, and with them a share of the small agreements that used to happen in passing. Some report that the line between work and free time becomes blurred: the laptop is still open on the table in the evening.',
    },
    {
      voice: 'alloy',
      text: 'Many companies are therefore looking for a middle way. They agree on fixed office days. On two or three days a week everyone comes together; on the remaining days people work wherever suits them best. Experts call this hybrid working.',
    },
    {
      voice: 'alloy',
      text: 'Cities are changing as a result. In some city centres office space stands empty, and a number of councils are converting it into flats. Elsewhere smaller towns are benefiting, because people move to the countryside and keep their job in the city.',
    },
    {
      voice: 'alloy',
      text: 'One question remains open: fairness. Not everyone can work from anywhere. In care work, in the trades, in transport and in shops, you have to be there in person. Trade unions argue that the benefits should not go to one group alone, and that working hours need to be discussed in those jobs too.',
    },
    {
      voice: 'alloy',
      text: 'Today’s key words: to work remotely. To commute. The office day. Hybrid working. Office space. That was our episode. Thank you for listening.',
    },
  ],
};

const LANGUAGE_LAB: MediaScript = {
  title: 'The Language Lab: How Accents Change',
  language: 'en',
  speed: 1,
  instructions:
    'Podcast interview at normal speaking pace. The host curious and relaxed, the expert explanatory, with natural stress and rhythm.',
  lines: [
    {
      speaker: 'Host',
      voice: 'nova',
      text: 'Welcome to the Language Lab. My guest today is a linguist who studies how pronunciation shifts over time. Thanks for joining me.',
    },
    { speaker: 'Guest', voice: 'sage', text: 'Thanks for having me.' },
    {
      speaker: 'Host',
      voice: 'nova',
      text: 'Let us start with the basics. Why does a language not sound the same everywhere?',
    },
    {
      speaker: 'Guest',
      voice: 'sage',
      text: 'Because language is not handed down from some central authority. It happens in conversation. We constantly adjust to the people we talk to, usually without noticing. People who speak to each other a lot end up sounding more alike; people with little contact drift apart. Over generations, that simple mechanism produces whole landscapes of accents.',
    },
    {
      speaker: 'Host',
      voice: 'nova',
      text: 'People often say regional accents are dying out. Is that true?',
    },
    {
      speaker: 'Guest',
      voice: 'sage',
      text: 'That is too simple. It is true that the very local accents, which differed from one village to the next, are receding. But what replaces them is not a single uniform standard. It is a regional middle ground. So you can still hear roughly where someone is from. You just cannot hear which street any more.',
    },
    {
      speaker: 'Host',
      voice: 'nova',
      text: 'How do you actually detect a change in your research?',
    },
    {
      speaker: 'Guest',
      voice: 'sage',
      text: 'We compare recordings from different decades and measure individual sounds. How long a vowel is held, for instance, or where exactly in the mouth it is formed. Any single shift is tiny. Across forty years they add up far enough that anyone can hear the difference.',
    },
    { speaker: 'Host', voice: 'nova', text: 'Do media and the internet play a part?' },
    {
      speaker: 'Guest',
      voice: 'sage',
      text: 'Less than most people assume. Simply listening barely changes your own pronunciation. What matters is conversation, where you reply yourself. What does spread quickly through media is individual words and expressions. Pronunciation follows the question of who you talk to every day.',
    },
    {
      speaker: 'Host',
      voice: 'nova',
      text: 'What does that mean for someone learning the language?',
    },
    {
      speaker: 'Guest',
      voice: 'sage',
      text: 'Mainly, it should come as a relief. There is no single correct accent you have to chase. The goal is being understood, not sounding accent free. I would tell anyone to take their cue from the region they actually live in, and not to treat their own accent as a mistake. It says something about where a person comes from, and that is just as true of native speakers.',
    },
    { speaker: 'Host', voice: 'nova', text: 'A good note to end on. Thank you for coming in.' },
    { speaker: 'Guest', voice: 'sage', text: 'My pleasure.' },
  ],
};

export const MEDIA_SCRIPTS: MediaScript[] = [
  BEIM_BAECKER,
  WOCHENENDE,
  NACHRICHTEN,
  SPRACHLABOR,
  AT_THE_BAKERY,
  WEEKEND,
  SLOW_NEWS,
  LANGUAGE_LAB,
];

export const MEDIA_SCRIPT_BY_TITLE = new Map(MEDIA_SCRIPTS.map((script) => [script.title, script]));

/**
 * Das Transkript, wie es in der App unter der Folge steht: Sprecherkürzel wie
 * im gedruckten Hörtext, Erzählpassagen ohne Kürzel als eigener Absatz.
 */
export function transcriptOf(script: MediaScript): string {
  return script.lines
    .map((line) => (line.speaker ? `${line.speaker}: ${line.text}` : line.text))
    .join('\n');
}

/**
 * Geschätzte Spieldauer aus der Textlänge.
 *
 * Nur ein Platzhalter für die Zeit, bis die Datei existiert: Sobald
 * `npm run media:tts` gelaufen ist, trägt der Generator die echte, aus der
 * MP3 gemessene Dauer in die Datenbank ein. Vorher stand in den Seed-Daten
 * eine frei gewählte Zahl – ein Eintrag behauptete 21 Minuten, ohne dass es
 * eine Aufnahme gab.
 *
 * Die Rate ist an deutschem und englischem Fließtext gemessen; Pausen zwischen
 * den Zeilen kommen mit einem festen Zuschlag dazu.
 */
const CHARS_PER_SECOND = 14.5;
const PAUSE_SEC_PER_LINE = 0.4;

export function estimatedDurationSec(script: MediaScript): number {
  const chars = script.lines.reduce((sum, line) => sum + line.text.length, 0);
  const speech = chars / (CHARS_PER_SECOND * script.speed);
  return Math.round(speech + script.lines.length * PAUSE_SEC_PER_LINE);
}
