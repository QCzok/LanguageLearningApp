import type { UnitSeed } from './chapter-beginner-1';

/**
 * Grammatik, Kapitel 6: „Der Satzbau“
 *
 * Drei Seiten, gebaut wie die Kapitel davor.
 *
 * Das Kapitel bringt nichts Neues, sondern ordnet, was in den Kapiteln davor
 * einzeln vorkam: Verb auf Position 2, Satzklammer bei trennbaren Verben,
 * Modalverben und Perfekt, Verb am Ende im Nebensatz. Seite 1 zeigt, dass
 * das Vorfeld frei ist und das Verb nicht; Seite 2 die Fragen; Seite 3 das
 * Mittelfeld und die Konnektoren, bei denen sich entscheidet, ob das Verb
 * an Position 2 bleibt (und, aber, denn) oder ans Ende wandert (weil, dass).
 *
 * Erklärungen übersetzt, Tabellen unübersetzt – wie in Kapitel 1.
 */
const v = 1;

export const GRAMMAR_6_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Position 2 und das freie Vorfeld.
  {
    order: 1,
    title: 'Das Verb auf Position 2',
    subtitle: 'Die wichtigste Regel des deutschen Satzes',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'g6-1-h1', type: 'HEADING', level: 1, text: 'Das Verb auf Position 2' },
        {
          id: 'g6-1-intro',
          type: 'TEXT',
          text: 'Im deutschen Aussagesatz steht das konjugierte Verb immer an zweiter Stelle. Was davor steht, ist fast frei: das Subjekt, eine Zeitangabe, ein Ort, sogar ein Objekt. Steht nicht das Subjekt vorn, rückt es direkt hinter das Verb.',
          translations: {
            en: 'In a German statement the conjugated verb is always in second place. What comes before it is almost free: the subject, a time expression, a place, even an object. If the subject isn’t first, it moves directly after the verb.',
            es: 'En la oración enunciativa alemana el verbo conjugado siempre ocupa el segundo lugar. Lo que va delante es casi libre: el sujeto, una indicación de tiempo, un lugar, incluso un objeto. Si el sujeto no va delante, pasa justo detrás del verbo.',
            fr: 'Dans la phrase déclarative allemande, le verbe conjugué est toujours en deuxième position. Ce qui le précède est presque libre : le sujet, un complément de temps, un lieu, même un complément d’objet. Si le sujet n’est pas en tête, il passe juste après le verbe.',
            it: 'Nella frase affermativa tedesca il verbo coniugato sta sempre al secondo posto. Ciò che lo precede è quasi libero: il soggetto, un’indicazione di tempo, un luogo, perfino un complemento oggetto. Se il soggetto non è all’inizio, va subito dopo il verbo.',
          },
        },
        {
          id: 'g6-1-info-pos2',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Position 1 ist frei, Position 2 nicht',
          text: 'Position 1 kann auch aus mehreren Wörtern bestehen („Am nächsten Samstag“) – es zählt der Satzteil, nicht die Zahl der Wörter. Was man an den Anfang stellt, wird betont oder knüpft an den vorigen Satz an.',
          translations: {
            en: {
              title: 'Position 1 is free, position 2 is not',
              text: 'Position 1 can consist of several words („Am nächsten Samstag“) – what counts is the sentence element, not the number of words. Whatever you put first is emphasised or links back to the previous sentence.',
            },
            es: {
              title: 'La posición 1 es libre; la 2, no',
              text: 'La posición 1 puede constar de varias palabras („Am nächsten Samstag“): cuenta el elemento de la frase, no el número de palabras. Lo que se pone al principio queda destacado o enlaza con la frase anterior.',
            },
            fr: {
              title: 'La position 1 est libre, pas la position 2',
              text: 'La position 1 peut comporter plusieurs mots (« Am nächsten Samstag ») – c’est le groupe qui compte, pas le nombre de mots. Ce qu’on place en tête est mis en relief ou fait le lien avec la phrase précédente.',
            },
            it: {
              title: 'La posizione 1 è libera, la 2 no',
              text: 'La posizione 1 può essere composta da più parole („Am nächsten Samstag“) – conta il complemento, non il numero di parole. Ciò che si mette all’inizio viene messo in risalto o si collega alla frase precedente.',
            },
          },
          table: {
            headers: ['Position 1', 'Position 2', 'Rest'],
            rows: [
              ['Ich', 'fahre', 'am Samstag nach Berlin.'],
              ['Am Samstag', 'fahre', 'ich nach Berlin.'],
              ['Nach Berlin', 'fahre', 'ich am Samstag.'],
              ['Am nächsten Samstag um acht', 'fahre', 'ich nach Berlin.'],
            ],
          },
        },
        {
          id: 'g6-1-choice',
          type: 'CHOICE',
          instruction: 'Welche Sätze sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'c1', text: 'Morgen ich habe einen Termin.' },
            { id: 'c2', text: 'Morgen habe ich einen Termin.' },
            { id: 'c3', text: 'Einen Termin habe ich morgen.' },
            { id: 'c4', text: 'Ich morgen habe einen Termin.' },
          ],
          solution: ['c2', 'c3'],
          explanation:
            'Nur ein Satzteil darf vor dem Verb stehen. Steht „Morgen“ vorn, folgt sofort das Verb und dann das Subjekt: Morgen habe ich …',
          explanationTranslations: {
            en: 'Only one sentence element may come before the verb. If „Morgen“ comes first, the verb follows immediately, then the subject: Morgen habe ich …',
            es: 'Solo un elemento puede ir delante del verbo. Si „Morgen“ va delante, sigue inmediatamente el verbo y luego el sujeto: Morgen habe ich …',
            fr: 'Un seul groupe peut précéder le verbe. Si « Morgen » est en tête, le verbe suit immédiatement, puis le sujet : Morgen habe ich …',
            it: 'Davanti al verbo può stare un solo complemento. Se „Morgen“ è all’inizio, segue subito il verbo e poi il soggetto: Morgen habe ich …',
          },
        },
        {
          id: 'g6-1-order-1',
          type: 'ORDERING',
          instruction: 'Beginnen Sie mit „Im Sommer“.',
          items: [
            { id: 'a1', text: 'Im Sommer' },
            { id: 'a2', text: 'fliegen' },
            { id: 'a3', text: 'meine Eltern' },
            { id: 'a4', text: 'nach Kanada.' },
          ],
          solution: ['a1', 'a2', 'a3', 'a4'],
        },
        {
          id: 'g6-1-order-2',
          type: 'ORDERING',
          instruction: 'Beginnen Sie mit „Den Kuchen“.',
          items: [
            { id: 'b1', text: 'Den Kuchen' },
            { id: 'b2', text: 'hat' },
            { id: 'b3', text: 'meine Schwester' },
            { id: 'b4', text: 'gebacken.' },
          ],
          solution: ['b1', 'b2', 'b3', 'b4'],
        },
        {
          id: 'g6-1-cloze',
          type: 'CLOZE',
          instruction: 'Stellen Sie die Zeitangabe an den Anfang. Ergänzen Sie Verb und Subjekt.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Ich gehe heute ins Kino. → Heute ' },
            { kind: 'GAP', gapId: 'v1', solution: ['gehe ich'], width: 9 },
            { kind: 'TEXT', text: ' ins Kino.\n2. Wir essen um sieben. → Um sieben ' },
            { kind: 'GAP', gapId: 'v2', solution: ['essen wir'], width: 10 },
            { kind: 'TEXT', text: '.\n3. Lena arbeitet morgen nicht. → Morgen ' },
            { kind: 'GAP', gapId: 'v3', solution: ['arbeitet Lena'], width: 14 },
            { kind: 'TEXT', text: ' nicht.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – W-Fragen, Ja/Nein-Fragen, und „doch“.
  {
    order: 2,
    title: 'Fragen stellen',
    subtitle: 'W-Fragen, Ja/Nein-Fragen, doch',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'g6-2-h1', type: 'HEADING', level: 1, text: 'Fragen stellen' },
        {
          id: 'g6-2-info-fragen',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Zwei Arten von Fragen',
          text: 'Die W-Frage beginnt mit einem Fragewort auf Position 1; das Verb folgt auf Position 2. Die Ja/Nein-Frage hat kein Fragewort; das Verb steht auf Position 1. Bei beiden steht der zweite Verbteil am Ende.',
          translations: {
            en: {
              title: 'Two kinds of question',
              text: 'A W-question starts with a question word in position 1; the verb follows in position 2. A yes/no question has no question word; the verb is in position 1. In both, the second part of the verb goes at the end.',
            },
            es: {
              title: 'Dos tipos de preguntas',
              text: 'La pregunta con W empieza con un interrogativo en la posición 1; el verbo va en la 2. La pregunta de sí/no no tiene interrogativo; el verbo va en la posición 1. En ambas, la segunda parte del verbo va al final.',
            },
            fr: {
              title: 'Deux sortes de questions',
              text: 'La question en W commence par un mot interrogatif en position 1 ; le verbe suit en position 2. La question fermée n’a pas de mot interrogatif ; le verbe est en position 1. Dans les deux cas, la deuxième partie du verbe est à la fin.',
            },
            it: {
              title: 'Due tipi di domande',
              text: 'La domanda con W inizia con una parola interrogativa in posizione 1; il verbo segue in posizione 2. La domanda sì/no non ha parola interrogativa; il verbo sta in posizione 1. In entrambe la seconda parte del verbo va alla fine.',
            },
          },
          table: {
            headers: ['Position 1', 'Position 2', 'Mitte', 'Ende'],
            rows: [
              ['Wann', 'kommst', 'du', 'an?'],
              ['Was', 'hast', 'du gestern', 'gemacht?'],
              ['Kommst', 'du', 'morgen', 'mit?'],
              ['Kannst', 'du', 'mir', 'helfen?'],
            ],
          },
        },
        {
          id: 'g6-2-match-w',
          type: 'MATCHING',
          instruction: 'Welches Fragewort passt zur Antwort?',
          left: [
            { id: 'l1', text: 'Seit wann …?' },
            { id: 'l2', text: 'Wie lange …?' },
            { id: 'l3', text: 'Wie oft …?' },
            { id: 'l4', text: 'Wem …?' },
            { id: 'l5', text: 'Warum …?' },
          ],
          right: [
            { id: 'r1', text: 'Seit 2020.' },
            { id: 'r2', text: 'Drei Stunden.' },
            { id: 'r3', text: 'Zweimal pro Woche.' },
            { id: 'r4', text: 'Meiner Schwester.' },
            { id: 'r5', text: 'Weil ich krank war.' },
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
          id: 'g6-2-order',
          type: 'ORDERING',
          instruction: 'Bilden Sie eine Ja/Nein-Frage im Perfekt.',
          items: [
            { id: 'q1', text: 'Hast' },
            { id: 'q2', text: 'du' },
            { id: 'q3', text: 'die' },
            { id: 'q4', text: 'Fahrkarten' },
            { id: 'q5', text: 'schon' },
            { id: 'q6', text: 'gekauft?' },
          ],
          solution: ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'],
        },
        {
          id: 'g6-2-info-doch',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Ja, nein – oder doch?',
          text: 'Auf eine verneinte Frage antwortet man mit „doch“, wenn man widerspricht: „Kommst du nicht mit?“ – „Doch, ich komme mit!“ „Ja“ wäre hier unklar. Wer zustimmt, sagt „nein“: „Nein, ich komme nicht mit.“',
          translations: {
            en: {
              title: 'Yes, no – or doch?',
              text: 'To contradict a negative question you answer „doch“: „Kommst du nicht mit?“ (Aren’t you coming?) – „Doch, ich komme mit!“ (Yes, I am!). „Ja“ would be unclear here. If you agree, you say „nein“: „Nein, ich komme nicht mit.“',
            },
            es: {
              title: '¿Sí, no… o doch?',
              text: 'A una pregunta negativa se responde con „doch“ si se contradice: „Kommst du nicht mit?“ (¿no vienes?) – „Doch, ich komme mit!“ (¡sí, sí que voy!). „Ja“ sería confuso aquí. Si se está de acuerdo, se dice „nein“: „Nein, ich komme nicht mit.“',
            },
            fr: {
              title: 'Oui, non – ou doch ?',
              text: 'À une question négative, on répond « doch » pour contredire, comme « si » en français : « Kommst du nicht mit? » (tu ne viens pas ?) – « Doch, ich komme mit! » (si, je viens !). « Ja » serait ambigu. Pour confirmer, on dit « nein » : « Nein, ich komme nicht mit. »',
            },
            it: {
              title: 'Sì, no – o doch?',
              text: 'A una domanda negativa si risponde „doch“ se si contraddice: „Kommst du nicht mit?“ (non vieni?) – „Doch, ich komme mit!“ (sì che vengo!). „Ja“ qui sarebbe ambiguo. Se si è d’accordo, si dice „nein“: „Nein, ich komme nicht mit.“',
            },
          },
        },
        {
          id: 'g6-2-choice-doch',
          type: 'CHOICE',
          instruction: '„Hast du keinen Hunger?“ – Sie haben großen Hunger. Was antworten Sie?',
          multiple: false,
          options: [
            { id: 'c1', text: 'Ja, ich habe Hunger.' },
            { id: 'c2', text: 'Doch, ich habe großen Hunger!' },
            { id: 'c3', text: 'Nein, ich habe Hunger.' },
          ],
          solution: ['c2'],
          explanation:
            'Die Frage ist verneint („keinen“), und Sie widersprechen – also „doch“.',
          explanationTranslations: {
            en: 'The question is negative („keinen“) and you’re contradicting it – so „doch“.',
            es: 'La pregunta es negativa („keinen“) y usted la contradice, así que „doch“.',
            fr: 'La question est négative (« keinen ») et vous la contredites – donc « doch ».',
            it: 'La domanda è negativa („keinen“) e lei la contraddice – quindi „doch“.',
          },
        },
        {
          id: 'g6-2-cloze',
          type: 'CLOZE',
          instruction: 'Ja, nein oder doch?',
          wordBank: ['Ja', 'Nein', 'Doch'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Arbeitest du heute? – ' },
            { kind: 'GAP', gapId: 'd1', solution: ['Ja'], width: 6 },
            { kind: 'TEXT', text: ', bis fünf.\n2. Bist du nicht müde? – ' },
            { kind: 'GAP', gapId: 'd2', solution: ['Doch'], width: 6 },
            { kind: 'TEXT', text: ', sehr!\n3. Kommt Paul nicht? – ' },
            { kind: 'GAP', gapId: 'd3', solution: ['Nein'], width: 6 },
            { kind: 'TEXT', text: ', er ist krank.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – das Mittelfeld und die Konnektoren.
  {
    order: 3,
    title: 'Klammer, Mittelfeld, Konnektoren',
    subtitle: 'Wie Sätze zusammenhalten',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'g6-3-h1', type: 'HEADING', level: 1, text: 'Klammer, Mittelfeld, Konnektoren' },
        {
          id: 'g6-3-info-klammer',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Die Satzklammer',
          text: 'Besteht das Verb aus zwei Teilen, bilden sie eine Klammer: Der konjugierte Teil steht auf Position 2, der andere am Ende. Das gilt für trennbare Verben, Modalverben, das Perfekt und das Futur mit „werden“. Alles dazwischen heißt Mittelfeld.',
          translations: {
            en: {
              title: 'The sentence bracket',
              text: 'If the verb has two parts, they form a bracket: the conjugated part is in position 2, the other at the end. This applies to separable verbs, modal verbs, the perfect and the future with „werden“. Everything in between is called the middle field.',
            },
            es: {
              title: 'El paréntesis verbal',
              text: 'Si el verbo tiene dos partes, forman un paréntesis: la parte conjugada va en la posición 2 y la otra al final. Vale para los verbos separables, los modales, el Perfekt y el futuro con „werden“. Todo lo que queda en medio se llama campo medio.',
            },
            fr: {
              title: 'La parenthèse verbale',
              text: 'Si le verbe a deux parties, elles forment une parenthèse : la partie conjuguée est en position 2, l’autre à la fin. Cela vaut pour les verbes séparables, les verbes de modalité, le Perfekt et le futur avec « werden ». Tout ce qui se trouve entre les deux s’appelle le champ central.',
            },
            it: {
              title: 'La parentesi verbale',
              text: 'Se il verbo ha due parti, queste formano una parentesi: la parte coniugata sta in posizione 2, l’altra alla fine. Vale per i verbi separabili, i modali, il Perfekt e il futuro con „werden“. Tutto ciò che sta in mezzo si chiama campo centrale.',
            },
          },
          table: {
            headers: ['Position 1', 'Position 2', 'Mittelfeld', 'Ende'],
            rows: [
              ['Ich', 'rufe', 'dich morgen', 'an.'],
              ['Ich', 'kann', 'dich morgen', 'anrufen.'],
              ['Ich', 'habe', 'dich gestern', 'angerufen.'],
              ['Ich', 'werde', 'dich bald', 'anrufen.'],
            ],
          },
        },
        {
          id: 'g6-3-info-tekamolo',
          type: 'INFO',
          variant: 'TIP',
          title: 'Im Mittelfeld: te – ka – mo – lo',
          text: 'Stehen mehrere Angaben im Mittelfeld, gilt als Faustregel die Reihenfolge temporal (wann?) – kausal (warum?) – modal (wie?) – lokal (wo? wohin?). Beispiel: Ich fahre morgen wegen der Arbeit mit dem Zug nach Hamburg.',
          translations: {
            en: {
              title: 'In the middle field: te – ka – mo – lo',
              text: 'When there are several adverbials in the middle field, the rule of thumb is: temporal (when?) – causal (why?) – modal (how?) – local (where? where to?). Example: Ich fahre morgen wegen der Arbeit mit dem Zug nach Hamburg.',
            },
            es: {
              title: 'En el campo medio: te – ka – mo – lo',
              text: 'Si hay varios complementos en el campo medio, la regla práctica es: temporal (¿cuándo?) – causal (¿por qué?) – modal (¿cómo?) – local (¿dónde? ¿adónde?). Ejemplo: Ich fahre morgen wegen der Arbeit mit dem Zug nach Hamburg.',
            },
            fr: {
              title: 'Dans le champ central : te – ka – mo – lo',
              text: 'S’il y a plusieurs compléments dans le champ central, la règle pratique est : temps (quand ?) – cause (pourquoi ?) – manière (comment ?) – lieu (où ?). Exemple : Ich fahre morgen wegen der Arbeit mit dem Zug nach Hamburg.',
            },
            it: {
              title: 'Nel campo centrale: te – ka – mo – lo',
              text: 'Se nel campo centrale ci sono più complementi, la regola pratica è: tempo (quando?) – causa (perché?) – modo (come?) – luogo (dove?). Esempio: Ich fahre morgen wegen der Arbeit mit dem Zug nach Hamburg.',
            },
          },
        },
        {
          id: 'g6-3-order',
          type: 'ORDERING',
          instruction: 'Ordnen Sie die Angaben: wann – wie – wohin.',
          items: [
            { id: 't1', text: 'Wir' },
            { id: 't2', text: 'fahren' },
            { id: 't3', text: 'am Freitag' },
            { id: 't4', text: 'mit dem Auto' },
            { id: 't5', text: 'an die Ostsee.' },
          ],
          solution: ['t1', 't2', 't3', 't4', 't5'],
        },
        {
          id: 'g6-3-info-konnektoren',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Konnektoren: Position 0 oder Nebensatz?',
          text: 'und, aber, oder, denn und sondern verbinden zwei Hauptsätze. Sie stehen auf „Position 0“ und ändern nichts: Das Verb bleibt auf Position 2. weil, dass, wenn, ob und nachdem leiten einen Nebensatz ein: Das Verb geht ans Ende.',
          translations: {
            en: {
              title: 'Connectors: position 0 or subordinate clause?',
              text: 'und, aber, oder, denn and sondern join two main clauses. They sit in „position 0“ and change nothing: the verb stays in position 2. weil, dass, wenn, ob and nachdem introduce a subordinate clause: the verb goes to the end.',
            },
            es: {
              title: 'Conectores: ¿posición 0 o subordinada?',
              text: 'und, aber, oder, denn y sondern unen dos oraciones principales. Ocupan la „posición 0“ y no cambian nada: el verbo sigue en la posición 2. weil, dass, wenn, ob y nachdem introducen una subordinada: el verbo va al final.',
            },
            fr: {
              title: 'Connecteurs : position 0 ou subordonnée ?',
              text: 'und, aber, oder, denn et sondern relient deux propositions principales. Ils occupent la « position 0 » et ne changent rien : le verbe reste en position 2. weil, dass, wenn, ob et nachdem introduisent une subordonnée : le verbe va à la fin.',
            },
            it: {
              title: 'Connettivi: posizione 0 o subordinata?',
              text: 'und, aber, oder, denn e sondern collegano due frasi principali. Stanno in „posizione 0“ e non cambiano nulla: il verbo resta in posizione 2. weil, dass, wenn, ob e nachdem introducono una subordinata: il verbo va alla fine.',
            },
          },
          table: {
            headers: ['', 'Beispiel'],
            rows: [
              ['denn (Position 0)', 'Ich bleibe zu Hause, denn ich bin krank.'],
              ['weil (Nebensatz)', 'Ich bleibe zu Hause, weil ich krank bin.'],
              ['aber (Position 0)', 'Es regnet, aber wir gehen spazieren.'],
              ['wenn (Nebensatz)', 'Wir gehen spazieren, wenn es nicht regnet.'],
            ],
          },
        },
        {
          id: 'g6-3-choice',
          type: 'CHOICE',
          instruction: 'Welche Sätze sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'c1', text: 'Ich lerne Deutsch, denn ich will in Wien studieren.' },
            { id: 'c2', text: 'Ich lerne Deutsch, denn ich in Wien studieren will.' },
            { id: 'c3', text: 'Ich lerne Deutsch, weil ich in Wien studieren will.' },
            { id: 'c4', text: 'Ich lerne Deutsch, weil ich will in Wien studieren.' },
          ],
          solution: ['c1', 'c3'],
          explanation:
            'Nach „denn“ bleibt die Hauptsatz-Stellung: denn ich will … studieren. Nach „weil“ steht das konjugierte Verb am Ende: weil ich … studieren will.',
          explanationTranslations: {
            en: 'After „denn“ main-clause order stays: denn ich will … studieren. After „weil“ the conjugated verb goes at the end: weil ich … studieren will.',
            es: 'Después de „denn“ se mantiene el orden de la principal: denn ich will … studieren. Después de „weil“ el verbo conjugado va al final: weil ich … studieren will.',
            fr: 'Après « denn », l’ordre de la principale reste : denn ich will … studieren. Après « weil », le verbe conjugué va à la fin : weil ich … studieren will.',
            it: 'Dopo „denn“ resta l’ordine della principale: denn ich will … studieren. Dopo „weil“ il verbo coniugato va alla fine: weil ich … studieren will.',
          },
        },
        {
          id: 'g6-3-cloze',
          type: 'CLOZE',
          instruction: 'Achten Sie auf die Stellung des Verbs: Welcher Konnektor passt?',
          wordBank: ['denn', 'weil', 'dass', 'aber'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Wir bleiben drinnen, ' },
            { kind: 'GAP', gapId: 'k1', solution: ['denn'], width: 5 },
            { kind: 'TEXT', text: ' es ist sehr kalt.\n2. Wir bleiben drinnen, ' },
            { kind: 'GAP', gapId: 'k2', solution: ['weil'], width: 5 },
            { kind: 'TEXT', text: ' es sehr kalt ist.\n3. Ich glaube, ' },
            { kind: 'GAP', gapId: 'k3', solution: ['dass'], width: 5 },
            { kind: 'TEXT', text: ' das Museum heute geschlossen ist.\n4. Das Museum ist klein, ' },
            { kind: 'GAP', gapId: 'k4', solution: ['aber'], width: 5 },
            { kind: 'TEXT', text: ' es ist sehr interessant.' },
          ],
        },
        {
          id: 'g6-3-writing',
          type: 'WRITING',
          instruction: 'Mein Wochenende – mit Plan',
          prompt:
            'Beschreiben Sie Ihre Pläne für das nächste Wochenende in fünf bis sieben Sätzen. Beginnen Sie nicht jeden Satz mit „Ich“, sondern auch mit Zeitangaben. Benutzen Sie mindestens ein Modalverb und je einmal „denn“ und „weil“.',
          minWords: 40,
          maxWords: 150,
          aiFeedback: true,
          sampleAnswer:
            'Am Samstagmorgen muss ich zuerst einkaufen, denn der Kühlschrank ist leer. Danach will ich mit meiner Freundin in den Park gehen. Am Nachmittag besuchen wir ihre Eltern. Abends koche ich für alle, weil meine Freundin Geburtstag hat. Am Sonntag schlafe ich lange. Vielleicht gehen wir am Abend noch ins Kino.',
        },
      ],
    },
  },
];
