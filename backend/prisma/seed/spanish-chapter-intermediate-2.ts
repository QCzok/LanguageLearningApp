import type { UnitSeed } from './chapter-beginner-1';

/**
 * Spanisch, Intermediate, Kapitel 2: „Opiniones y deseos“ (B1, Kapitel 2)
 *
 * Fünf Seiten. Das wichtigste Kapitel des ganzen Bands: Hier beginnt der
 * Subjuntivo. Alles, was in Kapitel 4 (Gefühle), Kapitel 5 (Forderungen) und
 * in der gesamten B2-Hälfte an Subjuntivo vorkommt, setzt diese fünf Seiten
 * voraus.
 *
 * Aufbau: Seite 1 zeigt, wozu die Form überhaupt da ist, bevor eine einzige
 * Endung fällt – ohne diesen Schritt lernen Lernende eine Konjugation ohne
 * Verwendungszweck. Seite 2 baut die Form auf, und zwar über die erste Person
 * Singular des Präsens, weil damit fast alle Unregelmäßigkeiten von selbst
 * mitkommen. Seite 3 übt die Auslöser des Wunsches (querer que, esperar que,
 * ojalá), Seite 4 die der Wertung und des Zweifels. Seite 5 stellt Indikativ
 * und Subjuntivo im Meinungssatz gegenüber – die Regel mit den verneinten
 * Meinungsverben, die in Kapitel 7 wiederkehrt.
 *
 * Bewusst nicht behandelt: der Subjuntivo im Relativsatz (Kapitel 11), nach
 * Zeitkonjunktionen wie „cuando“ (Grammatikband) und der Imperfecto de
 * Subjuntivo (Kapitel 9). Ein Kapitel, das alles auf einmal bringt, bringt
 * nichts an.
 *
 * Die Seiten stehen einsprachig spanisch; die Wortschatzlisten führen
 * deutsche und englische Entsprechungen.
 *
 * Sämtliche Texte sind eigenständig verfasst.
 */
const v = 1;

export const SPANISH_INTERMEDIATE_2_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – wozu der Subjuntivo da ist, vor jeder Form.
  {
    order: 1,
    title: '¿Para qué sirve el subjuntivo?',
    subtitle: 'Los hechos y lo demás',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'esi2-p1-h1', type: 'HEADING', level: 1, text: '¿Para qué sirve el subjuntivo?' },
        {
          id: 'esi2-p1-intro',
          type: 'TEXT',
          text: 'Hasta ahora usted ha dicho lo que pasa: «mi hermano viene el sábado». Ahora va a decir lo que quiere que pase, lo que duda que pase y lo que le parece bien que pase. Son cosas distintas de un hecho, y el español las marca cambiando el verbo: «quiero que mi hermano venga el sábado».',
        },
        {
          id: 'esi2-p1-intro2',
          type: 'TEXT',
          text: 'Esa es toda la idea. El indicativo informa; el subjuntivo aparece cuando el verbo principal no informa, sino que desea, valora, duda o pide. No es una forma más difícil ni más elegante: es la forma que va detrás de cierto tipo de verbos. Lo que hay que aprender es qué verbos son esos, y esta página empieza por distinguirlos sin conjugar nada todavía.',
        },
        {
          id: 'esi2-p1-info-idea',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Dos frases, dos mundos',
          text: 'Compare las parejas. A la izquierda, el verbo principal presenta algo como un hecho y la subordinada va en indicativo. A la derecha, el verbo principal desea, duda o valora, y la subordinada va en subjuntivo. El sujeto de las dos partes es distinto: eso es casi siempre lo que obliga a usar «que» y no un infinitivo.',
          table: {
            headers: ['Indicativo: se informa', 'Subjuntivo: no se informa'],
            rows: [
              ['Sé que viene el sábado.', 'Quiero que venga el sábado.'],
              ['Es verdad que llueve.', 'Espero que no llueva.'],
              ['Creo que tiene razón.', 'Dudo que tenga razón.'],
              ['Veo que trabajas mucho.', 'Me alegra que trabajes menos.'],
              ['Dice que llega tarde.', 'Le pide que llegue pronto.'],
            ],
          },
        },
        {
          id: 'esi2-p1-choice-idea',
          type: 'CHOICE',
          instruction: 'Sin conjugar todavía: ¿en cuál de estas frases haría falta el subjuntivo?',
          options: [
            { id: 'a1', text: 'Sé que mis padres llegan mañana.' },
            { id: 'a2', text: 'Espero que mis padres lleguen mañana.' },
            { id: 'a3', text: 'Es evidente que mis padres llegan mañana.' },
            { id: 'a4', text: 'Me han dicho que mis padres llegan mañana.' },
          ],
          multiple: false,
          solution: ['a2'],
          explanation:
            '«Esperar» no informa de nada: expresa un deseo, y por eso pide subjuntivo. Los otros tres verbos —saber, ser evidente, decir— presentan la llegada como un hecho conocido.',
        },
        {
          id: 'esi2-p1-info-infinitivo',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Cuidado: no siempre hace falta «que»',
          text: 'Si las dos partes de la frase tienen el mismo sujeto, no se usa «que» ni subjuntivo, sino infinitivo. Es el error más frecuente al empezar, porque en alemán la subordinada con «dass» funciona también con el mismo sujeto.',
          table: {
            headers: ['Sujeto', 'Construcción', 'Ejemplo'],
            rows: [
              ['el mismo', 'infinitivo', 'Quiero ir al cine.'],
              ['distinto', 'que + subjuntivo', 'Quiero que vayas al cine.'],
              ['el mismo', 'infinitivo', 'Espero llegar a tiempo.'],
              ['distinto', 'que + subjuntivo', 'Espero que llegues a tiempo.'],
            ],
          },
        },
        {
          id: 'esi2-p1-choice-infinitivo',
          type: 'CHOICE',
          instruction: 'Elija la frase correcta.',
          question: 'Usted quiere estudiar medicina. ¿Cómo lo dice?',
          options: [
            { id: 'b1', text: 'Quiero que estudie medicina.' },
            { id: 'b2', text: 'Quiero estudiar medicina.' },
            { id: 'b3', text: 'Quiero que estudio medicina.' },
            { id: 'b4', text: 'Quiero que yo estudie medicina.' },
          ],
          multiple: false,
          solution: ['b2'],
          explanation:
            'Quien quiere y quien estudia son la misma persona, así que va infinitivo y no hace falta «que». b1 significaría que otra persona estudie, y b4 es gramatical pero nadie lo dice.',
        },
        {
          id: 'esi2-p1-match-verbos',
          type: 'MATCHING',
          instruction: 'Relacione cada verbo principal con lo que hace.',
          left: [
            { id: 'l1', text: 'Quiero que…' },
            { id: 'l2', text: 'Dudo que…' },
            { id: 'l3', text: 'Me parece bien que…' },
            { id: 'l4', text: 'Sé que…' },
          ],
          right: [
            { id: 'r1', text: 'Expresa un deseo: subjuntivo.' },
            { id: 'r2', text: 'Expresa una duda: subjuntivo.' },
            { id: 'r3', text: 'Expresa una valoración: subjuntivo.' },
            { id: 'r4', text: 'Informa de un hecho: indicativo.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'esi2-p1-cloze',
          type: 'CLOZE',
          instruction:
            'Marque con «I» las frases de indicativo y con «S» las que pedirían subjuntivo.',
          wordBank: ['I', 'S'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Veo que ya estás aquí. → ' },
            { kind: 'GAP', gapId: 'c1', solution: ['I'], width: 3 },
            { kind: 'TEXT', text: '\nPrefiero que vengas tú. → ' },
            { kind: 'GAP', gapId: 'c2', solution: ['S'], width: 3 },
            { kind: 'TEXT', text: '\nEs una pena que se vaya. → ' },
            { kind: 'GAP', gapId: 'c3', solution: ['S'], width: 3 },
            { kind: 'TEXT', text: '\nEstá claro que no funciona. → ' },
            { kind: 'GAP', gapId: 'c4', solution: ['I'], width: 3 },
            { kind: 'TEXT', text: '\nNo creo que funcione. → ' },
            { kind: 'GAP', gapId: 'c5', solution: ['S'], width: 3 },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – die Form, über die erste Person Singular.
  {
    order: 2,
    title: 'Cómo se forma',
    subtitle: 'Del «yo» al subjuntivo',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'esi2-p2-h1', type: 'HEADING', level: 1, text: 'Cómo se forma' },
        {
          id: 'esi2-p2-intro',
          type: 'TEXT',
          text: 'La regla cabe en una frase: tome la primera persona del singular del presente, quite la -o y añada las terminaciones contrarias. Los verbos en -ar toman las de -er, y los de -er e -ir toman las de -ar. Suena raro y es exactamente así.',
        },
        {
          id: 'esi2-p2-info-regulares',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Las terminaciones',
          text: 'Solo hay dos juegos, y el segundo vale para -er y para -ir. Fíjese en que la primera y la tercera persona del singular son iguales, como en el imperfecto: «que yo hable» y «que él hable».',
          table: {
            headers: ['Persona', 'hablar (-ar)', 'comer (-er)', 'vivir (-ir)'],
            rows: [
              ['yo', 'hable', 'coma', 'viva'],
              ['tú', 'hables', 'comas', 'vivas'],
              ['él / ella / usted', 'hable', 'coma', 'viva'],
              ['nosotros', 'hablemos', 'comamos', 'vivamos'],
              ['vosotros', 'habléis', 'comáis', 'viváis'],
              ['ellos / ustedes', 'hablen', 'coman', 'vivan'],
            ],
          },
        },
        {
          id: 'esi2-p2-info-yo',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'La ventaja de partir del «yo»',
          text: 'Casi todo lo irregular del presente se hereda sin tener que aprenderlo otra vez. Si usted sabe decir «tengo», ya sabe decir «tenga»; si sabe «conozco», ya sabe «conozca». Por eso conviene partir siempre de la forma del yo y no del infinitivo.',
          table: {
            headers: ['Infinitivo', 'Presente (yo)', 'Subjuntivo'],
            rows: [
              ['tener', 'tengo', 'tenga'],
              ['hacer', 'hago', 'haga'],
              ['decir', 'digo', 'diga'],
              ['salir', 'salgo', 'salga'],
              ['conocer', 'conozco', 'conozca'],
              ['traer', 'traigo', 'traiga'],
              ['ver', 'veo', 'vea'],
              ['pedir', 'pido', 'pida'],
            ],
          },
        },
        {
          id: 'esi2-p2-info-irregulares',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Los seis que no siguen la regla',
          text: 'Son seis y no hay más. Se reconocen porque su «yo» del presente no termina en -o (soy, voy, sé, estoy, he) o porque cambia entero. Apréndalos de memoria: aparecen en casi todas las frases que va a construir.',
          table: {
            headers: ['Infinitivo', 'Subjuntivo', 'Ejemplo'],
            rows: [
              ['ser', 'sea, seas, sea…', 'Espero que sea fácil.'],
              ['estar', 'esté, estés, esté…', 'Ojalá esté abierto.'],
              ['ir', 'vaya, vayas, vaya…', 'Quiero que vayas tú.'],
              ['haber', 'haya', 'No creo que haya sitio.'],
              ['saber', 'sepa, sepas, sepa…', 'Dudo que lo sepa.'],
              ['dar', 'dé, des, dé…', 'Espero que le dé tiempo.'],
            ],
          },
        },
        {
          id: 'esi2-p2-info-cambios',
          type: 'INFO',
          variant: 'TIP',
          title: 'Dos detalles de ortografía y uno de raíz',
          text: 'Los verbos en -car, -gar y -zar cambian la letra para conservar el sonido: buscar → busque, llegar → llegue, empezar → empiece. Y los verbos en -ir que cambian la raíz (pedir, dormir, sentir) la cambian también en nosotros y vosotros, donde el presente no lo hacía: que durmamos, que sintáis.',
          table: {
            headers: ['Verbo', 'Presente (nosotros)', 'Subjuntivo (nosotros)'],
            rows: [
              ['poder (-er)', 'podemos', 'podamos'],
              ['dormir (-ir)', 'dormimos', 'durmamos'],
              ['pedir (-ir)', 'pedimos', 'pidamos'],
              ['sentir (-ir)', 'sentimos', 'sintamos'],
            ],
          },
        },
        {
          id: 'esi2-p2-cloze-formas',
          type: 'CLOZE',
          instruction: 'Escriba el presente de subjuntivo.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Espero que ' },
            { kind: 'GAP', gapId: 'c1', solution: ['tengas'], hint: 'tener, tú', width: 8 },
            { kind: 'TEXT', text: ' suerte. Quiero que ' },
            { kind: 'GAP', gapId: 'c2', solution: ['vengan'], hint: 'venir, ellos', width: 8 },
            { kind: 'TEXT', text: ' todos. Ojalá ' },
            { kind: 'GAP', gapId: 'c3', solution: ['sea'], hint: 'ser, ello', width: 6 },
            { kind: 'TEXT', text: ' verdad. No creo que ' },
            { kind: 'GAP', gapId: 'c4', solution: ['sepa'], hint: 'saber, él', width: 7 },
            { kind: 'TEXT', text: ' la dirección. Te pido que ' },
            { kind: 'GAP', gapId: 'c5', solution: ['busques'], hint: 'buscar, tú', width: 9 },
            { kind: 'TEXT', text: ' otra vez.' },
          ],
        },
        {
          id: 'esi2-p2-choice-forma',
          type: 'CHOICE',
          instruction: 'Elija la forma correcta.',
          question: '¿Cuál es el presente de subjuntivo de «salir» en primera persona del plural?',
          options: [
            { id: 'c1', text: 'salimos' },
            { id: 'c2', text: 'salgamos' },
            { id: 'c3', text: 'saliemos' },
            { id: 'c4', text: 'salamos' },
          ],
          multiple: false,
          solution: ['c2'],
          explanation:
            'El «yo» del presente es «salgo»; quitando la -o queda «salg-», y con la terminación de nosotros: salgamos. La irregularidad del yo se mantiene en todas las personas.',
        },
        {
          id: 'esi2-p2-cloze-ortografia',
          type: 'CLOZE',
          instruction: 'Atención al cambio de letra.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Espero que ' },
            { kind: 'GAP', gapId: 'c1', solution: ['llegues'], hint: 'llegar, tú', width: 9 },
            { kind: 'TEXT', text: ' bien. Quiero que ' },
            {
              kind: 'GAP',
              gapId: 'c2',
              solution: ['empecemos'],
              hint: 'empezar, nosotros',
              width: 11,
            },
            { kind: 'TEXT', text: ' pronto. Dudo que lo ' },
            { kind: 'GAP', gapId: 'c3', solution: ['saquen'], hint: 'sacar, ellos', width: 8 },
            { kind: 'TEXT', text: ' hoy. Ojalá ' },
            {
              kind: 'GAP',
              gapId: 'c4',
              solution: ['durmamos'],
              hint: 'dormir, nosotros',
              width: 10,
            },
            { kind: 'TEXT', text: ' algo esta noche.' },
          ],
        },
        {
          id: 'esi2-p2-ordering',
          type: 'ORDERING',
          instruction: 'Ordene los pasos para formar el subjuntivo de «conocer».',
          items: [
            { id: 'o1', text: 'Poner el verbo en primera persona del presente: conozco.' },
            { id: 'o2', text: 'Quitar la -o final: conozc-.' },
            { id: 'o3', text: 'Como es un verbo en -er, tomar las terminaciones de -ar.' },
            { id: 'o4', text: 'Añadirlas: conozca, conozcas, conozca, conozcamos…' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4'],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – Wunsch: querer que, esperar que, ojalá.
  {
    order: 3,
    title: 'Deseos y peticiones',
    subtitle: 'Quiero que, espero que, ojalá',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'esi2-p3-h1', type: 'HEADING', level: 1, text: 'Deseos y peticiones' },
        {
          id: 'esi2-p3-intro',
          type: 'TEXT',
          text: 'El primer grupo de verbos que pide subjuntivo es el más fácil de reconocer, porque todos significan más o menos lo mismo: alguien quiere que otro haga algo. Dentro del grupo caben el deseo, la petición, el consejo y la prohibición, que gramaticalmente se comportan igual.',
        },
        {
          id: 'esi2-p3-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: querer, pedir, esperar',
          items: [
            {
              term: 'desear',
              translations: { en: 'to wish', de: 'wünschen' },
              example: 'Le deseo que todo salga bien.',
            },
            {
              term: 'esperar',
              translations: { en: 'to hope; to wait', de: 'hoffen; warten' },
            },
            {
              term: 'pedir',
              translations: { en: 'to ask for', de: 'bitten' },
              example: 'Te pido que me escuches.',
            },
            {
              term: 'rogar',
              translations: { en: 'to request, to beg', de: 'ersuchen, bitten' },
              example: 'Se ruega que no se fume.',
            },
            {
              term: 'aconsejar',
              translations: { en: 'to advise', de: 'raten' },
            },
            {
              term: 'recomendar',
              translations: { en: 'to recommend', de: 'empfehlen' },
            },
            {
              term: 'prohibir',
              translations: { en: 'to forbid', de: 'verbieten' },
            },
            {
              term: 'permitir',
              translations: { en: 'to allow', de: 'erlauben' },
            },
            {
              term: 'necesitar',
              translations: { en: 'to need', de: 'brauchen' },
            },
            {
              term: 'preferir',
              translations: { en: 'to prefer', de: 'vorziehen' },
              example: 'Prefiero que lo hagas tú.',
            },
            {
              term: 'ojalá',
              translations: { en: 'I hope, if only', de: 'hoffentlich' },
            },
            {
              term: 'a ver si',
              translations: { en: "let's hope", de: 'hoffentlich (umgangssprachlich)' },
              example: 'A ver si viene pronto.',
            },
          ],
        },
        {
          id: 'esi2-p3-info-ojala',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'Ojalá',
          text: 'Ojalá viene del árabe y significaba «si Dios quiere». De ese origen conserva dos cosas: que siempre lleva subjuntivo y que no necesita «que» detrás, aunque en América se oye mucho «ojalá que venga», que es igual de correcto. Con presente de subjuntivo el deseo es posible: «ojalá llegue a tiempo».',
        },
        {
          id: 'esi2-p3-dialogo',
          type: 'DIALOGUE',
          title: 'La noche antes del examen',
          audioUrl: 'placeholder://es-b1-deseos',
          lines: [
            {
              speaker: 'Lucía',
              text: 'Ojalá mañana no me toque el tema cinco. Es el único que no llevo bien.',
            },
            {
              speaker: 'Diego',
              text: 'Te aconsejo que lo mires media hora esta noche y que te acuestes pronto.',
            },
            {
              speaker: 'Lucía',
              text: 'Mi madre quiere que duerma ocho horas. Ya, pero eso no depende de mí.',
            },
            {
              speaker: 'Diego',
              text: 'Pues tiene razón. Prefiero que llegues descansada y sin el tema cinco que muerta de sueño y con todo.',
            },
            {
              speaker: 'Lucía',
              text: 'Ya. Oye, ¿te importa que te llame mañana al salir?',
            },
            {
              speaker: 'Diego',
              text: 'Claro. Espero que me cuentes que ha ido bien.',
            },
          ],
        },
        {
          id: 'esi2-p3-info-estructura',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'La estructura del deseo',
          text: 'Casi todos estos verbos admiten además un pronombre de complemento indirecto que dice a quién se dirige la petición: te pido, le aconsejo, os ruego. Recuerde la regla del infinitivo: si el sujeto no cambia, no hay «que».',
          table: {
            headers: ['Construcción', 'Ejemplo'],
            rows: [
              ['querer que + subj.', 'Quiero que me llames.'],
              ['pedir a alguien que + subj.', 'Le pido que me llame.'],
              ['aconsejar que + subj.', 'Te aconsejo que descanses.'],
              ['ojalá + subj.', 'Ojalá no llueva.'],
              ['mismo sujeto: infinitivo', 'Quiero llamarte.'],
            ],
          },
        },
        {
          id: 'esi2-p3-cloze',
          type: 'CLOZE',
          instruction: 'Complete con subjuntivo o infinitivo, según el sujeto.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Quiero ' },
            { kind: 'GAP', gapId: 'c1', solution: ['ir'], hint: 'ir, yo mismo', width: 5 },
            { kind: 'TEXT', text: ' contigo, pero mi jefe quiere que ' },
            { kind: 'GAP', gapId: 'c2', solution: ['termine'], hint: 'terminar, yo', width: 9 },
            { kind: 'TEXT', text: ' el informe. Te pido que no te ' },
            { kind: 'GAP', gapId: 'c3', solution: ['enfades'], hint: 'enfadarse, tú', width: 9 },
            { kind: 'TEXT', text: '. Espero ' },
            { kind: 'GAP', gapId: 'c4', solution: ['llegar'], hint: 'llegar, yo mismo', width: 8 },
            { kind: 'TEXT', text: ' a los postres. Y ojalá nos ' },
            { kind: 'GAP', gapId: 'c5', solution: ['guarden'], hint: 'guardar, ellos', width: 9 },
            { kind: 'TEXT', text: ' sitio.' },
          ],
        },
        {
          id: 'esi2-p3-choice-sujeto',
          type: 'CHOICE',
          instruction: 'Marque todas las frases correctas.',
          options: [
            { id: 'd1', text: 'Espero que apruebes el examen.' },
            { id: 'd2', text: 'Espero que apruebo el examen.' },
            { id: 'd3', text: 'Espero aprobar el examen.' },
            { id: 'd4', text: 'Ojalá apruebes el examen.' },
          ],
          multiple: true,
          solution: ['d1', 'd3', 'd4'],
          explanation:
            'd1 y d4 tienen sujetos distintos y llevan subjuntivo; d3 tiene el mismo sujeto y por eso va en infinitivo. d2 es el error típico: «que» con indicativo detrás de un verbo de deseo.',
        },
        {
          id: 'esi2-p3-match-situaciones',
          type: 'MATCHING',
          instruction: 'Relacione cada situación con lo que diría.',
          left: [
            { id: 'p1', text: 'Un amigo se va de viaje mañana.' },
            { id: 'p2', text: 'Su compañero llega tarde todos los días.' },
            { id: 'p3', text: 'Alguien le pide consejo sobre qué estudiar.' },
            { id: 'p4', text: 'Está en una biblioteca y alguien habla muy alto.' },
          ],
          right: [
            { id: 'q1', text: 'Espero que tengas buen viaje.' },
            { id: 'q2', text: 'Te pido que llegues puntual, por favor.' },
            { id: 'q3', text: 'Te aconsejo que hagas unas prácticas antes de decidir.' },
            { id: 'q4', text: 'Se ruega que guarden silencio.' },
          ],
          solution: [
            { leftId: 'p1', rightId: 'q1' },
            { leftId: 'p2', rightId: 'q2' },
            { leftId: 'p3', rightId: 'q3' },
            { leftId: 'p4', rightId: 'q4' },
          ],
        },
        {
          id: 'esi2-p3-writing',
          type: 'WRITING',
          instruction: 'Escriba un mensaje de despedida.',
          prompt:
            'Una compañera de trabajo se marcha a vivir a otra ciudad. Escríbale un mensaje de 60 a 100 palabras: despídase, desee cosas buenas y pídale algo concreto (que escriba, que vuelva a visitarles). Use al menos tres verbos de deseo o petición con subjuntivo, un «ojalá» y un infinitivo con el mismo sujeto.',
          minWords: 60,
          maxWords: 110,
          aiFeedback: true,
          sampleAnswer:
            'Querida Nerea:\n\nNo quiero irme de la oficina hoy sin escribirte. Espero que todo te vaya muy bien en Sevilla y que la casa nueva sea tan bonita como en las fotos. Ojalá el trabajo resulte más tranquilo que este, aunque eso no será difícil.\n\nTe pido una sola cosa: que nos escribas de vez en cuando, aunque sea para quejarte del calor. Y te aconsejo que vuelvas en noviembre, que es cuando hacemos la cena de Navidad y este año la pagamos entre todos.\n\nUn abrazo fuerte,\nBrais',
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – Wertung und Zweifel.
  {
    order: 4,
    title: 'Valorar y dudar',
    subtitle: 'Es normal que, no estoy seguro de que',
    estimatedMinutes: 27,
    content: {
      version: v,
      blocks: [
        { id: 'esi2-p4-h1', type: 'HEADING', level: 1, text: 'Valorar y dudar' },
        {
          id: 'esi2-p4-intro',
          type: 'TEXT',
          text: 'El segundo grupo de disparadores no pide nada a nadie: comenta. «Es normal que estés cansado» no pretende que usted se canse; valora un hecho que ya existe. Aun así lleva subjuntivo, y la razón es la misma de antes: el verbo principal no informa del hecho, sino que opina sobre él.',
        },
        {
          id: 'esi2-p4-info-valoracion',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Las fórmulas de valoración',
          text: 'Casi todas tienen la misma forma: «es» o «me parece» más un adjetivo o un sustantivo, y después «que». Aprenda la estructura una vez y podrá cambiar el adjetivo por cualquier otro.',
          table: {
            headers: ['Fórmula', 'Ejemplo'],
            rows: [
              ['es normal / lógico que', 'Es normal que estés cansado.'],
              ['es importante / necesario que', 'Es importante que llegues pronto.'],
              ['es una pena / lástima que', 'Es una pena que no puedas venir.'],
              ['me parece bien / mal que', 'Me parece bien que lo digas.'],
              ['me alegra / me molesta que', 'Me alegra que hayas venido.'],
              ['¡qué raro que…!', '¡Qué raro que no haya llamado!'],
            ],
          },
        },
        {
          id: 'esi2-p4-info-duda',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'La duda y la negación',
          text: 'Los verbos de duda llevan subjuntivo siempre. Y los de certeza cambian de modo al negarse: en afirmativo informan, en negativo dejan de hacerlo. Esta regla es la base de lo que se trabaja en el capítulo 7, así que conviene fijarla ahora.',
          table: {
            headers: ['Afirmativo', 'Negativo'],
            rows: [
              ['Creo que viene.', 'No creo que venga.'],
              ['Es verdad que viene.', 'No es verdad que venga.'],
              ['Estoy seguro de que viene.', 'No estoy seguro de que venga.'],
              ['Dudo que venga.', 'No dudo que viene.'],
              ['Es posible que venga.', '(siempre subjuntivo)'],
            ],
          },
        },
        {
          id: 'esi2-p4-info-perfecto',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Cuando lo valorado ya ha pasado',
          text: 'Si el hecho que se valora o se duda es anterior, el subjuntivo se pone en forma compuesta: «haya» más participio. Se forma con el subjuntivo de haber, que usted ya conoce de la lista de irregulares, y el participio no cambia nunca.',
          table: {
            headers: ['Persona', 'Forma', 'Ejemplo'],
            rows: [
              ['yo / él / ella', 'haya venido', 'Me alegra que haya venido.'],
              ['tú', 'hayas venido', 'Es raro que no hayas visto el correo.'],
              ['nosotros', 'hayamos venido', 'Qué suerte que hayamos llegado antes.'],
              ['ellos / ustedes', 'hayan venido', 'No creo que hayan salido ya.'],
            ],
          },
        },
        {
          id: 'esi2-p4-choice-negacion',
          type: 'CHOICE',
          instruction: 'Elija la frase correcta.',
          options: [
            { id: 'e1', text: 'No creo que el tren llega a tiempo.' },
            { id: 'e2', text: 'No creo que el tren llegue a tiempo.' },
            { id: 'e3', text: 'Creo que el tren llegue a tiempo.' },
            { id: 'e4', text: 'Es posible que el tren llega a tiempo.' },
          ],
          multiple: false,
          solution: ['e2'],
          explanation:
            'Creer negado pide subjuntivo. En e3 el error es el contrario: en afirmativo, «creo que» informa y lleva indicativo. Y «es posible que» lleva siempre subjuntivo, de modo que e4 también falla.',
        },
        {
          id: 'esi2-p4-cloze',
          type: 'CLOZE',
          instruction: 'Complete con indicativo o subjuntivo.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Es una pena que no ' },
            { kind: 'GAP', gapId: 'c1', solution: ['puedas'], hint: 'poder, tú', width: 8 },
            { kind: 'TEXT', text: ' venir. Está claro que ' },
            { kind: 'GAP', gapId: 'c2', solution: ['tienes'], hint: 'tener, tú', width: 8 },
            { kind: 'TEXT', text: ' mucho trabajo. No es verdad que te ' },
            {
              kind: 'GAP',
              gapId: 'c3',
              solution: ['olvidemos'],
              hint: 'olvidar, nosotros',
              width: 11,
            },
            { kind: 'TEXT', text: '. Me parece mal que tu jefe no te ' },
            { kind: 'GAP', gapId: 'c4', solution: ['dé'], hint: 'dar, él', width: 5 },
            { kind: 'TEXT', text: ' el día libre. Es posible que el año que viene ' },
            { kind: 'GAP', gapId: 'c5', solution: ['sea'], hint: 'ser, ello', width: 6 },
            { kind: 'TEXT', text: ' distinto.' },
          ],
        },
        {
          id: 'esi2-p4-match-reacciones',
          type: 'MATCHING',
          instruction: 'Relacione cada noticia con una reacción adecuada.',
          left: [
            { id: 'f1', text: 'Han cerrado la piscina municipal todo el verano.' },
            { id: 'f2', text: 'Mi hermana ha aprobado las oposiciones.' },
            { id: 'f3', text: 'Dicen que el autobús va a pasar cada veinte minutos.' },
            { id: 'f4', text: 'Llevo tres noches sin dormir bien.' },
          ],
          right: [
            { id: 'g1', text: 'Es una pena que la cierren justo ahora.' },
            { id: 'g2', text: '¡Qué bien! Me alegro mucho de que lo haya conseguido.' },
            { id: 'g3', text: 'No creo que cumplan ese horario, la verdad.' },
            { id: 'g4', text: 'Es normal que estés agotado.' },
          ],
          solution: [
            { leftId: 'f1', rightId: 'g1' },
            { leftId: 'f2', rightId: 'g2' },
            { leftId: 'f3', rightId: 'g3' },
            { leftId: 'f4', rightId: 'g4' },
          ],
        },
        {
          id: 'esi2-p4-info-probabilidad',
          type: 'INFO',
          variant: 'TIP',
          title: 'Quizá, tal vez, a lo mejor',
          text: 'Los adverbios de duda se comportan de manera distinta y conviene no mezclarlos. «Quizá» y «tal vez» admiten los dos modos, y con subjuntivo la duda es mayor. «A lo mejor» y «seguramente», en cambio, llevan siempre indicativo, aunque signifiquen algo parecido.',
          table: {
            headers: ['Expresión', 'Modo', 'Ejemplo'],
            rows: [
              ['quizá / tal vez', 'indic. o subj.', 'Quizá venga mañana.'],
              ['a lo mejor', 'siempre indicativo', 'A lo mejor viene mañana.'],
              ['seguramente', 'indicativo', 'Seguramente viene mañana.'],
              ['puede que', 'siempre subjuntivo', 'Puede que venga mañana.'],
            ],
          },
        },
        {
          id: 'esi2-p4-choice-adverbios',
          type: 'CHOICE',
          instruction: 'Marque todas las frases correctas.',
          options: [
            { id: 'h1', text: 'A lo mejor llueve esta tarde.' },
            { id: 'h2', text: 'A lo mejor llueva esta tarde.' },
            { id: 'h3', text: 'Puede que llueva esta tarde.' },
            { id: 'h4', text: 'Puede que llueve esta tarde.' },
          ],
          multiple: true,
          solution: ['h1', 'h3'],
          explanation:
            '«A lo mejor» lleva indicativo y «puede que» lleva subjuntivo, siempre. Son las dos expresiones que más se confunden precisamente porque significan casi lo mismo.',
        },
        {
          id: 'esi2-p4-writing',
          type: 'WRITING',
          instruction: 'Reaccione a una noticia.',
          prompt:
            'Un amigo le escribe: «Me han ofrecido un puesto en Chile. Tengo que contestar en dos semanas y no sé qué hacer». Responda en 70 a 110 palabras: valore la noticia, exprese sus dudas y dele un consejo. Use al menos dos fórmulas de valoración, una expresión de duda con subjuntivo y un verbo de consejo.',
          minWords: 70,
          maxWords: 120,
          aiFeedback: true,
          sampleAnswer:
            '¡Qué noticia! Me alegra muchísimo que te lo hayan ofrecido, porque llevabas dos años detrás de algo así.\n\nEs normal que dudes, no te agobies por eso. Dos semanas es poquísimo para una decisión de este tamaño, y me parece mal que te metan esa prisa. No estoy seguro de que puedan alargarte el plazo, pero yo lo preguntaría: no pierdes nada.\n\nTe aconsejo que hables con alguien que trabaje allí antes de contestar. Y que te olvides un momento del sueldo: lo que de verdad cambia es vivir a doce mil kilómetros.\n\nLlámame cuando quieras.',
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – Meinung äußern: Indikativ und Subjuntivo nebeneinander.
  {
    order: 5,
    title: 'Dar una opinión',
    subtitle: 'Poner todo junto',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'esi2-p5-h1', type: 'HEADING', level: 1, text: 'Dar una opinión' },
        {
          id: 'esi2-p5-intro',
          type: 'TEXT',
          text: 'En una conversación real, el indicativo y el subjuntivo aparecen mezclados en la misma frase, y hay que elegir sobre la marcha. La buena noticia es que a estas alturas ya conoce usted todas las reglas que hacen falta; esta página solo las pone juntas y añade el vocabulario para que la opinión tenga algo dentro.',
        },
        {
          id: 'esi2-p5-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: expresar una opinión',
          items: [
            {
              term: 'en mi opinión',
              translations: { en: 'in my opinion', de: 'meiner Meinung nach' },
            },
            {
              term: 'desde mi punto de vista',
              translations: { en: 'from my point of view', de: 'aus meiner Sicht' },
            },
            {
              term: 'estar de acuerdo (con)',
              translations: { en: 'to agree (with)', de: 'einverstanden sein' },
            },
            {
              term: 'llevar razón / tener razón',
              translations: { en: 'to be right', de: 'recht haben' },
            },
            {
              term: 'depende de',
              translations: { en: 'it depends on', de: 'es kommt darauf an' },
            },
            {
              term: 'por un lado… por otro',
              translations: { en: 'on the one hand… on the other', de: 'einerseits… andererseits' },
            },
            {
              term: 'lo que pasa es que',
              translations: { en: 'the thing is that', de: 'die Sache ist die, dass' },
            },
            {
              term: 'en realidad',
              translations: { en: 'actually', de: 'eigentlich' },
            },
            {
              term: 'darse cuenta de',
              translations: { en: 'to realize', de: 'merken, bemerken' },
              example: 'No me había dado cuenta de eso.',
            },
            {
              term: 'estar en contra de',
              translations: { en: 'to be against', de: 'dagegen sein' },
            },
          ],
        },
        {
          id: 'esi2-p5-info-resumen',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Resumen del capítulo en seis líneas',
          text: 'Esta tabla es el capítulo entero. Si la tiene clara, tiene el presente de subjuntivo de nivel B1; lo demás son verbos nuevos que se van añadiendo a cada casilla.',
          table: {
            headers: ['El verbo principal…', 'Modo', 'Ejemplo'],
            rows: [
              ['informa (saber, ver, es verdad)', 'indicativo', 'Sé que trabajas mucho.'],
              ['desea o pide (querer, pedir)', 'subjuntivo', 'Quiero que descanses.'],
              ['valora (es normal, me alegra)', 'subjuntivo', 'Es normal que estés cansado.'],
              ['duda (dudar, puede que)', 'subjuntivo', 'Dudo que venga.'],
              ['informa pero está negado', 'subjuntivo', 'No creo que venga.'],
              ['tiene el mismo sujeto', 'infinitivo', 'Quiero descansar.'],
            ],
          },
        },
        {
          id: 'esi2-p5-dialogo',
          type: 'DIALOGUE',
          title: '¿Móviles en clase?',
          audioUrl: 'placeholder://es-b1-opiniones',
          lines: [
            {
              speaker: 'Marta',
              text: 'En el instituto de mi hija quieren que los alumnos dejen el móvil en una caja al entrar.',
            },
            {
              speaker: 'Hugo',
              text: 'Me parece bien. Está claro que con el móvil delante nadie atiende.',
            },
            {
              speaker: 'Marta',
              text: 'Por un lado sí, pero no creo que sea tan sencillo. ¿Y si hay una urgencia en casa?',
            },
            {
              speaker: 'Hugo',
              text: 'Para eso está el teléfono del centro. Lo que pasa es que los padres tampoco queremos soltarlos.',
            },
            {
              speaker: 'Marta',
              text: 'En eso llevas razón, la verdad. A lo mejor el problema no es solo de los chicos.',
            },
            {
              speaker: 'Hugo',
              text: 'Yo te aconsejo que vayas a la reunión del martes y lo digas allí. Es importante que los padres opinemos antes de que lo decidan.',
            },
          ],
        },
        {
          id: 'esi2-p5-choice-dialogo',
          type: 'CHOICE',
          instruction: 'Lea el diálogo y elija.',
          question: '¿Qué postura tiene Marta al final de la conversación?',
          options: [
            { id: 'i1', text: 'Está completamente en contra de la medida.' },
            { id: 'i2', text: 'Está a favor sin ninguna duda.' },
            {
              id: 'i3',
              text: 'Ve razones a favor, mantiene una duda concreta y reconoce un punto de Hugo.',
            },
            { id: 'i4', text: 'No tiene ninguna opinión sobre el asunto.' },
          ],
          multiple: false,
          solution: ['i3'],
          explanation:
            'Marta dice «por un lado sí», plantea el caso de una urgencia y después admite que Hugo lleva razón en lo de los padres. Es una postura matizada, no un sí ni un no.',
        },
        {
          id: 'esi2-p5-cloze',
          type: 'CLOZE',
          instruction: 'Complete la opinión con la forma correcta del verbo.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'En mi opinión, está claro que los móviles ' },
            {
              kind: 'GAP',
              gapId: 'c1',
              solution: ['distraen'],
              hint: 'distraer, ellos',
              width: 10,
            },
            { kind: 'TEXT', text: ' mucho en clase. Por eso me parece bien que el instituto los ' },
            {
              kind: 'GAP',
              gapId: 'c2',
              solution: ['guarde'],
              hint: 'guardar, el instituto',
              width: 9,
            },
            { kind: 'TEXT', text: ' durante las horas lectivas. Ahora bien, no creo que ' },
            { kind: 'GAP', gapId: 'c3', solution: ['sirva'], hint: 'servir, ello', width: 8 },
            {
              kind: 'TEXT',
              text: ' de nada si en casa nadie pone límites. Es importante que las familias ',
            },
            { kind: 'GAP', gapId: 'c4', solution: ['hablen'], hint: 'hablar, ellas', width: 9 },
            { kind: 'TEXT', text: ' del tema, y ojalá la reunión del martes ' },
            { kind: 'GAP', gapId: 'c5', solution: ['sirva'], hint: 'servir, ella', width: 8 },
            { kind: 'TEXT', text: ' para eso.' },
          ],
        },
        {
          id: 'esi2-p5-ordering',
          type: 'ORDERING',
          instruction: 'Ordene la intervención para que suene natural.',
          items: [
            { id: 'o1', text: 'Desde mi punto de vista, el problema no es el móvil en sí.' },
            { id: 'o2', text: 'Está claro que en clase molesta, en eso estamos todos de acuerdo.' },
            { id: 'o3', text: 'Lo que pasa es que fuera de clase nadie les enseña a usarlo.' },
            {
              id: 'o4',
              text: 'Por eso me parece bien que se guarde, pero dudo que baste con eso.',
            },
            { id: 'o5', text: 'Yo propongo que hagamos un taller con las familias.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5'],
        },
        {
          id: 'esi2-p5-writing',
          type: 'WRITING',
          instruction: 'Dé su opinión.',
          prompt:
            'El ayuntamiento de su ciudad propone que las bibliotecas públicas abran las veinticuatro horas en época de exámenes. Escriba su opinión en 100 a 150 palabras para el foro del barrio. Use al menos: un verbo de opinión en afirmativo con indicativo, uno negado con subjuntivo, una fórmula de valoración, una expresión de duda y una propuesta con «que» más subjuntivo.',
          minWords: 100,
          maxWords: 160,
          aiFeedback: true,
          sampleAnswer:
            'En mi opinión, la propuesta está bien pensada, aunque le falta una parte.\n\nCreo que hace falta un sitio abierto por la noche en época de exámenes: está claro que muchos estudiantes no tienen en casa un rincón tranquilo, y la cafetería de la esquina no es una solución. Me parece muy bien que el ayuntamiento lo haya planteado.\n\nAhora bien, no creo que baste con abrir la puerta. Si no hay nadie dentro a las tres de la mañana, dudo que aquello funcione más de dos semanas. Es importante que haya al menos una persona de plantilla en cada turno, y eso cuesta dinero.\n\nPor eso propongo que se abra solo una biblioteca, la del centro, y que se haga bien. Es preferible que abra una con personal que tres vacías.',
        },
      ],
    },
  },
];
