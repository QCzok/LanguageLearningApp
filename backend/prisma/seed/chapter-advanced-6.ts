import type { UnitSeed } from './chapter-beginner-1';

/**
 * Advanced, Kapitel 6: „Digitalisierung und Gesellschaft“ (C1, Kapitel 6)
 *
 * Fünf Seiten. Letztes Kapitel der Stufe C1. Über Technik wird fast immer
 * in der Zukunft gesprochen, und die Zukunft ist unsicher. Das Kapitel übt
 * deshalb vor allem, Prognosen sprachlich abzustufen – von „wird“ über
 * „dürfte“ bis „könnte unter Umständen“ – und Chancen gegen Risiken
 * abzuwägen. Am Ende steht der Vortrag.
 *
 * Aufbau: Seite 1 legt den Wortschatz, Seite 2 die Abstufung von
 * Prognosen, Seite 3 die Abwägung von Chancen und Risiken, Seite 4 die
 * Redemittel eines Vortrags, Seite 5 Wiederholung und Vortragsmanuskript.
 *
 * Studien und Zahlen sind erfunden oder gerundet. Sämtliche Texte sind
 * eigenständig verfasst.
 */
const v = 1;

export const ADVANCED_6_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Wortschatz: Digitalisierung.
  {
    order: 1,
    title: 'Die Arbeit von morgen',
    subtitle: 'Entwicklungen einordnen',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'a6-1-h1', type: 'HEADING', level: 1, text: 'Die Arbeit von morgen' },
        {
          id: 'a6-1-text',
          type: 'TEXT',
          text: 'Als vor rund zehn Jahren die ersten Studien erschienen, die fast der Hälfte aller Berufe ein hohes Automatisierungsrisiko bescheinigten, war die Aufregung groß. Inzwischen fällt das Bild differenzierter aus. Automatisiert werden selten ganze Berufe, sondern einzelne Tätigkeiten: Die Steuerberaterin tippt keine Belege mehr ab, berät aber nach wie vor ihre Mandanten.\n\nMit der Verbreitung von Programmen, die Texte schreiben, Bilder erzeugen und Code vorschlagen, hat sich die Debatte erneut verschoben. Betroffen sind nun auch Tätigkeiten, die lange als typisch menschlich galten. Ob dadurch mehr Arbeitsplätze verloren gehen als neue entstehen, ist unter Fachleuten umstritten. Einig sind sie sich darin, dass Weiterbildung wichtiger wird – und dass die Folgen weniger von der Technik selbst abhängen als davon, wie Unternehmen und Politik sie einsetzen.',
        },
        {
          id: 'a6-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: Digitalisierung',
          items: [
            {
              term: 'Automatisierung',
              article: 'die',
              translations: { en: 'automation', es: 'la automatización', fr: 'l’automatisation', it: 'l’automazione' },
            },
            {
              term: 'künstliche Intelligenz (KI)',
              article: 'die',
              translations: { en: 'artificial intelligence (AI)', es: 'la inteligencia artificial', fr: 'l’intelligence artificielle', it: 'l’intelligenza artificiale' },
            },
            {
              term: 'Tätigkeit',
              article: 'die',
              plural: 'die Tätigkeiten',
              translations: { en: 'task, activity', es: 'la actividad, la tarea', fr: 'l’activité, la tâche', it: 'l’attività, la mansione' },
            },
            {
              term: 'Weiterbildung',
              article: 'die',
              translations: { en: 'further training', es: 'la formación continua', fr: 'la formation continue', it: 'la formazione continua' },
            },
            {
              term: 'Datenschutz',
              article: 'der',
              translations: { en: 'data protection', es: 'la protección de datos', fr: 'la protection des données', it: 'la protezione dei dati' },
            },
            {
              term: 'Algorithmus',
              article: 'der',
              plural: 'die Algorithmen',
              translations: { en: 'algorithm', es: 'el algoritmo', fr: 'l’algorithme', it: 'l’algoritmo' },
            },
            {
              term: 'ersetzen',
              translations: { en: 'to replace', es: 'sustituir', fr: 'remplacer', it: 'sostituire' },
            },
            {
              term: 'sich verschieben',
              translations: { en: 'to shift', es: 'desplazarse', fr: 'se déplacer', it: 'spostarsi' },
            },
            {
              term: 'differenziert',
              translations: { en: 'nuanced', es: 'matizado', fr: 'nuancé', it: 'articolato' },
            },
            {
              term: 'etwas bescheinigen',
              translations: { en: 'to attest, to certify', es: 'certificar, atribuir', fr: 'attester', it: 'attestare' },
            },
          ],
        },
        {
          id: 'a6-1-choice',
          type: 'CHOICE',
          instruction: 'Lesen Sie den Text.',
          question: 'Welche Aussagen entsprechen dem Text? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'c1', text: 'Meist werden einzelne Tätigkeiten automatisiert, nicht ganze Berufe.' },
            { id: 'c2', text: 'Es ist sicher, dass mehr Arbeitsplätze verloren gehen als entstehen.' },
            { id: 'c3', text: 'Weiterbildung wird nach Ansicht der Fachleute wichtiger.' },
            { id: 'c4', text: 'Die Folgen hängen auch davon ab, wie Unternehmen und Politik die Technik einsetzen.' },
          ],
          solution: ['c1', 'c3', 'c4'],
          explanation:
            'Ob mehr Stellen verloren gehen als entstehen, ist laut Text „umstritten“ – eine sichere Aussage macht er darüber nicht.',
        },
        {
          id: 'a6-1-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie.',
          wordBank: ['Tätigkeiten', 'ersetzt', 'Weiterbildung', 'verschoben', 'Algorithmen'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Automatisiert werden vor allem einzelne ' },
            { kind: 'GAP', gapId: 'g1', solution: ['Tätigkeiten'], width: 12 },
            { kind: 'TEXT', text: '. Kaum ein Beruf wird vollständig ' },
            { kind: 'GAP', gapId: 'g2', solution: ['ersetzt'], width: 8 },
            { kind: 'TEXT', text: '. Seit ' },
            { kind: 'GAP', gapId: 'g3', solution: ['Algorithmen'], width: 12 },
            { kind: 'TEXT', text: ' Texte schreiben, hat sich die Debatte ' },
            { kind: 'GAP', gapId: 'g4', solution: ['verschoben'], width: 11 },
            { kind: 'TEXT', text: '. Umso wichtiger wird ' },
            { kind: 'GAP', gapId: 'g5', solution: ['Weiterbildung'], width: 14 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'a6-1-match',
          type: 'MATCHING',
          instruction: 'Ordnen Sie die Begriffe zu.',
          left: [
            { id: 'l1', text: 'Datenschutz' },
            { id: 'l2', text: 'Algorithmus' },
            { id: 'l3', text: 'Automatisierung' },
          ],
          right: [
            { id: 'r1', text: 'Schutz persönlicher Informationen vor Missbrauch' },
            { id: 'r2', text: 'festgelegte Folge von Rechenschritten' },
            { id: 'r3', text: 'Übertragung von Arbeit auf Maschinen' },
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

  // ====================================================== SEITE 2
  // Seite 2 – Prognosen sprachlich abstufen.
  {
    order: 2,
    title: 'Das dürfte sich ändern',
    subtitle: 'Prognosen sprachlich abstufen',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'a6-2-h1', type: 'HEADING', level: 1, text: 'Das dürfte sich ändern' },
        {
          id: 'a6-2-intro',
          type: 'TEXT',
          text: 'Wer über die Zukunft spricht, muss sagen, wie sicher er sich ist. Das Deutsche bietet dafür eine feine Skala, vor allem mit den Modalverben in subjektiver Bedeutung. „Das muss stimmen“ heißt dann nicht „Das ist Pflicht“, sondern „Ich bin fast sicher“.',
        },
        {
          id: 'a6-2-info-skala',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Von sicher bis unwahrscheinlich',
          text: 'Das Futur I mit „wohl“ drückt eine Vermutung aus. „dürfte“ (Konjunktiv II von „dürfen“) ist die typische Form vorsichtiger Prognosen in Zeitungen und Gutachten. Für die Vergangenheit steht das Modalverb mit dem Infinitiv Perfekt: „Er dürfte die Mail gelesen haben.“',
          table: {
            headers: ['Sicherheit', 'Mittel', 'Beispiel'],
            rows: [
              ['sehr hoch', 'werden / müssen', 'Die Preise werden steigen. / Das muss ein Fehler sein.'],
              ['hoch', 'dürfte, voraussichtlich', 'Die Zahl dürfte sich verdoppeln.'],
              ['mittel', 'wohl, vermutlich, wahrscheinlich', 'Das wird wohl noch dauern.'],
              ['gering', 'könnte, möglicherweise', 'Der Markt könnte einbrechen.'],
              ['sehr gering', 'kaum, schwerlich', 'Das dürfte kaum gelingen.'],
            ],
          },
        },
        {
          id: 'a6-2-ordering',
          type: 'ORDERING',
          instruction: 'Ordnen Sie die Aussagen von der sichersten zur unsichersten.',
          items: [
            { id: 'o1', text: 'Die Nachfrage wird steigen.' },
            { id: 'o2', text: 'Die Nachfrage dürfte steigen.' },
            { id: 'o3', text: 'Die Nachfrage wird wohl steigen.' },
            { id: 'o4', text: 'Die Nachfrage könnte steigen.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4'],
        },
        {
          id: 'a6-2-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie das passende Mittel.',
          wordBank: ['dürfte', 'könnte', 'wohl', 'muss', 'voraussichtlich'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Der Bericht ist eindeutig: Das ' },
            { kind: 'GAP', gapId: 'p1', solution: ['muss'], hint: 'fast sicher', width: 5 },
            { kind: 'TEXT', text: ' ein Fehler im System sein. Die Reparatur ' },
            { kind: 'GAP', gapId: 'p2', solution: ['dürfte'], hint: 'hohe Wahrscheinlichkeit', width: 7 },
            { kind: 'TEXT', text: ' zwei Wochen dauern und ist ' },
            { kind: 'GAP', gapId: 'p3', solution: ['voraussichtlich'], hint: 'Adverb, hohe Wahrscheinlichkeit', width: 16 },
            { kind: 'TEXT', text: ' Ende Mai abgeschlossen. Der Techniker wird ' },
            { kind: 'GAP', gapId: 'p4', solution: ['wohl'], hint: 'Vermutung', width: 5 },
            { kind: 'TEXT', text: ' morgen kommen. Im schlimmsten Fall ' },
            { kind: 'GAP', gapId: 'p5', solution: ['könnte'], hint: 'geringe Wahrscheinlichkeit', width: 7 },
            { kind: 'TEXT', text: ' es auch länger dauern.' },
          ],
        },
        {
          id: 'a6-2-choice',
          type: 'CHOICE',
          instruction: 'Wählen Sie die richtige Bedeutung.',
          question: '„Die Firma dürfte von dem Datenleck gewusst haben.“',
          multiple: false,
          options: [
            { id: 'd1', text: 'Die Firma hatte die Erlaubnis, davon zu wissen.' },
            { id: 'd2', text: 'Es ist ziemlich wahrscheinlich, dass die Firma davon wusste.' },
            { id: 'd3', text: 'Es ist bewiesen, dass die Firma davon wusste.' },
            { id: 'd4', text: 'Die Firma wird bald davon erfahren.' },
          ],
          solution: ['d2'],
          explanation:
            '„dürfte“ mit Infinitiv Perfekt drückt eine gut begründete Vermutung über die Vergangenheit aus. Mit Erlaubnis hat es in dieser subjektiven Bedeutung nichts zu tun.',
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – Chancen und Risiken abwägen.
  {
    order: 3,
    title: 'Chancen und Risiken',
    subtitle: 'Eine Entwicklung bewerten',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'a6-3-h1', type: 'HEADING', level: 1, text: 'Chancen und Risiken' },
        {
          id: 'a6-3-text',
          type: 'TEXT',
          text: 'Ein Krankenhaus testet eine Software, die Röntgenbilder auswertet. In der Testphase erkannte sie Lungenentzündungen ebenso zuverlässig wie erfahrene Radiologinnen und Radiologen – und in einem Bruchteil der Zeit. Befürworter sehen darin eine Chance, Fachkräfte zu entlasten und Wartezeiten zu verkürzen. Skeptiker geben zu bedenken, dass die Software mit Bildern aus wenigen Kliniken trainiert wurde und bei anderen Geräten schlechter abschneiden könnte. Zudem sei unklar, wer hafte, wenn ein Befund falsch sei.',
        },
        {
          id: 'a6-3-info-redemittel',
          type: 'INFO',
          variant: 'TIP',
          title: 'Chancen und Risiken benennen',
          text: 'Die Redemittel bewerten schon durch ihre Form: „birgt ein Risiko“ klingt ernster als „hat einen Nachteil“. In einer ausgewogenen Bewertung stehen Chancen und Risiken in ähnlicher Ausführlichkeit nebeneinander, bevor ein Urteil folgt.',
          table: {
            headers: ['Funktion', 'Redemittel'],
            rows: [
              ['Chance', 'eröffnet die Möglichkeit, … / bietet die Chance, …'],
              ['Risiko', 'birgt die Gefahr, dass … / ist mit Risiken verbunden'],
              ['Bedenken', 'gibt zu bedenken, dass … / wirft die Frage auf, ob …'],
              ['Gewichtung', 'überwiegen / ins Gewicht fallen'],
              ['Urteil', 'Unter dem Strich … / Alles in allem …'],
            ],
          },
        },
        {
          id: 'a6-3-match',
          type: 'MATCHING',
          instruction: 'Chance oder Risiko? Ordnen Sie zu.',
          left: [
            { id: 'l1', text: 'Die Software verkürzt die Wartezeit auf einen Befund.' },
            { id: 'l2', text: 'Bei fremden Geräten könnte sie schlechter abschneiden.' },
            { id: 'l3', text: 'Radiologen gewinnen Zeit für schwierige Fälle.' },
            { id: 'l4', text: 'Die Haftung bei Fehlern ist ungeklärt.' },
          ],
          right: [
            { id: 'r1', text: 'Chance: Schnelligkeit' },
            { id: 'r2', text: 'Risiko: begrenzte Übertragbarkeit' },
            { id: 'r3', text: 'Chance: Entlastung von Fachkräften' },
            { id: 'r4', text: 'Risiko: rechtliche Unsicherheit' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'a6-3-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die Redemittel.',
          wordBank: ['eröffnet', 'birgt', 'wirft', 'überwiegen', 'Unter dem Strich'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Die Software ' },
            { kind: 'GAP', gapId: 'k1', solution: ['eröffnet'], width: 9 },
            { kind: 'TEXT', text: ' die Möglichkeit, Befunde schneller zu stellen. Sie ' },
            { kind: 'GAP', gapId: 'k2', solution: ['birgt'], width: 6 },
            { kind: 'TEXT', text: ' aber die Gefahr, dass Fehler unbemerkt bleiben. Das ' },
            { kind: 'GAP', gapId: 'k3', solution: ['wirft'], width: 6 },
            { kind: 'TEXT', text: ' die Frage auf, wer haftet. Derzeit ' },
            { kind: 'GAP', gapId: 'k4', solution: ['überwiegen'], width: 11 },
            { kind: 'TEXT', text: ' die Vorteile, sofern ein Arzt jeden Befund prüft. ' },
            { kind: 'GAP', gapId: 'k5', solution: ['Unter dem Strich'], width: 17 },
            { kind: 'TEXT', text: ' ist die Software eine Hilfe, kein Ersatz.' },
          ],
        },
        {
          id: 'a6-3-choice',
          type: 'CHOICE',
          instruction: 'Wählen Sie das ausgewogenste Urteil.',
          question: 'Welches Fazit passt zu einer fairen Abwägung?',
          multiple: false,
          options: [
            { id: 'u1', text: 'KI wird die Medizin retten, Bedenken sind Fortschrittsfeindlichkeit.' },
            { id: 'u2', text: 'Maschinen dürfen niemals über Menschen urteilen.' },
            { id: 'u3', text: 'Unter dem Strich überwiegen die Chancen, sofern die Software an vielfältigen Daten geprüft wird und ein Arzt die letzte Entscheidung trifft.' },
            { id: 'u4', text: 'Man kann dazu nichts sagen.' },
          ],
          solution: ['u3'],
          explanation:
            'Das dritte Fazit gewichtet, nennt Bedingungen und greift die beiden konkreten Risiken aus dem Text auf. Die anderen urteilen pauschal oder verweigern ein Urteil.',
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – einen Vortrag halten.
  {
    order: 4,
    title: 'Einen Vortrag halten',
    subtitle: 'Gliedern, überleiten, abschließen',
    estimatedMinutes: 30,
    content: {
      version: v,
      blocks: [
        { id: 'a6-4-h1', type: 'HEADING', level: 1, text: 'Einen Vortrag halten' },
        {
          id: 'a6-4-intro',
          type: 'TEXT',
          text: 'Wer liest, kann zurückblättern; wer zuhört, nicht. Ein Vortrag braucht deshalb mehr Orientierung als ein Text: Er kündigt an, was kommt, markiert Übergänge und fasst am Ende zusammen. Was im Aufsatz überflüssig wäre, ist im Vortrag eine Höflichkeit gegenüber dem Publikum.',
        },
        {
          id: 'a6-4-info-redemittel',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Redemittel für den Vortrag',
          text: 'Die Redemittel sind bewusst formelhaft: Das Publikum erkennt sie sofort als Wegweiser. Bei Folien gilt: auf das Wesentliche zeigen („Wie Sie hier sehen …“), nicht die Folie vorlesen.',
          table: {
            headers: ['Teil', 'Redemittel'],
            rows: [
              ['Einstieg', 'Stellen Sie sich vor, … / Wussten Sie, dass …?'],
              ['Gliederung', 'Mein Vortrag gliedert sich in drei Teile.'],
              ['Überleitung', 'Damit komme ich zum zweiten Punkt.'],
              ['Grafik', 'Wie Sie auf dieser Grafik sehen, …'],
              ['Zusammenfassung', 'Lassen Sie mich die wichtigsten Punkte zusammenfassen.'],
              ['Schluss', 'Vielen Dank für Ihre Aufmerksamkeit. Ich freue mich auf Ihre Fragen.'],
            ],
          },
        },
        {
          id: 'a6-4-ordering',
          type: 'ORDERING',
          instruction: 'Bringen Sie die Teile des Vortrags in die richtige Reihenfolge.',
          items: [
            { id: 'o1', text: 'Stellen Sie sich vor, Ihr Röntgenbild wird nachts um drei von einer Software ausgewertet.' },
            { id: 'o2', text: 'Mein Vortrag gliedert sich in drei Teile: Funktionsweise, Chancen und Risiken.' },
            { id: 'o3', text: 'Damit komme ich zum zweiten Punkt, den Chancen.' },
            { id: 'o4', text: 'Lassen Sie mich die wichtigsten Punkte zusammenfassen.' },
            { id: 'o5', text: 'Vielen Dank für Ihre Aufmerksamkeit. Ich freue mich auf Ihre Fragen.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5'],
        },
        {
          id: 'a6-4-match',
          type: 'MATCHING',
          instruction: 'Welche Funktion hat der Satz?',
          left: [
            { id: 'l1', text: 'Wussten Sie, dass jede zweite Klinik schon KI testet?' },
            { id: 'l2', text: 'Damit komme ich zum letzten Punkt.' },
            { id: 'l3', text: 'Wie Sie auf dieser Grafik sehen, sinken die Wartezeiten.' },
            { id: 'l4', text: 'Ich freue mich auf Ihre Fragen.' },
          ],
          right: [
            { id: 'r1', text: 'Aufmerksamkeit wecken' },
            { id: 'r2', text: 'überleiten' },
            { id: 'r3', text: 'auf eine Folie verweisen' },
            { id: 'r4', text: 'zur Diskussion überleiten' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'a6-4-choice',
          type: 'CHOICE',
          instruction: 'Wählen Sie die beste Reaktion.',
          question: 'Nach dem Vortrag stellt jemand eine Frage, die Sie nicht sicher beantworten können. Was sagen Sie?',
          multiple: false,
          options: [
            { id: 'q1', text: 'Das ist eine dumme Frage.' },
            { id: 'q2', text: 'Das weiß doch jeder.' },
            { id: 'q3', text: 'Das ist eine gute Frage, die ich nicht aus dem Stegreif beantworten kann. Ich reiche Ihnen die Zahlen gern nach.' },
            { id: 'q4', text: 'Dazu sage ich nichts.' },
          ],
          solution: ['q3'],
          explanation:
            'Eine Wissenslücke offen zuzugeben und eine Antwort nachzureichen, wirkt souveräner als Abwehr oder Ausflüchte.',
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – Wiederholung und Vortragsmanuskript.
  {
    order: 5,
    title: 'Zukunft gestalten',
    subtitle: 'Wiederholung und Vortrag',
    estimatedMinutes: 34,
    content: {
      version: v,
      blocks: [
        { id: 'a6-5-h1', type: 'HEADING', level: 1, text: 'Zukunft gestalten' },
        {
          id: 'a6-5-intro',
          type: 'TEXT',
          text: 'Mit diesem Kapitel endet die Stufe C1. Sie haben gelernt, Aussagen wiederzugeben, ohne sich mit ihnen gemein zu machen, Zielkonflikte darzustellen, Prognosen abzustufen und vor Publikum zu sprechen. Die letzte Aufgabe verbindet all das.',
        },
        {
          id: 'a6-5-choice',
          type: 'CHOICE',
          instruction: 'Welche Aussagen sind korrekt? (Mehrfachauswahl)',
          question: 'Wählen Sie alle zutreffenden Aussagen.',
          multiple: true,
          options: [
            { id: 'y1', text: '„Das dürfte teuer werden“ drückt eine gut begründete Vermutung aus.' },
            { id: 'y2', text: '„Das muss ein Fehler sein“ bedeutet hier, dass etwas Pflicht ist.' },
            { id: 'y3', text: '„birgt die Gefahr“ benennt ein Risiko.' },
            { id: 'y4', text: 'Ein Vortrag sollte seine Gliederung nicht ankündigen, um spannend zu bleiben.' },
          ],
          solution: ['y1', 'y3'],
          explanation:
            '„muss“ hat hier subjektive Bedeutung: Der Sprecher ist fast sicher. Und ein Vortrag profitiert von einer angekündigten Gliederung, weil Zuhörer nicht zurückblättern können.',
        },
        {
          id: 'a6-5-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die Zusammenfassung des Kapitels.',
          wordBank: ['Tätigkeiten', 'dürfte', 'könnte', 'birgt', 'gliedert', 'zusammenfassen'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Automatisiert werden meist einzelne ' },
            { kind: 'GAP', gapId: 'z1', solution: ['Tätigkeiten'], width: 12 },
            { kind: 'TEXT', text: '. Eine vorsichtige, aber begründete Prognose formuliert man mit „' },
            { kind: 'GAP', gapId: 'z2', solution: ['dürfte'], width: 7 },
            { kind: 'TEXT', text: '“, eine unsichere mit „' },
            { kind: 'GAP', gapId: 'z3', solution: ['könnte'], width: 7 },
            { kind: 'TEXT', text: '“. Eine Technik ' },
            { kind: 'GAP', gapId: 'z4', solution: ['birgt'], width: 6 },
            { kind: 'TEXT', text: ' Risiken und eröffnet Chancen. Ein Vortrag ' },
            { kind: 'GAP', gapId: 'z5', solution: ['gliedert'], width: 9 },
            { kind: 'TEXT', text: ' sich in Teile, und am Ende sollte man die wichtigsten Punkte ' },
            { kind: 'GAP', gapId: 'z6', solution: ['zusammenfassen'], width: 15 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'a6-5-writing',
          type: 'WRITING',
          instruction: 'Schreiben Sie ein Vortragsmanuskript.',
          prompt:
            'Sie halten auf einer Konferenz einen fünfminütigen Vortrag zum Thema „Sollten Schulen KI-Programme im Unterricht zulassen?“. Schreiben Sie das Manuskript (220–300 Wörter) mit Einstieg, angekündigter Gliederung, Chancen und Risiken, mindestens zwei abgestuften Prognosen (z. B. mit „dürfte“, „könnte“, „wohl“) und einem Schluss mit Zusammenfassung.',
          minWords: 220,
          maxWords: 310,
          aiFeedback: true,
          sampleAnswer:
            'Meine sehr geehrten Damen und Herren,\n\nstellen Sie sich vor, eine Schülerin gibt einen Aufsatz ab, der fehlerfrei und klug ist – und den sie in zwei Minuten von einem Programm hat schreiben lassen. Ist das Betrug, oder ist das die Zukunft des Lernens?\n\nMein Vortrag gliedert sich in drei Teile. Zuerst spreche ich über die Chancen, dann über die Risiken, und zum Schluss mache ich einen Vorschlag.\n\nBeginnen wir mit den Chancen. KI-Programme können jedem Schüler sofort Rückmeldung geben, etwas, das keine Lehrkraft mit dreißig Kindern leisten kann. Gerade schwächere Schülerinnen und Schüler dürften davon profitieren, weil sie in ihrem eigenen Tempo üben können.\n\nDamit komme ich zu den Risiken. Wer einen Text schreiben lässt, lernt nicht, selbst zu schreiben. Hinzu kommt, dass die Programme Fehler machen, die überzeugend klingen. Wer das nicht erkennt, könnte Falsches für wahr halten. Außerdem birgt die Nutzung Gefahren für den Datenschutz, wenn Schülerdaten an Firmen im Ausland fließen.\n\nWas folgt daraus? Ein Verbot wird sich wohl kaum durchsetzen lassen, denn die Programme sind auf jedem Handy verfügbar. Sinnvoller ist es, den Umgang mit ihnen zu lehren: Wann hilft das Programm, wann schadet es, und wie überprüft man seine Antworten?\n\nLassen Sie mich die wichtigsten Punkte zusammenfassen. KI eröffnet die Chance auf individuelles Lernen, birgt aber die Gefahr, dass grundlegende Fähigkeiten verkümmern. Schulen sollten die Programme deshalb nicht verbieten, sondern ihren kritischen Gebrauch unterrichten – mit klaren Regeln und datenschutzkonformen Angeboten.\n\nVielen Dank für Ihre Aufmerksamkeit. Ich freue mich auf Ihre Fragen.',
        },
      ],
    },
  },
];
