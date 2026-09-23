import type { UnitSeed } from './chapter-beginner-1';

/**
 * Spanisch, Beginner, Kapitel 6: „En el restaurante“
 *
 * Fünf Seiten, Aufbau wie in den Kapiteln davor. Letztes Kapitel der Stufe A1.
 *
 * Alles läuft auf „gustar“ zu, und „gustar“ dreht den Satz um: Nicht ich mag
 * das Essen, das Essen gefällt mir. Wer das einmal falsch abgespeichert hat,
 * sagt jahrelang „yo gusto la paella“. Deshalb kommt der Kasten auf Seite 2
 * nicht als Vokabel, sondern als Satzbau – mit dem deutschen „gefallen“
 * daneben, das genauso gebaut ist und den Umweg über das Englische erspart.
 *
 * Seite 4 setzt darauf die Zustimmung: „a mí también“, „a mí tampoco“ und das
 * Paar „a mí sí“ / „a mí no“, mit dem man widerspricht. Vier kurze Wendungen,
 * deren Auswahl davon abhängt, ob der Satz davor bejaht oder verneint war –
 * für Deutschsprachige ungewohnt, weil „ich auch“ dort beides abdeckt.
 *
 * Die Speisen sind spanisch und nicht übersetzt eingedeutscht: Eine „tortilla“
 * ist hier das Kartoffelomelett, nicht der mexikanische Fladen. Wo ein Gericht
 * kein deutsches Gegenstück hat, steht eine kurze Erklärung statt einer
 * erfundenen Übersetzung.
 *
 * Seiten einsprachig spanisch, Erklärungen mit deutscher Übersetzung.
 */
const v = 1;

export const SPANISH_BEGINNER_6_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – die Karte lesen: Gänge, Gerichte, Getränke.
  {
    order: 1,
    title: 'La carta',
    subtitle: 'Die Speisekarte verstehen',
    estimatedMinutes: 23,
    content: {
      version: v,
      blocks: [
        { id: 'es6-p1-h1', type: 'HEADING', level: 1, text: 'La carta' },
        {
          id: 'es6-p1-image',
          type: 'IMAGE',
          url: 'illustration:restaurant-table',
          alt: 'Ein gedeckter Tisch von oben: Teller, Besteck, Glas und eine aufgeschlagene Speisekarte.',
          caption: 'Una mesa para dos.',
        },
        {
          id: 'es6-p1-intro',
          type: 'TEXT',
          text: 'Una carta española se lee por partes, no de arriba abajo. Primero se elige el primer plato, luego el segundo y al final el postre. A mediodía hay además el «menú del día»: tres platos, pan y bebida por un precio fijo.',
          translations: {
            de: 'Eine spanische Speisekarte liest man in Teilen, nicht von oben nach unten. Zuerst wählt man den ersten Gang, dann den zweiten und am Ende den Nachtisch. Mittags gibt es außerdem das „menú del día“: drei Gänge, Brot und Getränk zum Festpreis.',
          },
        },
        {
          id: 'es6-p1-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: la carta',
          items: [
            { term: 'el primer plato', translations: { en: 'starter', de: 'die Vorspeise' } },
            { term: 'el segundo plato', translations: { en: 'main course', de: 'das Hauptgericht' } },
            { term: 'el postre', translations: { en: 'dessert', de: 'der Nachtisch' } },
            { term: 'la bebida', translations: { en: 'drink', de: 'das Getränk' } },
            { term: 'el menú del día', translations: { en: 'set lunch menu', de: 'das Tagesmenü' } },
            {
              term: 'la ensalada mixta',
              translations: { en: 'mixed salad', de: 'gemischter Salat' },
            },
            { term: 'la sopa', translations: { en: 'soup', de: 'die Suppe' } },
            {
              term: 'la tortilla de patatas',
              translations: { en: 'potato omelette', de: 'Omelett mit Kartoffeln' },
            },
            { term: 'el pescado', translations: { en: 'fish', de: 'der Fisch' } },
            { term: 'la carne', translations: { en: 'meat', de: 'das Fleisch' } },
            { term: 'el pollo', translations: { en: 'chicken', de: 'das Hähnchen' } },
            { term: 'el arroz', translations: { en: 'rice', de: 'der Reis' } },
            { term: 'el agua con gas / sin gas', translations: { en: 'sparkling / still water', de: 'Wasser mit / ohne Kohlensäure' } },
            { term: 'el vino tinto / blanco', translations: { en: 'red / white wine', de: 'der Rot- / Weißwein' } },
            { term: 'el helado', translations: { en: 'ice cream', de: 'das Eis' } },
          ],
        },
        {
          id: 'es6-p1-info-comidas',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'Las horas de comer',
          text: 'En España se come tarde: la comida principal es a las dos o las tres de la tarde, y la cena raramente antes de las nueve. Por eso muchas cocinas están cerradas a las siete. Entre horas se toma una tapa o un pincho, que no es una comida sino un acompañamiento de la bebida.',
          translations: {
            de: {
              title: 'Die Essenszeiten',
              text: 'In Spanien isst man spät: Die Hauptmahlzeit ist um zwei oder drei Uhr nachmittags, und das Abendessen selten vor neun. Deshalb sind viele Küchen um sieben geschlossen. Zwischendurch nimmt man eine „tapa“ oder einen „pincho“ – keine Mahlzeit, sondern eine Beigabe zum Getränk.',
            },
          },
          table: {
            headers: ['Comida', 'Hora'],
            rows: [
              ['el desayuno', '7:00 – 9:00'],
              ['la comida', '14:00 – 15:30'],
              ['la merienda', '17:00 – 18:30'],
              ['la cena', '21:00 – 22:30'],
            ],
          },
        },
        {
          id: 'es6-p1-match',
          type: 'MATCHING',
          instruction: 'Relacione el plato con su parte de la carta.',
          left: [
            { id: 'l1', text: 'la ensalada mixta' },
            { id: 'l2', text: 'el pollo con arroz' },
            { id: 'l3', text: 'el helado de chocolate' },
            { id: 'l4', text: 'el agua sin gas' },
          ],
          right: [
            { id: 'r1', text: 'primer plato' },
            { id: 'r2', text: 'segundo plato' },
            { id: 'r3', text: 'postre' },
            { id: 'r4', text: 'bebida' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'es6-p1-cloze',
          type: 'CLOZE',
          instruction: 'Complete el menú del día.',
          wordBank: ['primer', 'segundo', 'postre', 'bebida'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'MENÚ DEL DÍA – 13,50 €\n\nDe ' },
            { kind: 'GAP', gapId: 'c1', solution: ['primer'], width: 8 },
            { kind: 'TEXT', text: ' plato: sopa de verduras o ensalada mixta.\nDe ' },
            { kind: 'GAP', gapId: 'c2', solution: ['segundo'], width: 9 },
            { kind: 'TEXT', text: ': pescado a la plancha o pollo con arroz.\nDe ' },
            { kind: 'GAP', gapId: 'c3', solution: ['postre'], width: 8 },
            { kind: 'TEXT', text: ': fruta del tiempo o helado.\nPan y ' },
            { kind: 'GAP', gapId: 'c4', solution: ['bebida'], width: 8 },
            { kind: 'TEXT', text: ' incluidos.' },
          ],
        },
        {
          id: 'es6-p1-choice',
          type: 'CHOICE',
          instruction: 'Elija la respuesta correcta.',
          question: 'Son las siete y media de la tarde y usted tiene hambre. ¿Qué es lo más probable en España?',
          options: [
            { id: 'o1', text: 'Los restaurantes sirven la cena a esa hora.' },
            { id: 'o2', text: 'La cocina está cerrada, pero hay tapas en el bar.' },
            { id: 'o3', text: 'Es la hora de la comida principal.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation:
            'La cena empieza sobre las nueve. A las siete y media se toma una tapa o una merienda.',
          explanationTranslations: {
            de: 'Das Abendessen beginnt gegen neun. Um halb acht nimmt man eine Tapa oder einen Nachmittagsimbiss.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – gustar: der Satz dreht sich um.
  {
    order: 2,
    title: 'Me gusta, me gustan',
    subtitle: 'Die Konstruktion mit „gustar“',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'es6-p2-h1', type: 'HEADING', level: 1, text: 'Me gusta, me gustan' },
        {
          id: 'es6-p2-intro',
          type: 'TEXT',
          text: '«Gustar» no significa «mögen», sino «gefallen». Esa diferencia lo cambia todo: la persona deja de ser el sujeto y pasa a ser quien recibe. No soy yo quien gusta – es el pescado el que me gusta a mí.',
          translations: {
            de: '„Gustar“ heißt nicht „mögen“, sondern „gefallen“. Dieser Unterschied ändert alles: Die Person ist nicht mehr das Subjekt, sondern die, der etwas gefällt. Nicht ich gefalle – der Fisch gefällt mir.',
          },
        },
        {
          id: 'es6-p2-info-gustar',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'El verbo mira a la cosa, no a la persona',
          text: 'El pronombre dice a quién le gusta; el verbo se ajusta a lo que gusta. Por eso solo hay dos formas en la práctica: «gusta» si es una cosa o un infinitivo, «gustan» si son varias. El alemán construye «gefallen» igual, y por ahí se entiende sin esfuerzo: «mir gefällt der Fisch», «mir gefallen die Tapas».',
          translations: {
            de: {
              title: 'Das Verb schaut auf die Sache, nicht auf die Person',
              text: 'Das Pronomen sagt, wem etwas gefällt; das Verb richtet sich nach dem, was gefällt. Deshalb gibt es praktisch nur zwei Formen: „gusta“ bei einer Sache oder einem Infinitiv, „gustan“ bei mehreren. Das Deutsche baut „gefallen“ genauso, und von dort versteht es sich mühelos: „mir gefällt der Fisch“, „mir gefallen die Tapas“.',
            },
          },
          table: {
            headers: ['A quién', 'Una cosa', 'Varias cosas'],
            rows: [
              ['a mí', 'me gusta el pescado', 'me gustan las tapas'],
              ['a ti', 'te gusta el pescado', 'te gustan las tapas'],
              ['a él / ella / usted', 'le gusta el pescado', 'le gustan las tapas'],
              ['a nosotros', 'nos gusta el pescado', 'nos gustan las tapas'],
              ['a vosotros', 'os gusta el pescado', 'os gustan las tapas'],
              ['a ellos / ellas / ustedes', 'les gusta el pescado', 'les gustan las tapas'],
            ],
          },
        },
        {
          id: 'es6-p2-info-articulo',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Dos detalles que se olvidan',
          text: 'Primero: detrás de «gustar» va el artículo. Se dice «me gusta el café», no «me gusta café». Segundo: con un infinitivo detrás, el verbo va siempre en singular, aunque haya dos o tres infinitivos seguidos: «me gusta cocinar y comer bien».',
          translations: {
            de: {
              title: 'Zwei Kleinigkeiten, die man vergisst',
              text: 'Erstens: Nach „gustar“ steht der Artikel. Es heißt „me gusta el café“, nicht „me gusta café“. Zweitens: Folgt ein Infinitiv, steht das Verb immer im Singular, auch bei zwei oder drei Infinitiven hintereinander: „me gusta cocinar y comer bien“.',
            },
          },
          table: {
            headers: ['Correcto', 'Incorrecto'],
            rows: [
              ['Me gusta el chocolate.', 'Me gusta chocolate.'],
              ['Me gustan las verduras.', 'Me gusta las verduras.'],
              ['Me gusta cenar tarde.', 'Me gustan cenar tarde.'],
              ['A Luis le gusta el vino.', 'Luis gusta el vino.'],
            ],
          },
        },
        {
          id: 'es6-p2-cloze',
          type: 'CLOZE',
          instruction: 'Complete con «gusta» o «gustan».',
          wordBank: ['gusta', 'gustan'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Me ' },
            { kind: 'GAP', gapId: 'd1', solution: ['gusta'], width: 8 },
            { kind: 'TEXT', text: ' mucho el pescado.\n¿Te ' },
            { kind: 'GAP', gapId: 'd2', solution: ['gustan'], width: 8 },
            { kind: 'TEXT', text: ' las tapas?\nA mis padres les ' },
            { kind: 'GAP', gapId: 'd3', solution: ['gusta'], width: 8 },
            { kind: 'TEXT', text: ' cenar en casa.\nNos ' },
            { kind: 'GAP', gapId: 'd4', solution: ['gustan'], width: 8 },
            { kind: 'TEXT', text: ' los postres de esta casa.\nA Elena no le ' },
            { kind: 'GAP', gapId: 'd5', solution: ['gusta'], width: 8 },
            { kind: 'TEXT', text: ' el vino tinto.' },
          ],
        },
        {
          id: 'es6-p2-info-aquien',
          type: 'INFO',
          variant: 'TIP',
          title: '¿Para qué sirve «a mí»?',
          text: 'El pronombre ya dice a quién le gusta, así que «a mí» no hace falta. Se añade para subrayar («A mí me gusta, pero a él no») o para aclarar de quién se habla, porque «le» vale igual para él, para ella y para usted. Por eso se dice tan a menudo «a Luis le gusta»: sin el nombre no se sabría.',
          translations: {
            de: {
              title: 'Wozu dient „a mí“?',
              text: 'Das Pronomen sagt schon, wem etwas gefällt, „a mí“ ist also nicht nötig. Man setzt es zur Betonung („A mí me gusta, pero a él no“) oder zur Klärung, von wem die Rede ist, denn „le“ gilt für ihn, für sie und für Sie gleichermaßen. Deshalb sagt man so oft „a Luis le gusta“: Ohne den Namen wüsste man es nicht.',
            },
          },
        },
        {
          id: 'es6-p2-choice',
          type: 'CHOICE',
          instruction: 'Elija la frase correcta.',
          question: 'Sie wollen sagen: „Ich mag spanische Filme.“',
          options: [
            { id: 'p1', text: 'Yo gusto las películas españolas.' },
            { id: 'p2', text: 'Me gusta las películas españolas.' },
            { id: 'p3', text: 'Me gustan las películas españolas.' },
          ],
          multiple: false,
          solution: ['p3'],
          explanation:
            'El sujeto son las películas, y son varias: «gustan». La persona aparece solo como pronombre, «me», nunca como «yo».',
          explanationTranslations: {
            de: 'Subjekt sind die Filme, und es sind mehrere: „gustan“. Die Person erscheint nur als Pronomen „me“, nie als „yo“.',
          },
        },
        {
          id: 'es6-p2-match',
          type: 'MATCHING',
          instruction: 'Relacione las dos mitades.',
          left: [
            { id: 'm1', text: 'A mí me…' },
            { id: 'm2', text: 'A nosotros nos…' },
            { id: 'm3', text: 'A ti te…' },
            { id: 'm4', text: 'A mis hermanos les…' },
          ],
          right: [
            { id: 'n1', text: '…gusta el arroz con verduras.' },
            { id: 'n2', text: '…gustan mucho los postres.' },
            { id: 'n3', text: '…gusta cocinar los domingos.' },
            { id: 'n4', text: '…gustan las tapas del bar de la esquina.' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'n1' },
            { leftId: 'm2', rightId: 'n2' },
            { leftId: 'm3', rightId: 'n3' },
            { leftId: 'm4', rightId: 'n4' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – bestellen, bitten, zahlen.
  {
    order: 3,
    title: '¿Qué va a tomar?',
    subtitle: 'Bestellen und bezahlen',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'es6-p3-h1', type: 'HEADING', level: 1, text: '¿Qué va a tomar?' },
        {
          id: 'es6-p3-intro',
          type: 'TEXT',
          text: 'Pedir en un restaurante son cuatro o cinco frases, y casi todas son fórmulas. Apréndalas enteras: aquí no hace falta entender la gramática para usarlas bien.',
          translations: {
            de: 'Im Restaurant zu bestellen sind vier, fünf Sätze, und fast alle sind feste Wendungen. Lernen Sie sie als Ganzes: Hier muss man die Grammatik nicht verstehen, um sie richtig zu verwenden.',
          },
        },
        {
          id: 'es6-p3-info-formulas',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Fórmulas para pedir',
          text: 'Las tres primeras significan casi lo mismo y suben en cortesía: «quiero» es directo, «para mí» es lo más natural en la mesa, «quería» suena amable sin ser ceremonioso. El camarero pregunta con «¿Qué va a tomar?» – literalmente «¿qué va a tomar usted?» –, y ese «tomar» vale para comer y para beber.',
          translations: {
            de: {
              title: 'Feste Wendungen zum Bestellen',
              text: 'Die ersten drei bedeuten fast dasselbe und steigern die Höflichkeit: „quiero“ ist direkt, „para mí“ ist am Tisch das Natürlichste, „quería“ klingt freundlich, ohne feierlich zu sein. Der Kellner fragt mit „¿Qué va a tomar?“ – wörtlich „was werden Sie nehmen?“ –, und dieses „tomar“ gilt fürs Essen wie fürs Trinken.',
            },
          },
          table: {
            headers: ['Fórmula', 'Ejemplo'],
            rows: [
              ['Para mí…', 'Para mí, la sopa.'],
              ['Quería…', 'Quería un agua sin gas.'],
              ['Yo tomo…', 'Yo tomo el menú del día.'],
              ['¿Me trae…?', '¿Me trae un poco de pan, por favor?'],
              ['La cuenta, por favor.', 'Perdone, la cuenta, por favor.'],
            ],
          },
        },
        {
          id: 'es6-p3-dlg',
          type: 'DIALOGUE',
          title: 'Comiendo fuera',
          lines: [
            { speaker: 'Camarero', text: 'Buenas tardes. ¿Qué van a tomar?' },
            { speaker: 'Iván', text: 'Para mí, el menú del día. De primero, la ensalada mixta.' },
            { speaker: 'Camarero', text: '¿Y de segundo?' },
            { speaker: 'Iván', text: 'El pescado a la plancha.' },
            { speaker: 'Sara', text: 'Yo quería la sopa y el pollo con arroz, por favor.' },
            { speaker: 'Camarero', text: 'Muy bien. ¿Para beber?' },
            { speaker: 'Sara', text: 'Una botella de agua sin gas y una copa de vino tinto.' },
            { speaker: 'Camarero', text: 'Enseguida se lo traigo.' },
          ],
        },
        {
          id: 'es6-p3-audio',
          type: 'AUDIO',
          title: 'Escuche: el postre y la cuenta',
          audioUrl: 'placeholder://es-k6-cuenta',
          durationSec: 28,
          transcript:
            '¿Van a tomar postre? – Yo sí, un helado de vainilla. – Para mí nada, gracias, solo un café solo. – Muy bien. – Y la cuenta, por favor. – Ahora mismo. Son veintisiete euros con cuarenta.',
        },
        {
          id: 'es6-p3-choice',
          type: 'CHOICE',
          instruction: 'Escuche o lea el texto otra vez y elija.',
          question: '¿Cuánto pagan en total?',
          options: [
            { id: 'q1', text: 'Veintisiete euros con catorce.' },
            { id: 'q2', text: 'Veintisiete euros con cuarenta.' },
            { id: 'q3', text: 'Veinticuatro euros con siete.' },
          ],
          multiple: false,
          solution: ['q2'],
          explanation: 'El camarero dice: «Son veintisiete euros con cuarenta».',
          explanationTranslations: {
            de: 'Der Kellner sagt: „Son veintisiete euros con cuarenta“.',
          },
        },
        {
          id: 'es6-p3-ordering',
          type: 'ORDERING',
          instruction: 'Ordene la visita al restaurante.',
          items: [
            { id: 'w1', text: 'Buenas tardes, ¿tienen una mesa para dos?' },
            { id: 'w2', text: '¿Qué van a tomar?' },
            { id: 'w3', text: 'Para mí, el menú del día.' },
            { id: 'w4', text: '¿Van a tomar postre?' },
            { id: 'w5', text: 'Un café solo, por favor.' },
            { id: 'w6', text: 'La cuenta, por favor.' },
          ],
          solution: ['w1', 'w2', 'w3', 'w4', 'w5', 'w6'],
        },
        {
          id: 'es6-p3-cloze',
          type: 'CLOZE',
          instruction: 'Complete la conversación.',
          wordBank: ['tomar', 'Para', 'trae', 'cuenta', 'beber'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '▸ ¿Qué va a ' },
            { kind: 'GAP', gapId: 'e1', solution: ['tomar'], width: 7 },
            { kind: 'TEXT', text: '?\n▸ ' },
            { kind: 'GAP', gapId: 'e2', solution: ['Para'], width: 6 },
            { kind: 'TEXT', text: ' mí, la tortilla de patatas.\n▸ ¿Y para ' },
            { kind: 'GAP', gapId: 'e3', solution: ['beber'], width: 7 },
            { kind: 'TEXT', text: '?\n▸ Un agua con gas. ¿Me ' },
            { kind: 'GAP', gapId: 'e4', solution: ['trae'], width: 6 },
            { kind: 'TEXT', text: ' también pan, por favor?\n▸ Claro.\n▸ Gracias. Y luego la ' },
            { kind: 'GAP', gapId: 'e5', solution: ['cuenta'], width: 8 },
            { kind: 'TEXT', text: ', por favor.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – zustimmen und widersprechen: también, tampoco, sí, no.
  {
    order: 4,
    title: 'A mí también, a mí no',
    subtitle: 'Zustimmen und widersprechen',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'es6-p4-h1', type: 'HEADING', level: 1, text: 'A mí también, a mí no' },
        {
          id: 'es6-p4-intro',
          type: 'TEXT',
          text: 'En la mesa nadie habla solo de sí mismo: se responde a lo que dice el otro. El español tiene cuatro respuestas breves para eso, y cuál toca no depende de lo que yo opine, sino de si la frase anterior era afirmativa o negativa.',
          translations: {
            de: 'Am Tisch spricht niemand nur von sich: Man antwortet auf das, was der andere sagt. Das Spanische hat dafür vier kurze Antworten, und welche dran ist, hängt nicht von meiner Meinung ab, sondern davon, ob der Satz davor bejaht oder verneint war.',
          },
        },
        {
          id: 'es6-p4-info-tambien',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Cuatro respuestas, dos columnas',
          text: 'Si la frase anterior era afirmativa, la respuesta está en la primera columna; si era negativa, en la segunda. El alemán cubre dos de estos casos con un mismo «ich auch», y ahí está la trampa: después de una frase negativa no vale «a mí también», sino «a mí tampoco».',
          translations: {
            de: {
              title: 'Vier Antworten, zwei Spalten',
              text: 'War der Satz davor bejaht, steht die Antwort in der ersten Spalte; war er verneint, in der zweiten. Das Deutsche deckt zwei dieser Fälle mit demselben „ich auch“ ab, und genau da liegt die Falle: Nach einem verneinten Satz gilt nicht „a mí también“, sondern „a mí tampoco“.',
            },
          },
          table: {
            headers: ['Frase anterior', 'Igual que yo', 'Al revés que yo'],
            rows: [
              ['Me gusta el pescado.', 'A mí también.', 'A mí no.'],
              ['No me gusta el pescado.', 'A mí tampoco.', 'A mí sí.'],
            ],
          },
        },
        {
          id: 'es6-p4-dlg',
          type: 'DIALOGUE',
          title: 'Eligiendo el segundo plato',
          lines: [
            { speaker: 'Rosa', text: 'A mí me gusta mucho el pescado.' },
            { speaker: 'Daniel', text: 'A mí también. Lo tomo casi siempre.' },
            { speaker: 'Rosa', text: 'Pero no me gusta nada el pescado frito.' },
            { speaker: 'Daniel', text: 'Pues a mí sí. Es mi plato favorito.' },
            { speaker: 'Rosa', text: '¿Y de postre? A mí no me gustan los dulces.' },
            { speaker: 'Daniel', text: 'A mí tampoco. Pedimos dos cafés y ya está.' },
          ],
        },
        {
          id: 'es6-p4-cloze',
          type: 'CLOZE',
          instruction: 'Complete con «también», «tampoco», «sí» o «no».',
          wordBank: ['también', 'tampoco', 'sí', 'no'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '▸ Me gusta mucho el vino tinto.\n▸ A mí ' },
            { kind: 'GAP', gapId: 'f1', solution: ['también'], width: 9 },
            { kind: 'TEXT', text: '.\n\n▸ No me gustan las verduras.\n▸ A mí ' },
            { kind: 'GAP', gapId: 'f2', solution: ['tampoco'], width: 9 },
            { kind: 'TEXT', text: '.\n\n▸ A mí no me gusta cenar tarde.\n▸ Pues a mí ' },
            { kind: 'GAP', gapId: 'f3', solution: ['sí'], width: 5 },
            { kind: 'TEXT', text: ', me encanta.\n\n▸ Me gusta el café solo.\n▸ A mí ' },
            { kind: 'GAP', gapId: 'f4', solution: ['no'], width: 5 },
            { kind: 'TEXT', text: ', lo tomo siempre con leche.' },
          ],
        },
        {
          id: 'es6-p4-info-encantar',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'De «encantar» a «odiar»',
          text: 'Alrededor de «gustar» hay una escala. Arriba está «encantar», que ya significa muchísimo y por eso no admite «mucho»: se dice «me encanta», nunca «me encanta mucho». Abajo, la negación se gradúa con «mucho» y «nada»: «no me gusta mucho» es tibio, «no me gusta nada» es un rechazo claro.',
          translations: {
            de: {
              title: 'Von „encantar“ bis „odiar“',
              text: 'Um „gustar“ herum gibt es eine Skala. Oben steht „encantar“, das schon sehr viel bedeutet und deshalb kein „mucho“ verträgt: Man sagt „me encanta“, nie „me encanta mucho“. Unten wird die Verneinung mit „mucho“ und „nada“ abgestuft: „no me gusta mucho“ ist lau, „no me gusta nada“ ist eine klare Ablehnung.',
            },
          },
          table: {
            headers: ['Escala', 'Ejemplo'],
            rows: [
              ['+ + +', 'Me encanta la paella.'],
              ['+ +', 'Me gusta mucho el arroz.'],
              ['+', 'Me gusta el pollo.'],
              ['–', 'No me gusta mucho la sopa.'],
              ['– –', 'No me gusta nada el pescado frito.'],
              ['– – –', 'Odio las aceitunas.'],
            ],
          },
        },
        {
          id: 'es6-p4-choice',
          type: 'CHOICE',
          instruction: 'Elija la respuesta correcta.',
          question: 'Alguien dice: «No me gusta el café.» Usted tampoco lo toma. ¿Qué dice?',
          options: [
            { id: 'x1', text: 'A mí también.' },
            { id: 'x2', text: 'A mí tampoco.' },
            { id: 'x3', text: 'A mí sí.' },
          ],
          multiple: false,
          solution: ['x2'],
          explanation:
            'La frase anterior es negativa, así que para decir lo mismo hace falta «tampoco». «También» solo responde a frases afirmativas.',
          explanationTranslations: {
            de: 'Der Satz davor ist verneint, für dieselbe Aussage braucht es also „tampoco“. „También“ antwortet nur auf bejahte Sätze.',
          },
        },
        {
          id: 'es6-p4-match',
          type: 'MATCHING',
          instruction: 'Relacione la frase con la respuesta que dice lo contrario.',
          left: [
            { id: 'm1', text: 'Me gustan las tapas.' },
            { id: 'm2', text: 'No me gusta el vino blanco.' },
            { id: 'm3', text: 'Me encanta cocinar.' },
            { id: 'm4', text: 'No me gustan nada las aceitunas.' },
          ],
          right: [
            { id: 'n1', text: 'A mí no.' },
            { id: 'n2', text: 'A mí sí, lo tomo siempre.' },
            { id: 'n3', text: 'A mí no, prefiero comer fuera.' },
            { id: 'n4', text: 'Pues a mí sí, me encantan.' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'n1' },
            { leftId: 'm2', rightId: 'n2' },
            { leftId: 'm3', rightId: 'n3' },
            { leftId: 'm4', rightId: 'n4' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – Rückblick auf das Kapitel und auf die ganze Stufe A1.
  {
    order: 5,
    title: '¿Ya sabes hacerlo?',
    subtitle: 'Rückblick auf das ganze Kapitel',
    estimatedMinutes: 19,
    content: {
      version: v,
      blocks: [
        { id: 'es6-p5-h1', type: 'HEADING', level: 1, text: '¿Ya sabes hacerlo?' },
        {
          id: 'es6-p5-intro',
          type: 'TEXT',
          text: 'Aquí vuelve todo el capítulo: la carta, «gustar», las fórmulas para pedir y las respuestas cortas. Con esto se termina el nivel A1: usted ya puede saludar, hablar de su familia, moverse por una ciudad, contar su día, comprar y comer fuera.',
          translations: {
            de: 'Hier kommt das ganze Kapitel noch einmal: die Karte, „gustar“, die Wendungen zum Bestellen und die kurzen Antworten. Damit endet die Stufe A1: Sie können nun grüßen, über Ihre Familie sprechen, sich in einer Stadt bewegen, Ihren Tag erzählen, einkaufen und auswärts essen.',
          },
        },
        {
          id: 'es6-p5-cloze',
          type: 'CLOZE',
          instruction: 'Complete el texto de Marta.',
          wordBank: ['gusta', 'gustan', 'me', 'les', 'encanta'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Los domingos como con mis padres. A mí ' },
            { kind: 'GAP', gapId: 'g1', solution: ['me'], width: 5 },
            { kind: 'TEXT', text: ' gusta mucho el arroz, pero a ellos no ' },
            { kind: 'GAP', gapId: 'g2', solution: ['les'], width: 6 },
            { kind: 'TEXT', text: ' gusta nada. A mi madre le ' },
            { kind: 'GAP', gapId: 'g3', solution: ['encanta'], width: 9 },
            { kind: 'TEXT', text: ' el pescado, y a mi padre le ' },
            { kind: 'GAP', gapId: 'g4', solution: ['gustan'], width: 8 },
            { kind: 'TEXT', text: ' las verduras. Al final siempre pedimos lo mismo, porque a todos nos ' },
            { kind: 'GAP', gapId: 'g5', solution: ['gusta'], width: 8 },
            { kind: 'TEXT', text: ' la tortilla de patatas.' },
          ],
        },
        {
          id: 'es6-p5-match',
          type: 'MATCHING',
          instruction: 'Relacione la frase con la respuesta.',
          left: [
            { id: 'a1', text: '¿Qué van a tomar?' },
            { id: 'a2', text: '¿Y para beber?' },
            { id: 'a3', text: 'No me gustan los dulces.' },
            { id: 'a4', text: '¿Algo más?' },
          ],
          right: [
            { id: 'b1', text: 'Para mí, el menú del día.' },
            { id: 'b2', text: 'Un agua sin gas, por favor.' },
            { id: 'b3', text: 'A mí tampoco. Mejor un café.' },
            { id: 'b4', text: 'No, gracias. La cuenta, por favor.' },
          ],
          solution: [
            { leftId: 'a1', rightId: 'b1' },
            { leftId: 'a2', rightId: 'b2' },
            { leftId: 'a3', rightId: 'b3' },
            { leftId: 'a4', rightId: 'b4' },
          ],
        },
        {
          id: 'es6-p5-choice',
          type: 'CHOICE',
          instruction: 'Marque todas las frases correctas.',
          question: '¿Cuáles de estas frases son correctas?',
          options: [
            { id: 's1', text: 'A mis amigos les gustan las tapas.' },
            { id: 's2', text: 'Mis amigos gustan las tapas.' },
            { id: 's3', text: 'Me gusta el café con leche.' },
            { id: 's4', text: 'Me gusta café con leche.' },
          ],
          multiple: true,
          solution: ['s1', 's3'],
          explanation:
            'La persona aparece como pronombre («les», «me»), nunca como sujeto. Y detrás de «gustar» va el artículo.',
          explanationTranslations: {
            de: 'Die Person erscheint als Pronomen („les“, „me“), nie als Subjekt. Und nach „gustar“ steht der Artikel.',
          },
        },
        {
          id: 'es6-p5-ordering',
          type: 'ORDERING',
          instruction: 'Ordene la comida de principio a fin.',
          items: [
            { id: 'z1', text: 'Buenas tardes, una mesa para dos, por favor.' },
            { id: 'z2', text: 'De primero, la sopa; de segundo, el pollo.' },
            { id: 'z3', text: '¿Y para beber? – Un agua con gas.' },
            { id: 'z4', text: '¿Van a tomar postre? – Sí, un helado.' },
            { id: 'z5', text: 'La cuenta, por favor.' },
            { id: 'z6', text: 'Muchas gracias. ¡Hasta luego!' },
          ],
          solution: ['z1', 'z2', 'z3', 'z4', 'z5', 'z6'],
        },
        {
          id: 'es6-p5-writing',
          type: 'WRITING',
          instruction: 'Escriba sobre sus gustos en la mesa.',
          prompt:
            'Escriba de cinco a siete frases: ¿Qué le gusta comer y beber? ¿Qué no le gusta nada? ¿A qué hora come usted? Use «gustar» al menos cuatro veces, una vez en plural, y una vez «me encanta» o «no me gusta nada».',
          minWords: 25,
          maxWords: 110,
          aiFeedback: true,
          sampleAnswer:
            'A mí me encanta la comida española. Me gusta mucho la tortilla de patatas y me gustan bastante las tapas, sobre todo las de pescado. No me gusta nada el pescado frito, pero a mi marido sí. Normalmente comemos a las dos y cenamos sobre las nueve. De postre casi nunca tomo dulces: me gusta más un café solo.',
        },
      ],
    },
  },
];
