import type { UnitSeed } from './chapter-beginner-1';

/**
 * Spanisch, Beginner, Kapitel 9: „Salud y cuerpo“ (A2, Kapitel 3)
 *
 * Fünf Seiten, Aufbau wie in den Kapiteln davor.
 *
 * Nach zwei Grammatikkapiteln hintereinander ist das hier wieder ein
 * Situationskapitel: Man geht zum Arzt, schildert, was weh tut, und versteht,
 * was man tun soll. Die Grammatik ergibt sich daraus und nicht umgekehrt.
 *
 * Zwei Dinge kommen dazu. Erstens „doler“, das wie „gustar“ gebaut ist – wer
 * Kapitel 6 hinter sich hat, erkennt das Muster wieder und muss nur ein
 * weiteres Verb hineinstellen. Zweitens der bejahte Imperativ, und zwar nur
 * der: Die verneinte Form („no tomes“) gehört zum Subjuntivo und steht im
 * Grammatikband. Hier wird gesagt, dass es sie gibt und dass sie anders
 * gebildet wird – mehr nicht, weil ein halb erklärter Subjuntivo auf A2 mehr
 * schadet als nützt.
 *
 * Die Ratschläge im Kapitel sind alltäglich (ausruhen, viel trinken) und
 * ersetzen keine ärztliche Auskunft; Krankheitsbilder werden nicht
 * beschrieben.
 *
 * Seiten einsprachig spanisch mit aufklappbarer Übersetzung (Beginner-Band).
 */
const v = 1;

export const SPANISH_BEGINNER_9_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – der Körper: Wortschatz, und der Artikel statt des Possessivs.
  {
    order: 1,
    title: 'El cuerpo',
    subtitle: 'Körperteile benennen',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'es9-p1-h1', type: 'HEADING', level: 1, text: 'El cuerpo' },
        {
          id: 'es9-p1-image',
          type: 'IMAGE',
          url: 'illustration:doctor-visit',
          alt: 'Ein Stethoskop, ein Fieberthermometer und eine Karteikarte auf einem Tisch.',
          caption: 'En la consulta del médico.',
        },
        {
          id: 'es9-p1-intro',
          type: 'TEXT',
          text: 'Para explicar qué le pasa a uno hace falta poder señalar dónde. Empecemos por las palabras; la construcción para decir que algo duele viene en la página siguiente.',
          translations: {
            de: 'Um zu erklären, was einem fehlt, muss man zeigen können, wo. Beginnen wir mit den Wörtern; die Konstruktion, mit der man sagt, dass etwas wehtut, kommt auf der nächsten Seite.',
          },
        },
        {
          id: 'es9-p1-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: las partes del cuerpo',
          items: [
            { term: 'la cabeza', translations: { en: 'head', de: 'der Kopf' } },
            { term: 'el ojo', translations: { en: 'eye', de: 'das Auge' }, plural: 'los ojos' },
            { term: 'la oreja', translations: { en: 'ear', de: 'das Ohr' } },
            { term: 'la nariz', translations: { en: 'nose', de: 'die Nase' } },
            { term: 'la boca', translations: { en: 'mouth', de: 'der Mund' } },
            { term: 'la garganta', translations: { en: 'throat', de: 'der Hals (innen)' } },
            { term: 'el cuello', translations: { en: 'neck', de: 'der Hals (außen)' } },
            { term: 'el brazo', translations: { en: 'arm', de: 'der Arm' } },
            { term: 'la mano', translations: { en: 'hand', de: 'die Hand' }, plural: 'las manos' },
            { term: 'el dedo', translations: { en: 'finger', de: 'der Finger' } },
            { term: 'la espalda', translations: { en: 'back', de: 'der Rücken' } },
            { term: 'el estómago', translations: { en: 'stomach', de: 'der Magen' } },
            { term: 'la pierna', translations: { en: 'leg', de: 'das Bein' } },
            { term: 'la rodilla', translations: { en: 'knee', de: 'das Knie' } },
            { term: 'el pie', translations: { en: 'foot', de: 'der Fuß' }, plural: 'los pies' },
            { term: 'la muela', translations: { en: 'back tooth', de: 'der Backenzahn' } },
          ],
        },
        {
          id: 'es9-p1-info-mano',
          type: 'INFO',
          variant: 'TIP',
          title: 'Dos palabras que engañan',
          text: '«La mano» acaba en -o y es femenina: «la mano derecha», «las manos frías». Es de las poquísimas excepciones a la regla del género. Y «el día» hace lo contrario: acaba en -a y es masculino. Además, el alemán distingue con una sola palabra lo que el español separa: «Hals» es «el cuello» por fuera y «la garganta» por dentro, que es la que duele con un resfriado.',
          translations: {
            de: {
              title: 'Zwei Wörter, die täuschen',
              text: '„La mano“ endet auf -o und ist weiblich: „la mano derecha“, „las manos frías“. Es ist eine der ganz wenigen Ausnahmen von der Geschlechterregel. Und „el día“ macht es umgekehrt: Es endet auf -a und ist männlich. Außerdem unterscheidet das Spanische, was das Deutsche mit einem Wort abdeckt: „Hals“ ist außen „el cuello“ und innen „la garganta“ – letztere tut bei einer Erkältung weh.',
            },
          },
        },
        {
          id: 'es9-p1-match',
          type: 'MATCHING',
          instruction: 'Relacione la parte del cuerpo con lo que se hace con ella.',
          left: [
            { id: 'l1', text: 'los ojos' },
            { id: 'l2', text: 'las piernas' },
            { id: 'l3', text: 'la boca' },
            { id: 'l4', text: 'las manos' },
          ],
          right: [
            { id: 'r1', text: 'Con ellos se ve.' },
            { id: 'r2', text: 'Con ellas se anda.' },
            { id: 'r3', text: 'Con ella se come y se habla.' },
            { id: 'r4', text: 'Con ellas se escribe y se coge todo.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'es9-p1-info-articulo',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'El cuerpo va con artículo, no con posesivo',
          text: 'Ya apareció con «me lavo las manos» en el capítulo cuatro, y aquí vale igual: hablando del propio cuerpo, el español pone «el» o «la» donde el alemán pone «mein». Quién es el dueño ya lo dice el pronombre, y repetirlo suena raro: «me duele la cabeza», nunca «me duele mi cabeza».',
          translations: {
            de: {
              title: 'Der Körper steht mit Artikel, nicht mit Possessivbegleiter',
              text: 'Das kam schon bei „me lavo las manos“ in Kapitel vier vor, und hier gilt dasselbe: Beim eigenen Körper setzt das Spanische „el“ oder „la“, wo das Deutsche „mein“ setzt. Wem er gehört, sagt schon das Pronomen, und es zu wiederholen klingt schief: „me duele la cabeza“, nie „me duele mi cabeza“.',
            },
          },
          table: {
            headers: ['Español', 'Alemán'],
            rows: [
              ['Me duele la espalda.', 'Mein Rücken tut weh.'],
              ['Se rompió el brazo.', 'Er hat sich den Arm gebrochen.'],
              ['Abra la boca, por favor.', 'Machen Sie bitte den Mund auf.'],
              ['Tengo las manos frías.', 'Meine Hände sind kalt.'],
            ],
          },
        },
        {
          id: 'es9-p1-cloze',
          type: 'CLOZE',
          instruction: 'Complete con el artículo correcto.',
          wordBank: ['la', 'el', 'las', 'los'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Me duele ' },
            { kind: 'GAP', gapId: 'a1', solution: ['la'], width: 5 },
            { kind: 'TEXT', text: ' cabeza desde ayer.\nTengo ' },
            { kind: 'GAP', gapId: 'a2', solution: ['los'], width: 5 },
            { kind: 'TEXT', text: ' pies helados.\nAbra ' },
            { kind: 'GAP', gapId: 'a3', solution: ['la'], width: 5 },
            { kind: 'TEXT', text: ' boca, por favor.\nMi hijo se rompió ' },
            { kind: 'GAP', gapId: 'a4', solution: ['el'], width: 5 },
            { kind: 'TEXT', text: ' brazo jugando al fútbol.\nLevante ' },
            { kind: 'GAP', gapId: 'a5', solution: ['las'], width: 6 },
            { kind: 'TEXT', text: ' manos despacio.' },
          ],
        },
        {
          id: 'es9-p1-choice',
          type: 'CHOICE',
          instruction: 'Elija la frase correcta.',
          question: 'Sie wollen sagen: „Mein Rücken tut weh.“',
          options: [
            { id: 'o1', text: 'Me duele mi espalda.' },
            { id: 'o2', text: 'Me duele la espalda.' },
            { id: 'o3', text: 'Mi espalda duele.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation:
            'El pronombre «me» ya dice de quién es la espalda, así que delante va el artículo y no el posesivo.',
          explanationTranslations: {
            de: 'Das Pronomen „me“ sagt schon, wessen Rücken es ist, also steht davor der Artikel und nicht der Possessivbegleiter.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – doler: dasselbe Muster wie gustar, neues Verb.
  {
    order: 2,
    title: 'Me duele la cabeza',
    subtitle: '„doler“ und die Beschwerden',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'es9-p2-h1', type: 'HEADING', level: 1, text: 'Me duele la cabeza' },
        {
          id: 'es9-p2-intro',
          type: 'TEXT',
          text: 'Para decir que algo duele, el español usa la misma construcción que para decir que algo gusta: la persona no es el sujeto, sino quien recibe. Si «gustar» ya le sale solo, «doler» no le va a costar nada.',
          translations: {
            de: 'Um zu sagen, dass etwas wehtut, verwendet das Spanische dieselbe Konstruktion wie für „gefallen“: Die Person ist nicht das Subjekt, sondern die, der etwas geschieht. Wenn „gustar“ schon von selbst kommt, wird „doler“ keine Mühe machen.',
          },
        },
        {
          id: 'es9-p2-info-doler',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Como gustar, pero doliendo',
          text: 'El pronombre dice a quién le duele; el verbo se ajusta a la parte del cuerpo. Una parte, «duele»; varias, «duelen». Además, «doler» cambia la o de la raíz en ue, igual que «poder»: por eso no es «dole» sino «duele».',
          translations: {
            de: {
              title: 'Wie gustar, nur schmerzhaft',
              text: 'Das Pronomen sagt, wem etwas wehtut; das Verb richtet sich nach dem Körperteil. Ein Teil: „duele“; mehrere: „duelen“. Außerdem wandelt „doler“ das o im Stamm zu ue, genau wie „poder“: Deshalb heißt es nicht „dole“, sondern „duele“.',
            },
          },
          table: {
            headers: ['A quién', 'Una parte', 'Varias partes'],
            rows: [
              ['a mí', 'me duele la cabeza', 'me duelen los pies'],
              ['a ti', 'te duele la cabeza', 'te duelen los pies'],
              ['a él / ella / usted', 'le duele la cabeza', 'le duelen los pies'],
              ['a nosotros', 'nos duele la cabeza', 'nos duelen los pies'],
              ['a ellos / ustedes', 'les duele la cabeza', 'les duelen los pies'],
            ],
          },
        },
        {
          id: 'es9-p2-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: cómo se encuentra uno',
          items: [
            { term: 'encontrarse mal', translations: { en: 'to feel unwell', de: 'sich schlecht fühlen' }, example: 'Hoy me encuentro mal.' },
            { term: 'tener fiebre', translations: { en: 'to have a temperature', de: 'Fieber haben' } },
            { term: 'tener tos', translations: { en: 'to have a cough', de: 'Husten haben' } },
            { term: 'estar resfriado', translations: { en: 'to have a cold', de: 'erkältet sein' } },
            { term: 'tener gripe', translations: { en: 'to have the flu', de: 'Grippe haben' } },
            { term: 'estar cansado', translations: { en: 'to be tired', de: 'müde sein' } },
            { term: 'tener dolor de…', translations: { en: 'to have a … ache', de: '…schmerzen haben' }, example: 'Tengo dolor de garganta.' },
            { term: 'la pastilla', translations: { en: 'tablet', de: 'die Tablette' } },
            { term: 'el jarabe', translations: { en: 'syrup', de: 'der Hustensaft' } },
            { term: 'la receta', translations: { en: 'prescription', de: 'das Rezept' } },
            { term: 'la cita', translations: { en: 'appointment', de: 'der Termin' } },
          ],
        },
        {
          id: 'es9-p2-cloze',
          type: 'CLOZE',
          instruction: 'Complete con «duele» o «duelen» y el pronombre.',
          wordBank: ['me duele', 'me duelen', 'le duele', 'nos duelen', 'te duele'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Desde el lunes ' },
            { kind: 'GAP', gapId: 'b1', solution: ['me duele'], width: 10 },
            { kind: 'TEXT', text: ' la garganta.\nDespués de andar tanto ' },
            { kind: 'GAP', gapId: 'b2', solution: ['me duelen'], width: 11 },
            { kind: 'TEXT', text: ' los pies.\nA mi padre ' },
            { kind: 'GAP', gapId: 'b3', solution: ['le duele'], width: 10 },
            { kind: 'TEXT', text: ' mucho la espalda.\nA nosotros ' },
            { kind: 'GAP', gapId: 'b4', solution: ['nos duelen'], width: 12 },
            { kind: 'TEXT', text: ' las piernas del gimnasio.\n¿' },
            { kind: 'GAP', gapId: 'b5', solution: ['Te duele'], width: 10 },
            { kind: 'TEXT', text: ' algo?' },
          ],
        },
        {
          id: 'es9-p2-info-tener',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Tres maneras de decir lo mismo',
          text: 'La misma molestia se puede expresar de tres formas, y conviene reconocerlas todas porque en la consulta aparecen mezcladas. Con «doler» el sujeto es la parte del cuerpo; con «tener dolor de» el sujeto es la persona; y «estar» va con los adjetivos de estado. Lo que no existe es mezclarlas: «tengo duele» no es nada.',
          translations: {
            de: {
              title: 'Drei Arten, dasselbe zu sagen',
              text: 'Dieselbe Beschwerde lässt sich auf drei Arten ausdrücken, und man sollte alle erkennen, weil sie beim Arzt durcheinander vorkommen. Bei „doler“ ist der Körperteil das Subjekt; bei „tener dolor de“ die Person; und „estar“ steht bei den Zustandsadjektiven. Was es nicht gibt, ist eine Mischung: „tengo duele“ ist gar nichts.',
            },
          },
          table: {
            headers: ['Construcción', 'Ejemplo'],
            rows: [
              ['doler + parte del cuerpo', 'Me duele el estómago.'],
              ['tener dolor de + parte', 'Tengo dolor de estómago.'],
              ['tener + sustantivo', 'Tengo fiebre. Tengo tos.'],
              ['estar + adjetivo', 'Estoy resfriado. Estoy muy cansada.'],
            ],
          },
        },
        {
          id: 'es9-p2-choice',
          type: 'CHOICE',
          instruction: 'Marque todas las frases correctas.',
          question: '¿Cuáles de estas frases son correctas?',
          options: [
            { id: 'x1', text: 'Me duelen las muelas.' },
            { id: 'x2', text: 'Me duele las muelas.' },
            { id: 'x3', text: 'Tengo dolor de muelas.' },
            { id: 'x4', text: 'Tengo duele de muelas.' },
          ],
          multiple: true,
          solution: ['x1', 'x3'],
          explanation:
            '«Las muelas» son varias, así que «duelen». Y con «tener» se usa el sustantivo «dolor», no el verbo.',
          explanationTranslations: {
            de: '„Las muelas“ sind mehrere, also „duelen“. Und mit „tener“ steht das Substantiv „dolor“, nicht das Verb.',
          },
        },
        {
          id: 'es9-p2-match',
          type: 'MATCHING',
          instruction: 'Relacione la molestia con la frase.',
          left: [
            { id: 'm1', text: 'Estuve tres horas al sol.' },
            { id: 'm2', text: 'He gritado toda la noche en el concierto.' },
            { id: 'm3', text: 'Llevo ocho horas delante del ordenador.' },
            { id: 'm4', text: 'Anoche cené demasiado.' },
          ],
          right: [
            { id: 'n1', text: 'Me duele la cabeza.' },
            { id: 'n2', text: 'Me duele la garganta.' },
            { id: 'n3', text: 'Me duelen la espalda y el cuello.' },
            { id: 'n4', text: 'Me duele el estómago.' },
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
  // Seite 3 – beim Arzt: der ganze Wortwechsel, plus "desde" und "hace".
  {
    order: 3,
    title: 'En la consulta',
    subtitle: 'Beim Arzt Beschwerden schildern',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'es9-p3-h1', type: 'HEADING', level: 1, text: 'En la consulta' },
        {
          id: 'es9-p3-intro',
          type: 'TEXT',
          text: 'La consulta sigue casi siempre el mismo guion: el médico pregunta qué pasa, desde cuándo, y si hay algo más. Quien conoce las tres preguntas, entiende la conversación entera.',
          translations: {
            de: 'Ein Arztbesuch folgt fast immer demselben Ablauf: Die Ärztin fragt, was los ist, seit wann, und ob es noch etwas gibt. Wer die drei Fragen kennt, versteht das ganze Gespräch.',
          },
        },
        {
          id: 'es9-p3-dlg',
          type: 'DIALOGUE',
          title: 'Con la doctora Ferrer',
          lines: [
            { speaker: 'Doctora', text: 'Buenos días, siéntese. ¿Qué le pasa?' },
            { speaker: 'Paciente', text: 'Me encuentro fatal. Me duele mucho la garganta y tengo tos.' },
            { speaker: 'Doctora', text: '¿Desde cuándo?' },
            { speaker: 'Paciente', text: 'Desde el viernes. Hace tres días que no duermo bien.' },
            { speaker: 'Doctora', text: '¿Y fiebre? ¿Se la tomó?' },
            { speaker: 'Paciente', text: 'Ayer tuve treinta y ocho y medio.' },
            { speaker: 'Doctora', text: 'Abra la boca, por favor… Sí, está muy roja. No es nada grave, pero tiene que descansar.' },
            { speaker: 'Paciente', text: '¿Y puedo ir a trabajar?' },
            { speaker: 'Doctora', text: 'Mejor no. Le doy la baja para tres días.' },
          ],
        },
        {
          id: 'es9-p3-info-desde',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'desde, desde hace, hace … que',
          text: 'Las tres contestan a «¿desde cuándo?», pero no son intercambiables. «Desde» va delante de un momento (el viernes, las tres, enero). «Desde hace» va delante de un plazo (tres días, una semana). Y «hace … que» dice lo mismo que «desde hace», solo que al principio de la frase y con el verbo detrás.',
          translations: {
            de: {
              title: 'desde, desde hace, hace … que',
              text: 'Alle drei beantworten „¿desde cuándo?“, sind aber nicht austauschbar. „Desde“ steht vor einem Zeitpunkt (am Freitag, um drei, im Januar). „Desde hace“ steht vor einer Zeitspanne (drei Tage, eine Woche). Und „hace … que“ sagt dasselbe wie „desde hace“, nur am Satzanfang und mit dem Verb dahinter.',
            },
          },
          table: {
            headers: ['Forma', 'Ejemplo'],
            rows: [
              ['desde + momento', 'Me duele desde el viernes.'],
              ['desde hace + plazo', 'Me duele desde hace tres días.'],
              ['hace + plazo + que', 'Hace tres días que me duele.'],
              ['pregunta', '¿Desde cuándo le duele?'],
            ],
          },
        },
        {
          id: 'es9-p3-cloze',
          type: 'CLOZE',
          instruction: 'Complete con «desde», «desde hace» o «hace».',
          wordBank: ['desde', 'desde hace', 'hace'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Me encuentro mal ' },
            { kind: 'GAP', gapId: 'c1', solution: ['desde'], width: 7 },
            { kind: 'TEXT', text: ' el domingo.\nTengo tos ' },
            { kind: 'GAP', gapId: 'c2', solution: ['desde hace'], width: 11 },
            { kind: 'TEXT', text: ' una semana.\n' },
            { kind: 'GAP', gapId: 'c3', solution: ['Hace'], width: 6 },
            { kind: 'TEXT', text: ' dos días que no como nada.\nNo fumo ' },
            { kind: 'GAP', gapId: 'c4', solution: ['desde'], width: 7 },
            { kind: 'TEXT', text: ' enero.' },
          ],
        },
        {
          id: 'es9-p3-audio',
          type: 'AUDIO',
          title: 'Escuche: pedir cita por teléfono',
          audioUrl: 'placeholder://es-k9-cita',
          durationSec: 30,
          transcript:
            'Centro de salud, buenos días. – Hola, quería pedir cita con el doctor Ramos. – ¿Para hoy? – Si puede ser, sí. Me duele mucho el estómago desde ayer. – Hoy solo queda a las siete menos cuarto de la tarde. – Me viene bien. – ¿Su nombre, por favor? – Elena Ortiz.',
        },
        {
          id: 'es9-p3-choice',
          type: 'CHOICE',
          instruction: 'Escuche o lea el texto otra vez y elija.',
          question: '¿A qué hora es la cita de Elena?',
          options: [
            { id: 'p1', text: 'A las siete y cuarto.' },
            { id: 'p2', text: 'A las seis y cuarto.' },
            { id: 'p3', text: 'A las siete menos cuarto.' },
          ],
          multiple: false,
          solution: ['p3'],
          explanation: 'La recepcionista dice: «a las siete menos cuarto de la tarde», es decir, a las 18:45.',
          explanationTranslations: {
            de: 'Die Anmeldung sagt: „a las siete menos cuarto de la tarde“, also um 18:45 Uhr.',
          },
        },
        {
          id: 'es9-p3-ordering',
          type: 'ORDERING',
          instruction: 'Ordene la visita al médico.',
          items: [
            { id: 'w1', text: 'Buenos días, siéntese. ¿Qué le pasa?' },
            { id: 'w2', text: 'Me duele la garganta y tengo tos.' },
            { id: 'w3', text: '¿Desde cuándo?' },
            { id: 'w4', text: 'Desde el viernes.' },
            { id: 'w5', text: 'Abra la boca, por favor.' },
            { id: 'w6', text: 'No es grave, pero tiene que descansar.' },
          ],
          solution: ['w1', 'w2', 'w3', 'w4', 'w5', 'w6'],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – Ratschläge: bejahter Imperativ, dazu tener que / deber / hay que.
  {
    order: 4,
    title: 'Descanse y beba mucha agua',
    subtitle: 'Ratschläge geben und verstehen',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'es9-p4-h1', type: 'HEADING', level: 1, text: 'Descanse y beba mucha agua' },
        {
          id: 'es9-p4-intro',
          type: 'TEXT',
          text: 'Un consejo se puede dar de dos maneras: con el imperativo, que es directo, o con un verbo de obligación, que suena más suave. Las dos aparecen en la consulta, y las dos hay que entenderlas.',
          translations: {
            de: 'Einen Rat kann man auf zwei Arten geben: mit dem Imperativ, der direkt ist, oder mit einem Verb der Notwendigkeit, das milder klingt. Beide kommen beim Arzt vor, und beide muss man verstehen.',
          },
        },
        {
          id: 'es9-p4-info-imperativo',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'El imperativo afirmativo',
          text: 'La forma de «tú» es igual que la tercera persona del presente, sin la -s: tú tomas → ¡toma! La de «usted» cambia la vocal: los verbos en -ar toman -e, y los de -er e -ir toman -a. Por eso el médico dice «tome» y «beba» – parece un presente equivocado, y es un imperativo.',
          translations: {
            de: {
              title: 'Der bejahte Imperativ',
              text: 'Die Form für „tú“ gleicht der dritten Person des Präsens ohne das -s: tú tomas → ¡toma! Die für „usted“ tauscht den Vokal: Verben auf -ar nehmen -e, die auf -er und -ir nehmen -a. Deshalb sagt die Ärztin „tome“ und „beba“ – es sieht aus wie ein falsches Präsens und ist ein Imperativ.',
            },
          },
          table: {
            headers: ['Infinitivo', 'tú', 'usted'],
            rows: [
              ['tomar', 'toma', 'tome'],
              ['beber', 'bebe', 'beba'],
              ['abrir', 'abre', 'abra'],
              ['descansar', 'descansa', 'descanse'],
              ['hacer', 'haz', 'haga'],
              ['tener', 'ten', 'tenga'],
              ['venir', 'ven', 'venga'],
              ['ir', 've', 'vaya'],
            ],
          },
        },
        {
          id: 'es9-p4-info-negativo',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'La forma negativa es otra',
          text: 'Para prohibir algo no basta con poner «no» delante: la forma cambia. Se dice «toma» pero «no tomes», «bebe» pero «no bebas». Esas formas pertenecen al subjuntivo y se trabajan en el libro de gramática; aquí basta con reconocerlas cuando aparecen en un prospecto o en boca del médico.',
          translations: {
            de: {
              title: 'Die verneinte Form ist eine andere',
              text: 'Um etwas zu verbieten, genügt kein vorangestelltes „no“: Die Form ändert sich. Es heißt „toma“, aber „no tomes“, „bebe“, aber „no bebas“. Diese Formen gehören zum Subjuntivo und werden im Grammatikband behandelt; hier reicht es, sie wiederzuerkennen, wenn sie auf einem Beipackzettel oder im Mund der Ärztin auftauchen.',
            },
          },
          table: {
            headers: ['Afirmativo', 'Negativo'],
            rows: [
              ['toma la pastilla', 'no tomes la pastilla'],
              ['bebe alcohol', 'no bebas alcohol'],
              ['tome el jarabe', 'no tome el jarabe'],
            ],
          },
        },
        {
          id: 'es9-p4-cloze',
          type: 'CLOZE',
          instruction: 'Complete los consejos de la doctora con el imperativo de «usted».',
          wordBank: ['Descanse', 'beba', 'tome', 'haga', 'venga'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '' },
            { kind: 'GAP', gapId: 'd1', solution: ['Descanse'], width: 10, hint: 'descansar' },
            { kind: 'TEXT', text: ' dos o tres días en casa.\n' },
            { kind: 'GAP', gapId: 'd2', solution: ['Beba'], width: 7, hint: 'beber' },
            { kind: 'TEXT', text: ' mucha agua.\n' },
            { kind: 'GAP', gapId: 'd3', solution: ['Tome'], width: 7, hint: 'tomar' },
            { kind: 'TEXT', text: ' el jarabe por la noche.\nNo ' },
            { kind: 'GAP', gapId: 'd4', solution: ['haga'], width: 7, hint: 'hacer' },
            { kind: 'TEXT', text: ' deporte esta semana.\nSi sigue igual, ' },
            { kind: 'GAP', gapId: 'd5', solution: ['venga'], width: 7, hint: 'venir' },
            { kind: 'TEXT', text: ' el lunes otra vez.' },
          ],
        },
        {
          id: 'es9-p4-info-obligacion',
          type: 'INFO',
          variant: 'TIP',
          title: 'tener que, deber, hay que',
          text: 'Los tres van seguidos de infinitivo y se distinguen por a quién señalan. «Tener que» es la obligación concreta de alguien. «Deber» es más un consejo o un deber moral, y suena más suave. «Hay que» no nombra a nadie: vale para todo el mundo, como los carteles y las instrucciones.',
          translations: {
            de: {
              title: 'tener que, deber, hay que',
              text: 'Alle drei stehen vor einem Infinitiv und unterscheiden sich darin, auf wen sie zeigen. „Tener que“ ist die konkrete Pflicht einer Person. „Deber“ ist eher ein Rat oder eine moralische Pflicht und klingt milder. „Hay que“ nennt niemanden: Es gilt für alle, wie auf Schildern und in Anleitungen.',
            },
          },
          table: {
            headers: ['Forma', 'Ejemplo'],
            rows: [
              ['tener que + infinitivo', 'Tienes que descansar.'],
              ['deber + infinitivo', 'Debe beber más agua.'],
              ['hay que + infinitivo', 'Hay que tomarlo con comida.'],
              ['no poder + infinitivo', 'No puede conducir con estas pastillas.'],
            ],
          },
        },
        {
          id: 'es9-p4-choice',
          type: 'CHOICE',
          instruction: 'Elija la forma correcta.',
          question: 'La doctora habla de usted y le aconseja descansar. ¿Qué dice?',
          options: [
            { id: 'q1', text: 'Descansa dos días.' },
            { id: 'q2', text: 'Descanse dos días.' },
            { id: 'q3', text: 'Descansar dos días.' },
          ],
          multiple: false,
          solution: ['q2'],
          explanation:
            'Tratando de usted, un verbo en -ar cambia la vocal de la terminación: «descanse». «Descansa» sería tuteando.',
          explanationTranslations: {
            de: 'In der Sie-Anrede tauscht ein Verb auf -ar den Endungsvokal: „descanse“. „Descansa“ wäre das Du.',
          },
        },
        {
          id: 'es9-p4-match',
          type: 'MATCHING',
          instruction: 'Relacione el problema con el consejo.',
          left: [
            { id: 'm1', text: 'Me duele mucho la garganta.' },
            { id: 'm2', text: 'No duermo bien desde hace días.' },
            { id: 'm3', text: 'Me duele la espalda de la oficina.' },
            { id: 'm4', text: 'Tengo treinta y nueve de fiebre.' },
          ],
          right: [
            { id: 'n1', text: 'Tome algo caliente y no hable mucho.' },
            { id: 'n2', text: 'No tome café por la tarde.' },
            { id: 'n3', text: 'Levántese cada hora y camine un poco.' },
            { id: 'n4', text: 'Quédese en casa y llame si sigue mañana.' },
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
        { id: 'es9-p5-h1', type: 'HEADING', level: 1, text: '¿Ya sabes hacerlo?' },
        {
          id: 'es9-p5-intro',
          type: 'TEXT',
          text: 'Aquí vuelve todo el capítulo: el cuerpo, «doler», las preguntas de la consulta y los consejos.',
          translations: {
            de: 'Hier kommt das ganze Kapitel noch einmal: der Körper, „doler“, die Fragen beim Arzt und die Ratschläge.',
          },
        },
        {
          id: 'es9-p5-cloze',
          type: 'CLOZE',
          instruction: 'Complete la conversación.',
          wordBank: ['pasa', 'duele', 'desde hace', 'tengo', 'tiene que'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '▸ Buenos días. ¿Qué le ' },
            { kind: 'GAP', gapId: 'g1', solution: ['pasa'], width: 7 },
            { kind: 'TEXT', text: '?\n▸ Me ' },
            { kind: 'GAP', gapId: 'g2', solution: ['duele'], width: 7 },
            { kind: 'TEXT', text: ' mucho el estómago.\n▸ ¿Desde cuándo?\n▸ ' },
            { kind: 'GAP', gapId: 'g3', solution: ['Desde hace'], width: 11 },
            { kind: 'TEXT', text: ' dos días. Además ' },
            { kind: 'GAP', gapId: 'g4', solution: ['tengo'], width: 7 },
            { kind: 'TEXT', text: ' un poco de fiebre.\n▸ No es grave, pero ' },
            { kind: 'GAP', gapId: 'g5', solution: ['tiene que'], width: 10 },
            { kind: 'TEXT', text: ' comer ligero unos días.' },
          ],
        },
        {
          id: 'es9-p5-match',
          type: 'MATCHING',
          instruction: 'Relacione la pregunta con la respuesta.',
          left: [
            { id: 'a1', text: '¿Qué te pasa?' },
            { id: 'a2', text: '¿Desde cuándo te duele?' },
            { id: 'a3', text: '¿Tomaste algo?' },
            { id: 'a4', text: '¿Quieres que pida cita?' },
          ],
          right: [
            { id: 'b1', text: 'Me duele la cabeza desde esta mañana.' },
            { id: 'b2', text: 'Desde hace dos o tres horas.' },
            { id: 'b3', text: 'Solo una pastilla después de comer.' },
            { id: 'b4', text: 'Sí, por favor. Mejor voy al médico.' },
          ],
          solution: [
            { leftId: 'a1', rightId: 'b1' },
            { leftId: 'a2', rightId: 'b2' },
            { leftId: 'a3', rightId: 'b3' },
            { leftId: 'a4', rightId: 'b4' },
          ],
        },
        {
          id: 'es9-p5-choice',
          type: 'CHOICE',
          instruction: 'Marque todas las frases correctas.',
          question: '¿Cuáles de estas frases son correctas?',
          options: [
            { id: 's1', text: 'Me duelen los ojos de tanto ordenador.' },
            { id: 's2', text: 'Me duelen mis ojos de tanto ordenador.' },
            { id: 's3', text: 'Tienes que beber más agua.' },
            { id: 's4', text: 'Tienes que bebes más agua.' },
          ],
          multiple: true,
          solution: ['s1', 's3'],
          explanation:
            'Con el cuerpo va el artículo, no el posesivo. Y detrás de «tener que» va siempre el infinitivo.',
          explanationTranslations: {
            de: 'Beim Körper steht der Artikel, nicht der Possessivbegleiter. Und nach „tener que“ steht immer der Infinitiv.',
          },
        },
        {
          id: 'es9-p5-ordering',
          type: 'ORDERING',
          instruction: 'Ordene la llamada al centro de salud.',
          items: [
            { id: 'z1', text: 'Centro de salud, buenos días.' },
            { id: 'z2', text: 'Hola, quería pedir cita para hoy.' },
            { id: 'z3', text: '¿Qué le pasa?' },
            { id: 'z4', text: 'Me duele el estómago desde ayer.' },
            { id: 'z5', text: 'Queda una a las siete menos cuarto.' },
            { id: 'z6', text: 'Perfecto, me viene bien. Gracias.' },
          ],
          solution: ['z1', 'z2', 'z3', 'z4', 'z5', 'z6'],
        },
        {
          id: 'es9-p5-writing',
          type: 'WRITING',
          instruction: 'Escriba un mensaje al trabajo.',
          prompt:
            'Usted no puede ir a trabajar porque se encuentra mal. Escriba de cuatro a seis frases: qué le pasa, desde cuándo, qué le dijo el médico y cuándo cree que vuelve. Use «doler» al menos una vez y una expresión con «desde» o «hace».',
          minWords: 25,
          maxWords: 100,
          aiFeedback: true,
          sampleAnswer:
            'Hola, Carmen: hoy no puedo ir a la oficina. Me encuentro fatal desde el domingo: me duele mucho la garganta y tengo algo de fiebre. Esta mañana fui al médico y me dijo que tengo que descansar tres días. Hace dos noches que no duermo bien. Creo que el jueves ya estoy en casa trabajando. Perdona las molestias.',
        },
      ],
    },
  },
];
