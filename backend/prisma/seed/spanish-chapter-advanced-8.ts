import type { UnitSeed } from './chapter-beginner-1';

/**
 * Spanisch, Advanced, Kapitel 8: „Escritura académica“
 *
 * Fünf Seiten. Wissenschaftliches Schreiben auf Spanisch unterscheidet sich
 * vom deutschen weniger im Aufbau als in der Stimme: Die Konventionen für
 * das Ich, das Referieren und die Distanz sind eigene. Dazu kommen die
 * Fehler, die auch Muttersprachler machen und die in einem Gutachten sofort
 * auffallen – Gerundio de posterioridad, Dequeísmo, Allerweltsverben.
 *
 * Aufbau: Seite 1 die Gliederung einer Arbeit, Seite 2 das Referieren mit
 * Redeeinleitungsverben, Seite 3 Distanz und Vorsicht, Seite 4 Präzision
 * und die typischen Normfehler, Seite 5 der akademische Absatz und ein
 * eigenes Abstract.
 *
 * Die zitierten Autorinnen und Studien sind erfunden. Sämtliche Texte sind
 * eigenständig verfasst.
 */
const v = 1;

export const SPANISH_ADVANCED_8_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – die Gliederung einer wissenschaftlichen Arbeit.
  {
    order: 1,
    title: 'La estructura de un trabajo',
    subtitle: 'Eine wissenschaftliche Arbeit gliedern',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'esa8-p1-h1', type: 'HEADING', level: 1, text: 'La estructura de un trabajo' },
        {
          id: 'esa8-p1-intro',
          type: 'TEXT',
          text: 'Un artículo académico no se lee de principio a fin. Se lee primero el resumen, después las conclusiones y, si ambas cosas interesan, el resto. Esa manera de leer explica la estructura: cada sección tiene que poder encontrarse y entenderse por separado. Quien escribe no cuenta una historia, sino que construye un edificio en el que cualquiera debe orientarse.',
        },
        {
          id: 'esa8-p1-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: el trabajo académico',
          items: [
            { term: 'el resumen', translations: { en: 'abstract', de: 'das Abstract, die Zusammenfassung' } },
            { term: 'el estado de la cuestión', translations: { en: 'state of the art, literature review', de: 'der Forschungsstand' } },
            { term: 'el marco teórico', translations: { en: 'theoretical framework', de: 'der theoretische Rahmen' } },
            { term: 'la metodología', translations: { en: 'methodology', de: 'die Methodik' } },
            { term: 'el corpus', translations: { en: 'corpus', de: 'das Korpus' } },
            { term: 'la cita textual', translations: { en: 'direct quotation', de: 'das wörtliche Zitat' } },
            { term: 'la paráfrasis', translations: { en: 'paraphrase', de: 'die Paraphrase' } },
            { term: 'la nota al pie', translations: { en: 'footnote', de: 'die Fußnote' } },
            { term: 'la bibliografía', translations: { en: 'bibliography', de: 'das Literaturverzeichnis' } },
            {
              term: 'el trabajo de fin de grado (TFG)',
              translations: { en: "bachelor's thesis", de: 'die Bachelorarbeit' },
            },
            { term: 'la tesis doctoral', translations: { en: 'doctoral thesis', de: 'die Dissertation' } },
            { term: 'el plagio', translations: { en: 'plagiarism', de: 'das Plagiat' } },
          ],
        },
        {
          id: 'esa8-p1-info-secciones',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Las secciones y su tiempo verbal',
          text: 'Cada sección tiene una función y, con ella, un tiempo verbal preferente. La introducción y la discusión usan el presente, porque hablan de lo que se sabe y de lo que significa. La metodología y los resultados usan el pretérito, porque cuentan lo que se hizo y lo que se encontró. El resumen mezcla ambos: presente para el objetivo y la conclusión, pretérito para el método.',
          table: {
            headers: ['Sección', 'Función', 'Tiempo típico'],
            rows: [
              ['introducción', 'problema, objetivo, hipótesis', 'presente: «Este trabajo analiza…»'],
              ['estado de la cuestión', 'qué se sabe ya', 'presente y perfecto: «Varios estudios han mostrado…»'],
              ['metodología', 'cómo se hizo', 'pretérito: «Se entrevistó a 40 docentes.»'],
              ['resultados', 'qué se encontró', 'pretérito: «El 60 % prefirió…»'],
              ['discusión y conclusiones', 'qué significa', 'presente: «Los datos indican…»'],
            ],
          },
        },
        {
          id: 'esa8-p1-match',
          type: 'MATCHING',
          instruction: 'Relacione cada frase con la sección a la que pertenece.',
          left: [
            { id: 'a1', text: 'Se analizaron 120 editoriales publicados entre 2015 y 2020.' },
            { id: 'a2', text: 'Este trabajo se propone examinar el uso de la ironía en la prensa deportiva.' },
            { id: 'a3', text: 'Tres de cada cuatro editoriales recurrieron a la hipérbole.' },
            { id: 'a4', text: 'Estos resultados sugieren que la ironía cumple una función de cohesión con el lector.' },
            { id: 'a5', text: 'Desde los trabajos de Ruiz (2009), la ironía periodística ha recibido creciente atención.' },
          ],
          right: [
            { id: 'b1', text: 'metodología' },
            { id: 'b2', text: 'introducción' },
            { id: 'b3', text: 'resultados' },
            { id: 'b4', text: 'discusión' },
            { id: 'b5', text: 'estado de la cuestión' },
          ],
          solution: [
            { leftId: 'a1', rightId: 'b1' },
            { leftId: 'a2', rightId: 'b2' },
            { leftId: 'a3', rightId: 'b3' },
            { leftId: 'a4', rightId: 'b4' },
            { leftId: 'a5', rightId: 'b5' },
          ],
        },
        {
          id: 'esa8-p1-ordering',
          type: 'ORDERING',
          instruction: 'Ordene las frases de este resumen.',
          items: [
            { id: 'o1', text: 'El presente estudio examina el uso del voseo en la publicidad uruguaya.' },
            { id: 'o2', text: 'Se analizó un corpus de 300 anuncios televisivos emitidos entre 2018 y 2023.' },
            { id: 'o3', text: 'El voseo apareció en el 92 % de los anuncios dirigidos a jóvenes, frente al 40 % de los dirigidos a mayores.' },
            { id: 'o4', text: 'Los resultados indican que el voseo funciona como marca de cercanía generacional.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4'],
        },
        {
          id: 'esa8-p1-cloze',
          type: 'CLOZE',
          instruction: 'Complete con el término adecuado.',
          wordBank: ['resumen', 'estado de la cuestión', 'metodología', 'bibliografía', 'plagio'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'El ' },
            { kind: 'GAP', gapId: 'g1', solution: ['resumen'], width: 8 },
            { kind: 'TEXT', text: ' condensa todo el trabajo en unas doscientas palabras. El ' },
            { kind: 'GAP', gapId: 'g2', solution: ['estado de la cuestión', 'estado de la cuestion'], width: 21 },
            { kind: 'TEXT', text: ' recoge lo que ya han dicho otros. La ' },
            { kind: 'GAP', gapId: 'g3', solution: ['metodología', 'metodologia'], width: 12 },
            { kind: 'TEXT', text: ' explica cómo se obtuvieron los datos. Toda obra citada debe aparecer en la ' },
            { kind: 'GAP', gapId: 'g4', solution: ['bibliografía', 'bibliografia'], width: 13 },
            { kind: 'TEXT', text: '; de lo contrario, se incurre en ' },
            { kind: 'GAP', gapId: 'g5', solution: ['plagio'], width: 7 },
            { kind: 'TEXT', text: '.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – Referieren: Redeeinleitungsverben und ihre Wertung.
  {
    order: 2,
    title: 'Citar y referir',
    subtitle: 'Fremde Positionen wiedergeben',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'esa8-p2-h1', type: 'HEADING', level: 1, text: 'Citar y referir' },
        {
          id: 'esa8-p2-intro',
          type: 'TEXT',
          text: 'Buena parte de un texto académico consiste en decir lo que han dicho otros. El problema no es la cita en sí, sino el verbo que la introduce. «Morales afirma», «Morales admite» y «Morales pretende» atribuyen la misma idea a la misma autora, pero dicen tres cosas distintas sobre ella y sobre la opinión de quien escribe.',
        },
        {
          id: 'esa8-p2-info-verbos',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Verbos para introducir a otros',
          text: 'Los verbos de referencia se agrupan por lo que hacen. Los neutros solo atribuyen. Los que marcan fuerza indican con qué seguridad lo dice la fuente. Los valorativos dejan ver la opinión de quien escribe: «pretender» y «alegar» sugieren que la fuente se equivoca; «demostrar» y «constatar», que tiene razón.',
          table: {
            headers: ['Tipo', 'Verbos', 'Qué comunica'],
            rows: [
              ['neutro', 'afirmar, señalar, plantear, sostener', 'solo atribuye'],
              ['cautela de la fuente', 'sugerir, apuntar, insinuar', 'la fuente no lo afirma del todo'],
              ['concesión de la fuente', 'admitir, reconocer, conceder', 'la fuente cede en algo'],
              ['aval de quien escribe', 'demostrar, mostrar, constatar', 'quien escribe lo da por probado'],
              ['distancia de quien escribe', 'pretender, alegar, aducir', 'quien escribe no lo comparte'],
            ],
          },
        },
        {
          id: 'esa8-p2-match',
          type: 'MATCHING',
          instruction: 'Relacione cada frase con lo que comunica sobre la postura del autor del texto.',
          left: [
            { id: 'v1', text: 'Morales demuestra que el voseo avanza en la prensa.' },
            { id: 'v2', text: 'Morales pretende que el voseo avanza en la prensa.' },
            { id: 'v3', text: 'Morales sostiene que el voseo avanza en la prensa.' },
            { id: 'v4', text: 'Morales sugiere que el voseo podría avanzar en la prensa.' },
          ],
          right: [
            { id: 'w1', text: 'Quien escribe considera probada la afirmación.' },
            { id: 'w2', text: 'Quien escribe no comparte la afirmación.' },
            { id: 'w3', text: 'Quien escribe solo atribuye la afirmación, sin valorarla.' },
            { id: 'w4', text: 'La propia Morales lo plantea con cautela.' },
          ],
          solution: [
            { leftId: 'v1', rightId: 'w1' },
            { leftId: 'v2', rightId: 'w2' },
            { leftId: 'v3', rightId: 'w3' },
            { leftId: 'v4', rightId: 'w4' },
          ],
        },
        {
          id: 'esa8-p2-info-citas',
          type: 'INFO',
          variant: 'TIP',
          title: 'Cita textual, paráfrasis, alusión',
          text: 'La cita textual se reserva para formulaciones que importan en sí mismas: una definición, una frase polémica. Va entre comillas angulares o inglesas, con la página. La paráfrasis reformula con palabras propias y también exige la referencia. La alusión menciona una obra sin detallar su contenido. Un trabajo compuesto casi solo de citas textuales parece una antología, no un análisis.',
          table: {
            headers: ['Forma', 'Ejemplo'],
            rows: [
              ['cita textual', 'Para Morales, el voseo es «la marca más visible de la identidad rioplatense» (2019: 45).'],
              ['paráfrasis', 'Morales (2019) considera el voseo el rasgo más identitario del habla rioplatense.'],
              ['alusión', 'Sobre el voseo en la prensa, véase Morales (2019).'],
            ],
          },
        },
        {
          id: 'esa8-p2-choice',
          type: 'CHOICE',
          instruction: 'Elija el verbo adecuado.',
          question: 'Quiere indicar que la autora cede en un punto que no favorece su propia tesis: «Aunque defiende el modelo, Pérez ___ que los costes iniciales son elevados».',
          options: [
            { id: 'c1', text: 'pretende' },
            { id: 'c2', text: 'reconoce' },
            { id: 'c3', text: 'demuestra' },
            { id: 'c4', text: 'alega' },
          ],
          multiple: false,
          solution: ['c2'],
          explanation:
            '«Reconocer» presenta la afirmación como una concesión de la propia autora. «Pretender» y «alegar» marcarían desacuerdo de quien escribe; «demostrar» daría el dato por probado, sin el matiz de concesión.',
        },
        {
          id: 'esa8-p2-cloze',
          type: 'CLOZE',
          instruction: 'Complete el párrafo con los verbos de referencia adecuados.',
          wordBank: ['señala', 'admite', 'pretenden', 'demostró'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'García (2015) ' },
            { kind: 'GAP', gapId: 'r1', solution: ['señala', 'sostiene'], hint: 'neutro', width: 8 },
            { kind: 'TEXT', text: ' que el uso de anglicismos crece entre los jóvenes, aunque ' },
            { kind: 'GAP', gapId: 'r2', solution: ['admite', 'reconoce'], hint: 'concesión', width: 8 },
            { kind: 'TEXT', text: ' que su corpus es reducido. Otros autores ' },
            { kind: 'GAP', gapId: 'r3', solution: ['pretenden'], hint: 'distancia', width: 10 },
            { kind: 'TEXT', text: ' que el fenómeno amenaza la lengua, algo que el estudio de Díaz (2020) ya ' },
            { kind: 'GAP', gapId: 'r4', solution: ['demostró', 'demostro'], hint: 'aval', width: 9 },
            { kind: 'TEXT', text: ' que carece de base.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – Distanz, das Ich und die Vorsicht.
  {
    order: 3,
    title: 'La voz del texto',
    subtitle: 'Distanz halten, vorsichtig behaupten',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'esa8-p3-h1', type: 'HEADING', level: 1, text: 'La voz del texto' },
        {
          id: 'esa8-p3-intro',
          type: 'TEXT',
          text: '¿Se puede escribir «yo» en un trabajo académico? En español la respuesta tradicional ha sido que no, y aunque cada vez más disciplinas lo admiten, sigue siendo menos frecuente que en inglés. Las alternativas no son un capricho: cada una sitúa a quien escribe a una distancia distinta de lo que afirma.',
        },
        {
          id: 'esa8-p3-info-voces',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Cuatro maneras de no decir «yo»',
          text: 'El plural de modestia («consideramos», «hemos observado») incluye al lector en el razonamiento y es el recurso más habitual en humanidades. La pasiva refleja e impersonal («se analizaron», «se observa») borra al investigador y es típica de las ciencias. El sujeto textual («este trabajo sostiene», «el presente artículo») da la voz al texto mismo. La primera persona del singular se reserva para decisiones personales explícitas o se admite en ciertas disciplinas.',
          table: {
            headers: ['Recurso', 'Ejemplo', 'Efecto'],
            rows: [
              ['plural de modestia', 'Consideramos que la hipótesis se confirma.', 'implica al lector'],
              ['se impersonal / pasiva refleja', 'Se entrevistó a 40 docentes.', 'borra al investigador'],
              ['sujeto textual', 'Este artículo defiende que…', 'da la voz al texto'],
              ['primera persona', 'He optado por excluir los casos dudosos.', 'asume una decisión'],
            ],
          },
        },
        {
          id: 'esa8-p3-choice',
          type: 'CHOICE',
          instruction: 'Elija la formulación más adecuada para un artículo de humanidades.',
          question: '¿Qué frase mantiene el registro académico?',
          options: [
            { id: 'd1', text: 'Yo creo que Cortázar es el mejor cuentista de todos los tiempos.' },
            { id: 'd2', text: 'A nuestro juicio, los cuentos de Cortázar desplazan lo fantástico hacia lo cotidiano.' },
            { id: 'd3', text: 'Todo el mundo sabe que Cortázar revolucionó el cuento.' },
            { id: 'd4', text: 'Cortázar mola porque sus cuentos son rarísimos.' },
          ],
          multiple: false,
          solution: ['d2'],
          explanation:
            '«A nuestro juicio» asume la opinión con el plural de modestia y la formula como una tesis discutible y precisa. «Yo creo que… el mejor» es una valoración personal sin contenido analítico; «todo el mundo sabe» es una generalización sin fuente.',
        },
        {
          id: 'esa8-p3-info-atenuacion',
          type: 'INFO',
          variant: 'TIP',
          title: 'Atenuar sin diluir',
          text: 'La cautela académica no consiste en llenar el texto de «quizás». Se atenúa donde hay razones para hacerlo, y se afirma donde los datos lo permiten. Un exceso de atenuación hace sospechar que el autor no cree en sus propios resultados; su ausencia, que los exagera.',
          table: {
            headers: ['Demasiado fuerte', 'Adecuado', 'Demasiado débil'],
            rows: [
              ['Los datos prueban que…', 'Los datos indican que…', 'Podría quizás parecer que…'],
              ['Es indudable que…', 'Cabe pensar que…', 'Tal vez sería posible pensar que…'],
              ['Siempre ocurre que…', 'En la mayoría de los casos…', 'En algunos casos, a veces…'],
            ],
          },
        },
        {
          id: 'esa8-p3-cloze',
          type: 'CLOZE',
          instruction: 'Reescriba en registro académico: complete con la forma adecuada.',
          wordBank: ['Se', 'consideramos', 'indican', 'Cabe'],
          caseSensitive: false,
          segments: [
            { kind: 'GAP', gapId: 'k1', solution: ['Se'], hint: 'impersonal', width: 4 },
            { kind: 'TEXT', text: ' entrevistó a treinta profesores de secundaria. Los resultados ' },
            { kind: 'GAP', gapId: 'k2', solution: ['indican', 'sugieren'], hint: 'certeza media-alta', width: 8 },
            { kind: 'TEXT', text: ' que la formación en lenguaje claro es escasa. ' },
            { kind: 'GAP', gapId: 'k3', solution: ['Cabe'], hint: 'posibilidad razonable', width: 5 },
            { kind: 'TEXT', text: ' pensar que la situación es similar en otras regiones, aunque ' },
            { kind: 'GAP', gapId: 'k4', solution: ['consideramos'], hint: 'plural de modestia', width: 13 },
            { kind: 'TEXT', text: ' necesario confirmarlo con una muestra mayor.' },
          ],
        },
        {
          id: 'esa8-p3-match',
          type: 'MATCHING',
          instruction: 'Relacione cada frase coloquial con su versión académica.',
          left: [
            { id: 'm1', text: 'Está clarísimo que funciona.' },
            { id: 'm2', text: 'Hemos visto a 40 profes.' },
            { id: 'm3', text: 'A lo mejor pasa lo mismo en Chile.' },
            { id: 'm4', text: 'Yo pienso que la teoría no vale.' },
          ],
          right: [
            { id: 'n1', text: 'Los datos indican que el método es eficaz.' },
            { id: 'n2', text: 'Se entrevistó a 40 docentes.' },
            { id: 'n3', text: 'No cabe descartar que el fenómeno se repita en Chile.' },
            { id: 'n4', text: 'A nuestro juicio, la teoría presenta limitaciones importantes.' },
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

  // ====================================================== SEITE 4
  // Seite 4 – Präzision: Allerweltsverben und Normfehler.
  {
    order: 4,
    title: 'Precisión y economía',
    subtitle: 'Genau und knapp formulieren',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'esa8-p4-h1', type: 'HEADING', level: 1, text: 'Precisión y economía' },
        {
          id: 'esa8-p4-intro',
          type: 'TEXT',
          text: 'Un evaluador lee decenas de trabajos. Lo que primero le hace desconfiar de uno no son las ideas, sino ciertos descuidos de estilo que interpreta como falta de rigor: verbos vagos, rodeos innecesarios y un pequeño número de errores normativos que se repiten, curiosamente, también entre hablantes nativos con estudios.',
        },
        {
          id: 'esa8-p4-info-verbos',
          type: 'INFO',
          variant: 'TIP',
          title: 'Sustituir los verbos comodín',
          text: '«Hacer», «tener», «poner», «dar» y «realizar» sirven para casi todo, y por eso no dicen casi nada. En un texto académico conviene sustituirlos por el verbo preciso. Lo mismo ocurre con «realizar», que muchos usan para sonar formales: «realizar un análisis» es más largo que «analizar» y no más preciso.',
          table: {
            headers: ['Impreciso', 'Preciso'],
            rows: [
              ['hacer una encuesta', 'administrar / aplicar una encuesta'],
              ['tener problemas', 'presentar deficiencias'],
              ['poner un ejemplo', 'aducir / proponer un ejemplo'],
              ['dar una explicación', 'explicar'],
              ['realizar un análisis', 'analizar'],
              ['hay una relación entre', 'X se correlaciona con Y'],
            ],
          },
        },
        {
          id: 'esa8-p4-info-errores',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Tres errores que delatan',
          text: 'El gerundio de posterioridad expresa algo que ocurre después del verbo principal, y la norma lo rechaza: «Se publicó en 2010, siendo traducido en 2015» → «Se publicó en 2010 y se tradujo en 2015». El dequeísmo añade un «de» que no corresponde: «pienso de que» → «pienso que». El queísmo lo suprime donde sí corresponde: «me acuerdo que» → «me acuerdo de que». Una prueba sencilla: sustituya la subordinada por «eso». Si se dice «me acuerdo de eso», hace falta «de que»; si se dice «pienso eso», basta «que».',
          table: {
            headers: ['Error', 'Incorrecto', 'Correcto'],
            rows: [
              ['gerundio de posterioridad', 'Terminó la tesis, defendiéndola al año siguiente.', 'Terminó la tesis y la defendió al año siguiente.'],
              ['dequeísmo', 'Considero de que el método es válido.', 'Considero que el método es válido.'],
              ['queísmo', 'Estoy seguro que el método es válido.', 'Estoy seguro de que el método es válido.'],
            ],
          },
        },
        {
          id: 'esa8-p4-choice',
          type: 'CHOICE',
          instruction: 'Marque todas las frases correctas según la norma.',
          question: '¿Cuáles de estas frases son correctas?',
          options: [
            { id: 'e1', text: 'Los autores advierten de que la muestra es pequeña.' },
            { id: 'e2', text: 'Los autores opinan de que la muestra es pequeña.' },
            { id: 'e3', text: 'El libro apareció en 1998, siendo reeditado en 2005.' },
            { id: 'e4', text: 'Nos dimos cuenta de que faltaban datos.' },
            { id: 'e5', text: 'No cabe duda que el efecto es real.' },
          ],
          multiple: true,
          solution: ['e1', 'e4'],
          explanation:
            '«Advertir de que» (avisar) y «darse cuenta de que» rigen «de». «Opinar de que» es dequeísmo; «no cabe duda que» es queísmo (no cabe duda de eso); y «siendo reeditado» es un gerundio de posterioridad.',
        },
        {
          id: 'esa8-p4-cloze',
          type: 'CLOZE',
          instruction: 'Sustituya el verbo comodín por el verbo preciso.',
          wordBank: ['analizamos', 'presenta', 'aplicó', 'se correlaciona'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'En este capítulo ' },
            { kind: 'GAP', gapId: 'p1', solution: ['analizamos'], hint: 'realizamos un análisis de', width: 11 },
            { kind: 'TEXT', text: ' los datos. El cuestionario, que se ' },
            { kind: 'GAP', gapId: 'p2', solution: ['aplicó', 'aplico', 'administró', 'administro'], hint: 'hizo', width: 8 },
            { kind: 'TEXT', text: ' a 200 estudiantes, ' },
            { kind: 'GAP', gapId: 'p3', solution: ['presenta'], hint: 'tiene', width: 9 },
            { kind: 'TEXT', text: ' algunas limitaciones. La edad ' },
            { kind: 'GAP', gapId: 'p4', solution: ['se correlaciona'], hint: 'tiene relación', width: 16 },
            { kind: 'TEXT', text: ' con el uso de anglicismos.' },
          ],
        },
        {
          id: 'esa8-p4-match',
          type: 'MATCHING',
          instruction: 'Relacione cada frase con el error que contiene.',
          left: [
            { id: 'x1', text: 'Me alegro que hayas venido.' },
            { id: 'x2', text: 'Creo de que tienes razón.' },
            { id: 'x3', text: 'Se fundó en 1950, cerrando en 1980.' },
            { id: 'x4', text: 'Se procedió a realizar la realización de las entrevistas.' },
          ],
          right: [
            { id: 'y1', text: 'queísmo' },
            { id: 'y2', text: 'dequeísmo' },
            { id: 'y3', text: 'gerundio de posterioridad' },
            { id: 'y4', text: 'redundancia y verbo comodín' },
          ],
          solution: [
            { leftId: 'x1', rightId: 'y1' },
            { leftId: 'x2', rightId: 'y2' },
            { leftId: 'x3', rightId: 'y3' },
            { leftId: 'x4', rightId: 'y4' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – der akademische Absatz und ein eigenes Abstract.
  {
    order: 5,
    title: 'El párrafo académico',
    subtitle: 'Absätze bauen und das Kapitel wiederholen',
    estimatedMinutes: 34,
    content: {
      version: v,
      blocks: [
        { id: 'esa8-p5-h1', type: 'HEADING', level: 1, text: 'El párrafo académico' },
        {
          id: 'esa8-p5-intro',
          type: 'TEXT',
          text: 'El párrafo es la unidad del pensamiento académico: una idea, desarrollada y cerrada. Suele empezar con una oración temática que anuncia esa idea, sigue con el desarrollo —datos, ejemplos, citas, matices— y termina con una frase que la cierra o prepara la siguiente. Un párrafo que contiene dos ideas debería ser dos párrafos; uno de una sola frase, probablemente no es un párrafo.',
        },
        {
          id: 'esa8-p5-ordering',
          type: 'ORDERING',
          instruction: 'Ordene las oraciones para formar un párrafo académico.',
          items: [
            { id: 'o1', text: 'El voseo ha ganado presencia en la publicidad uruguaya durante la última década.' },
            { id: 'o2', text: 'En el corpus analizado, su frecuencia pasó del 55 % de los anuncios en 2013 al 81 % en 2023.' },
            { id: 'o3', text: 'Este aumento se concentra en los productos dirigidos a menores de treinta años, como señala también Morales (2019).' },
            { id: 'o4', text: 'Cabe interpretar, por tanto, el voseo publicitario como una estrategia de cercanía generacional más que regional.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4'],
        },
        {
          id: 'esa8-p5-info-conectores',
          type: 'INFO',
          variant: 'TIP',
          title: 'Conectores del registro académico',
          text: 'Los conectores de uso general —además, pero, por eso— son correctos, pero el registro académico dispone de variantes que aportan precisión y evitan la repetición.',
          table: {
            headers: ['Función', 'General', 'Académico'],
            rows: [
              ['añadir', 'además', 'asimismo, a ello se suma'],
              ['oponer', 'pero', 'no obstante, sin embargo'],
              ['concluir', 'por eso', 'por consiguiente, de ahí que + subj.'],
              ['ejemplificar', 'por ejemplo', 'a modo de ilustración, así'],
              ['reformular', 'o sea', 'es decir, esto es'],
            ],
          },
        },
        {
          id: 'esa8-p5-cloze',
          type: 'CLOZE',
          instruction: 'Complete el resumen del capítulo.',
          wordBank: ['pretérito', 'pretende', 'modestia', 'dequeísmo', 'posterioridad', 'temática'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'La metodología y los resultados se redactan en ' },
            { kind: 'GAP', gapId: 'z1', solution: ['pretérito', 'preterito'], width: 10 },
            { kind: 'TEXT', text: '. Quien escribe «X ' },
            { kind: 'GAP', gapId: 'z2', solution: ['pretende'], width: 9 },
            { kind: 'TEXT', text: ' que…» marca distancia. «Consideramos» es un plural de ' },
            { kind: 'GAP', gapId: 'z3', solution: ['modestia'], width: 9 },
            { kind: 'TEXT', text: '. «Pienso de que» es un caso de ' },
            { kind: 'GAP', gapId: 'z4', solution: ['dequeísmo', 'dequeismo'], width: 10 },
            { kind: 'TEXT', text: ', y «se fundó en 1950, cerrando en 1980», un gerundio de ' },
            { kind: 'GAP', gapId: 'z5', solution: ['posterioridad'], width: 14 },
            { kind: 'TEXT', text: '. Cada párrafo empieza con una oración ' },
            { kind: 'GAP', gapId: 'z6', solution: ['temática', 'tematica'], width: 9 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'esa8-p5-writing',
          type: 'WRITING',
          instruction: 'Redacte un resumen académico.',
          prompt:
            'Imagine que ha realizado un estudio: encuestó a 250 estudiantes universitarios de Madrid y Bogotá sobre el uso de anglicismos en sus conversaciones por mensajería. El 70 % de Madrid y el 64 % de Bogotá declaran usarlos a diario, sobre todo en temas de tecnología y ocio; en ambos grupos, el uso disminuye en los mensajes a familiares. Redacte el resumen del artículo (entre 150 y 220 palabras) con objetivo, método, resultados y conclusión. Use los tiempos verbales adecuados, al menos un recurso de distancia y una formulación atenuada.',
          minWords: 150,
          maxWords: 230,
          aiFeedback: true,
          sampleAnswer:
            'El presente estudio examina la frecuencia y los contextos de uso de los anglicismos en la comunicación escrita informal de estudiantes universitarios hispanohablantes, con el fin de determinar si existen diferencias entre dos variedades del español.\n\nPara ello, se aplicó un cuestionario a 250 estudiantes de grado de Madrid y Bogotá, en el que se les preguntó por el uso de anglicismos en sus conversaciones por mensajería, los temas en que aparecían y los destinatarios de los mensajes.\n\nEl 70 % de los encuestados de Madrid y el 64 % de los de Bogotá declararon utilizar anglicismos a diario. En ambos grupos, su uso se concentró en los ámbitos de la tecnología y el ocio, y disminuyó de forma notable en los mensajes dirigidos a familiares.\n\nLos resultados indican que la diferencia entre ambas ciudades es escasa y que el factor determinante no es la variedad, sino el destinatario del mensaje. Cabe pensar, por consiguiente, que el anglicismo funciona en este grupo de edad como marca de registro informal entre iguales más que como rasgo dialectal. Consideramos necesario, no obstante, contrastar los datos declarados con el análisis de un corpus real de mensajes.',
        },
      ],
    },
  },
];
