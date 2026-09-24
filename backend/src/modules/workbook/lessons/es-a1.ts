import {
  BEGINNER as B,
  GRAMMAR as G,
  choice,
  cloze,
  culture,
  dialogue,
  grammar,
  lessons,
  match,
  order,
  tip,
  vocabBuilder,
} from './builders';

const words = vocabBuilder('de');

/** Spanisch A1 – Beginner, Kapitel 1 bis 6, dazu die A1-Kapitel des Grammatikbuchs. */
export const ES_A1 = lessons('es-a1', [
  // ------------------------------------------------ Capítulo 1: ¡Hola!
  {
    kind: 'VOCAB',
    title: 'Saludos y despedidas',
    ref: [B, 1, 1],
    learn: [
      words('Saludar', [
        ['buenos días', 'guten Morgen / guten Tag'],
        ['buenas tardes', 'guten Tag (nachmittags)'],
        ['buenas noches', 'guten Abend / gute Nacht'],
        ['hola', 'hallo'],
        ['adiós', 'tschüss / auf Wiedersehen'],
        ['hasta luego', 'bis später'],
        ['hasta mañana', 'bis morgen'],
        ['¿qué tal?', 'wie geht’s?'],
      ]),
    ],
    test: [
      match('Relacione.', [
        ['¡Hola! ¿Qué tal?', 'Bien, gracias. ¿Y tú?'],
        ['¡Hasta mañana!', '¡Adiós, hasta mañana!'],
        ['Buenos días, señora Herrera.', 'Buenos días, señor Okafor.'],
      ]),
      choice('Elija.', 'Usted se va de la oficina a las cinco de la tarde. ¿Qué dice?', [
        '*¡Hasta mañana!',
        '¡Hola!',
        'Buenos días.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: '¿tú o usted?',
    ref: [B, 1, 1],
    learn: [
      grammar(
        'Dos formas de tratamiento',
        '«usted» es formal: para personas desconocidas, en el trabajo y en las oficinas públicas. «tú» es familiar: para la familia, los amigos y, muy a menudo, entre gente joven.',
        {
          headers: ['', 'tú', 'usted'],
          rows: [
            ['Pregunta', '¿Cómo estás?', '¿Cómo está usted?'],
            ['Nombre', '¿Cómo te llamas?', '¿Cómo se llama usted?'],
          ],
        },
      ),
    ],
    test: [
      choice('¿tú o usted?', 'Usted habla con su nueva jefa.', [
        '¿Cómo estás?',
        '*¿Cómo está usted?',
      ]),
      choice('¿tú o usted?', 'Usted habla con un compañero de curso.', [
        '*¿Cómo te llamas?',
        '¿Cómo se llama usted?',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Buenos días, buenas tardes',
    ref: [B, 1, 1],
    learn: [
      culture(
        '¿Qué saludo a qué hora?',
        '«buenas tardes» empieza más tarde que el «guten Tag» alemán: después de la comida, hacia las dos o las tres. «buenas noches» sirve tanto para saludar al llegar como para despedirse.',
        {
          headers: ['Hora', 'Saludo'],
          rows: [
            ['00:00 – 14:00', 'Buenos días.'],
            ['14:00 – 21:00', 'Buenas tardes.'],
            ['21:00 – 00:00', 'Buenas noches.'],
          ],
        },
      ),
    ],
    test: [
      match('¿Qué saludo corresponde?', [
        ['10:00', 'Buenos días.'],
        ['16:30', 'Buenas tardes.'],
        ['22:00', 'Buenas noches.'],
      ]),
      choice('Elija.', 'Son las 13:00. ¿Qué saludo formal corresponde?', [
        '*Buenos días.',
        'Buenas tardes.',
        'Buenas noches.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'El presente: verbos en -ar',
    ref: [B, 1, 2],
    learn: [
      grammar(
        'hablar, estudiar',
        'Se quita la terminación -ar y se añade la del sujeto. Como la terminación ya indica quién habla, el pronombre normalmente se omite.',
        {
          headers: ['Persona', 'hablar', 'estudiar'],
          rows: [
            ['yo', 'hablo', 'estudio'],
            ['tú', 'hablas', 'estudias'],
            ['él / ella / usted', 'habla', 'estudia'],
            ['nosotros', 'hablamos', 'estudiamos'],
            ['vosotros', 'habláis', 'estudiáis'],
            ['ellos / ustedes', 'hablan', 'estudian'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'En casa [hablamos] portugués. ¿Tú [estudias] español? Nadia [habla] árabe y francés.',
        ['hablan', 'estudio'],
      ),
      match('Relacione.', [
        ['yo', 'hablo'],
        ['tú', 'hablas'],
        ['nosotros', 'hablamos'],
        ['ellos', 'hablan'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Me llamo…',
    ref: [B, 1, 2],
    learn: [
      grammar(
        'llamarse: un verbo con pronombre',
        'Para decir el nombre se usa «llamarse». El pronombre cambia con la persona y va delante del verbo: me, te, se. Por eso se dice «me llamo», no «yo llamo».',
        {
          headers: ['Pregunta', 'Respuesta'],
          rows: [
            ['¿Cómo te llamas?', 'Me llamo Tomás.'],
            ['¿Cómo se llama usted?', 'Me llamo Carmen Ruiz.'],
            ['¿Cómo se llama él?', 'Se llama Jonas.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        '¿Cómo [te] llamas? – [Me] llamo Nadia. Y mi profesora [se] llama Carmen.',
      ),
      order('Ordene la pregunta.', ['¿Cómo', 'se', 'llama', 'usted?']),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'ser de – vivir en – estar en',
    ref: [B, 1, 3],
    learn: [
      grammar(
        'Origen y lugar',
        '«ser» dice lo que alguien es de forma duradera: el origen, la profesión. «estar» dice dónde está alguien en este momento. Para el lugar donde uno tiene su casa se usa «vivir en»: «Soy de Portugal, vivo en Valencia y ahora estoy en Madrid.»',
        {
          headers: ['Persona', 'ser', 'estar', 'vivir'],
          rows: [
            ['yo', 'soy', 'estoy', 'vivo'],
            ['tú', 'eres', 'estás', 'vives'],
            ['él / ella / usted', 'es', 'está', 'vive'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'Nadia [es] de Marruecos, pero [vive] en Valencia. Su familia [está] en Casablanca.',
        ['está en', 'vives'],
      ),
      choice('Elija.', '¿De dónde …?', ['estás', '*eres', 'vives']),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Países y nacionalidades',
    ref: [B, 1, 3],
    learn: [
      words('Países', [
        ['Alemania', 'Deutschland'],
        ['alemán / alemana', 'deutsch, Deutsche(r)'],
        ['España', 'Spanien'],
        ['español / española', 'spanisch, Spanier(in)'],
        ['México', 'Mexiko'],
        ['mexicano / mexicana', 'mexikanisch'],
        ['el idioma', 'die Sprache'],
      ]),
    ],
    test: [
      match('País y nacionalidad', [
        ['Alemania', 'alemana'],
        ['España', 'española'],
        ['México', 'mexicana'],
        ['Argentina', 'argentina'],
      ]),
      choice('Elija.', 'Tomás es de Portugal. Es …', ['*portugués.', 'portuguesa.', 'Portugal.']),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Es listo, está listo',
    ref: [G, 2, 3],
    learn: [
      grammar(
        'Dasselbe Adjektiv, zwei Bedeutungen',
        'Con «ser» el adjetivo describe cómo es algo por naturaleza; con «estar», cómo se encuentra ahora. En algunos pares la diferencia es enorme.',
        {
          headers: ['Adjetivo', 'con ser', 'con estar'],
          rows: [
            ['listo', 'es listo – er ist klug', 'está listo – er ist fertig'],
            ['aburrido', 'es aburrido – er ist langweilig', 'está aburrido – ihm ist langweilig'],
            ['rico', 'es rico – er ist reich', 'está rico – es schmeckt gut'],
            ['malo', 'es malo – er ist böse', 'está malo – er ist krank'],
          ],
        },
      ),
    ],
    test: [
      match('¿Qué significa?', [
        ['La paella está rica.', 'Die Paella schmeckt gut.'],
        ['Mi tío es rico.', 'Mein Onkel ist reich.'],
        ['¿Estás listo?', 'Bist du fertig?'],
        ['Juan está malo.', 'Juan ist krank.'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Deletrear',
    ref: [B, 1, 4],
    learn: [
      tip(
        'Letras especiales',
        'La «h» no se pronuncia nunca. Algunas letras tienen un nombre que sorprende.',
      ),
      grammar(
        'El alfabeto',
        'El alfabeto español tiene 27 letras: las mismas que el alemán, más la «ñ».',
        {
          headers: ['Letra', 'Se dice', 'Ejemplo'],
          rows: [
            ['ñ', 'eñe', 'España'],
            ['j', 'jota', 'Jorge'],
            ['h', 'hache (muda)', 'hola'],
            ['ll', 'doble ele', 'llamar'],
            ['y', 'i griega / ye', 'yo'],
          ],
        },
      ),
      dialogue('Por teléfono', [
        'Recepción: ¿Su apellido, por favor?',
        'Sra. Salem: Salem.',
        'Recepción: ¿Cómo se escribe?',
        'Sra. Salem: Ese, a, ele, e, eme.',
      ]),
    ],
    test: [
      match('¿Qué nombre se deletrea?', [
        ['jota, o, ere, ge, e', 'Jorge'],
        ['hache, u, ge, o', 'Hugo'],
        ['ene, u, eñe, e, zeta', 'Núñez'],
      ]),
      choice('Elija.', '¿Cómo se llama la letra «j»?', ['*jota', 'hache', 'ge']),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Los números del 0 al 20',
    ref: [B, 1, 4],
    learn: [
      grammar(
        '0 – 20',
        'Del cero al quince cada número tiene su propia palabra. A partir del dieciséis: «diez + y + unidad», pero en una sola palabra: dieciséis, diecisiete, dieciocho, diecinueve.',
        {
          headers: ['', '', ''],
          rows: [
            ['11 once', '12 doce', '13 trece'],
            ['14 catorce', '15 quince', '16 dieciséis'],
            ['17 diecisiete', '18 dieciocho', '20 veinte'],
          ],
        },
      ),
    ],
    test: [
      match('Relacione.', [
        ['12', 'doce'],
        ['15', 'quince'],
        ['16', 'dieciséis'],
        ['19', 'diecinueve'],
        ['20', 'veinte'],
      ]),
      choice('Elija.', '¿Cómo se escribe 17?', ['diez y siete', '*diecisiete', 'setenta']),
    ],
  },

  // ------------------------------------------------ Capítulo 2: Familia
  {
    kind: 'VOCAB',
    title: 'La familia',
    ref: [B, 2, 1],
    learn: [
      words('Parientes', [
        ['el padre / la madre', 'der Vater / die Mutter'],
        ['los padres', 'die Eltern'],
        ['el hermano / la hermana', 'der Bruder / die Schwester'],
        ['el hijo / la hija', 'der Sohn / die Tochter'],
        ['el abuelo / la abuela', 'der Großvater / die Großmutter'],
        ['el sobrino / la sobrina', 'der Neffe / die Nichte'],
      ]),
      culture(
        'Un plural que incluye a todos',
        'El plural masculino vale para un grupo mixto: «los padres» son el padre y la madre, «los hermanos» pueden ser un hermano y una hermana.',
      ),
    ],
    test: [
      match('¿Quién es?', [
        ['el padre de mi padre', 'mi abuelo'],
        ['la hija de mi hermano', 'mi sobrina'],
        ['mi padre y mi madre', 'mis padres'],
        ['mi hermano y mi hermana', 'mis hermanos'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'El verbo tener',
    ref: [B, 2, 1],
    learn: [
      grammar(
        'tener',
        'Irregular por partida doble: en la primera persona añade una «g» («tengo»), y en las demás la «e» se convierte en «ie». Solo nosotros y vosotros son regulares.',
        {
          headers: ['Persona', 'tener'],
          rows: [
            ['yo', 'tengo'],
            ['tú', 'tienes'],
            ['él / ella / usted', 'tiene'],
            ['nosotros', 'tenemos'],
            ['vosotros', 'tenéis'],
            ['ellos / ustedes', 'tienen'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete con «tener».',
        '¿[Tienes] hermanos? – Sí, [tengo] dos. Mi hermano [tiene] dos hijos. Nosotros no [tenemos] sobrinos.',
        ['tenéis'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'mi, tu, su',
    ref: [B, 2, 2],
    learn: [
      grammar(
        'Los posesivos',
        '«mi», «tu» y «su» solo cambian en plural; «nuestro» y «vuestro» cambian también en femenino.',
        {
          headers: ['Persona', 'Singular', 'Plural'],
          rows: [
            ['yo', 'mi hermano / mi casa', 'mis hermanos'],
            ['tú', 'tu hermano', 'tus hermanos'],
            ['él / ella / usted', 'su hermano', 'sus hermanos'],
            ['nosotros', 'nuestro hermano / nuestra casa', 'nuestros hermanos'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'Estos son [mis] padres. Esta es [nuestra] casa. ¿Dónde viven [tus] abuelos?',
        ['mi', 'nuestro'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'su = sein, ihr, Ihr',
    ref: [B, 2, 2],
    learn: [
      grammar(
        'El posesivo mira a la cosa, no al dueño',
        'En alemán se dice «sein Haus» o «ihr Haus» según el dueño. En español da igual quién sea el dueño: «su casa» sirve para él, para ella, para ellos y para usted. «sus casas» solo cambia porque hay varias casas.',
      ),
      tip(
        'Cuando «su» no está claro',
        'Se añade «de él», «de ella» o «de usted»: «la casa de ella».',
      ),
    ],
    test: [
      choice('Elija.', 'Laila tiene dos hermanos. … hermanos viven en París.', [
        'Su',
        '*Sus',
        'Suyos',
      ]),
      choice('Elija.', 'Pedro y Ana tienen una casa. … casa es grande.', ['*Su', 'Sus']),
      choice('¿Cómo se dice «Ihr Sohn» (von Ihnen, formal)?', 'Elija.', [
        'tu hijo',
        '*su hijo',
        'vuestro hijo',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: '¿Cómo es?',
    ref: [B, 2, 3],
    learn: [
      words('Describir a alguien', [
        ['alto / bajo', 'groß / klein (Person)'],
        ['delgado', 'schlank'],
        ['moreno / rubio', 'dunkelhaarig / blond'],
        ['simpático', 'nett, sympathisch'],
        ['serio', 'ernst'],
        ['divertido', 'lustig'],
        ['parecerse a', 'ähneln'],
      ]),
    ],
    test: [
      match('Lo contrario', [
        ['alto', 'bajo'],
        ['rubio', 'moreno'],
        ['serio', 'divertido'],
        ['joven', 'mayor'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Una mujer simpática',
    ref: [B, 2, 3],
    learn: [
      grammar(
        'El adjetivo se ajusta',
        'Los adjetivos en «-o» tienen cuatro formas. Los que acaban en «-e» o en consonante solo cambian en plural. Y el adjetivo va detrás del sustantivo: «un hombre simpático».',
        {
          headers: ['', 'masc. sing.', 'fem. sing.', 'masc. pl.', 'fem. pl.'],
          rows: [
            ['-o', 'alto', 'alta', 'altos', 'altas'],
            ['-e', 'inteligente', 'inteligente', 'inteligentes', 'inteligentes'],
            ['consonante', 'joven', 'joven', 'jóvenes', 'jóvenes'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'Mi hermana es muy [simpática]. Mis hermanos son [altos]. Laila y Nadia son [inteligentes].',
        ['simpático', 'alto'],
      ),
      choice('Elija.', '¿Cómo se dice «eine blonde Frau»?', [
        'una rubia mujer',
        '*una mujer rubia',
        'una mujer rubio',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'La edad se tiene',
    ref: [B, 2, 4],
    learn: [
      grammar(
        'Tengo treinta años',
        'En alemán uno «ist» treinta años; en español uno «tiene» treinta años. Y no se puede omitir «años»: «tengo treinta años», no «tengo treinta».',
        {
          headers: ['Pregunta', 'Respuesta'],
          rows: [
            ['¿Cuántos años tienes?', 'Tengo veintiocho años.'],
            ['¿Cuántos años tiene usted?', 'Tengo cuarenta y dos años.'],
          ],
        },
      ),
    ],
    test: [
      choice('Elija.', '¿Cuántos años tiene tu hijo?', [
        'Es seis años.',
        '*Tiene seis años.',
        'Tiene seis.',
      ]),
      order('Ordene.', ['¿Cuántos', 'años', 'tiene', 'tu', 'abuela?']),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Los números hasta 100',
    ref: [B, 2, 4],
    learn: [
      grammar(
        'Del 20 al 100',
        'Del 21 al 29 se escribe todo junto: veintiuno, veintidós. A partir del 31 en tres palabras, con «y» en medio: treinta y uno, cuarenta y cinco.',
        {
          headers: ['Decenas', 'Ejemplo'],
          rows: [
            ['20 veinte', '21 veintiuno'],
            ['30 treinta', '32 treinta y dos'],
            ['50 cincuenta', '58 cincuenta y ocho'],
            ['70 setenta', '77 setenta y siete'],
            ['100 cien', ''],
          ],
        },
      ),
    ],
    test: [
      match('Relacione.', [
        ['24', 'veinticuatro'],
        ['43', 'cuarenta y tres'],
        ['60', 'sesenta'],
        ['70', 'setenta'],
        ['99', 'noventa y nueve'],
      ]),
    ],
  },

  // ------------------------------------------------ Capítulo 3: En la ciudad
  {
    kind: 'VOCAB',
    title: 'Lugares de la ciudad',
    ref: [B, 3, 1],
    learn: [
      words('En el centro', [
        ['la calle', 'die Straße'],
        ['la plaza', 'der Platz'],
        ['la esquina', 'die Ecke'],
        ['la farmacia', 'die Apotheke'],
        ['la estación', 'der Bahnhof'],
        ['la parada de autobús', 'die Bushaltestelle'],
        ['la iglesia', 'die Kirche'],
      ]),
    ],
    test: [
      match('¿Dónde se hace?', [
        ['comprar medicinas', 'en la farmacia'],
        ['tomar el tren', 'en la estación'],
        ['esperar el autobús', 'en la parada'],
        ['ver cuadros', 'en el museo'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'hay',
    ref: [B, 3, 1],
    learn: [
      grammar(
        'Una forma para todo',
        '«hay» dice que algo existe. No cambia nunca, ni con singular ni con plural. Detrás va «un/una», un número o nada – pero nunca «el» o «la».',
        {
          headers: ['Correcto', 'Incorrecto'],
          rows: [
            ['Hay una farmacia en la plaza.', 'Hay la farmacia en la plaza.'],
            ['Hay dos bancos en esta calle.', 'Hayn dos bancos…'],
            ['No hay parada de autobús.', 'No hay la parada.'],
          ],
        },
      ),
    ],
    test: [
      choice('¿Correcto o no?', 'Elija la frase correcta.', [
        'Hay el museo en la plaza.',
        '*Hay un museo en la plaza.',
        'Hayn tres museos.',
      ]),
      order('Ordene.', ['¿Hay', 'un', 'supermercado', 'por', 'aquí?']),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: '¿Dónde está el banco?',
    ref: [B, 3, 2],
    learn: [
      grammar('Las preposiciones de lugar', 'Casi todas llevan «de» detrás.', {
        headers: ['Preposición', 'Alemán', 'Ejemplo'],
        rows: [
          ['al lado de', 'neben', 'al lado del banco'],
          ['enfrente de', 'gegenüber', 'enfrente de la plaza'],
          ['delante de', 'vor', 'delante de la casa'],
          ['detrás de', 'hinter', 'detrás de la estación'],
          ['cerca de / lejos de', 'nah / weit', 'cerca del centro'],
        ],
      }),
    ],
    test: [
      match('Relacione.', [
        ['neben', 'al lado de'],
        ['gegenüber', 'enfrente de'],
        ['hinter', 'detrás de'],
        ['vor', 'delante de'],
      ]),
      cloze(
        'Complete.',
        'La farmacia está [al] lado del banco. El parque está [detrás] de la estación.',
        ['en', 'delante'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'del y al',
    ref: [B, 3, 2],
    learn: [
      tip(
        'Solo dos parejas',
        '«de + el» da «del», «a + el» da «al». Con «la», «los» y «las» no pasa nada: «de la plaza», «a los parques».',
      ),
    ],
    test: [
      cloze(
        'Complete con del, de la, al o a la.',
        'Vivo cerca [del] parque. Voy [al] museo. La parada está enfrente [de la] estación. Después voy [a la] farmacia.',
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Perdone, ¿para ir a…?',
    ref: [B, 3, 3],
    learn: [
      dialogue('Camino de la estación', [
        'Nadia: Perdone, ¿para ir a la estación?',
        'Hombre: Siga todo recto hasta la plaza.',
        'Nadia: ¿Hasta la plaza grande?',
        'Hombre: Sí. Allí gire a la derecha y cruce la calle.',
        'Nadia: ¿Y está lejos?',
        'Hombre: No, unos diez minutos a pie.',
      ]),
      tip(
        'Fórmulas para el camino',
        'Siga todo recto = Gehen Sie geradeaus. Gire a la derecha / izquierda = Biegen Sie rechts / links ab. Cruce la calle = Überqueren Sie die Straße.',
      ),
    ],
    test: [
      order('¿Qué hace Nadia? Ordene.', [
        'Sigue todo recto.',
        'Llega a la plaza.',
        'Gira a la derecha.',
        'Cruza la calle.',
      ]),
      choice('Lea el diálogo.', '¿Cuánto tiempo necesita Nadia?', [
        'dos minutos',
        '*unos diez minutos',
        'una hora',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: '¿hay o está?',
    ref: [B, 3, 4],
    learn: [
      grammar(
        'La regla del artículo',
        '«hay» presenta algo por primera vez, «está» localiza algo que ya se conoce. Mire el artículo: «un/una», un número o nada → hay. «el/la», un posesivo o un nombre propio → está. Y solo «estar» tiene plural: está / están.',
      ),
    ],
    test: [
      cloze(
        '¿hay, está o están?',
        '[Hay] una farmacia en la plaza. La farmacia [está] al lado del banco. Mis padres [están] en casa. En mi calle [hay] tres bares.',
      ),
      choice('Elija.', 'El Museo del Prado … en Madrid.', ['hay', '*está', 'es']),
    ],
  },

  // ------------------------------------------------ Capítulo 4: Un día normal
  {
    kind: 'GRAMMAR',
    title: 'Las tres familias de verbos',
    ref: [B, 4, 1],
    learn: [
      grammar(
        '-ar, -er, -ir',
        'Quite las dos últimas letras del infinitivo y añada la terminación. Los verbos en -er e -ir solo se diferencian en nosotros y vosotros.',
        {
          headers: ['', 'trabajar', 'comer', 'vivir'],
          rows: [
            ['yo', 'trabajo', 'como', 'vivo'],
            ['tú', 'trabajas', 'comes', 'vives'],
            ['él / ella', 'trabaja', 'come', 'vive'],
            ['nosotros', 'trabajamos', 'comemos', 'vivimos'],
            ['vosotros', 'trabajáis', 'coméis', 'vivís'],
            ['ellos', 'trabajan', 'comen', 'viven'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'Yo [trabajo] en una oficina. Mi hermana [vive] en Sevilla. Nosotros [comemos] a las dos. ¿Vosotros [escribís] muchos correos?',
        ['vivimos', 'come'],
      ),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Un día de trabajo',
    ref: [B, 4, 1],
    learn: [
      words('Verbos del día', [
        ['desayunar', 'frühstücken'],
        ['trabajar', 'arbeiten'],
        ['descansar', 'sich ausruhen'],
        ['comer', 'essen, zu Mittag essen'],
        ['leer', 'lesen'],
        ['escribir', 'schreiben'],
        ['abrir', 'öffnen'],
      ]),
      tip(
        'El sujeto casi siempre sobra',
        'Se dice «trabajo en Madrid», no «yo trabajo en Madrid». El pronombre aparece para subrayar o contrastar: «Yo trabajo, tú descansas.»',
      ),
    ],
    test: [
      match('Relacione.', [
        ['desayunar', 'por la mañana'],
        ['comer', 'a las dos o las tres'],
        ['descansar', 'después del trabajo'],
      ]),
      choice('Elija la frase más natural.', '(Sie wollen einfach sagen: Ich lese viel.)', [
        'Yo leo mucho.',
        '*Leo mucho.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: '¿Qué hora es?',
    ref: [B, 4, 2],
    learn: [
      grammar(
        'Es la una, son las dos',
        'Solo la una va en singular; de las dos en adelante, en plural. Los minutos se suman con «y» hasta la media y se restan con «menos» a partir de ahí.',
        {
          headers: ['Reloj', 'Se dice'],
          rows: [
            ['1:00', 'Es la una.'],
            ['3:10', 'Son las tres y diez.'],
            ['4:15', 'Son las cuatro y cuarto.'],
            ['5:30', 'Son las cinco y media.'],
            ['6:45', 'Son las siete menos cuarto.'],
          ],
        },
      ),
    ],
    test: [
      match('¿Qué hora es?', [
        ['2:30', 'Son las dos y media.'],
        ['8:15', 'Son las ocho y cuarto.'],
        ['9:40', 'Son las diez menos veinte.'],
        ['1:05', 'Es la una y cinco.'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: '¿Qué hora es? – ¿A qué hora?',
    ref: [B, 4, 2],
    learn: [
      grammar(
        'Dos preguntas distintas',
        '«¿Qué hora es?» pregunta por el reloj: «Son las nueve.» «¿A qué hora…?» pregunta por el momento de algo y se responde con «a»: «A las nueve.»',
      ),
      culture(
        'La tarde española',
        'La «tarde» empieza después de comer, hacia las dos o las tres, y dura hasta que oscurece. Por eso las cinco son «las cinco de la tarde».',
      ),
    ],
    test: [
      match('Pregunta y respuesta', [
        ['¿Qué hora es?', 'Son las ocho y veinte.'],
        ['¿A qué hora pasa el autobús?', 'A las ocho y media.'],
        ['¿A qué hora comes?', 'A la una.'],
      ]),
      choice('Elija.', 'Entro a trabajar … nueve.', ['son las', '*a las', 'es la']),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Me levanto a las siete',
    ref: [B, 4, 3],
    learn: [
      grammar(
        'Los verbos reflexivos',
        'En el diccionario acaban en «-se»: levantarse, ducharse. El «-se» se cambia por el pronombre de la persona y va delante del verbo. La negación va aún más adelante: «no me levanto temprano».',
        {
          headers: ['', 'levantarse'],
          rows: [
            ['yo', 'me levanto'],
            ['tú', 'te levantas'],
            ['él / ella / usted', 'se levanta'],
            ['nosotros', 'nos levantamos'],
            ['vosotros', 'os levantáis'],
            ['ellos', 'se levantan'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'Yo [me] levanto a las siete. ¿A qué hora [te] duchas? Mis hijos [se] acuestan a las nueve. Nosotros [nos] vamos a las ocho.',
      ),
      order('Ordene.', ['No', 'me', 'levanto', 'temprano', 'los', 'domingos.']),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'La mañana y la noche',
    ref: [B, 4, 3],
    learn: [
      words('Rutina', [
        ['despertarse', 'aufwachen'],
        ['ducharse', 'duschen'],
        ['lavarse los dientes', 'sich die Zähne putzen'],
        ['vestirse', 'sich anziehen'],
        ['irse', 'weggehen'],
        ['acostarse', 'ins Bett gehen'],
        ['dormirse', 'einschlafen'],
      ]),
      tip(
        'Me lavo las manos',
        'El español no repite el posesivo: «me lavo las manos», no «lavo mis manos».',
      ),
    ],
    test: [
      order('Ordene el día.', [
        'despertarse',
        'levantarse',
        'ducharse',
        'vestirse',
        'irse al trabajo',
      ]),
      choice('Elija.', '¿Cómo se dice «Ich putze mir die Zähne»?', [
        'Lavo mis dientes.',
        '*Me lavo los dientes.',
        'Me lavo mis dientes.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Siempre, a veces, nunca',
    ref: [B, 4, 4],
    learn: [
      grammar(
        'Con qué frecuencia',
        '«nunca» delante del verbo va solo; detrás exige un «no» delante del verbo: «Nunca me acuesto tarde» = «No me acuesto nunca tarde».',
        {
          headers: ['Frecuencia', 'Ejemplo'],
          rows: [
            ['siempre', 'Siempre desayuno en casa.'],
            ['a menudo', 'A menudo como con mis compañeros.'],
            ['a veces', 'A veces salgo a correr.'],
            ['casi nunca', 'Casi nunca veo la televisión.'],
            ['nunca', 'Nunca me acuesto tarde.'],
          ],
        },
      ),
    ],
    test: [
      order('De más a menos frecuente', ['siempre', 'a menudo', 'a veces', 'casi nunca', 'nunca']),
      choice('Elija la frase correcta.', 'Elija.', [
        'Me acuesto nunca tarde.',
        '*No me acuesto nunca tarde.',
        'Nunca no me acuesto tarde.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'El lunes o los lunes',
    ref: [B, 4, 4],
    learn: [
      grammar(
        'El artículo hace el trabajo',
        '«El lunes» es un lunes concreto; «los lunes» son todos los lunes. Los días no llevan mayúscula ni preposición.',
        {
          headers: ['Español', 'Alemán'],
          rows: [
            ['El lunes tengo una reunión.', 'Am Montag habe ich eine Besprechung.'],
            ['Los lunes voy al gimnasio.', 'Montags gehe ich ins Fitnessstudio.'],
            ['Los sábados me levanto tarde.', 'Samstags stehe ich spät auf.'],
          ],
        },
      ),
    ],
    test: [
      choice('Elija.', '¿Cómo se dice «Samstags schlafe ich lange»?', [
        'El sábado duermo mucho.',
        '*Los sábados duermo mucho.',
        'En sábado duermo mucho.',
      ]),
      order('Ordene los días.', ['lunes', 'martes', 'miércoles', 'jueves', 'viernes']),
    ],
  },

  // ------------------------------------------------ Capítulo 5: De compras
  {
    kind: 'VOCAB',
    title: 'Tiendas y productos',
    ref: [B, 5, 1],
    learn: [
      words('En la tienda', [
        ['la panadería', 'die Bäckerei'],
        ['la carnicería', 'die Metzgerei'],
        ['la frutería', 'der Obst- und Gemüseladen'],
        ['el pan', 'das Brot'],
        ['el queso', 'der Käse'],
        ['los huevos', 'die Eier'],
        ['barato / caro', 'billig / teuer'],
      ]),
    ],
    test: [
      match('¿Dónde se compra?', [
        ['el pan', 'en la panadería'],
        ['la carne', 'en la carnicería'],
        ['las manzanas', 'en la frutería'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: '¿Cuánto cuesta?',
    ref: [B, 5, 1],
    learn: [
      grammar(
        'cuesta o cuestan',
        'Una cosa «cuesta», varias «cuestan». «¿Cuánto es?» pregunta por el total y no cambia. 3,50 € es «tres euros con cincuenta» o «tres cincuenta».',
      ),
    ],
    test: [
      cloze(
        'Complete.',
        '¿Cuánto [cuesta] el queso? ¿Cuánto [cuestan] los huevos? ¿Cuánto [es] todo?',
      ),
      choice('Elija.', '¿Cómo se dice 2,40 €?', [
        '*dos euros con cuarenta',
        'cuarenta con dos',
        'dos cuarenta euros con',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Este, ese, aquel',
    ref: [B, 5, 2],
    learn: [
      grammar(
        'Tres distancias',
        '«este»: junto a mí. «ese»: junto a ti. «aquel»: lejos de los dos. Cambian con género y número. Forma neutra para lo que no tiene nombre: esto, eso, aquello – «¿Qué es esto?».',
        {
          headers: ['Distancia', 'masc.', 'fem.', 'plural'],
          rows: [
            ['aquí', 'este pan', 'esta leche', 'estos / estas'],
            ['ahí', 'ese pan', 'esa leche', 'esos / esas'],
            ['allí', 'aquel pan', 'aquella leche', 'aquellos / aquellas'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        '¿Cuánto cuestan [estas] naranjas (aquí)? [Esas] de ahí están más maduras. ¿Y [aquellas] del fondo?',
        ['este', 'aquel'],
      ),
      choice('Elija.', '¿Qué es …? (etwas Unbekanntes, das ich in der Hand halte)', [
        'este',
        '*esto',
        'esta',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Un kilo de tomates',
    ref: [B, 5, 3],
    learn: [
      grammar(
        'Cantidad + de + producto',
        'Entre la cantidad y el producto va «de», sin artículo: «un kilo de tomates», nunca «un kilo de los tomates». «Medio» va sin artículo delante: medio kilo, media docena.',
        {
          headers: ['Cantidad', 'Ejemplo'],
          rows: [
            ['un kilo de', 'un kilo de manzanas'],
            ['un litro de', 'un litro de leche'],
            ['una docena de', 'una docena de huevos'],
            ['una botella de', 'una botella de aceite'],
          ],
        },
      ),
    ],
    test: [
      match('Relacione.', [
        ['una docena de', 'huevos'],
        ['un litro de', 'leche'],
        ['una botella de', 'aceite'],
        ['un paquete de', 'arroz'],
      ]),
      choice('Elija.', 'Póngame …', [
        'un medio kilo de queso.',
        '*medio kilo de queso.',
        'medio kilo del queso.',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'En el mercado',
    ref: [B, 5, 3],
    learn: [
      dialogue('En el mercado', [
        'Vendedor: ¡Buenos días! ¿Qué le pongo?',
        'Cliente: Póngame un kilo de tomates y medio de cebollas.',
        'Vendedor: Muy bien. ¿Algo más?',
        'Cliente: Sí, una docena de huevos. ¿Cuánto es?',
        'Vendedor: Son ocho euros con treinta.',
        'Cliente: Aquí tiene diez.',
        'Vendedor: Y un euro setenta de vuelta.',
      ]),
    ],
    test: [
      choice('Lea el diálogo.', '¿Qué no compra el cliente?', ['tomates', 'huevos', '*queso']),
      match('Relacione.', [
        ['¿Qué le pongo?', 'Póngame un kilo de tomates.'],
        ['¿Algo más?', 'Sí, una docena de huevos.'],
        ['¿Cuánto es?', 'Son ocho euros con treinta.'],
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'La ropa',
    ref: [B, 5, 4],
    learn: [
      words('Ropa', [
        ['la camisa', 'das Hemd'],
        ['la camiseta', 'das T-Shirt'],
        ['los pantalones', 'die Hose'],
        ['la falda', 'der Rock'],
        ['la chaqueta', 'die Jacke'],
        ['los zapatos', 'die Schuhe'],
        ['la talla', 'die Größe (Kleidung)'],
        ['probarse', 'anprobieren'],
      ]),
    ],
    test: [
      match('Relacione.', [
        ['el probador', 'Umkleidekabine'],
        ['la talla', 'Kleidergröße'],
        ['el número', 'Schuhgröße'],
        ['probarse', 'anprobieren'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Una camisa blanca',
    ref: [B, 5, 4],
    learn: [
      grammar(
        'Los colores se ajustan',
        'Un color en -o tiene cuatro formas: blanco, blanca, blancos, blancas. En -e o consonante solo añade -s / -es: verde/verdes, azul/azules. Va detrás del sustantivo.',
        {
          headers: ['', 'masc.', 'fem.', 'plural'],
          rows: [
            ['weiß', 'blanco', 'blanca', 'blancos / blancas'],
            ['rot', 'rojo', 'roja', 'rojos / rojas'],
            ['grün', 'verde', 'verde', 'verdes'],
            ['blau', 'azul', 'azul', 'azules'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        'Busco una camisa [blanca] y unos zapatos [negros]. Me gustan las faldas [azules].',
        ['blanco', 'negras'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Me queda bien',
    ref: [B, 5, 4],
    learn: [
      tip(
        'quedar funciona como gustar',
        'El sujeto es la ropa, no la persona: una camisa «me queda bien»; dos camisas «me quedan grandes».',
      ),
    ],
    test: [
      cloze(
        'queda o quedan?',
        'Esta chaqueta me [queda] muy bien. Estos zapatos me [quedan] pequeños.',
      ),
      choice('Elija.', '¿Cómo se dice «Die Hose ist mir zu groß»?', [
        'Quedo grande los pantalones.',
        '*Los pantalones me quedan grandes.',
        'Me queda grande los pantalones.',
      ]),
    ],
  },

  // ------------------------------------------------ Capítulo 6: Comer fuera
  {
    kind: 'VOCAB',
    title: 'La carta',
    ref: [B, 6, 1],
    learn: [
      words('En el restaurante', [
        ['el primer plato', 'die Vorspeise'],
        ['el segundo plato', 'das Hauptgericht'],
        ['el postre', 'die Nachspeise'],
        ['el menú del día', 'das Tagesmenü'],
        ['la tortilla de patatas', 'das Kartoffelomelett'],
        ['el pescado / la carne', 'der Fisch / das Fleisch'],
        ['el agua con gas / sin gas', 'Wasser mit / ohne Kohlensäure'],
      ]),
    ],
    test: [
      match('¿Qué es?', [
        ['la sopa', 'primer plato'],
        ['el pollo con arroz', 'segundo plato'],
        ['el helado', 'postre'],
        ['el vino tinto', 'bebida'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Las horas de comer',
    ref: [B, 6, 1],
    learn: [
      culture(
        'En España se come tarde',
        'La comida principal es a las dos o las tres de la tarde, y la cena raramente antes de las nueve. Por eso muchas cocinas están cerradas a las siete. Entre horas se toma una tapa, que no es una comida sino un acompañamiento de la bebida.',
      ),
    ],
    test: [
      match('¿A qué hora?', [
        ['el desayuno', '7:00 – 9:00'],
        ['la comida', '14:00 – 15:30'],
        ['la merienda', '17:00 – 18:30'],
        ['la cena', '21:00 – 22:30'],
      ]),
      choice('Lea el texto.', '¿Qué es una tapa?', [
        'la comida principal',
        '*un acompañamiento de la bebida',
        'el postre',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Me gusta, me gustan',
    ref: [B, 6, 2],
    learn: [
      grammar(
        'El verbo mira a la cosa',
        '«gustar» significa «gefallen»: el verbo se ajusta a lo que gusta. «gusta» para una cosa o un infinitivo, «gustan» para varias.',
        {
          headers: ['A quién', 'Una cosa', 'Varias'],
          rows: [
            ['a mí', 'me gusta el pescado', 'me gustan las tapas'],
            ['a ti', 'te gusta', 'te gustan'],
            ['a él / ella / usted', 'le gusta', 'le gustan'],
            ['a nosotros', 'nos gusta', 'nos gustan'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'gusta o gustan?',
        'Me [gustan] las verduras. ¿Te [gusta] el café? A Luis le [gusta] cocinar. Nos [gustan] los postres.',
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Me gusta el chocolate',
    ref: [B, 6, 2],
    learn: [
      grammar(
        'Dos detalles',
        'Detrás de «gustar» va el artículo: «me gusta el café», no «me gusta café». Con infinitivos, siempre singular: «me gusta cocinar y comer bien». «a mí» subraya o aclara: «A Luis le gusta el vino».',
      ),
    ],
    test: [
      choice('Elija la frase correcta.', 'Elija.', [
        'Me gusta chocolate.',
        '*Me gusta el chocolate.',
        'Yo gusto el chocolate.',
      ]),
      choice('Elija la frase correcta.', 'Elija.', [
        'Me gustan cenar tarde.',
        '*Me gusta cenar tarde.',
      ]),
      choice('Elija la frase correcta.', 'Elija.', [
        'Luis gusta el vino.',
        '*A Luis le gusta el vino.',
        'A Luis gusta el vino.',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: '¿Qué van a tomar?',
    ref: [B, 6, 3],
    learn: [
      dialogue('Comiendo fuera', [
        'Camarero: Buenas tardes. ¿Qué van a tomar?',
        'Iván: Para mí, el menú del día. De primero, la ensalada mixta.',
        'Camarero: ¿Y de segundo?',
        'Iván: El pescado a la plancha.',
        'Sara: Yo quería la sopa y el pollo con arroz, por favor.',
        'Camarero: ¿Para beber?',
        'Sara: Una botella de agua sin gas y una copa de vino tinto.',
      ]),
      tip(
        'Fórmulas para pedir',
        '«Para mí…» es lo más natural; «Quería…» suena amable. Al final: «La cuenta, por favor.»',
      ),
    ],
    test: [
      choice('Lea el diálogo.', '¿Qué toma Iván de segundo?', [
        'el pollo con arroz',
        '*el pescado a la plancha',
        'la sopa',
      ]),
      choice('Lea el diálogo.', '¿Qué bebe Sara?', [
        '*agua sin gas y vino tinto',
        'agua con gas',
        'vino blanco',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'A mí también, a mí tampoco',
    ref: [B, 6, 4],
    learn: [
      grammar(
        'Cuatro respuestas',
        'Después de una frase afirmativa: «a mí también» o «a mí no». Después de una frase negativa: «a mí tampoco» o «a mí sí».',
        {
          headers: ['Frase anterior', 'Igual que yo', 'Al revés'],
          rows: [
            ['Me gusta el pescado.', 'A mí también.', 'A mí no.'],
            ['No me gusta el pescado.', 'A mí tampoco.', 'A mí sí.'],
          ],
        },
      ),
    ],
    test: [
      match('¿Qué respuesta? (Usted opina lo mismo)', [
        ['Me encanta la paella.', 'A mí también.'],
        ['No me gustan los dulces.', 'A mí tampoco.'],
      ]),
      match('¿Qué respuesta? (Usted opina lo contrario)', [
        ['Me gusta el café.', 'A mí no.'],
        ['No me gusta el pescado frito.', 'A mí sí.'],
      ]),
    ],
  },

  // ------------------------------------------------ Gramática A1
  {
    kind: 'GRAMMAR',
    title: 'el agua fría',
    ref: [G, 1, 1],
    learn: [
      grammar(
        'el, la, un, una',
        'El artículo determinado (el, la, los, las) señala algo conocido; el indeterminado (un, una, unos, unas) introduce algo nuevo.',
      ),
      tip(
        'el agua es femenina',
        'Las palabras femeninas que empiezan por «a» acentuada llevan «el» en singular: el agua, el aula. Siguen siendo femeninas: «el agua fría», «las aguas frías».',
      ),
    ],
    test: [
      cloze('Complete.', '[El] agua está [fría]. [Las] aulas son nuevas.', ['La', 'frío', 'Los']),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'La terminación revela el género',
    ref: [G, 1, 2],
    learn: [
      grammar(
        'Terminaciones fiables',
        'Masculino: -o, -or, -aje. Femenino: -a, -ción, -sión, -dad, -tud. Excepciones frecuentes: el problema, el idioma, el día, el mapa; la mano, la foto, la moto, la radio. Las palabras en «-e» hay que aprenderlas con el artículo.',
      ),
    ],
    test: [
      match('¿el o la?', [
        ['canción', 'la'],
        ['ciudad', 'la'],
        ['problema', 'el'],
        ['mano', 'la'],
        ['viaje', 'el'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'El plural',
    ref: [G, 1, 3],
    learn: [
      grammar(
        'Dos reglas',
        'Vocal + «-s»; consonante + «-es». La «-z» final se convierte en «-c»: el lápiz, los lápices. El acento escrito se mueve: avión → aviones, joven → jóvenes.',
        {
          headers: ['Singular', 'Plural'],
          rows: [
            ['la casa', 'las casas'],
            ['la ciudad', 'las ciudades'],
            ['la vez', 'las veces'],
            ['la canción', 'las canciones'],
            ['el examen', 'los exámenes'],
          ],
        },
      ),
    ],
    test: [
      match('Singular y plural', [
        ['el profesor', 'los profesores'],
        ['el lápiz', 'los lápices'],
        ['el avión', 'los aviones'],
        ['el joven', 'los jóvenes'],
        ['el lunes', 'los lunes'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'quiero, puedo, pido',
    ref: [G, 3, 2],
    learn: [
      grammar(
        'Verbos con cambio de vocal',
        'La vocal solo cambia cuando lleva el acento: en todas las formas menos nosotros y vosotros. e → ie (querer, pensar), o → ue (poder, dormir), e → i (pedir, repetir). Único: jugar → juego.',
        {
          headers: ['', 'querer', 'poder', 'pedir'],
          rows: [
            ['yo', 'quiero', 'puedo', 'pido'],
            ['tú', 'quieres', 'puedes', 'pides'],
            ['nosotros', 'queremos', 'podemos', 'pedimos'],
            ['ellos', 'quieren', 'pueden', 'piden'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Complete.',
        '¿[Puedes] venir mañana? Yo [quiero] un café. Nosotros [pedimos] la cuenta. Mi hijo [duerme] mucho.',
        ['podemos', 'pido'],
      ),
    ],
  },
]);
