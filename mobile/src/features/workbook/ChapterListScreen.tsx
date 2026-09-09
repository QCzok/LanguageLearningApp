import React, { useState } from 'react';
import { Pressable, RefreshControl, ScrollView, Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CEFR_LEVELS } from '@lingua/shared';
import type { CefrLevel, ChapterSummaryDto } from '@lingua/shared';
import {
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
import { BookMark, ChevronDownIcon, LockMark } from './BookIcons';
import type { NotebookStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<NotebookStackParamList, 'ChapterList'>;

/**
 * Kapitelübersicht als Akkordeon nach Niveau.
 *
 * Vorher standen alle sechs Niveaustufen dauerhaft offen untereinander – bei
 * je bis zu sechs Kapitelkarten pro Stufe eine sehr lange Seite, in der das
 * eigene Niveau nicht auffiel. Jetzt ist nur das aktuelle Niveau des Nutzers
 * von Anfang an aufgeklappt; alle anderen Stufen sind eingeklappt und lassen
 * sich bei Bedarf einzeln öffnen.
 */
export default function ChapterListScreen({ navigation }: Props) {
  const profile = useActiveProfile();

  // Auch das Gerüst laden: Nicht veröffentlichte Kapitel werden ausgegraut
  // gezeigt, damit der Aufbau des Lehrwerks von Anfang an sichtbar ist.
  const { data, isLoading, isError, refetch, isRefetching } = useQuery({
    queryKey: ['workbook-chapters'],
    queryFn: () => workbookApi.chapters({ includeUnpublished: true }),
  });

  const [expanded, setExpanded] = useState<Set<CefrLevel> | null>(null);

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

  // Erststart: nur das aktuelle Niveau ist offen (oder das erste vorhandene,
  // falls das Profil kein Niveau in diesem Lehrwerk hat).
  const openLevels =
    expanded ??
    new Set<CefrLevel>([
      byLevel.find((group) => group.level === profile?.level)?.level ?? byLevel[0]?.level,
    ]);

  function toggleLevel(level: CefrLevel) {
    const next = new Set(openLevels);
    if (next.has(level)) next.delete(level);
    else next.add(level);
    setExpanded(next);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={['left', 'right']}>
      <ScrollView
        contentContainerStyle={{ padding: spacing.lg, gap: spacing.md, paddingBottom: spacing.xxl }}
        refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={refetch} />}
      >
        <View style={{ gap: spacing.xs, paddingBottom: spacing.xs }}>
          <Title>Lehrwerk {profile?.language.name ?? ''}</Title>
          <Caption>Sechs Kapitel je Niveau, jeweils mit Kursbuch und Arbeitsbuch.</Caption>
        </View>

        {byLevel.map((group) => (
          <LevelSection
            key={group.level}
            level={group.level}
            chapters={group.chapters}
            isCurrent={group.level === profile?.level}
            isOpen={openLevels.has(group.level)}
            onToggle={() => toggleLevel(group.level)}
            onOpenChapter={(chapter) =>
              navigation.navigate('Chapter', { chapterId: chapter.id, title: chapter.title })
            }
          />
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

// ----------------------------------------------------------------- Niveau

function LevelSection({
  level,
  chapters,
  isCurrent,
  isOpen,
  onToggle,
  onOpenChapter,
}: {
  level: CefrLevel;
  chapters: ChapterSummaryDto[];
  isCurrent: boolean;
  isOpen: boolean;
  onToggle: () => void;
  onOpenChapter: (chapter: ChapterSummaryDto) => void;
}) {
  const publishedCount = chapters.filter((c) => c.isPublished).length;
  const completedCount = chapters.filter((c) => c.progress?.percent === 100).length;

  return (
    <View style={sectionContainer}>
      <Pressable
        accessibilityRole="button"
        accessibilityState={{ expanded: isOpen }}
        onPress={onToggle}
        style={({ pressed }) => [levelHeader, pressed && { opacity: 0.7 }]}
      >
        <LevelBadge level={level} />
        <View style={{ flex: 1, gap: 2 }}>
          <Row gap={spacing.xs}>
            <Heading>{levelHeadline(level)}</Heading>
            {isCurrent ? <CurrentPill /> : null}
          </Row>
          <Caption>
            {publishedCount}/{chapters.length} Kapitel verfügbar
            {completedCount > 0 ? ` · ${completedCount} abgeschlossen` : ''}
          </Caption>
        </View>
        <View style={{ transform: [{ rotate: isOpen ? '180deg' : '0deg' }] }}>
          <ChevronDownIcon color={colors.textMuted} size={18} />
        </View>
      </Pressable>

      {isOpen ? (
        <View style={{ gap: spacing.sm, paddingTop: spacing.sm }}>
          {chapters.map((chapter) => (
            <ChapterCard
              key={chapter.id}
              chapter={chapter}
              onPress={() => onOpenChapter(chapter)}
            />
          ))}
        </View>
      ) : null}
    </View>
  );
}

function CurrentPill() {
  return (
    <View style={currentPill}>
      <Text style={currentPillText}>AKTUELL</Text>
    </View>
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
            <LockMark color={colors.textMuted} size={18} />
          ) : (
            <Text style={chapterNumber}>{chapter.order}</Text>
          )}
        </View>

        <View style={{ flex: 1, gap: 3 }}>
          <Text style={typography.bodyStrong}>{chapter.title}</Text>
          <Caption>{chapter.subtitle}</Caption>

          {locked ? (
            <Caption>In Vorbereitung</Caption>
          ) : (
            <>
              <Caption>
                {chapter.unitCount} Lerneinheiten · {chapter.estimatedMinutes} Min
              </Caption>
              {progress && progress.totalUnits > 0 ? (
                <View style={{ gap: 3, paddingTop: 2 }}>
                  <ProgressBar
                    value={progress.percent}
                    height={5}
                    color={progress.percent === 100 ? colors.success : colors.primary}
                  />
                  <Caption>
                    {progress.completedUnits} von {progress.totalUnits} erledigt
                    {progress.scorePercent !== null ? ` · ⌀ ${progress.scorePercent} %` : ''}
                  </Caption>
                </View>
              ) : null}
            </>
          )}
        </View>

        <Text style={{ fontSize: 16, color: colors.textMuted }}>›</Text>
      </Row>
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

const sectionContainer = {
  backgroundColor: colors.surface,
  borderRadius: radius.lg,
  borderWidth: 1,
  borderColor: colors.border,
  padding: spacing.md,
};

const levelHeader = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  gap: spacing.sm,
};

const currentPill = {
  backgroundColor: colors.primarySoft,
  borderRadius: radius.full,
  paddingHorizontal: spacing.sm,
  paddingVertical: 2,
};

const currentPillText = {
  fontSize: 10,
  fontWeight: '700' as const,
  letterSpacing: 0.8,
  color: colors.primaryDark,
};

const chapterBadge = {
  width: 44,
  height: 44,
  borderRadius: radius.sm,
  backgroundColor: colors.primarySoft,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const chapterNumber = {
  fontFamily: bookFont,
  fontSize: 20,
  fontWeight: '700' as const,
  color: colors.primaryDark,
};
