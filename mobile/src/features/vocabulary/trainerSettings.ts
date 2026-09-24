import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import type { VocabDirection } from '@lingua/shared';

/**
 * Die Übungsarten auf der Startseite des Trainers. `MIX` überlässt dem
 * Server die Wahl je Karte (Auswahl, Paare, Aussprechen).
 */
export type TrainerMode = 'MULTIPLE_CHOICE' | 'MATCHING' | 'SPEAKING' | 'MIX';

export const TRAINER_MODES: TrainerMode[] = ['MULTIPLE_CHOICE', 'MATCHING', 'SPEAKING', 'MIX'];
export const TRAINER_DIRECTIONS: VocabDirection[] = ['FORWARD', 'REVERSE', 'MIXED'];

/** Schlüssel für Bestzeiten, wenn aus allen Kategorien geübt wird. */
export const ALL_CATEGORIES = 'all';

interface TrainerSettings {
  direction: VocabDirection;
  /** Die gewählte Kategorie – `null` heißt: zufällig aus allen. */
  deckId: string | null;
  /** Begriffe automatisch vorlesen, sobald eine Karte erscheint. */
  autoSpeak: boolean;
  /** Bestzeit im Paare-Spiel je Kategorie (oder `ALL_CATEGORIES`), in Millisekunden. */
  bestMatchTimes: Record<string, number>;
  setDirection: (direction: VocabDirection) => void;
  setDeckId: (deckId: string | null) => void;
  setAutoSpeak: (autoSpeak: boolean) => void;
  /** Speichert die Zeit, wenn sie die bisherige Bestzeit schlägt; liefert, ob das der Fall war. */
  recordMatchTime: (key: string, ms: number) => boolean;
}

/**
 * Wie der Nutzer üben will – Richtung, Kategorie, Vorlesen. Bleibt auf dem
 * Gerät gespeichert: Wer einmal „Muttersprache → Lernsprache" oder eine
 * Kategorie gewählt hat, will das nicht vor jeder Runde neu wählen.
 */
export const useTrainerSettings = create<TrainerSettings>()(
  persist(
    (set, get) => ({
      direction: 'FORWARD',
      deckId: null,
      autoSpeak: true,
      bestMatchTimes: {},
      setDirection: (direction) => set({ direction }),
      setDeckId: (deckId) => set({ deckId }),
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
      partialize: ({ direction, deckId, autoSpeak, bestMatchTimes }) => ({
        direction,
        deckId,
        autoSpeak,
        bestMatchTimes,
      }),
    },
  ),
);
