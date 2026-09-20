import React, { useEffect, useMemo, useState } from 'react';
import { Pressable, RefreshControl, ScrollView, Text, TextInput, View } from 'react-native';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CEFR_LEVELS } from '@lingua/shared';
import type { CefrLevel, LibraryContentDto } from '@lingua/shared';
import { EmptyState, ErrorState, Loading } from '../../components';
import { libraryApi } from '../../api/endpoints';
import { CACHE } from '../../api/query-client';
import { useTranslation } from '../../i18n';
import type { TranslationKey } from '../../i18n';
import { useAuthStore } from '../../store/auth.store';
import {
  colors,
  fontFamily,
  radius,
  readingLabel,
  shadow,
  spacing,
  typography,
} from '../../theme';
import type { LibraryStackParamList } from '../../navigation/types';
import { useContentWidth } from '../../navigation/WebLayout';
import { ChevronRightIcon, ClockIcon, CloseIcon, SearchIcon, SlidersIcon } from './LibraryIcons';

type Props = NativeStackScreenProps<LibraryStackParamList, 'LibraryList'>;

/**
 * Wie ein Text zum Niveau des Lernenden steht.
 *
 * Das ist die Frage, die vor jeder anderen kommt: „Kann ich das lesen?“ Ein
 * GER-Buchstabe beantwortet sie nicht – B1 sagt nur etwas, wenn man weiß, wo
 * man selbst steht. Deshalb rechnet die Übersicht jeden Text in eine dieser
 * vier Lagen um und zeigt die statt der nackten Stufe.
 */
type Fit = 'easier' | 'match' | 'stretch' | 'hard';

/** Längenklassen – gedacht in Zeit, nicht in Wörtern: „Ich habe fünf Minuten.“ */
type Length = 'all' | 'short' | 'medium' | 'long';

/** Schwierigkeit relativ zum eigenen Niveau, wie sie der Filter anbietet. */
type Difficulty = 'all' | 'easier' | 'match' | 'harder';

type Kind = 'all' | 'ARTICLE' | 'STORY';

const FIT_LABELS: Record<Fit, TranslationKey> = {
  easier: 'libraryFitEasy',
  match: 'libraryFitRight',
  stretch: 'libraryFitStretch',
  hard: 'libraryFitHard',
};

/**
 * Die Farbe einer Lage.
 *
 * Leichter bleibt grau – es ist keine Empfehlung, sondern eine Entlastung.
 * Das eigene Niveau trägt die Leitfarbe der App: Das ist der Text, für den
 * diese Bibliothek gebaut ist. Darüber wird es wärmer und schließlich rot,
 * nicht als Warnung, sondern als Temperatur: Das hier kostet Kraft.
 */
const FIT_COLORS: Record<Fit, string> = {
  easier: colors.textMuted,
  match: colors.primary,
  stretch: colors.warning,
  hard: colors.danger,
};

const KIND_FILTERS: ReadonlyArray<{ value: Kind; label: TranslationKey }> = [
  { value: 'all', label: 'libraryFilterAll' },
  { value: 'ARTICLE', label: 'libraryFilterArticles' },
  { value: 'STORY', label: 'libraryFilterStories' },
];

const DIFFICULTY_FILTERS: ReadonlyArray<{ value: Difficulty; label: TranslationKey }> = [
  { value: 'all', label: 'libraryFilterAll' },
  { value: 'easier', label: 'libraryDifficultyEasier' },
  { value: 'match', label: 'libraryMyLevel' },
  { value: 'harder', label: 'libraryDifficultyHarder' },
];

const LENGTH_FILTERS: ReadonlyArray<{ value: Length; label: TranslationKey }> = [
  { value: 'all', label: 'libraryFilterAll' },
  { value: 'short', label: 'libraryLengthShort' },
  { value: 'medium', label: 'libraryLengthMedium' },
  { value: 'long', label: 'libraryLengthLong' },
];

/** Bis hierher gilt ein Text als „kurz“, ab hier als „lang“ – in Minuten. */
const SHORT_MINUTES = 5;
const LONG_MINUTES = 10;

function fitOf(level: CefrLevel, myLevel: CefrLevel | undefined): Fit {
  if (!myLevel) return 'match';
  const distance = CEFR_LEVELS.indexOf(level) - CEFR_LEVELS.indexOf(myLevel);
  if (distance < 0) return 'easier';
  if (distance === 0) return 'match';
  if (distance === 1) return 'stretch';
  return 'hard';
}

function lengthOf(minutes: number): Exclude<Length, 'all'> {
  if (minutes < SHORT_MINUTES) return 'short';
  if (minutes <= LONG_MINUTES) return 'medium';
  return 'long';
}

/** Das Thema als Kicker – der erste Tag, sonst die Textart. */
function topic(content: LibraryContentDto, typeLabel: string): string {
  const tag = content.tags[0];
  return tag ? tag.charAt(0).toUpperCase() + tag.slice(1) : typeLabel;
}

/**
 * Wie viele Karten nebeneinander stehen: auf dem Telefon eine über die volle
 * Breite, auf breiten Schirmen zwei oder drei – eine einzelne Karte über 1200
 * Punkte wäre eine Zeile, der das Auge nicht zurückfindet.
 *
 * Gemessen wird die Spalte, nicht das Fenster (`useContentWidth`): Im Browser
 * läuft die App in einer telefonschmalen Spalte, und die Fensterbreite hätte
 * dort drei Karten nebeneinander gestellt, wo 480 Punkte zur Verfügung stehen.
 */
function columnsFor(width: number) {
  if (width >= 1180) return 3;
  if (width >= 760) return 2;
  return 1;
}

function gridRows<T>(items: T[], columns: number): T[][] {
  const rows: T[][] = [];
  for (let at = 0; at < items.length; at += columns) rows.push(items.slice(at, at + columns));
  return rows;
}

/**
 * Die Bibliothek – die Übersicht über alles, was es zu lesen gibt.
 *
 * Sie ist zweimal umgebaut worden, und beide Male war dasselbe falsch. Erst
 * stand hier ein Bücherregal mit gerenderten Deckeln: schön, aber die Motive
 * waren generisch, sieben Bilder für alle Texte. Dann Karteikarten mit
 * Leseprobe: ehrlicher, aber immer noch ein Katalog, über dem elf
 * Bedienelemente lagen – ein Suchfeld, drei Rubriken, sieben Niveau-Chips –
 * für eine Handvoll Texte darunter. Beide Male musste der Lernende die Arbeit
 * machen: filtern, vergleichen, raten, ob „B2“ für ihn zu schwer ist.
 *
 * Jetzt macht die App die Arbeit. Drei Entscheidungen tragen den Bildschirm:
 *
 * 1. **Der angefangene Text steht ganz oben**, als einziges farbiges Feld der
 *    Seite. Wer die Bibliothek öffnet, will meistens weiterlesen, nicht
 *    auswählen – das soll ein Griff sein, keine Suche.
 * 2. **Die Liste ordnet sich nach dem Lernenden**, nicht nach dem Katalog:
 *    „Genau dein Niveau“, „Zum Aufwärmen“, „Eine Stufe höher“, „Schon
 *    gelesen“. Dieselben Texte, aber jeder Abschnitt beantwortet vorab die
 *    Frage, die sonst jeder einzeln stellen müsste. Ohne bekanntes Niveau
 *    (kein Lernprofil) bleibt es bei einer Liste.
 * 3. **Suche und Filter liegen in einer Zeile** und klappen nur auf, wenn man
 *    sie braucht. Gefiltert wird nach dem, was ein Lernender wirklich fragt:
 *    Wie schwer? Wie lang? Geschichte oder Sachtext? Sobald ein Filter greift,
 *    fällt die Gliederung weg und es kommt eine schlichte Trefferliste – beim
 *    Suchen will man Ergebnisse sehen, keine Rubriken.
 */
export default function LibraryListScreen({ navigation }: Props) {
  const { t } = useTranslation();
  const width = useContentWidth();

  const myLevel = useAuthStore(
    (state) => state.user?.profiles.find((profile) => profile.isActive)?.level,
  );

  const [search, setSearch] = useState('');
  const [term, setTerm] = useState('');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [kind, setKind] = useState<Kind>('all');
  const [difficulty, setDifficulty] = useState<Difficulty>('all');
  const [length, setLength] = useState<Length>('all');

  // Getippt wird schneller, als eine Abfrage zurückkommt: Erst wenn eine
  // Dreiviertelsekunde nichts mehr passiert ist, geht der Begriff an den
  // Server. Sonst stellt „Wochenmarkt“ elf Abfragen, von denen zehn niemand
  // je zu sehen bekommt.
  useEffect(() => {
    const timer = setTimeout(() => setTerm(search.trim()), 300);
    return () => clearTimeout(timer);
  }, [search]);

  // Nur was der Server wirklich kann, geht an den Server. Schwierigkeit und
  // Länge sind Rechnungen auf dem Gerät – „leichter als ich“ ist kein Niveau,
  // sondern eine Menge von Niveaus, und Minuten kennt die Abfrage nicht.
  const { data, isLoading, isError, refetch, isRefetching } = useQuery({
    queryKey: ['library', { kind, term }],
    queryFn: () =>
      libraryApi.list({
        type: kind === 'all' ? undefined : kind,
        search: term || undefined,
        page: 1,
      }),
    // Beim Tippen und Filtern die vorige Liste stehen lassen, statt sie gegen
    // einen Ladekreis zu tauschen: Sonst springt der Bildschirm bei jedem
    // Buchstaben, und man sieht nie, was der eigene Filter eigentlich bewirkt.
    placeholderData: keepPreviousData,
    staleTime: CACHE.PROGRESS,
  });

  // Kein blindes `refetch` beim Fokus mehr: Die Mutationen, die diesen Stand
  // ändern, entwerten den Schlüssel gezielt. Blind nachladen hiess, bei jedem
  // Zurückkommen erneut drei bis fünf Sekunden auf den Server zu warten.

  const all = useMemo(() => data?.items ?? [], [data]);

  const items = useMemo(
    () =>
      all.filter((item) => {
        if (length !== 'all' && lengthOf(item.estimatedMinutes) !== length) return false;
        if (difficulty === 'all') return true;
        const fit = fitOf(item.level, myLevel);
        if (difficulty === 'easier') return fit === 'easier';
        if (difficulty === 'match') return fit === 'match';
        return fit === 'stretch' || fit === 'hard';
      }),
    [all, length, difficulty, myLevel],
  );

  const activeFilters =
    (kind === 'all' ? 0 : 1) + (difficulty === 'all' ? 0 : 1) + (length === 'all' ? 0 : 1);
  const searching = Boolean(term) || activeFilters > 0;

  // Der angefangene Text: der am weitesten gelesene, der noch nicht fertig
  // ist. Er steht oben und taucht in den Abschnitten darunter nicht noch
  // einmal auf – zweimal derselbe Text auf einem Bildschirm sieht aus wie ein
  // Fehler.
  const resume = useMemo(
    () =>
      items
        .filter((item) => (item.userProgress?.progressPercent ?? 0) > 0 && !item.userProgress?.completedAt)
        .sort((a, b) => (b.userProgress?.progressPercent ?? 0) - (a.userProgress?.progressPercent ?? 0))[0],
    [items],
  );

  const sections = useMemo(
    () => sectionsOf(items, resume, myLevel, searching),
    [items, resume, myLevel, searching],
  );

  function open(content: LibraryContentDto) {
    navigation.navigate('Reader', { contentId: content.id, title: content.title });
  }

  function resetFilters() {
    setKind('all');
    setDifficulty('all');
    setLength('all');
    setSearch('');
  }

  const columns = columnsFor(width);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={['left', 'right']}>
      <ScrollView
        contentContainerStyle={{ padding: spacing.lg, gap: spacing.lg, paddingBottom: spacing.xxl }}
        refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={refetch} />}
        keyboardShouldPersistTaps="handled"
      >
        <View style={{ gap: spacing.sm }}>
          <SearchBar
            value={search}
            onChange={setSearch}
            filtersOpen={filtersOpen}
            activeFilters={activeFilters}
            onToggleFilters={() => setFiltersOpen((open) => !open)}
          />

          {filtersOpen ? (
            <FilterPanel
              kind={kind}
              difficulty={difficulty}
              length={length}
              myLevel={myLevel}
              onKind={setKind}
              onDifficulty={setDifficulty}
              onLength={setLength}
              onReset={resetFilters}
              canReset={activeFilters > 0 || Boolean(search)}
            />
          ) : null}
        </View>

        {isLoading ? <Loading /> : null}
        {isError ? <ErrorState message={t('libraryError')} onRetry={refetch} /> : null}

        {!isLoading && !isError && items.length === 0 ? (
          <EmptyState
            emoji="📖"
            title={t('commonNothingFound')}
            description={t('libraryNothingFoundBody')}
          />
        ) : null}

        {/* Weiterlesen steht außerhalb der Gliederung – es ist kein Abschnitt
            der Bibliothek, sondern der Weg zurück in einen Text. Beim Suchen
            fällt es weg: Wer sucht, sucht etwas anderes. */}
        {resume && !searching ? (
          <ResumeBand content={resume} onPress={() => open(resume)} />
        ) : null}

        {searching && items.length > 0 ? (
          <SectionHeader label={t('libraryResults')} trailing={`${items.length}`} />
        ) : null}

        {sections.map((section) => (
          <View key={section.key} style={{ gap: spacing.sm }}>
            {section.label ? (
              <SectionHeader
                label={t(section.label, section.level ? { level: section.level } : undefined)}
                hint={section.hint ? t(section.hint) : undefined}
                trailing={`${section.items.length}`}
              />
            ) : null}

            <View style={{ gap: spacing.md }}>
              {gridRows(section.items, columns).map((row, index) => (
                <View key={index} style={cardRow}>
                  {row.map((content) => (
                    <TextCard
                      key={content.id}
                      content={content}
                      myLevel={myLevel}
                      onPress={() => open(content)}
                    />
                  ))}
                  {/* Leerplätze halten die letzte Zeile im Format der
                      darüberliegenden – sonst zieht sich eine einzelne Karte
                      über die ganze Breite. */}
                  {columns > row.length
                    ? Array.from({ length: columns - row.length }, (_, slot) => (
                        <View key={`gap-${slot}`} style={{ flex: 1 }} />
                      ))
                    : null}
                </View>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

// ------------------------------------------------------------- Gliederung

interface Section {
  key: string;
  /** Fehlt bei der Trefferliste: Die trägt ihre Überschrift selbst. */
  label?: TranslationKey;
  hint?: TranslationKey;
  level?: CefrLevel;
  items: LibraryContentDto[];
}

/**
 * Die Abschnitte der Übersicht.
 *
 * Beim Suchen und Filtern: ein einziger Block, sonst stünde über drei Treffern
 * dreimal eine Überschrift. Sonst nach Lage sortiert – erst was passt, dann
 * was leichtfällt, dann was fordert, zuletzt was schon gelesen ist. Leere
 * Abschnitte fallen weg, statt als Überschrift ohne Inhalt dazustehen.
 */
function sectionsOf(
  items: LibraryContentDto[],
  resume: LibraryContentDto | undefined,
  myLevel: CefrLevel | undefined,
  searching: boolean,
): Section[] {
  if (searching) return [{ key: 'results', items }];

  const rest = items.filter((item) => item.id !== resume?.id);
  const done = rest.filter((item) => item.userProgress?.completedAt);
  const open = rest.filter((item) => !item.userProgress?.completedAt);

  if (!myLevel) {
    return [
      { key: 'all', label: 'libraryAllTexts', items: open },
      ...(done.length ? [{ key: 'done', label: 'librarySectionRead' as const, items: done }] : []),
    ];
  }

  const byFit = (wanted: Fit[]) => open.filter((item) => wanted.includes(fitOf(item.level, myLevel)));

  const candidates: Section[] = [
    {
      key: 'match',
      label: 'librarySectionForYou',
      hint: 'librarySectionForYouHint',
      level: myLevel,
      items: byFit(['match']),
    },
    {
      key: 'easier',
      label: 'librarySectionWarmUp',
      hint: 'librarySectionWarmUpHint',
      items: byFit(['easier']),
    },
    {
      key: 'harder',
      label: 'librarySectionStretch',
      hint: 'librarySectionStretchHint',
      items: byFit(['stretch', 'hard']),
    },
    { key: 'done', label: 'librarySectionRead', items: done },
  ];

  return candidates.filter((section) => section.items.length > 0);
}

// ------------------------------------------------------------ Suchleiste

/**
 * Suche und Filter in einer Zeile: das Feld, daneben der Regler.
 *
 * Vorher lagen über der Liste drei Reihen Bedienelemente, dauerhaft, auch für
 * den, der nur lesen wollte. Jetzt ist die Zeile so hoch wie ein Feld, und
 * alles Weitere klappt darunter auf. Dass Filter greifen, sieht man am Regler:
 * Er färbt sich und trägt die Zahl.
 */
function SearchBar({
  value,
  onChange,
  filtersOpen,
  activeFilters,
  onToggleFilters,
}: {
  value: string;
  onChange: (value: string) => void;
  filtersOpen: boolean;
  activeFilters: number;
  onToggleFilters: () => void;
}) {
  const { t } = useTranslation();

  return (
    <View style={{ flexDirection: 'row', gap: spacing.sm }}>
      <View style={searchField}>
        <SearchIcon color={colors.textMuted} size={18} />
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
            <CloseIcon color={colors.textMuted} size={16} />
          </Pressable>
        ) : null}
      </View>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel={t('libraryFilters')}
        accessibilityState={{ expanded: filtersOpen }}
        onPress={onToggleFilters}
        style={[
          filterButton,
          (filtersOpen || activeFilters > 0) && {
            backgroundColor: colors.primary,
            borderColor: colors.primary,
          },
        ]}
      >
        <SlidersIcon
          color={filtersOpen || activeFilters > 0 ? colors.textInverse : colors.text}
          size={19}
        />
        {activeFilters > 0 ? (
          <View style={filterCount}>
            <Text style={filterCountText}>{activeFilters}</Text>
          </View>
        ) : null}
      </Pressable>
    </View>
  );
}

/**
 * Das aufgeklappte Filterblatt.
 *
 * Drei Fragen, in der Reihenfolge, in der ein Lernender sie stellt: Wie
 * schwer? Wie lang? Was für ein Text? Die Schwierigkeit steht relativ zum
 * eigenen Niveau – „leichter“, „mein Niveau“, „schwerer“ statt sechs
 * GER-Stufen, von denen man vier sowieso nie anfasst. Wer kein Lernprofil
 * hat, bekommt diese Frage nicht gestellt: Ohne eigenes Niveau gibt es kein
 * „leichter“.
 */
function FilterPanel({
  kind,
  difficulty,
  length,
  myLevel,
  onKind,
  onDifficulty,
  onLength,
  onReset,
  canReset,
}: {
  kind: Kind;
  difficulty: Difficulty;
  length: Length;
  myLevel: CefrLevel | undefined;
  onKind: (value: Kind) => void;
  onDifficulty: (value: Difficulty) => void;
  onLength: (value: Length) => void;
  onReset: () => void;
  canReset: boolean;
}) {
  const { t } = useTranslation();

  return (
    <View style={panel}>
      {myLevel ? (
        <ChoiceGroup
          label={t('libraryFilterDifficulty')}
          options={DIFFICULTY_FILTERS}
          value={difficulty}
          onChange={onDifficulty}
        />
      ) : null}

      <ChoiceGroup
        label={t('libraryFilterLength')}
        options={LENGTH_FILTERS}
        value={length}
        onChange={onLength}
      />

      <ChoiceGroup
        label={t('libraryFilterKind')}
        options={KIND_FILTERS}
        value={kind}
        onChange={onKind}
      />

      {canReset ? (
        <Pressable accessibilityRole="button" onPress={onReset} style={{ alignSelf: 'flex-start' }}>
          <Text style={[typography.label, { color: colors.primary }]}>
            {t('libraryFiltersReset')}
          </Text>
        </Pressable>
      ) : null}
    </View>
  );
}

function ChoiceGroup<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: ReadonlyArray<{ value: T; label: TranslationKey }>;
  value: T;
  onChange: (value: T) => void;
}) {
  const { t } = useTranslation();

  return (
    <View style={{ gap: spacing.sm }}>
      <Text style={[readingLabel, { color: colors.textMuted }]}>{label}</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm }}>
        {options.map((option) => (
          <FilterChip
            key={option.value}
            label={t(option.label)}
            active={option.value === value}
            onPress={() => onChange(option.value)}
          />
        ))}
      </View>
    </View>
  );
}

// --------------------------------------------------------------- Bausteine

/** Kolumnentitel mit durchlaufender Haarlinie, wie über einem Zeitungsteil. */
function SectionHeader({
  label,
  hint,
  trailing,
}: {
  label: string;
  hint?: string;
  trailing?: string;
}) {
  return (
    <View style={{ gap: 2 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.sm }}>
        <Text style={[readingLabel, { color: colors.text }]}>{label}</Text>
        <View style={{ flex: 1, height: 1, backgroundColor: colors.border }} />
        {trailing ? (
          <Text style={[readingLabel, { color: colors.textMuted }]}>{trailing}</Text>
        ) : null}
      </View>
      {hint ? <Text style={[typography.caption, { color: colors.textMuted }]}>{hint}</Text> : null}
    </View>
  );
}

/**
 * Der angefangene Text – das einzige farbige Feld der Seite.
 *
 * Bewusst die volle Leitfarbe und keine weiße Karte mit Fortschrittsbalken:
 * Das hier ist kein Eintrag in einer Liste, sondern die eine Handlung, die
 * neun von zehn Besuchen der Bibliothek ausmacht. Ein Band in Weinrot mit dem
 * Titel in der Lese-Antiqua sagt das ohne ein Wort Erklärung.
 */
function ResumeBand({ content, onPress }: { content: LibraryContentDto; onPress: () => void }) {
  const { t } = useTranslation();
  const percent = content.userProgress?.progressPercent ?? 0;
  const remaining = Math.max(1, Math.round(content.estimatedMinutes * (1 - percent / 100)));

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`${t('libraryContinueReading')}: ${content.title}`}
      onPress={onPress}
      style={({ pressed }) => [resumeBand, pressed && { opacity: 0.92 }]}
    >
      <View style={{ flex: 1, gap: spacing.sm }}>
        <Text style={[readingLabel, { color: 'rgba(255,255,255,0.75)' }]}>
          {t('libraryContinueReading')}
        </Text>

        <Text style={resumeTitle} numberOfLines={2}>
          {content.title}
        </Text>

        <View style={{ gap: 6 }}>
          <View style={resumeTrack}>
            <View style={[resumeFill, { width: `${Math.max(2, Math.min(100, percent))}%` }]} />
          </View>
          <Text style={resumeMeta}>
            {t('libraryPercentRead', { percent })} · {t('libraryRemainingMinutes', { count: remaining })}
          </Text>
        </View>
      </View>

      <ChevronRightIcon color="rgba(255,255,255,0.9)" size={22} />
    </Pressable>
  );
}

/**
 * Die Karte eines Texts.
 *
 * Oben die Lage – drei Balken und ein Wort dazu („Dein Niveau“) statt eines
 * GER-Kürzels allein, daneben die Lesedauer. Dann Titel und Untertitel, dann
 * die ersten Sätze des Texts hinter einer Haarlinie, wie ein Zitat: Kein
 * Klappentext verrät so gut, ob man weiterlesen will, wie der Anfang selbst.
 * Unten die Angaben, die erst nach der Entscheidung zählen – Textart, Länge,
 * Übungen.
 *
 * Gelesene Texte tragen statt der Lage einen grünen Haken; wo man mittendrin
 * ist, liegt der Fortschritt als Strich auf der Unterkante, damit alle Karten
 * gleich hoch bleiben.
 */
function TextCard({
  content,
  myLevel,
  onPress,
}: {
  content: LibraryContentDto;
  myLevel: CefrLevel | undefined;
  onPress: () => void;
}) {
  const { t } = useTranslation();
  const percent = content.userProgress?.progressPercent ?? 0;
  const done = Boolean(content.userProgress?.completedAt);
  const fit = fitOf(content.level, myLevel);
  const accent = done ? colors.success : FIT_COLORS[fit];
  const typeLabel = content.type === 'STORY' ? t('libraryTypeStory') : t('libraryTypeArticle');

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={content.title}
      onPress={onPress}
      style={({ pressed }) => [card, pressed && { opacity: 0.94, transform: [{ scale: 0.995 }] }]}
    >
      <View style={cardHead}>
        {done ? (
          <Text style={[cardFit, { color: colors.success }]} numberOfLines={1}>
            ✓ {t('libraryDone')} · {content.level}
          </Text>
        ) : (
          <>
            <FitMeter fit={fit} color={accent} />
            <Text style={[cardFit, { color: accent }]} numberOfLines={1}>
              {myLevel ? `${t(FIT_LABELS[fit])} · ${content.level}` : content.level}
            </Text>
          </>
        )}

        <View style={{ flex: 1 }} />

        <ClockIcon color={colors.textMuted} size={13} />
        <Text style={cardMeta}>
          {content.estimatedMinutes} {t('commonMinutesShort')}
        </Text>
      </View>

      <Text style={cardTitle} numberOfLines={2}>
        {content.title}
      </Text>

      <Text style={cardSummary} numberOfLines={1}>
        {content.summary}
      </Text>

      {content.excerpt ? (
        <View style={cardQuote}>
          <Text style={cardExcerpt} numberOfLines={2}>
            {content.excerpt}
          </Text>
        </View>
      ) : null}

      <Text style={cardFoot} numberOfLines={1}>
        {topic(content, typeLabel)} · {t('readerWords', { count: content.wordCount })}
        {content.exerciseCount > 0
          ? ` · ${t('libraryExerciseCount', { count: content.exerciseCount })}`
          : ''}
      </Text>

      {percent > 0 && !done ? (
        <View style={cardProgress}>
          <View style={[cardProgressFill, { width: `${Math.min(100, percent)}%`, backgroundColor: accent }]} />
        </View>
      ) : null}
    </Pressable>
  );
}

/**
 * Die Lage als Balkengruppe – wie die Feldstärke auf einem Telefon, nur
 * andersherum gelesen: Je mehr Balken, desto mehr kostet der Text.
 */
function FitMeter({ fit, color }: { fit: Fit; color: string }) {
  const filled = fit === 'easier' ? 1 : fit === 'match' ? 2 : 3;

  return (
    <View style={meterRow}>
      {[5, 8, 11].map((height, index) => (
        <View
          key={height}
          style={{
            width: 3,
            height,
            borderRadius: 1.5,
            backgroundColor: index < filled ? color : colors.border,
          }}
        />
      ))}
    </View>
  );
}

/**
 * Ein Filterknopf.
 *
 * Liegt hier und nicht bei den gemeinsamen Bausteinen, weil ihn außer der
 * Bibliothek nur die Mediathek verwendet – und die hat ihn von hier
 * übernommen, als beide noch dieselben Chip-Reihen trugen.
 */
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

// ------------------------------------------------------------------ Styles

const searchField = {
  flex: 1,
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

const filterButton = {
  width: 46,
  height: 46,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  borderRadius: radius.full,
  backgroundColor: colors.surface,
  borderWidth: 1,
  borderColor: colors.border,
};

/** Die Zahl der greifenden Filter, als Punkt an der Ecke des Reglers. */
const filterCount = {
  position: 'absolute' as const,
  top: -2,
  right: -2,
  minWidth: 17,
  height: 17,
  paddingHorizontal: 4,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  borderRadius: radius.full,
  backgroundColor: colors.text,
  borderWidth: 2,
  borderColor: colors.background,
};

const filterCountText = {
  fontFamily: fontFamily.bold,
  fontSize: 9,
  color: colors.textInverse,
};

const panel = {
  gap: spacing.md,
  padding: spacing.md,
  borderRadius: radius.lg,
  backgroundColor: colors.surface,
  borderWidth: 1,
  borderColor: colors.border,
};

const chipStyle = {
  paddingHorizontal: spacing.md,
  paddingVertical: spacing.sm,
  borderRadius: radius.full,
  backgroundColor: colors.background,
  borderWidth: 1,
  borderColor: colors.border,
};

const resumeBand = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  gap: spacing.md,
  padding: spacing.lg,
  borderRadius: radius.lg,
  backgroundColor: colors.primary,
  ...shadow.lift,
};

const resumeTitle = {
  fontFamily: fontFamily.serif,
  fontSize: 21,
  lineHeight: 26,
  fontWeight: '700' as const,
  color: colors.textInverse,
};

const resumeTrack = {
  height: 4,
  borderRadius: 2,
  backgroundColor: 'rgba(255,255,255,0.28)',
  overflow: 'hidden' as const,
};

const resumeFill = {
  height: '100%' as const,
  borderRadius: 2,
  backgroundColor: colors.textInverse,
};

const resumeMeta = {
  ...typography.caption,
  color: 'rgba(255,255,255,0.8)',
};

const cardRow = {
  flexDirection: 'row' as const,
  alignItems: 'stretch' as const,
  gap: spacing.md,
};

const card = {
  flex: 1,
  gap: 3,
  padding: spacing.md,
  paddingBottom: spacing.md + 2,
  borderRadius: radius.lg,
  backgroundColor: colors.surface,
  borderWidth: 1,
  borderColor: colors.border,
  overflow: 'hidden' as const,
  ...shadow.card,
};

const cardHead = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  gap: 5,
  marginBottom: 3,
};

const meterRow = {
  flexDirection: 'row' as const,
  alignItems: 'flex-end' as const,
  gap: 2,
  height: 11,
};

const cardFit = {
  fontFamily: fontFamily.semiBold,
  fontSize: 9.5,
  letterSpacing: 1.2,
  textTransform: 'uppercase' as const,
  flexShrink: 1,
};

/**
 * Der Titel in der Lese-Antiqua – dieselbe Schrift, in der der Text danach
 * gesetzt ist: Karte und Seite kommen aus derselben Werkstatt.
 */
const cardTitle = {
  fontFamily: fontFamily.serif,
  fontSize: 18,
  lineHeight: 23,
  fontWeight: '700' as const,
  color: colors.text,
};

const cardSummary = {
  ...typography.caption,
  color: colors.textMuted,
};

/** Die Leseprobe hinter einer Haarlinie – wie ein Zitat im Satz. */
const cardQuote = {
  marginTop: 8,
  paddingLeft: spacing.sm,
  borderLeftWidth: 2,
  borderLeftColor: colors.border,
};

const cardExcerpt = {
  fontFamily: fontFamily.serif,
  fontSize: 13,
  lineHeight: 19,
  color: colors.text,
  opacity: 0.7,
};

const cardFoot = {
  ...readingLabel,
  fontSize: 9.5,
  color: colors.textMuted,
  marginTop: 8,
};

const cardMeta = {
  ...readingLabel,
  fontSize: 10,
  color: colors.textMuted,
};

/** Der Fortschritt als Strich auf der Unterkante – außerhalb des Satzspiegels. */
const cardProgress = {
  position: 'absolute' as const,
  left: 0,
  right: 0,
  bottom: 0,
  height: 3,
  backgroundColor: colors.surfaceAlt,
};

const cardProgressFill = {
  height: '100%' as const,
};
