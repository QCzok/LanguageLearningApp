import type { UnitSeed } from './chapter-beginner-1';

/**
 * Spanisch, Advanced, Kapitel 2: „Derecho y administración“
 *
 * Fünf Seiten. Die Sprache der Ämter ist die erste, an der auch
 * Muttersprachler scheitern – nicht wegen schwerer Wörter, sondern wegen
 * einer Syntax, die den Handelnden versteckt und alles in Substantive
 * packt. Das Kapitel zerlegt sie, statt sie nachzuahmen.
 *
 * Aufbau: Seite 1 beschreibt die Merkmale des Verwaltungsstils, Seite 2
 * liest einen Bescheid (resolución) Teil für Teil, Seite 3 schreibt die
 * Gegenrichtung – den Widerspruch (recurso) mit EXPONE/SOLICITA. Seite 4
 * geht an Vertragsklauseln und ihre Bedingungssätze, Seite 5 bündelt das
 * und lässt einen eigenen Widerspruch schreiben.
 *
 * Die Beispiele orientieren sich am spanischen Verwaltungsverfahren, weil es
 * das am besten dokumentierte ist; wo Lateinamerika andere Begriffe hat,
 * steht das dabei. Sämtliche Texte sind eigenständig verfasst, die Behörden
 * und Aktenzeichen erfunden.
 */
const v = 1;

export const SPANISH_ADVANCED_2_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – was den Verwaltungsstil ausmacht.
  {
    order: 1,
    title: 'La lengua de la administración',
    subtitle: 'Merkmale des Verwaltungsstils',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'esa2-p1-h1', type: 'HEADING', level: 1, text: 'La lengua de la administración' },
        {
          id: 'esa2-p1-intro',
          type: 'TEXT',
          text: 'Quien ha recibido alguna vez una carta de Hacienda sabe que se puede entender cada palabra de un texto y no saber qué hay que hacer. El lenguaje administrativo no es otro idioma: usa el mismo vocabulario que cualquier periódico. Lo que lo vuelve opaco es la manera de combinarlo. Aprender a leerlo consiste, sobre todo, en saber deshacer esas combinaciones.',
        },
        {
          id: 'esa2-p1-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: trámites y expedientes',
          items: [
            {
              term: 'el trámite',
              translations: { en: 'procedure, formality', de: 'der Behördengang, das Verfahren' },
              example: 'El trámite puede hacerse en línea.',
            },
            {
              term: 'la solicitud',
              translations: { en: 'application', de: 'der Antrag' },
              example: 'Presentó la solicitud fuera de plazo.',
            },
            {
              term: 'el expediente',
              translations: { en: 'file, case', de: 'die Akte, der Vorgang' },
              example: 'Indique el número de expediente en toda comunicación.',
            },
            {
              term: 'la resolución',
              translations: { en: 'decision, ruling', de: 'der Bescheid' },
            },
            {
              term: 'el plazo',
              translations: { en: 'deadline, time limit', de: 'die Frist' },
              example: 'El plazo vence el día 30.',
            },
            {
              term: 'el recurso',
              translations: { en: 'appeal', de: 'der Widerspruch, das Rechtsmittel' },
            },
            {
              term: 'interponer (un recurso)',
              translations: { en: 'to lodge (an appeal)', de: '(Widerspruch) einlegen' },
            },
            {
              term: 'subsanar',
              translations: { en: 'to remedy, to correct', de: 'beheben, nachbessern' },
              example: 'Dispone de diez días para subsanar la falta.',
            },
            {
              term: 'la persona interesada',
              translations: { en: 'the party concerned', de: 'die/der Beteiligte' },
            },
            {
              term: 'desestimar',
              translations: { en: 'to reject, to dismiss', de: 'ablehnen, abweisen' },
            },
            {
              term: 'estimar',
              translations: { en: 'to uphold, to grant', de: 'stattgeben' },
            },
            {
              term: 'en virtud de',
              translations: { en: 'by virtue of, under', de: 'aufgrund, gemäß' },
              example: 'en virtud del artículo 12',
            },
          ],
        },
        {
          id: 'esa2-p1-info-rasgos',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Cuatro rasgos del estilo administrativo',
          text: 'El texto administrativo prefiere los sustantivos a los verbos («proceder a la devolución» en vez de «devolver»), oculta a quien actúa («se ha acordado», «queda denegada»), alarga los nexos («a los efectos de», «con motivo de») y fija fórmulas que se repiten sin variación. Ninguno de estos rasgos es un error; juntos producen frases correctas y difíciles.',
          table: {
            headers: ['Rasgo', 'Estilo administrativo', 'Dicho de forma llana'],
            rows: [
              ['nominalización', 'Se procederá a la devolución del importe.', 'Le devolveremos el dinero.'],
              ['agente oculto', 'Queda denegada la solicitud.', 'Hemos rechazado su solicitud.'],
              ['nexos largos', 'a los efectos de acreditar', 'para demostrar'],
              ['fórmula fija', 'Lo que se comunica para su conocimiento.', 'Se lo decimos para que lo sepa.'],
            ],
          },
        },
        {
          id: 'esa2-p1-match',
          type: 'MATCHING',
          instruction: 'Relacione cada expresión administrativa con su equivalente llano.',
          left: [
            { id: 'a1', text: 'efectuar el abono' },
            { id: 'a2', text: 'proceder a la subsanación' },
            { id: 'a3', text: 'con carácter previo a' },
            { id: 'a4', text: 'dar traslado del escrito' },
            { id: 'a5', text: 'a los efectos oportunos' },
          ],
          right: [
            { id: 'b1', text: 'pagar' },
            { id: 'b2', text: 'corregir el error' },
            { id: 'b3', text: 'antes de' },
            { id: 'b4', text: 'enviar el documento a otra parte' },
            { id: 'b5', text: 'para lo que haga falta' },
          ],
          solution: [
            { leftId: 'a1', rightId: 'b1' },
            { leftId: 'a2', rightId: 'b2' },
            { leftId: 'a3', rightId: 'b3' },
            { leftId: 'a4', rightId: 'b4' },
            { leftId: 'a5', rightId: 'b5' },
          ],
        },
        {
          id: 'esa2-p1-info-lenguaje-claro',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'El movimiento por el lenguaje claro',
          text: 'Desde hace unos años, varias administraciones hispanas se han comprometido a escribir de forma comprensible. En Chile, Argentina, Colombia, México y España existen redes y guías de lenguaje claro, y algunos tribunales redactan ya sus sentencias con un resumen en lenguaje llano para la persona afectada. El principio es sencillo: un texto dirigido a la ciudadanía tiene que poder entenderse a la primera lectura.',
        },
        {
          id: 'esa2-p1-choice',
          type: 'CHOICE',
          instruction: 'Elija la reformulación más fiel y más clara.',
          question: '«Se pone en su conocimiento que la no aportación de la documentación requerida dará lugar al archivo del expediente.»',
          options: [
            { id: 'c1', text: 'Le informamos de que su expediente ya está archivado.' },
            { id: 'c2', text: 'Si no envía los documentos que le pedimos, cerraremos su expediente.' },
            { id: 'c3', text: 'Puede enviar los documentos cuando quiera; el expediente sigue abierto.' },
            { id: 'c4', text: 'Le pedimos que archive usted los documentos del expediente.' },
          ],
          multiple: false,
          solution: ['c2'],
          explanation:
            '«La no aportación» esconde una condición: si no aporta. «Dará lugar al archivo» anuncia una consecuencia futura, no un hecho consumado. Deshecha la nominalización, la frase es una advertencia con una condición.',
        },
        {
          id: 'esa2-p1-cloze',
          type: 'CLOZE',
          instruction: 'Complete el aviso con el término adecuado.',
          wordBank: ['solicitud', 'plazo', 'subsanar', 'expediente', 'recurso'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Su ' },
            { kind: 'GAP', gapId: 'g1', solution: ['solicitud'], width: 10 },
            { kind: 'TEXT', text: ' está incompleta. Dispone de un ' },
            { kind: 'GAP', gapId: 'g2', solution: ['plazo'], width: 7 },
            { kind: 'TEXT', text: ' de diez días hábiles para ' },
            { kind: 'GAP', gapId: 'g3', solution: ['subsanar'], width: 9 },
            { kind: 'TEXT', text: ' la falta. Indique el número de ' },
            { kind: 'GAP', gapId: 'g4', solution: ['expediente'], width: 11 },
            { kind: 'TEXT', text: ' en su respuesta. Contra la resolución final podrá interponer ' },
            { kind: 'GAP', gapId: 'g5', solution: ['recurso'], width: 8 },
            { kind: 'TEXT', text: '.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – einen Bescheid lesen: die feste Gliederung als Landkarte.
  {
    order: 2,
    title: 'Leer una resolución',
    subtitle: 'Einen Bescheid Teil für Teil verstehen',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'esa2-p2-h1', type: 'HEADING', level: 1, text: 'Leer una resolución' },
        {
          id: 'esa2-p2-intro',
          type: 'TEXT',
          text: 'Una resolución administrativa parece un bloque compacto, pero tiene una estructura fija, y conocerla permite leerla en el orden que interesa. Casi nadie necesita empezar por el principio: lo urgente está en la parte que dice qué se decide y en la que dice qué se puede hacer contra ello.',
        },
        {
          id: 'esa2-p2-info-partes',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Las partes de una resolución',
          text: 'El encabezamiento identifica al órgano y al expediente. Los antecedentes de hecho cuentan lo ocurrido, en orden cronológico. Los fundamentos de derecho citan las normas que se aplican. La parte dispositiva —la que empieza con «RESUELVE»— contiene la decisión. Al pie aparecen los recursos posibles, el órgano ante el que se presentan y el plazo. Es la única parte que obliga a actuar a quien la recibe.',
          table: {
            headers: ['Parte', 'Qué contiene', 'Pregunta que responde'],
            rows: [
              ['encabezamiento', 'órgano, número de expediente', '¿Quién escribe y sobre qué?'],
              ['antecedentes de hecho', 'lo que ha pasado', '¿Qué ha ocurrido?'],
              ['fundamentos de derecho', 'normas aplicadas', '¿Con qué base legal?'],
              ['parte dispositiva', 'RESUELVE: la decisión', '¿Qué se decide?'],
              ['pie de recurso', 'recurso, órgano, plazo', '¿Qué puedo hacer yo?'],
            ],
          },
        },
        {
          id: 'esa2-p2-text',
          type: 'TEXT',
          text: 'ANTECEDENTES DE HECHO. Primero. Con fecha 3 de marzo, doña Elena Ruiz Pardo presentó solicitud de ayuda para el alquiler de vivienda habitual. Segundo. Requerida para aportar el contrato de arrendamiento, la interesada no lo presentó en el plazo concedido.\nFUNDAMENTOS DE DERECHO. Único. Conforme al artículo 68 de la Ley 39/2015, si el interesado no subsana la falta en el plazo concedido, se le tendrá por desistido de su petición.\nRESUELVE: Tener por desistida a doña Elena Ruiz Pardo de su solicitud y archivar el expediente.\nContra la presente resolución, que no agota la vía administrativa, podrá interponerse recurso de alzada en el plazo de un mes a contar desde el día siguiente a su notificación.',
        },
        {
          id: 'esa2-p2-match',
          type: 'MATCHING',
          instruction: 'Relacione cada fragmento con la parte de la resolución a la que pertenece.',
          left: [
            { id: 'r1', text: 'La interesada no presentó el contrato en el plazo concedido.' },
            { id: 'r2', text: 'Conforme al artículo 68 de la Ley 39/2015…' },
            { id: 'r3', text: 'Tener por desistida a la interesada y archivar el expediente.' },
            { id: 'r4', text: 'Podrá interponerse recurso de alzada en el plazo de un mes.' },
          ],
          right: [
            { id: 's1', text: 'antecedentes de hecho' },
            { id: 's2', text: 'fundamentos de derecho' },
            { id: 's3', text: 'parte dispositiva' },
            { id: 's4', text: 'pie de recurso' },
          ],
          solution: [
            { leftId: 'r1', rightId: 's1' },
            { leftId: 'r2', rightId: 's2' },
            { leftId: 'r3', rightId: 's3' },
            { leftId: 'r4', rightId: 's4' },
          ],
        },
        {
          id: 'esa2-p2-choice',
          type: 'CHOICE',
          instruction: 'Elija la interpretación correcta.',
          question: '¿Qué significa para Elena Ruiz que se la «tenga por desistida»?',
          options: [
            { id: 'd1', text: 'Que ella misma ha retirado la solicitud por escrito.' },
            {
              id: 'd2',
              text: 'Que la administración trata la solicitud como si ella hubiera renunciado, porque no completó los documentos.',
            },
            { id: 'd3', text: 'Que la ayuda le ha sido concedida con condiciones.' },
            { id: 'd4', text: 'Que la decisión es definitiva y no admite recurso.' },
          ],
          multiple: false,
          solution: ['d2'],
          explanation:
            '«Tener por» es una ficción jurídica: la ley trata la falta de respuesta como una renuncia, aunque la persona no haya renunciado. Y el pie de recurso deja claro que la decisión sí puede recurrirse.',
        },
        {
          id: 'esa2-p2-info-plazos',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Cómo se cuentan los plazos',
          text: 'Las dos fórmulas más importantes del pie de recurso son también las más fáciles de malinterpretar. «Días hábiles» excluye los sábados, los domingos y los festivos; «días naturales», no excluye nada. Los plazos por meses van de fecha a fecha. Y el cómputo empieza «a contar desde el día siguiente» a la notificación: el día en que se recibe la carta no cuenta.',
          table: {
            headers: ['Fórmula', 'Qué significa'],
            rows: [
              ['diez días hábiles', 'diez días sin sábados, domingos ni festivos'],
              ['un mes', 'de la fecha de notificación a la misma fecha del mes siguiente'],
              ['desde el día siguiente', 'el día de la notificación no se cuenta'],
              ['agotar la vía administrativa', 'no quedar ya recurso ante la propia administración'],
            ],
          },
        },
        {
          id: 'esa2-p2-cloze',
          type: 'CLOZE',
          instruction: 'Complete la explicación con las palabras adecuadas.',
          wordBank: ['hábiles', 'siguiente', 'alzada', 'agota', 'dispositiva'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'La decisión está en la parte ' },
            { kind: 'GAP', gapId: 'p1', solution: ['dispositiva'], width: 12 },
            { kind: 'TEXT', text: '. Como la resolución no ' },
            { kind: 'GAP', gapId: 'p2', solution: ['agota'], width: 7 },
            { kind: 'TEXT', text: ' la vía administrativa, cabe recurso de ' },
            { kind: 'GAP', gapId: 'p3', solution: ['alzada'], width: 8 },
            { kind: 'TEXT', text: '. El plazo empieza a contar el día ' },
            { kind: 'GAP', gapId: 'p4', solution: ['siguiente'], width: 10 },
            { kind: 'TEXT', text: ' a la notificación. Si se habla de días ' },
            { kind: 'GAP', gapId: 'p5', solution: ['hábiles'], width: 9 },
            { kind: 'TEXT', text: ', los fines de semana no cuentan.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – die Gegenrichtung: selbst einen Widerspruch aufsetzen.
  {
    order: 3,
    title: 'Reclamar y recurrir',
    subtitle: 'Einen Widerspruch formulieren',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'esa2-p3-h1', type: 'HEADING', level: 1, text: 'Reclamar y recurrir' },
        {
          id: 'esa2-p3-intro',
          type: 'TEXT',
          text: 'Un recurso no se gana por la vehemencia, sino por el orden. El funcionario que lo lee tiene que encontrar en pocos segundos quién reclama, contra qué resolución, por qué motivo y qué pide exactamente. Por eso el escrito se organiza en dos bloques que llevan, literalmente, un verbo como título: EXPONE y SOLICITA.',
        },
        {
          id: 'esa2-p3-info-estructura',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'La estructura del escrito',
          text: 'El escrito empieza con los datos de quien lo firma, redactados en tercera persona: «Doña Elena Ruiz Pardo, con DNI…, con domicilio a efectos de notificaciones en…». Siguen los hechos y los motivos, numerados bajo EXPONE, cada uno introducido por «Que…». Bajo SOLICITA se escribe una sola petición concreta. Cierra el lugar, la fecha y la firma, y la dirección al órgano competente.',
          table: {
            headers: ['Bloque', 'Fórmula típica'],
            rows: [
              ['identificación', 'Doña Elena Ruiz Pardo, mayor de edad, con DNI…'],
              ['EXPONE', 'Primero. Que con fecha 3 de marzo presentó…'],
              ['EXPONE', 'Segundo. Que la notificación no llegó a su domicilio…'],
              ['SOLICITA', 'Que se admita el presente recurso y se revoque la resolución…'],
              ['cierre', 'En Zaragoza, a 12 de mayo. Fdo.:'],
            ],
          },
        },
        {
          id: 'esa2-p3-ordering',
          type: 'ORDERING',
          instruction: 'Ordene las partes del recurso.',
          items: [
            { id: 'o1', text: 'Doña Elena Ruiz Pardo, con DNI 12345678Z y domicilio en Zaragoza,' },
            { id: 'o2', text: 'EXPONE: Primero. Que con fecha 3 de marzo presentó solicitud de ayuda al alquiler.' },
            {
              id: 'o3',
              text: 'Segundo. Que el requerimiento de documentación nunca le fue notificado, como acredita el aviso de correos adjunto.',
            },
            {
              id: 'o4',
              text: 'SOLICITA: Que se revoque la resolución y se le conceda un nuevo plazo para aportar el contrato.',
            },
            { id: 'o5', text: 'En Zaragoza, a 12 de mayo. Fdo.: Elena Ruiz Pardo.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5'],
        },
        {
          id: 'esa2-p3-info-que',
          type: 'INFO',
          variant: 'TIP',
          title: '«Que…»: una oración subordinada sin verbo principal',
          text: 'Los apartados de EXPONE y SOLICITA empiezan con «Que» porque dependen del verbo del título: «[La interesada] expone que…», «solicita que…». De ahí se sigue el modo: tras EXPONE se cuentan hechos, en indicativo; tras SOLICITA se pide algo, y el verbo va en subjuntivo.',
          table: {
            headers: ['Bloque', 'Modo', 'Ejemplo'],
            rows: [
              ['EXPONE', 'indicativo', 'Que la notificación llegó el 20 de abril.'],
              ['SOLICITA', 'subjuntivo', 'Que se anule la sanción.'],
              ['SOLICITA', 'subjuntivo', 'Que se me conceda un nuevo plazo.'],
            ],
          },
        },
        {
          id: 'esa2-p3-cloze',
          type: 'CLOZE',
          instruction: 'Complete el recurso con la forma verbal adecuada.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'EXPONE: Que la multa se ' },
            { kind: 'GAP', gapId: 'm1', solution: ['impuso'], hint: 'imponer, indefinido', width: 8 },
            { kind: 'TEXT', text: ' cuando el vehículo ya ' },
            { kind: 'GAP', gapId: 'm2', solution: ['había'], hint: 'haber', width: 7 },
            { kind: 'TEXT', text: ' sido vendido. SOLICITA: Que se ' },
            { kind: 'GAP', gapId: 'm3', solution: ['anule'], hint: 'anular', width: 7 },
            { kind: 'TEXT', text: ' la sanción y que se ' },
            { kind: 'GAP', gapId: 'm4', solution: ['notifique'], hint: 'notificar', width: 10 },
            { kind: 'TEXT', text: ' al nuevo titular.' },
          ],
        },
        {
          id: 'esa2-p3-choice',
          type: 'CHOICE',
          instruction: 'Elija la petición mejor formulada.',
          question: '¿Qué apartado SOLICITA cumple su función?',
          options: [
            { id: 'q1', text: 'Que se tenga en cuenta todo lo anterior y se actúe como corresponda.' },
            {
              id: 'q2',
              text: 'Que se anule la sanción del expediente 2025/0417 y se devuelvan los 200 euros abonados.',
            },
            { id: 'q3', text: 'Que es una vergüenza el trato recibido en la oficina.' },
            { id: 'q4', text: 'Que se revise, en la medida de lo posible, la situación general.' },
          ],
          multiple: false,
          solution: ['q2'],
          explanation:
            'La petición tiene que poder concederse o denegarse tal cual: qué acto, qué consecuencia. «Actuar como corresponda» deja la decisión a la otra parte, y la queja pertenece, si acaso, al bloque EXPONE.',
        },
        {
          id: 'esa2-p3-info-recursos',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'Los nombres cambian de país en país',
          text: 'Los recursos tienen nombres distintos según el ordenamiento. En España se distinguen el recurso de reposición, ante el mismo órgano, y el de alzada, ante el superior. En México se habla de recurso de revisión; en Chile y Colombia, de recurso de reposición y de apelación. La lógica es común: primero se pide a quien decidió que lo reconsidere, luego a quien está por encima.',
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – Verträge: Klauseln und ihre Bedingungen.
  {
    order: 4,
    title: 'La letra pequeña',
    subtitle: 'Vertragsklauseln erschließen',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'esa2-p4-h1', type: 'HEADING', level: 1, text: 'La letra pequeña' },
        {
          id: 'esa2-p4-intro',
          type: 'TEXT',
          text: 'Un contrato es, en buena medida, una colección de condiciones: qué pasa si una parte no paga, si la otra se retrasa, si nadie dice nada al final del plazo. Por eso las cláusulas están llenas de conectores condicionales, y cada uno tiene un alcance distinto. Confundir «salvo que» con «siempre que» puede cambiar quién paga.',
        },
        {
          id: 'esa2-p4-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: contratos',
          items: [
            { term: 'la cláusula', translations: { en: 'clause', de: 'die Klausel' } },
            { term: 'el arrendador / el arrendatario', translations: { en: 'landlord / tenant', de: 'der Vermieter / der Mieter' } },
            { term: 'la fianza', translations: { en: 'deposit', de: 'die Kaution' } },
            {
              term: 'la prórroga tácita',
              translations: { en: 'automatic renewal', de: 'die stillschweigende Verlängerung' },
              example: 'El contrato se prorrogará tácitamente por un año.',
            },
            { term: 'rescindir', translations: { en: 'to terminate', de: 'kündigen, auflösen' } },
            { term: 'la penalización', translations: { en: 'penalty', de: 'die Vertragsstrafe' } },
            { term: 'el preaviso', translations: { en: 'prior notice', de: 'die Kündigungsfrist' } },
            { term: 'correr a cargo de', translations: { en: 'to be borne by', de: 'zulasten gehen von' } },
          ],
        },
        {
          id: 'esa2-p4-info-condiciones',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Conectores condicionales en los contratos',
          text: 'Todos los conectores de la tabla llevan subjuntivo, pero no dicen lo mismo. «Siempre que» y «siempre y cuando» ponen una condición necesaria: sin ella, no hay efecto. «Salvo que» y «a no ser que» introducen la excepción: el efecto se produce en todos los casos menos en ese. «En caso de que» presenta una hipótesis menos probable. En textos jurídicos antiguos aparece aún el futuro de subjuntivo: «si el arrendatario no abonare la renta…».',
          table: {
            headers: ['Conector', 'Valor', 'Ejemplo'],
            rows: [
              ['siempre que', 'condición necesaria', 'Se devolverá la fianza siempre que el piso esté en buen estado.'],
              ['salvo que', 'excepción', 'El contrato se prorroga salvo que una parte lo rescinda.'],
              ['a no ser que', 'excepción', 'No habrá penalización a no ser que se incumpla el preaviso.'],
              ['en caso de que', 'hipótesis', 'En caso de que haya daños, correrán a cargo del arrendatario.'],
            ],
          },
        },
        {
          id: 'esa2-p4-choice',
          type: 'CHOICE',
          instruction: 'Lea la cláusula y elija la interpretación correcta.',
          question:
            '«El contrato se prorrogará tácitamente por períodos anuales salvo que alguna de las partes comunique su voluntad de no renovarlo con dos meses de preaviso.» Estamos en noviembre y el contrato vence el 31 de diciembre. ¿Qué ocurre si el arrendatario avisa hoy?',
          options: [
            { id: 'k1', text: 'El contrato termina el 31 de diciembre, como quería.' },
            { id: 'k2', text: 'El contrato se prorroga un año, porque el aviso llega con menos de dos meses de preaviso.' },
            { id: 'k3', text: 'El contrato queda rescindido de inmediato.' },
            { id: 'k4', text: 'La prórroga depende de que el arrendador esté de acuerdo.' },
          ],
          multiple: false,
          solution: ['k2'],
          explanation:
            'La prórroga es la regla; la excepción exige un aviso con dos meses de antelación. Un aviso en noviembre llega tarde para diciembre, así que la excepción no se cumple y la regla se aplica.',
        },
        {
          id: 'esa2-p4-cloze',
          type: 'CLOZE',
          instruction: 'Complete las cláusulas con el conector que da el sentido indicado.',
          wordBank: ['siempre que', 'salvo que', 'en caso de que', 'a no ser que'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'La fianza se devolverá íntegra ' },
            { kind: 'GAP', gapId: 'k1', solution: ['siempre que'], hint: 'condición', width: 12 },
            { kind: 'TEXT', text: ' la vivienda se entregue en buen estado. Los gastos de comunidad corren a cargo del arrendador, ' },
            { kind: 'GAP', gapId: 'k2', solution: ['salvo que', 'a no ser que'], hint: 'excepción', width: 12 },
            { kind: 'TEXT', text: ' se pacte otra cosa por escrito. ' },
            { kind: 'GAP', gapId: 'k3', solution: ['en caso de que'], hint: 'hipótesis', width: 14 },
            { kind: 'TEXT', text: ' el arrendatario abandone la vivienda antes de un año, abonará una mensualidad como penalización.' },
          ],
        },
        {
          id: 'esa2-p4-match',
          type: 'MATCHING',
          instruction: 'Relacione cada cláusula con lo que significa en la práctica.',
          left: [
            { id: 'u1', text: 'Las reparaciones menores correrán a cargo del arrendatario.' },
            { id: 'u2', text: 'Cualquiera de las partes podrá rescindir el contrato con un mes de preaviso.' },
            { id: 'u3', text: 'El incumplimiento del pago dará lugar a la resolución del contrato.' },
            { id: 'u4', text: 'Queda prohibido el subarriendo sin consentimiento expreso.' },
          ],
          right: [
            { id: 'v1', text: 'Si se rompe un grifo, lo paga quien vive en el piso.' },
            { id: 'v2', text: 'Quien quiera irse tiene que avisar con treinta días.' },
            { id: 'v3', text: 'Si no se paga, el contrato puede darse por terminado.' },
            { id: 'v4', text: 'No se puede alquilar una habitación a otra persona sin permiso.' },
          ],
          solution: [
            { leftId: 'u1', rightId: 'v1' },
            { leftId: 'u2', rightId: 'v2' },
            { leftId: 'u3', rightId: 'v3' },
            { leftId: 'u4', rightId: 'v4' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – Registerwahl, Wiederholung, eigener Widerspruch.
  {
    order: 5,
    title: 'Escribir a la administración',
    subtitle: 'Register treffen und das Kapitel wiederholen',
    estimatedMinutes: 32,
    content: {
      version: v,
      blocks: [
        { id: 'esa2-p5-h1', type: 'HEADING', level: 1, text: 'Escribir a la administración' },
        {
          id: 'esa2-p5-intro',
          type: 'TEXT',
          text: 'Quien escribe a una administración no tiene que imitar su estilo. Basta con que sea formal, preciso y completo. Las fórmulas fijas —EXPONE, SOLICITA, «a efectos de notificaciones»— conviene usarlas, porque orientan a quien lee; la nominalización en cadena y los nexos inflados, en cambio, no dan autoridad a un escrito, solo lo alargan.',
        },
        {
          id: 'esa2-p5-info-registro',
          type: 'INFO',
          variant: 'TIP',
          title: 'Formal no es rebuscado',
          text: 'La cortesía en un escrito administrativo es discreta: tratamiento de usted, condicional de cortesía cuando se ruega algo en una carta («le agradecería que…»), ningún adjetivo emocional. La firmeza se consigue con hechos y fechas, no con intensificadores.',
          table: {
            headers: ['Evite', 'Prefiera'],
            rows: [
              ['Es totalmente inadmisible que…', 'La resolución no tiene en cuenta que…'],
              ['Exijo que me devuelvan mi dinero ya.', 'Solicito la devolución de los 200 euros abonados.'],
              ['Como ya les dije mil veces…', 'Como consta en mi escrito de 3 de marzo…'],
              ['Se procede a la realización de la presentación…', 'Presento…'],
            ],
          },
        },
        {
          id: 'esa2-p5-choice-registro',
          type: 'CHOICE',
          instruction: 'Elija la frase adecuada para un recurso.',
          question: '¿Qué frase mantiene un registro formal y eficaz?',
          options: [
            { id: 'f1', text: 'Me parece una auténtica vergüenza que nadie me avisara.' },
            { id: 'f2', text: 'Que el requerimiento no le fue notificado, según consta en el aviso de correos adjunto.' },
            { id: 'f3', text: 'Que se procede por medio del presente a la realización de la interposición de recurso.' },
            { id: 'f4', text: 'Que, como todo el mundo sabe, la administración siempre se equivoca.' },
          ],
          multiple: false,
          solution: ['f2'],
          explanation:
            'La segunda frase afirma un hecho y remite a una prueba. La primera y la cuarta cambian de registro; la tercera parece formal, pero encadena tres sustantivos donde bastaba un verbo: «interpone recurso».',
        },
        {
          id: 'esa2-p5-cloze',
          type: 'CLOZE',
          instruction: 'Complete el resumen del capítulo.',
          wordBank: ['nominalización', 'dispositiva', 'hábiles', 'SOLICITA', 'salvo que', 'subsanar'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'El estilo administrativo convierte verbos en sustantivos: es la ' },
            { kind: 'GAP', gapId: 'z1', solution: ['nominalización', 'nominalizacion'], width: 15 },
            { kind: 'TEXT', text: '. En una resolución, la decisión está en la parte ' },
            { kind: 'GAP', gapId: 'z2', solution: ['dispositiva'], width: 12 },
            { kind: 'TEXT', text: '. Los días ' },
            { kind: 'GAP', gapId: 'z3', solution: ['hábiles', 'habiles'], width: 9 },
            { kind: 'TEXT', text: ' excluyen fines de semana y festivos. Si falta un documento, hay que ' },
            { kind: 'GAP', gapId: 'z4', solution: ['subsanar'], width: 9 },
            { kind: 'TEXT', text: ' la falta. En un recurso, la petición concreta va bajo ' },
            { kind: 'GAP', gapId: 'z5', solution: ['SOLICITA'], width: 10 },
            { kind: 'TEXT', text: '. Y en un contrato, «' },
            { kind: 'GAP', gapId: 'z6', solution: ['salvo que'], width: 10 },
            { kind: 'TEXT', text: '» introduce la excepción a una regla.' },
          ],
        },
        {
          id: 'esa2-p5-match',
          type: 'MATCHING',
          instruction: 'Relacione cada situación con el documento o la fórmula adecuados.',
          left: [
            { id: 'w1', text: 'No está de acuerdo con una multa.' },
            { id: 'w2', text: 'Le piden un papel que olvidó adjuntar.' },
            { id: 'w3', text: 'Quiere dejar el piso alquilado.' },
            { id: 'w4', text: 'Quiere saber hasta cuándo puede reclamar.' },
          ],
          right: [
            { id: 'x1', text: 'Interponer recurso con EXPONE y SOLICITA.' },
            { id: 'x2', text: 'Subsanar dentro del plazo del requerimiento.' },
            { id: 'x3', text: 'Comunicar la rescisión respetando el preaviso.' },
            { id: 'x4', text: 'Leer el pie de recurso de la resolución.' },
          ],
          solution: [
            { leftId: 'w1', rightId: 'x1' },
            { leftId: 'w2', rightId: 'x2' },
            { leftId: 'w3', rightId: 'x3' },
            { leftId: 'w4', rightId: 'x4' },
          ],
        },
        {
          id: 'esa2-p5-writing',
          type: 'WRITING',
          instruction: 'Redacte un recurso.',
          prompt:
            'Ha recibido una multa de 200 euros por no haber renovado a tiempo la inscripción de su bicicleta eléctrica en el registro municipal. Usted la renovó dentro del plazo, pero por internet, y la plataforma no registró el pago por un fallo técnico; conserva el justificante bancario. Redacte un recurso de entre 150 y 250 palabras con identificación, EXPONE (al menos dos puntos), SOLICITA (una petición concreta) y cierre. Mantenga un registro formal, sin nominalizaciones innecesarias.',
          minWords: 150,
          maxWords: 260,
          aiFeedback: true,
          sampleAnswer:
            'AL AYUNTAMIENTO DE VALENCIA – Servicio de Movilidad\n\nDon Andrés Molina Vidal, con DNI 87654321X y domicilio a efectos de notificaciones en la calle Cirilo Amorós 14, 46004 Valencia, ante este servicio comparece y\n\nEXPONE:\n\nPrimero. Que con fecha 2 de junio recibió la notificación de la sanción del expediente 2025/1182, por importe de 200 euros, por no haber renovado la inscripción de su bicicleta eléctrica.\n\nSegundo. Que realizó la renovación el 14 de mayo a través de la sede electrónica, dentro del plazo establecido, y abonó la tasa correspondiente, como acredita el justificante bancario que se adjunta.\n\nTercero. Que la plataforma no registró el pago debido a un fallo técnico ajeno a su voluntad, por lo que la falta que se le imputa no existe.\n\nPor todo lo anterior,\n\nSOLICITA:\n\nQue se admita el presente recurso, se anule la sanción del expediente 2025/1182 y se tenga por renovada la inscripción con fecha 14 de mayo.\n\nEn Valencia, a 10 de junio.\n\nFdo.: Andrés Molina Vidal',
        },
      ],
    },
  },
];
