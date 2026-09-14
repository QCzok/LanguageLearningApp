import React, { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Animated,
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

/** Im Freisprech-Modus wechselt das Gespräch zwischen diesen drei Zuständen. */
type VoicePhase = 'listening' | 'thinking' | 'speaking';

/** Sprechpause, nach der eine Äußerung als beendet gilt und abgeschickt wird. */
const SILENCE_BEFORE_SEND_MS = 1100;
/** Kürzere Wartezeit, wenn die Plattform das Sprechende selbst meldet – kurz
 *  genug, um flüssig zu wirken, lang genug für eine Atempause mitten im Satz. */
const ENDPOINT_GRACE_MS = 500;
/** Nachhall des Lautsprechers abwarten, bevor das Mikrofon wieder aufmacht. */
const MIC_RESTART_DELAY_MS = 400;

export default function AiChatScreen({ route }: Props) {
  const { conversationId, languageCode } = route.params;
  const queryClient = useQueryClient();
  const listRef = useRef<FlatList<ChatItem>>(null);
  const headerHeight = useHeaderHeight();

  const [draft, setDraft] = useState('');
  const [optimistic, setOptimistic] = useState<ChatItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const [voiceMode, setVoiceMode] = useState(false);
  const [recognizing, setRecognizing] = useState(false);
  const [interimText, setInterimText] = useState('');

  // Timer und TTS-Callbacks überleben den Render, in dem sie erzeugt wurden.
  // Sie brauchen den Stand von *jetzt*, nicht den ihres Renders – daher Refs,
  // die zusammen mit dem State gesetzt werden.
  const speakingIdRef = useRef<string | null>(null);
  const voiceModeRef = useRef(false);
  const awaitingReplyRef = useRef(false);

  // Laufende Äußerung: finalisierte Stücke plus der noch offene Rest.
  const finalRef = useRef('');
  const interimRef = useRef('');
  const silenceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const restartTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const locale = localeForLanguageCode(languageCode);

  const messages = useQuery({
    queryKey: ['ai-messages', conversationId],
    queryFn: () => aiApi.messages(conversationId),
  });

  const send = useMutation({
    mutationFn: (content: string) => aiApi.send(conversationId, content),
    onSuccess: async (reply) => {
      awaitingReplyRef.current = false;
      setOptimistic([]);
      await messages.refetch();
      void queryClient.invalidateQueries({ queryKey: ['ai-quota'] });
      void queryClient.invalidateQueries({ queryKey: ['ai-conversations'] });
      void speak(reply.id, reply.content);
    },
    onError: (mutationError: Error) => {
      // Die optimistische Nachricht bleibt stehen, damit der Text nicht verloren geht.
      awaitingReplyRef.current = false;
      setError(mutationError.message);
      setOptimistic((previous) => previous.filter((item) => !item.pending));
      if (voiceModeRef.current) void startListening();
    },
  });

  const items: ChatItem[] = [...(messages.data ?? []), ...optimistic];

  const phase: VoicePhase | null = !voiceMode
    ? null
    : send.isPending
      ? 'thinking'
      : speakingId
        ? 'speaking'
        : 'listening';

  function setSpeaking(id: string | null): void {
    speakingIdRef.current = id;
    setSpeakingId(id);
  }

  function setVoice(active: boolean): void {
    voiceModeRef.current = active;
    setVoiceMode(active);
  }

  function clearTimers(): void {
    if (silenceTimer.current) clearTimeout(silenceTimer.current);
    if (restartTimer.current) clearTimeout(restartTimer.current);
    silenceTimer.current = null;
    restartTimer.current = null;
  }

  function resetUtterance(): void {
    finalRef.current = '';
    interimRef.current = '';
    setInterimText('');
  }

  // ------------------------------------------------------------ Spracheingabe

  useSpeechRecognitionEvent('start', () => setRecognizing(true));

  useSpeechRecognitionEvent('end', () => {
    setRecognizing(false);
    if (!voiceModeRef.current || speakingIdRef.current || awaitingReplyRef.current) return;

    // Android beendet die Erkennung nach längerer Stille von selbst. Im
    // Freisprech-Modus geht das Gespräch trotzdem weiter.
    if (joinWords(finalRef.current, interimRef.current).trim()) sendUtterance();
    else restartTimer.current = setTimeout(() => void startListening(), MIC_RESTART_DELAY_MS);
  });

  useSpeechRecognitionEvent('result', (event) => {
    // Während die KI spricht, hört das Mikrofon ihre eigene Stimme über den
    // Lautsprecher mit – solche Treffer dürfen nie als Eingabe zählen.
    if (speakingIdRef.current) return;

    const transcript = event.results[0]?.transcript ?? '';
    if (event.isFinal) {
      finalRef.current = joinWords(finalRef.current, transcript);
      interimRef.current = '';
    } else {
      interimRef.current = transcript;
    }

    setInterimText(joinWords(finalRef.current, interimRef.current));
    scheduleAutoSend(SILENCE_BEFORE_SEND_MS);
  });

  // Die Plattform meldet das Ende einer Äußerung – dann darf es schneller gehen.
  useSpeechRecognitionEvent('speechend', () => scheduleAutoSend(ENDPOINT_GRACE_MS));

  useSpeechRecognitionEvent('error', (event) => {
    interimRef.current = '';
    setInterimText(finalRef.current);

    if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
      setError('Für die Spracherkennung wird Mikrofonzugriff benötigt.');
      exitVoiceMode();
    } else if (event.error !== 'no-speech' && event.error !== 'aborted') {
      setError('Spracherkennung fehlgeschlagen.');
      exitVoiceMode();
    }
  });

  /** Nach dieser Stille gilt die Äußerung als fertig – ohne Zutun des Nutzers. */
  function scheduleAutoSend(delayMs: number): void {
    if (!voiceModeRef.current || speakingIdRef.current || awaitingReplyRef.current) return;
    if (silenceTimer.current) clearTimeout(silenceTimer.current);
    silenceTimer.current = setTimeout(sendUtterance, delayMs);
  }

  function sendUtterance(): void {
    if (silenceTimer.current) clearTimeout(silenceTimer.current);
    silenceTimer.current = null;
    if (speakingIdRef.current || awaitingReplyRef.current) return;

    const content = joinWords(finalRef.current, interimRef.current).trim();
    resetUtterance();
    if (!content) return;

    // Erst senden, dann das Mikrofon stoppen: submit() setzt die Sperre, die das
    // 'end'-Ereignis davon abhält, sofort wieder aufzunehmen.
    submit(content);
    ExpoSpeechRecognitionModule.stop();
  }

  async function startListening(): Promise<void> {
    if (restartTimer.current) clearTimeout(restartTimer.current);
    restartTimer.current = null;
    if (speakingIdRef.current || awaitingReplyRef.current) return;

    const permission = await ExpoSpeechRecognitionModule.requestPermissionsAsync();
    if (!permission.granted) {
      setError('Für die Spracherkennung wird Mikrofonzugriff benötigt.');
      exitVoiceMode();
      return;
    }

    setError(null);
    resetUtterance();
    ExpoSpeechRecognitionModule.start({ lang: locale, interimResults: true, continuous: true });
  }

  function enterVoiceMode(): void {
    setVoice(true);
    void startListening();
  }

  function exitVoiceMode(): void {
    setVoice(false);
    clearTimers();
    resetUtterance();
    ExpoSpeechRecognitionModule.abort();
    void Speech.stop();
    setSpeaking(null);
  }

  // --------------------------------------------------------------- Sprachausgabe

  useEffect(
    () => () => {
      // Ohne das läuft die Ansage nach dem Verlassen des Screens weiter.
      clearTimers();
      ExpoSpeechRecognitionModule.abort();
      void Speech.stop();
    },
    [],
  );

  async function speak(id: string, content: string): Promise<void> {
    const [body] = splitCorrection(content);

    // Sprechzustand vor dem Abschalten des Mikrofons setzen: Er blockt den
    // Echo-Schutz und verhindert, dass das folgende 'end'-Ereignis das Mikrofon
    // gleich wieder aufmacht.
    if (restartTimer.current) clearTimeout(restartTimer.current);
    restartTimer.current = null;
    setSpeaking(id);
    ExpoSpeechRecognitionModule.abort();

    // stop() muss abgewartet werden, sonst reiht speak() sich nur hinten an,
    // statt die laufende Ansage zu unterbrechen.
    await Speech.stop();
    Speech.speak(body, {
      language: locale,
      onDone: () => finishSpeaking(id),
      onStopped: () => finishSpeaking(id),
      onError: () => finishSpeaking(id),
    });
  }

  function finishSpeaking(id: string): void {
    // Wurde die Ansage unterbrochen, hat der Abbrecher den Zustand schon gesetzt.
    if (speakingIdRef.current !== id) return;
    setSpeaking(null);
    if (voiceModeRef.current) {
      restartTimer.current = setTimeout(() => void startListening(), MIC_RESTART_DELAY_MS);
    }
  }

  /** Dazwischenreden: Ansage abbrechen und sofort wieder zuhören. */
  function interrupt(): void {
    setSpeaking(null);
    void Speech.stop();
    if (voiceModeRef.current) void startListening();
  }

  function toggleSpeak(id: string, content: string): void {
    if (speakingId === id) interrupt();
    else void speak(id, content);
  }

  // ------------------------------------------------------------------ Senden

  function submit(content: string): void {
    const trimmed = content.trim();
    if (!trimmed || awaitingReplyRef.current) return;

    awaitingReplyRef.current = true;
    setError(null);
    setDraft('');
    resetUtterance();
    setOptimistic([
      {
        id: `local-${Date.now()}`,
        role: 'user',
        content: trimmed,
        createdAt: new Date().toISOString(),
      },
    ]);
    send.mutate(trimmed);
  }

  useEffect(() => {
    if (items.length > 0) {
      // Kurze Verzögerung, damit das Layout vor dem Scrollen fertig ist.
      const timer = setTimeout(() => listRef.current?.scrollToEnd({ animated: true }), 80);
      return () => clearTimeout(timer);
    }
  }, [items.length, send.isPending]);

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
              <Caption>Tippe auf das Mikrofon und sprich einfach los – oder schreib etwas.</Caption>
            </View>
          }
          renderItem={({ item }) => (
            <Bubble message={item} speaking={speakingId === item.id} onToggleSpeak={toggleSpeak} />
          )}
          ListFooterComponent={
            send.isPending ? (
              <View style={[bubbleStyles.base, bubbleStyles.assistant, { flexDirection: 'row', gap: spacing.sm }]}>
                <ActivityIndicator size="small" color={colors.textMuted} />
                <Caption>denkt nach …</Caption>
              </View>
            ) : null
          }
        />

        {error ? (
          <View style={{ paddingHorizontal: spacing.lg, paddingBottom: spacing.sm }}>
            <Text style={[typography.caption, { color: colors.danger }]}>{error}</Text>
          </View>
        ) : null}

        {phase ? (
          <VoicePanel
            phase={phase}
            recognizing={recognizing}
            transcript={interimText}
            onSendNow={sendUtterance}
            onInterrupt={interrupt}
            onExit={exitVoiceMode}
          />
        ) : (
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
              accessibilityLabel="Freisprechen starten"
              onPress={enterVoiceMode}
              style={micButtonStyle}
            >
              <Text style={{ fontSize: 18 }}>🎙️</Text>
            </Pressable>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Senden"
              onPress={() => submit(draft)}
              disabled={!draft.trim() || send.isPending}
              style={[sendButtonStyle, (!draft.trim() || send.isPending) && { opacity: 0.4 }]}
            >
              <Text style={{ fontSize: 20 }}>➤</Text>
            </Pressable>
          </View>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

/**
 * Der Freisprech-Modus: ein Knopf, der immer das tut, was im Gespräch gerade
 * dran ist – abschicken, während zugehört wird, und unterbrechen, während die
 * KI spricht.
 */
function VoicePanel({
  phase,
  recognizing,
  transcript,
  onSendNow,
  onInterrupt,
  onExit,
}: {
  phase: VoicePhase;
  recognizing: boolean;
  transcript: string;
  onSendNow: () => void;
  onInterrupt: () => void;
  onExit: () => void;
}) {
  const pulse = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (phase !== 'listening') {
      pulse.setValue(1);
      return;
    }
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, { toValue: 1.15, duration: 700, useNativeDriver: true }),
        Animated.timing(pulse, { toValue: 1, duration: 700, useNativeDriver: true }),
      ]),
    );
    loop.start();
    return () => loop.stop();
  }, [phase, pulse]);

  const hint =
    phase === 'speaking'
      ? 'Du kannst jederzeit dazwischenreden – tippe zum Unterbrechen.'
      : phase === 'thinking'
        ? 'Einen Moment …'
        : recognizing
          ? 'Ich höre zu – hör einfach auf zu sprechen, wenn du fertig bist.'
          : 'Mikrofon startet …';

  return (
    <View style={voicePanelStyle}>
      <Text style={[typography.body, { textAlign: 'center', color: colors.text, minHeight: 44 }]}>
        {transcript || (phase === 'listening' ? '…' : '')}
      </Text>
      <Caption>{hint}</Caption>

      <Animated.View style={{ transform: [{ scale: pulse }] }}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={
            phase === 'speaking' ? 'KI unterbrechen' : phase === 'thinking' ? 'Antwort wird erstellt' : 'Jetzt senden'
          }
          onPress={phase === 'speaking' ? onInterrupt : phase === 'listening' ? onSendNow : undefined}
          disabled={phase === 'thinking'}
          style={[
            voiceButtonStyle,
            phase === 'listening' && { backgroundColor: colors.danger },
            phase === 'speaking' && { backgroundColor: colors.premium },
          ]}
        >
          {phase === 'thinking' ? (
            <ActivityIndicator color={colors.textInverse} />
          ) : (
            <Text style={{ fontSize: 30 }}>{phase === 'speaking' ? '⏹' : '🎙️'}</Text>
          )}
        </Pressable>
      </Animated.View>

      <Pressable accessibilityRole="button" onPress={onExit} hitSlop={8}>
        <Caption>Freisprechen beenden · Tastatur</Caption>
      </Pressable>
    </View>
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

function joinWords(left: string, right: string): string {
  if (!left.trim()) return right.trim();
  if (!right.trim()) return left.trim();
  return `${left.trim()} ${right.trim()}`;
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

const voicePanelStyle = {
  alignItems: 'center' as const,
  gap: spacing.md,
  paddingHorizontal: spacing.lg,
  paddingTop: spacing.lg,
  paddingBottom: spacing.md,
  backgroundColor: colors.surface,
  borderTopWidth: 1,
  borderTopColor: colors.border,
};

const voiceButtonStyle = {
  width: 84,
  height: 84,
  borderRadius: 42,
  backgroundColor: colors.primary,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};
