import type { UnitSeed } from './chapter-beginner-1';

/**
 * Beginner, Kapitel 10: „Feste und Traditionen“ (A2, Kapitel 4)
 *
 * Fünf Seiten, Aufbau wie in den Kapiteln davor.
 *
 * Das Datum steht vorn, weil man ohne Ordinalzahlen weder sagen kann, wann
 * man Geburtstag hat, noch eine Einladung versteht. Die Geschenke auf Seite
 * 3 sind der natürliche Ort für Sätze mit zwei Objekten – „Ich schenke
 * meiner Mutter einen Schal“ – und damit für den Dativ als Fall der Person,
 * die etwas bekommt.
 *
 * Seite 4 bringt den Konjunktiv II nur als Höflichkeitsform: würde, könnte,
 * hätte gern. Dass dieselben Formen auch Irreales ausdrücken, kommt erst im
 * Intermediate-Band; hier reicht es, sie als feste Bitten zu kennen.
 *
 * Einsprachig deutsch, Erklärungen mit Übersetzung wie im ganzen
 * Beginner-Band.
 */
const v = 1;

export const BEGINNER_10_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Feste im Jahr und das Datum.
  {
    order: 1,
    title: 'Feste im Jahr',
    subtitle: 'Feiertage und das Datum',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'b10-1-h1', type: 'HEADING', level: 1, text: 'Feste im Jahr' },
        {
          id: 'b10-1-image',
          type: 'IMAGE',
          url: 'illustration:fiesta-lights',
          alt: 'Lichterketten über einem Platz am Abend, Menschen feiern zusammen.',
          caption: 'Ein Fest auf dem Marktplatz.',
        },
        {
          id: 'b10-1-text',
          type: 'TEXT',
          text: 'In Deutschland feiert man viele Feste. Am 24. Dezember ist Heiligabend: Die Familie sitzt zusammen, und es gibt Geschenke. An Silvester, dem 31. Dezember, feiert man mit Freunden und Feuerwerk ins neue Jahr. Im Frühling ist Ostern – die Kinder suchen bunte Eier. Im Februar feiern besonders im Rheinland viele Menschen Karneval. Und natürlich hat jeder einmal im Jahr Geburtstag.',
          translations: {
            en: 'People in Germany celebrate many festivals. 24 December is Christmas Eve: the family sits together and there are presents. On New Year’s Eve, 31 December, people celebrate the new year with friends and fireworks. In spring there’s Easter – children look for coloured eggs. In February many people celebrate carnival, especially in the Rhineland. And of course everyone has a birthday once a year.',
            es: 'En Alemania se celebran muchas fiestas. El 24 de diciembre es Nochebuena: la familia se reúne y hay regalos. En Nochevieja, el 31 de diciembre, se celebra el año nuevo con amigos y fuegos artificiales. En primavera es Pascua: los niños buscan huevos de colores. En febrero mucha gente celebra el carnaval, sobre todo en Renania. Y, claro, todo el mundo cumple años una vez al año.',
            fr: 'En Allemagne, on célèbre beaucoup de fêtes. Le 24 décembre, c’est le réveillon de Noël : la famille se réunit et il y a des cadeaux. À la Saint-Sylvestre, le 31 décembre, on fête la nouvelle année avec des amis et des feux d’artifice. Au printemps, c’est Pâques – les enfants cherchent des œufs colorés. En février, beaucoup de gens fêtent le carnaval, surtout en Rhénanie. Et bien sûr, chacun a son anniversaire une fois par an.',
            it: 'In Germania si festeggiano molte feste. Il 24 dicembre è la Vigilia di Natale: la famiglia si riunisce e ci sono i regali. A San Silvestro, il 31 dicembre, si festeggia l’anno nuovo con gli amici e i fuochi d’artificio. In primavera c’è Pasqua – i bambini cercano le uova colorate. A febbraio molte persone festeggiano il carnevale, soprattutto in Renania. E naturalmente ognuno compie gli anni una volta all’anno.',
          },
        },
        {
          id: 'b10-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: Feste',
          items: [
            { term: 'Fest', article: 'das', plural: 'die Feste', translations: { en: 'festival / party' } },
            { term: 'feiern', translations: { en: 'to celebrate' } },
            { term: 'Feiertag', article: 'der', plural: 'die Feiertage', translations: { en: 'public holiday' } },
            { term: 'Weihnachten', translations: { en: 'Christmas' } },
            { term: 'Heiligabend', article: 'der', translations: { en: 'Christmas Eve' } },
            { term: 'Silvester', translations: { en: 'New Year’s Eve' } },
            { term: 'Ostern', translations: { en: 'Easter' } },
            { term: 'Karneval / Fasching', article: 'der', translations: { en: 'carnival' } },
            { term: 'Geburtstag', article: 'der', plural: 'die Geburtstage', translations: { en: 'birthday' } },
            { term: 'Hochzeit', article: 'die', plural: 'die Hochzeiten', translations: { en: 'wedding' } },
            { term: 'Geschenk', article: 'das', plural: 'die Geschenke', translations: { en: 'present' } },
          ],
        },
        {
          id: 'b10-1-info-datum',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Das Datum: Ordinalzahlen',
          text: 'Beim Datum benutzt man Ordinalzahlen. Bis 19 hängt man -te an, ab 20 -ste. Ausnahmen: erste, dritte, siebte. Nach „am“ (Dativ) endet die Zahl auf -en: am ersten Mai. Geschrieben steht ein Punkt hinter der Zahl: am 1. Mai.',
          translations: {
            en: {
              title: 'Dates: ordinal numbers',
              text: 'Dates use ordinal numbers. Up to 19 you add -te, from 20 on -ste. Exceptions: erste, dritte, siebte. After „am“ (dative) the number ends in -en: am ersten Mai (on the first of May). In writing there’s a full stop after the number: am 1. Mai.',
            },
            es: {
              title: 'La fecha: números ordinales',
              text: 'Para las fechas se usan los ordinales. Hasta el 19 se añade -te; a partir del 20, -ste. Excepciones: erste, dritte, siebte. Después de „am“ (dativo) el número termina en -en: am ersten Mai (el uno de mayo). Por escrito se pone un punto tras el número: am 1. Mai.',
            },
            fr: {
              title: 'La date : les nombres ordinaux',
              text: 'Pour les dates, on utilise les ordinaux. Jusqu’à 19, on ajoute -te, à partir de 20 -ste. Exceptions : erste, dritte, siebte. Après « am » (datif), le nombre se termine en -en : am ersten Mai (le premier mai). À l’écrit, on met un point après le chiffre : am 1. Mai.',
            },
            it: {
              title: 'La data: i numeri ordinali',
              text: 'Per le date si usano gli ordinali. Fino a 19 si aggiunge -te, da 20 in poi -ste. Eccezioni: erste, dritte, siebte. Dopo „am“ (dativo) il numero finisce in -en: am ersten Mai (il primo maggio). Per iscritto si mette un punto dopo il numero: am 1. Mai.',
            },
          },
          table: {
            headers: ['Zahl', 'Der Wievielte ist heute?', 'Wann?'],
            rows: [
              ['1.', 'der erste', 'am ersten'],
              ['2.', 'der zweite', 'am zweiten'],
              ['3.', 'der dritte', 'am dritten'],
              ['7.', 'der siebte', 'am siebten'],
              ['12.', 'der zwölfte', 'am zwölften'],
              ['20.', 'der zwanzigste', 'am zwanzigsten'],
              ['31.', 'der einunddreißigste', 'am einunddreißigsten'],
            ],
          },
        },
        {
          id: 'b10-1-cloze',
          type: 'CLOZE',
          instruction: 'Schreiben Sie das Datum als Wort.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Heiligabend ist am ' },
            { kind: 'GAP', gapId: 'd1', solution: ['vierundzwanzigsten'], width: 19 },
            { kind: 'TEXT', text: ' Dezember.\n2. Silvester ist am ' },
            { kind: 'GAP', gapId: 'd2', solution: ['einunddreißigsten', 'einunddreissigsten'], width: 19 },
            { kind: 'TEXT', text: ' Dezember.\n3. Der Tag der Arbeit ist am ' },
            { kind: 'GAP', gapId: 'd3', solution: ['ersten'], width: 8 },
            { kind: 'TEXT', text: ' Mai.\n4. Der Tag der Deutschen Einheit ist am ' },
            { kind: 'GAP', gapId: 'd4', solution: ['dritten'], width: 8 },
            { kind: 'TEXT', text: ' Oktober.' },
          ],
        },
        {
          id: 'b10-1-match',
          type: 'MATCHING',
          instruction: 'Welches Fest ist das?',
          left: [
            { id: 'l1', text: 'Man sucht bunte Eier.' },
            { id: 'l2', text: 'Um Mitternacht gibt es Feuerwerk.' },
            { id: 'l3', text: 'Man verkleidet sich und feiert auf der Straße.' },
            { id: 'l4', text: 'Es gibt einen Kuchen mit Kerzen.' },
          ],
          right: [
            { id: 'r1', text: 'Ostern' },
            { id: 'r2', text: 'Silvester' },
            { id: 'r3', text: 'Karneval' },
            { id: 'r4', text: 'Geburtstag' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'b10-1-choice',
          type: 'CHOICE',
          instruction: '„Wann hast du Geburtstag?“ – Welche Antwort ist richtig?',
          multiple: false,
          options: [
            { id: 'c1', text: 'Am dreizehn Juni.' },
            { id: 'c2', text: 'Am dreizehnten Juni.' },
            { id: 'c3', text: 'Im dreizehnte Juni.' },
          ],
          solution: ['c2'],
          explanation: 'Mit „am“ steht die Ordinalzahl mit der Endung -en: am dreizehnten Juni.',
          explanationTranslations: {
            en: 'With „am“ the ordinal number takes the ending -en: am dreizehnten Juni.',
            es: 'Con „am“ el ordinal lleva la terminación -en: am dreizehnten Juni.',
            fr: 'Avec « am », l’ordinal prend la terminaison -en : am dreizehnten Juni.',
            it: 'Con „am“ l’ordinale prende la desinenza -en: am dreizehnten Juni.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – Einladungen schreiben, zusagen, absagen, gratulieren.
  {
    order: 2,
    title: 'Herzliche Einladung!',
    subtitle: 'Einladen, zusagen, absagen, gratulieren',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'b10-2-h1', type: 'HEADING', level: 1, text: 'Herzliche Einladung!' },
        {
          id: 'b10-2-image',
          type: 'IMAGE',
          url: 'illustration:birthday',
          alt: 'Eine Geburtstagstorte mit Kerzen, daneben Luftballons.',
          caption: 'Mira wird dreißig.',
        },
        {
          id: 'b10-2-einladung',
          type: 'TEXT',
          text: 'Liebe Freundinnen und Freunde, ich werde dreißig und möchte das mit euch feiern! Die Party ist am Samstag, dem 14. Juni, ab 19 Uhr in meinem Garten (Lindenstraße 8). Für Essen und Getränke ist gesorgt – bringt einfach gute Laune mit. Bitte sagt mir bis zum 7. Juni Bescheid, ob ihr kommt. Ich freue mich auf euch! Eure Mira',
          translations: {
            en: 'Dear friends, I’m turning thirty and would like to celebrate with you! The party is on Saturday, 14 June, from 7 pm in my garden (Lindenstraße 8). Food and drinks are taken care of – just bring good spirits. Please let me know by 7 June whether you’re coming. I’m looking forward to seeing you! Love, Mira',
            es: 'Queridas amigas y amigos: ¡cumplo treinta años y quiero celebrarlo con vosotros! La fiesta es el sábado 14 de junio, a partir de las 19 h, en mi jardín (Lindenstraße 8). La comida y la bebida están cubiertas: traed solo buen humor. Decidme antes del 7 de junio si venís. ¡Me alegro de veros! Vuestra Mira',
            fr: 'Chères amies, chers amis, j’ai trente ans et j’aimerais fêter ça avec vous ! La fête a lieu le samedi 14 juin à partir de 19 h dans mon jardin (Lindenstraße 8). Le repas et les boissons sont prévus – apportez juste votre bonne humeur. Dites-moi avant le 7 juin si vous venez. Je me réjouis de vous voir ! Votre Mira',
            it: 'Care amiche e cari amici, compio trent’anni e voglio festeggiare con voi! La festa è sabato 14 giugno, dalle 19, nel mio giardino (Lindenstraße 8). Al cibo e alle bevande ci penso io – portate solo il buonumore. Fatemi sapere entro il 7 giugno se venite. Non vedo l’ora di vedervi! La vostra Mira',
          },
        },
        {
          id: 'b10-2-choice',
          type: 'CHOICE',
          instruction: 'Was steht in der Einladung? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'a1', text: 'Die Party beginnt um sieben Uhr abends.' },
            { id: 'a2', text: 'Die Gäste sollen etwas zu essen mitbringen.' },
            { id: 'a3', text: 'Die Party ist im Garten.' },
            { id: 'a4', text: 'Man soll bis zum 14. Juni antworten.' },
          ],
          solution: ['a1', 'a3'],
          explanation:
            'Für Essen und Getränke sorgt Mira selbst. Antworten soll man bis zum 7. Juni – die Party ist am 14.',
          explanationTranslations: {
            en: 'Mira is taking care of food and drinks herself. You should reply by 7 June – the party is on the 14th.',
            es: 'Mira se encarga de la comida y la bebida. Hay que responder antes del 7 de junio; la fiesta es el 14.',
            fr: 'Mira s’occupe elle-même du repas et des boissons. Il faut répondre avant le 7 juin – la fête a lieu le 14.',
            it: 'Al cibo e alle bevande pensa Mira. Bisogna rispondere entro il 7 giugno – la festa è il 14.',
          },
        },
        {
          id: 'b10-2-info-antwort',
          type: 'INFO',
          variant: 'TIP',
          title: 'Auf eine Einladung antworten',
          text: 'Man bedankt sich zuerst, dann sagt man zu oder ab. Bei einer Absage nennt man einen Grund. Zum Geburtstag gratuliert man mit festen Wendungen.',
          translations: {
            en: {
              title: 'Replying to an invitation',
              text: 'You first say thank you, then accept or decline. When declining, you give a reason. For birthdays there are set phrases for congratulations.',
            },
            es: {
              title: 'Responder a una invitación',
              text: 'Primero se da las gracias, luego se acepta o se rechaza. Al rechazar, se da un motivo. Para felicitar un cumpleaños hay expresiones fijas.',
            },
            fr: {
              title: 'Répondre à une invitation',
              text: 'On remercie d’abord, puis on accepte ou on refuse. Quand on refuse, on donne une raison. Pour souhaiter un anniversaire, il existe des formules toutes faites.',
            },
            it: {
              title: 'Rispondere a un invito',
              text: 'Prima si ringrazia, poi si accetta o si rifiuta. Se si rifiuta, si dà un motivo. Per fare gli auguri di compleanno ci sono espressioni fisse.',
            },
          },
          table: {
            headers: ['zusagen', 'absagen', 'gratulieren'],
            rows: [
              ['Danke für die Einladung!', 'Vielen Dank für die Einladung, aber …', 'Herzlichen Glückwunsch zum Geburtstag!'],
              ['Ich komme gern.', 'Leider kann ich nicht kommen, weil …', 'Alles Gute!'],
              ['Soll ich etwas mitbringen?', 'Schade! Ich wünsche dir eine tolle Party.', 'Frohe Weihnachten! / Frohe Ostern!'],
            ],
          },
        },
        {
          id: 'b10-2-match',
          type: 'MATCHING',
          instruction: 'Was sagt man wann?',
          left: [
            { id: 'l1', text: 'Am 24. Dezember' },
            { id: 'l2', text: 'Am 31. Dezember um Mitternacht' },
            { id: 'l3', text: 'Bei einer Hochzeit' },
            { id: 'l4', text: 'Am Geburtstag' },
          ],
          right: [
            { id: 'r1', text: 'Frohe Weihnachten!' },
            { id: 'r2', text: 'Frohes neues Jahr!' },
            { id: 'r3', text: 'Alles Gute für eure Ehe!' },
            { id: 'r4', text: 'Herzlichen Glückwunsch zum Geburtstag!' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'b10-2-cloze',
          type: 'CLOZE',
          instruction: 'Samir antwortet Mira. Ergänzen Sie.',
          wordBank: ['Einladung', 'leider', 'weil', 'Glückwunsch', 'feiern'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Liebe Mira, vielen Dank für die ' },
            { kind: 'GAP', gapId: 'e1', solution: ['Einladung'], width: 10 },
            { kind: 'TEXT', text: '! Ich kann ' },
            { kind: 'GAP', gapId: 'e2', solution: ['leider'], width: 7 },
            { kind: 'TEXT', text: ' nicht kommen, ' },
            { kind: 'GAP', gapId: 'e3', solution: ['weil'], width: 5 },
            { kind: 'TEXT', text: ' ich an dem Wochenende in Beirut bin. Schon jetzt herzlichen ' },
            { kind: 'GAP', gapId: 'e4', solution: ['Glückwunsch', 'Glueckwunsch'], width: 12 },
            { kind: 'TEXT', text: '! Wollen wir danach zusammen ' },
            { kind: 'GAP', gapId: 'e5', solution: ['feiern'], width: 7 },
            { kind: 'TEXT', text: '? Liebe Grüße, Samir' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – Geschenke: wem schenke ich was?
  {
    order: 3,
    title: 'Was schenkst du ihr?',
    subtitle: 'Verben mit Dativ und Akkusativ',
    estimatedMinutes: 25,
    content: {
      version: v,
      blocks: [
        { id: 'b10-3-h1', type: 'HEADING', level: 1, text: 'Was schenkst du ihr?' },
        {
          id: 'b10-3-dlg',
          type: 'DIALOGUE',
          title: 'Ein Geschenk für Mira',
          lines: [
            { speaker: 'Jonas', text: 'Was schenken wir Mira zum Geburtstag?' },
            { speaker: 'Elif', text: 'Vielleicht ein Buch? Sie liest doch so gern.' },
            { speaker: 'Jonas', text: 'Ihr Bruder schenkt ihr schon ein Buch.' },
            { speaker: 'Elif', text: 'Hm. Und Konzertkarten? Wir kaufen ihr zwei Karten, dann kann sie mit einer Freundin gehen.' },
            { speaker: 'Jonas', text: 'Super Idee! Kannst du sie besorgen? Ich gebe dir morgen das Geld.' },
          ],
        },
        {
          id: 'b10-3-info-zwei',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Wem? und Was?',
          text: 'Verben wie schenken, geben, kaufen, zeigen, schicken und erklären haben oft zwei Objekte: die Person im Dativ (Wem?) und die Sache im Akkusativ (Was?). Die Person steht meistens zuerst.',
          translations: {
            en: {
              title: 'To whom? and What?',
              text: 'Verbs like schenken (give as a present), geben, kaufen, zeigen, schicken and erklären often have two objects: the person in the dative (Wem? – to whom?) and the thing in the accusative (Was? – what?). The person usually comes first.',
            },
            es: {
              title: '¿A quién? y ¿Qué?',
              text: 'Verbos como schenken (regalar), geben, kaufen, zeigen, schicken y erklären suelen tener dos objetos: la persona en dativo (Wem? – ¿a quién?) y la cosa en acusativo (Was? – ¿qué?). Normalmente la persona va primero.',
            },
            fr: {
              title: 'À qui ? et Quoi ?',
              text: 'Des verbes comme schenken (offrir), geben, kaufen, zeigen, schicken et erklären ont souvent deux compléments : la personne au datif (Wem? – à qui ?) et la chose à l’accusatif (Was? – quoi ?). La personne vient le plus souvent en premier.',
            },
            it: {
              title: 'A chi? e Che cosa?',
              text: 'Verbi come schenken (regalare), geben, kaufen, zeigen, schicken ed erklären hanno spesso due complementi: la persona al dativo (Wem? – a chi?) e la cosa all’accusativo (Was? – che cosa?). Di solito la persona viene prima.',
            },
          },
          table: {
            headers: ['Subjekt', 'Verb', 'Dativ (Wem?)', 'Akkusativ (Was?)'],
            rows: [
              ['Ich', 'schenke', 'meiner Mutter', 'einen Schal.'],
              ['Wir', 'kaufen', 'dem Kind', 'ein Fahrrad.'],
              ['Er', 'zeigt', 'den Gästen', 'die Wohnung.'],
              ['Sie', 'schickt', 'ihrem Freund', 'eine Karte.'],
            ],
          },
        },
        {
          id: 'b10-3-cloze-dativ',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die Endung im Dativ.',
          wordBank: ['meinem', 'meiner', 'meinen', 'dem', 'der'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Ich schenke ' },
            { kind: 'GAP', gapId: 'x1', solution: ['meinem'], width: 7 },
            { kind: 'TEXT', text: ' Vater ein Hemd.\n2. Elif schickt ' },
            { kind: 'GAP', gapId: 'x2', solution: ['der'], width: 5 },
            { kind: 'TEXT', text: ' Oma eine Postkarte.\n3. Wir geben ' },
            { kind: 'GAP', gapId: 'x3', solution: ['meinen'], width: 7 },
            { kind: 'TEXT', text: ' Kindern Taschengeld.\n4. Er erklärt ' },
            { kind: 'GAP', gapId: 'x4', solution: ['dem'], width: 5 },
            { kind: 'TEXT', text: ' Gast den Weg.' },
          ],
        },
        {
          id: 'b10-3-info-pron',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Personalpronomen im Dativ',
          text: 'Statt der Person kann ein Pronomen im Dativ stehen: Ich schenke ihr ein Buch. Die Formen „mir“ und „dir“ kennen Sie schon aus „Das gefällt mir“.',
          translations: {
            en: {
              title: 'Personal pronouns in the dative',
              text: 'Instead of the person you can use a dative pronoun: Ich schenke ihr ein Buch (I’m giving her a book). You already know „mir“ and „dir“ from „Das gefällt mir“.',
            },
            es: {
              title: 'Pronombres personales en dativo',
              text: 'En lugar de la persona puede ir un pronombre en dativo: Ich schenke ihr ein Buch (le regalo un libro). Las formas „mir“ y „dir“ ya las conoce de „Das gefällt mir“.',
            },
            fr: {
              title: 'Les pronoms personnels au datif',
              text: 'À la place de la personne, on peut employer un pronom au datif : Ich schenke ihr ein Buch (je lui offre un livre). Vous connaissez déjà « mir » et « dir » grâce à « Das gefällt mir ».',
            },
            it: {
              title: 'I pronomi personali al dativo',
              text: 'Al posto della persona può esserci un pronome al dativo: Ich schenke ihr ein Buch (le regalo un libro). Le forme „mir“ e „dir“ le conosce già da „Das gefällt mir“.',
            },
          },
          table: {
            headers: ['Nominativ', 'Dativ', 'Beispiel'],
            rows: [
              ['ich', 'mir', 'Gib mir bitte das Salz.'],
              ['du', 'dir', 'Ich kaufe dir ein Eis.'],
              ['er / es', 'ihm', 'Wir schenken ihm ein Spiel.'],
              ['sie', 'ihr', 'Ich schreibe ihr eine Karte.'],
              ['wir', 'uns', 'Zeigst du uns die Fotos?'],
              ['ihr', 'euch', 'Ich erkläre euch den Weg.'],
              ['sie / Sie', 'ihnen / Ihnen', 'Kann ich Ihnen helfen?'],
            ],
          },
        },
        {
          id: 'b10-3-choice',
          type: 'CHOICE',
          instruction: '„Mein Bruder hat morgen Geburtstag. Ich schenke ___ eine Uhr.“',
          multiple: false,
          options: [
            { id: 'c1', text: 'ihn' },
            { id: 'c2', text: 'ihm' },
            { id: 'c3', text: 'ihr' },
          ],
          solution: ['c2'],
          explanation:
            'Der Bruder bekommt etwas – er steht im Dativ. Der Dativ von „er“ ist „ihm“. „ihn“ wäre Akkusativ.',
          explanationTranslations: {
            en: 'The brother receives something – so he’s in the dative. The dative of „er“ is „ihm“. „ihn“ would be accusative.',
            es: 'El hermano recibe algo, así que va en dativo. El dativo de „er“ es „ihm“. „ihn“ sería acusativo.',
            fr: 'Le frère reçoit quelque chose – il est donc au datif. Le datif de « er » est « ihm ». « ihn » serait l’accusatif.',
            it: 'Il fratello riceve qualcosa – quindi va al dativo. Il dativo di „er“ è „ihm“. „ihn“ sarebbe accusativo.',
          },
        },
        {
          id: 'b10-3-order',
          type: 'ORDERING',
          instruction: 'Bilden Sie einen Satz.',
          items: [
            { id: 'o1', text: 'Wir' },
            { id: 'o2', text: 'schenken' },
            { id: 'o3', text: 'unserer' },
            { id: 'o4', text: 'Lehrerin' },
            { id: 'o5', text: 'Blumen.' },
          ],
          solution: ['o1', 'o2', 'o3', 'o4', 'o5'],
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – höfliche Bitten mit würde, könnte, hätte.
  {
    order: 4,
    title: 'Könntest du mir helfen?',
    subtitle: 'Höfliche Bitten',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'b10-4-h1', type: 'HEADING', level: 1, text: 'Könntest du mir helfen?' },
        {
          id: 'b10-4-dlg',
          type: 'DIALOGUE',
          title: 'Vor der Party',
          lines: [
            { speaker: 'Mira', text: 'Jonas, könntest du mir morgen beim Aufbauen helfen?' },
            { speaker: 'Jonas', text: 'Klar! Um wie viel Uhr?' },
            { speaker: 'Mira', text: 'Um vier wäre super. Und würdest du vielleicht Stühle mitbringen?' },
            { speaker: 'Jonas', text: 'Ich habe nur vier. Reicht das?' },
            { speaker: 'Mira', text: 'Ja, danke! Ich hätte gern auch noch Musik. Hast du eine Box?' },
            { speaker: 'Jonas', text: 'Ja, die bringe ich mit.' },
          ],
        },
        {
          id: 'b10-4-info-konj',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Höflich bitten: könnte, würde, hätte gern',
          text: 'Eine Bitte mit „Kannst du …?“ ist freundlich, mit „Könntest du …?“ oder „Würdest du …?“ klingt sie noch höflicher. Diese Formen heißen Konjunktiv II. „Ich hätte gern …“ ist die höfliche Form von „Ich möchte …“.',
          translations: {
            en: {
              title: 'Asking politely: könnte, würde, hätte gern',
              text: 'A request with „Kannst du …?“ is friendly; with „Könntest du …?“ (could you …?) or „Würdest du …?“ (would you …?) it sounds even more polite. These forms are called Konjunktiv II. „Ich hätte gern …“ (I’d like …) is the polite form of „Ich möchte …“.',
            },
            es: {
              title: 'Pedir con cortesía: könnte, würde, hätte gern',
              text: 'Una petición con „Kannst du …?“ es amable; con „Könntest du …?“ (¿podrías …?) o „Würdest du …?“ (¿te importaría …?) suena aún más cortés. Estas formas se llaman Konjunktiv II. „Ich hätte gern …“ (querría …) es la forma cortés de „Ich möchte …“.',
            },
            fr: {
              title: 'Demander poliment : könnte, würde, hätte gern',
              text: 'Une demande avec « Kannst du …? » est aimable ; avec « Könntest du …? » (pourrais-tu …?) ou « Würdest du …? » (voudrais-tu bien …?), elle est encore plus polie. Ces formes s’appellent le Konjunktiv II. « Ich hätte gern … » (j’aimerais …) est la forme polie de « Ich möchte … ».',
            },
            it: {
              title: 'Chiedere con gentilezza: könnte, würde, hätte gern',
              text: 'Una richiesta con „Kannst du …?“ è gentile; con „Könntest du …?“ (potresti …?) o „Würdest du …?“ (ti dispiacerebbe …?) suona ancora più cortese. Queste forme si chiamano Konjunktiv II. „Ich hätte gern …“ (vorrei …) è la forma cortese di „Ich möchte …“.',
            },
          },
          table: {
            headers: ['Person', 'können', 'werden', 'haben'],
            rows: [
              ['ich', 'könnte', 'würde', 'hätte'],
              ['du', 'könntest', 'würdest', 'hättest'],
              ['er / sie / es', 'könnte', 'würde', 'hätte'],
              ['wir', 'könnten', 'würden', 'hätten'],
              ['ihr', 'könntet', 'würdet', 'hättet'],
              ['sie / Sie', 'könnten', 'würden', 'hätten'],
            ],
          },
        },
        {
          id: 'b10-4-cloze',
          type: 'CLOZE',
          instruction: 'Machen Sie die Bitten höflicher.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Kannst du mir helfen? → ' },
            { kind: 'GAP', gapId: 'k1', solution: ['Könntest', 'Koenntest'], width: 9 },
            { kind: 'TEXT', text: ' du mir helfen?\n2. Können Sie das Fenster öffnen? → ' },
            { kind: 'GAP', gapId: 'k2', solution: ['Könnten', 'Koennten'], width: 9 },
            { kind: 'TEXT', text: ' Sie das Fenster öffnen?\n3. Ich möchte ein Glas Wasser. → Ich ' },
            { kind: 'GAP', gapId: 'k3', solution: ['hätte', 'haette'], width: 7 },
            { kind: 'TEXT', text: ' gern ein Glas Wasser.\n4. Bringst du Getränke mit? → ' },
            { kind: 'GAP', gapId: 'k4', solution: ['Würdest', 'Wuerdest'], width: 9 },
            { kind: 'TEXT', text: ' du Getränke mitbringen?' },
          ],
        },
        {
          id: 'b10-4-choice',
          type: 'CHOICE',
          instruction: 'Sie sprechen mit einer fremden Person im Zug. Was ist am höflichsten?',
          multiple: false,
          options: [
            { id: 'h1', text: 'Mach das Fenster zu!' },
            { id: 'h2', text: 'Machen Sie das Fenster zu.' },
            { id: 'h3', text: 'Könnten Sie bitte das Fenster zumachen?' },
          ],
          solution: ['h3'],
          explanation:
            'Eine Frage mit „Könnten Sie bitte …?“ ist die höflichste Form. Der Imperativ klingt bei Fremden schnell unhöflich.',
          explanationTranslations: {
            en: 'A question with „Könnten Sie bitte …?“ is the most polite form. The imperative can easily sound rude with strangers.',
            es: 'Una pregunta con „Könnten Sie bitte …?“ es la forma más cortés. Con desconocidos, el imperativo suena enseguida maleducado.',
            fr: 'Une question avec « Könnten Sie bitte …? » est la forme la plus polie. Avec des inconnus, l’impératif sonne vite impoli.',
            it: 'Una domanda con „Könnten Sie bitte …?“ è la forma più cortese. Con gli sconosciuti l’imperativo suona subito scortese.',
          },
        },
        {
          id: 'b10-4-match',
          type: 'MATCHING',
          instruction: 'Welche Antwort passt zur Bitte?',
          left: [
            { id: 'l1', text: 'Könnten Sie mir sagen, wie spät es ist?' },
            { id: 'l2', text: 'Würdest du die Kinder abholen?' },
            { id: 'l3', text: 'Ich hätte gern ein Stück Torte.' },
          ],
          right: [
            { id: 'r1', text: 'Natürlich, es ist Viertel nach drei.' },
            { id: 'r2', text: 'Ja, klar. Um wie viel Uhr?' },
            { id: 'r3', text: 'Gern. Mit Sahne?' },
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

  // ====================================================== SEITE 5
  // Seite 5 – Rückblick, zum Schluss eine Einladung.
  {
    order: 5,
    title: 'Kannst du das schon?',
    subtitle: 'Rückblick auf das ganze Kapitel',
    estimatedMinutes: 15,
    content: {
      version: v,
      blocks: [
        { id: 'b10-5-h1', type: 'HEADING', level: 1, text: 'Kannst du das schon?' },
        {
          id: 'b10-5-intro',
          type: 'TEXT',
          text: 'Prüfen Sie, was Sie aus Kapitel 10 mitnehmen. Am Ende schreiben Sie über ein Fest aus Ihrem Land.',
          translations: {
            en: 'Check what you take away from Chapter 10. At the end, you’ll write about a festival from your country.',
            es: 'Compruebe qué se lleva del Capítulo 10. Al final escribirá sobre una fiesta de su país.',
            fr: 'Vérifiez ce que vous retenez du chapitre 10. À la fin, vous écrirez sur une fête de votre pays.',
            it: 'Verifichi cosa porta a casa dal Capitolo 10. Alla fine scriverà di una festa del suo paese.',
          },
        },
        {
          id: 'b10-5-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie den Text.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'Meine Oma hat am ' },
            { kind: 'GAP', gapId: 'r1', solution: ['zweiten'], width: 8 },
            { kind: 'TEXT', text: ' (2.) März Geburtstag. Wir schenken ' },
            { kind: 'GAP', gapId: 'r2', solution: ['ihr'], width: 4 },
            { kind: 'TEXT', text: ' einen Gutschein für ein Konzert. Mein Onkel backt ' },
            { kind: 'GAP', gapId: 'r3', solution: ['ihr'], width: 4 },
            { kind: 'TEXT', text: ' eine Torte. Ich rufe meine Schwester an: „' },
            { kind: 'GAP', gapId: 'r4', solution: ['Könntest', 'Koenntest'], width: 9 },
            { kind: 'TEXT', text: ' du Blumen kaufen?“ Am Abend sagen wir alle: „Herzlichen ' },
            { kind: 'GAP', gapId: 'r5', solution: ['Glückwunsch', 'Glueckwunsch'], width: 12 },
            { kind: 'TEXT', text: '!“' },
          ],
        },
        {
          id: 'b10-5-choice',
          type: 'CHOICE',
          instruction: 'Welche Sätze sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'k1', text: 'Ich schenke meinem Freund ein Buch.' },
            { id: 'k2', text: 'Kannst du mich das Salz geben?' },
            { id: 'k3', text: 'Würden Sie mir bitte helfen?' },
            { id: 'k4', text: 'Wir feiern am vierzehn Juli.' },
          ],
          solution: ['k1', 'k3'],
          explanation:
            'Die Person, die etwas bekommt, steht im Dativ: Kannst du mir das Salz geben? Beim Datum steht die Ordinalzahl: am vierzehnten Juli.',
          explanationTranslations: {
            en: 'The person receiving something is in the dative: Kannst du mir das Salz geben? Dates use the ordinal: am vierzehnten Juli.',
            es: 'La persona que recibe algo va en dativo: Kannst du mir das Salz geben? En las fechas se usa el ordinal: am vierzehnten Juli.',
            fr: 'La personne qui reçoit est au datif : Kannst du mir das Salz geben? Pour les dates, on emploie l’ordinal : am vierzehnten Juli.',
            it: 'La persona che riceve va al dativo: Kannst du mir das Salz geben? Nelle date si usa l’ordinale: am vierzehnten Juli.',
          },
        },
        {
          id: 'b10-5-match',
          type: 'MATCHING',
          instruction: 'Ordnen Sie Situation und Satz zu.',
          left: [
            { id: 'm1', text: 'Sie nehmen eine Einladung an.' },
            { id: 'm2', text: 'Sie sagen ab.' },
            { id: 'm3', text: 'Sie bitten höflich um etwas.' },
          ],
          right: [
            { id: 'y1', text: 'Danke, ich komme gern!' },
            { id: 'y2', text: 'Leider kann ich nicht, weil ich arbeiten muss.' },
            { id: 'y3', text: 'Könnten Sie mir bitte den Zucker geben?' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'y1' },
            { leftId: 'm2', rightId: 'y2' },
            { leftId: 'm3', rightId: 'y3' },
          ],
        },
        {
          id: 'b10-5-writing',
          type: 'WRITING',
          instruction: 'Ein Fest in meinem Land',
          prompt:
            'Beschreiben Sie ein Fest aus Ihrem Land in fünf bis sieben Sätzen: Wann feiert man es? Wer feiert zusammen? Was isst man? Schenkt man sich etwas – und wem?',
          minWords: 40,
          maxWords: 150,
          aiFeedback: true,
          sampleAnswer:
            'In Polen ist Heiligabend am 24. Dezember das wichtigste Fest. Die ganze Familie sitzt am Abend zusammen. Wir essen zwölf Gerichte, aber kein Fleisch. Auf dem Tisch steht immer ein Teller für einen Gast. Nach dem Essen schenken die Eltern den Kindern Geschenke. Ich schenke meiner Mutter oft ein Buch. Um Mitternacht gehen viele Menschen in die Kirche.',
        },
      ],
    },
  },
];
