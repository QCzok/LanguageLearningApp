import type { UnitSeed } from './chapter-beginner-1';

/**
 * Grammatik, Kapitel 5: „Modalverben“
 *
 * Drei Seiten, gebaut wie die Kapitel davor.
 *
 * Seite 1 ordnet die sechs Modalverben nach Bedeutung, nicht nach Alphabet:
 * Fähigkeit, Pflicht, Erlaubnis, Auftrag, Wunsch. Seite 2 zeigt die
 * Stellung – im Hauptsatz die Klammer, im Nebensatz das Modalverb ganz
 * hinten – und die Falle bei der Verneinung: „nicht müssen“ ist nicht das
 * Gegenteil von „müssen“ im Sinne eines Verbots. Seite 3 bringt das
 * Präteritum, weil man Modalverben auch im Gespräch so in die Vergangenheit
 * setzt.
 *
 * Erklärungen übersetzt, Tabellen unübersetzt – wie in Kapitel 1.
 */
const v = 1;

export const GRAMMAR_5_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – die sechs Modalverben: Formen und Bedeutungen.
  {
    order: 1,
    title: 'Sechs Modalverben',
    subtitle: 'Formen und Bedeutungen',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'g5-1-h1', type: 'HEADING', level: 1, text: 'Sechs Modalverben' },
        {
          id: 'g5-1-intro',
          type: 'TEXT',
          text: 'Modalverben sagen nicht, was passiert, sondern wie es gemeint ist: als Fähigkeit, Pflicht, Erlaubnis oder Wunsch. „Ich schwimme“ ist eine Tatsache. „Ich kann schwimmen“, „Ich muss schwimmen“, „Ich darf schwimmen“ sind drei ganz verschiedene Aussagen.',
          translations: {
            en: 'Modal verbs don’t say what happens but how it is meant: as an ability, obligation, permission or wish. „Ich schwimme“ (I swim) is a fact. „Ich kann schwimmen“ (I can swim), „Ich muss schwimmen“ (I have to swim), „Ich darf schwimmen“ (I’m allowed to swim) are three quite different statements.',
            es: 'Los verbos modales no dicen qué pasa, sino cómo se entiende: como capacidad, obligación, permiso o deseo. „Ich schwimme“ (nado) es un hecho. „Ich kann schwimmen“ (sé nadar), „Ich muss schwimmen“ (tengo que nadar), „Ich darf schwimmen“ (puedo / tengo permiso para nadar) son tres afirmaciones muy distintas.',
            fr: 'Les verbes de modalité ne disent pas ce qui se passe, mais comment c’est envisagé : capacité, obligation, permission ou souhait. « Ich schwimme » (je nage) est un fait. « Ich kann schwimmen » (je sais nager), « Ich muss schwimmen » (je dois nager), « Ich darf schwimmen » (j’ai le droit de nager) sont trois énoncés bien différents.',
            it: 'I verbi modali non dicono che cosa succede, ma come va inteso: come capacità, obbligo, permesso o desiderio. „Ich schwimme“ (nuoto) è un fatto. „Ich kann schwimmen“ (so nuotare), „Ich muss schwimmen“ (devo nuotare), „Ich darf schwimmen“ (posso / ho il permesso di nuotare) sono tre affermazioni molto diverse.',
          },
        },
        {
          id: 'g5-1-info-bedeutung',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Was bedeuten sie?',
          text: 'Jedes Modalverb hat eine Grundbedeutung. „möchten“ ist eigentlich eine Form von „mögen“, wird aber wie ein eigenes Verb benutzt – als höfliche Form von „wollen“.',
          translations: {
            en: {
              title: 'What do they mean?',
              text: 'Each modal verb has a core meaning. „möchten“ is really a form of „mögen“, but it is used like a separate verb – as the polite form of „wollen“.',
            },
            es: {
              title: '¿Qué significan?',
              text: 'Cada verbo modal tiene un significado básico. „möchten“ es en realidad una forma de „mögen“, pero se usa como un verbo propio: como forma cortés de „wollen“.',
            },
            fr: {
              title: 'Que signifient-ils ?',
              text: 'Chaque verbe de modalité a un sens de base. « möchten » est en réalité une forme de « mögen », mais on l’emploie comme un verbe à part entière – comme forme polie de « wollen ».',
            },
            it: {
              title: 'Che cosa significano?',
              text: 'Ogni verbo modale ha un significato di base. „möchten“ è in realtà una forma di „mögen“, ma si usa come un verbo a sé – come forma cortese di „wollen“.',
            },
          },
          table: {
            headers: ['Modalverb', 'Bedeutung', 'Beispiel'],
            rows: [
              ['können', 'Fähigkeit, Möglichkeit', 'Ich kann Gitarre spielen.'],
              ['müssen', 'Notwendigkeit, Pflicht', 'Ich muss um acht im Büro sein.'],
              ['dürfen', 'Erlaubnis', 'Hier darf man parken.'],
              ['sollen', 'Auftrag von einer anderen Person', 'Der Arzt sagt, ich soll mehr schlafen.'],
              ['wollen', 'Wunsch, Plan', 'Wir wollen nächstes Jahr heiraten.'],
              ['mögen / möchten', 'Vorliebe / höflicher Wunsch', 'Ich mag Jazz. Ich möchte ein Wasser.'],
            ],
          },
        },
        {
          id: 'g5-1-info-formen',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Die Formen im Präsens',
          text: 'Alle Modalverben haben dasselbe Muster: Bei ich und er/sie/es gibt es keine Endung, und im Singular ändert sich meist der Vokal. „sollen“ behält seinen Vokal.',
          translations: {
            en: {
              title: 'Present tense forms',
              text: 'All modal verbs follow the same pattern: ich and er/sie/es have no ending, and the vowel usually changes in the singular. „sollen“ keeps its vowel.',
            },
            es: {
              title: 'Las formas del presente',
              text: 'Todos los verbos modales siguen el mismo patrón: ich y er/sie/es no llevan terminación, y en singular suele cambiar la vocal. „sollen“ mantiene su vocal.',
            },
            fr: {
              title: 'Les formes au présent',
              text: 'Tous les verbes de modalité suivent le même modèle : ich et er/sie/es n’ont pas de terminaison, et au singulier la voyelle change le plus souvent. « sollen » garde sa voyelle.',
            },
            it: {
              title: 'Le forme del presente',
              text: 'Tutti i verbi modali seguono lo stesso schema: ich ed er/sie/es non hanno desinenza, e al singolare di solito cambia la vocale. „sollen“ mantiene la sua vocale.',
            },
          },
          table: {
            headers: ['', 'können', 'müssen', 'dürfen', 'sollen', 'wollen', 'mögen'],
            rows: [
              ['ich', 'kann', 'muss', 'darf', 'soll', 'will', 'mag'],
              ['du', 'kannst', 'musst', 'darfst', 'sollst', 'willst', 'magst'],
              ['er / sie / es', 'kann', 'muss', 'darf', 'soll', 'will', 'mag'],
              ['wir', 'können', 'müssen', 'dürfen', 'sollen', 'wollen', 'mögen'],
              ['ihr', 'könnt', 'müsst', 'dürft', 'sollt', 'wollt', 'mögt'],
              ['sie / Sie', 'können', 'müssen', 'dürfen', 'sollen', 'wollen', 'mögen'],
            ],
          },
        },
        {
          id: 'g5-1-match',
          type: 'MATCHING',
          instruction: 'Welches Modalverb passt zur Situation?',
          left: [
            { id: 'l1', text: 'Das Schild sagt: Rauchen erlaubt.' },
            { id: 'l2', text: 'Morgen ist die Prüfung.' },
            { id: 'l3', text: 'Meine Chefin hat mir einen Auftrag gegeben.' },
            { id: 'l4', text: 'Ich habe Klavierunterricht genommen.' },
          ],
          right: [
            { id: 'r1', text: 'Hier darf man rauchen.' },
            { id: 'r2', text: 'Heute muss ich lernen.' },
            { id: 'r3', text: 'Ich soll den Bericht schreiben.' },
            { id: 'r4', text: 'Jetzt kann ich Klavier spielen.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'g5-1-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die richtige Form.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. ' },
            { kind: 'GAP', gapId: 'm1', solution: ['Darf'], hint: 'dürfen', width: 6 },
            { kind: 'TEXT', text: ' ich das Fenster aufmachen?\n2. Mein Arzt sagt, ich ' },
            { kind: 'GAP', gapId: 'm2', solution: ['soll'], hint: 'sollen', width: 6 },
            { kind: 'TEXT', text: ' weniger Kaffee trinken.\n3. ' },
            { kind: 'GAP', gapId: 'm3', solution: ['Magst'], hint: 'mögen', width: 6 },
            { kind: 'TEXT', text: ' du Katzen?\n4. Ihr ' },
            { kind: 'GAP', gapId: 'm4', solution: ['müsst', 'muesst'], hint: 'müssen', width: 6 },
            { kind: 'TEXT', text: ' das nicht heute machen.\n5. Er ' },
            { kind: 'GAP', gapId: 'm5', solution: ['will'], hint: 'wollen', width: 6 },
            { kind: 'TEXT', text: ' Pilot werden.' },
          ],
        },
        {
          id: 'g5-1-choice',
          type: 'CHOICE',
          instruction: 'Sie geben einem Kollegen eine Nachricht weiter: „Frau Kraus hat angerufen. Sie ___ sie bitte zurückrufen.“ Was passt?',
          multiple: false,
          options: [
            { id: 'c1', text: 'müssen' },
            { id: 'c2', text: 'sollen' },
            { id: 'c3', text: 'dürfen' },
          ],
          solution: ['c2'],
          explanation:
            'Der Wunsch kommt von einer anderen Person (Frau Kraus) – dafür steht „sollen“: Sie sollen sie zurückrufen.',
          explanationTranslations: {
            en: 'The request comes from someone else (Ms Kraus) – that’s what „sollen“ is for: Sie sollen sie zurückrufen (you’re to call her back).',
            es: 'El deseo viene de otra persona (la Sra. Kraus); para eso se usa „sollen“: Sie sollen sie zurückrufen (tiene que devolverle la llamada, según ella).',
            fr: 'La demande vient de quelqu’un d’autre (Mme Kraus) – c’est le rôle de « sollen » : Sie sollen sie zurückrufen (vous êtes prié de la rappeler).',
            it: 'La richiesta viene da un’altra persona (la signora Kraus) – per questo si usa „sollen“: Sie sollen sie zurückrufen (deve richiamarla, come chiede lei).',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – Stellung im Satz und die Verneinung.
  {
    order: 2,
    title: 'Satzklammer und Verneinung',
    subtitle: 'Wo das Modalverb steht, und müssen ≠ dürfen',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'g5-2-h1', type: 'HEADING', level: 1, text: 'Satzklammer und Verneinung' },
        {
          id: 'g5-2-info-stellung',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Die Stellung',
          text: 'Im Hauptsatz steht das Modalverb auf Position 2 (in der Ja/Nein-Frage auf Position 1), der Infinitiv ganz am Ende. Im Nebensatz steht das Modalverb hinter dem Infinitiv, also ganz hinten. Trennbare Verben bleiben im Infinitiv zusammen.',
          translations: {
            en: {
              title: 'Word order',
              text: 'In a main clause the modal is in position 2 (position 1 in a yes/no question), the infinitive right at the end. In a subordinate clause the modal comes after the infinitive, i.e. at the very end. Separable verbs stay together in the infinitive.',
            },
            es: {
              title: 'La posición',
              text: 'En la oración principal el modal va en la posición 2 (en la pregunta de sí/no, en la 1) y el infinitivo al final. En la subordinada el modal va detrás del infinitivo, es decir, al final del todo. Los verbos separables van juntos en infinitivo.',
            },
            fr: {
              title: 'La place dans la phrase',
              text: 'Dans la principale, le verbe de modalité est en position 2 (en position 1 dans une question fermée), l’infinitif tout à la fin. Dans la subordonnée, le verbe de modalité se place après l’infinitif, donc tout à la fin. Les verbes séparables restent soudés à l’infinitif.',
            },
            it: {
              title: 'La posizione',
              text: 'Nella principale il modale sta in posizione 2 (in posizione 1 nella domanda sì/no), l’infinito alla fine. Nella subordinata il modale va dopo l’infinito, cioè proprio alla fine. I verbi separabili restano uniti all’infinito.',
            },
          },
          table: {
            headers: ['Satzart', 'Beispiel'],
            rows: [
              ['Aussage', 'Ich muss heute früh aufstehen.'],
              ['W-Frage', 'Wann musst du aufstehen?'],
              ['Ja/Nein-Frage', 'Musst du morgen arbeiten?'],
              ['Nebensatz', 'Ich bin müde, weil ich früh aufstehen muss.'],
            ],
          },
        },
        {
          id: 'g5-2-order-1',
          type: 'ORDERING',
          instruction: 'Bilden Sie einen Hauptsatz.',
          items: [
            { id: 'a1', text: 'Am' },
            { id: 'a2', text: 'Wochenende' },
            { id: 'a3', text: 'wollen' },
            { id: 'a4', text: 'wir' },
            { id: 'a5', text: 'die' },
            { id: 'a6', text: 'Küche' },
            { id: 'a7', text: 'streichen.' },
          ],
          solution: ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7'],
        },
        {
          id: 'g5-2-order-2',
          type: 'ORDERING',
          instruction: 'Bilden Sie den Nebensatz: Er ruft an, …',
          items: [
            { id: 'b1', text: 'weil' },
            { id: 'b2', text: 'er' },
            { id: 'b3', text: 'heute' },
            { id: 'b4', text: 'nicht' },
            { id: 'b5', text: 'kommen' },
            { id: 'b6', text: 'kann.' },
          ],
          solution: ['b1', 'b2', 'b3', 'b4', 'b5', 'b6'],
        },
        {
          id: 'g5-2-info-ohne',
          type: 'INFO',
          variant: 'TIP',
          title: 'Modalverben ohne Infinitiv',
          text: 'Wenn klar ist, was gemeint ist, fällt der Infinitiv oft weg: Ich kann Deutsch (sprechen). Ich muss nach Hause (gehen). Ich möchte einen Kaffee (haben). „mögen“ steht fast immer ohne Infinitiv: Ich mag Schokolade.',
          translations: {
            en: {
              title: 'Modal verbs without an infinitive',
              text: 'When the meaning is clear, the infinitive is often dropped: Ich kann Deutsch (sprechen). Ich muss nach Hause (gehen). Ich möchte einen Kaffee (haben). „mögen“ is almost always used without an infinitive: Ich mag Schokolade.',
            },
            es: {
              title: 'Verbos modales sin infinitivo',
              text: 'Cuando está claro lo que se quiere decir, el infinitivo suele omitirse: Ich kann Deutsch (sprechen). Ich muss nach Hause (gehen). Ich möchte einen Kaffee (haben). „mögen“ va casi siempre sin infinitivo: Ich mag Schokolade.',
            },
            fr: {
              title: 'Verbes de modalité sans infinitif',
              text: 'Quand le sens est clair, l’infinitif disparaît souvent : Ich kann Deutsch (sprechen). Ich muss nach Hause (gehen). Ich möchte einen Kaffee (haben). « mögen » s’emploie presque toujours sans infinitif : Ich mag Schokolade.',
            },
            it: {
              title: 'Verbi modali senza infinito',
              text: 'Quando il senso è chiaro, l’infinito spesso si omette: Ich kann Deutsch (sprechen). Ich muss nach Hause (gehen). Ich möchte einen Kaffee (haben). „mögen“ si usa quasi sempre senza infinito: Ich mag Schokolade.',
            },
          },
        },
        {
          id: 'g5-2-info-negation',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'nicht müssen ≠ nicht dürfen',
          text: '„Du musst nicht kommen“ heißt: Es ist nicht nötig, aber du kannst. „Du darfst nicht kommen“ heißt: Es ist verboten. Statt „nicht müssen“ sagt man oft auch „nicht brauchen zu“: Du brauchst nicht zu kommen.',
          translations: {
            en: {
              title: 'nicht müssen ≠ nicht dürfen',
              text: '„Du musst nicht kommen“ means: it isn’t necessary, but you may (you don’t have to come). „Du darfst nicht kommen“ means: it’s forbidden (you mustn’t come). Instead of „nicht müssen“ people often say „nicht brauchen zu“: Du brauchst nicht zu kommen.',
            },
            es: {
              title: 'nicht müssen ≠ nicht dürfen',
              text: '„Du musst nicht kommen“ significa: no hace falta, pero puedes (no tienes que venir). „Du darfst nicht kommen“ significa: está prohibido (no puedes venir). En lugar de „nicht müssen“ se dice a menudo „nicht brauchen zu“: Du brauchst nicht zu kommen.',
            },
            fr: {
              title: 'nicht müssen ≠ nicht dürfen',
              text: '« Du musst nicht kommen » signifie : ce n’est pas nécessaire, mais tu peux (tu n’es pas obligé de venir). « Du darfst nicht kommen » signifie : c’est interdit (tu ne dois pas venir). Au lieu de « nicht müssen », on dit souvent « nicht brauchen zu » : Du brauchst nicht zu kommen.',
            },
            it: {
              title: 'nicht müssen ≠ nicht dürfen',
              text: '„Du musst nicht kommen“ significa: non è necessario, ma puoi (non devi per forza venire). „Du darfst nicht kommen“ significa: è vietato (non puoi venire). Invece di „nicht müssen“ si dice spesso „nicht brauchen zu“: Du brauchst nicht zu kommen.',
            },
          },
        },
        {
          id: 'g5-2-choice-neg',
          type: 'CHOICE',
          instruction: 'Im Museum: Fotos sind verboten. Was sagt der Mitarbeiter?',
          multiple: false,
          options: [
            { id: 'c1', text: 'Hier müssen Sie nicht fotografieren.' },
            { id: 'c2', text: 'Hier dürfen Sie nicht fotografieren.' },
            { id: 'c3', text: 'Hier brauchen Sie nicht zu fotografieren.' },
          ],
          solution: ['c2'],
          explanation:
            'Ein Verbot drückt man mit „nicht dürfen“ aus. „nicht müssen“ und „nicht brauchen zu“ bedeuten nur: Es ist nicht nötig.',
          explanationTranslations: {
            en: 'A prohibition is expressed with „nicht dürfen“. „nicht müssen“ and „nicht brauchen zu“ only mean: it isn’t necessary.',
            es: 'Una prohibición se expresa con „nicht dürfen“. „nicht müssen“ y „nicht brauchen zu“ solo significan: no hace falta.',
            fr: 'Une interdiction s’exprime avec « nicht dürfen ». « nicht müssen » et « nicht brauchen zu » signifient seulement : ce n’est pas nécessaire.',
            it: 'Un divieto si esprime con „nicht dürfen“. „nicht müssen“ e „nicht brauchen zu“ significano solo: non è necessario.',
          },
        },
        {
          id: 'g5-2-match-neg',
          type: 'MATCHING',
          instruction: 'Was bedeutet der Satz?',
          left: [
            { id: 'l1', text: 'Am Sonntag muss ich nicht arbeiten.' },
            { id: 'l2', text: 'Im Krankenhaus darf man nicht rauchen.' },
            { id: 'l3', text: 'Du brauchst kein Geschenk mitzubringen.' },
          ],
          right: [
            { id: 'r1', text: 'Ich habe frei.' },
            { id: 'r2', text: 'Es ist verboten.' },
            { id: 'r3', text: 'Ein Geschenk ist nicht nötig.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – Modalverben im Präteritum.
  {
    order: 3,
    title: 'Modalverben in der Vergangenheit',
    subtitle: 'konnte, musste, durfte …',
    estimatedMinutes: 20,
    content: {
      version: v,
      blocks: [
        { id: 'g5-3-h1', type: 'HEADING', level: 1, text: 'Modalverben in der Vergangenheit' },
        {
          id: 'g5-3-intro',
          type: 'TEXT',
          text: 'Wie „sein“ und „haben“ setzt man Modalverben auch im Gespräch meistens ins Präteritum: „Ich konnte nicht kommen“ statt „Ich habe nicht kommen können“. Die Perfektform ist richtig, aber lang und umständlich.',
          translations: {
            en: 'Like „sein“ and „haben“, modal verbs are usually put in the simple past, even in conversation: „Ich konnte nicht kommen“ (I couldn’t come) rather than „Ich habe nicht kommen können“. The perfect form is correct but long and clumsy.',
            es: 'Como „sein“ y „haben“, los verbos modales se ponen casi siempre en Präteritum, también al hablar: „Ich konnte nicht kommen“ (no pude venir) en lugar de „Ich habe nicht kommen können“. La forma en Perfekt es correcta, pero larga y pesada.',
            fr: 'Comme « sein » et « haben », les verbes de modalité se mettent le plus souvent au prétérit, même à l’oral : « Ich konnte nicht kommen » (je n’ai pas pu venir) plutôt que « Ich habe nicht kommen können ». La forme au Perfekt est correcte, mais longue et lourde.',
            it: 'Come „sein“ e „haben“, anche i verbi modali si mettono di solito al Präteritum, anche parlando: „Ich konnte nicht kommen“ (non sono potuto venire) invece di „Ich habe nicht kommen können“. La forma al Perfekt è corretta, ma lunga e pesante.',
          },
        },
        {
          id: 'g5-3-info-praet',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Präteritum: ohne Umlaut, mit -te',
          text: 'Das Präteritum der Modalverben bildet man mit -te wie bei regelmäßigen Verben. Die Umlaute fallen weg: können → konnte, müssen → musste, dürfen → durfte. „mögen“ wird zu „mochte“. Für „möchten“ benutzt man in der Vergangenheit „wollte“.',
          translations: {
            en: {
              title: 'Simple past: no umlaut, with -te',
              text: 'The simple past of modal verbs is formed with -te, like regular verbs. The umlauts disappear: können → konnte, müssen → musste, dürfen → durfte. „mögen“ becomes „mochte“. For „möchten“ you use „wollte“ in the past.',
            },
            es: {
              title: 'Präteritum: sin diéresis, con -te',
              text: 'El Präteritum de los modales se forma con -te, como el de los verbos regulares. Las diéresis desaparecen: können → konnte, müssen → musste, dürfen → durfte. „mögen“ pasa a „mochte“. Para „möchten“ se usa en pasado „wollte“.',
            },
            fr: {
              title: 'Prétérit : sans Umlaut, avec -te',
              text: 'Le prétérit des verbes de modalité se forme avec -te, comme celui des verbes réguliers. Les Umlaute disparaissent : können → konnte, müssen → musste, dürfen → durfte. « mögen » devient « mochte ». Pour « möchten », on utilise « wollte » au passé.',
            },
            it: {
              title: 'Präteritum: senza Umlaut, con -te',
              text: 'Il Präteritum dei verbi modali si forma con -te, come quello dei verbi regolari. Gli Umlaut scompaiono: können → konnte, müssen → musste, dürfen → durfte. „mögen“ diventa „mochte“. Per „möchten“ al passato si usa „wollte“.',
            },
          },
          table: {
            headers: ['', 'können', 'müssen', 'dürfen', 'sollen', 'wollen'],
            rows: [
              ['ich', 'konnte', 'musste', 'durfte', 'sollte', 'wollte'],
              ['du', 'konntest', 'musstest', 'durftest', 'solltest', 'wolltest'],
              ['er / sie / es', 'konnte', 'musste', 'durfte', 'sollte', 'wollte'],
              ['wir', 'konnten', 'mussten', 'durften', 'sollten', 'wollten'],
              ['ihr', 'konntet', 'musstet', 'durftet', 'solltet', 'wolltet'],
              ['sie / Sie', 'konnten', 'mussten', 'durften', 'sollten', 'wollten'],
            ],
          },
        },
        {
          id: 'g5-3-cloze',
          type: 'CLOZE',
          instruction: 'Setzen Sie das Modalverb ins Präteritum.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Als Kind ' },
            { kind: 'GAP', gapId: 'p1', solution: ['wollte'], hint: 'wollen', width: 8 },
            { kind: 'TEXT', text: ' ich Tierärztin werden. Ich ' },
            { kind: 'GAP', gapId: 'p2', solution: ['durfte'], hint: 'dürfen', width: 8 },
            { kind: 'TEXT', text: ' aber keinen Hund haben, weil unsere Wohnung zu klein war. Jeden Tag ' },
            { kind: 'GAP', gapId: 'p3', solution: ['musste'], hint: 'müssen', width: 8 },
            { kind: 'TEXT', text: ' ich um acht ins Bett gehen. Mit sechs ' },
            { kind: 'GAP', gapId: 'p4', solution: ['konnte'], hint: 'können', width: 8 },
            { kind: 'TEXT', text: ' ich schon lesen.' },
          ],
        },
        {
          id: 'g5-3-choice',
          type: 'CHOICE',
          instruction: 'Welche Formen sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'c1', text: 'ich könnte (Präteritum von können)' },
            { id: 'c2', text: 'wir mussten' },
            { id: 'c3', text: 'du durftest' },
            { id: 'c4', text: 'er mochtet' },
          ],
          solution: ['c2', 'c3'],
          explanation:
            'Im Präteritum fällt der Umlaut weg: ich konnte. „könnte“ mit Umlaut ist der Konjunktiv II (höfliche Bitte). Die er-Form hat keine Endung: er mochte.',
          explanationTranslations: {
            en: 'In the simple past the umlaut disappears: ich konnte. „könnte“ with an umlaut is the Konjunktiv II (polite request). The er-form has no ending: er mochte.',
            es: 'En Präteritum desaparece la diéresis: ich konnte. „könnte“ con diéresis es el Konjunktiv II (petición cortés). La forma de er no lleva terminación: er mochte.',
            fr: 'Au prétérit, l’Umlaut disparaît : ich konnte. « könnte » avec Umlaut est le Konjunktiv II (demande polie). La forme de er n’a pas de terminaison : er mochte.',
            it: 'Al Präteritum l’Umlaut cade: ich konnte. „könnte“ con l’Umlaut è il Konjunktiv II (richiesta cortese). La forma di er non ha desinenza: er mochte.',
          },
        },
        {
          id: 'g5-3-match',
          type: 'MATCHING',
          instruction: 'Präsens und Präteritum: Was gehört zusammen?',
          left: [
            { id: 'l1', text: 'ich kann' },
            { id: 'l2', text: 'du musst' },
            { id: 'l3', text: 'sie will' },
            { id: 'l4', text: 'wir dürfen' },
          ],
          right: [
            { id: 'r1', text: 'ich konnte' },
            { id: 'r2', text: 'du musstest' },
            { id: 'r3', text: 'sie wollte' },
            { id: 'r4', text: 'wir durften' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'g5-3-writing',
          type: 'WRITING',
          instruction: 'Als ich ein Kind war …',
          prompt:
            'Was durften Sie als Kind, was nicht? Was mussten Sie machen? Was wollten Sie werden? Und was können Sie heute, was Sie damals nicht konnten? Schreiben Sie fünf bis sieben Sätze mit Modalverben im Präteritum und im Präsens.',
          minWords: 40,
          maxWords: 150,
          aiFeedback: true,
          sampleAnswer:
            'Als Kind durfte ich nicht allein in die Stadt fahren. Ich musste jeden Tag meinem Vater im Laden helfen. Ich wollte immer Fußballspieler werden, aber ich konnte nicht besonders gut spielen. Süßigkeiten durfte ich nur am Sonntag essen. Heute kann ich Auto fahren und darf so viel Schokolade essen, wie ich will. Fußball spiele ich aber immer noch schlecht.',
        },
      ],
    },
  },
];
