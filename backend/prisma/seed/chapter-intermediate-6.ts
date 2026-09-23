import type { UnitSeed } from './chapter-beginner-1';

/**
 * Intermediate, Kapitel 6: „Gesellschaft und Engagement“ (B1, Kapitel 6)
 *
 * Fünf Seiten. Letztes Kapitel der Stufe B1. Es geht um Menschen, die sich
 * neben Beruf und Familie für andere einsetzen – und um die Frage, ob so ein
 * Einsatz freiwillig bleiben oder Pflicht werden sollte. Damit schließt die
 * Stufe mit dem, was B1 ausmacht: eine eigene Position vertreten und
 * begründen.
 *
 * Aufbau: Seite 1 stellt vier Ehrenamtliche vor, Seite 2 ist der
 * grammatische Kern – Absichten mit „um … zu“ und „damit“. Seite 3 übt die
 * Diskussion über ein Pflichtjahr mit Redemitteln zum Zustimmen und
 * Widersprechen, Seite 4 liest einen Zeitungsbericht und einen Leserbrief
 * dazu, Seite 5 wiederholt und lässt einen eigenen Leserbrief schreiben.
 *
 * Einsprachig deutsch wie der ganze Intermediate-Band. Personen und die
 * Zeitungsmeldung sind erfunden; Angaben zum Ehrenamt sind gerundet.
 * Sämtliche Texte sind eigenständig verfasst.
 */
const v = 1;

export const INTERMEDIATE_6_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – vier Ehrenamtliche.
  {
    order: 1,
    title: 'Ich engagiere mich',
    subtitle: 'Ehrenamt in Deutschland',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'i6-1-h1', type: 'HEADING', level: 1, text: 'Ich engagiere mich' },
        {
          id: 'i6-1-image',
          type: 'IMAGE',
          url: 'illustration:city-street',
          alt: 'Eine Straße in einer Stadt mit Häusern, Bäumen und Menschen.',
          caption: 'Engagement beginnt oft in der eigenen Nachbarschaft.',
        },
        {
          id: 'i6-1-text',
          type: 'TEXT',
          text: 'Vier Menschen erzählen, wofür sie ihre Freizeit einsetzen.\n\nRenate, 67: „Seit meiner Rente helfe ich zweimal pro Woche bei der Tafel. Wir sammeln Lebensmittel, die Supermärkte nicht mehr verkaufen, und geben sie an Menschen mit wenig Geld weiter. Man sieht jeden Tag, dass man gebraucht wird.“\n\nFelix, 19: „Ich bin bei der Freiwilligen Feuerwehr in unserem Dorf. Einmal pro Woche haben wir Übung, und wenn der Alarm kommt, fahre ich los – auch nachts. Ohne uns Freiwillige gäbe es hier auf dem Land gar keine Feuerwehr.“\n\nAmira, 34: „Ich trainiere eine Mädchen-Fußballmannschaft im Sportverein. Die meisten Kinder kommen aus Familien, die nicht viel Geld für Hobbys haben. Mir ist wichtig, dass sie Selbstvertrauen bekommen.“\n\nBernd, 52: „Ich bin Lesepate an einer Grundschule. Jeden Donnerstag lese ich mit Kindern, die zu Hause kaum Deutsch sprechen. Das kostet mich eine Stunde pro Woche – und bringt mir mehr Freude als vieles andere.“',
        },
        {
          id: 'i6-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: Engagement',
          items: [
            {
              term: 'Ehrenamt',
              article: 'das',
              plural: 'die Ehrenämter',
              translations: { en: 'voluntary work', es: 'el voluntariado', fr: 'le bénévolat', it: 'il volontariato' },
            },
            {
              term: 'ehrenamtlich',
              translations: { en: 'voluntary, unpaid', es: 'voluntario, no remunerado', fr: 'bénévole', it: 'volontario' },
              example: 'Sie arbeitet ehrenamtlich im Tierheim.',
            },
            {
              term: 'sich engagieren (für + Akk.)',
              translations: { en: 'to get involved (in)', es: 'comprometerse (con)', fr: 's’engager (pour)', it: 'impegnarsi (per)' },
              example: 'Er engagiert sich für den Umweltschutz.',
            },
            {
              term: 'sich einsetzen (für + Akk.)',
              translations: { en: 'to stand up (for), to campaign (for)', es: 'luchar (por)', fr: 'se mobiliser (pour)', it: 'battersi (per)' },
            },
            {
              term: 'Freiwillige',
              article: 'der',
              plural: 'die Freiwilligen',
              translations: { en: 'volunteer', es: 'el voluntario', fr: 'le bénévole', it: 'il volontario' },
            },
            {
              term: 'gebraucht werden',
              translations: { en: 'to be needed', es: 'ser necesario', fr: 'être utile', it: 'essere utile' },
            },
            {
              term: 'Selbstvertrauen',
              article: 'das',
              translations: { en: 'self-confidence', es: 'la confianza en sí mismo', fr: 'la confiance en soi', it: 'la fiducia in sé stessi' },
            },
            {
              term: 'Spende',
              article: 'die',
              plural: 'die Spenden',
              translations: { en: 'donation', es: 'la donación', fr: 'le don', it: 'la donazione' },
            },
            {
              term: 'Verantwortung',
              article: 'die',
              translations: { en: 'responsibility', es: 'la responsabilidad', fr: 'la responsabilité', it: 'la responsabilità' },
              example: 'Verantwortung für andere übernehmen',
            },
          ],
        },
        {
          id: 'i6-1-info-ehrenamt',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'Ein Land der Vereine',
          text: 'Rund ein Drittel aller Menschen in Deutschland engagiert sich ehrenamtlich – im Sportverein, in der Kirchengemeinde, im Naturschutz oder in der Nachbarschaftshilfe. In den meisten Städten und Dörfern besteht die Feuerwehr fast nur aus Freiwilligen. Nach der Schule können junge Leute außerdem ein Freiwilliges Soziales Jahr (FSJ) oder einen Bundesfreiwilligendienst machen, zum Beispiel in einem Krankenhaus oder Kindergarten. Dafür bekommen sie ein kleines Taschengeld.',
        },
        {
          id: 'i6-1-match',
          type: 'MATCHING',
          instruction: 'Wer macht was?',
          left: [
            { id: 'l1', text: 'Renate' },
            { id: 'l2', text: 'Felix' },
            { id: 'l3', text: 'Amira' },
            { id: 'l4', text: 'Bernd' },
          ],
          right: [
            { id: 'r1', text: 'verteilt Lebensmittel an Bedürftige.' },
            { id: 'r2', text: 'löscht Brände und hilft bei Unfällen.' },
            { id: 'r3', text: 'trainiert Mädchen im Fußball.' },
            { id: 'r4', text: 'liest mit Grundschulkindern.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'i6-1-choice',
          type: 'CHOICE',
          instruction: 'Lesen Sie die Texte noch einmal.',
          question: 'Welche Aussagen sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'a1', text: 'Renate bekommt für ihre Arbeit bei der Tafel ein Gehalt.' },
            { id: 'a2', text: 'Auf dem Land hängt die Feuerwehr von Freiwilligen ab.' },
            { id: 'a3', text: 'Amira möchte, dass die Mädchen selbstbewusster werden.' },
            { id: 'a4', text: 'Bernd findet sein Engagement zu anstrengend.' },
          ],
          solution: ['a2', 'a3'],
          explanation:
            'Alle vier arbeiten ehrenamtlich, also ohne Gehalt. Bernd sagt, das Lesen „bringt mir mehr Freude als vieles andere“ – anstrengend findet er es nicht.',
        },
        {
          id: 'i6-1-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie mit den Wörtern aus dem Kasten.',
          wordBank: ['ehrenamtlich', 'engagiert', 'Verantwortung', 'Spenden', 'gebraucht'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Mein Bruder ' },
            { kind: 'GAP', gapId: 'c1', solution: ['engagiert'], width: 10 },
            { kind: 'TEXT', text: ' sich seit Jahren im Tierheim. Er arbeitet dort ' },
            { kind: 'GAP', gapId: 'c2', solution: ['ehrenamtlich'], width: 13 },
            { kind: 'TEXT', text: ', also ohne Geld. Das Tierheim lebt vor allem von ' },
            { kind: 'GAP', gapId: 'c3', solution: ['Spenden'], width: 8 },
            { kind: 'TEXT', text: '. Mein Bruder sagt, dort fühlt er sich ' },
            { kind: 'GAP', gapId: 'c4', solution: ['gebraucht'], width: 10 },
            { kind: 'TEXT', text: '. Seit letztem Jahr trägt er sogar die ' },
            { kind: 'GAP', gapId: 'c5', solution: ['Verantwortung'], width: 14 },
            { kind: 'TEXT', text: ' für die Hunde am Wochenende.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – Absichten mit „um … zu“ und „damit“.
  {
    order: 2,
    title: 'Um zu helfen',
    subtitle: 'Absichten mit „um … zu“ und „damit“',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'i6-2-h1', type: 'HEADING', level: 1, text: 'Um zu helfen' },
        {
          id: 'i6-2-text',
          type: 'TEXT',
          text: 'Warum machen die vier das eigentlich? Sie haben geantwortet:\n\nRenate: „Ich helfe bei der Tafel, um nicht allein zu Hause zu sitzen. Und damit weniger Lebensmittel weggeworfen werden.“\n\nFelix: „Ich bin bei der Feuerwehr, um anderen Menschen in Not zu helfen.“\n\nAmira: „Ich trainiere die Mädchen, damit sie merken, was sie alles können.“\n\nBernd: „Ich lese mit den Kindern, damit sie in der Schule bessere Chancen haben. Und um selbst etwas Sinnvolles zu tun.“',
        },
        {
          id: 'i6-2-info-finale',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: '„um … zu“ oder „damit“?',
          text: 'Beide nennen ein Ziel oder eine Absicht – sie antworten auf die Frage „Wozu?“. Die Regel hängt am Subjekt: Ist das Subjekt im Haupt- und Nebensatz dasselbe, nimmt man meistens „um … zu“ + Infinitiv (ohne eigenes Subjekt). Sind die Subjekte verschieden, muss man „damit“ nehmen – mit Subjekt und konjugiertem Verb am Ende. Bei trennbaren Verben steht „zu“ in der Mitte: um aufzuräumen.',
          table: {
            headers: ['', 'Beispiel'],
            rows: [
              ['gleiches Subjekt → um … zu', 'Felix geht zur Feuerwehr, um zu helfen. (Felix geht, Felix hilft.)'],
              ['gleiches Subjekt → auch damit möglich', 'Felix geht zur Feuerwehr, damit er helfen kann.'],
              ['verschiedene Subjekte → nur damit', 'Amira trainiert die Mädchen, damit sie Selbstvertrauen bekommen.'],
              ['trennbares Verb', 'Wir treffen uns, um den Park aufzuräumen.'],
            ],
          },
        },
        {
          id: 'i6-2-info-weil',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: '„damit“ ist nicht „weil“',
          text: '„weil“ nennt einen Grund – etwas, das schon da ist: Ich helfe, weil ich Zeit habe. „damit“ und „um … zu“ nennen ein Ziel – etwas, das man erreichen will: Ich helfe, damit andere es leichter haben.',
        },
        {
          id: 'i6-2-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie „um“ oder „damit“.',
          wordBank: ['um', 'damit'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Ich spende Blut, ' },
            { kind: 'GAP', gapId: 'f1', solution: ['um'], width: 6 },
            { kind: 'TEXT', text: ' Leben zu retten.\n2. Die Nachbarn sammeln Geld, ' },
            { kind: 'GAP', gapId: 'f2', solution: ['damit'], width: 6 },
            { kind: 'TEXT', text: ' der Spielplatz repariert werden kann.\n3. Lara macht ein FSJ, ' },
            { kind: 'GAP', gapId: 'f3', solution: ['um'], width: 6 },
            { kind: 'TEXT', text: ' Erfahrungen im Krankenhaus zu sammeln.\n4. Wir erklären den Kindern die Regeln, ' },
            { kind: 'GAP', gapId: 'f4', solution: ['damit'], width: 6 },
            { kind: 'TEXT', text: ' sie fair spielen.\n5. Herr Yilmaz steht früh auf, ' },
            { kind: 'GAP', gapId: 'f5', solution: ['um'], width: 6 },
            { kind: 'TEXT', text: ' vor der Arbeit Zeitungen auszutragen.' },
          ],
        },
        {
          id: 'i6-2-choice',
          type: 'CHOICE',
          instruction: 'Welche Sätze sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'c1', text: 'Ich lerne Erste Hilfe, um im Notfall helfen zu können.' },
            { id: 'c2', text: 'Ich lerne Erste Hilfe, um ich im Notfall helfen kann.' },
            { id: 'c3', text: 'Die Stadt baut Radwege, damit die Leute weniger Auto fahren.' },
            { id: 'c4', text: 'Die Stadt baut Radwege, um die Leute weniger Auto zu fahren.' },
          ],
          solution: ['c1', 'c3'],
          explanation:
            'Nach „um“ steht kein Subjekt, am Ende steht „zu“ + Infinitiv. Im letzten Satz sind die Subjekte verschieden (die Stadt baut, die Leute fahren) – dann geht nur „damit“.',
        },
        {
          id: 'i6-2-order',
          type: 'ORDERING',
          instruction: 'Bilden Sie einen Satz mit „um … zu“.',
          items: [
            { id: 'o1', text: 'Wir' },
            { id: 'o2', text: 'treffen uns' },
            { id: 'o3', text: 'am Samstag,' },
            { id: 'o4', text: 'um' },
            { id: 'o5', text: 'den Park' },
            { id: 'o6', text: 'aufzuräumen.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5', 'o6'],
        },
        {
          id: 'i6-2-match',
          type: 'MATCHING',
          instruction: 'Wozu? Verbinden Sie die Satzteile.',
          left: [
            { id: 'l1', text: 'Der Verein organisiert ein Fest,' },
            { id: 'l2', text: 'Ich gehe zur Tafel,' },
            { id: 'l3', text: 'Wir schreiben an den Bürgermeister,' },
            { id: 'l4', text: 'Sie lernt Gebärdensprache,' },
          ],
          right: [
            { id: 'r1', text: 'um Geld für neue Trikots zu sammeln.' },
            { id: 'r2', text: 'um Lebensmittel zu sortieren.' },
            { id: 'r3', text: 'damit die Bibliothek geöffnet bleibt.' },
            { id: 'r4', text: 'um sich mit gehörlosen Menschen zu unterhalten.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – eine Diskussion über ein Pflichtjahr.
  {
    order: 3,
    title: 'Ein Jahr für die Gesellschaft?',
    subtitle: 'An einer Diskussion teilnehmen',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'i6-3-h1', type: 'HEADING', level: 1, text: 'Ein Jahr für die Gesellschaft?' },
        {
          id: 'i6-3-intro',
          type: 'TEXT',
          text: 'In Deutschland wird immer wieder diskutiert, ob alle jungen Menschen nach der Schule ein Pflichtjahr für die Gesellschaft machen sollen – zum Beispiel in der Pflege, im Naturschutz oder bei der Feuerwehr. In einem Radiostudio diskutieren drei Gäste.',
        },
        {
          id: 'i6-3-dlg',
          type: 'DIALOGUE',
          title: 'Die Diskussion',
          lines: [
            { speaker: 'Moderatorin', text: 'Frau Schulte, Sie sind für ein Pflichtjahr. Warum?' },
            { speaker: 'Frau Schulte', text: 'Ich bin davon überzeugt, dass es den Zusammenhalt stärkt. Junge Leute lernen Menschen kennen, die sie sonst nie treffen würden. Außerdem brauchen Pflegeheime dringend Unterstützung.' },
            { speaker: 'Jonas', text: 'Da muss ich widersprechen. Ich finde, Engagement muss freiwillig sein. Wer gezwungen wird, macht die Arbeit nicht gut.' },
            { speaker: 'Frau Schulte', text: 'Das sehe ich anders. Viele merken erst bei der Arbeit, wie viel Spaß sie macht.' },
            { speaker: 'Herr Brandt', text: 'Darf ich kurz etwas sagen? Ich verstehe beide Seiten. Aber Pflegekräfte sind Fachleute. Ein Pflichtjahr darf nicht dazu führen, dass man Personal einspart.' },
            { speaker: 'Jonas', text: 'Genau! Da stimme ich Ihnen völlig zu. Man sollte lieber die Freiwilligendienste attraktiver machen, zum Beispiel mit mehr Geld.' },
            { speaker: 'Moderatorin', text: 'Das ist ein interessanter Vorschlag. Frau Schulte, was sagen Sie dazu?' },
          ],
        },
        {
          id: 'i6-3-info-diskussion',
          type: 'INFO',
          variant: 'TIP',
          title: 'In einer Diskussion',
          text: 'Hören Sie zu, beziehen Sie sich auf das, was andere gesagt haben, und begründen Sie Ihre Meinung. Widersprechen ist in einer deutschen Diskussion ganz normal – es sollte aber sachlich bleiben.',
          table: {
            headers: ['Zweck', 'Redemittel'],
            rows: [
              ['Meinung', 'Ich bin davon überzeugt, dass … / Ich bin der Meinung, dass …'],
              ['zustimmen', 'Da stimme ich dir / Ihnen zu. / Das sehe ich genauso. / Genau!'],
              ['widersprechen', 'Da muss ich widersprechen. / Das sehe ich anders. / Da bin ich nicht sicher.'],
              ['das Wort ergreifen', 'Darf ich kurz etwas sagen? / Dazu möchte ich etwas ergänzen.'],
              ['vermitteln', 'Ich verstehe beide Seiten. / Einerseits …, andererseits …'],
            ],
          },
        },
        {
          id: 'i6-3-match',
          type: 'MATCHING',
          instruction: 'Wer vertritt welche Position?',
          left: [
            { id: 'l1', text: 'Frau Schulte' },
            { id: 'l2', text: 'Jonas' },
            { id: 'l3', text: 'Herr Brandt' },
          ],
          right: [
            { id: 'r1', text: 'Ein Pflichtjahr stärkt den Zusammenhalt.' },
            { id: 'r2', text: 'Engagement sollte freiwillig bleiben.' },
            { id: 'r3', text: 'Ein Pflichtjahr darf keine Fachkräfte ersetzen.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
          ],
        },
        {
          id: 'i6-3-choice',
          type: 'CHOICE',
          instruction: 'Lesen Sie die Diskussion noch einmal.',
          question: 'Was schlägt Jonas am Ende vor?',
          multiple: false,
          options: [
            { id: 'a1', text: 'Das Pflichtjahr soll nur ein halbes Jahr dauern.' },
            { id: 'a2', text: 'Freiwilligendienste sollen attraktiver werden.' },
            { id: 'a3', text: 'Pflegeheime sollen mehr Fachleute einstellen.' },
            { id: 'a4', text: 'Nur Schulabgänger ohne Ausbildungsplatz sollen ein Pflichtjahr machen.' },
          ],
          solution: ['a2'],
          explanation:
            'Jonas sagt: „Man sollte lieber die Freiwilligendienste attraktiver machen, zum Beispiel mit mehr Geld.“',
        },
        {
          id: 'i6-3-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die Redemittel.',
          wordBank: ['überzeugt', 'widersprechen', 'genauso', 'Seiten', 'ergänzen'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'A: Ich bin davon ' },
            { kind: 'GAP', gapId: 'd1', solution: ['überzeugt', 'ueberzeugt'], width: 10 },
            { kind: 'TEXT', text: ', dass Ehrenamt in der Schule ein Fach sein sollte.\nB: Da muss ich ' },
            { kind: 'GAP', gapId: 'd2', solution: ['widersprechen'], width: 13 },
            { kind: 'TEXT', text: '. Die Schüler haben schon genug Stress.\nC: Das sehe ich ' },
            { kind: 'GAP', gapId: 'd3', solution: ['genauso'], width: 8 },
            { kind: 'TEXT', text: '. Aber dazu möchte ich etwas ' },
            { kind: 'GAP', gapId: 'd4', solution: ['ergänzen', 'ergaenzen'], width: 9 },
            { kind: 'TEXT', text: ': Projekttage wären eine gute Lösung.\nD: Ich verstehe beide ' },
            { kind: 'GAP', gapId: 'd5', solution: ['Seiten'], width: 7 },
            { kind: 'TEXT', text: '. Projekttage sind vielleicht ein guter Kompromiss.' },
          ],
        },
        {
          id: 'i6-3-choice-2',
          type: 'CHOICE',
          instruction: 'Welche Reaktion ist ein höflicher Widerspruch?',
          multiple: false,
          options: [
            { id: 'b1', text: 'Das ist doch Unsinn!' },
            { id: 'b2', text: 'Das sehe ich anders. Meiner Meinung nach sollte das jeder selbst entscheiden.' },
            { id: 'b3', text: 'Genau, das sehe ich genauso.' },
            { id: 'b4', text: 'Sie haben keine Ahnung.' },
          ],
          solution: ['b2'],
          explanation:
            '„Das sehe ich anders“ widerspricht klar, bleibt aber sachlich – und die Begründung folgt direkt. Die dritte Reaktion ist Zustimmung.',
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – ein Zeitungsbericht und ein Leserbrief.
  {
    order: 4,
    title: 'Der Leserbrief',
    subtitle: 'Auf einen Zeitungsartikel reagieren',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'i6-4-h1', type: 'HEADING', level: 1, text: 'Der Leserbrief' },
        {
          id: 'i6-4-artikel',
          type: 'TEXT',
          text: 'Stadtbote, 12. März\n\nJugendzentrum Nord soll schließen\n\nDas Jugendzentrum im Stadtteil Nord soll zum Ende des Jahres geschlossen werden. Die Stadt muss sparen, und das Gebäude braucht eine teure Renovierung. Rund 60 Jugendliche besuchen das Zentrum jede Woche, um dort Hausaufgaben zu machen, Musik zu spielen oder einfach Freunde zu treffen. Die Stadt schlägt vor, dass die Jugendlichen in Zukunft das Zentrum in der Innenstadt nutzen. Mit dem Bus dauert die Fahrt dorthin etwa 35 Minuten.',
        },
        {
          id: 'i6-4-brief',
          type: 'TEXT',
          text: 'Leserbrief zum Artikel „Jugendzentrum Nord soll schließen“ vom 12. März\n\nMit großer Enttäuschung habe ich Ihren Artikel gelesen. Ich arbeite seit acht Jahren ehrenamtlich im Jugendzentrum Nord und weiß, wie wichtig es für den Stadtteil ist.\n\nFür viele Jugendliche ist das Zentrum der einzige Ort, an dem sie nach der Schule Hilfe bei den Hausaufgaben bekommen. Viele Eltern arbeiten lange und können das nicht leisten. Die Idee, dass die Jugendlichen in die Innenstadt fahren, halte ich für unrealistisch: Wer fährt schon jeden Tag über eine Stunde Bus, um Hausaufgaben zu machen?\n\nIch verstehe, dass die Stadt sparen muss. Trotzdem sollte sie nicht bei den Jugendlichen sparen. Mein Vorschlag: Die Stadt könnte das Gebäude zusammen mit Vereinen und Freiwilligen renovieren, damit die Kosten sinken. Viele von uns würden sofort mithelfen.\n\nKarin Lehmann, Stadtteil Nord',
        },
        {
          id: 'i6-4-choice',
          type: 'CHOICE',
          instruction: 'Lesen Sie den Artikel und den Leserbrief.',
          question: 'Welche Aussagen sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'a1', text: 'Die Stadt will das Jugendzentrum schließen, weil sie sparen muss.' },
            { id: 'a2', text: 'Frau Lehmann ist neu im Stadtteil.' },
            { id: 'a3', text: 'Frau Lehmann findet den Weg in die Innenstadt zu weit.' },
            { id: 'a4', text: 'Frau Lehmann meint, die Stadt sollte gar nicht sparen.' },
          ],
          solution: ['a1', 'a3'],
          explanation:
            'Frau Lehmann arbeitet seit acht Jahren im Zentrum, sie ist also nicht neu. Sie versteht, „dass die Stadt sparen muss“ – nur nicht bei den Jugendlichen.',
        },
        {
          id: 'i6-4-info-leserbrief',
          type: 'INFO',
          variant: 'TIP',
          title: 'So schreibt man einen Leserbrief',
          text: 'Ein Leserbrief bezieht sich auf einen bestimmten Artikel. Er ist kurz, sachlich und macht die eigene Position klar. Gute Leserbriefe nennen Argumente, gehen auf die Gegenseite ein und machen einen Vorschlag.',
          table: {
            headers: ['Teil', 'Redemittel'],
            rows: [
              ['Bezug', 'Zu Ihrem Artikel „…“ vom … möchte ich Folgendes sagen: / Mit Interesse habe ich … gelesen.'],
              ['Position', 'Ich halte … für richtig / falsch. / Meiner Meinung nach …'],
              ['Argument', 'Erstens … / Ein wichtiges Argument ist … / Dazu kommt, dass …'],
              ['Gegenseite', 'Ich verstehe, dass … Trotzdem … / Zwar …, aber …'],
              ['Vorschlag', 'Mein Vorschlag: … / Man könnte …, damit …'],
            ],
          },
        },
        {
          id: 'i6-4-match',
          type: 'MATCHING',
          instruction: 'Welcher Teil des Leserbriefs ist das?',
          left: [
            { id: 'l1', text: 'Mit großer Enttäuschung habe ich Ihren Artikel gelesen.' },
            { id: 'l2', text: 'Für viele Jugendliche ist das Zentrum der einzige Ort, an dem sie Hilfe bekommen.' },
            { id: 'l3', text: 'Ich verstehe, dass die Stadt sparen muss.' },
            { id: 'l4', text: 'Die Stadt könnte das Gebäude mit Freiwilligen renovieren.' },
          ],
          right: [
            { id: 'r1', text: 'Bezug zum Artikel' },
            { id: 'r2', text: 'Argument' },
            { id: 'r3', text: 'Gegenseite' },
            { id: 'r4', text: 'Vorschlag' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'i6-4-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie den Anfang eines anderen Leserbriefs.',
          wordBank: ['Artikel', 'halte', 'Argument', 'Zwar', 'damit'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Zu Ihrem ' },
            { kind: 'GAP', gapId: 'l1', solution: ['Artikel'], width: 8 },
            { kind: 'TEXT', text: ' über das Jugendzentrum möchte ich Folgendes sagen: Ich ' },
            { kind: 'GAP', gapId: 'l2', solution: ['halte'], width: 6 },
            { kind: 'TEXT', text: ' die Schließung für richtig. Ein wichtiges ' },
            { kind: 'GAP', gapId: 'l3', solution: ['Argument'], width: 9 },
            { kind: 'TEXT', text: ' sind die Kosten. ' },
            { kind: 'GAP', gapId: 'l4', solution: ['Zwar'], width: 5 },
            { kind: 'TEXT', text: ' ist der Weg in die Innenstadt länger, aber das Zentrum dort ist viel größer. Man könnte einen Schulbus einsetzen, ' },
            { kind: 'GAP', gapId: 'l5', solution: ['damit'], width: 6 },
            { kind: 'TEXT', text: ' die Jugendlichen schneller dort sind.' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – Rückblick auf Kapitel 6 und damit auf B1.
  {
    order: 5,
    title: 'Kannst du das schon?',
    subtitle: 'Rückblick, ein eigener Leserbrief',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'i6-5-h1', type: 'HEADING', level: 1, text: 'Kannst du das schon?' },
        {
          id: 'i6-5-intro',
          type: 'TEXT',
          text: 'Das ist die letzte Seite der Stufe B1. Prüfen Sie, was Sie aus Kapitel 6 mitnehmen: Wortschatz zum Engagement, „um … zu“ und „damit“ und die Redemittel für Diskussion und Leserbrief. Ab Kapitel 7 geht es mit B2 weiter.',
        },
        {
          id: 'i6-5-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie den Text.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Meine Tochter macht nach dem Abitur ein Freiwilliges Soziales Jahr, ' },
            { kind: 'GAP', gapId: 'r1', solution: ['um'], width: 4 },
            { kind: 'TEXT', text: ' herauszufinden, ob die Pflege der richtige Beruf für sie ist. Sie arbeitet in einem Altenheim, und die Bewohner freuen sich, weil sie Zeit für Gespräche hat. Sie fühlt sich dort wirklich ' },
            { kind: 'GAP', gapId: 'r2', solution: ['gebraucht'], width: 10 },
            { kind: 'TEXT', text: '. Am Wochenende ' },
            { kind: 'GAP', gapId: 'r3', solution: ['engagiert'], width: 10 },
            { kind: 'TEXT', text: ' sie sich außerdem in einem Sportverein. Sie trainiert dort Kinder, ' },
            { kind: 'GAP', gapId: 'r4', solution: ['damit'], width: 6 },
            { kind: 'TEXT', text: ' die Eltern samstags ein paar Stunden frei haben. Ich bin sehr stolz auf sie.' },
          ],
        },
        {
          id: 'i6-5-choice',
          type: 'CHOICE',
          instruction: 'Welche Sätze sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'k1', text: 'Ich lerne Deutsch, um in Deutschland zu studieren.' },
            { id: 'k2', text: 'Ich erkläre es dir noch einmal, um du es verstehst.' },
            { id: 'k3', text: 'Wir sammeln Spenden, damit das Tierheim einen neuen Zaun bekommt.' },
            { id: 'k4', text: 'Ich engagiere mich, damit ich Zeit habe.' },
          ],
          solution: ['k1', 'k3'],
          explanation:
            'Bei verschiedenen Subjekten (ich erkläre, du verstehst) braucht man „damit“: …, damit du es verstehst. Im letzten Satz ist „Zeit haben“ ein Grund, kein Ziel: Ich engagiere mich, weil ich Zeit habe.',
        },
        {
          id: 'i6-5-order',
          type: 'ORDERING',
          instruction: 'Bilden Sie einen Satz mit „damit“.',
          items: [
            { id: 'o1', text: 'Die Stadt' },
            { id: 'o2', text: 'renoviert' },
            { id: 'o3', text: 'das Zentrum,' },
            { id: 'o4', text: 'damit' },
            { id: 'o5', text: 'die Jugendlichen' },
            { id: 'o6', text: 'einen Treffpunkt' },
            { id: 'o7', text: 'haben.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5', 'o6', 'o7'],
        },
        {
          id: 'i6-5-match',
          type: 'MATCHING',
          instruction: 'Welche Reaktion passt?',
          left: [
            { id: 'm1', text: 'Sie wollen zustimmen.' },
            { id: 'm2', text: 'Sie wollen widersprechen.' },
            { id: 'm3', text: 'Sie wollen etwas ergänzen.' },
            { id: 'm4', text: 'Sie wollen vermitteln.' },
          ],
          right: [
            { id: 'y1', text: 'Das sehe ich genauso.' },
            { id: 'y2', text: 'Da bin ich anderer Meinung.' },
            { id: 'y3', text: 'Dazu möchte ich noch etwas sagen.' },
            { id: 'y4', text: 'Ich verstehe beide Seiten.' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'y1' },
            { leftId: 'm2', rightId: 'y2' },
            { leftId: 'm3', rightId: 'y3' },
            { leftId: 'm4', rightId: 'y4' },
          ],
        },
        {
          id: 'i6-5-writing',
          type: 'WRITING',
          instruction: 'Ein eigener Leserbrief',
          prompt:
            'Sie haben in der Zeitung gelesen: „Soziales Pflichtjahr für alle? Die Regierung prüft den Vorschlag.“ Schreiben Sie einen Leserbrief. Beziehen Sie sich auf den Artikel, sagen Sie Ihre Meinung, nennen Sie mindestens zwei Argumente, gehen Sie auf die Gegenseite ein und machen Sie einen Vorschlag. Benutzen Sie „um … zu“ oder „damit“ mindestens einmal.',
          minWords: 90,
          maxWords: 200,
          aiFeedback: true,
          sampleAnswer:
            'Zu Ihrem Artikel „Soziales Pflichtjahr für alle?“ möchte ich Folgendes sagen: Ich halte ein Pflichtjahr für keine gute Idee.\n\nErstens sollte jeder selbst entscheiden, wie er sich für die Gesellschaft einsetzt. Viele junge Menschen engagieren sich schon freiwillig, zum Beispiel im Sportverein oder bei der Feuerwehr. Zweitens kostet ein Pflichtjahr sehr viel Geld, denn alle Teilnehmer brauchen Betreuung und ein Taschengeld.\n\nIch verstehe, dass in Pflegeheimen und Kindergärten Hilfe fehlt. Trotzdem glaube ich, dass gezwungene Helfer dort nicht die beste Lösung sind.\n\nMein Vorschlag: Der Staat sollte die Freiwilligendienste besser bezahlen, damit mehr junge Menschen sie freiwillig machen. Außerdem könnte man Schulen besser informieren, um Jugendliche früh für ein Ehrenamt zu begeistern.\n\nTomás Rivera, Köln',
        },
      ],
    },
  },
];
