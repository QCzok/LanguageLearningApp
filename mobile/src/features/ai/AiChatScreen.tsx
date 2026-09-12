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
import { useHeaderHeight } from '@react-navigation/elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ExpoSpeechRecognitionModule,
  useSpeechRecognitionEvent,
} from 'expo-speech-recognition';
import * as Speech from 'expo-speech';
import type { AiMessageDto } from '@lingua/shared';
import { Caption, ErrorState, Loading, Row } from '../../components';
import { aiApi } from '../../api/endpoints';
import { colors, radius, spacing, typography } from '../../theme';
import type { AiStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<AiStackParamList, 'AiChat'>;

/** Lokale Darstellung: eigene Nachrichten erscheinen sofort, vor der Serverantwort. */
interface ChatItem extends AiMessageDto {
  pending?: boolean;
}

export default function AiChatScreen({ route }: Props) {
  const { conversationId, languageCode } = route.params;
  const queryClient = useQueryClient();
  const listRef = useRef<FlatList<ChatItem>>(null);
  const headerHeight = useHeaderHeight();

  const [draft, setDraft] = useState('');
  const [optimistic, setOptimistic] = useState<ChatItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const [recognizing, setRecognizing] = useState(false);
  const [interimText, setInterimText] = useState('');

  // Ref statt State, damit der 'result'-Listener (geschlossen über useEffect
  // beim Mount) den aktuellen Sprechstatus sieht, ohne neu registriert zu werden.
  const speakingIdRef = useRef<string | null>(null);
  useEffect(() => {
    speakingIdRef.current = speakingId;
  }, [speakingId]);

  const locale = localeForLanguageCode(languageCode);

  const messages = useQuery({
    queryKey: ['ai-messages', conversationId],
    queryFn: () => aiApi.messages(conversationId),
  });

  const send = useMutation({
    mutationFn: (content: string) => aiApi.send(conversationId, content),
    onSuccess: async (reply) => {
      setOptimistic([]);
      await messages.refetch();
      void queryClient.invalidateQueries({ queryKey: ['ai-quota'] });
      void queryClient.invalidateQueries({ queryKey: ['ai-conversations'] });
      void speak(reply.id, reply.content);
    },
    onError: (mutationError: Error) => {
      // Die optimistische Nachricht bleibt stehen, damit der Text nicht verloren geht.
      setError(mutationError.message);
      setOptimistic((previous) => previous.filter((item) => !item.pending));
    },
  });

  // Spracherkennung läuft komplett auf dem Gerät (kein Cloud-Dienst nötig).
  useSpeechRecognitionEvent('start', () => setRecognizing(true));
  useSpeechRecognitionEvent('end', () => {
    setRecognizing(false);
    setInterimText('');
  });
  useSpeechRecognitionEvent('result', (event) => {
    // Während die KI spricht, hört das Mikrofon ihre eigene Stimme über den
    // Lautsprecher mit – solche Treffer dürfen nie im Textfeld landen.
    if (speakingIdRef.current) return;

    const transcript = event.results[0]?.transcript ?? '';
    if (event.isFinal) {
      if (transcript.trim()) {
        setDraft((previous) => (previous.trim() ? `${previous.trim()} ${transcript.trim()}` : transcript.trim()));
      }
      setInterimText('');
    } else {
      setInterimText(transcript);
    }
  });
  useSpeechRecognitionEvent('error', (event) => {
    setInterimText('');
    if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
      setError('Für die Spracherkennung wird Mikrofonzugriff benötigt.');
    } else if (event.error !== 'no-speech' && event.error !== 'aborted') {
      setError('Spracherkennung fehlgeschlagen.');
    }
  });

  const items: ChatItem[] = [...(messages.data ?? []), ...optimistic];

  // Antworten der KI laut vorlesen – wie in einem echten Gespräch. Läuft beim
  // Verlassen des Screens weiter, wenn wir Speech.stop() hier nicht erzwingen.
  useEffect(() => () => void Speech.stop(), []);

  // stop() muss abgewartet werden, sonst reiht speak() sich nur hinten an,
  // statt die laufende Ansage zu unterbrechen.
  async function speak(id: string, content: string): Promise<void> {
    const [body] = splitCorrection(content);
    // Mikrofon zuerst stoppen, sonst hört es die eigene KI-Stimme aus dem
    // Lautsprecher mit und das landet im Textfeld des Nutzers.
    if (recognizing) {
      ExpoSpeechRecognitionModule.stop();
    }
    await Speech.stop();
    setSpeakingId(id);
    Speech.speak(body, {
      language: locale,
      onDone: () => setSpeakingId((current) => (current === id ? null : current)),
      onStopped: () => setSpeakingId((current) => (current === id ? null : current)),
      onError: () => setSpeakingId((current) => (current === id ? null : current)),
    });
  }

  function toggleSpeak(id: string, content: string): void {
    if (speakingId === id) {
      void Speech.stop();
      setSpeakingId(null);
    } else {
      void speak(id, content);
    }
  }

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

  async function startRecording(): Promise<void> {
    if (speakingId) return; // Solange die KI spricht, bleibt das Mikrofon aus.

    const permission = await ExpoSpeechRecognitionModule.requestPermissionsAsync();
    if (!permission.granted) {
      setError('Für die Spracherkennung wird Mikrofonzugriff benötigt.');
      return;
    }

    setError(null);
    ExpoSpeechRecognitionModule.start({ lang: locale, interimResults: true, continuous: true });
  }

  function stopRecording(): void {
    ExpoSpeechRecognitionModule.stop();
  }

  if (messages.isLoading) return <Loading />;
  if (messages.isError) {
    return <ErrorState message="Das Gespräch konnte nicht geladen werden." onRetry={messages.refetch} />;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={['bottom']}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={headerHeight}
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
          renderItem={({ item }) => (
            <Bubble message={item} speaking={speakingId === item.id} onToggleSpeak={toggleSpeak} />
          )}
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

        {recognizing ? (
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.sm, paddingHorizontal: spacing.lg, paddingBottom: spacing.sm }}>
            <View style={recordingDotStyle} />
            <Caption>{interimText ? `„${interimText}“` : 'Ich höre zu …'}</Caption>
          </View>
        ) : speakingId ? (
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.sm, paddingHorizontal: spacing.lg, paddingBottom: spacing.sm }}>
            <Caption>🔊 Die KI spricht – das Mikrofon ist währenddessen aus.</Caption>
          </View>
        ) : null}

        <View style={composerStyle}>
          <TextInput
            value={draft}
            onChangeText={setDraft}
            placeholder="Nachricht schreiben oder aufnehmen …"
            placeholderTextColor={colors.textMuted}
            multiline
            style={composerInputStyle}
          />
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={recognizing ? 'Aufnahme beenden' : 'Sprachaufnahme starten'}
            onPress={recognizing ? stopRecording : startRecording}
            disabled={!recognizing && !!speakingId}
            style={[
              micButtonStyle,
              recognizing && { backgroundColor: colors.danger },
              !recognizing && speakingId && { opacity: 0.4 },
            ]}
          >
            <Text style={{ fontSize: 18 }}>{recognizing ? '⏹' : '🎙️'}</Text>
          </Pressable>
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

function Bubble({
  message,
  speaking,
  onToggleSpeak,
}: {
  message: ChatItem;
  speaking: boolean;
  onToggleSpeak: (id: string, content: string) => void;
}) {
  const isUser = message.role === 'user';

  // Die KI hängt Korrekturen als eigene Zeile an – die wird abgesetzt dargestellt.
  const [body, correction] = splitCorrection(message.content);

  return (
    <View style={[bubbleStyles.base, isUser ? bubbleStyles.user : bubbleStyles.assistant]}>
      <Row gap={spacing.sm} style={{ alignItems: 'flex-start' }}>
        <Text
          style={[
            typography.body,
            { color: isUser ? colors.textInverse : colors.text, flex: 1 },
          ]}
        >
          {body}
        </Text>
        {!isUser ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={speaking ? 'Vorlesen stoppen' : 'Vorlesen'}
            onPress={() => onToggleSpeak(message.id, message.content)}
            hitSlop={8}
          >
            <Text style={{ fontSize: 16 }}>{speaking ? '⏹' : '🔊'}</Text>
          </Pressable>
        ) : null}
      </Row>
      {correction ? (
        <View style={correctionStyle}>
          <Text style={[typography.caption, { color: colors.warning }]}>{correction}</Text>
        </View>
      ) : null}
    </View>
  );
}

/** Unsere Sprachcodes sind zweistellig (de, en, …) – TTS/STT brauchen volle BCP-47-Tags. */
const LOCALE_BY_LANGUAGE_CODE: Record<string, string> = {
  de: 'de-DE',
  en: 'en-US',
  es: 'es-ES',
  fr: 'fr-FR',
  it: 'it-IT',
};

function localeForLanguageCode(languageCode?: string): string {
  return (languageCode && LOCALE_BY_LANGUAGE_CODE[languageCode]) || 'en-US';
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

const micButtonStyle = {
  width: 44,
  height: 44,
  borderRadius: 22,
  backgroundColor: colors.surface,
  borderWidth: 1,
  borderColor: colors.border,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const recordingDotStyle = {
  width: 8,
  height: 8,
  borderRadius: 4,
  backgroundColor: colors.danger,
};
