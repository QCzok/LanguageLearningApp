import type { UnitSeed } from './chapter-beginner-1';

/**
 * Beginner, Kapitel 5: „Mein Tag“
 *
 * Fünf Seiten, Aufbau wie in den Kapiteln davor.
 *
 * Die Uhrzeit steht vorn, weil ohne sie kein Tagesablauf erzählbar ist. Die
 * Falle dabei ist „halb acht“ – für viele Lernende 8:30, tatsächlich 7:30.
 * Der Kasten dazu steht deshalb nicht als Fußnote da, sondern als eigene
 * Warnung, und die Aufgabe direkt danach fragt genau diese Stelle ab.
 *
 * Die trennbaren Verben kommen auf Seite 3 erst, nachdem sie auf Seite 2
 * schon im Text standen: Man hat „Ich stehe um sieben auf“ gelesen, bevor
 * man erfährt, warum das „auf“ ans Ende rutscht.
 *
 * Einsprachig deutsch, Erklärungen mit Übersetzung wie in Kapitel 1.
 */
const v = 1;

export const BEGINNER_5_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – die Uhrzeit: offiziell und im Alltag.
  {
    order: 1,
    title: 'Wie spät ist es?',
    subtitle: 'Die Uhrzeit',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'b5-1-h1', type: 'HEADING', level: 1, text: 'Wie spät ist es?' },
        {
          id: 'b5-1-image',
          type: 'IMAGE',
          url: 'illustration:clock-day',
          alt: 'Eine große Uhr, um die herum Sonne, Mond und kleine Symbole für den Tagesablauf angeordnet sind.',
          caption: 'Ein Tag hat vierundzwanzig Stunden.',
        },
        {
          id: 'b5-1-intro',
          type: 'TEXT',
          text: 'Im Deutschen gibt es zwei Arten, die Uhrzeit zu sagen: die offizielle – im Radio, am Bahnhof, im Beruf – und die inoffizielle im Alltag. Beide muss man verstehen.',
          translations: {
            en: 'German has two ways of telling the time: the official one – on the radio, at the station, at work – and the informal one in everyday life. You need to understand both.',
            es: 'En alemán hay dos formas de decir la hora: la oficial – en la radio, en la estación, en el trabajo – y la informal del día a día. Hay que entender las dos.',
            fr: 'En allemand, il y a deux façons de dire l’heure : l’officielle – à la radio, à la gare, au travail – et l’informelle au quotidien. Il faut comprendre les deux.',
            it: 'In tedesco ci sono due modi di dire l’ora: quello ufficiale – alla radio, in stazione, al lavoro – e quello informale di tutti i giorni. Bisogna capirli entrambi.',
          },
        },
        {
          id: 'b5-1-info-uhr',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Offiziell und inoffiziell',
          text: 'Offiziell zählt man von 0 bis 24 Uhr und nennt erst die Stunden, dann die Minuten. Inoffiziell zählt man nur bis 12 und benutzt „nach“, „vor“, „Viertel“ und „halb“.',
          translations: {
            en: {
              title: 'Official and informal',
              text: 'Officially you count from 0 to 24 and give the hours first, then the minutes. Informally you only count to 12 and use „nach“ (past), „vor“ (to), „Viertel“ (quarter) and „halb“ (half).',
            },
            es: {
              title: 'Oficial e informal',
              text: 'De forma oficial se cuenta de 0 a 24 y se dicen primero las horas y luego los minutos. De forma informal se cuenta solo hasta 12 y se usan „nach“ (y), „vor“ (menos), „Viertel“ (cuarto) y „halb“ (media).',
            },
            fr: {
              title: 'Officiel et informel',
              text: 'Officiellement, on compte de 0 à 24 h et on dit d’abord les heures, puis les minutes. De façon informelle, on compte seulement jusqu’à 12 et on utilise « nach » (et), « vor » (moins), « Viertel » (quart) et « halb » (demie).',
            },
            it: {
              title: 'Ufficiale e informale',
              text: 'In modo ufficiale si conta da 0 a 24 e si dicono prima le ore, poi i minuti. In modo informale si conta solo fino a 12 e si usano „nach“ (e), „vor“ (meno), „Viertel“ (quarto) e „halb“ (mezza).',
            },
          },
          table: {
            headers: ['Uhr', 'offiziell', 'inoffiziell'],
            rows: [
              ['8:00', 'acht Uhr', 'acht'],
              ['8:05', 'acht Uhr fünf', 'fünf nach acht'],
              ['8:15', 'acht Uhr fünfzehn', 'Viertel nach acht'],
              ['8:30', 'acht Uhr dreißig', 'halb neun'],
              ['8:45', 'acht Uhr fünfundvierzig', 'Viertel vor neun'],
              ['8:50', 'acht Uhr fünfzig', 'zehn vor neun'],
              ['20:00', 'zwanzig Uhr', 'acht (abends)'],
            ],
          },
        },
        {
          id: 'b5-1-info-halb',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Achtung: halb',
          text: '„halb neun“ bedeutet 8:30 – die halbe Stunde auf dem Weg zu neun. Man denkt immer an die nächste volle Stunde.',
          translations: {
            en: {
              title: 'Careful: halb',
              text: '„halb neun“ means 8:30, not 9:30 – half of the way to nine. You always think of the next full hour.',
            },
            es: {
              title: 'Atención: halb',
              text: '„halb neun“ significa las 8:30, no las 9:30 – la media hora camino de las nueve. Siempre se piensa en la próxima hora en punto.',
            },
            fr: {
              title: 'Attention : halb',
              text: '« halb neun » signifie 8 h 30, pas 9 h 30 – la demi-heure en route vers neuf heures. On pense toujours à l’heure pleine suivante.',
            },
            it: {
              title: 'Attenzione: halb',
              text: '„halb neun“ significa 8:30, non 9:30 – la mezz’ora verso le nove. Si pensa sempre all’ora piena successiva.',
            },
          },
        },
        {
          id: 'b5-1-choice-halb',
          type: 'CHOICE',
          instruction: 'Der Kurs beginnt um halb zehn. Wann müssen Sie da sein?',
          multiple: false,
          options: [
            { id: 'h1', text: 'um 9:30' },
            { id: 'h2', text: 'um 10:30' },
            { id: 'h3', text: 'um 10:00' },
          ],
          solution: ['h1'],
          explanation: '„halb zehn“ ist eine halbe Stunde vor zehn, also 9:30.',
          explanationTranslations: {
            en: '„halb zehn“ is half an hour before ten, so 9:30.',
            es: '„halb zehn“ es media hora antes de las diez, o sea, las 9:30.',
            fr: '« halb zehn », c’est une demi-heure avant dix heures, donc 9 h 30.',
            it: '„halb zehn“ è mezz’ora prima delle dieci, quindi le 9:30.',
          },
        },
        {
          id: 'b5-1-match',
          type: 'MATCHING',
          instruction: 'Ordnen Sie die Uhrzeiten zu.',
          left: [
            { id: 'l1', text: '7:15' },
            { id: 'l2', text: '11:30' },
            { id: 'l3', text: '4:45' },
            { id: 'l4', text: '6:10' },
          ],
          right: [
            { id: 'r1', text: 'Viertel nach sieben' },
            { id: 'r2', text: 'halb zwölf' },
            { id: 'r3', text: 'Viertel vor fünf' },
            { id: 'r4', text: 'zehn nach sechs' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'b5-1-audio',
          type: 'AUDIO',
          title: 'Hören Sie: Durchsagen am Bahnhof',
          audioUrl: 'placeholder://b5-station',
          durationSec: 25,
          transcript:
            'Der ICE nach München fährt heute um vierzehn Uhr zweiundzwanzig von Gleis sieben.\nDer Regionalexpress nach Halle hat zehn Minuten Verspätung. Neue Abfahrt: neunzehn Uhr fünfundvierzig.',
        },
        {
          id: 'b5-1-cloze',
          type: 'CLOZE',
          instruction: 'Wie spät ist es? Schreiben Sie inoffiziell.',
          wordBank: ['nach', 'vor', 'halb', 'Viertel'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '9:20 → zwanzig ' },
            { kind: 'GAP', gapId: 'u1', solution: ['nach'], width: 5 },
            { kind: 'TEXT', text: ' neun\n2:30 → ' },
            { kind: 'GAP', gapId: 'u2', solution: ['halb'], width: 5 },
            { kind: 'TEXT', text: ' drei\n5:55 → fünf ' },
            { kind: 'GAP', gapId: 'u3', solution: ['vor'], width: 5 },
            { kind: 'TEXT', text: ' sechs\n1:15 → ' },
            { kind: 'GAP', gapId: 'u4', solution: ['Viertel'], width: 8 },
            { kind: 'TEXT', text: ' nach eins' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – ein ganzer Tag, erzählt in Uhrzeiten.
  {
    order: 2,
    title: 'Mein Tagesablauf',
    subtitle: 'Vom Morgen bis zum Abend',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'b5-2-h1', type: 'HEADING', level: 1, text: 'Mein Tagesablauf' },
        {
          id: 'b5-2-text',
          type: 'TEXT',
          text: 'Ich heiße Tomasz und bin Krankenpfleger. Mein Tag beginnt früh: Ich stehe um halb sechs auf. Um sechs frühstücke ich – nur einen Kaffee und ein Brot. Um sieben fängt meine Arbeit im Krankenhaus an. Mittags esse ich in der Kantine. Um halb vier ist die Arbeit zu Ende. Dann kaufe ich ein und koche. Abends sehe ich fern oder rufe meine Familie in Polen an. Um zehn gehe ich ins Bett.',
          translations: {
            en: 'My name is Tomasz and I’m a nurse. My day starts early: I get up at half past five. At six I have breakfast – just a coffee and a slice of bread. At seven my work at the hospital starts. At lunchtime I eat in the canteen. At half past three work is over. Then I go shopping and cook. In the evening I watch TV or call my family in Poland. At ten I go to bed.',
            es: 'Me llamo Tomasz y soy enfermero. Mi día empieza temprano: me levanto a las cinco y media. A las seis desayuno – solo un café y un pan. A las siete empieza mi trabajo en el hospital. Al mediodía como en la cantina. A las tres y media termina el trabajo. Luego hago la compra y cocino. Por la noche veo la tele o llamo a mi familia en Polonia. A las diez me voy a la cama.',
            fr: 'Je m’appelle Tomasz et je suis infirmier. Ma journée commence tôt : je me lève à cinq heures et demie. À six heures, je prends mon petit-déjeuner – juste un café et une tartine. À sept heures, mon travail commence à l’hôpital. À midi, je mange à la cantine. À trois heures et demie, le travail est fini. Ensuite, je fais les courses et je cuisine. Le soir, je regarde la télé ou j’appelle ma famille en Pologne. À dix heures, je vais au lit.',
            it: 'Mi chiamo Tomasz e sono infermiere. La mia giornata comincia presto: mi alzo alle cinque e mezza. Alle sei faccio colazione – solo un caffè e una fetta di pane. Alle sette comincia il mio lavoro in ospedale. A mezzogiorno mangio in mensa. Alle tre e mezza il lavoro finisce. Poi faccio la spesa e cucino. La sera guardo la TV o chiamo la mia famiglia in Polonia. Alle dieci vado a letto.',
          },
        },
        {
          id: 'b5-2-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: Der Tag',
          items: [
            { term: 'aufstehen', translations: { en: 'to get up' }, example: 'Ich stehe um sechs auf.' },
            { term: 'frühstücken', translations: { en: 'to have breakfast' } },
            { term: 'anfangen', translations: { en: 'to start' }, example: 'Die Arbeit fängt um sieben an.' },
            { term: 'arbeiten', translations: { en: 'to work' } },
            { term: 'einkaufen', translations: { en: 'to go shopping' }, example: 'Ich kaufe nach der Arbeit ein.' },
            { term: 'kochen', translations: { en: 'to cook' } },
            { term: 'fernsehen', translations: { en: 'to watch TV' }, example: 'Abends sehe ich fern.' },
            { term: 'anrufen', translations: { en: 'to call (phone)' } },
            { term: 'ins Bett gehen', translations: { en: 'to go to bed' } },
            { term: 'der Morgen / morgens', translations: { en: 'morning / in the mornings' } },
            { term: 'der Mittag / mittags', translations: { en: 'midday / at lunchtime' } },
            { term: 'der Abend / abends', translations: { en: 'evening / in the evenings' } },
          ],
        },
        {
          id: 'b5-2-order-tag',
          type: 'ORDERING',
          instruction: 'Bringen Sie Tomasz’ Tag in die richtige Reihenfolge.',
          items: [
            { id: 't1', text: 'Er steht auf.' },
            { id: 't2', text: 'Er frühstückt.' },
            { id: 't3', text: 'Die Arbeit fängt an.' },
            { id: 't4', text: 'Er kauft ein.' },
            { id: 't5', text: 'Er geht ins Bett.' },
          ],
          solution: ['t1', 't2', 't3', 't4', 't5'],
        },
        {
          id: 'b5-2-choice-text',
          type: 'CHOICE',
          instruction: 'Was ist richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'a1', text: 'Tomasz steht um 5:30 Uhr auf.' },
            { id: 'a2', text: 'Er isst mittags zu Hause.' },
            { id: 'a3', text: 'Seine Arbeit endet um 15:30 Uhr.' },
            { id: 'a4', text: 'Abends geht er ins Kino.' },
          ],
          solution: ['a1', 'a3'],
          explanation:
            '„halb sechs“ = 5:30, „halb vier“ = 15:30. Mittags isst Tomasz in der Kantine, abends sieht er fern oder telefoniert.',
          explanationTranslations: {
            en: '„halb sechs“ = 5:30, „halb vier“ = 15:30. At lunchtime Tomasz eats in the canteen; in the evening he watches TV or phones.',
            es: '„halb sechs“ = 5:30, „halb vier“ = 15:30. Al mediodía Tomasz come en la cantina; por la noche ve la tele o llama por teléfono.',
            fr: '« halb sechs » = 5 h 30, « halb vier » = 15 h 30. À midi, Tomasz mange à la cantine ; le soir, il regarde la télé ou téléphone.',
            it: '„halb sechs“ = 5:30, „halb vier“ = 15:30. A mezzogiorno Tomasz mangia in mensa; la sera guarda la TV o telefona.',
          },
        },
        {
          id: 'b5-2-info-um',
          type: 'INFO',
          variant: 'TIP',
          title: 'um, am, von … bis',
          text: 'Vor der Uhrzeit steht „um“: um sieben Uhr. Vor Tageszeiten und Tagen steht „am“: am Morgen, am Abend, am Montag. Aber: in der Nacht. Eine Zeitspanne sagt man mit „von … bis“: von acht bis fünf.',
          translations: {
            en: {
              title: 'um, am, von … bis',
              text: 'Before a clock time you use „um“: um sieben Uhr (at seven). Before parts of the day and days you use „am“: am Morgen, am Abend, am Montag. But: in der Nacht (at night). A time span is „von … bis“: von acht bis fünf (from eight to five).',
            },
            es: {
              title: 'um, am, von … bis',
              text: 'Delante de la hora va „um“: um sieben Uhr (a las siete). Delante de partes del día y de los días va „am“: am Morgen, am Abend, am Montag. Pero: in der Nacht (por la noche). Un intervalo se dice con „von … bis“: von acht bis fünf (de ocho a cinco).',
            },
            fr: {
              title: 'um, am, von … bis',
              text: 'Devant une heure, on met « um » : um sieben Uhr (à sept heures). Devant les moments de la journée et les jours, on met « am » : am Morgen, am Abend, am Montag. Mais : in der Nacht (la nuit). Une durée se dit avec « von … bis » : von acht bis fünf (de huit à cinq heures).',
            },
            it: {
              title: 'um, am, von … bis',
              text: 'Davanti all’ora si usa „um“: um sieben Uhr (alle sette). Davanti alle parti del giorno e ai giorni si usa „am“: am Morgen, am Abend, am Montag. Ma: in der Nacht (di notte). Un intervallo si dice con „von … bis“: von acht bis fünf (dalle otto alle cinque).',
            },
          },
        },
        {
          id: 'b5-2-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie um, am oder von … bis.',
          wordBank: ['um', 'am', 'von', 'bis'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Ich frühstücke ' },
            { kind: 'GAP', gapId: 'z1', solution: ['um'], width: 4 },
            { kind: 'TEXT', text: ' sieben Uhr.\n2. ' },
            { kind: 'GAP', gapId: 'z2', solution: ['Am'], width: 4 },
            { kind: 'TEXT', text: ' Abend koche ich.\n3. Ich arbeite ' },
            { kind: 'GAP', gapId: 'z3', solution: ['von'], width: 4 },
            { kind: 'TEXT', text: ' neun ' },
            { kind: 'GAP', gapId: 'z4', solution: ['bis'], width: 4 },
            { kind: 'TEXT', text: ' fünf.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – warum das „auf“ ans Satzende rutscht.
  {
    order: 3,
    title: 'Ich stehe um sieben auf',
    subtitle: 'Trennbare Verben',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'b5-3-h1', type: 'HEADING', level: 1, text: 'Ich stehe um sieben auf' },
        {
          id: 'b5-3-intro',
          type: 'TEXT',
          text: 'Auf der letzten Seite stand: „Ich stehe um halb sechs auf.“ Das Verb heißt aber „aufstehen“. Warum steht „auf“ am Ende?',
          translations: {
            en: 'On the last page it said: „Ich stehe um halb sechs auf.“ But the verb is „aufstehen“. Why is „auf“ at the end?',
            es: 'En la página anterior ponía: „Ich stehe um halb sechs auf.“ Pero el verbo es „aufstehen“. ¿Por qué „auf“ va al final?',
            fr: 'À la page précédente, on lisait : « Ich stehe um halb sechs auf. » Mais le verbe est « aufstehen ». Pourquoi « auf » est-il à la fin ?',
            it: 'Nella pagina precedente c’era scritto: „Ich stehe um halb sechs auf.“ Ma il verbo è „aufstehen“. Perché „auf“ sta alla fine?',
          },
        },
        {
          id: 'b5-3-info-trennbar',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Trennbare Verben: die Satzklammer',
          text: 'Viele Verben haben eine Vorsilbe wie auf-, an-, ein-, fern-, mit- oder aus-. Im Hauptsatz trennt sie sich: Der Verbstamm steht auf Position 2, die Vorsilbe ganz am Ende. Zusammen bilden sie eine Klammer um den Satz.',
          translations: {
            en: {
              title: 'Separable verbs: the sentence bracket',
              text: 'Many verbs have a prefix such as auf-, an-, ein-, fern-, mit- or aus-. In a main clause it separates: the verb stem goes in position 2, the prefix right at the end. Together they form a bracket around the sentence.',
            },
            es: {
              title: 'Verbos separables: el paréntesis verbal',
              text: 'Muchos verbos tienen un prefijo como auf-, an-, ein-, fern-, mit- o aus-. En la oración principal se separa: la raíz del verbo va en la posición 2, el prefijo al final del todo. Juntos forman un paréntesis alrededor de la frase.',
            },
            fr: {
              title: 'Verbes séparables : la parenthèse verbale',
              text: 'Beaucoup de verbes ont un préfixe comme auf-, an-, ein-, fern-, mit- ou aus-. Dans la proposition principale, il se détache : le radical du verbe est en position 2, le préfixe tout à la fin. Ensemble, ils forment une parenthèse autour de la phrase.',
            },
            it: {
              title: 'Verbi separabili: la parentesi verbale',
              text: 'Molti verbi hanno un prefisso come auf-, an-, ein-, fern-, mit- o aus-. Nella frase principale si separa: la radice del verbo va in posizione 2, il prefisso alla fine. Insieme formano una parentesi attorno alla frase.',
            },
          },
          table: {
            headers: ['Position 1', 'Position 2', 'Mitte', 'Ende'],
            rows: [
              ['Ich', 'stehe', 'um sieben', 'auf.'],
              ['Die Arbeit', 'fängt', 'um acht', 'an.'],
              ['Wir', 'kaufen', 'am Samstag', 'ein.'],
              ['Abends', 'sehe', 'ich', 'fern.'],
              ['Wann', 'rufst', 'du Mama', 'an?'],
            ],
          },
        },
        {
          id: 'b5-3-cloze-trennbar',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie das Verb in zwei Teilen.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. (aufstehen) Ich ' },
            { kind: 'GAP', gapId: 't1', solution: ['stehe'], width: 6 },
            { kind: 'TEXT', text: ' um sechs ' },
            { kind: 'GAP', gapId: 't2', solution: ['auf'], width: 4 },
            { kind: 'TEXT', text: '.\n2. (einkaufen) Paul ' },
            { kind: 'GAP', gapId: 't3', solution: ['kauft'], width: 6 },
            { kind: 'TEXT', text: ' im Supermarkt ' },
            { kind: 'GAP', gapId: 't4', solution: ['ein'], width: 4 },
            { kind: 'TEXT', text: '.\n3. (anrufen) ' },
            { kind: 'GAP', gapId: 't5', solution: ['Rufst'], width: 6 },
            { kind: 'TEXT', text: ' du mich morgen ' },
            { kind: 'GAP', gapId: 't6', solution: ['an'], width: 4 },
            { kind: 'TEXT', text: '?' },
          ],
        },
        {
          id: 'b5-3-order-1',
          type: 'ORDERING',
          instruction: 'Bilden Sie einen Satz.',
          items: [
            { id: 'a1', text: 'Der' },
            { id: 'a2', text: 'Film' },
            { id: 'a3', text: 'fängt' },
            { id: 'a4', text: 'um' },
            { id: 'a5', text: 'acht' },
            { id: 'a6', text: 'an.' },
          ],
          solution: ['a1', 'a2', 'a3', 'a4', 'a5', 'a6'],
        },
        {
          id: 'b5-3-order-2',
          type: 'ORDERING',
          instruction: 'Das Verb steht auf Position 2 – auch wenn die Zeit am Anfang steht.',
          items: [
            { id: 'b1', text: 'Am' },
            { id: 'b2', text: 'Sonntag' },
            { id: 'b3', text: 'räume' },
            { id: 'b4', text: 'ich' },
            { id: 'b5', text: 'auf.' },
          ],
          solution: ['b1', 'b2', 'b3', 'b4', 'b5'],
        },
        {
          id: 'b5-3-choice',
          type: 'CHOICE',
          instruction: 'Welcher Satz ist richtig?',
          multiple: false,
          options: [
            { id: 'c1', text: 'Ich fernsehe am Abend.' },
            { id: 'c2', text: 'Am Abend ich sehe fern.' },
            { id: 'c3', text: 'Am Abend sehe ich fern.' },
          ],
          solution: ['c3'],
          explanation:
            '„fernsehen“ ist trennbar, also steht „fern“ am Ende. Und das Verb steht immer auf Position 2 – steht „Am Abend“ vorn, kommt „ich“ nach dem Verb.',
          explanationTranslations: {
            en: '„fernsehen“ is separable, so „fern“ goes at the end. And the verb is always in position 2 – if „Am Abend“ comes first, „ich“ follows the verb.',
            es: '„fernsehen“ es separable, así que „fern“ va al final. Y el verbo siempre está en la posición 2 – si „Am Abend“ va delante, „ich“ va después del verbo.',
            fr: '« fernsehen » est séparable, donc « fern » va à la fin. Et le verbe est toujours en position 2 – si « Am Abend » est en tête, « ich » vient après le verbe.',
            it: '„fernsehen“ è separabile, quindi „fern“ va alla fine. E il verbo è sempre in posizione 2 – se „Am Abend“ è all’inizio, „ich“ va dopo il verbo.',
          },
        },
        {
          id: 'b5-3-info-betonung',
          type: 'INFO',
          variant: 'TIP',
          title: 'Trennbar oder nicht?',
          text: 'Trennbare Vorsilben sind betont: AUFstehen, ANrufen, EINkaufen. Die Vorsilben be-, ver-, er- und ge- sind unbetont und trennen sich nie: Ich bezahle. Ich verstehe.',
          translations: {
            en: {
              title: 'Separable or not?',
              text: 'Separable prefixes are stressed: AUFstehen, ANrufen, EINkaufen. The prefixes be-, ver-, er- and ge- are unstressed and never separate: Ich bezahle. Ich verstehe.',
            },
            es: {
              title: '¿Separable o no?',
              text: 'Los prefijos separables llevan el acento: AUFstehen, ANrufen, EINkaufen. Los prefijos be-, ver-, er- y ge- no llevan acento y nunca se separan: Ich bezahle. Ich verstehe.',
            },
            fr: {
              title: 'Séparable ou non ?',
              text: 'Les préfixes séparables sont accentués : AUFstehen, ANrufen, EINkaufen. Les préfixes be-, ver-, er- et ge- ne sont pas accentués et ne se séparent jamais : Ich bezahle. Ich verstehe.',
            },
            it: {
              title: 'Separabile o no?',
              text: 'I prefissi separabili sono accentati: AUFstehen, ANrufen, EINkaufen. I prefissi be-, ver-, er- e ge- non sono accentati e non si separano mai: Ich bezahle. Ich verstehe.',
            },
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – sich verabreden: Wochentage, Vorschlag, Antwort.
  {
    order: 4,
    title: 'Hast du am Samstag Zeit?',
    subtitle: 'Wochentage, sich verabreden',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'b5-4-h1', type: 'HEADING', level: 1, text: 'Hast du am Samstag Zeit?' },
        {
          id: 'b5-4-image',
          type: 'IMAGE',
          url: 'illustration:calendar-weekend',
          alt: 'Ein Wochenkalender, in dem das Wochenende farbig markiert ist.',
          caption: 'Was machst du am Wochenende?',
        },
        {
          id: 'b5-4-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: Die Woche',
          items: [
            { term: 'Montag', article: 'der', translations: { en: 'Monday' } },
            { term: 'Dienstag', article: 'der', translations: { en: 'Tuesday' } },
            { term: 'Mittwoch', article: 'der', translations: { en: 'Wednesday' } },
            { term: 'Donnerstag', article: 'der', translations: { en: 'Thursday' } },
            { term: 'Freitag', article: 'der', translations: { en: 'Friday' } },
            { term: 'Samstag', article: 'der', translations: { en: 'Saturday' } },
            { term: 'Sonntag', article: 'der', translations: { en: 'Sunday' } },
            { term: 'Wochenende', article: 'das', translations: { en: 'weekend' }, example: 'am Wochenende' },
            { term: 'heute', translations: { en: 'today' } },
            { term: 'morgen', translations: { en: 'tomorrow' } },
            { term: 'Zeit haben', translations: { en: 'to have time / be free' } },
          ],
        },
        {
          id: 'b5-4-dlg',
          type: 'DIALOGUE',
          title: 'Eine Verabredung',
          lines: [
            { speaker: 'Elif', text: 'Hallo Mira! Hast du am Samstag Zeit?' },
            { speaker: 'Mira', text: 'Am Samstag? Was machst du denn?' },
            { speaker: 'Elif', text: 'Ich gehe ins Kino. Kommst du mit?' },
            { speaker: 'Mira', text: 'Samstag geht leider nicht, da arbeite ich. Und am Sonntag?' },
            { speaker: 'Elif', text: 'Sonntag ist gut. Um wie viel Uhr?' },
            { speaker: 'Mira', text: 'Vielleicht um halb acht?' },
            { speaker: 'Elif', text: 'Prima, das passt. Bis Sonntag!' },
          ],
        },
        {
          id: 'b5-4-info-redemittel',
          type: 'INFO',
          variant: 'TIP',
          title: 'Vorschlagen, zusagen, absagen',
          text: 'Diese Sätze helfen bei jeder Verabredung. Bei einer Absage nennt man meistens einen Grund und macht einen neuen Vorschlag.',
          translations: {
            en: {
              title: 'Suggesting, accepting, declining',
              text: 'These phrases help with any arrangement. When declining, people usually give a reason and suggest a new time.',
            },
            es: {
              title: 'Proponer, aceptar, rechazar',
              text: 'Estas frases sirven para cualquier cita. Al rechazar, se suele dar un motivo y proponer otra fecha.',
            },
            fr: {
              title: 'Proposer, accepter, refuser',
              text: 'Ces phrases servent pour tout rendez-vous. Quand on refuse, on donne généralement une raison et on propose un autre moment.',
            },
            it: {
              title: 'Proporre, accettare, rifiutare',
              text: 'Queste frasi servono per ogni appuntamento. Quando si rifiuta, di solito si dà un motivo e si propone un’altra data.',
            },
          },
          table: {
            headers: ['vorschlagen', 'zusagen', 'absagen'],
            rows: [
              ['Hast du am … Zeit?', 'Ja, gern!', 'Tut mir leid, da habe ich keine Zeit.'],
              ['Kommst du mit?', 'Gute Idee!', 'Leider nicht, da arbeite ich.'],
              ['Gehen wir …?', 'Das passt gut.', '… geht leider nicht. Und am …?'],
            ],
          },
        },
        {
          id: 'b5-4-match',
          type: 'MATCHING',
          instruction: 'Ordnen Sie Frage und Antwort zu.',
          left: [
            { id: 'l1', text: 'Hast du am Freitag Zeit?' },
            { id: 'l2', text: 'Um wie viel Uhr?' },
            { id: 'l3', text: 'Kommst du mit ins Café?' },
            { id: 'l4', text: 'Welcher Tag ist heute?' },
          ],
          right: [
            { id: 'r1', text: 'Nein, da arbeite ich.' },
            { id: 'r2', text: 'Um Viertel nach sieben.' },
            { id: 'r3', text: 'Ja, gern!' },
            { id: 'r4', text: 'Heute ist Mittwoch.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'b5-4-choice',
          type: 'CHOICE',
          instruction: 'Wann treffen sich Elif und Mira?',
          multiple: false,
          options: [
            { id: 'c1', text: 'am Samstag um 19:30 Uhr' },
            { id: 'c2', text: 'am Sonntag um 19:30 Uhr' },
            { id: 'c3', text: 'am Sonntag um 20:30 Uhr' },
          ],
          solution: ['c2'],
          explanation: 'Am Samstag arbeitet Mira. Sie treffen sich am Sonntag um halb acht – abends also 19:30 Uhr.',
          explanationTranslations: {
            en: 'Mira works on Saturday. They meet on Sunday at „halb acht“ – in the evening, so 7:30 pm.',
            es: 'El sábado Mira trabaja. Quedan el domingo a „halb acht“ – por la tarde, o sea, a las 19:30.',
            fr: 'Samedi, Mira travaille. Elles se retrouvent dimanche à « halb acht » – le soir, donc 19 h 30.',
            it: 'Sabato Mira lavora. Si incontrano domenica alle „halb acht“ – di sera, quindi alle 19:30.',
          },
        },
        {
          id: 'b5-4-order',
          type: 'ORDERING',
          instruction: 'Bilden Sie eine Frage.',
          items: [
            { id: 'q1', text: 'Hast' },
            { id: 'q2', text: 'du' },
            { id: 'q3', text: 'am' },
            { id: 'q4', text: 'Montag' },
            { id: 'q5', text: 'Zeit?' },
          ],
          solution: ['q1', 'q2', 'q3', 'q4', 'q5'],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – Rückblick, zum Schluss der eigene Tagesablauf.
  {
    order: 5,
    title: 'Kannst du das schon?',
    subtitle: 'Rückblick auf das ganze Kapitel',
    estimatedMinutes: 15,
    content: {
      version: v,
      blocks: [
        { id: 'b5-5-h1', type: 'HEADING', level: 1, text: 'Kannst du das schon?' },
        {
          id: 'b5-5-intro',
          type: 'TEXT',
          text: 'Prüfen Sie, was Sie aus Kapitel 5 mitnehmen. Am Ende beschreiben Sie Ihren Tag.',
          translations: {
            en: 'Check what you take away from Chapter 5. At the end, you’ll describe your day.',
            es: 'Compruebe qué se lleva del Capítulo 5. Al final describirá su día.',
            fr: 'Vérifiez ce que vous retenez du chapitre 5. À la fin, vous décrirez votre journée.',
            it: 'Verifichi cosa porta a casa dal Capitolo 5. Alla fine descriverà la sua giornata.',
          },
        },
        {
          id: 'b5-5-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie den Text.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Am Montag ' },
            { kind: 'GAP', gapId: 'r1', solution: ['stehe'], width: 6 },
            { kind: 'TEXT', text: ' ich um sechs Uhr auf. Der Kurs fängt ' },
            { kind: 'GAP', gapId: 'r2', solution: ['um'], width: 4 },
            { kind: 'TEXT', text: ' halb neun ' },
            { kind: 'GAP', gapId: 'r3', solution: ['an'], width: 4 },
            { kind: 'TEXT', text: '. Nachmittags kaufe ich ' },
            { kind: 'GAP', gapId: 'r4', solution: ['ein'], width: 4 },
            { kind: 'TEXT', text: '. ' },
            { kind: 'GAP', gapId: 'r5', solution: ['Am'], width: 4 },
            { kind: 'TEXT', text: ' Abend sehe ich fern.' },
          ],
        },
        {
          id: 'b5-5-match',
          type: 'MATCHING',
          instruction: 'Welche Uhrzeit ist das?',
          left: [
            { id: 'm1', text: 'halb acht' },
            { id: 'm2', text: 'Viertel vor zwölf' },
            { id: 'm3', text: 'zwanzig nach zwei' },
            { id: 'm4', text: 'fünf vor halb vier' },
          ],
          right: [
            { id: 'y1', text: '7:30' },
            { id: 'y2', text: '11:45' },
            { id: 'y3', text: '2:20' },
            { id: 'y4', text: '3:25' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'y1' },
            { leftId: 'm2', rightId: 'y2' },
            { leftId: 'm3', rightId: 'y3' },
            { leftId: 'm4', rightId: 'y4' },
          ],
        },
        {
          id: 'b5-5-choice',
          type: 'CHOICE',
          instruction: 'Welche Sätze sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'k1', text: 'Ich rufe dich morgen an.' },
            { id: 'k2', text: 'Um acht Uhr ich frühstücke.' },
            { id: 'k3', text: 'Wir kaufen am Samstag ein.' },
            { id: 'k4', text: 'Der Film anfängt um neun.' },
          ],
          solution: ['k1', 'k3'],
          explanation:
            'Das Verb steht auf Position 2: Um acht Uhr frühstücke ich. Trennbare Verben teilen sich: Der Film fängt um neun an.',
          explanationTranslations: {
            en: 'The verb is in position 2: Um acht Uhr frühstücke ich. Separable verbs split: Der Film fängt um neun an.',
            es: 'El verbo va en la posición 2: Um acht Uhr frühstücke ich. Los verbos separables se dividen: Der Film fängt um neun an.',
            fr: 'Le verbe est en position 2 : Um acht Uhr frühstücke ich. Les verbes séparables se séparent : Der Film fängt um neun an.',
            it: 'Il verbo sta in posizione 2: Um acht Uhr frühstücke ich. I verbi separabili si dividono: Der Film fängt um neun an.',
          },
        },
        {
          id: 'b5-5-writing',
          type: 'WRITING',
          instruction: 'Mein Tag',
          prompt:
            'Beschreiben Sie einen normalen Tag in fünf bis sieben Sätzen. Wann stehen Sie auf? Was machen Sie morgens, mittags und abends? Nutzen Sie Uhrzeiten und mindestens drei trennbare Verben.',
          minWords: 30,
          maxWords: 120,
          aiFeedback: true,
          sampleAnswer:
            'Ich stehe um sieben Uhr auf. Um halb acht frühstücke ich mit meiner Familie. Meine Arbeit fängt um neun an. Mittags esse ich mit Kollegen. Um fünf ist die Arbeit zu Ende, dann kaufe ich ein. Am Abend koche ich und rufe meine Mutter an. Um elf gehe ich ins Bett.',
        },
      ],
    },
  },
];
