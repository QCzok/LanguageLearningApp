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
      <Path d="M79 108 q16 -10 32 0 l0 60 l-32 0 Z" fill={book.printRed} />
      <Path d="M111 118 q22 -6 26 -30" stroke="#3A2E2B" strokeWidth={7} strokeLinecap="round" fill="none" />

      {/* Figur rechts – winkt zurück. */}
      <Circle cx={200} cy={96} r={16} fill="#5B4636" />
      <Path d="M184 112 q16 -9 32 0 l0 56 l-32 0 Z" fill="#33363B" />
      <Path d="M172 100 q-10 -20 4 -30" stroke="#5B4636" strokeWidth={7} strokeLinecap="round" fill="none" />

      {/* Sprechblase mit Begrüßung. */}
      <Path
        d="M118 40 h70 a8 8 0 0 1 8 8 v18 a8 8 0 0 1 -8 8 h-40 l-12 12 v-12 h-18 a8 8 0 0 1 -8 -8 v-18 a8 8 0 0 1 8 -8 Z"
        fill="#FFFFFF"
        stroke={book.printRed}
        strokeWidth={1.5}
      />
      <Circle cx={136} cy={58} r={3} fill={book.printRed} />
      <Circle cx={150} cy={58} r={3} fill={book.printRed} />
      <Circle cx={164} cy={58} r={3} fill={book.printRed} />
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
      <Path d="M70 112 h30" stroke={book.printRed} strokeWidth={3} strokeLinecap="round" transform="rotate(-4 100 118)" />
      <Path d="M70 122 h50" stroke={book.rule} strokeWidth={2} strokeLinecap="round" transform="rotate(-4 100 118)" />

      {/* Namensschild rechts. */}
      <Rect x={172} y={92} width={92} height={44} rx={4} fill="#FFFFFF" stroke={book.rule} strokeWidth={1.5} transform="rotate(4 218 114)" />
      <Path d="M188 108 h30" stroke={book.printSlate} strokeWidth={3} strokeLinecap="round" transform="rotate(4 218 114)" />
      <Path d="M188 118 h50" stroke={book.rule} strokeWidth={2} strokeLinecap="round" transform="rotate(4 218 114)" />

      {/* Sprechblase „?" mittig darüber. */}
      <Path
        d="M136 30 h48 a8 8 0 0 1 8 8 v20 a8 8 0 0 1 -8 8 h-16 l-8 10 v-10 h-24 a8 8 0 0 1 -8 -8 v-20 a8 8 0 0 1 8 -8 Z"
        fill="#FFFFFF"
        stroke={book.printRed}
        strokeWidth={1.5}
      />
      <Path
        d="M155 45 q0 -6 6 -6 q6 0 6 5 q0 4 -4 5.5 t-2 5.5"
        stroke={book.printRed}
        strokeWidth={2.4}
        fill="none"
        strokeLinecap="round"
      />
      <Circle cx={161} cy={62} r={1.6} fill={book.printRed} />
    </Frame>
  );
}

/** Stilisierte Europakarte mit Orten aus den Dialogen und einer Reiselinie. */
function WorldMapScene() {
  const pins: Array<{ x: number; y: number; color: string }> = [
    { x: 150, y: 78, color: book.printRed }, // Leipzig
    { x: 108, y: 108, color: book.printSlate }, // Schweiz
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
        fill={book.printRed}
      />
    </Frame>
  );
}

/** Stammbaum aus drei Generationen gerahmter Porträts. */
function FamilyTreeScene() {
  const frame = (x: number, y: number, w: number, h: number, accent: string) => (
    <React.Fragment key={`${x}-${y}`}>
      <Rect x={x} y={y} width={w} height={h} rx={3} fill="#FFFFFF" stroke={book.rule} strokeWidth={1.5} />
      <Circle cx={x + w / 2} cy={y + h * 0.38} r={w * 0.16} fill={accent} />
      <Path
        d={`M${x + w * 0.28} ${y + h * 0.82} q${w * 0.22} -${h * 0.26} ${w * 0.44} 0 Z`}
        fill={accent}
        opacity={0.75}
      />
    </React.Fragment>
  );

  return (
    <Frame>
      <Defs>
        <LinearGradient id="famBg" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#F3EEE6" />
          <Stop offset="1" stopColor="#E5DCCE" />
        </LinearGradient>
      </Defs>
      <Rect x={0} y={0} width={320} height={200} fill="url(#famBg)" />

      {/* Verbindungslinien: Großeltern zu Eltern zu Kindern. */}
      <Path d="M160 52 v18" stroke={book.rule} strokeWidth={2} />
      <Path d="M104 96 h112" stroke={book.rule} strokeWidth={2} />
      <Path d="M104 96 v14 M216 96 v14" stroke={book.rule} strokeWidth={2} />
      <Path d="M76 150 h168" stroke={book.rule} strokeWidth={2} />
      <Path d="M76 150 v-12 M160 150 v-12 M244 150 v-12" stroke={book.rule} strokeWidth={2} />

      {/* Oberste Reihe: ein Paar Großeltern. */}
      {frame(136, 16, 48, 36, book.printSlate)}

      {/* Mittlere Reihe: die Eltern. */}
      {frame(80, 70, 48, 40, book.printRed)}
      {frame(192, 70, 48, 40, '#5B4636')}

      {/* Untere Reihe: drei Geschwister. */}
      {frame(52, 150, 48, 40, '#8A5A1E')}
      {frame(136, 150, 48, 40, book.printSlate)}
      {frame(220, 150, 48, 40, book.printRed)}
    </Frame>
  );
}

/** Drei Gegenstände mit Anhängern – wem gehört was. */
function BelongingsScene() {
  return (
    <Frame>
      <Defs>
        <LinearGradient id="belongBg" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#EEF1EC" />
          <Stop offset="1" stopColor="#DCE3D9" />
        </LinearGradient>
      </Defs>
      <Rect x={0} y={0} width={320} height={200} fill="url(#belongBg)" />
      <Rect x={0} y={158} width={320} height={42} fill="#C9B896" />
      <Rect x={0} y={158} width={320} height={5} fill="#B7A582" />

      {/* Buch links. */}
      <Rect x={36} y={104} width={64} height={54} rx={2} fill="#FFFFFF" stroke={book.rule} strokeWidth={1.5} />
      <Rect x={36} y={104} width={14} height={54} fill={book.printRed} />
      <Path d="M60 122 h30 M60 132 h24" stroke={book.rule} strokeWidth={2} strokeLinecap="round" />

      {/* Schlüsselbund Mitte. */}
      <Circle cx={160} cy={118} r={14} stroke={book.printSlate} strokeWidth={3} fill="none" />
      <Path d="M160 132 v20 M154 144 h12 M154 152 h12" stroke={book.printSlate} strokeWidth={3} strokeLinecap="round" />

      {/* Tasse rechts. */}
      <Path d="M220 112 h52 v30 q0 16 -26 16 t-26 -16 Z" fill="#FFFFFF" stroke={book.rule} strokeWidth={1.5} />
      <Path d="M272 120 q16 4 0 18" stroke={book.rule} strokeWidth={3} fill="none" strokeLinecap="round" />

      {/* Anhänger über jedem Gegenstand. */}
      {[
        { x: 42, color: book.printRed },
        { x: 132, color: book.printSlate },
        { x: 222, color: '#8A5A1E' },
      ].map((tag) => (
        <React.Fragment key={tag.x}>
          <Rect x={tag.x} y={40} width={56} height={26} rx={4} fill="#FFFFFF" stroke={tag.color} strokeWidth={1.5} />
          <Circle cx={tag.x + 10} cy={53} r={3} fill={tag.color} />
          <Path d={`M${tag.x + 20} 53 h26`} stroke={tag.color} strokeWidth={2.5} strokeLinecap="round" />
          <Path d={`M${tag.x + 28} 66 v${tag.x === 132 ? 38 : 34}`} stroke={book.rule} strokeWidth={1.5} strokeDasharray="3 3" />
        </React.Fragment>
      ))}
    </Frame>
  );
}

/** Zwei gerahmte Porträts mit je einer Schreiblinie darunter. */
function PortraitsScene() {
  return (
    <Frame>
      <Defs>
        <LinearGradient id="portraitBg" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#F4EFF1" />
          <Stop offset="1" stopColor="#E4D9DE" />
        </LinearGradient>
      </Defs>
      <Rect x={0} y={0} width={320} height={200} fill="url(#portraitBg)" />

      {[
        { x: 32, accent: book.printRed, tall: true },
        { x: 176, accent: book.printSlate, tall: false },
      ].map((p) => (
        <React.Fragment key={p.x}>
          <Rect x={p.x} y={24} width={112} height={112} rx={4} fill="#FFFFFF" stroke={book.rule} strokeWidth={2} />
          {/* Kopf und Schultern, unterschiedlich groß. */}
          <Circle cx={p.x + 56} cy={p.tall ? 62 : 70} r={p.tall ? 22 : 18} fill={p.accent} />
          <Path
            d={`M${p.x + 24} 136 q32 -${p.tall ? 44 : 36} 64 0 Z`}
            fill={p.accent}
            opacity={0.8}
          />
          {/* Schreiblinie für die Beschreibung. */}
          <Path d={`M${p.x + 8} 158 h96`} stroke={book.rule} strokeWidth={2} strokeLinecap="round" />
          <Path d={`M${p.x + 8} 172 h64`} stroke={book.rule} strokeWidth={2} strokeLinecap="round" opacity={0.6} />
        </React.Fragment>
      ))}
    </Frame>
  );
}

/** Geburtstagstorte mit Kerzen, daneben eine Zahlenreihe. */
function BirthdayScene() {
  return (
    <Frame>
      <Defs>
        <LinearGradient id="bdayBg" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#F6EFE8" />
          <Stop offset="1" stopColor="#E9DACB" />
        </LinearGradient>
      </Defs>
      <Rect x={0} y={0} width={320} height={200} fill="url(#bdayBg)" />
      <Rect x={0} y={166} width={320} height={34} fill="#C9B896" />

      {/* Torte in zwei Schichten. */}
      <Rect x={72} y={118} width={132} height={48} rx={4} fill="#FFFFFF" stroke={book.rule} strokeWidth={1.5} />
      <Rect x={88} y={92} width={100} height={30} rx={4} fill="#FFFFFF" stroke={book.rule} strokeWidth={1.5} />
      <Path d="M72 132 q16 10 33 0 t33 0 t33 0 t33 0" stroke={book.printRed} strokeWidth={3} fill="none" />

      {/* Kerzen mit Flammen. */}
      {[108, 128, 148, 168].map((x) => (
        <React.Fragment key={x}>
          <Rect x={x} y={64} width={6} height={28} rx={2} fill={book.printSlate} />
          <Path d={`M${x + 3} 56 q6 6 0 12 q-6 -6 0 -12 Z`} fill={book.printRed} />
        </React.Fragment>
      ))}

      {/* Zahlenreihe rechts – die Zehner des Kapitels. */}
      {[0, 1, 2, 3].map((i) => (
        <React.Fragment key={i}>
          <Rect x={232} y={40 + i * 32} width={56} height={24} rx={4} fill="#FFFFFF" stroke={book.rule} strokeWidth={1.5} />
          <Path d={`M244 ${52 + i * 32} h${20 + i * 6}`} stroke={book.inkSoft} strokeWidth={3} strokeLinecap="round" />
        </React.Fragment>
      ))}
    </Frame>
  );
}

/** Häuserzeile mit Ladenfronten, davor Straße und Bäume. */
function CityStreetScene() {
  const houses = [
    { x: 16, h: 96, fill: '#FFFFFF', roof: book.printRed },
    { x: 78, h: 122, fill: '#F1E4E1', roof: book.printSlate },
    { x: 140, h: 82, fill: '#FFFFFF', roof: '#8A5A1E' },
    { x: 202, h: 110, fill: '#F1E4E1', roof: book.printRed },
    { x: 264, h: 90, fill: '#FFFFFF', roof: book.printSlate },
  ];

  return (
    <Frame>
      <Defs>
        <LinearGradient id="streetBg" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#E7EDF3" />
          <Stop offset="1" stopColor="#D3DCE6" />
        </LinearGradient>
      </Defs>
      <Rect x={0} y={0} width={320} height={200} fill="url(#streetBg)" />

      {houses.map((h) => (
        <React.Fragment key={h.x}>
          <Rect x={h.x} y={156 - h.h} width={48} height={h.h} fill={h.fill} stroke={book.rule} strokeWidth={1.5} />
          <Rect x={h.x - 3} y={150 - h.h} width={54} height={8} fill={h.roof} />
          {/* Schaufenster im Erdgeschoss. */}
          <Rect x={h.x + 8} y={128} width={32} height={20} rx={2} fill="#DCE3EE" stroke={book.rule} strokeWidth={1} />
          {/* Zwei Fenster darüber. */}
          <Rect x={h.x + 8} y={166 - h.h + 14} width={14} height={16} rx={1} fill="#DCE3EE" />
          <Rect x={h.x + 26} y={166 - h.h + 14} width={14} height={16} rx={1} fill="#DCE3EE" />
        </React.Fragment>
      ))}

      {/* Gehweg und Straße. */}
      <Rect x={0} y={156} width={320} height={10} fill="#CBD3DC" />
      <Rect x={0} y={166} width={320} height={34} fill="#B9C2CC" />
      <Path d="M0 184 h40 M64 184 h40 M128 184 h40 M192 184 h40 M256 184 h40" stroke="#EDF1F7" strokeWidth={3} />

      {/* Zwei Bäume am Gehweg. */}
      {[58, 244].map((x) => (
        <React.Fragment key={x}>
          <Rect x={x} y={132} width={6} height={24} fill="#8A5A1E" />
          <Circle cx={x + 3} cy={126} r={14} fill="#9CB59B" />
        </React.Fragment>
      ))}
    </Frame>
  );
}

/** Stadtplanausschnitt mit Straßenraster und Standortkreuz. */
function CityMapScene() {
  return (
    <Frame>
      <Defs>
        <LinearGradient id="cmapBg" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#F1EFE8" />
          <Stop offset="1" stopColor="#E2DED2" />
        </LinearGradient>
      </Defs>
      <Rect x={0} y={0} width={320} height={200} fill="url(#cmapBg)" />

      {/* Häuserblöcke als helle Flächen. */}
      {[
        [24, 24],
        [124, 24],
        [224, 24],
        [24, 116],
        [124, 116],
        [224, 116],
      ].map(([x, y]) => (
        <Rect key={`${x}-${y}`} x={x} y={y} width={72} height={60} rx={3} fill="#FFFFFF" opacity={0.85} />
      ))}

      {/* Straßenraster. */}
      <Path d="M0 100 h320 M108 0 v200 M208 0 v200" stroke="#C9C2B2" strokeWidth={10} />
      <Path d="M0 100 h320 M108 0 v200 M208 0 v200" stroke="#EFECE3" strokeWidth={2} strokeDasharray="8 8" />

      {/* Ein Platz mit Grünfläche. */}
      <Circle cx={158} cy={100} r={26} fill="#C9C2B2" />
      <Circle cx={158} cy={100} r={16} fill="#9CB59B" />

      {/* Standortmarkierung mit Kreuz. */}
      <Circle cx={60} cy={146} r={14} fill={book.printRed} opacity={0.18} />
      <Path d="M50 136 l20 20 M70 136 l-20 20" stroke={book.printRed} strokeWidth={3.5} strokeLinecap="round" />

      {/* Zielnadel rechts oben. */}
      <Path d="M256 48 q10 0 10 10 q0 8 -10 20 q-10 -12 -10 -20 q0 -10 10 -10 Z" fill={book.printSlate} />
      <Circle cx={256} cy={58} r={3.5} fill="#FFFFFF" />
    </Frame>
  );
}

/** Wegweiser mit drei Schildern in verschiedene Richtungen. */
function SignpostScene() {
  return (
    <Frame>
      <Defs>
        <LinearGradient id="signBg" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#EAF0EC" />
          <Stop offset="1" stopColor="#D6E1D9" />
        </LinearGradient>
      </Defs>
      <Rect x={0} y={0} width={320} height={200} fill="url(#signBg)" />
      <Rect x={0} y={170} width={320} height={30} fill="#C7D6CC" />

      {/* Pfosten. */}
      <Rect x={152} y={36} width={12} height={136} fill="#8A5A1E" />

      {/* Schild nach links. */}
      <Path d="M56 50 h100 v26 h-100 l-14 -13 Z" fill="#FFFFFF" stroke={book.printRed} strokeWidth={1.5} />
      <Path d="M74 63 h64" stroke={book.printRed} strokeWidth={3} strokeLinecap="round" />

      {/* Schild nach rechts, weiter unten. */}
      <Path d="M160 92 h100 l14 13 l-14 13 h-100 Z" fill="#FFFFFF" stroke={book.printSlate} strokeWidth={1.5} />
      <Path d="M176 105 h68" stroke={book.printSlate} strokeWidth={3} strokeLinecap="round" />

      {/* Schild nach links, unterstes. */}
      <Path d="M70 134 h86 v26 h-86 l-14 -13 Z" fill="#FFFFFF" stroke="#8A5A1E" strokeWidth={1.5} />
      <Path d="M86 147 h52" stroke="#8A5A1E" strokeWidth={3} strokeLinecap="round" />

      {/* Geradeaus-Pfeil oben auf dem Pfosten. */}
      <Path d="M158 14 l12 16 h-7 v10 h-10 v-10 h-7 Z" fill={book.printRed} />
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
      <Polygon points="196,40 212,40 212,74 204,66 196,74" fill={book.printRed} />
    </Frame>
  );
}

const SCENES: Record<string, SceneComponent> = {
  'greeting-office': GreetingOfficeScene,
  introduction: IntroductionScene,
  'world-map': WorldMapScene,
  'alphabet-numbers': AlphabetNumbersScene,
  // Ab hier die Motive des spanischen Lehrwerks. Sie sind nicht
  // sprachgebunden – ein deutsches Kapitel über Familie oder Wegbeschreibung
  // könnte dieselben Schlüssel verwenden.
  'family-tree': FamilyTreeScene,
  belongings: BelongingsScene,
  portraits: PortraitsScene,
  birthday: BirthdayScene,
  'city-street': CityStreetScene,
  'city-map': CityMapScene,
  signpost: SignpostScene,
};

/** Löst den `illustration:<key>`-Schlüssel aus `ImageBlock.url` auf. */
export function getSceneComponent(url: string): SceneComponent {
  const key = url.startsWith('illustration:') ? url.slice('illustration:'.length) : url;
  return SCENES[key] ?? GenericBookScene;
}
