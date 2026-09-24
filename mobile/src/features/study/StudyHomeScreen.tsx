import React from 'react';
import { Pressable, RefreshControl, ScrollView, Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { StudyBookProgressDto } from '@lingua/shared';
import { Button, ErrorState, Loading, ProgressBar } from '../../components';
import { studyApi } from '../../api/endpoints';
import { CACHE } from '../../api/query-client';
import { useTranslation } from '../../i18n';
import { bookColors, colors, fontFamily, radius, spacing, typography } from '../../theme';
import { BookCover } from '../workbook/BookCovers';
import { ChevronRightIcon } from '../workbook/BookIcons';
import type { StudyStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<StudyStackParamList, 'StudyHome'>;

/**
 * Der Einstieg in „Lernen“: Punktestand, je Buch eine Sitzung zum Starten –
 * und darunter die Bücher selbst, für alle, die lieber Seite für Seite lesen.
 *
 * Die Sitzung steht vorn, weil sie die kleinere Entscheidung ist: ein Knopf,
 * und die nächsten drei Themen liegen bereit. Wo es weitergeht, weiß der
 * Server (siehe `StudyService.session`).
 */
export default function StudyHomeScreen({ navigation }: Props) {
  const { t } = useTranslation();

  const { data, isLoading, isError, refetch, isRefetching } = useQuery({
    queryKey: ['study-overview'],
    queryFn: () => studyApi.overview(),
    staleTime: CACHE.PROGRESS,
  });

  if (isLoading) return <Loading />;
  if (isError || !data) return <ErrorState message={t('studyError')} onRetry={refetch} />;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={['left', 'right']}>
      <ScrollView
        contentContainerStyle={{ padding: spacing.lg, gap: spacing.lg, paddingBottom: spacing.xxl }}
        refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={refetch} />}
      >
        <View style={{ gap: spacing.xs }}>
          <Text style={eyebrow}>{t('studyEyebrow')}</Text>
          <Text style={typography.title}>{t('studyHome')}</Text>
          <Text style={[typography.body, { color: colors.textMuted }]}>{t('studySubtitle')}</Text>
        </View>

        <View style={pointsCard}>
          <Text style={pointsValue}>{data.totalPoints}</Text>
          <Text style={pointsLabel}>{t('studyPoints')}</Text>
        </View>

        {data.books.map((progress) => (
          <SessionCard
            key={progress.book}
            progress={progress}
            onStart={() => navigation.navigate('StudySession', { book: progress.book })}
          />
        ))}

        <View style={{ gap: spacing.sm, marginTop: spacing.sm }}>
          <Text style={eyebrow}>{t('studyBooksHeading')}</Text>
          <Pressable
            accessibilityRole="button"
            onPress={() => navigation.navigate('Bookshelf')}
            style={({ pressed }) => [booksRow, pressed && { opacity: 0.85 }]}
          >
            <Text style={{ fontSize: 26 }}>📚</Text>
            <View style={{ flex: 1 }}>
              <Text style={typography.bodyStrong}>{t('studyBooksTitle')}</Text>
              <Text style={[typography.caption, { color: colors.textMuted }]}>
                {t('studyBooksHint')}
              </Text>
            </View>
            <ChevronRightIcon color={colors.textMuted} size={16} />
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function SessionCard({
  progress,
  onStart,
}: {
  progress: StudyBookProgressDto;
  onStart: () => void;
}) {
  const { t, tBookLabel, tBookSubtitle } = useTranslation();
  const accent = bookColors[progress.book].accent;
  const isEmpty = progress.topicsTotal === 0;
  const allDone = !isEmpty && progress.topicsDone === progress.topicsTotal;
  const percent = isEmpty ? 0 : (progress.topicsDone / progress.topicsTotal) * 100;

  return (
    <View style={[sessionCard, { borderTopColor: accent }]}>
      <View style={{ flexDirection: 'row', gap: spacing.md, alignItems: 'center' }}>
        <View style={coverFrame}>
          <BookCover book={progress.book} />
        </View>
        <View style={{ flex: 1, gap: 2 }}>
          <Text style={[typography.heading, { color: accent }]}>{tBookLabel(progress.book)}</Text>
          <Text style={[typography.caption, { color: colors.textMuted }]}>
            {tBookSubtitle(progress.book)}
          </Text>
        </View>
      </View>

      {isEmpty ? (
        <Text style={[typography.caption, { color: colors.textMuted }]}>{t('studyEmpty')}</Text>
      ) : (
        <>
          <ProgressBar value={percent} color={accent} height={6} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: spacing.sm }}>
            <Text style={meta}>
              {t('studyTopicsProgress', { done: progress.topicsDone, total: progress.topicsTotal })}
              {progress.topicsMastered > 0
                ? ` · ${t('studyMastered', { count: progress.topicsMastered })}`
                : ''}
            </Text>
            <Text style={[meta, { color: accent }]}>
              {t('studyBookPoints', {
                points: progress.points,
                possible: progress.pointsPossible,
              })}
            </Text>
          </View>
          <Button
            label={allDone ? t('studyReview') : t('studyStart')}
            onPress={onStart}
            style={{ backgroundColor: accent, borderColor: accent }}
          />
        </>
      )}
    </View>
  );
}

// ------------------------------------------------------------------ Styles

const eyebrow = {
  fontFamily: fontFamily.semiBold,
  fontSize: 11,
  letterSpacing: 1.6,
  textTransform: 'uppercase' as const,
  color: colors.textMuted,
};

const pointsCard = {
  flexDirection: 'row' as const,
  alignItems: 'baseline' as const,
  gap: spacing.sm,
  padding: spacing.lg,
  borderRadius: radius.lg,
  backgroundColor: colors.primary,
};

const pointsValue = {
  fontFamily: fontFamily.bold,
  fontSize: 36,
  lineHeight: 42,
  fontWeight: '700' as const,
  color: colors.textInverse,
};

const pointsLabel = {
  fontFamily: fontFamily.semiBold,
  fontSize: 16,
  color: colors.textInverse,
  opacity: 0.85,
};

const sessionCard = {
  gap: spacing.md,
  padding: spacing.lg,
  borderRadius: radius.md,
  backgroundColor: colors.surface,
  borderWidth: 1,
  borderColor: colors.border,
  borderTopWidth: 3,
};

const coverFrame = {
  width: 44,
  aspectRatio: 3 / 4,
  overflow: 'hidden' as const,
  borderRadius: 2,
  backgroundColor: colors.surfaceAlt,
};

const meta = {
  fontFamily: fontFamily.semiBold,
  fontSize: 12,
  color: colors.textMuted,
};

const booksRow = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  gap: spacing.md,
  padding: spacing.md,
  borderRadius: radius.md,
  backgroundColor: colors.surface,
  borderWidth: 1,
  borderColor: colors.border,
};
