import type { UnitSeed } from './chapter-beginner-1';

/**
 * Advanced, Kapitel 12: „Fachsprache und Vermittlung“ (C2, Kapitel 6)
 *
 * Fünf Seiten. Das letzte Kapitel des Lehrwerks verlangt, was am Ende des
 * Lernwegs steht: die Fachsprache so gut zu beherrschen, dass man sie
 * weglassen kann. Allgemeinverständlich schreiben heißt nicht vereinfachen,
 * bis es falsch wird, sondern auswählen, was trägt.
 *
 * Aufbau: Seite 1 Fach- und Alltagssprache, Seite 2 Fachbegriffe erklären,
 * Seite 3 Vergleiche und ihre Grenzen, Seite 4 Zahlen und Unsicherheit für
 * Laien, Seite 5 komplexe Texte zusammenfassen – und damit ein Rückblick.
 *
 * Die Sachverhalte sind vereinfacht, aber korrekt wiedergegeben. Sämtliche
 * Texte sind eigenständig verfasst.
 */
const v = 1;

export const ADVANCED_12_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Fachsprache und Alltagssprache.
  {
    order: 1,
    title: 'Für wen schreibe ich?',
    subtitle: 'Fach- und Alltagssprache',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'a12-1-h1', type: 'HEADING', level: 1, text: 'Für wen schreibe ich?' },
        {
          id: 'a12-1-intro',
          type: 'TEXT',
          text: '„Der Patient zeigt eine ausgeprägte Hypertonie mit rezidivierenden Cephalgien.“ Für eine Ärztin ist das ein präziser Satz. Für den Patienten ist er ein Rätsel: Er hat stark erhöhten Blutdruck und immer wieder Kopfschmerzen. Fachsprache ist nicht schlecht – sie ist genau und kurz. Das Problem entsteht erst, wenn sie Menschen erreicht, die sie nicht teilen. Wer Wissen vermittelt, muss deshalb zuerst fragen: Was weiß mein Publikum schon?',
        },
        {
          id: 'a12-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: Wissen vermitteln',
          items: [
            {
              term: 'Fachbegriff',
              article: 'der',
              plural: 'die Fachbegriffe',
              translations: { en: 'technical term', es: 'el tecnicismo', fr: 'le terme technique', it: 'il termine tecnico' },
            },
            {
              term: 'Laie',
              article: 'der',
              plural: 'die Laien',
              translations: { en: 'layperson', es: 'el lego', fr: 'le profane', it: 'il profano' },
            },
            {
              term: 'Zielgruppe',
              article: 'die',
              translations: { en: 'target audience', es: 'el público objetivo', fr: 'le public cible', it: 'il pubblico di riferimento' },
            },
            {
              term: 'veranschaulichen',
              translations: { en: 'to illustrate', es: 'ilustrar', fr: 'illustrer', it: 'illustrare' },
            },
            {
              term: 'vereinfachen',
              translations: { en: 'to simplify', es: 'simplificar', fr: 'simplifier', it: 'semplificare' },
            },
            {
              term: 'verfälschen',
              translations: { en: 'to distort, to falsify', es: 'falsear', fr: 'fausser', it: 'falsare' },
            },
            {
              term: 'allgemeinverständlich',
              translations: { en: 'easy to understand for everyone', es: 'comprensible para todos', fr: 'accessible à tous', it: 'comprensibile a tutti' },
            },
            {
              term: 'Vorwissen',
              article: 'das',
              translations: { en: 'prior knowledge', es: 'los conocimientos previos', fr: 'les connaissances préalables', it: 'le conoscenze pregresse' },
            },
            {
              term: 'Wissenschaftskommunikation',
              article: 'die',
              translations: { en: 'science communication', es: 'la divulgación científica', fr: 'la médiation scientifique', it: 'la divulgazione scientifica' },
            },
          ],
        },
        {
          id: 'a12-1-info-merkmale',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Merkmale der Fachsprache',
          text: 'Fachsprache erkennt man an Fremdwörtern und Fachtermini, an langen Komposita, am Nominalstil und am häufigen Passiv. Alle diese Merkmale dienen der Genauigkeit unter Fachleuten. Für Laien lassen sie sich übersetzen – ohne dass der Inhalt falsch wird.',
          table: {
            headers: ['Fachsprache', 'Alltagssprache'],
            rows: [
              ['Hypertonie', 'Bluthochdruck'],
              ['rezidivierend', 'immer wiederkehrend'],
              ['Niederschlagsmenge', 'wie viel es regnet'],
              ['Die Einnahme erfolgt postprandial.', 'Nehmen Sie das Medikament nach dem Essen.'],
              ['Wärmedämmung der Gebäudehülle', 'das Haus gegen Kälte isolieren'],
            ],
          },
        },
        {
          id: 'a12-1-match',
          type: 'MATCHING',
          instruction: 'Übersetzen Sie in Alltagssprache.',
          left: [
            { id: 'l1', text: 'die Einnahme erfolgt nüchtern' },
            { id: 'l2', text: 'präventiv' },
            { id: 'l3', text: 'Kontraindikation' },
            { id: 'l4', text: 'akut' },
          ],
          right: [
            { id: 'r1', text: 'vor dem Frühstück einnehmen' },
            { id: 'r2', text: 'vorbeugend' },
            { id: 'r3', text: 'Grund, ein Mittel nicht zu nehmen' },
            { id: 'r4', text: 'plötzlich und heftig' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'a12-1-choice',
          type: 'CHOICE',
          instruction: 'Welche Erklärung passt für Laien?',
          question: 'Wie erklärt man einem Patienten „Die Einnahme erfolgt postprandial“?',
          multiple: false,
          options: [
            { id: 'c1', text: 'Die Applikation ist nach der Nahrungsaufnahme indiziert.' },
            { id: 'c2', text: 'Nehmen Sie die Tablette nach dem Essen.' },
            { id: 'c3', text: 'Postprandial heißt postprandial.' },
            { id: 'c4', text: 'Essen Sie die Tablette.' },
          ],
          solution: ['c2'],
          explanation:
            'Die zweite Erklärung übersetzt vollständig und richtig und spricht den Patienten direkt an. Die vierte ist zwar einfach, aber falsch.',
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – Fachbegriffe erklären.
  {
    order: 2,
    title: 'Was man unter … versteht',
    subtitle: 'Fachbegriffe erklären',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'a12-2-h1', type: 'HEADING', level: 1, text: 'Was man unter … versteht' },
        {
          id: 'a12-2-intro',
          type: 'TEXT',
          text: 'Allgemeinverständlich schreiben heißt nicht, alle Fachbegriffe zu streichen. Manche braucht das Publikum, weil es ihnen in den Nachrichten wieder begegnen wird, zum Beispiel „Inflation“ oder „Immunsystem“. Die Frage ist, wie man sie einführt, ohne den Lesefluss mit Lexikondefinitionen zu stören.',
        },
        {
          id: 'a12-2-info-techniken',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Vier Techniken',
          text: 'Die Apposition erklärt im Nebenbei, zwischen Kommas. Die Umschreibung mit „also“, „das heißt“ oder „mit anderen Worten“ liefert die Erklärung nach. Die Funktionserklärung sagt, wozu etwas da ist, statt was es ist. Am elegantesten ist oft die Umkehrung: erst die Sache erklären, dann den Namen nennen – „… was Fachleute als … bezeichnen“.',
          table: {
            headers: ['Technik', 'Beispiel'],
            rows: [
              ['Apposition', 'Das Immunsystem, die körpereigene Abwehr, erkennt Erreger.'],
              ['Umschreibung', 'Die Preise steigen, es herrscht also Inflation.'],
              ['Funktion', 'Insulin sorgt dafür, dass Zucker aus dem Blut in die Zellen gelangt.'],
              ['Umkehrung', 'Das Geld verliert an Wert – was Ökonomen als Inflation bezeichnen.'],
            ],
          },
        },
        {
          id: 'a12-2-match',
          type: 'MATCHING',
          instruction: 'Welche Technik wird verwendet?',
          left: [
            { id: 'l1', text: 'Die Mitochondrien, die Kraftwerke der Zelle, liefern Energie.' },
            { id: 'l2', text: 'Der Körper hat zu wenig Eisen, das heißt, er ist anämisch.' },
            { id: 'l3', text: 'Der Server sorgt dafür, dass alle Rechner auf dieselben Daten zugreifen können.' },
            { id: 'l4', text: 'Manche Bakterien überleben Antibiotika – was Mediziner Resistenz nennen.' },
          ],
          right: [
            { id: 'r1', text: 'Apposition' },
            { id: 'r2', text: 'Umschreibung' },
            { id: 'r3', text: 'Funktionserklärung' },
            { id: 'r4', text: 'Umkehrung' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'a12-2-choice',
          type: 'CHOICE',
          instruction: 'Welche Erklärung ist am geschicktesten für eine Zeitung?',
          question: 'Es geht um den Begriff „Epigenetik“.',
          multiple: false,
          options: [
            { id: 'e1', text: 'Epigenetik untersucht vererbbare Veränderungen der Genexpression ohne Änderung der DNA-Sequenz.' },
            { id: 'e2', text: 'Eineiige Zwillinge haben dieselben Gene, und doch werden sie mit den Jahren verschieden, weil ihre Lebensweise beeinflusst, welche Gene aktiv sind. Mit diesem Phänomen beschäftigt sich die Epigenetik.' },
            { id: 'e3', text: 'Epigenetik ist ein spannendes Forschungsgebiet.' },
            { id: 'e4', text: 'Epigenetik kommt aus dem Griechischen.' },
          ],
          solution: ['e2'],
          explanation:
            'Die zweite Erklärung beginnt mit einem anschaulichen Fall und nennt den Fachbegriff erst am Schluss – die Technik der Umkehrung. Die erste ist korrekt, aber nur für Fachleute verständlich.',
        },
        {
          id: 'a12-2-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die Erklärungen.',
          wordBank: ['das heißt', 'sorgt dafür', 'bezeichnen', 'die'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Die Leber filtert das Blut, ' },
            { kind: 'GAP', gapId: 't1', solution: ['das heißt', 'also'], width: 10 },
            { kind: 'TEXT', text: ', sie entfernt Giftstoffe. Die Galle ' },
            { kind: 'GAP', gapId: 't2', solution: ['sorgt dafür'], width: 12 },
            { kind: 'TEXT', text: ', dass Fett verdaut wird. Wenn die Leber versagt, spricht man von dem, was Ärzte als Leberinsuffizienz ' },
            { kind: 'GAP', gapId: 't3', solution: ['bezeichnen'], width: 11 },
            { kind: 'TEXT', text: '. Die Bauchspeicheldrüse, ' },
            { kind: 'GAP', gapId: 't4', solution: ['die'], width: 4 },
            { kind: 'TEXT', text: ' Insulin herstellt, liegt hinter dem Magen.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – Vergleiche und ihre Grenzen.
  {
    order: 3,
    title: 'Stellen Sie sich vor …',
    subtitle: 'Vergleiche und ihre Grenzen',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'a12-3-h1', type: 'HEADING', level: 1, text: 'Stellen Sie sich vor …' },
        {
          id: 'a12-3-intro',
          type: 'TEXT',
          text: 'Der Vergleich ist das stärkste Werkzeug der Wissensvermittlung und das gefährlichste. Das Herz als Pumpe, die DNA als Bauplan, das Internet als Straßennetz: Ein guter Vergleich überträgt eine ganze Struktur auf einmal. Ein schlecht gewählter überträgt auch das, was nicht passt.',
        },
        {
          id: 'a12-3-info-mittel',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Sprachliche Mittel für Vergleiche',
          text: '„wie“ und „ähnlich wie“ vergleichen direkt. „Stellen Sie sich vor, …“ lädt den Leser ein, das Bild selbst zu entwerfen. „Wenn … wäre, dann …“ baut einen Größenvergleich im Konjunktiv II. „So wie …, so …“ zieht eine ausdrückliche Parallele.',
          table: {
            headers: ['Mittel', 'Beispiel'],
            rows: [
              ['wie / ähnlich wie', 'Das Herz arbeitet wie eine Pumpe.'],
              ['Stellen Sie sich vor, …', 'Stellen Sie sich vor, jede Zelle ist eine kleine Fabrik.'],
              ['wenn … wäre, …', 'Wenn die Erde ein Apfel wäre, wäre die Atmosphäre dünner als die Schale.'],
              ['so wie …, so …', 'So wie ein Schlüssel nur in sein Schloss passt, so erkennt ein Rezeptor nur ein bestimmtes Molekül.'],
            ],
          },
        },
        {
          id: 'a12-3-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die Vergleiche mit der richtigen Form.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Wenn die Geschichte der Erde ein einziger Tag ' },
            { kind: 'GAP', gapId: 'k1', solution: ['wäre'], hint: 'sein', width: 5 },
            { kind: 'TEXT', text: ', ' },
            { kind: 'GAP', gapId: 'k2', solution: ['gäbe'], hint: 'geben', width: 5 },
            { kind: 'TEXT', text: ' es den Menschen erst seit wenigen Sekunden vor Mitternacht. ' },
            { kind: 'GAP', gapId: 'k3', solution: ['Stellen'], hint: 'sich vorstellen, Imperativ', width: 8 },
            { kind: 'TEXT', text: ' Sie sich vor, ein Sandkorn ' },
            { kind: 'GAP', gapId: 'k4', solution: ['wäre'], hint: 'sein', width: 5 },
            { kind: 'TEXT', text: ' so groß wie ein Fußballstadion.' },
          ],
        },
        {
          id: 'a12-3-info-grenzen',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Die Grenze des Vergleichs benennen',
          text: 'Jeder Vergleich hinkt irgendwo, und verantwortungsvolle Vermittlung sagt, wo. Die DNA ähnelt einem Bauplan – aber anders als ein Bauplan wird sie je nach Umwelt unterschiedlich „gelesen“. Ein einziger Satz genügt: „Der Vergleich hinkt allerdings an einer Stelle: …“ oder „Anders als ein … ist …“.',
        },
        {
          id: 'a12-3-choice',
          type: 'CHOICE',
          instruction: 'Wo hinkt der Vergleich?',
          question: 'Das Immunsystem wird oft mit einer Armee verglichen, die den Körper gegen Feinde verteidigt. Welche falsche Vorstellung kann dieser Vergleich wecken?',
          multiple: false,
          options: [
            { id: 'v1', text: 'Dass das Immunsystem den Körper schützt.' },
            { id: 'v2', text: 'Dass es aus verschiedenen spezialisierten Zellen besteht.' },
            { id: 'v3', text: 'Dass alles Fremde ein Feind ist – dabei lebt der Körper mit Billionen nützlicher Bakterien zusammen.' },
            { id: 'v4', text: 'Dass es auf Eindringlinge reagiert.' },
          ],
          solution: ['v3'],
          explanation:
            'Das Bild der Armee erklärt die Abwehr gut, verschweigt aber, dass das Immunsystem auch dulden und regulieren muss. Allergien sind gerade ein Beispiel für zu viel „Krieg“.',
        },
        {
          id: 'a12-3-match',
          type: 'MATCHING',
          instruction: 'Welcher Vergleich passt?',
          left: [
            { id: 'l1', text: 'Arbeitsspeicher eines Computers' },
            { id: 'l2', text: 'Ausdehnung des Universums' },
            { id: 'l3', text: 'Impfung' },
            { id: 'l4', text: 'Treibhauseffekt' },
          ],
          right: [
            { id: 'r1', text: 'ein Schreibtisch: je größer, desto mehr kann man gleichzeitig bearbeiten' },
            { id: 'r2', text: 'ein Hefeteig mit Rosinen, die sich beim Aufgehen alle voneinander entfernen' },
            { id: 'r3', text: 'ein Fahndungsfoto, mit dem die Abwehr den Täter schon kennt' },
            { id: 'r4', text: 'eine Decke, die die Wärme zurückhält' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – Zahlen und Unsicherheit für Laien.
  {
    order: 4,
    title: 'Drei von tausend',
    subtitle: 'Zahlen und Unsicherheit vermitteln',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'a12-4-h1', type: 'HEADING', level: 1, text: 'Drei von tausend' },
        {
          id: 'a12-4-intro',
          type: 'TEXT',
          text: '„Das Risiko steigt um 50 Prozent!“ Das klingt alarmierend. Wenn aber das Risiko von zwei auf drei von 10 000 Menschen steigt, ist es immer noch sehr klein. Große und kleine Zahlen sind für die meisten Menschen schwer vorstellbar. Wer vermittelt, übersetzt sie in Größenordnungen, die man sich vorstellen kann – und sagt ehrlich, wie sicher sie sind.',
        },
        {
          id: 'a12-4-info-zahlen',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Zahlen verständlich machen',
          text: 'Natürliche Häufigkeiten („3 von 1000“) sind leichter zu verstehen als Prozente („0,3 %“). Relative Angaben („doppelt so hoch“) müssen immer mit absoluten verbunden werden. Große Mengen werden durch Vergleiche greifbar.',
          table: {
            headers: ['schwer verständlich', 'verständlich'],
            rows: [
              ['0,03 %', '3 von 10 000'],
              ['Das Risiko steigt um 50 %.', 'Das Risiko steigt von 2 auf 3 Fälle pro 10 000 Menschen.'],
              ['2,5 Millionen Liter', 'etwa ein olympisches Schwimmbecken'],
              ['Zunahme um 400 %', 'fünfmal so viel wie vorher'],
            ],
          },
        },
        {
          id: 'a12-4-choice',
          type: 'CHOICE',
          instruction: 'Welche Schlagzeile informiert am ehrlichsten?',
          question: 'Ein Medikament erhöht das Risiko einer Nebenwirkung von 2 auf 3 Fälle pro 10 000 Patienten.',
          multiple: false,
          options: [
            { id: 'z1', text: 'Medikament erhöht Risiko um 50 Prozent!' },
            { id: 'z2', text: 'Medikament völlig ungefährlich.' },
            { id: 'z3', text: 'Nebenwirkung etwas häufiger: 3 statt 2 Fälle pro 10 000 Patienten.' },
            { id: 'z4', text: 'Risiko steigt um 0,01 Prozentpunkte.' },
          ],
          solution: ['z3'],
          explanation:
            'Die dritte Schlagzeile nennt die absoluten Zahlen in natürlichen Häufigkeiten. Die 50 % sind rechnerisch richtig, aber ohne Ausgangswert irreführend; die vierte ist korrekt, aber kaum vorstellbar.',
        },
        {
          id: 'a12-4-info-unsicherheit',
          type: 'INFO',
          variant: 'TIP',
          title: 'Unsicherheit ehrlich kommunizieren',
          text: 'Wer Unsicherheit verschweigt, verliert Vertrauen, sobald sich die Datenlage ändert. Wer nur Unsicherheit betont, lähmt. Unterscheiden Sie klar zwischen dem, was gesichert ist, was wahrscheinlich ist und was noch unbekannt ist.',
          table: {
            headers: ['Grad', 'Formulierung'],
            rows: [
              ['gesichert', 'Heute wissen wir, dass …'],
              ['wahrscheinlich', 'Vieles spricht dafür, dass …'],
              ['vorläufig', 'Erste Daten deuten darauf hin, dass …; bestätigt ist das noch nicht.'],
              ['unbekannt', 'Noch weiß niemand, ob …'],
            ],
          },
        },
        {
          id: 'a12-4-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie den Text.',
          wordBank: ['wissen', 'spricht', 'deuten', 'niemand', 'von'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Heute ' },
            { kind: 'GAP', gapId: 'u1', solution: ['wissen'], width: 7 },
            { kind: 'TEXT', text: ' wir, dass Bewegung das Herz schützt. Vieles ' },
            { kind: 'GAP', gapId: 'u2', solution: ['spricht'], width: 8 },
            { kind: 'TEXT', text: ' dafür, dass schon 30 Minuten täglich genügen. Erste Studien ' },
            { kind: 'GAP', gapId: 'u3', solution: ['deuten'], width: 7 },
            { kind: 'TEXT', text: ' darauf hin, dass auch das Gedächtnis profitiert. Noch weiß ' },
            { kind: 'GAP', gapId: 'u4', solution: ['niemand'], width: 8 },
            { kind: 'TEXT', text: ', warum. Etwa 3 ' },
            { kind: 'GAP', gapId: 'u5', solution: ['von'], width: 4 },
            { kind: 'TEXT', text: ' 10 Erwachsenen bewegen sich zu wenig.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – komplexe Texte zusammenfassen; Abschluss des Lehrwerks.
  {
    order: 5,
    title: 'Weglassen, was nicht trägt',
    subtitle: 'Komplexes souverän zusammenfassen',
    estimatedMinutes: 36,
    content: {
      version: v,
      blocks: [
        { id: 'a12-5-h1', type: 'HEADING', level: 1, text: 'Weglassen, was nicht trägt' },
        {
          id: 'a12-5-intro',
          type: 'TEXT',
          text: 'Eine gute populärwissenschaftliche Zusammenfassung ist keine verkleinerte Kopie des Originals, in der jeder Abschnitt seinen Anteil bekommt. Sie wählt aus: einen Kerngedanken, die zwei, drei Punkte, die ihn tragen, und nichts weiter. Was fehlt, ist nicht verloren – es gehört in einen anderen Text. Der Test ist einfach: Kann der Leser danach einem Freund erklären, worum es geht?',
        },
        {
          id: 'a12-5-info-aufbau',
          type: 'INFO',
          variant: 'TIP',
          title: 'Der Aufbau eines populärwissenschaftlichen Textes',
          text: 'Viele gelungene Texte folgen einem ähnlichen Bogen. Sie beginnen bei der Erfahrung des Lesers, stellen eine Frage, erklären den Mechanismus mit einem Vergleich, konkretisieren ihn mit einer Zahl, nennen eine offene Frage und kehren am Ende zur Alltagserfahrung zurück.',
          table: {
            headers: ['Schritt', 'Beispiel (Thema: Schlaf)'],
            rows: [
              ['Einstieg', 'Warum vergessen wir nach einer kurzen Nacht, wo der Schlüssel liegt?'],
              ['Frage', 'Was tut das Gehirn, während wir schlafen?'],
              ['Mechanismus + Vergleich', 'Im Schlaf sortiert es das Erlebte, wie jemand, der abends seinen Schreibtisch aufräumt.'],
              ['Zahl', 'Wer weniger als sechs Stunden schläft, erinnert sich schlechter an Gelerntes.'],
              ['offene Frage', 'Wie das Gehirn entscheidet, was es behält, ist noch nicht ganz geklärt.'],
              ['Schluss', 'Vielleicht fehlt beim nächsten Schlüsselsuchen also nicht Gedächtnis, sondern Schlaf.'],
            ],
          },
        },
        {
          id: 'a12-5-ordering',
          type: 'ORDERING',
          instruction: 'Bringen Sie den kurzen populärwissenschaftlichen Text in eine sinnvolle Reihenfolge.',
          items: [
            { id: 'o1', text: 'Haben Sie sich schon einmal gefragt, warum Meerwasser salzig ist, Flusswasser aber nicht?' },
            { id: 'o2', text: 'Regen löst winzige Mengen Salz aus dem Gestein, und Flüsse tragen es ins Meer.' },
            { id: 'o3', text: 'Dort verdunstet das Wasser, das Salz aber bleibt zurück – wie der Rand in einem Kochtopf.' },
            { id: 'o4', text: 'Über Millionen Jahre hat sich so angesammelt, dass heute in jedem Liter Meerwasser etwa 35 Gramm Salz stecken.' },
            { id: 'o5', text: 'Auch Flusswasser ist also leicht salzig – nur so wenig, dass wir es nicht schmecken.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5'],
        },
        {
          id: 'a12-5-choice',
          type: 'CHOICE',
          instruction: 'Welche Aussagen fassen das Kapitel richtig zusammen? (Mehrfachauswahl)',
          question: 'Wählen Sie alle zutreffenden Aussagen.',
          multiple: true,
          options: [
            { id: 'y1', text: 'Vereinfachen ist erlaubt, solange der Leser eine richtige Vorstellung behält.' },
            { id: 'y2', text: 'Ein guter Vergleich braucht keine Einschränkung.' },
            { id: 'y3', text: '„3 von 10 000“ versteht man besser als „0,03 %“.' },
            { id: 'y4', text: 'Den Fachbegriff erst nach der Erklärung zu nennen, erleichtert das Verständnis.' },
            { id: 'y5', text: 'Eine gute Zusammenfassung gibt jedem Abschnitt des Originals gleich viel Raum.' },
          ],
          solution: ['y1', 'y3', 'y4'],
          explanation:
            'Jeder Vergleich hinkt irgendwo, und das sollte man sagen. Und eine gute Zusammenfassung wählt aus, statt proportional zu kürzen.',
        },
        {
          id: 'a12-5-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die Zusammenfassung des Kapitels.',
          wordBank: ['Zielgruppe', 'verfälschen', 'Umkehrung', 'hinkt', 'Häufigkeiten', 'auswählen'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Wer vermittelt, fragt zuerst nach der ' },
            { kind: 'GAP', gapId: 'z1', solution: ['Zielgruppe'], width: 11 },
            { kind: 'TEXT', text: '. Vereinfachen darf man, ' },
            { kind: 'GAP', gapId: 'z2', solution: ['verfälschen'], width: 12 },
            { kind: 'TEXT', text: ' nicht. Erst die Sache, dann der Begriff: Das ist die Technik der ' },
            { kind: 'GAP', gapId: 'z3', solution: ['Umkehrung'], width: 10 },
            { kind: 'TEXT', text: '. Jeder Vergleich ' },
            { kind: 'GAP', gapId: 'z4', solution: ['hinkt'], width: 6 },
            { kind: 'TEXT', text: ' irgendwo. Natürliche ' },
            { kind: 'GAP', gapId: 'z5', solution: ['Häufigkeiten'], width: 13 },
            { kind: 'TEXT', text: ' sind verständlicher als Prozente. Und zusammenfassen heißt ' },
            { kind: 'GAP', gapId: 'z6', solution: ['auswählen'], width: 10 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'a12-5-writing',
          type: 'WRITING',
          instruction: 'Schreiben Sie einen populärwissenschaftlichen Text.',
          prompt:
            'Wählen Sie ein Thema aus Ihrem Beruf, Studium oder Hobby, das Sie gut kennen, und schreiben Sie einen Text für die Wissensseite einer Tageszeitung (220–300 Wörter). Folgen Sie dem Bogen dieser Seite: Einstieg, Frage, Mechanismus mit Vergleich (und seiner Grenze), eine verständlich gemachte Zahl, eine offene Frage und ein Schluss, der zum Anfang zurückkehrt. Führen Sie mindestens einen Fachbegriff mit einer der Techniken von Seite 2 ein.',
          minWords: 220,
          maxWords: 310,
          aiFeedback: true,
          sampleAnswer:
            'Warum ist altes Brot hart?\n\nWir alle kennen es: Das Brot, das gestern noch knusprig und weich war, ist heute zäh und trocken. Dabei hat es gar nicht unbedingt Wasser verloren – auch in einer luftdichten Tüte wird es hart. Was passiert da eigentlich?\n\nDer Grund liegt in der Stärke, dem Hauptbestandteil des Mehls. Beim Backen lösen Hitze und Wasser die geordneten Stärkemoleküle auf. Sie liegen dann locker durcheinander, ähnlich wie ein aufgelöstes Wollknäuel. Kühlt das Brot ab, ordnen sich die Moleküle langsam wieder zu festen Strukturen und drücken dabei Wasser heraus – ein Vorgang, den Lebensmittelchemiker als Retrogradation bezeichnen. Der Vergleich mit dem Wollknäuel hinkt allerdings an einer Stelle: Wolle gibt beim Aufwickeln kein Wasser ab, Stärke schon. Deshalb wird die Kruste weich, während die Krume hart wird.\n\nDer Prozess geht schnell: Schon nach einem Tag bei Zimmertemperatur hat das Brot einen Großteil seiner Frische verloren. Im Kühlschrank altert es sogar etwa dreimal so schnell, weil Kälte das Ordnen der Moleküle beschleunigt. Im Gefrierfach dagegen kommt der Vorgang fast zum Stillstand.\n\nNoch nicht ganz geklärt ist, wie sich die Retrogradation ohne Zusatzstoffe bremsen lässt. Einige Vollkornmehle scheinen das Brot länger frisch zu halten, bestätigt ist das aber noch nicht.\n\nBis dahin hilft ein alter Trick: ein paar Minuten im heißen Ofen. Die Hitze löst die Ordnung wieder auf. Das Brot von gestern ist also nicht verloren – es hat sich nur wieder aufgeräumt.',
        },
      ],
    },
  },
];
