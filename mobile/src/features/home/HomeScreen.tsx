import React from 'react';
import { RefreshControl, ScrollView, Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { useNavigation } from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Body,
  Button,
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
import { useAuthStore } from '../../store/auth.store';
import { colors, radius, spacing, typography } from '../../theme';
import type { MainTabParamList } from '../../navigation/types';

const WEEKDAYS = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];

export default function HomeScreen() {
  const navigation = useNavigation<BottomTabNavigationProp<MainTabParamList>>();
  const user = useAuthStore((state) => state.user);

  const { data, isLoading, isError, refetch, isRefetching } = useQuery({
    queryKey: ['dashboard'],
    queryFn: progressApi.dashboard,
    staleTime: 30_000,
  });

  if (isLoading) return <Loading />;
  if (isError || !data) {
    return <ErrorState message="Das Dashboard konnte nicht geladen werden." onRetry={refetch} />;
  }

  const goalProgress = data.dailyGoalMinutes
    ? (data.minutesToday / data.dailyGoalMinutes) * 100
    : 0;
  const goalReached = data.minutesToday >= data.dailyGoalMinutes;
  const maxMinutes = Math.max(...data.weeklyActivity.map((entry) => entry.minutes), 1);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={['top']}>
      <ScrollView
        contentContainerStyle={{ padding: spacing.lg, gap: spacing.lg, paddingBottom: spacing.xxl }}
        refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={refetch} />}
      >
        <Row>
          <View style={{ flex: 1 }}>
            <Caption>{greeting()}</Caption>
            <Title>{user?.displayName ?? 'Willkommen'}</Title>
          </View>
          {data.activeProfile ? (
            <Row gap={spacing.xs}>
              <Text style={{ fontSize: 24 }}>{data.activeProfile.language.flagEmoji}</Text>
              <LevelBadge level={data.activeProfile.level} />
            </Row>
          ) : null}
        </Row>

        {/* Streak und XP nebeneinander – die zwei Zahlen, die täglich motivieren. */}
        <Row gap={spacing.md}>
          <Card style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontSize: 28 }}>🔥</Text>
            <Text style={typography.title}>{data.user.streakDays}</Text>
            <Caption>Tage in Folge</Caption>
          </Card>
          <Card style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontSize: 28 }}>⭐</Text>
            <Text style={typography.title}>{data.user.xp}</Text>
            <Caption>XP gesamt</Caption>
          </Card>
        </Row>

        <Card>
          <Row>
            <Heading>Tagesziel</Heading>
            <View style={{ flex: 1 }} />
            <Caption>
              {data.minutesToday} / {data.dailyGoalMinutes} Min
            </Caption>
          </Row>
          <ProgressBar
            value={goalProgress}
            color={goalReached ? colors.success : colors.primary}
            height={10}
          />
          <Caption>
            {goalReached
              ? 'Tagesziel geschafft – stark!'
              : `Noch ${Math.max(0, data.dailyGoalMinutes - data.minutesToday)} Minuten bis zum Ziel.`}
          </Caption>
        </Card>

        {data.dueCards > 0 ? (
          <Card style={{ backgroundColor: colors.primarySoft, borderColor: colors.primary }}>
            <Row gap={spacing.md}>
              <Text style={{ fontSize: 32 }}>🗂️</Text>
              <View style={{ flex: 1 }}>
                <Heading>{data.dueCards} Karten sind fällig</Heading>
                <Caption>Wiederholen festigt den Wortschatz am besten.</Caption>
              </View>
            </Row>
            <Button
              label="Jetzt wiederholen"
              onPress={() => navigation.navigate('Vocabulary', { screen: 'Review', params: {} })}
            />
          </Card>
        ) : (
          <Card>
            <Row gap={spacing.md}>
              <Text style={{ fontSize: 32 }}>✅</Text>
              <View style={{ flex: 1 }}>
                <Heading>Keine Wiederholungen offen</Heading>
                <Caption>Zeit für neue Vokabeln oder einen Text.</Caption>
              </View>
            </Row>
          </Card>
        )}

        {data.continueReading ? (
          <Card
            onPress={() =>
              navigation.navigate('Library', {
                screen: 'Reader',
                params: {
                  contentId: data.continueReading!.id,
                  title: data.continueReading!.title,
                },
              })
            }
          >
            <Caption>Weiterlesen</Caption>
            <Heading>{data.continueReading.title}</Heading>
            <ProgressBar value={data.continueReading.userProgress?.progressPercent ?? 0} height={6} />
          </Card>
        ) : null}

        {data.continueListening ? (
          <Card
            onPress={() =>
              navigation.navigate('Media', {
                screen: 'Player',
                params: {
                  mediaId: data.continueListening!.id,
                  title: data.continueListening!.title,
                },
              })
            }
          >
            <Caption>Weiterhören</Caption>
            <Heading>{data.continueListening.title}</Heading>
            <ProgressBar
              value={
                data.continueListening.durationSec
                  ? ((data.continueListening.userProgress?.positionSec ?? 0) /
                      data.continueListening.durationSec) *
                    100
                  : 0
              }
              height={6}
            />
          </Card>
        ) : null}

        {/* Wochenübersicht als schlanke Balken – ohne Chart-Bibliothek. */}
        <Card>
          <Heading>Diese Woche</Heading>
          <Row gap={spacing.sm} style={{ alignItems: 'flex-end', height: 110 }}>
            {data.weeklyActivity.map((entry) => {
              const height = Math.max(4, (entry.minutes / maxMinutes) * 80);
              const weekday = WEEKDAYS[new Date(entry.date).getUTCDay()];
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

        <Row gap={spacing.md}>
          <Card style={{ flex: 1 }} onPress={() => navigation.navigate('Notebook', { screen: 'NotebookList' })}>
            <Text style={{ fontSize: 26 }}>📓</Text>
            <Body>Lernheft öffnen</Body>
          </Card>
          <Card style={{ flex: 1 }} onPress={() => navigation.navigate('Assistant', { screen: 'AiHub' })}>
            <Text style={{ fontSize: 26 }}>✨</Text>
            <Body>Mit der KI üben</Body>
          </Card>
        </Row>
      </ScrollView>
    </SafeAreaView>
  );
}

function greeting(): string {
  const hour = new Date().getHours();
  if (hour < 11) return 'Guten Morgen';
  if (hour < 18) return 'Hallo';
  return 'Guten Abend';
}
