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
import type { OnboardingStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<OnboardingStackParamList, 'LevelChoice'>;

/**
 * Zwei Wege zum Niveau: Einstufungstest oder Selbsteinschätzung.
 * Beide enden im selben Zustand (aktives Lernprofil + abgeschlossenes Onboarding).
 */
export default function LevelChoiceScreen({ route, navigation }: Props) {
  const { languageId, languageName } = route.params;
  const { t, tLevelShort, tLevelDescription } = useTranslation();
  const [selected, setSelected] = useState<CefrLevel | null>(null);
  const refreshUser = useAuthStore((state) => state.refreshUser);

  const { mutate, isPending } = useMutation({
    mutationFn: async (level: CefrLevel) => {
      await usersApi.setLearningProfile({ languageId, level, levelSource: 'SELF_SELECTED' });
      return usersApi.completeOnboarding();
    },
    // Nach dem Onboarding wechselt der RootNavigator automatisch in die Haupt-App,
    // sobald der aktualisierte Nutzer im Store liegt.
    onSuccess: () => refreshUser(),
    onError: () => alert(t('onboardingSaveFailedTitle'), t('onboardingSaveFailedBody')),
  });

  return (
    <Screen scroll>
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
