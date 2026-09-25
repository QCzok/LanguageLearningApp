import type { UnitSeed } from './chapter-beginner-1';

/**
 * Advanced, Kapitel 2: „Forschung und Ethik“ (C1, Kapitel 2)
 *
 * Fünf Seiten. Der grammatische Kern ist der Konjunktiv I: die Form, mit der
 * das Deutsche Gesagtes wiedergibt, ohne sich dafür zu verbürgen. Im
 * Grammatikbuch (Kapitel 12, Seite 3) ist er eingeführt; hier wird er dort
 * gebraucht, wo er zu Hause ist – im Referat einer wissenschaftlichen
 * Debatte.
 *
 * Aufbau: Seite 1 liest einen Text über Tierversuche und legt den
 * Wortschatz. Seite 2 bildet den Konjunktiv I vollständig, Seite 3 klärt,
 * wann der Konjunktiv II als Ersatz eintritt und welches redeeinleitende
 * Verb was verrät. Seite 4 übt das Wiedergeben von Quellen ohne Konjunktiv
 * („laut“, „zufolge“), Seite 5 die ethische Abwägung.
 *
 * Personen und Studien sind erfunden. Sämtliche Texte sind eigenständig
 * verfasst.
 */
const v = 1;

export const ADVANCED_2_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Tierversuche: Text und Wortschatz.
  {
    order: 1,
    title: 'Dürfen wir alles, was wir können?',
    subtitle: 'Eine ethische Debatte verfolgen',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'a2-1-h1', type: 'HEADING', level: 1, text: 'Dürfen wir alles, was wir können?' },
        {
          id: 'a2-1-text',
          type: 'TEXT',
          text: 'Kaum ein Thema der Forschungsethik wird so erbittert diskutiert wie der Tierversuch. In Deutschland werden jedes Jahr mehrere Millionen Tiere zu wissenschaftlichen Zwecken eingesetzt, die meisten davon Mäuse.\n\nBefürworter verweisen darauf, dass nahezu jedes zugelassene Medikament zuvor an Tieren getestet worden sei. Ohne diese Versuche, so ihr Argument, wären viele Therapien nie entwickelt worden. Das Gesetz schreibe zudem vor, dass Versuche nur genehmigt würden, wenn es keine Alternative gebe.\n\nKritiker halten dagegen, dass sich Ergebnisse aus Tierversuchen oft nicht auf den Menschen übertragen ließen. Zahlreiche Wirkstoffe, die bei Mäusen erfolgreich gewesen seien, scheiterten später in klinischen Studien. Sie fordern, stärker in Ersatzmethoden zu investieren, etwa in Zellkulturen oder Computermodelle.\n\nEinig sind sich beide Seiten in einem Punkt: dem sogenannten 3R-Prinzip. Versuche sollen ersetzt (replace), reduziert (reduce) und verfeinert (refine) werden, wo immer das möglich ist.',
        },
        {
          id: 'a2-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: Forschung und Ethik',
          items: [
            {
              term: 'Tierversuch',
              article: 'der',
              plural: 'die Tierversuche',
              translations: { en: 'animal experiment', es: 'el experimento con animales', fr: 'l’expérimentation animale', it: 'la sperimentazione animale' },
            },
            {
              term: 'Wirkstoff',
              article: 'der',
              plural: 'die Wirkstoffe',
              translations: { en: 'active ingredient', es: 'el principio activo', fr: 'le principe actif', it: 'il principio attivo' },
            },
            {
              term: 'genehmigen',
              translations: { en: 'to approve, to authorise', es: 'autorizar', fr: 'autoriser', it: 'autorizzare' },
            },
            {
              term: 'übertragen (auf + Akk.)',
              translations: { en: 'to transfer, to apply to', es: 'trasladar a', fr: 'transposer à', it: 'trasferire a' },
            },
            {
              term: 'Ersatzmethode',
              article: 'die',
              plural: 'die Ersatzmethoden',
              translations: { en: 'alternative method', es: 'el método alternativo', fr: 'la méthode de substitution', it: 'il metodo alternativo' },
            },
            {
              term: 'Befürworter',
              article: 'der',
              plural: 'die Befürworter',
              translations: { en: 'supporter, advocate', es: 'el partidario', fr: 'le partisan', it: 'il sostenitore' },
            },
            {
              term: 'Kritiker',
              article: 'der',
              plural: 'die Kritiker',
              translations: { en: 'critic', es: 'el crítico', fr: 'le critique', it: 'il critico' },
            },
            {
              term: 'abwägen',
              translations: { en: 'to weigh up', es: 'sopesar', fr: 'peser', it: 'soppesare' },
              example: 'Nutzen und Schaden gegeneinander abwägen',
            },
            {
              term: 'vertretbar',
              translations: { en: 'justifiable', es: 'justificable', fr: 'défendable', it: 'giustificabile' },
            },
            {
              term: 'Einwilligung',
              article: 'die',
              translations: { en: 'consent', es: 'el consentimiento', fr: 'le consentement', it: 'il consenso' },
            },
          ],
        },
        {
          id: 'a2-1-choice',
          type: 'CHOICE',
          instruction: 'Lesen Sie den Text.',
          question: 'Welche Aussagen gibt der Text wieder? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'c1', text: 'Befürworter sagen, fast jedes Medikament sei vorher an Tieren getestet worden.' },
            { id: 'c2', text: 'Kritiker sagen, Ergebnisse ließen sich oft nicht auf Menschen übertragen.' },
            { id: 'c3', text: 'Der Text selbst hält Tierversuche für unverzichtbar.' },
            { id: 'c4', text: 'Beide Seiten akzeptieren das 3R-Prinzip.' },
          ],
          solution: ['c1', 'c2', 'c4'],
          explanation:
            'Der Text referiert beide Positionen im Konjunktiv I und bezieht selbst keine Stellung. Nur beim 3R-Prinzip stellt er eine Einigkeit fest.',
        },
        {
          id: 'a2-1-match',
          type: 'MATCHING',
          instruction: 'Ordnen Sie die drei R richtig zu.',
          left: [
            { id: 'l1', text: 'replace' },
            { id: 'l2', text: 'reduce' },
            { id: 'l3', text: 'refine' },
          ],
          right: [
            { id: 'r1', text: 'Versuche durch Zellkulturen oder Computermodelle ersetzen' },
            { id: 'r2', text: 'weniger Tiere pro Versuch einsetzen' },
            { id: 'r3', text: 'Belastung und Schmerzen der Tiere verringern' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
          ],
        },
        {
          id: 'a2-1-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie.',
          wordBank: ['genehmigt', 'Wirkstoffe', 'übertragen', 'Ersatzmethoden', 'abwägen'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Ein Tierversuch wird nur ' },
            { kind: 'GAP', gapId: 'g1', solution: ['genehmigt'], width: 10 },
            { kind: 'TEXT', text: ', wenn es keine Alternative gibt. Viele ' },
            { kind: 'GAP', gapId: 'g2', solution: ['Wirkstoffe'], width: 11 },
            { kind: 'TEXT', text: ' wirken bei Mäusen, lassen sich aber nicht auf den Menschen ' },
            { kind: 'GAP', gapId: 'g3', solution: ['übertragen'], width: 11 },
            { kind: 'TEXT', text: '. Deshalb fordern Kritiker mehr Geld für ' },
            { kind: 'GAP', gapId: 'g4', solution: ['Ersatzmethoden'], width: 15 },
            { kind: 'TEXT', text: '. Letztlich muss man Nutzen und Leid gegeneinander ' },
            { kind: 'GAP', gapId: 'g5', solution: ['abwägen'], width: 8 },
            { kind: 'TEXT', text: '.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – die Formen des Konjunktivs I.
  {
    order: 2,
    title: 'Er sagt, er habe keine Zeit',
    subtitle: 'Die Formen des Konjunktivs I',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'a2-2-h1', type: 'HEADING', level: 1, text: 'Er sagt, er habe keine Zeit' },
        {
          id: 'a2-2-intro',
          type: 'TEXT',
          text: 'In Zeitungen, wissenschaftlichen Texten und Nachrichten begegnet einem ständig eine Verbform, die im Gespräch kaum vorkommt: „Die Ministerin sagte, sie sei zuversichtlich.“ Der Konjunktiv I signalisiert: Das hat jemand anderes gesagt; der Schreiber gibt es nur wieder. Er ist kein Zeichen von Zweifel, sondern von Distanz.',
        },
        {
          id: 'a2-2-info-formen',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Bildung: Stamm + Konjunktivendung',
          text: 'Der Konjunktiv I wird vom Infinitivstamm gebildet, ohne Vokalwechsel: er gebe (nicht: er gibt), sie fahre (nicht: sie fährt). Die Endungen sind -e, -est, -e, -en, -et, -en. „sein“ ist unregelmäßig. In der Praxis wird fast nur die 3. Person Singular gebraucht, denn nur dort unterscheidet sich die Form fast immer vom Indikativ.',
          table: {
            headers: ['Person', 'haben', 'sein', 'können', 'geben'],
            rows: [
              ['ich', 'habe', 'sei', 'könne', 'gebe'],
              ['du', 'habest', 'sei(e)st', 'könnest', 'gebest'],
              ['er/sie/es', 'habe', 'sei', 'könne', 'gebe'],
              ['wir', 'haben', 'seien', 'können', 'geben'],
              ['ihr', 'habet', 'seiet', 'könnet', 'gebet'],
              ['sie/Sie', 'haben', 'seien', 'können', 'geben'],
            ],
          },
        },
        {
          id: 'a2-2-info-zeiten',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Drei Zeitstufen',
          text: 'Die indirekte Rede kennt nur drei Zeitstufen, egal in welcher Zeit das einleitende Verb steht. Gleichzeitig: Konjunktiv I Präsens. Vorzeitig (alle Vergangenheitsformen der direkten Rede): Konjunktiv I von haben/sein + Partizip II. Nachzeitig: werde + Infinitiv.',
          table: {
            headers: ['Direkte Rede', 'Indirekte Rede'],
            rows: [
              ['„Ich arbeite an einer Studie.“', 'Sie sagt, sie arbeite an einer Studie.'],
              ['„Ich arbeitete / habe gearbeitet …“', 'Sie sagt, sie habe an einer Studie gearbeitet.'],
              ['„Ich bin nach Genf gefahren.“', 'Sie sagt, sie sei nach Genf gefahren.'],
              ['„Ich werde die Studie veröffentlichen.“', 'Sie sagt, sie werde die Studie veröffentlichen.'],
            ],
          },
        },
        {
          id: 'a2-2-cloze',
          type: 'CLOZE',
          instruction: 'Setzen Sie die Verben in den Konjunktiv I.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Der Forscher erklärt, das Ergebnis ' },
            { kind: 'GAP', gapId: 'k1', solution: ['sei'], hint: 'sein', width: 5 },
            { kind: 'TEXT', text: ' eindeutig. Man ' },
            { kind: 'GAP', gapId: 'k2', solution: ['könne'], hint: 'können', width: 6 },
            { kind: 'TEXT', text: ' die Methode auch auf andere Krankheiten übertragen. Sein Team ' },
            { kind: 'GAP', gapId: 'k3', solution: ['habe'], hint: 'haben', width: 5 },
            { kind: 'TEXT', text: ' drei Jahre daran gearbeitet, und die Ergebnisse ' },
            { kind: 'GAP', gapId: 'k4', solution: ['werde'], hint: 'werden', width: 6 },
            { kind: 'TEXT', text: ' es im Herbst veröffentlichen. Die Zeitschrift ' },
            { kind: 'GAP', gapId: 'k5', solution: ['gebe'], hint: 'geben', width: 5 },
            { kind: 'TEXT', text: ' dafür bereits grünes Licht.' },
          ],
        },
        {
          id: 'a2-2-match',
          type: 'MATCHING',
          instruction: 'Ordnen Sie der direkten Rede die indirekte zu.',
          left: [
            { id: 'l1', text: '„Wir haben keine Alternative.“' },
            { id: 'l2', text: '„Das Labor war geschlossen.“' },
            { id: 'l3', text: '„Ich werde zurücktreten.“' },
            { id: 'l4', text: '„Die Daten sind öffentlich.“' },
          ],
          right: [
            { id: 'r1', text: 'Er sagte, man habe keine Alternative.' },
            { id: 'r2', text: 'Er sagte, das Labor sei geschlossen gewesen.' },
            { id: 'r3', text: 'Er sagte, er werde zurücktreten.' },
            { id: 'r4', text: 'Er sagte, die Daten seien öffentlich.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'a2-2-choice',
          type: 'CHOICE',
          instruction: 'Wählen Sie die richtige Form.',
          question: 'Direkte Rede: „Ich fuhr sofort ins Labor.“ Wie lautet die indirekte Rede?',
          multiple: false,
          options: [
            { id: 'q1', text: 'Sie sagte, sie fahre sofort ins Labor.' },
            { id: 'q2', text: 'Sie sagte, sie sei sofort ins Labor gefahren.' },
            { id: 'q3', text: 'Sie sagte, sie führe sofort ins Labor.' },
            { id: 'q4', text: 'Sie sagte, sie werde sofort ins Labor fahren.' },
          ],
          solution: ['q2'],
          explanation:
            'Jede Vergangenheitsform der direkten Rede – Präteritum, Perfekt, Plusquamperfekt – wird im Konjunktiv I zu haben/sein + Partizip II. „fahren“ bildet das Perfekt mit „sein“.',
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – Ersatzform Konjunktiv II; redeeinleitende Verben.
  {
    order: 3,
    title: 'Sie behaupten, sie hätten recht',
    subtitle: 'Ersatzformen und redeeinleitende Verben',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'a2-3-h1', type: 'HEADING', level: 1, text: 'Sie behaupten, sie hätten recht' },
        {
          id: 'a2-3-intro',
          type: 'TEXT',
          text: 'Der Konjunktiv I hat eine Schwäche: In vielen Personen sieht er genauso aus wie der Indikativ. „Die Forscher sagen, sie haben recht“ – ist das Wiedergabe oder Feststellung? Das Deutsche löst das Problem mit einer Ausweichform. Und es hat noch ein zweites Mittel, um Distanz zu zeigen: die Wahl des Verbs, das die Rede einleitet.',
        },
        {
          id: 'a2-3-info-ersatz',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Die Ersatzregel',
          text: 'Wenn der Konjunktiv I mit dem Indikativ übereinstimmt, nimmt man den Konjunktiv II. Stimmt auch der mit dem Indikativ überein (bei regelmäßigen Verben im Plural), nimmt man „würde“ + Infinitiv. Wichtig: Die Ersatzform bedeutet hier nichts Irreales, sie macht nur die Wiedergabe sichtbar.',
          table: {
            headers: ['Direkt', 'Konj. I', 'Ersatz'],
            rows: [
              ['„Wir haben recht.“', 'sie haben (= Indikativ)', 'sie hätten recht'],
              ['„Wir kommen morgen.“', 'sie kommen (= Indikativ)', 'sie kämen morgen'],
              ['„Wir arbeiten viel.“', 'sie arbeiten (= Ind.), arbeiteten (= Prät.)', 'sie würden viel arbeiten'],
              ['„Er hat recht.“', 'er habe (eindeutig)', '— (Konj. I genügt)'],
            ],
          },
        },
        {
          id: 'a2-3-cloze',
          type: 'CLOZE',
          instruction: 'Setzen Sie die passende Form der indirekten Rede ein.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Die Tierschützer sagen, sie ' },
            { kind: 'GAP', gapId: 'e1', solution: ['hätten'], hint: 'haben', width: 7 },
            { kind: 'TEXT', text: ' Beweise. Die Institutsleiterin sagt, sie ' },
            { kind: 'GAP', gapId: 'e2', solution: ['habe'], hint: 'haben', width: 5 },
            { kind: 'TEXT', text: ' nichts zu verbergen. Die Studierenden erklären, sie ' },
            { kind: 'GAP', gapId: 'e3', solution: ['kämen'], hint: 'kommen', width: 6 },
            { kind: 'TEXT', text: ' zur Demonstration, und die Ärzte sagen, sie ' },
            { kind: 'GAP', gapId: 'e4', solution: ['würden'], hint: 'warten', width: 7 },
            { kind: 'TEXT', text: ' auf die Entscheidung warten.' },
          ],
        },
        {
          id: 'a2-3-info-verben',
          type: 'INFO',
          variant: 'TIP',
          title: 'Was das einleitende Verb verrät',
          text: 'Der Konjunktiv selbst ist neutral. Die Wertung steckt im Verb davor. „sagen“, „erklären“, „betonen“ geben nur wieder. „behaupten“ und „vorgeben“ lassen Zweifel erkennen, „einräumen“ und „zugeben“ zeigen, dass jemand etwas Unangenehmes eingesteht.',
          table: {
            headers: ['Verb', 'Wirkung'],
            rows: [
              ['sagen, erklären, mitteilen', 'neutral'],
              ['betonen, hervorheben', 'Nachdruck des Sprechers'],
              ['einräumen, zugeben', 'Eingeständnis'],
              ['behaupten, vorgeben', 'Zweifel des Schreibers'],
              ['bestreiten, zurückweisen', 'Widerspruch des Sprechers'],
            ],
          },
        },
        {
          id: 'a2-3-match',
          type: 'MATCHING',
          instruction: 'Was verrät das Verb?',
          left: [
            { id: 'l1', text: 'Der Konzern behauptet, die Daten seien sicher.' },
            { id: 'l2', text: 'Die Forscherin räumt ein, die Stichprobe sei klein.' },
            { id: 'l3', text: 'Der Minister betont, das Gesetz sei dringend.' },
            { id: 'l4', text: 'Die Firma bestreitet, von den Fehlern gewusst zu haben.' },
          ],
          right: [
            { id: 'r1', text: 'Der Schreiber zweifelt an der Aussage.' },
            { id: 'r2', text: 'Die Sprecherin gibt eine Schwäche zu.' },
            { id: 'r3', text: 'Der Sprecher legt besonderen Nachdruck darauf.' },
            { id: 'r4', text: 'Die Sprecherin widerspricht einem Vorwurf.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'a2-3-choice',
          type: 'CHOICE',
          instruction: 'Wählen Sie die korrekte Wiedergabe.',
          question: 'Direkte Rede der Ärzte: „Wir brauchen mehr Personal.“',
          multiple: false,
          options: [
            { id: 'w1', text: 'Die Ärzte sagen, sie brauchen mehr Personal.' },
            { id: 'w2', text: 'Die Ärzte sagen, sie bräuchten mehr Personal.' },
            { id: 'w3', text: 'Die Ärzte sagen, sie brauche mehr Personal.' },
            { id: 'w4', text: 'Die Ärzte sagen, sie hätten mehr Personal gebraucht.' },
          ],
          solution: ['w2'],
          explanation:
            '„sie brauchen“ ist im Konjunktiv I identisch mit dem Indikativ, also weicht man auf den Konjunktiv II aus. „bräuchten“ ist inzwischen allgemein akzeptiert; „würden brauchen“ wäre ebenfalls möglich. Die vierte Form verschiebt die Zeit.',
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – Quellen wiedergeben ohne Konjunktiv.
  {
    order: 4,
    title: 'Laut einer Studie',
    subtitle: 'Quellen korrekt wiedergeben',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'a2-4-h1', type: 'HEADING', level: 1, text: 'Laut einer Studie' },
        {
          id: 'a2-4-intro',
          type: 'TEXT',
          text: 'Nicht jede Wiedergabe braucht einen Nebensatz. Oft reicht eine Präposition oder eine Wendung, um die Quelle zu nennen: „Laut Umweltbundesamt ist der Wert gestiegen.“ Diese Mittel stehen im Indikativ – die Quellenangabe allein zeigt schon, dass es sich um eine fremde Aussage handelt.',
        },
        {
          id: 'a2-4-info-mittel',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Quellenangaben im Satz',
          text: 'Achten Sie auf den Kasus und die Stellung. „laut“ steht meist mit Dativ, bei Namen ohne Artikel oft ohne erkennbaren Kasus. „zufolge“ steht nach dem Nomen und verlangt den Dativ. „nach“ im Sinn von „gemäß“ kann vor- oder nachgestellt werden.',
          table: {
            headers: ['Mittel', 'Beispiel'],
            rows: [
              ['laut + Dat.', 'Laut einer aktuellen Studie nimmt die Zahl ab.'],
              ['Dat. + zufolge', 'Der Studie zufolge nimmt die Zahl ab.'],
              ['nach / nach … (Meinung)', 'Nach Angaben der Polizei gab es keine Verletzten.'],
              ['wie … berichtet', 'Wie die Zeitung berichtet, wurde das Labor geschlossen.'],
              ['sollen (Gerücht)', 'Der Chef soll von allem gewusst haben.'],
              ['wollen (Behauptung über sich selbst)', 'Er will nichts gewusst haben.'],
            ],
          },
        },
        {
          id: 'a2-4-choice-sollen',
          type: 'CHOICE',
          instruction: 'Wählen Sie die richtige Bedeutung.',
          question: '„Der Institutsleiter will von den Verstößen nichts gewusst haben.“ Was bedeutet der Satz?',
          multiple: false,
          options: [
            { id: 's1', text: 'Der Institutsleiter möchte nichts von den Verstößen wissen.' },
            { id: 's2', text: 'Der Institutsleiter behauptet von sich, er habe nichts gewusst – der Schreiber ist skeptisch.' },
            { id: 's3', text: 'Andere sagen, der Institutsleiter habe nichts gewusst.' },
            { id: 's4', text: 'Es ist bewiesen, dass der Institutsleiter nichts wusste.' },
          ],
          solution: ['s2'],
          explanation:
            '„wollen“ + Infinitiv Perfekt gibt eine Behauptung wieder, die jemand über sich selbst aufstellt, und lässt Zweifel mitschwingen. „sollen“ + Infinitiv Perfekt gibt dagegen wieder, was andere über jemanden sagen.',
        },
        {
          id: 'a2-4-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die Quellenangaben.',
          wordBank: ['Laut', 'zufolge', 'Wie', 'soll', 'Nach'],
          caseSensitive: false,
          segments: [
            { kind: 'GAP', gapId: 'q1', solution: ['Laut'], width: 5 },
            { kind: 'TEXT', text: ' einer Umfrage lehnen 60 Prozent Tierversuche für Kosmetik ab. Einer anderen Studie ' },
            { kind: 'GAP', gapId: 'q2', solution: ['zufolge'], width: 8 },
            { kind: 'TEXT', text: ' ist die Zahl der Versuchstiere gesunken. ' },
            { kind: 'GAP', gapId: 'q3', solution: ['Wie'], width: 4 },
            { kind: 'TEXT', text: ' das Ministerium mitteilt, werden neue Ersatzmethoden gefördert. Ein Labor in Bayern ' },
            { kind: 'GAP', gapId: 'q4', solution: ['soll'], width: 5 },
            { kind: 'TEXT', text: ' gegen Auflagen verstoßen haben. ' },
            { kind: 'GAP', gapId: 'q5', solution: ['Nach'], width: 5 },
            { kind: 'TEXT', text: ' Angaben der Behörde wird das geprüft.' },
          ],
        },
        {
          id: 'a2-4-match',
          type: 'MATCHING',
          instruction: 'Ordnen Sie gleichbedeutende Sätze zu.',
          left: [
            { id: 'l1', text: 'Der Studie zufolge wirkt das Mittel.' },
            { id: 'l2', text: 'Die Ministerin soll zurücktreten wollen.' },
            { id: 'l3', text: 'Er will die Mail nie bekommen haben.' },
          ],
          right: [
            { id: 'r1', text: 'Die Studie sagt, das Mittel wirke.' },
            { id: 'r2', text: 'Man sagt, die Ministerin wolle zurücktreten.' },
            { id: 'r3', text: 'Er behauptet, er habe die Mail nie bekommen.' },
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

  // ====================================================== SEITE 5
  // Seite 5 – ethisch abwägen; Wiederholung und Schreibaufgabe.
  {
    order: 5,
    title: 'Abwägen und Stellung nehmen',
    subtitle: 'Eine ethische Frage schriftlich erörtern',
    estimatedMinutes: 34,
    content: {
      version: v,
      blocks: [
        { id: 'a2-5-h1', type: 'HEADING', level: 1, text: 'Abwägen und Stellung nehmen' },
        {
          id: 'a2-5-intro',
          type: 'TEXT',
          text: 'Eine ethische Stellungnahme unterscheidet sich von einer Meinungsäußerung dadurch, dass sie die Gegenseite ernst nimmt. Sie gibt deren beste Argumente fair wieder – gern im Konjunktiv I –, wägt sie gegen die eigenen ab und kommt dann zu einem Urteil, das seine Bedingungen nennt.',
        },
        {
          id: 'a2-5-info-redemittel',
          type: 'INFO',
          variant: 'TIP',
          title: 'Redemittel für die Abwägung',
          text: 'Diese Wendungen strukturieren eine Abwägung. Beachten Sie, dass „zwar … aber“ und „einerseits … andererseits“ zweiteilige Konnektoren sind: Der zweite Teil darf nicht fehlen.',
          table: {
            headers: ['Funktion', 'Redemittel'],
            rows: [
              ['Gegenposition fair wiedergeben', 'Befürworter wenden ein, … sei unverzichtbar.'],
              ['einräumen', 'Zwar ist nicht zu bestreiten, dass …, aber …'],
              ['gewichten', 'Schwerer wiegt jedoch, dass …'],
              ['Bedingung nennen', 'Vertretbar ist das nur, sofern / solange …'],
              ['Fazit', 'Alles in allem komme ich zu dem Schluss, dass …'],
            ],
          },
        },
        {
          id: 'a2-5-ordering',
          type: 'ORDERING',
          instruction: 'Bringen Sie die Sätze der Stellungnahme in eine sinnvolle Reihenfolge.',
          items: [
            { id: 'o1', text: 'Die Frage, ob Tierversuche vertretbar sind, lässt sich nicht pauschal beantworten.' },
            { id: 'o2', text: 'Befürworter wenden ein, ohne sie wären viele Therapien nie entwickelt worden.' },
            { id: 'o3', text: 'Zwar ist das nicht zu bestreiten, aber viele Ergebnisse lassen sich nicht auf Menschen übertragen.' },
            { id: 'o4', text: 'Vertretbar sind Versuche daher nur, sofern es wirklich keine Ersatzmethode gibt.' },
            { id: 'o5', text: 'Alles in allem komme ich zu dem Schluss, dass die Forschung an Alternativen stärker gefördert werden muss.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5'],
        },
        {
          id: 'a2-5-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die Zusammenfassung des Kapitels.',
          wordBank: ['Distanz', 'Infinitivstamm', 'Konjunktiv II', 'behaupten', 'zufolge', 'sofern'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Der Konjunktiv I zeigt nicht Zweifel, sondern ' },
            { kind: 'GAP', gapId: 'z1', solution: ['Distanz'], width: 8 },
            { kind: 'TEXT', text: '. Man bildet ihn vom ' },
            { kind: 'GAP', gapId: 'z2', solution: ['Infinitivstamm'], width: 15 },
            { kind: 'TEXT', text: '. Wenn er wie der Indikativ aussieht, nimmt man den ' },
            { kind: 'GAP', gapId: 'z3', solution: ['Konjunktiv II'], width: 14 },
            { kind: 'TEXT', text: '. Verben wie „' },
            { kind: 'GAP', gapId: 'z4', solution: ['behaupten'], width: 10 },
            { kind: 'TEXT', text: '“ lassen Skepsis erkennen. „Der Studie ' },
            { kind: 'GAP', gapId: 'z5', solution: ['zufolge'], width: 8 },
            { kind: 'TEXT', text: '“ nennt die Quelle ohne Konjunktiv. Und ein ethisches Urteil nennt seine Bedingungen: „vertretbar, ' },
            { kind: 'GAP', gapId: 'z6', solution: ['sofern'], width: 7 },
            { kind: 'TEXT', text: ' …“.' },
          ],
        },
        {
          id: 'a2-5-writing',
          type: 'WRITING',
          instruction: 'Schreiben Sie eine Stellungnahme.',
          prompt:
            'Ein Forschungsteam möchte mit einer Gesundheits-App anonymisierte Bewegungsdaten von 100 000 Nutzerinnen und Nutzern auswerten, um Frühwarnzeichen für Herzkrankheiten zu finden. Die Nutzer haben den allgemeinen Geschäftsbedingungen zugestimmt, wurden aber nicht eigens gefragt. Schreiben Sie eine Stellungnahme (200–280 Wörter). Geben Sie mindestens zwei Positionen im Konjunktiv I wieder, verwenden Sie eine Quellenangabe mit „laut“ oder „zufolge“ und kommen Sie zu einem begründeten Urteil mit Bedingung.',
          minWords: 200,
          maxWords: 290,
          aiFeedback: true,
          sampleAnswer:
            'Das geplante Projekt berührt zwei Güter, die beide Schutz verdienen: die Gesundheit vieler Menschen und das Recht jedes Einzelnen, über seine Daten selbst zu bestimmen.\n\nDas Forschungsteam argumentiert, die Daten seien vollständig anonymisiert und ließen keinen Rückschluss auf einzelne Personen zu. Zudem hätten die Nutzer den Geschäftsbedingungen zugestimmt, in denen eine Verwendung für Forschungszwecke erwähnt werde. Der Nutzen könne erheblich sein: Laut einer Schätzung der Kardiologischen Gesellschaft ließen sich durch frühere Diagnosen jährlich Tausende Todesfälle vermeiden.\n\nDatenschützer halten dagegen, eine Zustimmung zu seitenlangen Geschäftsbedingungen sei keine informierte Einwilligung. Kaum jemand lese diese Texte. Außerdem zeigten Studien, dass sich scheinbar anonyme Bewegungsdaten in vielen Fällen doch einzelnen Personen zuordnen ließen.\n\nZwar ist der mögliche Nutzen nicht zu bestreiten, aber schwerer wiegt meiner Ansicht nach das Argument der Einwilligung. Wer Forschung auf Vertrauen gründen will, darf nicht mit Zustimmungen arbeiten, die in Wahrheit keine sind. Ein Missbrauch würde zudem das Vertrauen in künftige Studien beschädigen.\n\nAlles in allem komme ich zu dem Schluss, dass das Projekt nur vertretbar ist, sofern die Nutzer vorab ausdrücklich und verständlich gefragt werden und jederzeit widersprechen können. Das mag die Zahl der Teilnehmenden verringern, doch eine kleinere, aber rechtmäßige Datenbasis ist einer großen, aber fragwürdigen vorzuziehen.',
        },
      ],
    },
  },
];
