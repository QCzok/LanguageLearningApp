import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

/**
 * Die Symbole des Lesers – Strichzeichnungen in einer Stärke, Farbe vom
 * Aufrufer.
 *
 * Eigene Datei und nicht die des Lehrwerks (`workbook/BookIcons`): Der Leser
 * braucht drei Zeichen, die es dort nicht gibt, und zwei davon sind keine
 * festen Symbole, sondern zeigen eine Stufe – der Durchschuss und der Rand
 * werden am Symbol selbst sichtbar, so wie es ein E-Book-Leser vormacht.
 */
interface IconProps {
  color: string;
  size?: number;
}

const STROKE = {
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

function Frame({ size = 22, children }: { size?: number; children: React.ReactNode }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {children}
    </Svg>
  );
}

/** Zurück aus dem Text – ein Pfeil, kein Chevron: er führt aus dem Buch heraus. */
export function ArrowLeftIcon({ color, size }: IconProps) {
  return (
    <Frame size={size}>
      <Path d="M19 12 H6" stroke={color} {...STROKE} />
      <Path d="M11.5 6.5 L6 12 L11.5 17.5" stroke={color} {...STROKE} />
    </Frame>
  );
}

/** Ein Häkchen – markiert die gewählte Stufe oder Farbe. */
export function CheckIcon({ color, size = 14 }: IconProps) {
  return (
    <Frame size={size}>
      <Path d="M5 12.5 L9.5 17 L19 7" stroke={color} strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" />
    </Frame>
  );
}

/**
 * Der Durchschuss als Bild: drei Zeilen, deren Abstand die Stufe zeigt. Ein
 * Symbol, das seine eigene Einstellung vorführt, braucht keine Beschriftung.
 */
export function LineSpacingGlyph({ level, color, size = 22 }: IconProps & { level: number }) {
  const gap = [3.6, 5.2, 6.8][Math.max(0, Math.min(2, level))];
  const middle = 12;
  return (
    <Frame size={size}>
      {[middle - gap, middle, middle + gap].map((y) => (
        <Path key={y} d={`M5 ${y} H19`} stroke={color} strokeWidth={1.6} strokeLinecap="round" />
      ))}
    </Frame>
  );
}

/**
 * Der Seitenrand als Bild: das Blatt außen, der Satzspiegel innen. Je breiter
 * der Rand, desto schmaler die Zeilen darin.
 */
export function MarginGlyph({ level, color, size = 22 }: IconProps & { level: number }) {
  const inset = [3.5, 5.5, 7.5][Math.max(0, Math.min(2, level))];
  return (
    <Frame size={size}>
      <Rect x={3} y={3.5} width={18} height={17} rx={1.6} stroke={color} strokeWidth={1.3} opacity={0.5} />
      {[8, 12, 16].map((y) => (
        <Path
          key={y}
          d={`M${inset} ${y} H${24 - inset}`}
          stroke={color}
          strokeWidth={1.6}
          strokeLinecap="round"
        />
      ))}
    </Frame>
  );
}
