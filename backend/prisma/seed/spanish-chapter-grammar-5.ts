import type { UnitSeed } from './chapter-beginner-1';

/**
 * Spanische Grammatik, Kapitel 5: „gustar und verwandte Verben“
 *
 * Drei Seiten. Das Kapitel steht hinter den Pronomen, weil es sie voraussetzt:
 * Ohne „me, te, le, nos, os, les“ aus Kapitel 4 lässt sich über gustar nichts
 * sagen.
 *
 * Aufbau: erst der Satzbau selbst, der beim ersten Mal auf dem Kopf zu stehen
 * scheint; dann die Verstärkung mit „a mí“, die zwei verschiedene Aufgaben
 * hat – Klärung und Betonung – und die Zustimmungsformeln, die daran hängen;
 * zuletzt die Verbgruppe, die demselben Muster folgt und die den eigentlichen
 * Ertrag des Kapitels ausmacht.
 *
 * Bewusst wird nicht von einem „umgekehrten Verb“ gesprochen: gustar ist ein
 * gewöhnliches Verb mit gewöhnlicher Kongruenz. Umgekehrt ist nur die
 * deutsche Übersetzung.
 */
const v = 1;

export const SPANISH_GRAMMAR_5_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – der Satzbau.
  {
    order: 1,
    title: 'Wie ein Satz mit gustar gebaut ist',
    subtitle: 'Das Gefallende ist das Subjekt',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'esg5-p1-h1', type: 'HEADING', level: 1, text: 'Wie ein Satz mit gustar gebaut ist' },
        {
          id: 'esg5-p1-intro',
          type: 'TEXT',
          text: 'En alemán uno dice «ich mag das Buch»: la persona es el sujeto. En español la frase se construye al revés: el libro es el sujeto y la persona es el objeto indirecto. «Me gusta el libro» significa literalmente «das Buch gefällt mir». Una vez visto así, deja de ser raro: el alemán tiene exactamente la misma construcción en «gefallen».',
          translations: {
            de: 'Im Deutschen sagt man „ich mag das Buch“: Die Person ist das Subjekt. Im Spanischen ist der Satz umgekehrt gebaut: Das Buch ist das Subjekt, die Person das indirekte Objekt. „Me gusta el libro“ heißt wörtlich „das Buch gefällt mir“. So gesehen ist es nicht mehr seltsam: Das Deutsche hat mit „gefallen“ genau dieselbe Konstruktion.',
          },
        },
        {
          id: 'esg5-p1-info-estructura',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Solo dos formas del verbo',
          text: 'Como el sujeto es la cosa que gusta, el verbo concuerda con ella y no con la persona. Y como esa cosa suele estar en tercera persona, en la práctica solo hacen falta dos formas: «gusta» para una cosa, «gustan» para varias. Lo que cambia de una frase a otra es el pronombre, no el verbo.',
          translations: {
            de: {
              title: 'Nur zwei Verbformen',
              text: 'Da das Subjekt die gefallende Sache ist, richtet sich das Verb nach ihr und nicht nach der Person. Und weil diese Sache meist in der dritten Person steht, braucht man in der Praxis nur zwei Formen: „gusta“ für eine Sache, „gustan“ für mehrere. Von Satz zu Satz wechselt das Pronomen, nicht das Verb.',
            },
          },
          table: {
            headers: ['Pronombre', 'Verbo', 'Sujeto'],
            rows: [
              ['me', 'gusta', 'el café'],
              ['te', 'gusta', 'esta canción'],
              ['le', 'gustan', 'los perros'],
              ['nos', 'gusta', 'viajar'],
              ['os', 'gustan', 'las películas antiguas'],
              ['les', 'gusta', 'el fútbol'],
            ],
          },
        },
        {
          id: 'esg5-p1-info-infinitivo',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Con infinitivo, siempre singular',
          text: 'Si lo que gusta es una actividad, se pone el infinitivo y el verbo va en singular – también cuando se enumeran varias actividades. «Me gusta leer y escuchar música»: dos infinitivos, pero «gusta», porque se trata de una sola idea.',
          translations: {
            de: {
              title: 'Mit Infinitiv immer Singular',
              text: 'Ist das Gefallende eine Tätigkeit, steht der Infinitiv und das Verb im Singular – auch bei mehreren Tätigkeiten. „Me gusta leer y escuchar música“: zwei Infinitive, aber „gusta“, weil es um eine einzige Vorstellung geht.',
            },
          },
          table: {
            headers: ['Correcto', 'Incorrecto'],
            rows: [
              ['Me gusta bailar.', 'Me gusto bailar.'],
              ['Me gusta leer y viajar.', 'Me gustan leer y viajar.'],
              ['Nos gustan los domingos.', 'Nos gusta los domingos.'],
              ['¿Te gusta el trabajo?', '¿Tú gustas el trabajo?'],
            ],
          },
        },
        {
          id: 'esg5-p1-cloze',
          type: 'CLOZE',
          instruction: 'Complete con «gusta» o «gustan».',
          wordBank: ['gusta', 'gustan'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Me ' },
            { kind: 'GAP', gapId: 'g1', solution: ['gusta'], width: 7 },
            { kind: 'TEXT', text: ' mucho esta ciudad.\nA mi hermano le ' },
            { kind: 'GAP', gapId: 'g2', solution: ['gustan'], width: 8 },
            { kind: 'TEXT', text: ' los coches antiguos.\n¿Te ' },
            { kind: 'GAP', gapId: 'g3', solution: ['gusta'], width: 7 },
            { kind: 'TEXT', text: ' cocinar?\nNo nos ' },
            { kind: 'GAP', gapId: 'g4', solution: ['gustan'], width: 8 },
            { kind: 'TEXT', text: ' las despedidas.\nA los niños les ' },
            { kind: 'GAP', gapId: 'g5', solution: ['gusta'], width: 7 },
            { kind: 'TEXT', text: ' jugar en la calle.' },
          ],
        },
        {
          id: 'esg5-p1-choice',
          type: 'CHOICE',
          instruction: 'Elija la explicación correcta.',
          question: '¿Por qué se dice «me gustan los perros» y no «me gusto los perros»?',
          options: [
            { id: 'o1', text: 'Porque el verbo concuerda con «los perros», que es el sujeto de la frase.' },
            { id: 'o2', text: 'Porque «gustar» no tiene primera persona.' },
            { id: 'o3', text: 'Porque después de «me» el verbo va siempre en plural.' },
          ],
          multiple: false,
          solution: ['o1'],
          explanation:
            '«gustar» sí tiene primera persona – «yo te gusto» significa «du magst mich». Lo que pasa es que en la frase habitual el sujeto es la cosa, no la persona.',
          explanationTranslations: {
            de: '„gustar“ hat sehr wohl eine erste Person – „yo te gusto“ heißt „du magst mich“. Nur ist im üblichen Satz die Sache das Subjekt und nicht die Person.',
          },
        },
        {
          id: 'esg5-p1-order',
          type: 'ORDERING',
          instruction: 'Forme una frase correcta.',
          items: [
            { id: 'w1', text: 'A mis padres' },
            { id: 'w2', text: 'les' },
            { id: 'w3', text: 'gusta' },
            { id: 'w4', text: 'pasear' },
            { id: 'w5', text: 'por la playa.' },
          ],
          solution: ['w1', 'w2', 'w3', 'w4', 'w5'],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – die Verstärkung mit „a mí“ und die Zustimmungsformeln.
  {
    order: 2,
    title: 'a mí, a ti, a él',
    subtitle: 'Klarstellen, betonen, zustimmen',
    estimatedMinutes: 21,
    content: {
      version: v,
      blocks: [
        { id: 'esg5-p2-h1', type: 'HEADING', level: 1, text: 'a mí, a ti, a él' },
        {
          id: 'esg5-p2-intro',
          type: 'TEXT',
          text: 'Delante de la frase puede añadirse «a mí», «a ti», «a Marta». No sustituye al pronombre – este sigue siendo obligatorio –, sino que se suma a él. Y lo hace por dos motivos distintos que conviene no confundir.',
          translations: {
            de: 'Vor den Satz kann „a mí“, „a ti“, „a Marta“ treten. Das ersetzt das Pronomen nicht – dieses bleibt Pflicht –, sondern tritt hinzu. Und zwar aus zwei verschiedenen Gründen, die man nicht verwechseln sollte.',
          },
        },
        {
          id: 'esg5-p2-info-dos',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Dos motivos para añadirlo',
          text: 'El primero es de claridad: «le gusta» no dice si es él, ella o usted, así que muchas veces hay que precisarlo. El segundo es de énfasis, y ahí entra el contraste: «a mí me gusta, a ella no». Sin ese añadido la oposición no se oye.',
          translations: {
            de: {
              title: 'Zwei Gründe für den Zusatz',
              text: 'Der erste ist Klarheit: „le gusta“ sagt nicht, ob él, ella oder usted – oft muss man es präzisieren. Der zweite ist Betonung, und dort kommt der Gegensatz ins Spiel: „a mí me gusta, a ella no“. Ohne den Zusatz hört man den Gegensatz nicht.',
            },
          },
          table: {
            headers: ['Forma tónica', 'Pronombre', 'Ejemplo'],
            rows: [
              ['a mí', 'me', 'A mí me gusta el té.'],
              ['a ti', 'te', 'A ti te gusta el café.'],
              ['a él / a ella / a usted', 'le', 'A ella le gusta el vino.'],
              ['a nosotros', 'nos', 'A nosotros nos gusta el mar.'],
              ['a vosotros', 'os', 'A vosotros os gusta la montaña.'],
              ['a ellos / a ustedes', 'les', 'A ellos les gusta el campo.'],
            ],
          },
        },
        {
          id: 'esg5-p2-info-obligatorio',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'El pronombre no se puede quitar',
          text: 'Este es el error más frecuente del capítulo: poner «a mí gusta» o «a Marta gusta». El pronombre corto es la pieza que sostiene la frase; la forma con «a» es un añadido. Se puede decir «me gusta» sin más, pero nunca «a mí gusta».',
          translations: {
            de: {
              title: 'Das Pronomen darf nicht weg',
              text: 'Das ist der häufigste Fehler des Kapitels: „a mí gusta“ oder „a Marta gusta“ zu schreiben. Das kurze Pronomen ist das tragende Stück des Satzes, die Form mit „a“ ein Zusatz. Man kann „me gusta“ allein sagen, aber niemals „a mí gusta“.',
            },
          },
          table: {
            headers: ['Correcto', 'Incorrecto'],
            rows: [
              ['Me gusta el cine.', '—'],
              ['A mí me gusta el cine.', 'A mí gusta el cine.'],
              ['A Marta le gusta bailar.', 'A Marta gusta bailar.'],
              ['¿A ti te gusta?', '¿A ti gusta?'],
            ],
          },
        },
        {
          id: 'esg5-p2-info-acuerdo',
          type: 'INFO',
          variant: 'TIP',
          title: 'A mí también, a mí tampoco',
          text: 'Para responder que se comparte la opinión hay cuatro fórmulas, y cuál se usa depende de si la frase anterior era afirmativa o negativa. Es una de esas cosas que se aprenden en dos minutos y se usan todos los días.',
          translations: {
            de: {
              title: 'A mí también, a mí tampoco',
              text: 'Um zuzustimmen oder zu widersprechen, gibt es vier Formeln, und welche man nimmt, hängt davon ab, ob der Satz davor bejaht oder verneint war. Eines der Dinge, die man in zwei Minuten lernt und täglich braucht.',
            },
          },
          table: {
            headers: ['Frase anterior', 'De acuerdo', 'En desacuerdo'],
            rows: [
              ['Me gusta el jazz.', 'A mí también.', 'A mí no.'],
              ['No me gusta el jazz.', 'A mí tampoco.', 'A mí sí.'],
            ],
          },
        },
        {
          id: 'esg5-p2-choice',
          type: 'CHOICE',
          instruction: 'Elija la respuesta correcta.',
          question: '«A mí no me gustan las series largas.» Usted piensa lo mismo. ¿Qué dice?',
          options: [
            { id: 'r1', text: 'A mí también.' },
            { id: 'r2', text: 'A mí tampoco.' },
            { id: 'r3', text: 'A mí sí.' },
          ],
          multiple: false,
          solution: ['r2'],
          explanation:
            'La frase era negativa, y para sumarse a una negación se usa «tampoco». «También» solo sirve después de una frase afirmativa.',
          explanationTranslations: {
            de: 'Der Satz war verneint, und um sich einer Verneinung anzuschließen, nimmt man „tampoco“. „También“ passt nur nach einem bejahten Satz.',
          },
        },
        {
          id: 'esg5-p2-cloze',
          type: 'CLOZE',
          instruction: 'Complete el diálogo.',
          wordBank: ['A mí', 'me', 'le', 'también', 'tampoco'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '– A mí ' },
            { kind: 'GAP', gapId: 'a1', solution: ['me'], width: 4 },
            { kind: 'TEXT', text: ' encanta el flamenco. ¿Y a ti?\n– ' },
            { kind: 'GAP', gapId: 'a2', solution: ['A mí'], width: 6 },
            { kind: 'TEXT', text: ' ' },
            { kind: 'GAP', gapId: 'a3', solution: ['también'], width: 9 },
            { kind: 'TEXT', text: '. ¿Y a tu hermana?\n– A ella no ' },
            { kind: 'GAP', gapId: 'a4', solution: ['le'], width: 4 },
            { kind: 'TEXT', text: ' gusta nada.\n– Pues a mi marido ' },
            { kind: 'GAP', gapId: 'a5', solution: ['tampoco'], width: 9 },
            { kind: 'TEXT', text: '.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – die Verbgruppe, die demselben Muster folgt.
  {
    order: 3,
    title: 'Verben nach demselben Muster',
    subtitle: 'encantar, doler, interesar, faltar, parecer',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'esg5-p3-h1', type: 'HEADING', level: 1, text: 'Verben nach demselben Muster' },
        {
          id: 'esg5-p3-intro',
          type: 'TEXT',
          text: 'El esfuerzo de entender «gustar» rinde mucho más de lo que parece, porque hay un grupo entero de verbos que se comporta igual. Quien sabe decir «me gusta» sabe decir también «me duele la cabeza», «nos faltan dos sillas» o «¿qué te parece?».',
          translations: {
            de: 'Die Mühe, „gustar“ zu verstehen, zahlt sich weit über dieses eine Verb hinaus aus, denn eine ganze Gruppe von Verben verhält sich genauso. Wer „me gusta“ sagen kann, kann auch „me duele la cabeza“, „nos faltan dos sillas“ oder „¿qué te parece?“.',
          },
        },
        {
          id: 'esg5-p3-info-grupo',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'El grupo completo',
          text: 'Todos siguen la misma estructura: pronombre de objeto indirecto, verbo en tercera persona, y el sujeto detrás. La traducción al alemán cambia de un verbo a otro, pero la construcción española no.',
          translations: {
            de: {
              title: 'Die ganze Gruppe',
              text: 'Alle folgen demselben Bau: indirektes Objektpronomen, Verb in der dritten Person, Subjekt dahinter. Die deutsche Übersetzung wechselt von Verb zu Verb, die spanische Konstruktion nicht.',
            },
          },
          table: {
            headers: ['Verbo', 'Ejemplo', 'Sentido'],
            rows: [
              ['encantar', 'Me encanta esta canción.', 'mir gefällt sehr'],
              ['doler', 'Me duelen los pies.', 'mir tun weh'],
              ['interesar', 'No me interesa la política.', 'mich interessiert nicht'],
              ['faltar', 'Nos faltan dos sillas.', 'uns fehlen'],
              ['quedar', 'Me quedan cinco euros.', 'mir bleiben'],
              ['parecer', '¿Qué te parece la idea?', 'was hältst du von'],
              ['apetecer', '¿Te apetece un café?', 'hast du Lust auf'],
              ['molestar', 'Me molesta el ruido.', 'mich stört'],
            ],
          },
        },
        {
          id: 'esg5-p3-info-encantar',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: '«encantar» no se gradúa',
          text: '«encantar» ya contiene el grado máximo, así que no admite «mucho»: se dice «me encanta», no «me encanta mucho». Para graduar está «gustar», que acepta toda la escala: «me gusta un poco / bastante / mucho / muchísimo».',
          translations: {
            de: {
              title: '„encantar“ lässt sich nicht steigern',
              text: '„encantar“ enthält den höchsten Grad bereits und verträgt deshalb kein „mucho“: Man sagt „me encanta“, nicht „me encanta mucho“. Zum Abstufen ist „gustar“ da, das die ganze Skala zulässt: „me gusta un poco / bastante / mucho / muchísimo“.',
            },
          },
        },
        {
          id: 'esg5-p3-cloze',
          type: 'CLOZE',
          instruction: 'Complete con el verbo indicado en la forma correcta.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Me ' },
            { kind: 'GAP', gapId: 'v1', solution: ['duele'], hint: 'doler, la cabeza', width: 8 },
            { kind: 'TEXT', text: ' la cabeza desde ayer.\nA mi hija le ' },
            { kind: 'GAP', gapId: 'v2', solution: ['encantan'], hint: 'encantar, los caballos', width: 9 },
            { kind: 'TEXT', text: ' los caballos.\nNos ' },
            { kind: 'GAP', gapId: 'v3', solution: ['faltan'], hint: 'faltar, dos personas', width: 8 },
            { kind: 'TEXT', text: ' dos personas para empezar.\n¿Te ' },
            { kind: 'GAP', gapId: 'v4', solution: ['apetece'], hint: 'apetecer, salir', width: 9 },
            { kind: 'TEXT', text: ' salir esta noche?\n¿Qué os ' },
            { kind: 'GAP', gapId: 'v5', solution: ['parece'], hint: 'parecer, el plan', width: 8 },
            { kind: 'TEXT', text: ' el plan?' },
          ],
        },
        {
          id: 'esg5-p3-match',
          type: 'MATCHING',
          instruction: 'Relacione la frase española con su sentido en alemán.',
          left: [
            { id: 'm1', text: 'Me quedan diez euros.' },
            { id: 'm2', text: 'Me faltan diez euros.' },
            { id: 'm3', text: 'Me molesta el ruido.' },
            { id: 'm4', text: 'Me interesa el tema.' },
          ],
          right: [
            { id: 'n1', text: 'Mir bleiben zehn Euro.' },
            { id: 'n2', text: 'Mir fehlen zehn Euro.' },
            { id: 'n3', text: 'Der Lärm stört mich.' },
            { id: 'n4', text: 'Das Thema interessiert mich.' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'n1' },
            { leftId: 'm2', rightId: 'n2' },
            { leftId: 'm3', rightId: 'n3' },
            { leftId: 'm4', rightId: 'n4' },
          ],
        },
        {
          id: 'esg5-p3-choice',
          type: 'CHOICE',
          instruction: 'Marque todas las frases correctas.',
          question: '¿Cuáles de estas frases están bien construidas?',
          options: [
            { id: 's1', text: 'Me duelen las muelas.' },
            { id: 's2', text: 'Yo duelo las muelas.' },
            { id: 's3', text: 'Me encanta mucho el mar.' },
            { id: 's4', text: 'A nosotros nos interesan estas ofertas.' },
          ],
          multiple: true,
          solution: ['s1', 's4'],
          explanation:
            'La persona nunca es el sujeto de estos verbos, así que «yo duelo» no funciona. Y «encantar» no se combina con «mucho», porque ya expresa el grado máximo.',
          explanationTranslations: {
            de: 'Die Person ist bei diesen Verben nie das Subjekt, „yo duelo“ geht also nicht. Und „encantar“ verträgt kein „mucho“, weil es den höchsten Grad schon ausdrückt.',
          },
        },
        {
          id: 'esg5-p3-writing',
          type: 'WRITING',
          instruction: 'Schreiben Sie über Ihren Geschmack.',
          prompt:
            'Escriba de cinco a ocho frases sobre lo que le gusta y lo que no: música, comida, planes de fin de semana. Compare con alguien de su familia y use al menos tres verbos distintos de este capítulo.',
          minWords: 30,
          maxWords: 100,
          aiFeedback: true,
          sampleAnswer:
            'A mí me encanta la música en directo, sobre todo el jazz. A mi hermana no le gusta nada: prefiere el silencio. A los dos nos gusta comer fuera los domingos, pero a ella le molesta el ruido de los bares. Me interesan mucho las exposiciones, aunque casi nunca me queda tiempo. Si me apetece salir, la llamo, y normalmente le parece buena idea.',
        },
      ],
    },
  },
];
