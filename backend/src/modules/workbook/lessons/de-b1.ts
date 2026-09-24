import {
  INTERMEDIATE as I,
  GRAMMAR as G,
  choice,
  cloze,
  culture,
  dialogue,
  grammar,
  lessons,
  match,
  order,
  text,
  tip,
  vocabBuilder,
} from './builders';

const words = vocabBuilder('en');

/** Deutsch B1 – Intermediate, Kapitel 1 bis 6, dazu die B1-Kapitel des Grammatikbuchs. */
export const DE_B1 = lessons('de-b1', [
  // ------------------------------------------------ Kapitel 1: Bildung und Lernen
  {
    kind: 'TEXT',
    title: 'Das Schulsystem',
    ref: [I, 1, 1],
    learn: [
      culture(
        'Nach der Grundschule teilt sich der Weg',
        'Alle Kinder gehen zuerst vier Jahre in die Grundschule (in Berlin und Brandenburg sechs). Danach geht es auf die Hauptschule (bis Klasse 9), die Realschule (bis Klasse 10, Mittlere Reife), das Gymnasium (bis Klasse 12 oder 13, Abitur) oder die Gesamtschule. Jedes Bundesland regelt die Schule selbst. Wichtig: Kein Weg ist eine Sackgasse – einen höheren Abschluss kann man später nachholen.',
      ),
    ],
    test: [
      match('Welche Schule, welcher Abschluss?', [
        ['Gymnasium', 'Abitur'],
        ['Realschule', 'Mittlere Reife'],
        ['Hauptschule', 'Hauptschulabschluss'],
      ]),
      choice('Lesen Sie den Text.', 'Wer regelt das Schulsystem?', [
        'der Bund',
        '*jedes Bundesland',
        'jede Stadt',
      ]),
      choice('Lesen Sie den Text.', 'Was bedeutet „Kein Weg ist eine Sackgasse“?', [
        '*Man kann später noch einen höheren Abschluss machen.',
        'Man muss aufs Gymnasium.',
        'Nach der Realschule ist Schluss.',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Schule und Abschlüsse',
    ref: [I, 1, 1],
    learn: [
      words('Wortschatz', [
        ['der Abschluss', 'qualification, degree'],
        ['das Abitur', 'A levels, high-school diploma'],
        ['die Ausbildung', 'vocational training'],
        ['die Berufsschule', 'vocational school'],
        ['die Fachhochschule', 'university of applied sciences'],
        ['etwas nachholen', 'to catch up on sth.'],
        ['empfehlen', 'to recommend'],
        ['der Umweg', 'detour'],
      ]),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Nach der Realschule habe ich eine [Ausbildung] gemacht. Zwei Tage pro Woche war ich in der [Berufsschule]. Später habe ich das Abitur [nachgeholt] – ein [Umweg], aber er hat sich gelohnt.',
        ['Abschluss', 'empfohlen'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Die duale Ausbildung',
    ref: [I, 1, 2],
    learn: [
      culture(
        'An zwei Orten lernen',
        'Auszubildende arbeiten drei bis vier Tage pro Woche im Betrieb und lernen ein bis zwei Tage in der Berufsschule. Vom ersten Monat an bekommen sie Geld, die Ausbildungsvergütung. Es gibt rund 320 Ausbildungsberufe. Viele Betriebe übernehmen ihre Azubis danach fest.',
      ),
    ],
    test: [
      choice('Lesen Sie den Text.', 'Was bedeutet „dual“?', [
        'zwei Jahre lang',
        '*an zwei Orten: Betrieb und Berufsschule',
        'mit zwei Prüfungen',
      ]),
      choice('Lesen Sie den Text.', 'Ab wann bekommen Azubis Geld?', [
        'nach der Prüfung',
        '*vom ersten Monat an',
        'nach einem Jahr',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'als oder wenn?',
    ref: [I, 1, 2],
    learn: [
      grammar(
        'Zeit in der Vergangenheit',
        'Beide leiten einen Nebensatz ein. „als“: einmaliges Ereignis oder ein Zeitraum, der nur einmal war (als Kind, als ich 18 war). „wenn“: etwas hat sich wiederholt – oft mit „immer“ oder „jedes Mal“. In Gegenwart und Zukunft steht immer „wenn“.',
        {
          headers: ['', 'Beispiel'],
          rows: [
            ['einmal → als', 'Als ich mit der Schule fertig war, wollte ich arbeiten.'],
            ['wiederholt → wenn', '(Immer) wenn meine Oma krank war, habe ich sie untersucht.'],
            ['Zukunft → wenn', 'Wenn ich das Studium beende, bin ich 26.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'als oder wenn?',
        '[Als] ich 18 war, habe ich den Führerschein gemacht. [Wenn] wir im Sommer bei Oma waren, sind wir immer schwimmen gegangen. [Wenn] ich morgen Zeit habe, rufe ich dich an.',
      ),
      choice('Wählen Sie.', '… ich ein Kind war, wohnten wir in Graz.', ['*Als', 'Wenn', 'Wann']),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Können Sie mir sagen, wann …?',
    ref: [I, 1, 3],
    learn: [
      grammar(
        'Indirekte Fragen',
        'Eine indirekte Frage ist höflicher. Sie ist ein Nebensatz: Das Verb steht am Ende. W-Fragen behalten ihr Fragewort, Ja/Nein-Fragen bekommen „ob“.',
        {
          headers: ['direkt', 'indirekt'],
          rows: [
            ['Wann beginnt der Kurs?', 'Können Sie mir sagen, wann der Kurs beginnt?'],
            ['Wie viel kostet der Kurs?', 'Ich möchte wissen, wie viel der Kurs kostet.'],
            ['Gibt es einen Abendkurs?', 'Wissen Sie, ob es einen Abendkurs gibt?'],
          ],
        },
      ),
    ],
    test: [
      order('Machen Sie die Frage indirekt: „Wo ist der Raum?“', [
        'Können Sie mir sagen,',
        'wo',
        'der Raum',
        'ist',
        '?',
      ]),
      order('Machen Sie die Frage indirekt: „Gibt es eine Ermäßigung?“', [
        'Ich möchte wissen,',
        'ob',
        'es',
        'eine Ermäßigung',
        'gibt',
        '.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'ob ist nicht wenn',
    ref: [I, 1, 3],
    learn: [
      grammar(
        'ob oder wenn?',
        'Viele Sprachen haben dafür nur ein Wort (if, si, se). Im Deutschen: „ob“ = offene Ja/Nein-Frage, „wenn“ = Bedingung. Ich weiß nicht, ob er kommt (vielleicht ja, vielleicht nein). Wenn er kommt, kochen wir (unter dieser Bedingung).',
      ),
    ],
    test: [
      cloze(
        'ob oder wenn?',
        'Weißt du, [ob] Lisa heute kommt? [Wenn] sie kommt, gehen wir zusammen essen. Ich frage mich, [ob] das Restaurant geöffnet ist.',
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Der Nebensatz am Anfang',
    ref: [G, 7, 1],
    learn: [
      grammar(
        'Verb, Komma, Verb',
        'Ein Nebensatz kann vor dem Hauptsatz stehen. Dann besetzt er Position 1 – und das Verb des Hauptsatzes folgt sofort nach dem Komma: Weil ich müde bin, bleibe ich zu Hause. So stehen zwei Verben direkt nebeneinander.',
      ),
    ],
    test: [
      order('Beginnen Sie mit dem Nebensatz.', [
        'Wenn es morgen regnet,',
        'fahren',
        'wir',
        'mit dem Bus',
        '.',
      ]),
      choice('Welcher Satz ist richtig?', 'Wählen Sie.', [
        'Als ich nach Hause kam, ich war müde.',
        '*Als ich nach Hause kam, war ich müde.',
        'Als ich kam nach Hause, war ich müde.',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Wie lernt man am besten?',
    ref: [I, 1, 4],
    learn: [
      words('Lernen', [
        ['der Stoff', 'material (to be learned)'],
        ['sich etwas merken', 'to remember sth.'],
        ['das Gedächtnis', 'memory'],
        ['wirksam', 'effective'],
        ['sich lohnen', 'to be worth it'],
        ['jemanden abfragen', 'to test sb. (orally)'],
      ]),
      text(
        'Viele lernen erst am Abend vor der Prüfung. Das fühlt sich produktiv an, bringt aber wenig. Besser: den Stoff auf mehrere kurze Einheiten verteilen – zwanzig Minuten an fünf Tagen sind wirksamer als zwei Stunden an einem Abend.',
      ),
    ],
    test: [
      choice('Lesen Sie den Text.', 'Was empfiehlt der Text?', [
        'die Nacht vor der Prüfung durchmachen',
        '*öfter kurz lernen',
        'einmal lange lernen',
      ]),
      cloze(
        'Ergänzen Sie.',
        'Ich kann mir Namen schlecht [merken]. Kannst du mich morgen [abfragen]? Früh anfangen [lohnt] sich.',
        ['wirksam'],
      ),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Einen Text zusammenfassen',
    ref: [I, 1, 4],
    learn: [
      tip(
        'Nur das Wichtigste',
        'Eine Zusammenfassung gibt das Wichtigste wieder – in eigenen Worten, im Präsens und ohne die eigene Meinung. Am Anfang Titel und Thema, dann die Hauptpunkte in der Reihenfolge des Textes.',
      ),
      grammar('Redemittel', 'Diese Wendungen helfen beim Zusammenfassen.', {
        headers: ['Zweck', 'Redemittel'],
        rows: [
          ['Thema', 'Der Text handelt von … / In dem Artikel geht es um …'],
          ['Hauptpunkte', 'Zuerst wird erklärt, dass … / Ein weiterer Punkt ist …'],
          ['Autor', 'Die Autorin meint, dass …'],
          ['Schluss', 'Zusammenfassend kann man sagen, dass …'],
        ],
      }),
    ],
    test: [
      order('Bringen Sie die Zusammenfassung in eine sinnvolle Reihenfolge.', [
        'Der Artikel handelt vom Lernen vor Prüfungen.',
        'Zuerst wird erklärt, dass Lernen in einer Nacht wenig bringt.',
        'Ein weiterer Punkt ist, dass kurze Einheiten wirksamer sind.',
        'Zusammenfassend kann man sagen, dass man früh anfangen sollte.',
      ]),
      choice('Was gehört nicht in eine Zusammenfassung?', 'Wählen Sie.', [
        'das Thema',
        'die Hauptpunkte',
        '*die eigene Meinung',
      ]),
    ],
  },

  // ------------------------------------------------ Kapitel 2: Wohnen und Zusammenleben
  {
    kind: 'VOCAB',
    title: 'WG-Zimmer frei',
    ref: [I, 2, 1],
    learn: [
      words('Wohnen', [
        ['die Wohngemeinschaft (WG)', 'shared flat'],
        ['der Mitbewohner', 'flatmate'],
        ['warm / kalt (Miete)', 'incl. / excl. utilities'],
        ['die Nebenkosten', 'utilities'],
        ['die Kaution', 'deposit'],
        ['der Vermieter', 'landlord'],
        ['der Putzplan', 'cleaning rota'],
        ['der Altbau', 'old building'],
      ]),
    ],
    test: [
      match('Was ist das?', [
        ['Geld, das man beim Einzug hinterlegt', 'die Kaution'],
        ['Kosten für Wasser, Heizung, Müll', 'die Nebenkosten'],
        ['wer wann Bad und Küche putzt', 'der Putzplan'],
        ['die Person, der die Wohnung gehört', 'der Vermieter'],
      ]),
      choice('Wählen Sie.', 'Die Miete ist „390 € warm“. Das heißt:', [
        'ohne Heizung',
        '*mit Nebenkosten',
        'nur im Winter',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Ruhezeiten',
    ref: [I, 2, 1],
    learn: [
      culture(
        'Die Hausordnung',
        'In fast jedem Mietshaus gibt es eine Hausordnung. Sie regelt, wer das Treppenhaus putzt und wo die Fahrräder stehen dürfen. Besonders ernst nehmen viele die Ruhezeiten: Nachtruhe ist meist von 22 bis 6 Uhr, oft gilt auch eine Mittagsruhe (13 bis 15 Uhr) und Ruhe am Sonntag.',
      ),
    ],
    test: [
      choice('Lesen Sie den Text.', 'Wann ist Bohren kein Problem?', [
        'sonntags um 11 Uhr',
        'dienstags um 23 Uhr',
        '*samstags um 10 Uhr',
      ]),
      choice('Lesen Sie den Text.', 'Was regelt eine Hausordnung nicht?', [
        'die Ruhezeiten',
        'das Putzen im Treppenhaus',
        '*die Höhe der Miete',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Können wir mal reden?',
    ref: [I, 2, 2],
    learn: [
      dialogue('In der WG-Küche', [
        'Hanna: Tarek, hast du kurz Zeit? Ich möchte etwas ansprechen.',
        'Tarek: Klar, was ist los?',
        'Hanna: Mir ist aufgefallen, dass dein Geschirr oft zwei, drei Tage in der Spüle steht. Das stört mich, weil ich dann nicht kochen kann.',
        'Tarek: Oh, das tut mir leid. Im Moment habe ich Prüfungen.',
        'Hanna: Das verstehe ich. Wie wäre es, wenn du das Geschirr abends in die Spülmaschine stellst?',
        'Tarek: Das ist fair. Und dafür bringe ich diese Woche den Müll runter.',
        'Hanna: Einverstanden.',
      ]),
    ],
    test: [
      choice('Lesen Sie das Gespräch.', 'Was stört Hanna?', [
        'Tarek ist zu laut.',
        '*Tareks Geschirr steht lange in der Spüle.',
        'Tarek bringt den Müll nicht runter.',
      ]),
      choice('Lesen Sie das Gespräch.', 'Wie endet das Gespräch?', [
        'Sie streiten.',
        '*Sie finden einen Kompromiss.',
        'Tarek zieht aus.',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Ein Problem ansprechen',
    ref: [I, 2, 2],
    learn: [
      tip(
        'Ohne Streit',
        'Sprechen Sie von sich („Mich stört …“) statt Vorwürfe zu machen („Du machst nie …“). Beschreiben Sie die Situation konkret und schlagen Sie eine Lösung vor. „Immer“ und „nie“ machen Gespräche schwierig.',
      ),
    ],
    test: [
      match('Wozu dient der Satz?', [
        ['Hast du kurz Zeit? Ich möchte etwas ansprechen.', 'einleiten'],
        ['Mir ist aufgefallen, dass …', 'Problem beschreiben'],
        ['Das kann ich nachvollziehen.', 'Verständnis zeigen'],
        ['Wie wäre es, wenn …?', 'Lösung vorschlagen'],
        ['Einverstanden.', 'zustimmen'],
      ]),
      choice('Welcher Satz ist am besten?', 'Wählen Sie.', [
        'Du räumst nie auf!',
        '*Es stört mich, wenn die Küche unordentlich ist.',
        'Immer muss ich alles machen.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Der Nachbar, der immer bohrt',
    ref: [I, 2, 3],
    learn: [
      grammar(
        'Relativsätze: Nominativ und Akkusativ',
        'Ein Relativsatz beschreibt ein Nomen genauer, steht direkt dahinter und hat das Verb am Ende. Genus und Zahl kommen vom Nomen, der Fall von der Rolle im Relativsatz. Nur im Maskulinum sieht man den Unterschied: der → den.',
        {
          headers: ['', 'maskulin', 'neutral', 'feminin', 'Plural'],
          rows: [
            ['Nominativ', 'der', 'das', 'die', 'die'],
            ['Akkusativ', 'den', 'das', 'die', 'die'],
          ],
        },
      ),
      tip(
        'Fragen Sie im Relativsatz!',
        '„der Student, der über uns wohnt“ – „der“ ist Subjekt. „der Student, den ich nie sehe“ – „ich“ ist Subjekt, „den“ ist Objekt.',
      ),
    ],
    test: [
      cloze(
        'der, den, die oder das?',
        'Herr Petzold ist der Nachbar, [der] jeden Samstag bohrt. Über uns wohnt ein Student, [den] ich fast nie sehe. Neben uns wohnt eine Familie, [die] drei Kinder hat.',
      ),
      choice('Wählen Sie.', 'Das ist das Buch, … ich gerade lese.', ['den', '*das', 'der']),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Nachbarn, mit denen man reden kann',
    ref: [I, 2, 4],
    learn: [
      grammar(
        'Relativpronomen im Dativ',
        'Braucht das Verb oder die Präposition im Relativsatz den Dativ, steht das Relativpronomen im Dativ. Achtung beim Plural: „denen“, nicht „den“.',
        {
          headers: ['', 'maskulin', 'neutral', 'feminin', 'Plural'],
          rows: [['Dativ', 'dem', 'dem', 'der', 'denen']],
        },
      ),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Ich wünsche mir einen Vermieter, [dem] nicht alles egal ist. Das ist die Kollegin, [der] ich oft helfe. Das sind Nachbarn, mit [denen] man gut reden kann.',
        ['den', 'die'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Die Wohnung, von der ich träume',
    ref: [I, 2, 4],
    learn: [
      grammar(
        'Präposition + Relativpronomen',
        'Gehört eine Präposition zum Verb oder zur Ortsangabe, steht sie vor dem Relativpronomen – und bestimmt den Fall. Ich träume von einer Wohnung. → die Wohnung, von der ich träume. Ein Viertel, in dem es Cafés gibt.',
      ),
      tip(
        'was und wo',
        'Nach alles, nichts, etwas steht „was“: Das ist alles, was ich weiß. Nach Orten geht auch „wo“: die Stadt, wo ich wohne.',
      ),
    ],
    test: [
      order('Bilden Sie den Relativsatz.', [
        'Das ist die Stadt,',
        'in',
        'der',
        'ich',
        'aufgewachsen',
        'bin',
        '.',
      ]),
      cloze(
        'Ergänzen Sie.',
        'Das ist der Kollege, für [den] ich das Geschenk kaufe. Das ist alles, [was] ich brauche.',
        ['dem', 'das'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'dessen und deren',
    ref: [I, 2, 4],
    learn: [
      grammar(
        'Relativpronomen im Genitiv',
        'Der Genitiv zeigt Besitz: „dessen“ für maskuline und neutrale Nomen, „deren“ für feminine Nomen und Plural. Danach folgt ein Nomen ohne Artikel: ein Balkon, dessen Blick ins Grüne geht. Die Nachbarin, deren Hund immer bellt.',
      ),
    ],
    test: [
      cloze(
        'dessen oder deren?',
        'Das ist der Nachbar, [dessen] Auto immer vor unserer Tür steht. Das ist die Frau, [deren] Sohn mit mir studiert. Das sind die Kinder, [deren] Eltern hier wohnen.',
      ),
    ],
  },

  // ------------------------------------------------ Kapitel 3: Arbeitswelt
  {
    kind: 'VOCAB',
    title: 'Die Stellenanzeige',
    ref: [I, 3, 1],
    learn: [
      words('Bewerbung', [
        ['sich bewerben (um + Akk.)', 'to apply (for)'],
        ['der Lebenslauf', 'CV, résumé'],
        ['das Anschreiben', 'cover letter'],
        ['das Zeugnis', 'certificate, reference'],
        ['die Berufserfahrung', 'work experience'],
        ['unbefristet / befristet', 'permanent / fixed-term'],
        ['die Voraussetzung', 'requirement'],
        ['von Vorteil sein', 'to be an advantage'],
      ]),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Ich möchte mich um die Stelle [bewerben]. Dafür brauche ich ein Anschreiben, einen [Lebenslauf] und meine [Zeugnisse]. Englischkenntnisse sind [von] Vorteil.',
        ['befristet', 'Voraussetzung'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Die Bewerbungsmappe',
    ref: [I, 3, 1],
    learn: [
      culture(
        'Drei Teile',
        'Zu einer Bewerbung gehören meist das Anschreiben (eine Seite), der tabellarische Lebenslauf (die neueste Station zuerst) und Kopien der wichtigsten Zeugnisse. Heute schickt man alles meist als eine PDF-Datei. Ein Foto ist erlaubt, aber keine Pflicht; Geburtsdatum und Familienstand muss man nicht angeben.',
      ),
    ],
    test: [
      choice('Lesen Sie den Text.', 'Was steht im Lebenslauf zuerst?', [
        'die Schulzeit',
        '*die neueste Station',
        'das Foto',
      ]),
      choice('Lesen Sie den Text.', 'Muss man ein Foto schicken?', [
        'Ja, immer.',
        '*Nein, es ist keine Pflicht.',
        'Nur bei Vollzeitstellen.',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Das Anschreiben',
    ref: [I, 3, 2],
    learn: [
      tip(
        'Kein zweiter Lebenslauf',
        'Das Anschreiben erklärt, warum Sie gerade diese Stelle wollen und was Sie der Firma bieten. Eine Person mit Namen ansprechen, höchstens eine Seite.',
      ),
    ],
    test: [
      match('Welcher Teil des Anschreibens?', [
        ['Mit großem Interesse habe ich Ihre Anzeige gelesen.', 'Einleitung'],
        ['Ich war für die Terminplanung zuständig.', 'Qualifikation'],
        ['Besonders reizt mich an der Stelle …', 'Motivation'],
        ['Ich könnte ab dem 1. Mai anfangen.', 'Eintritt'],
        ['Über eine Einladung zum Gespräch freue ich mich.', 'Schluss'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Das Vorstellungsgespräch',
    ref: [I, 3, 3],
    learn: [
      dialogue('Bei der Grünwerk GmbH', [
        'Frau Wagner: Was sind Ihre Stärken?',
        'Elif: Ich bin sehr gut organisiert und bleibe auch unter Druck ruhig.',
        'Frau Wagner: Und Ihre Schwächen?',
        'Elif: Manchmal bin ich ungeduldig, wenn Entscheidungen lange dauern. Ich habe aber gelernt, vorher nachzufragen, wann ich mit einer Antwort rechnen kann.',
      ]),
      culture(
        'Typisch für Gespräche in Deutschland',
        'Kommen Sie lieber zehn Minuten zu früh. Nennen Sie eine echte, aber harmlose Schwäche und sagen Sie, wie Sie damit umgehen. Stellen Sie am Ende selbst Fragen. Fragen nach Religion oder Familienplanung sind nicht erlaubt.',
      ),
    ],
    test: [
      choice('Lesen Sie den Text.', 'Wie beantwortet Elif die Frage nach ihrer Schwäche?', [
        'Sie hat keine Schwächen.',
        '*Sie nennt eine Schwäche und wie sie damit umgeht.',
        'Sie wechselt das Thema.',
      ]),
      choice('Lesen Sie den Text.', 'Welche Frage ist im Vorstellungsgespräch nicht erlaubt?', [
        'Was sind Ihre Stärken?',
        '*Planen Sie Kinder?',
        'Wann könnten Sie anfangen?',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Das Dach wird geprüft',
    ref: [I, 3, 4],
    learn: [
      grammar(
        'Das Passiv: werden + Partizip II',
        'Im Passiv ist die Handlung wichtiger als die Person. „werden“ steht auf Position 2, das Partizip II am Ende. Wer handelt, sagt man mit „von“ + Dativ.',
        {
          headers: ['Aktiv', 'Passiv'],
          rows: [
            ['Man prüft das Dach.', 'Das Dach wird geprüft.'],
            ['Man bestellt die Module.', 'Die Module werden bestellt.'],
            [
              'Eine Ingenieurin erstellt die Pläne.',
              'Die Pläne werden von einer Ingenieurin erstellt.',
            ],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Ergänzen Sie „werden“.',
        'Zuerst [wird] ein Termin vereinbart. Dann [werden] das Dach und der Stromverbrauch geprüft. Die Anlage [wird] am Computer geplant.',
        ['wurde'],
      ),
      order('Bilden Sie einen Passivsatz.', [
        'Die Rechnung',
        'wird',
        'per E-Mail',
        'geschickt',
        '.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'wurde gebaut, kann gebaut werden',
    ref: [I, 3, 4],
    learn: [
      grammar(
        'Passiv in Vergangenheit und mit Modalverb',
        'Im Präteritum steht „wurde“: Die Pläne wurden gezeichnet. Mit Modalverb steht das Modalverb auf Position 2, am Ende „Partizip II + werden“: Strom kann produziert werden.',
      ),
    ],
    test: [
      match('Aktiv und Passiv', [
        ['Man baute das Haus 1910.', 'Das Haus wurde 1910 gebaut.'],
        ['Man muss das Formular ausfüllen.', 'Das Formular muss ausgefüllt werden.'],
        ['Man kann den Termin verschieben.', 'Der Termin kann verschoben werden.'],
      ]),
      order('Bilden Sie einen Passivsatz.', [
        'Die Module',
        'müssen',
        'bis Freitag',
        'geliefert',
        'werden',
        '.',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Die eigene Meinung sagen',
    ref: [I, 3, 5],
    learn: [
      tip(
        'Meinung, Vorteil, Nachteil',
        'In einer Diskussion nennen Sie Ihre Meinung, begründen sie und gehen auf andere Positionen ein.',
      ),
      grammar('Redemittel', 'So kann man diskutieren.', {
        headers: ['Zweck', 'Redemittel'],
        rows: [
          ['Meinung', 'Meiner Meinung nach … / Ich denke, dass …'],
          ['Vorteil', 'Ein großer Vorteil ist, dass …'],
          ['Nachteil', 'Problematisch finde ich …'],
          ['Einwand', 'Das stimmt zwar, aber … / Einerseits …, andererseits …'],
        ],
      }),
    ],
    test: [
      match('Was drückt der Satz aus?', [
        ['Meiner Meinung nach ist Homeoffice gut.', 'Meinung'],
        ['Ein großer Vorteil ist, dass man Fahrzeit spart.', 'Vorteil'],
        ['Problematisch finde ich, dass die Kollegen fehlen.', 'Nachteil'],
        ['Das stimmt zwar, aber nicht jeder hat Platz.', 'Einwand'],
      ]),
    ],
  },

  // ------------------------------------------------ Kapitel 4: Gesundheit und Lebensstil
  {
    kind: 'VOCAB',
    title: 'Gesund leben',
    ref: [I, 4, 1],
    learn: [
      words('Wortschatz', [
        ['die Ernährung', 'diet, nutrition'],
        ['auf etwas achten', 'to pay attention to sth.'],
        ['das Fertiggericht', 'ready meal'],
        ['sich bewegen', 'to exercise, to move'],
        ['mit etwas aufhören', 'to stop doing sth.'],
        ['zur Ruhe kommen', 'to unwind'],
        ['ausgewogen', 'balanced'],
      ]),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Ich [achte] auf meine Ernährung und esse keine [Fertiggerichte]. Letztes Jahr habe ich mit dem Rauchen [aufgehört]. Abends lese ich, um zur [Ruhe] zu kommen.',
        ['bewege', 'ausgewogen'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Du solltest …',
    ref: [I, 4, 2],
    learn: [
      grammar(
        'Ratschläge mit dem Konjunktiv II',
        'So klingt ein Rat höflich: „sollte“ (der Rat selbst), „könnte“ (ein Vorschlag), „würde“ + Infinitiv (was man selbst tun würde). „Es wäre gut, wenn …“ ist besonders vorsichtig.',
        {
          headers: ['', 'sollen', 'können', 'werden'],
          rows: [
            ['ich', 'sollte', 'könnte', 'würde'],
            ['du', 'solltest', 'könntest', 'würdest'],
            ['Sie', 'sollten', 'könnten', 'würden'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Du [solltest] das Handy eine Stunde vor dem Schlafen weglegen. An deiner Stelle [würde] ich nach 16 Uhr keinen Kaffee mehr trinken. Du [könntest] abends spazieren gehen.',
        ['sollst', 'kannst'],
      ),
      choice('Was ist ein vorsichtiger Rat?', 'Wählen Sie.', [
        'Geh zum Arzt!',
        '*Es wäre gut, wenn du zum Arzt gehen würdest.',
        'Du musst zum Arzt.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Wenn ich mehr Zeit hätte …',
    ref: [I, 4, 3],
    learn: [
      grammar(
        'Irreale Bedingungen',
        'Mit dem Konjunktiv II spricht man über etwas, das nicht wirklich ist. Wirklichkeit: Ich habe keine Zeit. Vorstellung: Wenn ich Zeit hätte, würde ich Sport machen. Eigene Formen: wäre, hätte, könnte, müsste, gäbe. Sonst: würde + Infinitiv.',
        {
          headers: ['Infinitiv', 'Konjunktiv II'],
          rows: [
            ['sein', 'ich wäre'],
            ['haben', 'ich hätte'],
            ['können', 'ich könnte'],
            ['es gibt', 'es gäbe'],
            ['machen', 'ich würde machen'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Wenn ich nicht so viel arbeiten [müsste], [würde] ich mehr Sport machen. Wenn es in der Mensa besseres Essen [gäbe], [wäre] ich zufriedener.',
        ['muss', 'gibt'],
      ),
      choice(
        'Was ist die Wirklichkeit?',
        '„Wenn ich ein Auto hätte, würde ich aufs Land ziehen.“',
        ['*Ich habe kein Auto.', 'Ich habe ein Auto.', 'Ich ziehe aufs Land.'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Ich wünschte, …',
    ref: [I, 4, 3],
    learn: [
      grammar(
        'Irreale Wünsche',
        'Einen Wunsch, der (noch) nicht Wirklichkeit ist, drückt man mit dem Konjunktiv II aus: „Ich wünschte, ich hätte mehr Zeit.“ Oder als Ausruf: „Wenn ich doch nur mehr Zeit hätte!“',
      ),
    ],
    test: [
      order('Bilden Sie einen Wunsch.', ['Ich wünschte,', 'der Tag', 'hätte', '28 Stunden', '.']),
      cloze(
        'Ergänzen Sie.',
        'Wenn ich doch nur nicht so müde [wäre]! Ich wünschte, ich [könnte] besser schlafen.',
        ['bin', 'kann'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Der Mensch ist nicht zum Sitzen gemacht',
    ref: [I, 4, 4],
    learn: [
      text(
        'Im Durchschnitt sitzen Erwachsene in Deutschland fast neun Stunden am Tag – im Büro, im Auto, auf dem Sofa. Das ist mehr, als die meisten schätzen. Und es hat Folgen: Wer zu viel sitzt, bekommt häufiger Rückenschmerzen, nimmt leichter zu und hat ein höheres Risiko für Herz-Kreislauf-Erkrankungen. Das Problem ist nicht das Sitzen an sich, sondern das lange Sitzen ohne Unterbrechung. Schon kurze Pausen helfen – oder ein höhenverstellbarer Schreibtisch.',
      ),
    ],
    test: [
      choice('Lesen Sie den Artikel.', 'Wie lange sitzen Erwachsene im Durchschnitt?', [
        'sechs Stunden',
        '*fast neun Stunden',
        'zwölf Stunden',
      ]),
      choice('Lesen Sie den Artikel.', 'Was ist laut Text das eigentliche Problem?', [
        'Sitzen im Auto',
        '*langes Sitzen ohne Unterbrechung',
        'zu viel Sport',
      ]),
      choice('Lesen Sie den Artikel.', 'Was hilft?', [
        '*kurze Pausen',
        'weniger schlafen',
        'mehr Kaffee',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Krank – was nun?',
    ref: [I, 4, 4],
    learn: [
      culture(
        'Hausarzt und Krankschreibung',
        'Wer krank ist, geht zuerst zur Hausärztin oder zum Hausarzt. Sie überweisen, wenn nötig, zu einer Fachärztin. Wer nicht arbeiten kann, bekommt eine Krankschreibung. Sie wird heute meist elektronisch an die Krankenkasse geschickt. Den Arbeitgeber muss man trotzdem am ersten Tag informieren.',
      ),
    ],
    test: [
      choice('Lesen Sie den Text.', 'Zu wem geht man zuerst?', [
        '*zum Hausarzt',
        'zur Fachärztin',
        'zur Krankenkasse',
      ]),
      choice('Lesen Sie den Text.', 'Was muss man am ersten Krankheitstag tun?', [
        'die Krankschreibung zur Firma bringen',
        '*den Arbeitgeber informieren',
        'die Krankenkasse anrufen',
      ]),
    ],
  },

  // ------------------------------------------------ Kapitel 5: Kultur und Medien
  {
    kind: 'VOCAB',
    title: 'Filme, Serien, Bücher',
    ref: [I, 5, 1],
    learn: [
      words('Genres', [
        ['die Komödie', 'comedy'],
        ['der Krimi', 'crime story'],
        ['der Dokumentarfilm', 'documentary'],
        ['der Roman', 'novel'],
        ['die Folge', 'episode'],
        ['spannend', 'exciting, gripping'],
        ['der Untertitel', 'subtitle'],
      ]),
    ],
    test: [
      match('Was passt?', [
        ['Man lacht viel.', 'die Komödie'],
        ['Ein Kommissar sucht den Täter.', 'der Krimi'],
        ['Echte Bilder über die Natur', 'der Dokumentarfilm'],
        ['Ein langes Buch mit einer Geschichte', 'der Roman'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Tatort am Sonntag',
    ref: [I, 5, 1],
    learn: [
      culture(
        'Ein Ritual',
        'Seit 1970 läuft am Sonntagabend um 20:15 Uhr im Ersten der „Tatort“ – ein Krimi, der jede Woche in einer anderen Stadt spielt. Ausländische Filme laufen in Deutschland meistens synchronisiert. Wer das Original hören will, sucht nach „OmU“ – Originalversion mit Untertiteln.',
      ),
    ],
    test: [
      choice('Lesen Sie den Text.', 'Was ist der „Tatort“?', [
        'eine Komödie',
        '*eine Krimireihe',
        'eine Nachrichtensendung',
      ]),
      choice('Lesen Sie den Text.', 'Was bedeutet „OmU“?', [
        'auf Deutsch gesprochen',
        '*Original mit Untertiteln',
        'ohne Musik',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Worum geht es?',
    ref: [I, 5, 2],
    learn: [
      tip(
        'Eine Inhaltsangabe',
        'Sie erzählt die Handlung kurz und sachlich, im Präsens: zuerst Titel, Autor, Genre, Ort und Zeit, dann Hauptfigur und wichtigste Ereignisse. Bei einer Empfehlung verrät man das Ende nicht.',
      ),
    ],
    test: [
      match('Welcher Teil der Inhaltsangabe?', [
        ['Der Roman spielt in einem Dorf an der Elbe.', 'Rahmen'],
        ['Im Mittelpunkt steht Clara, eine Architektin.', 'Figuren'],
        ['Es geht um Familie und Heimat.', 'Thema'],
        ['Am Anfang erbt Clara ein altes Haus.', 'Handlung'],
      ]),
      choice('Welche Zeitform benutzt man?', 'Wählen Sie.', ['Perfekt', '*Präsens', 'Präteritum']),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'obwohl',
    ref: [I, 5, 3],
    learn: [
      grammar(
        'Ein Gegensatz im Nebensatz',
        '„obwohl“ drückt aus, dass etwas passiert, obwohl man etwas anderes erwartet. Es leitet einen Nebensatz ein – das Verb steht am Ende. Steht der obwohl-Satz vorn, beginnt der Hauptsatz mit dem Verb: Obwohl es regnet, gehen wir spazieren.',
      ),
    ],
    test: [
      order('Bilden Sie einen Satz.', [
        'Ich habe das Buch in drei Tagen gelesen,',
        'obwohl',
        'es',
        'fast 500 Seiten',
        'hat',
        '.',
      ]),
      cloze(
        'weil oder obwohl?',
        'Ich gehe ins Kino, [obwohl] ich müde bin. Ich gehe ins Kino, [weil] der Film gute Kritiken hat.',
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'trotzdem und deshalb',
    ref: [I, 5, 3],
    learn: [
      grammar(
        'Gegensatz und Grund im Hauptsatz',
        '„trotzdem“ und „deshalb“ stehen im Hauptsatz, meist auf Position 1 – dann folgt direkt das Verb: Das Buch ist lang. Trotzdem lese ich es. Das Buch ist spannend. Deshalb lese ich es.',
      ),
    ],
    test: [
      choice('Welcher Satz ist richtig?', 'Wählen Sie.', [
        'Trotzdem ich gehe ins Kino.',
        '*Trotzdem gehe ich ins Kino.',
        'Trotzdem ins Kino ich gehe.',
      ]),
      cloze(
        'trotzdem oder deshalb?',
        'Die Kritiken waren schlecht. [Trotzdem] hat mir der Film gefallen. Ich hatte keine Zeit. [Deshalb] habe ich die Serie nicht gesehen.',
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'weil, da, falls, während',
    ref: [G, 7, 2],
    learn: [
      grammar(
        'Subjunktionen nach ihrer Bedeutung',
        '„da“ nennt wie „weil“ einen Grund, klingt formeller und steht oft am Satzanfang. „falls“ betont, dass die Bedingung vielleicht nicht eintritt. „während“ bedeutet „zur gleichen Zeit“. „bevor“ und „nachdem“ ordnen zwei Ereignisse.',
        {
          headers: ['Bedeutung', 'Subjunktion', 'Beispiel'],
          rows: [
            ['Grund', 'weil, da', 'Da es spät ist, gehen wir.'],
            ['Bedingung', 'wenn, falls', 'Falls es regnet, nehmen wir den Bus.'],
            ['Zeit', 'während, bevor, nachdem', 'Bevor ich gehe, rufe ich dich an.'],
          ],
        },
      ),
    ],
    test: [
      match('Was passt?', [
        ['Falls der Zug ausfällt,', 'nehmen wir ein Taxi.'],
        ['Während ich koche,', 'deckst du den Tisch.'],
        ['Bevor du gehst,', 'mach bitte das Licht aus.'],
        ['Da das Museum montags geschlossen ist,', 'gehen wir am Dienstag.'],
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Die Kritik',
    ref: [I, 5, 4],
    learn: [
      words('Eine Rezension', [
        ['die Handlung', 'plot'],
        ['das Drehbuch', 'screenplay'],
        ['vorhersehbar', 'predictable'],
        ['überzeugen', 'to be convincing'],
        ['die Stimmung', 'atmosphere, mood'],
        ['das Fazit', 'conclusion, verdict'],
      ]),
      tip(
        'Bewerten und empfehlen',
        'Loben: „… ist gelungen.“ Kritisieren: „Schade finde ich, dass …“ Abwägen: „Zwar …, aber …“ Empfehlen: „Wer … mag, sollte … sehen.“',
      ),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Die [Stimmung] des Films ist warm, und die Schauspieler [überzeugen]. Leider ist die [Handlung] sehr [vorhersehbar]. Mein [Fazit]: ein netter Film für den Sommer.',
        ['Drehbuch'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Je länger, desto besser',
    ref: [G, 9, 3],
    learn: [
      grammar(
        'je … desto',
        'Mit „je … desto“ sagt man, dass zwei Dinge zusammen wachsen. Nach „je“ steht ein Komparativ und das Verb am Ende (Nebensatz), nach „desto“ + Komparativ folgt sofort das Verb: Je länger ich übe, desto besser spreche ich.',
      ),
    ],
    test: [
      order('Bilden Sie den Satz.', [
        'Je',
        'mehr',
        'ich',
        'lese,',
        'desto',
        'mehr',
        'Wörter',
        'kenne',
        'ich',
        '.',
      ]),
      choice('Welcher Satz ist richtig?', 'Wählen Sie.', [
        'Je später es wird, desto ich bin müder.',
        '*Je später es wird, desto müder bin ich.',
        'Je später wird es, desto müder bin ich.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'der neue Tisch',
    ref: [G, 9, 1],
    learn: [
      grammar(
        'Adjektive nach der, die, das',
        'Die Endung -e steht nur an fünf Stellen: im Nominativ Singular aller drei Genera und im Akkusativ Singular bei feminin und neutral. Überall sonst steht -en.',
        {
          headers: ['', 'maskulin', 'neutral', 'feminin', 'Plural'],
          rows: [
            ['Nom.', 'der neue Tisch', 'das neue Bett', 'die neue Lampe', 'die neuen Stühle'],
            ['Akk.', 'den neuen Tisch', 'das neue Bett', 'die neue Lampe', 'die neuen Stühle'],
            ['Dat.', 'dem neuen Tisch', 'dem neuen Bett', 'der neuen Lampe', 'den neuen Stühlen'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        '-e oder -en?',
        'Der [neue] Nachbar ist nett. Ich habe den [neuen] Nachbarn gestern getroffen. Mit dem [neuen] Nachbarn spiele ich Fußball. Die [neuen] Nachbarn sind laut.',
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'ein neuer Tisch, frisches Brot',
    ref: [G, 9, 2],
    learn: [
      grammar(
        'Nach ein, kein, mein',
        'Wo der Artikel keine Endung hat (ein Tisch, ein Bett), zeigt das Adjektiv das Genus: -er (maskulin), -es (neutral). Alle anderen Formen sind wie nach dem bestimmten Artikel.',
        {
          headers: ['', 'maskulin', 'neutral', 'feminin'],
          rows: [
            ['Nom.', 'ein neuer Tisch', 'ein neues Bett', 'eine neue Lampe'],
            ['Akk.', 'einen neuen Tisch', 'ein neues Bett', 'eine neue Lampe'],
            ['Dat.', 'einem neuen Tisch', 'einem neuen Bett', 'einer neuen Lampe'],
          ],
        },
      ),
      tip(
        'Ohne Artikel',
        'Ohne Artikel trägt das Adjektiv die Endung des bestimmten Artikels: frischer Kaffee, frisches Brot, frische Milch.',
      ),
    ],
    test: [
      cloze(
        'Ergänzen Sie die Endung.',
        'Das ist ein [schönes] Kleid. Ich suche einen [warmen] Mantel. Zum Frühstück gibt es [frischen] Kaffee.',
        ['schöne', 'warmer'],
      ),
    ],
  },

  // ------------------------------------------------ Kapitel 6: Gesellschaft und Engagement
  {
    kind: 'VOCAB',
    title: 'Ich engagiere mich',
    ref: [I, 6, 1],
    learn: [
      words('Engagement', [
        ['das Ehrenamt', 'voluntary work'],
        ['ehrenamtlich', 'voluntary, unpaid'],
        ['sich engagieren (für + Akk.)', 'to get involved (in)'],
        ['sich einsetzen (für + Akk.)', 'to stand up (for)'],
        ['gebraucht werden', 'to be needed'],
        ['die Spende', 'donation'],
        ['die Verantwortung', 'responsibility'],
      ]),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Renate arbeitet [ehrenamtlich] bei der Tafel. Sie [engagiert] sich für Menschen mit wenig Geld. Dort sieht sie jeden Tag, dass sie [gebraucht] wird.',
        ['Spende', 'Verantwortung'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Ein Land der Vereine',
    ref: [I, 6, 1],
    learn: [
      culture(
        'Freiwillig aktiv',
        'Rund ein Drittel aller Menschen in Deutschland engagiert sich ehrenamtlich – im Sportverein, in der Kirchengemeinde, im Naturschutz. In den meisten Dörfern besteht die Feuerwehr fast nur aus Freiwilligen. Nach der Schule können junge Leute ein Freiwilliges Soziales Jahr (FSJ) machen, etwa im Krankenhaus. Dafür bekommen sie ein kleines Taschengeld.',
      ),
    ],
    test: [
      choice('Lesen Sie den Text.', 'Wie viele Menschen engagieren sich ehrenamtlich?', [
        'etwa zehn Prozent',
        '*etwa ein Drittel',
        'fast alle',
      ]),
      choice('Lesen Sie den Text.', 'Was ist ein FSJ?', [
        '*ein freiwilliges Jahr nach der Schule',
        'eine Ausbildung',
        'ein Sportverein',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'um … zu',
    ref: [I, 6, 2],
    learn: [
      grammar(
        'Ein Ziel nennen',
        '„um … zu“ + Infinitiv antwortet auf „Wozu?“. Der Nebensatz hat kein eigenes Subjekt – es ist dasselbe wie im Hauptsatz. Bei trennbaren Verben steht „zu“ in der Mitte: um aufzuräumen.',
      ),
    ],
    test: [
      order('Bilden Sie einen Satz.', [
        'Felix geht zur Feuerwehr,',
        'um',
        'anderen Menschen',
        'zu',
        'helfen',
        '.',
      ]),
      cloze(
        'Ergänzen Sie.',
        'Wir treffen uns, um den Park [aufzuräumen]. Ich lerne Deutsch, um in Wien [zu] studieren.',
        ['zu aufräumen', 'um'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'um … zu oder damit?',
    ref: [I, 6, 2],
    learn: [
      grammar(
        'Gleiches oder anderes Subjekt?',
        'Gleiches Subjekt: meistens „um … zu“. Verschiedene Subjekte: nur „damit“ – mit Subjekt und Verb am Ende.',
        {
          headers: ['', 'Beispiel'],
          rows: [
            ['gleich → um … zu', 'Felix geht zur Feuerwehr, um zu helfen.'],
            [
              'verschieden → damit',
              'Amira trainiert die Mädchen, damit sie Selbstvertrauen bekommen.',
            ],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'um oder damit?',
        'Bernd liest mit den Kindern, [damit] sie besser lesen lernen. Renate hilft bei der Tafel, [um] nicht allein zu Hause zu sitzen. Ich spreche langsam, [damit] du mich verstehst.',
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'damit ist nicht weil',
    ref: [I, 6, 2],
    learn: [
      grammar(
        'Ziel oder Grund?',
        '„weil“ nennt einen Grund – etwas, das schon da ist: Ich helfe, weil ich Zeit habe. „damit“ und „um … zu“ nennen ein Ziel – etwas, das man erreichen will: Ich helfe, damit andere es leichter haben.',
      ),
    ],
    test: [
      choice('Wählen Sie.', 'Ich spare Geld, … ich nächstes Jahr reisen kann.', ['weil', '*damit']),
      choice('Wählen Sie.', 'Ich bleibe heute zu Hause, … ich krank bin.', ['*weil', 'damit']),
      choice('Wählen Sie.', 'Sie macht ein Praktikum, … Erfahrung zu sammeln.', ['damit', '*um']),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Mitdiskutieren',
    ref: [I, 6, 3],
    learn: [
      tip(
        'In einer Diskussion',
        'Beziehen Sie sich auf das, was andere gesagt haben, und begründen Sie Ihre Meinung. Widersprechen ist in einer deutschen Diskussion ganz normal – es sollte aber sachlich bleiben.',
      ),
    ],
    test: [
      match('Was macht man mit dem Satz?', [
        ['Ich bin davon überzeugt, dass …', 'Meinung sagen'],
        ['Da stimme ich Ihnen völlig zu.', 'zustimmen'],
        ['Da muss ich widersprechen.', 'widersprechen'],
        ['Darf ich kurz etwas sagen?', 'das Wort ergreifen'],
        ['Ich verstehe beide Seiten.', 'vermitteln'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Der Leserbrief',
    ref: [I, 6, 4],
    learn: [
      text(
        'Leserbrief zum Artikel „Jugendzentrum Nord soll schließen“ vom 12. März: Mit großer Enttäuschung habe ich Ihren Artikel gelesen. Ich arbeite seit acht Jahren ehrenamtlich im Jugendzentrum und weiß, wie wichtig es für den Stadtteil ist. Für viele Jugendliche ist es der einzige Ort, an dem sie nach der Schule Hilfe bei den Hausaufgaben bekommen. Ich verstehe, dass die Stadt sparen muss. Trotzdem halte ich die Schließung für falsch. Mein Vorschlag: Man könnte das Gebäude mit Spenden und freiwilliger Hilfe renovieren.',
      ),
    ],
    test: [
      choice('Lesen Sie den Brief.', 'Welche Position hat die Autorin?', [
        'Sie findet die Schließung richtig.',
        '*Sie ist gegen die Schließung.',
        'Sie hat keine Meinung.',
      ]),
      match('Welcher Teil des Leserbriefs?', [
        ['Mit großer Enttäuschung habe ich Ihren Artikel gelesen.', 'Bezug'],
        ['Ich verstehe, dass die Stadt sparen muss.', 'Gegenseite'],
        ['Man könnte das Gebäude mit Spenden renovieren.', 'Vorschlag'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'wegen, trotz, während',
    ref: [G, 8, 1],
    learn: [
      grammar(
        'Präpositionen mit festem Fall',
        'Akkusativ: durch, für, gegen, ohne, um. Dativ: aus, bei, mit, nach, seit, von, zu. Genitiv: wegen, trotz, während, statt – im Alltag hört man danach oft auch den Dativ.',
        {
          headers: ['Fall', 'Beispiel'],
          rows: [
            ['Akkusativ', 'Wir gehen durch den Park.'],
            ['Dativ', 'Ich wohne seit einem Jahr bei meiner Tante.'],
            ['Genitiv', 'Wegen des Regens bleiben wir hier.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Wegen [des] Streiks fährt kein Zug. Trotz [des] Regens gehen wir spazieren. Das Geschenk ist für [den] Chef.',
        ['dem', 'der'],
      ),
      choice('Welcher Fall steht nach „während“ (geschrieben)?', 'Wählen Sie.', [
        'Akkusativ',
        'Dativ',
        '*Genitiv',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'warten auf, denken an',
    ref: [G, 8, 3],
    learn: [
      grammar(
        'Verben mit fester Präposition',
        'Diese Verben lernt man zusammen mit Präposition und Fall.',
        {
          headers: ['Verb', 'Beispiel'],
          rows: [
            ['warten auf + Akk.', 'Ich warte auf den Bus.'],
            ['sich freuen auf + Akk.', 'Ich freue mich auf den Urlaub. (Zukunft)'],
            ['sich freuen über + Akk.', 'Ich freue mich über das Geschenk.'],
            ['denken an + Akk.', 'Ich denke oft an dich.'],
            ['sich interessieren für + Akk.', 'Sie interessiert sich für Politik.'],
            ['Angst haben vor + Dat.', 'Das Kind hat Angst vor dem Hund.'],
          ],
        },
      ),
    ],
    test: [
      match('Welche Präposition?', [
        ['warten', 'auf'],
        ['denken', 'an'],
        ['sich interessieren', 'für'],
        ['träumen', 'von'],
        ['Angst haben', 'vor'],
      ]),
      cloze(
        'auf oder über?',
        'Ich freue mich schon [auf] die Ferien nächste Woche. Danke für die Blumen, ich freue mich sehr [über] sie!',
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Worauf? – Darauf.',
    ref: [G, 8, 3],
    learn: [
      grammar(
        'wo(r)- und da(r)-',
        'Fragt man nach einer Sache, verbindet man „wo(r)-“ mit der Präposition: Worauf wartest du? Worüber sprecht ihr? Antwort mit „da(r)-“: Ich warte darauf. Das „r“ kommt vor Vokalen. Bei Personen: Auf wen wartest du? – Auf ihn.',
      ),
    ],
    test: [
      match('Frage und Antwort', [
        ['Worauf wartest du?', 'Auf den Bus. Ich warte schon lange darauf.'],
        ['Worüber sprecht ihr?', 'Über den Film. Wir sprechen gerade darüber.'],
        ['Auf wen wartest du?', 'Auf meine Schwester.'],
      ]),
      choice('Wählen Sie.', '… interessierst du dich? – Für Kunst.', [
        'Für was',
        '*Wofür',
        'Dafür',
      ]),
    ],
  },
]);
