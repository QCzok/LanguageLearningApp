import type { UnitSeed } from './chapter-beginner-1';

/**
 * Englisch, Beginner, Kapitel 6: „Food and drink“
 *
 * Das letzte A1-Kapitel. Erst Vorlieben (like + Nomen oder -ing), dann die
 * Unterscheidung zählbar/nicht zählbar mit some und any, dann der
 * Unterschied, an dem Lernende am häufigsten scheitern: „I like“ gegen
 * „I’d like“ – und zuletzt das Restaurant samt Rechnung und Trinkgeld.
 *
 * Übersetzungen wie in `english-chapter-beginner-1.ts`.
 */
const v = 1;

export const ENGLISH_BEGINNER_6_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Vorlieben: like, love, hate.
  {
    order: 1,
    title: 'I love pizza!',
    subtitle: 'Essen, Vorlieben, like + -ing',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'en6-1-h1', type: 'HEADING', level: 1, text: 'I love pizza!' },
        {
          id: 'en6-1-image',
          type: 'IMAGE',
          url: 'illustration:restaurant-table',
          alt: 'Ein gedeckter Restauranttisch mit Tellern, Gläsern und einer Kerze.',
          caption: 'Dinner for four.',
        },
        {
          id: 'en6-1-dlg',
          type: 'DIALOGUE',
          title: 'Planning a class dinner',
          lines: [
            { speaker: 'Teacher', text: 'Let’s have dinner together on Friday. What kind of food do you like?' },
            { speaker: 'Diego', text: 'I love Italian food – pizza, pasta, everything!' },
            { speaker: 'Yuki', text: 'I like fish, but I don’t like meat very much.' },
            { speaker: 'Karim', text: 'I don’t eat pork. But I really like vegetables and rice.' },
            { speaker: 'Anna', text: 'And I hate cooking – so a restaurant is perfect!' },
          ],
        },
        {
          id: 'en6-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Words: food and drink',
          items: [
            { term: 'meat', translations: { de: 'das Fleisch', es: 'la carne' } },
            { term: 'chicken', translations: { de: 'das Hähnchen', es: 'el pollo' } },
            { term: 'fish', translations: { de: 'der Fisch', es: 'el pescado' } },
            { term: 'vegetables', translations: { de: 'das Gemüse', es: 'las verduras' } },
            { term: 'rice', translations: { de: 'der Reis', es: 'el arroz' } },
            { term: 'cheese', translations: { de: 'der Käse', es: 'el queso' } },
            { term: 'soup', translations: { de: 'die Suppe', es: 'la sopa' } },
            { term: 'coffee / tea', translations: { de: 'der Kaffee / der Tee', es: 'el café / el té' } },
            { term: 'juice', translations: { de: 'der Saft', es: 'el zumo' } },
            { term: 'water', translations: { de: 'das Wasser', es: 'el agua' } },
            { term: 'vegetarian', translations: { de: 'vegetarisch; Vegetarier/in', es: 'vegetariano' } },
          ],
        },
        {
          id: 'en6-1-info-like',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'like, love, hate',
          text: 'After like, love and hate, you can use a noun or a verb with -ing: “I like fish.” – “I like cooking.” In the present simple, remember the -s and do/does: “She likes tea.”, “He doesn’t like coffee.”, “Do you like cheese?”',
          translations: {
            de: {
              title: 'like, love, hate',
              text: 'Nach like, love und hate kann ein Nomen stehen oder ein Verb mit -ing: „I like fish.“ – „I like cooking.“ Im Present Simple an das -s und an do/does denken: „She likes tea.“, „He doesn’t like coffee.“, „Do you like cheese?“',
            },
          },
          table: {
            headers: ['', 'example'],
            rows: [
              ['❤️❤️', 'I love pizza.'],
              ['❤️', 'I like cooking.'],
              ['😐', 'I don’t mind fish.'],
              ['👎', 'I don’t like meat.'],
              ['👎👎', 'I hate washing up.'],
            ],
          },
        },
        {
          id: 'en6-1-cloze',
          type: 'CLOZE',
          instruction: 'Complete with the correct form.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Diego ' },
            { kind: 'GAP', gapId: 'l1', solution: ['loves'], hint: 'love', width: 7 },
            { kind: 'TEXT', text: ' Italian food. Yuki ' },
            { kind: 'GAP', gapId: 'l2', solution: ['doesn’t', "doesn't", 'does not'], hint: 'not', width: 9 },
            { kind: 'TEXT', text: ' like meat very much. Anna hates ' },
            { kind: 'GAP', gapId: 'l3', solution: ['cooking'], hint: 'cook', width: 9 },
            { kind: 'TEXT', text: '. ' },
            { kind: 'GAP', gapId: 'l4', solution: ['Do'], hint: '?', width: 5 },
            { kind: 'TEXT', text: ' you like vegetables?' },
          ],
        },
        {
          id: 'en6-1-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'Which sentence is correct?',
          options: [
            { id: 'o1', text: 'I like swim.' },
            { id: 'o2', text: 'I like swimming.' },
            { id: 'o3', text: 'I am like swimming.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'After “like”, a verb takes -ing: “I like swimming.” You don’t need “am”.',
          explanationTranslations: {
            de: 'Nach „like“ bekommt ein Verb die Endung -ing: „I like swimming.“ Ein „am“ braucht man nicht.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – zählbar und nicht zählbar, some und any.
  {
    order: 2,
    title: 'Is there any milk?',
    subtitle: 'some und any, zählbar und nicht zählbar',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'en6-2-h1', type: 'HEADING', level: 1, text: 'Is there any milk?' },
        {
          id: 'en6-2-dlg',
          type: 'DIALOGUE',
          title: 'Karim and his wife make a shopping list',
          lines: [
            { speaker: 'Laila', text: 'Is there any milk in the fridge?' },
            { speaker: 'Karim', text: 'No, there isn’t any. And we haven’t got any eggs.' },
            { speaker: 'Laila', text: 'OK, milk and eggs. Have we got any rice?' },
            { speaker: 'Karim', text: 'Yes, there’s some rice. But we need some tomatoes and some bread.' },
            { speaker: 'Laila', text: 'How many tomatoes?' },
            { speaker: 'Karim', text: 'Six, I think. And how much bread? One loaf is enough.' },
          ],
        },
        {
          id: 'en6-2-info-count',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Countable and uncountable',
          text: 'Some things you can count: an egg, two eggs, three tomatoes. Others you can’t count: milk, rice, bread, water, money. Uncountable nouns have no plural and no “a”: “some bread”, not “a bread”. To count them, use a container: “a loaf of bread”, “a glass of water”.',
          translations: {
            de: {
              title: 'Zählbar und nicht zählbar',
              text: 'Manche Dinge kann man zählen: an egg, two eggs, three tomatoes. Andere nicht: milk, rice, bread, water, money. Nicht zählbare Nomen haben keinen Plural und kein „a“: „some bread“, nicht „a bread“. Zum Zählen nimmt man ein Gefäß oder eine Einheit: „a loaf of bread“, „a glass of water“.',
            },
          },
          table: {
            headers: ['countable', 'uncountable'],
            rows: [
              ['an egg – two eggs', 'milk'],
              ['a tomato – tomatoes', 'rice'],
              ['a roll – rolls', 'bread'],
              ['How many eggs?', 'How much milk?'],
            ],
          },
        },
        {
          id: 'en6-2-info-some',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'some and any',
          text: '“some” and “any” mean an amount you don’t say exactly (“etwas”, “einige”). Use “some” in positive sentences and “any” in negatives and questions: “There’s some rice.” – “There isn’t any milk.” – “Have we got any eggs?” When you offer or ask for something, use “some” in the question: “Would you like some tea?”',
          translations: {
            de: {
              title: 'some und any',
              text: '„some“ und „any“ bezeichnen eine Menge, die man nicht genau angibt („etwas“, „einige“). „some“ steht in bejahten Sätzen, „any“ in Verneinungen und Fragen: „There’s some rice.“ – „There isn’t any milk.“ – „Have we got any eggs?“ Wenn man etwas anbietet oder um etwas bittet, steht auch in der Frage „some“: „Would you like some tea?“',
            },
          },
          table: {
            headers: ['', 'countable', 'uncountable'],
            rows: [
              ['+', 'We need some eggs.', 'There’s some rice.'],
              ['–', 'We haven’t got any eggs.', 'There isn’t any milk.'],
              ['?', 'Are there any eggs?', 'Is there any milk?'],
            ],
          },
        },
        {
          id: 'en6-2-cloze',
          type: 'CLOZE',
          instruction: 'Complete with some or any.',
          wordBank: ['some', 'any'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'There’s ' },
            { kind: 'GAP', gapId: 's1', solution: ['some'], width: 6 },
            { kind: 'TEXT', text: ' cheese in the fridge, but there aren’t ' },
            { kind: 'GAP', gapId: 's2', solution: ['any'], width: 6 },
            { kind: 'TEXT', text: ' eggs. Have we got ' },
            { kind: 'GAP', gapId: 's3', solution: ['any'], width: 6 },
            { kind: 'TEXT', text: ' juice? I’d like ' },
            { kind: 'GAP', gapId: 's4', solution: ['some'], width: 6 },
            { kind: 'TEXT', text: ' orange juice with my breakfast.' },
          ],
        },
        {
          id: 'en6-2-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct question.',
          question: 'You want to know the amount of rice.',
          options: [
            { id: 'o1', text: 'How many rice do we need?' },
            { id: 'o2', text: 'How much rice do we need?' },
            { id: 'o3', text: 'How much rices do we need?' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: '“rice” is uncountable: “How much rice?”. “How many” is only for things you can count: “How many tomatoes?”',
          explanationTranslations: {
            de: '„rice“ ist nicht zählbar: „How much rice?“. „How many“ steht nur bei zählbaren Dingen: „How many tomatoes?“',
          },
        },
        {
          id: 'en6-2-match',
          type: 'MATCHING',
          instruction: 'Match the container with the food.',
          left: [
            { id: 'l1', text: 'a loaf of' },
            { id: 'l2', text: 'a cup of' },
            { id: 'l3', text: 'a piece of' },
            { id: 'l4', text: 'a carton of' },
          ],
          right: [
            { id: 'r1', text: 'bread' },
            { id: 'r2', text: 'tea' },
            { id: 'r3', text: 'cake' },
            { id: 'r4', text: 'milk' },
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
  // Seite 3 – im Café: I’d like und Would you like.
  {
    order: 3,
    title: 'I’d like a coffee, please',
    subtitle: 'Bestellen mit I’d like',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'en6-3-h1', type: 'HEADING', level: 1, text: 'I’d like a coffee, please' },
        {
          id: 'en6-3-dlg',
          type: 'DIALOGUE',
          title: 'In a café',
          lines: [
            { speaker: 'Waiter', text: 'Hi, what would you like?' },
            { speaker: 'Yuki', text: 'I’d like a cup of tea, please.' },
            { speaker: 'Waiter', text: 'Would you like milk with it?' },
            { speaker: 'Yuki', text: 'No, thank you.' },
            { speaker: 'Anna', text: 'Can I have a cappuccino and a piece of carrot cake, please?' },
            { speaker: 'Waiter', text: 'Sure. Eat in or take away?' },
            { speaker: 'Anna', text: 'Eat in, please.' },
          ],
        },
        {
          id: 'en6-3-info-wouldlike',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'I like – I’d like',
          text: 'These two look similar, but they are very different. “I like coffee.” means that you generally enjoy coffee (“Ich mag Kaffee.”). “I’d like a coffee.” (= I would like) means that you want one now (“Ich hätte gern einen Kaffee.”). To order, always use “I’d like” or “Can I have”. To offer something, ask “Would you like …?”.',
          translations: {
            de: {
              title: 'I like – I’d like',
              text: 'Die beiden sehen ähnlich aus, bedeuten aber etwas ganz anderes. „I like coffee.“ heißt, dass man Kaffee grundsätzlich mag („Ich mag Kaffee.“). „I’d like a coffee.“ (= I would like) heißt, dass man jetzt einen möchte („Ich hätte gern einen Kaffee.“). Zum Bestellen immer „I’d like“ oder „Can I have“. Um etwas anzubieten, fragt man „Would you like …?“.',
            },
          },
          table: {
            headers: ['', 'meaning', 'example'],
            rows: [
              ['I like …', 'in general', 'I like tea.'],
              ['I’d like …', 'now, polite', 'I’d like a tea, please.'],
              ['Would you like …?', 'offer', 'Would you like some milk?'],
              ['Do you like …?', 'in general', 'Do you like milk?'],
            ],
          },
        },
        {
          id: 'en6-3-choice',
          type: 'CHOICE',
          instruction: 'Choose the best sentence.',
          question: 'You are in a café. What do you say to the waiter?',
          options: [
            { id: 'o1', text: 'I like an orange juice.' },
            { id: 'o2', text: 'I’d like an orange juice, please.' },
            { id: 'o3', text: 'I want orange juice.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: '“I like” is about your general taste. To order, say “I’d like …, please”. “I want” sounds rude in English.',
          explanationTranslations: {
            de: '„I like“ beschreibt den Geschmack allgemein. Zum Bestellen sagt man „I’d like …, please“. „I want“ klingt im Englischen unhöflich.',
          },
        },
        {
          id: 'en6-3-match',
          type: 'MATCHING',
          instruction: 'Match the question with the answer.',
          left: [
            { id: 'q1', text: 'Would you like some water?' },
            { id: 'q2', text: 'Do you like fish?' },
            { id: 'q3', text: 'What would you like?' },
            { id: 'q4', text: 'Eat in or take away?' },
          ],
          right: [
            { id: 'a1', text: 'Yes, please. Just a glass.' },
            { id: 'a2', text: 'Yes, I love it.' },
            { id: 'a3', text: 'A hot chocolate, please.' },
            { id: 'a4', text: 'Take away, please.' },
          ],
          solution: [
            { leftId: 'q1', rightId: 'a1' },
            { leftId: 'q2', rightId: 'a2' },
            { leftId: 'q3', rightId: 'a3' },
            { leftId: 'q4', rightId: 'a4' },
          ],
        },
        {
          id: 'en6-3-info-please',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'Please and thank you',
          text: 'British people say “please” and “thank you” very often – much more often than Germans say “bitte” and “danke”. An order without “please” can sound rude. Many people also say “cheers” for “thanks” in informal situations.',
          translations: {
            de: {
              title: 'Please und thank you',
              text: 'Britinnen und Briten sagen sehr oft „please“ und „thank you“ – viel öfter als man im Deutschen „bitte“ und „danke“ sagt. Eine Bestellung ohne „please“ kann unhöflich klingen. In lockeren Situationen sagen viele auch „cheers“ statt „thanks“.',
            },
          },
        },
        {
          id: 'en6-3-cloze',
          type: 'CLOZE',
          instruction: 'Complete the dialogue.',
          wordBank: ['would', 'I’d', 'Would', 'have', 'please'],
          caseSensitive: true,
          segments: [
            { kind: 'TEXT', text: '▸ Hello, what ' },
            { kind: 'GAP', gapId: 'o1', solution: ['would'], width: 7 },
            { kind: 'TEXT', text: ' you like?\n▸ ' },
            { kind: 'GAP', gapId: 'o2', solution: ['I’d', "I'd"], width: 5 },
            { kind: 'TEXT', text: ' like a tea, please.\n▸ ' },
            { kind: 'GAP', gapId: 'o3', solution: ['Would'], width: 7 },
            { kind: 'TEXT', text: ' you like a biscuit with it?\n▸ Yes, please. And can I ' },
            { kind: 'GAP', gapId: 'o4', solution: ['have'], width: 6 },
            { kind: 'TEXT', text: ' a glass of water, ' },
            { kind: 'GAP', gapId: 'o5', solution: ['please'], width: 7 },
            { kind: 'TEXT', text: '?' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – im Restaurant: Speisekarte, Rechnung, Trinkgeld.
  {
    order: 4,
    title: 'At the restaurant',
    subtitle: 'Speisekarte, Rechnung, Trinkgeld',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'en6-4-h1', type: 'HEADING', level: 1, text: 'At the restaurant' },
        {
          id: 'en6-4-dlg',
          type: 'DIALOGUE',
          title: 'The class dinner',
          lines: [
            { speaker: 'Waiter', text: 'Good evening. Have you got a reservation?' },
            { speaker: 'Teacher', text: 'Yes, a table for five. The name’s Clarke.' },
            { speaker: 'Waiter', text: 'This way, please. Here are the menus. Are you ready to order?' },
            { speaker: 'Diego', text: 'Yes. For my starter I’d like the soup, and then the lasagne, please.' },
            { speaker: 'Karim', text: 'Is there anything vegetarian?' },
            { speaker: 'Waiter', text: 'Yes, the mushroom risotto is very popular.' },
            { speaker: 'Teacher', text: '(later) Excuse me, could we have the bill, please?' },
          ],
        },
        {
          id: 'en6-4-vocab',
          type: 'VOCAB_LIST',
          title: 'Words: at the restaurant',
          items: [
            { term: 'menu', translations: { de: 'die Speisekarte', es: 'la carta' } },
            { term: 'reservation', translations: { de: 'die Reservierung', es: 'la reserva' } },
            { term: 'a table for two', translations: { de: 'ein Tisch für zwei', es: 'una mesa para dos' } },
            { term: 'starter', translations: { de: 'die Vorspeise', es: 'el entrante' } },
            { term: 'main course', translations: { de: 'das Hauptgericht', es: 'el plato principal' } },
            { term: 'dessert', translations: { de: 'der Nachtisch', es: 'el postre' } },
            { term: 'order', translations: { de: 'bestellen', es: 'pedir' }, example: 'Are you ready to order?' },
            { term: 'the bill', translations: { de: 'die Rechnung', es: 'la cuenta' } },
            { term: 'tip', translations: { de: 'das Trinkgeld', es: 'la propina' } },
            { term: 'delicious', translations: { de: 'köstlich, lecker', es: 'delicioso' } },
          ],
        },
        {
          id: 'en6-4-order',
          type: 'ORDERING',
          instruction: 'Put the evening in order.',
          items: [
            { id: 'd1', text: 'Have you got a reservation?' },
            { id: 'd2', text: 'Here are the menus.' },
            { id: 'd3', text: 'Are you ready to order?' },
            { id: 'd4', text: 'Would you like a dessert?' },
            { id: 'd5', text: 'Could we have the bill, please?' },
          ],
          solution: ['d1', 'd2', 'd3', 'd4', 'd5'],
        },
        {
          id: 'en6-4-info-bill',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'The bill and the tip',
          text: 'In the UK, you say “the bill”; in the USA, “the check”. In British restaurants a tip of about 10–12.5% is normal; sometimes it is already on the bill as a “service charge”. In the USA, 15–20% is expected. In pubs you usually order at the bar and don’t tip.',
          translations: {
            de: {
              title: 'Rechnung und Trinkgeld',
              text: 'In Großbritannien sagt man „the bill“, in den USA „the check“. In britischen Restaurants sind etwa 10–12,5 % Trinkgeld üblich; manchmal steht es schon als „service charge“ auf der Rechnung. In den USA werden 15–20 % erwartet. Im Pub bestellt man meist an der Theke und gibt kein Trinkgeld.',
            },
          },
        },
        {
          id: 'en6-4-choice',
          type: 'CHOICE',
          instruction: 'Choose the best sentence.',
          question: 'You have finished your meal in a London restaurant and want to pay.',
          options: [
            { id: 'o1', text: 'Could we have the bill, please?' },
            { id: 'o2', text: 'Give me the invoice.' },
            { id: 'o3', text: 'I’d like to pay the menu.' },
          ],
          multiple: false,
          solution: ['o1'],
          explanation: 'In a British restaurant you ask for “the bill”, politely with “Could we have …, please?”.',
          explanationTranslations: {
            de: 'Im britischen Restaurant bittet man um „the bill“, höflich mit „Could we have …, please?“.',
          },
        },
        {
          id: 'en6-4-cloze',
          type: 'CLOZE',
          instruction: 'Complete the dialogue.',
          wordBank: ['table', 'ready', 'starter', 'course', 'bill'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '▸ A ' },
            { kind: 'GAP', gapId: 'r1', solution: ['table'], width: 6 },
            { kind: 'TEXT', text: ' for two, please.\n▸ Of course. … Are you ' },
            { kind: 'GAP', gapId: 'r2', solution: ['ready'], width: 6 },
            { kind: 'TEXT', text: ' to order?\n▸ Yes. As a ' },
            { kind: 'GAP', gapId: 'r3', solution: ['starter'], width: 8 },
            { kind: 'TEXT', text: ', the tomato soup, and for the main ' },
            { kind: 'GAP', gapId: 'r4', solution: ['course'], width: 7 },
            { kind: 'TEXT', text: ', the fish, please.\n▸ (later) Could we have the ' },
            { kind: 'GAP', gapId: 'r5', solution: ['bill'], width: 5 },
            { kind: 'TEXT', text: ', please?' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – Rückblick.
  {
    order: 5,
    title: 'Can you do it?',
    subtitle: 'Rückblick auf das ganze Kapitel',
    estimatedMinutes: 18,
    content: {
      version: v,
      blocks: [
        { id: 'en6-5-h1', type: 'HEADING', level: 1, text: 'Can you do it?' },
        {
          id: 'en6-5-intro',
          type: 'TEXT',
          text: 'The whole chapter again – and the end of A1! Likes and dislikes, some and any, ordering in a café and in a restaurant.',
          translations: {
            de: 'Das ganze Kapitel noch einmal – und das Ende von A1! Vorlieben und Abneigungen, some und any, bestellen im Café und im Restaurant.',
          },
        },
        {
          id: 'en6-5-cloze',
          type: 'CLOZE',
          instruction: 'Complete the text.',
          wordBank: ['likes', 'any', 'some', 'I’d', 'much'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Yuki ' },
            { kind: 'GAP', gapId: 'f1', solution: ['likes'], width: 6 },
            { kind: 'TEXT', text: ' fish, but she doesn’t eat ' },
            { kind: 'GAP', gapId: 'f2', solution: ['any'], width: 5 },
            { kind: 'TEXT', text: ' meat. In the café she says: “' },
            { kind: 'GAP', gapId: 'f3', solution: ['I’d', "I'd"], width: 5 },
            { kind: 'TEXT', text: ' like a green tea and ' },
            { kind: 'GAP', gapId: 'f4', solution: ['some'], width: 6 },
            { kind: 'TEXT', text: ' cake, please. How ' },
            { kind: 'GAP', gapId: 'f5', solution: ['much'], width: 6 },
            { kind: 'TEXT', text: ' is that?”' },
          ],
        },
        {
          id: 'en6-5-match',
          type: 'MATCHING',
          instruction: 'Match the situation with the right sentence.',
          left: [
            { id: 'm1', text: 'You offer a friend a drink.' },
            { id: 'm2', text: 'You order in a café.' },
            { id: 'm3', text: 'You talk about your taste.' },
            { id: 'm4', text: 'You want to pay.' },
          ],
          right: [
            { id: 'x1', text: 'Would you like some juice?' },
            { id: 'x2', text: 'Can I have a coffee, please?' },
            { id: 'x3', text: 'I don’t like tea very much.' },
            { id: 'x4', text: 'Could we have the bill, please?' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'x1' },
            { leftId: 'm2', rightId: 'x2' },
            { leftId: 'm3', rightId: 'x3' },
            { leftId: 'm4', rightId: 'x4' },
          ],
        },
        {
          id: 'en6-5-choice',
          type: 'CHOICE',
          instruction: 'Mark all the correct sentences.',
          question: 'Which of these sentences are correct?',
          options: [
            { id: 'r1', text: 'There isn’t any bread.' },
            { id: 'r2', text: 'I’d like a bread, please.' },
            { id: 'r3', text: 'He loves cooking.' },
            { id: 'r4', text: 'How many milk do we need?' },
          ],
          multiple: true,
          solution: ['r1', 'r3'],
          explanation: '“bread” and “milk” are uncountable: “some bread” or “a loaf of bread”, and “How much milk?”.',
          explanationTranslations: {
            de: '„bread“ und „milk“ sind nicht zählbar: „some bread“ oder „a loaf of bread“, und „How much milk?“.',
          },
        },
        {
          id: 'en6-5-writing',
          type: 'WRITING',
          instruction: 'Write about food.',
          prompt:
            'Write five to seven sentences: What do you like eating and drinking? What don’t you like? What is in your fridge now – and what isn’t? Use like/love/hate, some and any.',
          minWords: 30,
          maxWords: 110,
          aiFeedback: true,
          sampleAnswer:
            'I love Italian food, especially pasta. I also like fish, but I don’t like meat very much. I hate mushrooms! I drink a lot of coffee. In my fridge there’s some cheese and some milk, but there aren’t any eggs. I need to go shopping.',
        },
      ],
    },
  },
];
