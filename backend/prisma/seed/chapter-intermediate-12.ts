import type { UnitSeed } from './chapter-beginner-1';

/**
 * Intermediate, Kapitel 12: „Globalisierung und Migration“ (B2, Kapitel 6)
 *
 * Fünf Seiten. Letztes Kapitel der Stufe B2 und damit des
 * Intermediate-Bands. Es führt zusammen, was die Stufe aufgebaut hat –
 * Sachtexte auswerten, Zusammenhänge darstellen, Standpunkte abwägen – und
 * mündet in die Textsorte, in der das alles zusammenkommt: die Erörterung.
 *
 * Aufbau: Seite 1 liest einen Sachtext über Arbeitsmigration und bringt die
 * Redemittel für Ursache und Folge. Seite 2 ist der grammatische Kern: die
 * zweiteiligen Konnektoren („nicht nur … sondern auch“, „je … desto“).
 * Seite 3 wägt zwei Standpunkte zur Globalisierung gegeneinander ab, Seite 4
 * zeigt den Aufbau einer Erörterung, Seite 5 wiederholt und lässt eine eigene
 * Erörterung schreiben.
 *
 * Einsprachig deutsch wie der ganze Intermediate-Band. Die Texte sind bewusst
 * ausgewogen: Geübt wird das Abwägen, nicht eine Position. Personen sind
 * erfunden, Zahlen gerundet und vereinfacht. Sämtliche Texte sind
 * eigenständig verfasst.
 */
const v = 1;

export const INTERMEDIATE_12_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Ursachen und Folgen von Arbeitsmigration.
  {
    order: 1,
    title: 'Warum Menschen gehen',
    subtitle: 'Ursachen und Folgen darstellen',
    estimatedMinutes: 27,
    content: {
      version: v,
      blocks: [
        { id: 'i12-1-h1', type: 'HEADING', level: 1, text: 'Warum Menschen gehen' },
        {
          id: 'i12-1-image',
          type: 'IMAGE',
          url: 'illustration:world-map',
          alt: 'Eine Weltkarte mit Linien zwischen mehreren Kontinenten.',
          caption: 'Migration verbindet Herkunfts- und Zielländer – in beide Richtungen.',
        },
        {
          id: 'i12-1-text',
          type: 'TEXT',
          text: 'Arbeitsmigration: ein Gewinn für alle?\n\nWarum verlassen Menschen ihr Land, um woanders zu arbeiten? Die Forschung unterscheidet zwischen sogenannten Push- und Pull-Faktoren. Push-Faktoren „drücken“ Menschen aus ihrer Heimat, etwa hohe Arbeitslosigkeit, niedrige Löhne oder politische Instabilität. Pull-Faktoren „ziehen“ sie in ein anderes Land: bessere Verdienstmöglichkeiten, sichere Lebensbedingungen oder bereits dort lebende Verwandte.\n\nFür die Zielländer ist Zuwanderung oft eine Antwort auf den demografischen Wandel. In Deutschland etwa gehen in den nächsten Jahren Millionen Beschäftigte in Rente, während deutlich weniger junge Menschen nachkommen. Dieser Fachkräftemangel ist bereits heute in der Pflege, im Handwerk und in der IT spürbar.\n\nFür die Herkunftsländer sind die Folgen zwiespältig. Einerseits fehlen dort gut ausgebildete Menschen – Fachleute sprechen von „Braindrain“. So arbeiten manche Ärztinnen und Ärzte lieber im Ausland, obwohl ihre Ausbildung im eigenen Land bezahlt wurde. Andererseits schicken Migrantinnen und Migranten jedes Jahr hohe Summen an ihre Familien. Diese Rücküberweisungen übersteigen in einigen Ländern sogar die Entwicklungshilfe. Hinzu kommt, dass manche nach Jahren mit neuem Wissen und Kontakten zurückkehren.',
        },
        {
          id: 'i12-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: Globalisierung und Migration',
          items: [
            {
              term: 'Zuwanderung',
              article: 'die',
              translations: { en: 'immigration', es: 'la inmigración', fr: 'l’immigration', it: 'l’immigrazione' },
            },
            {
              term: 'Fachkräftemangel',
              article: 'der',
              translations: { en: 'shortage of skilled workers', es: 'la escasez de mano de obra cualificada', fr: 'la pénurie de main-d’œuvre qualifiée', it: 'la carenza di personale qualificato' },
            },
            {
              term: 'demografischer Wandel',
              article: 'der',
              translations: { en: 'demographic change', es: 'el cambio demográfico', fr: 'l’évolution démographique', it: 'il cambiamento demografico' },
            },
            {
              term: 'Herkunftsland',
              article: 'das',
              plural: 'die Herkunftsländer',
              translations: { en: 'country of origin', es: 'el país de origen', fr: 'le pays d’origine', it: 'il paese d’origine' },
            },
            {
              term: 'Zielland',
              article: 'das',
              plural: 'die Zielländer',
              translations: { en: 'destination country', es: 'el país de destino', fr: 'le pays de destination', it: 'il paese di destinazione' },
            },
            {
              term: 'zwiespältig',
              translations: { en: 'mixed, ambivalent', es: 'ambivalente', fr: 'ambivalent', it: 'ambivalente' },
            },
            {
              term: 'Auswirkung',
              article: 'die',
              plural: 'die Auswirkungen',
              translations: { en: 'effect, impact', es: 'la repercusión', fr: 'la répercussion', it: 'la ripercussione' },
              example: 'die Auswirkungen auf den Arbeitsmarkt',
            },
            {
              term: 'übersteigen',
              translations: { en: 'to exceed', es: 'superar', fr: 'dépasser', it: 'superare' },
            },
            {
              term: 'spürbar',
              translations: { en: 'noticeable', es: 'perceptible, notable', fr: 'sensible, perceptible', it: 'percepibile' },
            },
          ],
        },
        {
          id: 'i12-1-info-ursache',
          type: 'INFO',
          variant: 'TIP',
          title: 'Ursache und Folge ausdrücken',
          text: 'Wer komplexe Zusammenhänge darstellt, braucht mehr als „weil“ und „deshalb“. Diese Verben und Wendungen machen einen Text abwechslungsreicher – und genauer.',
          table: {
            headers: ['Richtung', 'Redemittel'],
            rows: [
              ['Ursache → Folge', 'A führt zu B. / A hat B zur Folge. / A bewirkt B. / A löst B aus.'],
              ['Folge ← Ursache', 'B ist auf A zurückzuführen. / B geht auf A zurück. / B ist eine Folge von A.'],
              ['Nomen', 'Die Ursache / Der Grund für B ist A. / Eine Auswirkung von A ist B.'],
            ],
          },
        },
        {
          id: 'i12-1-choice',
          type: 'CHOICE',
          instruction: 'Lesen Sie den Text.',
          question: 'Welche Aussagen entsprechen dem Text? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'a1', text: 'Niedrige Löhne im Heimatland sind ein Push-Faktor.' },
            { id: 'a2', text: 'Der Fachkräftemangel in Deutschland ist auf den demografischen Wandel zurückzuführen.' },
            { id: 'a3', text: 'Für Herkunftsländer hat Migration ausschließlich negative Folgen.' },
            { id: 'a4', text: 'Rücküberweisungen sind in manchen Ländern höher als die Entwicklungshilfe.' },
          ],
          solution: ['a1', 'a2', 'a4'],
          explanation:
            'Der Text nennt die Folgen für Herkunftsländer ausdrücklich „zwiespältig“: Neben dem Braindrain gibt es Rücküberweisungen und Rückkehrer mit neuem Wissen.',
        },
        {
          id: 'i12-1-match',
          type: 'MATCHING',
          instruction: 'Push- oder Pull-Faktor?',
          left: [
            { id: 'l1', text: 'hohe Arbeitslosigkeit im Heimatland' },
            { id: 'l2', text: 'Verwandte, die schon im Zielland leben' },
            { id: 'l3', text: 'politische Instabilität' },
            { id: 'l4', text: 'bessere Verdienstmöglichkeiten im Ausland' },
          ],
          right: [
            { id: 'r1', text: 'Push-Faktor (wirtschaftlich)' },
            { id: 'r2', text: 'Pull-Faktor (sozial)' },
            { id: 'r3', text: 'Push-Faktor (politisch)' },
            { id: 'r4', text: 'Pull-Faktor (wirtschaftlich)' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'i12-1-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die Ausdrücke für Ursache und Folge.',
          wordBank: ['führt', 'Folge', 'zurückzuführen', 'Ursache', 'Auswirkungen'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Der Fachkräftemangel ' },
            { kind: 'GAP', gapId: 'c1', solution: ['führt', 'fuehrt'], width: 6 },
            { kind: 'TEXT', text: ' in vielen Pflegeheimen zu langen Wartelisten. Er ist vor allem auf den demografischen Wandel ' },
            { kind: 'GAP', gapId: 'c2', solution: ['zurückzuführen', 'zurueckzufuehren'], width: 15 },
            { kind: 'TEXT', text: '. Eine weitere ' },
            { kind: 'GAP', gapId: 'c3', solution: ['Ursache'], width: 8 },
            { kind: 'TEXT', text: ' sind die niedrigen Löhne in der Branche. Das hat zur ' },
            { kind: 'GAP', gapId: 'c4', solution: ['Folge'], width: 6 },
            { kind: 'TEXT', text: ', dass viele Heime Personal im Ausland suchen. Welche ' },
            { kind: 'GAP', gapId: 'c5', solution: ['Auswirkungen'], width: 12 },
            { kind: 'TEXT', text: ' das auf die Herkunftsländer hat, wird kaum diskutiert.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – zweiteilige Konnektoren.
  {
    order: 2,
    title: 'Nicht nur …, sondern auch …',
    subtitle: 'Zweiteilige Konnektoren',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'i12-2-h1', type: 'HEADING', level: 1, text: 'Nicht nur …, sondern auch …' },
        {
          id: 'i12-2-text',
          type: 'TEXT',
          text: 'Migration verändert nicht nur die Zielländer, sondern auch die Herkunftsländer.\n\nEinerseits fehlen dort Fachkräfte, andererseits fließt Geld zurück.\n\nJe länger Menschen im Ausland leben, desto seltener kehren sie zurück.\n\nZweiteilige Konnektoren verbinden zwei Gedanken und zeigen dabei ihre Beziehung: Aufzählung, Gegensatz, Alternative oder Verhältnis. In einer Erörterung helfen sie, komplexe Zusammenhänge in einem einzigen Satz klar darzustellen.',
        },
        {
          id: 'i12-2-info-zweiteilig',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Zweiteilige Konnektoren',
          text: 'Die meisten zweiteiligen Konnektoren verbinden Satzteile oder Hauptsätze. Eine Ausnahme ist „je … desto / umso“: Der Teil mit „je“ ist ein Nebensatz (Verb am Ende), der Teil mit „desto“ ein Hauptsatz mit Komparativ, nach dem direkt das Verb folgt.',
          table: {
            headers: ['Konnektor', 'Bedeutung', 'Beispiel'],
            rows: [
              ['sowohl … als auch', 'beides (+)', 'Sowohl Pflege als auch Handwerk suchen Personal.'],
              ['nicht nur …, sondern auch', 'beides, das zweite betont', 'Das betrifft nicht nur Städte, sondern auch Dörfer.'],
              ['weder … noch', 'keins von beiden (−)', 'Er spricht weder Englisch noch Deutsch.'],
              ['entweder … oder', 'Alternative', 'Entweder wir bilden mehr aus, oder wir werben Fachkräfte an.'],
              ['zwar …, aber', 'Einräumung', 'Das ist zwar teuer, aber notwendig.'],
              ['einerseits …, andererseits', 'zwei Seiten', 'Einerseits …, andererseits …'],
              ['je … desto / umso', 'proportional', 'Je besser die Sprachkenntnisse sind, desto leichter ist der Einstieg.'],
            ],
          },
        },
        {
          id: 'i12-2-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie den zweiten Teil des Konnektors.',
          wordBank: ['als auch', 'sondern auch', 'noch', 'oder', 'desto', 'aber'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Sowohl Kanada ' },
            { kind: 'GAP', gapId: 'z1', solution: ['als auch'], width: 9 },
            { kind: 'TEXT', text: ' Australien werben gezielt Fachkräfte an.\n2. Sie hat weder einen Arbeitsvertrag ' },
            { kind: 'GAP', gapId: 'z2', solution: ['noch'], width: 9 },
            { kind: 'TEXT', text: ' eine Wohnung gefunden.\n3. Globalisierung schafft nicht nur Wohlstand, ' },
            { kind: 'GAP', gapId: 'z3', solution: ['sondern auch'], width: 13 },
            { kind: 'TEXT', text: ' neue Abhängigkeiten.\n4. Entweder die Anerkennung von Abschlüssen wird einfacher, ' },
            { kind: 'GAP', gapId: 'z4', solution: ['oder'], width: 9 },
            { kind: 'TEXT', text: ' viele Fachkräfte arbeiten unter ihrer Qualifikation.\n5. Je früher Kinder eine zweite Sprache lernen, ' },
            { kind: 'GAP', gapId: 'z5', solution: ['desto', 'umso'], width: 9 },
            { kind: 'TEXT', text: ' leichter fällt es ihnen.\n6. Der Umzug war zwar anstrengend, ' },
            { kind: 'GAP', gapId: 'z6', solution: ['aber'], width: 9 },
            { kind: 'TEXT', text: ' er hat sich gelohnt.' },
          ],
        },
        {
          id: 'i12-2-choice',
          type: 'CHOICE',
          instruction: 'Welcher Satz mit „je … desto“ ist korrekt?',
          multiple: false,
          options: [
            { id: 'a1', text: 'Je länger man bleibt, desto man fühlt sich wohler.' },
            { id: 'a2', text: 'Je länger man bleibt, desto wohler fühlt man sich.' },
            { id: 'a3', text: 'Je man länger bleibt, desto wohler fühlt man sich.' },
            { id: 'a4', text: 'Je länger bleibt man, desto wohler man fühlt sich.' },
          ],
          solution: ['a2'],
          explanation:
            '„je“ + Komparativ leitet einen Nebensatz ein (Verb am Ende: bleibt). Nach „desto“ + Komparativ folgt direkt das konjugierte Verb: desto wohler fühlt man sich.',
        },
        {
          id: 'i12-2-match',
          type: 'MATCHING',
          instruction: 'Welcher Satz sagt dasselbe?',
          left: [
            { id: 'l1', text: 'Er kann kein Spanisch und kein Portugiesisch.' },
            { id: 'l2', text: 'Die Firma produziert in Asien und in Europa.' },
            { id: 'l3', text: 'Die Stelle ist gut bezahlt. Trotzdem ist sie anstrengend.' },
            { id: 'l4', text: 'Wir fahren im Sommer nach Chile – oder im Winter.' },
          ],
          right: [
            { id: 'r1', text: 'Er kann weder Spanisch noch Portugiesisch.' },
            { id: 'r2', text: 'Die Firma produziert sowohl in Asien als auch in Europa.' },
            { id: 'r3', text: 'Die Stelle ist zwar gut bezahlt, aber anstrengend.' },
            { id: 'r4', text: 'Wir fahren entweder im Sommer oder im Winter nach Chile.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'i12-2-order',
          type: 'ORDERING',
          instruction: 'Bilden Sie einen Satz mit „je … desto“.',
          items: [
            { id: 'o1', text: 'Je' },
            { id: 'o2', text: 'besser' },
            { id: 'o3', text: 'die Integration' },
            { id: 'o4', text: 'gelingt,' },
            { id: 'o5', text: 'desto' },
            { id: 'o6', text: 'mehr profitiert' },
            { id: 'o7', text: 'die Gesellschaft.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5', 'o6', 'o7'],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – zwei Standpunkte zur Globalisierung abwägen.
  {
    order: 3,
    title: 'Gewinner und Verlierer',
    subtitle: 'Standpunkte gegeneinander abwägen',
    estimatedMinutes: 27,
    content: {
      version: v,
      blocks: [
        { id: 'i12-3-h1', type: 'HEADING', level: 1, text: 'Gewinner und Verlierer' },
        {
          id: 'i12-3-intro',
          type: 'TEXT',
          text: 'Eine Zeitung hat zwei Fachleute gebeten, in wenigen Sätzen Stellung zu nehmen: „Hat die Globalisierung mehr Gewinner oder mehr Verlierer hervorgebracht?“',
        },
        {
          id: 'i12-3-pro',
          type: 'TEXT',
          text: 'Prof. Dr. Karin Vogt, Wirtschaftswissenschaftlerin:\n\n„Die Zahlen sind eindeutig: Seit 1990 ist der Anteil der Menschen, die in extremer Armut leben, weltweit stark gesunken. Das ist vor allem darauf zurückzuführen, dass Länder wie China, Indien oder Vietnam in den Welthandel eingestiegen sind. Hinzu kommt, dass wir als Verbraucher von günstigen Preisen profitieren und Wissen heute schneller verbreitet wird als je zuvor. Natürlich gibt es auch Verlierer. Diese Probleme lassen sich aber nicht durch weniger, sondern nur durch besser gestaltete Globalisierung lösen.“',
        },
        {
          id: 'i12-3-contra',
          type: 'TEXT',
          text: 'Dr. Samuel Owusu, Entwicklungsforscher:\n\n„Dass die Armut insgesamt gesunken ist, bestreite ich nicht. Allerdings sind die Gewinne sehr ungleich verteilt. Viele Industriearbeiter in Europa und den USA haben ihre Stellen verloren, während in manchen Produktionsländern zu Bedingungen gearbeitet wird, die bei uns verboten wären. Außerdem hat die Pandemie gezeigt, wie verletzlich globale Lieferketten sind. Entscheidend ist daher nicht, ob wir Globalisierung wollen, sondern zu welchen Regeln.“',
        },
        {
          id: 'i12-3-info-abwaegen',
          type: 'INFO',
          variant: 'TIP',
          title: 'Standpunkte abwägen',
          text: 'Abwägen heißt: beide Seiten fair darstellen, ihre Argumente gewichten und dann zu einem begründeten Urteil kommen. Oft liegen zwei Positionen näher beieinander, als es zunächst scheint – das zu erkennen, ist ein Zeichen für genaues Lesen.',
          table: {
            headers: ['Zweck', 'Redemittel'],
            rows: [
              ['Positionen wiedergeben', 'X vertritt die Auffassung, dass … / Y hält dagegen, dass …'],
              ['gewichten', 'Schwerer wiegt meiner Ansicht nach … / Das stärkste Argument ist …'],
              ['Gemeinsamkeit', 'Beide sind sich darin einig, dass … / Übereinstimmung besteht darin, dass …'],
              ['Urteil', 'Wägt man die Argumente ab, … / Alles in allem komme ich zu dem Schluss, dass …'],
            ],
          },
        },
        {
          id: 'i12-3-match',
          type: 'MATCHING',
          instruction: 'Wer vertritt welches Argument?',
          left: [
            { id: 'l1', text: 'Die extreme Armut ist weltweit gesunken.' },
            { id: 'l2', text: 'Die Gewinne sind ungleich verteilt.' },
            { id: 'l3', text: 'Globale Lieferketten sind verletzlich.' },
            { id: 'l4', text: 'Verbraucher profitieren von niedrigen Preisen.' },
          ],
          right: [
            { id: 'r1', text: 'Prof. Vogt (Hauptargument)' },
            { id: 'r2', text: 'Dr. Owusu (Hauptargument)' },
            { id: 'r3', text: 'Dr. Owusu (zusätzliches Argument)' },
            { id: 'r4', text: 'Prof. Vogt (zusätzliches Argument)' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'i12-3-choice',
          type: 'CHOICE',
          instruction: 'Lesen Sie beide Stellungnahmen genau.',
          question: 'Worin sind sich die beiden Fachleute einig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'a1', text: 'Die extreme Armut ist insgesamt gesunken.' },
            { id: 'a2', text: 'Die Globalisierung sollte zurückgedreht werden.' },
            { id: 'a3', text: 'Es kommt darauf an, wie die Globalisierung gestaltet wird.' },
            { id: 'a4', text: 'Es gibt keine Verlierer der Globalisierung.' },
          ],
          solution: ['a1', 'a3'],
          explanation:
            'Owusu „bestreitet nicht“, dass die Armut gesunken ist. Und beide setzen auf Regeln: Vogt will „besser gestaltete Globalisierung“, Owusu fragt, „zu welchen Regeln“. Zurückdrehen will keiner, und beide nennen Verlierer.',
        },
        {
          id: 'i12-3-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die Abwägung.',
          wordBank: ['Auffassung', 'dagegen', 'einig', 'wiegt', 'Schluss'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Prof. Vogt vertritt die ' },
            { kind: 'GAP', gapId: 'w1', solution: ['Auffassung'], width: 11 },
            { kind: 'TEXT', text: ', dass die Globalisierung vor allem Gewinner hervorgebracht hat. Dr. Owusu hält ' },
            { kind: 'GAP', gapId: 'w2', solution: ['dagegen'], width: 8 },
            { kind: 'TEXT', text: ', dass die Gewinne ungleich verteilt sind. Beide sind sich aber darin ' },
            { kind: 'GAP', gapId: 'w3', solution: ['einig'], width: 6 },
            { kind: 'TEXT', text: ', dass es auf die Regeln ankommt. Schwerer ' },
            { kind: 'GAP', gapId: 'w4', solution: ['wiegt'], width: 6 },
            { kind: 'TEXT', text: ' für mich das Argument der gesunkenen Armut. Alles in allem komme ich zu dem ' },
            { kind: 'GAP', gapId: 'w5', solution: ['Schluss'], width: 8 },
            { kind: 'TEXT', text: ', dass eine fair gestaltete Globalisierung mehr nützt als schadet.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – der Aufbau einer Erörterung.
  {
    order: 4,
    title: 'Die Erörterung',
    subtitle: 'Eine Erörterung strukturiert schreiben',
    estimatedMinutes: 27,
    content: {
      version: v,
      blocks: [
        { id: 'i12-4-h1', type: 'HEADING', level: 1, text: 'Die Erörterung' },
        {
          id: 'i12-4-text',
          type: 'TEXT',
          text: 'Sollten Schulen Mehrsprachigkeit stärker fördern?\n\nIn deutschen Klassenzimmern werden heute Dutzende Sprachen gesprochen. Viele Kinder wachsen mit Türkisch, Arabisch, Russisch oder Polnisch auf, lernen in der Schule aber nur auf Deutsch. Es stellt sich daher die Frage, ob Schulen die Herkunftssprachen ihrer Schülerinnen und Schüler stärker fördern sollten.\n\nFür eine stärkere Förderung spricht zunächst, dass Kinder, die ihre Erstsprache gut beherrschen, nachweislich auch leichter weitere Sprachen lernen. Zudem ist Mehrsprachigkeit auf dem globalisierten Arbeitsmarkt ein klarer Vorteil. Nicht zuletzt stärkt es das Selbstbewusstsein der Kinder, wenn ihre Sprache in der Schule wertgeschätzt wird.\n\nGegen eine stärkere Förderung lässt sich einwenden, dass es an qualifizierten Lehrkräften für viele Sprachen fehlt. Außerdem befürchten manche, dass die Zeit für den Deutschunterricht knapper wird – und gerade gute Deutschkenntnisse sind für den Schulerfolg entscheidend.\n\nWägt man die Argumente ab, überwiegen meiner Ansicht nach die Vorteile. Der Mangel an Lehrkräften ist zwar ein ernstes Problem, lässt sich aber durch Online-Angebote und Kooperationen mit Vereinen teilweise lösen. Und Deutsch und Herkunftssprache sind keine Konkurrenten: Je sicherer ein Kind in seiner ersten Sprache ist, desto besser lernt es in der Regel auch die zweite.\n\nAbschließend lässt sich festhalten, dass Mehrsprachigkeit keine Last, sondern eine Ressource ist. Schulen sollten sie deshalb nicht nur dulden, sondern gezielt fördern.',
        },
        {
          id: 'i12-4-info-eroerterung',
          type: 'INFO',
          variant: 'TIP',
          title: 'Aufbau einer Erörterung',
          text: 'Eine dialektische Erörterung (Pro-und-Contra-Erörterung) prüft eine Frage von beiden Seiten. Üblich ist der Aufbau „vom Schwächeren zum Stärkeren“: Man beginnt mit der Seite, die man selbst nicht vertritt, und endet mit der eigenen. Jedes Argument wird begründet und möglichst mit einem Beispiel gestützt.',
          table: {
            headers: ['Teil', 'Inhalt und Redemittel'],
            rows: [
              ['Einleitung', 'Hinführung zum Thema, Fragestellung: Es stellt sich die Frage, ob …'],
              ['Argumente dafür', 'Für … spricht zunächst, dass … / Zudem … / Nicht zuletzt …'],
              ['Argumente dagegen', 'Gegen … lässt sich einwenden, dass … / Außerdem befürchten manche, …'],
              ['Abwägung', 'Wägt man die Argumente ab, … / Schwerer wiegt …'],
              ['Schluss', 'Abschließend lässt sich festhalten, dass … / Ausblick oder Forderung'],
            ],
          },
        },
        {
          id: 'i12-4-order',
          type: 'ORDERING',
          instruction: 'Bringen Sie die Teile der Erörterung in die Reihenfolge des Mustertexts.',
          items: [
            { id: 'o1', text: 'In deutschen Klassenzimmern werden Dutzende Sprachen gesprochen.' },
            { id: 'o2', text: 'Kinder mit guter Erstsprache lernen leichter weitere Sprachen.' },
            { id: 'o3', text: 'Es fehlt an qualifizierten Lehrkräften.' },
            { id: 'o4', text: 'Wägt man die Argumente ab, überwiegen die Vorteile.' },
            { id: 'o5', text: 'Mehrsprachigkeit ist keine Last, sondern eine Ressource.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5'],
        },
        {
          id: 'i12-4-choice',
          type: 'CHOICE',
          instruction: 'Lesen Sie die Erörterung.',
          question: 'Wie geht der Text mit dem Argument „Es fehlen Lehrkräfte“ um?',
          multiple: false,
          options: [
            { id: 'a1', text: 'Er ignoriert es.' },
            { id: 'a2', text: 'Er hält es für falsch.' },
            { id: 'a3', text: 'Er erkennt es als ernstes Problem an und zeigt eine teilweise Lösung.' },
            { id: 'a4', text: 'Er findet es so stark, dass das Urteil am Ende anders ausfällt.' },
          ],
          solution: ['a3'],
          explanation:
            '„Der Mangel an Lehrkräften ist zwar ein ernstes Problem, lässt sich aber … teilweise lösen.“ – ein klassisches Entkräften mit „zwar …, aber“.',
        },
        {
          id: 'i12-4-match',
          type: 'MATCHING',
          instruction: 'Zu welchem Teil der Erörterung gehört der Satz?',
          left: [
            { id: 'l1', text: 'Es stellt sich daher die Frage, ob …' },
            { id: 'l2', text: 'Gegen … lässt sich einwenden, dass …' },
            { id: 'l3', text: 'Wägt man die Argumente ab, …' },
            { id: 'l4', text: 'Abschließend lässt sich festhalten, dass …' },
          ],
          right: [
            { id: 'r1', text: 'Einleitung' },
            { id: 'r2', text: 'Argumente dagegen' },
            { id: 'r3', text: 'Abwägung' },
            { id: 'r4', text: 'Schluss' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'i12-4-choice-2',
          type: 'CHOICE',
          instruction: 'Welche zweiteiligen Konnektoren kommen im Mustertext vor? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'b1', text: 'zwar …, aber' },
            { id: 'b2', text: 'je … desto' },
            { id: 'b3', text: 'weder … noch' },
            { id: 'b4', text: 'nicht nur …, sondern (auch)' },
          ],
          solution: ['b1', 'b2', 'b4'],
          explanation:
            '„zwar ein ernstes Problem, lässt sich aber …“, „Je sicherer …, desto besser …“ und „nicht nur dulden, sondern gezielt fördern“. „weder … noch“ steht nicht im Text.',
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – Rückblick auf Kapitel 12 und damit auf B2.
  {
    order: 5,
    title: 'Kannst du das schon?',
    subtitle: 'Rückblick, eine eigene Erörterung',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'i12-5-h1', type: 'HEADING', level: 1, text: 'Kannst du das schon?' },
        {
          id: 'i12-5-intro',
          type: 'TEXT',
          text: 'Das ist die letzte Seite der Stufe B2 und des Intermediate-Bands. Prüfen Sie, was Sie aus Kapitel 12 mitnehmen: Ursache und Folge ausdrücken, zweiteilige Konnektoren, das Abwägen von Standpunkten und den Aufbau einer Erörterung. Mit dem Advanced-Band geht es auf C1 weiter.',
        },
        {
          id: 'i12-5-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie den Text.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Der Tourismus bringt ' },
            { kind: 'GAP', gapId: 'r1', solution: ['nicht'], width: 6 },
            { kind: 'TEXT', text: ' nur Geld, sondern auch Probleme in viele Städte. Die steigenden Mieten sind zum Teil auf Ferienwohnungen ' },
            { kind: 'GAP', gapId: 'r2', solution: ['zurückzuführen', 'zurueckzufuehren'], width: 15 },
            { kind: 'TEXT', text: '. Je mehr Touristen kommen, ' },
            { kind: 'GAP', gapId: 'r3', solution: ['desto', 'umso'], width: 6 },
            { kind: 'TEXT', text: ' voller werden die Innenstädte. Das hat zur ' },
            { kind: 'GAP', gapId: 'r4', solution: ['Folge'], width: 6 },
            { kind: 'TEXT', text: ', dass manche Einheimische wegziehen. Die Stadt steht ' },
            { kind: 'GAP', gapId: 'r5', solution: ['zwar'], width: 5 },
            { kind: 'TEXT', text: ' vor einem Dilemma, aber es gibt Lösungen.' },
          ],
        },
        {
          id: 'i12-5-choice',
          type: 'CHOICE',
          instruction: 'Welche Sätze sind korrekt? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'k1', text: 'Sie spricht sowohl Arabisch als auch Französisch.' },
            { id: 'k2', text: 'Je mehr man übt, desto sicherer man wird.' },
            { id: 'k3', text: 'Er hat weder Zeit noch Geld für eine Reise.' },
            { id: 'k4', text: 'Die Arbeitslosigkeit führt zu Abwanderung.' },
          ],
          solution: ['k1', 'k3', 'k4'],
          explanation: 'Nach „desto“ + Komparativ folgt direkt das Verb: Je mehr man übt, desto sicherer wird man.',
        },
        {
          id: 'i12-5-match',
          type: 'MATCHING',
          instruction: 'Was bedeutet der Konnektor?',
          left: [
            { id: 'm1', text: 'weder … noch' },
            { id: 'm2', text: 'entweder … oder' },
            { id: 'm3', text: 'je … desto' },
            { id: 'm4', text: 'zwar …, aber' },
          ],
          right: [
            { id: 'y1', text: 'keins von beiden' },
            { id: 'y2', text: 'nur eins von beiden' },
            { id: 'y3', text: 'ein proportionales Verhältnis' },
            { id: 'y4', text: 'eine Einräumung' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'y1' },
            { leftId: 'm2', rightId: 'y2' },
            { leftId: 'm3', rightId: 'y3' },
            { leftId: 'm4', rightId: 'y4' },
          ],
        },
        {
          id: 'i12-5-writing',
          type: 'WRITING',
          instruction: 'Eine eigene Erörterung',
          prompt:
            'Schreiben Sie eine Erörterung zu der Frage: „Sollte Deutschland mehr Fachkräfte aus dem Ausland anwerben?“ Beginnen Sie mit einer Einleitung und der Fragestellung. Nennen Sie mindestens zwei Argumente dafür und zwei dagegen – denken Sie dabei auch an die Herkunftsländer. Wägen Sie die Argumente ab und kommen Sie zu einem begründeten Urteil. Verwenden Sie mindestens zwei zweiteilige Konnektoren und zwei Ausdrücke für Ursache und Folge.',
          minWords: 200,
          maxWords: 350,
          aiFeedback: true,
          sampleAnswer:
            'In vielen Branchen in Deutschland bleiben Stellen unbesetzt – in Krankenhäusern ebenso wie in Handwerksbetrieben. Es stellt sich daher die Frage, ob Deutschland gezielt mehr Fachkräfte aus dem Ausland anwerben sollte.\n\nFür eine stärkere Anwerbung spricht zunächst der demografische Wandel. Da in den nächsten Jahren Millionen Menschen in Rente gehen, führt der Personalmangel schon heute zu langen Wartezeiten, etwa in der Pflege. Zudem bringen Zugewanderte nicht nur ihre Arbeitskraft mit, sondern auch neue Ideen und Sprachkenntnisse, von denen international tätige Firmen profitieren.\n\nGegen eine stärkere Anwerbung lässt sich einwenden, dass den Herkunftsländern dadurch dringend benötigte Fachleute fehlen. Wenn etwa Ärztinnen abwandern, hat das zur Folge, dass die Versorgung vor Ort schlechter wird. Außerdem ist die Anerkennung ausländischer Abschlüsse in Deutschland oft so kompliziert, dass viele Fachkräfte unter ihrer Qualifikation arbeiten.\n\nWägt man die Argumente ab, überwiegen meiner Ansicht nach die Vorteile – allerdings nur unter Bedingungen. Das Problem des Braindrain ist zwar ernst, lässt sich aber durch Ausbildungspartnerschaften mildern, bei denen Deutschland in den Herkunftsländern mehr Menschen ausbildet, als es anwirbt. Und je schneller Abschlüsse anerkannt werden, desto besser können Zugewanderte ihr Können einsetzen.\n\nAbschließend lässt sich festhalten, dass Deutschland auf Zuwanderung angewiesen ist. Entscheidend ist, sie so zu gestalten, dass sowohl Deutschland als auch die Herkunftsländer davon profitieren.',
        },
      ],
    },
  },
];
