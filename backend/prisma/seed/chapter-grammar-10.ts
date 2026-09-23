import type { UnitSeed } from './chapter-beginner-1';

/**
 * Grammatik, Kapitel 10: „Pronomen“ (ab B2)
 *
 * Drei Seiten, gebaut wie die Kapitel davor.
 *
 * Seite 1 ordnet die Personalpronomen nach Fall und klärt die Frage, die auf
 * B2 wirklich Schwierigkeiten macht: In welcher Reihenfolge stehen zwei
 * Objekte, wenn eines oder beide Pronomen sind? Seite 2 bringt die
 * Possessivpronomen, die – anders als der Possessivartikel – allein stehen
 * und deshalb überall die Endung des bestimmten Artikels zeigen (meiner,
 * meins), dazu „einer“ und „keiner“. Seite 3 die Reflexivpronomen mit dem
 * Unterschied zwischen Akkusativ und Dativ (ich wasche mich / ich wasche
 * mir die Hände) und „einander“.
 *
 * Die Relativpronomen, die der Untertitel nennt, stehen ausführlich in
 * Kapitel 7, Seite 3; hier werden sie nicht wiederholt, sondern nur verwiesen.
 *
 * Erklärungen übersetzt, Tabellen unübersetzt – wie in Kapitel 1.
 */
const v = 1;

export const GRAMMAR_10_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Personalpronomen und die Stellung zweier Objekte.
  {
    order: 1,
    title: 'Ich gebe es ihr',
    subtitle: 'Personalpronomen und zwei Objekte',
    estimatedMinutes: 27,
    content: {
      version: v,
      blocks: [
        { id: 'g10-1-h1', type: 'HEADING', level: 1, text: 'Ich gebe es ihr' },
        {
          id: 'g10-1-intro',
          type: 'TEXT',
          text: 'Pronomen ersetzen ein Nomen, das schon bekannt ist. Das Personalpronomen übernimmt dabei den Fall des Nomens: Ich sehe den Mann → Ich sehe ihn. Ich helfe der Frau → Ich helfe ihr. Die Formen im Nominativ kennen Sie längst – hier stehen alle vier Fälle zusammen.',
          translations: {
            en: 'Pronouns replace a noun that is already known. The personal pronoun takes over the noun’s case: Ich sehe den Mann → Ich sehe ihn. Ich helfe der Frau → Ich helfe ihr. You’ve long known the nominative forms – here are all four cases together.',
            es: 'Los pronombres sustituyen a un sustantivo ya conocido. El pronombre personal adopta el caso del sustantivo: Ich sehe den Mann → Ich sehe ihn. Ich helfe der Frau → Ich helfe ihr. Las formas del nominativo ya las conoce; aquí están los cuatro casos juntos.',
            fr: 'Les pronoms remplacent un nom déjà connu. Le pronom personnel reprend le cas du nom : Ich sehe den Mann → Ich sehe ihn. Ich helfe der Frau → Ich helfe ihr. Vous connaissez depuis longtemps le nominatif – voici les quatre cas réunis.',
            it: 'I pronomi sostituiscono un sostantivo già noto. Il pronome personale prende il caso del sostantivo: Ich sehe den Mann → Ich sehe ihn. Ich helfe der Frau → Ich helfe ihr. Le forme del nominativo le conosce da tempo – qui ci sono tutti e quattro i casi insieme.',
          },
        },
        {
          id: 'g10-1-info-formen',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Personalpronomen in allen Fällen',
          text: 'Der Genitiv (meiner, deiner …) ist sehr selten und steht fast nur nach wenigen Verben und Präpositionen; er wird hier nur zum Nachschlagen gezeigt. Wichtig sind Nominativ, Akkusativ und Dativ. Achtung bei „ihr“: Es ist Nominativ Plural (ihr kommt) und Dativ Singular feminin (ich helfe ihr).',
          translations: {
            en: {
              title: 'Personal pronouns in all cases',
              text: 'The genitive (meiner, deiner …) is very rare and occurs almost only after a few verbs and prepositions; it’s shown here just for reference. What matters are nominative, accusative and dative. Careful with „ihr“: it’s nominative plural (ihr kommt) and dative singular feminine (ich helfe ihr).',
            },
            es: {
              title: 'Pronombres personales en todos los casos',
              text: 'El genitivo (meiner, deiner…) es muy raro y aparece casi solo tras unos pocos verbos y preposiciones; aquí se muestra solo como referencia. Lo importante son nominativo, acusativo y dativo. Cuidado con „ihr“: es nominativo plural (ihr kommt) y dativo singular femenino (ich helfe ihr).',
            },
            fr: {
              title: 'Les pronoms personnels à tous les cas',
              text: 'Le génitif (meiner, deiner…) est très rare et n’apparaît guère qu’après quelques verbes et prépositions ; il ne figure ici qu’à titre de référence. L’essentiel, ce sont le nominatif, l’accusatif et le datif. Attention à « ihr » : c’est le nominatif pluriel (ihr kommt) et le datif singulier féminin (ich helfe ihr).',
            },
            it: {
              title: 'I pronomi personali in tutti i casi',
              text: 'Il genitivo (meiner, deiner…) è molto raro e compare quasi solo dopo pochi verbi e preposizioni; qui è indicato solo per consultazione. Contano nominativo, accusativo e dativo. Attenzione a „ihr“: è nominativo plurale (ihr kommt) e dativo singolare femminile (ich helfe ihr).',
            },
          },
          table: {
            headers: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'],
            rows: [
              ['ich', 'mich', 'mir', 'meiner'],
              ['du', 'dich', 'dir', 'deiner'],
              ['er / es', 'ihn / es', 'ihm', 'seiner'],
              ['sie', 'sie', 'ihr', 'ihrer'],
              ['wir', 'uns', 'uns', 'unser'],
              ['ihr', 'euch', 'euch', 'euer'],
              ['sie / Sie', 'sie / Sie', 'ihnen / Ihnen', 'ihrer / Ihrer'],
            ],
          },
        },
        {
          id: 'g10-1-info-stellung',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'Zwei Objekte: Wer steht vorn?',
          text: 'Zwei Nomen: Dativ vor Akkusativ – Ich gebe dem Kind den Ball. Ein Pronomen und ein Nomen: das Pronomen zuerst – Ich gebe ihn dem Kind. / Ich gebe ihm den Ball. Zwei Pronomen: Akkusativ vor Dativ – Ich gebe ihn ihm. Als Merksatz: Kurzes vor Langem, und bei zwei Pronomen dreht sich die Reihenfolge um.',
          translations: {
            en: {
              title: 'Two objects: which comes first?',
              text: 'Two nouns: dative before accusative – Ich gebe dem Kind den Ball. One pronoun and one noun: the pronoun first – Ich gebe ihn dem Kind. / Ich gebe ihm den Ball. Two pronouns: accusative before dative – Ich gebe ihn ihm. Rule of thumb: short before long, and with two pronouns the order flips.',
            },
            es: {
              title: 'Dos complementos: ¿cuál va primero?',
              text: 'Dos sustantivos: dativo antes que acusativo – Ich gebe dem Kind den Ball. Un pronombre y un sustantivo: primero el pronombre – Ich gebe ihn dem Kind. / Ich gebe ihm den Ball. Dos pronombres: acusativo antes que dativo – Ich gebe ihn ihm. Regla práctica: lo corto antes que lo largo, y con dos pronombres el orden se invierte.',
            },
            fr: {
              title: 'Deux compléments : lequel en premier ?',
              text: 'Deux noms : datif avant accusatif – Ich gebe dem Kind den Ball. Un pronom et un nom : le pronom d’abord – Ich gebe ihn dem Kind. / Ich gebe ihm den Ball. Deux pronoms : accusatif avant datif – Ich gebe ihn ihm. Moyen mnémotechnique : le court avant le long, et avec deux pronoms l’ordre s’inverse.',
            },
            it: {
              title: 'Due complementi: chi va prima?',
              text: 'Due sostantivi: dativo prima dell’accusativo – Ich gebe dem Kind den Ball. Un pronome e un sostantivo: prima il pronome – Ich gebe ihn dem Kind. / Ich gebe ihm den Ball. Due pronomi: accusativo prima del dativo – Ich gebe ihn ihm. Regola pratica: il breve prima del lungo, e con due pronomi l’ordine si inverte.',
            },
          },
          table: {
            headers: ['Objekte', 'Reihenfolge', 'Beispiel'],
            rows: [
              ['Nomen + Nomen', 'Dativ – Akkusativ', 'Sie schenkt ihrem Bruder ein Buch.'],
              ['Pronomen + Nomen', 'Pronomen – Nomen', 'Sie schenkt es ihrem Bruder.'],
              ['Nomen + Pronomen', 'Pronomen – Nomen', 'Sie schenkt ihm ein Buch.'],
              ['Pronomen + Pronomen', 'Akkusativ – Dativ', 'Sie schenkt es ihm.'],
            ],
          },
        },
        {
          id: 'g10-1-cloze',
          type: 'CLOZE',
          instruction: 'Ersetzen Sie das Nomen in Klammern durch ein Pronomen.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Kennst du ' },
            { kind: 'GAP', gapId: 'p1', solution: ['ihn'], width: 5 },
            { kind: 'TEXT', text: ' schon? (den neuen Kollegen)\n2. Ich rufe ' },
            { kind: 'GAP', gapId: 'p2', solution: ['euch'], width: 5 },
            { kind: 'TEXT', text: ' morgen an. (dich und Lisa)\n3. Das Kleid steht ' },
            { kind: 'GAP', gapId: 'p3', solution: ['ihr'], width: 5 },
            { kind: 'TEXT', text: ' gut. (meiner Schwester)\n4. Kannst du ' },
            { kind: 'GAP', gapId: 'p4', solution: ['ihnen'], width: 6 },
            { kind: 'TEXT', text: ' bitte helfen? (den Kindern)\n5. Frau Braun, darf ich ' },
            { kind: 'GAP', gapId: 'p5', solution: ['Ihnen'], width: 6 },
            { kind: 'TEXT', text: ' etwas anbieten? (Frau Braun, höflich)\n6. Wo ist das Handy? Ich finde ' },
            { kind: 'GAP', gapId: 'p6', solution: ['es'], width: 5 },
            { kind: 'TEXT', text: ' nicht.' },
          ],
        },
        {
          id: 'g10-1-choice',
          type: 'CHOICE',
          instruction: 'Welche Sätze sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'c1', text: 'Hast du deiner Mutter den Brief gegeben? – Ja, ich habe ihn ihr gegeben.' },
            { id: 'c2', text: 'Hast du deiner Mutter den Brief gegeben? – Ja, ich habe ihr ihn gegeben.' },
            { id: 'c3', text: 'Ich zeige dir morgen die Fotos.' },
            { id: 'c4', text: 'Ich zeige die Fotos dir morgen.' },
          ],
          solution: ['c1', 'c3'],
          explanation:
            'Zwei Pronomen: Akkusativ vor Dativ (ihn ihr). Ein Pronomen und ein Nomen: das Pronomen steht zuerst (dir … die Fotos).',
          explanationTranslations: {
            en: 'Two pronouns: accusative before dative (ihn ihr). A pronoun and a noun: the pronoun comes first (dir … die Fotos).',
            es: 'Dos pronombres: acusativo antes que dativo (ihn ihr). Un pronombre y un sustantivo: primero el pronombre (dir … die Fotos).',
            fr: 'Deux pronoms : accusatif avant datif (ihn ihr). Un pronom et un nom : le pronom d’abord (dir … die Fotos).',
            it: 'Due pronomi: accusativo prima del dativo (ihn ihr). Un pronome e un sostantivo: prima il pronome (dir … die Fotos).',
          },
        },
        {
          id: 'g10-1-order',
          type: 'ORDERING',
          instruction: 'Antworten Sie mit zwei Pronomen: „Hat er seiner Freundin die Blumen geschenkt?“',
          items: [
            { id: 'a1', text: 'Ja,' },
            { id: 'a2', text: 'er' },
            { id: 'a3', text: 'hat' },
            { id: 'a4', text: 'sie' },
            { id: 'a5', text: 'ihr' },
            { id: 'a6', text: 'geschenkt.' },
          ],
          solution: ['a1', 'a2', 'a3', 'a4', 'a5', 'a6'],
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – Possessivpronomen, einer und keiner.
  {
    order: 2,
    title: 'Ist das deiner?',
    subtitle: 'Possessivpronomen, einer und keiner',
    estimatedMinutes: 27,
    content: {
      version: v,
      blocks: [
        { id: 'g10-2-h1', type: 'HEADING', level: 1, text: 'Ist das deiner?' },
        {
          id: 'g10-2-intro',
          type: 'TEXT',
          text: 'Vor einem Nomen steht der Possessivartikel: Das ist mein Schlüssel. Fehlt das Nomen, weil es schon klar ist, wird daraus ein Possessivpronomen: Wessen Schlüssel ist das? – Das ist meiner. Das Pronomen muss jetzt allein zeigen, welches Genus und welcher Fall gemeint ist – deshalb bekommt es die Endungen des bestimmten Artikels.',
          translations: {
            en: 'Before a noun you use the possessive article: Das ist mein Schlüssel. If the noun is left out because it’s already clear, it becomes a possessive pronoun: Wessen Schlüssel ist das? – Das ist meiner. The pronoun now has to show gender and case on its own – that’s why it takes the endings of the definite article.',
            es: 'Delante de un sustantivo va el artículo posesivo: Das ist mein Schlüssel. Si falta el sustantivo porque ya está claro, se convierte en pronombre posesivo: Wessen Schlüssel ist das? – Das ist meiner. Ahora el pronombre tiene que mostrar solo el género y el caso; por eso toma las terminaciones del artículo determinado.',
            fr: 'Devant un nom, on emploie le déterminant possessif : Das ist mein Schlüssel. Si le nom disparaît parce qu’il est évident, on obtient un pronom possessif : Wessen Schlüssel ist das? – Das ist meiner. Le pronom doit alors montrer seul le genre et le cas – c’est pourquoi il prend les terminaisons de l’article défini.',
            it: 'Davanti a un sostantivo si usa l’aggettivo possessivo: Das ist mein Schlüssel. Se il sostantivo manca perché è già chiaro, diventa un pronome possessivo: Wessen Schlüssel ist das? – Das ist meiner. Ora il pronome deve mostrare da solo genere e caso – per questo prende le desinenze dell’articolo determinativo.',
          },
        },
        {
          id: 'g10-2-info-possessiv',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Das Possessivpronomen',
          text: 'Die Endungen sind die des bestimmten Artikels: der → meiner, das → meins (auch: meines), die → meine, die (Plural) → meine. Anders als beim Possessivartikel steht die Endung auch im Nominativ maskulin und im Nominativ/Akkusativ neutral. Genauso gehen deiner, seiner, ihrer, unserer, eurer und Ihrer.',
          translations: {
            en: {
              title: 'The possessive pronoun',
              text: 'The endings are those of the definite article: der → meiner, das → meins (also: meines), die → meine, plural die → meine. Unlike the possessive article, the ending appears in the nominative masculine and the nominative/accusative neuter as well. Deiner, seiner, ihrer, unserer, eurer and Ihrer work the same way.',
            },
            es: {
              title: 'El pronombre posesivo',
              text: 'Las terminaciones son las del artículo determinado: der → meiner, das → meins (también meines), die → meine, die (plural) → meine. A diferencia del artículo posesivo, la terminación aparece también en el nominativo masculino y en el nominativo/acusativo neutro. Igual funcionan deiner, seiner, ihrer, unserer, eurer e Ihrer.',
            },
            fr: {
              title: 'Le pronom possessif',
              text: 'Les terminaisons sont celles de l’article défini : der → meiner, das → meins (aussi : meines), die → meine, die (pluriel) → meine. Contrairement au déterminant possessif, la terminaison apparaît aussi au nominatif masculin et au nominatif/accusatif neutre. Deiner, seiner, ihrer, unserer, eurer et Ihrer fonctionnent de la même façon.',
            },
            it: {
              title: 'Il pronome possessivo',
              text: 'Le desinenze sono quelle dell’articolo determinativo: der → meiner, das → meins (anche meines), die → meine, die (plurale) → meine. A differenza dell’aggettivo possessivo, la desinenza compare anche al nominativo maschile e al nominativo/accusativo neutro. Allo stesso modo funzionano deiner, seiner, ihrer, unserer, eurer e Ihrer.',
            },
          },
          table: {
            headers: ['', 'maskulin', 'neutral', 'feminin', 'Plural'],
            rows: [
              ['Nominativ', 'meiner', 'meins', 'meine', 'meine'],
              ['Akkusativ', 'meinen', 'meins', 'meine', 'meine'],
              ['Dativ', 'meinem', 'meinem', 'meiner', 'meinen'],
            ],
          },
        },
        {
          id: 'g10-2-info-einer',
          type: 'INFO',
          variant: 'TIP',
          title: '„einer“ und „keiner“',
          text: 'Nach demselben Muster ersetzen „einer“ und „keiner“ ein Nomen mit unbestimmtem Artikel: Brauchst du einen Stift? – Nein, ich habe schon einen. Gibt es hier ein Café? – Ja, da vorn ist eins. Hast du Kinder? – Nein, ich habe keine. Im Plural von „einer“ steht „welche“: Ich brauche Eier. – Im Kühlschrank sind noch welche.',
          translations: {
            en: {
              title: '„einer“ and „keiner“',
              text: 'Following the same pattern, „einer“ and „keiner“ replace a noun with the indefinite article: Brauchst du einen Stift? – Nein, ich habe schon einen. Gibt es hier ein Café? – Ja, da vorn ist eins. Hast du Kinder? – Nein, ich habe keine. The plural of „einer“ is „welche“: Ich brauche Eier. – Im Kühlschrank sind noch welche.',
            },
            es: {
              title: '„einer“ y „keiner“',
              text: 'Siguiendo el mismo modelo, „einer“ y „keiner“ sustituyen a un sustantivo con artículo indeterminado: Brauchst du einen Stift? – Nein, ich habe schon einen. Gibt es hier ein Café? – Ja, da vorn ist eins. Hast du Kinder? – Nein, ich habe keine. En plural, „einer“ se convierte en „welche“: Ich brauche Eier. – Im Kühlschrank sind noch welche.',
            },
            fr: {
              title: '« einer » et « keiner »',
              text: 'Sur le même modèle, « einer » et « keiner » remplacent un nom précédé de l’article indéfini : Brauchst du einen Stift? – Nein, ich habe schon einen. Gibt es hier ein Café? – Ja, da vorn ist eins. Hast du Kinder? – Nein, ich habe keine. Au pluriel, « einer » devient « welche » : Ich brauche Eier. – Im Kühlschrank sind noch welche.',
            },
            it: {
              title: '„einer“ e „keiner“',
              text: 'Seguendo lo stesso schema, „einer“ e „keiner“ sostituiscono un sostantivo con articolo indeterminativo: Brauchst du einen Stift? – Nein, ich habe schon einen. Gibt es hier ein Café? – Ja, da vorn ist eins. Hast du Kinder? – Nein, ich habe keine. Al plurale „einer“ diventa „welche“: Ich brauche Eier. – Im Kühlschrank sind noch welche.',
            },
          },
        },
        {
          id: 'g10-2-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie das Possessivpronomen oder „einer / keiner“.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Ist das dein Schirm? – Ja, das ist ' },
            { kind: 'GAP', gapId: 'x1', solution: ['meiner'], width: 7 },
            { kind: 'TEXT', text: '.\n2. Wem gehört das Fahrrad? Ist es ' },
            { kind: 'GAP', gapId: 'x2', solution: ['deins', 'deines'], width: 7 },
            { kind: 'TEXT', text: '?\n3. Mein Handy ist leer. Kannst du mir ' },
            { kind: 'GAP', gapId: 'x3', solution: ['deins', 'deines'], width: 7 },
            { kind: 'TEXT', text: ' leihen?\n4. Das sind nicht eure Jacken, das sind ' },
            { kind: 'GAP', gapId: 'x4', solution: ['unsere'], width: 7 },
            { kind: 'TEXT', text: '.\n5. Ich suche einen Parkplatz, aber hier ist ' },
            { kind: 'GAP', gapId: 'x5', solution: ['keiner'], width: 7 },
            { kind: 'TEXT', text: '.\n6. Brauchst du noch Briefmarken? – Nein danke, ich habe noch ' },
            { kind: 'GAP', gapId: 'x6', solution: ['welche'], width: 7 },
            { kind: 'TEXT', text: '.' },
          ],
        },
        {
          id: 'g10-2-choice',
          type: 'CHOICE',
          instruction: 'Welche Sätze sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'c1', text: 'Mein Auto ist kaputt. Können wir mit Ihrem fahren?' },
            { id: 'c2', text: 'Mein Auto ist kaputt. Können wir mit Ihr fahren?' },
            { id: 'c3', text: 'Wessen Koffer ist das? – Das ist sein.' },
            { id: 'c4', text: 'Wessen Koffer ist das? – Das ist seiner.' },
          ],
          solution: ['c1', 'c4'],
          explanation:
            '„mit“ verlangt den Dativ: mit Ihrem (Auto). Ohne Nomen braucht das Pronomen die Endung: Das ist seiner (der Koffer).',
          explanationTranslations: {
            en: '„mit“ takes the dative: mit Ihrem (Auto). Without a noun the pronoun needs its ending: Das ist seiner (der Koffer).',
            es: '„mit“ rige dativo: mit Ihrem (Auto). Sin sustantivo, el pronombre necesita la terminación: Das ist seiner (der Koffer).',
            fr: '« mit » est suivi du datif : mit Ihrem (Auto). Sans nom, le pronom a besoin de sa terminaison : Das ist seiner (der Koffer).',
            it: '„mit“ vuole il dativo: mit Ihrem (Auto). Senza sostantivo il pronome ha bisogno della desinenza: Das ist seiner (der Koffer).',
          },
        },
        {
          id: 'g10-2-match',
          type: 'MATCHING',
          instruction: 'Welche Antwort passt?',
          left: [
            { id: 'l1', text: 'Ist das dein Löffel?' },
            { id: 'l2', text: 'Ist das deine Tasse?' },
            { id: 'l3', text: 'Ist das dein Glas?' },
            { id: 'l4', text: 'Sind das deine Schuhe?' },
          ],
          right: [
            { id: 'r1', text: 'Nein, meiner ist blau.' },
            { id: 'r2', text: 'Nein, meine hat einen Henkel.' },
            { id: 'r3', text: 'Nein, meins steht dort.' },
            { id: 'r4', text: 'Nein, meine sind kleiner.' },
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
  // Seite 3 – Reflexivpronomen.
  {
    order: 3,
    title: 'Ich wasche mir die Hände',
    subtitle: 'Reflexivpronomen im Akkusativ und Dativ',
    estimatedMinutes: 26,
    content: {
      version: v,
      blocks: [
        { id: 'g10-3-h1', type: 'HEADING', level: 1, text: 'Ich wasche mir die Hände' },
        {
          id: 'g10-3-intro',
          type: 'TEXT',
          text: 'Ein Reflexivpronomen zeigt auf das Subjekt zurück: Ich wasche mich. Es unterscheidet sich vom Personalpronomen nur in der 3. Person und bei „Sie“ – dort heißt es immer „sich“. Manche Verben sind immer reflexiv (sich beeilen, sich freuen), andere nur, wenn man die Handlung auf sich selbst richtet (Ich wasche das Auto. / Ich wasche mich.).',
          translations: {
            en: 'A reflexive pronoun points back to the subject: Ich wasche mich. It differs from the personal pronoun only in the 3rd person and with „Sie“ – there it’s always „sich“. Some verbs are always reflexive (sich beeilen – to hurry, sich freuen – to be glad), others only when the action is directed at oneself (Ich wasche das Auto. / Ich wasche mich.).',
            es: 'El pronombre reflexivo remite al sujeto: Ich wasche mich. Solo se distingue del pronombre personal en la 3.ª persona y con „Sie“: allí siempre es „sich“. Algunos verbos son siempre reflexivos (sich beeilen – darse prisa, sich freuen – alegrarse); otros solo cuando la acción recae sobre uno mismo (Ich wasche das Auto. / Ich wasche mich.).',
            fr: 'Le pronom réfléchi renvoie au sujet : Ich wasche mich. Il ne se distingue du pronom personnel qu’à la 3e personne et avec « Sie » – on dit alors toujours « sich ». Certains verbes sont toujours pronominaux (sich beeilen – se dépêcher, sich freuen – se réjouir), d’autres seulement quand l’action porte sur soi-même (Ich wasche das Auto. / Ich wasche mich.).',
            it: 'Il pronome riflessivo rimanda al soggetto: Ich wasche mich. Si distingue dal pronome personale solo alla 3ª persona e con „Sie“ – lì è sempre „sich“. Alcuni verbi sono sempre riflessivi (sich beeilen – sbrigarsi, sich freuen – rallegrarsi), altri solo quando l’azione è rivolta a sé stessi (Ich wasche das Auto. / Ich wasche mich.).',
          },
        },
        {
          id: 'g10-3-info-reflexiv',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Akkusativ oder Dativ?',
          text: 'Normalerweise steht das Reflexivpronomen im Akkusativ: Ich ziehe mich an. Gibt es im Satz schon ein Akkusativobjekt, rückt es in den Dativ: Ich ziehe mir eine Jacke an. Das betrifft vor allem Körperteile und Kleidung. Sichtbar wird der Unterschied nur bei „ich“ und „du“ (mich/mir, dich/dir).',
          translations: {
            en: {
              title: 'Accusative or dative?',
              text: 'Normally the reflexive pronoun is in the accusative: Ich ziehe mich an. If the sentence already has a direct object, it moves to the dative: Ich ziehe mir eine Jacke an. This mainly concerns body parts and clothing. The difference is only visible with „ich“ and „du“ (mich/mir, dich/dir).',
            },
            es: {
              title: '¿Acusativo o dativo?',
              text: 'Normalmente el reflexivo va en acusativo: Ich ziehe mich an. Si la frase ya tiene un complemento directo, pasa al dativo: Ich ziehe mir eine Jacke an. Esto afecta sobre todo a partes del cuerpo y ropa. La diferencia solo se ve con „ich“ y „du“ (mich/mir, dich/dir).',
            },
            fr: {
              title: 'Accusatif ou datif ?',
              text: 'Normalement, le pronom réfléchi est à l’accusatif : Ich ziehe mich an. Si la phrase contient déjà un COD, il passe au datif : Ich ziehe mir eine Jacke an. Cela concerne surtout les parties du corps et les vêtements. La différence n’est visible qu’avec « ich » et « du » (mich/mir, dich/dir).',
            },
            it: {
              title: 'Accusativo o dativo?',
              text: 'Di solito il pronome riflessivo è all’accusativo: Ich ziehe mich an. Se nella frase c’è già un complemento oggetto, passa al dativo: Ich ziehe mir eine Jacke an. Riguarda soprattutto parti del corpo e vestiti. La differenza si vede solo con „ich“ e „du“ (mich/mir, dich/dir).',
            },
          },
          table: {
            headers: ['', 'Akkusativ', 'Dativ'],
            rows: [
              ['ich', 'Ich wasche mich.', 'Ich wasche mir die Hände.'],
              ['du', 'Du kämmst dich.', 'Du kämmst dir die Haare.'],
              ['er / sie / es', 'Er rasiert sich.', 'Er rasiert sich den Bart.'],
              ['wir', 'Wir ziehen uns um.', 'Wir ziehen uns die Schuhe aus.'],
              ['ihr', 'Ihr beeilt euch.', 'Ihr putzt euch die Zähne.'],
              ['sie / Sie', 'Sie freuen sich.', 'Sie wünschen sich ein Haus.'],
            ],
          },
        },
        {
          id: 'g10-3-info-einander',
          type: 'INFO',
          variant: 'TIP',
          title: '„sich“ oder „einander“?',
          text: 'Bei mehreren Personen kann „sich“ auch „gegenseitig“ bedeuten: Die beiden kennen sich seit Jahren. Mit Präposition oder um Missverständnisse zu vermeiden, steht „einander“: Sie reden oft miteinander. Sie denken aneinander.',
          translations: {
            en: {
              title: '„sich“ or „einander“?',
              text: 'With several people, „sich“ can also mean „each other“: Die beiden kennen sich seit Jahren. With a preposition, or to avoid misunderstanding, use „einander“: Sie reden oft miteinander. Sie denken aneinander.',
            },
            es: {
              title: '¿„sich“ o „einander“?',
              text: 'Con varias personas, „sich“ puede significar también „mutuamente“: Die beiden kennen sich seit Jahren. Con preposición o para evitar malentendidos se usa „einander“: Sie reden oft miteinander. Sie denken aneinander.',
            },
            fr: {
              title: '« sich » ou « einander » ?',
              text: 'Avec plusieurs personnes, « sich » peut aussi signifier « l’un l’autre » : Die beiden kennen sich seit Jahren. Avec une préposition, ou pour éviter un malentendu, on emploie « einander » : Sie reden oft miteinander. Sie denken aneinander.',
            },
            it: {
              title: '„sich“ o „einander“?',
              text: 'Con più persone „sich“ può significare anche „a vicenda“: Die beiden kennen sich seit Jahren. Con una preposizione o per evitare equivoci si usa „einander“: Sie reden oft miteinander. Sie denken aneinander.',
            },
          },
        },
        {
          id: 'g10-3-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie das Reflexivpronomen.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Ich freue ' },
            { kind: 'GAP', gapId: 'r1', solution: ['mich'], width: 5 },
            { kind: 'TEXT', text: ' auf das Wochenende.\n2. Du musst ' },
            { kind: 'GAP', gapId: 'r2', solution: ['dich'], width: 5 },
            { kind: 'TEXT', text: ' beeilen, der Zug fährt gleich.\n3. Ich putze ' },
            { kind: 'GAP', gapId: 'r3', solution: ['mir'], width: 5 },
            { kind: 'TEXT', text: ' die Zähne.\n4. Habt ihr ' },
            { kind: 'GAP', gapId: 'r4', solution: ['euch'], width: 5 },
            { kind: 'TEXT', text: ' schon angemeldet?\n5. Was wünschst du ' },
            { kind: 'GAP', gapId: 'r5', solution: ['dir'], width: 5 },
            { kind: 'TEXT', text: ' zum Geburtstag?\n6. Herr Klein, setzen Sie ' },
            { kind: 'GAP', gapId: 'r6', solution: ['sich'], width: 5 },
            { kind: 'TEXT', text: ' doch!' },
          ],
        },
        {
          id: 'g10-3-choice',
          type: 'CHOICE',
          instruction: 'Welche Sätze sind richtig? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'c1', text: 'Ich ziehe mir schnell eine Jacke an.' },
            { id: 'c2', text: 'Ich ziehe mich schnell eine Jacke an.' },
            { id: 'c3', text: 'Kannst du dir das vorstellen?' },
            { id: 'c4', text: 'Wir haben sich gestern im Kino getroffen.' },
          ],
          solution: ['c1', 'c3'],
          explanation:
            'Mit einem Akkusativobjekt (eine Jacke, das) steht das Reflexivpronomen im Dativ: mir, dir. „sich“ gibt es nur in der 3. Person und bei „Sie“ – bei „wir“ heißt es „uns“: Wir haben uns getroffen.',
          explanationTranslations: {
            en: 'With a direct object (eine Jacke, das) the reflexive pronoun is in the dative: mir, dir. „sich“ exists only in the 3rd person and with „Sie“ – with „wir“ it’s „uns“: Wir haben uns getroffen.',
            es: 'Con un complemento directo (eine Jacke, das) el reflexivo va en dativo: mir, dir. „sich“ solo existe en 3.ª persona y con „Sie“; con „wir“ es „uns“: Wir haben uns getroffen.',
            fr: 'Avec un COD (eine Jacke, das), le pronom réfléchi est au datif : mir, dir. « sich » n’existe qu’à la 3e personne et avec « Sie » – avec « wir », c’est « uns » : Wir haben uns getroffen.',
            it: 'Con un complemento oggetto (eine Jacke, das) il riflessivo va al dativo: mir, dir. „sich“ esiste solo alla 3ª persona e con „Sie“ – con „wir“ è „uns“: Wir haben uns getroffen.',
          },
        },
        {
          id: 'g10-3-order',
          type: 'ORDERING',
          instruction: 'Bilden Sie einen Satz.',
          items: [
            { id: 'a1', text: 'Ich' },
            { id: 'a2', text: 'habe' },
            { id: 'a3', text: 'mir' },
            { id: 'a4', text: 'gestern' },
            { id: 'a5', text: 'einen neuen Mantel' },
            { id: 'a6', text: 'gekauft.' },
          ],
          solution: ['a1', 'a2', 'a3', 'a4', 'a5', 'a6'],
        },
        {
          id: 'g10-3-writing',
          type: 'WRITING',
          instruction: 'Mein Morgen',
          prompt:
            'Beschreiben Sie in fünf bis sieben Sätzen Ihren Morgen oder den Morgen einer anderen Person. Benutzen Sie mindestens drei reflexive Verben (auch mit Dativ, z. B. „sich die Zähne putzen“) und einen Satz mit zwei Pronomen als Objekte.',
          minWords: 50,
          maxWords: 130,
          aiFeedback: true,
          sampleAnswer:
            'Mein Wecker klingelt um halb sieben, aber ich stehe nie sofort auf. Nach zehn Minuten beeile ich mich dann doch. Im Bad wasche ich mir das Gesicht und putze mir die Zähne. Danach ziehe ich mich an und mache Kaffee. Meine Tochter wünscht sich jeden Morgen einen Kakao, also mache ich ihn ihr. Um halb acht verabschieden wir uns an der Haustür.',
        },
      ],
    },
  },
];
