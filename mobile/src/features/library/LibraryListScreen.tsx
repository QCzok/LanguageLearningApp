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
import type { LibraryStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<LibraryStackParamList, 'LibraryList'>;

const TYPE_FILTERS: ReadonlyArray<{ value?: string; label: TranslationKey }> = [
  { value: undefined, label: 'libraryFilterAll' },
  { value: 'ARTICLE', label: 'libraryFilterArticles' },
  { value: 'STORY', label: 'libraryFilterStories' },
];

/** Das Thema als Kicker über dem Titel – der erste Tag, sonst die Textart. */
function topic(content: LibraryContentDto, typeLabel: string): string {
  const tag = content.tags[0];
  return tag ? tag.charAt(0).toUpperCase() + tag.slice(1) : typeLabel;
}

/**
 * Bibliotheksübersicht als Bücherregal.
 *
 * Die Seite ist wie das Schaufenster einer Buchhandlung aufgebaut: ganz oben
 * die Suche, darunter die Rubriken als gesetzte Kolumnentitel (nicht als
 * Knopfleiste), dann – falls vorhanden – der angefangene Text als breite
 * Karte zum Weiterlesen, und erst darunter das Regal selbst.
 *
 * Jede Kachel ist eine Papierkarte statt eines Covers: kein Bild, sondern
 * Thema, Titel, Vorspann und ein echter Auszug der ersten Zeilen – gesetzt
 * wie eine Bibliothekskarteikarte, mit dem Buchrücken als farbigem Streifen
 * am linken Rand.
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
 * Der angefangene Text als schlichte Papierkarte – kein Cover, sondern Thema,
 * Titel und Fortschritt, gesetzt wie ein Lesezeichen: der Rücken links trägt
 * die Niveaufarbe weiter, die auch im Regal darunter gilt.
 */
function ContinueCard({ content, onPress }: { content: LibraryContentDto; onPress: () => void }) {
  const { t } = useTranslation();
  const percent = content.userProgress?.progressPercent ?? 0;
  const remaining = Math.max(1, Math.round(content.estimatedMinutes * (1 - percent / 100)));
  const accent = levelColors[content.level] ?? colors.primary;
  const typeLabel = content.type === 'STORY' ? t('libraryTypeStory') : t('libraryTypeArticle');

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [continueCard, { borderLeftColor: accent }, pressed && { opacity: 0.92 }]}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.sm }}>
        <Text style={[readingLabel, { color: accent }]}>{topic(content, typeLabel)}</Text>
        <View style={{ flex: 1, height: 1, backgroundColor: reading.rule }} />
        <LevelBadge level={content.level} small />
      </View>

      <Text style={continueTitle} numberOfLines={2}>
        {content.title}
      </Text>

      <Text style={continueSubtitle} numberOfLines={1}>
        {content.summary}
      </Text>

      <View style={{ gap: 4, marginTop: spacing.xs }}>
        <ProgressBar value={percent} height={4} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={[typography.caption, { color: reading.inkFaint }]}>
            {t('libraryPercentRead', { percent })}
          </Text>
          <Text style={[typography.caption, { color: reading.inkFaint }]}>
            {t('libraryRemainingMinutes', { count: remaining })}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

/**
 * Eine Kachel ist eine Papierkarte, kein Bildausschnitt: Ohne Cover trägt sie
 * nur, was vom Text selbst kommt – Thema, Titel, Vorspann und ein echter
 * Auszug der ersten Zeilen, gesetzt wie eine Bibliothekskarteikarte.
 *
 * Der Buchrücken bleibt als schmaler Streifen in der Niveaufarbe am linken
 * Rand – dieselbe Farbkante wie zuvor, jetzt nur auf Papier statt auf einem
 * Bild.
 */
function ContentTile({ content, onPress }: { content: LibraryContentDto; onPress: () => void }) {
  const { t } = useTranslation();
  const progress = content.userProgress;
  const done = Boolean(progress?.completedAt);
  const accent = levelColors[content.level] ?? colors.primary;
  const typeLabel = content.type === 'STORY' ? t('libraryTypeStory') : t('libraryTypeArticle');

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        tile,
        { borderLeftColor: accent },
        pressed && { opacity: 0.92, transform: [{ scale: 0.98 }] },
      ]}
    >
      <View style={tileTopRow}>
        <Text style={[readingLabel, { color: accent, flex: 1 }]} numberOfLines={1}>
          {topic(content, typeLabel)}
        </Text>
        {done ? (
          <View style={doneBadge}>
            <Text style={{ fontSize: 10, color: colors.textInverse }}>✓</Text>
          </View>
        ) : (
          <LevelBadge level={content.level} small />
        )}
      </View>

      <Text style={tileTitle} numberOfLines={2}>
        {content.title}
      </Text>

      <Text style={tileSubtitle} numberOfLines={2}>
        {content.summary}
      </Text>

      {/* Die ersten ~50 Zeichen des Texts – ein echter Auszug, keine Zusammenfassung. */}
      <Text style={tileExcerpt} numberOfLines={2}>
        {content.excerpt}…
      </Text>

      <View style={{ flex: 1 }} />

      <View style={tileFooter}>
        <Text style={tileMeta}>
          {content.estimatedMinutes} {t('commonMinutesShort')}
        </Text>
        {progress && progress.progressPercent > 0 && !done ? (
          <View style={{ flex: 1, marginLeft: spacing.sm }}>
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

/**
 * Der Fortsetzungstext als schmale Papierkarte über dem Regal: kein Cover
 * mehr, nur der Rücken links in der Niveaufarbe, wie ein Lesezeichen, das
 * noch im Buch steckt.
 */
const continueCard = {
  gap: 4,
  padding: spacing.md,
  borderRadius: radius.lg,
  backgroundColor: reading.paper,
  borderWidth: 1,
  borderColor: reading.rule,
  borderLeftWidth: 3,
  ...shadow.card,
};

const continueTitle = {
  fontFamily: fontFamily.bold,
  fontSize: 18,
  lineHeight: 23,
  color: reading.ink,
  marginTop: 2,
};

const continueSubtitle = {
  fontFamily: fontFamily.regular,
  fontStyle: 'italic' as const,
  fontSize: 13,
  lineHeight: 18,
  color: reading.inkSoft,
};

const tileGrid = {
  flexDirection: 'row' as const,
  flexWrap: 'wrap' as const,
  gap: spacing.md,
};

/**
 * Die Kachel ist jetzt eine reine Papierkarte, kein Bildausschnitt: warmes
 * Papier wie in der Lesestrecke, eine Haarlinie als Rahmen und der
 * Buchrücken als linker Farbstreifen – dieselbe Niveaufarbe, die vorher über
 * dem Cover lag, trägt die Karte jetzt allein.
 */
const tile = {
  flexBasis: '47%' as const,
  flexGrow: 1,
  minHeight: 190,
  borderRadius: radius.lg,
  backgroundColor: reading.paper,
  borderWidth: 1,
  borderColor: reading.rule,
  borderLeftWidth: 3,
  padding: spacing.md,
  ...shadow.card,
};

const tileTopRow = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  gap: spacing.xs,
};

const doneBadge = {
  width: 20,
  height: 20,
  borderRadius: 10,
  backgroundColor: colors.success,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const tileTitle = {
  fontFamily: fontFamily.bold,
  fontSize: 16,
  lineHeight: 21,
  color: reading.ink,
  marginTop: spacing.xs,
};

const tileSubtitle = {
  fontFamily: fontFamily.medium,
  fontSize: 12.5,
  lineHeight: 17,
  color: reading.inkSoft,
  marginTop: 3,
};

/** Der Textauszug – kursiv gesetzt, wie ein Zitat aus dem Text selbst. */
const tileExcerpt = {
  fontFamily: fontFamily.regular,
  fontStyle: 'italic' as const,
  fontSize: 12,
  lineHeight: 16,
  color: reading.inkFaint,
  marginTop: 4,
};

const tileFooter = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  marginTop: spacing.sm,
  paddingTop: spacing.xs,
  borderTopWidth: 1,
  borderTopColor: reading.rule,
};

const tileMeta = {
  ...readingLabel,
  fontSize: 10,
  color: reading.inkFaint,
};
