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

/** Deutsch C1 – Advanced, Kapitel 1 bis 6, dazu Konjunktiv I und Konnektoren aus dem Grammatikbuch. */
export const DE_C1 = lessons('de-c1', [
  // ------------------------------------------------ Kapitel 1: Sprache und Denken
  {
    kind: 'VOCAB',
    title: 'Über Sprache sprechen',
    ref: [A, 1, 1],
    learn: [
      words('Sprachreflexion', [
        ['die Wahrnehmung', 'perception'],
        ['prägen', 'to shape'],
        ['die Nuance', 'nuance'],
        ['der Sprachgebrauch', 'language use'],
        ['widerlegen', 'to refute'],
        ['sich bestätigen', 'to be confirmed'],
        ['die Aufmerksamkeit lenken', 'to direct attention'],
      ]),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Die starke These gilt als [widerlegt]. Eine schwächere hat sich [bestätigt]: Die Sprache [prägt] unsere [Wahrnehmung].',
        ['Nuance', 'lenkt'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Prägt die Sprache das Denken?',
    ref: [A, 1, 1],
    learn: [
      text(
        'Die starke These, die Sprache bestimme das Denken vollständig, gilt heute als widerlegt: Wer kein Wort für „Schadenfreude“ hat, kann das Gefühl trotzdem empfinden. Eine schwächere Fassung hat sich bestätigt: Sprache lenkt die Aufmerksamkeit. Wer eine Sprache mit Himmelsrichtungen statt „links“ und „rechts“ spricht, orientiert sich auch ohne Kompass erstaunlich sicher.',
      ),
    ],
    test: [
      choice('Lesen Sie den Text.', 'Welche Position vertritt der Text?', [
        'Die Sprache bestimmt vollständig, was wir denken können.',
        '*Die Sprache lenkt die Aufmerksamkeit, bestimmt aber nicht das Denken.',
        'Sprache und Denken haben nichts miteinander zu tun.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Das hab ich dir doch gesagt',
    ref: [A, 1, 2],
    learn: [
      grammar(
        'doch, ja, mal, denn',
        'Modalpartikeln ändern nicht den Inhalt, sondern die Haltung. Sie sind unbetont und stehen im Mittelfeld. „doch“ erinnert an Bekanntes, „ja“ drückt Erstaunen oder gemeinsames Wissen aus, „mal“ macht eine Bitte beiläufig, „denn“ zeigt in Fragen Interesse.',
        {
          headers: ['Partikel', 'Beispiel', 'Wirkung'],
          rows: [
            ['doch', 'Das weißt du doch!', 'Erinnerung, leichter Vorwurf'],
            ['ja', 'Du bist ja schon da!', 'Erstaunen'],
            ['mal', 'Gib mir mal das Salz.', 'beiläufige Bitte'],
            ['denn', 'Was ist denn los?', 'Interesse'],
          ],
        },
      ),
    ],
    test: [
      match('Welche Wirkung?', [
        ['Das weißt du doch!', 'Erinnerung an Bekanntes'],
        ['Du bist ja schon da!', 'Erstaunen'],
        ['Kannst du mal kommen?', 'beiläufige Bitte'],
        ['Wie heißt du denn?', 'freundliches Interesse'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Aber du hattest doch Zeit!',
    ref: [A, 1, 2],
    learn: [
      dialogue('Im Büro', [
        'Jonas: Hast du mal kurz Zeit?',
        'Lea: Klar. Was ist denn los?',
        'Jonas: Der Bericht ist noch nicht fertig. Der Chef will ihn ja heute haben.',
        'Lea: Aber du hattest doch eine ganze Woche Zeit!',
        'Jonas: Ich weiß. Hilf mir doch bitte, nur mit den Tabellen.',
      ]),
    ],
    test: [
      choice('Lesen Sie den Dialog.', 'Was drückt Lea mit „doch“ aus?', [
        'Sie teilt Jonas eine neue Information mit.',
        '*Sie erinnert ihn an Bekanntes und macht ihm einen leichten Vorwurf.',
        'Sie fragt, ob er eine Woche Zeit hatte.',
      ]),
      cloze(
        'Ergänzen Sie.',
        'Kannst du mir [mal] helfen? – Was ist [denn] passiert? – Du siehst [ja] ganz blass aus!',
        ['doch'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Dann eben nicht',
    ref: [A, 1, 3],
    learn: [
      grammar(
        'eben, halt, eigentlich, wohl, schon',
        '„eben“ und „halt“: Es ist nicht zu ändern. „eigentlich“ schränkt ein oder leitet in Fragen beiläufig ein neues Thema ein. „wohl“: Vermutung. „schon“: Zuversicht oder Zugeständnis („Das ist schon richtig, aber …“).',
      ),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Der Zug ist weg. Dann fahren wir [eben|halt] morgen. Anna kommt nicht – sie ist [wohl] krank. Keine Sorge, das wird [schon] klappen. Woher kennt ihr euch [eigentlich]?',
        ['doch', 'mal'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Komm doch mal vorbei',
    ref: [A, 1, 3],
    learn: [
      tip(
        'Stellung der Partikeln',
        'Modalpartikeln stehen nach dem konjugierten Verb und nach unbetonten Pronomen, aber vor dem Neuen. Nie am Satzanfang. Mehrere Partikeln haben eine feste Reihenfolge: „doch mal“, „denn eigentlich“, „ja doch“.',
      ),
    ],
    test: [
      order('Bringen Sie die Wörter in die richtige Reihenfolge.', [
        'Kommt',
        'ihr',
        'doch',
        'mal',
        'am Wochenende vorbei!',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Scheinbar oder anscheinend?',
    ref: [A, 1, 4],
    learn: [
      grammar(
        'Verwechselte Paare',
        '„scheinbar“: Es sieht so aus, ist aber nicht so. „anscheinend“: Es sieht so aus und ist vermutlich so. „das Gleiche“: gleiche Art; „dasselbe“: identisch. „effektiv“: wirksam; „effizient“: wirksam mit wenig Aufwand.',
      ),
    ],
    test: [
      choice('Wählen Sie die Deutung.', '„Die Aufgabe war nur scheinbar leicht.“', [
        'Die Aufgabe war vermutlich leicht.',
        '*Die Aufgabe wirkte leicht, war es aber nicht.',
        'Die Aufgabe war sehr leicht.',
      ]),
      cloze(
        'Ergänzen Sie.',
        'Die Straße ist nass, es hat [anscheinend] geregnet. Die neue Methode ist schneller und billiger, also [effizient].',
        ['scheinbar', 'effektiv'],
      ),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Sparsam oder geizig?',
    ref: [A, 1, 4],
    learn: [
      tip(
        'Denotation und Konnotation',
        'Zwei Wörter können dasselbe bezeichnen und verschieden bewerten: „sparsam“ lobt, „geizig“ kritisiert. Besonders in Kommentaren und Werbung verraten solche Wörter die Haltung des Schreibers.',
      ),
    ],
    test: [
      match('Abwertend → aufwertend', [
        ['geizig', 'sparsam'],
        ['stur', 'beharrlich'],
        ['mager', 'schlank'],
        ['Rückständigkeit', 'Traditionsbewusstsein'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Sprache im Wandel',
    ref: [A, 1, 5],
    learn: [
      culture(
        'Positionen wiedergeben',
        'Befürworter geschlechtergerechter Sprache argumentieren, das generische Maskulinum („die Lehrer“) lasse Frauen gedanklich verschwinden. Kritiker halten dagegen, Formen wie „Lehrer*innen“ erschwerten das Lesen. Viele Texte weichen auf Doppelformen („Lehrerinnen und Lehrer“) oder neutrale Wörter („Lehrkräfte“) aus.',
      ),
    ],
    test: [
      match('Wer vertritt welche Position?', [
        ['Das generische Maskulinum lässt Frauen verschwinden.', 'Befürworter'],
        ['Sonderzeichen erschweren das Lesen.', 'Kritiker'],
        ['„Lehrkräfte“ umgeht das Problem.', 'häufiger Kompromiss'],
      ]),
    ],
  },

  // ------------------------------------------------ Kapitel 2: Forschung und Ethik
  {
    kind: 'VOCAB',
    title: 'Forschung und Ethik',
    ref: [A, 2, 1],
    learn: [
      words('Forschung', [
        ['der Tierversuch', 'animal experiment'],
        ['der Wirkstoff', 'active ingredient'],
        ['genehmigen', 'to approve'],
        ['übertragen (auf + Akk.)', 'to transfer to'],
        ['die Ersatzmethode', 'alternative method'],
        ['abwägen', 'to weigh up'],
        ['vertretbar', 'justifiable'],
        ['die Einwilligung', 'consent'],
      ]),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Ein Versuch wird nur [genehmigt], wenn es keine [Ersatzmethode] gibt. Viele Ergebnisse lassen sich nicht auf den Menschen [übertragen]. Man muss Nutzen und Leid [abwägen].',
        ['Wirkstoff', 'vertretbar'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Das 3R-Prinzip',
    ref: [A, 2, 1],
    learn: [
      text(
        'Befürworter von Tierversuchen verweisen darauf, dass nahezu jedes Medikament zuvor an Tieren getestet worden sei. Kritiker halten dagegen, dass sich viele Ergebnisse nicht auf den Menschen übertragen ließen. Einig sind sich beide Seiten beim 3R-Prinzip: Versuche sollen ersetzt (replace), reduziert (reduce) und verfeinert (refine) werden.',
      ),
    ],
    test: [
      match('Ordnen Sie zu.', [
        ['replace', 'durch Zellkulturen oder Computermodelle ersetzen'],
        ['reduce', 'weniger Tiere einsetzen'],
        ['refine', 'Belastung der Tiere verringern'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Er sagt, er habe keine Zeit',
    ref: [A, 2, 2],
    learn: [
      grammar(
        'Der Konjunktiv I',
        'Gebildet vom Infinitivstamm + -e (er habe, sie gebe, man könne); „sein“ ist unregelmäßig (er sei, sie seien). Er zeigt, dass jemand anderes etwas gesagt hat – er ist ein Zeichen von Distanz, nicht von Zweifel. Gebraucht wird vor allem die 3. Person Singular.',
        {
          headers: ['Verb', 'er/sie/es'],
          rows: [
            ['sein', 'sei'],
            ['haben', 'habe'],
            ['können', 'könne'],
            ['werden', 'werde'],
            ['geben', 'gebe'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Setzen Sie in den Konjunktiv I.',
        'Der Forscher erklärt, das Ergebnis [sei] eindeutig. Man [könne] die Methode übertragen. Sein Team [habe] drei Jahre daran gearbeitet.',
        ['ist', 'kann', 'hat'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Sie sagt, sie sei gefahren',
    ref: [A, 2, 2],
    learn: [
      grammar(
        'Drei Zeitstufen',
        'Gleichzeitig: Konjunktiv I Präsens (sie arbeite). Vorzeitig – für jede Vergangenheitsform: haben/sein im Konjunktiv I + Partizip II (sie habe gearbeitet, sie sei gefahren). Nachzeitig: werde + Infinitiv (sie werde arbeiten).',
      ),
    ],
    test: [
      choice('„Ich fuhr sofort ins Labor.“', 'Indirekte Rede:', [
        'Sie sagte, sie fahre sofort ins Labor.',
        '*Sie sagte, sie sei sofort ins Labor gefahren.',
        'Sie sagte, sie werde sofort ins Labor fahren.',
      ]),
      match('Direkt → indirekt', [
        ['„Die Daten sind öffentlich.“', 'Er sagte, die Daten seien öffentlich.'],
        ['„Das Labor war geschlossen.“', 'Er sagte, das Labor sei geschlossen gewesen.'],
        ['„Ich werde zurücktreten.“', 'Er sagte, er werde zurücktreten.'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Sie sagen, sie hätten recht',
    ref: [A, 2, 3],
    learn: [
      grammar(
        'Die Ersatzregel',
        'Ist der Konjunktiv I gleich dem Indikativ (sie haben, sie kommen), nimmt man den Konjunktiv II (sie hätten, sie kämen). Ist auch der gleich (sie arbeiteten), nimmt man „würde“ + Infinitiv. Die Ersatzform bedeutet hier nichts Irreales.',
      ),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Die Tierschützer sagen, sie [hätten] Beweise. Die Leiterin sagt, sie [habe] nichts zu verbergen. Die Studierenden sagen, sie [kämen] zur Demonstration.',
        ['haben', 'hätte', 'kommen'],
      ),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Behaupten oder einräumen?',
    ref: [A, 2, 3],
    learn: [
      tip(
        'Das einleitende Verb wertet',
        '„sagen“, „erklären“: neutral. „betonen“: Nachdruck. „einräumen“, „zugeben“: Eingeständnis. „behaupten“: Zweifel des Schreibers. „bestreiten“, „zurückweisen“: Widerspruch.',
      ),
    ],
    test: [
      match('Was verrät das Verb?', [
        ['Der Konzern behauptet, die Daten seien sicher.', 'Der Schreiber zweifelt.'],
        ['Die Forscherin räumt ein, die Stichprobe sei klein.', 'Sie gibt eine Schwäche zu.'],
        ['Der Minister betont, das Gesetz sei dringend.', 'Er legt Nachdruck darauf.'],
        ['Die Firma bestreitet die Vorwürfe.', 'Sie widerspricht.'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Laut einer Studie',
    ref: [A, 2, 4],
    learn: [
      grammar(
        'Quellen ohne Konjunktiv',
        '„laut“ + Dativ, „zufolge“ nach dem Nomen + Dativ, „nach Angaben“, „wie … berichtet“. „sollen“ gibt wieder, was andere sagen („Er soll davon gewusst haben“), „wollen“ eine Behauptung über sich selbst („Er will nichts gewusst haben“).',
      ),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        '[Laut] einer Umfrage lehnen 60 Prozent das ab. Einer anderen Studie [zufolge] ist die Zahl gesunken. Ein Labor [soll] gegen Auflagen verstoßen haben.',
        ['Wie', 'will'],
      ),
      choice('„Der Leiter will nichts gewusst haben.“', 'Was bedeutet das?', [
        'Er möchte nichts wissen.',
        '*Er behauptet, nichts gewusst zu haben – der Schreiber ist skeptisch.',
        'Andere sagen, er habe nichts gewusst.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Er sagte, er sei krank',
    ref: [G, 12, 3],
    learn: [
      grammar(
        'Indirekte Rede im Überblick',
        'Pronomen und Orts- und Zeitangaben werden an die Perspektive angepasst: „Ich komme morgen“ → Er sagte, er komme am nächsten Tag. Fragen werden mit „ob“ oder dem Fragewort eingeleitet, Aufforderungen mit „sollen“ oder „mögen“.',
        {
          headers: ['Direkt', 'Indirekt'],
          rows: [
            ['„Ich komme morgen.“', 'Er sagte, er komme am nächsten Tag.'],
            ['„Kommst du mit?“', 'Sie fragte, ob ich mitkomme.'],
            ['„Warte hier!“', 'Er sagte, ich solle dort warten.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        '„Hast du Zeit?“ → Sie fragte, [ob] ich Zeit habe. „Ruf mich an!“ → Er sagte, ich [solle] ihn anrufen. „Ich bin heute müde.“ → Sie sagte, sie sei an diesem Tag müde.',
        ['dass', 'soll'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Abwägen und Stellung nehmen',
    ref: [A, 2, 5],
    learn: [
      tip(
        'Redemittel für die Abwägung',
        'Gegenposition fair wiedergeben („Befürworter wenden ein, … sei unverzichtbar“), einräumen („Zwar …, aber …“), gewichten („Schwerer wiegt jedoch …“), Bedingung nennen („vertretbar, sofern …“), Fazit („Alles in allem …“).',
      ),
    ],
    test: [
      order('Bringen Sie die Stellungnahme in eine sinnvolle Reihenfolge.', [
        'Die Frage lässt sich nicht pauschal beantworten.',
        'Befürworter wenden ein, ohne Tierversuche gäbe es viele Therapien nicht.',
        'Zwar ist das nicht zu bestreiten, aber viele Ergebnisse sind nicht übertragbar.',
        'Vertretbar sind Versuche daher nur, sofern es keine Alternative gibt.',
        'Alles in allem sollte die Forschung an Alternativen stärker gefördert werden.',
      ]),
    ],
  },

  // ------------------------------------------------ Kapitel 3: Politik und Öffentlichkeit
  {
    kind: 'VOCAB',
    title: 'Wie ein Gesetz entsteht',
    ref: [A, 3, 1],
    learn: [
      words('Politik', [
        ['der Gesetzentwurf', 'bill'],
        ['die Koalition', 'coalition'],
        ['die Opposition', 'opposition'],
        ['die Fraktion', 'parliamentary group'],
        ['der Ausschuss', 'committee'],
        ['der Antrag', 'motion'],
        ['einen Entwurf einbringen', 'to introduce a bill'],
        ['etwas beschließen', 'to pass, to decide'],
      ]),
    ],
    test: [
      match('Ordnen Sie zu.', [
        ['Koalition', 'Parteien, die gemeinsam regieren'],
        ['Opposition', 'Fraktionen außerhalb der Regierung'],
        ['Ausschuss', 'Gremium für die Detailberatung'],
        ['Bundesrat', 'Vertretung der Landesregierungen'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Drei Lesungen',
    ref: [A, 3, 1],
    learn: [
      text(
        'Die meisten Gesetzentwürfe bringt die Bundesregierung ein. Sie werden im Bundestag in drei Lesungen beraten; die Detailarbeit findet dazwischen in den Ausschüssen statt, wo auch Sachverständige angehört werden. Betrifft ein Gesetz die Länder, muss der Bundesrat zustimmen. Die Reden im Plenum richten sich weniger an die anderen Abgeordneten als an die Öffentlichkeit.',
      ),
    ],
    test: [
      order('Bringen Sie die Schritte in die richtige Reihenfolge.', [
        'Die Regierung bringt einen Entwurf ein.',
        'erste Lesung im Bundestag',
        'Beratung im Ausschuss',
        'zweite und dritte Lesung, Abstimmung',
        'Zustimmung des Bundesrats, falls nötig',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Diesen Vorwurf weise ich zurück',
    ref: [A, 3, 2],
    learn: [
      tip(
        'Formeln der Parlamentsdebatte',
        'Eröffnung: „Frau Präsidentin! Meine sehr geehrten Damen und Herren!“ Zeit gewinnen: „Auf diesen Punkt komme ich gleich.“ Abwehr: „Diesen Vorwurf weise ich entschieden zurück.“ Um das Wort bitten: „Gestatten Sie eine Zwischenfrage?“',
      ),
    ],
    test: [
      match('Was tut der Redner?', [
        ['Diesen Vorwurf weise ich entschieden zurück.', 'sich verteidigen'],
        ['Auf die Frage komme ich gleich.', 'Zeit gewinnen'],
        ['Gestatten Sie eine Zwischenfrage?', 'um das Wort bitten'],
        ['Unsere Tür steht jederzeit offen.', 'Gesprächsbereitschaft zeigen'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Sie reden, wir handeln',
    ref: [A, 3, 3],
    learn: [
      grammar(
        'Rhetorische Mittel',
        'Anapher (gleicher Satzanfang), Trikolon (Dreierreihe), Antithese (Gegensatz), rhetorische Frage (setzt Zustimmung voraus), Metapher (Bild statt Begriff), Euphemismus (Beschönigung), Hyperbel (Übertreibung). In der Analyse zählt immer die Wirkung.',
      ),
    ],
    test: [
      match('Welches Mittel?', [
        ['Die Regierung verwaltet, wir gestalten.', 'Antithese'],
        ['Wer glaubt denn noch an diese Versprechen?', 'rhetorische Frage'],
        ['Freisetzung von Mitarbeitern', 'Euphemismus'],
        ['eine Katastrophe für das ganze Land', 'Hyperbel'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Wer will das bestreiten?',
    ref: [A, 3, 3],
    learn: [
      tip(
        'Vom Mittel zur Wirkung',
        'Die rhetorische Frage erwartet keine Antwort. Sie unterstellt, dass jeder Vernünftige zustimmt – und erspart dem Redner so die Begründung. Wörter wie „ernsthaft“ verstärken die Unterstellung.',
      ),
    ],
    test: [
      choice('„Wer will ernsthaft bestreiten, dass unsere Schulen mehr Geld brauchen?“', 'Welche Analyse trifft zu?', [
        'Die Rednerin will wissen, wer anderer Meinung ist.',
        '*Die Frage unterstellt Zustimmung und erspart eine Begründung.',
        'Die Rednerin gibt zu, dass ihre Position umstritten ist.',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Steuerlast oder Steuerbeitrag?',
    ref: [A, 3, 4],
    learn: [
      grammar(
        'Framing durch Wortwahl',
        'Wörter setzen einen Rahmen: „Steuerlast“ (Belastung) gegen „Steuerbeitrag“ (Beteiligung), „Reform“ (Verbesserung) gegen „Abbau“ (Verlust). Auch das Passiv rahmt: „2000 Stellen wurden gestrichen“ lässt den Verantwortlichen weg.',
      ),
    ],
    test: [
      match('Welche Bewertung steckt im Wort?', [
        ['Rentenreform', 'eine Verbesserung'],
        ['Rentenkürzung', 'ein Verlust'],
        ['Klimakrise', 'eine akute Notlage'],
        ['Sparpaket', 'eine vernünftige Maßnahme'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: '2000 Stellen wurden gestrichen',
    ref: [A, 3, 4],
    learn: [
      tip(
        'Wer handelt? Das Passiv als Rahmen',
        '„Die Regierung hat 2000 Stellen gestrichen“ nennt den Verantwortlichen. „2000 Stellen wurden gestrichen“ lässt ihn weg. „Der Stellenabbau betraf 2000 Beschäftigte“ macht aus der Handlung ein Ereignis. Passiv und Nominalisierung sind nicht per se manipulativ, aber sie können Verantwortung unsichtbar machen.',
      ),
    ],
    test: [
      choice('Eine Zeitung will neutral berichten.', 'Welche Formulierung ist am wenigsten wertend?', [
        'Die Regierung schnürt ein mutiges Sparpaket.',
        '*Die Regierung plant Kürzungen von 3 Milliarden Euro, vor allem im Sozialbereich.',
        'Die Regierung zerschlägt den Sozialstaat.',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Der Kommentar',
    ref: [A, 3, 5],
    learn: [
      tip(
        'Aufbau eines Kommentars',
        'Anlass („Seit gestern ist es beschlossen: …“), frühe These („Das ist ein Fehler.“), Argumente („Denn wer …“), fairer Einwand („Nun mag man einwenden, …“), Entkräftung („Doch das greift zu kurz.“), Pointe am Schluss.',
      ),
    ],
    test: [
      order('Bringen Sie den Kommentar in die richtige Reihenfolge.', [
        'Seit gestern ist es beschlossen: Das Ticket wird teurer.',
        'Das ist ein Fehler, und zwar ein teurer.',
        'Denn wer den Umstieg vom Auto will, darf ihn nicht verteuern.',
        'Nun mag man einwenden, das Geld fehle. Doch das greift zu kurz.',
        'Man kann nur hoffen, dass die Koalition das noch merkt.',
      ]),
    ],
  },

  // ------------------------------------------------ Kapitel 4: Literatur und Interpretation
  {
    kind: 'VOCAB',
    title: 'Texte analysieren',
    ref: [A, 4, 1],
    learn: [
      words('Analyse', [
        ['der Erzähler', 'narrator'],
        ['die Figur', 'character'],
        ['die Strophe', 'stanza'],
        ['der Vers', 'line of verse'],
        ['das lyrische Ich', 'lyrical I, speaker'],
        ['das Stilmittel', 'stylistic device'],
        ['das Leitmotiv', 'leitmotif'],
        ['die Deutung', 'interpretation'],
      ]),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Das Gedicht hat drei [Strophen] mit je vier [Versen]. Das [lyrische Ich] spricht eine abwesende Person an. Das Bild des Fensters kehrt immer wieder – ein [Leitmotiv].',
        ['Figur', 'Erzähler'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Inhalt, Thema, Wirkung',
    ref: [A, 4, 1],
    learn: [
      grammar(
        'Drei Ebenen',
        'Der Inhalt sagt, was passiert – im Präsens, ohne Wertung. Das Thema sagt, worum es eigentlich geht – abstrakt, in einem Satz. Die Deutung fragt, wie die Form das Thema trägt.',
      ),
    ],
    test: [
      choice('Eine alte Frau verkauft das Haus ihrer Familie und merkt beim Auszug, wie viele Erinnerungen daran hängen.', 'Wie lautet das Thema?', [
        'Eine alte Frau verkauft ihr Haus.',
        '*die Bindung an Orte als Träger von Erinnerung',
        'Die Geschichte ist traurig und schön.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Auktorial, personal, neutral',
    ref: [A, 4, 2],
    learn: [
      grammar(
        'Erzählverhalten',
        'Der auktoriale Erzähler weiß mehr als die Figuren, kommentiert und greift vor. Der personale Erzähler sieht die Welt durch die Augen einer Figur. Der neutrale Erzähler berichtet nur Äußeres, wie eine Kamera.',
      ),
    ],
    test: [
      match('Welches Erzählverhalten?', [
        ['Noch wusste niemand, dass dieser Winter der letzte der Mühle sein sollte.', 'auktorial'],
        ['Die Frau las den Brief und legte ihn ohne ein Wort auf den Tisch.', 'neutral'],
        ['Schon wieder zu spät. Warum konnte der Bus nicht einmal pünktlich sein?', 'personal'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Warum hatte sie ihm nur geglaubt?',
    ref: [A, 4, 2],
    learn: [
      grammar(
        'Die erlebte Rede',
        'Dritte Person und Präteritum wie im Erzählbericht, aber Wortwahl, Fragen und Ausrufe der Figur – ohne „dachte sie“.',
        {
          headers: ['Form', 'Beispiel'],
          rows: [
            ['innerer Monolog', 'Er kommt nicht mehr. Warum hab ich ihm bloß geglaubt?'],
            ['indirekte Rede', 'Sie dachte, er komme nicht mehr.'],
            ['erlebte Rede', 'Er kam nicht mehr. Warum hatte sie ihm nur geglaubt?'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        '„Ich schaffe das nicht. Wie soll ich das nur erklären?“ → erlebte Rede',
        'Sie [schaffte] das nicht. Wie [sollte] sie das nur erklären?',
        ['schaffe', 'soll'],
      ),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Es war, als hätt’ der Himmel …',
    ref: [A, 4, 3],
    learn: [
      grammar(
        'Stilmittel',
        'Personifikation: Unbelebtes wird menschlich. Vergleich: zwei Bereiche verbunden, oft mit „wie“ oder „als ob“. Metapher: ein Bild ersetzt den Begriff. Antithese: Gegensatz. Alliteration: gleicher Anlaut.',
        {
          headers: ['Stilmittel', 'Beispiel'],
          rows: [
            ['Vergleich', 'Es war, als hätt’ der Himmel / Die Erde still geküsst (Eichendorff)'],
            ['Antithese', 'Wo jetzund Städte stehn, wird eine Wiese sein (Gryphius)'],
            ['Metapher', 'Sein Blick ist vom Vorübergehn der Stäbe / so müd geworden (Rilke)'],
            ['Alliteration', 'Wer reitet so spät durch Nacht und Wind? (Goethe)'],
          ],
        },
      ),
    ],
    test: [
      match('Welches Stilmittel?', [
        ['Wo jetzund Städte stehn, wird eine Wiese sein', 'Antithese'],
        ['Es war, als hätt’ der Himmel / Die Erde still geküsst', 'Vergleich'],
        ['Die Stadt schläft noch.', 'Personifikation'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Vom Befund zur Deutung',
    ref: [A, 4, 3],
    learn: [
      tip(
        'Befund, Beleg, Funktion',
        'Eine Deutung nennt das Mittel und die Stelle, belegt mit Zitat und Versangabe und erklärt die Funktion: „In V. 2 verwendet Rilke eine Metapher: Der Blick ist ‚so müd geworden, dass er nichts mehr hält‘. Sie verdeutlicht, dass die Gefangenschaft die Wahrnehmung selbst zerstört hat.“',
      ),
    ],
    test: [
      choice('Gryphius schreibt im Dreißigjährigen Krieg: „Wo jetzund Städte stehn, wird eine Wiese sein“.', 'Was leistet die Antithese?', [
        'Sie beschreibt eine schöne Landschaft.',
        '*Sie zeigt die Vergänglichkeit von allem, was Menschen bauen.',
        'Sie kündigt eine Stadterneuerung an.',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Epochen',
    ref: [A, 4, 4],
    learn: [
      culture(
        'Epochen im Überblick',
        'Barock (Vergänglichkeit, Krieg), Aufklärung (Vernunft, Toleranz), Sturm und Drang (Gefühl, Auflehnung), Klassik (Harmonie, Humanität), Romantik (Sehnsucht, Nacht, Natur), Realismus (Alltag, Gesellschaft), Moderne (Großstadt, Entfremdung).',
      ),
    ],
    test: [
      order('Bringen Sie die Epochen in die zeitliche Reihenfolge.', [
        'Barock',
        'Aufklärung',
        'Klassik',
        'Romantik',
        'Realismus',
        'Moderne',
      ]),
      match('Welche Epoche?', [
        ['Ein Wanderer sehnt sich im Mondlicht nach einer fernen Heimat.', 'Romantik'],
        ['Ein Stück wirbt für religiöse Toleranz.', 'Aufklärung'],
        ['Ein Angestellter fühlt sich in der Großstadt fremd.', 'Moderne'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Eine Interpretation schreiben',
    ref: [A, 4, 5],
    learn: [
      grammar(
        'Aufbau',
        'Einleitung (Autor, Titel, Textsorte, Zeit, Thema) mit Deutungshypothese; Hauptteil mit Analyse von Aufbau, Sprache, Stilmitteln und Rückbezug auf die Hypothese; Schluss. Geschrieben wird im Präsens, zitiert mit Versangabe.',
      ),
    ],
    test: [
      choice('Welcher Satz passt in eine Interpretation?', 'Wählen Sie.', [
        'Mir gefällt das Gedicht, weil Tiere mir leidtun.',
        'Rilke lebte viele Jahre in Paris.',
        '*Die Wiederholung von „tausend“ (V. 3–4) hebt hervor, dass für den Panther nur noch die Stäbe existieren.',
      ]),
    ],
  },

  // ------------------------------------------------ Kapitel 5: Nachhaltigkeit
  {
    kind: 'VOCAB',
    title: 'Nachhaltigkeit',
    ref: [A, 5, 1],
    learn: [
      words('Nachhaltigkeit', [
        ['die Lebensgrundlage', 'basis of life'],
        ['die Ressource', 'resource'],
        ['die Emission', 'emission'],
        ['die Energiewende', 'energy transition'],
        ['der Zielkonflikt', 'trade-off'],
        ['tragfähig', 'viable'],
        ['Vorrang haben', 'to take priority'],
        ['verzichten (auf + Akk.)', 'to do without'],
      ]),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Billige Energie und Klimaschutz stehen oft in einem [Zielkonflikt]. Die Politik muss entscheiden, welches Ziel [Vorrang] hat – und worauf man [verzichten] kann.',
        ['Ressource', 'tragfähig'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Drei Säulen',
    ref: [A, 5, 1],
    learn: [
      text(
        'Das Modell der drei Säulen unterscheidet ökologische Nachhaltigkeit (die Lebensgrundlagen erhalten), ökonomische (eine dauerhaft tragfähige Wirtschaft) und soziale (Gerechtigkeit innerhalb und zwischen den Generationen). Es zeigt, dass Umweltschutz nicht gegen alles andere ausgespielt werden darf – verschweigt aber, dass die drei Ziele einander oft widersprechen.',
      ),
    ],
    test: [
      match('Welche Säule?', [
        ['Ein Moor wird nicht trockengelegt.', 'ökologisch'],
        ['Eine Stadt baut Schulden ab.', 'ökonomisch'],
        ['Regionen erhalten Ausgleich für den Kohleausstieg.', 'sozial'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Auf Kosten des Waldes',
    ref: [A, 5, 2],
    learn: [
      grammar(
        'Zielkonflikte darstellen',
        '„auf Kosten“ und „zulasten“ + Genitiv nennen, was geopfert wird. „je …, desto …“ zeigt eine gleitende Beziehung, „ohne dass“ eine ausbleibende Folge, „zwar …, aber …“ räumt ein.',
      ),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Der Park entsteht [auf Kosten] des Waldes. [Je] früher die Anwohner beteiligt werden, [desto] größer ist die Akzeptanz. Die Preise sanken, [ohne dass] der Tourismus litt.',
        ['wegen', 'umso'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'obwohl, falls, sodass',
    ref: [G, 7, 2],
    learn: [
      grammar(
        'Konnektoren im Nebensatz',
        'Grund (weil, da), Bedingung (wenn, falls, sofern), Gegensatz (obwohl, während), Folge (sodass). Im Nebensatz steht das konjugierte Verb am Ende. „Trotzdem“ und „deshalb“ sind dagegen Adverbien und bewirken Verbzweitstellung.',
        {
          headers: ['Konnektor', 'Beispiel'],
          rows: [
            ['obwohl', 'Obwohl der Park Strom liefert, gibt es Widerstand.'],
            ['sofern', 'Der Bau ist vertretbar, sofern die Gemeinde profitiert.'],
            ['sodass', 'Die Preise sanken, sodass mehr Menschen umstiegen.'],
            ['trotzdem (Adverb)', 'Der Park liefert Strom. Trotzdem gibt es Widerstand.'],
          ],
        },
      ),
    ],
    test: [
      choice('Wählen Sie den korrekten Satz.', 'Wählen Sie.', [
        'Obwohl der Park liefert Strom, gibt es Widerstand.',
        '*Obwohl der Park Strom liefert, gibt es Widerstand.',
        'Trotzdem der Park Strom liefert, gibt es Widerstand.',
      ]),
      cloze(
        'Ergänzen Sie.',
        'Der Bau ist vertretbar, [sofern] die Gemeinde profitiert. Die Preise sanken, [sodass] mehr Menschen umstiegen.',
        ['obwohl', 'trotzdem'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Sollte die Förderung auslaufen …',
    ref: [A, 5, 3],
    learn: [
      grammar(
        'Szenarien',
        '„wenn“ + Indikativ: realistisch. „wenn“ + Konjunktiv II: hypothetisch. „Angenommen, …“: Gedankenexperiment. „Sollte …“ am Satzanfang (Verberststellung): eine mögliche, oft unerwünschte Entwicklung.',
      ),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Wenn jede Gemeinde einen Windpark [hätte], [wäre] das Land unabhängiger. [Sollte] die Förderung auslaufen, stockt der Ausbau.',
        ['hat', 'ist', 'Falls'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Szenarien bewerten',
    ref: [A, 5, 3],
    learn: [
      tip(
        'Annahmen prüfen',
        'Ein Szenario ist keine Prognose. Wer es bewertet, fragt nach seinen Annahmen: „Das Szenario geht davon aus, dass …“, „Es setzt voraus, dass …“, „Unberücksichtigt bleibt, dass …“.',
      ),
    ],
    test: [
      match('Ordnen Sie zu.', [
        ['Das Szenario geht davon aus, dass …', 'nennt die Grundannahme'],
        ['Unberücksichtigt bleibt, dass …', 'kritisiert eine Lücke'],
        ['Es setzt voraus, dass …', 'nennt eine notwendige Bedingung'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Greenwashing erkennen',
    ref: [A, 5, 4],
    learn: [
      tip(
        'Kritische Fragen',
        'Hinter „klimaneutral“ steht oft der Kauf von Ausgleichszertifikaten. Warnsignale: vage Adjektive („umweltfreundlich“), Zahlen ohne Bezugsgröße („30 % weniger“), ferne Versprechen („bis 2050“). Fragen Sie: Im Vergleich wozu? Wer hat es geprüft?',
      ),
    ],
    test: [
      choice('Welche Aussage ist am besten überprüfbar?', 'Wählen Sie.', [
        'Unsere Verpackung ist besser für die Umwelt.',
        '*Die Flasche besteht zu 50 % aus recyceltem Kunststoff, geprüft von einem unabhängigen Institut.',
        'Wir werden bis 2050 klimaneutral.',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Kohärent argumentieren',
    ref: [A, 5, 5],
    learn: [
      grammar(
        'Mittel der Kohärenz',
        'Folgerung (folglich, somit), Einschränkung (allerdings, freilich), Steigerung (darüber hinaus, zudem), Rückverweis (dies, dieser Befund) und Bedingung (vorausgesetzt, dass …) verknüpfen Gedanken zu einer Argumentation.',
      ),
    ],
    test: [
      order('Bringen Sie die Sätze in eine kohärente Reihenfolge.', [
        'Der Ausbau der Windenergie ist unverzichtbar.',
        'Allerdings stößt er vor Ort oft auf Widerstand.',
        'Dieser Widerstand sinkt, wenn Gemeinden an den Erträgen beteiligt werden.',
        'Folglich sollte jede Genehmigung an eine solche Beteiligung geknüpft werden.',
      ]),
    ],
  },

  // ------------------------------------------------ Kapitel 6: Digitalisierung
  {
    kind: 'VOCAB',
    title: 'Digitalisierung',
    ref: [A, 6, 1],
    learn: [
      words('Digitalisierung', [
        ['die Automatisierung', 'automation'],
        ['die künstliche Intelligenz', 'artificial intelligence'],
        ['die Tätigkeit', 'task, activity'],
        ['die Weiterbildung', 'further training'],
        ['der Datenschutz', 'data protection'],
        ['der Algorithmus', 'algorithm'],
        ['ersetzen', 'to replace'],
        ['sich verschieben', 'to shift'],
      ]),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Automatisiert werden meist einzelne [Tätigkeiten], selten ganze Berufe. Kaum ein Beruf wird vollständig [ersetzt]. Umso wichtiger wird [Weiterbildung].',
        ['Algorithmus', 'Datenschutz'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Die Arbeit von morgen',
    ref: [A, 6, 1],
    learn: [
      text(
        'Vor rund zehn Jahren bescheinigten Studien fast der Hälfte aller Berufe ein hohes Automatisierungsrisiko. Inzwischen ist das Bild differenzierter: Automatisiert werden einzelne Tätigkeiten, nicht ganze Berufe. Ob durch KI mehr Stellen verloren gehen als entstehen, ist umstritten. Einig ist man sich, dass Weiterbildung wichtiger wird.',
      ),
    ],
    test: [
      choice('Lesen Sie den Text.', 'Was ist laut Text umstritten?', [
        'ob Weiterbildung wichtiger wird',
        '*ob mehr Stellen verloren gehen als entstehen',
        'ob einzelne Tätigkeiten automatisiert werden',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Das dürfte teuer werden',
    ref: [A, 6, 2],
    learn: [
      grammar(
        'Prognosen abstufen',
        'Die Modalverben haben hier subjektive Bedeutung: „muss“ = fast sicher, „dürfte“ = gut begründete Vermutung, „könnte“ = möglich. Das Futur mit „wohl“ drückt eine Vermutung aus. Für die Vergangenheit: Modalverb + Infinitiv Perfekt („Er dürfte es gewusst haben“).',
        {
          headers: ['Sicherheit', 'Beispiel'],
          rows: [
            ['sehr hoch', 'Die Preise werden steigen.'],
            ['hoch', 'Die Preise dürften steigen.'],
            ['mittel', 'Die Preise werden wohl steigen.'],
            ['gering', 'Die Preise könnten steigen.'],
          ],
        },
      ),
    ],
    test: [
      order('Von der sichersten zur unsichersten Aussage.', [
        'Die Nachfrage wird steigen.',
        'Die Nachfrage dürfte steigen.',
        'Die Nachfrage wird wohl steigen.',
        'Die Nachfrage könnte steigen.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Er dürfte es gewusst haben',
    ref: [A, 6, 2],
    learn: [
      tip(
        'Vermutungen über die Vergangenheit',
        'Modalverb im Präsens oder Konjunktiv II + Infinitiv Perfekt: „Sie muss den Zug verpasst haben.“ (fast sicher) – „Die Firma dürfte davon gewusst haben.“ (wahrscheinlich) – „Er könnte die Mail übersehen haben.“ (möglich).',
      ),
    ],
    test: [
      choice('„Die Firma dürfte von dem Datenleck gewusst haben.“', 'Was bedeutet das?', [
        'Die Firma hatte die Erlaubnis, davon zu wissen.',
        '*Es ist ziemlich wahrscheinlich, dass die Firma davon wusste.',
        'Es ist bewiesen, dass die Firma davon wusste.',
      ]),
      cloze(
        'Ergänzen Sie.',
        'Das Licht ist aus – sie [muss] schon gegangen sein. Er antwortet nicht, er [könnte] die Nachricht übersehen haben.',
        ['soll', 'will'],
      ),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Chancen und Risiken',
    ref: [A, 6, 3],
    learn: [
      tip(
        'Redemittel',
        'Chance: „eröffnet die Möglichkeit, …“, „bietet die Chance, …“. Risiko: „birgt die Gefahr, dass …“. Bedenken: „wirft die Frage auf, ob …“, „gibt zu bedenken, dass …“. Gewichtung: „Die Vorteile überwiegen.“ Urteil: „Unter dem Strich …“.',
      ),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Die Software [eröffnet] die Möglichkeit, schneller zu diagnostizieren. Sie [birgt] aber die Gefahr, dass Fehler unbemerkt bleiben. Das [wirft] die Frage auf, wer haftet.',
        ['überwiegt', 'hat'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Eine Software liest Röntgenbilder',
    ref: [A, 6, 3],
    learn: [
      text(
        'Eine Software erkannte Lungenentzündungen ebenso zuverlässig wie erfahrene Radiologen, in einem Bruchteil der Zeit. Befürworter sehen eine Chance, Fachkräfte zu entlasten. Skeptiker geben zu bedenken, die Software sei nur mit Bildern aus wenigen Kliniken trainiert worden. Zudem sei unklar, wer hafte, wenn ein Befund falsch sei.',
      ),
    ],
    test: [
      match('Chance oder Risiko?', [
        ['kürzere Wartezeit auf einen Befund', 'Chance: Schnelligkeit'],
        ['Training mit Bildern aus wenigen Kliniken', 'Risiko: begrenzte Übertragbarkeit'],
        ['mehr Zeit für schwierige Fälle', 'Chance: Entlastung'],
        ['unklare Haftung', 'Risiko: rechtliche Unsicherheit'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Einen Vortrag halten',
    ref: [A, 6, 4],
    learn: [
      tip(
        'Redemittel für den Vortrag',
        'Einstieg („Stellen Sie sich vor, …“), Gliederung („Mein Vortrag gliedert sich in drei Teile.“), Überleitung („Damit komme ich zum zweiten Punkt.“), Grafik („Wie Sie hier sehen, …“), Zusammenfassung, Schluss („Vielen Dank für Ihre Aufmerksamkeit.“).',
      ),
    ],
    test: [
      order('Bringen Sie die Teile des Vortrags in die richtige Reihenfolge.', [
        'Stellen Sie sich vor, Ihr Röntgenbild wird nachts von einer Software ausgewertet.',
        'Mein Vortrag gliedert sich in drei Teile.',
        'Damit komme ich zum zweiten Punkt, den Chancen.',
        'Lassen Sie mich die wichtigsten Punkte zusammenfassen.',
        'Vielen Dank für Ihre Aufmerksamkeit.',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Fragen nach dem Vortrag',
    ref: [A, 6, 4],
    learn: [
      tip(
        'Souverän antworten',
        'Eine Wissenslücke offen zuzugeben, wirkt souveräner als Abwehr: „Das ist eine gute Frage, die ich nicht aus dem Stegreif beantworten kann. Ich reiche Ihnen die Zahlen gern nach.“ Bei unklaren Fragen hilft eine Rückfrage: „Habe ich Sie richtig verstanden, dass …?“',
      ),
    ],
    test: [
      choice('Sie können eine Frage nicht sicher beantworten.', 'Was sagen Sie?', [
        'Das ist eine dumme Frage.',
        '*Das kann ich nicht aus dem Stegreif beantworten, aber ich reiche Ihnen die Zahlen gern nach.',
        'Dazu sage ich nichts.',
      ]),
    ],
  },
]);
