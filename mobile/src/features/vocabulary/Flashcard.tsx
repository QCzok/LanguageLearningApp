import React, { ReactNode } from 'react';
import { View, ViewStyle } from 'react-native';
import { flashcard, radius, spacing } from '../../theme';

/**
 * Die Karteikarte des Vokabeltrainers.
 *
 * Statt einer weißen App-Karte wird hier das Material nachgebaut, das jeder
 * vom Lernen kennt: cremefarbener Karton, rote Kopflinie, blasse
 * Schreiblinien, scharfer Rand. Die Linien liegen als eigene Ebene *hinter*
 * dem Inhalt und sind nicht anklickbar – der Inhalt bestimmt die Höhe der
 * Karte, die Linien füllen sie nur aus.
 *
 * `stackSize` legt an, wie viele Karten noch darunter liegen: zwei versetzte
 * Schichten genügen, um einen Stapel lesbar zu machen; mehr Schichten sehen
 * schnell nach Dekoration statt nach Papier aus.
 */
export function Flashcard({
  children,
  stackSize = 0,
  variant = 'front',
  style,
}: {
  children: ReactNode;
  /** Wie viele Karten unter dieser liegen – zeichnet bis zu zwei Schichten. */
  stackSize?: number;
  /** Die Rückseite ist minimal dunkler, damit das Umdrehen sichtbar wird. */
  variant?: 'front' | 'back';
  style?: ViewStyle;
}) {
  const layers = Math.min(2, Math.max(0, stackSize));

  return (
    <View style={style}>
      {/* Stapelschichten: von hinten nach vorn, jede etwas schmaler und tiefer. */}
      {Array.from({ length: layers }).map((_, index) => {
        const depth = layers - index;
        return (
          <View
            key={depth}
            pointerEvents="none"
            style={[
              stackLayer,
              {
                top: depth * 5,
                left: depth * 4,
                right: depth * 4,
                bottom: -depth * 3,
              },
            ]}
          />
        );
      })}

      <View
        style={[
          cardBase,
          variant === 'back' && { backgroundColor: flashcard.paperBack },
        ]}
      >
        {/* Rote Kopflinie und blasse Schreiblinien liegen hinter dem Inhalt. */}
        <View pointerEvents="none" style={ruling}>
          <View style={headRule} />
          <View style={{ flex: 1, justifyContent: 'space-evenly', paddingTop: 4 }}>
            {Array.from({ length: 7 }).map((_, index) => (
              <View key={index} style={writingRule} />
            ))}
          </View>
        </View>

        <View style={content}>{children}</View>
      </View>
    </View>
  );
}

const cardBase: ViewStyle = {
  backgroundColor: flashcard.paper,
  borderRadius: radius.sm,
  borderWidth: 1,
  borderColor: flashcard.edge,
  overflow: 'hidden',
  shadowColor: '#3F3A2F',
  shadowOpacity: 0.16,
  shadowRadius: 10,
  shadowOffset: { width: 0, height: 4 },
  elevation: 4,
};

const stackLayer: ViewStyle = {
  position: 'absolute',
  backgroundColor: flashcard.stack,
  borderRadius: radius.sm,
  borderWidth: 1,
  borderColor: flashcard.edge,
};

const ruling: ViewStyle = {
  ...({ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 } as ViewStyle),
  paddingTop: 34,
};

const headRule: ViewStyle = {
  position: 'absolute',
  top: 30,
  left: 0,
  right: 0,
  height: 1.5,
  backgroundColor: flashcard.headRule,
  opacity: 0.55,
};

const writingRule: ViewStyle = {
  height: 1,
  backgroundColor: flashcard.rule,
  opacity: 0.7,
};

const content: ViewStyle = {
  paddingHorizontal: spacing.lg,
  paddingTop: spacing.xl,
  paddingBottom: spacing.lg,
};
