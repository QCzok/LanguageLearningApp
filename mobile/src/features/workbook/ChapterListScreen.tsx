import React from 'react';
import { RefreshControl, ScrollView, Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CEFR_LEVELS } from '@lingua/shared';
import type { CefrLevel, ChapterSummaryDto } from '@lingua/shared';
import {
  Body,
  Caption,
  Card,
  EmptyState,
  ErrorState,
  Heading,
  LevelBadge,
  Loading,
  ProgressBar,
  Row,
  Title,
} from '../../components';
import { workbookApi } from '../../api/endpoints';
import { useActiveProfile } from '../../store/auth.store';
import { bookFont, colors, radius, spacing, typography } from '../../theme';
import { BookMark, LockMark } from './BookIcons';
import type { NotebookStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<NotebookStackParamList, 'ChapterList'>;

export default function ChapterListScreen({ navigation }: Props) {
  const profile = useActiveProfile();

  // Auch das Gerüst laden: Nicht veröffentlichte Kapitel werden ausgegraut
  // gezeigt, damit der Aufbau des Lehrwerks von Anfang an sichtbar ist.
  const { data, isLoading, isError, refetch, isRefetching } = useQuery({
    queryKey: ['workbook-chapters'],
    queryFn: () => workbookApi.chapters({ includeUnpublished: true }),
  });

  if (isLoading) return <Loading />;
  if (isError || !data) {
    return <ErrorState message="Die Kapitel konnten nicht geladen werden." onRetry={refetch} />;
  }

  if (data.length === 0) {
    return (
      <EmptyState
        title="Noch kein Lehrwerk"
        description={`Für ${profile?.language.name ?? 'diese Sprache'} ist noch kein Kapitel angelegt.`}
      />
    );
  }

  const byLevel = CEFR_LEVELS.map((level) => ({
    level: level as CefrLevel,
    chapters: data.filter((chapter) => chapter.level === level),
  })).filter((group) => group.chapters.length > 0);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={['left', 'right']}>
      <ScrollView
        contentContainerStyle={{ padding: spacing.lg, gap: spacing.xl, paddingBottom: spacing.xxl }}
        refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={refetch} />}
      >
        <View style={{ gap: spacing.xs }}>
          <Title>Lehrwerk {profile?.language.name ?? ''}</Title>
          <Caption>Sechs Kapitel je Niveau, jeweils mit Kursbuch und Arbeitsbuch.</Caption>
        </View>

        {byLevel.map((group) => (
          <View key={group.level} style={{ gap: spacing.md }}>
            <Row gap={spacing.sm}>
              <LevelBadge level={group.level} />
              <Heading>{levelHeadline(group.level)}</Heading>
              <View style={{ flex: 1 }} />
              <Caption>
                {group.chapters.filter((c) => c.isPublished).length}/{group.chapters.length} verfügbar
              </Caption>
            </Row>

            {group.chapters.map((chapter) => (
              <ChapterCard
                key={chapter.id}
                chapter={chapter}
                onPress={() =>
                  navigation.navigate('Chapter', { chapterId: chapter.id, title: chapter.title })
                }
              />
            ))}
          </View>
        ))}

        <Card onPress={() => navigation.navigate('NotebookList')}>
          <Row gap={spacing.md}>
            <BookMark color={colors.textMuted} size={26} />
            <View style={{ flex: 1 }}>
              <Heading>Eigene Notizhefte</Heading>
              <Caption>Freie Seiten zum Schreiben und Zeichnen, unabhängig vom Lehrwerk.</Caption>
            </View>
            <Text style={{ fontSize: 18, color: colors.textMuted }}>›</Text>
          </Row>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

function ChapterCard({
  chapter,
  onPress,
}: {
  chapter: ChapterSummaryDto;
  onPress: () => void;
}) {
  const progress = chapter.progress;
  const locked = !chapter.isPublished;

  return (
    <Card
      onPress={locked ? undefined : onPress}
      style={locked ? { opacity: 0.55, backgroundColor: colors.surfaceAlt } : undefined}
    >
      <Row gap={spacing.md} style={{ alignItems: 'flex-start' }}>
        {/*
          Kapitel werden über ihre Nummer erkannt, wie im gedruckten
          Inhaltsverzeichnis – ein Bildchen pro Kapitel wäre Dekoration und
          sagt über den Inhalt weniger als die Ziffer plus Titel.
        */}
        <View style={[chapterBadge, locked && { backgroundColor: colors.surfaceAlt }]}>
          {locked ? (
            <LockMark color={colors.textMuted} size={20} />
          ) : (
            <Text style={chapterNumber}>{chapter.order}</Text>
          )}
          <Text style={[typography.label, { color: colors.textMuted, letterSpacing: 1 }]}>
            KAPITEL
          </Text>
        </View>

        <View style={{ flex: 1, gap: spacing.xs }}>
          <Heading>{chapter.title}</Heading>
          <Caption>{chapter.subtitle}</Caption>

          {locked ? (
            <Caption>In Vorbereitung</Caption>
          ) : (
            <>
              <Row gap={spacing.xs}>
                <Caption>{chapter.unitCount} Lerneinheiten</Caption>
                <Caption>· {chapter.estimatedMinutes} Min</Caption>
              </Row>

              {progress && progress.totalUnits > 0 ? (
                <>
                  <ProgressBar
                    value={progress.percent}
                    height={6}
                    color={progress.percent === 100 ? colors.success : colors.primary}
                  />
                  <Caption>
                    {progress.completedUnits} von {progress.totalUnits} erledigt
                    {progress.scorePercent !== null ? ` · ⌀ ${progress.scorePercent} %` : ''}
                  </Caption>
                </>
              ) : null}
            </>
          )}
        </View>
      </Row>

      {!locked && chapter.goals.length > 0 ? (
        <View style={{ gap: 2, paddingTop: spacing.xs }}>
          {chapter.goals.slice(0, 2).map((goal) => (
            <Body key={goal} muted>
              • {goal}
            </Body>
          ))}
        </View>
      ) : null}
    </Card>
  );
}

function levelHeadline(level: CefrLevel): string {
  const map: Record<CefrLevel, string> = {
    A1: 'Erste Schritte',
    A2: 'Grundlagen',
    B1: 'Selbstständig',
    B2: 'Sicher im Alltag',
    C1: 'Fortgeschritten',
    C2: 'Nahezu muttersprachlich',
  };
  return map[level];
}

const chapterBadge = {
  width: 54,
  height: 60,
  borderRadius: radius.sm,
  backgroundColor: colors.primarySoft,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  gap: 1,
};

const chapterNumber = {
  fontFamily: bookFont,
  fontSize: 26,
  lineHeight: 31,
  fontWeight: '700' as const,
  color: colors.primaryDark,
};
