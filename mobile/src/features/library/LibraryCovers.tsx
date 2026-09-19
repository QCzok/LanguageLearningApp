import type { ImageSourcePropType } from 'react-native';
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
 * Das Titelbild eines Lesetexts.
 *
 * Es gibt (noch) keine echten Fotos – `imageUrl` ist bei jedem Seed-Inhalt
 * leer, und Fotobeschaffung ist eine redaktionelle, keine technische Aufgabe.
 * Statt eines Platzhalter-Icons bekommt jeder Text ein zum Thema passendes,
 * gerendertes Motiv (siehe `scripts/render-home-covers.mjs`), vergeben über
 * seinen ersten Tag: der Marktstand für einen Text übers Einkaufen, der
 * Leuchtturm für eine Naturgeschichte, die Straße für einen
 * Gesellschaftstext, dazu Dorf, Küche und leuchtendes Telefon aus der
 * spanischen B2-Bibliothek. Texte ohne passenden Tag bekommen ein neutrales
 * Buch-Motiv – nie ein leeres Feld.
 *
 * Gebraucht wird das Bild nur noch an einer Stelle: auf der Titelseite des
 * Lesers (`ReaderScreen`), wo es den Band aufschlägt, den man gewählt hat.
 * Die Übersicht selbst zeigt seit der Umstellung auf Karten keine Motive mehr
 * – sieben Bilder für alle Texte sagten über den einzelnen Text nichts aus
 * (siehe `LibraryListScreen`).
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

/** Das Bild eines Texts als Quelle – ein echtes Foto hat immer Vorrang. */
export function libraryCoverSource(
  content: Pick<LibraryContentDto, 'imageUrl' | 'tags'>,
): ImageSourcePropType {
  if (content.imageUrl) return { uri: content.imageUrl };
  return content.tags.map((tag) => COVERS_BY_TAG[tag]).find(Boolean) ?? genericLibraryCover;
}
