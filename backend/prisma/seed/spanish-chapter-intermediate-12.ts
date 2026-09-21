import type { UnitSeed } from './chapter-beginner-1';

/**
 * Spanisch, Intermediate, Kapitel 12: „Migración e identidad“ (B2, Kapitel 6)
 *
 * Fünf Seiten. Das Schlusskapitel des zweiten Kursbuchs, und damit das
 * Kapitel, in dem alles zusammenkommt: argumentieren (7), mit Zahlen umgehen
 * (8), Hypothesen bilden (9), Sicherheitsgrade abstufen (10) und zwischen
 * Befund und Deutung trennen (11). Das Thema ist mit Absicht eines, das sich
 * ohne diese fünf Fertigkeiten nicht behandeln lässt.
 *
 * Aufbau: Seite 1 nimmt die Wörter selbst unter die Lupe, weil hier die
 * Wortwahl schon die halbe Aussage ist (migrante, inmigrante, expatriado).
 * Seite 2 verbindet Statistik und Einzelfall, ohne das eine gegen das andere
 * auszuspielen. Seite 3 ist die grammatische Seite: die indirekte Rede, mit
 * der man wiedergibt, was andere gesagt haben, samt Zeitenverschiebung. Seite
 * 4 bringt ein Interview, Seite 5 den langen Argumentationstext als
 * Abschlussaufgabe des Buchs.
 *
 * Zum Ton: Das Kapitel nimmt keine migrationspolitische Position ein und tut
 * auch nicht so, als sei das Thema unstrittig. Es zeigt, wie man darüber
 * präzise spricht – wer wird gezählt, wer spricht, was ist belegt –, und
 * überlässt die Schlussfolgerung den Lernenden. Die Zahlen in den Übungen sind
 * erfunden.
 *
 * Wie im gesamten B2-Teil stehen die Seiten einsprachig spanisch; die
 * Wortschatzlisten tragen deutsche und englische Entsprechungen.
 *
 * Sämtliche Texte sind eigenständig verfasst.
 */
const v = 1;

export const SPANISH_INTERMEDIATE_12_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – die Wörter selbst: was ein Begriff mitbringt.
  {
    order: 1,
    title: 'Las palabras pesan',
    subtitle: 'Migrante, inmigrante, expatriado',
    estimatedMinutes: 27,
    content: {
      version: v,
      blocks: [
        { id: 'esi12-p1-h1', type: 'HEADING', level: 1, text: 'Las palabras pesan' },
        {
          id: 'esi12-p1-intro',
          type: 'TEXT',
          text: 'Un ingeniero alemán que trabaja tres años en Madrid es un expatriado. Un albañil marroquí que trabaja treinta años en Madrid es un inmigrante. Los dos han hecho lo mismo: cambiar de país para trabajar. La diferencia no está en los hechos, sino en las palabras con que se cuentan, y esas palabras las elige quien habla. Este capítulo empieza por ahí porque en ningún otro tema es tan visible que el vocabulario ya contiene una posición.',
        },
        {
          id: 'esi12-p1-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: movimiento y pertenencia',
          items: [
            {
              term: 'migrar / el migrante',
              translations: {
                en: 'to migrate / migrant',
                de: 'migrieren / der Migrant, die Migrantin',
              },
            },
            {
              term: 'emigrar / inmigrar',
              translations: { en: 'to emigrate / to immigrate', de: 'auswandern / einwandern' },
              example: 'Emigró en 1962 y su hija inmigró de vuelta en 2005.',
            },
            {
              term: 'el refugiado, la refugiada',
              translations: { en: 'refugee', de: 'der Flüchtling, die Geflüchtete' },
            },
            {
              term: 'solicitar asilo',
              translations: { en: 'to apply for asylum', de: 'Asyl beantragen' },
            },
            {
              term: 'el permiso de residencia',
              translations: { en: 'residence permit', de: 'die Aufenthaltserlaubnis' },
            },
            {
              term: 'el arraigo',
              translations: { en: 'rootedness, established ties', de: 'die Verwurzelung' },
              example: 'Obtuvo los papeles por arraigo social.',
            },
            {
              term: 'la acogida',
              translations: { en: 'reception, welcome', de: 'die Aufnahme' },
            },
            {
              term: 'el desarraigo',
              translations: { en: 'uprootedness', de: 'die Entwurzelung' },
            },
            {
              term: 'la segunda generación',
              translations: { en: 'second generation', de: 'die zweite Generation' },
            },
            {
              term: 'la remesa',
              translations: { en: 'remittance', de: 'die Überweisung ins Herkunftsland' },
              example: 'Las remesas sostienen pueblos enteros.',
            },
            {
              term: 'la pertenencia',
              translations: { en: 'belonging', de: 'die Zugehörigkeit' },
            },
            {
              term: 'el prejuicio',
              translations: { en: 'prejudice', de: 'das Vorurteil' },
            },
            {
              term: 'integrarse',
              translations: { en: 'to integrate', de: 'sich integrieren' },
            },
            {
              term: 'el trámite',
              translations: { en: 'administrative procedure', de: 'der Behördengang' },
            },
          ],
        },
        {
          id: 'esi12-p1-info-terminos',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'Términos que no son sinónimos',
          text: 'Estas palabras se usan a menudo como si dijeran lo mismo y no lo dicen. Dos de ellas tienen una definición jurídica precisa; las demás son descripciones sociales, y por eso admiten discusión. Conocer la diferencia permite leer un texto y advertir dónde alguien ha cambiado de término a mitad de párrafo, que es una de las maniobras retóricas más frecuentes en este asunto.',
          table: {
            headers: ['Término', 'Qué designa', 'Estatuto'],
            rows: [
              ['migrante', 'quien se desplaza, en cualquier dirección', 'descriptivo, neutro'],
              ['inmigrante', 'quien llega, visto desde el país de llegada', 'descriptivo'],
              ['emigrante', 'quien se va, visto desde el país de origen', 'descriptivo'],
              ['refugiado', 'quien tiene protección reconocida', 'jurídico'],
              ['solicitante de asilo', 'quien la ha pedido y espera', 'jurídico'],
              ['expatriado', 'quien migra por trabajo cualificado', 'de uso, no jurídico'],
              ['ilegal (persona)', '—', 'inexacto: una persona no es ilegal'],
            ],
          },
        },
        {
          id: 'esi12-p1-choice-termino',
          type: 'CHOICE',
          instruction: 'Elija la formulación más precisa.',
          question:
            'Un periódico informa de personas que han pedido protección y cuyo expediente está sin resolver. ¿Cómo debe llamarlas?',
          options: [
            { id: 'a1', text: 'refugiados' },
            { id: 'a2', text: 'solicitantes de asilo' },
            { id: 'a3', text: 'inmigrantes ilegales' },
            { id: 'a4', text: 'expatriados' },
          ],
          multiple: false,
          solution: ['a2'],
          explanation:
            'Mientras el expediente no se resuelve, la condición de refugiado no está reconocida: son solicitantes de asilo. Llamarlos refugiados adelanta una decisión que no se ha tomado; llamarlos ilegales atribuye a la persona una ilegalidad que, en todo caso, sería de la situación administrativa.',
        },
        {
          id: 'esi12-p1-texto-espana',
          type: 'TEXT',
          text: 'Conviene recordar un dato que reordena la conversación en español: España fue durante un siglo un país de emigración. Entre 1850 y 1950 salieron hacia América cerca de tres millones y medio de personas, y entre 1960 y 1973 otro millón largo se fue a trabajar a Alemania, Francia y Suiza. La palabra «remesa» entró en el vocabulario español desde el otro lado. Quien hoy discute sobre acogida en Madrid, Bogotá o Buenos Aires discute sobre algo que casi todas sus familias han vivido en una dirección o en otra.',
        },
        {
          id: 'esi12-p1-match-palabras',
          type: 'MATCHING',
          instruction: 'Relacione cada término con la definición que le corresponde.',
          left: [
            { id: 'm1', text: 'el arraigo' },
            { id: 'm2', text: 'la remesa' },
            { id: 'm3', text: 'la segunda generación' },
            { id: 'm4', text: 'el desarraigo' },
          ],
          right: [
            {
              id: 'n1',
              text: 'Vía para regularizar la situación de quien lleva años viviendo y trabajando en el país.',
            },
            { id: 'n2', text: 'Dinero que se envía al país de origen desde el extranjero.' },
            { id: 'n3', text: 'Hijos de migrantes, nacidos o criados en el país de llegada.' },
            { id: 'n4', text: 'Sensación de no pertenecer del todo a ninguno de los dos sitios.' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'n1' },
            { leftId: 'm2', rightId: 'n2' },
            { leftId: 'm3', rightId: 'n3' },
            { leftId: 'm4', rightId: 'n4' },
          ],
        },
        {
          id: 'esi12-p1-cloze',
          type: 'CLOZE',
          instruction: 'Complete con el término preciso.',
          wordBank: ['emigró', 'remesas', 'arraigo', 'segunda generación', 'trámites'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Mi abuelo ' },
            { kind: 'GAP', gapId: 'c1', solution: ['emigró'], width: 8 },
            { kind: 'TEXT', text: ' a Suiza en 1965 y durante quince años envió ' },
            { kind: 'GAP', gapId: 'c2', solution: ['remesas'], width: 9 },
            { kind: 'TEXT', text: ' al pueblo todos los meses. Su nieta, que ya es de la ' },
            { kind: 'GAP', gapId: 'c3', solution: ['segunda generación'], width: 19 },
            {
              kind: 'TEXT',
              text: ', nació en Berna. Cuando volvió a España tardó dos años en terminar los ',
            },
            { kind: 'GAP', gapId: 'c4', solution: ['trámites'], width: 9 },
            {
              kind: 'TEXT',
              text: ', aunque tenía derecho a la nacionalidad, y otros tantos en acreditar su ',
            },
            { kind: 'GAP', gapId: 'c5', solution: ['arraigo'], width: 8 },
            { kind: 'TEXT', text: ' laboral.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – Zahl und Einzelfall zusammenbringen.
  {
    order: 2,
    title: 'Datos y relatos',
    subtitle: 'La cifra y el caso',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'esi12-p2-h1', type: 'HEADING', level: 1, text: 'Datos y relatos' },
        {
          id: 'esi12-p2-intro',
          type: 'TEXT',
          text: 'Sobre este asunto se discute con dos materiales que se llevan mal. Las cifras dicen cuántos, pero no dejan ver a nadie; los relatos individuales se ven muy bien y no prueban nada general. Un texto que solo aporta cifras se lee como un informe sin consecuencias; uno que solo aporta casos convence mientras se lee y se desarma con el primer dato en contra. Lo que se aprende aquí es a usar los dos a la vez sin que uno tape al otro.',
        },
        {
          id: 'esi12-p2-info-combinar',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Cómo se engarzan la cifra y el caso',
          text: 'La regla que mejor funciona es que el caso ilustre la cifra y no la sustituya. Gramaticalmente, eso significa marcar siempre el paso con una expresión que diga qué papel cumple lo que viene: un ejemplo, una excepción o una aclaración de lo que el número esconde.',
          table: {
            headers: ['Función', 'Expresión', 'Ejemplo'],
            rows: [
              [
                'ilustrar',
                'es el caso de, sirva de ejemplo',
                'Es el caso de Amina, enfermera en Lugo.',
              ],
              [
                'advertir del promedio',
                'la media oculta que…',
                'La media oculta diferencias enormes.',
              ],
              [
                'excepción',
                'ahora bien, no siempre es así',
                'Ahora bien, no todos los casos encajan.',
              ],
              [
                'generalizar con cautela',
                'este caso no es excepcional',
                'Su recorrido no es excepcional.',
              ],
              [
                'citar la fuente',
                'según el padrón municipal',
                'Según el padrón, un 14 % de los vecinos.',
              ],
            ],
          },
        },
        {
          id: 'esi12-p2-texto-cifras',
          type: 'TEXT',
          text: 'Observe cómo funciona el engarce en este párrafo, escrito para esta unidad: «Según el padrón de 2025, el 19 % de los residentes del distrito nació fuera de España, frente al 11 % de hace diez años. La media, sin embargo, oculta lo que ocurre dentro: en dos de los seis barrios la proporción no llega al 8 %, mientras que en el barrio de la estación supera el 40 %. Es el caso de la calle Mayor, donde catorce de los diecinueve comercios abiertos tienen titulares nacidos en el extranjero. Ese dato no dice si el barrio funciona bien o mal; dice dónde hay que ir a mirar».',
        },
        {
          id: 'esi12-p2-choice-media',
          type: 'CHOICE',
          instruction: 'Elija la interpretación correcta del párrafo anterior.',
          options: [
            {
              id: 'b1',
              text: 'En todo el distrito, uno de cada cinco vecinos nació fuera de España.',
            },
            {
              id: 'b2',
              text: 'La proporción es uniforme: en torno al 19 % en cada uno de los seis barrios.',
            },
            { id: 'b3', text: 'El barrio de la estación tiene problemas de convivencia.' },
            {
              id: 'b4',
              text: 'La población nacida fuera se ha duplicado en diez años en cada barrio.',
            },
          ],
          multiple: false,
          solution: ['b1'],
          explanation:
            'b1 es lo único que el dato sostiene. b2 contradice expresamente el texto, que señala el reparto desigual; b3 añade un juicio que el párrafo se cuida de no hacer, y b4 generaliza al barrio una evolución que solo se da del conjunto.',
        },
        {
          id: 'esi12-p2-info-promedios',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Tres trampas frecuentes con las cifras',
          text: 'Son las mismas que en cualquier otro tema, pero aquí aparecen constantemente y merecen nombre propio. Detectarlas es más útil que memorizar datos, porque los datos cambian cada año y las trampas no.',
          table: {
            headers: ['Trampa', 'En qué consiste', 'Antídoto'],
            rows: [
              [
                'cifra absoluta sin base',
                '«12 000 personas» sin decir sobre cuántas',
                'pedir el porcentaje',
              ],
              [
                'porcentaje sin absoluto',
                '«subió un 200 %» partiendo de tres casos',
                'pedir la cifra bruta',
              ],
              [
                'comparar poblaciones distintas',
                'comparar sin corregir por edad o renta',
                'preguntar qué se ha igualado',
              ],
            ],
          },
        },
        {
          id: 'esi12-p2-match-trampas',
          type: 'MATCHING',
          instruction: 'Relacione cada titular con la trampa que contiene.',
          left: [
            {
              id: 'p1',
              text: 'Los delitos cometidos por extranjeros suben un 300 % en el municipio.',
            },
            { id: 'p2', text: 'Más de 40 000 extranjeros empadronados en la provincia.' },
            {
              id: 'p3',
              text: 'La tasa de fracaso escolar es mayor entre alumnos de origen extranjero.',
            },
          ],
          right: [
            { id: 'q1', text: 'Porcentaje sin cifra bruta: pudo pasar de dos casos a seis.' },
            { id: 'q2', text: 'Cifra absoluta sin base: ¿sobre qué población total?' },
            {
              id: 'q3',
              text: 'Comparación sin corregir: habría que comparar con alumnos de la misma renta familiar.',
            },
          ],
          solution: [
            { leftId: 'p1', rightId: 'q1' },
            { leftId: 'p2', rightId: 'q2' },
            { leftId: 'p3', rightId: 'q3' },
          ],
        },
        {
          id: 'esi12-p2-cloze',
          type: 'CLOZE',
          instruction: 'Complete el párrafo engarzando dato y caso.',
          wordBank: [
            'Según',
            'La media oculta',
            'Es el caso de',
            'no es excepcional',
            'Ahora bien',
          ],
          caseSensitive: false,
          segments: [
            { kind: 'GAP', gapId: 'c1', solution: ['Según'], width: 7 },
            {
              kind: 'TEXT',
              text: ' el informe del consejo escolar, el 22 % del alumnado del municipio tiene al menos un progenitor nacido fuera. ',
            },
            { kind: 'GAP', gapId: 'c2', solution: ['La media oculta'], width: 16 },
            {
              kind: 'TEXT',
              text: ' una concentración muy fuerte en tres centros del casco antiguo. ',
            },
            { kind: 'GAP', gapId: 'c3', solution: ['Es el caso de'], width: 14 },
            {
              kind: 'TEXT',
              text: ' la escuela Ramón y Cajal, donde la proporción llega al 61 %. Su directora explica que el recorrido de esas familias ',
            },
            { kind: 'GAP', gapId: 'c4', solution: ['no es excepcional'], width: 18 },
            { kind: 'TEXT', text: ': casi todas llevan más de ocho años en el barrio. ' },
            { kind: 'GAP', gapId: 'c5', solution: ['Ahora bien'], width: 11 },
            { kind: 'TEXT', text: ', el dato por sí solo no explica los resultados académicos.' },
          ],
        },
        {
          id: 'esi12-p2-writing',
          type: 'WRITING',
          instruction: 'Engarce un dato y un caso.',
          prompt:
            'Escriba un párrafo de 80 a 120 palabras sobre un cambio demográfico o social de su ciudad o su barrio en los últimos diez años. Empiece por un dato (puede ser aproximado, pero dígalo), muestre después lo que la media esconde y termine con un caso concreto que la ilustre. Marque cada paso con una expresión de las estudiadas y no saque una conclusión que el dato no sostenga.',
          minWords: 80,
          maxWords: 130,
          aiFeedback: true,
          sampleAnswer:
            'Según los datos del padrón, mi barrio ha perdido en diez años alrededor de un 12 % de sus vecinos empadronados. La cifra, sin embargo, oculta dos movimientos contrarios: se han ido sobre todo las familias con hijos pequeños, mientras que la población mayor de setenta años se ha mantenido casi igual. Es el caso de mi propio edificio, donde de los ocho pisos solo uno está ocupado por una familia y cuatro por personas jubiladas que viven solas. Ese reparto no dice todavía nada sobre la causa —el precio del alquiler es la explicación más repetida, pero no la única posible—, aunque sí explica por qué cerró la guardería y no la farmacia.',
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – indirekte Rede: wiedergeben, was andere gesagt haben.
  {
    order: 3,
    title: 'Contar lo que dijo otro',
    subtitle: 'El estilo indirecto',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'esi12-p3-h1', type: 'HEADING', level: 1, text: 'Contar lo que dijo otro' },
        {
          id: 'esi12-p3-intro',
          type: 'TEXT',
          text: 'Cuando se escribe sobre personas, casi todo lo que se cuenta lo ha dicho alguien. Reproducir bien esas palabras es una cuestión técnica —hay que mover los tiempos, las personas y los adverbios— y también una cuestión de honradez: el verbo con que se introduce la cita ya interpreta. No es lo mismo «dijo que no había trabajo» que «alegó que no había trabajo». El segundo pone en duda lo que el primero solo transmite.',
        },
        {
          id: 'esi12-p3-info-tiempos',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'El desplazamiento de los tiempos',
          text: 'Si el verbo introductor está en presente, nada se mueve: «dice que llegó ayer». Si está en pasado, cada tiempo retrocede un escalón. El pluscuamperfecto y el condicional ya no retroceden más, porque son el final de la escala.',
          table: {
            headers: ['Estilo directo', 'Estilo indirecto (verbo en pasado)'],
            rows: [
              ['presente: «Trabajo aquí»', 'imperfecto: dijo que trabajaba allí'],
              ['indefinido: «Llegué en 2011»', 'plusc.: dijo que había llegado en 2011'],
              ['pret. perfecto: «He pedido cita»', 'plusc.: dijo que había pedido cita'],
              ['futuro: «Volveré»', 'condicional: dijo que volvería'],
              ['imperativo: «Ven»', 'imperf. subj.: le pidió que fuera'],
              ['pres. subj.: «Ojalá venga»', 'imperf. subj.: deseó que viniera'],
            ],
          },
        },
        {
          id: 'esi12-p3-info-deicticos',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Lo que se mueve además del verbo',
          text: 'El error más visible al pasar a estilo indirecto no suele estar en el tiempo verbal, sino en las palabras que señalan al aquí y al ahora del que habló. Si el que reproduce está en otro sitio y en otro día, todas ellas cambian.',
          table: {
            headers: ['Directo', 'Indirecto'],
            rows: [
              ['aquí / este', 'allí / aquel'],
              ['hoy / ahora', 'aquel día / entonces'],
              ['ayer', 'el día anterior'],
              ['mañana', 'al día siguiente'],
              ['venir / traer', 'ir / llevar'],
              ['mi, nosotros', 'su, ellos'],
            ],
          },
        },
        {
          id: 'esi12-p3-cloze',
          type: 'CLOZE',
          instruction: 'Pase a estilo indirecto. El verbo introductor está en pasado.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '«Vivo aquí desde 2014.» → Contó que ' },
            { kind: 'GAP', gapId: 'c1', solution: ['vivía'], hint: 'vivir', width: 8 },
            {
              kind: 'TEXT',
              text: ' allí desde 2014.\n«He pedido cita tres veces.» → Explicó que ',
            },
            { kind: 'GAP', gapId: 'c2', solution: ['había pedido'], hint: 'pedir', width: 13 },
            { kind: 'TEXT', text: ' cita tres veces.\n«Mañana iré al consulado.» → Dijo que ' },
            { kind: 'GAP', gapId: 'c3', solution: ['iría'], hint: 'ir', width: 7 },
            {
              kind: 'TEXT',
              text: ' al consulado al día siguiente.\n«Traiga usted el certificado.» → Le pidieron que ',
            },
            {
              kind: 'GAP',
              gapId: 'c4',
              solution: ['llevara', 'llevase'],
              hint: 'llevar',
              width: 9,
            },
            {
              kind: 'TEXT',
              text: ' el certificado.\n«No sé si me lo renovarán.» → Reconoció que no ',
            },
            { kind: 'GAP', gapId: 'c5', solution: ['sabía'], hint: 'saber', width: 8 },
            { kind: 'TEXT', text: ' si se lo renovarían.' },
          ],
        },
        {
          id: 'esi12-p3-info-verbos',
          type: 'INFO',
          variant: 'TIP',
          title: 'El verbo introductor toma partido',
          text: 'Estos verbos no son intercambiables. Los de la primera fila transmiten sin valorar; los demás añaden una actitud del que reproduce hacia lo reproducido. En un texto que aspire a ser justo conviene usar los neutros por defecto y reservar los otros para cuando se tenga una razón, que entonces debe poder explicarse.',
          table: {
            headers: ['Actitud', 'Verbos'],
            rows: [
              ['neutra', 'decir, contar, explicar, señalar, indicar'],
              ['refuerzo', 'subrayar, insistir en, recordar, precisar'],
              ['duda', 'alegar, pretender, asegurar (según contexto)'],
              ['concesión', 'reconocer, admitir'],
              ['queja', 'lamentar, denunciar, quejarse de'],
            ],
          },
        },
        {
          id: 'esi12-p3-choice-verbo',
          type: 'CHOICE',
          instruction: 'Elija el verbo más neutro para una noticia.',
          question:
            'Una mujer cuenta en rueda de prensa que lleva siete años esperando la homologación de su título de medicina.',
          options: [
            { id: 'w1', text: 'La médica alegó que llevaba siete años esperando.' },
            { id: 'w2', text: 'La médica explicó que llevaba siete años esperando.' },
            { id: 'w3', text: 'La médica pretendió haber esperado siete años.' },
            { id: 'w4', text: 'La médica se quejó de que llevaba siete años esperando.' },
          ],
          multiple: false,
          solution: ['w2'],
          explanation:
            '«Explicar» transmite sin valorar. «Alegar» y «pretender» sugieren que el periodista duda de lo dicho, y «quejarse» convierte una información verificable en una actitud personal.',
        },
        {
          id: 'esi12-p3-match-actitud',
          type: 'MATCHING',
          instruction: 'Relacione cada formulación con la actitud que transmite.',
          left: [
            { id: 'x1', text: 'El alcalde reconoció que el plan de acogida iba con retraso.' },
            { id: 'x2', text: 'El alcalde insistió en que el plan iba según lo previsto.' },
            { id: 'x3', text: 'El alcalde alegó que la culpa era de la administración central.' },
            { id: 'x4', text: 'El alcalde señaló que el plan afecta a doce municipios.' },
          ],
          right: [
            { id: 'y1', text: 'Admite algo que no le favorece.' },
            { id: 'y2', text: 'Repite algo ya dicho, con énfasis.' },
            { id: 'y3', text: 'Quien escribe deja ver que no se lo cree del todo.' },
            { id: 'y4', text: 'Transmisión neutra de un dato.' },
          ],
          solution: [
            { leftId: 'x1', rightId: 'y1' },
            { leftId: 'x2', rightId: 'y2' },
            { leftId: 'x3', rightId: 'y3' },
            { leftId: 'x4', rightId: 'y4' },
          ],
        },
        {
          id: 'esi12-p3-writing',
          type: 'WRITING',
          instruction: 'Reproduzca una conversación.',
          prompt:
            'Recuerde una conversación real que haya tenido sobre mudarse, cambiar de país o empezar de nuevo en otro sitio. Reprodúzcala en 80 a 130 palabras en estilo indirecto, con el verbo introductor en pasado. Use al menos cuatro verbos introductores distintos, todos neutros salvo uno que justifique, y cuide los cambios de tiempo, persona y lugar.',
          minWords: 80,
          maxWords: 140,
          aiFeedback: true,
          sampleAnswer:
            'Mi prima me contó el verano pasado que estaba pensando en irse a trabajar a Irlanda. Explicó que en su empresa llevaba cuatro años con el mismo sueldo y que no veía ninguna salida a corto plazo. Cuando le pregunté por el idioma, reconoció que su inglés no era suficiente para una entrevista y que tendría que dedicarle seis meses antes de mandar ningún currículum.\n\nSu madre, que estaba delante, insistió en que allí también costaba encontrar piso y en que el invierno se le haría muy largo. Mi prima le respondió que ya lo sabía, pero que prefería equivocarse fuera a quedarse quieta. Dijo que decidiría antes de las Navidades. Todavía no ha decidido nada.',
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – das Interview: Stimmen im Text.
  {
    order: 4,
    title: 'Dos generaciones',
    subtitle: 'Escuchar y repreguntar',
    estimatedMinutes: 27,
    content: {
      version: v,
      blocks: [
        { id: 'esi12-p4-h1', type: 'HEADING', level: 1, text: 'Dos generaciones' },
        {
          id: 'esi12-p4-intro',
          type: 'TEXT',
          text: 'La entrevista que sigue es de ficción, escrita para esta unidad, pero el caso que retrata es corriente en muchas familias del mundo hispanohablante: quien se fue y quien volvió. Léala fijándose en dos cosas: cómo repregunta la entrevistadora cuando una respuesta se queda corta, y cómo los dos entrevistados hablan de pertenencia sin usar esa palabra ni una sola vez.',
        },
        {
          id: 'esi12-p4-dialogo',
          type: 'DIALOGUE',
          title: 'Entrevista: Teresa (78) y su nieta Laura (29)',
          audioUrl: 'placeholder://es-b2-migracion',
          lines: [
            {
              speaker: 'Periodista',
              text: 'Teresa, usted salió de Zamora en 1964. ¿Cómo lo recuerda?',
            },
            {
              speaker: 'Teresa',
              text: 'Con un contrato de dos años para una fábrica cerca de Colonia. Me dijeron que volvería con dinero para una casa. Volví catorce años después, con la casa y con dos hijas que no sabían hablar castellano en el colegio.',
            },
            {
              speaker: 'Periodista',
              text: 'Dice «que no sabían hablar castellano en el colegio». ¿Fuera del colegio sí?',
            },
            {
              speaker: 'Teresa',
              text: 'En casa hablábamos español siempre. Pero lo que se aprende en casa no es lo que piden en una clase. A la mayor la pusieron un curso por detrás, y no era tonta.',
            },
            {
              speaker: 'Periodista',
              text: 'Laura, tú hiciste el camino contrario: naciste aquí y te fuiste a Alemania a los veinticuatro.',
            },
            {
              speaker: 'Laura',
              text: 'Sí, y con la ventaja de que a mí nadie me llamó inmigrante. Me llamaban «la española», y eso en Múnich suena a otra cosa. Es el mismo movimiento que hizo mi abuela y las palabras son distintas.',
            },
            {
              speaker: 'Periodista',
              text: '¿Te lo dijeron alguna vez de forma directa?',
            },
            {
              speaker: 'Laura',
              text: 'Nunca. Eso es lo que quiero decir: no hizo falta. Cuando busqué piso me contestaron el mismo día; a una compañera siria le decían siempre que acababan de alquilarlo.',
            },
            {
              speaker: 'Teresa',
              text: 'A mí me lo decían con otras palabras. Que no alquilaban a gente con niños.',
            },
            {
              speaker: 'Periodista',
              text: 'Y ahora las dos viven en el mismo pueblo. ¿Hablan de esto en casa?',
            },
            {
              speaker: 'Laura',
              text: 'Poco, hasta que empecé a preguntar. Mi abuela no contaba nada de aquellos años. Ahora sí, y me he dado cuenta de que la mitad de lo que yo creía saber me lo había inventado.',
            },
          ],
        },
        {
          id: 'esi12-p4-info-repreguntar',
          type: 'INFO',
          variant: 'TIP',
          title: 'Repreguntar',
          text: 'Una entrevista se hunde cuando el entrevistador pasa a la siguiente pregunta de su lista en lugar de tirar del hilo que acaba de aparecer. Estas cuatro fórmulas permiten repreguntar sin resultar agresivo, y las cuatro aparecen en el diálogo anterior.',
          table: {
            headers: ['Para', 'Fórmula'],
            rows: [
              ['pedir precisión', 'Ha dicho usted «…». ¿A qué se refiere exactamente?'],
              ['pedir un ejemplo', '¿Le ocurrió alguna vez de forma directa?'],
              ['comprobar lo entendido', 'O sea, que si le entiendo bien…'],
              ['abrir al otro', '¿Y usted lo vivió igual?'],
            ],
          },
        },
        {
          id: 'esi12-p4-choice-lectura',
          type: 'CHOICE',
          instruction: 'Lea la entrevista y elija.',
          question: '¿Qué afirma Laura exactamente sobre su experiencia en Múnich?',
          options: [
            { id: 'z1', text: 'Que sufrió discriminación abierta en la búsqueda de piso.' },
            {
              id: 'z2',
              text: 'Que a ella no la trataron como inmigrante, y que ese trato distinto se notaba en detalles como la respuesta de los caseros.',
            },
            {
              id: 'z3',
              text: 'Que en Alemania no hay discriminación hacia los españoles ni hacia nadie.',
            },
            { id: 'z4', text: 'Que su abuela exagera al recordar aquellos años.' },
          ],
          multiple: false,
          solution: ['z2'],
          explanation:
            'Laura dice expresamente que a ella nunca se lo dijeron de forma directa y señala el contraste con su compañera siria. z1 le atribuye lo contrario de lo que cuenta, y z3 generaliza a partir de un caso que ella misma presenta como privilegiado.',
        },
        {
          id: 'esi12-p4-cloze',
          type: 'CLOZE',
          instruction: 'Complete las repreguntas de la entrevistadora.',
          wordBank: [
            'A qué se refiere',
            'si le entiendo bien',
            'alguna vez',
            'Y usted',
            'Ha dicho',
          ],
          caseSensitive: false,
          segments: [
            { kind: 'GAP', gapId: 'c1', solution: ['Ha dicho'], width: 9 },
            { kind: 'TEXT', text: ' que allí «era otra cosa». ¿' },
            { kind: 'GAP', gapId: 'c2', solution: ['A qué se refiere'], width: 17 },
            { kind: 'TEXT', text: '?\n▸ O sea, que ' },
            { kind: 'GAP', gapId: 'c3', solution: ['si le entiendo bien'], width: 20 },
            { kind: 'TEXT', text: ', usted nunca pensó en quedarse.\n▸ ¿Le pasó ' },
            { kind: 'GAP', gapId: 'c4', solution: ['alguna vez'], width: 11 },
            { kind: 'TEXT', text: ' con un casero?\n▸ ' },
            { kind: 'GAP', gapId: 'c5', solution: ['Y usted'], width: 8 },
            { kind: 'TEXT', text: ', Teresa, ¿lo vivió de la misma manera?' },
          ],
        },
        {
          id: 'esi12-p4-match-fragmentos',
          type: 'MATCHING',
          instruction: 'Relacione cada fragmento de la entrevista con lo que muestra.',
          left: [
            { id: 'f1', text: '«Me dijeron que volvería con dinero para una casa.»' },
            { id: 'f2', text: '«A mí nadie me llamó inmigrante. Me llamaban “la española”.»' },
            {
              id: 'f3',
              text: '«A una compañera siria le decían siempre que acababan de alquilarlo.»',
            },
            { id: 'f4', text: '«La mitad de lo que yo creía saber me lo había inventado.»' },
          ],
          right: [
            { id: 'g1', text: 'Una promesa laboral que ordenó una vida entera.' },
            {
              id: 'g2',
              text: 'El mismo hecho, nombrado de dos maneras según quién lo protagoniza.',
            },
            { id: 'g3', text: 'Una discriminación que no se formula nunca en voz alta.' },
            { id: 'g4', text: 'El silencio familiar como fuente de relatos falsos.' },
          ],
          solution: [
            { leftId: 'f1', rightId: 'g1' },
            { leftId: 'f2', rightId: 'g2' },
            { leftId: 'f3', rightId: 'g3' },
            { leftId: 'f4', rightId: 'g4' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – Abschlussaufgabe des Buchs: der lange Argumentationstext.
  {
    order: 5,
    title: 'Sostener un texto largo',
    subtitle: 'La tarea final del libro',
    estimatedMinutes: 32,
    content: {
      version: v,
      blocks: [
        { id: 'esi12-p5-h1', type: 'HEADING', level: 1, text: 'Sostener un texto largo' },
        {
          id: 'esi12-p5-intro',
          type: 'TEXT',
          text: 'Esta es la última página del segundo libro, y la tarea que la cierra reúne lo que se ha trabajado en los seis capítulos de este nivel: una postura que se sostiene (capítulo 7), cifras leídas con cuidado (8), hipótesis bien formadas (9), grados de certeza (10) y la separación entre lo observado y lo interpretado (11). Antes de escribir, conviene repasar qué distingue un texto largo de uno corto, porque no es solo la extensión.',
        },
        {
          id: 'esi12-p5-info-largo',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Lo que cambia al escribir largo',
          text: 'En un párrafo, el lector recuerda la primera frase cuando llega a la última. En tres páginas, no. Por eso un texto largo necesita recursos que uno corto puede ahorrarse: anuncios de lo que viene, recapitulaciones breves y una repetición controlada de las palabras clave.',
          table: {
            headers: ['Recurso', 'Fórmula', 'Dónde'],
            rows: [
              ['anunciar el recorrido', 'Conviene distinguir tres planos…', 'tras la tesis'],
              ['retomar el hilo', 'Volviendo a lo anterior…', 'inicio de párrafo'],
              ['recapitular', 'Hasta aquí, dos cosas: … y …', 'mitad del texto'],
              ['marcar el giro', 'Ahora bien / Conviene sin embargo…', 'antes de la objeción'],
              ['cerrar el arco', 'La pregunta del principio admite ahora…', 'conclusión'],
            ],
          },
        },
        {
          id: 'esi12-p5-info-registro',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Tres cautelas propias de este tema',
          text: 'Al escribir sobre personas, hay tres descuidos que arruinan un texto por lo demás bien construido. No son cuestiones de corrección política sino de precisión: los tres consisten en afirmar más de lo que se sabe.',
          table: {
            headers: ['Descuido', 'Corrección'],
            rows: [
              ['hablar de «ellos» como bloque', 'nombrar de quién se habla y cuántos son'],
              ['convertir un caso en norma', 'decir si el caso es o no representativo'],
              ['atribuir intenciones a un grupo', 'describir conductas observables'],
            ],
          },
        },
        {
          id: 'esi12-p5-choice-cautela',
          type: 'CHOICE',
          instruction: 'Elija la formulación más precisa.',
          options: [
            { id: 'h1', text: 'Los inmigrantes prefieren vivir agrupados en los mismos barrios.' },
            {
              id: 'h2',
              text: 'En cuatro de los quince barrios se concentra el 60 % de los residentes nacidos fuera, lo que se explica sobre todo por el precio del alquiler.',
            },
            { id: 'h3', text: 'Es evidente que no quieren integrarse en el resto de la ciudad.' },
            { id: 'h4', text: 'Todo el mundo sabe que estos barrios acaban aislándose.' },
          ],
          multiple: false,
          solution: ['h2'],
          explanation:
            'h2 aporta el dato, dice dónde y ofrece una explicación matizada («sobre todo»). Las otras tres atribuyen a un grupo entero una preferencia o una intención que ningún dato del texto sostiene.',
        },
        {
          id: 'esi12-p5-ordering',
          type: 'ORDERING',
          instruction: 'Ordene el esquema de un texto argumentativo largo.',
          items: [
            { id: 'e1', text: 'Un hecho concreto y reciente que sirva de entrada.' },
            { id: 'e2', text: 'La tesis, formulada en una sola frase discutible.' },
            { id: 'e3', text: 'Anuncio del recorrido: los planos que se van a distinguir.' },
            { id: 'e4', text: 'Los argumentos, uno por párrafo, con su dato o su caso.' },
            { id: 'e5', text: 'La objeción más fuerte, expuesta con sus mejores razones.' },
            { id: 'e6', text: 'La respuesta a esa objeción, que concede lo que es cierto.' },
            { id: 'e7', text: 'Conclusión que retoma la entrada y propone algo concreto.' },
          ],
          solution: ['e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7'],
        },
        {
          id: 'esi12-p5-cloze',
          type: 'CLOZE',
          instruction: 'Complete las transiciones de un texto largo.',
          wordBank: [
            'Conviene distinguir',
            'Hasta aquí',
            'Volviendo',
            'Ahora bien',
            'En definitiva',
          ],
          caseSensitive: false,
          segments: [
            { kind: 'GAP', gapId: 'c1', solution: ['Conviene distinguir'], width: 20 },
            {
              kind: 'TEXT',
              text: ' tres planos que suelen mezclarse: el jurídico, el laboral y el escolar. […] ',
            },
            { kind: 'GAP', gapId: 'c2', solution: ['Hasta aquí'], width: 11 },
            {
              kind: 'TEXT',
              text: ', dos cosas: los trámites duran demasiado y el retraso tiene un coste medible. […] ',
            },
            { kind: 'GAP', gapId: 'c3', solution: ['Ahora bien'], width: 11 },
            {
              kind: 'TEXT',
              text: ', simplificar el trámite no resuelve por sí solo el problema de la vivienda. […] ',
            },
            { kind: 'GAP', gapId: 'c4', solution: ['Volviendo'], width: 10 },
            {
              kind: 'TEXT',
              text: ' al caso del principio, la familia de la calle Mayor llevaba ocho años esperando. ',
            },
            { kind: 'GAP', gapId: 'c5', solution: ['En definitiva'], width: 14 },
            {
              kind: 'TEXT',
              text: ', lo que se propone aquí es una medida concreta y no un cambio de discurso.',
            },
          ],
        },
        {
          id: 'esi12-p5-writing',
          type: 'WRITING',
          instruction: 'Tarea final: escriba un texto argumentativo extenso.',
          prompt:
            'Escriba un texto de 300 a 450 palabras para una revista universitaria sobre una de estas cuestiones: si la enseñanza de la lengua de origen debería ofrecerse en la escuela pública; si los trámites de residencia deberían resolverse en un plazo máximo fijado por ley; o si su ciudad debería reconocer el derecho de voto municipal a los residentes extranjeros de larga duración. Siga el esquema de siete pasos de esta página. Incluya al menos un dato con su fuente (puede ser aproximado si lo indica), un caso concreto, una hipótesis en condicional y un párrafo entero dedicado a la objeción contraria. Cuide las tres cautelas del recuadro y mantenga un registro formal.',
          minWords: 300,
          maxWords: 480,
          aiFeedback: true,
          sampleAnswer:
            'El curso pasado, el instituto de mi barrio ofreció por primera vez dos horas semanales de árabe como asignatura optativa, abierta a todo el alumnado. Se apuntaron cuarenta y un estudiantes; catorce de ellos no tenían ninguna relación familiar con esa lengua. La experiencia terminó en junio y no se ha renovado, por falta de partida presupuestaria.\n\nA mi juicio, la enseñanza de las lenguas de origen debería formar parte de la oferta ordinaria de la escuela pública, y no depender de un proyecto piloto que se renueva cada curso. Conviene distinguir tres planos que suelen mezclarse en este debate: el pedagógico, el económico y el simbólico.\n\nEn el plano pedagógico, el argumento es el más sólido y el menos citado. Diversos estudios en contextos bilingües apuntan a que el dominio de la primera lengua facilita el aprendizaje de la segunda, en lugar de estorbarlo; el alumno que sabe estructurar un relato en una lengua lo hace antes en la otra. No está demostrado que el efecto sea grande, y conviene decirlo, pero la dirección es constante en la bibliografía disponible.\n\nEn el plano económico, el coste es modesto: dos horas semanales de un profesor asociado por centro. Según los datos del propio instituto, el curso completo costó algo menos de lo que se gastó ese año en renovar el mobiliario de la sala de profesores.\n\nSe objetará, y es la objeción más seria, que la escuela tiene un tiempo limitado y que cada hora dedicada a una lengua de origen se resta de otra cosa: de matemáticas, de inglés, de lectura. Quien lo plantea no defiende ningún prejuicio, sino una aritmética real, y merece una respuesta igual de concreta. Es cierto que el horario escolar no es elástico. Ahora bien, la asignatura de la que hablamos era optativa y ocupaba una franja que hasta entonces se dedicaba a estudio libre; no desplazó ninguna materia troncal. Si el problema es de tiempo, la discusión debería ser sobre qué ocupa las franjas optativas, y no sobre esta en particular.\n\nVolviendo al caso del principio: de los cuarenta y un alumnos, catorce aprendían una lengua que no era la de su casa. Ese dato, más que ningún otro, deshace la idea de que se trata de una medida dirigida a un grupo. En definitiva, lo que se propone aquí es que la oferta se consolide con una partida estable y una evaluación a tres años, no que se sustituya un discurso por otro.',
        },
      ],
    },
  },
];
