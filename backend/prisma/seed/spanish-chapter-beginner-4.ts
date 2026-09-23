import type { UnitSeed } from './chapter-beginner-1';

/**
 * Spanisch, Beginner, Kapitel 4: „La rutina diaria“
 *
 * Fünf Seiten, Aufbau wie in den Kapiteln davor.
 *
 * Das Kapitel bringt zum ersten Mal das volle Präsens: Seite 1 die drei
 * regelmäßigen Endungssätze, Seite 3 die reflexiven Verben. Dazwischen liegt
 * die Uhrzeit – nicht aus Verlegenheit, sondern weil ein Tagesablauf ohne
 * Zeitangabe eine Liste bleibt. Erst „a las siete“ macht aus „me levanto“
 * einen Satz, den man über sich selbst sagen will.
 *
 * Die reflexiven Verben sind die eigentliche Hürde, und zwar nicht wegen der
 * Endungen – die sind dieselben wie auf Seite 1 –, sondern wegen des
 * Pronomens davor, das im Deutschen teils fehlt: „ich stehe auf“ hat kein
 * „mich“, „me levanto“ schon. Seite 3 stellt deshalb die deutschen
 * Entsprechungen daneben, damit sichtbar wird, wo die Sprachen auseinander
 * laufen.
 *
 * Ein paar Verben mit Stammwechsel (despertarse, acostarse, vestirse) stehen
 * hier schon mit, weil ohne sie kein Morgen beschreibbar ist. Sie sind als
 * Einzelformen zum Mitlernen gesetzt; das System dahinter kommt später.
 *
 * Seiten einsprachig spanisch, Erklärungen mit deutscher Übersetzung.
 */
const v = 1;

export const SPANISH_BEGINNER_4_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – das regelmäßige Präsens: drei Endungssätze, ein Muster.
  {
    order: 1,
    title: 'Un día normal',
    subtitle: 'Regelmäßige Verben im Präsens',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'es4-p1-h1', type: 'HEADING', level: 1, text: 'Un día normal' },
        {
          id: 'es4-p1-image',
          type: 'IMAGE',
          url: 'illustration:clock-day',
          alt: 'Eine Wanduhr, daneben eine aufgehende Sonne und ein Mond.',
          caption: 'El día entero, de la mañana a la noche.',
        },
        {
          id: 'es4-p1-intro',
          type: 'TEXT',
          text: 'Hasta ahora ha aprendido verbos sueltos. Ahora viene el sistema: casi todos los verbos españoles terminan en -ar, -er o -ir, y cada grupo tiene su juego de terminaciones. Quien conoce los tres juegos, conjuga miles de verbos.',
          translations: {
            de: 'Bisher haben Sie einzelne Verben gelernt. Jetzt kommt das System: Fast alle spanischen Verben enden auf -ar, -er oder -ir, und jede Gruppe hat ihren Satz Endungen. Wer die drei Sätze kennt, konjugiert Tausende von Verben.',
          },
        },
        {
          id: 'es4-p1-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: el día de trabajo',
          items: [
            {
              term: 'desayunar',
              translations: { en: 'to have breakfast', de: 'frühstücken' },
              example: 'Desayuno un café con leche.',
            },
            {
              term: 'trabajar',
              translations: { en: 'to work', de: 'arbeiten' },
              example: 'Trabajo en una oficina.',
            },
            { term: 'estudiar', translations: { en: 'to study', de: 'lernen, studieren' } },
            { term: 'descansar', translations: { en: 'to rest', de: 'sich ausruhen' } },
            {
              term: 'comer',
              translations: { en: 'to eat; to have lunch', de: 'essen; zu Mittag essen' },
            },
            { term: 'beber', translations: { en: 'to drink', de: 'trinken' } },
            { term: 'leer', translations: { en: 'to read', de: 'lesen' } },
            { term: 'aprender', translations: { en: 'to learn', de: 'lernen' } },
            { term: 'escribir', translations: { en: 'to write', de: 'schreiben' } },
            { term: 'vivir', translations: { en: 'to live', de: 'wohnen, leben' } },
            { term: 'abrir', translations: { en: 'to open', de: 'öffnen' } },
            { term: 'la oficina', translations: { en: 'office', de: 'das Büro' } },
          ],
        },
        {
          id: 'es4-p1-info-presente',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Las tres familias de verbos',
          text: 'Quite las dos últimas letras del infinitivo: lo que queda es la raíz, y a ella se añade la terminación. Fíjese en lo poco que hay que memorizar de verdad. Los verbos en -er y los verbos en -ir solo se diferencian en dos formas, las de nosotros y vosotros; todo lo demás es idéntico.',
          translations: {
            de: {
              title: 'Die drei Verbfamilien',
              text: 'Streichen Sie die letzten beiden Buchstaben des Infinitivs: Was bleibt, ist der Stamm, und daran hängt die Endung. Achten Sie darauf, wie wenig wirklich zu merken ist. Die Verben auf -er und die auf -ir unterscheiden sich nur in zwei Formen, denen von nosotros und vosotros; alles Übrige ist gleich.',
            },
          },
          table: {
            headers: ['', 'trabajar', 'comer', 'vivir'],
            rows: [
              ['yo', 'trabajo', 'como', 'vivo'],
              ['tú', 'trabajas', 'comes', 'vives'],
              ['él / ella / usted', 'trabaja', 'come', 'vive'],
              ['nosotros / nosotras', 'trabajamos', 'comemos', 'vivimos'],
              ['vosotros / vosotras', 'trabajáis', 'coméis', 'vivís'],
              ['ellos / ellas / ustedes', 'trabajan', 'comen', 'viven'],
            ],
          },
        },
        {
          id: 'es4-p1-cloze',
          type: 'CLOZE',
          instruction: 'Complete con la forma correcta del verbo.',
          wordBank: ['trabajo', 'trabaja', 'comemos', 'vive', 'escriben', 'estudias'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Yo ' },
            { kind: 'GAP', gapId: 'v1', solution: ['trabajo'], width: 10 },
            { kind: 'TEXT', text: ' en una oficina del centro.\nMi hermana ' },
            { kind: 'GAP', gapId: 'v2', solution: ['trabaja'], width: 10 },
            { kind: 'TEXT', text: ' en un hospital.\nNosotros ' },
            { kind: 'GAP', gapId: 'v3', solution: ['comemos'], width: 10 },
            { kind: 'TEXT', text: ' juntos los domingos.\nPablo ' },
            { kind: 'GAP', gapId: 'v4', solution: ['vive'], width: 8 },
            { kind: 'TEXT', text: ' en Valencia.\nLos alumnos ' },
            { kind: 'GAP', gapId: 'v5', solution: ['escriben'], width: 10 },
            { kind: 'TEXT', text: ' un correo.\n¿Tú ' },
            { kind: 'GAP', gapId: 'v6', solution: ['estudias'], width: 10 },
            { kind: 'TEXT', text: ' español?' },
          ],
        },
        {
          id: 'es4-p1-info-sujeto',
          type: 'INFO',
          variant: 'TIP',
          title: 'El sujeto casi siempre sobra',
          text: 'La terminación ya dice quién actúa, así que el pronombre no hace falta: se dice «trabajo en Madrid», no «yo trabajo en Madrid». El pronombre aparece cuando se quiere subrayar o contrastar: «Yo trabajo, tú descansas». Por eso «usted» sí se dice a menudo: la forma de él, ella y usted es la misma, y sin el pronombre no se sabe de quién se habla.',
          translations: {
            de: {
              title: 'Das Subjekt ist fast immer überflüssig',
              text: 'Die Endung sagt schon, wer handelt, also braucht es das Pronomen nicht: Man sagt „trabajo en Madrid“, nicht „yo trabajo en Madrid“. Das Pronomen erscheint, wenn man betonen oder gegenüberstellen will: „Yo trabajo, tú descansas.“ Deshalb sagt man „usted“ sehr wohl oft: Die Form für él, ella und usted ist dieselbe, und ohne das Pronomen weiß man nicht, von wem die Rede ist.',
            },
          },
        },
        {
          id: 'es4-p1-choice',
          type: 'CHOICE',
          instruction: 'Elija la forma correcta.',
          question: '«Mi marido y yo ___ en el mismo barrio.»',
          options: [
            { id: 'o1', text: 'vivimos' },
            { id: 'o2', text: 'viven' },
            { id: 'o3', text: 'vivís' },
          ],
          multiple: false,
          solution: ['o1'],
          explanation:
            '«Mi marido y yo» son dos personas, y una de ellas soy yo: eso es «nosotros». La terminación de -ir para nosotros es -imos.',
          explanationTranslations: {
            de: '„Mi marido y yo“ sind zwei Personen, und eine davon bin ich: Das ist „nosotros“. Die -ir-Endung für nosotros lautet -imos.',
          },
        },
        {
          id: 'es4-p1-match',
          type: 'MATCHING',
          instruction: 'Relacione el sujeto con la forma verbal.',
          left: [
            { id: 'l1', text: 'yo' },
            { id: 'l2', text: 'tú' },
            { id: 'l3', text: 'nosotros' },
            { id: 'l4', text: 'ellas' },
          ],
          right: [
            { id: 'r1', text: 'aprendo español' },
            { id: 'r2', text: 'aprendes español' },
            { id: 'r3', text: 'aprendemos español' },
            { id: 'r4', text: 'aprenden español' },
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
  // Seite 2 – die Uhrzeit: "es la una", sonst "son las".
  {
    order: 2,
    title: '¿Qué hora es?',
    subtitle: 'Die Uhrzeit erfragen und angeben',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'es4-p2-h1', type: 'HEADING', level: 1, text: '¿Qué hora es?' },
        {
          id: 'es4-p2-intro',
          type: 'TEXT',
          text: 'En español la hora se cuenta del uno al doce y se añade la parte del día. El reloj de veinticuatro horas existe, pero vive en los horarios escritos: en la estación pone «19:40» y el empleado dice «las ocho menos veinte».',
          translations: {
            de: 'Im Spanischen zählt man die Stunden von eins bis zwölf und hängt die Tageszeit an. Die 24-Stunden-Uhr gibt es, aber sie lebt in den geschriebenen Fahrplänen: Am Bahnhof steht „19:40“, und der Angestellte sagt „las ocho menos veinte“.',
          },
        },
        {
          id: 'es4-p2-info-hora',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Es la una, son las dos',
          text: 'La hora es femenina, porque detrás se sobreentiende la palabra «hora». Solo la una va en singular – es una sola hora –; de las dos en adelante todo va en plural. Los minutos se suman con «y» hasta la media y se restan con «menos» a partir de ahí.',
          translations: {
            de: {
              title: 'Es la una, son las dos',
              text: 'Die Uhrzeit ist weiblich, weil das Wort „hora“ mitgedacht wird. Nur die Eins steht im Singular – es ist eine einzige Stunde –, ab zwei geht alles in den Plural. Die Minuten werden bis zur halben Stunde mit „y“ addiert und ab da mit „menos“ abgezogen.',
            },
          },
          table: {
            headers: ['Reloj', 'Se dice'],
            rows: [
              ['1:00', 'Es la una.'],
              ['2:00', 'Son las dos en punto.'],
              ['3:10', 'Son las tres y diez.'],
              ['4:15', 'Son las cuatro y cuarto.'],
              ['5:30', 'Son las cinco y media.'],
              ['6:45', 'Son las siete menos cuarto.'],
              ['8:50', 'Son las nueve menos diez.'],
              ['12:00', 'Es mediodía. / Es medianoche.'],
            ],
          },
        },
        {
          id: 'es4-p2-info-partes',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'De la mañana, de la tarde, de la noche',
          text: 'Sin la parte del día, «las ocho» son dos horas distintas. El corte no está donde lo pondría un alemán: la «tarde» española empieza después de comer, hacia las dos o las tres, y dura hasta que oscurece. Por eso las cinco son «de la tarde».',
          translations: {
            de: {
              title: 'De la mañana, de la tarde, de la noche',
              text: 'Ohne Tageszeit sind „las ocho“ zwei verschiedene Stunden. Der Schnitt liegt nicht dort, wo ihn ein Deutscher setzen würde: Die spanische „tarde“ beginnt nach dem Mittagessen, gegen zwei oder drei, und dauert, bis es dunkel wird. Deshalb sind fünf Uhr „de la tarde“.',
            },
          },
          table: {
            headers: ['Hora', 'Parte del día'],
            rows: [
              ['7:00 – 12:00', 'de la mañana'],
              ['14:00 – 20:00', 'de la tarde'],
              ['21:00 – 6:00', 'de la noche'],
              ['12:00', 'mediodía'],
            ],
          },
        },
        {
          id: 'es4-p2-match',
          type: 'MATCHING',
          instruction: 'Relacione el reloj con la frase.',
          left: [
            { id: 'h1', text: '1:00' },
            { id: 'h2', text: '4:15' },
            { id: 'h3', text: '7:30' },
            { id: 'h4', text: '9:45' },
          ],
          right: [
            { id: 'i1', text: 'Es la una.' },
            { id: 'i2', text: 'Son las cuatro y cuarto.' },
            { id: 'i3', text: 'Son las siete y media.' },
            { id: 'i4', text: 'Son las diez menos cuarto.' },
          ],
          solution: [
            { leftId: 'h1', rightId: 'i1' },
            { leftId: 'h2', rightId: 'i2' },
            { leftId: 'h3', rightId: 'i3' },
            { leftId: 'h4', rightId: 'i4' },
          ],
        },
        {
          id: 'es4-p2-dlg',
          type: 'DIALOGUE',
          title: 'En la parada de autobús',
          lines: [
            { speaker: 'Elena', text: 'Perdona, ¿qué hora es?' },
            { speaker: 'Rubén', text: 'Son las ocho y veinte.' },
            { speaker: 'Elena', text: '¡Uf! ¿A qué hora pasa el autobús?' },
            { speaker: 'Rubén', text: 'A las ocho y media. Todavía tienes diez minutos.' },
            { speaker: 'Elena', text: 'Menos mal. Entro a trabajar a las nueve.' },
          ],
        },
        {
          id: 'es4-p2-info-aque',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: '¿Qué hora es? y ¿A qué hora?',
          text: 'Son dos preguntas distintas y se responden distinto. «¿Qué hora es?» pregunta por el reloj y se responde con «es» o «son». «¿A qué hora…?» pregunta por el momento de algo y se responde con «a»: «a las nueve», «a la una». Confundirlas es el error más frecuente al principio.',
          translations: {
            de: {
              title: '¿Qué hora es? und ¿A qué hora?',
              text: 'Das sind zwei verschiedene Fragen, und sie werden verschieden beantwortet. „¿Qué hora es?“ fragt nach der Uhr und wird mit „es“ oder „son“ beantwortet. „¿A qué hora…?“ fragt nach dem Zeitpunkt von etwas und wird mit „a“ beantwortet: „a las nueve“, „a la una“. Die beiden zu verwechseln ist der häufigste Anfängerfehler.',
            },
          },
          table: {
            headers: ['Pregunta', 'Respuesta'],
            rows: [
              ['¿Qué hora es?', 'Son las nueve.'],
              ['¿A qué hora empiezas?', 'A las nueve.'],
              ['¿Qué hora es?', 'Es la una.'],
              ['¿A qué hora comes?', 'A la una.'],
            ],
          },
        },
        {
          id: 'es4-p2-cloze',
          type: 'CLOZE',
          instruction: 'Complete con «es», «son», «a las» o «a la».',
          wordBank: ['Son', 'es', 'a las', 'a la'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '▸ ¿Qué hora es?\n▸ ' },
            { kind: 'GAP', gapId: 't1', solution: ['Son'], width: 6 },
            { kind: 'TEXT', text: ' las siete y cuarto.\n▸ ¿A qué hora desayunas?\n▸ ' },
            { kind: 'GAP', gapId: 't2', solution: ['a las'], width: 7 },
            { kind: 'TEXT', text: ' ocho.\n▸ ¿Y la reunión?\n▸ ' },
            { kind: 'GAP', gapId: 't3', solution: ['a la'], width: 7 },
            { kind: 'TEXT', text: ' una, después de comer.\n▸ Pues ya ' },
            { kind: 'GAP', gapId: 't4', solution: ['es'], width: 5 },
            { kind: 'TEXT', text: ' la una menos diez.' },
          ],
        },
        {
          id: 'es4-p2-choice',
          type: 'CHOICE',
          instruction: 'Elija la frase correcta.',
          question: 'Son las 17:40. ¿Cómo se dice?',
          options: [
            { id: 'p1', text: 'Son las diecisiete y cuarenta.' },
            { id: 'p2', text: 'Son las seis menos veinte de la tarde.' },
            { id: 'p3', text: 'Es las seis menos veinte de la tarde.' },
          ],
          multiple: false,
          solution: ['p2'],
          explanation:
            'Al hablar se cuenta hasta doce, y a partir de la media hora se resta con «menos». «Es» solo vale para la una.',
          explanationTranslations: {
            de: 'Beim Sprechen zählt man bis zwölf, und ab der halben Stunde zieht man mit „menos“ ab. „Es“ gilt nur für ein Uhr.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – reflexive Verben: gleiche Endungen, neues Pronomen.
  {
    order: 3,
    title: 'Me levanto a las siete',
    subtitle: 'Reflexive Verben',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'es4-p3-h1', type: 'HEADING', level: 1, text: 'Me levanto a las siete' },
        {
          id: 'es4-p3-intro',
          type: 'TEXT',
          text: 'Hay verbos que llevan siempre un pronombre delante: «me levanto», «te duchas», «se acuesta». Son los verbos reflexivos, y en español son muchos más que en alemán. La buena noticia: las terminaciones son las de la página uno. Lo único nuevo es la palabrita de delante.',
          translations: {
            de: 'Es gibt Verben, vor denen immer ein Pronomen steht: „me levanto“, „te duchas“, „se acuesta“. Das sind die reflexiven Verben, und im Spanischen sind es weit mehr als im Deutschen. Die gute Nachricht: Die Endungen sind die von Seite eins. Neu ist allein das Wörtchen davor.',
          },
        },
        {
          id: 'es4-p3-info-reflexivos',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'El pronombre va delante',
          text: 'En el diccionario estos verbos acaban en «-se»: levantarse, ducharse, llamarse. Ese «-se» se cambia por el pronombre que corresponde a la persona y se coloca delante del verbo conjugado. La negación va aún más adelante: «no me levanto temprano».',
          translations: {
            de: {
              title: 'Das Pronomen steht davor',
              text: 'Im Wörterbuch enden diese Verben auf „-se“: levantarse, ducharse, llamarse. Dieses „-se“ wird durch das Pronomen der jeweiligen Person ersetzt und vor das konjugierte Verb gestellt. Die Verneinung steht noch weiter vorn: „no me levanto temprano“.',
            },
          },
          table: {
            headers: ['', 'levantarse', 'ducharse'],
            rows: [
              ['yo', 'me levanto', 'me ducho'],
              ['tú', 'te levantas', 'te duchas'],
              ['él / ella / usted', 'se levanta', 'se ducha'],
              ['nosotros / nosotras', 'nos levantamos', 'nos duchamos'],
              ['vosotros / vosotras', 'os levantáis', 'os ducháis'],
              ['ellos / ellas / ustedes', 'se levantan', 'se duchan'],
            ],
          },
        },
        {
          id: 'es4-p3-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: la mañana y la noche',
          items: [
            {
              term: 'despertarse',
              translations: { en: 'to wake up', de: 'aufwachen' },
              example: 'Me despierto a las siete.',
            },
            { term: 'levantarse', translations: { en: 'to get up', de: 'aufstehen' } },
            { term: 'ducharse', translations: { en: 'to have a shower', de: 'duschen' } },
            {
              term: 'lavarse los dientes',
              translations: { en: 'to brush one’s teeth', de: 'sich die Zähne putzen' },
            },
            { term: 'peinarse', translations: { en: 'to comb one’s hair', de: 'sich kämmen' } },
            {
              term: 'vestirse',
              translations: { en: 'to get dressed', de: 'sich anziehen' },
              example: 'Me visto muy rápido.',
            },
            {
              term: 'irse',
              translations: { en: 'to leave', de: 'weggehen' },
              example: 'Me voy a las ocho.',
            },
            {
              term: 'acostarse',
              translations: { en: 'to go to bed', de: 'ins Bett gehen' },
              example: 'Me acuesto a las once.',
            },
            { term: 'dormirse', translations: { en: 'to fall asleep', de: 'einschlafen' } },
            { term: 'temprano', translations: { en: 'early', de: 'früh' } },
            { term: 'tarde', translations: { en: 'late', de: 'spät' } },
          ],
        },
        {
          id: 'es4-p3-info-irregulares',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Cuatro verbos que cambian por dentro',
          text: 'En algunos verbos la vocal de la raíz cambia cuando lleva el acento de la palabra – y lo lleva en todas las formas menos en las de nosotros y vosotros. Por eso se dice «me despierto» pero «nos despertamos». De momento apréndalos como están; el sistema completo llega más adelante.',
          translations: {
            de: {
              title: 'Vier Verben, die sich im Inneren ändern',
              text: 'Bei manchen Verben ändert sich der Stammvokal, wenn er die Wortbetonung trägt – und die trägt er in allen Formen außer denen von nosotros und vosotros. Deshalb heißt es „me despierto“, aber „nos despertamos“. Lernen Sie sie vorerst, wie sie dastehen; das ganze System kommt später.',
            },
          },
          table: {
            headers: ['Infinitivo', 'yo', 'nosotros'],
            rows: [
              ['despertarse (e → ie)', 'me despierto', 'nos despertamos'],
              ['acostarse (o → ue)', 'me acuesto', 'nos acostamos'],
              ['vestirse (e → i)', 'me visto', 'nos vestimos'],
              ['dormirse (o → ue)', 'me duermo', 'nos dormimos'],
            ],
          },
        },
        {
          id: 'es4-p3-cloze',
          type: 'CLOZE',
          instruction: 'Complete con el pronombre que falta.',
          wordBank: ['me', 'te', 'se', 'nos'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Yo ' },
            { kind: 'GAP', gapId: 'r1', solution: ['me'], width: 5 },
            { kind: 'TEXT', text: ' levanto a las siete y cuarto.\n¿Tú ' },
            { kind: 'GAP', gapId: 'r2', solution: ['te'], width: 5 },
            { kind: 'TEXT', text: ' duchas por la mañana o por la noche?\nMi hijo ' },
            { kind: 'GAP', gapId: 'r3', solution: ['se'], width: 5 },
            { kind: 'TEXT', text: ' viste solo.\nLos domingos ' },
            { kind: 'GAP', gapId: 'r4', solution: ['nos'], width: 6 },
            { kind: 'TEXT', text: ' levantamos muy tarde.\nMis padres ' },
            { kind: 'GAP', gapId: 'r5', solution: ['se'], width: 5 },
            { kind: 'TEXT', text: ' acuestan a las once.' },
          ],
        },
        {
          id: 'es4-p3-info-aleman',
          type: 'INFO',
          variant: 'TIP',
          title: 'No siempre coincide con el alemán',
          text: 'A veces las dos lenguas usan pronombre y a veces no, y no coinciden. El alemán no dice «mich» al levantarse, el español sí; el alemán lava «sich die Hände», y el español no repite el posesivo: se dice «me lavo las manos», no «lavo mis manos». La regla práctica: si el verbo lleva «-se» en el diccionario, lleva pronombre siempre.',
          translations: {
            de: {
              title: 'Deckt sich nicht immer mit dem Deutschen',
              text: 'Mal verwenden beide Sprachen ein Pronomen und mal nicht, und sie decken sich dabei nicht. Das Deutsche sagt beim Aufstehen kein „mich“, das Spanische schon; das Deutsche wäscht „sich die Hände“, und das Spanische wiederholt den Possessivbegleiter nicht: Es heißt „me lavo las manos“, nicht „lavo mis manos“. Die praktische Regel: Steht im Wörterbuch ein „-se“ am Verb, steht immer ein Pronomen dabei.',
            },
          },
          table: {
            headers: ['Español', 'Alemán'],
            rows: [
              ['me levanto', 'ich stehe auf'],
              ['me ducho', 'ich dusche'],
              ['me lavo las manos', 'ich wasche mir die Hände'],
              ['me llamo Ana', 'ich heiße Ana'],
            ],
          },
        },
        {
          id: 'es4-p3-choice',
          type: 'CHOICE',
          instruction: 'Marque todas las frases correctas.',
          question: '¿Cuáles de estas frases son correctas?',
          options: [
            { id: 'x1', text: 'Me lavo los dientes después de desayunar.' },
            { id: 'x2', text: 'Lavo mis dientes después de desayunar.' },
            { id: 'x3', text: 'No me levanto antes de las siete.' },
            { id: 'x4', text: 'Me no levanto antes de las siete.' },
          ],
          multiple: true,
          solution: ['x1', 'x3'],
          explanation:
            'Con las partes del cuerpo el español usa el pronombre y el artículo, no el posesivo. Y «no» va delante del pronombre, nunca detrás.',
          explanationTranslations: {
            de: 'Bei Körperteilen verwendet das Spanische das Pronomen und den Artikel, nicht den Possessivbegleiter. Und „no“ steht vor dem Pronomen, nie dahinter.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – den Tag ordnen: Häufigkeit, Reihenfolge, Wochentage.
  {
    order: 4,
    title: 'Primero, después, luego',
    subtitle: 'Häufigkeit, Reihenfolge, Wochentage',
    estimatedMinutes: 23,
    content: {
      version: v,
      blocks: [
        { id: 'es4-p4-h1', type: 'HEADING', level: 1, text: 'Primero, después, luego' },
        {
          id: 'es4-p4-intro',
          type: 'TEXT',
          text: 'Ya sabe nombrar las actividades y ponerles hora. Falta unirlas: decir en qué orden pasan y con qué frecuencia. Con media docena de palabras, una lista de verbos se convierte en un relato.',
          translations: {
            de: 'Sie können die Tätigkeiten benennen und ihnen eine Uhrzeit geben. Es fehlt, sie zu verbinden: zu sagen, in welcher Reihenfolge sie geschehen und wie oft. Mit einem halben Dutzend Wörtern wird aus einer Verbliste eine Erzählung.',
          },
        },
        {
          id: 'es4-p4-info-frecuencia',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Con qué frecuencia',
          text: 'Estos adverbios van normalmente delante del verbo o justo detrás. «Nunca» tiene una particularidad: delante del verbo va solo, pero detrás exige un «no» delante del verbo. Las dos frases son correctas y significan lo mismo.',
          translations: {
            de: {
              title: 'Wie oft',
              text: 'Diese Adverbien stehen gewöhnlich vor dem Verb oder direkt dahinter. „Nunca“ hat eine Besonderheit: Vor dem Verb steht es allein, dahinter verlangt es ein „no“ vor dem Verb. Beide Sätze sind richtig und bedeuten dasselbe.',
            },
          },
          table: {
            headers: ['Frecuencia', 'Ejemplo'],
            rows: [
              ['siempre', 'Siempre desayuno en casa.'],
              ['normalmente', 'Normalmente trabajo hasta las seis.'],
              ['a menudo', 'A menudo como con mis compañeros.'],
              ['a veces', 'A veces salgo a correr.'],
              ['casi nunca', 'Casi nunca veo la televisión.'],
              ['nunca', 'Nunca me acuesto tarde. = No me acuesto nunca tarde.'],
            ],
          },
        },
        {
          id: 'es4-p4-vocab',
          type: 'VOCAB_LIST',
          title: 'Vocabulario: ordenar el día',
          items: [
            { term: 'primero', translations: { en: 'first', de: 'zuerst' } },
            { term: 'después', translations: { en: 'afterwards', de: 'danach' } },
            { term: 'luego', translations: { en: 'then', de: 'dann' } },
            { term: 'por fin', translations: { en: 'finally', de: 'schließlich' } },
            {
              term: 'antes de + infinitivo',
              translations: { en: 'before doing sth.', de: 'bevor' },
              example: 'Antes de salir, me peino.',
            },
            {
              term: 'después de + infinitivo',
              translations: { en: 'after doing sth.', de: 'nachdem' },
              example: 'Después de comer, descanso.',
            },
            { term: 'el lunes', translations: { en: 'Monday', de: 'der Montag' } },
            { term: 'el martes', translations: { en: 'Tuesday', de: 'der Dienstag' } },
            { term: 'el miércoles', translations: { en: 'Wednesday', de: 'der Mittwoch' } },
            { term: 'el jueves', translations: { en: 'Thursday', de: 'der Donnerstag' } },
            { term: 'el viernes', translations: { en: 'Friday', de: 'der Freitag' } },
            { term: 'el sábado', translations: { en: 'Saturday', de: 'der Samstag' } },
            { term: 'el domingo', translations: { en: 'Sunday', de: 'der Sonntag' } },
            { term: 'el fin de semana', translations: { en: 'weekend', de: 'das Wochenende' } },
          ],
        },
        {
          id: 'es4-p4-info-dias',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'El lunes o los lunes',
          text: 'El artículo hace aquí todo el trabajo y sustituye a la preposición que pondría el alemán. «El lunes» es un lunes concreto, el que viene; «los lunes» son todos los lunes. Los días no llevan mayúscula, y cinco de los siete no cambian en plural: el lunes / los lunes, pero el sábado / los sábados.',
          translations: {
            de: {
              title: 'El lunes oder los lunes',
              text: 'Der Artikel leistet hier die ganze Arbeit und ersetzt die Präposition, die das Deutsche setzen würde. „El lunes“ ist ein bestimmter Montag, der nächste; „los lunes“ sind alle Montage. Die Wochentage werden kleingeschrieben, und fünf von sieben ändern sich im Plural nicht: el lunes / los lunes, aber el sábado / los sábados.',
            },
          },
          table: {
            headers: ['Español', 'Alemán'],
            rows: [
              ['El lunes tengo una reunión.', 'Am Montag habe ich eine Besprechung.'],
              ['Los lunes voy al gimnasio.', 'Montags gehe ich ins Fitnessstudio.'],
              ['El sábado salgo con Marta.', 'Am Samstag gehe ich mit Marta aus.'],
              ['Los sábados me levanto tarde.', 'Samstags stehe ich spät auf.'],
            ],
          },
        },
        {
          id: 'es4-p4-dlg',
          type: 'DIALOGUE',
          title: 'Dos rutinas muy distintas',
          lines: [
            { speaker: 'Nuria', text: '¿A qué hora te levantas tú?' },
            { speaker: 'Tomás', text: 'A las cinco y media. Trabajo en una panadería.' },
            { speaker: 'Nuria', text: '¡Qué barbaridad! ¿Y no te acuestas muy temprano?' },
            { speaker: 'Tomás', text: 'Sí, a las diez. Pero los domingos no trabajo y duermo hasta las once.' },
            { speaker: 'Nuria', text: 'Yo al revés: nunca me levanto antes de las nueve, pero termino a las ocho de la tarde.' },
          ],
        },
        {
          id: 'es4-p4-ordering',
          type: 'ORDERING',
          instruction: 'Ordene la mañana de Tomás.',
          items: [
            { id: 'w1', text: 'Me despierto a las cinco y media.' },
            { id: 'w2', text: 'Primero me ducho y me visto.' },
            { id: 'w3', text: 'Después desayuno un café rápido.' },
            { id: 'w4', text: 'Luego me voy a la panadería.' },
            { id: 'w5', text: 'Por fin abro la tienda a las siete.' },
          ],
          solution: ['w1', 'w2', 'w3', 'w4', 'w5'],
        },
        {
          id: 'es4-p4-cloze',
          type: 'CLOZE',
          instruction: 'Complete con la palabra del cuadro.',
          wordBank: ['siempre', 'A veces', 'Nunca', 'Los', 'Antes de'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'De lunes a viernes ' },
            { kind: 'GAP', gapId: 'f1', solution: ['siempre'], width: 9 },
            { kind: 'TEXT', text: ' desayuno en casa.\n' },
            { kind: 'GAP', gapId: 'f2', solution: ['A veces'], width: 9 },
            { kind: 'TEXT', text: ' como en la oficina, pero prefiero salir.\n' },
            { kind: 'GAP', gapId: 'f3', solution: ['Antes de'], width: 10 },
            { kind: 'TEXT', text: ' acostarme leo un rato.\n' },
            { kind: 'GAP', gapId: 'f4', solution: ['Los'], width: 5 },
            { kind: 'TEXT', text: ' sábados me levanto a las once.\n' },
            { kind: 'GAP', gapId: 'f5', solution: ['Nunca'], width: 7 },
            { kind: 'TEXT', text: ' trabajo el domingo.' },
          ],
        },
        {
          id: 'es4-p4-choice',
          type: 'CHOICE',
          instruction: 'Elija la traducción correcta de „Samstags arbeite ich nicht“.',
          options: [
            { id: 'q1', text: 'En sábado no trabajo.' },
            { id: 'q2', text: 'Los sábados no trabajo.' },
            { id: 'q3', text: 'El sábado no trabajo.' },
          ],
          multiple: false,
          solution: ['q2'],
          explanation:
            '«Samstags» significa todos los sábados, y eso es el plural con artículo: «los sábados». «El sábado» sería un sábado concreto, y la preposición no hace falta.',
          explanationTranslations: {
            de: '„Samstags“ heißt an allen Samstagen, und das ist der Plural mit Artikel: „los sábados“. „El sábado“ wäre ein bestimmter Samstag, und eine Präposition braucht es nicht.',
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
        { id: 'es4-p5-h1', type: 'HEADING', level: 1, text: '¿Ya sabes hacerlo?' },
        {
          id: 'es4-p5-intro',
          type: 'TEXT',
          text: 'Aquí vuelve todo el capítulo: las terminaciones del presente, la hora, los verbos reflexivos y las palabras que ordenan el día.',
          translations: {
            de: 'Hier kommt das ganze Kapitel noch einmal: die Präsensendungen, die Uhrzeit, die reflexiven Verben und die Wörter, die den Tag ordnen.',
          },
        },
        {
          id: 'es4-p5-cloze',
          type: 'CLOZE',
          instruction: 'Complete el texto de Marisa.',
          wordBank: ['me levanto', 'son', 'a las', 'me ducho', 'trabajo', 'nos acostamos'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Normalmente ' },
            { kind: 'GAP', gapId: 'g1', solution: ['me levanto'], width: 12 },
            { kind: 'TEXT', text: ' a las siete menos cuarto. Primero ' },
            { kind: 'GAP', gapId: 'g2', solution: ['me ducho'], width: 11 },
            { kind: 'TEXT', text: ' y después desayuno. Salgo de casa ' },
            { kind: 'GAP', gapId: 'g3', solution: ['a las'], width: 7 },
            { kind: 'TEXT', text: ' ocho y cuarto y ' },
            { kind: 'GAP', gapId: 'g4', solution: ['trabajo'], width: 9 },
            { kind: 'TEXT', text: ' hasta las cinco. Cuando llego a casa ya ' },
            { kind: 'GAP', gapId: 'g5', solution: ['son'], width: 6 },
            { kind: 'TEXT', text: ' las seis. Mi marido y yo ' },
            { kind: 'GAP', gapId: 'g6', solution: ['nos acostamos'], width: 14 },
            { kind: 'TEXT', text: ' sobre las once y media.' },
          ],
        },
        {
          id: 'es4-p5-match',
          type: 'MATCHING',
          instruction: 'Relacione la pregunta con la respuesta.',
          left: [
            { id: 'a1', text: '¿Qué hora es?' },
            { id: 'a2', text: '¿A qué hora te levantas?' },
            { id: 'a3', text: '¿Trabajas los sábados?' },
            { id: 'a4', text: '¿Qué haces antes de acostarte?' },
          ],
          right: [
            { id: 'b1', text: 'Son las once y media.' },
            { id: 'b2', text: 'A las siete, más o menos.' },
            { id: 'b3', text: 'No, nunca. El fin de semana descanso.' },
            { id: 'b4', text: 'Leo un poco y me lavo los dientes.' },
          ],
          solution: [
            { leftId: 'a1', rightId: 'b1' },
            { leftId: 'a2', rightId: 'b2' },
            { leftId: 'a3', rightId: 'b3' },
            { leftId: 'a4', rightId: 'b4' },
          ],
        },
        {
          id: 'es4-p5-choice',
          type: 'CHOICE',
          instruction: 'Marque todas las frases correctas.',
          question: '¿Cuáles de estas frases son correctas?',
          options: [
            { id: 's1', text: 'Es la una y media de la tarde.' },
            { id: 's2', text: 'Son la una y media de la tarde.' },
            { id: 's3', text: 'Mi hermano se despierta muy temprano.' },
            { id: 's4', text: 'Mi hermano despierta se muy temprano.' },
          ],
          multiple: true,
          solution: ['s1', 's3'],
          explanation:
            'La una es la única hora en singular: «es la una». Y el pronombre reflexivo va delante del verbo conjugado, no detrás.',
          explanationTranslations: {
            de: 'Ein Uhr ist die einzige Stunde im Singular: „es la una“. Und das Reflexivpronomen steht vor dem konjugierten Verb, nicht dahinter.',
          },
        },
        {
          id: 'es4-p5-ordering',
          type: 'ORDERING',
          instruction: 'Ordene las frases para formar un día completo.',
          items: [
            { id: 'z1', text: 'Me despierto a las siete.' },
            { id: 'z2', text: 'Desayuno y me voy al trabajo.' },
            { id: 'z3', text: 'Como a las dos con mis compañeros.' },
            { id: 'z4', text: 'Por la tarde estudio español.' },
            { id: 'z5', text: 'Ceno a las nueve y media.' },
            { id: 'z6', text: 'Me acuesto a las once.' },
          ],
          solution: ['z1', 'z2', 'z3', 'z4', 'z5', 'z6'],
        },
        {
          id: 'es4-p5-writing',
          type: 'WRITING',
          instruction: 'Describa su día.',
          prompt:
            'Escriba de cinco a siete frases sobre un día normal suyo: ¿a qué hora se levanta?, ¿qué hace por la mañana, por la tarde y por la noche? Use al menos tres verbos reflexivos, tres horas distintas y dos palabras de frecuencia.',
          minWords: 25,
          maxWords: 100,
          aiFeedback: true,
          sampleAnswer:
            'Normalmente me levanto a las siete menos cuarto. Primero me ducho y me visto, y después desayuno un café con tostadas. Salgo de casa a las ocho y trabajo en una oficina hasta las cinco de la tarde. A veces como con mis compañeros, pero casi siempre vuelvo a casa. Por la tarde estudio español una hora. Ceno sobre las nueve y me acuesto a las once y media.',
        },
      ],
    },
  },
];
