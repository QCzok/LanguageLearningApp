import type { UnitSeed } from './chapter-beginner-1';

/**
 * Grammatik, Kapitel 12: „Konjunktiv und indirekte Rede“ (ab C1)
 *
 * Drei Seiten, gebaut wie die Kapitel davor. Letztes Kapitel des
 * Grammatikbuchs.
 *
 * Seite 1 bringt den Konjunktiv II der Vergangenheit („hätte … gemacht“,
 * „wäre … gegangen“) für irreale Bedingungen und Vergleiche mit „als ob“ –
 * die Gegenwartsformen stehen im Kursbuch, Intermediate, Kapitel 4. Seite 2
 * zeigt den Konjunktiv II dort, wo er nichts Irreales meint: in höflichen
 * Bitten, Vorschlägen, vorsichtigen Vermutungen und Wünschen. Seite 3 ist der
 * Konjunktiv I der indirekten Rede, mit der Ersatzregel: Wo der Konjunktiv I
 * wie der Indikativ aussieht, springt der Konjunktiv II ein.
 *
 * Der doppelte Infinitiv mit Modalverb („hätte kommen müssen“) wird gezeigt,
 * weil er auf C1 in Texten ständig vorkommt; seine Stellung im Nebensatz
 * („…, dass er hätte kommen müssen“) steht nur in der Tabelle.
 *
 * Erklärungen übersetzt, Tabellen unübersetzt – wie in Kapitel 1.
 */
const v = 1;

export const GRAMMAR_12_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Konjunktiv II der Vergangenheit, „als ob“.
  {
    order: 1,
    title: 'Wenn ich das gewusst hätte …',
    subtitle: 'Konjunktiv II der Vergangenheit',
    estimatedMinutes: 32,
    content: {
      version: v,
      blocks: [
        { id: 'g12-1-h1', type: 'HEADING', level: 1, text: 'Wenn ich das gewusst hätte …' },
        {
          id: 'g12-1-intro',
          type: 'TEXT',
          text: 'Mit dem Konjunktiv II der Gegenwart spricht man über Vorstellungen: Wenn ich Zeit hätte, käme ich mit. Geht es um die Vergangenheit – um etwas, das nicht passiert ist und sich nicht mehr ändern lässt –, braucht man eine eigene Form: Wenn ich Zeit gehabt hätte, wäre ich mitgekommen.',
          translations: {
            en: 'The present Konjunktiv II is used to talk about imagined situations: Wenn ich Zeit hätte, käme ich mit. When it’s about the past – something that didn’t happen and can no longer be changed – you need a separate form: Wenn ich Zeit gehabt hätte, wäre ich mitgekommen (if I had had time, I would have come along).',
            es: 'Con el Konjunktiv II de presente se habla de situaciones imaginadas: Wenn ich Zeit hätte, käme ich mit. Si se trata del pasado – de algo que no ocurrió y ya no se puede cambiar –, hace falta una forma propia: Wenn ich Zeit gehabt hätte, wäre ich mitgekommen (si hubiera tenido tiempo, habría ido).',
            fr: 'Le Konjunktiv II présent sert à parler de situations imaginées : Wenn ich Zeit hätte, käme ich mit. Quand il s’agit du passé – de quelque chose qui n’a pas eu lieu et ne peut plus changer –, il faut une forme propre : Wenn ich Zeit gehabt hätte, wäre ich mitgekommen (si j’avais eu le temps, je serais venu).',
            it: 'Con il Konjunktiv II presente si parla di situazioni immaginate: Wenn ich Zeit hätte, käme ich mit. Se si tratta del passato – di qualcosa che non è successo e non si può più cambiare –, serve una forma propria: Wenn ich Zeit gehabt hätte, wäre ich mitgekommen (se avessi avuto tempo, sarei venuto).',
          },
        },
        {
          id: 'g12-1-info-vergangenheit',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'hätte / wäre + Partizip II',
          text: 'Der Konjunktiv II der Vergangenheit hat nur eine Form: „hätte“ oder „wäre“ + Partizip II. Welches Hilfsverb, entscheidet dasselbe wie im Perfekt (Bewegung, Zustandswechsel, sein, bleiben → wäre). Mit Modalverb steht ein doppelter Infinitiv am Ende: Ich hätte früher anrufen sollen.',
          translations: {
            en: {
              title: 'hätte / wäre + past participle',
              text: 'The past Konjunktiv II has just one form: „hätte“ or „wäre“ + past participle. The choice of auxiliary follows the same rule as in the perfect (movement, change of state, sein, bleiben → wäre). With a modal verb there’s a double infinitive at the end: Ich hätte früher anrufen sollen (I should have called earlier).',
            },
            es: {
              title: 'hätte / wäre + participio II',
              text: 'El Konjunktiv II de pasado tiene una sola forma: „hätte“ o „wäre“ + participio II. El auxiliar se elige como en el perfecto (movimiento, cambio de estado, sein, bleiben → wäre). Con verbo modal hay un doble infinitivo al final: Ich hätte früher anrufen sollen (debería haber llamado antes).',
            },
            fr: {
              title: 'hätte / wäre + participe passé',
              text: 'Le Konjunktiv II passé n’a qu’une forme : « hätte » ou « wäre » + participe passé. Le choix de l’auxiliaire suit la même règle qu’au parfait (déplacement, changement d’état, sein, bleiben → wäre). Avec un verbe de modalité, on a un double infinitif à la fin : Ich hätte früher anrufen sollen (j’aurais dû appeler plus tôt).',
            },
            it: {
              title: 'hätte / wäre + participio passato',
              text: 'Il Konjunktiv II passato ha una sola forma: „hätte“ o „wäre“ + participio passato. L’ausiliare si sceglie come nel Perfekt (movimento, cambiamento di stato, sein, bleiben → wäre). Con un verbo modale alla fine c’è un doppio infinito: Ich hätte früher anrufen sollen (avrei dovuto chiamare prima).',
            },
          },
          table: {
            headers: ['', 'Gegenwart', 'Vergangenheit'],
            rows: [
              ['mit haben', 'Ich würde ihn fragen.', 'Ich hätte ihn gefragt.'],
              ['mit sein', 'Wir würden kommen.', 'Wir wären gekommen.'],
              ['Modalverb', 'Du solltest mehr lernen.', 'Du hättest mehr lernen sollen.'],
              ['Modalverb im Nebensatz', '…, dass du mehr lernen solltest.', '…, dass du mehr hättest lernen sollen.'],
            ],
          },
        },
        {
          id: 'g12-1-info-als-ob',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Irreale Vergleiche: als ob, als',
          text: 'Mit „als ob“ (oder „als wenn“) vergleicht man mit etwas, das nicht stimmt: Er tut so, als ob er nichts gehört hätte. Das Verb steht am Ende. Mit „als“ allein rückt das Verb direkt dahinter: Er tut so, als hätte er nichts gehört.',
          translations: {
            en: {
              title: 'Unreal comparisons: als ob, als',
              text: '„als ob“ (or „als wenn“) compares with something that isn’t true: Er tut so, als ob er nichts gehört hätte (he acts as if he hadn’t heard anything). The verb goes to the end. With „als“ alone, the verb moves right after it: Er tut so, als hätte er nichts gehört.',
            },
            es: {
              title: 'Comparaciones irreales: als ob, als',
              text: 'Con „als ob“ (o „als wenn“) se compara con algo que no es cierto: Er tut so, als ob er nichts gehört hätte (hace como si no hubiera oído nada). El verbo va al final. Con „als“ solo, el verbo va justo detrás: Er tut so, als hätte er nichts gehört.',
            },
            fr: {
              title: 'Comparaisons irréelles : als ob, als',
              text: 'Avec « als ob » (ou « als wenn »), on compare à quelque chose qui n’est pas vrai : Er tut so, als ob er nichts gehört hätte (il fait comme s’il n’avait rien entendu). Le verbe va à la fin. Avec « als » seul, le verbe suit immédiatement : Er tut so, als hätte er nichts gehört.',
            },
            it: {
              title: 'Paragoni irreali: als ob, als',
              text: 'Con „als ob“ (o „als wenn“) si fa un paragone con qualcosa che non è vero: Er tut so, als ob er nichts gehört hätte (fa finta di non aver sentito niente). Il verbo va alla fine. Con „als“ da solo, il verbo segue subito: Er tut so, als hätte er nichts gehört.',
            },
          },
        },
        {
          id: 'g12-1-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie „hätte“ oder „wäre“ in der richtigen Form.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Wenn ich den Wecker gehört ' },
            { kind: 'GAP', gapId: 'k1', solution: ['hätte', 'haette'], width: 7 },
            { kind: 'TEXT', text: ', hätte ich den Zug nicht verpasst.\n2. Wenn wir früher losgefahren ' },
            { kind: 'GAP', gapId: 'k2', solution: ['wären', 'waeren'], width: 7 },
            { kind: 'TEXT', text: ', wären wir pünktlich gewesen.\n3. Ohne deine Hilfe ' },
            { kind: 'GAP', gapId: 'k3', solution: ['hätte', 'haette'], width: 7 },
            { kind: 'TEXT', text: ' ich die Prüfung nicht bestanden.\n4. Ihr ' },
            { kind: 'GAP', gapId: 'k4', solution: ['hättet', 'haettet'], width: 7 },
            { kind: 'TEXT', text: ' uns vorher Bescheid sagen sollen!\n5. Sie tat so, als ob sie mich nie gesehen ' },
            { kind: 'GAP', gapId: 'k5', solution: ['hätte', 'haette'], width: 7 },
            { kind: 'TEXT', text: '.\n6. Fast ' },
            { kind: 'GAP', gapId: 'k6', solution: ['wäre', 'waere'], width: 7 },
            { kind: 'TEXT', text: ' ich auf dem Eis ausgerutscht.' },
          ],
        },
        {
          id: 'g12-1-choice',
          type: 'CHOICE',
          instruction: 'Welche Sätze sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'c1', text: 'Wenn ich das gewusst hätte, wäre ich zu Hause geblieben.' },
            { id: 'c2', text: 'Wenn ich das gewusst würde, wäre ich zu Hause geblieben.' },
            { id: 'c3', text: 'Er hätte das Angebot annehmen sollen.' },
            { id: 'c4', text: 'Er hätte das Angebot annehmen gesollt.' },
          ],
          solution: ['c1', 'c3'],
          explanation:
            'In der Vergangenheit steht „hätte/wäre“ + Partizip II, nicht „würde“. Mit Modalverb steht der doppelte Infinitiv: annehmen sollen.',
          explanationTranslations: {
            en: 'In the past you use „hätte/wäre“ + past participle, not „würde“. With a modal verb you get the double infinitive: annehmen sollen.',
            es: 'En pasado se usa „hätte/wäre“ + participio II, no „würde“. Con verbo modal va el doble infinitivo: annehmen sollen.',
            fr: 'Au passé, on emploie « hätte/wäre » + participe passé, pas « würde ». Avec un verbe de modalité, on a le double infinitif : annehmen sollen.',
            it: 'Al passato si usa „hätte/wäre“ + participio passato, non „würde“. Con un verbo modale si ha il doppio infinito: annehmen sollen.',
          },
        },
        {
          id: 'g12-1-order',
          type: 'ORDERING',
          instruction: 'Bilden Sie einen Satz mit „als“ (ohne „ob“).',
          items: [
            { id: 'a1', text: 'Sie' },
            { id: 'a2', text: 'sieht aus,' },
            { id: 'a3', text: 'als' },
            { id: 'a4', text: 'hätte' },
            { id: 'a5', text: 'sie' },
            { id: 'a6', text: 'die ganze Nacht nicht' },
            { id: 'a7', text: 'geschlafen.' },
          ],
          solution: ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7'],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – Höflichkeit, Vorschläge, Vermutungen, Wünsche.
  {
    order: 2,
    title: 'Könnten Sie vielleicht …?',
    subtitle: 'Höflichkeit, Vorschläge, Vermutungen, Wünsche',
    estimatedMinutes: 32,
    content: {
      version: v,
      blocks: [
        { id: 'g12-2-h1', type: 'HEADING', level: 1, text: 'Könnten Sie vielleicht …?' },
        {
          id: 'g12-2-intro',
          type: 'TEXT',
          text: 'Der Konjunktiv II meint nicht immer etwas Unwirkliches. Oft macht er eine Aussage nur weicher: Aus „Geben Sie mir das Salz“ wird „Könnten Sie mir das Salz geben?“, aus „Das ist falsch“ wird „Das dürfte falsch sein“. Im Deutschen ist das keine Übertreibung, sondern der normale Ton gegenüber Fremden und im Beruf.',
          translations: {
            en: 'The Konjunktiv II doesn’t always mean something unreal. Often it just softens a statement: „Geben Sie mir das Salz“ becomes „Könnten Sie mir das Salz geben?“, „Das ist falsch“ becomes „Das dürfte falsch sein“ (that’s probably wrong). In German this isn’t exaggerated but the normal tone with strangers and at work.',
            es: 'El Konjunktiv II no siempre expresa algo irreal. A menudo solo suaviza una afirmación: „Geben Sie mir das Salz“ se convierte en „Könnten Sie mir das Salz geben?“, y „Das ist falsch“ en „Das dürfte falsch sein“ (eso probablemente está mal). En alemán no es exagerado, sino el tono normal con desconocidos y en el trabajo.',
            fr: 'Le Konjunktiv II n’exprime pas toujours l’irréel. Souvent, il adoucit simplement un énoncé : « Geben Sie mir das Salz » devient « Könnten Sie mir das Salz geben? », « Das ist falsch » devient « Das dürfte falsch sein » (c’est sans doute faux). En allemand, ce n’est pas exagéré : c’est le ton normal avec des inconnus et au travail.',
            it: 'Il Konjunktiv II non indica sempre qualcosa di irreale. Spesso ammorbidisce soltanto un’affermazione: „Geben Sie mir das Salz“ diventa „Könnten Sie mir das Salz geben?“, „Das ist falsch“ diventa „Das dürfte falsch sein“ (probabilmente è sbagliato). In tedesco non è un’esagerazione, ma il tono normale con gli sconosciuti e sul lavoro.',
          },
        },
        {
          id: 'g12-2-info-funktionen',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Wofür man den Konjunktiv II noch braucht',
          text: 'Am häufigsten sind die eigenen Formen von „haben“, „sein“, „werden“ und den Modalverben (hätte, wäre, würde, könnte, dürfte, müsste, sollte). Bei Vermutungen ist die Abstufung wichtig: „müsste“ ist ziemlich sicher, „dürfte“ wahrscheinlich, „könnte“ nur möglich.',
          translations: {
            en: {
              title: 'Other uses of the Konjunktiv II',
              text: 'The most common are the special forms of „haben“, „sein“, „werden“ and the modal verbs (hätte, wäre, würde, könnte, dürfte, müsste, sollte). With assumptions the gradation matters: „müsste“ is fairly certain, „dürfte“ probable, „könnte“ merely possible.',
            },
            es: {
              title: 'Otros usos del Konjunktiv II',
              text: 'Las más frecuentes son las formas propias de „haben“, „sein“, „werden“ y los modales (hätte, wäre, würde, könnte, dürfte, müsste, sollte). En las suposiciones importa la gradación: „müsste“ es bastante seguro, „dürfte“ probable, „könnte“ solo posible.',
            },
            fr: {
              title: 'Autres emplois du Konjunktiv II',
              text: 'Les plus fréquentes sont les formes propres de « haben », « sein », « werden » et des verbes de modalité (hätte, wäre, würde, könnte, dürfte, müsste, sollte). Pour les suppositions, la gradation compte : « müsste » est assez sûr, « dürfte » probable, « könnte » seulement possible.',
            },
            it: {
              title: 'Altri usi del Konjunktiv II',
              text: 'Le più frequenti sono le forme proprie di „haben“, „sein“, „werden“ e dei verbi modali (hätte, wäre, würde, könnte, dürfte, müsste, sollte). Nelle supposizioni conta la gradazione: „müsste“ è abbastanza sicuro, „dürfte“ probabile, „könnte“ solo possibile.',
            },
          },
          table: {
            headers: ['Funktion', 'Beispiel'],
            rows: [
              ['höfliche Bitte', 'Könnten Sie mir helfen? / Würden Sie bitte das Fenster schließen?'],
              ['höfliche Frage', 'Hätten Sie kurz Zeit? / Wäre es möglich, den Termin zu verschieben?'],
              ['Vorschlag', 'Wir könnten ins Kino gehen. / Wie wäre es mit einer Pause?'],
              ['Rat', 'Sie sollten das Angebot annehmen.'],
              ['Vermutung', 'Er müsste gleich hier sein. / Das dürfte etwa 50 Euro kosten.'],
              ['Wunsch', 'Ich hätte gern einen Kaffee. / Wenn es doch schon Freitag wäre!'],
              ['beinahe passiert', 'Fast hätte ich es vergessen.'],
            ],
          },
        },
        {
          id: 'g12-2-info-ton',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'Wie direkt darf man sein?',
          text: 'Eine Bitte im Imperativ („Schicken Sie mir die Unterlagen.“) klingt im Deutschen korrekt, aber knapp. In E-Mails und Gesprächen mit Unbekannten ist der Konjunktiv üblich: „Könnten Sie mir die Unterlagen schicken?“ oder „Ich wäre Ihnen dankbar, wenn Sie mir die Unterlagen schicken könnten.“ Unter Freunden genügt oft ein „Kannst du …?“.',
          translations: {
            en: {
              title: 'How direct can you be?',
              text: 'A request in the imperative („Schicken Sie mir die Unterlagen.“) sounds correct in German, but curt. In e-mails and conversations with people you don’t know, the Konjunktiv is usual: „Könnten Sie mir die Unterlagen schicken?“ or „Ich wäre Ihnen dankbar, wenn Sie mir die Unterlagen schicken könnten.“ Among friends a simple „Kannst du …?“ is often enough.',
            },
            es: {
              title: '¿Cuánto se puede ser directo?',
              text: 'Una petición en imperativo („Schicken Sie mir die Unterlagen.“) es correcta en alemán, pero seca. En correos y conversaciones con desconocidos lo habitual es el Konjunktiv: „Könnten Sie mir die Unterlagen schicken?“ o „Ich wäre Ihnen dankbar, wenn Sie mir die Unterlagen schicken könnten.“ Entre amigos suele bastar un „Kannst du …?“.',
            },
            fr: {
              title: 'Jusqu’où peut-on être direct ?',
              text: 'Une demande à l’impératif (« Schicken Sie mir die Unterlagen. ») est correcte en allemand, mais sèche. Dans les e-mails et les conversations avec des inconnus, le Konjunktiv est de mise : « Könnten Sie mir die Unterlagen schicken? » ou « Ich wäre Ihnen dankbar, wenn Sie mir die Unterlagen schicken könnten. » Entre amis, un « Kannst du …? » suffit souvent.',
            },
            it: {
              title: 'Quanto si può essere diretti?',
              text: 'Una richiesta all’imperativo („Schicken Sie mir die Unterlagen.“) in tedesco è corretta, ma secca. Nelle e-mail e nelle conversazioni con sconosciuti si usa il Konjunktiv: „Könnten Sie mir die Unterlagen schicken?“ oppure „Ich wäre Ihnen dankbar, wenn Sie mir die Unterlagen schicken könnten.“ Tra amici spesso basta un „Kannst du …?“.',
            },
          },
        },
        {
          id: 'g12-2-match',
          type: 'MATCHING',
          instruction: 'Welche Funktion hat der Satz?',
          left: [
            { id: 'l1', text: 'Würden Sie mir bitte Ihren Ausweis zeigen?' },
            { id: 'l2', text: 'Wir könnten am Wochenende an den See fahren.' },
            { id: 'l3', text: 'Das müsste eigentlich funktionieren.' },
            { id: 'l4', text: 'Wenn ich doch nur mehr Zeit hätte!' },
          ],
          right: [
            { id: 'r1', text: 'höfliche Bitte' },
            { id: 'r2', text: 'Vorschlag' },
            { id: 'r3', text: 'Vermutung' },
            { id: 'r4', text: 'Wunsch' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'g12-2-cloze',
          type: 'CLOZE',
          instruction: 'Machen Sie die Sätze höflicher. Ergänzen Sie den Konjunktiv II.',
          wordBank: ['Könnten', 'Hätten', 'Wäre', 'würde', 'dürfte'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Haben Sie einen Moment Zeit? → ' },
            { kind: 'GAP', gapId: 'h1', solution: ['Hätten', 'Haetten'], width: 8 },
            { kind: 'TEXT', text: ' Sie einen Moment Zeit?\n2. Helfen Sie mir! → ' },
            { kind: 'GAP', gapId: 'h2', solution: ['Könnten', 'Koennten'], width: 8 },
            { kind: 'TEXT', text: ' Sie mir helfen?\n3. Ist ein früherer Termin möglich? → ' },
            { kind: 'GAP', gapId: 'h3', solution: ['Wäre', 'Waere'], width: 6 },
            { kind: 'TEXT', text: ' ein früherer Termin möglich?\n4. Ich will lieber am Fenster sitzen. → Ich ' },
            { kind: 'GAP', gapId: 'h4', solution: ['würde', 'wuerde'], width: 6 },
            { kind: 'TEXT', text: ' lieber am Fenster sitzen.\n5. Das ist wahrscheinlich ein Missverständnis. → Das ' },
            { kind: 'GAP', gapId: 'h5', solution: ['dürfte', 'duerfte'], width: 7 },
            { kind: 'TEXT', text: ' ein Missverständnis sein.' },
          ],
        },
        {
          id: 'g12-2-choice',
          type: 'CHOICE',
          instruction: 'Welcher Satz drückt die sicherste Vermutung aus?',
          question: 'Es ist 18:05 Uhr. Anna kommt jeden Tag um 18 Uhr von der Arbeit.',
          multiple: false,
          options: [
            { id: 'c1', text: 'Anna könnte schon zu Hause sein.' },
            { id: 'c2', text: 'Anna müsste schon zu Hause sein.' },
            { id: 'c3', text: 'Anna wäre schon zu Hause.' },
            { id: 'c4', text: 'Anna sollte schon zu Hause sein, oder?' },
          ],
          solution: ['c2'],
          explanation:
            '„müsste“ drückt eine fast sichere Erwartung aus, die auf Wissen beruht. „könnte“ ist nur eine Möglichkeit. „wäre“ allein beschreibt eine irreale Vorstellung, keine Vermutung.',
          explanationTranslations: {
            en: '„müsste“ expresses an almost certain expectation based on knowledge. „könnte“ is only a possibility. „wäre“ on its own describes an unreal idea, not an assumption.',
            es: '„müsste“ expresa una expectativa casi segura basada en lo que se sabe. „könnte“ es solo una posibilidad. „wäre“ solo describe una idea irreal, no una suposición.',
            fr: '« müsste » exprime une attente presque certaine, fondée sur ce qu’on sait. « könnte » n’est qu’une possibilité. « wäre » seul décrit une idée irréelle, pas une supposition.',
            it: '„müsste“ esprime un’aspettativa quasi certa basata su ciò che si sa. „könnte“ è solo una possibilità. „wäre“ da solo descrive un’idea irreale, non una supposizione.',
          },
        },
        {
          id: 'g12-2-order',
          type: 'ORDERING',
          instruction: 'Bilden Sie eine sehr höfliche Bitte.',
          items: [
            { id: 'a1', text: 'Ich' },
            { id: 'a2', text: 'wäre' },
            { id: 'a3', text: 'Ihnen' },
            { id: 'a4', text: 'dankbar,' },
            { id: 'a5', text: 'wenn' },
            { id: 'a6', text: 'Sie mich' },
            { id: 'a7', text: 'zurückrufen' },
            { id: 'a8', text: 'könnten.' },
          ],
          solution: ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8'],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – Konjunktiv I in der indirekten Rede.
  {
    order: 3,
    title: 'Er sagte, er sei krank',
    subtitle: 'Konjunktiv I und indirekte Rede',
    estimatedMinutes: 31,
    content: {
      version: v,
      blocks: [
        { id: 'g12-3-h1', type: 'HEADING', level: 1, text: 'Er sagte, er sei krank' },
        {
          id: 'g12-3-intro',
          type: 'TEXT',
          text: 'Wer in Nachrichten, Berichten oder wissenschaftlichen Texten wiedergibt, was jemand gesagt hat, benutzt den Konjunktiv I. Er zeigt: Das ist nicht meine Aussage, sondern ihre – ich gebe sie nur weiter. „Die Ministerin erklärte, die Lage sei stabil.“ Im Gespräch hört man stattdessen meist den Indikativ oder „würde“.',
          translations: {
            en: 'In news, reports or academic texts, anyone reporting what someone said uses the Konjunktiv I. It signals: this isn’t my statement but theirs – I’m just passing it on. „Die Ministerin erklärte, die Lage sei stabil.“ In conversation you usually hear the indicative or „würde“ instead.',
            es: 'Quien reproduce en noticias, informes o textos científicos lo que alguien dijo, usa el Konjunktiv I. Indica: esta no es mi afirmación, sino la suya; yo solo la transmito. „Die Ministerin erklärte, die Lage sei stabil.“ En la conversación se oye en cambio casi siempre el indicativo o „würde“.',
            fr: 'Dans les informations, les rapports ou les textes scientifiques, on rapporte les propos de quelqu’un au Konjunktiv I. Il signale : ce n’est pas mon affirmation, mais la sienne – je ne fais que la transmettre. « Die Ministerin erklärte, die Lage sei stabil. » À l’oral, on entend plutôt l’indicatif ou « würde ».',
            it: 'Chi nei notiziari, nelle relazioni o nei testi scientifici riferisce ciò che qualcuno ha detto usa il Konjunktiv I. Segnala: non è una mia affermazione, ma sua – io la riporto soltanto. „Die Ministerin erklärte, die Lage sei stabil.“ Nella conversazione si sente invece di solito l’indicativo o „würde“.',
          },
        },
        {
          id: 'g12-3-info-formen',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Die Formen des Konjunktivs I',
          text: 'Man nimmt den Stamm des Infinitivs und hängt die Endungen -e, -est, -e, -en, -et, -en an. Wirklich gebraucht wird vor allem die 3. Person Singular (er habe, er komme, er könne). „sein“ ist unregelmäßig und hat eine eigene Form in allen Personen. Für die Vergangenheit steht „habe/sei“ + Partizip II, für die Zukunft „werde“ + Infinitiv.',
          translations: {
            en: {
              title: 'The forms of the Konjunktiv I',
              text: 'Take the infinitive stem and add the endings -e, -est, -e, -en, -et, -en. In practice it’s mainly the 3rd person singular that’s used (er habe, er komme, er könne). „sein“ is irregular and has its own form in every person. For the past use „habe/sei“ + past participle, for the future „werde“ + infinitive.',
            },
            es: {
              title: 'Las formas del Konjunktiv I',
              text: 'Se toma la raíz del infinitivo y se añaden las terminaciones -e, -est, -e, -en, -et, -en. En la práctica se usa sobre todo la 3.ª persona del singular (er habe, er komme, er könne). „sein“ es irregular y tiene forma propia en todas las personas. Para el pasado se usa „habe/sei“ + participio II; para el futuro, „werde“ + infinitivo.',
            },
            fr: {
              title: 'Les formes du Konjunktiv I',
              text: 'On prend le radical de l’infinitif et on ajoute les terminaisons -e, -est, -e, -en, -et, -en. En pratique, on emploie surtout la 3e personne du singulier (er habe, er komme, er könne). « sein » est irrégulier et a une forme propre à toutes les personnes. Pour le passé, on utilise « habe/sei » + participe passé, pour le futur « werde » + infinitif.',
            },
            it: {
              title: 'Le forme del Konjunktiv I',
              text: 'Si prende la radice dell’infinito e si aggiungono le desinenze -e, -est, -e, -en, -et, -en. In pratica si usa soprattutto la 3ª persona singolare (er habe, er komme, er könne). „sein“ è irregolare e ha una forma propria in tutte le persone. Per il passato si usa „habe/sei“ + participio passato, per il futuro „werde“ + infinito.',
            },
          },
          table: {
            headers: ['direkte Rede', 'indirekte Rede (Konjunktiv I)'],
            rows: [
              ['„Ich bin krank.“', 'Er sagt, er sei krank.'],
              ['„Ich habe keine Zeit.“', 'Sie sagt, sie habe keine Zeit.'],
              ['„Ich kann nicht kommen.“', 'Er sagt, er könne nicht kommen.'],
              ['„Ich habe den Brief geschrieben.“', 'Sie sagt, sie habe den Brief geschrieben.'],
              ['„Ich bin nach Hause gegangen.“', 'Er sagt, er sei nach Hause gegangen.'],
              ['„Ich werde anrufen.“', 'Sie sagt, sie werde anrufen.'],
            ],
          },
        },
        {
          id: 'g12-3-info-ersatz',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Wenn der Konjunktiv I nicht zu erkennen ist',
          text: 'In vielen Formen – vor allem im Plural – sieht der Konjunktiv I aus wie der Indikativ (sie haben, wir kommen). Dann nimmt man den Konjunktiv II: Sie sagten, sie hätten keine Zeit. Fragen werden mit „ob“ oder dem Fragewort wiedergegeben, Bitten mit „sollen“ oder „mögen“: „Kommen Sie bitte!“ → Er sagte, ich solle kommen.',
          translations: {
            en: {
              title: 'When the Konjunktiv I can’t be recognised',
              text: 'In many forms – especially the plural – the Konjunktiv I looks like the indicative (sie haben, wir kommen). Then you use the Konjunktiv II: Sie sagten, sie hätten keine Zeit. Questions are reported with „ob“ or the question word, requests with „sollen“ or „mögen“: „Kommen Sie bitte!“ → Er sagte, ich solle kommen.',
            },
            es: {
              title: 'Cuando el Konjunktiv I no se reconoce',
              text: 'En muchas formas – sobre todo en plural – el Konjunktiv I coincide con el indicativo (sie haben, wir kommen). Entonces se usa el Konjunktiv II: Sie sagten, sie hätten keine Zeit. Las preguntas se reproducen con „ob“ o con el interrogativo; las peticiones, con „sollen“ o „mögen“: „Kommen Sie bitte!“ → Er sagte, ich solle kommen.',
            },
            fr: {
              title: 'Quand le Konjunktiv I ne se distingue pas',
              text: 'Dans beaucoup de formes – surtout au pluriel – le Konjunktiv I ressemble à l’indicatif (sie haben, wir kommen). On emploie alors le Konjunktiv II : Sie sagten, sie hätten keine Zeit. Les questions se rapportent avec « ob » ou le mot interrogatif, les demandes avec « sollen » ou « mögen » : « Kommen Sie bitte! » → Er sagte, ich solle kommen.',
            },
            it: {
              title: 'Quando il Konjunktiv I non si riconosce',
              text: 'In molte forme – soprattutto al plurale – il Konjunktiv I è uguale all’indicativo (sie haben, wir kommen). Allora si usa il Konjunktiv II: Sie sagten, sie hätten keine Zeit. Le domande si riportano con „ob“ o con l’interrogativo, le richieste con „sollen“ o „mögen“: „Kommen Sie bitte!“ → Er sagte, ich solle kommen.',
            },
          },
        },
        {
          id: 'g12-3-cloze',
          type: 'CLOZE',
          instruction: 'Geben Sie die Aussagen in der indirekten Rede wieder.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Der Trainer: „Die Mannschaft ist gut vorbereitet.“ → Der Trainer sagte, die Mannschaft ' },
            { kind: 'GAP', gapId: 'i1', solution: ['sei'], width: 5 },
            { kind: 'TEXT', text: ' gut vorbereitet.\n2. Die Sprecherin: „Der Zug hat eine Stunde Verspätung.“ → Die Sprecherin teilte mit, der Zug ' },
            { kind: 'GAP', gapId: 'i2', solution: ['habe'], width: 5 },
            { kind: 'TEXT', text: ' eine Stunde Verspätung.\n3. Die Forscher: „Wir haben ein neues Medikament entwickelt.“ → Die Forscher erklärten, sie ' },
            { kind: 'GAP', gapId: 'i3', solution: ['hätten', 'haetten'], width: 7 },
            { kind: 'TEXT', text: ' ein neues Medikament entwickelt.\n4. Der Zeuge: „Ich bin um zehn Uhr nach Hause gekommen.“ → Der Zeuge gab an, er ' },
            { kind: 'GAP', gapId: 'i4', solution: ['sei'], width: 5 },
            { kind: 'TEXT', text: ' um zehn Uhr nach Hause gekommen.\n5. Der Bürgermeister: „Die Stadt kann das nicht bezahlen.“ → Der Bürgermeister betonte, die Stadt ' },
            { kind: 'GAP', gapId: 'i5', solution: ['könne', 'koenne'], width: 6 },
            { kind: 'TEXT', text: ' das nicht bezahlen.\n6. Die Ärztin: „Nehmen Sie die Tabletten dreimal täglich!“ → Die Ärztin sagte, ich ' },
            { kind: 'GAP', gapId: 'i6', solution: ['solle'], width: 6 },
            { kind: 'TEXT', text: ' die Tabletten dreimal täglich nehmen.' },
          ],
        },
        {
          id: 'g12-3-choice',
          type: 'CHOICE',
          instruction: 'Welche Sätze sind korrekte indirekte Rede? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'c1', text: 'Die Kunden beschwerten sich, sie hätten zu lange gewartet.' },
            { id: 'c2', text: 'Die Kunden beschwerten sich, sie haben zu lange gewartet.' },
            { id: 'c3', text: 'Der Journalist fragte, ob die Regierung davon gewusst habe.' },
            { id: 'c4', text: 'Der Journalist fragte, hat die Regierung davon gewusst.' },
          ],
          solution: ['c1', 'c3'],
          explanation:
            '„sie haben“ sieht im Konjunktiv I aus wie im Indikativ – deshalb der Konjunktiv II „hätten“. Eine Ja/Nein-Frage wird in der indirekten Rede mit „ob“ eingeleitet, das Verb steht am Ende.',
          explanationTranslations: {
            en: '„sie haben“ looks the same in the Konjunktiv I and the indicative – hence the Konjunktiv II „hätten“. A yes/no question is introduced with „ob“ in reported speech, with the verb at the end.',
            es: '„sie haben“ en Konjunktiv I es igual que en indicativo; por eso se usa el Konjunktiv II „hätten“. Una pregunta de sí/no se introduce en estilo indirecto con „ob“ y el verbo va al final.',
            fr: '« sie haben » est identique au Konjunktiv I et à l’indicatif – d’où le Konjunktiv II « hätten ». Une question fermée est introduite au discours indirect par « ob », avec le verbe à la fin.',
            it: '„sie haben“ al Konjunktiv I è uguale all’indicativo – per questo si usa il Konjunktiv II „hätten“. Una domanda sì/no nel discorso indiretto si introduce con „ob“ e il verbo va alla fine.',
          },
        },
        {
          id: 'g12-3-match',
          type: 'MATCHING',
          instruction: 'Welche indirekte Rede passt zur direkten Rede?',
          left: [
            { id: 'l1', text: '„Ich komme morgen.“' },
            { id: 'l2', text: '„Ich kam gestern.“' },
            { id: 'l3', text: '„Kommst du morgen?“' },
            { id: 'l4', text: '„Komm morgen!“' },
          ],
          right: [
            { id: 'r1', text: 'Er sagt, er komme morgen.' },
            { id: 'r2', text: 'Er sagt, er sei gestern gekommen.' },
            { id: 'r3', text: 'Er fragt, ob ich morgen komme.' },
            { id: 'r4', text: 'Er sagt, ich solle morgen kommen.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'g12-3-writing',
          type: 'WRITING',
          instruction: 'Eine Pressemeldung',
          prompt:
            'Auf einer Pressekonferenz hat die Leiterin des Stadtmuseums gesagt: „Das Museum ist ab Juni wieder geöffnet. Wir haben zwei Jahre lang renoviert. Die neue Ausstellung zeigt die Geschichte der Stadt. Kinder haben freien Eintritt. Wir hoffen auf viele Besucher.“ Schreiben Sie eine kurze Zeitungsmeldung, in der Sie diese Aussagen in indirekter Rede wiedergeben. Ergänzen Sie einen Satz, in dem Sie eine irreale Bedingung oder eine höfliche Bitte verwenden.',
          minWords: 60,
          maxWords: 150,
          aiFeedback: true,
          sampleAnswer:
            'Stadtmuseum öffnet im Juni\n\nDie Leiterin des Stadtmuseums hat am Dienstag angekündigt, das Museum sei ab Juni wieder geöffnet. Man habe zwei Jahre lang renoviert. Die neue Ausstellung zeige die Geschichte der Stadt, und Kinder hätten freien Eintritt. Sie hoffe auf viele Besucher, sagte die Leiterin. Wäre die Renovierung nicht so teuer geworden, hätte das Museum schon im letzten Herbst öffnen können.',
        },
      ],
    },
  },
];
