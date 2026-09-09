import React, { ReactNode } from 'react';
import { Platform, View } from 'react-native';
import { colors } from '../theme';

/**
 * Begrenzt die App im Browser auf eine telefon-taugliche Breite.
 *
 * Die gesamte Oberfläche ist für ein Telefon gebaut: Raster mit prozentualen
 * Breiten (`flexBasis: '47%'` bei den Kacheln, Karteikarten, Kapitelkarten …)
 * gehen davon aus, dass der verfügbare Platz selbst schon telefon-schmal ist.
 * Im Browser spannt sich derselbe Baum aber über das ganze Browserfenster –
 * bei 1600px Breite wird aus einer 47%-Kachel plötzlich eine 750px breite
 * Fläche. Das ist der eigentliche Grund, warum im Web „alles riesig“ wirkt,
 * nicht ein Fehler einzelner Karten.
 *
 * Diese Hülle zentriert die App stattdessen in einer festen Spalte, wie die
 * Web-Ansichten von WhatsApp oder Twitter/X es tun. Auf iOS/Android ist sie
 * ein reiner Durchreicher ohne jede Wirkung – dort ist die Breite ohnehin
 * schon die des Geräts.
 */
const MAX_WIDTH = 480;

export function WebLayout({ children }: { children: ReactNode }) {
  if (Platform.OS !== 'web') return <>{children}</>;

  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#DDE1E7' }}>
      <View
        style={{
          flex: 1,
          width: '100%',
          maxWidth: MAX_WIDTH,
          backgroundColor: colors.background,
          shadowColor: '#0F172A',
          shadowOpacity: 0.16,
          shadowRadius: 32,
          shadowOffset: { width: 0, height: 0 },
        }}
      >
        {children}
      </View>
    </View>
  );
}
