import { UnitSection } from '@prisma/client';
import type { UnitContent } from '@lingua/shared';

/**
 * A1, Kapitel 1: „Guten Tag!"
 *
 * Vollständig ausgearbeitetes Musterkapitel. Aufbau wie in einem Lehrwerk:
 * vier Kursbucheinheiten führen neue Inhalte ein, fünf Arbeitsbucheinheiten
 * üben genau diese Inhalte nach.
 *
 * Die Einheiten sind einsprachig deutsch gehalten – bei A1 üblich, weil die
 * Muttersprachen der Lernenden auseinandergehen. Nur die Wortschatzlisten
 * tragen eine englische Übersetzung als Verständnishilfe (Glossarkonvention).
 * Sämtliche Texte sind eigenständig verfasst.
 */
export interface UnitSeed {
  section: UnitSection;
  order: number;
  title: string;
  subtitle: string;
  estimatedMinutes: number;
  content: UnitContent;
}

const v = 1;

export const CHAPTER_A1_1_UNITS: UnitSeed[] = [
  // ============================================================ KURSBUCH 1
  {
    section: UnitSection.KURSBUCH,
    order: 1,
    title: 'Guten Tag!',
    subtitle: 'Begrüßen und verabschieden',
    estimatedMinutes: 12,
    content: {
      version: v,
      blocks: [
        { id: 'k1-h1', type: 'HEADING', level: 1, text: 'Guten Tag!' },
        {
          id: 'k1-intro',
          type: 'TEXT',
          text: 'Menschen begrüßen sich jeden Tag. Wie man das macht, hängt von der Tageszeit ab – und davon, wie gut man sich kennt. Hören und lesen Sie die beiden Gespräche.',
        },
        {
          id: 'k1-dlg1',
          type: 'DIALOGUE',
          title: 'Im Büro – morgens um neun',
          lines: [
            { speaker: 'Frau Behrens', text: 'Guten Morgen, Herr Okafor!' },
            { speaker: 'Herr Okafor', text: 'Guten Morgen, Frau Behrens. Wie geht es Ihnen?' },
            { speaker: 'Frau Behrens', text: 'Danke, sehr gut. Und Ihnen?' },
            { speaker: 'Herr Okafor', text: 'Auch gut, danke.' },
          ],
        },
        {
          id: 'k1-dlg2',
          type: 'DIALOGUE',
          title: 'In der Sprachschule – zwei Kursteilnehmer',
          lines: [
            { speaker: 'Mira', text: 'Hallo, Jonas! Wie geht’s?' },
            { speaker: 'Jonas', text: 'Hi, Mira. Gut, danke. Und dir?' },
            { speaker: 'Mira', text: 'Auch gut. Bis später!' },
            { speaker: 'Jonas', text: 'Tschüss!' },
          ],
        },
        {
          id: 'k1-info-duSie',
          type: 'INFO',
          variant: 'IMPORTANT',
          title: 'du oder Sie?',
          text: 'Im Deutschen gibt es zwei Anredeformen. „Sie" ist förmlich: für fremde Personen, im Beruf und bei Behörden. „du" ist vertraut: für Familie, Freunde und oft unter jungen Leuten. Zu „Sie" gehört „Wie geht es Ihnen?", zu „du" gehört „Wie geht es dir?".',
        },
        {
          id: 'k1-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: Begrüßung und Verabschiedung',
          items: [
            { term: 'Guten Morgen', translation: 'good morning', example: 'Guten Morgen, Frau Behrens!' },
            { term: 'Guten Tag', translation: 'hello / good day', example: 'Guten Tag, Herr Okafor!' },
            { term: 'Guten Abend', translation: 'good evening' },
            { term: 'Hallo', translation: 'hi / hello', example: 'Hallo, Jonas!' },
            { term: 'Auf Wiedersehen', translation: 'goodbye (formal)' },
            { term: 'Tschüss', translation: 'bye (informal)' },
            { term: 'Bis später', translation: 'see you later' },
            { term: 'Wie geht es Ihnen?', translation: 'how are you? (formal)' },
            { term: 'Wie geht’s?', translation: 'how are you? (informal)' },
            { term: 'danke', translation: 'thank you' },
          ],
        },
        {
          id: 'k1-info-tageszeit',
          type: 'INFO',
          variant: 'TIP',
          title: 'Welche Begrüßung wann?',
          text: 'Die Tageszeit entscheidet, welche förmliche Begrüßung passt.',
          table: {
            headers: ['Zeit', 'Begrüßung'],
            rows: [
              ['bis ca. 11 Uhr', 'Guten Morgen'],
              ['ca. 11 bis 18 Uhr', 'Guten Tag'],
              ['ab ca. 18 Uhr', 'Guten Abend'],
              ['jederzeit, informell', 'Hallo'],
            ],
          },
        },
      ],
    },
  },

  // ============================================================ KURSBUCH 2
  {
    section: UnitSection.KURSBUCH,
    order: 2,
    title: 'Ich heiße …',
    subtitle: 'Sich vorstellen, Verben im Präsens',
    estimatedMinutes: 15,
    content: {
      version: v,
      blocks: [
        { id: 'k2-h1', type: 'HEADING', level: 1, text: 'Ich heiße …' },
        {
          id: 'k2-intro',
          type: 'TEXT',
          text: 'Beim ersten Treffen nennt man seinen Namen. Achten Sie darauf, wie die Personen fragen und antworten.',
        },
        {
          id: 'k2-dlg',
          type: 'DIALOGUE',
          title: 'Am ersten Kurstag',
          lines: [
            { speaker: 'Lehrerin', text: 'Guten Tag! Ich heiße Anna Weber. Und wie heißen Sie?' },
            { speaker: 'Teilnehmer', text: 'Ich heiße Samir Haddad.' },
            { speaker: 'Lehrerin', text: 'Freut mich, Herr Haddad. Wie schreibt man das?' },
            { speaker: 'Teilnehmer', text: 'H-A-D-D-A-D.' },
            { speaker: 'Lehrerin', text: 'Danke. Und wer sind Sie?' },
            { speaker: 'Teilnehmerin', text: 'Mein Name ist Elif Yildiz.' },
          ],
        },
        {
          id: 'k2-grammar-verben',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Verben im Präsens: Endungen',
          text: 'Das Verb bekommt eine Endung, die zur Person passt. „sein" ist unregelmäßig und muss auswendig gelernt werden.',
          table: {
            headers: ['Person', 'heißen', 'kommen', 'sein'],
            rows: [
              ['ich', 'heiße', 'komme', 'bin'],
              ['du', 'heißt', 'kommst', 'bist'],
              ['er / sie / es', 'heißt', 'kommt', 'ist'],
              ['wir', 'heißen', 'kommen', 'sind'],
              ['ihr', 'heißt', 'kommt', 'seid'],
              ['sie / Sie', 'heißen', 'kommen', 'sind'],
            ],
          },
        },
        {
          id: 'k2-grammar-wfragen',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'W-Fragen: Das Verb steht auf Position 2',
          text: 'Bei einer Frage mit einem W-Wort steht das Fragewort zuerst, direkt danach das Verb.',
          table: {
            headers: ['Position 1', 'Position 2', 'Rest'],
            rows: [
              ['Wie', 'heißen', 'Sie?'],
              ['Woher', 'kommen', 'Sie?'],
              ['Wer', 'ist', 'das?'],
              ['Wo', 'wohnen', 'Sie?'],
            ],
          },
        },
        {
          id: 'k2-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: Sich vorstellen',
          items: [
            { term: 'heißen', translation: 'to be called', example: 'Ich heiße Samir.' },
            { term: 'der Name', translation: 'name', article: 'der', plural: 'die Namen', example: 'Mein Name ist Elif.' },
            { term: 'Freut mich.', translation: 'nice to meet you' },
            { term: 'buchstabieren', translation: 'to spell' },
            { term: 'wer', translation: 'who' },
            { term: 'wie', translation: 'how' },
            { term: 'woher', translation: 'where from' },
            { term: 'wo', translation: 'where' },
          ],
        },
      ],
    },
  },

  // ============================================================ KURSBUCH 3
  {
    section: UnitSection.KURSBUCH,
    order: 3,
    title: 'Woher kommen Sie?',
    subtitle: 'Herkunft und Wohnort',
    estimatedMinutes: 15,
    content: {
      version: v,
      blocks: [
        { id: 'k3-h1', type: 'HEADING', level: 1, text: 'Woher kommen Sie?' },
        {
          id: 'k3-dlg',
          type: 'DIALOGUE',
          title: 'In der Pause',
          lines: [
            { speaker: 'Samir', text: 'Woher kommen Sie, Frau Yildiz?' },
            { speaker: 'Elif', text: 'Ich komme aus der Türkei, aus Izmir. Und Sie?' },
            { speaker: 'Samir', text: 'Ich komme aus dem Libanon. Aber ich wohne jetzt in Leipzig.' },
            { speaker: 'Elif', text: 'Ach, interessant! Ich wohne auch in Leipzig.' },
          ],
        },
        {
          id: 'k3-grammar-aus',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'kommen aus – wohnen in',
          text: 'Die Herkunft steht mit „aus", der Wohnort mit „in". Die meisten Länder brauchen keinen Artikel. Einige aber schon – die muss man mitlernen.',
          table: {
            headers: ['Land', 'Herkunft', 'Wohnort'],
            rows: [
              ['Polen (ohne Artikel)', 'Ich komme aus Polen.', 'Ich wohne in Polen.'],
              ['Japan (ohne Artikel)', 'Ich komme aus Japan.', 'Ich wohne in Japan.'],
              ['die Türkei', 'Ich komme aus der Türkei.', 'Ich wohne in der Türkei.'],
              ['der Libanon', 'Ich komme aus dem Libanon.', 'Ich wohne im Libanon.'],
              ['die Schweiz', 'Ich komme aus der Schweiz.', 'Ich wohne in der Schweiz.'],
            ],
          },
        },
        {
          id: 'k3-vocab',
          type: 'VOCAB_LIST',
          title: 'Wortschatz: Länder und Sprachen',
          items: [
            { term: 'Deutschland', translation: 'Germany', example: 'Ich wohne in Deutschland.' },
            { term: 'Österreich', translation: 'Austria' },
            { term: 'die Schweiz', translation: 'Switzerland', article: 'die' },
            { term: 'die Türkei', translation: 'Turkey', article: 'die' },
            { term: 'Polen', translation: 'Poland' },
            { term: 'Brasilien', translation: 'Brazil' },
            { term: 'die Ukraine', translation: 'Ukraine', article: 'die' },
            { term: 'wohnen', translation: 'to live / reside', example: 'Ich wohne in Leipzig.' },
            { term: 'kommen', translation: 'to come', example: 'Ich komme aus Polen.' },
            { term: 'die Sprache', translation: 'language', article: 'die', plural: 'die Sprachen' },
          ],
        },
        {
          id: 'k3-info-sprachen',
          type: 'INFO',
          variant: 'CULTURE',
          title: 'Deutsch spricht man nicht nur in Deutschland',
          text: 'Deutsch ist Amtssprache in Deutschland, Österreich, der Schweiz, Liechtenstein und Luxemburg – und wird auch in Teilen Belgiens und Italiens (Südtirol) gesprochen. Die Aussprache unterscheidet sich dabei deutlich.',
        },
      ],
    },
  },

  // ============================================================ KURSBUCH 4
  {
    section: UnitSection.KURSBUCH,
    order: 4,
    title: 'Alphabet und Zahlen',
    subtitle: 'Buchstabieren und zählen von 0 bis 20',
    estimatedMinutes: 12,
    content: {
      version: v,
      blocks: [
        { id: 'k4-h1', type: 'HEADING', level: 1, text: 'Das Alphabet und die Zahlen' },
        {
          id: 'k4-intro',
          type: 'TEXT',
          text: 'Namen werden oft buchstabiert – am Telefon, beim Arzt, bei der Anmeldung. Dafür brauchen Sie das Alphabet.',
        },
        {
          id: 'k4-info-alphabet',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Besondere Buchstaben',
          text: 'Vier Zeichen kennt nur das Deutsche. Beim Buchstabieren nennt man sie so:',
          table: {
            headers: ['Zeichen', 'Man sagt', 'Beispiel'],
            rows: [
              ['Ä ä', 'A-Umlaut', 'Käse'],
              ['Ö ö', 'O-Umlaut', 'schön'],
              ['Ü ü', 'U-Umlaut', 'für'],
              ['ß', 'Eszett / scharfes S', 'heißen'],
            ],
          },
        },
        {
          id: 'k4-dlg',
          type: 'DIALOGUE',
          title: 'Am Telefon',
          lines: [
            { speaker: 'Mitarbeiterin', text: 'Wie ist Ihr Name, bitte?' },
            { speaker: 'Anrufer', text: 'Mein Name ist Bäcker.' },
            { speaker: 'Mitarbeiterin', text: 'Können Sie das buchstabieren?' },
            { speaker: 'Anrufer', text: 'Ja: B – A-Umlaut – C – K – E – R.' },
            { speaker: 'Mitarbeiterin', text: 'Danke. Und Ihre Telefonnummer?' },
            { speaker: 'Anrufer', text: 'Null – eins – sieben – drei – zwölf – neunzehn.' },
          ],
        },
        {
          id: 'k4-info-zahlen',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Die Zahlen von 0 bis 20',
          text: 'Von 13 bis 19 hängt man einfach „-zehn" an. Ausnahmen sind 16 und 17: Dort fällt ein Laut weg (sechzehn, siebzehn).',
          table: {
            headers: ['Zahl', 'Wort', 'Zahl', 'Wort'],
            rows: [
              ['0', 'null', '11', 'elf'],
              ['1', 'eins', '12', 'zwölf'],
              ['2', 'zwei', '13', 'dreizehn'],
              ['3', 'drei', '14', 'vierzehn'],
              ['4', 'vier', '15', 'fünfzehn'],
              ['5', 'fünf', '16', 'sechzehn'],
              ['6', 'sechs', '17', 'siebzehn'],
              ['7', 'sieben', '18', 'achtzehn'],
              ['8', 'acht', '19', 'neunzehn'],
              ['9', 'neun', '20', 'zwanzig'],
              ['10', 'zehn', '', ''],
            ],
          },
        },
      ],
    },
  },

  // ========================================================= ARBEITSBUCH 1
  {
    section: UnitSection.ARBEITSBUCH,
    order: 1,
    title: 'Übungen: Begrüßen',
    subtitle: 'Zu Kursbuch 1',
    estimatedMinutes: 10,
    content: {
      version: v,
      blocks: [
        { id: 'a1-h1', type: 'HEADING', level: 1, text: 'Begrüßen und verabschieden' },
        {
          id: 'a1-match',
          type: 'MATCHING',
          instruction: 'Ordnen Sie zu: Was passt zusammen?',
          left: [
            { id: 'l1', text: 'Guten Morgen!' },
            { id: 'l2', text: 'Wie geht es Ihnen?' },
            { id: 'l3', text: 'Auf Wiedersehen!' },
            { id: 'l4', text: 'Wie geht’s?' },
          ],
          right: [
            { id: 'r1', text: 'Guten Morgen!' },
            { id: 'r2', text: 'Danke, sehr gut. Und Ihnen?' },
            { id: 'r3', text: 'Auf Wiedersehen!' },
            { id: 'r4', text: 'Gut, danke. Und dir?' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'a1-choice-formell',
          type: 'CHOICE',
          instruction: 'Sie sprechen mit Ihrer Chefin. Welche Frage ist richtig?',
          multiple: false,
          options: [
            { id: 'o1', text: 'Wie geht’s dir?' },
            { id: 'o2', text: 'Wie geht es Ihnen?' },
            { id: 'o3', text: 'Wie geht es du?' },
          ],
          solution: ['o2'],
          explanation:
            'Zur Chefin sagt man „Sie". Zu „Sie" gehört die Form „Ihnen": Wie geht es Ihnen?',
        },
        {
          id: 'a1-choice-zeit',
          type: 'CHOICE',
          instruction: 'Es ist 19 Uhr. Welche Begrüßungen passen? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'z1', text: 'Guten Abend!' },
            { id: 'z2', text: 'Guten Morgen!' },
            { id: 'z3', text: 'Hallo!' },
            { id: 'z4', text: 'Gute Nacht!' },
          ],
          solution: ['z1', 'z3'],
          explanation:
            'Ab etwa 18 Uhr sagt man „Guten Abend". „Hallo" geht immer, wenn man sich duzt. „Gute Nacht" sagt man nur beim Schlafengehen.',
        },
        {
          id: 'a1-cloze',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie den Dialog. Die Wörter im Kasten helfen.',
          wordBank: ['Guten', 'geht', 'danke', 'Tschüss'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '▸ ' },
            { kind: 'GAP', gapId: 'g1', solution: ['Guten'], width: 8 },
            { kind: 'TEXT', text: ' Tag, Frau Weber! Wie ' },
            { kind: 'GAP', gapId: 'g2', solution: ['geht'], width: 6 },
            { kind: 'TEXT', text: ' es Ihnen?\n▸ Sehr gut, ' },
            { kind: 'GAP', gapId: 'g3', solution: ['danke'], width: 7 },
            { kind: 'TEXT', text: '. Bis morgen!\n▸ ' },
            { kind: 'GAP', gapId: 'g4', solution: ['Tschüss', 'Tschüs'], width: 9 },
            { kind: 'TEXT', text: '!' },
          ],
        },
      ],
    },
  },

  // ========================================================= ARBEITSBUCH 2
  {
    section: UnitSection.ARBEITSBUCH,
    order: 2,
    title: 'Übungen: Sich vorstellen',
    subtitle: 'Zu Kursbuch 2',
    estimatedMinutes: 12,
    content: {
      version: v,
      blocks: [
        { id: 'a2-h1', type: 'HEADING', level: 1, text: 'Name und Verbformen' },
        {
          id: 'a2-cloze-konj',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie die richtige Verbform.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Ich ' },
            { kind: 'GAP', gapId: 'v1', solution: ['heiße'], hint: 'heißen', width: 7 },
            { kind: 'TEXT', text: ' Mira.\n2. Wie ' },
            { kind: 'GAP', gapId: 'v2', solution: ['heißen'], hint: 'heißen', width: 7 },
            { kind: 'TEXT', text: ' Sie?\n3. Er ' },
            { kind: 'GAP', gapId: 'v3', solution: ['kommt'], hint: 'kommen', width: 7 },
            { kind: 'TEXT', text: ' aus Polen.\n4. Wir ' },
            { kind: 'GAP', gapId: 'v4', solution: ['sind'], hint: 'sein', width: 6 },
            { kind: 'TEXT', text: ' im Kurs.\n5. Du ' },
            { kind: 'GAP', gapId: 'v5', solution: ['bist'], hint: 'sein', width: 6 },
            { kind: 'TEXT', text: ' aus Brasilien.' },
          ],
        },
        {
          id: 'a2-order-1',
          type: 'ORDERING',
          instruction: 'Bringen Sie die Wörter in die richtige Reihenfolge.',
          items: [
            { id: 'w1', text: 'Wie' },
            { id: 'w2', text: 'heißen' },
            { id: 'w3', text: 'Sie' },
            { id: 'w4', text: '?' },
          ],
          solution: ['w1', 'w2', 'w3', 'w4'],
        },
        {
          id: 'a2-order-2',
          type: 'ORDERING',
          instruction: 'Bilden Sie einen Satz.',
          items: [
            { id: 'x1', text: 'Mein' },
            { id: 'x2', text: 'Name' },
            { id: 'x3', text: 'ist' },
            { id: 'x4', text: 'Elif' },
            { id: 'x5', text: 'Yildiz.' },
          ],
          solution: ['x1', 'x2', 'x3', 'x4', 'x5'],
        },
        {
          id: 'a2-choice-wfrage',
          type: 'CHOICE',
          instruction: 'Welches Fragewort passt? „___ ist das?" – „Das ist Herr Okafor."',
          multiple: false,
          options: [
            { id: 'f1', text: 'Wie' },
            { id: 'f2', text: 'Wo' },
            { id: 'f3', text: 'Wer' },
            { id: 'f4', text: 'Woher' },
          ],
          solution: ['f3'],
          explanation: 'Nach einer Person fragt man mit „wer". „wie" fragt nach der Art, „wo" nach dem Ort, „woher" nach der Herkunft.',
        },
      ],
    },
  },

  // ========================================================= ARBEITSBUCH 3
  {
    section: UnitSection.ARBEITSBUCH,
    order: 3,
    title: 'Übungen: Herkunft',
    subtitle: 'Zu Kursbuch 3',
    estimatedMinutes: 12,
    content: {
      version: v,
      blocks: [
        { id: 'a3-h1', type: 'HEADING', level: 1, text: 'Woher? Wo?' },
        {
          id: 'a3-match-land',
          type: 'MATCHING',
          instruction: 'Ordnen Sie Stadt und Land zu.',
          left: [
            { id: 'c1', text: 'Wien' },
            { id: 'c2', text: 'Zürich' },
            { id: 'c3', text: 'Izmir' },
            { id: 'c4', text: 'Warschau' },
          ],
          right: [
            { id: 'n1', text: 'Österreich' },
            { id: 'n2', text: 'die Schweiz' },
            { id: 'n3', text: 'die Türkei' },
            { id: 'n4', text: 'Polen' },
          ],
          solution: [
            { leftId: 'c1', rightId: 'n1' },
            { leftId: 'c2', rightId: 'n2' },
            { leftId: 'c3', rightId: 'n3' },
            { leftId: 'c4', rightId: 'n4' },
          ],
        },
        {
          id: 'a3-cloze-praep',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie: aus, in, aus der oder in der.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '1. Ich komme ' },
            { kind: 'GAP', gapId: 'p1', solution: ['aus'], width: 4 },
            { kind: 'TEXT', text: ' Brasilien.\n2. Elif kommt ' },
            { kind: 'GAP', gapId: 'p2', solution: ['aus der'], width: 8 },
            { kind: 'TEXT', text: ' Türkei.\n3. Wir wohnen ' },
            { kind: 'GAP', gapId: 'p3', solution: ['in'], width: 4 },
            { kind: 'TEXT', text: ' Leipzig.\n4. Sie arbeitet ' },
            { kind: 'GAP', gapId: 'p4', solution: ['in der'], width: 7 },
            { kind: 'TEXT', text: ' Schweiz.' },
          ],
        },
        {
          id: 'a3-choice-artikel',
          type: 'CHOICE',
          instruction: 'Welche Länder brauchen einen Artikel? (Mehrfachauswahl)',
          multiple: true,
          options: [
            { id: 'a-1', text: 'Türkei' },
            { id: 'a-2', text: 'Japan' },
            { id: 'a-3', text: 'Schweiz' },
            { id: 'a-4', text: 'Polen' },
            { id: 'a-5', text: 'Ukraine' },
          ],
          solution: ['a-1', 'a-3', 'a-5'],
          explanation:
            'Die meisten Länder stehen ohne Artikel. Ausnahmen sind unter anderem die Türkei, die Schweiz, die Ukraine und der Libanon – diese lernt man einzeln mit.',
        },
      ],
    },
  },

  // ========================================================= ARBEITSBUCH 4
  {
    section: UnitSection.ARBEITSBUCH,
    order: 4,
    title: 'Übungen: Alphabet und Zahlen',
    subtitle: 'Zu Kursbuch 4',
    estimatedMinutes: 10,
    content: {
      version: v,
      blocks: [
        { id: 'a4-h1', type: 'HEADING', level: 1, text: 'Buchstabieren und zählen' },
        {
          id: 'a4-cloze-zahlen',
          type: 'CLOZE',
          instruction: 'Schreiben Sie die Zahl als Wort.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '3 = ' },
            { kind: 'GAP', gapId: 'n1', solution: ['drei'], width: 8 },
            { kind: 'TEXT', text: '\n12 = ' },
            { kind: 'GAP', gapId: 'n2', solution: ['zwölf', 'zwoelf'], width: 8 },
            { kind: 'TEXT', text: '\n16 = ' },
            { kind: 'GAP', gapId: 'n3', solution: ['sechzehn'], width: 10 },
            { kind: 'TEXT', text: '\n20 = ' },
            { kind: 'GAP', gapId: 'n4', solution: ['zwanzig'], width: 9 },
          ],
        },
        {
          id: 'a4-choice-umlaut',
          type: 'CHOICE',
          instruction: 'Wie buchstabiert man „ö"?',
          multiple: false,
          options: [
            { id: 'u1', text: 'O-Umlaut' },
            { id: 'u2', text: 'O-Strich' },
            { id: 'u3', text: 'Doppel-O' },
          ],
          solution: ['u1'],
          explanation: 'Ä, Ö und Ü heißen beim Buchstabieren A-Umlaut, O-Umlaut und U-Umlaut. ß heißt Eszett.',
        },
        {
          id: 'a4-order-zahlen',
          type: 'ORDERING',
          instruction: 'Sortieren Sie die Zahlen von klein nach groß.',
          items: [
            { id: 'q1', text: 'sieben' },
            { id: 'q2', text: 'elf' },
            { id: 'q3', text: 'vierzehn' },
            { id: 'q4', text: 'neunzehn' },
          ],
          solution: ['q1', 'q2', 'q3', 'q4'],
        },
      ],
    },
  },

  // ========================================================= ARBEITSBUCH 5
  {
    section: UnitSection.ARBEITSBUCH,
    order: 5,
    title: 'Kannst du das schon?',
    subtitle: 'Abschluss des Kapitels',
    estimatedMinutes: 15,
    content: {
      version: v,
      blocks: [
        { id: 'a5-h1', type: 'HEADING', level: 1, text: 'Kannst du das schon?' },
        {
          id: 'a5-intro',
          type: 'TEXT',
          text: 'Prüfen Sie, was Sie aus Kapitel 1 mitnehmen. Am Ende schreiben Sie eine kurze Vorstellung.',
        },
        {
          id: 'a5-cloze-dialog',
          type: 'CLOZE',
          instruction: 'Ergänzen Sie das ganze Gespräch.',
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '▸ Guten Tag! Wie ' },
            { kind: 'GAP', gapId: 'd1', solution: ['heißen'], width: 7 },
            { kind: 'TEXT', text: ' Sie?\n▸ Ich ' },
            { kind: 'GAP', gapId: 'd2', solution: ['heiße'], width: 7 },
            { kind: 'TEXT', text: ' Nadia Salem.\n▸ Und ' },
            { kind: 'GAP', gapId: 'd3', solution: ['woher'], width: 7 },
            { kind: 'TEXT', text: ' kommen Sie?\n▸ Ich komme ' },
            { kind: 'GAP', gapId: 'd4', solution: ['aus'], width: 5 },
            { kind: 'TEXT', text: ' Marokko. Ich ' },
            { kind: 'GAP', gapId: 'd5', solution: ['wohne'], width: 7 },
            { kind: 'TEXT', text: ' jetzt in Hamburg.' },
          ],
        },
        {
          id: 'a5-match-mixed',
          type: 'MATCHING',
          instruction: 'Ordnen Sie Frage und Antwort zu.',
          left: [
            { id: 'm1', text: 'Wie heißen Sie?' },
            { id: 'm2', text: 'Woher kommen Sie?' },
            { id: 'm3', text: 'Wo wohnen Sie?' },
            { id: 'm4', text: 'Wie geht es Ihnen?' },
          ],
          right: [
            { id: 'y1', text: 'Mein Name ist Nadia Salem.' },
            { id: 'y2', text: 'Aus Marokko.' },
            { id: 'y3', text: 'In Hamburg.' },
            { id: 'y4', text: 'Danke, sehr gut.' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'y1' },
            { leftId: 'm2', rightId: 'y2' },
            { leftId: 'm3', rightId: 'y3' },
            { leftId: 'm4', rightId: 'y4' },
          ],
        },
        {
          id: 'a5-writing',
          type: 'WRITING',
          instruction: 'Stellen Sie sich vor.',
          prompt:
            'Schreiben Sie drei bis fünf Sätze: Wie heißen Sie? Woher kommen Sie? Wo wohnen Sie? Nutzen Sie die Verben heißen, kommen und wohnen.',
          minWords: 15,
          maxWords: 80,
          aiFeedback: true,
          sampleAnswer:
            'Hallo! Ich heiße Nadia Salem. Ich komme aus Marokko, aus Casablanca. Jetzt wohne ich in Hamburg. Ich lerne Deutsch. Freut mich!',
        },
      ],
    },
  },
];
