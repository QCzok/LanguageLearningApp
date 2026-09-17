import React from 'react';
import { Pressable, Text, View } from 'react-native';
import type { DeckProgressDto } from '@lingua/shared';
import type { TranslationKey } from '../../i18n';
import { colors, flashcard, radius, spacing, typography } from '../../theme';

/** Die drei Wege durch einen Stapel – neu lernen, ausbügeln, auffrischen. */
export type QueueType = 'NEW' | 'DUE' | 'MASTERED';

export const STACK_LABEL_KEYS: Record<QueueType, TranslationKey> = {
  NEW: 'vocabStackNew',
  DUE: 'vocabStackRepeat',
  MASTERED: 'vocabStackLearned',
};

/**
 * Was als Nächstes dran ist: erst Fehler ausbügeln, dann Neues, sonst
 * auffrischen. Dahinter steht der Weg, den eine Karte ohnehin nimmt – eine
 * falsch beantwortete Karte liegt quer, bis sie sitzt (siehe
 * `VocabularyService.getReviewQueue`).
 */
export function nextStack(progress?: DeckProgressDto): QueueType {
  if (!progress) return 'NEW';
  if (progress.needsRepeat > 0) return 'DUE';
  if (progress.new > 0) return 'NEW';
  return 'MASTERED';
}

/**
 * Ein Kartenstapel: der Einstieg in eine Lernsitzung.
 *
 * Die Schichten dahinter liegen leicht schief, wie von Hand abgelegt, und
 * richten sich nach dem Inhalt: zwei Schichten erst ab einer nennenswerten
 * Menge. Oben trägt jeder Stapel eine Kopflinie in seiner Farbe – dasselbe
 * Erkennungszeichen wie die Karteikarte in der Sitzung selbst (siehe
 * `Flashcard`), damit Stapel und Karte als dasselbe Material lesbar sind.
 *
 * Steht im Themenraum eines Stapels (`DeckDetailScreen`) und nirgends sonst:
 * Erst auf Themenebene sind die drei Wege – neu, wiederholen, auffrischen –
 * eine echte Wahl, weil sie sich auf dieselben 50 Wörter beziehen.
 */
export function DeckStack({
  count,
  label,
  hint,
  accent,
  onPress,
}: {
  count: number;
  label: string;
  hint: string;
  accent: string;
  onPress: () => void;
}) {
  const layers = count >= 5 ? 2 : 1;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`${label}, ${count}`}
      onPress={onPress}
      style={({ pressed }) => [{ flex: 1 }, pressed && { opacity: 0.85 }]}
    >
      <View>
        {layers >= 2 ? <View style={[stackLayer, { transform: [{ rotate: '-3.5deg' }] }]} /> : null}
        <View style={[stackLayer, { transform: [{ rotate: '2.5deg' }] }]} />

        <View style={stackTop}>
          <View style={[stackHeadRule, { backgroundColor: accent }]} />
          <Text style={[stackCount, { color: accent }]}>{count}</Text>
          <Text style={stackLabel}>{label}</Text>
          <Text style={stackHint}>{hint}</Text>
        </View>
      </View>
    </Pressable>
  );
}

/** Die schief liegenden Karten unter der obersten. */
const stackLayer = {
  position: 'absolute' as const,
  top: 4,
  left: 3,
  right: 3,
  bottom: -2,
  backgroundColor: flashcard.stack,
  borderRadius: radius.md,
  borderWidth: 1,
  borderColor: flashcard.edge,
};

const stackTop = {
  backgroundColor: flashcard.paper,
  borderRadius: radius.md,
  borderWidth: 1,
  borderColor: flashcard.edge,
  paddingHorizontal: spacing.md,
  paddingVertical: spacing.md,
  gap: 1,
  shadowColor: colors.text,
  shadowOpacity: 0.12,
  shadowRadius: 8,
  shadowOffset: { width: 0, height: 3 },
  elevation: 3,
};

const stackHeadRule = {
  height: 2,
  borderRadius: 1,
  marginBottom: spacing.sm,
};

const stackCount = {
  fontSize: 32,
  lineHeight: 38,
  fontWeight: '700' as const,
};

const stackLabel = {
  ...typography.bodyStrong,
  color: flashcard.ink,
};

const stackHint = {
  fontSize: 12,
  lineHeight: 17,
  color: flashcard.inkSoft,
};
