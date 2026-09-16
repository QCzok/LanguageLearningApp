import type { TranslatableLanguage } from '@lingua/shared';
import { TRANSLATABLE_LANGUAGES } from '@lingua/shared';

/**
 * Anzeige-Namen für den Umschalt-Link ("Auf Englisch anzeigen"). Dieselben
 * Sprachen wie `TRANSLATABLE_LANGUAGES`, Deutsch eingeschlossen: Im
 * Spanischkurs sind die Seiten einsprachig spanisch, und für deutschsprachige
 * Lernende ist Deutsch dort die Sprache, in die übersetzt wird. Im
 * Deutschkurs führt derselbe Eintrag zu nichts, weil die deutschen Blöcke
 * keine deutsche Übersetzung mitbringen – dann bleibt der Link aus. Wird
 * sowohl vom Lehrwerk (Kapitel-Erklärungen) als auch von der Bibliothek
 * (Lesetexte) verwendet – deshalb hier zentral statt in einem Feature.
 */
export const LANGUAGE_LABELS: Record<TranslatableLanguage, string> = {
  de: 'Deutsch',
  en: 'Englisch',
  es: 'Spanisch',
  fr: 'Französisch',
  it: 'Italienisch',
};

/** `nativeLanguage` des Nutzers ist ein freier ISO-Code – hier geprüft gegen die vier übersetzten Sprachen. */
export function asTranslatableLanguage(code: string | undefined): TranslatableLanguage | null {
  if (!code) return null;
  return (TRANSLATABLE_LANGUAGES as readonly string[]).includes(code)
    ? (code as TranslatableLanguage)
    : null;
}
