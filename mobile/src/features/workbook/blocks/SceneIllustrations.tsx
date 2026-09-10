import React from 'react';
import Svg, { Circle, Defs, LinearGradient, Path, Polygon, Rect, Stop } from 'react-native-svg';
import { book } from '../../../theme';

/**
 * Szenenbilder für das Lehrwerk.
 *
 * Es gibt keine echten Fotos – Bildbeschaffung/-lizenzierung ist eine
 * redaktionelle, keine technische Aufgabe. Statt eines Platzhalter-Symbols
 * bekommt jede Einheit ein eigenes, zum Thema passendes Bild, gezeichnet mit
 * react-native-svg – dieselbe Technik wie bei den Bibliotheks- und
 * Start-Illustrationen. `SceneImage` (in `ContentBlocks.tsx`) wählt anhand
 * eines Schlüssels in `ImageBlock.url` (`illustration:<key>`) die passende
 * Szene aus; ein echtes Foto würde `imageUrl` später einfach ersetzen, ohne
 * dass sich am Aufruf im Lehrplan etwas ändern müsste.
 */
type SceneComponent = () => React.JSX.Element;

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice">
      {children}
    </Svg>
  );
}

/** Zwei Figuren, die sich morgens im Büro begrüßen. */
function GreetingOfficeScene() {
  return (
    <Frame>
      <Defs>
        <LinearGradient id="greetBg" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#F6EDEE" />
          <Stop offset="1" stopColor="#EAD9DB" />
        </LinearGradient>
      </Defs>
      <Rect x={0} y={0} width={320} height={200} fill="url(#greetBg)" />

      {/* Boden und Türrahmen im Hintergrund. */}
      <Rect x={0} y={168} width={320} height={32} fill="#DDCBCB" />
      <Rect x={230} y={30} width={70} height={140} fill="#F1E4E1" stroke={book.rule} strokeWidth={2} />
      <Rect x={250} y={70} width={30} height={60} rx={2} fill="#E3D0CC" />

      {/* Figur links – hebt zur Begrüßung die Hand. */}
      <Circle cx={95} cy={92} r={16} fill="#3A2E2B" />
      <Path d="M79 108 q16 -10 32 0 l0 60 l-32 0 Z" fill={book.kursbuch} />
      <Path d="M111 118 q22 -6 26 -30" stroke="#3A2E2B" strokeWidth={7} strokeLinecap="round" fill="none" />

      {/* Figur rechts – winkt zurück. */}
      <Circle cx={200} cy={96} r={16} fill="#5B4636" />
      <Path d="M184 112 q16 -9 32 0 l0 56 l-32 0 Z" fill="#33363B" />
      <Path d="M172 100 q-10 -20 4 -30" stroke="#5B4636" strokeWidth={7} strokeLinecap="round" fill="none" />

      {/* Sprechblase mit Begrüßung. */}
      <Path
        d="M118 40 h70 a8 8 0 0 1 8 8 v18 a8 8 0 0 1 -8 8 h-40 l-12 12 v-12 h-18 a8 8 0 0 1 -8 -8 v-18 a8 8 0 0 1 8 -8 Z"
        fill="#FFFFFF"
        stroke={book.kursbuch}
        strokeWidth={1.5}
      />
      <Circle cx={136} cy={58} r={3} fill={book.kursbuch} />
      <Circle cx={150} cy={58} r={3} fill={book.kursbuch} />
      <Circle cx={164} cy={58} r={3} fill={book.kursbuch} />
    </Frame>
  );
}

/** Zwei Namensschilder auf einem Tisch, dazwischen eine Sprechblase. */
function IntroductionScene() {
  return (
    <Frame>
      <Defs>
        <LinearGradient id="introBg" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#EDF1F7" />
          <Stop offset="1" stopColor="#DCE3EE" />
        </LinearGradient>
      </Defs>
      <Rect x={0} y={0} width={320} height={200} fill="url(#introBg)" />

      {/* Tischplatte. */}
      <Rect x={0} y={148} width={320} height={52} fill="#C9B896" />
      <Rect x={0} y={148} width={320} height={6} fill="#B7A582" />

      {/* Namensschild links. */}
      <Rect x={54} y={96} width={92} height={44} rx={4} fill="#FFFFFF" stroke={book.rule} strokeWidth={1.5} transform="rotate(-4 100 118)" />
      <Path d="M70 112 h30" stroke={book.kursbuch} strokeWidth={3} strokeLinecap="round" transform="rotate(-4 100 118)" />
      <Path d="M70 122 h50" stroke={book.rule} strokeWidth={2} strokeLinecap="round" transform="rotate(-4 100 118)" />

      {/* Namensschild rechts. */}
      <Rect x={172} y={92} width={92} height={44} rx={4} fill="#FFFFFF" stroke={book.rule} strokeWidth={1.5} transform="rotate(4 218 114)" />
      <Path d="M188 108 h30" stroke={book.arbeitsbuch} strokeWidth={3} strokeLinecap="round" transform="rotate(4 218 114)" />
      <Path d="M188 118 h50" stroke={book.rule} strokeWidth={2} strokeLinecap="round" transform="rotate(4 218 114)" />

      {/* Sprechblase „?" mittig darüber. */}
      <Path
        d="M136 30 h48 a8 8 0 0 1 8 8 v20 a8 8 0 0 1 -8 8 h-16 l-8 10 v-10 h-24 a8 8 0 0 1 -8 -8 v-20 a8 8 0 0 1 8 -8 Z"
        fill="#FFFFFF"
        stroke={book.kursbuch}
        strokeWidth={1.5}
      />
      <Path
        d="M155 45 q0 -6 6 -6 q6 0 6 5 q0 4 -4 5.5 t-2 5.5"
        stroke={book.kursbuch}
        strokeWidth={2.4}
        fill="none"
        strokeLinecap="round"
      />
      <Circle cx={161} cy={62} r={1.6} fill={book.kursbuch} />
    </Frame>
  );
}

/** Stilisierte Europakarte mit Orten aus den Dialogen und einer Reiselinie. */
function WorldMapScene() {
  const pins: Array<{ x: number; y: number; color: string }> = [
    { x: 150, y: 78, color: book.kursbuch }, // Leipzig
    { x: 108, y: 108, color: book.arbeitsbuch }, // Schweiz
    { x: 232, y: 140, color: '#8A5A1E' }, // Türkei
    { x: 210, y: 168, color: '#3F5163' }, // Libanon
  ];

  return (
    <Frame>
      <Defs>
        <LinearGradient id="mapBg" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#EAF0EC" />
          <Stop offset="1" stopColor="#D7E3DB" />
        </LinearGradient>
      </Defs>
      <Rect x={0} y={0} width={320} height={200} fill="url(#mapBg)" />

      {/* Angedeutete Landmassen als weiche Flächen, kein echter Kartenumriss. */}
      <Path d="M40 60 q40 -30 90 -10 t120 10 q30 20 10 55 t-70 40 q-60 20 -110 -10 t-40 -85 Z" fill="#C7D6CC" opacity={0.9} />
      <Path d="M60 40 q30 -18 60 -6" stroke="#B3C4B8" strokeWidth={2} fill="none" opacity={0.6} />

      {/* Reiselinie von Leipzig zu den drei Herkunftsorten. */}
      {pins.slice(1).map((pin, index) => (
        <Path
          key={index}
          d={`M150 78 Q${(150 + pin.x) / 2} ${(78 + pin.y) / 2 - 20} ${pin.x} ${pin.y}`}
          stroke={pin.color}
          strokeWidth={1.6}
          strokeDasharray="5 5"
          fill="none"
          opacity={0.7}
        />
      ))}

      {pins.map((pin, index) => (
        <React.Fragment key={index}>
          <Circle cx={pin.x} cy={pin.y} r={7} fill={pin.color} />
          <Circle cx={pin.x} cy={pin.y} r={11} stroke={pin.color} strokeWidth={1.5} fill="none" opacity={0.5} />
        </React.Fragment>
      ))}

      {/* Kompassrose als dekoratives Detail. */}
      <Circle cx={280} cy={40} r={18} fill="#FFFFFF" stroke={book.rule} strokeWidth={1.5} />
      <Path d="M280 26 L285 40 L280 54 L275 40 Z" fill={book.inkSoft} />
    </Frame>
  );
}

/** Tafel mit Buchstaben und Zahlen, dazu ein Telefonhörer für den Dialog. */
function AlphabetNumbersScene() {
  return (
    <Frame>
      <Defs>
        <LinearGradient id="boardBg" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#EDEAE3" />
          <Stop offset="1" stopColor="#DFDACD" />
        </LinearGradient>
      </Defs>
      <Rect x={0} y={0} width={320} height={200} fill="url(#boardBg)" />

      {/* Tafel. */}
      <Rect x={40} y={30} width={200} height={120} rx={4} fill="#33363B" />
      <Rect x={40} y={30} width={200} height={120} rx={4} stroke="#C9B896" strokeWidth={6} fill="none" />

      {/* Kreidezeilen: Buchstaben und Zahlen. */}
      <Path d="M58 62 h164" stroke="#EDEAE3" strokeWidth={2} opacity={0.85} />
      {['A', 'B', 'C', 'Ä', 'Ö', 'Ü', 'ß'].map((_, i) => (
        <Rect key={i} x={58 + i * 22} y={48} width={14} height={16} rx={2} fill="#EDEAE3" opacity={0.9} />
      ))}
      <Path d="M58 118 h164" stroke="#EDEAE3" strokeWidth={2} opacity={0.6} />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <Circle key={i} cx={66 + i * 20} cy={96} r={7} fill="#EDEAE3" opacity={0.85} />
      ))}

      {/* Telefonhörer unten rechts – der Dialog „Am Telefon". */}
      <Circle cx={262} cy={160} r={26} fill="#FFFFFF" stroke={book.rule} strokeWidth={1.5} />
      <Path
        d="M251 150 q4 -6 9 -2 l3 3 q-2 4 1 7 l6 6 q3 3 7 1 l3 3 q4 5 -2 9 q-10 6 -18 -2 t-11 -19 Z"
        fill={book.kursbuch}
      />
    </Frame>
  );
}

/** Neutrales Buch-Motiv für Einheiten ohne eigenes Bildthema. */
function GenericBookScene() {
  return (
    <Frame>
      <Defs>
        <LinearGradient id="genericBg" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#F2F2F2" />
          <Stop offset="1" stopColor="#E4E4E4" />
        </LinearGradient>
      </Defs>
      <Rect x={0} y={0} width={320} height={200} fill="url(#genericBg)" />
      <Path
        d="M160 66 C 130 50, 90 58, 76 72 L76 150 C 90 136, 130 128, 160 144 Z"
        fill="#FFFFFF"
        stroke={book.rule}
        strokeWidth={1.5}
      />
      <Path
        d="M160 66 C 190 50, 230 58, 244 72 L244 150 C 230 136, 190 128, 160 144 Z"
        fill="#FFFFFF"
        stroke={book.rule}
        strokeWidth={1.5}
      />
      <Polygon points="196,40 212,40 212,74 204,66 196,74" fill={book.kursbuch} />
    </Frame>
  );
}

const SCENES: Record<string, SceneComponent> = {
  'greeting-office': GreetingOfficeScene,
  introduction: IntroductionScene,
  'world-map': WorldMapScene,
  'alphabet-numbers': AlphabetNumbersScene,
};

/** Löst den `illustration:<key>`-Schlüssel aus `ImageBlock.url` auf. */
export function getSceneComponent(url: string): SceneComponent {
  const key = url.startsWith('illustration:') ? url.slice('illustration:'.length) : url;
  return SCENES[key] ?? GenericBookScene;
}
