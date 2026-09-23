import type { UnitSeed } from './chapter-beginner-1';

/**
 * Grammatik, Kapitel 7: „Nebensätze und Konjunktionen“ (ab B1)
 *
 * Drei Seiten, gebaut wie die Kapitel davor.
 *
 * Seite 1 klärt den Unterschied, an dem alles hängt: Konnektoren, die das
 * Verb auf Position 2 lassen (und, aber, oder, denn, sondern), und
 * Subjunktionen, die es ans Ende schicken (dass, weil, ob …) – samt dem
 * Nebensatz am Satzanfang, nach dem das Verb des Hauptsatzes sofort folgt.
 * Seite 2 ordnet die Subjunktionen nach Bedeutung: Grund, Bedingung, Zeit,
 * Gegensatz. Seite 3 bringt die Relativsätze im Überblick; im Kursbuch stehen
 * sie in Intermediate, Kapitel 2, ausführlicher.
 *
 * Die Adverbien „deshalb“ und „trotzdem“ tauchen nur als Abgrenzung auf: Sie
 * stehen auf Position 1 eines Hauptsatzes und sind keine Konjunktionen, auch
 * wenn sie dasselbe bedeuten wie „weil“ und „obwohl“.
 *
 * Erklärungen übersetzt, Tabellen unübersetzt – wie in Kapitel 1.
 */
const v = 1;

export const GRAMMAR_7_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Hauptsatz und Nebensatz.
  {
    order: 1,
    title: 'Hauptsatz und Nebensatz',
    subtitle: 'Wann das Verb ans Ende geht',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'g7-1-h1', type: 'HEADING', level: 1, text: 'Hauptsatz und Nebensatz' },
        {
          id: 'g7-1-intro',
          type: 'TEXT',
          text: 'Ein Hauptsatz kann allein stehen, das Verb steht auf Position 2. Ein Nebensatz hängt an einem Hauptsatz und beginnt mit einer Subjunktion wie „dass“, „weil“ oder „ob“ – das konjugierte Verb steht dann ganz am Ende. Ob ein Satz ein Nebensatz wird, entscheidet also das Wort, das ihn einleitet.',
          translations: {
            en: 'A main clause can stand on its own; the verb is in position 2. A subordinate clause depends on a main clause and begins with a subordinating conjunction such as „dass“, „weil“ or „ob“ – the conjugated verb then goes right to the end. So whether a clause becomes subordinate depends on the word that introduces it.',
            es: 'Una oración principal puede ir sola; el verbo está en la posición 2. Una subordinada depende de una principal y empieza con una conjunción subordinante como „dass“, „weil“ u „ob“; entonces el verbo conjugado va al final. Si una oración es subordinada lo decide, por tanto, la palabra que la introduce.',
            fr: 'Une proposition principale peut être seule ; le verbe est en position 2. Une subordonnée dépend d’une principale et commence par une conjonction de subordination comme « dass », « weil » ou « ob » – le verbe conjugué se place alors tout à la fin. C’est donc le mot qui l’introduit qui décide si une proposition est subordonnée.',
            it: 'Una frase principale può stare da sola; il verbo è in posizione 2. Una subordinata dipende da una principale e comincia con una congiunzione subordinante come „dass“, „weil“ o „ob“ – il verbo coniugato va allora alla fine. Se una frase è subordinata lo decide quindi la parola che la introduce.',
          },
        },
        {
          id: 'g7-1-info-konnektoren',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Zwei Gruppen von Verbindungswörtern',
          text: '„und“, „aber“, „oder“, „denn“ und „sondern“ verbinden zwei Hauptsätze. Sie stehen auf „Position 0“ – außerhalb des Satzes – und ändern nichts an der Wortstellung. Subjunktionen wie „dass“, „weil“, „wenn“, „ob“, „obwohl“ leiten einen Nebensatz ein: Das Verb wandert ans Ende.',
          translations: {
            en: {
              title: 'Two groups of linking words',
              text: '„und“, „aber“, „oder“, „denn“ and „sondern“ join two main clauses. They sit in „position 0“ – outside the clause – and change nothing about word order. Subordinating conjunctions such as „dass“, „weil“, „wenn“, „ob“, „obwohl“ introduce a subordinate clause: the verb moves to the end.',
            },
            es: {
              title: 'Dos grupos de conectores',
              text: '„und“, „aber“, „oder“, „denn“ y „sondern“ unen dos oraciones principales. Ocupan la „posición 0“ – fuera de la oración – y no cambian el orden de las palabras. Las conjunciones subordinantes como „dass“, „weil“, „wenn“, „ob“, „obwohl“ introducen una subordinada: el verbo pasa al final.',
            },
            fr: {
              title: 'Deux groupes de mots de liaison',
              text: '« und », « aber », « oder », « denn » et « sondern » relient deux principales. Ils occupent la « position 0 » – hors de la proposition – et ne changent rien à l’ordre des mots. Les conjonctions de subordination comme « dass », « weil », « wenn », « ob », « obwohl » introduisent une subordonnée : le verbe part à la fin.',
            },
            it: {
              title: 'Due gruppi di connettivi',
              text: '„und“, „aber“, „oder“, „denn“ e „sondern“ collegano due frasi principali. Stanno in „posizione 0“ – fuori dalla frase – e non cambiano l’ordine delle parole. Le congiunzioni subordinanti come „dass“, „weil“, „wenn“, „ob“, „obwohl“ introducono una subordinata: il verbo va alla fine.',
            },
          },
          table: {
            headers: ['Verbindung', 'Beispiel'],
            rows: [
              ['Position 0 (und, aber, denn …)', 'Ich bleibe zu Hause, denn ich bin müde.'],
              ['Subjunktion (weil, dass …)', 'Ich bleibe zu Hause, weil ich müde bin.'],
              ['Nebensatz mit Modalverb', 'Ich bleibe zu Hause, weil ich arbeiten muss.'],
              ['Nebensatz im Perfekt', 'Ich bleibe zu Hause, weil ich schlecht geschlafen habe.'],
              ['trennbares Verb', 'Ich weiß nicht, wann der Film anfängt.'],
            ],
          },
        },
        {
          id: 'g7-1-info-vorn',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Der Nebensatz am Anfang',
          text: 'Ein Nebensatz kann vor dem Hauptsatz stehen. Dann besetzt er Position 1 – und das Verb des Hauptsatzes folgt sofort nach dem Komma: Weil ich müde bin, bleibe ich zu Hause. So stehen zwei Verben direkt nebeneinander.',
          translations: {
            en: {
              title: 'The subordinate clause first',
              text: 'A subordinate clause can come before the main clause. It then fills position 1 – and the verb of the main clause follows straight after the comma: Weil ich müde bin, bleibe ich zu Hause. So two verbs stand right next to each other.',
            },
            es: {
              title: 'La subordinada al principio',
              text: 'La subordinada puede ir delante de la principal. Entonces ocupa la posición 1 y el verbo de la principal sigue justo después de la coma: Weil ich müde bin, bleibe ich zu Hause. Así quedan dos verbos juntos.',
            },
            fr: {
              title: 'La subordonnée en tête',
              text: 'Une subordonnée peut précéder la principale. Elle occupe alors la position 1 – et le verbe de la principale suit juste après la virgule : Weil ich müde bin, bleibe ich zu Hause. Deux verbes se retrouvent ainsi côte à côte.',
            },
            it: {
              title: 'La subordinata all’inizio',
              text: 'Una subordinata può stare prima della principale. Allora occupa la posizione 1 – e il verbo della principale segue subito dopo la virgola: Weil ich müde bin, bleibe ich zu Hause. Così due verbi stanno uno accanto all’altro.',
            },
          },
        },
        {
          id: 'g7-1-choice',
          type: 'CHOICE',
          instruction: 'Welche Sätze sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'c1', text: 'Ich komme nicht mit, denn ich habe keine Zeit.' },
            { id: 'c2', text: 'Ich komme nicht mit, denn ich keine Zeit habe.' },
            { id: 'c3', text: 'Wenn du Zeit hast, kannst du mitkommen.' },
            { id: 'c4', text: 'Wenn du Zeit hast, du kannst mitkommen.' },
          ],
          solution: ['c1', 'c3'],
          explanation:
            '„denn“ steht auf Position 0 und ändert die Wortstellung nicht. Steht der Nebensatz vorn, folgt direkt das Verb des Hauptsatzes: …, kannst du mitkommen.',
          explanationTranslations: {
            en: '„denn“ is in position 0 and doesn’t change the word order. If the subordinate clause comes first, the verb of the main clause follows immediately: …, kannst du mitkommen.',
            es: '„denn“ ocupa la posición 0 y no cambia el orden. Si la subordinada va delante, sigue directamente el verbo de la principal: …, kannst du mitkommen.',
            fr: '« denn » est en position 0 et ne change pas l’ordre des mots. Si la subordonnée est en tête, le verbe de la principale suit immédiatement : …, kannst du mitkommen.',
            it: '„denn“ sta in posizione 0 e non cambia l’ordine delle parole. Se la subordinata è all’inizio, segue subito il verbo della principale: …, kannst du mitkommen.',
          },
        },
        {
          id: 'g7-1-cloze',
          type: 'CLOZE',
          instruction: 'Verbinden Sie die Sätze mit „weil“. Ergänzen Sie den Nebensatz.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Ich lerne Deutsch. Ich möchte in Wien studieren. → Ich lerne Deutsch, weil ich in Wien ' },
            { kind: 'GAP', gapId: 'w1', solution: ['studieren möchte'], width: 17 },
            { kind: 'TEXT', text: '.\n2. Sie ist spät gekommen. Der Bus hatte Verspätung. → Sie ist spät gekommen, weil der Bus Verspätung ' },
            { kind: 'GAP', gapId: 'w2', solution: ['hatte'], width: 6 },
            { kind: 'TEXT', text: '.\n3. Wir bleiben zu Hause. Es regnet. → Weil es ' },
            { kind: 'GAP', gapId: 'w3', solution: ['regnet, bleiben wir', 'regnet bleiben wir'], width: 20 },
            { kind: 'TEXT', text: ' zu Hause.\n4. Er ist müde. Er ist früh aufgestanden. → Er ist müde, weil er früh ' },
            { kind: 'GAP', gapId: 'w4', solution: ['aufgestanden ist'], width: 17 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'g7-1-order-1',
          type: 'ORDERING',
          instruction: 'Bilden Sie einen Satz mit „dass“.',
          items: [
            { id: 'a1', text: 'Ich' },
            { id: 'a2', text: 'glaube,' },
            { id: 'a3', text: 'dass' },
            { id: 'a4', text: 'der Laden' },
            { id: 'a5', text: 'heute' },
            { id: 'a6', text: 'geschlossen' },
            { id: 'a7', text: 'ist.' },
          ],
          solution: ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7'],
        },
        {
          id: 'g7-1-order-2',
          type: 'ORDERING',
          instruction: 'Beginnen Sie mit dem Nebensatz.',
          items: [
            { id: 'b1', text: 'Wenn' },
            { id: 'b2', text: 'ich' },
            { id: 'b3', text: 'fertig bin,' },
            { id: 'b4', text: 'rufe' },
            { id: 'b5', text: 'ich' },
            { id: 'b6', text: 'dich an.' },
          ],
          solution: ['b1', 'b2', 'b3', 'b4', 'b5', 'b6'],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – Subjunktionen nach Bedeutung.
  {
    order: 2,
    title: 'Grund, Bedingung, Zeit, Gegensatz',
    subtitle: 'Subjunktionen nach ihrer Bedeutung',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'g7-2-h1', type: 'HEADING', level: 1, text: 'Grund, Bedingung, Zeit, Gegensatz' },
        {
          id: 'g7-2-intro',
          type: 'TEXT',
          text: 'Die Wortstellung ist bei allen Subjunktionen gleich – das Verb steht am Ende. Unterschiedlich ist nur die Bedeutung. Deshalb lernt man sie am besten in Gruppen: Womit nenne ich einen Grund, womit eine Bedingung, womit eine Zeit, womit einen Gegensatz?',
          translations: {
            en: 'Word order is the same with every subordinating conjunction – the verb goes to the end. Only the meaning differs. That’s why it’s best to learn them in groups: what do I use for a reason, a condition, a time, a contrast?',
            es: 'El orden es igual con todas las conjunciones subordinantes: el verbo va al final. Solo cambia el significado. Por eso conviene aprenderlas por grupos: ¿con qué expreso una causa, una condición, un tiempo, una oposición?',
            fr: 'L’ordre des mots est le même avec toutes les conjonctions de subordination – le verbe va à la fin. Seul le sens change. C’est pourquoi on les apprend mieux par groupes : avec quoi exprimer une cause, une condition, un moment, une opposition ?',
            it: 'L’ordine delle parole è uguale con tutte le congiunzioni subordinanti – il verbo va alla fine. Cambia solo il significato. Per questo conviene impararle a gruppi: con che cosa esprimo una causa, una condizione, un tempo, un contrasto?',
          },
        },
        {
          id: 'g7-2-info-bedeutung',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Die wichtigsten Subjunktionen',
          text: '„weil“ und „da“ nennen beide einen Grund; „da“ klingt etwas formeller und steht oft am Satzanfang. „denn“ bedeutet dasselbe, ist aber keine Subjunktion (Position 0). „falls“ betont stärker als „wenn“, dass die Bedingung vielleicht nicht eintritt. „während“ bedeutet „zur gleichen Zeit“.',
          translations: {
            en: {
              title: 'The most important subordinating conjunctions',
              text: '„weil“ and „da“ both give a reason; „da“ sounds a little more formal and often comes at the start of the sentence. „denn“ means the same but isn’t a subordinating conjunction (position 0). „falls“ stresses more than „wenn“ that the condition might not happen. „während“ means „at the same time“.',
            },
            es: {
              title: 'Las conjunciones subordinantes más importantes',
              text: '„weil“ y „da“ expresan causa; „da“ suena algo más formal y suele ir al principio. „denn“ significa lo mismo, pero no es subordinante (posición 0). „falls“ subraya más que „wenn“ que la condición quizá no se cumpla. „während“ significa „al mismo tiempo“.',
            },
            fr: {
              title: 'Les principales conjonctions de subordination',
              text: '« weil » et « da » expriment tous deux une cause ; « da » est un peu plus soutenu et se place souvent en tête. « denn » a le même sens mais n’est pas une conjonction de subordination (position 0). « falls » souligne plus que « wenn » que la condition ne se réalisera peut-être pas. « während » signifie « en même temps ».',
            },
            it: {
              title: 'Le congiunzioni subordinanti più importanti',
              text: '„weil“ e „da“ indicano entrambe una causa; „da“ è un po’ più formale e sta spesso all’inizio. „denn“ significa lo stesso, ma non è subordinante (posizione 0). „falls“ sottolinea più di „wenn“ che la condizione forse non si verificherà. „während“ significa „nello stesso momento“.',
            },
          },
          table: {
            headers: ['Bedeutung', 'Subjunktion', 'Beispiel'],
            rows: [
              ['Grund', 'weil, da', 'Da es spät ist, gehen wir.'],
              ['Bedingung', 'wenn, falls', 'Falls es regnet, nehmen wir den Bus.'],
              ['Zeit', 'als, wenn, während, bevor, nachdem, seit, bis', 'Bevor ich gehe, rufe ich dich an.'],
              ['Gegensatz', 'obwohl', 'Obwohl es kalt ist, gehen wir schwimmen.'],
              ['Ziel', 'damit (siehe auch: um … zu)', 'Ich spreche langsam, damit du mich verstehst.'],
              ['Inhalt', 'dass, ob, W-Wort', 'Ich weiß nicht, ob er kommt.'],
            ],
          },
        },
        {
          id: 'g7-2-info-adverb',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: '„deshalb“ und „trotzdem“ sind keine Subjunktionen',
          text: 'Sie drücken dasselbe aus wie „weil“ und „obwohl“, stehen aber in einem Hauptsatz – meist auf Position 1, gefolgt vom Verb. Vergleichen Sie: Weil es regnet, bleibe ich hier. – Es regnet. Deshalb bleibe ich hier.',
          translations: {
            en: {
              title: '„deshalb“ and „trotzdem“ are not subordinating conjunctions',
              text: 'They express the same as „weil“ and „obwohl“ but stand in a main clause – usually in position 1, followed by the verb. Compare: Weil es regnet, bleibe ich hier. – Es regnet. Deshalb bleibe ich hier.',
            },
            es: {
              title: '„deshalb“ y „trotzdem“ no son subordinantes',
              text: 'Expresan lo mismo que „weil“ y „obwohl“, pero van en una oración principal, normalmente en la posición 1, seguidos del verbo. Compare: Weil es regnet, bleibe ich hier. – Es regnet. Deshalb bleibe ich hier.',
            },
            fr: {
              title: '« deshalb » et « trotzdem » ne sont pas des conjonctions de subordination',
              text: 'Ils expriment la même chose que « weil » et « obwohl », mais se trouvent dans une principale – le plus souvent en position 1, suivis du verbe. Comparez : Weil es regnet, bleibe ich hier. – Es regnet. Deshalb bleibe ich hier.',
            },
            it: {
              title: '„deshalb“ e „trotzdem“ non sono congiunzioni subordinanti',
              text: 'Esprimono lo stesso di „weil“ e „obwohl“, ma stanno in una frase principale – di solito in posizione 1, seguiti dal verbo. Confronti: Weil es regnet, bleibe ich hier. – Es regnet. Deshalb bleibe ich hier.',
            },
          },
        },
        {
          id: 'g7-2-match',
          type: 'MATCHING',
          instruction: 'Welche Bedeutung hat der Nebensatz?',
          left: [
            { id: 'l1', text: '…, weil der Zug ausgefallen ist.' },
            { id: 'l2', text: '…, falls du Hilfe brauchst.' },
            { id: 'l3', text: '…, nachdem wir gegessen hatten.' },
            { id: 'l4', text: '…, obwohl er krank war.' },
          ],
          right: [
            { id: 'r1', text: 'Grund' },
            { id: 'r2', text: 'Bedingung' },
            { id: 'r3', text: 'Zeit' },
            { id: 'r4', text: 'Gegensatz' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'g7-2-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die passende Subjunktion.',
          wordBank: ['bevor', 'während', 'falls', 'obwohl', 'da', 'seit'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. ' },
            { kind: 'GAP', gapId: 's1', solution: ['Bevor'], width: 8 },
            { kind: 'TEXT', text: ' du gehst, mach bitte das Licht aus.\n2. ' },
            { kind: 'GAP', gapId: 's2', solution: ['Falls'], width: 8 },
            { kind: 'TEXT', text: ' Sie Fragen haben, schreiben Sie mir eine E-Mail.\n3. Ich höre Musik, ' },
            { kind: 'GAP', gapId: 's3', solution: ['während'], width: 8 },
            { kind: 'TEXT', text: ' ich koche.\n4. ' },
            { kind: 'GAP', gapId: 's4', solution: ['Da'], width: 8 },
            { kind: 'TEXT', text: ' die Straße gesperrt ist, müssen wir einen Umweg fahren.\n5. Sie ist zur Arbeit gegangen, ' },
            { kind: 'GAP', gapId: 's5', solution: ['obwohl'], width: 8 },
            { kind: 'TEXT', text: ' sie Fieber hatte.\n6. ' },
            { kind: 'GAP', gapId: 's6', solution: ['Seit'], width: 8 },
            { kind: 'TEXT', text: ' er in Hamburg wohnt, fährt er kein Auto mehr.' },
          ],
        },
        {
          id: 'g7-2-choice',
          type: 'CHOICE',
          instruction: 'Welche Sätze sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'c1', text: 'Es ist kalt. Deshalb ziehe ich eine Jacke an.' },
            { id: 'c2', text: 'Deshalb es kalt ist, ziehe ich eine Jacke an.' },
            { id: 'c3', text: 'Nachdem er die Prüfung bestanden hatte, feierte er mit Freunden.' },
            { id: 'c4', text: 'Ich warte hier, bis du kommst zurück.' },
          ],
          solution: ['c1', 'c3'],
          explanation:
            '„deshalb“ leitet keinen Nebensatz ein; es steht im Hauptsatz vor dem Verb. Im Nebensatz mit „bis“ steht das trennbare Verb zusammen am Ende: …, bis du zurückkommst.',
          explanationTranslations: {
            en: '„deshalb“ doesn’t introduce a subordinate clause; it stands in the main clause before the verb. In the clause with „bis“ the separable verb goes together at the end: …, bis du zurückkommst.',
            es: '„deshalb“ no introduce una subordinada; va en la principal delante del verbo. En la subordinada con „bis“, el verbo separable va junto al final: …, bis du zurückkommst.',
            fr: '« deshalb » n’introduit pas de subordonnée ; il se place dans la principale devant le verbe. Dans la subordonnée avec « bis », le verbe séparable se met en un seul mot à la fin : …, bis du zurückkommst.',
            it: '„deshalb“ non introduce una subordinata; sta nella principale davanti al verbo. Nella subordinata con „bis“ il verbo separabile va unito alla fine: …, bis du zurückkommst.',
          },
        },
        {
          id: 'g7-2-order',
          type: 'ORDERING',
          instruction: 'Bilden Sie einen Satz mit „nachdem“.',
          items: [
            { id: 'a1', text: 'Nachdem' },
            { id: 'a2', text: 'wir' },
            { id: 'a3', text: 'gefrühstückt' },
            { id: 'a4', text: 'hatten,' },
            { id: 'a5', text: 'gingen' },
            { id: 'a6', text: 'wir' },
            { id: 'a7', text: 'an den Strand.' },
          ],
          solution: ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7'],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – Relativsätze im Überblick.
  {
    order: 3,
    title: 'Relativsätze',
    subtitle: 'Nomen genauer beschreiben',
    estimatedMinutes: 29,
    content: {
      version: v,
      blocks: [
        { id: 'g7-3-h1', type: 'HEADING', level: 1, text: 'Relativsätze' },
        {
          id: 'g7-3-intro',
          type: 'TEXT',
          text: 'Auch der Relativsatz ist ein Nebensatz: Das Verb steht am Ende. Er beschreibt ein Nomen genauer und steht direkt dahinter – notfalls mitten im Hauptsatz, von zwei Kommas eingerahmt: Der Mann, der dort steht, ist mein Nachbar.',
          translations: {
            en: 'A relative clause is also a subordinate clause: the verb goes at the end. It describes a noun more precisely and comes directly after it – if necessary in the middle of the main clause, framed by two commas: Der Mann, der dort steht, ist mein Nachbar.',
            es: 'La oración de relativo también es subordinada: el verbo va al final. Describe con más precisión un sustantivo y va justo detrás de él, si hace falta en medio de la principal, entre dos comas: Der Mann, der dort steht, ist mein Nachbar.',
            fr: 'La relative est elle aussi une subordonnée : le verbe va à la fin. Elle précise un nom et se place juste après lui – au besoin au milieu de la principale, entre deux virgules : Der Mann, der dort steht, ist mein Nachbar.',
            it: 'Anche la relativa è una subordinata: il verbo va alla fine. Descrive meglio un sostantivo e sta subito dopo di esso – se necessario in mezzo alla principale, tra due virgole: Der Mann, der dort steht, ist mein Nachbar.',
          },
        },
        {
          id: 'g7-3-info-pronomen',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Das Relativpronomen',
          text: 'Genus und Zahl kommen vom Nomen, auf das es sich bezieht. Den Fall bestimmt die Rolle im Relativsatz: Subjekt → Nominativ, Akkusativobjekt → Akkusativ, nach einem Dativverb oder einer Dativpräposition → Dativ. Die Formen gleichen fast überall dem bestimmten Artikel – nur im Dativ Plural („denen“) und im Genitiv („dessen“, „deren“) nicht.',
          translations: {
            en: {
              title: 'The relative pronoun',
              text: 'Gender and number come from the noun it refers to. The case is set by its role in the relative clause: subject → nominative, direct object → accusative, after a dative verb or dative preposition → dative. The forms are almost everywhere the same as the definite article – except in the dative plural („denen“) and the genitive („dessen“, „deren“).',
            },
            es: {
              title: 'El pronombre relativo',
              text: 'El género y el número vienen del sustantivo al que se refiere. El caso lo decide su función en la relativa: sujeto → nominativo, complemento directo → acusativo, tras un verbo o una preposición de dativo → dativo. Las formas coinciden casi siempre con el artículo determinado, salvo en el dativo plural („denen“) y el genitivo („dessen“, „deren“).',
            },
            fr: {
              title: 'Le pronom relatif',
              text: 'Le genre et le nombre viennent du nom auquel il se rapporte. Le cas dépend de sa fonction dans la relative : sujet → nominatif, COD → accusatif, après un verbe ou une préposition au datif → datif. Les formes sont presque partout celles de l’article défini – sauf au datif pluriel (« denen ») et au génitif (« dessen », « deren »).',
            },
            it: {
              title: 'Il pronome relativo',
              text: 'Genere e numero vengono dal sostantivo a cui si riferisce. Il caso lo decide la funzione nella relativa: soggetto → nominativo, complemento oggetto → accusativo, dopo un verbo o una preposizione col dativo → dativo. Le forme coincidono quasi ovunque con l’articolo determinativo – tranne al dativo plurale („denen“) e al genitivo („dessen“, „deren“).',
            },
          },
          table: {
            headers: ['', 'maskulin', 'neutral', 'feminin', 'Plural'],
            rows: [
              ['Nominativ', 'der', 'das', 'die', 'die'],
              ['Akkusativ', 'den', 'das', 'die', 'die'],
              ['Dativ', 'dem', 'dem', 'der', 'denen'],
              ['Genitiv', 'dessen', 'dessen', 'deren', 'deren'],
            ],
          },
        },
        {
          id: 'g7-3-info-was-wo',
          type: 'INFO',
          variant: 'TIP',
          title: '„was“ und „wo“',
          text: 'Nach „alles“, „nichts“, „etwas“, „vieles“ und nach einem Superlativ steht „was“: Das ist alles, was ich weiß. Nach Orten kann statt „in dem / in der“ auch „wo“ stehen: die Stadt, wo ich wohne.',
          translations: {
            en: {
              title: '„was“ and „wo“',
              text: 'After „alles“, „nichts“, „etwas“, „vieles“ and after a superlative, use „was“: Das ist alles, was ich weiß. After places, „wo“ can replace „in dem / in der“: die Stadt, wo ich wohne.',
            },
            es: {
              title: '„was“ y „wo“',
              text: 'Tras „alles“, „nichts“, „etwas“, „vieles“ y tras un superlativo se usa „was“: Das ist alles, was ich weiß. Con lugares se puede usar „wo“ en vez de „in dem / in der“: die Stadt, wo ich wohne.',
            },
            fr: {
              title: '« was » et « wo »',
              text: 'Après « alles », « nichts », « etwas », « vieles » et après un superlatif, on emploie « was » : Das ist alles, was ich weiß. Après un lieu, « wo » peut remplacer « in dem / in der » : die Stadt, wo ich wohne.',
            },
            it: {
              title: '„was“ e „wo“',
              text: 'Dopo „alles“, „nichts“, „etwas“, „vieles“ e dopo un superlativo si usa „was“: Das ist alles, was ich weiß. Con i luoghi si può usare „wo“ invece di „in dem / in der“: die Stadt, wo ich wohne.',
            },
          },
        },
        {
          id: 'g7-3-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie das Relativpronomen.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Das ist die Kollegin, ' },
            { kind: 'GAP', gapId: 'r1', solution: ['die'], width: 6 },
            { kind: 'TEXT', text: ' mir immer hilft.\n2. Der Film, ' },
            { kind: 'GAP', gapId: 'r2', solution: ['den'], width: 6 },
            { kind: 'TEXT', text: ' wir gestern gesehen haben, war lang.\n3. Die Kinder, ' },
            { kind: 'GAP', gapId: 'r3', solution: ['denen'], width: 6 },
            { kind: 'TEXT', text: ' ich Nachhilfe gebe, sind sehr fleißig.\n4. Das Hotel, ' },
            { kind: 'GAP', gapId: 'r4', solution: ['in dem', 'wo'], width: 7 },
            { kind: 'TEXT', text: ' wir übernachtet haben, lag direkt am See.\n5. Der Autor, ' },
            { kind: 'GAP', gapId: 'r5', solution: ['dessen'], width: 7 },
            { kind: 'TEXT', text: ' Buch ich lese, kommt aus Zürich.\n6. Das ist das Beste, ' },
            { kind: 'GAP', gapId: 'r6', solution: ['was'], width: 5 },
            { kind: 'TEXT', text: ' ich je gegessen habe.' },
          ],
        },
        {
          id: 'g7-3-choice',
          type: 'CHOICE',
          instruction: 'Welche Sätze sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'c1', text: 'Die Frau, mit der ich telefoniert habe, war sehr freundlich.' },
            { id: 'c2', text: 'Die Frau, mit die ich telefoniert habe, war sehr freundlich.' },
            { id: 'c3', text: 'Es gibt nichts, das ich lieber mache.' },
            { id: 'c4', text: 'Es gibt nichts, was ich lieber mache.' },
          ],
          solution: ['c1', 'c4'],
          explanation:
            '„mit“ verlangt immer den Dativ: mit der. Nach „nichts“ steht als Relativpronomen „was“.',
          explanationTranslations: {
            en: '„mit“ always takes the dative: mit der. After „nichts“ the relative pronoun is „was“.',
            es: '„mit“ rige siempre dativo: mit der. Tras „nichts“ el relativo es „was“.',
            fr: '« mit » est toujours suivi du datif : mit der. Après « nichts », le pronom relatif est « was ».',
            it: '„mit“ vuole sempre il dativo: mit der. Dopo „nichts“ il pronome relativo è „was“.',
          },
        },
        {
          id: 'g7-3-order',
          type: 'ORDERING',
          instruction: 'Bilden Sie einen Satz. Der Relativsatz steht in der Mitte.',
          items: [
            { id: 'a1', text: 'Der Zug,' },
            { id: 'a2', text: 'auf den' },
            { id: 'a3', text: 'wir' },
            { id: 'a4', text: 'warten,' },
            { id: 'a5', text: 'hat' },
            { id: 'a6', text: 'zehn Minuten' },
            { id: 'a7', text: 'Verspätung.' },
          ],
          solution: ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7'],
        },
        {
          id: 'g7-3-writing',
          type: 'WRITING',
          instruction: 'Ein Ort, den ich mag',
          prompt:
            'Beschreiben Sie in vier bis sechs Sätzen einen Ort, an dem Sie gern sind. Verwenden Sie mindestens zwei Relativsätze und zwei verschiedene Subjunktionen (zum Beispiel weil, wenn, obwohl, während).',
          minWords: 40,
          maxWords: 120,
          aiFeedback: true,
          sampleAnswer:
            'Mein Lieblingsort ist ein kleines Café, das in einer ruhigen Seitenstraße liegt. Ich gehe oft dorthin, wenn ich lesen möchte. Die Besitzerin, die aus Portugal kommt, backt jeden Morgen frische Kuchen. Obwohl das Café sehr klein ist, findet man fast immer einen Platz. Am liebsten sitze ich am Fenster, weil man von dort die Menschen auf der Straße beobachten kann.',
        },
      ],
    },
  },
];
