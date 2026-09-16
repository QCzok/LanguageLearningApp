import React from 'react';
import { Image } from 'react-native';
import type { WorkbookBook } from '@lingua/shared';
import { advancedBookCover, beginnerBookCover, grammarBookCover, intermediateBookCover } from '../../assets';

/**
 * Die Buchrücken des Regals.
 *
 * Waren erst flache SVG-Zeichnungen, dann ein Leinenband mit Goldprägung –
 * beides wirkte gegen den Rest der App altmodisch. Jetzt sind es gerenderte
 * Farbfeld-Cover: ein Verlauf in der Akzentfarbe, ein weicher Kreis als
 * Bildmotiv, darauf die Stufenziffer als klare geometrische Form. Die drei
 * Kursbücher tragen ihre Ziffer (1, 2, 3), das Grammatikbuch ein kleines
 * Raster, weil es quer zu den Stufen steht. Erzeugt von
 * `scripts/render-home-covers.mjs`.
 */
const BOOK_COVER_IMAGES: Record<WorkbookBook, number> = {
  BEGINNER: beginnerBookCover,
  INTERMEDIATE: intermediateBookCover,
  ADVANCED: advancedBookCover,
  GRAMMAR: grammarBookCover,
};

export function BookCover({ book }: { book: WorkbookBook }) {
  return (
    <Image
      source={BOOK_COVER_IMAGES[book]}
      style={{ width: '100%', height: '100%' }}
      resizeMode="cover"
      fadeDuration={0}
      accessibilityIgnoresInvertColors
    />
  );
}
