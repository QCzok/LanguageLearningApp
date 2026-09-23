import type { UnitSeed } from './chapter-beginner-1';

/**
 * Intermediate, Kapitel 7: „Identität und Zugehörigkeit“ (B2, Kapitel 1)
 *
 * Fünf Seiten. Erstes Kapitel der Stufe B2. Bis hierher ging es darum, eine
 * Meinung zu haben und sie zu begründen; ab hier kommt es darauf an, wie genau
 * man etwas sagt – und was zwischen den Zeilen steht.
 *
 * Aufbau: Seite 1 lässt drei Menschen erzählen, was für sie „Heimat“ ist.
 * Seite 2 ist der grammatische Kern: der Wechsel vom verbalen zum nominalen
 * Stil („weil er umzog“ → „wegen seines Umzugs“), der B2-Texte prägt.
 * Seite 3 fasst eine Biografie zusammen, Seite 4 liest eine Kolumne auf
 * implizite Aussagen hin, Seite 5 wiederholt und lässt einen eigenen Text
 * über Zugehörigkeit schreiben.
 *
 * Einsprachig deutsch wie der ganze Intermediate-Band. Alle Personen sind
 * erfunden. Sämtliche Texte sind eigenständig verfasst.
 */
const v = 1;

export const INTERMEDIATE_7_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – drei Stimmen zu Heimat und Zugehörigkeit.
  {
    order: 1,
    title: 'Wo gehöre ich hin?',
    subtitle: 'Über Herkunft und Heimat sprechen',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'i7-1-h1', type: 'HEADING', level: 1, text: 'Wo gehöre ich hin?' },
        {
          id: 'i7-1-image',
          type: 'IMAGE',
          url: 'illustration:world-map',
          alt: 'Eine Weltkarte mit mehreren markierten Orten.',
          caption: 'Viele Lebensgeschichten verbinden mehr als einen Ort.',
        },
        {
          id: 'i7-1-text',
          type: 'TEXT',
          text: 'Für ein Magazin haben drei Menschen die Frage beantwortet: „Was bedeutet Heimat für Sie?“\n\nMelike, 29, Ärztin in Hannover: „Ich bin in Hannover geboren, meine Eltern stammen aus der Türkei. Als Kind habe ich mich oft zwischen zwei Stühlen gefühlt: In Deutschland war ich ‚die Türkin‘, in den Ferien in Izmir ‚die Deutsche‘. Heute sehe ich das anders. Ich muss mich nicht entscheiden. Heimat ist für mich kein Ort, sondern ein Gefühl – und das habe ich an beiden Orten.“\n\nGeorg, 71, Rentner aus dem Allgäu: „Ich habe mein ganzes Leben im selben Dorf verbracht. Für mich ist Heimat ganz konkret: die Berge, der Dialekt, die Leute, die ich seit sechzig Jahren kenne. Wenn ich meine Enkel in Berlin besuche, merke ich, wie fremd mir die Großstadt ist. Trotzdem – oder gerade deshalb – bewundere ich, wie selbstverständlich sie sich überall zurechtfinden.“\n\nDaniel, 38, Softwareentwickler: „Ich bin in Kanada aufgewachsen, habe in Spanien studiert und lebe seit neun Jahren in Leipzig. Wenn mich jemand fragt, woher ich komme, weiß ich nie, was ich antworten soll. Zugehörigkeit hat für mich weniger mit Herkunft zu tun als mit Menschen. Wo meine Freunde sind, da bin ich zu Hause. Und die Sprache, in der ich träume, ist inzwischen – ehrlich gesagt – Deutsch.“',
        },
        {
          id: 'i7-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: Identität',
          items: [
            {
              term: 'Herkunft',
              article: 'die',
              translations: { en: 'origin, background', es: 'el origen', fr: 'l’origine', it: 'l’origine' },
              example: 'Ihre Herkunft spielt für sie keine große Rolle.',
            },
            {
              term: 'Zugehörigkeit',
              article: 'die',
              translations: { en: 'belonging', es: 'la pertenencia', fr: 'l’appartenance', it: 'l’appartenenza' },
            },
            {
              term: 'stammen (aus + Dat.)',
              translations: { en: 'to come from, to originate from', es: 'proceder (de)', fr: 'être originaire (de)', it: 'provenire (da)' },
              example: 'Seine Familie stammt aus Polen.',
            },
            {
              term: 'sich zwischen zwei Stühlen fühlen',
              translations: { en: 'to feel caught between two worlds', es: 'sentirse entre dos mundos', fr: 'être tiraillé entre deux mondes', it: 'sentirsi diviso tra due mondi' },
            },
            {
              term: 'sich zurechtfinden',
              translations: { en: 'to find one’s way, to cope', es: 'orientarse, desenvolverse', fr: 's’y retrouver', it: 'orientarsi' },
            },
            {
              term: 'Wurzel',
              article: 'die',
              plural: 'die Wurzeln',
              translations: { en: 'root', es: 'la raíz', fr: 'la racine', it: 'la radice' },
              example: 'Er hat seine Wurzeln in Italien.',
            },
            {
              term: 'Mehrsprachigkeit',
              article: 'die',
              translations: { en: 'multilingualism', es: 'el plurilingüismo', fr: 'le multilinguisme', it: 'il plurilinguismo' },
            },
            {
              term: 'fremd',
              translations: { en: 'foreign, strange, unfamiliar', es: 'extraño, ajeno', fr: 'étranger', it: 'estraneo' },
              example: 'Die Stadt war mir anfangs fremd.',
            },
            {
              term: 'selbstverständlich',
              translations: { en: 'natural, taken for granted', es: 'natural, obvio', fr: 'naturel, évident', it: 'naturale, scontato' },
            },
          ],
        },
        {
          id: 'i7-1-match',
          type: 'MATCHING',
          instruction: 'Was ist Heimat für wen?',
          left: [
            { id: 'l1', text: 'Melike' },
            { id: 'l2', text: 'Georg' },
            { id: 'l3', text: 'Daniel' },
          ],
          right: [
            { id: 'r1', text: 'ein Gefühl, das an mehreren Orten entstehen kann' },
            { id: 'r2', text: 'ein bestimmter Ort mit seiner Landschaft und seinen Menschen' },
            { id: 'r3', text: 'dort, wo die Menschen sind, die einem wichtig sind' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
          ],
        },
        {
          id: 'i7-1-choice',
          type: 'CHOICE',
          instruction: 'Lesen Sie die Texte noch einmal genau.',
          question: 'Welche Aussagen lassen sich aus den Texten ableiten? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'a1', text: 'Melike hat früher unter der Frage nach ihrer Identität gelitten.' },
            { id: 'a2', text: 'Georg lehnt das Leben seiner Enkel ab.' },
            { id: 'a3', text: 'Daniel fällt es schwer, die Frage nach seiner Herkunft kurz zu beantworten.' },
            { id: 'a4', text: 'Daniel spricht inzwischen sehr gut Deutsch.' },
          ],
          solution: ['a1', 'a3', 'a4'],
          explanation:
            'Keiner sagt es direkt – aber „zwischen zwei Stühlen“ beschreibt ein unangenehmes Gefühl, und wer in einer Sprache träumt, beherrscht sie gut. Georg dagegen „bewundert“ seine Enkel; ablehnen tut er ihr Leben nicht.',
        },
        {
          id: 'i7-1-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie mit den Wörtern aus dem Kasten.',
          wordBank: ['stammt', 'Wurzeln', 'fremd', 'zurechtgefunden', 'Zugehörigkeit'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Meine Großmutter ' },
            { kind: 'GAP', gapId: 'c1', solution: ['stammt'], width: 8 },
            { kind: 'TEXT', text: ' aus Schlesien. Als sie 1946 nach Bayern kam, war ihr dort alles ' },
            { kind: 'GAP', gapId: 'c2', solution: ['fremd'], width: 6 },
            { kind: 'TEXT', text: ': die Sprache, das Essen, die Religion. Erst nach vielen Jahren hat sie sich ' },
            { kind: 'GAP', gapId: 'c3', solution: ['zurechtgefunden'], width: 15 },
            { kind: 'TEXT', text: '. Ihre ' },
            { kind: 'GAP', gapId: 'c4', solution: ['Wurzeln'], width: 8 },
            { kind: 'TEXT', text: ' hat sie aber nie vergessen. Das Gefühl der ' },
            { kind: 'GAP', gapId: 'c5', solution: ['Zugehörigkeit'], width: 14 },
            { kind: 'TEXT', text: ' kam langsam – vor allem durch ihre Kinder.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – vom verbalen zum nominalen Stil.
  {
    order: 2,
    title: 'Wegen seines Umzugs',
    subtitle: 'Nominalisierung: verbaler und nominaler Stil',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'i7-2-h1', type: 'HEADING', level: 1, text: 'Wegen seines Umzugs' },
        {
          id: 'i7-2-text',
          type: 'TEXT',
          text: 'Derselbe Inhalt, zwei Stile:\n\nIm Gespräch: „Als Daniel nach Leipzig gezogen ist, hat er kaum Deutsch gesprochen. Weil er so neugierig war, hat er aber schnell Freunde gefunden.“\n\nIn einem Zeitungsporträt: „Bei seinem Umzug nach Leipzig sprach Daniel kaum Deutsch. Wegen seiner Neugier fand er aber schnell Freunde.“\n\nDer zweite Text ist kürzer und dichter. Die Information steckt nicht mehr in Nebensätzen, sondern in Nomen. Diesen nominalen Stil finden Sie in Zeitungen, Sachtexten und im Beruf – ab B2 sollten Sie ihn verstehen und selbst verwenden können.',
        },
        {
          id: 'i7-2-info-nomen',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Aus Verben werden Nomen',
          text: 'Viele Nomen entstehen aus Verben. Die häufigsten Muster: der Infinitiv als Nomen (das Lernen), Nomen auf -ung (die Entscheidung), Nomen ohne Endung, oft mit Vokalwechsel (der Umzug, der Beginn), und Nomen auf -e oder -t (die Hilfe, die Ankunft). Nomen auf -ung sind immer feminin, nominalisierte Infinitive immer neutral. Das Subjekt des Satzes wird im nominalen Stil meist zum Genitiv oder Possessivartikel: Daniel zieht um → Daniels Umzug / sein Umzug.',
          table: {
            headers: ['Verb', 'Nomen'],
            rows: [
              ['entscheiden', 'die Entscheidung'],
              ['umziehen', 'der Umzug'],
              ['ankommen', 'die Ankunft'],
              ['beginnen', 'der Beginn'],
              ['helfen', 'die Hilfe'],
              ['wandern / auswandern', 'das Wandern / die Auswanderung'],
            ],
          },
        },
        {
          id: 'i7-2-info-umformen',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Nebensatz → Präposition',
          text: 'Beim Umformen wird aus dem Konnektor eine Präposition, aus dem Verb ein Nomen. Achten Sie auf den Kasus: wegen, trotz und während stehen mit dem Genitiv, bei, nach, vor und seit mit dem Dativ, für mit dem Akkusativ.',
          table: {
            headers: ['verbal (Nebensatz)', 'nominal (Präposition)'],
            rows: [
              ['weil sie krank war', 'wegen ihrer Krankheit (Gen.)'],
              ['obwohl es regnete', 'trotz des Regens (Gen.)'],
              ['als / wenn er ankam', 'bei seiner Ankunft (Dat.)'],
              ['nachdem sie umgezogen war', 'nach ihrem Umzug (Dat.)'],
              ['bevor die Reise begann', 'vor Beginn der Reise (Dat.)'],
              ['um die Sprache zu lernen', 'zum Lernen der Sprache (Dat.)'],
            ],
          },
        },
        {
          id: 'i7-2-match',
          type: 'MATCHING',
          instruction: 'Welches Nomen gehört zu welchem Verb?',
          left: [
            { id: 'l1', text: 'sich integrieren' },
            { id: 'l2', text: 'zurückkehren' },
            { id: 'l3', text: 'abreisen' },
            { id: 'l4', text: 'erfahren' },
            { id: 'l5', text: 'sich bewerben' },
          ],
          right: [
            { id: 'r1', text: 'die Integration' },
            { id: 'r2', text: 'die Rückkehr' },
            { id: 'r3', text: 'die Abreise' },
            { id: 'r4', text: 'die Erfahrung' },
            { id: 'r5', text: 'die Bewerbung' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
            { leftId: 'l5', rightId: 'r5' },
          ],
        },
        {
          id: 'i7-2-cloze',
          type: 'CLOZE',
          instruction: 'Formen Sie in den nominalen Stil um. Ergänzen Sie die Präposition.',
          wordBank: ['Wegen', 'Trotz', 'Bei', 'Nach', 'Vor', 'Während'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Weil die Mieten hoch sind, ziehen viele aufs Land. → ' },
            { kind: 'GAP', gapId: 'n1', solution: ['Wegen'], width: 7 },
            { kind: 'TEXT', text: ' der hohen Mieten ziehen viele aufs Land.\n2. Obwohl sie Heimweh hatte, blieb sie in Kanada. → ' },
            { kind: 'GAP', gapId: 'n2', solution: ['Trotz'], width: 7 },
            { kind: 'TEXT', text: ' ihres Heimwehs blieb sie in Kanada.\n3. Als er in Leipzig ankam, regnete es. → ' },
            { kind: 'GAP', gapId: 'n3', solution: ['Bei'], width: 7 },
            { kind: 'TEXT', text: ' seiner Ankunft in Leipzig regnete es.\n4. Nachdem sie eingebürgert worden war, durfte sie wählen. → ' },
            { kind: 'GAP', gapId: 'n4', solution: ['Nach'], width: 7 },
            { kind: 'TEXT', text: ' ihrer Einbürgerung durfte sie wählen.\n5. Bevor die Familie auswanderte, verkaufte sie ihr Haus. → ' },
            { kind: 'GAP', gapId: 'n5', solution: ['Vor'], width: 7 },
            { kind: 'TEXT', text: ' der Auswanderung verkaufte die Familie ihr Haus.' },
          ],
        },
        {
          id: 'i7-2-choice',
          type: 'CHOICE',
          instruction: 'Welche nominale Form ist korrekt?',
          question: 'Weil er so neugierig war, fand er schnell Freunde.',
          multiple: false,
          options: [
            { id: 'a1', text: 'Wegen seiner Neugier fand er schnell Freunde.' },
            { id: 'a2', text: 'Wegen seine Neugier fand er schnell Freunde.' },
            { id: 'a3', text: 'Wegen er neugierig war, fand er schnell Freunde.' },
            { id: 'a4', text: 'Bei seiner Neugier fand er schnell Freunde.' },
          ],
          solution: ['a1'],
          explanation:
            '„weil“ wird zu „wegen“, und „wegen“ verlangt den Genitiv: die Neugier → seiner Neugier. Nach einer Präposition folgt nie ein Satz mit konjugiertem Verb.',
        },
        {
          id: 'i7-2-choice-2',
          type: 'CHOICE',
          instruction: 'Und zurück in den verbalen Stil.',
          question: 'Nach dem Abschluss ihres Studiums kehrte sie nach Chile zurück.',
          multiple: false,
          options: [
            { id: 'b1', text: 'Nachdem sie ihr Studium abgeschlossen hatte, kehrte sie nach Chile zurück.' },
            { id: 'b2', text: 'Bevor sie ihr Studium abschloss, kehrte sie nach Chile zurück.' },
            { id: 'b3', text: 'Weil sie ihr Studium abgeschlossen hatte, kehrte sie nach Chile zurück.' },
            { id: 'b4', text: 'Nachdem sie ihr Studium abschließt, kehrte sie nach Chile zurück.' },
          ],
          solution: ['b1'],
          explanation:
            '„nach“ + Nomen wird zu „nachdem“ + Nebensatz. Die Handlung im Nebensatz liegt vorher, deshalb steht sie im Plusquamperfekt: …, nachdem sie abgeschlossen hatte.',
        },
        {
          id: 'i7-2-order',
          type: 'ORDERING',
          instruction: 'Bilden Sie einen Satz im nominalen Stil.',
          items: [
            { id: 'o1', text: 'Trotz' },
            { id: 'o2', text: 'seiner guten Sprachkenntnisse' },
            { id: 'o3', text: 'fühlte' },
            { id: 'o4', text: 'er sich' },
            { id: 'o5', text: 'anfangs' },
            { id: 'o6', text: 'fremd.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5', 'o6'],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – eine Biografie lesen und zusammenfassen.
  {
    order: 3,
    title: 'Ein Leben in drei Ländern',
    subtitle: 'Eine Biografie zusammenfassen',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'i7-3-h1', type: 'HEADING', level: 1, text: 'Ein Leben in drei Ländern' },
        {
          id: 'i7-3-text',
          type: 'TEXT',
          text: 'Ana Petrović wurde 1968 in Sarajevo geboren. Nach dem Abitur begann sie ein Studium der Literaturwissenschaft, das sie jedoch wegen des Kriegs 1992 abbrechen musste. Gemeinsam mit ihrer Mutter floh sie nach Wien, wo sie zunächst als Putzhilfe arbeitete. In dieser Zeit schrieb sie abends ihre ersten Erzählungen – noch auf Bosnisch, für die Schublade, wie sie später sagte.\n\nDer Wendepunkt kam 1998: Bei einem Schreibwettbewerb für junge Autorinnen gewann sie mit einem Text, den sie zum ersten Mal auf Deutsch verfasst hatte, den zweiten Preis. Ein Verlag wurde auf sie aufmerksam, und 2001 erschien ihr erster Roman „Das andere Ufer“. Das Buch, in dem eine junge Frau zwischen zwei Sprachen ihren Platz sucht, wurde in zwölf Sprachen übersetzt.\n\nSeit 2005 lebt Petrović in Hamburg und unterrichtet kreatives Schreiben. Nach Sarajevo reist sie jedes Jahr. Auf die Frage, in welcher Sprache sie sich zu Hause fühle, antwortete sie in einem Interview: „In der Sprache, in der mir gerade die richtigen Wörter einfallen.“',
        },
        {
          id: 'i7-3-order',
          type: 'ORDERING',
          instruction: 'Bringen Sie die Stationen in die richtige Reihenfolge.',
          items: [
            { id: 'o1', text: 'Sie beginnt ein Studium in Sarajevo.' },
            { id: 'o2', text: 'Sie flieht mit ihrer Mutter nach Wien.' },
            { id: 'o3', text: 'Sie schreibt abends Erzählungen auf Bosnisch.' },
            { id: 'o4', text: 'Sie gewinnt einen Preis mit einem deutschen Text.' },
            { id: 'o5', text: 'Ihr erster Roman erscheint.' },
            { id: 'o6', text: 'Sie zieht nach Hamburg.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5', 'o6'],
        },
        {
          id: 'i7-3-info-zusammenfassung',
          type: 'INFO',
          variant: 'TIP',
          title: 'Eine Zusammenfassung schreiben',
          text: 'Eine Zusammenfassung gibt nur das Wichtigste wieder – sachlich, im Präsens und in eigenen Worten. Sie enthält keine eigene Meinung und keine wörtlichen Zitate. Ein Einleitungssatz nennt Textsorte, Thema und Person. Der nominale Stil hilft, viel Information in wenigen Sätzen unterzubringen.',
          table: {
            headers: ['Teil', 'Redemittel'],
            rows: [
              ['Einleitung', 'Der Text handelt von … / Die Biografie beschreibt das Leben von …'],
              ['Verlauf', 'Zunächst … / Nach … / Infolge … / Schließlich …'],
              ['Wendepunkt', 'Eine entscheidende Rolle spielt … / Den Wendepunkt bildet …'],
              ['Schluss', 'Heute … / Abschließend wird deutlich, dass …'],
            ],
          },
        },
        {
          id: 'i7-3-choice',
          type: 'CHOICE',
          instruction: 'Welcher Einleitungssatz passt am besten zu einer Zusammenfassung?',
          multiple: false,
          options: [
            { id: 'a1', text: 'Ana Petrović ist eine tolle Autorin, deren Bücher ich sehr mag.' },
            { id: 'a2', text: 'Die Biografie beschreibt den Weg der Autorin Ana Petrović von Sarajevo über Wien nach Hamburg.' },
            { id: 'a3', text: '„In der Sprache, in der mir gerade die richtigen Wörter einfallen.“' },
            { id: 'a4', text: 'Im Jahr 1968 wurde in Sarajevo ein Mädchen geboren.' },
          ],
          solution: ['a2'],
          explanation:
            'Der Einleitungssatz nennt Textsorte (Biografie), Person und Thema. Eine eigene Meinung (a1) und ein wörtliches Zitat (a3) gehören nicht in eine Zusammenfassung; a4 ist schon ein Detail aus dem Verlauf.',
        },
        {
          id: 'i7-3-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die Zusammenfassung.',
          wordBank: ['handelt', 'Wegen', 'Nach', 'Wendepunkt', 'Heute'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Der Text ' },
            { kind: 'GAP', gapId: 'z1', solution: ['handelt'], width: 8 },
            { kind: 'TEXT', text: ' vom Leben der Autorin Ana Petrović. ' },
            { kind: 'GAP', gapId: 'z2', solution: ['Wegen'], width: 7 },
            { kind: 'TEXT', text: ' des Kriegs muss sie ihr Studium abbrechen und nach Wien fliehen. ' },
            { kind: 'GAP', gapId: 'z3', solution: ['Nach'], width: 6 },
            { kind: 'TEXT', text: ' einigen Jahren als Putzhilfe bildet ein Schreibwettbewerb den ' },
            { kind: 'GAP', gapId: 'z4', solution: ['Wendepunkt'], width: 11 },
            { kind: 'TEXT', text: ': Sie gewinnt mit ihrem ersten deutschen Text einen Preis. ' },
            { kind: 'GAP', gapId: 'z5', solution: ['Heute'], width: 6 },
            { kind: 'TEXT', text: ' lebt sie als erfolgreiche Schriftstellerin in Hamburg.' },
          ],
        },
        {
          id: 'i7-3-choice-2',
          type: 'CHOICE',
          instruction: 'Was gehört NICHT in eine Zusammenfassung? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'b1', text: 'Meiner Meinung nach hätte sie früher auf Deutsch schreiben sollen.' },
            { id: 'b2', text: 'Ihr erster Roman wurde in zwölf Sprachen übersetzt.' },
            { id: 'b3', text: 'Sie sagte: „Das war die schwerste Zeit meines Lebens.“' },
            { id: 'b4', text: 'Seit 2005 unterrichtet sie in Hamburg kreatives Schreiben.' },
          ],
          solution: ['b1', 'b3'],
          explanation:
            'Eine Zusammenfassung ist sachlich: keine eigene Meinung (b1) und keine wörtlichen Zitate (b3). Fakten wie b2 und b4 dürfen – kurz – vorkommen.',
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – zwischen den Zeilen lesen.
  {
    order: 4,
    title: 'Zwischen den Zeilen',
    subtitle: 'Implizite Aussagen erkennen',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'i7-4-h1', type: 'HEADING', level: 1, text: 'Zwischen den Zeilen' },
        {
          id: 'i7-4-text',
          type: 'TEXT',
          text: 'Kolumne: „Und woher kommst du wirklich?“\n\nNeulich auf einer Party. Ein freundlicher Herr fragt mich, woher ich komme. „Aus Bochum“, sage ich. Er lächelt. „Nein, ich meine: ursprünglich.“ Ich erkläre, dass ich im Bochumer St.-Josef-Hospital geboren bin, was ursprünglicher kaum geht. Er lacht, ein bisschen verlegen. „Na ja, aber Ihre Eltern …?“\n\nIch nehme ihm die Frage nicht übel. Er meint es gut, das merke ich. Er interessiert sich für mich – oder jedenfalls für das, was er in meinem Gesicht zu sehen glaubt. Und genau das ist der Punkt. Meine Kollegin Julia, blond und ebenfalls aus Bochum, hat diese Frage noch nie gehört. Nicht ein einziges Mal.\n\nMan könnte sagen, es sei nur Smalltalk. Vielleicht. Aber wer dreimal pro Woche erklären muss, dass er von hier ist, fängt irgendwann an, sich zu fragen, ob das stimmt.\n\nAm Ende des Abends hat mir der Herr übrigens ein Kompliment gemacht: „Sie sprechen aber gut Deutsch!“ Ich habe mich bedankt. Was hätte ich auch sagen sollen?',
        },
        {
          id: 'i7-4-info-implizit',
          type: 'INFO',
          variant: 'TIP',
          title: 'Was nicht dasteht',
          text: 'Viele Texte – besonders Kolumnen, Glossen und literarische Texte – sagen das Wichtigste nicht direkt. Achten Sie auf Ironie (das Gegenteil von dem, was gemeint ist), auf Vergleiche, die der Text nahelegt, auf rhetorische Fragen und auf Details, die scheinbar nebenbei erwähnt werden. Fragen Sie sich: Warum erzählt der Autor genau das? Was soll ich daraus schließen?',
          table: {
            headers: ['Signal', 'Beispiel aus der Kolumne'],
            rows: [
              ['Ironie', '… was ursprünglicher kaum geht.'],
              ['Vergleich', 'Meine Kollegin Julia … hat diese Frage noch nie gehört.'],
              ['rhetorische Frage', 'Was hätte ich auch sagen sollen?'],
              ['Modalpartikel', 'Sie sprechen aber gut Deutsch!'],
            ],
          },
        },
        {
          id: 'i7-4-choice',
          type: 'CHOICE',
          instruction: 'Lesen Sie die Kolumne genau.',
          question: 'Warum erwähnt der Autor seine Kollegin Julia?',
          multiple: false,
          options: [
            { id: 'a1', text: 'Weil Julia auch auf der Party war.' },
            { id: 'a2', text: 'Um zu zeigen, dass die Frage vom Aussehen abhängt, nicht von der Herkunft.' },
            { id: 'a3', text: 'Weil Julia die Frage unhöflich findet.' },
            { id: 'a4', text: 'Um zu zeigen, dass alle Menschen aus Bochum diese Frage hören.' },
          ],
          solution: ['a2'],
          explanation:
            'Beide kommen aus Bochum – aber nur der Autor wird gefragt. Der Text sagt nicht direkt, warum; der Hinweis „blond“ und „was er in meinem Gesicht zu sehen glaubt“ legen den Grund nahe.',
        },
        {
          id: 'i7-4-choice-2',
          type: 'CHOICE',
          instruction: 'Und das Kompliment am Ende?',
          question: 'Wie empfindet der Autor den Satz „Sie sprechen aber gut Deutsch!“?',
          multiple: false,
          options: [
            { id: 'b1', text: 'Er freut sich ehrlich darüber.' },
            { id: 'b2', text: 'Er findet ihn absurd, weil Deutsch seine Muttersprache ist.' },
            { id: 'b3', text: 'Er ist wütend und verlässt die Party.' },
            { id: 'b4', text: 'Er glaubt, dass sein Deutsch noch besser werden muss.' },
          ],
          solution: ['b2'],
          explanation:
            'Der Autor ist in Bochum geboren – natürlich spricht er gut Deutsch. Die rhetorische Frage „Was hätte ich auch sagen sollen?“ zeigt, dass er das Kompliment als unpassend empfindet, ohne es offen zu sagen.',
        },
        {
          id: 'i7-4-match',
          type: 'MATCHING',
          instruction: 'Was ist wörtlich gesagt, was ist gemeint?',
          left: [
            { id: 'l1', text: '„Ich nehme ihm die Frage nicht übel.“' },
            { id: 'l2', text: '„… was ursprünglicher kaum geht.“' },
            { id: 'l3', text: '„… ob das stimmt.“' },
          ],
          right: [
            { id: 'r1', text: 'Der Autor ist nicht verärgert, aber nachdenklich.' },
            { id: 'r2', text: 'Die Frage nach dem „Ursprung“ ist in seinem Fall sinnlos.' },
            { id: 'r3', text: 'Die ständige Frage lässt ihn an seiner Zugehörigkeit zweifeln.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
          ],
        },
        {
          id: 'i7-4-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die Deutung der Kolumne.',
          wordBank: ['ironisch', 'nahe', 'direkt', 'Vergleich', 'Zweifel'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Der Autor kritisiert die Frage nach der Herkunft nicht ' },
            { kind: 'GAP', gapId: 'k1', solution: ['direkt'], width: 7 },
            { kind: 'TEXT', text: '. Stattdessen beschreibt er die Situation ' },
            { kind: 'GAP', gapId: 'k2', solution: ['ironisch'], width: 9 },
            { kind: 'TEXT', text: '. Durch den ' },
            { kind: 'GAP', gapId: 'k3', solution: ['Vergleich'], width: 10 },
            { kind: 'TEXT', text: ' mit seiner Kollegin legt er ' },
            { kind: 'GAP', gapId: 'k4', solution: ['nahe'], width: 5 },
            { kind: 'TEXT', text: ', dass es um sein Aussehen geht. Am Ende wird deutlich, dass die Frage bei ihm ' },
            { kind: 'GAP', gapId: 'k5', solution: ['Zweifel'], width: 8 },
            { kind: 'TEXT', text: ' an seiner Zugehörigkeit auslöst.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – Rückblick auf Kapitel 7.
  {
    order: 5,
    title: 'Kannst du das schon?',
    subtitle: 'Rückblick, ein eigener Text über Zugehörigkeit',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'i7-5-h1', type: 'HEADING', level: 1, text: 'Kannst du das schon?' },
        {
          id: 'i7-5-intro',
          type: 'TEXT',
          text: 'Prüfen Sie, was Sie aus Kapitel 7 mitnehmen: Wortschatz zu Identität und Herkunft, den Wechsel zwischen verbalem und nominalem Stil, die Zusammenfassung und das Lesen zwischen den Zeilen.',
        },
        {
          id: 'i7-5-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie den Text.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Tomasz ' },
            { kind: 'GAP', gapId: 'r1', solution: ['stammt'], width: 8 },
            { kind: 'TEXT', text: ' aus Krakau. ' },
            { kind: 'GAP', gapId: 'r2', solution: ['Nach'], width: 6 },
            { kind: 'TEXT', text: ' seinem Umzug nach Frankfurt war ihm alles ' },
            { kind: 'GAP', gapId: 'r3', solution: ['fremd'], width: 6 },
            { kind: 'TEXT', text: '. ' },
            { kind: 'GAP', gapId: 'r4', solution: ['Trotz'], width: 6 },
            { kind: 'TEXT', text: ' seiner Unsicherheit ging er jede Woche in einen Chor. Dort hat er sich schnell ' },
            { kind: 'GAP', gapId: 'r5', solution: ['zurechtgefunden'], width: 15 },
            { kind: 'TEXT', text: ' – und heute ist er der Chorleiter.' },
          ],
        },
        {
          id: 'i7-5-choice',
          type: 'CHOICE',
          instruction: 'Welche Umformungen sind korrekt? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'k1', text: 'weil sie arbeitslos war → wegen ihrer Arbeitslosigkeit' },
            { id: 'k2', text: 'als wir abreisten → bei unserer Abreise' },
            { id: 'k3', text: 'obwohl er müde war → trotz er müde war' },
            { id: 'k4', text: 'nachdem sie zurückgekehrt war → vor ihrer Rückkehr' },
          ],
          solution: ['k1', 'k2'],
          explanation:
            'Nach „trotz“ folgt ein Nomen im Genitiv, kein Satz: trotz seiner Müdigkeit. „nachdem“ wird zu „nach“, nicht zu „vor“: nach ihrer Rückkehr.',
        },
        {
          id: 'i7-5-match',
          type: 'MATCHING',
          instruction: 'Verbinden Sie Verb und Nomen.',
          left: [
            { id: 'm1', text: 'ankommen' },
            { id: 'm2', text: 'sich entscheiden' },
            { id: 'm3', text: 'auswandern' },
            { id: 'm4', text: 'beginnen' },
          ],
          right: [
            { id: 'y1', text: 'die Ankunft' },
            { id: 'y2', text: 'die Entscheidung' },
            { id: 'y3', text: 'die Auswanderung' },
            { id: 'y4', text: 'der Beginn' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'y1' },
            { leftId: 'm2', rightId: 'y2' },
            { leftId: 'm3', rightId: 'y3' },
            { leftId: 'm4', rightId: 'y4' },
          ],
        },
        {
          id: 'i7-5-order',
          type: 'ORDERING',
          instruction: 'Bilden Sie einen Satz im nominalen Stil.',
          items: [
            { id: 'o1', text: 'Bei' },
            { id: 'o2', text: 'ihrer Ankunft' },
            { id: 'o3', text: 'in Hamburg' },
            { id: 'o4', text: 'sprach' },
            { id: 'o5', text: 'sie' },
            { id: 'o6', text: 'kein Wort Deutsch.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5', 'o6'],
        },
        {
          id: 'i7-5-writing',
          type: 'WRITING',
          instruction: 'Was bedeutet Heimat für Sie?',
          prompt:
            'Ein Magazin sucht Beiträge zum Thema „Heimat und Zugehörigkeit“. Schreiben Sie einen Text: Was bedeutet Heimat für Sie? Ist sie ein Ort, ein Gefühl, eine Sprache oder etwas anderes? Erzählen Sie von einer eigenen Erfahrung und nehmen Sie auf eine der drei Stimmen von Seite 1 Bezug. Verwenden Sie mindestens zwei nominale Ausdrücke (z. B. „nach meinem Umzug“, „trotz …“).',
          minWords: 120,
          maxWords: 250,
          aiFeedback: true,
          sampleAnswer:
            'Für mich ist Heimat weniger ein Ort als eine Sprache. Ich bin in Lyon aufgewachsen und lebe seit sechs Jahren in Freiburg. Nach meinem Umzug habe ich lange geglaubt, dass ich meine Heimat verloren hätte. Trotz meiner guten Deutschkenntnisse fühlte ich mich in Gesprächen oft langsamer und weniger witzig als auf Französisch.\n\nDas hat sich verändert, als ich in einem Theaterverein anfing. Dort musste ich auf Deutsch lachen, streiten und improvisieren – und irgendwann merkte ich, dass ich auch in dieser Sprache ich selbst sein kann.\n\nIch kann Melike gut verstehen, wenn sie sagt, dass Heimat ein Gefühl ist, das man an mehreren Orten haben kann. Anders als Georg brauche ich keine vertraute Landschaft. Aber wenn ich in Lyon die Stimme meiner Großmutter höre, weiß ich, wo meine Wurzeln sind. Vielleicht hat man nicht eine Heimat, sondern mehrere – und jede passt zu einem anderen Teil von einem selbst.',
        },
      ],
    },
  },
];
