import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import type { LibrarySection } from '@lingua/shared';
import { Caption } from '../../components';
import { useAuthStore } from '../../store/auth.store';
import { asTranslatableLanguage, LANGUAGE_LABELS } from '../../utils/translation';
import { colors, fontFamily, radius, spacing, typography } from '../../theme';

/**
 * Ein Abschnitt eines Lesetexts – in der Regel ein Absatz.
 *
 * Drei eigenständige Aufklapp-Elemente pro Abschnitt: die Übersetzung in die
 * Muttersprache (wie die Erklärungen im Lehrwerk), und je Glossar-Begriff
 * eine kurze, einsprachige Erklärung schwieriger Wörter. Beides bleibt
 * standardmäßig eingeklappt, damit der Text selbst im Vordergrund steht –
 * nur wer nicht weiterkommt, blendet Hilfe ein.
 */
export function ReadingSection({ section }: { section: LibrarySection }) {
  const [translationOpen, setTranslationOpen] = useState(false);
  const [openTerms, setOpenTerms] = useState<Set<number>>(new Set());

  const nativeLanguage = useAuthStore((state) => state.user?.nativeLanguage);
  const language = asTranslatableLanguage(nativeLanguage);
  const languageLabel = language ? LANGUAGE_LABELS[language] : '';
  const translation = language ? section.translations?.[language] : undefined;

  function toggleTerm(index: number) {
    setOpenTerms((previous) => {
      const next = new Set(previous);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  return (
    <View style={{ gap: spacing.sm }}>
      <Text style={[typography.body, sectionText]}>{section.text}</Text>

      {section.glossary?.length ? (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: spacing.xs }}>
          {section.glossary.map((entry, index) => {
            const open = openTerms.has(index);
            return (
              <Pressable
                key={entry.term}
                onPress={() => toggleTerm(index)}
                style={[glossaryChip, open && glossaryChipOpen]}
              >
                <Text style={[glossaryChipText, open && { color: colors.textInverse }]}>{entry.term}</Text>
              </Pressable>
            );
          })}
        </View>
      ) : null}

      {section.glossary
        ?.filter((_, index) => openTerms.has(index))
        .map((entry) => (
          <View key={entry.term} style={glossaryExplanation}>
            <Text style={glossaryTerm}>{entry.term}</Text>
            <Caption>{entry.explanation}</Caption>
          </View>
        ))}

      {translation ? (
        <View style={{ gap: 4 }}>
          {translationOpen ? <Text style={translationText}>{translation}</Text> : null}
          <Pressable onPress={() => setTranslationOpen((value) => !value)} hitSlop={8}>
            <Text style={translationToggle}>
              {translationOpen ? 'Übersetzung ausblenden' : `Auf ${languageLabel} anzeigen`}
            </Text>
          </Pressable>
        </View>
      ) : null}
    </View>
  );
}

const sectionText = {
  fontSize: 17,
  lineHeight: 28,
};

const glossaryChip = {
  paddingHorizontal: spacing.sm,
  paddingVertical: 4,
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
  ...typography.caption,
  color: colors.primary,
};

const glossaryExplanation = {
  borderLeftWidth: 3,
  borderLeftColor: colors.primary,
  paddingLeft: spacing.sm,
  gap: 2,
};

const glossaryTerm = {
  ...typography.bodyStrong,
  fontSize: 14,
};

const translationToggle = {
  ...typography.label,
  color: colors.textMuted,
};

const translationText = {
  fontFamily: fontFamily.regular,
  fontSize: 16,
  lineHeight: 24,
  fontStyle: 'italic' as const,
  color: colors.textMuted,
};
