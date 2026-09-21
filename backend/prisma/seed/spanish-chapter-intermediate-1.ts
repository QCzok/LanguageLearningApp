import type { UnitSeed } from './chapter-beginner-1';

/**
 * Spanisch, Intermediate, Kapitel 1: „El mundo laboral“ (B1, Kapitel 1)
 *
 * Fünf Seiten. Der Einstieg in das zweite Kursbuch. Wer aus dem Beginner-Band
 * kommt, kann sich vorstellen, einkaufen und seinen Tag beschreiben; hier
 * beginnt das Spanische, das man für etwas braucht – eine Bewerbung, ein
 * Gespräch, eine Bitte an die Chefin.
 *
 * Aufbau: Seite 1 liest eine Stellenanzeige (Wortschatz, Zahlen, Abkürzungen),
 * Seite 2 schreibt das Anschreiben und führt dafür das förmliche Register ein,
 * Seite 3 ist das Vorstellungsgespräch mit den beiden Zeiten, die dort
 * aufeinandertreffen – Perfecto für die Erfahrung, Indefinido für die
 * abgeschlossene Station. Seite 4 beschreibt und bewertet Arbeitsbedingungen
 * mit den Vergleichsformen, Seite 5 übt die höfliche Bitte im Büroalltag.
 *
 * Grammatischer Kern: `llevar` + Gerundium und `soler` + Infinitiv, die beiden
 * Perífrasis, ohne die man über Arbeit nicht sprechen kann, dazu die
 * Abgrenzung von Perfecto und Indefinido im Lebenslauf.
 *
 * Ab dem zweiten Band stehen die Seiten einsprachig spanisch – die
 * aufklappbare Übersetzung bleibt A1 vorbehalten (siehe `TextBlock`). Die
 * Wortschatzlisten führen weiter deutsche und englische Entsprechungen, weil
 * ein einzelnes Wort ohne Kontext sonst nicht zu erschließen ist. Die
 * Erklärungen sind kürzer und einfacher gebaut als in der B2-Hälfte dieses
 * Bands (Kapitel 7 bis 12).
 *
 * Stellenanzeigen, Firmen und Personen sind erfunden.
 *
 * Sämtliche Texte sind eigenständig verfasst.
 */
const v = 1;

export const SPANISH_INTERMEDIATE_1_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – die Stellenanzeige lesen.
  {
    order: 1,
    title: 'Buscar trabajo',
    subtitle: 'Leer una oferta de empleo',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'esi1-p1-h1', type: 'HEADING', level: 1, text: 'Buscar trabajo' },
        {
          id: 'esi1-p1-image',
          type: 'IMAGE',
          url: 'illustration:greeting-office',
          alt: 'Dos personas se saludan por la mañana en una oficina.',
          caption: 'El primer día de trabajo empieza con un saludo.',
        },
        {
          id: 'esi1-p1-intro',
          type: 'TEXT',
          text: 'Una oferta de empleo en español dice mucho en pocas líneas, y casi siempre con las mismas palabras. Si usted conoce unas treinta, puede leer cualquier anuncio del sector que sea. Empezamos por ahí, porque entender bien lo que se pide ahorra el trabajo de escribir una carta que no encaja.',
        },
        {
          id: 'esi1-p1-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: la oferta de empleo',
          items: [
            {
              term: 'la oferta de empleo',
              translations: { en: 'job offer, vacancy', de: 'die Stellenanzeige' },
            },
            {
              term: 'el puesto',
              translations: { en: 'position', de: 'die Stelle' },
              example: 'Se busca cubrir un puesto de recepcionista.',
            },
            {
              term: 'el currículum (vitae)',
              translations: { en: 'CV, résumé', de: 'der Lebenslauf' },
            },
            {
              term: 'la carta de presentación',
              translations: { en: 'cover letter', de: 'das Anschreiben' },
            },
            {
              term: 'los requisitos',
              translations: { en: 'requirements', de: 'die Voraussetzungen' },
              example: 'Requisitos: inglés B2 y carné de conducir.',
            },
            {
              term: 'la experiencia',
              translations: { en: 'experience', de: 'die Berufserfahrung' },
            },
            {
              term: 'la jornada completa / parcial',
              translations: { en: 'full-time / part-time', de: 'Vollzeit / Teilzeit' },
            },
            {
              term: 'el contrato temporal / indefinido',
              translations: {
                en: 'temporary / permanent contract',
                de: 'befristeter / unbefristeter Vertrag',
              },
            },
            {
              term: 'el sueldo bruto / neto',
              translations: { en: 'gross / net salary', de: 'das Brutto- / Nettogehalt' },
            },
            {
              term: 'el turno',
              translations: { en: 'shift', de: 'die Schicht' },
              example: 'Trabaja en turno de tarde.',
            },
            {
              term: 'incorporación inmediata',
              translations: { en: 'immediate start', de: 'sofortiger Eintritt' },
            },
            {
              term: 'se valorará',
              translations: { en: 'will be considered a plus', de: 'von Vorteil' },
              example: 'Se valorará el conocimiento de portugués.',
            },
            {
              term: 'imprescindible',
              translations: { en: 'essential', de: 'zwingend erforderlich' },
            },
            {
              term: 'la formación',
              translations: { en: 'training, education', de: 'die Ausbildung' },
            },
          ],
        },
        {
          id: 'esi1-p1-anuncio',
          type: 'TEXT',
          text: 'ANUNCIO. Librería Altamar (Vigo) busca LIBRERO/A para su tienda del centro.\n\nFunciones: atención al público, pedidos a proveedores y organización de presentaciones de libros.\nRequisitos: experiencia mínima de un año en comercio; gallego y castellano. Imprescindible disponibilidad los sábados por la mañana. Se valorará formación en biblioteconomía.\nOfrecemos: contrato indefinido a jornada parcial (25 h/semana), turno de tarde, sueldo según convenio (1 180 € brutos/mes). Incorporación inmediata.\nInteresados: enviar currículum y carta de presentación a empleo@altamar.es antes del 30 de octubre.',
        },
        {
          id: 'esi1-p1-choice-anuncio',
          type: 'CHOICE',
          instruction: 'Lea el anuncio y elija.',
          question: '¿Cuál de estas personas cumple todos los requisitos imprescindibles?',
          options: [
            {
              id: 'a1',
              text: 'Ana: dos años en una papelería, habla gallego y castellano, no puede trabajar los sábados.',
            },
            {
              id: 'a2',
              text: 'Brais: un año en una tienda de ropa, habla gallego y castellano, libre los sábados.',
            },
            {
              id: 'a3',
              text: 'Carla: licenciada en biblioteconomía, sin experiencia en comercio, libre los sábados.',
            },
            { id: 'a4', text: 'Daniel: tres años en una librería de Madrid, no habla gallego.' },
          ],
          multiple: false,
          solution: ['a2'],
          explanation:
            'Los tres requisitos imprescindibles son experiencia en comercio, las dos lenguas y los sábados. Brais los cumple. La formación de Carla «se valorará», pero no sustituye a la experiencia que sí se exige.',
        },
        {
          id: 'esi1-p1-info-abreviaturas',
          type: 'INFO',
          variant: 'TIP',
          title: 'Lo que el anuncio no explica',
          text: 'Los anuncios abrevian mucho y dan por sabidas algunas cosas. Estas cinco aparecen casi siempre y conviene tenerlas claras antes de responder a una oferta.',
          table: {
            headers: ['Aparece así', 'Significa'],
            rows: [
              ['según convenio', 'el sueldo lo fija el acuerdo del sector'],
              ['brutos/mes', 'antes de impuestos; el neto es menor'],
              ['jornada parcial (25 h)', 'no es media jornada exacta: son las horas que dice'],
              ['se valorará', 'suma puntos, pero no es obligatorio'],
              ['imprescindible', 'sin eso no le llamarán'],
            ],
          },
        },
        {
          id: 'esi1-p1-cloze',
          type: 'CLOZE',
          instruction: 'Complete el anuncio con las palabras del recuadro.',
          wordBank: ['requisitos', 'jornada', 'sueldo', 'imprescindible', 'currículum'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Cafetería del Puerto busca camarero/a a ' },
            { kind: 'GAP', gapId: 'c1', solution: ['jornada'], width: 9 },
            { kind: 'TEXT', text: ' completa. ' },
            { kind: 'GAP', gapId: 'c2', solution: ['requisitos'], width: 11 },
            {
              kind: 'TEXT',
              text: ': experiencia de seis meses y trato agradable con el público. Es ',
            },
            { kind: 'GAP', gapId: 'c3', solution: ['imprescindible'], width: 15 },
            { kind: 'TEXT', text: ' tener disponibilidad los fines de semana. El ' },
            { kind: 'GAP', gapId: 'c4', solution: ['sueldo'], width: 8 },
            { kind: 'TEXT', text: ' es de 1 400 € brutos al mes. Envíe su ' },
            { kind: 'GAP', gapId: 'c5', solution: ['currículum'], width: 11 },
            { kind: 'TEXT', text: ' al correo del anuncio.' },
          ],
        },
        {
          id: 'esi1-p1-match',
          type: 'MATCHING',
          instruction: 'Relacione cada expresión con su explicación.',
          left: [
            { id: 'l1', text: 'contrato temporal' },
            { id: 'l2', text: 'incorporación inmediata' },
            { id: 'l3', text: 'turno rotativo' },
            { id: 'l4', text: 'sueldo neto' },
          ],
          right: [
            { id: 'r1', text: 'Tiene fecha de final desde el principio.' },
            { id: 'r2', text: 'Se empieza a trabajar enseguida, sin esperar meses.' },
            { id: 'r3', text: 'El horario cambia: unas semanas de mañana, otras de tarde.' },
            { id: 'r4', text: 'Lo que queda después de impuestos: lo que se cobra.' },
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
  // Seite 2 – das Anschreiben und das förmliche Register.
  {
    order: 2,
    title: 'La carta de presentación',
    subtitle: 'Escribir en registro formal',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'esi1-p2-h1', type: 'HEADING', level: 1, text: 'La carta de presentación' },
        {
          id: 'esi1-p2-intro',
          type: 'TEXT',
          text: 'La carta no repite el currículum. El currículum dice qué ha hecho usted; la carta dice por qué eso le sirve a esta empresa y no a cualquier otra. Son tres párrafos y cabe en media página. Quien escribe una página entera casi siempre está repitiendo el currículum con frases más largas.',
        },
        {
          id: 'esi1-p2-info-estructura',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Los tres párrafos',
          text: 'La estructura es fija y el lector la espera. Si falta el segundo párrafo, la carta parece una plantilla enviada a veinte sitios; si falta el tercero, nadie sabe qué hacer con ella.',
          table: {
            headers: ['Párrafo', 'Qué dice', 'Ejemplo de entrada'],
            rows: [
              [
                '1',
                'a qué puesto se presenta y dónde lo vio',
                'En relación con su anuncio publicado en…',
              ],
              [
                '2',
                'qué sabe hacer y qué encaja con lo que piden',
                'Durante los últimos tres años he…',
              ],
              ['3', 'qué pide usted ahora', 'Quedo a su disposición para una entrevista.'],
            ],
          },
        },
        {
          id: 'esi1-p2-modelo',
          type: 'TEXT',
          text: 'Estimada señora Ferreiro:\n\nEn relación con su anuncio publicado el 12 de octubre, me dirijo a usted para presentar mi candidatura al puesto de librero en su tienda del centro.\n\nDurante los últimos dos años he trabajado en la papelería Noria, donde me encargaba de la atención al público y de los pedidos a proveedores. Hablo gallego y castellano, y tengo plena disponibilidad los sábados. Además, en mi puesto actual organizo desde el año pasado los talleres infantiles de los viernes, una experiencia que creo cercana a las presentaciones de libros que ustedes mencionan.\n\nAdjunto mi currículum y quedo a su disposición para una entrevista.\n\nAtentamente,\nBrais Couto Lema',
        },
        {
          id: 'esi1-p2-info-formulas',
          type: 'INFO',
          variant: 'TIP',
          title: 'Fórmulas de apertura y cierre',
          text: 'En español la carta formal se abre con dos puntos, no con coma, y la primera palabra del cuerpo va en mayúscula. Si no sabe el nombre de la persona, no invente un «Estimado/a señor/a» cualquiera: «Estimados señores» es la salida limpia.',
          table: {
            headers: ['Situación', 'Apertura', 'Cierre'],
            rows: [
              ['sabe el apellido', 'Estimada señora Ferreiro:', 'Atentamente,'],
              ['no sabe quién lee', 'Estimados señores:', 'Un cordial saludo,'],
              ['muy formal', 'Muy señora mía:', 'Le saluda atentamente,'],
              ['ya hubo contacto', 'Estimada Ana:', 'Muchas gracias de antemano,'],
            ],
          },
        },
        {
          id: 'esi1-p2-choice-registro',
          type: 'CHOICE',
          instruction: 'Elija la frase adecuada para una carta de presentación.',
          options: [
            { id: 'b1', text: 'Hola, os escribo porque he visto que buscáis gente.' },
            {
              id: 'b2',
              text: 'Me dirijo a ustedes en relación con la oferta publicada en su página web.',
            },
            { id: 'b3', text: 'Quiero el trabajo porque necesito dinero urgentemente.' },
            { id: 'b4', text: 'Soy la persona perfecta para este puesto, sin ninguna duda.' },
          ],
          multiple: false,
          solution: ['b2'],
          explanation:
            'b2 usa el registro formal y dice de qué oferta habla. b1 tutea a una empresa desconocida, b3 explica un motivo que no interesa a quien contrata y b4 afirma sin dar ningún dato que lo respalde.',
        },
        {
          id: 'esi1-p2-info-tratamiento',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Usted y ustedes',
          text: 'El tratamiento formal usa la tercera persona del verbo, y eso arrastra los pronombres y los posesivos. El error más frecuente es empezar con «usted» y deslizarse al «tú» a mitad de carta. Revise siempre los posesivos: son los primeros en delatarlo.',
          table: {
            headers: ['Informal', 'Formal (usted)'],
            rows: [
              ['¿Puedes enviarme…?', '¿Puede usted enviarme…?'],
              ['tu anuncio', 'su anuncio'],
              ['te escribo', 'le escribo'],
              ['os adjunto', 'les adjunto'],
              ['gracias por tu tiempo', 'gracias por su tiempo'],
            ],
          },
        },
        {
          id: 'esi1-p2-cloze',
          type: 'CLOZE',
          instruction: 'Pase la carta al tratamiento formal.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Me dirijo a ' },
            { kind: 'GAP', gapId: 'c1', solution: ['usted'], hint: 'tú → …', width: 8 },
            { kind: 'TEXT', text: ' en relación con ' },
            { kind: 'GAP', gapId: 'c2', solution: ['su'], hint: 'tu anuncio', width: 5 },
            { kind: 'TEXT', text: ' anuncio. ' },
            { kind: 'GAP', gapId: 'c3', solution: ['Le'], hint: 'te escribo', width: 5 },
            { kind: 'TEXT', text: ' escribo para presentar mi candidatura. ¿' },
            { kind: 'GAP', gapId: 'c4', solution: ['Podría'], hint: 'podrías', width: 8 },
            { kind: 'TEXT', text: ' indicarme el plazo? Gracias por ' },
            { kind: 'GAP', gapId: 'c5', solution: ['su'], hint: 'tu tiempo', width: 5 },
            { kind: 'TEXT', text: ' tiempo.' },
          ],
        },
        {
          id: 'esi1-p2-ordering',
          type: 'ORDERING',
          instruction: 'Ordene las partes de la carta.',
          items: [
            { id: 'o1', text: 'Estimados señores:' },
            {
              id: 'o2',
              text: 'Me dirijo a ustedes en relación con su oferta de auxiliar administrativo.',
            },
            {
              id: 'o3',
              text: 'Durante cuatro años he trabajado en la gestoría Miralles, donde llevaba la facturación.',
            },
            { id: 'o4', text: 'Adjunto mi currículum y quedo a su disposición.' },
            { id: 'o5', text: 'Un cordial saludo,' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5'],
        },
        {
          id: 'esi1-p2-writing',
          type: 'WRITING',
          instruction: 'Escriba una carta de presentación.',
          prompt:
            'Responda al anuncio de la Cafetería del Puerto de la página anterior (camarero/a, jornada completa, fines de semana, 1 400 € brutos). Escriba una carta de 90 a 140 palabras con los tres párrafos: a qué puesto se presenta, qué experiencia tiene y qué pide al final. Use el tratamiento de usted de principio a fin y una fórmula de apertura y otra de cierre.',
          minWords: 90,
          maxWords: 150,
          aiFeedback: true,
          sampleAnswer:
            'Estimados señores:\n\nMe dirijo a ustedes en relación con su anuncio del puesto de camarero publicado la semana pasada en el portal de empleo del ayuntamiento.\n\nDurante el último año y medio he trabajado en el restaurante Casa Pilar, donde atendía la terraza y llevaba las comandas de unas veinte mesas los fines de semana. Estoy acostumbrado al ritmo de las horas de mayor trabajo y tengo plena disponibilidad los sábados y domingos. Hablo español, alemán e inglés suficiente para atender a clientes extranjeros, algo que en una cafetería del puerto puede ser útil.\n\nAdjunto mi currículum y quedo a su disposición para una entrevista en el horario que les resulte más cómodo.\n\nUn cordial saludo,\nJan Czok',
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – das Vorstellungsgespräch: Perfecto und Indefinido.
  {
    order: 3,
    title: 'La entrevista',
    subtitle: 'Contar la experiencia',
    estimatedMinutes: 27,
    content: {
      version: v,
      blocks: [
        { id: 'esi1-p3-h1', type: 'HEADING', level: 1, text: 'La entrevista' },
        {
          id: 'esi1-p3-intro',
          type: 'TEXT',
          text: 'En una entrevista se habla casi todo el rato del pasado, y ahí el español obliga a elegir. «Trabajé en una librería» cierra la etapa: ya no trabaja allí. «He trabajado en una librería» la presenta como parte de lo que usted trae hoy. Las dos frases son correctas y dicen cosas distintas.',
        },
        {
          id: 'esi1-p3-dialogo',
          type: 'DIALOGUE',
          title: 'Entrevista en la librería Altamar',
          audioUrl: 'placeholder://es-b1-entrevista',
          lines: [
            {
              speaker: 'Ferreiro',
              text: 'Buenos días, Brais. Cuénteme un poco: ¿qué ha hecho usted hasta ahora?',
            },
            {
              speaker: 'Brais',
              text: 'He trabajado dos años en la papelería Noria, aquí al lado. Antes estuve seis meses en una tienda de fotografía, pero cerró en 2023.',
            },
            {
              speaker: 'Ferreiro',
              text: '¿Y de qué se encargaba exactamente en la papelería?',
            },
            {
              speaker: 'Brais',
              text: 'De la caja y de los pedidos. Llevo un año organizando además los talleres de los viernes para niños.',
            },
            {
              speaker: 'Ferreiro',
              text: 'Interesante. ¿Suele tratar usted con proveedores?',
            },
            {
              speaker: 'Brais',
              text: 'Sí, hablo con ellos todas las semanas. Suelo hacer el pedido los lunes y reclamar lo que falta los jueves.',
            },
            {
              speaker: 'Ferreiro',
              text: '¿Por qué quiere cambiar de trabajo?',
            },
            {
              speaker: 'Brais',
              text: 'Porque en la papelería he llegado a donde podía llegar. Me gustaría trabajar con libros, que es lo que leo y lo que conozco.',
            },
            {
              speaker: 'Ferreiro',
              text: 'De acuerdo. Le llamaremos la semana que viene, tanto si es que sí como si es que no.',
            },
          ],
        },
        {
          id: 'esi1-p3-info-tiempos',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'He trabajado o trabajé',
          text: 'El pretérito perfecto une el pasado con el presente: lo que ha hecho usted y todavía cuenta. El indefinido cierra: una etapa terminada, normalmente con una fecha. En gran parte de América el indefinido se usa también donde en España se diría perfecto, y ninguna de las dos formas está mal.',
          table: {
            headers: ['Se dice', 'Cuándo', 'Ejemplo'],
            rows: [
              ['he trabajado', 'experiencia que sigue contando', 'He trabajado en tres librerías.'],
              ['trabajé', 'etapa cerrada, con fecha', 'Trabajé allí en 2021.'],
              ['trabajaba', 'lo habitual de entonces', 'Me encargaba de la caja.'],
              ['llevo trabajando', 'sigue ahora mismo', 'Llevo dos años trabajando allí.'],
            ],
          },
        },
        {
          id: 'esi1-p3-info-perifrasis',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Llevar + gerundio, soler + infinitivo',
          text: 'Dos construcciones que en una entrevista aparecen cada dos frases. «Llevar» cuenta el tiempo de algo que continúa: donde el alemán dice «seit», el español dice «llevo». Y «soler» dice que algo es lo habitual, sin necesidad de añadir «normalmente».',
          table: {
            headers: ['Construcción', 'Significa', 'Ejemplo'],
            rows: [
              [
                'llevo + tiempo + gerundio',
                'sigo haciéndolo desde entonces',
                'Llevo un año organizando talleres.',
              ],
              [
                'llevo + tiempo + en',
                'estoy allí desde hace ese tiempo',
                'Llevo dos años en la papelería.',
              ],
              ['suelo + infinitivo', 'lo hago habitualmente', 'Suelo hacer el pedido los lunes.'],
              ['solía + infinitivo', 'lo hacía habitualmente antes', 'Solía cerrar yo la tienda.'],
            ],
          },
        },
        {
          id: 'esi1-p3-choice-tiempo',
          type: 'CHOICE',
          instruction: 'Elija la respuesta adecuada.',
          question: 'La entrevistadora pregunta: «¿Tiene usted experiencia con proveedores?»',
          options: [
            { id: 'c1', text: 'Sí, he trabajado con proveedores en mis dos últimos puestos.' },
            { id: 'c2', text: 'Sí, trabajo con proveedores en mis dos últimos puestos.' },
            { id: 'c3', text: 'Sí, trabajaré con proveedores en mis dos últimos puestos.' },
            { id: 'c4', text: 'Sí, había trabajado con proveedores en mis dos últimos puestos.' },
          ],
          multiple: false,
          solution: ['c1'],
          explanation:
            'La pregunta es por la experiencia acumulada hasta hoy: pretérito perfecto. c2 mezcla el presente con «mis dos últimos puestos», que ya pasaron, y c4 usa un tiempo que necesita otro pasado detrás para tener sentido.',
        },
        {
          id: 'esi1-p3-cloze',
          type: 'CLOZE',
          instruction: 'Complete con la forma adecuada.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '▸ ' },
            { kind: 'GAP', gapId: 'c1', solution: ['Llevo'], hint: 'llevar', width: 7 },
            { kind: 'TEXT', text: ' tres años trabajando en el mismo sitio.\n▸ Antes ' },
            {
              kind: 'GAP',
              gapId: 'c2',
              solution: ['estuve'],
              hint: 'estar, etapa cerrada',
              width: 8,
            },
            { kind: 'TEXT', text: ' un año en una empresa de transporte.\n▸ Hasta ahora ' },
            {
              kind: 'GAP',
              gapId: 'c3',
              solution: ['he tenido'],
              hint: 'tener, experiencia',
              width: 10,
            },
            { kind: 'TEXT', text: ' dos jefes muy distintos.\n▸ En aquel puesto ' },
            {
              kind: 'GAP',
              gapId: 'c4',
              solution: ['solía'],
              hint: 'soler, costumbre pasada',
              width: 7,
            },
            { kind: 'TEXT', text: ' salir a las ocho.\n▸ Normalmente ' },
            {
              kind: 'GAP',
              gapId: 'c5',
              solution: ['suelo'],
              hint: 'soler, costumbre actual',
              width: 7,
            },
            { kind: 'TEXT', text: ' preparar el trabajo del día siguiente antes de irme.' },
          ],
        },
        {
          id: 'esi1-p3-match-preguntas',
          type: 'MATCHING',
          instruction: 'Relacione cada pregunta de entrevista con una buena respuesta.',
          left: [
            { id: 'p1', text: '¿Por qué quiere cambiar de trabajo?' },
            { id: 'p2', text: '¿Cuál diría que es su punto débil?' },
            { id: 'p3', text: '¿Dónde se ve dentro de cinco años?' },
            { id: 'p4', text: '¿Tiene alguna pregunta para nosotros?' },
          ],
          right: [
            { id: 'q1', text: 'Porque en mi puesto actual ya he aprendido lo que podía aprender.' },
            {
              id: 'q2',
              text: 'Me cuesta delegar; llevo un tiempo trabajándolo con listas compartidas.',
            },
            { id: 'q3', text: 'Me gustaría seguir en este sector y llevar un equipo pequeño.' },
            { id: 'q4', text: 'Sí: ¿cómo está organizado el turno de los sábados?' },
          ],
          solution: [
            { leftId: 'p1', rightId: 'q1' },
            { leftId: 'p2', rightId: 'q2' },
            { leftId: 'p3', rightId: 'q3' },
            { leftId: 'p4', rightId: 'q4' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – Arbeitsbedingungen beschreiben und vergleichen.
  {
    order: 4,
    title: 'Condiciones de trabajo',
    subtitle: 'Comparar y valorar',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'esi1-p4-h1', type: 'HEADING', level: 1, text: 'Condiciones de trabajo' },
        {
          id: 'esi1-p4-intro',
          type: 'TEXT',
          text: 'Un trabajo no se juzga solo por el sueldo. El horario, la distancia, el ambiente y lo que uno aprende pesan tanto o más, y para compararlos hace falta el mecanismo de la comparación, que en español es bastante regular salvo en cuatro o cinco palabras.',
        },
        {
          id: 'esi1-p4-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: cómo es un trabajo',
          items: [
            {
              term: 'el horario',
              translations: { en: 'working hours, schedule', de: 'die Arbeitszeit' },
            },
            {
              term: 'el horario partido',
              translations: { en: 'split shift', de: 'geteilte Arbeitszeit' },
              example: 'De 9 a 14 y de 17 a 20: horario partido.',
            },
            {
              term: 'las horas extra',
              translations: { en: 'overtime', de: 'die Überstunden' },
            },
            {
              term: 'el ambiente de trabajo',
              translations: { en: 'working atmosphere', de: 'das Betriebsklima' },
            },
            {
              term: 'el compañero, la compañera',
              translations: { en: 'colleague', de: 'der Kollege, die Kollegin' },
            },
            {
              term: 'el jefe, la jefa',
              translations: { en: 'boss', de: 'der Chef, die Chefin' },
            },
            {
              term: 'las vacaciones',
              translations: { en: 'holidays', de: 'der Urlaub' },
              example: 'Tenemos veintidós días de vacaciones.',
            },
            {
              term: 'la baja',
              translations: { en: 'sick leave', de: 'die Krankschreibung' },
              example: 'Está de baja desde el martes.',
            },
            {
              term: 'el teletrabajo',
              translations: { en: 'remote work', de: 'die Telearbeit' },
            },
            {
              term: 'estar quemado',
              translations: { en: 'to be burnt out', de: 'ausgebrannt sein' },
            },
            {
              term: 'conciliar',
              translations: {
                en: 'to balance work and family',
                de: 'Beruf und Familie vereinbaren',
              },
              example: 'Con ese horario es difícil conciliar.',
            },
            {
              term: 'el desplazamiento',
              translations: { en: 'commute', de: 'der Arbeitsweg' },
            },
          ],
        },
        {
          id: 'esi1-p4-info-comparativos',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Comparar',
          text: 'La comparación se hace con más/menos… que. Delante de un número, «que» se cambia por «de»: gano más de mil euros. Y hay cuatro comparativos irregulares que no admiten «más» delante: mejor, peor, mayor, menor.',
          table: {
            headers: ['Tipo', 'Fórmula', 'Ejemplo'],
            rows: [
              ['superioridad', 'más + adj. + que', 'Este puesto es más tranquilo que el otro.'],
              ['inferioridad', 'menos + adj. + que', 'Está menos lejos de casa.'],
              ['igualdad', 'tan + adj. + como', 'El sueldo es tan bajo como allí.'],
              ['con números', 'más/menos + de', 'Trabajo menos de cuarenta horas.'],
              [
                'irregulares',
                'mejor, peor, mayor, menor',
                'El ambiente es mejor que en mi empresa.',
              ],
            ],
          },
        },
        {
          id: 'esi1-p4-choice-comparativo',
          type: 'CHOICE',
          instruction: 'Marque todas las frases correctas.',
          options: [
            { id: 'd1', text: 'El horario es más malo que el del año pasado.' },
            { id: 'd2', text: 'El horario es peor que el del año pasado.' },
            { id: 'd3', text: 'Gano más que mil quinientos euros.' },
            { id: 'd4', text: 'Gano más de mil quinientos euros.' },
          ],
          multiple: true,
          solution: ['d2', 'd4'],
          explanation:
            '«Malo» tiene comparativo propio: peor. Y delante de una cantidad se usa «de», no «que». Las otras dos formas son los dos errores más frecuentes de este apartado.',
        },
        {
          id: 'esi1-p4-texto-dos',
          type: 'TEXT',
          text: 'Lea las dos ofertas y compárelas. OFERTA A: administrativo en una gestoría del centro; 1 500 € brutos; horario partido de 9 a 14 y de 16 a 19; quince minutos andando desde casa; contrato temporal de seis meses. OFERTA B: administrativo en un polígono a 25 km; 1 750 € brutos; jornada continua de 8 a 15; contrato indefinido; dos días de teletrabajo a la semana.',
        },
        {
          id: 'esi1-p4-cloze',
          type: 'CLOZE',
          instruction: 'Compare las dos ofertas completando el texto.',
          wordBank: ['más', 'menos', 'mejor', 'tan', 'de'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'La oferta B paga ' },
            { kind: 'GAP', gapId: 'c1', solution: ['más'], width: 6 },
            { kind: 'TEXT', text: ' que la A y ofrece un contrato ' },
            { kind: 'GAP', gapId: 'c2', solution: ['mejor'], width: 7 },
            {
              kind: 'TEXT',
              text: ', porque es indefinido. Ahora bien, el desplazamiento es mucho ',
            },
            { kind: 'GAP', gapId: 'c3', solution: ['menos'], width: 7 },
            { kind: 'TEXT', text: ' cómodo: está a más ' },
            { kind: 'GAP', gapId: 'c4', solution: ['de'], width: 4 },
            { kind: 'TEXT', text: ' veinte kilómetros. La jornada continua no es ' },
            { kind: 'GAP', gapId: 'c5', solution: ['tan'], width: 5 },
            { kind: 'TEXT', text: ' larga como el horario partido de la oferta A.' },
          ],
        },
        {
          id: 'esi1-p4-info-valorar',
          type: 'INFO',
          variant: 'TIP',
          title: 'Valorar sin decir solo «bien» o «mal»',
          text: 'Estas expresiones permiten opinar sobre un trabajo con algo más de precisión, y todas ellas son de uso corriente en una conversación con compañeros.',
          table: {
            headers: ['Lo que se quiere decir', 'Expresión'],
            rows: [
              ['compensa', 'Merece la pena por el horario.'],
              ['no compensa', 'No me compensa por tan poco dinero.'],
              ['lo peor', 'Lo peor es el desplazamiento.'],
              ['lo bueno', 'Lo bueno es que se sale a las tres.'],
              ['es soportable', 'Se lleva bien. / Es llevadero.'],
              ['es agotador', 'Acabo reventado. / Es agotador.'],
            ],
          },
        },
        {
          id: 'esi1-p4-writing',
          type: 'WRITING',
          instruction: 'Compare dos trabajos.',
          prompt:
            'Un amigo duda entre las dos ofertas de esta página y le pide consejo por mensaje. Escriba de 80 a 120 palabras comparándolas y recomendando una. Use al menos cuatro comparaciones (una de igualdad y una con «de» delante de número), un comparativo irregular y una expresión de las del recuadro «Valorar». Diga claramente cuál elegiría y por qué.',
          minWords: 80,
          maxWords: 130,
          aiFeedback: true,
          sampleAnswer:
            'Yo me quedaría con la B, aunque entiendo tus dudas. Paga más de doscientos euros más al mes y el contrato es mucho mejor, porque es indefinido y el de la otra dura solo seis meses. El horario tampoco es tan malo como parece: saliendo a las tres tienes la tarde entera, y con dos días de teletrabajo no vas al polígono más de tres veces por semana.\n\nLo peor es el desplazamiento, eso está claro, y si no tienes coche la cosa cambia. Pero un horario partido hasta las siete es agotador y además no te deja conciliar nada. A mí no me compensaría por quince minutos andando.',
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – höfliche Bitte und E-Mail im Büroalltag.
  {
    order: 5,
    title: 'En la oficina',
    subtitle: 'Pedir las cosas con tacto',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'esi1-p5-h1', type: 'HEADING', level: 1, text: 'En la oficina' },
        {
          id: 'esi1-p5-intro',
          type: 'TEXT',
          text: 'En el trabajo casi todo lo que se dice es una petición: que alguien envíe algo, que cambie una fecha, que revise un documento. En español, la diferencia entre una petición que sienta bien y otra que sienta mal casi nunca está en el «por favor». Está en el tiempo verbal.',
        },
        {
          id: 'esi1-p5-info-peticiones',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Del imperativo al condicional',
          text: 'Cuanto más lejos se pone la petición del presente, más suave suena. El imperativo ordena; el presente pregunta; el condicional propone y deja salida. En un correo a alguien de fuera o a un superior, use el condicional; entre compañeros de confianza, el presente basta.',
          table: {
            headers: ['Forma', 'Ejemplo', 'Cuándo'],
            rows: [
              ['imperativo', 'Mándame el archivo.', 'confianza, urgencia'],
              ['presente + poder', '¿Me mandas el archivo?', 'compañeros'],
              ['condicional + poder', '¿Me podrías mandar el archivo?', 'neutro, casi siempre'],
              ['condicional formal', '¿Podría usted enviarme el archivo?', 'jefes, clientes'],
              ['agradecer por adelantado', 'Le agradecería que me lo enviara hoy.', 'muy formal'],
            ],
          },
        },
        {
          id: 'esi1-p5-info-correo',
          type: 'INFO',
          variant: 'TIP',
          title: 'El correo de trabajo',
          text: 'Un correo de trabajo en español tiene cuatro partes y rara vez pasa de ocho líneas. El asunto decide si se abre: escriba en él la acción y la fecha, no «consulta» ni «urgente».',
          table: {
            headers: ['Parte', 'Ejemplo'],
            rows: [
              ['asunto', 'Factura de septiembre: falta un concepto'],
              ['saludo', 'Buenos días, Marta:'],
              ['motivo', 'Te escribo por la factura que enviamos el día 3.'],
              ['petición + plazo', '¿Podrías revisarla antes del viernes?'],
              ['cierre', 'Muchas gracias. Un saludo,'],
            ],
          },
        },
        {
          id: 'esi1-p5-dialogo',
          type: 'DIALOGUE',
          title: 'Un cambio de turno',
          audioUrl: 'placeholder://es-b1-oficina',
          lines: [
            {
              speaker: 'Nerea',
              text: 'Oye, Brais, ¿tienes un momento? Quería pedirte una cosa.',
            },
            {
              speaker: 'Brais',
              text: 'Dime.',
            },
            {
              speaker: 'Nerea',
              text: '¿Te importaría cambiarme el turno del sábado? Es que tengo la boda de mi hermana.',
            },
            {
              speaker: 'Brais',
              text: 'A ver… el sábado había quedado, pero puedo moverlo. ¿Tú me cubres el jueves siguiente?',
            },
            {
              speaker: 'Nerea',
              text: 'Claro, sin problema. Te lo agradezco mucho, de verdad.',
            },
            {
              speaker: 'Brais',
              text: 'Nada. Pero díselo hoy a Ferreiro, que si se entera el viernes se enfada.',
            },
            {
              speaker: 'Nerea',
              text: 'Ahora mismo le escribo. ¿Le pongo que fue idea tuya?',
            },
            {
              speaker: 'Brais',
              text: 'Ni se te ocurra.',
            },
          ],
        },
        {
          id: 'esi1-p5-choice-registro',
          type: 'CHOICE',
          instruction: 'Elija la petición adecuada.',
          question:
            'Escribe usted a una clienta a la que no conoce para pedirle un documento que falta.',
          options: [
            { id: 'e1', text: 'Mándeme el certificado hoy mismo.' },
            { id: 'e2', text: '¿Me mandas el certificado?' },
            { id: 'e3', text: '¿Podría enviarme el certificado antes del viernes?' },
            { id: 'e4', text: 'Necesito el certificado ya, que llevo dos semanas esperando.' },
          ],
          multiple: false,
          solution: ['e3'],
          explanation:
            'El condicional con usted es el registro que corresponde a alguien de fuera, y el plazo concreto evita tener que volver a escribir. e1 ordena, e2 tutea a una desconocida y e4 mezcla la petición con un reproche.',
        },
        {
          id: 'esi1-p5-cloze',
          type: 'CLOZE',
          instruction: 'Complete el correo con las expresiones del recuadro.',
          wordBank: ['Buenos días', 'Te escribo', 'Podrías', 'antes del', 'Un saludo'],
          caseSensitive: false,
          segments: [
            { kind: 'GAP', gapId: 'c1', solution: ['Buenos días'], width: 12 },
            { kind: 'TEXT', text: ', Marta:\n\n' },
            { kind: 'GAP', gapId: 'c2', solution: ['Te escribo'], width: 11 },
            {
              kind: 'TEXT',
              text: ' por el pedido de la semana pasada: han llegado veinte ejemplares en vez de treinta. ¿',
            },
            { kind: 'GAP', gapId: 'c3', solution: ['Podrías'], width: 8 },
            { kind: 'TEXT', text: ' comprobarlo con el proveedor ' },
            { kind: 'GAP', gapId: 'c4', solution: ['antes del'], width: 10 },
            { kind: 'TEXT', text: ' jueves? La presentación es el sábado.\n\nMuchas gracias.\n' },
            { kind: 'GAP', gapId: 'c5', solution: ['Un saludo'], width: 10 },
            { kind: 'TEXT', text: ',\nBrais' },
          ],
        },
        {
          id: 'esi1-p5-match-situaciones',
          type: 'MATCHING',
          instruction: 'Relacione cada situación con la fórmula más adecuada.',
          left: [
            { id: 'f1', text: 'Pedir un favor grande a un compañero de confianza' },
            { id: 'f2', text: 'Rechazar una petición sin cerrar la puerta' },
            { id: 'f3', text: 'Insistir por segunda vez, con educación' },
            { id: 'f4', text: 'Avisar de que algo va a llegar tarde' },
          ],
          right: [
            { id: 'g1', text: '¿Te importaría cubrirme el sábado? Te lo devuelvo el jueves.' },
            { id: 'g2', text: 'Esta semana me es imposible; si quieres, lo vemos el lunes.' },
            { id: 'g3', text: 'Perdona que insista, pero necesito confirmarlo hoy.' },
            { id: 'g4', text: 'Te aviso de que el informe no estará hasta el martes.' },
          ],
          solution: [
            { leftId: 'f1', rightId: 'g1' },
            { leftId: 'f2', rightId: 'g2' },
            { leftId: 'f3', rightId: 'g3' },
            { leftId: 'f4', rightId: 'g4' },
          ],
        },
        {
          id: 'esi1-p5-writing',
          type: 'WRITING',
          instruction: 'Escriba un correo de trabajo.',
          prompt:
            'Usted no puede entregar a tiempo un trabajo que había prometido para el viernes, porque le falta un dato que depende de otra persona. Escriba un correo de 70 a 110 palabras a su jefa: asunto, saludo, motivo, nueva fecha y una petición concreta. Use el tratamiento de usted y el condicional al menos una vez. No se disculpe más de una vez.',
          minWords: 70,
          maxWords: 120,
          aiFeedback: true,
          sampleAnswer:
            'Asunto: Informe de ventas — entrega el martes 14\n\nBuenos días, señora Ferreiro:\n\nLe escribo por el informe de ventas que habíamos fijado para este viernes. Me faltan las cifras de la tienda de Pontevedra, que pedí el lunes y todavía no he recibido; sin ellas, el resumen del trimestre quedaría incompleto.\n\nSiento el retraso. Podría tenerlo terminado el martes 14 por la mañana, siempre que los datos lleguen antes del lunes. ¿Podría usted escribir a Pontevedra desde dirección? Creo que así contestarían más rápido que a mí.\n\nMuchas gracias.\n\nUn saludo,\nBrais Couto',
        },
      ],
    },
  },
];
