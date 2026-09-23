import type { UnitSeed } from './chapter-beginner-1';

/**
 * Beginner, Kapitel 9: „Reisen und Verkehr“ (A2, Kapitel 3)
 *
 * Fünf Seiten, Aufbau wie in den Kapiteln davor.
 *
 * Kapitel 4 hat die Präpositionen in, auf, unter … nur mit der Frage „Wo?“
 * und dem Dativ gezeigt. Hier kommt die andere Hälfte: Auf die Frage
 * „Wohin?“ folgt der Akkusativ. Seite 3 stellt beide Fragen nebeneinander
 * und koppelt sie an die Verbpaare stellen/stehen, legen/liegen – an ihnen
 * sieht man den Unterschied am deutlichsten, weil das Verb selbst schon sagt,
 * ob sich etwas bewegt.
 *
 * Seite 4 ordnet die Reiseziele (nach Italien, in die Schweiz, ans Meer, zu
 * Freunden) und wiederholt dabei das Perfekt aus Kapitel 8 in einer
 * Urlaubskarte.
 *
 * Einsprachig deutsch, Erklärungen mit Übersetzung wie im ganzen
 * Beginner-Band.
 */
const v = 1;

export const BEGINNER_9_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – nach dem Weg fragen und ihn beschreiben.
  {
    order: 1,
    title: 'Wie komme ich zum Bahnhof?',
    subtitle: 'Nach dem Weg fragen',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'b9-1-h1', type: 'HEADING', level: 1, text: 'Wie komme ich zum Bahnhof?' },
        {
          id: 'b9-1-image',
          type: 'IMAGE',
          url: 'illustration:city-map',
          alt: 'Ein Stadtplan mit Straßen, einem Park, einer Kirche und einem markierten Weg zum Bahnhof.',
          caption: 'Der Weg durch die Innenstadt.',
        },
        {
          id: 'b9-1-dlg',
          type: 'DIALOGUE',
          title: 'Auf der Straße',
          lines: [
            { speaker: 'Touristin', text: 'Entschuldigung, wie komme ich zum Bahnhof?' },
            { speaker: 'Passant', text: 'Gehen Sie hier geradeaus bis zur Ampel. Dann biegen Sie links ab.' },
            { speaker: 'Touristin', text: 'Links an der Ampel, gut.' },
            { speaker: 'Passant', text: 'Dann gehen Sie über die Brücke und nehmen die zweite Straße rechts. Der Bahnhof ist direkt gegenüber vom Park.' },
            { speaker: 'Touristin', text: 'Ist das weit?' },
            { speaker: 'Passant', text: 'Nein, zu Fuß ungefähr zehn Minuten.' },
            { speaker: 'Touristin', text: 'Vielen Dank!' },
          ],
        },
        {
          id: 'b9-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: Der Weg',
          items: [
            { term: 'geradeaus', translations: { en: 'straight ahead' } },
            { term: 'links / rechts', translations: { en: 'left / right' } },
            { term: 'abbiegen', translations: { en: 'to turn' }, example: 'Biegen Sie links ab.' },
            { term: 'Ampel', article: 'die', plural: 'die Ampeln', translations: { en: 'traffic light' } },
            { term: 'Kreuzung', article: 'die', plural: 'die Kreuzungen', translations: { en: 'crossroads' } },
            { term: 'Ecke', article: 'die', plural: 'die Ecken', translations: { en: 'corner' } },
            { term: 'Brücke', article: 'die', plural: 'die Brücken', translations: { en: 'bridge' } },
            { term: 'gegenüber', translations: { en: 'opposite' } },
            { term: 'in der Nähe', translations: { en: 'nearby' } },
            { term: 'weit', translations: { en: 'far' } },
            { term: 'zu Fuß', translations: { en: 'on foot' } },
          ],
        },
        {
          id: 'b9-1-info-zum',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'zum, zur – bis zum, bis zur',
          text: 'Nach dem Ziel fragt man mit „zu“ + Dativ: zum (= zu dem) Bahnhof, zur (= zu der) Post. „bis zum / bis zur“ sagt, wie weit man gehen soll: Gehen Sie bis zur Ampel.',
          translations: {
            en: {
              title: 'zum, zur – bis zum, bis zur',
              text: 'To ask about a destination you use „zu“ + dative: zum (= zu dem) Bahnhof, zur (= zu der) Post. „bis zum / bis zur“ says how far to go: Gehen Sie bis zur Ampel (go as far as the traffic light).',
            },
            es: {
              title: 'zum, zur – bis zum, bis zur',
              text: 'Para preguntar por un destino se usa „zu“ + dativo: zum (= zu dem) Bahnhof, zur (= zu der) Post. „bis zum / bis zur“ indica hasta dónde hay que ir: Gehen Sie bis zur Ampel (vaya hasta el semáforo).',
            },
            fr: {
              title: 'zum, zur – bis zum, bis zur',
              text: 'Pour demander le chemin vers un lieu, on emploie « zu » + datif : zum (= zu dem) Bahnhof, zur (= zu der) Post. « bis zum / bis zur » indique jusqu’où aller : Gehen Sie bis zur Ampel (allez jusqu’au feu).',
            },
            it: {
              title: 'zum, zur – bis zum, bis zur',
              text: 'Per chiedere di una destinazione si usa „zu“ + dativo: zum (= zu dem) Bahnhof, zur (= zu der) Post. „bis zum / bis zur“ dice fin dove andare: Gehen Sie bis zur Ampel (vada fino al semaforo).',
            },
          },
        },
        {
          id: 'b9-1-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie zum oder zur.',
          wordBank: ['zum', 'zur'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Wie komme ich ' },
            { kind: 'GAP', gapId: 'z1', solution: ['zum'], width: 4 },
            { kind: 'TEXT', text: ' Rathaus? (das Rathaus)\n2. Gehen Sie bis ' },
            { kind: 'GAP', gapId: 'z2', solution: ['zur'], width: 4 },
            { kind: 'TEXT', text: ' Kreuzung. (die Kreuzung)\n3. Ist es weit ' },
            { kind: 'GAP', gapId: 'z3', solution: ['zum'], width: 4 },
            { kind: 'TEXT', text: ' Museum? (das Museum)\n4. Ich gehe schnell ' },
            { kind: 'GAP', gapId: 'z4', solution: ['zur'], width: 4 },
            { kind: 'TEXT', text: ' Apotheke. (die Apotheke)' },
          ],
        },
        {
          id: 'b9-1-choice',
          type: 'CHOICE',
          instruction: 'Wie geht die Touristin zum Bahnhof?',
          multiple: false,
          options: [
            { id: 'c1', text: 'Geradeaus, an der Ampel rechts, dann über die Brücke.' },
            { id: 'c2', text: 'Geradeaus, an der Ampel links, über die Brücke, die zweite Straße rechts.' },
            { id: 'c3', text: 'Über die Brücke, dann die erste Straße links bis zum Park.' },
          ],
          solution: ['c2'],
          explanation:
            'Der Passant sagt: geradeaus bis zur Ampel, links abbiegen, über die Brücke, die zweite Straße rechts.',
          explanationTranslations: {
            en: 'The passer-by says: straight on to the traffic light, turn left, over the bridge, second street on the right.',
            es: 'El transeúnte dice: recto hasta el semáforo, girar a la izquierda, cruzar el puente, la segunda calle a la derecha.',
            fr: 'Le passant dit : tout droit jusqu’au feu, tourner à gauche, traverser le pont, la deuxième rue à droite.',
            it: 'Il passante dice: dritto fino al semaforo, girare a sinistra, attraversare il ponte, la seconda strada a destra.',
          },
        },
        {
          id: 'b9-1-order',
          type: 'ORDERING',
          instruction: 'Bilden Sie eine Frage.',
          items: [
            { id: 'o1', text: 'Entschuldigung,' },
            { id: 'o2', text: 'wie' },
            { id: 'o3', text: 'komme' },
            { id: 'o4', text: 'ich' },
            { id: 'o5', text: 'zur' },
            { id: 'o6', text: 'Post?' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5', 'o6'],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – Verkehrsmittel und eine Fahrkarte kaufen.
  {
    order: 2,
    title: 'Am Bahnhof',
    subtitle: 'Verkehrsmittel, Fahrkarten, Auskunft',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'b9-2-h1', type: 'HEADING', level: 1, text: 'Am Bahnhof' },
        {
          id: 'b9-2-image',
          type: 'IMAGE',
          url: 'illustration:train-platform',
          alt: 'Ein Bahnsteig mit einem einfahrenden Zug und einer Anzeigetafel.',
          caption: 'Gleis 7: ICE nach München.',
        },
        {
          id: 'b9-2-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: Unterwegs',
          items: [
            { term: 'mit dem Auto / Bus / Zug', translations: { en: 'by car / bus / train' } },
            { term: 'mit der Bahn / U-Bahn / Straßenbahn', translations: { en: 'by rail / underground / tram' } },
            { term: 'mit dem Fahrrad', translations: { en: 'by bike' } },
            { term: 'Fahrkarte', article: 'die', plural: 'die Fahrkarten', translations: { en: 'ticket' } },
            { term: 'einfach / hin und zurück', translations: { en: 'single / return' } },
            { term: 'Gleis', article: 'das', plural: 'die Gleise', translations: { en: 'platform / track' } },
            { term: 'umsteigen', translations: { en: 'to change (trains)' }, example: 'Sie steigen in Erfurt um.' },
            { term: 'abfahren / ankommen', translations: { en: 'to depart / to arrive' } },
            { term: 'Verspätung', article: 'die', translations: { en: 'delay' } },
            { term: 'Anschluss', article: 'der', translations: { en: 'connection' } },
          ],
        },
        {
          id: 'b9-2-info-mit',
          type: 'INFO',
          variant: 'TIP',
          title: 'mit + Dativ',
          text: 'Verkehrsmittel nennt man mit „mit“ + Dativ: mit dem Bus, mit der Bahn. Nur „zu Fuß“ ist anders. Achtung: Man sagt „Ich fahre mit dem Zug“, aber „Ich gehe zu Fuß“.',
          translations: {
            en: {
              title: 'mit + dative',
              text: 'Means of transport are given with „mit“ + dative: mit dem Bus, mit der Bahn. Only „zu Fuß“ (on foot) is different. Note: you say „Ich fahre mit dem Zug“ (fahren for vehicles), but „Ich gehe zu Fuß“ (gehen for walking).',
            },
            es: {
              title: 'mit + dativo',
              text: 'Los medios de transporte se indican con „mit“ + dativo: mit dem Bus, mit der Bahn. Solo „zu Fuß“ (a pie) es diferente. Atención: se dice „Ich fahre mit dem Zug“ (fahren para vehículos), pero „Ich gehe zu Fuß“ (gehen para andar).',
            },
            fr: {
              title: 'mit + datif',
              text: 'On indique le moyen de transport avec « mit » + datif : mit dem Bus, mit der Bahn. Seul « zu Fuß » (à pied) est différent. Attention : on dit « Ich fahre mit dem Zug » (fahren pour les véhicules), mais « Ich gehe zu Fuß » (gehen pour la marche).',
            },
            it: {
              title: 'mit + dativo',
              text: 'I mezzi di trasporto si indicano con „mit“ + dativo: mit dem Bus, mit der Bahn. Solo „zu Fuß“ (a piedi) è diverso. Attenzione: si dice „Ich fahre mit dem Zug“ (fahren per i veicoli), ma „Ich gehe zu Fuß“ (gehen per camminare).',
            },
          },
        },
        {
          id: 'b9-2-dlg',
          type: 'DIALOGUE',
          title: 'Am Fahrkartenschalter',
          lines: [
            { speaker: 'Kundin', text: 'Guten Tag. Eine Fahrkarte nach Dresden, bitte.' },
            { speaker: 'Mitarbeiter', text: 'Einfach oder hin und zurück?' },
            { speaker: 'Kundin', text: 'Hin und zurück, bitte. Ich fahre heute und komme am Sonntag zurück.' },
            { speaker: 'Mitarbeiter', text: 'Der nächste Zug fährt um 14.10 Uhr von Gleis 3. Sie müssen in Leipzig umsteigen.' },
            { speaker: 'Kundin', text: 'Wann komme ich in Dresden an?' },
            { speaker: 'Mitarbeiter', text: 'Um 16.45 Uhr. Das macht 58 Euro.' },
          ],
        },
        {
          id: 'b9-2-choice',
          type: 'CHOICE',
          instruction: 'Was stimmt? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'a1', text: 'Die Kundin kauft eine Rückfahrkarte.' },
            { id: 'a2', text: 'Der Zug fährt direkt nach Dresden.' },
            { id: 'a3', text: 'Der Zug fährt von Gleis 3 ab.' },
            { id: 'a4', text: 'Die Fahrt dauert etwa eine Stunde.' },
          ],
          solution: ['a1', 'a3'],
          explanation:
            'Die Kundin muss in Leipzig umsteigen. Sie fährt um 14.10 Uhr ab und kommt um 16.45 Uhr an – die Fahrt dauert also über zweieinhalb Stunden.',
          explanationTranslations: {
            en: 'She has to change in Leipzig. She leaves at 14:10 and arrives at 16:45 – so the journey takes over two and a half hours.',
            es: 'Tiene que hacer transbordo en Leipzig. Sale a las 14:10 y llega a las 16:45, así que el viaje dura más de dos horas y media.',
            fr: 'Elle doit changer à Leipzig. Elle part à 14 h 10 et arrive à 16 h 45 – le trajet dure donc plus de deux heures et demie.',
            it: 'Deve cambiare a Lipsia. Parte alle 14:10 e arriva alle 16:45 – il viaggio dura quindi più di due ore e mezza.',
          },
        },
        {
          id: 'b9-2-audio',
          type: 'AUDIO',
          title: 'Hören Sie: Eine Durchsage',
          audioUrl: 'placeholder://b9-announcement',
          durationSec: 25,
          transcript:
            'Achtung an Gleis 3: Der Regionalexpress nach Leipzig, planmäßige Abfahrt 14.10 Uhr, hat heute circa fünfzehn Minuten Verspätung. Wir bitten um Entschuldigung.',
        },
        {
          id: 'b9-2-match',
          type: 'MATCHING',
          instruction: 'Frage und Antwort: Was passt?',
          left: [
            { id: 'l1', text: 'Von welchem Gleis fährt der Zug?' },
            { id: 'l2', text: 'Muss ich umsteigen?' },
            { id: 'l3', text: 'Hat der Zug Verspätung?' },
            { id: 'l4', text: 'Wie kommst du zur Arbeit?' },
          ],
          right: [
            { id: 'r1', text: 'Von Gleis 3.' },
            { id: 'r2', text: 'Ja, in Leipzig.' },
            { id: 'r3', text: 'Ja, etwa fünfzehn Minuten.' },
            { id: 'r4', text: 'Mit dem Fahrrad.' },
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
  // Seite 3 – die Wechselpräpositionen: wo? oder wohin?
  {
    order: 3,
    title: 'Wo oder wohin?',
    subtitle: 'Wechselpräpositionen',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'b9-3-h1', type: 'HEADING', level: 1, text: 'Wo oder wohin?' },
        {
          id: 'b9-3-intro',
          type: 'TEXT',
          text: 'In Kapitel 4 haben Sie gelernt: „Das Buch liegt auf dem Tisch.“ Das Buch ist an einem Ort – Frage „Wo?“, Dativ. Jetzt kommt die Bewegung dazu: „Ich lege das Buch auf den Tisch.“ Das Buch bewegt sich zu einem Ziel – Frage „Wohin?“, Akkusativ.',
          translations: {
            en: 'In Chapter 4 you learned: „Das Buch liegt auf dem Tisch.“ The book is in a place – question „Wo?“ (where?), dative. Now movement is added: „Ich lege das Buch auf den Tisch.“ The book moves to a destination – question „Wohin?“ (where to?), accusative.',
            es: 'En el Capítulo 4 aprendió: „Das Buch liegt auf dem Tisch.“ El libro está en un lugar – pregunta „Wo?“ (¿dónde?), dativo. Ahora se añade el movimiento: „Ich lege das Buch auf den Tisch.“ El libro se mueve hacia un destino – pregunta „Wohin?“ (¿adónde?), acusativo.',
            fr: 'Au chapitre 4, vous avez appris : « Das Buch liegt auf dem Tisch. » Le livre se trouve dans un lieu – question « Wo? » (où ?), datif. Maintenant s’ajoute le mouvement : « Ich lege das Buch auf den Tisch. » Le livre va vers un but – question « Wohin? » (où ? avec mouvement), accusatif.',
            it: 'Nel Capitolo 4 ha imparato: „Das Buch liegt auf dem Tisch.“ Il libro si trova in un luogo – domanda „Wo?“ (dove?), dativo. Ora si aggiunge il movimento: „Ich lege das Buch auf den Tisch.“ Il libro si muove verso una meta – domanda „Wohin?“ (verso dove?), accusativo.',
          },
        },
        {
          id: 'b9-3-info-wechsel',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Wechselpräpositionen',
          text: 'Neun Präpositionen stehen mal mit Dativ, mal mit Akkusativ: in, an, auf, über, unter, vor, hinter, neben, zwischen. Die Frage entscheidet: Wo? (Ort) → Dativ. Wohin? (Richtung, Ziel) → Akkusativ.',
          translations: {
            en: {
              title: 'Two-way prepositions',
              text: 'Nine prepositions take either the dative or the accusative: in, an, auf, über, unter, vor, hinter, neben, zwischen. The question decides: Wo? (location) → dative. Wohin? (direction, destination) → accusative.',
            },
            es: {
              title: 'Preposiciones de doble régimen',
              text: 'Nueve preposiciones llevan unas veces dativo y otras acusativo: in, an, auf, über, unter, vor, hinter, neben, zwischen. Decide la pregunta: Wo? (lugar) → dativo. Wohin? (dirección, destino) → acusativo.',
            },
            fr: {
              title: 'Les prépositions mixtes',
              text: 'Neuf prépositions se construisent tantôt avec le datif, tantôt avec l’accusatif : in, an, auf, über, unter, vor, hinter, neben, zwischen. C’est la question qui décide : Wo? (lieu) → datif. Wohin? (direction, destination) → accusatif.',
            },
            it: {
              title: 'Le preposizioni con doppio caso',
              text: 'Nove preposizioni reggono a volte il dativo, a volte l’accusativo: in, an, auf, über, unter, vor, hinter, neben, zwischen. Decide la domanda: Wo? (luogo) → dativo. Wohin? (direzione, meta) → accusativo.',
            },
          },
          table: {
            headers: ['Wohin? + Akkusativ', 'Wo? + Dativ'],
            rows: [
              ['Ich gehe in den Park.', 'Ich bin im Park.'],
              ['Wir fahren in die Stadt.', 'Wir sind in der Stadt.'],
              ['Er stellt das Rad vor das Haus.', 'Das Rad steht vor dem Haus.'],
              ['Sie legt den Pass auf den Tisch.', 'Der Pass liegt auf dem Tisch.'],
              ['Ich hänge die Jacke an die Tür.', 'Die Jacke hängt an der Tür.'],
            ],
          },
        },
        {
          id: 'b9-3-info-verben',
          type: 'INFO',
          variant: 'TIP',
          title: 'stellen – stehen, legen – liegen',
          text: 'Oft verrät schon das Verb die Frage. Die Verben der Bewegung – stellen, legen, hängen (etwas irgendwohin), setzen, gehen, fahren – verlangen „Wohin?“ und den Akkusativ. Die Verben des Zustands – stehen, liegen, hängen, sitzen, sein – verlangen „Wo?“ und den Dativ.',
          translations: {
            en: {
              title: 'stellen – stehen, legen – liegen',
              text: 'Often the verb already tells you the question. Verbs of movement – stellen (put upright), legen (lay), hängen (hang something), setzen (sit someone down), gehen, fahren – need „Wohin?“ and the accusative. Verbs of state – stehen, liegen, hängen (be hanging), sitzen, sein – need „Wo?“ and the dative.',
            },
            es: {
              title: 'stellen – stehen, legen – liegen',
              text: 'A menudo el verbo ya indica la pregunta. Los verbos de movimiento – stellen (poner de pie), legen (poner tumbado), hängen (colgar algo), setzen (sentar), gehen, fahren – piden „Wohin?“ y acusativo. Los de estado – stehen, liegen, hängen (estar colgado), sitzen, sein – piden „Wo?“ y dativo.',
            },
            fr: {
              title: 'stellen – stehen, legen – liegen',
              text: 'Souvent, le verbe indique déjà la question. Les verbes de mouvement – stellen (poser debout), legen (poser à plat), hängen (accrocher), setzen (asseoir), gehen, fahren – demandent « Wohin? » et l’accusatif. Les verbes d’état – stehen, liegen, hängen (être accroché), sitzen, sein – demandent « Wo? » et le datif.',
            },
            it: {
              title: 'stellen – stehen, legen – liegen',
              text: 'Spesso è già il verbo a indicare la domanda. I verbi di movimento – stellen (mettere in piedi), legen (mettere disteso), hängen (appendere), setzen (mettere a sedere), gehen, fahren – vogliono „Wohin?“ e l’accusativo. I verbi di stato – stehen, liegen, hängen (essere appeso), sitzen, sein – vogliono „Wo?“ e il dativo.',
            },
          },
        },
        {
          id: 'b9-3-cloze',
          type: 'CLOZE',
          instruction: 'Wo oder wohin? Ergänzen Sie den Artikel.',
          wordBank: ['den', 'die', 'das', 'dem', 'der'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Ich stelle den Koffer neben ' },
            { kind: 'GAP', gapId: 'w1', solution: ['die'], width: 5 },
            { kind: 'TEXT', text: ' Tür. (die Tür)\n2. Der Koffer steht neben ' },
            { kind: 'GAP', gapId: 'w2', solution: ['der'], width: 5 },
            { kind: 'TEXT', text: ' Tür.\n3. Wir fahren am Wochenende in ' },
            { kind: 'GAP', gapId: 'w3', solution: ['die'], width: 5 },
            { kind: 'TEXT', text: ' Berge. (die Berge, Plural)\n4. Er legt das Ticket auf ' },
            { kind: 'GAP', gapId: 'w4', solution: ['den'], width: 5 },
            { kind: 'TEXT', text: ' Sitz. (der Sitz)\n5. Das Ticket liegt auf ' },
            { kind: 'GAP', gapId: 'w5', solution: ['dem'], width: 5 },
            { kind: 'TEXT', text: ' Sitz.' },
          ],
        },
        {
          id: 'b9-3-choice',
          type: 'CHOICE',
          instruction: 'Welche Sätze sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'k1', text: 'Ich gehe in die Küche.' },
            { id: 'k2', text: 'Ich bin in die Küche.' },
            { id: 'k3', text: 'Sie hängt das Bild an die Wand.' },
            { id: 'k4', text: 'Das Bild hängt an die Wand.' },
          ],
          solution: ['k1', 'k3'],
          explanation:
            '„sein“ und „hängen“ als Zustand fragen „Wo?“ – Dativ: in der Küche, an der Wand. „gehen“ und „etwas hängen“ fragen „Wohin?“ – Akkusativ.',
          explanationTranslations: {
            en: '„sein“ and „hängen“ as a state ask „Wo?“ – dative: in der Küche, an der Wand. „gehen“ and „hang something“ ask „Wohin?“ – accusative.',
            es: '„sein“ y „hängen“ como estado preguntan „Wo?“ – dativo: in der Küche, an der Wand. „gehen“ y „colgar algo“ preguntan „Wohin?“ – acusativo.',
            fr: '« sein » et « hängen » (état) répondent à « Wo? » – datif : in der Küche, an der Wand. « gehen » et « accrocher quelque chose » répondent à « Wohin? » – accusatif.',
            it: '„sein“ e „hängen“ come stato rispondono a „Wo?“ – dativo: in der Küche, an der Wand. „gehen“ e „appendere qualcosa“ rispondono a „Wohin?“ – accusativo.',
          },
        },
        {
          id: 'b9-3-match',
          type: 'MATCHING',
          instruction: 'Wohin gehört der Satz? Ordnen Sie zu.',
          left: [
            { id: 'm1', text: 'Ich lege das Handy …' },
            { id: 'm2', text: 'Das Handy liegt …' },
            { id: 'm3', text: 'Wir setzen uns …' },
            { id: 'm4', text: 'Wir sitzen …' },
          ],
          right: [
            { id: 'y1', text: '… in die Tasche.' },
            { id: 'y2', text: '… in der Tasche.' },
            { id: 'y3', text: '… auf die Bank.' },
            { id: 'y4', text: '… auf der Bank.' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'y1' },
            { leftId: 'm2', rightId: 'y2' },
            { leftId: 'm3', rightId: 'y3' },
            { leftId: 'm4', rightId: 'y4' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – Reiseziele und eine Urlaubskarte im Perfekt.
  {
    order: 4,
    title: 'Grüße aus dem Urlaub',
    subtitle: 'Reiseziele, über eine Reise berichten',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'b9-4-h1', type: 'HEADING', level: 1, text: 'Grüße aus dem Urlaub' },
        {
          id: 'b9-4-image',
          type: 'IMAGE',
          url: 'illustration:signpost',
          alt: 'Ein Wegweiser mit mehreren Schildern, die in verschiedene Richtungen zeigen.',
          caption: 'Wohin fahren Sie im Sommer?',
        },
        {
          id: 'b9-4-info-ziele',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Wohin fahren Sie?',
          text: 'Städte und Länder ohne Artikel: nach. Länder mit Artikel und Gebäude: in (+ Akk.). Wasser (Meer, See, Strand): an (+ Akk.). Personen: zu (+ Dativ). Berge und Landschaften: in (+ Akk.).',
          translations: {
            en: {
              title: 'Where are you going?',
              text: 'Cities and countries without an article: nach. Countries with an article and buildings: in (+ acc.). Water (sea, lake, beach): an (+ acc.). People: zu (+ dative). Mountains and landscapes: in (+ acc.).',
            },
            es: {
              title: '¿Adónde va usted?',
              text: 'Ciudades y países sin artículo: nach. Países con artículo y edificios: in (+ acus.). Agua (mar, lago, playa): an (+ acus.). Personas: zu (+ dativo). Montañas y paisajes: in (+ acus.).',
            },
            fr: {
              title: 'Où allez-vous ?',
              text: 'Villes et pays sans article : nach. Pays avec article et bâtiments : in (+ acc.). Eau (mer, lac, plage) : an (+ acc.). Personnes : zu (+ datif). Montagnes et paysages : in (+ acc.).',
            },
            it: {
              title: 'Dove va?',
              text: 'Città e paesi senza articolo: nach. Paesi con articolo ed edifici: in (+ acc.). Acqua (mare, lago, spiaggia): an (+ acc.). Persone: zu (+ dativo). Montagne e paesaggi: in (+ acc.).',
            },
          },
          table: {
            headers: ['Wohin?', 'Beispiel'],
            rows: [
              ['nach', 'nach Wien, nach Italien, nach Hause'],
              ['in + Akk.', 'in die Schweiz, in die Türkei, ins Hotel'],
              ['an + Akk.', 'ans Meer, an den Bodensee, an den Strand'],
              ['in + Akk.', 'in die Berge, in den Wald'],
              ['zu + Dat.', 'zu meiner Tante, zu Freunden'],
            ],
          },
        },
        {
          id: 'b9-4-cloze-ziele',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie nach, in, an oder zu.',
          wordBank: ['nach', 'in', 'an', 'zu'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Im Juli fliegen wir ' },
            { kind: 'GAP', gapId: 'z1', solution: ['nach'], width: 5 },
            { kind: 'TEXT', text: ' Spanien.\n2. Meine Eltern fahren ' },
            { kind: 'GAP', gapId: 'z2', solution: ['an'], width: 5 },
            { kind: 'TEXT', text: ' die Ostsee.\n3. Am Wochenende fahre ich ' },
            { kind: 'GAP', gapId: 'z3', solution: ['zu'], width: 5 },
            { kind: 'TEXT', text: ' meiner Schwester.\n4. Wir wandern gern und fahren ' },
            { kind: 'GAP', gapId: 'z4', solution: ['in'], width: 5 },
            { kind: 'TEXT', text: ' die Alpen.' },
          ],
        },
        {
          id: 'b9-4-karte',
          type: 'TEXT',
          text: 'Liebe Mira, viele Grüße vom Bodensee! Wir sind am Samstag mit dem Zug nach Konstanz gefahren. Das Wetter ist super. Gestern haben wir eine Radtour gemacht und sind mit dem Schiff auf die Insel Mainau gefahren. Dort haben wir viele Blumen gesehen und Eis gegessen. Heute Abend gehen wir ins Restaurant am Hafen. Am Freitag kommen wir zurück. Bis bald! Deine Elif',
          translations: {
            en: 'Dear Mira, greetings from Lake Constance! We took the train to Konstanz on Saturday. The weather is great. Yesterday we went on a bike tour and took the boat to the island of Mainau. We saw lots of flowers there and ate ice cream. This evening we’re going to the restaurant at the harbour. We’re coming back on Friday. See you soon! Love, Elif',
            es: 'Querida Mira: ¡muchos saludos desde el lago de Constanza! El sábado fuimos en tren a Constanza. Hace un tiempo estupendo. Ayer hicimos una excursión en bici y fuimos en barco a la isla de Mainau. Allí vimos muchas flores y comimos helado. Esta noche vamos al restaurante del puerto. El viernes volvemos. ¡Hasta pronto! Tu Elif',
            fr: 'Chère Mira, bien le bonjour du lac de Constance ! Samedi, nous sommes allés à Constance en train. Il fait un temps magnifique. Hier, nous avons fait une balade à vélo et nous sommes allés en bateau sur l’île de Mainau. Nous y avons vu beaucoup de fleurs et mangé des glaces. Ce soir, nous allons au restaurant du port. Nous rentrons vendredi. À bientôt ! Ton Elif',
            it: 'Cara Mira, tanti saluti dal lago di Costanza! Sabato siamo andati in treno a Costanza. Il tempo è fantastico. Ieri abbiamo fatto un giro in bici e siamo andati in battello sull’isola di Mainau. Lì abbiamo visto tanti fiori e mangiato il gelato. Stasera andiamo al ristorante del porto. Venerdì torniamo. A presto! La tua Elif',
          },
        },
        {
          id: 'b9-4-choice',
          type: 'CHOICE',
          instruction: 'Was stimmt? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'a1', text: 'Elif ist mit dem Auto an den Bodensee gefahren.' },
            { id: 'a2', text: 'Sie haben eine Radtour gemacht.' },
            { id: 'a3', text: 'Auf der Insel Mainau gibt es viele Blumen.' },
            { id: 'a4', text: 'Elif ist schon wieder zu Hause.' },
          ],
          solution: ['a2', 'a3'],
          explanation:
            'Elif ist mit dem Zug gefahren und kommt erst am Freitag zurück.',
          explanationTranslations: {
            en: 'Elif went by train and isn’t coming back until Friday.',
            es: 'Elif fue en tren y no vuelve hasta el viernes.',
            fr: 'Elif est partie en train et ne rentre que vendredi.',
            it: 'Elif è andata in treno e torna solo venerdì.',
          },
        },
        {
          id: 'b9-4-cloze-perfekt',
          type: 'CLOZE',
          instruction: 'haben oder sein? Ergänzen Sie.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Wir ' },
            { kind: 'GAP', gapId: 'p1', solution: ['sind'], width: 5 },
            { kind: 'TEXT', text: ' nach Konstanz gefahren. Wir ' },
            { kind: 'GAP', gapId: 'p2', solution: ['haben'], width: 6 },
            { kind: 'TEXT', text: ' eine Radtour gemacht. Dann ' },
            { kind: 'GAP', gapId: 'p3', solution: ['sind'], width: 5 },
            { kind: 'TEXT', text: ' wir auf die Insel gefahren und ' },
            { kind: 'GAP', gapId: 'p4', solution: ['haben'], width: 6 },
            { kind: 'TEXT', text: ' Eis gegessen.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – Rückblick, zum Schluss ein Reisebericht.
  {
    order: 5,
    title: 'Kannst du das schon?',
    subtitle: 'Rückblick auf das ganze Kapitel',
    estimatedMinutes: 15,
    content: {
      version: v,
      blocks: [
        { id: 'b9-5-h1', type: 'HEADING', level: 1, text: 'Kannst du das schon?' },
        {
          id: 'b9-5-intro',
          type: 'TEXT',
          text: 'Prüfen Sie, was Sie aus Kapitel 9 mitnehmen. Am Ende schreiben Sie eine Urlaubskarte.',
          translations: {
            en: 'Check what you take away from Chapter 9. At the end, you’ll write a holiday postcard.',
            es: 'Compruebe qué se lleva del Capítulo 9. Al final escribirá una postal de vacaciones.',
            fr: 'Vérifiez ce que vous retenez du chapitre 9. À la fin, vous écrirez une carte postale de vacances.',
            it: 'Verifichi cosa porta a casa dal Capitolo 9. Alla fine scriverà una cartolina dalle vacanze.',
          },
        },
        {
          id: 'b9-5-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie den Text.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Jeden Morgen fahre ich ' },
            { kind: 'GAP', gapId: 'r1', solution: ['mit'], width: 4 },
            { kind: 'TEXT', text: ' der Straßenbahn zur Arbeit. Ich steige am Hauptbahnhof ' },
            { kind: 'GAP', gapId: 'r2', solution: ['um'], width: 4 },
            { kind: 'TEXT', text: '. Im Büro hänge ich meine Jacke an ' },
            { kind: 'GAP', gapId: 'r3', solution: ['die'], width: 4 },
            { kind: 'TEXT', text: ' Garderobe und stelle meine Tasche unter ' },
            { kind: 'GAP', gapId: 'r4', solution: ['den'], width: 4 },
            { kind: 'TEXT', text: ' Schreibtisch. Mittags gehe ich oft in ' },
            { kind: 'GAP', gapId: 'r5', solution: ['den'], width: 4 },
            { kind: 'TEXT', text: ' Park.' },
          ],
        },
        {
          id: 'b9-5-choice',
          type: 'CHOICE',
          instruction: 'Welche Sätze sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'k1', text: 'Im Sommer fahren wir in die Schweiz.' },
            { id: 'k2', text: 'Ich fahre nach meiner Oma.' },
            { id: 'k3', text: 'Die Kinder spielen im Garten.' },
            { id: 'k4', text: 'Wir fliegen nach die Türkei.' },
          ],
          solution: ['k1', 'k3'],
          explanation:
            'Zu Personen fährt man mit „zu“: zu meiner Oma. Länder mit Artikel stehen mit „in“: in die Türkei.',
          explanationTranslations: {
            en: 'To go to a person you use „zu“: zu meiner Oma. Countries with an article take „in“: in die Türkei.',
            es: 'Para ir a casa de alguien se usa „zu“: zu meiner Oma. Los países con artículo llevan „in“: in die Türkei.',
            fr: 'Pour aller chez quelqu’un, on emploie « zu » : zu meiner Oma. Les pays avec article prennent « in » : in die Türkei.',
            it: 'Per andare da una persona si usa „zu“: zu meiner Oma. I paesi con l’articolo vogliono „in“: in die Türkei.',
          },
        },
        {
          id: 'b9-5-match',
          type: 'MATCHING',
          instruction: 'Ordnen Sie Frage und Antwort zu.',
          left: [
            { id: 'm1', text: 'Wohin fahrt ihr im Urlaub?' },
            { id: 'm2', text: 'Wo wart ihr letztes Jahr?' },
            { id: 'm3', text: 'Wie seid ihr gefahren?' },
            { id: 'm4', text: 'Wo ist der Bahnhof?' },
          ],
          right: [
            { id: 'y1', text: 'Ans Meer, nach Kroatien.' },
            { id: 'y2', text: 'In Österreich, in den Bergen.' },
            { id: 'y3', text: 'Mit dem Zug.' },
            { id: 'y4', text: 'Gegenüber vom Park.' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'y1' },
            { leftId: 'm2', rightId: 'y2' },
            { leftId: 'm3', rightId: 'y3' },
            { leftId: 'm4', rightId: 'y4' },
          ],
        },
        {
          id: 'b9-5-writing',
          type: 'WRITING',
          instruction: 'Eine Urlaubskarte',
          prompt:
            'Sie sind im Urlaub. Schreiben Sie einer Freundin oder einem Freund eine Karte: Wo sind Sie? Wie sind Sie dorthin gekommen? Was haben Sie schon gemacht? Was machen Sie noch?',
          minWords: 35,
          maxWords: 120,
          aiFeedback: true,
          sampleAnswer:
            'Lieber Jonas, viele Grüße aus Wien! Ich bin am Montag mit dem Nachtzug gekommen. Die Stadt ist wunderschön. Gestern habe ich das Schloss Schönbrunn besucht und bin durch den Park gelaufen. Heute Abend gehe ich in die Oper. Am Sonntag fahre ich zurück nach Hause. Bis bald, deine Anna',
        },
      ],
    },
  },
];
