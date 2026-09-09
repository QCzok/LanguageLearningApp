import React, { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { AiMessageDto } from '@lingua/shared';
import { Caption, ErrorState, Loading } from '../../components';
import { aiApi } from '../../api/endpoints';
import { colors, radius, spacing, typography } from '../../theme';
import type { AiStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<AiStackParamList, 'AiChat'>;

/** Lokale Darstellung: eigene Nachrichten erscheinen sofort, vor der Serverantwort. */
interface ChatItem extends AiMessageDto {
  pending?: boolean;
}

export default function AiChatScreen({ route }: Props) {
  const { conversationId } = route.params;
  const queryClient = useQueryClient();
  const listRef = useRef<FlatList<ChatItem>>(null);

  const [draft, setDraft] = useState('');
  const [optimistic, setOptimistic] = useState<ChatItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  const messages = useQuery({
    queryKey: ['ai-messages', conversationId],
    queryFn: () => aiApi.messages(conversationId),
  });

  const send = useMutation({
    mutationFn: (content: string) => aiApi.send(conversationId, content),
    onSuccess: async () => {
      setOptimistic([]);
      await messages.refetch();
      void queryClient.invalidateQueries({ queryKey: ['ai-quota'] });
      void queryClient.invalidateQueries({ queryKey: ['ai-conversations'] });
    },
    onError: (mutationError: Error) => {
      // Die optimistische Nachricht bleibt stehen, damit der Text nicht verloren geht.
      setError(mutationError.message);
      setOptimistic((previous) => previous.filter((item) => !item.pending));
    },
  });

  const items: ChatItem[] = [...(messages.data ?? []), ...optimistic];

  useEffect(() => {
    if (items.length > 0) {
      // Kurze Verzögerung, damit das Layout vor dem Scrollen fertig ist.
      const timer = setTimeout(() => listRef.current?.scrollToEnd({ animated: true }), 80);
      return () => clearTimeout(timer);
    }
  }, [items.length, send.isPending]);

  function handleSend(): void {
    const content = draft.trim();
    if (!content || send.isPending) return;

    setError(null);
    setDraft('');
    setOptimistic([
      {
        id: `local-${Date.now()}`,
        role: 'user',
        content,
        createdAt: new Date().toISOString(),
      },
    ]);
    send.mutate(content);
  }

  if (messages.isLoading) return <Loading />;
  if (messages.isError) {
    return <ErrorState message="Das Gespräch konnte nicht geladen werden." onRetry={messages.refetch} />;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={['bottom']}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={90}
      >
        <FlatList
          ref={listRef}
          data={items}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ padding: spacing.lg, gap: spacing.md }}
          ListEmptyComponent={
            <View style={{ alignItems: 'center', gap: spacing.sm, paddingTop: spacing.xxl }}>
              <Text style={{ fontSize: 44 }}>👋</Text>
              <Caption>Schreib etwas – auch ein einfaches „Hi" reicht zum Start.</Caption>
            </View>
          }
          renderItem={({ item }) => <Bubble message={item} />}
          ListFooterComponent={
            send.isPending ? (
              <View style={[bubbleStyles.base, bubbleStyles.assistant, { flexDirection: 'row', gap: spacing.sm }]}>
                <ActivityIndicator size="small" color={colors.textMuted} />
                <Caption>schreibt …</Caption>
              </View>
            ) : null
          }
        />

        {error ? (
          <View style={{ paddingHorizontal: spacing.lg, paddingBottom: spacing.sm }}>
            <Text style={[typography.caption, { color: colors.danger }]}>{error}</Text>
          </View>
        ) : null}

        <View style={composerStyle}>
          <TextInput
            value={draft}
            onChangeText={setDraft}
            placeholder="Nachricht schreiben …"
            placeholderTextColor={colors.textMuted}
            multiline
            style={composerInputStyle}
          />
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Senden"
            onPress={handleSend}
            disabled={!draft.trim() || send.isPending}
            style={[sendButtonStyle, (!draft.trim() || send.isPending) && { opacity: 0.4 }]}
          >
            <Text style={{ fontSize: 20 }}>➤</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

function Bubble({ message }: { message: ChatItem }) {
  const isUser = message.role === 'user';

  // Die KI hängt Korrekturen als eigene Zeile an – die wird abgesetzt dargestellt.
  const [body, correction] = splitCorrection(message.content);

  return (
    <View style={[bubbleStyles.base, isUser ? bubbleStyles.user : bubbleStyles.assistant]}>
      <Text style={[typography.body, { color: isUser ? colors.textInverse : colors.text }]}>
        {body}
      </Text>
      {correction ? (
        <View style={correctionStyle}>
          <Text style={[typography.caption, { color: colors.warning }]}>{correction}</Text>
        </View>
      ) : null}
    </View>
  );
}

function splitCorrection(content: string): [string, string | null] {
  const index = content.indexOf('Korrektur:');
  if (index === -1) return [content, null];
  return [content.slice(0, index).trim(), content.slice(index).trim()];
}

const bubbleStyles = {
  base: {
    maxWidth: '85%' as const,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: radius.lg,
    gap: spacing.sm,
  },
  user: {
    alignSelf: 'flex-end' as const,
    backgroundColor: colors.primary,
    borderBottomRightRadius: radius.sm,
  },
  assistant: {
    alignSelf: 'flex-start' as const,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderBottomLeftRadius: radius.sm,
  },
};

const correctionStyle = {
  borderTopWidth: 1,
  borderTopColor: colors.border,
  paddingTop: spacing.sm,
};

const composerStyle = {
  flexDirection: 'row' as const,
  alignItems: 'flex-end' as const,
  gap: spacing.sm,
  padding: spacing.md,
  backgroundColor: colors.surface,
  borderTopWidth: 1,
  borderTopColor: colors.border,
};

const composerInputStyle = {
  flex: 1,
  maxHeight: 120,
  minHeight: 44,
  borderRadius: radius.lg,
  borderWidth: 1,
  borderColor: colors.border,
  backgroundColor: colors.background,
  paddingHorizontal: spacing.md,
  paddingTop: spacing.sm,
  paddingBottom: spacing.sm,
  fontSize: 15,
  color: colors.text,
};

const sendButtonStyle = {
  width: 44,
  height: 44,
  borderRadius: 22,
  backgroundColor: colors.primary,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};
