import type { UnitSeed } from './chapter-beginner-1';

/**
 * Beginner, Kapitel 6: „Einkaufen und Freizeit“
 *
 * Fünf Seiten, Aufbau wie in den Kapiteln davor. Letztes Kapitel der Stufe A1.
 *
 * Die Modalverben können, wollen und müssen bringen dieselbe Satzklammer mit,
 * die Kapitel 5 mit den trennbaren Verben eingeführt hat – nur steht am Ende
 * jetzt ein ganzer Infinitiv statt einer Vorsilbe. Seite 3 knüpft deshalb
 * ausdrücklich daran an, statt die Klammer ein zweites Mal von vorn zu
 * erklären.
 *
 * Die Kleidung kommt zuerst, weil „Kann ich das anprobieren?“ der erste
 * Modalverb-Satz ist, den man im Alltag wirklich braucht.
 *
 * Einsprachig deutsch, Erklärungen mit Übersetzung wie in Kapitel 1.
 */
const v = 1;

export const BEGINNER_6_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Kleidung und Farben.
  {
    order: 1,
    title: 'Kleidung und Farben',
    subtitle: 'Was trägst du gern?',
    estimatedMinutes: 20,
    content: {
      version: v,
      blocks: [
        { id: 'b6-1-h1', type: 'HEADING', level: 1, text: 'Kleidung und Farben' },
        {
          id: 'b6-1-image',
          type: 'IMAGE',
          url: 'illustration:shopping-bags',
          alt: 'Einkaufstüten aus einem Modegeschäft, aus einer schaut ein roter Pullover heraus.',
          caption: 'Einkaufsbummel in der Stadt.',
        },
        {
          id: 'b6-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: Kleidung',
          items: [
            { term: 'Hose', article: 'die', plural: 'die Hosen', translations: { en: 'trousers' } },
            { term: 'Rock', article: 'der', plural: 'die Röcke', translations: { en: 'skirt' } },
            { term: 'Kleid', article: 'das', plural: 'die Kleider', translations: { en: 'dress' } },
            { term: 'Hemd', article: 'das', plural: 'die Hemden', translations: { en: 'shirt' } },
            { term: 'Bluse', article: 'die', plural: 'die Blusen', translations: { en: 'blouse' } },
            { term: 'T-Shirt', article: 'das', plural: 'die T-Shirts', translations: { en: 'T-shirt' } },
            { term: 'Pullover', article: 'der', plural: 'die Pullover', translations: { en: 'jumper / sweater' } },
            { term: 'Jacke', article: 'die', plural: 'die Jacken', translations: { en: 'jacket' } },
            { term: 'Mantel', article: 'der', plural: 'die Mäntel', translations: { en: 'coat' } },
            { term: 'Schuh', article: 'der', plural: 'die Schuhe', translations: { en: 'shoe' } },
            { term: 'tragen', translations: { en: 'to wear' }, example: 'Er trägt eine Jacke.' },
          ],
        },
        {
          id: 'b6-1-info-farben',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Farben',
          text: 'Nach „sein“ haben Farben keine Endung, genau wie andere Adjektive: Die Jacke ist blau. Mit „hell-“ und „dunkel-“ kann man Farben genauer machen: hellblau, dunkelgrün.',
          translations: {
            en: {
              title: 'Colours',
              text: 'After „sein“ colours take no ending, just like other adjectives: Die Jacke ist blau. With „hell-“ (light) and „dunkel-“ (dark) you can be more precise: hellblau, dunkelgrün.',
            },
            es: {
              title: 'Colores',
              text: 'Después de „sein“ los colores no llevan terminación, igual que otros adjetivos: Die Jacke ist blau. Con „hell-“ (claro) y „dunkel-“ (oscuro) se precisa el color: hellblau, dunkelgrün.',
            },
            fr: {
              title: 'Les couleurs',
              text: 'Après « sein », les couleurs ne prennent pas de terminaison, comme les autres adjectifs : Die Jacke ist blau. Avec « hell- » (clair) et « dunkel- » (foncé), on précise la couleur : hellblau, dunkelgrün.',
            },
            it: {
              title: 'I colori',
              text: 'Dopo „sein“ i colori non prendono desinenza, come gli altri aggettivi: Die Jacke ist blau. Con „hell-“ (chiaro) e „dunkel-“ (scuro) si precisa il colore: hellblau, dunkelgrün.',
            },
          },
          table: {
            headers: ['Farbe', 'Beispiel'],
            rows: [
              ['rot', 'Die Tomate ist rot.'],
              ['blau', 'Der Himmel ist blau.'],
              ['grün', 'Das Gras ist grün.'],
              ['gelb', 'Die Banane ist gelb.'],
              ['schwarz / weiß', 'Die Schuhe sind schwarz, das Hemd ist weiß.'],
              ['grau / braun', 'Der Mantel ist grau, der Rock ist braun.'],
            ],
          },
        },
        {
          id: 'b6-1-match',
          type: 'MATCHING',
          instruction: 'Welche Farbe hat das normalerweise?',
          left: [
            { id: 'l1', text: 'Schnee' },
            { id: 'l2', text: 'eine Banane' },
            { id: 'l3', text: 'eine Tomate' },
            { id: 'l4', text: 'die Nacht' },
          ],
          right: [
            { id: 'r1', text: 'weiß' },
            { id: 'r2', text: 'gelb' },
            { id: 'r3', text: 'rot' },
            { id: 'r4', text: 'schwarz' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'b6-1-info-tragen',
          type: 'INFO',
          variant: 'TIP',
          title: 'tragen: a wird ä',
          text: 'Bei „tragen“ wird das a bei „du“ und „er/sie/es“ zu ä: du trägst, sie trägt. Nach „tragen“ steht der Akkusativ: Er trägt einen Mantel.',
          translations: {
            en: {
              title: 'tragen: a becomes ä',
              text: 'In „tragen“ the a becomes ä with „du“ and „er/sie/es“: du trägst, sie trägt. „tragen“ takes the accusative: Er trägt einen Mantel.',
            },
            es: {
              title: 'tragen: la a se vuelve ä',
              text: 'En „tragen“ la a se vuelve ä con „du“ y „er/sie/es“: du trägst, sie trägt. „tragen“ lleva acusativo: Er trägt einen Mantel.',
            },
            fr: {
              title: 'tragen : a devient ä',
              text: 'Dans « tragen », le a devient ä avec « du » et « er/sie/es » : du trägst, sie trägt. « tragen » est suivi de l’accusatif : Er trägt einen Mantel.',
            },
            it: {
              title: 'tragen: la a diventa ä',
              text: 'In „tragen“ la a diventa ä con „du“ ed „er/sie/es“: du trägst, sie trägt. „tragen“ regge l’accusativo: Er trägt einen Mantel.',
            },
          },
        },
        {
          id: 'b6-1-cloze',
          type: 'CLOZE',
          instruction: 'Was tragen die Personen? Ergänzen Sie.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Lena ' },
            { kind: 'GAP', gapId: 'k1', solution: ['trägt', 'traegt'], width: 6 },
            { kind: 'TEXT', text: ' ein Kleid.\n2. Ich trage ' },
            { kind: 'GAP', gapId: 'k2', solution: ['einen'], width: 6 },
            { kind: 'TEXT', text: ' Pullover. (der Pullover)\n3. ' },
            { kind: 'GAP', gapId: 'k3', solution: ['Trägst', 'Traegst'], width: 7 },
            { kind: 'TEXT', text: ' du heute eine Jacke?\n4. Tim trägt ' },
            { kind: 'GAP', gapId: 'k4', solution: ['eine'], width: 6 },
            { kind: 'TEXT', text: ' Hose. (die Hose)' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – im Geschäft: Größe, anprobieren, gefallen.
  {
    order: 2,
    title: 'Im Kleidungsgeschäft',
    subtitle: 'Größe, Preis, gefallen',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'b6-2-h1', type: 'HEADING', level: 1, text: 'Im Kleidungsgeschäft' },
        {
          id: 'b6-2-dlg',
          type: 'DIALOGUE',
          title: 'Eine neue Jacke',
          lines: [
            { speaker: 'Verkäufer', text: 'Guten Tag! Kann ich Ihnen helfen?' },
            { speaker: 'Elif', text: 'Ja, ich suche eine Jacke.' },
            { speaker: 'Verkäufer', text: 'Welche Größe haben Sie?' },
            { speaker: 'Elif', text: 'Größe 38. Haben Sie die Jacke hier auch in Blau?' },
            { speaker: 'Verkäufer', text: 'Ja, hier bitte.' },
            { speaker: 'Elif', text: 'Kann ich sie anprobieren?' },
            { speaker: 'Verkäufer', text: 'Natürlich, die Kabine ist dort hinten.' },
            { speaker: 'Elif', text: 'Sie passt gut und gefällt mir. Was kostet sie?' },
            { speaker: 'Verkäufer', text: '79 Euro.' },
            { speaker: 'Elif', text: 'Hm, das ist ein bisschen teuer. Aber ich nehme sie.' },
          ],
        },
        {
          id: 'b6-2-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: Im Geschäft',
          items: [
            { term: 'suchen', translations: { en: 'to look for' }, example: 'Ich suche eine Jacke.' },
            { term: 'Größe', article: 'die', plural: 'die Größen', translations: { en: 'size' } },
            { term: 'anprobieren', translations: { en: 'to try on' } },
            { term: 'Kabine', article: 'die', plural: 'die Kabinen', translations: { en: 'changing room' } },
            { term: 'passen', translations: { en: 'to fit' }, example: 'Die Hose passt gut.' },
            { term: 'gefallen', translations: { en: 'to please / to like' }, example: 'Das Kleid gefällt mir.' },
            { term: 'zu groß / zu klein', translations: { en: 'too big / too small' } },
            { term: 'zu teuer', translations: { en: 'too expensive' } },
            { term: 'Kasse', article: 'die', plural: 'die Kassen', translations: { en: 'checkout / till' } },
          ],
        },
        {
          id: 'b6-2-info-gefallen',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Das gefällt mir',
          text: 'Bei „gefallen“ ist die Kleidung das Subjekt, die Person steht im Dativ: Die Jacke gefällt mir. Die Schuhe gefallen mir. Genauso funktioniert „passen“: Die Hose passt mir nicht.',
          translations: {
            en: {
              title: 'Das gefällt mir (I like it)',
              text: 'With „gefallen“ the clothing is the subject and the person is in the dative: Die Jacke gefällt mir (literally: the jacket pleases me). Die Schuhe gefallen mir. „passen“ works the same way: Die Hose passt mir nicht.',
            },
            es: {
              title: 'Das gefällt mir (me gusta)',
              text: 'Con „gefallen“ la ropa es el sujeto y la persona va en dativo, como con „gustar“: Die Jacke gefällt mir (me gusta la chaqueta). Die Schuhe gefallen mir. „passen“ funciona igual: Die Hose passt mir nicht.',
            },
            fr: {
              title: 'Das gefällt mir (ça me plaît)',
              text: 'Avec « gefallen », le vêtement est le sujet et la personne est au datif, comme avec « plaire » : Die Jacke gefällt mir (la veste me plaît). Die Schuhe gefallen mir. « passen » fonctionne de la même façon : Die Hose passt mir nicht.',
            },
            it: {
              title: 'Das gefällt mir (mi piace)',
              text: 'Con „gefallen“ il capo d’abbigliamento è il soggetto e la persona va al dativo, come con „piacere“: Die Jacke gefällt mir (la giacca mi piace). Die Schuhe gefallen mir. „passen“ funziona allo stesso modo: Die Hose passt mir nicht.',
            },
          },
          table: {
            headers: ['Person', 'Dativ', 'Beispiel'],
            rows: [
              ['ich', 'mir', 'Das Kleid gefällt mir.'],
              ['du', 'dir', 'Gefällt dir der Rock?'],
              ['Sie', 'Ihnen', 'Wie gefällt Ihnen die Farbe?'],
            ],
          },
        },
        {
          id: 'b6-2-choice-gefallen',
          type: 'CHOICE',
          instruction: '„Die Schuhe ___ mir sehr.“ Was passt?',
          multiple: false,
          options: [
            { id: 'g1', text: 'gefällt' },
            { id: 'g2', text: 'gefallen' },
            { id: 'g3', text: 'gefalle' },
          ],
          solution: ['g2'],
          explanation:
            'Das Subjekt ist „die Schuhe“ – Plural. Deshalb: Die Schuhe gefallen mir.',
          explanationTranslations: {
            en: 'The subject is „die Schuhe“ – plural. So: Die Schuhe gefallen mir.',
            es: 'El sujeto es „die Schuhe“ – plural. Por eso: Die Schuhe gefallen mir.',
            fr: 'Le sujet est « die Schuhe » – pluriel. Donc : Die Schuhe gefallen mir.',
            it: 'Il soggetto è „die Schuhe“ – plurale. Quindi: Die Schuhe gefallen mir.',
          },
        },
        {
          id: 'b6-2-match',
          type: 'MATCHING',
          instruction: 'Kunde oder Verkäufer? Was passt zusammen?',
          left: [
            { id: 'l1', text: 'Kann ich Ihnen helfen?' },
            { id: 'l2', text: 'Welche Größe haben Sie?' },
            { id: 'l3', text: 'Wie passt die Hose?' },
            { id: 'l4', text: 'Wo ist die Kasse?' },
          ],
          right: [
            { id: 'r1', text: 'Ja, ich suche einen Pullover.' },
            { id: 'r2', text: 'Größe M.' },
            { id: 'r3', text: 'Sie ist leider zu klein.' },
            { id: 'r4', text: 'Dort vorne, rechts.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'b6-2-order',
          type: 'ORDERING',
          instruction: 'Bilden Sie eine Frage.',
          items: [
            { id: 'o1', text: 'Wie' },
            { id: 'o2', text: 'gefällt' },
            { id: 'o3', text: 'dir' },
            { id: 'o4', text: 'das' },
            { id: 'o5', text: 'Hemd?' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5'],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – Freizeit und die drei Modalverben.
  {
    order: 3,
    title: 'Ich kann gut schwimmen',
    subtitle: 'Freizeit, Modalverben',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'b6-3-h1', type: 'HEADING', level: 1, text: 'Ich kann gut schwimmen' },
        {
          id: 'b6-3-image',
          type: 'IMAGE',
          url: 'illustration:calendar-weekend',
          alt: 'Ein Wochenkalender mit kleinen Symbolen für Sport, Musik und Ausflüge am Wochenende.',
          caption: 'Endlich Wochenende!',
        },
        {
          id: 'b6-3-text',
          type: 'TEXT',
          text: 'Jonas erzählt: „In meiner Freizeit mache ich viel Sport. Ich kann gut schwimmen, und ich spiele gern Fußball. Am Wochenende will ich endlich wieder Rad fahren – aber zuerst muss ich meine Wohnung aufräumen. Gitarre spielen kann ich leider nicht. Das will ich bald lernen.“',
          translations: {
            en: 'Jonas says: “In my free time I do a lot of sport. I can swim well and I like playing football. At the weekend I finally want to go cycling again – but first I have to tidy my flat. Unfortunately I can’t play the guitar. I want to learn that soon.”',
            es: 'Jonas cuenta: «En mi tiempo libre hago mucho deporte. Sé nadar bien y me gusta jugar al fútbol. El fin de semana por fin quiero volver a montar en bici, pero primero tengo que ordenar mi piso. Tocar la guitarra, por desgracia, no sé. Quiero aprenderlo pronto».',
            fr: 'Jonas raconte : « Pendant mon temps libre, je fais beaucoup de sport. Je sais bien nager et j’aime jouer au football. Ce week-end, je veux enfin refaire du vélo – mais d’abord, je dois ranger mon appartement. Je ne sais malheureusement pas jouer de la guitare. Je veux bientôt l’apprendre. »',
            it: 'Jonas racconta: «Nel tempo libero faccio molto sport. So nuotare bene e mi piace giocare a calcio. Il fine settimana voglio finalmente andare di nuovo in bici – ma prima devo mettere in ordine l’appartamento. Purtroppo non so suonare la chitarra. Voglio impararlo presto».',
          },
        },
        {
          id: 'b6-3-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: Freizeit',
          items: [
            { term: 'Freizeit', article: 'die', translations: { en: 'free time' } },
            { term: 'Sport machen', translations: { en: 'to do sport' } },
            { term: 'schwimmen', translations: { en: 'to swim' } },
            { term: 'Fußball spielen', translations: { en: 'to play football' } },
            { term: 'Rad fahren', translations: { en: 'to cycle' } },
            { term: 'wandern', translations: { en: 'to hike' } },
            { term: 'lesen', translations: { en: 'to read' } },
            { term: 'Musik hören', translations: { en: 'to listen to music' } },
            { term: 'Gitarre spielen', translations: { en: 'to play the guitar' } },
            { term: 'Freunde treffen', translations: { en: 'to meet friends' } },
            { term: 'ins Kino gehen', translations: { en: 'to go to the cinema' } },
          ],
        },
        {
          id: 'b6-3-info-modal',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Modalverben: können, wollen, müssen',
          text: '„können“ drückt eine Fähigkeit oder Möglichkeit aus, „wollen“ einen Wunsch oder Plan, „müssen“ eine Pflicht. Bei „ich“ und „er/sie/es“ haben sie keine Endung und denselben Vokalwechsel.',
          translations: {
            en: {
              title: 'Modal verbs: können, wollen, müssen',
              text: '„können“ (can) expresses an ability or possibility, „wollen“ (to want) a wish or plan, „müssen“ (must / have to) an obligation. With „ich“ and „er/sie/es“ they have no ending and the same vowel change.',
            },
            es: {
              title: 'Verbos modales: können, wollen, müssen',
              text: '„können“ (poder / saber) expresa una capacidad o posibilidad, „wollen“ (querer) un deseo o plan, „müssen“ (tener que) una obligación. Con „ich“ y „er/sie/es“ no llevan terminación y tienen el mismo cambio vocálico.',
            },
            fr: {
              title: 'Les verbes de modalité : können, wollen, müssen',
              text: '« können » (pouvoir / savoir) exprime une capacité ou une possibilité, « wollen » (vouloir) un souhait ou un projet, « müssen » (devoir) une obligation. Avec « ich » et « er/sie/es », ils n’ont pas de terminaison et le même changement de voyelle.',
            },
            it: {
              title: 'I verbi modali: können, wollen, müssen',
              text: '„können“ (potere / sapere) esprime una capacità o possibilità, „wollen“ (volere) un desiderio o un progetto, „müssen“ (dovere) un obbligo. Con „ich“ ed „er/sie/es“ non hanno desinenza e hanno lo stesso cambio vocalico.',
            },
          },
          table: {
            headers: ['Person', 'können', 'wollen', 'müssen'],
            rows: [
              ['ich', 'kann', 'will', 'muss'],
              ['du', 'kannst', 'willst', 'musst'],
              ['er / sie / es', 'kann', 'will', 'muss'],
              ['wir', 'können', 'wollen', 'müssen'],
              ['ihr', 'könnt', 'wollt', 'müsst'],
              ['sie / Sie', 'können', 'wollen', 'müssen'],
            ],
          },
        },
        {
          id: 'b6-3-info-klammer',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Wieder eine Satzklammer',
          text: 'Wie bei den trennbaren Verben in Kapitel 5 entsteht eine Klammer: Das Modalverb steht auf Position 2, das zweite Verb im Infinitiv ganz am Ende.',
          translations: {
            en: {
              title: 'Another sentence bracket',
              text: 'As with the separable verbs in Chapter 5, a bracket forms: the modal verb goes in position 2, the second verb in the infinitive right at the end.',
            },
            es: {
              title: 'Otra vez el paréntesis verbal',
              text: 'Como con los verbos separables del Capítulo 5, se forma un paréntesis: el verbo modal va en la posición 2 y el segundo verbo, en infinitivo, al final del todo.',
            },
            fr: {
              title: 'Encore une parenthèse verbale',
              text: 'Comme avec les verbes séparables du chapitre 5, une parenthèse se forme : le verbe de modalité est en position 2, le second verbe à l’infinitif tout à la fin.',
            },
            it: {
              title: 'Di nuovo una parentesi verbale',
              text: 'Come con i verbi separabili del Capitolo 5, si forma una parentesi: il verbo modale va in posizione 2, il secondo verbo all’infinito alla fine.',
            },
          },
          table: {
            headers: ['Position 1', 'Position 2', 'Mitte', 'Ende'],
            rows: [
              ['Ich', 'kann', 'gut', 'schwimmen.'],
              ['Am Samstag', 'will', 'ich Rad', 'fahren.'],
              ['Jonas', 'muss', 'die Wohnung', 'aufräumen.'],
              ['', 'Kannst', 'du Gitarre', 'spielen?'],
            ],
          },
        },
        {
          id: 'b6-3-cloze-modal',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die richtige Form.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Ich ' },
            { kind: 'GAP', gapId: 'm1', solution: ['kann'], hint: 'können', width: 6 },
            { kind: 'TEXT', text: ' nicht gut kochen.\n2. ' },
            { kind: 'GAP', gapId: 'm2', solution: ['Willst'], hint: 'wollen', width: 7 },
            { kind: 'TEXT', text: ' du am Sonntag wandern?\n3. Maria ' },
            { kind: 'GAP', gapId: 'm3', solution: ['muss'], hint: 'müssen', width: 6 },
            { kind: 'TEXT', text: ' heute lange arbeiten.\n4. Wir ' },
            { kind: 'GAP', gapId: 'm4', solution: ['wollen'], hint: 'wollen', width: 7 },
            { kind: 'TEXT', text: ' ins Kino gehen.\n5. ' },
            { kind: 'GAP', gapId: 'm5', solution: ['Könnt', 'Koennt'], hint: 'können', width: 6 },
            { kind: 'TEXT', text: ' ihr Deutsch sprechen?' },
          ],
        },
        {
          id: 'b6-3-choice-bedeutung',
          type: 'CHOICE',
          instruction: '„Ich habe morgen eine Prüfung. Heute Abend ___ ich lernen.“ Was passt am besten?',
          multiple: false,
          options: [
            { id: 'b1', text: 'kann' },
            { id: 'b2', text: 'muss' },
            { id: 'b3', text: 'will' },
          ],
          solution: ['b2'],
          explanation:
            'Vor einer Prüfung ist Lernen eine Pflicht – deshalb „müssen“. „können“ wäre eine Fähigkeit, „wollen“ ein Wunsch.',
          explanationTranslations: {
            en: 'Before an exam, studying is an obligation – hence „müssen“. „können“ would be an ability, „wollen“ a wish.',
            es: 'Antes de un examen, estudiar es una obligación – por eso „müssen“. „können“ sería una capacidad, „wollen“ un deseo.',
            fr: 'Avant un examen, réviser est une obligation – d’où « müssen ». « können » serait une capacité, « wollen » un souhait.',
            it: 'Prima di un esame, studiare è un obbligo – per questo „müssen“. „können“ sarebbe una capacità, „wollen“ un desiderio.',
          },
        },
        {
          id: 'b6-3-order',
          type: 'ORDERING',
          instruction: 'Bilden Sie einen Satz.',
          items: [
            { id: 'w1', text: 'Am' },
            { id: 'w2', text: 'Wochenende' },
            { id: 'w3', text: 'will' },
            { id: 'w4', text: 'ich' },
            { id: 'w5', text: 'Freunde' },
            { id: 'w6', text: 'treffen.' },
          ],
          solution: ['w1', 'w2', 'w3', 'w4', 'w5', 'w6'],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – etwas vorschlagen, annehmen, ablehnen.
  {
    order: 4,
    title: 'Wollen wir …?',
    subtitle: 'Vorschlagen und ablehnen',
    estimatedMinutes: 20,
    content: {
      version: v,
      blocks: [
        { id: 'b6-4-h1', type: 'HEADING', level: 1, text: 'Wollen wir …?' },
        {
          id: 'b6-4-image',
          type: 'IMAGE',
          url: 'illustration:fiesta-lights',
          alt: 'Lichterketten über einem Platz am Abend, Menschen stehen in kleinen Gruppen zusammen.',
          caption: 'Ein Stadtfest am Samstagabend.',
        },
        {
          id: 'b6-4-dlg',
          type: 'DIALOGUE',
          title: 'Nachrichten am Freitag',
          lines: [
            { speaker: 'Jonas', text: 'Hey Samir! Am Samstag ist Stadtfest. Wollen wir zusammen hingehen?' },
            { speaker: 'Samir', text: 'Gute Idee! Aber am Nachmittag kann ich nicht, da muss ich arbeiten.' },
            { speaker: 'Jonas', text: 'Kein Problem. Hast du am Abend Lust?' },
            { speaker: 'Samir', text: 'Ja, am Abend kann ich. Um acht?' },
            { speaker: 'Jonas', text: 'Super. Und am Sonntag? Wollen wir wandern gehen?' },
            { speaker: 'Samir', text: 'Tut mir leid, am Sonntag besuche ich meine Tante.' },
          ],
        },
        {
          id: 'b6-4-info-redemittel',
          type: 'INFO',
          variant: 'TIP',
          title: 'Vorschläge machen und beantworten',
          text: 'Mit „Wollen wir …?“ oder „Hast du Lust …?“ schlägt man etwas vor. Wer ablehnt, sagt meistens, warum – oft mit „müssen“ oder „können“.',
          translations: {
            en: {
              title: 'Making and answering suggestions',
              text: 'With „Wollen wir …?“ (shall we …?) or „Hast du Lust …?“ (do you fancy …?) you suggest something. When declining, people usually say why – often with „müssen“ or „können“.',
            },
            es: {
              title: 'Hacer y responder propuestas',
              text: 'Con „Wollen wir …?“ (¿vamos a …?) o „Hast du Lust …?“ (¿te apetece …?) se propone algo. Quien rechaza suele decir por qué – a menudo con „müssen“ o „können“.',
            },
            fr: {
              title: 'Faire une proposition et y répondre',
              text: 'Avec « Wollen wir …? » (on …?) ou « Hast du Lust …? » (ça te dit de …?), on propose quelque chose. Quand on refuse, on dit généralement pourquoi – souvent avec « müssen » ou « können ».',
            },
            it: {
              title: 'Fare proposte e rispondere',
              text: 'Con „Wollen wir …?“ (che ne dici se …?) o „Hast du Lust …?“ (ti va di …?) si propone qualcosa. Chi rifiuta di solito dice perché – spesso con „müssen“ o „können“.',
            },
          },
          table: {
            headers: ['vorschlagen', 'ja', 'nein'],
            rows: [
              ['Wollen wir … gehen?', 'Gute Idee!', 'Tut mir leid, ich kann nicht.'],
              ['Hast du Lust auf …?', 'Ja, gern!', 'Leider nicht, ich muss arbeiten.'],
              ['Kommst du mit?', 'Klar, warum nicht?', 'Nein, ich habe keine Lust.'],
            ],
          },
        },
        {
          id: 'b6-4-match',
          type: 'MATCHING',
          instruction: 'Welche Antwort passt zum Vorschlag?',
          left: [
            { id: 'l1', text: 'Wollen wir schwimmen gehen?' },
            { id: 'l2', text: 'Hast du Lust auf Pizza?' },
            { id: 'l3', text: 'Kommst du am Samstag mit ins Kino?' },
          ],
          right: [
            { id: 'r1', text: 'Nein, das Wasser ist mir zu kalt.' },
            { id: 'r2', text: 'Nein danke, ich habe keinen Hunger.' },
            { id: 'r3', text: 'Am Samstag kann ich nicht, da besuche ich meine Eltern.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
          ],
        },
        {
          id: 'b6-4-choice',
          type: 'CHOICE',
          instruction: 'Was machen Jonas und Samir am Wochenende? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'c1', text: 'Sie gehen am Samstagabend zum Stadtfest.' },
            { id: 'c2', text: 'Samir arbeitet am Samstagnachmittag.' },
            { id: 'c3', text: 'Sie wandern am Sonntag zusammen.' },
            { id: 'c4', text: 'Samir besucht am Sonntag seine Tante.' },
          ],
          solution: ['c1', 'c2', 'c4'],
          explanation:
            'Am Sonntag kann Samir nicht wandern – er besucht seine Tante.',
          explanationTranslations: {
            en: 'Samir can’t go hiking on Sunday – he is visiting his aunt.',
            es: 'El domingo Samir no puede ir de excursión: visita a su tía.',
            fr: 'Dimanche, Samir ne peut pas aller randonner : il rend visite à sa tante.',
            it: 'Domenica Samir non può fare escursioni: va a trovare sua zia.',
          },
        },
        {
          id: 'b6-4-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die Nachricht.',
          wordBank: ['Lust', 'wollen', 'muss', 'kann'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Hallo Elif, hast du ' },
            { kind: 'GAP', gapId: 'n1', solution: ['Lust'], width: 5 },
            { kind: 'TEXT', text: ' auf Kaffee? Wir ' },
            { kind: 'GAP', gapId: 'n2', solution: ['wollen'], width: 7 },
            { kind: 'TEXT', text: ' um vier ins Café Lindner gehen. Ich ' },
            { kind: 'GAP', gapId: 'n3', solution: ['muss'], width: 5 },
            { kind: 'TEXT', text: ' leider um sechs nach Hause, aber bis dahin ' },
            { kind: 'GAP', gapId: 'n4', solution: ['kann'], width: 5 },
            { kind: 'TEXT', text: ' ich. Liebe Grüße, Mira' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – Rückblick auf Kapitel 6 und damit auf A1.
  {
    order: 5,
    title: 'Kannst du das schon?',
    subtitle: 'Rückblick auf das ganze Kapitel',
    estimatedMinutes: 15,
    content: {
      version: v,
      blocks: [
        { id: 'b6-5-h1', type: 'HEADING', level: 1, text: 'Kannst du das schon?' },
        {
          id: 'b6-5-intro',
          type: 'TEXT',
          text: 'Das ist die letzte Seite der Stufe A1. Prüfen Sie, was Sie aus Kapitel 6 mitnehmen. Am Ende schreiben Sie eine Einladung.',
          translations: {
            en: 'This is the last page of level A1. Check what you take away from Chapter 6. At the end, you’ll write an invitation.',
            es: 'Esta es la última página del nivel A1. Compruebe qué se lleva del Capítulo 6. Al final escribirá una invitación.',
            fr: 'Voici la dernière page du niveau A1. Vérifiez ce que vous retenez du chapitre 6. À la fin, vous écrirez une invitation.',
            it: 'Questa è l’ultima pagina del livello A1. Verifichi cosa porta a casa dal Capitolo 6. Alla fine scriverà un invito.',
          },
        },
        {
          id: 'b6-5-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie das Gespräch.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '▸ Kann ich die Hose ' },
            { kind: 'GAP', gapId: 'r1', solution: ['anprobieren'], width: 12 },
            { kind: 'TEXT', text: '?\n▸ Ja, natürlich. Welche ' },
            { kind: 'GAP', gapId: 'r2', solution: ['Größe', 'Groesse'], width: 7 },
            { kind: 'TEXT', text: ' haben Sie?\n▸ 40. … Hm, sie ' },
            { kind: 'GAP', gapId: 'r3', solution: ['passt'], width: 6 },
            { kind: 'TEXT', text: ' nicht, sie ist zu klein.\n▸ Hier ist Größe 42. ' },
            { kind: 'GAP', gapId: 'r4', solution: ['Gefällt', 'Gefaellt'], width: 8 },
            { kind: 'TEXT', text: ' Ihnen die Farbe?' },
          ],
        },
        {
          id: 'b6-5-choice',
          type: 'CHOICE',
          instruction: 'Welche Sätze sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'k1', text: 'Ich kann gut tanzen.' },
            { id: 'k2', text: 'Er muss arbeitet heute.' },
            { id: 'k3', text: 'Willst du mitkommen?' },
            { id: 'k4', text: 'Wir können schwimmen gehen am Sonntag.' },
          ],
          solution: ['k1', 'k3'],
          explanation:
            'Nach einem Modalverb steht das zweite Verb im Infinitiv ganz am Ende: Er muss heute arbeiten. Wir können am Sonntag schwimmen gehen.',
          explanationTranslations: {
            en: 'After a modal verb, the second verb goes in the infinitive at the very end: Er muss heute arbeiten. Wir können am Sonntag schwimmen gehen.',
            es: 'Después de un verbo modal, el segundo verbo va en infinitivo al final: Er muss heute arbeiten. Wir können am Sonntag schwimmen gehen.',
            fr: 'Après un verbe de modalité, le second verbe se met à l’infinitif tout à la fin : Er muss heute arbeiten. Wir können am Sonntag schwimmen gehen.',
            it: 'Dopo un verbo modale, il secondo verbo va all’infinito alla fine: Er muss heute arbeiten. Wir können am Sonntag schwimmen gehen.',
          },
        },
        {
          id: 'b6-5-match',
          type: 'MATCHING',
          instruction: 'können, wollen oder müssen? Ordnen Sie zu.',
          left: [
            { id: 'm1', text: 'Ich spreche drei Sprachen.' },
            { id: 'm2', text: 'Ich habe einen Plan für den Sommer.' },
            { id: 'm3', text: 'Mein Chef sagt: „Das ist Ihre Aufgabe.“' },
          ],
          right: [
            { id: 'y1', text: 'Ich kann Französisch, Englisch und Deutsch.' },
            { id: 'y2', text: 'Ich will nach Italien fahren.' },
            { id: 'y3', text: 'Ich muss den Bericht schreiben.' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'y1' },
            { leftId: 'm2', rightId: 'y2' },
            { leftId: 'm3', rightId: 'y3' },
          ],
        },
        {
          id: 'b6-5-writing',
          type: 'WRITING',
          instruction: 'Eine Einladung',
          prompt:
            'Schreiben Sie einer Freundin oder einem Freund eine Nachricht: Was wollen Sie am Wochenende zusammen machen? Wann und wo? Was können oder müssen Sie vorher noch tun?',
          minWords: 25,
          maxWords: 100,
          aiFeedback: true,
          sampleAnswer:
            'Hallo Lukas, hast du am Samstag Zeit? Ich will auf den Flohmarkt gehen. Ich brauche eine Jacke und vielleicht Schuhe. Kommst du mit? Am Vormittag muss ich noch einkaufen, aber um zwei Uhr kann ich. Wollen wir uns am Rathaus treffen? Viele Grüße, Anna',
        },
      ],
    },
  },
];
