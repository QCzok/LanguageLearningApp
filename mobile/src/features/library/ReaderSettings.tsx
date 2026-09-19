import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { READER_THEME_NAMES, reading, readerThemes } from '../../theme';
import type { ReaderTheme, ReaderThemeName } from '../../theme';

/** Was der Lesende an seiner Seite einstellen kann – und was davon gespeichert wird. */
type ReaderPreferences = {
  theme: ReaderThemeName;
  /** Index in `reading.textSizes`. */
  sizeStep: number;
  /** Index in `reading.lineHeights`. */
  lineStep: number;
  /** Index in `reading.margins`. */
  marginStep: number;
  /** Antiqua (wie im Buchdruck) oder die Grotesk der übrigen App. */
  serif: boolean;
  /** Ob die Übersetzungskästen unter den Absätzen offen stehen. */
  translations: boolean;
};

const DEFAULTS: ReaderPreferences = {
  theme: 'paper',
  sizeStep: reading.defaultSizeStep,
  lineStep: 1,
  marginStep: 1,
  serif: true,
  translations: true,
};

const STORAGE_KEY = 'lingua.reader.preferences';

type ReaderSettings = ReaderPreferences & {
  /** Das aufgelöste Farbschema – alles, was die Lesestrecke an Farbe braucht. */
  colors: ReaderTheme;
  fontSize: number;
  lineHeight: number;
  /** Zusätzlicher Seitenrand links und rechts, aus der Randstufe. */
  margin: number;
  set: <K extends keyof ReaderPreferences>(key: K, value: ReaderPreferences[K]) => void;
};

/**
 * Der Stand außerhalb des Lesers.
 *
 * Ein Absatz (`ReadingSection`) wird nicht nur im Leser gesetzt, sondern auch
 * im Kasten „Text nachlesen“ der Übungen – dort gibt es keine Leseeinstellung
 * und soll es keine geben: Der Kasten steht auf der weißen Oberfläche der App,
 * nicht auf dem gewählten Papier. Statt dort einen Anbieter aufzustellen,
 * dessen Sepia oder Nacht im weißen Kasten falsch aussähe, gilt außerhalb des
 * Lesers die Voreinstellung – helles Papier, Werkgröße, nichts zu verstellen.
 */
const OUTSIDE_READER: ReaderSettings = {
  ...DEFAULTS,
  colors: readerThemes[DEFAULTS.theme],
  fontSize: reading.textSizes[DEFAULTS.sizeStep],
  lineHeight: Math.round(reading.textSizes[DEFAULTS.sizeStep] * reading.lineHeights[DEFAULTS.lineStep]),
  margin: reading.margins[DEFAULTS.marginStep],
  set: () => undefined,
};

const ReaderSettingsContext = createContext<ReaderSettings>(OUTSIDE_READER);

/**
 * Die Leseeinstellungen – Papier, Schriftgröße, Durchschuss, Rand, Schriftart.
 *
 * Sie liegen in einem Kontext und nicht im Bildschirm selbst, weil sie tief
 * unten gebraucht werden: der Absatz (`ReadingSection`) und der Zettel zum
 * Wort (`GlossaryPopover`) müssen dieselben Farben und dieselbe Größe treffen
 * wie die Seite um sie herum. Sie durch drei Ebenen als Prop zu reichen wäre
 * bei jedem neuen Baustein derselbe Handgriff noch einmal.
 *
 * Gespeichert wird in `AsyncStorage`: Wer sein Papier einmal auf Sepia gestellt
 * hat, will es beim nächsten Text wiederfinden – so hält es jeder E-Book-Leser.
 * Bis der gespeicherte Stand da ist, zeigt der Leser nichts (siehe `hydrated`);
 * lieber ein Wimpernschlag länger leer als der Text erst in Weiß und dann in
 * Sepia.
 */
export function ReaderSettingsProvider({ children }: { children: React.ReactNode }) {
  const [preferences, setPreferences] = useState<ReaderPreferences>(DEFAULTS);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    let active = true;
    AsyncStorage.getItem(STORAGE_KEY)
      .then((raw) => {
        if (active && raw) setPreferences(sanitize(raw));
      })
      // Ohne gespeicherten Stand liest man in der Voreinstellung – kein Fehlerfall.
      .catch(() => undefined)
      .finally(() => {
        if (active) setHydrated(true);
      });
    return () => {
      active = false;
    };
  }, []);

  const value = useMemo<ReaderSettings>(() => {
    const fontSize = reading.textSizes[clampIndex(preferences.sizeStep, reading.textSizes.length)];
    const ratio = reading.lineHeights[clampIndex(preferences.lineStep, reading.lineHeights.length)];

    return {
      ...preferences,
      colors: readerThemes[preferences.theme],
      fontSize,
      lineHeight: Math.round(fontSize * ratio),
      margin: reading.margins[clampIndex(preferences.marginStep, reading.margins.length)],
      set: (key, next) =>
        setPreferences((current) => {
          const updated = { ...current, [key]: next };
          // Schreiben, ohne darauf zu warten: die Einstellung greift sofort auf
          // dem Bildschirm, die Platte darf hinterherkommen.
          void AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated)).catch(() => undefined);
          return updated;
        }),
    };
  }, [preferences]);

  if (!hydrated) return null;

  return <ReaderSettingsContext.Provider value={value}>{children}</ReaderSettingsContext.Provider>;
}

export function useReaderSettings(): ReaderSettings {
  return useContext(ReaderSettingsContext);
}

/** Kurzform für den häufigsten Fall: nur die Farben der Seite. */
export function useReaderColors(): ReaderTheme {
  return useReaderSettings().colors;
}

/**
 * Gelesen wird, was in der Ablage steht – nicht, was dort stehen sollte. Eine
 * alte App-Version, ein halb geschriebener Eintrag oder eine später entfernte
 * Farbe dürfen den Leser nicht mit einem undefinierten Papier starten lassen,
 * deshalb wird jeder Wert einzeln gegen die Voreinstellung geprüft.
 */
function sanitize(raw: string): ReaderPreferences {
  try {
    const stored = JSON.parse(raw) as Partial<ReaderPreferences>;
    return {
      theme: READER_THEME_NAMES.includes(stored.theme as ReaderThemeName)
        ? (stored.theme as ReaderThemeName)
        : DEFAULTS.theme,
      sizeStep: index(stored.sizeStep, reading.textSizes.length, DEFAULTS.sizeStep),
      lineStep: index(stored.lineStep, reading.lineHeights.length, DEFAULTS.lineStep),
      marginStep: index(stored.marginStep, reading.margins.length, DEFAULTS.marginStep),
      serif: typeof stored.serif === 'boolean' ? stored.serif : DEFAULTS.serif,
      translations:
        typeof stored.translations === 'boolean' ? stored.translations : DEFAULTS.translations,
    };
  } catch {
    return DEFAULTS;
  }
}

function index(value: unknown, length: number, fallback: number) {
  return Number.isInteger(value) && (value as number) >= 0 && (value as number) < length
    ? (value as number)
    : fallback;
}

function clampIndex(value: number, length: number) {
  return Math.max(0, Math.min(length - 1, value));
}
