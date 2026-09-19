import React from 'react';
import { Pressable, RefreshControl, ScrollView, Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { useNavigation } from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Body,
  Caption,
  Card,
  ErrorState,
  Heading,
  LevelBadge,
  Loading,
  ProgressBar,
  Row,
  Title,
} from '../../components';
import { progressApi } from '../../api/endpoints';
import { useTranslation } from '../../i18n';
import type { TranslationKey } from '../../i18n';
import { useAuthStore } from '../../store/auth.store';
import { colors, radius, shadow, spacing, typography } from '../../theme';
import { AiCover, LibraryShelfCover, NotebookCover, VideoCover, VocabCover } from './HomeCovers';
import type { MainTabParamList } from '../../navigation/types';

/** Sonntag zuerst – `Date.getUTCDay()` zählt so. */
const WEEKDAY_KEYS: TranslationKey[] = [
  'homeWeekdaySun',
  'homeWeekdayMon',
  'homeWeekdayTue',
  'homeWeekdayWed',
  'homeWeekdayThu',
  'homeWeekdayFri',
  'homeWeekdaySat',
];

/**
 * Startseite als Kachelraster.
 *
 * Vorher stand hier eine lange Kette einzelner Karten (Streak, XP, Tagesziel,
 * fällige Vokabeln, Weiterlesen, Weiterhören, Wochenübersicht, zwei Mini-
 * Kacheln am Ende) – auf den ersten Blick nicht zu erfassen, welche der neun
 * Karten wohin führt. Jetzt trägt eine schlanke Statuszeile die Tageszahlen,
 * darunter folgt sofort das Kachelraster als Hauptnavigation: ein Ziel pro
 * Kachel, per Farbe unterscheidbar. Fortsetzen (Buch/Hörtext) und die
 * Wochenübersicht bleiben als zusätzliche Information darunter, nicht davor.
 */
export default function HomeScreen() {
  const navigation = useNavigation<BottomTabNavigationProp<MainTabParamList>>();
  const { t } = useTranslation();
  const user = useAuthStore((state) => state.user);

  const { data, isLoading, isError, refetch, isRefetching } = useQuery({
    queryKey: ['dashboard'],
    queryFn: progressApi.dashboard,
    staleTime: 30_000,
  });

  if (isLoading) return <Loading />;
  if (isError || !data) {
    return <ErrorState message={t('homeDashboardError')} onRetry={refetch} />;
  }

  const goalProgress = data.dailyGoalMinutes
    ? (data.minutesToday / data.dailyGoalMinutes) * 100
    : 0;
  const goalReached = data.minutesToday >= data.dailyGoalMinutes;
  const maxMinutes = Math.max(...data.weeklyActivity.map((entry) => entry.minutes), 1);

  const tiles: TileSpec[] = [
    {
      key: 'vocabulary',
      Cover: VocabCover,
      label: t('homeTileVocabulary'),
      subtitle:
        data.dueCards > 0
          ? t('homeTileVocabularyDue', { count: data.dueCards })
          : t('homeTileVocabularyPractice'),
      accent: colors.primary,
      onPress: () => navigation.navigate('Vocabulary', { screen: 'DeckList' }),
    },
    {
      key: 'notebook',
      Cover: NotebookCover,
      label: t('homeTileNotebook'),
      subtitle: t('homeTileNotebookSubtitle'),
      accent: colors.warning,
      onPress: () => navigation.navigate('Notebook', { screen: 'Bookshelf' }),
    },
    {
      key: 'library',
      Cover: LibraryShelfCover,
      label: t('homeTileLibrary'),
      subtitle: t('homeTileLibrarySubtitle'),
      accent: colors.success,
      onPress: () => navigation.navigate('Library', { screen: 'LibraryList' }),
    },
    {
      key: 'videos',
      Cover: VideoCover,
      label: t('homeTileVideos'),
      subtitle: t('homeTileVideosSubtitle'),
      accent: colors.info,
      onPress: () => navigation.navigate('Videos', { screen: 'VideoList' }),
    },
  ];

  const hasResume = Boolean(data.continueReading || data.continueWatching);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={['top']}>
      <ScrollView
        contentContainerStyle={{ padding: spacing.lg, gap: spacing.lg, paddingBottom: spacing.xxl }}
        refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={refetch} />}
      >
        <Row>
          <View style={{ flex: 1 }}>
            <Caption>{t(greetingKey())}</Caption>
            <Title>{user?.displayName ?? t('homeWelcomeFallback')}</Title>
          </View>
          {data.activeProfile ? (
            <Row gap={spacing.xs}>
              <Text style={{ fontSize: 24 }}>{data.activeProfile.language.flagEmoji}</Text>
              <LevelBadge level={data.activeProfile.level} />
            </Row>
          ) : null}
        </Row>

        {/* Eine schlanke Statuszeile statt drei einzelner Karten: Streak, XP
            und Tagesziel sind Tageszahlen, keine eigenen Navigationsziele –
            sie müssen nicht so viel Fläche beanspruchen wie die Kacheln. */}
        <Card>
          <Row gap={spacing.lg}>
            <StatBlock icon="🔥" value={data.user.streakDays} label={t('homeStatStreak')} />
            <View style={statDivider} />
            <StatBlock icon="⭐" value={data.user.xp} label={t('homeStatXp')} />
          </Row>
          <View style={{ gap: spacing.xs, paddingTop: spacing.md }}>
            <Row>
              <Caption>{t('homeDailyGoal')}</Caption>
              <View style={{ flex: 1 }} />
              <Caption>
                {data.minutesToday} / {data.dailyGoalMinutes} {t('commonMinutesShort')}
              </Caption>
            </Row>
            <ProgressBar value={goalProgress} color={goalReached ? colors.success : colors.primary} height={8} />
          </View>
        </Card>

        {/* Das Kachelraster ist die Hauptnavigation dieser Seite – ein Ziel
            pro Kachel, per Farbe unterscheidbar. */}
        <View style={tileGrid}>
          {tiles.map(({ key, ...tile }) => (
            <Tile key={key} {...tile} />
          ))}
        </View>

        <Card
          onPress={() => navigation.navigate('Assistant', { screen: 'AiHub' })}
          style={{ padding: 0, overflow: 'hidden', borderColor: colors.premium }}
        >
          {/* Volle Kartenbreite statt der halbbreiten Kachel-Banner – die
              Karte ist hier durchgehend breit, ein Ausschnitt aus derselben
              Illustration wirkt entsprechend als weites Panorama. */}
          <View style={{ width: '100%', aspectRatio: 21 / 9 }}>
            <AiCover />
          </View>
          <View style={{ padding: spacing.lg, gap: 4 }}>
            <Row>
              <Heading>{t('homeAiCardTitle')}</Heading>
              <View style={{ flex: 1 }} />
              <Text style={{ fontSize: 20, color: colors.premium }}>›</Text>
            </Row>
            <Caption>{t('homeAiCardSubtitle')}</Caption>
          </View>
        </Card>

        {hasResume ? (
          <Card>
            <Heading>{t('homeResumeHeading')}</Heading>
            <View style={{ gap: spacing.sm, paddingTop: spacing.xs }}>
              {data.continueReading ? (
                <ResumeRow
                  label={t('homeResumeReading')}
                  title={data.continueReading.title}
                  progress={data.continueReading.userProgress?.progressPercent ?? 0}
                  onPress={() =>
                    navigation.navigate('Library', {
                      screen: 'Reader',
                      params: { contentId: data.continueReading!.id, title: data.continueReading!.title },
                    })
                  }
                />
              ) : null}
              {data.continueWatching ? (
                <ResumeRow
                  label={t('homeResumeWatching')}
                  title={data.continueWatching.title}
                  progress={
                    data.continueWatching.durationSec
                      ? ((data.continueWatching.userProgress?.positionSec ?? 0) /
                          data.continueWatching.durationSec) *
                        100
                      : 0
                  }
                  onPress={() =>
                    navigation.navigate('Videos', {
                      screen: 'VideoPlayer',
                      params: { videoId: data.continueWatching!.id, title: data.continueWatching!.title },
                    })
                  }
                />
              ) : null}
            </View>
          </Card>
        ) : null}

        {/* Wochenübersicht als schlanke Balken – ohne Chart-Bibliothek. */}
        <Card>
          <Heading>{t('homeWeekHeading')}</Heading>
          <Row gap={spacing.sm} style={{ alignItems: 'flex-end', height: 110 }}>
            {data.weeklyActivity.map((entry) => {
              const height = Math.max(4, (entry.minutes / maxMinutes) * 80);
              const weekday = t(WEEKDAY_KEYS[new Date(entry.date).getUTCDay()]);
              return (
                <View key={entry.date} style={{ flex: 1, alignItems: 'center', gap: spacing.xs }}>
                  <Text style={[typography.label, { color: colors.textMuted }]}>
                    {entry.minutes || ''}
                  </Text>
                  <View
                    style={{
                      width: '70%',
                      height,
                      borderRadius: radius.sm,
                      backgroundColor: entry.minutes > 0 ? colors.primary : colors.surfaceAlt,
                    }}
                  />
                  <Caption>{weekday}</Caption>
                </View>
              );
            })}
          </Row>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

// ------------------------------------------------------------------ Kacheln

type CoverComponent = () => React.JSX.Element;

interface TileSpec {
  key: string;
  Cover: CoverComponent;
  label: string;
  subtitle: string;
  accent: string;
  onPress: () => void;
}

/**
 * Wie die Buchcover der Bibliothek: ein kleines, selbst gezeichnetes Bild
 * statt eines Icons in einem eingefärbten Kreis (siehe `HomeCovers`). Label
 * und Untertitel bleiben als normaler Text darunter – anders als bei den
 * Bibliothekskacheln ist der Untertitel hier ein Statuswert („12 fällig“),
 * der lesbar bleiben soll und nicht über ein Bild gelegt wird.
 */
function Tile({ Cover, label, subtitle, accent, onPress }: Omit<TileSpec, 'key'>) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={onPress}
      style={({ pressed }) => [tile, pressed && { opacity: 0.85, transform: [{ scale: 0.98 }] }]}
    >
      <View style={tileCover}>
        <Cover />
      </View>
      <View style={{ padding: spacing.md, gap: 2 }}>
        <Text style={tileLabel}>{label}</Text>
        <Text style={[tileSubtitle, { color: accent }]}>{subtitle}</Text>
      </View>
    </Pressable>
  );
}

function StatBlock({ icon, value, label }: { icon: string; value: number; label: string }) {
  return (
    <Row gap={spacing.sm}>
      <Text style={{ fontSize: 22 }}>{icon}</Text>
      <View>
        <Text style={typography.title}>{value}</Text>
        <Caption>{label}</Caption>
      </View>
    </Row>
  );
}

function ResumeRow({
  label,
  title,
  progress,
  onPress,
}: {
  label: string;
  title: string;
  progress: number;
  onPress: () => void;
}) {
  return (
    <Pressable onPress={onPress} style={resumeRow}>
      <View style={{ flex: 1, gap: 4 }}>
        <Caption>{label}</Caption>
        <Body>{title}</Body>
        <ProgressBar value={progress} height={4} />
      </View>
      <Text style={{ fontSize: 18, color: colors.textMuted }}>›</Text>
    </Pressable>
  );
}

function greetingKey(): TranslationKey {
  const hour = new Date().getHours();
  if (hour < 11) return 'homeGreetingMorning';
  if (hour < 18) return 'homeGreetingDay';
  return 'homeGreetingEvening';
}

// ------------------------------------------------------------------ Styles

const tileGrid = {
  flexDirection: 'row' as const,
  flexWrap: 'wrap' as const,
  gap: spacing.md,
};

// Wie `Card`: Rahmenlinie plus echter Schatten statt einer flachen Fläche –
// die Kacheln sollen als Karten wirken, nicht als eingefärbte Buttons.
const tile = {
  flexBasis: '47%' as const,
  flexGrow: 1,
  backgroundColor: colors.surface,
  borderRadius: radius.lg,
  borderWidth: 1,
  borderColor: colors.border,
  overflow: 'hidden' as const,
  ...shadow.card,
};

/** Banner-Bild oben in der Kachel – 16:9, damit es nicht zu viel Fläche frisst. */
const tileCover = {
  width: '100%' as const,
  aspectRatio: 16 / 9,
  backgroundColor: colors.surfaceAlt,
};

const tileLabel = {
  ...typography.bodyStrong,
  color: colors.text,
};

const tileSubtitle = {
  ...typography.caption,
  fontWeight: '600' as const,
};

const statDivider = {
  width: 1,
  alignSelf: 'stretch' as const,
  backgroundColor: colors.border,
};

const resumeRow = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  gap: spacing.sm,
  paddingVertical: spacing.xs,
};
