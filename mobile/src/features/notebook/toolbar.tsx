import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import {
  FONT_SIZES,
  HIGHLIGHTER_COLORS,
  HIGHLIGHTER_WIDTHS,
  PEN_COLORS,
  PEN_WIDTHS,
} from '@lingua/shared';
import type { ToolKind } from '@lingua/shared';
import { colors, radius, spacing, typography } from '../../theme';
import {
  EraserIcon,
  HighlighterIcon,
  PencilIcon,
  TextIcon,
  TrashIcon,
  UndoIcon,
} from '../workbook/BookIcons';

export interface ToolState {
  kind: ToolKind;
  color: string;
  width: number;
  fontSize: number;
}

export const DEFAULT_TOOL: ToolState = {
  kind: 'PEN',
  color: PEN_COLORS[0],
  width: PEN_WIDTHS[1],
  fontSize: FONT_SIZES[1],
};

type IconComponent = (props: { color: string; size?: number }) => React.JSX.Element;

/*
  Die Symbole sind dieselben Strichzeichnungen wie im Lehrwerk – ein
  Werkzeugkasten, der in beiden Heften gleich aussieht.
*/
const TOOLS: Array<{ kind: ToolKind; Icon: IconComponent; label: string }> = [
  { kind: 'PEN', Icon: PencilIcon, label: 'Stift' },
  { kind: 'HIGHLIGHTER', Icon: HighlighterIcon, label: 'Marker' },
  { kind: 'TEXT', Icon: TextIcon, label: 'Text' },
  { kind: 'ERASER', Icon: EraserIcon, label: 'Radierer' },
];

/**
 * Werkzeugleiste des Lernhefts. Die zweite Zeile passt sich dem aktiven
 * Werkzeug an: Marker bekommen eigene Farben und breitere Spitzen, das
 * Textwerkzeug Schriftgrößen, der Radierer nur Größen.
 */
export function Toolbar({
  tool,
  onChange,
  onUndo,
  canUndo,
  onClear,
}: {
  tool: ToolState;
  onChange: (tool: ToolState) => void;
  onUndo: () => void;
  canUndo: boolean;
  onClear: () => void;
}) {
  const palette = tool.kind === 'HIGHLIGHTER' ? HIGHLIGHTER_COLORS : PEN_COLORS;
  const widths = tool.kind === 'HIGHLIGHTER' ? HIGHLIGHTER_WIDTHS : PEN_WIDTHS;

  function selectTool(kind: ToolKind): void {
    // Beim Wechsel wird eine zum Werkzeug passende Voreinstellung gesetzt,
    // damit nicht z. B. eine Markerbreite am Stift hängen bleibt.
    if (kind === 'HIGHLIGHTER') {
      onChange({ ...tool, kind, color: HIGHLIGHTER_COLORS[0], width: HIGHLIGHTER_WIDTHS[1] });
      return;
    }
    if (kind === 'PEN') {
      onChange({ ...tool, kind, color: PEN_COLORS[0], width: PEN_WIDTHS[1] });
      return;
    }
    if (kind === 'ERASER') {
      onChange({ ...tool, kind, width: 12 });
      return;
    }
    onChange({ ...tool, kind, color: PEN_COLORS[0] });
  }

  return (
    <View style={containerStyle}>
      <View style={rowStyle}>
        {TOOLS.map(({ kind, Icon, label }) => {
          const active = tool.kind === kind;
          return (
            <Pressable
              key={kind}
              accessibilityRole="button"
              accessibilityLabel={label}
              accessibilityState={{ selected: active }}
              onPress={() => selectTool(kind)}
              style={[toolButtonStyle, active && toolButtonActiveStyle]}
            >
              <Icon color={active ? colors.primary : colors.textMuted} />
            </Pressable>
          );
        })}

        <View style={{ flex: 1 }} />

        <Pressable
          accessibilityLabel="Rückgängig"
          onPress={onUndo}
          disabled={!canUndo}
          style={[toolButtonStyle, !canUndo && { opacity: 0.35 }]}
        >
          <UndoIcon color={colors.textMuted} size={20} />
        </Pressable>
        <Pressable accessibilityLabel="Seite leeren" onPress={onClear} style={toolButtonStyle}>
          <TrashIcon color={colors.textMuted} size={20} />
        </Pressable>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={optionRowStyle}>
        {tool.kind !== 'ERASER' ? (
          <>
            {palette.map((color) => (
              <Pressable
                key={color}
                accessibilityLabel={`Farbe ${color}`}
                onPress={() => onChange({ ...tool, color })}
                style={[
                  swatchStyle,
                  { backgroundColor: color },
                  tool.color === color && swatchActiveStyle,
                ]}
              />
            ))}
            <View style={separatorStyle} />
          </>
        ) : null}

        {tool.kind === 'TEXT'
          ? FONT_SIZES.map((size) => (
              <Pressable
                key={size}
                onPress={() => onChange({ ...tool, fontSize: size })}
                style={[sizeChipStyle, tool.fontSize === size && sizeChipActiveStyle]}
              >
                <Text
                  style={[
                    typography.label,
                    { color: tool.fontSize === size ? colors.textInverse : colors.text },
                  ]}
                >
                  {size}
                </Text>
              </Pressable>
            ))
          : (tool.kind === 'ERASER' ? [8, 12, 20, 32] : widths).map((width) => (
              <Pressable
                key={width}
                accessibilityLabel={`Stärke ${width}`}
                onPress={() => onChange({ ...tool, width })}
                style={[sizeChipStyle, tool.width === width && sizeChipActiveStyle]}
              >
                <View
                  style={{
                    width: Math.min(24, width),
                    height: Math.min(24, width),
                    borderRadius: 12,
                    backgroundColor: tool.width === width ? colors.textInverse : colors.text,
                  }}
                />
              </Pressable>
            ))}
      </ScrollView>
    </View>
  );
}

const containerStyle = {
  backgroundColor: colors.surface,
  borderTopWidth: 1,
  borderTopColor: colors.border,
  paddingHorizontal: spacing.md,
  paddingTop: spacing.sm,
  paddingBottom: spacing.md,
  gap: spacing.sm,
};

const rowStyle = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  gap: spacing.sm,
};

const optionRowStyle = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  gap: spacing.sm,
  paddingRight: spacing.lg,
};

const toolButtonStyle = {
  width: 44,
  height: 44,
  borderRadius: radius.md,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  backgroundColor: colors.surfaceAlt,
};

const toolButtonActiveStyle = {
  backgroundColor: colors.primarySoft,
  borderWidth: 2,
  borderColor: colors.primary,
};

const swatchStyle = {
  width: 30,
  height: 30,
  borderRadius: 15,
  borderWidth: 1,
  borderColor: colors.border,
};

const swatchActiveStyle = {
  borderWidth: 3,
  borderColor: colors.text,
  transform: [{ scale: 1.15 }],
};

const sizeChipStyle = {
  minWidth: 40,
  height: 34,
  paddingHorizontal: spacing.sm,
  borderRadius: radius.md,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  backgroundColor: colors.surfaceAlt,
};

const sizeChipActiveStyle = { backgroundColor: colors.primary };

const separatorStyle = {
  width: 1,
  height: 26,
  backgroundColor: colors.border,
  marginHorizontal: spacing.xs,
};
