import type { UnitSeed } from './chapter-beginner-1';

/**
 * Advanced, Kapitel 1: „Sprache und Denken“ (C1, Kapitel 1)
 *
 * Fünf Seiten. Der Advanced-Band beginnt mit dem, was bisher nur Werkzeug
 * war: der Sprache selbst. Im Mittelpunkt stehen die Modalpartikeln – die
 * kleinen Wörter wie „doch“, „ja“, „mal“, „eben“, die in keinem
 * Grammatikkapitel ganz aufgehen und doch darüber entscheiden, ob ein Satz
 * freundlich, ungeduldig oder vorwurfsvoll klingt.
 *
 * Aufbau: Seite 1 liest einen Sachtext über Sprache und Wahrnehmung und legt
 * den Wortschatz der Sprachreflexion. Seiten 2 und 3 behandeln die
 * Modalpartikeln in zwei Gruppen. Seite 4 geht an feine
 * Bedeutungsunterschiede zwischen ähnlichen Wörtern, Seite 5 an Sprachwandel
 * und lässt einen eigenen Text schreiben.
 *
 * Einsprachig deutsch wie der ganze Advanced-Band. Die Debatte um
 * geschlechtergerechte Sprache wird beschrieben, nicht entschieden: Geübt
 * wird, die Positionen wiederzugeben. Sämtliche Texte sind eigenständig
 * verfasst.
 */
const v = 1;

export const ADVANCED_1_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Sprache und Wahrnehmung; Wortschatz der Sprachreflexion.
  {
    order: 1,
    title: 'Prägt die Sprache unser Denken?',
    subtitle: 'Über Sprache nachdenken',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'a1-1-h1', type: 'HEADING', level: 1, text: 'Prägt die Sprache unser Denken?' },
        {
          id: 'a1-1-text',
          type: 'TEXT',
          text: 'Sprechen wir, wie wir denken – oder denken wir, wie wir sprechen?\n\nDie Frage ist alt, und lange wurde sie in ihrer stärksten Form beantwortet: Die Sprache bestimme das Denken so vollständig, dass Sprecher verschiedener Sprachen in verschiedenen Welten lebten. Diese These gilt heute als widerlegt. Wer kein Wort für „Schadenfreude“ hat, kann das Gefühl trotzdem empfinden und beschreiben.\n\nEine schwächere Fassung hat sich dagegen in zahlreichen Experimenten bestätigt: Sprache lenkt die Aufmerksamkeit. Sprecherinnen und Sprecher von Sprachen, die Himmelsrichtungen statt „links“ und „rechts“ verwenden, orientieren sich auch ohne Kompass erstaunlich sicher. Und wer eine Sprache spricht, die grammatisch zwischen „der Brücke“ und „die Brücke“ unterscheidet, beschreibt denselben Gegenstand mit leicht anderen Adjektiven.\n\nFür Lernende ist das mehr als eine akademische Frage. Eine neue Sprache zu lernen heißt auch, auf Dinge zu achten, die man vorher übersehen hat – im Deutschen etwa darauf, ob etwas „schon“ oder „erst“ geschehen ist.',
        },
        {
          id: 'a1-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: über Sprache sprechen',
          items: [
            {
              term: 'Wahrnehmung',
              article: 'die',
              translations: { en: 'perception', es: 'la percepción', fr: 'la perception', it: 'la percezione' },
            },
            {
              term: 'prägen',
              translations: { en: 'to shape, to influence', es: 'marcar, moldear', fr: 'marquer, façonner', it: 'plasmare, influenzare' },
              example: 'Die Muttersprache prägt, worauf wir achten.',
            },
            {
              term: 'Bedeutung',
              article: 'die',
              plural: 'die Bedeutungen',
              translations: { en: 'meaning', es: 'el significado', fr: 'le sens', it: 'il significato' },
            },
            {
              term: 'Nuance',
              article: 'die',
              plural: 'die Nuancen',
              translations: { en: 'nuance', es: 'el matiz', fr: 'la nuance', it: 'la sfumatura' },
            },
            {
              term: 'Sprachgebrauch',
              article: 'der',
              translations: { en: 'language use, usage', es: 'el uso lingüístico', fr: 'l’usage linguistique', it: 'l’uso linguistico' },
            },
            {
              term: 'Muttersprachler',
              article: 'der',
              plural: 'die Muttersprachler',
              translations: { en: 'native speaker', es: 'el hablante nativo', fr: 'le locuteur natif', it: 'il madrelingua' },
            },
            {
              term: 'widerlegen',
              translations: { en: 'to refute, to disprove', es: 'refutar', fr: 'réfuter', it: 'confutare' },
            },
            {
              term: 'sich bestätigen',
              translations: { en: 'to be confirmed', es: 'confirmarse', fr: 'se confirmer', it: 'confermarsi' },
            },
            {
              term: 'Aufmerksamkeit lenken',
              translations: { en: 'to direct attention', es: 'dirigir la atención', fr: 'diriger l’attention', it: 'dirigere l’attenzione' },
            },
            {
              term: 'sprachlich',
              translations: { en: 'linguistic', es: 'lingüístico', fr: 'linguistique', it: 'linguistico' },
            },
          ],
        },
        {
          id: 'a1-1-choice',
          type: 'CHOICE',
          instruction: 'Lesen Sie den Text.',
          question: 'Welche Aussage gibt die Position des Textes wieder?',
          multiple: false,
          options: [
            { id: 'c1', text: 'Die Sprache bestimmt vollständig, was wir denken können.' },
            { id: 'c2', text: 'Die Sprache lenkt, worauf wir achten, bestimmt aber nicht, was wir denken können.' },
            { id: 'c3', text: 'Sprache und Denken haben nichts miteinander zu tun.' },
            { id: 'c4', text: 'Nur wer ein Wort für ein Gefühl hat, kann es empfinden.' },
          ],
          solution: ['c2'],
          explanation:
            'Der Text unterscheidet eine starke These (widerlegt) und eine schwache (bestätigt). Das Beispiel „Schadenfreude“ zeigt, dass man ein Gefühl ohne eigenes Wort empfinden kann.',
        },
        {
          id: 'a1-1-info-thesen',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Thesen wiedergeben',
          text: 'Wer über eine wissenschaftliche Frage schreibt, gibt oft Positionen wieder, die er nicht teilt. Das Deutsche hat dafür eigene Mittel: den Konjunktiv I („Die Sprache bestimme das Denken“), Verben mit Distanz („behaupten“, „annehmen“) und Wendungen wie „gilt als“ oder „der These zufolge“. Mehr dazu in Kapitel 2.',
          table: {
            headers: ['Mittel', 'Beispiel'],
            rows: [
              ['Konjunktiv I', 'Die Sprache bestimme das Denken.'],
              ['gelten als', 'Diese These gilt als widerlegt.'],
              ['zufolge (+ Dat., nachgestellt)', 'Der These zufolge lebten Sprecher in verschiedenen Welten.'],
              ['sich bestätigen', 'Eine schwächere Fassung hat sich bestätigt.'],
            ],
          },
        },
        {
          id: 'a1-1-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die passenden Wörter.',
          wordBank: ['Wahrnehmung', 'widerlegt', 'bestätigt', 'prägt', 'Nuancen'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Die starke These gilt heute als ' },
            { kind: 'GAP', gapId: 'g1', solution: ['widerlegt'], width: 10 },
            { kind: 'TEXT', text: '. Eine schwächere Fassung hat sich dagegen ' },
            { kind: 'GAP', gapId: 'g2', solution: ['bestätigt'], width: 10 },
            { kind: 'TEXT', text: ': Die Sprache ' },
            { kind: 'GAP', gapId: 'g3', solution: ['prägt'], width: 7 },
            { kind: 'TEXT', text: ' unsere ' },
            { kind: 'GAP', gapId: 'g4', solution: ['Wahrnehmung'], width: 12 },
            { kind: 'TEXT', text: '. Wer eine Sprache lernt, achtet auf ' },
            { kind: 'GAP', gapId: 'g5', solution: ['Nuancen'], width: 8 },
            { kind: 'TEXT', text: ', die er vorher übersehen hat.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – Modalpartikeln I: doch, ja, mal, denn.
  {
    order: 2,
    title: 'Kleine Wörter, große Wirkung',
    subtitle: 'Modalpartikeln: doch, ja, mal, denn',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'a1-2-h1', type: 'HEADING', level: 1, text: 'Kleine Wörter, große Wirkung' },
        {
          id: 'a1-2-intro',
          type: 'TEXT',
          text: '„Komm her.“ – „Komm doch her.“ – „Komm mal her.“ – „Komm ja her!“ Viermal dieselbe Aufforderung, viermal eine andere Botschaft. Modalpartikeln verändern nicht den Inhalt eines Satzes, sondern die Haltung, mit der er gesagt wird. Wer sie weglässt, spricht korrekt, aber oft unfreundlich oder steif. Wer sie falsch einsetzt, klingt ungewollt vorwurfsvoll.',
        },
        {
          id: 'a1-2-info-partikeln',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Vier häufige Modalpartikeln',
          text: 'Modalpartikeln sind unbetont, stehen im Mittelfeld – meist direkt nach dem finiten Verb und den Pronomen – und können nicht am Satzanfang stehen. Ihre Wirkung hängt vom Satztyp ab: „doch“ im Aussagesatz erinnert an Bekanntes, im Aufforderungssatz macht es eine Bitte dringlicher oder freundlicher.',
          table: {
            headers: ['Partikel', 'Satztyp', 'Wirkung', 'Beispiel'],
            rows: [
              ['doch', 'Aussage', 'erinnert an Bekanntes, leichter Vorwurf', 'Das habe ich dir doch gesagt.'],
              ['doch', 'Aufforderung', 'ermuntert, macht dringlicher', 'Setz dich doch!'],
              ['ja', 'Aussage', 'Gemeinsames Wissen, Erstaunen', 'Das ist ja interessant.'],
              ['ja (betont)', 'Aufforderung', 'Warnung, Drohung', 'Mach das JA nicht noch mal!'],
              ['mal', 'Aufforderung', 'macht beiläufig, weniger fordernd', 'Kannst du mal kurz kommen?'],
              ['denn', 'Frage', 'Interesse, Anteilnahme; auch Ungeduld', 'Was ist denn los?'],
            ],
          },
        },
        {
          id: 'a1-2-match',
          type: 'MATCHING',
          instruction: 'Welche Wirkung hat die Partikel?',
          left: [
            { id: 'l1', text: 'Das weißt du doch!' },
            { id: 'l2', text: 'Du bist ja schon da!' },
            { id: 'l3', text: 'Gib mir mal das Salz.' },
            { id: 'l4', text: 'Wie heißt du denn?' },
          ],
          right: [
            { id: 'r1', text: 'Erinnerung an etwas Bekanntes, leichter Vorwurf' },
            { id: 'r2', text: 'Erstaunen' },
            { id: 'r3', text: 'beiläufige, freundliche Bitte' },
            { id: 'r4', text: 'freundliches Interesse' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'a1-2-dialogue',
          type: 'DIALOGUE',
          title: 'Im Büro',
          lines: [
            { speaker: 'Jonas', text: 'Hast du mal kurz Zeit?' },
            { speaker: 'Lea', text: 'Klar. Was ist denn los?' },
            { speaker: 'Jonas', text: 'Der Bericht ist noch nicht fertig. Der Chef will ihn ja heute noch haben.' },
            { speaker: 'Lea', text: 'Aber du hattest doch eine ganze Woche Zeit!' },
            { speaker: 'Jonas', text: 'Ich weiß. Hilf mir doch bitte, nur mit den Tabellen.' },
            { speaker: 'Lea', text: 'Na gut. Schick sie mir mal rüber.' },
          ],
        },
        {
          id: 'a1-2-choice',
          type: 'CHOICE',
          instruction: 'Lesen Sie den Dialog.',
          question: 'Was drückt Lea mit „Aber du hattest doch eine ganze Woche Zeit!“ aus?',
          multiple: false,
          options: [
            { id: 'd1', text: 'Sie informiert Jonas über eine neue Tatsache.' },
            { id: 'd2', text: 'Sie erinnert ihn an etwas, das beide wissen, und macht ihm einen leichten Vorwurf.' },
            { id: 'd3', text: 'Sie fragt, ob er eine Woche Zeit hatte.' },
            { id: 'd4', text: 'Sie ermuntert ihn, sich Zeit zu lassen.' },
          ],
          solution: ['d2'],
          explanation:
            '„doch“ im Aussagesatz verweist auf gemeinsames Wissen. Zusammen mit „aber“ entsteht ein Vorwurf: Du wusstest das und hast trotzdem nicht rechtzeitig angefangen.',
        },
        {
          id: 'a1-2-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie „doch“, „ja“, „mal“ oder „denn“.',
          wordBank: ['mal', 'denn', 'ja', 'doch'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Kannst du mir ' },
            { kind: 'GAP', gapId: 'p1', solution: ['mal'], hint: 'beiläufige Bitte', width: 5 },
            { kind: 'TEXT', text: ' helfen? – Was ist ' },
            { kind: 'GAP', gapId: 'p2', solution: ['denn'], hint: 'Interesse', width: 6 },
            { kind: 'TEXT', text: ' passiert? – Du siehst ' },
            { kind: 'GAP', gapId: 'p3', solution: ['ja'], hint: 'Erstaunen', width: 4 },
            { kind: 'TEXT', text: ' ganz blass aus! – Ich hab ' },
            { kind: 'GAP', gapId: 'p4', solution: ['doch'], hint: 'bekannt', width: 6 },
            { kind: 'TEXT', text: ' gesagt, dass es mir nicht gut geht.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – Modalpartikeln II: eben, halt, eigentlich, wohl, schon.
  {
    order: 3,
    title: 'Das ist eben so',
    subtitle: 'Modalpartikeln: eben, halt, eigentlich, wohl, schon',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'a1-3-h1', type: 'HEADING', level: 1, text: 'Das ist eben so' },
        {
          id: 'a1-3-intro',
          type: 'TEXT',
          text: 'Eine zweite Gruppe von Partikeln bewertet, wie sicher oder wie unvermeidlich etwas ist. „Das ist eben so“ klingt nach Schulterzucken, „Das wird wohl so sein“ nach Vermutung, „Das wird schon klappen“ nach Beruhigung. Gerade diese Partikeln unterscheiden gesprochenes Deutsch von Lehrbuchdeutsch.',
        },
        {
          id: 'a1-3-info',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Bewertende Partikeln',
          text: '„eben“ und „halt“ bedeuten fast dasselbe: Etwas ist nicht zu ändern. „halt“ ist umgangssprachlicher und vor allem im Süden verbreitet. „eigentlich“ schränkt ein oder lenkt in der Frage beiläufig auf ein neues Thema. „wohl“ drückt eine Vermutung aus, „schon“ Zuversicht oder ein Zugeständnis.',
          table: {
            headers: ['Partikel', 'Wirkung', 'Beispiel'],
            rows: [
              ['eben / halt', 'Unabänderlichkeit, Resignation', 'Dann nehmen wir eben den Bus.'],
              ['eigentlich (Aussage)', 'Einschränkung', 'Eigentlich habe ich keine Zeit, aber …'],
              ['eigentlich (Frage)', 'beiläufiger Themenwechsel', 'Wie alt bist du eigentlich?'],
              ['wohl', 'Vermutung', 'Sie ist wohl krank.'],
              ['schon', 'Zuversicht', 'Das wird schon klappen.'],
              ['schon (… aber)', 'Zugeständnis', 'Das ist schon richtig, aber …'],
            ],
          },
        },
        {
          id: 'a1-3-match',
          type: 'MATCHING',
          instruction: 'Welche Haltung drückt der Satz aus?',
          left: [
            { id: 'l1', text: 'Der Zug ist weg. Dann fahren wir halt morgen.' },
            { id: 'l2', text: 'Er ist wohl schon nach Hause gegangen.' },
            { id: 'l3', text: 'Keine Sorge, du findest schon eine Wohnung.' },
            { id: 'l4', text: 'Woher kennt ihr euch eigentlich?' },
          ],
          right: [
            { id: 'r1', text: 'Man kann es nicht ändern.' },
            { id: 'r2', text: 'Vermutung' },
            { id: 'r3', text: 'Beruhigung, Zuversicht' },
            { id: 'r4', text: 'beiläufige neue Frage' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'a1-3-info-stellung',
          type: 'INFO',
          variant: 'TIP',
          title: 'Wohin mit der Partikel?',
          text: 'Modalpartikeln stehen im Mittelfeld: nach dem konjugierten Verb und nach unbetonten Pronomen, aber vor dem, was neu oder wichtig ist. „Ich habe es dir doch gestern gesagt“ – nicht „Ich habe doch es dir gestern gesagt“. Treffen mehrere zusammen, gilt eine feste Reihenfolge: „ja doch“, „doch mal“, „denn eigentlich“.',
          table: {
            headers: ['Richtig', 'Falsch'],
            rows: [
              ['Ich habe es dir doch gesagt.', 'Doch ich habe es dir gesagt.'],
              ['Komm doch mal vorbei!', 'Komm mal doch vorbei!'],
              ['Was machst du denn eigentlich?', 'Was machst du eigentlich denn?'],
            ],
          },
        },
        {
          id: 'a1-3-ordering',
          type: 'ORDERING',
          instruction: 'Bringen Sie die Wörter in die richtige Reihenfolge.',
          items: [
            { id: 'o1', text: 'Kommt' },
            { id: 'o2', text: 'ihr' },
            { id: 'o3', text: 'doch' },
            { id: 'o4', text: 'mal' },
            { id: 'o5', text: 'am Wochenende vorbei!' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5'],
        },
        {
          id: 'a1-3-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die passende Partikel.',
          wordBank: ['eben', 'wohl', 'schon', 'eigentlich'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Das Restaurant hat zu? Dann kochen wir ' },
            { kind: 'GAP', gapId: 'q1', solution: ['eben', 'halt'], hint: 'nicht zu ändern', width: 6 },
            { kind: 'TEXT', text: ' selbst. Anna kommt nicht – sie hat es ' },
            { kind: 'GAP', gapId: 'q2', solution: ['wohl'], hint: 'Vermutung', width: 5 },
            { kind: 'TEXT', text: ' vergessen. Aber das wird ' },
            { kind: 'GAP', gapId: 'q3', solution: ['schon'], hint: 'Zuversicht', width: 6 },
            { kind: 'TEXT', text: ' ein schöner Abend. Was wolltest du ' },
            { kind: 'GAP', gapId: 'q4', solution: ['eigentlich'], hint: 'beiläufige Frage', width: 11 },
            { kind: 'TEXT', text: ' kochen?' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – feine Bedeutungsunterschiede.
  {
    order: 4,
    title: 'Scheinbar oder anscheinend?',
    subtitle: 'Feine Bedeutungsunterschiede',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'a1-4-h1', type: 'HEADING', level: 1, text: 'Scheinbar oder anscheinend?' },
        {
          id: 'a1-4-intro',
          type: 'TEXT',
          text: 'Auf C1-Niveau sind es selten die großen Fehler, die auffallen, sondern die kleinen Verwechslungen. „Er ist scheinbar krank“ und „Er ist anscheinend krank“ sehen fast gleich aus – und sagen das Gegenteil. Auch viele Muttersprachler verwechseln solche Paare; wer sie sicher unterscheidet, schreibt präziser als der Durchschnitt.',
        },
        {
          id: 'a1-4-info-paare',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Paare, die man leicht verwechselt',
          text: '„scheinbar“ heißt: Es sieht so aus, ist aber nicht so. „anscheinend“ heißt: Es sieht so aus, und es ist wahrscheinlich so. „das Gleiche“ meint ein Exemplar derselben Art, „dasselbe“ ein und dasselbe Ding – in der Umgangssprache wird der Unterschied allerdings oft nicht gemacht.',
          table: {
            headers: ['Paar', 'Unterschied', 'Beispiel'],
            rows: [
              ['scheinbar / anscheinend', 'nur dem Anschein nach / vermutlich', 'Die Aufgabe war nur scheinbar leicht. / Er ist anscheinend krank.'],
              ['das Gleiche / dasselbe', 'gleiche Art / identisch', 'Wir haben das gleiche Auto. / Wir fahren dasselbe Auto.'],
              ['wieder / wider', 'noch einmal / gegen', 'wiederholen / widersprechen'],
              ['effektiv / effizient', 'wirksam / mit wenig Aufwand wirksam', 'Die Maßnahme ist effektiv, aber teuer.'],
              ['sinnvoll / sinnlich', 'vernünftig / die Sinne betreffend', 'ein sinnvoller Vorschlag / ein sinnlicher Duft'],
            ],
          },
        },
        {
          id: 'a1-4-choice',
          type: 'CHOICE',
          instruction: 'Wählen Sie die richtige Deutung.',
          question: '„Der Minister war scheinbar gut vorbereitet.“ Was bedeutet der Satz?',
          multiple: false,
          options: [
            { id: 'e1', text: 'Der Minister war vermutlich gut vorbereitet.' },
            { id: 'e2', text: 'Der Minister wirkte gut vorbereitet, war es in Wirklichkeit aber nicht.' },
            { id: 'e3', text: 'Der Minister war offensichtlich sehr gut vorbereitet.' },
            { id: 'e4', text: 'Der Minister hatte keine Zeit, sich vorzubereiten.' },
          ],
          solution: ['e2'],
          explanation:
            '„scheinbar“ markiert einen falschen Anschein. Wer „vermutlich“ meint, schreibt „anscheinend“. Im Alltag wird „scheinbar“ oft auch im Sinn von „anscheinend“ gebraucht, in einem sorgfältigen Text aber nicht.',
        },
        {
          id: 'a1-4-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie das passende Wort.',
          wordBank: ['anscheinend', 'scheinbar', 'selben', 'widersprechen', 'effizient'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Die Straße ist nass, es hat ' },
            { kind: 'GAP', gapId: 'k1', solution: ['anscheinend'], width: 12 },
            { kind: 'TEXT', text: ' geregnet. Die Lösung war nur ' },
            { kind: 'GAP', gapId: 'k2', solution: ['scheinbar'], width: 10 },
            { kind: 'TEXT', text: ' einfach. Wir wohnen seit Jahren im ' },
            { kind: 'GAP', gapId: 'k3', solution: ['selben', 'gleichen'], width: 8 },
            { kind: 'TEXT', text: ' Haus. Ich muss Ihnen leider ' },
            { kind: 'GAP', gapId: 'k4', solution: ['widersprechen'], width: 14 },
            { kind: 'TEXT', text: '. Das neue Verfahren ist schneller und billiger, also ' },
            { kind: 'GAP', gapId: 'k5', solution: ['effizient'], width: 10 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'a1-4-info-konnotation',
          type: 'INFO',
          variant: 'TIP',
          title: 'Denotation und Konnotation',
          text: 'Zwei Wörter können dasselbe bezeichnen (Denotation) und trotzdem Verschiedenes mitschwingen lassen (Konnotation). „sparsam“ und „geizig“ beschreiben dasselbe Verhalten – das eine lobend, das andere abwertend. Auf diese Wertungen achten gute Leser besonders in Kommentaren und Werbung.',
          table: {
            headers: ['aufwertend', 'neutral', 'abwertend'],
            rows: [
              ['sparsam', 'wenig ausgebend', 'geizig'],
              ['beharrlich', 'ausdauernd', 'stur'],
              ['schlank', 'dünn', 'mager'],
              ['Traditionsbewusstsein', 'Festhalten am Alten', 'Rückständigkeit'],
            ],
          },
        },
        {
          id: 'a1-4-match',
          type: 'MATCHING',
          instruction: 'Ordnen Sie jedem abwertenden Wort ein neutrales oder aufwertendes zu.',
          left: [
            { id: 'm1', text: 'geizig' },
            { id: 'm2', text: 'stur' },
            { id: 'm3', text: 'neugierig (im Sinne von aufdringlich)' },
            { id: 'm4', text: 'mager' },
          ],
          right: [
            { id: 'n1', text: 'sparsam' },
            { id: 'n2', text: 'beharrlich' },
            { id: 'n3', text: 'wissbegierig' },
            { id: 'n4', text: 'schlank' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'n1' },
            { leftId: 'm2', rightId: 'n2' },
            { leftId: 'm3', rightId: 'n3' },
            { leftId: 'm4', rightId: 'n4' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – Sprachwandel; Wiederholung und Schreibaufgabe.
  {
    order: 5,
    title: 'Sprache im Wandel',
    subtitle: 'Positionen wiedergeben und das Kapitel wiederholen',
    estimatedMinutes: 32,
    content: {
      version: v,
      blocks: [
        { id: 'a1-5-h1', type: 'HEADING', level: 1, text: 'Sprache im Wandel' },
        {
          id: 'a1-5-text',
          type: 'TEXT',
          text: 'Jede lebende Sprache verändert sich, und fast jede Veränderung wird zunächst beklagt. Im 18. Jahrhundert ärgerte man sich über französische Wörter, heute über englische. Dass „wegen“ zunehmend mit dem Dativ gebraucht wird, gilt den einen als Verfall, den anderen als normaler Wandel.\n\nBesonders lebhaft wird seit einigen Jahren über geschlechtergerechte Sprache diskutiert. Befürworter argumentieren, das generische Maskulinum („die Lehrer“) lasse Frauen gedanklich verschwinden; Studien zeigen, dass bei maskulinen Formen tatsächlich häufiger an Männer gedacht wird. Kritiker halten dagegen, Formen wie „Lehrer*innen“ erschwerten das Lesen und würden von einer Mehrheit abgelehnt. Viele Texte weichen inzwischen auf Doppelformen („Lehrerinnen und Lehrer“) oder neutrale Wörter („Lehrkräfte“) aus.',
        },
        {
          id: 'a1-5-info-varianten',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'Formen im Überblick',
          text: 'Welche Form man wählt, hängt vom Kontext ab: Behörden und Hochschulen haben oft eigene Leitfäden, Zeitungen eigene Regeln. Der Rat für deutsche Rechtschreibung hat Sonderzeichen wie das Sternchen bisher nicht in das amtliche Regelwerk aufgenommen.',
          table: {
            headers: ['Form', 'Beispiel', 'Verbreitung'],
            rows: [
              ['generisches Maskulinum', 'die Lehrer', 'traditionell, umstritten'],
              ['Doppelform', 'Lehrerinnen und Lehrer', 'weit akzeptiert, aber lang'],
              ['neutrale Form', 'Lehrkräfte, Studierende', 'häufig in Behörden und Hochschulen'],
              ['Sonderzeichen', 'Lehrer*innen, Lehrer:innen', 'verbreitet, nicht im amtlichen Regelwerk'],
            ],
          },
        },
        {
          id: 'a1-5-match',
          type: 'MATCHING',
          instruction: 'Wer vertritt welche Position?',
          left: [
            { id: 'l1', text: 'Das generische Maskulinum lässt Frauen gedanklich verschwinden.' },
            { id: 'l2', text: 'Sonderzeichen erschweren das Lesen.' },
            { id: 'l3', text: 'Neutrale Wörter wie „Lehrkräfte“ umgehen das Problem.' },
          ],
          right: [
            { id: 'r1', text: 'Befürworter geschlechtergerechter Sprache' },
            { id: 'r2', text: 'Kritiker' },
            { id: 'r3', text: 'ein häufiger Kompromiss' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
          ],
        },
        {
          id: 'a1-5-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die Zusammenfassung des Kapitels.',
          wordBank: ['Aufmerksamkeit', 'Haltung', 'Mittelfeld', 'anscheinend', 'Konnotation', 'Wandel'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Sprache bestimmt nicht das Denken, aber sie lenkt die ' },
            { kind: 'GAP', gapId: 'z1', solution: ['Aufmerksamkeit'], width: 15 },
            { kind: 'TEXT', text: '. Modalpartikeln verändern nicht den Inhalt, sondern die ' },
            { kind: 'GAP', gapId: 'z2', solution: ['Haltung'], width: 8 },
            { kind: 'TEXT', text: ' eines Satzes; sie stehen im ' },
            { kind: 'GAP', gapId: 'z3', solution: ['Mittelfeld'], width: 11 },
            { kind: 'TEXT', text: '. Wer „vermutlich“ meint, schreibt „' },
            { kind: 'GAP', gapId: 'z4', solution: ['anscheinend'], width: 12 },
            { kind: 'TEXT', text: '“. „geizig“ und „sparsam“ unterscheiden sich in der ' },
            { kind: 'GAP', gapId: 'z5', solution: ['Konnotation'], width: 12 },
            { kind: 'TEXT', text: '. Und jede lebende Sprache ist im ' },
            { kind: 'GAP', gapId: 'z6', solution: ['Wandel'], width: 7 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'a1-5-writing',
          type: 'WRITING',
          instruction: 'Schreiben Sie einen Text.',
          prompt:
            'Eine Kulturzeitschrift bittet Menschen, die Deutsch als Fremdsprache gelernt haben, um einen kurzen Beitrag: „Was mir die deutsche Sprache beigebracht hat“. Schreiben Sie 180 bis 250 Wörter. Beschreiben Sie mindestens eine Besonderheit des Deutschen (zum Beispiel die Modalpartikeln oder die Wortbildung), die Ihre Wahrnehmung verändert hat, und nehmen Sie Stellung zu der Frage, ob Sprache das Denken prägt.',
          minWords: 180,
          maxWords: 260,
          aiFeedback: true,
          sampleAnswer:
            'Was mir die deutsche Sprache beigebracht hat\n\nAls ich anfing, Deutsch zu lernen, hielt ich Wörter wie „doch“, „mal“ oder „halt“ für überflüssig. In meinem Lehrbuch kamen sie kaum vor, und die Sätze funktionierten auch ohne sie. Erst nach einigen Monaten in Leipzig merkte ich, dass ich unfreundlich klang. „Gib mir das Salz“ ist korrekt, aber es ist ein Befehl. „Gib mir mal das Salz“ ist eine Bitte unter Freunden.\n\nDiese kleinen Wörter haben meine Wahrnehmung verändert. Ich achte heute nicht nur darauf, was jemand sagt, sondern wie er es sagt: ob er mich an etwas erinnert, ob er sich wundert oder ob er resigniert. In meiner Muttersprache übernimmt diese Aufgabe vor allem die Intonation, und ich hatte nie bewusst darüber nachgedacht.\n\nPrägt die Sprache also das Denken? In der starken Form glaube ich das nicht. Ich konnte auch vorher Ungeduld und Freundlichkeit unterscheiden. Aber das Deutsche hat meine Aufmerksamkeit auf Nuancen gelenkt, die ich vorher übersehen habe. Insofern hat es mir nicht beigebracht, anders zu denken, sondern genauer hinzuhören.\n\nWer eine Sprache lernt, lernt eben nicht nur Wörter, sondern auch, worauf ihre Sprecher achten. Das ist vielleicht der schönste Nebeneffekt.',
        },
      ],
    },
  },
];
