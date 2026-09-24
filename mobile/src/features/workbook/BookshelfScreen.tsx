import React from 'react';
import { Pressable, RefreshControl, ScrollView, Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BOOK_LABELS } from '@lingua/shared';
import type { BookSummaryDto } from '@lingua/shared';
import { ErrorState, Loading } from '../../components';
import { workbookApi } from '../../api/endpoints';
import { CACHE } from '../../api/query-client';
import { useTranslation } from '../../i18n';
import { useActiveProfile } from '../../store/auth.store';
import { book, bookColors, bookFont, bookLabel, bookSans, colors, spacing } from '../../theme';
import { BookMark, ChevronRightIcon } from './BookIcons';
import { BookCover } from './BookCovers';
import type { StudyStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<StudyStackParamList, 'Bookshelf'>;

/**
 * Das Regal – der Einstieg ins Lehrwerk.
 *
 * Vorher stand hier ein Inhaltsverzeichnis mit sechs aufklappbaren
 * GER-Stufen, unter jeder sechs Kapitel, und jedes Kapitel führte erst auf
 * eine Kapitelseite, von der aus man sich zwischen Kursbuch und Arbeitsbuch
 * entscheiden musste. Vier Entscheidungen, bevor ein Wort Deutsch zu sehen
 * war – und die erste davon (A1 oder A2?) konnte kaum jemand beantworten, der
 * gerade anfängt.
 *
 * Jetzt liegt das eigene Kursbuch da, daneben die Grammatik. Man nimmt eines
 * und schlägt es auf; wo es weitergeht, weiß das Buch selbst (siehe `resume`
 * in `BookSummaryDto`). Welche Bände offen liegen, entscheidet das
 * Profil-Niveau – A1/A2 sehen den Beginner, die höheren Bände erscheinen
 * erst, wenn das Niveau dort ankommt (dieselbe Grenze zieht das Backend,
 * siehe `WorkbookService.listBooks`). Die Grammatik steht quer dazu und
 * bleibt immer im Regal: ein Nachschlagewerk, keine Stufe.
 */
export default function BookshelfScreen({ navigation }: Props) {
  const { t, tLanguage } = useTranslation();
  const profile = useActiveProfile();

  const { data, isLoading, isError, refetch, isRefetching } = useQuery({
    queryKey: ['workbook-books'],
    queryFn: () => workbookApi.books(),
    staleTime: CACHE.PROGRESS,
  });

  // Früher stand hier ein `refetch` bei jedem Fokus, damit der Stand nach dem
  // Bearbeiten einer Seite stimmt. Das lud das Regal aber auch dann neu, wenn
  // sich nichts geändert hatte – bei drei bis fünf Sekunden Antwortzeit jedes
  // Mal ein Spinner. `UnitScreen` entwertet `workbook-books` ohnehin gezielt,
  // sobald eine Seite geprüft oder abgegeben wurde; das genügt.

  if (isLoading) return <Loading />;
  if (isError || !data) {
    return <ErrorState message={t('bookshelfError')} onRetry={refetch} />;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={['left', 'right']}>
      <ScrollView
        contentContainerStyle={{ padding: 10, paddingBottom: spacing.xxl }}
        refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={refetch} />}
      >
        <View style={sheet}>
          <View style={{ paddingHorizontal: book.margin, paddingTop: 22 }}>
            <Text style={eyebrow}>{t('bookshelfEyebrow')}</Text>
            {/* Der Sprachname aus der API ist deutsch – angezeigt wird er in
                der Muttersprache des Lernenden. */}
            <Text style={sheetTitle}>
              {profile
                ? tLanguage(profile.language.code, profile.language.name)
                : t('bookshelfLanguageFallback')}
            </Text>
            <Text style={sheetSubtitle}>{t('bookshelfSubtitle')}</Text>
            <View style={titleRule} />
          </View>

          <View style={{ padding: book.margin, gap: 14 }}>
            {data.map((summary) => (
              <BookRow
                key={summary.book}
                summary={summary}
                onPress={() => navigation.navigate('BookContents', { book: summary.book })}
              />
            ))}
          </View>

          {/* Die eigenen Notizhefte gehören zum Heft-Bereich, aber nicht ins
              Lehrwerk – deshalb unter dem Strich. */}
          <View style={{ height: 1, backgroundColor: book.rule, marginHorizontal: book.margin }} />
          <Pressable
            accessibilityRole="button"
            onPress={() => navigation.navigate('NotebookList')}
            style={({ pressed }) => [ownNotebooks, pressed && { backgroundColor: book.tint }]}
          >
            <BookMark color={book.inkSoft} size={22} />
            <View style={{ flex: 1 }}>
              <Text style={ownNotebooksTitle}>{t('bookshelfOwnNotebooks')}</Text>
              <Text style={ownNotebooksHint}>{t('bookshelfOwnNotebooksHint')}</Text>
            </View>
            <ChevronRightIcon color={book.inkFaint} size={16} />
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

/**
 * Ein Buch im Regal: links der Deckel, rechts Titel, Beschreibung und der
 * Stand. Die Zeile ist die ganze Schaltfläche – ein Buch schlägt man auf,
 * indem man es anfasst, nicht indem man einen Knopf daneben drückt.
 */
function BookRow({ summary, onPress }: { summary: BookSummaryDto; onPress: () => void }) {
  const { t, tBookLabel, tBookSubtitle, tBookDescription } = useTranslation();
  const label = tBookLabel(summary.book);
  const accent = bookColors[summary.book].accent;
  const isEmpty = summary.publishedChapterCount === 0;
  // Welche Stufen im Band stecken: beim Kursbuch die beiden, die es abdeckt
  // (A1 · A2), bei der Grammatik alle – sie ist das Nachschlagewerk quer zur
  // Leiter und wird nicht mit der Stufe freigeschaltet.
  const levels =
    summary.book === 'GRAMMAR'
      ? t('bookshelfAllLevels')
      : BOOK_LABELS[summary.book].levels.join(' · ');

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={onPress}
      style={({ pressed }) => [bookRow, pressed && { backgroundColor: book.tint }]}
    >
      <View style={coverFrame}>
        <BookCover book={summary.book} />
      </View>

      <View style={{ flex: 1, gap: 3 }}>
        <Text style={[bookTitle, { color: accent }]}>{label}</Text>
        <Text style={bookSubtitle}>{tBookSubtitle(summary.book)}</Text>
        <Text style={bookDescription} numberOfLines={3}>
          {tBookDescription(summary.book)}
        </Text>

        <Text style={bookMeta}>
          {levels} · {t('bookshelfChapterCount', { count: summary.chapterCount })}
          {isEmpty
            ? ` · ${t('bookshelfInPreparation')}`
            : ` · ${t('bookshelfPagesProgress', {
                done: summary.completedUnits,
                total: summary.totalUnits,
              })}`}
        </Text>

        {summary.resume ? (
          <Text style={[resumeLine, { color: accent }]} numberOfLines={1}>
            {summary.resume.isStart ? t('bookshelfResumeStart') : t('bookshelfResumeContinue')}{' '}
            {summary.resume.chapterOrder}.{' '}
            {summary.resume.unitTitle}
          </Text>
        ) : null}
      </View>

      <ChevronRightIcon color={book.inkFaint} size={17} />
    </Pressable>
  );
}

// ------------------------------------------------------------------ Styles

const sheet = {
  backgroundColor: book.paper,
  borderWidth: 1,
  borderColor: book.paperEdge,
  paddingBottom: 8,
  shadowColor: book.ink,
  shadowOpacity: 0.12,
  shadowRadius: 10,
  shadowOffset: { width: 0, height: 4 },
  elevation: 3,
};

const eyebrow = {
  ...bookLabel,
  fontSize: 11,
  letterSpacing: 1.8,
  color: book.inkFaint,
};

const sheetTitle = {
  fontFamily: bookFont,
  fontSize: 25,
  lineHeight: 32,
  fontWeight: '700' as const,
  color: book.ink,
  marginTop: 6,
};

const sheetSubtitle = {
  fontFamily: bookFont,
  fontSize: 15,
  lineHeight: 22,
  color: book.inkSoft,
  marginTop: 2,
};

const titleRule = {
  height: 1,
  backgroundColor: book.ink,
  marginTop: 16,
};

const bookRow = {
  flexDirection: 'row' as const,
  alignItems: 'flex-start' as const,
  gap: 14,
  paddingVertical: 6,
};

/** Der Deckel als stehendes Rechteck mit Schatten – ein Buch, kein Icon. */
const coverFrame = {
  width: 62,
  aspectRatio: 3 / 4,
  overflow: 'hidden' as const,
  borderRadius: 2,
  backgroundColor: book.tint,
  shadowColor: book.ink,
  shadowOpacity: 0.22,
  shadowRadius: 5,
  shadowOffset: { width: 1, height: 2 },
  elevation: 3,
};

const bookTitle = {
  fontFamily: bookSans,
  fontSize: 19,
  fontWeight: '700' as const,
};

const bookSubtitle = {
  fontFamily: bookFont,
  fontSize: 14,
  fontStyle: 'italic' as const,
  color: book.inkSoft,
};

const bookDescription = {
  fontFamily: bookFont,
  fontSize: 14,
  lineHeight: 21,
  color: book.ink,
  marginTop: 3,
};

const bookMeta = {
  fontFamily: bookSans,
  fontSize: 11,
  letterSpacing: 0.3,
  color: book.inkFaint,
  marginTop: 5,
};

const resumeLine = {
  fontFamily: bookSans,
  fontSize: 13,
  fontWeight: '600' as const,
  marginTop: 2,
};

const ownNotebooks = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  gap: 14,
  paddingHorizontal: book.margin,
  paddingVertical: 16,
};

const ownNotebooksTitle = {
  fontFamily: bookSans,
  fontSize: 16,
  fontWeight: '700' as const,
  color: book.ink,
};

const ownNotebooksHint = {
  fontFamily: bookFont,
  fontSize: 14,
  color: book.inkFaint,
  marginTop: 1,
};
