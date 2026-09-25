import React, { useEffect, useRef } from 'react';
import { Animated, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTranslation } from '../i18n';
import type { TranslationKey } from '../i18n';
import { usePointsStore } from '../store/points.store';
import { colors, fontFamily, radius, shadow, spacing } from '../theme';

/** So lange bleibt die Gratulation stehen, bevor sie ausblendet. */
const HOLD_MS = 1400;

const PRAISE_KEYS: TranslationKey[] = ['pointsPraiseWell', 'pointsPraiseGreat', 'pointsPraiseKeepGoing'];

/**
 * Kurze Gratulation, wenn Punkte dazukommen – oben eingeblendet, nach gut
 * anderthalb Sekunden wieder weg.
 *
 * Sie hält nichts auf: kein Knopf, kein Abdunkeln, und Berührungen gehen
 * durch sie hindurch. Wer gleich weitermacht, merkt sie kaum; wer hinsieht,
 * sieht, was er gerade verdient hat. Einmal im App-Rahmen eingehängt, gilt
 * sie für alle Bereiche (siehe `awardPoints`).
 */
export function PointsCelebration() {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const celebration = usePointsStore((state) => state.celebration);
  const dismiss = usePointsStore((state) => state.dismiss);
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!celebration) return;
    progress.setValue(0);
    const animation = Animated.sequence([
      Animated.spring(progress, { toValue: 1, friction: 7, tension: 80, useNativeDriver: true }),
      Animated.delay(HOLD_MS),
      Animated.timing(progress, { toValue: 0, duration: 220, useNativeDriver: true }),
    ]);
    animation.start(({ finished }) => {
      if (finished) dismiss();
    });
    return () => animation.stop();
  }, [celebration, dismiss, progress]);

  if (!celebration) return null;

  const praise = t(PRAISE_KEYS[celebration.id % PRAISE_KEYS.length]);

  return (
    <View
      pointerEvents="none"
      style={{ position: 'absolute', top: insets.top + spacing.md, left: 0, right: 0, alignItems: 'center' }}
    >
      <Animated.View
        accessibilityLiveRegion="polite"
        accessibilityLabel={`${praise} ${t('pointsEarned', { points: celebration.points })}`}
        style={[
          card,
          {
            opacity: progress,
            transform: [{ translateY: progress.interpolate({ inputRange: [0, 1], outputRange: [-12, 0] }) }],
          },
        ]}
      >
        <Text style={pointsText}>+{celebration.points}</Text>
        <View>
          <Text style={praiseText}>{praise}</Text>
          <Text style={labelText}>{t('points')}</Text>
        </View>
      </Animated.View>
    </View>
  );
}

const card = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  gap: spacing.md,
  paddingVertical: spacing.sm,
  paddingLeft: spacing.lg,
  paddingRight: spacing.xl,
  borderRadius: radius.md,
  backgroundColor: colors.surface,
  borderWidth: 1,
  borderColor: colors.border,
  borderLeftWidth: 3,
  borderLeftColor: colors.primary,
  ...shadow.lift,
};

const pointsText = {
  fontFamily: fontFamily.bold,
  fontSize: 26,
  lineHeight: 32,
  fontWeight: '700' as const,
  color: colors.primary,
  fontVariant: ['tabular-nums' as const],
};

const praiseText = {
  fontFamily: fontFamily.semiBold,
  fontSize: 15,
  lineHeight: 20,
  fontWeight: '600' as const,
  color: colors.text,
};

const labelText = {
  fontFamily: fontFamily.semiBold,
  fontSize: 10,
  letterSpacing: 1.2,
  textTransform: 'uppercase' as const,
  color: colors.textMuted,
};
