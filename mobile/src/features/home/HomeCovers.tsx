import React from 'react';
import { Image } from 'react-native';

import { aiCover, libraryShelfCover, notebookCover, videoCover, vocabularyCover } from '../../assets';

/**
 * Kachel-Bilder der Startseite.
 *
 * Waren erst flache SVG-Zeichnungen, jetzt gerenderte PNGs (weiche Schatten,
 * Lichtverlauf, leichte Tiefenunschärfe) – dieselbe Technik für alle fünf:
 * Karteikarten fürs Vokabellernen, ein aufgeschlagenes Heft mit Stift fürs
 * Lehrwerk, ein Bücherregal für die Bibliothek, ein Bildschirm mit
 * Abspielzeichen für die Mediathek, eine Sprechblase mit Funken für die KI.
 * Erzeugt werden sie von `scripts/render-home-covers.mjs`, die Dateien liegen
 * unter `mobile/assets/covers/`.
 */
function Cover({ source }: { source: number }) {
  return (
    <Image
      source={source}
      style={{ width: '100%', height: '100%' }}
      resizeMode="cover"
      // Ohne das blendet Android das Bild über 300 ms ein – bei einer Kachel,
      // die beim Scrollen auftaucht, wirkt das wie Nachladen.
      fadeDuration={0}
      accessibilityIgnoresInvertColors
    />
  );
}

/** Vokabeltrainer: Karteikartenstapel mit Stift. */
export function VocabCover() {
  return <Cover source={vocabularyCover} />;
}

/** Lernheft: aufgeschlagenes Heft mit Stift. */
export function NotebookCover() {
  return <Cover source={notebookCover} />;
}

/** Bibliothek: ein kleines Bücherregal. */
export function LibraryShelfCover() {
  return <Cover source={libraryShelfCover} />;
}

/** Mediathek: ein Bildschirm mit Abspielzeichen und Untertitelzeile. */
export function VideoCover() {
  return <Cover source={videoCover} />;
}

/** KI-Tutor: Sprechblase mit Funken. */
export function AiCover() {
  return <Cover source={aiCover} />;
}
