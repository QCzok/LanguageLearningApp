import React, { ReactNode, useEffect } from 'react';
import { Platform, View, useWindowDimensions } from 'react-native';
import { colors } from '../theme';

/**
 * Lädt die Schriftfamilie „Montserrat“ im Browser nach.
 *
 * Auf iOS/Android registriert `expo-font` (siehe `App.tsx`) jeden Schnitt
 * einzeln unter seinem Google-Fonts-Dateinamen (`Montserrat_700Bold` usw.) –
 * das ist dort die einzig zuverlässige Art, eine Schriftdatei zu finden. Im
 * Web dagegen benutzt der Code an vielen Stellen den literalen Namen
 * „Montserrat“ zusammen mit einer eigenen `fontWeight`-Zahl (siehe
 * `theme/index.ts`, `fontFamily`) – normales Web-Schriftverhalten, das nur
 * funktioniert, wenn der Browser die Familie „Montserrat“ tatsächlich kennt.
 * Diese eine `<link>`-Zeile stellt das her; ohne sie würde jeder Text im Web
 * still auf die System-Schrift zurückfallen.
 */
function useWebFontLoader(): void {
  useEffect(() => {
    if (Platform.OS !== 'web' || typeof document === 'undefined') return;
    if (document.getElementById('app-web-font')) return;

    const link = document.createElement('link');
    link.id = 'app-web-font';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap';
    document.head.appendChild(link);
  }, []);
}

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
 *
 * `MAX_WIDTH` ist auch für `useContentWidth` maßgeblich (siehe dort) – beide
 * müssen exakt denselben Wert verwenden, sonst weicht die von einem Screen
 * berechnete Skalierung von der tatsächlich gerenderten Spaltenbreite ab.
 */
export const MAX_WIDTH = 480;

export function WebLayout({ children }: { children: ReactNode }) {
  useWebFontLoader();

  if (Platform.OS !== 'web') return <>{children}</>;

  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#D9D9D9' }}>
      <View
        style={{
          flex: 1,
          width: '100%',
          maxWidth: MAX_WIDTH,
          backgroundColor: colors.background,
          shadowColor: colors.text,
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

/**
 * Verfügbare Breite des Anzeigebereichs: auf iOS/Android die Fensterbreite
 * (reagiert auch auf Drehung), im Web `min(Fensterbreite, MAX_WIDTH)` – exakt
 * das Ergebnis, das `WebLayout`s `width: 100%; max-width` CSS-seitig erzeugt.
 *
 * Für jeden Screen zu verwenden, der seinen Inhalt selbst auf die verfügbare
 * Breite skaliert (z. B. die Lehrwerksseite). `useWindowDimensions` allein
 * liefert im Web die volle Fensterbreite statt der von `WebLayout`
 * vorgegebenen, schmaleren Spalte.
 *
 * Bewusst rein rechnerisch statt über `onLayout`/`ResizeObserver` gemessen:
 * Ein `onLayout` auf `WebLayout`s eigener Spalte feuert in diesem Setup
 * zuverlässig NIE (offenbar eine Eigenheit von react-native-web für ein
 * `flex:1`-`View`, dessen Größe rein aus einem `flex:1`-Elternteil folgt,
 * ohne dass sich seine Größe je „ändert“) – und selbst dort, wo es feuert,
 * liefert es auf einem mehrere Stack-Ebenen tiefen Screen (Kapitel → Einheit)
 * die volle Fensterbreite statt der Spaltenbreite. Die Rechnung hier hängt
 * nur von `useWindowDimensions` ab (die zuverlässig funktioniert) und der
 * festen `MAX_WIDTH`-Konstante, ist also von beiden Problemen unabhängig.
 */
export function useContentWidth(): number {
  const windowWidth = useWindowDimensions().width;
  if (Platform.OS === 'web') return Math.min(windowWidth, MAX_WIDTH);
  return windowWidth;
}
