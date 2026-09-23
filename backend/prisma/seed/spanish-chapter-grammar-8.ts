import type { UnitSeed } from './chapter-beginner-1';

/**
 * Spanische Grammatik, Kapitel 8: „Adjektive und Vergleich“
 *
 * Drei Seiten. Ein Kapitel, das man schnell für erledigt hält – Adjektive
 * angleichen kann man nach zehn Minuten – und das seine Schwierigkeiten
 * hinten hat: Die Stellung auf Seite 3 ist der Teil, den auch Fortgeschrittene
 * nachschlagen.
 *
 * Aufbau: erst die Angleichung samt der Gruppe, die im Singular gar kein
 * Geschlecht unterscheidet, und die Kurzformen vor dem Substantiv; dann der
 * Vergleich mit seinen vier unregelmäßigen Formen und die beiden Superlative,
 * die das Spanische auseinanderhält; zuletzt die Stellung, wo dasselbe Wort
 * vor und hinter dem Substantiv Verschiedenes bedeutet.
 *
 * Die Endung -ísimo steht hier nicht als Kuriosität, sondern als eigene Form
 * neben dem Superlativ mit Artikel: Beide heißen im Deutschen oft gleich, und
 * genau deshalb werden sie verwechselt.
 */
const v = 1;

export const SPANISH_GRAMMAR_8_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Angleichung und Kurzformen.
  {
    order: 1,
    title: 'Angleichung',
    subtitle: 'Geschlecht, Zahl und die Kurzformen',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'esg8-p1-h1', type: 'HEADING', level: 1, text: 'Angleichung' },
        {
          id: 'esg8-p1-intro',
          type: 'TEXT',
          text: 'El adjetivo español se adapta al sustantivo en género y número, esté donde esté en la frase: «un coche rojo», «unas casas rojas», «las sillas son nuevas». El alemán solo lo hace delante del sustantivo; el español, también detrás del verbo.',
          translations: {
            de: 'Das spanische Adjektiv richtet sich nach Geschlecht und Zahl des Substantivs, ganz gleich, wo es im Satz steht: „un coche rojo“, „unas casas rojas“, „las sillas son nuevas“. Das Deutsche tut das nur vor dem Substantiv, das Spanische auch hinter dem Verb.',
          },
        },
        {
          id: 'esg8-p1-info-dosgrupos',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Dos grupos de adjetivos',
          text: 'Los que terminan en -o tienen cuatro formas. Todos los demás – los que acaban en -e, en consonante, en -ista – solo tienen dos: una para el singular y otra para el plural, sin distinguir masculino de femenino. La excepción son los de nacionalidad, que sí forman femenino: «español / española», «alemán / alemana».',
          translations: {
            de: {
              title: 'Zwei Gruppen von Adjektiven',
              text: 'Die auf -o haben vier Formen. Alle übrigen – auf -e, auf Konsonant, auf -ista – haben nur zwei: eine für den Singular, eine für den Plural, ohne männlich und weiblich zu trennen. Ausnahme sind die Herkunftsadjektive, die sehr wohl eine weibliche Form bilden: „español / española“, „alemán / alemana“.',
            },
          },
          table: {
            headers: ['Tipo', 'm. sing.', 'f. sing.', 'm. pl.', 'f. pl.'],
            rows: [
              ['en -o', 'alto', 'alta', 'altos', 'altas'],
              ['en -e', 'grande', 'grande', 'grandes', 'grandes'],
              ['en consonante', 'difícil', 'difícil', 'difíciles', 'difíciles'],
              ['en -ista', 'realista', 'realista', 'realistas', 'realistas'],
              ['nacionalidad', 'español', 'española', 'españoles', 'españolas'],
            ],
          },
        },
        {
          id: 'esg8-p1-info-mixto',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Un grupo mixto va en masculino',
          text: 'Si el adjetivo se refiere a varios sustantivos y al menos uno es masculino, la forma es masculina plural: «el padre y las hijas están cansados». Suena raro al principio, pero es la regla, y no admite término medio.',
          translations: {
            de: {
              title: 'Eine gemischte Gruppe steht im Maskulinum',
              text: 'Bezieht sich das Adjektiv auf mehrere Substantive und ist wenigstens eines männlich, steht die männliche Pluralform: „el padre y las hijas están cansados“. Das klingt anfangs seltsam, ist aber die Regel und kennt keinen Mittelweg.',
            },
          },
        },
        {
          id: 'esg8-p1-info-apocope',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Formas cortas delante del sustantivo',
          text: 'Unos pocos adjetivos pierden la última letra cuando van delante de un sustantivo masculino singular. «Grande» se acorta delante de los dos géneros y cambia de sentido al hacerlo: «un gran hombre» no es un hombre grande, sino un hombre importante.',
          translations: {
            de: {
              title: 'Kurzformen vor dem Substantiv',
              text: 'Wenige Adjektive verlieren den letzten Buchstaben, wenn sie vor einem männlichen Substantiv im Singular stehen. „Grande“ kürzt sich vor beiden Geschlechtern und wechselt dabei die Bedeutung: „un gran hombre“ ist kein großer Mann, sondern ein bedeutender.',
            },
          },
          table: {
            headers: ['Forma plena', 'Forma corta', 'Ejemplo'],
            rows: [
              ['bueno', 'buen', 'un buen amigo'],
              ['malo', 'mal', 'un mal día'],
              ['primero', 'primer', 'el primer piso'],
              ['tercero', 'tercer', 'el tercer intento'],
              ['grande', 'gran', 'una gran idea'],
            ],
          },
        },
        {
          id: 'esg8-p1-cloze',
          type: 'CLOZE',
          instruction: 'Complete con la forma correcta del adjetivo.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Mi hermana es muy ' },
            { kind: 'GAP', gapId: 'a1', solution: ['alta'], hint: 'alto', width: 6 },
            { kind: 'TEXT', text: '.\nSon unas preguntas bastante ' },
            { kind: 'GAP', gapId: 'a2', solution: ['difíciles'], hint: 'difícil', width: 10 },
            { kind: 'TEXT', text: '.\nCompramos dos sillas ' },
            { kind: 'GAP', gapId: 'a3', solution: ['nuevas'], hint: 'nuevo', width: 8 },
            { kind: 'TEXT', text: '.\nHa sido un ' },
            { kind: 'GAP', gapId: 'a4', solution: ['buen'], hint: 'bueno', width: 6 },
            { kind: 'TEXT', text: ' año.\nLos abuelos y las nietas están ' },
            { kind: 'GAP', gapId: 'a5', solution: ['contentos'], hint: 'contento', width: 10 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'esg8-p1-choice',
          type: 'CHOICE',
          instruction: 'Marque todas las frases correctas.',
          question: '¿Cuáles de estas frases están bien?',
          options: [
            { id: 'o1', text: 'Es una ciudad muy interesante.' },
            { id: 'o2', text: 'Es una ciudad muy interesanta.' },
            { id: 'o3', text: 'Hace un buen tiempo.' },
            { id: 'o4', text: 'Fue una gran sorpresa.' },
          ],
          multiple: true,
          solution: ['o1', 'o3', 'o4'],
          explanation:
            'Los adjetivos en -e no tienen femenino propio, así que «interesanta» no existe. «Buen» es la forma corta ante masculino singular, y «gran» vale para los dos géneros.',
          explanationTranslations: {
            de: 'Adjektive auf -e haben keine eigene weibliche Form, „interesanta“ gibt es also nicht. „Buen“ ist die Kurzform vor männlichem Singular, „gran“ gilt für beide Geschlechter.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – Vergleich und Superlativ.
  {
    order: 2,
    title: 'Vergleichen',
    subtitle: 'más, menos, tan – und die beiden Superlative',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'esg8-p2-h1', type: 'HEADING', level: 1, text: 'Vergleichen' },
        {
          id: 'esg8-p2-intro',
          type: 'TEXT',
          text: 'El español no cambia la terminación del adjetivo para comparar. Donde el alemán dice «größer», el español antepone una palabra: «más grande». Eso simplifica mucho las cosas – solo hay cuatro adjetivos que se comportan de otra manera.',
          translations: {
            de: 'Das Spanische ändert zum Vergleichen die Adjektivendung nicht. Wo das Deutsche „größer“ sagt, stellt das Spanische ein Wort davor: „más grande“. Das vereinfacht vieles – nur vier Adjektive verhalten sich anders.',
          },
        },
        {
          id: 'esg8-p2-info-tres',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Los tres tipos de comparación',
          text: 'El de igualdad usa «tan … como» con adjetivos, pero «tanto … como» cuando se comparan cantidades: «tanto dinero como», «tantas horas como». Esa es la única parte donde hay que concordar algo.',
          translations: {
            de: {
              title: 'Die drei Arten des Vergleichs',
              text: 'Der Gleichheitsvergleich nimmt „tan … como“ bei Adjektiven, aber „tanto … como“ bei Mengen: „tanto dinero como“, „tantas horas como“. Das ist die einzige Stelle, an der etwas angeglichen werden muss.',
            },
          },
          table: {
            headers: ['Tipo', 'Estructura', 'Ejemplo'],
            rows: [
              ['superioridad', 'más … que', 'Madrid es más grande que Bilbao.'],
              ['inferioridad', 'menos … que', 'Este piso es menos caro que el otro.'],
              ['igualdad (adjetivo)', 'tan … como', 'Soy tan alto como mi padre.'],
              ['igualdad (cantidad)', 'tanto/-a/-os/-as … como', 'No tengo tanto tiempo como tú.'],
            ],
          },
        },
        {
          id: 'esg8-p2-info-irreg',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Cuatro comparativos irregulares',
          text: 'Con estos cuatro no se usa «más»: se dice «mejor», no «más bueno». «Mayor» y «menor» se refieren sobre todo a la edad; para el tamaño físico lo normal es «más grande» y «más pequeño». Un hermano mayor es el de más años, no el más alto.',
          translations: {
            de: {
              title: 'Vier unregelmäßige Vergleichsformen',
              text: 'Bei diesen vieren steht kein „más“: Es heißt „mejor“, nicht „más bueno“. „Mayor“ und „menor“ beziehen sich vor allem auf das Alter; für die Größe sagt man gewöhnlich „más grande“ und „más pequeño“. Ein „hermano mayor“ ist der ältere Bruder, nicht der größere.',
            },
          },
          table: {
            headers: ['Adjetivo', 'Comparativo', 'Superlativo'],
            rows: [
              ['bueno', 'mejor', 'el mejor'],
              ['malo', 'peor', 'el peor'],
              ['grande (edad)', 'mayor', 'el mayor'],
              ['pequeño (edad)', 'menor', 'el menor'],
            ],
          },
        },
        {
          id: 'esg8-p2-info-superlativo',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Dos superlativos distintos',
          text: 'El relativo compara dentro de un grupo y lleva artículo: «el libro más interesante de la biblioteca». El absoluto no compara con nada, solo sube el grado, y se forma con «muy» o con la terminación -ísimo: «guapísima» es simplemente «sehr hübsch», no «die Hübscheste». Confundirlos cambia el sentido de la frase.',
          translations: {
            de: {
              title: 'Zwei verschiedene Superlative',
              text: 'Der relative vergleicht innerhalb einer Gruppe und trägt einen Artikel: „el libro más interesante de la biblioteca“. Der absolute vergleicht mit nichts, sondern steigert nur, und wird mit „muy“ oder der Endung -ísimo gebildet: „guapísima“ heißt schlicht „sehr hübsch“, nicht „die Hübscheste“. Sie zu verwechseln ändert den Sinn des Satzes.',
            },
          },
          table: {
            headers: ['Forma', 'Ejemplo', 'Sentido'],
            rows: [
              ['el / la más …', 'Es la más rápida del equipo.', 'die Schnellste der Mannschaft'],
              ['muy + adjetivo', 'Es muy rápida.', 'sehr schnell'],
              ['-ísimo', 'Es rapidísima.', 'sehr schnell (verstärkt)'],
              ['preposición «de»', 'el mejor de la clase', 'der Beste der Klasse'],
            ],
          },
        },
        {
          id: 'esg8-p2-cloze',
          type: 'CLOZE',
          instruction: 'Complete la comparación.',
          wordBank: ['más', 'menos', 'tan', 'tantos', 'que', 'como', 'mejor', 'mayor'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Este restaurante es ' },
            { kind: 'GAP', gapId: 'b1', solution: ['más'], width: 6 },
            { kind: 'TEXT', text: ' caro ' },
            { kind: 'GAP', gapId: 'b2', solution: ['que'], width: 5 },
            { kind: 'TEXT', text: ' el de la esquina.\nNo hablo inglés ' },
            { kind: 'GAP', gapId: 'b3', solution: ['tan'], width: 5 },
            { kind: 'TEXT', text: ' bien ' },
            { kind: 'GAP', gapId: 'b4', solution: ['como'], width: 6 },
            { kind: 'TEXT', text: ' tú.\nMi hermana es tres años ' },
            { kind: 'GAP', gapId: 'b5', solution: ['mayor'], width: 7 },
            { kind: 'TEXT', text: ' que yo.\nEste vino es ' },
            { kind: 'GAP', gapId: 'b6', solution: ['mejor'], width: 7 },
            { kind: 'TEXT', text: ' que el otro.\nNo tengo ' },
            { kind: 'GAP', gapId: 'b7', solution: ['tantos'], width: 8 },
            { kind: 'TEXT', text: ' libros como tú.' },
          ],
        },
        {
          id: 'esg8-p2-choice',
          type: 'CHOICE',
          instruction: 'Elija la traducción correcta.',
          question: '«Marta ist die beste Ärztin des Krankenhauses.»',
          options: [
            { id: 'q1', text: 'Marta es la más buena doctora del hospital.' },
            { id: 'q2', text: 'Marta es la mejor doctora del hospital.' },
            { id: 'q3', text: 'Marta es buenísima doctora del hospital.' },
          ],
          multiple: false,
          solution: ['q2'],
          explanation:
            '«Bueno» no admite «más»: su comparativo y su superlativo son «mejor» y «el mejor». Y «buenísima» sería un superlativo absoluto, que no compara con nadie.',
          explanationTranslations: {
            de: '„Bueno“ verträgt kein „más“: Vergleichs- und Superlativform sind „mejor“ und „el mejor“. Und „buenísima“ wäre ein absoluter Superlativ, der mit niemandem vergleicht.',
          },
        },
        {
          id: 'esg8-p2-match',
          type: 'MATCHING',
          instruction: 'Relacione la frase española con su sentido.',
          left: [
            { id: 'm1', text: 'Es la ciudad más antigua del país.' },
            { id: 'm2', text: 'Es una ciudad antiquísima.' },
            { id: 'm3', text: 'Mi hermano mayor.' },
            { id: 'm4', text: 'Mi hermano más grande.' },
          ],
          right: [
            { id: 'n1', text: 'Die älteste Stadt des Landes.' },
            { id: 'n2', text: 'Eine uralte Stadt.' },
            { id: 'n3', text: 'Mein älterer Bruder.' },
            { id: 'n4', text: 'Mein größerer Bruder (Körpergröße).' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'n1' },
            { leftId: 'm2', rightId: 'n2' },
            { leftId: 'm3', rightId: 'n3' },
            { leftId: 'm4', rightId: 'n4' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – Stellung des Adjektivs.
  {
    order: 3,
    title: 'Die Stellung',
    subtitle: 'Vor oder hinter dem Substantiv',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'esg8-p3-h1', type: 'HEADING', level: 1, text: 'Die Stellung' },
        {
          id: 'esg8-p3-intro',
          type: 'TEXT',
          text: 'El sitio normal del adjetivo español es detrás del sustantivo, al revés que en alemán. Pero puede ir delante, y entonces la frase dice otra cosa: detrás distingue, delante valora. Esta página es la que hace falta cuando uno ya sabe formar las frases y quiere entender por qué suenan distintas.',
          translations: {
            de: 'Der normale Platz des spanischen Adjektivs ist hinter dem Substantiv, umgekehrt als im Deutschen. Es kann aber davor treten, und dann sagt der Satz etwas anderes: Dahinter unterscheidet es, davor bewertet es. Diese Seite braucht man, wenn man die Sätze schon bauen kann und verstehen will, warum sie verschieden klingen.',
          },
        },
        {
          id: 'esg8-p3-info-general',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Detrás distingue, delante valora',
          text: 'Detrás del sustantivo el adjetivo separa un grupo de otro: «los coches rojos» son los rojos y no los azules. Delante, el adjetivo no separa nada, solo añade una apreciación sobre algo que ya se da por conocido: «los bonitos coches» presupone que todos lo son. Por eso los colores, las nacionalidades y las formas van casi siempre detrás.',
          translations: {
            de: {
              title: 'Dahinter unterscheidet, davor bewertet',
              text: 'Hinter dem Substantiv trennt das Adjektiv eine Gruppe von einer anderen: „los coches rojos“ sind die roten und nicht die blauen. Davor trennt es nichts, sondern fügt nur eine Wertung zu etwas hinzu, das als bekannt gilt: „los bonitos coches“ setzt voraus, dass alle es sind. Deshalb stehen Farben, Herkunft und Formen fast immer dahinter.',
            },
          },
          table: {
            headers: ['Detrás', 'Delante'],
            rows: [
              ['una casa blanca (und nicht eine andere)', 'la blanca nieve (Wertung, poetisch)'],
              ['un vino francés', '— (Herkunft steht nie davor)'],
              ['una mesa redonda', '— (Form steht nie davor)'],
              ['un día maravilloso', 'un maravilloso día (gehoben)'],
            ],
          },
        },
        {
          id: 'esg8-p3-info-cambio',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Adjetivos que cambian de significado',
          text: 'Con un puñado de adjetivos la diferencia no es de matiz, sino de sentido: dicen dos cosas distintas según el lado en que estén. Estos hay que aprenderlos por parejas, igual que las de «ser» y «estar» del capítulo 2.',
          translations: {
            de: {
              title: 'Adjektive, die die Bedeutung wechseln',
              text: 'Bei einer Handvoll Adjektiven ist der Unterschied keine Nuance, sondern ein Bedeutungswechsel: Je nach Seite sagen sie zweierlei. Diese lernt man paarweise, wie die Paare zu „ser“ und „estar“ aus Kapitel 2.',
            },
          },
          table: {
            headers: ['Adjetivo', 'Delante', 'Detrás'],
            rows: [
              ['viejo', 'un viejo amigo – ein langjähriger Freund', 'un amigo viejo – ein alter Freund'],
              ['grande', 'un gran actor – ein bedeutender Schauspieler', 'un actor grande – ein großer Schauspieler'],
              ['pobre', 'el pobre hombre – der arme Kerl', 'el hombre pobre – der mittellose Mann'],
              ['único', 'mi único hijo – mein einziger Sohn', 'un hijo único – ein Einzelkind'],
              ['cierto', 'cierta noticia – eine gewisse Nachricht', 'una noticia cierta – eine zutreffende Nachricht'],
              ['nuevo', 'un nuevo coche – ein weiteres Auto', 'un coche nuevo – ein fabrikneues Auto'],
            ],
          },
        },
        {
          id: 'esg8-p3-choice',
          type: 'CHOICE',
          instruction: 'Elija la traducción correcta.',
          question: '«Es un viejo amigo mío.»',
          options: [
            { id: 'v1', text: 'Er ist ein alter Freund von mir (er ist betagt).' },
            { id: 'v2', text: 'Er ist ein langjähriger Freund von mir.' },
            { id: 'v3', text: 'Er ist ein ehemaliger Freund von mir.' },
          ],
          multiple: false,
          solution: ['v2'],
          explanation:
            'Delante del sustantivo, «viejo» se refiere a la duración de la amistad, no a la edad de la persona. Para hablar de su edad habría que decir «un amigo viejo».',
          explanationTranslations: {
            de: 'Vor dem Substantiv bezieht sich „viejo“ auf die Dauer der Freundschaft, nicht auf das Alter der Person. Für das Alter müsste es „un amigo viejo“ heißen.',
          },
        },
        {
          id: 'esg8-p3-match',
          type: 'MATCHING',
          instruction: 'Relacione la expresión con su sentido.',
          left: [
            { id: 'p1', text: 'una noticia cierta' },
            { id: 'p2', text: 'cierta noticia' },
            { id: 'p3', text: 'un coche nuevo' },
            { id: 'p4', text: 'un nuevo coche' },
          ],
          right: [
            { id: 'q1', text: 'eine zutreffende Nachricht' },
            { id: 'q2', text: 'eine gewisse Nachricht' },
            { id: 'q3', text: 'ein fabrikneues Auto' },
            { id: 'q4', text: 'noch ein Auto, ein weiteres' },
          ],
          solution: [
            { leftId: 'p1', rightId: 'q1' },
            { leftId: 'p2', rightId: 'q2' },
            { leftId: 'p3', rightId: 'q3' },
            { leftId: 'p4', rightId: 'q4' },
          ],
        },
        {
          id: 'esg8-p3-cloze',
          type: 'CLOZE',
          instruction: 'Coloque el adjetivo en el lado que corresponde al sentido indicado.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Cervantes fue un ' },
            { kind: 'GAP', gapId: 'c1', solution: ['gran'], hint: 'bedeutend', width: 6 },
            { kind: 'TEXT', text: ' escritor.\nVive en una casa ' },
            { kind: 'GAP', gapId: 'c2', solution: ['grande'], hint: 'von großem Ausmaß', width: 8 },
            { kind: 'TEXT', text: ' a las afueras.\nEl ' },
            { kind: 'GAP', gapId: 'c3', solution: ['pobre'], hint: 'bedauernswert', width: 7 },
            { kind: 'TEXT', text: ' niño se cayó otra vez.\nEs mi ' },
            { kind: 'GAP', gapId: 'c4', solution: ['único'], hint: 'einzig', width: 7 },
            { kind: 'TEXT', text: ' día libre esta semana.\nLlevaba un abrigo ' },
            { kind: 'GAP', gapId: 'c5', solution: ['negro'], hint: 'Farbe', width: 7 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'esg8-p3-order',
          type: 'ORDERING',
          instruction: 'Forme una frase correcta.',
          items: [
            { id: 'w1', text: 'Compramos' },
            { id: 'w2', text: 'una mesa' },
            { id: 'w3', text: 'redonda' },
            { id: 'w4', text: 'muy' },
            { id: 'w5', text: 'barata.' },
          ],
          solution: ['w1', 'w2', 'w3', 'w4', 'w5'],
        },
        {
          id: 'esg8-p3-writing',
          type: 'WRITING',
          instruction: 'Vergleichen Sie zwei Orte.',
          prompt:
            'Compare dos ciudades o dos barrios que conozca: tamaño, precios, ambiente, gente. Escriba de seis a ocho frases con al menos tres comparaciones distintas y un superlativo.',
          minWords: 40,
          maxWords: 110,
          aiFeedback: true,
          sampleAnswer:
            'Vivo en Leipzig, pero pasé tres años en Valencia. Valencia es bastante más grande y mucho más cara que mi barrio de aquí. El clima es mejor allí: en invierno casi nunca hace tanto frío como en Alemania. La gente no es tan reservada y las calles están más animadas por la noche. Para mí sigue siendo la ciudad más agradable en la que he vivido, aunque los alquileres son altísimos.',
        },
      ],
    },
  },
];
