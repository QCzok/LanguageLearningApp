import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Animated,
  Easing,
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
import { ExpoSpeechRecognitionModule, useSpeechRecognitionEvent } from 'expo-speech-recognition';
import * as Speech from 'expo-speech';
import type { AiCorrectionDto, AiMessageDto, AiMessageSource } from '@lingua/shared';
import { Caption, ErrorState, Loading } from '../../components';
import { aiApi } from '../../api/endpoints';
import { colors, radius, shadow, spacing, typography } from '../../theme';
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
  const messagesKey = ['ai-messages', conversationId];

  const messages = useQuery({
    queryKey: messagesKey,
    queryFn: () => aiApi.messages(conversationId),
  });

  const send = useMutation({
    mutationFn: (payload: { content: string; source: AiMessageSource }) =>
      aiApi.send(conversationId, payload.content, payload.source),
    onSuccess: (turn) => {
      awaitingReplyRef.current = false;

      // Der Server schickt den ganzen Zug zurück – eigener Beitrag samt
      // Korrektur *und* Antwort. Beides wandert direkt in den Cache, statt den
      // Verlauf neu zu laden: Nur so verschwindet die optimistische Nachricht
      // im selben Render, in dem die echte erscheint. Vorher klaffte dazwischen
      // ein Nachladen, und der eigene Beitrag war so lange nicht zu sehen.
      queryClient.setQueryData<AiMessageDto[]>(messagesKey, (previous = []) => [
        ...previous.filter((item) => item.id !== turn.userMessage.id && item.id !== turn.reply.id),
        turn.userMessage,
        turn.reply,
      ]);
      setOptimistic([]);

      void queryClient.invalidateQueries({ queryKey: ['ai-quota'] });
      void queryClient.invalidateQueries({ queryKey: ['ai-conversations'] });
      void speak(turn.reply.id, turn.reply.content);
    },
    onError: (mutationError: Error) => {
      // Die optimistische Nachricht bleibt stehen, damit der Text nicht verloren
      // geht – nur die Markierung „unterwegs“ fällt weg.
      awaitingReplyRef.current = false;
      setError(mutationError.message);
      setOptimistic((previous) => previous.map((item) => ({ ...item, pending: false })));
      if (voiceModeRef.current) void startListening();
    },
  });

  const items: ChatItem[] = useMemo(
    () => [...(messages.data ?? []), ...optimistic],
    [messages.data, optimistic],
  );

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
    submit(content, 'VOICE');
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
    Speech.speak(spokenPart(content), {
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

  function submit(content: string, source: AiMessageSource): void {
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
        source,
        correction: null,
        createdAt: new Date().toISOString(),
        pending: true,
      },
    ]);
    send.mutate({ content: trimmed, source });
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
    return (
      <ErrorState message="Das Gespräch konnte nicht geladen werden." onRetry={messages.refetch} />
    );
  }

  return (
    <SafeAreaView style={screenStyle} edges={['bottom']}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={headerHeight}
      >
        <FlatList
          ref={listRef}
          data={items}
          keyExtractor={(item) => item.id}
          contentContainerStyle={timelineStyle}
          ListEmptyComponent={<EmptyConversation />}
          renderItem={({ item, index }) => (
            <MessageRow
              message={item}
              // Aufeinanderfolgende Beiträge derselben Seite rücken zusammen und
              // teilen sich Avatar und Uhrzeit – das beruhigt das Bild spürbar.
              startsGroup={items[index - 1]?.role !== item.role}
              endsGroup={items[index + 1]?.role !== item.role}
              speaking={speakingId === item.id}
              onToggleSpeak={toggleSpeak}
            />
          )}
          ListFooterComponent={send.isPending ? <ThinkingBubble /> : null}
        />

        {error ? (
          <View style={errorBarStyle}>
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
          <Composer
            draft={draft}
            busy={send.isPending}
            onChange={setDraft}
            onSend={() => submit(draft, 'TEXT')}
            onVoice={enterVoiceMode}
          />
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// ------------------------------------------------------------------ Verlauf

function EmptyConversation() {
  return (
    <View style={emptyStyle}>
      <View style={emptyIconStyle}>
        <Text style={{ fontSize: 34 }}>🎙️</Text>
      </View>
      <Text style={[typography.title, { color: colors.text, textAlign: 'center' }]}>
        Sag einfach etwas
      </Text>
      <Text style={[typography.body, emptyTextStyle]}>
        Tippe auf das Mikrofon und sprich drauflos – oder schreib, wenn dir gerade danach ist.
      </Text>
    </View>
  );
}

function MessageRow({
  message,
  startsGroup,
  endsGroup,
  speaking,
  onToggleSpeak,
}: {
  message: ChatItem;
  startsGroup: boolean;
  endsGroup: boolean;
  speaking: boolean;
  onToggleSpeak: (id: string, content: string) => void;
}) {
  const isUser = message.role === 'user';
  const body = isUser ? message.content : spokenPart(message.content);
  // Gespräche von vor der Umstellung tragen die Korrektur noch als Zeile im
  // Antworttext. Sie wird weiterhin gezeigt, nur eben dort, wo sie steht.
  const legacyNote = isUser ? null : legacyCorrection(message.content);

  return (
    <View style={{ marginTop: startsGroup ? spacing.lg : spacing.xs }}>
      <View style={isUser ? rowStyles.user : rowStyles.assistant}>
        {isUser ? null : startsGroup ? <Avatar /> : <View style={{ width: AVATAR_SIZE }} />}

        {/* Die Spalte darf schrumpfen, ihre Kinder behalten dabei ihre eigene
            Breite: Eine kurze Blase soll nicht auf die Breite der Korrektur
            darunter aufgezogen werden. */}
        <View style={{ flexShrink: 1, alignItems: isUser ? 'flex-end' : 'flex-start' }}>
          <View
            style={[
              bubbleStyles.base,
              isUser ? bubbleStyles.user : bubbleStyles.assistant,
              endsGroup && (isUser ? bubbleStyles.userTail : bubbleStyles.assistantTail),
              message.pending ? { opacity: 0.55 } : null,
            ]}
          >
            <Text
              style={[typography.body, { color: isUser ? colors.textInverse : colors.text }]}
              selectable
            >
              {body}
            </Text>
          </View>

          {legacyNote ? (
            <Text style={[typography.caption, legacyNoteStyle]}>{legacyNote}</Text>
          ) : null}

          {isUser && message.correction ? (
            <Correction correction={message.correction} original={message.content} />
          ) : null}

          {endsGroup ? (
            <View style={isUser ? metaStyles.user : metaStyles.assistant}>
              {isUser ? null : (
                <Pressable
                  accessibilityRole="button"
                  accessibilityLabel={speaking ? 'Vorlesen stoppen' : 'Vorlesen'}
                  onPress={() => onToggleSpeak(message.id, message.content)}
                  hitSlop={10}
                >
                  <Text
                    style={[
                      typography.caption,
                      { color: speaking ? colors.primary : colors.textMuted },
                    ]}
                  >
                    {speaking ? '⏹ Stopp' : '🔊 Vorlesen'}
                  </Text>
                </Pressable>
              )}
              <Text style={timeStyle}>{formatTime(message.createdAt)}</Text>
            </View>
          ) : null}
        </View>
      </View>
    </View>
  );
}

function Avatar() {
  return (
    <View style={avatarStyle}>
      <Text style={[typography.label, { color: colors.primary }]}>L</Text>
    </View>
  );
}

/**
 * Die Korrektur zum eigenen Beitrag – direkt darunter, in derselben Spalte, als
 * leiser Gegenschnitt zur kräftigen Blase darüber. Gezeigt wird der ganze Satz
 * in richtiger Fassung mit hervorgehobenen Änderungen; man sieht den Fehler
 * dadurch im Zusammenhang statt als abstrakte Regel. Die Begründungen sind
 * eingeklappt, damit die Zeile im Gesprächsfluss nicht dominiert.
 */
function Correction({ correction, original }: { correction: AiCorrectionDto; original: string }) {
  const [expanded, setExpanded] = useState(false);
  const segments = useMemo(() => diffWords(original, correction.text), [original, correction.text]);
  const hasNotes = correction.notes.length > 0;

  return (
    <Pressable
      accessibilityRole={hasNotes ? 'button' : undefined}
      accessibilityLabel="Korrektur"
      onPress={hasNotes ? () => setExpanded((value) => !value) : undefined}
      style={correctionStyles.card}
    >
      <View style={correctionStyles.header}>
        <Text style={correctionStyles.label}>Korrektur</Text>
        {hasNotes ? (
          <Text style={[typography.caption, { color: colors.warning }]}>
            {expanded ? '▾' : '▸'}
          </Text>
        ) : null}
      </View>

      <Text style={[typography.body, { color: colors.text }]} selectable>
        {segments.map((segment, index) => (
          <Text key={index} style={segment.changed ? correctionStyles.changed : undefined}>
            {segment.text}
          </Text>
        ))}
      </Text>

      {expanded
        ? correction.notes.map((note) => (
            <Text key={note} style={[typography.caption, correctionStyles.note]}>
              {note}
            </Text>
          ))
        : null}
    </Pressable>
  );
}

/** Drei Punkte, die nacheinander aufleuchten – ruhiger als ein Spinner. */
function ThinkingBubble() {
  const dots = useRef([
    new Animated.Value(0.3),
    new Animated.Value(0.3),
    new Animated.Value(0.3),
  ]).current;

  useEffect(() => {
    const animations = dots.map((dot, index) =>
      Animated.loop(
        Animated.sequence([
          Animated.delay(index * 160),
          Animated.timing(dot, { toValue: 1, duration: 320, useNativeDriver: true }),
          Animated.timing(dot, { toValue: 0.3, duration: 320, useNativeDriver: true }),
          Animated.delay((2 - index) * 160),
        ]),
      ),
    );
    animations.forEach((animation) => animation.start());
    return () => animations.forEach((animation) => animation.stop());
  }, [dots]);

  return (
    <View style={[rowStyles.assistant, { marginTop: spacing.lg }]}>
      <Avatar />
      <View
        style={[
          bubbleStyles.base,
          bubbleStyles.assistant,
          bubbleStyles.assistantTail,
          thinkingStyle,
        ]}
      >
        {dots.map((dot, index) => (
          <Animated.View key={index} style={[dotStyle, { opacity: dot }]} />
        ))}
      </View>
    </View>
  );
}

// ----------------------------------------------------------------- Eingabe

function Composer({
  draft,
  busy,
  onChange,
  onSend,
  onVoice,
}: {
  draft: string;
  busy: boolean;
  onChange: (value: string) => void;
  onSend: () => void;
  onVoice: () => void;
}) {
  const hasText = Boolean(draft.trim());
  const canSend = hasText && !busy;

  return (
    <View style={composerStyles.bar}>
      <TextInput
        value={draft}
        onChangeText={onChange}
        placeholder="Nachricht schreiben …"
        placeholderTextColor={colors.textMuted}
        multiline
        style={composerStyles.input}
      />
      {hasText ? (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Senden"
          onPress={onSend}
          disabled={!canSend}
          style={[composerStyles.send, !canSend && { opacity: 0.4 }]}
        >
          <Text style={{ fontSize: 17, color: colors.textInverse }}>➤</Text>
        </Pressable>
      ) : (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Freisprechen starten"
          onPress={onVoice}
          style={composerStyles.mic}
        >
          <Text style={{ fontSize: 19 }}>🎙️</Text>
        </Pressable>
      )}
    </View>
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
  const pulse = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (phase === 'thinking') {
      pulse.setValue(0);
      return;
    }
    const loop = Animated.loop(
      Animated.timing(pulse, {
        toValue: 1,
        duration: 1800,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
    );
    loop.start();
    return () => loop.stop();
  }, [phase, pulse]);

  // Während die KI spricht, steht hier nichts: Der Knopf zeigt in dem Moment
  // ein Stopp-Zeichen, das erklärt sich von selbst.
  const hint =
    phase === 'speaking'
      ? ''
      : phase === 'thinking'
        ? 'Einen Moment …'
        : recognizing
          ? 'Ich höre zu – hör einfach auf, wenn du fertig bist'
          : 'Mikrofon startet …';

  const ringColor = phase === 'speaking' ? colors.premium : colors.primary;

  return (
    <View style={voiceStyles.panel}>
      <Text style={voiceStyles.transcript} numberOfLines={3}>
        {transcript || (phase === 'listening' ? '…' : '')}
      </Text>
      <Text style={voiceStyles.hint}>{hint}</Text>

      <View style={voiceStyles.buttonWrap}>
        {phase === 'thinking'
          ? null
          : [0, 1].map((index) => (
              <Animated.View
                key={index}
                pointerEvents="none"
                style={[
                  voiceStyles.ring,
                  { borderColor: ringColor },
                  {
                    opacity: pulse.interpolate({
                      inputRange: [0, 1],
                      outputRange: index === 0 ? [0.35, 0] : [0.18, 0],
                    }),
                    transform: [
                      {
                        scale: pulse.interpolate({
                          inputRange: [0, 1],
                          outputRange: index === 0 ? [1, 1.7] : [1, 2.1],
                        }),
                      },
                    ],
                  },
                ]}
              />
            ))}

        <Pressable
          accessibilityRole="button"
          accessibilityLabel={
            phase === 'speaking'
              ? 'KI unterbrechen'
              : phase === 'thinking'
                ? 'Antwort wird erstellt'
                : 'Jetzt senden'
          }
          onPress={
            phase === 'speaking' ? onInterrupt : phase === 'listening' ? onSendNow : undefined
          }
          disabled={phase === 'thinking'}
          style={[
            voiceStyles.button,
            phase === 'speaking' && { backgroundColor: colors.premium },
            phase === 'thinking' && { backgroundColor: colors.surfaceAlt },
          ]}
        >
          {phase === 'thinking' ? (
            <ActivityIndicator color={colors.textMuted} />
          ) : (
            <Text style={{ fontSize: 28 }}>{phase === 'speaking' ? '⏹' : '🎙️'}</Text>
          )}
        </Pressable>
      </View>

      <Pressable accessibilityRole="button" onPress={onExit} hitSlop={10}>
        <Caption>Freisprechen beenden · Tastatur</Caption>
      </Pressable>
    </View>
  );
}

// ------------------------------------------------------------------- Helfer

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

/** Kennzeichen der alten Korrekturzeile, die noch in gespeicherten Antworten steckt. */
const LEGACY_CORRECTION_PREFIX = 'Korrektur:';

function spokenPart(content: string): string {
  const index = content.indexOf(LEGACY_CORRECTION_PREFIX);
  return index === -1 ? content : content.slice(0, index).trim();
}

function legacyCorrection(content: string): string | null {
  const index = content.indexOf(LEGACY_CORRECTION_PREFIX);
  return index === -1 ? null : content.slice(index).trim();
}

function formatTime(iso: string): string {
  return new Date(iso).toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });
}

interface DiffSegment {
  text: string;
  changed: boolean;
}

/**
 * Wortweiser Vergleich von Original und Korrektur, damit in der Korrektur nur
 * das aufleuchtet, was sich geändert hat.
 *
 * Verglichen wird bewusst Zeichen für Zeichen, ohne Normalisierung: Ein
 * fehlendes Komma, ein kleingeschriebenes Substantiv oder ein „u“ statt „ü“
 * sind genau die Fehler, um die es hier geht – würde man sie wegnormalisieren,
 * bliebe die Korrektur unsichtbar.
 *
 * Grundlage ist die längste gemeinsame Teilfolge: Was darin vorkommt, stand
 * schon richtig da; alles andere ist neu oder geändert. Beiträge im Gespräch
 * sind ein paar Dutzend Wörter lang, für die quadratische Tabelle also reichlich
 * klein.
 */
function diffWords(original: string, corrected: string): DiffSegment[] {
  const before = original.trim().split(/\s+/).filter(Boolean);
  const after = corrected.trim().split(/\s+/).filter(Boolean);
  if (before.length === 0) return [{ text: corrected, changed: true }];

  const lengths: number[][] = Array.from({ length: before.length + 1 }, () =>
    new Array<number>(after.length + 1).fill(0),
  );
  for (let i = before.length - 1; i >= 0; i -= 1) {
    for (let j = after.length - 1; j >= 0; j -= 1) {
      lengths[i][j] =
        before[i] === after[j]
          ? lengths[i + 1][j + 1] + 1
          : Math.max(lengths[i + 1][j], lengths[i][j + 1]);
    }
  }

  const segments: DiffSegment[] = [];
  const push = (word: string, changed: boolean): void => {
    const last = segments[segments.length - 1];
    if (last && last.changed === changed) last.text += ` ${word}`;
    else segments.push({ text: segments.length === 0 ? word : ` ${word}`, changed });
  };

  let i = 0;
  let j = 0;
  while (j < after.length) {
    if (i < before.length && before[i] === after[j]) {
      push(after[j], false);
      i += 1;
      j += 1;
    } else if (i < before.length && lengths[i + 1][j] >= lengths[i][j + 1]) {
      // Ein Wort des Originals fällt weg – für die Anzeige der Korrektur
      // bedeutungslos, dort steht ja nur die neue Fassung.
      i += 1;
    } else {
      push(after[j], true);
      j += 1;
    }
  }

  return segments;
}

// -------------------------------------------------------------------- Stil

const AVATAR_SIZE = 30;

const screenStyle = { flex: 1, backgroundColor: colors.background };

const timelineStyle = {
  paddingHorizontal: spacing.lg,
  paddingTop: spacing.sm,
  paddingBottom: spacing.xl,
  flexGrow: 1,
};

const rowStyles = {
  assistant: {
    flexDirection: 'row' as const,
    alignItems: 'flex-start' as const,
    justifyContent: 'flex-start' as const,
    gap: spacing.sm,
    paddingRight: spacing.xxl,
  },
  user: {
    flexDirection: 'row' as const,
    justifyContent: 'flex-end' as const,
    paddingLeft: spacing.xxl,
  },
};

const bubbleStyles = {
  base: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md - 1,
    borderRadius: radius.xl,
  },
  user: {
    backgroundColor: colors.primary,
    borderBottomRightRadius: radius.xl,
  },
  userTail: { borderBottomRightRadius: radius.sm },
  assistant: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderBottomLeftRadius: radius.xl,
    ...shadow.card,
    shadowOpacity: 0.05,
    elevation: 1,
  },
  assistantTail: { borderBottomLeftRadius: radius.sm },
};

const avatarStyle = {
  width: AVATAR_SIZE,
  height: AVATAR_SIZE,
  borderRadius: AVATAR_SIZE / 2,
  backgroundColor: colors.primarySoft,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  marginTop: 2,
};

const metaStyles = {
  assistant: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    gap: spacing.md,
    paddingTop: spacing.xs,
    paddingLeft: spacing.xs,
  },
  user: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    justifyContent: 'flex-end' as const,
    paddingTop: spacing.xs,
    paddingRight: spacing.xs,
  },
};

const timeStyle = {
  ...typography.caption,
  fontSize: 11,
  color: colors.textMuted,
};

const legacyNoteStyle = {
  color: colors.warning,
  paddingTop: spacing.xs,
  paddingLeft: spacing.xs,
};

const correctionStyles = {
  card: {
    marginTop: spacing.sm,
    padding: spacing.md,
    borderRadius: radius.md,
    borderLeftWidth: 3,
    borderLeftColor: colors.warning,
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: colors.border,
    borderRightColor: colors.border,
    borderBottomColor: colors.border,
    gap: spacing.xs,
  },
  header: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    justifyContent: 'space-between' as const,
  },
  label: {
    ...typography.label,
    fontSize: 10,
    letterSpacing: 1.4,
    textTransform: 'uppercase' as const,
    color: colors.warning,
  },
  changed: {
    backgroundColor: colors.warningSoft,
    color: colors.warning,
    fontFamily: typography.bodyStrong.fontFamily,
    fontWeight: typography.bodyStrong.fontWeight,
  },
  note: {
    color: colors.textMuted,
    paddingTop: 2,
  },
};

const thinkingStyle = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  gap: 5,
  paddingVertical: spacing.lg - 2,
};

const dotStyle = {
  width: 6,
  height: 6,
  borderRadius: 3,
  backgroundColor: colors.textMuted,
};

const emptyStyle = {
  flex: 1,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  gap: spacing.md,
  paddingHorizontal: spacing.xl,
};

const emptyIconStyle = {
  width: 76,
  height: 76,
  borderRadius: 38,
  backgroundColor: colors.primarySoft,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const emptyTextStyle = {
  color: colors.textMuted,
  textAlign: 'center' as const,
};

const errorBarStyle = {
  paddingHorizontal: spacing.lg,
  paddingBottom: spacing.sm,
};

const composerStyles = {
  bar: {
    flexDirection: 'row' as const,
    alignItems: 'flex-end' as const,
    gap: spacing.sm,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  input: {
    flex: 1,
    maxHeight: 120,
    minHeight: 44,
    borderRadius: radius.full,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.md,
    ...typography.body,
    color: colors.text,
  },
  send: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.primary,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  },
  mic: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.background,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  },
};

const voiceStyles = {
  panel: {
    alignItems: 'center' as const,
    gap: spacing.md,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.lg,
    paddingBottom: spacing.md,
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  transcript: {
    ...typography.heading,
    fontSize: 18,
    lineHeight: 26,
    color: colors.text,
    textAlign: 'center' as const,
    minHeight: 52,
  },
  hint: {
    ...typography.caption,
    color: colors.textMuted,
    textAlign: 'center' as const,
    /** Hält die Zeile frei, auch wenn gerade nichts darin steht – sonst springt
     *  der Knopf jedes Mal hoch, wenn die KI zu sprechen anfängt. */
    minHeight: typography.caption.lineHeight,
  },
  buttonWrap: {
    width: 84,
    height: 84,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    marginVertical: spacing.xs,
  },
  ring: {
    position: 'absolute' as const,
    width: 84,
    height: 84,
    borderRadius: 42,
    borderWidth: 1.5,
  },
  button: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: colors.primary,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    ...shadow.card,
  },
};
