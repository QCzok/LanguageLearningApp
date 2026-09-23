import type { UnitSeed } from './chapter-beginner-1';

/**
 * Intermediate, Kapitel 5: „Kultur und Medien“ (B1, Kapitel 5)
 *
 * Fünf Seiten. Über einen Film oder ein Buch reden heißt zweierlei:
 * erzählen, worum es geht, und sagen, wie man es fand – und warum. Das
 * Kapitel übt beides und endet mit einer eigenen kleinen Rezension.
 *
 * Aufbau: Seite 1 sammelt Wortschatz zu Genres und Mediengewohnheiten,
 * Seite 2 übt die Inhaltsangabe im Präsens, Seite 3 ist der grammatische
 * Kern – der Gegensatz mit „obwohl“ (Nebensatz) und „trotzdem“ (Hauptsatz),
 * abgegrenzt von „weil“ und „deshalb“. Seite 4 liest eine Filmkritik,
 * Seite 5 wiederholt und schreibt die Rezension.
 *
 * „obwohl“ und „trotzdem“ stehen zusammen auf einer Seite, weil sie
 * denselben Gedanken ausdrücken und der Unterschied allein in der Wortstellung
 * liegt – genau das ist die Schwierigkeit, und die sieht man nur im
 * direkten Vergleich.
 *
 * Einsprachig deutsch wie der ganze Intermediate-Band. Filme, Bücher und
 * Personen sind erfunden; sämtliche Texte sind eigenständig verfasst.
 */
const v = 1;

export const INTERMEDIATE_5_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Genres und Mediengewohnheiten.
  {
    order: 1,
    title: 'Was läuft heute Abend?',
    subtitle: 'Filme, Serien, Bücher',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'i5-1-h1', type: 'HEADING', level: 1, text: 'Was läuft heute Abend?' },
        {
          id: 'i5-1-image',
          type: 'IMAGE',
          url: 'illustration:living-room',
          alt: 'Ein Wohnzimmer mit Sofa – bereit für einen Filmabend.',
          caption: 'Kino zu Hause: Streaming hat die Abende vieler Menschen verändert.',
        },
        {
          id: 'i5-1-dlg',
          type: 'DIALOGUE',
          title: 'Filmabend',
          lines: [
            { speaker: 'Lukas', text: 'Sollen wir heute Abend einen Film schauen? Ich hätte Lust auf einen Thriller.' },
            { speaker: 'Mira', text: 'Schon wieder? Ich würde lieber etwas Lustiges sehen. Wie wäre es mit einer Komödie?' },
            { speaker: 'Lukas', text: 'Hm. Oder wir schauen die neue Serie weiter, die wir angefangen haben.' },
            { speaker: 'Mira', text: 'Die Krimiserie aus Wien? Die ist spannend, aber die letzte Folge fand ich ziemlich brutal.' },
            { speaker: 'Lukas', text: 'Stimmt. Und was ist mit diesem Dokumentarfilm über die Alpen? Der soll tolle Bilder haben.' },
            { speaker: 'Mira', text: 'Gute Idee. Der ist wenigstens entspannend. Aber am Sonntag schauen wir wie immer „Tatort“, oder?' },
            { speaker: 'Lukas', text: 'Na klar, das ist Tradition!' },
          ],
        },
        {
          id: 'i5-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: Genres und Medien',
          items: [
            {
              term: 'Komödie',
              article: 'die',
              plural: 'die Komödien',
              translations: { en: 'comedy', es: 'la comedia', fr: 'la comédie', it: 'la commedia' },
            },
            {
              term: 'Krimi',
              article: 'der',
              plural: 'die Krimis',
              translations: { en: 'crime story, detective film', es: 'la novela / película policiaca', fr: 'le polar', it: 'il giallo' },
            },
            {
              term: 'Dokumentarfilm',
              article: 'der',
              plural: 'die Dokumentarfilme',
              translations: { en: 'documentary', es: 'el documental', fr: 'le documentaire', it: 'il documentario' },
            },
            {
              term: 'Roman',
              article: 'der',
              plural: 'die Romane',
              translations: { en: 'novel', es: 'la novela', fr: 'le roman', it: 'il romanzo' },
            },
            {
              term: 'Serie',
              article: 'die',
              plural: 'die Serien',
              translations: { en: 'series', es: 'la serie', fr: 'la série', it: 'la serie' },
            },
            {
              term: 'Folge',
              article: 'die',
              plural: 'die Folgen',
              translations: { en: 'episode', es: 'el episodio', fr: 'l’épisode', it: 'la puntata' },
            },
            {
              term: 'spannend',
              translations: { en: 'exciting, gripping', es: 'emocionante', fr: 'passionnant', it: 'avvincente' },
            },
            {
              term: 'langweilig',
              translations: { en: 'boring', es: 'aburrido', fr: 'ennuyeux', it: 'noioso' },
            },
            {
              term: 'streamen',
              translations: { en: 'to stream', es: 'ver en streaming', fr: 'regarder en streaming', it: 'guardare in streaming' },
            },
            {
              term: 'Untertitel',
              article: 'der',
              plural: 'die Untertitel',
              translations: { en: 'subtitle', es: 'el subtítulo', fr: 'le sous-titre', it: 'il sottotitolo' },
            },
          ],
        },
        {
          id: 'i5-1-info-medien',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'Sonntagabend: „Tatort“',
          text: 'Seit 1970 läuft am Sonntagabend um 20:15 Uhr im Ersten der „Tatort“ – ein Krimi, der jede Woche in einer anderen Stadt spielt. Für Millionen Menschen ist er ein festes Ritual; in manchen Kneipen wird er sogar gemeinsam geschaut. Übrigens: Ausländische Filme laufen in Deutschland im Kino und im Fernsehen meistens synchronisiert, also auf Deutsch gesprochen. Wer das Original hören will, sucht nach „OmU“ – Originalversion mit Untertiteln.',
        },
        {
          id: 'i5-1-choice',
          type: 'CHOICE',
          instruction: 'Lesen Sie das Gespräch noch einmal.',
          question: 'Was schauen Lukas und Mira heute Abend wahrscheinlich?',
          multiple: false,
          options: [
            { id: 'a1', text: 'einen Thriller' },
            { id: 'a2', text: 'eine Komödie' },
            { id: 'a3', text: 'einen Dokumentarfilm über die Alpen' },
            { id: 'a4', text: 'den „Tatort“' },
          ],
          solution: ['a3'],
          explanation:
            'Mira findet die Idee mit dem Dokumentarfilm gut, weil er entspannend ist. Den „Tatort“ schauen sie erst am Sonntag.',
        },
        {
          id: 'i5-1-match',
          type: 'MATCHING',
          instruction: 'Welches Genre ist das?',
          left: [
            { id: 'l1', text: 'Eine Kommissarin sucht einen Mörder.' },
            { id: 'l2', text: 'Man lernt viel über das Leben der Wölfe.' },
            { id: 'l3', text: 'Man lacht vom Anfang bis zum Ende.' },
            { id: 'l4', text: 'Eine lange Geschichte auf 400 Seiten.' },
          ],
          right: [
            { id: 'r1', text: 'ein Krimi' },
            { id: 'r2', text: 'ein Dokumentarfilm' },
            { id: 'r3', text: 'eine Komödie' },
            { id: 'r4', text: 'ein Roman' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'i5-1-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie mit den Wörtern aus dem Kasten.',
          wordBank: ['Folge', 'Untertiteln', 'spannend', 'streame', 'Serie'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Ich gehe selten ins Kino, ich ' },
            { kind: 'GAP', gapId: 'c1', solution: ['streame'], width: 8 },
            { kind: 'TEXT', text: ' Filme lieber zu Hause. Im Moment schaue ich eine dänische ' },
            { kind: 'GAP', gapId: 'c2', solution: ['Serie'], width: 6 },
            { kind: 'TEXT', text: ' im Original mit ' },
            { kind: 'GAP', gapId: 'c3', solution: ['Untertiteln'], width: 12 },
            { kind: 'TEXT', text: '. Sie ist so ' },
            { kind: 'GAP', gapId: 'c4', solution: ['spannend'], width: 9 },
            { kind: 'TEXT', text: ', dass ich nach jeder ' },
            { kind: 'GAP', gapId: 'c5', solution: ['Folge'], width: 6 },
            { kind: 'TEXT', text: ' sofort die nächste sehen will.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – eine Inhaltsangabe.
  {
    order: 2,
    title: 'Worum geht es?',
    subtitle: 'Einen Film oder ein Buch zusammenfassen',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'i5-2-h1', type: 'HEADING', level: 1, text: 'Worum geht es?' },
        {
          id: 'i5-2-intro',
          type: 'TEXT',
          text: 'In einem Lesekreis stellt Frau Okafor einen Roman vor, den sie gerade gelesen hat. Achten Sie darauf, wie sie die Handlung erzählt: im Präsens, in der richtigen Reihenfolge und ohne das Ende zu verraten.',
        },
        {
          id: 'i5-2-text',
          type: 'TEXT',
          text: '„Der Roman heißt ‚Das Haus am Fluss‘ und ist von einer jungen Autorin aus Dresden. Er spielt in einem kleinen Dorf an der Elbe, in der Gegenwart.\n\nDie Hauptfigur ist Clara, eine Architektin Mitte dreißig, die in Hamburg lebt. Als ihre Großmutter stirbt, erbt Clara deren altes Haus und fährt zum ersten Mal seit zwanzig Jahren in das Dorf zurück. Eigentlich will sie das Haus schnell verkaufen. Doch beim Aufräumen findet sie auf dem Dachboden Briefe, die ihre Großmutter nie abgeschickt hat. Nach und nach erfährt Clara ein Familiengeheimnis, von dem niemand im Dorf sprechen will.\n\nDas Buch erzählt auf zwei Zeitebenen: heute und in den Jahren nach dem Krieg. Mehr verrate ich nicht – ihr müsst es selbst lesen!“',
        },
        {
          id: 'i5-2-info-inhalt',
          type: 'INFO',
          variant: 'TIP',
          title: 'Eine Inhaltsangabe',
          text: 'Eine Inhaltsangabe erzählt die Handlung kurz und sachlich, im Präsens. Zuerst nennt man Titel, Autor oder Regie, Genre, Ort und Zeit. Dann stellt man die Hauptfigur vor und erzählt die wichtigsten Ereignisse. Bei einer Empfehlung verrät man das Ende nicht.',
          table: {
            headers: ['Zweck', 'Redemittel'],
            rows: [
              ['Rahmen', 'Der Film / Roman spielt in … / Die Geschichte spielt im Jahr …'],
              ['Figuren', 'Die Hauptfigur ist … / Im Mittelpunkt steht …'],
              ['Thema', 'Es geht um … / Der Film handelt von …'],
              ['Handlung', 'Am Anfang … / Dann … / Nach und nach … / Plötzlich …'],
            ],
          },
        },
        {
          id: 'i5-2-choice',
          type: 'CHOICE',
          instruction: 'Lesen Sie die Vorstellung noch einmal.',
          question: 'Welche Aussagen sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'a1', text: 'Clara hat das Haus von ihrer Großmutter geerbt.' },
            { id: 'a2', text: 'Clara ist oft in das Dorf gefahren.' },
            { id: 'a3', text: 'Clara findet alte Briefe auf dem Dachboden.' },
            { id: 'a4', text: 'Frau Okafor erzählt, wie das Buch endet.' },
          ],
          solution: ['a1', 'a3'],
          explanation:
            'Clara fährt „zum ersten Mal seit zwanzig Jahren“ in das Dorf, also nicht oft. Das Ende verrät Frau Okafor nicht: „Mehr verrate ich nicht.“',
        },
        {
          id: 'i5-2-order',
          type: 'ORDERING',
          instruction: 'Bringen Sie die Handlung in die richtige Reihenfolge.',
          items: [
            { id: 'o1', text: 'Claras Großmutter stirbt.' },
            { id: 'o2', text: 'Clara erbt das Haus.' },
            { id: 'o3', text: 'Sie fährt in das Dorf zurück.' },
            { id: 'o4', text: 'Beim Aufräumen findet sie Briefe.' },
            { id: 'o5', text: 'Sie erfährt ein Familiengeheimnis.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5'],
        },
        {
          id: 'i5-2-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die Inhaltsangabe eines Films.',
          wordBank: ['spielt', 'Hauptfigur', 'geht', 'Plötzlich', 'handelt'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Der Film „Letzte Station“ ' },
            { kind: 'GAP', gapId: 'h1', solution: ['spielt'], width: 7 },
            { kind: 'TEXT', text: ' in einem Nachtzug von Berlin nach Wien. Die ' },
            { kind: 'GAP', gapId: 'h2', solution: ['Hauptfigur'], width: 11 },
            { kind: 'TEXT', text: ' ist ein Schaffner kurz vor der Rente. Es ' },
            { kind: 'GAP', gapId: 'h3', solution: ['geht'], width: 5 },
            { kind: 'TEXT', text: ' um seine letzte Fahrt. ' },
            { kind: 'GAP', gapId: 'h4', solution: ['Plötzlich', 'Ploetzlich'], width: 10 },
            { kind: 'TEXT', text: ' verschwindet ein Kind aus einem Abteil. Der Film ' },
            { kind: 'GAP', gapId: 'h5', solution: ['handelt'], width: 8 },
            { kind: 'TEXT', text: ' von Vertrauen und Mut.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – Gegensätze mit „obwohl“ und „trotzdem“.
  {
    order: 3,
    title: 'Obwohl er lang ist …',
    subtitle: '„obwohl“ und „trotzdem“',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'i5-3-h1', type: 'HEADING', level: 1, text: 'Obwohl er lang ist …' },
        {
          id: 'i5-3-text',
          type: 'TEXT',
          text: 'Nach dem Lesekreis unterhalten sich zwei Teilnehmer:\n\nTheo: „Ich habe das Buch in drei Tagen gelesen, obwohl es fast 500 Seiten hat. Ich konnte einfach nicht aufhören.“\n\nIlse: „Mir ging es anders. Die Geschichte war interessant. Trotzdem hat mich das Buch nicht richtig gepackt. Die Sprache fand ich zu kompliziert.“\n\nTheo: „Echt? Obwohl die Kritiken so gut waren?“\n\nIlse: „Ja. Die Kritiker waren begeistert. Ich fand es trotzdem anstrengend. Aber ich lese den nächsten Roman der Autorin auf jeden Fall, weil mich das Thema interessiert.“',
        },
        {
          id: 'i5-3-info-obwohl',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: '„obwohl“ und „trotzdem“',
          text: 'Beide drücken einen Gegensatz aus: Etwas passiert, obwohl man etwas anderes erwartet. „obwohl“ leitet einen Nebensatz ein – das Verb steht am Ende. „trotzdem“ steht im Hauptsatz, meist auf Position 1 (dann folgt direkt das Verb) oder nach dem Verb. Vergleichen Sie mit „weil“ und „deshalb“: Sie funktionieren genauso, drücken aber einen Grund aus statt eines Gegensatzes.',
          table: {
            headers: ['', 'Nebensatz (Verb am Ende)', 'Hauptsatz (Verb auf Position 2)'],
            rows: [
              ['Gegensatz', 'Ich lese das Buch, obwohl es lang ist.', 'Das Buch ist lang. Trotzdem lese ich es.'],
              ['Grund', 'Ich lese das Buch, weil es spannend ist.', 'Das Buch ist spannend. Deshalb lese ich es.'],
            ],
          },
        },
        {
          id: 'i5-3-info-stellung',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Achtung: Position 1',
          text: 'Nach „trotzdem“ auf Position 1 kommt sofort das Verb: Trotzdem gehe ich ins Kino. – Nicht: Trotzdem ich gehe ins Kino. Steht der Nebensatz mit „obwohl“ am Anfang, beginnt der Hauptsatz mit dem Verb: Obwohl es regnet, gehen wir spazieren.',
        },
        {
          id: 'i5-3-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie „obwohl“ oder „trotzdem“.',
          wordBank: ['obwohl', 'trotzdem'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Wir sind ins Kino gegangen, ' },
            { kind: 'GAP', gapId: 't1', solution: ['obwohl'], width: 9 },
            { kind: 'TEXT', text: ' wir sehr müde waren.\n2. Der Film hatte schlechte Kritiken. ' },
            { kind: 'GAP', gapId: 't2', solution: ['Trotzdem'], width: 9 },
            { kind: 'TEXT', text: ' war das Kino voll.\n3. ' },
            { kind: 'GAP', gapId: 't3', solution: ['Obwohl'], width: 9 },
            { kind: 'TEXT', text: ' ich kein Spanisch kann, habe ich den Film im Original gesehen.\n4. Die Serie ist brutal. Mira schaut sie ' },
            { kind: 'GAP', gapId: 't4', solution: ['trotzdem'], width: 9 },
            { kind: 'TEXT', text: '.\n5. Theo hat das Buch gekauft, ' },
            { kind: 'GAP', gapId: 't5', solution: ['obwohl'], width: 9 },
            { kind: 'TEXT', text: ' es sehr teuer war.' },
          ],
        },
        {
          id: 'i5-3-choice',
          type: 'CHOICE',
          instruction: 'Welche Sätze sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'c1', text: 'Obwohl der Film lang war, hat er mir gefallen.' },
            { id: 'c2', text: 'Der Film war lang. Trotzdem er hat mir gefallen.' },
            { id: 'c3', text: 'Der Film war lang. Trotzdem hat er mir gefallen.' },
            { id: 'c4', text: 'Der Film hat mir gefallen, obwohl er war lang.' },
          ],
          solution: ['c1', 'c3'],
          explanation:
            'Nach „trotzdem“ auf Position 1 folgt direkt das Verb: Trotzdem hat er … Im Nebensatz mit „obwohl“ steht das Verb am Ende: …, obwohl er lang war.',
        },
        {
          id: 'i5-3-match',
          type: 'MATCHING',
          instruction: 'Grund oder Gegensatz? Verbinden Sie die Satzteile.',
          left: [
            { id: 'l1', text: 'Ich gehe gern ins Theater,' },
            { id: 'l2', text: 'Ich gehe selten ins Theater,' },
            { id: 'l3', text: 'Die Karten waren teuer.' },
            { id: 'l4', text: 'Die Karten waren ausverkauft.' },
          ],
          right: [
            { id: 'r1', text: 'weil mich die Schauspieler begeistern.' },
            { id: 'r2', text: 'obwohl es mir gut gefällt.' },
            { id: 'r3', text: 'Trotzdem haben wir sie gekauft.' },
            { id: 'r4', text: 'Deshalb sind wir zu Hause geblieben.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'i5-3-order',
          type: 'ORDERING',
          instruction: 'Bilden Sie einen Satz mit „trotzdem“.',
          items: [
            { id: 'o1', text: 'Das Buch' },
            { id: 'o2', text: 'war' },
            { id: 'o3', text: 'schwierig.' },
            { id: 'o4', text: 'Trotzdem' },
            { id: 'o5', text: 'habe' },
            { id: 'o6', text: 'ich' },
            { id: 'o7', text: 'es zu Ende gelesen.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5', 'o6', 'o7'],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – eine Filmkritik.
  {
    order: 4,
    title: 'Die Kritik',
    subtitle: 'Eine Rezension verstehen',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'i5-4-h1', type: 'HEADING', level: 1, text: 'Die Kritik' },
        {
          id: 'i5-4-text',
          type: 'TEXT',
          text: '„Sommer in Palermo“ – leicht, warm, aber zu glatt\n\nWer nach einem grauen Winter Sehnsucht nach Sonne hat, ist in diesem Film richtig. Regisseurin Lea Brandt erzählt die Geschichte von Jakob (Tom Seidel), einem Kölner Koch, der nach einer Trennung spontan nach Sizilien reist. Dort hilft er im Restaurant einer alten Dame aus und entdeckt nicht nur neue Rezepte, sondern auch neue Freunde.\n\nDie Stärken des Films liegen eindeutig bei den Bildern: Die Märkte, die engen Gassen und das Licht am Meer sind wunderschön fotografiert. Auch Tom Seidel überzeugt als unsicherer, aber liebenswerter Jakob. Die Musik passt perfekt zur Stimmung.\n\nSchwächer ist das Drehbuch. Die Handlung ist ziemlich vorhersehbar, und die Nebenfiguren bleiben blass. Obwohl der Film fast zwei Stunden dauert, erfährt man über die alte Dame fast nichts. Einige Szenen wirken wie Werbung für Urlaub in Italien.\n\nFazit: Kein Meisterwerk, trotzdem ein angenehmer Kinoabend – ideal für alle, die sich einfach gut unterhalten wollen. Drei von fünf Sternen.',
        },
        {
          id: 'i5-4-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: Eine Kritik',
          items: [
            {
              term: 'der Regisseur / die Regisseurin',
              translations: { en: 'director', es: 'el director / la directora', fr: 'le réalisateur / la réalisatrice', it: 'il / la regista' },
            },
            {
              term: 'Drehbuch',
              article: 'das',
              plural: 'die Drehbücher',
              translations: { en: 'screenplay', es: 'el guion', fr: 'le scénario', it: 'la sceneggiatura' },
            },
            {
              term: 'Handlung',
              article: 'die',
              translations: { en: 'plot', es: 'la trama', fr: 'l’intrigue', it: 'la trama' },
            },
            {
              term: 'vorhersehbar',
              translations: { en: 'predictable', es: 'previsible', fr: 'prévisible', it: 'prevedibile' },
            },
            {
              term: 'überzeugen',
              translations: { en: 'to convince, to be convincing', es: 'convencer', fr: 'convaincre', it: 'convincere' },
              example: 'Der Hauptdarsteller überzeugt.',
            },
            {
              term: 'Stimmung',
              article: 'die',
              translations: { en: 'atmosphere, mood', es: 'el ambiente', fr: 'l’ambiance', it: 'l’atmosfera' },
            },
            {
              term: 'Fazit',
              article: 'das',
              translations: { en: 'conclusion, verdict', es: 'la conclusión', fr: 'le bilan', it: 'la conclusione' },
            },
            {
              term: 'Meisterwerk',
              article: 'das',
              translations: { en: 'masterpiece', es: 'la obra maestra', fr: 'le chef-d’œuvre', it: 'il capolavoro' },
            },
          ],
        },
        {
          id: 'i5-4-choice',
          type: 'CHOICE',
          instruction: 'Lesen Sie die Kritik.',
          question: 'Was lobt die Kritik? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'a1', text: 'die Bilder' },
            { id: 'a2', text: 'die überraschende Handlung' },
            { id: 'a3', text: 'den Hauptdarsteller' },
            { id: 'a4', text: 'die Nebenfiguren' },
          ],
          solution: ['a1', 'a3'],
          explanation:
            'Gelobt werden die Bilder, Tom Seidel und die Musik. Die Handlung ist „vorhersehbar“, und die Nebenfiguren „bleiben blass“ – das kritisiert der Text.',
        },
        {
          id: 'i5-4-info-bewerten',
          type: 'INFO',
          variant: 'TIP',
          title: 'Bewerten und empfehlen',
          text: 'In einer Rezension nennen Sie Stärken und Schwächen und begründen Ihr Urteil. Am Ende steht ein Fazit, oft mit einer Empfehlung für eine bestimmte Zielgruppe.',
          table: {
            headers: ['Zweck', 'Redemittel'],
            rows: [
              ['loben', 'Besonders gut gefällt mir … / … überzeugt / … ist gelungen.'],
              ['kritisieren', 'Weniger gelungen ist … / Schade finde ich, dass …'],
              ['abwägen', 'Zwar …, aber … / Obwohl …, …'],
              ['empfehlen', 'Ich kann den Film allen empfehlen, die … / Wer … mag, sollte … sehen.'],
            ],
          },
        },
        {
          id: 'i5-4-match',
          type: 'MATCHING',
          instruction: 'Positiv oder negativ? Was bedeuten die Ausdrücke aus der Kritik?',
          left: [
            { id: 'l1', text: 'Die Nebenfiguren bleiben blass.' },
            { id: 'l2', text: 'Tom Seidel überzeugt.' },
            { id: 'l3', text: 'Die Handlung ist vorhersehbar.' },
            { id: 'l4', text: 'Kein Meisterwerk.' },
          ],
          right: [
            { id: 'r1', text: 'Man lernt die Nebenfiguren kaum kennen.' },
            { id: 'r2', text: 'Er spielt die Rolle sehr gut.' },
            { id: 'r3', text: 'Man weiß schon früh, was passiert.' },
            { id: 'r4', text: 'Der Film ist nicht herausragend.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'i5-4-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie eine kurze Buchkritik.',
          wordBank: ['Handlung', 'Zwar', 'empfehlen', 'Fazit', 'gelungen'],
          caseSensitive: false,
          segments: [
            { kind: 'GAP', gapId: 'b1', solution: ['Zwar'], width: 5 },
            { kind: 'TEXT', text: ' ist der Anfang etwas langsam, aber dann wird die ' },
            { kind: 'GAP', gapId: 'b2', solution: ['Handlung'], width: 9 },
            { kind: 'TEXT', text: ' immer spannender. Besonders ' },
            { kind: 'GAP', gapId: 'b3', solution: ['gelungen'], width: 9 },
            { kind: 'TEXT', text: ' finde ich die Dialoge. ' },
            { kind: 'GAP', gapId: 'b4', solution: ['Fazit'], width: 6 },
            { kind: 'TEXT', text: ': Ich kann das Buch allen ' },
            { kind: 'GAP', gapId: 'b5', solution: ['empfehlen'], width: 10 },
            { kind: 'TEXT', text: ', die Familiengeschichten mögen.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – Rückblick und eine eigene Rezension.
  {
    order: 5,
    title: 'Kannst du das schon?',
    subtitle: 'Rückblick, eine eigene Rezension',
    estimatedMinutes: 23,
    content: {
      version: v,
      blocks: [
        { id: 'i5-5-h1', type: 'HEADING', level: 1, text: 'Kannst du das schon?' },
        {
          id: 'i5-5-intro',
          type: 'TEXT',
          text: 'Prüfen Sie, was Sie aus Kapitel 5 mitnehmen: Wortschatz zu Film und Buch, die Inhaltsangabe und Gegensätze mit „obwohl“ und „trotzdem“. Am Ende schreiben Sie selbst eine Rezension.',
        },
        {
          id: 'i5-5-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie den Text.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Gestern habe ich einen ' },
            { kind: 'GAP', gapId: 'r1', solution: ['Dokumentarfilm'], width: 15 },
            { kind: 'TEXT', text: ' über Bienen gesehen. Er ' },
            { kind: 'GAP', gapId: 'r2', solution: ['spielt'], width: 7 },
            { kind: 'TEXT', text: ' in den Bergen der Schweiz. ' },
            { kind: 'GAP', gapId: 'r3', solution: ['Obwohl'], width: 7 },
            { kind: 'TEXT', text: ' ich mich normalerweise nicht für Natur interessiere, war er sehr ' },
            { kind: 'GAP', gapId: 'r4', solution: ['spannend'], width: 9 },
            { kind: 'TEXT', text: '. Er ist leider nur mit ' },
            { kind: 'GAP', gapId: 'r5', solution: ['Untertiteln'], width: 12 },
            { kind: 'TEXT', text: ' im Kino. ' },
            { kind: 'GAP', gapId: 'r6', solution: ['Trotzdem'], width: 9 },
            { kind: 'TEXT', text: ' kann ich ihn allen empfehlen.' },
          ],
        },
        {
          id: 'i5-5-choice',
          type: 'CHOICE',
          instruction: 'Welche Sätze sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'k1', text: 'Obwohl ich den Roman schon kenne, lese ich ihn noch einmal.' },
            { id: 'k2', text: 'Der Film spielte in Rom, und am Ende heiratet die Hauptfigur.' },
            { id: 'k3', text: 'Die Musik war laut. Trotzdem sind wir geblieben.' },
            { id: 'k4', text: 'Ich schaue die Serie, trotzdem sie langweilig ist.' },
          ],
          solution: ['k1', 'k3'],
          explanation:
            'In einer Inhaltsangabe bleibt man im Präsens: Der Film spielt in Rom … „trotzdem“ kann keinen Nebensatz einleiten – dafür braucht man „obwohl“: …, obwohl sie langweilig ist.',
        },
        {
          id: 'i5-5-match',
          type: 'MATCHING',
          instruction: 'Welcher Teil einer Rezension ist das?',
          left: [
            { id: 'm1', text: 'Der Roman spielt im Berlin der Zwanzigerjahre.' },
            { id: 'm2', text: 'Im Mittelpunkt steht eine junge Fotografin.' },
            { id: 'm3', text: 'Schade finde ich, dass das Ende so offen ist.' },
            { id: 'm4', text: 'Wer historische Romane mag, sollte ihn lesen.' },
          ],
          right: [
            { id: 'y1', text: 'Ort und Zeit' },
            { id: 'y2', text: 'Hauptfigur' },
            { id: 'y3', text: 'Kritik' },
            { id: 'y4', text: 'Empfehlung' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'y1' },
            { leftId: 'm2', rightId: 'y2' },
            { leftId: 'm3', rightId: 'y3' },
            { leftId: 'm4', rightId: 'y4' },
          ],
        },
        {
          id: 'i5-5-writing',
          type: 'WRITING',
          instruction: 'Meine Empfehlung',
          prompt:
            'Schreiben Sie eine kurze Rezension zu einem Film, einer Serie oder einem Buch, das Sie kennen. Nennen Sie Titel und Genre, fassen Sie die Handlung im Präsens zusammen (ohne das Ende zu verraten), nennen Sie Stärken und Schwächen und schließen Sie mit einem Fazit. Benutzen Sie „obwohl“ oder „trotzdem“ mindestens einmal.',
          minWords: 80,
          maxWords: 180,
          aiFeedback: true,
          sampleAnswer:
            'Der Film „Good Bye, Lenin!“ ist eine Tragikomödie aus Deutschland. Er spielt 1989 und 1990 in Ost-Berlin. Die Hauptfigur ist Alex, ein junger Mann. Seine Mutter liegt im Koma, während die Mauer fällt. Als sie wieder aufwacht, darf sie sich nicht aufregen. Deshalb tut Alex so, als ob es die DDR noch geben würde – und das wird immer schwieriger.\n\nBesonders gut gefallen mir die Schauspieler und der Humor. Obwohl die Geschichte eigentlich traurig ist, muss man oft lachen. Ein paar Szenen sind etwas zu lang. Trotzdem ist der Film nie langweilig.\n\nFazit: Wer etwas über die deutsche Geschichte lernen und dabei gut unterhalten werden möchte, sollte diesen Film unbedingt sehen.',
        },
      ],
    },
  },
];
