import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

/** Schlüssel für Bestzeiten, wenn aus allen Kategorien geübt wird. */
export const ALL_CATEGORIES = 'all';

interface TrainerSettings {
  /** Die zuletzt gewählten Kategorien – Vorauswahl im dritten Schritt. */
  deckIds: string[];
  /** Begriffe automatisch vorlesen, sobald eine Karte erscheint. */
  autoSpeak: boolean;
  /** Bestzeit im Paare-Spiel je Kategorie (oder `ALL_CATEGORIES`), in Millisekunden. */
  bestMatchTimes: Record<string, number>;
  setDeckIds: (deckIds: string[]) => void;
  setAutoSpeak: (autoSpeak: boolean) => void;
  /** Speichert die Zeit, wenn sie die bisherige Bestzeit schlägt; liefert, ob das der Fall war. */
  recordMatchTime: (key: string, ms: number) => boolean;
}

/**
 * Wie der Nutzer üben will – Kategorien, Vorlesen. Bleibt auf dem Gerät
 * gespeichert: Wer einmal seine Kategorien angehakt hat, will das nicht vor
 * jeder Runde neu tun.
 */
export const useTrainerSettings = create<TrainerSettings>()(
  persist(
    (set, get) => ({
      deckIds: [],
      autoSpeak: true,
      bestMatchTimes: {},
      setDeckIds: (deckIds) => set({ deckIds }),
      setAutoSpeak: (autoSpeak) => set({ autoSpeak }),
      recordMatchTime: (key, ms) => {
        const best = get().bestMatchTimes[key];
        if (best !== undefined && best <= ms) return false;
        set({ bestMatchTimes: { ...get().bestMatchTimes, [key]: ms } });
        return true;
      },
    }),
    {
      name: 'lingua.vocab-trainer',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: ({ deckIds, autoSpeak, bestMatchTimes }) => ({ deckIds, autoSpeak, bestMatchTimes }),
    },
  ),
);
