import type { UnitSeed } from './chapter-beginner-1';

/**
 * Spanisch, Advanced, Kapitel 12: „Divulgación“
 *
 * Fünf Seiten. Das letzte Kapitel des Lehrwerks verlangt, was am Ende des
 * Lernwegs steht: Man beherrscht die Fachsprache gut genug, um sie
 * wegzulassen. Allgemeinverständlich schreiben heißt nicht vereinfachen,
 * bis es falsch wird, sondern auswählen, was trägt.
 *
 * Aufbau: Seite 1 das Publikum und seine Voraussetzungen, Seite 2 Analogien
 * und ihre Grenzen, Seite 3 Fachbegriffe erklären, ohne den Fluss zu
 * brechen, Seite 4 Zahlen und Unsicherheit für Laien, Seite 5 das
 * Zusammenfassen des Komplexen – und damit ein Rückblick auf das ganze
 * Buch.
 *
 * Die wissenschaftlichen Sachverhalte sind vereinfacht, aber korrekt
 * wiedergegeben. Sämtliche Texte sind eigenständig verfasst.
 */
const v = 1;

export const SPANISH_ADVANCED_12_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – für wen schreibe ich?
  {
    order: 1,
    title: 'Para quién escribo',
    subtitle: 'Das Publikum kennen',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'esa12-p1-h1', type: 'HEADING', level: 1, text: 'Para quién escribo' },
        {
          id: 'esa12-p1-intro',
          type: 'TEXT',
          text: 'El error más frecuente de quien divulga no es usar palabras difíciles, sino olvidar lo que el lector no sabe. Un especialista lleva años sin recordar qué era no saber lo que hoy da por evidente, y escribe para un lector que no existe: uno que conoce todo lo que él conoce, menos lo que va a contarle. Divulgar empieza por reconstruir a ese lector real.',
        },
        {
          id: 'esa12-p1-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: divulgar',
          items: [
            { term: 'la divulgación', translations: { en: 'popularisation, outreach', de: 'die Wissensvermittlung, Popularisierung' } },
            { term: 'el lector lego', translations: { en: 'lay reader', de: 'der Laie, die Laiin' } },
            { term: 'el tecnicismo', translations: { en: 'technical term', de: 'der Fachausdruck' } },
            { term: 'la analogía', translations: { en: 'analogy', de: 'die Analogie' } },
            { term: 'simplificar', translations: { en: 'to simplify', de: 'vereinfachen' } },
            { term: 'trivializar', translations: { en: 'to trivialise', de: 'verharmlosen, banalisieren' } },
            { term: 'el rigor', translations: { en: 'rigour', de: 'die Genauigkeit, Strenge' } },
            { term: 'la maldición del conocimiento', translations: { en: 'curse of knowledge', de: 'der Fluch des Wissens' } },
            { term: 'el gancho', translations: { en: 'hook', de: 'der Aufhänger' } },
            { term: 'accesible', translations: { en: 'accessible', de: 'zugänglich, verständlich' } },
          ],
        },
        {
          id: 'esa12-p1-info-simplificar',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Simplificar no es trivializar',
          text: 'Simplificar es quitar detalles sin cambiar la verdad de lo que queda: «las vacunas enseñan al sistema inmunitario a reconocer un patógeno» deja fuera casi todo, pero no dice nada falso. Trivializar es quitar lo que hacía verdadera la afirmación: «las vacunas te hacen inmune» ignora que la protección es parcial y temporal. El límite no está en la cantidad de detalle, sino en si el lector se lleva una idea correcta.',
          table: {
            headers: ['Enunciado', 'Valoración'],
            rows: [
              ['El ADN contiene las instrucciones para fabricar las proteínas.', 'simplificación correcta'],
              ['El ADN decide todo lo que somos.', 'trivialización: omite el ambiente'],
              ['Un agujero negro atrae tanto que ni la luz escapa si se acerca demasiado.', 'simplificación correcta'],
              ['Un agujero negro se lo traga todo.', 'trivialización: no absorbe lo que está lejos'],
            ],
          },
        },
        {
          id: 'esa12-p1-choice',
          type: 'CHOICE',
          instruction: 'Elija la simplificación correcta.',
          question: '¿Qué frase explica el efecto invernadero sin falsearlo?',
          options: [
            { id: 'c1', text: 'El CO₂ forma una capa que tapa la Tierra como un techo de cristal.' },
            {
              id: 'c2',
              text: 'Algunos gases de la atmósfera dejan pasar la luz del sol, pero retienen parte del calor que la Tierra devuelve; cuantos más gases, más calor retenido.',
            },
            { id: 'c3', text: 'El efecto invernadero es malo y lo causa la contaminación.' },
            { id: 'c4', text: 'El sol calienta más ahora porque la capa de ozono tiene un agujero.' },
          ],
          multiple: false,
          solution: ['c2'],
          explanation:
            'La segunda opción omite la física de la radiación, pero conserva el mecanismo. La primera sugiere una capa sólida; la tercera ignora que sin efecto invernadero la Tierra sería inhabitable; la cuarta confunde dos fenómenos distintos.',
        },
        {
          id: 'esa12-p1-match',
          type: 'MATCHING',
          instruction: 'Relacione cada destinatario con lo que puede darse por sabido.',
          left: [
            { id: 'a1', text: 'estudiantes de medicina de tercer año' },
            { id: 'a2', text: 'lectores de un periódico generalista' },
            { id: 'a3', text: 'niños de diez años en un museo' },
            { id: 'a4', text: 'periodistas científicos' },
          ],
          right: [
            { id: 'b1', text: 'qué es una célula y cómo funciona un anticuerpo' },
            { id: 'b2', text: 'qué es un virus, pero no cómo se replica' },
            { id: 'b3', text: 'que hay seres vivos tan pequeños que no se ven' },
            { id: 'b4', text: 'cómo se lee un estudio y qué es un ensayo clínico' },
          ],
          solution: [
            { leftId: 'a1', rightId: 'b1' },
            { leftId: 'a2', rightId: 'b2' },
            { leftId: 'a3', rightId: 'b3' },
            { leftId: 'a4', rightId: 'b4' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – Analogien und ihre Grenzen.
  {
    order: 2,
    title: 'Analogías que funcionan',
    subtitle: 'Vergleiche wählen und begrenzen',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'esa12-p2-h1', type: 'HEADING', level: 1, text: 'Analogías que funcionan' },
        {
          id: 'esa12-p2-intro',
          type: 'TEXT',
          text: 'La analogía es la herramienta más poderosa de la divulgación y la más peligrosa. Explica lo desconocido a través de lo conocido: el corazón es una bomba, el ADN es un libro de instrucciones, internet es una red de carreteras. Funciona porque traslada una estructura entera de golpe. Falla cuando el lector traslada también lo que no debía.',
        },
        {
          id: 'esa12-p2-info-formulas',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Fórmulas para introducir una analogía',
          text: 'Las fórmulas varían en la fuerza con que identifican los dos términos. «Es como» y «funciona como» son las más neutras. «Imagine que…» invita al lector a construir la escena, y exige subjuntivo o indicativo según el grado de hipótesis. «Del mismo modo que…, …» establece un paralelismo explícito. «Si X fuera Y, …» presenta la analogía como hipótesis y lleva imperfecto de subjuntivo y condicional.',
          table: {
            headers: ['Fórmula', 'Ejemplo'],
            rows: [
              ['funciona como', 'La memoria RAM funciona como una mesa de trabajo.'],
              ['imagine que', 'Imagine que cada célula es una pequeña fábrica.'],
              ['del mismo modo que', 'Del mismo modo que un cerrojo solo admite su llave, cada receptor reconoce una molécula.'],
              ['si X fuera Y', 'Si la Tierra fuera una manzana, la atmósfera sería más fina que su piel.'],
              ['a escala', 'A escala, si el átomo fuera un estadio, el núcleo sería un guisante.'],
            ],
          },
        },
        {
          id: 'esa12-p2-cloze',
          type: 'CLOZE',
          instruction: 'Complete las analogías con la forma verbal adecuada.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Si la historia de la Tierra ' },
            { kind: 'GAP', gapId: 'k1', solution: ['durara', 'durase'], hint: 'durar', width: 7 },
            { kind: 'TEXT', text: ' un año, los seres humanos ' },
            { kind: 'GAP', gapId: 'k2', solution: ['aparecerían'], hint: 'aparecer', width: 11 },
            { kind: 'TEXT', text: ' el 31 de diciembre, poco antes de la medianoche. Imagine que ' },
            { kind: 'GAP', gapId: 'k3', solution: ['tiene'], hint: 'tener', width: 6 },
            { kind: 'TEXT', text: ' en la mano un grano de arena: cabrían en él miles de millones de bacterias.' },
          ],
        },
        {
          id: 'esa12-p2-info-limites',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Marcar dónde termina la analogía',
          text: 'Toda analogía se rompe en algún punto, y el divulgador responsable lo indica. El ADN se parece a un libro de instrucciones, pero un libro no se lee distinto según el ambiente; los genes, en cierto modo, sí. Basta una frase: «La comparación tiene un límite: …», «A diferencia de un libro, …», «Aquí la analogía deja de servir, porque…».',
        },
        {
          id: 'esa12-p2-choice',
          type: 'CHOICE',
          instruction: 'Elija la respuesta correcta.',
          question: 'Un divulgador compara el sistema inmunitario con un ejército que defiende un país. ¿Qué idea errónea puede transmitir la analogía si no se matiza?',
          options: [
            { id: 'q1', text: 'Que el sistema inmunitario protege al cuerpo.' },
            { id: 'q2', text: 'Que el sistema inmunitario distingue lo propio de lo ajeno.' },
            {
              id: 'q3',
              text: 'Que su única función es atacar, cuando también tolera, regula y convive con miles de microorganismos útiles.',
            },
            { id: 'q4', text: 'Que el sistema inmunitario está formado por distintos tipos de células.' },
          ],
          multiple: false,
          solution: ['q3'],
          explanation:
            'La analogía militar transmite bien la defensa, pero sugiere que todo lo extraño es un enemigo. El sistema inmunitario tolera la flora intestinal y regula su propia respuesta; un exceso de «guerra» es precisamente lo que ocurre en las alergias.',
        },
        {
          id: 'esa12-p2-match',
          type: 'MATCHING',
          instruction: 'Relacione cada concepto con la analogía más adecuada.',
          left: [
            { id: 'm1', text: 'la memoria RAM de un ordenador' },
            { id: 'm2', text: 'un receptor celular y su molécula' },
            { id: 'm3', text: 'la expansión del universo' },
            { id: 'm4', text: 'la resistencia a los antibióticos' },
          ],
          right: [
            { id: 'n1', text: 'una mesa de trabajo: cuanto más grande, más cosas a la vez' },
            { id: 'n2', text: 'una cerradura que solo abre su llave' },
            { id: 'n3', text: 'un bizcocho con pasas que crece en el horno: todas se alejan de todas' },
            { id: 'n4', text: 'un insecticida que deja vivos solo a los insectos más resistentes' },
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
  // Seite 3 – Fachbegriffe erklären, ohne den Fluss zu brechen.
  {
    order: 3,
    title: 'Traducir tecnicismos',
    subtitle: 'Fachbegriffe im Satz erklären',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'esa12-p3-h1', type: 'HEADING', level: 1, text: 'Traducir tecnicismos' },
        {
          id: 'esa12-p3-intro',
          type: 'TEXT',
          text: 'Divulgar no significa eliminar todos los tecnicismos. Algunos son necesarios, porque el lector los va a encontrar después en las noticias, y otros no tienen equivalente cotidiano. La cuestión es cómo introducirlos: sin interrumpir la lectura con definiciones de diccionario y sin dejar al lector a oscuras.',
        },
        {
          id: 'esa12-p3-info-tecnicas',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Cuatro maneras de integrar un término',
          text: 'La aposición explica el término entre comas o rayas, sin cortar la frase. El reformulador lo traduce después («es decir», «o sea», «esto es»). La definición funcional explica para qué sirve en vez de qué es. Y la inversión presenta primero la idea y después el nombre técnico: «lo que se conoce como…», «lo que los especialistas llaman…». Esta última es la más elegante, porque el lector recibe el término cuando ya entiende a qué se refiere.',
          table: {
            headers: ['Técnica', 'Ejemplo'],
            rows: [
              ['aposición', 'Las mitocondrias, las centrales energéticas de la célula, producen…'],
              ['reformulador', 'El paciente sufría hipoxia, es decir, falta de oxígeno en los tejidos.'],
              ['definición funcional', 'La insulina sirve para que el azúcar de la sangre entre en las células.'],
              ['inversión', 'Algunas bacterias sobreviven a los antibióticos, lo que se conoce como resistencia antimicrobiana.'],
            ],
          },
        },
        {
          id: 'esa12-p3-match',
          type: 'MATCHING',
          instruction: 'Relacione cada frase con la técnica que usa.',
          left: [
            { id: 'a1', text: 'Los glaciares pierden más hielo del que ganan, un proceso que los geólogos llaman balance negativo.' },
            { id: 'a2', text: 'La placenta, el órgano que conecta a la madre con el feto, se forma durante el embarazo.' },
            { id: 'a3', text: 'El fármaco es un anticoagulante, esto es, impide que la sangre forme coágulos.' },
            { id: 'a4', text: 'Los estomas sirven para que la planta intercambie gases con el aire.' },
          ],
          right: [
            { id: 'b1', text: 'inversión' },
            { id: 'b2', text: 'aposición' },
            { id: 'b3', text: 'reformulador' },
            { id: 'b4', text: 'definición funcional' },
          ],
          solution: [
            { leftId: 'a1', rightId: 'b1' },
            { leftId: 'a2', rightId: 'b2' },
            { leftId: 'a3', rightId: 'b3' },
            { leftId: 'a4', rightId: 'b4' },
          ],
        },
        {
          id: 'esa12-p3-choice',
          type: 'CHOICE',
          instruction: 'Elija la versión más divulgativa.',
          question: '¿Qué versión introduce mejor el término «epigenética» para un lector de periódico?',
          options: [
            { id: 'e1', text: 'La epigenética estudia las modificaciones heredables de la expresión génica que no implican cambios en la secuencia del ADN.' },
            {
              id: 'e2',
              text: 'Dos gemelos tienen el mismo ADN, pero con los años sus genes se «encienden» y «apagan» de forma distinta según su vida. A ese fenómeno se dedica la epigenética.',
            },
            { id: 'e3', text: 'La epigenética es muy importante y está de moda.' },
            { id: 'e4', text: 'La epigenética (del griego epi-, «sobre», y genética) es una disciplina de la biología molecular.' },
          ],
          multiple: false,
          solution: ['e2'],
          explanation:
            'La segunda versión presenta primero un caso concreto y comprensible, y solo entonces da el nombre técnico: es la técnica de la inversión. La primera es una definición correcta, pero para especialistas; la cuarta explica la palabra, no el fenómeno.',
        },
        {
          id: 'esa12-p3-cloze',
          type: 'CLOZE',
          instruction: 'Complete con el elemento que integra el tecnicismo.',
          wordBank: ['es decir', 'lo que se conoce como', 'sirve para', 'el'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'El hígado filtra la sangre; ' },
            { kind: 'GAP', gapId: 't1', solution: ['es decir', 'esto es', 'o sea'], width: 9 },
            { kind: 'TEXT', text: ', retira de ella las sustancias tóxicas. La bilis ' },
            { kind: 'GAP', gapId: 't2', solution: ['sirve para'], width: 11 },
            { kind: 'TEXT', text: ' digerir las grasas. Cuando el hígado deja de funcionar, se produce ' },
            { kind: 'GAP', gapId: 't3', solution: ['lo que se conoce como'], width: 21 },
            { kind: 'TEXT', text: ' insuficiencia hepática. El páncreas, ' },
            { kind: 'GAP', gapId: 't4', solution: ['el'], width: 4 },
            { kind: 'TEXT', text: ' órgano que produce la insulina, está justo detrás del estómago.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – Zahlen und Unsicherheit für Laien.
  {
    order: 4,
    title: 'Números para personas',
    subtitle: 'Größenordnungen und Unsicherheit vermitteln',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'esa12-p4-h1', type: 'HEADING', level: 1, text: 'Números para personas' },
        {
          id: 'esa12-p4-intro',
          type: 'TEXT',
          text: 'Nadie tiene intuición de lo que son 150.000 millones de litros de agua o una probabilidad de 0,0003. Las cifras muy grandes y muy pequeñas se perciben igual: como «mucho» o «muy poco». La divulgación traduce las magnitudes a escalas humanas y, cuando hay incertidumbre, la comunica sin asustar ni tranquilizar de más.',
        },
        {
          id: 'esa12-p4-info-escalas',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Traducir magnitudes',
          text: 'Hay tres estrategias. La comparación con una unidad familiar: «el volumen de 60.000 piscinas olímpicas». La reducción a una persona o a un día: «cada español tira al año unos 30 kilos de comida». Y la frecuencia natural en lugar del porcentaje: «1 de cada 1.000» se entiende mejor que «0,1 %», y «3 de cada 10.000» mucho mejor que «0,03 %».',
          table: {
            headers: ['Cifra original', 'Traducción'],
            rows: [
              ['150.000 millones de litros', 'unas 60.000 piscinas olímpicas'],
              ['1.300 millones de toneladas de comida desperdiciada al año', 'unos 160 kilos por habitante del planeta'],
              ['riesgo del 0,03 %', '3 de cada 10.000 personas'],
              ['aumento del riesgo del 50 %', 'de 2 casos por cada 1.000 a 3 casos por cada 1.000'],
            ],
          },
        },
        {
          id: 'esa12-p4-choice',
          type: 'CHOICE',
          instruction: 'Elija la comunicación más honesta.',
          question: 'Un estudio muestra que un medicamento eleva el riesgo de trombosis de 2 a 3 casos por cada 10.000 mujeres. ¿Qué titular informa mejor?',
          options: [
            { id: 'r1', text: 'Un fármaco dispara un 50 % el riesgo de trombosis.' },
            { id: 'r2', text: 'El fármaco es totalmente seguro.' },
            {
              id: 'r3',
              text: 'El fármaco eleva el riesgo de trombosis: de 2 a 3 casos por cada 10.000 mujeres que lo toman.',
            },
            { id: 'r4', text: 'El riesgo de trombosis aumenta en 0,0001 puntos.' },
          ],
          multiple: false,
          solution: ['r3'],
          explanation:
            'El «50 %» es un riesgo relativo: exacto, pero alarmante sin el dato de partida. «Totalmente seguro» niega un riesgo real. La tercera opción da el riesgo absoluto en frecuencias naturales, que es lo que el lector necesita para decidir.',
        },
        {
          id: 'esa12-p4-info-incertidumbre',
          type: 'INFO',
          variant: 'TIP',
          title: 'Comunicar la incertidumbre',
          text: 'La ciencia casi nunca ofrece certezas, y el público lo sabe. Ocultar la incertidumbre destruye la confianza cuando los datos cambian; exagerarla paraliza. Lo razonable es nombrar qué se sabe con seguridad, qué es probable y qué se desconoce, y explicar qué haría cambiar la conclusión.',
          table: {
            headers: ['Grado', 'Fórmula divulgativa'],
            rows: [
              ['consenso firme', 'Hoy sabemos con seguridad que…'],
              ['muy probable', 'Todo apunta a que… / Es muy probable que…'],
              ['en estudio', 'Los primeros datos sugieren que…, aunque falta confirmarlo.'],
              ['desconocido', 'Todavía no sabemos si…'],
            ],
          },
        },
        {
          id: 'esa12-p4-cloze',
          type: 'CLOZE',
          instruction: 'Complete el texto divulgativo.',
          wordBank: ['de cada', 'sabemos', 'sugieren', 'todavía', 'piscinas'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Hoy ' },
            { kind: 'GAP', gapId: 'u1', solution: ['sabemos'], width: 8 },
            { kind: 'TEXT', text: ' con seguridad que el embalse ha perdido la mitad de su agua: el volumen de unas cuarenta mil ' },
            { kind: 'GAP', gapId: 'u2', solution: ['piscinas'], width: 9 },
            { kind: 'TEXT', text: ' olímpicas. Los primeros datos ' },
            { kind: 'GAP', gapId: 'u3', solution: ['sugieren'], width: 9 },
            { kind: 'TEXT', text: ' que la causa principal es la sequía, aunque ' },
            { kind: 'GAP', gapId: 'u4', solution: ['todavía', 'todavia'], width: 8 },
            { kind: 'TEXT', text: ' no sabemos cuánto influye el riego ilegal. Hoy, uno ' },
            { kind: 'GAP', gapId: 'u5', solution: ['de cada'], width: 8 },
            { kind: 'TEXT', text: ' tres pueblos de la comarca tiene restricciones.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – Komplexes zusammenfassen; Abschluss des Lehrwerks.
  {
    order: 5,
    title: 'Resumir lo complejo',
    subtitle: 'Weglassen, was nicht trägt',
    estimatedMinutes: 36,
    content: {
      version: v,
      blocks: [
        { id: 'esa12-p5-h1', type: 'HEADING', level: 1, text: 'Resumir lo complejo' },
        {
          id: 'esa12-p5-intro',
          type: 'TEXT',
          text: 'Un buen texto divulgativo no es un resumen proporcional del conocimiento, en el que cada apartado ocupa lo que le corresponde. Es una selección: una idea central, las dos o tres que la sostienen y nada más. Lo que se deja fuera no se pierde; queda para otro texto. La prueba final es sencilla: si al terminar el lector puede explicarle la idea a otra persona, el texto ha cumplido.',
        },
        {
          id: 'esa12-p5-info-estructura',
          type: 'INFO',
          variant: 'TIP',
          title: 'La estructura de un texto divulgativo',
          text: 'La mayoría de los buenos textos divulgativos siguen un mismo arco. Empiezan con un gancho que conecta con la experiencia del lector; plantean una pregunta; explican el mecanismo con una analogía; dan un dato que lo concreta; indican un límite o una incertidumbre; y cierran volviendo a la experiencia del principio, ahora vista de otra manera.',
          table: {
            headers: ['Paso', 'Ejemplo (el sueño)'],
            rows: [
              ['gancho', '¿Por qué después de una mala noche olvidamos dónde dejamos las llaves?'],
              ['pregunta', '¿Qué hace el cerebro mientras dormimos?'],
              ['mecanismo y analogía', 'Mientras dormimos, el cerebro archiva lo aprendido, como quien ordena los papeles del día.'],
              ['dato', 'Quien duerme menos de seis horas recuerda peor lo aprendido el día anterior.'],
              ['límite', 'Aún no se sabe del todo cómo decide el cerebro qué conservar.'],
              ['cierre', 'Así que la próxima vez que pierda las llaves, quizá no le falte memoria, sino sueño.'],
            ],
          },
        },
        {
          id: 'esa12-p5-ordering',
          type: 'ORDERING',
          instruction: 'Ordene las frases para formar un texto divulgativo breve.',
          items: [
            { id: 'o1', text: '¿Alguna vez se ha preguntado por qué el mar es salado y los ríos no?' },
            { id: 'o2', text: 'La lluvia disuelve pequeñas cantidades de sales de las rocas y los ríos las llevan al mar.' },
            { id: 'o3', text: 'Allí el agua se evapora, pero la sal se queda, como el poso en una taza de café.' },
            { id: 'o4', text: 'Después de millones de años, cada litro de agua de mar contiene unos 35 gramos de sal.' },
            { id: 'o5', text: 'Así que el agua del río que bebe hoy lleva sal, solo que tan poca que no la nota.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5'],
        },
        {
          id: 'esa12-p5-choice',
          type: 'CHOICE',
          instruction: 'Marque todas las afirmaciones que resumen correctamente el capítulo.',
          question: '¿Cuáles de estas afirmaciones se sostienen tras lo visto?',
          options: [
            { id: 'y1', text: 'Simplificar es aceptable siempre que el lector se lleve una idea correcta.' },
            { id: 'y2', text: 'Una buena analogía no necesita que se indiquen sus límites.' },
            { id: 'y3', text: '«3 de cada 10.000» se entiende mejor que «0,03 %».' },
            { id: 'y4', text: 'Presentar primero la idea y después el tecnicismo facilita la comprensión.' },
            { id: 'y5', text: 'Un texto divulgativo debe resumir proporcionalmente todo lo que se sabe sobre el tema.' },
          ],
          multiple: true,
          solution: ['y1', 'y3', 'y4'],
          explanation:
            'Toda analogía se rompe en algún punto, y señalarlo evita ideas erróneas. Y un texto divulgativo selecciona: una idea central bien explicada vale más que un resumen proporcional que nadie retiene.',
        },
        {
          id: 'esa12-p5-cloze',
          type: 'CLOZE',
          instruction: 'Complete el resumen del capítulo.',
          wordBank: ['trivializar', 'analogía', 'inversión', 'frecuencias', 'incertidumbre', 'gancho'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Simplificar no es ' },
            { kind: 'GAP', gapId: 'z1', solution: ['trivializar'], width: 12 },
            { kind: 'TEXT', text: '. Toda ' },
            { kind: 'GAP', gapId: 'z2', solution: ['analogía', 'analogia'], width: 9 },
            { kind: 'TEXT', text: ' tiene un límite que conviene señalar. Presentar la idea antes del término es la técnica de la ' },
            { kind: 'GAP', gapId: 'z3', solution: ['inversión', 'inversion'], width: 10 },
            { kind: 'TEXT', text: '. Las ' },
            { kind: 'GAP', gapId: 'z4', solution: ['frecuencias'], width: 12 },
            { kind: 'TEXT', text: ' naturales se entienden mejor que los porcentajes. La ' },
            { kind: 'GAP', gapId: 'z5', solution: ['incertidumbre'], width: 14 },
            { kind: 'TEXT', text: ' se comunica, no se esconde. Y un buen texto empieza con un ' },
            { kind: 'GAP', gapId: 'z6', solution: ['gancho'], width: 7 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'esa12-p5-writing',
          type: 'WRITING',
          instruction: 'Escriba un texto divulgativo.',
          prompt:
            'Elija un tema que conozca bien —de su profesión, sus estudios o sus aficiones— y escriba un texto divulgativo de entre 200 y 280 palabras para la sección de ciencia de un periódico generalista. Siga el arco de esta página: gancho, pregunta, mecanismo con una analogía (y su límite), un dato traducido a escala humana, una incertidumbre y un cierre que vuelva al principio. Integre al menos un tecnicismo con una de las técnicas de la página 3.',
          minWords: 200,
          maxWords: 290,
          aiFeedback: true,
          sampleAnswer:
            '¿Por qué el pan de ayer está duro?\n\nTodos lo hemos comprobado: la barra que ayer crujía por fuera y era tierna por dentro, hoy parece de cartón. Lo curioso es que no se ha secado, o no solo. Si la envolvemos en plástico, se endurece igual.\n\n¿Qué le ha pasado entonces a la miga?\n\nLa culpa es del almidón, la sustancia que forma la mayor parte de la harina. En el horno, el calor y el agua deshacen sus moléculas, que quedan desordenadas y blandas, como un ovillo de lana recién deshecho. Al enfriarse, esas moléculas vuelven poco a poco a ordenarse en estructuras rígidas y expulsan parte del agua. Es lo que los especialistas llaman retrogradación del almidón. La comparación del ovillo tiene un límite: la lana no expulsa agua al enrollarse, y el almidón sí, por eso la corteza se ablanda mientras la miga se endurece.\n\nEl proceso es rápido: en un día a temperatura ambiente, el pan pierde buena parte de su textura, y en la nevera ocurre hasta tres veces más deprisa, porque el frío favorece el reordenamiento. Por eso el pan nunca debería guardarse en la nevera; en el congelador, en cambio, el proceso casi se detiene.\n\nLos científicos de los alimentos todavía estudian cómo frenar la retrogradación sin aditivos, y algunas harinas integrales parecen resistir mejor, aunque falta confirmarlo.\n\nMientras tanto, hay un truco: unos minutos en el horno caliente deshacen de nuevo el orden. Así que el pan de ayer no está muerto. Solo se ha vuelto a ordenar.',
        },
      ],
    },
  },
];
