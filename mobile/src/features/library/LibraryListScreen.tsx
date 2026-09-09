import React, { useState } from 'react';
import { Pressable, RefreshControl, ScrollView, Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CEFR_LEVELS } from '@lingua/shared';
import type { CefrLevel, LibraryContentDto } from '@lingua/shared';
import { EmptyState, ErrorState, Input, LevelBadge, Loading, ProgressBar } from '../../components';
import { libraryApi } from '../../api/endpoints';
import { colors, radius, shadow, spacing, typography } from '../../theme';
import { LibraryCoverArt } from './LibraryCovers';
import type { LibraryStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<LibraryStackParamList, 'LibraryList'>;

const TYPE_FILTERS = [
  { value: undefined, label: 'Alle' },
  { value: 'ARTICLE', label: 'Artikel' },
  { value: 'STORY', label: 'Geschichten' },
] as const;

/**
 * Bibliotheksübersicht als Kachelraster.
 *
 * Jede Kachel besteht aus Bild, Titel und den ersten Zeichen des Texts – wie
 * ein Bücherregal, nicht wie eine Ergebnisliste. Das Bild kommt von
 * `LibraryCoverArt`: mangels echter Fotos eine zum Thema passende, selbst
 * gezeichnete Illustration (siehe dort für die Begründung).
 */
export default function LibraryListScreen({ navigation }: Props) {
  const [type, setType] = useState<string | undefined>(undefined);
  const [level, setLevel] = useState<CefrLevel | undefined>(undefined);
  const [search, setSearch] = useState('');

  const { data, isLoading, isError, refetch, isRefetching } = useQuery({
    queryKey: ['library', { type, level, search }],
    queryFn: () => libraryApi.list({ type, level, search: search || undefined, page: 1 }),
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={['left', 'right']}>
      <ScrollView
        contentContainerStyle={{ padding: spacing.lg, gap: spacing.md, paddingBottom: spacing.xxl }}
        refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={refetch} />}
        keyboardShouldPersistTaps="handled"
      >
        <Input
          value={search}
          onChangeText={setSearch}
          placeholder="Suchen …"
          autoCapitalize="none"
          returnKeyType="search"
        />

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={filterRow}>
          {TYPE_FILTERS.map((filter) => (
            <FilterChip
              key={filter.label}
              label={filter.label}
              active={type === filter.value}
              onPress={() => setType(filter.value)}
            />
          ))}
        </ScrollView>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={filterRow}>
          <FilterChip label="Mein Niveau" active={level === undefined} onPress={() => setLevel(undefined)} />
          {CEFR_LEVELS.map((entry) => (
            <FilterChip
              key={entry}
              label={entry}
              active={level === entry}
              onPress={() => setLevel(entry)}
            />
          ))}
        </ScrollView>

        {isLoading ? <Loading /> : null}
        {isError ? <ErrorState message="Die Bibliothek konnte nicht geladen werden." onRetry={refetch} /> : null}

        {data?.items.length === 0 ? (
          <EmptyState
            emoji="📚"
            title="Nichts gefunden"
            description="Passe die Filter an oder suche nach einem anderen Begriff."
          />
        ) : null}

        <View style={tileGrid}>
          {data?.items.map((content) => (
            <ContentTile
              key={content.id}
              content={content}
              onPress={() => navigation.navigate('Reader', { contentId: content.id, title: content.title })}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

/**
 * Eine Kachel ist ein Buchcover, kein Listenelement: Das Bild füllt die ganze
 * Kachel, Titel und Textauszug liegen als echter Text über dem abgedunkelten
 * unteren Rand (den die Illustration selbst mitbringt, siehe `LibraryCovers`).
 * Das hält die Kachel kompakt, statt Bild und Text als zwei separate Blöcke
 * übereinanderzustapeln.
 */
function ContentTile({ content, onPress }: { content: LibraryContentDto; onPress: () => void }) {
  const progress = content.userProgress;

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [tile, pressed && { opacity: 0.9, transform: [{ scale: 0.98 }] }]}
    >
      <LibraryCoverArt content={content} />

      <View style={topRow}>
        <LevelBadge level={content.level} small />
        {progress?.completedAt ? (
          <View style={doneBadge}>
            <Text style={{ fontSize: 12, color: colors.textInverse }}>✓</Text>
          </View>
        ) : null}
      </View>

      <View style={bottomOverlay}>
        <Text style={tileMeta}>
          {content.type === 'STORY' ? 'Geschichte' : 'Artikel'} · {content.estimatedMinutes} Min
        </Text>
        <Text style={tileTitle} numberOfLines={2}>
          {content.title}
        </Text>
        {/* Die ersten ~50 Zeichen des Texts – ein echter Auszug, keine Zusammenfassung. */}
        <Text style={tileExcerpt} numberOfLines={2}>
          {content.excerpt}
        </Text>

        {progress && progress.progressPercent > 0 && !progress.completedAt ? (
          <View style={{ marginTop: 6 }}>
            <ProgressBar value={progress.progressPercent} height={3} />
          </View>
        ) : null}
      </View>
    </Pressable>
  );
}

export function FilterChip({
  label,
  active,
  onPress,
}: {
  label: string;
  active: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected: active }}
      onPress={onPress}
      style={[chipStyle, active && chipActiveStyle]}
    >
      <Text
        style={[typography.label, { color: active ? colors.textInverse : colors.textMuted }]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const filterRow = { flexDirection: 'row' as const, gap: spacing.sm, paddingRight: spacing.lg };

const chipStyle = {
  paddingHorizontal: spacing.md,
  paddingVertical: spacing.sm,
  borderRadius: radius.full,
  backgroundColor: colors.surface,
  borderWidth: 1,
  borderColor: colors.border,
};

const chipActiveStyle = { backgroundColor: colors.primary, borderColor: colors.primary };

const tileGrid = {
  flexDirection: 'row' as const,
  flexWrap: 'wrap' as const,
  gap: spacing.md,
};

/**
 * Die ganze Kachel ist das Buchcover (3:4, siehe `LibraryCovers`) – deutlich
 * kompakter als das vorige breite 4:3-Bild mit separatem Textblock darunter.
 * Ein echter Schatten statt einer reinen Rahmenlinie macht sie zur Karte.
 */
const tile = {
  flexBasis: '47%' as const,
  flexGrow: 1,
  aspectRatio: 3 / 4,
  borderRadius: radius.lg,
  overflow: 'hidden' as const,
  backgroundColor: colors.surfaceAlt,
  ...shadow.card,
};

const topRow = {
  position: 'absolute' as const,
  top: spacing.sm,
  left: spacing.sm,
  right: spacing.sm,
  flexDirection: 'row' as const,
  justifyContent: 'space-between' as const,
};

const doneBadge = {
  width: 22,
  height: 22,
  borderRadius: 11,
  backgroundColor: colors.success,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

/** Titel und Auszug liegen auf dem abgedunkelten unteren Rand des Covers. */
const bottomOverlay = {
  position: 'absolute' as const,
  left: 0,
  right: 0,
  bottom: 0,
  padding: spacing.sm,
  paddingTop: spacing.lg,
};

const tileMeta = {
  fontSize: 11,
  fontWeight: '700' as const,
  letterSpacing: 0.4,
  color: 'rgba(255,255,255,0.8)',
  marginBottom: 2,
};

const tileTitle = {
  ...typography.bodyStrong,
  color: '#FFFFFF',
};

const tileExcerpt = {
  fontSize: 12,
  lineHeight: 17,
  color: 'rgba(255,255,255,0.82)',
  marginTop: 2,
};
