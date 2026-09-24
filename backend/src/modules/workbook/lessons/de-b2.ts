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

/** Deutsch B2 – Intermediate, Kapitel 7 bis 12, dazu die Kapitel 10 bis 12 des Grammatikbuchs. */
export const DE_B2 = lessons('de-b2', [
  // ------------------------------------------------ Kapitel 7: Identität und Zugehörigkeit
  {
    kind: 'VOCAB',
    title: 'Herkunft und Zugehörigkeit',
    ref: [I, 7, 1],
    learn: [
      words('Identität', [
        ['die Herkunft', 'origin, background'],
        ['die Zugehörigkeit', 'belonging'],
        ['stammen (aus + Dat.)', 'to come from'],
        ['sich zwischen zwei Stühlen fühlen', 'to feel caught between two worlds'],
        ['sich zurechtfinden', 'to find one’s way, to cope'],
        ['die Wurzel', 'root'],
        ['die Mehrsprachigkeit', 'multilingualism'],
        ['selbstverständlich', 'natural, taken for granted'],
      ]),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Melikes Eltern [stammen] aus der Türkei. Als Kind hat sie sich oft [zwischen] zwei Stühlen gefühlt. Heute ist ihre [Mehrsprachigkeit] für sie [selbstverständlich].',
        ['Wurzel', 'fremd'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Was bedeutet Heimat?',
    ref: [I, 7, 1],
    learn: [
      text(
        'Melike, 29, Ärztin in Hannover: „Ich bin in Hannover geboren, meine Eltern stammen aus der Türkei. Als Kind habe ich mich oft zwischen zwei Stühlen gefühlt: In Deutschland war ich ‚die Türkin‘, in den Ferien in Izmir ‚die Deutsche‘. Heute sehe ich das anders. Ich muss mich nicht entscheiden. Heimat ist für mich kein Ort, sondern die Menschen, bei denen ich ich selbst sein kann.“',
      ),
    ],
    test: [
      choice('Lesen Sie den Text.', 'Wie hat Melike sich als Kind gefühlt?', [
        'überall zu Hause',
        '*an keinem Ort ganz zugehörig',
        'nur als Deutsche',
      ]),
      choice('Lesen Sie den Text.', 'Was ist Heimat für Melike heute?', [
        'die Stadt Hannover',
        'die Türkei',
        '*Menschen, bei denen sie sie selbst sein kann',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Aus Verben werden Nomen',
    ref: [I, 7, 2],
    learn: [
      grammar(
        'Nominalisierung',
        'Häufige Muster: Infinitiv als Nomen (das Lernen, immer neutral), Nomen auf -ung (die Entscheidung, immer feminin), Nomen ohne Endung (der Umzug, der Beginn), Nomen auf -e oder -t (die Hilfe, die Ankunft). Das Subjekt wird zum Genitiv oder Possessivartikel: Daniel zieht um → Daniels Umzug.',
        {
          headers: ['Verb', 'Nomen'],
          rows: [
            ['entscheiden', 'die Entscheidung'],
            ['umziehen', 'der Umzug'],
            ['ankommen', 'die Ankunft'],
            ['beginnen', 'der Beginn'],
            ['helfen', 'die Hilfe'],
          ],
        },
      ),
    ],
    test: [
      match('Verb und Nomen', [
        ['ankommen', 'die Ankunft'],
        ['umziehen', 'der Umzug'],
        ['entscheiden', 'die Entscheidung'],
        ['auswandern', 'die Auswanderung'],
        ['beginnen', 'der Beginn'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'weil sie krank war → wegen ihrer Krankheit',
    ref: [I, 7, 2],
    learn: [
      grammar(
        'Nebensatz → Präposition',
        'Im nominalen Stil wird aus dem Konnektor eine Präposition, aus dem Verb ein Nomen. wegen, trotz, während + Genitiv; bei, nach, vor, seit + Dativ.',
        {
          headers: ['verbal', 'nominal'],
          rows: [
            ['weil sie krank war', 'wegen ihrer Krankheit'],
            ['obwohl es regnete', 'trotz des Regens'],
            ['als er ankam', 'bei seiner Ankunft'],
            ['nachdem sie umgezogen war', 'nach ihrem Umzug'],
            ['bevor die Reise begann', 'vor Beginn der Reise'],
          ],
        },
      ),
    ],
    test: [
      match('Was bedeutet dasselbe?', [
        ['weil er so neugierig war', 'wegen seiner Neugier'],
        ['als er nach Leipzig zog', 'bei seinem Umzug nach Leipzig'],
        ['obwohl es regnete', 'trotz des Regens'],
        ['nachdem sie angekommen war', 'nach ihrer Ankunft'],
      ]),
      cloze(
        'Ergänzen Sie die Präposition.',
        '[Wegen] des Streiks fiel der Zug aus. [Bei] meiner Ankunft war es schon dunkel. [Trotz] der Kälte gingen wir spazieren.',
        ['Weil', 'Obwohl'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Ein Leben in drei Ländern',
    ref: [I, 7, 3],
    learn: [
      text(
        'Ana Petrović wurde 1968 in Sarajevo geboren. Nach dem Abitur begann sie ein Studium der Literaturwissenschaft, das sie jedoch wegen des Kriegs 1992 abbrechen musste. Gemeinsam mit ihrer Mutter floh sie nach Wien, wo sie zunächst als Putzhilfe arbeitete. In dieser Zeit schrieb sie abends ihre ersten Erzählungen – noch auf Bosnisch, „für die Schublade“, wie sie später sagte.',
      ),
      tip(
        'Eine Biografie zusammenfassen',
        'Sachlich, im Präsens, in eigenen Worten, ohne Meinung und ohne Zitate. Der nominale Stil hilft: „Nach ihrer Flucht nach Wien arbeitet sie als Putzhilfe.“',
      ),
    ],
    test: [
      order('Bringen Sie Anas Leben in die richtige Reihenfolge.', [
        'Geburt in Sarajevo',
        'Beginn des Studiums',
        'Abbruch des Studiums wegen des Kriegs',
        'Flucht nach Wien',
        'erste Erzählungen',
      ]),
      choice('Was bedeutet „für die Schublade“?', 'Wählen Sie.', [
        'für einen Verlag',
        '*nur für sich, nicht zum Veröffentlichen',
        'für die Schule',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Zwischen den Zeilen',
    ref: [I, 7, 4],
    learn: [
      text(
        'Neulich auf einer Party. Ein freundlicher Herr fragt mich, woher ich komme. „Aus Bochum“, sage ich. Er lächelt. „Nein, ich meine: ursprünglich.“ Ich erkläre, dass ich im Bochumer St.-Josef-Hospital geboren bin, was ursprünglicher kaum geht. Er lacht, ein bisschen verlegen. „Na ja, aber Ihre Eltern …?“',
      ),
      tip(
        'Was nicht dasteht',
        'Achten Sie auf Ironie (das Gegenteil von dem, was gemeint ist), rhetorische Fragen und Details, die scheinbar nebenbei erwähnt werden. Fragen Sie: Warum erzählt die Autorin genau das?',
      ),
    ],
    test: [
      choice('Lesen Sie den Text.', '„…, was ursprünglicher kaum geht.“ Was ist das?', [
        'eine Vermutung',
        '*Ironie',
        'eine Frage',
      ]),
      choice('Was kritisiert die Autorin indirekt?', 'Wählen Sie.', [
        '*dass man sie wegen ihres Aussehens nicht als Deutsche sieht',
        'dass die Party langweilig ist',
        'dass der Mann unfreundlich ist',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Ich gebe es ihm',
    ref: [G, 10, 1],
    learn: [
      grammar(
        'Zwei Objekte: Wer steht vorn?',
        'Zwei Nomen: Dativ vor Akkusativ. Ein Pronomen und ein Nomen: das Pronomen zuerst. Zwei Pronomen: Akkusativ vor Dativ. Merksatz: Kurzes vor Langem – bei zwei Pronomen dreht sich die Reihenfolge um.',
        {
          headers: ['Objekte', 'Beispiel'],
          rows: [
            ['Nomen + Nomen', 'Sie schenkt ihrem Bruder ein Buch.'],
            ['Pronomen + Nomen', 'Sie schenkt es ihrem Bruder.'],
            ['Nomen + Pronomen', 'Sie schenkt ihm ein Buch.'],
            ['Pronomen + Pronomen', 'Sie schenkt es ihm.'],
          ],
        },
      ),
    ],
    test: [
      order('Ersetzen Sie beide Objekte durch Pronomen: „Ich gebe dem Kind den Ball.“', [
        'Ich',
        'gebe',
        'ihn',
        'ihm',
        '.',
      ]),
      choice('Welcher Satz ist richtig?', 'Wählen Sie.', [
        'Ich zeige den Gästen sie.',
        '*Ich zeige sie den Gästen.',
        'Ich zeige ihnen sie.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Ist das deiner?',
    ref: [G, 10, 2],
    learn: [
      grammar(
        'Das Possessivpronomen',
        'Steht es allein, bekommt es die Endung des bestimmten Artikels: der → meiner, das → meins, die → meine. Anders als beim Artikel steht die Endung auch im Nominativ maskulin und neutral.',
        {
          headers: ['', 'maskulin', 'neutral', 'feminin', 'Plural'],
          rows: [
            ['Nom.', 'meiner', 'meins', 'meine', 'meine'],
            ['Akk.', 'meinen', 'meins', 'meine', 'meine'],
            ['Dat.', 'meinem', 'meinem', 'meiner', 'meinen'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Ist das dein Schlüssel? – Ja, das ist [meiner]. Ist das dein Handy? – Nein, das ist nicht [meins]. Sind das eure Jacken? – Ja, das sind [unsere].',
        ['mein', 'meine'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'einer, keiner, welche',
    ref: [G, 10, 2],
    learn: [
      grammar(
        'Nomen ersetzen',
        '„einer“ und „keiner“ ersetzen ein Nomen mit unbestimmtem Artikel: Brauchst du einen Stift? – Nein, ich habe schon einen. Gibt es hier ein Café? – Ja, da vorn ist eins. Im Plural von „einer“ steht „welche“: Ich brauche Eier. – Im Kühlschrank sind noch welche.',
      ),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Hast du einen Regenschirm? – Nein, ich habe [keinen]. Gibt es hier eine Apotheke? – Ja, dort ist [eine]. Haben wir noch Tomaten? – Ja, es sind noch [welche] da.',
        ['keine', 'einen'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Ich wasche mir die Hände',
    ref: [G, 10, 3],
    learn: [
      grammar(
        'Reflexivpronomen: Akkusativ oder Dativ?',
        'Normalerweise steht es im Akkusativ: Ich ziehe mich an. Gibt es schon ein Akkusativobjekt, rückt es in den Dativ: Ich ziehe mir eine Jacke an. Sichtbar wird das nur bei „ich“ und „du“.',
        {
          headers: ['', 'Akkusativ', 'Dativ'],
          rows: [
            ['ich', 'Ich wasche mich.', 'Ich wasche mir die Hände.'],
            ['du', 'Du kämmst dich.', 'Du kämmst dir die Haare.'],
            ['er', 'Er rasiert sich.', 'Er rasiert sich den Bart.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'mich oder mir? dich oder dir?',
        'Ich putze [mir] die Zähne. Dann ziehe ich [mich] an. Hast du [dir] die Hände gewaschen? Beeil [dich]!',
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'sich oder einander?',
    ref: [G, 10, 3],
    learn: [
      tip(
        'Gegenseitig',
        'Bei mehreren Personen kann „sich“ auch „gegenseitig“ bedeuten: Die beiden kennen sich seit Jahren. Mit Präposition steht „einander“, zusammengeschrieben: miteinander, aneinander, voneinander.',
      ),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Die Nachbarn helfen [einander]. Wir reden oft [miteinander]. Die Geschwister denken oft [aneinander].',
        ['sich', 'voneinander'],
      ),
    ],
  },

  // ------------------------------------------------ Kapitel 8: Wissenschaft und Technik
  {
    kind: 'VOCAB',
    title: 'Forschung',
    ref: [I, 8, 1],
    learn: [
      words('Wortschatz', [
        ['Forschende (Pl.)', 'researchers'],
        ['nachweisen', 'to detect, to prove'],
        ['die Quelle', 'source'],
        ['der Abrieb', 'abrasion, wear particles'],
        ['auslösen', 'to trigger, to cause'],
        ['darauf hindeuten, dass …', 'to indicate that …'],
        ['der Stand der Forschung', 'state of research'],
      ]),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        '[Forschende] haben Mikroplastik im Meer [nachgewiesen]. Eine wichtige [Quelle] ist der [Abrieb] von Reifen. Erste Versuche [deuten] darauf hin, dass es Entzündungen [auslösen] kann.',
        ['Stand'],
      ),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Wie sicher ist das?',
    ref: [I, 8, 1],
    learn: [
      tip(
        'Gewissheit und Vermutung',
        'Wissenschaftliche Texte unterscheiden genau, wie sicher eine Aussage ist. Achten Sie auf diese Signale.',
      ),
      grammar('Redemittel', 'Vom Sicheren zum Unklaren.', {
        headers: ['Grad', 'Redemittel'],
        rows: [
          ['gesichert', 'Es ist erwiesen, dass … / Man hat nachgewiesen, dass …'],
          ['wahrscheinlich', 'Vieles spricht dafür, dass … / Die Daten legen nahe, dass …'],
          ['möglich', 'Versuche deuten darauf hin, dass … / Es ist denkbar, dass …'],
          ['unklar', 'Es ist noch ungeklärt, ob …'],
        ],
      }),
    ],
    test: [
      match('Wie sicher ist die Aussage?', [
        ['Es ist erwiesen, dass …', 'gesichert'],
        ['Die Daten legen nahe, dass …', 'wahrscheinlich'],
        ['Es ist denkbar, dass …', 'möglich'],
        ['Es ist noch ungeklärt, ob …', 'unklar'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Mikroplastik',
    ref: [I, 8, 1],
    learn: [
      text(
        'Als Mikroplastik bezeichnen Forschende Plastikteilchen, die kleiner als fünf Millimeter sind. Manche entstehen, wenn größere Plastikteile in der Umwelt zerfallen, etwa eine im Meer treibende Flasche. Andere werden absichtlich so klein hergestellt, zum Beispiel für Kosmetik. Eine der wichtigsten Quellen ist jedoch überraschend alltäglich: der Abrieb von Autoreifen. Ob die im Alltag aufgenommenen Mengen der Gesundheit schaden, ist noch nicht sicher geklärt.',
      ),
    ],
    test: [
      choice('Lesen Sie den Text.', 'Ab welcher Größe spricht man von Mikroplastik?', [
        '*kleiner als fünf Millimeter',
        'kleiner als ein Mikrometer',
        'kleiner als fünf Zentimeter',
      ]),
      choice('Lesen Sie den Text.', 'Was ist laut Text eine überraschend wichtige Quelle?', [
        'Kosmetik',
        '*Reifenabrieb',
        'Plastikflaschen',
      ]),
      choice('Lesen Sie den Text.', 'Schadet Mikroplastik der Gesundheit?', [
        'Ja, das ist erwiesen.',
        'Nein, auf keinen Fall.',
        '*Das ist noch nicht sicher geklärt.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'die im Meer treibende Flasche',
    ref: [I, 8, 2],
    learn: [
      grammar(
        'Partizip I als Attribut',
        'Sachtexte packen einen Relativsatz gern vor das Nomen. Das Partizip I (Infinitiv + d: treibend, wachsend) beschreibt etwas Aktives und Gleichzeitiges. Es wird wie ein Adjektiv dekliniert; alles, was dazugehört, steht links davon.',
        {
          headers: ['Partizipialattribut', 'Relativsatz'],
          rows: [
            ['die im Meer treibende Flasche', 'die Flasche, die im Meer treibt'],
            ['die schnell wachsende Stadt', 'die Stadt, die schnell wächst'],
          ],
        },
      ),
    ],
    test: [
      match('Was bedeutet dasselbe?', [
        ['die steigenden Preise', 'die Preise, die steigen'],
        ['ein laut bellender Hund', 'ein Hund, der laut bellt'],
        ['die im Park spielenden Kinder', 'die Kinder, die im Park spielen'],
      ]),
      choice('Wählen Sie.', 'Die Zahl der … Menschen nimmt zu.', [
        'arbeitend',
        '*arbeitenden',
        'gearbeiteten',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'das im Labor getestete Material',
    ref: [I, 8, 2],
    learn: [
      grammar(
        'Partizip II als Attribut',
        'Das Partizip II beschreibt meist etwas Passives oder Abgeschlossenes. Der Relativsatz steht im Passiv oder im Perfekt.',
        {
          headers: ['Partizipialattribut', 'Relativsatz'],
          rows: [
            ['das im Labor getestete Material', 'das Material, das im Labor getestet wurde'],
            [
              'der vor Kurzem veröffentlichte Bericht',
              'der Bericht, der vor Kurzem veröffentlicht wurde',
            ],
            ['die gestern angekommenen Forscher', 'die Forscher, die gestern angekommen sind'],
          ],
        },
      ),
      tip(
        'Lange Attribute lesen',
        'Vom Artikel direkt zum Nomen springen („die … Mengen“), dann das Partizip davor suchen („aufgenommenen“), zuletzt die Mitte lesen („im Alltag“).',
      ),
    ],
    test: [
      match('Was bedeutet dasselbe?', [
        ['das reparierte Fahrrad', 'das Fahrrad, das repariert wurde'],
        ['die gestern veröffentlichte Studie', 'die Studie, die gestern veröffentlicht wurde'],
        ['die neu gebaute Brücke', 'die Brücke, die neu gebaut wurde'],
      ]),
      choice('Partizip I oder II?', 'Das Problem wurde gelöst. → das … Problem', [
        'lösende',
        '*gelöste',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Was die Zahlen zeigen',
    ref: [I, 8, 3],
    learn: [
      text(
        'Eine Umfrage unter 2 000 Erwachsenen: „Wie oft nutzen Sie Künstliche Intelligenz?“ Antwort „mindestens einmal pro Woche“: 18–29 Jahre: 2021: 18 % – 2023: 41 % – 2025: 68 %. 30–49 Jahre: 2021: 11 % – 2023: 29 % – 2025: 52 %. 50–64 Jahre: 2021: 5 % – 2023: 14 % – 2025: 31 %.',
      ),
    ],
    test: [
      choice('Lesen Sie die Zahlen.', 'Welche Aussage stimmt?', [
        '*In allen Gruppen ist die Nutzung gestiegen.',
        'Bei den 50- bis 64-Jährigen ist sie gesunken.',
        'Die Jüngsten nutzen KI am wenigsten.',
      ]),
      choice(
        'Lesen Sie die Zahlen.',
        'Wie hat sich der Anteil bei den 30- bis 49-Jährigen von 2021 bis 2025 entwickelt?',
        ['Er hat sich verdoppelt.', '*Er hat sich fast verfünffacht.', 'Er ist gleich geblieben.'],
      ),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Eine Grafik beschreiben',
    ref: [I, 8, 3],
    learn: [
      tip(
        'Beschreibung, dann Deutung',
        'Zuerst Thema, Quelle und Zeitraum, dann die wichtigste Entwicklung, danach Details. Erst am Ende die Auswertung – Beschreibung und Deutung klar trennen.',
      ),
    ],
    test: [
      match('Wozu dient der Satz?', [
        ['Die Grafik zeigt die Nutzung von KI.', 'Einleitung'],
        ['Der Anteil ist von 18 auf 68 Prozent gestiegen.', 'Entwicklung'],
        ['Im Vergleich zu den Älteren …', 'Vergleich'],
        ['Das lässt sich damit erklären, dass …', 'Auswertung'],
      ]),
      cloze(
        'Ergänzen Sie.',
        'Der Anteil ist von 5 [auf] 31 Prozent [gestiegen]. Er hat sich damit mehr als [verfünffacht].',
        ['gesunken', 'um'],
      ),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Einfach erklärt',
    ref: [I, 8, 4],
    learn: [
      dialogue('Aus einem Science Slam', [
        'Jan Okafor: Wer von Ihnen hat einen Kühlschrank? … Dann verstehen Sie schon das Prinzip einer Wärmepumpe.',
        'Jan Okafor: Zunächst die Grundidee: Ein Kühlschrank holt Wärme aus seinem Inneren. Eine Wärmepumpe macht dasselbe – nur umgekehrt.',
        'Jan Okafor: Jetzt fragen Sie sich vielleicht: Wie soll das im Winter gehen?',
        'Jan Okafor: Das bedeutet konkret: Aus einer Kilowattstunde Strom macht die Pumpe drei bis vier Kilowattstunden Wärme.',
      ]),
    ],
    test: [
      match('Welcher Schritt einer Erklärung?', [
        ['Das funktioniert ähnlich wie ein Kühlschrank.', 'Vergleich'],
        ['Zunächst … / Im nächsten Schritt …', 'gliedern'],
        ['Jetzt fragen Sie sich vielleicht, …', 'Frage vorwegnehmen'],
        ['Mit anderen Worten: …', 'umformulieren'],
        ['Kurz gesagt: …', 'zusammenfassen'],
      ]),
    ],
  },

  // ------------------------------------------------ Kapitel 9: Wirtschaft und Konsum
  {
    kind: 'VOCAB',
    title: 'Konsum',
    ref: [I, 9, 1],
    learn: [
      words('Wirtschaft und Konsum', [
        ['der Verbraucher', 'consumer'],
        ['die Nachfrage', 'demand'],
        ['das Angebot', 'supply, offer'],
        ['der Lohn', 'wage'],
        ['nachhaltig', 'sustainable'],
        ['das Wachstum', 'growth'],
        ['sich etwas leisten können', 'to be able to afford sth.'],
      ]),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Wenn die [Nachfrage] steigt, steigen oft die Preise. Viele [Verbraucher] können sich faire Mode nicht [leisten]. Dabei wäre [nachhaltiger] Konsum wichtig.',
        ['Wachstum', 'Lohn'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Fast Fashion',
    ref: [I, 9, 1],
    learn: [
      text(
        'Im Durchschnitt kauft jeder Mensch in Deutschland rund 60 neue Kleidungsstücke pro Jahr – und trägt viele davon nur ein paar Mal. Möglich machen das Fast-Fashion-Ketten, die fast jede Woche neue Kollektionen anbieten, zu Preisen, bei denen ein T-Shirt weniger kostet als ein Mittagessen. Der niedrige Preis hat jedoch Folgen, die an der Kasse nicht auftauchen: niedrige Löhne in den Produktionsländern und viel Wasser- und Energieverbrauch.',
      ),
    ],
    test: [
      choice(
        'Lesen Sie den Text.',
        'Wie viele Kleidungsstücke kauft ein Mensch pro Jahr im Durchschnitt?',
        ['etwa 16', '*etwa 60', 'etwa 600'],
      ),
      choice('Lesen Sie den Text.', 'Was sind „Folgen, die an der Kasse nicht auftauchen“?', [
        'Rabatte',
        '*Kosten für Menschen und Umwelt',
        'hohe Preise',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'zumal, sofern, indem',
    ref: [I, 9, 2],
    learn: [
      grammar(
        'Präzise Konnektoren (Nebensatz)',
        'Alle leiten einen Nebensatz ein – das Verb steht am Ende.',
        {
          headers: ['Konnektor', 'Bedeutung', 'Beispiel'],
          rows: [
            ['zumal', 'zusätzlicher Grund', 'Ich kaufe gebraucht, zumal es billiger ist.'],
            ['sofern', 'Bedingung (nur wenn)', 'Secondhand hilft, sofern man weniger kauft.'],
            ['indem', 'Mittel (wie?)', 'Man spart Geld, indem man Kleidung repariert.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'zumal, sofern oder indem?',
        'Man kann Müll vermeiden, [indem] man Dinge repariert. Ich komme gern mit, [sofern] ich rechtzeitig fertig bin. Wir nehmen den Zug, [zumal] er schneller ist.',
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'wohingegen, sodass',
    ref: [I, 9, 2],
    learn: [
      grammar(
        'Gegensatz und Folge (Nebensatz)',
        '„wohingegen“ (oder „während“) stellt zwei Dinge gegenüber: Fast Fashion ist billig, wohingegen faire Mode mehr kostet. „sodass“ nennt eine Folge: Die Preise sind gesunken, sodass mehr gekauft wird.',
      ),
    ],
    test: [
      match('Was passt?', [
        ['Die Jacke war im Angebot,', 'sodass ich gleich zwei gekauft habe.'],
        ['Mein Bruder kauft nur neu,', 'wohingegen ich fast alles gebraucht kaufe.'],
        ['Es hat stark geregnet,', 'sodass das Fest abgesagt wurde.'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'folglich, dennoch, hingegen, zudem',
    ref: [I, 9, 2],
    learn: [
      grammar(
        'Konnektoren mit Hauptsatz',
        'Diese Konnektoren sind Adverbien. Auf Position 1 folgt direkt das Verb.',
        {
          headers: ['Konnektor', 'Bedeutung', 'Beispiel'],
          rows: [
            ['folglich', 'Folge', 'Die Nachfrage steigt. Folglich steigen die Preise.'],
            ['dennoch', 'Gegengrund', 'Die Jacke war teuer. Dennoch hat er sie gekauft.'],
            ['hingegen', 'Gegensatz', 'Ältere hingegen kaufen meist neu.'],
            ['zudem', 'Ergänzung', 'Secondhand ist günstig. Zudem schont es Ressourcen.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Reparieren ist oft teuer. [Dennoch] lohnt es sich. Es spart Rohstoffe. [Zudem] entsteht weniger Müll. Die Ersatzteile fehlen, [folglich] werden Geräte weggeworfen.',
      ),
      choice('Welcher Satz ist richtig?', 'Wählen Sie.', [
        'Folglich die Preise steigen.',
        '*Folglich steigen die Preise.',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Ein Gegenargument entkräften',
    ref: [I, 9, 3],
    learn: [
      tip(
        'Ja, aber …',
        'Eine starke Argumentation nennt das Gegenargument, erkennt an, was daran richtig ist – und zeigt dann, warum es die eigene Position nicht widerlegt.',
      ),
      dialogue('Recht auf Reparatur', [
        'Herr Lindner: Man könnte allerdings einwenden, dass die Geräte dadurch teurer werden.',
        'Frau Aydın: Das mag sein. Allerdings hält ein reparierbares Gerät auch deutlich länger.',
      ]),
    ],
    test: [
      order('Bringen Sie die Argumentation in die Reihenfolge „Ja, aber …“.', [
        'Man könnte einwenden, dass Reparaturen teuer sind.',
        'Das ist zwar richtig,',
        'dabei wird aber übersehen, dass Geräte so länger halten.',
        'Gerade deshalb brauchen wir günstige Ersatzteile.',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Was steckt hinter den Zahlen?',
    ref: [I, 9, 4],
    learn: [
      text(
        'Umfrage: „Was ist Ihnen beim Kauf von Kleidung am wichtigsten?“ (1 500 Befragte, eine Antwort möglich) Preis: 38 % – Qualität: 27 % – Aussehen/Trend: 19 % – faire und umweltfreundliche Herstellung: 9 % – Marke: 7 %. Zusatzfrage: „Würden Sie für fair produzierte Kleidung mehr bezahlen?“ – Ja: 64 %.',
      ),
      tip(
        'Interpretieren, nicht nur ablesen',
        'Setzen Sie Zahlen in Beziehung und fragen Sie nach Widersprüchen: Sagen Menschen in Umfragen, was sie wirklich tun?',
      ),
    ],
    test: [
      choice('Lesen Sie die Umfrage.', 'Welcher Widerspruch fällt auf?', [
        '*64 % würden mehr zahlen, aber nur 9 % ist faire Herstellung am wichtigsten.',
        'Der Preis ist wichtiger als die Marke.',
        'Qualität ist wichtiger als Aussehen.',
      ]),
      match('Wozu dient der Satz?', [
        ['Vergleicht man … mit …, fällt auf, dass …', 'in Beziehung setzen'],
        ['Dem steht gegenüber, dass …', 'Widerspruch zeigen'],
        ['Die Zahlen sind mit Vorsicht zu betrachten, da …', 'einschränken'],
      ]),
    ],
  },

  // ------------------------------------------------ Kapitel 10: Recht und Ordnung
  {
    kind: 'VOCAB',
    title: 'Rechte und Pflichten',
    ref: [I, 10, 1],
    learn: [
      words('Recht und Wohnen', [
        ['der Vertrag', 'contract'],
        ['die Pflicht', 'duty, obligation'],
        ['kündigen', 'to give notice'],
        ['die Frist', 'deadline, notice period'],
        ['unverzüglich', 'without delay'],
        ['die Miete mindern', 'to reduce the rent'],
        ['unzumutbar', 'unreasonable, intolerable'],
      ]),
      text(
        'Die wichtigste Pflicht des Mieters ist es, die Miete pünktlich zu zahlen – in der Regel bis zum dritten Werktag des Monats. Schäden muss er unverzüglich melden.',
      ),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Der Mieter muss Schäden [unverzüglich] melden. Wenn die Heizung wochenlang nicht funktioniert, darf er die Miete [mindern]. Wer auszieht, muss die [Frist] von drei Monaten beachten und rechtzeitig [kündigen].',
        ['Vertrag', 'Pflicht'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Die Miete ist zu zahlen',
    ref: [I, 10, 2],
    learn: [
      grammar(
        'sein + zu + Infinitiv',
        'Diese Form ersetzt ein Passiv mit Modalverb. Sie kann „muss“ oder „kann“ bedeuten – in Verträgen und Regeln fast immer „muss“. Bei trennbaren Verben steht „zu“ in der Mitte: anzuzeigen, abzustellen.',
        {
          headers: ['Ersatzform', 'Bedeutung'],
          rows: [
            ['Die Miete ist pünktlich zu zahlen.', 'Die Miete muss pünktlich gezahlt werden.'],
            [
              'Schäden sind unverzüglich anzuzeigen.',
              'Schäden müssen unverzüglich angezeigt werden.',
            ],
            [
              'Fahrräder sind im Keller abzustellen.',
              'Fahrräder müssen im Keller abgestellt werden.',
            ],
          ],
        },
      ),
    ],
    test: [
      match('Was bedeutet dasselbe?', [
        [
          'Das Formular ist bis Montag abzugeben.',
          'Das Formular muss bis Montag abgegeben werden.',
        ],
        [
          'Das Treppenhaus ist wöchentlich zu reinigen.',
          'Das Treppenhaus muss wöchentlich gereinigt werden.',
        ],
        ['Die Tür ist nachts abzuschließen.', 'Die Tür muss nachts abgeschlossen werden.'],
      ]),
      choice('Wählen Sie.', 'Der Müll ist bis 7 Uhr …', [
        'rauszustellen zu',
        '*rauszustellen',
        'zu rausstellen',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'lässt sich kündigen, abschließbar',
    ref: [I, 10, 2],
    learn: [
      grammar(
        'Weitere Passiversatzformen',
        '„sich lassen“ + Infinitiv = kann … werden: Der Vertrag lässt sich kündigen. Adjektive auf -bar / -lich = kann … werden: Der Raum ist abschließbar. Mit „un-“ verneint: unbezahlbar, unverständlich, unzumutbar.',
      ),
    ],
    test: [
      match('Was bedeutet dasselbe?', [
        ['Das Wasser ist trinkbar.', 'Das Wasser kann getrunken werden.'],
        ['Das Problem lässt sich lösen.', 'Das Problem kann gelöst werden.'],
        ['Die Schrift ist unlesbar.', 'Die Schrift kann nicht gelesen werden.'],
      ]),
      cloze(
        'Ergänzen Sie.',
        'Die Wohnung ist so teuer, sie ist fast [unbezahlbar]. Das Fenster [lässt] sich nicht öffnen.',
        ['bezahlbar', 'ist'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Post vom Amt',
    ref: [I, 10, 3],
    learn: [
      text(
        'Sehr geehrte Frau Nowak, Ihnen wird zur Last gelegt, am 14.05. um 22:40 Uhr in der Gartenstraße 12 durch lautstarke Musik die Nachtruhe gestört zu haben. Sie haben die Möglichkeit, sich zu dem Vorwurf zu äußern. Ihre Stellungnahme ist innerhalb von zwei Wochen nach Zugang dieses Schreibens einzureichen. Machen Sie von dieser Möglichkeit keinen Gebrauch, wird nach Aktenlage entschieden.',
      ),
      tip(
        'Amtsdeutsch entschlüsseln',
        'Zuerst den Betreff lesen, dann nach Fristen, Pflichten („ist … zu …“) und Folgen („Sollten Sie …, wird …“) suchen.',
      ),
    ],
    test: [
      match('Was heißt das einfach?', [
        ['Ihnen wird zur Last gelegt, …', 'Man wirft Ihnen vor, …'],
        ['nach Zugang dieses Schreibens', 'nachdem Sie den Brief bekommen haben'],
        ['von einer Möglichkeit Gebrauch machen', 'eine Möglichkeit nutzen'],
        ['nach Aktenlage entscheiden', 'mit den vorhandenen Informationen entscheiden'],
      ]),
      choice('Lesen Sie den Brief.', 'Was passiert, wenn Frau Nowak nicht antwortet?', [
        'Nichts.',
        '*Das Amt entscheidet ohne ihre Stellungnahme.',
        'Sie muss persönlich kommen.',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Hiermit beschwere ich mich',
    ref: [I, 10, 4],
    learn: [
      tip(
        'Sachlich, genau, klar',
        'Eine gute Beschwerde beschreibt das Problem mit Daten, nennt, was man schon unternommen hat, stellt eine Forderung mit Frist und kündigt höflich mögliche Folgen an. Beleidigungen schwächen jede Beschwerde.',
      ),
    ],
    test: [
      order('Bringen Sie die Teile der Beschwerde in die richtige Reihenfolge.', [
        'Hiermit möchte ich mich über den Ausfall der Heizung beschweren.',
        'Seit dem 9. Januar funktionieren die Heizkörper nicht.',
        'Am 10. Januar habe ich den Schaden telefonisch gemeldet.',
        'Ich fordere Sie auf, die Heizung bis zum 27. Januar zu reparieren.',
        'Sollte dies nicht geschehen, behalte ich mir vor, die Miete zu mindern.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Die Brücke ist repariert worden',
    ref: [G, 11, 1],
    learn: [
      grammar(
        'Das Passiv in allen Zeitformen',
        'Im Perfekt steht „sein“, und von „werden“ bleibt „worden“ (ohne ge-). „geworden“ gibt es nur, wenn „werden“ Vollverb ist: Er ist Arzt geworden.',
        {
          headers: ['Zeitform', 'Passiv'],
          rows: [
            ['Präsens', 'Die Brücke wird repariert.'],
            ['Präteritum', 'Die Brücke wurde repariert.'],
            ['Perfekt', 'Die Brücke ist repariert worden.'],
            ['Plusquamperfekt', 'Die Brücke war repariert worden.'],
            ['mit Modalverb', 'Die Brücke muss repariert werden.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Der Termin ist verschoben [worden]. Meine Schwester ist Ärztin [geworden]. Die Straße [wurde] letztes Jahr gebaut.',
        ['geworden', 'wird'],
      ),
      order('Bilden Sie den Nebensatz.', [
        'Wir fahren einen Umweg,',
        'weil',
        'die Brücke',
        'repariert',
        'werden',
        'muss',
        '.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'von oder durch?',
    ref: [G, 11, 2],
    learn: [
      grammar(
        'Wer oder was?',
        '„von“ + Dativ nennt die handelnde Person oder den Urheber: Das Bild wurde von Picasso gemalt. „durch“ + Akkusativ nennt ein Mittel oder eine Ursache: Die Stadt wurde durch ein Erdbeben zerstört. Aus „man“ wird im Passiv nichts – es fällt weg.',
      ),
    ],
    test: [
      cloze(
        'von oder durch?',
        'Das Gebäude wurde [durch] ein Feuer zerstört. Der Patient ist [von] der Ärztin operiert worden. Die Straße wurde [durch] den Regen überflutet.',
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Den Opfern wird geholfen',
    ref: [G, 11, 2],
    learn: [
      grammar(
        'Passiv ohne Subjekt',
        'Nur ein Akkusativobjekt kann Subjekt werden. Ein Dativobjekt bleibt im Dativ, das Verb steht in der 3. Person Singular: Man hilft den Opfern. → Den Opfern wird geholfen. Ganz ohne Objekt: Hier wird nicht geraucht. Steht nichts auf Position 1, füllt „es“ den Platz: Es wird getanzt.',
      ),
    ],
    test: [
      choice('Welcher Satz ist richtig?', 'Wählen Sie.', [
        'Die Kinder werden geholfen.',
        '*Den Kindern wird geholfen.',
        'Den Kindern werden geholfen.',
      ]),
      order('Bilden Sie einen Passivsatz mit „es“.', ['Es', 'wird', 'viel', 'gelacht', '.']),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'wird geschlossen – ist geschlossen',
    ref: [G, 11, 3],
    learn: [
      grammar(
        'Vorgang oder Zustand?',
        'Das Vorgangspassiv (werden) beschreibt, was gerade passiert. Das Zustandspassiv (sein + Partizip II) beschreibt das Ergebnis. Test: Passt „schon“ oder „noch“, ist meist der Zustand gemeint.',
        {
          headers: ['', 'Vorgang (werden)', 'Zustand (sein)'],
          rows: [
            ['Präsens', 'Der Tisch wird gedeckt.', 'Der Tisch ist gedeckt.'],
            ['Präteritum', 'Der Tisch wurde gedeckt.', 'Der Tisch war gedeckt.'],
            ['Bedeutung', 'Jemand deckt ihn gerade.', 'Alles steht schon darauf.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'wird oder ist?',
        'Komm, das Essen [ist] schon fertig gekocht. Die Tür [wird] jeden Abend um 22 Uhr abgeschlossen. Keine Sorge, das Fenster [ist] schon repariert.',
      ),
    ],
  },

  // ------------------------------------------------ Kapitel 11: Kunst und Ästhetik
  {
    kind: 'VOCAB',
    title: 'Ein Bild beschreiben',
    ref: [I, 11, 1],
    learn: [
      words('Bildbeschreibung', [
        ['der Vordergrund', 'foreground'],
        ['der Hintergrund', 'background'],
        ['der Bildrand', 'edge of the picture'],
        ['der Betrachter', 'viewer'],
        ['gedämpft', 'muted, subdued'],
        ['sich abheben (von + Dat.)', 'to stand out (from)'],
        ['wirken', 'to seem, to have an effect'],
      ]),
      tip(
        'Ordnung',
        'Zuerst die Basisdaten (Titel, Künstlerin, Jahr, Technik), dann systematisch vom Vordergrund zum Hintergrund, zum Schluss Farben und Licht – im Präsens und sachlich. Die Deutung folgt erst danach.',
      ),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Im [Vordergrund] steht eine junge Frau. Ihr grüner Mantel [hebt] sich deutlich vom grauen Bahnsteig ab. Im [Hintergrund] verschwimmt ein Zug. Die Farben sind [gedämpft], das Bild [wirkt] ruhig.',
        ['Bildrand', 'Betrachter'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Sie dürfte auf jemanden warten',
    ref: [I, 11, 2],
    learn: [
      grammar(
        'Modalverben der Vermutung',
        'Modalverben zeigen auch, wie sicher sich der Sprecher ist.',
        {
          headers: ['Sicherheit', 'Modalverb', 'Beispiel'],
          rows: [
            ['fast sicher', 'müssen', 'Sie muss traurig sein.'],
            ['wahrscheinlich', 'dürfte', 'Sie dürfte auf jemanden warten.'],
            ['möglich', 'können / könnte', 'Sie könnte ihren Zug verpasst haben.'],
            ['fast sicher nicht', 'nicht können', 'Glücklich kann sie nicht sein.'],
          ],
        },
      ),
      tip(
        'Ohne Modalverb',
        'bestimmt (fast sicher), vermutlich (wahrscheinlich), vielleicht (möglich).',
      ),
    ],
    test: [
      match('Was bedeutet ungefähr dasselbe?', [
        ['Er muss krank sein.', 'Er ist bestimmt krank.'],
        ['Er dürfte krank sein.', 'Er ist vermutlich krank.'],
        ['Er könnte krank sein.', 'Er ist vielleicht krank.'],
        ['Er kann nicht krank sein.', 'Er ist sicher nicht krank.'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Sie muss jemanden verabschiedet haben',
    ref: [I, 11, 2],
    learn: [
      grammar(
        'Vermutungen über die Vergangenheit',
        'Für eine Vermutung über die Vergangenheit steht das Modalverb mit dem Infinitiv Perfekt: Partizip II + haben/sein. Das Bild dürfte in den 50er-Jahren entstanden sein. Sie muss jemanden verabschiedet haben.',
      ),
    ],
    test: [
      order('Bilden Sie eine Vermutung über die Vergangenheit.', [
        'Sie',
        'könnte',
        'ihren Zug',
        'verpasst',
        'haben',
        '.',
      ]),
      choice('Wählen Sie.', 'Das Licht ist aus. Die Nachbarn … schon ins Bett gegangen sein.', [
        '*dürften',
        'dürfen',
        'haben',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Geschmack begründen',
    ref: [I, 11, 3],
    learn: [
      tip(
        'Mehr als „gefällt mir“',
        'Sagen Sie, was genau Sie anspricht oder stört – und woran das liegt: an der Wirkung, der Idee, der Technik. Sie können auch einräumen, was Sie schätzen, obwohl es Ihnen nicht gefällt.',
      ),
      dialogue('Vor der Installation', [
        'Oskar: Das hätte ich auch gekonnt. Was soll daran Kunst sein?',
        'Hanna: Für mich zählt nicht, wie schwer etwas herzustellen ist, sondern was es mit mir macht.',
        'Oskar: Na gut, ich gebe zu, der Raum hat eine gewisse Atmosphäre.',
      ]),
    ],
    test: [
      match('Was drückt der Satz aus?', [
        ['Mich spricht das total an.', 'positiv'],
        ['Ich finde es ziemlich beliebig.', 'negativ'],
        ['Das liegt vor allem daran, dass …', 'begründen'],
        ['Ich gebe zu, dass …', 'einräumen'],
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Ein Fest für die Augen',
    ref: [I, 11, 4],
    learn: [
      tip(
        'Metapher, Vergleich, Redewendung',
        'Ein Vergleich nutzt „wie“ oder „als ob“: trocken wie Wüstensand. Eine Metapher lässt das „wie“ weg: ein Meer aus Farben. Redewendungen sind feste Bilder, deren Bedeutung man lernen muss.',
      ),
    ],
    test: [
      match('Was bedeutet die Redewendung?', [
        ['ins Auge springen', 'sofort auffallen'],
        ['ein Fest für die Augen', 'sehr schön anzusehen'],
        ['etwas in den Schatten stellen', 'viel besser sein als etwas'],
        ['im Gedränge untergehen', 'zwischen vielem nicht bemerkt werden'],
      ]),
      choice('Was ist das?', '„Die Ausstellung ist ein Meer aus Farben.“', [
        'ein Vergleich',
        '*eine Metapher',
        'Ironie',
      ]),
    ],
  },

  // ------------------------------------------------ Kapitel 12: Globalisierung und Migration
  {
    kind: 'VOCAB',
    title: 'Migration',
    ref: [I, 12, 1],
    learn: [
      words('Globalisierung und Migration', [
        ['die Zuwanderung', 'immigration'],
        ['der Fachkräftemangel', 'shortage of skilled workers'],
        ['der demografische Wandel', 'demographic change'],
        ['das Herkunftsland', 'country of origin'],
        ['das Zielland', 'destination country'],
        ['zwiespältig', 'mixed, ambivalent'],
        ['die Auswirkung', 'effect, impact'],
      ]),
      text(
        'Die Forschung unterscheidet Push- und Pull-Faktoren. Push-Faktoren „drücken“ Menschen aus ihrer Heimat, etwa Arbeitslosigkeit oder niedrige Löhne. Pull-Faktoren „ziehen“ sie in ein anderes Land: bessere Verdienstmöglichkeiten oder sichere Lebensbedingungen.',
      ),
    ],
    test: [
      match('Push- oder Pull-Faktor?', [
        ['hohe Arbeitslosigkeit im Herkunftsland', 'Push-Faktor'],
        ['gute Löhne im Zielland', 'Pull-Faktor'],
        ['politische Instabilität', 'Push-Faktor'],
        ['sichere Lebensbedingungen', 'Pull-Faktor'],
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Ursache und Folge',
    ref: [I, 12, 1],
    learn: [
      grammar('Mehr als weil und deshalb', 'Diese Wendungen machen einen Text genauer.', {
        headers: ['Richtung', 'Redemittel'],
        rows: [
          ['Ursache → Folge', 'A führt zu B. / A hat B zur Folge. / A löst B aus.'],
          ['Folge ← Ursache', 'B ist auf A zurückzuführen. / B geht auf A zurück.'],
          ['Nomen', 'Die Ursache für B ist A. / Eine Auswirkung von A ist B.'],
        ],
      }),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Der demografische Wandel [führt] zu einem Fachkräftemangel. Der Mangel ist vor allem auf die alternde Bevölkerung [zurückzuführen]. Das hat höhere Löhne zur [Folge].',
        ['Ursache', 'löst'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'sowohl … als auch, weder … noch',
    ref: [I, 12, 2],
    learn: [
      grammar(
        'Zweiteilige Konnektoren (1)',
        '„sowohl … als auch“: beides (+). „nicht nur …, sondern auch“: beides, das zweite betont. „weder … noch“: keins von beiden (−).',
        {
          headers: ['Konnektor', 'Beispiel'],
          rows: [
            ['sowohl … als auch', 'Sowohl Pflege als auch Handwerk suchen Personal.'],
            ['nicht nur …, sondern auch', 'Das betrifft nicht nur Städte, sondern auch Dörfer.'],
            ['weder … noch', 'Er spricht weder Englisch noch Deutsch.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Migration verändert nicht nur die Zielländer, [sondern] auch die Herkunftsländer. Sie spricht [sowohl] Arabisch [als] auch Französisch. Ich habe [weder] Zeit [noch] Geld.',
        ['oder', 'aber'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'entweder … oder, zwar … aber',
    ref: [I, 12, 2],
    learn: [
      grammar(
        'Zweiteilige Konnektoren (2)',
        '„entweder … oder“: Alternative. „zwar …, aber“: Einräumung. „einerseits …, andererseits“: zwei Seiten.',
        {
          headers: ['Konnektor', 'Beispiel'],
          rows: [
            ['entweder … oder', 'Entweder wir bilden mehr aus, oder wir werben Fachkräfte an.'],
            ['zwar …, aber', 'Das ist zwar teuer, aber notwendig.'],
            [
              'einerseits …, andererseits',
              'Einerseits fehlen dort Fachkräfte, andererseits fließt Geld zurück.',
            ],
          ],
        },
      ),
    ],
    test: [
      match('Was passt zusammen?', [
        ['Entweder du kommst mit,', 'oder du bleibst zu Hause.'],
        ['Die Wohnung ist zwar klein,', 'aber sie ist sehr hell.'],
        ['Einerseits verdient er gut,', 'andererseits hat er kaum Freizeit.'],
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Standpunkte abwägen',
    ref: [I, 12, 3],
    learn: [
      tip(
        'Fair abwägen',
        'Beide Seiten fair darstellen, die Argumente gewichten und zu einem begründeten Urteil kommen. Oft liegen zwei Positionen näher beieinander, als es scheint.',
      ),
    ],
    test: [
      match('Wozu dient der Satz?', [
        ['Vogt vertritt die Auffassung, dass …', 'Position wiedergeben'],
        ['Owusu hält dagegen, dass …', 'Gegenposition wiedergeben'],
        ['Schwerer wiegt meiner Ansicht nach …', 'gewichten'],
        ['Beide sind sich darin einig, dass …', 'Gemeinsamkeit'],
        ['Alles in allem komme ich zu dem Schluss, dass …', 'Urteil'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Die Erörterung',
    ref: [I, 12, 4],
    learn: [
      tip(
        'Vom Schwächeren zum Stärkeren',
        'Eine Pro-und-Contra-Erörterung beginnt mit der Seite, die man selbst nicht vertritt, und endet mit der eigenen. Jedes Argument wird begründet und mit einem Beispiel gestützt.',
      ),
    ],
    test: [
      order('Bringen Sie die Teile der Erörterung in die richtige Reihenfolge.', [
        'Es stellt sich die Frage, ob Schulen Mehrsprachigkeit stärker fördern sollten.',
        'Gegen eine Förderung lässt sich einwenden, dass sie viel kostet.',
        'Für eine Förderung spricht zunächst, dass Kinder so besser lernen.',
        'Wägt man die Argumente ab, überwiegen die Vorteile.',
        'Abschließend lässt sich festhalten, dass Schulen handeln sollten.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Wenn ich das gewusst hätte …',
    ref: [G, 12, 1],
    learn: [
      grammar(
        'Konjunktiv II der Vergangenheit',
        '„hätte“ oder „wäre“ + Partizip II – das Hilfsverb wie im Perfekt. Mit Modalverb steht ein doppelter Infinitiv am Ende: Ich hätte früher anrufen sollen.',
        {
          headers: ['Gegenwart', 'Vergangenheit'],
          rows: [
            ['Ich würde ihn fragen.', 'Ich hätte ihn gefragt.'],
            ['Wir würden kommen.', 'Wir wären gekommen.'],
            ['Du solltest mehr lernen.', 'Du hättest mehr lernen sollen.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'hätte oder wäre?',
        'Wenn ich das gewusst [hätte], [wäre] ich früher gekommen. Wir [hätten] den Zug fast verpasst.',
      ),
      order('Bilden Sie einen Satz.', ['Du', 'hättest', 'mich', 'anrufen', 'sollen', '.']),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'als ob',
    ref: [G, 12, 1],
    learn: [
      grammar(
        'Irreale Vergleiche',
        'Mit „als ob“ vergleicht man mit etwas, das nicht stimmt; das Verb steht am Ende: Er tut so, als ob er nichts gehört hätte. Mit „als“ allein rückt das Verb direkt dahinter: Er tut so, als hätte er nichts gehört.',
      ),
    ],
    test: [
      order('Bilden Sie den Satz mit „als ob“.', [
        'Sie tut so,',
        'als ob',
        'sie',
        'mich',
        'nicht',
        'kennen',
        'würde',
        '.',
      ]),
      choice('Welcher Satz ist richtig?', 'Wählen Sie.', [
        'Er redet, als er wäre der Chef.',
        '*Er redet, als wäre er der Chef.',
        'Er redet, als ob er ist der Chef.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Ich wäre Ihnen dankbar, wenn …',
    ref: [G, 12, 2],
    learn: [
      culture(
        'Wie direkt darf man sein?',
        'Ein Imperativ („Schicken Sie mir die Unterlagen.“) ist korrekt, klingt aber knapp. In E-Mails und mit Unbekannten ist der Konjunktiv II üblich: „Könnten Sie mir die Unterlagen schicken?“ oder „Ich wäre Ihnen dankbar, wenn Sie mir die Unterlagen schicken könnten.“ Unter Freunden genügt „Kannst du …?“.',
      ),
    ],
    test: [
      order('Vom direktesten zum höflichsten', [
        'Schicken Sie mir die Unterlagen.',
        'Können Sie mir die Unterlagen schicken?',
        'Könnten Sie mir die Unterlagen schicken?',
        'Ich wäre Ihnen dankbar, wenn Sie mir die Unterlagen schicken könnten.',
      ]),
      match('Wofür steht der Konjunktiv II?', [
        ['Wäre es möglich, den Termin zu verschieben?', 'höfliche Frage'],
        ['Wie wäre es mit einer Pause?', 'Vorschlag'],
        ['Er müsste gleich hier sein.', 'Vermutung'],
        ['Fast hätte ich es vergessen.', 'beinahe passiert'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Er sagte, er sei krank',
    ref: [G, 12, 3],
    learn: [
      grammar(
        'Konjunktiv I und indirekte Rede',
        'Stamm des Infinitivs + -e: er habe, er komme, er könne. „sein“: er sei. Vergangenheit: habe/sei + Partizip II. Ist der Konjunktiv I nicht vom Indikativ zu unterscheiden (sie haben), nimmt man den Konjunktiv II: Sie sagten, sie hätten keine Zeit.',
        {
          headers: ['direkte Rede', 'indirekte Rede'],
          rows: [
            ['„Ich bin krank.“', 'Er sagt, er sei krank.'],
            ['„Ich habe keine Zeit.“', 'Sie sagt, sie habe keine Zeit.'],
            ['„Ich kann nicht kommen.“', 'Er sagt, er könne nicht kommen.'],
            ['„Ich bin nach Hause gegangen.“', 'Er sagt, er sei nach Hause gegangen.'],
          ],
        },
      ),
    ],
    test: [
      match('Direkte und indirekte Rede', [
        ['„Ich komme später.“', 'Sie sagt, sie komme später.'],
        ['„Ich war im Urlaub.“', 'Er sagt, er sei im Urlaub gewesen.'],
        ['„Wir haben keine Zeit.“', 'Sie sagen, sie hätten keine Zeit.'],
        ['„Ich werde anrufen.“', 'Er sagt, er werde anrufen.'],
      ]),
    ],
  },
]);
