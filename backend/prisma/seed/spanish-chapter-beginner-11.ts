import type { UnitSeed } from './chapter-beginner-1';

/**
 * Spanisch, Beginner, Kapitel 11: „Mi casa, mi barrio“ (A2, Kapitel 5)
 *
 * Fünf Seiten, Aufbau wie in den Kapiteln davor.
 *
 * Das Kapitel hat zwei Hälften, die aufeinander angewiesen sind. Erst der
 * Wortschatz der Wohnung, dann der Vergleich – denn vergleichen lässt sich
 * nur, was man benennen kann, und eine Wohnung beschreibt man in der Praxis
 * fast immer im Vergleich zu einer anderen: größer als die alte, teurer als
 * erwartet, ruhiger als das Zentrum.
 *
 * Beim Vergleich liegt die Schwierigkeit nicht in „más … que“, sondern in den
 * Fällen daneben: „tan“ vor einem Adjektiv, „tanto“ vor einem Substantiv, und
 * die vier unregelmäßigen Formen, bei denen ein „más“ davor schlicht falsch
 * ist. Seite 2 trennt diese Fälle deshalb sichtbar voneinander.
 *
 * Der Superlativ auf Seite 3 bringt außerdem den Stolperstein mit, den
 * Deutschsprachige zuverlässig treffen: Nach dem Superlativ steht „de“, wo das
 * Deutsche „in“ sagt – „el barrio más tranquilo de la ciudad“.
 *
 * Wohnungsanzeigen, Preise und Adressen sind erfunden.
 *
 * Seiten einsprachig spanisch mit aufklappbarer Übersetzung (Beginner-Band).
 */
const v = 1;

export const SPANISH_BEGINNER_11_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – die Wohnung benennen, bevor sie verglichen wird.
  {
    order: 1,
    title: 'La casa por dentro',
    subtitle: 'Räume, Möbel, Lage',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'es11-p1-h1', type: 'HEADING', level: 1, text: 'La casa por dentro' },
        {
          id: 'es11-p1-image',
          type: 'IMAGE',
          url: 'illustration:living-room',
          alt: 'Ein Wohnzimmer mit Sofa, Stehlampe, Teppich und einem Fenster.',
          caption: 'El salón de un piso pequeño.',
        },
        {
          id: 'es11-p1-intro',
          type: 'TEXT',
          text: 'Describir dónde vive uno es de las primeras cosas que se preguntan al conocer a alguien. Hacen falta tres grupos de palabras: las habitaciones, los muebles y las expresiones que sitúan una cosa respecto a otra.',
          translations: {
            de: 'Zu beschreiben, wo man wohnt, gehört zum Ersten, was man beim Kennenlernen gefragt wird. Dafür braucht man drei Gruppen von Wörtern: die Räume, die Möbel und die Ausdrücke, die eine Sache zu einer anderen in Beziehung setzen.',
          },
        },
        {
          id: 'es11-p1-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: la vivienda',
          items: [
            { term: 'el piso', translations: { en: 'flat', de: 'die Wohnung' } },
            { term: 'el salón', translations: { en: 'living room', de: 'das Wohnzimmer' } },
            { term: 'el dormitorio', translations: { en: 'bedroom', de: 'das Schlafzimmer' } },
            { term: 'la cocina', translations: { en: 'kitchen', de: 'die Küche' } },
            { term: 'el cuarto de baño', translations: { en: 'bathroom', de: 'das Badezimmer' } },
            { term: 'el pasillo', translations: { en: 'corridor', de: 'der Flur' } },
            { term: 'la terraza', translations: { en: 'terrace', de: 'die Terrasse' } },
            { term: 'el balcón', translations: { en: 'balcony', de: 'der Balkon' } },
            { term: 'los muebles', translations: { en: 'furniture', de: 'die Möbel' } },
            { term: 'el sofá', translations: { en: 'sofa', de: 'das Sofa' } },
            { term: 'la mesa', translations: { en: 'table', de: 'der Tisch' } },
            { term: 'la silla', translations: { en: 'chair', de: 'der Stuhl' } },
            { term: 'el armario', translations: { en: 'wardrobe', de: 'der Schrank' } },
            { term: 'la cama', translations: { en: 'bed', de: 'das Bett' } },
            { term: 'la nevera', translations: { en: 'fridge', de: 'der Kühlschrank' } },
            { term: 'el alquiler', translations: { en: 'rent', de: 'die Miete' } },
            { term: 'los gastos', translations: { en: 'bills, service charges', de: 'die Nebenkosten' } },
            { term: 'luminoso', translations: { en: 'bright', de: 'hell' } },
          ],
        },
        {
          id: 'es11-p1-info-hayesta',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Otra vez hay y está',
          text: 'La pareja del capítulo tres vuelve aquí, y ahora se ve para qué sirve: al describir una casa se alterna todo el rato. Primero se anuncia lo que existe, con «hay» y sin artículo definido, y después se sitúa cada cosa, con «estar» y con artículo. Presentar y situar, en ese orden.',
          translations: {
            de: {
              title: 'Noch einmal hay und está',
              text: 'Das Paar aus Kapitel drei kommt hier wieder, und jetzt zeigt sich, wozu es dient: Beim Beschreiben einer Wohnung wechselt man ständig zwischen beidem. Zuerst kündigt man an, was es gibt – mit „hay“ und ohne bestimmten Artikel –, danach verortet man jede Sache, mit „estar“ und mit Artikel. Vorstellen und verorten, in dieser Reihenfolge.',
            },
          },
          table: {
            headers: ['Se presenta', 'Se sitúa'],
            rows: [
              ['En el salón hay un sofá grande.', 'El sofá está debajo de la ventana.'],
              ['Hay dos dormitorios.', 'El mío está al final del pasillo.'],
              ['No hay ascensor.', 'La escalera está a la derecha.'],
            ],
          },
        },
        {
          id: 'es11-p1-cloze',
          type: 'CLOZE',
          instruction: 'Complete con «hay», «está» o «están».',
          wordBank: ['hay', 'está', 'están'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'En mi piso ' },
            { kind: 'GAP', gapId: 'a1', solution: ['hay'], width: 6 },
            { kind: 'TEXT', text: ' tres habitaciones.\nLa cocina ' },
            { kind: 'GAP', gapId: 'a2', solution: ['está'], width: 7 },
            { kind: 'TEXT', text: ' al lado del salón.\nNo ' },
            { kind: 'GAP', gapId: 'a3', solution: ['hay'], width: 6 },
            { kind: 'TEXT', text: ' terraza, pero sí un balcón pequeño.\nLos armarios ' },
            { kind: 'GAP', gapId: 'a4', solution: ['están'], width: 8 },
            { kind: 'TEXT', text: ' en el pasillo.' },
          ],
        },
        {
          id: 'es11-p1-texto',
          type: 'TEXT',
          text: 'Vivo en un tercero sin ascensor, en una calle estrecha del casco antiguo. El piso tiene sesenta metros: un salón con balcón, dos dormitorios, una cocina pequeña y un baño. El salón es la mejor habitación, porque da al sur y entra el sol toda la mañana. Mi dormitorio, en cambio, da al patio y es bastante oscuro, pero por la noche no se oye nada. El alquiler son seiscientos euros al mes, gastos aparte.',
          translations: {
            de: 'Ich wohne im dritten Stock ohne Aufzug, in einer engen Gasse der Altstadt. Die Wohnung hat sechzig Quadratmeter: ein Wohnzimmer mit Balkon, zwei Schlafzimmer, eine kleine Küche und ein Bad. Das Wohnzimmer ist der beste Raum, weil es nach Süden geht und den ganzen Morgen Sonne hereinkommt. Mein Schlafzimmer dagegen geht zum Hof und ist ziemlich dunkel, aber nachts hört man nichts. Die Miete sind sechshundert Euro im Monat, ohne Nebenkosten.',
          },
        },
        {
          id: 'es11-p1-choice',
          type: 'CHOICE',
          instruction: 'Lea otra vez y marque todo lo que es cierto.',
          question: '¿Qué dice el texto del piso?',
          options: [
            { id: 'o1', text: 'Está en el tercer piso y no tiene ascensor.' },
            { id: 'o2', text: 'El salón recibe sol por la mañana.' },
            { id: 'o3', text: 'El dormitorio es el cuarto más luminoso.' },
            { id: 'o4', text: 'Los gastos no están incluidos en el alquiler.' },
          ],
          multiple: true,
          solution: ['o1', 'o2', 'o4'],
          explanation: 'El dormitorio da al patio y es bastante oscuro; el luminoso es el salón.',
          explanationTranslations: {
            de: 'Das Schlafzimmer geht zum Hof und ist ziemlich dunkel; hell ist das Wohnzimmer.',
          },
        },
        {
          id: 'es11-p1-match',
          type: 'MATCHING',
          instruction: 'Relacione la habitación con lo que hay en ella.',
          left: [
            { id: 'l1', text: 'la cocina' },
            { id: 'l2', text: 'el dormitorio' },
            { id: 'l3', text: 'el salón' },
            { id: 'l4', text: 'el cuarto de baño' },
          ],
          right: [
            { id: 'r1', text: 'la nevera y el horno' },
            { id: 'r2', text: 'la cama y el armario' },
            { id: 'r3', text: 'el sofá y la tele' },
            { id: 'r4', text: 'la ducha y el espejo' },
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
  // Seite 2 – der Vergleich, nach Fällen getrennt.
  {
    order: 2,
    title: 'Más grande que el anterior',
    subtitle: 'Vergleichen',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'es11-p2-h1', type: 'HEADING', level: 1, text: 'Más grande que el anterior' },
        {
          id: 'es11-p2-intro',
          type: 'TEXT',
          text: 'El español no cambia el adjetivo para compararlo: no existe nada como «größer». Se pone «más» o «menos» delante y «que» detrás, y el adjetivo se queda igual. Eso simplifica mucho – pero hay tres casos que se salen.',
          translations: {
            de: 'Das Spanische verändert das Adjektiv beim Vergleichen nicht: Es gibt nichts wie „größer“. Man setzt „más“ oder „menos“ davor und „que“ dahinter, und das Adjektiv bleibt, wie es ist. Das vereinfacht vieles – aber drei Fälle fallen heraus.',
          },
        },
        {
          id: 'es11-p2-info-mas',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Más que, menos que, tan como',
          text: 'Para la desigualdad valen «más … que» y «menos … que». Para la igualdad hay dos formas, y la elección depende de lo que venga detrás: delante de un adjetivo o un adverbio va «tan», delante de un sustantivo va «tanto», que además se ajusta en género y número a ese sustantivo.',
          translations: {
            de: {
              title: 'Más que, menos que, tan como',
              text: 'Für die Ungleichheit gelten „más … que“ und „menos … que“. Für die Gleichheit gibt es zwei Formen, und die Wahl hängt davon ab, was folgt: vor einem Adjektiv oder Adverb steht „tan“, vor einem Substantiv steht „tanto“, das sich außerdem nach Geschlecht und Zahl dieses Substantivs richtet.',
            },
          },
          table: {
            headers: ['Relación', 'Estructura', 'Ejemplo'],
            rows: [
              ['más', 'más + adjetivo + que', 'Este piso es más luminoso que el otro.'],
              ['menos', 'menos + adjetivo + que', 'El barrio es menos ruidoso que el centro.'],
              ['igual (adjetivo)', 'tan + adjetivo + como', 'La cocina es tan grande como el salón.'],
              ['igual (sustantivo)', 'tanto/a/os/as + sustantivo + como', 'No tengo tantas habitaciones como tú.'],
              ['igual (verbo)', 'verbo + tanto como', 'Aquí no se paga tanto como allí.'],
            ],
          },
        },
        {
          id: 'es11-p2-info-irregulares',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Cuatro formas que no llevan «más»',
          text: 'Como en alemán con «besser» y «schlechter», hay adjetivos que ya son comparativos por sí solos. Poner «más» delante es el error más típico: «más mejor» no existe. Con «mayor» y «menor» hay además un matiz: para la edad se usan siempre, pero para el tamaño lo normal es decir «más grande» y «más pequeño».',
          translations: {
            de: {
              title: 'Vier Formen, die kein „más“ tragen',
              text: 'Wie im Deutschen bei „besser“ und „schlechter“ gibt es Adjektive, die für sich schon Vergleichsformen sind. Ein „más“ davorzusetzen ist der typischste Fehler: „más mejor“ gibt es nicht. Bei „mayor“ und „menor“ kommt eine Nuance dazu: Fürs Alter nimmt man sie immer, für die Größe sagt man normalerweise „más grande“ und „más pequeño“.',
            },
          },
          table: {
            headers: ['Adjetivo', 'Comparativo', 'Ejemplo'],
            rows: [
              ['bueno / bien', 'mejor', 'Esta zona es mejor que aquella.'],
              ['malo / mal', 'peor', 'El baño es peor que el del piso anterior.'],
              ['mayor (edad)', 'mayor', 'Mi hermana es mayor que yo.'],
              ['menor (edad)', 'menor', 'Su hijo menor tiene seis años.'],
            ],
          },
        },
        {
          id: 'es11-p2-cloze',
          type: 'CLOZE',
          instruction: 'Complete con «más», «menos», «tan», «tanta» o «mejor».',
          wordBank: ['más', 'menos', 'tan', 'tantas', 'mejor'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Mi piso nuevo es ' },
            { kind: 'GAP', gapId: 'b1', solution: ['más'], width: 6 },
            { kind: 'TEXT', text: ' caro que el anterior.\nEl barrio, en cambio, es ' },
            { kind: 'GAP', gapId: 'b2', solution: ['menos'], width: 7 },
            { kind: 'TEXT', text: ' ruidoso.\nLa cocina no es ' },
            { kind: 'GAP', gapId: 'b3', solution: ['tan'], width: 6 },
            { kind: 'TEXT', text: ' grande como la de antes.\nNo tiene ' },
            { kind: 'GAP', gapId: 'b4', solution: ['tantas'], width: 8 },
            { kind: 'TEXT', text: ' ventanas como el otro.\nPero la luz es mucho ' },
            { kind: 'GAP', gapId: 'b5', solution: ['mejor'], width: 7 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'es11-p2-choice1',
          type: 'CHOICE',
          instruction: 'Elija la forma correcta.',
          question: '«Mi hermano es ___ que yo: tiene treinta y cinco.»',
          options: [
            { id: 'p1', text: 'más mayor' },
            { id: 'p2', text: 'mayor' },
            { id: 'p3', text: 'más viejo de' },
          ],
          multiple: false,
          solution: ['p2'],
          explanation:
            '«Mayor» ya es un comparativo, así que no lleva «más» delante. Y para la edad de una persona se dice «mayor», no «viejo».',
          explanationTranslations: {
            de: '„Mayor“ ist bereits eine Vergleichsform und steht deshalb ohne „más“. Und für das Alter einer Person sagt man „mayor“, nicht „viejo“.',
          },
        },
        {
          id: 'es11-p2-choice2',
          type: 'CHOICE',
          instruction: 'Marque todas las frases correctas.',
          question: '¿Cuáles de estas frases son correctas?',
          options: [
            { id: 'x1', text: 'Esta habitación es tan luminosa como la tuya.' },
            { id: 'x2', text: 'Esta habitación es tanto luminosa como la tuya.' },
            { id: 'x3', text: 'No tengo tantos muebles como tú.' },
            { id: 'x4', text: 'No tengo tan muebles como tú.' },
          ],
          multiple: true,
          solution: ['x1', 'x3'],
          explanation:
            'Delante de un adjetivo va «tan»; delante de un sustantivo va «tanto», ajustado en género y número.',
          explanationTranslations: {
            de: 'Vor einem Adjektiv steht „tan“; vor einem Substantiv steht „tanto“, angeglichen in Geschlecht und Zahl.',
          },
        },
        {
          id: 'es11-p2-match',
          type: 'MATCHING',
          instruction: 'Relacione las dos mitades.',
          left: [
            { id: 'm1', text: 'El alquiler aquí es más alto…' },
            { id: 'm2', text: 'Esta calle es tan tranquila…' },
            { id: 'm3', text: 'No hay tantos bares…' },
            { id: 'm4', text: 'El transporte es mucho mejor…' },
          ],
          right: [
            { id: 'n1', text: '…que en mi barrio anterior.' },
            { id: 'n2', text: '…como la de tus padres.' },
            { id: 'n3', text: '…como en el centro.' },
            { id: 'n4', text: '…que en el pueblo.' },
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

  // ====================================================== SEITE 3
  // Seite 3 – der Superlativ, und das "de", das im Deutschen "in" heißt.
  {
    order: 3,
    title: 'El más tranquilo de la ciudad',
    subtitle: 'Der Superlativ',
    estimatedMinutes: 23,
    content: {
      version: v,
      blocks: [
        { id: 'es11-p3-h1', type: 'HEADING', level: 1, text: 'El más tranquilo de la ciudad' },
        {
          id: 'es11-p3-intro',
          type: 'TEXT',
          text: 'Comparar dos cosas ya sabe. Falta señalar una entre todas: el piso más barato, la mejor zona, el peor mes para mudarse. La construcción es la del comparativo con un artículo delante.',
          translations: {
            de: 'Zwei Dinge zu vergleichen können Sie schon. Es fehlt, eines unter allen hervorzuheben: die billigste Wohnung, die beste Gegend, der schlechteste Monat zum Umziehen. Die Konstruktion ist die des Komparativs mit einem Artikel davor.',
          },
        },
        {
          id: 'es11-p3-info-superlativo',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'el / la / los / las + más + adjetivo + de',
          text: 'Dos detalles deciden si suena bien. El primero: si se nombra el sustantivo, el artículo va delante de él y «más» detrás – «el piso más caro», no «el más caro piso». El segundo, y es el que más se falla: el grupo de referencia se introduce con «de», donde el alemán pone «in» o «von». Se dice «el barrio más tranquilo de la ciudad».',
          translations: {
            de: {
              title: 'el / la / los / las + más + Adjektiv + de',
              text: 'Zwei Kleinigkeiten entscheiden, ob es richtig klingt. Erstens: Wird das Substantiv genannt, steht der Artikel davor und „más“ dahinter – „el piso más caro“, nicht „el más caro piso“. Zweitens, und das wird am häufigsten falsch gemacht: Die Vergleichsgruppe wird mit „de“ angeschlossen, wo das Deutsche „in“ oder „von“ setzt. Es heißt „el barrio más tranquilo de la ciudad“.',
            },
          },
          table: {
            headers: ['Español', 'Alemán'],
            rows: [
              ['el piso más barato del edificio', 'die billigste Wohnung im Haus'],
              ['la calle más ruidosa del barrio', 'die lauteste Straße im Viertel'],
              ['los meses más caros del año', 'die teuersten Monate des Jahres'],
              ['la mejor zona de la ciudad', 'die beste Gegend der Stadt'],
            ],
          },
        },
        {
          id: 'es11-p3-cloze',
          type: 'CLOZE',
          instruction: 'Complete el superlativo.',
          wordBank: ['el', 'más', 'del', 'la', 'peor'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Es ' },
            { kind: 'GAP', gapId: 'c1', solution: ['el'], width: 5 },
            { kind: 'TEXT', text: ' piso ' },
            { kind: 'GAP', gapId: 'c2', solution: ['más'], width: 6 },
            { kind: 'TEXT', text: ' luminoso ' },
            { kind: 'GAP', gapId: 'c3', solution: ['del'], width: 5 },
            { kind: 'TEXT', text: ' edificio.\nEsta es ' },
            { kind: 'GAP', gapId: 'c4', solution: ['la'], width: 5 },
            { kind: 'TEXT', text: ' zona más verde de la ciudad.\nPara mí, agosto es el ' },
            { kind: 'GAP', gapId: 'c5', solution: ['peor'], width: 7 },
            { kind: 'TEXT', text: ' mes para mudarse.' },
          ],
        },
        {
          id: 'es11-p3-info-isimo',
          type: 'INFO',
          variant: 'TIP',
          title: 'carísimo, grandísimo, facilísimo',
          text: 'Existe además una forma que no compara con nada y solo sube el volumen: se quita la vocal final del adjetivo y se añade «-ísimo». Equivale a «muy» y suena más expresivo. Un par de adjetivos cambian una letra para que la pronunciación se mantenga: rico → riquísimo, largo → larguísimo.',
          translations: {
            de: {
              title: 'carísimo, grandísimo, facilísimo',
              text: 'Daneben gibt es eine Form, die mit nichts vergleicht und nur die Lautstärke hochdreht: Man streicht den Endvokal des Adjektivs und hängt „-ísimo“ an. Sie entspricht „muy“ und klingt ausdrucksstärker. Ein paar Adjektive ändern einen Buchstaben, damit die Aussprache erhalten bleibt: rico → riquísimo, largo → larguísimo.',
            },
          },
          table: {
            headers: ['Adjetivo', 'Con -ísimo', 'Significa'],
            rows: [
              ['caro', 'carísimo', 'muy caro'],
              ['grande', 'grandísimo', 'muy grande'],
              ['fácil', 'facilísimo', 'muy fácil'],
              ['rico', 'riquísimo', 'muy rico'],
            ],
          },
        },
        {
          id: 'es11-p3-choice',
          type: 'CHOICE',
          instruction: 'Elija la frase correcta.',
          question: '«Es die ruhigste Straße im Viertel.»',
          options: [
            { id: 'q1', text: 'Es la calle más tranquila en el barrio.' },
            { id: 'q2', text: 'Es la calle más tranquila del barrio.' },
            { id: 'q3', text: 'Es la más tranquila calle del barrio.' },
          ],
          multiple: false,
          solution: ['q2'],
          explanation:
            'Detrás del superlativo va «de», no «en». Y el sustantivo se coloca entre el artículo y «más».',
          explanationTranslations: {
            de: 'Nach dem Superlativ steht „de“, nicht „en“. Und das Substantiv steht zwischen Artikel und „más“.',
          },
        },
        {
          id: 'es11-p3-match',
          type: 'MATCHING',
          instruction: 'Relacione la frase con lo que significa.',
          left: [
            { id: 'm1', text: 'El piso es carísimo.' },
            { id: 'm2', text: 'Es el piso más caro del edificio.' },
            { id: 'm3', text: 'Es más caro que el mío.' },
            { id: 'm4', text: 'Es tan caro como el mío.' },
          ],
          right: [
            { id: 'n1', text: 'Cuesta muchísimo, sin comparar con nada.' },
            { id: 'n2', text: 'Ninguno del edificio cuesta más.' },
            { id: 'n3', text: 'Cuesta más que otro piso concreto.' },
            { id: 'n4', text: 'Los dos cuestan lo mismo.' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'n1' },
            { leftId: 'm2', rightId: 'n2' },
            { leftId: 'm3', rightId: 'n3' },
            { leftId: 'm4', rightId: 'n4' },
          ],
        },
        {
          id: 'es11-p3-writing',
          type: 'WRITING',
          instruction: 'Compare dos viviendas.',
          prompt:
            'Compare su vivienda de ahora con otra en la que vivió antes, en cuatro o cinco frases. Use «más … que», «menos … que» o «tan … como» al menos tres veces y un superlativo.',
          minWords: 20,
          maxWords: 90,
          aiFeedback: true,
          sampleAnswer:
            'Mi piso de ahora es más pequeño que el anterior, pero también es mucho más barato. El salón no es tan luminoso como el de antes, porque da a un patio. En cambio, el barrio es mejor: hay más tiendas y el metro está a dos minutos. Es la casa más tranquila de todas las que conozco.',
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – Anzeige lesen, Meinung sagen, abwägen.
  {
    order: 4,
    title: 'Buscar piso',
    subtitle: 'Anzeigen lesen und abwägen',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'es11-p4-h1', type: 'HEADING', level: 1, text: 'Buscar piso' },
        {
          id: 'es11-p4-intro',
          type: 'TEXT',
          text: 'Los anuncios de pisos están llenos de abreviaturas y de palabras que solo aparecen ahí. Lea estos dos y fíjese en lo que cada uno calla.',
          translations: {
            de: 'Wohnungsanzeigen sind voller Abkürzungen und Wörter, die nur dort vorkommen. Lesen Sie diese beiden und achten Sie darauf, was jede verschweigt.',
          },
        },
        {
          id: 'es11-p4-texto',
          type: 'TEXT',
          text: 'PISO A – Calle Mayor, 2º sin ascensor\n70 m², 2 dorm., salón con balcón, cocina equipada. Muy luminoso. Zona céntrica, al lado del mercado. 780 €/mes + gastos. Ruido de la calle por las noches.\n\nPISO B – Barrio del Carmen, 4º con ascensor\n55 m², 1 dorm., salón-cocina, terraza de 8 m². Reformado, tranquilo, muy soleado. A 20 min del centro en autobús. 650 €/mes, gastos incluidos.',
          translations: {
            de: 'WOHNUNG A – Calle Mayor, 2. Stock ohne Aufzug\n70 m², 2 Schlafzimmer, Wohnzimmer mit Balkon, ausgestattete Küche. Sehr hell. Zentrale Lage, direkt am Markt. 780 €/Monat + Nebenkosten. Straßenlärm in der Nacht.\n\nWOHNUNG B – Barrio del Carmen, 4. Stock mit Aufzug\n55 m², 1 Schlafzimmer, Wohnküche, Terrasse von 8 m². Renoviert, ruhig, sehr sonnig. 20 Minuten mit dem Bus ins Zentrum. 650 €/Monat, Nebenkosten inbegriffen.',
          },
        },
        {
          id: 'es11-p4-choice1',
          type: 'CHOICE',
          instruction: 'Compare los dos anuncios y marque todo lo que es cierto.',
          question: '¿Qué es verdad?',
          options: [
            { id: 'y1', text: 'El piso A es más grande que el B.' },
            { id: 'y2', text: 'El piso B es más caro que el A.' },
            { id: 'y3', text: 'El piso B está mejor comunicado que el A.' },
            { id: 'y4', text: 'El piso A tiene más dormitorios que el B.' },
          ],
          multiple: true,
          solution: ['y1', 'y4'],
          explanation:
            'B es más barato y está a veinte minutos del centro; A está en plena zona céntrica, así que está mejor comunicado.',
          explanationTranslations: {
            de: 'B ist billiger und liegt zwanzig Minuten vom Zentrum; A liegt mitten im Zentrum und ist damit besser angebunden.',
          },
        },
        {
          id: 'es11-p4-info-opinion',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Decir lo que a uno le parece',
          text: 'Para opinar bastan tres fórmulas, y dos de ellas ya le suenan. «Creo que» y «me parece que» van seguidas de una frase normal en indicativo. «Me parece» a secas va seguido de un adjetivo y se construye como «gustar»: «me parece caro», «me parecen pequeñas».',
          translations: {
            de: {
              title: 'Sagen, was einem scheint',
              text: 'Zum Meinungsäußern genügen drei Formeln, und zwei davon kennen Sie schon. „Creo que“ und „me parece que“ stehen vor einem normalen Satz im Indikativ. „Me parece“ allein steht vor einem Adjektiv und wird wie „gustar“ gebaut: „me parece caro“, „me parecen pequeñas“.',
            },
          },
          table: {
            headers: ['Fórmula', 'Ejemplo'],
            rows: [
              ['Creo que…', 'Creo que el segundo está mejor.'],
              ['Me parece que…', 'Me parece que es demasiado caro.'],
              ['Me parece + adjetivo', 'La terraza me parece pequeña.'],
              ['Prefiero… porque…', 'Prefiero el B porque es más tranquilo.'],
            ],
          },
        },
        {
          id: 'es11-p4-info-conectores',
          type: 'INFO',
          variant: 'TIP',
          title: 'Unir las dos caras',
          text: 'Toda vivienda tiene ventajas e inconvenientes, y para nombrarlos juntos hacen falta conectores. «Además» suma en la misma dirección, «pero» y «aunque» dan la vuelta, y «por eso» saca la conclusión. Con estas cuatro palabras una lista de datos se convierte en una opinión.',
          translations: {
            de: {
              title: 'Die zwei Seiten verbinden',
              text: 'Jede Wohnung hat Vorzüge und Nachteile, und um sie zusammen zu nennen, braucht es Konnektoren. „Además“ ergänzt in dieselbe Richtung, „pero“ und „aunque“ drehen sie um, und „por eso“ zieht den Schluss. Mit diesen vier Wörtern wird aus einer Datenliste eine Meinung.',
            },
          },
          table: {
            headers: ['Conector', 'Ejemplo'],
            rows: [
              ['además', 'Es barato y además está reformado.'],
              ['pero', 'Es pequeño, pero muy luminoso.'],
              ['aunque', 'Aunque está lejos, me gusta más.'],
              ['por eso', 'No tiene ascensor; por eso es más barato.'],
            ],
          },
        },
        {
          id: 'es11-p4-cloze',
          type: 'CLOZE',
          instruction: 'Complete la opinión de Julia.',
          wordBank: ['parece', 'además', 'pero', 'creo', 'por eso'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'A mí el piso A me ' },
            { kind: 'GAP', gapId: 'd1', solution: ['parece'], width: 8 },
            { kind: 'TEXT', text: ' demasiado caro, y ' },
            { kind: 'GAP', gapId: 'd2', solution: ['además'], width: 8 },
            { kind: 'TEXT', text: ' no tiene ascensor. Es más grande, ' },
            { kind: 'GAP', gapId: 'd3', solution: ['pero'], width: 6 },
            { kind: 'TEXT', text: ' está en una calle ruidosa. ' },
            { kind: 'GAP', gapId: 'd4', solution: ['Por eso'], width: 8 },
            { kind: 'TEXT', text: ' prefiero el B. ' },
            { kind: 'GAP', gapId: 'd5', solution: ['Creo'], width: 6 },
            { kind: 'TEXT', text: ' que la terraza compensa la distancia.' },
          ],
        },
        {
          id: 'es11-p4-ordering',
          type: 'ORDERING',
          instruction: 'Ordene la visita al piso.',
          items: [
            { id: 'w1', text: 'Vi el anuncio en internet el lunes.' },
            { id: 'w2', text: 'Llamé para pedir una cita.' },
            { id: 'w3', text: 'El miércoles fui a ver el piso.' },
            { id: 'w4', text: 'La casera me enseñó las dos habitaciones.' },
            { id: 'w5', text: 'Pregunté por los gastos y el contrato.' },
            { id: 'w6', text: 'Al día siguiente le dije que me lo quedaba.' },
          ],
          solution: ['w1', 'w2', 'w3', 'w4', 'w5', 'w6'],
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
        { id: 'es11-p5-h1', type: 'HEADING', level: 1, text: '¿Ya sabes hacerlo?' },
        {
          id: 'es11-p5-intro',
          type: 'TEXT',
          text: 'Aquí vuelve todo el capítulo: la vivienda, el comparativo con sus tres estructuras, el superlativo con su «de» y las fórmulas para opinar.',
          translations: {
            de: 'Hier kommt das ganze Kapitel noch einmal: die Wohnung, der Komparativ mit seinen drei Strukturen, der Superlativ mit seinem „de“ und die Formeln zum Meinungsäußern.',
          },
        },
        {
          id: 'es11-p5-cloze',
          type: 'CLOZE',
          instruction: 'Complete el texto de Rubén.',
          wordBank: ['hay', 'más', 'que', 'tan', 'de'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Me mudé en marzo. El piso nuevo es ' },
            { kind: 'GAP', gapId: 'g1', solution: ['más'], width: 6 },
            { kind: 'TEXT', text: ' pequeño ' },
            { kind: 'GAP', gapId: 'g2', solution: ['que'], width: 5 },
            { kind: 'TEXT', text: ' el anterior, pero también más barato. En el salón ' },
            { kind: 'GAP', gapId: 'g3', solution: ['hay'], width: 6 },
            { kind: 'TEXT', text: ' una ventana enorme. La cocina no es ' },
            { kind: 'GAP', gapId: 'g4', solution: ['tan'], width: 6 },
            { kind: 'TEXT', text: ' cómoda como la de antes, pero es la casa más tranquila ' },
            { kind: 'GAP', gapId: 'g5', solution: ['de'], width: 5 },
            { kind: 'TEXT', text: ' la calle.' },
          ],
        },
        {
          id: 'es11-p5-choice',
          type: 'CHOICE',
          instruction: 'Marque todas las frases correctas.',
          question: '¿Cuáles de estas frases son correctas?',
          options: [
            { id: 's1', text: 'Es la zona más cara de la ciudad.' },
            { id: 's2', text: 'Es la zona más cara en la ciudad.' },
            { id: 's3', text: 'Mi hermana es mayor que yo.' },
            { id: 's4', text: 'Mi hermana es más mayor que yo.' },
          ],
          multiple: true,
          solution: ['s1', 's3'],
          explanation:
            'Después del superlativo va «de». Y «mayor» ya compara por sí solo, así que no admite «más».',
          explanationTranslations: {
            de: 'Nach dem Superlativ steht „de“. Und „mayor“ vergleicht schon von sich aus, verträgt also kein „más“.',
          },
        },
        {
          id: 'es11-p5-match',
          type: 'MATCHING',
          instruction: 'Relacione la pregunta con la respuesta.',
          left: [
            { id: 'a1', text: '¿Cómo es tu piso?' },
            { id: 'a2', text: '¿Está mejor que el anterior?' },
            { id: 'a3', text: '¿Cuánto pagas?' },
            { id: 'a4', text: '¿Y el barrio qué tal?' },
          ],
          right: [
            { id: 'b1', text: 'Pequeño, pero muy luminoso.' },
            { id: 'b2', text: 'Mucho mejor, sobre todo por la luz.' },
            { id: 'b3', text: 'Seiscientos al mes, gastos aparte.' },
            { id: 'b4', text: 'Es el más tranquilo de la zona.' },
          ],
          solution: [
            { leftId: 'a1', rightId: 'b1' },
            { leftId: 'a2', rightId: 'b2' },
            { leftId: 'a3', rightId: 'b3' },
            { leftId: 'a4', rightId: 'b4' },
          ],
        },
        {
          id: 'es11-p5-ordering',
          type: 'ORDERING',
          instruction: 'Ordene la descripción de una casa.',
          items: [
            { id: 'z1', text: 'Vivo en un cuarto con ascensor.' },
            { id: 'z2', text: 'El piso tiene sesenta metros.' },
            { id: 'z3', text: 'Hay dos dormitorios y un baño.' },
            { id: 'z4', text: 'El salón está al final del pasillo.' },
            { id: 'z5', text: 'Es más luminoso que mi piso anterior.' },
            { id: 'z6', text: 'Por eso estoy muy contento aquí.' },
          ],
          solution: ['z1', 'z2', 'z3', 'z4', 'z5', 'z6'],
        },
        {
          id: 'es11-p5-writing',
          type: 'WRITING',
          instruction: 'Describa su barrio.',
          prompt:
            'Escriba de seis a ocho frases sobre su barrio: ¿qué hay?, ¿cómo es?, ¿qué le gusta y qué no? Compárelo con otro barrio o con otra ciudad al menos dos veces y use un superlativo y un conector («además», «pero», «aunque» o «por eso»).',
          minWords: 30,
          maxWords: 120,
          aiFeedback: true,
          sampleAnswer:
            'Vivo en un barrio de las afueras, a veinte minutos del centro. Es mucho más tranquilo que el centro y bastante más barato. Hay dos supermercados, una biblioteca y un parque grandísimo, que es el mejor de la zona. No hay tantos bares como en el casco antiguo, pero a mí eso no me importa. El autobús pasa cada diez minutos; por eso no necesito coche. Aunque está lejos, no me gustaría cambiarme.',
        },
      ],
    },
  },
];
