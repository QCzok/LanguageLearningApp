import type { UnitSeed } from './chapter-beginner-1';

/**
 * Spanisch, Intermediate, Kapitel 3: „Medios y redes“ (B1, Kapitel 3)
 *
 * Fünf Seiten. Nachrichten verstehen, zusammenfassen und weitergeben.
 *
 * Aufbau: Seite 1 liest eine Meldung und zerlegt sie in die fünf W-Fragen,
 * Seite 2 fasst sie zusammen (das ist schwerer als es klingt: weglassen, ohne
 * zu verfälschen), Seite 3 bringt die indirekte Rede, Seite 4 prüft die
 * Quelle, Seite 5 spricht über die eigene Mediennutzung.
 *
 * Zur Abgrenzung von Kapitel 12, das ebenfalls indirekte Rede behandelt: Hier
 * steht die Grundmechanik – Einleitung im Präsens (da verschiebt sich nichts),
 * Einleitung im Präteritum (Präsens wird Imperfekt, Perfekt wird
 * Plusquamperfekt), dazu Fragen und Aufforderungen. Die vollständige
 * Zeitentabelle, die Deiktika und die wertenden Redeeinleitungen bleiben
 * Kapitel 12 vorbehalten. Wer beides in einem Kapitel unterbringt, bringt
 * keines unter.
 *
 * Die Seiten stehen einsprachig spanisch; die Wortschatzlisten führen
 * deutsche und englische Entsprechungen. Alle Meldungen, Medien und Personen
 * sind erfunden.
 *
 * Sämtliche Texte sind eigenständig verfasst.
 */
const v = 1;

export const SPANISH_INTERMEDIATE_3_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – eine Meldung lesen.
  {
    order: 1,
    title: 'Leer una noticia',
    subtitle: 'Qué, quién, cuándo, dónde, por qué',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'esi3-p1-h1', type: 'HEADING', level: 1, text: 'Leer una noticia' },
        {
          id: 'esi3-p1-intro',
          type: 'TEXT',
          text: 'Una noticia bien escrita responde en el primer párrafo a cinco preguntas: qué ha pasado, quién, cuándo, dónde y por qué. El resto del texto añade detalles en orden de importancia, de manera que se puede dejar de leer en cualquier punto sin perder lo esencial. Si usted busca esas cinco respuestas, entiende cualquier noticia aunque haya palabras que se le escapen.',
        },
        {
          id: 'esi3-p1-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: la prensa',
          items: [
            {
              term: 'la noticia',
              translations: { en: 'news item', de: 'die Nachricht, die Meldung' },
            },
            {
              term: 'el titular',
              translations: { en: 'headline', de: 'die Schlagzeile' },
            },
            {
              term: 'la entradilla',
              translations: { en: 'lead paragraph', de: 'der Vorspann' },
            },
            {
              term: 'el medio (de comunicación)',
              translations: { en: 'news outlet', de: 'das Medium' },
            },
            {
              term: 'la fuente',
              translations: { en: 'source', de: 'die Quelle' },
              example: 'Según fuentes municipales…',
            },
            {
              term: 'el periodista',
              translations: { en: 'journalist', de: 'der Journalist, die Journalistin' },
            },
            {
              term: 'la portada',
              translations: { en: 'front page', de: 'die Titelseite' },
            },
            {
              term: 'el reportaje',
              translations: { en: 'feature, report', de: 'die Reportage' },
            },
            {
              term: 'la entrevista',
              translations: { en: 'interview', de: 'das Interview' },
            },
            {
              term: 'el bulo',
              translations: { en: 'hoax, fake news', de: 'die Falschmeldung' },
              example: 'Se difundió un bulo por WhatsApp.',
            },
            {
              term: 'difundir',
              translations: { en: 'to spread', de: 'verbreiten' },
            },
            {
              term: 'desmentir',
              translations: { en: 'to deny, to refute', de: 'dementieren' },
              example: 'El ayuntamiento desmintió la cifra.',
            },
            {
              term: 'el titular engañoso',
              translations: { en: 'misleading headline', de: 'die irreführende Schlagzeile' },
            },
          ],
        },
        {
          id: 'esi3-p1-noticia',
          type: 'TEXT',
          text: 'EL FARO DE PONIENTE — 14 de marzo\n\nEl tren nocturno entre Valencia y Gijón volverá a circular en junio\n\nEl servicio, suprimido en 2019 por falta de viajeros, se recuperará el próximo 15 de junio con tres frecuencias semanales. Así lo anunció ayer la consejera de Transportes, Elena Vidal, durante la presentación del plan ferroviario en la estación de Zamora.\n\nVidal explicó que la decisión responde a la demanda de los ayuntamientos de la línea, que llevaban cuatro años reclamándolo. El coste anual será de 4,2 millones de euros, financiados a partes iguales por el ministerio y las tres comunidades afectadas.\n\nLa asociación de usuarios Tren Sí celebró el anuncio, aunque pidió que las frecuencias sean diarias a partir de 2027. Desde la empresa ferroviaria se indicó que ese aumento dependerá de la ocupación del primer año.',
        },
        {
          id: 'esi3-p1-match-w',
          type: 'MATCHING',
          instruction: 'Relacione cada pregunta con la respuesta que da la noticia.',
          left: [
            { id: 'l1', text: '¿Qué ha pasado?' },
            { id: 'l2', text: '¿Quién lo ha anunciado?' },
            { id: 'l3', text: '¿Cuándo empieza?' },
            { id: 'l4', text: '¿Por qué se recupera?' },
          ],
          right: [
            { id: 'r1', text: 'Vuelve el tren nocturno entre Valencia y Gijón.' },
            { id: 'r2', text: 'La consejera de Transportes, Elena Vidal.' },
            { id: 'r3', text: 'El 15 de junio, con tres frecuencias por semana.' },
            { id: 'r4', text: 'Por la demanda de los ayuntamientos de la línea.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'esi3-p1-choice-detalle',
          type: 'CHOICE',
          instruction: 'Lea la noticia con atención y elija.',
          question: '¿Qué dice la noticia sobre las frecuencias diarias?',
          options: [
            { id: 'a1', text: 'Que habrá frecuencias diarias a partir de 2027.' },
            {
              id: 'a2',
              text: 'Que una asociación de usuarios las ha pedido y que dependerán de la ocupación.',
            },
            { id: 'a3', text: 'Que la empresa ferroviaria las ha descartado.' },
            { id: 'a4', text: 'Que el ministerio ya las ha financiado.' },
          ],
          multiple: false,
          solution: ['a2'],
          explanation:
            'La noticia distingue con cuidado entre lo que alguien pide y lo que está decidido. Tren Sí lo pidió; la empresa dijo que dependerá de la ocupación. Leer a1 en ese párrafo es el error más común al resumir.',
        },
        {
          id: 'esi3-p1-info-estructura',
          type: 'INFO',
          variant: 'TIP',
          title: 'La pirámide invertida',
          text: 'La noticia va de lo más importante a lo menos. Esa forma tiene una consecuencia práctica para quien aprende: si una noticia se le resiste, lea solo el titular y el primer párrafo, que contienen lo esencial escrito con las palabras más sencillas de todo el texto.',
          table: {
            headers: ['Parte', 'Qué contiene'],
            rows: [
              ['titular', 'el hecho, en una línea'],
              ['entradilla', 'las cinco preguntas'],
              ['cuerpo', 'detalles, cifras, contexto'],
              ['declaraciones', 'lo que dijeron los implicados'],
              ['final', 'lo que se puede cortar sin perder nada'],
            ],
          },
        },
        {
          id: 'esi3-p1-cloze',
          type: 'CLOZE',
          instruction: 'Complete el titular y la entradilla.',
          wordBank: ['según', 'anunció', 'fuentes', 'medio', 'desmintió'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'El ayuntamiento ' },
            { kind: 'GAP', gapId: 'c1', solution: ['anunció'], width: 9 },
            { kind: 'TEXT', text: ' ayer la peatonalización de la plaza. ' },
            { kind: 'GAP', gapId: 'c2', solution: ['según'], width: 7 },
            { kind: 'TEXT', text: ' el concejal de Urbanismo, las obras empezarán en otoño. ' },
            { kind: 'GAP', gapId: 'c3', solution: ['Fuentes'], width: 8 },
            {
              kind: 'TEXT',
              text: ' municipales cifran el presupuesto en 900 000 euros. El mismo ',
            },
            { kind: 'GAP', gapId: 'c4', solution: ['medio'], width: 7 },
            {
              kind: 'TEXT',
              text: ' informó la semana pasada de una cifra mayor, que el consistorio ',
            },
            { kind: 'GAP', gapId: 'c5', solution: ['desmintió'], width: 10 },
            { kind: 'TEXT', text: ' el viernes.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – zusammenfassen.
  {
    order: 2,
    title: 'Resumir',
    subtitle: 'Quitar sin cambiar el sentido',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'esi3-p2-h1', type: 'HEADING', level: 1, text: 'Resumir' },
        {
          id: 'esi3-p2-intro',
          type: 'TEXT',
          text: 'Resumir no es escribir lo mismo más corto: es decidir qué sobra. Y ahí aparece el riesgo, porque al quitar palabras es muy fácil quitar también un matiz y convertir una petición en una decisión, o una cifra estimada en una cifra exacta. Un buen resumen dice menos y no dice nada que el original no diga.',
        },
        {
          id: 'esi3-p2-info-pasos',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Cuatro pasos',
          text: 'Siga este orden. El tercer paso es el que más cuesta y el que distingue un resumen de un recorte: hay que reformular con palabras propias, no copiar frases sueltas del original.',
          table: {
            headers: ['Paso', 'Qué hacer'],
            rows: [
              ['1', 'Localizar el hecho central: el titular en sus palabras.'],
              ['2', 'Anotar las cifras y los nombres que sí importan.'],
              ['3', 'Escribir dos o tres frases propias, sin copiar.'],
              ['4', 'Comprobar que no ha añadido nada que no estuviera.'],
            ],
          },
        },
        {
          id: 'esi3-p2-info-verbos',
          type: 'INFO',
          variant: 'TIP',
          title: 'Verbos para resumir',
          text: 'Estos verbos sitúan cada información en su sitio y evitan que todo suene igual de seguro. Fíjese en la diferencia entre «anunciar» (está decidido) y «proponer» o «pedir» (todavía no).',
          table: {
            headers: ['Verbo', 'Qué indica'],
            rows: [
              ['anunciar', 'está decidido y se comunica'],
              ['proponer', 'se plantea, falta aprobarlo'],
              ['pedir / reclamar', 'lo quiere alguien que no decide'],
              ['confirmar', 'se ratifica algo ya sabido'],
              ['desmentir', 'se niega algo publicado antes'],
              ['advertir de', 'se avisa de un riesgo'],
            ],
          },
        },
        {
          id: 'esi3-p2-choice-resumen',
          type: 'CHOICE',
          instruction:
            'Vuelva a la noticia del tren de la página anterior y elija el mejor resumen.',
          options: [
            {
              id: 'b1',
              text: 'El tren nocturno Valencia-Gijón volverá el 15 de junio con tres frecuencias semanales, según anunció la consejera de Transportes. Costará 4,2 millones al año y una asociación de usuarios ha pedido que sea diario desde 2027.',
            },
            {
              id: 'b2',
              text: 'Vuelve el tren nocturno Valencia-Gijón. Será diario a partir de 2027 y costará 4,2 millones de euros al año.',
            },
            {
              id: 'b3',
              text: 'La consejera de Transportes, Elena Vidal, presentó ayer en la estación de Zamora el plan ferroviario durante un acto público.',
            },
            {
              id: 'b4',
              text: 'El tren nocturno entre Valencia y Gijón, que se suprimió en 2019 por falta de viajeros y que los ayuntamientos llevaban cuatro años reclamando, va a volver.',
            },
          ],
          multiple: false,
          solution: ['b1'],
          explanation:
            'b1 recoge el hecho, la fecha, la fuente y distingue lo decidido de lo pedido. b2 convierte una petición en un hecho; b3 resume el acto y no la noticia; b4 se queda en el contexto y no dice ni cuándo vuelve ni con qué frecuencia.',
        },
        {
          id: 'esi3-p2-noticia2',
          type: 'TEXT',
          text: 'Lea esta segunda noticia para el ejercicio siguiente:\n\n«La Universidad de Almería estudia adelantar una hora el inicio de las clases a partir del curso que viene. La medida, propuesta por el decanato de Ciencias, pretende aprovechar las primeras horas de la mañana en los meses de más calor. Un estudio interno, realizado con 600 estudiantes, indica que el 54 % se muestra a favor, aunque los representantes de alumnos advierten de que el cambio complicaría el transporte desde los pueblos. El rectorado decidirá en abril».',
        },
        {
          id: 'esi3-p2-cloze',
          type: 'CLOZE',
          instruction: 'Complete el resumen de la segunda noticia.',
          wordBank: ['estudia', 'propuesta', 'advierten', 'decidirá', 'a favor'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'La Universidad de Almería ' },
            { kind: 'GAP', gapId: 'c1', solution: ['estudia'], width: 8 },
            { kind: 'TEXT', text: ' empezar las clases una hora antes. La medida, ' },
            { kind: 'GAP', gapId: 'c2', solution: ['propuesta'], width: 10 },
            {
              kind: 'TEXT',
              text: ' por el decanato de Ciencias, cuenta con el apoyo del 54 % de los estudiantes encuestados, que se declaran ',
            },
            { kind: 'GAP', gapId: 'c3', solution: ['a favor'], width: 8 },
            { kind: 'TEXT', text: '. Sus representantes, en cambio, ' },
            { kind: 'GAP', gapId: 'c4', solution: ['advierten'], width: 10 },
            { kind: 'TEXT', text: ' de los problemas de transporte. El rectorado lo ' },
            { kind: 'GAP', gapId: 'c5', solution: ['decidirá'], width: 9 },
            { kind: 'TEXT', text: ' en abril.' },
          ],
        },
        {
          id: 'esi3-p2-choice-error',
          type: 'CHOICE',
          instruction: 'Elija la frase que NO se puede afirmar a partir de la segunda noticia.',
          options: [
            { id: 'c1', text: 'La mayoría de los estudiantes encuestados está a favor.' },
            { id: 'c2', text: 'La universidad va a adelantar las clases el curso que viene.' },
            { id: 'c3', text: 'Los representantes de alumnos ven un problema de transporte.' },
            { id: 'c4', text: 'La decisión final se tomará en abril.' },
          ],
          multiple: false,
          solution: ['c2'],
          explanation:
            'La universidad «estudia» la medida y el rectorado decide en abril: todavía no está aprobada. Convertir un «se estudia» en un «va a» es el error de resumen más frecuente y el más grave.',
        },
        {
          id: 'esi3-p2-writing',
          type: 'WRITING',
          instruction: 'Resuma una noticia.',
          prompt:
            'Busque una noticia que haya leído esta semana, en la lengua que sea, y resúmala en español en 60 a 100 palabras. Responda a las cinco preguntas, use al menos dos verbos del recuadro «Verbos para resumir» y distinga claramente lo que está decidido de lo que solo se ha pedido o propuesto. No añada su opinión.',
          minWords: 60,
          maxWords: 110,
          aiFeedback: true,
          sampleAnswer:
            'El ayuntamiento de mi ciudad anunció el lunes que peatonalizará la calle del mercado a partir de septiembre. La medida afectará a unos cuatrocientos metros y costará 1,2 millones de euros, financiados con fondos europeos.\n\nLa asociación de comerciantes pidió que las obras se hagan por tramos para no cerrar toda la calle a la vez, y advirtió de que el verano es su temporada alta. El concejal de Urbanismo confirmó que estudiarán esa petición, aunque no se comprometió a ninguna fecha concreta. La decisión definitiva se tomará en el pleno de julio.',
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – indirekte Rede, Grundmechanik.
  {
    order: 3,
    title: 'Contar lo que han dicho',
    subtitle: 'El estilo indirecto',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'esi3-p3-h1', type: 'HEADING', level: 1, text: 'Contar lo que han dicho' },
        {
          id: 'esi3-p3-intro',
          type: 'TEXT',
          text: 'Una noticia es, en buena parte, gente que dice cosas. Para contarlo hay dos maneras: repetir las palabras exactas entre comillas o incorporarlas a la propia frase. Lo segundo es el estilo indirecto, y tiene una sola dificultad: si el verbo que introduce está en pasado, los tiempos de dentro se mueven.',
        },
        {
          id: 'esi3-p3-info-presente',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Si el verbo introductor está en presente, no cambia nada',
          text: 'Este es el caso fácil y el más frecuente en una conversación. Solo hay que cambiar la persona y, si hace falta, el posesivo.',
          table: {
            headers: ['Palabras exactas', 'Estilo indirecto'],
            rows: [
              ['«Estoy cansada.»', 'Dice que está cansada.'],
              ['«Vendré el lunes.»', 'Dice que vendrá el lunes.'],
              ['«He perdido mi móvil.»', 'Dice que ha perdido su móvil.'],
              ['«No me gusta.»', 'Dice que no le gusta.'],
            ],
          },
        },
        {
          id: 'esi3-p3-info-pasado',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Si el verbo introductor está en pasado, los tiempos retroceden',
          text: 'Cada tiempo baja un escalón. El imperfecto y el pluscuamperfecto ya no bajan más: son el último escalón y se quedan igual.',
          table: {
            headers: ['Palabras exactas', 'Dijo que…'],
            rows: [
              ['presente: «Trabajo aquí»', 'imperfecto: trabajaba allí'],
              ['pret. perfecto: «He terminado»', 'plusc.: había terminado'],
              ['indefinido: «Llegué tarde»', 'plusc.: había llegado tarde'],
              ['futuro: «Iré»', 'condicional: iría'],
              ['imperfecto: «Trabajaba allí»', 'imperfecto: trabajaba allí'],
            ],
          },
        },
        {
          id: 'esi3-p3-cloze-pasado',
          type: 'CLOZE',
          instruction: 'Pase a estilo indirecto. El verbo introductor está en pasado.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '«Vivo en Almería.» → Dijo que ' },
            { kind: 'GAP', gapId: 'c1', solution: ['vivía'], hint: 'vivir', width: 8 },
            { kind: 'TEXT', text: ' en Almería.\n«He hablado con el director.» → Contó que ' },
            { kind: 'GAP', gapId: 'c2', solution: ['había hablado'], hint: 'hablar', width: 14 },
            { kind: 'TEXT', text: ' con el director.\n«Te llamaré mañana.» → Prometió que me ' },
            { kind: 'GAP', gapId: 'c3', solution: ['llamaría'], hint: 'llamar', width: 10 },
            { kind: 'TEXT', text: ' al día siguiente.\n«Empecé en enero.» → Explicó que ' },
            { kind: 'GAP', gapId: 'c4', solution: ['había empezado'], hint: 'empezar', width: 15 },
            { kind: 'TEXT', text: ' en enero.\n«Estaba muy cansado.» → Dijo que ' },
            { kind: 'GAP', gapId: 'c5', solution: ['estaba'], hint: 'estar', width: 8 },
            { kind: 'TEXT', text: ' muy cansado.' },
          ],
        },
        {
          id: 'esi3-p3-info-preguntas',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Preguntas y peticiones',
          text: 'Una pregunta sin partícula interrogativa se introduce con «si»; una pregunta con «qué», «dónde» o «cuándo» conserva esa palabra, con su tilde. Y una orden o una petición pasa a subjuntivo, con lo que aquí se juntan este capítulo y el anterior.',
          table: {
            headers: ['Tipo', 'Palabras exactas', 'Estilo indirecto'],
            rows: [
              ['pregunta sí/no', '«¿Vienes?»', 'Me preguntó si iba.'],
              ['pregunta abierta', '«¿Dónde vives?»', 'Me preguntó dónde vivía.'],
              ['orden', '«Llámame.»', 'Me pidió que le llamara.'],
              ['orden (introductor presente)', '«Llámame.»', 'Me pide que le llame.'],
            ],
          },
        },
        {
          id: 'esi3-p3-info-peticion-pasado',
          type: 'INFO',
          variant: 'TIP',
          title: 'La petición contada en pasado',
          text: 'Habrá notado una forma nueva: «me pidió que le llamara». Ese es el imperfecto de subjuntivo, y lo estudiará entero en el capítulo 9; por ahora basta con reconocerlo al leerlo. Mientras tanto, si quiere contar una petición pasada y no está seguro de la forma, tiene dos salidas perfectamente correctas que ya domina.',
          table: {
            headers: ['Salida', 'Ejemplo'],
            rows: [
              ['decir que + tener que', 'Me dijo que tenía que apagar la calefacción.'],
              ['decir que + deber', 'Me dijo que debía llamar antes del jueves.'],
              ['pasar el introductor al presente', 'Me pide que le llame antes del jueves.'],
              ['(forma plena, capítulo 9)', 'Me pidió que le llamara antes del jueves.'],
            ],
          },
        },
        {
          id: 'esi3-p3-choice-pregunta',
          type: 'CHOICE',
          instruction: 'Elija la frase correcta.',
          question: 'La periodista preguntó: «¿Cuándo empiezan las obras?»',
          options: [
            { id: 'd1', text: 'La periodista preguntó cuándo empezaban las obras.' },
            { id: 'd2', text: 'La periodista preguntó que cuando empiezan las obras.' },
            { id: 'd3', text: 'La periodista preguntó si cuándo empezaban las obras.' },
            { id: 'd4', text: 'La periodista preguntó cuándo empiezan las obras.' },
          ],
          multiple: false,
          solution: ['d1'],
          explanation:
            'La palabra interrogativa se conserva con tilde y el presente pasa a imperfecto porque el introductor está en pasado. «Si» solo se usa cuando la pregunta original no llevaba palabra interrogativa.',
        },
        {
          id: 'esi3-p3-dialogo',
          type: 'DIALOGUE',
          title: 'Lo que dijo el técnico',
          audioUrl: 'placeholder://es-b1-indirecto',
          lines: [
            {
              speaker: 'Ana',
              text: '¿Ha venido el técnico? Llevo toda la mañana fuera.',
            },
            {
              speaker: 'Luis',
              text: 'Sí, vino a las diez. Dijo que la caldera estaba bien pero que el termostato no funcionaba.',
            },
            {
              speaker: 'Ana',
              text: '¿Y lo arregló?',
            },
            {
              speaker: 'Luis',
              text: 'No. Explicó que no tenía la pieza y que volvería el jueves. Me preguntó si estaríamos en casa por la tarde.',
            },
            {
              speaker: 'Ana',
              text: '¿Y qué le dijiste?',
            },
            {
              speaker: 'Luis',
              text: 'Que sí. Ah, y me pidió que apagáramos la calefacción hasta entonces.',
            },
            {
              speaker: 'Ana',
              text: 'Pues qué bien, con el frío que hace.',
            },
          ],
        },
        {
          id: 'esi3-p3-match-original',
          type: 'MATCHING',
          instruction: 'Relacione cada frase del diálogo con las palabras exactas del técnico.',
          left: [
            { id: 'p1', text: 'Dijo que la caldera estaba bien.' },
            { id: 'p2', text: 'Explicó que no tenía la pieza.' },
            { id: 'p3', text: 'Me preguntó si estaríamos en casa.' },
            { id: 'p4', text: 'Me pidió que apagáramos la calefacción.' },
          ],
          right: [
            { id: 'q1', text: '«La caldera está bien.»' },
            { id: 'q2', text: '«No tengo la pieza.»' },
            { id: 'q3', text: '«¿Estarán en casa por la tarde?»' },
            { id: 'q4', text: '«Apaguen la calefacción.»' },
          ],
          solution: [
            { leftId: 'p1', rightId: 'q1' },
            { leftId: 'p2', rightId: 'q2' },
            { leftId: 'p3', rightId: 'q3' },
            { leftId: 'p4', rightId: 'q4' },
          ],
        },
        {
          id: 'esi3-p3-writing',
          type: 'WRITING',
          instruction: 'Cuente una conversación.',
          prompt:
            'Alguien le dio la semana pasada una información importante: un médico, un profesor, un funcionario o un amigo. Cuéntelo en 70 a 110 palabras en estilo indirecto, con el verbo introductor en pasado. Incluya al menos una afirmación, una pregunta que le hicieron y una petición; para la petición puede usar cualquiera de las salidas del recuadro («me dijo que tenía que…»), que aquí valen igual que la forma del capítulo 9. Use tres verbos introductores distintos.',
          minWords: 70,
          maxWords: 120,
          aiFeedback: true,
          sampleAnswer:
            'El martes fui a la oficina de extranjería y me atendió una funcionaria muy amable. Me explicó que mi solicitud estaba completa, pero que faltaba el certificado de empadronamiento actualizado, porque el mío era de hacía más de tres meses.\n\nMe preguntó si había cambiado de domicilio en ese tiempo y le dije que no. Entonces me dijo que tenía que pedir el certificado nuevo por internet y que debía subirlo a la sede electrónica antes del día 30.\n\nTambién me advirtió de que en abril tardarían más en resolver, porque el sistema estaría en mantenimiento dos semanas.',
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – Quellen prüfen.
  {
    order: 4,
    title: 'Comprobar una fuente',
    subtitle: 'Antes de reenviar',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'esi3-p4-h1', type: 'HEADING', level: 1, text: 'Comprobar una fuente' },
        {
          id: 'esi3-p4-intro',
          type: 'TEXT',
          text: 'Un bulo no se reconoce porque sea absurdo. Los que funcionan son verosímiles, tocan algo que nos preocupa y llegan por alguien de confianza. Por eso no sirve de mucho «tener sentido común»: hay que comprobar cuatro cosas concretas, y eso se hace en un minuto.',
        },
        {
          id: 'esi3-p4-info-comprobar',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Cuatro comprobaciones',
          text: 'Hágalas en este orden. La primera descarta la mitad de los bulos que circulan, porque muchísimos son noticias verdaderas de hace años que vuelven a difundirse como si fueran de hoy.',
          table: {
            headers: ['Compruebe', 'Pregunta'],
            rows: [
              ['la fecha', '¿De cuándo es? ¿Sigue siendo válido?'],
              ['el medio', '¿Quién lo publica? ¿Existe esa web?'],
              ['la fuente citada', '¿Dice quién lo afirma o solo «expertos»?'],
              ['otros medios', '¿Lo cuenta alguien más, o solo esa página?'],
            ],
          },
        },
        {
          id: 'esi3-p4-mensajes',
          type: 'TEXT',
          text: 'Tres mensajes reenviados por un grupo de vecinos. Léalos antes de hacer los ejercicios.\n\nA) «URGENTE: a partir del lunes el agua del barrio no será potable durante 3 días. Pásalo a todos tus contactos».\n\nB) «El ayuntamiento informa: el 14 de marzo se corta el agua entre las 9.00 y las 14.00 en las calles Mayor y Olivo por obras en la red. Comunicado en la web municipal, sección Avisos».\n\nC) «Según varios expertos, el agua del grifo de esta ciudad contiene el triple de cal que hace diez años y provoca problemas de salud».',
        },
        {
          id: 'esi3-p4-choice-mensajes',
          type: 'CHOICE',
          instruction: 'Lea los tres mensajes y elija.',
          question: '¿Cuál de los tres se puede comprobar sin salir del propio mensaje?',
          options: [
            { id: 'e1', text: 'El mensaje A' },
            { id: 'e2', text: 'El mensaje B' },
            { id: 'e3', text: 'El mensaje C' },
            { id: 'e4', text: 'Ninguno de los tres' },
          ],
          multiple: false,
          solution: ['e2'],
          explanation:
            'B dice quién informa, qué día, a qué horas, en qué calles y dónde está publicado: todo eso se puede verificar. A no dice quién lo afirma y pide difusión urgente, dos señales clásicas. C se escuda en «varios expertos», que no es una fuente.',
        },
        {
          id: 'esi3-p4-info-senales',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Señales de alarma',
          text: 'Ninguna de estas señales demuestra por sí sola que algo sea falso, pero cuando aparecen dos o tres juntas conviene no reenviar nada hasta haber comprobado.',
          table: {
            headers: ['Señal', 'Por qué'],
            rows: [
              [
                '«Pásalo a todos tus contactos»',
                'una noticia real no necesita que la difunda usted',
              ],
              ['mayúsculas y «URGENTE»', 'busca la reacción rápida, no la lectura'],
              ['«según varios expertos»', 'fuente sin nombre: no se puede comprobar'],
              ['sin fecha', 'impide saber si sigue vigente'],
              ['indigna mucho y muy rápido', 'la emoción fuerte es justo lo que busca'],
            ],
          },
        },
        {
          id: 'esi3-p4-match-senales',
          type: 'MATCHING',
          instruction: 'Relacione cada fragmento con el problema que tiene.',
          left: [
            { id: 'f1', text: '«Fuentes cercanas al caso aseguran que…»' },
            { id: 'f2', text: '«Reenvía este mensaje antes de que lo borren.»' },
            { id: 'f3', text: 'Una foto real de una inundación de 2018 compartida hoy.' },
            { id: 'f4', text: '«Un estudio demuestra que…» sin decir cuál.' },
          ],
          right: [
            { id: 'g1', text: 'Fuente anónima: no se puede verificar.' },
            { id: 'g2', text: 'Apela a la urgencia para que nadie compruebe nada.' },
            { id: 'g3', text: 'Contenido auténtico fuera de su fecha y su contexto.' },
            { id: 'g4', text: 'Cita un estudio sin permitir llegar hasta él.' },
          ],
          solution: [
            { leftId: 'f1', rightId: 'g1' },
            { leftId: 'f2', rightId: 'g2' },
            { leftId: 'f3', rightId: 'g3' },
            { leftId: 'f4', rightId: 'g4' },
          ],
        },
        {
          id: 'esi3-p4-cloze',
          type: 'CLOZE',
          instruction: 'Complete el mensaje con el que usted responde al grupo de vecinos.',
          wordBank: ['fuente', 'fecha', 'comprobado', 'bulo', 'reenviar'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Hola a todos: antes de ' },
            { kind: 'GAP', gapId: 'c1', solution: ['reenviar'], width: 9 },
            { kind: 'TEXT', text: ' el primer mensaje, lo he ' },
            { kind: 'GAP', gapId: 'c2', solution: ['comprobado'], width: 11 },
            {
              kind: 'TEXT',
              text: ' en la web del ayuntamiento y no aparece nada. El aviso real lleva ',
            },
            { kind: 'GAP', gapId: 'c3', solution: ['fecha'], width: 7 },
            {
              kind: 'TEXT',
              text: ' y dice otra cosa: son cinco horas, no tres días. El mensaje que circula no cita ninguna ',
            },
            { kind: 'GAP', gapId: 'c4', solution: ['fuente'], width: 7 },
            { kind: 'TEXT', text: ', así que parece un ' },
            { kind: 'GAP', gapId: 'c5', solution: ['bulo'], width: 6 },
            { kind: 'TEXT', text: '. Os paso el enlace oficial.' },
          ],
        },
        {
          id: 'esi3-p4-writing',
          type: 'WRITING',
          instruction: 'Responda a un bulo.',
          prompt:
            'En un grupo de familia alguien reenvía el mensaje A de esta página. Escriba una respuesta de 60 a 100 palabras: explique qué ha comprobado usted y qué ha encontrado, señale dos señales de alarma del mensaje y proponga qué hacer la próxima vez. Sea educado: el objetivo es que no se reenvíe, no dejar a nadie en ridículo.',
          minWords: 60,
          maxWords: 110,
          aiFeedback: true,
          sampleAnswer:
            'Hola, tía. He mirado la web del ayuntamiento y también el periódico local, y no hay nada sobre el agua. Lo único que aparece es un corte de cinco horas el día 14 en dos calles.\n\nEl mensaje me da mala espina por dos cosas: no dice quién lo manda y pide que lo pasemos a todos los contactos. Las avisos de verdad no necesitan eso, porque salen en la web municipal.\n\nNo pasa nada, a mí también me han colado alguno. Si os llega otro parecido, me lo mandáis y lo miro antes de que se líe.',
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – über die eigene Mediennutzung sprechen.
  {
    order: 5,
    title: 'Mi vida en la pantalla',
    subtitle: 'Hablar del propio consumo',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'esi3-p5-h1', type: 'HEADING', level: 1, text: 'Mi vida en la pantalla' },
        {
          id: 'esi3-p5-intro',
          type: 'TEXT',
          text: 'La última página del capítulo sale de la prensa y entra en el teléfono. Se trata de contar cuánto tiempo pasa usted delante de una pantalla, qué hace en ella y qué le gustaría cambiar. El vocabulario es nuevo; la gramática, no: aquí vuelven el subjuntivo del capítulo 2 y las perífrasis del capítulo 1.',
        },
        {
          id: 'esi3-p5-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: redes y pantallas',
          items: [
            {
              term: 'la red social',
              translations: { en: 'social network', de: 'das soziale Netzwerk' },
            },
            {
              term: 'la pantalla',
              translations: { en: 'screen', de: 'der Bildschirm' },
            },
            {
              term: 'publicar / subir',
              translations: { en: 'to post / to upload', de: 'posten / hochladen' },
              example: 'Subió una foto del viaje.',
            },
            {
              term: 'seguir a alguien',
              translations: { en: 'to follow someone', de: 'jemandem folgen' },
            },
            {
              term: 'el seguidor',
              translations: { en: 'follower', de: 'der Follower' },
            },
            {
              term: 'silenciar',
              translations: { en: 'to mute', de: 'stummschalten' },
              example: 'He silenciado el grupo del bloque.',
            },
            {
              term: 'engancharse a',
              translations: { en: 'to get hooked on', de: 'hängenbleiben an' },
              example: 'Me engancho a los vídeos cortos.',
            },
            {
              term: 'desconectar',
              translations: { en: 'to switch off, to unplug', de: 'abschalten' },
            },
            {
              term: 'el tiempo de uso',
              translations: { en: 'screen time', de: 'die Bildschirmzeit' },
            },
            {
              term: 'la notificación',
              translations: { en: 'notification', de: 'die Benachrichtigung' },
            },
            {
              term: 'perder el tiempo',
              translations: { en: 'to waste time', de: 'Zeit verschwenden' },
            },
            {
              term: 'estar al día',
              translations: { en: 'to keep up to date', de: 'auf dem Laufenden sein' },
            },
          ],
        },
        {
          id: 'esi3-p5-info-frecuencia',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Decir cada cuánto',
          text: 'Para hablar de costumbres hacen falta las expresiones de frecuencia. Ojo con dos detalles: «todos los días» lleva artículo, y «cada día» no; y «de vez en cuando» es invariable, no se dice «de vez en cuándo».',
          table: {
            headers: ['Frecuencia', 'Expresiones'],
            rows: [
              ['siempre', 'todo el rato, constantemente'],
              ['mucho', 'todos los días, varias veces al día'],
              ['normal', 'a menudo, suelo + infinitivo'],
              ['poco', 'de vez en cuando, alguna que otra vez'],
              ['nunca', 'casi nunca, no… nunca'],
              ['duración', 'llevo dos horas + gerundio'],
            ],
          },
        },
        {
          id: 'esi3-p5-dialogo',
          type: 'DIALOGUE',
          title: 'Dos horas y cuarenta minutos',
          audioUrl: 'placeholder://es-b1-pantallas',
          lines: [
            {
              speaker: 'Nico',
              text: 'Mira lo que me ha dicho el móvil: dos horas y cuarenta minutos de media al día. Y eso sin contar el trabajo.',
            },
            {
              speaker: 'Elsa',
              text: 'No está tan mal. Yo el mes pasado iba por cuatro. Lo que pasa es que me enganchaba a los vídeos cortos por la noche.',
            },
            {
              speaker: 'Nico',
              text: '¿Y cómo lo has bajado?',
            },
            {
              speaker: 'Elsa',
              text: 'Quité las notificaciones de todo menos de los mensajes. Es increíble la de veces que miraba el móvil sin que hubiera nada.',
            },
            {
              speaker: 'Nico',
              text: 'Yo eso no lo aguanto, necesito estar al día.',
            },
            {
              speaker: 'Elsa',
              text: 'Ya, pero estar al día de qué, exactamente. Te aconsejo que lo pruebes una semana. Si no te gusta, lo vuelves a poner y ya está.',
            },
          ],
        },
        {
          id: 'esi3-p5-choice-dialogo',
          type: 'CHOICE',
          instruction: 'Lea el diálogo y elija.',
          question: '¿Qué hizo Elsa para reducir su tiempo de uso?',
          options: [
            { id: 'h1', text: 'Borró todas las aplicaciones de su móvil.' },
            { id: 'h2', text: 'Desactivó las notificaciones excepto las de los mensajes.' },
            { id: 'h3', text: 'Dejó el móvil en otra habitación por la noche.' },
            { id: 'h4', text: 'Se puso un límite de dos horas al día.' },
          ],
          multiple: false,
          solution: ['h2'],
          explanation:
            'Elsa dice que quitó las notificaciones de todo menos de los mensajes, y explica por qué: miraba el móvil muchas veces sin que hubiera nada que ver.',
        },
        {
          id: 'esi3-p5-cloze',
          type: 'CLOZE',
          instruction: 'Complete con las expresiones de frecuencia y las perífrasis.',
          wordBank: ['suelo', 'llevo', 'de vez en cuando', 'todos los días', 'casi nunca'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Miro el móvil ' },
            { kind: 'GAP', gapId: 'c1', solution: ['todos los días'], width: 15 },
            { kind: 'TEXT', text: ' nada más levantarme. ' },
            { kind: 'GAP', gapId: 'c2', solution: ['Suelo'], width: 7 },
            { kind: 'TEXT', text: ' leer las noticias en el autobús, y ' },
            { kind: 'GAP', gapId: 'c3', solution: ['de vez en cuando'], width: 17 },
            { kind: 'TEXT', text: ' publico alguna foto. En cambio, ' },
            { kind: 'GAP', gapId: 'c4', solution: ['casi nunca'], width: 11 },
            { kind: 'TEXT', text: ' escribo comentarios. ' },
            { kind: 'GAP', gapId: 'c5', solution: ['Llevo'], width: 7 },
            { kind: 'TEXT', text: ' dos meses sin entrar en una red que antes miraba a diario.' },
          ],
        },
        {
          id: 'esi3-p5-ordering',
          type: 'ORDERING',
          instruction: 'Ordene la intervención para que suene natural.',
          items: [
            { id: 'o1', text: 'Yo antes pasaba unas cuatro horas al día con el móvil.' },
            {
              id: 'o2',
              text: 'Lo peor era por la noche: me enganchaba a los vídeos y se me iba una hora.',
            },
            { id: 'o3', text: 'Hace dos meses quité casi todas las notificaciones.' },
            { id: 'o4', text: 'Ahora suelo estar por debajo de dos horas y duermo mejor.' },
            { id: 'o5', text: 'Os aconsejo que lo probéis una semana, no se pierde nada.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5'],
        },
        {
          id: 'esi3-p5-writing',
          type: 'WRITING',
          instruction: 'Hable de su propio uso.',
          prompt:
            'Escriba de 100 a 150 palabras sobre su relación con las pantallas: cuánto tiempo pasa, qué hace, qué le aporta y qué le molesta. Termine con algo que quiera cambiar. Use al menos tres expresiones de frecuencia, una perífrasis con «llevar» o «soler», y un deseo con subjuntivo del capítulo anterior.',
          minWords: 100,
          maxWords: 160,
          aiFeedback: true,
          sampleAnswer:
            'Paso bastante más tiempo del que me gustaría delante de una pantalla. Entre el trabajo y el móvil, todos los días son siete u ocho horas, y eso se nota en los ojos y en el sueño.\n\nLo que sí me aporta son dos cosas: el grupo de mensajes con mi familia, que vive lejos, y un par de páginas de noticias que suelo leer por la mañana para estar al día. Lo demás es costumbre. De vez en cuando abro una red social sin ningún motivo y salgo veinte minutos después sin acordarme de por qué entré.\n\nLlevo un mes intentando dejar el móvil fuera del dormitorio y funciona a medias. Espero que este año consiga bajar de dos horas al día fuera del trabajo, aunque no me hago muchas ilusiones.',
        },
      ],
    },
  },
];
