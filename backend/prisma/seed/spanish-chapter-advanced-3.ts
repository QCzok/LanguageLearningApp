import type { UnitSeed } from './chapter-beginner-1';

/**
 * Spanisch, Advanced, Kapitel 3: „Investigación y ética“
 *
 * Fünf Seiten. Wissenschaftliche Aussagen leben von ihrer Vorsicht: Wer
 * „reduziert“ sagt, wo die Studie „könnte reduzieren“ sagt, hat sie falsch
 * wiedergegeben. Das Kapitel übt deshalb weniger Fachwörter als die
 * sprachlichen Mittel, mit denen man Gewissheit abstuft und ein Dilemma
 * darstellt, ohne es vorab zu entscheiden.
 *
 * Aufbau: Seite 1 legt den Wortschatz der Methode, Seite 2 trennt
 * Korrelation und Kausalität und führt die Abschwächung ein (condicional de
 * rumor, „no cabe descartar“), Seite 3 stellt ein Dilemma mit konzessiven
 * Fügungen dar, Seite 4 behandelt die Prinzipien der Forschungsethik,
 * Seite 5 die schriftliche Abwägung.
 *
 * Die Studien und Zahlen sind erfunden und als solche erkennbar gehalten.
 * Sämtliche Texte sind eigenständig verfasst.
 */
const v = 1;

export const SPANISH_ADVANCED_3_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – das Vokabular der Methode.
  {
    order: 1,
    title: 'Cómo se sabe lo que se sabe',
    subtitle: 'Der Wortschatz der Methode',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'esa3-p1-h1', type: 'HEADING', level: 1, text: 'Cómo se sabe lo que se sabe' },
        {
          id: 'esa3-p1-intro',
          type: 'TEXT',
          text: 'Cada semana aparece un titular que asegura que el café alarga la vida o que la acorta. Detrás de cada uno hay un estudio con un diseño concreto, una muestra de cierto tamaño y unas limitaciones que el titular casi nunca menciona. Para juzgar la noticia hay que saber leer el estudio, y para leer el estudio hay que conocer el puñado de palabras con las que la ciencia describe su propio método.',
        },
        {
          id: 'esa3-p1-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: el método',
          items: [
            { term: 'la hipótesis', translations: { en: 'hypothesis', de: 'die Hypothese' } },
            {
              term: 'la muestra',
              translations: { en: 'sample', de: 'die Stichprobe' },
              example: 'Una muestra de 40 personas no basta para generalizar.',
            },
            {
              term: 'el sesgo',
              translations: { en: 'bias', de: 'die Verzerrung' },
              example: 'Los voluntarios introducen un sesgo de selección.',
            },
            { term: 'la variable', translations: { en: 'variable', de: 'die Variable' } },
            { term: 'el grupo de control', translations: { en: 'control group', de: 'die Kontrollgruppe' } },
            {
              term: 'el ensayo clínico aleatorizado',
              translations: { en: 'randomised controlled trial', de: 'die randomisierte klinische Studie' },
            },
            { term: 'la correlación', translations: { en: 'correlation', de: 'die Korrelation' } },
            { term: 'la causalidad', translations: { en: 'causation', de: 'die Kausalität' } },
            {
              term: 'replicar',
              translations: { en: 'to replicate', de: 'replizieren, wiederholen' },
              example: 'Otros equipos no han logrado replicar el resultado.',
            },
            { term: 'la revisión por pares', translations: { en: 'peer review', de: 'das Peer-Review' } },
            { term: 'el hallazgo', translations: { en: 'finding', de: 'der Befund' } },
            { term: 'la significación estadística', translations: { en: 'statistical significance', de: 'die statistische Signifikanz' } },
          ],
        },
        {
          id: 'esa3-p1-info-diseños',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Del indicio a la prueba',
          text: 'No todos los estudios valen lo mismo. Un estudio observacional mira lo que ya ocurre y puede descubrir asociaciones, pero no demostrar causas. Un ensayo aleatorizado reparte a los participantes al azar entre un grupo que recibe el tratamiento y un grupo de control, y así neutraliza las demás diferencias. Por encima de ambos está el metaanálisis, que reúne los resultados de muchos estudios.',
          table: {
            headers: ['Diseño', 'Qué puede mostrar', 'Límite principal'],
            rows: [
              ['estudio de caso', 'que algo es posible', 'no permite generalizar'],
              ['estudio observacional', 'una asociación', 'no distingue causa de coincidencia'],
              ['ensayo aleatorizado', 'una relación causal', 'caro, a veces no es ético'],
              ['metaanálisis', 'el peso del conjunto', 'depende de la calidad de lo que reúne'],
            ],
          },
        },
        {
          id: 'esa3-p1-match',
          type: 'MATCHING',
          instruction: 'Relacione cada problema con el término que lo nombra.',
          left: [
            { id: 'a1', text: 'Solo participan personas que ya se interesan por el deporte.' },
            { id: 'a2', text: 'Otro laboratorio repite el experimento y no obtiene lo mismo.' },
            { id: 'a3', text: 'Nadie sabe si el efecto se debe al fármaco o a la expectativa de curarse.' },
            { id: 'a4', text: 'Con doce participantes, cualquier diferencia puede ser casual.' },
          ],
          right: [
            { id: 'b1', text: 'sesgo de selección' },
            { id: 'b2', text: 'falta de replicación' },
            { id: 'b3', text: 'ausencia de grupo de control con placebo' },
            { id: 'b4', text: 'muestra demasiado pequeña' },
          ],
          solution: [
            { leftId: 'a1', rightId: 'b1' },
            { leftId: 'a2', rightId: 'b2' },
            { leftId: 'a3', rightId: 'b3' },
            { leftId: 'a4', rightId: 'b4' },
          ],
        },
        {
          id: 'esa3-p1-cloze',
          type: 'CLOZE',
          instruction: 'Complete la descripción del estudio.',
          wordBank: ['hipótesis', 'muestra', 'aleatoriamente', 'control', 'hallazgo'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'El equipo partía de la ' },
            { kind: 'GAP', gapId: 'g1', solution: ['hipótesis', 'hipotesis'], width: 10 },
            { kind: 'TEXT', text: ' de que dormir poco empeora la memoria. Reclutó una ' },
            { kind: 'GAP', gapId: 'g2', solution: ['muestra'], width: 8 },
            { kind: 'TEXT', text: ' de 300 estudiantes y los asignó ' },
            { kind: 'GAP', gapId: 'g3', solution: ['aleatoriamente'], width: 15 },
            { kind: 'TEXT', text: ' a dos grupos: uno durmió cinco horas; el grupo de ' },
            { kind: 'GAP', gapId: 'g4', solution: ['control'], width: 8 },
            { kind: 'TEXT', text: ', ocho. El principal ' },
            { kind: 'GAP', gapId: 'g5', solution: ['hallazgo'], width: 9 },
            { kind: 'TEXT', text: ' fue una caída del 20 % en una prueba de recuerdo.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – Korrelation und Kausalität; die Sprache der Vorsicht.
  {
    order: 2,
    title: 'Correlación no es causa',
    subtitle: 'Gewissheit sprachlich abstufen',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'esa3-p2-h1', type: 'HEADING', level: 1, text: 'Correlación no es causa' },
        {
          id: 'esa3-p2-text',
          type: 'TEXT',
          text: 'Un estudio con datos de diez mil adultos encuentra que quienes tienen perro sufren menos infartos. La tentación es inmediata: tener perro protege el corazón. Pero quienes tienen perro caminan más, suelen tener casa con jardín y quizá más ingresos, y cualquiera de esas diferencias podría explicar el resultado. Los autores lo saben, y por eso escriben «la tenencia de perro se asocia con un menor riesgo», no «reduce el riesgo». La diferencia entre ambas frases es exactamente la diferencia entre una correlación y una causa.',
        },
        {
          id: 'esa3-p2-info-cautela',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Graduar la certeza',
          text: 'El español dispone de una escala fina para decir cuánto se sabe. El condicional llamado «de rumor» presenta un dato como no confirmado: «el fármaco reduciría el riesgo». «No cabe descartar que» y «cabe la posibilidad de que» llevan subjuntivo y abren una posibilidad sin afirmarla. «Todo indica que» y «los datos sugieren que» llevan indicativo pero dejan claro que se trata de una inferencia.',
          table: {
            headers: ['Certeza', 'Expresión', 'Modo'],
            rows: [
              ['alta', 'Está demostrado que…', 'indicativo'],
              ['media-alta', 'Todo indica que… / Los datos sugieren que…', 'indicativo'],
              ['media', 'Es posible que… / Cabe la posibilidad de que…', 'subjuntivo'],
              ['baja', 'No cabe descartar que…', 'subjuntivo'],
              ['dato ajeno', 'Según el estudio, el fármaco reduciría…', 'condicional'],
            ],
          },
        },
        {
          id: 'esa3-p2-choice',
          type: 'CHOICE',
          instruction: 'Elija la frase que respeta lo que el estudio puede afirmar.',
          question: 'Un estudio observacional detecta que los niños que desayunan sacan mejores notas. ¿Qué titular es fiel?',
          options: [
            { id: 'c1', text: 'Desayunar mejora las notas escolares.' },
            { id: 'c2', text: 'Los niños que desayunan obtienen mejores notas, según un estudio que no aclara la causa.' },
            { id: 'c3', text: 'Está demostrado que el desayuno es clave para aprobar.' },
            { id: 'c4', text: 'Saltarse el desayuno provoca el fracaso escolar.' },
          ],
          multiple: false,
          solution: ['c2'],
          explanation:
            'Un estudio observacional puede describir una asociación. Las demás opciones afirman una causa: quizá las familias que desayunan juntas tienen también más tiempo para ayudar con los deberes.',
        },
        {
          id: 'esa3-p2-cloze',
          type: 'CLOZE',
          instruction: 'Complete con la forma verbal que corresponde a cada expresión.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Los datos sugieren que el tratamiento ' },
            { kind: 'GAP', gapId: 'm1', solution: ['funciona'], hint: 'funcionar', width: 9 },
            { kind: 'TEXT', text: ' en adultos. No cabe descartar, sin embargo, que el efecto se ' },
            { kind: 'GAP', gapId: 'm2', solution: ['deba'], hint: 'deber', width: 6 },
            { kind: 'TEXT', text: ' en parte al placebo. Según la farmacéutica, el producto ' },
            { kind: 'GAP', gapId: 'm3', solution: ['reduciría'], hint: 'reducir, condicional', width: 10 },
            { kind: 'TEXT', text: ' los síntomas a la mitad, pero es posible que la muestra ' },
            { kind: 'GAP', gapId: 'm4', solution: ['sea'], hint: 'ser', width: 5 },
            { kind: 'TEXT', text: ' demasiado pequeña.' },
          ],
        },
        {
          id: 'esa3-p2-info-terceras',
          type: 'INFO',
          variant: 'TIP',
          title: 'Tres explicaciones antes de hablar de causa',
          text: 'Ante una asociación, conviene repasar tres alternativas. La causalidad inversa: quizá no es que el deporte dé ánimo, sino que quien tiene ánimo hace deporte. La variable de confusión: un tercer factor, como los ingresos, influye en ambas cosas. Y el azar: con suficientes comparaciones, alguna saldrá significativa por pura casualidad.',
        },
        {
          id: 'esa3-p2-match',
          type: 'MATCHING',
          instruction: 'Relacione cada asociación con la explicación alternativa más probable.',
          left: [
            { id: 'e1', text: 'Las personas que van al médico a menudo están más enfermas.' },
            { id: 'e2', text: 'En los meses en que se vende más helado hay más ahogados.' },
            { id: 'e3', text: 'De cien alimentos analizados, uno se asocia con la calvicie.' },
          ],
          right: [
            { id: 'f1', text: 'causalidad inversa: están enfermas y por eso van al médico' },
            { id: 'f2', text: 'variable de confusión: el calor aumenta ambas cosas' },
            { id: 'f3', text: 'azar: entre tantas comparaciones, alguna coincide' },
          ],
          solution: [
            { leftId: 'e1', rightId: 'f1' },
            { leftId: 'e2', rightId: 'f2' },
            { leftId: 'e3', rightId: 'f3' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – ein Dilemma darstellen: Konzessivsätze.
  {
    order: 3,
    title: 'Plantear un dilema',
    subtitle: 'Zwei Seiten, ohne vorab zu entscheiden',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'esa3-p3-h1', type: 'HEADING', level: 1, text: 'Plantear un dilema' },
        {
          id: 'esa3-p3-intro',
          type: 'TEXT',
          text: 'Un dilema no es una pregunta difícil, sino una en la que dos valores legítimos chocan. Un nuevo test genético permite detectar a tiempo una enfermedad grave, pero también revela a los familiares información que nunca pidieron. Presentarlo con honradez exige dar a cada lado su mejor argumento antes de inclinarse por uno. La herramienta gramatical para ello son las construcciones concesivas.',
        },
        {
          id: 'esa3-p3-info-concesivas',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Aunque, aun cuando, por mucho que',
          text: 'Con «aunque» el modo cambia el sentido. En indicativo, se reconoce un hecho: «aunque el test es fiable» (lo es). En subjuntivo, se concede algo sin discutirlo o como hipótesis: «aunque el test sea fiable» (demos por hecho que lo es; da igual). «Aun cuando» equivale a «incluso si». «Por mucho que» y «por más que» llevan subjuntivo cuando el hablante no quiere comprometerse con la cantidad. «Si bien» es propio de la escritura y va siempre con indicativo.',
          table: {
            headers: ['Conector', 'Ejemplo', 'Matiz'],
            rows: [
              ['aunque + indicativo', 'Aunque el test es fiable, plantea riesgos.', 'hecho reconocido'],
              ['aunque + subjuntivo', 'Aunque el test sea fiable, plantea riesgos.', 'se concede sin discutir'],
              ['aun cuando', 'Aun cuando el paciente consienta, la familia no lo ha hecho.', 'incluso si'],
              ['por mucho que', 'Por mucho que mejore la técnica, el dilema persiste.', 'intensidad irrelevante'],
              ['si bien', 'Si bien el coste ha bajado, sigue siendo alto.', 'culto, siempre indicativo'],
            ],
          },
        },
        {
          id: 'esa3-p3-choice',
          type: 'CHOICE',
          instruction: 'Elija la frase que corresponde a la intención descrita.',
          question: 'La autora quiere decir: «No discuto si el test es barato o no; en cualquier caso, hay un problema ético».',
          options: [
            { id: 'q1', text: 'Aunque el test es barato, hay un problema ético.' },
            { id: 'q2', text: 'Aunque el test sea barato, hay un problema ético.' },
            { id: 'q3', text: 'Como el test es barato, hay un problema ético.' },
            { id: 'q4', text: 'Si bien el test sea barato, hay un problema ético.' },
          ],
          multiple: false,
          solution: ['q2'],
          explanation:
            'El subjuntivo tras «aunque» concede sin comprometerse con la verdad del dato. El indicativo lo afirmaría como un hecho. «Si bien» no admite subjuntivo, y «como» expresa causa, no concesión.',
        },
        {
          id: 'esa3-p3-cloze',
          type: 'CLOZE',
          instruction: 'Complete el párrafo con el verbo en el modo adecuado.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Si bien el test ' },
            { kind: 'GAP', gapId: 'n1', solution: ['detecta'], hint: 'detectar', width: 8 },
            { kind: 'TEXT', text: ' la enfermedad con años de antelación, su uso plantea dudas. Por mucho que la técnica ' },
            { kind: 'GAP', gapId: 'n2', solution: ['avance'], hint: 'avanzar', width: 7 },
            { kind: 'TEXT', text: ', el dilema seguirá ahí: aun cuando el paciente ' },
            { kind: 'GAP', gapId: 'n3', solution: ['quiera'], hint: 'querer', width: 7 },
            { kind: 'TEXT', text: ' conocer su riesgo, sus hermanos quizá prefieran no saberlo.' },
          ],
        },
        {
          id: 'esa3-p3-info-estructura',
          type: 'INFO',
          variant: 'TIP',
          title: 'El orden de un dilema bien planteado',
          text: 'Primero se describe la situación sin adjetivos. Después se nombran los dos valores en conflicto —por ejemplo, el derecho a saber y el derecho a no saber—. A continuación se da a cada uno su mejor argumento. Solo al final se propone una salida, y se reconoce lo que esa salida sacrifica.',
        },
        {
          id: 'esa3-p3-ordering',
          type: 'ORDERING',
          instruction: 'Ordene las frases para plantear el dilema correctamente.',
          items: [
            { id: 'o1', text: 'Un nuevo test detecta el riesgo de una enfermedad hereditaria grave.' },
            { id: 'o2', text: 'Chocan aquí el derecho a saber y el derecho a no saber.' },
            { id: 'o3', text: 'Por un lado, conocer el riesgo permite adoptar medidas preventivas.' },
            { id: 'o4', text: 'Por otro, el resultado afecta a familiares que no han dado su consentimiento.' },
            { id: 'o5', text: 'Una salida razonable sería ofrecer asesoramiento genético antes de comunicar el resultado a nadie más.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5'],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – Forschungsethik: Prinzipien, Einwilligung, Daten.
  {
    order: 4,
    title: 'Principios de la ética de la investigación',
    subtitle: 'Einwilligung, Nutzen, Gerechtigkeit',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'esa3-p4-h1', type: 'HEADING', level: 1, text: 'Principios de la ética de la investigación' },
        {
          id: 'esa3-p4-intro',
          type: 'TEXT',
          text: 'La ética de la investigación con personas nació de sus abusos. Tras los experimentos médicos de la Segunda Guerra Mundial y otros casos posteriores, la comunidad científica fijó unos principios que hoy aplica cualquier comité de ética antes de autorizar un estudio. Conocerlos da un vocabulario común para discutir casos concretos.',
        },
        {
          id: 'esa3-p4-info-principios',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Cuatro principios',
          text: 'Suelen resumirse en cuatro. La autonomía exige respetar la decisión informada de cada participante. La beneficencia obliga a buscar el bien de las personas; la no maleficencia, a no causarles daño. La justicia pide que cargas y beneficios se repartan con equidad: no se puede experimentar siempre con los más vulnerables para beneficiar a los demás.',
          table: {
            headers: ['Principio', 'Exige', 'Se vulnera si…'],
            rows: [
              ['autonomía', 'consentimiento informado', 'se oculta el objetivo del estudio'],
              ['beneficencia', 'buscar un beneficio real', 'el estudio no puede aportar nada útil'],
              ['no maleficencia', 'minimizar riesgos', 'se expone a daños evitables'],
              ['justicia', 'reparto equitativo', 'solo participan personas sin alternativa'],
            ],
          },
        },
        {
          id: 'esa3-p4-match',
          type: 'MATCHING',
          instruction: 'Relacione cada caso con el principio que se vulnera.',
          left: [
            { id: 'p1', text: 'Se prueba un fármaco solo en presos, a cambio de reducir su condena.' },
            { id: 'p2', text: 'Los participantes firman un formulario en un idioma que no entienden.' },
            { id: 'p3', text: 'Se mantiene el placebo a pacientes graves aunque ya existe un tratamiento eficaz.' },
            { id: 'p4', text: 'Se hace un estudio tan pequeño que no podrá sacar ninguna conclusión.' },
          ],
          right: [
            { id: 'q1', text: 'justicia' },
            { id: 'q2', text: 'autonomía' },
            { id: 'q3', text: 'no maleficencia' },
            { id: 'q4', text: 'beneficencia' },
          ],
          solution: [
            { leftId: 'p1', rightId: 'q1' },
            { leftId: 'p2', rightId: 'q2' },
            { leftId: 'p3', rightId: 'q3' },
            { leftId: 'p4', rightId: 'q4' },
          ],
        },
        {
          id: 'esa3-p4-info-consentimiento',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Qué hace válido un consentimiento',
          text: 'Firmar no basta. El consentimiento informado es válido cuando la persona ha recibido información comprensible sobre objetivos, riesgos y alternativas; cuando decide sin presión; y cuando sabe que puede retirarse en cualquier momento sin consecuencias. Los formularios suelen redactarse en pasiva refleja e impersonal: «se garantiza la confidencialidad», «se le informará de cualquier cambio».',
        },
        {
          id: 'esa3-p4-cloze',
          type: 'CLOZE',
          instruction: 'Complete el formulario de consentimiento.',
          wordBank: ['voluntaria', 'retirarse', 'garantiza', 'riesgos', 'anonimizados'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Su participación es ' },
            { kind: 'GAP', gapId: 'k1', solution: ['voluntaria'], width: 11 },
            { kind: 'TEXT', text: '. Puede ' },
            { kind: 'GAP', gapId: 'k2', solution: ['retirarse'], width: 10 },
            { kind: 'TEXT', text: ' del estudio en cualquier momento sin dar explicaciones. Se le han explicado los posibles ' },
            { kind: 'GAP', gapId: 'k3', solution: ['riesgos'], width: 8 },
            { kind: 'TEXT', text: ' y beneficios. Se ' },
            { kind: 'GAP', gapId: 'k4', solution: ['garantiza'], width: 10 },
            { kind: 'TEXT', text: ' la confidencialidad: los datos se tratarán ' },
            { kind: 'GAP', gapId: 'k5', solution: ['anonimizados'], width: 13 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'esa3-p4-choice',
          type: 'CHOICE',
          instruction: 'Elija la respuesta correcta.',
          question: 'Una participante quiere abandonar un ensayo a mitad. El equipo le dice que, si lo hace, perderá el acceso gratuito a su médico. ¿Qué ocurre desde el punto de vista ético?',
          options: [
            { id: 'r1', text: 'Nada: ya firmó el consentimiento al principio.' },
            { id: 'r2', text: 'Se vulnera la autonomía, porque retirarse debe ser posible sin consecuencias.' },
            { id: 'r3', text: 'Es aceptable si el ensayo es muy importante.' },
            { id: 'r4', text: 'Es un problema de justicia, pero no de autonomía.' },
          ],
          multiple: false,
          solution: ['r2'],
          explanation:
            'El consentimiento no es un contrato que obligue a seguir: puede revocarse en cualquier momento. Una penalización por retirarse lo convierte en una decisión bajo presión.',
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – eine Abwägung schreiben; Wiederholung.
  {
    order: 5,
    title: 'Sopesar y concluir',
    subtitle: 'Eine Abwägung begründen',
    estimatedMinutes: 32,
    content: {
      version: v,
      blocks: [
        { id: 'esa3-p5-h1', type: 'HEADING', level: 1, text: 'Sopesar y concluir' },
        {
          id: 'esa3-p5-intro',
          type: 'TEXT',
          text: 'La conclusión de una ponderación —así se llama, en el lenguaje jurídico y filosófico, el acto de sopesar valores— no consiste en decir quién tiene razón. Consiste en explicar por qué, en este caso concreto, un valor debe pesar más que el otro, y bajo qué condiciones esa respuesta cambiaría. Una conclusión que no reconoce lo que cuesta no ha ponderado nada.',
        },
        {
          id: 'esa3-p5-info-formulas',
          type: 'INFO',
          variant: 'TIP',
          title: 'Fórmulas para ponderar',
          text: 'Estas expresiones ordenan el razonamiento. Varias de ellas exigen subjuntivo porque presentan condiciones o valoraciones, no hechos.',
          table: {
            headers: ['Función', 'Expresión'],
            rows: [
              ['pesar un valor', 'En este caso debe prevalecer…'],
              ['condicionar', 'siempre y cuando se garantice que…'],
              ['reconocer el coste', 'Ello supone renunciar a… / a costa de…'],
              ['limitar la conclusión', 'Esta conclusión no sería válida si…'],
              ['concluir', 'En definitiva, / Todo ello lleva a pensar que…'],
            ],
          },
        },
        {
          id: 'esa3-p5-choice',
          type: 'CHOICE',
          instruction: 'Elija la mejor conclusión para una ponderación.',
          question: '¿Qué conclusión pondera de verdad?',
          options: [
            { id: 's1', text: 'En definitiva, la ciencia siempre debe avanzar, cueste lo que cueste.' },
            {
              id: 's2',
              text: 'En este caso debe prevalecer el derecho a no saber, siempre y cuando el paciente pueda compartir el resultado si lo desea; ello supone renunciar a una prevención más amplia.',
            },
            { id: 's3', text: 'Ambas posturas tienen razón y cada uno debe decidir.' },
            { id: 's4', text: 'Es evidente que la privacidad es lo más importante de todo.' },
          ],
          multiple: false,
          solution: ['s2'],
          explanation:
            'La segunda opción decide, condiciona la decisión y nombra lo que se sacrifica. Las otras se limitan a proclamar un valor absoluto o a no decidir.',
        },
        {
          id: 'esa3-p5-cloze',
          type: 'CLOZE',
          instruction: 'Complete el resumen del capítulo.',
          wordBank: ['correlación', 'sesgo', 'descartar', 'aunque', 'autonomía', 'prevalecer'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Una ' },
            { kind: 'GAP', gapId: 'z1', solution: ['correlación', 'correlacion'], width: 12 },
            { kind: 'TEXT', text: ' no demuestra una causa. Si la muestra solo incluye voluntarios motivados, hay un ' },
            { kind: 'GAP', gapId: 'z2', solution: ['sesgo'], width: 7 },
            { kind: 'TEXT', text: ' de selección. «No cabe ' },
            { kind: 'GAP', gapId: 'z3', solution: ['descartar'], width: 10 },
            { kind: 'TEXT', text: ' que» abre una posibilidad remota. Con «' },
            { kind: 'GAP', gapId: 'z4', solution: ['aunque'], width: 8 },
            { kind: 'TEXT', text: '» y subjuntivo se concede sin discutir. El consentimiento informado protege la ' },
            { kind: 'GAP', gapId: 'z5', solution: ['autonomía', 'autonomia'], width: 10 },
            { kind: 'TEXT', text: '. Y ponderar es explicar por qué un valor debe ' },
            { kind: 'GAP', gapId: 'z6', solution: ['prevalecer'], width: 11 },
            { kind: 'TEXT', text: ' en un caso concreto.' },
          ],
        },
        {
          id: 'esa3-p5-writing',
          type: 'WRITING',
          instruction: 'Escriba una ponderación.',
          prompt:
            'Un hospital quiere usar los historiales clínicos de sus pacientes, anonimizados, para entrenar un programa que detecte el cáncer de piel en fotografías. No pedirá permiso uno a uno, porque serían cien mil personas. Escriba un texto de entre 180 y 260 palabras que plantee el dilema, dé a cada lado su mejor argumento y proponga una conclusión condicionada. Use al menos dos construcciones concesivas y una expresión de cautela.',
          minWords: 180,
          maxWords: 270,
          aiFeedback: true,
          sampleAnswer:
            'El proyecto enfrenta dos bienes legítimos: el avance del diagnóstico, que podría salvar vidas, y el control de cada paciente sobre sus propios datos.\n\nA favor del proyecto habla su utilidad. Los datos sugieren que los programas entrenados con muchas imágenes detectan lesiones que el ojo humano pasa por alto, y pedir permiso a cien mil personas haría el estudio inviable. Además, los historiales se anonimizarían antes de usarse.\n\nEn contra habla la autonomía. Aunque los datos estén anonimizados, no cabe descartar que una fotografía de la piel permita identificar a alguien, y los pacientes entregaron su información para ser tratados, no para entrenar un programa. Por mucho que el fin sea bueno, usar datos sin consentimiento sienta un precedente difícil de limitar.\n\nA mi juicio, el proyecto puede justificarse, siempre y cuando se cumplan tres condiciones: que se informe públicamente de él, que cualquier paciente pueda excluir sus datos con un trámite sencillo y que un comité independiente supervise el uso. Ello supone aceptar un conjunto de datos algo menor y un retraso de unos meses. Si bien es un coste real, parece razonable frente a la alternativa.\n\nEsta conclusión no sería válida si el programa se destinara a fines comerciales: en ese caso, el beneficio dejaría de ser común y el argumento de la utilidad perdería su peso.',
        },
      ],
    },
  },
];
