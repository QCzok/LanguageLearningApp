import type { UnitSeed } from './chapter-beginner-1';

/**
 * Intermediate, Kapitel 8: „Wissenschaft und Technik“ (B2, Kapitel 2)
 *
 * Fünf Seiten. Es geht darum, einen Sachverhalt so zu erklären, dass jemand
 * ohne Fachwissen ihn versteht – und umgekehrt darum, einen dichten Sachtext
 * zu entschlüsseln.
 *
 * Aufbau: Seite 1 liest einen populärwissenschaftlichen Artikel über
 * Mikroplastik. Seite 2 ist der grammatische Kern: das Partizipialattribut
 * („das in Flüssen gefundene Plastik“), das Sachtexte so kompakt macht, und
 * seine Auflösung in einen Relativsatz. Seite 3 beschreibt und wertet eine
 * Grafik aus, Seite 4 übt das strukturierte Erklären in einem Vortrag,
 * Seite 5 wiederholt und lässt einen Artikel zusammenfassen.
 *
 * Einsprachig deutsch wie der ganze Intermediate-Band. Die Zahlen in Text und
 * Grafik sind vereinfacht und gerundet, die Studie auf Seite 3 ist erfunden.
 * Sämtliche Texte sind eigenständig verfasst.
 */
const v = 1;

export const INTERMEDIATE_8_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – ein populärwissenschaftlicher Artikel.
  {
    order: 1,
    title: 'Unsichtbar, aber überall',
    subtitle: 'Einen Sachtext verstehen',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'i8-1-h1', type: 'HEADING', level: 1, text: 'Unsichtbar, aber überall' },
        {
          id: 'i8-1-text',
          type: 'TEXT',
          text: 'Mikroplastik – das Problem, das man nicht sieht\n\nAls Mikroplastik bezeichnen Forschende Plastikteilchen, die kleiner als fünf Millimeter sind. Manche entstehen, wenn größere Plastikteile in der Umwelt zerfallen, etwa eine im Meer treibende Flasche. Andere werden absichtlich so klein hergestellt, zum Beispiel für Kosmetik. Eine der wichtigsten Quellen ist jedoch überraschend alltäglich: der Abrieb von Autoreifen.\n\nInzwischen hat man Mikroplastik fast überall nachgewiesen – in Flüssen, im arktischen Eis, in Speisesalz und sogar im menschlichen Blut. Was das für unsere Gesundheit bedeutet, ist noch weitgehend unklar. Laborversuche deuten darauf hin, dass besonders kleine Teilchen Entzündungen auslösen können. Ob die im Alltag aufgenommenen Mengen dafür ausreichen, lässt sich bisher aber nicht sicher sagen.\n\nDie Forschung steht dabei vor einem praktischen Problem: Es gibt noch keine einheitliche Messmethode. Verschiedene Labore zählen die Teilchen unterschiedlich, weshalb sich viele Studien schwer vergleichen lassen. „Wir wissen genug, um vorsichtig zu sein, aber zu wenig, um in Panik zu geraten“, fasst die Umweltchemikerin Dr. Lena Brückner den Stand zusammen.',
        },
        {
          id: 'i8-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: Forschung',
          items: [
            {
              term: 'Forschende (Pl.)',
              translations: { en: 'researchers', es: 'los investigadores', fr: 'les chercheurs', it: 'i ricercatori' },
            },
            {
              term: 'nachweisen',
              translations: { en: 'to detect, to prove', es: 'detectar, demostrar', fr: 'détecter, prouver', it: 'rilevare, dimostrare' },
              example: 'Man hat Spuren des Stoffes im Wasser nachgewiesen.',
            },
            {
              term: 'Quelle',
              article: 'die',
              plural: 'die Quellen',
              translations: { en: 'source', es: 'la fuente', fr: 'la source', it: 'la fonte' },
            },
            {
              term: 'Abrieb',
              article: 'der',
              translations: { en: 'abrasion, wear particles', es: 'el desgaste, la abrasión', fr: 'l’abrasion', it: 'l’abrasione' },
            },
            {
              term: 'auslösen',
              translations: { en: 'to trigger, to cause', es: 'provocar, desencadenar', fr: 'déclencher', it: 'scatenare, provocare' },
              example: 'Der Stoff kann Allergien auslösen.',
            },
            {
              term: 'darauf hindeuten, dass …',
              translations: { en: 'to indicate that …', es: 'indicar que …', fr: 'indiquer que …', it: 'indicare che …' },
            },
            {
              term: 'Versuch',
              article: 'der',
              plural: 'die Versuche',
              translations: { en: 'experiment, attempt', es: 'el experimento', fr: 'l’expérience', it: 'l’esperimento' },
            },
            {
              term: 'einheitlich',
              translations: { en: 'uniform, standardised', es: 'uniforme, unificado', fr: 'uniforme, standardisé', it: 'uniforme' },
            },
            {
              term: 'Stand der Forschung',
              article: 'der',
              translations: { en: 'state of research', es: 'el estado de la investigación', fr: 'l’état de la recherche', it: 'lo stato della ricerca' },
            },
          ],
        },
        {
          id: 'i8-1-choice',
          type: 'CHOICE',
          instruction: 'Lesen Sie den Artikel.',
          question: 'Welche Aussagen entsprechen dem Text? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'a1', text: 'Mikroplastik entsteht nur in der Kosmetikindustrie.' },
            { id: 'a2', text: 'Autoreifen sind eine wichtige Quelle für Mikroplastik.' },
            { id: 'a3', text: 'Es ist bewiesen, dass Mikroplastik im Blut krank macht.' },
            { id: 'a4', text: 'Studien sind schwer vergleichbar, weil unterschiedlich gemessen wird.' },
          ],
          solution: ['a2', 'a4'],
          explanation:
            'Der Text nennt mehrere Quellen, nicht nur Kosmetik. Und er formuliert vorsichtig: Laborversuche „deuten darauf hin“, dass Entzündungen möglich sind – bewiesen ist nichts.',
        },
        {
          id: 'i8-1-info-vorsicht',
          type: 'INFO',
          variant: 'TIP',
          title: 'Wie sicher ist das?',
          text: 'Wissenschaftliche Texte unterscheiden genau zwischen Gewissheit und Vermutung. Achten Sie auf diese Signale – sie verraten, wie belastbar eine Aussage ist.',
          table: {
            headers: ['Grad', 'Redemittel'],
            rows: [
              ['gesichert', 'Es ist erwiesen / belegt, dass … / Man hat nachgewiesen, dass …'],
              ['wahrscheinlich', 'Vieles spricht dafür, dass … / Die Daten legen nahe, dass …'],
              ['möglich', 'Versuche deuten darauf hin, dass … / Es ist denkbar, dass …'],
              ['unklar', 'Es ist noch ungeklärt, ob … / Das lässt sich bisher nicht sicher sagen.'],
            ],
          },
        },
        {
          id: 'i8-1-match',
          type: 'MATCHING',
          instruction: 'Wie sicher ist die Aussage?',
          left: [
            { id: 'l1', text: 'Man hat Mikroplastik im arktischen Eis nachgewiesen.' },
            { id: 'l2', text: 'Laborversuche deuten darauf hin, dass Entzündungen möglich sind.' },
            { id: 'l3', text: 'Ob die Mengen im Alltag schaden, lässt sich nicht sicher sagen.' },
          ],
          right: [
            { id: 'r1', text: 'gesichert' },
            { id: 'r2', text: 'möglich' },
            { id: 'r3', text: 'unklar' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
          ],
        },
        {
          id: 'i8-1-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie mit den Wörtern aus dem Kasten.',
          wordBank: ['nachgewiesen', 'Quelle', 'auslösen', 'einheitliche', 'hindeuten'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Forschende haben in Muscheln aus der Nordsee Mikroplastik ' },
            { kind: 'GAP', gapId: 'c1', solution: ['nachgewiesen'], width: 13 },
            { kind: 'TEXT', text: '. Als wichtigste ' },
            { kind: 'GAP', gapId: 'c2', solution: ['Quelle'], width: 7 },
            { kind: 'TEXT', text: ' vermuten sie Kunstfasern aus Kleidung. Erste Ergebnisse könnten darauf ' },
            { kind: 'GAP', gapId: 'c3', solution: ['hindeuten'], width: 10 },
            { kind: 'TEXT', text: ', dass die Teilchen bei Muscheln Stress ' },
            { kind: 'GAP', gapId: 'c4', solution: ['auslösen'], width: 9 },
            { kind: 'TEXT', text: '. Für sichere Aussagen fehlt aber noch eine ' },
            { kind: 'GAP', gapId: 'c5', solution: ['einheitliche'], width: 12 },
            { kind: 'TEXT', text: ' Methode.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – das Partizipialattribut.
  {
    order: 2,
    title: 'Die im Meer treibende Flasche',
    subtitle: 'Partizipialattribute verstehen und auflösen',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'i8-2-h1', type: 'HEADING', level: 1, text: 'Die im Meer treibende Flasche' },
        {
          id: 'i8-2-text',
          type: 'TEXT',
          text: 'Im Artikel auf Seite 1 steht: „… etwa eine im Meer treibende Flasche“ und „die im Alltag aufgenommenen Mengen“.\n\nIn einem Gespräch würde man eher sagen: „eine Flasche, die im Meer treibt“ und „die Mengen, die man im Alltag aufnimmt“.\n\nSachtexte packen die Information des Relativsatzes gern vor das Nomen – in ein sogenanntes Partizipialattribut. Das spart Platz, macht Sätze aber auch schwerer zu lesen. Wer die Konstruktion erkennt, versteht Fachtexte deutlich schneller.',
        },
        {
          id: 'i8-2-info-partizip',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Partizip I oder Partizip II?',
          text: 'Das Partizipialattribut steht zwischen Artikel und Nomen und wird wie ein Adjektiv dekliniert. Partizip I (Infinitiv + d: treibend, wachsend) beschreibt etwas Aktives und Gleichzeitiges – der Relativsatz steht im Aktiv. Partizip II (getestet, entwickelt) beschreibt meist etwas Passives oder Abgeschlossenes – der Relativsatz steht im Passiv oder im Perfekt. Alles, was zum Partizip gehört, steht links davon.',
          table: {
            headers: ['Partizipialattribut', 'Relativsatz'],
            rows: [
              ['die im Meer treibende Flasche', 'die Flasche, die im Meer treibt (aktiv, gleichzeitig)'],
              ['die schnell wachsende Stadt', 'die Stadt, die schnell wächst'],
              ['das im Labor getestete Material', 'das Material, das im Labor getestet wurde (passiv)'],
              ['der vor Kurzem veröffentlichte Bericht', 'der Bericht, der vor Kurzem veröffentlicht wurde'],
              ['die gestern angekommenen Forscher', 'die Forscher, die gestern angekommen sind (abgeschlossen)'],
            ],
          },
        },
        {
          id: 'i8-2-info-lesen',
          type: 'INFO',
          variant: 'TIP',
          title: 'So lesen Sie ein langes Attribut',
          text: 'Springen Sie vom Artikel direkt zum Nomen: „die … Mengen“. Dann suchen Sie das Partizip direkt vor dem Nomen: „aufgenommenen“. Erst zum Schluss lesen Sie, was dazwischen steht: „im Alltag“. So wird aus einem langen Block ein einfacher Satz: die Mengen, die im Alltag aufgenommen werden.',
        },
        {
          id: 'i8-2-choice',
          type: 'CHOICE',
          instruction: 'Welcher Relativsatz passt?',
          question: 'die von Forschenden in Kiel entwickelte Methode',
          multiple: false,
          options: [
            { id: 'a1', text: 'die Methode, die Forschende in Kiel entwickeln' },
            { id: 'a2', text: 'die Methode, die von Forschenden in Kiel entwickelt wurde' },
            { id: 'a3', text: 'die Methode, die Forschende in Kiel entwickelt' },
            { id: 'a4', text: 'die Forschenden, die in Kiel eine Methode entwickeln' },
          ],
          solution: ['a2'],
          explanation:
            'Partizip II („entwickelt“) + „von …“ zeigt ein Passiv an: Die Methode wurde entwickelt. Das Bezugswort ist „Methode“, nicht „Forschende“.',
        },
        {
          id: 'i8-2-cloze',
          type: 'CLOZE',
          instruction: 'Partizip I oder II? Ergänzen Sie die richtige Form.',
          wordBank: ['steigenden', 'gemessenen', 'lebenden', 'veröffentlichte', 'wachsende', 'geplanten'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. die Temperaturen, die steigen → die ' },
            { kind: 'GAP', gapId: 'p1', solution: ['steigenden'], width: 11 },
            { kind: 'TEXT', text: ' Temperaturen\n2. die Werte, die gemessen wurden → die ' },
            { kind: 'GAP', gapId: 'p2', solution: ['gemessenen'], width: 11 },
            { kind: 'TEXT', text: ' Werte\n3. die Tiere, die im Boden leben → die im Boden ' },
            { kind: 'GAP', gapId: 'p3', solution: ['lebenden'], width: 9 },
            { kind: 'TEXT', text: ' Tiere\n4. die Studie, die letzte Woche veröffentlicht wurde → die letzte Woche ' },
            { kind: 'GAP', gapId: 'p4', solution: ['veröffentlichte', 'veroeffentlichte'], width: 16 },
            { kind: 'TEXT', text: ' Studie\n5. eine Branche, die schnell wächst → eine schnell ' },
            { kind: 'GAP', gapId: 'p5', solution: ['wachsende'], width: 10 },
            { kind: 'TEXT', text: ' Branche' },
          ],
        },
        {
          id: 'i8-2-match',
          type: 'MATCHING',
          instruction: 'Welcher Relativsatz gehört zu welchem Attribut?',
          left: [
            { id: 'l1', text: 'die seit Jahren sinkenden Kosten' },
            { id: 'l2', text: 'das bisher kaum erforschte Gebiet' },
            { id: 'l3', text: 'die ständig wachsende Datenmenge' },
            { id: 'l4', text: 'der für 2030 geplante Start' },
          ],
          right: [
            { id: 'r1', text: 'die Kosten, die seit Jahren sinken' },
            { id: 'r2', text: 'das Gebiet, das bisher kaum erforscht wurde' },
            { id: 'r3', text: 'die Datenmenge, die ständig wächst' },
            { id: 'r4', text: 'der Start, der für 2030 geplant ist' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'i8-2-order',
          type: 'ORDERING',
          instruction: 'Bauen Sie das Partizipialattribut: „die Ergebnisse, die in der Studie vorgestellt wurden“.',
          items: [
            { id: 'o1', text: 'die' },
            { id: 'o2', text: 'in der Studie' },
            { id: 'o3', text: 'vorgestellten' },
            { id: 'o4', text: 'Ergebnisse' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4'],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – eine Grafik beschreiben und auswerten.
  {
    order: 3,
    title: 'Was die Zahlen zeigen',
    subtitle: 'Eine Grafik beschreiben und auswerten',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'i8-3-h1', type: 'HEADING', level: 1, text: 'Was die Zahlen zeigen' },
        {
          id: 'i8-3-text',
          type: 'TEXT',
          text: 'Eine Umfrage unter 2 000 Erwachsenen hat gefragt: „Wie oft nutzen Sie Künstliche Intelligenz (KI), zum Beispiel Chatbots oder Übersetzungsprogramme?“\n\nAntwort „mindestens einmal pro Woche“, nach Altersgruppen:\n\n• 18–29 Jahre: 2021: 18 % – 2023: 41 % – 2025: 68 %\n• 30–49 Jahre: 2021: 11 % – 2023: 29 % – 2025: 52 %\n• 50–64 Jahre: 2021: 5 % – 2023: 14 % – 2025: 31 %\n• ab 65 Jahre: 2021: 2 % – 2023: 6 % – 2025: 12 %\n\n(Quelle: erfundene Beispielstudie, Werte gerundet)',
        },
        {
          id: 'i8-3-info-grafik',
          type: 'INFO',
          variant: 'TIP',
          title: 'Eine Grafik beschreiben',
          text: 'Nennen Sie zuerst Thema, Quelle und Zeitraum. Beschreiben Sie dann die wichtigste Entwicklung, danach Details und Vergleiche. Erst am Ende folgt die Auswertung: Was bedeuten die Zahlen, und welche Gründe könnte es geben? Trennen Sie Beschreibung und Deutung klar.',
          table: {
            headers: ['Zweck', 'Redemittel'],
            rows: [
              ['Einleitung', 'Die Grafik zeigt … / Sie stammt aus … / Sie bezieht sich auf den Zeitraum von … bis …'],
              ['Entwicklung', 'Der Anteil ist von … auf … gestiegen / gesunken. / hat sich verdoppelt / fast vervierfacht'],
              ['Vergleich', 'Im Vergleich zu … / Während …, … / Am stärksten / geringsten …'],
              ['Auswertung', 'Auffällig ist, dass … / Das lässt sich damit erklären, dass … / Daraus kann man schließen, dass …'],
            ],
          },
        },
        {
          id: 'i8-3-choice',
          type: 'CHOICE',
          instruction: 'Lesen Sie die Zahlen.',
          question: 'Welche Aussagen stimmen? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'a1', text: 'In allen Altersgruppen ist die Nutzung gestiegen.' },
            { id: 'a2', text: 'Bei den 18- bis 29-Jährigen hat sich der Anteil von 2021 bis 2025 fast vervierfacht.' },
            { id: 'a3', text: 'Die über 65-Jährigen nutzen KI 2025 häufiger als die 50- bis 64-Jährigen.' },
            { id: 'a4', text: 'Den größten Anstieg in Prozentpunkten gibt es bei den 30- bis 49-Jährigen.' },
          ],
          solution: ['a1', 'a2'],
          explanation:
            '18 % → 68 % ist fast das Vierfache. Die Älteren liegen 2025 mit 12 % unter den 50- bis 64-Jährigen (31 %). Den größten Anstieg gibt es bei den Jüngsten: plus 50 Prozentpunkte, bei den 30- bis 49-Jährigen sind es plus 41.',
        },
        {
          id: 'i8-3-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die Beschreibung.',
          wordBank: ['zeigt', 'gestiegen', 'verdoppelt', 'Während', 'Auffällig', 'erklären'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Die Grafik ' },
            { kind: 'GAP', gapId: 'g1', solution: ['zeigt'], width: 6 },
            { kind: 'TEXT', text: ', wie oft Erwachsene KI nutzen. In allen Altersgruppen ist der Anteil deutlich ' },
            { kind: 'GAP', gapId: 'g2', solution: ['gestiegen'], width: 10 },
            { kind: 'TEXT', text: '. Bei den 50- bis 64-Jährigen hat er sich zwischen 2023 und 2025 mehr als ' },
            { kind: 'GAP', gapId: 'g3', solution: ['verdoppelt'], width: 11 },
            { kind: 'TEXT', text: '. ' },
            { kind: 'GAP', gapId: 'g4', solution: ['Während'], width: 8 },
            { kind: 'TEXT', text: ' 2025 zwei Drittel der Jüngsten KI regelmäßig nutzen, ist es bei den über 65-Jährigen nur etwa jeder Achte. ' },
            { kind: 'GAP', gapId: 'g5', solution: ['Auffällig'], width: 10 },
            { kind: 'TEXT', text: ' ist, dass der Abstand zwischen Jung und Alt größer wird. Das lässt sich vielleicht damit ' },
            { kind: 'GAP', gapId: 'g6', solution: ['erklären'], width: 9 },
            { kind: 'TEXT', text: ', dass jüngere Menschen KI in Ausbildung und Beruf häufiger brauchen.' },
          ],
        },
        {
          id: 'i8-3-match',
          type: 'MATCHING',
          instruction: 'Was macht der Satz – beschreibt er oder wertet er aus?',
          left: [
            { id: 'l1', text: 'Der Anteil ist von 5 % auf 31 % gestiegen.' },
            { id: 'l2', text: 'Das könnte daran liegen, dass viele Programme einfacher geworden sind.' },
            { id: 'l3', text: 'Am geringsten ist die Nutzung bei den über 65-Jährigen.' },
            { id: 'l4', text: 'Daraus kann man schließen, dass KI zum Alltag gehört.' },
          ],
          right: [
            { id: 'r1', text: 'beschreibt eine Entwicklung' },
            { id: 'r2', text: 'nennt einen möglichen Grund' },
            { id: 'r3', text: 'vergleicht Gruppen miteinander' },
            { id: 'r4', text: 'zieht eine Schlussfolgerung' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'i8-3-choice-2',
          type: 'CHOICE',
          instruction: 'Welcher Satz ist sprachlich korrekt?',
          multiple: false,
          options: [
            { id: 'b1', text: 'Der Anteil ist von 2 % bis 12 % gestiegen.' },
            { id: 'b2', text: 'Der Anteil ist um 2 % auf 12 % gestiegen.' },
            { id: 'b3', text: 'Der Anteil ist von 2 % auf 12 % gestiegen.' },
            { id: 'b4', text: 'Der Anteil hat von 2 % auf 12 % gestiegen.' },
          ],
          solution: ['b3'],
          explanation:
            'Ausgangswert mit „von“, Endwert mit „auf“; die Differenz steht mit „um“ (um 10 Prozentpunkte). „steigen“ bildet das Perfekt mit „sein“.',
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – einen Sachverhalt strukturiert erklären.
  {
    order: 4,
    title: 'Einfach erklärt',
    subtitle: 'Einen Sachverhalt strukturiert erklären',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'i8-4-h1', type: 'HEADING', level: 1, text: 'Einfach erklärt' },
        {
          id: 'i8-4-intro',
          type: 'TEXT',
          text: 'Bei einem „Science Slam“ erklären junge Forschende ihr Thema in zehn Minuten – so, dass auch ein Publikum ohne Fachwissen es versteht. Hier ein Auszug aus dem Vortrag von Jan Okafor, der über Wärmepumpen forscht.',
        },
        {
          id: 'i8-4-vortrag',
          type: 'DIALOGUE',
          title: 'Aus dem Vortrag',
          lines: [
            { speaker: 'Jan Okafor', text: 'Wer von Ihnen hat einen Kühlschrank? … Gut, fast alle. Dann verstehen Sie schon das Prinzip einer Wärmepumpe.' },
            { speaker: 'Jan Okafor', text: 'Zunächst die Grundidee: Ein Kühlschrank holt Wärme aus seinem Inneren und gibt sie nach außen ab. Deshalb ist die Rückseite warm. Eine Wärmepumpe macht genau dasselbe – nur umgekehrt. Sie holt Wärme aus der Luft oder aus dem Boden und bringt sie ins Haus.' },
            { speaker: 'Jan Okafor', text: 'Jetzt fragen Sie sich vielleicht: Wie soll das im Winter gehen, wenn es draußen kalt ist? Die Antwort ist: Auch kalte Luft enthält noch Wärme. Ein spezielles Kältemittel verdampft schon bei sehr niedrigen Temperaturen und nimmt diese Wärme auf.' },
            { speaker: 'Jan Okafor', text: 'Das bedeutet konkret: Aus einer Kilowattstunde Strom macht die Pumpe drei bis vier Kilowattstunden Wärme. Mit anderen Worten: Der größte Teil der Energie kommt kostenlos aus der Umwelt.' },
            { speaker: 'Jan Okafor', text: 'Allerdings – und das ist mein Forschungsthema – funktioniert das in schlecht gedämmten Altbauten weniger gut. Zusammenfassend kann man also sagen: Die Technik ist genial, aber das Haus muss mitspielen.' },
          ],
        },
        {
          id: 'i8-4-info-erklaeren',
          type: 'INFO',
          variant: 'TIP',
          title: 'Strukturiert erklären',
          text: 'Gute Erklärungen holen das Publikum dort ab, wo es steht: mit einem Vergleich aus dem Alltag. Sie gliedern den Inhalt in Schritte, nehmen mögliche Fragen vorweg und fassen am Ende zusammen.',
          table: {
            headers: ['Schritt', 'Redemittel'],
            rows: [
              ['Einstieg / Vergleich', 'Stellen Sie sich vor, … / Das funktioniert ähnlich wie …'],
              ['gliedern', 'Zunächst … / Im nächsten Schritt … / Schließlich …'],
              ['Frage vorwegnehmen', 'Jetzt fragen Sie sich vielleicht, … / Man könnte einwenden, dass …'],
              ['umformulieren', 'Das bedeutet konkret: … / Mit anderen Worten: … / Anders gesagt: …'],
              ['zusammenfassen', 'Zusammenfassend kann man sagen, … / Kurz gesagt: …'],
            ],
          },
        },
        {
          id: 'i8-4-match',
          type: 'MATCHING',
          instruction: 'Welche Funktion hat der Satz im Vortrag?',
          left: [
            { id: 'l1', text: 'Dann verstehen Sie schon das Prinzip einer Wärmepumpe.' },
            { id: 'l2', text: 'Jetzt fragen Sie sich vielleicht: Wie soll das im Winter gehen?' },
            { id: 'l3', text: 'Mit anderen Worten: Der größte Teil der Energie kommt aus der Umwelt.' },
            { id: 'l4', text: 'Die Technik ist genial, aber das Haus muss mitspielen.' },
          ],
          right: [
            { id: 'r1', text: 'Vergleich mit dem Alltag' },
            { id: 'r2', text: 'eine Frage vorwegnehmen' },
            { id: 'r3', text: 'umformulieren' },
            { id: 'r4', text: 'zusammenfassen' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'i8-4-choice',
          type: 'CHOICE',
          instruction: 'Lesen Sie den Vortrag noch einmal.',
          question: 'Worüber forscht Jan Okafor genau?',
          multiple: false,
          options: [
            { id: 'a1', text: 'über neue Kältemittel für Kühlschränke' },
            { id: 'a2', text: 'darüber, wie gut Wärmepumpen in schlecht gedämmten Altbauten funktionieren' },
            { id: 'a3', text: 'über die Stromkosten von Wärmepumpen' },
            { id: 'a4', text: 'über Heizungen in Neubauten' },
          ],
          solution: ['a2'],
          explanation: 'Er sagt: „Allerdings – und das ist mein Forschungsthema – funktioniert das in schlecht gedämmten Altbauten weniger gut.“',
        },
        {
          id: 'i8-4-order',
          type: 'ORDERING',
          instruction: 'Bringen Sie die Erklärung in eine sinnvolle Reihenfolge.',
          items: [
            { id: 'o1', text: 'Stellen Sie sich einen Kühlschrank vor.' },
            { id: 'o2', text: 'Zunächst holt die Pumpe Wärme aus der Außenluft.' },
            { id: 'o3', text: 'Im nächsten Schritt wird diese Wärme ins Haus gebracht.' },
            { id: 'o4', text: 'Jetzt fragen Sie sich vielleicht, ob das auch im Winter klappt.' },
            { id: 'o5', text: 'Kurz gesagt: Die Energie kommt größtenteils aus der Umwelt.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5'],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – Rückblick auf Kapitel 8.
  {
    order: 5,
    title: 'Kannst du das schon?',
    subtitle: 'Rückblick, einen Artikel zusammenfassen',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'i8-5-h1', type: 'HEADING', level: 1, text: 'Kannst du das schon?' },
        {
          id: 'i8-5-intro',
          type: 'TEXT',
          text: 'Prüfen Sie, was Sie aus Kapitel 8 mitnehmen: Wortschatz der Forschung, Partizipialattribute, die Beschreibung einer Grafik und das strukturierte Erklären.',
        },
        {
          id: 'i8-5-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie den Text.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Eine im Frühjahr ' },
            { kind: 'GAP', gapId: 'r1', solution: ['veröffentlichte', 'veroeffentlichte'], width: 16 },
            { kind: 'TEXT', text: ' Studie zeigt: Die Zahl der E-Autos ist von 1 Million ' },
            { kind: 'GAP', gapId: 'r2', solution: ['auf'], width: 4 },
            { kind: 'TEXT', text: ' 1,6 Millionen gestiegen. Die Daten legen ' },
            { kind: 'GAP', gapId: 'r3', solution: ['nahe'], width: 5 },
            { kind: 'TEXT', text: ', dass vor allem die ' },
            { kind: 'GAP', gapId: 'r4', solution: ['sinkenden'], width: 10 },
            { kind: 'TEXT', text: ' Preise eine Rolle spielen. Ob der Trend anhält, ist aber noch ' },
            { kind: 'GAP', gapId: 'r5', solution: ['ungeklärt', 'unklar'], width: 10 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'i8-5-choice',
          type: 'CHOICE',
          instruction: 'Welche Auflösungen sind korrekt? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'k1', text: 'die stark steigenden Mieten → die Mieten, die stark steigen' },
            { id: 'k2', text: 'das gestern reparierte Gerät → das Gerät, das gestern repariert' },
            { id: 'k3', text: 'die im Labor arbeitenden Studierenden → die Studierenden, die im Labor arbeiten' },
            { id: 'k4', text: 'der oft zitierte Satz → der Satz, der oft zitiert' },
          ],
          solution: ['k1', 'k3'],
          explanation:
            'Partizip II steht hier für ein Passiv, das Hilfsverb darf im Relativsatz nicht fehlen: das Gerät, das gestern repariert wurde; der Satz, der oft zitiert wird.',
        },
        {
          id: 'i8-5-match',
          type: 'MATCHING',
          instruction: 'Welches Redemittel passt?',
          left: [
            { id: 'm1', text: 'Sie beginnen eine Grafikbeschreibung.' },
            { id: 'm2', text: 'Sie formulieren etwas einfacher.' },
            { id: 'm3', text: 'Sie drücken eine vorsichtige Vermutung aus.' },
            { id: 'm4', text: 'Sie schließen einen Vortrag ab.' },
          ],
          right: [
            { id: 'y1', text: 'Die Grafik zeigt, …' },
            { id: 'y2', text: 'Mit anderen Worten: …' },
            { id: 'y3', text: 'Versuche deuten darauf hin, dass …' },
            { id: 'y4', text: 'Zusammenfassend kann man sagen, …' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'y1' },
            { leftId: 'm2', rightId: 'y2' },
            { leftId: 'm3', rightId: 'y3' },
            { leftId: 'm4', rightId: 'y4' },
          ],
        },
        {
          id: 'i8-5-writing',
          type: 'WRITING',
          instruction: 'Einen Artikel zusammenfassen',
          prompt:
            'Fassen Sie den Artikel „Mikroplastik – das Problem, das man nicht sieht“ von Seite 1 für eine Schülerzeitung zusammen. Nennen Sie Thema, wichtigste Quellen, den Stand der Forschung und das Problem der Messmethoden. Schreiben Sie sachlich, im Präsens und ohne eigene Meinung. Verwenden Sie mindestens ein Partizipialattribut und ein Redemittel, das zeigt, wie sicher eine Aussage ist.',
          minWords: 100,
          maxWords: 180,
          aiFeedback: true,
          sampleAnswer:
            'Der Artikel informiert über Mikroplastik, also Plastikteilchen, die kleiner als fünf Millimeter sind. Sie entstehen zum Beispiel, wenn größere Plastikteile in der Umwelt zerfallen, oder werden absichtlich für Kosmetik hergestellt. Eine besonders wichtige Quelle ist der Abrieb von Autoreifen.\n\nMikroplastik wurde inzwischen fast überall nachgewiesen, sogar im menschlichen Blut. Welche Folgen das für die Gesundheit hat, ist noch weitgehend unklar. Laborversuche deuten darauf hin, dass sehr kleine Teilchen Entzündungen auslösen können. Ob die im Alltag aufgenommenen Mengen dafür ausreichen, lässt sich aber nicht sicher sagen.\n\nEin zusätzliches Problem ist, dass es keine einheitliche Messmethode gibt. Deshalb lassen sich die Ergebnisse verschiedener Studien nur schwer vergleichen. Eine Umweltchemikerin fasst den Stand so zusammen: Man weiß genug, um vorsichtig zu sein, aber zu wenig für Panik.',
        },
      ],
    },
  },
];
