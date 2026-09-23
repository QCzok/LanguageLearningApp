import type { UnitSeed } from './chapter-beginner-1';

/**
 * Spanisch, Beginner, Kapitel 8: „Cuando era niño“ (A2, Kapitel 2)
 *
 * Fünf Seiten, Aufbau wie in den Kapiteln davor.
 *
 * Das Imperfecto selbst ist leicht: zwei Endungssätze, drei unregelmäßige
 * Verben, keine Akzentfallen. Schwer ist erst die Frage, wann man es statt
 * des Indefinido nimmt – und genau darauf läuft das Kapitel zu. Deshalb stehen
 * die Formen auf Seite 1 und 2, die Gegenüberstellung erst auf Seite 3 und 4.
 *
 * Die Gegenüberstellung wird nicht über Signalwörter gelöst. Listen wie
 * „siempre = Imperfecto“ funktionieren im Test und brechen im ersten echten
 * Satz zusammen, weil dasselbe Ereignis je nach Blickwinkel in beide Zeiten
 * kann. Gearbeitet wird stattdessen mit dem Bild, das im Kopf bleibt: Das
 * Imperfecto ist die Bühne, das Indefinido ist, was darauf passiert. Die
 * Signalwörter stehen trotzdem dabei, aber als Hinweis, nicht als Regel.
 *
 * Seiten einsprachig spanisch mit aufklappbarer Übersetzung (Beginner-Band).
 */
const v = 1;

export const SPANISH_BEGINNER_8_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – die Formen: zwei Endungssätze, drei Ausnahmen.
  {
    order: 1,
    title: 'Cuando era niño',
    subtitle: 'Das Imperfecto und seine drei Ausnahmen',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'es8-p1-h1', type: 'HEADING', level: 1, text: 'Cuando era niño' },
        {
          id: 'es8-p1-image',
          type: 'IMAGE',
          url: 'illustration:childhood-toys',
          alt: 'Ein Holzpferd, Bauklötze und ein Teddybär auf einem Teppich.',
          caption: 'Los juguetes de siempre.',
        },
        {
          id: 'es8-p1-intro',
          type: 'TEXT',
          text: 'El indefinido cuenta lo que pasó una vez. Pero hay otro pasado, el de lo que se repetía y lo que era así durante años: «de pequeño jugaba en la calle», «mi abuela vivía en el campo». Ese es el imperfecto, y formarlo es más fácil que todo lo del capítulo anterior.',
          translations: {
            de: 'Das Indefinido erzählt, was einmal geschah. Es gibt aber eine zweite Vergangenheit, die für das, was sich wiederholte und was jahrelang so war: „de pequeño jugaba en la calle“, „mi abuela vivía en el campo“. Das ist das Imperfecto, und es zu bilden ist einfacher als alles aus dem letzten Kapitel.',
          },
        },
        {
          id: 'es8-p1-info-formas',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Dos juegos de terminaciones',
          text: 'Los verbos en -ar hacen «-aba», y los de -er y -ir hacen «-ía». Eso es todo. No hay verbos que cambien la raíz, no hay acentos que decidan el significado, y la forma de yo y la de él son iguales – por eso el sujeto aparece más a menudo que en otras formas.',
          translations: {
            de: {
              title: 'Zwei Endungssätze',
              text: 'Die Verben auf -ar machen „-aba“, die auf -er und -ir machen „-ía“. Das ist alles. Es gibt keine Verben mit Stammwechsel, keine Akzente, die die Bedeutung entscheiden, und die Form von yo und die von él sind gleich – deshalb steht das Subjekt hier öfter dabei als bei anderen Formen.',
            },
          },
          table: {
            headers: ['', 'jugar', 'comer', 'vivir'],
            rows: [
              ['yo', 'jugaba', 'comía', 'vivía'],
              ['tú', 'jugabas', 'comías', 'vivías'],
              ['él / ella / usted', 'jugaba', 'comía', 'vivía'],
              ['nosotros / nosotras', 'jugábamos', 'comíamos', 'vivíamos'],
              ['vosotros / vosotras', 'jugabais', 'comíais', 'vivíais'],
              ['ellos / ellas / ustedes', 'jugaban', 'comían', 'vivían'],
            ],
          },
        },
        {
          id: 'es8-p1-info-irregulares',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Solo tres verbos son irregulares',
          text: 'En todo el imperfecto hay tres excepciones, y no más: ser, ir y ver. Merece la pena aprenderlas enteras, porque son justamente los verbos con los que se empieza a describir el pasado: «era pequeño», «iba al colegio», «veía a mis primos todos los domingos».',
          translations: {
            de: {
              title: 'Nur drei Verben sind unregelmäßig',
              text: 'Im ganzen Imperfecto gibt es drei Ausnahmen, mehr nicht: ser, ir und ver. Es lohnt sich, sie vollständig zu lernen, denn es sind genau die Verben, mit denen man beginnt, die Vergangenheit zu beschreiben: „era pequeño“, „iba al colegio“, „veía a mis primos todos los domingos“.',
            },
          },
          table: {
            headers: ['', 'ser', 'ir', 'ver'],
            rows: [
              ['yo', 'era', 'iba', 'veía'],
              ['tú', 'eras', 'ibas', 'veías'],
              ['él / ella / usted', 'era', 'iba', 'veía'],
              ['nosotros', 'éramos', 'íbamos', 'veíamos'],
              ['vosotros', 'erais', 'ibais', 'veíais'],
              ['ellos / ustedes', 'eran', 'iban', 'veían'],
            ],
          },
        },
        {
          id: 'es8-p1-cloze',
          type: 'CLOZE',
          instruction: 'Complete con el imperfecto.',
          wordBank: ['jugaba', 'vivíamos', 'era', 'iban', 'veías'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'De pequeño yo ' },
            { kind: 'GAP', gapId: 'a1', solution: ['jugaba'], width: 9, hint: 'jugar' },
            { kind: 'TEXT', text: ' al fútbol todas las tardes.\nEntonces ' },
            { kind: 'GAP', gapId: 'a2', solution: ['vivíamos'], width: 10, hint: 'vivir, nosotros' },
            { kind: 'TEXT', text: ' en un piso muy pequeño.\nMi colegio ' },
            { kind: 'GAP', gapId: 'a3', solution: ['era'], width: 6, hint: 'ser' },
            { kind: 'TEXT', text: ' antiguo y frío.\nMis hermanos ' },
            { kind: 'GAP', gapId: 'a4', solution: ['iban'], width: 7, hint: 'ir' },
            { kind: 'TEXT', text: ' andando a clase.\n¿A tus abuelos los ' },
            { kind: 'GAP', gapId: 'a5', solution: ['veías'], width: 8, hint: 'ver, tú' },
            { kind: 'TEXT', text: ' a menudo?' },
          ],
        },
        {
          id: 'es8-p1-match',
          type: 'MATCHING',
          instruction: 'Relacione el infinitivo con la forma de «nosotros».',
          left: [
            { id: 'l1', text: 'estudiar' },
            { id: 'l2', text: 'ser' },
            { id: 'l3', text: 'ir' },
            { id: 'l4', text: 'salir' },
          ],
          right: [
            { id: 'r1', text: 'estudiábamos' },
            { id: 'r2', text: 'éramos' },
            { id: 'r3', text: 'íbamos' },
            { id: 'r4', text: 'salíamos' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'es8-p1-choice',
          type: 'CHOICE',
          instruction: 'Elija la forma correcta.',
          question: '«Cuando ___ pequeños, mis hermanos y yo ___ mucho.»',
          options: [
            { id: 'o1', text: 'éramos … discutíamos' },
            { id: 'o2', text: 'fuimos … discutimos' },
            { id: 'o3', text: 'éramos … discutimos' },
          ],
          multiple: false,
          solution: ['o1'],
          explanation:
            'Las dos cosas duraban años y se repetían: ser pequeños era un estado, y discutir, una costumbre. Las dos van en imperfecto.',
          explanationTranslations: {
            de: 'Beides dauerte Jahre und wiederholte sich: Klein zu sein war ein Zustand, und das Streiten eine Gewohnheit. Beides steht im Imperfecto.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – wozu es dient: beschreiben, was war und was sich wiederholte.
  {
    order: 2,
    title: 'Así era mi pueblo',
    subtitle: 'Beschreiben und Gewohnheiten erzählen',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'es8-p2-h1', type: 'HEADING', level: 1, text: 'Así era mi pueblo' },
        {
          id: 'es8-p2-intro',
          type: 'TEXT',
          text: 'El imperfecto no sirve para contar qué pasó, sino para decir cómo eran las cosas mientras pasaban. Con él se describen personas, lugares y tiempos, se dan edades y horas, y se habla de lo que uno hacía siempre.',
          translations: {
            de: 'Das Imperfecto dient nicht dazu, zu erzählen, was geschah, sondern zu sagen, wie die Dinge waren, während es geschah. Mit ihm beschreibt man Personen, Orte und Wetter, nennt Alter und Uhrzeiten und spricht davon, was man immer tat.',
          },
        },
        {
          id: 'es8-p2-info-usos',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Cuatro trabajos del imperfecto',
          text: 'Todos tienen algo en común: ninguno mira el final. Al describir una casa, al decir la edad que uno tenía o al contar lo que hacía cada verano, no interesa cuándo empezó ni cuándo acabó; interesa cómo era mientras duraba.',
          translations: {
            de: {
              title: 'Vier Aufgaben des Imperfecto',
              text: 'Allen ist eines gemeinsam: Keine schaut auf das Ende. Wenn man ein Haus beschreibt, sein damaliges Alter nennt oder erzählt, was man jeden Sommer tat, interessiert nicht, wann es anfing oder aufhörte; es interessiert, wie es war, solange es dauerte.',
            },
          },
          table: {
            headers: ['Para qué', 'Ejemplo'],
            rows: [
              ['describir personas y lugares', 'Mi abuela era alta y llevaba siempre el pelo recogido.'],
              ['costumbres que se repetían', 'Todos los veranos íbamos al mismo pueblo.'],
              ['edad, hora y tiempo atmosférico', 'Tenía ocho años. Eran las tres. Llovía mucho.'],
              ['lo que se estaba haciendo', 'Mientras cocinaba, escuchaba la radio.'],
            ],
          },
        },
        {
          id: 'es8-p2-texto',
          type: 'TEXT',
          text: 'Mi pueblo tenía unas trescientas casas y una sola calle ancha. En verano hacía un calor horrible y nadie salía hasta las ocho. Mi abuela vivía enfrente de la iglesia, en una casa muy fresca que olía a membrillo. Todas las tardes nos sentábamos en la puerta y ella hablaba con las vecinas mientras nosotros jugábamos en la plaza. Cuando oíamos las campanas, sabíamos que era la hora de cenar.',
          translations: {
            de: 'Mein Dorf hatte etwa dreihundert Häuser und eine einzige breite Straße. Im Sommer war es furchtbar heiß, und niemand ging vor acht hinaus. Meine Großmutter wohnte gegenüber der Kirche, in einem sehr kühlen Haus, das nach Quitte roch. Jeden Nachmittag saßen wir in der Tür, und sie sprach mit den Nachbarinnen, während wir auf dem Platz spielten. Wenn wir die Glocken hörten, wussten wir, dass es Zeit zum Abendessen war.',
          },
        },
        {
          id: 'es8-p2-choice',
          type: 'CHOICE',
          instruction: 'Lea otra vez y marque todo lo que es cierto.',
          question: '¿Qué dice el texto sobre el pueblo?',
          options: [
            { id: 'y1', text: 'En verano la gente salía tarde por el calor.' },
            { id: 'y2', text: 'La abuela vivía al lado del colegio.' },
            { id: 'y3', text: 'Las campanas marcaban la hora de cenar.' },
            { id: 'y4', text: 'Los niños jugaban en la plaza.' },
          ],
          multiple: true,
          solution: ['y1', 'y3', 'y4'],
          explanation: 'La abuela vivía enfrente de la iglesia, no del colegio.',
          explanationTranslations: {
            de: 'Die Großmutter wohnte gegenüber der Kirche, nicht der Schule.',
          },
        },
        {
          id: 'es8-p2-info-antes',
          type: 'INFO',
          variant: 'TIP',
          title: 'Antes y ahora',
          text: 'La comparación entre el pasado y hoy es el uso más cómodo del imperfecto: una frase en imperfecto, otra en presente, y el contraste se entiende solo. Las palabras que lo anuncian son «antes», «entonces» y «de pequeño».',
          translations: {
            de: {
              title: 'Früher und heute',
              text: 'Der Vergleich zwischen früher und heute ist der bequemste Gebrauch des Imperfecto: ein Satz im Imperfecto, einer im Präsens, und der Gegensatz versteht sich von selbst. Die Wörter, die ihn ankündigen, sind „antes“, „entonces“ und „de pequeño“.',
            },
          },
          table: {
            headers: ['Antes', 'Ahora'],
            rows: [
              ['Antes leía mucho más.', 'Ahora casi no leo.'],
              ['De pequeño comía de todo.', 'Ahora soy muy tiquismiquis.'],
              ['Entonces no había móviles.', 'Hoy todo el mundo tiene uno.'],
            ],
          },
        },
        {
          id: 'es8-p2-cloze',
          type: 'CLOZE',
          instruction: 'Complete la descripción con el imperfecto.',
          wordBank: ['tenía', 'hacía', 'había', 'salíamos', 'era'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'La casa de mis padres ' },
            { kind: 'GAP', gapId: 'b1', solution: ['tenía'], width: 8, hint: 'tener' },
            { kind: 'TEXT', text: ' un patio enorme.\nEn invierno ' },
            { kind: 'GAP', gapId: 'b2', solution: ['hacía'], width: 8, hint: 'hacer' },
            { kind: 'TEXT', text: ' mucho frío dentro.\nNo ' },
            { kind: 'GAP', gapId: 'b3', solution: ['había'], width: 8, hint: 'hay, en pasado' },
            { kind: 'TEXT', text: ' calefacción en las habitaciones.\nLos domingos ' },
            { kind: 'GAP', gapId: 'b4', solution: ['salíamos'], width: 10, hint: 'salir, nosotros' },
            { kind: 'TEXT', text: ' a pasear al río.\nPara mí ' },
            { kind: 'GAP', gapId: 'b5', solution: ['era'], width: 6, hint: 'ser' },
            { kind: 'TEXT', text: ' el mejor día de la semana.' },
          ],
        },
        {
          id: 'es8-p2-writing',
          type: 'WRITING',
          instruction: 'Describa un lugar de su infancia.',
          prompt:
            'Escriba cuatro o cinco frases sobre una casa, un barrio o un pueblo de su infancia: ¿cómo era?, ¿qué había?, ¿qué hacía usted allí? Use solo el imperfecto.',
          minWords: 20,
          maxWords: 90,
          aiFeedback: true,
          sampleAnswer:
            'De pequeña vivíamos en un barrio tranquilo, a las afueras. Nuestro piso era pequeño y tenía un balcón con plantas. Delante había un parque con dos pinos muy grandes. Todas las tardes bajaba a jugar con los vecinos y volvíamos cuando ya era de noche. Los sábados íbamos al mercado con mi padre.',
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – die Gegenüberstellung: Bühne und Ereignis.
  {
    order: 3,
    title: 'El escenario y lo que pasa',
    subtitle: 'Imperfecto oder Indefinido?',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'es8-p3-h1', type: 'HEADING', level: 1, text: 'El escenario y lo que pasa' },
        {
          id: 'es8-p3-intro',
          type: 'TEXT',
          text: 'Aquí está la verdadera dificultad del capítulo. Las dos formas hablan del pasado, y muchas veces las dos son posibles en la misma frase – lo que cambia es lo que el hablante quiere decir.',
          translations: {
            de: 'Hier liegt die eigentliche Schwierigkeit des Kapitels. Beide Formen sprechen von der Vergangenheit, und oft sind beide im selben Satz möglich – was sich ändert, ist das, was die sprechende Person sagen will.',
          },
        },
        {
          id: 'es8-p3-info-escenario',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Imagínelo como una película',
          text: 'El imperfecto es el decorado: la hora, el tiempo que hacía, cómo era la gente, lo que se estaba haciendo. El indefinido es lo que ocurre encima de ese decorado y hace avanzar la historia. Por eso una narración necesita las dos: sin imperfecto no hay ambiente, sin indefinido no pasa nada.',
          translations: {
            de: {
              title: 'Stellen Sie es sich als Film vor',
              text: 'Das Imperfecto ist die Kulisse: die Uhrzeit, das Wetter, wie die Leute waren, was gerade getan wurde. Das Indefinido ist das, was auf dieser Kulisse geschieht und die Geschichte vorantreibt. Deshalb braucht eine Erzählung beide: ohne Imperfecto keine Atmosphäre, ohne Indefinido passiert nichts.',
            },
          },
          table: {
            headers: ['Imperfecto (decorado)', 'Indefinido (acción)'],
            rows: [
              ['Eran las diez de la noche', 'y llamaron a la puerta.'],
              ['Llovía muchísimo', 'y decidimos volver.'],
              ['Estaba en la ducha', 'cuando sonó el teléfono.'],
              ['No conocía a nadie,', 'así que me fui pronto.'],
            ],
          },
        },
        {
          id: 'es8-p3-info-mientras',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'mientras y cuando',
          text: '«Mientras» presenta dos cosas que duraban a la vez, y las dos van en imperfecto. «Cuando» suele marcar el momento en que algo interrumpe lo que duraba: lo que duraba va en imperfecto, la interrupción en indefinido. Estas palabras ayudan, pero no deciden: lo que decide es si se mira el transcurso o el final.',
          translations: {
            de: {
              title: 'mientras und cuando',
              text: '„Mientras“ stellt zwei Dinge nebeneinander, die gleichzeitig dauerten, und beide stehen im Imperfecto. „Cuando“ markiert meist den Augenblick, in dem etwas das Andauernde unterbricht: Das Andauernde steht im Imperfecto, die Unterbrechung im Indefinido. Diese Wörter helfen, entscheiden aber nicht: Es entscheidet, ob man auf den Verlauf oder auf das Ende blickt.',
            },
          },
          table: {
            headers: ['Frase', 'Qué dice'],
            rows: [
              ['Mientras cenábamos, veíamos la tele.', 'las dos cosas duraban a la vez'],
              ['Cuando cenábamos, llegó mi hermano.', 'algo interrumpe la cena'],
              ['Cuando cenamos, vimos la película.', 'primero una cosa, después la otra'],
            ],
          },
        },
        {
          id: 'es8-p3-cloze',
          type: 'CLOZE',
          instruction: 'Complete con el imperfecto o el indefinido.',
          wordBank: ['dormía', 'sonó', 'hacía', 'salimos', 'llamó'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Todavía ' },
            { kind: 'GAP', gapId: 'c1', solution: ['dormía'], width: 8, hint: 'dormir, yo' },
            { kind: 'TEXT', text: ' cuando ' },
            { kind: 'GAP', gapId: 'c2', solution: ['sonó'], width: 7, hint: 'sonar' },
            { kind: 'TEXT', text: ' el despertador.\nEsa mañana ' },
            { kind: 'GAP', gapId: 'c3', solution: ['hacía'], width: 8, hint: 'hacer' },
            { kind: 'TEXT', text: ' mucho frío, pero ' },
            { kind: 'GAP', gapId: 'c4', solution: ['salimos'], width: 9, hint: 'salir, nosotros' },
            { kind: 'TEXT', text: ' igual.\nMientras esperábamos el autobús, me ' },
            { kind: 'GAP', gapId: 'c5', solution: ['llamó'], width: 8, hint: 'llamar' },
            { kind: 'TEXT', text: ' mi jefa.' },
          ],
        },
        {
          id: 'es8-p3-choice1',
          type: 'CHOICE',
          instruction: 'Elija la frase que corresponde a la situación.',
          question: 'Usted estaba viendo una película. A mitad, se fue la luz. ¿Cómo lo cuenta?',
          options: [
            { id: 'p1', text: 'Vi una película cuando se iba la luz.' },
            { id: 'p2', text: 'Veía una película cuando se fue la luz.' },
            { id: 'p3', text: 'Veía una película cuando se iba la luz.' },
          ],
          multiple: false,
          solution: ['p2'],
          explanation:
            'Ver la película duraba: imperfecto. Irse la luz fue un golpe en un momento concreto: indefinido.',
          explanationTranslations: {
            de: 'Das Filmsehen dauerte an: Imperfecto. Der Stromausfall war ein Einschnitt in einem bestimmten Augenblick: Indefinido.',
          },
        },
        {
          id: 'es8-p3-choice2',
          type: 'CHOICE',
          instruction: 'Elija la interpretación correcta.',
          question: '¿Qué diferencia hay entre «Ayer comía con Ana» y «Ayer comí con Ana»?',
          options: [
            { id: 'z1', text: 'Ninguna, las dos son iguales.' },
            { id: 'z2', text: 'La segunda cuenta la comida como un hecho terminado; la primera suena a decorado y pide una continuación.' },
            { id: 'z3', text: 'La primera es más formal que la segunda.' },
          ],
          multiple: false,
          solution: ['z2'],
          explanation:
            '«Comí con Ana» es la historia entera. «Comía con Ana…» abre una escena y el oyente espera lo que pasó: «…cuando la vi entrar».',
          explanationTranslations: {
            de: '„Comí con Ana“ ist die ganze Geschichte. „Comía con Ana…“ eröffnet eine Szene, und die zuhörende Person wartet darauf, was geschah: „…cuando la vi entrar“.',
          },
        },
        {
          id: 'es8-p3-match',
          type: 'MATCHING',
          instruction: 'Relacione el decorado con la acción.',
          left: [
            { id: 'm1', text: 'Eran las tres de la mañana' },
            { id: 'm2', text: 'No teníamos dinero,' },
            { id: 'm3', text: 'Mientras yo cocinaba,' },
            { id: 'm4', text: 'Hacía un calor insoportable,' },
          ],
          right: [
            { id: 'n1', text: 'cuando llamaron al timbre.' },
            { id: 'n2', text: 'así que volvimos andando.' },
            { id: 'n3', text: 'Pablo puso la mesa.' },
            { id: 'n4', text: 'de modo que abrimos todas las ventanas.' },
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
  // Seite 4 – die beiden Zeiten in einem Text; erkennen vor bilden.
  {
    order: 4,
    title: 'Aquella noche',
    subtitle: 'Eine Geschichte mit beiden Zeiten',
    estimatedMinutes: 23,
    content: {
      version: v,
      blocks: [
        { id: 'es8-p4-h1', type: 'HEADING', level: 1, text: 'Aquella noche' },
        {
          id: 'es8-p4-intro',
          type: 'TEXT',
          text: 'Lea la historia y fíjese en cómo se turnan las dos formas: donde el texto describe, hay imperfecto; donde algo ocurre, hay indefinido.',
          translations: {
            de: 'Lesen Sie die Geschichte und achten Sie darauf, wie sich die beiden Formen abwechseln: Wo der Text beschreibt, steht Imperfecto; wo etwas geschieht, steht Indefinido.',
          },
        },
        {
          id: 'es8-p4-texto',
          type: 'TEXT',
          text: 'Era una noche de febrero y llovía desde por la tarde. Yo estaba solo en la oficina, porque mis compañeros se fueron a las seis. No quedaba nadie en el edificio y solo se oía el ruido de la lluvia.\n\nDe repente se apagaron todas las luces. Me levanté, busqué el móvil en el bolso y encendí la linterna. Entonces oí pasos en el pasillo. Abrí la puerta despacio y vi a Marisa, la de seguridad, que subía con una linterna igual que la mía. Nos reímos los dos del susto.\n\nBajamos juntos y salimos a la calle. Todavía llovía, pero ya no me importaba.',
          translations: {
            de: 'Es war eine Februarnacht, und seit dem Nachmittag regnete es. Ich war allein im Büro, denn meine Kollegen gingen um sechs. Niemand war mehr im Gebäude, und man hörte nur das Geräusch des Regens.\n\nPlötzlich gingen alle Lichter aus. Ich stand auf, suchte das Handy in der Tasche und schaltete die Taschenlampe ein. Da hörte ich Schritte im Flur. Ich öffnete langsam die Tür und sah Marisa vom Sicherheitsdienst, die mit einer Taschenlampe wie meiner heraufkam. Wir lachten beide über den Schreck.\n\nWir gingen zusammen hinunter und traten auf die Straße. Es regnete noch immer, aber jetzt störte es mich nicht mehr.',
          },
        },
        {
          id: 'es8-p4-choice',
          type: 'CHOICE',
          instruction: 'Marque todas las respuestas correctas.',
          question: '¿Qué formas describen el decorado de la historia?',
          options: [
            { id: 'q1', text: 'Era una noche de febrero.' },
            { id: 'q2', text: 'Se apagaron todas las luces.' },
            { id: 'q3', text: 'Llovía desde por la tarde.' },
            { id: 'q4', text: 'No quedaba nadie en el edificio.' },
          ],
          multiple: true,
          solution: ['q1', 'q3', 'q4'],
          explanation:
            'Las tres describen cómo era la situación. Apagarse las luces es el suceso que pone la historia en marcha, y por eso va en indefinido.',
          explanationTranslations: {
            de: 'Die drei beschreiben, wie die Lage war. Dass die Lichter ausgingen, ist das Ereignis, das die Geschichte in Gang setzt, und steht deshalb im Indefinido.',
          },
        },
        {
          id: 'es8-p4-cloze',
          type: 'CLOZE',
          instruction: 'Complete la historia de Nadia con la forma adecuada.',
          wordBank: ['esperaba', 'llegó', 'era', 'vimos', 'tenía'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Aquel día yo ' },
            { kind: 'GAP', gapId: 'd1', solution: ['esperaba'], width: 10, hint: 'esperar' },
            { kind: 'TEXT', text: ' en el andén desde las siete. ' },
            { kind: 'GAP', gapId: 'd2', solution: ['Era'], width: 6, hint: 'ser' },
            { kind: 'TEXT', text: ' muy temprano y la estación ' },
            { kind: 'GAP', gapId: 'd3', solution: ['tenía'], width: 8, hint: 'tener' },
            { kind: 'TEXT', text: ' un aire triste. Por fin ' },
            { kind: 'GAP', gapId: 'd4', solution: ['llegó'], width: 8, hint: 'llegar' },
            { kind: 'TEXT', text: ' el tren, y desde la ventanilla ' },
            { kind: 'GAP', gapId: 'd5', solution: ['vimos'], width: 8, hint: 'ver, nosotros' },
            { kind: 'TEXT', text: ' salir el sol.' },
          ],
        },
        {
          id: 'es8-p4-ordering',
          type: 'ORDERING',
          instruction: 'Ordene la historia de la oficina.',
          items: [
            { id: 'w1', text: 'Era una noche de febrero y llovía.' },
            { id: 'w2', text: 'De repente se apagaron las luces.' },
            { id: 'w3', text: 'Encendí la linterna del móvil.' },
            { id: 'w4', text: 'Oí pasos en el pasillo.' },
            { id: 'w5', text: 'Vi a Marisa, la de seguridad.' },
            { id: 'w6', text: 'Salimos juntos a la calle.' },
          ],
          solution: ['w1', 'w2', 'w3', 'w4', 'w5', 'w6'],
        },
        {
          id: 'es8-p4-writing',
          type: 'WRITING',
          instruction: 'Cuente un susto o una sorpresa.',
          prompt:
            'Escriba de cinco a siete frases sobre algo que le pasó una vez. Empiece con dos frases de decorado en imperfecto (hora, tiempo, dónde estaba) y siga con lo que ocurrió en indefinido.',
          minWords: 25,
          maxWords: 110,
          aiFeedback: true,
          sampleAnswer:
            'Era un domingo por la tarde y hacía mucho viento. Yo estaba en casa de mis padres y leía en el salón. De repente oí un ruido muy fuerte en el patio. Me levanté y salí a mirar. El viento tiró una maceta grande. Recogí los trozos, volví dentro y cerré bien la puerta. Después no pude concentrarme en el libro.',
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – Rückblick auf das ganze Kapitel.
  {
    order: 5,
    title: '¿Ya sabes hacerlo?',
    subtitle: 'Rückblick auf das ganze Kapitel',
    estimatedMinutes: 19,
    content: {
      version: v,
      blocks: [
        { id: 'es8-p5-h1', type: 'HEADING', level: 1, text: '¿Ya sabes hacerlo?' },
        {
          id: 'es8-p5-intro',
          type: 'TEXT',
          text: 'Aquí vuelve todo el capítulo: las formas del imperfecto, sus tres irregulares, los usos descriptivos y el reparto con el indefinido.',
          translations: {
            de: 'Hier kommt das ganze Kapitel noch einmal: die Formen des Imperfecto, seine drei unregelmäßigen Verben, die beschreibenden Verwendungen und die Aufteilung mit dem Indefinido.',
          },
        },
        {
          id: 'es8-p5-cloze',
          type: 'CLOZE',
          instruction: 'Complete el recuerdo de Marcos.',
          wordBank: ['era', 'íbamos', 'gustaba', 'fuimos', 'cambió'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Cuando yo ' },
            { kind: 'GAP', gapId: 'g1', solution: ['era'], width: 6 },
            { kind: 'TEXT', text: ' pequeño, todos los veranos ' },
            { kind: 'GAP', gapId: 'g2', solution: ['íbamos'], width: 8 },
            { kind: 'TEXT', text: ' al mismo camping. A mi madre no le ' },
            { kind: 'GAP', gapId: 'g3', solution: ['gustaba'], width: 9 },
            { kind: 'TEXT', text: ' nada, pero nunca decía nada. Un año ' },
            { kind: 'GAP', gapId: 'g4', solution: ['fuimos'], width: 8 },
            { kind: 'TEXT', text: ' a la montaña en vez de a la playa, y desde entonces todo ' },
            { kind: 'GAP', gapId: 'g5', solution: ['cambió'], width: 8 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'es8-p5-choice1',
          type: 'CHOICE',
          instruction: 'Marque todas las frases correctas.',
          question: '¿Cuáles de estas frases son correctas?',
          options: [
            { id: 's1', text: 'Cuando era niño, veía mucho la tele.' },
            { id: 's2', text: 'Cuando fui niño, vi mucho la tele.' },
            { id: 's3', text: 'Ayer me levanté a las seis.' },
            { id: 's4', text: 'Ayer me levantaba a las seis.' },
          ],
          multiple: true,
          solution: ['s1', 's3'],
          explanation:
            'La infancia es un estado que duraba, y ver la tele era una costumbre: imperfecto. Levantarse ayer es un hecho puntual y terminado: indefinido.',
          explanationTranslations: {
            de: 'Die Kindheit ist ein andauernder Zustand, und Fernsehen war eine Gewohnheit: Imperfecto. Gestern aufzustehen ist ein einmaliger, abgeschlossener Vorgang: Indefinido.',
          },
        },
        {
          id: 'es8-p5-match',
          type: 'MATCHING',
          instruction: 'Relacione la pregunta con la respuesta.',
          left: [
            { id: 'a1', text: '¿Dónde vivías de pequeña?' },
            { id: 'a2', text: '¿Qué hacías los domingos?' },
            { id: 'a3', text: '¿Cuántos años tenías entonces?' },
            { id: 'a4', text: '¿Y qué pasó al final?' },
          ],
          right: [
            { id: 'b1', text: 'En un pueblo pequeño, cerca de Burgos.' },
            { id: 'b2', text: 'Íbamos a casa de mis tíos y comíamos allí.' },
            { id: 'b3', text: 'Unos diez u once, creo.' },
            { id: 'b4', text: 'Nos mudamos a la ciudad en septiembre.' },
          ],
          solution: [
            { leftId: 'a1', rightId: 'b1' },
            { leftId: 'a2', rightId: 'b2' },
            { leftId: 'a3', rightId: 'b3' },
            { leftId: 'a4', rightId: 'b4' },
          ],
        },
        {
          id: 'es8-p5-choice2',
          type: 'CHOICE',
          instruction: 'Elija la continuación que encaja.',
          question: '«Eran las once de la noche y no había nadie en la calle…»',
          options: [
            { id: 't1', text: '…cuando oímos un grito.' },
            { id: 't2', text: '…cuando oíamos un grito.' },
            { id: 't3', text: '…y oíamos un grito de repente.' },
          ],
          multiple: false,
          solution: ['t1'],
          explanation:
            'La frase ha montado el decorado en imperfecto. Lo que ocurre encima – el grito – va en indefinido.',
          explanationTranslations: {
            de: 'Der Satz hat die Kulisse im Imperfecto aufgebaut. Was darauf geschieht – der Schrei –, steht im Indefinido.',
          },
        },
        {
          id: 'es8-p5-writing',
          type: 'WRITING',
          instruction: 'Antes y ahora.',
          prompt:
            'Escriba de seis a ocho frases comparando su vida de hace diez años con la de hoy: ¿dónde vivía?, ¿qué hacía?, ¿qué le gustaba? Use el imperfecto para el pasado y el presente para hoy, y cuente al menos una cosa que cambió (indefinido).',
          minWords: 30,
          maxWords: 120,
          aiFeedback: true,
          sampleAnswer:
            'Hace diez años vivía con dos compañeras en un piso del centro. Trabajaba en una tienda y salía casi todas las noches. No tenía coche y siempre iba en bici. Me gustaba mucho aquella vida, pero era bastante cansada. En 2019 cambié de trabajo y me mudé a las afueras. Ahora vivo sola, me levanto temprano y salgo mucho menos. Creo que estoy más tranquila que antes.',
        },
      ],
    },
  },
];
