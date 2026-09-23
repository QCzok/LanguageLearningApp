import type { UnitSeed } from './chapter-beginner-1';

/**
 * Intermediate, Kapitel 1: „Bildung und Lernen“ (B1, Kapitel 1)
 *
 * Fünf Seiten. Der Einstieg in das zweite Kursbuch. Wer aus dem Beginner-Band
 * kommt, kann über seinen Alltag sprechen; hier geht es zum ersten Mal um
 * eine ganze Lebensstrecke – den eigenen Weg durch Schule, Ausbildung und
 * Studium – und um das Lernen selbst.
 *
 * Aufbau: Seite 1 erzählt einen Bildungsweg und stellt dabei das deutsche
 * Schulsystem vor, Seite 2 stellt Ausbildung und Studium gegenüber und
 * bringt „als“ und „wenn“ für Erinnerungen, Seite 3 ist der grammatische Kern
 * – indirekte Fragen mit „ob“ und Fragewort –, Seite 4 liest einen Artikel
 * über Lernstrategien und übt das Zusammenfassen, Seite 5 ist der Rückblick.
 *
 * Ab dem zweiten Band stehen die Seiten einsprachig deutsch – die
 * aufklappbare Übersetzung bleibt dem Beginner-Band vorbehalten. Die
 * Wortschatzlisten führen weiter Entsprechungen in allen Muttersprachen,
 * weil ein einzelnes Wort ohne Kontext sonst nicht zu erschließen ist.
 *
 * Personen und Institutionen sind erfunden. Sämtliche Texte sind
 * eigenständig verfasst.
 */
const v = 1;

export const INTERMEDIATE_1_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – ein Bildungsweg, das deutsche Schulsystem.
  {
    order: 1,
    title: 'Mein Weg durch die Schule',
    subtitle: 'Das Schulsystem in Deutschland',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'i1-1-h1', type: 'HEADING', level: 1, text: 'Mein Weg durch die Schule' },
        {
          id: 'i1-1-image',
          type: 'IMAGE',
          url: 'illustration:alphabet-numbers',
          alt: 'Buchstaben und Zahlen an einer Tafel, wie in einem Klassenzimmer.',
          caption: 'Der erste Schultag ist für viele Kinder in Deutschland ein großes Fest.',
        },
        {
          id: 'i1-1-text',
          type: 'TEXT',
          text: 'Jonas Berger, 27, erzählt:\n\nMit sechs Jahren bin ich in die Grundschule gekommen. Zum ersten Schultag habe ich eine riesige Schultüte bekommen – das ist in Deutschland Tradition. Nach der vierten Klasse musste ich mich entscheiden: Meine Lehrerin hat mir das Gymnasium empfohlen, aber ich wollte lieber mit meinen Freunden auf die Realschule gehen. Dort habe ich nach der zehnten Klasse den Realschulabschluss gemacht.\n\nDanach wusste ich lange nicht, was ich werden wollte. Schließlich habe ich eine Ausbildung zum Elektroniker angefangen. Drei Jahre lang war ich abwechselnd im Betrieb und in der Berufsschule. Das hat mir gefallen, weil ich das Gelernte sofort ausprobieren konnte. Später habe ich an der Abendschule das Abitur nachgeholt, und heute studiere ich Elektrotechnik an einer Fachhochschule. Mein Weg war nicht gerade, aber jeder Umweg hat mir etwas gebracht.',
        },
        {
          id: 'i1-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: Schule und Abschlüsse',
          items: [
            {
              term: 'Grundschule',
              article: 'die',
              plural: 'die Grundschulen',
              translations: { en: 'primary school', es: 'la escuela primaria', fr: 'l’école primaire', it: 'la scuola elementare' },
            },
            {
              term: 'Gymnasium',
              article: 'das',
              plural: 'die Gymnasien',
              translations: { en: 'grammar school (academic track)', es: 'el instituto (vía académica)', fr: 'le lycée (filière générale)', it: 'il liceo' },
            },
            {
              term: 'Realschule',
              article: 'die',
              plural: 'die Realschulen',
              translations: { en: 'secondary school (up to year 10)', es: 'escuela secundaria (hasta 10.º)', fr: 'collège (jusqu’en 10e année)', it: 'scuola secondaria (fino al 10° anno)' },
            },
            {
              term: 'Abschluss',
              article: 'der',
              plural: 'die Abschlüsse',
              translations: { en: 'qualification, degree', es: 'el título', fr: 'le diplôme', it: 'il titolo di studio' },
              example: 'Welchen Abschluss haben Sie?',
            },
            {
              term: 'Abitur',
              article: 'das',
              translations: { en: 'A levels, high-school diploma', es: 'el bachillerato', fr: 'le baccalauréat', it: 'la maturità' },
            },
            {
              term: 'Ausbildung',
              article: 'die',
              plural: 'die Ausbildungen',
              translations: { en: 'vocational training, apprenticeship', es: 'la formación profesional', fr: 'la formation professionnelle', it: 'la formazione professionale' },
              example: 'Sie macht eine Ausbildung zur Köchin.',
            },
            {
              term: 'Berufsschule',
              article: 'die',
              translations: { en: 'vocational school', es: 'la escuela de formación profesional', fr: 'l’école professionnelle', it: 'la scuola professionale' },
            },
            {
              term: 'Fachhochschule',
              article: 'die',
              translations: { en: 'university of applied sciences', es: 'la universidad de ciencias aplicadas', fr: 'l’université de sciences appliquées', it: 'l’università di scienze applicate' },
            },
            {
              term: 'etwas nachholen',
              translations: { en: 'to catch up on sth., to make up for sth.', es: 'recuperar algo', fr: 'rattraper qc', it: 'recuperare qc' },
              example: 'Er hat das Abitur an der Abendschule nachgeholt.',
            },
            {
              term: 'empfehlen',
              translations: { en: 'to recommend', es: 'recomendar', fr: 'recommander', it: 'consigliare' },
              example: 'Die Lehrerin hat ihm das Gymnasium empfohlen.',
            },
            {
              term: 'Umweg',
              article: 'der',
              plural: 'die Umwege',
              translations: { en: 'detour', es: 'el rodeo', fr: 'le détour', it: 'la deviazione' },
            },
          ],
        },
        {
          id: 'i1-1-info-schule',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'Das Schulsystem in Deutschland',
          text: 'Alle Kinder gehen zuerst vier Jahre (in Berlin und Brandenburg sechs Jahre) in die Grundschule. Danach teilt sich der Weg. Jedes Bundesland regelt die Schule selbst, deshalb gibt es Unterschiede – aber die Grundidee ist überall ähnlich. Wichtig: Kein Weg ist eine Sackgasse. Wer später mehr will, kann einen höheren Abschluss nachholen.',
          table: {
            headers: ['Schule', 'Dauer', 'Abschluss'],
            rows: [
              ['Hauptschule / Mittelschule', 'bis Klasse 9', 'Hauptschulabschluss'],
              ['Realschule', 'bis Klasse 10', 'Realschulabschluss (Mittlere Reife)'],
              ['Gymnasium', 'bis Klasse 12 oder 13', 'Abitur'],
              ['Gesamtschule', 'alle Abschlüsse möglich', 'je nach Leistung'],
            ],
          },
        },
        {
          id: 'i1-1-choice',
          type: 'CHOICE',
          instruction: 'Lesen Sie den Text noch einmal.',
          question: 'Welche Aussagen über Jonas sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'a1', text: 'Er ist nach der Grundschule auf das Gymnasium gegangen.' },
            { id: 'a2', text: 'Er hat eine Ausbildung gemacht.' },
            { id: 'a3', text: 'Das Abitur hat er später nachgeholt.' },
            { id: 'a4', text: 'Er bereut seine Umwege.' },
          ],
          solution: ['a2', 'a3'],
          explanation:
            'Die Lehrerin hat das Gymnasium empfohlen, aber Jonas ist auf die Realschule gegangen. Über seine Umwege sagt er: „Jeder Umweg hat mir etwas gebracht.“ Er bereut sie also nicht.',
        },
        {
          id: 'i1-1-match',
          type: 'MATCHING',
          instruction: 'Welcher Abschluss gehört zu welcher Schule?',
          left: [
            { id: 'l1', text: 'das Gymnasium' },
            { id: 'l2', text: 'die Realschule' },
            { id: 'l3', text: 'die Berufsschule' },
            { id: 'l4', text: 'die Fachhochschule' },
          ],
          right: [
            { id: 'r1', text: 'das Abitur' },
            { id: 'r2', text: 'die Mittlere Reife' },
            { id: 'r3', text: 'der Berufsabschluss nach der Ausbildung' },
            { id: 'r4', text: 'der Bachelor' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'i1-1-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie mit den Wörtern aus dem Kasten.',
          wordBank: ['Grundschule', 'empfohlen', 'Abschluss', 'nachgeholt', 'Ausbildung'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Meine Schwester war vier Jahre auf der ' },
            { kind: 'GAP', gapId: 'c1', solution: ['Grundschule'], width: 12 },
            { kind: 'TEXT', text: '. Ihr Lehrer hat ihr das Gymnasium ' },
            { kind: 'GAP', gapId: 'c2', solution: ['empfohlen'], width: 10 },
            { kind: 'TEXT', text: ', aber sie hat die Schule nach der zehnten Klasse mit einem mittleren ' },
            { kind: 'GAP', gapId: 'c3', solution: ['Abschluss'], width: 10 },
            { kind: 'TEXT', text: ' verlassen. Dann hat sie eine ' },
            { kind: 'GAP', gapId: 'c4', solution: ['Ausbildung'], width: 11 },
            { kind: 'TEXT', text: ' als Bankkauffrau gemacht. Mit 25 hat sie das Abitur ' },
            { kind: 'GAP', gapId: 'c5', solution: ['nachgeholt'], width: 11 },
            { kind: 'TEXT', text: '.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – Ausbildung oder Studium? Dazu „als“ und „wenn“.
  {
    order: 2,
    title: 'Ausbildung oder Studium?',
    subtitle: 'Erinnerungen mit „als“ und „wenn“',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'i1-2-h1', type: 'HEADING', level: 1, text: 'Ausbildung oder Studium?' },
        {
          id: 'i1-2-dlg',
          type: 'DIALOGUE',
          title: 'In der Mensa',
          lines: [
            { speaker: 'Aylin', text: 'Du, Marek, warum hast du eigentlich zuerst eine Ausbildung gemacht? Du hattest doch Abitur.' },
            { speaker: 'Marek', text: 'Als ich mit der Schule fertig war, hatte ich einfach keine Lust mehr auf Theorie. Ich wollte endlich praktisch arbeiten und eigenes Geld verdienen.' },
            { speaker: 'Aylin', text: 'Und warum studierst du jetzt doch?' },
            { speaker: 'Marek', text: 'In der Firma habe ich gemerkt, dass mich die Planung mehr interessiert. Immer wenn ein neues Projekt kam, wollte ich wissen, wie man es berechnet.' },
            { speaker: 'Aylin', text: 'Bei mir war es genau umgekehrt. Ich wollte schon als Kind Ärztin werden. Wenn meine Oma krank war, habe ich sie immer „untersucht“.' },
            { speaker: 'Marek', text: 'Ha! Und bereust du es manchmal, dass du direkt studiert hast?' },
            { speaker: 'Aylin', text: 'Manchmal schon. Das Studium ist sehr lang, und ich verdiene noch nichts. Aber ich habe mein Ziel.' },
          ],
        },
        {
          id: 'i1-2-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: Ausbildung und Studium',
          items: [
            {
              term: 'Betrieb',
              article: 'der',
              plural: 'die Betriebe',
              translations: { en: 'company, workplace', es: 'la empresa', fr: 'l’entreprise', it: 'l’azienda' },
            },
            {
              term: 'Auszubildende',
              article: 'die',
              plural: 'die Auszubildenden',
              translations: { en: 'trainee, apprentice', es: 'la aprendiz', fr: 'l’apprentie', it: 'l’apprendista' },
              example: 'Kurzform: der/die Azubi',
            },
            {
              term: 'Studium',
              article: 'das',
              plural: 'die Studien',
              translations: { en: 'university studies', es: 'los estudios universitarios', fr: 'les études', it: 'gli studi universitari' },
            },
            {
              term: 'Studiengang',
              article: 'der',
              plural: 'die Studiengänge',
              translations: { en: 'degree programme', es: 'la carrera', fr: 'le cursus', it: 'il corso di laurea' },
            },
            {
              term: 'Vorlesung',
              article: 'die',
              plural: 'die Vorlesungen',
              translations: { en: 'lecture', es: 'la clase magistral', fr: 'le cours magistral', it: 'la lezione universitaria' },
            },
            {
              term: 'Praktikum',
              article: 'das',
              plural: 'die Praktika',
              translations: { en: 'internship', es: 'las prácticas', fr: 'le stage', it: 'il tirocinio' },
            },
            {
              term: 'Theorie / Praxis',
              article: 'die',
              translations: { en: 'theory / practice', es: 'la teoría / la práctica', fr: 'la théorie / la pratique', it: 'la teoria / la pratica' },
            },
            {
              term: 'Geld verdienen',
              translations: { en: 'to earn money', es: 'ganar dinero', fr: 'gagner de l’argent', it: 'guadagnare soldi' },
            },
            {
              term: 'bereuen',
              translations: { en: 'to regret', es: 'arrepentirse de', fr: 'regretter', it: 'pentirsi di' },
              example: 'Ich bereue meine Entscheidung nicht.',
            },
            {
              term: 'umgekehrt',
              translations: { en: 'the other way round', es: 'al revés', fr: 'à l’inverse', it: 'al contrario' },
            },
          ],
        },
        {
          id: 'i1-2-info-dual',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'Die duale Ausbildung',
          text: '„Dual“ heißt: an zwei Orten. Auszubildende arbeiten drei bis vier Tage pro Woche im Betrieb und lernen ein bis zwei Tage in der Berufsschule. Sie bekommen vom ersten Monat an Geld, die Ausbildungsvergütung. Es gibt rund 320 Ausbildungsberufe – vom Bäcker über die Mechatronikerin bis zum Kaufmann für Büromanagement. Viele Betriebe übernehmen ihre Azubis danach fest.',
        },
        {
          id: 'i1-2-choice',
          type: 'CHOICE',
          instruction: 'Lesen Sie das Gespräch noch einmal.',
          question: 'Warum hat Marek nach dem Abitur zuerst eine Ausbildung gemacht?',
          multiple: false,
          options: [
            { id: 'a1', text: 'Seine Noten waren für ein Studium nicht gut genug.' },
            { id: 'a2', text: 'Er wollte praktisch arbeiten und Geld verdienen.' },
            { id: 'a3', text: 'Seine Eltern wollten es so.' },
            { id: 'a4', text: 'Er wollte schon als Kind Elektriker werden.' },
          ],
          solution: ['a2'],
          explanation:
            'Marek sagt: „Ich wollte endlich praktisch arbeiten und eigenes Geld verdienen.“ Von Noten oder Eltern ist nicht die Rede.',
        },
        {
          id: 'i1-2-info-als-wenn',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: '„als“ oder „wenn“?',
          text: 'Beide leiten einen Nebensatz ein, das Verb steht am Ende. Für die Vergangenheit gilt: „als“ bei einem einmaligen Ereignis oder einem Zeitraum, der nur einmal war (als Kind, als ich 18 war). „wenn“ bei etwas, das sich wiederholt hat – oft mit „immer“ oder „jedes Mal“. In der Gegenwart und Zukunft steht immer „wenn“.',
          table: {
            headers: ['', 'Beispiel'],
            rows: [
              ['einmal, Vergangenheit → als', 'Als ich mit der Schule fertig war, wollte ich arbeiten.'],
              ['Zeitraum, Vergangenheit → als', 'Als ich Kind war, wohnten wir in Graz.'],
              ['wiederholt, Vergangenheit → wenn', '(Immer) wenn meine Oma krank war, habe ich sie untersucht.'],
              ['Gegenwart / Zukunft → wenn', 'Wenn ich das Studium beende, bin ich 26.'],
            ],
          },
        },
        {
          id: 'i1-2-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie „als“ oder „wenn“.',
          wordBank: ['als', 'wenn'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. ' },
            { kind: 'GAP', gapId: 'w1', solution: ['Als'], width: 5 },
            { kind: 'TEXT', text: ' ich mein Abitur bekommen habe, haben wir eine große Party gefeiert.\n2. Immer ' },
            { kind: 'GAP', gapId: 'w2', solution: ['wenn'], width: 5 },
            { kind: 'TEXT', text: ' wir eine Prüfung hatten, konnte ich nicht schlafen.\n3. ' },
            { kind: 'GAP', gapId: 'w3', solution: ['Als'], width: 5 },
            { kind: 'TEXT', text: ' ich zwölf war, bin ich zum ersten Mal allein mit dem Zug gefahren.\n4. ' },
            { kind: 'GAP', gapId: 'w4', solution: ['Wenn'], width: 5 },
            { kind: 'TEXT', text: ' ich nächstes Jahr mit der Ausbildung fertig bin, möchte ich ins Ausland gehen.\n5. Jedes Mal, ' },
            { kind: 'GAP', gapId: 'w5', solution: ['wenn'], width: 5 },
            { kind: 'TEXT', text: ' der Lehrer den Raum verlassen hat, wurde es laut.' },
          ],
        },
        {
          id: 'i1-2-order',
          type: 'ORDERING',
          instruction: 'Bilden Sie einen Satz. Beginnen Sie mit „Als“.',
          items: [
            { id: 'o1', text: 'Als' },
            { id: 'o2', text: 'ich' },
            { id: 'o3', text: 'in Wien' },
            { id: 'o4', text: 'studiert habe,' },
            { id: 'o5', text: 'habe' },
            { id: 'o6', text: 'ich' },
            { id: 'o7', text: 'in einer WG' },
            { id: 'o8', text: 'gewohnt.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5', 'o6', 'o7', 'o8'],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – indirekte Fragen mit „ob“ und Fragewort.
  {
    order: 3,
    title: 'Können Sie mir sagen, ob …?',
    subtitle: 'Indirekte Fragen',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'i1-3-h1', type: 'HEADING', level: 1, text: 'Können Sie mir sagen, ob …?' },
        {
          id: 'i1-3-intro',
          type: 'TEXT',
          text: 'Aylin möchte neben dem Studium einen Spanischkurs an der Volkshochschule besuchen. Sie ruft bei der Beratung an. Achten Sie darauf, wie sie ihre Fragen stellt: nicht direkt („Wann beginnt der Kurs?“), sondern höflich verpackt.',
        },
        {
          id: 'i1-3-dlg',
          type: 'DIALOGUE',
          title: 'Am Telefon',
          lines: [
            { speaker: 'Beratung', text: 'Volkshochschule Mitte, Sie sprechen mit Frau Lindner. Was kann ich für Sie tun?' },
            { speaker: 'Aylin', text: 'Guten Tag, ich interessiere mich für einen Spanischkurs. Können Sie mir sagen, wann der nächste Kurs beginnt?' },
            { speaker: 'Beratung', text: 'Gern. Der nächste Anfängerkurs beginnt am 14. Oktober, immer dienstags um 18 Uhr.' },
            { speaker: 'Aylin', text: 'Ich habe schon ein bisschen Spanisch gelernt. Wissen Sie, ob es auch einen Kurs für Fortgeschrittene gibt?' },
            { speaker: 'Beratung', text: 'Ja, donnerstags. Wir machen vorher einen kurzen Einstufungstest.' },
            { speaker: 'Aylin', text: 'Gut. Und ich wollte noch fragen, wie viel der Kurs kostet und ob Studierende eine Ermäßigung bekommen.' },
            { speaker: 'Beratung', text: 'Der Kurs kostet 145 Euro. Mit Studierendenausweis bezahlen Sie 20 Prozent weniger.' },
          ],
        },
        {
          id: 'i1-3-info-indirekt',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Indirekte Fragen',
          text: 'Eine indirekte Frage ist ein Nebensatz: Das Verb steht am Ende. Sie beginnt mit einem Einleitungssatz wie „Können Sie mir sagen, …“, „Wissen Sie, …“, „Ich möchte wissen, …“ oder „Ich frage mich, …“. W-Fragen behalten ihr Fragewort. Ja/Nein-Fragen bekommen „ob“. Das Fragezeichen steht nur, wenn der Einleitungssatz selbst eine Frage ist.',
          table: {
            headers: ['direkte Frage', 'indirekte Frage'],
            rows: [
              ['Wann beginnt der Kurs?', 'Können Sie mir sagen, wann der Kurs beginnt?'],
              ['Wie viel kostet der Kurs?', 'Ich möchte wissen, wie viel der Kurs kostet.'],
              ['Gibt es einen Kurs für Fortgeschrittene?', 'Wissen Sie, ob es einen Kurs für Fortgeschrittene gibt?'],
              ['Bekommen Studierende eine Ermäßigung?', 'Ich frage mich, ob Studierende eine Ermäßigung bekommen.'],
            ],
          },
        },
        {
          id: 'i1-3-info-ob-wenn',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: '„ob“ ist nicht „wenn“',
          text: 'In vielen Sprachen gibt es für „ob“ und „wenn“ nur ein Wort (if, si, se). Im Deutschen nicht: „ob“ steht für eine offene Ja/Nein-Frage, „wenn“ für eine Bedingung. Ich weiß nicht, ob er kommt (vielleicht ja, vielleicht nein). Wenn er kommt, kochen wir (unter dieser Bedingung).',
        },
        {
          id: 'i1-3-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie „ob“ oder ein Fragewort.',
          wordBank: ['ob', 'wann', 'wo', 'wie lange', 'warum'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Wissen Sie, ' },
            { kind: 'GAP', gapId: 'q1', solution: ['wo'], width: 5 },
            { kind: 'TEXT', text: ' der Kurs stattfindet? – In Raum 204.\n2. Können Sie mir sagen, ' },
            { kind: 'GAP', gapId: 'q2', solution: ['ob'], width: 5 },
            { kind: 'TEXT', text: ' ich ein Wörterbuch mitbringen muss? – Nein, das brauchen Sie nicht.\n3. Ich möchte wissen, ' },
            { kind: 'GAP', gapId: 'q3', solution: ['wie lange'], width: 10 },
            { kind: 'TEXT', text: ' der Kurs dauert. – Zwölf Wochen.\n4. Darf ich fragen, ' },
            { kind: 'GAP', gapId: 'q4', solution: ['warum'], width: 7 },
            { kind: 'TEXT', text: ' Sie Spanisch lernen möchten? – Ich fahre im Sommer nach Chile.\n5. Wissen Sie schon, ' },
            { kind: 'GAP', gapId: 'q5', solution: ['wann'], width: 6 },
            { kind: 'TEXT', text: ' die Prüfung ist? – Am letzten Kurstag.' },
          ],
        },
        {
          id: 'i1-3-choice',
          type: 'CHOICE',
          instruction: 'Welche Sätze sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'c1', text: 'Können Sie mir sagen, wo ist das Sekretariat?' },
            { id: 'c2', text: 'Können Sie mir sagen, wo das Sekretariat ist?' },
            { id: 'c3', text: 'Ich weiß nicht, ob ich die Prüfung bestanden habe.' },
            { id: 'c4', text: 'Ich weiß nicht, wenn ich die Prüfung bestanden habe.' },
          ],
          solution: ['c2', 'c3'],
          explanation:
            'In der indirekten Frage steht das Verb am Ende: …, wo das Sekretariat ist. Für eine offene Ja/Nein-Frage steht „ob“, nicht „wenn“.',
        },
        {
          id: 'i1-3-order',
          type: 'ORDERING',
          instruction: 'Bilden Sie eine indirekte Frage.',
          items: [
            { id: 'o1', text: 'Wissen' },
            { id: 'o2', text: 'Sie,' },
            { id: 'o3', text: 'ob' },
            { id: 'o4', text: 'die Bibliothek' },
            { id: 'o5', text: 'am Samstag' },
            { id: 'o6', text: 'geöffnet' },
            { id: 'o7', text: 'ist?' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5', 'o6', 'o7'],
        },
        {
          id: 'i1-3-match',
          type: 'MATCHING',
          instruction: 'Welche indirekte Frage passt zur direkten Frage?',
          left: [
            { id: 'l1', text: 'Ist der Kurs schon voll?' },
            { id: 'l2', text: 'Wer unterrichtet den Kurs?' },
            { id: 'l3', text: 'Kann man online bezahlen?' },
            { id: 'l4', text: 'Wie viele Leute sind im Kurs?' },
          ],
          right: [
            { id: 'r1', text: 'Wissen Sie, ob der Kurs schon voll ist?' },
            { id: 'r2', text: 'Können Sie mir sagen, wer den Kurs unterrichtet?' },
            { id: 'r3', text: 'Ich möchte wissen, ob man online bezahlen kann.' },
            { id: 'r4', text: 'Darf ich fragen, wie viele Leute im Kurs sind?' },
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
  // Seite 4 – ein Artikel über Lernstrategien, einen Text zusammenfassen.
  {
    order: 4,
    title: 'Wie lernt man am besten?',
    subtitle: 'Lernstrategien, einen Text zusammenfassen',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'i1-4-h1', type: 'HEADING', level: 1, text: 'Wie lernt man am besten?' },
        {
          id: 'i1-4-text',
          type: 'TEXT',
          text: 'Lernen ohne Stress – fünf Tipps aus der Forschung\n\nViele Schüler und Studierende lernen erst am Abend vor der Prüfung. Das fühlt sich produktiv an, bringt aber wenig: Was man in einer Nacht in den Kopf presst, ist nach wenigen Tagen meistens wieder vergessen.\n\nBesser ist es, den Stoff auf mehrere kurze Einheiten zu verteilen. Zwanzig Minuten an fünf Tagen sind wirksamer als zwei Stunden an einem Abend. Fachleute nennen das „verteiltes Lernen“.\n\nZweitens lohnt es sich, sich selbst abzufragen, statt den Text immer wieder zu lesen. Wer versucht, sich an eine Information zu erinnern, speichert sie fester im Gedächtnis.\n\nDrittens hilft es, den Stoff jemand anderem zu erklären. Dabei merkt man schnell, was man selbst noch nicht verstanden hat.\n\nViertens: Pausen sind kein Zeitverlust. Das Gehirn braucht sie, um Neues zu ordnen. Und fünftens spielt der Schlaf eine große Rolle – wer vor einer Prüfung die Nacht durchmacht, schadet sich eher, als dass er sich hilft.',
        },
        {
          id: 'i1-4-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: Lernen',
          items: [
            {
              term: 'Stoff',
              article: 'der',
              translations: { en: 'material (to be learned)', es: 'la materia', fr: 'la matière', it: 'la materia' },
              example: 'Der Stoff für die Prüfung ist sehr umfangreich.',
            },
            {
              term: 'sich etwas merken',
              translations: { en: 'to remember sth.', es: 'retener algo', fr: 'retenir qc', it: 'memorizzare qc' },
              example: 'Ich kann mir Namen schlecht merken.',
            },
            {
              term: 'Gedächtnis',
              article: 'das',
              translations: { en: 'memory', es: 'la memoria', fr: 'la mémoire', it: 'la memoria' },
            },
            {
              term: 'wirksam',
              translations: { en: 'effective', es: 'eficaz', fr: 'efficace', it: 'efficace' },
            },
            {
              term: 'sich lohnen',
              translations: { en: 'to be worth it', es: 'valer la pena', fr: 'valoir la peine', it: 'valere la pena' },
              example: 'Es lohnt sich, früh anzufangen.',
            },
            {
              term: 'jemanden abfragen',
              translations: { en: 'to test sb. (orally)', es: 'preguntar la lección a alguien', fr: 'interroger qn', it: 'interrogare qn' },
            },
            {
              term: 'die Nacht durchmachen',
              translations: { en: 'to stay up all night', es: 'pasar la noche en vela', fr: 'faire une nuit blanche', it: 'fare la notte in bianco' },
            },
            {
              term: 'Prüfung',
              article: 'die',
              plural: 'die Prüfungen',
              translations: { en: 'exam', es: 'el examen', fr: 'l’examen', it: 'l’esame' },
              example: 'Sie hat die Prüfung bestanden.',
            },
          ],
        },
        {
          id: 'i1-4-choice',
          type: 'CHOICE',
          instruction: 'Was steht im Artikel? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'a1', text: 'Kurze Lerneinheiten an mehreren Tagen sind besser als eine lange.' },
            { id: 'a2', text: 'Man sollte einen Text möglichst oft lesen.' },
            { id: 'a3', text: 'Wenn man etwas erklärt, merkt man, was man noch nicht verstanden hat.' },
            { id: 'a4', text: 'Vor einer Prüfung sollte man wenig schlafen und mehr lernen.' },
          ],
          solution: ['a1', 'a3'],
          explanation:
            'Der Artikel empfiehlt, sich selbst abzufragen, „statt den Text immer wieder zu lesen“. Und wer vor der Prüfung die Nacht durchmacht, „schadet sich eher“.',
        },
        {
          id: 'i1-4-info-zusammenfassen',
          type: 'INFO',
          variant: 'TIP',
          title: 'Einen Text zusammenfassen',
          text: 'Eine Zusammenfassung gibt nur das Wichtigste wieder – in eigenen Worten, im Präsens und ohne die eigene Meinung. Nennen Sie am Anfang Titel und Thema, dann die Hauptpunkte in der Reihenfolge des Textes. Diese Wendungen helfen:',
          table: {
            headers: ['Zweck', 'Redemittel'],
            rows: [
              ['Thema nennen', 'Der Text handelt von … / In dem Artikel geht es um …'],
              ['Hauptpunkte', 'Zuerst wird erklärt, dass … / Außerdem … / Ein weiterer Punkt ist …'],
              ['Position des Autors', 'Der Autor / Die Autorin meint, dass …'],
              ['Schluss', 'Zusammenfassend kann man sagen, dass …'],
            ],
          },
        },
        {
          id: 'i1-4-match',
          type: 'MATCHING',
          instruction: 'Welche Überschrift passt zu welchem Tipp?',
          left: [
            { id: 'l1', text: 'Zwanzig Minuten an fünf Tagen' },
            { id: 'l2', text: 'Sich an Informationen erinnern' },
            { id: 'l3', text: 'Den Stoff jemand anderem erklären' },
            { id: 'l4', text: 'Genug schlafen' },
          ],
          right: [
            { id: 'r1', text: 'Verteiltes Lernen' },
            { id: 'r2', text: 'Sich selbst abfragen' },
            { id: 'r3', text: 'Lücken entdecken' },
            { id: 'r4', text: 'Das Gehirn braucht Ruhe' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'i1-4-writing',
          type: 'WRITING',
          instruction: 'Fassen Sie den Artikel zusammen.',
          prompt:
            'Schreiben Sie eine Zusammenfassung des Artikels „Lernen ohne Stress“ in vier bis sechs Sätzen. Benutzen Sie mindestens zwei Redemittel aus dem Kasten. Ihre eigene Meinung gehört nicht hinein.',
          minWords: 50,
          maxWords: 120,
          aiFeedback: true,
          sampleAnswer:
            'In dem Artikel „Lernen ohne Stress“ geht es darum, wie man effektiv lernt. Zuerst wird erklärt, dass Lernen am Abend vor der Prüfung wenig bringt. Besser ist es, den Stoff auf mehrere kurze Einheiten zu verteilen. Außerdem soll man sich selbst abfragen und den Stoff anderen erklären. Ein weiterer Punkt ist, dass Pausen und genug Schlaf wichtig sind. Zusammenfassend kann man sagen, dass regelmäßiges Lernen mit Pausen am wirksamsten ist.',
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – Rückblick auf das ganze Kapitel.
  {
    order: 5,
    title: 'Kannst du das schon?',
    subtitle: 'Rückblick auf das ganze Kapitel',
    estimatedMinutes: 20,
    content: {
      version: v,
      blocks: [
        { id: 'i1-5-h1', type: 'HEADING', level: 1, text: 'Kannst du das schon?' },
        {
          id: 'i1-5-intro',
          type: 'TEXT',
          text: 'Prüfen Sie, was Sie aus Kapitel 1 mitnehmen: das Schulsystem, „als“ und „wenn“ und die indirekte Frage. Am Ende schreiben Sie eine E-Mail an eine Sprachschule.',
        },
        {
          id: 'i1-5-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie den Text.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'In Deutschland gehen alle Kinder zuerst in die ' },
            { kind: 'GAP', gapId: 'r1', solution: ['Grundschule'], width: 12 },
            { kind: 'TEXT', text: '. Wer auf das Gymnasium geht, macht am Ende das ' },
            { kind: 'GAP', gapId: 'r2', solution: ['Abitur'], width: 7 },
            { kind: 'TEXT', text: '. Bei einer dualen ' },
            { kind: 'GAP', gapId: 'r3', solution: ['Ausbildung'], width: 11 },
            { kind: 'TEXT', text: ' lernt man im Betrieb und in der Berufsschule. ' },
            { kind: 'GAP', gapId: 'r4', solution: ['Als'], width: 5 },
            { kind: 'TEXT', text: ' ich 16 war, habe ich ein Praktikum in einer Bäckerei gemacht. Ich weiß noch nicht, ' },
            { kind: 'GAP', gapId: 'r5', solution: ['ob'], width: 4 },
            { kind: 'TEXT', text: ' ich später studieren möchte.' },
          ],
        },
        {
          id: 'i1-5-choice',
          type: 'CHOICE',
          instruction: 'Welche Sätze sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'k1', text: 'Wenn ich klein war, habe ich viel gemalt.' },
            { id: 'k2', text: 'Als ich klein war, habe ich viel gemalt.' },
            { id: 'k3', text: 'Kannst du mir sagen, wann der Zug fährt ab?' },
            { id: 'k4', text: 'Ich möchte wissen, wie lange die Ausbildung dauert.' },
          ],
          solution: ['k2', 'k4'],
          explanation:
            '„als ich klein war“ ist ein Zeitraum, der nur einmal war – also „als“. In der indirekten Frage steht das ganze Verb am Ende, auch bei trennbaren Verben: …, wann der Zug abfährt.',
        },
        {
          id: 'i1-5-match',
          type: 'MATCHING',
          instruction: 'Was passt zusammen?',
          left: [
            { id: 'm1', text: 'Der Text handelt' },
            { id: 'm2', text: 'Zusammenfassend kann man sagen,' },
            { id: 'm3', text: 'Ich frage mich,' },
            { id: 'm4', text: 'Immer wenn ich Prüfungen hatte,' },
          ],
          right: [
            { id: 'y1', text: 'von neuen Lernmethoden.' },
            { id: 'y2', text: 'dass Pausen wichtig sind.' },
            { id: 'y3', text: 'ob ich die richtige Entscheidung getroffen habe.' },
            { id: 'y4', text: 'war ich sehr nervös.' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'y1' },
            { leftId: 'm2', rightId: 'y2' },
            { leftId: 'm3', rightId: 'y3' },
            { leftId: 'm4', rightId: 'y4' },
          ],
        },
        {
          id: 'i1-5-order',
          type: 'ORDERING',
          instruction: 'Bilden Sie einen Satz.',
          items: [
            { id: 'o1', text: 'Können' },
            { id: 'o2', text: 'Sie' },
            { id: 'o3', text: 'mir' },
            { id: 'o4', text: 'sagen,' },
            { id: 'o5', text: 'wie viel' },
            { id: 'o6', text: 'die Anmeldung' },
            { id: 'o7', text: 'kostet?' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5', 'o6', 'o7'],
        },
        {
          id: 'i1-5-writing',
          type: 'WRITING',
          instruction: 'Eine Anfrage an eine Sprachschule',
          prompt:
            'Sie möchten einen Abendkurs an einer Sprachschule besuchen. Schreiben Sie eine E-Mail: Stellen Sie sich kurz vor (Bildungsweg, Beruf), erklären Sie, warum Sie den Kurs machen möchten, und stellen Sie mindestens drei höfliche indirekte Fragen (Beginn, Preis, Kursniveau, Prüfung …).',
          minWords: 70,
          maxWords: 160,
          aiFeedback: true,
          sampleAnswer:
            'Sehr geehrte Damen und Herren,\n\nmein Name ist Lucía Ortega, ich komme aus Valencia und wohne seit einem Jahr in Freiburg. In Spanien habe ich Pflege studiert, und jetzt möchte ich hier als Krankenpflegerin arbeiten. Dafür brauche ich ein Deutschzertifikat auf dem Niveau B2.\n\nKönnen Sie mir sagen, wann der nächste B2-Abendkurs beginnt? Ich möchte außerdem wissen, wie viel der Kurs kostet und ob die Prüfung im Preis enthalten ist. Wissen Sie auch, ob man vorher einen Einstufungstest machen muss?\n\nVielen Dank für Ihre Antwort.\n\nMit freundlichen Grüßen\nLucía Ortega',
        },
      ],
    },
  },
];
