import React, { useState } from 'react';
import { Pressable, RefreshControl, ScrollView, Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { useFocusEffect } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { CardStatus, DeckItemDto } from '@lingua/shared';
import { Caption, ErrorState, LevelBadge, Loading, ProgressBar, Row } from '../../components';
import { vocabularyApi } from '../../api/endpoints';
import { useTranslation } from '../../i18n';
import type { TranslationKey } from '../../i18n';
import {
  colors,
  flashcard,
  fontFamily,
  levelColors,
  radius,
  readingLabel,
  shadow,
  spacing,
  typography,
} from '../../theme';
import { DeckStack, STACK_LABEL_KEYS, type QueueType } from './DeckStack';
import type { VocabularyStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<VocabularyStackParamList, 'DeckDetail'>;

/**
 * Ein Thema von innen: der Arbeitsplatz eines Stapels.
 *
 * Hier – und nur hier – fällt die Wahl, *wie* geübt wird: „Neue Vokabeln"
 * zeigt unbekannte Wörter als Auswahl mit fünf Bedeutungsvorschlägen, eine
 * falsche Antwort schickt die Karte sofort nach „Wiederholen", eine richtige
 * nach „Gelernt" zum Auffrischen. Jeder Stapel erscheint nur, wenn dort auch
 * etwas liegt (die Zahlen hängen an der letzten Antwort, nicht am SM-2-Timer
 * – siehe `VocabularyService.getReviewQueue`).
 *
 * Darunter steht die Wortliste des Themas, jedes Wort mit seinem Lernstand
 * als Punkt: So ist ein Stapel auch ohne Sitzung nachschlagbar – wer wissen
 * will, was in „Arbeit & Beruf" steckt, muss ihn nicht erst durchlernen.
 */
export default function DeckDetailScreen({ route, navigation }: Props) {
  const { deckId } = route.params;
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const { data, isLoading, isError, refetch, isRefetching } = useQuery({
    queryKey: ['deck', deckId],
    queryFn: () => vocabularyApi.deck(deckId),
  });

  // Nach einer Sitzung soll der Lernstand hier sofort stimmen – wie in der
  // Übersicht, nicht erst nach Ablauf der Cachezeit.
  useFocusEffect(
    React.useCallback(() => {
      void refetch();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  if (isLoading) return <Loading />;
  if (isError || !data) return <ErrorState message={t('deckError')} onRetry={refetch} />;

  const deck = data;
  const accent = levelColors[deck.level] ?? colors.primary;
  const progress = deck.progress;
  const learned = progress?.learned ?? 0;
  const percent = deck.itemCount > 0 ? Math.round((learned / deck.itemCount) * 100) : 0;
  const newCount = progress?.new ?? deck.itemCount;
  const repeatCount = progress?.needsRepeat ?? 0;

  function toggleWord(itemId: string) {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(itemId)) next.delete(itemId);
      else next.add(itemId);
      return next;
    });
  }

  function startSession(queueType: QueueType) {
    navigation.navigate('Review', {
      deckId,
      queueType,
      title: `${deck.title} · ${t(STACK_LABEL_KEYS[queueType])}`,
    });
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={['left', 'right']}>
      <ScrollView
        contentContainerStyle={{ padding: spacing.lg, gap: spacing.lg, paddingBottom: spacing.xxl }}
        refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={refetch} />}
      >
        <View style={headerCard}>
          <View style={[headRule, { backgroundColor: accent }]} />

          <Row gap={spacing.md}>
            <Text style={{ fontSize: 34 }}>{deck.iconEmoji}</Text>
            <View style={{ flex: 1, gap: 2 }}>
              <Text style={deckTitle}>{deck.title}</Text>
              {deck.description ? (
                <Text style={deckDescription} numberOfLines={2}>
                  {deck.description}
                </Text>
              ) : null}
            </View>
            <LevelBadge level={deck.level} small />
          </Row>

          <ProgressBar value={percent} color={accent} height={6} />
          <Caption>{t('deckWordsLearned', { learned, total: deck.itemCount })}</Caption>
        </View>

        <View style={{ gap: spacing.md }}>
          <SectionRule label={t('deckPracticeHeading')} />

          {newCount > 0 || repeatCount > 0 || learned > 0 ? (
            /* Drei Wege zu lernen, als Stapel nebeneinander – jeder nur, wenn dort etwas liegt. */
            <Row gap={spacing.md} style={{ alignItems: 'flex-start' }}>
              {newCount > 0 ? (
                <DeckStack
                  count={newCount}
                  label={t('vocabStackNew')}
                  hint={t('vocabHintNew')}
                  accent={colors.primary}
                  onPress={() => startSession('NEW')}
                />
              ) : null}
              {repeatCount > 0 ? (
                <DeckStack
                  count={repeatCount}
                  label={t('vocabStackRepeat')}
                  hint={t('vocabHintRepeat')}
                  accent={colors.warning}
                  onPress={() => startSession('DUE')}
                />
              ) : null}
              {learned > 0 ? (
                <DeckStack
                  count={learned}
                  label={t('vocabStackLearned')}
                  hint={t('vocabHintLearned')}
                  accent={colors.success}
                  onPress={() => startSession('MASTERED')}
                />
              ) : null}
            </Row>
          ) : (
            <Caption>{t('vocabNothingToDoTopic')}</Caption>
          )}
        </View>

        <View style={{ gap: spacing.sm }}>
          <SectionRule label={t('deckAllWords')} trailing={`${deck.items.length}`} />

          <View style={wordList}>
            {deck.items.map((item, index) => (
              <WordRow
                key={item.id}
                item={item}
                isFirst={index === 0}
                isOpen={expanded.has(item.id)}
                onToggle={() => toggleWord(item.id)}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

/**
 * Eine Zeile der Wortliste: Lernstand als Punkt, Wort, Bedeutung.
 *
 * Beispielsatz und Übersetzung liegen eingeklappt darunter – 50 Wörter mit
 * je zwei Beispielsätzen wären eine Textwand, in der nichts mehr auffindbar
 * ist. Angetippt klappt genau die eine Zeile auf.
 */
function WordRow({
  item,
  isFirst,
  isOpen,
  onToggle,
}: {
  item: DeckItemDto;
  isFirst: boolean;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const { t } = useTranslation();
  const hasDetail = Boolean(item.exampleSentence || item.phonetic);

  return (
    <Pressable
      accessibilityRole={hasDetail ? 'button' : 'text'}
      accessibilityState={hasDetail ? { expanded: isOpen } : undefined}
      onPress={hasDetail ? onToggle : undefined}
      style={({ pressed }) => [wordRow, !isFirst && wordRowDivider, pressed && hasDetail && { opacity: 0.7 }]}
    >
      <Row gap={spacing.sm}>
        <View
          accessibilityLabel={t(STATUS_LABEL_KEYS[item.status ?? 'UNSEEN'])}
          style={[statusDot, statusDotStyle(item.status)]}
        />
        <View style={{ flex: 1 }}>
          <Text style={wordTerm}>{item.term}</Text>
          <Text style={wordTranslation}>{item.translation}</Text>
        </View>
        {item.partOfSpeech ? <Text style={wordPos}>{item.partOfSpeech}</Text> : null}
      </Row>

      {isOpen ? (
        <View style={{ gap: 2, paddingLeft: spacing.lg, paddingTop: spacing.xs }}>
          {item.phonetic ? <Text style={wordPhonetic}>{item.phonetic}</Text> : null}
          {item.exampleSentence ? <Text style={wordExample}>{item.exampleSentence}</Text> : null}
          {item.exampleTranslation ? (
            <Text style={wordExampleTranslation}>{item.exampleTranslation}</Text>
          ) : null}
        </View>
      ) : null}
    </Pressable>
  );
}

/** Kolumnentitel mit durchlaufender Haarlinie – wie in der Übersicht. */
function SectionRule({ label, trailing }: { label: string; trailing?: string }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.sm }}>
      <Text style={[readingLabel, { color: colors.text }]}>{label}</Text>
      <View style={{ flex: 1, height: 1, backgroundColor: colors.border }} />
      {trailing ? <Text style={[readingLabel, { color: colors.textMuted }]}>{trailing}</Text> : null}
    </View>
  );
}

/**
 * Der Punkt vor dem Wort. Ungeübte Wörter bekommen einen leeren Ring statt
 * eines grauen Punkts – „noch nie gesehen" ist kein Lernstand, sondern das
 * Fehlen eines solchen.
 */
function statusDotStyle(status: CardStatus | null) {
  if (!status) return { borderWidth: 1.5, borderColor: flashcard.rule };
  return { backgroundColor: STATUS_COLORS[status] };
}

const STATUS_COLORS: Record<CardStatus, string> = {
  NEW: colors.textMuted,
  LEARNING: colors.warning,
  REVIEW: colors.primary,
  MASTERED: colors.success,
};

const STATUS_LABEL_KEYS: Record<CardStatus | 'UNSEEN', TranslationKey> = {
  UNSEEN: 'deckStatUnseen',
  NEW: 'deckStatNew',
  LEARNING: 'deckStatLearning',
  REVIEW: 'deckStatReview',
  MASTERED: 'deckStatMastered',
};

// ------------------------------------------------------------------ Styles

const headerCard = {
  gap: spacing.sm,
  padding: spacing.md,
  borderRadius: radius.md,
  backgroundColor: flashcard.paper,
  borderWidth: 1,
  borderColor: flashcard.edge,
  ...shadow.card,
};

const headRule = {
  height: 2,
  borderRadius: 1,
};

const deckTitle = {
  fontFamily: fontFamily.bold,
  fontSize: 19,
  lineHeight: 24,
  color: flashcard.ink,
};

const deckDescription = {
  fontFamily: fontFamily.regular,
  fontSize: 13,
  lineHeight: 18,
  color: flashcard.inkSoft,
};

const wordList = {
  borderRadius: radius.md,
  backgroundColor: colors.surface,
  borderWidth: 1,
  borderColor: colors.border,
  paddingHorizontal: spacing.md,
};

const wordRow = {
  paddingVertical: spacing.sm,
};

const wordRowDivider = {
  borderTopWidth: 1,
  borderTopColor: flashcard.rule,
};

const statusDot = {
  width: 9,
  height: 9,
  borderRadius: 5,
};

const wordTerm = {
  ...typography.bodyStrong,
  color: colors.text,
};

const wordTranslation = {
  ...typography.caption,
  color: colors.textMuted,
};

const wordPos = {
  ...readingLabel,
  fontSize: 9,
  color: flashcard.inkSoft,
};

const wordPhonetic = {
  ...typography.caption,
  color: colors.textMuted,
};

const wordExample = {
  fontFamily: fontFamily.regular,
  fontStyle: 'italic' as const,
  fontSize: 13,
  lineHeight: 18,
  color: colors.text,
};

const wordExampleTranslation = {
  fontFamily: fontFamily.regular,
  fontSize: 12.5,
  lineHeight: 17,
  color: colors.textMuted,
};
