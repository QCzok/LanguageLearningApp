import React, { useState } from 'react';
import { Pressable, RefreshControl, ScrollView, Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CEFR_LEVELS } from '@lingua/shared';
import type { CefrLevel, ChapterSummaryDto } from '@lingua/shared';
import { EmptyState, ErrorState, Loading } from '../../components';
import { workbookApi } from '../../api/endpoints';
import { useActiveProfile } from '../../store/auth.store';
import { book, bookFont, bookLabel, bookSans, colors, levelColors, spacing } from '../../theme';
import { BookMark, CheckMark, ChevronDownIcon, ChevronRightIcon, LockMark } from './BookIcons';
import type { NotebookStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<NotebookStackParamList, 'ChapterList'>;

/**
 * Das Inhaltsverzeichnis des Lernhefts.
 *
 * Gesetzt wie die erste Seite eines gedruckten Lehrwerks: ein Blatt, darauf
 * die Niveaus als Abschnitte und die Kapitel als Verzeichniszeilen – Nummer,
 * Titel, Untertitel, rechts der Stand. Vorher war jedes Kapitel eine eigene
 * Karte mit Schatten, Fortschrittsbalken und Zeitangabe; sechs solcher Karten
 * pro Niveau ergaben eine Wand aus Kästen, in der nichts mehr hervorstach.
 * Eine Verzeichniszeile sagt dasselbe in einer Zeile und sieht nach Heft aus.
 *
 * Aufgeklappt ist zu Beginn nur das eigene Niveau; alle anderen Stufen bleiben
 * zu und lassen sich einzeln öffnen.
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
        contentContainerStyle={{ padding: 10, paddingBottom: spacing.xxl }}
        refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={refetch} />}
      >
        <View style={sheet}>
          <View style={{ paddingHorizontal: book.margin, paddingTop: 22 }}>
            <Text style={eyebrow}>Inhalt</Text>
            <Text style={sheetTitle}>Lernheft {profile?.language.name ?? ''}</Text>
            <Text style={sheetSubtitle}>
              Sechs Kapitel je Niveau, jeweils mit Kursbuch und Arbeitsbuch.
            </Text>
            <View style={titleRule} />
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

          {/* Die eigenen Notizhefte gehören zum Heft-Bereich, aber nicht ins
              Verzeichnis des Lehrwerks – deshalb unter dem Strich. */}
          <Pressable
            accessibilityRole="button"
            onPress={() => navigation.navigate('NotebookList')}
            style={({ pressed }) => [ownNotebooks, pressed && { backgroundColor: book.tint }]}
          >
            <BookMark color={book.inkSoft} size={22} />
            <View style={{ flex: 1 }}>
              <Text style={ownNotebooksTitle}>Eigene Notizhefte</Text>
              <Text style={ownNotebooksHint}>Freie Seiten zum Schreiben und Zeichnen.</Text>
            </View>
            <ChevronRightIcon color={book.inkFaint} size={16} />
          </Pressable>
        </View>
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
  const accent = levelColors[level] ?? book.kursbuch;
  const completedCount = chapters.filter((c) => c.progress?.percent === 100).length;

  return (
    <View>
      <Pressable
        accessibilityRole="button"
        accessibilityState={{ expanded: isOpen }}
        onPress={onToggle}
        style={({ pressed }) => [levelHeader, pressed && { backgroundColor: book.tint }]}
      >
        <Text style={[levelMark, { color: accent }]}>{level}</Text>
        <View style={{ flex: 1, gap: 1 }}>
          <Text style={levelHeadline}>{LEVEL_HEADLINES[level]}</Text>
          <Text style={levelMeta}>
            {chapters.length} Kapitel
            {completedCount > 0 ? ` · ${completedCount} abgeschlossen` : ''}
            {isCurrent ? ' · Ihr Niveau' : ''}
          </Text>
        </View>
        <View style={{ transform: [{ rotate: isOpen ? '180deg' : '0deg' }] }}>
          <ChevronDownIcon color={book.inkFaint} size={16} />
        </View>
      </Pressable>

      {isOpen
        ? chapters.map((chapter) => (
            <ChapterRow key={chapter.id} chapter={chapter} onPress={() => onOpenChapter(chapter)} />
          ))
        : null}
    </View>
  );
}

/**
 * Eine Zeile des Verzeichnisses: links die Kapitelnummer wie im gedruckten
 * Inhaltsverzeichnis, in der Mitte Titel und Untertitel, rechts der Stand.
 * Der Fortschritt steht als Bruch da („3/8"), nicht als Balken – im
 * Verzeichnis zählt die Zahl, der Balken gehört auf die Kapitelseite.
 */
function ChapterRow({ chapter, onPress }: { chapter: ChapterSummaryDto; onPress: () => void }) {
  const progress = chapter.progress;
  const locked = !chapter.isPublished;
  const done = progress?.percent === 100;

  return (
    <Pressable
      accessibilityRole="button"
      disabled={locked}
      onPress={onPress}
      style={({ pressed }) => [chapterRow, pressed && !locked && { backgroundColor: book.tint }]}
    >
      <Text style={[chapterNumber, locked && { color: book.inkFaint }]}>{chapter.order}</Text>

      <View style={{ flex: 1, gap: 2 }}>
        <Text style={[chapterTitle, locked && { color: book.inkFaint }]}>{chapter.title}</Text>
        <Text style={chapterSubtitle} numberOfLines={1}>
          {locked ? 'In Vorbereitung' : chapter.subtitle}
        </Text>
      </View>

      {locked ? (
        <LockMark color={book.inkFaint} size={16} />
      ) : done ? (
        <CheckMark color={book.correct} size={16} />
      ) : progress && progress.totalUnits > 0 ? (
        <Text style={chapterProgress}>
          {progress.completedUnits}/{progress.totalUnits}
        </Text>
      ) : (
        <Text style={chapterProgress}>{chapter.estimatedMinutes} Min</Text>
      )}
    </Pressable>
  );
}

const LEVEL_HEADLINES: Record<CefrLevel, string> = {
  A1: 'Erste Schritte',
  A2: 'Grundlagen',
  B1: 'Selbstständig',
  B2: 'Sicher im Alltag',
  C1: 'Fortgeschritten',
  C2: 'Nahezu muttersprachlich',
};

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

const levelHeader = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  gap: 14,
  paddingHorizontal: book.margin,
  paddingVertical: 14,
  borderBottomWidth: 1,
  borderBottomColor: book.rule,
};

/** Die Niveaustufe als gesetzte Marke, nicht als bunte Plakette. */
const levelMark = {
  fontFamily: bookSans,
  fontSize: 15,
  fontWeight: '700' as const,
  letterSpacing: 1.4,
  width: 28,
};

const levelHeadline = {
  fontFamily: bookSans,
  fontSize: 16,
  fontWeight: '700' as const,
  color: book.ink,
};

const levelMeta = {
  fontFamily: bookSans,
  fontSize: 12,
  color: book.inkFaint,
};

const chapterRow = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  gap: 14,
  paddingHorizontal: book.margin,
  paddingVertical: 12,
  borderBottomWidth: 1,
  borderBottomColor: book.ruleFaint,
};

const chapterNumber = {
  fontFamily: bookFont,
  fontSize: 18,
  fontWeight: '700' as const,
  color: book.ink,
  width: 28,
};

const chapterTitle = {
  fontFamily: bookFont,
  fontSize: 17,
  lineHeight: 24,
  color: book.ink,
};

const chapterSubtitle = {
  fontFamily: bookFont,
  fontSize: 14,
  color: book.inkFaint,
};

const chapterProgress = {
  fontFamily: bookSans,
  fontSize: 13,
  color: book.inkFaint,
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
