import type { UnitSeed } from './chapter-beginner-1';

/**
 * Grammatik, Kapitel 4: „Über Vergangenes sprechen“
 *
 * Drei Seiten, gebaut wie die Kapitel davor: Regel, Tabelle, Aufgabe.
 *
 * Seite 1 ordnet die Partizipien nach ihren fünf Bauarten – regelmäßig,
 * unregelmäßig, trennbar, untrennbar, auf -ieren –, weil die Frage „ge- oder
 * nicht, -t oder -en?“ die eigentliche Schwierigkeit des Perfekts ist. Seite 2
 * klärt das Hilfsverb und zeigt, wo das Präteritum auch im Gespräch das
 * Perfekt verdrängt. Seite 3 bringt das Plusquamperfekt, das nur mit einer
 * zweiten Vergangenheit davor einen Sinn hat, und darum mit „nachdem“.
 *
 * Erklärungen übersetzt, Tabellen unübersetzt – wie in Kapitel 1.
 */
const v = 1;

export const GRAMMAR_4_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – das Perfekt und die fünf Bauarten des Partizips.
  {
    order: 1,
    title: 'Das Perfekt',
    subtitle: 'Fünf Arten, ein Partizip zu bilden',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'g4-1-h1', type: 'HEADING', level: 1, text: 'Das Perfekt' },
        {
          id: 'g4-1-intro',
          type: 'TEXT',
          text: 'Das Perfekt ist die Zeitform, in der man im Gespräch über Vergangenes spricht. Es hat zwei Teile: ein Hilfsverb (haben oder sein) auf Position 2 und das Partizip II am Satzende. Das Hilfsverb ist leicht – schwierig ist das Partizip.',
          translations: {
            en: 'The perfect is the tense used to talk about the past in conversation. It has two parts: an auxiliary (haben or sein) in position 2 and the past participle at the end of the sentence. The auxiliary is easy – the participle is the hard part.',
            es: 'El Perfekt es el tiempo con el que se habla del pasado en la conversación. Tiene dos partes: un auxiliar (haben o sein) en la posición 2 y el participio al final de la frase. El auxiliar es fácil; lo difícil es el participio.',
            fr: 'Le Perfekt est le temps qu’on utilise à l’oral pour parler du passé. Il a deux parties : un auxiliaire (haben ou sein) en position 2 et le participe passé en fin de phrase. L’auxiliaire est facile – c’est le participe qui est difficile.',
            it: 'Il Perfekt è il tempo con cui si parla del passato nella conversazione. Ha due parti: un ausiliare (haben o sein) in posizione 2 e il participio passato alla fine della frase. L’ausiliare è facile – il difficile è il participio.',
          },
        },
        {
          id: 'g4-1-info-arten',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Das Partizip II',
          text: 'Regelmäßige Verben: ge- + Stamm + -t. Unregelmäßige Verben: ge- + (oft veränderter) Stamm + -en. Trennbare Verben: das ge- steht zwischen Vorsilbe und Stamm. Untrennbare Verben und Verben auf -ieren: kein ge-.',
          translations: {
            en: {
              title: 'The past participle',
              text: 'Regular verbs: ge- + stem + -t. Irregular verbs: ge- + (often changed) stem + -en. Separable verbs: ge- goes between the prefix and the stem. Inseparable verbs and verbs ending in -ieren: no ge-.',
            },
            es: {
              title: 'El participio',
              text: 'Verbos regulares: ge- + raíz + -t. Verbos irregulares: ge- + raíz (a menudo cambiada) + -en. Verbos separables: el ge- va entre el prefijo y la raíz. Verbos inseparables y verbos en -ieren: sin ge-.',
            },
            fr: {
              title: 'Le participe passé',
              text: 'Verbes réguliers : ge- + radical + -t. Verbes irréguliers : ge- + radical (souvent modifié) + -en. Verbes séparables : ge- se place entre le préfixe et le radical. Verbes inséparables et verbes en -ieren : pas de ge-.',
            },
            it: {
              title: 'Il participio passato',
              text: 'Verbi regolari: ge- + radice + -t. Verbi irregolari: ge- + radice (spesso cambiata) + -en. Verbi separabili: il ge- va tra il prefisso e la radice. Verbi inseparabili e verbi in -ieren: senza ge-.',
            },
          },
          table: {
            headers: ['Art', 'Infinitiv', 'Partizip II'],
            rows: [
              ['regelmäßig', 'kaufen / arbeiten', 'gekauft / gearbeitet'],
              ['unregelmäßig', 'schreiben / trinken', 'geschrieben / getrunken'],
              ['trennbar', 'einkaufen / anrufen', 'eingekauft / angerufen'],
              ['untrennbar', 'besuchen / vergessen', 'besucht / vergessen'],
              ['auf -ieren', 'telefonieren / studieren', 'telefoniert / studiert'],
            ],
          },
        },
        {
          id: 'g4-1-cloze',
          type: 'CLOZE',
          instruction: 'Bilden Sie das Partizip II.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Wir haben den ganzen Abend ' },
            { kind: 'GAP', gapId: 'p1', solution: ['diskutiert'], hint: 'diskutieren', width: 11 },
            { kind: 'TEXT', text: '.\n2. Hast du die Tür ' },
            { kind: 'GAP', gapId: 'p2', solution: ['zugemacht'], hint: 'zumachen', width: 10 },
            { kind: 'TEXT', text: '?\n3. Ich habe meinen Schlüssel ' },
            { kind: 'GAP', gapId: 'p3', solution: ['vergessen'], hint: 'vergessen', width: 10 },
            { kind: 'TEXT', text: '.\n4. Sie hat mir einen Brief ' },
            { kind: 'GAP', gapId: 'p4', solution: ['geschrieben'], hint: 'schreiben', width: 12 },
            { kind: 'TEXT', text: '.\n5. Er hat das Problem ' },
            { kind: 'GAP', gapId: 'p5', solution: ['erklärt', 'erklaert'], hint: 'erklären', width: 8 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'g4-1-match',
          type: 'MATCHING',
          instruction: 'Welche Bauart hat das Partizip?',
          left: [
            { id: 'l1', text: 'aufgeräumt' },
            { id: 'l2', text: 'repariert' },
            { id: 'l3', text: 'verstanden' },
            { id: 'l4', text: 'gewohnt' },
          ],
          right: [
            { id: 'r1', text: 'trennbar' },
            { id: 'r2', text: 'auf -ieren' },
            { id: 'r3', text: 'untrennbar' },
            { id: 'r4', text: 'regelmäßig' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'g4-1-info-unreg',
          type: 'INFO',
          variant: 'TIP',
          title: 'Unregelmäßige Partizipien in Gruppen lernen',
          text: 'Die unregelmäßigen Partizipien muss man lernen – aber viele folgen gemeinsamen Vokalmustern. Wer in Gruppen lernt, merkt sich mehr.',
          translations: {
            en: {
              title: 'Learning irregular participles in groups',
              text: 'Irregular participles have to be learned – but many follow shared vowel patterns. Learning them in groups helps you remember more.',
            },
            es: {
              title: 'Aprender los participios irregulares por grupos',
              text: 'Los participios irregulares hay que aprenderlos, pero muchos siguen patrones vocálicos comunes. Aprendiéndolos por grupos se retienen mejor.',
            },
            fr: {
              title: 'Apprendre les participes irréguliers par groupes',
              text: 'Les participes irréguliers doivent être appris – mais beaucoup suivent des modèles de voyelles communs. En les apprenant par groupes, on en retient davantage.',
            },
            it: {
              title: 'Imparare i participi irregolari a gruppi',
              text: 'I participi irregolari vanno imparati – ma molti seguono schemi vocalici comuni. Imparandoli a gruppi se ne ricordano di più.',
            },
          },
          table: {
            headers: ['Muster', 'Beispiele'],
            rows: [
              ['i → u', 'trinken – getrunken, finden – gefunden, singen – gesungen'],
              ['ei → ie', 'schreiben – geschrieben, bleiben – geblieben'],
              ['e → o', 'sprechen – gesprochen, helfen – geholfen, nehmen – genommen'],
              ['gleicher Vokal', 'fahren – gefahren, lesen – gelesen, schlafen – geschlafen'],
              ['Mischform (-t)', 'bringen – gebracht, denken – gedacht, wissen – gewusst'],
            ],
          },
        },
        {
          id: 'g4-1-choice',
          type: 'CHOICE',
          instruction: 'Welche Partizipien sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'c1', text: 'gedenkt' },
            { id: 'c2', text: 'gebracht' },
            { id: 'c3', text: 'gefindet' },
            { id: 'c4', text: 'geholfen' },
          ],
          solution: ['c2', 'c4'],
          explanation:
            '„denken“ und „bringen“ sind Mischformen: gedacht, gebracht. „finden“ ist unregelmäßig: gefunden.',
          explanationTranslations: {
            en: '„denken“ and „bringen“ are mixed forms: gedacht, gebracht. „finden“ is irregular: gefunden.',
            es: '„denken“ y „bringen“ son formas mixtas: gedacht, gebracht. „finden“ es irregular: gefunden.',
            fr: '« denken » et « bringen » sont des formes mixtes : gedacht, gebracht. « finden » est irrégulier : gefunden.',
            it: '„denken“ e „bringen“ sono forme miste: gedacht, gebracht. „finden“ è irregolare: gefunden.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – haben oder sein, und das Präteritum.
  {
    order: 2,
    title: 'haben oder sein? Und das Präteritum',
    subtitle: 'Das Hilfsverb und die zweite Vergangenheit',
    estimatedMinutes: 27,
    content: {
      version: v,
      blocks: [
        { id: 'g4-2-h1', type: 'HEADING', level: 1, text: 'haben oder sein?' },
        {
          id: 'g4-2-info-sein',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Wann steht sein?',
          text: 'Mit „sein“ bilden das Perfekt: Verben der Bewegung von A nach B (gehen, fahren, fliegen, kommen, laufen), Verben der Zustandsveränderung (aufstehen, einschlafen, aufwachen, sterben, werden) sowie sein, bleiben und passieren. Alle anderen – auch die meisten Verben mit Akkusativobjekt – nehmen „haben“.',
          translations: {
            en: {
              title: 'When is sein used?',
              text: 'These form the perfect with „sein“: verbs of movement from A to B (gehen, fahren, fliegen, kommen, laufen), verbs of change of state (aufstehen, einschlafen, aufwachen, sterben, werden), plus sein, bleiben and passieren. All others – including most verbs with an accusative object – take „haben“.',
            },
            es: {
              title: '¿Cuándo va sein?',
              text: 'Forman el Perfekt con „sein“: los verbos de movimiento de A a B (gehen, fahren, fliegen, kommen, laufen), los de cambio de estado (aufstehen, einschlafen, aufwachen, sterben, werden), además de sein, bleiben y passieren. Todos los demás – también la mayoría de los verbos con complemento en acusativo – llevan „haben“.',
            },
            fr: {
              title: 'Quand emploie-t-on sein ?',
              text: 'Forment le Perfekt avec « sein » : les verbes de déplacement de A à B (gehen, fahren, fliegen, kommen, laufen), les verbes de changement d’état (aufstehen, einschlafen, aufwachen, sterben, werden), ainsi que sein, bleiben et passieren. Tous les autres – y compris la plupart des verbes avec complément à l’accusatif – prennent « haben ».',
            },
            it: {
              title: 'Quando si usa sein?',
              text: 'Formano il Perfekt con „sein“: i verbi di movimento da A a B (gehen, fahren, fliegen, kommen, laufen), i verbi di cambiamento di stato (aufstehen, einschlafen, aufwachen, sterben, werden), oltre a sein, bleiben e passieren. Tutti gli altri – anche la maggior parte dei verbi con complemento oggetto – vogliono „haben“.',
            },
          },
          table: {
            headers: ['sein', 'haben'],
            rows: [
              ['Ich bin nach Rom geflogen.', 'Ich habe ein Ticket gebucht.'],
              ['Er ist um sieben aufgewacht.', 'Er hat lange geschlafen.'],
              ['Wir sind zu Hause geblieben.', 'Wir haben gekocht.'],
              ['Was ist passiert?', 'Was hast du gemacht?'],
            ],
          },
        },
        {
          id: 'g4-2-cloze-hilfsverb',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie haben oder sein in der richtigen Form.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Gestern ' },
            { kind: 'GAP', gapId: 'h1', solution: ['bin'], width: 5 },
            { kind: 'TEXT', text: ' ich spät aufgestanden. Ich ' },
            { kind: 'GAP', gapId: 'h2', solution: ['habe'], width: 5 },
            { kind: 'TEXT', text: ' schnell gefrühstückt und ' },
            { kind: 'GAP', gapId: 'h3', solution: ['bin'], width: 5 },
            { kind: 'TEXT', text: ' zum Bus gelaufen. Aber der Bus ' },
            { kind: 'GAP', gapId: 'h4', solution: ['ist'], width: 5 },
            { kind: 'TEXT', text: ' nicht gekommen. Ich ' },
            { kind: 'GAP', gapId: 'h5', solution: ['habe'], width: 5 },
            { kind: 'TEXT', text: ' meinen Chef angerufen.' },
          ],
        },
        { id: 'g4-2-h2', type: 'HEADING', level: 2, text: 'Das Präteritum' },
        {
          id: 'g4-2-info-praet',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Präteritum: geschrieben und bei wenigen Verben auch gesprochen',
          text: 'Das Präteritum steht vor allem in geschriebenen Texten: Romane, Märchen, Zeitungsberichte. Im Gespräch benutzt man es nur bei sein, haben und den Modalverben – dort klingt es natürlicher als das Perfekt. Regelmäßige Verben bekommen -te, unregelmäßige einen neuen Stamm. Bei ich und er/sie/es gibt es keine eigene Endung.',
          translations: {
            en: {
              title: 'Simple past: written, and spoken for a few verbs',
              text: 'The simple past is used mainly in written texts: novels, fairy tales, news reports. In conversation it is only used for sein, haben and the modal verbs – there it sounds more natural than the perfect. Regular verbs add -te, irregular ones get a new stem. ich and er/sie/es have no ending of their own.',
            },
            es: {
              title: 'Präteritum: escrito y, en pocos verbos, también hablado',
              text: 'El Präteritum aparece sobre todo en textos escritos: novelas, cuentos, noticias. En la conversación solo se usa con sein, haben y los verbos modales, donde suena más natural que el Perfekt. Los verbos regulares añaden -te; los irregulares tienen una raíz nueva. ich y er/sie/es no llevan terminación propia.',
            },
            fr: {
              title: 'Le prétérit : à l’écrit, et à l’oral pour quelques verbes',
              text: 'Le prétérit s’emploie surtout dans les textes écrits : romans, contes, articles de presse. À l’oral, on ne l’utilise que pour sein, haben et les verbes de modalité – il y sonne plus naturel que le Perfekt. Les verbes réguliers prennent -te, les irréguliers un nouveau radical. ich et er/sie/es n’ont pas de terminaison propre.',
            },
            it: {
              title: 'Il Präteritum: scritto e, per pochi verbi, anche parlato',
              text: 'Il Präteritum si usa soprattutto nei testi scritti: romanzi, fiabe, articoli di giornale. Nella conversazione si usa solo con sein, haben e i verbi modali – lì suona più naturale del Perfekt. I verbi regolari prendono -te, quelli irregolari una nuova radice. ich ed er/sie/es non hanno una desinenza propria.',
            },
          },
          table: {
            headers: ['Person', 'machen', 'kommen', 'sein', 'haben'],
            rows: [
              ['ich', 'machte', 'kam', 'war', 'hatte'],
              ['du', 'machtest', 'kamst', 'warst', 'hattest'],
              ['er / sie / es', 'machte', 'kam', 'war', 'hatte'],
              ['wir', 'machten', 'kamen', 'waren', 'hatten'],
              ['ihr', 'machtet', 'kamt', 'wart', 'hattet'],
              ['sie / Sie', 'machten', 'kamen', 'waren', 'hatten'],
            ],
          },
        },
        {
          id: 'g4-2-match-praet',
          type: 'MATCHING',
          instruction: 'Welche Präteritumform gehört zu welchem Verb?',
          left: [
            { id: 'l1', text: 'gehen' },
            { id: 'l2', text: 'geben' },
            { id: 'l3', text: 'sehen' },
            { id: 'l4', text: 'finden' },
          ],
          right: [
            { id: 'r1', text: 'ging' },
            { id: 'r2', text: 'gab' },
            { id: 'r3', text: 'sah' },
            { id: 'r4', text: 'fand' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'g4-2-choice',
          type: 'CHOICE',
          instruction: 'Sie erzählen einer Freundin von gestern. Was klingt am natürlichsten?',
          multiple: false,
          options: [
            { id: 'c1', text: 'Ich ging ins Kino und sah einen Film.' },
            { id: 'c2', text: 'Ich bin ins Kino gegangen und habe einen Film gesehen.' },
            { id: 'c3', text: 'Ich bin ins Kino gegangen und sah einen Film.' },
          ],
          solution: ['c2'],
          explanation:
            'Im Gespräch erzählt man im Perfekt. Das Präteritum von „gehen“ und „sehen“ klingt mündlich wie aus einem Buch.',
          explanationTranslations: {
            en: 'In conversation you tell things in the perfect. The simple past of „gehen“ and „sehen“ sounds bookish when spoken.',
            es: 'En la conversación se narra en Perfekt. El Präteritum de „gehen“ y „sehen“, hablado, suena a libro.',
            fr: 'À l’oral, on raconte au Perfekt. Le prétérit de « gehen » et « sehen » sonne livresque à l’oral.',
            it: 'Nella conversazione si racconta al Perfekt. Il Präteritum di „gehen“ e „sehen“, a voce, suona libresco.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – das Plusquamperfekt und „nachdem“.
  {
    order: 3,
    title: 'Das Plusquamperfekt',
    subtitle: 'Die Vergangenheit vor der Vergangenheit',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'g4-3-h1', type: 'HEADING', level: 1, text: 'Das Plusquamperfekt' },
        {
          id: 'g4-3-intro',
          type: 'TEXT',
          text: '„Als ich am Bahnhof ankam, war der Zug schon abgefahren.“ Zwei Ereignisse in der Vergangenheit – und eines lag noch weiter zurück. Für dieses frühere Ereignis benutzt man das Plusquamperfekt.',
          translations: {
            en: '„Als ich am Bahnhof ankam, war der Zug schon abgefahren.“ (When I got to the station, the train had already left.) Two events in the past – and one lies even further back. For this earlier event you use the past perfect.',
            es: '„Als ich am Bahnhof ankam, war der Zug schon abgefahren.“ (Cuando llegué a la estación, el tren ya había salido.) Dos hechos en el pasado, y uno es todavía anterior. Para ese hecho anterior se usa el pluscuamperfecto.',
            fr: '« Als ich am Bahnhof ankam, war der Zug schon abgefahren. » (Quand je suis arrivé à la gare, le train était déjà parti.) Deux événements dans le passé – et l’un est encore plus ancien. Pour cet événement antérieur, on utilise le plus-que-parfait.',
            it: '„Als ich am Bahnhof ankam, war der Zug schon abgefahren.“ (Quando sono arrivato in stazione, il treno era già partito.) Due eventi nel passato – e uno è ancora precedente. Per questo evento anteriore si usa il trapassato prossimo.',
          },
        },
        {
          id: 'g4-3-info-plusq',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Bildung: hatte / war + Partizip II',
          text: 'Das Plusquamperfekt baut man wie das Perfekt – nur steht das Hilfsverb im Präteritum: hatte statt habe, war statt bin. Welches Hilfsverb, entscheidet dieselbe Regel wie beim Perfekt.',
          translations: {
            en: {
              title: 'Form: hatte / war + past participle',
              text: 'The past perfect is built like the perfect – only the auxiliary is in the simple past: hatte instead of habe, war instead of bin. The same rule as for the perfect decides which auxiliary.',
            },
            es: {
              title: 'Formación: hatte / war + participio',
              text: 'El pluscuamperfecto se forma como el Perfekt, pero con el auxiliar en Präteritum: hatte en lugar de habe, war en lugar de bin. Qué auxiliar se usa lo decide la misma regla que en el Perfekt.',
            },
            fr: {
              title: 'Formation : hatte / war + participe passé',
              text: 'Le plus-que-parfait se forme comme le Perfekt – seul l’auxiliaire est au prétérit : hatte au lieu de habe, war au lieu de bin. Le choix de l’auxiliaire suit la même règle qu’au Perfekt.',
            },
            it: {
              title: 'Formazione: hatte / war + participio passato',
              text: 'Il trapassato si forma come il Perfekt – solo l’ausiliare è al Präteritum: hatte invece di habe, war invece di bin. Quale ausiliare usare lo decide la stessa regola del Perfekt.',
            },
          },
          table: {
            headers: ['Perfekt', 'Plusquamperfekt'],
            rows: [
              ['Ich habe gegessen.', 'Ich hatte gegessen.'],
              ['Du hast angerufen.', 'Du hattest angerufen.'],
              ['Sie ist abgefahren.', 'Sie war abgefahren.'],
              ['Wir sind gelaufen.', 'Wir waren gelaufen.'],
            ],
          },
        },
        {
          id: 'g4-3-info-nachdem',
          type: 'INFO',
          variant: 'TIP',
          title: 'nachdem',
          text: 'Nach „nachdem“ steht fast immer das Plusquamperfekt, im Hauptsatz das Präteritum oder Perfekt: Nachdem wir gegessen hatten, gingen wir spazieren. Der nachdem-Satz ist ein Nebensatz – das Verb steht am Ende.',
          translations: {
            en: {
              title: 'nachdem',
              text: 'After „nachdem“ (after) you almost always use the past perfect, and the simple past or perfect in the main clause: Nachdem wir gegessen hatten, gingen wir spazieren. The nachdem-clause is a subordinate clause – the verb goes at the end.',
            },
            es: {
              title: 'nachdem',
              text: 'Después de „nachdem“ (después de que) va casi siempre el pluscuamperfecto; en la principal, el Präteritum o el Perfekt: Nachdem wir gegessen hatten, gingen wir spazieren. La oración con nachdem es subordinada: el verbo va al final.',
            },
            fr: {
              title: 'nachdem',
              text: 'Après « nachdem » (après que), on emploie presque toujours le plus-que-parfait, et dans la principale le prétérit ou le Perfekt : Nachdem wir gegessen hatten, gingen wir spazieren. La proposition en nachdem est une subordonnée – le verbe est à la fin.',
            },
            it: {
              title: 'nachdem',
              text: 'Dopo „nachdem“ (dopo che) si usa quasi sempre il trapassato, nella principale il Präteritum o il Perfekt: Nachdem wir gegessen hatten, gingen wir spazieren. La frase con nachdem è una subordinata – il verbo va alla fine.',
            },
          },
        },
        {
          id: 'g4-3-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie hatte oder war in der richtigen Form.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Nachdem sie das Buch gelesen ' },
            { kind: 'GAP', gapId: 'q1', solution: ['hatte'], width: 7 },
            { kind: 'TEXT', text: ', sah sie den Film.\n2. Als wir ankamen, ' },
            { kind: 'GAP', gapId: 'q2', solution: ['waren'], width: 7 },
            { kind: 'TEXT', text: ' die Gäste schon gegangen.\n3. Er war müde, weil er schlecht geschlafen ' },
            { kind: 'GAP', gapId: 'q3', solution: ['hatte'], width: 7 },
            { kind: 'TEXT', text: '.\n4. Nachdem ihr aufgestanden ' },
            { kind: 'GAP', gapId: 'q4', solution: ['wart'], width: 7 },
            { kind: 'TEXT', text: ', habt ihr gefrühstückt.' },
          ],
        },
        {
          id: 'g4-3-order',
          type: 'ORDERING',
          instruction: 'Was passierte zuerst? Bringen Sie die Ereignisse in die richtige Reihenfolge.',
          items: [
            { id: 'e1', text: 'Lena hatte ihren Schlüssel im Büro vergessen.' },
            { id: 'e2', text: 'Sie kam abends nach Hause.' },
            { id: 'e3', text: 'Sie rief ihren Nachbarn an.' },
          ],
          solution: ['e1', 'e2', 'e3'],
        },
        {
          id: 'g4-3-choice',
          type: 'CHOICE',
          instruction: '„Als der Arzt kam, ___ der Patient schon ___.“',
          multiple: false,
          options: [
            { id: 'c1', text: 'ist … eingeschlafen' },
            { id: 'c2', text: 'war … eingeschlafen' },
            { id: 'c3', text: 'hatte … eingeschlafen' },
          ],
          solution: ['c2'],
          explanation:
            'Das Einschlafen lag vor dem Kommen des Arztes – also Plusquamperfekt. „einschlafen“ ist eine Zustandsveränderung und nimmt „sein“: war eingeschlafen.',
          explanationTranslations: {
            en: 'Falling asleep happened before the doctor arrived – so past perfect. „einschlafen“ is a change of state and takes „sein“: war eingeschlafen.',
            es: 'Dormirse ocurrió antes de que llegara el médico, así que pluscuamperfecto. „einschlafen“ es un cambio de estado y lleva „sein“: war eingeschlafen.',
            fr: 'L’endormissement a eu lieu avant l’arrivée du médecin – donc plus-que-parfait. « einschlafen » est un changement d’état et prend « sein » : war eingeschlafen.',
            it: 'L’addormentarsi è avvenuto prima dell’arrivo del medico – quindi trapassato. „einschlafen“ è un cambiamento di stato e vuole „sein“: war eingeschlafen.',
          },
        },
        {
          id: 'g4-3-writing',
          type: 'WRITING',
          instruction: 'Ein schlechter Tag',
          prompt:
            'Erzählen Sie von einem Tag, an dem alles schiefging – echt oder erfunden. Schreiben Sie fünf bis sieben Sätze im Perfekt und benutzen Sie mindestens einmal das Plusquamperfekt (z. B. mit „nachdem“ oder „weil … hatte“).',
          minWords: 40,
          maxWords: 150,
          aiFeedback: true,
          sampleAnswer:
            'Letzten Montag hatte ich wirklich Pech. Ich bin zu spät aufgewacht, weil ich den Wecker nicht gestellt hatte. Dann habe ich den Bus verpasst. Als ich im Büro ankam, hatte die Besprechung schon angefangen. Nachdem ich mich entschuldigt hatte, war mein Chef zum Glück nicht mehr böse. Am Abend bin ich früh ins Bett gegangen.',
        },
      ],
    },
  },
];
