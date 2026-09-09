import React from 'react';
import Svg, { Circle, Defs, LinearGradient, Path, Polygon, Rect, Stop } from 'react-native-svg';

/**
 * Kachel-Bilder der Startseite.
 *
 * Dieselbe Idee wie die Buchcover der Bibliothek (siehe
 * `library/LibraryCovers`): statt eines Icons in einem eingefärbten Kreis
 * bekommt jede Kachel ein kleines, selbst gezeichnetes Bild, das zu ihrem
 * Bereich passt – Karteikarten fürs Vokabellernen, ein Heft mit Stift fürs
 * Lehrwerk, ein Bücherregal für die Bibliothek, Kopfhörer für die Mediathek,
 * eine Sprechblase mit Funken für die KI. Banner-Format (etwa 16:9) statt
 * Hochformat, weil die Kachel hier ein Navigationsziel ist, kein Buchcover.
 */
function Frame({ children }: { children: React.ReactNode }) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 160 90" preserveAspectRatio="xMidYMid slice">
      {children}
    </Svg>
  );
}

/** Vokabeltrainer: ein kleiner Stapel Karteikarten, oben „Aa“ als Textzeile. */
export function VocabCover() {
  return (
    <Frame>
      <Defs>
        <LinearGradient id="vocabBg" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#DCE8FC" />
          <Stop offset="1" stopColor="#C3D8F7" />
        </LinearGradient>
      </Defs>
      <Rect x={0} y={0} width={160} height={90} fill="url(#vocabBg)" />

      <Rect x={58} y={40} width={64} height={40} rx={6} fill="#FFFFFF" opacity={0.6} transform="rotate(-8 90 60)" />
      <Rect x={54} y={34} width={64} height={40} rx={6} fill="#FFFFFF" opacity={0.85} transform="rotate(-2 86 54)" />
      <Rect x={50} y={28} width={64} height={40} rx={6} fill="#FFFFFF" stroke="#8FAEE0" strokeWidth={1.5} />

      {/* Schreibzeilen auf der obersten Karte. */}
      <Path d="M62 42 h30" stroke="#2563EB" strokeWidth={3} strokeLinecap="round" />
      <Path d="M62 52 h40" stroke="#B7C9EA" strokeWidth={2} strokeLinecap="round" />
      <Path d="M62 60 h24" stroke="#B7C9EA" strokeWidth={2} strokeLinecap="round" />
    </Frame>
  );
}

/** Lernheft: aufgeschlagenes Heft mit Stift. */
export function NotebookCover() {
  return (
    <Frame>
      <Defs>
        <LinearGradient id="notebookBg" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#FBEACB" />
          <Stop offset="1" stopColor="#F5D89B" />
        </LinearGradient>
      </Defs>
      <Rect x={0} y={0} width={160} height={90} fill="url(#notebookBg)" />

      <Path d="M80 30 C 64 22, 40 26, 34 34 L 34 68 C 40 60, 64 56, 80 64 Z" fill="#FFFFFF" stroke="#D9A94A" strokeWidth={1.5} />
      <Path d="M80 30 C 96 22, 120 26, 126 34 L 126 68 C 120 60, 96 56, 80 64 Z" fill="#FFFFFF" stroke="#D9A94A" strokeWidth={1.5} />

      {[42, 50, 58].map((y) => (
        <React.Fragment key={y}>
          <Path d={`M44 ${y} h26`} stroke="#EBD3A0" strokeWidth={2} strokeLinecap="round" />
          <Path d={`M90 ${y} h26`} stroke="#EBD3A0" strokeWidth={2} strokeLinecap="round" />
        </React.Fragment>
      ))}

      {/* Stift schräg über dem Heft. */}
      <Rect x={96} y={12} width={7} height={44} rx={2} fill="#C2564B" transform="rotate(35 99 34)" />
      <Polygon points="119,58 128,62 122,68" fill="#5C4326" transform="rotate(35 99 34)" />
    </Frame>
  );
}

/** Bibliothek: ein kleines Bücherregal. */
export function LibraryShelfCover() {
  return (
    <Frame>
      <Defs>
        <LinearGradient id="shelfBg" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#DDEFE2" />
          <Stop offset="1" stopColor="#BFE0C9" />
        </LinearGradient>
      </Defs>
      <Rect x={0} y={0} width={160} height={90} fill="url(#shelfBg)" />

      {/* Buchrücken unterschiedlicher Höhe, wie im Regal. */}
      {[
        { x: 42, w: 10, h: 42, color: '#2F7A56' },
        { x: 52, w: 8, h: 50, color: '#3E8F63' },
        { x: 60, w: 11, h: 36, color: '#C2564B' },
        { x: 71, w: 9, h: 46, color: '#2F7A56' },
        { x: 80, w: 10, h: 40, color: '#E4A94A' },
        { x: 90, w: 8, h: 52, color: '#3E8F63' },
        { x: 98, w: 11, h: 34, color: '#2F7A56' },
        { x: 109, w: 9, h: 44, color: '#C2564B' },
      ].map((book) => (
        <Rect key={book.x} x={book.x} y={62 - book.h} width={book.w} height={book.h} fill={book.color} />
      ))}

      {/* Regalbrett. */}
      <Rect x={30} y={62} width={100} height={6} fill="#5C4326" />
    </Frame>
  );
}

/** Mediathek: Kopfhörer mit Klangwellen. */
export function MediaCover() {
  return (
    <Frame>
      <Defs>
        <LinearGradient id="mediaBg" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#D6F1F4" />
          <Stop offset="1" stopColor="#B7E5EA" />
        </LinearGradient>
      </Defs>
      <Rect x={0} y={0} width={160} height={90} fill="url(#mediaBg)" />

      <Path d="M56 52 a24 24 0 0 1 48 0" stroke="#0891B2" strokeWidth={6} fill="none" strokeLinecap="round" />
      <Rect x={50} y={48} width={12} height={20} rx={6} fill="#0891B2" />
      <Rect x={98} y={48} width={12} height={20} rx={6} fill="#0891B2" />

      {/* Klangwellen. */}
      <Path d="M118 40 q10 12 0 24" stroke="#0891B2" strokeWidth={2.5} fill="none" strokeLinecap="round" opacity={0.7} />
      <Path d="M126 34 q18 18 0 36" stroke="#0891B2" strokeWidth={2.5} fill="none" strokeLinecap="round" opacity={0.4} />
    </Frame>
  );
}

/** KI-Tutor: Sprechblase mit Funken. */
export function AiCover() {
  return (
    <Frame>
      <Defs>
        <LinearGradient id="aiBg" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0" stopColor="#EDE4FB" />
          <Stop offset="1" stopColor="#DCC9F5" />
        </LinearGradient>
      </Defs>
      <Rect x={0} y={0} width={160} height={90} fill="url(#aiBg)" />

      <Path
        d="M40 26 h64 a10 10 0 0 1 10 10 v18 a10 10 0 0 1 -10 10 h-40 l-14 12 v-12 h-10 a10 10 0 0 1 -10 -10 v-18 a10 10 0 0 1 10 -10 Z"
        fill="#FFFFFF"
        stroke="#7C3AED"
        strokeWidth={1.5}
      />
      <Circle cx={62} cy={45} r={3.5} fill="#7C3AED" />
      <Circle cx={76} cy={45} r={3.5} fill="#7C3AED" />
      <Circle cx={90} cy={45} r={3.5} fill="#7C3AED" />

      {/* Funken. */}
      <Path d="M122 22 l2.4 6 6 2.4 -6 2.4 -2.4 6 -2.4 -6 -6 -2.4 6 -2.4 Z" fill="#7C3AED" opacity={0.85} />
      <Path d="M136 46 l1.6 4 4 1.6 -4 1.6 -1.6 4 -1.6 -4 -4 -1.6 4 -1.6 Z" fill="#7C3AED" opacity={0.6} />
    </Frame>
  );
}
