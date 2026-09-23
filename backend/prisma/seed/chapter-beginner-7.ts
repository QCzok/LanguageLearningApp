import type { UnitSeed } from './chapter-beginner-1';

/**
 * Beginner, Kapitel 7: „Gesundheit und Körper“ (A2, Kapitel 1)
 *
 * Fünf Seiten, Aufbau wie in den Kapiteln davor. Erstes Kapitel der Stufe A2.
 *
 * Der Imperativ steht in diesem Kapitel, weil er beim Arzt und in der
 * Apotheke ständig vorkommt: „Nehmen Sie zweimal täglich eine Tablette“,
 * „Trink viel Wasser“. Seite 3 bringt die drei Formen (Sie, du, ihr) in
 * einer Tabelle und zeigt, wie man sie aus dem Präsens ableitet – statt drei
 * neue Formen zu lernen, streicht man jeweils etwas weg.
 *
 * „Mir tut … weh“ kommt vor dem Imperativ: Erst beschreibt man, was fehlt,
 * dann bekommt man einen Rat. Der Dativ darin ist aus Kapitel 6 („gefällt
 * mir“) bekannt.
 *
 * Einsprachig deutsch, Erklärungen mit Übersetzung wie im ganzen
 * Beginner-Band.
 */
const v = 1;

export const BEGINNER_7_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – der Körper und „Mir tut … weh“.
  {
    order: 1,
    title: 'Was fehlt Ihnen?',
    subtitle: 'Körperteile und Beschwerden',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'b7-1-h1', type: 'HEADING', level: 1, text: 'Was fehlt Ihnen?' },
        {
          id: 'b7-1-image',
          type: 'IMAGE',
          url: 'illustration:doctor-visit',
          alt: 'Ein Behandlungszimmer: Eine Ärztin mit Stethoskop spricht mit einem Patienten.',
          caption: 'In der Hausarztpraxis.',
        },
        {
          id: 'b7-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: Der Körper',
          items: [
            { term: 'Kopf', article: 'der', plural: 'die Köpfe', translations: { en: 'head' } },
            { term: 'Auge', article: 'das', plural: 'die Augen', translations: { en: 'eye' } },
            { term: 'Ohr', article: 'das', plural: 'die Ohren', translations: { en: 'ear' } },
            { term: 'Nase', article: 'die', plural: 'die Nasen', translations: { en: 'nose' } },
            { term: 'Mund', article: 'der', plural: 'die Münder', translations: { en: 'mouth' } },
            { term: 'Zahn', article: 'der', plural: 'die Zähne', translations: { en: 'tooth' } },
            { term: 'Hals', article: 'der', plural: 'die Hälse', translations: { en: 'neck / throat' } },
            { term: 'Rücken', article: 'der', plural: 'die Rücken', translations: { en: 'back' } },
            { term: 'Bauch', article: 'der', plural: 'die Bäuche', translations: { en: 'belly / stomach' } },
            { term: 'Arm', article: 'der', plural: 'die Arme', translations: { en: 'arm' } },
            { term: 'Hand', article: 'die', plural: 'die Hände', translations: { en: 'hand' } },
            { term: 'Bein', article: 'das', plural: 'die Beine', translations: { en: 'leg' } },
            { term: 'Fuß', article: 'der', plural: 'die Füße', translations: { en: 'foot' } },
          ],
        },
        {
          id: 'b7-1-match',
          type: 'MATCHING',
          instruction: 'Womit macht man das?',
          left: [
            { id: 'l1', text: 'sehen' },
            { id: 'l2', text: 'hören' },
            { id: 'l3', text: 'riechen' },
            { id: 'l4', text: 'laufen' },
          ],
          right: [
            { id: 'r1', text: 'mit den Augen' },
            { id: 'r2', text: 'mit den Ohren' },
            { id: 'r3', text: 'mit der Nase' },
            { id: 'r4', text: 'mit den Beinen' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'b7-1-dlg',
          type: 'DIALOGUE',
          title: 'Beim Hausarzt',
          lines: [
            { speaker: 'Ärztin', text: 'Guten Tag, Herr Okafor. Was fehlt Ihnen denn?' },
            { speaker: 'Herr Okafor', text: 'Mir geht es nicht gut. Ich habe Kopfschmerzen und Fieber.' },
            { speaker: 'Ärztin', text: 'Seit wann haben Sie das?' },
            { speaker: 'Herr Okafor', text: 'Seit zwei Tagen. Und mir tut auch der Hals weh.' },
            { speaker: 'Ärztin', text: 'Husten Sie auch?' },
            { speaker: 'Herr Okafor', text: 'Ja, ein bisschen, vor allem nachts.' },
          ],
        },
        {
          id: 'b7-1-info-weh',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Schmerzen beschreiben',
          text: 'Es gibt zwei Möglichkeiten: „Ich habe …schmerzen“ (Kopfschmerzen, Bauchschmerzen, Rückenschmerzen) oder „Mir tut … weh“. Bei „weh tun“ steht die Person im Dativ wie bei „gefallen“; das Verb richtet sich nach dem Körperteil: Mir tut der Fuß weh – mir tun die Füße weh.',
          translations: {
            en: {
              title: 'Describing pain',
              text: 'There are two options: „Ich habe …schmerzen“ (Kopfschmerzen – headache, Bauchschmerzen – stomach ache, Rückenschmerzen – backache) or „Mir tut … weh“ (my … hurts). With „weh tun“ the person is in the dative as with „gefallen“; the verb agrees with the body part: Mir tut der Fuß weh – mir tun die Füße weh.',
            },
            es: {
              title: 'Describir el dolor',
              text: 'Hay dos posibilidades: „Ich habe …schmerzen“ (Kopfschmerzen – dolor de cabeza, Bauchschmerzen – dolor de barriga, Rückenschmerzen – dolor de espalda) o „Mir tut … weh“ (me duele …). Con „weh tun“ la persona va en dativo, como con „gefallen“; el verbo concuerda con la parte del cuerpo: Mir tut der Fuß weh – mir tun die Füße weh.',
            },
            fr: {
              title: 'Décrire une douleur',
              text: 'Il y a deux possibilités : « Ich habe …schmerzen » (Kopfschmerzen – mal à la tête, Bauchschmerzen – mal au ventre, Rückenschmerzen – mal au dos) ou « Mir tut … weh » (j’ai mal à …). Avec « weh tun », la personne est au datif, comme avec « gefallen » ; le verbe s’accorde avec la partie du corps : Mir tut der Fuß weh – mir tun die Füße weh.',
            },
            it: {
              title: 'Descrivere il dolore',
              text: 'Ci sono due possibilità: „Ich habe …schmerzen“ (Kopfschmerzen – mal di testa, Bauchschmerzen – mal di pancia, Rückenschmerzen – mal di schiena) oppure „Mir tut … weh“ (mi fa male …). Con „weh tun“ la persona è al dativo, come con „gefallen“; il verbo si accorda con la parte del corpo: Mir tut der Fuß weh – mir tun die Füße weh.',
            },
          },
          table: {
            headers: ['Ich habe …', 'Mir tut / tun … weh.'],
            rows: [
              ['Kopfschmerzen', 'Mir tut der Kopf weh.'],
              ['Halsschmerzen', 'Mir tut der Hals weh.'],
              ['Rückenschmerzen', 'Mir tut der Rücken weh.'],
              ['–', 'Mir tun die Augen weh.'],
            ],
          },
        },
        {
          id: 'b7-1-choice-tun',
          type: 'CHOICE',
          instruction: '„Nach dem Wandern ___ mir die Füße weh.“',
          multiple: false,
          options: [
            { id: 'c1', text: 'tut' },
            { id: 'c2', text: 'tun' },
            { id: 'c3', text: 'tue' },
          ],
          solution: ['c2'],
          explanation: 'Das Subjekt ist „die Füße“ – Plural. Deshalb: Mir tun die Füße weh.',
          explanationTranslations: {
            en: 'The subject is „die Füße“ – plural. So: Mir tun die Füße weh.',
            es: 'El sujeto es „die Füße“ – plural. Por eso: Mir tun die Füße weh.',
            fr: 'Le sujet est « die Füße » – pluriel. Donc : Mir tun die Füße weh.',
            it: 'Il soggetto è „die Füße“ – plurale. Quindi: Mir tun die Füße weh.',
          },
        },
        {
          id: 'b7-1-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie.',
          wordBank: ['tut', 'tun', 'Schmerzen', 'Fieber', 'fehlt'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '▸ Was ' },
            { kind: 'GAP', gapId: 'w1', solution: ['fehlt'], width: 6 },
            { kind: 'TEXT', text: ' Ihnen?\n▸ Mir ' },
            { kind: 'GAP', gapId: 'w2', solution: ['tut'], width: 5 },
            { kind: 'TEXT', text: ' der Bauch weh, und ich habe 38,5 Grad ' },
            { kind: 'GAP', gapId: 'w3', solution: ['Fieber'], width: 7 },
            { kind: 'TEXT', text: '.\n▸ Haben Sie auch Kopf' },
            { kind: 'GAP', gapId: 'w4', solution: ['schmerzen', 'Schmerzen'], width: 9 },
            { kind: 'TEXT', text: '?\n▸ Nein, aber mir ' },
            { kind: 'GAP', gapId: 'w5', solution: ['tun'], width: 5 },
            { kind: 'TEXT', text: ' die Arme weh.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – einen Termin vereinbaren und verschieben.
  {
    order: 2,
    title: 'Einen Termin vereinbaren',
    subtitle: 'Am Telefon in der Praxis',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'b7-2-h1', type: 'HEADING', level: 1, text: 'Einen Termin vereinbaren' },
        {
          id: 'b7-2-intro',
          type: 'TEXT',
          text: 'In Deutschland geht man meistens nicht einfach zum Arzt, sondern ruft vorher an und vereinbart einen Termin. Nur bei Notfällen oder in der offenen Sprechstunde geht es ohne.',
          translations: {
            en: 'In Germany you usually don’t just walk into a doctor’s surgery – you call ahead and make an appointment. Only emergencies or open consultation hours work without one.',
            es: 'En Alemania normalmente no se va al médico sin más: se llama antes y se pide cita. Solo en urgencias o en la consulta abierta se puede ir sin cita.',
            fr: 'En Allemagne, on ne va généralement pas chez le médecin sans prévenir : on appelle avant pour prendre rendez-vous. Ce n’est possible sans rendez-vous qu’en cas d’urgence ou pendant les consultations libres.',
            it: 'In Germania di solito non si va dal medico così: si telefona prima e si prende un appuntamento. Solo per le urgenze o nell’orario di ricevimento libero si può andare senza.',
          },
        },
        {
          id: 'b7-2-dlg1',
          type: 'DIALOGUE',
          title: 'Termin vereinbaren',
          lines: [
            { speaker: 'Praxis', text: 'Praxis Dr. Lange, Sie sprechen mit Frau Kraus. Was kann ich für Sie tun?' },
            { speaker: 'Elif', text: 'Guten Morgen, hier ist Elif Yildiz. Ich hätte gern einen Termin.' },
            { speaker: 'Praxis', text: 'Sind Sie schon Patientin bei uns?' },
            { speaker: 'Elif', text: 'Nein, ich komme zum ersten Mal.' },
            { speaker: 'Praxis', text: 'Geht es am Mittwoch um 10 Uhr?' },
            { speaker: 'Elif', text: 'Mittwoch passt leider nicht. Haben Sie am Donnerstag etwas frei?' },
            { speaker: 'Praxis', text: 'Donnerstag um 15.30 Uhr. Bringen Sie bitte Ihre Versichertenkarte mit.' },
            { speaker: 'Elif', text: 'Gut, vielen Dank. Auf Wiederhören!' },
          ],
        },
        {
          id: 'b7-2-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: In der Praxis',
          items: [
            { term: 'Termin', article: 'der', plural: 'die Termine', translations: { en: 'appointment' } },
            { term: 'einen Termin vereinbaren', translations: { en: 'to make an appointment' } },
            { term: 'einen Termin verschieben', translations: { en: 'to reschedule an appointment' } },
            { term: 'einen Termin absagen', translations: { en: 'to cancel an appointment' } },
            { term: 'Praxis', article: 'die', plural: 'die Praxen', translations: { en: 'doctor’s surgery / practice' } },
            { term: 'Sprechstunde', article: 'die', plural: 'die Sprechstunden', translations: { en: 'consultation hours' } },
            { term: 'Wartezimmer', article: 'das', translations: { en: 'waiting room' } },
            { term: 'Versichertenkarte', article: 'die', translations: { en: 'health insurance card' } },
            { term: 'Rezept', article: 'das', plural: 'die Rezepte', translations: { en: 'prescription' } },
            { term: 'krankgeschrieben sein', translations: { en: 'to be on sick leave' } },
            { term: 'Auf Wiederhören!', translations: { en: 'goodbye (on the phone)' } },
          ],
        },
        {
          id: 'b7-2-info-telefon',
          type: 'INFO',
          variant: 'TIP',
          title: 'Am Telefon',
          text: 'Am Telefon nennt man zuerst seinen Namen: „Hier ist …“ oder „Mein Name ist …“. Zum Schluss sagt man „Auf Wiederhören“ statt „Auf Wiedersehen“ – man sieht sich ja nicht.',
          translations: {
            en: {
              title: 'On the phone',
              text: 'On the phone you give your name first: „Hier ist …“ or „Mein Name ist …“. At the end you say „Auf Wiederhören“ (literally: until we hear each other again) instead of „Auf Wiedersehen“ – after all, you can’t see each other.',
            },
            es: {
              title: 'Por teléfono',
              text: 'Por teléfono primero se dice el nombre: „Hier ist …“ o „Mein Name ist …“. Al final se dice „Auf Wiederhören“ (hasta volver a oírnos) en lugar de „Auf Wiedersehen“, porque no se ven.',
            },
            fr: {
              title: 'Au téléphone',
              text: 'Au téléphone, on se présente d’abord : « Hier ist … » ou « Mein Name ist … ». Pour finir, on dit « Auf Wiederhören » (au plaisir de vous entendre) au lieu de « Auf Wiedersehen » – on ne se voit pas.',
            },
            it: {
              title: 'Al telefono',
              text: 'Al telefono si dice prima il proprio nome: „Hier ist …“ oppure „Mein Name ist …“. Alla fine si dice „Auf Wiederhören“ (arrisentirci) invece di „Auf Wiedersehen“ – dato che non ci si vede.',
            },
          },
        },
        {
          id: 'b7-2-choice',
          type: 'CHOICE',
          instruction: 'Was stimmt? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'a1', text: 'Elif war schon einmal in der Praxis.' },
            { id: 'a2', text: 'Der Termin ist am Donnerstagnachmittag.' },
            { id: 'a3', text: 'Elif soll ihre Versichertenkarte mitbringen.' },
            { id: 'a4', text: 'Der Termin ist am Mittwoch um zehn.' },
          ],
          solution: ['a2', 'a3'],
          explanation:
            'Elif kommt zum ersten Mal. Mittwoch passt ihr nicht; der Termin ist am Donnerstag um 15.30 Uhr.',
          explanationTranslations: {
            en: 'Elif is coming for the first time. Wednesday doesn’t suit her; the appointment is on Thursday at 3:30 pm.',
            es: 'Elif va por primera vez. El miércoles no le va bien; la cita es el jueves a las 15:30.',
            fr: 'Elif vient pour la première fois. Mercredi ne lui convient pas ; le rendez-vous est jeudi à 15 h 30.',
            it: 'Elif ci va per la prima volta. Mercoledì non le va bene; l’appuntamento è giovedì alle 15:30.',
          },
        },
        {
          id: 'b7-2-dlg2',
          type: 'DIALOGUE',
          title: 'Termin verschieben',
          lines: [
            { speaker: 'Elif', text: 'Guten Tag, hier ist Yildiz. Ich habe am Donnerstag um 15.30 Uhr einen Termin.' },
            { speaker: 'Praxis', text: 'Ja, ich sehe ihn.' },
            { speaker: 'Elif', text: 'Leider kann ich nicht kommen. Kann ich den Termin verschieben?' },
            { speaker: 'Praxis', text: 'Natürlich. Passt Ihnen Freitag um 9 Uhr?' },
            { speaker: 'Elif', text: 'Ja, das passt sehr gut.' },
          ],
        },
        {
          id: 'b7-2-order',
          type: 'ORDERING',
          instruction: 'Bringen Sie das Telefongespräch in die richtige Reihenfolge.',
          items: [
            { id: 's1', text: 'Praxis Dr. Lange, guten Tag.' },
            { id: 's2', text: 'Guten Tag, ich hätte gern einen Termin.' },
            { id: 's3', text: 'Geht es morgen um elf?' },
            { id: 's4', text: 'Ja, das passt. Vielen Dank.' },
            { id: 's5', text: 'Auf Wiederhören!' },
          ],
          solution: ['s1', 's2', 's3', 's4', 's5'],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – der Imperativ in drei Formen.
  {
    order: 3,
    title: 'Trink viel Tee!',
    subtitle: 'Der Imperativ',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'b7-3-h1', type: 'HEADING', level: 1, text: 'Trink viel Tee!' },
        {
          id: 'b7-3-dlg',
          type: 'DIALOGUE',
          title: 'Die Ärztin gibt Ratschläge',
          lines: [
            { speaker: 'Ärztin', text: 'Sie haben eine Grippe. Bleiben Sie ein paar Tage zu Hause.' },
            { speaker: 'Herr Okafor', text: 'Muss ich Tabletten nehmen?' },
            { speaker: 'Ärztin', text: 'Nehmen Sie dreimal täglich eine Tablette nach dem Essen. Und trinken Sie viel.' },
            { speaker: 'Herr Okafor', text: 'Darf ich arbeiten gehen?' },
            { speaker: 'Ärztin', text: 'Nein, auf keinen Fall. Ich schreibe Sie bis Freitag krank.' },
          ],
        },
        {
          id: 'b7-3-info-imp',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Der Imperativ',
          text: 'Mit dem Imperativ bittet man, rät oder fordert auf. Man bildet ihn aus dem Präsens. Sie-Form: Verb und „Sie“ tauschen den Platz. du-Form: „du“ und die Endung -st fallen weg. ihr-Form: „ihr“ fällt weg. Das Verb steht immer auf Position 1.',
          translations: {
            en: {
              title: 'The imperative',
              text: 'The imperative is used to ask, advise or tell someone to do something. It is formed from the present tense. Sie-form: verb and „Sie“ swap places. du-form: „du“ and the ending -st are dropped. ihr-form: „ihr“ is dropped. The verb always comes first.',
            },
            es: {
              title: 'El imperativo',
              text: 'Con el imperativo se pide, se aconseja o se ordena algo. Se forma a partir del presente. Forma Sie: el verbo y „Sie“ intercambian el lugar. Forma du: desaparecen „du“ y la terminación -st. Forma ihr: desaparece „ihr“. El verbo siempre va en la posición 1.',
            },
            fr: {
              title: 'L’impératif',
              text: 'L’impératif sert à demander, conseiller ou ordonner. On le forme à partir du présent. Forme Sie : le verbe et « Sie » échangent leur place. Forme du : « du » et la terminaison -st disparaissent. Forme ihr : « ihr » disparaît. Le verbe est toujours en position 1.',
            },
            it: {
              title: 'L’imperativo',
              text: 'Con l’imperativo si chiede, si consiglia o si ordina qualcosa. Si forma dal presente. Forma Sie: il verbo e „Sie“ si scambiano di posto. Forma du: cadono „du“ e la desinenza -st. Forma ihr: cade „ihr“. Il verbo sta sempre in posizione 1.',
            },
          },
          table: {
            headers: ['Präsens', 'Imperativ'],
            rows: [
              ['Sie trinken viel.', 'Trinken Sie viel!'],
              ['du trinkst viel.', 'Trink viel!'],
              ['ihr trinkt viel.', 'Trinkt viel!'],
              ['du nimmst eine Tablette.', 'Nimm eine Tablette!'],
              ['du schläfst viel.', 'Schlaf viel!'],
              ['du stehst früh auf.', 'Steh früh auf!'],
            ],
          },
        },
        {
          id: 'b7-3-info-sonder',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Drei Dinge, die man wissen muss',
          text: 'Erstens: Der Wechsel e → i bleibt (nimm, lies, iss), der Wechsel a → ä nicht (schlaf, fahr). Zweitens: Trennbare Verben trennen sich auch hier (Ruf mich an!). Drittens: „sein“ ist unregelmäßig: Sei ruhig! Seid pünktlich! Seien Sie vorsichtig!',
          translations: {
            en: {
              title: 'Three things you need to know',
              text: 'First: the change e → i stays (nimm, lies, iss), the change a → ä does not (schlaf, fahr). Second: separable verbs separate here too (Ruf mich an!). Third: „sein“ is irregular: Sei ruhig! Seid pünktlich! Seien Sie vorsichtig!',
            },
            es: {
              title: 'Tres cosas que hay que saber',
              text: 'Primero: el cambio e → i se mantiene (nimm, lies, iss), el cambio a → ä no (schlaf, fahr). Segundo: los verbos separables también se separan aquí (Ruf mich an!). Tercero: „sein“ es irregular: Sei ruhig! Seid pünktlich! Seien Sie vorsichtig!',
            },
            fr: {
              title: 'Trois choses à savoir',
              text: 'Premièrement : le changement e → i reste (nimm, lies, iss), le changement a → ä non (schlaf, fahr). Deuxièmement : les verbes séparables se séparent aussi ici (Ruf mich an!). Troisièmement : « sein » est irrégulier : Sei ruhig! Seid pünktlich! Seien Sie vorsichtig!',
            },
            it: {
              title: 'Tre cose da sapere',
              text: 'Primo: il cambio e → i resta (nimm, lies, iss), il cambio a → ä no (schlaf, fahr). Secondo: i verbi separabili si separano anche qui (Ruf mich an!). Terzo: „sein“ è irregolare: Sei ruhig! Seid pünktlich! Seien Sie vorsichtig!',
            },
          },
        },
        {
          id: 'b7-3-cloze-du',
          type: 'CLOZE',
          instruction: 'Ihr Freund ist krank. Geben Sie Ratschläge in der du-Form.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. (bleiben) ' },
            { kind: 'GAP', gapId: 'i1', solution: ['Bleib', 'Bleibe'], width: 7 },
            { kind: 'TEXT', text: ' im Bett!\n2. (trinken) ' },
            { kind: 'GAP', gapId: 'i2', solution: ['Trink', 'Trinke'], width: 7 },
            { kind: 'TEXT', text: ' viel Tee!\n3. (nehmen) ' },
            { kind: 'GAP', gapId: 'i3', solution: ['Nimm'], width: 6 },
            { kind: 'TEXT', text: ' eine Tablette!\n4. (anrufen) ' },
            { kind: 'GAP', gapId: 'i4', solution: ['Ruf', 'Rufe'], width: 5 },
            { kind: 'TEXT', text: ' den Arzt ' },
            { kind: 'GAP', gapId: 'i5', solution: ['an'], width: 4 },
            { kind: 'TEXT', text: '!\n5. (sein) ' },
            { kind: 'GAP', gapId: 'i6', solution: ['Sei'], width: 5 },
            { kind: 'TEXT', text: ' vorsichtig!' },
          ],
        },
        {
          id: 'b7-3-match',
          type: 'MATCHING',
          instruction: 'du, ihr oder Sie? Ordnen Sie zu.',
          left: [
            { id: 'l1', text: 'Kinder, …' },
            { id: 'l2', text: 'Frau Kraus, …' },
            { id: 'l3', text: 'Mama, …' },
          ],
          right: [
            { id: 'r1', text: '… putzt bitte die Zähne!' },
            { id: 'r2', text: '… warten Sie bitte einen Moment!' },
            { id: 'r3', text: '… komm schnell!' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
          ],
        },
        {
          id: 'b7-3-choice',
          type: 'CHOICE',
          instruction: 'Welche Imperative sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'k1', text: 'Fahr langsam!' },
            { id: 'k2', text: 'Nehm die Tabletten!' },
            { id: 'k3', text: 'Lies den Beipackzettel!' },
            { id: 'k4', text: 'Fährst vorsichtig!' },
          ],
          solution: ['k1', 'k3'],
          explanation:
            'Der Wechsel e → i bleibt: nimm (nicht „nehm“), lies. Der Wechsel a → ä fällt weg, und die Endung -st auch: fahr.',
          explanationTranslations: {
            en: 'The change e → i stays: nimm (not „nehm“), lies. The change a → ä is dropped, and so is the ending -st: fahr.',
            es: 'El cambio e → i se mantiene: nimm (no „nehm“), lies. El cambio a → ä desaparece, igual que la terminación -st: fahr.',
            fr: 'Le changement e → i reste : nimm (pas « nehm »), lies. Le changement a → ä disparaît, tout comme la terminaison -st : fahr.',
            it: 'Il cambio e → i resta: nimm (non „nehm“), lies. Il cambio a → ä scompare, e con lui la desinenza -st: fahr.',
          },
        },
        {
          id: 'b7-3-info-bitte',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'Höflich bleiben: bitte, mal, doch',
          text: 'Ein Imperativ allein klingt schnell wie ein Befehl. Mit „bitte“ wird er höflich, mit „mal“ freundlich und locker, mit „doch“ klingt er wie ein Ratschlag: Komm bitte! Hilf mir mal! Nimm doch eine Tablette!',
          translations: {
            en: {
              title: 'Staying polite: bitte, mal, doch',
              text: 'An imperative on its own can easily sound like an order. „bitte“ makes it polite, „mal“ friendly and casual, „doch“ makes it sound like advice: Komm bitte! Hilf mir mal! Nimm doch eine Tablette!',
            },
            es: {
              title: 'Ser cortés: bitte, mal, doch',
              text: 'Un imperativo solo suena enseguida a orden. Con „bitte“ se vuelve cortés, con „mal“ amable y relajado, con „doch“ suena a consejo: Komm bitte! Hilf mir mal! Nimm doch eine Tablette!',
            },
            fr: {
              title: 'Rester poli : bitte, mal, doch',
              text: 'Un impératif seul sonne vite comme un ordre. Avec « bitte », il devient poli, avec « mal » aimable et détendu, avec « doch » il sonne comme un conseil : Komm bitte! Hilf mir mal! Nimm doch eine Tablette!',
            },
            it: {
              title: 'Restare gentili: bitte, mal, doch',
              text: 'Un imperativo da solo suona subito come un ordine. Con „bitte“ diventa cortese, con „mal“ amichevole e informale, con „doch“ suona come un consiglio: Komm bitte! Hilf mir mal! Nimm doch eine Tablette!',
            },
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – in der Apotheke, Ratschläge verstehen und geben.
  {
    order: 4,
    title: 'In der Apotheke',
    subtitle: 'Medikamente und Ratschläge',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'b7-4-h1', type: 'HEADING', level: 1, text: 'In der Apotheke' },
        {
          id: 'b7-4-dlg',
          type: 'DIALOGUE',
          title: 'Ein Rezept einlösen',
          lines: [
            { speaker: 'Apothekerin', text: 'Guten Tag. Haben Sie ein Rezept?' },
            { speaker: 'Herr Okafor', text: 'Ja, hier bitte. Und haben Sie auch etwas gegen Husten?' },
            { speaker: 'Apothekerin', text: 'Dieser Hustensaft hilft gut. Nehmen Sie morgens und abends einen Löffel.' },
            { speaker: 'Herr Okafor', text: 'Vor oder nach dem Essen?' },
            { speaker: 'Apothekerin', text: 'Nach dem Essen. Und lesen Sie bitte die Packungsbeilage.' },
            { speaker: 'Herr Okafor', text: 'Was muss ich bezahlen?' },
            { speaker: 'Apothekerin', text: 'Für das Rezept fünf Euro Zuzahlung, der Hustensaft kostet 7,95 €.' },
          ],
        },
        {
          id: 'b7-4-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: Medikamente',
          items: [
            { term: 'Apotheke', article: 'die', plural: 'die Apotheken', translations: { en: 'pharmacy' } },
            { term: 'Medikament', article: 'das', plural: 'die Medikamente', translations: { en: 'medicine' } },
            { term: 'Tablette', article: 'die', plural: 'die Tabletten', translations: { en: 'tablet' } },
            { term: 'Tropfen', translations: { en: 'drops' }, example: 'Nasentropfen' },
            { term: 'Salbe', article: 'die', plural: 'die Salben', translations: { en: 'ointment' } },
            { term: 'Hustensaft', article: 'der', translations: { en: 'cough syrup' } },
            { term: 'Packungsbeilage', article: 'die', translations: { en: 'package leaflet' } },
            { term: 'dreimal täglich', translations: { en: 'three times a day' } },
            { term: 'vor / nach dem Essen', translations: { en: 'before / after meals' } },
            { term: 'gegen', translations: { en: 'against / for (an illness)' }, example: 'etwas gegen Kopfschmerzen' },
          ],
        },
        {
          id: 'b7-4-info-beipack',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'Aus einer Packungsbeilage',
          text: 'Erwachsene nehmen 3 × täglich 1 Tablette mit etwas Wasser nach den Mahlzeiten. Kinder unter 12 Jahren: nicht geeignet. Nicht länger als 5 Tage ohne ärztlichen Rat einnehmen. Nicht zusammen mit Alkohol einnehmen.',
          translations: {
            en: {
              title: 'From a package leaflet',
              text: 'Adults take 1 tablet 3 times a day with some water after meals. Children under 12: not suitable. Do not take for more than 5 days without medical advice. Do not take together with alcohol.',
            },
            es: {
              title: 'De un prospecto',
              text: 'Los adultos toman 1 comprimido 3 veces al día con un poco de agua después de las comidas. Niños menores de 12 años: no adecuado. No tomar durante más de 5 días sin consejo médico. No tomar junto con alcohol.',
            },
            fr: {
              title: 'Extrait d’une notice',
              text: 'Adultes : 1 comprimé 3 fois par jour avec un peu d’eau après les repas. Enfants de moins de 12 ans : ne convient pas. Ne pas prendre plus de 5 jours sans avis médical. Ne pas prendre avec de l’alcool.',
            },
            it: {
              title: 'Da un foglietto illustrativo',
              text: 'Gli adulti prendono 1 compressa 3 volte al giorno con un po’ d’acqua dopo i pasti. Bambini sotto i 12 anni: non adatto. Non assumere per più di 5 giorni senza parere medico. Non assumere insieme ad alcol.',
            },
          },
        },
        {
          id: 'b7-4-choice-beipack',
          type: 'CHOICE',
          instruction: 'Was steht in der Packungsbeilage? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'p1', text: 'Man nimmt die Tabletten nach dem Essen.' },
            { id: 'p2', text: 'Ein zehnjähriges Kind darf die Tabletten nehmen.' },
            { id: 'p3', text: 'Nach fünf Tagen soll man mit dem Arzt sprechen.' },
            { id: 'p4', text: 'Man darf ein Glas Wein dazu trinken.' },
          ],
          solution: ['p1', 'p3'],
          explanation:
            'Kinder unter 12 dürfen die Tabletten nicht nehmen, und Alkohol ist verboten. Länger als fünf Tage nur mit ärztlichem Rat.',
          explanationTranslations: {
            en: 'Children under 12 must not take the tablets, and alcohol is not allowed. More than five days only with medical advice.',
            es: 'Los niños menores de 12 años no pueden tomarlas y el alcohol está prohibido. Más de cinco días solo con consejo médico.',
            fr: 'Les enfants de moins de 12 ans ne doivent pas les prendre, et l’alcool est interdit. Plus de cinq jours seulement sur avis médical.',
            it: 'I bambini sotto i 12 anni non possono prenderle e l’alcol è vietato. Più di cinque giorni solo con parere medico.',
          },
        },
        {
          id: 'b7-4-match',
          type: 'MATCHING',
          instruction: 'Welcher Rat passt zu welchem Problem?',
          left: [
            { id: 'l1', text: 'Ich kann nicht schlafen.' },
            { id: 'l2', text: 'Mir tut der Rücken weh.' },
            { id: 'l3', text: 'Ich bin immer so müde.' },
            { id: 'l4', text: 'Ich habe Zahnschmerzen.' },
          ],
          right: [
            { id: 'r1', text: 'Trink abends keinen Kaffee!' },
            { id: 'r2', text: 'Mach doch mal Yoga!' },
            { id: 'r3', text: 'Geh früher ins Bett!' },
            { id: 'r4', text: 'Ruf beim Zahnarzt an!' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'b7-4-cloze',
          type: 'CLOZE',
          instruction: 'Die Apothekerin erklärt. Ergänzen Sie die Sie-Form.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '(nehmen) ' },
            { kind: 'GAP', gapId: 'a1', solution: ['Nehmen'], width: 7 },
            { kind: 'TEXT', text: ' Sie die Tropfen dreimal täglich. (trinken) ' },
            { kind: 'GAP', gapId: 'a2', solution: ['Trinken'], width: 8 },
            { kind: 'TEXT', text: ' Sie keinen Alkohol. (kommen) ' },
            { kind: 'GAP', gapId: 'a3', solution: ['Kommen'], width: 7 },
            { kind: 'TEXT', text: ' Sie wieder, wenn es nicht besser wird. (lesen) ' },
            { kind: 'GAP', gapId: 'a4', solution: ['Lesen'], width: 6 },
            { kind: 'TEXT', text: ' Sie bitte auch die Packungsbeilage. Gute Besserung!' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – Rückblick, zum Schluss eine Krankmeldung.
  {
    order: 5,
    title: 'Kannst du das schon?',
    subtitle: 'Rückblick auf das ganze Kapitel',
    estimatedMinutes: 15,
    content: {
      version: v,
      blocks: [
        { id: 'b7-5-h1', type: 'HEADING', level: 1, text: 'Kannst du das schon?' },
        {
          id: 'b7-5-intro',
          type: 'TEXT',
          text: 'Prüfen Sie, was Sie aus Kapitel 7 mitnehmen. Am Ende schreiben Sie eine Nachricht an Ihre Kursleiterin: Sie sind krank.',
          translations: {
            en: 'Check what you take away from Chapter 7. At the end, you’ll write a message to your course teacher: you are ill.',
            es: 'Compruebe qué se lleva del Capítulo 7. Al final escribirá un mensaje a su profesora: está usted enfermo.',
            fr: 'Vérifiez ce que vous retenez du chapitre 7. À la fin, vous écrirez un message à votre enseignante : vous êtes malade.',
            it: 'Verifichi cosa porta a casa dal Capitolo 7. Alla fine scriverà un messaggio alla sua insegnante: è malato.',
          },
        },
        {
          id: 'b7-5-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie das Gespräch.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '▸ Was fehlt dir?\n▸ Mir ' },
            { kind: 'GAP', gapId: 'r1', solution: ['tut'], width: 5 },
            { kind: 'TEXT', text: ' der Kopf weh, und ich habe ' },
            { kind: 'GAP', gapId: 'r2', solution: ['Fieber'], width: 7 },
            { kind: 'TEXT', text: '.\n▸ Oh nein! ' },
            { kind: 'GAP', gapId: 'r3', solution: ['Geh', 'Gehe'], width: 5 },
            { kind: 'TEXT', text: ' doch zum Arzt! Und ' },
            { kind: 'GAP', gapId: 'r4', solution: ['bleib', 'bleibe'], width: 6 },
            { kind: 'TEXT', text: ' heute zu Hause.\n▸ Ja, ich rufe gleich in der Praxis an und ' },
            { kind: 'GAP', gapId: 'r5', solution: ['vereinbare'], width: 11 },
            { kind: 'TEXT', text: ' einen Termin.' },
          ],
        },
        {
          id: 'b7-5-choice',
          type: 'CHOICE',
          instruction: 'Welche Sätze sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'k1', text: 'Mir tun die Ohren weh.' },
            { id: 'k2', text: 'Ich tue der Kopf weh.' },
            { id: 'k3', text: 'Seien Sie bitte pünktlich!' },
            { id: 'k4', text: 'Iss du mehr Obst!' },
          ],
          solution: ['k1', 'k3'],
          explanation:
            'Bei „weh tun“ steht die Person im Dativ: Mir tut der Kopf weh. Im du-Imperativ fällt „du“ weg: Iss mehr Obst!',
          explanationTranslations: {
            en: 'With „weh tun“ the person is in the dative: Mir tut der Kopf weh. In the du-imperative „du“ is dropped: Iss mehr Obst!',
            es: 'Con „weh tun“ la persona va en dativo: Mir tut der Kopf weh. En el imperativo de du desaparece „du“: Iss mehr Obst!',
            fr: 'Avec « weh tun », la personne est au datif : Mir tut der Kopf weh. À l’impératif en du, « du » disparaît : Iss mehr Obst!',
            it: 'Con „weh tun“ la persona è al dativo: Mir tut der Kopf weh. Nell’imperativo con du, „du“ cade: Iss mehr Obst!',
          },
        },
        {
          id: 'b7-5-match',
          type: 'MATCHING',
          instruction: 'Wo sagt man das?',
          left: [
            { id: 'm1', text: 'Haben Sie etwas gegen Husten?' },
            { id: 'm2', text: 'Machen Sie bitte den Mund auf.' },
            { id: 'm3', text: 'Ich möchte meinen Termin verschieben.' },
          ],
          right: [
            { id: 'y1', text: 'in der Apotheke' },
            { id: 'y2', text: 'im Behandlungszimmer' },
            { id: 'y3', text: 'am Telefon mit der Praxis' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'y1' },
            { leftId: 'm2', rightId: 'y2' },
            { leftId: 'm3', rightId: 'y3' },
          ],
        },
        {
          id: 'b7-5-writing',
          type: 'WRITING',
          instruction: 'Ich bin krank',
          prompt:
            'Sie können heute nicht zum Deutschkurs kommen. Schreiben Sie Ihrer Kursleiterin eine kurze E-Mail: Was fehlt Ihnen? Was sagt der Arzt? Wann kommen Sie wieder?',
          minWords: 30,
          maxWords: 100,
          aiFeedback: true,
          sampleAnswer:
            'Liebe Frau Weber, leider kann ich heute nicht zum Kurs kommen. Ich habe seit gestern Fieber, und mir tut der Hals sehr weh. Heute Morgen war ich beim Arzt. Er sagt, ich habe eine Erkältung und soll bis Mittwoch zu Hause bleiben. Am Donnerstag komme ich wieder. Viele Grüße, Samir Haddad',
        },
      ],
    },
  },
];
