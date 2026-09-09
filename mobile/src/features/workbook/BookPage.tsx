import React, { ReactNode } from 'react';
import { Text, View } from 'react-native';
import type { UnitSection } from '@lingua/shared';
import { book, bookFont, bookLabel, bookSans, colors, spacing } from '../../theme';
import { CheckMark } from './BookIcons';

/**
 * Die Lehrwerksseite.
 *
 * Rendert Papier statt App-Oberfläche: warmer Untergrund, gedruckte Kopfzeile
 * mit Kapitel- und Buchteilangabe, echte Seitenränder und eine Fußzeile mit
 * Seitenzahl. Alles darin rechnet in Buch-Einheiten (`book.pageWidth`), damit
 * eine Seite auf jedem Gerät gleich aussieht; die Skalierung auf die
 * Bildschirmbreite übernimmt der aufrufende Screen.
 *
 * Die Gestaltung folgt der Arbeitsteilung eines gedruckten Lehrwerks:
 * Fließtext in der Serifenschrift, der ganze „Apparat“ ringsum – Kolumnentitel,
 * Kapitelzahl, Etiketten – in gesperrter Grotesk. Farbe trägt nur der Buchteil,
 * und auch der nur als schmaler Griffregister-Streifen und eine Haarlinie.
 */
export const SECTION_THEME: Record<UnitSection, { accent: string; soft: string; label: string }> = {
  KURSBUCH: { accent: book.kursbuch, soft: book.kursbuchSoft, label: 'Kursbuch' },
  ARBEITSBUCH: { accent: book.arbeitsbuch, soft: book.arbeitsbuchSoft, label: 'Arbeitsbuch' },
};

export function BookPage({
  section,
  chapterTitle,
  level,
  chapterOrder,
  unitTitle,
  unitSubtitle,
  pageNumber,
  children,
  onLayoutHeight,
}: {
  section: UnitSection;
  chapterTitle: string;
  level: string;
  chapterOrder: number;
  unitTitle: string;
  unitSubtitle?: string | null;
  pageNumber: number;
  children: ReactNode;
  onLayoutHeight?: (height: number) => void;
}) {
  const theme = SECTION_THEME[section];

  return (
    <View
      style={pageStyle}
      onLayout={(event) => onLayoutHeight?.(event.nativeEvent.layout.height)}
    >
      {/* Farbiger Randstreifen wie der Griffregister-Balken eines Lehrwerks. */}
      <View style={[edgeStripe, { backgroundColor: theme.accent }]} />

      <View style={{ paddingHorizontal: book.margin, paddingTop: 44, paddingBottom: 26 }}>
        {/*
          Kolumnentitel: links der Buchteil, rechts das Kapitel. Beides klein
          und gesperrt gesetzt – im Buch führt diese Zeile, sie ruft nicht.
        */}
        <View style={runningHead}>
          <Text style={[runningHeadText, { color: theme.accent }]}>{theme.label}</Text>
          <Text style={runningHeadMeta}>
            {level}  ·  Kapitel {chapterOrder}
          </Text>
        </View>

        <View style={[headRule, { backgroundColor: theme.accent }]} />

        {/* Die Kapitelzahl steht als Ziffer neben dem Titel, wie eine
            Lektionsnummer im Buch – nicht als Bildchen. */}
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', gap: 20, marginTop: 22 }}>
          <View style={[chapterNumeral, { borderColor: theme.accent }]}>
            <Text style={[chapterNumeralText, { color: theme.accent }]}>{chapterOrder}</Text>
          </View>

          <View style={{ flex: 1, gap: 6 }}>
            <Text style={chapterLine}>{chapterTitle}</Text>
            <Text style={unitTitleStyle}>{unitTitle}</Text>
            {unitSubtitle ? <Text style={unitSubtitleStyle}>{unitSubtitle}</Text> : null}
          </View>
        </View>
      </View>

      <View style={{ paddingHorizontal: book.margin, gap: 34 }}>{children}</View>

      <View style={footer}>
        <View style={footerRule} />
        <Text style={pageNumberStyle}>{pageNumber}</Text>
      </View>
    </View>
  );
}

/**
 * Nummerierter Aufgabenkopf, wie in einem Arbeitsbuch: Ziffer im Kreis,
 * daneben die Arbeitsanweisung. Die Anweisung steht in der Grotesk – sie ist
 * Anleitung, nicht Lesetext, und hebt sich dadurch vom Übungsmaterial ab.
 */
export function ExerciseNumber({
  number,
  instruction,
  accent,
  status,
}: {
  number: number;
  instruction: string;
  accent: string;
  status?: 'correct' | 'partial';
}) {
  const badgeColor =
    status === 'correct' ? book.correct : status === 'partial' ? book.attention : accent;

  return (
    <View style={{ flexDirection: 'row', alignItems: 'flex-start', gap: 15 }}>
      <View style={[numberBadge, { backgroundColor: badgeColor }]}>
        {status === 'correct' ? (
          <CheckMark color="#FFFFFF" size={17} />
        ) : (
          <Text style={numberText}>{number}</Text>
        )}
      </View>
      <Text style={instructionStyle}>{instruction}</Text>
    </View>
  );
}

/** Überschrift innerhalb der Seite, im Stil einer Lehrwerks-Zwischenüberschrift. */
export function SectionHeading({ text, accent }: { text: string; accent: string }) {
  return (
    <View style={{ gap: 9 }}>
      <Text style={[sectionHeadingText, { color: accent }]}>{text}</Text>
      <View style={{ height: 1, backgroundColor: accent, opacity: 0.5 }} />
    </View>
  );
}

/**
 * Etikett über einem Kasten – die gedruckte Alternative zum Emoji. Statt eines
 * Bildchens benennt das Buch den Kastentyp: GRAMMATIK, TIPP, HÖRTEXT.
 */
export function BoxLabel({ text, color }: { text: string; color: string }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
      <Text style={[bookLabel, { color }]}>{text}</Text>
      <View style={{ flex: 1, height: 1, backgroundColor: color, opacity: 0.28 }} />
    </View>
  );
}

const pageStyle = {
  width: book.pageWidth,
  backgroundColor: book.paper,
  borderWidth: 1,
  borderColor: book.paperEdge,
  paddingBottom: 26,
  overflow: 'hidden' as const,
};

const edgeStripe = {
  position: 'absolute' as const,
  left: 0,
  top: 0,
  bottom: 0,
  width: 9,
};

const runningHead = {
  flexDirection: 'row' as const,
  alignItems: 'baseline' as const,
  justifyContent: 'space-between' as const,
};

const runningHeadText = {
  ...bookLabel,
  fontSize: 14,
  letterSpacing: 2.4,
};

const runningHeadMeta = {
  fontFamily: bookSans,
  fontSize: 14,
  letterSpacing: 1.1,
  color: book.inkFaint,
  textTransform: 'uppercase' as const,
};

const headRule = {
  height: 1,
  marginTop: 9,
};

/** Kapitelziffer als gesetzte Zahl im Rahmen – Lektionsnummer statt Icon. */
const chapterNumeral = {
  width: 54,
  height: 54,
  borderWidth: 1,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  marginTop: 6,
};

const chapterNumeralText = {
  fontFamily: bookFont,
  fontSize: 30,
  lineHeight: 36,
  fontWeight: '700' as const,
};

const chapterLine = {
  fontFamily: bookSans,
  fontSize: 15,
  letterSpacing: 1.4,
  textTransform: 'uppercase' as const,
  color: book.inkFaint,
};

const unitTitleStyle = {
  fontFamily: bookFont,
  fontSize: 37,
  lineHeight: 45,
  color: book.ink,
  fontWeight: '700' as const,
};

const unitSubtitleStyle = {
  fontFamily: bookFont,
  fontSize: 20,
  lineHeight: 29,
  color: book.inkSoft,
  marginTop: 2,
  fontStyle: 'italic' as const,
};

const sectionHeadingText = {
  fontFamily: bookSans,
  fontSize: 21,
  fontWeight: '700' as const,
  letterSpacing: 0.4,
};

const numberBadge = {
  width: 33,
  height: 33,
  borderRadius: 17,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const numberText = {
  fontFamily: bookSans,
  color: '#FFFFFF',
  fontSize: 17,
  fontWeight: '700' as const,
};

const instructionStyle = {
  flex: 1,
  fontFamily: bookSans,
  fontSize: 19,
  lineHeight: 28,
  color: book.ink,
  fontWeight: '600' as const,
  paddingTop: 3,
};

const footer = {
  marginTop: 46,
  paddingHorizontal: book.margin,
  alignItems: 'center' as const,
  gap: 12,
};

const footerRule = {
  height: 1,
  alignSelf: 'stretch' as const,
  backgroundColor: book.rule,
};

const pageNumberStyle = {
  fontFamily: bookFont,
  fontSize: 17,
  color: book.inkSoft,
};

export { spacing, colors };
