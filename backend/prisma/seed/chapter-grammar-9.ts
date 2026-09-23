import type { UnitSeed } from './chapter-beginner-1';

/**
 * Grammatik, Kapitel 9: „Adjektive“ (ab B1)
 *
 * Drei Seiten, gebaut wie die Kapitel davor.
 *
 * Seite 1 bringt die Endungen nach dem bestimmten Artikel – das System mit
 * nur zwei Endungen (-e, -en), von dem die anderen abgeleitet werden. Seite 2
 * zeigt, was sich nach „ein“, „kein“ und den Possessivartikeln ändert (drei
 * Stellen, an denen der Artikel keine Endung hat) und was ohne Artikel
 * passiert: Dann trägt das Adjektiv die Endung des Artikels selbst.
 * Seite 3 bringt Komparativ und Superlativ vor dem Nomen und die Vergleiche
 * mit „als“, „wie“ und „je … desto“; die Grundformen stehen im Kursbuch,
 * Beginner, Kapitel 12.
 *
 * Bewusst nicht als drei getrennte Tabellen zum Auswendiglernen, sondern
 * über eine Regel erklärt: Irgendwo in der Nominalgruppe muss die Endung
 * stehen, die das Geschlecht und den Fall zeigt – steht sie nicht am Artikel,
 * wandert sie ans Adjektiv. Die Tabellen gibt es trotzdem, zum Nachschlagen.
 *
 * Erklärungen übersetzt, Tabellen unübersetzt – wie in Kapitel 1.
 */
const v = 1;

export const GRAMMAR_9_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – nach dem bestimmten Artikel.
  {
    order: 1,
    title: 'Der neue Nachbar',
    subtitle: 'Adjektive nach dem bestimmten Artikel',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'g9-1-h1', type: 'HEADING', level: 1, text: 'Der neue Nachbar' },
        {
          id: 'g9-1-intro',
          type: 'TEXT',
          text: 'Steht ein Adjektiv nach dem Verb, bleibt es unverändert: Der Nachbar ist neu. Steht es vor einem Nomen, bekommt es eine Endung: der neue Nachbar. Welche Endung, hängt vom Artikel davor ab. Am einfachsten ist es nach dem bestimmten Artikel (der, die, das) und nach Wörtern wie „dieser“, „jeder“ und „welcher“ – dort gibt es nur zwei Endungen: -e und -en.',
          translations: {
            en: 'If an adjective comes after the verb, it stays unchanged: Der Nachbar ist neu. If it comes before a noun, it takes an ending: der neue Nachbar. Which ending depends on the article before it. It’s simplest after the definite article (der, die, das) and words like „dieser“, „jeder“ and „welcher“ – there are only two endings: -e and -en.',
            es: 'Si el adjetivo va detrás del verbo, no cambia: Der Nachbar ist neu. Si va delante de un sustantivo, lleva terminación: der neue Nachbar. Cuál depende del artículo que lo precede. Lo más sencillo es tras el artículo determinado (der, die, das) y palabras como „dieser“, „jeder“ y „welcher“: solo hay dos terminaciones, -e y -en.',
            fr: 'Placé après le verbe, l’adjectif reste invariable : Der Nachbar ist neu. Placé devant un nom, il prend une terminaison : der neue Nachbar. Laquelle ? Cela dépend de l’article qui précède. Le plus simple, c’est après l’article défini (der, die, das) et après « dieser », « jeder », « welcher » : il n’y a que deux terminaisons, -e et -en.',
            it: 'Se l’aggettivo sta dopo il verbo, resta invariato: Der Nachbar ist neu. Se sta davanti a un sostantivo, prende una desinenza: der neue Nachbar. Quale, dipende dall’articolo che lo precede. Il caso più semplice è dopo l’articolo determinativo (der, die, das) e dopo parole come „dieser“, „jeder“ e „welcher“: ci sono solo due desinenze, -e ed -en.',
          },
        },
        {
          id: 'g9-1-info-bestimmt',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Nach der, die, das: -e oder -en',
          text: 'Die Endung -e steht nur an fünf Stellen: im Nominativ Singular aller drei Genera und im Akkusativ Singular bei feminin und neutral. Überall sonst – im ganzen Dativ, im ganzen Genitiv, im ganzen Plural und im Akkusativ maskulin – steht -en.',
          translations: {
            en: {
              title: 'After der, die, das: -e or -en',
              text: 'The ending -e appears in only five places: in the nominative singular of all three genders and in the accusative singular feminine and neuter. Everywhere else – the whole dative, the whole genitive, the whole plural and the accusative masculine – it’s -en.',
            },
            es: {
              title: 'Tras der, die, das: -e o -en',
              text: 'La terminación -e solo aparece en cinco casillas: el nominativo singular de los tres géneros y el acusativo singular femenino y neutro. En todo lo demás – todo el dativo, todo el genitivo, todo el plural y el acusativo masculino – va -en.',
            },
            fr: {
              title: 'Après der, die, das : -e ou -en',
              text: 'La terminaison -e n’apparaît qu’à cinq endroits : au nominatif singulier des trois genres et à l’accusatif singulier féminin et neutre. Partout ailleurs – tout le datif, tout le génitif, tout le pluriel et l’accusatif masculin – on a -en.',
            },
            it: {
              title: 'Dopo der, die, das: -e o -en',
              text: 'La desinenza -e compare solo in cinque caselle: al nominativo singolare dei tre generi e all’accusativo singolare femminile e neutro. In tutti gli altri casi – tutto il dativo, tutto il genitivo, tutto il plurale e l’accusativo maschile – si usa -en.',
            },
          },
          table: {
            headers: ['', 'maskulin', 'neutral', 'feminin', 'Plural'],
            rows: [
              ['Nominativ', 'der neue Tisch', 'das neue Bett', 'die neue Lampe', 'die neuen Stühle'],
              ['Akkusativ', 'den neuen Tisch', 'das neue Bett', 'die neue Lampe', 'die neuen Stühle'],
              ['Dativ', 'dem neuen Tisch', 'dem neuen Bett', 'der neuen Lampe', 'den neuen Stühlen'],
              ['Genitiv', 'des neuen Tisches', 'des neuen Bettes', 'der neuen Lampe', 'der neuen Stühle'],
            ],
          },
        },
        {
          id: 'g9-1-info-mehrere',
          type: 'INFO',
          variant: 'TIP',
          title: 'Mehrere Adjektive',
          text: 'Stehen zwei oder mehr Adjektive vor dem Nomen, bekommen alle dieselbe Endung: der kleine, rote Wagen – mit dem kleinen, roten Wagen.',
          translations: {
            en: {
              title: 'Several adjectives',
              text: 'If two or more adjectives come before the noun, they all get the same ending: der kleine, rote Wagen – mit dem kleinen, roten Wagen.',
            },
            es: {
              title: 'Varios adjetivos',
              text: 'Si hay dos o más adjetivos delante del sustantivo, todos llevan la misma terminación: der kleine, rote Wagen – mit dem kleinen, roten Wagen.',
            },
            fr: {
              title: 'Plusieurs adjectifs',
              text: 'Quand deux adjectifs ou plus précèdent le nom, ils prennent tous la même terminaison : der kleine, rote Wagen – mit dem kleinen, roten Wagen.',
            },
            it: {
              title: 'Più aggettivi',
              text: 'Se davanti al sostantivo ci sono due o più aggettivi, prendono tutti la stessa desinenza: der kleine, rote Wagen – mit dem kleinen, roten Wagen.',
            },
          },
        },
        {
          id: 'g9-1-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die Endung (-e oder -en).',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Der alt' },
            { kind: 'GAP', gapId: 'e1', solution: ['e', '-e'], width: 4 },
            { kind: 'TEXT', text: ' Mann wohnt im ersten Stock.\n2. Ich habe den rot' },
            { kind: 'GAP', gapId: 'e2', solution: ['en', '-en'], width: 4 },
            { kind: 'TEXT', text: ' Pullover gekauft.\n3. Wir wohnen in dem groß' },
            { kind: 'GAP', gapId: 'e3', solution: ['en', '-en'], width: 4 },
            { kind: 'TEXT', text: ' Haus an der Ecke.\n4. Siehst du die klein' },
            { kind: 'GAP', gapId: 'e4', solution: ['e', '-e'], width: 4 },
            { kind: 'TEXT', text: ' Katze dort?\n5. Die neu' },
            { kind: 'GAP', gapId: 'e5', solution: ['en', '-en'], width: 4 },
            { kind: 'TEXT', text: ' Kollegen sind sehr nett.\n6. Das ist das Auto des jung' },
            { kind: 'GAP', gapId: 'e6', solution: ['en', '-en'], width: 4 },
            { kind: 'TEXT', text: ' Arztes.' },
          ],
        },
        {
          id: 'g9-1-choice',
          type: 'CHOICE',
          instruction: 'Welche Sätze sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'c1', text: 'Kennst du den neuen Film?' },
            { id: 'c2', text: 'Kennst du den neue Film?' },
            { id: 'c3', text: 'Mit dem alten Fahrrad fahre ich nicht mehr.' },
            { id: 'c4', text: 'Dieses Kleid ist schöne.' },
          ],
          solution: ['c1', 'c3'],
          explanation:
            'Akkusativ maskulin nach „den“: -en. Nach dem Verb „sein“ hat das Adjektiv keine Endung: Dieses Kleid ist schön.',
          explanationTranslations: {
            en: 'Accusative masculine after „den“: -en. After the verb „sein“ the adjective has no ending: Dieses Kleid ist schön.',
            es: 'Acusativo masculino tras „den“: -en. Detrás del verbo „sein“ el adjetivo no lleva terminación: Dieses Kleid ist schön.',
            fr: 'Accusatif masculin après « den » : -en. Après le verbe « sein », l’adjectif n’a pas de terminaison : Dieses Kleid ist schön.',
            it: 'Accusativo maschile dopo „den“: -en. Dopo il verbo „sein“ l’aggettivo non ha desinenza: Dieses Kleid ist schön.',
          },
        },
        {
          id: 'g9-1-order',
          type: 'ORDERING',
          instruction: 'Bilden Sie einen Satz.',
          items: [
            { id: 'a1', text: 'Die' },
            { id: 'a2', text: 'grüne' },
            { id: 'a3', text: 'Jacke' },
            { id: 'a4', text: 'gehört' },
            { id: 'a5', text: 'dem' },
            { id: 'a6', text: 'kleinen' },
            { id: 'a7', text: 'Jungen.' },
          ],
          solution: ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7'],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – nach ein/kein/mein und ohne Artikel.
  {
    order: 2,
    title: 'Ein neuer Tisch, frisches Brot',
    subtitle: 'Nach „ein“ und ohne Artikel',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'g9-2-h1', type: 'HEADING', level: 1, text: 'Ein neuer Tisch, frisches Brot' },
        {
          id: 'g9-2-intro',
          type: 'TEXT',
          text: 'Eine Regel erklärt alle übrigen Endungen: Irgendwo in der Gruppe aus Artikel, Adjektiv und Nomen muss man sehen, welches Genus und welcher Fall gemeint ist. „der“ zeigt das deutlich – also reicht am Adjektiv -e. „ein“ zeigt es an drei Stellen nicht: Dann übernimmt das Adjektiv das Signal (ein neuer Tisch, ein neues Bett). Und ohne Artikel trägt das Adjektiv die ganze Arbeit.',
          translations: {
            en: 'One rule explains all the other endings: somewhere in the group of article, adjective and noun you must be able to see which gender and case is meant. „der“ shows it clearly – so -e on the adjective is enough. „ein“ doesn’t show it in three places: then the adjective takes over the signal (ein neuer Tisch, ein neues Bett). And without an article, the adjective does all the work.',
            es: 'Una sola regla explica las demás terminaciones: en algún lugar del grupo artículo + adjetivo + sustantivo tiene que verse qué género y qué caso son. „der“ lo muestra claramente, así que basta -e en el adjetivo. „ein“ no lo muestra en tres casillas: entonces el adjetivo asume la señal (ein neuer Tisch, ein neues Bett). Y sin artículo, el adjetivo hace todo el trabajo.',
            fr: 'Une seule règle explique toutes les autres terminaisons : quelque part dans le groupe article + adjectif + nom, on doit voir quel genre et quel cas sont en jeu. « der » le montre clairement – un -e suffit donc sur l’adjectif. « ein » ne le montre pas à trois endroits : l’adjectif prend alors le relais (ein neuer Tisch, ein neues Bett). Et sans article, c’est l’adjectif qui fait tout le travail.',
            it: 'Un’unica regola spiega tutte le altre desinenze: da qualche parte nel gruppo articolo + aggettivo + sostantivo si deve vedere quale genere e quale caso sono. „der“ lo mostra chiaramente – quindi basta -e sull’aggettivo. „ein“ in tre caselle non lo mostra: allora è l’aggettivo a dare il segnale (ein neuer Tisch, ein neues Bett). E senza articolo l’aggettivo fa tutto il lavoro.',
          },
        },
        {
          id: 'g9-2-info-ein',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Nach ein, kein, mein …',
          text: 'Im Nominativ maskulin (ein) sowie im Nominativ und Akkusativ neutral (ein) hat der Artikel keine Endung. Genau dort bekommt das Adjektiv die Endung des bestimmten Artikels: -er (der) bzw. -es (das). Alle anderen Formen sind wie nach dem bestimmten Artikel. Den Plural gibt es nur bei „kein“ und den Possessivartikeln – dort immer -en.',
          translations: {
            en: {
              title: 'After ein, kein, mein …',
              text: 'In the nominative masculine (ein) and the nominative and accusative neuter (ein) the article has no ending. Exactly there the adjective takes the ending of the definite article: -er (der) or -es (das). All other forms are as after the definite article. The plural exists only with „kein“ and the possessives – always -en there.',
            },
            es: {
              title: 'Tras ein, kein, mein…',
              text: 'En el nominativo masculino (ein) y en el nominativo y acusativo neutro (ein) el artículo no tiene terminación. Justo ahí el adjetivo toma la terminación del artículo determinado: -er (der) o -es (das). Las demás formas son como tras el artículo determinado. El plural solo existe con „kein“ y los posesivos: allí siempre -en.',
            },
            fr: {
              title: 'Après ein, kein, mein…',
              text: 'Au nominatif masculin (ein) ainsi qu’au nominatif et à l’accusatif neutres (ein), l’article n’a pas de terminaison. C’est précisément là que l’adjectif prend la terminaison de l’article défini : -er (der) ou -es (das). Les autres formes sont les mêmes qu’après l’article défini. Le pluriel n’existe qu’avec « kein » et les possessifs – toujours -en.',
            },
            it: {
              title: 'Dopo ein, kein, mein…',
              text: 'Al nominativo maschile (ein) e al nominativo e accusativo neutro (ein) l’articolo non ha desinenza. Proprio lì l’aggettivo prende la desinenza dell’articolo determinativo: -er (der) o -es (das). Tutte le altre forme sono come dopo l’articolo determinativo. Il plurale esiste solo con „kein“ e i possessivi – lì sempre -en.',
            },
          },
          table: {
            headers: ['', 'maskulin', 'neutral', 'feminin', 'Plural'],
            rows: [
              ['Nominativ', 'ein neuer Tisch', 'ein neues Bett', 'eine neue Lampe', 'keine neuen Stühle'],
              ['Akkusativ', 'einen neuen Tisch', 'ein neues Bett', 'eine neue Lampe', 'keine neuen Stühle'],
              ['Dativ', 'einem neuen Tisch', 'einem neuen Bett', 'einer neuen Lampe', 'keinen neuen Stühlen'],
              ['Genitiv', 'eines neuen Tisches', 'eines neuen Bettes', 'einer neuen Lampe', 'keiner neuen Stühle'],
            ],
          },
        },
        {
          id: 'g9-2-info-ohne',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Ohne Artikel',
          text: 'Ohne Artikel – etwa bei Stoffnamen (frisches Brot), im Plural (alte Freunde) oder in Anzeigen – trägt das Adjektiv fast überall die Endung des bestimmten Artikels. Einzige Ausnahme: der Genitiv Singular maskulin und neutral hat -en, weil das Nomen dort schon -(e)s bekommt.',
          translations: {
            en: {
              title: 'Without an article',
              text: 'Without an article – for example with substances (frisches Brot), in the plural (alte Freunde) or in adverts – the adjective takes the ending of the definite article almost everywhere. The only exception: the genitive singular masculine and neuter has -en, because the noun already gets -(e)s there.',
            },
            es: {
              title: 'Sin artículo',
              text: 'Sin artículo – por ejemplo con materias (frisches Brot), en plural (alte Freunde) o en anuncios – el adjetivo lleva casi siempre la terminación del artículo determinado. Única excepción: el genitivo singular masculino y neutro lleva -en, porque el sustantivo ya recibe -(e)s.',
            },
            fr: {
              title: 'Sans article',
              text: 'Sans article – par exemple avec les noms de matière (frisches Brot), au pluriel (alte Freunde) ou dans les annonces – l’adjectif prend presque partout la terminaison de l’article défini. Seule exception : le génitif singulier masculin et neutre en -en, car le nom y prend déjà -(e)s.',
            },
            it: {
              title: 'Senza articolo',
              text: 'Senza articolo – per esempio con i nomi di materia (frisches Brot), al plurale (alte Freunde) o negli annunci – l’aggettivo prende quasi ovunque la desinenza dell’articolo determinativo. Unica eccezione: il genitivo singolare maschile e neutro ha -en, perché lì il sostantivo prende già -(e)s.',
            },
          },
          table: {
            headers: ['', 'maskulin', 'neutral', 'feminin', 'Plural'],
            rows: [
              ['Nominativ', 'frischer Kaffee', 'frisches Brot', 'frische Milch', 'frische Eier'],
              ['Akkusativ', 'frischen Kaffee', 'frisches Brot', 'frische Milch', 'frische Eier'],
              ['Dativ', 'frischem Kaffee', 'frischem Brot', 'frischer Milch', 'frischen Eiern'],
              ['Genitiv', 'frischen Kaffees', 'frischen Brotes', 'frischer Milch', 'frischer Eier'],
            ],
          },
        },
        {
          id: 'g9-2-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die Endung.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Das ist ein gut' },
            { kind: 'GAP', gapId: 'e1', solution: ['er'], width: 4 },
            { kind: 'TEXT', text: ' Vorschlag.\n2. Wir haben ein groß' },
            { kind: 'GAP', gapId: 'e2', solution: ['es'], width: 4 },
            { kind: 'TEXT', text: ' Problem.\n3. Sie wohnt in einer klein' },
            { kind: 'GAP', gapId: 'e3', solution: ['en'], width: 4 },
            { kind: 'TEXT', text: ' Wohnung.\n4. Ich suche einen günstig' },
            { kind: 'GAP', gapId: 'e4', solution: ['en'], width: 4 },
            { kind: 'TEXT', text: ' Laptop.\n5. Morgens trinke ich schwarz' },
            { kind: 'GAP', gapId: 'e5', solution: ['en'], width: 4 },
            { kind: 'TEXT', text: ' Tee. (der Tee, Akkusativ)\n6. Mit freundlich' },
            { kind: 'GAP', gapId: 'e6', solution: ['en'], width: 4 },
            { kind: 'TEXT', text: ' Grüßen\n7. Das sind meine best' },
            { kind: 'GAP', gapId: 'e7', solution: ['en'], width: 4 },
            { kind: 'TEXT', text: ' Freunde.\n8. Hier gibt es frisch' },
            { kind: 'GAP', gapId: 'e8', solution: ['es'], width: 4 },
            { kind: 'TEXT', text: ' Obst.' },
          ],
        },
        {
          id: 'g9-2-choice',
          type: 'CHOICE',
          instruction: 'Welche Sätze sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'c1', text: 'Mein alter Computer ist kaputt.' },
            { id: 'c2', text: 'Mein alte Computer ist kaputt.' },
            { id: 'c3', text: 'Wir haben ein neues Auto gekauft.' },
            { id: 'c4', text: 'Ich trinke gern kalte Wasser.' },
          ],
          solution: ['c1', 'c3'],
          explanation:
            '„mein“ zeigt im Nominativ maskulin kein Signal – also -er am Adjektiv: mein alter Computer. Ohne Artikel trägt das Adjektiv die Endung von „das“: kaltes Wasser.',
          explanationTranslations: {
            en: '„mein“ gives no signal in the nominative masculine – so -er on the adjective: mein alter Computer. Without an article the adjective takes the ending of „das“: kaltes Wasser.',
            es: '„mein“ no da señal en nominativo masculino, así que el adjetivo lleva -er: mein alter Computer. Sin artículo, el adjetivo toma la terminación de „das“: kaltes Wasser.',
            fr: '« mein » ne donne aucun signal au nominatif masculin – d’où -er sur l’adjectif : mein alter Computer. Sans article, l’adjectif prend la terminaison de « das » : kaltes Wasser.',
            it: '„mein“ al nominativo maschile non dà alcun segnale – quindi -er sull’aggettivo: mein alter Computer. Senza articolo l’aggettivo prende la desinenza di „das“: kaltes Wasser.',
          },
        },
        {
          id: 'g9-2-match',
          type: 'MATCHING',
          instruction: 'Was passt zusammen?',
          left: [
            { id: 'l1', text: 'ein schöner' },
            { id: 'l2', text: 'ein schönes' },
            { id: 'l3', text: 'eine schöne' },
            { id: 'l4', text: 'zwei schöne' },
          ],
          right: [
            { id: 'r1', text: 'Garten' },
            { id: 'r2', text: 'Haus' },
            { id: 'r3', text: 'Terrasse' },
            { id: 'r4', text: 'Balkone' },
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
  // Seite 3 – Komparativ und Superlativ vor dem Nomen, Vergleiche.
  {
    order: 3,
    title: 'Der schnellere Weg',
    subtitle: 'Steigerung und Vergleich',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'g9-3-h1', type: 'HEADING', level: 1, text: 'Der schnellere Weg' },
        {
          id: 'g9-3-intro',
          type: 'TEXT',
          text: 'Komparativ und Superlativ kennen Sie nach dem Verb: Der Zug ist schneller. Der Zug ist am schnellsten. Vor einem Nomen sind sie ganz normale Adjektive und bekommen dieselben Endungen wie auf den Seiten davor – die Endung kommt einfach hinter das -er oder -st: der schnellere Zug, der schnellste Zug.',
          translations: {
            en: 'You already know the comparative and superlative after the verb: Der Zug ist schneller. Der Zug ist am schnellsten. Before a noun they are ordinary adjectives and take the same endings as on the previous pages – the ending simply goes after the -er or -st: der schnellere Zug, der schnellste Zug.',
            es: 'El comparativo y el superlativo ya los conoce detrás del verbo: Der Zug ist schneller. Der Zug ist am schnellsten. Delante de un sustantivo son adjetivos normales y llevan las mismas terminaciones que en las páginas anteriores: la terminación va detrás de -er o -st: der schnellere Zug, der schnellste Zug.',
            fr: 'Vous connaissez déjà le comparatif et le superlatif après le verbe : Der Zug ist schneller. Der Zug ist am schnellsten. Devant un nom, ce sont des adjectifs ordinaires qui prennent les mêmes terminaisons qu’aux pages précédentes – la terminaison se place simplement après -er ou -st : der schnellere Zug, der schnellste Zug.',
            it: 'Comparativo e superlativo li conosce già dopo il verbo: Der Zug ist schneller. Der Zug ist am schnellsten. Davanti a un sostantivo sono aggettivi normali e prendono le stesse desinenze delle pagine precedenti – la desinenza va semplicemente dopo -er o -st: der schnellere Zug, der schnellste Zug.',
          },
        },
        {
          id: 'g9-3-info-steigerung',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Komparativ und Superlativ vor dem Nomen',
          text: 'Aufgepasst bei den unregelmäßigen Formen: gut – besser – best-, viel – mehr – meist-, hoch – höher – höchst-. „mehr“ und „weniger“ bekommen vor dem Nomen keine Endung: Ich brauche mehr Zeit. Der Superlativ vor dem Nomen steht fast immer mit dem bestimmten Artikel.',
          translations: {
            en: {
              title: 'Comparative and superlative before the noun',
              text: 'Watch out for irregular forms: gut – besser – best-, viel – mehr – meist-, hoch – höher – höchst-. „mehr“ and „weniger“ take no ending before a noun: Ich brauche mehr Zeit. The superlative before a noun almost always comes with the definite article.',
            },
            es: {
              title: 'Comparativo y superlativo delante del sustantivo',
              text: 'Cuidado con las formas irregulares: gut – besser – best-, viel – mehr – meist-, hoch – höher – höchst-. „mehr“ y „weniger“ no llevan terminación delante del sustantivo: Ich brauche mehr Zeit. El superlativo delante del sustantivo va casi siempre con artículo determinado.',
            },
            fr: {
              title: 'Comparatif et superlatif devant le nom',
              text: 'Attention aux formes irrégulières : gut – besser – best-, viel – mehr – meist-, hoch – höher – höchst-. « mehr » et « weniger » ne prennent pas de terminaison devant un nom : Ich brauche mehr Zeit. Le superlatif devant un nom s’emploie presque toujours avec l’article défini.',
            },
            it: {
              title: 'Comparativo e superlativo davanti al sostantivo',
              text: 'Attenzione alle forme irregolari: gut – besser – best-, viel – mehr – meist-, hoch – höher – höchst-. „mehr“ e „weniger“ davanti al sostantivo non prendono desinenza: Ich brauche mehr Zeit. Il superlativo davanti al sostantivo va quasi sempre con l’articolo determinativo.',
            },
          },
          table: {
            headers: ['Grundform', 'Komparativ + Nomen', 'Superlativ + Nomen'],
            rows: [
              ['billig', 'ein billigeres Hotel', 'das billigste Hotel'],
              ['alt', 'mein älterer Bruder', 'meine älteste Schwester'],
              ['gut', 'eine bessere Idee', 'die beste Idee'],
              ['hoch', 'ein höherer Berg', 'der höchste Berg'],
              ['viel', 'mehr Geld (keine Endung)', 'die meisten Leute'],
            ],
          },
        },
        {
          id: 'g9-3-info-vergleich',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'als, wie, je … desto',
          text: 'Ungleiches vergleicht man mit Komparativ + „als“, Gleiches mit „so … wie“. Mit „je … desto“ sagt man, dass zwei Dinge zusammen wachsen: Je länger ich übe, desto besser spreche ich. Nach „je“ steht das Verb am Ende (Nebensatz), nach „desto“ + Komparativ folgt sofort das Verb.',
          translations: {
            en: {
              title: 'als, wie, je … desto',
              text: 'Compare things that differ with comparative + „als“, things that are equal with „so … wie“. „je … desto“ (the more … the more) says two things increase together: Je länger ich übe, desto besser spreche ich. After „je“ the verb goes to the end (subordinate clause); after „desto“ + comparative the verb follows immediately.',
            },
            es: {
              title: 'als, wie, je … desto',
              text: 'Lo distinto se compara con comparativo + „als“; lo igual, con „so … wie“. Con „je … desto“ (cuanto más… más) se dice que dos cosas crecen juntas: Je länger ich übe, desto besser spreche ich. Tras „je“ el verbo va al final (subordinada); tras „desto“ + comparativo sigue directamente el verbo.',
            },
            fr: {
              title: 'als, wie, je … desto',
              text: 'On compare ce qui diffère avec comparatif + « als », ce qui est égal avec « so … wie ». « je … desto » (plus… plus) indique que deux choses augmentent ensemble : Je länger ich übe, desto besser spreche ich. Après « je », le verbe va à la fin (subordonnée) ; après « desto » + comparatif, le verbe suit immédiatement.',
            },
            it: {
              title: 'als, wie, je … desto',
              text: 'Ciò che è diverso si confronta con comparativo + „als“, ciò che è uguale con „so … wie“. Con „je … desto“ (più… più) si dice che due cose crescono insieme: Je länger ich übe, desto besser spreche ich. Dopo „je“ il verbo va alla fine (subordinata); dopo „desto“ + comparativo segue subito il verbo.',
            },
          },
        },
        {
          id: 'g9-3-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie Komparativ oder Superlativ mit Endung.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Die Zugspitze ist der ' },
            { kind: 'GAP', gapId: 's1', solution: ['höchste', 'hoechste'], hint: 'hoch', width: 9 },
            { kind: 'TEXT', text: ' Berg Deutschlands.\n2. Hast du keine ' },
            { kind: 'GAP', gapId: 's2', solution: ['bessere'], hint: 'gut', width: 8 },
            { kind: 'TEXT', text: ' Idee?\n3. Wir suchen eine ' },
            { kind: 'GAP', gapId: 's3', solution: ['größere', 'groessere'], hint: 'groß', width: 9 },
            { kind: 'TEXT', text: ' Wohnung.\n4. Mein ' },
            { kind: 'GAP', gapId: 's4', solution: ['jüngerer', 'juengerer'], hint: 'jung', width: 10 },
            { kind: 'TEXT', text: ' Bruder studiert in Graz.\n5. Das war der ' },
            { kind: 'GAP', gapId: 's5', solution: ['schönste', 'schoenste'], hint: 'schön', width: 9 },
            { kind: 'TEXT', text: ' Tag meines Lebens.\n6. Die ' },
            { kind: 'GAP', gapId: 's6', solution: ['meisten'], hint: 'viel', width: 8 },
            { kind: 'TEXT', text: ' Menschen arbeiten montags bis freitags.' },
          ],
        },
        {
          id: 'g9-3-choice',
          type: 'CHOICE',
          instruction: 'Welche Sätze sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'c1', text: 'Je mehr ich lese, desto größer wird mein Wortschatz.' },
            { id: 'c2', text: 'Je mehr ich lese, desto mein Wortschatz wird größer.' },
            { id: 'c3', text: 'Berlin ist größer als München.' },
            { id: 'c4', text: 'Ich brauche mehre Zeit.' },
          ],
          solution: ['c1', 'c3'],
          explanation:
            'Nach „desto“ + Komparativ folgt direkt das Verb: desto größer wird … „mehr“ bekommt keine Endung: Ich brauche mehr Zeit.',
          explanationTranslations: {
            en: 'After „desto“ + comparative the verb follows directly: desto größer wird … „mehr“ takes no ending: Ich brauche mehr Zeit.',
            es: 'Tras „desto“ + comparativo sigue directamente el verbo: desto größer wird … „mehr“ no lleva terminación: Ich brauche mehr Zeit.',
            fr: 'Après « desto » + comparatif, le verbe suit directement : desto größer wird … « mehr » ne prend pas de terminaison : Ich brauche mehr Zeit.',
            it: 'Dopo „desto“ + comparativo segue subito il verbo: desto größer wird … „mehr“ non prende desinenza: Ich brauche mehr Zeit.',
          },
        },
        {
          id: 'g9-3-order',
          type: 'ORDERING',
          instruction: 'Bilden Sie einen Satz mit „je … desto“.',
          items: [
            { id: 'a1', text: 'Je' },
            { id: 'a2', text: 'früher' },
            { id: 'a3', text: 'wir' },
            { id: 'a4', text: 'losfahren,' },
            { id: 'a5', text: 'desto' },
            { id: 'a6', text: 'weniger' },
            { id: 'a7', text: 'Stau' },
            { id: 'a8', text: 'gibt es.' },
          ],
          solution: ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8'],
        },
        {
          id: 'g9-3-writing',
          type: 'WRITING',
          instruction: 'Meine Stadt im Vergleich',
          prompt:
            'Vergleichen Sie in fünf bis sieben Sätzen zwei Städte, die Sie kennen. Benutzen Sie Adjektive vor dem Nomen (mit der richtigen Endung), mindestens einen Komparativ mit „als“, einen Superlativ und einen Satz mit „je … desto“.',
          minWords: 50,
          maxWords: 140,
          aiFeedback: true,
          sampleAnswer:
            'Ich komme aus Porto, einer schönen alten Stadt am Atlantik. Jetzt lebe ich in Leipzig. Porto ist hügeliger als Leipzig, deshalb fahre ich hier viel lieber Fahrrad. Leipzig hat die größeren Parks und mehr grüne Flächen. Das Beste an Porto ist aber das frische Essen: Nirgendwo gibt es besseren Fisch. Im Winter ist Leipzig viel kälter. Je länger ich hier wohne, desto wohler fühle ich mich trotzdem.',
        },
      ],
    },
  },
];
