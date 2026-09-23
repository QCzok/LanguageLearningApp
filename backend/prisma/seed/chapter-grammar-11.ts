import type { UnitSeed } from './chapter-beginner-1';

/**
 * Grammatik, Kapitel 11: „Das Passiv“ (ab B2)
 *
 * Drei Seiten, gebaut wie die Kapitel davor.
 *
 * Seite 1 bringt das Vorgangspassiv in allen Zeitformen – das Kursbuch
 * (Intermediate, Kapitel 3) übt nur Präsens, Präteritum und Modalverb, hier
 * kommen Perfekt, Plusquamperfekt und Futur dazu, mit dem verkürzten
 * „worden“. Seite 2 formt Aktiv in Passiv um und zurück, klärt „von“ und
 * „durch“ und zeigt die beiden Fälle, in denen das Passiv kein Subjekt hat:
 * bei Dativverben (Mir wurde geholfen) und beim unpersönlichen Passiv
 * (Hier wird nicht geraucht). Seite 3 grenzt das Zustandspassiv ab und
 * nennt die Ersatzformen, die in Texten oft an die Stelle des Passivs treten.
 *
 * Erklärungen übersetzt, Tabellen unübersetzt – wie in Kapitel 1.
 */
const v = 1;

export const GRAMMAR_11_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – das Vorgangspassiv in allen Zeitformen.
  {
    order: 1,
    title: 'Es wird gebaut, es wurde gebaut',
    subtitle: 'Das Vorgangspassiv in allen Zeitformen',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'g11-1-h1', type: 'HEADING', level: 1, text: 'Es wird gebaut, es wurde gebaut' },
        {
          id: 'g11-1-intro',
          type: 'TEXT',
          text: 'Im Passiv steht die Handlung im Mittelpunkt, nicht die Person, die sie ausführt. Deshalb ist es in Nachrichten, Berichten, Anleitungen und Vorschriften so häufig. Gebildet wird es mit „werden“ und dem Partizip II. Die Zeitform zeigt allein „werden“ – das Partizip bleibt immer gleich.',
          translations: {
            en: 'In the passive the action is the focus, not the person who carries it out. That’s why it’s so common in news, reports, instructions and regulations. It is formed with „werden“ and the past participle. Only „werden“ shows the tense – the participle always stays the same.',
            es: 'En la pasiva lo central es la acción, no la persona que la realiza. Por eso es tan frecuente en noticias, informes, instrucciones y normas. Se forma con „werden“ y el participio II. El tiempo lo marca solo „werden“; el participio no cambia nunca.',
            fr: 'Au passif, c’est l’action qui est au centre, pas la personne qui l’accomplit. C’est pourquoi il est si fréquent dans les informations, les rapports, les modes d’emploi et les règlements. On le forme avec « werden » et le participe passé. Seul « werden » indique le temps – le participe ne change jamais.',
            it: 'Nel passivo al centro c’è l’azione, non la persona che la compie. Per questo è così frequente in notizie, relazioni, istruzioni e regolamenti. Si forma con „werden“ e il participio passato. Il tempo lo indica solo „werden“ – il participio resta sempre uguale.',
          },
        },
        {
          id: 'g11-1-info-zeiten',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Die Zeitformen',
          text: 'Im Perfekt und Plusquamperfekt steht das Hilfsverb „sein“, und von „werden“ bleibt die verkürzte Form „worden“ (ohne ge-): Das Haus ist gebaut worden. „geworden“ gibt es nur, wenn „werden“ Vollverb ist (Er ist Arzt geworden). Das Futur Passiv ist selten; man benutzt meist das Präsens mit Zeitangabe.',
          translations: {
            en: {
              title: 'The tenses',
              text: 'In the perfect and pluperfect the auxiliary is „sein“, and „werden“ becomes the shortened form „worden“ (without ge-): Das Haus ist gebaut worden. „geworden“ only exists when „werden“ is a main verb (Er ist Arzt geworden – he became a doctor). The future passive is rare; usually the present tense with a time expression is used.',
            },
            es: {
              title: 'Los tiempos',
              text: 'En el perfecto y el pluscuamperfecto el auxiliar es „sein“, y de „werden“ queda la forma abreviada „worden“ (sin ge-): Das Haus ist gebaut worden. „geworden“ solo existe cuando „werden“ es verbo pleno (Er ist Arzt geworden – se hizo médico). El futuro pasivo es raro; se suele usar el presente con una indicación de tiempo.',
            },
            fr: {
              title: 'Les temps',
              text: 'Au parfait et au plus-que-parfait, l’auxiliaire est « sein », et « werden » prend la forme abrégée « worden » (sans ge-) : Das Haus ist gebaut worden. « geworden » n’existe que lorsque « werden » est un verbe plein (Er ist Arzt geworden – il est devenu médecin). Le futur passif est rare ; on emploie plutôt le présent avec une indication de temps.',
            },
            it: {
              title: 'I tempi',
              text: 'Al passato prossimo (Perfekt) e al trapassato l’ausiliare è „sein“, e di „werden“ resta la forma abbreviata „worden“ (senza ge-): Das Haus ist gebaut worden. „geworden“ esiste solo quando „werden“ è verbo pieno (Er ist Arzt geworden – è diventato medico). Il futuro passivo è raro; di solito si usa il presente con un’indicazione di tempo.',
            },
          },
          table: {
            headers: ['Zeitform', 'Passiv'],
            rows: [
              ['Präsens', 'Die Brücke wird repariert.'],
              ['Präteritum', 'Die Brücke wurde repariert.'],
              ['Perfekt', 'Die Brücke ist repariert worden.'],
              ['Plusquamperfekt', 'Die Brücke war repariert worden.'],
              ['Futur I', 'Die Brücke wird repariert werden.'],
              ['mit Modalverb (Präsens)', 'Die Brücke muss repariert werden.'],
              ['mit Modalverb (Präteritum)', 'Die Brücke musste repariert werden.'],
            ],
          },
        },
        {
          id: 'g11-1-info-nebensatz',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Im Nebensatz',
          text: 'Im Nebensatz steht das konjugierte Verb am Ende, also hinter dem Partizip: …, weil die Brücke repariert wird. / …, weil die Brücke repariert worden ist. / …, weil die Brücke repariert werden muss.',
          translations: {
            en: {
              title: 'In a subordinate clause',
              text: 'In a subordinate clause the conjugated verb goes to the end, i.e. after the participle: …, weil die Brücke repariert wird. / …, weil die Brücke repariert worden ist. / …, weil die Brücke repariert werden muss.',
            },
            es: {
              title: 'En la subordinada',
              text: 'En la subordinada el verbo conjugado va al final, es decir, detrás del participio: …, weil die Brücke repariert wird. / …, weil die Brücke repariert worden ist. / …, weil die Brücke repariert werden muss.',
            },
            fr: {
              title: 'Dans une subordonnée',
              text: 'Dans une subordonnée, le verbe conjugué se place à la fin, donc après le participe : …, weil die Brücke repariert wird. / …, weil die Brücke repariert worden ist. / …, weil die Brücke repariert werden muss.',
            },
            it: {
              title: 'Nella subordinata',
              text: 'Nella subordinata il verbo coniugato va alla fine, cioè dopo il participio: …, weil die Brücke repariert wird. / …, weil die Brücke repariert worden ist. / …, weil die Brücke repariert werden muss.',
            },
          },
        },
        {
          id: 'g11-1-cloze',
          type: 'CLOZE',
          instruction: 'Setzen Sie den Satz „Das Museum wird renoviert.“ in die angegebene Zeitform.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Präteritum: Das Museum ' },
            { kind: 'GAP', gapId: 't1', solution: ['wurde renoviert'], width: 16 },
            { kind: 'TEXT', text: '.\n2. Perfekt: Das Museum ' },
            { kind: 'GAP', gapId: 't2', solution: ['ist renoviert worden'], width: 21 },
            { kind: 'TEXT', text: '.\n3. Plusquamperfekt: Das Museum ' },
            { kind: 'GAP', gapId: 't3', solution: ['war renoviert worden'], width: 21 },
            { kind: 'TEXT', text: '.\n4. mit „müssen“ (Präsens): Das Museum ' },
            { kind: 'GAP', gapId: 't4', solution: ['muss renoviert werden'], width: 22 },
            { kind: 'TEXT', text: '.\n5. Nebensatz, Perfekt: Es ist geschlossen, weil es ' },
            { kind: 'GAP', gapId: 't5', solution: ['renoviert worden ist'], width: 21 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'g11-1-choice',
          type: 'CHOICE',
          instruction: 'Welche Sätze sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'c1', text: 'Der Täter ist gestern festgenommen worden.' },
            { id: 'c2', text: 'Der Täter ist gestern festgenommen geworden.' },
            { id: 'c3', text: 'Der Antrag hat abgelehnt worden.' },
            { id: 'c4', text: 'Die Straße war schon gesperrt worden, als wir ankamen.' },
          ],
          solution: ['c1', 'c4'],
          explanation:
            'Im Passiv Perfekt steht „worden“, nicht „geworden“, und das Hilfsverb ist „sein“: Der Antrag ist abgelehnt worden.',
          explanationTranslations: {
            en: 'The perfect passive uses „worden“, not „geworden“, and the auxiliary is „sein“: Der Antrag ist abgelehnt worden.',
            es: 'En el perfecto pasivo se usa „worden“, no „geworden“, y el auxiliar es „sein“: Der Antrag ist abgelehnt worden.',
            fr: 'Au parfait passif, on emploie « worden », pas « geworden », et l’auxiliaire est « sein » : Der Antrag ist abgelehnt worden.',
            it: 'Al Perfekt passivo si usa „worden“, non „geworden“, e l’ausiliare è „sein“: Der Antrag ist abgelehnt worden.',
          },
        },
        {
          id: 'g11-1-order',
          type: 'ORDERING',
          instruction: 'Bilden Sie einen Passivsatz im Perfekt.',
          items: [
            { id: 'a1', text: 'Das Konzert' },
            { id: 'a2', text: 'ist' },
            { id: 'a3', text: 'wegen des Sturms' },
            { id: 'a4', text: 'abgesagt' },
            { id: 'a5', text: 'worden.' },
          ],
          solution: ['a1', 'a2', 'a3', 'a4', 'a5'],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – Aktiv und Passiv, von/durch, Passiv ohne Subjekt.
  {
    order: 2,
    title: 'Von wem? Wodurch?',
    subtitle: 'Aktiv und Passiv umformen',
    estimatedMinutes: 28,
    content: {
      version: v,
      blocks: [
        { id: 'g11-2-h1', type: 'HEADING', level: 1, text: 'Von wem? Wodurch?' },
        {
          id: 'g11-2-intro',
          type: 'TEXT',
          text: 'Beim Umformen wird das Akkusativobjekt des Aktivsatzes zum Subjekt des Passivsatzes. Das Subjekt des Aktivsatzes fällt meistens weg – es ist ja nicht wichtig, sonst hätte man das Aktiv genommen. Will man es trotzdem nennen, steht es mit „von“ oder „durch“.',
          translations: {
            en: 'When converting, the direct object of the active sentence becomes the subject of the passive sentence. The subject of the active sentence is usually dropped – it isn’t important, otherwise you’d have used the active. If you still want to mention it, it follows „von“ or „durch“.',
            es: 'Al transformar, el complemento directo de la activa pasa a ser sujeto de la pasiva. El sujeto de la activa suele desaparecer – no es importante; si no, se habría usado la activa. Si se quiere mencionar de todos modos, va con „von“ o „durch“.',
            fr: 'Lors de la transformation, le COD de la phrase active devient le sujet de la phrase passive. Le sujet de l’actif disparaît le plus souvent – il n’est pas important, sinon on aurait employé l’actif. Si l’on veut malgré tout le nommer, il est introduit par « von » ou « durch ».',
            it: 'Nella trasformazione il complemento oggetto della frase attiva diventa il soggetto della passiva. Il soggetto dell’attiva di solito sparisce – non è importante, altrimenti si sarebbe usato l’attivo. Se lo si vuole nominare comunque, si usa „von“ o „durch“.',
          },
        },
        {
          id: 'g11-2-info-umformen',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Vom Aktiv zum Passiv',
          text: '„von“ + Dativ nennt die handelnde Person oder den Urheber: Das Bild wurde von Picasso gemalt. „durch“ + Akkusativ nennt ein Mittel oder eine Ursache, oft etwas, das nicht bewusst handelt: Die Stadt wurde durch ein Erdbeben zerstört. Wird im Aktiv „man“ benutzt, fällt es im Passiv einfach weg.',
          translations: {
            en: {
              title: 'From active to passive',
              text: '„von“ + dative names the person acting or the originator: Das Bild wurde von Picasso gemalt. „durch“ + accusative names a means or cause, often something that doesn’t act consciously: Die Stadt wurde durch ein Erdbeben zerstört. If the active uses „man“, it simply disappears in the passive.',
            },
            es: {
              title: 'De la activa a la pasiva',
              text: '„von“ + dativo nombra a la persona que actúa o al autor: Das Bild wurde von Picasso gemalt. „durch“ + acusativo nombra un medio o una causa, a menudo algo que no actúa conscientemente: Die Stadt wurde durch ein Erdbeben zerstört. Si en la activa aparece „man“, en la pasiva simplemente desaparece.',
            },
            fr: {
              title: 'De l’actif au passif',
              text: '« von » + datif désigne la personne qui agit ou l’auteur : Das Bild wurde von Picasso gemalt. « durch » + accusatif désigne un moyen ou une cause, souvent quelque chose qui n’agit pas consciemment : Die Stadt wurde durch ein Erdbeben zerstört. Si l’actif emploie « man », il disparaît tout simplement au passif.',
            },
            it: {
              title: 'Dall’attivo al passivo',
              text: '„von“ + dativo indica la persona che agisce o l’autore: Das Bild wurde von Picasso gemalt. „durch“ + accusativo indica un mezzo o una causa, spesso qualcosa che non agisce consapevolmente: Die Stadt wurde durch ein Erdbeben zerstört. Se nell’attivo c’è „man“, nel passivo semplicemente sparisce.',
            },
          },
          table: {
            headers: ['Aktiv', 'Passiv'],
            rows: [
              ['Die Firma entlässt 200 Mitarbeiter.', '200 Mitarbeiter werden (von der Firma) entlassen.'],
              ['Man hat den Termin verschoben.', 'Der Termin ist verschoben worden.'],
              ['Ein Feuer zerstörte das Gebäude.', 'Das Gebäude wurde durch ein Feuer zerstört.'],
              ['Die Ärztin hat den Patienten operiert.', 'Der Patient ist von der Ärztin operiert worden.'],
            ],
          },
        },
        {
          id: 'g11-2-info-ohne-subjekt',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Passiv ohne Subjekt',
          text: 'Nur ein Akkusativobjekt kann Subjekt werden. Ein Dativobjekt bleibt im Dativ, und das Verb steht in der 3. Person Singular: Man hilft den Opfern. → Den Opfern wird geholfen. Auch ganz ohne Objekt geht das Passiv, wenn es um eine Tätigkeit an sich geht: Hier wird nicht geraucht. Steht nichts anderes auf Position 1, füllt „es“ den Platz: Es wird getanzt.',
          translations: {
            en: {
              title: 'Passive without a subject',
              text: 'Only a direct (accusative) object can become the subject. A dative object stays in the dative, and the verb is 3rd person singular: Man hilft den Opfern. → Den Opfern wird geholfen. The passive also works with no object at all when it’s about an activity itself: Hier wird nicht geraucht (no smoking here). If nothing else fills position 1, „es“ takes the place: Es wird getanzt (there is dancing).',
            },
            es: {
              title: 'Pasiva sin sujeto',
              text: 'Solo un complemento en acusativo puede pasar a ser sujeto. El complemento en dativo sigue en dativo y el verbo va en 3.ª persona del singular: Man hilft den Opfern. → Den Opfern wird geholfen. La pasiva funciona incluso sin complemento cuando se trata de la actividad en sí: Hier wird nicht geraucht (aquí no se fuma). Si nada más ocupa la posición 1, la llena „es“: Es wird getanzt (se baila).',
            },
            fr: {
              title: 'Passif sans sujet',
              text: 'Seul un complément à l’accusatif peut devenir sujet. Un complément au datif reste au datif, et le verbe est à la 3e personne du singulier : Man hilft den Opfern. → Den Opfern wird geholfen. Le passif fonctionne même sans complément quand il s’agit de l’activité elle-même : Hier wird nicht geraucht (ici, on ne fume pas). Si rien d’autre n’occupe la position 1, « es » prend la place : Es wird getanzt (on danse).',
            },
            it: {
              title: 'Passivo senza soggetto',
              text: 'Solo un complemento all’accusativo può diventare soggetto. Il complemento al dativo resta al dativo e il verbo va alla 3ª persona singolare: Man hilft den Opfern. → Den Opfern wird geholfen. Il passivo funziona anche senza complemento, quando si parla dell’attività in sé: Hier wird nicht geraucht (qui non si fuma). Se la posizione 1 non è occupata da altro, la riempie „es“: Es wird getanzt (si balla).',
            },
          },
        },
        {
          id: 'g11-2-cloze',
          type: 'CLOZE',
          instruction: 'Formen Sie ins Passiv um. Behalten Sie die Zeitform.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Man öffnet die Türen um neun Uhr. → Die Türen ' },
            { kind: 'GAP', gapId: 'u1', solution: ['werden um neun Uhr geöffnet', 'werden um neun Uhr geoeffnet', 'werden um 9 Uhr geöffnet', 'werden um 9 Uhr geoeffnet'], width: 26 },
            { kind: 'TEXT', text: '.\n2. Ein Sturm beschädigte das Dach. → Das Dach ' },
            { kind: 'GAP', gapId: 'u2', solution: ['wurde durch einen Sturm beschädigt', 'wurde durch einen Sturm beschaedigt'], width: 34 },
            { kind: 'TEXT', text: '.\n3. Man hat mir nicht geantwortet. → Mir ' },
            { kind: 'GAP', gapId: 'u3', solution: ['ist nicht geantwortet worden'], width: 28 },
            { kind: 'TEXT', text: '.\n4. Man arbeitet sonntags nicht. → Sonntags ' },
            { kind: 'GAP', gapId: 'u4', solution: ['wird nicht gearbeitet'], width: 22 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'g11-2-choice',
          type: 'CHOICE',
          instruction: 'Welche Sätze sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'c1', text: 'Dem Kunden wurde sofort geholfen.' },
            { id: 'c2', text: 'Der Kunde wurde sofort geholfen.' },
            { id: 'c3', text: 'Der Roman wurde von einer jungen Autorin geschrieben.' },
            { id: 'c4', text: 'Der Roman wurde durch einer jungen Autorin geschrieben.' },
          ],
          solution: ['c1', 'c3'],
          explanation:
            '„helfen“ verlangt den Dativ – der bleibt auch im Passiv: Dem Kunden wurde geholfen. Eine handelnde Person steht mit „von“ + Dativ; „durch“ steht mit Akkusativ und eher für Mittel oder Ursachen.',
          explanationTranslations: {
            en: '„helfen“ takes the dative – which remains in the passive: Dem Kunden wurde geholfen. A person acting is introduced with „von“ + dative; „durch“ takes the accusative and is used rather for means or causes.',
            es: '„helfen“ rige dativo, que se mantiene en la pasiva: Dem Kunden wurde geholfen. La persona que actúa va con „von“ + dativo; „durch“ rige acusativo y se usa más bien para medios o causas.',
            fr: '« helfen » régit le datif – qui reste au passif : Dem Kunden wurde geholfen. La personne qui agit est introduite par « von » + datif ; « durch » est suivi de l’accusatif et s’emploie plutôt pour un moyen ou une cause.',
            it: '„helfen“ vuole il dativo – che resta anche nel passivo: Dem Kunden wurde geholfen. La persona che agisce va con „von“ + dativo; „durch“ regge l’accusativo e si usa piuttosto per mezzi o cause.',
          },
        },
        {
          id: 'g11-2-match',
          type: 'MATCHING',
          instruction: 'Welcher Aktivsatz gehört zu welchem Passivsatz?',
          left: [
            { id: 'l1', text: 'Die Polizei hat die Straße gesperrt.' },
            { id: 'l2', text: 'Man sperrt die Straße.' },
            { id: 'l3', text: 'Man sperrte die Straße.' },
            { id: 'l4', text: 'Man muss die Straße sperren.' },
          ],
          right: [
            { id: 'r1', text: 'Die Straße ist von der Polizei gesperrt worden.' },
            { id: 'r2', text: 'Die Straße wird gesperrt.' },
            { id: 'r3', text: 'Die Straße wurde gesperrt.' },
            { id: 'r4', text: 'Die Straße muss gesperrt werden.' },
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
  // Seite 3 – Zustandspassiv und Passiversatz.
  {
    order: 3,
    title: 'Die Tür wird geschlossen – die Tür ist geschlossen',
    subtitle: 'Zustandspassiv und Passiversatz',
    estimatedMinutes: 29,
    content: {
      version: v,
      blocks: [
        { id: 'g11-3-h1', type: 'HEADING', level: 1, text: 'Zustandspassiv und Passiversatz' },
        {
          id: 'g11-3-intro',
          type: 'TEXT',
          text: 'Das Passiv mit „werden“ beschreibt einen Vorgang: Etwas passiert gerade. Das Passiv mit „sein“ beschreibt das Ergebnis: den Zustand danach. Um 18 Uhr wird der Laden geschlossen (jemand schließt ihn). Um 19 Uhr ist der Laden geschlossen (er ist zu).',
          translations: {
            en: 'The passive with „werden“ describes a process: something is happening. The passive with „sein“ describes the result: the state afterwards. Um 18 Uhr wird der Laden geschlossen (someone closes it). Um 19 Uhr ist der Laden geschlossen (it’s closed).',
            es: 'La pasiva con „werden“ describe un proceso: algo está pasando. La pasiva con „sein“ describe el resultado: el estado posterior. Um 18 Uhr wird der Laden geschlossen (alguien la cierra). Um 19 Uhr ist der Laden geschlossen (está cerrada).',
            fr: 'Le passif avec « werden » décrit un processus : quelque chose est en train de se passer. Le passif avec « sein » décrit le résultat : l’état qui suit. Um 18 Uhr wird der Laden geschlossen (quelqu’un le ferme). Um 19 Uhr ist der Laden geschlossen (il est fermé).',
            it: 'Il passivo con „werden“ descrive un processo: qualcosa sta succedendo. Il passivo con „sein“ descrive il risultato: lo stato che ne segue. Um 18 Uhr wird der Laden geschlossen (qualcuno lo chiude). Um 19 Uhr ist der Laden geschlossen (è chiuso).',
          },
        },
        {
          id: 'g11-3-info-zustand',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Vorgang oder Zustand?',
          text: 'Das Zustandspassiv wird mit „sein“ + Partizip II gebildet und steht meist im Präsens oder Präteritum. Es nennt keine handelnde Person. Ein Test: Kann man „schon“ oder „noch“ ergänzen, ist oft der Zustand gemeint – Das Fenster ist schon repariert.',
          translations: {
            en: {
              title: 'Process or state?',
              text: 'The state passive is formed with „sein“ + past participle and usually appears in the present or simple past. It names no one acting. A test: if you can add „schon“ (already) or „noch“ (still), the state is often meant – Das Fenster ist schon repariert.',
            },
            es: {
              title: '¿Proceso o estado?',
              text: 'La pasiva de estado se forma con „sein“ + participio II y suele ir en presente o pretérito. No nombra a nadie que actúe. Una prueba: si se puede añadir „schon“ (ya) o „noch“ (todavía), suele tratarse del estado – Das Fenster ist schon repariert.',
            },
            fr: {
              title: 'Processus ou état ?',
              text: 'Le passif d’état se forme avec « sein » + participe passé et s’emploie surtout au présent ou au prétérit. Il ne nomme pas d’agent. Un test : si l’on peut ajouter « schon » (déjà) ou « noch » (encore), c’est souvent l’état qui est visé – Das Fenster ist schon repariert.',
            },
            it: {
              title: 'Processo o stato?',
              text: 'Il passivo di stato si forma con „sein“ + participio passato e si usa soprattutto al presente o al Präteritum. Non nomina chi agisce. Un test: se si può aggiungere „schon“ (già) o „noch“ (ancora), spesso si intende lo stato – Das Fenster ist schon repariert.',
            },
          },
          table: {
            headers: ['', 'Vorgangspassiv (werden)', 'Zustandspassiv (sein)'],
            rows: [
              ['Präsens', 'Der Tisch wird gedeckt.', 'Der Tisch ist gedeckt.'],
              ['Präteritum', 'Der Tisch wurde gedeckt.', 'Der Tisch war gedeckt.'],
              ['Bedeutung', 'Jemand deckt ihn gerade.', 'Alles steht schon darauf.'],
            ],
          },
        },
        {
          id: 'g11-3-info-ersatz',
          type: 'INFO',
          variant: 'TIP',
          title: 'Passiversatz',
          text: 'Statt des Passivs findet man in Texten oft andere Formen mit ähnlicher Bedeutung. „sein + zu + Infinitiv“ heißt „kann“ oder „muss“ (Das Formular ist bis Montag abzugeben = muss abgegeben werden). Adjektive auf „-bar“ bedeuten „kann“ (Das Wasser ist trinkbar = kann getrunken werden). „sich lassen“ + Infinitiv bedeutet ebenfalls „kann“ (Das Problem lässt sich lösen). Und natürlich „man“.',
          translations: {
            en: {
              title: 'Passive substitutes',
              text: 'Instead of the passive, texts often use other forms with a similar meaning. „sein + zu + infinitive“ means „can“ or „must“ (Das Formular ist bis Montag abzugeben = must be handed in). Adjectives ending in „-bar“ mean „can“ (Das Wasser ist trinkbar = can be drunk). „sich lassen“ + infinitive also means „can“ (Das Problem lässt sich lösen). And of course „man“.',
            },
            es: {
              title: 'Sustitutos de la pasiva',
              text: 'En lugar de la pasiva, en los textos aparecen a menudo otras formas de significado parecido. „sein + zu + infinitivo“ significa „poder“ o „deber“ (Das Formular ist bis Montag abzugeben = debe entregarse). Los adjetivos en „-bar“ significan „poder“ (Das Wasser ist trinkbar = se puede beber). „sich lassen“ + infinitivo también significa „poder“ (Das Problem lässt sich lösen). Y, por supuesto, „man“.',
            },
            fr: {
              title: 'Substituts du passif',
              text: 'Au lieu du passif, on trouve souvent dans les textes d’autres formes au sens voisin. « sein + zu + infinitif » signifie « pouvoir » ou « devoir » (Das Formular ist bis Montag abzugeben = doit être remis). Les adjectifs en « -bar » signifient « pouvoir » (Das Wasser ist trinkbar = peut être bu). « sich lassen » + infinitif signifie aussi « pouvoir » (Das Problem lässt sich lösen). Et bien sûr « man ».',
            },
            it: {
              title: 'Sostituti del passivo',
              text: 'Al posto del passivo nei testi si trovano spesso altre forme con significato simile. „sein + zu + infinito“ significa „potere“ o „dovere“ (Das Formular ist bis Montag abzugeben = deve essere consegnato). Gli aggettivi in „-bar“ significano „potere“ (Das Wasser ist trinkbar = si può bere). Anche „sich lassen“ + infinito significa „potere“ (Das Problem lässt sich lösen). E naturalmente „man“.',
            },
          },
        },
        {
          id: 'g11-3-cloze',
          type: 'CLOZE',
          instruction: 'Vorgang oder Zustand? Ergänzen Sie eine Form von „werden“ oder „sein“.',
          wordBank: ['wird', 'wurde', 'ist', 'sind', 'war'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Pssst! Im Nebenzimmer ' },
            { kind: 'GAP', gapId: 'z1', solution: ['wird'], width: 6 },
            { kind: 'TEXT', text: ' gerade die Prüfung geschrieben.\n2. Keine Sorge, die Tickets ' },
            { kind: 'GAP', gapId: 'z2', solution: ['sind'], width: 6 },
            { kind: 'TEXT', text: ' schon bezahlt.\n3. Als wir ankamen, ' },
            { kind: 'GAP', gapId: 'z3', solution: ['war'], width: 6 },
            { kind: 'TEXT', text: ' das Restaurant schon geschlossen.\n4. Das Rathaus ' },
            { kind: 'GAP', gapId: 'z4', solution: ['wurde'], width: 6 },
            { kind: 'TEXT', text: ' im 16. Jahrhundert gebaut.\n5. Die Heizung ' },
            { kind: 'GAP', gapId: 'z5', solution: ['ist'], width: 6 },
            { kind: 'TEXT', text: ' seit gestern repariert – es ist endlich warm.' },
          ],
        },
        {
          id: 'g11-3-match',
          type: 'MATCHING',
          instruction: 'Welcher Passivsatz hat dieselbe Bedeutung?',
          left: [
            { id: 'l1', text: 'Der Fehler ist leicht zu finden.' },
            { id: 'l2', text: 'Die Tasche ist waschbar.' },
            { id: 'l3', text: 'Die Rechnung ist sofort zu bezahlen.' },
            { id: 'l4', text: 'Das lässt sich nicht ändern.' },
          ],
          right: [
            { id: 'r1', text: 'Der Fehler kann leicht gefunden werden.' },
            { id: 'r2', text: 'Die Tasche kann gewaschen werden.' },
            { id: 'r3', text: 'Die Rechnung muss sofort bezahlt werden.' },
            { id: 'r4', text: 'Das kann nicht geändert werden.' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'g11-3-choice',
          type: 'CHOICE',
          instruction: 'Welcher Satz beschreibt einen Zustand?',
          multiple: false,
          options: [
            { id: 'c1', text: 'Die Kinder werden um acht Uhr abgeholt.' },
            { id: 'c2', text: 'Der Brief ist schon abgeschickt.' },
            { id: 'c3', text: 'Die Straße wurde gestern gereinigt.' },
            { id: 'c4', text: 'Das Paket wird morgen geliefert.' },
          ],
          solution: ['c2'],
          explanation:
            '„ist abgeschickt“ (sein + Partizip II) beschreibt das Ergebnis: Der Brief ist weg. Die anderen Sätze beschreiben mit „werden“ einen Vorgang.',
          explanationTranslations: {
            en: '„ist abgeschickt“ (sein + participle) describes the result: the letter has gone. The other sentences use „werden“ to describe a process.',
            es: '„ist abgeschickt“ (sein + participio II) describe el resultado: la carta ya ha salido. Las demás frases describen un proceso con „werden“.',
            fr: '« ist abgeschickt » (sein + participe passé) décrit le résultat : la lettre est partie. Les autres phrases décrivent un processus avec « werden ».',
            it: '„ist abgeschickt“ (sein + participio) descrive il risultato: la lettera è partita. Le altre frasi descrivono un processo con „werden“.',
          },
        },
        {
          id: 'g11-3-writing',
          type: 'WRITING',
          instruction: 'Eine kurze Meldung',
          prompt:
            'Schreiben Sie eine kurze Zeitungsmeldung (fünf bis sieben Sätze) über ein Ereignis in Ihrer Stadt – zum Beispiel eine Baustelle, ein Fest oder einen Unfall. Benutzen Sie das Passiv in mindestens drei verschiedenen Zeitformen und einmal das Zustandspassiv.',
          minWords: 60,
          maxWords: 150,
          aiFeedback: true,
          sampleAnswer:
            'Neue Brücke über die Saale eröffnet\n\nAm Samstag ist in Halle die neue Fußgängerbrücke eröffnet worden. Sie war im vergangenen Jahr von einer Firma aus Leipzig geplant worden. Gebaut wurde sie in nur acht Monaten. Bei der Eröffnung wurden kostenlose Getränke verteilt, und es wurde bis in die Nacht gefeiert. Die alte Brücke ist seit Montag gesperrt. Sie muss in den nächsten Wochen abgerissen werden.',
        },
      ],
    },
  },
];
