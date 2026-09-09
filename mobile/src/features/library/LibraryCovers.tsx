import React from 'react';
import { Image } from 'react-native';
import Svg, { Circle, Defs, Ellipse, LinearGradient, Path, Polygon, Rect, Stop } from 'react-native-svg';
import type { LibraryContentDto } from '@lingua/shared';

/**
 * Kachel-Bilder der Bibliothek.
 *
 * Es gibt (noch) keine echten Fotos – `imageUrl` ist bei jedem Seed-Inhalt
 * leer, und Fotobeschaffung ist eine redaktionelle, keine technische Aufgabe.
 * Statt eines Platzhalter-Icons bekommt jeder Text eine eigene, zum Thema
 * passende Illustration, gezeichnet mit react-native-svg – demselben Werkzeug,
 * mit dem auch die Lehrwerk-Symbole entstanden sind (siehe `workbook/BookIcons`).
 * So funktioniert es überall gleich (iOS, Android, Web) und ohne Bilddatei,
 * die geladen werden müsste.
 *
 * Format ist ein hochkantes Buchcover (3:4) statt eines breiten Fotos – dazu
 * passt, dass hier eine Bibliothek dargestellt wird, und die Kachel bleibt
 * insgesamt kompakter. Ein abgedunkelter Verlauf am unteren Rand (der
 * „Scrim“, in `Frame` gezeichnet) macht Platz für Titel und Textauszug, die
 * `LibraryListScreen` als echten Text darüberlegt.
 *
 * Die Auswahl läuft über die Tags: ein Text über Einkaufen bekommt den
 * Marktstand, eine Natur-Geschichte den Leuchtturm, ein Gesellschaftstext die
 * Straße. Neue Inhalte ohne passenden Tag bekommen ein neutrales Buch-Motiv –
 * nie ein leeres Feld. Sobald es echte Bilder gibt, ersetzt `imageUrl` das
 * hier automatisch (siehe `LibraryCoverArt`).
 */
type CoverComponent = () => React.JSX.Element;

const COVERS_BY_TAG: Record<string, CoverComponent> = {
  einkaufen: MarketCover,
  alltag: MarketCover,
  natur: LighthouseCover,
  geschichte: LighthouseCover,
  gesellschaft: CityCover,
  umwelt: CityCover,
};

/** Wählt die passende Illustration – ein echtes Foto hat immer Vorrang. */
export function LibraryCoverArt({ content }: { content: LibraryContentDto }) {
  if (content.imageUrl) {
    return <Image source={{ uri: content.imageUrl }} style={{ width: '100%', height: '100%' }} resizeMode="cover" />;
  }
  const Cover = content.tags.map((tag) => COVERS_BY_TAG[tag]).find(Boolean) ?? BookCover;
  return <Cover />;
}

/** Hochformat-Leinwand (120×160) plus abgedunkelter Verlauf für den Textbereich. */
function Frame({ children }: { children: React.ReactNode }) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 120 160" preserveAspectRatio="xMidYMid slice">
      {children}
      <Defs>
        <LinearGradient id="scrim" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0.5" stopColor="#000000" stopOpacity={0} />
          <Stop offset="1" stopColor="#000000" stopOpacity={0.75} />
        </LinearGradient>
      </Defs>
      <Rect x={0} y={0} width={120} height={160} fill="url(#scrim)" />
    </Svg>
  );
}

/** A2 „Ein Morgen auf dem Wochenmarkt“: Marktstand mit Obst und Käse. */
function MarketCover() {
  return (
    <Frame>
      <Defs>
        <LinearGradient id="marketSky" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#FBEFDA" />
          <Stop offset="1" stopColor="#F0D3A8" />
        </LinearGradient>
      </Defs>
      <Rect x={0} y={0} width={120} height={160} fill="url(#marketSky)" />
      <Rect x={0} y={138} width={120} height={22} fill="#E4C79A" />

      {/* Markise: rot-weiß gestreiftes Zeltdach über dem Stand. */}
      <Polygon points="10,16 110,16 100,38 20,38" fill="#C2564B" />
      {[10, 30, 50, 70, 90].map((x, i) =>
        i % 2 === 0 ? (
          <Polygon key={x} points={`${x},16 ${x + 20},16 ${x + 17},38 ${x + 3},38`} fill="#FBEFDA" />
        ) : null,
      )}

      {/* Tischplatte des Stands. */}
      <Rect x={16} y={38} width={88} height={7} fill="#8A5A32" />
      <Rect x={20} y={45} width={80} height={56} fill="#A9713F" />

      {/* Obst: Äpfel, Orangen. */}
      <Circle cx={46} cy={30} r={9} fill="#C2564B" />
      <Circle cx={64} cy={28} r={9} fill="#D9782B" />
      <Circle cx={56} cy={38} r={8} fill="#D9782B" />
      <Circle cx={75} cy={36} r={8} fill="#C2564B" />

      {/* Käseecke. */}
      <Polygon points="28,38 44,38 36,20" fill="#EAC245" />

      {/* Brotkorb im Vordergrund. */}
      <Path d="M38 148 Q60 126 82 148 L79 160 L41 160 Z" fill="#B4823E" />
      <Path d="M46 148 Q60 130 74 148" stroke="#7A5327" strokeWidth={3} fill="none" />
    </Frame>
  );
}

/** B1 „Der Leuchtturmwärter“: Leuchtturm in der Dämmerung – hochformatig wie ein Turm. */
function LighthouseCover() {
  return (
    <Frame>
      <Defs>
        <LinearGradient id="duskSky" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#2C3E63" />
          <Stop offset="1" stopColor="#5A7398" />
        </LinearGradient>
      </Defs>
      <Rect x={0} y={0} width={120} height={160} fill="url(#duskSky)" />

      {/* Lichtkegel. */}
      <Polygon points="80,52 120,26 120,66" fill="#F5E7A8" opacity={0.35} />

      {/* Möwe. */}
      <Path d="M24 28 q6 -6 12 0" stroke="#EAF1F8" strokeWidth={1.6} fill="none" strokeLinecap="round" />

      {/* Fels. */}
      <Polygon points="44,160 88,108 112,160" fill="#3A4A63" />

      {/* Turm – schmal und hoch, passend zum Hochformat. */}
      <Polygon points="66,150 74,56 86,56 94,150" fill="#EAF1F8" />
      <Rect x={73} y={78} width={14} height={8} fill="#3A4A63" />
      <Rect x={73} y={98} width={14} height={8} fill="#3A4A63" />
      {/* Laterne mit Licht. */}
      <Rect x={70} y={42} width={20} height={14} fill="#3A4A63" />
      <Circle cx={80} cy={49} r={5} fill="#F5E7A8" />
      <Polygon points="68,42 92,42 86,32 74,32" fill="#C2564B" />

      {/* Wasser. */}
      <Rect x={0} y={132} width={120} height={28} fill="#233350" />
      <Path d="M6 140 q9 -4 18 0 t18 0 t18 0 t18 0 t18 0 t18 0" stroke="#3E547A" strokeWidth={2} fill="none" />
    </Frame>
  );
}

/** B2 „Warum Städte leiser werden“: ruhige Straße mit Bäumen. */
function CityCover() {
  return (
    <Frame>
      <Defs>
        <LinearGradient id="citySky" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#E7ECE9" />
          <Stop offset="1" stopColor="#CBD8D1" />
        </LinearGradient>
      </Defs>
      <Rect x={0} y={0} width={120} height={160} fill="url(#citySky)" />

      {/* Häuserzeile – hochformatig gestaffelt. */}
      <Rect x={8} y={54} width={26} height={84} fill="#8C9A93" />
      <Rect x={38} y={30} width={28} height={108} fill="#A6B3AB" />
      <Rect x={70} y={64} width={26} height={74} fill="#8C9A93" />
      <Rect x={94} y={44} width={22} height={94} fill="#9CAAA2" />
      {/* Fenster. */}
      {[
        [13, 62], [23, 62], [13, 78], [23, 78], [13, 94], [23, 94],
        [44, 38], [56, 38], [44, 54], [56, 54], [44, 70], [56, 70],
        [76, 72], [88, 72], [76, 88], [88, 88],
        [99, 52], [109, 52], [99, 68], [109, 68],
      ].map(([x, y]) => (
        <Rect key={`${x}-${y}`} x={x} y={y} width={5} height={7} fill="#EAF0EC" />
      ))}

      {/* Straße. */}
      <Rect x={0} y={138} width={120} height={22} fill="#5B6660" />
      <Rect x={0} y={148} width={120} height={2} fill="#EAF0EC" opacity={0.5} />

      {/* Baum. */}
      <Rect x={97} y={128} width={4} height={16} fill="#7A5327" />
      <Circle cx={99} cy={121} r={13} fill="#6E8F6E" />

      {/* Leises E-Auto. */}
      <Rect x={16} y={144} width={32} height={11} rx={4} fill="#C2564B" />
      <Circle cx={24} cy={156} r={3.8} fill="#3A4A63" />
      <Circle cx={41} cy={156} r={3.8} fill="#3A4A63" />

      {/* Verklingende Schallwellen – das Bild-Motiv des Artikels. */}
      <Path d="M52 146 q4 4 0 8" stroke="#9CAAA2" strokeWidth={1.4} fill="none" strokeLinecap="round" />
      <Path d="M56 144 q7 6 0 12" stroke="#9CAAA2" strokeWidth={1.2} fill="none" strokeLinecap="round" opacity={0.6} />
    </Frame>
  );
}

/** Neutrales Motiv für Inhalte ohne passenden Themen-Tag. */
function BookCover() {
  return (
    <Frame>
      <Defs>
        <LinearGradient id="bookBg" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#EDF1F7" />
          <Stop offset="1" stopColor="#D3DBEA" />
        </LinearGradient>
      </Defs>
      <Rect x={0} y={0} width={120} height={160} fill="url(#bookBg)" />

      <Ellipse cx={60} cy={122} rx={44} ry={7} fill="#C7D0DE" opacity={0.6} />

      {/* Aufgeschlagenes Buch. */}
      <Path d="M60 58 C 44 48, 22 53, 15 62 L 15 112 C 22 103, 44 98, 60 108 Z" fill="#FFFFFF" stroke="#B9C3D4" strokeWidth={1.5} />
      <Path d="M60 58 C 76 48, 98 53, 105 62 L 105 112 C 98 103, 76 98, 60 108 Z" fill="#FFFFFF" stroke="#B9C3D4" strokeWidth={1.5} />

      {/* Textzeilen. */}
      {[74, 82, 90].map((y) => (
        <React.Fragment key={`l-${y}`}>
          <Path d={`M23 ${y} h26`} stroke="#C7D0DE" strokeWidth={2} strokeLinecap="round" />
          <Path d={`M71 ${y} h26`} stroke="#C7D0DE" strokeWidth={2} strokeLinecap="round" />
        </React.Fragment>
      ))}

      {/* Lesezeichen. */}
      <Polygon points="82,40 94,40 94,66 88,59 82,66" fill="#1E3D6B" />
    </Frame>
  );
}
