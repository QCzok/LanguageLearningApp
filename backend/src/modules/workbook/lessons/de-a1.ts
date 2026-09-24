import {
  BEGINNER as B,
  GRAMMAR as G,
  choice,
  cloze,
  culture,
  dialogue,
  grammar,
  lessons,
  match,
  order,
  text,
  tip,
  vocabBuilder,
} from './builders';

const words = vocabBuilder('en');

/** Deutsch A1 – Beginner, Kapitel 1 bis 6, dazu die A1-Kapitel des Grammatikbuchs. */
export const DE_A1 = lessons('de-a1', [
  // ------------------------------------------------ Kapitel 1: Guten Tag!
  {
    kind: 'VOCAB',
    title: 'Begrüßen und verabschieden',
    ref: [B, 1, 1],
    learn: [
      words('Hallo und Tschüss', [
        ['Guten Morgen', 'good morning'],
        ['Guten Tag', 'hello / good day'],
        ['Guten Abend', 'good evening'],
        ['Hallo', 'hi / hello'],
        ['Auf Wiedersehen', 'goodbye (formal)'],
        ['Tschüss', 'bye (informal)'],
      ]),
      tip(
        'Welche Begrüßung wann?',
        'Bis etwa 11 Uhr sagt man „Guten Morgen“, bis etwa 18 Uhr „Guten Tag“, danach „Guten Abend“. „Hallo“ passt immer – aber nur informell.',
      ),
    ],
    test: [
      match('Was passt zusammen?', [
        ['8 Uhr morgens', 'Guten Morgen'],
        ['14 Uhr', 'Guten Tag'],
        ['20 Uhr', 'Guten Abend'],
        ['unter Freunden: tschüss', 'Tschüss'],
      ]),
      choice('Wählen Sie.', 'Sie verlassen eine Behörde. Was sagen Sie?', [
        '*Auf Wiedersehen!',
        'Tschüss!',
        'Hallo!',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'du oder Sie?',
    ref: [B, 1, 1],
    learn: [
      grammar(
        'Zwei Anredeformen',
        '„Sie“ ist förmlich: für fremde Personen, im Beruf und bei Behörden. „du“ ist vertraut: für Familie, Freunde und oft unter jungen Leuten. Zu „Sie“ gehört „Wie geht es Ihnen?“, zu „du“ gehört „Wie geht es dir?“.',
      ),
    ],
    test: [
      choice('du oder Sie?', 'Sie sprechen mit Ihrer neuen Chefin.', [
        '*Wie geht es Ihnen?',
        'Wie geht es dir?',
      ]),
      choice('du oder Sie?', 'Sie sprechen mit Ihrem Bruder.', [
        'Wie geht es Ihnen?',
        '*Wie geht es dir?',
      ]),
      choice(
        'du oder Sie?',
        'Ein Kind fragt eine fremde Frau nach dem Weg. Die Frau antwortet dem Kind.',
        ['*Du gehst hier rechts.', 'Sie gehen hier rechts.'],
        'Kinder duzt man – auch als Erwachsene, die das Kind nicht kennen.',
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Wie geht’s?',
    ref: [B, 1, 1],
    learn: [
      dialogue('In der Sprachschule', [
        'Mira: Hallo, Jonas! Wie geht’s?',
        'Jonas: Hi, Mira. Gut, danke. Und dir?',
        'Mira: Auch gut. Bis später!',
        'Jonas: Tschüss!',
      ]),
    ],
    test: [
      cloze(
        'Ergänzen Sie das Gespräch.',
        'A: Hallo! Wie [geht’s]? – B: Gut, [danke]. Und [dir]? – A: Auch gut. Bis [später]!',
        ['Ihnen', 'Abend'],
      ),
      order('Ordnen Sie das Gespräch.', [
        'Guten Morgen, Frau Behrens!',
        'Guten Morgen! Wie geht es Ihnen?',
        'Danke, sehr gut. Und Ihnen?',
        'Auch gut, danke.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Ich heiße …',
    ref: [B, 1, 2],
    learn: [
      text(
        'Beim ersten Treffen nennt man seinen Namen: „Ich heiße Anna Weber.“ oder „Mein Name ist Anna Weber.“ Man fragt: „Wie heißen Sie?“ – informell: „Wie heißt du?“',
      ),
      grammar('Das Verb heißen', 'Das Verb bekommt eine Endung, die zur Person passt.', {
        headers: ['Person', 'heißen'],
        rows: [
          ['ich', 'heiße'],
          ['du', 'heißt'],
          ['er / sie / es', 'heißt'],
          ['wir', 'heißen'],
          ['ihr', 'heißt'],
          ['sie / Sie', 'heißen'],
        ],
      }),
    ],
    test: [
      cloze(
        'Ergänzen Sie „heißen“.',
        'Wie [heißen] Sie? – Ich [heiße] Samir. Und wie [heißt] du? – Ich heiße Elif. Das ist meine Lehrerin, sie [heißt] Anna.',
      ),
      order('Bilden Sie eine Frage.', ['Wie', 'heißt', 'du', '?']),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Verben: Stamm plus Endung',
    ref: [G, 3, 1],
    learn: [
      grammar(
        'Die Endungen im Präsens',
        'Die Endungen sind für fast alle Verben gleich: -e, -st, -t, -en, -t, -en. Die Formen für „wir“ und „sie/Sie“ sind immer gleich dem Infinitiv.',
        {
          headers: ['Person', 'wohnen', 'lernen'],
          rows: [
            ['ich', 'wohne', 'lerne'],
            ['du', 'wohnst', 'lernst'],
            ['er / sie / es', 'wohnt', 'lernt'],
            ['wir', 'wohnen', 'lernen'],
            ['ihr', 'wohnt', 'lernt'],
            ['sie / Sie', 'wohnen', 'lernen'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Ergänzen Sie die Endungen.',
        'Ich [lerne] Deutsch. Du [wohnst] in Leipzig. Wir [spielen] Fußball. Ihr [kommt] aus Polen.',
        ['lernt', 'wohnen', 'spielt'],
      ),
      match('Welche Form passt?', [
        ['ich', 'spiele'],
        ['du', 'spielst'],
        ['er', 'spielt'],
        ['wir', 'spielen'],
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Woher kommen Sie?',
    ref: [B, 1, 3],
    learn: [
      words('Länder', [
        ['Deutschland', 'Germany'],
        ['Österreich', 'Austria'],
        ['die Schweiz', 'Switzerland'],
        ['die Türkei', 'Turkey'],
        ['Polen', 'Poland'],
        ['wohnen', 'to live / reside'],
      ]),
      grammar(
        'kommen aus – wohnen in',
        'Die Herkunft steht mit „aus“, der Wohnort mit „in“. Die meisten Länder haben keinen Artikel: aus Polen, in Japan. Einige haben einen: aus der Türkei, aus der Schweiz, aus dem Libanon.',
      ),
    ],
    test: [
      cloze(
        'aus oder in?',
        'Ich komme [aus] Polen, aber ich wohne jetzt [in] Leipzig. Elif kommt [aus] der Türkei.',
      ),
      choice('Wählen Sie.', 'Samir kommt …', [
        'aus Libanon.',
        '*aus dem Libanon.',
        'in dem Libanon.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'W-Fragen',
    ref: [B, 1, 2],
    learn: [
      grammar(
        'Das Fragewort zuerst, dann das Verb',
        'Bei einer W-Frage steht das Fragewort auf Position 1, direkt danach das Verb auf Position 2.',
        {
          headers: ['Position 1', 'Position 2', 'Rest'],
          rows: [
            ['Wie', 'heißen', 'Sie?'],
            ['Woher', 'kommen', 'Sie?'],
            ['Wo', 'wohnen', 'Sie?'],
            ['Wer', 'ist', 'das?'],
          ],
        },
      ),
    ],
    test: [
      match('Welche Frage passt zur Antwort?', [
        ['Wie heißen Sie?', 'Ich heiße Elif.'],
        ['Woher kommen Sie?', 'Aus der Türkei.'],
        ['Wo wohnen Sie?', 'In Leipzig.'],
        ['Wer ist das?', 'Das ist Samir.'],
      ]),
      order('Bilden Sie eine Frage.', ['Woher', 'kommt', 'deine Lehrerin', '?']),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Ja/Nein-Fragen',
    ref: [G, 6, 2],
    learn: [
      grammar(
        'Das Verb auf Position 1',
        'Eine Ja/Nein-Frage hat kein Fragewort. Das Verb steht ganz vorn: „Kommst du aus Polen?“ – „Ja.“ / „Nein, aus Tschechien.“',
        {
          headers: ['Position 1', 'Position 2', 'Rest'],
          rows: [
            ['Kommst', 'du', 'aus Polen?'],
            ['Wohnen', 'Sie', 'in Berlin?'],
            ['Heißt', 'er', 'Jonas?'],
          ],
        },
      ),
    ],
    test: [
      order('Bilden Sie eine Ja/Nein-Frage.', ['Wohnst', 'du', 'in Leipzig', '?']),
      choice('Welcher Satz ist eine Ja/Nein-Frage?', 'Wählen Sie.', [
        'Wo wohnst du?',
        '*Sprichst du Deutsch?',
        'Woher kommst du?',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Die Zahlen von 0 bis 20',
    ref: [B, 1, 4],
    learn: [
      grammar(
        '0 bis 20',
        'Von 13 bis 19 hängt man „-zehn“ an: dreizehn, vierzehn. Ausnahmen: sechzehn und siebzehn – dort fällt ein Laut weg.',
        {
          headers: ['Zahl', 'Wort', 'Zahl', 'Wort'],
          rows: [
            ['0', 'null', '11', 'elf'],
            ['1', 'eins', '12', 'zwölf'],
            ['3', 'drei', '13', 'dreizehn'],
            ['6', 'sechs', '16', 'sechzehn'],
            ['7', 'sieben', '17', 'siebzehn'],
            ['10', 'zehn', '20', 'zwanzig'],
          ],
        },
      ),
    ],
    test: [
      match('Ordnen Sie zu.', [
        ['12', 'zwölf'],
        ['16', 'sechzehn'],
        ['17', 'siebzehn'],
        ['11', 'elf'],
        ['20', 'zwanzig'],
      ]),
      choice('Wie schreibt man 16?', 'Wählen Sie.', ['sechszehn', '*sechzehn', 'sechzen']),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Buchstabieren',
    ref: [B, 1, 4],
    learn: [
      grammar(
        'Besondere Buchstaben',
        'Vier Zeichen kennt nur das Deutsche. Beim Buchstabieren sagt man: Ä = A-Umlaut, Ö = O-Umlaut, Ü = U-Umlaut, ß = Eszett (scharfes S).',
      ),
      dialogue('Am Telefon', [
        'Mitarbeiterin: Wie ist Ihr Name, bitte?',
        'Anrufer: Mein Name ist Bäcker.',
        'Mitarbeiterin: Können Sie das buchstabieren?',
        'Anrufer: Ja: B – A-Umlaut – C – K – E – R.',
      ]),
    ],
    test: [
      match('Was hört man?', [
        ['B – A-Umlaut – R', 'Bär'],
        ['G – R – O-Umlaut – ß – E', 'Größe'],
        ['F – U-Umlaut – R', 'für'],
      ]),
      choice('Wählen Sie.', 'Wie buchstabiert man „ß“?', ['S-S', '*Eszett', 'B']),
    ],
  },

  // ------------------------------------------------ Kapitel 2: Familie
  {
    kind: 'VOCAB',
    title: 'Die Familie',
    ref: [B, 2, 1],
    learn: [
      words('Familienmitglieder', [
        ['der Vater', 'father'],
        ['die Mutter', 'mother'],
        ['der Bruder', 'brother'],
        ['die Schwester', 'sister'],
        ['der Sohn', 'son'],
        ['die Tochter', 'daughter'],
        ['die Eltern', 'parents'],
        ['die Geschwister', 'siblings'],
      ]),
      tip(
        'Nur im Plural',
        '„Eltern“ und „Geschwister“ gibt es nur im Plural: „Meine Eltern sind …“, „Hast du Geschwister?“',
      ),
    ],
    test: [
      match('Wer ist das? Ordnen Sie zu.', [
        ['Vater und Mutter', 'die Eltern'],
        ['Bruder und Schwester', 'die Geschwister'],
        ['der Vater von meinem Vater', 'der Großvater'],
        ['das Kind von meinen Eltern (weiblich)', 'die Schwester'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'der, die, das',
    ref: [G, 1, 1],
    learn: [
      grammar(
        'Drei Artikel',
        'Jedes Nomen hat einen Artikel: der (männlich), die (weiblich), das (sächlich). Im Plural heißt er immer „die“. Lernen Sie jedes Nomen mit Artikel: nicht „Tisch“, sondern „der Tisch“.',
        {
          headers: ['männlich', 'weiblich', 'sächlich', 'Plural'],
          rows: [['der Tisch', 'die Lampe', 'das Bild', 'die Tische']],
        },
      ),
      tip(
        'Nomen schreibt man groß',
        'Jedes Nomen beginnt mit einem großen Buchstaben – auch mitten im Satz.',
      ),
    ],
    test: [
      match('Welcher Artikel?', [
        ['Vater', 'der'],
        ['Mutter', 'die'],
        ['Kind', 'das'],
        ['Eltern', 'die'],
      ]),
      choice('Wählen Sie.', 'Welcher Satz ist richtig geschrieben?', [
        'ich kaufe einen tisch.',
        '*Ich kaufe einen Tisch.',
        'Ich Kaufe einen Tisch.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'ein, eine – und der, die, das',
    ref: [G, 1, 1],
    learn: [
      grammar(
        'Bestimmt oder unbestimmt?',
        'Was neu ins Gespräch kommt, bekommt „ein“ oder „eine“. Was beide schon kennen, bekommt „der, die, das“. Deshalb: „Ich kaufe eine Lampe. Die Lampe ist schön.“',
        {
          headers: ['', 'männlich', 'weiblich', 'sächlich'],
          rows: [
            ['bestimmt', 'der', 'die', 'das'],
            ['unbestimmt', 'ein', 'eine', 'ein'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Da ist [ein] Stuhl. [Der] Stuhl ist neu. Hier ist [eine] Lampe. [Die] Lampe ist alt.',
        ['das', 'einen'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'mein und dein',
    ref: [B, 2, 2],
    learn: [
      grammar(
        'Possessivartikel',
        'Vor männlichen und sächlichen Nomen steht die kurze Form (mein), vor weiblichen Nomen und im Plural kommt ein -e dazu (meine) – wie bei ein / eine.',
        {
          headers: ['', 'der Bruder', 'das Kind', 'die Schwester', 'die Eltern'],
          rows: [
            ['ich', 'mein', 'mein', 'meine', 'meine'],
            ['du', 'dein', 'dein', 'deine', 'deine'],
            ['Sie', 'Ihr', 'Ihr', 'Ihre', 'Ihre'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'mein oder meine?',
        'Das ist [mein] Vater und das ist [meine] Mutter. Das sind [meine] Geschwister. Und das ist [mein] Kind.',
      ),
      choice('Wählen Sie.', 'Ist das … Schwester?', ['dein', '*deine']),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'sein oder ihr?',
    ref: [B, 2, 2],
    learn: [
      grammar(
        'Wem gehört es?',
        'Entscheidend ist die Person, der etwas gehört – nicht das Nomen danach. Bei einem Mann heißt es „sein“, bei einer Frau „ihr“: Tim und seine Schwester, Lena und ihr Bruder.',
        {
          headers: ['Person', 'männlich / sächlich', 'weiblich / Plural'],
          rows: [
            ['er / es', 'sein', 'seine'],
            ['sie', 'ihr', 'ihre'],
            ['wir', 'unser', 'unsere'],
            ['ihr', 'euer', 'eure'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'sein oder ihr?',
        'Lena und [ihr] Bruder. Tim und [seine] Schwester. Lena und [ihre] Eltern. Tim und [sein] Vater.',
        ['seinen'],
      ),
      choice('Wählen Sie.', 'Wir wohnen in Leipzig. … Wohnung ist klein.', [
        '*Unsere',
        'Unser',
        'Euer',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Die Zahlen bis 100',
    ref: [B, 2, 3],
    learn: [
      grammar(
        'Erst die Einer, dann die Zehner',
        'Die Zehner enden auf -zig; nur dreißig schreibt man mit ß. Zwischen 21 und 99 kommen die Einer zuerst, verbunden mit „und“: 21 = einundzwanzig, 47 = siebenundvierzig. Alles in einem Wort.',
        {
          headers: ['Zahl', 'Wort'],
          rows: [
            ['30', 'dreißig'],
            ['60', 'sechzig'],
            ['70', 'siebzig'],
            ['85', 'fünfundachtzig'],
            ['92', 'zweiundneunzig'],
          ],
        },
      ),
    ],
    test: [
      match('Ordnen Sie zu.', [
        ['23', 'dreiundzwanzig'],
        ['32', 'zweiunddreißig'],
        ['67', 'siebenundsechzig'],
        ['76', 'sechsundsiebzig'],
      ]),
      choice('Wählen Sie.', 'Wie sagt man 41?', [
        'vierzigeins',
        '*einundvierzig',
        'einsundvierzig',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Wie alt bist du?',
    ref: [B, 2, 3],
    learn: [
      dialogue('Auf einer Geburtstagsfeier', [
        'Jonas: Wie alt ist deine Oma heute?',
        'Mira: Sie ist heute fünfundachtzig!',
        'Jonas: Wow! Und wie alt bist du?',
        'Mira: Ich bin achtundzwanzig. Und du?',
        'Jonas: Ich bin einunddreißig.',
      ]),
      tip(
        'Alter mit „sein“',
        'Das Alter sagt man mit „sein“, nicht mit „haben“: Ich bin 28 (Jahre alt).',
      ),
    ],
    test: [
      choice('Wählen Sie.', 'Wie alt ist Miras Oma?', ['58', '*85', '28']),
      cloze('Ergänzen Sie.', 'Wie alt [bist] du? – Ich [bin] einunddreißig [Jahre] alt.', [
        'habe',
        'hast',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Berufe',
    ref: [B, 2, 4],
    learn: [
      grammar(
        'Männlich und weiblich',
        'Die weibliche Form bekommt meistens -in, manchmal auch einen Umlaut. Vor dem Beruf steht kein Artikel: Ich bin Lehrerin. Er ist Koch.',
        {
          headers: ['männlich', 'weiblich'],
          rows: [
            ['der Lehrer', 'die Lehrerin'],
            ['der Verkäufer', 'die Verkäuferin'],
            ['der Arzt', 'die Ärztin'],
            ['der Koch', 'die Köchin'],
          ],
        },
      ),
    ],
    test: [
      match('Die weibliche Form', [
        ['der Student', 'die Studentin'],
        ['der Arzt', 'die Ärztin'],
        ['der Koch', 'die Köchin'],
        ['der Ingenieur', 'die Ingenieurin'],
      ]),
      choice('Wählen Sie.', 'Was sind Sie von Beruf?', [
        'Ich bin eine Ärztin.',
        '*Ich bin Ärztin.',
        'Ich habe Ärztin.',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Das Verb haben',
    ref: [B, 2, 4],
    learn: [
      grammar(
        'haben',
        '„haben“ ist neben „sein“ das wichtigste Verb. Bei „du“ und „er/sie/es“ fällt das b weg: du hast, er hat.',
        {
          headers: ['Person', 'haben'],
          rows: [
            ['ich', 'habe'],
            ['du', 'hast'],
            ['er / sie / es', 'hat'],
            ['wir', 'haben'],
            ['ihr', 'habt'],
            ['sie / Sie', 'haben'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Ergänzen Sie „haben“.',
        '[Haben] Sie Kinder? – Ja, ich [habe] zwei Kinder. Mein Sohn [hat] einen Hund. [Habt] ihr auch Tiere?',
        ['hast'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Das Verb sein',
    ref: [G, 3, 2],
    learn: [
      grammar(
        'sein',
        '„sein“ ist unregelmäßig und muss auswendig sitzen. Man braucht es für Namen, Herkunft, Beruf und Alter.',
        {
          headers: ['Person', 'sein'],
          rows: [
            ['ich', 'bin'],
            ['du', 'bist'],
            ['er / sie / es', 'ist'],
            ['wir', 'sind'],
            ['ihr', 'seid'],
            ['sie / Sie', 'sind'],
          ],
        },
      ),
    ],
    test: [
      match('Welche Form?', [
        ['ich', 'bin'],
        ['du', 'bist'],
        ['ihr', 'seid'],
        ['wir', 'sind'],
        ['sie (Anna)', 'ist'],
      ]),
      cloze('Ergänzen Sie.', 'Wer [ist] das? – Das [sind] meine Eltern. Sie [sind] Lehrer.'),
    ],
  },

  // ------------------------------------------------ Kapitel 3: Essen und Trinken
  {
    kind: 'VOCAB',
    title: 'Lebensmittel',
    ref: [B, 3, 1],
    learn: [
      words('Essen und Trinken', [
        ['das Brot', 'bread'],
        ['das Brötchen', 'bread roll'],
        ['der Käse', 'cheese'],
        ['das Ei', 'egg'],
        ['der Apfel', 'apple'],
        ['der Fisch', 'fish'],
        ['der Kaffee', 'coffee'],
        ['die Milch', 'milk'],
        ['der Saft', 'juice'],
      ]),
    ],
    test: [
      match('Welcher Artikel?', [
        ['Brot', 'das'],
        ['Milch', 'die'],
        ['Apfel', 'der'],
        ['Ei', 'das'],
        ['Tomate', 'die'],
      ]),
      choice('Was kann man trinken?', 'Wählen Sie.', ['das Brötchen', 'der Käse', '*der Saft']),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'gern – nicht gern – am liebsten',
    ref: [B, 3, 1],
    learn: [
      grammar(
        'Was mögen Sie?',
        '„gern“ steht nach dem Verb und zeigt, dass man etwas mag. „am liebsten“ ist die stärkste Form. „essen“ ist unregelmäßig: du isst, er isst.',
        {
          headers: ['', 'Beispiel'],
          rows: [
            ['😊😊', 'Ich esse am liebsten Pizza.'],
            ['😊', 'Ich esse gern Fisch.'],
            ['😐', 'Ich esse nicht so gern Fleisch.'],
            ['☹️', 'Ich esse nicht gern Käse.'],
          ],
        },
      ),
    ],
    test: [
      order('Bilden Sie einen Satz.', ['Ich', 'trinke', 'gern', 'Tee', '.']),
      choice('Wählen Sie.', 'Mira mag Tee sehr, sehr gern. Sie sagt: „Ich trinke … Tee.“', [
        'nicht gern',
        'gern',
        '*am liebsten',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Im Café',
    ref: [B, 3, 2],
    learn: [
      dialogue('Bestellen und bezahlen', [
        'Kellner: Guten Tag! Was möchten Sie?',
        'Frau Behrens: Ich möchte einen Kaffee, bitte.',
        'Herr Okafor: Ich nehme einen Tee und ein Stück Apfelkuchen.',
        'Frau Behrens: Wir möchten bitte bezahlen.',
        'Kellner: Zusammen oder getrennt?',
        'Frau Behrens: Zusammen, bitte.',
        'Kellner: Das macht elf Euro sechzig.',
        'Frau Behrens: Zwölf Euro. Stimmt so.',
      ]),
      culture(
        'Trinkgeld',
        'Man gibt etwa fünf bis zehn Prozent. Man legt es nicht auf den Tisch, sondern nennt beim Bezahlen den Betrag: „Zwölf Euro, bitte“ oder „Stimmt so“.',
      ),
    ],
    test: [
      choice('Wählen Sie.', 'Wie viel Trinkgeld gibt Frau Behrens?', [
        '60 Cent',
        '*40 Cent',
        '1 Euro',
      ]),
      match('Was passt?', [
        ['Was möchten Sie?', 'Einen Kaffee, bitte.'],
        ['Zusammen oder getrennt?', 'Zusammen, bitte.'],
        ['Das macht elf Euro sechzig.', 'Zwölf Euro. Stimmt so.'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Höflich bestellen: möchte',
    ref: [B, 3, 2],
    learn: [
      grammar(
        'möchten',
        '„Ich möchte“ ist die höfliche Form von „ich will“. Achtung: Bei „er/sie“ gibt es kein -t: er möchte.',
        {
          headers: ['Person', 'möchten'],
          rows: [
            ['ich', 'möchte'],
            ['du', 'möchtest'],
            ['er / sie / es', 'möchte'],
            ['wir', 'möchten'],
            ['ihr', 'möchtet'],
            ['sie / Sie', 'möchten'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Ergänzen Sie „möchten“.',
        'Was [möchtest] du? – Ich [möchte] einen Tee. Und Jonas [möchte] ein Wasser. Wir [möchten] bitte bezahlen.',
        ['möchtet'],
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Ich nehme einen Kaffee',
    ref: [B, 3, 3],
    learn: [
      text(
        'Vergleichen Sie: „Das ist ein Kaffee.“ – „Ich nehme einen Kaffee.“ Im zweiten Satz ist der Kaffee das Objekt. Dafür hat das Deutsche einen eigenen Fall: den Akkusativ.',
      ),
      grammar(
        'Nur „der“ ändert sich',
        'Im Akkusativ ändern sich nur die männlichen Artikel: der → den, ein → einen. Weiblich, sächlich und Plural bleiben gleich. Nach nehmen, möchten, haben, essen, trinken, kaufen steht der Akkusativ.',
        {
          headers: ['', 'männlich', 'sächlich', 'weiblich'],
          rows: [
            ['Nominativ', 'ein Saft', 'ein Ei', 'eine Tomate'],
            ['Akkusativ', 'einen Saft', 'ein Ei', 'eine Tomate'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Ich nehme [einen] Kaffee (der). Er möchte [ein] Brötchen (das). Wir kaufen [eine] Flasche Wasser (die).',
        ['einer'],
      ),
      choice('Wählen Sie.', 'Hast du … Apfel für mich?', ['ein', '*einen', 'eine']),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'nicht oder kein?',
    ref: [B, 3, 3],
    learn: [
      grammar(
        'Verneinen',
        'Nomen mit „ein“ oder ohne Artikel verneint man mit „kein“: Ich habe einen Apfel. → Ich habe keinen Apfel. Ich trinke Milch. → Ich trinke keine Milch. Alles andere verneint man mit „nicht“: Ich esse nicht gern Fisch.',
        {
          headers: ['', 'männlich', 'sächlich', 'weiblich', 'Plural'],
          rows: [['Akkusativ', 'keinen Saft', 'kein Ei', 'keine Tomate', 'keine Äpfel']],
        },
      ),
    ],
    test: [
      cloze(
        'nicht oder kein?',
        'Ich trinke [keinen] Kaffee. Ich esse [nicht] gern Fleisch. Wir haben [keine] Milch. Das Brot ist [nicht] frisch.',
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Wer? – Wen?',
    ref: [G, 2, 1],
    learn: [
      grammar(
        'Nominativ und Akkusativ',
        'Das Subjekt tut etwas – man fragt „Wer?“. Das Objekt steht im Akkusativ – man fragt „Wen?“ oder „Was?“. Nur das Maskulinum ändert sich: der → den, ein → einen, mein → meinen.',
        {
          headers: ['Wer?', 'Verb', 'Wen? Was?'],
          rows: [
            ['Der Lehrer', 'fragt', 'den Schüler.'],
            ['Ich', 'suche', 'die Brille.'],
            ['Meine Schwester', 'kauft', 'ein Fahrrad.'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'der oder den?',
        '[Der] Mann kauft [den] Tisch. Ich frage [den] Lehrer. [Der] Lehrer antwortet.',
      ),
      choice('Wählen Sie.', 'Ich besuche heute … Bruder.', ['mein', '*meinen', 'meine']),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Mengen und Preise',
    ref: [B, 3, 4],
    learn: [
      words('Auf dem Markt', [
        ['das Kilo', 'kilo'],
        ['der Liter', 'litre'],
        ['die Flasche', 'bottle'],
        ['die Packung', 'pack / packet'],
        ['das Stück', 'piece'],
        ['teuer', 'expensive'],
        ['billig / günstig', 'cheap / good value'],
      ]),
      tip(
        'Preise sagen',
        'Zuerst die Euro, dann die Cent – das Wort „Cent“ lässt man meistens weg: 2,50 € = zwei Euro fünfzig. Man fragt: „Was kostet …?“ (Singular), „Was kosten …?“ (Plural).',
      ),
    ],
    test: [
      match('Was passt?', [
        ['ein Liter', 'Milch'],
        ['ein Kilo', 'Tomaten'],
        ['eine Flasche', 'Wasser'],
        ['ein Stück', 'Kuchen'],
      ]),
      choice('Wählen Sie.', 'Wie sagt man 8,90 €?', [
        'acht Cent neunzig',
        '*acht Euro neunzig',
        'neunzig Euro acht',
      ]),
      choice('Wählen Sie.', 'Was … die Äpfel?', ['kostet', '*kosten']),
    ],
  },

  // ------------------------------------------------ Kapitel 4: Wohnen
  {
    kind: 'VOCAB',
    title: 'Räume',
    ref: [B, 4, 1],
    learn: [
      words('Die Wohnung', [
        ['das Zimmer', 'room'],
        ['das Wohnzimmer', 'living room'],
        ['das Schlafzimmer', 'bedroom'],
        ['die Küche', 'kitchen'],
        ['das Bad', 'bathroom'],
        ['der Flur', 'hallway'],
        ['der Balkon', 'balcony'],
      ]),
    ],
    test: [
      match('Wo macht man das?', [
        ['kochen', 'in der Küche'],
        ['schlafen', 'im Schlafzimmer'],
        ['duschen', 'im Bad'],
        ['fernsehen', 'im Wohnzimmer'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Die Küche ist klein',
    ref: [B, 4, 1],
    learn: [
      grammar(
        'Adjektive nach sein',
        'Nach „sein“ bekommt das Adjektiv keine Endung: Die Küche ist klein. Das Bad ist neu. Lernen Sie Adjektive als Paar.',
        {
          headers: ['', 'Gegenteil'],
          rows: [
            ['groß', 'klein'],
            ['hell', 'dunkel'],
            ['neu', 'alt'],
            ['teuer', 'günstig'],
            ['ruhig', 'laut'],
          ],
        },
      ),
      tip(
        'er, sie, es – auch für Dinge',
        'der Balkon → er, die Küche → sie, das Bad → es. „Die Küche ist klein.“ → „Sie ist klein.“',
      ),
    ],
    test: [
      match('Das Gegenteil', [
        ['hell', 'dunkel'],
        ['ruhig', 'laut'],
        ['teuer', 'günstig'],
        ['neu', 'alt'],
      ]),
      cloze(
        'er, sie oder es?',
        'Der Balkon ist groß. [Er] ist schön. Die Wohnung ist hell. [Sie] ist auch ruhig. Das Bad ist klein, aber [es] ist neu.',
      ),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Möbel',
    ref: [B, 4, 2],
    learn: [
      words('Möbel und Geräte', [
        ['der Tisch', 'table'],
        ['der Stuhl', 'chair'],
        ['das Sofa', 'sofa'],
        ['das Bett', 'bed'],
        ['der Schrank', 'wardrobe / cupboard'],
        ['das Regal', 'shelf'],
        ['die Lampe', 'lamp'],
        ['der Kühlschrank', 'fridge'],
      ]),
      tip(
        'brauchen + Akkusativ',
        'Nach „brauchen“ steht der Akkusativ: Wir brauchen einen Tisch, eine Lampe, ein Regal. Verneint: keinen, keine, kein.',
      ),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Wir brauchen noch [einen] Tisch und [eine] Lampe. Ein Sofa haben wir schon, wir brauchen [kein] Sofa.',
        ['keinen', 'ein'],
      ),
      choice('Wählen Sie.', 'Wo ist die Milch?', ['Im Regal.', '*Im Kühlschrank.', 'Im Bett.']),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Endungen verraten den Artikel',
    ref: [G, 1, 2],
    learn: [
      grammar(
        'Verlässliche Endungen',
        'Wörter auf -ung, -heit, -keit, -schaft, -tion und -ei sind immer „die“. Wörter auf -chen und -lein sind immer „das“. Wörter auf -er (Personen), -ling und -ismus sind meist „der“.',
        {
          headers: ['Artikel', 'Endung', 'Beispiel'],
          rows: [
            ['die', '-ung, -heit, -keit', 'die Zeitung, die Freiheit'],
            ['die', '-schaft, -tion, -ei', 'die Freundschaft, die Bäckerei'],
            ['das', '-chen, -lein', 'das Mädchen'],
            ['der', '-er, -ling', 'der Lehrer, der Frühling'],
          ],
        },
      ),
      tip(
        'Das letzte Wort zählt',
        'Bei zusammengesetzten Wörtern bestimmt das letzte Glied den Artikel: die Tür + das Schloss = das Türschloss.',
      ),
    ],
    test: [
      match('Welcher Artikel?', [
        ['Wohnung', 'die'],
        ['Brötchen', 'das'],
        ['Lehrer', 'der'],
        ['Bäckerei', 'die'],
        ['Küchentisch', 'der'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Der Plural',
    ref: [G, 1, 3],
    learn: [
      grammar(
        'Fünf Gruppen',
        'Lernen Sie den Plural mit: das Buch, die Bücher. Faustregeln: Wörter auf -e und weibliche Wörter bekommen meist -n oder -en, Wörter aus dem Englischen -s.',
        {
          headers: ['Endung', 'Singular', 'Plural'],
          rows: [
            ['-e', 'der Tisch', 'die Tische'],
            ['-e + Umlaut', 'der Stuhl', 'die Stühle'],
            ['-(e)n', 'die Lampe', 'die Lampen'],
            ['-er + Umlaut', 'das Buch', 'die Bücher'],
            ['–', 'das Fenster', 'die Fenster'],
            ['-s', 'das Auto', 'die Autos'],
          ],
        },
      ),
    ],
    test: [
      match('Singular und Plural', [
        ['die Lampe', 'die Lampen'],
        ['der Stuhl', 'die Stühle'],
        ['das Buch', 'die Bücher'],
        ['das Sofa', 'die Sofas'],
        ['das Zimmer', 'die Zimmer'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Wo ist meine Brille?',
    ref: [B, 4, 3],
    learn: [
      grammar(
        'Wo? – Präposition + Dativ',
        'Auf die Frage „Wo?“ folgt nach in, auf, unter, neben, vor, hinter, über, an und zwischen der Dativ: dem (männlich/sächlich), der (weiblich), den (Plural). Kurzformen: in dem = im, an dem = am.',
        {
          headers: ['Präposition', 'Beispiel'],
          rows: [
            ['auf', 'auf dem Tisch'],
            ['unter', 'unter der Zeitung'],
            ['neben', 'neben dem Bett'],
            ['in', 'im Regal, in der Küche'],
            ['an', 'am Fenster, an der Wand'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Die Brille liegt auf [dem] Tisch (der). Das Buch ist in [der] Küche (die). Die Katze schläft [im] Bett (das).',
        ['den', 'am'],
      ),
      choice('Wählen Sie.', 'Das Bild hängt …', ['an die Wand.', '*an der Wand.', 'an dem Wand.']),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Eine Wohnungsanzeige',
    ref: [B, 4, 4],
    learn: [
      culture(
        '2-Zi.-Whg. in Leipzig-Gohlis',
        'Schöne 2-Zi.-Whg., 58 m², 3. OG, mit Balkon und EBK. Ruhige Lage, S-Bahn 5 Min. zu Fuß. Miete: 520 € kalt, NK 140 €. Frei ab 1. März.',
      ),
      tip(
        'Abkürzungen',
        'Zi. = Zimmer, Whg. = Wohnung, OG = Obergeschoss, EBK = Einbauküche, kalt = ohne Heizung und Nebenkosten, NK = Nebenkosten.',
      ),
    ],
    test: [
      choice('Lesen Sie die Anzeige.', 'Wie viele Zimmer hat die Wohnung?', [
        '*zwei',
        'drei',
        'fünf',
      ]),
      choice('Lesen Sie die Anzeige.', 'Was kostet die Wohnung mit Nebenkosten?', [
        '520 €',
        '*660 €',
        '140 €',
      ]),
      match('Was bedeutet das?', [
        ['EBK', 'Einbauküche'],
        ['OG', 'Obergeschoss'],
        ['NK', 'Nebenkosten'],
      ]),
    ],
  },

  // ------------------------------------------------ Kapitel 5: Mein Tag
  {
    kind: 'VOCAB',
    title: 'Die Uhrzeit (offiziell)',
    ref: [B, 5, 1],
    learn: [
      grammar(
        'Stunden, dann Minuten',
        'Offiziell – im Radio, am Bahnhof, im Beruf – zählt man von 0 bis 24 Uhr: 8:05 = acht Uhr fünf, 20:30 = zwanzig Uhr dreißig.',
      ),
    ],
    test: [
      match('Wie spät ist es?', [
        ['7:15', 'sieben Uhr fünfzehn'],
        ['13:40', 'dreizehn Uhr vierzig'],
        ['18:05', 'achtzehn Uhr fünf'],
        ['22:30', 'zweiundzwanzig Uhr dreißig'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Viertel nach, halb neun',
    ref: [B, 5, 1],
    learn: [
      grammar(
        'Die Uhrzeit im Alltag',
        'Inoffiziell zählt man nur bis 12 und benutzt „nach“, „vor“, „Viertel“ und „halb“.',
        {
          headers: ['Uhr', 'inoffiziell'],
          rows: [
            ['8:05', 'fünf nach acht'],
            ['8:15', 'Viertel nach acht'],
            ['8:30', 'halb neun'],
            ['8:45', 'Viertel vor neun'],
            ['8:50', 'zehn vor neun'],
          ],
        },
      ),
      tip(
        'Achtung: halb',
        '„halb neun“ ist 8:30 – die halbe Stunde auf dem Weg zu neun. Man denkt immer an die nächste volle Stunde.',
      ),
    ],
    test: [
      choice('Wählen Sie.', 'Es ist halb vier. Wie spät ist es?', ['4:30', '*3:30', '3:50']),
      match('Wie sagt man das im Alltag?', [
        ['6:15', 'Viertel nach sechs'],
        ['6:30', 'halb sieben'],
        ['6:45', 'Viertel vor sieben'],
        ['6:55', 'fünf vor sieben'],
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Tomasz’ Tag',
    ref: [B, 5, 2],
    learn: [
      text(
        'Ich heiße Tomasz und bin Krankenpfleger. Mein Tag beginnt früh: Ich stehe um halb sechs auf. Um sechs frühstücke ich. Um sieben fängt meine Arbeit im Krankenhaus an. Mittags esse ich in der Kantine. Um halb vier ist die Arbeit zu Ende. Dann kaufe ich ein und koche. Abends rufe ich meine Familie in Polen an. Um zehn gehe ich ins Bett.',
      ),
      tip(
        'um, am, von … bis',
        'Vor der Uhrzeit steht „um“: um sieben. Vor Tageszeiten und Tagen steht „am“: am Abend, am Montag. Aber: in der Nacht. Eine Zeitspanne: von acht bis fünf.',
      ),
    ],
    test: [
      order('Bringen Sie Tomasz’ Tag in die richtige Reihenfolge.', [
        'aufstehen',
        'frühstücken',
        'arbeiten',
        'einkaufen und kochen',
        'ins Bett gehen',
      ]),
      choice('Lesen Sie den Text.', 'Wann beginnt Tomasz’ Arbeit?', [
        'um halb sechs',
        '*um sieben',
        'um halb vier',
      ]),
      cloze(
        'um oder am?',
        'Ich arbeite [am] Montag. Der Kurs beginnt [um] neun Uhr. [Am] Abend sehe ich fern.',
      ),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Trennbare Verben',
    ref: [B, 5, 3],
    learn: [
      grammar(
        'Die Satzklammer',
        'Viele Verben haben eine Vorsilbe wie auf-, an-, ein-, fern-, mit-. Im Hauptsatz steht der Verbstamm auf Position 2, die Vorsilbe ganz am Ende.',
        {
          headers: ['Position 1', 'Position 2', 'Mitte', 'Ende'],
          rows: [
            ['Ich', 'stehe', 'um sieben', 'auf.'],
            ['Die Arbeit', 'fängt', 'um acht', 'an.'],
            ['Wir', 'kaufen', 'am Samstag', 'ein.'],
          ],
        },
      ),
      tip(
        'Trennbar oder nicht?',
        'Trennbare Vorsilben sind betont: AUFstehen, ANrufen. be-, ver-, er-, ge- trennen sich nie: Ich bezahle. Ich verstehe.',
      ),
    ],
    test: [
      order('Bilden Sie einen Satz mit „anrufen“.', [
        'Ich',
        'rufe',
        'heute Abend',
        'meine Mutter',
        'an',
        '.',
      ]),
      cloze('Ergänzen Sie.', 'Wann stehst du [auf]? Ich sehe abends [fern]. Kommst du [mit]?', [
        'an',
        'ver',
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Du isst, er fährt',
    ref: [G, 3, 2],
    learn: [
      grammar(
        'Vokalwechsel',
        'Bei manchen Verben ändert sich der Vokal – aber nur bei „du“ und „er/sie/es“: e → i, e → ie, a → ä.',
        {
          headers: ['Infinitiv', 'ich', 'du', 'er / sie / es'],
          rows: [
            ['sprechen', 'spreche', 'sprichst', 'spricht'],
            ['essen', 'esse', 'isst', 'isst'],
            ['lesen', 'lese', 'liest', 'liest'],
            ['fahren', 'fahre', 'fährst', 'fährt'],
            ['schlafen', 'schlafe', 'schläfst', 'schläft'],
          ],
        },
      ),
    ],
    test: [
      cloze(
        'Ergänzen Sie.',
        'Mira [spricht] drei Sprachen. [Liest] du gern? Jonas [fährt] mit dem Rad. Wir [essen] um zwölf.',
        ['sprecht', 'fahrt'],
      ),
      choice('Wählen Sie.', 'Das Baby … zehn Stunden.', ['schlaft', '*schläft', 'schlafen']),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Die Wochentage',
    ref: [B, 5, 4],
    learn: [
      words('Die Woche', [
        ['der Montag', 'Monday'],
        ['der Dienstag', 'Tuesday'],
        ['der Mittwoch', 'Wednesday'],
        ['der Donnerstag', 'Thursday'],
        ['der Freitag', 'Friday'],
        ['der Samstag', 'Saturday'],
        ['der Sonntag', 'Sunday'],
        ['das Wochenende', 'weekend'],
      ]),
      tip('am Montag', 'Vor Wochentagen steht „am“: am Montag, am Wochenende.'),
    ],
    test: [
      order('Ordnen Sie die Tage.', ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag']),
      choice('Wählen Sie.', 'Heute ist Freitag. Morgen ist …', [
        'Donnerstag',
        '*Samstag',
        'Sonntag',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Sich verabreden',
    ref: [B, 5, 4],
    learn: [
      dialogue('Eine Verabredung', [
        'Elif: Hallo Mira! Hast du am Samstag Zeit?',
        'Mira: Am Samstag? Was machst du denn?',
        'Elif: Ich gehe ins Kino. Kommst du mit?',
        'Mira: Samstag geht leider nicht, da arbeite ich. Und am Sonntag?',
        'Elif: Sonntag ist gut. Um wie viel Uhr?',
        'Mira: Vielleicht um halb acht?',
        'Elif: Prima, das passt!',
      ]),
    ],
    test: [
      choice('Lesen Sie das Gespräch.', 'Wann gehen Elif und Mira ins Kino?', [
        'am Samstag um halb acht',
        '*am Sonntag um halb acht',
        'am Sonntag um acht',
      ]),
      match('vorschlagen, zusagen, absagen', [
        ['Hast du am Freitag Zeit?', 'vorschlagen'],
        ['Ja, gern! Das passt gut.', 'zusagen'],
        ['Tut mir leid, da arbeite ich.', 'absagen'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Das Verb auf Position 2',
    ref: [G, 6, 1],
    learn: [
      grammar(
        'Position 1 ist frei',
        'Im Aussagesatz steht das Verb immer auf Position 2. Position 1 kann das Subjekt sein – oder etwas anderes, zum Beispiel eine Zeitangabe. Dann steht das Subjekt nach dem Verb.',
        {
          headers: ['Position 1', 'Position 2', 'Rest'],
          rows: [
            ['Ich', 'fahre', 'am Samstag nach Berlin.'],
            ['Am Samstag', 'fahre', 'ich nach Berlin.'],
            ['Nach Berlin', 'fahre', 'ich am Samstag.'],
          ],
        },
      ),
    ],
    test: [
      order('Beginnen Sie mit „Morgen“.', ['Morgen', 'arbeite', 'ich', 'bis sechs', '.']),
      choice('Welcher Satz ist richtig?', 'Wählen Sie.', [
        'Am Abend ich koche.',
        '*Am Abend koche ich.',
        'Am Abend koche.',
      ]),
    ],
  },

  // ------------------------------------------------ Kapitel 6: Einkaufen und Freizeit
  {
    kind: 'VOCAB',
    title: 'Kleidung',
    ref: [B, 6, 1],
    learn: [
      words('Was trägst du?', [
        ['die Hose', 'trousers'],
        ['der Rock', 'skirt'],
        ['das Kleid', 'dress'],
        ['das Hemd', 'shirt'],
        ['der Pullover', 'jumper / sweater'],
        ['die Jacke', 'jacket'],
        ['der Schuh', 'shoe'],
      ]),
      tip(
        'tragen: a wird ä',
        'du trägst, sie trägt. Nach „tragen“ steht der Akkusativ: Er trägt einen Mantel.',
      ),
    ],
    test: [
      match('Welcher Artikel?', [
        ['Hose', 'die'],
        ['Rock', 'der'],
        ['Kleid', 'das'],
        ['Mantel', 'der'],
      ]),
      cloze('Ergänzen Sie.', 'Anna [trägt] heute [einen] Rock und eine Bluse. Was [trägst] du?', [
        'tragt',
        'ein',
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Farben',
    ref: [B, 6, 1],
    learn: [
      grammar(
        'Farben',
        'Nach „sein“ haben Farben keine Endung: Die Jacke ist blau. Mit hell- und dunkel- wird die Farbe genauer: hellblau, dunkelgrün.',
        {
          headers: ['Farbe', 'Beispiel'],
          rows: [
            ['rot', 'Die Tomate ist rot.'],
            ['gelb', 'Die Banane ist gelb.'],
            ['grün', 'Das Gras ist grün.'],
            ['blau', 'Der Himmel ist blau.'],
            ['schwarz / weiß', 'Die Schuhe sind schwarz.'],
          ],
        },
      ),
    ],
    test: [
      match('Welche Farbe?', [
        ['die Banane', 'gelb'],
        ['das Gras', 'grün'],
        ['die Tomate', 'rot'],
        ['der Himmel', 'blau'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Das gefällt mir',
    ref: [B, 6, 2],
    learn: [
      grammar(
        'gefallen + Dativ',
        'Bei „gefallen“ ist die Sache das Subjekt, die Person steht im Dativ: Die Jacke gefällt mir. Die Schuhe gefallen mir. Genauso: Die Hose passt mir nicht.',
        {
          headers: ['Person', 'Dativ', 'Beispiel'],
          rows: [
            ['ich', 'mir', 'Das Kleid gefällt mir.'],
            ['du', 'dir', 'Gefällt dir der Rock?'],
            ['Sie', 'Ihnen', 'Wie gefällt Ihnen die Farbe?'],
          ],
        },
      ),
    ],
    test: [
      cloze('Ergänzen Sie.', 'Die Schuhe [gefallen] [mir]. Und der Mantel? [Gefällt] er [dir]?', [
        'mich',
        'dich',
      ]),
      choice('Wählen Sie.', 'Der Verkäufer fragt: „Wie gefällt … die Jacke?“', [
        'Sie',
        '*Ihnen',
        'Ihr',
      ]),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Im Kleidungsgeschäft',
    ref: [B, 6, 2],
    learn: [
      dialogue('Eine neue Jacke', [
        'Verkäufer: Guten Tag! Kann ich Ihnen helfen?',
        'Elif: Ja, ich suche eine Jacke. Größe 38.',
        'Elif: Haben Sie die Jacke auch in Blau?',
        'Verkäufer: Ja, hier bitte.',
        'Elif: Kann ich sie anprobieren?',
        'Verkäufer: Natürlich, die Kabine ist dort hinten.',
        'Elif: Sie passt gut und gefällt mir. Was kostet sie?',
        'Verkäufer: 79 Euro.',
        'Elif: Das ist ein bisschen teuer. Aber ich nehme sie.',
      ]),
    ],
    test: [
      choice('Lesen Sie das Gespräch.', 'Welche Farbe hat Elifs Jacke?', [
        'schwarz',
        '*blau',
        'grün',
      ]),
      choice('Lesen Sie das Gespräch.', 'Kauft Elif die Jacke?', [
        '*Ja, obwohl sie teuer ist.',
        'Nein, sie ist zu teuer.',
        'Nein, sie passt nicht.',
      ]),
      match('Was passt?', [
        ['Welche Größe haben Sie?', 'Größe 38.'],
        ['Kann ich sie anprobieren?', 'Natürlich, die Kabine ist dort.'],
        ['Was kostet sie?', '79 Euro.'],
      ]),
    ],
  },
  {
    kind: 'VOCAB',
    title: 'Freizeit',
    ref: [B, 6, 3],
    learn: [
      words('In der Freizeit', [
        ['schwimmen', 'to swim'],
        ['Fußball spielen', 'to play football'],
        ['Rad fahren', 'to cycle'],
        ['wandern', 'to hike'],
        ['lesen', 'to read'],
        ['Musik hören', 'to listen to music'],
        ['Freunde treffen', 'to meet friends'],
        ['ins Kino gehen', 'to go to the cinema'],
      ]),
    ],
    test: [
      match('Was passt zusammen?', [
        ['Fußball', 'spielen'],
        ['Rad', 'fahren'],
        ['Musik', 'hören'],
        ['Freunde', 'treffen'],
        ['ins Kino', 'gehen'],
      ]),
    ],
  },
  {
    kind: 'GRAMMAR',
    title: 'Ich kann gut schwimmen',
    ref: [B, 6, 3],
    learn: [
      grammar(
        'können, wollen, müssen',
        '„können“ = Fähigkeit oder Möglichkeit, „wollen“ = Wunsch oder Plan, „müssen“ = Pflicht. Bei „ich“ und „er/sie/es“ haben sie keine Endung.',
        {
          headers: ['Person', 'können', 'wollen', 'müssen'],
          rows: [
            ['ich', 'kann', 'will', 'muss'],
            ['du', 'kannst', 'willst', 'musst'],
            ['er / sie / es', 'kann', 'will', 'muss'],
            ['wir', 'können', 'wollen', 'müssen'],
          ],
        },
      ),
      grammar(
        'Wieder eine Klammer',
        'Das Modalverb steht auf Position 2, das zweite Verb im Infinitiv ganz am Ende: Ich kann gut schwimmen.',
      ),
    ],
    test: [
      order('Bilden Sie einen Satz.', ['Jonas', 'muss', 'die Wohnung', 'aufräumen', '.']),
      cloze(
        'Ergänzen Sie.',
        'Ich [kann] leider nicht Gitarre spielen. Das [will] ich bald lernen. Aber zuerst [muss] ich arbeiten.',
        ['könnt'],
      ),
    ],
  },
  {
    kind: 'TEXT',
    title: 'Wollen wir …?',
    ref: [B, 6, 4],
    learn: [
      dialogue('Nachrichten am Freitag', [
        'Jonas: Hey Samir! Am Samstag ist Stadtfest. Wollen wir zusammen hingehen?',
        'Samir: Gute Idee! Aber am Nachmittag kann ich nicht, da muss ich arbeiten.',
        'Jonas: Kein Problem. Hast du am Abend Lust?',
        'Samir: Ja, am Abend kann ich. Um acht?',
        'Jonas: Super. Und am Sonntag? Wollen wir wandern gehen?',
        'Samir: Tut mir leid, am Sonntag besuche ich meine Tante.',
      ]),
      tip(
        'Vorschläge',
        'Vorschlagen: „Wollen wir …?“, „Hast du Lust …?“. Wer ablehnt, sagt meistens, warum.',
      ),
    ],
    test: [
      choice('Lesen Sie die Nachrichten.', 'Wann gehen Jonas und Samir zum Stadtfest?', [
        'am Samstagnachmittag',
        '*am Samstagabend',
        'am Sonntag',
      ]),
      choice('Lesen Sie die Nachrichten.', 'Warum kann Samir am Sonntag nicht wandern?', [
        'Er muss arbeiten.',
        '*Er besucht seine Tante.',
        'Er hat keine Lust.',
      ]),
    ],
  },
]);
