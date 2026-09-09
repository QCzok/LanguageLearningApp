import React, { useState } from 'react';
import { Modal, Text, View } from 'react-native';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Body,
  Button,
  Caption,
  Card,
  Heading,
  Input,
  Loading,
  PremiumBadge,
  ProgressBar,
  Row,
  Screen,
  Title,
} from '../../components';
import { aiApi } from '../../api/endpoints';
import { useIsPremium } from '../../store/auth.store';
import { colors, radius, spacing } from '../../theme';
import type { AiStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<AiStackParamList, 'AiHub'>;

const DISCUSSION_TOPICS = [
  'Reisen und Urlaub',
  'Arbeit und Karriere',
  'Umwelt und Klima',
  'Filme und Serien',
  'Essen und Kochen',
  'Technik im Alltag',
];

export default function AiHubScreen({ navigation }: Props) {
  const queryClient = useQueryClient();
  const isPremium = useIsPremium();

  const [showStarter, setShowStarter] = useState<null | 'CHAT' | 'DISCUSSION'>(null);
  const [topic, setTopic] = useState('');

  const quota = useQuery({ queryKey: ['ai-quota'], queryFn: aiApi.quota });
  const conversations = useQuery({
    queryKey: ['ai-conversations'],
    queryFn: aiApi.conversations,
    enabled: isPremium,
  });

  const start = useMutation({
    mutationFn: (payload: { mode: 'CHAT' | 'DISCUSSION'; topic?: string }) =>
      aiApi.createConversation({
        mode: payload.mode,
        topic: payload.topic,
        title: payload.topic ?? (payload.mode === 'DISCUSSION' ? 'Diskussion' : 'Gespräch'),
      }),
    onSuccess: async (conversation) => {
      await queryClient.invalidateQueries({ queryKey: ['ai-conversations'] });
      setShowStarter(null);
      setTopic('');
      navigation.navigate('AiChat', {
        conversationId: conversation.id,
        title: conversation.title,
      });
    },
  });

  if (!isPremium) return <PremiumTeaser quota={quota.data} />;
  if (conversations.isLoading) return <Loading />;

  return (
    <>
      <Screen scroll>
        {quota.data ? (
          <Card>
            <Row>
              <Heading>KI-Kontingent</Heading>
              <View style={{ flex: 1 }} />
              <Caption>
                {quota.data.used} / {quota.data.limit}
              </Caption>
            </Row>
            <ProgressBar
              value={(quota.data.used / Math.max(1, quota.data.limit)) * 100}
              color={colors.premium}
              height={6}
            />
            <Caption>
              Zurückgesetzt am {new Date(quota.data.resetsAt).toLocaleDateString('de-DE')}
            </Caption>
          </Card>
        ) : null}

        <Title>Womit möchtest du üben?</Title>

        <Card onPress={() => setShowStarter('CHAT')}>
          <Row gap={spacing.md}>
            <Text style={{ fontSize: 30 }}>💬</Text>
            <View style={{ flex: 1 }}>
              <Heading>Gespräch führen</Heading>
              <Caption>Locker plaudern – die KI passt sich deinem Niveau an.</Caption>
            </View>
          </Row>
        </Card>

        <Card onPress={() => setShowStarter('DISCUSSION')}>
          <Row gap={spacing.md}>
            <Text style={{ fontSize: 30 }}>⚖️</Text>
            <View style={{ flex: 1 }}>
              <Heading>Diskutieren</Heading>
              <Caption>Positionen vertreten und begründen – mit Gegenrede.</Caption>
            </View>
          </Row>
        </Card>

        <Card onPress={() => navigation.navigate('Grammar')}>
          <Row gap={spacing.md}>
            <Text style={{ fontSize: 30 }}>📐</Text>
            <View style={{ flex: 1 }}>
              <Heading>Grammatik & Vokabeln erklären</Heading>
              <Caption>Stelle jede Frage zu Regeln, Wörtern oder Fehlern.</Caption>
            </View>
          </Row>
        </Card>

        <Card onPress={() => navigation.navigate('Recommendations')}>
          <Row gap={spacing.md}>
            <Text style={{ fontSize: 30 }}>🎯</Text>
            <View style={{ flex: 1 }}>
              <Heading>Persönliche Empfehlungen</Heading>
              <Caption>Was du als Nächstes lernen solltest – aus deinem Lernstand.</Caption>
            </View>
          </Row>
        </Card>

        {conversations.data && conversations.data.length > 0 ? (
          <>
            <Heading>Zuletzt</Heading>
            {conversations.data.map((conversation) => (
              <Card
                key={conversation.id}
                onPress={() =>
                  navigation.navigate('AiChat', {
                    conversationId: conversation.id,
                    title: conversation.title,
                  })
                }
              >
                <Row gap={spacing.sm}>
                  <Text style={{ fontSize: 20 }}>
                    {conversation.mode === 'DISCUSSION' ? '⚖️' : '💬'}
                  </Text>
                  <View style={{ flex: 1 }}>
                    <Body>{conversation.title}</Body>
                    <Caption>
                      {conversation.messageCount} Nachrichten ·{' '}
                      {new Date(conversation.updatedAt).toLocaleDateString('de-DE')}
                    </Caption>
                  </View>
                </Row>
              </Card>
            ))}
          </>
        ) : null}
      </Screen>

      <Modal
        visible={showStarter !== null}
        transparent
        animationType="slide"
        onRequestClose={() => setShowStarter(null)}
      >
        <View style={sheetBackdrop}>
          <SafeAreaView edges={['bottom']} style={sheetStyle}>
            <Title>{showStarter === 'DISCUSSION' ? 'Diskussion starten' : 'Gespräch starten'}</Title>
            <Caption>Wähle ein Thema oder lass die KI eins vorschlagen.</Caption>

            <Row gap={spacing.sm} style={{ flexWrap: 'wrap' }}>
              {DISCUSSION_TOPICS.map((entry) => (
                <Button
                  key={entry}
                  label={entry}
                  variant={topic === entry ? 'primary' : 'secondary'}
                  fullWidth={false}
                  onPress={() => setTopic(entry)}
                />
              ))}
            </Row>

            <Input
              label="Eigenes Thema"
              value={topic}
              onChangeText={setTopic}
              placeholder="Worüber möchtest du sprechen?"
            />

            <Button
              label="Starten"
              variant="premium"
              loading={start.isPending}
              onPress={() =>
                start.mutate({ mode: showStarter ?? 'CHAT', topic: topic.trim() || undefined })
              }
            />
            <Button label="Abbrechen" variant="ghost" onPress={() => setShowStarter(null)} />
          </SafeAreaView>
        </View>
      </Modal>
    </>
  );
}

function PremiumTeaser({ quota }: { quota?: { used: number; limit: number } }) {
  return (
    <Screen scroll>
      <View style={{ alignItems: 'center', gap: spacing.md, paddingVertical: spacing.xl }}>
        <Text style={{ fontSize: 60 }}>✨</Text>
        <PremiumBadge />
        <Title>Dein KI-Sprachpartner</Title>
        <Body muted>
          Mit Premium übst du jederzeit im Gespräch, bekommst deine Texte korrigiert und erhältst
          Erklärungen zu jedem Fehler.
        </Body>
      </View>

      {[
        { icon: '💬', title: 'Gespräche und Diskussionen', text: 'Frei sprechen auf deinem Niveau, mit Korrekturen.' },
        { icon: '📝', title: 'Korrektur im Lernheft', text: 'Deine geschriebenen Texte werden geprüft und erklärt.' },
        { icon: '📐', title: 'Grammatik erklärt', text: 'Antworten auf jede Regel- und Vokabelfrage.' },
        { icon: '🎯', title: 'Persönliche Empfehlungen', text: 'Vorschläge aus deinem echten Lernstand.' },
      ].map((feature) => (
        <Card key={feature.title}>
          <Row gap={spacing.md}>
            <Text style={{ fontSize: 26 }}>{feature.icon}</Text>
            <View style={{ flex: 1 }}>
              <Heading>{feature.title}</Heading>
              <Caption>{feature.text}</Caption>
            </View>
          </Row>
        </Card>
      ))}

      {quota ? (
        <Card>
          <Caption>
            Zum Ausprobieren: {Math.max(0, quota.limit - quota.used)} von {quota.limit} kostenlosen
            KI-Anfragen diesen Monat übrig.
          </Caption>
        </Card>
      ) : null}

      <Caption>Premium kannst du im Profil aktivieren.</Caption>
    </Screen>
  );
}

const sheetBackdrop = {
  flex: 1,
  backgroundColor: 'rgba(15, 23, 42, 0.4)',
  justifyContent: 'flex-end' as const,
};

const sheetStyle = {
  backgroundColor: colors.background,
  borderTopLeftRadius: radius.xl,
  borderTopRightRadius: radius.xl,
  padding: spacing.lg,
  gap: spacing.md,
};
