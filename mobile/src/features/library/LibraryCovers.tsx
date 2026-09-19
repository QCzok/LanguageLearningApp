import React from 'react';
import { Image, StyleSheet } from 'react-native';
import type { ImageSourcePropType } from 'react-native';
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

/**
 * Das Bild eines Texts als Quelle – ein echtes Foto hat immer Vorrang.
 *
 * Getrennt von der Komponente, weil dasselbe Motiv an zwei Stellen in
 * unterschiedlichen Rahmen sitzt: als Deckel im Regal (`LibraryListScreen`) und
 * als kleiner Deckel auf der Titelseite des Lesers (`ReaderScreen`).
 */
export function libraryCoverSource(
  content: Pick<LibraryContentDto, 'imageUrl' | 'tags'>,
): ImageSourcePropType {
  if (content.imageUrl) return { uri: content.imageUrl };
  return content.tags.map((tag) => COVERS_BY_TAG[tag]).find(Boolean) ?? genericLibraryCover;
}

/** Das Titelbild, formatfüllend im umgebenden Rahmen. */
export function LibraryCoverArt({ content }: { content: LibraryContentDto }) {
  return (
    <Image
      source={libraryCoverSource(content)}
      style={{ width: '100%', height: '100%' }}
      resizeMode="cover"
      fadeDuration={0}
      accessibilityIgnoresInvertColors
    />
  );
}

/**
 * Der Buchrücken auf dem Deckel: eine dunkle Kante links, daneben ein heller
 * Falz.
 *
 * Das ist der Unterschied zwischen einem Bild und einem Buch. Ein Deckel ist
 * nie flach – am Rücken steht er im Schatten, direkt daneben fängt das Licht
 * den Falz. Zwei Verläufe über dem Motiv genügen, damit die Kachel als Band im
 * Regal gelesen wird und nicht als Foto.
 */
export function CoverSpine() {
  return (
    <Svg style={StyleSheet.absoluteFill} width="100%" height="100%">
      <Defs>
        <LinearGradient id="coverSpine" x1="0" y1="0" x2="1" y2="0">
          <Stop offset="0" stopColor="#0D0D0D" stopOpacity={0.55} />
          <Stop offset="0.035" stopColor="#0D0D0D" stopOpacity={0.3} />
          <Stop offset="0.07" stopColor="#FFFFFF" stopOpacity={0.22} />
          <Stop offset="0.12" stopColor="#0D0D0D" stopOpacity={0} />
        </LinearGradient>
      </Defs>
      <Rect x="0" y="0" width="100%" height="100%" fill="url(#coverSpine)" />
    </Svg>
  );
}

/**
 * Abdunkelung, die über ein Titelbild gelegt wird, damit weißer Text darauf
 * lesbar bleibt.
 *
 * Gebraucht wird sie auf dem Deckel im Regal: Weil die Motive keine gedruckte
 * Titelei mitbringen, steht der Titel dort über dem Bild – und das geht nur,
 * wenn der untere Teil des Deckels abgedunkelt ist. Bleibt eine SVG, weil der
 * Verlauf sich nach der tatsächlichen Höhe des jeweiligen Deckels richtet, was
 * eine feste Bilddatei nicht kann.
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
