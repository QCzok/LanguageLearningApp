import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AVATAR_ICONS } from '@lingua/shared';
import type { AvatarIconId } from '@lingua/shared';
import { Body, Button, Caption, Input, Screen, Title } from '../../components';
import { StepIndicator } from '../onboarding/StepIndicator';
import { useTranslation } from '../../i18n';
import { colors, radius, shadow, spacing, typography } from '../../theme';
import { useAuthStore } from '../../store/auth.store';
import type { WelcomeStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<WelcomeStackParamList, 'CreateProfile'>;

/** Der Panda ist das Gesicht der App – deshalb steht er schon da, bevor jemand wählt. */
const DEFAULT_ICON: AvatarIconId = 'panda';

/**
 * Schritt 1 von 4: Name und Tier.
 *
 * Statt einer Registrierung steht hier nur die Frage, wie jemand heißen
 * möchte. Das Konto dahinter legt die App still an (siehe `auth.store`) –
 * ohne E-Mail, ohne Passwort, ohne Bestätigungsmail. Wer weiterlernen will,
 * findet sein Profil beim nächsten Start in der Auswahl wieder.
 */
export default function CreateProfileScreen({ navigation }: Props) {
  const { t } = useTranslation();
  const [displayName, setDisplayName] = useState('');
  const [avatarIcon, setAvatarIcon] = useState<AvatarIconId>(DEFAULT_ICON);

  const createProfile = useAuthStore((state) => state.createProfile);
  const isSubmitting = useAuthStore((state) => state.isSubmitting);
  const error = useAuthStore((state) => state.error);
  const clearError = useAuthStore((state) => state.clearError);
  const profiles = useAuthStore((state) => state.profiles);

  const trimmed = displayName.trim();
  const canSubmit = trimmed.length >= 2 && !isSubmitting;
  const currentIcon = AVATAR_ICONS.find((icon) => icon.id === avatarIcon) ?? AVATAR_ICONS[0];

  async function handleContinue() {
    if (!canSubmit) return;
    // Der Fehler landet im Store und steht unten – hier genügt das Verschlucken.
    // Gelingt es, wechselt der RootNavigator von selbst zu Schritt 2.
    await createProfile({ displayName: trimmed, avatarIcon }).catch(() => undefined);
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Screen scroll>
        <StepIndicator step={1} />

        <View style={{ gap: spacing.sm }}>
          <Title>{t('welcomeCreateTitle')}</Title>
          <Body muted>{t('welcomeCreateSubtitle')}</Body>
        </View>

        <View style={{ alignItems: 'center', gap: spacing.xs }}>
          <View style={avatarPreview}>
            <Text style={{ fontSize: 56 }}>{currentIcon.emoji}</Text>
          </View>
          <Caption>{t('welcomePickAnimal')}</Caption>
        </View>

        <View style={iconGrid}>
          {AVATAR_ICONS.map((icon) => {
            const active = icon.id === avatarIcon;
            return (
              <Pressable
                key={icon.id}
                accessibilityRole="radio"
                accessibilityState={{ selected: active }}
                onPress={() => setAvatarIcon(icon.id)}
                style={[iconChip, active && iconChipActive]}
              >
                <Text style={{ fontSize: 26 }}>{icon.emoji}</Text>
              </Pressable>
            );
          })}
        </View>

        <Input
          label={t('welcomeNameLabel')}
          value={displayName}
          onChangeText={(value) => {
            setDisplayName(value);
            if (error) clearError();
          }}
          placeholder={t('welcomeNamePlaceholder')}
          autoCapitalize="words"
          autoCorrect={false}
          maxLength={40}
          returnKeyType="go"
          onSubmitEditing={handleContinue}
        />

        {error ? <Text style={[typography.caption, { color: colors.danger }]}>{error}</Text> : null}

        <Button
          label={t('commonNext')}
          onPress={handleContinue}
          loading={isSubmitting}
          disabled={!canSubmit}
        />

        {profiles.length > 0 ? (
          <Button
            label={t('welcomeBackToProfiles')}
            variant="ghost"
            onPress={() => {
              clearError();
              navigation.goBack();
            }}
          />
        ) : null}
      </Screen>
    </KeyboardAvoidingView>
  );
}

const avatarPreview = {
  width: 104,
  height: 104,
  borderRadius: radius.full,
  backgroundColor: colors.primarySoft,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  ...shadow.card,
};

const iconGrid = {
  flexDirection: 'row' as const,
  flexWrap: 'wrap' as const,
  justifyContent: 'center' as const,
  gap: spacing.sm,
};

const iconChip = {
  width: 54,
  height: 54,
  borderRadius: radius.full,
  borderWidth: 1,
  borderColor: colors.border,
  backgroundColor: colors.surface,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const iconChipActive = {
  borderColor: colors.primary,
  borderWidth: 2,
  backgroundColor: colors.primarySoft,
};
