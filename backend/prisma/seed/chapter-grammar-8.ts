import type { UnitSeed } from './chapter-beginner-1';

/**
 * Grammatik, Kapitel 8: „Präpositionen“ (ab B1)
 *
 * Drei Seiten, gebaut wie die Kapitel davor.
 *
 * Seite 1 sammelt die Präpositionen mit festem Fall – Akkusativ, Dativ und
 * die vier häufigen mit Genitiv – und die Verschmelzungen (zum, im, ins …).
 * Seite 2 ist das Herzstück: die Wechselpräpositionen, bei denen die Frage
 * „wo?“ oder „wohin?“ den Fall entscheidet, mit den Verbpaaren stehen/
 * stellen, liegen/legen, hängen. Seite 3 bringt die Verben mit fester
 * Präposition und die Fragewörter und Pronominaladverbien dazu (worauf,
 * darauf).
 *
 * Die Einteilung in lokal, temporal und kausal steht nicht auf einer eigenen
 * Seite, sondern in den Tabellen: Dieselbe Präposition („vor“, „seit“, „an“)
 * ist oft beides, und eine Liste nach Bedeutung würde das verschleiern.
 *
 * Erklärungen übersetzt, Tabellen unübersetzt – wie in Kapitel 1.
 */
const v = 1;

export const GRAMMAR_8_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Präpositionen mit festem Fall.
  {
    order: 1,
    title: 'Präpositionen mit festem Fall',
    subtitle: 'Akkusativ, Dativ, Genitiv',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'g8-1-h1', type: 'HEADING', level: 1, text: 'Präpositionen mit festem Fall' },
        {
          id: 'g8-1-intro',
          type: 'TEXT',
          text: 'Jede Präposition verlangt einen bestimmten Fall für das Nomen danach. Bei den meisten ist er fest: „mit“ steht immer mit Dativ, „für“ immer mit Akkusativ – egal, was der Satz sonst sagt. Diese Präpositionen lernt man am besten als Gruppe auswendig.',
          translations: {
            en: 'Every preposition requires a particular case for the noun that follows. For most of them it is fixed: „mit“ always takes the dative, „für“ always the accusative – whatever else the sentence says. These prepositions are best learned by heart as a group.',
            es: 'Cada preposición exige un caso determinado para el sustantivo que la sigue. En la mayoría es fijo: „mit“ siempre rige dativo, „für“ siempre acusativo, diga lo que diga la frase. Estas preposiciones se aprenden mejor de memoria, en grupo.',
            fr: 'Chaque préposition impose un cas précis au nom qui suit. Pour la plupart, il est fixe : « mit » est toujours suivi du datif, « für » toujours de l’accusatif – quoi que dise la phrase par ailleurs. Mieux vaut apprendre ces prépositions par cœur, par groupe.',
            it: 'Ogni preposizione richiede un caso preciso per il sostantivo che segue. Per la maggior parte è fisso: „mit“ vuole sempre il dativo, „für“ sempre l’accusativo – qualunque cosa dica il resto della frase. Queste preposizioni si imparano meglio a memoria, a gruppi.',
          },
        },
        {
          id: 'g8-1-info-fest',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Welche Präposition, welcher Fall?',
          text: 'Eine Merkhilfe für den Akkusativ ist „DOGFU“: durch, ohne, gegen, für, um (dazu „bis“). Die Dativ-Präpositionen passen in den Satz „aus, bei, mit, nach, seit, von, zu – und gegenüber“. Mit Genitiv stehen vor allem „wegen“, „trotz“, „während“ und „statt“; im Alltag hört man danach oft auch den Dativ.',
          translations: {
            en: {
              title: 'Which preposition, which case?',
              text: 'A memory aid for the accusative is „DOGFU“: durch, ohne, gegen, für, um (plus „bis“). The dative prepositions fit into the line „aus, bei, mit, nach, seit, von, zu – and gegenüber“. The genitive mainly follows „wegen“, „trotz“, „während“ and „statt“; in everyday speech you often hear the dative after them too.',
            },
            es: {
              title: '¿Qué preposición, qué caso?',
              text: 'Una regla mnemotécnica para el acusativo es „DOGFU“: durch, ohne, gegen, für, um (y además „bis“). Las de dativo caben en la serie „aus, bei, mit, nach, seit, von, zu – y gegenüber“. Con genitivo van sobre todo „wegen“, „trotz“, „während“ y „statt“; en el habla cotidiana se oye a menudo también el dativo.',
            },
            fr: {
              title: 'Quelle préposition, quel cas ?',
              text: 'Un moyen mnémotechnique pour l’accusatif : « DOGFU » – durch, ohne, gegen, für, um (plus « bis »). Les prépositions au datif tiennent dans la série « aus, bei, mit, nach, seit, von, zu – et gegenüber ». Le génitif suit surtout « wegen », « trotz », « während » et « statt » ; à l’oral, on entend souvent aussi le datif après elles.',
            },
            it: {
              title: 'Quale preposizione, quale caso?',
              text: 'Un aiuto per l’accusativo è „DOGFU“: durch, ohne, gegen, für, um (più „bis“). Le preposizioni col dativo stanno nella serie „aus, bei, mit, nach, seit, von, zu – e gegenüber“. Col genitivo vanno soprattutto „wegen“, „trotz“, „während“ e „statt“; nella lingua parlata dopo di esse si sente spesso anche il dativo.',
            },
          },
          table: {
            headers: ['Fall', 'Präpositionen', 'Beispiel'],
            rows: [
              ['Akkusativ', 'durch, für, gegen, ohne, um, bis', 'Wir gehen durch den Park.'],
              ['Dativ', 'aus, bei, mit, nach, seit, von, zu, gegenüber', 'Ich wohne seit einem Jahr bei meiner Tante.'],
              ['Genitiv', 'wegen, trotz, während, statt', 'Wegen des Regens bleiben wir hier.'],
            ],
          },
        },
        {
          id: 'g8-1-info-kurz',
          type: 'INFO',
          variant: 'TIP',
          title: 'Verschmelzungen',
          text: 'Einige Präpositionen verschmelzen mit dem Artikel „dem“, „das“ oder „der“: zu dem → zum, zu der → zur, bei dem → beim, von dem → vom, in dem → im, an dem → am, in das → ins, an das → ans. Die kurze Form ist im Alltag der Normalfall.',
          translations: {
            en: {
              title: 'Contractions',
              text: 'Some prepositions merge with the article „dem“, „das“ or „der“: zu dem → zum, zu der → zur, bei dem → beim, von dem → vom, in dem → im, an dem → am, in das → ins, an das → ans. The short form is the norm in everyday German.',
            },
            es: {
              title: 'Contracciones',
              text: 'Algunas preposiciones se contraen con el artículo „dem“, „das“ o „der“: zu dem → zum, zu der → zur, bei dem → beim, von dem → vom, in dem → im, an dem → am, in das → ins, an das → ans. En el día a día la forma corta es lo normal.',
            },
            fr: {
              title: 'Contractions',
              text: 'Certaines prépositions fusionnent avec l’article « dem », « das » ou « der » : zu dem → zum, zu der → zur, bei dem → beim, von dem → vom, in dem → im, an dem → am, in das → ins, an das → ans. Au quotidien, la forme courte est la norme.',
            },
            it: {
              title: 'Preposizioni articolate',
              text: 'Alcune preposizioni si fondono con l’articolo „dem“, „das“ o „der“: zu dem → zum, zu der → zur, bei dem → beim, von dem → vom, in dem → im, an dem → am, in das → ins, an das → ans. Nella lingua di tutti i giorni la forma breve è la norma.',
            },
          },
        },
        {
          id: 'g8-1-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie den Artikel oder die Verschmelzung.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Das Geschenk ist für ' },
            { kind: 'GAP', gapId: 'f1', solution: ['den'], width: 5 },
            { kind: 'TEXT', text: ' Chef. (der Chef)\n2. Ich fahre mit ' },
            { kind: 'GAP', gapId: 'f2', solution: ['der'], width: 5 },
            { kind: 'TEXT', text: ' U-Bahn. (die U-Bahn)\n3. Nach ' },
            { kind: 'GAP', gapId: 'f3', solution: ['dem'], width: 5 },
            { kind: 'TEXT', text: ' Essen machen wir einen Spaziergang. (das Essen)\n4. Kommst du heute ' },
            { kind: 'GAP', gapId: 'f4', solution: ['zum'], width: 5 },
            { kind: 'TEXT', text: ' Training? (zu + das Training)\n5. Wir laufen um ' },
            { kind: 'GAP', gapId: 'f5', solution: ['den'], width: 5 },
            { kind: 'TEXT', text: ' See. (der See)\n6. Trotz ' },
            { kind: 'GAP', gapId: 'f6', solution: ['des'], width: 5 },
            { kind: 'TEXT', text: ' Wetters fand das Konzert statt. (das Wetter)' },
          ],
        },
        {
          id: 'g8-1-choice',
          type: 'CHOICE',
          instruction: 'Welche Sätze sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'c1', text: 'Ich gehe ohne meinen Schirm aus dem Haus.' },
            { id: 'c2', text: 'Ich gehe ohne meinem Schirm aus dem Haus.' },
            { id: 'c3', text: 'Seit zwei Wochen arbeitet sie bei einer Bank.' },
            { id: 'c4', text: 'Seit zwei Wochen arbeitet sie bei eine Bank.' },
          ],
          solution: ['c1', 'c3'],
          explanation:
            '„ohne“ verlangt den Akkusativ: ohne meinen Schirm. „aus“, „seit“ und „bei“ verlangen den Dativ: aus dem Haus, bei einer Bank.',
          explanationTranslations: {
            en: '„ohne“ takes the accusative: ohne meinen Schirm. „aus“, „seit“ and „bei“ take the dative: aus dem Haus, bei einer Bank.',
            es: '„ohne“ rige acusativo: ohne meinen Schirm. „aus“, „seit“ y „bei“ rigen dativo: aus dem Haus, bei einer Bank.',
            fr: '« ohne » est suivi de l’accusatif : ohne meinen Schirm. « aus », « seit » et « bei » sont suivis du datif : aus dem Haus, bei einer Bank.',
            it: '„ohne“ vuole l’accusativo: ohne meinen Schirm. „aus“, „seit“ e „bei“ vogliono il dativo: aus dem Haus, bei einer Bank.',
          },
        },
        {
          id: 'g8-1-match',
          type: 'MATCHING',
          instruction: 'Welcher Fall folgt?',
          left: [
            { id: 'l1', text: 'gegen' },
            { id: 'l2', text: 'gegenüber' },
            { id: 'l3', text: 'wegen' },
            { id: 'l4', text: 'von' },
          ],
          right: [
            { id: 'r1', text: 'gegen den Wind (Akkusativ)' },
            { id: 'r2', text: 'gegenüber dem Bahnhof (Dativ)' },
            { id: 'r3', text: 'wegen der Hitze (Genitiv)' },
            { id: 'r4', text: 'von meiner Mutter (Dativ)' },
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

  // ====================================================== SEITE 2
  // Seite 2 – Wechselpräpositionen: wo oder wohin?
  {
    order: 2,
    title: 'Wo oder wohin?',
    subtitle: 'Die Wechselpräpositionen',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'g8-2-h1', type: 'HEADING', level: 1, text: 'Wo oder wohin?' },
        {
          id: 'g8-2-intro',
          type: 'TEXT',
          text: 'Neun Präpositionen können mit Akkusativ oder mit Dativ stehen: an, auf, hinter, in, neben, über, unter, vor, zwischen. Welcher Fall es ist, hängt von der Frage ab. Beschreibt der Satz eine Bewegung zu einem Ziel (wohin?), steht der Akkusativ. Beschreibt er einen Ort (wo?), steht der Dativ.',
          translations: {
            en: 'Nine prepositions can take either the accusative or the dative: an, auf, hinter, in, neben, über, unter, vor, zwischen. Which case it is depends on the question. If the sentence describes movement towards a destination (wohin? – where to?), use the accusative. If it describes a location (wo? – where?), use the dative.',
            es: 'Nueve preposiciones pueden ir con acusativo o con dativo: an, auf, hinter, in, neben, über, unter, vor, zwischen. El caso depende de la pregunta. Si la frase describe un movimiento hacia un destino (wohin? – ¿adónde?), va acusativo. Si describe un lugar (wo? – ¿dónde?), va dativo.',
            fr: 'Neuf prépositions peuvent être suivies de l’accusatif ou du datif : an, auf, hinter, in, neben, über, unter, vor, zwischen. Le cas dépend de la question. Si la phrase décrit un déplacement vers un but (wohin ? – où [vers] ?), on met l’accusatif. Si elle décrit un lieu (wo ? – où ?), on met le datif.',
            it: 'Nove preposizioni possono reggere l’accusativo o il dativo: an, auf, hinter, in, neben, über, unter, vor, zwischen. Il caso dipende dalla domanda. Se la frase descrive un movimento verso una meta (wohin? – verso dove?), va l’accusativo. Se descrive un luogo (wo? – dove?), va il dativo.',
          },
        },
        {
          id: 'g8-2-info-wechsel',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Wohin? → Akkusativ. Wo? → Dativ.',
          text: 'Besonders deutlich wird der Unterschied bei den Verbpaaren: Wer etwas stellt, legt oder hängt, bewegt es irgendwohin (Akkusativ). Danach steht, liegt oder hängt es irgendwo (Dativ). Die Verben der Bewegung sind regelmäßig, die des Zustands unregelmäßig: stellen – gestellt, stehen – gestanden.',
          translations: {
            en: {
              title: 'Wohin? → accusative. Wo? → dative.',
              text: 'The difference is especially clear with the verb pairs: if you put something somewhere (stellen, legen, hängen), you move it (accusative). Afterwards it stands, lies or hangs somewhere (stehen, liegen, hängen – dative). The verbs of movement are regular, those of state irregular: stellen – gestellt, stehen – gestanden.',
            },
            es: {
              title: 'Wohin? → acusativo. Wo? → dativo.',
              text: 'La diferencia se ve muy clara en los pares de verbos: quien pone algo (stellen, legen, hängen) lo mueve a algún sitio (acusativo). Después está de pie, tumbado o colgado en algún sitio (stehen, liegen, hängen – dativo). Los verbos de movimiento son regulares; los de estado, irregulares: stellen – gestellt, stehen – gestanden.',
            },
            fr: {
              title: 'Wohin ? → accusatif. Wo ? → datif.',
              text: 'La différence est particulièrement nette avec les paires de verbes : quand on pose, couche ou accroche quelque chose (stellen, legen, hängen), on le déplace (accusatif). Ensuite, il est debout, couché ou accroché quelque part (stehen, liegen, hängen – datif). Les verbes de mouvement sont réguliers, ceux d’état irréguliers : stellen – gestellt, stehen – gestanden.',
            },
            it: {
              title: 'Wohin? → accusativo. Wo? → dativo.',
              text: 'La differenza si vede bene nelle coppie di verbi: chi mette qualcosa da qualche parte (stellen, legen, hängen) lo sposta (accusativo). Dopo, sta in piedi, disteso o appeso da qualche parte (stehen, liegen, hängen – dativo). I verbi di movimento sono regolari, quelli di stato irregolari: stellen – gestellt, stehen – gestanden.',
            },
          },
          table: {
            headers: ['Wohin? (Akkusativ)', 'Wo? (Dativ)'],
            rows: [
              ['Ich stelle die Vase auf den Tisch.', 'Die Vase steht auf dem Tisch.'],
              ['Ich lege das Buch in die Tasche.', 'Das Buch liegt in der Tasche.'],
              ['Ich hänge das Bild an die Wand.', 'Das Bild hängt an der Wand.'],
              ['Wir gehen ins Kino.', 'Wir sind im Kino.'],
              ['Die Katze springt unter das Bett.', 'Die Katze schläft unter dem Bett.'],
            ],
          },
        },
        {
          id: 'g8-2-info-zeit',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Bei Zeitangaben: Dativ',
          text: '„an“, „in“ und „vor“ stehen auch bei Zeitangaben – dann immer mit Dativ: am Montag, im Sommer, vor einer Woche. Die Frage „wohin?“ gibt es bei der Zeit nicht.',
          translations: {
            en: {
              title: 'With time expressions: dative',
              text: '„an“, „in“ and „vor“ are also used for time – then always with the dative: am Montag (on Monday), im Sommer (in summer), vor einer Woche (a week ago). There is no „wohin?“ for time.',
            },
            es: {
              title: 'Con expresiones de tiempo: dativo',
              text: '„an“, „in“ y „vor“ también se usan con el tiempo, y entonces siempre con dativo: am Montag (el lunes), im Sommer (en verano), vor einer Woche (hace una semana). Con el tiempo no existe la pregunta „wohin?“.',
            },
            fr: {
              title: 'Avec le temps : datif',
              text: '« an », « in » et « vor » s’emploient aussi pour le temps – toujours avec le datif : am Montag (lundi), im Sommer (en été), vor einer Woche (il y a une semaine). La question « wohin ? » n’existe pas pour le temps.',
            },
            it: {
              title: 'Con le indicazioni di tempo: dativo',
              text: '„an“, „in“ e „vor“ si usano anche per il tempo – sempre col dativo: am Montag (lunedì), im Sommer (d’estate), vor einer Woche (una settimana fa). Per il tempo non esiste la domanda „wohin?“.',
            },
          },
        },
        {
          id: 'g8-2-cloze',
          type: 'CLOZE',
          instruction: 'Wo oder wohin? Ergänzen Sie den Artikel.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Ich stelle die Flaschen in ' },
            { kind: 'GAP', gapId: 'w1', solution: ['den'], width: 5 },
            { kind: 'TEXT', text: ' Kühlschrank. (der Kühlschrank)\n2. Die Milch steht schon in ' },
            { kind: 'GAP', gapId: 'w2', solution: ['dem'], width: 5 },
            { kind: 'TEXT', text: ' Kühlschrank.\n3. Der Schlüssel liegt auf ' },
            { kind: 'GAP', gapId: 'w3', solution: ['der'], width: 5 },
            { kind: 'TEXT', text: ' Kommode. (die Kommode)\n4. Leg den Schlüssel bitte auf ' },
            { kind: 'GAP', gapId: 'w4', solution: ['die'], width: 5 },
            { kind: 'TEXT', text: ' Kommode!\n5. Das Auto parkt vor ' },
            { kind: 'GAP', gapId: 'w5', solution: ['dem'], width: 5 },
            { kind: 'TEXT', text: ' Haus. (das Haus)\n6. Wir hängen die Lampe über ' },
            { kind: 'GAP', gapId: 'w6', solution: ['den'], width: 5 },
            { kind: 'TEXT', text: ' Esstisch. (der Esstisch)' },
          ],
        },
        {
          id: 'g8-2-cloze-verben',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie das passende Verb im Präsens.',
          wordBank: ['stellt', 'steht', 'legt', 'liegt', 'hängt'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Mama ' },
            { kind: 'GAP', gapId: 'v1', solution: ['stellt'], width: 7 },
            { kind: 'TEXT', text: ' den Kuchen auf den Tisch.\n2. Der Kuchen ' },
            { kind: 'GAP', gapId: 'v2', solution: ['steht'], width: 7 },
            { kind: 'TEXT', text: ' jetzt auf dem Tisch.\n3. Papa ' },
            { kind: 'GAP', gapId: 'v3', solution: ['legt'], width: 7 },
            { kind: 'TEXT', text: ' die Zeitung aufs Sofa.\n4. Die Zeitung ' },
            { kind: 'GAP', gapId: 'v4', solution: ['liegt'], width: 7 },
            { kind: 'TEXT', text: ' auf dem Sofa.\n5. Der Mantel ' },
            { kind: 'GAP', gapId: 'v5', solution: ['hängt', 'haengt'], width: 7 },
            { kind: 'TEXT', text: ' an der Garderobe.' },
          ],
        },
        {
          id: 'g8-2-choice',
          type: 'CHOICE',
          instruction: 'Welche Sätze sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'c1', text: 'Wir fahren am Wochenende in die Berge.' },
            { id: 'c2', text: 'Wir wandern am Wochenende in die Bergen.' },
            { id: 'c3', text: 'Das Bild hängt zwischen dem Fenster und der Tür.' },
            { id: 'c4', text: 'Ich habe das Glas auf den Tisch gestanden.' },
          ],
          solution: ['c1', 'c3'],
          explanation:
            '„in die Berge“ ist ein Ziel (wohin?), „in den Bergen“ ein Ort (wo?). Wer ein Glas irgendwohin bewegt, „stellt“ es: Ich habe das Glas auf den Tisch gestellt.',
          explanationTranslations: {
            en: '„in die Berge“ is a destination (wohin?), „in den Bergen“ a location (wo?). If you move a glass somewhere, you „stellen“ it: Ich habe das Glas auf den Tisch gestellt.',
            es: '„in die Berge“ es un destino (wohin?), „in den Bergen“ un lugar (wo?). Quien mueve un vaso a algún sitio lo „stellt“: Ich habe das Glas auf den Tisch gestellt.',
            fr: '« in die Berge » est un but (wohin ?), « in den Bergen » un lieu (wo ?). Quand on déplace un verre, on le « stellt » : Ich habe das Glas auf den Tisch gestellt.',
            it: '„in die Berge“ è una meta (wohin?), „in den Bergen“ un luogo (wo?). Chi sposta un bicchiere da qualche parte lo „stellt“: Ich habe das Glas auf den Tisch gestellt.',
          },
        },
        {
          id: 'g8-2-order',
          type: 'ORDERING',
          instruction: 'Bilden Sie einen Satz.',
          items: [
            { id: 'a1', text: 'Hast' },
            { id: 'a2', text: 'du' },
            { id: 'a3', text: 'die Teller' },
            { id: 'a4', text: 'schon' },
            { id: 'a5', text: 'in den Schrank' },
            { id: 'a6', text: 'gestellt?' },
          ],
          solution: ['a1', 'a2', 'a3', 'a4', 'a5', 'a6'],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – Verben mit fester Präposition.
  {
    order: 3,
    title: 'Warten auf, denken an',
    subtitle: 'Verben mit fester Präposition',
    estimatedMinutes: 29,
    content: {
      version: v,
      blocks: [
        { id: 'g8-3-h1', type: 'HEADING', level: 1, text: 'Warten auf, denken an' },
        {
          id: 'g8-3-intro',
          type: 'TEXT',
          text: 'Viele Verben haben eine feste Präposition, die man nicht aus der Bedeutung ableiten kann: Man wartet „auf“ den Bus, denkt „an“ die Familie und interessiert sich „für“ Musik. Hier hat die Präposition keine räumliche Bedeutung mehr. Deshalb lernt man Verb, Präposition und Fall am besten zusammen.',
          translations: {
            en: 'Many verbs have a fixed preposition that you can’t work out from the meaning: you wait „auf“ the bus, think „an“ your family and are interested „für“ music. Here the preposition no longer has a spatial meaning. That’s why it’s best to learn verb, preposition and case together.',
            es: 'Muchos verbos llevan una preposición fija que no se deduce del significado: se espera „auf“ el autobús, se piensa „an“ la familia y uno se interesa „für“ la música. Aquí la preposición ya no tiene sentido espacial. Por eso conviene aprender juntos verbo, preposición y caso.',
            fr: 'Beaucoup de verbes ont une préposition fixe qu’on ne peut pas déduire du sens : on attend « auf » le bus, on pense « an » sa famille et on s’intéresse « für » la musique. La préposition n’a plus ici de sens spatial. Mieux vaut donc apprendre ensemble le verbe, la préposition et le cas.',
            it: 'Molti verbi hanno una preposizione fissa che non si ricava dal significato: si aspetta „auf“ l’autobus, si pensa „an“ la famiglia e ci si interessa „für“ la musica. Qui la preposizione non ha più un significato spaziale. Per questo conviene imparare insieme verbo, preposizione e caso.',
          },
        },
        {
          id: 'g8-3-info-verben',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Häufige Verben mit Präposition',
          text: 'Bei „an“, „auf“, „über“ und „vor“ muss man auch den Fall mitlernen – hier gilt nicht die Wo/Wohin-Regel. Die meisten Verben mit „auf“ und „über“ stehen mit Akkusativ, Verben mit „vor“ mit Dativ.',
          translations: {
            en: {
              title: 'Common verbs with a preposition',
              text: 'With „an“, „auf“, „über“ and „vor“ you also have to learn the case – the wo/wohin rule doesn’t apply here. Most verbs with „auf“ and „über“ take the accusative; verbs with „vor“ take the dative.',
            },
            es: {
              title: 'Verbos frecuentes con preposición',
              text: 'Con „an“, „auf“, „über“ y „vor“ también hay que aprender el caso: aquí no vale la regla de wo/wohin. La mayoría de los verbos con „auf“ y „über“ van con acusativo; los verbos con „vor“, con dativo.',
            },
            fr: {
              title: 'Verbes fréquents avec préposition',
              text: 'Avec « an », « auf », « über » et « vor », il faut aussi apprendre le cas – la règle wo/wohin ne s’applique pas ici. La plupart des verbes avec « auf » et « über » prennent l’accusatif ; les verbes avec « vor », le datif.',
            },
            it: {
              title: 'Verbi frequenti con preposizione',
              text: 'Con „an“, „auf“, „über“ e „vor“ bisogna imparare anche il caso – qui non vale la regola wo/wohin. La maggior parte dei verbi con „auf“ e „über“ vuole l’accusativo; i verbi con „vor“ il dativo.',
            },
          },
          table: {
            headers: ['Verb', 'Präposition + Fall', 'Beispiel'],
            rows: [
              ['warten', 'auf + Akk.', 'Ich warte auf den Bus.'],
              ['sich freuen', 'auf + Akk. (Zukunft)', 'Ich freue mich auf den Urlaub.'],
              ['sich freuen', 'über + Akk. (Gegenwart/Vergangenheit)', 'Ich freue mich über das Geschenk.'],
              ['denken', 'an + Akk.', 'Ich denke oft an dich.'],
              ['sich interessieren', 'für + Akk.', 'Sie interessiert sich für Politik.'],
              ['träumen', 'von + Dat.', 'Er träumt von einem Haus am Meer.'],
              ['Angst haben', 'vor + Dat.', 'Das Kind hat Angst vor dem Hund.'],
              ['teilnehmen', 'an + Dat.', 'Wir nehmen an einem Kurs teil.'],
            ],
          },
        },
        {
          id: 'g8-3-info-worauf',
          type: 'INFO',
          variant: 'TIP',
          title: 'Worauf? – Darauf.',
          text: 'Fragt man nach einer Sache, verbindet man „wo(r)-“ mit der Präposition: Worauf wartest du? Worüber sprecht ihr? Als Antwort steht „da(r)-“ + Präposition: Ich warte darauf. Das „r“ kommt dazu, wenn die Präposition mit einem Vokal beginnt. Bei Personen bleibt es bei Präposition + Fragewort oder Pronomen: Auf wen wartest du? – Auf ihn.',
          translations: {
            en: {
              title: 'Worauf? – Darauf.',
              text: 'When asking about a thing, combine „wo(r)-“ with the preposition: Worauf wartest du? Worüber sprecht ihr? The answer uses „da(r)-“ + preposition: Ich warte darauf. The „r“ is added when the preposition starts with a vowel. For people, use preposition + question word or pronoun: Auf wen wartest du? – Auf ihn.',
            },
            es: {
              title: 'Worauf? – Darauf.',
              text: 'Para preguntar por una cosa se une „wo(r)-“ con la preposición: Worauf wartest du? Worüber sprecht ihr? En la respuesta va „da(r)-“ + preposición: Ich warte darauf. La „r“ se añade si la preposición empieza por vocal. Con personas se usa preposición + interrogativo o pronombre: Auf wen wartest du? – Auf ihn.',
            },
            fr: {
              title: 'Worauf ? – Darauf.',
              text: 'Pour poser une question sur une chose, on combine « wo(r)- » et la préposition : Worauf wartest du ? Worüber sprecht ihr ? La réponse emploie « da(r)- » + préposition : Ich warte darauf. On ajoute le « r » quand la préposition commence par une voyelle. Pour les personnes, on garde préposition + mot interrogatif ou pronom : Auf wen wartest du ? – Auf ihn.',
            },
            it: {
              title: 'Worauf? – Darauf.',
              text: 'Per chiedere di una cosa si unisce „wo(r)-“ alla preposizione: Worauf wartest du? Worüber sprecht ihr? Nella risposta si usa „da(r)-“ + preposizione: Ich warte darauf. La „r“ si aggiunge se la preposizione comincia per vocale. Per le persone si usa preposizione + interrogativo o pronome: Auf wen wartest du? – Auf ihn.',
            },
          },
        },
        {
          id: 'g8-3-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die Präposition.',
          wordBank: ['auf', 'über', 'an', 'für', 'von', 'vor'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Wir freuen uns schon ' },
            { kind: 'GAP', gapId: 'p1', solution: ['auf'], width: 5 },
            { kind: 'TEXT', text: ' die Ferien.\n2. Mein Sohn interessiert sich sehr ' },
            { kind: 'GAP', gapId: 'p2', solution: ['für'], width: 5 },
            { kind: 'TEXT', text: ' Dinosaurier.\n3. Denkst du bitte ' },
            { kind: 'GAP', gapId: 'p3', solution: ['an'], width: 5 },
            { kind: 'TEXT', text: ' die Milch?\n4. Viele Menschen haben Angst ' },
            { kind: 'GAP', gapId: 'p4', solution: ['vor'], width: 5 },
            { kind: 'TEXT', text: ' Spinnen.\n5. Sie hat sich sehr ' },
            { kind: 'GAP', gapId: 'p5', solution: ['über'], width: 5 },
            { kind: 'TEXT', text: ' deinen Brief gefreut.\n6. Als Kind habe ich ' },
            { kind: 'GAP', gapId: 'p6', solution: ['von'], width: 5 },
            { kind: 'TEXT', text: ' einem Pony geträumt.' },
          ],
        },
        {
          id: 'g8-3-match',
          type: 'MATCHING',
          instruction: 'Welche Antwort passt zur Frage?',
          left: [
            { id: 'l1', text: 'Worauf wartest du?' },
            { id: 'l2', text: 'Auf wen wartest du?' },
            { id: 'l3', text: 'Wofür interessierst du dich?' },
            { id: 'l4', text: 'Woran denkst du?' },
          ],
          right: [
            { id: 'r1', text: 'Auf den Anruf vom Arzt.' },
            { id: 'r2', text: 'Auf meine Schwester.' },
            { id: 'r3', text: 'Für Fotografie.' },
            { id: 'r4', text: 'An unseren Urlaub.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'g8-3-choice',
          type: 'CHOICE',
          instruction: 'Welche Sätze sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'c1', text: 'Ich nehme morgen an einer Konferenz teil.' },
            { id: 'c2', text: 'Ich nehme morgen an eine Konferenz teil.' },
            { id: 'c3', text: 'Kommt der Brief? – Ich warte schon lange darauf.' },
            { id: 'c4', text: 'Kommt der Brief? – Ich warte schon lange auf es.' },
          ],
          solution: ['c1', 'c3'],
          explanation:
            '„teilnehmen an“ steht mit Dativ: an einer Konferenz. Bei Sachen ersetzt man „Präposition + Nomen“ durch „da(r)-“ + Präposition: darauf.',
          explanationTranslations: {
            en: '„teilnehmen an“ takes the dative: an einer Konferenz. For things you replace „preposition + noun“ with „da(r)-“ + preposition: darauf.',
            es: '„teilnehmen an“ va con dativo: an einer Konferenz. Con cosas, „preposición + sustantivo“ se sustituye por „da(r)-“ + preposición: darauf.',
            fr: '« teilnehmen an » se construit avec le datif : an einer Konferenz. Pour une chose, on remplace « préposition + nom » par « da(r)- » + préposition : darauf.',
            it: '„teilnehmen an“ vuole il dativo: an einer Konferenz. Per le cose si sostituisce „preposizione + sostantivo“ con „da(r)-“ + preposizione: darauf.',
          },
        },
        {
          id: 'g8-3-writing',
          type: 'WRITING',
          instruction: 'Worauf freuen Sie sich?',
          prompt:
            'Schreiben Sie vier bis sechs Sätze über sich: Worauf freuen Sie sich? Wofür interessieren Sie sich? Wovor haben Sie Angst? Wovon träumen Sie? Achten Sie auf Präposition und Fall.',
          minWords: 40,
          maxWords: 120,
          aiFeedback: true,
          sampleAnswer:
            'Im Moment freue ich mich auf den Sommer, denn dann besuche ich meine Familie in Marokko. Ich interessiere mich sehr für Geschichte und lese gern Bücher über das Mittelalter. Ehrlich gesagt habe ich ein bisschen Angst vor meiner Deutschprüfung im Juni. Aber ich denke oft an meinen Lehrer, der immer sagt: Übung macht den Meister. Später träume ich von einer eigenen kleinen Buchhandlung.',
        },
      ],
    },
  },
];
