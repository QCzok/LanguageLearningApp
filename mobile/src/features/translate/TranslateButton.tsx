import React, { useLayoutEffect, useRef } from 'react';
import { Pressable } from 'react-native';
import { useTranslation } from '../../i18n';
import { colors } from '../../theme';
import { TranslateIcon } from './TranslateIcon';
import type { TranslateLayerHandle } from './TranslateLayer';

/** Der Knopf in der Kopfzeile, der das Übersetzungsblatt öffnet (siehe `TranslateLayer`). */
export function TranslateButton({ color, onPress }: { color: string; onPress: () => void }) {
  const { t } = useTranslation();
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={t('translateOpen')}
      onPress={onPress}
      hitSlop={10}
      style={({ pressed }) => [{ padding: 6 }, pressed && { opacity: 0.5 }]}
    >
      <TranslateIcon color={color} size={21} />
    </Pressable>
  );
}

/**
 * Setzt den Übersetzen-Knopf rechts in die Kopfzeile des Stacks und gibt die
 * Ref zurück, die an den `TranslateLayer` desselben Bildschirms gehört.
 */
export function useTranslateHeaderButton(navigation: {
  setOptions: (options: { headerRight?: () => React.ReactNode }) => void;
}) {
  const translator = useRef<TranslateLayerHandle>(null);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TranslateButton color={colors.primary} onPress={() => translator.current?.open()} />
      ),
    });
  }, [navigation]);
  return translator;
}
