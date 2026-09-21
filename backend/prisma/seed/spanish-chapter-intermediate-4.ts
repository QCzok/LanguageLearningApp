import type { UnitSeed } from './chapter-beginner-1';

/**
 * Spanisch, Intermediate, Kapitel 4: „Relaciones“ (B1, Kapitel 4)
 *
 * Fünf Seiten. Über Gefühle, Streit und Versöhnung sprechen. Grammatisch ist
 * das Kapitel die zweite Hälfte von Kapitel 2: Die Verben der Gefühlsäußerung
 * ziehen den Subjuntivo nach sich, und hier bekommen sie ihre eigene Seite.
 *
 * Aufbau: Seite 1 der Wortschatz der Beziehungen, Seite 2 die Gefühlsverben
 * mit ihrer Konstruktion – me alegra que, me da pena que, me molesta que, und
 * die Unterscheidung von „gustar“-Bau und normalem Bau, an der auf B1 noch
 * viel schiefgeht. Seite 3 schildert einen Konflikt (Vergangenheitszeiten im
 * Dienst der Erzählung, als Vorbereitung auf Kapitel 6), Seite 4 vermittelt
 * und widerspricht höflich, Seite 5 entschuldigt sich und versöhnt.
 *
 * Zum Ton: Das Kapitel bleibt bei alltäglichen Konflikten – Mitbewohner,
 * Kollegen, Geschwister – und gibt keine Beziehungsratschläge. Geübt wird die
 * Sprache, mit der man streitet und sich wieder verträgt.
 *
 * Die Seiten stehen einsprachig spanisch; die Wortschatzlisten führen
 * deutsche und englische Entsprechungen.
 *
 * Sämtliche Texte sind eigenständig verfasst.
 */
const v = 1;

export const SPANISH_INTERMEDIATE_4_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – der Wortschatz der Beziehungen.
  {
    order: 1,
    title: 'La gente de mi vida',
    subtitle: 'Hablar de relaciones',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'esi4-p1-h1', type: 'HEADING', level: 1, text: 'La gente de mi vida' },
        {
          id: 'esi4-p1-image',
          type: 'IMAGE',
          url: 'illustration:portraits',
          alt: 'Varios retratos de personas distintas, uno al lado de otro.',
          caption: 'Cada relación tiene su palabra.',
        },
        {
          id: 'esi4-p1-intro',
          type: 'TEXT',
          text: 'En español hay una diferencia que conviene tener clara desde el principio: «un amigo» no es cualquier conocido. A quien se ve en el trabajo se le llama compañero; a quien se saluda en el portal, vecino; y «amigo» se reserva para bastante menos gente de la que muchas lenguas incluyen bajo esa palabra. Empezar llamando amigo a todo el mundo suena exagerado.',
        },
        {
          id: 'esi4-p1-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: relaciones y trato',
          items: [
            {
              term: 'el conocido, la conocida',
              translations: { en: 'acquaintance', de: 'der/die Bekannte' },
            },
            {
              term: 'el compañero de piso',
              translations: { en: 'flatmate', de: 'der Mitbewohner' },
            },
            {
              term: 'la pareja',
              translations: { en: 'partner; couple', de: 'der Partner; das Paar' },
              example: 'Vive con su pareja desde hace tres años.',
            },
            {
              term: 'llevarse bien / mal con',
              translations: {
                en: 'to get on well / badly with',
                de: 'gut / schlecht auskommen mit',
              },
              example: 'Me llevo muy bien con mi cuñada.',
            },
            {
              term: 'tener confianza con',
              translations: { en: 'to be close to', de: 'ein vertrautes Verhältnis haben zu' },
            },
            {
              term: 'hacerse amigo de',
              translations: { en: 'to become friends with', de: 'sich anfreunden mit' },
            },
            {
              term: 'discutir',
              translations: { en: 'to argue', de: 'sich streiten' },
              example: 'Discutimos por una tontería.',
            },
            {
              term: 'la discusión',
              translations: { en: 'argument', de: 'der Streit' },
            },
            {
              term: 'enfadarse (con)',
              translations: { en: 'to get angry (with)', de: 'sich ärgern, böse werden' },
            },
            {
              term: 'hacer las paces',
              translations: { en: 'to make up', de: 'sich versöhnen' },
            },
            {
              term: 'echar de menos',
              translations: { en: 'to miss', de: 'vermissen' },
              example: 'Echo mucho de menos a mi hermana.',
            },
            {
              term: 'apoyar',
              translations: { en: 'to support', de: 'unterstützen' },
            },
            {
              term: 'contar con alguien',
              translations: { en: 'to count on someone', de: 'sich auf jemanden verlassen' },
            },
            {
              term: 'dar plantón',
              translations: { en: 'to stand someone up', de: 'jemanden versetzen' },
            },
          ],
        },
        {
          id: 'esi4-p1-info-falsos',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Tres parejas que se confunden',
          text: 'Estas tres confusiones aparecen en casi todos los textos de nivel B1 y se arreglan en dos minutos si se ven juntas.',
          table: {
            headers: ['No confunda', 'con', 'Diferencia'],
            rows: [
              ['discutir', 'hablar de', 'discutir es reñir, no «besprechen»'],
              ['enfadarse', 'aburrirse', 'enfadado = wütend, no gelangweilt'],
              ['echar de menos a alguien', 'perder a alguien', 'echar de menos = vermissen'],
              [
                'quiero a mi hermana',
                'quiero a mi vecino',
                'querer a = lieben, cuidado con a quién',
              ],
            ],
          },
        },
        {
          id: 'esi4-p1-choice-vocab',
          type: 'CHOICE',
          instruction: 'Elija la frase adecuada.',
          question: 'Su hermana vive en Canadá desde hace dos años y usted la ve poco.',
          options: [
            { id: 'a1', text: 'Pierdo mucho a mi hermana.' },
            { id: 'a2', text: 'Echo mucho de menos a mi hermana.' },
            { id: 'a3', text: 'Discuto mucho con mi hermana.' },
            { id: 'a4', text: 'Me enfado mucho con mi hermana.' },
          ],
          multiple: false,
          solution: ['a2'],
          explanation:
            '«Echar de menos» es la expresión para la ausencia de alguien. «Perder» se usa para quien ha muerto o para algo que se extravía, y las otras dos hablan de conflicto, no de distancia.',
        },
        {
          id: 'esi4-p1-cloze',
          type: 'CLOZE',
          instruction: 'Complete el texto con las expresiones del recuadro.',
          wordBank: ['me llevo', 'confianza', 'discutimos', 'las paces', 'cuento con'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Con mi compañera de piso ' },
            { kind: 'GAP', gapId: 'c1', solution: ['me llevo'], width: 9 },
            { kind: 'TEXT', text: ' bastante bien. Tenemos mucha ' },
            { kind: 'GAP', gapId: 'c2', solution: ['confianza'], width: 10 },
            { kind: 'TEXT', text: ', así que nos decimos las cosas a la cara. A veces ' },
            { kind: 'GAP', gapId: 'c3', solution: ['discutimos'], width: 11 },
            { kind: 'TEXT', text: ' por la limpieza, pero al día siguiente hacemos ' },
            { kind: 'GAP', gapId: 'c4', solution: ['las paces'], width: 10 },
            { kind: 'TEXT', text: ' y ya está. Para lo importante ' },
            { kind: 'GAP', gapId: 'c5', solution: ['cuento con'], width: 11 },
            { kind: 'TEXT', text: ' ella más que con nadie.' },
          ],
        },
        {
          id: 'esi4-p1-match-definiciones',
          type: 'MATCHING',
          instruction: 'Relacione cada expresión con su significado.',
          left: [
            { id: 'l1', text: 'dar plantón a alguien' },
            { id: 'l2', text: 'llevarse mal con alguien' },
            { id: 'l3', text: 'hacer las paces' },
            { id: 'l4', text: 'tener confianza con alguien' },
          ],
          right: [
            { id: 'r1', text: 'Quedar con alguien y no presentarse.' },
            { id: 'r2', text: 'No entenderse; haber mal ambiente.' },
            { id: 'r3', text: 'Reconciliarse después de una discusión.' },
            { id: 'r4', text: 'Poder decirle cualquier cosa sin que se ofenda.' },
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
  // Seite 2 – die Gefühlsverben und ihr Bau.
  {
    order: 2,
    title: 'Los verbos de sentimiento',
    subtitle: 'Me alegra que, me molesta que',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'esi4-p2-h1', type: 'HEADING', level: 1, text: 'Los verbos de sentimiento' },
        {
          id: 'esi4-p2-intro',
          type: 'TEXT',
          text: 'Los verbos que expresan un sentimiento forman el tercer gran grupo que pide subjuntivo, y el que más se usa en una conversación normal. La regla ya la conoce del capítulo 2; lo nuevo aquí es la construcción, porque muchos de estos verbos funcionan como «gustar» y ponen el sujeto donde no se espera.',
        },
        {
          id: 'esi4-p2-info-gustar',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Dos construcciones, un mismo sentido',
          text: 'En el grupo de «gustar», lo que causa el sentimiento es el sujeto y la persona que lo siente va en pronombre: me, te, le, nos, os, les. En el otro grupo, la persona es el sujeto normal. Las dos frases de cada línea significan lo mismo.',
          table: {
            headers: ['Tipo «gustar»', 'Tipo normal'],
            rows: [
              ['Me alegra que vengas.', 'Me alegro de que vengas.'],
              ['Me molesta que llegues tarde.', 'Me enfado cuando llegas tarde.'],
              ['Me da pena que se vaya.', 'Siento que se vaya.'],
              ['Nos preocupa que no llame.', 'Estamos preocupados por que no llame.'],
              ['Le sorprende que lo sepas.', 'Se sorprende de que lo sepas.'],
            ],
          },
        },
        {
          id: 'esi4-p2-info-lista',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Los que más se usan',
          text: 'Todos llevan subjuntivo cuando el sujeto cambia, e infinitivo cuando no cambia: «me alegra verte» frente a «me alegra que vengas». Fíjese en las preposiciones, que no son opcionales: alegrarse DE, preocuparse POR, hartarse DE.',
          table: {
            headers: ['Sentimiento', 'Verbo', 'Ejemplo'],
            rows: [
              ['alegría', 'alegrar(se de)', 'Me alegro de que estés mejor.'],
              ['pena', 'dar pena, sentir', 'Me da pena que te vayas.'],
              ['enfado', 'molestar, fastidiar', 'Me molesta que no avise.'],
              ['miedo', 'dar miedo, temer', 'Me da miedo que conduzca así.'],
              ['sorpresa', 'sorprender, extrañar', 'Me extraña que no haya llamado.'],
              ['hartazgo', 'hartar(se de)', 'Estoy harto de que lo deje todo tirado.'],
            ],
          },
        },
        {
          id: 'esi4-p2-choice-construccion',
          type: 'CHOICE',
          instruction: 'Marque todas las frases correctas.',
          options: [
            { id: 'b1', text: 'Me alegro de que hayas venido.' },
            { id: 'b2', text: 'Me alegra que hayas venido.' },
            { id: 'b3', text: 'Me alegro que hayas venido.' },
            { id: 'b4', text: 'Me alegra de que hayas venido.' },
          ],
          multiple: true,
          solution: ['b1', 'b2'],
          explanation:
            '«Alegrarse» lleva la preposición «de»; «alegrar» no lleva ninguna. b3 y b4 mezclan las dos construcciones, que es exactamente el error más frecuente de esta página. En la lengua hablada se oye mucho b3, pero conviene escribir b1.',
        },
        {
          id: 'esi4-p2-cloze',
          type: 'CLOZE',
          instruction: 'Complete con subjuntivo o infinitivo, según el sujeto.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Me alegra ' },
            {
              kind: 'GAP',
              gapId: 'c1',
              solution: ['verte'],
              hint: 'ver a ti, mismo sujeto',
              width: 7,
            },
            { kind: 'TEXT', text: ' tan contenta. Me da pena que ' },
            { kind: 'GAP', gapId: 'c2', solution: ['tengas'], hint: 'tener, tú', width: 8 },
            { kind: 'TEXT', text: ' que irte tan pronto. Nos preocupa que tu hermano no nos ' },
            { kind: 'GAP', gapId: 'c3', solution: ['diga'], hint: 'decir, él', width: 7 },
            { kind: 'TEXT', text: ' nada. Y me molesta muchísimo que la gente no ' },
            {
              kind: 'GAP',
              gapId: 'c4',
              solution: ['conteste'],
              hint: 'contestar, ella',
              width: 10,
            },
            { kind: 'TEXT', text: ' a los mensajes. Temo ' },
            { kind: 'GAP', gapId: 'c5', solution: ['llegar'], hint: 'llegar, yo mismo', width: 8 },
            { kind: 'TEXT', text: ' tarde otra vez.' },
          ],
        },
        {
          id: 'esi4-p2-match-reacciones',
          type: 'MATCHING',
          instruction: 'Relacione cada situación con una reacción natural.',
          left: [
            { id: 'p1', text: 'Su hermano no ha llamado en tres semanas.' },
            { id: 'p2', text: 'Una amiga le cuenta que ha encontrado trabajo.' },
            { id: 'p3', text: 'Su compañero de piso deja los platos siempre sin fregar.' },
            { id: 'p4', text: 'Un compañero al que aprecia se cambia de oficina.' },
          ],
          right: [
            { id: 'q1', text: 'Me extraña que no haya dado señales.' },
            { id: 'q2', text: '¡Me alegro muchísimo de que te lo hayan dado!' },
            { id: 'q3', text: 'Estoy harto de que lo deje todo para mí.' },
            { id: 'q4', text: 'Me da pena que te vayas, la verdad.' },
          ],
          solution: [
            { leftId: 'p1', rightId: 'q1' },
            { leftId: 'p2', rightId: 'q2' },
            { leftId: 'p3', rightId: 'q3' },
            { leftId: 'p4', rightId: 'q4' },
          ],
        },
        {
          id: 'esi4-p2-info-intensidad',
          type: 'INFO',
          variant: 'TIP',
          title: 'Subir y bajar la intensidad',
          text: 'El mismo sentimiento se puede decir con más o menos fuerza, y elegir mal el grado es lo que convierte un comentario en una bronca. Estas fórmulas van de menos a más.',
          table: {
            headers: ['Grado', 'Ejemplo'],
            rows: [
              ['suave', 'Me da un poco de rabia que…'],
              ['normal', 'Me molesta que…'],
              ['fuerte', 'Me fastidia bastante que…'],
              ['muy fuerte', 'Estoy harto de que…'],
              ['suavizar cualquiera', 'No me lo tomes a mal, pero…'],
            ],
          },
        },
        {
          id: 'esi4-p2-writing',
          type: 'WRITING',
          instruction: 'Exprese lo que siente.',
          prompt:
            'Escriba de 70 a 110 palabras sobre una persona cercana: qué le gusta de su relación con ella, qué le preocupa y qué le molesta un poco. Use al menos cuatro verbos de sentimiento distintos, uno con infinitivo (mismo sujeto) y tres con subjuntivo, y cuide las preposiciones.',
          minWords: 70,
          maxWords: 120,
          aiFeedback: true,
          sampleAnswer:
            'Con mi hermano mayor me llevo mejor ahora que cuando éramos pequeños. Me alegra que vivamos otra vez en la misma ciudad, porque durante ocho años nos veíamos dos veces al año y la relación se enfrió bastante.\n\nMe preocupa un poco que trabaje tantas horas. Siempre dice que es temporal y ya van tres años; me da miedo que un día se le junte todo. Y, la verdad, me molesta que cancele los planes a última hora, aunque sé que no lo hace por gusto.\n\nAun así, prefiero tenerlo cerca y enfadarme de vez en cuando.',
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – einen Konflikt schildern.
  {
    order: 3,
    title: 'Contar un conflicto',
    subtitle: 'Qué pasó y cómo se llegó ahí',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'esi4-p3-h1', type: 'HEADING', level: 1, text: 'Contar un conflicto' },
        {
          id: 'esi4-p3-intro',
          type: 'TEXT',
          text: 'Cuando alguien cuenta una discusión, mezcla dos cosas: lo que ocurrió y cómo estaban las cosas antes. En español eso se distingue con los dos pasados que ya conoce. El indefinido cuenta lo que pasó, una cosa detrás de otra; el imperfecto describe el fondo: cómo era la situación, qué tiempo hacía, cómo estaba cada uno de ánimo.',
        },
        {
          id: 'esi4-p3-info-pasados',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Los dos pasados en un relato',
          text: 'La prueba práctica: si al contarlo puede preguntarse «¿y luego?», va en indefinido. Si es algo que estaba ahí mientras pasaban las cosas, va en imperfecto. El capítulo 6 vuelve sobre esto con más detalle.',
          table: {
            headers: ['Función', 'Tiempo', 'Ejemplo'],
            rows: [
              ['acción que avanza', 'indefinido', 'Se levantó y se fue.'],
              ['situación de fondo', 'imperfecto', 'Estábamos todos cansados.'],
              ['descripción', 'imperfecto', 'Era tarde y no había nadie.'],
              ['costumbre de entonces', 'imperfecto', 'Discutíamos cada semana.'],
              ['interrupción', 'imperf. + indefinido', 'Cenábamos cuando llamó.'],
            ],
          },
        },
        {
          id: 'esi4-p3-relato',
          type: 'TEXT',
          text: 'Lea este relato y fíjese en los tiempos: «Era viernes y los dos veníamos de una semana horrible. Yo llevaba tres días durmiendo mal y ella acababa de discutir con su jefe. Llegué a casa, vi los platos de tres días en el fregadero y dije algo que no debía decir. Ella contestó, subí la voz y acabamos gritando por una tontería. Al final me fui a dar una vuelta. Cuando volví, ya había fregado los platos, y eso me dio más rabia todavía».',
        },
        {
          id: 'esi4-p3-cloze',
          type: 'CLOZE',
          instruction: 'Complete el relato con indefinido o imperfecto.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Aquel día ' },
            {
              kind: 'GAP',
              gapId: 'c1',
              solution: ['estábamos'],
              hint: 'estar, situación',
              width: 11,
            },
            { kind: 'TEXT', text: ' todos de mal humor. Marta ' },
            { kind: 'GAP', gapId: 'c2', solution: ['llegó'], hint: 'llegar, acción', width: 8 },
            { kind: 'TEXT', text: ' tarde y no ' },
            { kind: 'GAP', gapId: 'c3', solution: ['dijo'], hint: 'decir, acción', width: 7 },
            { kind: 'TEXT', text: ' nada. Yo le ' },
            {
              kind: 'GAP',
              gapId: 'c4',
              solution: ['pregunté'],
              hint: 'preguntar, acción',
              width: 10,
            },
            { kind: 'TEXT', text: ' qué pasaba, pero ella ' },
            { kind: 'GAP', gapId: 'c5', solution: ['quería'], hint: 'querer, estado', width: 8 },
            { kind: 'TEXT', text: ' estar sola.' },
          ],
        },
        {
          id: 'esi4-p3-info-causas',
          type: 'INFO',
          variant: 'TIP',
          title: 'Encadenar causa y consecuencia',
          text: 'Un relato de conflicto necesita explicar por qué se llegó ahí. Estos conectores lo hacen sin que suene a informe, y todos son de uso corriente en una conversación.',
          table: {
            headers: ['Función', 'Expresiones'],
            rows: [
              ['causa', 'porque, como, es que'],
              ['consecuencia', 'así que, por eso, total que'],
              ['añadir peso', 'y encima, para colmo'],
              ['matizar la culpa', 'la verdad es que yo tampoco…'],
              ['cerrar', 'al final, total que'],
            ],
          },
        },
        {
          id: 'esi4-p3-choice-como',
          type: 'CHOICE',
          instruction: 'Elija la frase correcta.',
          question: 'Quiere decir que la causa fue el cansancio, poniendo la causa delante.',
          options: [
            { id: 'c1', text: 'Como estábamos cansados, discutimos por cualquier cosa.' },
            { id: 'c2', text: 'Porque estábamos cansados, discutimos por cualquier cosa.' },
            { id: 'c3', text: 'Es que estábamos cansados, discutimos por cualquier cosa.' },
            { id: 'c4', text: 'Así que estábamos cansados, discutimos por cualquier cosa.' },
          ],
          multiple: false,
          solution: ['c1'],
          explanation:
            '«Como» es el conector que introduce la causa cuando va delante. «Porque» va detrás de la consecuencia, «es que» abre una explicación en respuesta a algo, y «así que» introduce la consecuencia, no la causa.',
        },
        {
          id: 'esi4-p3-ordering',
          type: 'ORDERING',
          instruction: 'Ordene el relato.',
          items: [
            {
              id: 'o1',
              text: 'Aquella semana los dos teníamos mucho trabajo y apenas nos veíamos.',
            },
            { id: 'o2', text: 'El jueves habíamos quedado para cenar fuera.' },
            {
              id: 'o3',
              text: 'Como se le hizo tarde en la oficina, me avisó a las nueve y media.',
            },
            { id: 'o4', text: 'Yo ya llevaba media hora en el restaurante, así que me enfadé.' },
            { id: 'o5', text: 'Total, que acabamos cenando cada uno en su casa.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5'],
        },
        {
          id: 'esi4-p3-writing',
          type: 'WRITING',
          instruction: 'Cuente una discusión.',
          prompt:
            'Cuente en 90 a 140 palabras una discusión pequeña que haya tenido con alguien: un compañero de piso, un familiar, un vecino. Empiece por la situación de fondo (imperfecto), siga con lo que pasó (indefinido) y termine diciendo cómo acabó. Use al menos dos conectores de causa o consecuencia y reconozca al final una parte de responsabilidad propia.',
          minWords: 90,
          maxWords: 150,
          aiFeedback: true,
          sampleAnswer:
            'Vivía entonces con dos compañeros y la cocina era de los tres, aunque limpiaba siempre el mismo. Aquella semana yo estaba de exámenes y dormía fatal.\n\nEl sábado por la mañana bajé a desayunar y me encontré la encimera llena de platos de la cena del viernes, a la que ni siquiera me habían invitado. Como llevaba días aguantándome, no dije nada en el momento; escribí un mensaje al grupo bastante seco y me volví a mi cuarto. Uno de ellos contestó peor todavía y estuvimos dos días sin hablarnos.\n\nAl final lo arreglamos el lunes con un cuadrante en la nevera. La verdad es que yo tampoco lo hice bien: escribir en caliente por el grupo fue lo peor que se me pudo ocurrir.',
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – vermitteln und höflich widersprechen.
  {
    order: 4,
    title: 'No estoy de acuerdo',
    subtitle: 'Discrepar sin romper nada',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'esi4-p4-h1', type: 'HEADING', level: 1, text: 'No estoy de acuerdo' },
        {
          id: 'esi4-p4-intro',
          type: 'TEXT',
          text: 'Decir que no en una lengua extranjera es más difícil que decir que sí, porque el desacuerdo se suaviza con matices y los matices son lo último que se aprende. Un «no estoy de acuerdo» a secas, dicho con acento extranjero y sin fórmula previa, suena mucho más duro de lo que usted pretende. Estas son las piezas que lo amortiguan.',
        },
        {
          id: 'esi4-p4-info-discrepar',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'La escala del desacuerdo',
          text: 'Casi todas empiezan reconociendo algo del otro. Esa primera mitad no es hipocresía: es lo que permite que la segunda se escuche.',
          table: {
            headers: ['Fuerza', 'Fórmula'],
            rows: [
              ['dudar en voz alta', 'No sé, yo lo veo de otra manera.'],
              ['discrepar en parte', 'Sí, pero también es verdad que…'],
              ['conceder y girar', 'Tienes razón en eso, ahora bien…'],
              ['discrepar claro', 'Pues yo no lo veo así.'],
              ['discrepar fuerte', 'No estoy nada de acuerdo.'],
              ['rechazar la forma', 'Así no, por favor.'],
            ],
          },
        },
        {
          id: 'esi4-p4-dialogo',
          type: 'DIALOGUE',
          title: 'El cuadrante de la limpieza',
          audioUrl: 'placeholder://es-b1-conflicto',
          lines: [
            {
              speaker: 'Rocío',
              text: 'Chicos, tenemos que hablar de la cocina. Llevo tres semanas fregando yo sola.',
            },
            {
              speaker: 'Iván',
              text: 'Hombre, tanto como sola… El martes fregué yo.',
            },
            {
              speaker: 'Rocío',
              text: 'Vale, el martes fregaste tú. Pero entiéndeme: de veintiún días, uno.',
            },
            {
              speaker: 'Iván',
              text: 'Ya, en eso llevas razón. Es que llego a las diez y lo último que me apetece es ponerme con los platos.',
            },
            {
              speaker: 'Rocío',
              text: 'Te entiendo, de verdad. A mí me pasa igual los jueves. Pero me molesta que al día siguiente me lo encuentre yo.',
            },
            {
              speaker: 'Nadia',
              text: 'A ver, ¿y si hacemos un cuadrante? Cada uno un día fijo y el que no pueda, que lo cambie con otro.',
            },
            {
              speaker: 'Iván',
              text: 'Por mí bien. Pero que conste que yo el lunes no puedo.',
            },
            {
              speaker: 'Rocío',
              text: 'Anotado. Y si alguien falla dos veces seguidas, lo hablamos y ya está, sin dramas.',
            },
          ],
        },
        {
          id: 'esi4-p4-info-mediar',
          type: 'INFO',
          variant: 'TIP',
          title: 'Mediar entre dos',
          text: 'Nadia hace en el diálogo lo que hace un mediador: no da la razón a nadie y propone algo concreto. Estas cuatro fórmulas son las que sirven para eso.',
          table: {
            headers: ['Para', 'Fórmula'],
            rows: [
              ['bajar la tensión', 'A ver, vamos por partes.'],
              ['reconocer a los dos', 'Los dos tenéis parte de razón.'],
              ['proponer', '¿Y si hacemos…? / ¿Qué os parece si…?'],
              ['cerrar con acuerdo', 'Entonces quedamos en que…'],
            ],
          },
        },
        {
          id: 'esi4-p4-choice-suavizar',
          type: 'CHOICE',
          instruction: 'Elija la manera más eficaz de discrepar con un compañero de trabajo.',
          options: [
            { id: 'd1', text: 'Eso que dices no tiene ningún sentido.' },
            {
              id: 'd2',
              text: 'Entiendo lo que dices, pero a mí me preocupa que nos quedemos sin tiempo.',
            },
            { id: 'd3', text: 'Bueno, tú sabrás.' },
            { id: 'd4', text: 'Siempre igual contigo.' },
          ],
          multiple: false,
          solution: ['d2'],
          explanation:
            'd2 reconoce al otro, expresa el propio sentimiento con subjuntivo y nombra el problema concreto. d1 descalifica, d3 se retira dejando el conflicto abierto y d4 convierte un desacuerdo puntual en un reproche general.',
        },
        {
          id: 'esi4-p4-cloze',
          type: 'CLOZE',
          instruction: 'Complete la conversación con las fórmulas del recuadro.',
          wordBank: ['llevas razón', 'lo veo así', 'Y si', 'quedamos en que', 'Te entiendo'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '▸ Yo creo que deberíamos aplazarlo.\n▸ Pues yo no ' },
            { kind: 'GAP', gapId: 'c1', solution: ['lo veo así'], width: 11 },
            { kind: 'TEXT', text: '. Si lo aplazamos, perdemos el sitio.\n▸ En eso ' },
            { kind: 'GAP', gapId: 'c2', solution: ['llevas razón'], width: 13 },
            { kind: 'TEXT', text: ', no lo había pensado.\n▸ ' },
            { kind: 'GAP', gapId: 'c3', solution: ['Te entiendo'], width: 11 },
            { kind: 'TEXT', text: ', a mí también me da pereza. ¿' },
            { kind: 'GAP', gapId: 'c4', solution: ['Y si'], width: 6 },
            { kind: 'TEXT', text: ' lo dejamos para el jueves?\n▸ Vale. Entonces ' },
            { kind: 'GAP', gapId: 'c5', solution: ['quedamos en que'], width: 16 },
            { kind: 'TEXT', text: ' nos vemos el jueves a las seis.' },
          ],
        },
        {
          id: 'esi4-p4-match-respuestas',
          type: 'MATCHING',
          instruction: 'Relacione cada intervención con lo que hace.',
          left: [
            { id: 'f1', text: 'Vale, el martes fregaste tú. Pero de veintiún días, uno.' },
            { id: 'f2', text: 'A ver, vamos por partes.' },
            { id: 'f3', text: '¿Y si hacemos un cuadrante?' },
            { id: 'f4', text: 'Entonces quedamos en que cada uno tiene su día.' },
          ],
          right: [
            { id: 'g1', text: 'Concede un dato y mantiene el argumento.' },
            { id: 'g2', text: 'Baja la tensión y ordena la discusión.' },
            { id: 'g3', text: 'Propone una solución concreta.' },
            { id: 'g4', text: 'Cierra con un acuerdo explícito.' },
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
  // Seite 5 – sich entschuldigen und versöhnen.
  {
    order: 5,
    title: 'Pedir perdón',
    subtitle: 'Reconocer, explicar, reparar',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'esi4-p5-h1', type: 'HEADING', level: 1, text: 'Pedir perdón' },
        {
          id: 'esi4-p5-intro',
          type: 'TEXT',
          text: 'Una disculpa que funciona tiene tres partes y siempre en el mismo orden: se reconoce lo que se hizo, se explica sin excusarse y se ofrece algo concreto. La que no funciona suele ser la que se salta la primera parte y empieza por la explicación, porque entonces el otro oye una excusa antes que una disculpa.',
        },
        {
          id: 'esi4-p5-info-partes',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Las tres partes',
          text: 'Fíjese en la diferencia entre «siento que» y «siento haber»: con el mismo sujeto se usa infinitivo, como siempre. Y en que «perdona que» lleva subjuntivo.',
          table: {
            headers: ['Parte', 'Fórmulas'],
            rows: [
              ['reconocer', 'Siento haberte hablado así. / Me pasé.'],
              ['reconocer (otro sujeto)', 'Siento que te hayas enterado por otro.'],
              ['explicar sin excusarse', 'No es excusa, pero venía de una semana horrible.'],
              ['reparar', '¿Te parece si lo hablamos con calma el domingo?'],
              ['pedir disculpa directa', 'Perdona que te lo diga tan tarde.'],
            ],
          },
        },
        {
          id: 'esi4-p5-info-excusas',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'La disculpa que no es una disculpa',
          text: 'Estas tres fórmulas parecen disculpas y no lo son: trasladan la responsabilidad a quien se ha ofendido. En español se detectan igual que en cualquier otra lengua, y estropean la conversación en lugar de arreglarla.',
          table: {
            headers: ['No diga', 'Diga'],
            rows: [
              ['Siento que te lo hayas tomado así.', 'Siento haberte hablado de esa manera.'],
              ['Si te ha molestado, lo siento.', 'Te molestó y lo entiendo. Lo siento.'],
              ['Yo solo dije la verdad.', 'Tenía que habértelo dicho de otro modo.'],
            ],
          },
        },
        {
          id: 'esi4-p5-choice-disculpa',
          type: 'CHOICE',
          instruction: 'Elija la disculpa que reconoce de verdad.',
          options: [
            { id: 'h1', text: 'Siento que te hayas puesto así por un comentario.' },
            {
              id: 'h2',
              text: 'Perdona, me pasé el otro día y llevo toda la semana dándole vueltas.',
            },
            { id: 'h3', text: 'Si te ofendí, pues lo siento, pero tú también dijiste lo tuyo.' },
            { id: 'h4', text: 'Ya sabes cómo soy cuando estoy cansado.' },
          ],
          multiple: false,
          solution: ['h2'],
          explanation:
            'Solo h2 reconoce el propio comportamiento sin condiciones ni contraataques. Las otras tres desplazan la responsabilidad a la reacción del otro, a una condición («si») o al carácter de uno.',
        },
        {
          id: 'esi4-p5-cloze',
          type: 'CLOZE',
          instruction: 'Complete con subjuntivo o infinitivo.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Siento ' },
            {
              kind: 'GAP',
              gapId: 'c1',
              solution: ['haberte'],
              hint: 'haber + te, mismo sujeto',
              width: 9,
            },
            { kind: 'TEXT', text: ' contestado así. Perdona que te lo ' },
            { kind: 'GAP', gapId: 'c2', solution: ['diga'], hint: 'decir, yo', width: 7 },
            { kind: 'TEXT', text: ' por mensaje. Me da rabia que ' },
            { kind: 'GAP', gapId: 'c3', solution: ['pienses'], hint: 'pensar, tú', width: 9 },
            { kind: 'TEXT', text: ' que me da igual, porque no es verdad. Espero que ' },
            { kind: 'GAP', gapId: 'c4', solution: ['podamos'], hint: 'poder, nosotros', width: 9 },
            { kind: 'TEXT', text: ' hablarlo el domingo. Me gustaría ' },
            { kind: 'GAP', gapId: 'c5', solution: ['verte'], hint: 'ver a ti, yo mismo', width: 7 },
            { kind: 'TEXT', text: ' antes de que te vayas.' },
          ],
        },
        {
          id: 'esi4-p5-ordering',
          type: 'ORDERING',
          instruction: 'Ordene el mensaje de disculpa.',
          items: [
            { id: 'o1', text: 'Oye, te escribo por lo del viernes.' },
            { id: 'o2', text: 'Me pasé contestándote así delante de todos, y lo sé.' },
            {
              id: 'o3',
              text: 'No es excusa, pero venía de una semana bastante mala en el trabajo.',
            },
            {
              id: 'o4',
              text: 'Me da pena que hayamos acabado así una cena que llevábamos un mes organizando.',
            },
            { id: 'o5', text: '¿Te parece si tomamos algo el domingo y lo hablamos con calma?' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5'],
        },
        {
          id: 'esi4-p5-match-situaciones',
          type: 'MATCHING',
          instruction: 'Relacione cada situación con la disculpa adecuada.',
          left: [
            { id: 'p1', text: 'Ha llegado una hora tarde a una cita.' },
            { id: 'p2', text: 'Se le olvidó por completo el cumpleaños de un amigo.' },
            { id: 'p3', text: 'Contestó de malos modos a una compañera delante del equipo.' },
            { id: 'p4', text: 'No puede ir a una boda a la que había confirmado.' },
          ],
          right: [
            { id: 'q1', text: 'Perdona el retraso, se me fue el santo al cielo. ¿Pedimos ya?' },
            {
              id: 'q2',
              text: 'Se me pasó tu cumpleaños y no tengo excusa. ¿Te invito a cenar el viernes?',
            },
            {
              id: 'q3',
              text: 'Ayer te contesté fatal y delante de todos. Lo siento, no volverá a pasar.',
            },
            {
              id: 'q4',
              text: 'Siento muchísimo fallaros a última hora; sé la ilusión que os hacía.',
            },
          ],
          solution: [
            { leftId: 'p1', rightId: 'q1' },
            { leftId: 'p2', rightId: 'q2' },
            { leftId: 'p3', rightId: 'q3' },
            { leftId: 'p4', rightId: 'q4' },
          ],
        },
        {
          id: 'esi4-p5-writing',
          type: 'WRITING',
          instruction: 'Escriba un mensaje de disculpa.',
          prompt:
            'Discutió usted la semana pasada con alguien que le importa y no se han hablado desde entonces. Escriba un mensaje de 80 a 130 palabras con las tres partes: reconozca lo que hizo, explique sin convertirlo en excusa y proponga algo concreto. Use al menos un «siento haber + participio», una fórmula con subjuntivo y evite las tres falsas disculpas del recuadro.',
          minWords: 80,
          maxWords: 140,
          aiFeedback: true,
          sampleAnswer:
            'Hola, Marta. Llevo toda la semana queriendo escribirte y no sabía por dónde empezar.\n\nSiento haberte hablado como te hablé el domingo, y sobre todo haberlo hecho delante de tus padres. Estuvo fuera de lugar y lo sé perfectamente; no hace falta que me lo diga nadie.\n\nNo es excusa, pero venía de una semana malísima y me lo pagaste tú, que eras la que menos culpa tenía. Me da mucha rabia que hayamos acabado así por algo que ni siquiera era importante.\n\nMe gustaría verte y hablarlo con calma. ¿Te parece si tomamos un café el sábado por la mañana? Si prefieres esperar un poco más, lo entiendo también.',
        },
      ],
    },
  },
];
