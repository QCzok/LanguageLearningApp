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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RootNavigator from './src/navigation/RootNavigator';
import { useAuthStore } from './src/store/auth.store';
import { preloadImages } from './src/assets';
import { colors } from './src/theme';
import { ErrorBoundary } from './src/components/ErrorBoundary';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Mobil zählt jeder Request: lieber kurz cachen als bei jedem Fokus neu laden.
      staleTime: 60_000,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

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
    void bootstrap();
  }, [bootstrap]);

  if (!fontsLoaded || !imagesLoaded) {
    return <View style={{ flex: 1, backgroundColor: colors.background }} />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <StatusBar style="dark" />
          <ErrorBoundary>
            <RootNavigator />
          </ErrorBoundary>
        </QueryClientProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
