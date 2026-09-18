import React from 'react';
import { Text, View } from 'react-native';
import { useTranslation } from '../../i18n';
import { colors, fontFamily, spacing } from '../../theme';

/** So viele Schritte hat das Einrichten: Profil, Sprache, Niveau, Start. */
export const ONBOARDING_STEPS = 4;

/**
 * Der Fortschrittsbalken über den Einrichtungsschritten.
 *
 * Er steht auf allen vier Bildern, weil das Einrichten sonst offen wirkt: Wer
 * einen Namen eintippt, soll sehen, dass noch drei kurze Schritte folgen und
 * nicht ein Formular nach dem anderen.
 *
 * Der erste Schritt liegt im Willkommensteil, die übrigen im Onboarding –
 * deshalb ist die Anzeige eine eigene Komponente und kein Teil des Navigators.
 */
export function StepIndicator({ step }: { step: number }) {
  const { t } = useTranslation();

  return (
    <View style={{ gap: spacing.sm }}>
      <View style={{ flexDirection: 'row', gap: 6 }}>
        {Array.from({ length: ONBOARDING_STEPS }).map((_, index) => (
          <View
            key={index}
            style={{
              flex: 1,
              height: 4,
              borderRadius: 2,
              backgroundColor: index < step ? colors.primary : colors.surfaceAlt,
            }}
          />
        ))}
      </View>
      <Text style={stepLabel}>{t('onboardingStepOf', { current: step, total: ONBOARDING_STEPS })}</Text>
    </View>
  );
}

const stepLabel = {
  fontFamily: fontFamily.semiBold,
  fontSize: 11,
  fontWeight: '700' as const,
  letterSpacing: 1.4,
  textTransform: 'uppercase' as const,
  color: colors.textMuted,
};
