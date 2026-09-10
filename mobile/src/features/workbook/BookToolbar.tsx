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
import { book, bookLabel, bookSans } from '../../theme';
import {
  ChevronDownIcon,
  CursorIcon,
  EraserIcon,
  HighlighterIcon,
  MinusIcon,
  PencilIcon,
  PlusIcon,
  TextIcon,
  TrashIcon,
  UndoIcon,
} from './BookIcons';

/**
 * Werkzeugleiste der Lehrwerksseite.
 *
 * Anders als im freien Notizheft gibt es hier einen zusätzlichen Modus:
 * „Bearbeiten" schaltet die Zeichenebene durchlässig, sodass Lücken und
 * Auswahlfelder bedienbar sind. Sobald ein Zeichenwerkzeug aktiv ist, liegt der
 * Stift über der Seite – wie eine Folie über einem Arbeitsblatt.
 *
 * Die Leiste ist als Federmäppchen neben dem Buch gedacht, nicht als App-Leiste:
 * Papierton, Haarlinien, einfarbige Strichsymbole. Sie soll der Seite nicht die
 * Aufmerksamkeit nehmen, deshalb trägt nur das aktive Werkzeug Farbe.
 *
 * Ein Griff oben lässt sie ganz einklappen – wer nicht zeichnet, kann sich die
 * Seite in voller Höhe ansehen, statt dauerhaft ein Federmäppchen am unteren
 * Rand mitzuschleppen.
 */
export type BookMode = 'EDIT' | 'DRAW';

export interface BookToolState {
  mode: BookMode;
  kind: ToolKind;
  color: string;
  width: number;
  fontSize: number;
}

export const DEFAULT_BOOK_TOOL: BookToolState = {
  mode: 'EDIT',
  kind: 'PEN',
  color: PEN_COLORS[0],
  width: PEN_WIDTHS[1],
  fontSize: FONT_SIZES[1],
};

type IconComponent = (props: { color: string; size?: number }) => React.JSX.Element;

const DRAW_TOOLS: Array<{ kind: ToolKind; Icon: IconComponent; label: string }> = [
  { kind: 'PEN', Icon: PencilIcon, label: 'Stift' },
  { kind: 'HIGHLIGHTER', Icon: HighlighterIcon, label: 'Marker' },
  { kind: 'TEXT', Icon: TextIcon, label: 'Textfeld' },
  { kind: 'ERASER', Icon: EraserIcon, label: 'Radierer' },
];

export const ZOOM_STEPS = [0.5, 0.75, 1, 1.25, 1.5, 2, 2.5] as const;

export function BookToolbar({
  tool,
  onChange,
  zoom,
  onZoom,
  onUndo,
  canUndo,
  onClear,
  hasNotes,
  collapsed,
  onToggleCollapsed,
}: {
  tool: BookToolState;
  onChange: (tool: BookToolState) => void;
  zoom: number;
  onZoom: (zoom: number) => void;
  onUndo: () => void;
  canUndo: boolean;
  onClear: () => void;
  hasNotes: boolean;
  /** Eingeklappt bleibt nur der Griff übrig – mehr Platz für die Seite. */
  collapsed: boolean;
  onToggleCollapsed: () => void;
}) {
  const isDrawing = tool.mode === 'DRAW';
  const palette = tool.kind === 'HIGHLIGHTER' ? HIGHLIGHTER_COLORS : PEN_COLORS;
  const widths = tool.kind === 'HIGHLIGHTER' ? HIGHLIGHTER_WIDTHS : PEN_WIDTHS;

  function selectDrawTool(kind: ToolKind): void {
    // Ein zweiter Tipp auf das aktive Werkzeug schaltet zurück ins Bearbeiten –
    // so kommt man ohne Umweg wieder an die Aufgabenfelder.
    if (isDrawing && tool.kind === kind) {
      onChange({ ...tool, mode: 'EDIT' });
      return;
    }
    const presets: Record<string, Partial<BookToolState>> = {
      PEN: { color: PEN_COLORS[0], width: PEN_WIDTHS[1] },
      HIGHLIGHTER: { color: HIGHLIGHTER_COLORS[0], width: HIGHLIGHTER_WIDTHS[1] },
      ERASER: { width: 14 },
      TEXT: { color: PEN_COLORS[0] },
    };
    onChange({ ...tool, mode: 'DRAW', kind, ...presets[kind] });
  }

  const zoomIndex = ZOOM_STEPS.indexOf(zoom as (typeof ZOOM_STEPS)[number]);
  const canZoomOut = zoomIndex > 0;
  const canZoomIn = zoomIndex < ZOOM_STEPS.length - 1;

  return (
    <View style={container}>
      {/*
        Griff zum Ein-/Ausblenden: Wer gerade nicht zeichnet, kann die Leiste
        ganz aus dem Weg räumen und bekommt die Seite in voller Höhe. Der
        Pfeil zeigt dieselbe Richtung wie bei den Akkordeons der
        Übersichtsseiten – nach unten heißt „hier klappt etwas auf".
      */}
      <Pressable
        accessibilityRole="button"
        accessibilityState={{ expanded: !collapsed }}
        accessibilityLabel={collapsed ? 'Werkzeugleiste einblenden' : 'Werkzeugleiste ausblenden'}
        onPress={onToggleCollapsed}
        style={handle}
      >
        <Text style={handleLabel}>Werkzeuge</Text>
        <View style={{ transform: [{ rotate: collapsed ? '0deg' : '180deg' }] }}>
          <ChevronDownIcon color={book.inkFaint} size={14} />
        </View>
      </Pressable>

      {collapsed ? null : (
        <>
          <View style={row}>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Aufgaben bearbeiten"
              accessibilityState={{ selected: !isDrawing }}
              onPress={() => onChange({ ...tool, mode: 'EDIT' })}
              style={[toolButton, !isDrawing && toolButtonActive]}
            >
              <CursorIcon color={!isDrawing ? book.paper : book.inkSoft} />
            </Pressable>

            <View style={divider} />

            {DRAW_TOOLS.map(({ kind, Icon, label }) => {
              const active = isDrawing && tool.kind === kind;
              return (
                <Pressable
                  key={kind}
                  accessibilityRole="button"
                  accessibilityLabel={label}
                  accessibilityState={{ selected: active }}
                  onPress={() => selectDrawTool(kind)}
                  style={[toolButton, active && toolButtonActive]}
                >
                  <Icon color={active ? book.paper : book.inkSoft} />
                </Pressable>
              );
            })}

            <View style={{ flex: 1 }} />

            {/* Zoom bleibt in beiden Modi erreichbar. */}
            <Pressable
              accessibilityLabel="Verkleinern"
              onPress={() => onZoom(ZOOM_STEPS[Math.max(0, zoomIndex - 1)])}
              disabled={!canZoomOut}
              style={[toolButton, !canZoomOut && { opacity: 0.3 }]}
            >
              <MinusIcon color={book.inkSoft} />
            </Pressable>
            <Pressable accessibilityLabel="Zoom zurücksetzen" onPress={() => onZoom(1)} style={zoomLabel}>
              <Text style={zoomText}>{Math.round(zoom * 100)} %</Text>
            </Pressable>
            <Pressable
              accessibilityLabel="Vergrößern"
              onPress={() => onZoom(ZOOM_STEPS[Math.min(ZOOM_STEPS.length - 1, zoomIndex + 1)])}
              disabled={!canZoomIn}
              style={[toolButton, !canZoomIn && { opacity: 0.3 }]}
            >
              <PlusIcon color={book.inkSoft} />
            </Pressable>
          </View>

          {/* Zweite Zeile nur im Zeichenmodus: Farbe und Stärke des aktiven Werkzeugs. */}
          {isDrawing ? (
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={optionRow}>
              {tool.kind !== 'ERASER'
                ? palette.map((color) => (
                    <Pressable
                      key={color}
                      accessibilityLabel={`Farbe ${color}`}
                      onPress={() => onChange({ ...tool, color })}
                      style={[swatch, { backgroundColor: color }, tool.color === color && swatchActive]}
                    />
                  ))
                : null}

              {tool.kind !== 'ERASER' ? <View style={divider} /> : null}

              {tool.kind === 'TEXT'
                ? FONT_SIZES.map((size) => (
                    <Pressable
                      key={size}
                      onPress={() => onChange({ ...tool, fontSize: size })}
                      style={[sizeChip, tool.fontSize === size && sizeChipActive]}
                    >
                      <Text
                        style={[
                          sizeChipText,
                          tool.fontSize === size && { color: book.paper },
                        ]}
                      >
                        {size}
                      </Text>
                    </Pressable>
                  ))
                : (tool.kind === 'ERASER' ? [8, 14, 24, 36] : widths).map((width) => (
                    <Pressable
                      key={width}
                      accessibilityLabel={`Stärke ${width}`}
                      onPress={() => onChange({ ...tool, width })}
                      style={[sizeChip, tool.width === width && sizeChipActive]}
                    >
                      {/* Die Stärke wird als Punkt gezeigt, nicht als Zahl – so
                          wählt man auch im Federmäppchen: nach dem Aussehen. */}
                      <View
                        style={{
                          width: Math.min(20, Math.max(4, width)),
                          height: Math.min(20, Math.max(4, width)),
                          borderRadius: 10,
                          backgroundColor: tool.width === width ? book.paper : book.ink,
                        }}
                      />
                    </Pressable>
                  ))}

              <View style={divider} />

              <Pressable
                accessibilityLabel="Rückgängig"
                onPress={onUndo}
                disabled={!canUndo}
                style={[sizeChip, !canUndo && { opacity: 0.3 }]}
              >
                <UndoIcon color={book.inkSoft} size={19} />
              </Pressable>
              <Pressable
                accessibilityLabel="Alle Notizen löschen"
                onPress={onClear}
                disabled={!hasNotes}
                style={[sizeChip, !hasNotes && { opacity: 0.3 }]}
              >
                <TrashIcon color={book.inkSoft} size={19} />
              </Pressable>
            </ScrollView>
          ) : null}
        </>
      )}
    </View>
  );
}

const container = {
  backgroundColor: book.tint,
  borderTopWidth: 1,
  borderTopColor: book.rule,
  paddingHorizontal: 12,
  paddingTop: 4,
  paddingBottom: 8,
  gap: 8,
};

const handle = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  gap: 6,
  paddingVertical: 6,
};

const handleLabel = {
  ...bookLabel,
  fontSize: 11,
  color: book.inkFaint,
};

const row = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  gap: 4,
};

const optionRow = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  gap: 8,
  paddingRight: 16,
};

const toolButton = {
  width: 42,
  height: 42,
  borderRadius: 2,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

/** Aktiv heißt: eingefärbt wie ein Stempelabdruck, kein Leuchtkasten. */
const toolButtonActive = {
  backgroundColor: book.ink,
};

const zoomLabel = {
  minWidth: 58,
  height: 42,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const zoomText = {
  fontFamily: bookSans,
  fontSize: 13,
  letterSpacing: 0.6,
  color: book.inkSoft,
};

const divider = {
  width: 1,
  height: 24,
  backgroundColor: book.rule,
  marginHorizontal: 4,
};

const swatch = {
  width: 30,
  height: 30,
  borderRadius: 15,
  borderWidth: 1,
  borderColor: book.rule,
};

const swatchActive = {
  borderWidth: 2,
  borderColor: book.ink,
  transform: [{ scale: 1.15 }],
};

const sizeChip = {
  minWidth: 40,
  height: 34,
  paddingHorizontal: 10,
  borderRadius: 2,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  backgroundColor: '#FFFFFF',
  borderWidth: 1,
  borderColor: book.rule,
};

const sizeChipActive = {
  backgroundColor: book.ink,
  borderColor: book.ink,
};

const sizeChipText = {
  ...bookLabel,
  fontSize: 12,
  letterSpacing: 0.4,
  color: book.ink,
};
