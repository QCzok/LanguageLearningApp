import React, { useMemo, useState } from 'react';
import { KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Body, Button, Input, Screen, Title } from '../../components';
import { colors, spacing, typography } from '../../theme';
import { useAuthStore } from '../../store/auth.store';
import type { AuthStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<AuthStackParamList, 'Register'>;

/** Spiegelt die Backend-Regeln, damit Fehler schon vor dem Request sichtbar werden. */
function validate(fields: { email: string; password: string; displayName: string }) {
  const errors: Partial<Record<keyof typeof fields, string>> = {};

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(fields.email)) {
    errors.email = 'Bitte eine gültige E-Mail-Adresse angeben.';
  }
  if (fields.displayName.trim().length < 2) {
    errors.displayName = 'Mindestens 2 Zeichen.';
  }
  if (fields.password.length < 8) {
    errors.password = 'Mindestens 8 Zeichen.';
  } else if (!/[A-Za-z]/.test(fields.password) || !/\d/.test(fields.password)) {
    errors.password = 'Mindestens ein Buchstabe und eine Ziffer.';
  }
  return errors;
}

export default function RegisterScreen({ navigation }: Props) {
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
          <Title>Konto erstellen</Title>
          <Body muted>Danach wählst du deine Lernsprache und dein Niveau.</Body>
        </View>

        <View style={{ gap: spacing.md }}>
          <Input
            label="Name"
            value={displayName}
            onChangeText={setDisplayName}
            placeholder="Wie sollen wir dich nennen?"
            error={touched ? errors.displayName : undefined}
          />
          <Input
            label="E-Mail"
            value={email}
            onChangeText={(value) => {
              setEmail(value);
              if (serverError) clearError();
            }}
            autoCapitalize="none"
            keyboardType="email-address"
            autoComplete="email"
            placeholder="du@beispiel.de"
            error={touched ? errors.email : undefined}
          />
          <Input
            label="Passwort"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoComplete="new-password"
            placeholder="Mindestens 8 Zeichen"
            error={touched ? errors.password : undefined}
          />

          {serverError ? (
            <Text style={[typography.caption, { color: colors.danger }]}>{serverError}</Text>
          ) : null}

          <Button label="Registrieren" onPress={handleRegister} loading={isSubmitting} />
          <Button
            label="Ich habe schon ein Konto"
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
