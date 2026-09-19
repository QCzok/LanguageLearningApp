import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

/**
 * Die Symbole der Bibliotheksübersicht – Strichzeichnungen in einer Stärke,
 * Farbe und Größe vom Aufrufer.
 *
 * Gezeichnet statt als Emoji gesetzt, aus demselben Grund wie im Leser (siehe
 * `ReaderIcons`): Ein 🔍 sieht auf jedem System anders aus, bringt seine
 * eigene Farbe mit und sitzt nie ganz auf der Grundlinie. Vier Zeichen
 * genügen der Übersicht – suchen, filtern, Dauer, weiter.
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

function Frame({ size = 20, children }: { size?: number; children: React.ReactNode }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {children}
    </Svg>
  );
}

export function SearchIcon({ color, size }: IconProps) {
  return (
    <Frame size={size}>
      <Circle cx="11" cy="11" r="6.25" stroke={color} {...STROKE} />
      <Path d="M15.6 15.6 L20 20" stroke={color} {...STROKE} />
    </Frame>
  );
}

/** Schieberegler – das Zeichen für „einstellen“, nicht für „mehr davon“. */
export function SlidersIcon({ color, size }: IconProps) {
  return (
    <Frame size={size}>
      <Path d="M4 8 H20 M4 16 H20" stroke={color} {...STROKE} />
      <Circle cx="10" cy="8" r="2.4" stroke={color} fill="none" {...STROKE} />
      <Circle cx="15" cy="16" r="2.4" stroke={color} fill="none" {...STROKE} />
    </Frame>
  );
}

export function CloseIcon({ color, size }: IconProps) {
  return (
    <Frame size={size}>
      <Path d="M6.5 6.5 L17.5 17.5 M17.5 6.5 L6.5 17.5" stroke={color} {...STROKE} />
    </Frame>
  );
}

/** Die Lesedauer – eine Uhr, weil es um Minuten geht und nicht um Seiten. */
export function ClockIcon({ color, size = 13 }: IconProps) {
  return (
    <Frame size={size}>
      <Circle cx="12" cy="12" r="8.25" stroke={color} {...STROKE} />
      <Path d="M12 7.5 V12 L15 14" stroke={color} {...STROKE} />
    </Frame>
  );
}

export function ChevronRightIcon({ color, size = 18 }: IconProps) {
  return (
    <Frame size={size}>
      <Path d="M9.5 5.5 L16 12 L9.5 18.5" stroke={color} {...STROKE} />
    </Frame>
  );
}
