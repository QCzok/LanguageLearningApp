import type { TranslatableLanguage } from '@lingua/shared';
import { TRANSLATABLE_LANGUAGES } from '@lingua/shared';

/**
 * Anzeige-Namen für den Umschalt-Link ("Auf Englisch anzeigen"). Dieselben
 * vier Sprachen wie `TRANSLATABLE_LANGUAGES` – die Auswahl im Profil bietet
 * zusätzlich Deutsch an, das braucht hier aber keinen Eintrag, weil bei
 * Deutsch als Muttersprache nichts zu übersetzen ist.
 */
export const LANGUAGE_LABELS: Record<TranslatableLanguage, string> = {
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
