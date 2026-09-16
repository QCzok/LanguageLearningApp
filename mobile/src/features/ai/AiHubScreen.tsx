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
import { useTranslation } from '../../i18n';
import type { TranslationKey } from '../../i18n';
import { useIsPremium } from '../../store/auth.store';
import { colors, radius, spacing } from '../../theme';
import type { AiStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<AiStackParamList, 'AiHub'>;

const TOPIC_SUGGESTIONS: TranslationKey[] = [
  'aiTopicTravel',
  'aiTopicWork',
  'aiTopicEnvironment',
  'aiTopicMovies',
  'aiTopicFood',
  'aiTopicTech',
];

export default function AiHubScreen({ navigation }: Props) {
  const { t, formatDate } = useTranslation();
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
        title: payload.topic ?? t('aiConversationDefaultTitle'),
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
              <Heading>{t('aiQuotaTitle')}</Heading>
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
            <Caption>{t('aiQuotaResets', { date: formatDate(quota.data.resetsAt) })}</Caption>
          </Card>
        ) : null}

        <View style={{ alignItems: 'center', gap: spacing.sm, paddingVertical: spacing.md }}>
          <Text style={{ fontSize: 48 }}>🤖</Text>
          <Title>{t('aiHubTitle')}</Title>
          <Caption>{t('aiHubSubtitle')}</Caption>
        </View>

        <Button
          label={t('aiStartConversation')}
          variant="premium"
          loading={start.isPending && !showStarter}
          onPress={() => start.mutate({})}
        />
        <Button label={t('aiOwnTopic')} variant="ghost" onPress={() => setShowStarter(true)} />

        {conversations.data && conversations.data.length > 0 ? (
          <>
            <Card onPress={() => setRecentExpanded((value) => !value)}>
              <Row gap={spacing.sm}>
                <Heading>{t('aiRecent')}</Heading>
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
                          {t('aiMessagesCount', { count: conversation.messageCount })} ·{' '}
                          {formatDate(conversation.updatedAt)}
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
            <Title>{t('aiStartConversation')}</Title>
            <Caption>{t('aiStarterSubtitle')}</Caption>

            <Row gap={spacing.sm} style={{ flexWrap: 'wrap' }}>
              {TOPIC_SUGGESTIONS.map((key) => {
                const label = t(key);
                return (
                  <Button
                    key={key}
                    label={label}
                    variant={topic === label ? 'primary' : 'secondary'}
                    fullWidth={false}
                    onPress={() => setTopic(label)}
                  />
                );
              })}
            </Row>

            <Input
              label={t('aiOwnTopicLabel')}
              value={topic}
              onChangeText={setTopic}
              placeholder={t('aiOwnTopicPlaceholder')}
            />

            <Button
              label={t('aiStart')}
              variant="premium"
              loading={start.isPending}
              onPress={() => start.mutate({ topic: topic.trim() || undefined })}
            />
            <Button label={t('commonCancel')} variant="ghost" onPress={() => setShowStarter(false)} />
          </SafeAreaView>
        </View>
      </Modal>
    </>
  );
}

function PremiumTeaser({ quota }: { quota?: { used: number; limit: number } }) {
  const { t } = useTranslation();

  return (
    <Screen scroll>
      <View style={{ alignItems: 'center', gap: spacing.md, paddingVertical: spacing.xl }}>
        <Text style={{ fontSize: 60 }}>✨</Text>
        <PremiumBadge />
        <Title>{t('aiTeaserTitle')}</Title>
        <Body muted>{t('aiTeaserBody')}</Body>
      </View>

      {[
        {
          icon: '🎙️',
          title: t('aiTeaserFeature1Title'),
          text: t('aiTeaserFeature1Text'),
        },
        {
          icon: '📝',
          title: t('aiTeaserFeature2Title'),
          text: t('aiTeaserFeature2Text'),
        },
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
            {t('aiTeaserQuota', {
              left: Math.max(0, quota.limit - quota.used),
              limit: quota.limit,
            })}
          </Caption>
        </Card>
      ) : null}

      <Caption>{t('aiTeaserActivate')}</Caption>
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
