/**
 * Datenformat des digitalen Lernhefts.
 *
 * Eine Seite ist eine Liste von Elementen in Zeichenreihenfolge (z-Order = Index).
 * Das Format ist bewusst renderer-unabhängig (SVG/Skia/Canvas) und versioniert,
 * damit spätere Migrationen möglich sind.
 */
export const NOTEBOOK_CONTENT_VERSION = 1;

export type ToolKind = 'PEN' | 'HIGHLIGHTER' | 'ERASER' | 'TEXT' | 'SHAPE';

/** Punkt eines Striches. p = Druck (0–1), falls das Gerät ihn liefert. */
export interface StrokePoint {
  x: number;
  y: number;
  p?: number;
}

export interface StrokeElement {
  id: string;
  type: 'STROKE';
  tool: 'PEN' | 'HIGHLIGHTER';
  color: string; // #RRGGBB
  width: number; // in Canvas-Einheiten
  opacity: number; // 0–1 (Marker typischerweise 0.35)
  points: StrokePoint[];
}

export interface TextElement {
  id: string;
  type: 'TEXT';
  x: number;
  y: number;
  width: number;
  text: string;
  color: string;
  fontSize: number;
  fontWeight: 'normal' | 'bold';
  fontStyle: 'normal' | 'italic';
  align: 'left' | 'center' | 'right';
}

export interface ShapeElement {
  id: string;
  type: 'SHAPE';
  shape: 'LINE' | 'RECT' | 'ELLIPSE' | 'ARROW';
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  strokeWidth: number;
  filled: boolean;
}

export interface ImageElement {
  id: string;
  type: 'IMAGE';
  x: number;
  y: number;
  width: number;
  height: number;
  uri: string;
}

export type NotebookElement = StrokeElement | TextElement | ShapeElement | ImageElement;

export type PageBackground = 'BLANK' | 'LINED' | 'GRID' | 'DOTTED';

export interface NotebookPageContent {
  version: number;
  /** Referenz-Canvasgröße; die App skaliert auf die Gerätebreite. */
  width: number;
  height: number;
  background: PageBackground;
  elements: NotebookElement[];
}

export function emptyPageContent(
  width = 1000,
  height = 1414,
  background: PageBackground = 'LINED',
): NotebookPageContent {
  return { version: NOTEBOOK_CONTENT_VERSION, width, height, background, elements: [] };
}

/** Voreingestellte Farb- und Größenpalette des Editors. */
export const PEN_COLORS = [
  '#111827',
  '#1D4ED8',
  '#DC2626',
  '#059669',
  '#D97706',
  '#7C3AED',
] as const;

export const HIGHLIGHTER_COLORS = [
  '#FDE047',
  '#86EFAC',
  '#93C5FD',
  '#FDA4AF',
  '#D8B4FE',
] as const;

export const PEN_WIDTHS = [2, 4, 7, 12] as const;
export const HIGHLIGHTER_WIDTHS = [16, 24, 34] as const;
export const FONT_SIZES = [14, 18, 24, 32, 44] as const;

/** Reine Textinhalte einer Seite – Grundlage für die KI-Korrektur. */
export function extractPlainText(content: NotebookPageContent): string {
  return content.elements
    .filter((element): element is TextElement => element.type === 'TEXT')
    .map((element) => element.text.trim())
    .filter(Boolean)
    .join('\n\n');
}
