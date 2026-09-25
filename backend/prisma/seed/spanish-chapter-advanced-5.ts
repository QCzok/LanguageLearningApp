import type { UnitSeed } from './chapter-beginner-1';

/**
 * Spanisch, Advanced, Kapitel 5: „Economía y desarrollo“
 *
 * Fünf Seiten. Wirtschaftstexte sind dicht, weil sie nominal gebaut sind:
 * „la caída del consumo derivada del encarecimiento de la energía“ enthält
 * drei Verben, die zu Substantiven geworden sind. Das Kapitel lehrt, diesen
 * Stil zu lesen, ihn selbst zu schreiben, wenn er nützt, und Zahlen so zu
 * versprachlichen, dass sie stimmen.
 *
 * Aufbau: Seite 1 legt den Wortschatz der Entwicklung, Seite 2 den
 * Nominalstil, Seite 3 den Umgang mit Zahlen (Prozent gegen Prozentpunkte,
 * Verben der Veränderung), Seite 4 die Darstellung von Zielkonflikten,
 * Seite 5 Informalität und die faire Gegenüberstellung von Positionen.
 *
 * Alle Zahlen sind gerundet oder erfunden und dienen nur als Übungsmaterial.
 * Sämtliche Texte sind eigenständig verfasst.
 */
const v = 1;

export const SPANISH_ADVANCED_5_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Wortschatz: Wachstum, Ungleichheit, Entwicklung.
  {
    order: 1,
    title: 'Crecer no es lo mismo que desarrollarse',
    subtitle: 'Der Wortschatz der Entwicklung',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'esa5-p1-h1', type: 'HEADING', level: 1, text: 'Crecer no es lo mismo que desarrollarse' },
        {
          id: 'esa5-p1-intro',
          type: 'TEXT',
          text: 'Un país puede crecer durante años sin que la vida de la mayoría cambie. Si el aumento de la producción se concentra en un sector y en pocas manos, el PIB sube y la pobreza se queda donde estaba. Por eso los economistas distinguen entre crecimiento —cuánto más se produce— y desarrollo —cuánto mejoran las condiciones de vida—. Buena parte de los debates económicos de América Latina gira en torno a esa diferencia.',
        },
        {
          id: 'esa5-p1-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: economía y desarrollo',
          items: [
            { term: 'el crecimiento', translations: { en: 'growth', de: 'das Wachstum' } },
            { term: 'el PIB (producto interior bruto)', translations: { en: 'GDP', de: 'das BIP' } },
            { term: 'la renta per cápita', translations: { en: 'per capita income', de: 'das Pro-Kopf-Einkommen' } },
            {
              term: 'la desigualdad',
              translations: { en: 'inequality', de: 'die Ungleichheit' },
              example: 'La desigualdad se mide a menudo con el índice de Gini.',
            },
            { term: 'la brecha', translations: { en: 'gap', de: 'die Kluft, die Lücke' }, example: 'la brecha salarial' },
            { term: 'la materia prima', translations: { en: 'raw material, commodity', de: 'der Rohstoff' } },
            { term: 'el empleo informal', translations: { en: 'informal employment', de: 'die informelle Beschäftigung' } },
            { term: 'la deuda pública', translations: { en: 'public debt', de: 'die Staatsverschuldung' } },
            { term: 'la inversión', translations: { en: 'investment', de: 'die Investition' } },
            { term: 'la sostenibilidad', translations: { en: 'sustainability', de: 'die Nachhaltigkeit' } },
            {
              term: 'el tejido productivo',
              translations: { en: 'industrial base', de: 'die Wirtschaftsstruktur' },
            },
            { term: 'la cohesión social', translations: { en: 'social cohesion', de: 'der gesellschaftliche Zusammenhalt' } },
          ],
        },
        {
          id: 'esa5-p1-info-indicadores',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Qué mide cada indicador',
          text: 'Ningún indicador lo mide todo. El PIB suma lo que se produce, pero no dice cómo se reparte. La renta per cápita divide esa suma entre la población, y oculta, por ser una media, a los que quedan muy por debajo. El índice de Gini mide la desigualdad entre 0 (todos igual) y 1 (uno lo tiene todo). El índice de desarrollo humano combina ingresos, esperanza de vida y educación.',
          table: {
            headers: ['Indicador', 'Mide', 'No mide'],
            rows: [
              ['PIB', 'la producción total', 'el reparto'],
              ['renta per cápita', 'la media por habitante', 'la dispersión en torno a la media'],
              ['índice de Gini', 'la desigualdad de ingresos', 'el nivel de vida absoluto'],
              ['IDH', 'ingresos, salud, educación', 'la sostenibilidad ambiental'],
            ],
          },
        },
        {
          id: 'esa5-p1-choice',
          type: 'CHOICE',
          instruction: 'Elija la conclusión correcta.',
          question: 'En un país, la renta per cápita ha subido un 15 % en cinco años y el índice de Gini ha pasado de 0,42 a 0,50. ¿Qué se puede afirmar?',
          options: [
            { id: 'c1', text: 'Todos los habitantes son un 15 % más ricos.' },
            { id: 'c2', text: 'El país produce más por habitante, pero la renta se reparte de forma más desigual.' },
            { id: 'c3', text: 'La desigualdad ha disminuido, porque el Gini ha subido.' },
            { id: 'c4', text: 'El país se ha desarrollado de forma equilibrada.' },
          ],
          multiple: false,
          solution: ['c2'],
          explanation:
            'Una media más alta es compatible con que muchos ganen menos. Un Gini que sube significa más desigualdad, no menos: el aumento se ha concentrado en una parte de la población.',
        },
        {
          id: 'esa5-p1-cloze',
          type: 'CLOZE',
          instruction: 'Complete el texto.',
          wordBank: ['materias primas', 'tejido productivo', 'informal', 'inversión', 'brecha'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Durante el auge de los precios del cobre y la soja, muchas economías crecieron exportando ' },
            { kind: 'GAP', gapId: 'g1', solution: ['materias primas'], width: 15 },
            { kind: 'TEXT', text: '. El problema es que ese modelo apenas diversifica el ' },
            { kind: 'GAP', gapId: 'g2', solution: ['tejido productivo'], width: 17 },
            { kind: 'TEXT', text: ': sin ' },
            { kind: 'GAP', gapId: 'g3', solution: ['inversión', 'inversion'], width: 10 },
            { kind: 'TEXT', text: ' en industria y servicios, gran parte del empleo sigue siendo ' },
            { kind: 'GAP', gapId: 'g4', solution: ['informal'], width: 9 },
            { kind: 'TEXT', text: ' y la ' },
            { kind: 'GAP', gapId: 'g5', solution: ['brecha'], width: 7 },
            { kind: 'TEXT', text: ' entre regiones se mantiene.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – der Nominalstil: lesen, bauen, dosieren.
  {
    order: 2,
    title: 'El estilo nominal',
    subtitle: 'Dichte Fügung lesen und schreiben',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'esa5-p2-h1', type: 'HEADING', level: 1, text: 'El estilo nominal' },
        {
          id: 'esa5-p2-intro',
          type: 'TEXT',
          text: '«El encarecimiento de la energía provocó una caída del consumo y un aumento de la morosidad.» La frase tiene un solo verbo, y sin embargo cuenta cuatro sucesos: la energía se encareció, el consumo cayó, la morosidad aumentó y lo primero causó lo demás. Es el estilo nominal, propio de los informes económicos. Permite condensar mucho y enlazar causas; a cambio, esconde quién hace qué.',
        },
        {
          id: 'esa5-p2-info-nominalizacion',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'De verbo a sustantivo',
          text: 'Casi todo verbo tiene un sustantivo emparentado, y los sufijos se repiten: -ción, -miento, -da, -e, -o. Al nominalizar, el sujeto del verbo pasa a ser un complemento con «de»: «los precios suben» → «la subida de los precios». Quien actúa suele desaparecer: «el Gobierno reduce el gasto» → «la reducción del gasto».',
          table: {
            headers: ['Verbo', 'Sustantivo', 'Frase nominal'],
            rows: [
              ['subir', 'la subida', 'la subida de los tipos de interés'],
              ['caer', 'la caída', 'la caída de las exportaciones'],
              ['encarecer', 'el encarecimiento', 'el encarecimiento de la vivienda'],
              ['reducir', 'la reducción', 'la reducción del déficit'],
              ['recuperarse', 'la recuperación', 'la recuperación del empleo'],
              ['ajustar', 'el ajuste', 'el ajuste presupuestario'],
            ],
          },
        },
        {
          id: 'esa5-p2-match',
          type: 'MATCHING',
          instruction: 'Relacione cada frase verbal con su versión nominal.',
          left: [
            { id: 'a1', text: 'Los salarios se estancaron.' },
            { id: 'a2', text: 'El paro disminuyó.' },
            { id: 'a3', text: 'Se privatizó la empresa eléctrica.' },
            { id: 'a4', text: 'La moneda se devaluó.' },
          ],
          right: [
            { id: 'b1', text: 'el estancamiento de los salarios' },
            { id: 'b2', text: 'la disminución del paro' },
            { id: 'b3', text: 'la privatización de la empresa eléctrica' },
            { id: 'b4', text: 'la devaluación de la moneda' },
          ],
          solution: [
            { leftId: 'a1', rightId: 'b1' },
            { leftId: 'a2', rightId: 'b2' },
            { leftId: 'a3', rightId: 'b3' },
            { leftId: 'a4', rightId: 'b4' },
          ],
        },
        {
          id: 'esa5-p2-cloze',
          type: 'CLOZE',
          instruction: 'Condense la información con el sustantivo adecuado.',
          wordBank: ['aumento', 'caída', 'endurecimiento', 'recuperación'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'El ' },
            { kind: 'GAP', gapId: 'n1', solution: ['aumento'], hint: 'aumentar', width: 9 },
            { kind: 'TEXT', text: ' de los tipos de interés y el ' },
            { kind: 'GAP', gapId: 'n2', solution: ['endurecimiento'], hint: 'endurecer', width: 15 },
            { kind: 'TEXT', text: ' de las condiciones de crédito explican la ' },
            { kind: 'GAP', gapId: 'n3', solution: ['caída', 'caida'], hint: 'caer', width: 7 },
            { kind: 'TEXT', text: ' de la inversión, que retrasa a su vez la ' },
            { kind: 'GAP', gapId: 'n4', solution: ['recuperación', 'recuperacion'], hint: 'recuperarse', width: 13 },
            { kind: 'TEXT', text: ' del empleo.' },
          ],
        },
        {
          id: 'esa5-p2-info-dosis',
          type: 'INFO',
          variant: 'TIP',
          title: 'Cuándo sí y cuándo no',
          text: 'El estilo nominal es útil en títulos, resúmenes y frases que encadenan causas, porque permite convertir un suceso en el sujeto de otro. Se vuelve un problema cuando se acumulan tres o cuatro sustantivos seguidos con «de», o cuando sirve para ocultar una responsabilidad: «se ha producido una reducción de plantilla» suena más suave que «la empresa ha despedido a doscientas personas», y no es casualidad.',
        },
        {
          id: 'esa5-p2-choice',
          type: 'CHOICE',
          instruction: 'Elija la reformulación más clara.',
          question: '«La implementación de la mejora de la gestión de la recaudación permitió la reducción del déficit.»',
          options: [
            { id: 'r1', text: 'La implementación de la gestión permitió reducir la mejora del déficit.' },
            { id: 'r2', text: 'Al recaudar mejor los impuestos, el Estado redujo el déficit.' },
            { id: 'r3', text: 'La reducción del déficit se implementó mediante la recaudación de la gestión.' },
            { id: 'r4', text: 'Se produjo una mejora de la reducción de la recaudación.' },
          ],
          multiple: false,
          solution: ['r2'],
          explanation:
            'Cuatro sustantivos encadenados con «de» ocultan una idea sencilla: se recaudó mejor y eso redujo el déficit. Devolver los verbos y el agente hace la frase más breve y más clara; las demás opciones, además, cambian el sentido.',
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – Zahlen richtig versprachlichen.
  {
    order: 3,
    title: 'Hablar con cifras',
    subtitle: 'Prozent, Prozentpunkte und Verben der Veränderung',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'esa5-p3-h1', type: 'HEADING', level: 1, text: 'Hablar con cifras' },
        {
          id: 'esa5-p3-intro',
          type: 'TEXT',
          text: 'La mayoría de los errores con cifras no son de cálculo, sino de lenguaje. Se confunde un porcentaje con un punto porcentual, se dice que algo «se ha duplicado» cuando ha subido un cincuenta por ciento, o se presenta como caída lo que es un crecimiento más lento. Quien escribe sobre economía necesita un repertorio preciso de verbos y fórmulas.',
        },
        {
          id: 'esa5-p3-info-puntos',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Por ciento y puntos porcentuales',
          text: 'Si el paro pasa del 10 % al 12 %, ha subido dos puntos porcentuales, pero ha aumentado un 20 % respecto a su valor anterior. Ambas afirmaciones son ciertas y dicen cosas muy distintas. Cuando se comparan dos tasas, lo correcto es hablar de puntos; usar el porcentaje relativo sin aclararlo exagera o minimiza el cambio.',
          table: {
            headers: ['Situación', 'En puntos', 'En porcentaje relativo'],
            rows: [
              ['del 10 % al 12 %', '+2 puntos', '+20 %'],
              ['del 4 % al 3 %', '−1 punto', '−25 %'],
              ['del 50 % al 55 %', '+5 puntos', '+10 %'],
            ],
          },
        },
        {
          id: 'esa5-p3-choice',
          type: 'CHOICE',
          instruction: 'Elija la frase correcta.',
          question: 'La inflación ha pasado del 3 % al 6 %. ¿Qué frase es exacta?',
          options: [
            { id: 'p1', text: 'La inflación ha subido un 3 %.' },
            { id: 'p2', text: 'La inflación ha subido tres puntos porcentuales; se ha duplicado.' },
            { id: 'p3', text: 'La inflación ha subido un 6 %.' },
            { id: 'p4', text: 'La inflación ha subido un 50 %.' },
          ],
          multiple: false,
          solution: ['p2'],
          explanation:
            'Tres puntos porcentuales es la diferencia entre las dos tasas; como el valor final es el doble del inicial, también es correcto decir que se ha duplicado. «Ha subido un 3 %» confunde puntos con porcentaje relativo.',
        },
        {
          id: 'esa5-p3-info-verbos',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Verbos de la variación',
          text: 'Los informes rara vez dicen «subió» y «bajó» sin más: el verbo lleva información sobre la velocidad y la forma del cambio. Algunos, como «experimentar», funcionan como verbos de apoyo: «experimentó un fuerte descenso».',
          table: {
            headers: ['Movimiento', 'Verbos', 'Matiz'],
            rows: [
              ['subida', 'aumentar, crecer, subir', 'neutro'],
              ['subida fuerte', 'dispararse, triplicarse', 'brusco, llamativo'],
              ['subida tras caída', 'repuntar, recuperarse', 'cambio de tendencia'],
              ['bajada', 'disminuir, descender, caer', 'neutro'],
              ['bajada fuerte', 'desplomarse, hundirse', 'brusco'],
              ['sin cambio', 'estancarse, mantenerse estable', 'freno'],
              ['crecer menos', 'moderarse, desacelerarse', 'sigue subiendo, más despacio'],
            ],
          },
        },
        {
          id: 'esa5-p3-match',
          type: 'MATCHING',
          instruction: 'Relacione cada serie de datos con el verbo que mejor la describe.',
          left: [
            { id: 'v1', text: 'Ventas: 100, 98, 60' },
            { id: 'v2', text: 'Crecimiento: 4 %, 3 %, 2 %' },
            { id: 'v3', text: 'Paro: 12 %, 12 %, 12 %' },
            { id: 'v4', text: 'Turistas: 5, 3, 4 millones' },
          ],
          right: [
            { id: 'w1', text: 'se desplomaron' },
            { id: 'w2', text: 'se desaceleró' },
            { id: 'w3', text: 'se estancó' },
            { id: 'w4', text: 'repuntaron' },
          ],
          solution: [
            { leftId: 'v1', rightId: 'w1' },
            { leftId: 'v2', rightId: 'w2' },
            { leftId: 'v3', rightId: 'w3' },
            { leftId: 'v4', rightId: 'w4' },
          ],
        },
        {
          id: 'esa5-p3-cloze',
          type: 'CLOZE',
          instruction: 'Complete el informe.',
          wordBank: ['puntos', 'se duplicó', 'repuntó', 'moderó', 'en torno al'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'En el primer trimestre, el paro bajó dos ' },
            { kind: 'GAP', gapId: 'x1', solution: ['puntos'], width: 7 },
            { kind: 'TEXT', text: ', hasta el 9 %. La inversión extranjera ' },
            { kind: 'GAP', gapId: 'x2', solution: ['se duplicó'], width: 11 },
            { kind: 'TEXT', text: ': de 2.000 a 4.000 millones. El consumo, que había caído en invierno, ' },
            { kind: 'GAP', gapId: 'x3', solution: ['repuntó', 'repunto'], width: 8 },
            { kind: 'TEXT', text: ' en marzo. La inflación se ' },
            { kind: 'GAP', gapId: 'x4', solution: ['moderó', 'modero'], width: 8 },
            { kind: 'TEXT', text: ' y se situó ' },
            { kind: 'GAP', gapId: 'x5', solution: ['en torno al'], width: 12 },
            { kind: 'TEXT', text: ' 3 %.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – Zielkonflikte: Wachstum gegen Nachhaltigkeit.
  {
    order: 4,
    title: 'Objetivos que chocan',
    subtitle: 'Zielkonflikte präzise darstellen',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'esa5-p4-h1', type: 'HEADING', level: 1, text: 'Objetivos que chocan' },
        {
          id: 'esa5-p4-text',
          type: 'TEXT',
          text: 'Una región andina tiene uno de los mayores yacimientos de litio del mundo. Explotarlo traería inversión, empleo y recursos fiscales para escuelas y hospitales. Pero la extracción consume enormes cantidades de agua en una zona ya seca, donde viven comunidades que dependen de ella para el pastoreo y la agricultura. Y el litio, para colmo, es imprescindible para las baterías de la transición energética. Ningún objetivo es ilegítimo; no todos caben a la vez.',
        },
        {
          id: 'esa5-p4-info-conflicto',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Expresar el precio de un objetivo',
          text: 'Para describir un conflicto de objetivos hacen falta expresiones que digan que algo se consigue a cambio de otra cosa. «A costa de» y «en detrimento de» nombran lo que se sacrifica. «Sin que» + subjuntivo niega una consecuencia esperada. «En la medida en que» establece una proporción. «Cuanto más…, más/menos…» expresa una relación gradual.',
          table: {
            headers: ['Expresión', 'Ejemplo'],
            rows: [
              ['a costa de', 'La región creció a costa de sus reservas de agua.'],
              ['en detrimento de', 'Se favoreció la exportación en detrimento del mercado interno.'],
              ['sin que + subj.', 'El PIB creció sin que bajara la pobreza.'],
              ['en la medida en que', 'La mina es aceptable en la medida en que no agote los acuíferos.'],
              ['cuanto más…, menos…', 'Cuanto más litio se extrae, menos agua queda para el pastoreo.'],
            ],
          },
        },
        {
          id: 'esa5-p4-cloze',
          type: 'CLOZE',
          instruction: 'Complete con la expresión adecuada.',
          wordBank: ['a costa de', 'sin que', 'en la medida en que', 'Cuanto más'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'La economía creció un 5 % anual ' },
            { kind: 'GAP', gapId: 'c1', solution: ['sin que'], width: 8 },
            { kind: 'TEXT', text: ' mejoraran los salarios. El auge se logró ' },
            { kind: 'GAP', gapId: 'c2', solution: ['a costa de', 'en detrimento de'], width: 11 },
            { kind: 'TEXT', text: ' los acuíferos de la región. ' },
            { kind: 'GAP', gapId: 'c3', solution: ['Cuanto más'], width: 11 },
            { kind: 'TEXT', text: ' se retrase la diversificación, mayor será la dependencia. La mina solo será aceptable ' },
            { kind: 'GAP', gapId: 'c4', solution: ['en la medida en que'], width: 19 },
            { kind: 'TEXT', text: ' las comunidades participen en las decisiones.' },
          ],
        },
        {
          id: 'esa5-p4-choice',
          type: 'CHOICE',
          instruction: 'Elija la frase que describe el conflicto sin tomar partido.',
          question: '¿Qué frase presenta el conflicto del litio de forma equilibrada?',
          options: [
            { id: 'e1', text: 'Las empresas mineras destruyen la región para enriquecerse.' },
            { id: 'e2', text: 'Oponerse a la mina es oponerse al progreso y a las energías limpias.' },
            {
              id: 'e3',
              text: 'La explotación aportaría recursos fiscales y un material clave para la transición energética, pero lo haría a costa de un agua de la que dependen las comunidades locales.',
            },
            { id: 'e4', text: 'El litio es el futuro y el agua siempre se puede traer de otro sitio.' },
          ],
          multiple: false,
          solution: ['e3'],
          explanation:
            'La frase equilibrada nombra los beneficios y el coste con la misma precisión. Las otras eligen un bando y lo presentan como evidente.',
        },
        {
          id: 'esa5-p4-info-matiz',
          type: 'INFO',
          variant: 'TIP',
          title: 'Evitar el falso dilema',
          text: 'Un conflicto de objetivos rara vez es un «o esto o aquello». Casi siempre hay grados: cuánta agua, con qué tecnología, con qué compensación, bajo qué control. Las expresiones proporcionales —«en la medida en que», «hasta qué punto», «en qué condiciones»— sirven para convertir un choque frontal en una pregunta que admite respuestas intermedias.',
        },
        {
          id: 'esa5-p4-match',
          type: 'MATCHING',
          instruction: 'Relacione cada objetivo con el conflicto que puede plantear.',
          left: [
            { id: 'k1', text: 'subir el salario mínimo' },
            { id: 'k2', text: 'bajar los impuestos a las empresas' },
            { id: 'k3', text: 'proteger la industria nacional con aranceles' },
            { id: 'k4', text: 'ampliar la frontera agrícola' },
          ],
          right: [
            { id: 'l1', text: 'mejores ingresos frente a posible pérdida de empleo formal' },
            { id: 'l2', text: 'más inversión frente a menos recaudación' },
            { id: 'l3', text: 'empleo local frente a precios más altos para el consumidor' },
            { id: 'l4', text: 'más producción frente a deforestación' },
          ],
          solution: [
            { leftId: 'k1', rightId: 'l1' },
            { leftId: 'k2', rightId: 'l2' },
            { leftId: 'k3', rightId: 'l3' },
            { leftId: 'k4', rightId: 'l4' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – Informalität, faire Gegenüberstellung, Wiederholung.
  {
    order: 5,
    title: 'Posiciones frente a frente',
    subtitle: 'Positionen fair gegenüberstellen',
    estimatedMinutes: 32,
    content: {
      version: v,
      blocks: [
        { id: 'esa5-p5-h1', type: 'HEADING', level: 1, text: 'Posiciones frente a frente' },
        {
          id: 'esa5-p5-intro',
          type: 'TEXT',
          text: 'En gran parte de América Latina, cerca de la mitad de quienes trabajan lo hacen en la economía informal: sin contrato, sin cotizar y sin protección. Sobre cómo reducirla hay dos grandes posiciones. Unos sostienen que el problema son las cargas: si formalizarse sale caro, nadie lo hará, y hay que simplificar y abaratar. Otros sostienen que el problema es la productividad: los negocios informales no ganan lo suficiente para asumir ningún coste, y la solución pasa por crédito, formación e infraestructura.',
        },
        {
          id: 'esa5-p5-info-formulas',
          type: 'INFO',
          variant: 'TIP',
          title: 'Presentar posiciones con justicia',
          text: 'Una exposición justa atribuye cada postura a quien la sostiene, la formula en su versión más sólida y usa verbos de referencia neutros. «Pretender» o «alegar» ya insinúan que el otro se equivoca; «sostener», «defender» y «considerar» no.',
          table: {
            headers: ['Función', 'Fórmula'],
            rows: [
              ['presentar una postura', 'Quienes defienden X sostienen que…'],
              ['la contraria', 'Frente a ello, otros consideran que…'],
              ['punto común', 'Ambas posiciones coinciden en que…'],
              ['diferencia de fondo', 'La discrepancia radica en…'],
            ],
          },
        },
        {
          id: 'esa5-p5-choice',
          type: 'CHOICE',
          instruction: 'Elija la frase más neutral.',
          question: '¿Qué frase presenta la segunda posición sin desacreditarla?',
          options: [
            { id: 'n1', text: 'Otros pretenden que la culpa es de la baja productividad.' },
            { id: 'n2', text: 'Frente a ello, otros consideran que el origen está en la baja productividad de los pequeños negocios.' },
            { id: 'n3', text: 'Algunos ingenuos creen que basta con dar créditos.' },
            { id: 'n4', text: 'Otros alegan, sin pruebas, que todo depende de la productividad.' },
          ],
          multiple: false,
          solution: ['n2'],
          explanation:
            '«Pretender», «alegar sin pruebas» e «ingenuos» valoran antes de exponer. «Consideran que» atribuye la postura sin juzgarla.',
        },
        {
          id: 'esa5-p5-cloze',
          type: 'CLOZE',
          instruction: 'Complete el resumen del capítulo.',
          wordBank: ['desarrollo', 'Gini', 'nominal', 'puntos', 'a costa de', 'sostienen'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'El crecimiento mide cuánto más se produce; el ' },
            { kind: 'GAP', gapId: 'z1', solution: ['desarrollo'], width: 11 },
            { kind: 'TEXT', text: ', cuánto mejora la vida. El índice de ' },
            { kind: 'GAP', gapId: 'z2', solution: ['Gini'], width: 6 },
            { kind: 'TEXT', text: ' mide la desigualdad. El estilo ' },
            { kind: 'GAP', gapId: 'z3', solution: ['nominal'], width: 8 },
            { kind: 'TEXT', text: ' condensa sucesos en sustantivos. Entre dos tasas se habla de ' },
            { kind: 'GAP', gapId: 'z4', solution: ['puntos'], width: 7 },
            { kind: 'TEXT', text: ' porcentuales. «' },
            { kind: 'GAP', gapId: 'z5', solution: ['a costa de'], width: 11 },
            { kind: 'TEXT', text: '» nombra lo que se sacrifica. Y para presentar una postura sin juzgarla se dice que sus defensores la ' },
            { kind: 'GAP', gapId: 'z6', solution: ['sostienen'], width: 10 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'esa5-p5-writing',
          type: 'WRITING',
          instruction: 'Escriba una exposición de posiciones.',
          prompt:
            'Un gobierno debate si subir el salario mínimo un 20 % en un país donde el 45 % del empleo es informal. Escriba un texto de entre 180 y 260 palabras para un informe interno que exponga las dos posiciones principales con justicia, identifique en qué coinciden y dónde está la discrepancia de fondo, y describa el conflicto de objetivos. Use al menos dos nominalizaciones, una expresión de cifras precisa y una de las expresiones de la página 4.',
          minWords: 180,
          maxWords: 270,
          aiFeedback: true,
          sampleAnswer:
            'La propuesta de subir el salario mínimo un 20 % ha abierto un debate con dos posiciones bien definidas.\n\nQuienes defienden la subida sostienen que el salario mínimo ha perdido poder adquisitivo en los últimos años y que su actualización mejoraría la vida de cerca de un millón de trabajadores formales. Añaden que el aumento del consumo compensaría parte del coste para las empresas.\n\nFrente a ello, otros consideran que, en un país donde el 45 % del empleo es informal, una subida brusca encarecería la contratación formal y empujaría a más pequeños negocios fuera de la ley. La mejora de los ingresos se lograría así a costa de la protección de quienes pasaran a la informalidad.\n\nAmbas posiciones coinciden en que el salario mínimo actual es insuficiente y en que la informalidad es el principal problema del mercado laboral. La discrepancia radica en el orden: los primeros creen que la subida debe preceder a la formalización; los segundos, que solo la reducción de la informalidad hará sostenible la subida.\n\nEl conflicto de objetivos es real: cuanto mayor sea el aumento, mayor será el beneficio para los trabajadores formales y mayor el riesgo para el empleo formal en los sectores menos productivos. Una subida escalonada, acompañada de incentivos a la formalización, permitiría explorar hasta qué punto ambos objetivos son compatibles.',
        },
      ],
    },
  },
];
