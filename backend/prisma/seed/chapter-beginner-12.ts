import type { UnitSeed } from './chapter-beginner-1';

/**
 * Beginner, Kapitel 12: „Umwelt und Wetter“ (A2, Kapitel 6)
 *
 * Fünf Seiten, Aufbau wie in den Kapiteln davor. Letztes Kapitel der Stufe A2
 * und damit des Beginner-Bands.
 *
 * Das Wetter ist der Einstieg, weil man es ständig vergleicht – wärmer als
 * gestern, der kälteste Tag des Jahres. Komparativ und Superlativ stehen
 * deshalb auf zwei eigenen Seiten und nicht auf einer: Seite 3 bringt den
 * Vergleich mit „als“ und „so … wie“, Seite 4 den Superlativ mit „am …sten“
 * und zeigt ihn an einem Umweltthema, bei dem man ohnehin abwägt, was „am
 * besten“ ist.
 *
 * Adjektivendungen vor dem Nomen („der kälteste Tag“) kommen nur in festen
 * Wendungen vor; das System dazu steht im Grammatikbuch, Kapitel 9.
 *
 * Einsprachig deutsch, Erklärungen mit Übersetzung wie im ganzen
 * Beginner-Band.
 */
const v = 1;

export const BEGINNER_12_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Wetter und Jahreszeiten.
  {
    order: 1,
    title: 'Wie ist das Wetter?',
    subtitle: 'Wetter und Jahreszeiten',
    estimatedMinutes: 20,
    content: {
      version: v,
      blocks: [
        { id: 'b12-1-h1', type: 'HEADING', level: 1, text: 'Wie ist das Wetter?' },
        {
          id: 'b12-1-image',
          type: 'IMAGE',
          url: 'illustration:city-street',
          alt: 'Eine Straße mit Häusern und Bäumen, am Himmel Sonne und dunkle Wolken zugleich.',
          caption: 'Aprilwetter: Sonne und Regen an einem Tag.',
        },
        {
          id: 'b12-1-dlg',
          type: 'DIALOGUE',
          title: 'Ein Anruf',
          lines: [
            { speaker: 'Oma', text: 'Und, wie ist das Wetter bei euch in Hamburg?' },
            { speaker: 'Lena', text: 'Nicht so toll. Es regnet schon den ganzen Tag, und es ist windig.' },
            { speaker: 'Oma', text: 'Bei uns in München scheint die Sonne. Es sind 22 Grad!' },
            { speaker: 'Lena', text: 'Oh, wie schön. Hier sind es nur 14 Grad.' },
            { speaker: 'Oma', text: 'Na ja, im Norden ist es eben oft kühler.' },
          ],
        },
        {
          id: 'b12-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: Das Wetter',
          items: [
            { term: 'Es regnet.', translations: { en: 'It’s raining.' } },
            { term: 'Es schneit.', translations: { en: 'It’s snowing.' } },
            { term: 'Die Sonne scheint.', translations: { en: 'The sun is shining.' } },
            { term: 'Es ist sonnig / bewölkt / windig.', translations: { en: 'It’s sunny / cloudy / windy.' } },
            { term: 'Es ist warm / heiß / kühl / kalt.', translations: { en: 'It’s warm / hot / cool / cold.' } },
            { term: 'Es gibt ein Gewitter.', translations: { en: 'There’s a thunderstorm.' } },
            { term: 'Grad', article: 'das', translations: { en: 'degree' }, example: 'Es sind 22 Grad.' },
            { term: 'Frühling', article: 'der', translations: { en: 'spring' } },
            { term: 'Sommer', article: 'der', translations: { en: 'summer' } },
            { term: 'Herbst', article: 'der', translations: { en: 'autumn' } },
            { term: 'Winter', article: 'der', translations: { en: 'winter' } },
          ],
        },
        {
          id: 'b12-1-info-es',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Das Wetter mit „es“',
          text: 'Beim Wetter steht fast immer „es“ als Subjekt – auch wenn es keine Person oder Sache gibt: Es regnet. Es ist kalt. Jahreszeiten stehen mit „im“: im Frühling, im Winter.',
          translations: {
            en: {
              title: 'Weather with „es“',
              text: 'For the weather, „es“ (it) is almost always the subject – even though there’s no person or thing: Es regnet. Es ist kalt. Seasons take „im“: im Frühling (in spring), im Winter.',
            },
            es: {
              title: 'El tiempo con „es“',
              text: 'Para el tiempo casi siempre va „es“ como sujeto, aunque no haya persona ni cosa: Es regnet (llueve). Es ist kalt (hace frío). Las estaciones van con „im“: im Frühling (en primavera), im Winter.',
            },
            fr: {
              title: 'La météo avec « es »',
              text: 'Pour la météo, le sujet est presque toujours « es » (il) – même s’il n’y a ni personne ni chose : Es regnet (il pleut). Es ist kalt (il fait froid). Les saisons se construisent avec « im » : im Frühling (au printemps), im Winter.',
            },
            it: {
              title: 'Il tempo con „es“',
              text: 'Per il tempo il soggetto è quasi sempre „es“ – anche se non c’è né persona né cosa: Es regnet (piove). Es ist kalt (fa freddo). Le stagioni vogliono „im“: im Frühling (in primavera), im Winter.',
            },
          },
        },
        {
          id: 'b12-1-match',
          type: 'MATCHING',
          instruction: 'Was passt zusammen?',
          left: [
            { id: 'l1', text: 'Es schneit.' },
            { id: 'l2', text: 'Es regnet.' },
            { id: 'l3', text: 'Es ist heiß.' },
            { id: 'l4', text: 'Es ist windig.' },
          ],
          right: [
            { id: 'r1', text: 'Die Kinder bauen einen Schneemann.' },
            { id: 'r2', text: 'Nimm einen Regenschirm mit!' },
            { id: 'r3', text: 'Wir gehen ins Schwimmbad.' },
            { id: 'r4', text: 'Halt deinen Hut fest!' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'b12-1-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie.',
          wordBank: ['es', 'scheint', 'Grad', 'im', 'schneit'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Heute ' },
            { kind: 'GAP', gapId: 'w1', solution: ['scheint'], width: 8 },
            { kind: 'TEXT', text: ' die Sonne, und es sind 25 ' },
            { kind: 'GAP', gapId: 'w2', solution: ['Grad'], width: 5 },
            { kind: 'TEXT', text: '. Aber ' },
            { kind: 'GAP', gapId: 'w3', solution: ['im'], width: 4 },
            { kind: 'TEXT', text: ' Winter ist ' },
            { kind: 'GAP', gapId: 'w4', solution: ['es'], width: 4 },
            { kind: 'TEXT', text: ' hier sehr kalt, und oft ' },
            { kind: 'GAP', gapId: 'w5', solution: ['schneit'], width: 8 },
            { kind: 'TEXT', text: ' es.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – eine Wettervorhersage verstehen.
  {
    order: 2,
    title: 'Die Wettervorhersage',
    subtitle: 'Eine Vorhersage verstehen',
    estimatedMinutes: 20,
    content: {
      version: v,
      blocks: [
        { id: 'b12-2-h1', type: 'HEADING', level: 1, text: 'Die Wettervorhersage' },
        {
          id: 'b12-2-audio',
          type: 'AUDIO',
          title: 'Hören Sie: Das Wetter für morgen',
          audioUrl: 'placeholder://b12-forecast',
          durationSec: 40,
          transcript:
            'Und nun das Wetter für morgen, Samstag. Im Norden bleibt es bewölkt, und am Nachmittag regnet es. Die Temperaturen liegen bei 12 bis 15 Grad. Im Süden scheint den ganzen Tag die Sonne, es wird bis zu 24 Grad warm. Im Westen gibt es am Abend Gewitter. Am Sonntag wird es überall kühler.',
        },
        {
          id: 'b12-2-info-wird',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Es wird warm',
          text: 'Mit „werden“ beschreibt man eine Veränderung: Es wird warm – heute ist es noch nicht warm, aber bald. In Vorhersagen steht oft das Präsens mit einer Zeitangabe: Morgen regnet es.',
          translations: {
            en: {
              title: 'Es wird warm',
              text: '„werden“ (to become) describes a change: Es wird warm – it isn’t warm yet today, but it soon will be. Forecasts often use the present tense with a time expression: Morgen regnet es (it’ll rain tomorrow).',
            },
            es: {
              title: 'Es wird warm',
              text: 'Con „werden“ (volverse) se describe un cambio: Es wird warm – hoy todavía no hace calor, pero pronto sí. En las previsiones se usa a menudo el presente con una indicación de tiempo: Morgen regnet es (mañana lloverá).',
            },
            fr: {
              title: 'Es wird warm',
              text: '« werden » (devenir) décrit un changement : Es wird warm – aujourd’hui il ne fait pas encore chaud, mais bientôt. Dans les prévisions, on utilise souvent le présent avec une indication de temps : Morgen regnet es (demain il pleuvra).',
            },
            it: {
              title: 'Es wird warm',
              text: 'Con „werden“ (diventare) si descrive un cambiamento: Es wird warm – oggi non fa ancora caldo, ma presto sì. Nelle previsioni si usa spesso il presente con un’indicazione di tempo: Morgen regnet es (domani pioverà).',
            },
          },
        },
        {
          id: 'b12-2-choice',
          type: 'CHOICE',
          instruction: 'Was sagt die Vorhersage für Samstag? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'a1', text: 'Im Norden regnet es am Nachmittag.' },
            { id: 'a2', text: 'Im Süden ist es sonnig und warm.' },
            { id: 'a3', text: 'Im Westen schneit es.' },
            { id: 'a4', text: 'Am Samstag ist es überall kühl.' },
          ],
          solution: ['a1', 'a2'],
          explanation:
            'Im Westen gibt es Gewitter, keinen Schnee. Kühler wird es erst am Sonntag.',
          explanationTranslations: {
            en: 'In the west there are thunderstorms, not snow. It only gets cooler on Sunday.',
            es: 'En el oeste hay tormentas, no nieve. Refresca solo el domingo.',
            fr: 'À l’ouest, il y a des orages, pas de neige. Il ne fait plus frais que dimanche.',
            it: 'A ovest ci sono temporali, non neve. Rinfresca solo domenica.',
          },
        },
        {
          id: 'b12-2-match',
          type: 'MATCHING',
          instruction: 'Welche Kleidung passt zum Wetter?',
          left: [
            { id: 'l1', text: '30 Grad und Sonne' },
            { id: 'l2', text: 'minus 5 Grad und Schnee' },
            { id: 'l3', text: '12 Grad und Regen' },
          ],
          right: [
            { id: 'r1', text: 'ein T-Shirt und eine Sonnenbrille' },
            { id: 'r2', text: 'ein dicker Mantel und eine Mütze' },
            { id: 'r3', text: 'eine Regenjacke und Stiefel' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
          ],
        },
        {
          id: 'b12-2-info-kultur',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'Über das Wetter reden',
          text: 'Das Wetter ist in Deutschland das Small-Talk-Thema Nummer eins – im Aufzug, an der Bushaltestelle, beim Bäcker. Ein Satz wie „Schönes Wetter heute, oder?“ ist ein einfacher, freundlicher Gesprächsanfang.',
          translations: {
            en: {
              title: 'Talking about the weather',
              text: 'In Germany the weather is small-talk topic number one – in the lift, at the bus stop, at the bakery. A line like „Schönes Wetter heute, oder?“ (lovely weather today, isn’t it?) is an easy, friendly conversation starter.',
            },
            es: {
              title: 'Hablar del tiempo',
              text: 'En Alemania el tiempo es el tema número uno para charlar – en el ascensor, en la parada del autobús, en la panadería. Una frase como „Schönes Wetter heute, oder?“ (hace buen tiempo hoy, ¿verdad?) es una forma fácil y amable de empezar una conversación.',
            },
            fr: {
              title: 'Parler de la pluie et du beau temps',
              text: 'En Allemagne, la météo est le sujet de conversation numéro un – dans l’ascenseur, à l’arrêt de bus, à la boulangerie. Une phrase comme « Schönes Wetter heute, oder? » (il fait beau aujourd’hui, non ?) est une manière simple et aimable d’engager la conversation.',
            },
            it: {
              title: 'Parlare del tempo',
              text: 'In Germania il tempo è l’argomento di conversazione numero uno – in ascensore, alla fermata dell’autobus, dal fornaio. Una frase come „Schönes Wetter heute, oder?“ (bel tempo oggi, eh?) è un modo semplice e cordiale per iniziare a parlare.',
            },
          },
        },
        {
          id: 'b12-2-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die Vorhersage.',
          wordBank: ['wird', 'regnet', 'scheint', 'Grad', 'bewölkt'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Am Montag ist es im Norden ' },
            { kind: 'GAP', gapId: 'v1', solution: ['bewölkt', 'bewoelkt'], width: 8 },
            { kind: 'TEXT', text: ', und am Abend ' },
            { kind: 'GAP', gapId: 'v2', solution: ['regnet'], width: 7 },
            { kind: 'TEXT', text: ' es. Im Süden ' },
            { kind: 'GAP', gapId: 'v3', solution: ['scheint'], width: 8 },
            { kind: 'TEXT', text: ' die Sonne. Es ' },
            { kind: 'GAP', gapId: 'v4', solution: ['wird'], width: 5 },
            { kind: 'TEXT', text: ' bis zu 20 ' },
            { kind: 'GAP', gapId: 'v5', solution: ['Grad'], width: 5 },
            { kind: 'TEXT', text: ' warm.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – vergleichen: Komparativ, als, so … wie.
  {
    order: 3,
    title: 'Wärmer als gestern',
    subtitle: 'Der Komparativ',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'b12-3-h1', type: 'HEADING', level: 1, text: 'Wärmer als gestern' },
        {
          id: 'b12-3-intro',
          type: 'TEXT',
          text: 'Oma hat gesagt: „Im Norden ist es oft kühler.“ „kühler“ ist ein Vergleich – die Form heißt Komparativ. Man braucht sie ständig: Das Wetter ist schöner als gestern, der Zug ist schneller als das Auto.',
          translations: {
            en: 'Grandma said: „Im Norden ist es oft kühler.“ „kühler“ (cooler) is a comparison – the form is called the comparative. You need it all the time: the weather is nicer than yesterday, the train is faster than the car.',
            es: 'La abuela ha dicho: „Im Norden ist es oft kühler.“ „kühler“ (más fresco) es una comparación: la forma se llama comparativo. Se usa constantemente: hace mejor tiempo que ayer, el tren es más rápido que el coche.',
            fr: 'Mamie a dit : « Im Norden ist es oft kühler. » « kühler » (plus frais) est une comparaison – cette forme s’appelle le comparatif. On en a besoin tout le temps : il fait plus beau qu’hier, le train est plus rapide que la voiture.',
            it: 'La nonna ha detto: „Im Norden ist es oft kühler.“ „kühler“ (più fresco) è un paragone – la forma si chiama comparativo. Serve di continuo: il tempo è più bello di ieri, il treno è più veloce della macchina.',
          },
        },
        {
          id: 'b12-3-info-komp',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Der Komparativ: -er + als',
          text: 'Man hängt -er an das Adjektiv; das Verglichene folgt mit „als“. Viele kurze Adjektive bekommen einen Umlaut (warm → wärmer). Einige Formen sind unregelmäßig und müssen gelernt werden.',
          translations: {
            en: {
              title: 'The comparative: -er + als',
              text: 'You add -er to the adjective; what you compare with follows with „als“ (than). Many short adjectives take an umlaut (warm → wärmer). Some forms are irregular and have to be learned.',
            },
            es: {
              title: 'El comparativo: -er + als',
              text: 'Se añade -er al adjetivo; lo comparado va detrás con „als“ (que). Muchos adjetivos cortos llevan diéresis (warm → wärmer). Algunas formas son irregulares y hay que aprenderlas.',
            },
            fr: {
              title: 'Le comparatif : -er + als',
              text: 'On ajoute -er à l’adjectif ; le terme de comparaison suit avec « als » (que). Beaucoup d’adjectifs courts prennent un Umlaut (warm → wärmer). Certaines formes sont irrégulières et doivent être apprises.',
            },
            it: {
              title: 'Il comparativo: -er + als',
              text: 'Si aggiunge -er all’aggettivo; il secondo termine di paragone segue con „als“ (di / che). Molti aggettivi brevi prendono l’Umlaut (warm → wärmer). Alcune forme sono irregolari e vanno imparate.',
            },
          },
          table: {
            headers: ['', 'Grundform', 'Komparativ'],
            rows: [
              ['regelmäßig', 'schnell', 'schneller'],
              ['regelmäßig', 'schön', 'schöner'],
              ['mit Umlaut', 'warm / kalt', 'wärmer / kälter'],
              ['mit Umlaut', 'groß / jung', 'größer / jünger'],
              ['unregelmäßig', 'gut', 'besser'],
              ['unregelmäßig', 'viel', 'mehr'],
              ['unregelmäßig', 'gern', 'lieber'],
              ['unregelmäßig', 'hoch', 'höher'],
            ],
          },
        },
        {
          id: 'b12-3-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie den Komparativ.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Heute ist es ' },
            { kind: 'GAP', gapId: 'k1', solution: ['wärmer', 'waermer'], hint: 'warm', width: 8 },
            { kind: 'TEXT', text: ' als gestern.\n2. Das Fahrrad ist in der Stadt oft ' },
            { kind: 'GAP', gapId: 'k2', solution: ['schneller'], hint: 'schnell', width: 10 },
            { kind: 'TEXT', text: ' als das Auto.\n3. Ich trinke ' },
            { kind: 'GAP', gapId: 'k3', solution: ['lieber'], hint: 'gern', width: 7 },
            { kind: 'TEXT', text: ' Tee als Kaffee.\n4. Im Sommer regnet es hier ' },
            { kind: 'GAP', gapId: 'k4', solution: ['mehr'], hint: 'viel', width: 5 },
            { kind: 'TEXT', text: ' als im Winter.\n5. Das neue Handy ist ' },
            { kind: 'GAP', gapId: 'k5', solution: ['besser'], hint: 'gut', width: 7 },
            { kind: 'TEXT', text: ' als das alte.' },
          ],
        },
        {
          id: 'b12-3-info-wie',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'als oder wie?',
          text: 'Ist etwas anders, steht der Komparativ mit „als“: Berlin ist größer als Köln. Ist etwas gleich, steht die Grundform mit „so … wie“: Heute ist es so kalt wie gestern. Verneint: nicht so … wie.',
          translations: {
            en: {
              title: 'als or wie?',
              text: 'If things are different, use the comparative with „als“: Berlin ist größer als Köln. If they’re the same, use the base form with „so … wie“ (as … as): Heute ist es so kalt wie gestern. Negative: nicht so … wie.',
            },
            es: {
              title: '¿als o wie?',
              text: 'Si algo es distinto, se usa el comparativo con „als“: Berlin ist größer als Köln. Si es igual, se usa la forma básica con „so … wie“ (tan … como): Heute ist es so kalt wie gestern. En negativo: nicht so … wie.',
            },
            fr: {
              title: 'als ou wie ?',
              text: 'Si c’est différent, on emploie le comparatif avec « als » : Berlin ist größer als Köln. Si c’est pareil, on emploie la forme simple avec « so … wie » (aussi … que) : Heute ist es so kalt wie gestern. À la forme négative : nicht so … wie.',
            },
            it: {
              title: 'als o wie?',
              text: 'Se qualcosa è diverso, si usa il comparativo con „als“: Berlin ist größer als Köln. Se è uguale, si usa la forma base con „so … wie“ (così … come): Heute ist es so kalt wie gestern. Al negativo: nicht so … wie.',
            },
          },
        },
        {
          id: 'b12-3-choice',
          type: 'CHOICE',
          instruction: 'Welche Sätze sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'c1', text: 'Mein Bruder ist älter als ich.' },
            { id: 'c2', text: 'Mein Bruder ist so alt als ich.' },
            { id: 'c3', text: 'Der Zug ist nicht so schnell wie das Flugzeug.' },
            { id: 'c4', text: 'Der Zug ist schneller wie das Auto.' },
          ],
          solution: ['c1', 'c3'],
          explanation:
            'Komparativ + als (älter als), Grundform + so … wie (so alt wie, nicht so schnell wie). „schneller wie“ hört man manchmal, es ist aber nicht korrekt.',
          explanationTranslations: {
            en: 'Comparative + als (älter als), base form + so … wie (so alt wie, nicht so schnell wie). You sometimes hear „schneller wie“, but it isn’t correct.',
            es: 'Comparativo + als (älter als), forma básica + so … wie (so alt wie, nicht so schnell wie). A veces se oye „schneller wie“, pero no es correcto.',
            fr: 'Comparatif + als (älter als), forme simple + so … wie (so alt wie, nicht so schnell wie). On entend parfois « schneller wie », mais ce n’est pas correct.',
            it: 'Comparativo + als (älter als), forma base + so … wie (so alt wie, nicht so schnell wie). A volte si sente „schneller wie“, ma non è corretto.',
          },
        },
        {
          id: 'b12-3-order',
          type: 'ORDERING',
          instruction: 'Bilden Sie einen Satz.',
          items: [
            { id: 'o1', text: 'Im' },
            { id: 'o2', text: 'Süden' },
            { id: 'o3', text: 'ist' },
            { id: 'o4', text: 'es' },
            { id: 'o5', text: 'wärmer' },
            { id: 'o6', text: 'als' },
            { id: 'o7', text: 'im' },
            { id: 'o8', text: 'Norden.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5', 'o6', 'o7', 'o8'],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – der Superlativ, an einem Umweltthema.
  {
    order: 4,
    title: 'Was ist am besten für die Umwelt?',
    subtitle: 'Der Superlativ, Umwelt im Alltag',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'b12-4-h1', type: 'HEADING', level: 1, text: 'Was ist am besten für die Umwelt?' },
        {
          id: 'b12-4-text',
          type: 'TEXT',
          text: 'Wie kommt man am umweltfreundlichsten zur Arbeit? Zu Fuß gehen ist am besten, aber oft ist der Weg zu weit. Das Fahrrad ist fast genauso gut und in der Stadt oft am schnellsten. Bus und Bahn sind besser als das Auto, weil viele Menschen zusammen fahren. Am schlechtesten für die Umwelt ist das Flugzeug. Auch zu Hause kann man viel tun: Müll trennen, weniger Plastik kaufen, das Licht ausmachen und kürzer duschen.',
          translations: {
            en: 'What’s the most environmentally friendly way to get to work? Walking is best, but often it’s too far. Cycling is almost as good and in town often the fastest. Buses and trains are better than cars because many people travel together. The worst for the environment is flying. You can do a lot at home too: separate your rubbish, buy less plastic, switch off the light and take shorter showers.',
            es: '¿Cuál es la forma más ecológica de ir al trabajo? Ir a pie es lo mejor, pero a menudo el camino es demasiado largo. La bici es casi igual de buena y en la ciudad a menudo la más rápida. El autobús y el tren son mejores que el coche porque viaja mucha gente junta. Lo peor para el medio ambiente es el avión. También en casa se puede hacer mucho: separar la basura, comprar menos plástico, apagar la luz y ducharse menos tiempo.',
            fr: 'Quel est le moyen le plus écologique d’aller au travail ? Aller à pied, c’est le mieux, mais souvent le trajet est trop long. Le vélo est presque aussi bien et, en ville, souvent le plus rapide. Le bus et le train sont meilleurs que la voiture parce que beaucoup de gens voyagent ensemble. Le pire pour l’environnement, c’est l’avion. À la maison aussi, on peut faire beaucoup : trier ses déchets, acheter moins de plastique, éteindre la lumière et prendre des douches plus courtes.',
            it: 'Qual è il modo più ecologico per andare al lavoro? Andare a piedi è la cosa migliore, ma spesso il percorso è troppo lungo. La bici è quasi altrettanto buona e in città spesso la più veloce. Autobus e treno sono meglio della macchina, perché viaggiano molte persone insieme. La cosa peggiore per l’ambiente è l’aereo. Anche a casa si può fare molto: fare la raccolta differenziata, comprare meno plastica, spegnere la luce e fare docce più brevi.',
          },
        },
        {
          id: 'b12-4-info-sup',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Der Superlativ: am -sten',
          text: 'Mit dem Superlativ sagt man, was an der Spitze steht. Nach dem Verb steht er mit „am … -sten“. Nach -d, -t, -s, -ß, -z kommt ein -e- dazu: am ältesten, am heißesten. Die Umlaute und unregelmäßigen Formen sind dieselben wie beim Komparativ.',
          translations: {
            en: {
              title: 'The superlative: am -sten',
              text: 'The superlative says what comes out on top. After the verb it takes the form „am … -sten“. After -d, -t, -s, -ß, -z an -e- is added: am ältesten, am heißesten. The umlauts and irregular forms are the same as in the comparative.',
            },
            es: {
              title: 'El superlativo: am -sten',
              text: 'Con el superlativo se dice qué está en primer lugar. Después del verbo va con „am … -sten“. Tras -d, -t, -s, -ß, -z se añade una -e-: am ältesten, am heißesten. Las diéresis y las formas irregulares son las mismas que en el comparativo.',
            },
            fr: {
              title: 'Le superlatif : am -sten',
              text: 'Le superlatif indique ce qui arrive en tête. Après le verbe, il prend la forme « am … -sten ». Après -d, -t, -s, -ß, -z, on ajoute un -e- : am ältesten, am heißesten. Les Umlaute et les formes irrégulières sont les mêmes qu’au comparatif.',
            },
            it: {
              title: 'Il superlativo: am -sten',
              text: 'Con il superlativo si dice che cosa sta al primo posto. Dopo il verbo si usa „am … -sten“. Dopo -d, -t, -s, -ß, -z si aggiunge una -e-: am ältesten, am heißesten. Gli Umlaut e le forme irregolari sono gli stessi del comparativo.',
            },
          },
          table: {
            headers: ['Grundform', 'Komparativ', 'Superlativ'],
            rows: [
              ['schnell', 'schneller', 'am schnellsten'],
              ['warm', 'wärmer', 'am wärmsten'],
              ['alt', 'älter', 'am ältesten'],
              ['gut', 'besser', 'am besten'],
              ['viel', 'mehr', 'am meisten'],
              ['gern', 'lieber', 'am liebsten'],
            ],
          },
        },
        {
          id: 'b12-4-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie den Superlativ.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Im Juli ist es in Deutschland am ' },
            { kind: 'GAP', gapId: 's1', solution: ['wärmsten', 'waermsten'], hint: 'warm', width: 9 },
            { kind: 'TEXT', text: '.\n2. Für die Umwelt ist das Fahrrad am ' },
            { kind: 'GAP', gapId: 's2', solution: ['besten'], hint: 'gut', width: 7 },
            { kind: 'TEXT', text: '.\n3. Meine Oma ist in unserer Familie am ' },
            { kind: 'GAP', gapId: 's3', solution: ['ältesten', 'aeltesten'], hint: 'alt', width: 9 },
            { kind: 'TEXT', text: '.\n4. Ich esse am ' },
            { kind: 'GAP', gapId: 's4', solution: ['liebsten'], hint: 'gern', width: 9 },
            { kind: 'TEXT', text: ' Gemüse aus dem Garten.' },
          ],
        },
        {
          id: 'b12-4-choice',
          type: 'CHOICE',
          instruction: 'Was steht im Text? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'a1', text: 'Zu Fuß gehen ist am umweltfreundlichsten.' },
            { id: 'a2', text: 'Das Auto ist besser als Bus und Bahn.' },
            { id: 'a3', text: 'In der Stadt ist das Fahrrad oft am schnellsten.' },
            { id: 'a4', text: 'Das Flugzeug ist am besten für die Umwelt.' },
          ],
          solution: ['a1', 'a3'],
          explanation:
            'Bus und Bahn sind besser als das Auto, und das Flugzeug ist am schlechtesten für die Umwelt.',
          explanationTranslations: {
            en: 'Buses and trains are better than cars, and flying is the worst for the environment.',
            es: 'El autobús y el tren son mejores que el coche, y el avión es lo peor para el medio ambiente.',
            fr: 'Le bus et le train sont meilleurs que la voiture, et l’avion est le pire pour l’environnement.',
            it: 'Autobus e treno sono meglio della macchina, e l’aereo è la cosa peggiore per l’ambiente.',
          },
        },
        {
          id: 'b12-4-info-muell',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'Mülltrennung',
          text: 'In Deutschland trennt man den Müll in verschiedene Tonnen: Papier in die blaue, Verpackungen aus Plastik und Metall in die gelbe, Essensreste in die braune (Biomüll), alles andere in die graue oder schwarze (Restmüll). Glasflaschen bringt man zum Container, Pfandflaschen zurück in den Supermarkt.',
          translations: {
            en: {
              title: 'Separating rubbish',
              text: 'In Germany rubbish is separated into different bins: paper in the blue one, plastic and metal packaging in the yellow one, food waste in the brown one (organic waste), everything else in the grey or black one (general waste). Glass bottles go to the bottle bank, deposit bottles back to the supermarket.',
            },
            es: {
              title: 'Separar la basura',
              text: 'En Alemania la basura se separa en distintos contenedores: el papel en el azul, los envases de plástico y metal en el amarillo, los restos de comida en el marrón (orgánico) y todo lo demás en el gris o negro (resto). Las botellas de vidrio se llevan al contenedor, y las de envase retornable, de vuelta al supermercado.',
            },
            fr: {
              title: 'Le tri des déchets',
              text: 'En Allemagne, on trie les déchets dans différentes poubelles : le papier dans la bleue, les emballages en plastique et en métal dans la jaune, les restes alimentaires dans la marron (biodéchets), tout le reste dans la grise ou la noire (ordures ménagères). Les bouteilles en verre vont au conteneur, les bouteilles consignées retournent au supermarché.',
            },
            it: {
              title: 'La raccolta differenziata',
              text: 'In Germania i rifiuti si separano in diversi bidoni: la carta in quello blu, gli imballaggi di plastica e metallo in quello giallo, gli avanzi di cibo in quello marrone (organico), tutto il resto in quello grigio o nero (indifferenziato). Le bottiglie di vetro si portano al container, quelle con vuoto a rendere al supermercato.',
            },
          },
        },
        {
          id: 'b12-4-match',
          type: 'MATCHING',
          instruction: 'In welche Tonne gehört das?',
          left: [
            { id: 'l1', text: 'eine alte Zeitung' },
            { id: 'l2', text: 'ein leerer Joghurtbecher' },
            { id: 'l3', text: 'Kartoffelschalen' },
          ],
          right: [
            { id: 'r1', text: 'in die blaue Tonne' },
            { id: 'r2', text: 'in die gelbe Tonne' },
            { id: 'r3', text: 'in die Biotonne' },
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

  // ====================================================== SEITE 5
  // Seite 5 – Rückblick auf Kapitel 12 und damit auf A2.
  {
    order: 5,
    title: 'Kannst du das schon?',
    subtitle: 'Rückblick auf das ganze Kapitel',
    estimatedMinutes: 15,
    content: {
      version: v,
      blocks: [
        { id: 'b12-5-h1', type: 'HEADING', level: 1, text: 'Kannst du das schon?' },
        {
          id: 'b12-5-intro',
          type: 'TEXT',
          text: 'Das ist die letzte Seite des Beginner-Bands. Prüfen Sie, was Sie aus Kapitel 12 mitnehmen. Am Ende vergleichen Sie Ihr Land mit Deutschland.',
          translations: {
            en: 'This is the last page of the Beginner book. Check what you take away from Chapter 12. At the end, you’ll compare your country with Germany.',
            es: 'Esta es la última página del libro Beginner. Compruebe qué se lleva del Capítulo 12. Al final comparará su país con Alemania.',
            fr: 'Voici la dernière page du volume Beginner. Vérifiez ce que vous retenez du chapitre 12. À la fin, vous comparerez votre pays avec l’Allemagne.',
            it: 'Questa è l’ultima pagina del volume Beginner. Verifichi cosa porta a casa dal Capitolo 12. Alla fine confronterà il suo paese con la Germania.',
          },
        },
        {
          id: 'b12-5-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie den Text.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'In Spanien ist es im Sommer ' },
            { kind: 'GAP', gapId: 'r1', solution: ['heißer', 'heisser'], width: 8 },
            { kind: 'TEXT', text: ' als in Deutschland. Aber im Norden von Spanien regnet es fast so viel ' },
            { kind: 'GAP', gapId: 'r2', solution: ['wie'], width: 4 },
            { kind: 'TEXT', text: ' in Hamburg. Am ' },
            { kind: 'GAP', gapId: 'r3', solution: ['liebsten'], width: 9 },
            { kind: 'TEXT', text: ' mag ich den Herbst, weil es dann nicht mehr so heiß ' },
            { kind: 'GAP', gapId: 'r4', solution: ['ist'], width: 4 },
            { kind: 'TEXT', text: '. Im Winter ' },
            { kind: 'GAP', gapId: 'r5', solution: ['schneit'], width: 8 },
            { kind: 'TEXT', text: ' es nur in den Bergen.' },
          ],
        },
        {
          id: 'b12-5-choice',
          type: 'CHOICE',
          instruction: 'Welche Sätze sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'k1', text: 'Heute ist es kälter als gestern.' },
            { id: 'k2', text: 'Das ist am gutesten.' },
            { id: 'k3', text: 'Im August ist es am heißesten.' },
            { id: 'k4', text: 'Ich fahre mehr gern Rad als Auto.' },
          ],
          solution: ['k1', 'k3'],
          explanation:
            '„gut“ und „gern“ sind unregelmäßig: gut – besser – am besten, gern – lieber – am liebsten. Also: Ich fahre lieber Rad als Auto.',
          explanationTranslations: {
            en: '„gut“ and „gern“ are irregular: gut – besser – am besten, gern – lieber – am liebsten. So: Ich fahre lieber Rad als Auto.',
            es: '„gut“ y „gern“ son irregulares: gut – besser – am besten, gern – lieber – am liebsten. Por tanto: Ich fahre lieber Rad als Auto.',
            fr: '« gut » et « gern » sont irréguliers : gut – besser – am besten, gern – lieber – am liebsten. Donc : Ich fahre lieber Rad als Auto.',
            it: '„gut“ e „gern“ sono irregolari: gut – besser – am besten, gern – lieber – am liebsten. Quindi: Ich fahre lieber Rad als Auto.',
          },
        },
        {
          id: 'b12-5-match',
          type: 'MATCHING',
          instruction: 'Grundform, Komparativ, Superlativ: Was passt?',
          left: [
            { id: 'm1', text: 'viel' },
            { id: 'm2', text: 'hoch' },
            { id: 'm3', text: 'kalt' },
            { id: 'm4', text: 'gut' },
          ],
          right: [
            { id: 'y1', text: 'mehr – am meisten' },
            { id: 'y2', text: 'höher – am höchsten' },
            { id: 'y3', text: 'kälter – am kältesten' },
            { id: 'y4', text: 'besser – am besten' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'y1' },
            { leftId: 'm2', rightId: 'y2' },
            { leftId: 'm3', rightId: 'y3' },
            { leftId: 'm4', rightId: 'y4' },
          ],
        },
        {
          id: 'b12-5-writing',
          type: 'WRITING',
          instruction: 'Mein Land und Deutschland',
          prompt:
            'Vergleichen Sie in fünf bis sieben Sätzen das Wetter und das Leben in Ihrem Land mit Deutschland. Was ist anders, was ist gleich? Welche Jahreszeit mögen Sie am liebsten – und warum? Benutzen Sie Komparativ und Superlativ.',
          minWords: 40,
          maxWords: 150,
          aiFeedback: true,
          sampleAnswer:
            'In Brasilien ist es viel wärmer als in Deutschland. Im Süden kann es im Winter kalt werden, aber es schneit fast nie. In Deutschland ist der Winter länger und dunkler. Dafür sind Busse und Bahnen hier pünktlicher als bei uns. Am liebsten mag ich hier den Frühling, weil alles grün wird und die Tage länger werden. Am schwierigsten finde ich den November, weil es so oft regnet.',
        },
      ],
    },
  },
];
