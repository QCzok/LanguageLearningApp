import type { UnitSeed } from './chapter-beginner-1';

/**
 * Spanisch, Beginner, Kapitel 3: „En la ciudad“
 *
 * Fünf Seiten, Aufbau wie in den Kapiteln davor.
 *
 * Das Kapitel läuft auf eine einzige Unterscheidung zu, die im Deutschen
 * nicht existiert: „hay“ und „está“. Beides heißt an der Oberfläche „es gibt“
 * oder „ist“, aber „hay“ meldet, dass etwas überhaupt vorhanden ist, und
 * „está“ sagt, wo ein bestimmter Gegenstand liegt. Die ersten drei Seiten
 * bauen die Bausteine dafür (Orte, Ortsangaben, Wegbeschreibung), Seite vier
 * stellt die beiden systematisch gegenüber.
 *
 * Die Wegbeschreibung benutzt Imperativformen (siga, gire, cruce), die
 * grammatisch erst viel später drankommen. Auf A1 stehen sie hier als feste
 * Wendungen – man erkennt sie wieder, ohne sie bilden zu können.
 *
 * Seiten einsprachig spanisch, Erklärungen mit deutscher Übersetzung.
 */
const v = 1;

export const SPANISH_BEGINNER_3_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – was es in der Stadt gibt: Orte und "hay".
  {
    order: 1,
    title: 'En el centro',
    subtitle: 'Orte in der Stadt und „hay“',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'es3-p1-h1', type: 'HEADING', level: 1, text: 'En el centro' },
        {
          id: 'es3-p1-image',
          type: 'IMAGE',
          url: 'illustration:city-street',
          alt: 'Eine Häuserzeile mit Ladenfronten, davor eine Straße mit Bäumen.',
          caption: 'Una calle del centro.',
        },
        {
          id: 'es3-p1-intro',
          type: 'TEXT',
          text: 'Para moverse por una ciudad desconocida hacen falta dos cosas: saber cómo se llaman los sitios y saber preguntar por ellos. Empecemos por lo primero.',
          translations: {
            de: 'Um sich in einer fremden Stadt zu bewegen, braucht man zweierlei: die Namen der Orte und die Fähigkeit, nach ihnen zu fragen. Beginnen wir mit dem Ersten.',
          },
        },
        {
          id: 'es3-p1-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: lugares de la ciudad',
          items: [
            { term: 'la calle', translation: 'die Straße' },
            { term: 'la plaza', translation: 'der Platz' },
            { term: 'la esquina', translation: 'die Ecke' },
            { term: 'el banco', translation: 'die Bank' },
            { term: 'la farmacia', translation: 'die Apotheke' },
            { term: 'el supermercado', translation: 'der Supermarkt' },
            { term: 'la estación', translation: 'der Bahnhof' },
            { term: 'la parada de autobús', translation: 'die Bushaltestelle' },
            { term: 'el hospital', translation: 'das Krankenhaus' },
            { term: 'el museo', translation: 'das Museum' },
            { term: 'la iglesia', translation: 'die Kirche' },
            { term: 'el parque', translation: 'der Park' },
          ],
        },
        {
          id: 'es3-p1-info-hay',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: '«hay»: una forma para todo',
          text: '«hay» dice que algo existe o se encuentra en un sitio. Tiene una ventaja enorme: no cambia nunca. Da igual que siga un singular o un plural, siempre es «hay». Detrás va un artículo indeterminado, un número o nada en absoluto – pero nunca «el» o «la».',
          translations: {
            de: {
              title: '„hay“: eine Form für alles',
              text: '„hay“ sagt, dass etwas existiert oder sich an einem Ort befindet. Es hat einen enormen Vorteil: Es ändert sich nie. Ob ein Singular oder ein Plural folgt, ist gleichgültig – es heißt immer „hay“. Danach steht ein unbestimmter Artikel, eine Zahl oder gar nichts – aber nie „el“ oder „la“.',
            },
          },
          table: {
            headers: ['Correcto', 'Incorrecto'],
            rows: [
              ['Hay una farmacia en la plaza.', 'Hay la farmacia en la plaza.'],
              ['Hay dos bancos en esta calle.', 'Hayn dos bancos…'],
              ['¿Hay un supermercado por aquí?', '¿Hay el supermercado por aquí?'],
              ['No hay parada de autobús.', 'No hay la parada de autobús.'],
            ],
          },
        },
        {
          id: 'es3-p1-cloze',
          type: 'CLOZE',
          instruction: 'Complete con «hay» y el artículo, si hace falta.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'En mi barrio ' },
            { kind: 'GAP', gapId: 'h1', solution: ['hay'], width: 6 },
            { kind: 'TEXT', text: ' dos supermercados.\n¿' },
            { kind: 'GAP', gapId: 'h2', solution: ['hay'], width: 6 },
            { kind: 'TEXT', text: ' una farmacia por aquí?\nEn esta calle no ' },
            { kind: 'GAP', gapId: 'h3', solution: ['hay'], width: 6 },
            { kind: 'TEXT', text: ' ningún banco.\nDelante de la estación ' },
            { kind: 'GAP', gapId: 'h4', solution: ['hay'], width: 6 },
            { kind: 'TEXT', text: ' una parada de autobús.' },
          ],
        },
        {
          id: 'es3-p1-match',
          type: 'MATCHING',
          instruction: 'Relacione el sitio con lo que se hace allí.',
          left: [
            { id: 'l1', text: 'la farmacia' },
            { id: 'l2', text: 'la estación' },
            { id: 'l3', text: 'el banco' },
            { id: 'l4', text: 'el museo' },
          ],
          right: [
            { id: 'r1', text: 'Allí se compran medicinas.' },
            { id: 'r2', text: 'Allí salen los trenes.' },
            { id: 'r3', text: 'Allí se saca dinero.' },
            { id: 'r4', text: 'Allí se ven cuadros.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'es3-p1-choice',
          type: 'CHOICE',
          instruction: 'Elija la frase correcta.',
          question: 'Usted quiere saber si en el barrio existe un supermercado.',
          options: [
            { id: 'o1', text: '¿Hay el supermercado por aquí?' },
            { id: 'o2', text: '¿Hay un supermercado por aquí?' },
            { id: 'o3', text: '¿Hayn supermercados por aquí?' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation:
            'Detrás de «hay» no puede ir «el» ni «la». Y «hay» no tiene plural: nunca cambia de forma.',
          explanationTranslations: {
            de: 'Nach „hay“ kann weder „el“ noch „la“ stehen. Und „hay“ hat keinen Plural – es ändert nie seine Form.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – wo genau etwas liegt: Ortspräpositionen mit "estar".
  {
    order: 2,
    title: '¿Dónde está el banco?',
    subtitle: 'Ortsangaben mit „estar“',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'es3-p2-h1', type: 'HEADING', level: 1, text: '¿Dónde está el banco?' },
        {
          id: 'es3-p2-image',
          type: 'IMAGE',
          url: 'illustration:city-map',
          alt: 'Ein Stadtplanausschnitt mit einem Kreuz als Standortmarkierung.',
          caption: 'Usted está aquí.',
        },
        {
          id: 'es3-p2-intro',
          type: 'TEXT',
          text: 'Cuando ya se sabe que algo existe, la pregunta siguiente es dónde está exactamente. Para eso hace falta «estar» y un puñado de preposiciones.',
          translations: {
            de: 'Wenn man weiß, dass es etwas gibt, ist die nächste Frage, wo genau es liegt. Dafür braucht man „estar“ und eine Handvoll Präpositionen.',
          },
        },
        {
          id: 'es3-p2-info-preposiciones',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Dónde está: las preposiciones',
          text: 'Casi todas llevan «de» detrás, y entonces vale la regla de siempre: «de + el» se juntan en «del». Por eso se dice «al lado del banco», nunca «al lado de el banco».',
          translations: {
            de: {
              title: 'Wo etwas liegt: die Präpositionen',
              text: 'Fast alle ziehen ein „de“ nach sich, und dann gilt die übliche Regel: „de + el“ verschmelzen zu „del“. Deshalb heißt es „al lado del banco“ und nie „al lado de el banco“.',
            },
          },
          table: {
            headers: ['Preposición', 'Alemán', 'Ejemplo'],
            rows: [
              ['al lado de', 'neben', 'La farmacia está al lado del banco.'],
              ['enfrente de', 'gegenüber', 'El museo está enfrente de la plaza.'],
              ['delante de', 'vor', 'Hay un árbol delante de la casa.'],
              ['detrás de', 'hinter', 'El parque está detrás de la estación.'],
              ['entre … y …', 'zwischen', 'Está entre la iglesia y el hospital.'],
              ['cerca de / lejos de', 'nah bei / weit von', 'Vivo cerca del centro.'],
              ['en la esquina', 'an der Ecke', 'El bar está en la esquina.'],
            ],
          },
        },
        {
          id: 'es3-p2-dlg',
          type: 'DIALOGUE',
          title: 'En la calle',
          lines: [
            { speaker: 'Turista', text: 'Perdone, ¿dónde está la farmacia?' },
            { speaker: 'Señora', text: 'Está al lado del banco, en la esquina.' },
            { speaker: 'Turista', text: '¿Y está lejos de aquí?' },
            { speaker: 'Señora', text: 'No, está muy cerca. A dos minutos.' },
            { speaker: 'Turista', text: 'Muchas gracias.' },
            { speaker: 'Señora', text: 'De nada.' },
          ],
        },
        {
          id: 'es3-p2-cloze',
          type: 'CLOZE',
          instruction: 'Complete con la preposición del cuadro.',
          wordBank: ['al lado', 'enfrente', 'entre', 'cerca'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'El supermercado está ' },
            { kind: 'GAP', gapId: 'd1', solution: ['al lado'], width: 9 },
            { kind: 'TEXT', text: ' de mi casa.\nLa parada está ' },
            { kind: 'GAP', gapId: 'd2', solution: ['enfrente'], width: 10 },
            { kind: 'TEXT', text: ' del hospital.\nLa iglesia está ' },
            { kind: 'GAP', gapId: 'd3', solution: ['entre'], width: 7 },
            { kind: 'TEXT', text: ' la plaza y el museo.\nNo vivo ' },
            { kind: 'GAP', gapId: 'd4', solution: ['cerca'], width: 7 },
            { kind: 'TEXT', text: ' del centro, vivo bastante lejos.' },
          ],
        },
        {
          id: 'es3-p2-info-del',
          type: 'INFO',
          variant: 'TIP',
          title: 'del y al',
          text: 'El español junta dos parejas de palabras y solo esas dos: «de + el» da «del», y «a + el» da «al». Con «la», «los» y «las» no pasa nada: «de la plaza», «a los parques».',
          translations: {
            de: {
              title: 'del und al',
              text: 'Das Spanische zieht genau zwei Wortpaare zusammen und nur diese zwei: „de + el“ wird zu „del“, und „a + el“ wird zu „al“. Bei „la“, „los“ und „las“ passiert nichts: „de la plaza“, „a los parques“.',
            },
          },
          table: {
            headers: ['Se junta', 'No se junta'],
            rows: [
              ['de + el = del', 'de la = de la'],
              ['a + el = al', 'a las = a las'],
              ['cerca del parque', 'cerca de la plaza'],
              ['Voy al museo.', 'Voy a la estación.'],
            ],
          },
        },
        {
          id: 'es3-p2-choice',
          type: 'CHOICE',
          instruction: 'Elija la forma correcta.',
          question: '«La farmacia está al lado ___ banco.»',
          options: [
            { id: 'q1', text: 'de el' },
            { id: 'q2', text: 'del' },
            { id: 'q3', text: 'de la' },
          ],
          multiple: false,
          solution: ['q2'],
          explanation:
            '«banco» es masculino, así que lleva «el», y «de + el» se juntan siempre en «del».',
          explanationTranslations: {
            de: '„banco“ ist männlich, steht also mit „el“, und „de + el“ verschmelzen immer zu „del“.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – nach dem Weg fragen; Imperative hier als feste Wendungen.
  {
    order: 3,
    title: 'Perdone, ¿para ir a…?',
    subtitle: 'Nach dem Weg fragen und ihn verstehen',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'es3-p3-h1', type: 'HEADING', level: 1, text: 'Perdone, ¿para ir a…?' },
        {
          id: 'es3-p3-image',
          type: 'IMAGE',
          url: 'illustration:signpost',
          alt: 'Ein Wegweiser mit drei Schildern, die in verschiedene Richtungen zeigen.',
          caption: 'Todo recto, a la derecha o a la izquierda.',
        },
        {
          id: 'es3-p3-dlg',
          type: 'DIALOGUE',
          title: 'Camino de la estación',
          lines: [
            { speaker: 'Nadia', text: 'Perdone, ¿para ir a la estación?' },
            { speaker: 'Hombre', text: 'Siga todo recto hasta la plaza.' },
            { speaker: 'Nadia', text: '¿Hasta la plaza grande?' },
            { speaker: 'Hombre', text: 'Sí. Allí gire a la derecha y cruce la calle.' },
            { speaker: 'Nadia', text: '¿Y está lejos?' },
            { speaker: 'Hombre', text: 'No, unos diez minutos a pie.' },
            { speaker: 'Nadia', text: 'Muy amable, gracias.' },
          ],
        },
        {
          id: 'es3-p3-info-formulas',
          type: 'INFO',
          variant: 'TIP',
          title: 'Fórmulas para el camino',
          text: 'Las palabras «siga», «gire» y «cruce» son imperativos de cortesía, la forma que va con «usted». Su formación pertenece a un capítulo mucho más avanzado; por ahora basta con reconocerlas como bloques fijos. En una indicación se oyen casi siempre estas mismas.',
          translations: {
            de: {
              title: 'Feste Wendungen für den Weg',
              text: 'Die Wörter „siga“, „gire“ und „cruce“ sind Höflichkeitsimperative, also die Form zu „usted“. Ihre Bildung gehört in ein weit späteres Kapitel; vorerst genügt es, sie als feste Bausteine wiederzuerkennen. In einer Wegauskunft hört man fast immer genau diese.',
            },
          },
          table: {
            headers: ['Fórmula', 'Alemán'],
            rows: [
              ['Siga todo recto.', 'Gehen Sie geradeaus.'],
              ['Gire a la derecha.', 'Biegen Sie rechts ab.'],
              ['Gire a la izquierda.', 'Biegen Sie links ab.'],
              ['Cruce la calle.', 'Überqueren Sie die Straße.'],
              ['Tome la primera calle.', 'Nehmen Sie die erste Straße.'],
              ['Está a diez minutos a pie.', 'Es sind zehn Minuten zu Fuß.'],
            ],
          },
        },
        {
          id: 'es3-p3-order',
          type: 'ORDERING',
          instruction: 'Ordene la indicación del camino.',
          items: [
            { id: 'w1', text: 'Siga todo recto hasta la plaza.' },
            { id: 'w2', text: 'Allí gire a la derecha.' },
            { id: 'w3', text: 'Cruce la calle.' },
            { id: 'w4', text: 'La estación está enfrente.' },
          ],
          solution: ['w1', 'w2', 'w3', 'w4'],
        },
        {
          id: 'es3-p3-cloze',
          type: 'CLOZE',
          instruction: 'Complete la indicación.',
          wordBank: ['Perdone', 'siga', 'derecha', 'pie'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '▸ ' },
            { kind: 'GAP', gapId: 'c1', solution: ['Perdone'], width: 9 },
            { kind: 'TEXT', text: ', ¿para ir al museo?\n▸ ' },
            { kind: 'GAP', gapId: 'c2', solution: ['Siga'], width: 6 },
            { kind: 'TEXT', text: ' todo recto y luego gire a la ' },
            { kind: 'GAP', gapId: 'c3', solution: ['derecha'], width: 9 },
            { kind: 'TEXT', text: '.\n▸ ¿Está lejos?\n▸ No, cinco minutos a ' },
            { kind: 'GAP', gapId: 'c4', solution: ['pie'], width: 5 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'es3-p3-audio',
          type: 'AUDIO',
          title: 'Escuche: una indicación',
          audioUrl: 'placeholder://es-k3-camino',
          durationSec: 26,
          transcript:
            'Perdone, ¿para ir a la estación? – Siga todo recto hasta la plaza. Allí gire a la derecha y cruce la calle. Está a diez minutos a pie.',
        },
        {
          id: 'es3-p3-choice',
          type: 'CHOICE',
          instruction: 'Escuche o lea el diálogo otra vez y elija.',
          question: '¿Qué hace Nadia después de llegar a la plaza?',
          options: [
            { id: 'p1', text: 'Sigue todo recto.' },
            { id: 'p2', text: 'Gira a la izquierda.' },
            { id: 'p3', text: 'Gira a la derecha y cruza la calle.' },
          ],
          multiple: false,
          solution: ['p3'],
          explanation: 'El hombre dice: «Allí gire a la derecha y cruce la calle».',
          explanationTranslations: {
            de: 'Der Mann sagt: „Allí gire a la derecha y cruce la calle“.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – die eigentliche Hürde: hay oder está.
  {
    order: 4,
    title: '¿hay o está?',
    subtitle: 'Die Unterscheidung, auf die alles zuläuft',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'es3-p4-h1', type: 'HEADING', level: 1, text: '¿hay o está?' },
        {
          id: 'es3-p4-intro',
          type: 'TEXT',
          text: 'Las dos palabras se traducen a menudo igual, y por eso se confunden. Pero hacen cosas distintas: «hay» presenta algo por primera vez, «está» localiza algo que ya se conoce.',
          translations: {
            de: 'Beide Wörter werden oft gleich übersetzt, und deshalb verwechselt man sie. Sie tun aber Verschiedenes: „hay“ führt etwas zum ersten Mal ein, „está“ verortet etwas, das schon bekannt ist.',
          },
        },
        {
          id: 'es3-p4-info-hayEsta',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'La regla del artículo',
          text: 'Hay un truco que funciona casi siempre: mire el artículo. Si delante del sustantivo va «un», «una», un número o nada, corresponde «hay». Si va «el», «la», un posesivo o un nombre propio, corresponde «está». Dicho de otro modo: lo indeterminado se anuncia, lo determinado se localiza.',
          translations: {
            de: {
              title: 'Die Artikelregel',
              text: 'Es gibt einen Trick, der fast immer funktioniert: Schauen Sie auf den Artikel. Steht vor dem Substantiv „un“, „una“, eine Zahl oder nichts, gehört „hay“ dazu. Steht „el“, „la“, ein Possessivbegleiter oder ein Eigenname, gehört „está“ dazu. Anders gesagt: Unbestimmtes wird angekündigt, Bestimmtes wird verortet.',
            },
          },
          table: {
            headers: ['Delante del sustantivo', 'Se usa', 'Ejemplo'],
            rows: [
              ['un, una, unos, unas', 'hay', 'Hay una farmacia en la plaza.'],
              ['un número', 'hay', 'Hay tres bancos aquí.'],
              ['nada', 'hay', 'No hay parada aquí.'],
              ['el, la, los, las', 'está / están', 'La farmacia está en la plaza.'],
              ['mi, tu, su…', 'está / están', 'Mi casa está cerca.'],
              ['nombre propio', 'está', 'El Museo del Prado está en Madrid.'],
            ],
          },
        },
        {
          id: 'es3-p4-cloze',
          type: 'CLOZE',
          instruction: 'Complete con «hay», «está» o «están».',
          wordBank: ['hay', 'está', 'están'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'En esta calle ' },
            { kind: 'GAP', gapId: 'e1', solution: ['hay'], width: 7 },
            { kind: 'TEXT', text: ' un banco.\nEl banco ' },
            { kind: 'GAP', gapId: 'e2', solution: ['está'], width: 7 },
            { kind: 'TEXT', text: ' en la esquina.\nMis llaves ' },
            { kind: 'GAP', gapId: 'e3', solution: ['están'], width: 8 },
            { kind: 'TEXT', text: ' en la mesa.' },
          ],
        },
        {
          id: 'es3-p4-choice',
          type: 'CHOICE',
          instruction: 'Marque todas las frases correctas.',
          question: '¿Cuáles de estas frases son correctas?',
          options: [
            { id: 'x1', text: 'Hay una parada delante del hospital.' },
            { id: 'x2', text: 'Hay la parada delante del hospital.' },
            { id: 'x3', text: 'La parada está delante del hospital.' },
            { id: 'x4', text: 'Está una parada delante del hospital.' },
          ],
          multiple: true,
          solution: ['x1', 'x3'],
          explanation:
            'Con «una» va «hay»; con «la» va «está». Las otras dos mezclan las dos construcciones.',
          explanationTranslations: {
            de: 'Zu „una“ gehört „hay“, zu „la“ gehört „está“. Die beiden anderen vermischen die zwei Konstruktionen.',
          },
        },
        {
          id: 'es3-p4-match',
          type: 'MATCHING',
          instruction: 'Relacione el principio con el final correcto.',
          left: [
            { id: 'm1', text: 'En el centro hay…' },
            { id: 'm2', text: 'El museo está…' },
            { id: 'm3', text: 'Mis padres están…' },
            { id: 'm4', text: 'Delante de la casa hay…' },
          ],
          right: [
            { id: 'n1', text: '…muchas tiendas pequeñas.' },
            { id: 'n2', text: '…enfrente de la plaza.' },
            { id: 'n3', text: '…en Casablanca esta semana.' },
            { id: 'n4', text: '…dos árboles muy altos.' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'n1' },
            { leftId: 'm2', rightId: 'n2' },
            { leftId: 'm3', rightId: 'n3' },
            { leftId: 'm4', rightId: 'n4' },
          ],
        },
        {
          id: 'es3-p4-info-numero',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Solo «estar» tiene plural',
          text: 'Otra diferencia práctica: «hay» no cambia nunca, ni con uno ni con veinte. «estar», en cambio, se ajusta: «está» para uno, «están» para varios. Si duda de si una frase necesita plural, ya sabe que no puede ser «hay».',
          translations: {
            de: {
              title: 'Nur „estar“ hat einen Plural',
              text: 'Ein weiterer praktischer Unterschied: „hay“ ändert sich nie, weder bei einem noch bei zwanzig. „estar“ dagegen richtet sich: „está“ für eines, „están“ für mehrere. Wenn Sie zweifeln, ob ein Satz den Plural braucht, wissen Sie schon, dass es nicht „hay“ sein kann.',
            },
          },
          table: {
            headers: ['Singular', 'Plural'],
            rows: [
              ['Hay un parque.', 'Hay tres parques.'],
              ['El parque está allí.', 'Los parques están allí.'],
            ],
          },
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
    estimatedMinutes: 18,
    content: {
      version: v,
      blocks: [
        { id: 'es3-p5-h1', type: 'HEADING', level: 1, text: '¿Ya sabes hacerlo?' },
        {
          id: 'es3-p5-intro',
          type: 'TEXT',
          text: 'Aquí vuelve todo el capítulo: los sitios de la ciudad, las preposiciones de lugar, la indicación del camino y la diferencia entre «hay» y «está».',
          translations: {
            de: 'Hier kommt das ganze Kapitel noch einmal: die Orte der Stadt, die Ortspräpositionen, die Wegauskunft und der Unterschied zwischen „hay“ und „está“.',
          },
        },
        {
          id: 'es3-p5-cloze',
          type: 'CLOZE',
          instruction: 'Complete el texto.',
          wordBank: ['hay', 'está', 'del', 'cerca', 'gire'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Vivo en un barrio tranquilo. En mi calle ' },
            { kind: 'GAP', gapId: 'f1', solution: ['hay'], width: 6 },
            { kind: 'TEXT', text: ' dos panaderías y una farmacia. La farmacia ' },
            { kind: 'GAP', gapId: 'f2', solution: ['está'], width: 7 },
            { kind: 'TEXT', text: ' al lado ' },
            { kind: 'GAP', gapId: 'f3', solution: ['del'], width: 6 },
            { kind: 'TEXT', text: ' banco, en la esquina. Todo queda muy ' },
            { kind: 'GAP', gapId: 'f4', solution: ['cerca'], width: 7 },
            { kind: 'TEXT', text: ' de casa. Para ir a la estación, siga todo recto y ' },
            { kind: 'GAP', gapId: 'f5', solution: ['gire'], width: 6 },
            { kind: 'TEXT', text: ' a la izquierda.' },
          ],
        },
        {
          id: 'es3-p5-match',
          type: 'MATCHING',
          instruction: 'Relacione la pregunta con la respuesta.',
          left: [
            { id: 'a1', text: '¿Hay un supermercado por aquí?' },
            { id: 'a2', text: '¿Dónde está la estación?' },
            { id: 'a3', text: '¿Está lejos?' },
            { id: 'a4', text: 'Perdone, ¿para ir al museo?' },
          ],
          right: [
            { id: 'b1', text: 'Sí, hay uno en la plaza.' },
            { id: 'b2', text: 'Está detrás de la iglesia.' },
            { id: 'b3', text: 'No, a cinco minutos a pie.' },
            { id: 'b4', text: 'Siga todo recto y gire a la derecha.' },
          ],
          solution: [
            { leftId: 'a1', rightId: 'b1' },
            { leftId: 'a2', rightId: 'b2' },
            { leftId: 'a3', rightId: 'b3' },
            { leftId: 'a4', rightId: 'b4' },
          ],
        },
        {
          id: 'es3-p5-choice',
          type: 'CHOICE',
          instruction: 'Marque todas las frases correctas.',
          question: '¿Cuáles de estas frases son correctas?',
          options: [
            { id: 's1', text: 'El museo está enfrente de la plaza.' },
            { id: 's2', text: 'Hay el museo enfrente de la plaza.' },
            { id: 's3', text: 'Mi casa está cerca del parque.' },
            { id: 's4', text: 'Vivo cerca de el centro.' },
          ],
          multiple: true,
          solution: ['s1', 's3'],
          explanation:
            'Detrás de «hay» no va «el». Y «de + el» se juntan siempre en «del»: «cerca del centro».',
          explanationTranslations: {
            de: 'Nach „hay“ steht kein „el“. Und „de + el“ verschmelzen immer zu „del“: „cerca del centro“.',
          },
        },
        {
          id: 'es3-p5-writing',
          type: 'WRITING',
          instruction: 'Describa su barrio.',
          prompt:
            'Escriba de cuatro a seis frases: ¿Qué hay en su barrio? ¿Dónde están los sitios más importantes? Use «hay» al menos dos veces, «estar» al menos dos veces y tres preposiciones de lugar.',
          minWords: 20,
          maxWords: 90,
          aiFeedback: true,
          sampleAnswer:
            'Vivo en un barrio pequeño al norte de la ciudad. En mi calle hay dos supermercados y una farmacia. La farmacia está al lado del banco. Detrás de mi casa hay un parque muy grande. La parada de autobús está enfrente de la iglesia, a dos minutos a pie. No hay estación de tren, pero el centro está bastante cerca.',
        },
      ],
    },
  },
];
