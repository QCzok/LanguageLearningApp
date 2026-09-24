import React, { useEffect, useRef, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { ExpoSpeechRecognitionModule, useSpeechRecognitionEvent } from 'expo-speech-recognition';
import type { ReviewCardDto } from '@lingua/shared';
import { Button, Row } from '../../components';
import { useTranslation } from '../../i18n';
import { colors, flashcard, spacing, typography } from '../../theme';
import { checkAnswer } from './answerCheck';
import { FeedbackBar } from './FeedbackBar';
import { Flashcard } from './Flashcard';
import { speakTerm, speechLocale, stopSpeaking } from './speech';

/** Nach so vielen Fehlversuchen gilt das Wort als nicht gekonnt. */
const MAX_ATTEMPTS = 3;

type Phase = 'idle' | 'listening' | 'done';

/**
 * Gibt es auf diesem Gerät eine Spracherkennung? Ohne sie wird aus
 * „Aussprechen" eine Auswahlkarte (siehe `ReviewScreen`).
 */
export function canRecognizeSpeech(): boolean {
  try {
    return ExpoSpeechRecognitionModule.isRecognitionAvailable();
  } catch {
    return false;
  }
}

/**
 * Aussprechen: Der Begriff steht auf der Karte, der Nutzer sagt ihn laut.
 *
 * Die Spracherkennung liefert mehrere Lesarten dessen, was sie gehört hat –
 * zählt eine davon als der Begriff (dieselbe Nachsicht wie beim Eintippen:
 * Artikel, Groß-/Kleinschreibung und ein Buchstabe Abweichung sind egal),
 * war die Aussprache verständlich. Beim ersten Versuch gibt das die volle
 * Note, später eine schwächere; nach drei Fehlversuchen landet das Wort bei
 * den Fehlern. Wer gerade nicht sprechen kann, überspringt – ohne Wertung.
 */
export function SpeakingCard({
  card,
  remaining,
  languageCode,
  onGrade,
  onSkip,
  onContinue,
}: {
  card: ReviewCardDto;
  remaining: number;
  languageCode?: string;
  /** Die Wertung steht fest – geht sofort ans Backend. */
  onGrade: (grade: number) => void;
  onSkip: () => void;
  onContinue: (correct: boolean) => void;
}) {
  const { t } = useTranslation();
  const [phase, setPhase] = useState<Phase>('idle');
  const [heard, setHeard] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [correct, setCorrect] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);
  // Die Ereignisse der Spracherkennung sind global – nur Treffer, während
  // diese Karte zuhört, zählen.
  const listening = useRef(false);
  const gotFinal = useRef(false);

  useEffect(
    () => () => {
      listening.current = false;
      ExpoSpeechRecognitionModule.abort();
    },
    [],
  );

  function evaluate(alternatives: string[]) {
    listening.current = false;
    ExpoSpeechRecognitionModule.stop();
    const attempt = attempts + 1;
    setAttempts(attempt);

    const understood = alternatives.some((text) => checkAnswer(text, card.item.term) !== 'wrong');
    if (understood) {
      setCorrect(true);
      setPhase('done');
      onGrade(attempt === 1 ? 4 : 3);
    } else if (attempt >= MAX_ATTEMPTS) {
      setCorrect(false);
      setPhase('done');
      onGrade(1);
    } else {
      setPhase('idle');
    }
  }

  useSpeechRecognitionEvent('result', (event) => {
    if (!listening.current) return;
    const alternatives = event.results.map((result) => result.transcript).filter(Boolean);
    setHeard(alternatives[0] ?? '');
    if (event.isFinal) {
      gotFinal.current = true;
      evaluate(alternatives);
    }
  });

  useSpeechRecognitionEvent('end', () => {
    if (!listening.current) return;
    listening.current = false;
    // Beendet ohne Ergebnis – nichts verstanden, kein Versuch verbraucht.
    if (!gotFinal.current) {
      setPhase('idle');
      setError(t('speakNothingHeard'));
    }
  });

  useSpeechRecognitionEvent('error', (event) => {
    if (!listening.current) return;
    listening.current = false;
    setPhase('idle');
    if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
      setError(t('chatMicPermission'));
    } else if (event.error === 'no-speech') {
      setError(t('speakNothingHeard'));
    } else if (event.error !== 'aborted') {
      setError(t('chatRecognitionFailed'));
    }
  });

  async function startListening() {
    if (phase !== 'idle') return;
    setError(null);
    const permission = await ExpoSpeechRecognitionModule.requestPermissionsAsync();
    if (!permission.granted) {
      setError(t('chatMicPermission'));
      return;
    }
    // Sonst hört das Mikrofon die eigene Vorlesestimme mit.
    stopSpeaking();
    setHeard('');
    gotFinal.current = false;
    listening.current = true;
    setPhase('listening');
    ExpoSpeechRecognitionModule.start({
      lang: speechLocale(languageCode),
      interimResults: true,
      maxAlternatives: 5,
      continuous: false,
    });
  }

  function stopListening() {
    ExpoSpeechRecognitionModule.stop();
  }

  const retrying = phase === 'idle' && attempts > 0;

  return (
    <View style={{ flex: 1, gap: spacing.md }}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ gap: spacing.lg, paddingBottom: spacing.md }}>
        <Flashcard stackSize={remaining}>
          <View style={{ minHeight: 180, justifyContent: 'center', alignItems: 'center', gap: 6 }}>
            <Text style={cardEyebrow}>{t('speakPrompt')}</Text>
            <Row gap={spacing.xs} style={{ justifyContent: 'center', flexWrap: 'wrap' }}>
              <Text style={termText}>{card.item.term}</Text>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel={t('reviewListenA11y')}
                hitSlop={8}
                disabled={phase === 'listening'}
                onPress={() => void speakTerm(card.item.term, languageCode)}
                style={({ pressed }) => [speakButton, pressed && { opacity: 0.6 }]}
              >
                <Text style={{ fontSize: 18 }}>🔊</Text>
              </Pressable>
            </Row>
            {card.item.phonetic ? <Text style={cardMeta}>{card.item.phonetic}</Text> : null}
            <Text style={cardMeta}>{card.item.translation}</Text>
          </View>
        </Flashcard>

        <View style={{ alignItems: 'center', gap: spacing.sm }}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={phase === 'listening' ? t('speakStop') : t('speakStart')}
            disabled={phase === 'done'}
            onPress={phase === 'listening' ? stopListening : () => void startListening()}
            style={({ pressed }) => [
              micButton,
              phase === 'listening' && micButtonActive,
              phase === 'done' && { opacity: 0.4 },
              pressed && { transform: [{ scale: 0.96 }] },
            ]}
          >
            <Text style={{ fontSize: 38 }}>🎙️</Text>
          </Pressable>
          <Text style={statusText}>
            {phase === 'listening'
              ? heard || t('speakListening')
              : retrying
                ? t('speakTryAgain', { heard: heard || '…', left: MAX_ATTEMPTS - attempts })
                : phase === 'idle'
                  ? t('speakTapMic')
                  : ' '}
          </Text>
          {error ? <Text style={[statusText, { color: colors.danger }]}>{error}</Text> : null}
        </View>
      </ScrollView>

      {phase === 'done' && correct !== null ? (
        <FeedbackBar
          kind={correct ? 'correct' : 'wrong'}
          title={correct ? t('speakCorrect') : t('reviewNotQuite')}
          detail={heard ? t('speakHeard', { heard }) : undefined}
          onContinue={() => onContinue(correct)}
        />
      ) : (
        <Button label={t('speakSkip')} variant="ghost" onPress={onSkip} disabled={phase === 'listening'} />
      )}
    </View>
  );
}

const cardEyebrow = {
  ...typography.label,
  letterSpacing: 1.4,
  textTransform: 'uppercase' as const,
  color: flashcard.inkSoft,
  textAlign: 'center' as const,
};

const termText = {
  fontSize: 32,
  lineHeight: 40,
  fontWeight: '700' as const,
  color: flashcard.ink,
  textAlign: 'center' as const,
};

const cardMeta = {
  fontSize: 15,
  lineHeight: 21,
  color: flashcard.inkSoft,
  textAlign: 'center' as const,
};

const statusText = {
  ...typography.caption,
  color: colors.textMuted,
  textAlign: 'center' as const,
};

const speakButton = {
  width: 34,
  height: 34,
  borderRadius: 17,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const micButton = {
  width: 92,
  height: 92,
  borderRadius: 46,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  backgroundColor: colors.primarySoft,
  borderWidth: 2,
  borderColor: colors.primarySoft,
};

const micButtonActive = {
  borderColor: colors.danger,
  backgroundColor: colors.dangerSoft,
};
