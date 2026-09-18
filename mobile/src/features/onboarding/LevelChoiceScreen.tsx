import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { alert } from '../../utils/alert';
import { useMutation } from '@tanstack/react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CEFR_LEVELS } from '@lingua/shared';
import type { CefrLevel } from '@lingua/shared';
import { Body, Button, Card, Heading, LevelBadge, Row, Screen, Title } from '../../components';
import { usersApi } from '../../api/endpoints';
import { useTranslation } from '../../i18n';
import { useAuthStore } from '../../store/auth.store';
import { colors, radius, spacing, typography } from '../../theme';
import { StepIndicator } from './StepIndicator';
import type { OnboardingStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<OnboardingStackParamList, 'LevelChoice'>;

/**
 * Schritt 3 von 4 – zwei Wege zum Niveau: Einstufungstest oder
 * Selbsteinschätzung. Beide enden im selben Zustand (ein aktives Lernprofil)
 * und münden in den Startbildschirm, der das Einrichten abschließt.
 */
export default function LevelChoiceScreen({ route, navigation }: Props) {
  const { languageId, languageName } = route.params;
  const { t, tLevelShort, tLevelDescription } = useTranslation();
  const [selected, setSelected] = useState<CefrLevel | null>(null);
  const refreshUser = useAuthStore((state) => state.refreshUser);

  const { mutate, isPending } = useMutation({
    mutationFn: (level: CefrLevel) =>
      usersApi.setLearningProfile({ languageId, level, levelSource: 'SELF_SELECTED' }),
    // Erst den frischen Nutzer holen, dann weiter: Der Startbildschirm zeigt
    // Sprache und Niveau aus dem Store – ohne diesen Schritt stünde er leer.
    onSuccess: async () => {
      await refreshUser();
      navigation.navigate('Ready');
    },
    onError: () => alert(t('onboardingSaveFailedTitle'), t('onboardingSaveFailedBody')),
  });

  return (
    <Screen scroll>
      <StepIndicator step={3} />

      <View style={{ gap: spacing.sm }}>
        <Title>{t('onboardingLevelTitle', { language: languageName })}</Title>
        <Body muted>{t('onboardingLevelSubtitle')}</Body>
      </View>

      <Card
        onPress={() => navigation.navigate('PlacementTest', { languageId, languageName })}
        style={{ backgroundColor: colors.primarySoft, borderColor: colors.primary }}
      >
        <Row gap={spacing.md}>
          <Text style={{ fontSize: 30 }}>🎯</Text>
          <View style={{ flex: 1 }}>
            <Heading>{t('onboardingStartTest')}</Heading>
            <Text style={[typography.caption, { color: colors.textMuted }]}>
              {t('onboardingTestMeta')}
            </Text>
          </View>
        </Row>
      </Card>

      <View style={{ gap: spacing.sm }}>
        <Heading>{t('onboardingOrChooseLevel')}</Heading>
        {CEFR_LEVELS.map((level) => {
          const isSelected = selected === level;
          return (
            <Card
              key={level}
              onPress={() => setSelected(level)}
              style={
                isSelected
                  ? { borderColor: colors.primary, borderWidth: 2, backgroundColor: colors.primarySoft }
                  : undefined
              }
            >
              <Row gap={spacing.md}>
                <LevelBadge level={level} />
                <View style={{ flex: 1 }}>
                  <Text style={typography.bodyStrong}>{tLevelShort(level)}</Text>
                  <Text style={[typography.caption, { color: colors.textMuted }]}>
                    {tLevelDescription(level)}
                  </Text>
                </View>
                <View style={[styles.radio, isSelected && styles.radioActive]} />
              </Row>
            </Card>
          );
        })}
      </View>

      <Button
        label={
          selected ? t('onboardingStartWith', { level: selected }) : t('onboardingChooseLevel')
        }
        onPress={() => selected && mutate(selected)}
        disabled={!selected}
        loading={isPending}
      />
    </Screen>
  );
}

const styles = {
  radio: {
    width: 22,
    height: 22,
    borderRadius: radius.full,
    borderWidth: 2,
    borderColor: colors.border,
  },
  radioActive: {
    borderColor: colors.primary,
    borderWidth: 7,
  },
} as const;
