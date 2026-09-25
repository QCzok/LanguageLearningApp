import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { Asset } from 'expo-asset';
import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import RootNavigator from './src/navigation/RootNavigator';
import { warmUpApi } from './src/api/client';
import { persistOptions, queryClient } from './src/api/query-client';
import { useAuthStore } from './src/store/auth.store';
import { preloadImages } from './src/assets';
import { colors } from './src/theme';
import { ErrorBoundary } from './src/components/ErrorBoundary';
import { PointsCelebration } from './src/components/PointsCelebration';

export default function App() {
  const bootstrap = useAuthStore((state) => state.bootstrap);

  // Montserrat trägt den einheitlichen Stil der App (siehe theme/index.ts:
  // `bookFont`, `bookSans` und `typography` setzen alle auf diese Gewichte).
  // Bis das Laden abgeschlossen ist, bleibt der Bildschirm leer statt kurz in
  // der Systemschrift aufzublitzen und dann umzuspringen.
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  // Kachelbilder schon hier in den Cache legen. Sonst lädt Metro sie im
  // Entwicklungsmodus erst, wenn die Startseite sie zum ersten Mal rendert –
  // auf dem Gerät im WLAN sieht man die Kachel dann nachladen. Fehler werden
  // geschluckt: ohne Vorladen ist die App langsamer, aber nicht kaputt.
  const [imagesLoaded, setImagesLoaded] = useState(false);
  useEffect(() => {
    let active = true;
    Asset.loadAsync(preloadImages)
      .catch(() => undefined)
      .finally(() => {
        if (active) setImagesLoaded(true);
      });
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    // Der Weckruf geht vor der Sitzungsprüfung hinaus und wartet auf nichts:
    // Schläft der Server, läuft sein Start parallel zu Schriften, Bildern und
    // den ersten Eingaben des Nutzers (siehe `warmUpApi`).
    warmUpApi();
    void bootstrap();
  }, [bootstrap]);

  if (!fontsLoaded || !imagesLoaded) {
    return <View style={{ flex: 1, backgroundColor: colors.background }} />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <PersistQueryClientProvider client={queryClient} persistOptions={persistOptions}>
          <StatusBar style="dark" />
          <ErrorBoundary>
            <RootNavigator />
          </ErrorBoundary>
          <PointsCelebration />
        </PersistQueryClientProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
