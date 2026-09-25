import type { UnitSeed } from './chapter-beginner-1';

/**
 * Advanced, Kapitel 7: „Rhetorik und Argumentation“ (C2, Kapitel 1)
 *
 * Fünf Seiten. Kapitel 3 hat rhetorische Mittel erkennen lassen; hier geht
 * es um die Architektur eines Arguments selbst – woraus es besteht, wo es
 * bricht und wie man spontan auf Einwände reagiert.
 *
 * Aufbau: Seite 1 zerlegt ein Argument in These, Begründung, Beleg und
 * Schlussregel. Seite 2 behandelt Trugschlüsse, Seite 3 das Reagieren auf
 * Einwände, Seite 4 den Aufbau einer freien Rede, Seite 5 Wiederholung und
 * eigene Rede.
 *
 * Personen und Anlässe sind erfunden. Sämtliche Texte sind eigenständig
 * verfasst.
 */
const v = 1;

export const ADVANCED_7_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – die Bauteile eines Arguments.
  {
    order: 1,
    title: 'Woraus ein Argument besteht',
    subtitle: 'These, Begründung, Beleg, Schlussregel',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'a7-1-h1', type: 'HEADING', level: 1, text: 'Woraus ein Argument besteht' },
        {
          id: 'a7-1-intro',
          type: 'TEXT',
          text: '„Wir sollten die Bibliothek länger öffnen, weil die Studierenden abends lernen wollen.“ Das klingt wie ein vollständiges Argument, enthält aber eine unausgesprochene Annahme: dass die Studierenden dafür die Bibliothek brauchen und nicht ebenso gut zu Hause lernen könnten. Wer ein Argument prüfen oder angreifen will, muss es erst in seine Teile zerlegen.',
        },
        {
          id: 'a7-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: Argumentation',
          items: [
            {
              term: 'These',
              article: 'die',
              plural: 'die Thesen',
              translations: { en: 'claim, thesis', es: 'la tesis', fr: 'la thèse', it: 'la tesi' },
            },
            {
              term: 'Begründung',
              article: 'die',
              translations: { en: 'reason, justification', es: 'la justificación', fr: 'la justification', it: 'la motivazione' },
            },
            {
              term: 'Beleg',
              article: 'der',
              plural: 'die Belege',
              translations: { en: 'evidence', es: 'la prueba', fr: 'la preuve', it: 'la prova' },
            },
            {
              term: 'Prämisse',
              article: 'die',
              plural: 'die Prämissen',
              translations: { en: 'premise', es: 'la premisa', fr: 'la prémisse', it: 'la premessa' },
            },
            {
              term: 'Einwand',
              article: 'der',
              plural: 'die Einwände',
              translations: { en: 'objection', es: 'la objeción', fr: 'l’objection', it: 'l’obiezione' },
            },
            {
              term: 'entkräften',
              translations: { en: 'to refute, to invalidate', es: 'rebatir', fr: 'réfuter', it: 'confutare' },
            },
            {
              term: 'stichhaltig',
              translations: { en: 'sound, valid', es: 'sólido, convincente', fr: 'pertinent, solide', it: 'fondato' },
            },
            {
              term: 'etwas voraussetzen',
              translations: { en: 'to presuppose', es: 'presuponer', fr: 'présupposer', it: 'presupporre' },
            },
            {
              term: 'schlüssig',
              translations: { en: 'coherent, conclusive', es: 'concluyente', fr: 'cohérent', it: 'coerente' },
            },
          ],
        },
        {
          id: 'a7-1-info-bauteile',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Die Bauteile',
          text: 'Die These ist die Behauptung, die bewiesen werden soll. Die Begründung sagt, warum sie gilt. Der Beleg stützt die Begründung mit Fakten, Zahlen oder Beispielen. Die Schlussregel – oft unausgesprochen – verbindet Begründung und These. Gerade sie ist die Schwachstelle vieler Argumente.',
          table: {
            headers: ['Bauteil', 'Beispiel'],
            rows: [
              ['These', 'Die Bibliothek sollte bis 24 Uhr öffnen.'],
              ['Begründung', 'Viele Studierende lernen abends.'],
              ['Beleg', 'In einer Umfrage gaben 62 % an, am liebsten nach 18 Uhr zu lernen.'],
              ['Schlussregel', 'Wer abends lernt, braucht dafür einen ruhigen Ort außerhalb der Wohnung.'],
            ],
          },
        },
        {
          id: 'a7-1-match',
          type: 'MATCHING',
          instruction: 'Welches Bauteil ist das?',
          left: [
            { id: 'l1', text: 'Die Stadt sollte eine Fahrradstraße einrichten.' },
            { id: 'l2', text: 'Auf der Strecke fahren morgens mehr Räder als Autos.' },
            { id: 'l3', text: 'Die Zählung vom Mai ergab 1200 Räder und 900 Autos.' },
            { id: 'l4', text: 'Verkehrsflächen sollten dem häufigsten Verkehrsmittel dienen.' },
          ],
          right: [
            { id: 'r1', text: 'These' },
            { id: 'r2', text: 'Begründung' },
            { id: 'r3', text: 'Beleg' },
            { id: 'r4', text: 'Schlussregel' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'a7-1-choice',
          type: 'CHOICE',
          instruction: 'Wo ist das Argument angreifbar?',
          question: '„Wir sollten die Schulzeit um ein Jahr verlängern, denn in Ländern mit längerer Schulzeit sind die Schüler besser.“ Welche unausgesprochene Prämisse ist am fragwürdigsten?',
          multiple: false,
          options: [
            { id: 'c1', text: 'dass es Länder mit längerer Schulzeit gibt' },
            { id: 'c2', text: 'dass die bessere Leistung auf die längere Schulzeit zurückgeht und nicht auf andere Faktoren' },
            { id: 'c3', text: 'dass Schüler lernen sollen' },
            { id: 'c4', text: 'dass ein Schuljahr zwölf Monate hat' },
          ],
          solution: ['c2'],
          explanation:
            'Das Argument setzt voraus, dass die Schulzeit die Ursache ist. Ebenso gut könnten Lehrerausbildung, Klassengröße oder Geld den Unterschied erklären. Hier ist die Schlussregel schwach.',
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – Trugschlüsse.
  {
    order: 2,
    title: 'Trugschlüsse',
    subtitle: 'Scheinbar logisch, tatsächlich falsch',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'a7-2-h1', type: 'HEADING', level: 1, text: 'Trugschlüsse' },
        {
          id: 'a7-2-intro',
          type: 'TEXT',
          text: 'Ein Trugschluss sieht aus wie ein Argument, ist aber keins. Seine Wirkung beruht darauf, dass man ihn nicht bemerkt. Wer ihn benennen kann, gewinnt in einer Diskussion viel – allerdings nur, wenn er ihn in normaler Sprache entlarvt, nicht mit Fachbegriffen, die nach Oberlehrer klingen.',
        },
        {
          id: 'a7-2-info-liste',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Sechs verbreitete Trugschlüsse',
          text: 'Die meisten Trugschlüsse lenken vom Argument ab oder vereinfachen unzulässig. Achten Sie auf typische Formulierungen, die sie verraten.',
          table: {
            headers: ['Trugschluss', 'Mechanismus', 'Signal'],
            rows: [
              ['Angriff auf die Person', 'die Person statt des Arguments angreifen', 'Ausgerechnet Sie wollen …?'],
              ['Strohmann', 'die Gegenposition verzerren', 'Sie wollen also …'],
              ['falsches Dilemma', 'nur zwei Möglichkeiten zulassen', 'Entweder … oder …'],
              ['Dammbruch', 'unbelegte Folgekette', 'Heute …, morgen …'],
              ['voreilige Verallgemeinerung', 'von wenigen Fällen auf alle schließen', 'Ich kenne einen, der …'],
              ['Scheinautorität', 'Berufung auf jemanden ohne Fachkenntnis', 'Sogar ein bekannter Schauspieler sagt …'],
            ],
          },
        },
        {
          id: 'a7-2-match',
          type: 'MATCHING',
          instruction: 'Welcher Trugschluss liegt vor?',
          left: [
            { id: 'l1', text: 'Wenn wir heute Tempo 30 einführen, verbieten sie morgen das Auto.' },
            { id: 'l2', text: 'Ausgerechnet Sie reden über Sparsamkeit, mit Ihrem Dienstwagen?' },
            { id: 'l3', text: 'Sie wollen also, dass niemand mehr in die Innenstadt fahren darf.' },
            { id: 'l4', text: 'Entweder wir bauen die Umgehungsstraße, oder das Dorf stirbt.' },
            { id: 'l5', text: 'Mein Nachbar hat nie geimpft und war nie krank – Impfungen sind überflüssig.' },
          ],
          right: [
            { id: 'r1', text: 'Dammbruch' },
            { id: 'r2', text: 'Angriff auf die Person' },
            { id: 'r3', text: 'Strohmann' },
            { id: 'r4', text: 'falsches Dilemma' },
            { id: 'r5', text: 'voreilige Verallgemeinerung' },
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
          id: 'a7-2-info-reagieren',
          type: 'INFO',
          variant: 'TIP',
          title: 'Trugschlüsse entlarven',
          text: 'Zeigen Sie den Mechanismus mit einfachen Worten. Beim Strohmann: „Das habe ich nicht gesagt. Ich habe gesagt, …“ Beim falschen Dilemma: „Es gibt mehr als diese beiden Möglichkeiten.“ Beim Angriff auf die Person: „Mein Auto ändert nichts an den Zahlen.“',
        },
        {
          id: 'a7-2-choice',
          type: 'CHOICE',
          instruction: 'Welche Reaktion entlarvt den Trugschluss am wirkungsvollsten?',
          question: '„Sie wollen also, dass Kinder gar keine Hausaufgaben mehr bekommen.“ (Sie hatten nur weniger Hausaufgaben gefordert.)',
          multiple: false,
          options: [
            { id: 'd1', text: 'Das ist ein Strohmann-Argument, ein klassischer Trugschluss.' },
            { id: 'd2', text: 'Das habe ich nicht gesagt. Ich habe gesagt: weniger, aber sinnvollere Hausaufgaben.' },
            { id: 'd3', text: 'Sie verstehen sowieso nichts von Pädagogik.' },
            { id: 'd4', text: 'Na gut, dann eben gar keine.' },
          ],
          solution: ['d2'],
          explanation:
            'Die zweite Reaktion stellt die eigene Position richtig und entzieht der Verzerrung so den Boden. Die erste stimmt, klingt aber belehrend; die dritte begeht selbst einen Trugschluss.',
        },
        {
          id: 'a7-2-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie.',
          wordBank: ['Dilemma', 'Strohmann', 'Person', 'Verallgemeinerung'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Wer die Gegenposition verzerrt, baut einen ' },
            { kind: 'GAP', gapId: 't1', solution: ['Strohmann'], width: 10 },
            { kind: 'TEXT', text: '. Wer nur zwei Möglichkeiten zulässt, konstruiert ein falsches ' },
            { kind: 'GAP', gapId: 't2', solution: ['Dilemma'], width: 8 },
            { kind: 'TEXT', text: '. Wer den Sprecher statt des Arguments angreift, zielt auf die ' },
            { kind: 'GAP', gapId: 't3', solution: ['Person'], width: 7 },
            { kind: 'TEXT', text: '. Und wer von einem Fall auf alle schließt, begeht eine voreilige ' },
            { kind: 'GAP', gapId: 't4', solution: ['Verallgemeinerung'], width: 18 },
            { kind: 'TEXT', text: '.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – auf Einwände reagieren.
  {
    order: 3,
    title: 'Da haben Sie einen Punkt',
    subtitle: 'Spontan auf Einwände reagieren',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'a7-3-h1', type: 'HEADING', level: 1, text: 'Da haben Sie einen Punkt' },
        {
          id: 'a7-3-intro',
          type: 'TEXT',
          text: 'Wer in einer Diskussion jeden Einwand abwehrt, wirkt starr. Wer jeden Einwand gelten lässt, wirkt beliebig. Souverän ist, wer unterscheidet: Was am Einwand trifft zu, und warum ändert das nichts – oder nur wenig – an der eigenen Position? Dieses Einräumen mit anschließender Wendung ist die wichtigste Technik der mündlichen Argumentation.',
        },
        {
          id: 'a7-3-info-technik',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Einräumen und wenden',
          text: 'Die Struktur lautet: Zugeständnis + Wendung + eigene Position. Die Wendung wird mit „aber“, „allerdings“, „nur“ oder „doch“ markiert. Auf C2-Niveau gehört auch die Umdeutung dazu: den Einwand aufnehmen und als Argument für die eigene Seite nutzen.',
          table: {
            headers: ['Technik', 'Redemittel'],
            rows: [
              ['Zugeständnis', 'Da haben Sie einen Punkt. / Das ist nicht von der Hand zu weisen.'],
              ['Wendung', 'Nur: … / Allerdings übersehen Sie, dass …'],
              ['Umdeutung', 'Gerade deshalb … / Genau das spricht für …'],
              ['Präzisierung', 'Es geht mir nicht um …, sondern um …'],
              ['Rückfrage', 'Wie meinen Sie das genau? / Worauf stützen Sie das?'],
            ],
          },
        },
        {
          id: 'a7-3-dialogue',
          type: 'DIALOGUE',
          title: 'Eine Podiumsdiskussion',
          lines: [
            { speaker: 'Frau Aydin', text: 'Die Vier-Tage-Woche würde vielen Beschäftigten guttun.' },
            { speaker: 'Herr Lorenz', text: 'Und wer bezahlt das? Kleine Betriebe können sich das nicht leisten.' },
            { speaker: 'Frau Aydin', text: 'Da haben Sie einen Punkt – für einen Handwerksbetrieb mit drei Leuten ist das eine andere Rechnung als für einen Konzern.' },
            { speaker: 'Frau Aydin', text: 'Gerade deshalb schlage ich ja kein Gesetz vor, sondern Pilotprojekte, bei denen die Betriebe selbst entscheiden.' },
            { speaker: 'Herr Lorenz', text: 'Pilotprojekte gab es schon. Die Ergebnisse sind gemischt.' },
            { speaker: 'Frau Aydin', text: 'Worauf stützen Sie das? Die Studien, die ich kenne, zeigen eher das Gegenteil.' },
          ],
        },
        {
          id: 'a7-3-match',
          type: 'MATCHING',
          instruction: 'Welche Technik verwendet Frau Aydin?',
          left: [
            { id: 'l1', text: 'Da haben Sie einen Punkt …' },
            { id: 'l2', text: 'Gerade deshalb schlage ich … Pilotprojekte vor.' },
            { id: 'l3', text: 'Worauf stützen Sie das?' },
          ],
          right: [
            { id: 'r1', text: 'Zugeständnis' },
            { id: 'r2', text: 'Umdeutung' },
            { id: 'r3', text: 'Rückfrage nach Belegen' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
          ],
        },
        {
          id: 'a7-3-choice',
          type: 'CHOICE',
          instruction: 'Wählen Sie die souveränste Reaktion.',
          question: 'Sie fordern mehr Radwege. Einwand: „Im Winter fährt doch kaum jemand Rad.“',
          multiple: false,
          options: [
            { id: 'q1', text: 'Das stimmt nicht.' },
            { id: 'q2', text: 'Das ist nicht von der Hand zu weisen. Allerdings fahren gerade im Winter nur die wenigen, die sich auf den schlechten Wegen trauen – sichere Wege würden das ändern.' },
            { id: 'q3', text: 'Dann eben keine Radwege.' },
            { id: 'q4', text: 'Sie fahren ja selbst nie Rad.' },
          ],
          solution: ['q2'],
          explanation:
            'Die zweite Antwort räumt ein, wendet und deutet den Einwand um: Der geringe Winterverkehr ist eher ein Argument für sichere Wege. Die vierte greift die Person an.',
        },
        {
          id: 'a7-3-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die Reaktion.',
          wordBank: ['Punkt', 'übersehen', 'Gerade', 'sondern'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Da haben Sie einen ' },
            { kind: 'GAP', gapId: 'k1', solution: ['Punkt'], width: 6 },
            { kind: 'TEXT', text: '. Allerdings ' },
            { kind: 'GAP', gapId: 'k2', solution: ['übersehen'], width: 10 },
            { kind: 'TEXT', text: ' Sie, dass die Kosten langfristig sinken. ' },
            { kind: 'GAP', gapId: 'k3', solution: ['Gerade'], width: 7 },
            { kind: 'TEXT', text: ' deshalb lohnt sich die Investition. Es geht mir nicht um schnelle Gewinne, ' },
            { kind: 'GAP', gapId: 'k4', solution: ['sondern'], width: 8 },
            { kind: 'TEXT', text: ' um Stabilität.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – eine freie Rede aufbauen.
  {
    order: 4,
    title: 'Frei sprechen',
    subtitle: 'Eine Rede aufbauen',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'a7-4-h1', type: 'HEADING', level: 1, text: 'Frei sprechen' },
        {
          id: 'a7-4-intro',
          type: 'TEXT',
          text: 'Eine überzeugende Rede lebt nicht von der Zahl ihrer Argumente, sondern von ihrer Ordnung. Ein bewährtes Muster ist der Fünfsatz: fünf Schritte, die man sich auch ohne Manuskript merken kann – und die eine Rede auf einen einzigen Zielsatz hinführen.',
        },
        {
          id: 'a7-4-info-fuenfsatz',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Der Fünfsatz',
          text: 'Am häufigsten ist die Kette: Einstieg, drei Argumente in steigender Stärke, Zielsatz. Andere Varianten stellen zwei Positionen gegenüber und führen zu einer Synthese. Der Zielsatz muss konkret sein – eine Handlung, zu der das Publikum aufgefordert wird.',
          table: {
            headers: ['Schritt', 'Funktion', 'Beispiel'],
            rows: [
              ['1 Einstieg', 'Aufmerksamkeit, Anlass', 'Letzte Woche stand ich 40 Minuten im Stau – vor der Schule meiner Tochter.'],
              ['2 Argument', 'erster Grund', 'Elterntaxis gefährden die Kinder, die zu Fuß kommen.'],
              ['3 Argument', 'zweiter Grund', 'Sie verstopfen die Straßen für alle anderen.'],
              ['4 Argument', 'stärkster Grund', 'Kinder, die allein zur Schule gehen, werden selbstständiger.'],
              ['5 Zielsatz', 'Forderung', 'Deshalb bitte ich Sie: Richten Sie eine Hol- und Bringzone 300 Meter vor der Schule ein.'],
            ],
          },
        },
        {
          id: 'a7-4-ordering',
          type: 'ORDERING',
          instruction: 'Bringen Sie die Rede in die Reihenfolge des Fünfsatzes.',
          items: [
            { id: 'o1', text: 'Wussten Sie, dass unser Stadtpark jeden Sommer drei Wochen lang gesperrt ist – wegen Hitzeschäden?' },
            { id: 'o2', text: 'Erstens spenden Bäume Schatten und senken die Temperatur spürbar.' },
            { id: 'o3', text: 'Zweitens speichern sie Wasser, das bei Starkregen sonst die Keller flutet.' },
            { id: 'o4', text: 'Vor allem aber brauchen Ältere und Kinder kühle Orte, an denen sie sich aufhalten können.' },
            { id: 'o5', text: 'Ich bitte Sie deshalb: Stimmen Sie heute für 500 neue Bäume.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5'],
        },
        {
          id: 'a7-4-info-sprechen',
          type: 'INFO',
          variant: 'TIP',
          title: 'Sprechsprache ist nicht Schreibsprache',
          text: 'Beim Sprechen gelten andere Regeln als beim Schreiben: kürzere Sätze, weniger Nominalstil, mehr Wiederholung. Ein Satz, den man zweimal lesen müsste, ist beim Hören verloren. Pausen sind kein Zeichen von Unsicherheit, sondern geben dem Publikum Zeit.',
          table: {
            headers: ['Schreibstil', 'Sprechstil'],
            rows: [
              ['Die Durchführung einer Befragung ergab …', 'Wir haben gefragt. Das Ergebnis: …'],
              ['aufgrund der gestiegenen Kosten', 'weil die Kosten gestiegen sind'],
              ['Es ist festzustellen, dass …', 'Eins ist klar: …'],
            ],
          },
        },
        {
          id: 'a7-4-choice',
          type: 'CHOICE',
          instruction: 'Welcher Zielsatz ist am wirkungsvollsten?',
          question: 'Wählen Sie.',
          multiple: false,
          options: [
            { id: 'z1', text: 'Man sollte vielleicht über das Thema nachdenken.' },
            { id: 'z2', text: 'Das Thema ist wichtig.' },
            { id: 'z3', text: 'Unterschreiben Sie heute die Petition für die Buslinie 12 – die Listen liegen am Ausgang.' },
            { id: 'z4', text: 'Vielen Dank.' },
          ],
          solution: ['z3'],
          explanation:
            'Ein Zielsatz fordert zu einer konkreten, sofort möglichen Handlung auf. Vage Appelle („nachdenken“) verpuffen.',
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – Wiederholung und eigene Rede.
  {
    order: 5,
    title: 'Überzeugen',
    subtitle: 'Wiederholung und eigene Rede',
    estimatedMinutes: 34,
    content: {
      version: v,
      blocks: [
        { id: 'a7-5-h1', type: 'HEADING', level: 1, text: 'Überzeugen' },
        {
          id: 'a7-5-intro',
          type: 'TEXT',
          text: 'Überzeugen ist nicht Überreden. Wer überredet, erreicht Zustimmung für den Moment, oft mit Tricks. Wer überzeugt, erreicht, dass das Publikum die Gründe selbst nachvollziehen kann und auch morgen noch zustimmt. Die Werkzeuge dieses Kapitels – saubere Argumente, das Vermeiden von Trugschlüssen, der faire Umgang mit Einwänden – dienen dem Überzeugen.',
        },
        {
          id: 'a7-5-match',
          type: 'MATCHING',
          instruction: 'Überzeugen oder überreden?',
          left: [
            { id: 'l1', text: 'Die Rednerin nennt Belege und räumt eine Schwäche ihres Vorschlags ein.' },
            { id: 'l2', text: 'Der Redner stellt den Gegner als lächerlich dar und wiederholt eine Parole.' },
            { id: 'l3', text: 'Die Rednerin erklärt, unter welchen Bedingungen ihre Forderung nicht gelten würde.' },
            { id: 'l4', text: 'Der Redner behauptet, es gebe nur seine Lösung oder das Chaos.' },
          ],
          right: [
            { id: 'r1', text: 'überzeugen: nachvollziehbar belegen' },
            { id: 'r2', text: 'überreden: abwerten statt argumentieren' },
            { id: 'r3', text: 'überzeugen: Grenzen offenlegen' },
            { id: 'r4', text: 'überreden: falsches Dilemma' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'a7-5-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die Zusammenfassung des Kapitels.',
          wordBank: ['Schlussregel', 'Strohmann', 'einräumen', 'Fünfsatz', 'Zielsatz', 'überzeugt'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Die unausgesprochene ' },
            { kind: 'GAP', gapId: 'z1', solution: ['Schlussregel'], width: 13 },
            { kind: 'TEXT', text: ' ist oft die Schwachstelle eines Arguments. Wer die Gegenposition verzerrt, baut einen ' },
            { kind: 'GAP', gapId: 'z2', solution: ['Strohmann'], width: 10 },
            { kind: 'TEXT', text: '. Auf Einwände reagiert man souverän, indem man ' },
            { kind: 'GAP', gapId: 'z3', solution: ['einräumen'], width: 10 },
            { kind: 'TEXT', text: ' und wenden verbindet. Der ' },
            { kind: 'GAP', gapId: 'z4', solution: ['Fünfsatz'], width: 9 },
            { kind: 'TEXT', text: ' führt eine Rede auf einen ' },
            { kind: 'GAP', gapId: 'z5', solution: ['Zielsatz'], width: 9 },
            { kind: 'TEXT', text: ' hin. Wer ' },
            { kind: 'GAP', gapId: 'z6', solution: ['überzeugt'], width: 10 },
            { kind: 'TEXT', text: ', erreicht Zustimmung auch über den Moment hinaus.' },
          ],
        },
        {
          id: 'a7-5-writing',
          type: 'WRITING',
          instruction: 'Schreiben Sie eine Rede.',
          prompt:
            'Ihre Hochschule überlegt, die Mensa am Abend zu schließen, um Kosten zu sparen. Schreiben Sie eine Rede für die Sitzung des Studierendenparlaments (220–300 Wörter) nach dem Fünfsatz. Nehmen Sie mindestens einen erwarteten Einwand auf (Zugeständnis, Wendung, Umdeutung) und enden Sie mit einem konkreten Zielsatz. Schreiben Sie in Sprechsprache.',
          minWords: 220,
          maxWords: 310,
          aiFeedback: true,
          sampleAnswer:
            'Liebe Kommilitoninnen und Kommilitonen,\n\nes ist Dienstag, 19 Uhr. Die letzte Vorlesung ist gerade vorbei, das Labor schließt um 22 Uhr. Wo essen Sie zu Abend? Bisher lautete die Antwort: in der Mensa. Nach dem Plan der Verwaltung lautet sie ab Oktober: nirgendwo.\n\nIch will drei Gründe nennen, warum das ein Fehler ist.\n\nErstens: Viele von uns haben abends Veranstaltungen. Wer um sechs noch im Hörsaal sitzt, kann nicht nach Hause fahren, kochen und zurückkommen.\n\nZweitens: Die Mensa ist für viele die einzige warme Mahlzeit, die sie sich leisten können. Ein Essen für drei Euro gibt es in der Stadt nicht.\n\nDrittens, und das ist mir am wichtigsten: Die Mensa ist abends ein Ort, an dem man sich trifft. Wer neu in der Stadt ist, findet dort Anschluss.\n\nNun wird die Verwaltung sagen: Abends kommen zu wenige, das rechnet sich nicht. Da hat sie einen Punkt. Nur: Abends gibt es seit zwei Jahren nur noch ein einziges Gericht. Kein Wunder, dass wenige kommen! Gerade deshalb schlage ich vor, das Angebot nicht zu streichen, sondern zu verbessern – mit einer kleinen, günstigen Abendkarte.\n\nEs geht mir nicht darum, dass alles bleibt, wie es ist. Es geht darum, dass niemand hungrig im Labor sitzt.\n\nDeshalb bitte ich Sie: Stimmen Sie heute für unseren Antrag, die Abendmensa ein Semester lang mit neuem Angebot zu testen. Danach entscheiden wir auf Grundlage von Zahlen – nicht von Vermutungen.\n\nVielen Dank.',
        },
      ],
    },
  },
];
