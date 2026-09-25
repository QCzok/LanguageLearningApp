import type { UnitSeed } from './chapter-beginner-1';

/**
 * Advanced, Kapitel 11: „Diskurs und Debatte“ (C2, Kapitel 5)
 *
 * Fünf Seiten. Nach dem Überzeugen (Kapitel 7) das Gegenteil: nicht Partei
 * ergreifen. Wer moderiert oder vermittelt, braucht eine Sprache, die
 * steuert, ohne zu werten. Der Konjunktiv I aus Kapitel 2 kehrt hier im
 * Protokoll zurück.
 *
 * Aufbau: Seite 1 die Moderation eröffnen und strukturieren, Seite 2
 * Gesprächsverhalten steuern (unterbrechen, zurückführen), Seite 3 neutral
 * zusammenfassen, Seite 4 zwischen Positionen vermitteln, Seite 5 das
 * Ergebnisprotokoll.
 *
 * Diskussionen und Personen sind erfunden. Sämtliche Texte sind
 * eigenständig verfasst.
 */
const v = 1;

export const ADVANCED_11_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – eine Diskussion eröffnen und strukturieren.
  {
    order: 1,
    title: 'Ich begrüße Sie herzlich',
    subtitle: 'Eine Diskussion eröffnen und leiten',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'a11-1-h1', type: 'HEADING', level: 1, text: 'Ich begrüße Sie herzlich' },
        {
          id: 'a11-1-intro',
          type: 'TEXT',
          text: 'Eine gute Moderatorin fällt kaum auf. Sie gewinnt keine Debatte, sie ermöglicht sie: Sie eröffnet, verteilt das Wort, hält die Zeit ein, führt zum Thema zurück und fasst zusammen. Ihre wichtigste Eigenschaft ist die Unparteilichkeit – und die zeigt sich vor allem in der Sprache.',
        },
        {
          id: 'a11-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: Diskussion',
          items: [
            {
              term: 'Moderation',
              article: 'die',
              translations: { en: 'moderation, chairing', es: 'la moderación', fr: 'l’animation', it: 'la moderazione' },
            },
            {
              term: 'Wortmeldung',
              article: 'die',
              plural: 'die Wortmeldungen',
              translations: { en: 'request to speak', es: 'la petición de palabra', fr: 'la demande de parole', it: 'la richiesta di parola' },
            },
            {
              term: 'das Wort erteilen',
              translations: { en: 'to give the floor', es: 'dar la palabra', fr: 'donner la parole', it: 'dare la parola' },
            },
            {
              term: 'Standpunkt',
              article: 'der',
              plural: 'die Standpunkte',
              translations: { en: 'point of view', es: 'el punto de vista', fr: 'le point de vue', it: 'il punto di vista' },
            },
            {
              term: 'Tagesordnung',
              article: 'die',
              translations: { en: 'agenda', es: 'el orden del día', fr: 'l’ordre du jour', it: 'l’ordine del giorno' },
            },
            {
              term: 'unparteiisch',
              translations: { en: 'impartial', es: 'imparcial', fr: 'impartial', it: 'imparziale' },
            },
            {
              term: 'Konsens',
              article: 'der',
              translations: { en: 'consensus', es: 'el consenso', fr: 'le consensus', it: 'il consenso' },
            },
            {
              term: 'Kompromiss',
              article: 'der',
              plural: 'die Kompromisse',
              translations: { en: 'compromise', es: 'el compromiso, el acuerdo', fr: 'le compromis', it: 'il compromesso' },
            },
            {
              term: 'beim Thema bleiben',
              translations: { en: 'to stay on topic', es: 'no salirse del tema', fr: 'rester dans le sujet', it: 'restare in tema' },
            },
            {
              term: 'hitzig',
              translations: { en: 'heated', es: 'acalorado', fr: 'animé, houleux', it: 'acceso' },
            },
          ],
        },
        {
          id: 'a11-1-info-eroeffnung',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Redemittel der Moderation',
          text: 'Die Moderation verwendet häufig das inklusive „wir“ und unpersönliche Formulierungen („Es wurde gesagt, …“). Das „ich“ bleibt für Verfahrensentscheidungen reserviert: „Ich schlage vor, dass wir …“.',
          table: {
            headers: ['Funktion', 'Redemittel'],
            rows: [
              ['eröffnen', 'Ich begrüße Sie herzlich zu unserer Diskussion über …'],
              ['Regeln nennen', 'Jeder hat zunächst drei Minuten für ein Eingangsstatement.'],
              ['das Wort erteilen', 'Frau Weber, Sie haben das Wort.'],
              ['überleiten', 'Damit kommen wir zum zweiten Punkt.'],
              ['abschließen', 'Ich danke Ihnen allen für die lebhafte Diskussion.'],
            ],
          },
        },
        {
          id: 'a11-1-match',
          type: 'MATCHING',
          instruction: 'Welche Funktion hat der Satz?',
          left: [
            { id: 'l1', text: 'Herr Özdemir, bitte.' },
            { id: 'l2', text: 'Wir haben zwei Stunden, danach ist das Publikum an der Reihe.' },
            { id: 'l3', text: 'Kommen wir damit zur Frage der Finanzierung.' },
            { id: 'l4', text: 'Ich danke Ihnen für Ihre Beiträge.' },
          ],
          right: [
            { id: 'r1', text: 'das Wort erteilen' },
            { id: 'r2', text: 'Regeln nennen' },
            { id: 'r3', text: 'überleiten' },
            { id: 'r4', text: 'abschließen' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'a11-1-choice',
          type: 'CHOICE',
          instruction: 'Welche Reaktion ist unparteiisch?',
          question: 'Ein Teilnehmer hat gerade seinen Standpunkt dargelegt.',
          multiple: false,
          options: [
            { id: 'c1', text: 'Sehr überzeugend! Frau Klein, was sagen Sie dazu?' },
            { id: 'c2', text: 'Danke. Frau Klein, wie sehen Sie das?' },
            { id: 'c3', text: 'Frau Klein, Sie sind da sicher ganz anderer Meinung, oder?' },
            { id: 'c4', text: 'Na ja. Frau Klein, bitte.' },
          ],
          solution: ['c2'],
          explanation:
            'Nur die zweite Reaktion bewertet nicht und stellt eine offene Frage. „Sehr überzeugend“ lobt, „na ja“ wertet ab, und die dritte legt Frau Klein eine Antwort in den Mund.',
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – Gesprächsverhalten steuern.
  {
    order: 2,
    title: 'Darf ich Sie kurz unterbrechen?',
    subtitle: 'Gesprächsverhalten steuern',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'a11-2-h1', type: 'HEADING', level: 1, text: 'Darf ich Sie kurz unterbrechen?' },
        {
          id: 'a11-2-intro',
          type: 'TEXT',
          text: 'Die schwierigsten Momente einer Moderation: Jemand redet zu lange, zwei fallen sich ins Wort, einer schweift ab. Die Moderatorin muss eingreifen – bestimmt, aber ohne jemanden bloßzustellen. Der Schlüssel liegt in der Abschwächung: Konjunktiv II, Modalpartikeln, und die Begründung mit Regeln statt mit Inhalten.',
        },
        {
          id: 'a11-2-info-steuern',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Eingreifen mit Höflichkeit',
          text: 'Die Formulierungen reichen von sanft bis bestimmt. „mal“ und „kurz“ mildern, der Konjunktiv II („Könnten Sie …?“, „Ich würde gern …“) macht aus einer Anweisung eine Bitte. Begründungen wie „aus Zeitgründen“ oder „damit alle zu Wort kommen“ richten sich gegen die Situation, nicht gegen die Person.',
          table: {
            headers: ['Situation', 'Redemittel'],
            rows: [
              ['zu lang', 'Darf ich Sie kurz unterbrechen? Wir müssen auf die Zeit achten.'],
              ['ins Wort fallen', 'Moment, bitte – lassen wir Frau Weber erst ausreden.'],
              ['abschweifen', 'Das ist ein wichtiger Punkt, aber ich würde gern zum Thema zurückkommen.'],
              ['Schweigende einbeziehen', 'Herr Braun, wir haben von Ihnen noch nichts gehört.'],
              ['zum Ende kommen', 'Könnten Sie bitte zum Schluss kommen?'],
            ],
          },
        },
        {
          id: 'a11-2-dialogue',
          type: 'DIALOGUE',
          title: 'Eine Elternversammlung',
          lines: [
            { speaker: 'Herr Bauer', text: '… und außerdem ist die Turnhalle seit Jahren marode, und die Toiletten erst, und im letzten Winter …' },
            { speaker: 'Moderatorin', text: 'Herr Bauer, darf ich Sie kurz unterbrechen? Die Turnhalle ist ein wichtiges Thema, aber heute geht es um den Ganztag. Ich nehme den Punkt gern für die nächste Sitzung auf.' },
            { speaker: 'Frau Yilmaz', text: 'Ganz genau, das gehört hier nicht –' },
            { speaker: 'Moderatorin', text: 'Einen Moment, Frau Yilmaz, gleich sind Sie dran. Herr Bauer, möchten Sie noch etwas zum Ganztag sagen?' },
            { speaker: 'Herr Bauer', text: 'Nur, dass wir mehr Betreuer brauchen.' },
            { speaker: 'Moderatorin', text: 'Danke. Frau Yilmaz, bitte.' },
          ],
        },
        {
          id: 'a11-2-match',
          type: 'MATCHING',
          instruction: 'Was tut die Moderatorin?',
          left: [
            { id: 'l1', text: 'Ich nehme den Punkt gern für die nächste Sitzung auf.' },
            { id: 'l2', text: 'Einen Moment, Frau Yilmaz, gleich sind Sie dran.' },
            { id: 'l3', text: 'Herr Bauer, möchten Sie noch etwas zum Ganztag sagen?' },
          ],
          right: [
            { id: 'r1', text: 'einen Beitrag würdigen, aber vertagen' },
            { id: 'r2', text: 'eine Unterbrechung abwehren' },
            { id: 'r3', text: 'zum Thema zurückführen' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
          ],
        },
        {
          id: 'a11-2-choice',
          type: 'CHOICE',
          instruction: 'Welche Formulierung ist am geschicktesten?',
          question: 'Ein Teilnehmer redet seit fünf Minuten.',
          multiple: false,
          options: [
            { id: 'd1', text: 'Sie reden zu viel.' },
            { id: 'd2', text: 'Hören Sie auf!' },
            { id: 'd3', text: 'Darf ich Sie bitten, zum Schluss zu kommen? Damit alle zu Wort kommen, müssen wir auf die Zeit achten.' },
            { id: 'd4', text: 'Das interessiert hier niemanden.' },
          ],
          solution: ['d3'],
          explanation:
            'Die dritte Formulierung ist eine höfliche Bitte und begründet sie mit einer Regel, die für alle gilt. So fühlt sich der Redner nicht persönlich angegriffen.',
        },
        {
          id: 'a11-2-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie.',
          wordBank: ['unterbrechen', 'ausreden', 'zurückkommen', 'Könnten'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Darf ich Sie kurz ' },
            { kind: 'GAP', gapId: 'k1', solution: ['unterbrechen'], width: 13 },
            { kind: 'TEXT', text: '? Lassen wir Frau Lang bitte erst ' },
            { kind: 'GAP', gapId: 'k2', solution: ['ausreden'], width: 9 },
            { kind: 'TEXT', text: '. Ich würde gern zum eigentlichen Thema ' },
            { kind: 'GAP', gapId: 'k3', solution: ['zurückkommen'], width: 13 },
            { kind: 'TEXT', text: '. ' },
            { kind: 'GAP', gapId: 'k4', solution: ['Könnten'], width: 8 },
            { kind: 'TEXT', text: ' Sie bitte zum Schluss kommen?' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – neutral zusammenfassen.
  {
    order: 3,
    title: 'Wenn ich Sie richtig verstanden habe',
    subtitle: 'Neutral zusammenfassen',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'a11-3-h1', type: 'HEADING', level: 1, text: 'Wenn ich Sie richtig verstanden habe' },
        {
          id: 'a11-3-intro',
          type: 'TEXT',
          text: 'Eine Zusammenfassung ist nie ganz neutral: Schon die Auswahl, die Reihenfolge und die einleitenden Verben verraten eine Haltung. Wer moderiert, muss deshalb besonders darauf achten, beide Seiten gleich ausführlich und mit gleich neutralen Verben wiederzugeben – und am besten gleich im Konjunktiv I.',
        },
        {
          id: 'a11-3-info-neutral',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Fallen der Zusammenfassung',
          text: 'Wertende Verben („behauptet“, „beharrt darauf“), wertende Adjektive („ein stichhaltiges Argument“) und die Stellung (wer zuletzt genannt wird, scheint recht zu haben) machen eine Zusammenfassung parteiisch. Parallele Satzbauten („Frau A ist der Ansicht, … Herr B hingegen ist der Ansicht, …“) machen die Gleichbehandlung sichtbar.',
          table: {
            headers: ['parteiisch', 'neutral'],
            rows: [
              ['Herr Groß beharrt darauf, dass …', 'Herr Groß ist der Ansicht, dass …'],
              ['Frau Kim hat überzeugend dargelegt, …', 'Frau Kim hat dargelegt, …'],
              ['Zwar sagt A …, aber B zeigt …', 'A vertritt …; B hingegen vertritt …'],
            ],
          },
        },
        {
          id: 'a11-3-choice',
          type: 'CHOICE',
          instruction: 'Welche Zusammenfassung ist neutral?',
          question: 'Diskussion über ein neues Einkaufszentrum am Stadtrand.',
          multiple: false,
          options: [
            { id: 'n1', text: 'Der Investor verspricht Arbeitsplätze, während die Händler der Innenstadt jammern, sie würden verdrängt.' },
            { id: 'n2', text: 'Der Investor verweist auf 300 neue Arbeitsplätze; die Händler der Innenstadt befürchten hingegen, Kundschaft zu verlieren. Beide wünschen sich eine lebendige Stadt.' },
            { id: 'n3', text: 'Die Händler sind besorgt, aber der Investor weist überzeugend nach, dass alle profitieren.' },
            { id: 'n4', text: 'Wie immer sind die einen für Fortschritt und die anderen dagegen.' },
          ],
          solution: ['n2'],
          explanation:
            'Die zweite Zusammenfassung verwendet neutrale Verben, gibt beiden Seiten ähnlich viel Raum und nennt den gemeinsamen Nenner. „jammern“ und „weist überzeugend nach“ werten.',
        },
        {
          id: 'a11-3-match',
          type: 'MATCHING',
          instruction: 'Ordnen Sie dem wertenden Verb ein neutrales zu.',
          left: [
            { id: 'l1', text: 'beharrt darauf' },
            { id: 'l2', text: 'jammert' },
            { id: 'l3', text: 'behauptet' },
            { id: 'l4', text: 'muss zugeben' },
          ],
          right: [
            { id: 'r1', text: 'hält daran fest' },
            { id: 'r2', text: 'äußert Sorge' },
            { id: 'r3', text: 'ist der Ansicht' },
            { id: 'r4', text: 'räumt ein' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'a11-3-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die neutrale Zusammenfassung im Konjunktiv I.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Der Investor ist der Ansicht, das Zentrum ' },
            { kind: 'GAP', gapId: 's1', solution: ['schaffe'], hint: 'schaffen', width: 7 },
            { kind: 'TEXT', text: ' Arbeitsplätze. Die Händler hingegen befürchten, sie ' },
            { kind: 'GAP', gapId: 's2', solution: ['würden'], hint: 'Ersatzform mit verlieren', width: 8 },
            { kind: 'TEXT', text: ' Kundschaft verlieren. Beide Seiten betonen, die Innenstadt ' },
            { kind: 'GAP', gapId: 's3', solution: ['müsse'], hint: 'müssen', width: 6 },
            { kind: 'TEXT', text: ' attraktiv bleiben.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – zwischen Positionen vermitteln.
  {
    order: 4,
    title: 'Worum geht es Ihnen eigentlich?',
    subtitle: 'Zwischen Positionen vermitteln',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'a11-4-h1', type: 'HEADING', level: 1, text: 'Worum geht es Ihnen eigentlich?' },
        {
          id: 'a11-4-intro',
          type: 'TEXT',
          text: 'Zwei Nachbarn streiten über eine Hecke. Der eine will sie auf einen Meter kürzen, der andere will sie nicht anrühren. Das sind ihre Positionen. Fragt man nach, zeigt sich: Der erste möchte Sonne auf seiner Terrasse, der zweite möchte nicht, dass man ihm in den Garten schaut. Das sind ihre Interessen. Eine Hecke, die auf der Sonnenseite gekürzt und auf der anderen hoch bleibt, erfüllt beide. Vermitteln heißt: von den Positionen zu den Interessen kommen.',
        },
        {
          id: 'a11-4-info-techniken',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Techniken der Vermittlung',
          text: 'Das aktive Zuhören gibt das Gesagte in eigenen Worten wieder und nimmt ihm die Schärfe. Offene Fragen („Was ist Ihnen dabei wichtig?“) führen zu den Interessen. Gemeinsamkeiten zu benennen schafft Vertrauen, und hypothetische Fragen im Konjunktiv II eröffnen Lösungen, ohne jemanden festzulegen.',
          table: {
            headers: ['Technik', 'Redemittel'],
            rows: [
              ['aktiv zuhören', 'Wenn ich Sie richtig verstehe, geht es Ihnen um …'],
              ['nach Interessen fragen', 'Was genau ist Ihnen dabei wichtig?'],
              ['Gemeinsames benennen', 'Sie beide wollen offenbar, dass …'],
              ['Lösung öffnen', 'Wäre es denkbar, dass …? / Was wäre, wenn …?'],
              ['entschärfen', 'Ich verstehe, dass Sie das ärgert.'],
            ],
          },
        },
        {
          id: 'a11-4-match',
          type: 'MATCHING',
          instruction: 'Position und Interesse: Was könnte dahinterstehen?',
          left: [
            { id: 'l1', text: '„Ich will, dass die Musik im Hof verboten wird.“' },
            { id: 'l2', text: '„Ich arbeite ab sofort nicht mehr am Wochenende.“' },
            { id: 'l3', text: '„Ich will ein anderes Büro.“' },
          ],
          right: [
            { id: 'r1', text: 'nachts ungestört schlafen können' },
            { id: 'r2', text: 'Zeit mit der Familie verbringen' },
            { id: 'r3', text: 'nicht mehr mit einem bestimmten Kollegen zusammensitzen' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
          ],
        },
        {
          id: 'a11-4-choice',
          type: 'CHOICE',
          instruction: 'Wie reagiert eine gute Vermittlerin?',
          question: 'Eine Mieterin sagt wütend: „Der Typ über mir ist rücksichtslos! Jede Nacht Lärm bis zwei Uhr!“',
          multiple: false,
          options: [
            { id: 'q1', text: 'Da haben Sie recht, der ist wirklich rücksichtslos.' },
            { id: 'q2', text: 'So schlimm wird es schon nicht sein.' },
            { id: 'q3', text: 'Ich verstehe, dass Sie das ärgert. Wenn ich Sie richtig verstehe, brauchen Sie vor allem nachts Ruhe, um schlafen zu können.' },
            { id: 'q4', text: 'Warum haben Sie nicht früher etwas gesagt?' },
          ],
          solution: ['q3'],
          explanation:
            'Die dritte Reaktion nimmt das Gefühl ernst, lässt die Beleidigung weg und übersetzt die Beschwerde in ein Interesse, über das man verhandeln kann.',
        },
        {
          id: 'a11-4-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die Äußerungen der Vermittlerin.',
          wordBank: ['verstehe', 'wichtig', 'beide', 'Wäre'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Wenn ich Sie richtig ' },
            { kind: 'GAP', gapId: 'm1', solution: ['verstehe'], width: 9 },
            { kind: 'TEXT', text: ', geht es Ihnen um Ruhe. Was ist Ihnen dabei besonders ' },
            { kind: 'GAP', gapId: 'm2', solution: ['wichtig'], width: 8 },
            { kind: 'TEXT', text: '? Sie ' },
            { kind: 'GAP', gapId: 'm3', solution: ['beide'], width: 6 },
            { kind: 'TEXT', text: ' wollen offenbar ein gutes Verhältnis. ' },
            { kind: 'GAP', gapId: 'm4', solution: ['Wäre'], width: 5 },
            { kind: 'TEXT', text: ' es denkbar, dass unter der Woche ab 22 Uhr Ruhe herrscht?' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – das Ergebnisprotokoll.
  {
    order: 5,
    title: 'Das Protokoll',
    subtitle: 'Ergebnisse präzise festhalten',
    estimatedMinutes: 34,
    content: {
      version: v,
      blocks: [
        { id: 'a11-5-h1', type: 'HEADING', level: 1, text: 'Das Protokoll' },
        {
          id: 'a11-5-intro',
          type: 'TEXT',
          text: 'Am Ende einer Sitzung steht das Protokoll. Das Ergebnisprotokoll hält fest, was beschlossen wurde, wer was bis wann erledigt und welche Fragen offen sind. Es ist knapp, sachlich und neutral. Wo Meinungen wiedergegeben werden, steht der Konjunktiv I; Beschlüsse stehen im Indikativ, meist im Passiv.',
        },
        {
          id: 'a11-5-info-protokoll',
          type: 'INFO',
          variant: 'TIP',
          title: 'Bausteine eines Protokolls',
          text: 'Der Kopf nennt Anlass, Datum, Anwesende und Protokollführung. Die Tagesordnungspunkte (TOP) werden einzeln abgehandelt. Beschlüsse werden so formuliert, dass man sie später überprüfen kann: wer, was, bis wann.',
          table: {
            headers: ['Element', 'Formulierung'],
            rows: [
              ['Beschluss', 'Es wurde beschlossen, dass … / Der Antrag wurde mit 12 zu 3 Stimmen angenommen.'],
              ['Meinung', 'Frau Weber wies darauf hin, die Kosten seien zu hoch.'],
              ['Aufgabe', 'Herr Braun erstellt bis zum 15. März einen Kostenplan.'],
              ['offene Frage', 'Offen blieb, wie das Projekt finanziert werden soll.'],
              ['Vertagung', 'Der Punkt wurde auf die nächste Sitzung vertagt.'],
            ],
          },
        },
        {
          id: 'a11-5-ordering',
          type: 'ORDERING',
          instruction: 'Bringen Sie die Teile des Protokolls in die richtige Reihenfolge.',
          items: [
            { id: 'o1', text: 'Protokoll der Elternversammlung vom 12. Februar, 19–21 Uhr. Anwesend: 24 Eltern, Schulleitung.' },
            { id: 'o2', text: 'TOP 1: Die Schulleitung stellte das Konzept für den Ganztag vor.' },
            { id: 'o3', text: 'Mehrere Eltern wiesen darauf hin, es fehlten Betreuungskräfte.' },
            { id: 'o4', text: 'Es wurde beschlossen, eine Arbeitsgruppe einzurichten. Frau Yilmaz lädt bis zum 1. März ein.' },
            { id: 'o5', text: 'Der Zustand der Turnhalle wurde auf die nächste Sitzung vertagt.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5'],
        },
        {
          id: 'a11-5-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die Zusammenfassung des Kapitels.',
          wordBank: ['unparteiisch', 'unterbrechen', 'Konjunktiv I', 'Interessen', 'beschlossen', 'vertagt'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Eine Moderatorin ist ' },
            { kind: 'GAP', gapId: 'z1', solution: ['unparteiisch'], width: 13 },
            { kind: 'TEXT', text: '. Sie darf Redner höflich ' },
            { kind: 'GAP', gapId: 'z2', solution: ['unterbrechen'], width: 13 },
            { kind: 'TEXT', text: '. Meinungen gibt sie im ' },
            { kind: 'GAP', gapId: 'z3', solution: ['Konjunktiv I'], width: 13 },
            { kind: 'TEXT', text: ' wieder. Wer vermittelt, fragt hinter den Positionen nach den ' },
            { kind: 'GAP', gapId: 'z4', solution: ['Interessen'], width: 11 },
            { kind: 'TEXT', text: '. Im Protokoll steht, was ' },
            { kind: 'GAP', gapId: 'z5', solution: ['beschlossen'], width: 12 },
            { kind: 'TEXT', text: ' wurde und welcher Punkt ' },
            { kind: 'GAP', gapId: 'z6', solution: ['vertagt'], width: 8 },
            { kind: 'TEXT', text: ' wurde.' },
          ],
        },
        {
          id: 'a11-5-writing',
          type: 'WRITING',
          instruction: 'Schreiben Sie ein Ergebnisprotokoll.',
          prompt:
            'In einer Hausversammlung wurde über die Umgestaltung des Innenhofs diskutiert. Familien wünschen einen Spielplatz, ältere Bewohner fürchten Lärm und möchten Sitzbänke und Beete, ein Bewohner will Fahrradständer. Nach längerer Diskussion wurde beschlossen, den Hof zu teilen; die Kosten sind noch unklar. Schreiben Sie das Ergebnisprotokoll (180–250 Wörter) mit Kopf, neutraler Wiedergabe der Positionen im Konjunktiv I, Beschluss, Aufgaben mit Fristen und offener Frage.',
          minWords: 180,
          maxWords: 260,
          aiFeedback: true,
          sampleAnswer:
            'Protokoll der Hausversammlung\nLindenstraße 8, 3. April, 18:30–20:00 Uhr\nAnwesend: 17 Bewohnerinnen und Bewohner, Hausverwaltung (Frau Roth)\nModeration: Herr Jansen, Protokoll: Frau Kaya\n\nTOP 1: Umgestaltung des Innenhofs\n\nFrau Roth stellte zu Beginn den aktuellen Zustand des Hofes vor und wies darauf hin, dass für die Umgestaltung ein Budget der Hausverwaltung zur Verfügung stehe, dessen Höhe noch nicht feststehe.\n\nMehrere Familien erklärten, im Haus lebten inzwischen elf Kinder, für die es keinen sicheren Spielort gebe. Sie wünschten sich deshalb einen kleinen Spielplatz.\n\nÄltere Bewohnerinnen und Bewohner äußerten die Sorge, ein Spielplatz verursache vor allem am Nachmittag erheblichen Lärm. Sie sprachen sich für Sitzbänke und Beete aus.\n\nHerr Meier regte an, zusätzlich überdachte Fahrradständer aufzustellen, da die Räder derzeit im Treppenhaus stünden.\n\nBeschluss: Nach ausführlicher Diskussion wurde mit 14 zu 3 Stimmen beschlossen, den Hof zu teilen. Im hinteren Teil entsteht eine Spielfläche, im vorderen ein Bereich mit Bänken und Beeten. Die Fahrradständer werden an der Hauswand neben dem Eingang aufgestellt.\n\nAufgaben:\n– Frau Roth holt bis zum 30. April zwei Kostenvoranschläge ein.\n– Herr Jansen und Frau Özdemir erstellen bis zum 15. Mai einen Entwurf für die Aufteilung.\n\nOffen blieb, ob die Kosten vollständig von der Hausverwaltung getragen werden oder ob sich die Bewohner beteiligen müssen.\n\nNächste Versammlung: 20. Mai.',
        },
      ],
    },
  },
];
