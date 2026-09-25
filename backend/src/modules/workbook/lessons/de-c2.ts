import {
  ADVANCED as A,
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

/** Deutsch C2 – Advanced, Kapitel 7 bis 12, dazu Passiv und höfliche Bitten aus dem Grammatikbuch. */
export const DE_C2 = lessons('de-c2', [
  // ------------------------------------------------ Kapitel 7: Rhetorik und Argumentation
  {
    kind: 'VOCAB',
    title: 'Argumentieren',
    ref: [A, 7, 1],
    learn: [
      words('Argumentation', [
        ['die These', 'claim, thesis'],
        ['die Begründung', 'reason'],
        ['der Beleg', 'evidence'],
        ['die Prämisse', 'premise'],
        ['der Einwand', 'objection'],
        ['entkräften', 'to refute'],
        ['stichhaltig', 'sound, valid'],
        ['schlüssig', 'coherent, conclusive'],
      ]),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Eine [These] braucht eine [Begründung] und einen [Beleg]. Ein guter Redner kann jeden [Einwand] entkräften.',
        ['Prämisse', 'schlüssig'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'These, Begründung, Beleg',
    ref: [A, 7, 1],
    learn: [
      grammar(
        'Die Bauteile eines Arguments',
        'These: die Behauptung. Begründung: warum sie gilt. Beleg: Fakten, Zahlen, Beispiele. Schlussregel: die oft unausgesprochene Verbindung zwischen Begründung und These – und damit die häufigste Schwachstelle.',
      ),
    ],
    test: [
      match('Welches Bauteil?', [
        ['Die Stadt sollte eine Fahrradstraße einrichten.', 'These'],
        ['Morgens fahren dort mehr Räder als Autos.', 'Begründung'],
        ['Die Zählung ergab 1200 Räder und 900 Autos.', 'Beleg'],
        ['Straßen sollten dem häufigsten Verkehrsmittel dienen.', 'Schlussregel'],
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Strohmann und Dammbruch',
    ref: [A, 7, 2],
    learn: [
      grammar(
        'Trugschlüsse',
        'Angriff auf die Person („Ausgerechnet Sie …?“), Strohmann (Gegenposition verzerren: „Sie wollen also …“), falsches Dilemma („Entweder … oder …“), Dammbruch („Heute …, morgen …“), voreilige Verallgemeinerung („Ich kenne einen, der …“), Scheinautorität.',
      ),
    ],
    test: [
      match('Welcher Trugschluss?', [
        ['Wenn wir Tempo 30 einführen, verbieten sie morgen das Auto.', 'Dammbruch'],
        ['Ausgerechnet Sie reden über Sparsamkeit?', 'Angriff auf die Person'],
        ['Sie wollen also, dass niemand mehr in die Stadt fahren darf.', 'Strohmann'],
        ['Entweder die Umgehungsstraße oder das Dorf stirbt.', 'falsches Dilemma'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Das habe ich nicht gesagt',
    ref: [A, 7, 2],
    learn: [
      tip(
        'Trugschlüsse entlarven',
        'Mit einfachen Worten wirkt es besser als mit Fachbegriffen. Strohmann: „Das habe ich nicht gesagt. Ich habe gesagt, …“ Falsches Dilemma: „Es gibt mehr als diese beiden Möglichkeiten.“ Angriff auf die Person: „Mein Auto ändert nichts an den Zahlen.“',
      ),
    ],
    test: [
      choice('„Sie wollen also, dass Kinder gar keine Hausaufgaben mehr bekommen.“ (Sie forderten nur weniger.)', 'Wie reagieren Sie am besten?', [
        'Das ist ein Strohmann-Argument, ein klassischer Trugschluss.',
        '*Das habe ich nicht gesagt. Ich habe gesagt: weniger, aber sinnvollere Hausaufgaben.',
        'Sie verstehen sowieso nichts von Pädagogik.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Da haben Sie einen Punkt',
    ref: [A, 7, 3],
    learn: [
      grammar(
        'Einräumen und wenden',
        'Zugeständnis + Wendung + eigene Position. Zugeständnis: „Das ist nicht von der Hand zu weisen.“ Wendung: „Nur: …“, „Allerdings übersehen Sie, dass …“. Umdeutung: „Gerade deshalb …“. Präzisierung: „Es geht mir nicht um …, sondern um …“.',
      ),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Da haben Sie einen [Punkt]. Allerdings [übersehen] Sie, dass die Kosten langfristig sinken. [Gerade] deshalb lohnt sich die Investition.',
        ['Recht', 'Trotzdem'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Worauf stützen Sie das?',
    ref: [A, 7, 3],
    learn: [
      dialogue('Eine Podiumsdiskussion', [
        'Frau Aydin: Die Vier-Tage-Woche würde vielen Beschäftigten guttun.',
        'Herr Lorenz: Kleine Betriebe können sich das nicht leisten.',
        'Frau Aydin: Da haben Sie einen Punkt. Gerade deshalb schlage ich Pilotprojekte vor, bei denen die Betriebe selbst entscheiden.',
        'Herr Lorenz: Die Ergebnisse solcher Projekte sind gemischt.',
        'Frau Aydin: Worauf stützen Sie das? Die Studien, die ich kenne, zeigen eher das Gegenteil.',
      ]),
    ],
    test: [
      match('Welche Technik?', [
        ['Da haben Sie einen Punkt.', 'Zugeständnis'],
        ['Gerade deshalb schlage ich Pilotprojekte vor.', 'Umdeutung'],
        ['Worauf stützen Sie das?', 'Rückfrage nach Belegen'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Der Fünfsatz',
    ref: [A, 7, 4],
    learn: [
      grammar(
        'Eine Rede aufbauen',
        'Einstieg, drei Argumente in steigender Stärke, Zielsatz. Der Zielsatz fordert zu einer konkreten, sofort möglichen Handlung auf. Beim Sprechen gelten kürzere Sätze, weniger Nominalstil und mehr Wiederholung als beim Schreiben.',
      ),
    ],
    test: [
      order('Bringen Sie die Rede in die Reihenfolge des Fünfsatzes.', [
        'Wussten Sie, dass unser Park jeden Sommer wegen Hitzeschäden gesperrt ist?',
        'Erstens spenden Bäume Schatten.',
        'Zweitens speichern sie Wasser bei Starkregen.',
        'Vor allem aber brauchen Ältere und Kinder kühle Orte.',
        'Stimmen Sie deshalb heute für 500 neue Bäume.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Wir haben gefragt. Das Ergebnis: …',
    ref: [A, 7, 4],
    learn: [
      grammar(
        'Sprechsprache ist nicht Schreibsprache',
        'Was man zweimal lesen müsste, ist beim Hören verloren. In der Rede deshalb: kurze Sätze, Verben statt Nominalisierungen, Nebensätze statt Präpositionalgefüge, gern auch Wiederholungen.',
        {
          headers: ['Schreibstil', 'Sprechstil'],
          rows: [
            ['Die Durchführung einer Befragung ergab …', 'Wir haben gefragt. Das Ergebnis: …'],
            ['aufgrund der gestiegenen Kosten', 'weil die Kosten gestiegen sind'],
            ['Es ist festzustellen, dass …', 'Eins ist klar: …'],
          ],
        },
      ),
    ],
    test: [
      choice('Welche Fassung eignet sich für eine Rede?', 'Wählen Sie.', [
        'Nach erfolgter Auswertung der Befragungsergebnisse ist eine Zunahme der Unzufriedenheit festzustellen.',
        '*Wir haben die Leute gefragt. Und eins ist klar: Sie sind unzufriedener als vor einem Jahr.',
        'Die Unzufriedenheitszunahme ist befragungsbasiert feststellbar.',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Überzeugen, nicht überreden',
    ref: [A, 7, 5],
    learn: [
      tip(
        'Der Unterschied',
        'Wer überredet, erreicht Zustimmung für den Moment, oft mit Tricks. Wer überzeugt, erreicht, dass das Publikum die Gründe selbst nachvollzieht und auch morgen noch zustimmt: mit Belegen, fairer Wiedergabe der Gegenseite und offengelegten Grenzen.',
      ),
    ],
    test: [
      match('Überzeugen oder überreden?', [
        ['Die Rednerin nennt Belege und räumt eine Schwäche ein.', 'überzeugen'],
        ['Der Redner macht den Gegner lächerlich.', 'überreden'],
        ['Der Redner behauptet, es gebe nur seine Lösung oder das Chaos.', 'überreden mit falschem Dilemma'],
      ]),
    ],
  },

  // ------------------------------------------------ Kapitel 8: Wissenschaftliches Schreiben
  {
    kind: 'VOCAB',
    title: 'Wissenschaftlich arbeiten',
    ref: [A, 8, 1],
    learn: [
      words('Die Arbeit', [
        ['die Fragestellung', 'research question'],
        ['der Forschungsstand', 'state of research'],
        ['die Methode', 'method'],
        ['der Befund', 'finding'],
        ['das Fazit', 'conclusion'],
        ['das Literaturverzeichnis', 'bibliography'],
        ['das Plagiat', 'plagiarism'],
        ['etwas untersuchen', 'to investigate'],
      ]),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Die Einleitung nennt die [Fragestellung]. Der [Forschungsstand] zeigt, was man schon weiß. Wer ohne Quellenangabe übernimmt, begeht ein [Plagiat].',
        ['Befund', 'Fazit'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Die Teile einer Arbeit',
    ref: [A, 8, 1],
    learn: [
      grammar(
        'Teile und Formulierungen',
        'Einleitung („Die vorliegende Arbeit untersucht, inwiefern …“), Forschungsstand („Bisherige Studien haben gezeigt …“), Methode („Befragt wurden 120 Lehrkräfte.“), Ergebnisse, Diskussion („Die Befunde legen nahe, dass …“).',
      ),
    ],
    test: [
      match('In welchen Teil gehört der Satz?', [
        ['Die vorliegende Arbeit untersucht, wie Jugendliche Nachrichten auswählen.', 'Einleitung'],
        ['Ausgewertet wurden 300 Fragebögen.', 'Methode'],
        ['58 Prozent nutzten soziale Netzwerke als Hauptquelle.', 'Ergebnisse'],
        ['Die Befunde legen nahe, dass Medienbildung früher ansetzen sollte.', 'Diskussion'],
      ]),
      choice('Welche Fragestellung eignet sich?', 'Wählen Sie.', [
        'Sind soziale Medien schlecht?',
        '*Inwiefern beeinflusst die Nutzung von Kurzvideo-Plattformen die Aufmerksamkeit von Schülern der Klassen 7 bis 9?',
        'Alles über das Internet',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Sie weist nach, er behauptet',
    ref: [A, 8, 2],
    learn: [
      grammar(
        'Referierende Verben',
        'Neutral: schreibt, stellt fest, vertritt die Auffassung. Zustimmend: zeigt, weist nach, belegt. Distanziert: behauptet, meint. Vorsicht der Quelle: vermutet, deutet an. Eingeständnis der Quelle: räumt ein.',
      ),
    ],
    test: [
      match('Was verrät das Verb?', [
        ['Berger weist nach, dass …', 'Der Schreiber hält es für belegt.'],
        ['Berger behauptet, dass …', 'Der Schreiber zweifelt.'],
        ['Berger vertritt die Auffassung, dass …', 'Der Schreiber gibt nur wieder.'],
        ['Berger räumt ein, dass …', 'Berger gesteht einen Punkt zu.'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Direkt, indirekt, sinngemäß',
    ref: [A, 8, 2],
    learn: [
      tip(
        'Drei Formen der Wiedergabe',
        'Direktes Zitat: wörtlich, in Anführungszeichen, mit Seite. Indirekte Wiedergabe: im Konjunktiv I („Berger zufolge habe sich das Leseverhalten verändert“). Paraphrase: sinngemäß, mit „vgl.“. Alle drei brauchen eine Quellenangabe.',
      ),
    ],
    test: [
      choice('Die Quelle schreibt: „Unsere Daten deuten darauf hin, dass Homeoffice die Produktivität leicht erhöht.“', 'Welche Wiedergabe ist fair?', [
        'Schulz beweist, dass Homeoffice produktiver macht.',
        'Schulz behauptet, Homeoffice mache produktiver.',
        '*Schulz deutet an, Homeoffice könne die Produktivität leicht erhöhen.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Die Daten legen nahe …',
    ref: [A, 8, 3],
    learn: [
      grammar(
        'Hedging',
        'Aussagen werden so vorsichtig formuliert, wie es die Daten verlangen: mit Modalverben („dürfte“, „könnte“), Adverbien („tendenziell“, „vermutlich“), Verben („nahelegen“, „scheinen“) und Einschränkungen („in der untersuchten Gruppe“). Zu viel Absicherung wirkt unsicher.',
        {
          headers: ['zu stark', 'angemessen'],
          rows: [
            ['Die Daten beweisen …', 'Die Daten legen nahe …'],
            ['Alle Jugendlichen …', 'Die Mehrheit der Befragten …'],
            ['Das ist die Ursache.', 'Dies dürfte eine wesentliche Ursache sein.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Die Ergebnisse [legen] nahe, dass jüngere Befragte [tendenziell] mehr digitale Medien nutzen. Dies [dürfte] mit der Verbreitung von Smartphones zusammenhängen.',
        ['beweisen', 'immer'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Angemessen vorsichtig',
    ref: [A, 8, 3],
    learn: [
      tip(
        'Den Geltungsbereich begrenzen',
        'Eine Befragung von 200 Studierenden in einer Stadt erlaubt keine Aussage über „die Studierenden“. Formulieren Sie: „In der untersuchten Gruppe …“ oder „Die Mehrheit der Befragten …“.',
      ),
    ],
    test: [
      choice('200 Studierende in einer Stadt, 70 % lesen lieber auf Papier.', 'Welche Formulierung ist angemessen?', [
        'Studierende lesen lieber auf Papier.',
        '*In der untersuchten Gruppe bevorzugte eine deutliche Mehrheit das Lesen auf Papier.',
        'Es könnte unter Umständen möglicherweise sein, dass einige eventuell Papier bevorzugen.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Befragt wurden 120 Lehrkräfte',
    ref: [G, 11, 1],
    learn: [
      grammar(
        'Das Passiv im Fachtext',
        'In der Methode steht oft das Passiv, weil die Handlung wichtiger ist als der Handelnde: „Die Daten wurden ausgewertet.“ Gebildet mit „werden“ + Partizip II; im Perfekt „ist … worden“. Ein Passiv ohne Subjekt ist möglich: „Es wurde gezählt.“',
        {
          headers: ['Zeit', 'Beispiel'],
          rows: [
            ['Präsens', 'Die Proben werden analysiert.'],
            ['Präteritum', 'Die Proben wurden analysiert.'],
            ['Perfekt', 'Die Proben sind analysiert worden.'],
            ['mit Modalverb', 'Die Proben müssen analysiert werden.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Befragt [wurden] 120 Lehrkräfte. Die Antworten sind anonym ausgewertet [worden]. Die Daten müssen noch geprüft [werden].',
        ['wird', 'geworden', 'sein'],
      ),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Eine Entscheidung treffen',
    ref: [A, 8, 4],
    learn: [
      grammar(
        'Funktionsverbgefüge',
        'Nomen + bedeutungsarmes Verb: „eine Entscheidung treffen“, „in Kraft treten“, „Kritik üben“. Manche sind feste Fachsprache, andere blähen den Text auf: „eine Untersuchung durchführen“ statt „untersuchen“, „zur Anwendung kommen“ statt „angewendet werden“.',
      ),
    ],
    test: [
      match('Welches Verb passt?', [
        ['eine Entscheidung', 'treffen'],
        ['Kritik', 'üben'],
        ['in Kraft', 'treten'],
        ['zur Verfügung', 'stellen'],
        ['Rücksicht', 'nehmen'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Das Abstract',
    ref: [A, 8, 5],
    learn: [
      tip(
        'Eine Arbeit in wenigen Sätzen',
        'Fragestellung, Methode, zentrale Ergebnisse, Schlussfolgerung – ohne Zitate, ohne Abkürzungen, ohne Versprechen, die die Arbeit nicht hält.',
      ),
    ],
    test: [
      order('Bringen Sie das Abstract in die übliche Reihenfolge.', [
        'Die Studie untersucht, wie Erstsemester digitale Lernplattformen nutzen.',
        'Dazu wurden 240 Studierende an drei Hochschulen befragt.',
        'Die Mehrheit nutzte die Plattformen vor allem zum Herunterladen von Folien.',
        'Die Befunde legen nahe, interaktive Elemente gezielter einzubinden.',
      ]),
    ],
  },

  // ------------------------------------------------ Kapitel 9: Stil und Register
  {
    kind: 'VOCAB',
    title: 'Speisen, essen, futtern',
    ref: [A, 9, 1],
    learn: [
      grammar(
        'Die Registerskala',
        'gehoben – standardsprachlich – umgangssprachlich – salopp/derb. Wörterbücher markieren mit „geh.“, „ugs.“, „derb“. Mit dem Register ändern sich auch Satzbau und Anrede.',
        {
          headers: ['gehoben', 'standard', 'umgangssprachlich'],
          rows: [
            ['versterben', 'sterben', 'draufgehen'],
            ['speisen', 'essen', 'futtern'],
            ['sich begeben', 'gehen', 'abhauen'],
          ],
        },
      ),
    ],
    test: [
      match('Umgangssprachlich → standardsprachlich', [
        ['die Kohle', 'das Geld'],
        ['pennen', 'schlafen'],
        ['die Glotze', 'der Fernseher'],
        ['kapieren', 'verstehen'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Die passende Ebene',
    ref: [A, 9, 1],
    learn: [
      tip(
        'Register wählen',
        'Das Register muss zu Anlass, Medium und Beziehung passen. Eine Beileidskarte an eine Kollegin verlangt eine gehobene, aber warme Sprache – weder salopp noch bürokratisch.',
      ),
    ],
    test: [
      choice('Welcher Satz passt in eine Beileidskarte an eine Kollegin?', 'Wählen Sie.', [
        'Tut mir echt leid, dass dein Vater gestorben ist.',
        '*Mit großer Anteilnahme habe ich vom Tod Ihres Vaters erfahren.',
        'Hiermit wird Ihnen das Beileid zum Ableben Ihres Erzeugers ausgesprochen.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Hab ’ne Frage',
    ref: [A, 9, 2],
    learn: [
      grammar(
        'Gesprochenes Deutsch',
        'Verschleifung („hab“, „’ne“), Klitisierung („haste“, „gehste“), Subjektellipse („Weiß ich nicht.“), Rückversicherung („oder?“, „ne?“) und „weil“ mit Hauptsatzstellung. In Texten meidet man diese Formen – außer in wörtlicher Rede.',
      ),
    ],
    test: [
      match('Gesprochen → geschrieben', [
        ['Haste Zeit?', 'Hast du Zeit?'],
        ['Weiß ich nicht.', 'Das weiß ich nicht.'],
        ['Gibt’s ’n Problem?', 'Gibt es ein Problem?'],
        ['Kommste mit?', 'Kommst du mit?'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Moin, Servus, Grüezi',
    ref: [A, 9, 2],
    learn: [
      culture(
        'Regional verschieden',
        'Die Umgangssprache ist regional gefärbt: „Moin“ im Norden, „Grüß Gott“ oder „Servus“ im Süden und in Österreich, „Grüezi“ in der Schweiz. Das Brötchen heißt im Süden und in Österreich „Semmel“, in der Schweiz „Brötli“ oder „Weggli“.',
      ),
    ],
    test: [
      match('Wo sagt man das?', [
        ['Moin!', 'Norddeutschland'],
        ['Grüezi!', 'Schweiz'],
        ['Baba!', 'Österreich'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Na, super!',
    ref: [A, 9, 3],
    learn: [
      grammar(
        'Ironie und Untertreibung',
        'Ironie sagt das Gegenteil des Gemeinten („Na, super!“, „Das fängt ja gut an.“). Die Untertreibung verneint das Gegenteil („nicht schlecht“ = gut, „nicht ganz billig“ = teuer) und mildert Lob oder Kritik ab.',
      ),
    ],
    test: [
      match('Was ist gemeint?', [
        ['Die Lage ist nicht ganz einfach.', 'Die Lage ist schwierig.'],
        ['Sie ist nicht gerade gesprächig.', 'Sie redet sehr wenig.'],
        ['Na toll, der Akku ist leer.', 'Das ist ärgerlich.'],
        ['Nicht übel, dein Kuchen!', 'Dein Kuchen ist richtig gut.'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Könnten Sie vielleicht …?',
    ref: [G, 12, 2],
    learn: [
      grammar(
        'Höfliche Bitten mit dem Konjunktiv II',
        'Der Konjunktiv II macht aus einer Aufforderung eine Bitte: „Könnten Sie …?“, „Würden Sie …?“, „Hätten Sie einen Moment Zeit?“. Partikeln wie „vielleicht“ und „bitte“ mildern zusätzlich. „Ich hätte gern …“ und „Ich würde gern …“ äußern Wünsche.',
        {
          headers: ['direkt', 'höflich'],
          rows: [
            ['Schicken Sie mir den Bericht.', 'Könnten Sie mir den Bericht schicken?'],
            ['Ich will einen Termin.', 'Ich hätte gern einen Termin.'],
            ['Helfen Sie mir!', 'Würden Sie mir vielleicht helfen?'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        '[Könnten] Sie mir bitte den Bericht schicken? Ich [hätte] gern einen Termin am Freitag. [Würden] Sie mir vielleicht kurz helfen?',
        ['Können', 'habe', 'Werden'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Klartext statt Amtsdeutsch',
    ref: [A, 9, 4],
    learn: [
      tip(
        'Vier Regeln',
        'Verben statt Substantive („wenn Sie die Frist nicht einhalten“ statt „bei Nichteinhaltung der Frist“), aktiv statt passiv, den Leser direkt ansprechen, kurze Sätze.',
      ),
    ],
    test: [
      match('Amtsdeutsch → Klartext', [
        ['unter Beifügung der Unterlagen', 'Legen Sie bitte die Unterlagen bei.'],
        ['nach erfolgter Prüfung', 'wenn wir alles geprüft haben'],
        ['zwecks Terminvereinbarung', 'damit wir einen Termin vereinbaren können'],
        ['bei Nichtvorliegen der Voraussetzungen', 'wenn Sie die Bedingungen nicht erfüllen'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Dasselbe, ganz anders',
    ref: [A, 9, 5],
    learn: [
      text(
        'Registerwechsel betrifft nicht nur die Wörter, sondern auch Satzbau, Anrede und Inhalt. Einer Kollegin nennt man den Grund einer Absage knapp, einem Freund erzählt man die ganze Geschichte, und eine offizielle Einladung beantwortet man mit festen Formeln.',
      ),
    ],
    test: [
      match('Welcher Adressat?', [
        ['Leider muss ich den Termin am Donnerstag absagen. Könnten wir einen neuen vereinbaren?', 'Kollegin'],
        ['Sorry, Donnerstag klappt nicht, bin total erkältet. Nächste Woche?', 'enger Freund'],
        ['Zu meinem großen Bedauern ist es mir nicht möglich, an der Feierstunde teilzunehmen.', 'Einladung des Bürgermeisters'],
      ]),
    ],
  },

  // ------------------------------------------------ Kapitel 10: Idiomatik und Nuancen
  {
    kind: 'VOCAB',
    title: 'Ins Fettnäpfchen treten',
    ref: [A, 10, 1],
    learn: [
      words('Redewendungen', [
        ['Tomaten auf den Augen haben', 'to be blind to the obvious'],
        ['die Katze aus dem Sack lassen', 'to let the cat out of the bag'],
        ['ins Fettnäpfchen treten', 'to put one’s foot in it'],
        ['jemandem auf den Keks gehen', 'to get on someone’s nerves'],
        ['etwas auf die lange Bank schieben', 'to put something off'],
        ['Schwein haben', 'to be lucky'],
        ['die Nase voll haben', 'to be fed up'],
      ]),
    ],
    test: [
      match('Welche Redewendung passt?', [
        ['Sie fragen eine Kollegin nach ihrem Mann – sie hat sich gerade getrennt.', 'ins Fettnäpfchen treten'],
        ['Der Bus ist weg, aber ein Taxi hält direkt vor Ihnen.', 'Schwein haben'],
        ['Ihr Bruder verrät den Namen des Babys zu früh.', 'die Katze aus dem Sack lassen'],
        ['Sie erledigen die Steuererklärung seit Monaten nicht.', 'etwas auf die lange Bank schieben'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Den Nagel auf den Kopf treffen',
    ref: [A, 10, 1],
    learn: [
      tip(
        'Was fest ist',
        'Verb und Pronomen passen sich an („Das geht mir auf den Keks“). Nomen, Präpositionen und Artikel bleiben fest: nicht „den Nagel in den Kopf treffen“ oder „sauberen Wein einschenken“.',
      ),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Ich habe die [Nase] voll! Du hast den [Nagel] auf den Kopf getroffen. Er muss ihr endlich reinen [Wein] einschenken.',
        ['Kopf', 'Wasser'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Einen Vortrag halten, nicht geben',
    ref: [A, 10, 2],
    learn: [
      grammar(
        'Kollokationen',
        'Feste Wortpartner, die man nicht ableiten, sondern nur lernen kann: eine Entscheidung treffen, eine Frage stellen, einen Vortrag halten, eine Rolle spielen, Rücksicht nehmen, einen Antrag einreichen, Bescheid geben.',
      ),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Die Direktorin hat die Entscheidung [getroffen]. Es wurden viele Fragen [gestellt]. Ein Experte hat einen Vortrag [gehalten]. Das Geld hat die entscheidende Rolle [gespielt].',
        ['gemacht', 'gegeben'],
      ),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Hohes Fieber, starker Regen',
    ref: [A, 10, 2],
    learn: [
      tip(
        'Adjektiv-Kollokationen',
        'Auch Adjektive haben feste Partner: starker Regen, dichter Verkehr, hohes Fieber, schwere Krankheit, großer Hunger. „Schwerer Regen“ versteht jeder – aber niemand sagt es.',
      ),
    ],
    test: [
      choice('Welche Verbindung ist üblich?', 'Wählen Sie.', [
        'Sie hat schweres Fieber.',
        '*Sie hat hohes Fieber.',
        'Sie hat großes Fieber.',
      ]),
      match('Welches Adjektiv passt?', [
        ['___ Regen', 'starker'],
        ['___ Verkehr', 'dichter'],
        ['___ Hunger', 'großer'],
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Schlendern oder hetzen?',
    ref: [A, 10, 3],
    learn: [
      grammar(
        'Synonymreihen',
        'Ähnliche Wörter unterscheiden sich in Intensität, Wertung oder Stil: sagen – behaupten – beteuern; gehen – schlendern – hetzen; bekommen – erhalten – kriegen; Ärger – Wut – Zorn.',
      ),
    ],
    test: [
      match('Welches Verb passt?', [
        ['Am Sonntag ___ wir gemütlich durch die Altstadt.', 'schlendern'],
        ['Wir sind zu spät und ___ zum Bahnhof.', 'hetzen'],
        ['Er ___ immer wieder, er sei unschuldig.', 'beteuert'],
        ['Die Kinder ___ in der letzten Reihe.', 'kichern'],
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Eventuell heißt nicht eventually',
    ref: [A, 10, 3],
    learn: [
      tip(
        'Falsche Freunde',
        '„eventuell“ = möglicherweise (nicht „schließlich“), „aktuell“ = gegenwärtig (nicht „tatsächlich“), „sensibel“ = empfindsam (nicht „vernünftig“), „konsequent“ = folgerichtig, beharrlich.',
      ),
    ],
    test: [
      match('Was bedeutet das Wort?', [
        ['eventuell', 'möglicherweise'],
        ['aktuell', 'gegenwärtig'],
        ['sensibel', 'empfindsam'],
        ['konsequent', 'folgerichtig'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Wer A sagt …',
    ref: [A, 10, 4],
    learn: [
      culture(
        'Sprichwörter',
        'Sprichwörter werden oft nur angedeutet: „Wer zuletzt lacht …“. Lebendige Beispiele: „Der Apfel fällt nicht weit vom Stamm.“ „Aller Anfang ist schwer.“ „Wer A sagt, muss auch B sagen.“ „Ende gut, alles gut.“',
      ),
    ],
    test: [
      match('Welches Sprichwort passt?', [
        ['Die Tochter des Bäckers eröffnet auch eine Bäckerei.', 'Der Apfel fällt nicht weit vom Stamm.'],
        ['Nach vielen Pannen wird die Hochzeit doch noch schön.', 'Ende gut, alles gut.'],
        ['Die ersten Wochen im Job sind anstrengend.', 'Aller Anfang ist schwer.'],
        ['Du hast dich angemeldet – jetzt musst du auch hingehen.', 'Wer A sagt, muss auch B sagen.'],
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Paradeiser und Velo',
    ref: [A, 10, 4],
    learn: [
      culture(
        'Deutsch ist plurizentrisch',
        'Österreich und die Schweiz haben eigene Standardvarianten. In Österreich sagt man „Paradeiser“ (Tomate), „Erdapfel“ (Kartoffel) und „Jänner“ (Januar), in der Schweiz „Velo“ (Fahrrad) und „parkieren“ (parken). Keine Form ist richtiger als die andere.',
      ),
    ],
    test: [
      match('Was bedeutet das?', [
        ['der Paradeiser (Österreich)', 'die Tomate'],
        ['der Jänner (Österreich)', 'der Januar'],
        ['das Velo (Schweiz)', 'das Fahrrad'],
        ['parkieren (Schweiz)', 'parken'],
      ]),
    ],
  },

  // ------------------------------------------------ Kapitel 11: Diskurs und Debatte
  {
    kind: 'VOCAB',
    title: 'Die Diskussion leiten',
    ref: [A, 11, 1],
    learn: [
      words('Moderation', [
        ['die Wortmeldung', 'request to speak'],
        ['das Wort erteilen', 'to give the floor'],
        ['der Standpunkt', 'point of view'],
        ['die Tagesordnung', 'agenda'],
        ['unparteiisch', 'impartial'],
        ['der Konsens', 'consensus'],
        ['der Kompromiss', 'compromise'],
        ['beim Thema bleiben', 'to stay on topic'],
      ]),
    ],
    test: [
      match('Welche Funktion?', [
        ['Herr Özdemir, Sie haben das Wort.', 'das Wort erteilen'],
        ['Jeder hat drei Minuten für ein Eingangsstatement.', 'Regeln nennen'],
        ['Kommen wir damit zur Finanzierung.', 'überleiten'],
        ['Ich danke Ihnen für Ihre Beiträge.', 'abschließen'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Unparteiisch moderieren',
    ref: [A, 11, 1],
    learn: [
      tip(
        'Keine Bewertung',
        'Die Moderatorin gewinnt keine Debatte, sie ermöglicht sie. Sie lobt und tadelt keine Beiträge und stellt offene Fragen. Das „ich“ bleibt für Verfahrensentscheidungen: „Ich schlage vor, dass wir …“.',
      ),
    ],
    test: [
      choice('Ein Teilnehmer hat seinen Standpunkt dargelegt.', 'Welche Reaktion ist unparteiisch?', [
        'Sehr überzeugend! Frau Klein, was sagen Sie dazu?',
        '*Danke. Frau Klein, wie sehen Sie das?',
        'Frau Klein, Sie sind da sicher ganz anderer Meinung, oder?',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Darf ich Sie kurz unterbrechen?',
    ref: [A, 11, 2],
    learn: [
      grammar(
        'Eingreifen mit Höflichkeit',
        'Konjunktiv II und Partikeln mildern („Könnten Sie bitte zum Schluss kommen?“). Begründungen mit Regeln statt Inhalten schonen die Person („Damit alle zu Wort kommen, …“). Einen Beitrag würdigen und vertagen: „Ich nehme den Punkt gern für die nächste Sitzung auf.“',
      ),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Darf ich Sie kurz [unterbrechen]? Lassen wir Frau Lang bitte erst [ausreden]. [Könnten] Sie bitte zum Schluss kommen?',
        ['aufhören', 'Können'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Zum Thema zurück',
    ref: [A, 11, 2],
    learn: [
      dialogue('Eine Elternversammlung', [
        'Herr Bauer: … und die Turnhalle ist seit Jahren marode, und im letzten Winter …',
        'Moderatorin: Darf ich Sie kurz unterbrechen? Die Turnhalle ist wichtig, aber heute geht es um den Ganztag. Ich nehme den Punkt für die nächste Sitzung auf.',
        'Frau Yilmaz: Ganz genau, das gehört hier nicht –',
        'Moderatorin: Einen Moment, Frau Yilmaz, gleich sind Sie dran. Herr Bauer, noch etwas zum Ganztag?',
      ]),
    ],
    test: [
      match('Was tut die Moderatorin?', [
        ['Ich nehme den Punkt für die nächste Sitzung auf.', 'würdigen und vertagen'],
        ['Einen Moment, gleich sind Sie dran.', 'eine Unterbrechung abwehren'],
        ['Noch etwas zum Ganztag?', 'zum Thema zurückführen'],
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Beharrt darauf oder hält daran fest?',
    ref: [A, 11, 3],
    learn: [
      grammar(
        'Neutral zusammenfassen',
        'Wertende Verben („beharrt darauf“, „jammert“, „behauptet“), wertende Adjektive und die Stellung (wer zuletzt kommt, scheint recht zu haben) machen eine Zusammenfassung parteiisch. Parallele Sätze und neutrale Verben zeigen Gleichbehandlung.',
      ),
    ],
    test: [
      match('Wertend → neutral', [
        ['beharrt darauf', 'hält daran fest'],
        ['jammert', 'äußert Sorge'],
        ['behauptet', 'ist der Ansicht'],
        ['muss zugeben', 'räumt ein'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Der Investor ist der Ansicht, das Zentrum schaffe Arbeit',
    ref: [A, 11, 3],
    learn: [
      tip(
        'Konjunktiv I in der Zusammenfassung',
        'Wer Meinungen neutral wiedergibt, verwendet den Konjunktiv I – und bei Formgleichheit mit dem Indikativ die Ersatzform („sie würden … verlieren“). So bleibt klar, dass die Moderatorin nur wiedergibt, nicht urteilt.',
      ),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Der Investor meint, das Zentrum [schaffe] Arbeitsplätze. Die Händler befürchten, sie [würden] Kundschaft verlieren. Beide betonen, die Innenstadt [müsse] attraktiv bleiben.',
        ['schafft', 'werden', 'muss'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Positionen und Interessen',
    ref: [A, 11, 4],
    learn: [
      grammar(
        'Vermitteln',
        'Positionen sind das, was jemand fordert; Interessen das, was er eigentlich braucht. Aktiv zuhören („Wenn ich Sie richtig verstehe, geht es Ihnen um …“), nach Interessen fragen („Was ist Ihnen dabei wichtig?“), Gemeinsames benennen und Lösungen im Konjunktiv II öffnen („Wäre es denkbar, dass …?“).',
      ),
    ],
    test: [
      choice('„Der Typ über mir ist rücksichtslos! Jede Nacht Lärm bis zwei Uhr!“', 'Wie reagiert eine gute Vermittlerin?', [
        'Da haben Sie recht, der ist wirklich rücksichtslos.',
        '*Ich verstehe, dass Sie das ärgert. Wenn ich Sie richtig verstehe, brauchen Sie vor allem nachts Ruhe.',
        'Warum haben Sie nicht früher etwas gesagt?',
      ]),
      cloze(
        'Ergänzen Sie.',
        'Sie [beide] wollen offenbar ein gutes Verhältnis. [Wäre] es denkbar, dass unter der Woche ab 22 Uhr Ruhe herrscht?',
        ['alle', 'Ist'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Das Ergebnisprotokoll',
    ref: [A, 11, 5],
    learn: [
      tip(
        'Was, wer, bis wann',
        'Das Ergebnisprotokoll hält Beschlüsse (Indikativ, oft Passiv: „Es wurde beschlossen, …“), Meinungen (Konjunktiv I), Aufgaben mit Fristen und offene Fragen fest. Vertagte Punkte werden ausdrücklich genannt.',
      ),
    ],
    test: [
      order('Bringen Sie die Teile des Protokolls in die richtige Reihenfolge.', [
        'Protokoll der Elternversammlung vom 12. Februar. Anwesend: 24 Eltern, Schulleitung.',
        'TOP 1: Die Schulleitung stellte das Konzept für den Ganztag vor.',
        'Mehrere Eltern wiesen darauf hin, es fehlten Betreuungskräfte.',
        'Es wurde beschlossen, eine Arbeitsgruppe einzurichten.',
        'Der Zustand der Turnhalle wurde auf die nächste Sitzung vertagt.',
      ]),
    ],
  },

  // ------------------------------------------------ Kapitel 12: Fachsprache und Vermittlung
  {
    kind: 'VOCAB',
    title: 'Wissen vermitteln',
    ref: [A, 12, 1],
    learn: [
      words('Vermittlung', [
        ['der Fachbegriff', 'technical term'],
        ['der Laie', 'layperson'],
        ['die Zielgruppe', 'target audience'],
        ['veranschaulichen', 'to illustrate'],
        ['vereinfachen', 'to simplify'],
        ['verfälschen', 'to distort'],
        ['allgemeinverständlich', 'accessible to everyone'],
        ['das Vorwissen', 'prior knowledge'],
      ]),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Wer für [Laien] schreibt, fragt zuerst nach dem [Vorwissen] der [Zielgruppe]. Man darf vereinfachen, aber nicht [verfälschen].',
        ['Fachbegriff', 'veranschaulichen'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Bluthochdruck statt Hypertonie',
    ref: [A, 12, 1],
    learn: [
      tip(
        'Fachsprache übersetzen',
        'Fachsprache ist genau und kurz – unter Fachleuten. Für Laien übersetzt man: „Hypertonie“ → Bluthochdruck, „rezidivierend“ → immer wiederkehrend, „Die Einnahme erfolgt postprandial“ → Nehmen Sie das Medikament nach dem Essen.',
      ),
    ],
    test: [
      match('Übersetzen Sie in Alltagssprache.', [
        ['präventiv', 'vorbeugend'],
        ['akut', 'plötzlich und heftig'],
        ['Kontraindikation', 'Grund, ein Mittel nicht zu nehmen'],
        ['postprandial', 'nach dem Essen'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: '… was Ökonomen als Inflation bezeichnen',
    ref: [A, 12, 2],
    learn: [
      grammar(
        'Fachbegriffe einführen',
        'Apposition („Das Immunsystem, die körpereigene Abwehr, …“), Umschreibung („das heißt“, „also“), Funktionserklärung („sorgt dafür, dass …“) und Umkehrung: erst die Sache, dann der Name („… was Ökonomen als Inflation bezeichnen“).',
      ),
    ],
    test: [
      match('Welche Technik?', [
        ['Die Mitochondrien, die Kraftwerke der Zelle, liefern Energie.', 'Apposition'],
        ['Er hat zu wenig Eisen, das heißt, er ist anämisch.', 'Umschreibung'],
        ['Insulin sorgt dafür, dass Zucker in die Zellen gelangt.', 'Funktionserklärung'],
        ['Manche Bakterien überleben Antibiotika – was Mediziner Resistenz nennen.', 'Umkehrung'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Wenn die Erde ein Apfel wäre',
    ref: [A, 12, 3],
    learn: [
      grammar(
        'Vergleiche',
        '„wie“ und „ähnlich wie“ vergleichen direkt. „Stellen Sie sich vor, …“ lädt zum Mitdenken ein. „Wenn … wäre, …“ baut Größenvergleiche im Konjunktiv II. „So wie …, so …“ zieht eine Parallele.',
      ),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Wenn die Geschichte der Erde ein einziger Tag [wäre], [gäbe] es den Menschen erst seit wenigen Sekunden. [Stellen] Sie sich vor, ein Sandkorn wäre so groß wie ein Stadion.',
        ['ist', 'gibt', 'Stellt'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Jeder Vergleich hinkt',
    ref: [A, 12, 3],
    learn: [
      tip(
        'Die Grenze benennen',
        'Die Armee als Bild für das Immunsystem erklärt die Abwehr gut, verschweigt aber, dass der Körper mit Billionen nützlicher Bakterien zusammenlebt. Ein Satz genügt: „Der Vergleich hinkt allerdings an einer Stelle: …“.',
      ),
    ],
    test: [
      match('Welcher Vergleich passt?', [
        ['Arbeitsspeicher', 'ein Schreibtisch'],
        ['Ausdehnung des Universums', 'ein Hefeteig mit Rosinen'],
        ['Impfung', 'ein Fahndungsfoto für die Abwehr'],
        ['Treibhauseffekt', 'eine Decke, die Wärme zurückhält'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Drei von 10 000',
    ref: [A, 12, 4],
    learn: [
      grammar(
        'Zahlen verständlich machen',
        'Natürliche Häufigkeiten („3 von 10 000“) statt Prozente („0,03 %“). Relative Angaben („um 50 % höher“) immer mit absoluten verbinden („von 2 auf 3 Fälle pro 10 000“). Große Mengen durch Vergleiche greifbar machen.',
      ),
    ],
    test: [
      choice('Das Risiko einer Nebenwirkung steigt von 2 auf 3 Fälle pro 10 000 Patienten.', 'Welche Schlagzeile ist am ehrlichsten?', [
        'Medikament erhöht Risiko um 50 Prozent!',
        'Medikament völlig ungefährlich.',
        '*Nebenwirkung etwas häufiger: 3 statt 2 Fälle pro 10 000 Patienten.',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Noch weiß niemand, ob …',
    ref: [A, 12, 4],
    learn: [
      tip(
        'Unsicherheit ehrlich kommunizieren',
        'Gesichert: „Heute wissen wir, dass …“. Wahrscheinlich: „Vieles spricht dafür, dass …“. Vorläufig: „Erste Daten deuten darauf hin, …; bestätigt ist das noch nicht.“ Unbekannt: „Noch weiß niemand, ob …“.',
      ),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Heute [wissen] wir, dass Bewegung das Herz schützt. Vieles [spricht] dafür, dass 30 Minuten täglich genügen. Erste Studien [deuten] darauf hin, dass auch das Gedächtnis profitiert.',
        ['glauben', 'zeigt'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Weglassen, was nicht trägt',
    ref: [A, 12, 5],
    learn: [
      tip(
        'Der Bogen eines Wissenstextes',
        'Einstieg bei der Erfahrung des Lesers, Frage, Mechanismus mit Vergleich, eine greifbare Zahl, eine offene Frage, ein Schluss, der zum Anfang zurückkehrt. Zusammenfassen heißt auswählen, nicht proportional kürzen.',
      ),
    ],
    test: [
      order('Bringen Sie den Text in eine sinnvolle Reihenfolge.', [
        'Warum ist Meerwasser salzig, Flusswasser aber nicht?',
        'Regen löst winzige Mengen Salz aus dem Gestein, Flüsse tragen es ins Meer.',
        'Dort verdunstet das Wasser, das Salz bleibt zurück – wie der Rand im Kochtopf.',
        'Über Millionen Jahre sammelten sich so etwa 35 Gramm Salz pro Liter an.',
        'Auch Flusswasser ist also leicht salzig – nur schmecken wir es nicht.',
      ]),
    ],
  },
]);
