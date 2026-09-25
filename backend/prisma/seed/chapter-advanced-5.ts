import type { UnitSeed } from './chapter-beginner-1';

/**
 * Advanced, Kapitel 5: „Nachhaltigkeit und Verantwortung“ (C1, Kapitel 5)
 *
 * Fünf Seiten. Nachhaltigkeit ist das Paradebeispiel für Zielkonflikte:
 * Klimaschutz, bezahlbare Energie und Arbeitsplätze lassen sich nicht alle
 * zugleich maximieren. Das Kapitel übt die Sprache, in der man solche
 * Konflikte darstellt, ohne sie vorschnell aufzulösen, und die Sprache der
 * Szenarien – was wäre, wenn.
 *
 * Aufbau: Seite 1 legt den Wortschatz, Seite 2 die Redemittel für
 * Zielkonflikte, Seite 3 Szenarien mit Konjunktiv II und „angenommen“,
 * Seite 4 kritisches Lesen von Nachhaltigkeitsversprechen, Seite 5 die
 * komplexe Argumentation mit Schreibaufgabe.
 *
 * Zahlen sind gerundet oder erfunden und dienen als Übungsmaterial.
 * Sämtliche Texte sind eigenständig verfasst.
 */
const v = 1;

export const ADVANCED_5_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Wortschatz der Nachhaltigkeit.
  {
    order: 1,
    title: 'Drei Säulen',
    subtitle: 'Der Wortschatz der Nachhaltigkeit',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'a5-1-h1', type: 'HEADING', level: 1, text: 'Drei Säulen' },
        {
          id: 'a5-1-text',
          type: 'TEXT',
          text: 'Der Begriff „Nachhaltigkeit“ stammt aus der Forstwirtschaft des 18. Jahrhunderts: Man solle nur so viel Holz schlagen, wie nachwachsen kann. Heute wird er so häufig gebraucht, dass er fast bedeutungslos zu werden droht – vom „nachhaltigen Wachstum“ bis zur „nachhaltigen Zahnbürste“.\n\nIn der Politik hat sich ein Modell mit drei Säulen durchgesetzt. Ökologische Nachhaltigkeit bedeutet, die natürlichen Lebensgrundlagen zu erhalten. Ökonomische Nachhaltigkeit verlangt, dass eine Wirtschaft dauerhaft tragfähig bleibt. Soziale Nachhaltigkeit zielt auf Gerechtigkeit innerhalb und zwischen den Generationen.\n\nDas Modell hat einen Vorteil und eine Schwäche. Es macht sichtbar, dass Umweltschutz nicht gegen alles andere ausgespielt werden darf. Aber es verschweigt, dass die drei Ziele einander oft widersprechen – und dass man dann entscheiden muss, welches Vorrang hat.',
        },
        {
          id: 'a5-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: Nachhaltigkeit',
          items: [
            {
              term: 'Lebensgrundlage',
              article: 'die',
              plural: 'die Lebensgrundlagen',
              translations: { en: 'basis of life, livelihood', es: 'el sustento', fr: 'les ressources vitales', it: 'la base di vita' },
            },
            {
              term: 'Ressource',
              article: 'die',
              plural: 'die Ressourcen',
              translations: { en: 'resource', es: 'el recurso', fr: 'la ressource', it: 'la risorsa' },
            },
            {
              term: 'Emission',
              article: 'die',
              plural: 'die Emissionen',
              translations: { en: 'emission', es: 'la emisión', fr: 'l’émission', it: 'l’emissione' },
            },
            {
              term: 'Energiewende',
              article: 'die',
              translations: { en: 'energy transition', es: 'la transición energética', fr: 'la transition énergétique', it: 'la transizione energetica' },
            },
            {
              term: 'Zielkonflikt',
              article: 'der',
              plural: 'die Zielkonflikte',
              translations: { en: 'conflict of objectives, trade-off', es: 'el conflicto de objetivos', fr: 'le conflit d’objectifs', it: 'il conflitto di obiettivi' },
            },
            {
              term: 'tragfähig',
              translations: { en: 'viable, sustainable', es: 'viable', fr: 'viable', it: 'sostenibile' },
            },
            {
              term: 'Generationengerechtigkeit',
              article: 'die',
              translations: { en: 'intergenerational fairness', es: 'la justicia intergeneracional', fr: 'l’équité intergénérationnelle', it: 'l’equità intergenerazionale' },
            },
            {
              term: 'Vorrang haben',
              translations: { en: 'to take priority', es: 'tener prioridad', fr: 'avoir la priorité', it: 'avere la precedenza' },
            },
            {
              term: 'etwas gegeneinander ausspielen',
              translations: { en: 'to play things off against each other', es: 'enfrentar una cosa con otra', fr: 'opposer l’un à l’autre', it: 'contrapporre' },
            },
            {
              term: 'verzichten (auf + Akk.)',
              translations: { en: 'to do without, to give up', es: 'renunciar a', fr: 'renoncer à', it: 'rinunciare a' },
            },
          ],
        },
        {
          id: 'a5-1-match',
          type: 'MATCHING',
          instruction: 'Welche Säule der Nachhaltigkeit ist gemeint?',
          left: [
            { id: 'l1', text: 'Ein Moor wird nicht trockengelegt, damit es weiter CO₂ speichert.' },
            { id: 'l2', text: 'Eine Stadt baut Schulden ab, um künftigen Generationen Spielraum zu lassen.' },
            { id: 'l3', text: 'Ein Energiekonzern zahlt Ausgleich an Regionen, die vom Kohleausstieg betroffen sind.' },
          ],
          right: [
            { id: 'r1', text: 'ökologisch' },
            { id: 'r2', text: 'ökonomisch' },
            { id: 'r3', text: 'sozial' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
          ],
        },
        {
          id: 'a5-1-choice',
          type: 'CHOICE',
          instruction: 'Lesen Sie den Text.',
          question: 'Welche Schwäche des Drei-Säulen-Modells nennt der Text?',
          multiple: false,
          options: [
            { id: 'c1', text: 'Es berücksichtigt die Umwelt nicht.' },
            { id: 'c2', text: 'Es verschweigt, dass die drei Ziele sich oft widersprechen.' },
            { id: 'c3', text: 'Es stammt aus der Forstwirtschaft und ist veraltet.' },
            { id: 'c4', text: 'Es ist zu kompliziert für die Politik.' },
          ],
          solution: ['c2'],
          explanation:
            'Der letzte Absatz nennt den Vorteil (Umweltschutz wird nicht isoliert) und die Schwäche (die Ziele widersprechen sich, und das Modell sagt nicht, welches Vorrang hat).',
        },
        {
          id: 'a5-1-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie.',
          wordBank: ['Ressourcen', 'Emissionen', 'Zielkonflikt', 'Vorrang', 'verzichten'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Wer weniger ' },
            { kind: 'GAP', gapId: 'g1', solution: ['Ressourcen'], width: 11 },
            { kind: 'TEXT', text: ' verbraucht, verursacht meist auch weniger ' },
            { kind: 'GAP', gapId: 'g2', solution: ['Emissionen'], width: 11 },
            { kind: 'TEXT', text: '. Doch billige Energie und Klimaschutz stehen oft in einem ' },
            { kind: 'GAP', gapId: 'g3', solution: ['Zielkonflikt'], width: 13 },
            { kind: 'TEXT', text: '. Dann muss die Politik entscheiden, welches Ziel ' },
            { kind: 'GAP', gapId: 'g4', solution: ['Vorrang'], width: 8 },
            { kind: 'TEXT', text: ' hat – und worauf man ' },
            { kind: 'GAP', gapId: 'g5', solution: ['verzichten'], width: 11 },
            { kind: 'TEXT', text: ' kann.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – Zielkonflikte darstellen.
  {
    order: 2,
    title: 'Auf Kosten von …',
    subtitle: 'Zielkonflikte sprachlich darstellen',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'a5-2-h1', type: 'HEADING', level: 1, text: 'Auf Kosten von …' },
        {
          id: 'a5-2-text',
          type: 'TEXT',
          text: 'Ein Windpark soll auf einem bewaldeten Höhenzug entstehen. Er würde jährlich Strom für 40 000 Haushalte liefern und der Gemeinde Pachteinnahmen bringen. Dafür müssten jedoch fünf Hektar Wald gerodet werden, und Anwohner fürchten Lärm und den Verlust ihres Landschaftsbildes. Naturschützer sind gespalten: Die einen sehen den Klimaschutz im Vordergrund, die anderen den Artenschutz. Keine Seite vertritt ein illegitimes Ziel – aber nicht alle Ziele lassen sich gleichzeitig erreichen.',
        },
        {
          id: 'a5-2-info-redemittel',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Redemittel für Zielkonflikte',
          text: 'Präpositionen wie „auf Kosten“ und „zulasten“ verlangen den Genitiv oder „von“ + Dativ und nennen, was geopfert wird. „je … desto“ zeigt eine gleitende Beziehung, „ohne dass“ eine ausbleibende Folge. „zwar … aber“ räumt ein, bevor es einschränkt.',
          table: {
            headers: ['Redemittel', 'Beispiel'],
            rows: [
              ['auf Kosten + Gen. / von + Dat.', 'Der Park entsteht auf Kosten des Waldes.'],
              ['zulasten + Gen.', 'Günstiger Strom geht nicht zulasten des Klimas.'],
              ['je …, desto …', 'Je mehr Anlagen gebaut werden, desto größer ist der Widerstand.'],
              ['ohne dass', 'Die Emissionen sanken, ohne dass die Wirtschaft schrumpfte.'],
              ['zwar …, aber', 'Zwar schützt der Park das Klima, aber er zerstört Lebensraum.'],
              ['in dem Maße, wie', 'Die Akzeptanz steigt in dem Maße, wie die Gemeinde profitiert.'],
            ],
          },
        },
        {
          id: 'a5-2-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die Redemittel.',
          wordBank: ['auf Kosten', 'Je', 'desto', 'ohne dass', 'Zwar'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Der Windpark entsteht ' },
            { kind: 'GAP', gapId: 'r1', solution: ['auf Kosten', 'zulasten'], width: 11 },
            { kind: 'TEXT', text: ' des Waldes. ' },
            { kind: 'GAP', gapId: 'r2', solution: ['Je'], width: 4 },
            { kind: 'TEXT', text: ' früher die Anwohner beteiligt werden, ' },
            { kind: 'GAP', gapId: 'r3', solution: ['desto'], width: 6 },
            { kind: 'TEXT', text: ' größer ist die Akzeptanz. In Nachbargemeinden sanken die Strompreise, ' },
            { kind: 'GAP', gapId: 'r4', solution: ['ohne dass'], width: 10 },
            { kind: 'TEXT', text: ' der Tourismus gelitten hätte. ' },
            { kind: 'GAP', gapId: 'r5', solution: ['Zwar'], width: 5 },
            { kind: 'TEXT', text: ' verändert der Park das Landschaftsbild, aber er sichert Einnahmen.' },
          ],
        },
        {
          id: 'a5-2-choice',
          type: 'CHOICE',
          instruction: 'Wählen Sie die ausgewogene Darstellung.',
          question: 'Welcher Satz stellt den Zielkonflikt fair dar?',
          multiple: false,
          options: [
            { id: 'd1', text: 'Wer gegen Windräder ist, ist gegen Klimaschutz.' },
            { id: 'd2', text: 'Der Park würde viele Haushalte mit Strom versorgen, allerdings auf Kosten von fünf Hektar Wald, in dem geschützte Arten leben.' },
            { id: 'd3', text: 'Windparks zerstören die Natur und bringen nichts.' },
            { id: 'd4', text: 'Anwohner sind immer gegen alles, was vor ihrer Haustür gebaut wird.' },
          ],
          solution: ['d2'],
          explanation:
            'Die zweite Antwort nennt Nutzen und Preis gleich konkret. Die anderen verkürzen den Konflikt auf eine Seite oder werten die Gegenseite pauschal ab.',
        },
        {
          id: 'a5-2-match',
          type: 'MATCHING',
          instruction: 'Welcher Zielkonflikt liegt vor?',
          left: [
            { id: 'l1', text: 'CO₂-Preis erhöhen' },
            { id: 'l2', text: 'Freiflächen mit Solaranlagen bebauen' },
            { id: 'l3', text: 'Flugverkehr stark besteuern' },
            { id: 'l4', text: 'Kohlekraftwerke sofort abschalten' },
          ],
          right: [
            { id: 'r1', text: 'Klimaschutz gegen Entlastung ärmerer Haushalte' },
            { id: 'r2', text: 'Energiegewinnung gegen Landwirtschaft und Artenschutz' },
            { id: 'r3', text: 'Emissionsminderung gegen Arbeitsplätze im Tourismus' },
            { id: 'r4', text: 'Klimaschutz gegen Versorgungssicherheit und Arbeitsplätze in den Revieren' },
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

  // ====================================================== SEITE 3
  // Seite 3 – Szenarien entwerfen.
  {
    order: 3,
    title: 'Was wäre, wenn …',
    subtitle: 'Szenarien entwerfen und bewerten',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'a5-3-h1', type: 'HEADING', level: 1, text: 'Was wäre, wenn …' },
        {
          id: 'a5-3-intro',
          type: 'TEXT',
          text: 'Politik über Nachhaltigkeit ist Politik über die Zukunft, und über die Zukunft spricht man in Szenarien: Was geschieht, wenn wir nichts tun? Was, wenn wir schnell handeln? Das Deutsche hat dafür mehrere Mittel, die jeweils einen anderen Grad an Wahrscheinlichkeit ausdrücken.',
        },
        {
          id: 'a5-3-info-szenario',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Mittel für Szenarien',
          text: 'Der Konjunktiv II stellt ein Szenario als hypothetisch dar. „Angenommen, …“ und „Gesetzt den Fall, …“ leiten eine Annahme ein; danach folgt ein Hauptsatz mit Verbzweitstellung oder ein Satz mit „dass“. „Sollte …“ am Satzanfang ist eine elegante Variante von „falls“. Im Indikativ mit „wenn“ erscheint das Szenario als realistisch.',
          table: {
            headers: ['Mittel', 'Beispiel', 'Wirkung'],
            rows: [
              ['wenn + Indikativ', 'Wenn der CO₂-Preis steigt, sinken die Emissionen.', 'realistisch'],
              ['wenn + Konjunktiv II', 'Wenn alle Dächer Solaranlagen hätten, bräuchten wir kaum Kohle.', 'hypothetisch'],
              ['angenommen, …', 'Angenommen, der Preis verdoppelt sich: Was dann?', 'Gedankenexperiment'],
              ['sollte … (Verberststellung)', 'Sollte die Förderung auslaufen, stockt der Ausbau.', 'mögliche, eher unerwünschte Entwicklung'],
              ['im Falle + Gen.', 'Im Falle eines Stromausfalls springt das Netz ein.', 'nominaler Stil'],
            ],
          },
        },
        {
          id: 'a5-3-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die passende Form.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Wenn jede Gemeinde einen eigenen Windpark ' },
            { kind: 'GAP', gapId: 's1', solution: ['hätte'], hint: 'haben, hypothetisch', width: 6 },
            { kind: 'TEXT', text: ', ' },
            { kind: 'GAP', gapId: 's2', solution: ['wäre'], hint: 'sein, hypothetisch', width: 6 },
            { kind: 'TEXT', text: ' das Land unabhängiger. ' },
            { kind: 'GAP', gapId: 's3', solution: ['Sollte'], hint: 'falls, am Satzanfang', width: 7 },
            { kind: 'TEXT', text: ' die Förderung auslaufen, stockt der Ausbau. ' },
            { kind: 'GAP', gapId: 's4', solution: ['Angenommen'], hint: 'Gedankenexperiment', width: 11 },
            { kind: 'TEXT', text: ', der Strompreis verdoppelt sich: Wer trägt dann die Kosten?' },
          ],
        },
        {
          id: 'a5-3-info-bewerten',
          type: 'INFO',
          variant: 'TIP',
          title: 'Szenarien bewerten',
          text: 'Ein Szenario ist keine Prognose. Wer eines bewertet, prüft seine Annahmen: Wovon geht es aus? Was müsste eintreten, damit es wahr wird? Welche Faktoren lässt es weg? Hilfreiche Wendungen: „Das Szenario geht davon aus, dass …“, „Es setzt voraus, dass …“, „Unberücksichtigt bleibt …“.',
        },
        {
          id: 'a5-3-choice',
          type: 'CHOICE',
          instruction: 'Welcher Satz drückt ein hypothetisches Szenario aus?',
          question: 'Wählen Sie.',
          multiple: false,
          options: [
            { id: 'h1', text: 'Wenn der Preis steigt, fahren weniger Menschen Auto.' },
            { id: 'h2', text: 'Wenn alle Autos elektrisch führen, bräuchten wir doppelt so viel Strom.' },
            { id: 'h3', text: 'Der Preis ist gestiegen, deshalb fahren weniger Menschen Auto.' },
            { id: 'h4', text: 'Im nächsten Jahr steigt der Preis.' },
          ],
          solution: ['h2'],
          explanation:
            'Nur die zweite Antwort steht im Konjunktiv II und stellt die Situation damit als gedacht, nicht als real dar. Die erste ist eine realistische Bedingung im Indikativ.',
        },
        {
          id: 'a5-3-match',
          type: 'MATCHING',
          instruction: 'Ordnen Sie die Bewertungen zu.',
          left: [
            { id: 'l1', text: 'Das Szenario geht davon aus, dass …' },
            { id: 'l2', text: 'Unberücksichtigt bleibt, dass …' },
            { id: 'l3', text: 'Es setzt voraus, dass …' },
          ],
          right: [
            { id: 'r1', text: 'nennt die Grundannahme' },
            { id: 'r2', text: 'kritisiert eine Lücke' },
            { id: 'r3', text: 'nennt eine notwendige Bedingung' },
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

  // ====================================================== SEITE 4
  // Seite 4 – kritisch lesen: Greenwashing.
  {
    order: 4,
    title: 'Klimaneutral – wirklich?',
    subtitle: 'Nachhaltigkeitsversprechen kritisch lesen',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'a5-4-h1', type: 'HEADING', level: 1, text: 'Klimaneutral – wirklich?' },
        {
          id: 'a5-4-text',
          type: 'TEXT',
          text: '„Unser Mineralwasser ist klimaneutral.“ Hinter solchen Aussagen steht oft nicht, dass bei der Herstellung kein CO₂ entsteht, sondern dass die Firma Zertifikate gekauft hat, mit denen anderswo Emissionen ausgeglichen werden sollen – etwa durch Waldschutzprojekte. Ob diese tatsächlich zusätzliche Emissionen verhindern, ist umstritten. Man spricht von „Greenwashing“, wenn ein Unternehmen sich umweltfreundlicher darstellt, als es ist. Die Europäische Union hat deshalb begonnen, allgemeine Werbeaussagen wie „klimaneutral“ oder „umweltfreundlich“ ohne Nachweis einzuschränken.',
        },
        {
          id: 'a5-4-info-signale',
          type: 'INFO',
          variant: 'TIP',
          title: 'Warnsignale beim Lesen',
          text: 'Vage Adjektive ohne Maßstab, Zahlen ohne Bezugsgröße, Vergleiche ohne Vergleichsobjekt und Versprechen für ferne Jahre sind typische Warnsignale. Fragen Sie stets: Im Vergleich wozu? Gemessen woran? Wer hat es geprüft?',
          table: {
            headers: ['Aussage', 'Kritische Frage'],
            rows: [
              ['„umweltfreundlich“', 'Freundlich im Vergleich wozu?'],
              ['„30 % weniger Plastik“', 'Weniger als was – als früher, als die Konkurrenz?'],
              ['„klimaneutral bis 2050“', 'Was geschieht bis dahin?'],
              ['„CO₂-kompensiert“', 'Durch welche Projekte? Wer prüft sie?'],
              ['„natürlich“', 'Was genau ist daran natürlich?'],
            ],
          },
        },
        {
          id: 'a5-4-choice',
          type: 'CHOICE',
          instruction: 'Welche Werbeaussage ist am besten überprüfbar?',
          question: 'Wählen Sie.',
          multiple: false,
          options: [
            { id: 'w1', text: 'Unsere Verpackung ist besser für die Umwelt.' },
            { id: 'w2', text: 'Wir denken grün.' },
            { id: 'w3', text: 'Die Flasche besteht zu 50 % aus recyceltem Kunststoff; geprüft vom unabhängigen Institut X.' },
            { id: 'w4', text: 'Wir werden bis 2050 klimaneutral.' },
          ],
          solution: ['w3'],
          explanation:
            'Nur die dritte Aussage nennt eine messbare Größe und eine prüfende Stelle. Die anderen bleiben vage oder verschieben das Versprechen in die ferne Zukunft.',
        },
        {
          id: 'a5-4-match',
          type: 'MATCHING',
          instruction: 'Ordnen Sie jeder Aussage die passende kritische Frage zu.',
          left: [
            { id: 'l1', text: '„Jetzt mit 20 % weniger CO₂!“' },
            { id: 'l2', text: '„Klimaneutral dank Kompensation“' },
            { id: 'l3', text: '„100 % natürlich“' },
          ],
          right: [
            { id: 'r1', text: 'Weniger als welcher Ausgangswert?' },
            { id: 'r2', text: 'Welche Projekte, und verhindern sie wirklich zusätzliche Emissionen?' },
            { id: 'r3', text: 'Was bedeutet „natürlich“ hier konkret?' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
          ],
        },
        {
          id: 'a5-4-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie.',
          wordBank: ['Greenwashing', 'Zertifikate', 'umstritten', 'Nachweis'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Viele Firmen kaufen ' },
            { kind: 'GAP', gapId: 'k1', solution: ['Zertifikate'], width: 12 },
            { kind: 'TEXT', text: ', um ihre Emissionen auszugleichen. Ob das wirkt, ist ' },
            { kind: 'GAP', gapId: 'k2', solution: ['umstritten'], width: 11 },
            { kind: 'TEXT', text: '. Wer sich grüner darstellt, als er ist, betreibt ' },
            { kind: 'GAP', gapId: 'k3', solution: ['Greenwashing'], width: 13 },
            { kind: 'TEXT', text: '. Die EU verlangt künftig einen ' },
            { kind: 'GAP', gapId: 'k4', solution: ['Nachweis'], width: 9 },
            { kind: 'TEXT', text: ' für solche Aussagen.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – komplexe Argumentation; Schreibaufgabe.
  {
    order: 5,
    title: 'Kohärent argumentieren',
    subtitle: 'Einen komplexen Gedankengang aufbauen',
    estimatedMinutes: 34,
    content: {
      version: v,
      blocks: [
        { id: 'a5-5-h1', type: 'HEADING', level: 1, text: 'Kohärent argumentieren' },
        {
          id: 'a5-5-intro',
          type: 'TEXT',
          text: 'Ein komplexes Argument ist mehr als eine Liste von Gründen. Es verknüpft sie: Dieser Grund stützt jenen, dieser Einwand betrifft nur einen Teil, diese Bedingung gilt nur unter jener Voraussetzung. Die sprachlichen Mittel dafür sind Konnektoren – aber auch Verweise, die einen Gedanken wieder aufnehmen: „dies“, „daraus folgt“, „dieser Befund“.',
        },
        {
          id: 'a5-5-info-kohaerenz',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Mittel der Kohärenz',
          text: 'Zusammenfassende Verweise („dieser Befund“, „diese Entwicklung“) bündeln einen vorangehenden Satz in einem Nomen und machen ihn zum Ausgangspunkt des nächsten. Konnektoren im Vorfeld („Folglich“, „Allerdings“) bewirken Verbzweitstellung.',
          table: {
            headers: ['Funktion', 'Mittel'],
            rows: [
              ['Folge', 'folglich, daraus folgt, somit'],
              ['Einschränkung', 'allerdings, freilich, jedoch'],
              ['Steigerung', 'darüber hinaus, zudem, hinzu kommt'],
              ['Rückverweis', 'dies, dieser Befund, eine solche Entwicklung'],
              ['Bedingung', 'vorausgesetzt, dass …; unter der Bedingung, dass …'],
            ],
          },
        },
        {
          id: 'a5-5-ordering',
          type: 'ORDERING',
          instruction: 'Bringen Sie die Sätze in eine kohärente Reihenfolge.',
          items: [
            { id: 'o1', text: 'Der Ausbau der Windenergie ist für die Energiewende unverzichtbar.' },
            { id: 'o2', text: 'Allerdings stößt er vor Ort häufig auf Widerstand.' },
            { id: 'o3', text: 'Dieser Widerstand sinkt nachweislich, wenn die Gemeinden an den Erträgen beteiligt werden.' },
            { id: 'o4', text: 'Folglich sollte jede Genehmigung an eine solche Beteiligung geknüpft werden.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4'],
        },
        {
          id: 'a5-5-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die Zusammenfassung des Kapitels.',
          wordBank: ['Säulen', 'Kosten', 'desto', 'Konjunktiv II', 'Greenwashing', 'Folglich'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Nachhaltigkeit ruht auf drei ' },
            { kind: 'GAP', gapId: 'z1', solution: ['Säulen'], width: 7 },
            { kind: 'TEXT', text: '. Was geopfert wird, nennt „auf ' },
            { kind: 'GAP', gapId: 'z2', solution: ['Kosten'], width: 7 },
            { kind: 'TEXT', text: ' von“. „Je … ' },
            { kind: 'GAP', gapId: 'z3', solution: ['desto'], width: 6 },
            { kind: 'TEXT', text: '“ zeigt eine gleitende Beziehung. Hypothetische Szenarien stehen im ' },
            { kind: 'GAP', gapId: 'z4', solution: ['Konjunktiv II'], width: 14 },
            { kind: 'TEXT', text: '. Vage Umweltversprechen können ' },
            { kind: 'GAP', gapId: 'z5', solution: ['Greenwashing'], width: 13 },
            { kind: 'TEXT', text: ' sein. Und „' },
            { kind: 'GAP', gapId: 'z6', solution: ['Folglich'], width: 9 },
            { kind: 'TEXT', text: '“ leitet eine Schlussfolgerung ein.' },
          ],
        },
        {
          id: 'a5-5-writing',
          type: 'WRITING',
          instruction: 'Schreiben Sie eine Argumentation.',
          prompt:
            'Ihre Stadt diskutiert, die Innenstadt für private Autos zu sperren. Einzelhändler fürchten Umsatzverluste, Anwohner erhoffen sich weniger Lärm, Pendler aus dem Umland sind auf das Auto angewiesen. Schreiben Sie eine Argumentation (200–280 Wörter), die den Zielkonflikt darstellt, ein hypothetisches Szenario entwirft und zu einem Vorschlag mit Bedingung kommt. Verwenden Sie mindestens drei Mittel der Kohärenz.',
          minWords: 200,
          maxWords: 290,
          aiFeedback: true,
          sampleAnswer:
            'Eine autofreie Innenstadt verspricht vieles: weniger Lärm, sauberere Luft und mehr Platz für Menschen. Dieses Ziel ist legitim, doch es steht in einem Zielkonflikt mit zwei anderen, ebenso legitimen Interessen.\n\nZum einen fürchten die Einzelhändler, dass ihre Kundschaft ausbleibt. Diese Sorge ist verständlich, denn viele Geschäfte leben von Einkäufen, die man nicht gern zu Fuß nach Hause trägt. Zum anderen sind zahlreiche Pendler aus dem Umland auf das Auto angewiesen, weil die Busverbindungen dort schlecht sind. Eine Sperrung ginge also zunächst auf Kosten derjenigen, die am wenigsten Alternativen haben.\n\nAngenommen, die Stadt würde die Sperrung sofort und ohne Begleitmaßnahmen umsetzen: Die Luft würde besser, aber ein Teil der Kundschaft würde in Einkaufszentren am Stadtrand abwandern. Folglich hätte man den Verkehr nicht verringert, sondern nur verlagert.\n\nErfahrungen aus anderen Städten zeigen allerdings, dass Fußgängerzonen den Umsatz langfristig oft steigern, weil Menschen länger bleiben. Dieser Effekt tritt jedoch nur ein, wenn die Innenstadt gut erreichbar bleibt.\n\nIch schlage deshalb vor, die Innenstadt schrittweise zu sperren, vorausgesetzt, dass gleichzeitig Park-and-ride-Plätze am Stadtrand und dichtere Busverbindungen ins Umland geschaffen werden. Je besser diese Alternativen sind, desto geringer wird der Widerstand sein. So ließe sich das ökologische Ziel erreichen, ohne dass es allein zulasten der Pendler und Händler ginge.',
        },
      ],
    },
  },
];
