import type { UnitSeed } from './chapter-beginner-1';

/**
 * Spanisch, Beginner, Kapitel 1: „¡Hola!“
 *
 * Vollständig ausgearbeitetes Musterkapitel, fünf Seiten lang – der spanische
 * Gegenpart zu `chapter-beginner-1.ts`.
 *
 * Aufbau jeder Seite wie im deutschen Band: Die Aufgabe steht direkt hinter
 * der Erklärung, zu der sie gehört. Wer den Kasten zu „tú oder usted“ gelesen
 * hat, entscheidet zwei Zeilen weiter, wie man die Chefin anspricht.
 *
 * Die Seiten sind einsprachig spanisch gehalten. Erklärkästen und Fließtext
 * tragen bislang nur die deutsche Übersetzung, `de`, die in der App
 * aufklappbar ist – aus der Zeit, als der Kurs für deutschsprachige Lernende
 * gedacht war. Die Vokabellisten sind seither sprachneutraler: Jeder Eintrag
 * trägt `en` als Brückensprache plus `de`, damit auch nicht-deutschsprachige
 * Lernende eine verständliche Übersetzung sehen (siehe `VocabListBlock` in
 * `workbook.ts`); weitere Sprachen (es entfällt hier als Zielsprache, fr, it)
 * fehlen noch. Tabellen bleiben spanisch: Sie enthalten den zu lernenden
 * Stoff selbst.
 *
 * Die Illustrationen sind dieselben vier Szenen wie im Deutschband (siehe
 * `SceneIllustrations.tsx`) – sie enthalten keinen Text und passen thematisch,
 * weil beide Kapitel dieselben vier Situationen durchlaufen.
 *
 * Sämtliche Texte sind eigenständig verfasst.
 */
const v = 1;

export const SPANISH_BEGINNER_1_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Begrüßung: Wörter, dann die Anrede, dann die Tageszeit.
  {
    order: 1,
    title: '¡Hola!',
    subtitle: 'Begrüßen und verabschieden',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'es-k1-h1', type: 'HEADING', level: 1, text: '¡Hola!' },
        {
          id: 'es-k1-image',
          type: 'IMAGE',
          url: 'illustration:greeting-office',
          alt: 'Zwei Personen begrüßen sich morgens im Büro, eine Sprechblase mit drei Punkten schwebt zwischen ihnen.',
          caption: 'Un saludo por la mañana en la oficina.',
        },
        {
          id: 'es-k1-intro',
          type: 'TEXT',
          text: 'Las personas se saludan todos los días. Cómo lo hacen depende de la hora del día y de si se conocen bien o no. Escuche y lea los dos diálogos.',
          translations: {
            de: 'Menschen begrüßen sich jeden Tag. Wie sie das tun, hängt von der Tageszeit ab – und davon, ob sie sich gut kennen oder nicht. Hören und lesen Sie die beiden Dialoge.',
          },
        },
        {
          id: 'es-k1-dlg1',
          type: 'DIALOGUE',
          title: 'En la oficina – por la mañana, a las nueve',
          lines: [
            { speaker: 'Sra. Herrera', text: 'Buenos días, señor Okafor.' },
            { speaker: 'Sr. Okafor', text: 'Buenos días, señora Herrera. ¿Cómo está usted?' },
            { speaker: 'Sra. Herrera', text: 'Muy bien, gracias. ¿Y usted?' },
            { speaker: 'Sr. Okafor', text: 'Bien también, gracias.' },
          ],
        },
        {
          id: 'es-k1-dlg2',
          type: 'DIALOGUE',
          title: 'En la escuela de idiomas – dos compañeros de curso',
          lines: [
            { speaker: 'Mira', text: '¡Hola, Jonas! ¿Qué tal?' },
            { speaker: 'Jonas', text: '¡Hola, Mira! Bien, gracias. ¿Y tú?' },
            { speaker: 'Mira', text: 'Muy bien. ¡Hasta luego!' },
            { speaker: 'Jonas', text: '¡Adiós!' },
          ],
        },
        {
          id: 'es-k1-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: saludos y despedidas',
          items: [
            { term: 'buenos días', translations: { en: 'good morning', de: 'guten Morgen' }, example: '¡Buenos días, señora Herrera!' },
            { term: 'buenas tardes', translations: { en: 'good afternoon', de: 'guten Tag (nachmittags)' }, example: '¡Buenas tardes!' },
            { term: 'buenas noches', translations: { en: 'good evening, good night', de: 'guten Abend, gute Nacht' } },
            { term: 'hola', translations: { en: 'hi / hello', de: 'hallo' }, example: '¡Hola, Jonas!' },
            { term: 'adiós', translations: { en: 'goodbye', de: 'auf Wiedersehen' } },
            { term: 'hasta luego', translations: { en: 'see you later', de: 'bis später' } },
            { term: 'hasta mañana', translations: { en: 'see you tomorrow', de: 'bis morgen' } },
            { term: '¿cómo está usted?', translations: { en: 'how are you? (formal)', de: 'wie geht es Ihnen?' } },
            { term: '¿qué tal?', translations: { en: 'how are you? (informal)', de: 'wie geht’s?' } },
            { term: 'gracias', translations: { en: 'thank you', de: 'danke' } },
          ],
        },
        {
          id: 'es-a1-match',
          type: 'MATCHING',
          instruction: 'Relacione: ¿qué respuesta corresponde a cada saludo?',
          left: [
            { id: 'l1', text: '¡Buenos días!' },
            { id: 'l2', text: '¿Cómo está usted?' },
            { id: 'l3', text: '¡Adiós!' },
            { id: 'l4', text: '¿Qué tal?' },
          ],
          right: [
            { id: 'r1', text: '¡Buenos días!' },
            { id: 'r2', text: 'Muy bien, gracias. ¿Y usted?' },
            { id: 'r3', text: '¡Hasta luego!' },
            { id: 'r4', text: 'Bien, gracias. ¿Y tú?' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'es-k1-info-tuUsted',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: '¿tú o usted?',
          text: 'En español hay dos formas de tratamiento. «usted» es formal: para personas desconocidas, en el trabajo y en las oficinas públicas. «tú» es familiar: para la familia, los amigos y, muy a menudo, entre gente joven. Con «usted» se dice «¿Cómo está usted?»; con «tú», «¿Cómo estás?».',
          translations: {
            de: {
              title: 'tú oder usted?',
              text: 'Im Spanischen gibt es zwei Anredeformen. „usted“ ist förmlich: für fremde Personen, im Beruf und bei Behörden. „tú“ ist vertraut: für Familie, Freunde und sehr oft unter jungen Leuten. Zu „usted“ gehört „¿Cómo está usted?“, zu „tú“ gehört „¿Cómo estás?“.',
            },
          },
          table: {
            headers: ['', 'tú (familiar)', 'usted (formal)'],
            rows: [
              ['Saludo', '¡Hola!', 'Buenos días.'],
              ['Pregunta', '¿Cómo estás?', '¿Cómo está usted?'],
              ['Nombre', '¿Cómo te llamas?', '¿Cómo se llama usted?'],
              ['Despedida', '¡Hasta luego!', 'Adiós, buenos días.'],
            ],
          },
        },
        {
          id: 'es-a1-choice-anrede',
          type: 'CHOICE',
          instruction: 'Lea el cuadro otra vez y elija.',
          question: 'Usted empieza hoy a trabajar. ¿Cómo saluda a su jefa?',
          options: [
            { id: 'o1', text: '¡Hola! ¿Qué tal?' },
            { id: 'o2', text: 'Buenos días. ¿Cómo está usted?' },
            { id: 'o3', text: '¿Cómo te llamas?' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation:
            'En el primer día de trabajo la jefa es todavía una persona desconocida: se usa «usted». «¿Qué tal?» y «¿Cómo te llamas?» son formas con «tú».',
          explanationTranslations: {
            de: 'Am ersten Arbeitstag ist die Chefin noch eine fremde Person – man siezt sie, also „usted“. „¿Qué tal?“ und „¿Cómo te llamas?“ sind Formen des „tú“.',
          },
        },
        {
          id: 'es-k1-info-horas',
          type: 'INFO',
          variant: 'CULTURE',
          title: '¿Qué saludo a qué hora?',
          text: 'La hora del día decide qué saludo formal corresponde. Atención: «buenas tardes» empieza más tarde que el «guten Tag» alemán, normalmente después de la comida, hacia las dos o las tres. Y «buenas noches» sirve tanto para saludar al llegar como para despedirse.',
          translations: {
            de: {
              title: 'Welche Begrüßung wann?',
              text: 'Die Tageszeit entscheidet, welche förmliche Begrüßung passt. Achtung: „buenas tardes“ beginnt später als das deutsche „Guten Tag“, üblicherweise nach dem Mittagessen, also gegen zwei oder drei. Und „buenas noches“ dient sowohl zur Begrüßung als auch zum Abschied.',
            },
          },
          table: {
            headers: ['Hora', 'Saludo'],
            rows: [
              ['00:00 – 14:00', 'Buenos días.'],
              ['14:00 – 21:00', 'Buenas tardes.'],
              ['21:00 – 00:00', 'Buenas noches.'],
            ],
          },
        },
        {
          id: 'es-a1-choice-hora',
          type: 'CHOICE',
          instruction: 'Elija el saludo correcto.',
          question: 'Son las once de la mañana. Usted entra en una panadería. ¿Qué dice?',
          options: [
            { id: 'p1', text: 'Buenas noches.' },
            { id: 'p2', text: 'Buenos días.' },
            { id: 'p3', text: 'Buenas tardes.' },
          ],
          multiple: false,
          solution: ['p2'],
          explanation:
            'Hasta la hora de comer se dice «buenos días». «Buenas tardes» empieza por la tarde, «buenas noches» ya de noche.',
          explanationTranslations: {
            de: 'Bis zur Mittagszeit sagt man „buenos días“. „Buenas tardes“ beginnt am Nachmittag, „buenas noches“ erst abends.',
          },
        },
        {
          id: 'es-a1-audio',
          type: 'AUDIO',
          title: 'Escuche: cuatro saludos',
          audioUrl: 'placeholder://es-k1-saludos',
          durationSec: 22,
          transcript:
            '¡Buenos días! – ¡Buenas tardes! – ¡Buenas noches! – ¡Hola!\nRepita los cuatro saludos en voz alta. Fíjese en la entonación: la voz baja un poco al final de la frase.',
        },
        {
          id: 'es-a1-order',
          type: 'ORDERING',
          instruction: 'Ponga las palabras en el orden correcto.',
          items: [
            { id: 'g1', text: 'Buenas' },
            { id: 'g2', text: 'tardes,' },
            { id: 'g3', text: 'señora' },
            { id: 'g4', text: 'Herrera.' },
          ],
          solution: ['g1', 'g2', 'g3', 'g4'],
        },
        {
          id: 'es-a1-cloze',
          type: 'CLOZE',
          instruction: 'Complete el diálogo. Las palabras del cuadro le ayudan.',
          wordBank: ['Buenos', 'está', 'gracias', 'Adiós'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '▸ ' },
            { kind: 'GAP', gapId: 'g1', solution: ['Buenos'], width: 8 },
            { kind: 'TEXT', text: ' días, señora Herrera. ¿Cómo ' },
            { kind: 'GAP', gapId: 'g2', solution: ['está'], width: 6 },
            { kind: 'TEXT', text: ' usted?\n▸ Muy bien, ' },
            { kind: 'GAP', gapId: 'g3', solution: ['gracias'], width: 9 },
            { kind: 'TEXT', text: '. ¡Hasta mañana!\n▸ ' },
            { kind: 'GAP', gapId: 'g4', solution: ['Adiós'], width: 7 },
            { kind: 'TEXT', text: '.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – erst die Verbendungen üben, dann llamarse.
  {
    order: 2,
    title: 'Me llamo…',
    subtitle: 'Sich vorstellen, Verben im Präsens',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'es-k2-h1', type: 'HEADING', level: 1, text: 'Me llamo…' },
        {
          id: 'es-k2-image',
          type: 'IMAGE',
          url: 'illustration:introduction',
          alt: 'Eine Person stellt sich einer Gruppe vor, die anderen sitzen im Halbkreis.',
          caption: 'El primer día de clase.',
        },
        {
          id: 'es-k2-intro',
          type: 'TEXT',
          text: 'En el primer día de curso todos se presentan: el nombre, el país, la ciudad. Lea el diálogo y fíjese en las terminaciones de los verbos.',
          translations: {
            de: 'Am ersten Kurstag stellen sich alle vor: Name, Land, Stadt. Lesen Sie den Dialog und achten Sie auf die Endungen der Verben.',
          },
        },
        {
          id: 'es-k2-dlg',
          type: 'DIALOGUE',
          title: 'El primer día de curso',
          lines: [
            { speaker: 'Profesora', text: 'Buenos días. Me llamo Carmen Ruiz y soy la profesora. ¿Y usted?' },
            { speaker: 'Nadia', text: 'Me llamo Nadia Salem. Soy de Marruecos.' },
            { speaker: 'Profesora', text: 'Bienvenida, Nadia. ¿Estudia usted español desde hace mucho?' },
            { speaker: 'Nadia', text: 'No, solo desde septiembre.' },
            { speaker: 'Tomás', text: 'Hola, Nadia. Yo me llamo Tomás. ¿Dónde vives?' },
            { speaker: 'Nadia', text: 'Vivo aquí, en Valencia. ¿Y tú?' },
            { speaker: 'Tomás', text: 'Yo también. En casa hablamos portugués.' },
          ],
        },
        {
          id: 'es-k2-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: presentarse',
          items: [
            { term: 'llamarse', translations: { en: 'to be called', de: 'heißen' }, example: 'Me llamo Nadia.' },
            { term: 'el nombre', translations: { en: 'name', de: 'der Name' } },
            { term: 'el apellido', translations: { en: 'surname', de: 'der Nachname' } },
            { term: 'ser', translations: { en: 'to be', de: 'sein' }, example: 'Soy la profesora.' },
            { term: 'vivir', translations: { en: 'to live', de: 'wohnen, leben' }, example: 'Vivo en Valencia.' },
            { term: 'hablar', translations: { en: 'to speak', de: 'sprechen' }, example: '¿Habláis español?' },
            { term: 'estudiar', translations: { en: 'to learn, to study', de: 'lernen, studieren' } },
            { term: 'bienvenido', translations: { en: 'welcome', de: 'willkommen' } },
            { term: 'un poco', translations: { en: 'a little', de: 'ein bisschen' } },
            { term: 'en casa', translations: { en: 'at home', de: 'zu Hause' } },
          ],
        },
        {
          id: 'es-k2-info-presente',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'El presente: verbos en -ar',
          text: 'Los verbos españoles terminan en -ar, -er o -ir. Se quita esa terminación y se añade la del sujeto. El grupo más grande es el de los verbos en -ar, como «hablar». Como la terminación ya indica quién habla, el pronombre («yo», «tú») normalmente se omite.',
          translations: {
            de: {
              title: 'Das Präsens: Verben auf -ar',
              text: 'Spanische Verben enden auf -ar, -er oder -ir. Man streicht diese Endung und hängt die Endung der Person an. Die größte Gruppe sind die Verben auf -ar wie „hablar“. Weil die Endung schon zeigt, wer spricht, lässt man das Pronomen („yo“, „tú“) normalerweise weg.',
            },
          },
          table: {
            headers: ['Persona', 'hablar', 'estudiar'],
            rows: [
              ['yo', 'hablo', 'estudio'],
              ['tú', 'hablas', 'estudias'],
              ['él / ella / usted', 'habla', 'estudia'],
              ['nosotros', 'hablamos', 'estudiamos'],
              ['vosotros', 'habláis', 'estudiáis'],
              ['ellos / ellas / ustedes', 'hablan', 'estudian'],
            ],
          },
        },
        {
          id: 'es-a2-cloze',
          type: 'CLOZE',
          instruction: 'Complete con la forma correcta del verbo entre paréntesis.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Yo ' },
            { kind: 'GAP', gapId: 'v1', solution: ['hablo'], hint: 'hablar', width: 8 },
            { kind: 'TEXT', text: ' alemán y un poco de español.\nNadia ' },
            { kind: 'GAP', gapId: 'v2', solution: ['estudia'], hint: 'estudiar', width: 9 },
            { kind: 'TEXT', text: ' español en Valencia.\nNosotros ' },
            { kind: 'GAP', gapId: 'v3', solution: ['hablamos'], hint: 'hablar', width: 10 },
            { kind: 'TEXT', text: ' portugués en casa.\n¿' },
            { kind: 'GAP', gapId: 'v4', solution: ['estudias'], hint: 'estudiar', width: 10 },
            { kind: 'TEXT', text: ' tú también aquí?' },
          ],
        },
        {
          id: 'es-k2-info-llamarse',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'llamarse: un verbo con pronombre',
          text: 'Para decir el nombre se usa «llamarse», literalmente «sich nennen». El pronombre cambia con la persona y va delante del verbo: me, te, se. Por eso se dice «me llamo», no «yo llamo».',
          translations: {
            de: {
              title: 'llamarse: ein Verb mit Pronomen',
              text: 'Um den Namen zu nennen, verwendet man „llamarse“, wörtlich „sich nennen“. Das Pronomen ändert sich mit der Person und steht vor dem Verb: me, te, se. Deshalb heißt es „me llamo“ und nicht „yo llamo“.',
            },
          },
          table: {
            headers: ['Pregunta', 'Respuesta'],
            rows: [
              ['¿Cómo te llamas?', 'Me llamo Tomás.'],
              ['¿Cómo se llama usted?', 'Me llamo Carmen Ruiz.'],
              ['¿Cómo se llama él?', 'Se llama Jonas.'],
            ],
          },
        },
        {
          id: 'es-a2-match',
          type: 'MATCHING',
          instruction: 'Relacione la pregunta con la respuesta.',
          left: [
            { id: 'q1', text: '¿Cómo te llamas?' },
            { id: 'q2', text: '¿De dónde eres?' },
            { id: 'q3', text: '¿Dónde vives?' },
            { id: 'q4', text: '¿Qué idiomas hablas?' },
          ],
          right: [
            { id: 'a1', text: 'Me llamo Nadia.' },
            { id: 'a2', text: 'Soy de Marruecos.' },
            { id: 'a3', text: 'Vivo en Valencia.' },
            { id: 'a4', text: 'Hablo árabe y francés.' },
          ],
          solution: [
            { leftId: 'q1', rightId: 'a1' },
            { leftId: 'q2', rightId: 'a2' },
            { leftId: 'q3', rightId: 'a3' },
            { leftId: 'q4', rightId: 'a4' },
          ],
        },
        {
          id: 'es-a2-choice',
          type: 'CHOICE',
          instruction: 'Elija la forma correcta.',
          question: 'Usted habla con una persona desconocida. ¿Cómo pregunta el nombre?',
          options: [
            { id: 'n1', text: '¿Cómo te llamas?' },
            { id: 'n2', text: '¿Cómo se llama usted?' },
            { id: 'n3', text: '¿Cómo me llamo?' },
          ],
          multiple: false,
          solution: ['n2'],
          explanation:
            'Con una persona desconocida se usa «usted», y entonces el pronombre del verbo es «se»: «¿Cómo se llama usted?».',
          explanationTranslations: {
            de: 'Bei einer fremden Person verwendet man „usted“, und dann lautet das Pronomen des Verbs „se“: „¿Cómo se llama usted?“.',
          },
        },
        {
          id: 'es-a2-order',
          type: 'ORDERING',
          instruction: 'Forme una frase correcta.',
          items: [
            { id: 's1', text: 'Nadia' },
            { id: 's2', text: 'estudia' },
            { id: 's3', text: 'español' },
            { id: 's4', text: 'en Valencia.' },
          ],
          solution: ['s1', 's2', 's3', 's4'],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – Herkunft: ser für das Dauerhafte, estar für den Ort.
  {
    order: 3,
    title: '¿De dónde eres?',
    subtitle: 'Herkunft und Wohnort',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'es-k3-h1', type: 'HEADING', level: 1, text: '¿De dónde eres?' },
        {
          id: 'es-k3-image',
          type: 'IMAGE',
          url: 'illustration:world-map',
          alt: 'Eine Weltkarte mit Markierungen auf mehreren Kontinenten.',
          caption: 'El español se habla en veinte países.',
        },
        {
          id: 'es-k3-dlg',
          type: 'DIALOGUE',
          title: 'En la pausa',
          lines: [
            { speaker: 'Tomás', text: 'Nadia, ¿de dónde eres?' },
            { speaker: 'Nadia', text: 'Soy de Marruecos, de Casablanca. ¿Y tú?' },
            { speaker: 'Tomás', text: 'Soy portugués, pero vivo aquí desde hace tres años.' },
            { speaker: 'Nadia', text: '¿Y dónde está tu familia ahora?' },
            { speaker: 'Tomás', text: 'Mi familia está en Lisboa. Yo estoy aquí solo.' },
          ],
        },
        {
          id: 'es-k3-info-serEstar',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'ser de – vivir en – estar en',
          text: 'El español tiene dos verbos para «sein». «ser» dice lo que alguien es de forma duradera: el origen, la profesión, la nacionalidad. «estar» dice dónde está alguien en este momento. Por eso: «Soy de Portugal» (origen, no cambia), pero «Estoy en Valencia» (lugar, hoy aquí, mañana quizá no). Para el lugar donde uno tiene su casa se usa «vivir en».',
          translations: {
            de: {
              title: 'ser de – vivir en – estar en',
              text: 'Das Spanische hat zwei Verben für „sein“. „ser“ sagt, was jemand dauerhaft ist: Herkunft, Beruf, Nationalität. „estar“ sagt, wo jemand sich gerade befindet. Daher: „Soy de Portugal“ (Herkunft, ändert sich nicht), aber „Estoy en Valencia“ (Ort, heute hier, morgen vielleicht nicht). Für den Ort, an dem man wohnt, nimmt man „vivir en“.',
            },
          },
          table: {
            headers: ['Persona', 'ser', 'estar', 'vivir'],
            rows: [
              ['yo', 'soy', 'estoy', 'vivo'],
              ['tú', 'eres', 'estás', 'vives'],
              ['él / ella / usted', 'es', 'está', 'vive'],
              ['nosotros', 'somos', 'estamos', 'vivimos'],
              ['vosotros', 'sois', 'estáis', 'vivís'],
              ['ellos / ellas / ustedes', 'son', 'están', 'viven'],
            ],
          },
        },
        {
          id: 'es-a3-cloze',
          type: 'CLOZE',
          instruction: 'Complete con «ser», «estar» o «vivir» en la forma correcta.',
          wordBank: ['eres', 'soy', 'vivo', 'está', 'viven'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '▸ ¿De dónde ' },
            { kind: 'GAP', gapId: 'e1', solution: ['eres'], width: 7 },
            { kind: 'TEXT', text: ', Nadia?\n▸ ' },
            { kind: 'GAP', gapId: 'e2', solution: ['Soy'], width: 6 },
            { kind: 'TEXT', text: ' de Marruecos, pero ahora ' },
            { kind: 'GAP', gapId: 'e3', solution: ['vivo'], width: 6 },
            { kind: 'TEXT', text: ' en Valencia.\n▸ ¿Y dónde ' },
            { kind: 'GAP', gapId: 'e4', solution: ['está'], width: 6 },
            { kind: 'TEXT', text: ' tu familia ahora?\n▸ Mis padres ' },
            { kind: 'GAP', gapId: 'e5', solution: ['viven'], width: 7 },
            { kind: 'TEXT', text: ' en Casablanca.' },
          ],
        },
        {
          id: 'es-k3-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: países y nacionalidades',
          items: [
            { term: 'Alemania', translations: { en: 'Germany', de: 'Deutschland' }, example: 'Soy de Alemania.' },
            { term: 'alemán / alemana', translations: { en: 'German', de: 'deutsch' } },
            { term: 'España', translations: { en: 'Spain', de: 'Spanien' } },
            { term: 'español / española', translations: { en: 'Spanish', de: 'spanisch' } },
            { term: 'México', translations: { en: 'Mexico', de: 'Mexiko' } },
            { term: 'mexicano / mexicana', translations: { en: 'Mexican', de: 'mexikanisch' } },
            { term: 'Argentina', translations: { en: 'Argentina', de: 'Argentinien' } },
            { term: 'argentino / argentina', translations: { en: 'Argentinian', de: 'argentinisch' } },
            { term: 'el país', translations: { en: 'country', de: 'das Land' } },
            { term: 'el idioma', translations: { en: 'language', de: 'die Sprache' } },
          ],
        },
        {
          id: 'es-a3-match',
          type: 'MATCHING',
          instruction: 'Relacione el país con la nacionalidad.',
          left: [
            { id: 'c1', text: 'Alemania' },
            { id: 'c2', text: 'México' },
            { id: 'c3', text: 'Portugal' },
            { id: 'c4', text: 'Argentina' },
          ],
          right: [
            { id: 'd1', text: 'alemana' },
            { id: 'd2', text: 'mexicana' },
            { id: 'd3', text: 'portuguesa' },
            { id: 'd4', text: 'argentina' },
          ],
          solution: [
            { leftId: 'c1', rightId: 'd1' },
            { leftId: 'c2', rightId: 'd2' },
            { leftId: 'c3', rightId: 'd3' },
            { leftId: 'c4', rightId: 'd4' },
          ],
        },
        {
          id: 'es-a3-choice',
          type: 'CHOICE',
          instruction: 'Elija la frase correcta.',
          question: 'Usted nació en Hamburgo y ahora pasa una semana en Madrid. ¿Qué dice?',
          options: [
            { id: 'w1', text: 'Estoy de Alemania y soy en Madrid.' },
            { id: 'w2', text: 'Soy de Alemania y estoy en Madrid.' },
            { id: 'w3', text: 'Soy de Alemania y soy en Madrid.' },
          ],
          multiple: false,
          solution: ['w2'],
          explanation:
            'El origen no cambia, por eso «ser»: «soy de Alemania». El lugar donde uno está ahora sí cambia, por eso «estar»: «estoy en Madrid».',
          explanationTranslations: {
            de: 'Die Herkunft ändert sich nicht, deshalb „ser“: „soy de Alemania“. Der Ort, an dem man gerade ist, ändert sich schon, deshalb „estar“: „estoy en Madrid“.',
          },
        },
        {
          id: 'es-a3-order',
          type: 'ORDERING',
          instruction: 'Forme una pregunta correcta.',
          items: [
            { id: 'p1', text: '¿De' },
            { id: 'p2', text: 'dónde' },
            { id: 'p3', text: 'es' },
            { id: 'p4', text: 'usted?' },
          ],
          solution: ['p1', 'p2', 'p3', 'p4'],
        },
        {
          id: 'es-k3-info-cultura',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'El español no se habla solo en España',
          text: 'El español es lengua oficial en veinte países y lo hablan más de quinientos millones de personas. La mayoría no vive en España, sino en América: México es, con diferencia, el país con más hispanohablantes. Por eso hay muchas variedades, y ninguna es «la correcta».',
          translations: {
            de: {
              title: 'Spanisch spricht man nicht nur in Spanien',
              text: 'Spanisch ist in zwanzig Ländern Amtssprache und wird von über fünfhundert Millionen Menschen gesprochen. Die meisten leben nicht in Spanien, sondern in Amerika: Mexiko ist mit Abstand das Land mit den meisten Spanischsprechenden. Deshalb gibt es viele Varietäten – und keine davon ist „die richtige“.',
            },
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – Alphabet und Zahlen: erst buchstabieren, dann zählen.
  {
    order: 4,
    title: 'El alfabeto y los números',
    subtitle: 'Buchstabieren und zählen von 0 bis 20',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'es-k4-h1', type: 'HEADING', level: 1, text: 'El alfabeto y los números' },
        {
          id: 'es-k4-image',
          type: 'IMAGE',
          url: 'illustration:alphabet-numbers',
          alt: 'Buchstaben und Ziffern in losen Reihen angeordnet.',
          caption: 'Veintisiete letras y unos números fáciles de aprender.',
        },
        {
          id: 'es-k4-intro',
          type: 'TEXT',
          text: 'Al reservar una habitación o al dar un nombre por teléfono hay que deletrear. El alfabeto español tiene veintisiete letras: las mismas que el alemán, más la «ñ», y sin las vocales con diéresis alemanas.',
          translations: {
            de: 'Wenn man ein Zimmer reserviert oder am Telefon einen Namen angibt, muss man buchstabieren. Das spanische Alphabet hat siebenundzwanzig Buchstaben: dieselben wie das deutsche, dazu das „ñ“, und ohne die deutschen Umlaute.',
          },
        },
        {
          id: 'es-k4-info-letras',
          type: 'INFO',
          variant: 'TIP',
          title: 'Letras especiales',
          text: 'Algunas letras tienen un nombre que sorprende, y dos combinaciones se pronuncian como un solo sonido. La «h» no se pronuncia nunca.',
          translations: {
            de: {
              title: 'Besondere Buchstaben',
              text: 'Einige Buchstaben haben einen überraschenden Namen, und zwei Kombinationen werden wie ein einziger Laut gesprochen. Das „h“ wird nie gesprochen.',
            },
          },
          table: {
            headers: ['Letra', 'Se dice', 'Ejemplo'],
            rows: [
              ['ñ', 'eñe', 'España'],
              ['j', 'jota', 'Jorge'],
              ['h', 'hache (muda)', 'hola'],
              ['ll', 'doble ele', 'llamar'],
              ['rr', 'erre doble', 'perro'],
              ['y', 'i griega / ye', 'yo'],
            ],
          },
        },
        {
          id: 'es-k4-dlg',
          type: 'DIALOGUE',
          title: 'Por teléfono',
          lines: [
            { speaker: 'Recepción', text: 'Hotel Miramar, buenos días.' },
            { speaker: 'Sra. Salem', text: 'Buenos días. Quisiera reservar una habitación.' },
            { speaker: 'Recepción', text: 'Con mucho gusto. ¿Su apellido, por favor?' },
            { speaker: 'Sra. Salem', text: 'Salem.' },
            { speaker: 'Recepción', text: '¿Cómo se escribe?' },
            { speaker: 'Sra. Salem', text: 'Ese, a, ele, e, eme.' },
            { speaker: 'Recepción', text: 'Perfecto, gracias.' },
          ],
        },
        {
          id: 'es-a4-choice',
          type: 'CHOICE',
          instruction: 'Elija la respuesta correcta.',
          question: '¿Cómo se deletrea el nombre «Muñoz»?',
          options: [
            { id: 'b1', text: 'eme, u, ene, o, zeta' },
            { id: 'b2', text: 'eme, u, eñe, o, zeta' },
            { id: 'b3', text: 'eme, u, eñe, o, ese' },
          ],
          multiple: false,
          solution: ['b2'],
          explanation:
            '«Muñoz» lleva «ñ», que se llama «eñe», y termina en «z», que se llama «zeta».',
          explanationTranslations: {
            de: '„Muñoz“ enthält das „ñ“, das „eñe“ heißt, und endet auf „z“, das „zeta“ heißt.',
          },
        },
        {
          id: 'es-k4-info-numeros',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Los números del 0 al 20',
          text: 'Del cero al quince cada número tiene su propia palabra. A partir del dieciséis se forman con «diez + y + unidad», pero se escriben en una sola palabra: dieciséis, diecisiete, dieciocho, diecinueve.',
          translations: {
            de: {
              title: 'Die Zahlen von 0 bis 20',
              text: 'Von null bis fünfzehn hat jede Zahl ein eigenes Wort. Ab sechzehn werden sie aus „zehn + und + Einer“ gebildet, aber in einem Wort geschrieben: dieciséis, diecisiete, dieciocho, diecinueve.',
            },
          },
          table: {
            headers: ['0–6', '7–13', '14–20'],
            rows: [
              ['0 cero', '7 siete', '14 catorce'],
              ['1 uno', '8 ocho', '15 quince'],
              ['2 dos', '9 nueve', '16 dieciséis'],
              ['3 tres', '10 diez', '17 diecisiete'],
              ['4 cuatro', '11 once', '18 dieciocho'],
              ['5 cinco', '12 doce', '19 diecinueve'],
              ['6 seis', '13 trece', '20 veinte'],
            ],
          },
        },
        {
          id: 'es-a4-audio',
          type: 'AUDIO',
          title: 'Escuche: los números del 0 al 20',
          audioUrl: 'placeholder://es-k1-numeros',
          durationSec: 38,
          transcript:
            'cero – uno – dos – tres – cuatro – cinco – seis – siete – ocho – nueve – diez – once – doce – trece – catorce – quince – dieciséis – diecisiete – dieciocho – diecinueve – veinte',
        },
        {
          id: 'es-a4-cloze',
          type: 'CLOZE',
          instruction: 'Escriba el número en letras.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Tengo ' },
            { kind: 'GAP', gapId: 'n1', solution: ['tres'], hint: '3', width: 8 },
            { kind: 'TEXT', text: ' hermanos.\nEl curso empieza a las ' },
            { kind: 'GAP', gapId: 'n2', solution: ['nueve'], hint: '9', width: 8 },
            { kind: 'TEXT', text: '.\nEn la clase hay ' },
            { kind: 'GAP', gapId: 'n3', solution: ['doce'], hint: '12', width: 8 },
            { kind: 'TEXT', text: ' personas.\nMi hermana tiene ' },
            { kind: 'GAP', gapId: 'n4', solution: ['dieciséis', 'dieciseis'], hint: '16', width: 11 },
            { kind: 'TEXT', text: ' años.' },
          ],
        },
        {
          id: 'es-a4-match',
          type: 'MATCHING',
          instruction: 'Relacione la cifra con la palabra.',
          left: [
            { id: 'z1', text: '4' },
            { id: 'z2', text: '11' },
            { id: 'z3', text: '15' },
            { id: 'z4', text: '20' },
          ],
          right: [
            { id: 'y1', text: 'cuatro' },
            { id: 'y2', text: 'once' },
            { id: 'y3', text: 'quince' },
            { id: 'y4', text: 'veinte' },
          ],
          solution: [
            { leftId: 'z1', rightId: 'y1' },
            { leftId: 'z2', rightId: 'y2' },
            { leftId: 'z3', rightId: 'y3' },
            { leftId: 'z4', rightId: 'y4' },
          ],
        },
        {
          id: 'es-a4-order',
          type: 'ORDERING',
          instruction: 'Ordene los números de menor a mayor.',
          items: [
            { id: 'o1', text: 'siete' },
            { id: 'o2', text: 'trece' },
            { id: 'o3', text: 'diecisiete' },
            { id: 'o4', text: 'veinte' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4'],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – Rückblick: alles aus dem Kapitel noch einmal gemischt.
  {
    order: 5,
    title: '¿Ya sabes hacerlo?',
    subtitle: 'Rückblick auf das ganze Kapitel',
    estimatedMinutes: 18,
    content: {
      version: v,
      blocks: [
        { id: 'es-a5-h1', type: 'HEADING', level: 1, text: '¿Ya sabes hacerlo?' },
        {
          id: 'es-a5-intro',
          type: 'TEXT',
          text: 'Aquí vuelve todo el capítulo: saludar, presentarse, decir de dónde es uno, deletrear y contar. Si algo no sale, vuelva a la página correspondiente – no pasa nada.',
          translations: {
            de: 'Hier kommt das ganze Kapitel noch einmal: begrüßen, sich vorstellen, die Herkunft nennen, buchstabieren und zählen. Wenn etwas nicht klappt, gehen Sie zurück auf die entsprechende Seite – das ist völlig normal.',
          },
        },
        {
          id: 'es-a5-cloze',
          type: 'CLOZE',
          instruction: 'Complete la presentación.',
          wordBank: ['llamo', 'Soy', 'vivo', 'hablo', 'Encantada'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '¡Hola! Me ' },
            { kind: 'GAP', gapId: 'f1', solution: ['llamo'], width: 8 },
            { kind: 'TEXT', text: ' Nadia Salem. ' },
            { kind: 'GAP', gapId: 'f2', solution: ['Soy'], width: 6 },
            { kind: 'TEXT', text: ' de Marruecos, de Casablanca. Ahora ' },
            { kind: 'GAP', gapId: 'f3', solution: ['vivo'], width: 6 },
            { kind: 'TEXT', text: ' en Valencia y estudio español. En casa ' },
            { kind: 'GAP', gapId: 'f4', solution: ['hablo'], width: 7 },
            { kind: 'TEXT', text: ' árabe y francés. ' },
            { kind: 'GAP', gapId: 'f5', solution: ['Encantada'], width: 11 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'es-a5-match',
          type: 'MATCHING',
          instruction: 'Relacione la situación con la frase adecuada.',
          left: [
            { id: 'm1', text: 'Son las nueve de la mañana, usted entra en la oficina.' },
            { id: 'm2', text: 'Un compañero de curso le pregunta el nombre.' },
            { id: 'm3', text: 'Usted se despide hasta el día siguiente.' },
            { id: 'm4', text: 'En el hotel le piden su apellido.' },
          ],
          right: [
            { id: 'x1', text: 'Buenos días. ¿Cómo está usted?' },
            { id: 'x2', text: 'Me llamo Tomás. ¿Y tú?' },
            { id: 'x3', text: '¡Hasta mañana!' },
            { id: 'x4', text: 'Salem: ese, a, ele, e, eme.' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'x1' },
            { leftId: 'm2', rightId: 'x2' },
            { leftId: 'm3', rightId: 'x3' },
            { leftId: 'm4', rightId: 'x4' },
          ],
        },
        {
          id: 'es-a5-choice',
          type: 'CHOICE',
          instruction: 'Marque todas las frases correctas.',
          question: '¿Cuáles de estas frases son correctas?',
          options: [
            { id: 'r1', text: 'Soy de Alemania.' },
            { id: 'r2', text: 'Yo llamo Tomás.' },
            { id: 'r3', text: 'Vivo en Valencia.' },
            { id: 'r4', text: 'Estoy portugués.' },
          ],
          multiple: true,
          solution: ['r1', 'r3'],
          explanation:
            '«Yo llamo Tomás» necesita el pronombre: «me llamo Tomás». Y la nacionalidad va con «ser», no con «estar»: «soy portugués».',
          explanationTranslations: {
            de: '„Yo llamo Tomás“ braucht das Pronomen: „me llamo Tomás“. Und die Nationalität steht mit „ser“, nicht mit „estar“: „soy portugués“.',
          },
        },
        {
          id: 'es-a5-writing',
          type: 'WRITING',
          instruction: 'Preséntese.',
          prompt:
            'Escriba de tres a cinco frases: ¿Cómo se llama? ¿De dónde es? ¿Dónde vive? ¿Qué idiomas habla? Use los verbos llamarse, ser, vivir y hablar.',
          minWords: 15,
          maxWords: 80,
          aiFeedback: true,
          sampleAnswer:
            '¡Hola! Me llamo Jan Becker. Soy de Alemania, de Hamburgo. Ahora vivo en Múnich y estudio español. En casa hablo alemán y un poco de inglés. ¡Encantado!',
        },
      ],
    },
  },
];
