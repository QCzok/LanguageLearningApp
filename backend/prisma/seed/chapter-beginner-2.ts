import type { UnitSeed } from './chapter-beginner-1';

/**
 * Beginner, Kapitel 2: „Meine Familie und ich“
 *
 * Fünf Seiten, Aufbau wie in Kapitel 1: Jede Aufgabe steht direkt hinter der
 * Erklärung, auf die sie sich bezieht.
 *
 * Das Kapitel führt zwei Dinge ein, die sich gegenseitig brauchen: den
 * Familienwortschatz und die Possessivartikel. „Das ist Mutter“ sagt niemand;
 * erst „das ist meine Mutter“ macht aus der Vokabel einen Satz über das
 * eigene Leben. Die Zahlen bis 100 stehen hier, weil man mit ihnen das Alter
 * angibt – und das Alter gehört zur Familie wie der Beruf, mit dem das
 * Kapitel schließt.
 *
 * Einsprachig deutsch, Erklärungen mit Übersetzung wie in Kapitel 1.
 */
const v = 1;

export const BEGINNER_2_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – die Familie: Wörter zuerst, dann das Foto, über das man spricht.
  {
    order: 1,
    title: 'Das ist meine Familie',
    subtitle: 'Familienmitglieder benennen',
    estimatedMinutes: 20,
    content: {
      version: v,
      blocks: [
        { id: 'b2-1-h1', type: 'HEADING', level: 1, text: 'Das ist meine Familie' },
        {
          id: 'b2-1-image',
          type: 'IMAGE',
          url: 'illustration:family-tree',
          alt: 'Ein Stammbaum mit drei Generationen: Großeltern oben, Eltern in der Mitte, Kinder unten.',
          caption: 'Drei Generationen auf einen Blick.',
        },
        {
          id: 'b2-1-intro',
          type: 'TEXT',
          text: 'Lena zeigt ihrer Kollegin Fotos von ihrer Familie. Lesen Sie mit: Wer ist wer?',
          translations: {
            en: 'Lena is showing her colleague photos of her family. Read along: who is who?',
            es: 'Lena le enseña a su compañera fotos de su familia. Lea con atención: ¿quién es quién?',
            fr: 'Lena montre à sa collègue des photos de sa famille. Lisez : qui est qui ?',
            it: 'Lena mostra alla collega delle foto della sua famiglia. Legga: chi è chi?',
          },
        },
        {
          id: 'b2-1-dlg',
          type: 'DIALOGUE',
          title: 'In der Mittagspause',
          lines: [
            { speaker: 'Lena', text: 'Schau mal, das ist meine Familie.' },
            { speaker: 'Aylin', text: 'Oh, schön! Wer ist das?' },
            { speaker: 'Lena', text: 'Das ist mein Vater, und das ist meine Mutter.' },
            { speaker: 'Aylin', text: 'Und der Junge hier?' },
            { speaker: 'Lena', text: 'Das ist mein Bruder Tim. Und das sind meine Großeltern.' },
            { speaker: 'Aylin', text: 'Hast du auch eine Schwester?' },
            { speaker: 'Lena', text: 'Nein, ich habe nur einen Bruder.' },
          ],
        },
        {
          id: 'b2-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: Die Familie',
          items: [
            { term: 'Familie', article: 'die', plural: 'die Familien', translations: { en: 'family' } },
            { term: 'Vater', article: 'der', plural: 'die Väter', translations: { en: 'father' } },
            { term: 'Mutter', article: 'die', plural: 'die Mütter', translations: { en: 'mother' } },
            { term: 'Eltern', translations: { en: 'parents' }, example: 'Meine Eltern wohnen in Köln.' },
            { term: 'Bruder', article: 'der', plural: 'die Brüder', translations: { en: 'brother' } },
            { term: 'Schwester', article: 'die', plural: 'die Schwestern', translations: { en: 'sister' } },
            { term: 'Geschwister', translations: { en: 'siblings' } },
            { term: 'Sohn', article: 'der', plural: 'die Söhne', translations: { en: 'son' } },
            { term: 'Tochter', article: 'die', plural: 'die Töchter', translations: { en: 'daughter' } },
            { term: 'Kind', article: 'das', plural: 'die Kinder', translations: { en: 'child' } },
            { term: 'Großvater / Opa', article: 'der', translations: { en: 'grandfather / grandpa' } },
            { term: 'Großmutter / Oma', article: 'die', translations: { en: 'grandmother / grandma' } },
            { term: 'Mann', article: 'der', plural: 'die Männer', translations: { en: 'husband / man' } },
            { term: 'Frau', article: 'die', plural: 'die Frauen', translations: { en: 'wife / woman' } },
          ],
        },
        {
          id: 'b2-1-match',
          type: 'MATCHING',
          instruction: 'Wer gehört zusammen? Ordnen Sie zu.',
          left: [
            { id: 'l1', text: 'der Vater' },
            { id: 'l2', text: 'der Bruder' },
            { id: 'l3', text: 'der Sohn' },
            { id: 'l4', text: 'der Opa' },
          ],
          right: [
            { id: 'r1', text: 'die Mutter' },
            { id: 'r2', text: 'die Schwester' },
            { id: 'r3', text: 'die Tochter' },
            { id: 'r4', text: 'die Oma' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'b2-1-info-plural',
          type: 'INFO',
          variant: 'TIP',
          title: 'Wörter nur im Plural',
          text: '„Eltern“ und „Geschwister“ gibt es nur im Plural. Man sagt also „meine Eltern sind …“, nie „mein Elter“. Wer nach Geschwistern fragt, sagt: „Hast du Geschwister?“',
          translations: {
            en: {
              title: 'Words that only exist in the plural',
              text: '„Eltern“ (parents) and „Geschwister“ (siblings) only exist in the plural. So you say „meine Eltern sind …“, never „mein Elter“. To ask about siblings, you say: „Hast du Geschwister?“',
            },
            es: {
              title: 'Palabras que solo existen en plural',
              text: '„Eltern“ (padres) y „Geschwister“ (hermanos) solo existen en plural. Por eso se dice „meine Eltern sind …“, nunca „mein Elter“. Para preguntar por los hermanos se dice: „Hast du Geschwister?“',
            },
            fr: {
              title: 'Des mots seulement au pluriel',
              text: '« Eltern » (parents) et « Geschwister » (frères et sœurs) n’existent qu’au pluriel. On dit donc « meine Eltern sind … », jamais « mein Elter ». Pour demander si quelqu’un a des frères et sœurs : « Hast du Geschwister? »',
            },
            it: {
              title: 'Parole solo al plurale',
              text: '„Eltern“ (genitori) e „Geschwister“ (fratelli e sorelle) esistono solo al plurale. Si dice quindi „meine Eltern sind …“, mai „mein Elter“. Per chiedere dei fratelli si dice: „Hast du Geschwister?“',
            },
          },
        },
        {
          id: 'b2-1-choice-plural',
          type: 'CHOICE',
          instruction: 'Welcher Satz ist richtig?',
          multiple: false,
          options: [
            { id: 'o1', text: 'Meine Eltern wohnen in Bremen.' },
            { id: 'o2', text: 'Mein Elter wohnt in Bremen.' },
            { id: 'o3', text: 'Meine Eltern wohnt in Bremen.' },
          ],
          solution: ['o1'],
          explanation:
            '„Eltern“ ist immer Plural. Deshalb steht auch das Verb im Plural: meine Eltern wohnen.',
          explanationTranslations: {
            en: '„Eltern“ is always plural. That’s why the verb is plural too: meine Eltern wohnen.',
            es: '„Eltern“ es siempre plural. Por eso el verbo también va en plural: meine Eltern wohnen.',
            fr: '« Eltern » est toujours au pluriel. C’est pourquoi le verbe est aussi au pluriel : meine Eltern wohnen.',
            it: '„Eltern“ è sempre plurale. Per questo anche il verbo è al plurale: meine Eltern wohnen.',
          },
        },
        {
          id: 'b2-1-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie Lenas Text über ihre Familie.',
          wordBank: ['Vater', 'Mutter', 'Bruder', 'Großeltern', 'Schwester'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Das ist meine Familie. Mein ' },
            { kind: 'GAP', gapId: 'g1', solution: ['Vater'], width: 8 },
            { kind: 'TEXT', text: ' heißt Frank, meine ' },
            { kind: 'GAP', gapId: 'g2', solution: ['Mutter'], width: 8 },
            { kind: 'TEXT', text: ' heißt Petra. Mein ' },
            { kind: 'GAP', gapId: 'g3', solution: ['Bruder'], width: 8 },
            { kind: 'TEXT', text: ' Tim ist noch klein. Meine ' },
            { kind: 'GAP', gapId: 'g4', solution: ['Großeltern'], width: 11 },
            { kind: 'TEXT', text: ' wohnen auf dem Land.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – mein, dein, Ihr: erst die Regel, dann sofort die Probe.
  {
    order: 2,
    title: 'Mein Bruder, deine Schwester',
    subtitle: 'Possessivartikel im Nominativ',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'b2-2-h1', type: 'HEADING', level: 1, text: 'Mein Bruder, deine Schwester' },
        {
          id: 'b2-2-intro',
          type: 'TEXT',
          text: 'Mit „mein“, „dein“ und „Ihr“ sagen Sie, zu wem jemand oder etwas gehört. Die Endung hängt davon ab, ob das Nomen danach männlich, weiblich, sächlich oder Plural ist.',
          translations: {
            en: 'With „mein“, „dein“ and „Ihr“ you say who someone or something belongs to. The ending depends on whether the noun that follows is masculine, feminine, neuter or plural.',
            es: 'Con „mein“, „dein“ e „Ihr“ se dice a quién pertenece alguien o algo. La terminación depende de si el sustantivo que sigue es masculino, femenino, neutro o plural.',
            fr: 'Avec « mein », « dein » et « Ihr », on dit à qui appartient quelqu’un ou quelque chose. La terminaison dépend du nom qui suit : masculin, féminin, neutre ou pluriel.',
            it: 'Con „mein“, „dein“ e „Ihr“ si dice a chi appartiene qualcuno o qualcosa. La desinenza dipende dal sostantivo che segue: maschile, femminile, neutro o plurale.',
          },
        },
        {
          id: 'b2-2-info-poss',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Possessivartikel: mein, dein, Ihr …',
          text: 'Vor männlichen und sächlichen Nomen steht die kurze Form (mein), vor weiblichen Nomen und im Plural kommt ein -e dazu (meine). Das funktioniert wie bei ein / eine.',
          translations: {
            en: {
              title: 'Possessive articles: mein, dein, Ihr …',
              text: 'Before masculine and neuter nouns you use the short form (mein); before feminine nouns and in the plural you add -e (meine). It works just like ein / eine.',
            },
            es: {
              title: 'Posesivos: mein, dein, Ihr …',
              text: 'Delante de sustantivos masculinos y neutros va la forma corta (mein); delante de femeninos y en plural se añade una -e (meine). Funciona igual que ein / eine.',
            },
            fr: {
              title: 'Les possessifs : mein, dein, Ihr …',
              text: 'Devant un nom masculin ou neutre, on emploie la forme courte (mein) ; devant un nom féminin et au pluriel, on ajoute un -e (meine). C’est le même principe que ein / eine.',
            },
            it: {
              title: 'Gli aggettivi possessivi: mein, dein, Ihr …',
              text: 'Davanti a sostantivi maschili e neutri si usa la forma breve (mein); davanti ai femminili e al plurale si aggiunge una -e (meine). Funziona come ein / eine.',
            },
          },
          table: {
            headers: ['Person', 'der Bruder', 'das Kind', 'die Schwester', 'die Eltern'],
            rows: [
              ['ich', 'mein', 'mein', 'meine', 'meine'],
              ['du', 'dein', 'dein', 'deine', 'deine'],
              ['er / es', 'sein', 'sein', 'seine', 'seine'],
              ['sie', 'ihr', 'ihr', 'ihre', 'ihre'],
              ['wir', 'unser', 'unser', 'unsere', 'unsere'],
              ['ihr', 'euer', 'euer', 'eure', 'eure'],
              ['sie / Sie', 'ihr / Ihr', 'ihr / Ihr', 'ihre / Ihre', 'ihre / Ihre'],
            ],
          },
        },
        {
          id: 'b2-2-cloze-poss',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie mein oder meine.',
          wordBank: ['mein', 'meine'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Das ist ' },
            { kind: 'GAP', gapId: 'p1', solution: ['mein'], width: 6 },
            { kind: 'TEXT', text: ' Sohn.\n2. Das ist ' },
            { kind: 'GAP', gapId: 'p2', solution: ['meine'], width: 6 },
            { kind: 'TEXT', text: ' Tochter.\n3. Das sind ' },
            { kind: 'GAP', gapId: 'p3', solution: ['meine'], width: 6 },
            { kind: 'TEXT', text: ' Kinder.\n4. Das ist ' },
            { kind: 'GAP', gapId: 'p4', solution: ['mein'], width: 6 },
            { kind: 'TEXT', text: ' Baby.' },
          ],
        },
        {
          id: 'b2-2-info-ihr',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'sein oder ihr?',
          text: 'Entscheidend ist die Person, der etwas gehört – nicht das Nomen danach. Bei einem Mann heißt es „sein“, bei einer Frau „ihr“: Tim und seine Schwester, Lena und ihr Bruder. „Ihr“ mit großem I gehört zu „Sie“.',
          translations: {
            en: {
              title: 'sein or ihr?',
              text: 'What matters is the person who owns something – not the noun that follows. For a man it is „sein“ (his), for a woman „ihr“ (her): Tim und seine Schwester, Lena und ihr Bruder. „Ihr“ with a capital I goes with „Sie“ (your, formal).',
            },
            es: {
              title: '¿sein o ihr?',
              text: 'Lo decisivo es la persona a quien pertenece algo, no el sustantivo que sigue. Para un hombre se dice „sein“, para una mujer „ihr“: Tim und seine Schwester, Lena und ihr Bruder. „Ihr“ con mayúscula corresponde a „Sie“ (usted).',
            },
            fr: {
              title: 'sein ou ihr ?',
              text: 'Ce qui compte, c’est la personne à qui appartient la chose – pas le nom qui suit. Pour un homme, on dit « sein », pour une femme « ihr » : Tim und seine Schwester, Lena und ihr Bruder. « Ihr » avec une majuscule correspond à « Sie » (vous de politesse).',
            },
            it: {
              title: 'sein o ihr?',
              text: 'Conta la persona a cui appartiene qualcosa, non il sostantivo che segue. Per un uomo si dice „sein“, per una donna „ihr“: Tim und seine Schwester, Lena und ihr Bruder. „Ihr“ con la maiuscola corrisponde a „Sie“ (Lei).',
            },
          },
        },
        {
          id: 'b2-2-choice-sein',
          type: 'CHOICE',
          instruction: '„Lena hat einen Bruder. ___ Bruder heißt Tim.“ Was passt?',
          multiple: false,
          options: [
            { id: 's1', text: 'Sein' },
            { id: 's2', text: 'Ihr' },
            { id: 's3', text: 'Ihre' },
          ],
          solution: ['s2'],
          explanation:
            'Der Bruder gehört zu Lena, also zu einer Frau: „ihr“. „Bruder“ ist männlich, deshalb ohne -e: Ihr Bruder.',
          explanationTranslations: {
            en: 'The brother belongs to Lena, a woman: „ihr“. „Bruder“ is masculine, so no -e: Ihr Bruder.',
            es: 'El hermano es de Lena, una mujer: „ihr“. „Bruder“ es masculino, por eso sin -e: Ihr Bruder.',
            fr: 'Le frère est celui de Lena, une femme : « ihr ». « Bruder » est masculin, donc sans -e : Ihr Bruder.',
            it: 'Il fratello è di Lena, una donna: „ihr“. „Bruder“ è maschile, quindi senza -e: Ihr Bruder.',
          },
        },
        {
          id: 'b2-2-match-du-sie',
          type: 'MATCHING',
          instruction: 'du oder Sie? Ordnen Sie die Fragen einander zu.',
          left: [
            { id: 'd1', text: 'Wie heißt deine Mutter?' },
            { id: 'd2', text: 'Wo wohnt dein Bruder?' },
            { id: 'd3', text: 'Wie alt sind deine Kinder?' },
          ],
          right: [
            { id: 'f1', text: 'Wie heißt Ihre Mutter?' },
            { id: 'f2', text: 'Wo wohnt Ihr Bruder?' },
            { id: 'f3', text: 'Wie alt sind Ihre Kinder?' },
          ],
          solution: [
            { leftId: 'd1', rightId: 'f1' },
            { leftId: 'd2', rightId: 'f2' },
            { leftId: 'd3', rightId: 'f3' },
          ],
        },
        {
          id: 'b2-2-order',
          type: 'ORDERING',
          instruction: 'Bilden Sie einen Satz.',
          items: [
            { id: 'w1', text: 'Das' },
            { id: 'w2', text: 'sind' },
            { id: 'w3', text: 'unsere' },
            { id: 'w4', text: 'Kinder.' },
          ],
          solution: ['w1', 'w2', 'w3', 'w4'],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – die Zehner bis 100, und gleich die Frage nach dem Alter.
  {
    order: 3,
    title: 'Wie alt bist du?',
    subtitle: 'Die Zahlen bis 100, das Alter',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'b2-3-h1', type: 'HEADING', level: 1, text: 'Wie alt bist du?' },
        {
          id: 'b2-3-image',
          type: 'IMAGE',
          url: 'illustration:birthday',
          alt: 'Eine Geburtstagstorte mit Kerzen und einer Zahl darauf.',
          caption: 'Wie alt wird sie heute?',
        },
        {
          id: 'b2-3-dlg',
          type: 'DIALOGUE',
          title: 'Auf einer Geburtstagsfeier',
          lines: [
            { speaker: 'Jonas', text: 'Wie alt ist deine Oma heute?' },
            { speaker: 'Mira', text: 'Sie ist heute fünfundachtzig!' },
            { speaker: 'Jonas', text: 'Wow! Und dein Opa?' },
            { speaker: 'Mira', text: 'Er ist schon zweiundneunzig.' },
            { speaker: 'Jonas', text: 'Und wie alt bist du?' },
            { speaker: 'Mira', text: 'Ich bin achtundzwanzig. Und du?' },
            { speaker: 'Jonas', text: 'Ich bin einunddreißig.' },
          ],
        },
        {
          id: 'b2-3-info-zehner',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Die Zehner',
          text: 'Die Zehner enden auf -zig. Ausnahmen: dreißig schreibt man mit ß, bei sechzig und siebzig fällt wie bei 16 und 17 ein Teil weg.',
          translations: {
            en: {
              title: 'The tens',
              text: 'The tens end in -zig. Exceptions: dreißig is spelled with ß, and in sechzig and siebzig part of the word drops out, just like in 16 and 17.',
            },
            es: {
              title: 'Las decenas',
              text: 'Las decenas terminan en -zig. Excepciones: dreißig se escribe con ß, y en sechzig y siebzig se pierde una parte, igual que en 16 y 17.',
            },
            fr: {
              title: 'Les dizaines',
              text: 'Les dizaines se terminent en -zig. Exceptions : dreißig s’écrit avec ß, et dans sechzig et siebzig une partie disparaît, comme dans 16 et 17.',
            },
            it: {
              title: 'Le decine',
              text: 'Le decine finiscono in -zig. Eccezioni: dreißig si scrive con la ß, e in sechzig e siebzig cade una parte, come in 16 e 17.',
            },
          },
          table: {
            headers: ['Zahl', 'Wort', 'Zahl', 'Wort'],
            rows: [
              ['10', 'zehn', '60', 'sechzig'],
              ['20', 'zwanzig', '70', 'siebzig'],
              ['30', 'dreißig', '80', 'achtzig'],
              ['40', 'vierzig', '90', 'neunzig'],
              ['50', 'fünfzig', '100', 'hundert'],
            ],
          },
        },
        {
          id: 'b2-3-info-umgekehrt',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Erst die Einer, dann die Zehner',
          text: 'Zwischen 21 und 99 spricht man die Einer zuerst und verbindet sie mit „und“: 21 = einundzwanzig, 47 = siebenundvierzig. Aus „eins“ wird dabei „ein“. Man schreibt alles in einem Wort.',
          translations: {
            en: {
              title: 'Units first, then tens',
              text: 'Between 21 and 99 you say the units first and join them with „und“: 21 = einundzwanzig (one-and-twenty), 47 = siebenundvierzig. „eins“ becomes „ein“. Everything is written as one word.',
            },
            es: {
              title: 'Primero las unidades, luego las decenas',
              text: 'Entre 21 y 99 se dicen primero las unidades y se unen con „und“: 21 = einundzwanzig (uno-y-veinte), 47 = siebenundvierzig. „eins“ se convierte en „ein“. Todo se escribe en una sola palabra.',
            },
            fr: {
              title: 'D’abord les unités, puis les dizaines',
              text: 'Entre 21 et 99, on dit d’abord les unités et on les relie par « und » : 21 = einundzwanzig (un-et-vingt), 47 = siebenundvierzig. « eins » devient « ein ». On écrit le tout en un seul mot.',
            },
            it: {
              title: 'Prima le unità, poi le decine',
              text: 'Tra 21 e 99 si dicono prima le unità, unite con „und“: 21 = einundzwanzig (uno-e-venti), 47 = siebenundvierzig. „eins“ diventa „ein“. Si scrive tutto in una parola.',
            },
          },
        },
        {
          id: 'b2-3-match-zahlen',
          type: 'MATCHING',
          instruction: 'Verbinden Sie Ziffer und Wort.',
          left: [
            { id: 'z1', text: '34' },
            { id: 'z2', text: '43' },
            { id: 'z3', text: '67' },
            { id: 'z4', text: '76' },
          ],
          right: [
            { id: 'zw1', text: 'vierunddreißig' },
            { id: 'zw2', text: 'dreiundvierzig' },
            { id: 'zw3', text: 'siebenundsechzig' },
            { id: 'zw4', text: 'sechsundsiebzig' },
          ],
          solution: [
            { leftId: 'z1', rightId: 'zw1' },
            { leftId: 'z2', rightId: 'zw2' },
            { leftId: 'z3', rightId: 'zw3' },
            { leftId: 'z4', rightId: 'zw4' },
          ],
        },
        {
          id: 'b2-3-audio',
          type: 'AUDIO',
          title: 'Hören Sie: Welche Zahl ist das?',
          audioUrl: 'placeholder://b2-numbers-100',
          durationSec: 30,
          transcript:
            'einundzwanzig – zweiunddreißig – fünfundvierzig – achtundfünfzig – dreiundsechzig – neunundneunzig – hundert.\nAchten Sie auf die Reihenfolge: Sie hören zuerst die Einer.',
        },
        {
          id: 'b2-3-cloze-zahlen',
          type: 'CLOZE',
          instruction: 'Schreiben Sie die Zahl als Wort.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '21 = ' },
            { kind: 'GAP', gapId: 'n1', solution: ['einundzwanzig'], width: 14 },
            { kind: 'TEXT', text: '\n38 = ' },
            { kind: 'GAP', gapId: 'n2', solution: ['achtunddreißig', 'achtunddreissig'], width: 15 },
            { kind: 'TEXT', text: '\n60 = ' },
            { kind: 'GAP', gapId: 'n3', solution: ['sechzig'], width: 9 },
            { kind: 'TEXT', text: '\n99 = ' },
            { kind: 'GAP', gapId: 'n4', solution: ['neunundneunzig'], width: 15 },
          ],
        },
        {
          id: 'b2-3-info-alter',
          type: 'INFO',
          variant: 'TIP',
          title: 'Nach dem Alter fragen',
          text: 'Das Alter gibt man mit „sein“ an – nicht mit „haben“: Ich bin 28 (Jahre alt). Unter Erwachsenen, die sich siezen, fragt man eher selten nach dem Alter.',
          translations: {
            en: {
              title: 'Asking someone’s age',
              text: 'Age is given with „sein“ (to be) – not with „haben“ (to have): Ich bin 28 (Jahre alt). Adults who use „Sie“ with each other rarely ask about age.',
            },
            es: {
              title: 'Preguntar la edad',
              text: 'La edad se dice con „sein“ (ser) – no con „haben“ (tener): Ich bin 28 (Jahre alt). Entre adultos que se tratan de „Sie“, se pregunta poco por la edad.',
            },
            fr: {
              title: 'Demander l’âge',
              text: 'L’âge se dit avec « sein » (être) – pas avec « haben » (avoir) : Ich bin 28 (Jahre alt). Entre adultes qui se vouvoient, on demande rarement l’âge.',
            },
            it: {
              title: 'Chiedere l’età',
              text: 'L’età si dice con „sein“ (essere) – non con „haben“ (avere): Ich bin 28 (Jahre alt). Tra adulti che si danno del Lei si chiede raramente l’età.',
            },
          },
          table: {
            headers: ['Frage', 'Antwort'],
            rows: [
              ['Wie alt bist du?', 'Ich bin 25.'],
              ['Wie alt sind Sie?', 'Ich bin 42 Jahre alt.'],
              ['Wie alt ist dein Sohn?', 'Er ist sieben.'],
            ],
          },
        },
        {
          id: 'b2-3-choice-alter',
          type: 'CHOICE',
          instruction: 'Welcher Satz ist richtig?',
          multiple: false,
          options: [
            { id: 'a1', text: 'Ich habe 30 Jahre.' },
            { id: 'a2', text: 'Ich bin 30 Jahre alt.' },
            { id: 'a3', text: 'Ich bin 30 alt Jahre.' },
          ],
          solution: ['a2'],
          explanation:
            'Im Deutschen „ist“ man ein bestimmtes Alter: Ich bin 30 Jahre alt. „Jahre alt“ darf man auch weglassen.',
          explanationTranslations: {
            en: 'In German you „are“ a certain age: Ich bin 30 Jahre alt. You can also leave out „Jahre alt“.',
            es: 'En alemán se „es“ de una edad: Ich bin 30 Jahre alt. También se puede omitir „Jahre alt“.',
            fr: 'En allemand, on « est » un certain âge : Ich bin 30 Jahre alt. On peut aussi omettre « Jahre alt ».',
            it: 'In tedesco si „è“ una certa età: Ich bin 30 Jahre alt. Si può anche omettere „Jahre alt“.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – Beruf: männliche und weibliche Form, dann „haben“.
  {
    order: 4,
    title: 'Was sind Sie von Beruf?',
    subtitle: 'Berufe, das Verb haben',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'b2-4-h1', type: 'HEADING', level: 1, text: 'Was sind Sie von Beruf?' },
        {
          id: 'b2-4-image',
          type: 'IMAGE',
          url: 'illustration:portraits',
          alt: 'Mehrere Porträts nebeneinander, jede Person in typischer Arbeitskleidung.',
          caption: 'Viele Menschen, viele Berufe.',
        },
        {
          id: 'b2-4-dlg',
          type: 'DIALOGUE',
          title: 'Im Deutschkurs',
          lines: [
            { speaker: 'Lehrerin', text: 'Herr Haddad, was sind Sie von Beruf?' },
            { speaker: 'Samir', text: 'Ich bin Koch. Ich arbeite in einem Restaurant.' },
            { speaker: 'Lehrerin', text: 'Und Sie, Frau Yildiz?' },
            { speaker: 'Elif', text: 'Ich bin Ärztin. Aber jetzt lerne ich Deutsch.' },
            { speaker: 'Lehrerin', text: 'Haben Sie Kinder?' },
            { speaker: 'Elif', text: 'Ja, ich habe zwei Kinder, einen Sohn und eine Tochter.' },
          ],
        },
        {
          id: 'b2-4-info-beruf',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Berufe: männlich und weiblich',
          text: 'Die weibliche Form bekommt meistens die Endung -in, manchmal zusätzlich einen Umlaut. Vor dem Beruf steht kein Artikel: Ich bin Lehrerin. Er ist Koch.',
          translations: {
            en: {
              title: 'Jobs: masculine and feminine',
              text: 'The feminine form usually takes the ending -in, sometimes with an added umlaut. No article is used before the job: Ich bin Lehrerin (I am a teacher). Er ist Koch (He is a cook).',
            },
            es: {
              title: 'Profesiones: masculino y femenino',
              text: 'La forma femenina suele llevar la terminación -in, a veces también una diéresis. Delante de la profesión no va artículo: Ich bin Lehrerin (soy profesora). Er ist Koch (él es cocinero).',
            },
            fr: {
              title: 'Les métiers : masculin et féminin',
              text: 'La forme féminine prend le plus souvent la terminaison -in, parfois avec un Umlaut en plus. On ne met pas d’article devant le métier : Ich bin Lehrerin (je suis enseignante). Er ist Koch (il est cuisinier).',
            },
            it: {
              title: 'Le professioni: maschile e femminile',
              text: 'La forma femminile prende di solito la desinenza -in, a volte anche con l’Umlaut. Davanti alla professione non si mette l’articolo: Ich bin Lehrerin (sono insegnante). Er ist Koch (lui è cuoco).',
            },
          },
          table: {
            headers: ['männlich', 'weiblich'],
            rows: [
              ['der Lehrer', 'die Lehrerin'],
              ['der Verkäufer', 'die Verkäuferin'],
              ['der Student', 'die Studentin'],
              ['der Ingenieur', 'die Ingenieurin'],
              ['der Arzt', 'die Ärztin'],
              ['der Koch', 'die Köchin'],
            ],
          },
        },
        {
          id: 'b2-4-cloze-beruf',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die weibliche Form.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Paul ist Lehrer, Anna ist ' },
            { kind: 'GAP', gapId: 'b1', solution: ['Lehrerin'], width: 10 },
            { kind: 'TEXT', text: '.\n2. Max ist Student, Sara ist ' },
            { kind: 'GAP', gapId: 'b2', solution: ['Studentin'], width: 10 },
            { kind: 'TEXT', text: '.\n3. Herr Kaya ist Arzt, Frau Kaya ist ' },
            { kind: 'GAP', gapId: 'b3', solution: ['Ärztin', 'Aerztin'], width: 8 },
            { kind: 'TEXT', text: '.\n4. Samir ist Koch, seine Schwester ist auch ' },
            { kind: 'GAP', gapId: 'b4', solution: ['Köchin', 'Koechin'], width: 8 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'b2-4-choice-artikel',
          type: 'CHOICE',
          instruction: 'Welcher Satz ist richtig?',
          multiple: false,
          options: [
            { id: 'c1', text: 'Ich bin eine Ingenieurin.' },
            { id: 'c2', text: 'Ich bin Ingenieurin.' },
            { id: 'c3', text: 'Ich bin die Ingenieurin.' },
          ],
          solution: ['c2'],
          explanation: 'Nach „Ich bin …“ steht der Beruf ohne Artikel: Ich bin Ingenieurin.',
          explanationTranslations: {
            en: 'After „Ich bin …“ the job comes without an article: Ich bin Ingenieurin.',
            es: 'Después de „Ich bin …“ la profesión va sin artículo: Ich bin Ingenieurin.',
            fr: 'Après « Ich bin … », le métier s’emploie sans article : Ich bin Ingenieurin.',
            it: 'Dopo „Ich bin …“ la professione va senza articolo: Ich bin Ingenieurin.',
          },
        },
        {
          id: 'b2-4-info-haben',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Das Verb haben',
          text: '„haben“ ist neben „sein“ das wichtigste Verb. Bei „du“ und „er/sie/es“ fällt das b weg: du hast, er hat.',
          translations: {
            en: {
              title: 'The verb haben',
              text: 'Alongside „sein“, „haben“ (to have) is the most important verb. With „du“ and „er/sie/es“ the b drops out: du hast, er hat.',
            },
            es: {
              title: 'El verbo haben',
              text: 'Junto con „sein“, „haben“ (tener) es el verbo más importante. Con „du“ y „er/sie/es“ desaparece la b: du hast, er hat.',
            },
            fr: {
              title: 'Le verbe haben',
              text: 'Avec « sein », « haben » (avoir) est le verbe le plus important. Avec « du » et « er/sie/es », le b disparaît : du hast, er hat.',
            },
            it: {
              title: 'Il verbo haben',
              text: 'Insieme a „sein“, „haben“ (avere) è il verbo più importante. Con „du“ ed „er/sie/es“ la b scompare: du hast, er hat.',
            },
          },
          table: {
            headers: ['Person', 'haben'],
            rows: [
              ['ich', 'habe'],
              ['du', 'hast'],
              ['er / sie / es', 'hat'],
              ['wir', 'haben'],
              ['ihr', 'habt'],
              ['sie / Sie', 'haben'],
            ],
          },
        },
        {
          id: 'b2-4-cloze-haben',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die richtige Form von haben.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Ich ' },
            { kind: 'GAP', gapId: 'h1', solution: ['habe'], width: 6 },
            { kind: 'TEXT', text: ' einen Bruder.\n2. ' },
            { kind: 'GAP', gapId: 'h2', solution: ['Hast'], width: 6 },
            { kind: 'TEXT', text: ' du Geschwister?\n3. Elif ' },
            { kind: 'GAP', gapId: 'h3', solution: ['hat'], width: 6 },
            { kind: 'TEXT', text: ' zwei Kinder.\n4. Wir ' },
            { kind: 'GAP', gapId: 'h4', solution: ['haben'], width: 6 },
            { kind: 'TEXT', text: ' keine Kinder.' },
          ],
        },
        {
          id: 'b2-4-order',
          type: 'ORDERING',
          instruction: 'Bilden Sie eine Frage.',
          items: [
            { id: 'q1', text: 'Was' },
            { id: 'q2', text: 'sind' },
            { id: 'q3', text: 'Sie' },
            { id: 'q4', text: 'von' },
            { id: 'q5', text: 'Beruf?' },
          ],
          solution: ['q1', 'q2', 'q3', 'q4', 'q5'],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – Rückblick, zum Schluss ein Text über die eigene Familie.
  {
    order: 5,
    title: 'Kannst du das schon?',
    subtitle: 'Rückblick auf das ganze Kapitel',
    estimatedMinutes: 15,
    content: {
      version: v,
      blocks: [
        { id: 'b2-5-h1', type: 'HEADING', level: 1, text: 'Kannst du das schon?' },
        {
          id: 'b2-5-intro',
          type: 'TEXT',
          text: 'Prüfen Sie, was Sie aus Kapitel 2 mitnehmen. Am Ende stellen Sie Ihre eigene Familie vor.',
          translations: {
            en: 'Check what you take away from Chapter 2. At the end, you’ll introduce your own family.',
            es: 'Compruebe qué se lleva del Capítulo 2. Al final presentará a su propia familia.',
            fr: 'Vérifiez ce que vous retenez du chapitre 2. À la fin, vous présenterez votre propre famille.',
            it: 'Verifichi cosa porta a casa dal Capitolo 2. Alla fine presenterà la sua famiglia.',
          },
        },
        {
          id: 'b2-5-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie den Text.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Hallo, ich bin Marco. Ich ' },
            { kind: 'GAP', gapId: 'r1', solution: ['bin'], width: 5 },
            { kind: 'TEXT', text: ' 34 Jahre alt und Verkäufer von Beruf. ' },
            { kind: 'GAP', gapId: 'r2', solution: ['Meine'], width: 6 },
            { kind: 'TEXT', text: ' Frau heißt Julia. Sie ist ' },
            { kind: 'GAP', gapId: 'r3', solution: ['Lehrerin'], width: 9 },
            { kind: 'TEXT', text: '. Wir ' },
            { kind: 'GAP', gapId: 'r4', solution: ['haben'], width: 6 },
            { kind: 'TEXT', text: ' eine Tochter. ' },
            { kind: 'GAP', gapId: 'r5', solution: ['Ihr'], width: 5 },
            { kind: 'TEXT', text: ' Name ist Sofia.' },
          ],
        },
        {
          id: 'b2-5-match',
          type: 'MATCHING',
          instruction: 'Ordnen Sie Frage und Antwort zu.',
          left: [
            { id: 'm1', text: 'Hast du Geschwister?' },
            { id: 'm2', text: 'Wie alt ist dein Vater?' },
            { id: 'm3', text: 'Was ist deine Mutter von Beruf?' },
            { id: 'm4', text: 'Wie heißt dein Sohn?' },
          ],
          right: [
            { id: 'y1', text: 'Ja, eine Schwester.' },
            { id: 'y2', text: 'Er ist 61.' },
            { id: 'y3', text: 'Sie ist Ärztin.' },
            { id: 'y4', text: 'Er heißt Leon.' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'y1' },
            { leftId: 'm2', rightId: 'y2' },
            { leftId: 'm3', rightId: 'y3' },
            { leftId: 'm4', rightId: 'y4' },
          ],
        },
        {
          id: 'b2-5-choice',
          type: 'CHOICE',
          instruction: 'Welche Sätze sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'k1', text: 'Das ist meine Bruder.' },
            { id: 'k2', text: 'Das sind meine Eltern.' },
            { id: 'k3', text: 'Mein Opa ist neunzig.' },
            { id: 'k4', text: 'Er ist ein Arzt von Beruf.' },
          ],
          solution: ['k2', 'k3'],
          explanation:
            '„Bruder“ ist männlich, also „mein Bruder“. Vor dem Beruf steht kein Artikel: Er ist Arzt.',
          explanationTranslations: {
            en: '„Bruder“ is masculine, so „mein Bruder“. No article before a job: Er ist Arzt.',
            es: '„Bruder“ es masculino, así que „mein Bruder“. Delante de la profesión no va artículo: Er ist Arzt.',
            fr: '« Bruder » est masculin, donc « mein Bruder ». Pas d’article devant un métier : Er ist Arzt.',
            it: '„Bruder“ è maschile, quindi „mein Bruder“. Davanti alla professione niente articolo: Er ist Arzt.',
          },
        },
        {
          id: 'b2-5-writing',
          type: 'WRITING',
          instruction: 'Stellen Sie Ihre Familie vor.',
          prompt:
            'Schreiben Sie vier bis sechs Sätze: Wer gehört zu Ihrer Familie? Wie heißen die Personen, wie alt sind sie, was sind sie von Beruf? Nutzen Sie mein/meine.',
          minWords: 20,
          maxWords: 100,
          aiFeedback: true,
          sampleAnswer:
            'Meine Familie ist nicht groß. Mein Vater heißt Karl, er ist 63 und Ingenieur. Meine Mutter heißt Rosa, sie ist 60 und Verkäuferin. Ich habe eine Schwester. Ihr Name ist Clara, sie ist 27 und Studentin.',
        },
      ],
    },
  },
];
