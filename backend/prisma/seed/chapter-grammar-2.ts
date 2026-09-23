import type { UnitSeed } from './chapter-beginner-1';

/**
 * Grammatik, Kapitel 2: „Die vier Fälle“
 *
 * Drei Seiten, gebaut wie Kapitel 1: Regel, Tabelle, gleich danach die
 * Aufgabe dazu.
 *
 * Die Fälle stehen nicht in der Schulreihenfolge Nominativ–Genitiv–Dativ–
 * Akkusativ, sondern in der Reihenfolge, in der man sie braucht: Nominativ
 * und Akkusativ zuerst (Subjekt und direktes Objekt, Kursbuch Kapitel 3),
 * dann der Dativ (Präpositionen, Kursbuch Kapitel 4, und „gefallen“, Kapitel
 * 6), zuletzt der Genitiv, den man im Gespräch meist durch „von“ ersetzt.
 * Die Gesamttabelle kommt am Ende, wenn jede ihrer Zeilen schon einmal
 * erklärt war.
 *
 * Erklärungen übersetzt, Tabellen unübersetzt – wie in Kapitel 1.
 */
const v = 1;

export const GRAMMAR_2_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – wer tut etwas, und mit wem oder was?
  {
    order: 1,
    title: 'Nominativ und Akkusativ',
    subtitle: 'Subjekt und direktes Objekt',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'g2-1-h1', type: 'HEADING', level: 1, text: 'Nominativ und Akkusativ' },
        {
          id: 'g2-1-intro',
          type: 'TEXT',
          text: 'Im Deutschen kann man sagen „Der Hund sieht den Mann“ und „Den Mann sieht der Hund“ – beide Sätze bedeuten dasselbe. Wer wen sieht, zeigt nicht die Reihenfolge, sondern der Artikel. Diese Formen des Artikels heißen Fälle.',
          translations: {
            en: 'In German you can say „Der Hund sieht den Mann“ and „Den Mann sieht der Hund“ – both mean the dog sees the man. Who sees whom is shown not by word order but by the article. These forms of the article are called cases.',
            es: 'En alemán se puede decir „Der Hund sieht den Mann“ y „Den Mann sieht der Hund“ – las dos frases significan que el perro ve al hombre. Quién ve a quién no lo indica el orden, sino el artículo. Estas formas del artículo se llaman casos.',
            fr: 'En allemand, on peut dire « Der Hund sieht den Mann » et « Den Mann sieht der Hund » – les deux signifient que le chien voit l’homme. Ce n’est pas l’ordre des mots qui indique qui voit qui, mais l’article. Ces formes de l’article s’appellent des cas.',
            it: 'In tedesco si può dire „Der Hund sieht den Mann“ e „Den Mann sieht der Hund“ – entrambe significano che il cane vede l’uomo. Chi vede chi non lo indica l’ordine delle parole, ma l’articolo. Queste forme dell’articolo si chiamano casi.',
          },
        },
        {
          id: 'g2-1-info-fragen',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Wer? – Nominativ. Wen oder was? – Akkusativ.',
          text: 'Das Subjekt steht im Nominativ: Es ist die Person oder Sache, die etwas tut. Man fragt „Wer?“ oder „Was?“. Das direkte Objekt steht im Akkusativ: Mit ihm wird etwas getan. Man fragt „Wen?“ oder „Was?“.',
          translations: {
            en: {
              title: 'Who? – nominative. Whom or what? – accusative.',
              text: 'The subject is in the nominative: it is the person or thing doing something. You ask „Wer?“ (who?) or „Was?“ (what?). The direct object is in the accusative: something is done to it. You ask „Wen?“ (whom?) or „Was?“.',
            },
            es: {
              title: '¿Quién? – nominativo. ¿A quién o qué? – acusativo.',
              text: 'El sujeto va en nominativo: es la persona o cosa que hace algo. Se pregunta „Wer?“ (¿quién?) o „Was?“ (¿qué?). El complemento directo va en acusativo: es aquello sobre lo que recae la acción. Se pregunta „Wen?“ (¿a quién?) o „Was?“.',
            },
            fr: {
              title: 'Qui ? – nominatif. Qui ou quoi ? – accusatif.',
              text: 'Le sujet est au nominatif : c’est la personne ou la chose qui fait l’action. On demande « Wer? » (qui ?) ou « Was? » (quoi ?). Le complément d’objet direct est à l’accusatif : c’est lui qui subit l’action. On demande « Wen? » (qui ?) ou « Was? ».',
            },
            it: {
              title: 'Chi? – nominativo. Chi o che cosa? – accusativo.',
              text: 'Il soggetto è al nominativo: è la persona o la cosa che compie l’azione. Si chiede „Wer?“ (chi?) o „Was?“ (che cosa?). Il complemento oggetto è all’accusativo: è ciò su cui ricade l’azione. Si chiede „Wen?“ (chi?) o „Was?“.',
            },
          },
          table: {
            headers: ['Nominativ (Wer?)', 'Verb', 'Akkusativ (Wen? Was?)'],
            rows: [
              ['Der Lehrer', 'fragt', 'den Schüler.'],
              ['Die Kinder', 'essen', 'einen Apfel.'],
              ['Meine Schwester', 'kauft', 'ein Fahrrad.'],
              ['Ich', 'suche', 'die Brille.'],
            ],
          },
        },
        {
          id: 'g2-1-choice-subjekt',
          type: 'CHOICE',
          instruction: '„Den Kuchen backt meine Oma.“ – Wer backt?',
          multiple: false,
          options: [
            { id: 's1', text: 'der Kuchen' },
            { id: 's2', text: 'meine Oma' },
            { id: 's3', text: 'Das kann man nicht sagen.' },
          ],
          solution: ['s2'],
          explanation:
            '„den Kuchen“ ist Akkusativ, also das Objekt. Das Subjekt ist „meine Oma“ – auch wenn es erst am Ende steht.',
          explanationTranslations: {
            en: '„den Kuchen“ is accusative, so it is the object. The subject is „meine Oma“ – even though it comes at the end.',
            es: '„den Kuchen“ está en acusativo, así que es el objeto. El sujeto es „meine Oma“, aunque vaya al final.',
            fr: '« den Kuchen » est à l’accusatif, c’est donc l’objet. Le sujet est « meine Oma » – même s’il est placé à la fin.',
            it: '„den Kuchen“ è all’accusativo, quindi è l’oggetto. Il soggetto è „meine Oma“, anche se sta alla fine.',
          },
        },
        {
          id: 'g2-1-info-artikel',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Die Artikel im Akkusativ',
          text: 'Zwischen Nominativ und Akkusativ unterscheidet sich nur das Maskulinum. Das gilt für alle Artikelwörter: der → den, ein → einen, kein → keinen, mein → meinen.',
          translations: {
            en: {
              title: 'Articles in the accusative',
              text: 'Only the masculine differs between nominative and accusative. This applies to all article words: der → den, ein → einen, kein → keinen, mein → meinen.',
            },
            es: {
              title: 'Los artículos en acusativo',
              text: 'Entre nominativo y acusativo solo cambia el masculino. Vale para todos los determinantes: der → den, ein → einen, kein → keinen, mein → meinen.',
            },
            fr: {
              title: 'Les articles à l’accusatif',
              text: 'Entre nominatif et accusatif, seul le masculin change. Cela vaut pour tous les déterminants : der → den, ein → einen, kein → keinen, mein → meinen.',
            },
            it: {
              title: 'Gli articoli all’accusativo',
              text: 'Tra nominativo e accusativo cambia solo il maschile. Vale per tutti i determinanti: der → den, ein → einen, kein → keinen, mein → meinen.',
            },
          },
          table: {
            headers: ['', 'männlich', 'weiblich', 'sächlich', 'Plural'],
            rows: [
              ['Nominativ', 'der / ein / mein', 'die / eine / meine', 'das / ein / mein', 'die / – / meine'],
              ['Akkusativ', 'den / einen / meinen', 'die / eine / meine', 'das / ein / mein', 'die / – / meine'],
            ],
          },
        },
        {
          id: 'g2-1-cloze',
          type: 'CLOZE',
          instruction: 'Nominativ oder Akkusativ? Ergänzen Sie der, den, die oder das.',
          wordBank: ['der', 'den', 'die', 'das'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. ' },
            { kind: 'GAP', gapId: 'c1', solution: ['Der'], width: 5 },
            { kind: 'TEXT', text: ' Mann liest eine Zeitung.\n2. Ich rufe ' },
            { kind: 'GAP', gapId: 'c2', solution: ['den'], width: 5 },
            { kind: 'TEXT', text: ' Arzt an.\n3. Wir besuchen ' },
            { kind: 'GAP', gapId: 'c3', solution: ['die'], width: 5 },
            { kind: 'TEXT', text: ' Großeltern.\n4. ' },
            { kind: 'GAP', gapId: 'c4', solution: ['Den'], width: 5 },
            { kind: 'TEXT', text: ' Film finde ich langweilig.\n5. ' },
            { kind: 'GAP', gapId: 'c5', solution: ['Das'], width: 5 },
            { kind: 'TEXT', text: ' Kind spielt im Garten.' },
          ],
        },
        {
          id: 'g2-1-choice-sein',
          type: 'CHOICE',
          instruction: 'Welcher Satz ist richtig?',
          multiple: false,
          options: [
            { id: 'n1', text: 'Das ist einen guten Freund.' },
            { id: 'n2', text: 'Das ist ein guter Freund.' },
            { id: 'n3', text: 'Das ist den Freund.' },
          ],
          solution: ['n2'],
          explanation:
            'Nach „sein“ steht nie ein Akkusativ, sondern ein zweiter Nominativ: Das ist ein Freund. Dasselbe gilt für „werden“ und „heißen“.',
          explanationTranslations: {
            en: '„sein“ is never followed by an accusative but by a second nominative: Das ist ein Freund. The same goes for „werden“ and „heißen“.',
            es: 'Después de „sein“ nunca va acusativo, sino un segundo nominativo: Das ist ein Freund. Lo mismo vale para „werden“ y „heißen“.',
            fr: 'Après « sein », on n’a jamais d’accusatif, mais un second nominatif : Das ist ein Freund. Il en va de même pour « werden » et « heißen ».',
            it: 'Dopo „sein“ non c’è mai l’accusativo, ma un secondo nominativo: Das ist ein Freund. Lo stesso vale per „werden“ e „heißen“.',
          },
        },
        {
          id: 'g2-1-info-praep',
          type: 'INFO',
          variant: 'TIP',
          title: 'Präpositionen mit Akkusativ',
          text: 'Nach diesen fünf Präpositionen steht immer der Akkusativ: durch, für, gegen, ohne, um. Ein Merksatz: „Durch für gegen ohne um – der Akkusativ ist nicht dumm.“',
          translations: {
            en: {
              title: 'Prepositions with the accusative',
              text: 'These five prepositions are always followed by the accusative: durch (through), für (for), gegen (against), ohne (without), um (around). A mnemonic: „Durch für gegen ohne um – der Akkusativ ist nicht dumm.“',
            },
            es: {
              title: 'Preposiciones con acusativo',
              text: 'Estas cinco preposiciones siempre llevan acusativo: durch (a través de), für (para), gegen (contra), ohne (sin), um (alrededor de). Una regla para recordarlo: „Durch für gegen ohne um – der Akkusativ ist nicht dumm.“',
            },
            fr: {
              title: 'Prépositions suivies de l’accusatif',
              text: 'Ces cinq prépositions sont toujours suivies de l’accusatif : durch (à travers), für (pour), gegen (contre), ohne (sans), um (autour de). Un moyen mnémotechnique : « Durch für gegen ohne um – der Akkusativ ist nicht dumm. »',
            },
            it: {
              title: 'Preposizioni con l’accusativo',
              text: 'Queste cinque preposizioni reggono sempre l’accusativo: durch (attraverso), für (per), gegen (contro), ohne (senza), um (intorno a). Una filastrocca per ricordarle: „Durch für gegen ohne um – der Akkusativ ist nicht dumm.“',
            },
          },
        },
        {
          id: 'g2-1-cloze-praep',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie den Artikel im Akkusativ.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Das Geschenk ist für ' },
            { kind: 'GAP', gapId: 'p1', solution: ['den'], width: 5 },
            { kind: 'TEXT', text: ' Vater. (der Vater)\n2. Wir gehen durch ' },
            { kind: 'GAP', gapId: 'p2', solution: ['den'], width: 5 },
            { kind: 'TEXT', text: ' Park. (der Park)\n3. Ich trinke Kaffee ohne ' },
            { kind: 'GAP', gapId: 'p3', solution: ['einen'], width: 6 },
            { kind: 'TEXT', text: ' Löffel Zucker. (ein Löffel)' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – der Dativ: wem?
  {
    order: 2,
    title: 'Der Dativ',
    subtitle: 'Wem? – das indirekte Objekt',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'g2-2-h1', type: 'HEADING', level: 1, text: 'Der Dativ' },
        {
          id: 'g2-2-intro',
          type: 'TEXT',
          text: 'Manche Verben brauchen zwei Objekte: „Ich gebe dem Kind einen Apfel.“ Der Apfel ist das, was man gibt (Akkusativ). Das Kind ist die Person, die etwas bekommt – sie steht im Dativ. Man fragt: „Wem?“',
          translations: {
            en: 'Some verbs need two objects: „Ich gebe dem Kind einen Apfel.“ (I give the child an apple.) The apple is what you give (accusative). The child is the person who receives something – it is in the dative. You ask: „Wem?“ (to whom?)',
            es: 'Algunos verbos necesitan dos objetos: „Ich gebe dem Kind einen Apfel.“ (Le doy una manzana al niño.) La manzana es lo que se da (acusativo). El niño es la persona que recibe algo – va en dativo. Se pregunta: „Wem?“ (¿a quién?)',
            fr: 'Certains verbes ont besoin de deux compléments : « Ich gebe dem Kind einen Apfel. » (Je donne une pomme à l’enfant.) La pomme est ce qu’on donne (accusatif). L’enfant est la personne qui reçoit – il est au datif. On demande : « Wem? » (à qui ?)',
            it: 'Alcuni verbi hanno bisogno di due complementi: „Ich gebe dem Kind einen Apfel.“ (Do una mela al bambino.) La mela è ciò che si dà (accusativo). Il bambino è la persona che riceve – va al dativo. Si chiede: „Wem?“ (a chi?)',
          },
        },
        {
          id: 'g2-2-info-dativ',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Die Artikel im Dativ',
          text: 'Im Dativ ändern sich alle Artikel. Männlich und sächlich enden auf -m, weiblich auf -r. Im Plural bekommt auch das Nomen ein -n, wenn es nicht schon auf -n oder -s endet.',
          translations: {
            en: {
              title: 'Articles in the dative',
              text: 'In the dative all articles change. Masculine and neuter end in -m, feminine in -r. In the plural the noun also takes an -n, unless it already ends in -n or -s.',
            },
            es: {
              title: 'Los artículos en dativo',
              text: 'En dativo cambian todos los artículos. Masculino y neutro terminan en -m, femenino en -r. En plural el sustantivo también añade una -n, salvo que ya termine en -n o -s.',
            },
            fr: {
              title: 'Les articles au datif',
              text: 'Au datif, tous les articles changent. Le masculin et le neutre se terminent en -m, le féminin en -r. Au pluriel, le nom prend aussi un -n, sauf s’il se termine déjà par -n ou -s.',
            },
            it: {
              title: 'Gli articoli al dativo',
              text: 'Al dativo cambiano tutti gli articoli. Maschile e neutro finiscono in -m, femminile in -r. Al plurale anche il sostantivo prende una -n, a meno che non finisca già in -n o -s.',
            },
          },
          table: {
            headers: ['', 'männlich', 'weiblich', 'sächlich', 'Plural'],
            rows: [
              ['bestimmt', 'dem Mann', 'der Frau', 'dem Kind', 'den Kindern'],
              ['unbestimmt', 'einem Mann', 'einer Frau', 'einem Kind', '– Kindern'],
              ['Possessiv', 'meinem Mann', 'meiner Frau', 'meinem Kind', 'meinen Kindern'],
            ],
          },
        },
        {
          id: 'g2-2-cloze-dativ',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie den Artikel im Dativ.',
          wordBank: ['dem', 'der', 'den', 'einem', 'einer'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Ich schenke ' },
            { kind: 'GAP', gapId: 'd1', solution: ['der'], width: 6 },
            { kind: 'TEXT', text: ' Lehrerin Blumen. (die Lehrerin)\n2. Er zeigt ' },
            { kind: 'GAP', gapId: 'd2', solution: ['dem'], width: 6 },
            { kind: 'TEXT', text: ' Gast das Zimmer. (der Gast)\n3. Wir erklären ' },
            { kind: 'GAP', gapId: 'd3', solution: ['den'], width: 6 },
            { kind: 'TEXT', text: ' Kindern die Regel. (die Kinder)\n4. Sie gibt ' },
            { kind: 'GAP', gapId: 'd4', solution: ['einem'], width: 6 },
            { kind: 'TEXT', text: ' Kollegen ihre Nummer. (ein Kollege)' },
          ],
        },
        {
          id: 'g2-2-info-verben',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Verben nur mit Dativ',
          text: 'Einige häufige Verben haben nur ein Objekt – und das steht im Dativ, nicht im Akkusativ: helfen, danken, gehören, gefallen, antworten, schmecken, passen. Diese Verben muss man mitlernen.',
          translations: {
            en: {
              title: 'Verbs that take only the dative',
              text: 'Some common verbs have only one object – and it is in the dative, not the accusative: helfen (help), danken (thank), gehören (belong to), gefallen (please), antworten (answer), schmecken (taste good to), passen (fit / suit). These verbs have to be learned.',
            },
            es: {
              title: 'Verbos que solo llevan dativo',
              text: 'Algunos verbos frecuentes tienen un solo objeto – y va en dativo, no en acusativo: helfen (ayudar), danken (agradecer), gehören (pertenecer), gefallen (gustar), antworten (responder), schmecken (saber bien), passen (quedar bien). Hay que aprenderlos.',
            },
            fr: {
              title: 'Verbes qui se construisent avec le datif',
              text: 'Certains verbes fréquents n’ont qu’un complément – et il est au datif, pas à l’accusatif : helfen (aider), danken (remercier), gehören (appartenir), gefallen (plaire), antworten (répondre), schmecken (être bon), passen (aller bien). Il faut les apprendre.',
            },
            it: {
              title: 'Verbi che reggono solo il dativo',
              text: 'Alcuni verbi frequenti hanno un solo complemento – e va al dativo, non all’accusativo: helfen (aiutare), danken (ringraziare), gehören (appartenere), gefallen (piacere), antworten (rispondere), schmecken (piacere, di cibo), passen (stare bene). Vanno imparati a memoria.',
            },
          },
          table: {
            headers: ['Verb', 'Beispiel'],
            rows: [
              ['helfen', 'Ich helfe dem Nachbarn.'],
              ['danken', 'Wir danken der Lehrerin.'],
              ['gehören', 'Das Auto gehört meinem Bruder.'],
              ['gefallen', 'Die Stadt gefällt den Touristen.'],
              ['schmecken', 'Die Suppe schmeckt dem Kind nicht.'],
            ],
          },
        },
        {
          id: 'g2-2-choice-helfen',
          type: 'CHOICE',
          instruction: 'Welcher Satz ist richtig?',
          multiple: false,
          options: [
            { id: 'h1', text: 'Kannst du den Mann helfen?' },
            { id: 'h2', text: 'Kannst du dem Mann helfen?' },
            { id: 'h3', text: 'Kannst du der Mann helfen?' },
          ],
          solution: ['h2'],
          explanation:
            '„helfen“ verlangt den Dativ, auch wenn es nur ein Objekt gibt: dem Mann helfen. In vielen Sprachen steht hier ein direktes Objekt – im Deutschen nicht.',
          explanationTranslations: {
            en: '„helfen“ takes the dative even though there is only one object: dem Mann helfen. Many languages use a direct object here – German doesn’t.',
            es: '„helfen“ exige dativo, aunque haya un solo objeto: dem Mann helfen. En muchas lenguas aquí hay un objeto directo; en alemán no.',
            fr: '« helfen » exige le datif, même avec un seul complément : dem Mann helfen. Beaucoup de langues emploient ici un complément direct – pas l’allemand.',
            it: '„helfen“ richiede il dativo anche se c’è un solo complemento: dem Mann helfen. In molte lingue qui c’è un complemento oggetto – in tedesco no.',
          },
        },
        {
          id: 'g2-2-info-praep',
          type: 'INFO',
          variant: 'TIP',
          title: 'Präpositionen mit Dativ',
          text: 'Nach aus, bei, mit, nach, seit, von und zu steht immer der Dativ. Dazu kommen die Kurzformen: zum (= zu dem), zur (= zu der), beim (= bei dem), vom (= von dem).',
          translations: {
            en: {
              title: 'Prepositions with the dative',
              text: 'aus, bei, mit, nach, seit, von and zu are always followed by the dative. There are also contracted forms: zum (= zu dem), zur (= zu der), beim (= bei dem), vom (= von dem).',
            },
            es: {
              title: 'Preposiciones con dativo',
              text: 'Después de aus, bei, mit, nach, seit, von y zu siempre va dativo. Además existen las contracciones: zum (= zu dem), zur (= zu der), beim (= bei dem), vom (= von dem).',
            },
            fr: {
              title: 'Prépositions suivies du datif',
              text: 'Après aus, bei, mit, nach, seit, von et zu, on emploie toujours le datif. Il existe aussi des formes contractées : zum (= zu dem), zur (= zu der), beim (= bei dem), vom (= von dem).',
            },
            it: {
              title: 'Preposizioni con il dativo',
              text: 'Dopo aus, bei, mit, nach, seit, von e zu si usa sempre il dativo. Esistono anche le forme contratte: zum (= zu dem), zur (= zu der), beim (= bei dem), vom (= von dem).',
            },
          },
        },
        {
          id: 'g2-2-match-praep',
          type: 'MATCHING',
          instruction: 'Ergänzen Sie die Sätze.',
          left: [
            { id: 'l1', text: 'Ich fahre mit …' },
            { id: 'l2', text: 'Sie kommt gerade von …' },
            { id: 'l3', text: 'Wir gehen heute zur …' },
            { id: 'l4', text: 'Er wohnt noch bei …' },
          ],
          right: [
            { id: 'r1', text: '… dem Bus zur Arbeit.' },
            { id: 'r2', text: '… der Arbeit nach Hause.' },
            { id: 'r3', text: '… Post.' },
            { id: 'r4', text: '… seinen Eltern.' },
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
  // Seite 3 – der Genitiv, dann alle vier Fälle in einer Tabelle.
  {
    order: 3,
    title: 'Der Genitiv und der Überblick',
    subtitle: 'Wessen? – und alle Fälle auf einen Blick',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'g2-3-h1', type: 'HEADING', level: 1, text: 'Der Genitiv' },
        {
          id: 'g2-3-intro',
          type: 'TEXT',
          text: 'Der Genitiv zeigt, zu wem etwas gehört. Man fragt „Wessen?“. Im Gespräch hört man ihn selten – dort ersetzt man ihn meistens durch „von“ mit Dativ. In Texten, Namen und festen Wendungen begegnet er einem aber ständig.',
          translations: {
            en: 'The genitive shows who something belongs to. You ask „Wessen?“ (whose?). In conversation it is rare – people usually replace it with „von“ + dative. But in texts, names and fixed expressions you come across it all the time.',
            es: 'El genitivo indica a quién pertenece algo. Se pregunta „Wessen?“ (¿de quién?). En la conversación se oye poco – normalmente se sustituye por „von“ + dativo. Pero en textos, nombres y expresiones fijas aparece constantemente.',
            fr: 'Le génitif indique à qui appartient quelque chose. On demande « Wessen? » (à qui ?). À l’oral, il est rare – on le remplace le plus souvent par « von » + datif. Mais on le rencontre sans cesse dans les textes, les noms et les expressions figées.',
            it: 'Il genitivo indica a chi appartiene qualcosa. Si chiede „Wessen?“ (di chi?). Nella conversazione si sente poco – di solito lo si sostituisce con „von“ + dativo. Ma nei testi, nei nomi e nelle espressioni fisse lo si incontra di continuo.',
          },
        },
        {
          id: 'g2-3-info-genitiv',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Die Artikel im Genitiv',
          text: 'Männlich und sächlich: des / eines, und das Nomen bekommt -s oder -es. Weiblich und Plural: der / einer, das Nomen bleibt gleich. Bei Namen hängt man einfach -s an, ohne Apostroph: Annas Buch.',
          translations: {
            en: {
              title: 'Articles in the genitive',
              text: 'Masculine and neuter: des / eines, and the noun adds -s or -es. Feminine and plural: der / einer, the noun stays the same. With names you simply add -s, without an apostrophe: Annas Buch (Anna’s book).',
            },
            es: {
              title: 'Los artículos en genitivo',
              text: 'Masculino y neutro: des / eines, y el sustantivo añade -s o -es. Femenino y plural: der / einer, el sustantivo no cambia. Con nombres propios basta con añadir -s, sin apóstrofo: Annas Buch (el libro de Anna).',
            },
            fr: {
              title: 'Les articles au génitif',
              text: 'Masculin et neutre : des / eines, et le nom prend -s ou -es. Féminin et pluriel : der / einer, le nom ne change pas. Avec les prénoms, on ajoute simplement -s, sans apostrophe : Annas Buch (le livre d’Anna).',
            },
            it: {
              title: 'Gli articoli al genitivo',
              text: 'Maschile e neutro: des / eines, e il sostantivo aggiunge -s o -es. Femminile e plurale: der / einer, il sostantivo non cambia. Con i nomi propri si aggiunge semplicemente -s, senza apostrofo: Annas Buch (il libro di Anna).',
            },
          },
          table: {
            headers: ['', 'Genitiv', 'gesprochen oft'],
            rows: [
              ['männlich', 'das Auto des Vaters', 'das Auto vom Vater'],
              ['weiblich', 'die Tasche der Frau', 'die Tasche von der Frau'],
              ['sächlich', 'der Name des Kindes', 'der Name vom Kind'],
              ['Plural', 'das Zimmer der Kinder', 'das Zimmer von den Kindern'],
              ['Name', 'Annas Buch', 'das Buch von Anna'],
            ],
          },
        },
        {
          id: 'g2-3-choice-genitiv',
          type: 'CHOICE',
          instruction: 'Welche Formen sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'q1', text: 'das Fahrrad meines Bruders' },
            { id: 'q2', text: 'das Fahrrad von meinem Bruder' },
            { id: 'q3', text: 'das Fahrrad meinem Bruder' },
            { id: 'q4', text: 'Peter’s Fahrrad' },
          ],
          solution: ['q1', 'q2'],
          explanation:
            'Genitiv (meines Bruders) und „von“ mit Dativ (von meinem Bruder) sind beide richtig. Ohne „von“ geht der Dativ nicht. Bei Namen schreibt man kein Apostroph: Peters Fahrrad.',
          explanationTranslations: {
            en: 'Genitive (meines Bruders) and „von“ + dative (von meinem Bruder) are both correct. The dative doesn’t work without „von“. Names take no apostrophe: Peters Fahrrad.',
            es: 'El genitivo (meines Bruders) y „von“ + dativo (von meinem Bruder) son correctos. Sin „von“ el dativo no funciona. Con nombres no se pone apóstrofo: Peters Fahrrad.',
            fr: 'Le génitif (meines Bruders) et « von » + datif (von meinem Bruder) sont tous deux corrects. Sans « von », le datif ne fonctionne pas. Pas d’apostrophe avec les prénoms : Peters Fahrrad.',
            it: 'Il genitivo (meines Bruders) e „von“ + dativo (von meinem Bruder) sono entrambi corretti. Senza „von“ il dativo non funziona. Con i nomi non si mette l’apostrofo: Peters Fahrrad.',
          },
        },
        {
          id: 'g2-3-cloze-genitiv',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie den Genitiv.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Das ist die Wohnung ' },
            { kind: 'GAP', gapId: 'x1', solution: ['meiner'], width: 7 },
            { kind: 'TEXT', text: ' Schwester. (meine Schwester)\n2. Wie ist der Name ' },
            { kind: 'GAP', gapId: 'x2', solution: ['des'], width: 5 },
            { kind: 'TEXT', text: ' Hotels? (das Hotel)\n3. Das Büro ' },
            { kind: 'GAP', gapId: 'x3', solution: ['des'], width: 5 },
            { kind: 'TEXT', text: ' Chefs ist im dritten Stock. (der Chef)\n4. ' },
            { kind: 'GAP', gapId: 'x4', solution: ['Marias'], width: 7 },
            { kind: 'TEXT', text: ' Mann kommt aus Chile. (Maria)' },
          ],
        },
        { id: 'g2-3-h2', type: 'HEADING', level: 2, text: 'Alle vier Fälle auf einen Blick' },
        {
          id: 'g2-3-info-uebersicht',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Der bestimmte Artikel in allen Fällen',
          text: 'Diese Tabelle ist das Gerüst der deutschen Grammatik. Wer sie sicher beherrscht, hat die halbe Deklination gelernt – die Endungen von dieser, jeder, welcher und vieles mehr folgen demselben Muster.',
          translations: {
            en: {
              title: 'The definite article in all cases',
              text: 'This table is the backbone of German grammar. Master it and you’ve learned half the declension system – the endings of dieser, jeder, welcher and much more follow the same pattern.',
            },
            es: {
              title: 'El artículo determinado en todos los casos',
              text: 'Esta tabla es el esqueleto de la gramática alemana. Quien la domina ha aprendido media declinación – las terminaciones de dieser, jeder, welcher y mucho más siguen el mismo patrón.',
            },
            fr: {
              title: 'L’article défini à tous les cas',
              text: 'Ce tableau est la charpente de la grammaire allemande. Le maîtriser, c’est connaître la moitié de la déclinaison – les terminaisons de dieser, jeder, welcher et bien d’autres suivent le même modèle.',
            },
            it: {
              title: 'L’articolo determinativo in tutti i casi',
              text: 'Questa tabella è l’ossatura della grammatica tedesca. Chi la padroneggia ha imparato metà della declinazione – le desinenze di dieser, jeder, welcher e molto altro seguono lo stesso schema.',
            },
          },
          table: {
            headers: ['', 'Frage', 'männlich', 'weiblich', 'sächlich', 'Plural'],
            rows: [
              ['Nominativ', 'Wer? Was?', 'der', 'die', 'das', 'die'],
              ['Akkusativ', 'Wen? Was?', 'den', 'die', 'das', 'die'],
              ['Dativ', 'Wem?', 'dem', 'der', 'dem', 'den (+n)'],
              ['Genitiv', 'Wessen?', 'des (+s)', 'der', 'des (+s)', 'der'],
            ],
          },
        },
        {
          id: 'g2-3-info-pronomen',
          type: 'INFO',
          variant: 'TIP',
          title: 'Personalpronomen',
          text: 'Auch die Pronomen haben Fälle. Die Formen für Nominativ, Akkusativ und Dativ braucht man ständig.',
          translations: {
            en: {
              title: 'Personal pronouns',
              text: 'Pronouns have cases too. You need the nominative, accusative and dative forms all the time.',
            },
            es: {
              title: 'Pronombres personales',
              text: 'Los pronombres también tienen casos. Las formas de nominativo, acusativo y dativo se usan constantemente.',
            },
            fr: {
              title: 'Les pronoms personnels',
              text: 'Les pronoms aussi ont des cas. On a sans cesse besoin des formes du nominatif, de l’accusatif et du datif.',
            },
            it: {
              title: 'I pronomi personali',
              text: 'Anche i pronomi hanno i casi. Le forme di nominativo, accusativo e dativo servono di continuo.',
            },
          },
          table: {
            headers: ['Nominativ', 'Akkusativ', 'Dativ'],
            rows: [
              ['ich', 'mich', 'mir'],
              ['du', 'dich', 'dir'],
              ['er / sie / es', 'ihn / sie / es', 'ihm / ihr / ihm'],
              ['wir', 'uns', 'uns'],
              ['ihr', 'euch', 'euch'],
              ['sie / Sie', 'sie / Sie', 'ihnen / Ihnen'],
            ],
          },
        },
        {
          id: 'g2-3-match-fall',
          type: 'MATCHING',
          instruction: 'In welchem Fall steht das markierte Wort?',
          left: [
            { id: 'f1', text: 'DER Zug hat Verspätung.' },
            { id: 'f2', text: 'Ich nehme DEN Zug um acht.' },
            { id: 'f3', text: 'Ich fahre mit DEM Zug.' },
            { id: 'f4', text: 'Die Türen DES Zuges schließen.' },
          ],
          right: [
            { id: 'k1', text: 'Nominativ' },
            { id: 'k2', text: 'Akkusativ' },
            { id: 'k3', text: 'Dativ' },
            { id: 'k4', text: 'Genitiv' },
          ],
          solution: [
            { leftId: 'f1', rightId: 'k1' },
            { leftId: 'f2', rightId: 'k2' },
            { leftId: 'f3', rightId: 'k3' },
            { leftId: 'f4', rightId: 'k4' },
          ],
        },
        {
          id: 'g2-3-writing',
          type: 'WRITING',
          instruction: 'Ein Geschenk',
          prompt:
            'Schreiben Sie vier bis sechs Sätze: Wem schenken Sie bald etwas? Was schenken Sie? Warum gefällt das der Person? Benutzen Sie mindestens einmal den Akkusativ und einmal den Dativ.',
          minWords: 25,
          maxWords: 100,
          aiFeedback: true,
          sampleAnswer:
            'Nächste Woche hat meine Mutter Geburtstag. Ich schenke ihr ein Buch und einen Schal. Sie liest sehr gern, und die Farbe Blau gefällt ihr. Mein Bruder kauft den Kuchen. Wir helfen unserem Vater beim Kochen.',
        },
      ],
    },
  },
];
