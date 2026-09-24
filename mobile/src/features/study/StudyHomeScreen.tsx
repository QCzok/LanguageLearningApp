import React, { useState } from 'react';
import { Pressable, RefreshControl, ScrollView, Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { CefrLevel, StudyLessonKind, StudyLessonSummaryDto } from '@lingua/shared';
import { Button, EmptyState, ErrorState, Loading, ProgressBar } from '../../components';
import { studyApi } from '../../api/endpoints';
import { CACHE } from '../../api/query-client';
import { useTranslation } from '../../i18n';
import { colors, fontFamily, levelColors, radius, spacing, typography } from '../../theme';
import { ChevronRightIcon } from '../workbook/BookIcons';
import type { StudyStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<StudyStackParamList, 'StudyHome'>;

export const KIND_LABEL = {
  TEXT: 'studyKindText',
  GRAMMAR: 'studyKindGrammar',
  VOCAB: 'studyKindVocab',
} as const satisfies Record<StudyLessonKind, string>;

export const KIND_ICON: Record<StudyLessonKind, string> = {
  TEXT: '📖',
  GRAMMAR: '🧩',
  VOCAB: '🗂️',
};

/**
 * Der Einstieg in „Lernen“: Punktestand, die 50 Lektionen des Niveaus und ein
 * Knopf, der dort weitermacht, wo man aufgehört hat.
 *
 * Das Niveau ist das eigene; über die Leiste darüber lassen sich die anderen
 * Niveaus mit Lektionen aufschlagen – zum Wiederholen nach unten oder zum
 * Vorausschauen nach oben. Die Bücher bleiben darunter erreichbar, für alle,
 * die lieber Seite für Seite lesen.
 */
export default function StudyHomeScreen({ navigation }: Props) {
  const { t } = useTranslation();
  const [level, setLevel] = useState<CefrLevel | undefined>(undefined);

  const { data, isLoading, isError, refetch, isRefetching } = useQuery({
    queryKey: ['study-overview', level ?? 'own'],
    queryFn: () => studyApi.overview(level),
    staleTime: CACHE.PROGRESS,
  });

  if (isLoading) return <Loading />;
  if (isError || !data) return <ErrorState message={t('studyError')} onRetry={refetch} />;

  const accent = levelColors[data.level] ?? colors.primary;
  const current = data.levels.find((entry) => entry.level === data.level);
  const next = data.lessons.find((lesson) => lesson.id === data.nextLessonId);
  const open = (lessonId: string) => navigation.navigate('StudyLesson', { lessonId });

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

        {data.levels.length === 0 ? (
          <EmptyState emoji="📭" title={t('studyEmpty')} />
        ) : (
          <>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: spacing.sm }}
            >
              {data.levels.map((entry) => {
                const selected = entry.level === data.level;
                const color = levelColors[entry.level] ?? colors.primary;
                return (
                  <Pressable
                    key={entry.level}
                    accessibilityRole="button"
                    accessibilityState={{ selected }}
                    onPress={() => setLevel(entry.level)}
                    style={[
                      levelChip,
                      { borderColor: color },
                      selected && { backgroundColor: color },
                    ]}
                  >
                    <Text
                      style={[levelChipLevel, { color: selected ? colors.textInverse : color }]}
                    >
                      {entry.level}
                    </Text>
                    <Text
                      style={[
                        levelChipMeta,
                        { color: selected ? colors.textInverse : colors.textMuted },
                      ]}
                    >
                      {entry.doneCount}/{entry.lessonCount}
                    </Text>
                  </Pressable>
                );
              })}
            </ScrollView>

            <View style={[continueCard, { borderTopColor: accent }]}>
              {current ? (
                <>
                  <ProgressBar
                    value={(current.doneCount / Math.max(1, current.lessonCount)) * 100}
                    color={accent}
                    height={6}
                  />
                  <Text style={meta}>
                    {t('studyLevelProgress', {
                      done: current.doneCount,
                      total: current.lessonCount,
                    })}
                  </Text>
                </>
              ) : null}
              {next ? (
                <>
                  <Text style={typography.heading}>
                    {KIND_ICON[next.kind]} {next.title}
                  </Text>
                  <Button
                    label={
                      next.number === 1 && (current?.doneCount ?? 0) === 0
                        ? t('studyStartLevel')
                        : t('studyContinue', { number: next.number })
                    }
                    onPress={() => open(next.id)}
                    style={{ backgroundColor: accent, borderColor: accent }}
                  />
                </>
              ) : (
                <Text style={[typography.body, { color: colors.textMuted }]}>
                  {t('studyAllDone')}
                </Text>
              )}
            </View>

            <View style={lessonList}>
              {data.lessons.map((lesson, index) => (
                <LessonRow
                  key={lesson.id}
                  lesson={lesson}
                  accent={accent}
                  isNext={lesson.id === data.nextLessonId}
                  isLast={index === data.lessons.length - 1}
                  onPress={() => open(lesson.id)}
                />
              ))}
            </View>
          </>
        )}

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

function LessonRow({
  lesson,
  accent,
  isNext,
  isLast,
  onPress,
}: {
  lesson: StudyLessonSummaryDto;
  accent: string;
  isNext: boolean;
  isLast: boolean;
  onPress: () => void;
}) {
  const { t } = useTranslation();
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        lessonRow,
        !isLast && { borderBottomWidth: 1, borderBottomColor: colors.border },
        isNext && { backgroundColor: colors.primarySoft },
        pressed && { opacity: 0.8 },
      ]}
    >
      <View
        style={[numberBadge, { borderColor: accent }, lesson.done && { backgroundColor: accent }]}
      >
        <Text style={[numberText, { color: lesson.done ? colors.textInverse : accent }]}>
          {lesson.done ? '✓' : lesson.number}
        </Text>
      </View>
      <View style={{ flex: 1, gap: 2 }}>
        <Text style={typography.bodyStrong} numberOfLines={2}>
          {lesson.title}
        </Text>
        <Text style={[typography.caption, { color: colors.textMuted }]}>
          {KIND_ICON[lesson.kind]} {t(KIND_LABEL[lesson.kind])}
          {lesson.scorePercent !== null ? ` · ${lesson.scorePercent} %` : ''}
        </Text>
      </View>
      <Text style={[meta, lesson.points > 0 && { color: accent }]}>
        {lesson.points}/{lesson.maxPoints}
      </Text>
    </Pressable>
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

const levelChip = {
  flexDirection: 'row' as const,
  alignItems: 'baseline' as const,
  gap: 6,
  paddingHorizontal: spacing.md,
  paddingVertical: spacing.sm,
  borderRadius: radius.full,
  borderWidth: 1.5,
  backgroundColor: colors.surface,
};

const levelChipLevel = {
  fontFamily: fontFamily.bold,
  fontSize: 15,
  fontWeight: '700' as const,
};

const levelChipMeta = {
  fontFamily: fontFamily.semiBold,
  fontSize: 12,
};

const continueCard = {
  gap: spacing.md,
  padding: spacing.lg,
  borderRadius: radius.md,
  backgroundColor: colors.surface,
  borderWidth: 1,
  borderColor: colors.border,
  borderTopWidth: 3,
};

const lessonList = {
  borderRadius: radius.md,
  backgroundColor: colors.surface,
  borderWidth: 1,
  borderColor: colors.border,
  overflow: 'hidden' as const,
};

const lessonRow = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  gap: spacing.md,
  paddingHorizontal: spacing.md,
  paddingVertical: spacing.md,
};

const numberBadge = {
  width: 34,
  height: 34,
  borderRadius: 17,
  borderWidth: 1.5,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const numberText = {
  fontFamily: fontFamily.bold,
  fontSize: 13,
  fontWeight: '700' as const,
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
