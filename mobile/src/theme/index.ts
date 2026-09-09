import { Platform } from 'react-native';

/**
 * Design-Tokens der App. Alle Farben, Abstände und Textstile kommen von hier –
 * Komponenten definieren keine eigenen Literale.
 */
export const colors = {
  primary: '#2563EB',
  primaryDark: '#1D4ED8',
  primarySoft: '#DBEAFE',

  success: '#059669',
  successSoft: '#D1FAE5',
  warning: '#D97706',
  warningSoft: '#FEF3C7',
  danger: '#DC2626',
  dangerSoft: '#FEE2E2',
  premium: '#7C3AED',
  premiumSoft: '#EDE9FE',
  info: '#0891B2',
  infoSoft: '#CFFAFE',

  background: '#F8FAFC',
  surface: '#FFFFFF',
  surfaceAlt: '#F1F5F9',
  border: '#E2E8F0',

  text: '#0F172A',
  textMuted: '#64748B',
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

export const typography = {
  display: { fontSize: 30, fontWeight: '700' as const, lineHeight: 36 },
  title: { fontSize: 22, fontWeight: '700' as const, lineHeight: 28 },
  heading: { fontSize: 17, fontWeight: '600' as const, lineHeight: 24 },
  body: { fontSize: 15, fontWeight: '400' as const, lineHeight: 22 },
  bodyStrong: { fontSize: 15, fontWeight: '600' as const, lineHeight: 22 },
  caption: { fontSize: 13, fontWeight: '400' as const, lineHeight: 18 },
  label: { fontSize: 12, fontWeight: '600' as const, lineHeight: 16 },
} as const;

/**
 * Eigene Tokens für die Lehrwerksseite. Das Lernheft soll nach Papier aussehen,
 * nicht nach App-Oberfläche: wärmerer Untergrund, gedruckte Typografie,
 * Seitenränder statt Kartenabstände.
 *
 * Die Farben sind bewusst Druckfarben, keine Bildschirmfarben: gebrochenes
 * Weiß statt Reinweiß, gedeckte Tiefdruck-Töne statt gesättigtem UI-Blau. Ein
 * Lehrwerk wird in zwei, höchstens drei Farben gedruckt – jede weitere Farbe
 * nimmt der Seite den Buchcharakter.
 */
export const book = {
  /** Referenzbreite einer Seite in Buch-Einheiten. Alles darin rechnet in dieser Skala. */
  pageWidth: 820,
  /** Seitenverhältnis wie DIN A4. */
  pageRatio: 1.414,
  margin: 58,

  paper: '#FCFAF4',
  /** Leicht abgetönte Fläche für Kästen – wie ein zweiter Papierton im Druck. */
  tint: '#F5F1E6',
  tintDeep: '#EEE8D9',
  paperEdge: '#E2DBCA',
  rule: '#DCD4C2',
  /** Hilfslinien zum Schreiben, deutlich blasser als eine Trennlinie. */
  ruleFaint: '#E9E3D5',
  ink: '#1F1B16',
  inkSoft: '#5C554A',
  inkFaint: '#918978',

  /** Akzent je Buchteil – Kursbuch Tiefblau, Arbeitsbuch Tiefgrün. */
  kursbuch: '#1E3D6B',
  kursbuchSoft: '#EDF1F7',
  arbeitsbuch: '#2C5B4C',
  arbeitsbuchSoft: '#EDF3F0',

  /** Korrekturfarben – Rotstift und Grünstift, nicht Ampelfarben. */
  correct: '#2C6047',
  wrong: '#94302A',
  attention: '#8A5A1E',
} as const;

/**
 * Karteikarten des Vokabeltrainers.
 *
 * Eine echte Karteikarte ist kein weißes Rechteck: leicht cremefarbener
 * Karton, oben eine rote Kopflinie, darunter blasse blaue Schreiblinien, ein
 * scharfer Rand und ein kurzer Schatten, weil sie auf einem Stapel liegt.
 * Genau diese fünf Merkmale bilden die Tokens hier ab.
 */
export const flashcard = {
  paper: '#FDFBF5',
  paperBack: '#F7F3E8',
  edge: '#E3DCCA',
  /** Rote Kopflinie – das Erkennungszeichen der Karteikarte. */
  headRule: '#C2564B',
  /** Blasse Schreiblinien. */
  rule: '#D6DEE8',
  ink: '#221F1A',
  inkSoft: '#5E574B',
  /** Farbe der Stapel-Schichten hinter der obersten Karte. */
  stack: '#EFE9DA',
} as const;

/** Serifenschrift für Fließtext – der stärkste Hebel für den Buchcharakter. */
export const bookFont = Platform.select({
  ios: 'Georgia',
  android: 'serif',
  default: 'Georgia, "Iowan Old Style", "Times New Roman", serif',
});

/**
 * Serifenlose Schrift für den „Apparat“ der Seite: Kolumnentitel,
 * Arbeitsanweisungen, Kastenetiketten. Die Trennung Fließtext = Serife,
 * Apparat = Grotesk ist Lehrwerkskonvention und trägt den gedruckten Eindruck
 * genauso wie die Serifenschrift selbst.
 */
export const bookSans = Platform.select({
  ios: 'Avenir Next',
  android: 'sans-serif-medium',
  default: '"Avenir Next", "Segoe UI", system-ui, sans-serif',
});

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
    shadowColor: '#0F172A',
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
} as const;

/** Farbe pro GER-Niveau – wird in Badges und Filtern wiederverwendet. */
export const levelColors: Record<string, string> = {
  A1: '#10B981',
  A2: '#22C55E',
  B1: '#3B82F6',
  B2: '#6366F1',
  C1: '#A855F7',
  C2: '#EC4899',
};
