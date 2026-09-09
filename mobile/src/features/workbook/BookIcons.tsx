import React from 'react';
import Svg, { Circle, Path, Polygon, Rect } from 'react-native-svg';

/**
 * Werkzeugsymbole als Strichzeichnung.
 *
 * Emojis sind hier bewusst ersetzt: Sie bringen eine fremde Bildsprache mit
 * (bunt, plastisch, je nach Betriebssystem anders gezeichnet) und lassen eine
 * Buchseite sofort nach Benutzeroberfläche aussehen. Ein Lehrwerk arbeitet mit
 * einfarbigen, gleich starken Strichzeichnungen – genau das sind diese Icons:
 * eine Linienstärke, eine Farbe, die vom aufrufenden Element geerbt wird.
 */
interface IconProps {
  /** Farbe der Linien – immer explizit gesetzt, damit Aktivzustände wirken. */
  color: string;
  size?: number;
}

function Frame({
  size = 22,
  children,
}: {
  size?: number;
  children: React.ReactNode;
}) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {children}
    </Svg>
  );
}

const STROKE = {
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

/** Zeigefinger-Ersatz: der Auswahlpfeil für den Bearbeiten-Modus. */
export function CursorIcon({ color, size }: IconProps) {
  return (
    <Frame size={size}>
      <Path d="M5.5 3.5 L5.5 17 L9 13.8 L11.4 19.4 L13.8 18.3 L11.5 12.9 L16.2 12.6 Z" stroke={color} {...STROKE} />
    </Frame>
  );
}

export function PencilIcon({ color, size }: IconProps) {
  return (
    <Frame size={size}>
      <Path d="M4 20 L4.9 16.2 L15.6 5.5 L18.5 8.4 L7.8 19.1 Z" stroke={color} {...STROKE} />
      <Path d="M14 7.1 L16.9 10" stroke={color} {...STROKE} />
      <Path d="M4.9 16.2 L7.8 19.1" stroke={color} {...STROKE} />
    </Frame>
  );
}

/** Marker: breite Spitze, deshalb der keilförmige Kopf. */
export function HighlighterIcon({ color, size }: IconProps) {
  return (
    <Frame size={size}>
      <Path d="M9 14.5 L14.8 4.8 L19 7.3 L13.2 17 L9.6 17 Z" stroke={color} {...STROKE} />
      <Path d="M4.5 20.2 L9.6 20.2" stroke={color} strokeWidth={2.6} strokeLinecap="round" />
      <Path d="M11.9 6.6 L16.1 9.1" stroke={color} {...STROKE} />
    </Frame>
  );
}

/** Textfeld: das „A“ mit Einfügemarke – ohne Emoji sofort lesbar. */
export function TextIcon({ color, size }: IconProps) {
  return (
    <Frame size={size}>
      <Path d="M4.6 17.5 L9.4 5.6 L14.2 17.5" stroke={color} {...STROKE} />
      <Path d="M6.4 13.4 L12.4 13.4" stroke={color} {...STROKE} />
      <Path d="M17.6 6.2 L17.6 18.4" stroke={color} {...STROKE} />
      <Path d="M15.8 6.2 L19.4 6.2 M15.8 18.4 L19.4 18.4" stroke={color} {...STROKE} />
    </Frame>
  );
}

export function EraserIcon({ color, size }: IconProps) {
  return (
    <Frame size={size}>
      <Path d="M8.6 18.5 L4.2 14.1 L13 5.3 L17.4 9.7 Z" stroke={color} {...STROKE} />
      <Path d="M8.6 18.5 L19 18.5" stroke={color} {...STROKE} />
      <Path d="M8.8 9.5 L13.2 13.9" stroke={color} {...STROKE} />
    </Frame>
  );
}

export function UndoIcon({ color, size }: IconProps) {
  return (
    <Frame size={size}>
      <Path d="M5 9.6 L10 9.6 M5 9.6 L5 4.8" stroke={color} {...STROKE} />
      <Path d="M5.4 9.9 A 7 7 0 1 1 6.4 15.6" stroke={color} {...STROKE} />
    </Frame>
  );
}

export function TrashIcon({ color, size }: IconProps) {
  return (
    <Frame size={size}>
      <Path d="M4.8 6.6 L19.2 6.6" stroke={color} {...STROKE} />
      <Path d="M9.4 6.6 L9.4 4.6 L14.6 4.6 L14.6 6.6" stroke={color} {...STROKE} />
      <Path d="M6.6 6.6 L7.5 19.4 L16.5 19.4 L17.4 6.6" stroke={color} {...STROKE} />
      <Path d="M10.4 10 L10.4 16 M13.6 10 L13.6 16" stroke={color} {...STROKE} />
    </Frame>
  );
}

export function MinusIcon({ color, size }: IconProps) {
  return (
    <Frame size={size}>
      <Path d="M5.5 12 L18.5 12" stroke={color} strokeWidth={1.9} strokeLinecap="round" />
    </Frame>
  );
}

export function PlusIcon({ color, size }: IconProps) {
  return (
    <Frame size={size}>
      <Path d="M5.5 12 L18.5 12 M12 5.5 L12 18.5" stroke={color} strokeWidth={1.9} strokeLinecap="round" />
    </Frame>
  );
}

/** Blätterpfeile fürs Umschlagen der Seite – schlicht wie ein Buchecken-Knick. */
export function ChevronLeftIcon({ color, size }: IconProps) {
  return (
    <Frame size={size}>
      <Path d="M14.5 5.5 L8 12 L14.5 18.5" stroke={color} strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" />
    </Frame>
  );
}

export function ChevronRightIcon({ color, size }: IconProps) {
  return (
    <Frame size={size}>
      <Path d="M9.5 5.5 L16 12 L9.5 18.5" stroke={color} strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" />
    </Frame>
  );
}

/**
 * Hörtext-Marke: das gedruckte Tonzeichen eines Lehrwerks – ein Quadrat mit
 * Abspieldreieck, wie es neben Hörübungen im Buch steht.
 */
export function AudioMark({ color, size = 30 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 30 30" fill="none">
      <Rect x={1} y={1} width={28} height={28} rx={2} stroke={color} strokeWidth={1.6} />
      <Polygon points="11.5,9 22,15 11.5,21" fill={color} />
    </Svg>
  );
}

/**
 * Korrekturhaken. Als Zeichnung statt als Schriftzeichen, damit er auf jedem
 * System gleich aussieht und zur Strichstärke der übrigen Symbole passt.
 */
export function CheckMark({ color, size = 16 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M4.5 12.8 L9.5 17.8 L19.5 6.5" stroke={color} strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

/** Kreuz für eine falsch angekreuzte Antwort – der Rotstift des Lehrers. */
export function CrossMark({ color, size = 16 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M6 6 L18 18 M18 6 L6 18" stroke={color} strokeWidth={2.6} strokeLinecap="round" />
    </Svg>
  );
}

/** Aufgeschlagenes Buch – für den Einstieg in die eigenen Notizhefte. */
export function BookMark({ color, size = 26 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M12 6.6 C10 5 6.8 4.6 4 5.2 L4 18.4 C6.8 17.8 10 18.2 12 19.8 C14 18.2 17.2 17.8 20 18.4 L20 5.2 C17.2 4.6 14 5 12 6.6 Z" stroke={color} {...STROKE} />
      <Path d="M12 6.6 L12 19.8" stroke={color} {...STROKE} />
    </Svg>
  );
}

/** Schloss für ein noch nicht veröffentlichtes Kapitel. */
export function LockMark({ color, size = 20 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Rect x={5.2} y={10.4} width={13.6} height={9.4} rx={1.6} stroke={color} {...STROKE} />
      <Path d="M8.4 10.4 L8.4 7.8 A 3.6 3.6 0 0 1 15.6 7.8 L15.6 10.4" stroke={color} {...STROKE} />
      <Circle cx={12} cy={15} r={1.4} fill={color} />
    </Svg>
  );
}
