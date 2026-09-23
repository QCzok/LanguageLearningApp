import type { UnitSeed } from './chapter-beginner-1';

/**
 * Beginner, Kapitel 4: „Wohnen“
 *
 * Fünf Seiten, Aufbau wie in den Kapiteln davor.
 *
 * Die Präpositionen mit Dativ kommen hier nur in einer Richtung vor: auf die
 * Frage „Wo?“. Dass dieselben Wörter mit „Wohin?“ den Akkusativ verlangen,
 * ist ein eigenes Thema und steht erst im A2-Kapitel „Reisen und Verkehr“.
 * Wer beides gleichzeitig lernt, verwechselt beides – deshalb sagt Seite 3
 * nur: Ein Ding ist irgendwo, und dann folgt der Dativ.
 *
 * Die Wohnungsanzeige auf Seite 4 ist ein echter Alltagstext mit seinen
 * Abkürzungen. Sie steht hier, weil man sie in Deutschland früher braucht,
 * als einem lieb ist.
 *
 * Einsprachig deutsch, Erklärungen mit Übersetzung wie in Kapitel 1.
 */
const v = 1;

export const BEGINNER_4_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – die Räume und wie sie sind.
  {
    order: 1,
    title: 'Meine Wohnung',
    subtitle: 'Räume und Adjektive',
    estimatedMinutes: 20,
    content: {
      version: v,
      blocks: [
        { id: 'b4-1-h1', type: 'HEADING', level: 1, text: 'Meine Wohnung' },
        {
          id: 'b4-1-image',
          type: 'IMAGE',
          url: 'illustration:living-room',
          alt: 'Ein helles Wohnzimmer mit Sofa, Regal, Pflanze und einem großen Fenster.',
          caption: 'Das Wohnzimmer ist hell und gemütlich.',
        },
        {
          id: 'b4-1-dlg',
          type: 'DIALOGUE',
          title: 'Am Telefon',
          lines: [
            { speaker: 'Jonas', text: 'Und, wie ist deine neue Wohnung?' },
            { speaker: 'Mira', text: 'Super! Sie hat drei Zimmer, eine Küche und ein Bad.' },
            { speaker: 'Jonas', text: 'Ist sie groß?' },
            { speaker: 'Mira', text: 'Ja, sie hat 75 Quadratmeter. Das Wohnzimmer ist sehr hell.' },
            { speaker: 'Jonas', text: 'Und die Küche?' },
            { speaker: 'Mira', text: 'Die ist leider ein bisschen klein. Aber wir haben einen Balkon!' },
          ],
        },
        {
          id: 'b4-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: Räume',
          items: [
            { term: 'Wohnung', article: 'die', plural: 'die Wohnungen', translations: { en: 'flat / apartment' } },
            { term: 'Zimmer', article: 'das', plural: 'die Zimmer', translations: { en: 'room' } },
            { term: 'Wohnzimmer', article: 'das', translations: { en: 'living room' } },
            { term: 'Schlafzimmer', article: 'das', translations: { en: 'bedroom' } },
            { term: 'Kinderzimmer', article: 'das', translations: { en: 'child’s room' } },
            { term: 'Küche', article: 'die', plural: 'die Küchen', translations: { en: 'kitchen' } },
            { term: 'Bad', article: 'das', plural: 'die Bäder', translations: { en: 'bathroom' } },
            { term: 'Flur', article: 'der', plural: 'die Flure', translations: { en: 'hallway' } },
            { term: 'Balkon', article: 'der', plural: 'die Balkone', translations: { en: 'balcony' } },
            { term: 'Quadratmeter (m²)', article: 'der', translations: { en: 'square metre' } },
          ],
        },
        {
          id: 'b4-1-info-adj',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Wie ist die Wohnung?',
          text: 'Nach „sein“ bekommt das Adjektiv keine Endung: Die Küche ist klein. Das Bad ist neu. Viele Adjektive lernt man am besten als Paar.',
          translations: {
            en: {
              title: 'What is the flat like?',
              text: 'After „sein“ the adjective takes no ending: Die Küche ist klein. Das Bad ist neu. Many adjectives are best learned as pairs of opposites.',
            },
            es: {
              title: '¿Cómo es el piso?',
              text: 'Después de „sein“ el adjetivo no lleva terminación: Die Küche ist klein. Das Bad ist neu. Muchos adjetivos se aprenden mejor por parejas de opuestos.',
            },
            fr: {
              title: 'Comment est l’appartement ?',
              text: 'Après « sein », l’adjectif ne prend pas de terminaison : Die Küche ist klein. Das Bad ist neu. Beaucoup d’adjectifs s’apprennent mieux par paires de contraires.',
            },
            it: {
              title: 'Com’è l’appartamento?',
              text: 'Dopo „sein“ l’aggettivo non prende desinenza: Die Küche ist klein. Das Bad ist neu. Molti aggettivi si imparano meglio a coppie di contrari.',
            },
          },
          table: {
            headers: ['', 'Gegenteil'],
            rows: [
              ['groß', 'klein'],
              ['hell', 'dunkel'],
              ['neu', 'alt'],
              ['teuer', 'günstig'],
              ['ruhig', 'laut'],
              ['schön', 'hässlich'],
            ],
          },
        },
        {
          id: 'b4-1-match',
          type: 'MATCHING',
          instruction: 'Finden Sie das Gegenteil.',
          left: [
            { id: 'l1', text: 'groß' },
            { id: 'l2', text: 'hell' },
            { id: 'l3', text: 'teuer' },
            { id: 'l4', text: 'laut' },
          ],
          right: [
            { id: 'r1', text: 'klein' },
            { id: 'r2', text: 'dunkel' },
            { id: 'r3', text: 'günstig' },
            { id: 'r4', text: 'ruhig' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'b4-1-info-pron',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'er, sie, es – auch für Dinge',
          text: 'Im Deutschen ersetzt man auch Dinge durch er, sie oder es – je nach Artikel: der Balkon → er, die Küche → sie, das Bad → es. „Die Küche ist klein.“ → „Sie ist klein.“',
          translations: {
            en: {
              title: 'er, sie, es – for things too',
              text: 'In German, things are also replaced by er, sie or es – depending on the article: der Balkon → er, die Küche → sie, das Bad → es. „Die Küche ist klein.“ → „Sie ist klein.“ (It is small.)',
            },
            es: {
              title: 'er, sie, es – también para cosas',
              text: 'En alemán también las cosas se sustituyen por er, sie o es, según el artículo: der Balkon → er, die Küche → sie, das Bad → es. „Die Küche ist klein.“ → „Sie ist klein.“',
            },
            fr: {
              title: 'er, sie, es – aussi pour les choses',
              text: 'En allemand, on remplace aussi les choses par er, sie ou es, selon l’article : der Balkon → er, die Küche → sie, das Bad → es. « Die Küche ist klein. » → « Sie ist klein. »',
            },
            it: {
              title: 'er, sie, es – anche per le cose',
              text: 'In tedesco anche le cose si sostituiscono con er, sie o es, a seconda dell’articolo: der Balkon → er, die Küche → sie, das Bad → es. „Die Küche ist klein.“ → „Sie ist klein.“',
            },
          },
        },
        {
          id: 'b4-1-choice-pron',
          type: 'CHOICE',
          instruction: '„Wie ist das Schlafzimmer?“ – „___ ist ruhig.“',
          multiple: false,
          options: [
            { id: 'p1', text: 'Er' },
            { id: 'p2', text: 'Sie' },
            { id: 'p3', text: 'Es' },
          ],
          solution: ['p3'],
          explanation: '„das Schlafzimmer“ ist sächlich, also ersetzt man es durch „es“.',
          explanationTranslations: {
            en: '„das Schlafzimmer“ is neuter, so it is replaced by „es“.',
            es: '„das Schlafzimmer“ es neutro, así que se sustituye por „es“.',
            fr: '« das Schlafzimmer » est neutre, on le remplace donc par « es ».',
            it: '„das Schlafzimmer“ è neutro, quindi si sostituisce con „es“.',
          },
        },
        {
          id: 'b4-1-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie Miras Nachricht.',
          wordBank: ['Zimmer', 'Küche', 'hell', 'Balkon', 'klein'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Liebe Oma, meine neue Wohnung hat drei ' },
            { kind: 'GAP', gapId: 'w1', solution: ['Zimmer'], width: 8 },
            { kind: 'TEXT', text: '. Das Wohnzimmer ist groß und ' },
            { kind: 'GAP', gapId: 'w2', solution: ['hell'], width: 6 },
            { kind: 'TEXT', text: '. Die ' },
            { kind: 'GAP', gapId: 'w3', solution: ['Küche'], width: 7 },
            { kind: 'TEXT', text: ' ist leider ' },
            { kind: 'GAP', gapId: 'w4', solution: ['klein'], width: 6 },
            { kind: 'TEXT', text: '. Aber wir haben einen ' },
            { kind: 'GAP', gapId: 'w5', solution: ['Balkon'], width: 7 },
            { kind: 'TEXT', text: '!' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – Möbel, und wo sie hingehören.
  {
    order: 2,
    title: 'Möbel',
    subtitle: 'Einrichtung benennen',
    estimatedMinutes: 20,
    content: {
      version: v,
      blocks: [
        { id: 'b4-2-h1', type: 'HEADING', level: 1, text: 'Möbel' },
        {
          id: 'b4-2-intro',
          type: 'TEXT',
          text: 'Mira und ihr Mitbewohner richten die neue Wohnung ein. Was brauchen sie noch?',
          translations: {
            en: 'Mira and her flatmate are furnishing the new flat. What do they still need?',
            es: 'Mira y su compañero de piso amueblan el piso nuevo. ¿Qué les falta todavía?',
            fr: 'Mira et son colocataire aménagent le nouvel appartement. De quoi ont-ils encore besoin ?',
            it: 'Mira e il suo coinquilino arredano il nuovo appartamento. Che cosa manca ancora?',
          },
        },
        {
          id: 'b4-2-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: Möbel und Geräte',
          items: [
            { term: 'Tisch', article: 'der', plural: 'die Tische', translations: { en: 'table' } },
            { term: 'Stuhl', article: 'der', plural: 'die Stühle', translations: { en: 'chair' } },
            { term: 'Sofa', article: 'das', plural: 'die Sofas', translations: { en: 'sofa' } },
            { term: 'Sessel', article: 'der', plural: 'die Sessel', translations: { en: 'armchair' } },
            { term: 'Bett', article: 'das', plural: 'die Betten', translations: { en: 'bed' } },
            { term: 'Schrank', article: 'der', plural: 'die Schränke', translations: { en: 'wardrobe / cupboard' } },
            { term: 'Regal', article: 'das', plural: 'die Regale', translations: { en: 'shelf' } },
            { term: 'Lampe', article: 'die', plural: 'die Lampen', translations: { en: 'lamp' } },
            { term: 'Teppich', article: 'der', plural: 'die Teppiche', translations: { en: 'rug / carpet' } },
            { term: 'Kühlschrank', article: 'der', plural: 'die Kühlschränke', translations: { en: 'fridge' } },
            { term: 'Herd', article: 'der', plural: 'die Herde', translations: { en: 'stove / cooker' } },
            { term: 'Waschmaschine', article: 'die', plural: 'die Waschmaschinen', translations: { en: 'washing machine' } },
          ],
        },
        {
          id: 'b4-2-match-raum',
          type: 'MATCHING',
          instruction: 'Wo steht das normalerweise? Ordnen Sie zu.',
          left: [
            { id: 'l1', text: 'das Bett' },
            { id: 'l2', text: 'der Herd' },
            { id: 'l3', text: 'das Sofa' },
            { id: 'l4', text: 'die Waschmaschine' },
          ],
          right: [
            { id: 'r1', text: 'im Schlafzimmer' },
            { id: 'r2', text: 'in der Küche' },
            { id: 'r3', text: 'im Wohnzimmer' },
            { id: 'r4', text: 'im Bad' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'b4-2-dlg',
          type: 'DIALOGUE',
          title: 'Was fehlt noch?',
          lines: [
            { speaker: 'Mira', text: 'Wir brauchen noch einen Tisch für die Küche.' },
            { speaker: 'Ben', text: 'Und Stühle! Wir haben nur einen Stuhl.' },
            { speaker: 'Mira', text: 'Stimmt. Brauchen wir auch einen Teppich?' },
            { speaker: 'Ben', text: 'Nein, ich finde, wir brauchen keinen Teppich. Aber eine Lampe für den Flur.' },
          ],
        },
        {
          id: 'b4-2-info-brauchen',
          type: 'INFO',
          variant: 'TIP',
          title: 'brauchen + Akkusativ',
          text: 'Nach „brauchen“ steht der Akkusativ – wie nach „haben“ und „möchten“ in Kapitel 3: Wir brauchen einen Tisch, eine Lampe, ein Regal. Die Verneinung ist „keinen / keine / kein“.',
          translations: {
            en: {
              title: 'brauchen + accusative',
              text: '„brauchen“ (to need) takes the accusative – like „haben“ and „möchten“ in Chapter 3: Wir brauchen einen Tisch, eine Lampe, ein Regal. The negation is „keinen / keine / kein“.',
            },
            es: {
              title: 'brauchen + acusativo',
              text: '„brauchen“ (necesitar) lleva acusativo, como „haben“ y „möchten“ en el Capítulo 3: Wir brauchen einen Tisch, eine Lampe, ein Regal. La negación es „keinen / keine / kein“.',
            },
            fr: {
              title: 'brauchen + accusatif',
              text: '« brauchen » (avoir besoin de) est suivi de l’accusatif, comme « haben » et « möchten » au chapitre 3 : Wir brauchen einen Tisch, eine Lampe, ein Regal. La négation est « keinen / keine / kein ».',
            },
            it: {
              title: 'brauchen + accusativo',
              text: '„brauchen“ (avere bisogno di) regge l’accusativo, come „haben“ e „möchten“ nel Capitolo 3: Wir brauchen einen Tisch, eine Lampe, ein Regal. La negazione è „keinen / keine / kein“.',
            },
          },
        },
        {
          id: 'b4-2-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie einen, eine oder ein.',
          wordBank: ['einen', 'eine', 'ein'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Für das Schlafzimmer brauche ich ' },
            { kind: 'GAP', gapId: 'm1', solution: ['ein'], width: 6 },
            { kind: 'TEXT', text: ' Bett (das), ' },
            { kind: 'GAP', gapId: 'm2', solution: ['einen'], width: 6 },
            { kind: 'TEXT', text: ' Schrank (der) und ' },
            { kind: 'GAP', gapId: 'm3', solution: ['eine'], width: 6 },
            { kind: 'TEXT', text: ' Lampe (die). Für das Wohnzimmer brauche ich ' },
            { kind: 'GAP', gapId: 'm4', solution: ['ein'], width: 6 },
            { kind: 'TEXT', text: ' Sofa (das).' },
          ],
        },
        {
          id: 'b4-2-choice',
          type: 'CHOICE',
          instruction: 'Was ist richtig? „Wir haben schon zwei Stühle. Wir brauchen ___.“',
          multiple: false,
          options: [
            { id: 'c1', text: 'keine Stühle mehr' },
            { id: 'c2', text: 'nicht Stühle mehr' },
            { id: 'c3', text: 'keinen Stühle mehr' },
          ],
          solution: ['c1'],
          explanation: 'Plural ohne Artikel verneint man mit „keine“: keine Stühle.',
          explanationTranslations: {
            en: 'A plural without an article is negated with „keine“: keine Stühle.',
            es: 'Un plural sin artículo se niega con „keine“: keine Stühle.',
            fr: 'Un pluriel sans article se nie avec « keine » : keine Stühle.',
            it: 'Un plurale senza articolo si nega con „keine“: keine Stühle.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – wo steht was? Präpositionen mit Dativ.
  {
    order: 3,
    title: 'Wo ist meine Brille?',
    subtitle: 'Präpositionen mit Dativ',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'b4-3-h1', type: 'HEADING', level: 1, text: 'Wo ist meine Brille?' },
        {
          id: 'b4-3-dlg',
          type: 'DIALOGUE',
          title: 'Morgens um halb acht',
          lines: [
            { speaker: 'Ben', text: 'Mira, wo ist meine Brille?' },
            { speaker: 'Mira', text: 'Liegt sie nicht auf dem Tisch?' },
            { speaker: 'Ben', text: 'Nein. Und auch nicht neben dem Bett.' },
            { speaker: 'Mira', text: 'Vielleicht im Bad? Oder unter der Zeitung?' },
            { speaker: 'Ben', text: 'Ah, hier ist sie – im Regal, zwischen den Büchern!' },
          ],
        },
        {
          id: 'b4-3-info-praep',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Wo? – Präposition + Dativ',
          text: 'Auf die Frage „Wo?“ folgt nach diesen Präpositionen der Dativ. Die Artikel im Dativ sind: dem (männlich und sächlich), der (weiblich), den (Plural, das Nomen bekommt ein -n).',
          translations: {
            en: {
              title: 'Where? – preposition + dative',
              text: 'In answer to „Wo?“ (where?), these prepositions are followed by the dative. The dative articles are: dem (masculine and neuter), der (feminine), den (plural, and the noun adds -n).',
            },
            es: {
              title: '¿Dónde? – preposición + dativo',
              text: 'A la pregunta „Wo?“ (¿dónde?), estas preposiciones van seguidas de dativo. Los artículos en dativo son: dem (masculino y neutro), der (femenino), den (plural; el sustantivo añade -n).',
            },
            fr: {
              title: 'Où ? – préposition + datif',
              text: 'Pour répondre à « Wo? » (où ?), ces prépositions sont suivies du datif. Les articles au datif sont : dem (masculin et neutre), der (féminin), den (pluriel ; le nom prend un -n).',
            },
            it: {
              title: 'Dove? – preposizione + dativo',
              text: 'Alla domanda „Wo?“ (dove?), queste preposizioni sono seguite dal dativo. Gli articoli al dativo sono: dem (maschile e neutro), der (femminile), den (plurale; il sostantivo aggiunge -n).',
            },
          },
          table: {
            headers: ['Präposition', 'Beispiel'],
            rows: [
              ['in', 'im (= in dem) Regal, in der Küche'],
              ['auf', 'auf dem Tisch'],
              ['unter', 'unter der Zeitung'],
              ['neben', 'neben dem Bett'],
              ['vor', 'vor dem Fenster'],
              ['hinter', 'hinter der Tür'],
              ['über', 'über dem Sofa'],
              ['an', 'am (= an dem) Fenster, an der Wand'],
              ['zwischen', 'zwischen den Büchern'],
            ],
          },
        },
        {
          id: 'b4-3-info-im',
          type: 'INFO',
          variant: 'TIP',
          title: 'im und am',
          text: '„in dem“ und „an dem“ zieht man fast immer zusammen: im Bad, am Fenster. Bei „der“ (weiblich) gibt es keine Kurzform: in der Küche, an der Wand.',
          translations: {
            en: {
              title: 'im and am',
              text: '„in dem“ and „an dem“ are almost always contracted: im Bad, am Fenster. There is no short form with „der“ (feminine): in der Küche, an der Wand.',
            },
            es: {
              title: 'im y am',
              text: '„in dem“ y „an dem“ casi siempre se contraen: im Bad, am Fenster. Con „der“ (femenino) no hay forma corta: in der Küche, an der Wand.',
            },
            fr: {
              title: 'im et am',
              text: '« in dem » et « an dem » se contractent presque toujours : im Bad, am Fenster. Avec « der » (féminin), il n’y a pas de forme courte : in der Küche, an der Wand.',
            },
            it: {
              title: 'im e am',
              text: '„in dem“ e „an dem“ si contraggono quasi sempre: im Bad, am Fenster. Con „der“ (femminile) non c’è forma breve: in der Küche, an der Wand.',
            },
          },
        },
        {
          id: 'b4-3-cloze-dativ',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie dem, der oder im.',
          wordBank: ['dem', 'der', 'im'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Die Katze schläft auf ' },
            { kind: 'GAP', gapId: 'd1', solution: ['dem'], width: 5 },
            { kind: 'TEXT', text: ' Sofa. (das Sofa)\n2. Der Schlüssel liegt unter ' },
            { kind: 'GAP', gapId: 'd2', solution: ['der'], width: 5 },
            { kind: 'TEXT', text: ' Zeitung. (die Zeitung)\n3. Die Lampe steht neben ' },
            { kind: 'GAP', gapId: 'd3', solution: ['dem'], width: 5 },
            { kind: 'TEXT', text: ' Sessel. (der Sessel)\n4. Die Milch ist ' },
            { kind: 'GAP', gapId: 'd4', solution: ['im'], width: 5 },
            { kind: 'TEXT', text: ' Kühlschrank. (der Kühlschrank)' },
          ],
        },
        {
          id: 'b4-3-choice',
          type: 'CHOICE',
          instruction: 'Das Bild hängt an der Wand über dem Sofa. Welcher Satz sagt dasselbe?',
          multiple: false,
          options: [
            { id: 'c1', text: 'Das Sofa steht unter dem Bild.' },
            { id: 'c2', text: 'Das Sofa steht über dem Bild.' },
            { id: 'c3', text: 'Das Bild steht neben dem Sofa.' },
          ],
          solution: ['c1'],
          explanation: 'Wenn das Bild über dem Sofa hängt, steht das Sofa unter dem Bild.',
          explanationTranslations: {
            en: 'If the picture hangs above the sofa, the sofa is below the picture.',
            es: 'Si el cuadro cuelga encima del sofá, el sofá está debajo del cuadro.',
            fr: 'Si le tableau est accroché au-dessus du canapé, le canapé est sous le tableau.',
            it: 'Se il quadro è appeso sopra il divano, il divano sta sotto il quadro.',
          },
        },
        {
          id: 'b4-3-info-verben',
          type: 'INFO',
          variant: 'TIP',
          title: 'stehen, liegen, hängen',
          text: 'Deutsch sagt genau, wie etwas an seinem Ort ist: Was aufrecht ist, steht (der Schrank, die Flasche). Was flach ist, liegt (das Buch, der Teppich). Was oben befestigt ist, hängt (das Bild, die Lampe an der Decke).',
          translations: {
            en: {
              title: 'stehen, liegen, hängen',
              text: 'German says exactly how something is positioned: upright things stand – stehen (der Schrank, die Flasche). Flat things lie – liegen (das Buch, der Teppich). Things fixed at the top hang – hängen (das Bild, die Lampe an der Decke).',
            },
            es: {
              title: 'stehen, liegen, hängen',
              text: 'El alemán dice exactamente cómo está algo en su lugar: lo que está vertical „steht“ (der Schrank, die Flasche). Lo que está plano „liegt“ (das Buch, der Teppich). Lo que está sujeto por arriba „hängt“ (das Bild, die Lampe an der Decke).',
            },
            fr: {
              title: 'stehen, liegen, hängen',
              text: 'L’allemand précise la position des choses : ce qui est debout « steht » (der Schrank, die Flasche). Ce qui est à plat « liegt » (das Buch, der Teppich). Ce qui est fixé en haut « hängt » (das Bild, die Lampe an der Decke).',
            },
            it: {
              title: 'stehen, liegen, hängen',
              text: 'Il tedesco dice esattamente come si trova qualcosa: ciò che è in verticale „steht“ (der Schrank, die Flasche). Ciò che è in orizzontale „liegt“ (das Buch, der Teppich). Ciò che è fissato in alto „hängt“ (das Bild, die Lampe an der Decke).',
            },
          },
        },
        {
          id: 'b4-3-match-verb',
          type: 'MATCHING',
          instruction: 'steht, liegt oder hängt? Ordnen Sie zu.',
          left: [
            { id: 'v1', text: 'Der Schrank …' },
            { id: 'v2', text: 'Der Teppich …' },
            { id: 'v3', text: 'Das Bild …' },
          ],
          right: [
            { id: 'x1', text: '… steht im Schlafzimmer.' },
            { id: 'x2', text: '… liegt auf dem Boden.' },
            { id: 'x3', text: '… hängt an der Wand.' },
          ],
          solution: [
            { leftId: 'v1', rightId: 'x1' },
            { leftId: 'v2', rightId: 'x2' },
            { leftId: 'v3', rightId: 'x3' },
          ],
        },
        {
          id: 'b4-3-order',
          type: 'ORDERING',
          instruction: 'Bilden Sie einen Satz.',
          items: [
            { id: 'o1', text: 'Das' },
            { id: 'o2', text: 'Buch' },
            { id: 'o3', text: 'liegt' },
            { id: 'o4', text: 'auf' },
            { id: 'o5', text: 'dem' },
            { id: 'o6', text: 'Tisch.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5', 'o6'],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – eine Wohnungsanzeige lesen, mit allen Abkürzungen.
  {
    order: 4,
    title: 'Wohnung gesucht',
    subtitle: 'Eine Wohnungsanzeige verstehen',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'b4-4-h1', type: 'HEADING', level: 1, text: 'Wohnung gesucht' },
        {
          id: 'b4-4-image',
          type: 'IMAGE',
          url: 'illustration:city-street',
          alt: 'Eine Straße mit mehrstöckigen Wohnhäusern, Balkonen und Bäumen am Gehweg.',
          caption: 'Eine ruhige Wohnstraße in der Stadt.',
        },
        {
          id: 'b4-4-intro',
          type: 'TEXT',
          text: 'Samir sucht eine Wohnung in Leipzig. Er liest die Anzeigen im Internet. Viele Wörter sind abgekürzt.',
          translations: {
            en: 'Samir is looking for a flat in Leipzig. He reads the adverts online. Many words are abbreviated.',
            es: 'Samir busca piso en Leipzig. Lee los anuncios en internet. Muchas palabras están abreviadas.',
            fr: 'Samir cherche un appartement à Leipzig. Il lit les annonces sur Internet. Beaucoup de mots sont abrégés.',
            it: 'Samir cerca un appartamento a Lipsia. Legge gli annunci su Internet. Molte parole sono abbreviate.',
          },
        },
        {
          id: 'b4-4-anzeige',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'Anzeige: 2-Zi.-Whg. in Leipzig-Gohlis',
          text: 'Schöne 2-Zi.-Whg., 58 m², 3. OG, mit Balkon und EBK. Ruhige Lage, S-Bahn 5 Min. zu Fuß. Miete: 520 € kalt, NK 140 €, KT 2 Monatsmieten. Frei ab 1. März. Tel. 0341 / 55 82 71.',
          translations: {
            en: {
              title: 'Advert: 2-room flat in Leipzig-Gohlis',
              text: 'Nice 2-room flat, 58 m², 3rd floor, with balcony and fitted kitchen. Quiet location, suburban train 5 min. on foot. Rent: €520 excluding bills, service charges €140, deposit 2 months’ rent. Available from 1 March. Tel. 0341 / 55 82 71.',
            },
            es: {
              title: 'Anuncio: piso de 2 habitaciones en Leipzig-Gohlis',
              text: 'Bonito piso de 2 hab., 58 m², 3.ª planta, con balcón y cocina equipada. Zona tranquila, tren de cercanías a 5 min. a pie. Alquiler: 520 € sin gastos, gastos 140 €, fianza 2 mensualidades. Libre a partir del 1 de marzo. Tel. 0341 / 55 82 71.',
            },
            fr: {
              title: 'Annonce : 2 pièces à Leipzig-Gohlis',
              text: 'Beau 2 pièces, 58 m², 3e étage, avec balcon et cuisine équipée. Quartier calme, RER à 5 min à pied. Loyer : 520 € hors charges, charges 140 €, caution 2 mois de loyer. Libre à partir du 1er mars. Tél. 0341 / 55 82 71.',
            },
            it: {
              title: 'Annuncio: bilocale a Lipsia-Gohlis',
              text: 'Bel bilocale, 58 m², 3° piano, con balcone e cucina attrezzata. Zona tranquilla, S-Bahn a 5 min. a piedi. Affitto: 520 € senza spese, spese 140 €, cauzione 2 mensilità. Libero dal 1° marzo. Tel. 0341 / 55 82 71.',
            },
          },
          table: {
            headers: ['Abkürzung', 'bedeutet'],
            rows: [
              ['Zi.', 'Zimmer'],
              ['Whg.', 'Wohnung'],
              ['OG', 'Obergeschoss (Stock)'],
              ['EBK', 'Einbauküche'],
              ['kalt', 'Miete ohne Heizung und Nebenkosten'],
              ['NK', 'Nebenkosten (Wasser, Heizung, Müll …)'],
              ['KT', 'Kaution'],
            ],
          },
        },
        {
          id: 'b4-4-choice-richtig',
          type: 'CHOICE',
          instruction: 'Was steht in der Anzeige? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'a1', text: 'Die Wohnung hat zwei Zimmer.' },
            { id: 'a2', text: 'Die Wohnung ist im Erdgeschoss.' },
            { id: 'a3', text: 'Die Küche hat schon Möbel und Geräte.' },
            { id: 'a4', text: 'Man kann sofort einziehen.' },
          ],
          solution: ['a1', 'a3'],
          explanation:
            '„2-Zi.“ heißt zwei Zimmer, „EBK“ heißt Einbauküche – also mit Schränken, Herd und Kühlschrank. Die Wohnung ist im 3. Stock und erst ab 1. März frei.',
          explanationTranslations: {
            en: '„2-Zi.“ means two rooms, „EBK“ means fitted kitchen – with cupboards, stove and fridge. The flat is on the 3rd floor and only available from 1 March.',
            es: '„2-Zi.“ significa dos habitaciones, „EBK“ cocina equipada – con armarios, cocina y nevera. El piso está en la 3.ª planta y solo está libre a partir del 1 de marzo.',
            fr: '« 2-Zi. » signifie deux pièces, « EBK » cuisine équipée – avec placards, cuisinière et réfrigérateur. L’appartement est au 3e étage et libre seulement à partir du 1er mars.',
            it: '„2-Zi.“ significa due stanze, „EBK“ cucina attrezzata – con mobili, fornelli e frigorifero. L’appartamento è al 3° piano ed è libero solo dal 1° marzo.',
          },
        },
        {
          id: 'b4-4-cloze-miete',
          type: 'CLOZE',
          instruction: 'Rechnen Sie: Wie viel zahlt Samir jeden Monat?',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Kaltmiete 520 € + Nebenkosten ' },
            { kind: 'GAP', gapId: 'k1', solution: ['140'], width: 5 },
            { kind: 'TEXT', text: ' € = Warmmiete ' },
            { kind: 'GAP', gapId: 'k2', solution: ['660'], width: 5 },
            { kind: 'TEXT', text: ' €' },
          ],
        },
        {
          id: 'b4-4-match-abk',
          type: 'MATCHING',
          instruction: 'Was bedeutet die Abkürzung?',
          left: [
            { id: 'l1', text: 'Whg.' },
            { id: 'l2', text: 'EBK' },
            { id: 'l3', text: 'NK' },
            { id: 'l4', text: 'KT' },
          ],
          right: [
            { id: 'r1', text: 'Wohnung' },
            { id: 'r2', text: 'Einbauküche' },
            { id: 'r3', text: 'Nebenkosten' },
            { id: 'r4', text: 'Kaution' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'b4-4-dlg',
          type: 'DIALOGUE',
          title: 'Samir ruft an',
          lines: [
            { speaker: 'Vermieterin', text: 'Hausverwaltung Krüger, guten Tag.' },
            { speaker: 'Samir', text: 'Guten Tag, mein Name ist Haddad. Ich rufe wegen der Wohnung in Gohlis an. Ist sie noch frei?' },
            { speaker: 'Vermieterin', text: 'Ja, sie ist noch frei.' },
            { speaker: 'Samir', text: 'Kann ich die Wohnung ansehen?' },
            { speaker: 'Vermieterin', text: 'Gern. Am Donnerstag um 17 Uhr?' },
            { speaker: 'Samir', text: 'Das passt. Vielen Dank!' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – Rückblick, zum Schluss die eigene Wohnung beschreiben.
  {
    order: 5,
    title: 'Kannst du das schon?',
    subtitle: 'Rückblick auf das ganze Kapitel',
    estimatedMinutes: 15,
    content: {
      version: v,
      blocks: [
        { id: 'b4-5-h1', type: 'HEADING', level: 1, text: 'Kannst du das schon?' },
        {
          id: 'b4-5-intro',
          type: 'TEXT',
          text: 'Prüfen Sie, was Sie aus Kapitel 4 mitnehmen. Am Ende beschreiben Sie Ihre Wohnung.',
          translations: {
            en: 'Check what you take away from Chapter 4. At the end, you’ll describe your home.',
            es: 'Compruebe qué se lleva del Capítulo 4. Al final describirá su casa.',
            fr: 'Vérifiez ce que vous retenez du chapitre 4. À la fin, vous décrirez votre logement.',
            it: 'Verifichi cosa porta a casa dal Capitolo 4. Alla fine descriverà la sua casa.',
          },
        },
        {
          id: 'b4-5-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie den Text.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Mein Zimmer ist klein, aber ' },
            { kind: 'GAP', gapId: 'r1', solution: ['hell'], width: 6 },
            { kind: 'TEXT', text: '. Das Bett steht ' },
            { kind: 'GAP', gapId: 'r2', solution: ['neben'], width: 7 },
            { kind: 'TEXT', text: ' dem Fenster. Über ' },
            { kind: 'GAP', gapId: 'r3', solution: ['dem'], width: 5 },
            { kind: 'TEXT', text: ' Bett hängt ein Bild. Meine Bücher stehen ' },
            { kind: 'GAP', gapId: 'r4', solution: ['im'], width: 4 },
            { kind: 'TEXT', text: ' Regal. Ich brauche noch ' },
            { kind: 'GAP', gapId: 'r5', solution: ['einen'], width: 6 },
            { kind: 'TEXT', text: ' Sessel.' },
          ],
        },
        {
          id: 'b4-5-choice',
          type: 'CHOICE',
          instruction: 'Welche Sätze sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'k1', text: 'Der Teppich liegt im Flur.' },
            { id: 'k2', text: 'Die Lampe steht neben der Sofa.' },
            { id: 'k3', text: 'Die Katze schläft unter dem Tisch.' },
            { id: 'k4', text: 'Das Bild hängt an die Wand.' },
          ],
          solution: ['k1', 'k3'],
          explanation:
            '„das Sofa“ ist sächlich: neben dem Sofa. Auf die Frage „Wo?“ steht der Dativ: an der Wand.',
          explanationTranslations: {
            en: '„das Sofa“ is neuter: neben dem Sofa. The question „Wo?“ takes the dative: an der Wand.',
            es: '„das Sofa“ es neutro: neben dem Sofa. A la pregunta „Wo?“ le sigue el dativo: an der Wand.',
            fr: '« das Sofa » est neutre : neben dem Sofa. À la question « Wo? », on emploie le datif : an der Wand.',
            it: '„das Sofa“ è neutro: neben dem Sofa. Alla domanda „Wo?“ segue il dativo: an der Wand.',
          },
        },
        {
          id: 'b4-5-match',
          type: 'MATCHING',
          instruction: 'Ordnen Sie Frage und Antwort zu.',
          left: [
            { id: 'm1', text: 'Wie groß ist die Wohnung?' },
            { id: 'm2', text: 'Wie hoch ist die Miete?' },
            { id: 'm3', text: 'Wo ist der Schlüssel?' },
            { id: 'm4', text: 'Ist die Wohnung noch frei?' },
          ],
          right: [
            { id: 'y1', text: 'Sie hat 58 Quadratmeter.' },
            { id: 'y2', text: '520 Euro kalt.' },
            { id: 'y3', text: 'Auf dem Tisch im Flur.' },
            { id: 'y4', text: 'Ja, ab 1. März.' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'y1' },
            { leftId: 'm2', rightId: 'y2' },
            { leftId: 'm3', rightId: 'y3' },
            { leftId: 'm4', rightId: 'y4' },
          ],
        },
        {
          id: 'b4-5-writing',
          type: 'WRITING',
          instruction: 'Meine Wohnung',
          prompt:
            'Beschreiben Sie Ihre Wohnung oder Ihr Zimmer in vier bis sechs Sätzen: Wie viele Zimmer gibt es? Wie ist die Wohnung? Was steht wo? Nutzen Sie Präpositionen mit Dativ.',
          minWords: 25,
          maxWords: 100,
          aiFeedback: true,
          sampleAnswer:
            'Ich wohne in einer Zwei-Zimmer-Wohnung. Sie ist nicht groß, aber sehr ruhig. Im Wohnzimmer steht ein Sofa, und vor dem Sofa liegt ein Teppich. Über dem Sofa hängt eine Lampe. Mein Schreibtisch steht am Fenster. Die Küche ist klein, aber hell.',
        },
      ],
    },
  },
];
