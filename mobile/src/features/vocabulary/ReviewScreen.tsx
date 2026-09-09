import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { GRADE_BUTTONS } from '@lingua/shared';
import type { ReviewCardDto, VocabMode } from '@lingua/shared';
import {
  Body,
  Button,
  Caption,
  Card,
  EmptyState,
  ErrorState,
  Heading,
  Loading,
  ProgressBar,
  Row,
  Screen,
  Title,
} from '../../components';
import { vocabularyApi } from '../../api/endpoints';
import { colors, radius, spacing, typography } from '../../theme';
import type { VocabularyStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<VocabularyStackParamList, 'Review'>;

interface SessionSummary {
  reviewed: number;
  correct: number;
  xp: number;
}

/**
 * Lernsitzung des Vokabeltrainers.
 *
 * Die Warteschlange kommt einmal vom Server und wird lokal abgearbeitet; jede
 * Bewertung geht sofort ans Backend, damit ein Abbruch keinen Fortschritt kostet.
 * Die eigentliche SM-2-Rechnung passiert serverseitig – hier zählt nur die Note.
 */
export default function ReviewScreen({ route, navigation }: Props) {
  const { deckId } = route.params;
  const queryClient = useQueryClient();

  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [typedAnswer, setTypedAnswer] = useState('');
  const [choiceIndex, setChoiceIndex] = useState<number | null>(null);
  const [summary, setSummary] = useState<SessionSummary>({ reviewed: 0, correct: 0, xp: 0 });
  const shownAt = useRef(Date.now());

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['review-queue', deckId ?? 'all'],
    queryFn: () => vocabularyApi.queue({ deckId, limit: 20 }),
    staleTime: 0,
    gcTime: 0, // Eine Sitzung ist einmalig – nichts davon soll wiederverwendet werden.
  });

  const submit = useMutation({
    mutationFn: vocabularyApi.review,
    onSuccess: (result) => {
      setSummary((prev) => ({
        reviewed: prev.reviewed + 1,
        correct: prev.correct + (result.correct ? 1 : 0),
        xp: prev.xp + result.xpEarned,
      }));
    },
  });

  const cards = data ?? [];
  const card = cards[index];

  const advance = useCallback(() => {
    setRevealed(false);
    setTypedAnswer('');
    setChoiceIndex(null);
    shownAt.current = Date.now();
    setIndex((value) => value + 1);
  }, []);

  // Am Ende der Sitzung müssen Decks, Statistik und Dashboard neu geladen werden.
  useEffect(() => {
    if (cards.length > 0 && index >= cards.length) {
      void queryClient.invalidateQueries({ queryKey: ['decks'] });
      void queryClient.invalidateQueries({ queryKey: ['vocab-stats'] });
      void queryClient.invalidateQueries({ queryKey: ['dashboard'] });
    }
  }, [index, cards.length, queryClient]);

  function grade(value: number, mode: VocabMode) {
    if (!card) return;
    submit.mutate({
      cardId: card.cardId,
      grade: value,
      mode,
      durationMs: Date.now() - shownAt.current,
    });
    advance();
  }

  if (isLoading) return <Loading label="Karten werden geladen …" />;
  if (isError) return <ErrorState message="Die Lernsitzung konnte nicht starten." onRetry={refetch} />;

  if (cards.length === 0) {
    return (
      <Screen>
        <EmptyState
          emoji="🎉"
          title="Nichts zu wiederholen"
          description="Alle Karten sitzen. Schau später wieder vorbei oder lerne neue Vokabeln in einem anderen Deck."
          action={{ label: 'Zurück', onPress: () => navigation.goBack() }}
        />
      </Screen>
    );
  }

  // --------------------------------------------------------- Abschluss
  if (!card) {
    const accuracy = summary.reviewed ? Math.round((summary.correct / summary.reviewed) * 100) : 0;
    return (
      <Screen>
        <View style={{ flex: 1, justifyContent: 'center', gap: spacing.lg }}>
          <View style={{ alignItems: 'center', gap: spacing.sm }}>
            <Text style={{ fontSize: 60 }}>{accuracy >= 80 ? '🏆' : '💪'}</Text>
            <Title>Sitzung abgeschlossen</Title>
          </View>

          <Row gap={spacing.md}>
            <Card style={{ flex: 1, alignItems: 'center' }}>
              <Text style={typography.title}>{summary.reviewed}</Text>
              <Caption>Karten</Caption>
            </Card>
            <Card style={{ flex: 1, alignItems: 'center' }}>
              <Text style={typography.title}>{accuracy}%</Text>
              <Caption>Richtig</Caption>
            </Card>
            <Card style={{ flex: 1, alignItems: 'center' }}>
              <Text style={typography.title}>+{summary.xp}</Text>
              <Caption>XP</Caption>
            </Card>
          </Row>

          <Button
            label="Weiter lernen"
            onPress={() => {
              setIndex(0);
              setSummary({ reviewed: 0, correct: 0, xp: 0 });
              void refetch();
            }}
          />
          <Button label="Fertig" variant="secondary" onPress={() => navigation.goBack()} />
        </View>
      </Screen>
    );
  }

  return (
    <Screen>
      <View style={{ gap: spacing.sm }}>
        <Row>
          <Caption>
            {index + 1} / {cards.length}
          </Caption>
          <View style={{ flex: 1 }} />
          <Caption>{modeLabel(card.mode)}</Caption>
        </Row>
        <ProgressBar value={(index / cards.length) * 100} height={6} />
      </View>

      {card.mode === 'FLASHCARD' ? (
        <FlashcardMode card={card} revealed={revealed} onReveal={() => setRevealed(true)} onGrade={grade} />
      ) : null}

      {card.mode === 'MULTIPLE_CHOICE' || card.mode === 'LISTENING' ? (
        <ChoiceMode
          card={card}
          selected={choiceIndex}
          onSelect={setChoiceIndex}
          onGrade={grade}
        />
      ) : null}

      {card.mode === 'TYPING' || card.mode === 'MATCHING' ? (
        <TypingMode
          card={card}
          value={typedAnswer}
          onChange={setTypedAnswer}
          revealed={revealed}
          onCheck={() => setRevealed(true)}
          onGrade={grade}
        />
      ) : null}
    </Screen>
  );
}

// ------------------------------------------------------------- Lernmodi

function FlashcardMode({
  card,
  revealed,
  onReveal,
  onGrade,
}: {
  card: ReviewCardDto;
  revealed: boolean;
  onReveal: () => void;
  onGrade: (grade: number, mode: VocabMode) => void;
}) {
  return (
    <View style={{ flex: 1, gap: spacing.lg }}>
      <Pressable onPress={onReveal} style={{ flex: 1 }} accessibilityRole="button">
        <Card style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: spacing.md }}>
          <Text style={typography.display}>{card.item.term}</Text>
          {card.item.phonetic ? <Caption>{card.item.phonetic}</Caption> : null}

          {revealed ? (
            <View style={{ alignItems: 'center', gap: spacing.sm, marginTop: spacing.md }}>
              <View style={dividerStyle} />
              <Text style={[typography.title, { color: colors.primary }]}>
                {card.item.translation}
              </Text>
              {card.item.exampleSentence ? (
                <View style={{ alignItems: 'center', gap: 2, marginTop: spacing.sm }}>
                  <Body>{card.item.exampleSentence}</Body>
                  <Caption>{card.item.exampleTranslation ?? ''}</Caption>
                </View>
              ) : null}
            </View>
          ) : (
            <Caption>Zum Aufdecken tippen</Caption>
          )}
        </Card>
      </Pressable>

      {revealed ? (
        <Row gap={spacing.sm}>
          {GRADE_BUTTONS.map((button) => (
            <Pressable
              key={button.grade}
              onPress={() => onGrade(button.grade, 'FLASHCARD')}
              style={[gradeButtonStyle, { backgroundColor: button.color }]}
            >
              <Text style={[typography.label, { color: colors.textInverse }]}>{button.label}</Text>
            </Pressable>
          ))}
        </Row>
      ) : (
        <Button label="Aufdecken" onPress={onReveal} />
      )}
    </View>
  );
}

function ChoiceMode({
  card,
  selected,
  onSelect,
  onGrade,
}: {
  card: ReviewCardDto;
  selected: number | null;
  onSelect: (index: number) => void;
  onGrade: (grade: number, mode: VocabMode) => void;
}) {
  const answered = selected !== null;
  const isCorrect = selected === card.correctChoiceIndex;

  return (
    <View style={{ flex: 1, gap: spacing.lg }}>
      <Card style={{ alignItems: 'center', gap: spacing.sm, paddingVertical: spacing.xl }}>
        {card.mode === 'LISTENING' ? <Text style={{ fontSize: 40 }}>🔊</Text> : null}
        <Text style={typography.display}>{card.item.term}</Text>
        {card.item.phonetic ? <Caption>{card.item.phonetic}</Caption> : null}
      </Card>

      <View style={{ gap: spacing.sm }}>
        {(card.choices ?? []).map((choice, choiceIndex) => {
          const state = !answered
            ? 'idle'
            : choiceIndex === card.correctChoiceIndex
              ? 'correct'
              : choiceIndex === selected
                ? 'wrong'
                : 'idle';

          return (
            <Pressable
              key={`${choice}-${choiceIndex}`}
              disabled={answered}
              onPress={() => onSelect(choiceIndex)}
              style={[choiceStyles.base, choiceStyles[state]]}
            >
              <Text style={[typography.body, { flex: 1 }]}>{choice}</Text>
              {state === 'correct' ? <Text>✓</Text> : null}
              {state === 'wrong' ? <Text>✗</Text> : null}
            </Pressable>
          );
        })}
      </View>

      <View style={{ flex: 1 }} />

      {answered ? (
        <View style={{ gap: spacing.sm }}>
          {card.item.exampleSentence ? (
            <Card>
              <Body>{card.item.exampleSentence}</Body>
              <Caption>{card.item.exampleTranslation ?? ''}</Caption>
            </Card>
          ) : null}
          {/* Auswahlfragen liefern nur richtig/falsch – daraus werden 4 bzw. 1. */}
          <Button
            label="Weiter"
            variant={isCorrect ? 'primary' : 'danger'}
            onPress={() => onGrade(isCorrect ? 4 : 1, card.mode)}
          />
        </View>
      ) : null}
    </View>
  );
}

function TypingMode({
  card,
  value,
  onChange,
  revealed,
  onCheck,
  onGrade,
}: {
  card: ReviewCardDto;
  value: string;
  onChange: (value: string) => void;
  revealed: boolean;
  onCheck: () => void;
  onGrade: (grade: number, mode: VocabMode) => void;
}) {
  const isCorrect = useMemo(
    () => normalize(value) === normalize(card.item.translation),
    [value, card.item.translation],
  );

  return (
    <View style={{ flex: 1, gap: spacing.lg }}>
      <Card style={{ alignItems: 'center', gap: spacing.sm, paddingVertical: spacing.xl }}>
        <Caption>Wie heißt das auf Deutsch?</Caption>
        <Text style={typography.display}>{card.item.term}</Text>
      </Card>

      <TextInput
        value={value}
        onChangeText={onChange}
        editable={!revealed}
        placeholder="Deine Antwort"
        placeholderTextColor={colors.textMuted}
        autoCapitalize="none"
        autoCorrect={false}
        onSubmitEditing={onCheck}
        style={[
          typingInputStyle,
          revealed && {
            borderColor: isCorrect ? colors.success : colors.danger,
            backgroundColor: isCorrect ? colors.successSoft : colors.dangerSoft,
          },
        ]}
      />

      {revealed ? (
        <Card>
          <Heading>{isCorrect ? 'Richtig!' : 'Richtige Antwort'}</Heading>
          <Text style={[typography.title, { color: colors.primary }]}>{card.item.translation}</Text>
          {card.item.exampleSentence ? <Caption>{card.item.exampleSentence}</Caption> : null}
        </Card>
      ) : null}

      <View style={{ flex: 1 }} />

      {revealed ? (
        // Auch bei korrekt getippter Antwort darf der Lernende „schwer" wählen.
        <Row gap={spacing.sm}>
          {(isCorrect ? GRADE_BUTTONS.slice(1) : GRADE_BUTTONS.slice(0, 2)).map((button) => (
            <Pressable
              key={button.grade}
              onPress={() => onGrade(button.grade, 'TYPING')}
              style={[gradeButtonStyle, { backgroundColor: button.color }]}
            >
              <Text style={[typography.label, { color: colors.textInverse }]}>{button.label}</Text>
            </Pressable>
          ))}
        </Row>
      ) : (
        <Button label="Prüfen" onPress={onCheck} disabled={value.trim().length === 0} />
      )}
    </View>
  );
}

// -------------------------------------------------------------- Helfer

/** Vergleich ohne Groß-/Kleinschreibung, Artikel und Satzzeichen. */
function normalize(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/^(der|die|das|to)\s+/, '')
    .replace(/[.,!?;:]/g, '');
}

function modeLabel(mode: VocabMode): string {
  const labels: Record<VocabMode, string> = {
    FLASHCARD: 'Lernkarte',
    MULTIPLE_CHOICE: 'Auswahl',
    TYPING: 'Eintippen',
    LISTENING: 'Hören',
    MATCHING: 'Zuordnen',
  };
  return labels[mode];
}

const dividerStyle = { height: 1, width: 120, backgroundColor: colors.border };

const gradeButtonStyle = {
  flex: 1,
  minHeight: 52,
  borderRadius: radius.md,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const typingInputStyle = {
  minHeight: 56,
  borderRadius: radius.md,
  borderWidth: 2,
  borderColor: colors.border,
  backgroundColor: colors.surface,
  paddingHorizontal: spacing.lg,
  fontSize: 18,
  color: colors.text,
};

const choiceStyles = {
  base: {
    minHeight: 54,
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  idle: {},
  correct: { borderColor: colors.success, borderWidth: 2, backgroundColor: colors.successSoft },
  wrong: { borderColor: colors.danger, borderWidth: 2, backgroundColor: colors.dangerSoft },
};
