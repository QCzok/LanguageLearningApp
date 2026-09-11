import { useCallback, useMemo } from 'react';
import { useAuthStore } from '../store/auth.store';
import { SUPPORTED_LOCALES, translations, type SupportedLocale, type TranslationKey } from './translations';

/** `nativeLanguage` ist ein freier ISO-Code – hier auf eine unterstützte Menü-Locale abgebildet, sonst Deutsch. */
export function resolveLocale(nativeLanguage: string | undefined): SupportedLocale {
  return (SUPPORTED_LOCALES as string[]).includes(nativeLanguage ?? '')
    ? (nativeLanguage as SupportedLocale)
    : 'de';
}

/**
 * Übersetzt Texte der Menüführung anhand der Muttersprache aus dem Profil.
 * Deckt aktuell Tab-Leiste und Bildschirmtitel ab (siehe `translations.ts`);
 * weitere Bildschirme werden schrittweise ergänzt.
 */
export function useTranslation() {
  const nativeLanguage = useAuthStore((state) => state.user?.nativeLanguage);
  const locale = useMemo(() => resolveLocale(nativeLanguage), [nativeLanguage]);

  const t = useCallback((key: TranslationKey) => translations[locale][key], [locale]);

  return { t, locale };
}
