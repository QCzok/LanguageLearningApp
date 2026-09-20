import React from 'react';
import { Pressable, RefreshControl, ScrollView, Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { ChapterDetailDto, UnitSummaryDto } from '@lingua/shared';
import { ErrorState, Loading } from '../../components';
import { workbookApi } from '../../api/endpoints';
import { CACHE } from '../../api/query-client';
import { useTranslation } from '../../i18n';
import { book, bookColors, bookFont, bookLabel, bookSans, colors, spacing } from '../../theme';
import { ChevronRightIcon, LockMark } from './BookIcons';
import type { NotebookStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<NotebookStackParamList, 'BookContents'>;

/**
 * Das Inhaltsverzeichnis eines Buchs.
 *
 * Gesetzt wie die ersten Seiten eines gedruckten Bandes: die zwölf Kapitel
 * stehen mit Nummer, Titel und Untertitel da, sonst nichts. Ein Antippen
 * schlägt das Kapitel auf – direkt bei der ersten noch offenen Seite, oder
 * bei der ersten, wenn das Kapitel noch nicht begonnen wurde. Von dort blättert
 * man mit der Fußzeile der Seite selbst weiter (siehe `BookPage`), nicht über
 * eine ausgefächerte Liste hier im Verzeichnis.
 *
 * Noch nicht ausgearbeitete Kapitel stehen ausgegraut mit im Verzeichnis. Das
 * ist Absicht: Der Aufbau des Buchs soll von Anfang an sichtbar sein, sonst
 * wirkt ein Buch mit einem fertigen Kapitel wie ein Buch mit einem Kapitel.
 */
export default function BookContentsScreen({ route, navigation }: Props) {
  const { book: bookId } = route.params;
  const { t, tBookLabel, tBookDescription } = useTranslation();
  const accent = bookColors[bookId].accent;

  const { data, isLoading, isError, refetch, isRefetching } = useQuery({
    queryKey: ['workbook-book', bookId],
    queryFn: () => workbookApi.bookContents(bookId),
    staleTime: CACHE.PROGRESS,
  });

  // Kein blindes `refetch` beim Fokus mehr: Die Mutationen, die diesen Stand
  // ändern, entwerten den Schlüssel gezielt. Blind nachladen hiess, bei jedem
  // Zurückkommen erneut drei bis fünf Sekunden auf den Server zu warten.

  if (isLoading) return <Loading />;
  if (isError || !data) {
    return <ErrorState message={t('contentsError')} onRetry={refetch} />;
  }

  function openUnit(unit: UnitSummaryDto) {
    navigation.navigate('Unit', { unitId: unit.id, title: unit.title });
  }

  function openChapter(chapter: ChapterDetailDto) {
    const entryUnit = chapter.units.find((unit) => unit.status !== 'COMPLETED') ?? chapter.units[0];
    if (entryUnit) openUnit(entryUnit);
  }

  const published = data.chapters.filter((chapter) => chapter.isPublished);
  const pages = published.flatMap((chapter) => chapter.units);
  const done = pages.filter((unit) => unit.status === 'COMPLETED').length;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={['left', 'right']}>
      <ScrollView
        contentContainerStyle={{ padding: 10, paddingBottom: spacing.xxl }}
        refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={refetch} />}
      >
        <View style={sheet}>
          <View style={{ paddingHorizontal: book.margin, paddingTop: 22 }}>
            <Text style={[eyebrow, { color: accent }]}>{t('contentsEyebrow')}</Text>
            <Text style={sheetTitle}>{tBookLabel(bookId)}</Text>
            <Text style={sheetSubtitle}>{tBookDescription(bookId)}</Text>
            {pages.length > 0 ? (
              <Text style={progressLine}>
                {t('contentsPagesDone', { done, total: pages.length })}
              </Text>
            ) : null}
            <View style={[titleRule, { backgroundColor: accent }]} />
          </View>

          {data.chapters.map((chapter) => (
            <ChapterSection key={chapter.id} chapter={chapter} onPress={() => openChapter(chapter)} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// --------------------------------------------------------------- Kapitel

function ChapterSection({ chapter, onPress }: { chapter: ChapterDetailDto; onPress: () => void }) {
  if (!chapter.isPublished) {
    return (
      <View style={[chapterHeader, { opacity: 0.55 }]}>
        <Text style={[chapterNumber, { color: book.inkFaint }]}>{chapter.order}</Text>
        <View style={{ flex: 1, gap: 2 }}>
          <Text style={[chapterTitle, { color: book.inkFaint }]}>{chapter.title}</Text>
          <Text style={chapterSubtitle} numberOfLines={1}>
            {chapter.subtitle}
          </Text>
        </View>
        <LockMark color={book.inkFaint} size={15} />
      </View>
    );
  }

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [chapterHeader, pressed && { backgroundColor: book.tint }]}
    >
      <Text style={chapterNumber}>{chapter.order}</Text>
      <View style={{ flex: 1, gap: 2 }}>
        <Text style={chapterTitle}>{chapter.title}</Text>
        <Text style={chapterSubtitle} numberOfLines={1}>
          {chapter.subtitle}
        </Text>
      </View>
      <ChevronRightIcon color={book.inkFaint} size={18} />
    </Pressable>
  );
}

// ------------------------------------------------------------------ Styles

const sheet = {
  backgroundColor: book.paper,
  borderWidth: 1,
  borderColor: book.paperEdge,
  paddingBottom: 12,
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

const progressLine = {
  fontFamily: bookSans,
  fontSize: 12,
  color: book.inkFaint,
  marginTop: 10,
};

const titleRule = {
  height: 1,
  marginTop: 16,
};

const chapterHeader = {
  flexDirection: 'row' as const,
  alignItems: 'flex-start' as const,
  gap: 14,
  paddingHorizontal: book.margin,
  paddingTop: 18,
  paddingBottom: 10,
};

const chapterNumber = {
  fontFamily: bookFont,
  fontSize: 20,
  fontWeight: '700' as const,
  color: book.ink,
  width: 26,
};

const chapterTitle = {
  fontFamily: bookFont,
  fontSize: 19,
  lineHeight: 26,
  fontWeight: '700' as const,
  color: book.ink,
};

const chapterSubtitle = {
  fontFamily: bookFont,
  fontSize: 14,
  lineHeight: 20,
  fontStyle: 'italic' as const,
  color: book.inkSoft,
};
