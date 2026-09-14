import React from 'react';
import Svg, { Defs, LinearGradient, Path, Rect, Stop, Circle, G } from 'react-native-svg';
import type { WorkbookBook } from '@lingua/shared';
import { bookColors } from '../../theme';

/**
 * Die Buchrücken des Regals.
 *
 * Gezeichnet, nicht bebildert: dasselbe Mittel wie bei den Bibliothekscovern
 * (siehe `library/LibraryCovers`), hier aber als Buchdeckel im Hochformat –
 * farbiger Einband, ein heller Titelstreifen und ein kleines Motiv, das das
 * Buch unterscheidbar macht, ohne etwas zu illustrieren, was es nicht gibt.
 *
 * Die drei Kursbücher tragen dasselbe Motiv in wachsender Verdichtung: ein
 * Strich, zwei Striche, drei Striche – wie die Bänder einer Reihe. Das
 * Grammatikbuch fällt bewusst heraus: ein Paragrafenraster statt der Bänder,
 * weil es quer zur Reihe steht.
 */
export function BookCover({ book }: { book: WorkbookBook }) {
  const { accent } = bookColors[book];

  return (
    <Svg width="100%" height="100%" viewBox="0 0 120 160" preserveAspectRatio="xMidYMid slice">
      <Defs>
        <LinearGradient id={`cloth-${book}`} x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0" stopColor={accent} stopOpacity={1} />
          <Stop offset="1" stopColor="#000000" stopOpacity={0.28} />
        </LinearGradient>
      </Defs>

      {/* Einband. */}
      <Rect x={0} y={0} width={120} height={160} fill={`url(#cloth-${book})`} />

      {/* Bundsteg: der dunklere Streifen am Rücken, plus die Fadenheftung. */}
      <Rect x={0} y={0} width={13} height={160} fill="#000000" opacity={0.22} />
      {[26, 52, 78, 104, 130].map((y) => (
        <Rect key={y} x={4} y={y} width={5} height={10} rx={2} fill="#FFFFFF" opacity={0.28} />
      ))}

      {/* Titelschild: heller Rahmen, wie ein aufgeklebtes Etikett. */}
      <Rect
        x={26}
        y={24}
        width={80}
        height={54}
        rx={2}
        fill="#FFFFFF"
        opacity={0.9}
        stroke="#FFFFFF"
        strokeWidth={1}
      />
      <Rect x={33} y={36} width={52} height={3} rx={1.5} fill={accent} opacity={0.85} />
      <Rect x={33} y={46} width={38} height={2.5} rx={1.25} fill={accent} opacity={0.4} />
      <Rect x={33} y={55} width={44} height={2.5} rx={1.25} fill={accent} opacity={0.4} />
      <Rect x={33} y={64} width={30} height={2.5} rx={1.25} fill={accent} opacity={0.4} />

      <Emblem book={book} />
    </Svg>
  );
}

/** Das Motiv unter dem Titelschild – die Stufe der Reihe oder das Raster. */
function Emblem({ book }: { book: WorkbookBook }) {
  if (book === 'GRAMMAR') {
    // Ein Raster aus vier Feldern: die Tabelle, in der Grammatik steht.
    return (
      <G opacity={0.82}>
        <Rect x={40} y={100} width={40} height={34} rx={2} fill="none" stroke="#FFFFFF" strokeWidth={2} />
        <Path d="M40 117 h40 M60 100 v34" stroke="#FFFFFF" strokeWidth={2} />
        <Circle cx={50} cy={108.5} r={2.6} fill="#FFFFFF" />
        <Circle cx={70} cy={125.5} r={2.6} fill="#FFFFFF" />
      </G>
    );
  }

  const bars = book === 'BEGINNER' ? 1 : book === 'INTERMEDIATE' ? 2 : 3;
  return (
    <G opacity={0.85}>
      {Array.from({ length: bars }, (_, i) => (
        <Rect
          key={i}
          x={40}
          y={134 - i * 13}
          width={40}
          height={7}
          rx={3.5}
          fill="#FFFFFF"
          opacity={1 - i * 0.18}
        />
      ))}
    </G>
  );
}
