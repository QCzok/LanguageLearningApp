import type { CefrLevel } from '@prisma/client';

/**
 * Fragen der Einstufungstests.
 *
 * Der Test läuft als Leiter: Wer auf einer Stufe mindestens drei der fünf
 * Fragen richtig hat, steigt zur nächsten auf; die erste Stufe, die nicht
 * bestanden wird, ist das Ergebnis (siehe `PlacementService`). Damit diese
 * Rechnung auf jeder Stufe dieselbe ist, hat jede Stufe genau fünf Fragen –
 * `QUESTIONS_PER_LEVEL` im Service ist die zugehörige Zahl.
 *
 * Abgefragt wird pro Stufe bewusst das, was dort neu dazukommt, nicht
 * Wortschatz querbeet: So trennt eine Stufe tatsächlich von der nächsten,
 * statt Glück zu belohnen.
 */
export interface PlacementQuestionSeed {
  level: CefrLevel;
  prompt: string;
  helperText?: string;
  options: string[];
  correctIndex: number;
}

/** Einstufungstest Englisch – fünf Fragen je Niveau, A1 bis C2. */
export const PLACEMENT_SEEDS_EN: PlacementQuestionSeed[] = [
  {
    level: 'A1',
    prompt: 'Choose the correct form: "She ___ a teacher."',
    options: ['is', 'are', 'am', 'be'],
    correctIndex: 0,
  },
  {
    level: 'A1',
    prompt: 'What is the plural of "child"?',
    options: ['childs', 'children', 'childrens', 'childes'],
    correctIndex: 1,
  },
  {
    level: 'A1',
    prompt: 'Complete: "I ___ coffee every morning."',
    options: ['drinks', 'drinking', 'drink', 'drank'],
    correctIndex: 2,
  },
  {
    level: 'A1',
    prompt: 'Which word means "Haus"?',
    options: ['horse', 'house', 'hose', 'mouse'],
    correctIndex: 1,
  },
  {
    level: 'A1',
    prompt: 'Which word means "Tisch"?',
    options: ['chair', 'table', 'door', 'window'],
    correctIndex: 1,
  },
  {
    level: 'A2',
    prompt: 'Complete: "Yesterday I ___ to the cinema."',
    options: ['go', 'gone', 'went', 'going'],
    correctIndex: 2,
  },
  {
    level: 'A2',
    prompt: 'Choose the comparative: "This book is ___ than that one."',
    options: ['more interesting', 'interestinger', 'most interesting', 'the interesting'],
    correctIndex: 0,
  },
  {
    level: 'A2',
    prompt: 'Complete: "There ___ any milk in the fridge."',
    options: ["isn't", "aren't", "wasn't been", 'not is'],
    correctIndex: 0,
  },
  {
    level: 'A2',
    prompt: 'Which sentence is correct?',
    options: [
      'I am living here since 2019.',
      'I live here since 2019.',
      'I have lived here since 2019.',
      'I lived here since 2019.',
    ],
    correctIndex: 2,
  },
  {
    level: 'A2',
    prompt: 'Complete: "I have lived here ___ 2019."',
    options: ['since', 'for', 'from', 'ago'],
    correctIndex: 0,
  },
  {
    level: 'B1',
    prompt: 'Complete: "If I had more time, I ___ travel more often."',
    options: ['will', 'would', 'have', 'did'],
    correctIndex: 1,
  },
  {
    level: 'B1',
    prompt: 'Choose the best phrasal verb: "Could you ___ the meeting to next week?"',
    options: ['put off', 'put on', 'put up', 'put down'],
    correctIndex: 0,
  },
  {
    level: 'B1',
    prompt: 'Passive voice: "They built the bridge in 1890." →',
    options: [
      'The bridge was built in 1890.',
      'The bridge is built in 1890.',
      'The bridge has built in 1890.',
      'The bridge were built in 1890.',
    ],
    correctIndex: 0,
  },
  {
    level: 'B1',
    prompt: 'Complete: "She suggested ___ a different approach."',
    options: ['to try', 'trying', 'try', 'tried'],
    correctIndex: 1,
  },
  {
    level: 'B1',
    prompt: 'Complete: "If I ___ more time, I would travel more."',
    options: ['have', 'had', 'will have', 'am having'],
    correctIndex: 1,
  },
  {
    level: 'B2',
    prompt: 'Complete: "Hardly ___ the door when the phone rang."',
    options: ['I had closed', 'had I closed', 'I closed', 'did I close'],
    correctIndex: 1,
  },
  {
    level: 'B2',
    prompt: 'Which word best fits: "The evidence was largely ___ ."',
    options: ['circumstantial', 'circumstance', 'circumstantially', 'circumstanced'],
    correctIndex: 0,
  },
  {
    level: 'B2',
    prompt: 'Choose the correct sentence.',
    options: [
      'I wish I would have known earlier.',
      'I wish I had known earlier.',
      'I wish I knew it earlier yesterday.',
      'I wish I have known earlier.',
    ],
    correctIndex: 1,
  },
  {
    level: 'B2',
    prompt: 'Complete: "The proposal is contingent ___ approval from the board."',
    options: ['of', 'to', 'on', 'in'],
    correctIndex: 2,
  },
  {
    level: 'B2',
    prompt: 'Choose the correct preposition: "She insisted ___ paying for dinner."',
    options: ['on', 'in', 'at', 'for'],
    correctIndex: 0,
  },
  {
    level: 'C1',
    prompt: 'Choose the closest meaning of "to hedge one\'s bets".',
    options: [
      'to commit fully to one option',
      'to reduce risk by keeping options open',
      'to gamble recklessly',
      'to abandon a plan',
    ],
    correctIndex: 1,
  },
  {
    level: 'C1',
    prompt: 'Complete: "Not until much later ___ the full extent of the damage."',
    options: [
      'we realised',
      'did we realise',
      'we had realised',
      'realised we',
    ],
    correctIndex: 1,
  },
  {
    level: 'C1',
    prompt: 'Which register is most formal?',
    options: [
      'We should look into it.',
      "Let's check it out.",
      'The matter warrants further investigation.',
      'Someone ought to have a look.',
    ],
    correctIndex: 2,
  },
  {
    level: 'C1',
    prompt: 'Complete: "His argument, ___ compelling, ultimately rested on flawed data."',
    options: ['however', 'albeit', 'whereas', 'despite'],
    correctIndex: 1,
  },
  {
    level: 'C1',
    prompt: 'Complete: "The project was called off ___ a lack of funding."',
    options: ['owing to', 'due of', 'thanks of', 'because'],
    correctIndex: 0,
  },
  {
    level: 'C2',
    prompt: 'Identify the sentence with correct subjunctive usage.',
    options: [
      'It is imperative that he submits the report.',
      'It is imperative that he submit the report.',
      'It is imperative that he will submit the report.',
      'It is imperative that he submitted the report.',
    ],
    correctIndex: 1,
  },
  {
    level: 'C2',
    prompt: 'What does "to damn with faint praise" mean?',
    options: [
      'to criticise openly',
      'to praise so mildly that it implies criticism',
      'to give overwhelming praise',
      'to remain silent about a failure',
    ],
    correctIndex: 1,
  },
  {
    level: 'C2',
    prompt: 'Choose the most idiomatic completion: "The reforms were, ___, a resounding success."',
    options: ['by and large', 'by and by', 'large and by', 'at large by'],
    correctIndex: 0,
  },
  {
    level: 'C2',
    prompt: 'Which sentence contains a mixed conditional?',
    options: [
      'If I had studied medicine, I would be a doctor now.',
      'If I study medicine, I will be a doctor.',
      'If I studied medicine, I would be a doctor.',
      'If I had studied medicine, I would have been a doctor.',
    ],
    correctIndex: 0,
  },
  {
    level: 'C2',
    prompt: 'What does "a Pyrrhic victory" mean?',
    options: [
      'a win that costs more than it is worth',
      'a victory won without any effort',
      'a victory shared between two sides',
      'a victory that is later reversed',
    ],
    correctIndex: 0,
  },
];

/**
 * Einstufungstest Spanisch – fünf Fragen je Niveau, A1 bis C2.
 *
 * Je Stufe ein Phänomen, das dort neu dazukommt:
 *
 *  A1  ser/estar, Artikel, Präsens regelmäßig, Grundwortschatz, Fragewörter
 *  A2  Indefinido, Gerundium, Vergleich, Imperfecto, Höflichkeitsfragen
 *  B1  Subjuntivo Präsens, Konditional, Verlaufsdauer, indirekte Rede
 *  B2  Subjuntivo nach Konzessiv- und Temporalsätzen, Passiv, Redewendungen
 *  C1  irreale Bedingungen der Vergangenheit, Sprichwörter, Modusgebrauch
 *  C2  Register, feste Wendungen, Queísmo/Dequeísmo
 *
 * Die Fragen sind auf Spanisch gestellt – wer sie nicht versteht, gehört
 * ohnehin unter das jeweilige Niveau. Nur auf A1 und A2 steht zusätzlich eine
 * deutsche Hilfe darunter, damit der Einstieg nicht an der Aufgabenstellung
 * selbst scheitert.
 */
export const PLACEMENT_SEEDS_ES: PlacementQuestionSeed[] = [
  // ------------------------------------------------------------------- A1
  {
    level: 'A1',
    prompt: 'Completa: "Yo ___ estudiante."',
    helperText: 'Welche Form von „ser" passt zu „yo"?',
    options: ['soy', 'eres', 'es', 'son'],
    correctIndex: 0,
  },
  {
    level: 'A1',
    prompt: 'Completa: "___ casa es muy grande."',
    helperText: 'Welcher Artikel gehört zu „casa"?',
    options: ['El', 'La', 'Los', 'Las'],
    correctIndex: 1,
  },
  {
    level: 'A1',
    prompt: 'Completa: "Nosotros ___ en Madrid."',
    helperText: 'Verb: vivir (wohnen).',
    options: ['vivo', 'vives', 'vivimos', 'viven'],
    correctIndex: 2,
  },
  {
    level: 'A1',
    prompt: '¿Cómo se dice "Guten Morgen"?',
    options: ['Buenas noches', 'Buenos días', 'Hasta luego', 'De nada'],
    correctIndex: 1,
  },
  {
    level: 'A1',
    prompt: 'Completa: "¿___ años tienes?"',
    helperText: 'Gefragt ist nach dem Alter.',
    options: ['Cómo', 'Cuántos', 'Dónde', 'Qué'],
    correctIndex: 1,
  },

  // ------------------------------------------------------------------- A2
  {
    level: 'A2',
    prompt: 'Completa: "Ayer ___ al mercado."',
    helperText: 'Gestern – abgeschlossene Vergangenheit.',
    options: ['voy', 'fui', 'iré', 'iba a ir'],
    correctIndex: 1,
  },
  {
    level: 'A2',
    prompt: 'Completa: "Ahora mismo estoy ___ la televisión."',
    helperText: 'Verlaufsform von „ver".',
    options: ['viendo', 'veyendo', 'vendo', 'viviendo'],
    correctIndex: 0,
  },
  {
    level: 'A2',
    prompt: 'Completa: "Este libro es más interesante ___ el otro."',
    options: ['que', 'como', 'de', 'a'],
    correctIndex: 0,
  },
  {
    level: 'A2',
    prompt: 'Completa: "Cuando era niño, ___ mucho al fútbol."',
    helperText: 'Gewohnheit in der Vergangenheit.',
    options: ['jugué', 'jugaba', 'jugaré', 'he jugado'],
    correctIndex: 1,
  },
  {
    level: 'A2',
    prompt: 'Completa: "¿Me ___ pasar la sal, por favor?"',
    options: ['puedes', 'puedo', 'pueden', 'podéis'],
    correctIndex: 0,
  },

  // ------------------------------------------------------------------- B1
  {
    level: 'B1',
    prompt: 'Completa: "Espero que ___ pronto."',
    options: ['vienes', 'vengas', 'vendrás', 'viniste'],
    correctIndex: 1,
  },
  {
    level: 'B1',
    prompt: 'Completa: "Si tuviera tiempo, ___ contigo."',
    options: ['voy', 'iría', 'iré', 'fui'],
    correctIndex: 1,
  },
  {
    level: 'B1',
    prompt: 'Completa: "Llevo tres años ___ español."',
    options: ['estudiando', 'estudiado', 'estudiar', 'estudio'],
    correctIndex: 0,
  },
  {
    level: 'B1',
    prompt: 'Completa: "Me dijo que ___ al día siguiente."',
    options: ['llega', 'llegará', 'llegaría', 'llegue'],
    correctIndex: 2,
  },
  {
    level: 'B1',
    prompt: 'Completa: "No creo que ___ razón."',
    options: ['tiene', 'tenga', 'tendrá', 'tuvo'],
    correctIndex: 1,
  },

  // ------------------------------------------------------------------- B2
  {
    level: 'B2',
    prompt: 'Completa: "Por mucho que lo ___, no lo conseguirás."',
    options: ['intentas', 'intentes', 'intentarás', 'intentabas'],
    correctIndex: 1,
  },
  {
    level: 'B2',
    prompt: 'Completa: "En cuanto ___ algo nuevo, te aviso."',
    options: ['sepa', 'sé', 'sabré', 'supe'],
    correctIndex: 0,
  },
  {
    level: 'B2',
    prompt: 'Elige la voz pasiva correcta: "El informe ___ por el director ayer."',
    options: ['fue firmado', 'era firmado', 'ha sido firmando', 'estuvo firmando'],
    correctIndex: 0,
  },
  {
    level: 'B2',
    prompt: 'Completa: "Se marchó sin que nadie lo ___."',
    options: ['nota', 'notara', 'notaría', 'notará'],
    correctIndex: 1,
  },
  {
    level: 'B2',
    prompt: '¿Qué significa la expresión "echar una mano"?',
    options: [
      'ayudar a alguien',
      'despedirse de alguien',
      'darse mucha prisa',
      'enfadarse con alguien',
    ],
    correctIndex: 0,
  },

  // ------------------------------------------------------------------- C1
  {
    level: 'C1',
    prompt: 'Completa: "De haberlo sabido, ___ antes."',
    options: ['habría venido', 'vendría', 'he venido', 'vine'],
    correctIndex: 0,
  },
  {
    level: 'C1',
    prompt: 'Completa: "___ sido por su ayuda, habríamos fracasado."',
    options: ['De no haber', 'Si no hubiera de', 'A no ser de', 'Por no haber'],
    correctIndex: 0,
  },
  {
    level: 'C1',
    prompt: '¿Qué significa el refrán "Quien mucho abarca, poco aprieta"?',
    options: [
      'Quien demasiadas cosas emprende, ninguna hace bien',
      'Quien trabaja mucho siempre consigue lo que quiere',
      'Conviene abrazar a los amigos con frecuencia',
      'Hay que ahorrar dinero para tiempos difíciles',
    ],
    correctIndex: 0,
  },
  {
    level: 'C1',
    prompt: 'Completa: "Me consta que ___ la verdad."',
    options: ['dice', 'diga', 'dijera', 'dijese'],
    correctIndex: 0,
  },
  {
    level: 'C1',
    prompt: 'Completa: "No es que no ___ ganas, es que no tengo tiempo."',
    options: ['tengo', 'tenga', 'tendré', 'tuve'],
    correctIndex: 1,
  },

  // ------------------------------------------------------------------- C2
  {
    level: 'C2',
    prompt: '¿Qué significa la locución "a la buena de Dios"?',
    options: [
      'sin plan ni preparación alguna',
      'con muchísima suerte',
      'con la ayuda de los demás',
      'a toda velocidad',
    ],
    correctIndex: 0,
  },
  {
    level: 'C2',
    prompt: 'Elige la formulación más adecuada en un escrito formal.',
    options: [
      'Mándame los papeles cuanto antes.',
      'Le agradecería que me remitiera la documentación.',
      '¿Me pasas los papeles?',
      'Necesito los papeles ya.',
    ],
    correctIndex: 1,
  },
  {
    level: 'C2',
    prompt: 'Completa: "Sea cual ___ el motivo, la decisión ya está tomada."',
    options: ['es', 'sea', 'fuera', 'será'],
    correctIndex: 1,
  },
  {
    level: 'C2',
    prompt: '¿Qué significa "dar gato por liebre"?',
    options: [
      'engañar haciendo pasar una cosa por otra mejor',
      'regalar algo de mucho valor',
      'cambiar de opinión de repente',
      'aprovechar una oportunidad única',
    ],
    correctIndex: 0,
  },
  {
    level: 'C2',
    prompt: 'Elige la frase correcta.',
    options: [
      'Me alegro de que hayas venido.',
      'Me alegro que hayas venido.',
      'Me alegro de que has venido.',
      'Me alegro que has venido.',
    ],
    correctIndex: 0,
  },
];

/**
 * Einstufungstest Deutsch – fünf Fragen je Niveau, A1 bis C2.
 *
 * Je Stufe ein Phänomen, das dort neu dazukommt:
 *
 *  A1  sein/Präsens, Artikel, Plural, Fragewörter
 *  A2  Perfekt, Dativ, Komparativ, Präpositionen, Nebensatz mit „weil"
 *  B1  Konjunktiv II, Relativpronomen, Passiv, feste Präpositionen
 *  B2  indirekte Rede, erweitertes Attribut, Präpositionalobjekt, Redewendung
 *  C1  Konzessivsatz, Passiversatzform, idiomatische Wendungen
 *  C2  Register, Genitivpräpositionen, feste Wendungen
 *
 * Anders als beim spanischen Test steht hier kaum eine Hilfe unter der Frage:
 * Die Aufgaben sind auf Deutsch gestellt, und eine deutsche Erklärung darunter
 * würde auf A1 nichts erklären, was die Frage nicht schon sagt. Wo sie steht,
 * nennt sie nur die Grundform des gesuchten Worts.
 */
export const PLACEMENT_SEEDS_DE: PlacementQuestionSeed[] = [
  // ------------------------------------------------------------------- A1
  {
    level: 'A1',
    prompt: 'Ergänze: "Ich ___ Anna."',
    options: ['bin', 'bist', 'ist', 'sind'],
    correctIndex: 0,
  },
  {
    level: 'A1',
    prompt: 'Ergänze: "___ Haus ist sehr groß."',
    options: ['Der', 'Die', 'Das', 'Den'],
    correctIndex: 2,
  },
  {
    level: 'A1',
    prompt: 'Ergänze: "Wir ___ aus Spanien."',
    helperText: 'Grundform: kommen',
    options: ['komme', 'kommst', 'kommen', 'kommt'],
    correctIndex: 2,
  },
  {
    level: 'A1',
    prompt: 'Wie heißt der Plural von "das Kind"?',
    options: ['die Kinder', 'die Kinden', 'die Kindern', 'die Kinds'],
    correctIndex: 0,
  },
  {
    level: 'A1',
    prompt: 'Ergänze: "___ alt bist du?"',
    options: ['Wo', 'Wie', 'Wer', 'Was'],
    correctIndex: 1,
  },

  // ------------------------------------------------------------------- A2
  {
    level: 'A2',
    prompt: 'Ergänze: "Gestern ___ ich ins Kino gegangen."',
    options: ['bin', 'habe', 'war', 'hatte'],
    correctIndex: 0,
  },
  {
    level: 'A2',
    prompt: 'Ergänze: "Ich fahre ___ Bus zur Arbeit."',
    options: ['mit dem', 'mit der', 'mit den', 'mit das'],
    correctIndex: 0,
  },
  {
    level: 'A2',
    prompt: 'Ergänze: "Mein Bruder ist ___ als ich."',
    helperText: 'Grundform: alt',
    options: ['älter', 'alter', 'mehr alt', 'am ältesten'],
    correctIndex: 0,
  },
  {
    level: 'A2',
    prompt: 'Ergänze: "Ich gebe ___ Freund ein Buch."',
    options: ['meinem', 'meinen', 'mein', 'meines'],
    correctIndex: 0,
  },
  {
    level: 'A2',
    prompt: 'Ergänze: "___ ich krank war, bin ich zu Hause geblieben."',
    options: ['Weil', 'Denn', 'Aber', 'Und'],
    correctIndex: 0,
  },

  // ------------------------------------------------------------------- B1
  {
    level: 'B1',
    prompt: 'Ergänze: "Wenn ich mehr Zeit ___, würde ich mehr lesen."',
    options: ['habe', 'hätte', 'hatte', 'haben werde'],
    correctIndex: 1,
  },
  {
    level: 'B1',
    prompt: 'Ergänze: "Das ist der Mann, ___ ich gestern getroffen habe."',
    options: ['der', 'den', 'dem', 'dessen'],
    correctIndex: 1,
  },
  {
    level: 'B1',
    prompt: 'Ergänze: "Das Haus ___ 1920 gebaut."',
    options: ['wurde', 'hat', 'ist worden', 'wird geworden'],
    correctIndex: 0,
  },
  {
    level: 'B1',
    prompt: 'Ergänze: "Ich freue mich ___ das Wochenende."',
    options: ['auf', 'über', 'für', 'an'],
    correctIndex: 0,
  },
  {
    level: 'B1',
    prompt: 'Ergänze: "Er tat so, ___ er nichts gehört hätte."',
    options: ['als ob', 'wenn', 'obwohl', 'damit'],
    correctIndex: 0,
  },

  // ------------------------------------------------------------------- B2
  {
    level: 'B2',
    prompt: 'Ergänze: "___ des schlechten Wetters fand das Fest statt."',
    options: ['Trotz', 'Wegen', 'Während', 'Statt'],
    correctIndex: 0,
  },
  {
    level: 'B2',
    prompt: 'Indirekte Rede: "Er sagte, er ___ keine Zeit."',
    options: ['habe', 'hat', 'haben', 'hatte gehabt'],
    correctIndex: 0,
  },
  {
    level: 'B2',
    prompt: 'Ergänze: "Die ___ Diskussion dauerte mehrere Stunden."',
    options: ['gestern geführte', 'gestern führende', 'gestern geführt', 'gestern zu führen'],
    correctIndex: 0,
  },
  {
    level: 'B2',
    prompt: 'Ergänze: "Es ist schwierig, ___ diesem Problem umzugehen."',
    options: ['mit', 'an', 'für', 'auf'],
    correctIndex: 0,
  },
  {
    level: 'B2',
    prompt: 'Was bedeutet "die Nase voll haben"?',
    options: [
      'keine Lust mehr auf etwas haben',
      'stark erkältet sein',
      'sehr neugierig sein',
      'großen Hunger haben',
    ],
    correctIndex: 0,
  },

  // ------------------------------------------------------------------- C1
  {
    level: 'C1',
    prompt: 'Ergänze: "___ er sich sehr angestrengt hatte, bestand er die Prüfung nicht."',
    options: ['Obwohl', 'Weil', 'Damit', 'Indem'],
    correctIndex: 0,
  },
  {
    level: 'C1',
    prompt: 'Ergänze: "Der Antrag ist bis Freitag ___."',
    options: ['einzureichen', 'eingereicht zu', 'zu einreichen', 'einreichend'],
    correctIndex: 0,
  },
  {
    level: 'C1',
    prompt: 'Was bedeutet "etwas auf die lange Bank schieben"?',
    options: [
      'etwas immer wieder aufschieben',
      'etwas öffentlich bekannt machen',
      'etwas sorgfältig ordnen',
      'jemanden für etwas loben',
    ],
    correctIndex: 0,
  },
  {
    level: 'C1',
    prompt: 'Was bedeutet der Satz "Er ließ sich das nicht zweimal sagen"?',
    options: [
      'Er handelte sofort.',
      'Er hörte nicht richtig zu.',
      'Er wiederholte die Aussage.',
      'Er war darüber beleidigt.',
    ],
    correctIndex: 0,
  },
  {
    level: 'C1',
    prompt: 'Ergänze: "Hätte ich das gewusst, ___ ich früher gekommen."',
    options: ['wäre', 'würde', 'hätte', 'sei'],
    correctIndex: 0,
  },

  // ------------------------------------------------------------------- C2
  {
    level: 'C2',
    prompt: 'Was bedeutet "Eulen nach Athen tragen"?',
    options: [
      'etwas völlig Überflüssiges tun',
      'eine sehr weite Reise antreten',
      'besonders klug handeln',
      'jemanden reich beschenken',
    ],
    correctIndex: 0,
  },
  {
    level: 'C2',
    prompt: 'Wähle die Formulierung, die in einen förmlichen Brief gehört.',
    options: [
      'Schick mir mal die Unterlagen.',
      'Ich wäre Ihnen sehr verbunden, wenn Sie mir die Unterlagen zusenden könnten.',
      'Können Sie mir die Unterlagen schicken?',
      'Ich brauche die Unterlagen sofort.',
    ],
    correctIndex: 1,
  },
  {
    level: 'C2',
    prompt: 'Ergänze: "___ des starken Regens wurde das Spiel abgesagt."',
    options: ['Infolge', 'Trotzdem', 'Obwohl', 'Dennoch'],
    correctIndex: 0,
  },
  {
    level: 'C2',
    prompt: 'Welcher Satz ist korrekt?',
    options: [
      'Wegen des Sturms fiel der Zug aus.',
      'Wegen dem Sturm fiel der Zug aus.',
      'Wegen der Sturm fiel der Zug aus.',
      'Wegen den Sturm fiel der Zug aus.',
    ],
    correctIndex: 0,
  },
  {
    level: 'C2',
    prompt: 'Was bedeutet "jemandem reinen Wein einschenken"?',
    options: [
      'jemandem die unangenehme Wahrheit sagen',
      'jemanden großzügig bewirten',
      'jemanden über alle Maßen loben',
      'jemanden absichtlich täuschen',
    ],
    correctIndex: 0,
  },
];
