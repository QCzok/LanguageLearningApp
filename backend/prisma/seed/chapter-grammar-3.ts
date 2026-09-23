import type { UnitSeed } from './chapter-beginner-1';

/**
 * Grammatik, Kapitel 3: „Verben im Präsens“
 *
 * Drei Seiten, gebaut wie die Kapitel davor.
 *
 * Seite 1 ordnet die regelmäßigen Endungen und die zwei Stellen, an denen
 * die Aussprache eingreift (arbeitest, heißt). Seite 2 bringt die starken
 * Verben mit ihren drei Vokalwechseln und die drei Verben, die man ohnehin
 * auswendig kann, bevor man weiß, dass sie unregelmäßig sind. Seite 3 fasst
 * zusammen, was das Kursbuch in Kapitel 5 über trennbare Verben eingeführt
 * hat, und stellt die untrennbaren daneben.
 *
 * Erklärungen übersetzt, Tabellen unübersetzt – wie in Kapitel 1.
 */
const v = 1;

export const GRAMMAR_3_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – die regelmäßigen Endungen und ihre zwei Sonderfälle.
  {
    order: 1,
    title: 'Regelmäßige Verben',
    subtitle: 'Stamm plus Endung',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'g3-1-h1', type: 'HEADING', level: 1, text: 'Regelmäßige Verben' },
        {
          id: 'g3-1-intro',
          type: 'TEXT',
          text: 'Jedes deutsche Verb steht im Wörterbuch im Infinitiv und endet auf -en oder -n: wohnen, lernen, sammeln. Nimmt man die Endung weg, bleibt der Stamm: wohn-, lern-. An diesen Stamm hängt man im Präsens die Personalendung.',
          translations: {
            en: 'Every German verb is listed in the dictionary in the infinitive and ends in -en or -n: wohnen, lernen, sammeln. Remove the ending and you are left with the stem: wohn-, lern-. In the present tense you add the personal ending to this stem.',
            es: 'Todo verbo alemán aparece en el diccionario en infinitivo y termina en -en o -n: wohnen, lernen, sammeln. Si se quita la terminación, queda la raíz: wohn-, lern-. En presente se añade a esta raíz la terminación personal.',
            fr: 'Chaque verbe allemand figure dans le dictionnaire à l’infinitif et se termine par -en ou -n : wohnen, lernen, sammeln. Si l’on enlève la terminaison, il reste le radical : wohn-, lern-. Au présent, on ajoute à ce radical la terminaison de personne.',
            it: 'Ogni verbo tedesco compare nel dizionario all’infinito e finisce in -en o -n: wohnen, lernen, sammeln. Togliendo la desinenza resta la radice: wohn-, lern-. Al presente si aggiunge a questa radice la desinenza personale.',
          },
        },
        {
          id: 'g3-1-info-endungen',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Die Endungen im Präsens',
          text: 'Die Endungen sind für fast alle Verben gleich: -e, -st, -t, -en, -t, -en. Die Formen für „wir“ und „sie/Sie“ sind immer gleich dem Infinitiv.',
          translations: {
            en: {
              title: 'Present tense endings',
              text: 'The endings are the same for almost all verbs: -e, -st, -t, -en, -t, -en. The forms for „wir“ and „sie/Sie“ are always identical to the infinitive.',
            },
            es: {
              title: 'Las terminaciones del presente',
              text: 'Las terminaciones son iguales para casi todos los verbos: -e, -st, -t, -en, -t, -en. Las formas de „wir“ y „sie/Sie“ siempre coinciden con el infinitivo.',
            },
            fr: {
              title: 'Les terminaisons du présent',
              text: 'Les terminaisons sont les mêmes pour presque tous les verbes : -e, -st, -t, -en, -t, -en. Les formes de « wir » et « sie/Sie » sont toujours identiques à l’infinitif.',
            },
            it: {
              title: 'Le desinenze del presente',
              text: 'Le desinenze sono uguali per quasi tutti i verbi: -e, -st, -t, -en, -t, -en. Le forme di „wir“ e „sie/Sie“ coincidono sempre con l’infinito.',
            },
          },
          table: {
            headers: ['Person', 'Endung', 'wohnen', 'lernen', 'spielen'],
            rows: [
              ['ich', '-e', 'wohne', 'lerne', 'spiele'],
              ['du', '-st', 'wohnst', 'lernst', 'spielst'],
              ['er / sie / es', '-t', 'wohnt', 'lernt', 'spielt'],
              ['wir', '-en', 'wohnen', 'lernen', 'spielen'],
              ['ihr', '-t', 'wohnt', 'lernt', 'spielt'],
              ['sie / Sie', '-en', 'wohnen', 'lernen', 'spielen'],
            ],
          },
        },
        {
          id: 'g3-1-cloze-endungen',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die richtige Form.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Du ' },
            { kind: 'GAP', gapId: 'e1', solution: ['spielst'], hint: 'spielen', width: 8 },
            { kind: 'TEXT', text: ' sehr gut Klavier.\n2. Ihr ' },
            { kind: 'GAP', gapId: 'e2', solution: ['wohnt'], hint: 'wohnen', width: 7 },
            { kind: 'TEXT', text: ' in Berlin, oder?\n3. Meine Tochter ' },
            { kind: 'GAP', gapId: 'e3', solution: ['lernt'], hint: 'lernen', width: 7 },
            { kind: 'TEXT', text: ' Spanisch.\n4. Ich ' },
            { kind: 'GAP', gapId: 'e4', solution: ['kaufe'], hint: 'kaufen', width: 7 },
            { kind: 'TEXT', text: ' Brot.\n5. Wir ' },
            { kind: 'GAP', gapId: 'e5', solution: ['kochen'], hint: 'kochen', width: 7 },
            { kind: 'TEXT', text: ' heute Abend.' },
          ],
        },
        {
          id: 'g3-1-info-e',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Sonderfall 1: Stamm auf -t oder -d',
          text: 'Endet der Stamm auf -t oder -d, schiebt man bei du, er/sie/es und ihr ein -e- ein. Sonst könnte man die Endung nicht hören: du arbeitest, er findet, ihr redet.',
          translations: {
            en: {
              title: 'Special case 1: stem ending in -t or -d',
              text: 'If the stem ends in -t or -d, you insert an -e- with du, er/sie/es and ihr. Otherwise the ending couldn’t be heard: du arbeitest, er findet, ihr redet.',
            },
            es: {
              title: 'Caso especial 1: raíz en -t o -d',
              text: 'Si la raíz termina en -t o -d, con du, er/sie/es e ihr se intercala una -e-. Si no, la terminación no se oiría: du arbeitest, er findet, ihr redet.',
            },
            fr: {
              title: 'Cas particulier 1 : radical en -t ou -d',
              text: 'Si le radical se termine par -t ou -d, on intercale un -e- avec du, er/sie/es et ihr. Sinon, on n’entendrait pas la terminaison : du arbeitest, er findet, ihr redet.',
            },
            it: {
              title: 'Caso particolare 1: radice in -t o -d',
              text: 'Se la radice finisce in -t o -d, con du, er/sie/es e ihr si inserisce una -e-. Altrimenti la desinenza non si sentirebbe: du arbeitest, er findet, ihr redet.',
            },
          },
          table: {
            headers: ['Person', 'arbeiten', 'finden', 'warten'],
            rows: [
              ['ich', 'arbeite', 'finde', 'warte'],
              ['du', 'arbeitest', 'findest', 'wartest'],
              ['er / sie / es', 'arbeitet', 'findet', 'wartet'],
              ['ihr', 'arbeitet', 'findet', 'wartet'],
            ],
          },
        },
        {
          id: 'g3-1-info-s',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Sonderfall 2: Stamm auf -s, -ß, -z',
          text: 'Endet der Stamm auf -s, -ß oder -z, bekommt „du“ nur ein -t statt -st. Die Form ist dann gleich wie bei er/sie/es: du heißt, du tanzt, du reist.',
          translations: {
            en: {
              title: 'Special case 2: stem ending in -s, -ß, -z',
              text: 'If the stem ends in -s, -ß or -z, „du“ takes only -t instead of -st. The form is then the same as for er/sie/es: du heißt, du tanzt, du reist.',
            },
            es: {
              title: 'Caso especial 2: raíz en -s, -ß, -z',
              text: 'Si la raíz termina en -s, -ß o -z, „du“ solo lleva -t en lugar de -st. La forma coincide entonces con la de er/sie/es: du heißt, du tanzt, du reist.',
            },
            fr: {
              title: 'Cas particulier 2 : radical en -s, -ß, -z',
              text: 'Si le radical se termine par -s, -ß ou -z, « du » ne prend que -t au lieu de -st. La forme est alors la même que pour er/sie/es : du heißt, du tanzt, du reist.',
            },
            it: {
              title: 'Caso particolare 2: radice in -s, -ß, -z',
              text: 'Se la radice finisce in -s, -ß o -z, „du“ prende solo -t invece di -st. La forma è quindi uguale a quella di er/sie/es: du heißt, du tanzt, du reist.',
            },
          },
        },
        {
          id: 'g3-1-choice',
          type: 'CHOICE',
          instruction: 'Welche Formen sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'c1', text: 'du arbeitst' },
            { id: 'c2', text: 'er wartet' },
            { id: 'c3', text: 'du heißt' },
            { id: 'c4', text: 'du tanzst' },
          ],
          solution: ['c2', 'c3'],
          explanation:
            'Bei Stamm auf -t kommt ein -e- dazu: du arbeitest. Bei Stamm auf -z fällt das s weg: du tanzt.',
          explanationTranslations: {
            en: 'With a stem in -t an -e- is added: du arbeitest. With a stem in -z the s drops: du tanzt.',
            es: 'Con raíz en -t se añade una -e-: du arbeitest. Con raíz en -z desaparece la s: du tanzt.',
            fr: 'Avec un radical en -t, on ajoute un -e- : du arbeitest. Avec un radical en -z, le s disparaît : du tanzt.',
            it: 'Con radice in -t si aggiunge una -e-: du arbeitest. Con radice in -z la s cade: du tanzt.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – starke Verben mit Vokalwechsel, dann sein, haben, werden.
  {
    order: 2,
    title: 'Unregelmäßige Verben',
    subtitle: 'Vokalwechsel, sein, haben, werden',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'g3-2-h1', type: 'HEADING', level: 1, text: 'Unregelmäßige Verben' },
        {
          id: 'g3-2-intro',
          type: 'TEXT',
          text: 'Viele häufige Verben ändern bei „du“ und „er/sie/es“ ihren Vokal. Die Endungen bleiben regelmäßig – nur der Stamm verändert sich. Es gibt drei Muster.',
          translations: {
            en: 'Many common verbs change their vowel with „du“ and „er/sie/es“. The endings stay regular – only the stem changes. There are three patterns.',
            es: 'Muchos verbos frecuentes cambian la vocal con „du“ y „er/sie/es“. Las terminaciones siguen siendo regulares – solo cambia la raíz. Hay tres modelos.',
            fr: 'Beaucoup de verbes fréquents changent de voyelle avec « du » et « er/sie/es ». Les terminaisons restent régulières – seul le radical change. Il y a trois modèles.',
            it: 'Molti verbi frequenti cambiano vocale con „du“ ed „er/sie/es“. Le desinenze restano regolari – cambia solo la radice. Ci sono tre modelli.',
          },
        },
        {
          id: 'g3-2-info-vokal',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Drei Vokalwechsel',
          text: 'e wird zu i oder ie, a wird zu ä. Der Wechsel gilt nur für „du“ und „er/sie/es“ – ich, wir, ihr und sie/Sie behalten den Vokal des Infinitivs.',
          translations: {
            en: {
              title: 'Three vowel changes',
              text: 'e becomes i or ie, a becomes ä. The change only applies to „du“ and „er/sie/es“ – ich, wir, ihr and sie/Sie keep the vowel of the infinitive.',
            },
            es: {
              title: 'Tres cambios vocálicos',
              text: 'La e pasa a i o ie, la a pasa a ä. El cambio solo afecta a „du“ y „er/sie/es“ – ich, wir, ihr y sie/Sie conservan la vocal del infinitivo.',
            },
            fr: {
              title: 'Trois changements de voyelle',
              text: 'e devient i ou ie, a devient ä. Le changement ne concerne que « du » et « er/sie/es » – ich, wir, ihr et sie/Sie gardent la voyelle de l’infinitif.',
            },
            it: {
              title: 'Tre cambi vocalici',
              text: 'La e diventa i o ie, la a diventa ä. Il cambio vale solo per „du“ ed „er/sie/es“ – ich, wir, ihr e sie/Sie mantengono la vocale dell’infinito.',
            },
          },
          table: {
            headers: ['Wechsel', 'Infinitiv', 'ich', 'du', 'er / sie / es'],
            rows: [
              ['e → i', 'sprechen', 'spreche', 'sprichst', 'spricht'],
              ['e → i', 'essen', 'esse', 'isst', 'isst'],
              ['e → i', 'nehmen', 'nehme', 'nimmst', 'nimmt'],
              ['e → i', 'geben', 'gebe', 'gibst', 'gibt'],
              ['e → ie', 'lesen', 'lese', 'liest', 'liest'],
              ['e → ie', 'sehen', 'sehe', 'siehst', 'sieht'],
              ['a → ä', 'fahren', 'fahre', 'fährst', 'fährt'],
              ['a → ä', 'schlafen', 'schlafe', 'schläfst', 'schläft'],
              ['au → äu', 'laufen', 'laufe', 'läufst', 'läuft'],
            ],
          },
        },
        {
          id: 'g3-2-cloze-vokal',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die richtige Form.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Mein Vater ' },
            { kind: 'GAP', gapId: 'v1', solution: ['liest'], hint: 'lesen', width: 7 },
            { kind: 'TEXT', text: ' jeden Morgen die Zeitung.\n2. ' },
            { kind: 'GAP', gapId: 'v2', solution: ['Sprichst'], hint: 'sprechen', width: 9 },
            { kind: 'TEXT', text: ' du Italienisch?\n3. Lisa ' },
            { kind: 'GAP', gapId: 'v3', solution: ['fährt', 'faehrt'], hint: 'fahren', width: 7 },
            { kind: 'TEXT', text: ' mit dem Fahrrad.\n4. Wir ' },
            { kind: 'GAP', gapId: 'v4', solution: ['fahren'], hint: 'fahren', width: 7 },
            { kind: 'TEXT', text: ' mit dem Zug.\n5. Was ' },
            { kind: 'GAP', gapId: 'v5', solution: ['nimmst'], hint: 'nehmen', width: 7 },
            { kind: 'TEXT', text: ' du? Den Salat?' },
          ],
        },
        {
          id: 'g3-2-choice-vokal',
          type: 'CHOICE',
          instruction: 'Wo gibt es KEINEN Vokalwechsel? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'w1', text: 'ihr fahrt' },
            { id: 'w2', text: 'er sieht' },
            { id: 'w3', text: 'wir essen' },
            { id: 'w4', text: 'du schläfst' },
          ],
          solution: ['w1', 'w3'],
          explanation:
            'Der Wechsel betrifft nur „du“ und „er/sie/es“. Bei „ihr“ und „wir“ bleibt der Vokal: ihr fahrt, wir essen.',
          explanationTranslations: {
            en: 'The change only affects „du“ and „er/sie/es“. With „ihr“ and „wir“ the vowel stays: ihr fahrt, wir essen.',
            es: 'El cambio solo afecta a „du“ y „er/sie/es“. Con „ihr“ y „wir“ la vocal no cambia: ihr fahrt, wir essen.',
            fr: 'Le changement ne concerne que « du » et « er/sie/es ». Avec « ihr » et « wir », la voyelle reste : ihr fahrt, wir essen.',
            it: 'Il cambio riguarda solo „du“ ed „er/sie/es“. Con „ihr“ e „wir“ la vocale resta: ihr fahrt, wir essen.',
          },
        },
        {
          id: 'g3-2-info-sein',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'sein, haben, werden',
          text: 'Diese drei Verben sind die wichtigsten der Sprache – als Vollverb und später als Hilfsverb für Perfekt, Futur und Passiv. Sie sind unregelmäßig und müssen auswendig sitzen.',
          translations: {
            en: {
              title: 'sein, haben, werden',
              text: 'These three verbs are the most important in the language – as main verbs and later as auxiliaries for the perfect, future and passive. They are irregular and have to be known by heart.',
            },
            es: {
              title: 'sein, haben, werden',
              text: 'Estos tres verbos son los más importantes de la lengua – como verbos plenos y, más adelante, como auxiliares del perfecto, el futuro y la pasiva. Son irregulares y hay que sabérselos de memoria.',
            },
            fr: {
              title: 'sein, haben, werden',
              text: 'Ces trois verbes sont les plus importants de la langue – comme verbes pleins et, plus tard, comme auxiliaires du passé composé, du futur et du passif. Ils sont irréguliers et doivent être sus par cœur.',
            },
            it: {
              title: 'sein, haben, werden',
              text: 'Questi tre verbi sono i più importanti della lingua – come verbi pieni e più avanti come ausiliari di passato prossimo, futuro e passivo. Sono irregolari e vanno saputi a memoria.',
            },
          },
          table: {
            headers: ['Person', 'sein', 'haben', 'werden'],
            rows: [
              ['ich', 'bin', 'habe', 'werde'],
              ['du', 'bist', 'hast', 'wirst'],
              ['er / sie / es', 'ist', 'hat', 'wird'],
              ['wir', 'sind', 'haben', 'werden'],
              ['ihr', 'seid', 'habt', 'werdet'],
              ['sie / Sie', 'sind', 'haben', 'werden'],
            ],
          },
        },
        {
          id: 'g3-2-match-sein',
          type: 'MATCHING',
          instruction: 'Ordnen Sie Person und Verbform zu.',
          left: [
            { id: 'p1', text: 'ihr' },
            { id: 'p2', text: 'du' },
            { id: 'p3', text: 'er' },
            { id: 'p4', text: 'ich' },
          ],
          right: [
            { id: 'f1', text: 'seid müde' },
            { id: 'f2', text: 'wirst dreißig' },
            { id: 'f3', text: 'hat Hunger' },
            { id: 'f4', text: 'bin zu Hause' },
          ],
          solution: [
            { leftId: 'p1', rightId: 'f1' },
            { leftId: 'p2', rightId: 'f2' },
            { leftId: 'p3', rightId: 'f3' },
            { leftId: 'p4', rightId: 'f4' },
          ],
        },
        {
          id: 'g3-2-cloze-sein',
          type: 'CLOZE',
          instruction: 'sein, haben oder werden? Ergänzen Sie.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Heute ' },
            { kind: 'GAP', gapId: 's1', solution: ['wird'], width: 6 },
            { kind: 'TEXT', text: ' meine Tochter sechs. Sie ' },
            { kind: 'GAP', gapId: 's2', solution: ['hat'], width: 6 },
            { kind: 'TEXT', text: ' Geburtstag! Wir ' },
            { kind: 'GAP', gapId: 's3', solution: ['sind'], width: 6 },
            { kind: 'TEXT', text: ' alle im Garten. ' },
            { kind: 'GAP', gapId: 's4', solution: ['Hast'], width: 6 },
            { kind: 'TEXT', text: ' du auch Zeit?' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – trennbar und untrennbar, und wo die Teile im Satz stehen.
  {
    order: 3,
    title: 'Trennbare und untrennbare Verben',
    subtitle: 'Vorsilben und die Satzklammer',
    estimatedMinutes: 23,
    content: {
      version: v,
      blocks: [
        { id: 'g3-3-h1', type: 'HEADING', level: 1, text: 'Trennbare und untrennbare Verben' },
        {
          id: 'g3-3-intro',
          type: 'TEXT',
          text: 'Mit einer Vorsilbe bekommt ein Verb eine neue Bedeutung: stehen – aufstehen – verstehen. Manche Vorsilben lösen sich im Satz vom Verb, andere nie. Am Klang erkennt man den Unterschied.',
          translations: {
            en: 'A prefix gives a verb a new meaning: stehen (stand) – aufstehen (get up) – verstehen (understand). Some prefixes detach from the verb in a sentence, others never do. You can tell the difference by the sound.',
            es: 'Con un prefijo, un verbo adquiere un nuevo significado: stehen (estar de pie) – aufstehen (levantarse) – verstehen (entender). Algunos prefijos se separan del verbo en la frase, otros nunca. La diferencia se reconoce por la pronunciación.',
            fr: 'Un préfixe donne au verbe un nouveau sens : stehen (être debout) – aufstehen (se lever) – verstehen (comprendre). Certains préfixes se détachent du verbe dans la phrase, d’autres jamais. On reconnaît la différence à l’oreille.',
            it: 'Con un prefisso un verbo acquista un nuovo significato: stehen (stare in piedi) – aufstehen (alzarsi) – verstehen (capire). Alcuni prefissi si staccano dal verbo nella frase, altri mai. La differenza si riconosce dalla pronuncia.',
          },
        },
        {
          id: 'g3-3-info-vorsilben',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Welche Vorsilben trennen sich?',
          text: 'Trennbare Vorsilben sind betont und meist auch eigene Wörter (auf, an, mit, zu …). Untrennbare Vorsilben sind unbetont und kommen allein nicht vor: be-, ge-, er-, ver-, zer-, ent-, emp-, miss-.',
          translations: {
            en: {
              title: 'Which prefixes separate?',
              text: 'Separable prefixes are stressed and usually words in their own right (auf, an, mit, zu …). Inseparable prefixes are unstressed and never occur on their own: be-, ge-, er-, ver-, zer-, ent-, emp-, miss-.',
            },
            es: {
              title: '¿Qué prefijos se separan?',
              text: 'Los prefijos separables llevan el acento y suelen ser palabras independientes (auf, an, mit, zu …). Los inseparables no llevan acento y nunca aparecen solos: be-, ge-, er-, ver-, zer-, ent-, emp-, miss-.',
            },
            fr: {
              title: 'Quels préfixes se séparent ?',
              text: 'Les préfixes séparables sont accentués et sont le plus souvent des mots à part entière (auf, an, mit, zu …). Les préfixes inséparables ne sont pas accentués et n’existent pas seuls : be-, ge-, er-, ver-, zer-, ent-, emp-, miss-.',
            },
            it: {
              title: 'Quali prefissi si separano?',
              text: 'I prefissi separabili sono accentati e di solito sono anche parole autonome (auf, an, mit, zu …). I prefissi inseparabili non sono accentati e non esistono da soli: be-, ge-, er-, ver-, zer-, ent-, emp-, miss-.',
            },
          },
          table: {
            headers: ['trennbar', 'Satz', 'untrennbar', 'Satz'],
            rows: [
              ['AUFstehen', 'Ich stehe früh auf.', 'verSTEHen', 'Ich verstehe das.'],
              ['ANrufen', 'Er ruft mich an.', 'beSUCHen', 'Er besucht mich.'],
              ['MITkommen', 'Kommst du mit?', 'beKOMMen', 'Bekommst du Post?'],
              ['EINkaufen', 'Wir kaufen ein.', 'erZÄHlen', 'Wir erzählen viel.'],
            ],
          },
        },
        {
          id: 'g3-3-choice-trennbar',
          type: 'CHOICE',
          instruction: 'Welche Verben sind trennbar? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 't1', text: 'zumachen' },
            { id: 't2', text: 'verkaufen' },
            { id: 't3', text: 'aussteigen' },
            { id: 't4', text: 'bezahlen' },
            { id: 't5', text: 'fernsehen' },
          ],
          solution: ['t1', 't3', 't5'],
          explanation:
            'zu-, aus- und fern- sind trennbar: Ich mache die Tür zu. Wir steigen aus. Er sieht fern. ver- und be- trennen sich nie: Ich verkaufe, ich bezahle.',
          explanationTranslations: {
            en: 'zu-, aus- and fern- are separable: Ich mache die Tür zu. Wir steigen aus. Er sieht fern. ver- and be- never separate: Ich verkaufe, ich bezahle.',
            es: 'zu-, aus- y fern- son separables: Ich mache die Tür zu. Wir steigen aus. Er sieht fern. ver- y be- nunca se separan: Ich verkaufe, ich bezahle.',
            fr: 'zu-, aus- et fern- sont séparables : Ich mache die Tür zu. Wir steigen aus. Er sieht fern. ver- et be- ne se séparent jamais : Ich verkaufe, ich bezahle.',
            it: 'zu-, aus- e fern- sono separabili: Ich mache die Tür zu. Wir steigen aus. Er sieht fern. ver- e be- non si separano mai: Ich verkaufe, ich bezahle.',
          },
        },
        {
          id: 'g3-3-info-stellung',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Wo steht was?',
          text: 'Im Aussagesatz und in der W-Frage steht der Verbstamm auf Position 2, in der Ja/Nein-Frage auf Position 1. Die Vorsilbe steht in beiden Fällen ganz am Ende. Nach einem Modalverb bleibt das Verb zusammen – im Infinitiv am Ende.',
          translations: {
            en: {
              title: 'What goes where?',
              text: 'In statements and W-questions the verb stem is in position 2; in yes/no questions it is in position 1. In both cases the prefix goes right at the end. After a modal verb the verb stays together – in the infinitive at the end.',
            },
            es: {
              title: '¿Dónde va cada cosa?',
              text: 'En la oración enunciativa y en la pregunta con W, la raíz del verbo va en la posición 2; en la pregunta de sí/no, en la posición 1. En ambos casos el prefijo va al final. Después de un verbo modal el verbo va junto, en infinitivo, al final.',
            },
            fr: {
              title: 'Où se place quoi ?',
              text: 'Dans la phrase déclarative et la question en W, le radical du verbe est en position 2 ; dans la question fermée, en position 1. Dans les deux cas, le préfixe est tout à la fin. Après un verbe de modalité, le verbe reste entier – à l’infinitif à la fin.',
            },
            it: {
              title: 'Dove va che cosa?',
              text: 'Nella frase affermativa e nella domanda con W la radice del verbo sta in posizione 2; nella domanda sì/no in posizione 1. In entrambi i casi il prefisso va alla fine. Dopo un verbo modale il verbo resta unito – all’infinito alla fine.',
            },
          },
          table: {
            headers: ['Satzart', 'Beispiel'],
            rows: [
              ['Aussage', 'Der Zug kommt um acht an.'],
              ['W-Frage', 'Wann kommt der Zug an?'],
              ['Ja/Nein-Frage', 'Kommt der Zug pünktlich an?'],
              ['mit Modalverb', 'Der Zug soll um acht ankommen.'],
            ],
          },
        },
        {
          id: 'g3-3-order-1',
          type: 'ORDERING',
          instruction: 'Bilden Sie eine Ja/Nein-Frage.',
          items: [
            { id: 'a1', text: 'Kaufst' },
            { id: 'a2', text: 'du' },
            { id: 'a3', text: 'heute' },
            { id: 'a4', text: 'ein?' },
          ],
          solution: ['a1', 'a2', 'a3', 'a4'],
        },
        {
          id: 'g3-3-order-2',
          type: 'ORDERING',
          instruction: 'Bilden Sie einen Satz mit Modalverb.',
          items: [
            { id: 'b1', text: 'Ich' },
            { id: 'b2', text: 'muss' },
            { id: 'b3', text: 'morgen' },
            { id: 'b4', text: 'früh' },
            { id: 'b5', text: 'aufstehen.' },
          ],
          solution: ['b1', 'b2', 'b3', 'b4', 'b5'],
        },
        {
          id: 'g3-3-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die Verben in der richtigen Form.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. (einladen) Ich ' },
            { kind: 'GAP', gapId: 'x1', solution: ['lade'], width: 6 },
            { kind: 'TEXT', text: ' dich zum Essen ' },
            { kind: 'GAP', gapId: 'x2', solution: ['ein'], width: 4 },
            { kind: 'TEXT', text: '.\n2. (bekommen) Sie ' },
            { kind: 'GAP', gapId: 'x3', solution: ['bekommt'], width: 8 },
            { kind: 'TEXT', text: ' heute ein Paket.\n3. (aufmachen) ' },
            { kind: 'GAP', gapId: 'x4', solution: ['Machst'], width: 7 },
            { kind: 'TEXT', text: ' du bitte das Fenster ' },
            { kind: 'GAP', gapId: 'x5', solution: ['auf'], width: 4 },
            { kind: 'TEXT', text: '?\n4. (verstehen) Ich ' },
            { kind: 'GAP', gapId: 'x6', solution: ['verstehe'], width: 9 },
            { kind: 'TEXT', text: ' die Frage nicht.' },
          ],
        },
        {
          id: 'g3-3-writing',
          type: 'WRITING',
          instruction: 'Mein Wochenende',
          prompt:
            'Was machen Sie am Wochenende? Schreiben Sie vier bis sechs Sätze. Verwenden Sie mindestens zwei Verben mit Vokalwechsel (z. B. fahren, lesen, schlafen) und zwei trennbare Verben (z. B. aufstehen, einkaufen, anrufen).',
          minWords: 25,
          maxWords: 100,
          aiFeedback: true,
          sampleAnswer:
            'Am Samstag schlafe ich lange. Ich stehe erst um zehn auf. Dann kaufe ich auf dem Markt ein. Mein Mann liest die Zeitung und fährt mit dem Fahrrad zum See. Am Sonntag rufe ich meine Schwester an.',
        },
      ],
    },
  },
];
