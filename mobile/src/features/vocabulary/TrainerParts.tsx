import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { colors, flashcard, fontFamily, radius, readingLabel, spacing, typography } from '../../theme';

/** Kolumnentitel mit durchlaufender Haarlinie – wie in der Bibliothek. */
export function SectionRule({ label }: { label: string }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.sm }}>
      <Text style={[readingLabel, { color: colors.text }]}>{label}</Text>
      <View style={{ flex: 1, height: 1, backgroundColor: colors.border }} />
    </View>
  );
}

/**
 * Eine Zeile zum Antippen in den Schritten 2 und 3: Titel, Hinweis
 * und rechts eine Zahl oder ein Häkchen. `warning` hebt die Wiederholer
 * hervor, solange es welche gibt.
 */
export function OptionRow({
  title,
  hint,
  badge,
  checked,
  tone = 'default',
  disabled,
  onPress,
  children,
}: {
  title: string;
  hint?: string;
  /** Rechts im Kreis, etwa die Zahl der Fehler. */
  badge?: string;
  /** Mit Wert zeigt die Zeile ein Kästchen – für die Mehrfachauswahl. */
  checked?: boolean;
  tone?: 'default' | 'warning';
  disabled?: boolean;
  onPress: () => void;
  /** Unter dem Hinweis, etwa ein Link zur Wortliste. */
  children?: React.ReactNode;
}) {
  const selectable = checked !== undefined;
  return (
    <Pressable
      accessibilityRole={selectable ? 'checkbox' : 'button'}
      accessibilityState={selectable ? { checked, disabled } : { disabled }}
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        row,
        tone === 'warning' && rowWarning,
        checked && rowChecked,
        disabled && { opacity: 0.5 },
        pressed && { opacity: 0.9 },
      ]}
    >
      {selectable ? (
        <View style={[checkbox, checked && checkboxOn]}>
          {checked ? <Text style={checkmark}>✓</Text> : null}
        </View>
      ) : null}
      <View style={{ flex: 1, gap: 2 }}>
        <Text style={rowTitle}>{title}</Text>
        {hint ? <Text style={rowHint}>{hint}</Text> : null}
        {children}
      </View>
      {badge ? (
        <View style={pill}>
          <Text style={[typography.label, { color: tone === 'warning' ? colors.warning : colors.text }]}>{badge}</Text>
        </View>
      ) : null}
      {!selectable && !disabled ? <Text style={chevron}>›</Text> : null}
    </Pressable>
  );
}

const row = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  gap: spacing.md,
  padding: spacing.md,
  borderRadius: radius.md,
  backgroundColor: flashcard.paper,
  borderWidth: 1,
  borderBottomWidth: 3,
  borderColor: flashcard.edge,
};

const rowWarning = {
  backgroundColor: colors.warningSoft,
  borderColor: colors.warning,
};

const rowChecked = {
  borderColor: colors.primary,
  backgroundColor: colors.primarySoft,
};

const rowTitle = {
  fontFamily: fontFamily.bold,
  fontSize: 15,
  lineHeight: 20,
  color: flashcard.ink,
};

const rowHint = {
  fontFamily: fontFamily.regular,
  fontSize: 12,
  lineHeight: 16,
  color: flashcard.inkSoft,
};

const pill = {
  minWidth: 28,
  height: 28,
  paddingHorizontal: 6,
  borderRadius: 14,
  backgroundColor: colors.surface,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const chevron = {
  fontSize: 24,
  lineHeight: 26,
  color: colors.primary,
};

const checkbox = {
  width: 24,
  height: 24,
  borderRadius: 6,
  borderWidth: 2,
  borderColor: colors.border,
  backgroundColor: colors.surface,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const checkboxOn = {
  borderColor: colors.primary,
  backgroundColor: colors.primary,
};

const checkmark = {
  ...typography.label,
  color: colors.textInverse,
};
