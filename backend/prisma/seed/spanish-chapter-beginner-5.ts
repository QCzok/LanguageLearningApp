import type { UnitSeed } from './chapter-beginner-1';

/**
 * Spanisch, Beginner, Kapitel 5: „De compras“
 *
 * Fünf Seiten, Aufbau wie in den Kapiteln davor.
 *
 * Einkaufen ist die erste Situation, in der die Lernenden nicht nur antworten,
 * sondern selbst etwas wollen. Deshalb steht hier früh der ganze Wortwechsel:
 * fragen, was etwas kostet, eine Menge nennen, bezahlen. Die Grammatik folgt
 * dem Gespräch und nicht umgekehrt.
 *
 * Zwei Dinge sind für Deutschsprachige neu. Erstens die drei
 * Demonstrativbegleiter: Wo das Deutsche „dieser“ und „jener“ kennt (und
 * „jener“ kaum noch benutzt), unterscheidet das Spanische este, ese und aquel
 * nach drei Entfernungen – beim Sprecher, beim Angesprochenen, von beiden
 * weg. Zweitens die Mengenangabe mit „de“: „un kilo de tomates“, ohne Artikel
 * dazwischen.
 *
 * Die Zahlen bis 1000 kommen hier mit, weil ein Preis sonst nicht sagbar ist.
 * Geübt werden sie an Preisen, nicht als Liste.
 *
 * Seiten einsprachig spanisch, Erklärungen mit deutscher Übersetzung.
 */
const v = 1;

export const SPANISH_BEGINNER_5_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Läden, Waren, der Preis.
  {
    order: 1,
    title: '¿Cuánto cuesta?',
    subtitle: 'Läden, Waren und Preise',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'es5-p1-h1', type: 'HEADING', level: 1, text: '¿Cuánto cuesta?' },
        {
          id: 'es5-p1-image',
          type: 'IMAGE',
          url: 'illustration:market-stall',
          alt: 'Ein Marktstand unter einer gestreiften Markise, davor Kisten mit Obst und Gemüse.',
          caption: 'Un puesto del mercado por la mañana.',
        },
        {
          id: 'es5-p1-intro',
          type: 'TEXT',
          text: 'En una tienda hacen falta pocas frases, pero se repiten siempre las mismas. La primera es la pregunta por el precio, y tiene dos formas: una para una cosa y otra para varias.',
          translations: {
            de: 'In einem Geschäft braucht man wenige Sätze, aber immer dieselben. Der erste ist die Frage nach dem Preis, und es gibt sie in zwei Formen: eine für eine Sache und eine für mehrere.',
          },
        },
        {
          id: 'es5-p1-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: tiendas y productos',
          items: [
            { term: 'la tienda', translations: { en: 'shop', de: 'das Geschäft' } },
            { term: 'el mercado', translations: { en: 'market', de: 'der Markt' } },
            { term: 'la panadería', translations: { en: 'bakery', de: 'die Bäckerei' } },
            { term: 'la carnicería', translations: { en: 'butcher’s', de: 'die Metzgerei' } },
            { term: 'la frutería', translations: { en: 'greengrocer’s', de: 'der Obstladen' } },
            { term: 'el pan', translations: { en: 'bread', de: 'das Brot' } },
            { term: 'la leche', translations: { en: 'milk', de: 'die Milch' } },
            { term: 'el queso', translations: { en: 'cheese', de: 'der Käse' } },
            { term: 'los huevos', translations: { en: 'eggs', de: 'die Eier' } },
            { term: 'las manzanas', translations: { en: 'apples', de: 'die Äpfel' } },
            { term: 'los tomates', translations: { en: 'tomatoes', de: 'die Tomaten' } },
            { term: 'el aceite', translations: { en: 'oil', de: 'das Öl' } },
            { term: 'el dinero', translations: { en: 'money', de: 'das Geld' } },
            { term: 'barato / caro', translations: { en: 'cheap / expensive', de: 'billig / teuer' } },
          ],
        },
        {
          id: 'es5-p1-info-cuesta',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'cuesta o cuestan',
          text: 'El verbo se ajusta a la cosa comprada, no a quien pregunta: una cosa «cuesta», varias «cuestan». Con «¿Cuánto es?» se pregunta por el total de la compra, y esa forma no cambia nunca. En el precio, el euro va delante de los céntimos y se unen con «con»: 3,50 € es «tres euros con cincuenta» o, más corto, «tres cincuenta».',
          translations: {
            de: {
              title: 'cuesta oder cuestan',
              text: 'Das Verb richtet sich nach der gekauften Sache, nicht nach dem Fragenden: Eine Sache „cuesta“, mehrere „cuestan“. Mit „¿Cuánto es?“ fragt man nach der Gesamtsumme des Einkaufs, und diese Form ändert sich nie. Beim Preis stehen die Euro vor den Cent und werden mit „con“ verbunden: 3,50 € ist „tres euros con cincuenta“ oder, kürzer, „tres cincuenta“.',
            },
          },
          table: {
            headers: ['Pregunta', 'Respuesta'],
            rows: [
              ['¿Cuánto cuesta el queso?', 'Cuesta cuatro euros.'],
              ['¿Cuánto cuestan los huevos?', 'Cuestan dos con veinte.'],
              ['¿Cuánto es todo?', 'Son doce euros con noventa.'],
              ['¿Cuánto vale este pan?', 'Un euro diez.'],
            ],
          },
        },
        {
          id: 'es5-p1-info-numeros',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Los números hasta mil',
          text: 'De treinta en adelante los números se escriben separados: «treinta y dos», «cuarenta y cinco». Solo del dieciséis al veintinueve se escriben juntos. «Ciento» pierde la última sílaba cuando va solo: cien euros, pero ciento veinte euros. Y ojo con el punto y la coma: en español 1.250,50 son mil doscientos cincuenta euros con cincuenta.',
          translations: {
            de: {
              title: 'Die Zahlen bis tausend',
              text: 'Ab dreißig werden die Zahlen getrennt geschrieben: „treinta y dos“, „cuarenta y cinco“. Nur von sechzehn bis neunundzwanzig schreibt man sie zusammen. „Ciento“ verliert die letzte Silbe, wenn es allein steht: cien euros, aber ciento veinte euros. Und Achtung bei Punkt und Komma: Im Spanischen sind 1.250,50 tausendzweihundertfünfzig Euro und fünfzig Cent.',
            },
          },
          table: {
            headers: ['Cifra', 'Palabra'],
            rows: [
              ['21', 'veintiuno'],
              ['35', 'treinta y cinco'],
              ['70', 'setenta'],
              ['99', 'noventa y nueve'],
              ['100', 'cien'],
              ['135', 'ciento treinta y cinco'],
              ['500', 'quinientos'],
              ['1000', 'mil'],
            ],
          },
        },
        {
          id: 'es5-p1-match',
          type: 'MATCHING',
          instruction: 'Relacione la cifra con la palabra.',
          left: [
            { id: 'l1', text: '18' },
            { id: 'l2', text: '44' },
            { id: 'l3', text: '100' },
            { id: 'l4', text: '250' },
          ],
          right: [
            { id: 'r1', text: 'dieciocho' },
            { id: 'r2', text: 'cuarenta y cuatro' },
            { id: 'r3', text: 'cien' },
            { id: 'r4', text: 'doscientos cincuenta' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'es5-p1-cloze',
          type: 'CLOZE',
          instruction: 'Complete con «cuesta», «cuestan» o «es».',
          wordBank: ['cuesta', 'cuestan', 'es'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '▸ ¿Cuánto ' },
            { kind: 'GAP', gapId: 'c1', solution: ['cuesta'], width: 9 },
            { kind: 'TEXT', text: ' el aceite?\n▸ Cinco euros.\n▸ ¿Y cuánto ' },
            { kind: 'GAP', gapId: 'c2', solution: ['cuestan'], width: 9 },
            { kind: 'TEXT', text: ' las manzanas?\n▸ Dos con cuarenta el kilo.\n▸ Muy bien. ¿Cuánto ' },
            { kind: 'GAP', gapId: 'c3', solution: ['es'], width: 5 },
            { kind: 'TEXT', text: ' todo?\n▸ Siete cuarenta.' },
          ],
        },
        {
          id: 'es5-p1-choice',
          type: 'CHOICE',
          instruction: 'Elija la frase correcta.',
          question: 'Usted quiere saber el precio de los tomates.',
          options: [
            { id: 'o1', text: '¿Cuánto cuesta los tomates?' },
            { id: 'o2', text: '¿Cuánto cuestan los tomates?' },
            { id: 'o3', text: '¿Cuánto cuestas los tomates?' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation:
            '«Los tomates» es plural, así que el verbo va en plural: «cuestan». La forma «cuestas» sería para «tú», y aquí nadie habla de usted mismo.',
          explanationTranslations: {
            de: '„Los tomates“ ist Plural, also steht das Verb im Plural: „cuestan“. Die Form „cuestas“ gehörte zu „tú“, und hier spricht niemand von Ihnen selbst.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – este, ese, aquel: drei Entfernungen statt zwei.
  {
    order: 2,
    title: 'Este, ese, aquel',
    subtitle: 'Auf Dinge zeigen',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'es5-p2-h1', type: 'HEADING', level: 1, text: 'Este, ese, aquel' },
        {
          id: 'es5-p2-intro',
          type: 'TEXT',
          text: 'En una tienda se señala mucho: este queso, ese pan, aquella botella del fondo. El español distingue tres distancias, y no dos como el alemán. La distancia no se mide en metros: se mide en personas.',
          translations: {
            de: 'In einem Geschäft zeigt man viel: diesen Käse, das Brot da, jene Flasche hinten. Das Spanische unterscheidet drei Entfernungen und nicht zwei wie das Deutsche. Gemessen wird die Entfernung nicht in Metern, sondern in Personen.',
          },
        },
        {
          id: 'es5-p2-info-demostrativos',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Tres distancias',
          text: '«este» es lo que está junto a mí, el que habla. «ese» es lo que está junto a ti, el que escucha. «aquel» está lejos de los dos. Por eso en el mostrador se dice «este queso» si lo tengo yo en la mano y «ese queso» si lo tiene el vendedor. Como cualquier acompañante del sustantivo, cambian con el género y el número.',
          translations: {
            de: {
              title: 'Drei Entfernungen',
              text: '„este“ ist, was bei mir liegt, beim Sprecher. „ese“ ist, was bei dir liegt, beim Zuhörer. „aquel“ ist von beiden weit weg. Deshalb heißt es am Tresen „este queso“, wenn ich ihn in der Hand halte, und „ese queso“, wenn der Verkäufer ihn hält. Wie jeder Begleiter des Substantivs richten sie sich nach Geschlecht und Zahl.',
            },
          },
          table: {
            headers: ['Distancia', 'masculino', 'femenino', 'plural'],
            rows: [
              ['aquí (junto a mí)', 'este pan', 'esta leche', 'estos panes / estas leches'],
              ['ahí (junto a ti)', 'ese pan', 'esa leche', 'esos panes / esas leches'],
              ['allí (lejos de los dos)', 'aquel pan', 'aquella leche', 'aquellos panes / aquellas leches'],
            ],
          },
        },
        {
          id: 'es5-p2-dlg',
          type: 'DIALOGUE',
          title: 'En la frutería',
          lines: [
            { speaker: 'Cliente', text: 'Buenos días. ¿Cuánto cuestan estas naranjas?' },
            { speaker: 'Vendedora', text: 'Dos euros el kilo. Esas de ahí están más maduras.' },
            { speaker: 'Cliente', text: '¿Y aquellas del fondo?' },
            { speaker: 'Vendedora', text: 'Aquellas son de importación, tres con cincuenta.' },
            { speaker: 'Cliente', text: 'Pues póngame un kilo de estas, por favor.' },
          ],
        },
        {
          id: 'es5-p2-cloze',
          type: 'CLOZE',
          instruction: 'Complete con la forma correcta de «este», «ese» o «aquel».',
          wordBank: ['esta', 'esos', 'aquella', 'este'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Me llevo ' },
            { kind: 'GAP', gapId: 'd1', solution: ['esta'], width: 8 },
            { kind: 'TEXT', text: ' botella de aceite que tengo aquí.\n¿Me enseña ' },
            { kind: 'GAP', gapId: 'd2', solution: ['esos'], width: 7 },
            { kind: 'TEXT', text: ' quesos que tiene usted ahí?\n' },
            { kind: 'GAP', gapId: 'd3', solution: ['Aquella'], width: 9 },
            { kind: 'TEXT', text: ' tienda del fondo es más barata.\n' },
            { kind: 'GAP', gapId: 'd4', solution: ['Este'], width: 6 },
            { kind: 'TEXT', text: ' pan está todavía caliente.' },
          ],
        },
        {
          id: 'es5-p2-info-sinsustantivo',
          type: 'INFO',
          variant: 'TIP',
          title: 'Sin sustantivo detrás',
          text: 'Cuando ya está claro de qué se habla, el sustantivo se cae y queda solo el demostrativo: «¿Cuál quiere? – Este.» La forma no cambia: sigue siendo «este», «esa», «aquellos». Y hay una forma neutra – esto, eso, aquello – para lo que no tiene nombre todavía: «¿Qué es esto?».',
          translations: {
            de: {
              title: 'Ohne Substantiv dahinter',
              text: 'Wenn klar ist, wovon die Rede ist, fällt das Substantiv weg und es bleibt nur der Demonstrativbegleiter: „¿Cuál quiere? – Este.“ Die Form ändert sich dabei nicht: Es bleibt „este“, „esa“, „aquellos“. Und es gibt eine sächliche Form – esto, eso, aquello – für das, was noch keinen Namen hat: „¿Qué es esto?“.',
            },
          },
        },
        {
          id: 'es5-p2-choice',
          type: 'CHOICE',
          instruction: 'Elija la forma correcta.',
          question: 'El vendedor tiene un queso en la mano. Usted lo quiere y dice:',
          options: [
            { id: 'p1', text: 'Me llevo este queso.' },
            { id: 'p2', text: 'Me llevo ese queso.' },
            { id: 'p3', text: 'Me llevo aquel queso.' },
          ],
          multiple: false,
          solution: ['p2'],
          explanation:
            'El queso está junto a la persona que escucha, no junto a usted: eso es «ese». «Este» sería si lo tuviera usted en la mano.',
          explanationTranslations: {
            de: 'Der Käse ist bei der zuhörenden Person, nicht bei Ihnen: Das ist „ese“. „Este“ wäre es, wenn Sie ihn selbst in der Hand hielten.',
          },
        },
        {
          id: 'es5-p2-match',
          type: 'MATCHING',
          instruction: 'Relacione el sustantivo con el demostrativo que le corresponde.',
          left: [
            { id: 'm1', text: '… leche (aquí)' },
            { id: 'm2', text: '… huevos (ahí)' },
            { id: 'm3', text: '… manzanas (allí, al fondo)' },
            { id: 'm4', text: '… mercado (aquí)' },
          ],
          right: [
            { id: 'n1', text: 'esta leche' },
            { id: 'n2', text: 'esos huevos' },
            { id: 'n3', text: 'aquellas manzanas' },
            { id: 'n4', text: 'este mercado' },
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
  // Seite 3 – Mengen: "un kilo de tomates", ohne Artikel dazwischen.
  {
    order: 3,
    title: 'Un kilo de tomates',
    subtitle: 'Mengen und Verpackungen',
    estimatedMinutes: 23,
    content: {
      version: v,
      blocks: [
        { id: 'es5-p3-h1', type: 'HEADING', level: 1, text: 'Un kilo de tomates' },
        {
          id: 'es5-p3-image',
          type: 'IMAGE',
          url: 'illustration:shopping-bags',
          alt: 'Zwei volle Einkaufstaschen, daneben ein Kassenzettel.',
          caption: 'La compra de la semana.',
        },
        {
          id: 'es5-p3-intro',
          type: 'TEXT',
          text: 'Nadie compra «tomates» a secas: se compra un kilo, medio kilo, una bolsa. La cantidad va delante y la mercancía detrás, unidas por un «de» que no se puede saltar.',
          translations: {
            de: 'Niemand kauft einfach „Tomaten“: Man kauft ein Kilo, ein halbes Kilo, eine Tüte. Die Menge steht vorn, die Ware dahinter, verbunden durch ein „de“, das man nicht auslassen darf.',
          },
        },
        {
          id: 'es5-p3-info-cantidades',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Cantidad + de + producto',
          text: 'Entre la cantidad y el producto va «de», y detrás de ese «de» no va artículo: «un kilo de tomates», nunca «un kilo de los tomates». Solo se pone artículo cuando se habla de unos tomates concretos y ya mencionados. «Medio» va sin artículo delante: medio kilo, media docena.',
          translations: {
            de: {
              title: 'Menge + de + Ware',
              text: 'Zwischen Menge und Ware steht „de“, und nach diesem „de“ steht kein Artikel: „un kilo de tomates“, nie „un kilo de los tomates“. Einen Artikel setzt man nur, wenn von bestimmten, schon erwähnten Tomaten die Rede ist. „Medio“ steht ohne Artikel davor: medio kilo, media docena.',
            },
          },
          table: {
            headers: ['Cantidad', 'Ejemplo'],
            rows: [
              ['un kilo de', 'un kilo de manzanas'],
              ['medio kilo de', 'medio kilo de queso'],
              ['un litro de', 'un litro de leche'],
              ['una docena de', 'una docena de huevos'],
              ['un paquete de', 'un paquete de arroz'],
              ['una botella de', 'una botella de aceite'],
              ['una bolsa de', 'una bolsa de naranjas'],
              ['un trozo de', 'un trozo de tarta'],
            ],
          },
        },
        {
          id: 'es5-p3-dlg',
          type: 'DIALOGUE',
          title: 'En el mercado',
          lines: [
            { speaker: 'Vendedor', text: '¡Buenos días! ¿Qué le pongo?' },
            { speaker: 'Cliente', text: 'Póngame un kilo de tomates y medio de cebollas.' },
            { speaker: 'Vendedor', text: 'Muy bien. ¿Algo más?' },
            { speaker: 'Cliente', text: 'Sí, una docena de huevos. ¿Cuánto es?' },
            { speaker: 'Vendedor', text: 'Son ocho euros con treinta.' },
            { speaker: 'Cliente', text: 'Aquí tiene diez.' },
            { speaker: 'Vendedor', text: 'Y un euro setenta de vuelta. ¡Hasta luego!' },
          ],
        },
        {
          id: 'es5-p3-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: en la caja',
          items: [
            { term: '¿Qué le pongo?', translations: { en: 'what can I get you?', de: 'was darf es sein?' } },
            { term: 'Póngame…', translations: { en: 'I’ll take…', de: 'geben Sie mir…' } },
            { term: '¿Algo más?', translations: { en: 'anything else?', de: 'sonst noch etwas?' } },
            { term: 'Nada más, gracias.', translations: { en: 'that’s all, thanks', de: 'das ist alles, danke' } },
            { term: 'en efectivo', translations: { en: 'in cash', de: 'bar' } },
            { term: 'con tarjeta', translations: { en: 'by card', de: 'mit Karte' } },
            { term: 'la vuelta', translations: { en: 'change', de: 'das Wechselgeld' } },
            { term: 'el ticket', translations: { en: 'receipt', de: 'der Kassenbon' } },
            { term: 'la bolsa', translations: { en: 'bag', de: 'die Tüte' } },
          ],
        },
        {
          id: 'es5-p3-cloze',
          type: 'CLOZE',
          instruction: 'Complete la lista de la compra.',
          wordBank: ['kilo', 'de', 'litro', 'docena', 'botella'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'un ' },
            { kind: 'GAP', gapId: 'e1', solution: ['kilo'], width: 7 },
            { kind: 'TEXT', text: ' de manzanas\nun ' },
            { kind: 'GAP', gapId: 'e2', solution: ['litro'], width: 7 },
            { kind: 'TEXT', text: ' de leche\nuna ' },
            { kind: 'GAP', gapId: 'e3', solution: ['docena'], width: 8 },
            { kind: 'TEXT', text: ' de huevos\nuna ' },
            { kind: 'GAP', gapId: 'e4', solution: ['botella'], width: 9 },
            { kind: 'TEXT', text: ' de aceite\nmedio kilo ' },
            { kind: 'GAP', gapId: 'e5', solution: ['de'], width: 4 },
            { kind: 'TEXT', text: ' queso' },
          ],
        },
        {
          id: 'es5-p3-ordering',
          type: 'ORDERING',
          instruction: 'Ordene la conversación en la tienda.',
          items: [
            { id: 'w1', text: 'Buenos días, ¿qué le pongo?' },
            { id: 'w2', text: 'Un kilo de naranjas, por favor.' },
            { id: 'w3', text: '¿Algo más?' },
            { id: 'w4', text: 'No, nada más. ¿Cuánto es?' },
            { id: 'w5', text: 'Son tres euros con veinte.' },
            { id: 'w6', text: 'Aquí tiene. Muchas gracias.' },
          ],
          solution: ['w1', 'w2', 'w3', 'w4', 'w5', 'w6'],
        },
        {
          id: 'es5-p3-choice',
          type: 'CHOICE',
          instruction: 'Elija la frase correcta.',
          question: 'Usted quiere un halbes Kilo Käse.',
          options: [
            { id: 'q1', text: 'Póngame medio kilo de queso.' },
            { id: 'q2', text: 'Póngame medio kilo del queso.' },
            { id: 'q3', text: 'Póngame un medio kilo queso.' },
          ],
          multiple: false,
          solution: ['q1'],
          explanation:
            'Detrás de la cantidad va «de» sin artículo, y «medio» no lleva «un» delante.',
          explanationTranslations: {
            de: 'Nach der Mengenangabe steht „de“ ohne Artikel, und vor „medio“ steht kein „un“.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – Kleidung: Farben und Adjektive richten sich nach dem Substantiv.
  {
    order: 4,
    title: 'La ropa y la talla',
    subtitle: 'Kleidung, Farben, Anprobieren',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'es5-p4-h1', type: 'HEADING', level: 1, text: 'La ropa y la talla' },
        {
          id: 'es5-p4-intro',
          type: 'TEXT',
          text: 'Comprar ropa añade dos cosas: la talla y el color. El color es también una lección de gramática, porque los colores son adjetivos y los adjetivos se ajustan a lo que describen.',
          translations: {
            de: 'Kleidung zu kaufen bringt zwei Dinge dazu: die Größe und die Farbe. Die Farbe ist zugleich eine Grammatikstunde, denn Farben sind Adjektive, und Adjektive richten sich nach dem, was sie beschreiben.',
          },
        },
        {
          id: 'es5-p4-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: la ropa',
          items: [
            { term: 'la camisa', translations: { en: 'shirt', de: 'das Hemd' } },
            { term: 'la camiseta', translations: { en: 't-shirt', de: 'das T-Shirt' } },
            { term: 'los pantalones', translations: { en: 'trousers', de: 'die Hose' } },
            { term: 'la falda', translations: { en: 'skirt', de: 'der Rock' } },
            { term: 'el vestido', translations: { en: 'dress', de: 'das Kleid' } },
            { term: 'la chaqueta', translations: { en: 'jacket', de: 'die Jacke' } },
            { term: 'los zapatos', translations: { en: 'shoes', de: 'die Schuhe' } },
            { term: 'la talla', translations: { en: 'size (clothes)', de: 'die Kleidergröße' } },
            { term: 'el número', translations: { en: 'size (shoes)', de: 'die Schuhgröße' } },
            { term: 'probarse', translations: { en: 'to try on', de: 'anprobieren' }, example: '¿Me puedo probar esta camisa?' },
            { term: 'el probador', translations: { en: 'fitting room', de: 'die Umkleidekabine' } },
          ],
        },
        {
          id: 'es5-p4-info-colores',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Los colores se ajustan',
          text: 'Un color que acaba en -o cambia cuatro veces: blanco, blanca, blancos, blancas. Los que acaban en -e o en consonante solo añaden la -s del plural: verde/verdes, azul/azules. Y el color va detrás del sustantivo, al revés que en alemán: «una camisa blanca», no «una blanca camisa».',
          translations: {
            de: {
              title: 'Die Farben richten sich',
              text: 'Eine Farbe auf -o ändert sich viermal: blanco, blanca, blancos, blancas. Die auf -e oder auf Konsonant hängen nur das Plural-s an: verde/verdes, azul/azules. Und die Farbe steht hinter dem Substantiv, anders als im Deutschen: „una camisa blanca“, nicht „una blanca camisa“.',
            },
          },
          table: {
            headers: ['Color', 'masculino', 'femenino', 'plural'],
            rows: [
              ['weiß', 'blanco', 'blanca', 'blancos / blancas'],
              ['schwarz', 'negro', 'negra', 'negros / negras'],
              ['rot', 'rojo', 'roja', 'rojos / rojas'],
              ['grün', 'verde', 'verde', 'verdes'],
              ['blau', 'azul', 'azul', 'azules'],
              ['grau', 'gris', 'gris', 'grises'],
            ],
          },
        },
        {
          id: 'es5-p4-cloze',
          type: 'CLOZE',
          instruction: 'Complete con la forma correcta del color.',
          wordBank: ['blanca', 'negros', 'azul', 'verdes'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Quiero una camisa ' },
            { kind: 'GAP', gapId: 'f1', solution: ['blanca'], width: 8 },
            { kind: 'TEXT', text: '.\nMe llevo estos zapatos ' },
            { kind: 'GAP', gapId: 'f2', solution: ['negros'], width: 8 },
            { kind: 'TEXT', text: '.\nEsa chaqueta ' },
            { kind: 'GAP', gapId: 'f3', solution: ['azul'], width: 6 },
            { kind: 'TEXT', text: ' es muy bonita.\n¿Tiene los pantalones ' },
            { kind: 'GAP', gapId: 'f4', solution: ['verdes'], width: 8 },
            { kind: 'TEXT', text: ' en la talla 42?' },
          ],
        },
        {
          id: 'es5-p4-dlg',
          type: 'DIALOGUE',
          title: 'En una tienda de ropa',
          lines: [
            { speaker: 'Dependienta', text: 'Buenas tardes, ¿puedo ayudarle?' },
            { speaker: 'Cliente', text: 'Sí, busco una camisa azul.' },
            { speaker: 'Dependienta', text: '¿Qué talla tiene usted?' },
            { speaker: 'Cliente', text: 'La cuarenta. ¿Me la puedo probar?' },
            { speaker: 'Dependienta', text: 'Claro, el probador está al fondo a la derecha.' },
            { speaker: 'Cliente', text: 'Me queda un poco pequeña. ¿Tiene la cuarenta y dos?' },
          ],
        },
        {
          id: 'es5-p4-info-quedar',
          type: 'INFO',
          variant: 'TIP',
          title: 'Me queda bien',
          text: 'Para decir si una prenda sienta bien se usa «quedar», y funciona como «gustar»: el sujeto es la ropa, no la persona. Una camisa «me queda bien»; dos camisas «me quedan grandes». Nunca se dice «yo quedo bien la camisa».',
          translations: {
            de: {
              title: 'Me queda bien',
              text: 'Um zu sagen, ob ein Kleidungsstück passt, verwendet man „quedar“, und es funktioniert wie „gustar“: Subjekt ist das Kleidungsstück, nicht die Person. Ein Hemd „me queda bien“; zwei Hemden „me quedan grandes“. Nie sagt man „yo quedo bien la camisa“.',
            },
          },
          table: {
            headers: ['Español', 'Alemán'],
            rows: [
              ['Me queda bien.', 'Es passt mir.'],
              ['Me queda grande.', 'Es ist mir zu groß.'],
              ['Estos zapatos me quedan pequeños.', 'Diese Schuhe sind mir zu klein.'],
            ],
          },
        },
        {
          id: 'es5-p4-choice',
          type: 'CHOICE',
          instruction: 'Marque todas las frases correctas.',
          question: '¿Cuáles de estas frases son correctas?',
          options: [
            { id: 'x1', text: 'Busco una chaqueta negra.' },
            { id: 'x2', text: 'Busco una negra chaqueta.' },
            { id: 'x3', text: 'Estos pantalones me quedan grandes.' },
            { id: 'x4', text: 'Yo quedo grande estos pantalones.' },
          ],
          multiple: true,
          solution: ['x1', 'x3'],
          explanation:
            'El color va detrás del sustantivo. Y con «quedar» el sujeto es la prenda: son los pantalones los que quedan grandes.',
          explanationTranslations: {
            de: 'Die Farbe steht hinter dem Substantiv. Und bei „quedar“ ist das Kleidungsstück das Subjekt: Die Hose ist zu groß, nicht ich.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – Rückblick auf das ganze Kapitel.
  {
    order: 5,
    title: '¿Ya sabes hacerlo?',
    subtitle: 'Rückblick auf das ganze Kapitel',
    estimatedMinutes: 18,
    content: {
      version: v,
      blocks: [
        { id: 'es5-p5-h1', type: 'HEADING', level: 1, text: '¿Ya sabes hacerlo?' },
        {
          id: 'es5-p5-intro',
          type: 'TEXT',
          text: 'Aquí vuelve todo el capítulo: el precio, los demostrativos, las cantidades y la ropa con sus colores.',
          translations: {
            de: 'Hier kommt das ganze Kapitel noch einmal: der Preis, die Demonstrativbegleiter, die Mengen und die Kleidung mit ihren Farben.',
          },
        },
        {
          id: 'es5-p5-cloze',
          type: 'CLOZE',
          instruction: 'Complete la conversación.',
          wordBank: ['cuestan', 'de', 'esos', 'es', 'blanca'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '▸ Buenos días. ¿Cuánto ' },
            { kind: 'GAP', gapId: 'g1', solution: ['cuestan'], width: 9 },
            { kind: 'TEXT', text: ' las naranjas?\n▸ Dos euros el kilo.\n▸ Póngame un kilo ' },
            { kind: 'GAP', gapId: 'g2', solution: ['de'], width: 4 },
            { kind: 'TEXT', text: ' naranjas y también ' },
            { kind: 'GAP', gapId: 'g3', solution: ['esos'], width: 7 },
            { kind: 'TEXT', text: ' tomates que tiene usted ahí.\n▸ Muy bien. ¿Algo más?\n▸ Una bolsa ' },
            { kind: 'GAP', gapId: 'g4', solution: ['blanca'], width: 8 },
            { kind: 'TEXT', text: ', por favor. ¿Cuánto ' },
            { kind: 'GAP', gapId: 'g5', solution: ['es'], width: 5 },
            { kind: 'TEXT', text: ' todo?' },
          ],
        },
        {
          id: 'es5-p5-match',
          type: 'MATCHING',
          instruction: 'Relacione la pregunta con la respuesta.',
          left: [
            { id: 'a1', text: '¿Qué le pongo?' },
            { id: 'a2', text: '¿Cuánto es todo?' },
            { id: 'a3', text: '¿Qué talla tiene?' },
            { id: 'a4', text: '¿Le queda bien?' },
          ],
          right: [
            { id: 'b1', text: 'Medio kilo de queso, por favor.' },
            { id: 'b2', text: 'Son nueve euros con cincuenta.' },
            { id: 'b3', text: 'La cuarenta y dos.' },
            { id: 'b4', text: 'No, me queda un poco grande.' },
          ],
          solution: [
            { leftId: 'a1', rightId: 'b1' },
            { leftId: 'a2', rightId: 'b2' },
            { leftId: 'a3', rightId: 'b3' },
            { leftId: 'a4', rightId: 'b4' },
          ],
        },
        {
          id: 'es5-p5-choice',
          type: 'CHOICE',
          instruction: 'Marque todas las frases correctas.',
          question: '¿Cuáles de estas frases son correctas?',
          options: [
            { id: 's1', text: '¿Cuánto cuesta este pan?' },
            { id: 's2', text: '¿Cuánto cuestan este pan?' },
            { id: 's3', text: 'Quiero una docena de huevos.' },
            { id: 's4', text: 'Quiero una docena de los huevos.' },
          ],
          multiple: true,
          solution: ['s1', 's3'],
          explanation:
            '«Este pan» es singular, así que «cuesta». Y detrás de una cantidad el «de» va sin artículo.',
          explanationTranslations: {
            de: '„Este pan“ ist Singular, also „cuesta“. Und nach einer Mengenangabe steht „de“ ohne Artikel.',
          },
        },
        {
          id: 'es5-p5-ordering',
          type: 'ORDERING',
          instruction: 'Ordene la compra de ropa.',
          items: [
            { id: 'z1', text: 'Buenas tardes, busco una camiseta verde.' },
            { id: 'z2', text: '¿Qué talla tiene usted?' },
            { id: 'z3', text: 'La treinta y ocho. ¿Me la puedo probar?' },
            { id: 'z4', text: 'El probador está al fondo.' },
            { id: 'z5', text: 'Me queda bien. Me la llevo.' },
            { id: 'z6', text: 'Son dieciocho euros. ¿En efectivo o con tarjeta?' },
          ],
          solution: ['z1', 'z2', 'z3', 'z4', 'z5', 'z6'],
        },
        {
          id: 'es5-p5-writing',
          type: 'WRITING',
          instruction: 'Escriba una conversación en la tienda.',
          prompt:
            'Escriba de seis a ocho líneas de diálogo entre un cliente y un vendedor. Pregunte por dos precios, compre dos cosas con su cantidad y use al menos un demostrativo (este, ese o aquel).',
          minWords: 30,
          maxWords: 110,
          aiFeedback: true,
          sampleAnswer:
            '– Buenos días, ¿qué le pongo?\n– ¿Cuánto cuestan estas manzanas?\n– Dos euros con cuarenta el kilo.\n– Póngame un kilo, por favor. ¿Y ese queso de ahí?\n– Cuesta doce euros el kilo.\n– Pues medio kilo de queso y una botella de aceite. ¿Cuánto es todo?\n– Son once euros con veinte.\n– Aquí tiene. Muchas gracias.',
        },
      ],
    },
  },
];
