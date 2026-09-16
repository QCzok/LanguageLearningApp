import React from 'react';
import { Image } from 'react-native';
import {
  sceneAlphabetNumbers,
  sceneBelongings,
  sceneBirthday,
  sceneCityMap,
  sceneCityStreet,
  sceneFamilyTree,
  sceneGenericBook,
  sceneGreetingOffice,
  sceneIntroduction,
  scenePortraits,
  sceneSignpost,
  sceneWorldMap,
} from '../../../assets';

/**
 * Szenenbilder für das Lehrwerk.
 *
 * Es gibt keine echten Fotos – Bildbeschaffung/-lizenzierung ist eine
 * redaktionelle, keine technische Aufgabe. Statt eines Platzhalter-Symbols
 * bekommt jede Einheit ein eigenes, zum Thema passendes Bild. Waren erst
 * flache SVG-Zeichnungen, sind es jetzt gerenderte PNGs (weiche Schatten,
 * Lichtverlauf) – dieselbe Technik wie bei den Start-Kacheln, Buchdeckeln und
 * Bibliotheks-Covern, erzeugt von `scripts/render-home-covers.mjs`.
 * `SceneImage` (in `ContentBlocks.tsx`) wählt anhand eines Schlüssels in
 * `ImageBlock.url` (`illustration:<key>`) die passende Szene aus; ein echtes
 * Foto würde `imageUrl` später einfach ersetzen, ohne dass sich am Aufruf im
 * Lehrplan etwas ändern müsste.
 */
type SceneComponent = () => React.JSX.Element;

function Scene({ source }: { source: number }) {
  return (
    <Image
      source={source}
      style={{ width: '100%', height: '100%' }}
      resizeMode="cover"
      fadeDuration={0}
      accessibilityIgnoresInvertColors
    />
  );
}

const SCENES: Record<string, number> = {
  'greeting-office': sceneGreetingOffice,
  introduction: sceneIntroduction,
  'world-map': sceneWorldMap,
  'alphabet-numbers': sceneAlphabetNumbers,
  // Ab hier die Motive des spanischen Lehrwerks. Sie sind nicht
  // sprachgebunden – ein deutsches Kapitel über Familie oder Wegbeschreibung
  // könnte dieselben Schlüssel verwenden.
  'family-tree': sceneFamilyTree,
  belongings: sceneBelongings,
  portraits: scenePortraits,
  birthday: sceneBirthday,
  'city-street': sceneCityStreet,
  'city-map': sceneCityMap,
  signpost: sceneSignpost,
};

/** Löst den `illustration:<key>`-Schlüssel aus `ImageBlock.url` auf. */
export function getSceneComponent(url: string): SceneComponent {
  const key = url.startsWith('illustration:') ? url.slice('illustration:'.length) : url;
  const source = SCENES[key] ?? sceneGenericBook;
  return () => <Scene source={source} />;
}
