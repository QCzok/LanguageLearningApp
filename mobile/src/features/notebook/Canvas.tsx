import React, { useEffect, useMemo, useRef, useState } from 'react';
import { LayoutChangeEvent, PanResponder, StyleSheet, TextInput, View } from 'react-native';
import Svg, { Circle, Ellipse, G, Line, Path, Rect, Text as SvgText } from 'react-native-svg';
import type {
  NotebookElement,
  NotebookPageContent,
  StrokeElement,
  StrokePoint,
  TextElement,
} from '@lingua/shared';
import { colors } from '../../theme';
import type { ToolState } from './toolbar';

/**
 * Zeichenfläche des Lernhefts.
 *
 * Rendering über react-native-svg: Striche sind Pfade, Textfelder SVG-Text.
 * Der laufende Strich wird in lokalem State gehalten und erst beim Loslassen in
 * den Seiteninhalt übernommen – so wird während der Bewegung nur ein Pfad neu
 * gezeichnet statt der gesamten Seite.
 */
export interface CanvasHandle {
  addTextAt: (x: number, y: number) => void;
}

interface CanvasProps {
  content: NotebookPageContent;
  tool: ToolState;
  onChange: (content: NotebookPageContent) => void;
  /** Wird beim Auswählen eines Textelements gemeldet, damit die Toolbar reagieren kann. */
  onSelectText?: (elementId: string | null) => void;
  editingTextId: string | null;
  onEditText: (elementId: string | null) => void;
  /**
   * Als Ebene über fremdem Inhalt: kein Papier, kein Linienraster – nur die
   * gezeichneten Elemente. Wird vom Lehrwerk genutzt, wo die Buchseite
   * darunterliegt.
   */
  transparent?: boolean;
  /**
   * Zusätzlicher Maßstab, um den ein *äußerer* Rahmen diese Ebene per
   * CSS-Transform skaliert (z. B. der Seiten-Zoom im Lehrwerk). `onLayout`
   * liefert nur die unskalierte Layout-Größe, Touch-Koordinaten kommen aber
   * in echten – bereits skalierten – Bildschirmpixeln an. Ohne diesen Faktor
   * würde die Zeichnung um genau diesen Zoom versetzt landen. Das eigentliche
   * Rendering bleibt davon unberührt, denn das übernimmt bereits der äußere
   * Transform.
   */
  externalScale?: number;
}

export default function Canvas({
  content,
  tool,
  onChange,
  editingTextId,
  onEditText,
  transparent = false,
  externalScale = 1,
}: CanvasProps) {
  const [layout, setLayout] = useState({ width: 0, height: 0 });
  const [liveStroke, setLiveStroke] = useState<StrokePoint[] | null>(null);
  // Getippter Text bleibt lokal, solange editiert wird – erst beim Verlassen
  // des Feldes geht er an den Seiteninhalt. Würde jeder Tastendruck sofort
  // über `onChange` nach oben gemeldet (inkl. Speichern-Request), kollidiert
  // das auf Android mit dem Rendern dieser Komponente selbst.
  const [draftText, setDraftText] = useState('');

  // Refs, weil der PanResponder beim ersten Rendern erzeugt wird und sonst
  // veraltete Props sehen würde.
  const toolRef = useRef(tool);
  const contentRef = useRef(content);
  const touchScaleRef = useRef(1);
  toolRef.current = tool;
  contentRef.current = content;

  // Der Canvas wird auf die Gerätebreite skaliert; gespeichert wird immer in
  // Referenzkoordinaten, damit eine Seite auf jedem Gerät gleich aussieht.
  const scale = layout.width > 0 ? layout.width / content.width : 1;
  const displayHeight = content.height * scale;
  // Für Touch-Koordinaten zählt zusätzlich der äußere Zoom – für das
  // Rendering selbst nicht, das bleibt bei `scale`.
  touchScaleRef.current = scale * externalScale;

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,

        onPanResponderGrant: (event) => {
          const point = toCanvasPoint(event.nativeEvent, touchScaleRef.current);
          const activeTool = toolRef.current;

          if (activeTool.kind === 'TEXT') {
            addTextElement(point);
            return;
          }
          if (activeTool.kind === 'ERASER') {
            eraseAt(point);
            return;
          }
          setLiveStroke([point]);
        },

        onPanResponderMove: (event) => {
          const point = toCanvasPoint(event.nativeEvent, touchScaleRef.current);
          const activeTool = toolRef.current;

          if (activeTool.kind === 'ERASER') {
            eraseAt(point);
            return;
          }
          if (activeTool.kind === 'TEXT') return;

          setLiveStroke((previous) => {
            if (!previous) return [point];
            const last = previous[previous.length - 1];
            // Punkte unter 2 Einheiten Abstand verwerfen: glättet die Linie und
            // hält die gespeicherte Datenmenge klein.
            if (Math.hypot(point.x - last.x, point.y - last.y) < 2) return previous;
            return [...previous, point];
          });
        },

        onPanResponderRelease: () => commitStroke(),
        onPanResponderTerminate: () => commitStroke(),
      }),
    // Absichtlich ohne Abhängigkeiten: alles Veränderliche läuft über Refs.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  function commitStroke(): void {
    setLiveStroke((points) => {
      const activeTool = toolRef.current;
      if (!points || points.length < 2 || activeTool.kind === 'ERASER' || activeTool.kind === 'TEXT') {
        return null;
      }

      const stroke: StrokeElement = {
        id: createId(),
        type: 'STROKE',
        tool: activeTool.kind === 'HIGHLIGHTER' ? 'HIGHLIGHTER' : 'PEN',
        color: activeTool.color,
        width: activeTool.width,
        opacity: activeTool.kind === 'HIGHLIGHTER' ? 0.35 : 1,
        points,
      };

      onChange({ ...contentRef.current, elements: [...contentRef.current.elements, stroke] });
      return null;
    });
  }

  function addTextElement(point: StrokePoint): void {
    const element: TextElement = {
      id: createId(),
      type: 'TEXT',
      x: point.x,
      y: point.y,
      width: Math.min(600, contentRef.current.width - point.x - 40),
      text: '',
      color: toolRef.current.color,
      fontSize: toolRef.current.fontSize,
      fontWeight: 'normal',
      fontStyle: 'normal',
      align: 'left',
    };
    onChange({ ...contentRef.current, elements: [...contentRef.current.elements, element] });
    onEditText(element.id);
  }

  /** Radiergummi arbeitet elementweise – für Handschrift die erwartete Geste. */
  function eraseAt(point: StrokePoint): void {
    const radius = toolRef.current.width * 1.5;
    const remaining = contentRef.current.elements.filter(
      (element) => !hitTest(element, point, radius),
    );
    if (remaining.length !== contentRef.current.elements.length) {
      onChange({ ...contentRef.current, elements: remaining });
    }
  }

  function finishTextEditing(elementId: string, text: string): void {
    // Leer gebliebene Textfelder werden wieder entfernt.
    if (text.trim().length === 0) {
      onChange({
        ...contentRef.current,
        elements: contentRef.current.elements.filter((entry) => entry.id !== elementId),
      });
    } else {
      onChange({
        ...contentRef.current,
        elements: contentRef.current.elements.map((entry) =>
          entry.id === elementId && entry.type === 'TEXT' ? { ...entry, text } : entry,
        ),
      });
    }
    onEditText(null);
  }

  const editing = content.elements.find(
    (element): element is TextElement => element.id === editingTextId && element.type === 'TEXT',
  );

  // Bei Editierbeginn den aktuellen Text als Ausgangspunkt übernehmen.
  useEffect(() => {
    if (!editingTextId) return;
    const target = contentRef.current.elements.find(
      (element): element is TextElement => element.id === editingTextId && element.type === 'TEXT',
    );
    setDraftText(target?.text ?? '');
  }, [editingTextId]);

  function handleLayout(event: LayoutChangeEvent): void {
    const { width } = event.nativeEvent.layout;
    setLayout({ width, height: width * (content.height / content.width) });
  }

  return (
    <View
      style={[styles.container, !transparent && { backgroundColor: colors.surface }]}
      onLayout={handleLayout}
    >
      <View style={{ width: '100%', height: displayHeight }} {...panResponder.panHandlers}>
        <Svg width="100%" height={displayHeight} viewBox={`0 0 ${content.width} ${content.height}`}>
          {transparent ? null : (
            <>
              <Rect x={0} y={0} width={content.width} height={content.height} fill={colors.surface} />
              <Background type={content.background} width={content.width} height={content.height} />
            </>
          )}

          <G>
            {content.elements.map((element) => (
              <Element key={element.id} element={element} hidden={element.id === editingTextId} />
            ))}
          </G>

          {liveStroke && liveStroke.length > 1 ? (
            <Path
              d={toPath(liveStroke)}
              stroke={tool.color}
              strokeWidth={tool.width}
              strokeOpacity={tool.kind === 'HIGHLIGHTER' ? 0.35 : 1}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          ) : null}

          {tool.kind === 'ERASER' && liveStroke?.length ? (
            <Circle
              cx={liveStroke[liveStroke.length - 1].x}
              cy={liveStroke[liveStroke.length - 1].y}
              r={tool.width * 1.5}
              fill="none"
              stroke={colors.textMuted}
              strokeDasharray="4 4"
            />
          ) : null}
        </Svg>

        {/* Textbearbeitung passiert in einem echten TextInput über dem SVG –
            SVG-Text ist nicht editierbar. */}
        {editing ? (
          <TextInput
            autoFocus
            multiline
            value={draftText}
            onChangeText={setDraftText}
            onBlur={() => finishTextEditing(editing.id, draftText)}
            style={[
              styles.textInput,
              {
                left: editing.x * scale,
                top: (editing.y - editing.fontSize) * scale,
                width: editing.width * scale,
                minHeight: editing.fontSize * scale * 1.6,
                fontSize: editing.fontSize * scale,
                color: editing.color,
                lineHeight: editing.fontSize * scale * 1.3,
              },
            ]}
            placeholder="Text eingeben …"
            placeholderTextColor={colors.textMuted}
          />
        ) : null}
      </View>
    </View>
  );
}

// ------------------------------------------------------------- Rendering

function Element({ element, hidden }: { element: NotebookElement; hidden: boolean }) {
  if (hidden) return null;

  switch (element.type) {
    case 'STROKE':
      return (
        <Path
          d={toPath(element.points)}
          stroke={element.color}
          strokeWidth={element.width}
          strokeOpacity={element.opacity}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      );

    case 'TEXT':
      // SVG kennt keinen Zeilenumbruch – Zeilen werden einzeln positioniert.
      return (
        <>
          {element.text.split('\n').map((line, index) => (
            <SvgText
              key={`${element.id}-${index}`}
              x={element.x}
              y={element.y + index * element.fontSize * 1.3}
              fill={element.color}
              fontSize={element.fontSize}
              fontWeight={element.fontWeight}
              fontStyle={element.fontStyle}
              textAnchor={element.align === 'center' ? 'middle' : element.align === 'right' ? 'end' : 'start'}
            >
              {line}
            </SvgText>
          ))}
        </>
      );

    case 'SHAPE':
      if (element.shape === 'ELLIPSE') {
        return (
          <Ellipse
            cx={element.x + element.width / 2}
            cy={element.y + element.height / 2}
            rx={Math.abs(element.width / 2)}
            ry={Math.abs(element.height / 2)}
            stroke={element.color}
            strokeWidth={element.strokeWidth}
            fill={element.filled ? element.color : 'none'}
          />
        );
      }
      if (element.shape === 'LINE' || element.shape === 'ARROW') {
        return (
          <Line
            x1={element.x}
            y1={element.y}
            x2={element.x + element.width}
            y2={element.y + element.height}
            stroke={element.color}
            strokeWidth={element.strokeWidth}
            strokeLinecap="round"
          />
        );
      }
      return (
        <Rect
          x={element.x}
          y={element.y}
          width={element.width}
          height={element.height}
          stroke={element.color}
          strokeWidth={element.strokeWidth}
          fill={element.filled ? element.color : 'none'}
          rx={4}
        />
      );

    default:
      return null;
  }
}

function Background({
  type,
  width,
  height,
}: {
  type: NotebookPageContent['background'];
  width: number;
  height: number;
}) {
  if (type === 'BLANK') return null;

  const spacingUnits = 40;
  const lines: React.ReactNode[] = [];

  if (type === 'LINED' || type === 'GRID') {
    for (let y = spacingUnits; y < height; y += spacingUnits) {
      lines.push(
        <Line key={`h${y}`} x1={0} y1={y} x2={width} y2={y} stroke={colors.border} strokeWidth={1} />,
      );
    }
  }
  if (type === 'GRID') {
    for (let x = spacingUnits; x < width; x += spacingUnits) {
      lines.push(
        <Line key={`v${x}`} x1={x} y1={0} x2={x} y2={height} stroke={colors.border} strokeWidth={1} />,
      );
    }
  }
  if (type === 'DOTTED') {
    for (let y = spacingUnits; y < height; y += spacingUnits) {
      for (let x = spacingUnits; x < width; x += spacingUnits) {
        lines.push(<Circle key={`d${x}-${y}`} cx={x} cy={y} r={1.5} fill={colors.border} />);
      }
    }
  }
  return <>{lines}</>;
}

// ---------------------------------------------------------------- Helfer

/** Glättung über quadratische Bézier-Kurven durch die Mittelpunkte. */
function toPath(points: StrokePoint[]): string {
  if (points.length === 0) return '';
  if (points.length === 1) {
    const { x, y } = points[0];
    return `M ${x} ${y} L ${x + 0.1} ${y}`;
  }

  let path = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length - 1; i++) {
    const midX = (points[i].x + points[i + 1].x) / 2;
    const midY = (points[i].y + points[i + 1].y) / 2;
    path += ` Q ${points[i].x} ${points[i].y} ${midX} ${midY}`;
  }
  const last = points[points.length - 1];
  path += ` L ${last.x} ${last.y}`;
  return path;
}

function toCanvasPoint(event: { locationX: number; locationY: number }, scale: number): StrokePoint {
  return { x: event.locationX / scale, y: event.locationY / scale };
}

function hitTest(element: NotebookElement, point: StrokePoint, radius: number): boolean {
  if (element.type === 'STROKE') {
    return element.points.some(
      (candidate) => Math.hypot(candidate.x - point.x, candidate.y - point.y) <= radius,
    );
  }
  if (element.type === 'TEXT') {
    const lines = element.text.split('\n').length;
    const height = element.fontSize * 1.3 * lines;
    return (
      point.x >= element.x &&
      point.x <= element.x + element.width &&
      point.y >= element.y - element.fontSize &&
      point.y <= element.y - element.fontSize + height
    );
  }
  if (element.type === 'SHAPE' || element.type === 'IMAGE') {
    return (
      point.x >= element.x &&
      point.x <= element.x + element.width &&
      point.y >= element.y &&
      point.y <= element.y + element.height
    );
  }
  return false;
}

let idCounter = 0;
function createId(): string {
  idCounter += 1;
  return `${Date.now().toString(36)}-${idCounter.toString(36)}`;
}

const styles = StyleSheet.create({
  container: { width: '100%' },
  textInput: {
    position: 'absolute',
    padding: 3,
    margin: 0,
    textAlignVertical: 'top',
    // Ohne sichtbaren Rand/Untergrund ist ein frisch angelegtes, noch leeres
    // Textfeld auf der Seite kaum zu erkennen – nur ein blasser Platzhalter
    // auf weißem Papier. Der gestrichelte Rahmen macht sofort sichtbar, dass
    // ein Feld entstanden ist und wo es sitzt, auch bevor getippt wird.
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: colors.primary,
    borderRadius: 3,
    backgroundColor: 'rgba(115, 3, 13, 0.05)',
  },
});
