import React, { useMemo, useState } from 'react';
import { KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Body, Button, Input, Screen, Title } from '../../components';
import { useTranslation } from '../../i18n';
import type { TranslationKey } from '../../i18n';
import { colors, spacing, typography } from '../../theme';
import { useAuthStore } from '../../store/auth.store';
import type { AuthStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<AuthStackParamList, 'Register'>;

/**
 * Spiegelt die Backend-Regeln, damit Fehler schon vor dem Request sichtbar
 * werden. Gibt Schlüssel statt Texte zurück – übersetzt wird erst beim
 * Anzeigen, damit die Meldung der Menüsprache folgt.
 */
function validate(fields: { email: string; password: string; displayName: string }) {
  const errors: Partial<Record<keyof typeof fields, TranslationKey>> = {};

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(fields.email)) {
    errors.email = 'authErrorEmail';
  }
  if (fields.displayName.trim().length < 2) {
    errors.displayName = 'authErrorName';
  }
  if (fields.password.length < 8) {
    errors.password = 'authErrorPasswordLength';
  } else if (!/[A-Za-z]/.test(fields.password) || !/\d/.test(fields.password)) {
    errors.password = 'authErrorPasswordChars';
  }
  return errors;
}

export default function RegisterScreen({ navigation }: Props) {
  const { t } = useTranslation();
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [touched, setTouched] = useState(false);

  const register = useAuthStore((state) => state.register);
  const isSubmitting = useAuthStore((state) => state.isSubmitting);
  const serverError = useAuthStore((state) => state.error);
  const clearError = useAuthStore((state) => state.clearError);

  const errors = useMemo(
    () => validate({ email, password, displayName }),
    [email, password, displayName],
  );
  const isValid = Object.keys(errors).length === 0;

  async function handleRegister() {
    setTouched(true);
    if (!isValid || isSubmitting) return;
    await register(email.trim(), password, displayName.trim()).catch(() => undefined);
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Screen scroll>
        <View style={{ gap: spacing.sm, paddingVertical: spacing.lg }}>
          <Title>{t('authRegisterTitle')}</Title>
          <Body muted>{t('authRegisterSubtitle')}</Body>
        </View>

        <View style={{ gap: spacing.md }}>
          <Input
            label={t('authName')}
            value={displayName}
            onChangeText={setDisplayName}
            placeholder={t('authNamePlaceholder')}
            error={touched && errors.displayName ? t(errors.displayName) : undefined}
          />
          <Input
            label={t('authEmail')}
            value={email}
            onChangeText={(value) => {
              setEmail(value);
              if (serverError) clearError();
            }}
            autoCapitalize="none"
            keyboardType="email-address"
            autoComplete="email"
            placeholder={t('authEmailPlaceholder')}
            error={touched && errors.email ? t(errors.email) : undefined}
          />
          <Input
            label={t('authPassword')}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoComplete="new-password"
            placeholder={t('authPasswordPlaceholder')}
            error={touched && errors.password ? t(errors.password) : undefined}
          />

          {serverError ? (
            <Text style={[typography.caption, { color: colors.danger }]}>{serverError}</Text>
          ) : null}

          <Button label={t('authRegister')} onPress={handleRegister} loading={isSubmitting} />
          <Button
            label={t('authHaveAccount')}
            variant="ghost"
            onPress={() => {
              clearError();
              navigation.goBack();
            }}
          />
        </View>
      </Screen>
    </KeyboardAvoidingView>
  );
}
