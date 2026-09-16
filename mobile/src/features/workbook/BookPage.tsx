import React, { ReactNode } from 'react';
import { Pressable, Text, View } from 'react-native';
import type { WorkbookBook } from '@lingua/shared';
import { useTranslation } from '../../i18n';
import { book, bookColors, bookFont, bookLabel, bookSans, colors, spacing } from '../../theme';
import { CheckMark, ChevronLeftIcon, ChevronRightIcon } from './BookIcons';

/**
 * Die Farben eines Buchs – alles, was eine Seite von ihrem Band wissen muss.
 *
 * Vorher hieß das `SECTION_THEME` und trug den Buchteil: rot im Kursbuch,
 * kohlegrau im Arbeitsbuch. Die Farbe sprang damit mitten im Kapitel um,
 * sobald man von der Erklärung zur Übung blätterte. Jetzt stehen beide auf
 * derselben Seite, und die Farbe gehört dem Band (siehe `bookColors`).
 *
 * Der Name des Buchs steht bewusst nicht mehr hier: Er hängt an der
 * Muttersprache des Lernenden und kommt deshalb aus `tBookLabel`.
 */
export function bookTheme(id: WorkbookBook) {
  return bookColors[id];
}

/**
 * Blättern innerhalb des Kapitels – als Teil der Fußzeile, nicht als
 * schwebende Werkzeugleiste. Wer ein Buch liest, blättert am Seitenende
 * um, nicht über ein Bedienpanel daneben.
 */
export interface PageFooterNav {
  index: number;
  total: number;
  accent: string;
  hasPrevious: boolean;
  hasNext: boolean;
  onPrevious: () => void;
  onNext: () => void;
}

/**
 * Die Heftseite.
 *
 * Rendert Papier statt App-Oberfläche: weißes Blatt mit Kante, gedruckter
 * Kopfzeile, echten Seitenrändern und einer Fußzeile mit Seitenzahl.
 *
 * Die Seite ist kein verkleinertes DIN-A4-Blatt: Vorher wurde alles in festen
 * „Buch-Einheiten“ von 820 Punkten Breite gesetzt und als Ganzes auf die
 * Bildschirmbreite geschrumpft – auf einem Telefon landete der Fließtext damit
 * bei rund neun Punkten Schriftgröße, also am Rand der Lesbarkeit, und musste
 * über eine Zoomstufe wieder herangeholt werden. Wer allein mit der App übt,
 * soll aber einfach lesen und schreiben können. Deshalb fließt die Seite in
 * der Breite des Geräts und ist in echten Gerätepunkten gesetzt: kein Zoom,
 * kein seitliches Schieben, keine Lupe.
 *
 * Die Gestaltung folgt der Arbeitsteilung eines gedruckten Lehrwerks:
 * Fließtext in der Lesegröße, der ganze „Apparat“ ringsum – Kolumnentitel,
 * Etiketten, Aufgabennummern – klein und gesperrt. Farbe trägt nur das Buch,
 * und auch die nur als Haarlinie unter dem Kolumnentitel.
 */
export function BookPage({
  book: bookId,
  chapterTitle,
  level,
  chapterOrder,
  unitTitle,
  unitSubtitle,
  pageNumber,
  children,
  nav,
  onLayoutHeight,
}: {
  book: WorkbookBook;
  chapterTitle: string;
  level: string;
  chapterOrder: number;
  unitTitle: string;
  unitSubtitle?: string | null;
  pageNumber: number;
  children: ReactNode;
  /** Ohne Angabe zeigt die Fußzeile nur die Seitenzahl, ohne Umblättern. */
  nav?: PageFooterNav;
  onLayoutHeight?: (height: number) => void;
}) {
  const { t, tBookLabel } = useTranslation();
  const theme = bookTheme(bookId);

  return (
    <View
      style={pageStyle}
      onLayout={(event) => onLayoutHeight?.(event.nativeEvent.layout.height)}
    >
      <View style={{ paddingHorizontal: book.margin, paddingTop: 22, paddingBottom: 4 }}>
        {/*
          Kolumnentitel: links das Buch und das Kapitel, rechts das Niveau.
          Eine Zeile, klein und gesperrt gesetzt – im Buch führt diese Zeile,
          sie ruft nicht. Vorher standen Buchteil, Niveau, Kapitelnummer,
          Kapiteltitel und eine große Kapitelziffer im Rahmen übereinander;
          das war fünfmal dieselbe Auskunft, bevor überhaupt etwas zu lernen
          begann.
        */}
        <View style={runningHead}>
          <Text style={[runningHeadText, { color: theme.accent }]} numberOfLines={1}>
            {tBookLabel(bookId)} · {t('pageChapter', { order: chapterOrder })}
          </Text>
          <Text style={runningHeadMeta}>{level}</Text>
        </View>

        <View style={[headRule, { backgroundColor: theme.accent }]} />

        <View style={{ gap: 4, marginTop: 16 }}>
          <Text style={chapterLine} numberOfLines={1}>
            {chapterTitle}
          </Text>
          <Text style={unitTitleStyle}>{unitTitle}</Text>
          {unitSubtitle ? <Text style={unitSubtitleStyle}>{unitSubtitle}</Text> : null}
        </View>
      </View>

      <View style={{ paddingHorizontal: book.margin, paddingTop: 20, gap: book.blockGap }}>
        {children}
      </View>

      {/*
        Fußzeile: die Seitenzahl steht schon immer hier, das Umblättern
        gehört an dieselbe Stelle – am Ende der Seite, wie in einem echten
        Buch. Ohne `nav` (z. B. ein Kapitel mit nur einer Seite) bleibt es
        bei der reinen Seitenzahl.
      */}
      <View style={footer}>
        <View style={footerRule} />

        {nav ? (
          <View style={footerNavRow}>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={t('pagePrevious')}
              onPress={nav.onPrevious}
              disabled={!nav.hasPrevious}
              style={[footerNavButton, !nav.hasPrevious && { opacity: 0.25 }]}
            >
              <ChevronLeftIcon color={book.inkSoft} size={18} />
            </Pressable>

            <View style={{ alignItems: 'center' }}>
              <Text style={pageNumberStyle}>{pageNumber}</Text>
              <Text style={footerCounter}>
                {t('pageOfTotal', { current: nav.index + 1, total: nav.total })}
              </Text>
            </View>

            <Pressable
              accessibilityRole="button"
              accessibilityLabel={t('pageNext')}
              onPress={nav.onNext}
              disabled={!nav.hasNext}
              style={[footerNavButton, !nav.hasNext && { opacity: 0.25 }]}
            >
              <ChevronRightIcon color={book.inkSoft} size={18} />
            </Pressable>
          </View>
        ) : (
          <Text style={pageNumberStyle}>{pageNumber}</Text>
        )}
      </View>
    </View>
  );
}

/**
 * Nummerierter Aufgabenkopf, wie im Lehrwerk: Ziffer im Kreis,
 * daneben die Arbeitsanweisung. Die Anweisung steht im kräftigeren Schnitt –
 * sie ist Anleitung, nicht Lesetext, und hebt sich dadurch vom Übungsmaterial
 * ab.
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
    <View style={{ flexDirection: 'row', alignItems: 'flex-start', gap: 11 }}>
      <View style={[numberBadge, { backgroundColor: badgeColor }]}>
        {status === 'correct' ? (
          <CheckMark color="#FFFFFF" size={14} />
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
    <View style={{ gap: 7 }}>
      <Text style={[sectionHeadingText, { color: accent }]}>{text}</Text>
      <View style={{ height: 1, backgroundColor: accent, opacity: 0.45 }} />
    </View>
  );
}

/**
 * Etikett über einem Kasten – die gedruckte Alternative zum Emoji. Statt eines
 * Bildchens benennt das Buch den Kastentyp: GRAMMATIK, TIPP, HÖRTEXT.
 */
export function BoxLabel({ text, color }: { text: string; color: string }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 9 }}>
      <Text style={[bookLabel, { color, fontSize: 11, letterSpacing: 1.3 }]}>{text}</Text>
      <View style={{ flex: 1, height: 1, backgroundColor: color, opacity: 0.25 }} />
    </View>
  );
}

const pageStyle = {
  width: '100%' as const,
  backgroundColor: book.paper,
  borderWidth: 1,
  borderColor: book.paperEdge,
  paddingBottom: 18,
};

const runningHead = {
  flexDirection: 'row' as const,
  alignItems: 'baseline' as const,
  justifyContent: 'space-between' as const,
  gap: 10,
};

const runningHeadText = {
  ...bookLabel,
  flex: 1,
  fontSize: 11,
  letterSpacing: 1.6,
};

const runningHeadMeta = {
  fontFamily: bookSans,
  fontSize: 11,
  letterSpacing: 1.2,
  color: book.inkFaint,
};

const headRule = {
  height: 1,
  marginTop: 7,
};

const chapterLine = {
  fontFamily: bookSans,
  fontSize: 11,
  letterSpacing: 1.1,
  textTransform: 'uppercase' as const,
  color: book.inkFaint,
};

const unitTitleStyle = {
  fontFamily: bookFont,
  fontSize: 25,
  lineHeight: 32,
  color: book.ink,
  fontWeight: '700' as const,
};

const unitSubtitleStyle = {
  fontFamily: bookFont,
  fontSize: 16,
  lineHeight: 24,
  color: book.inkSoft,
  marginTop: 2,
  fontStyle: 'italic' as const,
};

const sectionHeadingText = {
  fontFamily: bookSans,
  fontSize: 17,
  fontWeight: '700' as const,
  letterSpacing: 0.3,
};

const numberBadge = {
  width: 26,
  height: 26,
  borderRadius: 13,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  marginTop: 1,
};

const numberText = {
  fontFamily: bookSans,
  color: '#FFFFFF',
  fontSize: 14,
  fontWeight: '700' as const,
};

const instructionStyle = {
  flex: 1,
  fontFamily: bookSans,
  fontSize: 16,
  lineHeight: 24,
  color: book.ink,
  fontWeight: '600' as const,
};

const footer = {
  marginTop: 32,
  paddingHorizontal: book.margin,
  alignItems: 'center' as const,
  gap: 10,
};

const footerRule = {
  height: 1,
  alignSelf: 'stretch' as const,
  backgroundColor: book.rule,
};

const pageNumberStyle = {
  fontFamily: bookFont,
  fontSize: 15,
  color: book.inkSoft,
};

const footerNavRow = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  gap: 20,
};

const footerNavButton = {
  width: 44,
  height: 44,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const footerCounter = {
  fontFamily: bookSans,
  fontSize: 11,
  letterSpacing: 0.4,
  color: book.inkFaint,
  marginTop: 1,
};

export { spacing, colors };
