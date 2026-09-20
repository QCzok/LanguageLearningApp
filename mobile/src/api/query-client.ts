import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';
import { QueryClient } from '@tanstack/react-query';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import type { PersistQueryClientOptions } from '@tanstack/react-query-persist-client';

/**
 * Cache-Politik der App.
 *
 * Der Server läuft auf einem Tarif, der die Instanz schlafen legt; eine Antwort
 * kostet dort regelmäßig drei bis fünf Sekunden. Ohne Cache zahlte die App
 * diesen Preis bei *jedem* Tippen auf einen Tab – vier Bildschirme hintereinander
 * waren rund sechzehn Sekunden Wartezeit vor einem Spinner.
 *
 * Deshalb zwei Ebenen:
 *
 * 1. Im Speicher hält React Query die Antworten über `gcTime` hinweg, auch wenn
 *    kein Bildschirm sie gerade anzeigt. Zurück auf einen Tab heißt damit: Daten
 *    sind sofort da, eine eventuelle Aktualisierung läuft still dahinter.
 * 2. Auf der Platte liegt derselbe Cache in AsyncStorage. Nach einem Neustart
 *    der App steht der letzte Stand sofort auf dem Schirm, statt dass alles von
 *    vorn geladen wird.
 *
 * Die Zahlen unten richten sich danach, wie schnell die jeweiligen Daten
 * tatsächlich veralten – nicht danach, wie „frisch“ sie sich anfühlen sollen.
 */
export const CACHE = {
  /** Sprachliste, Einstufungsfragen: ändert sich zwischen zwei Releases nicht. */
  STATIC: 24 * 60 * 60 * 1000,
  /**
   * Lehrwerk, Bibliothek, Videos, Vokabeldecks: redaktionelle Inhalte. Sie
   * ändern sich nur, wenn jemand sie neu einspielt – eine Stunde ist reichlich.
   */
  CONTENT: 60 * 60 * 1000,
  /**
   * Fortschritt, Statistik, Startseite: hängt am eigenen Tun. Der Cache zeigt
   * sofort den letzten Stand, dahinter wird nachgeladen. Die Mutationen, die
   * den Fortschritt ändern, entwerten die Schlüssel ohnehin gezielt – diese
   * Zeit ist nur das Netz darunter.
   */
  PROGRESS: 2 * 60 * 1000,
} as const;

/**
 * Wie lange eine Antwort im Cache überlebt, nachdem der letzte Bildschirm sie
 * losgelassen hat. Eine Woche: So lange soll ein Lernender die App wieder
 * öffnen können und seinen Stand sofort sehen, auch ohne Netz.
 */
const GC_TIME = 7 * 24 * 60 * 60 * 1000;

/**
 * Abfragen, die *nicht* auf die Platte gehören.
 *
 * `review-queue` ist eine Sitzung, keine Information: Eine gespeicherte
 * Warteschlange von gestern nach dem Neustart weiterzureichen, würde Karten
 * abfragen, die längst fällig gerechnet wurden. `placement` ist während eines
 * Durchlaufs bewusst eingefroren und danach wertlos.
 */
const NOT_PERSISTED = new Set(['review-queue', 'placement']);

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: CACHE.CONTENT,
      gcTime: GC_TIME,
      retry: 1,
      // Beim Wiedereinblenden nicht blind neu laden – der Cache genügt, bis er
      // abgelaufen ist. Sonst wäre die zweite Ebene oben wirkungslos.
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      // Nach einem Netzwechsel lohnt der Nachschlag: Was im Funkloch nicht
      // ankam, soll ankommen, sobald wieder Verbindung besteht.
      refetchOnReconnect: true,
    },
  },
});

const persister = createAsyncStoragePersister({
  storage: AsyncStorage,
  key: 'lingua.queryCache',
  // Nicht bei jeder Antwort schreiben: Der Cache wird gesammelt weggeschrieben.
  throttleTime: 2_000,
});

export const persistOptions: Omit<PersistQueryClientOptions, 'queryClient'> = {
  persister,
  maxAge: GC_TIME,
  /**
   * Die Version der App bricht den gespeicherten Cache. Ändert ein Release das
   * Format einer Antwort, hydriert die neue App sonst alte Daten in neue
   * Komponenten – ein Fehler, der nur bei Updates auftritt und deshalb kaum
   * auffällt, bis er bei allen gleichzeitig auftritt.
   */
  buster: Constants.expoConfig?.version ?? 'dev',
  dehydrateOptions: {
    shouldDehydrateQuery: (query) => {
      if (query.state.status !== 'success') return false;
      const root = query.queryKey[0];
      return typeof root === 'string' ? !NOT_PERSISTED.has(root) : true;
    },
  },
};

/**
 * Cache leeren – im Speicher und auf der Platte.
 *
 * Beim Profilwechsel und beim Verlassen des Profils: Die Daten des einen
 * Lernenden dürfen nicht im Bildschirm des nächsten auftauchen, und ein
 * `invalidateQueries` allein würde sie genau dafür kurz stehen lassen, während
 * nachgeladen wird.
 */
export async function resetQueryCache(): Promise<void> {
  queryClient.clear();
  await persister.removeClient();
}
