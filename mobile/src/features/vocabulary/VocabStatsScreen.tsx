import React from 'react';
import { Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import {
  Caption,
  Card,
  ErrorState,
  Heading,
  Loading,
  ProgressBar,
  Row,
  Screen,
  Title,
} from '../../components';
import { vocabularyApi } from '../../api/endpoints';
import { colors, radius, spacing, typography } from '../../theme';

const STATUS_META = [
  { key: 'NEW', label: 'Neu', color: colors.textMuted },
  { key: 'LEARNING', label: 'Am Lernen', color: colors.warning },
  { key: 'REVIEW', label: 'In Wiederholung', color: colors.primary },
  { key: 'MASTERED', label: 'Gemeistert', color: colors.success },
] as const;

export default function VocabStatsScreen() {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['vocab-stats'],
    queryFn: vocabularyApi.stats,
  });

  if (isLoading) return <Loading />;
  if (isError || !data) {
    return <ErrorState message="Die Statistik konnte nicht geladen werden." onRetry={refetch} />;
  }

  const maxReviews = Math.max(...data.history.map((entry) => entry.reviews), 1);

  return (
    <Screen scroll>
      <Row gap={spacing.md}>
        <Card style={{ flex: 1, alignItems: 'center' }}>
          <Text style={typography.title}>{data.totalCards}</Text>
          <Caption>Karten gesamt</Caption>
        </Card>
        <Card style={{ flex: 1, alignItems: 'center' }}>
          <Text style={typography.title}>{data.dueToday}</Text>
          <Caption>Heute fällig</Caption>
        </Card>
        <Card style={{ flex: 1, alignItems: 'center' }}>
          <Text style={typography.title}>{data.accuracy7d}%</Text>
          <Caption>Trefferquote 7T</Caption>
        </Card>
      </Row>

      <Card>
        <Heading>Verteilung</Heading>
        {STATUS_META.map((status) => {
          const value = data.byStatus[status.key] ?? 0;
          const percent = data.totalCards ? (value / data.totalCards) * 100 : 0;
          return (
            <View key={status.key} style={{ gap: spacing.xs, paddingVertical: spacing.xs }}>
              <Row>
                <Caption>{status.label}</Caption>
                <View style={{ flex: 1 }} />
                <Caption>{value}</Caption>
              </Row>
              <ProgressBar value={percent} color={status.color} height={6} />
            </View>
          );
        })}
      </Card>

      <Card>
        <Heading>Letzte 7 Tage</Heading>
        <Row gap={spacing.sm} style={{ alignItems: 'flex-end', height: 130 }}>
          {data.history.map((entry) => {
            const total = Math.max(4, (entry.reviews / maxReviews) * 90);
            const correctHeight = entry.reviews
              ? (entry.correct / entry.reviews) * total
              : 0;
            return (
              <View key={entry.date} style={{ flex: 1, alignItems: 'center', gap: spacing.xs }}>
                <Caption>{entry.reviews || ''}</Caption>
                {/* Gesamtbalken mit eingefärbtem Anteil korrekter Antworten. */}
                <View
                  style={{
                    width: '70%',
                    height: total,
                    borderRadius: radius.sm,
                    backgroundColor: colors.surfaceAlt,
                    justifyContent: 'flex-end',
                    overflow: 'hidden',
                  }}
                >
                  <View style={{ height: correctHeight, backgroundColor: colors.success }} />
                </View>
                <Caption>{entry.date.slice(8)}</Caption>
              </View>
            );
          })}
        </Row>
        <Caption>Grün = korrekt beantwortet</Caption>
      </Card>

      <Card style={{ alignItems: 'center', gap: spacing.sm }}>
        <Text style={{ fontSize: 34 }}>🔥</Text>
        <Title>{data.streakDays} Tage in Folge</Title>
        <Caption>Wiederhole täglich, um die Serie zu halten.</Caption>
      </Card>
    </Screen>
  );
}
