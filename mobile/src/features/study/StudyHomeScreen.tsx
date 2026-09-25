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
          <View style={headerRow}>
            <Text style={[typography.title, { flex: 1 }]}>{t('studyHome')}</Text>
            <View style={pointsBlock}>
              <Text style={pointsValue}>{data.totalPoints}</Text>
              <Text style={eyebrow}>{t('points')}</Text>
            </View>
          </View>
          <Text style={[typography.body, { color: colors.textMuted }]}>{t('studySubtitle')}</Text>
        </View>

        {data.levels.length === 0 ? (
          <EmptyState title={t('studyEmpty')} />
        ) : (
          <>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={levelStrip}
              contentContainerStyle={{ gap: spacing.xl }}
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
                    style={[levelTab, selected && { borderBottomColor: color }]}
                  >
                    <Text style={[levelTabLevel, { color: selected ? colors.text : colors.textMuted }]}>
                      {entry.level}
                    </Text>
                    <Text style={levelTabMeta}>
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
                  <View style={{ gap: spacing.xs }}>
                    <Text style={[eyebrow, { color: accent }]}>
                      {t('studyNextLesson')} · {t(KIND_LABEL[next.kind])}
                    </Text>
                    <Text style={typography.heading}>{next.title}</Text>
                  </View>
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
        { borderLeftColor: isNext ? accent : 'transparent' },
        pressed && { backgroundColor: colors.background },
      ]}
    >
      <Text style={[numberText, { color: lesson.done ? accent : colors.textMuted }]}>
        {String(lesson.number).padStart(2, '0')}
      </Text>
      <View style={{ flex: 1, gap: 2 }}>
        <Text
          style={[typography.bodyStrong, lesson.done && { color: colors.textMuted }]}
          numberOfLines={2}
        >
          {lesson.title}
        </Text>
        <Text style={kindText}>
          {t(KIND_LABEL[lesson.kind])}
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

const headerRow = {
  flexDirection: 'row' as const,
  alignItems: 'flex-end' as const,
  gap: spacing.md,
};

const pointsBlock = {
  alignItems: 'flex-end' as const,
};

const pointsValue = {
  fontFamily: fontFamily.bold,
  fontSize: 22,
  lineHeight: 28,
  fontWeight: '700' as const,
  color: colors.primary,
  fontVariant: ['tabular-nums' as const],
};

const levelStrip = {
  flexGrow: 0,
  borderBottomWidth: 1,
  borderBottomColor: colors.border,
};

const levelTab = {
  flexDirection: 'row' as const,
  alignItems: 'baseline' as const,
  gap: 6,
  paddingVertical: spacing.sm,
  borderBottomWidth: 2,
  borderBottomColor: 'transparent',
  marginBottom: -1,
};

const levelTabLevel = {
  fontFamily: fontFamily.bold,
  fontSize: 15,
  fontWeight: '700' as const,
};

const levelTabMeta = {
  fontFamily: fontFamily.medium,
  fontSize: 12,
  color: colors.textMuted,
  fontVariant: ['tabular-nums' as const],
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
  borderLeftWidth: 3,
};

const numberText = {
  width: 22,
  fontFamily: fontFamily.semiBold,
  fontSize: 13,
  fontWeight: '600' as const,
  fontVariant: ['tabular-nums' as const],
};

const kindText = {
  fontFamily: fontFamily.semiBold,
  fontSize: 10,
  letterSpacing: 1.2,
  textTransform: 'uppercase' as const,
  color: colors.textMuted,
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
