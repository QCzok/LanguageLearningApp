import React, { useState } from 'react';
import {
  Pressable,
  RefreshControl,
  ScrollView,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';
import { useQuery } from '@tanstack/react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CEFR_LEVELS } from '@lingua/shared';
import type { CefrLevel, LibraryContentDto } from '@lingua/shared';
import { EmptyState, ErrorState, Loading, ProgressBar } from '../../components';
import { libraryApi } from '../../api/endpoints';
import { useTranslation } from '../../i18n';
import type { TranslationKey } from '../../i18n';
import {
  colors,
  fontFamily,
  levelColors,
  radius,
  readingLabel,
  shadow,
  spacing,
  typography,
} from '../../theme';
import type { LibraryStackParamList } from '../../navigation/types';
import { CoverScrim, CoverSpine, LibraryCoverArt } from './LibraryCovers';

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
 * Wie viele Bände in eine Regalreihe passen.
 *
 * Auf dem Telefon zwei – ein Deckel soll groß genug sein, dass man den Titel
 * darauf lesen kann, ohne ihn darunter zu wiederholen. Je breiter der Schirm,
 * desto mehr Bände; die Reihe bleibt dabei immer voll, statt zwei riesige
 * Kacheln quer über ein Tablet zu ziehen.
 */
function columnsFor(width: number) {
  if (width >= 1100) return 5;
  if (width >= 820) return 4;
  if (width >= 560) return 3;
  return 2;
}

/** Teilt die Bände in Reihen – jede Reihe bekommt ihr eigenes Regalbrett. */
function shelves<T>(items: T[], columns: number): T[][] {
  const rows: T[][] = [];
  for (let at = 0; at < items.length; at += columns) rows.push(items.slice(at, at + columns));
  return rows;
}

/**
 * Die Bibliothek als Bücherregal.
 *
 * Vorher standen hier Karteikarten: Thema, Titel, Vorspann und ein Auszug der
 * ersten Zeilen, gesetzt wie eine Bibliothekskarte. Sauber, aber grau – zwölf
 * Texte sahen aus wie zwölf Absätze, und man wählte nach Lesen statt nach
 * Sehen. Jetzt liegt das Motiv vorn: jeder Text ist ein Band mit Deckel,
 * Rücken, Schatten und aufgedruckter Titelei, und die Bände stehen in Reihen
 * auf Regalbrettern.
 *
 * Der Titel steht dabei auf dem Deckel und nicht darunter: Die Motive bringen
 * keine gedruckte Titelei mit (siehe `LibraryCovers`), und ein Titel, der auf
 * dem Bild steht und darunter noch einmal, wäre zweimal dasselbe. Unter dem
 * Deckel bleibt nur, was kein Buchdeckel trägt: Lesedauer und der eigene
 * Stand.
 *
 * Darüber liegt weiter das Schaufenster: Suche, Rubriken, Niveaufilter und –
 * falls vorhanden – der angefangene Band, der aufgeschlagen bereitliegt.
 */
export default function LibraryListScreen({ navigation }: Props) {
  const { t } = useTranslation();
  const { width } = useWindowDimensions();
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
  const rows = shelves(shelf, columnsFor(width));

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

            {/* Reihe für Reihe statt ein umbrechendes Raster: Nur so lässt sich
                unter jede Reihe ein Brett legen – und ein Buch, das auf nichts
                steht, sieht nicht aus wie eines im Regal. */}
            <View style={{ gap: spacing.lg }}>
              {rows.map((row, index) => (
                <View key={index} style={{ gap: spacing.sm }}>
                  <View style={shelfRow}>
                    {row.map((content) => (
                      <BookTile key={content.id} content={content} onPress={() => open(content)} />
                    ))}
                    {/* Leerplätze halten die letzte Reihe im Format der
                        darüberliegenden – sonst wächst ein einzelner Band auf
                        die ganze Breite. */}
                    {rows[0].length > row.length
                      ? Array.from({ length: rows[0].length - row.length }, (_, slot) => (
                          <View key={`gap-${slot}`} style={{ flex: 1 }} />
                        ))
                      : null}
                  </View>
                  <View style={shelfBoard} />
                </View>
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
 * Der angefangene Band – aufgeschlagen bereitliegend: links der Deckel, rechts
 * Thema, Titel, Vorspann und der Stand.
 *
 * Bewusst liegend und nicht als fünfter Band im Regal: Ein Buch, das man gerade
 * liest, steht nicht zurück in der Reihe, es liegt auf dem Tisch. Der Deckel ist
 * derselbe wie im Regal, nur kleiner – man erkennt den Band wieder.
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
      style={({ pressed }) => [continueCard, pressed && { opacity: 0.92 }]}
    >
      <View style={continueCover}>
        <LibraryCoverArt content={content} />
        <CoverSpine />
      </View>

      <View style={{ flex: 1, gap: 2 }}>
        <Text style={[readingLabel, { color: accent }]} numberOfLines={1}>
          {topic(content, typeLabel)}
        </Text>

        <Text style={continueTitle} numberOfLines={2}>
          {content.title}
        </Text>

        <Text style={continueSubtitle} numberOfLines={2}>
          {content.summary}
        </Text>

        <View style={{ gap: 4, marginTop: spacing.xs }}>
          <ProgressBar value={percent} height={4} color={accent} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={[typography.caption, { color: colors.textMuted }]}>
              {t('libraryPercentRead', { percent })}
            </Text>
            <Text style={[typography.caption, { color: colors.textMuted }]}>
              {t('libraryRemainingMinutes', { count: remaining })}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

/**
 * Ein Band im Regal.
 *
 * Alles, was ein Buch von einer Kachel unterscheidet, steckt in diesem Deckel:
 * das hochkante Format, der Schatten, unter dem er auf dem Brett steht, der
 * Rücken mit seinem Lichtfalz links (`CoverSpine`) – und die Titelei, die auf
 * dem Deckel gedruckt ist statt daneben zu stehen. Das Niveau sitzt als
 * kleines Band oben links, so wie ein Verlag seine Lesestufe auf den Deckel
 * setzt; gelesene Bände tragen dort stattdessen einen Haken.
 *
 * Unter dem Deckel steht nur, was nicht auf ihn gehört: die Lesedauer und der
 * eigene Stand als Strich.
 */
function BookTile({ content, onPress }: { content: LibraryContentDto; onPress: () => void }) {
  const { t } = useTranslation();
  const progress = content.userProgress;
  const done = Boolean(progress?.completedAt);
  const accent = levelColors[content.level] ?? colors.primary;
  const typeLabel = content.type === 'STORY' ? t('libraryTypeStory') : t('libraryTypeArticle');

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={content.title}
      onPress={onPress}
      style={({ pressed }) => [tile, pressed && { transform: [{ translateY: 2 }], opacity: 0.94 }]}
    >
      <View style={cover}>
        <LibraryCoverArt content={content} />
        <CoverScrim />
        <CoverSpine />

        <View style={coverBand}>
          {done ? (
            <View style={[bandPill, { backgroundColor: colors.success }]}>
              <Text style={bandText}>✓ {t('libraryDone')}</Text>
            </View>
          ) : (
            <View style={[bandPill, { backgroundColor: accent }]}>
              <Text style={bandText}>{content.level}</Text>
            </View>
          )}
        </View>

        {/* Die Titelei auf dem Deckel: Thema als Kicker, Titel in der
            Lese-Antiqua, darunter der Verfasser. */}
        <View style={coverTitleBlock}>
          <Text style={coverKicker} numberOfLines={1}>
            {topic(content, typeLabel)}
          </Text>
          <Text style={coverTitle} numberOfLines={3}>
            {content.title}
          </Text>
          {content.author ? (
            <Text style={coverAuthor} numberOfLines={1}>
              {content.author}
            </Text>
          ) : null}
        </View>
      </View>

      <View style={tileFooter}>
        <Text style={tileMeta} numberOfLines={1}>
          {content.estimatedMinutes} {t('commonMinutesShort')}
        </Text>
        {progress && progress.progressPercent > 0 && !done ? (
          <View style={{ flex: 1, marginLeft: spacing.sm }}>
            <ProgressBar value={progress.progressPercent} height={3} color={accent} />
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
  padding: spacing.md,
  borderRadius: radius.lg,
  backgroundColor: colors.surface,
  borderWidth: 1,
  borderColor: colors.border,
  ...shadow.card,
};

/** Der liegende Deckel des angefangenen Bands – kleiner als im Regal. */
const continueCover = {
  width: 72,
  aspectRatio: 3 / 4,
  borderRadius: 3,
  overflow: 'hidden' as const,
  backgroundColor: colors.surfaceAlt,
  ...shadow.card,
};

const continueTitle = {
  fontFamily: fontFamily.serif,
  fontSize: 18,
  lineHeight: 23,
  fontWeight: '700' as const,
  color: colors.text,
  marginTop: 2,
};

const continueSubtitle = {
  fontFamily: fontFamily.serif,
  fontStyle: 'italic' as const,
  fontSize: 13,
  lineHeight: 18,
  color: colors.textMuted,
};

const shelfRow = {
  flexDirection: 'row' as const,
  alignItems: 'flex-end' as const,
  gap: spacing.md,
};

/**
 * Das Regalbrett: eine ruhige Kante, auf der die Bände stehen. Absichtlich kein
 * Holzdekor – die App ist in zwei Farben gehalten, ein Furnierbild wäre der
 * einzige Gegenstand darin, der etwas darstellt. Die Kante allein genügt, damit
 * die Reihe als Regal gelesen wird.
 */
const shelfBoard = {
  height: 3,
  borderRadius: 2,
  backgroundColor: colors.surfaceAlt,
  borderBottomWidth: 1,
  borderBottomColor: colors.border,
};

const tile = {
  flex: 1,
  gap: 6,
};

/** Der Deckel: hochkant, scharfe Kante am Rücken, runde Ecke am Schnitt. */
const cover = {
  width: '100%' as const,
  aspectRatio: 3 / 4,
  borderTopLeftRadius: 2,
  borderBottomLeftRadius: 2,
  borderTopRightRadius: 4,
  borderBottomRightRadius: 4,
  overflow: 'hidden' as const,
  backgroundColor: colors.surfaceAlt,
  justifyContent: 'flex-end' as const,
  ...shadow.lift,
};

const coverBand = {
  position: 'absolute' as const,
  top: spacing.sm,
  left: spacing.sm,
  flexDirection: 'row' as const,
};

const bandPill = {
  paddingHorizontal: 7,
  paddingVertical: 3,
  borderRadius: radius.sm,
};

const bandText = {
  fontFamily: fontFamily.semiBold,
  fontSize: 10,
  letterSpacing: 0.8,
  color: colors.textInverse,
};

const coverTitleBlock = {
  paddingHorizontal: spacing.md,
  paddingBottom: spacing.md,
  paddingTop: spacing.lg,
  gap: 2,
};

const coverKicker = {
  fontFamily: fontFamily.semiBold,
  fontSize: 9.5,
  letterSpacing: 1.3,
  textTransform: 'uppercase' as const,
  color: 'rgba(255,255,255,0.78)',
};

/**
 * Der Titel auf dem Deckel – in der Lese-Antiqua, in der auch der Text selbst
 * gesetzt ist: Deckel und Seite sollen aus derselben Werkstatt kommen.
 */
const coverTitle = {
  fontFamily: fontFamily.serif,
  fontSize: 16,
  lineHeight: 20,
  fontWeight: '700' as const,
  color: '#FFFFFF',
};

const coverAuthor = {
  fontFamily: fontFamily.serif,
  fontSize: 11.5,
  fontStyle: 'italic' as const,
  color: 'rgba(255,255,255,0.8)',
};

const tileFooter = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
};

const tileMeta = {
  ...readingLabel,
  fontSize: 10,
  color: colors.textMuted,
};
