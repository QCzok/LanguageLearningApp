import React, { useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AVATAR_ICONS } from '@lingua/shared';
import { Body, Card, Caption, Heading, Row, Screen, Title } from '../../components';
import { useTranslation } from '../../i18n';
import { colors, radius, spacing, typography } from '../../theme';
import { useAuthStore } from '../../store/auth.store';
import type { DeviceProfile } from '../../api/device-profiles';
import type { WelcomeStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<WelcomeStackParamList, 'ProfileGate'>;

/**
 * Die Profilauswahl beim Start.
 *
 * Sie erscheint anstelle einer Anmeldung: Auf einem Gerät können mehrere
 * Lernende ein Profil haben – Geschwister, Eltern, ein zweiter Anlauf mit
 * anderer Sprache. Wer tippt, lernt weiter; Zugangsdaten braucht dafür
 * niemand, sie liegen seit dem Einrichten auf dem Gerät.
 *
 * Für den Normalfall – ein Gerät, ein Lernender, App war nur im Hintergrund –
 * bekommt man dieses Bild nie zu sehen: Die laufende Sitzung führt direkt in
 * den Lernstand (siehe `auth.store`, `bootstrap`).
 */
export default function ProfileGateScreen({ navigation }: Props) {
  const { t, tLanguage } = useTranslation();
  const profiles = useAuthStore((state) => state.profiles);
  const continueAs = useAuthStore((state) => state.continueAs);
  const isSubmitting = useAuthStore((state) => state.isSubmitting);
  const error = useAuthStore((state) => state.error);
  const clearError = useAuthStore((state) => state.clearError);
  // Welches Profil gerade angemeldet wird: Der Spinner gehört auf die
  // angetippte Karte, nicht auf alle.
  const [pendingId, setPendingId] = useState<string | null>(null);

  return (
    <Screen scroll>
      <View style={{ gap: spacing.sm, paddingTop: spacing.lg }}>
        <Text style={{ fontSize: 48 }}>🐼</Text>
        <Title>{t('welcomeWhoIsLearning')}</Title>
        <Body muted>{t('welcomeGateSubtitle')}</Body>
      </View>

      {error ? <Text style={[typography.caption, { color: colors.danger }]}>{error}</Text> : null}

      <View style={{ gap: spacing.md }}>
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.userId}
            profile={profile}
            disabled={isSubmitting}
            isPending={pendingId === profile.userId && isSubmitting}
            subtitle={
              profile.onboardingCompleted
                ? profile.languageName
                  ? `${profile.languageFlag ?? ''} ${tLanguage(profile.languageCode ?? '', profile.languageName)}`.trim()
                  : t('welcomeContinueLearning')
                : t('welcomeResumeSetup')
            }
            onPress={() => {
              clearError();
              setPendingId(profile.userId);
              void continueAs(profile.userId);
            }}
          />
        ))}
      </View>

      <Card
        onPress={() => {
          clearError();
          navigation.navigate('CreateProfile');
        }}
        style={{ borderStyle: 'dashed', borderWidth: 1, borderColor: colors.border }}
      >
        <Row gap={spacing.md}>
          <View style={addCircle}>
            <Text style={{ fontSize: 24, color: colors.primary }}>+</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Heading>{t('welcomeAddProfile')}</Heading>
            <Caption>{t('welcomeAddProfileHint')}</Caption>
          </View>
        </Row>
      </Card>
    </Screen>
  );
}

function ProfileCard({
  profile,
  subtitle,
  disabled,
  isPending,
  onPress,
}: {
  profile: DeviceProfile;
  subtitle: string;
  disabled: boolean;
  isPending: boolean;
  onPress: () => void;
}) {
  const icon = AVATAR_ICONS.find((entry) => entry.id === profile.avatarIcon);

  return (
    <Card onPress={disabled ? undefined : onPress}>
      <Row gap={spacing.md}>
        <View style={avatarCircle}>
          <Text style={{ fontSize: 30 }}>
            {icon?.emoji ?? profile.displayName.charAt(0).toUpperCase()}
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Heading>{profile.displayName}</Heading>
          <Caption>{subtitle}</Caption>
        </View>
        {isPending ? (
          <ActivityIndicator color={colors.primary} />
        ) : (
          <Text style={{ fontSize: 20, color: colors.textMuted }}>›</Text>
        )}
      </Row>
    </Card>
  );
}

const avatarCircle = {
  width: 56,
  height: 56,
  borderRadius: radius.full,
  // Weiß auf der weißen Karte – der Rand hält den Kreis sichtbar.
  backgroundColor: colors.surface,
  borderWidth: 1,
  borderColor: colors.border,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const addCircle = {
  width: 56,
  height: 56,
  borderRadius: radius.full,
  backgroundColor: colors.surfaceAlt,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};
