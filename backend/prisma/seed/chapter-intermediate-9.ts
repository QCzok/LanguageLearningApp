import type { UnitSeed } from './chapter-beginner-1';

/**
 * Intermediate, Kapitel 9: „Wirtschaft und Konsum“ (B2, Kapitel 3)
 *
 * Fünf Seiten. Das Argumentationskapitel der Stufe B2: Auf B1 hieß
 * argumentieren „Meinung plus Grund“. Hier kommt dazu, was eine Argumentation
 * überzeugend macht – Bedingungen einschränken, Gegenargumente aufgreifen und
 * entkräften, mit Zahlen belegen.
 *
 * Aufbau: Seite 1 liest einen Artikel über Fast Fashion und Secondhand.
 * Seite 2 ist der grammatische Kern: Konnektoren wie „zumal“, „sofern“,
 * „indem“ und „wohingegen“. Seite 3 zeigt in einer Podiumsdiskussion zum
 * „Recht auf Reparatur“, wie man Gegenargumente entkräftet, Seite 4
 * interpretiert eine Statistik, Seite 5 wiederholt und lässt eine
 * Stellungnahme schreiben.
 *
 * Einsprachig deutsch wie der ganze Intermediate-Band. Die Diskussion ist
 * bewusst ausgewogen: Geübt wird die Form des Arguments, nicht eine Position.
 * Personen, Umfrage und Zahlen sind erfunden bzw. gerundet. Sämtliche Texte
 * sind eigenständig verfasst.
 */
const v = 1;

export const INTERMEDIATE_9_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – ein Artikel über Fast Fashion und Secondhand.
  {
    order: 1,
    title: 'Kaufen, tragen, wegwerfen?',
    subtitle: 'Über Konsum sprechen',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'i9-1-h1', type: 'HEADING', level: 1, text: 'Kaufen, tragen, wegwerfen?' },
        {
          id: 'i9-1-image',
          type: 'IMAGE',
          url: 'illustration:shopping-bags',
          alt: 'Mehrere volle Einkaufstüten nebeneinander.',
          caption: 'Wie viel brauchen wir wirklich?',
        },
        {
          id: 'i9-1-text',
          type: 'TEXT',
          text: 'Im Durchschnitt kauft jeder Mensch in Deutschland rund 60 neue Kleidungsstücke pro Jahr – und trägt viele davon nur ein paar Mal. Möglich machen das sogenannte Fast-Fashion-Ketten, die fast jede Woche neue Kollektionen anbieten, und zwar zu Preisen, bei denen ein T-Shirt weniger kostet als ein Mittagessen.\n\nDer niedrige Preis hat jedoch Folgen, die an der Kasse nicht auftauchen: Für ein einziges Baumwoll-T-Shirt werden mehrere Tausend Liter Wasser verbraucht, und in vielen Produktionsländern arbeiten Näherinnen für Löhne, von denen sie kaum leben können. Ökonominnen sprechen von „externen Kosten“ – Kosten, die nicht der Käufer trägt, sondern die Umwelt oder die Gesellschaft.\n\nGleichzeitig wächst ein Gegentrend. Secondhand-Plattformen verzeichnen seit Jahren zweistellige Wachstumsraten, vor allem bei jungen Menschen. „Gebraucht zu kaufen ist für viele meiner Freunde inzwischen normal, zumal man so auch Geld spart“, sagt die 22-jährige Studentin Nele. Kritiker geben allerdings zu bedenken, dass manche Nutzer auf diesen Plattformen einfach noch mehr kaufen – nur eben gebraucht.',
        },
        {
          id: 'i9-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: Wirtschaft und Konsum',
          items: [
            {
              term: 'Verbraucher',
              article: 'der',
              plural: 'die Verbraucher',
              translations: { en: 'consumer', es: 'el consumidor', fr: 'le consommateur', it: 'il consumatore' },
            },
            {
              term: 'Nachfrage',
              article: 'die',
              translations: { en: 'demand', es: 'la demanda', fr: 'la demande', it: 'la domanda' },
              example: 'Die Nachfrage nach gebrauchter Kleidung steigt.',
            },
            {
              term: 'Angebot',
              article: 'das',
              plural: 'die Angebote',
              translations: { en: 'supply, offer', es: 'la oferta', fr: 'l’offre', it: 'l’offerta' },
            },
            {
              term: 'Lohn',
              article: 'der',
              plural: 'die Löhne',
              translations: { en: 'wage', es: 'el salario', fr: 'le salaire', it: 'il salario' },
            },
            {
              term: 'nachhaltig',
              translations: { en: 'sustainable', es: 'sostenible', fr: 'durable', it: 'sostenibile' },
              example: 'nachhaltig produzierte Kleidung',
            },
            {
              term: 'verzeichnen',
              translations: { en: 'to record, to register', es: 'registrar', fr: 'enregistrer', it: 'registrare' },
              example: 'Die Firma verzeichnet ein Plus von 12 Prozent.',
            },
            {
              term: 'Wachstum',
              article: 'das',
              translations: { en: 'growth', es: 'el crecimiento', fr: 'la croissance', it: 'la crescita' },
            },
            {
              term: 'zu bedenken geben',
              translations: { en: 'to point out, to caution', es: 'hacer notar, advertir', fr: 'faire remarquer', it: 'far notare' },
            },
            {
              term: 'sich etwas leisten können',
              translations: { en: 'to be able to afford something', es: 'poder permitirse algo', fr: 'pouvoir se permettre qc', it: 'potersi permettere qc' },
            },
          ],
        },
        {
          id: 'i9-1-choice',
          type: 'CHOICE',
          instruction: 'Lesen Sie den Artikel.',
          question: 'Welche Aussagen entsprechen dem Text? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'a1', text: 'Viele Kleidungsstücke werden nur selten getragen.' },
            { id: 'a2', text: '„Externe Kosten“ bezahlt der Käufer an der Kasse.' },
            { id: 'a3', text: 'Secondhand ist vor allem bei jungen Menschen beliebt.' },
            { id: 'a4', text: 'Laut Kritikern löst Secondhand das Problem des Überkonsums automatisch.' },
          ],
          solution: ['a1', 'a3'],
          explanation:
            'Externe Kosten trägt gerade nicht der Käufer, sondern Umwelt und Gesellschaft. Und die Kritiker sagen das Gegenteil von a4: Manche kaufen auf Secondhand-Plattformen einfach noch mehr.',
        },
        {
          id: 'i9-1-match',
          type: 'MATCHING',
          instruction: 'Was bedeutet das im Text?',
          left: [
            { id: 'l1', text: 'Fast Fashion' },
            { id: 'l2', text: 'externe Kosten' },
            { id: 'l3', text: 'zweistellige Wachstumsraten' },
            { id: 'l4', text: 'Gegentrend' },
          ],
          right: [
            { id: 'r1', text: 'billige Mode, die sehr schnell wechselt' },
            { id: 'r2', text: 'Kosten, die andere als der Käufer tragen' },
            { id: 'r3', text: 'ein Plus von mindestens zehn Prozent' },
            { id: 'r4', text: 'eine Entwicklung in die entgegengesetzte Richtung' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'i9-1-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie mit den Wörtern aus dem Kasten.',
          wordBank: ['Nachfrage', 'nachhaltig', 'leisten', 'Verbraucher', 'Löhne'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Viele ' },
            { kind: 'GAP', gapId: 'c1', solution: ['Verbraucher'], width: 12 },
            { kind: 'TEXT', text: ' möchten gern ' },
            { kind: 'GAP', gapId: 'c2', solution: ['nachhaltig'], width: 11 },
            { kind: 'TEXT', text: ' einkaufen, können sich teure Bio-Mode aber nicht ' },
            { kind: 'GAP', gapId: 'c3', solution: ['leisten'], width: 8 },
            { kind: 'TEXT', text: '. Solange die ' },
            { kind: 'GAP', gapId: 'c4', solution: ['Nachfrage'], width: 10 },
            { kind: 'TEXT', text: ' nach billiger Kleidung so groß ist, werden die ' },
            { kind: 'GAP', gapId: 'c5', solution: ['Löhne', 'Loehne'], width: 6 },
            { kind: 'TEXT', text: ' in den Fabriken niedrig bleiben.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – Konnektoren für eine Argumentation.
  {
    order: 2,
    title: 'Zumal, sofern, indem',
    subtitle: 'Konnektoren für Argumente',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'i9-2-h1', type: 'HEADING', level: 1, text: 'Zumal, sofern, indem' },
        {
          id: 'i9-2-text',
          type: 'TEXT',
          text: 'Nele sagt: „Gebraucht zu kaufen ist normal, zumal man so auch Geld spart.“\n\nMit „weil“ wäre der Satz auch richtig. Aber „zumal“ sagt mehr: Es gibt schon einen Grund – und dieser kommt noch dazu, er verstärkt das Argument. Genau solche Konnektoren machen eine Argumentation auf B2 präzise: Sie zeigen, ob ein Grund zusätzlich, eine Bedingung einschränkend oder ein Gegensatz betont ist.',
        },
        {
          id: 'i9-2-info-konnektoren',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Konnektoren mit Nebensatz',
          text: 'Alle Konnektoren in dieser Tabelle leiten einen Nebensatz ein – das konjugierte Verb steht am Ende.',
          table: {
            headers: ['Konnektor', 'Bedeutung', 'Beispiel'],
            rows: [
              ['zumal', 'zusätzlicher, verstärkender Grund', 'Ich kaufe gebraucht, zumal es billiger ist.'],
              ['sofern / vorausgesetzt, dass', 'Bedingung (nur wenn)', 'Secondhand hilft der Umwelt, sofern man insgesamt weniger kauft.'],
              ['indem', 'Art und Weise, Mittel (wie?)', 'Man spart Geld, indem man Kleidung repariert.'],
              ['wohingegen / während', 'Gegensatz', 'Fast Fashion ist billig, wohingegen faire Mode mehr kostet.'],
              ['sodass', 'Folge', 'Die Preise sind gesunken, sodass mehr gekauft wird.'],
              ['obgleich / obwohl', 'Einräumung', 'Sie kauft oft neu, obgleich sie das kritisch sieht.'],
            ],
          },
        },
        {
          id: 'i9-2-info-adverbien',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Konnektoren mit Hauptsatz',
          text: 'Diese Konnektoren sind Adverbien. Sie stehen oft auf Position 1 – dann folgt direkt das konjugierte Verb.',
          table: {
            headers: ['Konnektor', 'Bedeutung', 'Beispiel'],
            rows: [
              ['folglich / demzufolge', 'Folge', 'Die Nachfrage steigt. Folglich steigen die Preise.'],
              ['dennoch / trotzdem', 'Gegengrund', 'Die Jacke war teuer. Dennoch hat er sie gekauft.'],
              ['hingegen', 'Gegensatz', 'Junge Leute kaufen oft gebraucht. Ältere hingegen kaufen meist neu.'],
              ['zudem / außerdem', 'Ergänzung', 'Secondhand ist günstig. Zudem schont es Ressourcen.'],
            ],
          },
        },
        {
          id: 'i9-2-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie den passenden Konnektor.',
          wordBank: ['zumal', 'sofern', 'indem', 'wohingegen', 'sodass', 'Dennoch'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Man kann Ressourcen sparen, ' },
            { kind: 'GAP', gapId: 'k1', solution: ['indem'], width: 8 },
            { kind: 'TEXT', text: ' man Geräte reparieren lässt.\n2. Ich kaufe keine Fast Fashion, ' },
            { kind: 'GAP', gapId: 'k2', solution: ['zumal'], width: 8 },
            { kind: 'TEXT', text: ' die Qualität oft schlecht ist.\n3. Online-Shopping ist bequem, ' },
            { kind: 'GAP', gapId: 'k3', solution: ['wohingegen'], width: 11 },
            { kind: 'TEXT', text: ' der Einzelhandel persönliche Beratung bietet.\n4. Der Rabatt gilt nur, ' },
            { kind: 'GAP', gapId: 'k4', solution: ['sofern'], width: 8 },
            { kind: 'TEXT', text: ' Sie bis Freitag bestellen.\n5. Die Lieferkosten sind gestiegen, ' },
            { kind: 'GAP', gapId: 'k5', solution: ['sodass'], width: 8 },
            { kind: 'TEXT', text: ' viele Kunden wieder im Laden kaufen.\n6. Das Handy war fast neu. ' },
            { kind: 'GAP', gapId: 'k6', solution: ['Dennoch'], width: 8 },
            { kind: 'TEXT', text: ' wollte sie das neueste Modell.' },
          ],
        },
        {
          id: 'i9-2-choice',
          type: 'CHOICE',
          instruction: 'Welcher Satz ist korrekt?',
          multiple: false,
          options: [
            { id: 'a1', text: 'Die Preise sind gestiegen. Folglich die Kunden kaufen weniger.' },
            { id: 'a2', text: 'Die Preise sind gestiegen. Folglich kaufen die Kunden weniger.' },
            { id: 'a3', text: 'Die Preise sind gestiegen, folglich die Kunden weniger kaufen.' },
            { id: 'a4', text: 'Die Preise sind gestiegen. Folglich kaufen weniger die Kunden.' },
          ],
          solution: ['a2'],
          explanation:
            '„folglich“ ist ein Adverb, kein Nebensatz-Konnektor. Steht es auf Position 1, folgt direkt das Verb: Folglich kaufen die Kunden …',
        },
        {
          id: 'i9-2-choice-2',
          type: 'CHOICE',
          instruction: '„indem“ oder „sodass“?',
          question: 'Viele Läden locken Kunden an, ______ sie ständig Rabatte anbieten.',
          multiple: false,
          options: [
            { id: 'b1', text: 'indem' },
            { id: 'b2', text: 'sodass' },
          ],
          solution: ['b1'],
          explanation:
            'Die Rabatte sind das Mittel – sie beantworten die Frage „Wie locken die Läden Kunden an?“. Dafür steht „indem“. „sodass“ würde eine Folge ausdrücken.',
        },
        {
          id: 'i9-2-match',
          type: 'MATCHING',
          instruction: 'Verbinden Sie die Satzteile.',
          left: [
            { id: 'l1', text: 'Leihen ist sinnvoll,' },
            { id: 'l2', text: 'Er verdient gut,' },
            { id: 'l3', text: 'Die Firma senkt Kosten,' },
            { id: 'l4', text: 'Ich nehme das teurere Modell,' },
          ],
          right: [
            { id: 'r1', text: 'sofern man ein Gerät nur selten braucht.' },
            { id: 'r2', text: 'wohingegen seine Schwester kaum über die Runden kommt.' },
            { id: 'r3', text: 'indem sie Arbeitsschritte automatisiert.' },
            { id: 'r4', text: 'zumal es fünf Jahre Garantie hat.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'i9-2-order',
          type: 'ORDERING',
          instruction: 'Bilden Sie einen Satz mit „indem“.',
          items: [
            { id: 'o1', text: 'Man' },
            { id: 'o2', text: 'kann' },
            { id: 'o3', text: 'viel Geld sparen,' },
            { id: 'o4', text: 'indem' },
            { id: 'o5', text: 'man' },
            { id: 'o6', text: 'Kleidung gebraucht' },
            { id: 'o7', text: 'kauft.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5', 'o6', 'o7'],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – Gegenargumente aufgreifen und entkräften.
  {
    order: 3,
    title: 'Reparieren statt wegwerfen?',
    subtitle: 'Gegenargumente aufgreifen und entkräften',
    estimatedMinutes: 27,
    content: {
      version: v,
      blocks: [
        { id: 'i9-3-h1', type: 'HEADING', level: 1, text: 'Reparieren statt wegwerfen?' },
        {
          id: 'i9-3-intro',
          type: 'TEXT',
          text: 'Die EU hat ein „Recht auf Reparatur“ beschlossen: Hersteller sollen bestimmte Geräte länger reparierbar halten und Ersatzteile anbieten. Auf einer Podiumsdiskussion sprechen eine Verbraucherschützerin und ein Unternehmer über die Folgen.',
        },
        {
          id: 'i9-3-dlg',
          type: 'DIALOGUE',
          title: 'Die Podiumsdiskussion',
          lines: [
            { speaker: 'Moderator', text: 'Frau Aydın, warum ist das Recht auf Reparatur aus Ihrer Sicht so wichtig?' },
            { speaker: 'Frau Aydın', text: 'Weil Geräte heute oft weggeworfen werden, obwohl nur ein kleines Teil kaputt ist. Das ist teuer für die Verbraucher und schlecht für die Umwelt, zumal viele Rohstoffe knapp sind.' },
            { speaker: 'Herr Lindner', text: 'Das Ziel teile ich. Aber man muss auch sehen, dass Reparaturen in Deutschland sehr teuer sind. Wer zahlt 150 Euro für die Reparatur einer Waschmaschine, die neu 400 Euro kostet?' },
            { speaker: 'Frau Aydın', text: 'Das ist zwar richtig, aber genau deshalb braucht es das Gesetz. Wenn Ersatzteile verfügbar und günstig sein müssen, sinken auch die Reparaturkosten.' },
            { speaker: 'Herr Lindner', text: 'Man könnte allerdings einwenden, dass die Geräte dadurch teurer werden. Reparierbare Konstruktionen kosten in der Herstellung mehr.' },
            { speaker: 'Frau Aydın', text: 'Das mag sein. Allerdings hält ein reparierbares Gerät auch deutlich länger. Rechnet man die Kosten auf die Lebensdauer um, spart der Kunde am Ende sogar Geld.' },
            { speaker: 'Herr Lindner', text: 'Sofern die Kunden das auch so sehen. Viele wollen nach drei Jahren ohnehin ein neues Modell.' },
          ],
        },
        {
          id: 'i9-3-info-entkraeften',
          type: 'INFO',
          variant: 'TIP',
          title: 'Ein Gegenargument entkräften',
          text: 'Eine starke Argumentation ignoriert die Gegenseite nicht. Sie nennt das Gegenargument, erkennt an, was daran richtig ist – und zeigt dann, warum es die eigene Position nicht widerlegt. Dieses Muster heißt auch „Ja, aber …“.',
          table: {
            headers: ['Schritt', 'Redemittel'],
            rows: [
              ['Gegenargument nennen', 'Man könnte einwenden, dass … / Kritiker behaupten, dass …'],
              ['teilweise zustimmen', 'Das ist zwar richtig, aber … / Das mag sein. / Da ist etwas dran.'],
              ['entkräften', 'Allerdings … / Dabei wird übersehen, dass … / Das greift aber zu kurz, weil …'],
              ['eigene Position stärken', 'Gerade deshalb … / Umso wichtiger ist es, … / Entscheidend ist, dass …'],
            ],
          },
        },
        {
          id: 'i9-3-choice',
          type: 'CHOICE',
          instruction: 'Lesen Sie die Diskussion.',
          question: 'Wie entkräftet Frau Aydın das Argument, dass Geräte teurer werden?',
          multiple: false,
          options: [
            { id: 'a1', text: 'Sie bestreitet, dass die Geräte teurer werden.' },
            { id: 'a2', text: 'Sie sagt, dass die Kunden auf die Lebensdauer gerechnet sogar sparen.' },
            { id: 'a3', text: 'Sie schlägt vor, dass der Staat die Geräte bezahlt.' },
            { id: 'a4', text: 'Sie wechselt das Thema.' },
          ],
          solution: ['a2'],
          explanation:
            'Sie räumt ein („Das mag sein“) und entkräftet dann: Ein reparierbares Gerät hält länger, auf die Lebensdauer gerechnet spart der Kunde Geld.',
        },
        {
          id: 'i9-3-match',
          type: 'MATCHING',
          instruction: 'Welcher Schritt ist das?',
          left: [
            { id: 'l1', text: 'Man könnte allerdings einwenden, dass die Geräte dadurch teurer werden.' },
            { id: 'l2', text: 'Das ist zwar richtig, …' },
            { id: 'l3', text: '… aber genau deshalb braucht es das Gesetz.' },
          ],
          right: [
            { id: 'r1', text: 'Gegenargument nennen' },
            { id: 'r2', text: 'teilweise zustimmen' },
            { id: 'r3', text: 'eigene Position stärken' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
          ],
        },
        {
          id: 'i9-3-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die Argumentation.',
          wordBank: ['einwenden', 'zwar', 'übersehen', 'Umso', 'mag'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Man könnte ' },
            { kind: 'GAP', gapId: 'e1', solution: ['einwenden'], width: 10 },
            { kind: 'TEXT', text: ', dass Leihläden für Werkzeug unpraktisch sind. Das ist ' },
            { kind: 'GAP', gapId: 'e2', solution: ['zwar'], width: 5 },
            { kind: 'TEXT', text: ' nicht ganz falsch, aber dabei wird ' },
            { kind: 'GAP', gapId: 'e3', solution: ['übersehen', 'uebersehen'], width: 10 },
            { kind: 'TEXT', text: ', dass eine Bohrmaschine im Durchschnitt nur wenige Minuten im Jahr benutzt wird. Das ' },
            { kind: 'GAP', gapId: 'e4', solution: ['mag'], width: 4 },
            { kind: 'TEXT', text: ' im Einzelfall anders sein. ' },
            { kind: 'GAP', gapId: 'e5', solution: ['Umso'], width: 5 },
            { kind: 'TEXT', text: ' sinnvoller ist es, solche Geräte gemeinsam zu nutzen.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – eine Statistik interpretieren.
  {
    order: 4,
    title: 'Was steckt hinter den Zahlen?',
    subtitle: 'Eine Statistik interpretieren',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'i9-4-h1', type: 'HEADING', level: 1, text: 'Was steckt hinter den Zahlen?' },
        {
          id: 'i9-4-text',
          type: 'TEXT',
          text: 'Umfrage: „Was ist Ihnen beim Kauf von Kleidung am wichtigsten?“ (1 500 Befragte, eine Antwort möglich)\n\n• Preis: 38 %\n• Qualität / Haltbarkeit: 27 %\n• Aussehen / Trend: 19 %\n• faire und umweltfreundliche Herstellung: 9 %\n• Marke: 7 %\n\nZusatzfrage: „Würden Sie für fair produzierte Kleidung mehr bezahlen?“ – Ja: 64 %\n\n(erfundene Beispielumfrage, Werte gerundet)',
        },
        {
          id: 'i9-4-info-interpretieren',
          type: 'INFO',
          variant: 'TIP',
          title: 'Zahlen interpretieren – nicht nur ablesen',
          text: 'Eine Interpretation geht über die Beschreibung hinaus. Sie stellt Zahlen in Beziehung, fragt nach Widersprüchen und nennt Grenzen der Aussagekraft: Wer wurde befragt? Wie war die Frage formuliert? Sagen Menschen in Umfragen, was sie wirklich tun?',
          table: {
            headers: ['Zweck', 'Redemittel'],
            rows: [
              ['in Beziehung setzen', 'Vergleicht man … mit …, fällt auf, dass …'],
              ['Widerspruch zeigen', 'Dem steht gegenüber, dass … / Das steht im Widerspruch zu …'],
              ['einschränken', 'Dabei ist zu berücksichtigen, dass … / Die Zahlen sind mit Vorsicht zu betrachten, da …'],
              ['folgern', 'Das lässt vermuten, dass … / Daraus lässt sich ableiten, dass …'],
            ],
          },
        },
        {
          id: 'i9-4-choice',
          type: 'CHOICE',
          instruction: 'Lesen Sie die Umfrage.',
          question: 'Welcher Widerspruch zeigt sich in den Zahlen?',
          multiple: false,
          options: [
            { id: 'a1', text: 'Der Preis ist wichtiger als die Marke.' },
            { id: 'a2', text: 'Zwei Drittel wären bereit, für faire Kleidung mehr zu zahlen, aber nur 9 % nennen faire Herstellung als wichtigstes Kriterium.' },
            { id: 'a3', text: 'Qualität ist wichtiger als Aussehen.' },
            { id: 'a4', text: 'Es gibt keinen Widerspruch.' },
          ],
          solution: ['a2'],
          explanation:
            'Die Bereitschaft (64 %) und die tatsächliche Priorität (9 %) passen nicht zusammen. Eine mögliche Erklärung: In Umfragen geben Menschen gern sozial erwünschte Antworten.',
        },
        {
          id: 'i9-4-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die Interpretation.',
          wordBank: ['Vergleicht', 'gegenüber', 'berücksichtigen', 'vermuten', 'Vorsicht'],
          caseSensitive: false,
          segments: [
            { kind: 'GAP', gapId: 's1', solution: ['Vergleicht'], width: 11 },
            { kind: 'TEXT', text: ' man die beiden Fragen, fällt ein Widerspruch auf: 64 % würden mehr für faire Mode zahlen. Dem steht ' },
            { kind: 'GAP', gapId: 's2', solution: ['gegenüber'], width: 10 },
            { kind: 'TEXT', text: ', dass nur 9 % faire Herstellung für am wichtigsten halten. Das lässt ' },
            { kind: 'GAP', gapId: 's3', solution: ['vermuten'], width: 9 },
            { kind: 'TEXT', text: ', dass gute Absichten und tatsächliches Verhalten auseinandergehen. Dabei ist allerdings zu ' },
            { kind: 'GAP', gapId: 's4', solution: ['berücksichtigen', 'beruecksichtigen'], width: 15 },
            { kind: 'TEXT', text: ', dass nur eine Antwort möglich war. Die Zahlen sind daher mit ' },
            { kind: 'GAP', gapId: 's5', solution: ['Vorsicht'], width: 9 },
            { kind: 'TEXT', text: ' zu betrachten.' },
          ],
        },
        {
          id: 'i9-4-choice-2',
          type: 'CHOICE',
          instruction: 'Welche Einschränkungen der Aussagekraft sind sinnvoll? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'b1', text: 'Die Befragten konnten nur eine Antwort wählen.' },
            { id: 'b2', text: 'In Umfragen antworten Menschen oft so, wie es gesellschaftlich erwartet wird.' },
            { id: 'b3', text: 'Der Preis ist mit 38 % das wichtigste Kriterium.' },
            { id: 'b4', text: 'Wir wissen nicht, wie viel „mehr“ die Befragten zahlen würden.' },
          ],
          solution: ['b1', 'b2', 'b4'],
          explanation:
            'b3 ist eine Beschreibung der Zahlen, keine Einschränkung. Die anderen drei zeigen, warum man die Ergebnisse nicht zu wörtlich nehmen sollte.',
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – Rückblick auf Kapitel 9.
  {
    order: 5,
    title: 'Kannst du das schon?',
    subtitle: 'Rückblick, eine eigene Stellungnahme',
    estimatedMinutes: 27,
    content: {
      version: v,
      blocks: [
        { id: 'i9-5-h1', type: 'HEADING', level: 1, text: 'Kannst du das schon?' },
        {
          id: 'i9-5-intro',
          type: 'TEXT',
          text: 'Prüfen Sie, was Sie aus Kapitel 9 mitnehmen: Wortschatz zu Wirtschaft und Konsum, Konnektoren wie „zumal“, „sofern“ und „indem“, das Entkräften von Gegenargumenten und die Interpretation von Statistiken.',
        },
        {
          id: 'i9-5-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie den Text.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Viele ' },
            { kind: 'GAP', gapId: 'r1', solution: ['Verbraucher'], width: 12 },
            { kind: 'TEXT', text: ' leihen inzwischen Dinge, statt sie zu kaufen. Das ist sinnvoll, ' },
            { kind: 'GAP', gapId: 'r2', solution: ['sofern'], width: 7 },
            { kind: 'TEXT', text: ' man sie nur selten braucht. Man spart Geld, ' },
            { kind: 'GAP', gapId: 'r3', solution: ['indem'], width: 6 },
            { kind: 'TEXT', text: ' man zum Beispiel eine Leiter vom Nachbarn leiht. Kritiker wenden ein, das sei unpraktisch. Das ist ' },
            { kind: 'GAP', gapId: 'r4', solution: ['zwar'], width: 5 },
            { kind: 'TEXT', text: ' manchmal richtig, ' },
            { kind: 'GAP', gapId: 'r5', solution: ['dennoch', 'trotzdem'], width: 8 },
            { kind: 'TEXT', text: ' überwiegen die Vorteile.' },
          ],
        },
        {
          id: 'i9-5-choice',
          type: 'CHOICE',
          instruction: 'Welche Sätze sind korrekt? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'k1', text: 'Ich kaufe hier, zumal der Laden in meiner Nähe ist.' },
            { id: 'k2', text: 'Die Mieten steigen. Folglich viele Läden schließen.' },
            { id: 'k3', text: 'Er spart Strom, indem er Geräte ganz ausschaltet.' },
            { id: 'k4', text: 'Sie kauft online, wohingegen ihr Mann lieber in die Stadt geht.' },
          ],
          solution: ['k1', 'k3', 'k4'],
          explanation: 'Nach „folglich“ auf Position 1 steht das Verb direkt dahinter: Folglich schließen viele Läden.',
        },
        {
          id: 'i9-5-match',
          type: 'MATCHING',
          instruction: 'Welcher Konnektor drückt was aus?',
          left: [
            { id: 'm1', text: 'zumal' },
            { id: 'm2', text: 'sofern' },
            { id: 'm3', text: 'indem' },
            { id: 'm4', text: 'wohingegen' },
          ],
          right: [
            { id: 'y1', text: 'ein zusätzlicher Grund' },
            { id: 'y2', text: 'eine Bedingung' },
            { id: 'y3', text: 'ein Mittel, eine Art und Weise' },
            { id: 'y4', text: 'ein Gegensatz' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'y1' },
            { leftId: 'm2', rightId: 'y2' },
            { leftId: 'm3', rightId: 'y3' },
            { leftId: 'm4', rightId: 'y4' },
          ],
        },
        {
          id: 'i9-5-writing',
          type: 'WRITING',
          instruction: 'Eine Stellungnahme',
          prompt:
            'In Ihrer Stadt wird diskutiert, ob große Einkaufszentren am Stadtrand verboten werden sollen, um den Einzelhandel in der Innenstadt zu schützen. Schreiben Sie eine Stellungnahme für das Online-Forum der Lokalzeitung. Vertreten Sie eine klare Position, nennen Sie mindestens zwei Argumente, greifen Sie ein Gegenargument auf und entkräften Sie es. Verwenden Sie mindestens drei Konnektoren aus diesem Kapitel.',
          minWords: 150,
          maxWords: 280,
          aiFeedback: true,
          sampleAnswer:
            'Ich halte ein Verbot neuer Einkaufszentren am Stadtrand für richtig.\n\nErstens sterben die Innenstädte, wenn die Kundschaft nur noch mit dem Auto an den Stadtrand fährt. Das sieht man in vielen Kleinstädten schon heute: Leere Schaufenster ziehen weitere Leerstände nach sich, sodass ganze Straßen veröden. Zweitens schadet der zusätzliche Autoverkehr der Umwelt, zumal viele Zentren mit Bus und Bahn kaum erreichbar sind.\n\nMan könnte einwenden, dass Einkaufszentren Arbeitsplätze schaffen und die Preise dort niedriger sind. Das ist zwar richtig, allerdings gehen dieselben Arbeitsplätze in der Innenstadt verloren. Und die niedrigen Preise zahlen wir indirekt, indem wir Straßen und Parkplätze finanzieren.\n\nEin Verbot allein reicht jedoch nicht. Die Stadt sollte die Innenstadt attraktiver machen, indem sie zum Beispiel Mieten für kleine Läden fördert. Sofern Stadt und Händler zusammenarbeiten, kann die Innenstadt wieder ein lebendiger Treffpunkt werden.',
        },
      ],
    },
  },
];
