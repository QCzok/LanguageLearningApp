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
   * Vier Stufen für die Schriftgröße des Fließtexts (A−/A+ im Lesekopf).
   * Der Zeilenabstand folgt daraus, statt eigene Werte zu führen – so bleibt
   * das Verhältnis von Größe zu Durchschuss auf jeder Stufe dasselbe.
   */
  textSizes: [16, 17.5, 19, 21] as const,
  lineHeightRatio: 1.62,

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
