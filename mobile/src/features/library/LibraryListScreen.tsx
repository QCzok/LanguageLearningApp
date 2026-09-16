import React, { useState } from 'react';
import { Pressable, RefreshControl, ScrollView, Text, TextInput, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CEFR_LEVELS } from '@lingua/shared';
import type { CefrLevel, LibraryContentDto } from '@lingua/shared';
import { EmptyState, ErrorState, LevelBadge, Loading, ProgressBar } from '../../components';
import { libraryApi } from '../../api/endpoints';
import { useTranslation } from '../../i18n';
import type { TranslationKey } from '../../i18n';
import {
  colors,
  fontFamily,
  levelColors,
  radius,
  reading,
  readingLabel,
  shadow,
  spacing,
  typography,
} from '../../theme';
import { LibraryCoverArt } from './LibraryCovers';
import type { LibraryStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<LibraryStackParamList, 'LibraryList'>;

const TYPE_FILTERS: ReadonlyArray<{ value?: string; label: TranslationKey }> = [
  { value: undefined, label: 'libraryFilterAll' },
  { value: 'ARTICLE', label: 'libraryFilterArticles' },
  { value: 'STORY', label: 'libraryFilterStories' },
];

/**
 * Bibliotheksübersicht als Bücherregal.
 *
 * Die Seite ist wie das Schaufenster einer Buchhandlung aufgebaut: ganz oben
 * die Suche, darunter die Rubriken als gesetzte Kolumnentitel (nicht als
 * Knopfleiste), dann – falls vorhanden – der angefangene Text als breite
 * Karte zum Weiterlesen, und erst darunter das Regal selbst.
 *
 * Jede Kachel ist ein Buchcover mit farbigem Rücken: Bild, Titel und die
 * ersten Zeichen des Texts. Das Bild kommt von `LibraryCoverArt` – mangels
 * echter Fotos eine zum Thema passende, selbst gezeichnete Illustration
 * (siehe dort für die Begründung).
 */
export default function LibraryListScreen({ navigation }: Props) {
  const { t } = useTranslation();
  const [type, setType] = useState<string | undefined>(undefined);
  const [level, setLevel] = useState<CefrLevel | undefined>(undefined);
  const [search, setSearch] = useState('');

  const { data, isLoading, isError, refetch, isRefetching } = useQuery({
    queryKey: ['library', { type, level, search }],
    queryFn: () => libraryApi.list({ type, level, search: search || undefined, page: 1 }),
  });

  const items = data?.items ?? [];

  // Angefangen, aber nicht zu Ende gelesen: der Text, den die Übersicht ganz
  // oben anbietet, statt ihn irgendwo im Regal wiederfinden zu lassen.
  const continueReading = items
    .filter((item) => item.userProgress && item.userProgress.progressPercent > 0 && !item.userProgress.completedAt)
    .sort((a, b) => (b.userProgress?.progressPercent ?? 0) - (a.userProgress?.progressPercent ?? 0))[0];

  const shelf = items.filter((item) => item.id !== continueReading?.id);

  function open(content: LibraryContentDto) {
    navigation.navigate('Reader', { contentId: content.id, title: content.title });
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={['left', 'right']}>
      <ScrollView
        contentContainerStyle={{ padding: spacing.lg, gap: spacing.lg, paddingBottom: spacing.xxl }}
        refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={refetch} />}
        keyboardShouldPersistTaps="handled"
      >
        <SearchField value={search} onChange={setSearch} />

        {/* Rubriken wie im Inhaltsverzeichnis einer Zeitschrift: die aktive
            Rubrik ist unterstrichen, nicht eingefärbt – das hält die
            Leitfarbe für die Inhalte selbst frei. */}
        <View style={rubricRow}>
          {TYPE_FILTERS.map((filter) => (
            <Rubric
              key={filter.label}
              label={t(filter.label)}
              active={type === filter.value}
              onPress={() => setType(filter.value)}
            />
          ))}
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={filterRow}>
          <FilterChip
            label={t('libraryMyLevel')}
            active={level === undefined}
            onPress={() => setLevel(undefined)}
          />
          {CEFR_LEVELS.map((entry) => (
            <FilterChip
              key={entry}
              label={entry}
              active={level === entry}
              color={levelColors[entry]}
              onPress={() => setLevel(entry)}
            />
          ))}
        </ScrollView>

        {isLoading ? <Loading /> : null}
        {isError ? <ErrorState message={t('libraryError')} onRetry={refetch} /> : null}

        {items.length === 0 && !isLoading ? (
          <EmptyState
            emoji="📚"
            title={t('commonNothingFound')}
            description={t('libraryNothingFoundBody')}
          />
        ) : null}

        {continueReading ? (
          <View style={{ gap: spacing.sm }}>
            <SectionRule label={t('libraryContinueReading')} />
            <ContinueCard content={continueReading} onPress={() => open(continueReading)} />
          </View>
        ) : null}

        {shelf.length > 0 ? (
          <View style={{ gap: spacing.md }}>
            <SectionRule
              label={continueReading ? t('libraryAllTexts') : t('libraryOnTheShelf')}
              trailing={`${items.length}`}
            />
            <View style={tileGrid}>
              {shelf.map((content) => (
                <ContentTile key={content.id} content={content} onPress={() => open(content)} />
              ))}
            </View>
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}

/** Suchfeld mit Lupe und Löschknopf – ein Feld, keine Kartenzeile. */
function SearchField({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  const { t } = useTranslation();

  return (
    <View style={searchField}>
      <Text style={{ fontSize: 15, opacity: 0.5 }}>🔍</Text>
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={t('librarySearchPlaceholder')}
        placeholderTextColor={colors.textMuted}
        autoCapitalize="none"
        returnKeyType="search"
        style={searchInput}
      />
      {value ? (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={t('librarySearchClear')}
          onPress={() => onChange('')}
          hitSlop={8}
        >
          <Text style={{ fontSize: 15, color: colors.textMuted }}>✕</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

/** Kolumnentitel mit durchlaufender Haarlinie, wie über einem Zeitungsteil. */
function SectionRule({ label, trailing }: { label: string; trailing?: string }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.sm }}>
      <Text style={[readingLabel, { color: colors.text }]}>{label}</Text>
      <View style={{ flex: 1, height: 1, backgroundColor: colors.border }} />
      {trailing ? <Text style={[readingLabel, { color: colors.textMuted }]}>{trailing}</Text> : null}
    </View>
  );
}

function Rubric({ label, active, onPress }: { label: string; active: boolean; onPress: () => void }) {
  return (
    <Pressable
      accessibilityRole="tab"
      accessibilityState={{ selected: active }}
      onPress={onPress}
      style={[rubric, active && rubricActive]}
    >
      <Text
        style={{
          fontFamily: active ? fontFamily.bold : fontFamily.medium,
          fontSize: 14,
          color: active ? colors.text : colors.textMuted,
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
}

/**
 * Der angefangene Text, quer statt hochkant: Cover links, daneben Titel,
 * Fortschritt in Prozent und die verbleibende Lesezeit. So ist auf einen
 * Blick klar, wie weit man war – die Kachel im Regal zeigt das nur als
 * schmalen Balken.
 */
function ContinueCard({ content, onPress }: { content: LibraryContentDto; onPress: () => void }) {
  const { t } = useTranslation();
  const percent = content.userProgress?.progressPercent ?? 0;
  const remaining = Math.max(1, Math.round(content.estimatedMinutes * (1 - percent / 100)));

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [continueCard, pressed && { opacity: 0.92 }]}
    >
      <View style={continueCover}>
        <LibraryCoverArt content={content} />
      </View>

      <View style={{ flex: 1, gap: spacing.xs, justifyContent: 'center' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.sm }}>
          <LevelBadge level={content.level} small />
          <Text style={[readingLabel, { color: colors.textMuted }]}>
            {t('libraryRemainingMinutes', { count: remaining })}
          </Text>
        </View>

        <Text style={[typography.bodyStrong, { fontSize: 16 }]} numberOfLines={2}>
          {content.title}
        </Text>

        <View style={{ gap: 4, marginTop: 2 }}>
          <ProgressBar value={percent} height={4} />
          <Text style={[typography.caption, { color: colors.textMuted }]}>
            {t('libraryPercentRead', { percent })}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

/**
 * Eine Kachel ist ein Buchcover, kein Listenelement: Das Bild füllt die ganze
 * Kachel, Titel und Textauszug liegen als echter Text über dem abgedunkelten
 * unteren Rand (den die Illustration selbst mitbringt, siehe `LibraryCovers`).
 *
 * Dazu kommt der Buchrücken – ein schmaler Streifen in der Farbe des Niveaus
 * am linken Rand. Er macht aus dem Raster ein Regal: Man sieht schon an der
 * Farbkante, wie schwer ein Text ist, bevor man die Plakette liest.
 */
function ContentTile({ content, onPress }: { content: LibraryContentDto; onPress: () => void }) {
  const { t } = useTranslation();
  const progress = content.userProgress;
  const done = Boolean(progress?.completedAt);

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [tile, pressed && { opacity: 0.9, transform: [{ scale: 0.98 }] }]}
    >
      <LibraryCoverArt content={content} />

      <View style={[spine, { backgroundColor: levelColors[content.level] ?? colors.primary }]} />

      <View style={topRow}>
        <LevelBadge level={content.level} small />
        {done ? (
          <View style={doneBadge}>
            <Text style={{ fontSize: 11, color: colors.textInverse }}>✓</Text>
          </View>
        ) : null}
      </View>

      <View style={bottomOverlay}>
        <Text style={tileMeta}>
          {content.type === 'STORY' ? t('libraryTypeStory') : t('libraryTypeArticle')} ·{' '}
          {content.estimatedMinutes} {t('commonMinutesShort')}
        </Text>
        <Text style={tileTitle} numberOfLines={2}>
          {content.title}
        </Text>
        {/* Die ersten ~50 Zeichen des Texts – ein echter Auszug, keine Zusammenfassung. */}
        <Text style={tileExcerpt} numberOfLines={2}>
          {content.excerpt}
        </Text>

        {progress && progress.progressPercent > 0 && !done ? (
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
  color = colors.primary,
  onPress,
}: {
  label: string;
  active: boolean;
  /** Aktive Farbe – bei Niveaus die Farbe des Niveaus, sonst die Leitfarbe. */
  color?: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected: active }}
      onPress={onPress}
      style={[chipStyle, active && { backgroundColor: color, borderColor: color }]}
    >
      <Text style={[typography.label, { color: active ? colors.textInverse : colors.textMuted }]}>
        {label}
      </Text>
    </Pressable>
  );
}

const searchField = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  gap: spacing.sm,
  minHeight: 46,
  paddingHorizontal: spacing.md,
  borderRadius: radius.full,
  backgroundColor: colors.surface,
  borderWidth: 1,
  borderColor: colors.border,
};

const searchInput = {
  flex: 1,
  ...typography.body,
  color: colors.text,
};

const rubricRow = {
  flexDirection: 'row' as const,
  gap: spacing.lg,
  borderBottomWidth: 1,
  borderBottomColor: colors.border,
};

const rubric = {
  paddingBottom: spacing.sm,
  borderBottomWidth: 2,
  borderBottomColor: 'transparent',
  marginBottom: -1,
};

const rubricActive = {
  borderBottomColor: colors.primary,
};

const filterRow = { flexDirection: 'row' as const, gap: spacing.sm, paddingRight: spacing.lg };

const chipStyle = {
  paddingHorizontal: spacing.md,
  paddingVertical: spacing.sm,
  borderRadius: radius.full,
  backgroundColor: colors.surface,
  borderWidth: 1,
  borderColor: colors.border,
};

const continueCard = {
  flexDirection: 'row' as const,
  gap: spacing.md,
  padding: spacing.sm,
  paddingRight: spacing.md,
  borderRadius: radius.lg,
  backgroundColor: colors.surface,
  borderWidth: 1,
  borderColor: colors.border,
  ...shadow.card,
};

const continueCover = {
  width: 68,
  aspectRatio: 3 / 4,
  borderRadius: radius.md,
  overflow: 'hidden' as const,
  backgroundColor: reading.paperDeep,
};

const tileGrid = {
  flexDirection: 'row' as const,
  flexWrap: 'wrap' as const,
  gap: spacing.md,
};

/**
 * Die ganze Kachel ist das Buchcover (3:4, siehe `LibraryCovers`) – deutlich
 * kompakter als ein breites Bild mit separatem Textblock darunter. Ein
 * kräftiger Schatten statt einer reinen Rahmenlinie macht sie zum Gegenstand
 * im Regal.
 */
const tile = {
  flexBasis: '47%' as const,
  flexGrow: 1,
  aspectRatio: 3 / 4,
  borderRadius: radius.lg,
  overflow: 'hidden' as const,
  backgroundColor: colors.surfaceAlt,
  ...shadow.lift,
};

/** Der Buchrücken am linken Rand, in der Farbe des Niveaus. */
const spine = {
  position: 'absolute' as const,
  left: 0,
  top: 0,
  bottom: 0,
  width: 5,
};

const topRow = {
  position: 'absolute' as const,
  top: spacing.sm,
  left: spacing.md,
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
  paddingLeft: spacing.md,
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
