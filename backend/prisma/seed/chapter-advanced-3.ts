import type { UnitSeed } from './chapter-beginner-1';

/**
 * Advanced, Kapitel 3: „Politik und Öffentlichkeit“ (C1, Kapitel 3)
 *
 * Fünf Seiten. Politische Sprache ist Überzeugungssprache, und wer ihr
 * folgen will, muss zweierlei können: die Institutionen und Verfahren
 * benennen, über die gestritten wird, und die Mittel erkennen, mit denen
 * gestritten wird. Am Ende steht der Kommentar – die Textsorte, in der man
 * selbst pointiert Stellung bezieht.
 *
 * Aufbau: Seite 1 legt den Wortschatz des politischen Systems, Seite 2 die
 * Redemittel einer Parlamentsdebatte, Seite 3 die rhetorischen Mittel,
 * Seite 4 das Framing durch Wortwahl, Seite 5 den Kommentar.
 *
 * Parteien, Politiker und Anträge sind erfunden und keiner realen Partei
 * nachgebildet. Sämtliche Texte sind eigenständig verfasst.
 */
const v = 1;

export const ADVANCED_3_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Wortschatz: das politische System.
  {
    order: 1,
    title: 'Wie ein Gesetz entsteht',
    subtitle: 'Wortschatz des politischen Systems',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'a3-1-h1', type: 'HEADING', level: 1, text: 'Wie ein Gesetz entsteht' },
        {
          id: 'a3-1-text',
          type: 'TEXT',
          text: 'In Deutschland beschließt der Bundestag die Gesetze. Die meisten Gesetzentwürfe bringt die Bundesregierung ein, die sich auf eine Mehrheit im Parlament stützt – meist eine Koalition aus zwei oder mehr Parteien. Die übrigen Fraktionen bilden die Opposition. Ihre Aufgabe ist es, die Regierung zu kontrollieren, Alternativen aufzuzeigen und Schwächen eines Entwurfs öffentlich zu machen.\n\nEin Entwurf wird in drei Lesungen beraten. Die eigentliche Detailarbeit findet dazwischen in den Ausschüssen statt, wo Sachverständige angehört und Änderungen ausgehandelt werden. Betrifft ein Gesetz die Länder, muss auch der Bundesrat zustimmen, in dem die Landesregierungen vertreten sind.\n\nÖffentlich sichtbar wird von all dem meist nur ein kleiner Teil: die Debatte im Plenum, in der die Abgeordneten weniger einander überzeugen wollen als das Publikum vor den Bildschirmen.',
        },
        {
          id: 'a3-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: Politik',
          items: [
            {
              term: 'Gesetzentwurf',
              article: 'der',
              plural: 'die Gesetzentwürfe',
              translations: { en: 'bill, draft law', es: 'el proyecto de ley', fr: 'le projet de loi', it: 'il disegno di legge' },
            },
            {
              term: 'Koalition',
              article: 'die',
              translations: { en: 'coalition', es: 'la coalición', fr: 'la coalition', it: 'la coalizione' },
            },
            {
              term: 'Opposition',
              article: 'die',
              translations: { en: 'opposition', es: 'la oposición', fr: 'l’opposition', it: 'l’opposizione' },
            },
            {
              term: 'Fraktion',
              article: 'die',
              plural: 'die Fraktionen',
              translations: { en: 'parliamentary group', es: 'el grupo parlamentario', fr: 'le groupe parlementaire', it: 'il gruppo parlamentare' },
            },
            {
              term: 'Abgeordnete',
              article: 'der',
              plural: 'die Abgeordneten',
              translations: { en: 'member of parliament', es: 'el diputado', fr: 'le député', it: 'il deputato' },
            },
            {
              term: 'Ausschuss',
              article: 'der',
              plural: 'die Ausschüsse',
              translations: { en: 'committee', es: 'la comisión', fr: 'la commission', it: 'la commissione' },
            },
            {
              term: 'Antrag',
              article: 'der',
              plural: 'die Anträge',
              translations: { en: 'motion, proposal', es: 'la moción', fr: 'la motion', it: 'la mozione' },
            },
            {
              term: 'etwas beschließen',
              translations: { en: 'to pass, to decide', es: 'aprobar, decidir', fr: 'adopter, décider', it: 'approvare, deliberare' },
            },
            {
              term: 'einen Entwurf einbringen',
              translations: { en: 'to introduce a bill', es: 'presentar un proyecto', fr: 'déposer un projet', it: 'presentare un progetto' },
            },
            {
              term: 'zustimmungspflichtig',
              translations: { en: 'requiring consent', es: 'que requiere aprobación', fr: 'soumis à approbation', it: 'soggetto ad approvazione' },
            },
          ],
        },
        {
          id: 'a3-1-ordering',
          type: 'ORDERING',
          instruction: 'Bringen Sie die Schritte des Gesetzgebungsverfahrens in die richtige Reihenfolge.',
          items: [
            { id: 'o1', text: 'Die Bundesregierung bringt einen Gesetzentwurf ein.' },
            { id: 'o2', text: 'Erste Lesung im Bundestag.' },
            { id: 'o3', text: 'Beratung im Ausschuss, Anhörung von Sachverständigen.' },
            { id: 'o4', text: 'Zweite und dritte Lesung, Abstimmung.' },
            { id: 'o5', text: 'Der Bundesrat stimmt zu, falls das Gesetz zustimmungspflichtig ist.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5'],
        },
        {
          id: 'a3-1-match',
          type: 'MATCHING',
          instruction: 'Ordnen Sie die Begriffe ihren Erklärungen zu.',
          left: [
            { id: 'l1', text: 'Koalition' },
            { id: 'l2', text: 'Opposition' },
            { id: 'l3', text: 'Ausschuss' },
            { id: 'l4', text: 'Bundesrat' },
          ],
          right: [
            { id: 'r1', text: 'Bündnis von Parteien, die gemeinsam regieren' },
            { id: 'r2', text: 'Fraktionen, die nicht an der Regierung beteiligt sind' },
            { id: 'r3', text: 'kleines Gremium, in dem Entwürfe im Detail beraten werden' },
            { id: 'r4', text: 'Vertretung der Landesregierungen' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'a3-1-choice',
          type: 'CHOICE',
          instruction: 'Lesen Sie den Text.',
          question: 'An wen richten sich die Reden im Plenum laut Text vor allem?',
          multiple: false,
          options: [
            { id: 'c1', text: 'an die Abgeordneten der anderen Fraktionen' },
            { id: 'c2', text: 'an die Sachverständigen im Ausschuss' },
            { id: 'c3', text: 'an die Öffentlichkeit' },
            { id: 'c4', text: 'an den Bundesrat' },
          ],
          solution: ['c3'],
          explanation:
            'Der letzte Absatz sagt, die Abgeordneten wollten weniger einander überzeugen als „das Publikum vor den Bildschirmen“. Die Detailarbeit geschieht im Ausschuss, nicht im Plenum.',
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – einer Debatte folgen: Redemittel im Parlament.
  {
    order: 2,
    title: 'Herr Präsident, meine Damen und Herren',
    subtitle: 'Einer Debatte folgen',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'a3-2-h1', type: 'HEADING', level: 1, text: 'Herr Präsident, meine Damen und Herren' },
        {
          id: 'a3-2-intro',
          type: 'TEXT',
          text: 'Parlamentsreden folgen festen Ritualen. Wer die Formeln kennt, erkennt schnell, was ein Redner eigentlich tut: Greift er an, verteidigt er sich, macht er ein Angebot? Die Höflichkeit der Anrede sagt dabei wenig über den Ton – oft ist gerade die förmlichste Formulierung die schärfste.',
        },
        {
          id: 'a3-2-dialogue',
          type: 'DIALOGUE',
          title: 'Aus einer Debatte über den Nahverkehr',
          lines: [
            { speaker: 'Abg. Brandt (Regierung)', text: 'Frau Präsidentin! Meine sehr geehrten Damen und Herren! Mit diesem Gesetz investieren wir so viel in Busse und Bahnen wie keine Regierung vor uns.' },
            { speaker: 'Zwischenruf', text: 'Und wer soll das bezahlen?' },
            { speaker: 'Abg. Brandt', text: 'Auf die Frage komme ich gleich, Herr Kollege. Lassen Sie mich zunächst sagen, was dieses Gesetz für die Menschen auf dem Land bedeutet.' },
            { speaker: 'Abg. Kessler (Opposition)', text: 'Sehr geehrte Frau Präsidentin! Herr Kollege Brandt, Sie haben eben viel über Investitionen gesprochen. Zur Finanzierung haben Sie kein einziges Wort gesagt.' },
            { speaker: 'Abg. Kessler', text: 'Gestatten Sie mir eine Frage: Glauben Sie ernsthaft, dass die Kommunen diese Kosten allein tragen können?' },
            { speaker: 'Abg. Brandt', text: 'Frau Kollegin, ich weise diesen Vorwurf entschieden zurück. Der Bund übernimmt zwei Drittel der Kosten, das steht in Paragraf 4.' },
          ],
        },
        {
          id: 'a3-2-info-redemittel',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Formeln der Debatte',
          text: 'Die Anrede „Herr Kollege / Frau Kollegin“ ist im Parlament üblich, auch zwischen erbitterten Gegnern. Eine „Zwischenfrage“ muss der Redner zulassen oder ablehnen; ein „Zwischenruf“ wird einfach hineingerufen. Die Formeln unten zeigen, wie förmlich selbst ein scharfer Angriff klingen kann.',
          table: {
            headers: ['Funktion', 'Formel'],
            rows: [
              ['Rede eröffnen', 'Frau Präsidentin! Meine sehr geehrten Damen und Herren!'],
              ['Zeit gewinnen', 'Auf diesen Punkt komme ich gleich.'],
              ['angreifen', 'Sie haben kein einziges Wort zu … gesagt.'],
              ['Vorwurf abwehren', 'Diesen Vorwurf weise ich entschieden zurück.'],
              ['Zwischenfrage erbitten', 'Gestatten Sie eine Zwischenfrage?'],
              ['Angebot machen', 'Wir sind jederzeit bereit, darüber zu reden.'],
            ],
          },
        },
        {
          id: 'a3-2-match',
          type: 'MATCHING',
          instruction: 'Was tut der Redner mit dieser Formulierung?',
          left: [
            { id: 'l1', text: 'Diesen Vorwurf weise ich entschieden zurück.' },
            { id: 'l2', text: 'Auf die Frage komme ich gleich.' },
            { id: 'l3', text: 'Gestatten Sie eine Zwischenfrage?' },
            { id: 'l4', text: 'Unsere Tür steht jederzeit offen.' },
          ],
          right: [
            { id: 'r1', text: 'sich gegen einen Angriff verteidigen' },
            { id: 'r2', text: 'Zeit gewinnen, nicht sofort antworten' },
            { id: 'r3', text: 'um das Wort bitten, während ein anderer spricht' },
            { id: 'r4', text: 'Gesprächsbereitschaft signalisieren' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'a3-2-choice',
          type: 'CHOICE',
          instruction: 'Lesen Sie die Debatte.',
          question: 'Welchen Vorwurf erhebt die Abgeordnete Kessler?',
          multiple: false,
          options: [
            { id: 'd1', text: 'Das Gesetz investiere zu wenig in den Nahverkehr.' },
            { id: 'd2', text: 'Brandt habe nicht erklärt, wie die Investitionen finanziert werden.' },
            { id: 'd3', text: 'Das Gesetz vernachlässige die Menschen auf dem Land.' },
            { id: 'd4', text: 'Der Bund übernehme zu viele Kosten.' },
          ],
          solution: ['d2'],
          explanation:
            'Kessler greift die fehlende Finanzierung an („kein einziges Wort“). Brandt antwortet darauf mit dem Hinweis auf Paragraf 4.',
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – rhetorische Mittel.
  {
    order: 3,
    title: 'Rhetorische Mittel',
    subtitle: 'Erkennen, benennen, deuten',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'a3-3-h1', type: 'HEADING', level: 1, text: 'Rhetorische Mittel' },
        {
          id: 'a3-3-intro',
          type: 'TEXT',
          text: 'Eine gute politische Rede wirkt nicht nur durch Argumente, sondern auch durch ihre Form. Bestimmte Muster – Wiederholungen, Dreierreihen, Gegensätze – bleiben im Gedächtnis und lassen sich in Nachrichtensendungen als kurze Zitate verwenden. Wer diese Muster kennt, erkennt, wann eine Rede überzeugen will und wann sie nur überwältigen möchte.',
        },
        {
          id: 'a3-3-info-mittel',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Häufige rhetorische Mittel',
          text: 'Die meisten Mittel beruhen auf Wiederholung oder Gegensatz, weil das Ohr beides mühelos erkennt. Nennen Sie in einer Analyse nie nur das Mittel, sondern immer auch seine Wirkung.',
          table: {
            headers: ['Mittel', 'Beispiel', 'Wirkung'],
            rows: [
              ['Anapher', 'Wir wollen Arbeit. Wir wollen Sicherheit. Wir wollen Zukunft.', 'Eindringlichkeit'],
              ['Trikolon', 'schneller, günstiger, gerechter', 'Vollständigkeit, Rhythmus'],
              ['Antithese', 'Sie reden, wir handeln.', 'klarer Kontrast'],
              ['rhetorische Frage', 'Wer will das ernsthaft bestreiten?', 'Zustimmung wird vorausgesetzt'],
              ['Metapher', 'Die Schuldenlawine rollt.', 'Bild ersetzt Argument'],
              ['Euphemismus', 'Preisanpassung statt Preiserhöhung', 'Beschönigung'],
              ['Hyperbel', 'eine Katastrophe für das ganze Land', 'Übertreibung, Dramatisierung'],
            ],
          },
        },
        {
          id: 'a3-3-match',
          type: 'MATCHING',
          instruction: 'Welches Mittel wird verwendet?',
          left: [
            { id: 'l1', text: 'Die Regierung verwaltet, wir gestalten.' },
            { id: 'l2', text: 'Wer glaubt denn noch an diese Versprechen?' },
            { id: 'l3', text: 'Wir kämpfen für die Familien, für die Rentner, für die Jugend.' },
            { id: 'l4', text: 'Freisetzung von Mitarbeitern' },
            { id: 'l5', text: 'Dieses Gesetz ist ein Sargnagel für den Mittelstand.' },
          ],
          right: [
            { id: 'r1', text: 'Antithese' },
            { id: 'r2', text: 'rhetorische Frage' },
            { id: 'r3', text: 'Anapher und Trikolon' },
            { id: 'r4', text: 'Euphemismus' },
            { id: 'r5', text: 'Metapher' },
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
          id: 'a3-3-choice',
          type: 'CHOICE',
          instruction: 'Wählen Sie die beste Analyse.',
          question: '„Wer will ernsthaft bestreiten, dass unsere Schulen mehr Geld brauchen?“ Welche Analyse trifft zu?',
          multiple: false,
          options: [
            { id: 'q1', text: 'Die Rednerin möchte wissen, wer anderer Meinung ist.' },
            { id: 'q2', text: 'Die rhetorische Frage unterstellt, dass jeder vernünftige Mensch zustimmt, und erspart eine Begründung.' },
            { id: 'q3', text: 'Die Frage ist eine Metapher für die Bildungspolitik.' },
            { id: 'q4', text: 'Die Rednerin gibt zu, dass ihre Position umstritten ist.' },
          ],
          solution: ['q2'],
          explanation:
            'Die rhetorische Frage erwartet keine Antwort. „ernsthaft“ verstärkt die Unterstellung: Wer widerspricht, ist nicht ernst zu nehmen. Eine Begründung, warum die Schulen mehr Geld brauchen, fehlt.',
        },
        {
          id: 'a3-3-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die Analyse.',
          wordBank: ['Anapher', 'Antithese', 'Euphemismus', 'Wirkung', 'Hyperbel'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Der Redner beginnt drei Sätze mit „Wir wollen“ – eine ' },
            { kind: 'GAP', gapId: 'k1', solution: ['Anapher'], width: 8 },
            { kind: 'TEXT', text: '. Mit „Sie reden, wir handeln“ stellt er sich in einer ' },
            { kind: 'GAP', gapId: 'k2', solution: ['Antithese'], width: 10 },
            { kind: 'TEXT', text: ' der Regierung gegenüber. Die Stellenstreichungen nennt er „Umstrukturierung“, ein ' },
            { kind: 'GAP', gapId: 'k3', solution: ['Euphemismus'], width: 12 },
            { kind: 'TEXT', text: '. „Eine Katastrophe für das ganze Land“ ist eine ' },
            { kind: 'GAP', gapId: 'k4', solution: ['Hyperbel'], width: 9 },
            { kind: 'TEXT', text: '. Entscheidend ist in jeder Analyse die ' },
            { kind: 'GAP', gapId: 'k5', solution: ['Wirkung'], width: 8 },
            { kind: 'TEXT', text: ' des Mittels.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – Framing durch Wortwahl.
  {
    order: 4,
    title: 'Steuerlast oder Steuerbeitrag?',
    subtitle: 'Framing durch Wortwahl',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'a3-4-h1', type: 'HEADING', level: 1, text: 'Steuerlast oder Steuerbeitrag?' },
        {
          id: 'a3-4-intro',
          type: 'TEXT',
          text: 'Wer von „Steuerlast“ spricht, hat bereits gesagt, dass Steuern etwas Schweres sind, das man abwerfen möchte. Wer „Steuerbeitrag“ sagt, rückt die Gemeinschaft in den Vordergrund, zu der man beiträgt. Beide Wörter bezeichnen dasselbe – aber sie setzen einen unterschiedlichen Rahmen, englisch: einen Frame. Politische Kommunikation besteht zu einem großen Teil aus dem Kampf um solche Wörter.',
        },
        {
          id: 'a3-4-info-frames',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Wortpaare und ihre Rahmen',
          text: 'Besonders wirksam sind Komposita, weil sie eine Bewertung in ein einziges Wort packen: In „Flüchtlingswelle“ steckt das Bild einer Naturgewalt, gegen die man sich schützen muss. Kein Wort ist völlig neutral – aber manche Wörter verraten ihre Perspektive deutlicher als andere.',
          table: {
            headers: ['Rahmen A', 'Rahmen B', 'Unterschied'],
            rows: [
              ['Steuerlast', 'Steuerbeitrag', 'Belastung vs. Beteiligung'],
              ['Sparpaket', 'Kürzungen', 'Vernunft vs. Verlust'],
              ['Klimawandel', 'Klimakrise', 'Prozess vs. Notlage'],
              ['Sozialleistungen', 'soziale Hängematte', 'Anspruch vs. Bequemlichkeit'],
              ['Reform', 'Abbau', 'Verbesserung vs. Verschlechterung'],
            ],
          },
        },
        {
          id: 'a3-4-match',
          type: 'MATCHING',
          instruction: 'Welche Bewertung steckt im Wort?',
          left: [
            { id: 'l1', text: 'Rentenreform' },
            { id: 'l2', text: 'Rentenkürzung' },
            { id: 'l3', text: 'Klimakrise' },
            { id: 'l4', text: 'Sparpaket' },
          ],
          right: [
            { id: 'r1', text: 'eine Verbesserung des Systems' },
            { id: 'r2', text: 'ein Verlust für die Rentner' },
            { id: 'r3', text: 'eine akute Notlage, die schnelles Handeln verlangt' },
            { id: 'r4', text: 'eine vernünftige, verantwortliche Maßnahme' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'a3-4-info-agens',
          type: 'INFO',
          variant: 'TIP',
          title: 'Wer handelt? Das Passiv als Rahmen',
          text: 'Auch die Grammatik rahmt. „Die Regierung hat 2000 Stellen gestrichen“ nennt einen Verantwortlichen. „2000 Stellen wurden gestrichen“ lässt ihn weg, „Der Stellenabbau betraf 2000 Beschäftigte“ macht aus der Handlung ein Ereignis. Passiv und Nominalisierung sind nicht per se manipulativ – aber sie sind die häufigsten Mittel, um Verantwortung unsichtbar zu machen.',
        },
        {
          id: 'a3-4-choice',
          type: 'CHOICE',
          instruction: 'Wählen Sie die Formulierung.',
          question: 'Eine Zeitung will möglichst neutral berichten. Welche Formulierung ist am wenigsten wertend?',
          multiple: false,
          options: [
            { id: 'f1', text: 'Die Regierung schnürt ein mutiges Sparpaket.' },
            { id: 'f2', text: 'Die Regierung plant Kürzungen von 3 Milliarden Euro, vor allem im Sozialbereich.' },
            { id: 'f3', text: 'Die Regierung zerschlägt den Sozialstaat.' },
            { id: 'f4', text: 'Endlich wird die soziale Hängematte abgeschafft.' },
          ],
          solution: ['f2'],
          explanation:
            'Die zweite Formulierung nennt den Handelnden, den Betrag und den Bereich. „mutiges Sparpaket“ lobt, „zerschlägt“ dramatisiert, „soziale Hängematte“ wertet die Empfänger ab.',
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – der Kommentar; Wiederholung und Schreibaufgabe.
  {
    order: 5,
    title: 'Der Kommentar',
    subtitle: 'Pointiert Stellung beziehen',
    estimatedMinutes: 34,
    content: {
      version: v,
      blocks: [
        { id: 'a3-5-h1', type: 'HEADING', level: 1, text: 'Der Kommentar' },
        {
          id: 'a3-5-intro',
          type: 'TEXT',
          text: 'Im Nachrichtenteil einer Zeitung soll der Journalist seine Meinung zurückhalten; im Kommentar soll er sie äußern – aber begründet. Ein guter Kommentar ist kurz, hat eine klare These, bezieht sich auf einen aktuellen Anlass und endet mit einer Pointe, die im Gedächtnis bleibt.',
        },
        {
          id: 'a3-5-info-aufbau',
          type: 'INFO',
          variant: 'TIP',
          title: 'Aufbau eines Kommentars',
          text: 'Der Einstieg holt die Leser beim Anlass ab. Die These folgt früh, spätestens im zweiten Absatz. Dann kommen zwei oder drei Argumente, ein fair wiedergegebener Einwand und seine Entkräftung. Der Schluss spitzt zu – mit einer Forderung, einer Frage oder einer Wendung, die den Anfang wieder aufgreift.',
          table: {
            headers: ['Teil', 'Redemittel'],
            rows: [
              ['Anlass', 'Seit gestern ist es beschlossen: …'],
              ['These', 'Das ist ein Fehler. / Das ist überfällig.'],
              ['Argument', 'Denn wer …, der …'],
              ['Einwand', 'Nun mag man einwenden, …'],
              ['Entkräftung', 'Doch das greift zu kurz.'],
              ['Pointe', 'Man kann nur hoffen, dass … / Es wäre nicht das erste Mal.'],
            ],
          },
        },
        {
          id: 'a3-5-ordering',
          type: 'ORDERING',
          instruction: 'Bringen Sie den Kommentar in die richtige Reihenfolge.',
          items: [
            { id: 'o1', text: 'Seit gestern ist es beschlossen: Das Nahverkehrsticket wird um zehn Euro teurer.' },
            { id: 'o2', text: 'Das ist ein Fehler, und zwar ein teurer.' },
            { id: 'o3', text: 'Denn wer den Umstieg vom Auto will, darf ihn nicht bei jeder Haushaltslücke verteuern.' },
            { id: 'o4', text: 'Nun mag man einwenden, das Geld fehle eben. Doch das greift zu kurz: Jeder verlorene Fahrgast kostet mehr.' },
            { id: 'o5', text: 'Man kann nur hoffen, dass die Koalition das vor der nächsten Wahl noch merkt.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5'],
        },
        {
          id: 'a3-5-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die Zusammenfassung des Kapitels.',
          wordBank: ['Ausschüssen', 'Opposition', 'Wirkung', 'Rahmen', 'These', 'Pointe'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Die Detailarbeit an Gesetzen findet in den ' },
            { kind: 'GAP', gapId: 'z1', solution: ['Ausschüssen'], width: 12 },
            { kind: 'TEXT', text: ' statt. Die ' },
            { kind: 'GAP', gapId: 'z2', solution: ['Opposition'], width: 11 },
            { kind: 'TEXT', text: ' kontrolliert die Regierung. Bei rhetorischen Mitteln zählt vor allem ihre ' },
            { kind: 'GAP', gapId: 'z3', solution: ['Wirkung'], width: 8 },
            { kind: 'TEXT', text: '. Wörter wie „Steuerlast“ setzen einen ' },
            { kind: 'GAP', gapId: 'z4', solution: ['Rahmen'], width: 7 },
            { kind: 'TEXT', text: '. Ein Kommentar braucht eine klare ' },
            { kind: 'GAP', gapId: 'z5', solution: ['These'], width: 6 },
            { kind: 'TEXT', text: ' und endet mit einer ' },
            { kind: 'GAP', gapId: 'z6', solution: ['Pointe'], width: 7 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'a3-5-writing',
          type: 'WRITING',
          instruction: 'Schreiben Sie einen Kommentar.',
          prompt:
            'Der Stadtrat Ihrer Stadt hat beschlossen, das Wahlalter bei Kommunalwahlen auf 16 Jahre zu senken. Schreiben Sie für die Lokalzeitung einen Kommentar (180–250 Wörter). Beziehen Sie klar Stellung, nennen Sie zwei Argumente, geben Sie einen Einwand fair wieder und entkräften Sie ihn. Verwenden Sie mindestens zwei rhetorische Mittel bewusst und schließen Sie mit einer Pointe.',
          minWords: 180,
          maxWords: 260,
          aiFeedback: true,
          sampleAnswer:
            'Endlich zählen auch sie\n\nSeit Dienstag ist es beschlossen: Bei der nächsten Kommunalwahl dürfen auch Sechzehnjährige wählen. Das ist keine Revolution, aber es ist richtig – und es war überfällig.\n\nDenn wer über Schulwege, Sportplätze und Busverbindungen entscheidet, entscheidet über das Leben junger Menschen. Sie fahren mit dem Bus, den der Rat einspart. Sie sitzen in der Schule, deren Dach seit Jahren undicht ist. Sie leben am längsten mit den Folgen dessen, was heute beschlossen wird.\n\nHinzu kommt: Wer früh wählt, wählt oft ein Leben lang. Studien aus Städten, die das Wahlalter bereits gesenkt haben, zeigen, dass Erstwählerinnen und Erstwähler, die noch zu Hause wohnen, häufiger zur Wahl gehen als Einundzwanzigjährige, die gerade umgezogen sind.\n\nNun mag man einwenden, Sechzehnjährige seien noch nicht reif genug und ließen sich leicht beeinflussen. Doch das greift zu kurz. Wer beeinflussbar ist, ist keine Frage des Alters – sonst müssten wir manchen Erwachsenen das Wahlrecht auch entziehen. Und reif genug, eine Ausbildung zu beginnen und Steuern zu zahlen, sind sie ja offenbar.\n\nIst die Entscheidung also ein Risiko? Wohl kaum. Das eigentliche Risiko wäre eine Politik, die über eine ganze Generation entscheidet, ohne sie zu fragen. Man kann nur hoffen, dass die Jungen ihre neue Stimme nutzen. Die Alten tun es schließlich auch.',
        },
      ],
    },
  },
];
