import type { UnitSeed } from './chapter-beginner-1';

/**
 * Spanische Grammatik, Kapitel 9: „Der Subjuntivo“
 *
 * Fünf Seiten. Das Kapitel, das dem Spanischen seinen Ruf einträgt, und das
 * einzige, dessen Thema im Deutschen keine Entsprechung hat: Der Konjunktiv
 * der deutschen Schulgrammatik steht in der indirekten Rede, der spanische
 * Subjuntivo dort gerade nicht.
 *
 * Aufbau: erst die Formen, die überraschend regelmäßig sind, weil sie aus der
 * „yo“-Form des Präsens gewonnen werden; dann die Auslöser, nach Gruppen
 * getrennt – Wunsch, Wertung, Zweifel –, weil sie sich verschieden anfühlen
 * und verschieden verneint werden; zuletzt die Nebensätze, in denen nicht ein
 * Verb den Modus bestimmt, sondern die Zeitlage.
 *
 * Bewusst nicht als „Modus der Unwirklichkeit“ eingeführt: „Me alegro de que
 * hayas venido“ steht im Subjuntivo, obwohl der Besuch tatsächlich stattfand.
 * Getrennt wird nach der Art des Hauptsatzes, nicht nach dem Wahrheitsgehalt
 * des Nebensatzes.
 */
const v = 1;

export const SPANISH_GRAMMAR_9_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – die Formen.
  {
    order: 1,
    title: 'Die Formen',
    subtitle: 'Aus der yo-Form gebaut',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'esg9-p1-h1', type: 'HEADING', level: 1, text: 'Die Formen' },
        {
          id: 'esg9-p1-intro',
          type: 'TEXT',
          text: 'El subjuntivo no es un tiempo sino un modo: no dice cuándo pasa algo, sino cómo se presenta lo que se dice. Antes de ver cuándo se usa conviene saber formarlo, y eso es más fácil de lo que su fama sugiere.',
          translations: {
            de: 'Der Subjuntivo ist keine Zeit, sondern ein Modus: Er sagt nicht, wann etwas geschieht, sondern wie das Gesagte dargestellt wird. Bevor man sieht, wann er steht, sollte man ihn bilden können – und das ist leichter, als sein Ruf vermuten lässt.',
          },
        },
        {
          id: 'esg9-p1-info-receta',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'La receta: tomar la forma de «yo» y cambiar la vocal',
          text: 'Se parte del presente de indicativo en primera persona, se quita la -o y se añaden las terminaciones del otro grupo: los verbos en -ar toman -e, los de -er e -ir toman -a. Quien se acuerde de esta regla no necesita listas, porque funciona también con los irregulares: «tengo» da «tenga», «salgo» da «salga», «conozco» da «conozca».',
          translations: {
            de: {
              title: 'Das Rezept: die „yo“-Form nehmen und den Vokal tauschen',
              text: 'Man geht vom Präsens Indikativ der ersten Person aus, streicht das -o und hängt die Endungen der jeweils anderen Gruppe an: Verben auf -ar nehmen -e, die auf -er und -ir nehmen -a. Wer sich das merkt, braucht keine Listen, denn es greift auch bei den unregelmäßigen: „tengo“ ergibt „tenga“, „salgo“ ergibt „salga“, „conozco“ ergibt „conozca“.',
            },
          },
          table: {
            headers: ['Persona', 'hablar', 'comer', 'vivir', 'tener'],
            rows: [
              ['yo', 'hable', 'coma', 'viva', 'tenga'],
              ['tú', 'hables', 'comas', 'vivas', 'tengas'],
              ['él / ella / usted', 'hable', 'coma', 'viva', 'tenga'],
              ['nosotros', 'hablemos', 'comamos', 'vivamos', 'tengamos'],
              ['vosotros', 'habléis', 'comáis', 'viváis', 'tengáis'],
              ['ellos / ellas / ustedes', 'hablen', 'coman', 'vivan', 'tengan'],
            ],
          },
        },
        {
          id: 'esg9-p1-info-irreg',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Los seis que no siguen la receta',
          text: 'Solo seis verbos escapan a la regla, y son precisamente los que no terminan en -o en la primera persona («soy», «voy», «sé», «estoy», «doy», «he»). Hay que aprenderlos, pero son seis, y aparecen tanto que se fijan solos.',
          translations: {
            de: {
              title: 'Die sechs, die dem Rezept nicht folgen',
              text: 'Nur sechs Verben entziehen sich der Regel, und es sind genau die, deren erste Person nicht auf -o endet („soy“, „voy“, „sé“, „estoy“, „doy“, „he“). Man muss sie lernen, aber es sind sechs, und sie kommen so oft vor, dass sie sich von selbst einprägen.',
            },
          },
          table: {
            headers: ['Infinitivo', 'Subjuntivo (yo)', 'Infinitivo', 'Subjuntivo (yo)'],
            rows: [
              ['ser', 'sea', 'estar', 'esté'],
              ['ir', 'vaya', 'dar', 'dé'],
              ['saber', 'sepa', 'haber', 'haya'],
            ],
          },
        },
        {
          id: 'esg9-p1-info-vocal',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Los verbos con cambio de vocal',
          text: 'Mantienen el cambio en las mismas cuatro formas que en presente. Los de -ir añaden una particularidad: también cambian en nosotros y vosotros, pero de otra manera – «dormir» hace «durmamos», «pedir» hace «pidamos». Es el único punto realmente nuevo de la página.',
          translations: {
            de: {
              title: 'Die Verben mit Vokalwechsel',
              text: 'Sie behalten den Wechsel in denselben vier Formen wie im Präsens. Die auf -ir kommen mit einer Besonderheit dazu: Sie wechseln auch bei nosotros und vosotros, aber anders – „dormir“ wird zu „durmamos“, „pedir“ zu „pidamos“. Das ist der einzige wirklich neue Punkt dieser Seite.',
            },
          },
          table: {
            headers: ['Persona', 'querer', 'poder', 'dormir', 'pedir'],
            rows: [
              ['yo', 'quiera', 'pueda', 'duerma', 'pida'],
              ['tú', 'quieras', 'puedas', 'duermas', 'pidas'],
              ['nosotros', 'queramos', 'podamos', 'durmamos', 'pidamos'],
              ['ellos', 'quieran', 'puedan', 'duerman', 'pidan'],
            ],
          },
        },
        {
          id: 'esg9-p1-cloze',
          type: 'CLOZE',
          instruction: 'Forme el presente de subjuntivo.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Espero que tú ' },
            { kind: 'GAP', gapId: 's1', solution: ['vengas'], hint: 'venir, tú', width: 8 },
            { kind: 'TEXT', text: ' pronto.\nQuiero que ella lo ' },
            { kind: 'GAP', gapId: 's2', solution: ['sepa'], hint: 'saber, ella', width: 7 },
            { kind: 'TEXT', text: ' hoy mismo.\nEs mejor que nosotros ' },
            { kind: 'GAP', gapId: 's3', solution: ['salgamos'], hint: 'salir, nosotros', width: 10 },
            { kind: 'TEXT', text: ' temprano.\nNo creo que ellos ' },
            { kind: 'GAP', gapId: 's4', solution: ['estén'], hint: 'estar, ellos', width: 7 },
            { kind: 'TEXT', text: ' en casa.\nOjalá ' },
            { kind: 'GAP', gapId: 's5', solution: ['haga'], hint: 'hacer, él', width: 7 },
            { kind: 'TEXT', text: ' buen tiempo mañana.' },
          ],
        },
        {
          id: 'esg9-p1-choice',
          type: 'CHOICE',
          instruction: 'Elija la forma correcta.',
          question: '¿Cuál es el presente de subjuntivo de «conocer» en primera persona?',
          options: [
            { id: 'o1', text: 'conoce' },
            { id: 'o2', text: 'conozca' },
            { id: 'o3', text: 'conoza' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation:
            'Se parte de «conozco», se quita la -o y se añade -a. La irregularidad de la primera persona pasa así a todas las formas del subjuntivo.',
          explanationTranslations: {
            de: 'Man geht von „conozco“ aus, streicht das -o und hängt -a an. Die Unregelmäßigkeit der ersten Person geht so auf alle Formen des Subjuntivo über.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – Wunsch und Willen.
  {
    order: 2,
    title: 'Wunsch und Wille',
    subtitle: 'querer que, ojalá, es necesario que',
    estimatedMinutes: 21,
    content: {
      version: v,
      blocks: [
        { id: 'esg9-p2-h1', type: 'HEADING', level: 1, text: 'Wunsch und Wille' },
        {
          id: 'esg9-p2-intro',
          type: 'TEXT',
          text: 'El primer grupo de disparadores es el más intuitivo: cuando alguien quiere, pide, espera o aconseja que otra persona haga algo, el segundo verbo va en subjuntivo. Lo deseado todavía no ha ocurrido, y el español lo marca en la forma del verbo.',
          translations: {
            de: 'Die erste Gruppe von Auslösern ist die anschaulichste: Wenn jemand will, bittet, hofft oder rät, dass eine andere Person etwas tut, steht das zweite Verb im Subjuntivo. Das Gewünschte ist noch nicht eingetreten, und das Spanische zeigt es an der Verbform.',
          },
        },
        {
          id: 'esg9-p2-info-dossujetos',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Hacen falta dos sujetos distintos',
          text: 'Esta es la condición que decide, y el error más común es pasarla por alto. Si la persona que quiere y la que actúa son la misma, no hay subordinada: se pone el infinitivo directamente. «Quiero salir» – yo quiero, yo salgo. «Quiero que salgas» – yo quiero, tú sales.',
          translations: {
            de: {
              title: 'Es braucht zwei verschiedene Subjekte',
              text: 'Das ist die entscheidende Bedingung, und der häufigste Fehler besteht darin, sie zu übersehen. Sind die wollende und die handelnde Person dieselbe, gibt es keinen Nebensatz: Dann steht schlicht der Infinitiv. „Quiero salir“ – ich will, ich gehe. „Quiero que salgas“ – ich will, du gehst.',
            },
          },
          table: {
            headers: ['Mismo sujeto (infinitivo)', 'Sujetos distintos (subjuntivo)'],
            rows: [
              ['Quiero ir al cine.', 'Quiero que vayas al cine.'],
              ['Espero llegar a tiempo.', 'Espero que llegues a tiempo.'],
              ['Necesito descansar.', 'Necesito que descanses.'],
              ['Prefiero quedarme.', 'Prefiero que te quedes.'],
            ],
          },
        },
        {
          id: 'esg9-p2-info-disparadores',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Los disparadores de este grupo',
          text: 'Todos comparten la idea de influir en lo que otro hace: pedir, mandar, aconsejar, prohibir, permitir. «Ojalá» es un caso aparte: viene del árabe y significa algo así como «quiera Dios». No necesita «que» y siempre lleva subjuntivo.',
          translations: {
            de: {
              title: 'Die Auslöser dieser Gruppe',
              text: 'Allen gemeinsam ist, dass sie auf das Tun eines anderen einwirken: bitten, befehlen, raten, verbieten, erlauben. „Ojalá“ ist ein Sonderfall: Es kommt aus dem Arabischen und bedeutet etwa „gebe Gott“. Es braucht kein „que“ und steht immer mit dem Subjuntivo.',
            },
          },
          table: {
            headers: ['Expresión', 'Ejemplo'],
            rows: [
              ['querer que', 'Quiero que me llames.'],
              ['esperar que', 'Espero que todo salga bien.'],
              ['pedir que', 'Te pido que tengas paciencia.'],
              ['aconsejar que', 'Le aconsejo que descanse.'],
              ['prohibir que', 'Prohíben que se fume aquí.'],
              ['es necesario que', 'Es necesario que firmes hoy.'],
              ['ojalá (+ subj.)', 'Ojalá no llueva.'],
            ],
          },
        },
        {
          id: 'esg9-p2-cloze',
          type: 'CLOZE',
          instruction: 'Complete con infinitivo o subjuntivo, según corresponda.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Quiero ' },
            { kind: 'GAP', gapId: 'd1', solution: ['aprender'], hint: 'aprender – gleiche Person', width: 10 },
            { kind: 'TEXT', text: ' italiano el año que viene.\nMis padres quieren que yo ' },
            { kind: 'GAP', gapId: 'd2', solution: ['estudie'], hint: 'estudiar – andere Person', width: 9 },
            { kind: 'TEXT', text: ' medicina.\nEspero ' },
            { kind: 'GAP', gapId: 'd3', solution: ['verte'], hint: 'ver – gleiche Person', width: 8 },
            { kind: 'TEXT', text: ' pronto.\nEspero que ' },
            { kind: 'GAP', gapId: 'd4', solution: ['podáis'], hint: 'poder, vosotros', width: 8 },
            { kind: 'TEXT', text: ' venir a la boda.\nOjalá ' },
            { kind: 'GAP', gapId: 'd5', solution: ['sea'], hint: 'ser, ello', width: 6 },
            { kind: 'TEXT', text: ' verdad.' },
          ],
        },
        {
          id: 'esg9-p2-choice',
          type: 'CHOICE',
          instruction: 'Marque todas las frases correctas.',
          question: '¿Cuáles están bien construidas?',
          options: [
            { id: 'q1', text: 'Quiero que vienes mañana.' },
            { id: 'q2', text: 'Quiero que vengas mañana.' },
            { id: 'q3', text: 'Quiero venir mañana.' },
            { id: 'q4', text: 'Quiero que venir mañana.' },
          ],
          multiple: true,
          solution: ['q2', 'q3'],
          explanation:
            'Con dos sujetos hace falta «que» más subjuntivo; con uno solo, el infinitivo sin «que». Las otras dos mezclan las dos construcciones.',
          explanationTranslations: {
            de: 'Bei zwei Subjekten braucht es „que“ plus Subjuntivo, bei einem den Infinitiv ohne „que“. Die beiden anderen vermischen die Konstruktionen.',
          },
        },
        {
          id: 'esg9-p2-order',
          type: 'ORDERING',
          instruction: 'Forme una frase correcta.',
          items: [
            { id: 'w1', text: 'Te' },
            { id: 'w2', text: 'pido' },
            { id: 'w3', text: 'que' },
            { id: 'w4', text: 'no se lo' },
            { id: 'w5', text: 'digas a nadie.' },
          ],
          solution: ['w1', 'w2', 'w3', 'w4', 'w5'],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – Wertung und Gefühl.
  {
    order: 3,
    title: 'Wertung und Gefühl',
    subtitle: 'Auch wenn es wirklich so ist',
    estimatedMinutes: 21,
    content: {
      version: v,
      blocks: [
        { id: 'esg9-p3-h1', type: 'HEADING', level: 1, text: 'Wertung und Gefühl' },
        {
          id: 'esg9-p3-intro',
          type: 'TEXT',
          text: 'Aquí se cae la idea de que el subjuntivo expresa lo irreal. «Me alegro de que hayas venido» se dice de alguien que está delante: el hecho es del todo real. Lo que pide el subjuntivo no es la duda, sino que la frase principal valore en vez de informar.',
          translations: {
            de: 'Hier fällt die Vorstellung, der Subjuntivo drücke Unwirkliches aus. „Me alegro de que hayas venido“ sagt man zu jemandem, der leibhaftig davorsteht: Der Sachverhalt ist völlig real. Was den Subjuntivo verlangt, ist nicht der Zweifel, sondern dass der Hauptsatz wertet statt informiert.',
          },
        },
        {
          id: 'esg9-p3-info-valoracion',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Las expresiones de valoración',
          text: 'Casi todas empiezan por «es» más un adjetivo: es bueno, es importante, es una pena, es lógico. La prueba es sencilla: si se puede sustituir por «me parece bien / mal / raro que…», es valoración y va en subjuntivo.',
          translations: {
            de: {
              title: 'Die Ausdrücke der Wertung',
              text: 'Fast alle beginnen mit „es“ plus Adjektiv: es bueno, es importante, es una pena, es lógico. Die Probe ist einfach: Lässt es sich durch „me parece bien / mal / raro que…“ ersetzen, ist es eine Wertung und steht im Subjuntivo.',
            },
          },
          table: {
            headers: ['Expresión', 'Ejemplo'],
            rows: [
              ['es importante que', 'Es importante que lo sepas.'],
              ['es una pena que', 'Es una pena que no puedas venir.'],
              ['es normal que', 'Es normal que estés cansado.'],
              ['me parece bien que', 'Me parece bien que lo digas.'],
              ['está bien que', 'Está bien que preguntes.'],
              ['qué raro que', '¡Qué raro que no haya llamado!'],
            ],
          },
        },
        {
          id: 'esg9-p3-info-sentimiento',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Los verbos de sentimiento',
          text: 'Alegrarse, sentir, molestar, dar pena, sorprender. Vale la misma condición del capítulo anterior: con un solo sujeto se usa el infinitivo. «Me alegro de verte» frente a «Me alegro de que vengas». Y cuidado con «sentir»: aquí no significa «fühlen», sino «bedauern».',
          translations: {
            de: {
              title: 'Die Verben des Gefühls',
              text: 'Alegrarse, sentir, molestar, dar pena, sorprender. Es gilt dieselbe Bedingung wie zuvor: Bei nur einem Subjekt steht der Infinitiv. „Me alegro de verte“ gegenüber „Me alegro de que vengas“. Und Vorsicht bei „sentir“: Es heißt hier nicht „fühlen“, sondern „bedauern“.',
            },
          },
          table: {
            headers: ['Un sujeto', 'Dos sujetos'],
            rows: [
              ['Me alegro de estar aquí.', 'Me alegro de que estés aquí.'],
              ['Siento llegar tarde.', 'Siento que tengas que esperar.'],
              ['Me molesta trabajar los domingos.', 'Me molesta que trabajes los domingos.'],
            ],
          },
        },
        {
          id: 'esg9-p3-cloze',
          type: 'CLOZE',
          instruction: 'Complete con el subjuntivo o el infinitivo.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Es una pena que no ' },
            { kind: 'GAP', gapId: 'e1', solution: ['puedas'], hint: 'poder, tú', width: 8 },
            { kind: 'TEXT', text: ' quedarte más tiempo.\nMe alegro de que ' },
            { kind: 'GAP', gapId: 'e2', solution: ['estés'], hint: 'estar, tú', width: 7 },
            { kind: 'TEXT', text: ' mejor.\nEs normal que los niños ' },
            { kind: 'GAP', gapId: 'e3', solution: ['tengan'], hint: 'tener, ellos', width: 8 },
            { kind: 'TEXT', text: ' miedo al principio.\nMe molesta ' },
            { kind: 'GAP', gapId: 'e4', solution: ['esperar'], hint: 'esperar – gleiche Person', width: 9 },
            { kind: 'TEXT', text: ' tanto rato.\nEs importante que nosotros ' },
            { kind: 'GAP', gapId: 'e5', solution: ['lleguemos'], hint: 'llegar, nosotros', width: 11 },
            { kind: 'TEXT', text: ' puntuales.' },
          ],
        },
        {
          id: 'esg9-p3-choice',
          type: 'CHOICE',
          instruction: 'Elija la explicación correcta.',
          question: '¿Por qué se dice «Me alegro de que hayas venido» si la persona está presente y el hecho es real?',
          options: [
            { id: 'r1', text: 'Porque el subjuntivo marca siempre lo dudoso, y aquí hay una duda implícita.' },
            { id: 'r2', text: 'Porque lo que decide no es si el hecho es real, sino que la frase principal lo valore en lugar de informar.' },
            { id: 'r3', text: 'Porque después de «que» siempre va subjuntivo.' },
          ],
          multiple: false,
          solution: ['r2'],
          explanation:
            'Después de «que» también hay indicativo: «Sé que has venido». La diferencia está en el verbo principal: «saber» informa, «alegrarse» valora.',
          explanationTranslations: {
            de: 'Nach „que“ steht auch der Indikativ: „Sé que has venido“. Der Unterschied liegt im Hauptverb: „saber“ informiert, „alegrarse“ wertet.',
          },
        },
        {
          id: 'esg9-p3-match',
          type: 'MATCHING',
          instruction: 'Relacione el comienzo con el final correcto.',
          left: [
            { id: 'm1', text: 'Sé que…' },
            { id: 'm2', text: 'Me alegro de que…' },
            { id: 'm3', text: 'Es verdad que…' },
            { id: 'm4', text: 'Es una lástima que…' },
          ],
          right: [
            { id: 'n1', text: '…trabajas mucho.' },
            { id: 'n2', text: '…trabajes menos ahora.' },
            { id: 'n3', text: '…trabaja demasiado.' },
            { id: 'n4', text: '…trabaje los domingos.' },
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
  // Seite 4 – Zweifel und Verneinung.
  {
    order: 4,
    title: 'Zweifel und Verneinung',
    subtitle: 'no creo que, dudo que, quizás',
    estimatedMinutes: 21,
    content: {
      version: v,
      blocks: [
        { id: 'esg9-p4-h1', type: 'HEADING', level: 1, text: 'Zweifel und Verneinung' },
        {
          id: 'esg9-p4-intro',
          type: 'TEXT',
          text: 'El tercer grupo es el que más se nota al hablar, porque cambia con la negación. «Creo que viene» lleva indicativo; «No creo que venga», subjuntivo. La misma frase, negada, cambia de modo – y eso no ocurre en los otros dos grupos.',
          translations: {
            de: 'Die dritte Gruppe fällt im Gespräch am meisten auf, weil sie mit der Verneinung wechselt. „Creo que viene“ steht im Indikativ, „No creo que venga“ im Subjuntivo. Derselbe Satz wechselt verneint den Modus – und das geschieht in den beiden anderen Gruppen nicht.',
          },
        },
        {
          id: 'esg9-p4-info-negacion',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Los verbos de opinión cambian al negarlos',
          text: 'Creer, pensar, parecer y decir afirman algo cuando van en positivo: ahí va indicativo. Al negarlos, el hablante retira esa afirmación, y entonces aparece el subjuntivo. En preguntas cabe cualquiera de los dos según lo que espere quien pregunta.',
          translations: {
            de: {
              title: 'Verben der Meinung wechseln bei Verneinung',
              text: 'Creer, pensar, parecer und decir behaupten etwas, wenn sie bejaht stehen – dort steht der Indikativ. Verneint nimmt die sprechende Person diese Behauptung zurück, und dann erscheint der Subjuntivo. In Fragen ist beides möglich, je nachdem, was die fragende Person erwartet.',
            },
          },
          table: {
            headers: ['Afirmativo (indicativo)', 'Negativo (subjuntivo)'],
            rows: [
              ['Creo que tiene razón.', 'No creo que tenga razón.'],
              ['Me parece que está enfermo.', 'No me parece que esté enfermo.'],
              ['Es verdad que lo sabe.', 'No es verdad que lo sepa.'],
              ['Está claro que funciona.', 'No está claro que funcione.'],
            ],
          },
        },
        {
          id: 'esg9-p4-info-duda',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Duda, negación y probabilidad',
          text: 'Dudar y negar llevan subjuntivo en positivo, porque ya expresan el rechazo por sí mismos. Con los adverbios de probabilidad hay libertad: «quizá viene» suena más seguro que «quizá venga». Solo «a lo mejor» se queda siempre en indicativo.',
          translations: {
            de: {
              title: 'Zweifel, Verneinung und Wahrscheinlichkeit',
              text: 'Dudar und negar stehen bejaht mit dem Subjuntivo, weil sie die Ablehnung schon selbst ausdrücken. Bei den Wahrscheinlichkeitsadverbien hat man die Wahl: „quizá viene“ klingt sicherer als „quizá venga“. Nur „a lo mejor“ bleibt immer im Indikativ.',
            },
          },
          table: {
            headers: ['Expresión', 'Modo', 'Ejemplo'],
            rows: [
              ['dudar que', 'subjuntivo', 'Dudo que lleguen a tiempo.'],
              ['negar que', 'subjuntivo', 'Niega que lo haya dicho.'],
              ['no es seguro que', 'subjuntivo', 'No es seguro que abran hoy.'],
              ['quizá / tal vez', 'los dos', 'Quizá venga. / Quizá viene.'],
              ['a lo mejor', 'indicativo', 'A lo mejor viene.'],
              ['probablemente', 'los dos', 'Probablemente llueva.'],
            ],
          },
        },
        {
          id: 'esg9-p4-cloze',
          type: 'CLOZE',
          instruction: 'Complete con indicativo o subjuntivo.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Creo que Marta ' },
            { kind: 'GAP', gapId: 'f1', solution: ['tiene'], hint: 'tener, ella', width: 7 },
            { kind: 'TEXT', text: ' razón.\nNo creo que ellos lo ' },
            { kind: 'GAP', gapId: 'f2', solution: ['sepan'], hint: 'saber, ellos', width: 7 },
            { kind: 'TEXT', text: ' todavía.\nDudo que ' },
            { kind: 'GAP', gapId: 'f3', solution: ['sea'], hint: 'ser, ello', width: 6 },
            { kind: 'TEXT', text: ' tan fácil.\nEs evidente que ' },
            { kind: 'GAP', gapId: 'f4', solution: ['está'], hint: 'estar, él', width: 6 },
            { kind: 'TEXT', text: ' cansado.\nA lo mejor ' },
            { kind: 'GAP', gapId: 'f5', solution: ['viene'], hint: 'venir, él', width: 7 },
            { kind: 'TEXT', text: ' el jueves.' },
          ],
        },
        {
          id: 'esg9-p4-choice',
          type: 'CHOICE',
          instruction: 'Marque todas las frases correctas.',
          question: '¿Cuáles de estas frases están bien?',
          options: [
            { id: 't1', text: 'No pienso que sea buena idea.' },
            { id: 't2', text: 'No pienso que es buena idea.' },
            { id: 't3', text: 'Está claro que es buena idea.' },
            { id: 't4', text: 'Está claro que sea buena idea.' },
          ],
          multiple: true,
          solution: ['t1', 't3'],
          explanation:
            'Negado, «pensar» pide subjuntivo; afirmativo, «está claro» afirma y pide indicativo. Las otras dos invierten la regla.',
          explanationTranslations: {
            de: 'Verneint verlangt „pensar“ den Subjuntivo; bejaht behauptet „está claro“ und verlangt den Indikativ. Die beiden anderen drehen die Regel um.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – Nebensätze, in denen die Zeitlage entscheidet.
  {
    order: 5,
    title: 'Im Nebensatz',
    subtitle: 'cuando, para que, aunque',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'esg9-p5-h1', type: 'HEADING', level: 1, text: 'Im Nebensatz' },
        {
          id: 'esg9-p5-intro',
          type: 'TEXT',
          text: 'En las páginas anteriores el modo lo decidía el verbo principal. Aquí lo decide otra cosa: si el hecho del que se habla ya se conoce o todavía está por venir. Es el uso que más cuesta, porque en alemán la frase suena idéntica en los dos casos.',
          translations: {
            de: 'Auf den vorigen Seiten entschied das Hauptverb über den Modus. Hier entscheidet etwas anderes: ob der genannte Sachverhalt bereits bekannt ist oder noch aussteht. Dieser Gebrauch macht die meiste Mühe, weil der deutsche Satz in beiden Fällen gleich klingt.',
          },
        },
        {
          id: 'esg9-p5-info-cuando',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: '«cuando» mirando al futuro',
          text: 'Si la frase habla de algo habitual o pasado, «cuando» lleva indicativo. Si mira al futuro, lleva subjuntivo – y nunca futuro: «cuando llegaré» no existe. Lo mismo vale para «en cuanto», «hasta que», «mientras» y «después de que».',
          translations: {
            de: {
              title: '„cuando“ mit Blick nach vorn',
              text: 'Spricht der Satz von Gewohnheit oder Vergangenem, steht nach „cuando“ der Indikativ. Blickt er in die Zukunft, steht der Subjuntivo – und nie das Futur: „cuando llegaré“ gibt es nicht. Dasselbe gilt für „en cuanto“, „hasta que“, „mientras“ und „después de que“.',
            },
          },
          table: {
            headers: ['Habitual o pasado (indicativo)', 'Futuro (subjuntivo)'],
            rows: [
              ['Cuando llego a casa, ceno.', 'Cuando llegue a casa, cenaré.'],
              ['Cuando era niño, vivía aquí.', 'Cuando seas mayor, lo entenderás.'],
              ['Siempre espero hasta que vuelve.', 'Esperaré hasta que vuelva.'],
              ['En cuanto suena el timbre, salen.', 'En cuanto suene el timbre, saldremos.'],
            ],
          },
        },
        {
          id: 'esg9-p5-info-finales',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Finalidad y concesión',
          text: '«Para que» lleva siempre subjuntivo, porque lo que se persigue aún no ha pasado; con un solo sujeto se usa «para» más infinitivo. «Aunque» distingue: con indicativo presenta un hecho conocido, con subjuntivo una posibilidad o algo que se quita importancia.',
          translations: {
            de: {
              title: 'Absicht und Einräumung',
              text: '„Para que“ steht immer mit dem Subjuntivo, weil das Angestrebte noch nicht eingetreten ist; bei nur einem Subjekt nimmt man „para“ plus Infinitiv. „Aunque“ unterscheidet: mit Indikativ stellt es eine bekannte Tatsache dar, mit Subjuntivo eine Möglichkeit oder etwas, dem man das Gewicht nimmt.',
            },
          },
          table: {
            headers: ['Expresión', 'Ejemplo', 'Sentido'],
            rows: [
              ['para + infinitivo', 'Lo hago para ahorrar.', 'ein Subjekt'],
              ['para que + subj.', 'Lo hago para que ahorres.', 'zwei Subjekte'],
              ['aunque + indicativo', 'Aunque llueve, salimos.', 'es regnet tatsächlich'],
              ['aunque + subjuntivo', 'Aunque llueva, saldremos.', 'selbst wenn es regnen sollte'],
              ['antes de que + subj.', 'Llama antes de que se vaya.', 'immer Subjuntivo'],
            ],
          },
        },
        {
          id: 'esg9-p5-cloze',
          type: 'CLOZE',
          instruction: 'Complete con indicativo o subjuntivo.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Cuando ' },
            { kind: 'GAP', gapId: 'g1', solution: ['termine'], hint: 'terminar, yo – Zukunft', width: 9 },
            { kind: 'TEXT', text: ' el informe, te aviso.\nCuando ' },
            { kind: 'GAP', gapId: 'g2', solution: ['tengo'], hint: 'tener, yo – Gewohnheit', width: 7 },
            { kind: 'TEXT', text: ' tiempo, leo un rato.\nTe lo explico para que lo ' },
            { kind: 'GAP', gapId: 'g3', solution: ['entiendas'], hint: 'entender, tú', width: 11 },
            { kind: 'TEXT', text: '.\nAunque ' },
            { kind: 'GAP', gapId: 'g4', solution: ['hace'], hint: 'hacer frío – tatsächlich', width: 6 },
            { kind: 'TEXT', text: ' frío, vamos a la playa.\nLlámame antes de que ' },
            { kind: 'GAP', gapId: 'g5', solution: ['salgas'], hint: 'salir, tú', width: 8 },
            { kind: 'TEXT', text: ' de casa.' },
          ],
        },
        {
          id: 'esg9-p5-choice',
          type: 'CHOICE',
          instruction: 'Elija la frase correcta.',
          question: '«Wenn ich in Madrid ankomme, rufe ich dich an.»',
          options: [
            { id: 'h1', text: 'Cuando llego a Madrid, te llamo.' },
            { id: 'h2', text: 'Cuando llegaré a Madrid, te llamaré.' },
            { id: 'h3', text: 'Cuando llegue a Madrid, te llamaré.' },
          ],
          multiple: false,
          solution: ['h3'],
          explanation:
            'La llegada está en el futuro, así que «cuando» pide subjuntivo. La primera frase describiría una costumbre; la segunda usa un futuro que en español no cabe después de «cuando».',
          explanationTranslations: {
            de: 'Die Ankunft liegt in der Zukunft, „cuando“ verlangt also den Subjuntivo. Der erste Satz beschriebe eine Gewohnheit; der zweite nimmt ein Futur, das im Spanischen nach „cuando“ nicht steht.',
          },
        },
        {
          id: 'esg9-p5-match',
          type: 'MATCHING',
          instruction: 'Relacione la frase con lo que expresa.',
          left: [
            { id: 'k1', text: 'Aunque es caro, lo compro.' },
            { id: 'k2', text: 'Aunque sea caro, lo compro.' },
            { id: 'k3', text: 'Mientras estudio, escucho música.' },
            { id: 'k4', text: 'Mientras estudies, no saldrás.' },
          ],
          right: [
            { id: 'j1', text: 'Es ist teuer – das steht fest.' },
            { id: 'j2', text: 'Selbst wenn es teuer sein sollte.' },
            { id: 'j3', text: 'Gewohnheit in der Gegenwart.' },
            { id: 'j4', text: 'Bedingung mit Blick nach vorn.' },
          ],
          solution: [
            { leftId: 'k1', rightId: 'j1' },
            { leftId: 'k2', rightId: 'j2' },
            { leftId: 'k3', rightId: 'j3' },
            { leftId: 'k4', rightId: 'j4' },
          ],
        },
        {
          id: 'esg9-p5-writing',
          type: 'WRITING',
          instruction: 'Schreiben Sie über Ihre Pläne und Wünsche.',
          prompt:
            'Escriba de seis a diez frases sobre lo que hará cuando cambie algo en su vida (el trabajo, la ciudad, los estudios) y lo que espera de los demás. Use al menos una vez «cuando» con futuro, un «espero que» y un «para que».',
          minWords: 45,
          maxWords: 120,
          aiFeedback: true,
          sampleAnswer:
            'Cuando termine el curso, quiero pasar un mes en Andalucía. Espero que mis compañeros de piso no se muden antes, porque no me apetece buscar otro sitio. Es importante que ahorre algo estos meses para que el viaje no sea una locura. Mis padres quieren que trabaje en verano, pero no creo que encuentre nada bien pagado. Ojalá salga todo como lo he planeado. Aunque no sea perfecto, prefiero intentarlo ahora.',
        },
      ],
    },
  },
];
