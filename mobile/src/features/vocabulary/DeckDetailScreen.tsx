import React from 'react';
import { Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
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
  Screen,
} from '../../components';
import { vocabularyApi } from '../../api/endpoints';
import { colors, spacing, typography } from '../../theme';
import type { VocabularyStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<VocabularyStackParamList, 'DeckDetail'>;

export default function DeckDetailScreen({ route, navigation }: Props) {
  const { deckId, title } = route.params;

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['deck', deckId],
    queryFn: () => vocabularyApi.deck(deckId),
  });

  if (isLoading) return <Loading />;
  if (isError || !data) {
    return <ErrorState message="Das Deck konnte nicht geladen werden." onRetry={refetch} />;
  }

  const progress = data.progress;
  const learned = progress ? progress.total - progress.new : 0;

  return (
    <Screen scroll>
      <Card>
        <Row gap={spacing.sm}>
          <Heading>{data.title}</Heading>
          <LevelBadge level={data.level} small />
        </Row>
        {data.description ? <Caption>{data.description}</Caption> : null}

        {progress ? (
          <>
            <ProgressBar value={progress.total ? (learned / progress.total) * 100 : 0} />
            <Row gap={spacing.lg}>
              <StatChip label="Neu" value={progress.new} color={colors.textMuted} />
              <StatChip label="Am Lernen" value={progress.learning} color={colors.warning} />
              <StatChip label="Wiederholung" value={progress.review} color={colors.primary} />
              <StatChip label="Gemeistert" value={progress.mastered} color={colors.success} />
            </Row>
          </>
        ) : null}

        <Button
          label={
            progress && progress.dueNow > 0
              ? `${progress.dueNow} fällige Karten lernen`
              : 'Deck lernen'
          }
          onPress={() => navigation.navigate('Review', { deckId, title })}
        />
      </Card>

      <Heading>Alle Vokabeln ({data.items.length})</Heading>

      {data.items.map((item) => (
        <Card key={item.id}>
          <Row>
            <View style={{ flex: 1 }}>
              <Text style={typography.bodyStrong}>{item.term}</Text>
              <Body muted>{item.translation}</Body>
            </View>
            {item.partOfSpeech ? <Caption>{item.partOfSpeech}</Caption> : null}
          </Row>
          {item.exampleSentence ? (
            <View style={{ gap: 2, paddingTop: spacing.xs }}>
              <Caption>{item.exampleSentence}</Caption>
              {item.exampleTranslation ? <Caption>{item.exampleTranslation}</Caption> : null}
            </View>
          ) : null}
        </Card>
      ))}
    </Screen>
  );
}

function StatChip({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={[typography.bodyStrong, { color }]}>{value}</Text>
      <Caption>{label}</Caption>
    </View>
  );
}
