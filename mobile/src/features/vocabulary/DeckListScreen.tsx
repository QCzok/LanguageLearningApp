import React from 'react';
import { RefreshControl, ScrollView, Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Body,
  Button,
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
import { vocabularyApi } from '../../api/endpoints';
import { colors, spacing, typography } from '../../theme';
import type { VocabularyStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<VocabularyStackParamList, 'DeckList'>;

export default function DeckListScreen({ navigation }: Props) {
  const decks = useQuery({ queryKey: ['decks'], queryFn: () => vocabularyApi.decks() });
  const stats = useQuery({ queryKey: ['vocab-stats'], queryFn: vocabularyApi.stats });

  if (decks.isLoading) return <Loading />;
  if (decks.isError || !decks.data) {
    return <ErrorState message="Decks konnten nicht geladen werden." onRetry={decks.refetch} />;
  }

  const dueTotal = stats.data?.dueToday ?? 0;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={['left', 'right']}>
      <ScrollView
        contentContainerStyle={{ padding: spacing.lg, gap: spacing.lg, paddingBottom: spacing.xxl }}
        refreshControl={
          <RefreshControl
            refreshing={decks.isRefetching}
            onRefresh={() => {
              void decks.refetch();
              void stats.refetch();
            }}
          />
        }
      >
        <Card style={{ backgroundColor: colors.primarySoft, borderColor: colors.primary }}>
          <Row gap={spacing.md}>
            <Text style={{ fontSize: 32 }}>⏰</Text>
            <View style={{ flex: 1 }}>
              <Heading>{dueTotal > 0 ? `${dueTotal} Karten fällig` : 'Alles wiederholt'}</Heading>
              <Caption>
                {dueTotal > 0
                  ? 'Wiederhole jetzt alle fälligen Karten deckübergreifend.'
                  : 'Starte eine Sitzung, um neue Vokabeln kennenzulernen.'}
              </Caption>
            </View>
          </Row>
          <Button
            label={dueTotal > 0 ? 'Alle wiederholen' : 'Neue Vokabeln lernen'}
            onPress={() => navigation.navigate('Review', { title: 'Alle Decks' })}
          />
        </Card>

        <Row>
          <Title>Decks</Title>
          <View style={{ flex: 1 }} />
          <Button
            label="Statistik"
            variant="ghost"
            fullWidth={false}
            onPress={() => navigation.navigate('VocabStats')}
          />
        </Row>

        {decks.data.length === 0 ? (
          <EmptyState
            emoji="🗂️"
            title="Noch keine Decks"
            description="Für dein Niveau sind noch keine Vokabelsammlungen hinterlegt."
          />
        ) : (
          decks.data.map((deck) => {
            const progress = deck.progress;
            const learned = progress ? progress.total - progress.new : 0;
            const percent = progress?.total ? (learned / progress.total) * 100 : 0;

            return (
              <Card
                key={deck.id}
                onPress={() =>
                  navigation.navigate('DeckDetail', { deckId: deck.id, title: deck.title })
                }
              >
                <Row gap={spacing.md}>
                  <View style={{ flex: 1, gap: spacing.xs }}>
                    <Row gap={spacing.sm}>
                      <Heading>{deck.title}</Heading>
                      <LevelBadge level={deck.level} small />
                    </Row>
                    {deck.description ? <Caption>{deck.description}</Caption> : null}
                  </View>
                  {progress && progress.dueNow > 0 ? (
                    <View style={badgeStyle}>
                      <Text style={[typography.label, { color: colors.textInverse }]}>
                        {progress.dueNow}
                      </Text>
                    </View>
                  ) : null}
                </Row>

                <ProgressBar value={percent} height={6} />
                <Row gap={spacing.md}>
                  <Caption>{deck.itemCount} Vokabeln</Caption>
                  {progress ? (
                    <>
                      <Caption>· {progress.mastered} gemeistert</Caption>
                      <Caption>· {progress.new} neu</Caption>
                    </>
                  ) : null}
                </Row>
              </Card>
            );
          })
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const badgeStyle = {
  backgroundColor: colors.warning,
  minWidth: 28,
  height: 28,
  borderRadius: 14,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  paddingHorizontal: 6,
};
