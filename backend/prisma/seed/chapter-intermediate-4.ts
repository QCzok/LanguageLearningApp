import type { UnitSeed } from './chapter-beginner-1';

/**
 * Intermediate, Kapitel 4: „Gesundheit und Lebensstil“ (B1, Kapitel 4)
 *
 * Fünf Seiten. Essen, Bewegung, Schlaf, Stress – Themen, bei denen jeder
 * mitreden kann und jeder einen Rat hat. Genau dafür braucht man den
 * Konjunktiv II: um Ratschläge höflich zu verpacken und um über das zu
 * sprechen, was man tun würde, wenn … .
 *
 * Aufbau: Seite 1 liest eine Umfrage zum Lebensstil und sammelt Wortschatz,
 * Seite 2 bringt Ratschläge mit „sollte“, „könnte“ und „an deiner Stelle
 * würde ich“, Seite 3 irreale Bedingungen und Wünsche mit „wenn“ und
 * „hätte/wäre/würde“. Seite 4 ist ein Zeitungsartikel über das Sitzen,
 * Seite 5 der Rückblick mit einer Rat-E-Mail.
 *
 * Der Konjunktiv II steht auf zwei Seiten, weil der Rat (Seite 2) im Alltag
 * viel häufiger vorkommt als die irreale Bedingung (Seite 3) und deshalb
 * zuerst und für sich geübt wird. Die Formen der Vergangenheit („hätte …
 * gemacht“) folgen im Grammatikbuch, Kapitel 12.
 *
 * Einsprachig deutsch wie der ganze Intermediate-Band. Personen, Studien
 * und Zahlen im Zeitungsartikel sind erfunden bzw. gerundet; sämtliche
 * Texte sind eigenständig verfasst. Die Inhalte ersetzen keine ärztliche
 * Beratung.
 */
const v = 1;

export const INTERMEDIATE_4_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – eine Umfrage zum Lebensstil.
  {
    order: 1,
    title: 'Wie gesund leben Sie?',
    subtitle: 'Ernährung, Bewegung, Schlaf',
    estimatedMinutes: 23,
    content: {
      version: v,
      blocks: [
        { id: 'i4-1-h1', type: 'HEADING', level: 1, text: 'Wie gesund leben Sie?' },
        {
          id: 'i4-1-image',
          type: 'IMAGE',
          url: 'illustration:market-stall',
          alt: 'Ein Marktstand mit frischem Obst und Gemüse.',
          caption: 'Frisch vom Markt – für viele der erste Schritt zu einer gesünderen Ernährung.',
        },
        {
          id: 'i4-1-text',
          type: 'TEXT',
          text: 'Eine Stadtzeitung hat Menschen auf der Straße gefragt: „Was tun Sie für Ihre Gesundheit?“\n\nBirgit, 58: „Seit ich in Rente bin, gehe ich jeden Morgen eine Stunde walken. Außerdem koche ich fast immer selbst, mit viel Gemüse. Fertiggerichte kommen bei mir nicht auf den Tisch.“\n\nKevin, 22: „Ehrlich gesagt: nicht viel. Ich esse oft Fast Food, weil es schnell geht, und nachts sitze ich lange am Computer. Ich weiß, dass ich mehr schlafen sollte. Aber immerhin fahre ich überall mit dem Fahrrad hin.“\n\nMonika, 41: „Ich achte sehr auf meine Ernährung, aber mein Problem ist der Stress. Ich arbeite Vollzeit, habe zwei Kinder und komme kaum zur Ruhe. Einmal pro Woche mache ich Yoga, das ist meine Stunde nur für mich.“\n\nDragan, 35: „Ich spiele zweimal pro Woche Fußball im Verein und habe vor einem Jahr mit dem Rauchen aufgehört. Das war das Beste, was ich je für meine Gesundheit getan habe.“',
        },
        {
          id: 'i4-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: Gesund leben',
          items: [
            {
              term: 'Ernährung',
              article: 'die',
              translations: { en: 'diet, nutrition', es: 'la alimentación', fr: 'l’alimentation', it: 'l’alimentazione' },
            },
            {
              term: 'auf etwas achten',
              translations: { en: 'to pay attention to sth.', es: 'prestar atención a algo', fr: 'faire attention à qc', it: 'fare attenzione a qc' },
              example: 'Ich achte darauf, wenig Zucker zu essen.',
            },
            {
              term: 'Fertiggericht',
              article: 'das',
              plural: 'die Fertiggerichte',
              translations: { en: 'ready meal', es: 'el plato precocinado', fr: 'le plat préparé', it: 'il piatto pronto' },
            },
            {
              term: 'sich bewegen',
              translations: { en: 'to exercise, to move', es: 'moverse, hacer ejercicio', fr: 'bouger', it: 'muoversi' },
              example: 'Ich bewege mich zu wenig.',
            },
            {
              term: 'Bewegung',
              article: 'die',
              translations: { en: 'exercise, physical activity', es: 'el ejercicio', fr: 'l’activité physique', it: 'l’attività fisica' },
            },
            {
              term: 'mit etwas aufhören',
              translations: { en: 'to stop doing sth.', es: 'dejar de hacer algo', fr: 'arrêter de faire qc', it: 'smettere di fare qc' },
              example: 'Er hat mit dem Rauchen aufgehört.',
            },
            {
              term: 'zur Ruhe kommen',
              translations: { en: 'to get some rest, to unwind', es: 'relajarse', fr: 'trouver le calme', it: 'rilassarsi' },
            },
            {
              term: 'Stress',
              article: 'der',
              translations: { en: 'stress', es: 'el estrés', fr: 'le stress', it: 'lo stress' },
            },
            {
              term: 'ausgewogen',
              translations: { en: 'balanced', es: 'equilibrado', fr: 'équilibré', it: 'equilibrato' },
              example: 'eine ausgewogene Ernährung',
            },
            {
              term: 'Verein',
              article: 'der',
              plural: 'die Vereine',
              translations: { en: 'club, association', es: 'el club', fr: 'le club, l’association', it: 'l’associazione, il club' },
            },
          ],
        },
        {
          id: 'i4-1-match',
          type: 'MATCHING',
          instruction: 'Wer sagt das?',
          left: [
            { id: 'l1', text: 'Birgit' },
            { id: 'l2', text: 'Kevin' },
            { id: 'l3', text: 'Monika' },
            { id: 'l4', text: 'Dragan' },
          ],
          right: [
            { id: 'r1', text: 'Ich koche lieber selbst, als Fertiggerichte zu kaufen.' },
            { id: 'r2', text: 'Ich schlafe zu wenig.' },
            { id: 'r3', text: 'Ich habe zu wenig Zeit für mich selbst.' },
            { id: 'r4', text: 'Ich rauche nicht mehr.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'i4-1-choice',
          type: 'CHOICE',
          instruction: 'Lesen Sie die Umfrage noch einmal.',
          question: 'Was macht Kevin trotzdem gut für seine Gesundheit?',
          multiple: false,
          options: [
            { id: 'a1', text: 'Er kocht jeden Tag frisch.' },
            { id: 'a2', text: 'Er fährt überall mit dem Fahrrad.' },
            { id: 'a3', text: 'Er macht einmal pro Woche Yoga.' },
            { id: 'a4', text: 'Er geht früh schlafen.' },
          ],
          solution: ['a2'],
          explanation:
            'Kevin sagt: „Aber immerhin fahre ich überall mit dem Fahrrad hin.“ Mit „immerhin“ nennt man etwas Positives trotz vieler negativer Punkte.',
        },
        {
          id: 'i4-1-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie mit den Wörtern aus dem Kasten.',
          wordBank: ['achte', 'aufgehört', 'bewege', 'ausgewogen', 'Ruhe'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Letztes Jahr habe ich mit dem Rauchen ' },
            { kind: 'GAP', gapId: 'c1', solution: ['aufgehört', 'aufgehoert'], width: 10 },
            { kind: 'TEXT', text: '. Seitdem ' },
            { kind: 'GAP', gapId: 'c2', solution: ['achte'], width: 6 },
            { kind: 'TEXT', text: ' ich auch mehr auf meine Ernährung: Ich esse ' },
            { kind: 'GAP', gapId: 'c3', solution: ['ausgewogen'], width: 11 },
            { kind: 'TEXT', text: ' und kaufe kaum noch Süßigkeiten. Ich ' },
            { kind: 'GAP', gapId: 'c4', solution: ['bewege'], width: 7 },
            { kind: 'TEXT', text: ' mich jeden Tag mindestens 30 Minuten. Nur abends komme ich schwer zur ' },
            { kind: 'GAP', gapId: 'c5', solution: ['Ruhe'], width: 5 },
            { kind: 'TEXT', text: '.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – Ratschläge mit dem Konjunktiv II.
  {
    order: 2,
    title: 'An deiner Stelle würde ich …',
    subtitle: 'Ratschläge geben',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'i4-2-h1', type: 'HEADING', level: 1, text: 'An deiner Stelle würde ich …' },
        {
          id: 'i4-2-dlg',
          type: 'DIALOGUE',
          title: 'In der Mittagspause',
          lines: [
            { speaker: 'Monika', text: 'Ich bin total erschöpft. Nachts schlafe ich schlecht, und tagsüber bin ich müde.' },
            { speaker: 'Julia', text: 'Oh je. Trinkst du abends noch Kaffee?' },
            { speaker: 'Monika', text: 'Manchmal, ja. Und ich schaue oft bis Mitternacht aufs Handy.' },
            { speaker: 'Julia', text: 'Dann solltest du das Handy eine Stunde vor dem Schlafen weglegen. An deiner Stelle würde ich nach 16 Uhr auch keinen Kaffee mehr trinken.' },
            { speaker: 'Monika', text: 'Das klingt vernünftig. Aber ich kann trotzdem nicht abschalten.' },
            { speaker: 'Julia', text: 'Du könntest abends einen Spaziergang machen. Mir hilft das sehr. Und vielleicht wäre es gut, mal mit deinem Chef über die Überstunden zu sprechen.' },
            { speaker: 'Monika', text: 'Du hast recht. Ich probiere das mit dem Spaziergang heute Abend aus.' },
          ],
        },
        {
          id: 'i4-2-info-rat',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Ratschläge mit dem Konjunktiv II',
          text: 'Mit dem Konjunktiv II klingt ein Rat höflich und nicht wie ein Befehl. Am häufigsten sind „sollte“ (der Rat selbst), „könnte“ (ein Vorschlag) und „würde“ + Infinitiv (was man selbst tun würde). „Es wäre gut, wenn …“ ist besonders vorsichtig.',
          table: {
            headers: ['', 'sollen', 'können', 'werden'],
            rows: [
              ['ich', 'sollte', 'könnte', 'würde'],
              ['du', 'solltest', 'könntest', 'würdest'],
              ['er/sie/es', 'sollte', 'könnte', 'würde'],
              ['wir', 'sollten', 'könnten', 'würden'],
              ['ihr', 'solltet', 'könntet', 'würdet'],
              ['sie/Sie', 'sollten', 'könnten', 'würden'],
            ],
          },
        },
        {
          id: 'i4-2-info-redemittel',
          type: 'INFO',
          variant: 'TIP',
          title: 'So kann man einen Rat geben',
          text: 'Du solltest mehr schlafen. – Sie könnten es mit Yoga versuchen. – An deiner Stelle würde ich zum Arzt gehen. – Es wäre gut, wenn du weniger arbeiten würdest. – Hast du schon mal versucht, …?',
        },
        {
          id: 'i4-2-choice',
          type: 'CHOICE',
          instruction: 'Lesen Sie das Gespräch noch einmal.',
          question: 'Welche Ratschläge gibt Julia? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'a1', text: 'das Handy vor dem Schlafen weglegen' },
            { id: 'a2', text: 'Schlaftabletten nehmen' },
            { id: 'a3', text: 'abends spazieren gehen' },
            { id: 'a4', text: 'die Stelle wechseln' },
          ],
          solution: ['a1', 'a3'],
          explanation:
            'Julia rät, das Handy eine Stunde vorher wegzulegen, nach 16 Uhr keinen Kaffee mehr zu trinken, abends spazieren zu gehen und mit dem Chef über die Überstunden zu sprechen. Von Tabletten oder einem Jobwechsel sagt sie nichts.',
        },
        {
          id: 'i4-2-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie „sollte“, „könnte“ oder „würde“ in der richtigen Form.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Du hast Rückenschmerzen? Du ' },
            { kind: 'GAP', gapId: 'k1', solution: ['solltest'], width: 9 },
            { kind: 'TEXT', text: ' nicht so lange am Schreibtisch sitzen.\n2. An Ihrer Stelle ' },
            { kind: 'GAP', gapId: 'k2', solution: ['würde', 'wuerde'], width: 6 },
            { kind: 'TEXT', text: ' ich einen Termin beim Arzt machen.\n3. Ihr ' },
            { kind: 'GAP', gapId: 'k3', solution: ['könntet', 'koenntet'], width: 8 },
            { kind: 'TEXT', text: ' doch am Wochenende zusammen wandern gehen!\n4. Wir ' },
            { kind: 'GAP', gapId: 'k4', solution: ['sollten'], width: 8 },
            { kind: 'TEXT', text: ' weniger Zucker essen.\n5. Herr Lang, Sie ' },
            { kind: 'GAP', gapId: 'k5', solution: ['könnten', 'koennten'], width: 8 },
            { kind: 'TEXT', text: ' es mit einem Kurs zur Entspannung versuchen.' },
          ],
        },
        {
          id: 'i4-2-match',
          type: 'MATCHING',
          instruction: 'Welcher Rat passt zu welchem Problem?',
          left: [
            { id: 'l1', text: 'Ich bin immer so müde.' },
            { id: 'l2', text: 'Ich habe zugenommen.' },
            { id: 'l3', text: 'Ich habe ständig Kopfschmerzen.' },
            { id: 'l4', text: 'Ich fühle mich oft einsam.' },
          ],
          right: [
            { id: 'r1', text: 'Du solltest früher ins Bett gehen.' },
            { id: 'r2', text: 'Du könntest öfter mit dem Rad zur Arbeit fahren.' },
            { id: 'r3', text: 'An deiner Stelle würde ich mal zum Arzt gehen.' },
            { id: 'r4', text: 'Es wäre gut, wenn du in einen Verein gehen würdest.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'i4-2-order',
          type: 'ORDERING',
          instruction: 'Bilden Sie einen Ratschlag.',
          items: [
            { id: 'o1', text: 'An deiner Stelle' },
            { id: 'o2', text: 'würde' },
            { id: 'o3', text: 'ich' },
            { id: 'o4', text: 'mehr Wasser' },
            { id: 'o5', text: 'trinken.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5'],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – irreale Bedingungen und Wünsche.
  {
    order: 3,
    title: 'Wenn ich mehr Zeit hätte …',
    subtitle: 'Irreales und Wünsche',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'i4-3-h1', type: 'HEADING', level: 1, text: 'Wenn ich mehr Zeit hätte …' },
        {
          id: 'i4-3-text',
          type: 'TEXT',
          text: 'Im Radio läuft eine Sendung zum Thema „Mein gesünderes Ich“. Hörerinnen und Hörer erzählen, was sie ändern würden.\n\nKevin: „Wenn ich nicht so viel am Computer sitzen müsste, würde ich mehr Sport machen. Und wenn es in der Mensa besseres Essen gäbe, würde ich mittags nicht immer Pommes essen.“\n\nMonika: „Ich wäre viel entspannter, wenn ich mehr Zeit für mich hätte. Ich wünschte, der Tag hätte 28 Stunden!“\n\nBirgit: „Eigentlich bin ich zufrieden. Nur wenn meine Knie besser wären, würde ich wieder joggen gehen. Wenn ich doch nur zwanzig Jahre jünger wäre!“',
        },
        {
          id: 'i4-3-info-irreal',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Irreale Bedingungen: wenn … hätte / wäre / würde',
          text: 'Mit dem Konjunktiv II spricht man über etwas, das nicht wirklich ist – nur vorgestellt. Die Wirklichkeit: Ich habe keine Zeit. Die Vorstellung: Wenn ich Zeit hätte, würde ich Sport machen. Bei „sein“, „haben“ und den Modalverben benutzt man die eigene Form (wäre, hätte, könnte, müsste). Bei fast allen anderen Verben nimmt man „würde“ + Infinitiv. Häufig ist auch „gäbe“ (von „es gibt“).',
          table: {
            headers: ['Infinitiv', 'Präteritum', 'Konjunktiv II'],
            rows: [
              ['sein', 'war', 'ich wäre, du wärst'],
              ['haben', 'hatte', 'ich hätte, du hättest'],
              ['können', 'konnte', 'ich könnte'],
              ['müssen', 'musste', 'ich müsste'],
              ['es gibt', 'es gab', 'es gäbe'],
              ['machen, gehen …', '—', 'ich würde machen / gehen'],
            ],
          },
        },
        {
          id: 'i4-3-info-wunsch',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Wünsche',
          text: 'Einen irrealen Wunsch drückt man so aus: „Ich wünschte, ich hätte mehr Zeit.“ oder als Ausruf: „Wenn ich doch nur mehr Zeit hätte!“ – Auch hier steht der Konjunktiv II, weil es (noch) nicht so ist.',
        },
        {
          id: 'i4-3-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die Verben im Konjunktiv II.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Wenn ich nicht so müde ' },
            { kind: 'GAP', gapId: 'i1', solution: ['wäre', 'waere'], hint: 'sein', width: 6 },
            { kind: 'TEXT', text: ', würde ich heute Abend joggen gehen.\n2. Wenn wir einen Garten ' },
            { kind: 'GAP', gapId: 'i2', solution: ['hätten', 'haetten'], hint: 'haben', width: 7 },
            { kind: 'TEXT', text: ', würden wir eigenes Gemüse anbauen.\n3. Wenn es hier ein Schwimmbad ' },
            { kind: 'GAP', gapId: 'i3', solution: ['gäbe', 'gaebe'], hint: 'es gibt', width: 6 },
            { kind: 'TEXT', text: ', würde ich jeden Morgen schwimmen.\n4. Wenn du früher ins Bett gehen ' },
            { kind: 'GAP', gapId: 'i4', solution: ['würdest', 'wuerdest'], hint: 'werden', width: 8 },
            { kind: 'TEXT', text: ', wärst du nicht so müde.\n5. Wenn ich nicht arbeiten ' },
            { kind: 'GAP', gapId: 'i5', solution: ['müsste', 'muesste'], hint: 'müssen', width: 7 },
            { kind: 'TEXT', text: ', würde ich mit euch wandern.' },
          ],
        },
        {
          id: 'i4-3-choice',
          type: 'CHOICE',
          instruction: 'Welcher Satz beschreibt die Wirklichkeit hinter dem Konjunktiv?',
          question: '„Wenn ich mehr Geld hätte, würde ich in ein Fitnessstudio gehen.“',
          multiple: false,
          options: [
            { id: 'a1', text: 'Ich habe viel Geld und gehe ins Fitnessstudio.' },
            { id: 'a2', text: 'Ich habe nicht genug Geld und gehe nicht ins Fitnessstudio.' },
            { id: 'a3', text: 'Ich gehe ins Fitnessstudio, obwohl ich wenig Geld habe.' },
            { id: 'a4', text: 'Ich habe kein Interesse am Fitnessstudio.' },
          ],
          solution: ['a2'],
          explanation:
            'Der Konjunktiv II zeigt, dass die Bedingung nicht erfüllt ist: Ich habe nicht mehr Geld – deshalb gehe ich auch nicht ins Fitnessstudio. Interesse habe ich aber schon.',
        },
        {
          id: 'i4-3-match',
          type: 'MATCHING',
          instruction: 'Verbinden Sie die Satzteile.',
          left: [
            { id: 'l1', text: 'Wenn ich Zeit hätte,' },
            { id: 'l2', text: 'Wenn es nicht regnen würde,' },
            { id: 'l3', text: 'Ich wünschte,' },
            { id: 'l4', text: 'Wenn du mehr Obst essen würdest,' },
          ],
          right: [
            { id: 'r1', text: 'würde ich einen Kochkurs machen.' },
            { id: 'r2', text: 'könnten wir draußen essen.' },
            { id: 'r3', text: 'ich könnte besser schlafen.' },
            { id: 'r4', text: 'wärst du seltener erkältet.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'i4-3-order',
          type: 'ORDERING',
          instruction: 'Bilden Sie einen Satz. Beginnen Sie mit „Wenn“.',
          items: [
            { id: 'o1', text: 'Wenn' },
            { id: 'o2', text: 'ich' },
            { id: 'o3', text: 'jünger' },
            { id: 'o4', text: 'wäre,' },
            { id: 'o5', text: 'würde' },
            { id: 'o6', text: 'ich' },
            { id: 'o7', text: 'Tango lernen.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5', 'o6', 'o7'],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – ein Zeitungsartikel über das Sitzen.
  {
    order: 4,
    title: 'Zu viel gesessen?',
    subtitle: 'Einen Zeitungsartikel verstehen',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'i4-4-h1', type: 'HEADING', level: 1, text: 'Zu viel gesessen?' },
        {
          id: 'i4-4-text',
          type: 'TEXT',
          text: 'Der Mensch ist nicht zum Sitzen gemacht\n\nIm Durchschnitt sitzen Erwachsene in Deutschland fast neun Stunden am Tag – im Büro, im Auto, auf dem Sofa. Das ist mehr, als die meisten schätzen. Und es hat Folgen: Wer zu viel sitzt, bekommt häufiger Rückenschmerzen, nimmt leichter zu und hat ein höheres Risiko für Herz-Kreislauf-Erkrankungen.\n\n„Das Problem ist nicht das Sitzen an sich, sondern das lange Sitzen ohne Unterbrechung“, erklärt die Sportmedizinerin Dr. Carolin Hess. Ihre gute Nachricht: Schon kleine Veränderungen helfen. „Stehen Sie jede halbe Stunde kurz auf, telefonieren Sie im Gehen, und nehmen Sie die Treppe statt des Aufzugs.“\n\nViele Firmen reagieren inzwischen darauf. Sie bieten höhenverstellbare Schreibtische an oder organisieren Besprechungen im Stehen. Ein Wundermittel ist das aber nicht, warnt Dr. Hess: „Wer den ganzen Tag steht, hat andere Probleme. Entscheidend ist der Wechsel.“ Wichtiger als eine Stunde Sport am Abend seien viele kleine Bewegungspausen über den Tag verteilt.',
        },
        {
          id: 'i4-4-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: Der Artikel',
          items: [
            {
              term: 'im Durchschnitt',
              translations: { en: 'on average', es: 'de media', fr: 'en moyenne', it: 'in media' },
            },
            {
              term: 'Folge',
              article: 'die',
              plural: 'die Folgen',
              translations: { en: 'consequence', es: 'la consecuencia', fr: 'la conséquence', it: 'la conseguenza' },
            },
            {
              term: 'zunehmen / abnehmen',
              translations: { en: 'to put on / lose weight', es: 'engordar / adelgazar', fr: 'grossir / maigrir', it: 'ingrassare / dimagrire' },
            },
            {
              term: 'Risiko',
              article: 'das',
              plural: 'die Risiken',
              translations: { en: 'risk', es: 'el riesgo', fr: 'le risque', it: 'il rischio' },
            },
            {
              term: 'Unterbrechung',
              article: 'die',
              translations: { en: 'interruption, break', es: 'la interrupción', fr: 'l’interruption', it: 'l’interruzione' },
            },
            {
              term: 'höhenverstellbar',
              translations: { en: 'height-adjustable', es: 'regulable en altura', fr: 'réglable en hauteur', it: 'regolabile in altezza' },
            },
            {
              term: 'Wechsel',
              article: 'der',
              translations: { en: 'change, alternation', es: 'la alternancia', fr: 'l’alternance', it: 'l’alternanza' },
            },
          ],
        },
        {
          id: 'i4-4-choice',
          type: 'CHOICE',
          instruction: 'Was steht im Artikel? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'a1', text: 'Die meisten Menschen unterschätzen, wie lange sie sitzen.' },
            { id: 'a2', text: 'Sitzen ist in jedem Fall schädlich.' },
            { id: 'a3', text: 'Es hilft, regelmäßig kurz aufzustehen.' },
            { id: 'a4', text: 'Eine Stunde Sport am Abend gleicht langes Sitzen vollständig aus.' },
          ],
          solution: ['a1', 'a3'],
          explanation:
            'Laut Dr. Hess ist nicht das Sitzen an sich das Problem, sondern das lange Sitzen ohne Pause. Viele kleine Bewegungspausen sind wichtiger als eine Stunde Sport am Abend.',
        },
        {
          id: 'i4-4-info-arzt',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'Krank – was nun?',
          text: 'Wer in Deutschland krank ist, geht normalerweise zuerst zur Hausärztin oder zum Hausarzt. Sie überweisen, wenn nötig, zu einer Fachärztin. Wer nicht arbeiten kann, bekommt eine Krankschreibung (offiziell: Arbeitsunfähigkeitsbescheinigung). Sie wird heute meist elektronisch an die Krankenkasse geschickt, der Arbeitgeber ruft sie dort ab. Wichtig: Man muss den Arbeitgeber trotzdem am ersten Tag informieren, dass man krank ist.',
        },
        {
          id: 'i4-4-match',
          type: 'MATCHING',
          instruction: 'Welcher Tipp aus dem Artikel passt?',
          left: [
            { id: 'l1', text: 'Sie haben ein langes Telefonat.' },
            { id: 'l2', text: 'Ihr Büro ist im vierten Stock.' },
            { id: 'l3', text: 'Sie arbeiten seit einer Stunde ohne Pause.' },
          ],
          right: [
            { id: 'r1', text: 'Telefonieren Sie im Gehen.' },
            { id: 'r2', text: 'Nehmen Sie die Treppe statt des Aufzugs.' },
            { id: 'r3', text: 'Stehen Sie kurz auf und bewegen Sie sich.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
          ],
        },
        {
          id: 'i4-4-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die Zusammenfassung des Artikels.',
          wordBank: ['Durchschnitt', 'Folgen', 'Unterbrechung', 'Wechsel', 'Risiko'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Der Artikel handelt davon, dass Erwachsene im ' },
            { kind: 'GAP', gapId: 's1', solution: ['Durchschnitt'], width: 13 },
            { kind: 'TEXT', text: ' fast neun Stunden täglich sitzen. Das hat negative ' },
            { kind: 'GAP', gapId: 's2', solution: ['Folgen'], width: 7 },
            { kind: 'TEXT', text: ' für die Gesundheit, zum Beispiel ein höheres ' },
            { kind: 'GAP', gapId: 's3', solution: ['Risiko'], width: 7 },
            { kind: 'TEXT', text: ' für Herzkrankheiten. Problematisch ist vor allem langes Sitzen ohne ' },
            { kind: 'GAP', gapId: 's4', solution: ['Unterbrechung'], width: 13 },
            { kind: 'TEXT', text: '. Die Expertin meint, dass der ' },
            { kind: 'GAP', gapId: 's5', solution: ['Wechsel'], width: 8 },
            { kind: 'TEXT', text: ' zwischen Sitzen, Stehen und Gehen entscheidend ist.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – Rückblick und eine Rat-E-Mail.
  {
    order: 5,
    title: 'Kannst du das schon?',
    subtitle: 'Rückblick auf das ganze Kapitel',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'i4-5-h1', type: 'HEADING', level: 1, text: 'Kannst du das schon?' },
        {
          id: 'i4-5-intro',
          type: 'TEXT',
          text: 'Prüfen Sie, was Sie aus Kapitel 4 mitnehmen: Wortschatz zum Lebensstil, Ratschläge und irreale Bedingungen mit dem Konjunktiv II. Am Ende beantworten Sie die E-Mail eines Freundes.',
        },
        {
          id: 'i4-5-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie den Text.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Mein Arzt sagt, ich ' },
            { kind: 'GAP', gapId: 'r1', solution: ['sollte'], width: 7 },
            { kind: 'TEXT', text: ' mich mehr bewegen. Das stimmt, aber wenn ich mehr Zeit ' },
            { kind: 'GAP', gapId: 'r2', solution: ['hätte', 'haette'], width: 6 },
            { kind: 'TEXT', text: ', würde ich auch öfter Sport machen. Meine Frau meint: „Du ' },
            { kind: 'GAP', gapId: 'r3', solution: ['könntest', 'koenntest'], width: 9 },
            { kind: 'TEXT', text: ' doch mit dem Fahrrad zur Arbeit fahren.“ Wenn es nur nicht so weit ' },
            { kind: 'GAP', gapId: 'r4', solution: ['wäre', 'waere'], width: 5 },
            { kind: 'TEXT', text: '! Ich ' },
            { kind: 'GAP', gapId: 'r5', solution: ['wünschte', 'wuenschte'], width: 9 },
            { kind: 'TEXT', text: ', unser Büro wäre näher.' },
          ],
        },
        {
          id: 'i4-5-choice',
          type: 'CHOICE',
          instruction: 'Welche Sätze sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'k1', text: 'Wenn ich du wäre, würde ich weniger Kaffee trinken.' },
            { id: 'k2', text: 'Wenn ich mehr Zeit habe würde, würde ich kochen.' },
            { id: 'k3', text: 'Wenn es keinen Aufzug gäbe, müssten wir die Treppe nehmen.' },
            { id: 'k4', text: 'Du solltest mehr zu schlafen.' },
          ],
          solution: ['k1', 'k3'],
          explanation:
            'Bei „haben“ nimmt man die eigene Form „hätte“: Wenn ich mehr Zeit hätte, … Nach Modalverben wie „sollte“ steht der Infinitiv ohne „zu“: Du solltest mehr schlafen.',
        },
        {
          id: 'i4-5-match',
          type: 'MATCHING',
          instruction: 'Rat, Vorschlag oder Wunsch? Was passt?',
          left: [
            { id: 'm1', text: 'ein klarer Rat' },
            { id: 'm2', text: 'ein vorsichtiger Vorschlag' },
            { id: 'm3', text: 'was ich selbst tun würde' },
            { id: 'm4', text: 'ein irrealer Wunsch' },
          ],
          right: [
            { id: 'y1', text: 'Du solltest zum Arzt gehen.' },
            { id: 'y2', text: 'Du könntest es mal mit Tee versuchen.' },
            { id: 'y3', text: 'An deiner Stelle würde ich eine Pause machen.' },
            { id: 'y4', text: 'Wenn ich doch nur nicht erkältet wäre!' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'y1' },
            { leftId: 'm2', rightId: 'y2' },
            { leftId: 'm3', rightId: 'y3' },
            { leftId: 'm4', rightId: 'y4' },
          ],
        },
        {
          id: 'i4-5-writing',
          type: 'WRITING',
          instruction: 'Eine E-Mail mit Ratschlägen',
          prompt:
            'Ihr Freund Paul schreibt Ihnen: „Ich fühle mich total schlapp. Ich sitze den ganzen Tag im Büro, esse mittags meistens eine Pizza und schlafe schlecht. Hast du einen Tipp?“ Antworten Sie Paul. Zeigen Sie Verständnis, geben Sie mindestens drei Ratschläge und schreiben Sie auch, was Sie selbst an seiner Stelle tun würden. Benutzen Sie mindestens einen Satz mit „wenn“ und Konjunktiv II.',
          minWords: 70,
          maxWords: 160,
          aiFeedback: true,
          sampleAnswer:
            'Lieber Paul,\n\nvielen Dank für deine Nachricht. Das klingt wirklich anstrengend, und ich kann gut verstehen, dass du dich schlapp fühlst.\n\nDu solltest auf jeden Fall öfter aufstehen, wenn du im Büro bist – zum Beispiel jede halbe Stunde. Mittags könntest du statt Pizza einen Salat oder eine Suppe essen. Und an deiner Stelle würde ich abends das Handy früher weglegen, dann schläfst du bestimmt besser.\n\nWenn ich so viel sitzen müsste wie du, würde ich mit dem Fahrrad zur Arbeit fahren. Hast du nicht Lust, am Samstag mit mir joggen zu gehen?\n\nViele Grüße\nNina',
        },
      ],
    },
  },
];
