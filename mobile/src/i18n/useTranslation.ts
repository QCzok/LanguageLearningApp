import { useCallback, useMemo } from 'react';
import type { CefrLevel, VocabMode, WorkbookBook } from '@lingua/shared';
import { useAuthStore } from '../store/auth.store';
import {
  resolveLocale,
  translate,
  type TranslationKey,
  type TranslationParams,
} from './translations';

/**
 * Übersetzt die Oberfläche anhand der Muttersprache aus dem Profil.
 *
 * `t('key')` liefert den Text, `t('key', { count: 3 })` setzt zusätzlich die
 * Platzhalter. Die abgeleiteten Helfer daneben (`tLevel`, `tBook`, …) decken
 * die Fälle ab, in denen ein Schlüssel aus einem Wert des gemeinsamen Pakets
 * gebildet wird – so bleibt an der Aufrufstelle eine Zeile stehen statt einer
 * Tabelle.
 */
export function useTranslation() {
  const nativeLanguage = useAuthStore((state) => state.user?.nativeLanguage);
  const locale = useMemo(() => resolveLocale(nativeLanguage), [nativeLanguage]);

  const t = useCallback(
    (key: TranslationKey, params?: TranslationParams) => translate(locale, key, params),
    [locale],
  );

  return useMemo(
    () => ({
      t,
      locale,

      /** Kurzname und Beschreibung einer GER-Stufe (ersetzt `CEFR_LABELS`). */
      tLevelShort: (level: CefrLevel) => t(`cefr${level}Short` as TranslationKey),
      tLevelDescription: (level: CefrLevel) => t(`cefr${level}Description` as TranslationKey),

      /** Titel, Untertitel und Beschreibung eines Buchs (ersetzt `BOOK_LABELS`). */
      tBookLabel: (book: WorkbookBook) => t(BOOK_KEYS[book].label),
      tBookSubtitle: (book: WorkbookBook) => t(BOOK_KEYS[book].subtitle),
      tBookDescription: (book: WorkbookBook) => t(BOOK_KEYS[book].description),

      /** Anzeigename einer Sprache – der Sprachname aus der API ist deutsch. */
      tLanguage: (code: string, fallback?: string) =>
        (LANGUAGE_KEYS[code] ? t(LANGUAGE_KEYS[code]) : undefined) ?? fallback ?? code,

      /** Beschriftung eines Lernmodus im Vokabeltrainer. */
      tVocabMode: (mode: VocabMode) => t(VOCAB_MODE_KEYS[mode]),

      /** Datum und Uhrzeit in der Schreibweise der Menüsprache. */
      formatDate: (iso: string, options?: Intl.DateTimeFormatOptions) =>
        new Date(iso).toLocaleDateString(locale, options),
      formatTime: (iso: string) =>
        new Date(iso).toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' }),
    }),
    [t, locale],
  );
}

const BOOK_KEYS: Record<
  WorkbookBook,
  { label: TranslationKey; subtitle: TranslationKey; description: TranslationKey }
> = {
  BEGINNER: {
    label: 'bookBeginnerLabel',
    subtitle: 'bookBeginnerSubtitle',
    description: 'bookBeginnerDescription',
  },
  INTERMEDIATE: {
    label: 'bookIntermediateLabel',
    subtitle: 'bookIntermediateSubtitle',
    description: 'bookIntermediateDescription',
  },
  ADVANCED: {
    label: 'bookAdvancedLabel',
    subtitle: 'bookAdvancedSubtitle',
    description: 'bookAdvancedDescription',
  },
  GRAMMAR: {
    label: 'bookGrammarLabel',
    subtitle: 'bookGrammarSubtitle',
    description: 'bookGrammarDescription',
  },
};

const LANGUAGE_KEYS: Record<string, TranslationKey> = {
  de: 'languageDe',
  en: 'languageEn',
  es: 'languageEs',
  fr: 'languageFr',
  it: 'languageIt',
};

const VOCAB_MODE_KEYS: Record<VocabMode, TranslationKey> = {
  FLASHCARD: 'reviewModeFlashcard',
  MULTIPLE_CHOICE: 'reviewModeChoice',
  TYPING: 'reviewModeTyping',
  LISTENING: 'reviewModeListening',
  MATCHING: 'reviewModeMatching',
};
