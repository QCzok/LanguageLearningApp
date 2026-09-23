import type { UnitSeed } from './chapter-beginner-1';

/**
 * Beginner, Kapitel 11: „Medien und Kommunikation“ (A2, Kapitel 5)
 *
 * Fünf Seiten, Aufbau wie in den Kapiteln davor.
 *
 * Der dass-Satz auf Seite 4 ist der zweite Nebensatz nach weil (Kapitel 8)
 * und folgt derselben Regel: Verb ans Ende. Die Seite sagt das ausdrücklich,
 * damit man nicht eine zweite Regel lernt, wo es dieselbe ist. Anlass ist
 * das Weitergeben einer Nachricht – „Er hat gesagt, dass er später kommt“ –,
 * also genau das, was man nach einem Telefonat (Seite 2) tut.
 *
 * Seite 3 unterscheidet formelle und informelle E-Mails, weil man in
 * Deutschland für beide feste Formeln braucht und eine falsche Anrede mehr
 * auffällt als ein Grammatikfehler.
 *
 * Einsprachig deutsch, Erklärungen mit Übersetzung wie im ganzen
 * Beginner-Band.
 */
const v = 1;

export const BEGINNER_11_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Medien im Alltag, Häufigkeit.
  {
    order: 1,
    title: 'Medien im Alltag',
    subtitle: 'Wie oft? – Häufigkeitsangaben',
    estimatedMinutes: 20,
    content: {
      version: v,
      blocks: [
        { id: 'b11-1-h1', type: 'HEADING', level: 1, text: 'Medien im Alltag' },
        {
          id: 'b11-1-text',
          type: 'TEXT',
          text: 'Eine Umfrage: „Welche Medien nutzen Sie?“ Paula, 19: „Ich habe mein Handy immer dabei. Nachrichten lese ich im Internet, Zeitung lese ich nie.“ Herr Brandt, 58: „Ich höre jeden Morgen Radio und lese die Zeitung. Fernsehen tue ich selten, nur am Wochenende.“ Aylin, 34: „Ich schreibe oft E-Mails, weil ich im Büro arbeite. Abends sehe ich manchmal Serien.“',
          translations: {
            en: 'A survey: “Which media do you use?” Paula, 19: “I always have my phone with me. I read the news online; I never read a newspaper.” Mr Brandt, 58: “I listen to the radio every morning and read the paper. I rarely watch TV, only at weekends.” Aylin, 34: “I often write emails because I work in an office. In the evenings I sometimes watch series.”',
            es: 'Una encuesta: «¿Qué medios usa usted?». Paula, 19: «Siempre llevo el móvil encima. Leo las noticias en internet; el periódico no lo leo nunca». Sr. Brandt, 58: «Escucho la radio todas las mañanas y leo el periódico. Veo poco la tele, solo el fin de semana». Aylin, 34: «Escribo correos a menudo porque trabajo en una oficina. Por la noche a veces veo series».',
            fr: 'Un sondage : « Quels médias utilisez-vous ? » Paula, 19 ans : « J’ai toujours mon portable sur moi. Je lis les informations sur Internet, je ne lis jamais le journal. » M. Brandt, 58 ans : « J’écoute la radio tous les matins et je lis le journal. Je regarde rarement la télé, seulement le week-end. » Aylin, 34 ans : « J’écris souvent des e-mails parce que je travaille dans un bureau. Le soir, je regarde parfois des séries. »',
            it: 'Un sondaggio: «Quali media usa?». Paula, 19 anni: «Ho sempre il cellulare con me. Le notizie le leggo su Internet, il giornale non lo leggo mai». Il signor Brandt, 58 anni: «Ogni mattina ascolto la radio e leggo il giornale. La TV la guardo raramente, solo nel fine settimana». Aylin, 34 anni: «Scrivo spesso e-mail perché lavoro in ufficio. La sera a volte guardo delle serie».',
          },
        },
        {
          id: 'b11-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: Medien',
          items: [
            { term: 'Handy', article: 'das', plural: 'die Handys', translations: { en: 'mobile phone' } },
            { term: 'Nachricht', article: 'die', plural: 'die Nachrichten', translations: { en: 'message; (pl.) the news' } },
            { term: 'Zeitung', article: 'die', plural: 'die Zeitungen', translations: { en: 'newspaper' } },
            { term: 'Internet', article: 'das', translations: { en: 'internet' }, example: 'im Internet' },
            { term: 'E-Mail', article: 'die', plural: 'die E-Mails', translations: { en: 'email' } },
            { term: 'Sendung', article: 'die', plural: 'die Sendungen', translations: { en: 'programme / show' } },
            { term: 'Serie', article: 'die', plural: 'die Serien', translations: { en: 'series' } },
            { term: 'herunterladen', translations: { en: 'to download' } },
            { term: 'nutzen', translations: { en: 'to use' } },
            { term: 'schicken', translations: { en: 'to send' } },
          ],
        },
        {
          id: 'b11-1-info-haeufig',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Wie oft?',
          text: 'Diese Wörter sagen, wie oft etwas passiert. Sie stehen meistens direkt nach dem Verb: Ich lese nie Zeitung. Man kann sie auch betont an den Anfang stellen – dann folgt sofort das Verb: Manchmal sehe ich Serien.',
          translations: {
            en: {
              title: 'How often?',
              text: 'These words say how often something happens. They usually come right after the verb: Ich lese nie Zeitung. You can also put them first for emphasis – then the verb follows immediately: Manchmal sehe ich Serien.',
            },
            es: {
              title: '¿Con qué frecuencia?',
              text: 'Estas palabras indican con qué frecuencia pasa algo. Suelen ir justo después del verbo: Ich lese nie Zeitung. También se pueden poner al principio para destacarlas; entonces el verbo va inmediatamente después: Manchmal sehe ich Serien.',
            },
            fr: {
              title: 'À quelle fréquence ?',
              text: 'Ces mots indiquent à quelle fréquence quelque chose se passe. Ils se placent le plus souvent juste après le verbe : Ich lese nie Zeitung. On peut aussi les mettre en tête pour insister – le verbe suit alors immédiatement : Manchmal sehe ich Serien.',
            },
            it: {
              title: 'Quanto spesso?',
              text: 'Queste parole dicono quanto spesso succede qualcosa. Di solito vanno subito dopo il verbo: Ich lese nie Zeitung. Si possono anche mettere all’inizio per enfasi – allora il verbo segue subito: Manchmal sehe ich Serien.',
            },
          },
          table: {
            headers: ['', 'Beispiel'],
            rows: [
              ['immer (100 %)', 'Ich habe immer mein Handy dabei.'],
              ['oft', 'Ich schreibe oft E-Mails.'],
              ['manchmal', 'Manchmal sehe ich Serien.'],
              ['selten', 'Er sieht selten fern.'],
              ['nie (0 %)', 'Paula liest nie Zeitung.'],
            ],
          },
        },
        {
          id: 'b11-1-match',
          type: 'MATCHING',
          instruction: 'Wer sagt das?',
          left: [
            { id: 'l1', text: 'Ich lese Nachrichten nur im Internet.' },
            { id: 'l2', text: 'Morgens höre ich Radio.' },
            { id: 'l3', text: 'Ich schreibe bei der Arbeit viele E-Mails.' },
          ],
          right: [
            { id: 'r1', text: 'Paula' },
            { id: 'r2', text: 'Herr Brandt' },
            { id: 'r3', text: 'Aylin' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
          ],
        },
        {
          id: 'b11-1-order',
          type: 'ORDERING',
          instruction: 'Bilden Sie einen Satz. Beginnen Sie mit „Abends“.',
          items: [
            { id: 'o1', text: 'Abends' },
            { id: 'o2', text: 'sehe' },
            { id: 'o3', text: 'ich' },
            { id: 'o4', text: 'manchmal' },
            { id: 'o5', text: 'Serien.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5'],
        },
        {
          id: 'b11-1-choice',
          type: 'CHOICE',
          instruction: 'Herr Brandt sieht nur am Wochenende fern. Wie oft sieht er fern?',
          multiple: false,
          options: [
            { id: 'c1', text: 'immer' },
            { id: 'c2', text: 'selten' },
            { id: 'c3', text: 'nie' },
          ],
          solution: ['c2'],
          explanation: 'Nur am Wochenende ist nicht nie, aber auch nicht oft: selten.',
          explanationTranslations: {
            en: 'Only at weekends isn’t never, but it isn’t often either: selten (rarely).',
            es: 'Solo el fin de semana no es nunca, pero tampoco a menudo: selten (pocas veces).',
            fr: 'Seulement le week-end, ce n’est pas jamais, mais pas souvent non plus : selten (rarement).',
            it: 'Solo nel fine settimana non è mai, ma nemmeno spesso: selten (raramente).',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – telefonieren und eine Nachricht hinterlassen.
  {
    order: 2,
    title: 'Am Telefon',
    subtitle: 'Telefonieren und Nachrichten hinterlassen',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'b11-2-h1', type: 'HEADING', level: 1, text: 'Am Telefon' },
        {
          id: 'b11-2-dlg1',
          type: 'DIALOGUE',
          title: 'Im Büro',
          lines: [
            { speaker: 'Empfang', text: 'Firma Berger, Schulz am Apparat. Guten Tag.' },
            { speaker: 'Herr Okafor', text: 'Guten Tag, Okafor hier. Könnte ich bitte Frau Neumann sprechen?' },
            { speaker: 'Empfang', text: 'Einen Moment, ich verbinde. … Tut mir leid, Frau Neumann ist gerade in einer Besprechung.' },
            { speaker: 'Herr Okafor', text: 'Kann ich eine Nachricht hinterlassen?' },
            { speaker: 'Empfang', text: 'Natürlich.' },
            { speaker: 'Herr Okafor', text: 'Sie möchte mich bitte zurückrufen. Meine Nummer ist 0171 23 45 678.' },
            { speaker: 'Empfang', text: 'Könnten Sie die Nummer bitte wiederholen?' },
          ],
        },
        {
          id: 'b11-2-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: Telefonieren',
          items: [
            { term: 'anrufen', translations: { en: 'to call' } },
            { term: 'zurückrufen', translations: { en: 'to call back' } },
            { term: 'verbinden', translations: { en: 'to put through' }, example: 'Ich verbinde Sie.' },
            { term: '… am Apparat', translations: { en: '… speaking' } },
            { term: 'eine Nachricht hinterlassen', translations: { en: 'to leave a message' } },
            { term: 'Mailbox', article: 'die', translations: { en: 'voicemail' } },
            { term: 'besetzt', translations: { en: 'engaged / busy' } },
            { term: 'erreichen', translations: { en: 'to reach (by phone)' } },
            { term: 'falsch verbunden', translations: { en: 'wrong number' } },
            { term: 'wiederholen', translations: { en: 'to repeat' } },
          ],
        },
        {
          id: 'b11-2-info',
          type: 'INFO',
          variant: 'TIP',
          title: 'Wenn man nicht alles versteht',
          text: 'Am Telefon fehlen Gesten und Gesichter – das macht es schwer. Es ist völlig normal nachzufragen. Diese Sätze helfen: „Könnten Sie das bitte wiederholen?“, „Könnten Sie bitte langsamer sprechen?“, „Wie schreibt man das?“',
          translations: {
            en: {
              title: 'When you don’t understand everything',
              text: 'On the phone there are no gestures or faces – which makes it hard. It’s completely normal to ask. These phrases help: „Könnten Sie das bitte wiederholen?“ (could you repeat that?), „Könnten Sie bitte langsamer sprechen?“ (could you speak more slowly?), „Wie schreibt man das?“ (how do you spell that?)',
            },
            es: {
              title: 'Cuando no se entiende todo',
              text: 'Por teléfono faltan los gestos y las caras, y eso lo hace difícil. Es completamente normal preguntar. Estas frases ayudan: „Könnten Sie das bitte wiederholen?“ (¿podría repetirlo?), „Könnten Sie bitte langsamer sprechen?“ (¿podría hablar más despacio?), „Wie schreibt man das?“ (¿cómo se escribe?)',
            },
            fr: {
              title: 'Quand on ne comprend pas tout',
              text: 'Au téléphone, il n’y a ni gestes ni visages – c’est ce qui rend la chose difficile. Il est tout à fait normal de faire répéter. Ces phrases aident : « Könnten Sie das bitte wiederholen? » (pourriez-vous répéter ?), « Könnten Sie bitte langsamer sprechen? » (pourriez-vous parler plus lentement ?), « Wie schreibt man das? » (comment ça s’écrit ?)',
            },
            it: {
              title: 'Quando non si capisce tutto',
              text: 'Al telefono mancano gesti e volti – ed è questo che lo rende difficile. È del tutto normale chiedere. Queste frasi aiutano: „Könnten Sie das bitte wiederholen?“ (potrebbe ripetere?), „Könnten Sie bitte langsamer sprechen?“ (potrebbe parlare più lentamente?), „Wie schreibt man das?“ (come si scrive?)',
            },
          },
        },
        {
          id: 'b11-2-choice',
          type: 'CHOICE',
          instruction: 'Was stimmt? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'a1', text: 'Herr Okafor spricht mit Frau Neumann.' },
            { id: 'a2', text: 'Frau Neumann ist in einer Besprechung.' },
            { id: 'a3', text: 'Frau Neumann soll Herrn Okafor zurückrufen.' },
            { id: 'a4', text: 'Herr Okafor ruft später noch einmal an.' },
          ],
          solution: ['a2', 'a3'],
          explanation:
            'Herr Okafor erreicht Frau Neumann nicht, weil sie in einer Besprechung ist. Er hinterlässt eine Nachricht: Sie soll ihn zurückrufen.',
          explanationTranslations: {
            en: 'Mr Okafor can’t reach Ms Neumann because she’s in a meeting. He leaves a message: she should call him back.',
            es: 'El Sr. Okafor no consigue hablar con la Sra. Neumann porque está en una reunión. Deja un mensaje: ella debe devolverle la llamada.',
            fr: 'M. Okafor ne joint pas Mme Neumann parce qu’elle est en réunion. Il laisse un message : elle doit le rappeler.',
            it: 'Il signor Okafor non riesce a parlare con la signora Neumann perché è in riunione. Lascia un messaggio: lei deve richiamarlo.',
          },
        },
        {
          id: 'b11-2-audio',
          type: 'AUDIO',
          title: 'Hören Sie: Eine Nachricht auf der Mailbox',
          audioUrl: 'placeholder://b11-voicemail',
          durationSec: 25,
          transcript:
            'Hallo Elif, hier ist Mira. Du, ich komme heute etwas später, der Zug hat Verspätung. Ich bin so gegen acht bei dir. Kannst du mich bitte kurz zurückrufen? Bis dann!',
        },
        {
          id: 'b11-2-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie das Telefongespräch.',
          wordBank: ['Apparat', 'sprechen', 'verbinde', 'besetzt', 'zurückrufen'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '▸ Praxis Dr. Lange, Kraus am ' },
            { kind: 'GAP', gapId: 't1', solution: ['Apparat'], width: 8 },
            { kind: 'TEXT', text: '.\n▸ Guten Tag, könnte ich bitte Dr. Lange ' },
            { kind: 'GAP', gapId: 't2', solution: ['sprechen'], width: 9 },
            { kind: 'TEXT', text: '?\n▸ Ich ' },
            { kind: 'GAP', gapId: 't3', solution: ['verbinde'], width: 9 },
            { kind: 'TEXT', text: '. … Oh, die Leitung ist leider ' },
            { kind: 'GAP', gapId: 't4', solution: ['besetzt'], width: 8 },
            { kind: 'TEXT', text: '. Soll sie Sie ' },
            { kind: 'GAP', gapId: 't5', solution: ['zurückrufen', 'zurueckrufen'], width: 12 },
            { kind: 'TEXT', text: '?' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – E-Mails: formell und informell.
  {
    order: 3,
    title: 'Eine E-Mail schreiben',
    subtitle: 'Formell und informell',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'b11-3-h1', type: 'HEADING', level: 1, text: 'Eine E-Mail schreiben' },
        {
          id: 'b11-3-intro',
          type: 'TEXT',
          text: 'Eine E-Mail an einen Freund sieht anders aus als eine E-Mail an eine Firma oder eine Behörde. Vor allem Anrede und Gruß müssen passen.',
          translations: {
            en: 'An email to a friend looks different from an email to a company or an authority. Above all, the greeting and sign-off have to fit.',
            es: 'Un correo a un amigo es distinto de un correo a una empresa o a una administración. Sobre todo, el saludo y la despedida tienen que ser adecuados.',
            fr: 'Un e-mail à un ami ne ressemble pas à un e-mail à une entreprise ou à une administration. Il faut surtout que la formule d’appel et la formule finale conviennent.',
            it: 'Un’e-mail a un amico è diversa da un’e-mail a un’azienda o a un ufficio pubblico. Soprattutto il saluto iniziale e quello finale devono essere adatti.',
          },
        },
        {
          id: 'b11-3-info-anrede',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Anrede und Gruß',
          text: 'Formell schreibt man „Sie“ und endet mit „Mit freundlichen Grüßen“. Informell schreibt man „du“ oder „ihr“ und endet mit „Viele Grüße“ oder „Liebe Grüße“. Nach der Anrede steht ein Komma, und die erste Zeile beginnt klein.',
          translations: {
            en: {
              title: 'Greeting and sign-off',
              text: 'In formal emails you use „Sie“ and end with „Mit freundlichen Grüßen“ (kind regards). In informal ones you use „du“ or „ihr“ and end with „Viele Grüße“ or „Liebe Grüße“. After the greeting comes a comma, and the first line starts with a small letter.',
            },
            es: {
              title: 'Saludo y despedida',
              text: 'En un correo formal se usa „Sie“ y se termina con „Mit freundlichen Grüßen“ (atentamente). En uno informal se usa „du“ o „ihr“ y se termina con „Viele Grüße“ o „Liebe Grüße“. Después del saludo va una coma, y la primera línea empieza con minúscula.',
            },
            fr: {
              title: 'Formule d’appel et formule finale',
              text: 'Dans un e-mail formel, on vouvoie (« Sie ») et on termine par « Mit freundlichen Grüßen » (cordialement). Dans un e-mail informel, on tutoie (« du » ou « ihr ») et on termine par « Viele Grüße » ou « Liebe Grüße ». Après la formule d’appel, on met une virgule, et la première ligne commence par une minuscule.',
            },
            it: {
              title: 'Saluto iniziale e finale',
              text: 'In un’e-mail formale si usa „Sie“ e si chiude con „Mit freundlichen Grüßen“ (cordiali saluti). In una informale si usa „du“ o „ihr“ e si chiude con „Viele Grüße“ o „Liebe Grüße“. Dopo il saluto iniziale c’è una virgola, e la prima riga inizia con la minuscola.',
            },
          },
          table: {
            headers: ['', 'formell', 'informell'],
            rows: [
              ['Anrede', 'Sehr geehrte Frau Neumann,', 'Liebe Mira, / Lieber Jonas,'],
              ['Anrede (unbekannt)', 'Sehr geehrte Damen und Herren,', 'Hallo zusammen,'],
              ['Gruß', 'Mit freundlichen Grüßen', 'Viele Grüße / Liebe Grüße'],
            ],
          },
        },
        {
          id: 'b11-3-email',
          type: 'TEXT',
          text: 'Sehr geehrte Damen und Herren, ich habe am 3. März bei Ihnen einen Drucker bestellt (Bestellnummer 48213). Leider ist das Paket noch nicht angekommen. Könnten Sie mir bitte mitteilen, wann ich den Drucker bekomme? Vielen Dank im Voraus. Mit freundlichen Grüßen, Aylin Demir',
          translations: {
            en: 'Dear Sir or Madam, on 3 March I ordered a printer from you (order number 48213). Unfortunately the parcel has not arrived yet. Could you please let me know when I will receive the printer? Thank you in advance. Kind regards, Aylin Demir',
            es: 'Estimados señores: el 3 de marzo les encargué una impresora (número de pedido 48213). Por desgracia, el paquete aún no ha llegado. ¿Podrían indicarme cuándo recibiré la impresora? Muchas gracias de antemano. Atentamente, Aylin Demir',
            fr: 'Madame, Monsieur, le 3 mars, je vous ai commandé une imprimante (numéro de commande 48213). Malheureusement, le colis n’est pas encore arrivé. Pourriez-vous m’indiquer quand je recevrai l’imprimante ? Merci d’avance. Cordialement, Aylin Demir',
            it: 'Gentili signore e signori, il 3 marzo ho ordinato da voi una stampante (numero d’ordine 48213). Purtroppo il pacco non è ancora arrivato. Potreste comunicarmi quando riceverò la stampante? Grazie in anticipo. Cordiali saluti, Aylin Demir',
          },
        },
        {
          id: 'b11-3-choice',
          type: 'CHOICE',
          instruction: 'Warum schreibt Aylin die E-Mail?',
          multiple: false,
          options: [
            { id: 'c1', text: 'Sie möchte einen Drucker bestellen.' },
            { id: 'c2', text: 'Ihre Bestellung ist noch nicht da.' },
            { id: 'c3', text: 'Der Drucker ist kaputt.' },
          ],
          solution: ['c2'],
          explanation: 'Aylin hat den Drucker schon bestellt, aber das Paket ist noch nicht angekommen.',
          explanationTranslations: {
            en: 'Aylin has already ordered the printer, but the parcel hasn’t arrived yet.',
            es: 'Aylin ya ha pedido la impresora, pero el paquete aún no ha llegado.',
            fr: 'Aylin a déjà commandé l’imprimante, mais le colis n’est pas encore arrivé.',
            it: 'Aylin ha già ordinato la stampante, ma il pacco non è ancora arrivato.',
          },
        },
        {
          id: 'b11-3-match',
          type: 'MATCHING',
          instruction: 'Welche Anrede passt zu welchem Gruß?',
          left: [
            { id: 'l1', text: 'Sehr geehrter Herr Brandt,' },
            { id: 'l2', text: 'Liebe Oma,' },
            { id: 'l3', text: 'Hallo zusammen,' },
          ],
          right: [
            { id: 'r1', text: 'Mit freundlichen Grüßen' },
            { id: 'r2', text: 'Ganz liebe Grüße und einen dicken Kuss' },
            { id: 'r3', text: 'Bis Freitag, viele Grüße' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
          ],
        },
        {
          id: 'b11-3-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die formelle E-Mail.',
          wordBank: ['geehrte', 'Könnten', 'Grüßen', 'Ihnen'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Sehr ' },
            { kind: 'GAP', gapId: 'f1', solution: ['geehrte'], width: 8 },
            { kind: 'TEXT', text: ' Frau Neumann,\nvielen Dank für Ihre Nachricht. ' },
            { kind: 'GAP', gapId: 'f2', solution: ['Könnten', 'Koennten'], width: 8 },
            { kind: 'TEXT', text: ' wir den Termin auf Donnerstag verschieben? Ich melde mich morgen bei ' },
            { kind: 'GAP', gapId: 'f4', solution: ['Ihnen'], width: 6 },
            { kind: 'TEXT', text: '.\nMit freundlichen ' },
            { kind: 'GAP', gapId: 'f5', solution: ['Grüßen', 'Gruessen'], width: 8 },
            { kind: 'TEXT', text: '\nChinedu Okafor' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – Nebensätze mit dass.
  {
    order: 4,
    title: 'Er hat gesagt, dass …',
    subtitle: 'Nebensätze mit dass',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'b11-4-h1', type: 'HEADING', level: 1, text: 'Er hat gesagt, dass …' },
        {
          id: 'b11-4-dlg',
          type: 'DIALOGUE',
          title: 'Eine Nachricht weitergeben',
          lines: [
            { speaker: 'Elif', text: 'Wer hat angerufen?' },
            { speaker: 'Ben', text: 'Mira. Sie hat gesagt, dass sie später kommt.' },
            { speaker: 'Elif', text: 'Warum denn?' },
            { speaker: 'Ben', text: 'Sie hat gesagt, dass der Zug Verspätung hat. Sie ist gegen acht hier.' },
            { speaker: 'Elif', text: 'Gut. Ich glaube, dass wir dann um halb neun essen können.' },
            { speaker: 'Ben', text: 'Ich finde, dass das eine gute Idee ist. Ich habe nämlich noch keinen Hunger.' },
          ],
        },
        {
          id: 'b11-4-info-dass',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Nebensätze mit dass',
          text: 'Mit „dass“ gibt man wieder, was jemand sagt, denkt oder meint. Es gilt dieselbe Regel wie bei „weil“ in Kapitel 8: Der dass-Satz ist ein Nebensatz, das konjugierte Verb steht am Ende, und davor steht ein Komma. Typische Verben davor sind sagen, glauben, denken, finden, wissen und hoffen.',
          translations: {
            en: {
              title: 'Subordinate clauses with dass',
              text: '„dass“ (that) reports what someone says, thinks or means. The same rule applies as with „weil“ in Chapter 8: the dass-clause is a subordinate clause, the conjugated verb goes at the end, and there’s a comma before it. Typical verbs before it are sagen, glauben, denken, finden, wissen and hoffen.',
            },
            es: {
              title: 'Oraciones subordinadas con dass',
              text: 'Con „dass“ (que) se reproduce lo que alguien dice, piensa u opina. Vale la misma regla que con „weil“ en el Capítulo 8: la oración con dass es subordinada, el verbo conjugado va al final y delante hay una coma. Los verbos típicos que la preceden son sagen, glauben, denken, finden, wissen y hoffen.',
            },
            fr: {
              title: 'Les subordonnées avec dass',
              text: '« dass » (que) sert à rapporter ce que quelqu’un dit, pense ou estime. La règle est la même que pour « weil » au chapitre 8 : la proposition en dass est une subordonnée, le verbe conjugué est à la fin, et il y a une virgule devant. Les verbes typiques qui la précèdent sont sagen, glauben, denken, finden, wissen et hoffen.',
            },
            it: {
              title: 'Le subordinate con dass',
              text: 'Con „dass“ (che) si riferisce ciò che qualcuno dice, pensa o ritiene. Vale la stessa regola di „weil“ nel Capitolo 8: la frase con dass è una subordinata, il verbo coniugato va alla fine e davanti c’è la virgola. I verbi tipici che la precedono sono sagen, glauben, denken, finden, wissen e hoffen.',
            },
          },
          table: {
            headers: ['Hauptsatz', 'Nebensatz mit dass'],
            rows: [
              ['Mira sagt,', 'dass sie später kommt.'],
              ['Ich glaube,', 'dass der Zug Verspätung hat.'],
              ['Wir finden,', 'dass die Serie spannend ist.'],
              ['Weißt du,', 'dass Ben morgen Geburtstag hat?'],
              ['Ich hoffe,', 'dass du bald zurückrufen kannst.'],
            ],
          },
        },
        {
          id: 'b11-4-order',
          type: 'ORDERING',
          instruction: 'Bilden Sie den Nebensatz: Paula sagt, …',
          items: [
            { id: 'w1', text: 'dass' },
            { id: 'w2', text: 'sie' },
            { id: 'w3', text: 'nie' },
            { id: 'w4', text: 'Zeitung' },
            { id: 'w5', text: 'liest.' },
          ],
          solution: ['w1', 'w2', 'w3', 'w4', 'w5'],
        },
        {
          id: 'b11-4-cloze',
          type: 'CLOZE',
          instruction: 'Geben Sie die Nachrichten mit „dass“ wieder. Ergänzen Sie das Verb.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Jonas: „Ich bin krank.“ → Jonas sagt, dass er krank ' },
            { kind: 'GAP', gapId: 'd1', solution: ['ist'], width: 5 },
            { kind: 'TEXT', text: '.\n2. Elif: „Ich habe keine Zeit.“ → Elif sagt, dass sie keine Zeit ' },
            { kind: 'GAP', gapId: 'd2', solution: ['hat'], width: 5 },
            { kind: 'TEXT', text: '.\n3. Ben: „Ich rufe später an.“ → Ben sagt, dass er später ' },
            { kind: 'GAP', gapId: 'd3', solution: ['anruft'], width: 7 },
            { kind: 'TEXT', text: '.\n4. Mira: „Ich muss länger arbeiten.“ → Mira sagt, dass sie länger arbeiten ' },
            { kind: 'GAP', gapId: 'd4', solution: ['muss'], width: 5 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'b11-4-info-trennbar',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Trennbare Verben und Modalverben im Nebensatz',
          text: 'Im Nebensatz stehen trennbare Verben wieder zusammen: Er ruft später an. → …, dass er später anruft. Bei Modalverben steht das Modalverb ganz am Ende, hinter dem Infinitiv: …, dass sie länger arbeiten muss.',
          translations: {
            en: {
              title: 'Separable verbs and modal verbs in subordinate clauses',
              text: 'In a subordinate clause, separable verbs come back together: Er ruft später an. → …, dass er später anruft. With modal verbs, the modal goes at the very end, after the infinitive: …, dass sie länger arbeiten muss.',
            },
            es: {
              title: 'Verbos separables y modales en la subordinada',
              text: 'En la subordinada, los verbos separables vuelven a ir juntos: Er ruft später an. → …, dass er später anruft. Con los verbos modales, el modal va al final del todo, detrás del infinitivo: …, dass sie länger arbeiten muss.',
            },
            fr: {
              title: 'Verbes séparables et verbes de modalité dans la subordonnée',
              text: 'Dans la subordonnée, les verbes séparables se ressoudent : Er ruft später an. → …, dass er später anruft. Avec un verbe de modalité, celui-ci se place tout à la fin, après l’infinitif : …, dass sie länger arbeiten muss.',
            },
            it: {
              title: 'Verbi separabili e modali nella subordinata',
              text: 'Nella subordinata i verbi separabili tornano uniti: Er ruft später an. → …, dass er später anruft. Con i verbi modali, il modale va alla fine, dopo l’infinito: …, dass sie länger arbeiten muss.',
            },
          },
        },
        {
          id: 'b11-4-choice',
          type: 'CHOICE',
          instruction: 'Welcher Satz ist richtig?',
          multiple: false,
          options: [
            { id: 'c1', text: 'Ich finde, dass Handys in der Schule sind verboten.' },
            { id: 'c2', text: 'Ich finde, dass Handys in der Schule verboten sind.' },
            { id: 'c3', text: 'Ich finde, dass sind Handys in der Schule verboten.' },
          ],
          solution: ['c2'],
          explanation:
            'Im dass-Satz steht das konjugierte Verb „sind“ ganz am Ende.',
          explanationTranslations: {
            en: 'In a dass-clause the conjugated verb „sind“ goes right at the end.',
            es: 'En la oración con dass el verbo conjugado „sind“ va al final del todo.',
            fr: 'Dans la subordonnée en dass, le verbe conjugué « sind » se place tout à la fin.',
            it: 'Nella frase con dass il verbo coniugato „sind“ va proprio alla fine.',
          },
        },
        {
          id: 'b11-4-match',
          type: 'MATCHING',
          instruction: 'Verbinden Sie die Sätze.',
          left: [
            { id: 'm1', text: 'Ich hoffe,' },
            { id: 'm2', text: 'Weißt du,' },
            { id: 'm3', text: 'Der Chef hat gesagt,' },
          ],
          right: [
            { id: 'y1', text: 'dass es dir bald besser geht.' },
            { id: 'y2', text: 'dass Paula umgezogen ist?' },
            { id: 'y3', text: 'dass die Besprechung um zehn beginnt.' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'y1' },
            { leftId: 'm2', rightId: 'y2' },
            { leftId: 'm3', rightId: 'y3' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – Rückblick, zum Schluss eine formelle E-Mail.
  {
    order: 5,
    title: 'Kannst du das schon?',
    subtitle: 'Rückblick auf das ganze Kapitel',
    estimatedMinutes: 15,
    content: {
      version: v,
      blocks: [
        { id: 'b11-5-h1', type: 'HEADING', level: 1, text: 'Kannst du das schon?' },
        {
          id: 'b11-5-intro',
          type: 'TEXT',
          text: 'Prüfen Sie, was Sie aus Kapitel 11 mitnehmen. Am Ende schreiben Sie eine formelle E-Mail.',
          translations: {
            en: 'Check what you take away from Chapter 11. At the end, you’ll write a formal email.',
            es: 'Compruebe qué se lleva del Capítulo 11. Al final escribirá un correo formal.',
            fr: 'Vérifiez ce que vous retenez du chapitre 11. À la fin, vous écrirez un e-mail formel.',
            it: 'Verifichi cosa porta a casa dal Capitolo 11. Alla fine scriverà un’e-mail formale.',
          },
        },
        {
          id: 'b11-5-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie den Text.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Ich lese ' },
            { kind: 'GAP', gapId: 'r1', solution: ['nie'], width: 5 },
            { kind: 'TEXT', text: ' Zeitung, nur manchmal Nachrichten im Internet. Mein Vater findet, ' },
            { kind: 'GAP', gapId: 'r2', solution: ['dass'], width: 5 },
            { kind: 'TEXT', text: ' das nicht gut ' },
            { kind: 'GAP', gapId: 'r3', solution: ['ist'], width: 4 },
            { kind: 'TEXT', text: '. Er sagt, dass man im Internet nicht alles glauben ' },
            { kind: 'GAP', gapId: 'r4', solution: ['kann'], width: 5 },
            { kind: 'TEXT', text: '. Gestern hat er mich ' },
            { kind: 'GAP', gapId: 'r5', solution: ['angerufen'], width: 10 },
            { kind: 'TEXT', text: ' und mir einen Artikel vorgelesen.' },
          ],
        },
        {
          id: 'b11-5-choice',
          type: 'CHOICE',
          instruction: 'Welche Sätze sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'k1', text: 'Sie sagt, dass sie morgen anruft.' },
            { id: 'k2', text: 'Ich glaube, dass er hat keine Zeit.' },
            { id: 'k3', text: 'Sehr geehrte Damen und Herren,' },
            { id: 'k4', text: 'Er sagt, dass er ruft morgen an.' },
          ],
          solution: ['k1', 'k3'],
          explanation:
            'Im dass-Satz steht das Verb am Ende, trennbare Verben stehen zusammen: …, dass er keine Zeit hat. …, dass er morgen anruft.',
          explanationTranslations: {
            en: 'In a dass-clause the verb goes at the end and separable verbs stay together: …, dass er keine Zeit hat. …, dass er morgen anruft.',
            es: 'En la oración con dass el verbo va al final y los separables van juntos: …, dass er keine Zeit hat. …, dass er morgen anruft.',
            fr: 'Dans la subordonnée en dass, le verbe est à la fin et les verbes séparables restent soudés : …, dass er keine Zeit hat. …, dass er morgen anruft.',
            it: 'Nella frase con dass il verbo va alla fine e i verbi separabili restano uniti: …, dass er keine Zeit hat. …, dass er morgen anruft.',
          },
        },
        {
          id: 'b11-5-match',
          type: 'MATCHING',
          instruction: 'Was sagt man am Telefon?',
          left: [
            { id: 'm1', text: 'Sie haben etwas nicht verstanden.' },
            { id: 'm2', text: 'Die Person ist nicht da.' },
            { id: 'm3', text: 'Sie haben die falsche Nummer gewählt.' },
          ],
          right: [
            { id: 'y1', text: 'Könnten Sie das bitte wiederholen?' },
            { id: 'y2', text: 'Kann ich eine Nachricht hinterlassen?' },
            { id: 'y3', text: 'Oh, Entschuldigung, falsch verbunden.' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'y1' },
            { leftId: 'm2', rightId: 'y2' },
            { leftId: 'm3', rightId: 'y3' },
          ],
        },
        {
          id: 'b11-5-writing',
          type: 'WRITING',
          instruction: 'Eine formelle E-Mail',
          prompt:
            'Sie haben sich für einen Deutschkurs angemeldet, können aber am ersten Tag nicht kommen. Schreiben Sie an die Sprachschule: Warum können Sie nicht kommen? Was möchten Sie wissen? Achten Sie auf Anrede und Gruß.',
          minWords: 35,
          maxWords: 120,
          aiFeedback: true,
          sampleAnswer:
            'Sehr geehrte Damen und Herren, ich habe mich für den Deutschkurs A2 am Montag angemeldet. Leider kann ich am ersten Tag nicht kommen, weil ich einen Termin beim Arzt habe. Könnten Sie mir bitte mitteilen, welche Seiten im Buch ich vorbereiten soll? Ich hoffe, dass das kein Problem ist. Mit freundlichen Grüßen, Tomasz Nowak',
        },
      ],
    },
  },
];
