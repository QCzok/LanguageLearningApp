import type { UnitSeed } from './chapter-beginner-1';

/**
 * Englisch, Beginner, Kapitel 3: „In town“
 *
 * Sich in einer fremden Stadt zurechtfinden: erst benennen, was es gibt
 * (there is/are), dann sagen, wo es liegt (Präpositionen), dann den Weg
 * dorthin erfragen (Imperativ) und zuletzt, wie man hinkommt.
 *
 * Übersetzungen wie in `english-chapter-beginner-1.ts`.
 */
const v = 1;

export const ENGLISH_BEGINNER_3_UNITS: UnitSeed[] = [
  // ====================================================== SEITE 1
  // Seite 1 – Orte in der Stadt und there is / there are.
  {
    order: 1,
    title: 'Around town',
    subtitle: 'Orte in der Stadt, there is / there are',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'en3-1-h1', type: 'HEADING', level: 1, text: 'Around town' },
        {
          id: 'en3-1-image',
          type: 'IMAGE',
          url: 'illustration:city-street',
          alt: 'Eine Straße mit Geschäften, einem Café und einer Bushaltestelle.',
          caption: 'A street in the city centre.',
        },
        {
          id: 'en3-1-text',
          type: 'TEXT',
          text: 'Karim writes to a friend: “My street in Manchester is great. There’s a small supermarket and there’s a café with very good coffee. There are two bus stops, and there’s a park near my flat. But there isn’t a cinema – and there aren’t any good restaurants!”',
          translations: {
            de: 'Karim schreibt einem Freund: „Meine Straße in Manchester ist toll. Es gibt einen kleinen Supermarkt und ein Café mit sehr gutem Kaffee. Es gibt zwei Bushaltestellen, und in der Nähe meiner Wohnung gibt es einen Park. Aber es gibt kein Kino – und keine guten Restaurants!“',
          },
        },
        {
          id: 'en3-1-vocab',
          type: 'VOCAB_LIST',
          title: 'Words: places in town',
          items: [
            { term: 'supermarket', translations: { de: 'der Supermarkt', es: 'el supermercado' } },
            { term: 'bank', translations: { de: 'die Bank', es: 'el banco' } },
            { term: 'post office', translations: { de: 'die Post', es: 'la oficina de correos' } },
            { term: 'station', translations: { de: 'der Bahnhof', es: 'la estación' } },
            { term: 'bus stop', translations: { de: 'die Bushaltestelle', es: 'la parada de autobús' } },
            { term: 'chemist’s', translations: { de: 'die Apotheke, die Drogerie', es: 'la farmacia' } },
            { term: 'hospital', translations: { de: 'das Krankenhaus', es: 'el hospital' } },
            { term: 'park', translations: { de: 'der Park', es: 'el parque' } },
            { term: 'cinema', translations: { de: 'das Kino', es: 'el cine' } },
            { term: 'museum', translations: { de: 'das Museum', es: 'el museo' } },
            { term: 'street', translations: { de: 'die Straße', es: 'la calle' } },
          ],
        },
        {
          id: 'en3-1-info-thereis',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'there is – there are',
          text: 'German says “es gibt” for one thing and for many. English counts: one thing → “there is” (short: “there’s”), more things → “there are”. In negatives and questions with plurals, English uses “any”: “There aren’t any restaurants.” – “Are there any shops?”',
          translations: {
            de: {
              title: 'there is – there are',
              text: 'Das Deutsche sagt „es gibt“ für eine Sache und für viele. Das Englische zählt: eine Sache → „there is“ (kurz: „there’s“), mehrere → „there are“. In Verneinungen und Fragen im Plural steht „any“: „There aren’t any restaurants.“ – „Are there any shops?“',
            },
          },
          table: {
            headers: ['', 'singular', 'plural'],
            rows: [
              ['+', 'There’s a park.', 'There are two cafés.'],
              ['–', 'There isn’t a cinema.', 'There aren’t any shops.'],
              ['?', 'Is there a bank?', 'Are there any hotels?'],
            ],
          },
        },
        {
          id: 'en3-1-cloze',
          type: 'CLOZE',
          instruction: 'Complete with is, are, isn’t or aren’t.',
          wordBank: ['is', 'are', 'isn’t', 'aren’t'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'In my street there ' },
            { kind: 'GAP', gapId: 't1', solution: ['is'], width: 5 },
            { kind: 'TEXT', text: ' a small supermarket and there ' },
            { kind: 'GAP', gapId: 't2', solution: ['are'], width: 5 },
            { kind: 'TEXT', text: ' two bus stops. There ' },
            { kind: 'GAP', gapId: 't3', solution: ['isn’t', "isn't"], width: 7 },
            { kind: 'TEXT', text: ' a cinema, and there ' },
            { kind: 'GAP', gapId: 't4', solution: ['aren’t', "aren't"], width: 7 },
            { kind: 'TEXT', text: ' any good restaurants.' },
          ],
        },
        {
          id: 'en3-1-info-an',
          type: 'INFO',
          variant: 'TIP',
          title: 'a or an?',
          text: 'Before a vowel sound, “a” becomes “an”: “a bank”, but “an hotel”? No – “a hotel”, because you say the h. And “an hour”, because you don’t. What counts is the sound, not the letter.',
          translations: {
            de: {
              title: 'a oder an?',
              text: 'Vor einem Vokallaut wird aus „a“ „an“: „a bank“, aber „an hotel“? Nein – „a hotel“, weil man das h spricht. Und „an hour“, weil man es nicht spricht. Es zählt der Laut, nicht der Buchstabe.',
            },
          },
          table: {
            headers: ['a', 'an'],
            rows: [
              ['a bank', 'an office'],
              ['a museum', 'an umbrella'],
              ['a hotel', 'an hour'],
              ['a university', 'an apple'],
            ],
          },
        },
        {
          id: 'en3-1-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct word.',
          question: 'There’s ___ old church in the town centre.',
          options: [
            { id: 'o1', text: 'a' },
            { id: 'o2', text: 'an' },
            { id: 'o3', text: 'any' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: '“old” begins with a vowel sound, so it is “an old church”. The article goes with the next word, not with the noun.',
          explanationTranslations: {
            de: '„old“ beginnt mit einem Vokallaut, also „an old church“. Der Artikel richtet sich nach dem nächsten Wort, nicht nach dem Nomen.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 2
  // Seite 2 – wo etwas liegt: Präpositionen des Ortes.
  {
    order: 2,
    title: 'Where is it?',
    subtitle: 'Präpositionen des Ortes',
    estimatedMinutes: 22,
    content: {
      version: v,
      blocks: [
        { id: 'en3-2-h1', type: 'HEADING', level: 1, text: 'Where is it?' },
        {
          id: 'en3-2-image',
          type: 'IMAGE',
          url: 'illustration:city-map',
          alt: 'Ein vereinfachter Stadtplan mit Straßen, einem Park und mehreren markierten Gebäuden.',
          caption: 'A map of the town centre.',
        },
        {
          id: 'en3-2-dlg',
          type: 'DIALOGUE',
          title: 'At the tourist information',
          lines: [
            { speaker: 'Yuki', text: 'Excuse me, where’s the museum?' },
            { speaker: 'Assistant', text: 'It’s in King Street, next to the bank.' },
            { speaker: 'Yuki', text: 'And is there a post office near here?' },
            { speaker: 'Assistant', text: 'Yes, there is. It’s opposite the station, between the café and the chemist’s.' },
            { speaker: 'Yuki', text: 'Great, thank you!' },
          ],
        },
        {
          id: 'en3-2-info-prep',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'Prepositions of place',
          text: 'These little words say where something is. English does not change the article after them – no “dem” or “der”: always “next to the bank”, “opposite the station”. With streets, British English says “in”: “in King Street”; with a house number, it is “at”: “at 12 King Street”.',
          translations: {
            de: {
              title: 'Präpositionen des Ortes',
              text: 'Diese kleinen Wörter sagen, wo etwas ist. Der Artikel ändert sich danach nicht – kein „dem“ oder „der“: immer „next to the bank“, „opposite the station“. Bei Straßen sagt das britische Englisch „in“: „in King Street“; mit Hausnummer „at“: „at 12 King Street“.',
            },
          },
          table: {
            headers: ['English', 'German'],
            rows: [
              ['next to', 'neben'],
              ['opposite', 'gegenüber'],
              ['between … and …', 'zwischen … und …'],
              ['near', 'in der Nähe von'],
              ['in front of', 'vor'],
              ['behind', 'hinter'],
              ['on the corner', 'an der Ecke'],
            ],
          },
        },
        {
          id: 'en3-2-match',
          type: 'MATCHING',
          instruction: 'Match the English with the German.',
          left: [
            { id: 'l1', text: 'behind the station' },
            { id: 'l2', text: 'opposite the bank' },
            { id: 'l3', text: 'in front of the cinema' },
            { id: 'l4', text: 'next to the park' },
          ],
          right: [
            { id: 'r1', text: 'hinter dem Bahnhof' },
            { id: 'r2', text: 'gegenüber der Bank' },
            { id: 'r3', text: 'vor dem Kino' },
            { id: 'r4', text: 'neben dem Park' },
          ],
          solution: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
        {
          id: 'en3-2-cloze',
          type: 'CLOZE',
          instruction: 'Read the dialogue again. Complete.',
          wordBank: ['in', 'next', 'opposite', 'between', 'behind'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: 'The museum is ' },
            { kind: 'GAP', gapId: 'w1', solution: ['in'], width: 4 },
            { kind: 'TEXT', text: ' King Street, ' },
            { kind: 'GAP', gapId: 'w2', solution: ['next'], width: 6 },
            { kind: 'TEXT', text: ' to the bank. The post office is ' },
            { kind: 'GAP', gapId: 'w3', solution: ['opposite'], width: 9 },
            { kind: 'TEXT', text: ' the station, ' },
            { kind: 'GAP', gapId: 'w4', solution: ['between'], width: 9 },
            { kind: 'TEXT', text: ' the café and the chemist’s.' },
          ],
        },
        {
          id: 'en3-2-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'The hotel is at number 5, the bank at number 7, the café at number 9. Where is the bank?',
          options: [
            { id: 'o1', text: 'It’s opposite the hotel.' },
            { id: 'o2', text: 'It’s between the hotel and the café.' },
            { id: 'o3', text: 'It’s behind the café.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'Number 7 is between number 5 and number 9 on the same side of the street – so the bank is between the hotel and the café.',
          explanationTranslations: {
            de: 'Nummer 7 liegt auf derselben Straßenseite zwischen Nummer 5 und Nummer 9 – die Bank ist also zwischen Hotel und Café.',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 3
  // Seite 3 – nach dem Weg fragen, Imperativ.
  {
    order: 3,
    title: 'How do I get to …?',
    subtitle: 'Nach dem Weg fragen, der Imperativ',
    estimatedMinutes: 24,
    content: {
      version: v,
      blocks: [
        { id: 'en3-3-h1', type: 'HEADING', level: 1, text: 'How do I get to …?' },
        {
          id: 'en3-3-image',
          type: 'IMAGE',
          url: 'illustration:signpost',
          alt: 'Ein Wegweiser mit mehreren Pfeilen, die in verschiedene Richtungen zeigen.',
          caption: 'Left, right or straight on?',
        },
        {
          id: 'en3-3-dlg',
          type: 'DIALOGUE',
          title: 'In the street',
          lines: [
            { speaker: 'Diego', text: 'Excuse me, how do I get to the station, please?' },
            { speaker: 'Woman', text: 'Go straight on and turn left at the traffic lights.' },
            { speaker: 'Diego', text: 'Left at the traffic lights …' },
            { speaker: 'Woman', text: 'Yes. Then take the second street on the right. The station is at the end of the street.' },
            { speaker: 'Diego', text: 'Is it far?' },
            { speaker: 'Woman', text: 'No, it’s about five minutes on foot.' },
            { speaker: 'Diego', text: 'Thanks a lot!' },
          ],
        },
        {
          id: 'en3-3-vocab',
          type: 'VOCAB_LIST',
          title: 'Words: directions',
          items: [
            { term: 'Excuse me, …', translations: { de: 'Entschuldigung, …', es: 'Perdone, …' } },
            { term: 'go straight on', translations: { de: 'geradeaus gehen', es: 'seguir recto' } },
            { term: 'turn left / right', translations: { de: 'links / rechts abbiegen', es: 'girar a la izquierda / derecha' } },
            { term: 'on the left / right', translations: { de: 'auf der linken / rechten Seite', es: 'a la izquierda / derecha' } },
            { term: 'traffic lights', translations: { de: 'die Ampel', es: 'el semáforo' } },
            { term: 'corner', translations: { de: 'die Ecke', es: 'la esquina' } },
            { term: 'at the end of', translations: { de: 'am Ende von', es: 'al final de' } },
            { term: 'far', translations: { de: 'weit', es: 'lejos' }, example: 'Is it far?' },
            { term: 'on foot', translations: { de: 'zu Fuß', es: 'a pie' } },
          ],
        },
        {
          id: 'en3-3-info-imperative',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'The imperative: turn left!',
          text: 'For instructions, English uses the verb without a subject: “Turn left.” “Go straight on.” It is the same for one person and for many, for friends and for strangers. The negative starts with “Don’t”: “Don’t turn right.” To sound polite, add “please”.',
          translations: {
            de: {
              title: 'Der Imperativ: turn left!',
              text: 'Für Anweisungen verwendet das Englische das Verb ohne Subjekt: „Turn left.“ „Go straight on.“ Die Form ist dieselbe für eine Person und für viele, für Freunde und für Fremde. Die Verneinung beginnt mit „Don’t“: „Don’t turn right.“ Höflicher wird es mit „please“.',
            },
          },
          table: {
            headers: ['+', '–'],
            rows: [
              ['Turn left.', 'Don’t turn left.'],
              ['Cross the street.', 'Don’t cross the street.'],
              ['Take the bus.', 'Don’t take the bus.'],
            ],
          },
        },
        {
          id: 'en3-3-order',
          type: 'ORDERING',
          instruction: 'Put the directions in the order of the dialogue.',
          items: [
            { id: 'd1', text: 'Go straight on.' },
            { id: 'd2', text: 'Turn left at the traffic lights.' },
            { id: 'd3', text: 'Take the second street on the right.' },
            { id: 'd4', text: 'The station is at the end of the street.' },
          ],
          solution: ['d1', 'd2', 'd3', 'd4'],
        },
        {
          id: 'en3-3-cloze',
          type: 'CLOZE',
          instruction: 'Complete the directions.',
          wordBank: ['Excuse', 'straight', 'turn', 'second', 'far'],
          caseSensitive: false,
          segments: [
            { kind: 'TEXT', text: '▸ ' },
            { kind: 'GAP', gapId: 'r1', solution: ['Excuse'], width: 8 },
            { kind: 'TEXT', text: ' me, how do I get to the park?\n▸ Go ' },
            { kind: 'GAP', gapId: 'r2', solution: ['straight'], width: 9 },
            { kind: 'TEXT', text: ' on and ' },
            { kind: 'GAP', gapId: 'r3', solution: ['turn'], width: 6 },
            { kind: 'TEXT', text: ' right at the corner. Then take the ' },
            { kind: 'GAP', gapId: 'r4', solution: ['second'], width: 8 },
            { kind: 'TEXT', text: ' street on the left.\n▸ Is it ' },
            { kind: 'GAP', gapId: 'r5', solution: ['far'], width: 5 },
            { kind: 'TEXT', text: '?\n▸ No, just five minutes.' },
          ],
        },
        {
          id: 'en3-3-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'You want to tell somebody not to cross the street here.',
          options: [
            { id: 'o1', text: 'Not cross the street here.' },
            { id: 'o2', text: 'Don’t cross the street here.' },
            { id: 'o3', text: 'You not cross the street here.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'The negative imperative always starts with “Don’t”: “Don’t cross the street.”',
          explanationTranslations: {
            de: 'Der verneinte Imperativ beginnt immer mit „Don’t“: „Don’t cross the street.“',
          },
        },
      ],
    },
  },

  // ====================================================== SEITE 4
  // Seite 4 – Verkehrsmittel und Ordnungszahlen.
  {
    order: 4,
    title: 'By bus or on foot?',
    subtitle: 'Verkehrsmittel und Ordnungszahlen',
    estimatedMinutes: 20,
    content: {
      version: v,
      blocks: [
        { id: 'en3-4-h1', type: 'HEADING', level: 1, text: 'By bus or on foot?' },
        {
          id: 'en3-4-text',
          type: 'TEXT',
          text: 'How do the students get to school? Anna goes by bike – it’s only ten minutes. Diego takes the tram. Yuki lives on the third floor of a big building near the school, so she walks. Karim goes by car because he takes his son to school first.',
          translations: {
            de: 'Wie kommen die Kursteilnehmenden zur Schule? Anna fährt mit dem Fahrrad – es sind nur zehn Minuten. Diego nimmt die Straßenbahn. Yuki wohnt im dritten Stock eines großen Gebäudes in der Nähe der Schule, deshalb geht sie zu Fuß. Karim fährt mit dem Auto, weil er zuerst seinen Sohn zur Schule bringt.',
          },
        },
        {
          id: 'en3-4-vocab',
          type: 'VOCAB_LIST',
          title: 'Words: getting around',
          items: [
            { term: 'by bus', translations: { de: 'mit dem Bus', es: 'en autobús' } },
            { term: 'by train', translations: { de: 'mit dem Zug', es: 'en tren' } },
            { term: 'by bike', translations: { de: 'mit dem Fahrrad', es: 'en bici' } },
            { term: 'by car', translations: { de: 'mit dem Auto', es: 'en coche' } },
            { term: 'tram', translations: { de: 'die Straßenbahn', es: 'el tranvía' } },
            { term: 'to walk', translations: { de: 'zu Fuß gehen', es: 'ir andando, caminar' } },
            { term: 'to take (the bus)', translations: { de: '(den Bus) nehmen', es: 'tomar, coger (el autobús)' } },
            { term: 'floor', translations: { de: 'das Stockwerk', es: 'el piso, la planta' }, example: 'I live on the third floor.' },
          ],
        },
        {
          id: 'en3-4-info-by',
          type: 'INFO',
          variant: 'TIP',
          title: 'by bus – but on foot',
          text: 'With transport, English uses “by” and no article: “by bus”, “by train”, “by car”. There is one exception: “on foot”. If you say which bus, you need an article: “I take the 42 bus.”',
          translations: {
            de: {
              title: 'by bus – aber on foot',
              text: 'Bei Verkehrsmitteln steht im Englischen „by“ ohne Artikel: „by bus“, „by train“, „by car“. Eine Ausnahme: „on foot“. Wenn man sagt, welcher Bus, braucht man einen Artikel: „I take the 42 bus.“',
            },
          },
        },
        {
          id: 'en3-4-choice',
          type: 'CHOICE',
          instruction: 'Choose the correct sentence.',
          question: 'How does Anna get to school?',
          options: [
            { id: 'o1', text: 'She goes with the bike.' },
            { id: 'o2', text: 'She goes by bike.' },
            { id: 'o3', text: 'She goes by the bike.' },
          ],
          multiple: false,
          solution: ['o2'],
          explanation: 'Transport goes with “by” and no article: “by bike”.',
          explanationTranslations: {
            de: 'Verkehrsmittel stehen mit „by“ und ohne Artikel: „by bike“.',
          },
        },
        {
          id: 'en3-4-info-ordinals',
          type: 'INFO',
          variant: 'GRAMMAR',
          title: 'first, second, third',
          text: 'Ordinal numbers say the position: the second street, the third floor. Most end in “-th”, but the first three are special. In short form you write the last two letters: 1st, 2nd, 3rd, 4th.',
          translations: {
            de: {
              title: 'first, second, third',
              text: 'Ordnungszahlen geben die Stelle an: die zweite Straße, der dritte Stock. Die meisten enden auf „-th“, die ersten drei sind aber besonders. In Ziffern schreibt man die letzten beiden Buchstaben dazu: 1st, 2nd, 3rd, 4th.',
            },
          },
          table: {
            headers: ['', '', ''],
            rows: [
              ['1st first', '4th fourth', '7th seventh'],
              ['2nd second', '5th fifth', '8th eighth'],
              ['3rd third', '6th sixth', '10th tenth'],
            ],
          },
        },
        {
          id: 'en3-4-match',
          type: 'MATCHING',
          instruction: 'Match the numbers.',
          left: [
            { id: 'z1', text: '1st' },
            { id: 'z2', text: '2nd' },
            { id: 'z3', text: '3rd' },
            { id: 'z4', text: '5th' },
          ],
          right: [
            { id: 'y1', text: 'first' },
            { id: 'y2', text: 'second' },
            { id: 'y3', text: 'third' },
            { id: 'y4', text: 'fifth' },
          ],
          solution: [
            { leftId: 'z1', rightId: 'y1' },
            { leftId: 'z2', rightId: 'y2' },
            { leftId: 'z3', rightId: 'y3' },
            { leftId: 'z4', rightId: 'y4' },
          ],
        },
      ],
    },
  },

  // ====================================================== SEITE 5
  // Seite 5 – Rückblick.
  {
    order: 5,
    title: 'Can you do it?',
    subtitle: 'Rückblick auf das ganze Kapitel',
    estimatedMinutes: 18,
    content: {
      version: v,
      blocks: [
        { id: 'en3-5-h1', type: 'HEADING', level: 1, text: 'Can you do it?' },
        {
          id: 'en3-5-intro',
          type: 'TEXT',
          text: 'The whole chapter again: places, there is/are, prepositions, directions and transport.',
          translations: {
            de: 'Das ganze Kapitel noch einmal: Orte, there is/are, Präpositionen, Wegbeschreibungen und Verkehrsmittel.',
          },
        },
        {
          id: 'en3-5-cloze',
          type: 'CLOZE',
          instruction: 'Complete the text.',
          wordBank: ['There’s', 'are', 'opposite', 'by', 'any'],
          caseSensitive: false,
          segments: [
            { kind: 'GAP', gapId: 'f1', solution: ['There’s', "There's"], width: 8 },
            { kind: 'TEXT', text: ' a nice park in my town, and there ' },
            { kind: 'GAP', gapId: 'f2', solution: ['are'], width: 5 },
            { kind: 'TEXT', text: ' three cafés. My favourite café is ' },
            { kind: 'GAP', gapId: 'f3', solution: ['opposite'], width: 9 },
            { kind: 'TEXT', text: ' the station. There aren’t ' },
            { kind: 'GAP', gapId: 'f4', solution: ['any'], width: 5 },
            { kind: 'TEXT', text: ' museums. I usually go to work ' },
            { kind: 'GAP', gapId: 'f5', solution: ['by'], width: 4 },
            { kind: 'TEXT', text: ' tram.' },
          ],
        },
        {
          id: 'en3-5-match',
          type: 'MATCHING',
          instruction: 'Match the question with the answer.',
          left: [
            { id: 'm1', text: 'Is there a bank near here?' },
            { id: 'm2', text: 'Where’s the post office?' },
            { id: 'm3', text: 'How do I get to the station?' },
            { id: 'm4', text: 'Is it far?' },
          ],
          right: [
            { id: 'x1', text: 'Yes, there’s one in Park Road.' },
            { id: 'x2', text: 'It’s next to the supermarket.' },
            { id: 'x3', text: 'Go straight on and turn left.' },
            { id: 'x4', text: 'No, it’s five minutes on foot.' },
          ],
          solution: [
            { leftId: 'm1', rightId: 'x1' },
            { leftId: 'm2', rightId: 'x2' },
            { leftId: 'm3', rightId: 'x3' },
            { leftId: 'm4', rightId: 'x4' },
          ],
        },
        {
          id: 'en3-5-choice',
          type: 'CHOICE',
          instruction: 'Mark all the correct sentences.',
          question: 'Which of these sentences are correct?',
          options: [
            { id: 'r1', text: 'There are two hotels in the town.' },
            { id: 'r2', text: 'There is three shops.' },
            { id: 'r3', text: 'Turn right at the traffic lights.' },
            { id: 'r4', text: 'The bank is next the café.' },
          ],
          multiple: true,
          solution: ['r1', 'r3'],
          explanation: 'For more than one thing it is “there are”: “There are three shops.” And “next” needs “to”: “next to the café”.',
          explanationTranslations: {
            de: 'Für mehrere Dinge heißt es „there are“: „There are three shops.“ Und „next“ braucht „to“: „next to the café“.',
          },
        },
        {
          id: 'en3-5-writing',
          type: 'WRITING',
          instruction: 'Describe your street or your town.',
          prompt:
            'Write four to six sentences: What is there? What isn’t there? Where is your favourite place? How do you get to work or school? Use “there is/are” and prepositions.',
          minWords: 20,
          maxWords: 90,
          aiFeedback: true,
          sampleAnswer:
            'I live in a small town near Stuttgart. There’s a supermarket, a bakery and a nice park. There isn’t a cinema, and there aren’t any big shops. My favourite place is the café opposite the station. I go to work by train.',
        },
      ],
    },
  },
];
