import type { UnitSeed } from './chapter-beginner-1';

/**
 * Advanced, Kapitel 4: „Literatur und Interpretation“ (C1, Kapitel 4)
 *
 * Fünf Seiten. Das Werkzeug zum Deuten literarischer Texte: Wer erzählt,
 * mit welchen Mitteln, aus welcher Zeit heraus – und wie schreibt man darüber
 * eine Interpretation, die Textsorte des deutschen Deutschunterrichts.
 *
 * Aufbau: Seite 1 legt den Analysewortschatz, Seite 2 Erzählinstanz und
 * erlebte Rede, Seite 3 die Stilmittel, Seite 4 die Epochen als
 * Orientierung, Seite 5 den Aufbau einer Interpretation.
 *
 * Zitiert werden nur gemeinfreie Texte (Gryphius, Goethe, Eichendorff,
 * Rilke, Kafka) und nur in kurzen Auszügen. Die Prosabeispiele ohne
 * Quellenangabe sind eigens verfasst.
 */
const v = 1;

export const ADVANCED_4_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Analysewortschatz.
  {
    order: 1,
    title: 'Genau lesen',
    subtitle: 'Wortschatz der Textanalyse',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'a4-1-h1', type: 'HEADING', level: 1, text: 'Genau lesen' },
        {
          id: 'a4-1-intro',
          type: 'TEXT',
          text: 'Wer auf B2-Niveau einen Roman liest, versteht, was passiert. Auf C1-Niveau geht es um die Frage, wie es erzählt wird und warum gerade so. Dafür braucht man Begriffe, mit denen man über die Form eines Textes sprechen kann, ohne ins Ungefähre zu geraten.',
        },
        {
          id: 'a4-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: Texte analysieren',
          items: [
            {
              term: 'Erzähler',
              article: 'der',
              plural: 'die Erzähler',
              translations: { en: 'narrator', es: 'el narrador', fr: 'le narrateur', it: 'il narratore' },
            },
            {
              term: 'Handlung',
              article: 'die',
              translations: { en: 'plot', es: 'la trama', fr: 'l’intrigue', it: 'la trama' },
            },
            {
              term: 'Figur',
              article: 'die',
              plural: 'die Figuren',
              translations: { en: 'character', es: 'el personaje', fr: 'le personnage', it: 'il personaggio' },
            },
            {
              term: 'Strophe',
              article: 'die',
              plural: 'die Strophen',
              translations: { en: 'stanza', es: 'la estrofa', fr: 'la strophe', it: 'la strofa' },
            },
            {
              term: 'Vers',
              article: 'der',
              plural: 'die Verse',
              translations: { en: 'line (of verse)', es: 'el verso', fr: 'le vers', it: 'il verso' },
            },
            {
              term: 'lyrisches Ich',
              article: 'das',
              translations: { en: 'lyrical I, speaker', es: 'el yo lírico', fr: 'le je lyrique', it: 'l’io lirico' },
            },
            {
              term: 'Stilmittel',
              article: 'das',
              plural: 'die Stilmittel',
              translations: { en: 'stylistic device', es: 'el recurso estilístico', fr: 'la figure de style', it: 'la figura retorica' },
            },
            {
              term: 'Deutung',
              article: 'die',
              plural: 'die Deutungen',
              translations: { en: 'interpretation', es: 'la interpretación', fr: 'l’interprétation', it: 'l’interpretazione' },
            },
            {
              term: 'etwas andeuten',
              translations: { en: 'to hint at something', es: 'insinuar algo', fr: 'suggérer quelque chose', it: 'accennare a qualcosa' },
            },
            {
              term: 'Leitmotiv',
              article: 'das',
              plural: 'die Leitmotive',
              translations: { en: 'leitmotif', es: 'el leitmotiv', fr: 'le leitmotiv', it: 'il leitmotiv' },
            },
          ],
        },
        {
          id: 'a4-1-info-thema',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Inhalt, Thema, Wirkung',
          text: 'Die Inhaltsangabe beantwortet die Frage „Was passiert?“ – im Präsens, ohne Wertung, ohne Zitate. Das Thema beantwortet „Worum geht es eigentlich?“ und wird abstrakt formuliert. Die Deutung fragt, wie die Form das Thema trägt.',
          table: {
            headers: ['Ebene', 'Frage', 'Beispiel'],
            rows: [
              ['Inhalt', 'Was passiert?', 'Ein Handelsreisender erwacht als Käfer.'],
              ['Thema', 'Worum geht es eigentlich?', 'Entfremdung und der Wert eines Menschen für seine Familie'],
              ['Wirkung', 'Wie trägt die Form das Thema?', 'Der sachliche Ton lässt das Unerhörte alltäglich wirken.'],
            ],
          },
        },
        {
          id: 'a4-1-choice',
          type: 'CHOICE',
          instruction: 'Wählen Sie die beste Formulierung.',
          question: 'In einer Erzählung verkauft eine alte Frau das Haus ihrer Familie und merkt erst beim Auszug, wie viele Erinnerungen daran hängen. Wie formuliert man das Thema?',
          multiple: false,
          options: [
            { id: 'c1', text: 'Eine alte Frau verkauft ihr Haus.' },
            { id: 'c2', text: 'Die Bindung an Orte als Träger von Erinnerung.' },
            { id: 'c3', text: 'Die Geschichte ist traurig und schön geschrieben.' },
            { id: 'c4', text: 'Der Immobilienmarkt in Deutschland.' },
          ],
          solution: ['c2'],
          explanation:
            'Das Thema wird abstrakt und in einem Satz formuliert. Die erste Antwort gibt nur den Inhalt wieder, die dritte ist eine Wertung, die vierte verfehlt den Text.',
        },
        {
          id: 'a4-1-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die Analyse.',
          wordBank: ['Strophen', 'Versen', 'lyrische Ich', 'Leitmotiv', 'Figuren'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Das Gedicht besteht aus drei ' },
            { kind: 'GAP', gapId: 'g1', solution: ['Strophen'], width: 9 },
            { kind: 'TEXT', text: ' mit je vier ' },
            { kind: 'GAP', gapId: 'g2', solution: ['Versen'], width: 7 },
            { kind: 'TEXT', text: '. Das ' },
            { kind: 'GAP', gapId: 'g3', solution: ['lyrische Ich'], width: 13 },
            { kind: 'TEXT', text: ' spricht eine abwesende Person an. In der Novelle kehrt das Bild des Fensters immer wieder – es ist ein ' },
            { kind: 'GAP', gapId: 'g4', solution: ['Leitmotiv'], width: 10 },
            { kind: 'TEXT', text: '. Die ' },
            { kind: 'GAP', gapId: 'g5', solution: ['Figuren'], width: 8 },
            { kind: 'TEXT', text: ' sprechen kaum miteinander.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – Erzählperspektive und erlebte Rede.
  {
    order: 2,
    title: 'Wer erzählt?',
    subtitle: 'Erzählperspektive und erlebte Rede',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'a4-2-h1', type: 'HEADING', level: 1, text: 'Wer erzählt?' },
        {
          id: 'a4-2-intro',
          type: 'TEXT',
          text: '„Als Gregor Samsa eines Morgens aus unruhigen Träumen erwachte, fand er sich in seinem Bett zu einem ungeheueren Ungeziefer verwandelt.“ So beginnt Franz Kafkas „Die Verwandlung“ (1915). Der Satz berichtet das Unmögliche, als wäre es eine Wetternotiz. Wer spricht hier? Ein Erzähler, der Gregors Innensicht kennt, aber nicht kommentiert. Die Frage nach der Erzählinstanz ist der erste Schritt jeder Analyse.',
        },
        {
          id: 'a4-2-info-perspektive',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Erzählformen und -perspektiven',
          text: 'Man unterscheidet die Erzählform (Ich- oder Er-/Sie-Erzählung) und das Erzählverhalten. Der auktoriale Erzähler weiß mehr als die Figuren und kommentiert. Der personale Erzähler bleibt nah an einer Figur und sieht die Welt durch ihre Augen. Der neutrale Erzähler berichtet nur, was von außen sichtbar ist.',
          table: {
            headers: ['Erzählverhalten', 'Merkmal', 'Beispiel'],
            rows: [
              ['auktorial', 'allwissend, kommentiert, greift vor', 'Sie ahnte nicht, dass sie ihn nie wiedersehen würde.'],
              ['personal', 'Sicht einer Figur, keine Kommentare', 'Der Raum war zu hell. Wo war sie nur?'],
              ['neutral', 'nur Äußeres, wie eine Kamera', 'Er stand auf, ging zur Tür und schloss sie.'],
              ['Ich-Erzählung', 'Erzähler ist Figur der Handlung', 'Ich war zwölf, als wir in die Stadt zogen.'],
            ],
          },
        },
        {
          id: 'a4-2-match',
          type: 'MATCHING',
          instruction: 'Welches Erzählverhalten liegt vor?',
          left: [
            { id: 'l1', text: 'Noch wusste niemand im Dorf, dass dieser Winter der letzte der Mühle sein sollte.' },
            { id: 'l2', text: 'Die Frau nahm den Brief, las ihn und legte ihn ohne ein Wort auf den Tisch.' },
            { id: 'l3', text: 'Schon wieder zu spät. Warum konnte der Bus nicht einmal pünktlich sein?' },
          ],
          right: [
            { id: 'r1', text: 'auktorial' },
            { id: 'r2', text: 'neutral' },
            { id: 'r3', text: 'personal' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
          ],
        },
        {
          id: 'a4-2-info-erlebt',
          type: 'INFO',
          variant: 'TIP',
          title: 'Die erlebte Rede',
          text: 'Die erlebte Rede verbindet die Gedanken einer Figur mit der Stimme des Erzählers. Sie steht in der dritten Person und im Präteritum wie der Erzählbericht, übernimmt aber Wortwahl, Fragen und Ausrufe der Figur – ohne „dachte sie“. Sie ist das wichtigste Mittel personalen Erzählens.',
          table: {
            headers: ['Form', 'Beispiel'],
            rows: [
              ['direkte Rede', 'Sie dachte: „Er kommt nicht mehr. Warum habe ich ihm geglaubt?“'],
              ['indirekte Rede', 'Sie dachte, er komme nicht mehr, und fragte sich, warum sie ihm geglaubt habe.'],
              ['erlebte Rede', 'Er kam nicht mehr. Warum hatte sie ihm nur geglaubt?'],
              ['innerer Monolog', 'Er kommt nicht mehr. Warum hab ich ihm bloß geglaubt?'],
            ],
          },
        },
        {
          id: 'a4-2-choice',
          type: 'CHOICE',
          instruction: 'Welcher Satz steht in erlebter Rede?',
          question: 'Wählen Sie.',
          multiple: false,
          options: [
            { id: 'e1', text: 'Paul sagte: „Morgen kündige ich.“' },
            { id: 'e2', text: 'Paul sagte, er werde am nächsten Tag kündigen.' },
            { id: 'e3', text: 'Paul schloss die Tür. Morgen würde er kündigen, ganz bestimmt, diesmal wirklich.' },
            { id: 'e4', text: 'Paul kündigte am nächsten Tag.' },
          ],
          solution: ['e3'],
          explanation:
            'Dritte Person und Vergangenheit wie im Erzählbericht, aber die Beteuerung „ganz bestimmt, diesmal wirklich“ ist Pauls eigene Stimme – ohne einleitendes Verb. Die vierte Antwort ist bloßer Bericht.',
        },
        {
          id: 'a4-2-cloze',
          type: 'CLOZE',
          instruction: 'Formen Sie den inneren Monolog in erlebte Rede um: „Ich schaffe das nicht. Wie soll ich das nur erklären?“',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Sie ' },
            { kind: 'GAP', gapId: 'k1', solution: ['schaffte'], hint: 'schaffen', width: 9 },
            { kind: 'TEXT', text: ' das nicht. Wie ' },
            { kind: 'GAP', gapId: 'k2', solution: ['sollte'], hint: 'sollen', width: 7 },
            { kind: 'TEXT', text: ' ' },
            { kind: 'GAP', gapId: 'k3', solution: ['sie'], hint: 'Pronomen', width: 4 },
            { kind: 'TEXT', text: ' das nur erklären?' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – Stilmittel an gemeinfreien Versen.
  {
    order: 3,
    title: 'Stilmittel deuten',
    subtitle: 'Vom Benennen zum Verstehen',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'a4-3-h1', type: 'HEADING', level: 1, text: 'Stilmittel deuten' },
        {
          id: 'a4-3-intro',
          type: 'TEXT',
          text: 'Ein Stilmittel zu benennen ist leicht, es zu deuten die eigentliche Arbeit. „In Vers 3 steht eine Metapher“ ist noch keine Aussage über den Text. Erst der zweite Schritt – was leistet diese Metapher, was eine wörtliche Formulierung nicht leisten würde? – macht aus der Beobachtung eine Interpretation.',
        },
        {
          id: 'a4-3-info-mittel',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Stilmittel an Beispielen',
          text: 'Alle Beispiele stammen aus gemeinfreien Gedichten. Achten Sie darauf, dass viele Stilmittel einfache Operationen sind – vergleichen, vermenschlichen, wiederholen, umstellen – und dass ihre Wirkung immer vom Zusammenhang abhängt.',
          table: {
            headers: ['Stilmittel', 'Beispiel', 'Operation'],
            rows: [
              ['Personifikation', 'Der Abend wiegte schon die Erde, / Und an den Bergen hing die Nacht (Goethe, „Willkommen und Abschied“)', 'Unbelebtes wird menschlich'],
              ['Vergleich (Konjunktiv)', 'Es war, als hätt’ der Himmel / Die Erde still geküsst (Eichendorff)', 'zwei Bereiche verbinden'],
              ['Metapher', 'Sein Blick ist vom Vorübergehn der Stäbe / so müd geworden (Rilke, „Der Panther“)', 'Blick als Wesen, das ermüdet'],
              ['Parallelismus', 'Was dieser heute baut, reißt jener morgen ein (Gryphius, „Es ist alles eitel“)', 'gleich gebaute Satzhälften, hier mit Gegensatz'],
              ['Antithese', 'Wo jetzund Städte stehn, wird eine Wiese sein (Gryphius)', 'Gegensatz'],
              ['Alliteration', 'Wer reitet so spät durch Nacht und Wind? (Goethe, „Erlkönig“)', 'gleicher Anlaut, hier: Klang, Bewegung'],
            ],
          },
        },
        {
          id: 'a4-3-match',
          type: 'MATCHING',
          instruction: 'Ordnen Sie das Stilmittel zu.',
          left: [
            { id: 'l1', text: 'Wo jetzund Städte stehn, wird eine Wiese sein' },
            { id: 'l2', text: 'Es war, als hätt’ der Himmel / Die Erde still geküsst' },
            { id: 'l3', text: 'Die Stadt schläft noch.' },
            { id: 'l4', text: 'Ihm ist, als ob es tausend Stäbe gäbe / und hinter tausend Stäben keine Welt' },
          ],
          right: [
            { id: 'r1', text: 'Antithese' },
            { id: 'r2', text: 'Vergleich im Konjunktiv' },
            { id: 'r3', text: 'Personifikation' },
            { id: 'r4', text: 'Wiederholung und Hyperbel' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'a4-3-info-deuten',
          type: 'INFO',
          variant: 'TIP',
          title: 'Vom Befund zur Deutung',
          text: 'Eine gute Deutung hat drei Teile: den Befund (welches Mittel, wo), das Zitat als Beleg und die Funktion (was bewirkt es im Zusammenhang). Nützliche Verben: „verdeutlichen“, „unterstreichen“, „hervorheben“, „veranschaulichen“, „kontrastieren“.',
          table: {
            headers: ['Schritt', 'Beispiel'],
            rows: [
              ['Befund', 'In Vers 1 und 2 verwendet Rilke eine Metapher:'],
              ['Beleg', 'Der Blick ist „so müd geworden, dass er nichts mehr hält“ (V. 2).'],
              ['Funktion', 'Die Metapher verdeutlicht, dass die Gefangenschaft nicht nur den Körper, sondern die Wahrnehmung selbst zerstört hat.'],
            ],
          },
        },
        {
          id: 'a4-3-choice',
          type: 'CHOICE',
          instruction: 'Wählen Sie die beste Deutung.',
          question: 'Gryphius schreibt im 17. Jahrhundert, nach Jahrzehnten des Dreißigjährigen Krieges: „Wo jetzund Städte stehn, wird eine Wiese sein“. Was leistet die Antithese?',
          multiple: false,
          options: [
            { id: 'q1', text: 'Sie beschreibt eine schöne Landschaft.' },
            { id: 'q2', text: 'Sie stellt das Menschengemachte dem Vergehen gegenüber und macht die Vergänglichkeit alles Irdischen sichtbar.' },
            { id: 'q3', text: 'Sie kündigt an, dass Städte bald modernisiert werden.' },
            { id: 'q4', text: 'Sie ist ein Reim, der den Klang verschönert.' },
          ],
          solution: ['q2'],
          explanation:
            'Das Gedicht „Es ist alles eitel“ kreist um die Vergänglichkeit (lat. vanitas). Die Antithese zwischen Stadt und Wiese zeigt, dass selbst das Dauerhafteste, was Menschen bauen, verschwinden wird.',
        },
        {
          id: 'a4-3-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die Deutung.',
          wordBank: ['Metapher', 'verdeutlicht', 'Personifikation', 'unterstreicht'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'In „Der Wind flüsterte in den Bäumen“ liegt eine ' },
            { kind: 'GAP', gapId: 'p1', solution: ['Personifikation'], width: 16 },
            { kind: 'TEXT', text: ' vor. Sie ' },
            { kind: 'GAP', gapId: 'p2', solution: ['verdeutlicht', 'unterstreicht'], width: 13 },
            { kind: 'TEXT', text: ' die geheimnisvolle Stimmung. Das „Meer aus Lichtern“ ist eine ' },
            { kind: 'GAP', gapId: 'p3', solution: ['Metapher'], width: 9 },
            { kind: 'TEXT', text: ' für die Stadt bei Nacht; sie ' },
            { kind: 'GAP', gapId: 'p4', solution: ['unterstreicht', 'verdeutlicht'], width: 13 },
            { kind: 'TEXT', text: ' ihre Unüberschaubarkeit.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – Epochen als Orientierung.
  {
    order: 4,
    title: 'Texte in ihrer Zeit',
    subtitle: 'Epochen der deutschen Literatur',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'a4-4-h1', type: 'HEADING', level: 1, text: 'Texte in ihrer Zeit' },
        {
          id: 'a4-4-intro',
          type: 'TEXT',
          text: 'Epochen sind keine Schubladen, in die man Texte sortiert, sondern Gespräche, an denen sie teilnehmen. Gryphius’ Vergänglichkeitsgedichte versteht man besser, wenn man weiß, dass sie im Dreißigjährigen Krieg entstanden. Und die Sehnsucht der Romantiker nach Nacht und Natur ist auch eine Antwort auf die Vernunftgläubigkeit der Aufklärung.',
        },
        {
          id: 'a4-4-info-epochen',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'Epochen im Überblick',
          text: 'Die Tabelle ist eine grobe Orientierung. Die Jahreszahlen sind ungefähr, und viele Autoren lassen sich mehr als einer Epoche zuordnen – Goethe etwa dem Sturm und Drang und der Klassik.',
          table: {
            headers: ['Epoche', 'Zeit', 'Kennzeichen', 'Namen'],
            rows: [
              ['Barock', 'ca. 1600–1720', 'Vergänglichkeit, Krieg, Jenseits', 'Gryphius'],
              ['Aufklärung', 'ca. 1720–1790', 'Vernunft, Toleranz, Erziehung', 'Lessing'],
              ['Sturm und Drang', 'ca. 1765–1785', 'Gefühl, Genie, Auflehnung', 'der junge Goethe, der junge Schiller'],
              ['Klassik', 'ca. 1786–1805', 'Harmonie, Humanität, Maß', 'Goethe, Schiller'],
              ['Romantik', 'ca. 1795–1840', 'Sehnsucht, Nacht, Natur, Märchen', 'Eichendorff, Novalis'],
              ['Realismus', 'ca. 1850–1890', 'Alltag, Gesellschaft, Zurückhaltung', 'Fontane, Storm'],
              ['Moderne', 'ca. 1890–1930', 'Großstadt, Entfremdung, Krise', 'Rilke, Kafka, Thomas Mann'],
            ],
          },
        },
        {
          id: 'a4-4-match',
          type: 'MATCHING',
          instruction: 'Welcher Epoche entspricht das Merkmal?',
          left: [
            { id: 'l1', text: 'Ein junger Held lehnt sich leidenschaftlich gegen die Ordnung seines Vaters auf.' },
            { id: 'l2', text: 'Ein Wanderer sehnt sich nachts im Mondlicht nach einer fernen Heimat.' },
            { id: 'l3', text: 'Ein Theaterstück wirbt für religiöse Toleranz und die Kraft der Vernunft.' },
            { id: 'l4', text: 'Ein Angestellter fühlt sich in der Großstadt fremd und austauschbar.' },
          ],
          right: [
            { id: 'r1', text: 'Sturm und Drang' },
            { id: 'r2', text: 'Romantik' },
            { id: 'r3', text: 'Aufklärung' },
            { id: 'r4', text: 'Moderne' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'a4-4-ordering',
          type: 'ORDERING',
          instruction: 'Bringen Sie die Epochen in die zeitliche Reihenfolge.',
          items: [
            { id: 'o1', text: 'Barock' },
            { id: 'o2', text: 'Aufklärung' },
            { id: 'o3', text: 'Klassik' },
            { id: 'o4', text: 'Romantik' },
            { id: 'o5', text: 'Realismus' },
            { id: 'o6', text: 'Moderne' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5', 'o6'],
        },
        {
          id: 'a4-4-choice',
          type: 'CHOICE',
          instruction: 'Wählen Sie die passende Einordnung.',
          question: 'Warum wirkt der nüchterne erste Satz der „Verwandlung“ (1915) typisch für die Moderne?',
          multiple: false,
          options: [
            { id: 'k1', text: 'Weil er eine Naturszene romantisch verklärt.' },
            { id: 'k2', text: 'Weil er das Unheimliche sachlich wie einen Verwaltungsvorgang berichtet und so die Entfremdung des modernen Menschen spiegelt.' },
            { id: 'k3', text: 'Weil er für Vernunft und Toleranz wirbt.' },
            { id: 'k4', text: 'Weil er in Versen geschrieben ist.' },
          ],
          solution: ['k2'],
          explanation:
            'Die Moderne erzählt von Entfremdung und Krise des Individuums. Kafkas sachlicher Ton macht das Ungeheuerliche beklemmend alltäglich – Gregor sorgt sich zuerst darum, den Zug zur Arbeit zu verpassen.',
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – eine Interpretation schreiben.
  {
    order: 5,
    title: 'Eine Interpretation schreiben',
    subtitle: 'Aufbau und Formulierungen',
    estimatedMinutes: 34,
    content: {
      version: v,
      blocks: [
        { id: 'a4-5-h1', type: 'HEADING', level: 1, text: 'Eine Interpretation schreiben' },
        {
          id: 'a4-5-intro',
          type: 'TEXT',
          text: 'Eine Interpretation ist keine Nacherzählung und keine Meinung, sondern eine begründete Deutung. Sie stellt eine Deutungshypothese auf und belegt sie Schritt für Schritt am Text. Geschrieben wird im Präsens, zitiert mit Versangabe, und jede Beobachtung wird auf die Hypothese zurückbezogen.',
        },
        {
          id: 'a4-5-info-aufbau',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Aufbau',
          text: 'Die Einleitung nennt Autor, Titel, Textsorte, Entstehungszeit und das Thema und endet mit der Deutungshypothese. Der Hauptteil analysiert Aufbau, Sprache und Stilmittel im Hinblick auf die Hypothese. Der Schluss fasst zusammen, bestätigt oder modifiziert die Hypothese und kann den Text einordnen.',
          table: {
            headers: ['Teil', 'Formulierungshilfe'],
            rows: [
              ['Einleitung', 'Das Gedicht „…“ von … aus dem Jahr … thematisiert …'],
              ['Hypothese', 'Es liegt die Deutung nahe, dass …'],
              ['Hauptteil', 'Auffällig ist … / Dies wird durch … unterstrichen (V. 3).'],
              ['Rückbezug', 'Damit bestätigt sich, dass …'],
              ['Schluss', 'Insgesamt zeigt sich, dass …'],
            ],
          },
        },
        {
          id: 'a4-5-ordering',
          type: 'ORDERING',
          instruction: 'Bringen Sie die Sätze einer kurzen Interpretation von Rilkes „Der Panther“ in die richtige Reihenfolge.',
          items: [
            { id: 'o1', text: 'Das Gedicht „Der Panther“ von Rainer Maria Rilke (1902) beschreibt einen Panther im Käfig des Pariser Zoos.' },
            { id: 'o2', text: 'Es liegt die Deutung nahe, dass es um den Verlust der Welt durch Gefangenschaft geht.' },
            { id: 'o3', text: 'Auffällig ist schon im ersten Vers die Metapher des müden Blicks, der „nichts mehr hält“.' },
            { id: 'o4', text: 'Die Wiederholung „tausend Stäbe“ unterstreicht, dass die Stäbe die ganze Welt ersetzt haben.' },
            { id: 'o5', text: 'Insgesamt zeigt sich, dass das Gedicht die Gefangenschaft von innen, als Zerstörung der Wahrnehmung, darstellt.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5'],
        },
        {
          id: 'a4-5-choice',
          type: 'CHOICE',
          instruction: 'Welcher Satz entspricht den Konventionen einer Interpretation?',
          question: 'Wählen Sie.',
          multiple: false,
          options: [
            { id: 's1', text: 'Mir gefällt das Gedicht, weil Tiere mir leidtun.' },
            { id: 's2', text: 'Rilke war ein österreichischer Dichter und lebte viele Jahre in Paris.' },
            { id: 's3', text: 'Die Wiederholung von „tausend“ (V. 3–4) hebt hervor, dass für den Panther nur noch die Stäbe existieren.' },
            { id: 's4', text: 'In dem Gedicht geht es um einen Panther, der im Käfig ist.' },
          ],
          solution: ['s3'],
          explanation:
            'Nur der dritte Satz verbindet Befund, Beleg mit Versangabe und Funktion. Die anderen sind Meinung, Biografie oder Inhaltsangabe.',
        },
        {
          id: 'a4-5-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die Zusammenfassung des Kapitels.',
          wordBank: ['Thema', 'personale', 'erlebte', 'Funktion', 'Epochen', 'Hypothese'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Das ' },
            { kind: 'GAP', gapId: 'z1', solution: ['Thema'], width: 6 },
            { kind: 'TEXT', text: ' wird abstrakt formuliert. Der ' },
            { kind: 'GAP', gapId: 'z2', solution: ['personale'], width: 10 },
            { kind: 'TEXT', text: ' Erzähler sieht die Welt durch die Augen einer Figur; die ' },
            { kind: 'GAP', gapId: 'z3', solution: ['erlebte'], width: 8 },
            { kind: 'TEXT', text: ' Rede gibt ihre Gedanken ohne „dachte sie“ wieder. Bei jedem Stilmittel fragt man nach seiner ' },
            { kind: 'GAP', gapId: 'z4', solution: ['Funktion'], width: 9 },
            { kind: 'TEXT', text: '. ' },
            { kind: 'GAP', gapId: 'z5', solution: ['Epochen'], width: 8 },
            { kind: 'TEXT', text: ' sind Gespräche, keine Schubladen. Und eine Interpretation beginnt mit einer ' },
            { kind: 'GAP', gapId: 'z6', solution: ['Hypothese'], width: 10 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'a4-5-writing',
          type: 'WRITING',
          instruction: 'Schreiben Sie eine Interpretation.',
          prompt:
            'Interpretieren Sie die erste Strophe von Joseph von Eichendorffs „Mondnacht“ (1837): „Es war, als hätt’ der Himmel / Die Erde still geküsst, / Dass sie im Blütenschimmer / Von ihm nun träumen müsst’.“ Schreiben Sie 180 bis 260 Wörter mit Einleitung und Deutungshypothese, der Analyse von mindestens zwei Stilmitteln mit Versangabe und einem Schluss, der das Gedicht der Romantik zuordnet. Schreiben Sie im Präsens.',
          minWords: 180,
          maxWords: 270,
          aiFeedback: true,
          sampleAnswer:
            'Das Gedicht „Mondnacht“ von Joseph von Eichendorff erschien 1837 und gehört zu den bekanntesten Gedichten der Romantik. Die erste Strophe beschreibt eine Nacht, in der Himmel und Erde wie Liebende erscheinen. Es liegt die Deutung nahe, dass die Natur hier zum Bild einer Sehnsucht nach Einheit wird – zwischen Himmel und Erde, aber auch zwischen dem Irdischen und dem Göttlichen.\n\nAuffällig ist zunächst die Personifikation: Der Himmel „küsst“ die Erde (V. 2), und die Erde „träumt“ von ihm (V. 4). Die Natur erscheint als beseeltes Wesen, das fühlt und begehrt. Damit verwandelt sich eine Landschaftsbeschreibung in eine Liebesszene.\n\nZugleich wird diese Szene sprachlich in der Schwebe gehalten. Der Vergleich im Konjunktiv – „Es war, als hätt’ der Himmel“ (V. 1) – behauptet nicht, dass es so ist, sondern nur, dass es so scheint. Auch „müsst’“ (V. 4) steht im Konjunktiv. Die Einheit von Himmel und Erde ist also keine Tatsache, sondern eine Ahnung, ein Traum.\n\nDas Adjektiv „still“ (V. 2) und der „Blütenschimmer“ (V. 3) verstärken die zarte, fast unwirkliche Stimmung. Nichts ist laut oder eindeutig; alles schimmert und schwebt.\n\nInsgesamt zeigt sich, dass die Strophe typische Motive der Romantik vereint: die Nacht, die beseelte Natur und die Sehnsucht nach einer Einheit, die nur im Traum erreichbar scheint. Gerade der Konjunktiv macht deutlich, dass diese Einheit ersehnt, aber nicht besessen wird.',
        },
      ],
    },
  },
];
