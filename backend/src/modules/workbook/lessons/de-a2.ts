import {
  BEGINNER as B,
  GRAMMAR as G,
  choice,
  cloze,
  culture,
  dialogue,
  grammar,
  lessons,
  match,
  order,
  text,
  tip,
  vocabBuilder,
} from './builders';

const words = vocabBuilder('en');

/** Deutsch A2 – Beginner, Kapitel 7 bis 12, dazu die A2-Kapitel des Grammatikbuchs. */
export const DE_A2 = lessons('de-a2', [
  // ------------------------------------------------ Kapitel 7: Gesundheit
  {
    kind: 'VOCAB',
    title: 'Der Körper',
    ref: [B, 7, 1],
    learn: [
      words('Körperteile', [
        ['der Kopf', 'head'],
        ['das Auge', 'eye'],
        ['das Ohr', 'ear'],
        ['der Hals', 'neck / throat'],
        ['der Rücken', 'back'],
        ['der Bauch', 'belly / stomach'],
        ['die Hand', 'hand'],
        ['das Bein', 'leg'],
        ['der Fuß', 'foot'],
      ]),
    ],
    test: [
      match('Welcher Artikel?', [
        ['Kopf', 'der'],
        ['Hand', 'die'],
        ['Auge', 'das'],
        ['Bauch', 'der'],
        ['Bein', 'das'],
      ]),
      choice('Wählen Sie.', 'Womit hört man?', ['mit den Augen', '*mit den Ohren', 'mit dem Mund']),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Mir tut der Kopf weh',
    ref: [B, 7, 1],
    learn: [
      grammar(
        'Schmerzen beschreiben',
        'Zwei Möglichkeiten: „Ich habe Kopfschmerzen.“ oder „Mir tut der Kopf weh.“ Bei „weh tun“ steht die Person im Dativ; das Verb richtet sich nach dem Körperteil: Mir tut der Fuß weh – mir tun die Füße weh.',
        {
          headers: ['Ich habe …', 'Mir tut / tun … weh.'],
          rows: [
            ['Kopfschmerzen', 'Mir tut der Kopf weh.'],
            ['Halsschmerzen', 'Mir tut der Hals weh.'],
            ['–', 'Mir tun die Augen weh.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'tut oder tun?',
        'Mir [tut] der Rücken weh. Mir [tun] die Füße weh. Ihm [tut] der Bauch weh.',
      ),
      choice('Wählen Sie.', 'Was sagt man beim Arzt?', [
        'Ich tue Kopfschmerzen.',
        '*Ich habe Kopfschmerzen.',
        'Mich tut der Kopf weh.',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Einen Termin vereinbaren',
    ref: [B, 7, 2],
    learn: [
      dialogue('Am Telefon in der Praxis', [
        'Praxis: Praxis Dr. Lange, Sie sprechen mit Frau Kraus. Was kann ich für Sie tun?',
        'Elif: Guten Morgen, hier ist Elif Yildiz. Ich hätte gern einen Termin.',
        'Praxis: Geht es am Mittwoch um 10 Uhr?',
        'Elif: Mittwoch passt leider nicht. Haben Sie am Donnerstag etwas frei?',
        'Praxis: Donnerstag um 15.30 Uhr. Bringen Sie bitte Ihre Versichertenkarte mit.',
        'Elif: Gut, vielen Dank. Auf Wiederhören!',
      ]),
      tip(
        'Auf Wiederhören',
        'Am Telefon nennt man zuerst seinen Namen: „Hier ist …“. Zum Schluss sagt man „Auf Wiederhören“ – man sieht sich ja nicht.',
      ),
    ],
    test: [
      choice('Lesen Sie das Gespräch.', 'Wann hat Elif ihren Termin?', [
        'Mittwoch, 10 Uhr',
        '*Donnerstag, 15.30 Uhr',
        'Donnerstag, 10 Uhr',
      ]),
      choice('Lesen Sie das Gespräch.', 'Was soll Elif mitbringen?', [
        'ein Rezept',
        '*ihre Versichertenkarte',
        'ihren Pass',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'In der Praxis',
    ref: [B, 7, 2],
    learn: [
      words('Termine und Praxis', [
        ['einen Termin vereinbaren', 'to make an appointment'],
        ['einen Termin verschieben', 'to reschedule an appointment'],
        ['einen Termin absagen', 'to cancel an appointment'],
        ['das Wartezimmer', 'waiting room'],
        ['die Versichertenkarte', 'health insurance card'],
        ['das Rezept', 'prescription'],
        ['krankgeschrieben sein', 'to be on sick leave'],
      ]),
    ],
    test: [
      match('Was passt?', [
        ['Ich kann Donnerstag nicht. Geht auch Freitag?', 'einen Termin verschieben'],
        ['Ich komme nicht. Bitte streichen Sie den Termin.', 'einen Termin absagen'],
        ['Ich hätte gern einen Termin.', 'einen Termin vereinbaren'],
      ]),
      choice('Wählen Sie.', 'Hier wartet man auf den Arzt:', [
        '*im Wartezimmer',
        'in der Apotheke',
        'im Rezept',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Nehmen Sie eine Tablette!',
    ref: [B, 7, 3],
    learn: [
      grammar(
        'Der Imperativ mit Sie',
        'Mit dem Imperativ bittet man, rät oder fordert auf. Sie-Form: Verb und „Sie“ tauschen den Platz, das Verb steht auf Position 1.',
        {
          headers: ['Präsens', 'Imperativ'],
          rows: [
            ['Sie trinken viel.', 'Trinken Sie viel!'],
            ['Sie bleiben zu Hause.', 'Bleiben Sie zu Hause!'],
            ['Sie rufen morgen an.', 'Rufen Sie morgen an!'],
          ],
        },
      ),
    ],
    test: [
      order('Die Ärztin gibt einen Rat.', [
        'Nehmen',
        'Sie',
        'dreimal täglich',
        'eine Tablette',
        '!',
      ]),
      cloze(
        'Bilden Sie den Imperativ.',
        '[Bleiben] Sie im Bett! [Trinken] Sie viel Tee! [Rufen] Sie mich morgen [an]!',
        ['Bleibt', 'Trink'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Trink viel Tee!',
    ref: [B, 7, 3],
    learn: [
      grammar(
        'Der Imperativ mit du und ihr',
        'du-Form: „du“ und die Endung -st fallen weg: du trinkst → Trink! ihr-Form: nur „ihr“ fällt weg: ihr trinkt → Trinkt! Der Wechsel e → i bleibt (nimm, lies, iss), a → ä nicht (schlaf, fahr). „sein“: Sei ruhig! Seid pünktlich!',
      ),
      tip(
        'bitte, mal, doch',
        'Mit „bitte“ wird ein Imperativ höflich, mit „mal“ locker, mit „doch“ klingt er wie ein Ratschlag: Hilf mir mal! Nimm doch eine Tablette!',
      ),
    ],
    test: [
      match('Welcher Imperativ?', [
        ['du nimmst', 'Nimm!'],
        ['du schläfst', 'Schlaf!'],
        ['du liest', 'Lies!'],
        ['ihr seid', 'Seid!'],
        ['du bist', 'Sei!'],
      ]),
      choice('Wählen Sie.', 'Sagen Sie Ihrem Freund: früh aufstehen!', [
        'Stehst früh auf!',
        '*Steh früh auf!',
        'Aufsteh früh!',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Die Packungsbeilage',
    ref: [B, 7, 4],
    learn: [
      culture(
        'Aus einer Packungsbeilage',
        'Erwachsene nehmen 3 × täglich 1 Tablette mit etwas Wasser nach den Mahlzeiten. Kinder unter 12 Jahren: nicht geeignet. Nicht länger als 5 Tage ohne ärztlichen Rat einnehmen. Nicht zusammen mit Alkohol einnehmen.',
      ),
    ],
    test: [
      choice('Lesen Sie den Text.', 'Wann nimmt man die Tabletten?', [
        'vor dem Essen',
        '*nach dem Essen',
        'nur abends',
      ]),
      choice('Lesen Sie den Text.', 'Darf ein Kind (8 Jahre) die Tabletten nehmen?', [
        'Ja, eine am Tag.',
        '*Nein.',
        'Ja, mit Wasser.',
      ]),
      choice('Lesen Sie den Text.', 'Wie viele Tabletten nimmt ein Erwachsener pro Tag?', [
        '*drei',
        'eine',
        'fünf',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'dürfen und sollen',
    ref: [G, 5, 1],
    learn: [
      grammar(
        'Erlaubnis und Auftrag',
        '„dürfen“ = Erlaubnis: Hier darf man parken. „sollen“ = Auftrag von einer anderen Person: Der Arzt sagt, ich soll mehr schlafen.',
        {
          headers: ['', 'dürfen', 'sollen'],
          rows: [
            ['ich', 'darf', 'soll'],
            ['du', 'darfst', 'sollst'],
            ['er / sie / es', 'darf', 'soll'],
            ['wir', 'dürfen', 'sollen'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'dürfen oder sollen?',
        'Die Ärztin sagt, ich [soll] viel trinken. [Darf] ich arbeiten gehen? – Nein, Sie [dürfen] nicht arbeiten.',
        ['sollen', 'darfst'],
      ),
      choice('Wählen Sie.', 'Im Museum ist Fotografieren verboten. Man … nicht fotografieren.', [
        '*darf',
        'soll',
        'will',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'nicht müssen ≠ nicht dürfen',
    ref: [G, 5, 2],
    learn: [
      grammar(
        'Nicht nötig oder verboten?',
        '„Du musst nicht kommen“ heißt: Es ist nicht nötig, aber du kannst. „Du darfst nicht kommen“ heißt: Es ist verboten. Statt „nicht müssen“ sagt man auch „nicht brauchen zu“: Du brauchst nicht zu kommen.',
      ),
    ],
    test: [
      choice('Was bedeutet der Satz?', 'Morgen ist Sonntag. Ich muss nicht früh aufstehen.', [
        '*Ich kann lange schlafen.',
        'Früh aufstehen ist verboten.',
      ]),
      choice('Was bedeutet der Satz?', 'Hier darf man nicht rauchen.', [
        'Man kann rauchen, wenn man will.',
        '*Rauchen ist verboten.',
      ]),
      cloze(
        'musst oder darfst?',
        'Du [darfst] bei Rot nicht über die Straße gehen. Du [musst] mir nicht helfen, ich schaffe das allein.',
      ),
    ],
  },

  // ------------------------------------------------ Kapitel 8: Arbeit und Beruf
  {
    kind: 'VOCAB',
    title: 'Bei der Arbeit',
    ref: [B, 8, 1],
    learn: [
      words('Arbeit', [
        ['die Firma', 'company'],
        ['der Kollege / die Kollegin', 'colleague'],
        ['der Chef / die Chefin', 'boss'],
        ['die Schicht', 'shift'],
        ['Vollzeit / Teilzeit', 'full-time / part-time'],
        ['das Gehalt', 'salary'],
        ['der Urlaub', 'holiday / leave'],
      ]),
      tip(
        'als, bei, in',
        'Den Beruf nennt man mit „als“, den Arbeitgeber mit „bei“ (+ Dativ), den Ort mit „in“: Ich arbeite als Elektriker bei einer kleinen Firma. Sie arbeitet in einem Krankenhaus.',
      ),
    ],
    test: [
      cloze(
        'als, bei oder in?',
        'Ömer arbeitet [als] Elektriker [bei] einer kleinen Firma. Katja arbeitet [in] einem Krankenhaus.',
      ),
      choice('Wählen Sie.', 'Julia arbeitet 20 Stunden pro Woche. Sie arbeitet …', [
        'Vollzeit.',
        '*Teilzeit.',
        'Schicht.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Ich habe gearbeitet',
    ref: [B, 8, 2],
    learn: [
      grammar(
        'Das Perfekt mit haben',
        'Im Gespräch erzählt man Vergangenes im Perfekt: „haben“ steht auf Position 2, das Partizip II am Ende. Regelmäßige Verben: ge- … -t (gemacht, gearbeitet, gekocht). Unregelmäßige: ge- … -en (geschlafen, gelesen, getrunken).',
      ),
      dialogue('Montagmorgen im Büro', [
        'Julia: Wie war dein Wochenende?',
        'Tim: Ruhig. Ich habe lange geschlafen und viel gelesen.',
        'Julia: Ich habe am Samstag gearbeitet. Am Sonntag habe ich meine Eltern besucht.',
      ]),
    ],
    test: [
      order('Bilden Sie einen Satz im Perfekt.', [
        'Wir',
        'haben',
        'am Sonntag',
        'zusammen',
        'gekocht',
        '.',
      ]),
      cloze(
        'Ergänzen Sie das Partizip.',
        'Ich habe Sport [gemacht]. Er hat Tee [getrunken]. Hast du das Buch [gelesen]?',
        ['gemachen', 'getrinkt'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Unregelmäßige Partizipien',
    ref: [G, 4, 1],
    learn: [
      tip(
        'In Gruppen lernen',
        'Unregelmäßige Partizipien muss man lernen – aber viele folgen gemeinsamen Vokalmustern.',
      ),
      grammar('Vokalmuster', 'Verben mit demselben Muster lernt man am besten zusammen.', {
        headers: ['Muster', 'Beispiele'],
        rows: [
          ['i → u', 'trinken – getrunken, finden – gefunden'],
          ['ei → ie', 'schreiben – geschrieben, bleiben – geblieben'],
          ['e → o', 'sprechen – gesprochen, helfen – geholfen'],
          ['gleicher Vokal', 'fahren – gefahren, lesen – gelesen'],
          ['Mischform', 'bringen – gebracht, denken – gedacht'],
        ],
      }),
    ],
    test: [
      match('Infinitiv und Partizip II', [
        ['finden', 'gefunden'],
        ['schreiben', 'geschrieben'],
        ['sprechen', 'gesprochen'],
        ['denken', 'gedacht'],
        ['nehmen', 'genommen'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'war und hatte',
    ref: [B, 8, 2],
    learn: [
      grammar(
        'sein und haben: Präteritum',
        'Bei „sein“ und „haben“ benutzt man auch im Gespräch meistens das Präteritum: Ich war krank. Wir hatten viel Arbeit.',
        {
          headers: ['Person', 'sein', 'haben'],
          rows: [
            ['ich', 'war', 'hatte'],
            ['du', 'warst', 'hattest'],
            ['er / sie / es', 'war', 'hatte'],
            ['wir', 'waren', 'hatten'],
            ['ihr', 'wart', 'hattet'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Wie [war] dein Wochenende? – Toll! Wir [waren] am See und [hatten] super Wetter. Und du? [Warst] du zu Hause?',
        ['hattest'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Ich bin gefahren',
    ref: [B, 8, 3],
    learn: [
      grammar(
        'Perfekt mit sein',
        'Mit „sein“ stehen Verben der Bewegung von A nach B (gehen, fahren, kommen, fliegen) und der Veränderung (aufstehen, einschlafen, werden). Dazu kommen „sein“ und „bleiben“. Alle anderen nehmen „haben“.',
        {
          headers: ['Infinitiv', 'Perfekt'],
          rows: [
            ['gehen', 'ich bin gegangen'],
            ['fahren', 'du bist gefahren'],
            ['aufstehen', 'ihr seid aufgestanden'],
            ['bleiben', 'sie sind geblieben'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'haben oder sein?',
        'Ich [bin] nach Berlin gefahren. Dort [habe] ich meine Freundin besucht. Wir [sind] zu Hause geblieben und [haben] gekocht.',
      ),
      choice('Wählen Sie.', 'Heute … ich um sechs aufgestanden.', ['habe', '*bin']),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'eingekauft, besucht, studiert',
    ref: [B, 8, 3],
    learn: [
      grammar(
        'Wo steht das ge-?',
        'Trennbare Verben: ge- steht zwischen Vorsilbe und Stamm: einkaufen → eingekauft, aufstehen → aufgestanden. Untrennbare Verben (be-, ver-, er- …) und Verben auf -ieren haben kein ge-: besuchen → besucht, verstehen → verstanden, studieren → studiert.',
      ),
    ],
    test: [
      match('Das Partizip II', [
        ['einkaufen', 'eingekauft'],
        ['besuchen', 'besucht'],
        ['studieren', 'studiert'],
        ['anrufen', 'angerufen'],
        ['verstehen', 'verstanden'],
      ]),
      choice('Wählen Sie.', 'Hast du Mama schon …?', ['geanrufen', '*angerufen', 'anrufen']),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Samirs Werdegang',
    ref: [B, 8, 3],
    learn: [
      text(
        'Samir erzählt: „Ich bin in Beirut geboren und dort zur Schule gegangen. Dann habe ich eine Ausbildung als Koch gemacht. Ich habe acht Jahre in einem Hotel gearbeitet. 2021 bin ich nach Deutschland gekommen. Zuerst habe ich einen Deutschkurs besucht. Seit einem Jahr arbeite ich in einem Restaurant in Leipzig. Ich bin sehr zufrieden.“',
      ),
    ],
    test: [
      order('Was war zuerst? Ordnen Sie.', [
        'in Beirut zur Schule gegangen',
        'eine Ausbildung als Koch gemacht',
        'in einem Hotel gearbeitet',
        'nach Deutschland gekommen',
        'einen Deutschkurs besucht',
      ]),
      choice('Lesen Sie den Text.', 'Wie lange hat Samir im Hotel gearbeitet?', [
        'ein Jahr',
        '*acht Jahre',
        'seit 2021',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'weil: einen Grund nennen',
    ref: [B, 8, 4],
    learn: [
      grammar(
        'Nebensätze mit weil',
        'Der weil-Satz ist ein Nebensatz: Das konjugierte Verb steht ganz am Ende. Vor „weil“ steht ein Komma.',
        {
          headers: ['Hauptsatz', 'Nebensatz'],
          rows: [
            ['Ich bin müde,', 'weil ich viele Nachtdienste habe.'],
            ['Er kommt heute nicht,', 'weil er krank ist.'],
            ['Wir sind zu spät,', 'weil der Bus nicht gekommen ist.'],
          ],
        },
      ),
    ],
    test: [
      order('Bilden Sie den weil-Satz.', [
        'Katja sucht eine neue Stelle,',
        'weil',
        'sie',
        'Teilzeit',
        'arbeiten',
        'möchte',
        '.',
      ]),
      choice('Welcher Satz ist richtig?', 'Wählen Sie.', [
        'Ich bleibe zu Hause, weil ich bin krank.',
        '*Ich bleibe zu Hause, weil ich krank bin.',
        'Ich bleibe zu Hause, weil krank ich bin.',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Eine Stellenanzeige',
    ref: [B, 8, 4],
    learn: [
      culture(
        'Koch/Köchin (m/w/d) gesucht',
        'Das Restaurant „Zur Linde“ in Leipzig sucht ab sofort eine Köchin oder einen Koch in Vollzeit. Sie haben eine abgeschlossene Ausbildung und zwei Jahre Berufserfahrung. Sie arbeiten gern im Team und sind flexibel, auch am Wochenende. Wir bieten ein gutes Gehalt, 30 Tage Urlaub und ein nettes Team.',
      ),
      tip('(m/w/d)', 'männlich, weiblich, divers – die Stelle ist für alle Menschen offen.'),
    ],
    test: [
      choice('Lesen Sie die Anzeige.', 'Wie viele Jahre Berufserfahrung braucht man?', [
        'keine',
        '*zwei',
        'dreißig',
      ]),
      choice('Lesen Sie die Anzeige.', 'Was muss man sein?', [
        '*flexibel, auch am Wochenende',
        'Student',
        'nur morgens frei',
      ]),
      choice('Lesen Sie die Anzeige.', 'Ist die Stelle Teilzeit?', ['Ja.', '*Nein, Vollzeit.']),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'konnte, musste, durfte',
    ref: [G, 5, 3],
    learn: [
      grammar(
        'Modalverben im Präteritum',
        'Man bildet sie mit -te; die Umlaute fallen weg: können → konnte, müssen → musste, dürfen → durfte. Für „möchten“ benutzt man in der Vergangenheit „wollte“.',
        {
          headers: ['', 'können', 'müssen', 'wollen'],
          rows: [
            ['ich', 'konnte', 'musste', 'wollte'],
            ['du', 'konntest', 'musstest', 'wolltest'],
            ['er / sie / es', 'konnte', 'musste', 'wollte'],
            ['wir', 'konnten', 'mussten', 'wollten'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Ergänzen Sie im Präteritum.',
        'Gestern [musste] ich lange arbeiten. Ich [konnte] nicht kommen. Als Kind [wollte] ich Pilotin werden.',
        ['müsste', 'könnte'],
      ),
      choice('Wählen Sie.', 'Früher … man im Zug rauchen.', ['*durfte', 'dürfte', 'darfte']),
    ],
  },

  // ------------------------------------------------ Kapitel 9: Reisen und Verkehr
  {
    kind: 'VOCAB',
    title: 'Nach dem Weg fragen',
    ref: [B, 9, 1],
    learn: [
      words('Der Weg', [
        ['geradeaus', 'straight ahead'],
        ['links / rechts', 'left / right'],
        ['abbiegen', 'to turn'],
        ['die Ampel', 'traffic light'],
        ['die Kreuzung', 'crossroads'],
        ['die Brücke', 'bridge'],
        ['gegenüber', 'opposite'],
        ['zu Fuß', 'on foot'],
      ]),
      dialogue('Auf der Straße', [
        'Touristin: Entschuldigung, wie komme ich zum Bahnhof?',
        'Passant: Gehen Sie hier geradeaus bis zur Ampel. Dann biegen Sie links ab.',
        'Passant: Der Bahnhof ist direkt gegenüber vom Park.',
      ]),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Gehen Sie [geradeaus] bis zur Ampel. Dann biegen Sie [links] ab. Der Bahnhof ist [gegenüber] vom Park.',
        ['weit'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'zum Bahnhof, zur Post',
    ref: [B, 9, 1],
    learn: [
      grammar(
        'zu + Dativ',
        'Nach dem Ziel fragt man mit „zu“ + Dativ: zum (= zu dem) Bahnhof, zur (= zu der) Post. „bis zum / bis zur“ sagt, wie weit: Gehen Sie bis zur Ampel.',
      ),
    ],
    test: [
      cloze(
        'zum oder zur?',
        'Wie komme ich [zum] Bahnhof (der)? Gehen Sie bis [zur] Kreuzung (die). Ich muss noch [zur] Post (die) und dann [zum] Arzt (der).',
      ),
      choice('Wählen Sie.', 'Wie komme ich … Museum (das)?', ['zur', '*zum', 'zu die']),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Unterwegs',
    ref: [B, 9, 2],
    learn: [
      words('Verkehrsmittel', [
        ['die Fahrkarte', 'ticket'],
        ['einfach / hin und zurück', 'single / return'],
        ['das Gleis', 'platform / track'],
        ['umsteigen', 'to change (trains)'],
        ['abfahren / ankommen', 'to depart / to arrive'],
        ['die Verspätung', 'delay'],
      ]),
      tip(
        'mit + Dativ',
        'mit dem Bus, mit dem Zug, mit der Bahn, mit dem Fahrrad. Nur „zu Fuß“ ist anders: Ich gehe zu Fuß.',
      ),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Ich fahre [mit] der Straßenbahn zur Arbeit. Mein Kollege kommt [mit] dem Fahrrad. Heute gehe ich [zu] Fuß.',
        ['mit dem'],
      ),
      choice('Wählen Sie.', 'Der Zug kommt 20 Minuten später. Er hat …', [
        '*Verspätung.',
        'Anschluss.',
        'Gleis.',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Am Fahrkartenschalter',
    ref: [B, 9, 2],
    learn: [
      dialogue('Eine Fahrkarte nach Dresden', [
        'Kundin: Guten Tag. Eine Fahrkarte nach Dresden, bitte.',
        'Mitarbeiter: Einfach oder hin und zurück?',
        'Kundin: Hin und zurück, bitte. Ich komme am Sonntag zurück.',
        'Mitarbeiter: Der nächste Zug fährt um 14.10 Uhr von Gleis 3. Sie müssen in Leipzig umsteigen.',
        'Kundin: Wann komme ich in Dresden an?',
        'Mitarbeiter: Um 16.45 Uhr. Das macht 58 Euro.',
      ]),
    ],
    test: [
      choice('Lesen Sie das Gespräch.', 'Von welchem Gleis fährt der Zug?', [
        'Gleis 14',
        '*Gleis 3',
        'Gleis 16',
      ]),
      choice('Lesen Sie das Gespräch.', 'Wo muss die Kundin umsteigen?', [
        'in Dresden',
        '*in Leipzig',
        'nicht nötig',
      ]),
      choice('Lesen Sie das Gespräch.', 'Was für eine Fahrkarte kauft sie?', [
        'einfach',
        '*hin und zurück',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Wo oder wohin?',
    ref: [B, 9, 3],
    learn: [
      grammar(
        'Wechselpräpositionen',
        'in, an, auf, über, unter, vor, hinter, neben, zwischen: Wo? (Ort) → Dativ. Wohin? (Richtung) → Akkusativ.',
        {
          headers: ['Wohin? + Akkusativ', 'Wo? + Dativ'],
          rows: [
            ['Ich gehe in den Park.', 'Ich bin im Park.'],
            ['Wir fahren in die Stadt.', 'Wir sind in der Stadt.'],
            ['Sie legt den Pass auf den Tisch.', 'Der Pass liegt auf dem Tisch.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Dativ oder Akkusativ?',
        'Ich gehe in [den] Supermarkt. Jetzt bin ich in [dem] Supermarkt. Wir fahren in [die] Stadt. Wir wohnen in [der] Stadt.',
      ),
      choice('Wählen Sie.', 'Die Kinder spielen …', ['*im Garten.', 'in den Garten.']),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'stellen – stehen, legen – liegen',
    ref: [B, 9, 3],
    learn: [
      tip(
        'Das Verb verrät die Frage',
        'Verben der Bewegung – stellen, legen, hängen (etwas irgendwohin), setzen – verlangen „Wohin?“ und den Akkusativ. Verben des Zustands – stehen, liegen, hängen, sitzen – verlangen „Wo?“ und den Dativ.',
      ),
    ],
    test: [
      match('Was passt?', [
        ['Ich stelle die Flasche', 'auf den Tisch.'],
        ['Die Flasche steht', 'auf dem Tisch.'],
        ['Ich hänge die Jacke', 'an die Tür.'],
        ['Die Jacke hängt', 'an der Tür.'],
      ]),
      choice('Wählen Sie.', 'Das Buch … auf dem Sofa.', ['legt', '*liegt']),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'nach Wien, ans Meer, zu Freunden',
    ref: [B, 9, 4],
    learn: [
      grammar(
        'Wohin fahren Sie?',
        'Städte und Länder ohne Artikel: nach. Länder mit Artikel, Gebäude, Berge: in (+ Akk.). Wasser: an (+ Akk.). Personen: zu (+ Dat.).',
        {
          headers: ['Wohin?', 'Beispiel'],
          rows: [
            ['nach', 'nach Wien, nach Italien, nach Hause'],
            ['in + Akk.', 'in die Schweiz, ins Hotel, in die Berge'],
            ['an + Akk.', 'ans Meer, an den Strand'],
            ['zu + Dat.', 'zu meiner Tante, zu Freunden'],
          ],
        },
      ),
    ],
    test: [
      match('Wohin fahren Sie im Urlaub?', [
        ['Spanien', 'nach Spanien'],
        ['die Türkei', 'in die Türkei'],
        ['das Meer', 'ans Meer'],
        ['meine Oma', 'zu meiner Oma'],
        ['die Berge', 'in die Berge'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Grüße vom Bodensee',
    ref: [B, 9, 4],
    learn: [
      text(
        'Liebe Mira, viele Grüße vom Bodensee! Wir sind am Samstag mit dem Zug nach Konstanz gefahren. Das Wetter ist super. Gestern haben wir eine Radtour gemacht und sind mit dem Schiff auf die Insel Mainau gefahren. Dort haben wir viele Blumen gesehen und Eis gegessen. Heute Abend gehen wir ins Restaurant am Hafen. Am Freitag kommen wir zurück. Bis bald! Deine Elif',
      ),
    ],
    test: [
      choice('Lesen Sie die Karte.', 'Wie ist Elif nach Konstanz gefahren?', [
        'mit dem Auto',
        '*mit dem Zug',
        'mit dem Schiff',
      ]),
      choice('Lesen Sie die Karte.', 'Was hat Elif auf der Insel Mainau gemacht?', [
        '*Blumen gesehen und Eis gegessen',
        'eine Radtour gemacht',
        'im Hafen gegessen',
      ]),
      choice('Lesen Sie die Karte.', 'Wann kommt Elif zurück?', [
        'am Samstag',
        'heute Abend',
        '*am Freitag',
      ]),
    ],
  },

  // ------------------------------------------------ Kapitel 10: Feste
  {
    kind: 'VOCAB',
    title: 'Feste im Jahr',
    ref: [B, 10, 1],
    learn: [
      words('Feste', [
        ['feiern', 'to celebrate'],
        ['der Feiertag', 'public holiday'],
        ['Weihnachten', 'Christmas'],
        ['der Heiligabend', 'Christmas Eve'],
        ['Silvester', 'New Year’s Eve'],
        ['Ostern', 'Easter'],
        ['der Geburtstag', 'birthday'],
        ['das Geschenk', 'present'],
      ]),
      text(
        'Am 24. Dezember ist Heiligabend: Die Familie sitzt zusammen, und es gibt Geschenke. An Silvester feiert man mit Freunden und Feuerwerk. An Ostern suchen die Kinder bunte Eier.',
      ),
    ],
    test: [
      match('Welches Fest?', [
        ['24. Dezember, Geschenke', 'Heiligabend'],
        ['31. Dezember, Feuerwerk', 'Silvester'],
        ['Frühling, bunte Eier', 'Ostern'],
        ['einmal im Jahr, eine Torte', 'Geburtstag'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Das Datum',
    ref: [B, 10, 1],
    learn: [
      grammar(
        'Ordinalzahlen',
        'Bis 19 hängt man -te an, ab 20 -ste. Ausnahmen: erste, dritte, siebte. Nach „am“ endet die Zahl auf -en: am ersten Mai. Geschrieben: am 1. Mai.',
        {
          headers: ['Zahl', 'Der Wievielte?', 'Wann?'],
          rows: [
            ['1.', 'der erste', 'am ersten'],
            ['3.', 'der dritte', 'am dritten'],
            ['7.', 'der siebte', 'am siebten'],
            ['20.', 'der zwanzigste', 'am zwanzigsten'],
          ],
        },
      ),
    ],
    test: [
      match('Wann ist das?', [
        ['am 3. Oktober', 'am dritten Oktober'],
        ['am 7. Juni', 'am siebten Juni'],
        ['am 1. Mai', 'am ersten Mai'],
        ['am 24. Dezember', 'am vierundzwanzigsten Dezember'],
      ]),
      choice('Wählen Sie.', 'Heute ist … 12. März.', [
        'am zwölften',
        '*der zwölfte',
        'der zwölfste',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Herzliche Einladung!',
    ref: [B, 10, 2],
    learn: [
      text(
        'Liebe Freundinnen und Freunde, ich werde dreißig und möchte das mit euch feiern! Die Party ist am Samstag, dem 14. Juni, ab 19 Uhr in meinem Garten (Lindenstraße 8). Für Essen und Getränke ist gesorgt – bringt einfach gute Laune mit. Bitte sagt mir bis zum 7. Juni Bescheid, ob ihr kommt. Ich freue mich auf euch! Eure Mira',
      ),
    ],
    test: [
      choice('Lesen Sie die Einladung.', 'Warum feiert Mira?', [
        'Sie heiratet.',
        '*Sie hat Geburtstag.',
        'Sie hat eine neue Wohnung.',
      ]),
      choice('Lesen Sie die Einladung.', 'Was sollen die Gäste mitbringen?', [
        'Essen',
        'Getränke',
        '*nur gute Laune',
      ]),
      choice('Lesen Sie die Einladung.', 'Bis wann sollen die Gäste antworten?', [
        'bis zum 14. Juni',
        '*bis zum 7. Juni',
        'bis 19 Uhr',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Zusagen, absagen, gratulieren',
    ref: [B, 10, 2],
    learn: [
      tip(
        'Auf eine Einladung antworten',
        'Man bedankt sich zuerst, dann sagt man zu oder ab. Bei einer Absage nennt man einen Grund.',
      ),
      grammar('Feste Wendungen', 'Diese Sätze passen fast immer.', {
        headers: ['zusagen', 'absagen', 'gratulieren'],
        rows: [
          [
            'Danke für die Einladung!',
            'Leider kann ich nicht kommen, weil …',
            'Herzlichen Glückwunsch zum Geburtstag!',
          ],
          ['Ich komme gern.', 'Schade! Ich wünsche dir eine tolle Party.', 'Alles Gute!'],
          ['Soll ich etwas mitbringen?', '', 'Frohe Weihnachten!'],
        ],
      }),
    ],
    test: [
      match('zusagen, absagen oder gratulieren?', [
        ['Ich komme gern!', 'zusagen'],
        ['Leider kann ich nicht, weil ich arbeite.', 'absagen'],
        ['Alles Gute zum Geburtstag!', 'gratulieren'],
      ]),
      cloze('Ergänzen Sie.', '[Herzlichen] Glückwunsch zum Geburtstag! [Frohe] Weihnachten!', [
        'Gute',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Wem? und Was?',
    ref: [B, 10, 3],
    learn: [
      grammar(
        'Zwei Objekte',
        'schenken, geben, kaufen, zeigen, schicken, erklären: die Person im Dativ (Wem?), die Sache im Akkusativ (Was?). Die Person steht meistens zuerst.',
        {
          headers: ['Subjekt', 'Verb', 'Wem?', 'Was?'],
          rows: [
            ['Ich', 'schenke', 'meiner Mutter', 'einen Schal.'],
            ['Wir', 'kaufen', 'dem Kind', 'ein Fahrrad.'],
            ['Er', 'zeigt', 'den Gästen', 'die Wohnung.'],
          ],
        },
      ),
    ],
    test: [
      order('Bilden Sie einen Satz.', ['Ich', 'schicke', 'meinem Freund', 'eine Karte', '.']),
      cloze(
        'Ergänzen Sie.',
        'Wir schenken [dem] Kind (das) [einen] Ball (der). Sie erklärt [der] Kundin (die) [den] Weg (der).',
        ['die'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Ich schenke ihr ein Buch',
    ref: [B, 10, 3],
    learn: [
      grammar(
        'Personalpronomen im Dativ',
        'Statt der Person steht oft ein Pronomen im Dativ: Ich schenke ihr ein Buch.',
        {
          headers: ['Nominativ', 'Dativ', 'Beispiel'],
          rows: [
            ['ich', 'mir', 'Gib mir bitte das Salz.'],
            ['du', 'dir', 'Ich kaufe dir ein Eis.'],
            ['er / es', 'ihm', 'Wir schenken ihm ein Spiel.'],
            ['sie', 'ihr', 'Ich schreibe ihr eine Karte.'],
            ['wir', 'uns', 'Zeigst du uns die Fotos?'],
            ['Sie', 'Ihnen', 'Kann ich Ihnen helfen?'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Ergänzen Sie das Pronomen.',
        'Mira hat Geburtstag. Wir kaufen [ihr] Konzertkarten. Jonas hat kein Geld. Ich gebe [ihm] zehn Euro. Kannst du [mir] helfen?',
        ['ihn', 'mich'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Könntest du mir helfen?',
    ref: [B, 10, 4],
    learn: [
      grammar(
        'könnte, würde, hätte gern',
        '„Kannst du …?“ ist freundlich, „Könntest du …?“ oder „Würdest du …?“ noch höflicher. „Ich hätte gern …“ ist die höfliche Form von „Ich möchte …“.',
        {
          headers: ['', 'können', 'werden', 'haben'],
          rows: [
            ['ich', 'könnte', 'würde', 'hätte'],
            ['du', 'könntest', 'würdest', 'hättest'],
            ['Sie', 'könnten', 'würden', 'hätten'],
          ],
        },
      ),
    ],
    test: [
      choice('Was ist am höflichsten?', 'Wählen Sie.', [
        'Hilf mir!',
        'Kannst du mir helfen?',
        '*Könntest du mir vielleicht helfen?',
      ]),
      cloze(
        'Ergänzen Sie.',
        '[Könnten] Sie das Fenster öffnen? [Würdest] du Stühle mitbringen? Ich [hätte] gern einen Kaffee.',
        ['Hätte'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Der Dativ',
    ref: [G, 2, 2],
    learn: [
      grammar(
        'Die Artikel im Dativ',
        'Im Dativ ändern sich alle Artikel: männlich und sächlich -m, weiblich -r. Im Plural bekommt das Nomen ein -n.',
        {
          headers: ['männlich', 'weiblich', 'sächlich', 'Plural'],
          rows: [
            ['dem Mann', 'der Frau', 'dem Kind', 'den Kindern'],
            ['einem Mann', 'einer Frau', 'einem Kind', '– Kindern'],
          ],
        },
      ),
      tip(
        'Verben nur mit Dativ',
        'helfen, danken, gehören, gefallen, antworten, schmecken, passen: Ich helfe dem Nachbarn.',
      ),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Ich helfe [dem] Nachbarn. Das Auto gehört [meinem] Bruder. Wir danken [der] Lehrerin. Die Suppe schmeckt [den] Kindern.',
        ['den Kinder', 'die'],
      ),
    ],
  },

  // ------------------------------------------------ Kapitel 11: Medien
  {
    kind: 'GRAMMAR',
    title: 'immer, oft, manchmal, nie',
    ref: [B, 11, 1],
    learn: [
      grammar(
        'Wie oft?',
        'Diese Wörter stehen meistens direkt nach dem Verb: Ich lese nie Zeitung. Am Satzanfang folgt sofort das Verb: Manchmal sehe ich Serien.',
        {
          headers: ['', 'Beispiel'],
          rows: [
            ['immer (100 %)', 'Ich habe immer mein Handy dabei.'],
            ['oft', 'Ich schreibe oft E-Mails.'],
            ['manchmal', 'Manchmal sehe ich Serien.'],
            ['selten', 'Er sieht selten fern.'],
            ['nie (0 %)', 'Paula liest nie Zeitung.'],
          ],
        },
      ),
    ],
    test: [
      order('Von 100 % bis 0 %', ['immer', 'oft', 'manchmal', 'selten', 'nie']),
      order('Beginnen Sie mit „Manchmal“.', ['Manchmal', 'höre', 'ich', 'Radio', '.']),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Telefonieren',
    ref: [B, 11, 2],
    learn: [
      words('Am Telefon', [
        ['zurückrufen', 'to call back'],
        ['verbinden', 'to put through'],
        ['… am Apparat', '… speaking'],
        ['eine Nachricht hinterlassen', 'to leave a message'],
        ['besetzt', 'engaged / busy'],
        ['erreichen', 'to reach (by phone)'],
        ['wiederholen', 'to repeat'],
      ]),
      tip(
        'Nachfragen ist normal',
        '„Könnten Sie das bitte wiederholen?“ – „Könnten Sie bitte langsamer sprechen?“ – „Wie schreibt man das?“',
      ),
    ],
    test: [
      match('Was passt?', [
        ['Die Leitung ist …', 'besetzt.'],
        ['Einen Moment, ich …', 'verbinde.'],
        ['Kann ich eine Nachricht …', 'hinterlassen?'],
        ['Könnten Sie das bitte …', 'wiederholen?'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Eine Nachricht hinterlassen',
    ref: [B, 11, 2],
    learn: [
      dialogue('Im Büro', [
        'Empfang: Firma Berger, Schulz am Apparat. Guten Tag.',
        'Herr Okafor: Guten Tag, Okafor hier. Könnte ich bitte Frau Neumann sprechen?',
        'Empfang: Einen Moment, ich verbinde. … Tut mir leid, Frau Neumann ist gerade in einer Besprechung.',
        'Herr Okafor: Kann ich eine Nachricht hinterlassen?',
        'Empfang: Natürlich.',
        'Herr Okafor: Sie möchte mich bitte zurückrufen. Meine Nummer ist 0171 23 45 678.',
      ]),
    ],
    test: [
      choice('Lesen Sie das Gespräch.', 'Warum kann Frau Neumann nicht telefonieren?', [
        'Sie ist krank.',
        '*Sie ist in einer Besprechung.',
        'Die Leitung ist besetzt.',
      ]),
      choice('Lesen Sie das Gespräch.', 'Was möchte Herr Okafor?', [
        'Er ruft später wieder an.',
        '*Frau Neumann soll ihn zurückrufen.',
        'Er schreibt eine E-Mail.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Anrede und Gruß',
    ref: [B, 11, 3],
    learn: [
      grammar(
        'Formell und informell',
        'Nach der Anrede steht ein Komma, die erste Zeile beginnt klein.',
        {
          headers: ['', 'formell', 'informell'],
          rows: [
            ['Anrede', 'Sehr geehrte Frau Neumann,', 'Liebe Mira, / Lieber Jonas,'],
            ['unbekannt', 'Sehr geehrte Damen und Herren,', 'Hallo zusammen,'],
            ['Gruß', 'Mit freundlichen Grüßen', 'Viele Grüße / Liebe Grüße'],
          ],
        },
      ),
    ],
    test: [
      choice('Wählen Sie.', 'Sie schreiben an eine Firma. Sie kennen den Namen nicht.', [
        'Liebe Firma,',
        '*Sehr geehrte Damen und Herren,',
        'Hallo zusammen,',
      ]),
      cloze(
        'Ergänzen Sie.',
        '[Lieber] Jonas, … [Liebe] Grüße, deine Mira. – [Sehr] geehrter Herr Braun, … Mit [freundlichen] Grüßen',
        ['Liebes'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Eine formelle E-Mail',
    ref: [B, 11, 3],
    learn: [
      text(
        'Sehr geehrte Damen und Herren, ich habe am 3. März bei Ihnen einen Drucker bestellt (Bestellnummer 48213). Leider ist das Paket noch nicht angekommen. Könnten Sie mir bitte mitteilen, wann ich den Drucker bekomme? Vielen Dank im Voraus. Mit freundlichen Grüßen, Aylin Demir',
      ),
    ],
    test: [
      choice('Lesen Sie die E-Mail.', 'Warum schreibt Frau Demir?', [
        'Der Drucker ist kaputt.',
        '*Das Paket ist nicht angekommen.',
        'Sie möchte einen Drucker bestellen.',
      ]),
      choice('Lesen Sie die E-Mail.', 'Was möchte sie wissen?', [
        'den Preis',
        '*wann der Drucker kommt',
        'die Bestellnummer',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Sie sagt, dass …',
    ref: [B, 11, 4],
    learn: [
      grammar(
        'Nebensätze mit dass',
        'Mit „dass“ gibt man wieder, was jemand sagt, denkt oder meint. Wie bei „weil“: Das Verb steht am Ende, davor ein Komma. Typisch davor: sagen, glauben, finden, wissen, hoffen.',
        {
          headers: ['Hauptsatz', 'Nebensatz'],
          rows: [
            ['Mira sagt,', 'dass sie später kommt.'],
            ['Ich glaube,', 'dass der Zug Verspätung hat.'],
            ['Wir finden,', 'dass die Serie spannend ist.'],
          ],
        },
      ),
    ],
    test: [
      order('Bilden Sie den dass-Satz.', [
        'Ich hoffe,',
        'dass',
        'du',
        'morgen',
        'Zeit',
        'hast',
        '.',
      ]),
      choice('Welcher Satz ist richtig?', 'Wählen Sie.', [
        'Er sagt, dass er ist krank.',
        '*Er sagt, dass er krank ist.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: '…, dass er später anruft',
    ref: [B, 11, 4],
    learn: [
      grammar(
        'Trennbare Verben und Modalverben im Nebensatz',
        'Im Nebensatz stehen trennbare Verben wieder zusammen: Er ruft später an. → …, dass er später anruft. Modalverben stehen ganz am Ende, hinter dem Infinitiv: …, dass sie länger arbeiten muss.',
      ),
    ],
    test: [
      order('Bilden Sie den Nebensatz.', ['Ben sagt,', 'dass', 'Mira', 'um acht', 'ankommt', '.']),
      order('Bilden Sie den Nebensatz.', [
        'Ich glaube,',
        'dass',
        'wir',
        'um halb neun',
        'essen',
        'können',
        '.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'denn oder weil?',
    ref: [G, 6, 3],
    learn: [
      grammar(
        'Position 0 oder Nebensatz?',
        'und, aber, oder, denn verbinden zwei Hauptsätze. Sie stehen auf „Position 0“: Das Verb bleibt auf Position 2. weil, dass, wenn, ob leiten einen Nebensatz ein: Das Verb geht ans Ende.',
        {
          headers: ['', 'Beispiel'],
          rows: [
            ['denn', 'Ich bleibe zu Hause, denn ich bin krank.'],
            ['weil', 'Ich bleibe zu Hause, weil ich krank bin.'],
            ['aber', 'Es regnet, aber wir gehen spazieren.'],
          ],
        },
      ),
    ],
    test: [
      choice('Welcher Satz ist richtig?', 'Wählen Sie.', [
        '*Ich lerne Deutsch, denn ich arbeite in Wien.',
        'Ich lerne Deutsch, denn ich in Wien arbeite.',
      ]),
      cloze(
        'denn oder weil?',
        'Wir fahren mit dem Zug, [weil] das Auto kaputt ist. Wir fahren mit dem Zug, [denn] das Auto ist kaputt.',
      ),
    ],
  },

  // ------------------------------------------------ Kapitel 12: Umwelt und Wetter
  {
    kind: 'VOCAB',
    title: 'Wie ist das Wetter?',
    ref: [B, 12, 1],
    learn: [
      words('Das Wetter', [
        ['Es regnet.', 'It’s raining.'],
        ['Es schneit.', 'It’s snowing.'],
        ['Die Sonne scheint.', 'The sun is shining.'],
        ['Es ist bewölkt.', 'It’s cloudy.'],
        ['Es ist windig.', 'It’s windy.'],
        ['das Gewitter', 'thunderstorm'],
        ['der Frühling / Sommer / Herbst / Winter', 'spring / summer / autumn / winter'],
      ]),
    ],
    test: [
      match('Was passt?', [
        ['☀️', 'Die Sonne scheint.'],
        ['🌧️', 'Es regnet.'],
        ['❄️', 'Es schneit.'],
        ['☁️', 'Es ist bewölkt.'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Es regnet. Es wird warm.',
    ref: [B, 12, 2],
    learn: [
      grammar(
        'Das Wetter mit „es“',
        'Beim Wetter steht fast immer „es“ als Subjekt: Es regnet. Es ist kalt. Jahreszeiten stehen mit „im“: im Frühling, im Winter. Mit „werden“ beschreibt man eine Veränderung: Es wird warm.',
      ),
      culture(
        'Small Talk',
        'Das Wetter ist in Deutschland das Small-Talk-Thema Nummer eins: „Schönes Wetter heute, oder?“',
      ),
    ],
    test: [
      cloze('Ergänzen Sie.', '[Im] Winter [schneit] es oft. Morgen [wird] es wärmer.', [
        'Am',
        'ist',
      ]),
      choice('Wählen Sie.', 'Heute sind es 10 Grad, morgen 20 Grad. Es …', [
        'ist warm.',
        '*wird warm.',
        'hat warm.',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Die Wettervorhersage',
    ref: [B, 12, 2],
    learn: [
      text(
        'Und hier das Wetter für morgen: Im Norden ist es bewölkt, und am Nachmittag regnet es. Die Temperaturen liegen bei 14 Grad. Im Süden scheint den ganzen Tag die Sonne, dort wird es bis zu 24 Grad warm. Am Abend gibt es in den Bergen Gewitter. Am Wochenende wird es überall kühler.',
      ),
    ],
    test: [
      choice('Lesen Sie die Vorhersage.', 'Wie ist das Wetter morgen im Norden?', [
        'sonnig und warm',
        '*bewölkt, am Nachmittag Regen',
        'Schnee',
      ]),
      choice('Lesen Sie die Vorhersage.', 'Wo gibt es am Abend Gewitter?', [
        'im Norden',
        '*in den Bergen',
        'überall',
      ]),
      choice('Lesen Sie die Vorhersage.', 'Wie wird das Wetter am Wochenende?', [
        'wärmer',
        '*kühler',
        'genauso',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Wärmer als gestern',
    ref: [B, 12, 3],
    learn: [
      grammar(
        'Der Komparativ: -er + als',
        'Man hängt -er an das Adjektiv; das Verglichene folgt mit „als“. Viele kurze Adjektive bekommen einen Umlaut.',
        {
          headers: ['Grundform', 'Komparativ'],
          rows: [
            ['schnell', 'schneller'],
            ['warm / kalt', 'wärmer / kälter'],
            ['groß / jung', 'größer / jünger'],
            ['gut', 'besser'],
            ['viel', 'mehr'],
            ['gern', 'lieber'],
            ['hoch', 'höher'],
          ],
        },
      ),
    ],
    test: [
      match('Grundform und Komparativ', [
        ['gut', 'besser'],
        ['viel', 'mehr'],
        ['gern', 'lieber'],
        ['kalt', 'kälter'],
        ['hoch', 'höher'],
      ]),
      cloze(
        'Ergänzen Sie.',
        'Der Zug ist [schneller] als der Bus. Heute ist es [wärmer] als gestern.',
        ['schnellst', 'warmer'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'als oder wie?',
    ref: [B, 12, 3],
    learn: [
      grammar(
        'Anders oder gleich?',
        'Ist etwas anders: Komparativ + „als“: Berlin ist größer als Köln. Ist etwas gleich: „so … wie“ + Grundform: Heute ist es so kalt wie gestern. Verneint: nicht so … wie.',
      ),
    ],
    test: [
      cloze(
        'als oder wie?',
        'Mein Bruder ist älter [als] ich. Er ist so groß [wie] mein Vater. Tee trinke ich lieber [als] Kaffee.',
      ),
      choice('Wählen Sie.', 'Hamburg ist nicht so warm … München.', ['als', '*wie']),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Am besten',
    ref: [B, 12, 4],
    learn: [
      grammar(
        'Der Superlativ: am -sten',
        'Nach dem Verb steht der Superlativ mit „am … -sten“. Nach -d, -t, -s, -ß, -z kommt ein -e- dazu: am ältesten, am heißesten.',
        {
          headers: ['Grundform', 'Komparativ', 'Superlativ'],
          rows: [
            ['schnell', 'schneller', 'am schnellsten'],
            ['alt', 'älter', 'am ältesten'],
            ['gut', 'besser', 'am besten'],
            ['viel', 'mehr', 'am meisten'],
            ['gern', 'lieber', 'am liebsten'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Ergänzen Sie den Superlativ.',
        'Das Fahrrad ist in der Stadt oft am [schnellsten]. Zu Fuß gehen ist am [besten] für die Umwelt. Das Flugzeug verbraucht am [meisten].',
        ['gutesten', 'vielsten'],
      ),
      choice('Wählen Sie.', 'Meine Oma ist … in der Familie.', [
        'am altesten',
        '*am ältesten',
        'am älter',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Mülltrennung',
    ref: [B, 12, 4],
    learn: [
      culture(
        'Welche Tonne?',
        'In Deutschland trennt man den Müll: Papier in die blaue Tonne, Verpackungen aus Plastik und Metall in die gelbe, Essensreste in die braune (Biomüll), alles andere in die graue oder schwarze (Restmüll). Glasflaschen bringt man zum Container, Pfandflaschen zurück in den Supermarkt.',
      ),
    ],
    test: [
      match('Wohin gehört das?', [
        ['eine alte Zeitung', 'blaue Tonne'],
        ['ein Joghurtbecher aus Plastik', 'gelbe Tonne'],
        ['Kartoffelschalen', 'braune Tonne'],
        ['eine Pfandflasche', 'zurück in den Supermarkt'],
      ]),
    ],
  },
]);
