import React, { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import type { LibrarySection } from '@lingua/shared';
import { useTranslation } from '../../i18n';
import { useAuthStore } from '../../store/auth.store';
import { asTranslatableLanguage } from '../../utils/translation';
import { colors, fontFamily, radius, reading, readingLabel, spacing } from '../../theme';

/**
 * Ein Abschnitt eines Lesetexts – in der Regel ein Absatz.
 *
 * Der Absatz selbst ist das Einzige, was ohne Zutun sichtbar ist. Alles
 * andere ist „Apparat“ am Rand des Satzspiegels, wie in einer kommentierten
 * Ausgabe: je Glossar-Begriff eine kurze einsprachige Erklärung und die
 * Übersetzung in die Muttersprache. Beides bleibt eingeklappt – nur wer nicht
 * weiterkommt, blendet es ein.
 *
 * Gestaltet ist der Apparat deshalb bewusst leiser als der Text: getönte
 * Fläche statt Karte, Haarlinie in der Leitfarbe statt Rahmen, gesperrte
 * Versalien als Etikett. Er soll als Randbemerkung zu lesen sein, nicht als
 * zweite Ebene, die mit dem Absatz um Aufmerksamkeit konkurriert.
 */
export function ReadingSection({
  section,
  fontSize = reading.textSizes[1],
  dropCap = false,
  translationsOpen = false,
}: {
  section: LibrarySection;
  /** Vom Lesekopf eingestellte Schriftgröße (siehe `ReaderScreen`). */
  fontSize?: number;
  /** Nur der erste Absatz eines Texts bekommt die Initiale. */
  dropCap?: boolean;
  /** Stand des „Alle Übersetzungen“-Schalters im Lesekopf. */
  translationsOpen?: boolean;
}) {
  const [translationOpen, setTranslationOpen] = useState(translationsOpen);
  const [openTerms, setOpenTerms] = useState<Set<number>>(new Set());

  // Der Schalter im Lesekopf setzt alle Absätze gleichzeitig; danach kann
  // jeder Absatz wieder für sich auf- und zugeklappt werden.
  useEffect(() => setTranslationOpen(translationsOpen), [translationsOpen]);

  const { t, tLanguage } = useTranslation();
  const nativeLanguage = useAuthStore((state) => state.user?.nativeLanguage);
  const language = asTranslatableLanguage(nativeLanguage);
  const languageLabel = language ? tLanguage(language) : '';
  const translation = language ? section.translations?.[language] : undefined;

  function toggleTerm(index: number) {
    setOpenTerms((previous) => {
      const next = new Set(previous);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  const lineHeight = Math.round(fontSize * reading.lineHeightRatio);
  // Die Initiale trägt nur, wenn der Absatz mit einem Buchstaben beginnt –
  // bei einem Anführungszeichen oder einer Ziffer sähe sie wie ein Fehler aus.
  // Geprüft wird über den Groß-/Kleinschreibungs-Unterschied statt über eine
  // Buchstabenliste: das gilt für jedes lateinische Alphabet, das die App
  // unterstützt, ohne dass Umlaute einzeln aufgezählt werden müssten.
  const first = section.text.charAt(0);
  const initial = dropCap && first.toLowerCase() !== first.toUpperCase() ? first : null;

  return (
    <View style={{ gap: spacing.sm }}>
      <Text style={[bodyText, { fontSize, lineHeight }]}>
        {initial ? (
          <Text style={[initialStyle, { fontSize: fontSize * 2.1, lineHeight: lineHeight * 1.25 }]}>
            {initial}
          </Text>
        ) : null}
        {initial ? section.text.slice(1) : section.text}
      </Text>

      {section.glossary?.length ? (
        <View style={{ gap: spacing.sm, marginTop: spacing.xs }}>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: spacing.xs, alignItems: 'center' }}>
            <Text style={apparatusLabel}>{t('readingWordsLabel')}</Text>
            {section.glossary.map((entry, index) => {
              const open = openTerms.has(index);
              return (
                <Pressable
                  key={entry.term}
                  accessibilityRole="button"
                  accessibilityState={{ expanded: open }}
                  onPress={() => toggleTerm(index)}
                  style={[glossaryChip, open && glossaryChipOpen]}
                >
                  <Text style={[glossaryChipText, open && { color: colors.textInverse }]}>
                    {entry.term}
                  </Text>
                </Pressable>
              );
            })}
          </View>

          {section.glossary
            .filter((_, index) => openTerms.has(index))
            .map((entry) => (
              <View key={entry.term} style={apparatusPanel}>
                <Text style={glossaryTerm}>{entry.term}</Text>
                <Text style={apparatusText}>{entry.explanation}</Text>
              </View>
            ))}
        </View>
      ) : null}

      {translation ? (
        <View style={{ gap: spacing.sm, marginTop: spacing.xs }}>
          {translationOpen ? (
            <View style={apparatusPanel}>
              <Text style={apparatusLabel}>{languageLabel}</Text>
              <Text style={[translationText, { fontSize: fontSize - 2, lineHeight: lineHeight - 4 }]}>
                {translation}
              </Text>
            </View>
          ) : null}

          <Pressable
            accessibilityRole="button"
            accessibilityState={{ expanded: translationOpen }}
            onPress={() => setTranslationOpen((value) => !value)}
            hitSlop={8}
            style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.sm }}
          >
            <Text style={translationToggle}>
              {translationOpen
                ? t('blockHideTranslation')
                : t('readingReadInLanguage', { language: languageLabel })}
            </Text>
            <View style={toggleRule} />
          </Pressable>
        </View>
      ) : null}
    </View>
  );
}

const bodyText = {
  fontFamily: fontFamily.regular,
  color: reading.ink,
};

/**
 * Initiale des ersten Absatzes. Eine echte, vom Text umflossene Initiale kann
 * React Native nicht setzen – ein deutlich größerer erster Buchstabe in
 * derselben Zeile kommt dem Bild eines gedruckten Textanfangs am nächsten und
 * kostet keine Sonderbehandlung des Umbruchs.
 */
const initialStyle = {
  fontFamily: fontFamily.bold,
  color: colors.primary,
};

const apparatusLabel = {
  ...readingLabel,
  color: reading.inkFaint,
  marginRight: spacing.xs,
};

const glossaryChip = {
  paddingHorizontal: spacing.sm,
  paddingVertical: 3,
  borderRadius: radius.full,
  borderWidth: 1,
  borderStyle: 'dashed' as const,
  borderColor: colors.primary,
  backgroundColor: colors.primarySoft,
};

const glossaryChipOpen = {
  backgroundColor: colors.primary,
  borderStyle: 'solid' as const,
};

const glossaryChipText = {
  fontFamily: fontFamily.semiBold,
  fontSize: 12,
  fontWeight: '600' as const,
  color: colors.primary,
};

/** Gemeinsame Fläche für Worterklärung und Übersetzung – getöntes Papier mit Haarlinie. */
const apparatusPanel = {
  backgroundColor: reading.paperDeep,
  borderRadius: radius.md,
  borderLeftWidth: 3,
  borderLeftColor: colors.primary,
  paddingVertical: spacing.sm,
  paddingHorizontal: spacing.md,
  gap: 2,
};

const glossaryTerm = {
  fontFamily: fontFamily.semiBold,
  fontSize: 14,
  fontWeight: '600' as const,
  color: reading.ink,
};

const apparatusText = {
  fontFamily: fontFamily.regular,
  fontSize: 14,
  lineHeight: 21,
  color: reading.inkSoft,
};

const translationText = {
  fontFamily: fontFamily.regular,
  fontStyle: 'italic' as const,
  color: reading.inkSoft,
};

const translationToggle = {
  ...readingLabel,
  color: reading.inkFaint,
};

/** Die Linie hinter dem Schalter füllt die Zeile aus, wie eine Kolumnenlinie. */
const toggleRule = {
  flex: 1,
  height: 1,
  backgroundColor: reading.rule,
};
