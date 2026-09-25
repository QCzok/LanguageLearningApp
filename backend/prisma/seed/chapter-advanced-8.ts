import type { UnitSeed } from './chapter-beginner-1';

/**
 * Advanced, Kapitel 8: „Wissenschaftliches Schreiben“ (C2, Kapitel 2)
 *
 * Fünf Seiten. Wissenschaftliches Deutsch hat den Ruf, schwerfällig zu sein
 * – zu Recht, wo es Substantive stapelt, zu Unrecht, wo es präzise ist. Das
 * Kapitel lehrt die Konventionen (Gliederung, Referieren, Hedging) und die
 * Kunst, den Nominalstil zu dosieren.
 *
 * Aufbau: Seite 1 die Gliederung einer Arbeit, Seite 2 das faire Referieren
 * fremder Positionen, Seite 3 Hedging, Seite 4 Präzision und
 * Funktionsverbgefüge, Seite 5 der wissenschaftliche Absatz und ein
 * eigenes Abstract.
 *
 * Die zitierten Autorinnen und Studien sind erfunden. Sämtliche Texte sind
 * eigenständig verfasst.
 */
const v = 1;

export const ADVANCED_8_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Gliederung einer wissenschaftlichen Arbeit.
  {
    order: 1,
    title: 'Der Aufbau einer Arbeit',
    subtitle: 'Einen Fachtext gliedern',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'a8-1-h1', type: 'HEADING', level: 1, text: 'Der Aufbau einer Arbeit' },
        {
          id: 'a8-1-intro',
          type: 'TEXT',
          text: 'Eine wissenschaftliche Arbeit wird selten von vorn nach hinten gelesen. Gutachter lesen zuerst das Abstract, dann das Fazit, dann vielleicht die Methode. Deshalb muss jeder Teil für sich verständlich sein und genau an der Stelle stehen, an der man ihn sucht. Die Gliederung ist kein Formalismus, sondern ein Dienst am Leser.',
        },
        {
          id: 'a8-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: wissenschaftliches Arbeiten',
          items: [
            {
              term: 'Fragestellung',
              article: 'die',
              translations: { en: 'research question', es: 'la pregunta de investigación', fr: 'la problématique', it: 'la domanda di ricerca' },
            },
            {
              term: 'Forschungsstand',
              article: 'der',
              translations: { en: 'state of research', es: 'el estado de la cuestión', fr: 'l’état de la recherche', it: 'lo stato dell’arte' },
            },
            {
              term: 'Methode',
              article: 'die',
              plural: 'die Methoden',
              translations: { en: 'method', es: 'el método', fr: 'la méthode', it: 'il metodo' },
            },
            {
              term: 'Befund',
              article: 'der',
              plural: 'die Befunde',
              translations: { en: 'finding', es: 'el hallazgo', fr: 'le résultat', it: 'il risultato' },
            },
            {
              term: 'Fazit',
              article: 'das',
              translations: { en: 'conclusion', es: 'la conclusión', fr: 'la conclusion', it: 'la conclusione' },
            },
            {
              term: 'Literaturverzeichnis',
              article: 'das',
              translations: { en: 'bibliography', es: 'la bibliografía', fr: 'la bibliographie', it: 'la bibliografia' },
            },
            {
              term: 'Abschlussarbeit',
              article: 'die',
              plural: 'die Abschlussarbeiten',
              translations: { en: 'thesis', es: 'el trabajo de fin de estudios', fr: 'le mémoire', it: 'la tesi' },
            },
            {
              term: 'Plagiat',
              article: 'das',
              translations: { en: 'plagiarism', es: 'el plagio', fr: 'le plagiat', it: 'il plagio' },
            },
            {
              term: 'etwas untersuchen',
              translations: { en: 'to investigate, to examine', es: 'investigar', fr: 'examiner', it: 'esaminare' },
            },
          ],
        },
        {
          id: 'a8-1-info-teile',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Die Teile und ihre Sprache',
          text: 'Jeder Teil hat typische Formulierungen und ein typisches Tempus. Einleitung und Diskussion stehen überwiegend im Präsens. In Methode und Ergebnissen wird oft das Präteritum oder Perfekt verwendet, weil sie berichten, was getan und gefunden wurde.',
          table: {
            headers: ['Teil', 'Funktion', 'Formulierung'],
            rows: [
              ['Einleitung', 'Problem, Fragestellung', 'Die vorliegende Arbeit untersucht, inwiefern …'],
              ['Forschungsstand', 'was man schon weiß', 'Bisherige Studien haben gezeigt, dass …'],
              ['Methode', 'wie vorgegangen wurde', 'Befragt wurden 120 Lehrkräfte.'],
              ['Ergebnisse', 'was gefunden wurde', 'Zwei Drittel der Befragten gaben an, …'],
              ['Diskussion / Fazit', 'was es bedeutet', 'Die Befunde legen nahe, dass …'],
            ],
          },
        },
        {
          id: 'a8-1-match',
          type: 'MATCHING',
          instruction: 'In welchen Teil der Arbeit gehört der Satz?',
          left: [
            { id: 'l1', text: 'Die vorliegende Arbeit untersucht, wie Jugendliche Nachrichten auswählen.' },
            { id: 'l2', text: 'Ausgewertet wurden 300 Fragebögen aus fünf Schulen.' },
            { id: 'l3', text: '58 Prozent nutzten soziale Netzwerke als Hauptquelle.' },
            { id: 'l4', text: 'Die Befunde legen nahe, dass Medienbildung früher ansetzen sollte.' },
            { id: 'l5', text: 'Bereits Müller (2018) stellte fest, dass die Fernsehnutzung sinkt.' },
          ],
          right: [
            { id: 'r1', text: 'Einleitung' },
            { id: 'r2', text: 'Methode' },
            { id: 'r3', text: 'Ergebnisse' },
            { id: 'r4', text: 'Diskussion' },
            { id: 'r5', text: 'Forschungsstand' },
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
          id: 'a8-1-choice',
          type: 'CHOICE',
          instruction: 'Welche Fragestellung ist für eine Abschlussarbeit am besten geeignet?',
          question: 'Wählen Sie.',
          multiple: false,
          options: [
            { id: 'c1', text: 'Soziale Medien' },
            { id: 'c2', text: 'Sind soziale Medien schlecht?' },
            { id: 'c3', text: 'Inwiefern beeinflusst die Nutzung von Kurzvideo-Plattformen die Aufmerksamkeitsspanne von Schülerinnen und Schülern der Klassen 7 bis 9?' },
            { id: 'c4', text: 'Alles über das Internet' },
          ],
          solution: ['c3'],
          explanation:
            'Eine gute Fragestellung ist eingegrenzt (welches Medium, welche Gruppe, welcher Effekt) und offen formuliert („inwiefern“). Die zweite verlangt ein pauschales Werturteil.',
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – fremde Positionen fair referieren.
  {
    order: 2,
    title: 'Fremde Positionen referieren',
    subtitle: 'Zitieren, paraphrasieren, einordnen',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'a8-2-h1', type: 'HEADING', level: 1, text: 'Fremde Positionen referieren' },
        {
          id: 'a8-2-intro',
          type: 'TEXT',
          text: 'Ein großer Teil wissenschaftlicher Texte besteht darin, wiederzugeben, was andere gesagt haben. Dabei muss für den Leser jederzeit klar sein, wessen Gedanke gerade formuliert wird: der der Quelle oder der eigene. Der Konjunktiv I und das einleitende Verb sind die wichtigsten Werkzeuge dafür.',
        },
        {
          id: 'a8-2-info-verben',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Referierende Verben und ihre Wertung',
          text: 'Neutrale Verben geben nur wieder. Andere verraten, wie der Schreiber zur Quelle steht: „zeigt“ und „weist nach“ übernehmen die Aussage als gesichert, „behauptet“ und „meint“ distanzieren sich. Wählen Sie das Verb bewusst – es ist eine Bewertung.',
          table: {
            headers: ['Haltung des Schreibers', 'Verben'],
            rows: [
              ['neutral', 'schreibt, stellt fest, vertritt die Auffassung, argumentiert'],
              ['zustimmend', 'zeigt, weist nach, belegt, legt überzeugend dar'],
              ['distanziert', 'behauptet, meint, will … gezeigt haben'],
              ['Vorsicht der Quelle', 'vermutet, nimmt an, deutet an'],
              ['Eingeständnis der Quelle', 'räumt ein, gesteht zu'],
            ],
          },
        },
        {
          id: 'a8-2-match',
          type: 'MATCHING',
          instruction: 'Was verrät das Verb über die Haltung?',
          left: [
            { id: 'l1', text: 'Berger (2020) weist nach, dass …' },
            { id: 'l2', text: 'Berger (2020) behauptet, dass …' },
            { id: 'l3', text: 'Berger (2020) vertritt die Auffassung, dass …' },
            { id: 'l4', text: 'Berger (2020) räumt ein, dass …' },
          ],
          right: [
            { id: 'r1', text: 'Der Schreiber hält die Aussage für belegt.' },
            { id: 'r2', text: 'Der Schreiber zweifelt an der Aussage.' },
            { id: 'r3', text: 'Der Schreiber gibt nur wieder.' },
            { id: 'r4', text: 'Berger gesteht einen Punkt gegen die eigene Position zu.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'a8-2-info-zitat',
          type: 'INFO',
          variant: 'TIP',
          title: 'Direkt, indirekt, sinngemäß',
          text: 'Das direkte Zitat steht in Anführungszeichen und wird wörtlich übernommen. Die indirekte Wiedergabe steht im Konjunktiv I. Die Paraphrase fasst sinngemäß zusammen und wird mit „vgl.“ belegt. Alle drei brauchen eine Quellenangabe – sonst ist es ein Plagiat.',
          table: {
            headers: ['Form', 'Beispiel'],
            rows: [
              ['direktes Zitat', 'Berger spricht von einer „stillen Revolution des Lesens“ (2020, S. 14).'],
              ['indirekte Wiedergabe', 'Berger zufolge habe sich das Leseverhalten grundlegend verändert (2020, S. 14).'],
              ['Paraphrase', 'Das Leseverhalten hat sich in den letzten Jahren stark gewandelt (vgl. Berger 2020).'],
            ],
          },
        },
        {
          id: 'a8-2-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die Wiedergabe.',
          wordBank: ['zufolge', 'habe', 'vgl.', 'räumt', 'sei'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Berger ' },
            { kind: 'GAP', gapId: 'q1', solution: ['zufolge'], width: 8 },
            { kind: 'TEXT', text: ' ' },
            { kind: 'GAP', gapId: 'q2', solution: ['habe'], width: 5 },
            { kind: 'TEXT', text: ' sich das Leseverhalten grundlegend verändert. Die Ursache ' },
            { kind: 'GAP', gapId: 'q3', solution: ['sei'], width: 4 },
            { kind: 'TEXT', text: ' vor allem das Smartphone. Sie ' },
            { kind: 'GAP', gapId: 'q4', solution: ['räumt'], width: 6 },
            { kind: 'TEXT', text: ' allerdings ein, dass ihre Stichprobe klein ist (' },
            { kind: 'GAP', gapId: 'q5', solution: ['vgl.'], width: 5 },
            { kind: 'TEXT', text: ' Berger 2020, S. 30).' },
          ],
        },
        {
          id: 'a8-2-choice',
          type: 'CHOICE',
          instruction: 'Welche Wiedergabe ist korrekt und fair?',
          question: 'Die Quelle schreibt: „Unsere Daten deuten darauf hin, dass Homeoffice die Produktivität leicht erhöht.“',
          multiple: false,
          options: [
            { id: 'd1', text: 'Schulz (2022) beweist, dass Homeoffice die Produktivität steigert.' },
            { id: 'd2', text: 'Schulz (2022) behauptet, Homeoffice mache produktiver.' },
            { id: 'd3', text: 'Schulz (2022) deutet an, Homeoffice könne die Produktivität leicht erhöhen.' },
            { id: 'd4', text: 'Homeoffice erhöht die Produktivität.' },
          ],
          solution: ['d3'],
          explanation:
            'Die Quelle formuliert vorsichtig („deuten darauf hin“, „leicht“). „beweist“ übertreibt, „behauptet“ unterstellt Zweifel, und ohne Quellenangabe wäre es ein Plagiat.',
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – Hedging.
  {
    order: 3,
    title: 'Vorsichtig formulieren',
    subtitle: 'Hedging angemessen einsetzen',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'a8-3-h1', type: 'HEADING', level: 1, text: 'Vorsichtig formulieren' },
        {
          id: 'a8-3-intro',
          type: 'TEXT',
          text: 'Wissenschaft behauptet selten etwas mit letzter Gewissheit. Daher gehört das „Hedging“ – das Absichern von Aussagen – zum Handwerk. Es ist aber kein Selbstzweck: Wer jeden Satz mit „möglicherweise“ und „unter Umständen“ polstert, wirkt unsicher. Die Kunst liegt darin, genau so vorsichtig zu sein, wie es die Daten verlangen.',
        },
        {
          id: 'a8-3-info-mittel',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Mittel des Hedging',
          text: 'Das Deutsche sichert Aussagen mit Modalverben im Konjunktiv II ab („dürfte“, „könnte“), mit Adverbien („vermutlich“, „tendenziell“), mit Verben wie „scheinen“ und „nahelegen“ und mit Einschränkungen des Geltungsbereichs („in der untersuchten Gruppe“).',
          table: {
            headers: ['Zu stark', 'Angemessen', 'Zu schwach'],
            rows: [
              ['Die Daten beweisen, dass …', 'Die Daten legen nahe, dass …', 'Man könnte eventuell vermuten, dass …'],
              ['Alle Jugendlichen …', 'Die Mehrheit der Befragten …', 'Manche vielleicht …'],
              ['Das ist die Ursache.', 'Dies dürfte eine wesentliche Ursache sein.', 'Das könnte unter Umständen eine gewisse Rolle spielen.'],
            ],
          },
        },
        {
          id: 'a8-3-choice',
          type: 'CHOICE',
          instruction: 'Welche Formulierung ist angemessen abgesichert?',
          question: 'Eine Befragung von 200 Studierenden in einer Stadt ergab, dass 70 % lieber auf Papier lesen.',
          multiple: false,
          options: [
            { id: 'h1', text: 'Studierende lesen lieber auf Papier.' },
            { id: 'h2', text: 'In der untersuchten Gruppe bevorzugte eine deutliche Mehrheit das Lesen auf Papier.' },
            { id: 'h3', text: 'Es könnte unter Umständen möglicherweise sein, dass einige eventuell Papier bevorzugen.' },
            { id: 'h4', text: 'Die Studie beweist, dass Papier besser ist als Bildschirme.' },
          ],
          solution: ['h2'],
          explanation:
            'Die zweite Formulierung begrenzt den Geltungsbereich („in der untersuchten Gruppe“) und gibt das Ergebnis klar wieder. Die erste und vierte verallgemeinern unzulässig, die dritte ist überhedged.',
        },
        {
          id: 'a8-3-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie angemessene Absicherungen.',
          wordBank: ['legen', 'dürfte', 'tendenziell', 'untersuchten', 'scheint'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Die Ergebnisse ' },
            { kind: 'GAP', gapId: 'k1', solution: ['legen'], width: 6 },
            { kind: 'TEXT', text: ' nahe, dass jüngere Befragte ' },
            { kind: 'GAP', gapId: 'k2', solution: ['tendenziell'], width: 12 },
            { kind: 'TEXT', text: ' häufiger digitale Medien nutzen. Dies ' },
            { kind: 'GAP', gapId: 'k3', solution: ['dürfte'], width: 7 },
            { kind: 'TEXT', text: ' mit der Verfügbarkeit von Smartphones zusammenhängen. Der Effekt ' },
            { kind: 'GAP', gapId: 'k4', solution: ['scheint'], width: 8 },
            { kind: 'TEXT', text: ' in der ' },
            { kind: 'GAP', gapId: 'k5', solution: ['untersuchten'], width: 13 },
            { kind: 'TEXT', text: ' Gruppe allerdings schwächer zu sein als erwartet.' },
          ],
        },
        {
          id: 'a8-3-info-ich',
          type: 'INFO',
          variant: 'TIP',
          title: 'Ich, man, wir – oder Passiv?',
          text: 'In deutschen Fachtexten ist das „ich“ traditionell selten, wird aber in vielen Fächern inzwischen akzeptiert, besonders für eigene Entscheidungen („Ich beschränke mich auf …“). Das Passiv und Konstruktionen wie „Die vorliegende Arbeit zeigt“ bleiben verbreitet. „wir“ als Autorenplural ist eher in Naturwissenschaften üblich. Wichtig ist, eine Form zu wählen und bei ihr zu bleiben.',
        },
        {
          id: 'a8-3-match',
          type: 'MATCHING',
          instruction: 'Ordnen Sie der zu starken Aussage eine angemessene Version zu.',
          left: [
            { id: 'l1', text: 'Das ist die Ursache.' },
            { id: 'l2', text: 'Alle Lehrer sind überlastet.' },
            { id: 'l3', text: 'Die Studie beweist das.' },
          ],
          right: [
            { id: 'r1', text: 'Dies dürfte eine wesentliche Ursache sein.' },
            { id: 'r2', text: 'Ein Großteil der befragten Lehrkräfte gibt an, überlastet zu sein.' },
            { id: 'r3', text: 'Die Studie stützt diese Annahme.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – Präzision: Funktionsverbgefüge und Nominalstil dosieren.
  {
    order: 4,
    title: 'Präzise statt schwerfällig',
    subtitle: 'Nominalstil dosieren',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'a8-4-h1', type: 'HEADING', level: 1, text: 'Präzise statt schwerfällig' },
        {
          id: 'a8-4-intro',
          type: 'TEXT',
          text: '„Nach erfolgter Durchführung der Auswertung der Daten erfolgte eine Überprüfung der Ergebnisse.“ Der Satz ist korrekt – und kaum lesbar. Vier Nominalisierungen und zweimal „erfolgen“ machen ihn schwer. „Nachdem wir die Daten ausgewertet hatten, überprüften wir die Ergebnisse“ sagt dasselbe. Der Nominalstil hat seinen Platz, etwa in Überschriften und kompakten Zusammenfassungen, aber er muss dosiert werden.',
        },
        {
          id: 'a8-4-info-fvg',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Funktionsverbgefüge',
          text: 'Ein Funktionsverbgefüge besteht aus einem Nomen und einem bedeutungsarmen Verb: „eine Entscheidung treffen“, „zur Anwendung kommen“. Manche sind feste Fachsprache und präziser als das einfache Verb („in Kraft treten“). Andere blähen den Text nur auf („eine Untersuchung durchführen“ statt „untersuchen“).',
          table: {
            headers: ['Funktionsverbgefüge', 'einfaches Verb', 'Bewertung'],
            rows: [
              ['eine Entscheidung treffen', 'entscheiden', 'beides gut'],
              ['in Kraft treten', '— (gelten ab)', 'fester Fachbegriff'],
              ['zur Anwendung kommen', 'angewendet werden', 'eher meiden'],
              ['eine Untersuchung durchführen', 'untersuchen', 'meist überflüssig'],
              ['Kritik üben an', 'kritisieren', 'beides gut, FVG formeller'],
              ['in Frage stellen', 'bezweifeln', 'feste Wendung'],
            ],
          },
        },
        {
          id: 'a8-4-match',
          type: 'MATCHING',
          instruction: 'Welches Verb passt zum Nomen?',
          left: [
            { id: 'l1', text: 'eine Entscheidung' },
            { id: 'l2', text: 'Kritik' },
            { id: 'l3', text: 'in Kraft' },
            { id: 'l4', text: 'zur Verfügung' },
            { id: 'l5', text: 'Rücksicht' },
          ],
          right: [
            { id: 'r1', text: 'treffen' },
            { id: 'r2', text: 'üben' },
            { id: 'r3', text: 'treten' },
            { id: 'r4', text: 'stellen' },
            { id: 'r5', text: 'nehmen' },
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
          id: 'a8-4-choice',
          type: 'CHOICE',
          instruction: 'Welche Fassung ist am klarsten?',
          question: 'Original: „Die Durchführung der Befragung erfolgte unter Zuhilfenahme eines Online-Fragebogens.“',
          multiple: false,
          options: [
            { id: 'p1', text: 'Die Befragung wurde mithilfe eines Online-Fragebogens durchgeführt.' },
            { id: 'p2', text: 'Die Durchführung der Befragung wurde unter Zuhilfenahme realisiert.' },
            { id: 'p3', text: 'Es erfolgte die Befragungsdurchführung online.' },
            { id: 'p4', text: 'Die Befragung erfolgte durch Durchführung eines Fragebogens.' },
          ],
          solution: ['p1'],
          explanation:
            'Die erste Fassung ersetzt „Durchführung … erfolgte“ durch ein Passiv mit Vollverb und „unter Zuhilfenahme“ durch „mithilfe“. Noch knapper wäre: „Wir befragten die Teilnehmenden online.“',
        },
        {
          id: 'a8-4-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie das passende Funktionsverb.',
          wordBank: ['getroffen', 'geübt', 'gestellt', 'treten', 'genommen'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Der Senat hat eine Entscheidung ' },
            { kind: 'GAP', gapId: 'f1', solution: ['getroffen'], width: 10 },
            { kind: 'TEXT', text: '. Die neuen Regeln ' },
            { kind: 'GAP', gapId: 'f2', solution: ['treten'], width: 7 },
            { kind: 'TEXT', text: ' im Oktober in Kraft. Einige Professoren haben daran Kritik ' },
            { kind: 'GAP', gapId: 'f3', solution: ['geübt'], width: 6 },
            { kind: 'TEXT', text: ' und die Zahlen in Frage ' },
            { kind: 'GAP', gapId: 'f4', solution: ['gestellt'], width: 9 },
            { kind: 'TEXT', text: '. Auf Teilzeitstudierende wurde kaum Rücksicht ' },
            { kind: 'GAP', gapId: 'f5', solution: ['genommen'], width: 9 },
            { kind: 'TEXT', text: '.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – der wissenschaftliche Absatz; Abstract.
  {
    order: 5,
    title: 'Das Abstract',
    subtitle: 'Eine Arbeit in 150 Wörtern',
    estimatedMinutes: 34,
    content: {
      version: v,
      blocks: [
        { id: 'a8-5-h1', type: 'HEADING', level: 1, text: 'Das Abstract' },
        {
          id: 'a8-5-intro',
          type: 'TEXT',
          text: 'Das Abstract ist der meistgelesene Teil jeder Arbeit – und oft der einzige. In wenigen Sätzen muss es Fragestellung, Methode, zentrale Ergebnisse und Schlussfolgerung enthalten. Es verspricht nichts, was die Arbeit nicht hält, und es kommt ohne Zitate und Abkürzungen aus.',
        },
        {
          id: 'a8-5-ordering',
          type: 'ORDERING',
          instruction: 'Bringen Sie die Sätze des Abstracts in die übliche Reihenfolge.',
          items: [
            { id: 'o1', text: 'Die vorliegende Studie untersucht, wie Studierende im ersten Semester digitale Lernplattformen nutzen.' },
            { id: 'o2', text: 'Dazu wurden 240 Studierende an drei Hochschulen online befragt.' },
            { id: 'o3', text: 'Die Mehrheit nutzte die Plattformen vor allem zum Herunterladen von Folien; interaktive Angebote blieben weitgehend ungenutzt.' },
            { id: 'o4', text: 'Die Befunde legen nahe, dass interaktive Elemente gezielter in die Lehre eingebunden werden sollten.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4'],
        },
        {
          id: 'a8-5-info-kohaesion',
          type: 'INFO',
          variant: 'TIP',
          title: 'Der wissenschaftliche Absatz',
          text: 'Jeder Absatz hat einen Kerngedanken, der meist im ersten Satz steht. Die folgenden Sätze stützen ihn mit Belegen oder Beispielen, der letzte leitet über oder zieht eine Folgerung. Konnektoren wie „demnach“, „mithin“, „hingegen“ und „insofern“ gehören zum gehobenen Register.',
          table: {
            headers: ['Funktion', 'Konnektor'],
            rows: [
              ['Folgerung', 'demnach, mithin, somit'],
              ['Gegensatz', 'hingegen, demgegenüber'],
              ['Einschränkung', 'insofern, allerdings, freilich'],
              ['Ergänzung', 'darüber hinaus, zudem, ferner'],
            ],
          },
        },
        {
          id: 'a8-5-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die Zusammenfassung des Kapitels.',
          wordBank: ['Fragestellung', 'Konjunktiv I', 'behauptet', 'nahelegen', 'Funktionsverbgefüge', 'Abstract'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Eine gute ' },
            { kind: 'GAP', gapId: 'z1', solution: ['Fragestellung'], width: 14 },
            { kind: 'TEXT', text: ' ist eingegrenzt und offen. Fremde Aussagen gibt man im ' },
            { kind: 'GAP', gapId: 'z2', solution: ['Konjunktiv I'], width: 13 },
            { kind: 'TEXT', text: ' wieder. Wer schreibt, eine Autorin „' },
            { kind: 'GAP', gapId: 'z3', solution: ['behauptet'], width: 10 },
            { kind: 'TEXT', text: '“ etwas, distanziert sich. Daten, die etwas „' },
            { kind: 'GAP', gapId: 'z4', solution: ['nahelegen'], width: 10 },
            { kind: 'TEXT', text: '“, beweisen es nicht. Überflüssige ' },
            { kind: 'GAP', gapId: 'z5', solution: ['Funktionsverbgefüge'], width: 20 },
            { kind: 'TEXT', text: ' machen Texte schwer. Und das ' },
            { kind: 'GAP', gapId: 'z6', solution: ['Abstract'], width: 9 },
            { kind: 'TEXT', text: ' fasst eine Arbeit in wenigen Sätzen zusammen.' },
          ],
        },
        {
          id: 'a8-5-writing',
          type: 'WRITING',
          instruction: 'Schreiben Sie ein Abstract.',
          prompt:
            'Stellen Sie sich vor, Sie haben eine Studie durchgeführt: Sie haben 180 Beschäftigte eines Unternehmens befragt, die seit einem Jahr zwei Tage pro Woche im Homeoffice arbeiten. 64 % berichten von höherer Zufriedenheit, 41 % von Schwierigkeiten, Arbeit und Freizeit zu trennen; die Produktivität blieb laut Unternehmenszahlen gleich. Schreiben Sie ein Abstract (130–180 Wörter) mit Fragestellung, Methode, Ergebnissen und Schlussfolgerung. Verwenden Sie angemessenes Hedging und vermeiden Sie überflüssige Funktionsverbgefüge.',
          minWords: 130,
          maxWords: 190,
          aiFeedback: true,
          sampleAnswer:
            'Die vorliegende Studie untersucht, wie sich ein hybrides Arbeitsmodell mit zwei Homeoffice-Tagen pro Woche auf Zufriedenheit, Work-Life-Balance und Produktivität von Beschäftigten auswirkt. Dazu wurden 180 Mitarbeiterinnen und Mitarbeiter eines mittelständischen Unternehmens ein Jahr nach Einführung des Modells schriftlich befragt; ergänzend wurden betriebliche Produktivitätskennzahlen ausgewertet.\n\n64 % der Befragten berichteten von einer höheren Arbeitszufriedenheit als vor der Umstellung. Zugleich gaben 41 % an, Arbeit und Freizeit schwerer voneinander trennen zu können. Die Produktivität blieb im Untersuchungszeitraum unverändert.\n\nDie Befunde legen nahe, dass das hybride Modell die Zufriedenheit steigern kann, ohne die Produktivität zu beeinträchtigen. Die Schwierigkeiten bei der Abgrenzung von Arbeit und Freizeit deuten allerdings darauf hin, dass klare Regeln zur Erreichbarkeit erforderlich sein dürften. Da nur ein Unternehmen untersucht wurde, lassen sich die Ergebnisse nicht ohne Weiteres verallgemeinern; weitere Studien in anderen Branchen wären wünschenswert.',
        },
      ],
    },
  },
];
