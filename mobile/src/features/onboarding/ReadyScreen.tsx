import React from 'react';
import { Text, View } from 'react-native';
import { useMutation } from '@tanstack/react-query';
import { AVATAR_ICONS } from '@lingua/shared';
import { Body, Button, Caption, Card, Heading, LevelBadge, Row, Screen, Title } from '../../components';
import { alert } from '../../utils/alert';
import { usersApi } from '../../api/endpoints';
import { useTranslation } from '../../i18n';
import { useAuthStore } from '../../store/auth.store';
import { colors, radius, shadow, spacing } from '../../theme';
import { StepIndicator } from './StepIndicator';

/**
 * Schritt 4 von 4: Losgehen.
 *
 * Alles ist gespeichert, bevor dieses Bild erscheint – es fasst nur zusammen,
 * was in den drei Schritten davor entstanden ist, und lässt den Lernenden den
 * Anfang selbst setzen. Das Onboarding gilt erst mit dem Knopf als
 * abgeschlossen; bricht jemand vorher ab, steht er beim nächsten Start wieder
 * in den Schritten statt in einer halb eingerichteten App.
 */
export default function ReadyScreen() {
  const { t, tLanguage, tLevelShort } = useTranslation();
  const user = useAuthStore((state) => state.user);
  const refreshUser = useAuthStore((state) => state.refreshUser);

  const start = useMutation({
    mutationFn: () => usersApi.completeOnboarding(),
    // Mit dem aktualisierten Nutzer im Store wechselt der RootNavigator von
    // selbst in die Haupt-App – kein imperatives navigate() nötig.
    onSuccess: () => refreshUser(),
    onError: () => alert(t('onboardingSaveFailedTitle'), t('onboardingSaveFailedBody')),
  });

  if (!user) return null;
  const profile = user.profiles.find((entry) => entry.isActive);
  const icon = AVATAR_ICONS.find((entry) => entry.id === user.avatarIcon);

  return (
    <Screen scroll>
      <StepIndicator step={4} />

      <View style={{ alignItems: 'center', gap: spacing.sm, paddingTop: spacing.md }}>
        <View style={avatarCircle}>
          <Text style={{ fontSize: 52 }}>
            {icon?.emoji ?? user.displayName.charAt(0).toUpperCase()}
          </Text>
        </View>
        <Title>{t('readyTitle', { name: user.displayName })}</Title>
        <Body muted>{t('readySubtitle')}</Body>
      </View>

      {profile ? (
        <Card>
          <Row gap={spacing.md}>
            <Text style={{ fontSize: 30 }}>{profile.language.flagEmoji}</Text>
            <View style={{ flex: 1 }}>
              <Heading>{tLanguage(profile.language.code, profile.language.name)}</Heading>
              <Caption>
                {tLevelShort(profile.level)} ·{' '}
                {profile.levelSource === 'PLACEMENT_TEST'
                  ? t('profileLevelFromTest')
                  : t('profileLevelSelfSelected')}
              </Caption>
            </View>
            <LevelBadge level={profile.level} />
          </Row>
        </Card>
      ) : null}

      <Caption>{t('readyChangeLaterHint')}</Caption>

      <Button label={t('readyStart')} onPress={() => start.mutate()} loading={start.isPending} />
    </Screen>
  );
}

const avatarCircle = {
  width: 96,
  height: 96,
  borderRadius: radius.full,
  backgroundColor: colors.primarySoft,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  ...shadow.card,
};
