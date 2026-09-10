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
          id: 'k1-image',
          type: 'IMAGE',
          url: 'illustration:greeting-office',
          alt: 'Zwei Personen begrüßen sich morgens im Büro, eine Sprechblase mit drei Punkten schwebt zwischen ihnen.',
          caption: 'Ein Gruß am Morgen im Büro.',
        },
        {
          id: 'k1-intro',
          type: 'TEXT',
          text: 'Menschen begrüßen sich jeden Tag. Wie man das macht, hängt von der Tageszeit ab – und davon, wie gut man sich kennt. Hören und lesen Sie die beiden Gespräche.',
          translations: {
            en: 'People greet each other every day. How you do it depends on the time of day – and on how well you know each other. Listen to and read the two conversations.',
            es: 'La gente se saluda todos los días. Cómo se hace depende de la hora del día – y de cuánto se conocen. Escuche y lea las dos conversaciones.',
            fr: 'Les gens se saluent tous les jours. La façon de le faire dépend du moment de la journée – et du degré de familiarité. Écoutez et lisez les deux conversations.',
            it: 'Le persone si salutano ogni giorno. Il modo dipende dall’ora del giorno – e da quanto ci si conosce. Ascolti e legga i due dialoghi.',
          },
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
          translations: {
            en: {
              title: 'du or Sie?',
              text: 'German has two forms of address. „Sie" is formal: for strangers, at work and with authorities. „du" is informal: for family, friends and often among young people. „Sie" goes with „Wie geht es Ihnen?", „du" goes with „Wie geht es dir?".',
            },
            es: {
              title: '¿du o Sie?',
              text: 'En alemán hay dos formas de tratamiento. „Sie" es formal: para desconocidos, en el trabajo y con autoridades. „du" es informal: para la familia, los amigos y, a menudo, entre jóvenes. A „Sie" le corresponde „Wie geht es Ihnen?", a „du" le corresponde „Wie geht es dir?".',
            },
            fr: {
              title: 'du ou Sie ?',
              text: 'L’allemand connaît deux formes d’adresse. « Sie » est formelle : pour les inconnus, au travail et avec les autorités. « du » est familière : pour la famille, les amis et souvent entre jeunes. À « Sie » correspond « Wie geht es Ihnen? », à « du » correspond « Wie geht es dir? ».',
            },
            it: {
              title: 'du o Sie?',
              text: 'Il tedesco ha due forme di cortesia. „Sie" è formale: per gli sconosciuti, sul lavoro e con le autorità. „du" è informale: per la famiglia, gli amici e spesso tra i giovani. A „Sie" corrisponde „Wie geht es Ihnen?", a „du" corrisponde „Wie geht es dir?".',
            },
          },
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
          translations: {
            en: { title: 'Which greeting, when?', text: 'The time of day decides which formal greeting fits.' },
            es: { title: '¿Qué saludo, a qué hora?', text: 'La hora del día determina qué saludo formal es el adecuado.' },
            fr: { title: 'Quelle salutation, à quelle heure ?', text: 'L’heure de la journée détermine quelle salutation formelle convient.' },
            it: { title: 'Quale saluto, a che ora?', text: 'L’ora del giorno determina quale saluto formale è adatto.' },
          },
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
        {
          id: 'k1-audio',
          type: 'AUDIO',
          title: 'Hören Sie: Vier Begrüßungen',
          audioUrl: 'placeholder://k1-greetings',
          durationSec: 22,
          transcript:
            'Guten Morgen! – Guten Tag! – Guten Abend! – Hallo!\nSprechen Sie die vier Begrüßungen laut nach. Achten Sie auf die Melodie: Die Stimme geht am Satzende leicht nach unten.',
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
          id: 'k2-image',
          type: 'IMAGE',
          url: 'illustration:introduction',
          alt: 'Zwei Namensschilder auf einem Tisch, darüber eine Sprechblase mit einem Fragezeichen.',
          caption: 'Sich mit Namen vorstellen.',
        },
        {
          id: 'k2-intro',
          type: 'TEXT',
          text: 'Beim ersten Treffen nennt man seinen Namen. Achten Sie darauf, wie die Personen fragen und antworten.',
          translations: {
            en: 'When meeting for the first time, you say your name. Pay attention to how the people ask and answer.',
            es: 'Al conocerse por primera vez, se dice el nombre. Fíjese en cómo las personas preguntan y responden.',
            fr: 'Lors d’une première rencontre, on dit son nom. Observez comment les personnes posent leurs questions et y répondent.',
            it: 'Al primo incontro si dice il proprio nome. Faccia attenzione a come le persone chiedono e rispondono.',
          },
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
          translations: {
            en: {
              title: 'Present tense verbs: endings',
              text: 'The verb takes an ending that matches the person. „sein" (to be) is irregular and has to be learned by heart.',
            },
            es: {
              title: 'Verbos en presente: terminaciones',
              text: 'El verbo lleva una terminación que corresponde a la persona. „sein" (ser/estar) es irregular y hay que aprenderlo de memoria.',
            },
            fr: {
              title: 'Verbes au présent : les terminaisons',
              text: 'Le verbe prend une terminaison qui correspond à la personne. « sein » (être) est irrégulier et doit être appris par cœur.',
            },
            it: {
              title: 'Verbi al presente: le desinenze',
              text: 'Il verbo prende una desinenza che corrisponde alla persona. „sein" (essere) è irregolare e va imparato a memoria.',
            },
          },
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
          translations: {
            en: {
              title: 'W-questions: the verb is in position 2',
              text: 'In a question with a W-word, the question word comes first, immediately followed by the verb.',
            },
            es: {
              title: 'Preguntas con interrogativos W: el verbo va en la posición 2',
              text: 'En una pregunta con una palabra interrogativa (W), esta va primero, y justo después el verbo.',
            },
            fr: {
              title: 'Questions en W : le verbe est en position 2',
              text: 'Dans une question avec un mot interrogatif en W, ce mot vient en premier, immédiatement suivi du verbe.',
            },
            it: {
              title: 'Domande con le W: il verbo è in posizione 2',
              text: 'In una domanda con una parola interrogativa (W), questa viene per prima, subito seguita dal verbo.',
            },
          },
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
          id: 'k3-image',
          type: 'IMAGE',
          url: 'illustration:world-map',
          alt: 'Eine stilisierte Landkarte mit vier Orten aus dem Kurs und gestrichelten Linien nach Leipzig.',
          caption: 'Von überall nach Leipzig.',
        },
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
          translations: {
            en: {
              title: 'kommen aus (to come from) – wohnen in (to live in)',
              text: 'Origin is expressed with „aus", the place of residence with „in". Most countries need no article. But some do – those have to be learned individually.',
            },
            es: {
              title: 'kommen aus (venir de) – wohnen in (vivir en)',
              text: 'El origen se expresa con „aus", el lugar de residencia con „in". La mayoría de los países no llevan artículo. Pero algunos sí – esos hay que aprenderlos aparte.',
            },
            fr: {
              title: 'kommen aus (venir de) – wohnen in (habiter à)',
              text: 'L’origine s’exprime avec « aus », le lieu de résidence avec « in ». La plupart des pays n’ont pas d’article. Mais certains en ont un – il faut les apprendre à part.',
            },
            it: {
              title: 'kommen aus (venire da) – wohnen in (abitare a)',
              text: 'La provenienza si esprime con „aus", il luogo di residenza con „in". La maggior parte dei paesi non ha l’articolo. Alcuni però sì – vanno imparati singolarmente.',
            },
          },
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
          translations: {
            en: {
              title: 'German isn’t spoken only in Germany',
              text: 'German is an official language in Germany, Austria, Switzerland, Liechtenstein and Luxembourg – and is also spoken in parts of Belgium and Italy (South Tyrol). Pronunciation differs quite a bit between them.',
            },
            es: {
              title: 'El alemán no se habla solo en Alemania',
              text: 'El alemán es lengua oficial en Alemania, Austria, Suiza, Liechtenstein y Luxemburgo – y también se habla en partes de Bélgica e Italia (Tirol del Sur). La pronunciación varía bastante entre ellas.',
            },
            fr: {
              title: 'L’allemand ne se parle pas seulement en Allemagne',
              text: 'L’allemand est langue officielle en Allemagne, en Autriche, en Suisse, au Liechtenstein et au Luxembourg – et il est aussi parlé dans certaines régions de Belgique et d’Italie (Tyrol du Sud). La prononciation y diffère nettement.',
            },
            it: {
              title: 'Il tedesco non si parla solo in Germania',
              text: 'Il tedesco è lingua ufficiale in Germania, Austria, Svizzera, Liechtenstein e Lussemburgo – ed è parlato anche in alcune zone del Belgio e dell’Italia (Alto Adige). La pronuncia varia parecchio tra queste zone.',
            },
          },
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
          id: 'k4-image',
          type: 'IMAGE',
          url: 'illustration:alphabet-numbers',
          alt: 'Eine Tafel mit Buchstabenkärtchen und Zahlenpunkten, daneben ein Telefonhörer.',
          caption: 'Buchstaben und Zahlen an der Tafel.',
        },
        {
          id: 'k4-intro',
          type: 'TEXT',
          text: 'Namen werden oft buchstabiert – am Telefon, beim Arzt, bei der Anmeldung. Dafür brauchen Sie das Alphabet.',
          translations: {
            en: 'Names are often spelled out – on the phone, at the doctor’s, when registering. For that you need the alphabet.',
            es: 'Los nombres a menudo se deletrean – por teléfono, en el médico, al inscribirse. Para eso necesita el alfabeto.',
            fr: 'On épelle souvent son nom – au téléphone, chez le médecin, lors d’une inscription. Pour cela, vous avez besoin de l’alphabet.',
            it: 'I nomi vengono spesso fatti con lo spelling – al telefono, dal medico, all’iscrizione. Per questo serve l’alfabeto.',
          },
        },
        {
          id: 'k4-info-alphabet',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Besondere Buchstaben',
          text: 'Vier Zeichen kennt nur das Deutsche. Beim Buchstabieren nennt man sie so:',
          translations: {
            en: { title: 'Special letters', text: 'German alone has four special characters. When spelling them out, you say:' },
            es: { title: 'Letras especiales', text: 'Solo el alemán tiene cuatro caracteres especiales. Al deletrear, se dicen así:' },
            fr: { title: 'Lettres spéciales', text: 'L’allemand est la seule langue à connaître ces quatre signes. Pour les épeler, on les nomme ainsi :' },
            it: { title: 'Lettere speciali', text: 'Solo il tedesco conosce questi quattro segni. Quando si fa lo spelling, si dicono così:' },
          },
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
          translations: {
            en: {
              title: 'The numbers from 0 to 20',
              text: 'From 13 to 19 you simply add „-zehn". The exceptions are 16 and 17: there a sound is dropped (sechzehn, siebzehn).',
            },
            es: {
              title: 'Los números del 0 al 20',
              text: 'Del 13 al 19 basta con añadir „-zehn". Las excepciones son el 16 y el 17: ahí se pierde un sonido (sechzehn, siebzehn).',
            },
            fr: {
              title: 'Les nombres de 0 à 20',
              text: 'De 13 à 19, il suffit d’ajouter « -zehn ». Les exceptions sont 16 et 17 : un son y disparaît (sechzehn, siebzehn).',
            },
            it: {
              title: 'I numeri da 0 a 20',
              text: 'Da 13 a 19 si aggiunge semplicemente „-zehn". Le eccezioni sono 16 e 17: lì cade un suono (sechzehn, siebzehn).',
            },
          },
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
        {
          id: 'k4-audio',
          type: 'AUDIO',
          title: 'Hören Sie: Die Zahlen von 0 bis 20',
          audioUrl: 'placeholder://k4-numbers',
          durationSec: 35,
          transcript:
            'null, eins, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn, elf, zwölf, dreizehn, vierzehn, fünfzehn, sechzehn, siebzehn, achtzehn, neunzehn, zwanzig.\nHören Sie zweimal: erst normal, dann langsam. Sprechen Sie beim zweiten Mal mit.',
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
          explanationTranslations: {
            en: 'You say „Sie" to your boss. „Sie" goes with the form „Ihnen": Wie geht es Ihnen?',
            es: 'A la jefa se le habla de „Sie". A „Sie" le corresponde la forma „Ihnen": Wie geht es Ihnen?',
            fr: 'On dit « Sie » à sa cheffe. À « Sie » correspond la forme « Ihnen » : Wie geht es Ihnen?',
            it: 'Alla propria capa si dà del „Sie". A „Sie" corrisponde la forma „Ihnen": Wie geht es Ihnen?',
          },
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
          explanationTranslations: {
            en: 'From about 6 pm you say „Guten Abend". „Hallo" always works if you’re on du-terms. „Gute Nacht" is only said when going to bed.',
            es: 'A partir de las 18 h aprox. se dice „Guten Abend". „Hallo" vale siempre si se tutea. „Gute Nacht" solo se dice al irse a dormir.',
            fr: 'À partir d’environ 18 h, on dit « Guten Abend ». « Hallo » convient toujours si l’on se tutoie. « Gute Nacht » ne se dit qu’au moment d’aller se coucher.',
            it: 'Da circa le 18 si dice „Guten Abend". „Hallo" va sempre bene se si usa il tu. „Gute Nacht" si dice solo quando si va a dormire.',
          },
        },
        {
          id: 'a1-order',
          type: 'ORDERING',
          instruction: 'Ziehen Sie die Wortkarten in die richtige Reihenfolge.',
          items: [
            { id: 'g1', text: 'Guten' },
            { id: 'g2', text: 'Abend,' },
            { id: 'g3', text: 'Frau' },
            { id: 'g4', text: 'Weber!' },
          ],
          solution: ['g1', 'g2', 'g3', 'g4'],
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
          id: 'a2-match-wfragen',
          type: 'MATCHING',
          instruction: 'Verbinden Sie Fragewort und Bedeutung.',
          left: [
            { id: 'wf1', text: 'Wer' },
            { id: 'wf2', text: 'Wie' },
            { id: 'wf3', text: 'Woher' },
            { id: 'wf4', text: 'Wo' },
          ],
          right: [
            { id: 'wb1', text: 'fragt nach einer Person' },
            { id: 'wb2', text: 'fragt nach der Art oder dem Namen' },
            { id: 'wb3', text: 'fragt nach der Herkunft' },
            { id: 'wb4', text: 'fragt nach dem Ort' },
          ],
          solution: [
            { leftId: 'wf1', rightId: 'wb1' },
            { leftId: 'wf2', rightId: 'wb2' },
            { leftId: 'wf3', rightId: 'wb3' },
            { leftId: 'wf4', rightId: 'wb4' },
          ],
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
          explanationTranslations: {
            en: 'You ask about a person with „wer". „wie" asks about how something is, „wo" about the place, „woher" about origin.',
            es: 'Por una persona se pregunta con „wer". „wie" pregunta por el modo, „wo" por el lugar, „woher" por el origen.',
            fr: 'On demande une personne avec « wer ». « wie » interroge sur la manière, « wo » sur le lieu, « woher » sur l’origine.',
            it: 'Per una persona si chiede con „wer". „wie" chiede il modo, „wo" il luogo, „woher" la provenienza.',
          },
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
          id: 'a3-order',
          type: 'ORDERING',
          instruction: 'Ziehen Sie die Wortkarten in die richtige Reihenfolge.',
          items: [
            { id: 's1', text: 'Ich' },
            { id: 's2', text: 'wohne' },
            { id: 's3', text: 'in' },
            { id: 's4', text: 'Leipzig.' },
          ],
          solution: ['s1', 's2', 's3', 's4'],
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
          explanationTranslations: {
            en: 'Most countries have no article. Exceptions include die Türkei, die Schweiz, die Ukraine and der Libanon – these have to be learned individually.',
            es: 'La mayoría de los países no llevan artículo. Son excepción, entre otros, die Türkei, die Schweiz, die Ukraine y der Libanon – hay que aprenderlos aparte.',
            fr: 'La plupart des pays n’ont pas d’article. Font exception, entre autres, die Türkei, die Schweiz, die Ukraine et der Libanon – à apprendre à part.',
            it: 'La maggior parte dei paesi non ha l’articolo. Fanno eccezione, tra gli altri, die Türkei, die Schweiz, die Ukraine e der Libanon – vanno imparati singolarmente.',
          },
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
          id: 'a4-match-zahlen',
          type: 'MATCHING',
          instruction: 'Verbinden Sie Ziffer und Wort.',
          left: [
            { id: 'z1', text: '7' },
            { id: 'z2', text: '13' },
            { id: 'z3', text: '18' },
            { id: 'z4', text: '20' },
          ],
          right: [
            { id: 'zw1', text: 'sieben' },
            { id: 'zw2', text: 'dreizehn' },
            { id: 'zw3', text: 'achtzehn' },
            { id: 'zw4', text: 'zwanzig' },
          ],
          solution: [
            { leftId: 'z1', rightId: 'zw1' },
            { leftId: 'z2', rightId: 'zw2' },
            { leftId: 'z3', rightId: 'zw3' },
            { leftId: 'z4', rightId: 'zw4' },
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
          explanationTranslations: {
            en: 'Ä, Ö and Ü are called A-Umlaut, O-Umlaut and U-Umlaut when spelling. ß is called Eszett.',
            es: 'Al deletrear, Ä, Ö y Ü se llaman A-Umlaut, O-Umlaut y U-Umlaut. ß se llama Eszett.',
            fr: 'En épelant, Ä, Ö et Ü se disent A-Umlaut, O-Umlaut et U-Umlaut. ß se dit Eszett.',
            it: 'Nello spelling, Ä, Ö e Ü si chiamano A-Umlaut, O-Umlaut e U-Umlaut. ß si chiama Eszett.',
          },
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
          translations: {
            en: 'Check what you take away from Chapter 1. At the end, you’ll write a short introduction of yourself.',
            es: 'Compruebe qué se lleva del Capítulo 1. Al final, escribirá una breve presentación de sí mismo.',
            fr: 'Vérifiez ce que vous retenez du chapitre 1. À la fin, vous rédigerez une courte présentation de vous-même.',
            it: 'Verifichi cosa porta a casa dal Capitolo 1. Alla fine scriverà una breve presentazione di sé.',
          },
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
