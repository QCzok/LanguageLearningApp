import type { UnitSeed } from './chapter-beginner-1';

/**
 * Intermediate, Kapitel 10: „Recht und Ordnung“ (B2, Kapitel 4)
 *
 * Fünf Seiten. Ein Kapitel für den Alltag mit Vermietern, Ämtern und
 * Verträgen – dort, wo Deutsch am förmlichsten ist und wo es am meisten
 * darauf ankommt, jeden Satz genau zu verstehen.
 *
 * Aufbau: Seite 1 liest einen Ratgeber zu Rechten und Pflichten von Mietern.
 * Seite 2 ist der grammatische Kern: die Passiversatzformen („ist zu
 * zahlen“, „lässt sich kündigen“, „kündbar“), die in Regeln und Verträgen
 * überall stehen. Seite 3 entschlüsselt einen Brief vom Amt, Seite 4 zeigt
 * den Aufbau einer förmlichen Beschwerde, Seite 5 wiederholt und lässt eine
 * eigene Beschwerde schreiben.
 *
 * Einsprachig deutsch wie der ganze Intermediate-Band. Die Rechtslage ist
 * vereinfacht dargestellt und ersetzt keine Beratung; Personen, Firmen und
 * Schreiben sind erfunden. Sämtliche Texte sind eigenständig verfasst.
 */
const v = 1;

export const INTERMEDIATE_10_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Rechte und Pflichten von Mietern.
  {
    order: 1,
    title: 'Was darf ich, was muss ich?',
    subtitle: 'Rechte und Pflichten beschreiben',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'i10-1-h1', type: 'HEADING', level: 1, text: 'Was darf ich, was muss ich?' },
        {
          id: 'i10-1-image',
          type: 'IMAGE',
          url: 'illustration:city-street',
          alt: 'Eine Straße mit Mehrfamilienhäusern.',
          caption: 'Mehr als die Hälfte der Menschen in Deutschland wohnt zur Miete.',
        },
        {
          id: 'i10-1-text',
          type: 'TEXT',
          text: 'Ratgeber: Mieten in Deutschland – die wichtigsten Rechte und Pflichten\n\nWer eine Wohnung mietet, schließt mit dem Vermieter einen Vertrag, der beide Seiten verpflichtet. Die wichtigste Pflicht des Mieters ist es, die Miete pünktlich zu zahlen – in der Regel bis zum dritten Werktag des Monats. Außerdem muss er die Wohnung pfleglich behandeln und Schäden, etwa einen tropfenden Wasserhahn, unverzüglich melden.\n\nDer Vermieter wiederum ist verpflichtet, die Wohnung in einem bewohnbaren Zustand zu halten. Fällt die Heizung im Winter aus, muss er sie reparieren lassen. Geschieht das nicht in angemessener Zeit, darf der Mieter unter Umständen die Miete mindern.\n\nViele Streitigkeiten drehen sich um die Hausordnung. Sie regelt zum Beispiel Ruhezeiten, die Reinigung des Treppenhauses und die Nutzung des Hofs. Grundsätzlich gilt: Was in der eigenen Wohnung passiert, ist Privatsache – solange die Nachbarn nicht unzumutbar gestört werden. Ein Haustier darf ein Vermieter übrigens nicht generell verbieten; bei Hunden und Katzen kommt es auf den Einzelfall an.\n\nKündigen kann der Mieter mit einer Frist von drei Monaten, ohne einen Grund zu nennen. Der Vermieter hingegen braucht einen berechtigten Grund, etwa Eigenbedarf.',
        },
        {
          id: 'i10-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: Recht und Wohnen',
          items: [
            {
              term: 'Vertrag',
              article: 'der',
              plural: 'die Verträge',
              translations: { en: 'contract', es: 'el contrato', fr: 'le contrat', it: 'il contratto' },
              example: 'einen Vertrag schließen / kündigen',
            },
            {
              term: 'Pflicht',
              article: 'die',
              plural: 'die Pflichten',
              translations: { en: 'duty, obligation', es: 'la obligación', fr: 'le devoir, l’obligation', it: 'l’obbligo, il dovere' },
            },
            {
              term: 'verpflichtet sein (zu + Dat.)',
              translations: { en: 'to be obliged (to)', es: 'estar obligado (a)', fr: 'être tenu (de)', it: 'essere obbligato (a)' },
            },
            {
              term: 'kündigen',
              translations: { en: 'to give notice, to terminate', es: 'rescindir, dar de baja', fr: 'résilier', it: 'disdire, rescindere' },
              example: 'Sie hat die Wohnung zum 31. März gekündigt.',
            },
            {
              term: 'Frist',
              article: 'die',
              plural: 'die Fristen',
              translations: { en: 'deadline, notice period', es: 'el plazo', fr: 'le délai', it: 'il termine' },
            },
            {
              term: 'unverzüglich',
              translations: { en: 'without delay', es: 'sin demora', fr: 'sans délai', it: 'senza indugio' },
            },
            {
              term: 'die Miete mindern',
              translations: { en: 'to reduce the rent', es: 'reducir el alquiler', fr: 'réduire le loyer', it: 'ridurre l’affitto' },
            },
            {
              term: 'unzumutbar',
              translations: { en: 'unreasonable, intolerable', es: 'inaceptable, intolerable', fr: 'inacceptable', it: 'inaccettabile' },
            },
            {
              term: 'Eigenbedarf',
              article: 'der',
              translations: { en: 'landlord’s own use', es: 'la necesidad propia', fr: 'le besoin personnel', it: 'l’uso personale' },
            },
          ],
        },
        {
          id: 'i10-1-match',
          type: 'MATCHING',
          instruction: 'Wessen Pflicht ist das?',
          left: [
            { id: 'l1', text: 'die Miete pünktlich zahlen' },
            { id: 'l2', text: 'die kaputte Heizung reparieren lassen' },
            { id: 'l3', text: 'einen Wasserschaden sofort melden' },
            { id: 'l4', text: 'für eine Kündigung einen Grund nennen' },
          ],
          right: [
            { id: 'r1', text: 'Mieter (Zahlung)' },
            { id: 'r2', text: 'Vermieter (Instandhaltung)' },
            { id: 'r3', text: 'Mieter (Meldepflicht)' },
            { id: 'r4', text: 'Vermieter (Kündigung)' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'i10-1-choice',
          type: 'CHOICE',
          instruction: 'Lesen Sie den Ratgeber.',
          question: 'Welche Aussagen sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'a1', text: 'Mieter müssen für eine Kündigung keinen Grund angeben.' },
            { id: 'a2', text: 'Vermieter dürfen Haustiere grundsätzlich verbieten.' },
            { id: 'a3', text: 'Bei einer kaputten Heizung kann man unter Umständen weniger Miete zahlen.' },
            { id: 'a4', text: 'Die Hausordnung regelt, was in der eigenen Wohnung passiert.' },
          ],
          solution: ['a1', 'a3'],
          explanation:
            'Ein generelles Verbot von Haustieren ist nicht erlaubt. Und die Hausordnung regelt das Zusammenleben im Haus – was in der eigenen Wohnung passiert, ist Privatsache.',
        },
        {
          id: 'i10-1-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie mit den Wörtern aus dem Kasten.',
          wordBank: ['Vertrag', 'Frist', 'gekündigt', 'unverzüglich', 'verpflichtet'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Herr Kamara hat seinen ' },
            { kind: 'GAP', gapId: 'c1', solution: ['Vertrag'], width: 8 },
            { kind: 'TEXT', text: ' beim Fitnessstudio ' },
            { kind: 'GAP', gapId: 'c2', solution: ['gekündigt'], width: 10 },
            { kind: 'TEXT', text: '. Leider hat er die ' },
            { kind: 'GAP', gapId: 'c3', solution: ['Frist'], width: 6 },
            { kind: 'TEXT', text: ' von drei Monaten verpasst. Nun ist er ' },
            { kind: 'GAP', gapId: 'c4', solution: ['verpflichtet'], width: 12 },
            { kind: 'TEXT', text: ', noch ein Jahr zu zahlen. Er hat sich ' },
            { kind: 'GAP', gapId: 'c5', solution: ['unverzüglich', 'unverzueglich'], width: 13 },
            { kind: 'TEXT', text: ' bei der Verbraucherzentrale beraten lassen.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – Passiversatzformen.
  {
    order: 2,
    title: 'Die Miete ist zu zahlen',
    subtitle: 'Passiversatzformen',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'i10-2-h1', type: 'HEADING', level: 1, text: 'Die Miete ist zu zahlen' },
        {
          id: 'i10-2-text',
          type: 'TEXT',
          text: 'Aus einem Mietvertrag:\n\n§ 3 Die Miete ist bis zum dritten Werktag eines Monats im Voraus zu zahlen.\n§ 7 Schäden sind dem Vermieter unverzüglich anzuzeigen.\n§ 9 Das Treppenhaus ist abwechselnd zu reinigen.\n§ 12 Der Vertrag lässt sich mit einer Frist von drei Monaten kündigen.\n§ 14 Fahrräder sind im Keller abzustellen. Der Kellerraum ist abschließbar.\n\nIn keinem dieser Sätze steht „werden“ – und trotzdem sind alle passivisch gemeint. Juristische Texte, Regeln und Anleitungen benutzen diese sogenannten Passiversatzformen, weil sie kürzer und oft auch unpersönlicher sind.',
        },
        {
          id: 'i10-2-info-ersatz',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Passiversatzformen',
          text: 'Die Formen ersetzen ein Passiv mit Modalverb. Achten Sie genau auf die Bedeutung: „sein + zu + Infinitiv“ kann „muss“ oder „kann“ bedeuten – was gemeint ist, zeigt der Kontext. In Verträgen und Regeln ist es fast immer „muss“. Bei trennbaren Verben steht „zu“ in der Mitte: anzuzeigen, abzustellen.',
          table: {
            headers: ['Ersatzform', 'Bedeutung', 'Beispiel'],
            rows: [
              ['sein + zu + Infinitiv', 'muss / kann … werden', 'Die Miete ist pünktlich zu zahlen. (= muss gezahlt werden)'],
              ['sich lassen + Infinitiv', 'kann … werden', 'Der Vertrag lässt sich kündigen. (= kann gekündigt werden)'],
              ['Adjektiv auf -bar / -lich', 'kann … werden', 'Der Raum ist abschließbar. / Die Schrift ist kaum lesbar.'],
              ['man + Aktiv', 'Passiv allgemein', 'Man muss die Miete pünktlich zahlen.'],
              ['bekommen + Partizip II', 'Passiv mit Dativ-Person', 'Er bekommt die Kaution zurückgezahlt.'],
            ],
          },
        },
        {
          id: 'i10-2-info-un',
          type: 'INFO',
          variant: 'TIP',
          title: 'Verneinung mit un-',
          text: 'Adjektive auf -bar und -lich lassen sich oft mit „un-“ verneinen: unbezahlbar (kann nicht bezahlt werden), unverständlich, unvermeidbar. Das Kapitel kennt schon eines: unzumutbar – das kann man niemandem zumuten.',
        },
        {
          id: 'i10-2-choice',
          type: 'CHOICE',
          instruction: 'Was bedeutet der Satz?',
          question: 'Schäden sind dem Vermieter unverzüglich anzuzeigen.',
          multiple: false,
          options: [
            { id: 'a1', text: 'Schäden können dem Vermieter angezeigt werden.' },
            { id: 'a2', text: 'Schäden müssen dem Vermieter sofort gemeldet werden.' },
            { id: 'a3', text: 'Der Vermieter muss Schäden sofort anzeigen.' },
            { id: 'a4', text: 'Schäden werden vom Vermieter angezeigt.' },
          ],
          solution: ['a2'],
          explanation:
            'In einem Vertrag bedeutet „sein + zu + Infinitiv“ eine Pflicht: muss … werden. Wer meldet? Der Mieter – dem Vermieter (Dativ) wird gemeldet.',
        },
        {
          id: 'i10-2-cloze',
          type: 'CLOZE',
          instruction: 'Formen Sie um. Ergänzen Sie die Ersatzform.',
          wordBank: ['lässt', 'zu', 'bar', 'abzugeben', 'lösen', 'lassen'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Das Formular muss bis Freitag ausgefüllt werden. → Das Formular ist bis Freitag aus' },
            { kind: 'GAP', gapId: 'e1', solution: ['zu'], width: 4 },
            { kind: 'TEXT', text: 'füllen.\n2. Der Schlüssel muss beim Auszug abgegeben werden. → Der Schlüssel ist beim Auszug ' },
            { kind: 'GAP', gapId: 'e2', solution: ['abzugeben'], width: 10 },
            { kind: 'TEXT', text: '.\n3. Das Problem kann leicht gelöst werden. → Das Problem ' },
            { kind: 'GAP', gapId: 'e3', solution: ['lässt'], width: 6 },
            { kind: 'TEXT', text: ' sich leicht ' },
            { kind: 'GAP', gapId: 'e4', solution: ['lösen', 'loesen'], width: 6 },
            { kind: 'TEXT', text: '.\n4. Die Fenster können nicht geöffnet werden. → Die Fenster ' },
            { kind: 'GAP', gapId: 'e5', solution: ['lassen'], width: 7 },
            { kind: 'TEXT', text: ' sich nicht öffnen.\n5. Der Vertrag kann jederzeit gekündigt werden. → Der Vertrag ist jederzeit künd' },
            { kind: 'GAP', gapId: 'e6', solution: ['bar'], width: 4 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'i10-2-match',
          type: 'MATCHING',
          instruction: 'Welche Bedeutung hat die Ersatzform?',
          left: [
            { id: 'l1', text: 'Das Rauchen ist im ganzen Gebäude zu unterlassen.' },
            { id: 'l2', text: 'Die Kosten sind steuerlich absetzbar.' },
            { id: 'l3', text: 'Der Termin lässt sich nicht verschieben.' },
            { id: 'l4', text: 'Seine Schrift ist unleserlich.' },
          ],
          right: [
            { id: 'r1', text: 'Das Rauchen muss unterlassen werden.' },
            { id: 'r2', text: 'Die Kosten können von der Steuer abgesetzt werden.' },
            { id: 'r3', text: 'Der Termin kann nicht verschoben werden.' },
            { id: 'r4', text: 'Seine Schrift kann nicht gelesen werden.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'i10-2-order',
          type: 'ORDERING',
          instruction: 'Bilden Sie einen Satz aus der Hausordnung.',
          items: [
            { id: 'o1', text: 'Mülltonnen' },
            { id: 'o2', text: 'sind' },
            { id: 'o3', text: 'nach der Leerung' },
            { id: 'o4', text: 'in den Hof' },
            { id: 'o5', text: 'zurückzustellen.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5'],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – einen Brief vom Amt verstehen.
  {
    order: 3,
    title: 'Post vom Amt',
    subtitle: 'Formelle Texte verstehen',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'i10-3-h1', type: 'HEADING', level: 1, text: 'Post vom Amt' },
        {
          id: 'i10-3-text',
          type: 'TEXT',
          text: 'Stadt Neustadt – Bürgeramt\n\nAnhörung vor Erlass eines Bußgeldbescheids\n\nSehr geehrte Frau Nowak,\n\nIhnen wird zur Last gelegt, am 14.05. um 22:40 Uhr in der Gartenstraße 12 durch lautstarke Musik die Nachtruhe gestört zu haben. Hierbei handelt es sich um eine Ordnungswidrigkeit nach § 5 der Lärmschutzverordnung.\n\nSie haben die Möglichkeit, sich zu dem Vorwurf zu äußern. Ihre Stellungnahme ist innerhalb von zwei Wochen nach Zugang dieses Schreibens schriftlich einzureichen. Sollten Sie von dieser Möglichkeit keinen Gebrauch machen, wird nach Aktenlage entschieden.\n\nBitte beachten Sie: Zur Äußerung sind Sie nicht verpflichtet. Angaben zu Ihrer Person (Name, Anschrift, Geburtsdatum) sind jedoch vollständig zu machen.\n\nMit freundlichen Grüßen\ni. A. M. Berger',
        },
        {
          id: 'i10-3-info-amt',
          type: 'INFO',
          variant: 'TIP',
          title: 'Amtsdeutsch entschlüsseln',
          text: 'Behördenbriefe benutzen viele Nominalformen, Passiv und feste Wendungen. Lesen Sie zuerst den Betreff – er sagt, worum es geht. Suchen Sie dann nach Fristen, Pflichten („ist … zu …“) und Folgen („Sollten Sie …, wird …“). Viele Wendungen lassen sich einfach übersetzen.',
          table: {
            headers: ['Amtsdeutsch', 'einfach gesagt'],
            rows: [
              ['Ihnen wird zur Last gelegt, …', 'Man wirft Ihnen vor, …'],
              ['nach Zugang dieses Schreibens', 'nachdem Sie diesen Brief bekommen haben'],
              ['von einer Möglichkeit Gebrauch machen', 'eine Möglichkeit nutzen'],
              ['nach Aktenlage entscheiden', 'mit den Informationen entscheiden, die man schon hat'],
              ['i. A. (im Auftrag)', 'Die Person unterschreibt für jemand anderen / für die Behörde.'],
            ],
          },
        },
        {
          id: 'i10-3-choice',
          type: 'CHOICE',
          instruction: 'Lesen Sie den Brief.',
          question: 'Welche Aussagen sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'a1', text: 'Frau Nowak soll nachts zu laut gewesen sein.' },
            { id: 'a2', text: 'Frau Nowak muss sich zu dem Vorwurf äußern.' },
            { id: 'a3', text: 'Sie hat zwei Wochen Zeit, schriftlich Stellung zu nehmen.' },
            { id: 'a4', text: 'Wenn sie nicht antwortet, wird das Verfahren eingestellt.' },
          ],
          solution: ['a1', 'a3'],
          explanation:
            'Sie „ist nicht verpflichtet“, sich zu äußern – nur die Angaben zur Person muss sie machen. Wenn sie nicht antwortet, wird „nach Aktenlage entschieden“, also ohne ihre Sicht – eingestellt wird nichts.',
        },
        {
          id: 'i10-3-match',
          type: 'MATCHING',
          instruction: 'Was bedeutet die Wendung?',
          left: [
            { id: 'l1', text: 'eine Ordnungswidrigkeit' },
            { id: 'l2', text: 'eine Stellungnahme einreichen' },
            { id: 'l3', text: 'ein Bußgeldbescheid' },
            { id: 'l4', text: 'Sollten Sie keinen Gebrauch machen, …' },
          ],
          right: [
            { id: 'r1', text: 'ein kleiner Verstoß gegen eine Regel, keine Straftat' },
            { id: 'r2', text: 'die eigene Sicht schriftlich schicken' },
            { id: 'r3', text: 'ein offizielles Schreiben, dass man eine Geldstrafe zahlen muss' },
            { id: 'r4', text: 'Wenn Sie die Möglichkeit nicht nutzen, …' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'i10-3-cloze',
          type: 'CLOZE',
          instruction: 'Frau Nowak erklärt ihrem Nachbarn den Brief. Ergänzen Sie.',
          wordBank: ['vor', 'Wochen', 'muss', 'antworte', 'entscheiden'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '„Stell dir vor, die Stadt wirft mir ' },
            { kind: 'GAP', gapId: 'a1', solution: ['vor'], width: 4 },
            { kind: 'TEXT', text: ', dass meine Musik im Mai zu laut war. Ich kann innerhalb von zwei ' },
            { kind: 'GAP', gapId: 'a2', solution: ['Wochen'], width: 7 },
            { kind: 'TEXT', text: ' schreiben, wie es aus meiner Sicht war. Ich ' },
            { kind: 'GAP', gapId: 'a3', solution: ['muss'], width: 5 },
            { kind: 'TEXT', text: ' das aber nicht. Wenn ich nicht ' },
            { kind: 'GAP', gapId: 'a4', solution: ['antworte'], width: 9 },
            { kind: 'TEXT', text: ', ' },
            { kind: 'GAP', gapId: 'a5', solution: ['entscheiden'], width: 12 },
            { kind: 'TEXT', text: ' sie einfach ohne mich.“' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – eine förmliche Beschwerde.
  {
    order: 4,
    title: 'Hiermit beschwere ich mich',
    subtitle: 'Eine förmliche Beschwerde verfassen',
    estimatedMinutes: 27,
    content: {
      version: v,
      blocks: [
        { id: 'i10-4-h1', type: 'HEADING', level: 1, text: 'Hiermit beschwere ich mich' },
        {
          id: 'i10-4-brief',
          type: 'TEXT',
          text: 'Tarek Haddad\nLindenweg 8\n04109 Leipzig\n\nHausverwaltung Sommer GmbH\nMarktplatz 3\n04109 Leipzig\n\nLeipzig, 20.01.\n\nAusfall der Heizung in der Wohnung Lindenweg 8, 3. OG links – Aufforderung zur Reparatur\n\nSehr geehrte Damen und Herren,\n\nhiermit möchte ich mich über den anhaltenden Ausfall der Heizung in meiner Wohnung beschweren.\n\nSeit dem 9. Januar funktionieren die Heizkörper in Wohn- und Schlafzimmer nicht mehr. Die Temperatur in der Wohnung liegt seitdem bei höchstens 14 Grad. Ich habe den Schaden am 9. und am 13. Januar telefonisch gemeldet. Beide Male wurde mir zugesichert, dass sich ein Techniker innerhalb von zwei Tagen melden werde. Dies ist bis heute nicht geschehen.\n\nDa ich im Homeoffice arbeite, ist dieser Zustand für mich unzumutbar. Ich fordere Sie daher auf, die Heizung bis spätestens zum 27. Januar reparieren zu lassen. Sollte dies nicht geschehen, behalte ich mir vor, die Miete für die Dauer des Ausfalls angemessen zu mindern.\n\nFür Rückfragen bin ich unter 0341 555 219 erreichbar.\n\nMit freundlichen Grüßen\nTarek Haddad',
        },
        {
          id: 'i10-4-info-beschwerde',
          type: 'INFO',
          variant: 'TIP',
          title: 'Aufbau einer förmlichen Beschwerde',
          text: 'Eine gute Beschwerde ist sachlich, genau und klar: Sie beschreibt das Problem mit Daten und Fakten, nennt, was man schon unternommen hat, stellt eine konkrete Forderung mit Frist und kündigt – höflich – mögliche Folgen an. Beleidigungen und Übertreibungen schwächen jede Beschwerde.',
          table: {
            headers: ['Teil', 'Redemittel'],
            rows: [
              ['Anlass', 'Hiermit möchte ich mich über … beschweren. / Ich wende mich an Sie wegen …'],
              ['Sachverhalt', 'Seit dem … / Am … habe ich … gemeldet. / Leider ist bis heute nichts geschehen.'],
              ['Forderung', 'Ich fordere Sie auf, … bis zum … / Ich bitte Sie dringend, …'],
              ['Folgen', 'Sollte dies nicht geschehen, behalte ich mir vor, … / … sehe ich mich gezwungen, …'],
              ['Schluss', 'Für Rückfragen stehe ich gern zur Verfügung. / Mit freundlichen Grüßen'],
            ],
          },
        },
        {
          id: 'i10-4-order',
          type: 'ORDERING',
          instruction: 'Bringen Sie die Teile der Beschwerde in die richtige Reihenfolge.',
          items: [
            { id: 'o1', text: 'Betreff mit dem Thema des Briefs' },
            { id: 'o2', text: 'Anrede' },
            { id: 'o3', text: 'Anlass der Beschwerde' },
            { id: 'o4', text: 'genaue Beschreibung des Problems' },
            { id: 'o5', text: 'Forderung mit Frist' },
            { id: 'o6', text: 'mögliche Folgen' },
            { id: 'o7', text: 'Gruß und Unterschrift' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5', 'o6', 'o7'],
        },
        {
          id: 'i10-4-choice',
          type: 'CHOICE',
          instruction: 'Welche Sätze passen in eine förmliche Beschwerde? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'a1', text: 'Ich bitte Sie dringend, den Schaden bis zum 5. März zu beheben.' },
            { id: 'a2', text: 'Ihre Firma ist eine absolute Katastrophe!' },
            { id: 'a3', text: 'Am 2. Februar habe ich den Schaden schriftlich gemeldet.' },
            { id: 'a4', text: 'Wenn Sie nicht reparieren, rufe ich jeden Tag an.' },
          ],
          solution: ['a1', 'a3'],
          explanation:
            'Eine förmliche Beschwerde bleibt sachlich: Fakten mit Datum und eine klare Forderung. Beleidigungen (a2) und Drohungen ohne rechtliche Grundlage (a4) schwächen den Brief.',
        },
        {
          id: 'i10-4-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie eine andere Beschwerde.',
          wordBank: ['Hiermit', 'geschehen', 'fordere', 'Sollte', 'vor'],
          caseSensitive: false,
          segments: [
            { kind: 'GAP', gapId: 'b1', solution: ['Hiermit'], width: 8 },
            { kind: 'TEXT', text: ' möchte ich mich über den defekten Aufzug beschweren. Ich habe den Schaden vor drei Wochen gemeldet, leider ist bis heute nichts ' },
            { kind: 'GAP', gapId: 'b2', solution: ['geschehen'], width: 10 },
            { kind: 'TEXT', text: '. Ich ' },
            { kind: 'GAP', gapId: 'b3', solution: ['fordere'], width: 8 },
            { kind: 'TEXT', text: ' Sie auf, den Aufzug bis zum 15. Mai reparieren zu lassen. ' },
            { kind: 'GAP', gapId: 'b4', solution: ['Sollte'], width: 7 },
            { kind: 'TEXT', text: ' dies nicht möglich sein, behalte ich mir ' },
            { kind: 'GAP', gapId: 'b5', solution: ['vor'], width: 4 },
            { kind: 'TEXT', text: ', die Miete zu mindern.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – Rückblick auf Kapitel 10.
  {
    order: 5,
    title: 'Kannst du das schon?',
    subtitle: 'Rückblick, eine eigene Beschwerde',
    estimatedMinutes: 27,
    content: {
      version: v,
      blocks: [
        { id: 'i10-5-h1', type: 'HEADING', level: 1, text: 'Kannst du das schon?' },
        {
          id: 'i10-5-intro',
          type: 'TEXT',
          text: 'Prüfen Sie, was Sie aus Kapitel 10 mitnehmen: Wortschatz zu Rechten und Pflichten, die Passiversatzformen, das Verstehen formeller Briefe und den Aufbau einer Beschwerde.',
        },
        {
          id: 'i10-5-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die Regeln aus der Benutzungsordnung einer Bibliothek.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Ausgeliehene Bücher sind nach vier Wochen zurück' },
            { kind: 'GAP', gapId: 'r1', solution: ['zugeben'], width: 8 },
            { kind: 'TEXT', text: '. Die Leihfrist ' },
            { kind: 'GAP', gapId: 'r2', solution: ['lässt', 'laesst'], width: 6 },
            { kind: 'TEXT', text: ' sich zweimal verlängern. Beschädigungen sind dem Personal ' },
            { kind: 'GAP', gapId: 'r3', solution: ['unverzüglich', 'unverzueglich', 'sofort'], width: 13 },
            { kind: 'TEXT', text: ' zu melden. Die Schließfächer im Eingangsbereich sind mit einer Münze abschließ' },
            { kind: 'GAP', gapId: 'r4', solution: ['bar'], width: 4 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'i10-5-choice',
          type: 'CHOICE',
          instruction: 'Welche Sätze haben dieselbe Bedeutung wie „Das Paket kann nicht zugestellt werden“? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'k1', text: 'Das Paket ist nicht zustellbar.' },
            { id: 'k2', text: 'Das Paket lässt sich nicht zustellen.' },
            { id: 'k3', text: 'Man kann das Paket nicht zustellen.' },
            { id: 'k4', text: 'Das Paket muss nicht zugestellt werden.' },
          ],
          solution: ['k1', 'k2', 'k3'],
          explanation:
            '-bar, „sich lassen“ und „man kann“ drücken alle eine Möglichkeit aus. „muss nicht“ (k4) bedeutet dagegen: Es ist nicht nötig.',
        },
        {
          id: 'i10-5-match',
          type: 'MATCHING',
          instruction: 'Amtsdeutsch – einfach gesagt.',
          left: [
            { id: 'm1', text: 'nach Zugang dieses Schreibens' },
            { id: 'm2', text: 'Ihnen wird zur Last gelegt, …' },
            { id: 'm3', text: 'Ich behalte mir vor, …' },
            { id: 'm4', text: 'unverzüglich' },
          ],
          right: [
            { id: 'y1', text: 'nachdem Sie den Brief bekommen haben' },
            { id: 'y2', text: 'Man wirft Ihnen vor, …' },
            { id: 'y3', text: 'Ich nehme mir das Recht, …' },
            { id: 'y4', text: 'sofort, ohne Verzögerung' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'y1' },
            { leftId: 'm2', rightId: 'y2' },
            { leftId: 'm3', rightId: 'y3' },
            { leftId: 'm4', rightId: 'y4' },
          ],
        },
        {
          id: 'i10-5-writing',
          type: 'WRITING',
          instruction: 'Eine eigene Beschwerde',
          prompt:
            'Sie haben online einen Laptop bestellt. Nach zehn Tagen ist er kaputt: Der Bildschirm bleibt schwarz. Sie haben den Kundenservice zweimal per E-Mail kontaktiert, aber keine Antwort bekommen. Schreiben Sie eine förmliche Beschwerde an den Händler. Beschreiben Sie das Problem genau, nennen Sie, was Sie schon unternommen haben, stellen Sie eine Forderung mit Frist (Reparatur, Umtausch oder Geld zurück) und nennen Sie mögliche Folgen. Verwenden Sie mindestens eine Passiversatzform.',
          minWords: 130,
          maxWords: 250,
          aiFeedback: true,
          sampleAnswer:
            'Defekter Laptop, Bestellnummer 48-22917 – Aufforderung zum Umtausch\n\nSehr geehrte Damen und Herren,\n\nhiermit möchte ich mich über einen defekten Laptop beschweren, den ich am 3. März bei Ihnen bestellt habe.\n\nDas Gerät wurde am 5. März geliefert. Seit dem 15. März bleibt der Bildschirm nach dem Einschalten schwarz; das Problem lässt sich auch durch einen Neustart nicht beheben. Am 15. und am 19. März habe ich Ihren Kundenservice per E-Mail informiert, bisher aber keine Antwort erhalten.\n\nDa der Laptop erst zehn Tage alt ist, handelt es sich eindeutig um einen Mangel, der von Ihnen zu beheben ist. Ich fordere Sie daher auf, mir bis spätestens zum 2. April ein neues, funktionierendes Gerät zu schicken oder mir den Kaufpreis von 649 Euro zu erstatten.\n\nSollte ich bis zu diesem Datum nichts von Ihnen hören, sehe ich mich gezwungen, mich an die Verbraucherzentrale zu wenden.\n\nFür Rückfragen bin ich per E-Mail jederzeit erreichbar.\n\nMit freundlichen Grüßen\nSofia Marín',
        },
      ],
    },
  },
];
