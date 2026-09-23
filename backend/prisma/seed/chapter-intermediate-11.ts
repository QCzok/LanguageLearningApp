import type { UnitSeed } from './chapter-beginner-1';

/**
 * Intermediate, Kapitel 11: „Kunst und Ästhetik“ (B2, Kapitel 5)
 *
 * Fünf Seiten. Über Kunst zu sprechen verlangt zweierlei: genau hinsehen und
 * vorsichtig deuten. Das Kapitel trennt beides bewusst – erst beschreiben,
 * was man sieht, dann sagen, was es bedeuten könnte.
 *
 * Aufbau: Seite 1 beschreibt ein Gemälde mit den Ortsangaben der
 * Bildbeschreibung. Seite 2 ist der grammatische Kern: Modalverben der
 * Vermutung („Die Frau dürfte warten“), mit denen man deutet, ohne zu
 * behaupten. Seite 3 streitet im Museum über Geschmack, Seite 4 liest eine
 * Ausstellungskritik voller bildhafter Sprache, Seite 5 wiederholt und lässt
 * ein Bild beschreiben und deuten.
 *
 * Einsprachig deutsch wie der ganze Intermediate-Band. Das Gemälde, die
 * Künstlerinnen und die Ausstellung sind erfunden, damit die Deutung offen
 * bleibt und kein Kunstwissen vorausgesetzt wird. Sämtliche Texte sind
 * eigenständig verfasst.
 */
const v = 1;

export const INTERMEDIATE_11_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – ein Bild genau beschreiben.
  {
    order: 1,
    title: 'Was sehen Sie?',
    subtitle: 'Ein Bild genau beschreiben',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'i11-1-h1', type: 'HEADING', level: 1, text: 'Was sehen Sie?' },
        {
          id: 'i11-1-image',
          type: 'IMAGE',
          url: 'illustration:portraits',
          alt: 'Mehrere gemalte Porträts nebeneinander.',
          caption: 'Wer ein Bild beschreibt, beginnt mit dem Offensichtlichen.',
        },
        {
          id: 'i11-1-text',
          type: 'TEXT',
          text: 'Das Gemälde „Bahnsteig, November“ der Malerin Ilse Hartmann stammt aus dem Jahr 1958. Es ist ein Ölbild im Hochformat, etwa einen Meter hoch.\n\nIm Vordergrund steht eine junge Frau in einem dunkelgrünen Mantel. Sie ist leicht von der Seite zu sehen und hält einen kleinen Koffer in der linken Hand. Ihr Blick ist nicht auf den Betrachter gerichtet, sondern auf etwas außerhalb des Bildes, rechts.\n\nIm Mittelgrund verlaufen die Gleise diagonal von links unten nach rechts oben. Am rechten Bildrand ist das Ende eines Zuges zu erkennen, der gerade abzufahren scheint. Im Hintergrund verschwimmen eine Bahnhofshalle und einige Figuren im Nebel.\n\nDie Farben sind gedämpft: Grau, Braun und ein bläuliches Weiß dominieren. Nur der Mantel der Frau und eine kleine rote Lampe links oben heben sich deutlich ab. Die Pinselstriche sind im Hintergrund grob und schnell, bei der Frau dagegen fein und sorgfältig.',
        },
        {
          id: 'i11-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: Bildbeschreibung',
          items: [
            {
              term: 'Vordergrund',
              article: 'der',
              translations: { en: 'foreground', es: 'el primer plano', fr: 'le premier plan', it: 'il primo piano' },
            },
            {
              term: 'Hintergrund',
              article: 'der',
              translations: { en: 'background', es: 'el fondo', fr: 'l’arrière-plan', it: 'lo sfondo' },
            },
            {
              term: 'Bildrand',
              article: 'der',
              plural: 'die Bildränder',
              translations: { en: 'edge of the picture', es: 'el borde del cuadro', fr: 'le bord du tableau', it: 'il bordo del quadro' },
            },
            {
              term: 'Betrachter',
              article: 'der',
              plural: 'die Betrachter',
              translations: { en: 'viewer', es: 'el espectador', fr: 'le spectateur', it: 'l’osservatore' },
            },
            {
              term: 'gedämpft',
              translations: { en: 'muted, subdued', es: 'apagado, suave', fr: 'atténué, sourd', it: 'smorzato, tenue' },
              example: 'gedämpfte Farben',
            },
            {
              term: 'sich abheben (von + Dat.)',
              translations: { en: 'to stand out (from)', es: 'destacar (de)', fr: 'se détacher (de)', it: 'risaltare (su)' },
            },
            {
              term: 'Pinselstrich',
              article: 'der',
              plural: 'die Pinselstriche',
              translations: { en: 'brushstroke', es: 'la pincelada', fr: 'le coup de pinceau', it: 'la pennellata' },
            },
            {
              term: 'verschwimmen',
              translations: { en: 'to blur', es: 'difuminarse', fr: 'devenir flou', it: 'sfumare, confondersi' },
            },
            {
              term: 'wirken',
              translations: { en: 'to seem, to have an effect', es: 'parecer, causar efecto', fr: 'sembler, faire effet', it: 'sembrare, fare effetto' },
              example: 'Das Bild wirkt ruhig und zugleich traurig.',
            },
          ],
        },
        {
          id: 'i11-1-info-beschreiben',
          type: 'INFO',
          variant: 'TIP',
          title: 'Ordnung in der Bildbeschreibung',
          text: 'Eine Bildbeschreibung beginnt mit den Basisdaten (Titel, Künstlerin, Jahr, Technik, Format). Dann geht sie systematisch vor – vom Vordergrund zum Hintergrund oder vom Zentrum zum Rand – und beschreibt zum Schluss Farben, Licht und Malweise. Sie steht im Präsens und bleibt sachlich: Die Deutung folgt erst danach.',
          table: {
            headers: ['Position', 'Ausdruck'],
            rows: [
              ['vorn / hinten', 'im Vordergrund / im Mittelgrund / im Hintergrund'],
              ['Seiten', 'am linken / rechten Bildrand, in der linken Bildhälfte'],
              ['oben / unten', 'links oben, rechts unten, am oberen Bildrand'],
              ['Mitte', 'im Zentrum, in der Bildmitte'],
              ['Richtung', 'verläuft diagonal / waagerecht / senkrecht'],
            ],
          },
        },
        {
          id: 'i11-1-match',
          type: 'MATCHING',
          instruction: 'Wo ist was auf dem Bild?',
          left: [
            { id: 'l1', text: 'die junge Frau' },
            { id: 'l2', text: 'die Gleise' },
            { id: 'l3', text: 'das Ende eines Zuges' },
            { id: 'l4', text: 'die rote Lampe' },
          ],
          right: [
            { id: 'r1', text: 'im Vordergrund' },
            { id: 'r2', text: 'im Mittelgrund, diagonal' },
            { id: 'r3', text: 'am rechten Bildrand' },
            { id: 'r4', text: 'links oben' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'i11-1-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie mit den Wörtern aus dem Kasten.',
          wordBank: ['Hintergrund', 'hebt', 'gedämpft', 'Betrachter', 'Bildmitte'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'In der ' },
            { kind: 'GAP', gapId: 'c1', solution: ['Bildmitte'], width: 10 },
            { kind: 'TEXT', text: ' sitzt ein alter Mann auf einer Bank. Er schaut den ' },
            { kind: 'GAP', gapId: 'c2', solution: ['Betrachter'], width: 11 },
            { kind: 'TEXT', text: ' direkt an. Im ' },
            { kind: 'GAP', gapId: 'c3', solution: ['Hintergrund'], width: 12 },
            { kind: 'TEXT', text: ' sieht man einen Park. Die Farben sind ' },
            { kind: 'GAP', gapId: 'c4', solution: ['gedämpft', 'gedaempft'], width: 9 },
            { kind: 'TEXT', text: ', nur ein gelber Schal ' },
            { kind: 'GAP', gapId: 'c5', solution: ['hebt'], width: 5 },
            { kind: 'TEXT', text: ' sich deutlich ab.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – Modalverben der Vermutung.
  {
    order: 2,
    title: 'Sie dürfte auf jemanden warten',
    subtitle: 'Vermutungen mit Modalverben',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'i11-2-h1', type: 'HEADING', level: 1, text: 'Sie dürfte auf jemanden warten' },
        {
          id: 'i11-2-text',
          type: 'TEXT',
          text: 'Drei Besucherinnen stehen vor dem Bild „Bahnsteig, November“:\n\nLea: „Die Frau muss gerade jemanden verabschiedet haben. Sie schaut dem Zug hinterher.“\n\nSara: „Hm, der Koffer spricht dagegen. Sie dürfte eher selbst verreisen wollen – vielleicht hat sie ihren Zug verpasst.“\n\nMarta: „Oder sie wartet auf jemanden, der nicht kommt. Das könnte auch den traurigen Ausdruck erklären. Glücklich kann sie jedenfalls nicht sein – dafür ist alles viel zu grau.“\n\nKeine der drei weiß es sicher. Aber jede zeigt mit ihrem Modalverb, wie sicher sie sich ist.',
        },
        {
          id: 'i11-2-info-vermutung',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Modalverben der Vermutung',
          text: 'Modalverben können nicht nur Pflicht oder Möglichkeit ausdrücken, sondern auch, wie sicher sich der Sprecher ist. Für eine Vermutung über die Gegenwart steht das Modalverb mit dem Infinitiv. Für eine Vermutung über die Vergangenheit steht es mit dem Infinitiv Perfekt: Partizip II + haben/sein.',
          table: {
            headers: ['Sicherheit', 'Modalverb', 'Beispiel'],
            rows: [
              ['fast sicher (ca. 90 %)', 'müssen', 'Sie muss traurig sein. / Sie muss jemanden verabschiedet haben.'],
              ['wahrscheinlich (ca. 75 %)', 'dürfte (Konjunktiv II)', 'Das Bild dürfte in den 50er-Jahren entstanden sein.'],
              ['möglich (ca. 50 %)', 'können / könnte', 'Sie könnte auf jemanden warten.'],
              ['fast sicher nicht', 'nicht können', 'Glücklich kann sie nicht sein.'],
            ],
          },
        },
        {
          id: 'i11-2-info-andere',
          type: 'INFO',
          variant: 'TIP',
          title: 'Ohne Modalverb vermuten',
          text: 'Dieselben Abstufungen gehen auch mit Adverbien: bestimmt / sicher (fast sicher), wahrscheinlich / vermutlich (wahrscheinlich), vielleicht / möglicherweise (möglich). „Sie wartet vermutlich auf jemanden“ bedeutet also ungefähr dasselbe wie „Sie dürfte auf jemanden warten“.',
        },
        {
          id: 'i11-2-match',
          type: 'MATCHING',
          instruction: 'Welcher Satz mit Adverb entspricht dem Satz mit Modalverb?',
          left: [
            { id: 'l1', text: 'Er muss müde sein.' },
            { id: 'l2', text: 'Er dürfte müde sein.' },
            { id: 'l3', text: 'Er könnte müde sein.' },
            { id: 'l4', text: 'Er kann nicht müde sein.' },
          ],
          right: [
            { id: 'r1', text: 'Er ist bestimmt müde.' },
            { id: 'r2', text: 'Er ist wahrscheinlich müde.' },
            { id: 'r3', text: 'Er ist vielleicht müde.' },
            { id: 'r4', text: 'Er ist sicher nicht müde.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'i11-2-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie das passende Modalverb.',
          wordBank: ['muss', 'dürfte', 'könnte', 'kann', 'müssen'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Die Malerin hat den Bahnhof sehr genau gemalt. Sie ' },
            { kind: 'GAP', gapId: 'm1', solution: ['muss'], width: 7 },
            { kind: 'TEXT', text: ' ihn gut gekannt haben. (fast sicher)\n2. Das Bild ' },
            { kind: 'GAP', gapId: 'm2', solution: ['dürfte', 'duerfte'], width: 7 },
            { kind: 'TEXT', text: ' heute sehr wertvoll sein. (wahrscheinlich)\n3. Die rote Lampe ' },
            { kind: 'GAP', gapId: 'm3', solution: ['könnte', 'koennte'], width: 7 },
            { kind: 'TEXT', text: ' ein Symbol für Hoffnung sein. (möglich)\n4. Das ' },
            { kind: 'GAP', gapId: 'm4', solution: ['kann'], width: 7 },
            { kind: 'TEXT', text: ' kein Sommertag sein – alle tragen Mäntel. (fast sicher nicht)\n5. Die Besucher ' },
            { kind: 'GAP', gapId: 'm5', solution: ['müssen', 'muessen'], width: 7 },
            { kind: 'TEXT', text: ' lange vor dem Bild gestanden haben – der Boden ist ganz abgenutzt. (fast sicher)' },
          ],
        },
        {
          id: 'i11-2-choice',
          type: 'CHOICE',
          instruction: 'Vermutung über die Vergangenheit – welcher Satz ist korrekt?',
          question: 'Wahrscheinlich hat die Malerin selbst oft an diesem Bahnhof gewartet.',
          multiple: false,
          options: [
            { id: 'a1', text: 'Die Malerin dürfte selbst oft an diesem Bahnhof gewartet haben.' },
            { id: 'a2', text: 'Die Malerin dürfte selbst oft an diesem Bahnhof gewartet.' },
            { id: 'a3', text: 'Die Malerin hat selbst oft an diesem Bahnhof warten dürfen.' },
            { id: 'a4', text: 'Die Malerin dürfte selbst oft an diesem Bahnhof warten haben.' },
          ],
          solution: ['a1'],
          explanation:
            'Für die Vergangenheit steht das Modalverb mit dem Infinitiv Perfekt: gewartet haben. Satz a3 ist grammatisch korrekt, bedeutet aber etwas anderes: Sie hatte die Erlaubnis zu warten.',
        },
        {
          id: 'i11-2-order',
          type: 'ORDERING',
          instruction: 'Bilden Sie eine Vermutung über die Vergangenheit.',
          items: [
            { id: 'o1', text: 'Der Zug' },
            { id: 'o2', text: 'muss' },
            { id: 'o3', text: 'gerade' },
            { id: 'o4', text: 'abgefahren' },
            { id: 'o5', text: 'sein.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5'],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – über Geschmack streiten.
  {
    order: 3,
    title: 'Ist das Kunst?',
    subtitle: 'Geschmack differenziert begründen',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'i11-3-h1', type: 'HEADING', level: 1, text: 'Ist das Kunst?' },
        {
          id: 'i11-3-intro',
          type: 'TEXT',
          text: 'Im Museum für Gegenwartskunst stehen Oskar und Hanna vor einer Installation der Künstlerin Mira Solt: 200 alte Wecker, alle auf dieselbe Uhrzeit gestellt, ticken in einem dunklen Raum.',
        },
        {
          id: 'i11-3-dlg',
          type: 'DIALOGUE',
          title: 'Vor der Installation',
          lines: [
            { speaker: 'Oskar', text: 'Also ehrlich, das hätte ich auch gekonnt. Wecker vom Flohmarkt in einen Raum stellen – was soll daran Kunst sein?' },
            { speaker: 'Hanna', text: 'Ich verstehe, was du meinst. Aber für mich zählt nicht, wie schwer etwas herzustellen ist, sondern was es mit mir macht.' },
            { speaker: 'Oskar', text: 'Und was macht es mit dir?' },
            { speaker: 'Hanna', text: 'Mich spricht das total an. Dieses Ticken erzeugt so eine Unruhe. Man hat das Gefühl, die Zeit läuft einem davon. Das berührt mich mehr als manches schöne Landschaftsbild.' },
            { speaker: 'Oskar', text: 'Das mag ja sein, aber ich finde es ziemlich beliebig. Man könnte alles Mögliche hineininterpretieren.' },
            { speaker: 'Hanna', text: 'Das stimmt teilweise. Gerade das finde ich aber reizvoll – jeder sieht etwas anderes darin.' },
            { speaker: 'Oskar', text: 'Na gut, ich gebe zu, der Raum hat eine gewisse Atmosphäre. Aber aufhängen würde ich mir so etwas nicht.' },
            { speaker: 'Hanna', text: 'Aufhängen kann man Wecker ja auch schlecht.' },
          ],
        },
        {
          id: 'i11-3-info-geschmack',
          type: 'INFO',
          variant: 'TIP',
          title: 'Geschmack begründen',
          text: '„Gefällt mir“ oder „gefällt mir nicht“ ist noch keine Begründung. Auf B2 sagen Sie, was genau Sie anspricht oder stört – und woran das liegt: an der Wirkung, der Idee, der Technik oder an Ihrer eigenen Erfahrung. Sie können auch einräumen, was Sie an einem Werk schätzen, obwohl es Ihnen nicht gefällt.',
          table: {
            headers: ['Zweck', 'Redemittel'],
            rows: [
              ['positiv', 'Mich spricht … an. / Mich berührt / fasziniert, dass … / Ich finde … reizvoll.'],
              ['negativ', 'Mir sagt … nichts. / Ich finde es beliebig / oberflächlich / kitschig.'],
              ['begründen', 'Das liegt vor allem daran, dass … / Für mich zählt …, nicht …'],
              ['einräumen', 'Ich gebe zu, dass … / Auch wenn es nicht mein Geschmack ist, …'],
            ],
          },
        },
        {
          id: 'i11-3-match',
          type: 'MATCHING',
          instruction: 'Wer sagt was – und wie?',
          left: [
            { id: 'l1', text: 'Oskar zweifelt, dass es Kunst ist.' },
            { id: 'l2', text: 'Hanna begründet, was für sie zählt.' },
            { id: 'l3', text: 'Hanna beschreibt die Wirkung.' },
            { id: 'l4', text: 'Oskar räumt etwas ein.' },
          ],
          right: [
            { id: 'r1', text: '„Was soll daran Kunst sein?“' },
            { id: 'r2', text: '„Für mich zählt nicht, wie schwer etwas herzustellen ist, …“' },
            { id: 'r3', text: '„Dieses Ticken erzeugt so eine Unruhe.“' },
            { id: 'r4', text: '„Ich gebe zu, der Raum hat eine gewisse Atmosphäre.“' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'i11-3-choice',
          type: 'CHOICE',
          instruction: 'Lesen Sie das Gespräch noch einmal.',
          question: 'Wie ist Hannas letzter Satz gemeint?',
          multiple: false,
          options: [
            { id: 'a1', text: 'Sie ist verärgert und beendet das Gespräch.' },
            { id: 'a2', text: 'Sie macht einen Witz: Eine Installation aus Weckern ist kein Bild für die Wand.' },
            { id: 'a3', text: 'Sie gibt Oskar recht, dass die Installation schlecht ist.' },
            { id: 'a4', text: 'Sie möchte die Wecker kaufen.' },
          ],
          solution: ['a2'],
          explanation:
            'Oskar sagt „aufhängen würde ich mir so etwas nicht“ und meint: Das würde ich nicht besitzen wollen. Hanna nimmt „aufhängen“ wörtlich – ein freundlicher, ironischer Schluss.',
        },
        {
          id: 'i11-3-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die Meinung über ein anderes Werk.',
          wordBank: ['spricht', 'liegt', 'gebe', 'kitschig', 'zählt'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Das große Blumenbild im ersten Saal ' },
            { kind: 'GAP', gapId: 'g1', solution: ['spricht'], width: 8 },
            { kind: 'TEXT', text: ' mich überhaupt nicht an. Ich finde es ziemlich ' },
            { kind: 'GAP', gapId: 'g2', solution: ['kitschig'], width: 9 },
            { kind: 'TEXT', text: '. Das ' },
            { kind: 'GAP', gapId: 'g3', solution: ['liegt'], width: 6 },
            { kind: 'TEXT', text: ' vor allem an den grellen Farben. Für mich ' },
            { kind: 'GAP', gapId: 'g4', solution: ['zählt', 'zaehlt'], width: 6 },
            { kind: 'TEXT', text: ' eine Idee mehr als Dekoration. Ich ' },
            { kind: 'GAP', gapId: 'g5', solution: ['gebe'], width: 5 },
            { kind: 'TEXT', text: ' aber zu, dass die Malerin technisch sehr viel kann.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – bildhafte Sprache in einer Ausstellungskritik.
  {
    order: 4,
    title: 'Ein Fest für die Augen',
    subtitle: 'Bildhafte Sprache verstehen',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'i11-4-h1', type: 'HEADING', level: 1, text: 'Ein Fest für die Augen' },
        {
          id: 'i11-4-text',
          type: 'TEXT',
          text: 'Ausstellungskritik: „Licht und Schatten“ in der Kunsthalle\n\nWer die neue Ausstellung der Kunsthalle betritt, taucht in ein Meer aus Farben ein. Die rund 80 Werke der Malerin Ilse Hartmann sind ein Fest für die Augen – und zugleich eine Reise durch ein Jahrhundert.\n\nBesonders ins Auge springt ihr Spätwerk. Die Bilder aus den 70er-Jahren explodieren förmlich vor Farbe, als hätte die Malerin nach Jahrzehnten der Zurückhaltung endlich die Fesseln abgeworfen. Die frühen Bahnhofsbilder wirken daneben fast wie ein leises Flüstern.\n\nDoch nicht alles glänzt. Die Hängung ist streckenweise so dicht, dass einzelne Werke im Gedränge untergehen. Und die Begleittexte sind so trocken wie Wüstensand: Wer nicht Kunstgeschichte studiert hat, bleibt oft ratlos zurück.\n\nTrotzdem: Diese Ausstellung stellt vieles in den Schatten, was in den letzten Jahren zu sehen war. Wer sie verpasst, ist selbst schuld.',
        },
        {
          id: 'i11-4-info-bilder',
          type: 'INFO',
          variant: 'TIP',
          title: 'Metapher, Vergleich, Redewendung',
          text: 'Kritiken, Werbung und Literatur sprechen gern in Bildern. Ein Vergleich macht das Bild sichtbar – mit „wie“ oder „als ob“: trocken wie Wüstensand. Eine Metapher lässt das „wie“ weg: ein Meer aus Farben. Redewendungen sind feste Bilder, deren Bedeutung man lernen muss: etwas stellt etwas anderes in den Schatten (ist viel besser).',
          table: {
            headers: ['Bild', 'Bedeutung'],
            rows: [
              ['ins Auge springen', 'sofort auffallen'],
              ['ein Fest für die Augen', 'sehr schön anzusehen'],
              ['die Fesseln abwerfen', 'sich befreien'],
              ['im Gedränge untergehen', 'zwischen vielem anderen nicht bemerkt werden'],
              ['etwas in den Schatten stellen', 'viel besser sein als etwas'],
            ],
          },
        },
        {
          id: 'i11-4-choice',
          type: 'CHOICE',
          instruction: 'Lesen Sie die Kritik.',
          question: 'Wie bewertet die Kritikerin die Ausstellung insgesamt?',
          multiple: false,
          options: [
            { id: 'a1', text: 'sehr positiv, trotz einiger Schwächen' },
            { id: 'a2', text: 'eher negativ, weil die Texte schlecht sind' },
            { id: 'a3', text: 'neutral – sie beschreibt nur' },
            { id: 'a4', text: 'nur das Frühwerk gefällt ihr' },
          ],
          solution: ['a1'],
          explanation:
            'Sie kritisiert Hängung und Begleittexte, doch der Schluss ist eindeutig: Die Ausstellung „stellt vieles in den Schatten“, und wer sie verpasst, „ist selbst schuld“.',
        },
        {
          id: 'i11-4-match',
          type: 'MATCHING',
          instruction: 'Was ist gemeint?',
          left: [
            { id: 'l1', text: 'Die Bilder explodieren förmlich vor Farbe.' },
            { id: 'l2', text: 'Die Begleittexte sind so trocken wie Wüstensand.' },
            { id: 'l3', text: 'Die frühen Bilder wirken wie ein leises Flüstern.' },
            { id: 'l4', text: 'Doch nicht alles glänzt.' },
          ],
          right: [
            { id: 'r1', text: 'Die Bilder sind sehr bunt und intensiv.' },
            { id: 'r2', text: 'Die Texte sind langweilig und schwer zu lesen.' },
            { id: 'r3', text: 'Die frühen Bilder sind zurückhaltend und ruhig.' },
            { id: 'r4', text: 'Es gibt auch Schwächen.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'i11-4-choice-2',
          type: 'CHOICE',
          instruction: 'Vergleich oder Metapher? Welche Ausdrücke sind Vergleiche? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'b1', text: 'trocken wie Wüstensand' },
            { id: 'b2', text: 'ein Meer aus Farben' },
            { id: 'b3', text: 'als hätte die Malerin die Fesseln abgeworfen' },
            { id: 'b4', text: 'eine Reise durch ein Jahrhundert' },
          ],
          solution: ['b1', 'b3'],
          explanation:
            'Vergleiche erkennt man an „wie“ oder „als (ob)“. „Ein Meer aus Farben“ und „eine Reise durch ein Jahrhundert“ sind Metaphern – das Bild steht ohne Vergleichswort.',
        },
        {
          id: 'i11-4-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die Redewendungen.',
          wordBank: ['Auge', 'Schatten', 'Fest', 'untergegangen'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Der neue Konzertsaal ist ein ' },
            { kind: 'GAP', gapId: 'b1', solution: ['Fest'], width: 5 },
            { kind: 'TEXT', text: ' für die Augen. Sofort ins ' },
            { kind: 'GAP', gapId: 'b2', solution: ['Auge'], width: 5 },
            { kind: 'TEXT', text: ' springt die geschwungene Decke. Der Bau stellt alle anderen Gebäude der Stadt in den ' },
            { kind: 'GAP', gapId: 'b3', solution: ['Schatten'], width: 9 },
            { kind: 'TEXT', text: '. Nur der kleine Eingang ist zwischen den vielen Glasfassaden fast ' },
            { kind: 'GAP', gapId: 'b4', solution: ['untergegangen'], width: 14 },
            { kind: 'TEXT', text: '.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – Rückblick auf Kapitel 11.
  {
    order: 5,
    title: 'Kannst du das schon?',
    subtitle: 'Rückblick, ein Bild beschreiben und deuten',
    estimatedMinutes: 27,
    content: {
      version: v,
      blocks: [
        { id: 'i11-5-h1', type: 'HEADING', level: 1, text: 'Kannst du das schon?' },
        {
          id: 'i11-5-intro',
          type: 'TEXT',
          text: 'Prüfen Sie, was Sie aus Kapitel 11 mitnehmen: die Bildbeschreibung, Vermutungen mit Modalverben, das Begründen von Geschmack und bildhafte Sprache.',
        },
        {
          id: 'i11-5-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie den Text.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Im ' },
            { kind: 'GAP', gapId: 'r1', solution: ['Vordergrund'], width: 12 },
            { kind: 'TEXT', text: ' des Fotos sieht man zwei Kinder am Strand. Sie ' },
            { kind: 'GAP', gapId: 'r2', solution: ['dürften', 'duerften'], width: 8 },
            { kind: 'TEXT', text: ' Geschwister sein – sie sehen sich sehr ähnlich. Der Himmel ist dunkel, es ' },
            { kind: 'GAP', gapId: 'r3', solution: ['muss', 'könnte', 'koennte', 'dürfte', 'duerfte', 'kann'], width: 7 },
            { kind: 'TEXT', text: ' gleich regnen. Nur ein roter Eimer ' },
            { kind: 'GAP', gapId: 'r4', solution: ['hebt'], width: 5 },
            { kind: 'TEXT', text: ' sich von den grauen Farben ab. Das Foto ' },
            { kind: 'GAP', gapId: 'r5', solution: ['wirkt'], width: 6 },
            { kind: 'TEXT', text: ' auf mich zugleich fröhlich und melancholisch.' },
          ],
        },
        {
          id: 'i11-5-choice',
          type: 'CHOICE',
          instruction: 'Welche Vermutungen sind grammatisch korrekt? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'k1', text: 'Das Bild dürfte sehr alt sein.' },
            { id: 'k2', text: 'Der Maler muss viel gereist sein.' },
            { id: 'k3', text: 'Sie könnte das Foto selbst gemacht.' },
            { id: 'k4', text: 'Das kann nicht die Originalfassung sein.' },
          ],
          solution: ['k1', 'k2', 'k4'],
          explanation: 'Für die Vergangenheit braucht das Modalverb den Infinitiv Perfekt: Sie könnte das Foto selbst gemacht haben.',
        },
        {
          id: 'i11-5-match',
          type: 'MATCHING',
          instruction: 'Welche Bedeutung hat das Bild?',
          left: [
            { id: 'm1', text: 'ins Auge springen' },
            { id: 'm2', text: 'in den Schatten stellen' },
            { id: 'm3', text: 'im Gedränge untergehen' },
            { id: 'm4', text: 'ein Fest für die Augen' },
          ],
          right: [
            { id: 'y1', text: 'sofort auffallen' },
            { id: 'y2', text: 'viel besser sein' },
            { id: 'y3', text: 'nicht bemerkt werden' },
            { id: 'y4', text: 'sehr schön anzusehen' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'y1' },
            { leftId: 'm2', rightId: 'y2' },
            { leftId: 'm3', rightId: 'y3' },
            { leftId: 'm4', rightId: 'y4' },
          ],
        },
        {
          id: 'i11-5-writing',
          type: 'WRITING',
          instruction: 'Ein Bild beschreiben und deuten',
          prompt:
            'Wählen Sie ein Bild, das Sie gut kennen – ein Gemälde, ein Foto oder ein Plakat – oder nehmen Sie das Bild „Bahnsteig, November“ von Seite 1. Beschreiben Sie es systematisch (Basisdaten, Vordergrund, Hintergrund, Farben). Deuten Sie es dann: Was könnte es bedeuten, wie wirkt es? Sagen Sie am Ende, ob es Ihnen gefällt, und begründen Sie das. Verwenden Sie mindestens zwei Modalverben der Vermutung.',
          minWords: 150,
          maxWords: 280,
          aiFeedback: true,
          sampleAnswer:
            'Das Gemälde „Bahnsteig, November“ von Ilse Hartmann stammt aus dem Jahr 1958. Es ist ein Ölbild im Hochformat.\n\nIm Vordergrund steht eine junge Frau in einem dunkelgrünen Mantel mit einem kleinen Koffer. Sie blickt nach rechts, aus dem Bild heraus. Im Mittelgrund verlaufen Gleise diagonal durch das Bild, am rechten Bildrand fährt ein Zug ab. Der Hintergrund mit der Bahnhofshalle verschwimmt im Nebel. Die Farben sind gedämpft; nur der Mantel und eine rote Lampe links oben heben sich ab.\n\nDie Frau dürfte auf jemanden warten, der nicht gekommen ist. Da sie einen Koffer trägt, könnte sie aber auch ihren eigenen Zug verpasst haben. Glücklich kann sie jedenfalls nicht sein – die grauen Farben und der Nebel erzeugen eine melancholische Stimmung. Die rote Lampe könnte ein kleines Zeichen der Hoffnung sein.\n\nMich spricht das Bild sehr an. Das liegt vor allem daran, dass es eine Geschichte erzählt, ohne sie zu Ende zu erzählen. Als Betrachter muss man selbst entscheiden, was passiert ist – und genau das finde ich reizvoll.',
        },
      ],
    },
  },
];
