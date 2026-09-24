import * as Speech from 'expo-speech';

/** Unsere Sprachcodes sind zweistellig (de, en, …) – die Sprachausgabe braucht BCP-47-Tags. */
const SPEECH_LOCALES: Record<string, string> = {
  de: 'de-DE',
  en: 'en-GB',
  es: 'es-ES',
  fr: 'fr-FR',
  it: 'it-IT',
};

/** Das BCP-47-Tag einer Lernsprache – für Sprachausgabe und Spracherkennung. */
export function speechLocale(languageCode: string | undefined): string {
  return SPEECH_LOCALES[languageCode ?? ''] ?? 'en-GB';
}

/**
 * Liest einen Begriff vor. Klammerzusätze wie „(Plural)" oder „(colour)"
 * sind Lesehilfen der Wortliste und werden nicht mitgesprochen.
 */
export async function speakTerm(text: string, languageCode: string | undefined): Promise<void> {
  const spoken = text.replace(/\([^)]*\)/g, '').trim();
  if (!spoken) return;
  try {
    await Speech.stop();
    Speech.speak(spoken, { language: speechLocale(languageCode), rate: 0.9 });
  } catch {
    // Keine Sprachausgabe auf dem Gerät – das Üben geht auch ohne.
  }
}

export function stopSpeaking(): void {
  void Speech.stop().catch(() => undefined);
}
