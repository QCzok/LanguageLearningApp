import React, { useEffect, useState } from 'react';
import { Modal, Pressable, Text, View, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTranslation } from '../../i18n';
import { colors, fontFamily, radius, reading, readingLabel, shadow, spacing } from '../../theme';
import type { GlossaryAnchor } from './ReadingSection';

/** Abstand zwischen Wort und Zettel, und die Kantenlänge der Spitze. */
const GAP = 8;
const ARROW = 8;

/**
 * Der Zettel, der über einem unterstrichenen Wort aufgeht.
 *
 * Gemeint ist die Randnotiz einer kommentierten Ausgabe, nur dass sie hier
 * erst auf Zuruf erscheint: ein kleines Blatt, das mit einer Spitze auf genau
 * das Wort zeigt, das angetippt wurde. Deshalb wird es nicht als Sheet von
 * unten eingeblendet, sondern an der Druckstelle verankert – man soll den
 * Blick nicht vom Satz nehmen müssen.
 *
 * Positioniert wird in Bildschirmkoordinaten (`pageX`/`pageY` des Tippens).
 * Der Zettel steht bevorzugt über dem Wort, weil dort sonst der Finger läge;
 * ist oben kein Platz, klappt er darunter. Gemessen wird er vorher einmal
 * unsichtbar, damit er nicht erst unten erscheint und dann nach oben springt.
 */
export function GlossaryPopover({
  anchor,
  onClose,
}: {
  anchor: GlossaryAnchor | null;
  onClose: () => void;
}) {
  const { t } = useTranslation();
  const window = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const [height, setHeight] = useState(0);

  // Jedes neue Wort wird neu vermessen – sonst erbte der nächste Zettel die
  // Höhe des vorigen und stünde für einen Frame falsch.
  const key = anchor ? `${anchor.id}:${Math.round(anchor.x)}:${Math.round(anchor.y)}` : null;
  useEffect(() => setHeight(0), [key]);

  if (!anchor) return null;

  const width = Math.min(320, window.width - spacing.lg * 2);
  const halfLine = anchor.lineHeight / 2;
  const wordTop = anchor.y - halfLine;
  const wordBottom = anchor.y + halfLine;

  // Über dem Wort nur, wenn der Zettel dort vollständig hineinpasst.
  const above = height > 0 && wordTop - GAP - ARROW - height >= insets.top + spacing.sm;
  const rawTop = above ? wordTop - GAP - ARROW - height : wordBottom + GAP + ARROW;
  const lowest = window.height - insets.bottom - spacing.sm - height;
  const top = Math.max(insets.top + spacing.sm, Math.min(rawTop, Math.max(0, lowest)));

  const left = clamp(
    anchor.x - width / 2,
    spacing.md,
    Math.max(spacing.md, window.width - width - spacing.md),
  );
  // Die Spitze folgt dem Wort, bleibt aber innerhalb der abgerundeten Ecken.
  const arrowLeft = clamp(
    anchor.x - left - ARROW,
    radius.md,
    Math.max(radius.md, width - radius.md - ARROW * 2),
  );
  // Musste der Zettel an den Bildschirmrand rutschen, zeigt keine Spitze mehr
  // auf das Wort – dann ist gar keine ehrlicher als eine falsche.
  const pointing = height > 0 && Math.abs(top - rawTop) < 1;

  return (
    <Modal visible transparent animationType="fade" onRequestClose={onClose}>
      {/* Der Zettel selbst fängt keine Berührung ab: ein Tippen irgendwohin –
          auch auf die Erklärung – schließt ihn wieder. Für eine Randnotiz ist
          das die richtige Geste; ein eigener Schließen-Knopf wäre ein Bedien-
          element zu viel auf einer Seite, die man lesen soll. */}
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={t('readingCloseExplanation')}
        onPress={onClose}
        style={backdrop}
      >
        <View
          onLayout={(event) => setHeight(event.nativeEvent.layout.height)}
          // Vor der Messung unsichtbar, aber schon im Layout – siehe oben.
          style={[card, { width, top, left, opacity: height > 0 ? 1 : 0 }]}
        >
          {pointing ? (
            <View
              style={[
                arrow,
                above ? arrowDown : arrowUp,
                { left: arrowLeft },
              ]}
            />
          ) : null}

          <Text style={popoverLabel}>{t('readingExplanationLabel')}</Text>
          <Text style={popoverTerm}>{anchor.entry.term}</Text>
          <View style={popoverRule} />
          <Text style={popoverText}>{anchor.entry.explanation}</Text>
        </View>
      </Pressable>
    </Modal>
  );
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(value, max));
}

/**
 * Der Hintergrund dunkelt kaum ab – gerade genug, dass der Zettel vom Papier
 * abhebt, aber nicht so viel, dass der Absatz darunter unlesbar würde. Man
 * soll den Satz weiterlesen können, in dem das Wort steht.
 */
const backdrop = {
  flex: 1,
  backgroundColor: 'rgba(13, 13, 13, 0.14)',
};

const card = {
  position: 'absolute' as const,
  backgroundColor: reading.paper,
  borderRadius: radius.md,
  borderWidth: 1,
  borderColor: reading.edge,
  // Rücken in der Leitfarbe, wie Vorspann und Kästen der Lesestrecke – die
  // Spitze sitzt oben oder unten und käme einer farbigen Kante dort ins Gehege.
  borderLeftWidth: 3,
  borderLeftColor: colors.primary,
  paddingVertical: spacing.md,
  paddingHorizontal: spacing.md,
  gap: 3,
  ...shadow.lift,
};

/**
 * Die Spitze ist ein um 45° gedrehtes Quadrat in Papierfarbe. Sie liegt zur
 * Hälfte über der Kante des Zettels und deckt dessen Randlinie dort ab; die
 * Randlinie läuft stattdessen über die beiden nach außen zeigenden Kanten des
 * Quadrats weiter. Die beiden inneren bleiben ohne Linie – sonst zeichnete
 * sich die Raute als Umriss in den Zettel hinein.
 */
const arrow = {
  position: 'absolute' as const,
  width: ARROW * 2,
  height: ARROW * 2,
  backgroundColor: reading.paper,
  borderColor: reading.edge,
  transform: [{ rotate: '45deg' }],
};

/** Zettel über dem Wort: die Spitze zeigt nach unten, außen liegen unten und rechts. */
const arrowDown = {
  bottom: -ARROW,
  borderBottomWidth: 1,
  borderRightWidth: 1,
};

/** Zettel unter dem Wort: die Spitze zeigt nach oben, außen liegen oben und links. */
const arrowUp = {
  top: -ARROW,
  borderTopWidth: 1,
  borderLeftWidth: 1,
};

const popoverLabel = {
  ...readingLabel,
  color: colors.primary,
};

const popoverTerm = {
  fontFamily: fontFamily.bold,
  fontSize: 18,
  lineHeight: 24,
  color: reading.ink,
};

const popoverRule = {
  height: 1,
  backgroundColor: reading.rule,
  marginVertical: spacing.sm,
};

const popoverText = {
  fontFamily: fontFamily.regular,
  fontSize: 14,
  lineHeight: 22,
  color: reading.inkSoft,
};
