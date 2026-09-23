import type { UnitSeed } from './chapter-beginner-1';

/**
 * Intermediate, Kapitel 2: „Wohnen und Zusammenleben“ (B1, Kapitel 2)
 *
 * Fünf Seiten. Wo Menschen zusammen wohnen, gibt es Reibung – die laute Musik
 * nebenan, der Abwasch, der seit Tagen in der Küche steht. Das Kapitel übt,
 * so ein Problem anzusprechen, ohne einen Streit anzufangen, und am Ende
 * eine sachliche Beschwerde zu schreiben.
 *
 * Aufbau: Seite 1 stellt eine Wohngemeinschaft und die Hausordnung vor,
 * Seite 2 bringt das Gespräch über einen Konflikt mit den Redemitteln zum
 * Ansprechen und für den Kompromiss. Seite 3 und 4 sind der grammatische
 * Kern, die Relativsätze: zuerst Nominativ und Akkusativ, dann Dativ, mit
 * Präposition und Genitiv. Seite 5 wiederholt und schreibt die Beschwerde.
 *
 * Relativsätze stehen auf zwei Seiten, weil die Formen im Dativ Plural
 * („denen“) und im Genitiv („dessen“, „deren“) eigene Übung brauchen – auf
 * einer Seite zusammen würden sie zur Tabelle ohne Anwendung.
 *
 * Einsprachig deutsch wie der ganze Intermediate-Band. Personen und Adressen
 * sind erfunden; sämtliche Texte sind eigenständig verfasst.
 */
const v = 1;

export const INTERMEDIATE_2_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – eine WG, die Hausordnung.
  {
    order: 1,
    title: 'Wir suchen dich!',
    subtitle: 'Wohngemeinschaft und Hausordnung',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'i2-1-h1', type: 'HEADING', level: 1, text: 'Wir suchen dich!' },
        {
          id: 'i2-1-image',
          type: 'IMAGE',
          url: 'illustration:living-room',
          alt: 'Ein gemütliches Wohnzimmer mit Sofa, Pflanzen und einem Bücherregal.',
          caption: 'Das gemeinsame Wohnzimmer ist das Herz jeder WG.',
        },
        {
          id: 'i2-1-anzeige',
          type: 'TEXT',
          text: 'WG-ZIMMER FREI – Leipzig-Südvorstadt\n\nWir sind Hanna (29, Grafikerin), Tarek (24, studiert Medizin) und Kater Moritz. Ab 1. November wird ein Zimmer frei (16 m², möbliert, mit Balkon). Die Wohnung liegt im dritten Stock eines Altbaus, fünf Minuten von der Straßenbahn.\n\nMiete: 390 € warm, inklusive Nebenkosten und Internet. Kaution: zwei Monatsmieten.\n\nUns ist wichtig: Wir kochen gern zusammen, aber jeder hat auch seine Ruhe. Wir haben einen Putzplan, und der funktioniert (meistens). Raucher und Leute, die jedes Wochenende Partys feiern wollen, passen eher nicht zu uns.\n\nSchreib uns ein paar Sätze über dich – wir freuen uns!',
        },
        {
          id: 'i2-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: Wohnen',
          items: [
            {
              term: 'Wohngemeinschaft (WG)',
              article: 'die',
              plural: 'die Wohngemeinschaften',
              translations: { en: 'shared flat', es: 'el piso compartido', fr: 'la colocation', it: 'l’appartamento condiviso' },
            },
            {
              term: 'Mitbewohner',
              article: 'der',
              plural: 'die Mitbewohner',
              translations: { en: 'flatmate', es: 'el compañero de piso', fr: 'le colocataire', it: 'il coinquilino' },
              example: 'Meine Mitbewohnerin heißt Hanna.',
            },
            {
              term: 'Miete',
              article: 'die',
              translations: { en: 'rent', es: 'el alquiler', fr: 'le loyer', it: 'l’affitto' },
            },
            {
              term: 'warm / kalt (bei der Miete)',
              translations: { en: 'incl. / excl. utilities', es: 'con / sin gastos', fr: 'charges comprises / hors charges', it: 'spese incluse / escluse' },
              example: 'Die Wohnung kostet 700 € kalt.',
            },
            {
              term: 'Nebenkosten',
              article: 'die',
              translations: { en: 'utilities, service charges', es: 'los gastos de comunidad', fr: 'les charges', it: 'le spese condominiali' },
            },
            {
              term: 'Kaution',
              article: 'die',
              translations: { en: 'deposit', es: 'la fianza', fr: 'la caution', it: 'la cauzione' },
            },
            {
              term: 'Vermieter',
              article: 'der',
              plural: 'die Vermieter',
              translations: { en: 'landlord', es: 'el casero', fr: 'le propriétaire', it: 'il padrone di casa' },
            },
            {
              term: 'Hausordnung',
              article: 'die',
              translations: { en: 'house rules', es: 'las normas de la comunidad', fr: 'le règlement intérieur', it: 'il regolamento condominiale' },
            },
            {
              term: 'Putzplan',
              article: 'der',
              translations: { en: 'cleaning rota', es: 'el turno de limpieza', fr: 'le planning de ménage', it: 'i turni delle pulizie' },
            },
            {
              term: 'Altbau',
              article: 'der',
              plural: 'die Altbauten',
              translations: { en: 'old building (pre-war)', es: 'el edificio antiguo', fr: 'l’immeuble ancien', it: 'l’edificio d’epoca' },
            },
          ],
        },
        {
          id: 'i2-1-choice',
          type: 'CHOICE',
          instruction: 'Lesen Sie die Anzeige.',
          question: 'Welche Aussagen sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'a1', text: 'In der Miete sind die Nebenkosten schon enthalten.' },
            { id: 'a2', text: 'Das Zimmer hat keine Möbel.' },
            { id: 'a3', text: 'Die Kaution beträgt 780 Euro.' },
            { id: 'a4', text: 'Die WG sucht jemanden, der oft Partys feiert.' },
          ],
          solution: ['a1', 'a3'],
          explanation:
            '„390 € warm, inklusive Nebenkosten“ – die Nebenkosten sind also enthalten. Zwei Monatsmieten sind 2 × 390 € = 780 €. Das Zimmer ist möbliert, und Partygänger „passen eher nicht“.',
        },
        {
          id: 'i2-1-info-ruhe',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'Ruhezeiten',
          text: 'In fast jedem Mietshaus gibt es eine Hausordnung. Sie regelt zum Beispiel, wer das Treppenhaus putzt und wo die Fahrräder stehen dürfen. Besonders ernst nehmen viele die Ruhezeiten: Nachtruhe ist meist von 22 bis 6 Uhr, oft gilt auch eine Mittagsruhe (13 bis 15 Uhr) und Ruhe am Sonntag. Wer dann laut Musik hört oder bohrt, bekommt schnell Ärger mit den Nachbarn.',
        },
        {
          id: 'i2-1-match',
          type: 'MATCHING',
          instruction: 'Was bedeutet das?',
          left: [
            { id: 'l1', text: 'die Kaltmiete' },
            { id: 'l2', text: 'die Kaution' },
            { id: 'l3', text: 'möbliert' },
            { id: 'l4', text: 'die Nachtruhe' },
          ],
          right: [
            { id: 'r1', text: 'die Miete ohne Heizung, Wasser und Müll' },
            { id: 'r2', text: 'Geld, das man beim Auszug zurückbekommt' },
            { id: 'r3', text: 'mit Bett, Schrank und Tisch' },
            { id: 'r4', text: 'die Zeit, in der man leise sein muss' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'i2-1-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie mit den Wörtern aus dem Kasten.',
          wordBank: ['Nebenkosten', 'Vermieterin', 'Kaution', 'Mitbewohnern', 'Putzplan'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Ich wohne mit zwei ' },
            { kind: 'GAP', gapId: 'c1', solution: ['Mitbewohnern'], width: 12 },
            { kind: 'TEXT', text: ' zusammen. Die Miete bezahlen wir direkt an die ' },
            { kind: 'GAP', gapId: 'c2', solution: ['Vermieterin'], width: 12 },
            { kind: 'TEXT', text: '. Heizung und Wasser gehören zu den ' },
            { kind: 'GAP', gapId: 'c3', solution: ['Nebenkosten'], width: 12 },
            { kind: 'TEXT', text: '. Beim Einzug mussten wir eine ' },
            { kind: 'GAP', gapId: 'c4', solution: ['Kaution'], width: 8 },
            { kind: 'TEXT', text: ' bezahlen. Damit die Küche sauber bleibt, haben wir einen ' },
            { kind: 'GAP', gapId: 'c5', solution: ['Putzplan'], width: 9 },
            { kind: 'TEXT', text: '.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – einen Konflikt ansprechen, einen Kompromiss finden.
  {
    order: 2,
    title: 'Können wir mal reden?',
    subtitle: 'Probleme ansprechen, Kompromisse finden',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'i2-2-h1', type: 'HEADING', level: 1, text: 'Können wir mal reden?' },
        {
          id: 'i2-2-dlg',
          type: 'DIALOGUE',
          title: 'In der WG-Küche',
          lines: [
            { speaker: 'Hanna', text: 'Tarek, hast du kurz Zeit? Ich möchte etwas ansprechen.' },
            { speaker: 'Tarek', text: 'Klar, was ist los?' },
            { speaker: 'Hanna', text: 'Es geht um den Abwasch. Mir ist aufgefallen, dass dein Geschirr oft zwei, drei Tage in der Spüle steht. Das stört mich ehrlich gesagt, weil ich dann nicht kochen kann.' },
            { speaker: 'Tarek', text: 'Oh, das tut mir leid. Im Moment habe ich Prüfungen und komme erst spät nach Hause.' },
            { speaker: 'Hanna', text: 'Das verstehe ich. Wie wäre es, wenn du das Geschirr wenigstens abends in die Spülmaschine stellst? Dann ist die Spüle frei.' },
            { speaker: 'Tarek', text: 'Das ist fair. Und dafür bringe ich diese Woche den Müll runter, einverstanden?' },
            { speaker: 'Hanna', text: 'Einverstanden. Danke, dass du so offen bist.' },
          ],
        },
        {
          id: 'i2-2-info-redemittel',
          type: 'INFO',
          variant: 'TIP',
          title: 'Ein Problem ansprechen – ohne Streit',
          text: 'Sprechen Sie von sich selbst („Mich stört …“) statt Vorwürfe zu machen („Du machst nie …“). Beschreiben Sie die Situation konkret und schlagen Sie eine Lösung vor. Wörter wie „immer“ und „nie“ machen ein Gespräch schnell schwierig.',
          table: {
            headers: ['Zweck', 'Redemittel'],
            rows: [
              ['einleiten', 'Hast du kurz Zeit? Ich möchte etwas ansprechen.'],
              ['Problem beschreiben', 'Mir ist aufgefallen, dass … / Es stört mich, wenn …'],
              ['Verständnis zeigen', 'Ich verstehe, dass … / Das kann ich nachvollziehen.'],
              ['Lösung vorschlagen', 'Wie wäre es, wenn …? / Könnten wir vielleicht …?'],
              ['zustimmen', 'Das ist fair. / Einverstanden. / So machen wir es.'],
            ],
          },
        },
        {
          id: 'i2-2-choice',
          type: 'CHOICE',
          instruction: 'Lesen Sie das Gespräch noch einmal.',
          question: 'Welchen Kompromiss finden Hanna und Tarek?',
          multiple: false,
          options: [
            { id: 'a1', text: 'Hanna macht den Abwasch, solange Tarek Prüfungen hat.' },
            { id: 'a2', text: 'Tarek stellt sein Geschirr abends in die Spülmaschine und bringt diese Woche den Müll runter.' },
            { id: 'a3', text: 'Sie kaufen eine zweite Spülmaschine.' },
            { id: 'a4', text: 'Tarek kocht nur noch an der Uni.' },
          ],
          solution: ['a2'],
          explanation:
            'Hanna schlägt die Spülmaschine vor, und Tarek bietet als Ausgleich an, den Müll runterzubringen. Beide geben ein bisschen nach – das ist ein Kompromiss.',
        },
        {
          id: 'i2-2-match',
          type: 'MATCHING',
          instruction: 'Vorwurf oder sachlich? Welcher sachliche Satz passt zu welchem Vorwurf?',
          left: [
            { id: 'l1', text: 'Du bist immer so laut!' },
            { id: 'l2', text: 'Nie bringst du den Müll runter!' },
            { id: 'l3', text: 'Deine Fahrräder stehen überall!' },
          ],
          right: [
            { id: 'r1', text: 'Mich stört es, wenn nach 22 Uhr noch Musik läuft.' },
            { id: 'r2', text: 'Mir ist aufgefallen, dass der Müll schon voll ist. Könntest du ihn heute runterbringen?' },
            { id: 'r3', text: 'Wie wäre es, wenn wir die Fahrräder in den Keller stellen?' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
          ],
        },
        {
          id: 'i2-2-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie das Gespräch.',
          wordBank: ['aufgefallen', 'stört', 'wäre', 'nachvollziehen', 'Einverstanden'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'A: Frau Kaya, mir ist ' },
            { kind: 'GAP', gapId: 'k1', solution: ['aufgefallen'], width: 12 },
            { kind: 'TEXT', text: ', dass Ihr Hund oft bellt, wenn Sie nicht zu Hause sind. Das ' },
            { kind: 'GAP', gapId: 'k2', solution: ['stört', 'stoert'], width: 6 },
            { kind: 'TEXT', text: ' mich, weil ich im Homeoffice arbeite.\nB: Oh, das wusste ich nicht. Das kann ich gut ' },
            { kind: 'GAP', gapId: 'k3', solution: ['nachvollziehen'], width: 14 },
            { kind: 'TEXT', text: '.\nA: Wie ' },
            { kind: 'GAP', gapId: 'k4', solution: ['wäre', 'waere'], width: 5 },
            { kind: 'TEXT', text: ' es, wenn Sie ihn vormittags zu einer Hundesitterin bringen?\nB: ' },
            { kind: 'GAP', gapId: 'k5', solution: ['Einverstanden'], width: 14 },
            { kind: 'TEXT', text: ', ich frage mal nach.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – Relativsätze im Nominativ und Akkusativ.
  {
    order: 3,
    title: 'Der Nachbar, der immer bohrt',
    subtitle: 'Relativsätze: Nominativ und Akkusativ',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'i2-3-h1', type: 'HEADING', level: 1, text: 'Der Nachbar, der immer bohrt' },
        {
          id: 'i2-3-text',
          type: 'TEXT',
          text: 'Hanna erzählt ihrer Freundin von den Nachbarn:\n\n„In unserem Haus wohnen ganz unterschiedliche Leute. Im Erdgeschoss wohnt Herr Petzold, der jeden Samstag um acht Uhr bohrt. Neben uns wohnt eine Familie, die drei kleine Kinder hat – die hört man manchmal, aber sie sind süß. Über uns wohnt ein Student, den ich fast nie sehe. Und im Dachgeschoss lebt Frau Albers, die schon seit fünfzig Jahren im Haus wohnt. Das ist die Nachbarin, die ich am liebsten mag: Sie weiß alles und hilft jedem.“',
        },
        {
          id: 'i2-3-info-relativ',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Relativsätze: der, die, das, den',
          text: 'Ein Relativsatz beschreibt ein Nomen genauer. Er steht direkt hinter dem Nomen, beginnt mit einem Relativpronomen und hat das Verb am Ende. Das Pronomen richtet sich im Genus (der/die/das) und in der Zahl nach dem Nomen – und im Fall nach seiner Rolle im Relativsatz. Ist es dort Subjekt, steht der Nominativ; ist es Akkusativobjekt, der Akkusativ. Nur im Maskulinum Singular sieht man den Unterschied: der → den.',
          table: {
            headers: ['', 'maskulin', 'neutral', 'feminin', 'Plural'],
            rows: [
              ['Nominativ', 'der', 'das', 'die', 'die'],
              ['Akkusativ', 'den', 'das', 'die', 'die'],
            ],
          },
        },
        {
          id: 'i2-3-info-rolle',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Welcher Fall? Fragen Sie im Relativsatz!',
          text: 'Der Fall hängt nicht vom Hauptsatz ab, sondern vom Verb im Relativsatz. „Das ist der Student, den ich nie sehe.“ – Im Relativsatz ist „ich“ das Subjekt; „den“ ist das, was ich sehe (Akkusativ). „Das ist der Student, der über uns wohnt.“ – Hier ist „der“ selbst das Subjekt (Nominativ).',
        },
        {
          id: 'i2-3-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie das Relativpronomen.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Wir haben eine Nachbarin, ' },
            { kind: 'GAP', gapId: 'r1', solution: ['die'], width: 4 },
            { kind: 'TEXT', text: ' im Garten Tomaten anbaut.\n2. Der Hausmeister, ' },
            { kind: 'GAP', gapId: 'r2', solution: ['den'], width: 4 },
            { kind: 'TEXT', text: ' wir angerufen haben, kommt morgen.\n3. Das Fahrrad, ' },
            { kind: 'GAP', gapId: 'r3', solution: ['das'], width: 4 },
            { kind: 'TEXT', text: ' im Flur steht, gehört Tarek.\n4. Der Kater, ' },
            { kind: 'GAP', gapId: 'r4', solution: ['der'], width: 4 },
            { kind: 'TEXT', text: ' bei uns wohnt, heißt Moritz.\n5. Die Möbel, ' },
            { kind: 'GAP', gapId: 'r5', solution: ['die'], width: 4 },
            { kind: 'TEXT', text: ' wir gekauft haben, waren sehr günstig.\n6. Das ist der Mitbewohner, ' },
            { kind: 'GAP', gapId: 'r6', solution: ['den'], width: 4 },
            { kind: 'TEXT', text: ' ich dir vorstellen wollte.' },
          ],
        },
        {
          id: 'i2-3-choice',
          type: 'CHOICE',
          instruction: 'Welche Sätze sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'c1', text: 'Das ist der Nachbar, der ich nicht mag.' },
            { id: 'c2', text: 'Das ist der Nachbar, den ich nicht mag.' },
            { id: 'c3', text: 'Die Wohnung, die wir gesehen haben, war zu teuer.' },
            { id: 'c4', text: 'Die Wohnung, die wir haben gesehen, war zu teuer.' },
          ],
          solution: ['c2', 'c3'],
          explanation:
            '„ich“ ist Subjekt des Relativsatzes, der Nachbar ist Akkusativobjekt: den. Im Relativsatz steht das konjugierte Verb ganz am Ende: …, die wir gesehen haben.',
        },
        {
          id: 'i2-3-order',
          type: 'ORDERING',
          instruction: 'Bilden Sie einen Satz mit Relativsatz.',
          items: [
            { id: 'o1', text: 'Die Frau,' },
            { id: 'o2', text: 'die' },
            { id: 'o3', text: 'im Dachgeschoss' },
            { id: 'o4', text: 'wohnt,' },
            { id: 'o5', text: 'kennt' },
            { id: 'o6', text: 'alle' },
            { id: 'o7', text: 'Nachbarn.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5', 'o6', 'o7'],
        },
        {
          id: 'i2-3-match',
          type: 'MATCHING',
          instruction: 'Verbinden Sie die Satzteile.',
          left: [
            { id: 'l1', text: 'Herr Petzold ist der Nachbar,' },
            { id: 'l2', text: 'Frau Albers ist die Nachbarin,' },
            { id: 'l3', text: 'Der Student ist der Mann,' },
            { id: 'l4', text: 'Die Kinder sind die Nachbarn,' },
          ],
          right: [
            { id: 'r1', text: 'der samstags um acht bohrt.' },
            { id: 'r2', text: 'die Hanna am liebsten mag.' },
            { id: 'r3', text: 'den Hanna fast nie sieht.' },
            { id: 'r4', text: 'die man manchmal hört.' },
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

  // ====================================================== SEITE 4
  // Seite 4 – Relativsätze im Dativ, mit Präposition und im Genitiv.
  {
    order: 4,
    title: 'Die Wohnung, von der ich träume',
    subtitle: 'Relativsätze: Dativ, Präposition, Genitiv',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'i2-4-h1', type: 'HEADING', level: 1, text: 'Die Wohnung, von der ich träume' },
        {
          id: 'i2-4-text',
          type: 'TEXT',
          text: 'Tarek beschreibt seine Traumwohnung:\n\n„Irgendwann möchte ich eine Wohnung, in der ich mich richtig wohlfühle. Sie soll in einem Viertel liegen, in dem es kleine Cafés und einen Markt gibt. Ich wünsche mir Nachbarn, mit denen man auch mal ein Bier trinken kann. Und einen Vermieter, dem nicht alles egal ist, wenn etwas kaputtgeht. Am wichtigsten ist mir aber ein Balkon, dessen Blick ins Grüne geht – auf einen Park oder wenigstens auf einen Baum.“',
        },
        {
          id: 'i2-4-info-dativ',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Relativpronomen im Dativ und Genitiv',
          text: 'Braucht das Verb im Relativsatz den Dativ (helfen, gehören, gefallen …), steht das Relativpronomen im Dativ. Achtung beim Plural: „denen“, nicht „den“. Der Genitiv zeigt Besitz: „dessen“ für maskuline und neutrale Nomen, „deren“ für feminine Nomen und den Plural. Nach „dessen/deren“ folgt ein Nomen ohne Artikel.',
          table: {
            headers: ['', 'maskulin', 'neutral', 'feminin', 'Plural'],
            rows: [
              ['Nominativ', 'der', 'das', 'die', 'die'],
              ['Akkusativ', 'den', 'das', 'die', 'die'],
              ['Dativ', 'dem', 'dem', 'der', 'denen'],
              ['Genitiv', 'dessen', 'dessen', 'deren', 'deren'],
            ],
          },
        },
        {
          id: 'i2-4-info-praep',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Präposition + Relativpronomen',
          text: 'Gehört eine Präposition zum Verb oder zur Ortsangabe, steht sie vor dem Relativpronomen. Die Präposition bestimmt dann den Fall: in der (Dativ, wo?), mit denen (mit + Dativ), für den (für + Akkusativ). Beispiel: Ich träume von einer Wohnung. → Die Wohnung, von der ich träume.',
        },
        {
          id: 'i2-4-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie das Relativpronomen (mit Präposition, wenn nötig).',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Das ist die Nachbarin, ' },
            { kind: 'GAP', gapId: 'd1', solution: ['der'], width: 5 },
            { kind: 'TEXT', text: ' ich beim Umzug geholfen habe.\n2. Die Leute, ' },
            { kind: 'GAP', gapId: 'd2', solution: ['denen'], width: 6 },
            { kind: 'TEXT', text: ' das Auto gehört, wohnen im zweiten Stock.\n3. Der Hausmeister, ' },
            { kind: 'GAP', gapId: 'd3', solution: ['dem'], width: 5 },
            { kind: 'TEXT', text: ' wir den Schlüssel gegeben haben, ist sehr zuverlässig.\n4. Das Haus, ' },
            { kind: 'GAP', gapId: 'd4', solution: ['in dem'], width: 7 },
            { kind: 'TEXT', text: ' wir wohnen, ist über hundert Jahre alt.\n5. Die Mitbewohner, ' },
            { kind: 'GAP', gapId: 'd5', solution: ['mit denen'], width: 10 },
            { kind: 'TEXT', text: ' ich zusammenwohne, kommen aus drei Ländern.\n6. Die Vermieterin, ' },
            { kind: 'GAP', gapId: 'd6', solution: ['deren'], width: 6 },
            { kind: 'TEXT', text: ' Telefonnummer ich verloren habe, wohnt in München.' },
          ],
        },
        {
          id: 'i2-4-choice',
          type: 'CHOICE',
          instruction: 'Welche Sätze sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'c1', text: 'Das sind die Nachbarn, den wir Blumen geschenkt haben.' },
            { id: 'c2', text: 'Das sind die Nachbarn, denen wir Blumen geschenkt haben.' },
            { id: 'c3', text: 'Der Mann, dessen Hund immer bellt, wohnt unten.' },
            { id: 'c4', text: 'Der Mann, deren Hund immer bellt, wohnt unten.' },
          ],
          solution: ['c2', 'c3'],
          explanation:
            'Dativ Plural heißt „denen“. „Der Mann“ ist maskulin, also „dessen“ – „deren“ steht nur für feminine Nomen und den Plural.',
        },
        {
          id: 'i2-4-match',
          type: 'MATCHING',
          instruction: 'Verbinden Sie die Satzteile.',
          left: [
            { id: 'l1', text: 'Ich suche eine Wohnung,' },
            { id: 'l2', text: 'Das ist die Nachbarin,' },
            { id: 'l3', text: 'Wir haben einen Vermieter,' },
            { id: 'l4', text: 'Das ist die WG,' },
          ],
          right: [
            { id: 'r1', text: 'in der man Haustiere haben darf.' },
            { id: 'r2', text: 'mit der ich oft Kaffee trinke.' },
            { id: 'r3', text: 'dem die Hausordnung sehr wichtig ist.' },
            { id: 'r4', text: 'deren Zimmer ich mir angesehen habe.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'i2-4-order',
          type: 'ORDERING',
          instruction: 'Bilden Sie einen Satz mit Relativsatz.',
          items: [
            { id: 'o1', text: 'Das Viertel,' },
            { id: 'o2', text: 'in dem' },
            { id: 'o3', text: 'ich' },
            { id: 'o4', text: 'aufgewachsen' },
            { id: 'o5', text: 'bin,' },
            { id: 'o6', text: 'ist' },
            { id: 'o7', text: 'heute sehr teuer.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5', 'o6', 'o7'],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – Rückblick und eine sachliche Beschwerde.
  {
    order: 5,
    title: 'Kannst du das schon?',
    subtitle: 'Rückblick, eine Beschwerde schreiben',
    estimatedMinutes: 23,
    content: {
      version: v,
      blocks: [
        { id: 'i2-5-h1', type: 'HEADING', level: 1, text: 'Kannst du das schon?' },
        {
          id: 'i2-5-intro',
          type: 'TEXT',
          text: 'Prüfen Sie, was Sie aus Kapitel 2 mitnehmen. Manchmal hilft kein Gespräch mehr – dann schreibt man eine Beschwerde an die Hausverwaltung. Auch die bleibt sachlich.',
        },
        {
          id: 'i2-5-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die Relativpronomen.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Unsere neue Wohnung, ' },
            { kind: 'GAP', gapId: 'r1', solution: ['die'], width: 4 },
            { kind: 'TEXT', text: ' im Zentrum liegt, ist hell und ruhig. Der Vermieter, ' },
            { kind: 'GAP', gapId: 'r2', solution: ['den'], width: 5 },
            { kind: 'TEXT', text: ' wir gestern getroffen haben, war sehr freundlich. Die Nachbarn, ' },
            { kind: 'GAP', gapId: 'r3', solution: ['mit denen'], width: 10 },
            { kind: 'TEXT', text: ' wir gesprochen haben, sind auch nett. Nur das Treppenhaus, ' },
            { kind: 'GAP', gapId: 'r4', solution: ['dessen'], width: 7 },
            { kind: 'TEXT', text: ' Licht seit Wochen kaputt ist, gefällt mir nicht. Das ist ein Problem, ' },
            { kind: 'GAP', gapId: 'r5', solution: ['das'], width: 4 },
            { kind: 'TEXT', text: ' wir schnell lösen müssen.' },
          ],
        },
        {
          id: 'i2-5-choice',
          type: 'CHOICE',
          instruction: 'Welcher Satz ist am besten geeignet, um ein Problem anzusprechen?',
          multiple: false,
          options: [
            { id: 'k1', text: 'Sie machen jeden Abend so einen Lärm, das ist unmöglich!' },
            { id: 'k2', text: 'Mir ist aufgefallen, dass abends oft laute Musik läuft. Könnten wir uns vielleicht auf 22 Uhr einigen?' },
            { id: 'k3', text: 'Wenn das nicht aufhört, rufe ich die Polizei.' },
            { id: 'k4', text: 'Alle im Haus finden Sie zu laut.' },
          ],
          solution: ['k2'],
          explanation:
            'Der zweite Satz beschreibt die Situation konkret, macht keinen Vorwurf und schlägt eine Lösung vor. Drohungen und „alle finden …“ führen eher zum Streit.',
        },
        {
          id: 'i2-5-info-beschwerde',
          type: 'INFO',
          variant: 'TIP',
          title: 'Eine Beschwerde schreiben',
          text: 'Eine schriftliche Beschwerde ist formell und sachlich. Sie beschreibt das Problem mit Datum und Ort, sagt, was man schon versucht hat, und nennt klar, was man erwartet – oft mit einer Frist.',
          table: {
            headers: ['Teil', 'Redemittel'],
            rows: [
              ['Anrede', 'Sehr geehrte Damen und Herren, / Sehr geehrte Frau …,'],
              ['Anlass', 'ich wende mich an Sie, weil …'],
              ['Problem', 'Seit dem … funktioniert … nicht mehr. / Leider muss ich mich über … beschweren.'],
              ['bisher', 'Ich habe bereits … / Trotz mehrerer Gespräche …'],
              ['Erwartung', 'Ich bitte Sie, … bis zum … zu reparieren / zu klären.'],
              ['Schluss', 'Mit freundlichen Grüßen'],
            ],
          },
        },
        {
          id: 'i2-5-match',
          type: 'MATCHING',
          instruction: 'In welche Reihenfolge gehören die Teile einer Beschwerde? Ordnen Sie zu.',
          left: [
            { id: 'm1', text: '1. Teil' },
            { id: 'm2', text: '2. Teil' },
            { id: 'm3', text: '3. Teil' },
            { id: 'm4', text: '4. Teil' },
          ],
          right: [
            { id: 'y1', text: 'Sehr geehrte Damen und Herren,' },
            { id: 'y2', text: 'seit dem 3. März funktioniert die Heizung in meiner Wohnung nicht.' },
            { id: 'y3', text: 'Ich bitte Sie, sie bis Freitag reparieren zu lassen.' },
            { id: 'y4', text: 'Mit freundlichen Grüßen' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'y1' },
            { leftId: 'm2', rightId: 'y2' },
            { leftId: 'm3', rightId: 'y3' },
            { leftId: 'm4', rightId: 'y4' },
          ],
        },
        {
          id: 'i2-5-writing',
          type: 'WRITING',
          instruction: 'Eine Beschwerde an die Hausverwaltung',
          prompt:
            'Im Treppenhaus Ihres Hauses ist seit drei Wochen das Licht kaputt, und die Haustür schließt nicht richtig. Sie haben schon zweimal mit dem Hausmeister gesprochen, aber nichts ist passiert. Schreiben Sie eine formelle Beschwerde an die Hausverwaltung: Beschreiben Sie die Probleme, sagen Sie, was Sie schon versucht haben, und nennen Sie eine Frist. Benutzen Sie mindestens zwei Relativsätze.',
          minWords: 80,
          maxWords: 180,
          aiFeedback: true,
          sampleAnswer:
            'Sehr geehrte Damen und Herren,\n\nich wohne seit zwei Jahren in der Karl-Heine-Straße 14 und wende mich an Sie, weil es in unserem Haus zwei Probleme gibt, die dringend gelöst werden müssen.\n\nSeit drei Wochen funktioniert das Licht im Treppenhaus nicht. Abends ist es dort völlig dunkel, und besonders für die älteren Nachbarn, die im dritten Stock wohnen, ist das gefährlich. Außerdem schließt die Haustür nicht mehr richtig, sodass jeder ins Haus kommen kann.\n\nIch habe bereits zweimal mit dem Hausmeister gesprochen, dem ich die Probleme genau beschrieben habe. Leider ist bis heute nichts passiert.\n\nIch bitte Sie, das Licht und die Tür bis zum 20. November reparieren zu lassen.\n\nMit freundlichen Grüßen\nSamira Haddad',
        },
      ],
    },
  },
];
