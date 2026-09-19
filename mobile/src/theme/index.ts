import { Platform } from 'react-native';

/**
 * Design-Tokens der App. Alle Farben, Abstände und Textstile kommen von hier –
 * Komponenten definieren keine eigenen Literale.
 *
 * Einheitlicher Stil der ganzen App: Montserrat als alleinige Schrift,
 * `#0D0D0D` als Textfarbe, `#F2F2F2` als Bildschirmhintergrund, `#73030D`
 * (ein tiefes Weinrot) als Akzent- und Button-Farbe. Karten heben sich als
 * reines Weiß vom Hintergrund ab statt eine eigene Tönung zu tragen – das
 * hält den Auftritt ruhig und lässt die Akzentfarbe als einzigen Farbmoment
 * wirken, was den elegant-zurückhaltenden Charakter ausmacht. Halbtöne
 * (Soft-Varianten, Grautöne) sind bewusst aus derselben Familie abgeleitet,
 * nicht frei gewählt, damit nichts im Bild gegen die Leitfarbe konkurriert.
 */
export const colors = {
  primary: '#73030D',
  primaryDark: '#4D0209',
  primarySoft: '#F3D9DB',

  success: '#2F6F4F',
  successSoft: '#DEEBE3',
  warning: '#8A5A1E',
  warningSoft: '#F1E4CF',
  danger: '#B23A2E',
  dangerSoft: '#F3DBD7',
  premium: '#5C3D74',
  premiumSoft: '#E7E0ED',
  info: '#3F5163',
  infoSoft: '#E2E5E9',

  background: '#F2F2F2',
  /** Deutlich heller als der App-Hintergrund – fast weißes Papier, für längere Lesetexte, wo mehr Helligkeit die Lesbarkeit verbessert. */
  readingBackground: '#FCFBF9',
  surface: '#FFFFFF',
  surfaceAlt: '#E8E8E8',
  border: '#DBDBDB',

  text: '#0D0D0D',
  textMuted: '#6B6B6B',
  textInverse: '#FFFFFF',
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
} as const;

export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 999,
} as const;

/**
 * Montserrat in vier Schnitten – reicht für die ganze App, von Fließtext bis
 * Überschrift. Auf iOS/Android muss jeder Schnitt unter seinem exakten,
 * von `expo-font` geladenen Namen angesprochen werden (`Montserrat_700Bold`
 * etc.); ein allgemeiner Name „Montserrat“ fände dort keine Schriftdatei. Im
 * Web dagegen lädt `WebFontLoader` (siehe `navigation/WebLayout`) die
 * Familie „Montserrat“ selbst über Google Fonts nach – dort funktioniert der
 * literale Name kombiniert mit einer beliebigen `fontWeight`-Zahl wie bei
 * jeder Web-Schrift.
 */
export const fontFamily = {
  regular: Platform.select({ web: "'Montserrat', sans-serif", default: 'Montserrat_400Regular' }),
  medium: Platform.select({ web: "'Montserrat', sans-serif", default: 'Montserrat_500Medium' }),
  semiBold: Platform.select({ web: "'Montserrat', sans-serif", default: 'Montserrat_600SemiBold' }),
  bold: Platform.select({ web: "'Montserrat', sans-serif", default: 'Montserrat_700Bold' }),

  /**
   * Die Lese-Antiqua – die einzige Ausnahme von der Montserrat-Regel, und nur
   * im Leser der Bibliothek (siehe `readerThemes`).
   *
   * Ein E-Book-Leser liest sich falsch in einer Grotesk: gedruckte Bücher sind
   * in einer Antiqua gesetzt, und genau diese Anmutung soll der Lesebereich
   * haben. Bewusst eine Systemschrift statt einer nachgeladenen Datei – jedes
   * Zielsystem bringt eine brauchbare Antiqua mit (Georgia auf iOS und im
   * Browser, Noto Serif hinter Androids „serif“), und eine weitere
   * Schriftdatei würde den App-Start verlängern, um eine Seite zu bedienen.
   */
  serif: Platform.select({
    web: "Georgia, 'Iowan Old Style', 'Times New Roman', serif",
    ios: 'Georgia',
    default: 'serif',
  }),
} as const;

export const typography = {
  display: { fontFamily: fontFamily.bold, fontSize: 30, fontWeight: '700' as const, lineHeight: 36 },
  title: { fontFamily: fontFamily.bold, fontSize: 22, fontWeight: '700' as const, lineHeight: 28 },
  heading: { fontFamily: fontFamily.semiBold, fontSize: 17, fontWeight: '600' as const, lineHeight: 24 },
  body: { fontFamily: fontFamily.regular, fontSize: 15, fontWeight: '400' as const, lineHeight: 22 },
  bodyStrong: { fontFamily: fontFamily.semiBold, fontSize: 15, fontWeight: '600' as const, lineHeight: 22 },
  caption: { fontFamily: fontFamily.regular, fontSize: 13, fontWeight: '400' as const, lineHeight: 18 },
  label: { fontFamily: fontFamily.semiBold, fontSize: 12, fontWeight: '600' as const, lineHeight: 16 },
} as const;

/**
 * Eigene Tokens für die Lehrwerksseite. Das Lehrwerk soll weiterhin nach
 * Papier aussehen, nicht nach App-Oberfläche – aber in denselben Farben wie
 * der Rest der App: „Tinte“ ist exakt die App-Textfarbe, das Papier reines
 * Weiß wie jede andere Fläche.
 *
 * Farbe trägt hier nur eines: das Buch. Jedes der vier Bücher hat einen
 * eigenen Rückenton (siehe `bookColors`), und der taucht auf jeder Seite des
 * Buchs als Haarlinie unter dem Kolumnentitel wieder auf – so wie ein
 * gedruckter Band seine Farbe vom Regal bis zur letzten Seite mitnimmt.
 */
export const book = {
  /**
   * Referenzbreite für Stiftnotizen auf einer Heftseite.
   *
   * Die Seite selbst wird nicht mehr skaliert, sondern fließt in der Breite
   * des Geräts (siehe `BookPage`) – nur die handschriftlichen Notizen
   * darüber brauchen ein geräteunabhängiges Koordinatensystem, damit eine auf
   * dem Telefon gezeichnete Linie auf dem Tablet an derselben Stelle über
   * demselben Wort sitzt. Diese Zahl ist dieses System.
   */
  pageWidth: 820,
  /** Seitenverhältnis wie DIN A4. */
  pageRatio: 1.414,
  /** Rand zwischen Papierkante und Satzspiegel, in Gerätepunkten. */
  margin: 20,
  /** Abstand zwischen zwei Blöcken der Seite. */
  blockGap: 26,

  paper: '#FFFFFF',
  /** Leicht abgetönte Fläche für Kästen – wie der App-Hintergrund, nur auf der Seite. */
  tint: '#F2F2F2',
  tintDeep: '#E8E8E8',
  paperEdge: '#DBDBDB',
  rule: '#DBDBDB',
  /** Hilfslinien zum Schreiben, deutlich blasser als eine Trennlinie. */
  ruleFaint: '#E8E8E8',
  ink: '#0D0D0D',
  inkSoft: '#6B6B6B',
  inkFaint: '#9A9A9A',


  /**
   * Zwei weitere Druckfarben, mit denen die Seite auskommt: die Leitfarbe und
   * ein ruhiger Schieferton. Sie tragen, was auf jeder Seite gleich aussehen
   * muss, egal aus welchem Buch sie stammt – die Artikelfarben der/die/das,
   * die Figuren der Illustrationen, die Etiketten der Kästen. (Vorher hießen
   * sie `kursbuch` und `arbeitsbuch`; benannt war damit ein Buchteil, den es
   * nicht mehr gibt, gemeint war immer schon die Farbe.)
   */
  printRed: '#73030D',
  printRedSoft: '#F3D9DB',
  printSlate: '#33363B',
  printSlateSoft: '#E4E4E5',

  /** Korrekturfarben – dieselben wie überall in der App (Erfolg/Warnung/Fehler). */
  correct: '#2F6F4F',
  wrong: '#B23A2E',
  attention: '#8A5A1E',
} as const;

/**
 * Karteikarten des Vokabeltrainers.
 *
 * Eine echte Karteikarte ist kein weißes Rechteck: leicht getönter Karton,
 * oben eine Kopflinie in der Leitfarbe, darunter blasse Schreiblinien, ein
 * scharfer Rand und ein kurzer Schatten, weil sie auf einem Stapel liegt.
 * Genau diese fünf Merkmale bilden die Tokens hier ab.
 */
export const flashcard = {
  paper: '#FFFFFF',
  paperBack: '#F2F2F2',
  edge: '#DBDBDB',
  /** Kopflinie in der Leitfarbe – das Erkennungszeichen der Karteikarte. */
  headRule: '#73030D',
  /** Blasse Schreiblinien. */
  rule: '#E8E8E8',
  ink: '#0D0D0D',
  inkSoft: '#6B6B6B',
  /** Farbe der Stapel-Schichten hinter der obersten Karte. */
  stack: '#E8E8E8',
} as const;

/** Fließtext-Schrift – auf jeder Seite dieselbe Montserrat-Familie. */
export const bookFont = fontFamily.regular;

/**
 * Schrift für den „Apparat“ der Seite: Kolumnentitel, Arbeitsanweisungen,
 * Kastenetiketten. Ein kräftigerer Schnitt derselben Familie genügt, um sich
 * vom Fließtext abzuheben – eine zweite Schriftart wäre hier Unruhe, kein
 * Gewinn.
 */
export const bookSans = fontFamily.semiBold;

/** Etikett über einem Kasten: gesperrte Versalien, wie im Lehrwerk gesetzt. */
export const bookLabel = {
  fontFamily: bookSans,
  fontSize: 13,
  fontWeight: '700' as const,
  letterSpacing: 1.6,
  textTransform: 'uppercase' as const,
} as const;

export const shadow = {
  card: {
    shadowColor: '#0D0D0D',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  /**
   * Tiefer als `card` – für Flächen, die als Gegenstand gelesen werden sollen
   * statt als Abschnitt der Oberfläche: das Buchcover im Regal der
   * Bibliothek, der Vorspann einer Lesestrecke.
   */
  lift: {
    shadowColor: '#0D0D0D',
    shadowOpacity: 0.16,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 5,
  },
} as const;

/**
 * Farbe pro GER-Niveau – eine Verdichtung der Leitfarbe statt sechs
 * unabhängiger Regenbogenfarben: A1 der hellste, kaum gesättigte Ton, C2 die
 * volle Leitfarbe in ihrer dunkelsten Abstufung. Der Fortschritt durchs
 * Niveau liest sich so auch farblich als „tiefer werdend“.
 */
export const levelColors: Record<string, string> = {
  A1: '#C88089',
  A2: '#B35A63',
  B1: '#9C3F49',
  B2: '#85222B',
  C1: '#73030D',
  C2: '#4D0209',
};

/**
 * Farbe pro Buch – der Rückenton, an dem man einen Band im Regal wiedererkennt.
 *
 * Die drei Kursbücher folgen derselben Verdichtung wie die Niveaus, aus denen
 * sie entstanden sind: Beginner der hellste Ton, Advanced die Leitfarbe in
 * ihrer vollen Tiefe. Das Grammatikbuch steht quer zu dieser Reihe und
 * bekommt deshalb als einziges eine andere Farbe – ein ruhiges Tintenblau,
 * das sich nicht in die Stufenfolge einreiht, weil es keine Stufe ist.
 */
export const bookColors = {
  BEGINNER: { accent: '#B35A63', soft: '#F4E1E3' },
  INTERMEDIATE: { accent: '#8E2833', soft: '#F1D7D9' },
  ADVANCED: { accent: '#5E040D', soft: '#EBD2D4' },
  GRAMMAR: { accent: '#2B4B6F', soft: '#DCE5EF' },
} as const;

/**
 * Tokens der Lesestrecke – des Bereichs „Lesen“.
 *
 * Ein Lesetext soll nach Zeitschriftenseite aussehen, nicht nach App-Liste:
 * warmes Papier statt des grauen App-Hintergrunds, Haarlinien statt Kästen,
 * ein Vorspann vor dem eigentlichen Text und eine Schriftgröße, die der
 * Lesende selbst einstellt. Die Farben bleiben die der App – nur das Papier
 * ist eine Spur wärmer als jede andere Fläche, weil längere Texte davon
 * spürbar ruhiger werden.
 */
export const reading = {
  paper: colors.readingBackground,
  /** Leicht abgetönt – für Vorspann, Übersetzung und Worterklärungen. */
  paperDeep: '#F5F3EF',
  edge: '#EAE7E0',
  /** Haarlinie zwischen zwei Blöcken; deutlich blasser als eine Rahmenlinie. */
  rule: '#E7E3DB',
  ink: colors.text,
  inkSoft: '#5E5A54',
  inkFaint: '#968F86',

  /**
   * Stufen für die Schriftgröße des Fließtexts (A−/A+ im Leser).
   *
   * Sieben statt vier, weil das die Spanne ist, die ein E-Book-Leser abdecken
   * muss: von „viel Text auf einmal“ bis zur Großschrift, die ohne Brille
   * lesbar bleibt.
   */
  textSizes: [15, 16.5, 18, 19.5, 21, 23, 25.5] as const,
  /** Voreinstellung – die dritte Stufe, wie im Buchdruck eine ruhige Werkgröße. */
  defaultSizeStep: 2,
  /**
   * Drei Durchschüsse, aus denen der Lesende wählt (eng/normal/weit). Der
   * Zeilenabstand bleibt ein Verhältnis zur Schriftgröße, statt eigene Werte
   * zu führen – so stimmt das Bild auf jeder Größenstufe.
   */
  lineHeights: [1.42, 1.62, 1.9] as const,
  lineHeightRatio: 1.62,
  /** Seitenrand in drei Stufen (schmal/normal/breit), zusätzlich zum Grundrand. */
  margins: [0, 16, 34] as const,

  /**
   * Maximale Zeilenbreite. Auf dem Telefon greift sie nie, auf dem Web-Layout
   * verhindert sie die überlange Zeile, die kein Auge mehr zurückfindet.
   */
  measure: 660,
} as const;

/** Etikett über einem Block der Lesestrecke: gesperrte Versalien, wie im Druck. */
export const readingLabel = {
  fontFamily: fontFamily.semiBold,
  fontSize: 11,
  fontWeight: '700' as const,
  letterSpacing: 1.4,
  textTransform: 'uppercase' as const,
} as const;

// --------------------------------------------------------- Leser (Kindle-Art)

export type ReaderThemeName = 'paper' | 'sepia' | 'green' | 'night';

/**
 * Ein Farbschema des Lesers.
 *
 * Gemeint ist genau das, was ein E-Book-Leser unter „Farbe“ anbietet: nicht
 * ein Akzent, der ausgetauscht wird, sondern ein komplettes Papier samt Tinte.
 * Deshalb trägt jedes Schema seinen ganzen Satz an Flächen und Tönen – die
 * Lesestrecke greift im Betrieb auf kein anderes Farbtoken mehr zu.
 */
export type ReaderTheme = {
  name: ReaderThemeName;
  /** Das Papier, auf dem der Text steht – die Fläche des ganzen Bildschirms. */
  paper: string;
  /** Eine Spur abgesetzt: Übersetzungskästen, Worterklärung, Bedienleisten. */
  paperDeep: string;
  /** Rahmenlinie eines Kastens. */
  edge: string;
  /** Haarlinie zwischen zwei Blöcken – blasser als `edge`. */
  rule: string;
  ink: string;
  inkSoft: string;
  inkFaint: string;
  /** Die Farbe für Verweise (erklärte Wörter), Initiale und Fortschritt. */
  accent: string;
  /** Hinterlegung des gerade erklärten Worts. */
  accentSoft: string;
  /** Schrift auf der Akzentfläche. */
  accentInk: string;
  /** Hinterlegung der ein-/ausblendbaren Leisten – leicht vom Papier abgesetzt. */
  chrome: string;
  /** Wie die Statusleiste des Systems über diesem Papier zu zeichnen ist. */
  statusBar: 'dark' | 'light';
  /** Abdunkelung hinter der Worterklärung und dem Einstellblatt. */
  scrim: string;
};

/**
 * Die vier Papiere des Lesers – dieselbe Auswahl, die ein Kindle anbietet:
 * Weiß, Sepia, Grün und Nacht.
 *
 * Sie sind keine vier Geschmacksrichtungen, sondern vier Lesesituationen:
 * Weiß am Tag, Sepia für lange Strecken (warmes Papier ermüdet weniger),
 * Grün als der ruhigste Kontrast bei Kunstlicht, Nacht im Dunkeln, wo jede
 * helle Fläche blendet. Deshalb ist auch die Tinte nie reines Schwarz auf
 * reinem Weiß: gedruckte Bücher sind es auch nicht, und der weichere Kontrast
 * ist genau das, was die Seite ruhig macht.
 *
 * Die Leitfarbe der App (`colors.primary`) trägt jedes Schema in der Tiefe
 * mit, die sein Papier verlangt – auf dem Nachtpapier wäre das Weinrot der
 * App ein schwarzer Fleck, dort steht dieselbe Farbe aufgehellt.
 */
export const readerThemes: Record<ReaderThemeName, ReaderTheme> = {
  paper: {
    name: 'paper',
    paper: '#FCFBF9',
    paperDeep: '#F3F1EC',
    edge: '#E4E0D8',
    rule: '#E7E3DB',
    ink: '#191715',
    inkSoft: '#5E5A54',
    inkFaint: '#968F86',
    accent: colors.primary,
    accentSoft: '#F3D9DB',
    accentInk: '#FFFFFF',
    chrome: '#FFFFFF',
    statusBar: 'dark',
    scrim: 'rgba(13, 13, 13, 0.14)',
  },
  sepia: {
    name: 'sepia',
    paper: '#F4EBD8',
    paperDeep: '#EDE2CA',
    edge: '#DDCFB2',
    rule: '#E1D4B9',
    ink: '#33291C',
    inkSoft: '#6A5B44',
    inkFaint: '#9C8C70',
    accent: '#8A2B18',
    accentSoft: '#E6D0B8',
    accentInk: '#F8F2E4',
    chrome: '#F9F2E3',
    statusBar: 'dark',
    scrim: 'rgba(51, 41, 28, 0.16)',
  },
  green: {
    name: 'green',
    paper: '#E3EDDF',
    paperDeep: '#D8E5D3',
    edge: '#C2D3BC',
    rule: '#CBD9C5',
    ink: '#23301F',
    inkSoft: '#4E6148',
    inkFaint: '#7E9176',
    accent: '#7A2A22',
    accentSoft: '#CEDEC8',
    accentInk: '#F2F7F0',
    chrome: '#EBF3E8',
    statusBar: 'dark',
    scrim: 'rgba(35, 48, 31, 0.16)',
  },
  night: {
    name: 'night',
    paper: '#121315',
    paperDeep: '#1C1E21',
    edge: '#33373C',
    rule: '#2B2F33',
    ink: '#D5D1CA',
    inkSoft: '#9C978F',
    inkFaint: '#6E6A65',
    accent: '#D98D86',
    accentSoft: '#33272A',
    accentInk: '#17100F',
    chrome: '#1C1E21',
    statusBar: 'light',
    scrim: 'rgba(0, 0, 0, 0.45)',
  },
};

export const READER_THEME_NAMES = Object.keys(readerThemes) as ReaderThemeName[];
