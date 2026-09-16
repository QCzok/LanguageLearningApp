import { TRANSLATABLE_LANGUAGES } from '@lingua/shared';
import type { TranslatableLanguage } from '@lingua/shared';

/**
 * `nativeLanguage` des Nutzers ist ein freier ISO-Code – hier geprüft gegen
 * die Sprachen, für die im Inhalt Übersetzungen hinterlegt sind.
 *
 * Wird sowohl vom Lehrwerk (Kapitel-Erklärungen) als auch von der Bibliothek
 * (Lesetexte) verwendet – deshalb hier zentral statt in einem Feature.
 * Deutsch ist eingeschlossen: Im Spanischkurs sind die Seiten einsprachig
 * spanisch, und für deutschsprachige Lernende ist Deutsch dort die Sprache,
 * in die übersetzt wird. Im Deutschkurs führt derselbe Eintrag zu nichts,
 * weil die deutschen Blöcke keine deutsche Übersetzung mitbringen – dann
 * bleibt der Umschalt-Link aus.
 *
 * Die Anzeigenamen der Sprachen stehen nicht mehr hier, sondern in der
 * Menü-Übersetzung: `useTranslation().tLanguage(code)` gibt den Namen in der
 * Muttersprache des Lernenden aus, nicht auf Deutsch.
 */
export function asTranslatableLanguage(code: string | undefined): TranslatableLanguage | null {
  if (!code) return null;
  return (TRANSLATABLE_LANGUAGES as readonly string[]).includes(code)
    ? (code as TranslatableLanguage)
    : null;
}
