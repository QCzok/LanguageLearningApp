import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Body, Button, Caption, Input, Screen, Title } from '../../components';
import { useTranslation } from '../../i18n';
import { colors, spacing, typography } from '../../theme';
import { useAuthStore } from '../../store/auth.store';
import type { AuthStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<AuthStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = useAuthStore((state) => state.login);
  const isSubmitting = useAuthStore((state) => state.isSubmitting);
  const error = useAuthStore((state) => state.error);
  const clearError = useAuthStore((state) => state.clearError);

  const canSubmit = email.trim().length > 3 && password.length > 0 && !isSubmitting;

  async function handleLogin() {
    if (!canSubmit) return;
    // Der Fehler landet im Store und wird unten angezeigt – hier reicht das Verschlucken.
    await login(email.trim(), password).catch(() => undefined);
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Screen scroll>
        <View style={{ alignItems: 'center', gap: spacing.sm, paddingVertical: spacing.xl }}>
          <Text style={{ fontSize: 56 }}>🗣️</Text>
          <Title>{t('authLoginTitle')}</Title>
          <Body muted>{t('authLoginSubtitle')}</Body>
        </View>

        <View style={{ gap: spacing.md }}>
          <Input
            label={t('authEmail')}
            value={email}
            onChangeText={(value) => {
              setEmail(value);
              if (error) clearError();
            }}
            autoCapitalize="none"
            autoComplete="email"
            keyboardType="email-address"
            placeholder={t('authEmailPlaceholder')}
            textContentType="emailAddress"
          />
          <Input
            label={t('authPassword')}
            value={password}
            onChangeText={(value) => {
              setPassword(value);
              if (error) clearError();
            }}
            secureTextEntry
            autoComplete="current-password"
            placeholder="••••••••"
            textContentType="password"
            onSubmitEditing={handleLogin}
            returnKeyType="go"
          />

          {error ? (
            <Text style={[typography.caption, { color: colors.danger }]}>{error}</Text>
          ) : null}

          <Button
            label={t('authSignIn')}
            onPress={handleLogin}
            loading={isSubmitting}
            disabled={!canSubmit}
          />
          <Button
            label={t('authNoAccount')}
            variant="ghost"
            onPress={() => {
              clearError();
              navigation.navigate('Register');
            }}
          />
        </View>

        <View style={{ alignItems: 'center', gap: spacing.xs, marginTop: spacing.lg }}>
          <Caption>{t('authTestAccess')}</Caption>
          <Caption>demo@lingua.app · Passwort123</Caption>
        </View>
      </Screen>
    </KeyboardAvoidingView>
  );
}
