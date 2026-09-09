import React, { ReactNode } from 'react';
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, levelColors, radius, shadow, spacing, typography } from '../theme';

/**
 * Gemeinsame UI-Bausteine. Bewusst in einer Datei: Es sind kleine, eng
 * zusammengehörige Primitive, die jeder Screen importiert.
 */

// ------------------------------------------------------------------ Layout

export function Screen({
  children,
  scroll = false,
  padded = true,
  style,
}: {
  children: ReactNode;
  scroll?: boolean;
  padded?: boolean;
  style?: StyleProp<ViewStyle>;
}) {
  const inner = (
    <View style={[padded && { padding: spacing.lg, gap: spacing.lg }, style]}>{children}</View>
  );

  return (
    <SafeAreaView style={styles.screen} edges={['top', 'left', 'right']}>
      {scroll ? (
        <ScrollView
          contentContainerStyle={{ paddingBottom: spacing.xxl }}
          keyboardShouldPersistTaps="handled"
        >
          {inner}
        </ScrollView>
      ) : (
        inner
      )}
    </SafeAreaView>
  );
}

export function Card({
  children,
  onPress,
  style,
}: {
  children: ReactNode;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}) {
  if (!onPress) return <View style={[styles.card, style]}>{children}</View>;
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed, style]}
    >
      {children}
    </Pressable>
  );
}

export function Row({
  children,
  gap = spacing.sm,
  style,
}: {
  children: ReactNode;
  gap?: number;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <View style={[{ flexDirection: 'row', alignItems: 'center', gap }, style]}>{children}</View>
  );
}

// -------------------------------------------------------------------- Text

export const Title = ({ children }: { children: ReactNode }) => (
  <Text style={[typography.title, { color: colors.text }]}>{children}</Text>
);

export const Heading = ({ children }: { children: ReactNode }) => (
  <Text style={[typography.heading, { color: colors.text }]}>{children}</Text>
);

export const Body = ({ children, muted }: { children: ReactNode; muted?: boolean }) => (
  <Text style={[typography.body, { color: muted ? colors.textMuted : colors.text }]}>
    {children}
  </Text>
);

export const Caption = ({ children }: { children: ReactNode }) => (
  <Text style={[typography.caption, { color: colors.textMuted }]}>{children}</Text>
);

// --------------------------------------------------------------- Controls

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'premium';

export function Button({
  label,
  onPress,
  variant = 'primary',
  loading = false,
  disabled = false,
  fullWidth = true,
  style,
}: {
  label: string;
  onPress: () => void;
  variant?: ButtonVariant;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  style?: StyleProp<ViewStyle>;
}) {
  const isDisabled = disabled || loading;
  const palette = buttonPalette[variant];

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled, busy: loading }}
      onPress={onPress}
      disabled={isDisabled}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: palette.background, borderColor: palette.border },
        fullWidth && { alignSelf: 'stretch' },
        pressed && !isDisabled && { opacity: 0.85 },
        isDisabled && { opacity: 0.45 },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={palette.text} />
      ) : (
        <Text style={[typography.bodyStrong, { color: palette.text }]}>{label}</Text>
      )}
    </Pressable>
  );
}

const buttonPalette: Record<ButtonVariant, { background: string; text: string; border: string }> = {
  primary: { background: colors.primary, text: colors.textInverse, border: colors.primary },
  secondary: { background: colors.surface, text: colors.text, border: colors.border },
  ghost: { background: 'transparent', text: colors.primary, border: 'transparent' },
  danger: { background: colors.danger, text: colors.textInverse, border: colors.danger },
  premium: { background: colors.premium, text: colors.textInverse, border: colors.premium },
};

export function Input({
  label,
  error,
  ...props
}: TextInputProps & { label?: string; error?: string }) {
  return (
    <View style={{ gap: spacing.xs }}>
      {label ? <Text style={[typography.label, { color: colors.textMuted }]}>{label}</Text> : null}
      <TextInput
        placeholderTextColor={colors.textMuted}
        style={[styles.input, error ? { borderColor: colors.danger } : null]}
        {...props}
      />
      {error ? (
        <Text style={[typography.caption, { color: colors.danger }]}>{error}</Text>
      ) : null}
    </View>
  );
}

// ---------------------------------------------------------------- Anzeigen

export function LevelBadge({ level, small }: { level: string; small?: boolean }) {
  return (
    <View
      style={[
        styles.badge,
        { backgroundColor: levelColors[level] ?? colors.primary },
        small && { paddingHorizontal: spacing.xs, paddingVertical: 2 },
      ]}
    >
      <Text style={[typography.label, { color: colors.textInverse }]}>{level}</Text>
    </View>
  );
}

export function Tag({ label, color = colors.surfaceAlt }: { label: string; color?: string }) {
  return (
    <View style={[styles.tag, { backgroundColor: color }]}>
      <Text style={[typography.caption, { color: colors.textMuted }]}>{label}</Text>
    </View>
  );
}

export function ProgressBar({
  value,
  color = colors.primary,
  height = 8,
}: {
  value: number;
  color?: string;
  height?: number;
}) {
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <View
      accessibilityRole="progressbar"
      accessibilityValue={{ now: clamped, min: 0, max: 100 }}
      style={[styles.progressTrack, { height, borderRadius: height / 2 }]}
    >
      <View
        style={{
          width: `${clamped}%`,
          height: '100%',
          backgroundColor: color,
          borderRadius: height / 2,
        }}
      />
    </View>
  );
}

export function PremiumBadge() {
  return (
    <View style={[styles.badge, { backgroundColor: colors.premium }]}>
      <Text style={[typography.label, { color: colors.textInverse }]}>PREMIUM</Text>
    </View>
  );
}

export function EmptyState({
  emoji,
  title,
  description,
  action,
}: {
  /** Optional – Lehrwerk und Notizhefte kommen bewusst ohne Bildzeichen aus. */
  emoji?: string;
  title: string;
  description?: string;
  action?: { label: string; onPress: () => void };
}) {
  return (
    <View style={styles.empty}>
      {emoji ? <Text style={{ fontSize: 44 }}>{emoji}</Text> : null}
      <Heading>{title}</Heading>
      {description ? (
        <Text style={[typography.body, { color: colors.textMuted, textAlign: 'center' }]}>
          {description}
        </Text>
      ) : null}
      {action ? (
        <Button label={action.label} onPress={action.onPress} fullWidth={false} />
      ) : null}
    </View>
  );
}

export function Loading({ label }: { label?: string }) {
  return (
    <View style={styles.centered}>
      <ActivityIndicator size="large" color={colors.primary} />
      {label ? <Caption>{label}</Caption> : null}
    </View>
  );
}

export function ErrorState({ message, onRetry }: { message: string; onRetry?: () => void }) {
  return (
    <View style={styles.centered}>
      <Text style={{ fontSize: 36 }}>⚠️</Text>
      <Text style={[typography.body, { color: colors.textMuted, textAlign: 'center' }]}>
        {message}
      </Text>
      {onRetry ? <Button label="Erneut versuchen" onPress={onRetry} fullWidth={false} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.lg,
    gap: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadow.card,
  },
  cardPressed: { opacity: 0.85, transform: [{ scale: 0.995 }] },
  button: {
    minHeight: 50,
    borderRadius: radius.md,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
  },
  input: {
    minHeight: 48,
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.md,
    ...typography.body,
    color: colors.text,
  },
  badge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: 3,
    borderRadius: radius.full,
    alignSelf: 'flex-start',
  },
  tag: {
    paddingHorizontal: spacing.sm,
    paddingVertical: 3,
    borderRadius: radius.full,
  },
  progressTrack: { backgroundColor: colors.surfaceAlt, overflow: 'hidden', width: '100%' },
  empty: { alignItems: 'center', gap: spacing.md, padding: spacing.xl },
  centered: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: spacing.md, padding: spacing.xl },
});
