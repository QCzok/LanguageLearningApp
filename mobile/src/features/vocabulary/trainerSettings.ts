import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import type { VocabDirection, VocabMode } from '@lingua/shared';

/** `AUTO` überlässt dem Server die Wahl je Karte (Auswahl, Tippen, Hören …). */
export type TrainerMode = 'AUTO' | Extract<VocabMode, 'MULTIPLE_CHOICE' | 'TYPING' | 'LISTENING' | 'FLASHCARD'>;

export const TRAINER_MODES: TrainerMode[] = ['AUTO', 'MULTIPLE_CHOICE', 'TYPING', 'LISTENING', 'FLASHCARD'];
export const TRAINER_DIRECTIONS: VocabDirection[] = ['FORWARD', 'REVERSE', 'MIXED'];

interface TrainerSettings {
  direction: VocabDirection;
  mode: TrainerMode;
  /** Begriffe automatisch vorlesen, sobald eine Karte erscheint. */
  autoSpeak: boolean;
  /** Bestzeit im Paare-Spiel je Stapel, in Millisekunden. */
  bestMatchTimes: Record<string, number>;
  setDirection: (direction: VocabDirection) => void;
  setMode: (mode: TrainerMode) => void;
  setAutoSpeak: (autoSpeak: boolean) => void;
  /** Speichert die Zeit, wenn sie die bisherige Bestzeit schlägt; liefert, ob das der Fall war. */
  recordMatchTime: (deckId: string, ms: number) => boolean;
}

/**
 * Wie der Nutzer üben will – Richtung, Modus, Vorlesen. Gilt für alle
 * Stapel und bleibt auf dem Gerät gespeichert: Wer einmal „Muttersprache →
 * Lernsprache" eingestellt hat, will das nicht vor jeder Runde neu wählen.
 */
export const useTrainerSettings = create<TrainerSettings>()(
  persist(
    (set, get) => ({
      direction: 'FORWARD',
      mode: 'AUTO',
      autoSpeak: true,
      bestMatchTimes: {},
      setDirection: (direction) => set({ direction }),
      setMode: (mode) => set({ mode }),
      setAutoSpeak: (autoSpeak) => set({ autoSpeak }),
      recordMatchTime: (deckId, ms) => {
        const best = get().bestMatchTimes[deckId];
        if (best !== undefined && best <= ms) return false;
        set({ bestMatchTimes: { ...get().bestMatchTimes, [deckId]: ms } });
        return true;
      },
    }),
    {
      name: 'lingua.vocab-trainer',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: ({ direction, mode, autoSpeak, bestMatchTimes }) => ({
        direction,
        mode,
        autoSpeak,
        bestMatchTimes,
      }),
    },
  ),
);
