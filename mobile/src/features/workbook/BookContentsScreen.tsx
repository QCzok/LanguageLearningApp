import React from 'react';
import { Pressable, RefreshControl, ScrollView, Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { useFocusEffect } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { ChapterDetailDto, UnitSummaryDto } from '@lingua/shared';
import { ErrorState, Loading } from '../../components';
import { workbookApi } from '../../api/endpoints';
import { useTranslation } from '../../i18n';
import { book, bookColors, bookFont, bookLabel, bookSans, colors, spacing } from '../../theme';
import { CheckMark, ChevronRightIcon, LockMark } from './BookIcons';
import type { NotebookStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<NotebookStackParamList, 'BookContents'>;

/**
 * Das Inhaltsverzeichnis eines Buchs.
 *
 * Gesetzt wie die ersten Seiten eines gedruckten Bandes: Kapitel als
 * Abschnitte, darunter eingerückt die Seiten, alles auf einen Blick und ohne
 * Aufklappen. Vorher lag zwischen Verzeichnis und Seite noch eine
 * Kapitelseite, auf der man sich zwischen Kursbuch und Arbeitsbuch entscheiden
 * musste; die entfällt, weil es die Trennung nicht mehr gibt – und damit auch
 * die Entscheidung. Von hier führt jede Zeile direkt auf eine Seite.
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
  });

  // Zurück von einer Seite: Der Stand im Verzeichnis muss stimmen.
  useFocusEffect(
    React.useCallback(() => {
      void refetch();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  if (isLoading) return <Loading />;
  if (isError || !data) {
    return <ErrorState message={t('contentsError')} onRetry={refetch} />;
  }

  function openUnit(unit: UnitSummaryDto) {
    navigation.navigate('Unit', { unitId: unit.id, title: unit.title });
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
            <ChapterSection
              key={chapter.id}
              chapter={chapter}
              accent={accent}
              onOpenUnit={openUnit}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// --------------------------------------------------------------- Kapitel

function ChapterSection({
  chapter,
  accent,
  onOpenUnit,
}: {
  chapter: ChapterDetailDto;
  accent: string;
  onOpenUnit: (unit: UnitSummaryDto) => void;
}) {
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
    <View>
      <View style={chapterHeader}>
        <Text style={chapterNumber}>{chapter.order}</Text>
        <View style={{ flex: 1, gap: 2 }}>
          <Text style={chapterTitle}>{chapter.title}</Text>
          <Text style={chapterSubtitle}>{chapter.subtitle}</Text>
        </View>
      </View>

      {/* Die Kann-Beschreibungen des Kapitels – im gedruckten Lehrwerk steht
          das über dem Kapitel, nicht auf einer eigenen Seite davor. */}
      <View style={goalBox}>
        {chapter.goals.map((goal) => (
          <View key={goal} style={{ flexDirection: 'row', gap: 8, alignItems: 'flex-start' }}>
            <Text style={[goalBullet, { color: accent }]}>›</Text>
            <Text style={goalText}>{goal}</Text>
          </View>
        ))}
      </View>

      {chapter.units.map((unit) => (
        <UnitRow key={unit.id} unit={unit} accent={accent} onPress={() => onOpenUnit(unit)} />
      ))}
    </View>
  );
}

/**
 * Eine Seite im Verzeichnis: Seitenzahl, Titel, Untertitel, rechts der Stand.
 * Der Fortschritt steht als Zahl da, nicht als Balken – im Verzeichnis zählt
 * die Auskunft, der Balken gehört auf die Seite selbst.
 */
function UnitRow({
  unit,
  accent,
  onPress,
}: {
  unit: UnitSummaryDto;
  accent: string;
  onPress: () => void;
}) {
  const { t } = useTranslation();
  const done = unit.status === 'COMPLETED';
  const started = unit.status === 'IN_PROGRESS';

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [unitRow, pressed && { backgroundColor: book.tint }]}
    >
      <Text style={unitNumber}>{unit.order}</Text>

      <View style={{ flex: 1, gap: 2 }}>
        <Text style={unitTitle}>{unit.title}</Text>
        <Text style={unitMeta} numberOfLines={1}>
          {unit.subtitle ? `${unit.subtitle} · ` : ''}
          {unit.exerciseCount > 0
            ? unit.exerciseCount === 1
              ? t('contentsTaskCountOne')
              : t('contentsTaskCount', { count: unit.exerciseCount })
            : t('contentsToRead')}
          {` · ${unit.estimatedMinutes} ${t('commonMinutesShort')}`}
        </Text>
      </View>

      {done ? (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
          {unit.scorePercent !== null ? (
            <Text style={unitScore}>{unit.scorePercent} %</Text>
          ) : null}
          <CheckMark color={book.correct} size={15} />
        </View>
      ) : started ? (
        <Text style={[unitScore, { color: accent }]}>{t('contentsStarted')}</Text>
      ) : (
        <ChevronRightIcon color={book.inkFaint} size={15} />
      )}
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

const goalBox = {
  marginHorizontal: book.margin,
  marginBottom: 10,
  paddingLeft: 40,
  gap: 3,
};

const goalBullet = {
  fontFamily: bookSans,
  fontSize: 14,
  lineHeight: 21,
};

const goalText = {
  flex: 1,
  fontFamily: bookFont,
  fontSize: 14,
  lineHeight: 21,
  color: book.inkSoft,
};

const unitRow = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  gap: 12,
  paddingLeft: book.margin + 26,
  paddingRight: book.margin,
  paddingVertical: 12,
  borderTopWidth: 1,
  borderTopColor: book.ruleFaint,
};

const unitNumber = {
  fontFamily: bookSans,
  fontSize: 13,
  color: book.inkFaint,
  width: 16,
};

const unitTitle = {
  fontFamily: bookFont,
  fontSize: 17,
  lineHeight: 23,
  color: book.ink,
};

const unitMeta = {
  fontFamily: bookSans,
  fontSize: 12,
  color: book.inkFaint,
};

const unitScore = {
  fontFamily: bookSans,
  fontSize: 12,
  color: book.inkFaint,
};
