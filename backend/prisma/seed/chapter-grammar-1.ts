import type { UnitSeed } from './chapter-beginner-1';

/**
 * Grammatik, Kapitel 1: „Artikel und Nomen“
 *
 * Musterkapitel des Grammatikbuchs, drei Seiten lang. Es zeigt, wie ein
 * Grammatikkapitel hier gebaut ist: eine Regel, ihre Tabelle, und unmittelbar
 * danach die Aufgabe, die genau diese Regel abfragt – keine Regelsammlung
 * vorn und kein Übungsteil hinten.
 *
 * Die Erklärungen sind in die vier Oberflächensprachen übersetzt. Anders als
 * im Kursbuch ist das hier keine A1-Sonderregel, sondern durchgehend so
 * gedacht: Wer eine Regel nachschlägt, will sie verstehen, nicht erst
 * entziffern. Die Tabellen bleiben unübersetzt – sie enthalten das Deutsche
 * selbst.
 */
const v = 1;

export const GRAMMAR_1_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – was ein Artikel ist, und warum man ihn mitlernen muss.
  {
    order: 1,
    title: 'der, die, das',
    subtitle: 'Bestimmter und unbestimmter Artikel',
    estimatedMinutes: 20,
    content: {
      version: v,
      blocks: [
        { id: 'g1-1-h1', type: 'HEADING', level: 1, text: 'der, die, das' },
        {
          id: 'g1-1-intro',
          type: 'TEXT',
          text: 'Jedes deutsche Nomen hat ein Geschlecht: männlich, weiblich oder sächlich. Man hört es dem Wort nicht an, und es hat wenig mit der Sache selbst zu tun – das Mädchen ist sächlich, der Löffel männlich, die Gabel weiblich. Deshalb gilt die wichtigste Regel dieses Kapitels: Lernen Sie ein Nomen nie allein, sondern immer mit seinem Artikel.',
          translations: {
            en: 'Every German noun has a gender: masculine, feminine or neuter. You cannot hear it in the word, and it has little to do with the thing itself – das Mädchen (girl) is neuter, der Löffel (spoon) masculine, die Gabel (fork) feminine. Hence the most important rule in this chapter: never learn a noun on its own, always learn it with its article.',
            es: 'Todo sustantivo alemán tiene un género: masculino, femenino o neutro. No se oye en la palabra y tiene poco que ver con la cosa misma: das Mädchen (la chica) es neutro, der Löffel (la cuchara) masculino, die Gabel (el tenedor) femenino. De ahí la regla más importante de este capítulo: nunca aprenda un sustantivo solo, apréndalo siempre con su artículo.',
            fr: 'Chaque nom allemand a un genre : masculin, féminin ou neutre. On ne l’entend pas au mot, et cela a peu à voir avec la chose elle-même – das Mädchen (la fille) est neutre, der Löffel (la cuillère) masculin, die Gabel (la fourchette) féminin. D’où la règle la plus importante de ce chapitre : n’apprenez jamais un nom seul, apprenez-le toujours avec son article.',
            it: 'Ogni sostantivo tedesco ha un genere: maschile, femminile o neutro. Non si sente nella parola e ha poco a che fare con la cosa stessa: das Mädchen (la ragazza) è neutro, der Löffel (il cucchiaio) maschile, die Gabel (la forchetta) femminile. Da qui la regola più importante di questo capitolo: non impari mai un sostantivo da solo, lo impari sempre con il suo articolo.',
          },
        },
        {
          id: 'g1-1-info-bestimmt',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Bestimmt oder unbestimmt?',
          text: 'Der bestimmte Artikel (der, die, das) steht bei etwas, das beide Gesprächspartner kennen. Der unbestimmte Artikel (ein, eine) steht, wenn etwas neu ins Gespräch kommt. Deshalb heißt es erst „Ich kaufe einen Tisch“ und danach „Der Tisch ist braun“.',
          table: {
            headers: ['', 'männlich', 'weiblich', 'sächlich', 'Plural'],
            rows: [
              ['bestimmt', 'der Tisch', 'die Lampe', 'das Bild', 'die Tische'],
              ['unbestimmt', 'ein Tisch', 'eine Lampe', 'ein Bild', '– Tische'],
              ['verneint', 'kein Tisch', 'keine Lampe', 'kein Bild', 'keine Tische'],
            ],
          },
          translations: {
            en: {
              title: 'Definite or indefinite?',
              text: 'The definite article (der, die, das) is used for something both speakers already know about. The indefinite article (ein, eine) introduces something new. That is why you first say „Ich kaufe einen Tisch“ and afterwards „Der Tisch ist braun“.',
            },
            es: {
              title: '¿Determinado o indeterminado?',
              text: 'El artículo determinado (der, die, das) se usa para algo que ambos interlocutores ya conocen. El indeterminado (ein, eine) introduce algo nuevo. Por eso primero se dice „Ich kaufe einen Tisch“ y después „Der Tisch ist braun“.',
            },
            fr: {
              title: 'Défini ou indéfini ?',
              text: 'L’article défini (der, die, das) désigne une chose que les deux interlocuteurs connaissent déjà. L’article indéfini (ein, eine) introduit une chose nouvelle. C’est pourquoi on dit d’abord « Ich kaufe einen Tisch », puis « Der Tisch ist braun ».',
            },
            it: {
              title: 'Determinativo o indeterminativo?',
              text: 'L’articolo determinativo (der, die, das) indica qualcosa che entrambi gli interlocutori già conoscono. Quello indeterminativo (ein, eine) introduce qualcosa di nuovo. Per questo prima si dice „Ich kaufe einen Tisch“ e poi „Der Tisch ist braun“.',
            },
          },
        },
        {
          id: 'g1-1-choice-neu',
          type: 'CHOICE',
          instruction: 'Sie erzählen von Ihrer neuen Wohnung. Welcher Satz beginnt das Gespräch?',
          multiple: false,
          options: [
            { id: 'n1', text: 'Die Wohnung hat einen Balkon.' },
            { id: 'n2', text: 'Ich habe eine Wohnung gefunden.' },
            { id: 'n3', text: 'Ich habe die Wohnung gefunden.' },
          ],
          solution: ['n2'],
          explanation:
            'Die Wohnung kommt neu ins Gespräch – also der unbestimmte Artikel: eine Wohnung. Erst danach kann man von „der Wohnung“ sprechen.',
          explanationTranslations: {
            en: 'The flat is new to the conversation – so the indefinite article: eine Wohnung. Only afterwards can you speak of „der Wohnung“.',
            es: 'El piso entra nuevo en la conversación, así que artículo indeterminado: eine Wohnung. Solo después se puede hablar de „der Wohnung“.',
            fr: 'L’appartement est nouveau dans la conversation : article indéfini, eine Wohnung. Ce n’est qu’ensuite que l’on peut parler de « der Wohnung ».',
            it: 'L’appartamento entra nuovo nella conversazione, quindi articolo indeterminativo: eine Wohnung. Solo dopo si può parlare di „der Wohnung“.',
          },
        },
        {
          id: 'g1-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: Nomen mit Artikel',
          items: [
            { term: 'Tisch', article: 'der', translations: { en: 'table' }, plural: 'die Tische' },
            { term: 'Lampe', article: 'die', translations: { en: 'lamp' }, plural: 'die Lampen' },
            { term: 'Bild', article: 'das', translations: { en: 'picture' }, plural: 'die Bilder' },
            { term: 'Stuhl', article: 'der', translations: { en: 'chair' }, plural: 'die Stühle' },
            { term: 'Tür', article: 'die', translations: { en: 'door' }, plural: 'die Türen' },
            { term: 'Fenster', article: 'das', translations: { en: 'window' }, plural: 'die Fenster' },
          ],
        },
        {
          id: 'g1-1-match-artikel',
          type: 'MATCHING',
          instruction: 'Ordnen Sie jedem Nomen seinen Artikel zu.',
          left: [
            { id: 'w1', text: 'Stuhl' },
            { id: 'w2', text: 'Tür' },
            { id: 'w3', text: 'Fenster' },
            { id: 'w4', text: 'Tisch' },
          ],
          right: [
            { id: 'ar1', text: 'der' },
            { id: 'ar2', text: 'die' },
            { id: 'ar3', text: 'das' },
            { id: 'ar4', text: 'der' },
          ],
          solution: [
            { leftId: 'w1', rightId: 'ar1' },
            { leftId: 'w2', rightId: 'ar2' },
            { leftId: 'w3', rightId: 'ar3' },
            { leftId: 'w4', rightId: 'ar4' },
          ],
        },
        {
          id: 'g1-1-info-gross',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Nomen schreibt man groß',
          text: 'Im Deutschen beginnt jedes Nomen mit einem großen Buchstaben – mitten im Satz genauso wie am Anfang: „Ich kaufe einen Tisch und zwei Stühle.“ Keine andere europäische Sprache macht das so durchgehend.',
          translations: {
            en: {
              title: 'Nouns are capitalised',
              text: 'In German every noun starts with a capital letter – in the middle of a sentence just as at the beginning: „Ich kaufe einen Tisch und zwei Stühle.“ No other European language does this so consistently.',
            },
            es: {
              title: 'Los sustantivos se escriben con mayúscula',
              text: 'En alemán, todo sustantivo empieza con mayúscula, tanto en medio de la frase como al principio: „Ich kaufe einen Tisch und zwei Stühle.“ Ninguna otra lengua europea lo hace de forma tan sistemática.',
            },
            fr: {
              title: 'Les noms prennent une majuscule',
              text: 'En allemand, chaque nom commence par une majuscule – au milieu de la phrase comme au début : « Ich kaufe einen Tisch und zwei Stühle. » Aucune autre langue européenne ne le fait aussi systématiquement.',
            },
            it: {
              title: 'I sostantivi si scrivono maiuscoli',
              text: 'In tedesco ogni sostantivo inizia con la maiuscola, a metà frase come all’inizio: „Ich kaufe einen Tisch und zwei Stühle.“ Nessun’altra lingua europea lo fa in modo così sistematico.',
            },
          },
        },
        {
          id: 'g1-1-cloze-artikel',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie den bestimmten Artikel: der, die oder das.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Das ist mein Zimmer. Links steht ' },
            { kind: 'GAP', gapId: 'c1', solution: ['der'], width: 5 },
            { kind: 'TEXT', text: ' Tisch, daneben ' },
            { kind: 'GAP', gapId: 'c2', solution: ['der'], width: 5 },
            { kind: 'TEXT', text: ' Stuhl. Über dem Tisch hängt ' },
            { kind: 'GAP', gapId: 'c3', solution: ['das'], width: 5 },
            { kind: 'TEXT', text: ' Bild. Rechts ist ' },
            { kind: 'GAP', gapId: 'c4', solution: ['die'], width: 5 },
            { kind: 'TEXT', text: ' Tür, und dahinter liegt ' },
            { kind: 'GAP', gapId: 'c5', solution: ['die'], width: 5 },
            { kind: 'TEXT', text: ' Küche.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – die Endungen, an denen man das Geschlecht doch erkennt.
  {
    order: 2,
    title: 'Endungen verraten das Geschlecht',
    subtitle: 'Wann man den Artikel erraten kann',
    estimatedMinutes: 20,
    content: {
      version: v,
      blocks: [
        { id: 'g1-2-h1', type: 'HEADING', level: 1, text: 'Endungen verraten das Geschlecht' },
        {
          id: 'g1-2-intro',
          type: 'TEXT',
          text: 'Ganz willkürlich ist das Geschlecht doch nicht. Rund ein Drittel aller Nomen trägt eine Endung, die das Geschlecht sicher anzeigt. Wer diese Endungen kennt, muss deutlich weniger auswendig lernen.',
          translations: {
            en: 'Gender is not entirely arbitrary after all. About a third of all nouns carry an ending that reliably shows the gender. Knowing these endings means far less to memorise.',
            es: 'Al final, el género no es del todo arbitrario. Alrededor de un tercio de los sustantivos lleva una terminación que indica el género con seguridad. Conocer esas terminaciones reduce mucho lo que hay que memorizar.',
            fr: 'Le genre n’est finalement pas totalement arbitraire. Environ un tiers des noms portent une terminaison qui indique le genre de façon sûre. Connaître ces terminaisons, c’est beaucoup moins à apprendre par cœur.',
            it: 'Il genere non è poi del tutto arbitrario. Circa un terzo dei sostantivi ha una desinenza che indica il genere con sicurezza. Conoscere queste desinenze significa molto meno da imparare a memoria.',
          },
        },
        {
          id: 'g1-2-info-endungen',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Endungen und ihr Artikel',
          text: 'Diese Endungen sind verlässlich – Ausnahmen gibt es kaum. Besonders nützlich ist die weibliche Gruppe: -ung, -heit, -keit, -schaft, -tion und -ei sind immer die.',
          table: {
            headers: ['Artikel', 'Endung', 'Beispiel'],
            rows: [
              ['der', '-er, -ling, -ismus', 'der Lehrer, der Frühling, der Realismus'],
              ['die', '-ung, -heit, -keit', 'die Zeitung, die Freiheit, die Möglichkeit'],
              ['die', '-schaft, -tion, -ei', 'die Freundschaft, die Nation, die Bäckerei'],
              ['das', '-chen, -lein', 'das Mädchen, das Fräulein'],
              ['das', '-um, -ment', 'das Zentrum, das Dokument'],
            ],
          },
          translations: {
            en: {
              title: 'Endings and their article',
              text: 'These endings are reliable – there are hardly any exceptions. The feminine group is especially useful: -ung, -heit, -keit, -schaft, -tion and -ei are always die.',
            },
            es: {
              title: 'Terminaciones y su artículo',
              text: 'Estas terminaciones son fiables: apenas hay excepciones. El grupo femenino es especialmente útil: -ung, -heit, -keit, -schaft, -tion y -ei son siempre die.',
            },
            fr: {
              title: 'Les terminaisons et leur article',
              text: 'Ces terminaisons sont fiables – il n’y a presque pas d’exceptions. Le groupe féminin est particulièrement utile : -ung, -heit, -keit, -schaft, -tion et -ei sont toujours die.',
            },
            it: {
              title: 'Le desinenze e il loro articolo',
              text: 'Queste desinenze sono affidabili: le eccezioni sono pochissime. Il gruppo femminile è particolarmente utile: -ung, -heit, -keit, -schaft, -tion ed -ei sono sempre die.',
            },
          },
        },
        {
          id: 'g1-2-match-endung',
          type: 'MATCHING',
          instruction: 'Ordnen Sie jeder Endung den passenden Artikel zu.',
          left: [
            { id: 'e1', text: '-ung (die Wohnung)' },
            { id: 'e2', text: '-chen (das Brötchen)' },
            { id: 'e3', text: '-er (der Fahrer)' },
            { id: 'e4', text: '-keit (die Sicherheit)' },
          ],
          right: [
            { id: 'ae1', text: 'die' },
            { id: 'ae2', text: 'das' },
            { id: 'ae3', text: 'der' },
            { id: 'ae4', text: 'die' },
          ],
          solution: [
            { leftId: 'e1', rightId: 'ae1' },
            { leftId: 'e2', rightId: 'ae2' },
            { leftId: 'e3', rightId: 'ae3' },
            { leftId: 'e4', rightId: 'ae4' },
          ],
        },
        {
          id: 'g1-2-cloze-endung',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie den Artikel. Achten Sie auf die Endung.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Am Morgen lese ich ' },
            { kind: 'GAP', gapId: 'e1', solution: ['die'], width: 5 },
            { kind: 'TEXT', text: ' Zeitung. ' },
            { kind: 'GAP', gapId: 'e2', solution: ['der'], width: 5 },
            { kind: 'TEXT', text: ' Lehrer bringt ' },
            { kind: 'GAP', gapId: 'e3', solution: ['das'], width: 5 },
            { kind: 'TEXT', text: ' Dokument mit. ' },
            { kind: 'GAP', gapId: 'e4', solution: ['die'], width: 5 },
            { kind: 'TEXT', text: ' Freundschaft ist ihm wichtig, und ' },
            { kind: 'GAP', gapId: 'e5', solution: ['das'], width: 5 },
            { kind: 'TEXT', text: ' Mädchen wartet vor ' },
            { kind: 'GAP', gapId: 'e6', solution: ['der'], width: 5 },
            { kind: 'TEXT', text: ' Bäckerei.' },
          ],
        },
        {
          id: 'g1-2-choice-ausnahme',
          type: 'CHOICE',
          instruction: 'Welche Wörter sind weiblich? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'x1', text: 'Meinung' },
            { id: 'x2', text: 'Zentrum' },
            { id: 'x3', text: 'Gesundheit' },
            { id: 'x4', text: 'Kindheit' },
            { id: 'x5', text: 'Frühling' },
          ],
          solution: ['x1', 'x3', 'x4'],
          explanation:
            '-ung und -heit sind immer weiblich: die Meinung, die Gesundheit, die Kindheit. -um ist sächlich (das Zentrum), -ling männlich (der Frühling).',
          explanationTranslations: {
            en: '-ung and -heit are always feminine: die Meinung, die Gesundheit, die Kindheit. -um is neuter (das Zentrum), -ling masculine (der Frühling).',
            es: '-ung y -heit son siempre femeninos: die Meinung, die Gesundheit, die Kindheit. -um es neutro (das Zentrum) y -ling masculino (der Frühling).',
            fr: '-ung et -heit sont toujours féminins : die Meinung, die Gesundheit, die Kindheit. -um est neutre (das Zentrum), -ling masculin (der Frühling).',
            it: '-ung e -heit sono sempre femminili: die Meinung, die Gesundheit, die Kindheit. -um è neutro (das Zentrum), -ling maschile (der Frühling).',
          },
        },
        {
          id: 'g1-2-info-komposita',
          type: 'INFO',
          variant: 'TIP',
          title: 'Bei zusammengesetzten Wörtern zählt das letzte',
          text: 'Deutsch setzt Nomen gern zu langen Wörtern zusammen. Den Artikel bestimmt immer das letzte Glied: die Tür + das Schloss = das Türschloss. Wer das Ende liest, kennt den Artikel – egal wie lang das Wort ist.',
          translations: {
            en: {
              title: 'In compounds the last part decides',
              text: 'German likes to join nouns into long words. The article always comes from the last part: die Tür + das Schloss = das Türschloss. Read the end and you know the article, however long the word.',
            },
            es: {
              title: 'En las palabras compuestas manda la última',
              text: 'El alemán une sustantivos en palabras largas. El artículo lo da siempre el último elemento: die Tür + das Schloss = das Türschloss. Si lee el final, sabe el artículo, por larga que sea la palabra.',
            },
            fr: {
              title: 'Dans les composés, c’est le dernier qui décide',
              text: 'L’allemand aime assembler les noms en mots longs. L’article vient toujours du dernier élément : die Tür + das Schloss = das Türschloss. Lisez la fin et vous connaissez l’article, si long soit le mot.',
            },
            it: {
              title: 'Nei composti conta l’ultimo',
              text: 'Il tedesco unisce volentieri i sostantivi in parole lunghe. L’articolo lo dà sempre l’ultimo elemento: die Tür + das Schloss = das Türschloss. Chi legge la fine conosce l’articolo, per quanto lunga sia la parola.',
            },
          },
        },
        {
          id: 'g1-2-choice-kompositum',
          type: 'CHOICE',
          instruction: 'Welcher Artikel gehört zu „Hausaufgabe“? (das Haus + die Aufgabe)',
          multiple: false,
          options: [
            { id: 'k1', text: 'der' },
            { id: 'k2', text: 'die' },
            { id: 'k3', text: 'das' },
          ],
          solution: ['k2'],
          explanation:
            'Das letzte Glied ist „die Aufgabe“ – also die Hausaufgabe. Dass „Haus“ sächlich ist, spielt keine Rolle.',
          explanationTranslations: {
            en: 'The last part is „die Aufgabe“ – hence die Hausaufgabe. That „Haus“ is neuter does not matter.',
            es: 'El último elemento es „die Aufgabe“, de ahí die Hausaufgabe. Que „Haus“ sea neutro no importa.',
            fr: 'Le dernier élément est « die Aufgabe » : d’où die Hausaufgabe. Que « Haus » soit neutre ne change rien.',
            it: 'L’ultimo elemento è „die Aufgabe“, quindi die Hausaufgabe. Che „Haus“ sia neutro non conta.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – der Plural, fuenf Gruppen statt einer Regel.
  {
    order: 3,
    title: 'Der Plural',
    subtitle: 'Fünf Gruppen statt einer Regel',
    estimatedMinutes: 20,
    content: {
      version: v,
      blocks: [
        { id: 'g1-3-h1', type: 'HEADING', level: 1, text: 'Der Plural' },
        {
          id: 'g1-3-intro',
          type: 'TEXT',
          text: 'Das Englische hängt im Plural ein -s an, das Spanische ein -s oder -es. Das Deutsche hat fünf Möglichkeiten, und welche gilt, gehört zum Wort dazu. Gute Nachricht: Im Plural verschwinden die drei Geschlechter – es heißt immer die.',
          translations: {
            en: 'English adds -s in the plural, Spanish -s or -es. German has five options, and which one applies belongs to the word itself. The good news: in the plural the three genders disappear – it is always die.',
            es: 'El inglés añade -s en plural, el español -s o -es. El alemán tiene cinco posibilidades, y cuál se aplica forma parte de la palabra. La buena noticia: en plural desaparecen los tres géneros, siempre es die.',
            fr: 'L’anglais ajoute -s au pluriel, l’espagnol -s ou -es. L’allemand a cinq possibilités, et laquelle s’applique fait partie du mot. Bonne nouvelle : au pluriel, les trois genres disparaissent – c’est toujours die.',
            it: 'L’inglese aggiunge -s al plurale, lo spagnolo -s o -es. Il tedesco ha cinque possibilità, e quale valga fa parte della parola stessa. La buona notizia: al plurale i tre generi spariscono, è sempre die.',
          },
        },
        {
          id: 'g1-3-info-plural',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Die fünf Pluralgruppen',
          text: 'Lernen Sie den Plural zusammen mit dem Artikel – also nicht „Buch“, sondern „das Buch, die Bücher“. Zwei Faustregeln helfen: Wörter auf -e und weibliche Wörter bekommen meist -n oder -en, Fremdwörter aus dem Englischen bekommen -s.',
          table: {
            headers: ['Endung', 'Singular', 'Plural'],
            rows: [
              ['-e', 'der Tisch', 'die Tische'],
              ['-e mit Umlaut', 'der Stuhl', 'die Stühle'],
              ['-(e)n', 'die Lampe', 'die Lampen'],
              ['-er mit Umlaut', 'das Buch', 'die Bücher'],
              ['ohne Endung', 'das Fenster', 'die Fenster'],
              ['-s', 'das Auto', 'die Autos'],
            ],
          },
          translations: {
            en: {
              title: 'The five plural groups',
              text: 'Learn the plural together with the article – not „Buch“ but „das Buch, die Bücher“. Two rules of thumb help: words ending in -e and feminine words usually take -n or -en; loanwords from English take -s.',
            },
            es: {
              title: 'Los cinco grupos de plural',
              text: 'Aprenda el plural junto con el artículo: no „Buch“, sino „das Buch, die Bücher“. Dos reglas prácticas ayudan: las palabras en -e y las femeninas suelen tomar -n o -en; los extranjerismos del inglés toman -s.',
            },
            fr: {
              title: 'Les cinq groupes de pluriel',
              text: 'Apprenez le pluriel avec l’article : non pas « Buch », mais « das Buch, die Bücher ». Deux règles pratiques aident : les mots en -e et les féminins prennent le plus souvent -n ou -en ; les emprunts à l’anglais prennent -s.',
            },
            it: {
              title: 'I cinque gruppi di plurale',
              text: 'Impari il plurale insieme all’articolo: non „Buch“, ma „das Buch, die Bücher“. Due regole pratiche aiutano: le parole in -e e i femminili prendono di solito -n o -en; i prestiti dall’inglese prendono -s.',
            },
          },
        },
        {
          id: 'g1-3-match-plural',
          type: 'MATCHING',
          instruction: 'Ordnen Sie Singular und Plural zu.',
          left: [
            { id: 'p1', text: 'das Buch' },
            { id: 'p2', text: 'die Lampe' },
            { id: 'p3', text: 'der Stuhl' },
            { id: 'p4', text: 'das Auto' },
          ],
          right: [
            { id: 'q1', text: 'die Bücher' },
            { id: 'q2', text: 'die Lampen' },
            { id: 'q3', text: 'die Stühle' },
            { id: 'q4', text: 'die Autos' },
          ],
          solution: [
            { leftId: 'p1', rightId: 'q1' },
            { leftId: 'p2', rightId: 'q2' },
            { leftId: 'p3', rightId: 'q3' },
            { leftId: 'p4', rightId: 'q4' },
          ],
        },
        {
          id: 'g1-3-cloze-plural',
          type: 'CLOZE',
          instruction: 'Schreiben Sie das Wort in der Mehrzahl – ohne Artikel.',
          caseSensitive: true,
          segments: [
            { kind: 'TEXT', text: 'Im Zimmer stehen zwei ' },
            { kind: 'GAP', gapId: 'pl1', solution: ['Tische'], hint: 'der Tisch', width: 9 },
            { kind: 'TEXT', text: ' und vier ' },
            { kind: 'GAP', gapId: 'pl2', solution: ['Stühle'], hint: 'der Stuhl', width: 9 },
            { kind: 'TEXT', text: '. An der Wand hängen drei ' },
            { kind: 'GAP', gapId: 'pl3', solution: ['Bilder'], hint: 'das Bild', width: 9 },
            { kind: 'TEXT', text: '. Auf dem Regal liegen viele ' },
            { kind: 'GAP', gapId: 'pl4', solution: ['Bücher'], hint: 'das Buch', width: 9 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'g1-3-choice-plural',
          type: 'CHOICE',
          instruction: 'Wie heißt der Plural von „die Wohnung“?',
          multiple: false,
          options: [
            { id: 'w1', text: 'die Wohnunge' },
            { id: 'w2', text: 'die Wohnungen' },
            { id: 'w3', text: 'die Wöhnungen' },
          ],
          solution: ['w2'],
          explanation:
            'Weibliche Wörter bekommen -n oder -en. Bei -ung ist es immer -en: die Wohnungen. Einen Umlaut gibt es hier nicht.',
          explanationTranslations: {
            en: 'Feminine words take -n or -en. With -ung it is always -en: die Wohnungen. There is no umlaut here.',
            es: 'Las palabras femeninas toman -n o -en. Con -ung siempre es -en: die Wohnungen. Aquí no hay diéresis.',
            fr: 'Les mots féminins prennent -n ou -en. Avec -ung, c’est toujours -en : die Wohnungen. Il n’y a pas d’inflexion ici.',
            it: 'Le parole femminili prendono -n o -en. Con -ung è sempre -en: die Wohnungen. Qui non c’è metafonia.',
          },
        },
        {
          id: 'g1-3-order-satz',
          type: 'ORDERING',
          instruction: 'Bilden Sie einen Satz.',
          items: [
            { id: 's1', text: 'Die Bücher' },
            { id: 's2', text: 'liegen' },
            { id: 's3', text: 'auf' },
            { id: 's4', text: 'dem Tisch.' },
          ],
          solution: ['s1', 's2', 's3', 's4'],
        },
        {
          id: 'g1-3-writing',
          type: 'WRITING',
          instruction: 'Beschreiben Sie Ihr Zimmer.',
          prompt:
            'Schreiben Sie vier bis sechs Sätze: Was steht in Ihrem Zimmer? Verwenden Sie mindestens drei Nomen im Plural und achten Sie auf die Artikel.',
          minWords: 20,
          maxWords: 90,
          aiFeedback: true,
          sampleAnswer:
            'Mein Zimmer ist klein, aber hell. Links steht ein Tisch, daneben zwei Stühle. An der Wand hängen drei Bilder. Auf dem Regal stehen viele Bücher und eine Lampe. Die Fenster sind groß, deshalb ist es nie dunkel.',
        },
      ],
    },
  },
];
