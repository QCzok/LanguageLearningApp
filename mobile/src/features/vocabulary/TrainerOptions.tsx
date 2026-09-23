import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useTranslation } from '../../i18n';
import { useActiveProfile, useAuthStore } from '../../store/auth.store';
import { colors, radius, readingLabel, spacing, typography } from '../../theme';
import { TRAINER_DIRECTIONS, TRAINER_MODES, useTrainerSettings, type TrainerMode } from './trainerSettings';

/**
 * Wie geübt wird: Richtung und Modus, als Chips direkt über den Stapeln.
 *
 * Die Richtung nennt die echten Sprachen („Englisch → Spanisch") statt
 * „vorwärts/rückwärts" – wer Englisch mit spanischer Muttersprache lernt,
 * soll nicht überlegen müssen, was gemeint ist.
 */
export function TrainerOptions() {
  const { t, tLanguage, tVocabMode } = useTranslation();
  const profile = useActiveProfile();
  const nativeCode = useAuthStore((state) => state.user?.nativeLanguage);
  const { direction, mode, setDirection, setMode } = useTrainerSettings();

  const learning = tLanguage(profile?.language.code ?? '', profile?.language.nativeName);
  const native = tLanguage(nativeCode ?? '', nativeCode);

  const directionLabel = {
    FORWARD: `${learning} → ${native}`,
    REVERSE: `${native} → ${learning}`,
    MIXED: `🔀 ${t('trainerDirectionMixed')}`,
  } as const;

  const modeLabel = (value: TrainerMode) =>
    value === 'AUTO' ? `✨ ${t('trainerModeAuto')}` : `${MODE_ICONS[value]} ${tVocabMode(value)}`;

  return (
    <View style={panel}>
      <Text style={label}>{t('trainerDirection')}</Text>
      <View style={chipRow}>
        {TRAINER_DIRECTIONS.map((value) => (
          <Chip key={value} label={directionLabel[value]} active={direction === value} onPress={() => setDirection(value)} />
        ))}
      </View>

      <Text style={label}>{t('trainerMode')}</Text>
      <View style={chipRow}>
        {TRAINER_MODES.map((value) => (
          <Chip key={value} label={modeLabel(value)} active={mode === value} onPress={() => setMode(value)} />
        ))}
      </View>
    </View>
  );
}

const MODE_ICONS: Record<Exclude<TrainerMode, 'AUTO'>, string> = {
  MULTIPLE_CHOICE: '🔘',
  TYPING: '⌨️',
  LISTENING: '🎧',
  FLASHCARD: '🃏',
};

function Chip({ label, active, onPress }: { label: string; active: boolean; onPress: () => void }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected: active }}
      onPress={onPress}
      style={({ pressed }) => [chip, active && chipActive, pressed && { opacity: 0.8 }]}
    >
      <Text style={[chipText, active && { color: colors.textInverse }]}>{label}</Text>
    </Pressable>
  );
}

const panel = {
  gap: spacing.xs,
  padding: spacing.md,
  borderRadius: radius.md,
  backgroundColor: colors.surface,
  borderWidth: 1,
  borderColor: colors.border,
};

const label = {
  ...readingLabel,
  color: colors.textMuted,
  marginTop: spacing.xs,
};

const chipRow = {
  flexDirection: 'row' as const,
  flexWrap: 'wrap' as const,
  gap: spacing.xs,
};

const chip = {
  paddingHorizontal: spacing.sm,
  paddingVertical: 6,
  borderRadius: radius.full,
  backgroundColor: colors.surfaceAlt,
  borderWidth: 1,
  borderColor: colors.border,
};

const chipActive = {
  backgroundColor: colors.primary,
  borderColor: colors.primary,
};

const chipText = {
  ...typography.label,
  color: colors.text,
};
