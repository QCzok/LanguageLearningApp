import type { UnitSeed } from './chapter-beginner-1';

/**
 * Spanisch, Advanced, Kapitel 11: „Debate y mediación“
 *
 * Fünf Seiten. Nach dem Überzeugen (Kapitel 7) das Gegenteil: nicht Partei
 * ergreifen. Wer moderiert oder vermittelt, braucht eine Sprache, die
 * steuert, ohne zu werten – und die ist schwerer, als sie aussieht, weil
 * fast jedes Redeeinleitungsverb schon eine Haltung verrät.
 *
 * Aufbau: Seite 1 die Rolle der Moderation und ihr Wortschatz, Seite 2 das
 * Verteilen und Begrenzen von Redezeit, Seite 3 die neutrale
 * Zusammenfassung, Seite 4 die Vermittlung zwischen Positionen und
 * Interessen, Seite 5 Zuspitzung, Abschluss und ein neutrales Protokoll.
 *
 * Die Debatten und Personen sind erfunden. Sämtliche Texte sind
 * eigenständig verfasst.
 */
const v = 1;

export const SPANISH_ADVANCED_11_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – die Rolle der Moderation.
  {
    order: 1,
    title: 'El papel de quien modera',
    subtitle: 'Moderieren heißt steuern, nicht mitreden',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'esa11-p1-h1', type: 'HEADING', level: 1, text: 'El papel de quien modera' },
        {
          id: 'esa11-p1-intro',
          type: 'TEXT',
          text: 'Un buen moderador apenas se nota. No gana el debate ni lo pierde: lo hace posible. Abre y cierra, reparte el tiempo, devuelve la conversación al tema cuando se desvía y resume para que el público no se pierda. Todo ello exige una habilidad lingüística particular: intervenir con firmeza sin tomar partido.',
        },
        {
          id: 'esa11-p1-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: el debate',
          items: [
            { term: 'el moderador, la moderadora', translations: { en: 'moderator', de: 'der Moderator, die Moderatorin' } },
            { term: 'el / la ponente', translations: { en: 'speaker, panellist', de: 'der Referent, die Referentin' } },
            { term: 'el turno de palabra', translations: { en: 'turn to speak', de: 'die Wortmeldung, das Rederecht' } },
            { term: 'dar / ceder la palabra', translations: { en: 'to give the floor', de: 'das Wort erteilen / überlassen' } },
            { term: 'la réplica', translations: { en: 'reply, rebuttal', de: 'die Erwiderung' } },
            { term: 'la contrarréplica', translations: { en: 'counter-reply', de: 'die Gegenerwiderung' } },
            { term: 'ceñirse al tema', translations: { en: 'to stick to the topic', de: 'beim Thema bleiben' } },
            { term: 'recapitular', translations: { en: 'to recap', de: 'zusammenfassen' } },
            { term: 'el consenso', translations: { en: 'consensus', de: 'der Konsens' } },
            { term: 'la discrepancia', translations: { en: 'disagreement', de: 'die Meinungsverschiedenheit' } },
            { term: 'imparcial', translations: { en: 'impartial', de: 'unparteiisch' } },
            { term: 'acalorado', translations: { en: 'heated', de: 'hitzig' }, example: 'un debate acalorado' },
          ],
        },
        {
          id: 'esa11-p1-info-funciones',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Las cinco funciones del moderador',
          text: 'Cada función tiene sus fórmulas. Todas comparten un rasgo gramatical: el moderador habla en primera persona del plural inclusiva («vamos a», «pasemos a») o en impersonal («se ha planteado»), y reserva el «yo» para las decisiones de procedimiento («les voy a pedir que…»).',
          table: {
            headers: ['Función', 'Fórmula'],
            rows: [
              ['abrir', 'Bienvenidos. Hoy vamos a debatir sobre…'],
              ['dar la palabra', 'Tiene la palabra la señora Ibáñez.'],
              ['reconducir', 'Volvamos, si les parece, a la cuestión inicial.'],
              ['recapitular', 'Hasta ahora se han planteado dos posturas…'],
              ['cerrar', 'Con esto damos por concluido el debate.'],
            ],
          },
        },
        {
          id: 'esa11-p1-match',
          type: 'MATCHING',
          instruction: 'Relacione cada intervención con la función que cumple.',
          left: [
            { id: 'a1', text: 'Señor Vidal, le recuerdo que hablamos del transporte, no de la sanidad.' },
            { id: 'a2', text: 'Para empezar, cada ponente dispondrá de tres minutos.' },
            { id: 'a3', text: 'Resumiendo: ambos están de acuerdo en el diagnóstico, pero no en la solución.' },
            { id: 'a4', text: 'Doctora Paz, tiene usted la palabra.' },
          ],
          right: [
            { id: 'b1', text: 'reconducir' },
            { id: 'b2', text: 'abrir y fijar reglas' },
            { id: 'b3', text: 'recapitular' },
            { id: 'b4', text: 'dar la palabra' },
          ],
          solution: [
            { leftId: 'a1', rightId: 'b1' },
            { leftId: 'a2', rightId: 'b2' },
            { leftId: 'a3', rightId: 'b3' },
            { leftId: 'a4', rightId: 'b4' },
          ],
        },
        {
          id: 'esa11-p1-choice',
          type: 'CHOICE',
          instruction: 'Elija la intervención imparcial.',
          question: 'Un ponente acaba de exponer su postura sobre la subida del precio del agua. ¿Qué intervención mantiene la imparcialidad?',
          options: [
            { id: 'c1', text: 'Muy interesante y muy acertado. Veamos qué le puede responder la señora Ruiz.' },
            { id: 'c2', text: 'Gracias. Señora Ruiz, ¿cuál es su postura sobre la subida?' },
            { id: 'c3', text: 'Bueno, eso es discutible. Señora Ruiz, seguro que usted lo ve de otra manera.' },
            { id: 'c4', text: 'Gracias. Señora Ruiz, ¿no le parece exagerado lo que acaba de oír?' },
          ],
          multiple: false,
          solution: ['c2'],
          explanation:
            'La segunda intervención agradece y pasa el turno con una pregunta abierta. Las demás valoran lo dicho («acertado», «discutible») o formulan una pregunta que sugiere la respuesta («¿no le parece exagerado?»).',
        },
        {
          id: 'esa11-p1-cloze',
          type: 'CLOZE',
          instruction: 'Complete la apertura del debate.',
          wordBank: ['Bienvenidos', 'ponentes', 'turno', 'réplica', 'ceñirse'],
          caseSensitive: false,
          segments: [
            { kind: 'GAP', gapId: 'g1', solution: ['Bienvenidos'], width: 12 },
            { kind: 'TEXT', text: ' a este debate sobre la reforma del horario escolar. Nos acompañan tres ' },
            { kind: 'GAP', gapId: 'g2', solution: ['ponentes'], width: 9 },
            { kind: 'TEXT', text: '. Cada uno tendrá un primer ' },
            { kind: 'GAP', gapId: 'g3', solution: ['turno'], width: 6 },
            { kind: 'TEXT', text: ' de tres minutos y después un minuto de ' },
            { kind: 'GAP', gapId: 'g4', solution: ['réplica', 'replica'], width: 8 },
            { kind: 'TEXT', text: '. Les pido a todos ' },
            { kind: 'GAP', gapId: 'g5', solution: ['ceñirse'], width: 8 },
            { kind: 'TEXT', text: ' al tema y respetar los tiempos.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – Redezeit verteilen, unterbrechen, begrenzen.
  {
    order: 2,
    title: 'Gestionar los turnos',
    subtitle: 'Unterbrechen, ohne unhöflich zu sein',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'esa11-p2-h1', type: 'HEADING', level: 1, text: 'Gestionar los turnos' },
        {
          id: 'esa11-p2-intro',
          type: 'TEXT',
          text: 'El momento más delicado de una moderación es la interrupción. Un ponente se excede en su tiempo, otro le corta, un tercero se desvía del tema. El moderador tiene que intervenir, y hacerlo con una firmeza que no parezca hostilidad. La clave está en la atenuación: pedir permiso para interrumpir, reconocer el valor de lo dicho y justificar la interrupción por las reglas, no por el contenido.',
        },
        {
          id: 'esa11-p2-info-interrumpir',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Interrumpir con cortesía',
          text: 'Las fórmulas de la tabla van de la más suave a la más firme. Casi todas usan el subjuntivo o el condicional para atenuar: «permítame que le interrumpa», «le rogaría que fuera concluyendo». El gerundio con «ir» («vaya terminando») indica que se pide cerrar poco a poco, no de golpe.',
          table: {
            headers: ['Grado', 'Fórmula'],
            rows: [
              ['aviso', 'Le queda un minuto.'],
              ['sugerencia', 'Si le parece, vaya concluyendo.'],
              ['petición', 'Le rogaría que fuera terminando.'],
              ['interrupción', 'Permítame que le interrumpa: se nos acaba el tiempo.'],
              ['firme', 'Lo siento, debo cortarle aquí. Tiene la palabra el señor Pardo.'],
            ],
          },
        },
        {
          id: 'esa11-p2-dialogue',
          type: 'DIALOGUE',
          title: 'Un turno que se alarga',
          lines: [
            { speaker: 'Ponente', text: '…y por eso, además de lo que ya he dicho, hay que tener en cuenta también el tema de los comedores, que es otra cuestión que…' },
            { speaker: 'Moderadora', text: 'Perdone que le interrumpa, señor Gil. Es un asunto importante, pero le rogaría que fuera concluyendo, porque ya ha superado su tiempo.' },
            { speaker: 'Ponente', text: 'Solo una frase más.' },
            { speaker: 'Moderadora', text: 'Una frase, se la concedo.' },
            { speaker: 'Ponente', text: 'Sin comedores, el nuevo horario no funciona.' },
            { speaker: 'Moderadora', text: 'Gracias. Tomamos nota para el turno de réplicas. Señora Alonso, tiene la palabra.' },
          ],
        },
        {
          id: 'esa11-p2-choice',
          type: 'CHOICE',
          instruction: 'Elija la intervención más adecuada.',
          question: 'Dos ponentes hablan a la vez y el público no entiende a ninguno. ¿Qué dice el moderador?',
          options: [
            { id: 'r1', text: '¡Silencio, por favor! Así no hay quien se entienda.' },
            { id: 'r2', text: 'Les ruego que respeten los turnos. Termine usted, señora Soto, y enseguida le doy la palabra al señor Mena.' },
            { id: 'r3', text: 'Señor Mena, deje hablar a la señora Soto, que tiene razón.' },
            { id: 'r4', text: 'Bueno, que hablen los dos, a ver qué sale.' },
          ],
          multiple: false,
          solution: ['r2'],
          explanation:
            'La segunda opción apela a la regla común, asigna el turno y garantiza al otro que hablará después. La primera es brusca, la tercera toma partido («tiene razón») y la cuarta renuncia a moderar.',
        },
        {
          id: 'esa11-p2-cloze',
          type: 'CLOZE',
          instruction: 'Complete las intervenciones del moderador.',
          wordBank: ['interrumpa', 'fuera', 'Volvamos', 'palabra'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Permítame que le ' },
            { kind: 'GAP', gapId: 't1', solution: ['interrumpa'], width: 11 },
            { kind: 'TEXT', text: ', señora Díaz. Le rogaría que ' },
            { kind: 'GAP', gapId: 't2', solution: ['fuera', 'fuese'], width: 6 },
            { kind: 'TEXT', text: ' terminando. ' },
            { kind: 'GAP', gapId: 't3', solution: ['Volvamos'], width: 9 },
            { kind: 'TEXT', text: ', si les parece, a la cuestión del horario. Tiene la ' },
            { kind: 'GAP', gapId: 't4', solution: ['palabra'], width: 8 },
            { kind: 'TEXT', text: ' el señor Ortiz.' },
          ],
        },
        {
          id: 'esa11-p2-ordering',
          type: 'ORDERING',
          instruction: 'Ordene las intervenciones de la más suave a la más firme.',
          items: [
            { id: 'o1', text: 'Le queda un minuto.' },
            { id: 'o2', text: 'Si le parece, vaya concluyendo.' },
            { id: 'o3', text: 'Le rogaría que fuera terminando.' },
            { id: 'o4', text: 'Lo siento, debo cortarle aquí.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4'],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – die neutrale Zusammenfassung.
  {
    order: 3,
    title: 'Resumir sin tomar partido',
    subtitle: 'Neutral zusammenfassen',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'esa11-p3-h1', type: 'HEADING', level: 1, text: 'Resumir sin tomar partido' },
        {
          id: 'esa11-p3-intro',
          type: 'TEXT',
          text: 'Resumir parece fácil hasta que se intenta con dos posturas enfrentadas. Cada decisión de quien resume —qué incluye, en qué orden, con qué verbo— puede favorecer a una de ellas. Un resumen neutral no es un resumen sin opinión, sino uno en el que ambas partes se reconocen.',
        },
        {
          id: 'esa11-p3-info-neutral',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Las trampas del resumen',
          text: 'Cuatro elementos delatan una parcialidad involuntaria. El verbo de referencia («admite», «insiste», «pretende» valoran; «sostiene», «propone», «considera» no). El orden: lo último que se dice pesa más, porque parece la respuesta. La extensión: dedicar tres frases a una postura y una a la otra ya es tomar partido. Y los adjetivos: «un argumento sólido» frente a «un argumento».',
          table: {
            headers: ['Parcial', 'Neutral'],
            rows: [
              ['La señora Ruiz insiste en que…', 'La señora Ruiz sostiene que…'],
              ['El señor Gil admite que…', 'El señor Gil señala que…'],
              ['X propone una solución interesante.', 'X propone una solución.'],
              ['Aunque X dice A, Y demuestra B.', 'X defiende A; Y, por su parte, defiende B.'],
            ],
          },
        },
        {
          id: 'esa11-p3-choice',
          type: 'CHOICE',
          instruction: 'Elija el resumen más neutral.',
          question: 'Debate sobre un parque eólico. ¿Qué resumen respeta a ambas partes?',
          options: [
            {
              id: 'q1',
              text: 'El alcalde defiende que el parque traerá empleo; los vecinos, sin embargo, se empeñan en hablar del ruido.',
            },
            {
              id: 'q2',
              text: 'El alcalde sostiene que el parque traerá empleo e ingresos; los vecinos, por su parte, señalan el impacto del ruido y del paisaje. Ambos coinciden en que el pueblo necesita inversión.',
            },
            {
              id: 'q3',
              text: 'Los vecinos plantean dudas sobre el ruido, pero el alcalde demuestra que el parque traerá empleo.',
            },
            { id: 'q4', text: 'Como siempre, unos quieren progreso y otros no quieren cambios.' },
          ],
          multiple: false,
          solution: ['q2'],
          explanation:
            'La segunda opción usa verbos neutros, da a cada parte una extensión parecida y añade el punto de acuerdo. La primera descalifica a los vecinos («se empeñan»); la tercera da la última palabra, con un verbo de aval, al alcalde; la cuarta caricaturiza a ambos.',
        },
        {
          id: 'esa11-p3-match',
          type: 'MATCHING',
          instruction: 'Relacione cada verbo valorativo con un equivalente neutral.',
          left: [
            { id: 'v1', text: 'se empeña en' },
            { id: 'v2', text: 'pretende' },
            { id: 'v3', text: 'reconoce (a su pesar)' },
            { id: 'v4', text: 'se queja de' },
          ],
          right: [
            { id: 'w1', text: 'insiste en / defiende' },
            { id: 'w2', text: 'afirma' },
            { id: 'w3', text: 'señala' },
            { id: 'w4', text: 'critica / cuestiona' },
          ],
          solution: [
            { leftId: 'v1', rightId: 'w1' },
            { leftId: 'v2', rightId: 'w2' },
            { leftId: 'v3', rightId: 'w3' },
            { leftId: 'v4', rightId: 'w4' },
          ],
        },
        {
          id: 'esa11-p3-info-estilo',
          type: 'INFO',
          variant: 'TIP',
          title: 'Estilo indirecto y simetría',
          text: 'Los resúmenes se escriben casi siempre en estilo indirecto, con los cambios de tiempo verbal que exige un verbo introductor en pasado: «dijo que el proyecto sería rentable». La simetría sintáctica —«X sostiene que…; Y, por su parte, considera que…»— hace visible la igualdad de trato. «Por su parte», «a su vez» y «en cambio» articulan las posturas sin jerarquizarlas.',
        },
        {
          id: 'esa11-p3-cloze',
          type: 'CLOZE',
          instruction: 'Complete el resumen con los elementos neutrales.',
          wordBank: ['sostuvo', 'por su parte', 'consideró', 'coincidieron'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'La directora ' },
            { kind: 'GAP', gapId: 'n1', solution: ['sostuvo', 'afirmó', 'afirmo'], width: 8 },
            { kind: 'TEXT', text: ' que el nuevo horario mejoraría el rendimiento. Los representantes de las familias, ' },
            { kind: 'GAP', gapId: 'n2', solution: ['por su parte'], width: 13 },
            { kind: 'TEXT', text: ', señalaron las dificultades para conciliar. El sindicato ' },
            { kind: 'GAP', gapId: 'n3', solution: ['consideró', 'considero'], width: 10 },
            { kind: 'TEXT', text: ' necesario un periodo de prueba. Todos ' },
            { kind: 'GAP', gapId: 'n4', solution: ['coincidieron'], width: 13 },
            { kind: 'TEXT', text: ' en la necesidad de evaluar los resultados.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – vermitteln: von Positionen zu Interessen.
  {
    order: 4,
    title: 'Mediar',
    subtitle: 'Zwischen Positionen vermitteln',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'esa11-p4-h1', type: 'HEADING', level: 1, text: 'Mediar' },
        {
          id: 'esa11-p4-intro',
          type: 'TEXT',
          text: 'Moderar es ordenar un debate; mediar es ayudar a que dos partes lleguen a un acuerdo. La técnica central de la mediación consiste en pasar de las posiciones —lo que cada parte dice que quiere— a los intereses —por qué lo quiere—. Dos vecinos que discuten por un árbol («hay que talarlo» / «no se toca») pueden querer lo mismo: uno, luz en su terraza; el otro, sombra en verano. Una poda resuelve ambas cosas.',
        },
        {
          id: 'esa11-p4-info-tecnicas',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Técnicas lingüísticas de la mediación',
          text: 'La reformulación devuelve a cada parte lo que ha dicho, sin carga emocional, para comprobar que se ha entendido: «Si lo entiendo bien, lo que a usted le preocupa es…». La pregunta por el interés busca el motivo: «¿Qué es lo que más le importa de…?». La normalización quita dramatismo: «Es habitual que en estos casos…». Y la búsqueda de lo común resalta el acuerdo: «Ambos coinciden en que…».',
          table: {
            headers: ['Técnica', 'Fórmula'],
            rows: [
              ['reformular', 'Si le he entendido bien, lo que usted necesita es…'],
              ['preguntar por el interés', '¿Qué es exactamente lo que le preocupa de…?'],
              ['normalizar', 'Es comprensible que en esta situación…'],
              ['buscar lo común', 'Por lo que oigo, ambos quieren…'],
              ['abrir opciones', '¿Qué pasaría si…? / ¿Se podría plantear que…?'],
            ],
          },
        },
        {
          id: 'esa11-p4-match',
          type: 'MATCHING',
          instruction: 'Relacione cada posición con el interés que puede esconder.',
          left: [
            { id: 'p1', text: '«Quiero que el vecino quite la barbacoa de la terraza.»' },
            { id: 'p2', text: '«No pienso trabajar más los sábados.»' },
            { id: 'p3', text: '«Exijo que me cambien de departamento.»' },
            { id: 'p4', text: '«No quiero que mi hijo vaya a ese instituto.»' },
          ],
          right: [
            { id: 'q1', text: 'no soportar el humo cuando tiende la ropa' },
            { id: 'q2', text: 'poder pasar tiempo con su familia' },
            { id: 'q3', text: 'no seguir trabajando con un jefe con el que ha tenido un conflicto' },
            { id: 'q4', text: 'que el niño no tenga que hacer un trayecto largo solo' },
          ],
          solution: [
            { leftId: 'p1', rightId: 'q1' },
            { leftId: 'p2', rightId: 'q2' },
            { leftId: 'p3', rightId: 'q3' },
            { leftId: 'p4', rightId: 'q4' },
          ],
        },
        {
          id: 'esa11-p4-choice',
          type: 'CHOICE',
          instruction: 'Elija la reformulación más adecuada.',
          question: 'Una vecina dice, muy enfadada: «¡Es que el del quinto es un maleducado! Pone la música a todo volumen hasta las dos de la mañana y no hay quien duerma». ¿Qué reformulación usaría un mediador?',
          options: [
            { id: 'm1', text: 'Tiene usted toda la razón, es un maleducado.' },
            { id: 'm2', text: 'Bueno, tampoco será para tanto.' },
            {
              id: 'm3',
              text: 'Si la entiendo bien, lo que usted necesita es poder descansar por la noche, y la música a esas horas se lo impide.',
            },
            { id: 'm4', text: 'Eso lo tendría que haber hablado antes con él.' },
          ],
          multiple: false,
          solution: ['m3'],
          explanation:
            'La tercera respuesta elimina el insulto, conserva el hecho y lo traduce a un interés («descansar») sobre el que se puede negociar. La primera toma partido, la segunda minimiza y la cuarta reprocha.',
        },
        {
          id: 'esa11-p4-cloze',
          type: 'CLOZE',
          instruction: 'Complete la intervención de la mediadora.',
          wordBank: ['entiendo', 'coinciden', 'preocupa', 'pasaría'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Si lo ' },
            { kind: 'GAP', gapId: 'k1', solution: ['entiendo'], width: 9 },
            { kind: 'TEXT', text: ' bien, a usted le ' },
            { kind: 'GAP', gapId: 'k2', solution: ['preocupa'], width: 9 },
            { kind: 'TEXT', text: ' sobre todo el ruido de noche, y a usted, poder celebrar de vez en cuando con sus amigos. Veo que ambos ' },
            { kind: 'GAP', gapId: 'k3', solution: ['coinciden'], width: 10 },
            { kind: 'TEXT', text: ' en querer mantener una buena relación. ¿Qué ' },
            { kind: 'GAP', gapId: 'k4', solution: ['pasaría'], width: 8 },
            { kind: 'TEXT', text: ' si fijaran juntos un horario para los fines de semana?' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – Zuspitzung, Abschluss, Protokoll.
  {
    order: 5,
    title: 'Conflicto y cierre',
    subtitle: 'Eskalation auffangen und abschließen',
    estimatedMinutes: 34,
    content: {
      version: v,
      blocks: [
        { id: 'esa11-p5-h1', type: 'HEADING', level: 1, text: 'Conflicto y cierre' },
        {
          id: 'esa11-p5-intro',
          type: 'TEXT',
          text: 'Todo debate puede descarrilar: un ataque personal, una acusación, una voz que sube. El moderador no puede evitarlo, pero sí reconducirlo. Y al final tiene que cerrar de manera que cada parte sienta que ha sido escuchada, aunque no haya ganado. Muchas veces ese cierre se fija después por escrito, en un acta.',
        },
        {
          id: 'esa11-p5-info-escalada',
          type: 'INFO',
          variant: 'TIP',
          title: 'Desactivar una escalada',
          text: 'Ante un ataque personal, se separa a la persona del argumento: «Centrémonos en la propuesta, no en quien la hace». Ante una acusación, se pide concreción: «¿Podría concretar a qué dato se refiere?». Ante el tono, se nombra la emoción sin juzgarla: «Entiendo que es un tema que le toca de cerca». Y si nada funciona, se hace una pausa.',
          table: {
            headers: ['Situación', 'Respuesta'],
            rows: [
              ['ataque personal', 'Centrémonos en la propuesta, no en quien la hace.'],
              ['acusación vaga', '¿Podría concretar a qué se refiere?'],
              ['emoción desbordada', 'Entiendo que el tema le afecta directamente.'],
              ['bloqueo', 'Propongo una pausa de cinco minutos.'],
            ],
          },
        },
        {
          id: 'esa11-p5-choice',
          type: 'CHOICE',
          instruction: 'Elija la mejor reacción.',
          question: 'En un debate, un ponente dice al otro: «Usted no tiene ni idea, nunca ha pisado un aula». ¿Qué dice la moderadora?',
          options: [
            { id: 'e1', text: 'Tiene razón, eso resta credibilidad al señor Moya.' },
            { id: 'e2', text: 'Les pido que nos centremos en las propuestas, no en la trayectoria de cada uno. Señor Moya, ¿quiere responder al argumento sobre las ratios?' },
            { id: 'e3', text: '¡Por favor, un poco de educación, que esto no es un bar!' },
            { id: 'e4', text: 'Sigamos con el siguiente punto del orden del día.' },
          ],
          multiple: false,
          solution: ['e2'],
          explanation:
            'La segunda reacción separa la persona del argumento y devuelve la palabra al atacado para que responda al fondo del asunto. La primera toma partido, la tercera reprocha con otra descalificación y la cuarta ignora el incidente.',
        },
        {
          id: 'esa11-p5-cloze',
          type: 'CLOZE',
          instruction: 'Complete el resumen del capítulo.',
          wordBank: ['imparcial', 'interrumpa', 'sostiene', 'intereses', 'reformular', 'concluido'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'El moderador debe ser ' },
            { kind: 'GAP', gapId: 'z1', solution: ['imparcial'], width: 10 },
            { kind: 'TEXT', text: '. Para cortar a alguien, se atenúa: «permítame que le ' },
            { kind: 'GAP', gapId: 'z2', solution: ['interrumpa'], width: 11 },
            { kind: 'TEXT', text: '». En un resumen neutral se dice que alguien ' },
            { kind: 'GAP', gapId: 'z3', solution: ['sostiene'], width: 9 },
            { kind: 'TEXT', text: ', no que «pretende». La mediación pasa de las posiciones a los ' },
            { kind: 'GAP', gapId: 'z4', solution: ['intereses'], width: 10 },
            { kind: 'TEXT', text: '. Antes de responder, conviene ' },
            { kind: 'GAP', gapId: 'z5', solution: ['reformular'], width: 11 },
            { kind: 'TEXT', text: ' lo que ha dicho el otro. Y el debate se cierra dándolo por ' },
            { kind: 'GAP', gapId: 'z6', solution: ['concluido'], width: 10 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'esa11-p5-writing',
          type: 'WRITING',
          instruction: 'Redacte un acta neutral.',
          prompt:
            'Ha moderado una reunión de vecinos sobre si instalar cámaras de vigilancia en el portal. La presidenta de la comunidad (a favor) mencionó dos robos recientes; un vecino (en contra) habló de privacidad y del coste; una vecina propuso mejorar la cerradura y la iluminación antes de decidir. Hubo un momento tenso cuando el vecino acusó a la presidenta de querer vigilar a la gente. Redacte el acta de la reunión (entre 180 y 250 palabras) en estilo indirecto, con verbos de referencia neutrales, simetría entre las posturas, mención de los puntos de acuerdo y del acuerdo final.',
          minWords: 180,
          maxWords: 260,
          aiFeedback: true,
          sampleAnswer:
            'ACTA DE LA REUNIÓN DE LA COMUNIDAD DE PROPIETARIOS\nCalle Almendro, 12 – 14 de octubre, 19:00 h\n\nAsistentes: catorce vecinos. Modera: Carmen Ferrer.\n\nÚnico punto del orden del día: posible instalación de cámaras de vigilancia en el portal.\n\nLa presidenta de la comunidad, doña Rosa Lara, expuso que en los últimos tres meses se han producido dos robos en los trasteros y propuso instalar dos cámaras en el portal y en el acceso al sótano. Señaló que el coste aproximado sería de 1.200 euros.\n\nDon Luis Prieto, por su parte, manifestó su oposición a la propuesta. Consideró que las cámaras afectarían a la privacidad de los vecinos y de sus visitas, y que su coste no está justificado por dos incidentes.\n\nDoña Elena Sanz planteó una tercera opción: sustituir la cerradura del sótano y mejorar la iluminación antes de tomar una decisión sobre las cámaras.\n\nDurante el debate se produjo un momento de tensión, que la moderadora recondujo pidiendo que la discusión se centrara en las propuestas.\n\nLos asistentes coincidieron en que la seguridad de los trasteros es un problema que debe resolverse y en que cualquier medida debe respetar la normativa de protección de datos.\n\nSe acordó por mayoría cambiar la cerradura y reforzar la iluminación, y volver a estudiar la instalación de cámaras dentro de seis meses si se repitieran los incidentes.\n\nSin más asuntos que tratar, se levanta la sesión a las 20:15 h.',
        },
      ],
    },
  },
];
