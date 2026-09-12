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

const TOPIC_SUGGESTIONS = [
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

  const [showStarter, setShowStarter] = useState(false);
  const [topic, setTopic] = useState('');
  const [recentExpanded, setRecentExpanded] = useState(false);

  const quota = useQuery({ queryKey: ['ai-quota'], queryFn: aiApi.quota });
  const conversations = useQuery({
    queryKey: ['ai-conversations'],
    queryFn: aiApi.conversations,
    enabled: isPremium,
  });

  const start = useMutation({
    mutationFn: (payload: { topic?: string }) =>
      aiApi.createConversation({
        topic: payload.topic,
        title: payload.topic ?? 'Gespräch',
      }),
    onSuccess: async (conversation) => {
      await queryClient.invalidateQueries({ queryKey: ['ai-conversations'] });
      setShowStarter(false);
      setTopic('');
      navigation.navigate('AiChat', {
        conversationId: conversation.id,
        title: conversation.title,
        languageCode: conversation.language.code,
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

        <View style={{ alignItems: 'center', gap: spacing.sm, paddingVertical: spacing.md }}>
          <Text style={{ fontSize: 48 }}>🤖</Text>
          <Title>Sprich mit deinem KI-Partner</Title>
          <Caption>Rede oder schreib einfach drauflos – die KI passt sich deinem Niveau an.</Caption>
        </View>

        <Button
          label="Gespräch starten"
          variant="premium"
          loading={start.isPending && !showStarter}
          onPress={() => start.mutate({})}
        />
        <Button label="Eigenes Thema wählen" variant="ghost" onPress={() => setShowStarter(true)} />

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
            <Card onPress={() => setRecentExpanded((value) => !value)}>
              <Row gap={spacing.sm}>
                <Heading>Zuletzt</Heading>
                <View style={{ flex: 1 }} />
                <Caption>{conversations.data.length}</Caption>
                <Text style={{ fontSize: 16, color: colors.textMuted }}>
                  {recentExpanded ? '▾' : '▸'}
                </Text>
              </Row>
            </Card>
            {recentExpanded
              ? conversations.data.map((conversation) => (
                  <Card
                    key={conversation.id}
                    onPress={() =>
                      navigation.navigate('AiChat', {
                        conversationId: conversation.id,
                        title: conversation.title,
                        languageCode: conversation.language.code,
                      })
                    }
                  >
                    <Row gap={spacing.sm}>
                      <Text style={{ fontSize: 20 }}>💬</Text>
                      <View style={{ flex: 1 }}>
                        <Body>{conversation.title}</Body>
                        <Caption>
                          {conversation.messageCount} Nachrichten ·{' '}
                          {new Date(conversation.updatedAt).toLocaleDateString('de-DE')}
                        </Caption>
                      </View>
                    </Row>
                  </Card>
                ))
              : null}
          </>
        ) : null}
      </Screen>

      <Modal
        visible={showStarter}
        transparent
        animationType="slide"
        onRequestClose={() => setShowStarter(false)}
      >
        <View style={sheetBackdrop}>
          <SafeAreaView edges={['bottom']} style={sheetStyle}>
            <Title>Gespräch starten</Title>
            <Caption>Wähle ein Thema oder lass die KI eins vorschlagen.</Caption>

            <Row gap={spacing.sm} style={{ flexWrap: 'wrap' }}>
              {TOPIC_SUGGESTIONS.map((entry) => (
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
              onPress={() => start.mutate({ topic: topic.trim() || undefined })}
            />
            <Button label="Abbrechen" variant="ghost" onPress={() => setShowStarter(false)} />
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
        { icon: '🎙️', title: 'Sprechen oder schreiben', text: 'Rede frei oder tippe – ganz wie du magst.' },
        { icon: '📝', title: 'Korrektur im Lernheft', text: 'Deine geschriebenen Texte werden geprüft und erklärt.' },
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
