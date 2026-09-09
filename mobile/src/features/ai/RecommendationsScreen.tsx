import React from 'react';
import { Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { useNavigation } from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { RecommendationDto } from '@lingua/shared';
import {
  Body,
  Button,
  Caption,
  Card,
  ErrorState,
  Heading,
  Loading,
  Row,
  Screen,
  Tag,
  Title,
} from '../../components';
import { aiApi } from '../../api/endpoints';
import { colors, spacing } from '../../theme';
import type { MainTabParamList } from '../../navigation/types';

type Action = RecommendationDto['actions'][number];

const ACTION_META: Record<Action['type'], { icon: string; label: string }> = {
  VOCAB_DECK: { icon: '🗂️', label: 'Vokabeln' },
  LIBRARY: { icon: '📚', label: 'Lesen' },
  MEDIA: { icon: '🎧', label: 'Hören' },
  NOTEBOOK: { icon: '📓', label: 'Schreiben' },
  AI_CHAT: { icon: '💬', label: 'Sprechen' },
};

export default function RecommendationsScreen() {
  const navigation = useNavigation<BottomTabNavigationProp<MainTabParamList>>();

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['ai-recommendations'],
    queryFn: aiApi.recommendations,
    // Empfehlungen kosten ein Kontingent – nicht bei jedem Screen-Besuch neu holen.
    staleTime: 6 * 60 * 60 * 1000,
    retry: false,
  });

  if (isLoading) return <Loading label="Dein Lernstand wird ausgewertet …" />;
  if (isError) {
    return <ErrorState message={(error as Error).message} onRetry={refetch} />;
  }
  if (!data) return null;

  /** Öffnet den passenden Bereich; ohne targetId landet man auf der Übersicht. */
  function openAction(action: Action): void {
    switch (action.type) {
      case 'VOCAB_DECK':
        navigation.navigate('Vocabulary', {
          screen: action.targetId ? 'DeckDetail' : 'DeckList',
          params: action.targetId
            ? { deckId: action.targetId, title: action.title }
            : undefined,
        } as never);
        break;
      case 'LIBRARY':
        navigation.navigate('Library', {
          screen: action.targetId ? 'Reader' : 'LibraryList',
          params: action.targetId
            ? { contentId: action.targetId, title: action.title }
            : undefined,
        } as never);
        break;
      case 'MEDIA':
        navigation.navigate('Media', {
          screen: action.targetId ? 'Player' : 'MediaList',
          params: action.targetId ? { mediaId: action.targetId, title: action.title } : undefined,
        } as never);
        break;
      case 'NOTEBOOK':
        navigation.navigate('Notebook', { screen: 'NotebookList' });
        break;
      case 'AI_CHAT':
        navigation.navigate('Assistant', { screen: 'AiHub' });
        break;
    }
  }

  return (
    <Screen scroll>
      <Card style={{ backgroundColor: colors.premiumSoft, borderColor: colors.premium }}>
        <Row gap={spacing.sm}>
          <Text style={{ fontSize: 26 }}>🎯</Text>
          <Title>Für dich</Title>
        </Row>
        <Body>{data.summary}</Body>
      </Card>

      {data.focusAreas.length > 0 ? (
        <Card>
          <Heading>Schwerpunkte</Heading>
          <Row gap={spacing.sm} style={{ flexWrap: 'wrap' }}>
            {data.focusAreas.map((area) => (
              <Tag key={area} label={area} color={colors.primarySoft} />
            ))}
          </Row>
        </Card>
      ) : null}

      <Heading>Nächste Schritte</Heading>

      {data.actions.map((action, index) => {
        const meta = ACTION_META[action.type];
        return (
          <Card key={`${action.title}-${index}`}>
            <Row gap={spacing.md}>
              <Text style={{ fontSize: 26 }}>{meta.icon}</Text>
              <View style={{ flex: 1 }}>
                <Caption>{meta.label}</Caption>
                <Heading>{action.title}</Heading>
                <Caption>{action.reason}</Caption>
              </View>
            </Row>
            <Button label="Öffnen" variant="secondary" onPress={() => openAction(action)} />
          </Card>
        );
      })}

      <Button label="Neu berechnen" variant="ghost" onPress={() => refetch()} />
    </Screen>
  );
}
