import React from 'react';
import { Image, StyleSheet } from 'react-native';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';
import type { LibraryContentDto } from '@lingua/shared';
import {
  cityLibraryCover,
  genericLibraryCover,
  kitchenLibraryCover,
  lighthouseLibraryCover,
  marketLibraryCover,
  phoneLibraryCover,
  villageLibraryCover,
} from '../../assets';

/**
 * Kachel-Bilder der Bibliothek.
 *
 * Es gibt (noch) keine echten Fotos – `imageUrl` ist bei jedem Seed-Inhalt
 * leer, und Fotobeschaffung ist eine redaktionelle, keine technische Aufgabe.
 * Statt eines Platzhalter-Icons bekommt jeder Text ein eigenes, zum Thema
 * passendes Bild. Waren erst flache SVG-Zeichnungen, sind es jetzt gerenderte
 * PNGs (weiche Schatten, Lichtverlauf) – dieselbe Technik wie bei den
 * Start-Kacheln und Buchdeckeln, erzeugt von
 * `scripts/render-home-covers.mjs`.
 *
 * Format ist ein hochkantes Buchcover (3:4) statt eines breiten Fotos – dazu
 * passt, dass hier eine Bibliothek dargestellt wird, und die Kachel bleibt
 * insgesamt kompakter.
 *
 * Die Auswahl läuft über die Tags: ein Text über Einkaufen bekommt den
 * Marktstand, eine Natur-Geschichte den Leuchtturm, ein Gesellschaftstext die
 * Straße. Die spanische B2-Bibliothek hat drei eigene Themen dazugebracht –
 * ein Dorf für die Landflucht-Reportage, eine Küche für die Rezeptgeschichte,
 * ein leuchtendes Telefon für den Text über Empfehlungsalgorithmen – und
 * damit auch drei neue Tags. Neue Inhalte ohne passenden Tag bekommen ein
 * neutrales Buch-Motiv – nie ein leeres Feld. Sobald es echte Bilder gibt,
 * ersetzt `imageUrl` das hier automatisch (siehe `LibraryCoverArt`).
 */
const COVERS_BY_TAG: Record<string, number> = {
  einkaufen: marketLibraryCover,
  alltag: marketLibraryCover,
  natur: lighthouseLibraryCover,
  geschichte: lighthouseLibraryCover,
  gesellschaft: cityLibraryCover,
  umwelt: cityLibraryCover,
  dorf: villageLibraryCover,
  familie: kitchenLibraryCover,
  essen: kitchenLibraryCover,
  technologie: phoneLibraryCover,
};

/** Wählt die passende Illustration – ein echtes Foto hat immer Vorrang. */
export function LibraryCoverArt({ content }: { content: LibraryContentDto }) {
  if (content.imageUrl) {
    return <Image source={{ uri: content.imageUrl }} style={{ width: '100%', height: '100%' }} resizeMode="cover" />;
  }
  const source = content.tags.map((tag) => COVERS_BY_TAG[tag]).find(Boolean) ?? genericLibraryCover;
  return <Image source={source} style={{ width: '100%', height: '100%' }} resizeMode="cover" fadeDuration={0} accessibilityIgnoresInvertColors />;
}

/**
 * Abdunkelung, die über ein Titelbild gelegt wird, damit weißer Text darauf
 * lesbar bleibt.
 *
 * Bleibt eine SVG: der Verlauf muss sich nach der tatsächlichen Höhe des
 * jeweiligen Bildes richten (schmales Band im Lesekopf, hohe Kachel in der
 * Liste), das lässt sich mit einer festen Bilddatei nicht abbilden.
 */
export function CoverScrim() {
  return (
    <Svg style={StyleSheet.absoluteFill} width="100%" height="100%">
      <Defs>
        <LinearGradient id="coverScrim" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#0D0D0D" stopOpacity={0.15} />
          <Stop offset="0.45" stopColor="#0D0D0D" stopOpacity={0.35} />
          <Stop offset="1" stopColor="#0D0D0D" stopOpacity={0.88} />
        </LinearGradient>
      </Defs>
      <Rect x="0" y="0" width="100%" height="100%" fill="url(#coverScrim)" />
    </Svg>
  );
}
