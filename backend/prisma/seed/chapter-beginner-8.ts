import type { UnitSeed } from './chapter-beginner-1';

/**
 * Beginner, Kapitel 8: „Arbeit und Beruf“ (A2, Kapitel 2)
 *
 * Fünf Seiten, Aufbau wie in den Kapiteln davor.
 *
 * Hier beginnt die Vergangenheit, und zwar mit dem Perfekt – der Zeitform,
 * in der man im Gespräch über Vergangenes spricht. Das Präteritum kommt nur
 * bei „war“ und „hatte“ vor, weil es die im Alltag tatsächlich ersetzt; das
 * volle System steht im Grammatikbuch, Kapitel 4.
 *
 * Seite 2 bringt „haben“, Seite 3 „sein“ und die Partizipien ohne ge-. Die
 * Trennung ist bewusst: Wer beides gleichzeitig lernt, entscheidet beim
 * Hilfsverb nach Gefühl. Der Werdegang auf Seite 3 ist der Anlass, bei dem
 * man beides braucht – „ich habe studiert“, „ich bin nach Deutschland
 * gekommen“.
 *
 * Der weil-Satz auf Seite 4 ist der erste Nebensatz des Buchs. Er schiebt das
 * Verb ans Ende; dieselbe Regel gilt später für dass (Kapitel 11).
 *
 * Einsprachig deutsch, Erklärungen mit Übersetzung wie im ganzen
 * Beginner-Band.
 */
const v = 1;

export const BEGINNER_8_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Arbeitsplatz und Tätigkeiten.
  {
    order: 1,
    title: 'Mein Arbeitsplatz',
    subtitle: 'Über die Arbeit sprechen',
    estimatedMinutes: 20,
    content: {
      version: v,
      blocks: [
        { id: 'b8-1-h1', type: 'HEADING', level: 1, text: 'Mein Arbeitsplatz' },
        {
          id: 'b8-1-image',
          type: 'IMAGE',
          url: 'illustration:portraits',
          alt: 'Mehrere Porträts nebeneinander, jede Person in typischer Arbeitskleidung.',
          caption: 'Wer arbeitet wo?',
        },
        {
          id: 'b8-1-text',
          type: 'TEXT',
          text: 'Drei Menschen erzählen. Katja: „Ich bin Krankenpflegerin und arbeite im Schichtdienst. Manchmal habe ich Nachtdienst.“ Ömer: „Ich bin Elektriker bei einer kleinen Firma. Ich repariere Leitungen und arbeite meistens draußen auf Baustellen.“ Julia: „Ich bin Bürokauffrau. Ich schreibe Rechnungen, beantworte E-Mails und telefoniere mit Kunden. Zweimal pro Woche arbeite ich im Homeoffice.“',
          translations: {
            en: 'Three people talk about their work. Katja: “I’m a nurse and work shifts. Sometimes I work nights.” Ömer: “I’m an electrician at a small company. I repair wiring and mostly work outdoors on building sites.” Julia: “I’m an office administrator. I write invoices, answer emails and talk to customers on the phone. Twice a week I work from home.”',
            es: 'Tres personas cuentan. Katja: «Soy enfermera y trabajo por turnos. A veces tengo turno de noche». Ömer: «Soy electricista en una empresa pequeña. Reparo instalaciones y trabajo casi siempre fuera, en obras». Julia: «Soy administrativa. Hago facturas, contesto correos y hablo por teléfono con clientes. Dos veces por semana trabajo desde casa».',
            fr: 'Trois personnes racontent. Katja : « Je suis infirmière et je travaille en équipes. Parfois, je suis de nuit. » Ömer : « Je suis électricien dans une petite entreprise. Je répare des installations et je travaille surtout dehors, sur des chantiers. » Julia : « Je suis employée de bureau. J’établis des factures, je réponds aux e-mails et je téléphone aux clients. Deux fois par semaine, je travaille en télétravail. »',
            it: 'Tre persone raccontano. Katja: «Sono infermiera e lavoro a turni. A volte faccio il turno di notte». Ömer: «Sono elettricista in una piccola ditta. Riparo impianti e lavoro quasi sempre fuori, nei cantieri». Julia: «Sono impiegata amministrativa. Scrivo fatture, rispondo alle e-mail e parlo al telefono con i clienti. Due volte a settimana lavoro da casa».',
          },
        },
        {
          id: 'b8-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: Arbeit',
          items: [
            { term: 'Firma', article: 'die', plural: 'die Firmen', translations: { en: 'company' } },
            { term: 'Kollege / Kollegin', translations: { en: 'colleague' } },
            { term: 'Chef / Chefin', translations: { en: 'boss' } },
            { term: 'Kunde / Kundin', translations: { en: 'customer' } },
            { term: 'Schicht', article: 'die', plural: 'die Schichten', translations: { en: 'shift' } },
            { term: 'Vollzeit / Teilzeit', translations: { en: 'full-time / part-time' } },
            { term: 'Homeoffice', article: 'das', translations: { en: 'working from home' } },
            { term: 'verdienen', translations: { en: 'to earn' } },
            { term: 'Gehalt', article: 'das', plural: 'die Gehälter', translations: { en: 'salary' } },
            { term: 'Urlaub', article: 'der', translations: { en: 'holiday / leave' } },
            { term: 'Ausbildung', article: 'die', translations: { en: 'vocational training' } },
          ],
        },
        {
          id: 'b8-1-match',
          type: 'MATCHING',
          instruction: 'Wer sagt das?',
          left: [
            { id: 'l1', text: 'Ich arbeite oft nachts im Krankenhaus.' },
            { id: 'l2', text: 'Ich arbeite oft draußen.' },
            { id: 'l3', text: 'Ich arbeite manchmal zu Hause.' },
          ],
          right: [
            { id: 'r1', text: 'Katja' },
            { id: 'r2', text: 'Ömer' },
            { id: 'r3', text: 'Julia' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
          ],
        },
        {
          id: 'b8-1-info-als',
          type: 'INFO',
          variant: 'TIP',
          title: 'arbeiten als, arbeiten bei',
          text: 'Den Beruf nennt man mit „als“, den Arbeitgeber mit „bei“ (+ Dativ): Ich arbeite als Elektriker bei einer kleinen Firma. Den Ort nennt man mit „in“: Ich arbeite in einem Krankenhaus.',
          translations: {
            en: {
              title: 'arbeiten als, arbeiten bei',
              text: 'The job is given with „als“ (as), the employer with „bei“ (at, + dative): Ich arbeite als Elektriker bei einer kleinen Firma. The place is given with „in“: Ich arbeite in einem Krankenhaus.',
            },
            es: {
              title: 'arbeiten als, arbeiten bei',
              text: 'La profesión se indica con „als“ (como), la empresa con „bei“ (en, + dativo): Ich arbeite als Elektriker bei einer kleinen Firma. El lugar se indica con „in“: Ich arbeite in einem Krankenhaus.',
            },
            fr: {
              title: 'arbeiten als, arbeiten bei',
              text: 'On indique le métier avec « als » (comme), l’employeur avec « bei » (chez, + datif) : Ich arbeite als Elektriker bei einer kleinen Firma. Le lieu s’indique avec « in » : Ich arbeite in einem Krankenhaus.',
            },
            it: {
              title: 'arbeiten als, arbeiten bei',
              text: 'La professione si indica con „als“ (come), il datore di lavoro con „bei“ (presso, + dativo): Ich arbeite als Elektriker bei einer kleinen Firma. Il luogo si indica con „in“: Ich arbeite in einem Krankenhaus.',
            },
          },
        },
        {
          id: 'b8-1-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie als, bei oder in.',
          wordBank: ['als', 'bei', 'in'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Mein Bruder arbeitet ' },
            { kind: 'GAP', gapId: 'p1', solution: ['als'], width: 4 },
            { kind: 'TEXT', text: ' Koch ' },
            { kind: 'GAP', gapId: 'p2', solution: ['in'], width: 4 },
            { kind: 'TEXT', text: ' einem Hotel. Meine Schwester ist Ingenieurin ' },
            { kind: 'GAP', gapId: 'p3', solution: ['bei'], width: 4 },
            { kind: 'TEXT', text: ' Siemens.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – das Perfekt mit haben.
  {
    order: 2,
    title: 'Was hast du gestern gemacht?',
    subtitle: 'Das Perfekt mit haben',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'b8-2-h1', type: 'HEADING', level: 1, text: 'Was hast du gestern gemacht?' },
        {
          id: 'b8-2-dlg',
          type: 'DIALOGUE',
          title: 'Montagmorgen im Büro',
          lines: [
            { speaker: 'Julia', text: 'Guten Morgen, Tim! Wie war dein Wochenende?' },
            { speaker: 'Tim', text: 'Ruhig. Ich habe lange geschlafen und viel gelesen. Und du?' },
            { speaker: 'Julia', text: 'Ich habe am Samstag gearbeitet – wir hatten so viele Bestellungen.' },
            { speaker: 'Tim', text: 'Oh nein! Und am Sonntag?' },
            { speaker: 'Julia', text: 'Da habe ich meine Eltern besucht. Wir haben zusammen gekocht und Karten gespielt.' },
          ],
        },
        {
          id: 'b8-2-info-perfekt',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Das Perfekt: haben + Partizip II',
          text: 'Im Gespräch erzählt man Vergangenes im Perfekt. Es besteht aus zwei Teilen: „haben“ auf Position 2 und dem Partizip II am Ende – wieder eine Satzklammer. Regelmäßige Verben bilden das Partizip mit ge- … -t, unregelmäßige meist mit ge- … -en und oft mit anderem Vokal.',
          translations: {
            en: {
              title: 'The perfect tense: haben + past participle',
              text: 'In conversation, the past is told in the perfect tense. It has two parts: „haben“ in position 2 and the past participle at the end – another sentence bracket. Regular verbs form the participle with ge- … -t, irregular ones mostly with ge- … -en and often a different vowel.',
            },
            es: {
              title: 'El Perfekt: haben + participio',
              text: 'En la conversación, el pasado se cuenta en Perfekt. Tiene dos partes: „haben“ en la posición 2 y el participio al final – otro paréntesis verbal. Los verbos regulares forman el participio con ge- … -t; los irregulares, casi siempre con ge- … -en y a menudo con otra vocal.',
            },
            fr: {
              title: 'Le Perfekt : haben + participe passé',
              text: 'À l’oral, on raconte le passé au Perfekt. Il a deux parties : « haben » en position 2 et le participe passé à la fin – encore une parenthèse verbale. Les verbes réguliers forment le participe avec ge- … -t, les irréguliers le plus souvent avec ge- … -en et souvent une autre voyelle.',
            },
            it: {
              title: 'Il Perfekt: haben + participio passato',
              text: 'Nella conversazione il passato si racconta al Perfekt. Ha due parti: „haben“ in posizione 2 e il participio passato alla fine – un’altra parentesi verbale. I verbi regolari formano il participio con ge- … -t, quelli irregolari per lo più con ge- … -en e spesso con un’altra vocale.',
            },
          },
          table: {
            headers: ['', 'Infinitiv', 'Partizip II', 'Beispiel'],
            rows: [
              ['regelmäßig', 'machen', 'gemacht', 'Ich habe Sport gemacht.'],
              ['regelmäßig', 'arbeiten', 'gearbeitet', 'Sie hat viel gearbeitet.'],
              ['regelmäßig', 'kochen', 'gekocht', 'Wir haben gekocht.'],
              ['unregelmäßig', 'schlafen', 'geschlafen', 'Ich habe lange geschlafen.'],
              ['unregelmäßig', 'lesen', 'gelesen', 'Hast du das Buch gelesen?'],
              ['unregelmäßig', 'trinken', 'getrunken', 'Er hat Tee getrunken.'],
              ['unregelmäßig', 'schreiben', 'geschrieben', 'Sie hat eine E-Mail geschrieben.'],
            ],
          },
        },
        {
          id: 'b8-2-cloze-regel',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie das Partizip II.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Ich habe gestern Pizza ' },
            { kind: 'GAP', gapId: 'p1', solution: ['gekauft'], hint: 'kaufen', width: 9 },
            { kind: 'TEXT', text: '.\n2. Wir haben am Abend Musik ' },
            { kind: 'GAP', gapId: 'p2', solution: ['gehört', 'gehoert'], hint: 'hören', width: 9 },
            { kind: 'TEXT', text: '.\n3. Hast du den Film ' },
            { kind: 'GAP', gapId: 'p3', solution: ['gesehen'], hint: 'sehen', width: 9 },
            { kind: 'TEXT', text: '?\n4. Paul hat einen Kaffee ' },
            { kind: 'GAP', gapId: 'p4', solution: ['getrunken'], hint: 'trinken', width: 10 },
            { kind: 'TEXT', text: '.\n5. Sie hat bis 18 Uhr ' },
            { kind: 'GAP', gapId: 'p5', solution: ['gearbeitet'], hint: 'arbeiten', width: 11 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'b8-2-match',
          type: 'MATCHING',
          instruction: 'Welches Partizip gehört zu welchem Verb?',
          left: [
            { id: 'l1', text: 'essen' },
            { id: 'l2', text: 'nehmen' },
            { id: 'l3', text: 'finden' },
            { id: 'l4', text: 'sprechen' },
          ],
          right: [
            { id: 'r1', text: 'gegessen' },
            { id: 'r2', text: 'genommen' },
            { id: 'r3', text: 'gefunden' },
            { id: 'r4', text: 'gesprochen' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'b8-2-order',
          type: 'ORDERING',
          instruction: 'Bilden Sie einen Satz im Perfekt.',
          items: [
            { id: 'o1', text: 'Am' },
            { id: 'o2', text: 'Sonntag' },
            { id: 'o3', text: 'habe' },
            { id: 'o4', text: 'ich' },
            { id: 'o5', text: 'lange' },
            { id: 'o6', text: 'geschlafen.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5', 'o6'],
        },
        {
          id: 'b8-2-info-war',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'war und hatte',
          text: 'Bei „sein“ und „haben“ benutzt man auch im Gespräch meistens das Präteritum: Ich war krank. Wir hatten viel Arbeit. „Ich bin krank gewesen“ ist richtig, klingt aber umständlich.',
          translations: {
            en: {
              title: 'war and hatte',
              text: 'With „sein“ and „haben“ people mostly use the simple past even in conversation: Ich war krank (I was ill). Wir hatten viel Arbeit (We had a lot of work). „Ich bin krank gewesen“ is correct but sounds clumsy.',
            },
            es: {
              title: 'war y hatte',
              text: 'Con „sein“ y „haben“ se usa casi siempre el Präteritum, también al hablar: Ich war krank (estuve enfermo). Wir hatten viel Arbeit (teníamos mucho trabajo). „Ich bin krank gewesen“ es correcto, pero suena pesado.',
            },
            fr: {
              title: 'war et hatte',
              text: 'Avec « sein » et « haben », on emploie surtout le prétérit, même à l’oral : Ich war krank (j’étais malade). Wir hatten viel Arbeit (nous avions beaucoup de travail). « Ich bin krank gewesen » est correct, mais sonne lourd.',
            },
            it: {
              title: 'war e hatte',
              text: 'Con „sein“ e „haben“ si usa quasi sempre il Präteritum, anche parlando: Ich war krank (ero malato). Wir hatten viel Arbeit (avevamo molto lavoro). „Ich bin krank gewesen“ è corretto, ma suona pesante.',
            },
          },
          table: {
            headers: ['Person', 'sein', 'haben'],
            rows: [
              ['ich', 'war', 'hatte'],
              ['du', 'warst', 'hattest'],
              ['er / sie / es', 'war', 'hatte'],
              ['wir', 'waren', 'hatten'],
              ['ihr', 'wart', 'hattet'],
              ['sie / Sie', 'waren', 'hatten'],
            ],
          },
        },
        {
          id: 'b8-2-choice',
          type: 'CHOICE',
          instruction: '„Wie ___ dein Urlaub?“',
          multiple: false,
          options: [
            { id: 'c1', text: 'hat' },
            { id: 'c2', text: 'war' },
            { id: 'c3', text: 'ist gewesen' },
          ],
          solution: ['c2'],
          explanation: 'Nach dem Befinden fragt man mit dem Präteritum von „sein“: Wie war dein Urlaub?',
          explanationTranslations: {
            en: 'To ask how something went, you use the simple past of „sein“: Wie war dein Urlaub?',
            es: 'Para preguntar cómo fue algo se usa el Präteritum de „sein“: Wie war dein Urlaub?',
            fr: 'Pour demander comment quelque chose s’est passé, on emploie le prétérit de « sein » : Wie war dein Urlaub?',
            it: 'Per chiedere com’è andato qualcosa si usa il Präteritum di „sein“: Wie war dein Urlaub?',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – Perfekt mit sein, Partizipien ohne ge-, der Werdegang.
  {
    order: 3,
    title: 'Mein Werdegang',
    subtitle: 'Das Perfekt mit sein',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'b8-3-h1', type: 'HEADING', level: 1, text: 'Mein Werdegang' },
        {
          id: 'b8-3-text',
          type: 'TEXT',
          text: 'Samir erzählt: „Ich bin in Beirut geboren und dort zur Schule gegangen. Dann habe ich eine Ausbildung als Koch gemacht. Ich habe acht Jahre in einem Hotel gearbeitet. 2021 bin ich nach Deutschland gekommen. Zuerst habe ich einen Deutschkurs besucht. Seit einem Jahr arbeite ich in einem Restaurant in Leipzig. Ich bin sehr zufrieden.“',
          translations: {
            en: 'Samir says: “I was born in Beirut and went to school there. Then I trained as a cook. I worked in a hotel for eight years. In 2021 I came to Germany. First I attended a German course. I’ve been working in a restaurant in Leipzig for a year. I’m very happy.”',
            es: 'Samir cuenta: «Nací en Beirut y fui allí al colegio. Luego hice una formación de cocinero. Trabajé ocho años en un hotel. En 2021 vine a Alemania. Primero hice un curso de alemán. Desde hace un año trabajo en un restaurante en Leipzig. Estoy muy contento».',
            fr: 'Samir raconte : « Je suis né à Beyrouth et j’y suis allé à l’école. Ensuite, j’ai fait une formation de cuisinier. J’ai travaillé huit ans dans un hôtel. En 2021, je suis venu en Allemagne. D’abord, j’ai suivi un cours d’allemand. Depuis un an, je travaille dans un restaurant à Leipzig. Je suis très content. »',
            it: 'Samir racconta: «Sono nato a Beirut e lì sono andato a scuola. Poi ho fatto una formazione da cuoco. Ho lavorato otto anni in un hotel. Nel 2021 sono venuto in Germania. Prima ho frequentato un corso di tedesco. Da un anno lavoro in un ristorante a Lipsia. Sono molto soddisfatto».',
          },
        },
        {
          id: 'b8-3-info-sein',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Perfekt mit sein',
          text: 'Die meisten Verben bilden das Perfekt mit „haben“. Mit „sein“ stehen Verben, die eine Bewegung von A nach B ausdrücken (gehen, fahren, kommen, fliegen) oder eine Veränderung (aufstehen, einschlafen, werden). Dazu kommen „sein“ und „bleiben“.',
          translations: {
            en: {
              title: 'Perfect tense with sein',
              text: 'Most verbs form the perfect with „haben“. Verbs expressing movement from A to B (gehen, fahren, kommen, fliegen) or a change of state (aufstehen, einschlafen, werden) take „sein“. So do „sein“ and „bleiben“.',
            },
            es: {
              title: 'Perfekt con sein',
              text: 'La mayoría de los verbos forman el Perfekt con „haben“. Con „sein“ van los verbos que expresan un movimiento de A a B (gehen, fahren, kommen, fliegen) o un cambio de estado (aufstehen, einschlafen, werden). También „sein“ y „bleiben“.',
            },
            fr: {
              title: 'Le Perfekt avec sein',
              text: 'La plupart des verbes forment le Perfekt avec « haben ». Se construisent avec « sein » les verbes qui expriment un déplacement de A à B (gehen, fahren, kommen, fliegen) ou un changement d’état (aufstehen, einschlafen, werden), ainsi que « sein » et « bleiben ».',
            },
            it: {
              title: 'Il Perfekt con sein',
              text: 'La maggior parte dei verbi forma il Perfekt con „haben“. Con „sein“ vanno i verbi che esprimono un movimento da A a B (gehen, fahren, kommen, fliegen) o un cambiamento di stato (aufstehen, einschlafen, werden). Inoltre „sein“ e „bleiben“.',
            },
          },
          table: {
            headers: ['Infinitiv', 'Perfekt'],
            rows: [
              ['gehen', 'ich bin gegangen'],
              ['fahren', 'du bist gefahren'],
              ['kommen', 'er ist gekommen'],
              ['fliegen', 'wir sind geflogen'],
              ['aufstehen', 'ihr seid aufgestanden'],
              ['bleiben', 'sie sind geblieben'],
            ],
          },
        },
        {
          id: 'b8-3-cloze-hilfsverb',
          type: 'CLOZE',
          instruction: 'haben oder sein? Ergänzen Sie die richtige Form.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Ich ' },
            { kind: 'GAP', gapId: 'h1', solution: ['bin'], width: 5 },
            { kind: 'TEXT', text: ' mit dem Zug nach Berlin gefahren.\n2. Dort ' },
            { kind: 'GAP', gapId: 'h2', solution: ['habe'], width: 5 },
            { kind: 'TEXT', text: ' ich meine Freundin getroffen.\n3. Wir ' },
            { kind: 'GAP', gapId: 'h3', solution: ['sind'], width: 5 },
            { kind: 'TEXT', text: ' ins Museum gegangen.\n4. Am Abend ' },
            { kind: 'GAP', gapId: 'h4', solution: ['haben'], width: 6 },
            { kind: 'TEXT', text: ' wir im Restaurant gegessen.\n5. Ich ' },
            { kind: 'GAP', gapId: 'h5', solution: ['bin'], width: 5 },
            { kind: 'TEXT', text: ' bis Sonntag geblieben.' },
          ],
        },
        {
          id: 'b8-3-info-ohne-ge',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Wo steht das ge-?',
          text: 'Bei trennbaren Verben steht ge- zwischen Vorsilbe und Stamm: einkaufen → eingekauft, aufstehen → aufgestanden. Untrennbare Verben (be-, ver-, er- …) und Verben auf -ieren haben kein ge-: besuchen → besucht, verstehen → verstanden, studieren → studiert.',
          translations: {
            en: {
              title: 'Where does ge- go?',
              text: 'With separable verbs, ge- goes between the prefix and the stem: einkaufen → eingekauft, aufstehen → aufgestanden. Inseparable verbs (be-, ver-, er- …) and verbs ending in -ieren have no ge-: besuchen → besucht, verstehen → verstanden, studieren → studiert.',
            },
            es: {
              title: '¿Dónde va el ge-?',
              text: 'En los verbos separables, ge- va entre el prefijo y la raíz: einkaufen → eingekauft, aufstehen → aufgestanden. Los verbos inseparables (be-, ver-, er- …) y los terminados en -ieren no llevan ge-: besuchen → besucht, verstehen → verstanden, studieren → studiert.',
            },
            fr: {
              title: 'Où se place ge- ?',
              text: 'Avec les verbes séparables, ge- se place entre le préfixe et le radical : einkaufen → eingekauft, aufstehen → aufgestanden. Les verbes inséparables (be-, ver-, er- …) et les verbes en -ieren n’ont pas de ge- : besuchen → besucht, verstehen → verstanden, studieren → studiert.',
            },
            it: {
              title: 'Dove va il ge-?',
              text: 'Nei verbi separabili ge- va tra il prefisso e la radice: einkaufen → eingekauft, aufstehen → aufgestanden. I verbi inseparabili (be-, ver-, er- …) e quelli in -ieren non hanno ge-: besuchen → besucht, verstehen → verstanden, studieren → studiert.',
            },
          },
        },
        {
          id: 'b8-3-choice-ge',
          type: 'CHOICE',
          instruction: 'Welche Partizipien sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'g1', text: 'angerufen' },
            { id: 'g2', text: 'gebesucht' },
            { id: 'g3', text: 'repariert' },
            { id: 'g4', text: 'geeinkauft' },
            { id: 'g5', text: 'bezahlt' },
          ],
          solution: ['g1', 'g3', 'g5'],
          explanation:
            'anrufen ist trennbar: an-ge-rufen. besuchen und bezahlen sind untrennbar, reparieren endet auf -ieren – also ohne ge-: besucht, bezahlt, repariert. Richtig ist außerdem „eingekauft“.',
          explanationTranslations: {
            en: 'anrufen is separable: an-ge-rufen. besuchen and bezahlen are inseparable, reparieren ends in -ieren – so no ge-: besucht, bezahlt, repariert. The correct form is also „eingekauft“.',
            es: 'anrufen es separable: an-ge-rufen. besuchen y bezahlen son inseparables y reparieren termina en -ieren, así que sin ge-: besucht, bezahlt, repariert. Lo correcto es además „eingekauft“.',
            fr: 'anrufen est séparable : an-ge-rufen. besuchen et bezahlen sont inséparables, reparieren se termine en -ieren – donc sans ge- : besucht, bezahlt, repariert. La forme correcte est aussi « eingekauft ».',
            it: 'anrufen è separabile: an-ge-rufen. besuchen e bezahlen sono inseparabili, reparieren finisce in -ieren – quindi senza ge-: besucht, bezahlt, repariert. La forma corretta è inoltre „eingekauft“.',
          },
        },
        {
          id: 'b8-3-order',
          type: 'ORDERING',
          instruction: 'Bringen Sie Samirs Werdegang in die richtige Reihenfolge.',
          items: [
            { id: 's1', text: 'Er ist in Beirut zur Schule gegangen.' },
            { id: 's2', text: 'Er hat eine Ausbildung als Koch gemacht.' },
            { id: 's3', text: 'Er hat in einem Hotel gearbeitet.' },
            { id: 's4', text: 'Er ist nach Deutschland gekommen.' },
            { id: 's5', text: 'Er hat einen Deutschkurs besucht.' },
          ],
          solution: ['s1', 's2', 's3', 's4', 's5'],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – weil, und eine Stellenanzeige.
  {
    order: 4,
    title: 'Ich suche einen neuen Job, weil …',
    subtitle: 'Nebensätze mit weil, Stellenanzeigen',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'b8-4-h1', type: 'HEADING', level: 1, text: 'Ich suche einen neuen Job, weil …' },
        {
          id: 'b8-4-dlg',
          type: 'DIALOGUE',
          title: 'In der Kaffeepause',
          lines: [
            { speaker: 'Katja', text: 'Ich suche eine neue Stelle.' },
            { speaker: 'Julia', text: 'Warum denn? Gefällt dir die Arbeit nicht mehr?' },
            { speaker: 'Katja', text: 'Doch, aber ich bin oft müde, weil ich so viele Nachtdienste habe.' },
            { speaker: 'Julia', text: 'Das verstehe ich.' },
            { speaker: 'Katja', text: 'Und ich möchte Teilzeit arbeiten, weil meine Tochter bald in die Schule kommt.' },
          ],
        },
        {
          id: 'b8-4-info-weil',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Nebensätze mit weil',
          text: 'Mit „weil“ nennt man einen Grund. Der weil-Satz ist ein Nebensatz: Das konjugierte Verb steht ganz am Ende. Vor „weil“ steht immer ein Komma. Man antwortet auch direkt auf „Warum?“ mit „Weil …“.',
          translations: {
            en: {
              title: 'Subordinate clauses with weil',
              text: '„weil“ (because) gives a reason. The weil-clause is a subordinate clause: the conjugated verb goes right at the end. There is always a comma before „weil“. You can also answer „Warum?“ (why?) directly with „Weil …“.',
            },
            es: {
              title: 'Oraciones subordinadas con weil',
              text: 'Con „weil“ (porque) se da un motivo. La oración con weil es subordinada: el verbo conjugado va al final del todo. Delante de „weil“ siempre hay coma. También se puede responder a „Warum?“ (¿por qué?) directamente con „Weil …“.',
            },
            fr: {
              title: 'Les subordonnées avec weil',
              text: '« weil » (parce que) introduit une cause. La proposition en weil est une subordonnée : le verbe conjugué se place tout à la fin. Il y a toujours une virgule devant « weil ». On peut aussi répondre directement à « Warum? » (pourquoi ?) par « Weil … ».',
            },
            it: {
              title: 'Le subordinate con weil',
              text: 'Con „weil“ (perché) si indica un motivo. La frase con weil è una subordinata: il verbo coniugato va alla fine. Davanti a „weil“ c’è sempre la virgola. Si può anche rispondere direttamente a „Warum?“ (perché?) con „Weil …“.',
            },
          },
          table: {
            headers: ['Hauptsatz', 'Nebensatz'],
            rows: [
              ['Ich bin müde,', 'weil ich viele Nachtdienste habe.'],
              ['Sie sucht eine neue Stelle,', 'weil sie Teilzeit arbeiten möchte.'],
              ['Er kommt heute nicht,', 'weil er krank ist.'],
              ['Wir sind zu spät,', 'weil der Bus nicht gekommen ist.'],
            ],
          },
        },
        {
          id: 'b8-4-order-weil',
          type: 'ORDERING',
          instruction: 'Bilden Sie den Nebensatz: Ich lerne Deutsch, …',
          items: [
            { id: 'w1', text: 'weil' },
            { id: 'w2', text: 'ich' },
            { id: 'w3', text: 'in' },
            { id: 'w4', text: 'Deutschland' },
            { id: 'w5', text: 'arbeiten' },
            { id: 'w6', text: 'möchte.' },
          ],
          solution: ['w1', 'w2', 'w3', 'w4', 'w5', 'w6'],
        },
        {
          id: 'b8-4-choice-weil',
          type: 'CHOICE',
          instruction: 'Welcher Satz ist richtig?',
          multiple: false,
          options: [
            { id: 'c1', text: 'Ich nehme den Bus, weil mein Auto ist kaputt.' },
            { id: 'c2', text: 'Ich nehme den Bus, weil mein Auto kaputt ist.' },
            { id: 'c3', text: 'Ich nehme den Bus, weil ist mein Auto kaputt.' },
          ],
          solution: ['c2'],
          explanation: 'Im weil-Satz steht das konjugierte Verb am Ende: …, weil mein Auto kaputt ist.',
          explanationTranslations: {
            en: 'In a weil-clause the conjugated verb goes at the end: …, weil mein Auto kaputt ist.',
            es: 'En la oración con weil el verbo conjugado va al final: …, weil mein Auto kaputt ist.',
            fr: 'Dans la subordonnée en weil, le verbe conjugué est à la fin : …, weil mein Auto kaputt ist.',
            it: 'Nella frase con weil il verbo coniugato va alla fine: …, weil mein Auto kaputt ist.',
          },
        },
        {
          id: 'b8-4-anzeige',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'Stellenanzeige: Koch/Köchin (m/w/d) gesucht',
          text: 'Das Restaurant „Zur Linde“ in Leipzig sucht ab sofort eine Köchin oder einen Koch in Vollzeit. Sie haben eine abgeschlossene Ausbildung und zwei Jahre Berufserfahrung. Sie arbeiten gern im Team und sind flexibel, auch am Wochenende. Wir bieten ein gutes Gehalt, 30 Tage Urlaub und ein nettes Team. Bewerbungen bitte per E-Mail an jobs@zur-linde.de.',
          translations: {
            en: {
              title: 'Job advert: cook (m/f/d) wanted',
              text: 'The restaurant „Zur Linde“ in Leipzig is looking for a full-time cook starting immediately. You have completed vocational training and have two years’ work experience. You enjoy working in a team and are flexible, including at weekends. We offer a good salary, 30 days’ holiday and a friendly team. Please send applications by email to jobs@zur-linde.de.',
            },
            es: {
              title: 'Oferta de empleo: se busca cocinero/a (m/f/d)',
              text: 'El restaurante „Zur Linde“ de Leipzig busca cocinero o cocinera a jornada completa para incorporación inmediata. Tiene formación profesional terminada y dos años de experiencia. Le gusta trabajar en equipo y es flexible, también los fines de semana. Ofrecemos un buen sueldo, 30 días de vacaciones y un equipo agradable. Envíe su candidatura por correo a jobs@zur-linde.de.',
            },
            fr: {
              title: 'Offre d’emploi : cuisinier/cuisinière (h/f/d)',
              text: 'Le restaurant « Zur Linde » à Leipzig recherche dès maintenant un cuisinier ou une cuisinière à temps plein. Vous avez terminé une formation professionnelle et avez deux ans d’expérience. Vous aimez travailler en équipe et êtes flexible, y compris le week-end. Nous offrons un bon salaire, 30 jours de congés et une équipe sympathique. Candidatures par e-mail à jobs@zur-linde.de.',
            },
            it: {
              title: 'Annuncio di lavoro: cercasi cuoco/cuoca (m/f/d)',
              text: 'Il ristorante „Zur Linde“ di Lipsia cerca da subito un cuoco o una cuoca a tempo pieno. Ha concluso una formazione professionale e ha due anni di esperienza. Le piace lavorare in squadra ed è flessibile, anche nel fine settimana. Offriamo un buon stipendio, 30 giorni di ferie e un team simpatico. Candidature via e-mail a jobs@zur-linde.de.',
            },
          },
        },
        {
          id: 'b8-4-choice-anzeige',
          type: 'CHOICE',
          instruction: 'Was steht in der Anzeige? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'a1', text: 'Die Stelle ist in Teilzeit.' },
            { id: 'a2', text: 'Man braucht Berufserfahrung.' },
            { id: 'a3', text: 'Man muss manchmal am Wochenende arbeiten.' },
            { id: 'a4', text: 'Man soll die Bewerbung mit der Post schicken.' },
          ],
          solution: ['a2', 'a3'],
          explanation:
            'Die Stelle ist in Vollzeit, und die Bewerbung soll per E-Mail kommen. Gefragt sind zwei Jahre Berufserfahrung und Flexibilität am Wochenende.',
          explanationTranslations: {
            en: 'The job is full-time, and applications should be sent by email. Two years’ experience and flexibility at weekends are required.',
            es: 'El puesto es a jornada completa y la candidatura se envía por correo electrónico. Se piden dos años de experiencia y flexibilidad los fines de semana.',
            fr: 'Le poste est à temps plein, et la candidature doit être envoyée par e-mail. On demande deux ans d’expérience et de la flexibilité le week-end.',
            it: 'Il posto è a tempo pieno e la candidatura va inviata per e-mail. Si richiedono due anni di esperienza e flessibilità nel fine settimana.',
          },
        },
        {
          id: 'b8-4-info-mwd',
          type: 'INFO',
          variant: 'TIP',
          title: 'Was bedeutet (m/w/d)?',
          text: 'In Stellenanzeigen steht hinter dem Beruf oft (m/w/d): männlich, weiblich, divers. Damit zeigt die Firma, dass die Stelle für alle Menschen offen ist – das ist in Deutschland gesetzlich vorgeschrieben.',
          translations: {
            en: {
              title: 'What does (m/w/d) mean?',
              text: 'Job adverts often have (m/w/d) after the job title: male, female, diverse. It shows the job is open to everyone – in Germany this is required by law.',
            },
            es: {
              title: '¿Qué significa (m/w/d)?',
              text: 'En las ofertas de empleo, detrás de la profesión suele aparecer (m/w/d): masculino, femenino, diverso. Así la empresa indica que el puesto está abierto a todas las personas – en Alemania es obligatorio por ley.',
            },
            fr: {
              title: 'Que signifie (m/w/d) ?',
              text: 'Dans les offres d’emploi, on trouve souvent (m/w/d) après le métier : masculin, féminin, divers. L’entreprise montre ainsi que le poste est ouvert à tous – en Allemagne, c’est une obligation légale.',
            },
            it: {
              title: 'Che cosa significa (m/w/d)?',
              text: 'Negli annunci di lavoro dopo la professione compare spesso (m/w/d): maschile, femminile, diverso. Così l’azienda mostra che il posto è aperto a tutte le persone – in Germania è previsto dalla legge.',
            },
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – Rückblick, zum Schluss der eigene Werdegang.
  {
    order: 5,
    title: 'Kannst du das schon?',
    subtitle: 'Rückblick auf das ganze Kapitel',
    estimatedMinutes: 15,
    content: {
      version: v,
      blocks: [
        { id: 'b8-5-h1', type: 'HEADING', level: 1, text: 'Kannst du das schon?' },
        {
          id: 'b8-5-intro',
          type: 'TEXT',
          text: 'Prüfen Sie, was Sie aus Kapitel 8 mitnehmen. Am Ende erzählen Sie Ihren eigenen Werdegang.',
          translations: {
            en: 'Check what you take away from Chapter 8. At the end, you’ll tell your own career story.',
            es: 'Compruebe qué se lleva del Capítulo 8. Al final contará su propia trayectoria.',
            fr: 'Vérifiez ce que vous retenez du chapitre 8. À la fin, vous raconterez votre propre parcours.',
            it: 'Verifichi cosa porta a casa dal Capitolo 8. Alla fine racconterà il suo percorso.',
          },
        },
        {
          id: 'b8-5-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie den Text.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Letztes Jahr ' },
            { kind: 'GAP', gapId: 'r1', solution: ['bin'], width: 5 },
            { kind: 'TEXT', text: ' ich nach Hamburg gezogen. Ich ' },
            { kind: 'GAP', gapId: 'r2', solution: ['habe'], width: 5 },
            { kind: 'TEXT', text: ' eine neue Stelle ' },
            { kind: 'GAP', gapId: 'r3', solution: ['gefunden'], width: 9 },
            { kind: 'TEXT', text: '. Ich arbeite jetzt als Verkäuferin, weil mir der Kontakt mit Kunden gefällt. Am Anfang ' },
            { kind: 'GAP', gapId: 'r4', solution: ['war'], width: 5 },
            { kind: 'TEXT', text: ' alles neu, aber meine Kollegen ' },
            { kind: 'GAP', gapId: 'r5', solution: ['haben'], width: 6 },
            { kind: 'TEXT', text: ' mir viel geholfen.' },
          ],
        },
        {
          id: 'b8-5-choice',
          type: 'CHOICE',
          instruction: 'Welche Sätze sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'k1', text: 'Ich habe gestern nach Köln gefahren.' },
            { id: 'k2', text: 'Wir sind um sechs aufgestanden.' },
            { id: 'k3', text: 'Sie hat Medizin studiert.' },
            { id: 'k4', text: 'Ich bleibe zu Hause, weil ich bin krank.' },
          ],
          solution: ['k2', 'k3'],
          explanation:
            '„fahren“ bildet das Perfekt mit „sein“: Ich bin nach Köln gefahren. Im weil-Satz steht das Verb am Ende: …, weil ich krank bin.',
          explanationTranslations: {
            en: '„fahren“ forms the perfect with „sein“: Ich bin nach Köln gefahren. In a weil-clause the verb goes at the end: …, weil ich krank bin.',
            es: '„fahren“ forma el Perfekt con „sein“: Ich bin nach Köln gefahren. En la oración con weil el verbo va al final: …, weil ich krank bin.',
            fr: '« fahren » forme le Perfekt avec « sein » : Ich bin nach Köln gefahren. Dans la subordonnée en weil, le verbe est à la fin : …, weil ich krank bin.',
            it: '„fahren“ forma il Perfekt con „sein“: Ich bin nach Köln gefahren. Nella frase con weil il verbo va alla fine: …, weil ich krank bin.',
          },
        },
        {
          id: 'b8-5-match',
          type: 'MATCHING',
          instruction: 'Verbinden Sie Hauptsatz und Nebensatz.',
          left: [
            { id: 'm1', text: 'Ich bin zu spät gekommen,' },
            { id: 'm2', text: 'Er macht einen Deutschkurs,' },
            { id: 'm3', text: 'Sie arbeitet Teilzeit,' },
          ],
          right: [
            { id: 'y1', text: 'weil der Zug Verspätung hatte.' },
            { id: 'y2', text: 'weil er in Deutschland studieren möchte.' },
            { id: 'y3', text: 'weil sie zwei kleine Kinder hat.' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'y1' },
            { leftId: 'm2', rightId: 'y2' },
            { leftId: 'm3', rightId: 'y3' },
          ],
        },
        {
          id: 'b8-5-writing',
          type: 'WRITING',
          instruction: 'Mein Werdegang',
          prompt:
            'Erzählen Sie in fünf bis sieben Sätzen: Wo sind Sie zur Schule gegangen? Was haben Sie gelernt oder studiert? Wo haben Sie schon gearbeitet? Was möchten Sie in Zukunft machen – und warum? Benutzen Sie das Perfekt und mindestens einen weil-Satz.',
          minWords: 40,
          maxWords: 150,
          aiFeedback: true,
          sampleAnswer:
            'Ich bin in Porto zur Schule gegangen. Danach habe ich Informatik studiert. Ich habe fünf Jahre bei einer Bank in Lissabon gearbeitet. Vor zwei Jahren bin ich mit meiner Familie nach München gekommen. Jetzt suche ich eine Stelle als Programmierer. Ich lerne jeden Tag Deutsch, weil ich im Team gut kommunizieren möchte.',
        },
      ],
    },
  },
];
