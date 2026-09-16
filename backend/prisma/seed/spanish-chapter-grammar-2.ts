import type { UnitSeed } from './chapter-beginner-1';

/**
 * Spanische Grammatik, Kapitel 2: „ser und estar“
 *
 * Drei Seiten. Das Kapitel, das im Kursbuch am häufigsten nachgeschlagen wird:
 * Beginner 1 führt „soy de“ gegen „estoy en“ ein, Beginner 3 baut darauf die
 * Unterscheidung „hay“/„está“ auf – die Regel dahinter steht hier.
 *
 * Aufbau: erst jedes Verb für sich mit seinen Verwendungen, dann die Fälle, in
 * denen beide vor demselben Adjektiv stehen können und die Bedeutung sich
 * ändert. Diese dritte Seite ist der eigentliche Grund, warum man das Kapitel
 * aufschlägt.
 *
 * Die verbreitete Merkformel „ser = dauerhaft, estar = vorübergehend“ steht
 * hier bewusst nicht als Regel: Sie erklärt „está muerto“ nicht und führt bei
 * „es joven“ in die Irre. Stattdessen wird nach Art der Aussage getrennt –
 * Identität und Einordnung gegen Zustand und Ort.
 */
const v = 1;

export const SPANISH_GRAMMAR_2_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – ser: was etwas ist.
  {
    order: 1,
    title: 'ser',
    subtitle: 'Was jemand oder etwas ist',
    estimatedMinutes: 20,
    content: {
      version: v,
      blocks: [
        { id: 'esg2-p1-h1', type: 'HEADING', level: 1, text: 'ser' },
        {
          id: 'esg2-p1-intro',
          type: 'TEXT',
          text: 'El alemán tiene un solo «sein» y reparte su trabajo entre dos verbos españoles. «ser» se encarga de lo que define: quién es alguien, qué es una cosa, a qué categoría pertenece. Es el verbo de la identidad y de la clasificación.',
          translations: {
            de: 'Das Deutsche hat ein einziges „sein“ und verteilt dessen Arbeit auf zwei spanische Verben. „ser“ übernimmt das Definierende: wer jemand ist, was eine Sache ist, zu welcher Kategorie sie gehört. Es ist das Verb der Identität und der Einordnung.',
          },
        },
        {
          id: 'esg2-p1-info-conj',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Conjugación de «ser»',
          text: 'Es de los verbos más irregulares del español: las formas no se parecen ni entre sí ni al infinitivo. Hay que aprenderlas de memoria, y vale la pena hacerlo pronto, porque aparecen en cada frase.',
          translations: {
            de: {
              title: 'Konjugation von „ser“',
              text: 'Es gehört zu den unregelmäßigsten Verben des Spanischen: Die Formen ähneln weder einander noch dem Infinitiv. Man muss sie auswendig lernen, und das lohnt sich früh, denn sie kommen in jedem Satz vor.',
            },
          },
          table: {
            headers: ['Persona', 'ser'],
            rows: [
              ['yo', 'soy'],
              ['tú', 'eres'],
              ['él / ella / usted', 'es'],
              ['nosotros', 'somos'],
              ['vosotros', 'sois'],
              ['ellos / ellas / ustedes', 'son'],
            ],
          },
        },
        {
          id: 'esg2-p1-info-usos',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Cuándo se usa «ser»',
          text: 'Seis usos cubren casi todo. Fíjese en que la hora y el precio van con «ser» aunque cambien continuamente: no es cuestión de duración, sino de qué tipo de afirmación se hace.',
          translations: {
            de: {
              title: 'Wann „ser“ steht',
              text: 'Sechs Verwendungen decken fast alles ab. Beachten Sie, dass Uhrzeit und Preis mit „ser“ stehen, obwohl sie sich fortwährend ändern: Es geht nicht um Dauer, sondern darum, welche Art von Aussage gemacht wird.',
            },
          },
          table: {
            headers: ['Uso', 'Ejemplo'],
            rows: [
              ['identidad', 'Soy Nadia. / Es mi hermano.'],
              ['origen', 'Somos de Alemania.'],
              ['profesión', 'Mi madre es médica.'],
              ['característica', 'El coche es rojo. / Es muy alta.'],
              ['hora y fecha', 'Son las tres. / Hoy es lunes.'],
              ['precio y cantidad', '¿Cuánto es? – Son doce euros.'],
            ],
          },
        },
        {
          id: 'esg2-p1-cloze',
          type: 'CLOZE',
          instruction: 'Complete con la forma correcta de «ser».',
          wordBank: ['soy', 'eres', 'es', 'somos', 'son'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Yo ' },
            { kind: 'GAP', gapId: 's1', solution: ['soy'], width: 6 },
            { kind: 'TEXT', text: ' profesora de español.\n¿De dónde ' },
            { kind: 'GAP', gapId: 's2', solution: ['eres'], width: 7 },
            { kind: 'TEXT', text: ' tú?\nMi coche ' },
            { kind: 'GAP', gapId: 's3', solution: ['es'], width: 5 },
            { kind: 'TEXT', text: ' viejo pero bueno.\nNosotros ' },
            { kind: 'GAP', gapId: 's4', solution: ['somos'], width: 8 },
            { kind: 'TEXT', text: ' cuatro en casa.\n' },
            { kind: 'GAP', gapId: 's5', solution: ['Son'], width: 6 },
            { kind: 'TEXT', text: ' las diez y media.' },
          ],
        },
        {
          id: 'esg2-p1-match',
          type: 'MATCHING',
          instruction: 'Relacione la frase con el uso de «ser».',
          left: [
            { id: 'l1', text: 'Es arquitecto.' },
            { id: 'l2', text: 'Son las ocho.' },
            { id: 'l3', text: 'Somos de Valencia.' },
            { id: 'l4', text: 'Son quince euros.' },
          ],
          right: [
            { id: 'r1', text: 'profesión' },
            { id: 'r2', text: 'hora' },
            { id: 'r3', text: 'origen' },
            { id: 'r4', text: 'precio' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'esg2-p1-choice',
          type: 'CHOICE',
          instruction: 'Elija la explicación correcta.',
          question: '¿Por qué se dice «Son las tres» y no «Están las tres», si la hora cambia continuamente?',
          options: [
            { id: 'o1', text: 'Porque la hora es una excepción sin explicación.' },
            { id: 'o2', text: 'Porque no importa la duración, sino el tipo de afirmación: se identifica un momento.' },
            { id: 'o3', text: 'Porque «estar» no se puede usar con números.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation:
            'La idea de que «ser» es lo duradero y «estar» lo pasajero falla aquí y en otros casos. Decir la hora es identificar qué momento es, y la identificación va siempre con «ser».',
          explanationTranslations: {
            de: 'Die Vorstellung, „ser“ sei das Dauerhafte und „estar“ das Vorübergehende, scheitert hier und in anderen Fällen. Die Uhrzeit zu nennen heißt, den Moment zu identifizieren – und Identifikation steht immer mit „ser“.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – estar: wo und wie etwas ist.
  {
    order: 2,
    title: 'estar',
    subtitle: 'Wo etwas ist und in welchem Zustand',
    estimatedMinutes: 20,
    content: {
      version: v,
      blocks: [
        { id: 'esg2-p2-h1', type: 'HEADING', level: 1, text: 'estar' },
        {
          id: 'esg2-p2-intro',
          type: 'TEXT',
          text: '«estar» se encarga de dos cosas: del lugar y del estado. Dónde se encuentra algo, y cómo se encuentra alguien en este momento. Si «ser» dice qué es una cosa, «estar» dice cómo la encontramos hoy.',
          translations: {
            de: '„estar“ übernimmt zweierlei: den Ort und den Zustand. Wo sich etwas befindet und wie es jemandem gerade geht. Wenn „ser“ sagt, was eine Sache ist, sagt „estar“, wie wir sie heute antreffen.',
          },
        },
        {
          id: 'esg2-p2-info-conj',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Conjugación de «estar»',
          text: 'Menos irregular que «ser», pero con una particularidad: todas las formas menos «estoy» y «estamos» llevan acento escrito, porque la fuerza de la voz cae en la última sílaba.',
          translations: {
            de: {
              title: 'Konjugation von „estar“',
              text: 'Weniger unregelmäßig als „ser“, aber mit einer Besonderheit: Alle Formen außer „estoy“ und „estamos“ tragen einen Schriftakzent, weil die Betonung auf die letzte Silbe fällt.',
            },
          },
          table: {
            headers: ['Persona', 'estar'],
            rows: [
              ['yo', 'estoy'],
              ['tú', 'estás'],
              ['él / ella / usted', 'está'],
              ['nosotros', 'estamos'],
              ['vosotros', 'estáis'],
              ['ellos / ellas / ustedes', 'están'],
            ],
          },
        },
        {
          id: 'esg2-p2-info-usos',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Cuándo se usa «estar»',
          text: 'El lugar va siempre con «estar», sin excepción – también cuando no cambia nunca: «Madrid está en España». El estado abarca tanto el ánimo como el resultado de algo que ha pasado: una puerta «está abierta» porque alguien la abrió.',
          translations: {
            de: {
              title: 'Wann „estar“ steht',
              text: 'Der Ort steht immer mit „estar“, ausnahmslos – auch wenn er sich nie ändert: „Madrid está en España“. Der Zustand umfasst sowohl die Stimmung als auch das Ergebnis eines Vorgangs: Eine Tür „está abierta“, weil jemand sie geöffnet hat.',
            },
          },
          table: {
            headers: ['Uso', 'Ejemplo'],
            rows: [
              ['lugar', 'El banco está en la esquina.'],
              ['lugar permanente', 'Madrid está en España.'],
              ['estado de ánimo', 'Estoy cansado. / Está contenta.'],
              ['estado físico', 'La sopa está fría.'],
              ['resultado de una acción', 'La puerta está abierta.'],
              ['acción en curso', 'Estoy leyendo.'],
            ],
          },
        },
        {
          id: 'esg2-p2-info-lugar',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'El lugar no admite «ser»',
          text: 'Esta es la regla más segura de todo el capítulo, y conviene fiarse de ella: si la frase dice dónde se encuentra algo, el verbo es «estar». Da igual que sea una persona de paso o una ciudad que lleva mil años en el mismo sitio. La única excepción es un acto que ocurre en un lugar: «La fiesta es en mi casa» – ahí no se localiza un objeto, se dice dónde tiene lugar un acontecimiento.',
          translations: {
            de: {
              title: 'Der Ort verträgt kein „ser“',
              text: 'Das ist die verlässlichste Regel des ganzen Kapitels, und man darf sich auf sie verlassen: Sagt der Satz, wo sich etwas befindet, steht „estar“. Ob es eine Person auf der Durchreise ist oder eine Stadt, die seit tausend Jahren am selben Fleck liegt, spielt keine Rolle. Die einzige Ausnahme ist eine Veranstaltung, die an einem Ort stattfindet: „La fiesta es en mi casa“ – dort wird kein Gegenstand verortet, sondern gesagt, wo ein Ereignis stattfindet.',
            },
          },
          table: {
            headers: ['Correcto', 'Incorrecto'],
            rows: [
              ['Madrid está en España.', 'Madrid es en España.'],
              ['¿Dónde estás?', '¿Dónde eres?'],
              ['El libro está en la mesa.', 'El libro es en la mesa.'],
              ['La fiesta es en mi casa.', '(acontecimiento: aquí sí «ser»)'],
            ],
          },
        },
        {
          id: 'esg2-p2-cloze',
          type: 'CLOZE',
          instruction: 'Complete con la forma correcta de «estar».',
          wordBank: ['estoy', 'estás', 'está', 'estamos', 'están'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'La farmacia ' },
            { kind: 'GAP', gapId: 'e1', solution: ['está'], width: 7 },
            { kind: 'TEXT', text: ' en la esquina.\nHoy yo ' },
            { kind: 'GAP', gapId: 'e2', solution: ['estoy'], width: 7 },
            { kind: 'TEXT', text: ' muy cansado.\n¿Dónde ' },
            { kind: 'GAP', gapId: 'e3', solution: ['estás'], width: 7 },
            { kind: 'TEXT', text: ' ahora?\nMis padres ' },
            { kind: 'GAP', gapId: 'e4', solution: ['están'], width: 8 },
            { kind: 'TEXT', text: ' de vacaciones.\nNosotros ya ' },
            { kind: 'GAP', gapId: 'e5', solution: ['estamos'], width: 9 },
            { kind: 'TEXT', text: ' en la estación.' },
          ],
        },
        {
          id: 'esg2-p2-choice',
          type: 'CHOICE',
          instruction: 'Marque todas las frases correctas.',
          question: '¿Cuáles de estas frases son correctas?',
          options: [
            { id: 'q1', text: 'Barcelona está en la costa.' },
            { id: 'q2', text: 'Barcelona es en la costa.' },
            { id: 'q3', text: 'La reunión es en la oficina.' },
            { id: 'q4', text: 'Mi hermana es en casa.' },
          ],
          multiple: true,
          solution: ['q1', 'q3'],
          explanation:
            'Una ciudad se localiza, así que «está». Una reunión es un acontecimiento que tiene lugar en un sitio, y eso va con «ser». Una persona se localiza: «mi hermana está en casa».',
          explanationTranslations: {
            de: 'Eine Stadt wird verortet, also „está“. Eine Besprechung ist ein Ereignis, das an einem Ort stattfindet, und das steht mit „ser“. Eine Person wird verortet: „mi hermana está en casa“.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – dasselbe Adjektiv, zwei Bedeutungen.
  {
    order: 3,
    title: 'Dasselbe Adjektiv, zwei Bedeutungen',
    subtitle: 'Wo die Wahl den Sinn verändert',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'esg2-p3-h1', type: 'HEADING', level: 1, text: 'Dasselbe Adjektiv, zwei Bedeutungen' },
        {
          id: 'esg2-p3-intro',
          type: 'TEXT',
          text: 'Con la mayoría de los adjetivos solo uno de los dos verbos es posible. Pero hay un grupo pequeño que admite los dos – y entonces la frase significa dos cosas distintas. Esta es la página por la que se abre este capítulo.',
          translations: {
            de: 'Bei den meisten Adjektiven ist nur eines der beiden Verben möglich. Es gibt aber eine kleine Gruppe, die beide zulässt – und dann bedeutet der Satz zweierlei. Das ist die Seite, wegen der man dieses Kapitel aufschlägt.',
          },
        },
        {
          id: 'esg2-p3-info-pares',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Los pares que hay que conocer',
          text: 'Con «ser» el adjetivo describe cómo es alguien o algo por naturaleza; con «estar», cómo se encuentra ahora. En algunos pares la diferencia es tan grande que se trata prácticamente de dos palabras distintas.',
          translations: {
            de: {
              title: 'Die Paare, die man kennen muss',
              text: 'Mit „ser“ beschreibt das Adjektiv, wie jemand oder etwas von Natur aus ist; mit „estar“, wie es sich gerade verhält. Bei einigen Paaren ist der Unterschied so groß, dass es praktisch zwei verschiedene Wörter sind.',
            },
          },
          table: {
            headers: ['Adjetivo', 'con ser', 'con estar'],
            rows: [
              ['listo', 'es listo – er ist klug', 'está listo – er ist fertig'],
              ['aburrido', 'es aburrido – er ist langweilig', 'está aburrido – ihm ist langweilig'],
              ['rico', 'es rico – er ist reich', 'está rico – es schmeckt gut'],
              ['verde', 'es verde – es ist grün', 'está verde – es ist unreif'],
              ['malo', 'es malo – er ist böse', 'está malo – er ist krank'],
              ['bueno', 'es bueno – er ist gut', 'está bueno – es schmeckt gut'],
              ['abierto', 'es abierto – er ist aufgeschlossen', 'está abierto – es ist geöffnet'],
            ],
          },
        },
        {
          id: 'esg2-p3-choice-listo',
          type: 'CHOICE',
          instruction: 'Elija la traducción correcta.',
          question: '«Los niños ya están listos.» ¿Qué significa?',
          options: [
            { id: 'a1', text: 'Die Kinder sind schon klug.' },
            { id: 'a2', text: 'Die Kinder sind schon fertig.' },
            { id: 'a3', text: 'Die Kinder sind schon müde.' },
          ],
          multiple: false,
          solution: ['a2'],
          explanation:
            'Con «estar», «listo» significa «fertig, bereit». Para decir que alguien es inteligente hace falta «ser listo».',
          explanationTranslations: {
            de: 'Mit „estar“ bedeutet „listo“ „fertig, bereit“. Um zu sagen, dass jemand klug ist, braucht man „ser listo“.',
          },
        },
        {
          id: 'esg2-p3-cloze',
          type: 'CLOZE',
          instruction: 'Complete con «es» o «está» según el sentido indicado entre paréntesis.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Esta sopa ' },
            { kind: 'GAP', gapId: 'p1', solution: ['está'], hint: 'schmeckt gut', width: 7 },
            { kind: 'TEXT', text: ' muy rica.\nSu familia ' },
            { kind: 'GAP', gapId: 'p2', solution: ['es'], hint: 'wohlhabend', width: 5 },
            { kind: 'TEXT', text: ' muy rica.\nEl plátano todavía ' },
            { kind: 'GAP', gapId: 'p3', solution: ['está'], hint: 'unreif', width: 7 },
            { kind: 'TEXT', text: ' verde.\nMi vecino ' },
            { kind: 'GAP', gapId: 'p4', solution: ['está'], hint: 'krank', width: 7 },
            { kind: 'TEXT', text: ' malo desde el lunes.\nLa película ' },
            { kind: 'GAP', gapId: 'p5', solution: ['es'], hint: 'langweilig', width: 5 },
            { kind: 'TEXT', text: ' muy aburrida.' },
          ],
        },
        {
          id: 'esg2-p3-match',
          type: 'MATCHING',
          instruction: 'Relacione la frase española con su sentido.',
          left: [
            { id: 'm1', text: 'Pedro es aburrido.' },
            { id: 'm2', text: 'Pedro está aburrido.' },
            { id: 'm3', text: 'La tienda es abierta.' },
            { id: 'm4', text: 'La tienda está abierta.' },
          ],
          right: [
            { id: 'n1', text: 'Pedro ist ein langweiliger Mensch.' },
            { id: 'n2', text: 'Pedro langweilt sich gerade.' },
            { id: 'n3', text: 'Der Laden ist aufgeschlossen (im übertragenen Sinn).' },
            { id: 'n4', text: 'Der Laden hat geöffnet.' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'n1' },
            { leftId: 'm2', rightId: 'n2' },
            { leftId: 'm3', rightId: 'n3' },
            { leftId: 'm4', rightId: 'n4' },
          ],
        },
        {
          id: 'esg2-p3-info-formula',
          type: 'INFO',
          variant: 'TIP',
          title: 'Por qué la fórmula corriente no basta',
          text: 'Muchos libros resumen todo en «ser = permanente, estar = temporal». Funciona a veces, pero engaña a menudo: «está muerto» es todo lo permanente que algo puede ser, y «es joven» no dura para siempre. Conviene pensar mejor en el tipo de afirmación: ¿se dice qué es algo, o cómo se encuentra?',
          translations: {
            de: {
              title: 'Warum die übliche Merkformel nicht ausreicht',
              text: 'Viele Bücher fassen alles in „ser = dauerhaft, estar = vorübergehend“. Das funktioniert manchmal, täuscht aber oft: „está muerto“ ist so dauerhaft, wie etwas nur sein kann, und „es joven“ hält nicht ewig. Besser denkt man an die Art der Aussage: Wird gesagt, was etwas ist – oder wie es sich gerade verhält?',
            },
          },
        },
        {
          id: 'esg2-p3-writing',
          type: 'WRITING',
          instruction: 'Beschreiben Sie eine Person.',
          prompt:
            'Escriba de cuatro a seis frases sobre una persona que conoce bien: cómo es (carácter, aspecto, profesión) y cómo está hoy (ánimo, lugar). Use «ser» al menos tres veces y «estar» al menos tres veces.',
          minWords: 20,
          maxWords: 90,
          aiFeedback: true,
          sampleAnswer:
            'Mi amiga Laura es profesora de música. Es alta, morena y muy divertida. Es de Sevilla, pero ahora vive en Berlín. Esta semana está en Madrid con su familia. Está bastante cansada porque el viaje fue largo, pero está muy contenta de ver a sus padres.',
        },
      ],
    },
  },
];
