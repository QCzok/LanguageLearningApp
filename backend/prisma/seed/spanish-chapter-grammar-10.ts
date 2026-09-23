import type { UnitSeed } from './chapter-beginner-1';

/**
 * Spanische Grammatik, Kapitel 10: „Imperativ und Aufforderung“
 *
 * Drei Seiten. Das Kapitel steht hinter dem Subjuntivo, weil es ihn
 * voraussetzt: Der verneinte Imperativ hat keine eigenen Formen, er leiht
 * sich die aus Kapitel 9.
 *
 * Aufbau: erst der bejahte Imperativ, dessen vier Formen aus vier
 * verschiedenen Quellen stammen und deshalb einzeln erklärt werden; dann der
 * verneinte, der dagegen eine einzige Reihe ist; zuletzt die Pronomen, deren
 * Stellung sich zwischen beiden umkehrt – und die Frage, wie man auffordert,
 * ohne zu befehlen.
 *
 * Die Höflichkeitsseite steht mit Absicht im Grammatikbuch und nicht nur im
 * Kursbuch: Ein Imperativ, der grammatisch richtig und im Ton verfehlt ist,
 * richtet mehr Schaden an als ein Formfehler.
 */
const v = 1;

export const SPANISH_GRAMMAR_10_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – bejahter Imperativ.
  {
    order: 1,
    title: 'Der bejahte Imperativ',
    subtitle: 'Vier Formen aus vier Quellen',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'esg10-p1-h1', type: 'HEADING', level: 1, text: 'Der bejahte Imperativ' },
        {
          id: 'esg10-p1-intro',
          type: 'TEXT',
          text: 'El imperativo afirmativo tiene cuatro formas – tú, vosotros, usted y ustedes –, y cada una se obtiene de un sitio distinto. Parece un lío, pero solo la de «tú» tiene irregularidades que aprender; las demás salen de reglas fijas.',
          translations: {
            de: 'Der bejahte Imperativ hat vier Formen – tú, vosotros, usted und ustedes –, und jede stammt aus einer anderen Quelle. Das sieht nach Durcheinander aus, doch nur die tú-Form hat Unregelmäßigkeiten zu lernen; die übrigen ergeben sich aus festen Regeln.',
          },
        },
        {
          id: 'esg10-p1-info-cuatro',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'De dónde sale cada forma',
          text: 'La de «tú» es el presente de indicativo sin la -s final: «hablas» da «habla». La de «vosotros» sustituye la -r del infinitivo por una -d: «hablar» da «hablad». Las de «usted» y «ustedes» se toman del subjuntivo tal cual.',
          translations: {
            de: {
              title: 'Woher jede Form kommt',
              text: 'Die tú-Form ist das Präsens Indikativ ohne das -s am Ende: „hablas“ ergibt „habla“. Die vosotros-Form ersetzt das -r des Infinitivs durch ein -d: „hablar“ ergibt „hablad“. Die Formen für usted und ustedes werden unverändert dem Subjuntivo entnommen.',
            },
          },
          table: {
            headers: ['Persona', 'hablar', 'comer', 'vivir'],
            rows: [
              ['tú', 'habla', 'come', 'vive'],
              ['vosotros', 'hablad', 'comed', 'vivid'],
              ['usted', 'hable', 'coma', 'viva'],
              ['ustedes', 'hablen', 'coman', 'vivan'],
            ],
          },
        },
        {
          id: 'esg10-p1-info-irreg',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Ocho imperativos irregulares en «tú»',
          text: 'Son ocho y son cortísimos – casi todos de una sílaba. Solo afectan a la forma de «tú»: en «vosotros» siguen la regla («haced», «venid»), y en «usted» salen del subjuntivo como los demás («haga», «venga»).',
          translations: {
            de: {
              title: 'Acht unregelmäßige tú-Imperative',
              text: 'Es sind acht, und sie sind sehr kurz – fast alle einsilbig. Sie betreffen nur die tú-Form: Bei „vosotros“ gilt die Regel („haced“, „venid“), und bei „usted“ kommen sie wie alle anderen aus dem Subjuntivo („haga“, „venga“).',
            },
          },
          table: {
            headers: ['Infinitivo', 'tú', 'Infinitivo', 'tú'],
            rows: [
              ['tener', 'ten', 'poner', 'pon'],
              ['venir', 'ven', 'salir', 'sal'],
              ['hacer', 'haz', 'decir', 'di'],
              ['ir', 've', 'ser', 'sé'],
            ],
          },
        },
        {
          id: 'esg10-p1-cloze',
          type: 'CLOZE',
          instruction: 'Complete con el imperativo de «tú».',
          wordBank: ['ven', 'haz', 'pon', 'sal', 'dime', 'escucha'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '¡' },
            { kind: 'GAP', gapId: 'i1', solution: ['Ven'], hint: 'venir', width: 5 },
            { kind: 'TEXT', text: ' aquí un momento!\n' },
            { kind: 'GAP', gapId: 'i2', solution: ['Haz'], hint: 'hacer', width: 5 },
            { kind: 'TEXT', text: ' los deberes antes de cenar.\n' },
            { kind: 'GAP', gapId: 'i3', solution: ['Pon'], hint: 'poner', width: 5 },
            { kind: 'TEXT', text: ' la mesa, por favor.\n' },
            { kind: 'GAP', gapId: 'i4', solution: ['Sal'], hint: 'salir', width: 5 },
            { kind: 'TEXT', text: ' de la cocina, que hay humo.\n' },
            { kind: 'GAP', gapId: 'i5', solution: ['Escucha'], hint: 'escuchar', width: 9 },
            { kind: 'TEXT', text: ' esto, es importante.' },
          ],
        },
        {
          id: 'esg10-p1-info-vosotros',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'La «d» que nadie pronuncia',
          text: 'La forma «hablad» es la correcta por escrito, pero en España mucha gente dice «hablar» al hablar: «¡Venir aquí!» en lugar de «¡Venid aquí!». Es un uso extendido y considerado incorrecto en la lengua cuidada. En América el problema no se plantea: allí se usa «ustedes», es decir, «hablen».',
          translations: {
            de: {
              title: 'Das „d“, das niemand spricht',
              text: 'Die Form „hablad“ ist schriftlich die richtige, doch in Spanien sagen viele im Gespräch „hablar“: „¡Venir aquí!“ statt „¡Venid aquí!“. Der Gebrauch ist weit verbreitet und gilt in gepflegter Sprache als falsch. In Amerika stellt sich die Frage nicht: Dort steht „ustedes“, also „hablen“.',
            },
          },
        },
        {
          id: 'esg10-p1-match',
          type: 'MATCHING',
          instruction: 'Relacione el infinitivo con el imperativo de «usted».',
          left: [
            { id: 'l1', text: 'venir' },
            { id: 'l2', text: 'decir' },
            { id: 'l3', text: 'ir' },
            { id: 'l4', text: 'tener' },
          ],
          right: [
            { id: 'r1', text: 'venga' },
            { id: 'r2', text: 'diga' },
            { id: 'r3', text: 'vaya' },
            { id: 'r4', text: 'tenga' },
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
  // Seite 2 – verneinter Imperativ.
  {
    order: 2,
    title: 'Der verneinte Imperativ',
    subtitle: 'Eine einzige Reihe: der Subjuntivo',
    estimatedMinutes: 20,
    content: {
      version: v,
      blocks: [
        { id: 'esg10-p2-h1', type: 'HEADING', level: 1, text: 'Der verneinte Imperativ' },
        {
          id: 'esg10-p2-intro',
          type: 'TEXT',
          text: 'Para prohibir, el español no niega el imperativo: lo sustituye. Todas las formas negativas salen del presente de subjuntivo, sin excepción. Así que quien ha hecho el capítulo 9 ya sabe esta página entera.',
          translations: {
            de: 'Zum Verbieten verneint das Spanische den Imperativ nicht, es ersetzt ihn. Alle verneinten Formen stammen ausnahmslos aus dem Presente de Subjuntivo. Wer Kapitel 9 durchgearbeitet hat, kann diese Seite also bereits.',
          },
        },
        {
          id: 'esg10-p2-info-formas',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Afirmativo y negativo, lado a lado',
          text: 'Fíjese en la asimetría: en «usted» y «ustedes» la forma es la misma con o sin negación, mientras que en «tú» y «vosotros» cambia por completo. Los ocho irregulares de la página anterior desaparecen aquí, porque el subjuntivo los regulariza.',
          translations: {
            de: {
              title: 'Bejaht und verneint nebeneinander',
              text: 'Beachten Sie die Unwucht: Bei „usted“ und „ustedes“ ist die Form mit und ohne Verneinung dieselbe, während sie sich bei „tú“ und „vosotros“ vollständig ändert. Die acht unregelmäßigen Formen der vorigen Seite verschwinden hier, weil der Subjuntivo sie regelmäßig macht.',
            },
          },
          table: {
            headers: ['Persona', 'Afirmativo', 'Negativo'],
            rows: [
              ['tú', 'habla', 'no hables'],
              ['vosotros', 'hablad', 'no habléis'],
              ['usted', 'hable', 'no hable'],
              ['ustedes', 'hablen', 'no hablen'],
              ['tú (venir)', 'ven', 'no vengas'],
              ['tú (hacer)', 'haz', 'no hagas'],
              ['tú (ir)', 've', 'no vayas'],
              ['tú (ser)', 'sé', 'no seas'],
            ],
          },
        },
        {
          id: 'esg10-p2-cloze',
          type: 'CLOZE',
          instruction: 'Transforme en imperativo negativo.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'No ' },
            { kind: 'GAP', gapId: 'n1', solution: ['hables'], hint: 'hablar, tú', width: 8 },
            { kind: 'TEXT', text: ' tan alto, están durmiendo.\nNo ' },
            { kind: 'GAP', gapId: 'n2', solution: ['vengas'], hint: 'venir, tú', width: 8 },
            { kind: 'TEXT', text: ' antes de las ocho.\nNo ' },
            { kind: 'GAP', gapId: 'n3', solution: ['se preocupe'], hint: 'preocuparse, usted', width: 13 },
            { kind: 'TEXT', text: ', señora Ruiz.\nNo ' },
            { kind: 'GAP', gapId: 'n4', solution: ['hagáis'], hint: 'hacer, vosotros', width: 8 },
            { kind: 'TEXT', text: ' ruido en el pasillo.\nNo ' },
            { kind: 'GAP', gapId: 'n5', solution: ['seas'], hint: 'ser, tú', width: 7 },
            { kind: 'TEXT', text: ' tan impaciente.' },
          ],
        },
        {
          id: 'esg10-p2-choice',
          type: 'CHOICE',
          instruction: 'Elija la forma correcta.',
          question: 'Quiere decirle a un amigo que no haga eso.',
          options: [
            { id: 'o1', text: 'No haz eso.' },
            { id: 'o2', text: 'No hagas eso.' },
            { id: 'o3', text: 'No haces eso.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation:
            'El imperativo afirmativo «haz» no se puede negar: para prohibir hace falta el subjuntivo «hagas». «No haces eso» sería una afirmación, no una orden.',
          explanationTranslations: {
            de: 'Der bejahte Imperativ „haz“ lässt sich nicht verneinen: Zum Verbieten braucht es den Subjuntivo „hagas“. „No haces eso“ wäre eine Feststellung, kein Befehl.',
          },
        },
        {
          id: 'esg10-p2-match',
          type: 'MATCHING',
          instruction: 'Relacione la orden con su prohibición correspondiente.',
          left: [
            { id: 'm1', text: 'Ven pronto.' },
            { id: 'm2', text: 'Dilo en voz alta.' },
            { id: 'm3', text: 'Sal ahora.' },
            { id: 'm4', text: 'Ponlo ahí.' },
          ],
          right: [
            { id: 'p1', text: 'No vengas tarde.' },
            { id: 'p2', text: 'No lo digas.' },
            { id: 'p3', text: 'No salgas todavía.' },
            { id: 'p4', text: 'No lo pongas ahí.' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'p1' },
            { leftId: 'm2', rightId: 'p2' },
            { leftId: 'm3', rightId: 'p3' },
            { leftId: 'm4', rightId: 'p4' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – Pronomen und Höflichkeit.
  {
    order: 3,
    title: 'Pronomen und Ton',
    subtitle: 'Wo sie hingehören – und wie man höflich bleibt',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'esg10-p3-h1', type: 'HEADING', level: 1, text: 'Pronomen und Ton' },
        {
          id: 'esg10-p3-intro',
          type: 'TEXT',
          text: 'Los pronombres del capítulo 4 se comportan aquí de dos maneras opuestas según la frase sea afirmativa o negativa. Y una vez resuelto eso queda la otra mitad del asunto: un imperativo bien formado puede sonar a orden militar, y casi nunca es lo que se quiere.',
          translations: {
            de: 'Die Pronomen aus Kapitel 4 verhalten sich hier gegensätzlich, je nachdem, ob der Satz bejaht oder verneint ist. Und ist das geklärt, bleibt die andere Hälfte der Sache: Ein formal richtiger Imperativ kann nach Kommandoton klingen, und das ist fast nie gewollt.',
          },
        },
        {
          id: 'esg10-p3-info-posicion',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Detrás si es afirmativo, delante si es negativo',
          text: 'En el imperativo afirmativo los pronombres se pegan al verbo y forman una sola palabra. En el negativo vuelven a su sitio habitual, delante del verbo y separados. Al pegarlos suele aparecer una tilde, porque el acento de la palabra no puede moverse: «dime» no la lleva, «dímelo» sí.',
          translations: {
            de: {
              title: 'Dahinter wenn bejaht, davor wenn verneint',
              text: 'Im bejahten Imperativ hängen sich die Pronomen an das Verb und bilden ein einziges Wort. Im verneinten stehen sie wieder an ihrem gewohnten Platz, vor dem Verb und getrennt. Beim Anhängen erscheint meist ein Akzent, weil die Betonung des Wortes nicht wandern darf: „dime“ trägt keinen, „dímelo“ schon.',
            },
          },
          table: {
            headers: ['Afirmativo', 'Negativo'],
            rows: [
              ['Dímelo.', 'No me lo digas.'],
              ['Siéntate.', 'No te sientes.'],
              ['Dáselo a tu hermana.', 'No se lo des.'],
              ['Levantaos temprano.', 'No os levantéis tarde.'],
              ['Póngaselo aquí.', 'No se lo ponga aquí.'],
            ],
          },
        },
        {
          id: 'esg10-p3-info-perdida',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Dos letras que se caen',
          text: 'Al añadir «nos» a la forma de nosotros, la -s desaparece: «sentemos» más «nos» da «sentémonos», no «sentémosnos». Y al añadir «os» a la forma de vosotros, se cae la -d: «sentad» más «os» da «sentaos». La única excepción es «idos», de «irse».',
          translations: {
            de: {
              title: 'Zwei Buchstaben, die wegfallen',
              text: 'Hängt man „nos“ an die nosotros-Form, entfällt das -s: „sentemos“ plus „nos“ ergibt „sentémonos“, nicht „sentémosnos“. Und hängt man „os“ an die vosotros-Form, entfällt das -d: „sentad“ plus „os“ ergibt „sentaos“. Die einzige Ausnahme ist „idos“ von „irse“.',
            },
          },
        },
        {
          id: 'esg10-p3-cloze',
          type: 'CLOZE',
          instruction: 'Coloque los pronombres donde corresponde.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '¿El informe? ' },
            { kind: 'GAP', gapId: 'c1', solution: ['Mándamelo'], hint: 'mandar + me + lo, tú', width: 11 },
            { kind: 'TEXT', text: ' esta tarde.\nPero no ' },
            { kind: 'GAP', gapId: 'c2', solution: ['se lo mandes'], hint: 'mandar + se + lo, tú', width: 14 },
            { kind: 'TEXT', text: ' al director todavía.\n' },
            { kind: 'GAP', gapId: 'c3', solution: ['Siéntese'], hint: 'sentarse, usted', width: 10 },
            { kind: 'TEXT', text: ', por favor.\nNiños, ' },
            { kind: 'GAP', gapId: 'c4', solution: ['lavaos'], hint: 'lavarse, vosotros', width: 8 },
            { kind: 'TEXT', text: ' las manos.\nNo ' },
            { kind: 'GAP', gapId: 'c5', solution: ['te preocupes'], hint: 'preocuparse, tú', width: 14 },
            { kind: 'TEXT', text: ', hay tiempo.' },
          ],
        },
        {
          id: 'esg10-p3-info-cortesia',
          type: 'INFO',
          variant: 'TIP',
          title: 'Cómo pedir sin ordenar',
          text: 'El imperativo español es menos brusco que el alemán y se usa con normalidad entre conocidos, sobre todo con «por favor». Pero con desconocidos, en tiendas y oficinas, lo habitual es otra cosa: una pregunta en presente o en condicional. «¿Me pone un café?» es más frecuente que «Póngame un café», y «¿Podrías ayudarme?» suaviza cualquier petición.',
          translations: {
            de: {
              title: 'Bitten, ohne zu befehlen',
              text: 'Der spanische Imperativ ist weniger schroff als der deutsche und unter Bekannten ganz üblich, vor allem mit „por favor“. Gegenüber Fremden, in Läden und Ämtern nimmt man jedoch meist etwas anderes: eine Frage im Präsens oder Konditional. „¿Me pone un café?“ hört man häufiger als „Póngame un café“, und „¿Podrías ayudarme?“ entschärft jede Bitte.',
            },
          },
          table: {
            headers: ['Directo', 'Más suave'],
            rows: [
              ['Ayúdame.', '¿Puedes ayudarme?'],
              ['Dame el menú.', '¿Me da el menú, por favor?'],
              ['Espere aquí.', '¿Le importa esperar aquí?'],
              ['Cierra la ventana.', '¿Podrías cerrar la ventana?'],
            ],
          },
        },
        {
          id: 'esg10-p3-choice',
          type: 'CHOICE',
          instruction: 'Marque todas las formas correctas.',
          question: '¿Cuáles de estas frases están bien escritas?',
          options: [
            { id: 'v1', text: 'Sentaos, por favor.' },
            { id: 'v2', text: 'Sentados, por favor.' },
            { id: 'v3', text: 'No te lo comas todo.' },
            { id: 'v4', text: 'No cómetelo todo.' },
          ],
          multiple: true,
          solution: ['v1', 'v3'],
          explanation:
            'Al añadir «os» se cae la -d de «sentad». Y en el imperativo negativo los pronombres van delante del verbo, nunca pegados detrás.',
          explanationTranslations: {
            de: 'Beim Anhängen von „os“ fällt das -d von „sentad“ weg. Und im verneinten Imperativ stehen die Pronomen vor dem Verb, nie angehängt.',
          },
        },
        {
          id: 'esg10-p3-writing',
          type: 'WRITING',
          instruction: 'Schreiben Sie eine Anleitung.',
          prompt:
            'Explique a alguien cómo llegar a su casa desde la estación, o cómo preparar un plato sencillo. Escriba de seis a diez instrucciones en imperativo de «tú», incluya al menos dos prohibiciones con «no» y dos pronombres pegados al verbo.',
          minWords: 40,
          maxWords: 110,
          aiFeedback: true,
          sampleAnswer:
            'Sal de la estación por la puerta norte y gira a la derecha. Cruza la plaza grande, pero no bajes por el túnel: está cerrado por obras. Sigue recto unos cinco minutos hasta la panadería y allí tuerce a la izquierda. Mi portal es el número doce. Llámame cuando llegues y te abro. No toques el timbre, que está roto. Si te pierdes, pregúntale a alguien por la calle Mayor; todo el mundo la conoce.',
        },
      ],
    },
  },
];
