import type { UnitSeed } from './chapter-beginner-1';

/**
 * Advanced, Kapitel 9: „Stil und Register“ (C2, Kapitel 3)
 *
 * Fünf Seiten. Vom Behördenbrief bis zur Sprachnachricht: dasselbe sagen,
 * ganz anders. Das Kapitel durchläuft die Registerskala, zeigt die Eigenheiten
 * des gesprochenen Deutsch, übt Ironie und Untertreibung und endet mit dem
 * stilistischen Überarbeiten eines Textes.
 *
 * Aufbau: Seite 1 die Registerskala, Seite 2 gesprochenes Deutsch, Seite 3
 * Ironie und Untertreibung, Seite 4 Amtsdeutsch verständlich machen,
 * Seite 5 Wiederholung und Umformung eines Textes in mehrere Register.
 *
 * Regional gebundene Formen sind gekennzeichnet. Sämtliche Texte sind
 * eigenständig verfasst.
 */
const v = 1;

export const ADVANCED_9_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – die Registerskala.
  {
    order: 1,
    title: 'Versterben, sterben, abkratzen',
    subtitle: 'Die Registerskala',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'a9-1-h1', type: 'HEADING', level: 1, text: 'Versterben, sterben, abkratzen' },
        {
          id: 'a9-1-intro',
          type: 'TEXT',
          text: '„Er ist verstorben“, „er ist gestorben“, „er ist abgekratzt“ – drei Sätze, ein Sachverhalt. Wer den dritten in einer Traueranzeige liest, ist schockiert; wer den ersten unter Freunden hört, findet ihn steif. Register ist die Wahl der sprachlichen Ebene, die zu Anlass, Medium und Beziehung passt. Auf C2-Niveau geht es nicht mehr darum, ein Register zu beherrschen, sondern darum, sicher zwischen ihnen zu wechseln.',
        },
        {
          id: 'a9-1-info-skala',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Die Skala',
          text: 'Man unterscheidet grob fünf Ebenen. Neben dem Wortschatz ändern sich auch Satzbau (Nebensätze vs. Aneinanderreihung), Anrede (Sie vs. du) und Höflichkeitsformen. Wörterbücher markieren Register mit Abkürzungen wie „geh.“ (gehoben), „ugs.“ (umgangssprachlich) oder „derb“.',
          table: {
            headers: ['gehoben', 'standardsprachlich', 'umgangssprachlich', 'salopp / derb'],
            rows: [
              ['versterben', 'sterben', 'draufgehen', 'abkratzen'],
              ['speisen', 'essen', 'futtern', 'fressen'],
              ['das Antlitz', 'das Gesicht', '—', 'die Visage'],
              ['sich begeben', 'gehen', 'abhauen', 'sich verpissen'],
              ['die Gattin', 'die Ehefrau', 'die Frau', 'die Alte'],
            ],
          },
        },
        {
          id: 'a9-1-match',
          type: 'MATCHING',
          instruction: 'Ordnen Sie dem umgangssprachlichen Ausdruck den standardsprachlichen zu.',
          left: [
            { id: 'l1', text: 'die Kohle' },
            { id: 'l2', text: 'pennen' },
            { id: 'l3', text: 'die Glotze' },
            { id: 'l4', text: 'kapieren' },
            { id: 'l5', text: 'die Bude' },
          ],
          right: [
            { id: 'r1', text: 'das Geld' },
            { id: 'r2', text: 'schlafen' },
            { id: 'r3', text: 'der Fernseher' },
            { id: 'r4', text: 'verstehen' },
            { id: 'r5', text: 'die Wohnung, das Zimmer' },
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
          id: 'a9-1-choice',
          type: 'CHOICE',
          instruction: 'Welcher Satz passt in eine Beileidskarte an eine Kollegin?',
          question: 'Wählen Sie.',
          multiple: false,
          options: [
            { id: 'c1', text: 'Tut mir echt leid, dass dein Vater gestorben ist.' },
            { id: 'c2', text: 'Mit großer Anteilnahme habe ich vom Tod Ihres Vaters erfahren.' },
            { id: 'c3', text: 'Hiermit wird Ihnen das Beileid zum Ableben Ihres Erzeugers ausgesprochen.' },
            { id: 'c4', text: 'Krass, dass dein Vater tot ist.' },
          ],
          solution: ['c2'],
          explanation:
            'Die zweite Formulierung ist gehoben, aber warm. Die erste und vierte sind zu salopp, die dritte ist bürokratisch und durch „Erzeuger“ sogar verletzend.',
        },
        {
          id: 'a9-1-cloze',
          type: 'CLOZE',
          instruction: 'Setzen Sie die standardsprachliche Form ein.',
          wordBank: ['Geld', 'verstanden', 'Wohnung', 'geschlafen'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '„Ich hab null Kohle“ → Ich habe kein ' },
            { kind: 'GAP', gapId: 'g1', solution: ['Geld'], width: 5 },
            { kind: 'TEXT', text: '. „Hast du’s kapiert?“ → Haben Sie es ' },
            { kind: 'GAP', gapId: 'g2', solution: ['verstanden'], width: 11 },
            { kind: 'TEXT', text: '? „Ich hab bis zwölf gepennt“ → Ich habe bis zwölf ' },
            { kind: 'GAP', gapId: 'g3', solution: ['geschlafen'], width: 11 },
            { kind: 'TEXT', text: '. „Seine Bude ist winzig“ → Seine ' },
            { kind: 'GAP', gapId: 'g4', solution: ['Wohnung'], width: 8 },
            { kind: 'TEXT', text: ' ist sehr klein.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – gesprochenes Deutsch.
  {
    order: 2,
    title: 'Wie man wirklich spricht',
    subtitle: 'Merkmale des gesprochenen Deutsch',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'a9-2-h1', type: 'HEADING', level: 1, text: 'Wie man wirklich spricht' },
        {
          id: 'a9-2-intro',
          type: 'TEXT',
          text: 'Gesprochenes Deutsch folgt eigenen Regeln – nicht fehlerhaften, sondern anderen. Wer sie nicht kennt, versteht Gespräche schlechter als Zeitungen, und wer sie beim Sprechen völlig meidet, klingt wie ein Nachrichtensprecher beim Frühstück.',
        },
        {
          id: 'a9-2-dialogue',
          type: 'DIALOGUE',
          title: 'In der WG-Küche',
          lines: [
            { speaker: 'Tom', text: 'Na, alles klar bei dir?' },
            { speaker: 'Mia', text: 'Geht so. Hab die Klausur verhauen, glaub ich.' },
            { speaker: 'Tom', text: 'Echt jetzt? Die war doch gar nicht so schwer, oder?' },
            { speaker: 'Mia', text: 'Für dich vielleicht. Ich hab ’ne Stunde an der ersten Aufgabe gehangen. Na ja, egal.' },
            { speaker: 'Tom', text: 'Komm, wir gehen heut Abend was trinken. Dann denkste nicht mehr dran.' },
            { speaker: 'Mia', text: 'Okay, aber nicht so spät. Morgen hab ich um acht Vorlesung.' },
          ],
        },
        {
          id: 'a9-2-info-merkmale',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Typische Merkmale',
          text: 'Im gesprochenen Deutsch werden Endungen und Pronomen verschliffen („hab“, „’ne“, „denkste“), das Subjekt fällt am Satzanfang weg („Hab die Klausur verhauen“), Gesprächspartikeln steuern das Gespräch („na“, „na ja“, „oder?“), und „weil“ steht oft mit Hauptsatzstellung („weil – ich hatte keine Zeit“). In Texten sollte man diese Formen meiden – außer in wörtlicher Rede.',
          table: {
            headers: ['Merkmal', 'gesprochen', 'geschrieben'],
            rows: [
              ['Verschleifung', 'Ich hab ’ne Frage.', 'Ich habe eine Frage.'],
              ['Subjektellipse', 'Weiß ich nicht.', 'Das weiß ich nicht.'],
              ['Rückversicherung', 'Das war gut, oder? / ne?', 'Das war gut, nicht wahr?'],
              ['weil + Hauptsatz', 'weil – ich hatte keine Zeit', 'weil ich keine Zeit hatte'],
              ['Klitisierung', 'Gehste mit?', 'Gehst du mit?'],
            ],
          },
        },
        {
          id: 'a9-2-match',
          type: 'MATCHING',
          instruction: 'Wie lautet die geschriebene Form?',
          left: [
            { id: 'l1', text: 'Haste Zeit?' },
            { id: 'l2', text: 'Weiß ich nicht.' },
            { id: 'l3', text: 'Gibt’s ’n Problem?' },
            { id: 'l4', text: 'Kommste mit?' },
          ],
          right: [
            { id: 'r1', text: 'Hast du Zeit?' },
            { id: 'r2', text: 'Das weiß ich nicht.' },
            { id: 'r3', text: 'Gibt es ein Problem?' },
            { id: 'r4', text: 'Kommst du mit?' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'a9-2-info-regional',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'Regional verschieden',
          text: 'Gerade die Umgangssprache ist regional gefärbt. Eine Brötchen-Bestellung sagt oft mehr über die Herkunft als der Akzent. Alle Formen sind in ihrer Region korrekt.',
          table: {
            headers: ['Norddeutschland', 'Süddeutschland', 'Österreich', 'Schweiz'],
            rows: [
              ['Moin!', 'Grüß Gott! / Servus!', 'Servus! / Grüß Gott!', 'Grüezi! / Hoi!'],
              ['das Brötchen', 'die Semmel / das Weckle', 'die Semmel', 'das Brötli / das Weggli'],
              ['Tschüss!', 'Ade! / Pfiat di!', 'Baba! / Servus!', 'Adieu! / Tschau!'],
              ['Sonnabend (auch)', 'Samstag', 'Samstag', 'Samstag'],
            ],
          },
        },
        {
          id: 'a9-2-choice',
          type: 'CHOICE',
          instruction: 'Lesen Sie den Dialog.',
          question: 'Was bedeutet „Hab die Klausur verhauen“?',
          multiple: false,
          options: [
            { id: 'd1', text: 'Ich habe die Klausur sehr gut geschrieben.' },
            { id: 'd2', text: 'Ich habe die Klausur wahrscheinlich nicht bestanden.' },
            { id: 'd3', text: 'Ich habe die Klausur verpasst.' },
            { id: 'd4', text: 'Ich habe jemanden in der Klausur geschlagen.' },
          ],
          solution: ['d2'],
          explanation:
            '„etwas verhauen“ ist umgangssprachlich für „etwas gründlich falsch machen“. Das Subjekt „ich“ ist, typisch für gesprochene Sprache, weggefallen.',
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – Ironie und Untertreibung.
  {
    order: 3,
    title: 'Na, super!',
    subtitle: 'Ironie und Untertreibung erkennen',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'a9-3-h1', type: 'HEADING', level: 1, text: 'Na, super!' },
        {
          id: 'a9-3-intro',
          type: 'TEXT',
          text: 'Der Zug fällt aus, es regnet, der Schirm ist zu Hause – „Na, super!“. Niemand versteht das als Begeisterung. Ironie sagt das Gegenteil des Gemeinten und verlässt sich darauf, dass die Situation es auflöst. Ihre leise Schwester ist die Untertreibung: „Das war nicht ganz optimal“ über ein komplettes Scheitern.',
        },
        {
          id: 'a9-3-info-ironie',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Signale der Ironie',
          text: 'Ironie erkennt man am Widerspruch zur Situation, oft auch an übertriebenem Lob, Partikeln wie „ja“ oder „wirklich“ und an festen Wendungen. Schriftlich fehlt die Intonation; deshalb wird Ironie in E-Mails leicht missverstanden.',
          table: {
            headers: ['Wendung', 'Gemeint'],
            rows: [
              ['Na, super! / Na toll!', 'Das ist ärgerlich.'],
              ['Das hast du ja prima hingekriegt.', 'Das ist schiefgegangen.'],
              ['Du bist mir ja ein schöner Freund.', 'Du hast dich nicht wie ein Freund verhalten.'],
              ['Das fängt ja gut an.', 'Der Anfang ist schon schlecht.'],
              ['Wie originell.', 'Das ist ganz und gar nicht originell.'],
            ],
          },
        },
        {
          id: 'a9-3-choice',
          type: 'CHOICE',
          instruction: 'Wie ist die Äußerung gemeint?',
          question: 'Ihr Kollege verschüttet am ersten Arbeitstag Kaffee über die Tastatur des Chefs. Er sagt: „Das fängt ja gut an.“',
          multiple: false,
          options: [
            { id: 'i1', text: 'Er freut sich über den guten Start.' },
            { id: 'i2', text: 'Er meint ironisch, dass der Start misslungen ist.' },
            { id: 'i3', text: 'Er fragt, ob der Arbeitstag schon begonnen hat.' },
            { id: 'i4', text: 'Er entschuldigt sich förmlich.' },
          ],
          solution: ['i2'],
          explanation:
            'Die Wendung „Das fängt ja gut an“ ist fast immer ironisch. Die Partikel „ja“ und der offensichtliche Widerspruch zur Situation machen das klar.',
        },
        {
          id: 'a9-3-info-untertreibung',
          type: 'INFO',
          variant: 'TIP',
          title: 'Die Untertreibung',
          text: 'Die Untertreibung (Litotes) verneint das Gegenteil: „nicht schlecht“ heißt „gut“, „nicht ganz billig“ heißt „teuer“. Sie wirkt höflich, zurückhaltend oder humorvoll – und ist im Deutschen besonders beliebt, um Lob oder Kritik abzumildern. „Nicht schlecht!“ kann ein großes Kompliment sein.',
          table: {
            headers: ['Untertreibung', 'Bedeutung'],
            rows: [
              ['Das ist nicht ganz unproblematisch.', 'Das ist ein ernstes Problem.'],
              ['Nicht schlecht!', 'Sehr gut!'],
              ['Er ist nicht gerade fleißig.', 'Er ist faul.'],
              ['Das war nicht ganz billig.', 'Das war sehr teuer.'],
            ],
          },
        },
        {
          id: 'a9-3-match',
          type: 'MATCHING',
          instruction: 'Was ist eigentlich gemeint?',
          left: [
            { id: 'l1', text: 'Die Lage ist nicht ganz einfach.' },
            { id: 'l2', text: 'Sie ist nicht gerade gesprächig.' },
            { id: 'l3', text: 'Na toll, der Akku ist leer.' },
            { id: 'l4', text: 'Nicht übel, dein Kuchen!' },
          ],
          right: [
            { id: 'r1', text: 'Die Lage ist schwierig.' },
            { id: 'r2', text: 'Sie redet sehr wenig.' },
            { id: 'r3', text: 'Das ist ärgerlich.' },
            { id: 'r4', text: 'Dein Kuchen ist richtig gut.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'a9-3-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die Untertreibung.',
          wordBank: ['ganz', 'gerade', 'schlecht', 'unproblematisch'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Das Hotel war nicht ' },
            { kind: 'GAP', gapId: 'u1', solution: ['ganz'], width: 5 },
            { kind: 'TEXT', text: ' billig. Der Service war nicht ' },
            { kind: 'GAP', gapId: 'u2', solution: ['gerade'], width: 7 },
            { kind: 'TEXT', text: ' schnell. Das Essen dagegen war nicht ' },
            { kind: 'GAP', gapId: 'u3', solution: ['schlecht'], width: 9 },
            { kind: 'TEXT', text: '. Die Rückreise bei Sturm war allerdings nicht ganz ' },
            { kind: 'GAP', gapId: 'u4', solution: ['unproblematisch'], width: 16 },
            { kind: 'TEXT', text: '.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – Amtsdeutsch verständlich machen.
  {
    order: 4,
    title: 'Klartext statt Amtsdeutsch',
    subtitle: 'Einen Text stilistisch überarbeiten',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'a9-4-h1', type: 'HEADING', level: 1, text: 'Klartext statt Amtsdeutsch' },
        {
          id: 'a9-4-text',
          type: 'TEXT',
          text: '„Bei Nichteinhaltung der Frist erfolgt eine kostenpflichtige Mahnung. Zur Vermeidung von Verzögerungen bei der Bearbeitung wird um vollständige Beifügung der Unterlagen gebeten.“\n\nSo schreiben Behörden seit Generationen. Viele Städte haben inzwischen erkannt, dass solche Sätze Bürgerinnen und Bürger abschrecken, und überarbeiten ihre Briefe. Die Grundregeln sind einfach: Verben statt Substantive, aktive statt passive Sätze, den Leser direkt ansprechen, das Wichtigste zuerst.',
        },
        {
          id: 'a9-4-info-regeln',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Vier Regeln für klare Texte',
          text: 'Jede Regel hat ihre Ausnahme: Ein Passiv ist sinnvoll, wenn der Handelnde unbekannt oder unwichtig ist. Aber als Grundhaltung führen die Regeln zu Texten, die man beim ersten Lesen versteht.',
          table: {
            headers: ['Regel', 'Amtsdeutsch', 'Klartext'],
            rows: [
              ['Verben statt Substantive', 'bei Nichteinhaltung der Frist', 'wenn Sie die Frist nicht einhalten'],
              ['aktiv statt passiv', 'Es wird um Beifügung gebeten.', 'Bitte legen Sie … bei.'],
              ['direkt ansprechen', 'Der Antragsteller hat …', 'Sie müssen …'],
              ['kurze Sätze', 'Zur Vermeidung von Verzögerungen bei der Bearbeitung …', 'Dann können wir schneller bearbeiten.'],
            ],
          },
        },
        {
          id: 'a9-4-choice',
          type: 'CHOICE',
          instruction: 'Welche Fassung ist am klarsten?',
          question: 'Original: „Bei Nichteinhaltung der Frist erfolgt eine kostenpflichtige Mahnung.“',
          multiple: false,
          options: [
            { id: 'k1', text: 'Die Nichteinhaltung der Frist führt zur Erfolgung einer Mahnung.' },
            { id: 'k2', text: 'Wenn Sie nicht rechtzeitig zahlen, schicken wir Ihnen eine Mahnung. Sie kostet 5 Euro.' },
            { id: 'k3', text: 'Mahnungen erfolgen bei Fristverletzung kostenpflichtig.' },
            { id: 'k4', text: 'Zahl halt pünktlich.' },
          ],
          solution: ['k2'],
          explanation:
            'Die zweite Fassung verwendet Verben, spricht den Leser an und nennt die Folge konkret. Die vierte ist zwar klar, aber im Register völlig unangemessen.',
        },
        {
          id: 'a9-4-match',
          type: 'MATCHING',
          instruction: 'Ordnen Sie dem Amtsdeutsch den Klartext zu.',
          left: [
            { id: 'l1', text: 'unter Beifügung der Unterlagen' },
            { id: 'l2', text: 'nach erfolgter Prüfung' },
            { id: 'l3', text: 'zwecks Terminvereinbarung' },
            { id: 'l4', text: 'bei Nichtvorliegen der Voraussetzungen' },
          ],
          right: [
            { id: 'r1', text: 'Legen Sie bitte die Unterlagen bei.' },
            { id: 'r2', text: 'wenn wir alles geprüft haben' },
            { id: 'r3', text: 'damit wir einen Termin vereinbaren können' },
            { id: 'r4', text: 'wenn Sie die Bedingungen nicht erfüllen' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'a9-4-cloze',
          type: 'CLOZE',
          instruction: 'Formulieren Sie klar: Ergänzen Sie die Verben.',
          wordBank: ['schicken', 'legen', 'bearbeiten', 'melden'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Bitte ' },
            { kind: 'GAP', gapId: 'v1', solution: ['schicken'], width: 9 },
            { kind: 'TEXT', text: ' Sie uns den Antrag bis zum 30. Juni. ' },
            { kind: 'GAP', gapId: 'v2', solution: ['legen'], width: 6 },
            { kind: 'TEXT', text: ' Sie eine Kopie Ihres Ausweises bei. Dann können wir Ihren Antrag schneller ' },
            { kind: 'GAP', gapId: 'v3', solution: ['bearbeiten'], width: 11 },
            { kind: 'TEXT', text: '. Bei Fragen ' },
            { kind: 'GAP', gapId: 'v4', solution: ['melden'], width: 7 },
            { kind: 'TEXT', text: ' Sie sich gern bei uns.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – Wiederholung und Umformung in mehrere Register.
  {
    order: 5,
    title: 'Dasselbe, ganz anders',
    subtitle: 'Einen Inhalt in drei Registern',
    estimatedMinutes: 34,
    content: {
      version: v,
      blocks: [
        { id: 'a9-5-h1', type: 'HEADING', level: 1, text: 'Dasselbe, ganz anders' },
        {
          id: 'a9-5-intro',
          type: 'TEXT',
          text: 'Registerwechsel betrifft nicht nur die Wörter, sondern auch Satzbau, Anrede und das, was man überhaupt erwähnt. In einer förmlichen E-Mail nennt man den Grund einer Absage knapp; einer Freundin erzählt man die ganze Geschichte. Ein bewusster Registerbruch – ein saloppes Wort in einem förmlichen Text – kann humorvoll wirken, aber nur, wenn er als Absicht erkennbar ist.',
        },
        {
          id: 'a9-5-match',
          type: 'MATCHING',
          instruction: 'Ordnen Sie die Absagen dem passenden Adressaten zu.',
          left: [
            { id: 'l1', text: 'Leider muss ich den Termin am Donnerstag absagen. Könnten wir einen neuen vereinbaren?' },
            { id: 'l2', text: 'Sorry, Donnerstag klappt bei mir nicht, bin total erkältet. Nächste Woche?' },
            { id: 'l3', text: 'Zu meinem großen Bedauern ist es mir nicht möglich, an der Feierstunde am Donnerstag teilzunehmen.' },
          ],
          right: [
            { id: 'r1', text: 'Kollegin aus einer anderen Abteilung' },
            { id: 'r2', text: 'enger Freund' },
            { id: 'r3', text: 'offizielle Einladung des Bürgermeisters' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
          ],
        },
        {
          id: 'a9-5-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die Zusammenfassung des Kapitels.',
          wordBank: ['Register', 'gehoben', 'Subjekt', 'Ironie', 'Untertreibung', 'Verben'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Das ' },
            { kind: 'GAP', gapId: 'z1', solution: ['Register'], width: 9 },
            { kind: 'TEXT', text: ' muss zu Anlass und Beziehung passen. „speisen“ ist ' },
            { kind: 'GAP', gapId: 'z2', solution: ['gehoben'], width: 8 },
            { kind: 'TEXT', text: '. Im Gespräch fällt oft das ' },
            { kind: 'GAP', gapId: 'z3', solution: ['Subjekt'], width: 8 },
            { kind: 'TEXT', text: ' weg. „Na, super!“ ist meist ' },
            { kind: 'GAP', gapId: 'z4', solution: ['Ironie'], width: 7 },
            { kind: 'TEXT', text: ', „nicht schlecht“ eine ' },
            { kind: 'GAP', gapId: 'z5', solution: ['Untertreibung'], width: 14 },
            { kind: 'TEXT', text: '. Klare Texte verwenden ' },
            { kind: 'GAP', gapId: 'z6', solution: ['Verben'], width: 7 },
            { kind: 'TEXT', text: ' statt Substantive.' },
          ],
        },
        {
          id: 'a9-5-writing',
          type: 'WRITING',
          instruction: 'Schreiben Sie drei Fassungen.',
          prompt:
            'Das Fitnessstudio, in dem Sie arbeiten, schließt wegen Renovierung für drei Wochen. Schreiben Sie (insgesamt 200–280 Wörter): (1) eine förmliche E-Mail an alle Mitglieder, (2) einen kurzen, lockeren Beitrag für die Social-Media-Seite des Studios, (3) eine Nachricht an eine befreundete Trainerin. Erklären Sie danach in zwei, drei Sätzen, was sich außer dem Wortschatz verändert hat.',
          minWords: 200,
          maxWords: 290,
          aiFeedback: true,
          sampleAnswer:
            '1. Förmliche E-Mail\nSehr geehrte Mitglieder,\nwegen umfassender Renovierungsarbeiten bleibt unser Studio vom 1. bis zum 21. Juli geschlossen. Wir erneuern in dieser Zeit die Umkleideräume und den Kursraum. Ihre Mitgliedschaft verlängert sich automatisch um drei Wochen; Sie müssen nichts weiter tun. Während der Schließung können Sie kostenlos in unserer Filiale in der Bahnhofstraße trainieren. Wir bitten um Ihr Verständnis und freuen uns, Sie ab dem 22. Juli in neuen Räumen begrüßen zu dürfen.\nMit freundlichen Grüßen\nIhr Team vom Studio Nord\n\n2. Social-Media-Beitrag\nWir machen uns schick! Vom 1. bis 21. Juli ist bei uns Baustelle statt Bankdrücken. Neue Umkleiden, neuer Kursraum – es lohnt sich, versprochen. Bis dahin: ab in die Bahnhofstraße, da trainiert ihr gratis. Wir sehen uns am 22.!\n\n3. Nachricht an eine Kollegin\nHey Jana, haste schon gehört? Wir machen drei Wochen dicht, ab 1. Juli wird renoviert. Endlich kommen die alten Spinde raus! Ich schieb in der Zeit ein paar Schichten in der Bahnhofstraße – bist du auch dabei? Dann können wir wenigstens zusammen jammern.\n\nKommentar\nNeben den Wörtern ändern sich Anrede (Sie, ihr, du), Satzbau und Inhalt: Die E-Mail nennt alle rechtlich wichtigen Informationen vollständig, der Beitrag setzt auf Wortspiel und Ausrufe, die private Nachricht verzichtet auf Details und teilt stattdessen Gefühle.',
        },
      ],
    },
  },
];
