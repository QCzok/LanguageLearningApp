import React, { useMemo, useRef, useState } from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { GRADE_BUTTONS } from '@lingua/shared';
import type { ReviewCardDto, VocabMode } from '@lingua/shared';
import {
  Button,
  Caption,
  Card,
  EmptyState,
  ErrorState,
  Loading,
  Row,
  Screen,
  Title,
} from '../../components';
import { vocabularyApi } from '../../api/endpoints';
import { colors, flashcard, radius, spacing, typography } from '../../theme';
import { Flashcard } from './Flashcard';
import type { VocabularyStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<VocabularyStackParamList, 'Review'>;

interface SessionSummary {
  reviewed: number;
  correct: number;
  xp: number;
}

/** Fisher-Yates – alle drei Stapel sind durchmischbar, keine feste Reihenfolge. */
function shuffled<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Lernsitzung des Vokabeltrainers.
 *
 * Jede Karte ist für sich selbstständig, kein fester "Karte X von Y"-Zähler:
 * Die Warteschlange kommt einmal vom Server, wird aber lokal umsortiert –
 * „Neue Vokabeln“ verlässt eine falsch beantwortete Karte sofort (serverseitig
 * steht sie ab sofort im Wiederholen-Stapel, unabhängig vom SM-2-Timer);
 * „Wiederholen“ und „Gelernt“ legen eine falsch beantwortete Karte ans Ende
 * der eigenen Warteschlange zurück, bis sie richtig sitzt. Jede Bewertung
 * geht sofort ans Backend, damit ein Abbruch keinen Fortschritt kostet – die
 * eigentliche SM-2-Rechnung passiert serverseitig, hier zählt nur die Note.
 */
export default function ReviewScreen({ route, navigation }: Props) {
  const { deckId, level, queueType } = route.params;
  const queryClient = useQueryClient();

  const [revealed, setRevealed] = useState(false);
  const [typedAnswer, setTypedAnswer] = useState('');
  const [choiceIndex, setChoiceIndex] = useState<number | null>(null);
  const [summary, setSummary] = useState<SessionSummary>({ reviewed: 0, correct: 0, xp: 0 });
  const shownAt = useRef(Date.now());

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['review-queue', deckId ?? 'all', level ?? 'any', queueType ?? 'mixed'],
    queryFn: () =>
      vocabularyApi.queue({
        deckId,
        level,
        limit: 20,
        // „Neue Vokabeln“: der Wiederholen-Stapel bleibt außen vor, jede Karte
        // kommt als Auswahl mit fünf Bedeutungsvorschlägen (siehe ChoiceMode).
        ...(queueType === 'NEW' ? { dueLimit: 0, newLimit: 20, mode: 'MULTIPLE_CHOICE' as const } : {}),
        // „Wiederholen“: Karten, deren letzte Antwort falsch war – sofort,
        // unabhängig vom SM-2-Timer.
        ...(queueType === 'DUE' ? { onlyNeedsRepeat: true, mode: 'MULTIPLE_CHOICE' as const } : {}),
        // „Gelernt“: Karten, deren letzte Antwort richtig war – unabhängig
        // vom Mastery-Intervall.
        ...(queueType === 'MASTERED' ? { onlyLearned: true, mode: 'MULTIPLE_CHOICE' as const } : {}),
      }),
    staleTime: 0,
    gcTime: 0, // Eine Sitzung ist einmalig – nichts davon soll wiederverwendet werden.
  });

  // Lokale Warteschlange, aus den Serverdaten gemischt abgeleitet (siehe
  // `shuffled`). Wird neu aufgebaut, sobald `data` sich ändert (Start, Retry
  // über „Weiter lernen“) – bewusst ohne useEffect, um keinen Frame mit
  // veralteter Warteschlange zu rendern.
  const [session, setSession] = useState<{ source: ReviewCardDto[] | undefined; queue: ReviewCardDto[] }>(
    { source: undefined, queue: [] },
  );
  if (data !== session.source) {
    setSession({ source: data, queue: data ? shuffled(data) : [] });
  }
  const queue = session.queue;

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

  const card = queue[0];

  function grade(value: number, mode: VocabMode) {
    if (!card) return;
    const correct = value >= 3;
    submit.mutate({
      cardId: card.cardId,
      grade: value,
      mode,
      durationMs: Date.now() - shownAt.current,
    });
    setRevealed(false);
    setTypedAnswer('');
    setChoiceIndex(null);
    shownAt.current = Date.now();

    // „Neue Vokabeln“: ein Versuch pro Karte – bei Fehlern wird sie serverseitig
    // sofort fällig und taucht später im Wiederholen-Stapel auf, statt hier
    // erneut anzustehen. „Wiederholen“/„Gelernt“: falsch bleibt im Stapel.
    const requeue = !correct && queueType !== 'NEW';
    const nextQueue = requeue ? [...queue.slice(1), card] : queue.slice(1);
    setSession((prev) => ({ ...prev, queue: nextQueue }));

    if (nextQueue.length === 0) {
      // Sitzung fertig – Decks, Statistik und Dashboard neu laden.
      void queryClient.invalidateQueries({ queryKey: ['decks'] });
      void queryClient.invalidateQueries({ queryKey: ['vocab-stats'] });
      void queryClient.invalidateQueries({ queryKey: ['dashboard'] });
    }
  }

  if (isLoading) return <Loading label="Karten werden geladen …" />;
  if (isError) return <ErrorState message="Die Lernsitzung konnte nicht starten." onRetry={refetch} />;

  if ((data ?? []).length === 0) {
    return (
      <Screen>
        <EmptyState
          emoji="🎉"
          title={emptyTitle(queueType)}
          description={emptyDescription(queueType)}
          action={{ label: 'Zurück', onPress: () => navigation.goBack() }}
        />
      </Screen>
    );
  }

  // --------------------------------------------------------- Abschluss
  if (!card) {
    const accuracy = summary.reviewed ? Math.round((summary.correct / summary.reviewed) * 100) : 0;
    return (
      <Screen style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', gap: spacing.lg }}>
          <Flashcard stackSize={2} style={{ marginBottom: spacing.md }}>
            <View style={{ alignItems: 'center', gap: spacing.xs, paddingVertical: spacing.md }}>
              <Text style={cardEyebrow}>Sitzung abgeschlossen</Text>
              <Text style={summaryScore}>{accuracy} %</Text>
              <Text style={cardMeta}>
                {summary.correct} von {summary.reviewed} richtig
              </Text>
            </View>
          </Flashcard>

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
              setSummary({ reviewed: 0, correct: 0, xp: 0 });
              void refetch();
            }}
          />
          <Button label="Fertig" variant="secondary" onPress={() => navigation.goBack()} />
        </View>
      </Screen>
    );
  }

  // Wie viele Karten noch im (durchmischten) Stapel liegen – rein visuell,
  // kein Zähler: jede Karte steht für sich, keine feste Gesamtzahl.
  const remaining = queue.length - 1;

  return (
    <Screen style={{ flex: 1 }}>
      <Row>
        <View style={{ flex: 1 }} />
        <Caption>{modeLabel(card.mode)}</Caption>
      </Row>

      {card.mode === 'FLASHCARD' ? (
        <FlashcardMode
          card={card}
          remaining={remaining}
          revealed={revealed}
          onReveal={() => setRevealed(true)}
          onGrade={grade}
        />
      ) : null}

      {card.mode === 'MULTIPLE_CHOICE' || card.mode === 'LISTENING' ? (
        <ChoiceMode
          card={card}
          remaining={remaining}
          queueType={queueType}
          selected={choiceIndex}
          onSelect={setChoiceIndex}
          onGrade={grade}
        />
      ) : null}

      {card.mode === 'TYPING' || card.mode === 'MATCHING' ? (
        <TypingMode
          card={card}
          remaining={remaining}
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

/** Vorderseite jeder Karte: das abgefragte Wort, gesetzt wie von Hand notiert. */
function CardFace({ card, hint }: { card: ReviewCardDto; hint?: string }) {
  return (
    <View style={{ alignItems: 'center', gap: 6 }}>
      {hint ? <Text style={cardEyebrow}>{hint}</Text> : null}
      <Text style={termText}>{card.item.term}</Text>
      {card.item.phonetic ? <Text style={cardMeta}>{card.item.phonetic}</Text> : null}
      {card.item.partOfSpeech ? (
        <View style={posChip}>
          <Text style={posChipText}>{card.item.partOfSpeech}</Text>
        </View>
      ) : null}
    </View>
  );
}

function FlashcardMode({
  card,
  remaining,
  revealed,
  onReveal,
  onGrade,
}: {
  card: ReviewCardDto;
  remaining: number;
  revealed: boolean;
  onReveal: () => void;
  onGrade: (grade: number, mode: VocabMode) => void;
}) {
  return (
    <View style={{ flex: 1, gap: spacing.lg }}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: spacing.md }} showsVerticalScrollIndicator={false}>
        <Pressable onPress={onReveal} accessibilityRole="button">
          <Flashcard stackSize={remaining} variant={revealed ? 'back' : 'front'}>
            <View style={{ minHeight: 210, justifyContent: 'center' }}>
              <CardFace card={card} hint={revealed ? undefined : 'Was bedeutet das?'} />

              {revealed ? (
                <View style={{ alignItems: 'center', gap: spacing.sm, marginTop: spacing.lg }}>
                  <View style={faceDivider} />
                  <Text style={answerText}>{card.item.translation}</Text>
                  {card.item.exampleSentence ? (
                    <View style={{ alignItems: 'center', gap: 2, marginTop: spacing.xs }}>
                      <Text style={exampleText}>{card.item.exampleSentence}</Text>
                      {card.item.exampleTranslation ? (
                        <Text style={cardMeta}>{card.item.exampleTranslation}</Text>
                      ) : null}
                    </View>
                  ) : null}
                </View>
              ) : (
                <Text style={[cardMeta, { textAlign: 'center', marginTop: spacing.lg }]}>
                  Zum Umdrehen tippen
                </Text>
              )}
            </View>
          </Flashcard>
        </Pressable>
      </ScrollView>

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
        <Button label="Umdrehen" onPress={onReveal} />
      )}
    </View>
  );
}

const CHOICE_LETTERS = ['A', 'B', 'C', 'D', 'E'];

function ChoiceMode({
  card,
  remaining,
  queueType,
  selected,
  onSelect,
  onGrade,
}: {
  card: ReviewCardDto;
  remaining: number;
  queueType?: 'NEW' | 'DUE' | 'MASTERED';
  selected: number | null;
  onSelect: (index: number) => void;
  onGrade: (grade: number, mode: VocabMode) => void;
}) {
  const answered = selected !== null;
  const isCorrect = selected === card.correctChoiceIndex;

  return (
    <View style={{ flex: 1, gap: spacing.md }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ gap: spacing.lg, paddingBottom: spacing.md }}
        showsVerticalScrollIndicator={false}
      >
        <Flashcard stackSize={remaining}>
          <View style={{ minHeight: 120, justifyContent: 'center' }}>
            {card.mode === 'LISTENING' ? (
              <Text style={{ fontSize: 34, textAlign: 'center', marginBottom: spacing.xs }}>🔊</Text>
            ) : null}
            <CardFace card={card} hint="Was bedeutet das?" />
          </View>
        </Flashcard>

        {/* Genau eine der fünf Bedeutungen stimmt. Die Buchstaben helfen beim
            Blick zurück auf die Karte – man merkt sich „C“, nicht die Position. */}
        <View style={{ gap: spacing.sm }}>
          {(card.choices ?? []).map((choice, choiceIndex) => {
            const state = !answered
              ? 'idle'
              : choiceIndex === card.correctChoiceIndex
                ? 'correct'
                : choiceIndex === selected
                  ? 'wrong'
                  : 'muted';

            return (
              <Pressable
                key={`${choice}-${choiceIndex}`}
                accessibilityRole="button"
                disabled={answered}
                onPress={() => onSelect(choiceIndex)}
                style={({ pressed }) => [
                  choiceRow,
                  choiceStates[state],
                  pressed && !answered && { opacity: 0.8 },
                ]}
              >
                <View style={[choiceLetter, choiceLetterStates[state]]}>
                  <Text style={[choiceLetterText, state !== 'idle' && { color: colors.textInverse }]}>
                    {CHOICE_LETTERS[choiceIndex] ?? choiceIndex + 1}
                  </Text>
                </View>
                <Text style={[choiceText, state === 'muted' && { color: colors.textMuted }]}>
                  {choice}
                </Text>
              </Pressable>
            );
          })}
        </View>

        {answered && card.item.exampleSentence ? (
          <View style={infoBox}>
            <Text style={infoBoxLabel}>Im Satz</Text>
            <Text style={infoBoxText}>{card.item.exampleSentence}</Text>
            {card.item.exampleTranslation ? (
              <Text style={infoBoxMeta}>{card.item.exampleTranslation}</Text>
            ) : null}
          </View>
        ) : null}
      </ScrollView>

      {answered ? (
        <View style={{ gap: spacing.sm }}>
          <Text style={[verdictText, { color: isCorrect ? colors.success : colors.danger }]}>
            {isCorrect ? 'Richtig' : wrongLabel(queueType)}
          </Text>
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
  remaining,
  value,
  onChange,
  revealed,
  onCheck,
  onGrade,
}: {
  card: ReviewCardDto;
  remaining: number;
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
    <View style={{ flex: 1, gap: spacing.md }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ gap: spacing.lg, paddingBottom: spacing.md }}
        showsVerticalScrollIndicator={false}
      >
        <Flashcard stackSize={remaining}>
          <View style={{ minHeight: 150, justifyContent: 'center', gap: spacing.lg }}>
            <CardFace card={card} hint="Wie heißt das?" />

            {/* Die Antwort wird auf die Schreiblinie der Karte geschrieben. */}
            <TextInput
              value={value}
              onChangeText={onChange}
              editable={!revealed}
              placeholder="Antwort eintragen"
              placeholderTextColor={flashcard.inkSoft}
              autoCapitalize="none"
              autoCorrect={false}
              onSubmitEditing={onCheck}
              style={[
                answerLine,
                revealed && { color: isCorrect ? colors.success : colors.danger },
              ]}
            />

            {revealed && !isCorrect ? (
              <Text style={[answerText, { textAlign: 'center' }]}>{card.item.translation}</Text>
            ) : null}
          </View>
        </Flashcard>
      </ScrollView>

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

/** Was mit einer falsch beantworteten Karte passiert – abhängig vom Stapel. */
function wrongLabel(queueType?: 'NEW' | 'DUE' | 'MASTERED'): string {
  if (queueType === 'DUE') return 'Falsch – bleibt im Wiederholen-Stapel';
  if (queueType === 'MASTERED') return 'Falsch – wandert zurück in den Wiederholen-Stapel';
  return 'Falsch – kommt auf den Wiederholen-Stapel';
}

function emptyTitle(queueType?: 'NEW' | 'DUE' | 'MASTERED'): string {
  if (queueType === 'NEW') return 'Keine neuen Vokabeln mehr';
  if (queueType === 'MASTERED') return 'Noch nichts gemeistert';
  return 'Nichts zu wiederholen';
}

function emptyDescription(queueType?: 'NEW' | 'DUE' | 'MASTERED'): string {
  if (queueType === 'NEW') {
    return 'Für dieses Niveau sind gerade keine neuen Vokabeln mehr da – schau in den Wiederholen-Stapel oder später wieder vorbei.';
  }
  if (queueType === 'MASTERED') {
    return 'Noch keine Vokabel ist gemeistert – bleib dran, der Gelernt-Stapel füllt sich mit der Zeit.';
  }
  return 'Der Wiederholen-Stapel ist leer. Schau später wieder vorbei oder lerne neue Vokabeln.';
}

// ------------------------------------------------------------------ Styles

const cardEyebrow = {
  ...typography.label,
  letterSpacing: 1.4,
  textTransform: 'uppercase' as const,
  color: flashcard.inkSoft,
  textAlign: 'center' as const,
};

const termText = {
  fontSize: 34,
  lineHeight: 42,
  fontWeight: '700' as const,
  color: flashcard.ink,
  textAlign: 'center' as const,
};

const cardMeta = {
  fontSize: 14,
  lineHeight: 20,
  color: flashcard.inkSoft,
  textAlign: 'center' as const,
};

const posChip = {
  alignSelf: 'center' as const,
  borderWidth: 1,
  borderColor: flashcard.edge,
  borderRadius: radius.full,
  paddingHorizontal: spacing.sm,
  paddingVertical: 2,
  marginTop: 2,
};

const posChipText = {
  fontSize: 11,
  letterSpacing: 0.6,
  color: flashcard.inkSoft,
};

const faceDivider = {
  height: 1,
  width: 120,
  backgroundColor: flashcard.edge,
};

const answerText = {
  fontSize: 24,
  lineHeight: 32,
  fontWeight: '700' as const,
  color: colors.primaryDark,
  textAlign: 'center' as const,
};

const exampleText = {
  fontSize: 16,
  lineHeight: 24,
  color: flashcard.ink,
  textAlign: 'center' as const,
};

const summaryScore = {
  fontSize: 46,
  lineHeight: 54,
  fontWeight: '700' as const,
  color: colors.primaryDark,
};

/** Die Antwortzeile sitzt wie handschriftlich auf einer Schreiblinie. */
const answerLine = {
  alignSelf: 'stretch' as const,
  marginHorizontal: spacing.md,
  borderBottomWidth: 1.5,
  borderBottomColor: flashcard.inkSoft,
  paddingBottom: 6,
  fontSize: 20,
  textAlign: 'center' as const,
  color: flashcard.ink,
};

const gradeButtonStyle = {
  flex: 1,
  minHeight: 52,
  borderRadius: radius.md,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const verdictText = {
  ...typography.bodyStrong,
  textAlign: 'center' as const,
};

const choiceRow = {
  minHeight: 54,
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  gap: spacing.md,
  paddingHorizontal: spacing.md,
  paddingVertical: spacing.sm,
  borderRadius: radius.md,
  borderWidth: 1,
  borderColor: colors.border,
  backgroundColor: colors.surface,
};

const choiceStates = {
  idle: {},
  muted: { opacity: 0.55 },
  correct: { borderColor: colors.success, borderWidth: 2, backgroundColor: colors.successSoft },
  wrong: { borderColor: colors.danger, borderWidth: 2, backgroundColor: colors.dangerSoft },
};

const choiceLetter = {
  width: 30,
  height: 30,
  borderRadius: 15,
  borderWidth: 1,
  borderColor: colors.border,
  backgroundColor: colors.surfaceAlt,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const choiceLetterStates = {
  idle: {},
  muted: {},
  correct: { backgroundColor: colors.success, borderColor: colors.success },
  wrong: { backgroundColor: colors.danger, borderColor: colors.danger },
};

const choiceLetterText = {
  ...typography.label,
  color: colors.textMuted,
};

const choiceText = {
  ...typography.body,
  flex: 1,
  color: colors.text,
};

/** Schlichte Info-Box statt einer zweiten Karteikarte für den Beispielsatz. */
const infoBox = {
  gap: 3,
  borderRadius: radius.md,
  borderLeftWidth: 3,
  borderLeftColor: colors.primary,
  backgroundColor: colors.surfaceAlt,
  paddingVertical: spacing.sm,
  paddingHorizontal: spacing.md,
};

const infoBoxLabel = {
  ...typography.label,
  letterSpacing: 1,
  textTransform: 'uppercase' as const,
  color: colors.textMuted,
};

const infoBoxText = {
  ...typography.body,
  color: colors.text,
};

const infoBoxMeta = {
  ...typography.caption,
  color: colors.textMuted,
};
