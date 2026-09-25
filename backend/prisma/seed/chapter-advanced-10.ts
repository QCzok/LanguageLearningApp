import type { UnitSeed } from './chapter-beginner-1';

/**
 * Advanced, Kapitel 10: „Idiomatik und Nuancen“ (C2, Kapitel 4)
 *
 * Fünf Seiten. Idiomatik ist der Bereich, in dem man auf C2 noch am
 * ehesten auffällt: weniger, weil man Redewendungen nicht kennt, als weil
 * man sie leicht verbiegt oder im falschen Moment einsetzt. Dazu kommen die
 * Kollokationen – die festen Wortpartner, die kein Wörterbuch logisch
 * erklärt.
 *
 * Aufbau: Seite 1 verbreitete Redewendungen, Seite 2 Kollokationen, Seite 3
 * Konnotationen und Synonyme, Seite 4 Sprichwörter und regionale
 * Umgangssprache, Seite 5 die Frage, wann Idiomatik passt – mit
 * Schreibaufgabe.
 *
 * Regional gebundene Ausdrücke sind gekennzeichnet. Sämtliche Texte sind
 * eigenständig verfasst.
 */
const v = 1;

export const ADVANCED_10_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Redewendungen.
  {
    order: 1,
    title: 'Da steppt der Bär',
    subtitle: 'Redewendungen treffsicher verwenden',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'a10-1-h1', type: 'HEADING', level: 1, text: 'Da steppt der Bär' },
        {
          id: 'a10-1-intro',
          type: 'TEXT',
          text: 'Wer „Tomaten auf den Augen hat“, ist nicht beim Augenarzt, und wer „die Katze aus dem Sack lässt“, hat kein Haustier befreit. Redewendungen bedeuten mehr als die Summe ihrer Wörter – und sie sind fest: Wer „die Katze aus der Tasche lässt“, wird verstanden, klingt aber sofort nach Lehrbuch.',
        },
        {
          id: 'a10-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Verbreitete Redewendungen',
          items: [
            {
              term: 'Tomaten auf den Augen haben',
              translations: { en: 'to be blind to the obvious', es: 'no ver lo evidente', fr: 'ne pas voir ce qui crève les yeux', it: 'avere le fette di salame sugli occhi' },
            },
            {
              term: 'die Katze aus dem Sack lassen',
              translations: { en: 'to let the cat out of the bag', es: 'revelar el secreto', fr: 'vendre la mèche', it: 'vuotare il sacco' },
            },
            {
              term: 'ins Fettnäpfchen treten',
              translations: { en: 'to put one’s foot in it', es: 'meter la pata', fr: 'faire une gaffe', it: 'fare una gaffe' },
            },
            {
              term: 'jemandem auf den Keks gehen',
              translations: { en: 'to get on someone’s nerves', es: 'sacar de quicio a alguien', fr: 'taper sur les nerfs de quelqu’un', it: 'dare sui nervi a qualcuno' },
            },
            {
              term: 'etwas auf die lange Bank schieben',
              translations: { en: 'to put something off', es: 'dar largas a algo', fr: 'remettre quelque chose aux calendes grecques', it: 'rimandare qualcosa' },
            },
            {
              term: 'den Nagel auf den Kopf treffen',
              translations: { en: 'to hit the nail on the head', es: 'dar en el clavo', fr: 'mettre dans le mille', it: 'colpire nel segno' },
            },
            {
              term: 'jemandem reinen Wein einschenken',
              translations: { en: 'to tell someone the plain truth', es: 'decirle a alguien la verdad', fr: 'dire la vérité à quelqu’un', it: 'dire le cose come stanno' },
            },
            {
              term: 'Schwein haben',
              translations: { en: 'to be lucky', es: 'tener suerte', fr: 'avoir de la chance', it: 'avere fortuna' },
            },
            {
              term: 'die Nase voll haben',
              translations: { en: 'to be fed up', es: 'estar harto', fr: 'en avoir marre', it: 'averne abbastanza' },
            },
            {
              term: 'da steppt der Bär',
              translations: { en: 'it’s a wild party', es: 'hay mucha marcha', fr: 'ça va être la fête', it: 'c’è un gran movimento' },
            },
          ],
        },
        {
          id: 'a10-1-match',
          type: 'MATCHING',
          instruction: 'Welche Redewendung passt zur Situation?',
          left: [
            { id: 'l1', text: 'Sie fragen eine Kollegin nach ihrem Mann – sie hat sich gerade getrennt.' },
            { id: 'l2', text: 'Der Bus ist weg, aber ein Taxi hält direkt vor Ihnen.' },
            { id: 'l3', text: 'Ihr Bruder verrät den Namen des Babys vor der offiziellen Bekanntgabe.' },
            { id: 'l4', text: 'Sie erledigen die Steuererklärung seit Monaten nicht.' },
            { id: 'l5', text: 'Der Nachbar bohrt jeden Sonntag um sieben.' },
          ],
          right: [
            { id: 'r1', text: 'ins Fettnäpfchen treten' },
            { id: 'r2', text: 'Schwein haben' },
            { id: 'r3', text: 'die Katze aus dem Sack lassen' },
            { id: 'r4', text: 'etwas auf die lange Bank schieben' },
            { id: 'r5', text: 'jemandem auf den Keks gehen' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
            { leftId: 'l5', rightId: 'r5' },
          ],
        },
        {
          id: 'a10-1-info-fest',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Was sich ändern darf – und was nicht',
          text: 'Verb und Pronomen passen sich dem Satz an: „Er ist ins Fettnäpfchen getreten“, „Das geht mir auf den Keks“. Nomen, Präpositionen und Artikel bleiben fest. Und: Redewendungen lassen sich kaum wörtlich übersetzen. Das englische „it’s raining cats and dogs“ ist auf Deutsch „es regnet in Strömen“ oder „es gießt wie aus Eimern“.',
          table: {
            headers: ['Richtig', 'Falsch'],
            rows: [
              ['Ich habe die Nase voll.', 'Ich habe die Nase ganz.'],
              ['Er hat den Nagel auf den Kopf getroffen.', 'Er hat den Nagel in den Kopf getroffen.'],
              ['Sie schenkt ihm reinen Wein ein.', 'Sie schenkt ihm sauberen Wein ein.'],
            ],
          },
        },
        {
          id: 'a10-1-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die Redewendungen.',
          wordBank: ['Nase', 'Nagel', 'Wein', 'Tomaten', 'Bank'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Ich habe die ' },
            { kind: 'GAP', gapId: 'g1', solution: ['Nase'], width: 5 },
            { kind: 'TEXT', text: ' voll von den Ausreden! Du hast den ' },
            { kind: 'GAP', gapId: 'g2', solution: ['Nagel'], width: 6 },
            { kind: 'TEXT', text: ' auf den Kopf getroffen. Er muss ihr endlich reinen ' },
            { kind: 'GAP', gapId: 'g3', solution: ['Wein'], width: 5 },
            { kind: 'TEXT', text: ' einschenken. Hast du ' },
            { kind: 'GAP', gapId: 'g4', solution: ['Tomaten'], width: 8 },
            { kind: 'TEXT', text: ' auf den Augen? Das Schild steht direkt vor dir! Schieb das nicht auf die lange ' },
            { kind: 'GAP', gapId: 'g5', solution: ['Bank'], width: 5 },
            { kind: 'TEXT', text: '.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – Kollokationen.
  {
    order: 2,
    title: 'Eine Entscheidung treffen, nicht machen',
    subtitle: 'Kollokationen korrekt bilden',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'a10-2-h1', type: 'HEADING', level: 1, text: 'Eine Entscheidung treffen, nicht machen' },
        {
          id: 'a10-2-intro',
          type: 'TEXT',
          text: 'Auf Englisch „makes“ man eine Entscheidung, auf Deutsch „trifft“ man sie. Kollokationen sind Wortverbindungen, die sich nicht logisch ableiten lassen, sondern einfach üblich sind. Fehler in diesem Bereich sind nie wirklich missverständlich – aber sie verraten sofort, dass jemand nicht muttersprachlich spricht.',
        },
        {
          id: 'a10-2-info-kollokationen',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Typische Kollokationen',
          text: 'Besonders tückisch sind Verb-Nomen-Verbindungen, bei denen andere Sprachen ein anderes Verb verwenden. Lernen Sie Nomen deshalb immer mit ihrem Verb zusammen.',
          table: {
            headers: ['Nomen', 'Verb', 'nicht'],
            rows: [
              ['eine Entscheidung', 'treffen', 'machen'],
              ['eine Frage', 'stellen', 'fragen, machen'],
              ['einen Vortrag', 'halten', 'geben, machen'],
              ['eine Rolle', 'spielen', 'haben'],
              ['Rücksicht', 'nehmen', 'haben, geben'],
              ['einen Fehler', 'begehen / machen', 'tun'],
              ['Zähne', 'putzen', 'waschen'],
              ['starker Regen / dichter Nebel', '—', 'schwerer Regen / dicker Nebel'],
            ],
          },
        },
        {
          id: 'a10-2-match',
          type: 'MATCHING',
          instruction: 'Welches Verb gehört zum Nomen?',
          left: [
            { id: 'l1', text: 'einen Vortrag' },
            { id: 'l2', text: 'eine Frage' },
            { id: 'l3', text: 'eine Rolle' },
            { id: 'l4', text: 'einen Antrag' },
            { id: 'l5', text: 'Bescheid' },
          ],
          right: [
            { id: 'r1', text: 'halten' },
            { id: 'r2', text: 'stellen' },
            { id: 'r3', text: 'spielen' },
            { id: 'r4', text: 'einreichen' },
            { id: 'r5', text: 'geben' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
            { leftId: 'l5', rightId: 'r5' },
          ],
        },
        {
          id: 'a10-2-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie das passende Verb.',
          wordBank: ['getroffen', 'gestellt', 'gehalten', 'genommen', 'gespielt'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Die Direktorin hat die Entscheidung allein ' },
            { kind: 'GAP', gapId: 'k1', solution: ['getroffen'], width: 10 },
            { kind: 'TEXT', text: '. Auf der Versammlung wurden viele Fragen ' },
            { kind: 'GAP', gapId: 'k2', solution: ['gestellt'], width: 9 },
            { kind: 'TEXT', text: '. Ein Experte hat einen Vortrag ' },
            { kind: 'GAP', gapId: 'k3', solution: ['gehalten'], width: 9 },
            { kind: 'TEXT', text: '. Auf die Wünsche der Eltern wurde kaum Rücksicht ' },
            { kind: 'GAP', gapId: 'k4', solution: ['genommen'], width: 9 },
            { kind: 'TEXT', text: ', und das Geld hat die entscheidende Rolle ' },
            { kind: 'GAP', gapId: 'k5', solution: ['gespielt'], width: 9 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'a10-2-info-adjektiv',
          type: 'INFO',
          variant: 'TIP',
          title: 'Auch Adjektive haben feste Partner',
          text: 'Nicht nur Verben: Auch Adjektive verbinden sich bevorzugt mit bestimmten Nomen. Man spricht von „starkem Regen“, „dichtem Verkehr“, „hohem Fieber“, „schwerer Krankheit“ und „großem Hunger“. „Hoher Hunger“ oder „schwerer Regen“ versteht jeder – aber niemand sagt es.',
        },
        {
          id: 'a10-2-choice',
          type: 'CHOICE',
          instruction: 'Welche Verbindung ist üblich?',
          question: 'Wählen Sie.',
          multiple: false,
          options: [
            { id: 'c1', text: 'Sie hat schweres Fieber.' },
            { id: 'c2', text: 'Sie hat hohes Fieber.' },
            { id: 'c3', text: 'Sie hat starkes Fieber.' },
            { id: 'c4', text: 'Sie hat großes Fieber.' },
          ],
          solution: ['c2'],
          explanation:
            'Fieber ist „hoch“, weil man es in Grad misst. Die anderen Verbindungen sind verständlich, aber im Deutschen nicht üblich.',
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – Konnotationen.
  {
    order: 3,
    title: 'Sparsam oder geizig?',
    subtitle: 'Konnotationen unterscheiden',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'a10-3-h1', type: 'HEADING', level: 1, text: 'Sparsam oder geizig?' },
        {
          id: 'a10-3-intro',
          type: 'TEXT',
          text: 'In Kapitel 1 haben Sie gesehen, dass „sparsam“ und „geizig“ dasselbe Verhalten unterschiedlich bewerten. Auf C2-Niveau kommen zwei weitere Ebenen hinzu: die stilistische Färbung (ein Wort klingt veraltet, modisch oder fachsprachlich) und feine Bedeutungsunterschiede zwischen fast gleichbedeutenden Verben.',
        },
        {
          id: 'a10-3-info-reihen',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Synonymreihen',
          text: 'In jeder Reihe bezeichnen die Wörter ungefähr dasselbe, unterscheiden sich aber in Intensität, Wertung oder Stil. Wer das passende wählt, sagt genauer, was er meint.',
          table: {
            headers: ['Reihe', 'Unterschied'],
            rows: [
              ['sagen – behaupten – beteuern', 'neutral – Zweifel – Nachdruck'],
              ['gehen – schlendern – hetzen', 'neutral – langsam, entspannt – eilig'],
              ['lachen – kichern – grinsen', 'laut – leise, albern – ohne Laut'],
              ['bekommen – erhalten – kriegen', 'neutral – förmlich – umgangssprachlich'],
              ['Ärger – Wut – Zorn', 'mild – heftig – heftig, gehoben'],
            ],
          },
        },
        {
          id: 'a10-3-match',
          type: 'MATCHING',
          instruction: 'Welches Verb passt am besten?',
          left: [
            { id: 'l1', text: 'Am Sonntag ___ wir gemütlich durch die Altstadt.' },
            { id: 'l2', text: 'Wir sind zu spät und ___ zum Bahnhof.' },
            { id: 'l3', text: 'Er ___ immer wieder, er sei unschuldig.' },
            { id: 'l4', text: 'Die Kinder ___ in der letzten Reihe.' },
          ],
          right: [
            { id: 'r1', text: 'schlendern' },
            { id: 'r2', text: 'hetzen' },
            { id: 'r3', text: 'beteuert' },
            { id: 'r4', text: 'kichern' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'a10-3-choice',
          type: 'CHOICE',
          instruction: 'Welches Wort passt ins Arbeitszeugnis?',
          question: 'Frau Keller setzte ihre Ideen mit großer Ausdauer durch. Sie war …',
          multiple: false,
          options: [
            { id: 'q1', text: 'stur.' },
            { id: 'q2', text: 'dickköpfig.' },
            { id: 'q3', text: 'beharrlich und zielstrebig.' },
            { id: 'q4', text: 'rechthaberisch.' },
          ],
          solution: ['q3'],
          explanation:
            'Alle Wörter beschreiben ein ähnliches Verhalten, aber nur „beharrlich“ und „zielstrebig“ bewerten es positiv. In einem Arbeitszeugnis würden die anderen als deutliche Kritik gelesen.',
        },
        {
          id: 'a10-3-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie das Wort mit der passenden Färbung.',
          wordBank: ['erhalten', 'kriegst', 'behauptet', 'Zorn'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Förmlich: Sie ' },
            { kind: 'GAP', gapId: 'f1', solution: ['erhalten'], width: 9 },
            { kind: 'TEXT', text: ' die Unterlagen per Post. Umgangssprachlich: Die ' },
            { kind: 'GAP', gapId: 'f2', solution: ['kriegst'], width: 8 },
            { kind: 'TEXT', text: ' du morgen. Mit Zweifel: Der Hersteller ' },
            { kind: 'GAP', gapId: 'f3', solution: ['behauptet'], width: 10 },
            { kind: 'TEXT', text: ', das Gerät sei unzerbrechlich. Gehoben und heftig: Der ' },
            { kind: 'GAP', gapId: 'f4', solution: ['Zorn'], width: 5 },
            { kind: 'TEXT', text: ' des Volkes richtete sich gegen den König.' },
          ],
        },
        {
          id: 'a10-3-info-falsche-freunde',
          type: 'INFO',
          variant: 'TIP',
          title: 'Falsche Freunde',
          text: 'Manche deutschen Wörter sehen aus wie Wörter anderer Sprachen, bedeuten aber etwas anderes. Auf C2-Niveau sind es gerade diese Wörter, die noch Fehler verursachen.',
          table: {
            headers: ['Deutsch', 'bedeutet', 'nicht'],
            rows: [
              ['eventuell', 'möglicherweise', 'schließlich (engl. eventually)'],
              ['aktuell', 'gegenwärtig', 'tatsächlich (engl. actually)'],
              ['sensibel', 'empfindsam', 'vernünftig (engl. sensible)'],
              ['konsequent', 'folgerichtig, beharrlich', 'folgend (engl. consequent)'],
            ],
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – Sprichwörter und regionale Umgangssprache.
  {
    order: 4,
    title: 'Wer zuletzt lacht …',
    subtitle: 'Sprichwörter und regionale Umgangssprache',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'a10-4-h1', type: 'HEADING', level: 1, text: 'Wer zuletzt lacht …' },
        {
          id: 'a10-4-intro',
          type: 'TEXT',
          text: 'Sprichwörter sind kleine, abgeschlossene Weisheiten, oft mit Reim oder Rhythmus. Im Gespräch werden sie selten vollständig zitiert: „Wer zuletzt lacht …“ genügt, der Rest ist allen bekannt. Wer sie zu oft und vollständig verwendet, klingt allerdings schnell altmodisch oder belehrend.',
        },
        {
          id: 'a10-4-info-sprichwoerter',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'Lebendige Sprichwörter',
          text: 'Diese Sprichwörter hört man im deutschen Sprachraum bis heute regelmäßig.',
          table: {
            headers: ['Sprichwort', 'Bedeutung'],
            rows: [
              ['Wer zuletzt lacht, lacht am besten.', 'Wer am Ende gewinnt, hat recht behalten.'],
              ['Der Apfel fällt nicht weit vom Stamm.', 'Kinder ähneln ihren Eltern.'],
              ['Aller Anfang ist schwer.', 'Neues ist am Anfang mühsam.'],
              ['Morgenstund hat Gold im Mund.', 'Wer früh anfängt, erreicht viel.'],
              ['Wer A sagt, muss auch B sagen.', 'Wer etwas beginnt, muss die Folgen tragen.'],
              ['Ende gut, alles gut.', 'Ein guter Ausgang macht Schwierigkeiten vergessen.'],
            ],
          },
        },
        {
          id: 'a10-4-match',
          type: 'MATCHING',
          instruction: 'Welches Sprichwort passt?',
          left: [
            { id: 'l1', text: 'Die Tochter des Bäckers eröffnet auch eine Bäckerei.' },
            { id: 'l2', text: 'Nach vielen Pannen ist die Hochzeit doch noch schön geworden.' },
            { id: 'l3', text: 'Die ersten Wochen im neuen Job sind anstrengend.' },
            { id: 'l4', text: 'Du hast dich angemeldet – jetzt musst du auch teilnehmen.' },
          ],
          right: [
            { id: 'r1', text: 'Der Apfel fällt nicht weit vom Stamm.' },
            { id: 'r2', text: 'Ende gut, alles gut.' },
            { id: 'r3', text: 'Aller Anfang ist schwer.' },
            { id: 'r4', text: 'Wer A sagt, muss auch B sagen.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'a10-4-info-regional',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'Deutschland, Österreich, Schweiz',
          text: 'Deutsch ist eine plurizentrische Sprache: Österreich und die Schweiz haben eigene Standardvarianten, nicht bloß Dialekte. Viele Unterschiede betreffen den Alltagswortschatz. Keine Form ist „richtiger“ als die andere.',
          table: {
            headers: ['Deutschland', 'Österreich', 'Schweiz'],
            rows: [
              ['die Tomate', 'der Paradeiser', 'die Tomate'],
              ['die Kartoffel', 'der Erdapfel', 'die Kartoffel / der Härdöpfel (Mundart)'],
              ['der Januar', 'der Jänner', 'der Januar'],
              ['das Fahrrad', 'das Fahrrad', 'das Velo'],
              ['parken', 'parken', 'parkieren'],
            ],
          },
        },
        {
          id: 'a10-4-choice',
          type: 'CHOICE',
          instruction: 'Wählen Sie die richtige Antwort.',
          question: 'In einem Wiener Restaurant steht auf der Karte „Salat mit Paradeisern“. Was ist das?',
          multiple: false,
          options: [
            { id: 'p1', text: 'ein Salat mit exotischen Früchten' },
            { id: 'p2', text: 'ein Salat mit Tomaten' },
            { id: 'p3', text: 'ein Salat mit Kartoffeln' },
            { id: 'p4', text: 'ein Fehler auf der Speisekarte' },
          ],
          solution: ['p2'],
          explanation:
            '„Paradeiser“ ist das österreichische Standardwort für Tomate. Es ist kein Dialekt, sondern Teil der österreichischen Standardsprache.',
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – wann Idiomatik passt; Schreibaufgabe.
  {
    order: 5,
    title: 'Mit Fingerspitzengefühl',
    subtitle: 'Wann Idiomatik passt – und wann nicht',
    estimatedMinutes: 32,
    content: {
      version: v,
      blocks: [
        { id: 'a10-5-h1', type: 'HEADING', level: 1, text: 'Mit Fingerspitzengefühl' },
        {
          id: 'a10-5-intro',
          type: 'TEXT',
          text: 'Wer gerade viele Redewendungen gelernt hat, möchte sie auch verwenden. Doch drei Redewendungen in einem Absatz wirken nicht muttersprachlich, sondern bemüht. Muttersprachler setzen Idiomatik sparsam ein, vor allem mündlich und in lockeren Texten. In einem Bewerbungsschreiben „ins Fettnäpfchen zu treten“, ist selbst ein Fettnäpfchen.',
        },
        {
          id: 'a10-5-info-kriterien',
          type: 'INFO',
          variant: 'TIP',
          title: 'Vier Fragen vor jeder Redewendung',
          text: 'Passt sie zum Register? Kenne ich sie genau, oder rate ich? Passt sie zur Region meines Gesprächspartners? Habe ich im selben Absatz schon eine verwendet? Wenn eine Antwort unsicher ist, ist die wörtliche Formulierung die bessere Wahl.',
        },
        {
          id: 'a10-5-choice',
          type: 'CHOICE',
          instruction: 'Welche Fassung klingt am natürlichsten?',
          question: 'Sie bedanken sich per E-Mail bei einem Kollegen für seine Hilfe.',
          multiple: false,
          options: [
            { id: 'y1', text: 'Du hast mir aus der Patsche geholfen, den Nagel auf den Kopf getroffen und mir obendrein reinen Wein eingeschenkt.' },
            { id: 'y2', text: 'Danke, dass du mir so schnell geholfen hast – mit deinem Hinweis zum Budget hast du genau den Nagel auf den Kopf getroffen.' },
            { id: 'y3', text: 'Hiermit spreche ich Ihnen meinen verbindlichsten Dank für die geleistete Unterstützung aus.' },
            { id: 'y4', text: 'Danke, dass du mir auf den Keks gegangen bist.' },
          ],
          solution: ['y2'],
          explanation:
            'Die zweite Fassung verwendet eine einzige, gut passende Redewendung. Die erste häuft drei, die dritte ist für Kollegen zu steif, die vierte verwendet die Wendung falsch.',
        },
        {
          id: 'a10-5-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die Zusammenfassung des Kapitels.',
          wordBank: ['fest', 'treffen', 'hohes', 'Konnotation', 'Paradeiser', 'sparsam'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Redewendungen sind in ihrer Form ' },
            { kind: 'GAP', gapId: 'z1', solution: ['fest'], width: 5 },
            { kind: 'TEXT', text: '. Eine Entscheidung muss man ' },
            { kind: 'GAP', gapId: 'z2', solution: ['treffen'], width: 8 },
            { kind: 'TEXT', text: ', und Fieber ist ' },
            { kind: 'GAP', gapId: 'z3', solution: ['hohes', 'hoch'], width: 6 },
            { kind: 'TEXT', text: ' Fieber. „beharrlich“ und „stur“ unterscheiden sich in der ' },
            { kind: 'GAP', gapId: 'z4', solution: ['Konnotation'], width: 12 },
            { kind: 'TEXT', text: '. In Österreich heißt die Tomate ' },
            { kind: 'GAP', gapId: 'z5', solution: ['Paradeiser'], width: 11 },
            { kind: 'TEXT', text: '. Und Idiomatik setzt man ' },
            { kind: 'GAP', gapId: 'z6', solution: ['sparsam'], width: 8 },
            { kind: 'TEXT', text: ' ein.' },
          ],
        },
        {
          id: 'a10-5-writing',
          type: 'WRITING',
          instruction: 'Schreiben Sie eine Geschichte.',
          prompt:
            'Schreiben Sie einer Freundin eine längere Nachricht (180–250 Wörter) über einen Tag, an dem alles schiefging und am Ende doch gut ausging. Verwenden Sie natürlich und sparsam mindestens drei Redewendungen, ein Sprichwort (vollständig oder angedeutet), eine ironische Bemerkung und mindestens zwei korrekte Kollokationen.',
          minWords: 180,
          maxWords: 260,
          aiFeedback: true,
          sampleAnswer:
            'Liebe Sophie,\n\nich muss dir unbedingt von gestern erzählen. Das war einer dieser Tage, an denen man besser im Bett geblieben wäre.\n\nEs fing damit an, dass mein Wecker nicht geklingelt hat. Ich bin also viel zu spät zu meinem Vorstellungsgespräch gehetzt, habe natürlich den Bus verpasst und stand im strömenden Regen an der Haltestelle. Na, super.\n\nDann hatte ich aber Schwein: Ein Nachbar kam mit dem Auto vorbei und hat mich mitgenommen. Ich kam nur zehn Minuten zu spät – immerhin.\n\nIm Gespräch bin ich dann prompt ins Fettnäpfchen getreten. Ich habe den Abteilungsleiter gefragt, ob die Dame am Empfang seine Tochter sei. Es war seine Frau. Ich hätte im Boden versinken können.\n\nAber jetzt kommt’s: Er hat nur gelacht und meinte, das höre er öfter und es sei das schönste Kompliment für ihn. Danach war die Stimmung plötzlich ganz locker. Ich habe meinen Vortrag gehalten, die Fragen haben sie mir alle gestellt, die ich vorbereitet hatte, und heute Morgen kam der Anruf: Ich habe die Stelle!\n\nDu siehst: Ende gut, alles gut. Und falls du dich fragst – ja, ich habe mir heute gleich zwei Wecker gestellt.\n\nLass uns am Wochenende anstoßen!\n\nLiebe Grüße\nLena',
        },
      ],
    },
  },
];
