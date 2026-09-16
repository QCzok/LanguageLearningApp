/**
 * Die Menü- und Bedientexte der App in allen unterstützten Muttersprachen.
 *
 * Deutsch (`locales/de.ts`) ist die Quelle: Der Schlüsselvorrat leitet sich
 * daraus ab, und jede andere Locale wird gegen `TranslationDictionary`
 * getypt – ein vergessener Schlüssel fällt damit beim Kompilieren auf und
 * nicht erst als Lücke auf dem Bildschirm.
 *
 * Was hier *nicht* steht: Inhalte. Lektionstexte, Vokabeln, Lesetexte und
 * KI-Antworten kommen vom Server und stehen in der Zielsprache bzw. – wo eine
 * Übersetzung hinterlegt ist – in der Muttersprache des Lernenden (siehe
 * `utils/translation.ts`).
 */
import { de } from './locales/de';
import { en } from './locales/en';
import { es } from './locales/es';
import { fr } from './locales/fr';
import { it } from './locales/it';

export type TranslationKey = keyof typeof de;
export type TranslationDictionary = Record<TranslationKey, string>;

export const translations = { de, en, es, fr, it } satisfies Record<string, TranslationDictionary>;

export type SupportedLocale = keyof typeof translations;

export const SUPPORTED_LOCALES = Object.keys(translations) as SupportedLocale[];

/**
 * Die Sprache des Geräts, auf eine unterstützte Locale heruntergebrochen.
 *
 * `Intl` liegt in Hermes wie im Browser vor; schlägt die Abfrage trotzdem
 * fehl (alte Engine ohne Intl, abgeschaltete Systemschnittstelle), bleibt es
 * bei Englisch. Absichtlich kein `expo-localization`: Für einen zweistelligen
 * Sprachcode lohnt keine zusätzliche Abhängigkeit.
 *
 * Steht hier und nicht in `useTranslation`, weil der Auth-Store die Funktion
 * bei der Registrierung braucht – ein Import von dort auf den Hook und
 * zurück wäre ein Zyklus.
 */
export function deviceLocale(): SupportedLocale {
  try {
    const tag =
      typeof navigator !== 'undefined' && navigator.language
        ? navigator.language
        : Intl.DateTimeFormat().resolvedOptions().locale;
    const base = tag.split(/[-_]/)[0]?.toLowerCase() ?? '';
    if ((SUPPORTED_LOCALES as string[]).includes(base)) return base as SupportedLocale;
  } catch {
    // Keine Intl-Unterstützung – dann eben die Vorgabe.
  }
  return 'en';
}

/**
 * `nativeLanguage` ist ein freier ISO-Code aus dem Profil.
 *
 * Steht dort eine Sprache, für die es die Oberfläche gibt, gilt sie. Sonst
 * entscheidet die Gerätesprache – wer noch kein Konto hat (Anmeldung,
 * Registrierung), bekommt die App damit trotzdem in seiner Sprache zu sehen.
 * Zuvor war Deutsch die feste Rückfallebene; ein englischsprachiger Lernender
 * mit Zielsprache Spanisch landete so in einer deutschen Oberfläche.
 */
export function resolveLocale(nativeLanguage: string | undefined): SupportedLocale {
  return (SUPPORTED_LOCALES as string[]).includes(nativeLanguage ?? '')
    ? (nativeLanguage as SupportedLocale)
    : deviceLocale();
}

/** Werte für die Platzhalter einer Zeichenkette: `{count}` → `{ count: 3 }`. */
export type TranslationParams = Record<string, string | number>;

/**
 * Setzt die Platzhalter einer Zeichenkette. Ein Platzhalter ohne passenden
 * Wert bleibt unverändert stehen – so ist im Zweifel im Text zu sehen, was
 * fehlt, statt dass dort ein „undefined“ landet.
 */
export function interpolate(template: string, params?: TranslationParams): string {
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (match, name: string) =>
    name in params ? String(params[name]) : match,
  );
}

/**
 * Übersetzt außerhalb von React-Komponenten (Store, API-Schicht). In
 * Komponenten nimmt man `useTranslation`, damit ein Sprachwechsel im Profil
 * sofort neu rendert.
 */
export function translate(
  locale: SupportedLocale,
  key: TranslationKey,
  params?: TranslationParams,
): string {
  return interpolate(translations[locale][key] ?? translations.de[key], params);
}
