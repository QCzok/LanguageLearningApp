import type { UnitSeed } from './chapter-beginner-1';

/**
 * Spanisch, Advanced, Kapitel 1: „Lengua y variedad“
 *
 * Fünf Seiten. Das erste ausgearbeitete Kapitel des dritten Kursbuchs und
 * damit die Stelle, an der das Lehrwerk seine eigene Voraussetzung einholt:
 * Die Beginner-Kapitel unterrichten eine Norm, als gäbe es nur eine. Hier
 * wird sie als eine unter mehreren sichtbar.
 *
 * Aufbau: Seite 1 stellt das Begriffswerkzeug bereit (Varietät, Norm,
 * Register), die Seiten 2 bis 4 gehen die drei Ebenen durch, auf denen sich
 * das Spanische tatsächlich unterscheidet – Pronomen und Konjugation (Voseo),
 * Aussprache und Wortschatz, Grammatik im Kontrast. Seite 5 führt das
 * zusammen zu der Frage, die für Lernende praktisch zählt: Welcher Norm folgt
 * man selbst?
 *
 * Auf dieser Stufe stehen die Seiten ohne Übersetzung. Das ist keine
 * Nachlässigkeit, sondern der Punkt: Wer C1 erreicht, liest eine
 * Sprachbeschreibung auf Spanisch. Die aufklappbare Übersetzung der
 * Erklärkästen bleibt den unteren Niveaus vorbehalten (siehe
 * `InfoBlock.translations`).
 *
 * Bewusst vermieden ist die Gegenüberstellung „español de España“ gegen
 * „español de América“: Sie unterschlägt, dass Mexiko-Stadt und Buenos Aires
 * weiter auseinanderliegen als Madrid und Bogotá, und macht aus zwanzig
 * Ländern zwei Blöcke. Beschrieben werden deshalb Erscheinungen und ihre
 * Verbreitung, nicht Landkarten mit zwei Farben.
 *
 * Sämtliche Texte sind eigenständig verfasst.
 */
const v = 1;

export const SPANISH_ADVANCED_1_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – das Begriffswerkzeug: Varietät, Norm, Register.
  {
    order: 1,
    title: 'Una lengua, muchas normas',
    subtitle: 'Varietät, Norm und Register',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'esa1-p1-h1', type: 'HEADING', level: 1, text: 'Una lengua, muchas normas' },
        {
          id: 'esa1-p1-image',
          type: 'IMAGE',
          url: 'illustration:world-map',
          alt: 'Eine Weltkarte, auf der die spanischsprachigen Länder hervorgehoben sind.',
          caption: 'El español es lengua oficial en veinte países.',
        },
        {
          id: 'esa1-p1-intro',
          type: 'TEXT',
          text: 'Hasta ahora este manual le ha enseñado una sola forma de decir las cosas. Era necesario: nadie aprende a hablar eligiendo entre cuatro variantes en cada frase. Pero esa comodidad tenía un precio, y ha llegado el momento de pagarlo. El español es lengua oficial en veinte países —dieciocho americanos, España y Guinea Ecuatorial— y cuenta con cerca de quinientos millones de hablantes nativos. Ninguno de ellos habla «el español» sin más: todos hablan alguna de sus variedades.',
        },
        {
          id: 'esa1-p1-intro2',
          type: 'TEXT',
          text: 'Conviene deshacer desde el principio un equívoco muy extendido: el de que existe un centro donde se habla la lengua correcta y una periferia donde se habla con desviaciones. Un madrileño que dice «he desayunado hace un rato» y un bonaerense que dice «desayuné recién» no están uno acertando y otro equivocándose. Están usando dos normas cultas distintas, ambas plenamente válidas dentro de su territorio.',
        },
        {
          id: 'esa1-p1-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: hablar de la lengua',
          items: [
            {
              term: 'la variedad',
              translations: { en: 'variety', de: 'die Varietät' },
              example: 'Las variedades caribeñas comparten varios rasgos.',
            },
            {
              term: 'el rasgo',
              translations: { en: 'feature, trait', de: 'das Merkmal' },
              example: 'La aspiración de la /s/ es un rasgo muy marcado.',
            },
            {
              term: 'la norma culta',
              translations: { en: 'educated standard', de: 'die Bildungsnorm' },
            },
            {
              term: 'el registro',
              translations: { en: 'register', de: 'das Register' },
              example: 'En un correo oficial cambia el registro, no la variedad.',
            },
            {
              term: 'el habla (fem.)',
              translations: { en: 'speech, way of speaking', de: 'die Sprechweise' },
              example: 'el habla de Lima',
            },
            {
              term: 'el prestigio',
              translations: { en: 'prestige', de: 'das Prestige' },
            },
            {
              term: 'extenderse',
              translations: { en: 'to be widespread', de: 'sich verbreiten' },
              example: 'El seseo se extiende por toda América.',
            },
            {
              term: 'predominar',
              translations: { en: 'to prevail', de: 'vorherrschen' },
            },
            {
              term: 'estar mal visto',
              translations: { en: 'to be frowned upon', de: 'verpönt sein' },
            },
            {
              term: 'el calco',
              translations: { en: 'calque, loan translation', de: 'die Lehnübersetzung' },
              example: '«aplicar a un puesto» es un calco del inglés.',
            },
            {
              term: 'la acepción',
              translations: { en: 'sense, meaning of a word', de: 'die Wortbedeutung' },
            },
            {
              term: 'el hablante',
              translations: { en: 'speaker', de: 'der Sprecher, die Sprecherin' },
            },
          ],
        },
        {
          id: 'esa1-p1-info-panhispanica',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'Una norma policéntrica',
          text: 'Desde 1951 las academias de la lengua de todos los países hispanohablantes trabajan reunidas en la ASALE (Asociación de Academias de la Lengua Española). La consecuencia práctica es que las obras de referencia —el diccionario, la gramática, la ortografía— ya no describen el uso de Madrid y anotan el resto como excepción, sino que registran varias normas cultas y señalan su extensión. A eso se le llama norma policéntrica: hay más de un centro, y ninguno manda sobre los demás.',
          table: {
            headers: ['Se dice', 'Dónde', 'Estatus'],
            rows: [
              ['el ordenador', 'España', 'norma culta'],
              ['la computadora', 'gran parte de América', 'norma culta'],
              ['el computador', 'Colombia, Chile', 'norma culta'],
              ['la máquina de escribir textos', '—', 'no lo dice nadie'],
            ],
          },
        },
        {
          id: 'esa1-p1-choice-norma',
          type: 'CHOICE',
          instruction: 'Elija la opción que mejor describe el concepto.',
          question: '¿Qué quiere decir que el español tiene una norma policéntrica?',
          options: [
            { id: 'n1', text: 'Que cada hablante puede decidir libremente qué es correcto y qué no.' },
            { id: 'n2', text: 'Que existen varias normas cultas reconocidas, ninguna subordinada a las demás.' },
            { id: 'n3', text: 'Que la norma de España sigue siendo la referencia y las demás son adaptaciones.' },
            { id: 'n4', text: 'Que no hay diferencias reales entre las variedades del español.' },
          ],
          multiple: false,
          solution: ['n2'],
          explanation:
            'Policéntrico no significa que todo valga: dentro de cada norma hay formas correctas e incorrectas. Significa que hay varios centros normativos simultáneos y que ninguno es la versión auténtica de la que los otros se apartan.',
        },
        {
          id: 'esa1-p1-ejes',
          type: 'TEXT',
          text: 'La variación no ocurre en una sola dirección. Conviene separar tres ejes, porque confundirlos lleva a juicios equivocados: se oye a alguien decir «pa’ mí» y se concluye que así se habla en su país, cuando lo que se ha oído es un rasgo de conversación informal que ese mismo hablante no usaría por escrito.',
        },
        {
          id: 'esa1-p1-info-ejes',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Tres ejes de variación',
          text: 'La variación diatópica depende del lugar, la diastrática del grupo social y del nivel de instrucción, y la diafásica de la situación concreta en la que se habla. Solo la primera separa variedades; las otras dos atraviesan todas ellas por igual. Un mismo hablante recorre el eje diafásico varias veces al día sin cambiar de variedad.',
          table: {
            headers: ['Eje', 'Depende de', 'Ejemplo'],
            rows: [
              ['diatópico', 'el lugar', 'zumo (Esp.) / jugo (Am.)'],
              ['diastrático', 'el grupo social', 'haiga en lugar de haya'],
              ['diafásico', 'la situación', '¿qué tal? / le saluda atentamente'],
            ],
          },
        },
        {
          id: 'esa1-p1-match-ejes',
          type: 'MATCHING',
          instruction: 'Relacione cada observación con el eje de variación que la explica.',
          left: [
            { id: 'e1', text: 'En Quito se dice «dame pasando el libro»; en Sevilla, no.' },
            {
              id: 'e2',
              text: 'El mismo abogado dice «te mando el papel» a su hermano y «le remito la documentación» a un juzgado.',
            },
            { id: 'e3', text: 'Algunos hablantes dicen «dijieron» y «cocreta»; otros nunca.' },
            { id: 'e4', text: 'En una zona de Andalucía la /s/ final se aspira; en Burgos se pronuncia entera.' },
          ],
          right: [
            { id: 'f1', text: 'Variación diatópica: cambia con el territorio.' },
            { id: 'f2', text: 'Variación diafásica: cambia con la situación.' },
            { id: 'f3', text: 'Variación diastrática: cambia con el grupo social.' },
            { id: 'f4', text: 'Variación diatópica de tipo fonético.' },
          ],
          solution: [
            { leftId: 'e1', rightId: 'f1' },
            { leftId: 'e2', rightId: 'f2' },
            { leftId: 'e3', rightId: 'f3' },
            { leftId: 'e4', rightId: 'f4' },
          ],
        },
        {
          id: 'esa1-p1-cloze',
          type: 'CLOZE',
          instruction: 'Complete el texto con el término adecuado.',
          wordBank: ['variedad', 'rasgos', 'norma', 'registro', 'prestigio'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Cada ' },
            { kind: 'GAP', gapId: 'c1', solution: ['variedad'], width: 10 },
            { kind: 'TEXT', text: ' del español tiene sus propios ' },
            { kind: 'GAP', gapId: 'c2', solution: ['rasgos'], width: 9 },
            { kind: 'TEXT', text: ' fonéticos y léxicos, y en cada una de ellas se ha formado una ' },
            { kind: 'GAP', gapId: 'c3', solution: ['norma'], width: 8 },
            {
              kind: 'TEXT',
              text: ' culta propia. Lo que cambia al pasar de una conversación con amigos a una entrevista de trabajo no es la variedad, sino el ',
            },
            { kind: 'GAP', gapId: 'c4', solution: ['registro'], width: 10 },
            { kind: 'TEXT', text: '. Que una forma se considere mejor que otra suele ser una cuestión de ' },
            { kind: 'GAP', gapId: 'c5', solution: ['prestigio'], width: 11 },
            { kind: 'TEXT', text: ', no de lógica interna de la lengua.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – Voseo: das auffälligste Merkmal, mit vollständiger Konjugation.
  {
    order: 2,
    title: 'El voseo',
    subtitle: 'Un pronombre que no aparece en los manuales',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'esa1-p2-h1', type: 'HEADING', level: 1, text: 'El voseo' },
        {
          id: 'esa1-p2-intro',
          type: 'TEXT',
          text: 'Un aprendiz de español puede llegar a un nivel avanzado sin haber visto nunca la forma «vos», y bajarse del avión en Montevideo para descubrir que nadie lo tutea. El voseo no es una curiosidad marginal: lo usan a diario decenas de millones de personas, y en el Río de la Plata ocupa por completo el lugar de «tú», también en la prensa, la publicidad y la escuela.',
        },
        {
          id: 'esa1-p2-info-conjugacion',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Las formas del voseo rioplatense',
          text: 'Las formas verbales del voseo no son inventadas: proceden de las de «vosotros», sin la -i- del diptongo. De «habláis» sale «hablás»; de «coméis», «comés»; «vivís» coincide con la forma de vosotros. El acento se mantiene en la última sílaba, y eso elimina casi todas las irregularidades: los verbos que diptongan con «tú» (tú puedes, tú quieres, tú duermes) no diptongan con «vos».',
          table: {
            headers: ['Infinitivo', 'tú', 'vos'],
            rows: [
              ['hablar', 'hablas', 'hablás'],
              ['comer', 'comes', 'comés'],
              ['vivir', 'vives', 'vivís'],
              ['poder', 'puedes', 'podés'],
              ['querer', 'quieres', 'querés'],
              ['dormir', 'duermes', 'dormís'],
              ['tener', 'tienes', 'tenés'],
              ['ser', 'eres', 'sos'],
              ['ir', 'vas', 'vas'],
              ['ver', 'ves', 'ves'],
            ],
          },
        },
        {
          id: 'esa1-p2-info-resto',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Solo cambian el sujeto y el presente',
          text: 'El voseo es más limitado de lo que parece, y ahí está su facilidad. El pronombre sujeto es «vos», y tras preposición también («para vos», «con vos»), pero el pronombre átono sigue siendo «te» y el posesivo, «tu / tuyo»: «vos te llevaste tu abrigo». De los tiempos verbales, solo el presente de indicativo y el imperativo afirmativo tienen forma propia; el pretérito, el imperfecto, el futuro y el condicional son idénticos a los de «tú». El imperativo pierde la -d final del de vosotros: hablá, comé, vení, hacé, decí, poné, salí.',
          table: {
            headers: ['Con tú', 'Con vos'],
            rows: [
              ['Tú tienes tu libro.', 'Vos tenés tu libro.'],
              ['Te lo doy a ti.', 'Te lo doy a vos.'],
              ['Ven aquí y dime la verdad.', 'Vení acá y decime la verdad.'],
              ['Ayer comiste temprano.', 'Ayer comiste temprano.'],
              ['Mañana lo verás.', 'Mañana lo vas a ver.'],
            ],
          },
        },
        {
          id: 'esa1-p2-dialogue',
          type: 'DIALOGUE',
          title: 'En una oficina de Buenos Aires',
          audioUrl: 'placeholder://es-a1-voseo',
          lines: [
            { speaker: 'Lucía', text: '¿Vos sos el que se encarga de las traducciones?' },
            { speaker: 'Martín', text: 'Sí, desde marzo. ¿Necesitás algo urgente?' },
            {
              speaker: 'Lucía',
              text: 'Tengo un informe de cuarenta páginas para el viernes. Decime si es una locura.',
            },
            {
              speaker: 'Martín',
              text: 'Una locura no es, pero tenés que mandármelo hoy. Si me lo pasás mañana, no llego.',
            },
            { speaker: 'Lucía', text: 'Te lo mando en una hora. ¿Lo querés en Word o te sirve el PDF?' },
            {
              speaker: 'Martín',
              text: 'Mandámelo en Word, así puedo trabajar encima. Y avisale a Paula, que ella lo revisa después.',
            },
          ],
        },
        {
          id: 'esa1-p2-cloze',
          type: 'CLOZE',
          instruction: 'Reescriba el mensaje usando el voseo. Complete los huecos con la forma de «vos».',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Hola, Diego: ¿' },
            { kind: 'GAP', gapId: 'v1', solution: ['sabés', 'sabes'], hint: 'saber', width: 8 },
            { kind: 'TEXT', text: ' a qué hora empieza la reunión? Si ' },
            { kind: 'GAP', gapId: 'v2', solution: ['podés', 'podes'], hint: 'poder', width: 8 },
            { kind: 'TEXT', text: ', ' },
            { kind: 'GAP', gapId: 'v3', solution: ['vení', 'veni'], hint: 'venir, imperativo', width: 7 },
            { kind: 'TEXT', text: ' media hora antes y ' },
            { kind: 'GAP', gapId: 'v4', solution: ['traé', 'trae'], hint: 'traer, imperativo', width: 7 },
            { kind: 'TEXT', text: ' el informe. Ya sé que ' },
            { kind: 'GAP', gapId: 'v5', solution: ['sos'], hint: 'ser', width: 6 },
            { kind: 'TEXT', text: ' el único que entiende esos números. Después ' },
            { kind: 'GAP', gapId: 'v6', solution: ['decime'], hint: 'decir + me, imperativo', width: 9 },
            { kind: 'TEXT', text: ' qué te parece la propuesta.' },
          ],
        },
        {
          id: 'esa1-p2-choice',
          type: 'CHOICE',
          instruction: 'Marque todas las frases en las que el voseo está bien empleado.',
          question: '¿Cuáles de estas frases respetan el sistema del voseo rioplatense?',
          options: [
            { id: 'w1', text: 'Vos tenés razón, pero no me lo dijiste a tiempo.' },
            { id: 'w2', text: 'Vos te olvidaste tu paraguas en mi casa.' },
            { id: 'w3', text: 'Esto es para vos, no para tu hermano.' },
            { id: 'w4', text: 'Vos os quedáis acá hasta que vuelva.' },
            { id: 'w5', text: 'Vos puedes venir cuando quieras.' },
          ],
          multiple: true,
          solution: ['w1', 'w2', 'w3'],
          explanation:
            'El voseo no trae consigo ni «os» ni las formas de vosotros más allá del presente y el imperativo: «vos os quedáis» mezcla dos sistemas. Y «vos puedes» es igualmente imposible, porque con «vos» el verbo no diptonga: podés.',
        },
        {
          id: 'esa1-p2-info-geografia',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'Dónde se vosea, y de qué manera',
          text: 'El voseo no es un bloque uniforme. En el Río de la Plata ha desplazado por completo a «tú» y se usa en cualquier registro. En Centroamérica convive con «tú» y con «usted», y el reparto cambia de país en país: en Costa Rica el usted llega hasta la intimidad familiar. En Chile el voseo es sobre todo verbal —se oye «tú sabís», «¿cachái?»— y queda restringido a la conversación informal, sin llegar a la lengua escrita. En Colombia se limita a ciertas regiones, como Antioquia y el Valle del Cauca.',
          table: {
            headers: ['Zona', 'Sistema', 'Ejemplo'],
            rows: [
              ['Río de la Plata', 'vos general, sin tú', 'Vos sabés.'],
              ['Centroamérica', 'vos / tú / usted repartidos', 'Vos sabés. / Usted sabe.'],
              ['Chile', 'voseo verbal, informal', 'Tú sabís. / ¿Cachái?'],
              ['Antioquia (Col.)', 'vos regional', 'Vos sabés, pues.'],
              ['México, Perú, Caribe, España', 'sin voseo', 'Tú sabes.'],
            ],
          },
        },
        {
          id: 'esa1-p2-ordering',
          type: 'ORDERING',
          instruction: 'Ordene los pasos que explican de dónde viene el voseo.',
          items: [
            { id: 'o1', text: 'En el español medieval, «vos» era la forma de respeto y «tú», la de confianza.' },
            {
              id: 'o2',
              text: 'Al extenderse su uso, «vos» pierde valor de cortesía y aparece «vuestra merced» para cubrir ese hueco.',
            },
            { id: 'o3', text: '«Vuestra merced» se desgasta hasta dar «usted», que ocupa el tratamiento formal.' },
            {
              id: 'o4',
              text: 'En España «vos» desaparece del habla corriente; en varias zonas de América se conserva y ocupa el lugar de «tú».',
            },
          ],
          solution: ['o1', 'o2', 'o3', 'o4'],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – Aussprache und Wortschatz: die beiden auffälligsten Ebenen.
  {
    order: 3,
    title: 'Sonidos y palabras',
    subtitle: 'Reconocer de dónde es quien habla',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'esa1-p3-h1', type: 'HEADING', level: 1, text: 'Sonidos y palabras' },
        {
          id: 'esa1-p3-intro',
          type: 'TEXT',
          text: 'Antes de entender una palabra ya hemos situado a quien habla. Bastan dos o tres segundos, y no por magia: la pronunciación concentra unos pocos rasgos muy visibles que se reparten de manera desigual por el mundo hispánico. Reconocerlos tiene una utilidad práctica inmediata, porque explica por qué a veces se entiende sin esfuerzo a un locutor y con dificultad a otro que dice exactamente lo mismo.',
        },
        {
          id: 'esa1-p3-info-fonetica',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Cinco rasgos de pronunciación',
          text: 'El seseo —pronunciar «casa» y «caza» igual— es lo normal en toda América, en Canarias y en buena parte de Andalucía; la distinción entre ambos sonidos se mantiene en el centro y el norte de España. El yeísmo, que iguala «vaya» y «valla», se ha impuesto casi en todas partes. La aspiración de la /s/ final y la relajación de la /d/ entre vocales («cansao») unen zonas muy alejadas entre sí: el Caribe, las costas del Pacífico, Canarias y el sur de España.',
          table: {
            headers: ['Rasgo', 'En qué consiste', 'Dónde predomina'],
            rows: [
              ['seseo', 'casa = caza', 'toda América, Canarias, parte de Andalucía'],
              ['distinción', 'casa ≠ caza', 'centro y norte de España'],
              ['ceceo', 'casa suena como caza', 'zonas del sur de Andalucía'],
              ['yeísmo', 'vaya = valla', 'casi todo el ámbito hispánico'],
              ['aspiración de /s/', 'los libros → loh librohh', 'Caribe, costas, Andalucía, Canarias'],
            ],
          },
        },
        {
          id: 'esa1-p3-audio',
          type: 'AUDIO',
          title: 'La misma frase, tres hablantes',
          audioUrl: 'placeholder://es-a1-acentos',
          durationSec: 45,
          transcript:
            'Hablante 1 (Valladolid): Los cinco zapatos están en la caja azul.\nHablante 2 (Ciudad de México): Los cinco zapatos están en la caja azul.\nHablante 3 (La Habana): Los cinco zapatos están en la caja azul.',
        },
        {
          id: 'esa1-p3-choice-fonetica',
          type: 'CHOICE',
          instruction: 'Elija la explicación correcta.',
          question:
            'Un hablante pronuncia «cinco» y «zapatos» con el mismo sonido inicial que «sopa», y además apenas se le oye la /s/ al final de «los zapatos». ¿Qué dos rasgos presenta?',
          options: [
            { id: 'p1', text: 'Distinción y yeísmo.' },
            { id: 'p2', text: 'Seseo y aspiración de la /s/ final.' },
            { id: 'p3', text: 'Ceceo y voseo.' },
            { id: 'p4', text: 'Yeísmo y relajación de la /d/ intervocálica.' },
          ],
          multiple: false,
          solution: ['p2'],
          explanation:
            'Igualar el sonido de «cinco» con el de «sopa» es seseo. Debilitar la /s/ al final de sílaba es aspiración. Ambos rasgos son compatibles y coinciden, por ejemplo, en el Caribe y en Andalucía occidental.',
        },
        {
          id: 'esa1-p3-lexico-intro',
          type: 'TEXT',
          text: 'El léxico varía más que la gramática, pero casi siempre de forma inofensiva: si alguien pide un jugo en Madrid o un zumo en Lima, lo entienden igual y a lo sumo lo sitúan en un mapa. Los problemas empiezan donde una misma palabra existe en dos sitios con acepciones distintas, porque entonces nadie pide aclaración: cada uno cree haber entendido.',
        },
        {
          id: 'esa1-p3-info-lexico',
          type: 'INFO',
          variant: 'TIP',
          title: 'Objetos cotidianos, nombres distintos',
          text: 'Estas series no agotan las variantes ni marcan fronteras exactas —en casi todos los países conviven varias—, pero cubren los casos que un hablante extranjero encuentra en su primera semana. Todas las formas de la tabla pertenecen a la norma culta de su zona.',
          table: {
            headers: ['España', 'México', 'Río de la Plata', 'Caribe'],
            rows: [
              ['el coche', 'el carro', 'el auto', 'el carro'],
              ['el móvil', 'el celular', 'el celular', 'el celular'],
              ['el zumo', 'el jugo', 'el jugo', 'el jugo'],
              ['la piscina', 'la alberca', 'la pileta', 'la piscina'],
              ['el autobús', 'el camión', 'el colectivo', 'la guagua'],
              ['la patata', 'la papa', 'la papa', 'la papa'],
              ['conducir', 'manejar', 'manejar', 'manejar'],
            ],
          },
        },
        {
          id: 'esa1-p3-match-lexico',
          type: 'MATCHING',
          instruction: 'Relacione cada frase con el lugar donde resultaría más natural.',
          left: [
            { id: 'l1', text: 'Dejé el carro junto a la alberca del hotel.' },
            { id: 'l2', text: 'Cogí el autobús y me bajé al lado de la piscina.' },
            { id: 'l3', text: 'Tomá el colectivo hasta la pileta, son diez minutos.' },
            { id: 'l4', text: 'La guagua pasa cada media hora por aquí.' },
          ],
          right: [
            { id: 'r1', text: 'México' },
            { id: 'r2', text: 'España' },
            { id: 'r3', text: 'Argentina' },
            { id: 'r4', text: 'Cuba o Canarias' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'esa1-p3-info-coger',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Cuando la misma palabra no significa lo mismo',
          text: 'Aquí conviene ser prudente, porque el error no se nota hasta que ya se ha cometido. El verbo «coger», de uso constante en España, tiene una acepción sexual malsonante en gran parte de América —México, Argentina y Uruguay, entre otros—, donde para lo demás se dice «tomar» o «agarrar». «Concha», nombre de pila corriente en España, es también vulgar en el Río de la Plata. Y «ahorita» no promete lo mismo en México, donde puede aplazar algo indefinidamente, que en el Caribe, donde suele ser inmediato.',
          table: {
            headers: ['Palabra', 'Sin problema en', 'Se evita en', 'Alternativa neutra'],
            rows: [
              ['coger', 'España', 'México, Río de la Plata', 'tomar, agarrar'],
              ['concha', 'España', 'Río de la Plata', 'caracola'],
              ['pico', 'gran parte de América', 'Chile', 'punta'],
              ['tortilla', 'España (de patatas)', '—', 'especificar: de patatas / de maíz'],
            ],
          },
        },
        {
          id: 'esa1-p3-cloze',
          type: 'CLOZE',
          instruction: 'Un colega mexicano le escribe. Complete su mensaje con las variantes que él usaría.',
          wordBank: ['carro', 'celular', 'manejar', 'papas', 'jugo'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Te paso a buscar en el ' },
            { kind: 'GAP', gapId: 'x1', solution: ['carro'], width: 9 },
            { kind: 'TEXT', text: ' a las ocho. Si llego tarde, te marco al ' },
            { kind: 'GAP', gapId: 'x2', solution: ['celular'], width: 10 },
            { kind: 'TEXT', text: '. Hoy me toca ' },
            { kind: 'GAP', gapId: 'x3', solution: ['manejar'], width: 10 },
            { kind: 'TEXT', text: ' a mí, así que tú descansas. En la comida hay pollo con ' },
            { kind: 'GAP', gapId: 'x4', solution: ['papas'], width: 8 },
            { kind: 'TEXT', text: ' y un ' },
            { kind: 'GAP', gapId: 'x5', solution: ['jugo'], width: 7 },
            { kind: 'TEXT', text: ' de naranja recién hecho.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – Grammatik im Kontrast: was sich jenseits des Wortschatzes ändert.
  {
    order: 4,
    title: 'Gramáticas en contraste',
    subtitle: 'Diferencias que no están en el diccionario',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'esa1-p4-h1', type: 'HEADING', level: 1, text: 'Gramáticas en contraste' },
        {
          id: 'esa1-p4-intro',
          type: 'TEXT',
          text: 'Las diferencias de vocabulario se aprenden en una tarde y se consultan en cualquier diccionario. Las gramaticales son más discretas y, por eso mismo, más útiles: quien las domina deja de sonar a persona que ha aprendido el español en un solo sitio y lo aplica en todos.',
        },
        {
          id: 'esa1-p4-info-ustedes',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'El plural: una casilla menos en América',
          text: 'En España, el plural de la segunda persona se reparte entre «vosotros» (confianza) y «ustedes» (respeto). En toda América, y también en Canarias y en parte de Andalucía occidental, «vosotros» no existe en el habla corriente: «ustedes» cubre las dos funciones, con el verbo en tercera persona del plural. Un hispanoamericano se dirige así tanto a sus hijos como a un tribunal. Para un aprendiz esto es una buena noticia: usar «ustedes» siempre no suena mal en ningún país, mientras que «vosotros» fuera de España suena a doblaje antiguo.',
          table: {
            headers: ['España', 'América, Canarias', 'Tratamiento'],
            rows: [
              ['¿Vosotros venís?', '¿Ustedes vienen?', 'confianza'],
              ['¿Ustedes vienen?', '¿Ustedes vienen?', 'respeto'],
              ['vuestro coche', 'su carro / el carro de ustedes', 'posesivo'],
              ['sentaos', 'siéntense', 'imperativo'],
            ],
          },
        },
        {
          id: 'esa1-p4-cloze-ustedes',
          type: 'CLOZE',
          instruction: 'Adapte el mensaje a un destinatario americano: sustituya las formas de «vosotros».',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Estimados colegas: ¿' },
            { kind: 'GAP', gapId: 'u1', solution: ['pueden'], hint: 'poder', width: 9 },
            { kind: 'TEXT', text: ' revisar el informe antes del jueves? ' },
            {
              kind: 'GAP',
              gapId: 'u2',
              solution: ['envíenme', 'envienme', 'mándenme', 'mandenme'],
              hint: 'enviar + me, imperativo',
              width: 11,
            },
            {
              kind: 'TEXT',
              text: ' sus comentarios por correo y avísenme si necesitan más datos. Les agradezco ',
            },
            { kind: 'GAP', gapId: 'u3', solution: ['su'], hint: 'posesivo', width: 5 },
            { kind: 'TEXT', text: ' paciencia con los plazos.' },
          ],
        },
        {
          id: 'esa1-p4-info-pasados',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Perfecto o indefinido: la frontera se mueve',
          text: 'La regla que aprende todo estudiante —perfecto para lo que aún alcanza al presente, indefinido para lo terminado— describe bien el centro y el norte de España, y bastante mal el resto. En gran parte de América, en Canarias y en el noroeste peninsular, el indefinido cubre también lo ocurrido hoy: «hoy me levanté temprano», «ya llegó tu paquete». El perfecto no desaparece, pero queda sobre todo para lo que se presenta como experiencia sin fecha: «nunca he estado en Asia».',
          table: {
            headers: ['Situación', 'Centro y norte de España', 'Gran parte de América'],
            rows: [
              ['esta mañana', 'He desayunado a las siete.', 'Desayuné a las siete.'],
              ['hace un momento', '¿Ha llegado el pedido?', '¿Llegó el pedido?'],
              ['experiencia vital', 'Nunca he estado en Asia.', 'Nunca he estado en Asia.'],
              ['hace dos años', 'Estuve en Lima en 2024.', 'Estuve en Lima en 2024.'],
            ],
          },
        },
        {
          id: 'esa1-p4-choice-pasados',
          type: 'CHOICE',
          instruction: 'Elija la respuesta correcta.',
          question: 'Un limeño dice «¿Ya almorzaste?» a mediodía. ¿Cómo hay que interpretarlo?',
          options: [
            { id: 'q1', text: 'Es un error: al tratarse de hoy, corresponde el pretérito perfecto.' },
            {
              id: 'q2',
              text: 'Es el uso normal de su variedad, donde el indefinido cubre también lo ocurrido hoy.',
            },
            { id: 'q3', text: 'Está preguntando por un día anterior, no por hoy.' },
            { id: 'q4', text: 'Es un rasgo coloquial que no se admitiría por escrito en su país.' },
          ],
          multiple: false,
          solution: ['q2'],
          explanation:
            'No hay error ni cambio de día: en la mayor parte de América esa es la forma esperada, también en la lengua escrita. Decir «¿Ya has almorzado?» en Lima no sería incorrecto, pero sonaría peninsular.',
        },
        {
          id: 'esa1-p4-info-detalles',
          type: 'INFO',
          variant: 'TIP',
          title: 'Cuatro detalles que delatan la procedencia',
          text: 'Más allá de los dos grandes contrastes, hay rasgos menores que aparecen constantemente en la conversación y que conviene entender aunque no se usen. Ninguno de ellos es un descuido: cada uno es la norma en su zona.',
          table: {
            headers: ['Rasgo', 'Ejemplo', 'Dónde', 'Equivalente'],
            rows: [
              ['recién + verbo', 'Recién llegué.', 'Río de la Plata, Chile', 'Acabo de llegar.'],
              ['nomás', 'Pase nomás.', 'Andes, México', 'Pase sin más.'],
              ['diminutivo en -ico', 'un ratico, un momentico', 'Costa Rica, Colombia, Venezuela', 'un ratito'],
              ['leísmo de persona', 'A Juan le vi ayer.', 'centro de España', 'A Juan lo vi ayer.'],
            ],
          },
        },
        {
          id: 'esa1-p4-match',
          type: 'MATCHING',
          instruction: 'Relacione cada frase con su equivalente en una variedad distinta.',
          left: [
            { id: 'g1', text: 'Recién salimos de la reunión.' },
            { id: 'g2', text: '¿Vosotros habéis visto el informe?' },
            { id: 'g3', text: 'Esperá un momentico, ya voy.' },
            { id: 'g4', text: 'Hoy he hablado con la directora.' },
          ],
          right: [
            { id: 'h1', text: 'Acabamos de salir de la reunión.' },
            { id: 'h2', text: '¿Ustedes vieron el informe?' },
            { id: 'h3', text: 'Espera un momentito, ya voy.' },
            { id: 'h4', text: 'Hoy hablé con la directora.' },
          ],
          solution: [
            { leftId: 'g1', rightId: 'h1' },
            { leftId: 'g2', rightId: 'h2' },
            { leftId: 'g3', rightId: 'h3' },
            { leftId: 'g4', rightId: 'h4' },
          ],
        },
        {
          id: 'esa1-p4-ordering',
          type: 'ORDERING',
          instruction: 'Ordene los fragmentos para formar una frase coherente en español rioplatense.',
          items: [
            { id: 'i1', text: 'Recién' },
            { id: 'i2', text: 'me enteré' },
            { id: 'i3', text: 'de que vos' },
            { id: 'i4', text: 'te mudaste' },
            { id: 'i5', text: 'a Montevideo.' },
          ],
          solution: ['i1', 'i2', 'i3', 'i4', 'i5'],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – die praktische Frage: welcher Norm folgt man selbst?
  {
    order: 5,
    title: '¿Qué español hablar?',
    subtitle: 'Decidir con criterio y repasar el capítulo',
    estimatedMinutes: 32,
    content: {
      version: v,
      blocks: [
        { id: 'esa1-p5-h1', type: 'HEADING', level: 1, text: '¿Qué español hablar?' },
        {
          id: 'esa1-p5-intro',
          type: 'TEXT',
          text: 'Descrita la variación, queda la pregunta que de verdad afecta a quien aprende: ¿por cuál decidirse? La respuesta razonable no es «el más neutro», entre otras cosas porque el español neutro no lo habla nadie: es una construcción del doblaje y de los manuales. Lo que sí existe es un fondo común muy amplio, compartido por todas las normas cultas, y a partir de ahí una serie de elecciones que conviene hacer con conciencia en lugar de por azar.',
        },
        {
          id: 'esa1-p5-info-criterio',
          type: 'INFO',
          variant: 'TIP',
          title: 'Tres criterios para decidir',
          text: 'Primero: sea coherente. Una variedad mezclada —«vosotros» con «carro», voseo con «zumo»— llama más la atención que cualquier acento. Segundo: elija según su vida real, no según el prestigio; quien trabaja con Bogotá tiene poco que ganar aprendiendo a decir «ordenador». Tercero: distinga producción y comprensión. Se produce en una sola variedad, pero hay que comprenderlas todas, y eso solo se consigue oyendo medios de varios países.',
          table: {
            headers: ['Pregunta', 'Criterio'],
            rows: [
              ['¿Qué digo yo?', 'Una variedad, de forma coherente.'],
              ['¿Qué tengo que entender?', 'Todas: se entrena escuchando, no eligiendo.'],
              ['¿Cuál elijo?', 'Aquella con la que vaya a tratar realmente.'],
              ['¿Y si cambio de país?', 'Se adaptan el léxico y el tratamiento; el resto se queda.'],
            ],
          },
        },
        {
          id: 'esa1-p5-match-situaciones',
          type: 'MATCHING',
          instruction: 'Relacione cada situación con la decisión más razonable.',
          left: [
            { id: 's1', text: 'Va a trabajar dos años en Quito.' },
            { id: 's2', text: 'Redacta un manual de instrucciones para toda Hispanoamérica y España.' },
            { id: 's3', text: 'Su equipo está repartido entre Madrid, Lima y Buenos Aires.' },
            { id: 's4', text: 'Tiene una entrevista de trabajo en Sevilla.' },
          ],
          right: [
            { id: 't1', text: 'Adoptar el «ustedes» general y el léxico local; el voseo no hace falta allí.' },
            {
              id: 't2',
              text: 'Quedarse en el fondo común: evitar regionalismos y nombrar los objetos por su función.',
            },
            {
              id: 't3',
              text: 'Mantener una variedad propia y coherente, y entrenar el oído para las otras dos.',
            },
            { id: 't4', text: 'Cuidar el registro formal; la variedad peninsular ya es la del entorno.' },
          ],
          solution: [
            { leftId: 's1', rightId: 't1' },
            { leftId: 's2', rightId: 't2' },
            { leftId: 's3', rightId: 't3' },
            { leftId: 's4', rightId: 't4' },
          ],
        },
        {
          id: 'esa1-p5-cloze',
          type: 'CLOZE',
          instruction: 'Complete el resumen del capítulo.',
          wordBank: ['policéntrica', 'voseo', 'seseo', 'ustedes', 'indefinido', 'registro'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'El español tiene una norma ' },
            { kind: 'GAP', gapId: 'z1', solution: ['policéntrica', 'policentrica'], width: 13 },
            {
              kind: 'TEXT',
              text: ': varias normas cultas conviven sin que ninguna mande sobre las otras. El ',
            },
            { kind: 'GAP', gapId: 'z2', solution: ['voseo'], width: 8 },
            {
              kind: 'TEXT',
              text: ' sustituye a «tú» en el Río de la Plata y convive con él en Centroamérica. El ',
            },
            { kind: 'GAP', gapId: 'z3', solution: ['seseo'], width: 8 },
            { kind: 'TEXT', text: ' iguala el sonido de «casa» y «caza» en toda América. Fuera de España, ' },
            { kind: 'GAP', gapId: 'z4', solution: ['ustedes'], width: 9 },
            {
              kind: 'TEXT',
              text: ' sirve tanto para el trato de confianza como para el de respeto. Para lo ocurrido hoy, gran parte de América prefiere el ',
            },
            { kind: 'GAP', gapId: 'z5', solution: ['indefinido'], width: 11 },
            {
              kind: 'TEXT',
              text: '. Y lo que cambia entre una charla y una carta oficial no es la variedad, sino el ',
            },
            { kind: 'GAP', gapId: 'z6', solution: ['registro'], width: 10 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'esa1-p5-choice',
          type: 'CHOICE',
          instruction: 'Marque todas las afirmaciones correctas.',
          question: '¿Cuáles de estas afirmaciones se sostienen tras lo visto en el capítulo?',
          options: [
            { id: 'y1', text: 'Con «vos» el verbo no diptonga: se dice «podés», no «puedes».' },
            {
              id: 'y2',
              text: 'El seseo es un rasgo de habla descuidada que la norma culta rechaza.',
            },
            {
              id: 'y3',
              text: '«Ustedes» funciona en toda América tanto para el trato de confianza como para el de respeto.',
            },
            { id: 'y4', text: 'Decir «hoy me levanté temprano» en México es un error de tiempo verbal.' },
            { id: 'y5', text: 'Un mismo hablante cambia de registro sin cambiar de variedad.' },
          ],
          multiple: true,
          solution: ['y1', 'y3', 'y5'],
          explanation:
            'El seseo pertenece a la norma culta de casi todo el mundo hispánico, no a un habla descuidada, y el indefinido para lo ocurrido hoy es la forma esperada en gran parte de América. Las otras tres afirmaciones recogen lo visto en las páginas anteriores.',
        },
        {
          id: 'esa1-p5-writing',
          type: 'WRITING',
          instruction: 'Escriba un texto argumentativo.',
          prompt:
            'Una escuela de idiomas de su ciudad anuncia cursos de «español neutro, sin acento». Escriba una carta al director de entre 150 y 250 palabras en la que valore ese anuncio. Exponga qué tiene de engañoso, reconozca el problema real que la escuela intenta resolver y proponga una alternativa concreta. Use al menos tres de los conceptos del capítulo (variedad, norma culta, registro, rasgo, prestigio) y mantenga un registro formal.',
          minWords: 150,
          maxWords: 260,
          aiFeedback: true,
          sampleAnswer:
            'Estimado director:\n\nHe leído con interés el anuncio de sus cursos de «español neutro, sin acento» y quisiera compartir con usted una objeción, formulada desde el aprecio por su trabajo.\n\nLa expresión me parece engañosa por dos motivos. El primero es que no existe ninguna variedad sin acento: toda pronunciación es la de algún sitio, y lo que suele llamarse neutro no es más que una variedad concreta a la que el doblaje ha dado prestigio. El segundo es que presentar las demás como desviaciones contradice la norma policéntrica que reconocen las propias academias, según la cual conviven varias normas cultas sin jerarquía entre ellas.\n\nComprendo, sin embargo, el problema real que ustedes intentan resolver: quien aprende necesita un modelo estable y no una suma de rasgos mezclados, y el alumno que dice «vosotros» y «carro» en la misma frase desconcierta a cualquier interlocutor.\n\nPropongo por ello una fórmula más precisa: anunciar cursos con una variedad de referencia declarada —peninsular o mexicana, por ejemplo— y con formación sistemática en la comprensión de las demás, mediante grabaciones de varios países. El alumno produciría entonces una sola variedad, de manera coherente, y las entendería todas, que es exactamente lo que necesita.\n\nLe agradezco su atención y quedo a su disposición.\n\nAtentamente,',
        },
      ],
    },
  },
];
