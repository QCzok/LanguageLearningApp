import type { UnitSeed } from './chapter-beginner-1';

/**
 * Beginner, Kapitel 3: „Essen und Trinken“
 *
 * Fünf Seiten, Aufbau wie in den Kapiteln davor.
 *
 * Hier kommt der erste Fall nach dem Nominativ: der Akkusativ. Er steht nicht
 * auf einer eigenen Seite am Ende, sondern dort, wo man ihn zum ersten Mal
 * braucht – beim Bestellen. „Ich nehme einen Kaffee“ ist der Satz, an dem
 * man den Unterschied zu „ein Kaffee“ hört. Seite 3 zeigt dann, dass sich
 * nur das Maskulinum ändert, und nimmt damit der Regel ihren Schrecken.
 *
 * Einsprachig deutsch, Erklärungen mit Übersetzung wie in Kapitel 1.
 */
const v = 1;

export const BEGINNER_3_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Lebensmittel und „gern“: was man mag und was nicht.
  {
    order: 1,
    title: 'Was isst du gern?',
    subtitle: 'Lebensmittel, gern und nicht gern',
    estimatedMinutes: 20,
    content: {
      version: v,
      blocks: [
        { id: 'b3-1-h1', type: 'HEADING', level: 1, text: 'Was isst du gern?' },
        {
          id: 'b3-1-image',
          type: 'IMAGE',
          url: 'illustration:market-stall',
          alt: 'Ein Marktstand mit Obst und Gemüse in Kisten, darüber eine gestreifte Markise.',
          caption: 'Samstagmorgen auf dem Markt.',
        },
        {
          id: 'b3-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: Lebensmittel',
          items: [
            { term: 'Brot', article: 'das', plural: 'die Brote', translations: { en: 'bread' } },
            { term: 'Brötchen', article: 'das', plural: 'die Brötchen', translations: { en: 'bread roll' } },
            { term: 'Käse', article: 'der', translations: { en: 'cheese' } },
            { term: 'Wurst', article: 'die', plural: 'die Würste', translations: { en: 'sausage / cold cuts' } },
            { term: 'Ei', article: 'das', plural: 'die Eier', translations: { en: 'egg' } },
            { term: 'Apfel', article: 'der', plural: 'die Äpfel', translations: { en: 'apple' } },
            { term: 'Tomate', article: 'die', plural: 'die Tomaten', translations: { en: 'tomato' } },
            { term: 'Kartoffel', article: 'die', plural: 'die Kartoffeln', translations: { en: 'potato' } },
            { term: 'Fleisch', article: 'das', translations: { en: 'meat' } },
            { term: 'Fisch', article: 'der', plural: 'die Fische', translations: { en: 'fish' } },
            { term: 'Kaffee', article: 'der', translations: { en: 'coffee' } },
            { term: 'Tee', article: 'der', translations: { en: 'tea' } },
            { term: 'Wasser', article: 'das', translations: { en: 'water' } },
            { term: 'Milch', article: 'die', translations: { en: 'milk' } },
            { term: 'Saft', article: 'der', plural: 'die Säfte', translations: { en: 'juice' } },
          ],
        },
        {
          id: 'b3-1-match',
          type: 'MATCHING',
          instruction: 'Was ist was? Ordnen Sie zu.',
          left: [
            { id: 'l1', text: 'der Apfel' },
            { id: 'l2', text: 'die Kartoffel' },
            { id: 'l3', text: 'der Saft' },
            { id: 'l4', text: 'der Käse' },
          ],
          right: [
            { id: 'r1', text: 'Obst' },
            { id: 'r2', text: 'Gemüse' },
            { id: 'r3', text: 'ein Getränk' },
            { id: 'r4', text: 'ein Milchprodukt' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'b3-1-dlg',
          type: 'DIALOGUE',
          title: 'In der Kantine',
          lines: [
            { speaker: 'Jonas', text: 'Was isst du gern, Mira?' },
            { speaker: 'Mira', text: 'Ich esse gern Fisch und Gemüse. Fleisch esse ich nicht so gern.' },
            { speaker: 'Jonas', text: 'Und was trinkst du gern?' },
            { speaker: 'Mira', text: 'Tee. Kaffee trinke ich gar nicht. Und du?' },
            { speaker: 'Jonas', text: 'Ich esse am liebsten Pizza!' },
          ],
        },
        {
          id: 'b3-1-info-gern',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'gern – nicht gern – am liebsten',
          text: '„gern“ steht nach dem Verb und zeigt, dass man etwas mag. „am liebsten“ ist die stärkste Form. Das Verb „essen“ ist unregelmäßig: du isst, er isst.',
          translations: {
            en: {
              title: 'gern – nicht gern – am liebsten',
              text: '„gern“ comes after the verb and shows that you like something. „am liebsten“ is the strongest form (like best). The verb „essen“ (to eat) is irregular: du isst, er isst.',
            },
            es: {
              title: 'gern – nicht gern – am liebsten',
              text: '„gern“ va después del verbo y muestra que algo te gusta. „am liebsten“ es la forma más fuerte (lo que más te gusta). El verbo „essen“ (comer) es irregular: du isst, er isst.',
            },
            fr: {
              title: 'gern – nicht gern – am liebsten',
              text: '« gern » se place après le verbe et indique qu’on aime quelque chose. « am liebsten » est la forme la plus forte (ce qu’on préfère). Le verbe « essen » (manger) est irrégulier : du isst, er isst.',
            },
            it: {
              title: 'gern – nicht gern – am liebsten',
              text: '„gern“ va dopo il verbo e indica che qualcosa piace. „am liebsten“ è la forma più forte (ciò che piace di più). Il verbo „essen“ (mangiare) è irregolare: du isst, er isst.',
            },
          },
          table: {
            headers: ['', 'Beispiel'],
            rows: [
              ['😊😊', 'Ich esse am liebsten Pizza.'],
              ['😊', 'Ich esse gern Fisch.'],
              ['😐', 'Ich esse nicht so gern Fleisch.'],
              ['☹️', 'Ich esse nicht gern Käse.'],
            ],
          },
        },
        {
          id: 'b3-1-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie: esse, isst, trinke, trinkst.',
          wordBank: ['esse', 'isst', 'trinke', 'trinkst'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '▸ Was ' },
            { kind: 'GAP', gapId: 'e1', solution: ['trinkst'], width: 8 },
            { kind: 'TEXT', text: ' du morgens?\n▸ Ich ' },
            { kind: 'GAP', gapId: 'e2', solution: ['trinke'], width: 8 },
            { kind: 'TEXT', text: ' Kaffee.\n▸ Und was ' },
            { kind: 'GAP', gapId: 'e3', solution: ['isst'], width: 6 },
            { kind: 'TEXT', text: ' du?\n▸ Ich ' },
            { kind: 'GAP', gapId: 'e4', solution: ['esse'], width: 6 },
            { kind: 'TEXT', text: ' ein Brötchen mit Marmelade.' },
          ],
        },
        {
          id: 'b3-1-order',
          type: 'ORDERING',
          instruction: 'Bilden Sie einen Satz.',
          items: [
            { id: 'o1', text: 'Ich' },
            { id: 'o2', text: 'trinke' },
            { id: 'o3', text: 'gern' },
            { id: 'o4', text: 'Tee.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4'],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – bestellen und bezahlen im Café.
  {
    order: 2,
    title: 'Im Café',
    subtitle: 'Bestellen und bezahlen',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'b3-2-h1', type: 'HEADING', level: 1, text: 'Im Café' },
        {
          id: 'b3-2-image',
          type: 'IMAGE',
          url: 'illustration:restaurant-table',
          alt: 'Ein gedeckter Tisch mit zwei Tassen, einem Stück Kuchen und einer Speisekarte.',
          caption: 'Kaffee und Kuchen am Nachmittag.',
        },
        {
          id: 'b3-2-dlg1',
          type: 'DIALOGUE',
          title: 'Bestellen',
          lines: [
            { speaker: 'Kellner', text: 'Guten Tag! Was möchten Sie?' },
            { speaker: 'Frau Behrens', text: 'Ich möchte einen Kaffee, bitte.' },
            { speaker: 'Kellner', text: 'Gern. Und Sie?' },
            { speaker: 'Herr Okafor', text: 'Ich nehme einen Tee und ein Stück Apfelkuchen.' },
            { speaker: 'Kellner', text: 'Mit Sahne?' },
            { speaker: 'Herr Okafor', text: 'Ja, gern.' },
          ],
        },
        {
          id: 'b3-2-dlg2',
          type: 'DIALOGUE',
          title: 'Bezahlen',
          lines: [
            { speaker: 'Frau Behrens', text: 'Wir möchten bitte bezahlen.' },
            { speaker: 'Kellner', text: 'Zusammen oder getrennt?' },
            { speaker: 'Frau Behrens', text: 'Zusammen, bitte.' },
            { speaker: 'Kellner', text: 'Das macht elf Euro sechzig.' },
            { speaker: 'Frau Behrens', text: 'Zwölf Euro. Stimmt so.' },
            { speaker: 'Kellner', text: 'Vielen Dank!' },
          ],
        },
        {
          id: 'b3-2-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: Im Café',
          items: [
            { term: 'Ich möchte …', translations: { en: 'I would like …' }, example: 'Ich möchte einen Kaffee.' },
            { term: 'Ich nehme …', translations: { en: 'I’ll have …' }, example: 'Ich nehme einen Tee.' },
            { term: 'bestellen', translations: { en: 'to order' } },
            { term: 'bezahlen', translations: { en: 'to pay' } },
            { term: 'zusammen', translations: { en: 'together' } },
            { term: 'getrennt', translations: { en: 'separately' } },
            { term: 'Kuchen', article: 'der', plural: 'die Kuchen', translations: { en: 'cake' } },
            { term: 'Sahne', article: 'die', translations: { en: 'whipped cream' } },
            { term: 'Rechnung', article: 'die', plural: 'die Rechnungen', translations: { en: 'bill' } },
            { term: 'Stimmt so.', translations: { en: 'Keep the change.' } },
          ],
        },
        {
          id: 'b3-2-info-moechte',
          type: 'INFO',
          variant: 'TIP',
          title: 'Höflich bestellen: möchte',
          text: '„Ich möchte“ ist die höfliche Form von „ich will“. Im Café und im Geschäft sagt man fast immer „möchte“. Achtung: Bei „er/sie“ gibt es kein -t: er möchte.',
          translations: {
            en: {
              title: 'Ordering politely: möchte',
              text: '„Ich möchte“ (I would like) is the polite form of „ich will“ (I want). In cafés and shops people almost always say „möchte“. Careful: there is no -t with „er/sie“: er möchte.',
            },
            es: {
              title: 'Pedir con cortesía: möchte',
              text: '„Ich möchte“ (me gustaría) es la forma cortés de „ich will“ (quiero). En la cafetería y en las tiendas casi siempre se dice „möchte“. Atención: con „er/sie“ no hay -t: er möchte.',
            },
            fr: {
              title: 'Commander poliment : möchte',
              text: '« Ich möchte » (je voudrais) est la forme polie de « ich will » (je veux). Au café et dans les magasins, on dit presque toujours « möchte ». Attention : pas de -t avec « er/sie » : er möchte.',
            },
            it: {
              title: 'Ordinare con gentilezza: möchte',
              text: '„Ich möchte“ (vorrei) è la forma cortese di „ich will“ (voglio). Al bar e nei negozi si dice quasi sempre „möchte“. Attenzione: con „er/sie“ non c’è la -t: er möchte.',
            },
          },
          table: {
            headers: ['Person', 'möchten'],
            rows: [
              ['ich', 'möchte'],
              ['du', 'möchtest'],
              ['er / sie / es', 'möchte'],
              ['wir', 'möchten'],
              ['ihr', 'möchtet'],
              ['sie / Sie', 'möchten'],
            ],
          },
        },
        {
          id: 'b3-2-choice',
          type: 'CHOICE',
          instruction: 'Sie sind im Café. Was sagen Sie zum Kellner?',
          multiple: false,
          options: [
            { id: 'c1', text: 'Ich will Wasser!' },
            { id: 'c2', text: 'Ich möchte ein Wasser, bitte.' },
            { id: 'c3', text: 'Wasser möchte er.' },
          ],
          solution: ['c2'],
          explanation: '„Ich möchte …, bitte“ ist die höfliche Bestellung. „Ich will“ klingt im Café unhöflich.',
          explanationTranslations: {
            en: '„Ich möchte …, bitte“ is the polite way to order. „Ich will“ sounds rude in a café.',
            es: '„Ich möchte …, bitte“ es la forma cortés de pedir. „Ich will“ suena maleducado en una cafetería.',
            fr: '« Ich möchte …, bitte » est la façon polie de commander. « Ich will » sonne impoli au café.',
            it: '„Ich möchte …, bitte“ è il modo cortese di ordinare. „Ich will“ al bar suona scortese.',
          },
        },
        {
          id: 'b3-2-order',
          type: 'ORDERING',
          instruction: 'Bringen Sie das Gespräch in die richtige Reihenfolge.',
          items: [
            { id: 's1', text: 'Was möchten Sie?' },
            { id: 's2', text: 'Einen Kaffee, bitte.' },
            { id: 's3', text: 'Ich möchte bitte bezahlen.' },
            { id: 's4', text: 'Das macht drei Euro zwanzig.' },
          ],
          solution: ['s1', 's2', 's3', 's4'],
        },
        {
          id: 'b3-2-info-kultur',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'Trinkgeld',
          text: 'In Deutschland gibt man im Café und im Restaurant meistens etwa fünf bis zehn Prozent Trinkgeld. Man legt es nicht auf den Tisch, sondern nennt beim Bezahlen den Betrag, den man zahlen will: „Zwölf Euro, bitte“ oder „Stimmt so“.',
          translations: {
            en: {
              title: 'Tipping',
              text: 'In Germany people usually tip about five to ten percent in cafés and restaurants. You don’t leave it on the table; instead, when paying you say the total you want to pay: „Zwölf Euro, bitte“ or „Stimmt so“ (keep the change).',
            },
            es: {
              title: 'La propina',
              text: 'En Alemania se suele dejar entre un cinco y un diez por ciento de propina en cafeterías y restaurantes. No se deja en la mesa: al pagar se dice el importe total que se quiere pagar: „Zwölf Euro, bitte“ o „Stimmt so“ (quédese con el cambio).',
            },
            fr: {
              title: 'Le pourboire',
              text: 'En Allemagne, on laisse généralement cinq à dix pour cent de pourboire au café et au restaurant. On ne le pose pas sur la table : en payant, on annonce le montant total qu’on veut régler : « Zwölf Euro, bitte » ou « Stimmt so » (gardez la monnaie).',
            },
            it: {
              title: 'La mancia',
              text: 'In Germania al bar e al ristorante si lascia di solito dal cinque al dieci per cento di mancia. Non la si lascia sul tavolo: pagando si dice l’importo totale che si vuole pagare: „Zwölf Euro, bitte“ oppure „Stimmt so“ (tenga il resto).',
            },
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – der Akkusativ: nur das Maskulinum ändert sich.
  {
    order: 3,
    title: 'Ich nehme einen Kaffee',
    subtitle: 'Der Akkusativ',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'b3-3-h1', type: 'HEADING', level: 1, text: 'Ich nehme einen Kaffee' },
        {
          id: 'b3-3-intro',
          type: 'TEXT',
          text: 'Vergleichen Sie: „Das ist ein Kaffee.“ – „Ich nehme einen Kaffee.“ Im zweiten Satz ist der Kaffee das Objekt: Er ist das, was man nimmt. Dafür braucht das Deutsche einen eigenen Fall, den Akkusativ.',
          translations: {
            en: 'Compare: „Das ist ein Kaffee.“ (That is a coffee.) – „Ich nehme einen Kaffee.“ (I’ll have a coffee.) In the second sentence the coffee is the object: it is what you take. German uses a separate case for this, the accusative.',
            es: 'Compare: „Das ist ein Kaffee.“ (Eso es un café.) – „Ich nehme einen Kaffee.“ (Tomo un café.) En la segunda frase el café es el objeto: es lo que se toma. Para eso el alemán tiene un caso propio, el acusativo.',
            fr: 'Comparez : « Das ist ein Kaffee. » (C’est un café.) – « Ich nehme einen Kaffee. » (Je prends un café.) Dans la deuxième phrase, le café est l’objet : c’est ce qu’on prend. L’allemand utilise pour cela un cas particulier, l’accusatif.',
            it: 'Confronti: „Das ist ein Kaffee.“ (Questo è un caffè.) – „Ich nehme einen Kaffee.“ (Prendo un caffè.) Nella seconda frase il caffè è l’oggetto: è ciò che si prende. Per questo il tedesco ha un caso apposito, l’accusativo.',
          },
        },
        {
          id: 'b3-3-info-akk',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Akkusativ: Nur „der“ ändert sich',
          text: 'Im Akkusativ ändern sich nur die männlichen Artikel: der wird zu den, ein zu einen, kein zu keinen. Weiblich, sächlich und Plural bleiben gleich. Nach Verben wie nehmen, möchten, haben, essen, trinken und kaufen steht der Akkusativ.',
          translations: {
            en: {
              title: 'Accusative: only „der“ changes',
              text: 'In the accusative only the masculine articles change: der becomes den, ein becomes einen, kein becomes keinen. Feminine, neuter and plural stay the same. Verbs like nehmen, möchten, haben, essen, trinken and kaufen take the accusative.',
            },
            es: {
              title: 'Acusativo: solo cambia „der“',
              text: 'En acusativo solo cambian los artículos masculinos: der pasa a den, ein a einen, kein a keinen. Femenino, neutro y plural no cambian. Verbos como nehmen, möchten, haben, essen, trinken y kaufen llevan acusativo.',
            },
            fr: {
              title: 'Accusatif : seul « der » change',
              text: 'À l’accusatif, seuls les articles masculins changent : der devient den, ein devient einen, kein devient keinen. Le féminin, le neutre et le pluriel restent identiques. Les verbes comme nehmen, möchten, haben, essen, trinken et kaufen sont suivis de l’accusatif.',
            },
            it: {
              title: 'Accusativo: cambia solo „der“',
              text: 'All’accusativo cambiano solo gli articoli maschili: der diventa den, ein diventa einen, kein diventa keinen. Femminile, neutro e plurale restano uguali. Verbi come nehmen, möchten, haben, essen, trinken e kaufen reggono l’accusativo.',
            },
          },
          table: {
            headers: ['', 'männlich', 'sächlich', 'weiblich', 'Plural'],
            rows: [
              ['Nominativ', 'der / ein Saft', 'das / ein Ei', 'die / eine Tomate', 'die / – Äpfel'],
              ['Akkusativ', 'den / einen Saft', 'das / ein Ei', 'die / eine Tomate', 'die / – Äpfel'],
              ['verneint (Akk.)', 'keinen Saft', 'kein Ei', 'keine Tomate', 'keine Äpfel'],
            ],
          },
        },
        {
          id: 'b3-3-cloze-akk',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie ein, eine oder einen.',
          wordBank: ['ein', 'eine', 'einen'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Ich nehme ' },
            { kind: 'GAP', gapId: 'a1', solution: ['einen'], width: 6 },
            { kind: 'TEXT', text: ' Tee. (der Tee)\n2. Wir möchten ' },
            { kind: 'GAP', gapId: 'a2', solution: ['ein'], width: 6 },
            { kind: 'TEXT', text: ' Wasser. (das Wasser)\n3. Er isst ' },
            { kind: 'GAP', gapId: 'a3', solution: ['eine'], width: 6 },
            { kind: 'TEXT', text: ' Suppe. (die Suppe)\n4. Ich kaufe ' },
            { kind: 'GAP', gapId: 'a4', solution: ['einen'], width: 6 },
            { kind: 'TEXT', text: ' Apfel. (der Apfel)' },
          ],
        },
        {
          id: 'b3-3-choice-akk',
          type: 'CHOICE',
          instruction: 'In welchen Sätzen steht ein Akkusativ? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'k1', text: 'Der Kaffee ist heiß.' },
            { id: 'k2', text: 'Ich trinke den Kaffee.' },
            { id: 'k3', text: 'Wir haben keinen Käse.' },
            { id: 'k4', text: 'Das ist ein Käse aus Frankreich.' },
          ],
          solution: ['k2', 'k3'],
          explanation:
            'Nach „trinken“ und „haben“ steht der Akkusativ: den Kaffee, keinen Käse. Nach „sein“ steht immer der Nominativ: Der Kaffee ist …, Das ist ein Käse.',
          explanationTranslations: {
            en: 'After „trinken“ and „haben“ comes the accusative: den Kaffee, keinen Käse. After „sein“ it is always the nominative: Der Kaffee ist …, Das ist ein Käse.',
            es: 'Después de „trinken“ y „haben“ va acusativo: den Kaffee, keinen Käse. Después de „sein“ siempre va nominativo: Der Kaffee ist …, Das ist ein Käse.',
            fr: 'Après « trinken » et « haben », on emploie l’accusatif : den Kaffee, keinen Käse. Après « sein », c’est toujours le nominatif : Der Kaffee ist …, Das ist ein Käse.',
            it: 'Dopo „trinken“ e „haben“ si usa l’accusativo: den Kaffee, keinen Käse. Dopo „sein“ c’è sempre il nominativo: Der Kaffee ist …, Das ist ein Käse.',
          },
        },
        {
          id: 'b3-3-info-kein',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'nicht oder kein?',
          text: 'Nomen mit „ein“ oder ohne Artikel verneint man mit „kein“: Ich habe einen Apfel. → Ich habe keinen Apfel. Ich trinke Milch. → Ich trinke keine Milch. Alles andere verneint man mit „nicht“: Ich esse nicht gern Fisch.',
          translations: {
            en: {
              title: 'nicht or kein?',
              text: 'Nouns with „ein“ or without an article are negated with „kein“: Ich habe einen Apfel. → Ich habe keinen Apfel. Ich trinke Milch. → Ich trinke keine Milch. Everything else is negated with „nicht“: Ich esse nicht gern Fisch.',
            },
            es: {
              title: '¿nicht o kein?',
              text: 'Los sustantivos con „ein“ o sin artículo se niegan con „kein“: Ich habe einen Apfel. → Ich habe keinen Apfel. Ich trinke Milch. → Ich trinke keine Milch. Todo lo demás se niega con „nicht“: Ich esse nicht gern Fisch.',
            },
            fr: {
              title: 'nicht ou kein ?',
              text: 'Les noms avec « ein » ou sans article se nient avec « kein » : Ich habe einen Apfel. → Ich habe keinen Apfel. Ich trinke Milch. → Ich trinke keine Milch. Tout le reste se nie avec « nicht » : Ich esse nicht gern Fisch.',
            },
            it: {
              title: 'nicht o kein?',
              text: 'I sostantivi con „ein“ o senza articolo si negano con „kein“: Ich habe einen Apfel. → Ich habe keinen Apfel. Ich trinke Milch. → Ich trinke keine Milch. Tutto il resto si nega con „nicht“: Ich esse nicht gern Fisch.',
            },
          },
        },
        {
          id: 'b3-3-cloze-kein',
          type: 'CLOZE',
          instruction: 'Verneinen Sie mit kein, keine oder keinen.',
          wordBank: ['kein', 'keine', 'keinen'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Tut mir leid, wir haben ' },
            { kind: 'GAP', gapId: 'n1', solution: ['keinen'], width: 7 },
            { kind: 'TEXT', text: ' Kuchen mehr.\n2. Ich trinke ' },
            { kind: 'GAP', gapId: 'n2', solution: ['keine'], width: 7 },
            { kind: 'TEXT', text: ' Milch.\n3. Er isst ' },
            { kind: 'GAP', gapId: 'n3', solution: ['kein'], width: 7 },
            { kind: 'TEXT', text: ' Fleisch.\n4. Wir kaufen heute ' },
            { kind: 'GAP', gapId: 'n4', solution: ['keine'], width: 7 },
            { kind: 'TEXT', text: ' Eier.' },
          ],
        },
        {
          id: 'b3-3-order',
          type: 'ORDERING',
          instruction: 'Bilden Sie einen Satz.',
          items: [
            { id: 'x1', text: 'Ich' },
            { id: 'x2', text: 'möchte' },
            { id: 'x3', text: 'einen' },
            { id: 'x4', text: 'Orangensaft,' },
            { id: 'x5', text: 'bitte.' },
          ],
          solution: ['x1', 'x2', 'x3', 'x4', 'x5'],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – im Supermarkt: Mengen und Preise.
  {
    order: 4,
    title: 'Was kostet das?',
    subtitle: 'Einkaufen, Mengen und Preise',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'b3-4-h1', type: 'HEADING', level: 1, text: 'Was kostet das?' },
        {
          id: 'b3-4-image',
          type: 'IMAGE',
          url: 'illustration:shopping-bags',
          alt: 'Zwei volle Einkaufstaschen, aus denen Brot, Obst und eine Flasche herausschauen.',
          caption: 'Der Wocheneinkauf.',
        },
        {
          id: 'b3-4-dlg',
          type: 'DIALOGUE',
          title: 'Auf dem Markt',
          lines: [
            { speaker: 'Verkäuferin', text: 'Guten Morgen! Was darf es sein?' },
            { speaker: 'Kunde', text: 'Ich hätte gern ein Kilo Tomaten.' },
            { speaker: 'Verkäuferin', text: 'Gern. Sonst noch etwas?' },
            { speaker: 'Kunde', text: 'Ja, sechs Eier. Was kosten die Äpfel?' },
            { speaker: 'Verkäuferin', text: 'Das Kilo kostet zwei Euro fünfzig.' },
            { speaker: 'Kunde', text: 'Dann nehme ich ein Kilo. Das ist alles.' },
            { speaker: 'Verkäuferin', text: 'Das macht acht Euro neunzig.' },
          ],
        },
        {
          id: 'b3-4-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: Mengen und Verpackungen',
          items: [
            { term: 'Kilo', article: 'das', translations: { en: 'kilo' }, example: 'ein Kilo Kartoffeln' },
            { term: 'Gramm', article: 'das', translations: { en: 'gram' }, example: '200 Gramm Käse' },
            { term: 'Liter', article: 'der', translations: { en: 'litre' }, example: 'ein Liter Milch' },
            { term: 'Flasche', article: 'die', plural: 'die Flaschen', translations: { en: 'bottle' }, example: 'eine Flasche Wasser' },
            { term: 'Packung', article: 'die', plural: 'die Packungen', translations: { en: 'pack / packet' }, example: 'eine Packung Reis' },
            { term: 'Dose', article: 'die', plural: 'die Dosen', translations: { en: 'can / tin' } },
            { term: 'Stück', article: 'das', translations: { en: 'piece' }, example: 'ein Stück Kuchen' },
            { term: 'kosten', translations: { en: 'to cost' } },
            { term: 'teuer', translations: { en: 'expensive' } },
            { term: 'billig / günstig', translations: { en: 'cheap / good value' } },
          ],
        },
        {
          id: 'b3-4-match-menge',
          type: 'MATCHING',
          instruction: 'Was passt zusammen?',
          left: [
            { id: 'q1', text: 'eine Flasche' },
            { id: 'q2', text: 'ein Kilo' },
            { id: 'q3', text: 'ein Stück' },
            { id: 'q4', text: 'eine Packung' },
          ],
          right: [
            { id: 'p1', text: 'Wasser' },
            { id: 'p2', text: 'Kartoffeln' },
            { id: 'p3', text: 'Kuchen' },
            { id: 'p4', text: 'Nudeln' },
          ],
          solution: [
            { leftId: 'q1', rightId: 'p1' },
            { leftId: 'q2', rightId: 'p2' },
            { leftId: 'q3', rightId: 'p3' },
            { leftId: 'q4', rightId: 'p4' },
          ],
        },
        {
          id: 'b3-4-info-preis',
          type: 'INFO',
          variant: 'TIP',
          title: 'Preise lesen und sagen',
          text: 'Beim Sprechen sagt man zuerst die Euro, dann die Cent – das Wort „Cent“ lässt man meistens weg. Nach Preisen fragt man mit „Was kostet …?“ (Singular) oder „Was kosten …?“ (Plural).',
          translations: {
            en: {
              title: 'Reading and saying prices',
              text: 'When speaking, you say the euros first, then the cents – the word „Cent“ is usually left out. To ask about a price: „Was kostet …?“ (singular) or „Was kosten …?“ (plural).',
            },
            es: {
              title: 'Leer y decir precios',
              text: 'Al hablar se dicen primero los euros y luego los céntimos – la palabra „Cent“ normalmente se omite. Para preguntar el precio: „Was kostet …?“ (singular) o „Was kosten …?“ (plural).',
            },
            fr: {
              title: 'Lire et dire les prix',
              text: 'À l’oral, on dit d’abord les euros, puis les centimes – le mot « Cent » est généralement omis. Pour demander un prix : « Was kostet …? » (singulier) ou « Was kosten …? » (pluriel).',
            },
            it: {
              title: 'Leggere e dire i prezzi',
              text: 'Parlando si dicono prima gli euro e poi i centesimi – la parola „Cent“ di solito si omette. Per chiedere il prezzo: „Was kostet …?“ (singolare) o „Was kosten …?“ (plurale).',
            },
          },
          table: {
            headers: ['geschrieben', 'gesprochen'],
            rows: [
              ['0,99 €', 'neunundneunzig Cent'],
              ['2,50 €', 'zwei Euro fünfzig'],
              ['8,90 €', 'acht Euro neunzig'],
              ['15,00 €', 'fünfzehn Euro'],
            ],
          },
        },
        {
          id: 'b3-4-choice-kostet',
          type: 'CHOICE',
          instruction: '„Was ___ die Bananen?“ Was passt?',
          multiple: false,
          options: [
            { id: 'k1', text: 'kostet' },
            { id: 'k2', text: 'kosten' },
            { id: 'k3', text: 'kostest' },
          ],
          solution: ['k2'],
          explanation: '„die Bananen“ ist Plural, deshalb: Was kosten die Bananen?',
          explanationTranslations: {
            en: '„die Bananen“ is plural, so: Was kosten die Bananen?',
            es: '„die Bananen“ es plural, por eso: Was kosten die Bananen?',
            fr: '« die Bananen » est au pluriel, donc : Was kosten die Bananen?',
            it: '„die Bananen“ è plurale, quindi: Was kosten die Bananen?',
          },
        },
        {
          id: 'b3-4-audio',
          type: 'AUDIO',
          title: 'Hören Sie: Vier Preise',
          audioUrl: 'placeholder://b3-prices',
          durationSec: 20,
          transcript:
            'Das macht drei Euro zwanzig. – Das Kilo kostet einen Euro neunundneunzig. – Zusammen elf Euro sechzig. – Die Flasche kostet neunundachtzig Cent.',
        },
        {
          id: 'b3-4-cloze-preis',
          type: 'CLOZE',
          instruction: 'Wie sagt man den Preis? Ergänzen Sie.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '3,20 € = drei Euro ' },
            { kind: 'GAP', gapId: 'pr1', solution: ['zwanzig'], width: 9 },
            { kind: 'TEXT', text: '\n7,50 € = ' },
            { kind: 'GAP', gapId: 'pr2', solution: ['sieben'], width: 7 },
            { kind: 'TEXT', text: ' Euro fünfzig\n12,40 € = zwölf Euro ' },
            { kind: 'GAP', gapId: 'pr3', solution: ['vierzig'], width: 9 },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – Rückblick, zum Schluss eine Einkaufsliste mit Sätzen.
  {
    order: 5,
    title: 'Kannst du das schon?',
    subtitle: 'Rückblick auf das ganze Kapitel',
    estimatedMinutes: 15,
    content: {
      version: v,
      blocks: [
        { id: 'b3-5-h1', type: 'HEADING', level: 1, text: 'Kannst du das schon?' },
        {
          id: 'b3-5-intro',
          type: 'TEXT',
          text: 'Prüfen Sie, was Sie aus Kapitel 3 mitnehmen. Am Ende schreiben Sie über Ihr Frühstück.',
          translations: {
            en: 'Check what you take away from Chapter 3. At the end, you’ll write about your breakfast.',
            es: 'Compruebe qué se lleva del Capítulo 3. Al final escribirá sobre su desayuno.',
            fr: 'Vérifiez ce que vous retenez du chapitre 3. À la fin, vous écrirez sur votre petit-déjeuner.',
            it: 'Verifichi cosa porta a casa dal Capitolo 3. Alla fine scriverà della sua colazione.',
          },
        },
        {
          id: 'b3-5-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie das Gespräch im Café.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '▸ Was ' },
            { kind: 'GAP', gapId: 'r1', solution: ['möchten', 'moechten'], width: 8 },
            { kind: 'TEXT', text: ' Sie?\n▸ Ich nehme ' },
            { kind: 'GAP', gapId: 'r2', solution: ['einen'], width: 6 },
            { kind: 'TEXT', text: ' Tee und ' },
            { kind: 'GAP', gapId: 'r3', solution: ['ein'], width: 5 },
            { kind: 'TEXT', text: ' Stück Kuchen.\n▸ Tut mir leid, wir haben ' },
            { kind: 'GAP', gapId: 'r4', solution: ['keinen'], width: 7 },
            { kind: 'TEXT', text: ' Kuchen mehr.\n▸ Schade. Was ' },
            { kind: 'GAP', gapId: 'r5', solution: ['kostet'], width: 7 },
            { kind: 'TEXT', text: ' der Tee?' },
          ],
        },
        {
          id: 'b3-5-match',
          type: 'MATCHING',
          instruction: 'Ordnen Sie Frage und Antwort zu.',
          left: [
            { id: 'm1', text: 'Was darf es sein?' },
            { id: 'm2', text: 'Sonst noch etwas?' },
            { id: 'm3', text: 'Zusammen oder getrennt?' },
            { id: 'm4', text: 'Was isst du gern?' },
          ],
          right: [
            { id: 'y1', text: 'Ein Kilo Äpfel, bitte.' },
            { id: 'y2', text: 'Nein, danke. Das ist alles.' },
            { id: 'y3', text: 'Getrennt, bitte.' },
            { id: 'y4', text: 'Am liebsten Nudeln.' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'y1' },
            { leftId: 'm2', rightId: 'y2' },
            { leftId: 'm3', rightId: 'y3' },
            { leftId: 'm4', rightId: 'y4' },
          ],
        },
        {
          id: 'b3-5-choice',
          type: 'CHOICE',
          instruction: 'Welche Sätze sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'k1', text: 'Ich möchte einen Saft.' },
            { id: 'k2', text: 'Er isst gern Fisch.' },
            { id: 'k3', text: 'Wir haben kein Käse.' },
            { id: 'k4', text: 'Ich nehme ein Salat.' },
          ],
          solution: ['k1', 'k2'],
          explanation:
            '„der Käse“ und „der Salat“ sind männlich, im Akkusativ also: keinen Käse, einen Salat.',
          explanationTranslations: {
            en: '„der Käse“ and „der Salat“ are masculine, so in the accusative: keinen Käse, einen Salat.',
            es: '„der Käse“ y „der Salat“ son masculinos, así que en acusativo: keinen Käse, einen Salat.',
            fr: '« der Käse » et « der Salat » sont masculins, donc à l’accusatif : keinen Käse, einen Salat.',
            it: '„der Käse“ e „der Salat“ sono maschili, quindi all’accusativo: keinen Käse, einen Salat.',
          },
        },
        {
          id: 'b3-5-writing',
          type: 'WRITING',
          instruction: 'Mein Frühstück',
          prompt:
            'Schreiben Sie vier bis sechs Sätze: Was essen und trinken Sie zum Frühstück? Was essen Sie gern, was nicht? Nutzen Sie den Akkusativ (einen, eine, ein, keinen …).',
          minWords: 20,
          maxWords: 100,
          aiFeedback: true,
          sampleAnswer:
            'Zum Frühstück trinke ich einen Kaffee mit Milch. Ich esse gern ein Brötchen mit Käse. Manchmal esse ich auch ein Ei. Wurst esse ich nicht so gern. Am Wochenende essen wir zusammen und trinken einen Orangensaft.',
        },
      ],
    },
  },
];
