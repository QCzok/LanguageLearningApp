import React, { useRef } from 'react';
import { Pressable, Text, View } from 'react-native';
import {
  FONT_SIZES,
  HIGHLIGHTER_COLORS,
  HIGHLIGHTER_WIDTHS,
  PEN_COLORS,
  PEN_WIDTHS,
} from '@lingua/shared';
import type { ToolKind } from '@lingua/shared';
import { useTranslation } from '../../i18n';
import type { TranslationKey } from '../../i18n';
import { book, bookLabel, bookSans, radius, shadow } from '../../theme';
import {
  EraserIcon,
  HighlighterIcon,
  PencilIcon,
  TextIcon,
  TrashIcon,
  UndoIcon,
} from '../workbook/BookIcons';

/**
 * Die Werkzeuge des Hefts – als Stifte, die unten links auf dem Tisch liegen.
 *
 * Erst war es eine dauerhafte Werkzeugleiste über die ganze Breite, dann ein
 * Kasten, den man aufmachen musste. Beides stand zwischen dem Nutzer und dem
 * Schreiben: die Leiste kostete dauerhaft Platz, der Kasten drei Tipps für
 * einen Strich. Jetzt liegt jedes Werkzeug als eigener Knopf bereit – einmal
 * tippen heißt „in die Hand nehmen“, noch einmal tippen „weglegen“.
 *
 * Was ein Werkzeug an Einstellungen hat – Farbe, Stärke, Schriftgröße – steht
 * auf einem schmalen Streifen darüber, und zwar nur, solange es tatsächlich in
 * der Hand liegt. Zusammen mit Rückgängig und Löschen ist das alles, was der
 * Kasten vorher enthielt; im Ruhezustand bleiben die drei Knöpfe übrig.
 */
export type ToolMode = 'EDIT' | 'DRAW';

/** Was der Canvas zum Zeichnen wissen muss. */
export interface CanvasTool {
  kind: ToolKind;
  color: string;
  width: number;
  fontSize: number;
}

export interface ToolState extends CanvasTool {
  mode: ToolMode;
}

export const DEFAULT_TOOL: ToolState = {
  mode: 'EDIT',
  kind: 'PEN',
  color: PEN_COLORS[0],
  width: PEN_WIDTHS[1],
  fontSize: FONT_SIZES[1],
};

type IconComponent = (props: { color: string; size?: number }) => React.JSX.Element;

const TOOLS: Record<ToolKind, { Icon: IconComponent; label: TranslationKey }> = {
  PEN: { Icon: PencilIcon, label: 'toolPen' },
  HIGHLIGHTER: { Icon: HighlighterIcon, label: 'toolHighlighter' },
  TEXT: { Icon: TextIcon, label: 'toolText' },
  ERASER: { Icon: EraserIcon, label: 'toolEraser' },
  SHAPE: { Icon: PencilIcon, label: 'toolShape' },
};

/** Ausgangszustand je Werkzeug, bevor der Nutzer selbst etwas eingestellt hat. */
const PRESETS: Record<string, { color: string; width: number; fontSize: number }> = {
  PEN: { color: PEN_COLORS[0], width: PEN_WIDTHS[1], fontSize: FONT_SIZES[1] },
  HIGHLIGHTER: { color: HIGHLIGHTER_COLORS[0], width: HIGHLIGHTER_WIDTHS[1], fontSize: FONT_SIZES[1] },
  TEXT: { color: PEN_COLORS[0], width: PEN_WIDTHS[1], fontSize: FONT_SIZES[1] },
  ERASER: { color: PEN_COLORS[0], width: 14, fontSize: FONT_SIZES[1] },
};

/** Radiergummigrößen – der Radierer kennt keine Strichstärke, nur einen Durchmesser. */
const ERASER_SIZES = [8, 14, 22, 34];

export function ToolDock({
  tool,
  onChange,
  tools,
  onUndo,
  canUndo,
  onClear,
  canClear,
  clearLabel,
}: {
  tool: ToolState;
  onChange: (tool: ToolState) => void;
  /** Welche Werkzeuge hier bereitliegen – das Lehrwerk braucht kein Textfeld. */
  tools: ToolKind[];
  onUndo: () => void;
  canUndo: boolean;
  onClear: () => void;
  canClear: boolean;
  /** Ohne Angabe: „Notizen löschen“ in der Menüsprache. */
  clearLabel?: string;
}) {
  const { t } = useTranslation();
  const isDrawing = tool.mode === 'DRAW';
  const clearAccessibilityLabel = clearLabel ?? t('pageClearNotes');

  /*
    Was an einem Werkzeug eingestellt war, bleibt daran hängen: Wer mit dem
    roten Stift schreibt, kurz zum Marker wechselt und zurückkommt, hat wieder
    Rot in der Hand – nicht das Schwarz der Voreinstellung.
  */
  const memory = useRef<Record<string, { color: string; width: number; fontSize: number }>>({
    ...PRESETS,
  });

  function toggleTool(kind: ToolKind): void {
    // Dasselbe Werkzeug ein zweites Mal antippen legt es weg – ohne diesen Weg
    // zurück blieben im Lehrwerk die Aufgabenfelder gesperrt.
    if (isDrawing && tool.kind === kind) {
      onChange({ ...tool, mode: 'EDIT' });
      return;
    }
    memory.current[tool.kind] = { color: tool.color, width: tool.width, fontSize: tool.fontSize };
    onChange({ ...tool, mode: 'DRAW', kind, ...(memory.current[kind] ?? PRESETS[kind]) });
  }

  const palette = tool.kind === 'HIGHLIGHTER' ? HIGHLIGHTER_COLORS : PEN_COLORS;
  const widths = tool.kind === 'HIGHLIGHTER' ? HIGHLIGHTER_WIDTHS : PEN_WIDTHS;

  return (
    <View style={dock} pointerEvents="box-none">
      {isDrawing ? (
        <View style={strip}>
          {tool.kind !== 'ERASER' ? (
            <View style={stripGroup}>
              {palette.map((color) => (
                <Pressable
                  key={color}
                  accessibilityRole="button"
                  accessibilityLabel={t('toolColorA11y', { color })}
                  accessibilityState={{ selected: tool.color === color }}
                  onPress={() => onChange({ ...tool, color })}
                  style={[swatch, { backgroundColor: color }, tool.color === color && swatchActive]}
                />
              ))}
            </View>
          ) : null}

          {/* Die Trennlinie steht zwischen Farbe und Stärke – beim Radierer,
              der keine Farbe kennt, gibt es nichts zu trennen. */}
          {tool.kind !== 'ERASER' ? <View style={divider} /> : null}

          {tool.kind === 'TEXT' ? (
            <View style={stripGroup}>
              {FONT_SIZES.map((size) => (
                <Pressable
                  key={size}
                  accessibilityRole="button"
                  accessibilityLabel={t('toolFontSizeA11y', { size })}
                  accessibilityState={{ selected: tool.fontSize === size }}
                  onPress={() => onChange({ ...tool, fontSize: size })}
                  style={[chip, tool.fontSize === size && chipActive]}
                >
                  <Text style={[chipText, tool.fontSize === size && { color: book.paper }]}>
                    {size}
                  </Text>
                </Pressable>
              ))}
            </View>
          ) : (
            <View style={stripGroup}>
              {(tool.kind === 'ERASER' ? ERASER_SIZES : widths).map((width) => (
                <Pressable
                  key={width}
                  accessibilityRole="button"
                  accessibilityLabel={t('toolWidthA11y', { width })}
                  accessibilityState={{ selected: tool.width === width }}
                  onPress={() => onChange({ ...tool, width })}
                  style={[chip, tool.width === width && chipActive]}
                >
                  <View
                    style={{
                      width: Math.min(18, Math.max(4, width * 0.6)),
                      height: Math.min(18, Math.max(4, width * 0.6)),
                      borderRadius: 9,
                      backgroundColor: tool.width === width ? book.paper : book.ink,
                    }}
                  />
                </Pressable>
              ))}
            </View>
          )}

          <View style={{ flex: 1 }} />
          <View style={divider} />

          <Pressable
            accessibilityRole="button"
            accessibilityLabel={t('toolUndo')}
            disabled={!canUndo}
            onPress={onUndo}
            style={[stripButton, !canUndo && { opacity: 0.3 }]}
          >
            <UndoIcon color={book.inkSoft} size={18} />
          </Pressable>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={clearAccessibilityLabel}
            disabled={!canClear}
            onPress={onClear}
            style={[stripButton, !canClear && { opacity: 0.3 }]}
          >
            <TrashIcon color={book.inkSoft} size={18} />
          </Pressable>
        </View>
      ) : null}

      <View style={row}>
        {tools.map((kind) => {
          const { Icon, label: labelKey } = TOOLS[kind];
          const label = t(labelKey);
          const active = isDrawing && tool.kind === kind;
          return (
            <Pressable
              key={kind}
              accessibilityRole="button"
              accessibilityLabel={active ? t('toolPutAway', { tool: label }) : label}
              accessibilityState={{ selected: active }}
              onPress={() => toggleTool(kind)}
              style={({ pressed }) => [
                toolButton,
                active && toolButtonActive,
                pressed && { opacity: 0.85 },
              ]}
            >
              <Icon color={active ? book.paper : book.ink} size={22} />
              {active && kind !== 'ERASER' ? (
                <View style={[inkDot, { backgroundColor: tool.color }]} />
              ) : null}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

// ----------------------------------------------------------------- Styles

const dock = {
  position: 'absolute' as const,
  left: 16,
  right: 16,
  bottom: 16,
  alignItems: 'flex-start' as const,
  gap: 10,
};

const row = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  gap: 10,
};

const toolButton = {
  width: 50,
  height: 50,
  borderRadius: radius.full,
  backgroundColor: book.paper,
  borderWidth: 1,
  borderColor: book.rule,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  ...shadow.card,
};

/** In der Hand heißt: eingefärbt wie ein Stempelabdruck, kein Leuchtkasten. */
const toolButtonActive = {
  backgroundColor: book.ink,
  borderColor: book.ink,
};

/** Tupfer in der aktiven Tintenfarbe – zeigt, womit gerade geschrieben wird. */
const inkDot = {
  position: 'absolute' as const,
  top: 7,
  right: 7,
  width: 10,
  height: 10,
  borderRadius: 5,
  borderWidth: 1,
  borderColor: book.paper,
};

/** Der Einstellungsstreifen liegt über den Stiften – und nur, wenn einer arbeitet. */
const strip = {
  alignSelf: 'stretch' as const,
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  flexWrap: 'wrap' as const,
  gap: 8,
  paddingHorizontal: 10,
  paddingVertical: 8,
  backgroundColor: book.paper,
  borderWidth: 1,
  borderColor: book.rule,
  borderRadius: 4,
  ...shadow.card,
};

const stripGroup = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  gap: 8,
};

const stripButton = {
  width: 34,
  height: 34,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const divider = {
  width: 1,
  height: 22,
  backgroundColor: book.rule,
};

const swatch = {
  width: 26,
  height: 26,
  borderRadius: 13,
  borderWidth: 1,
  borderColor: book.rule,
};

const swatchActive = {
  borderWidth: 2,
  borderColor: book.ink,
  transform: [{ scale: 1.14 }],
};

const chip = {
  minWidth: 32,
  height: 30,
  paddingHorizontal: 8,
  borderRadius: 3,
  borderWidth: 1,
  borderColor: book.rule,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  backgroundColor: book.paper,
};

const chipActive = {
  backgroundColor: book.ink,
  borderColor: book.ink,
};

const chipText = {
  ...bookLabel,
  fontFamily: bookSans,
  fontSize: 12,
  letterSpacing: 0,
  color: book.ink,
};
