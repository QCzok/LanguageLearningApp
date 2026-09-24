import React, { useEffect, useRef, useState } from 'react';
import { Animated, Pressable, ScrollView, Text, View } from 'react-native';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { GRADE_BUTTONS } from '@lingua/shared';
import type { ReviewCardDto, VocabMode } from '@lingua/shared';
import { Button, Caption, EmptyState, ErrorState, Loading, ProgressBar, Row, Screen } from '../../components';
import { vocabularyApi } from '../../api/endpoints';
import { useTranslation } from '../../i18n';
import type { TranslationKey } from '../../i18n';
import { useActiveProfile } from '../../store/auth.store';
import { colors, flashcard, radius, spacing, typography } from '../../theme';
import { Flashcard } from './Flashcard';
import { FeedbackBar } from './FeedbackBar';
import { PairsBoard, shuffled, splitIntoRounds } from './PairsBoard';
import { canRecognizeSpeech, SpeakingCard } from './SpeakingCard';
import { speakTerm, stopSpeaking } from './speech';
import { queueModes } from './trainerModes';
import { useTrainerSettings } from './trainerSettings';
import type { VocabularyStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<VocabularyStackParamList, 'Review'>;

interface SessionSummary {
  reviewed: number;
  correct: number;
  xp: number;
  combo: number;
  bestCombo: number;
  /** Karten, die in dieser Sitzung mindestens einmal falsch waren. */
  missed: number;
}

const EMPTY_SUMMARY: SessionSummary = { reviewed: 0, correct: 0, xp: 0, combo: 0, bestCombo: 0, missed: 0 };

/** Ab diesen Serien gibt es ein kurzes Lob – und serverseitig Bonus-XP. */
const COMBO_MILESTONES = [3, 5, 10, 15, 20, 30, 50];

/** Karten je Sitzung. */
const SESSION_SIZE = 15;

/** Ein Schritt der Sitzung: eine einzelne Karte oder eine Runde Paare. */
type Step = { kind: 'card'; card: ReviewCardDto } | { kind: 'pairs'; cards: ReviewCardDto[] };

/**
 * Macht aus einer Karte eine Auswahlkarte – für Paare, die in keine Runde
 * mehr passen, und fürs Aussprechen ohne Spracherkennung. Ohne Vorschläge
 * (zu wenige andere Wörter) wird die Karte umgedreht.
 */
function asChoiceCard(card: ReviewCardDto): ReviewCardDto {
  return { ...card, mode: card.choices ? 'MULTIPLE_CHOICE' : 'FLASHCARD' };
}

/**
 * Ordnet die Karten vom Server zu Schritten: Paar-Karten werden zu Runden
 * gebündelt und gleichmäßig zwischen die Einzelkarten verteilt, damit eine
 * gemischte Sitzung nicht mit fünf Paar-Runden am Stück endet.
 */
function buildSteps(cards: ReviewCardDto[], speechAvailable: boolean): Step[] {
  const usable = cards.map((card) => (card.mode === 'SPEAKING' && !speechAvailable ? asChoiceCard(card) : card));
  const { rounds, rest } = splitIntoRounds(usable.filter((card) => card.mode === 'MATCHING'));
  const singles = shuffled([...usable.filter((card) => card.mode !== 'MATCHING'), ...rest.map(asChoiceCard)]);

  const steps: Step[] = singles.map((card) => ({ kind: 'card', card }));
  rounds.forEach((round, index) => {
    const at = Math.floor(((index + 1) * singles.length) / (rounds.length + 1)) + index;
    steps.splice(at, 0, { kind: 'pairs', cards: round });
  });
  return steps;
}

function stepSize(step: Step): number {
  return step.kind === 'card' ? 1 : step.cards.length;
}

/**
 * Lernsitzung des Vokabeltrainers.
 *
 * Die Karten kommen einmal vom Server – zufällig aus allen Kategorien oder
 * aus den gewählten – und werden lokal abgearbeitet. Jede Antwort geht sofort
 * ans Backend, damit ein Abbruch keinen Fortschritt kostet; die SM-2-Rechnung
 * passiert serverseitig. Falsch beantwortete Wörter landen dort bei den
 * Fehlern. In einer Fehler-Runde (`mistakesOnly`) kommt ein falsches Wort
 * ans Ende zurück, bis es sitzt.
 *
 * Spielerisch wird es über die Serie: Jede richtige Antwort in Folge zählt
 * mit, ab drei gibt es Bonus-XP und eine kurze Einblendung, am Ende Sterne
 * für die Trefferquote.
 */
export default function ReviewScreen({ route, navigation }: Props) {
  const { mode, deckIds, mistakesOnly } = route.params;
  const { t, tVocabMode } = useTranslation();
  const queryClient = useQueryClient();
  const profile = useActiveProfile();
  const learningLanguage = profile?.language.code;
  const { autoSpeak, setAutoSpeak } = useTrainerSettings();
  const [speechAvailable] = useState(canRecognizeSpeech);

  const [revealed, setRevealed] = useState(false);
  const [choiceIndex, setChoiceIndex] = useState<number | null>(null);
  const [pairsMatched, setPairsMatched] = useState(0);
  const [summary, setSummary] = useState<SessionSummary>(EMPTY_SUMMARY);
  const [toast, setToast] = useState<string | null>(null);
  /** Zählt jedes Weiterblättern – auch wenn dieselbe Karte später wiederkommt. */
  const [turn, setTurn] = useState(0);
  const shownAt = useRef(Date.now());
  const toastAnim = useRef(new Animated.Value(0)).current;
  const shakeAnim = useRef(new Animated.Value(0)).current;
  const missedIds = useRef(new Set<string>());
  /** Paare, die in dieser Runde danebengingen – in einer Fehler-Runde kommen sie wieder. */
  const pairsToRequeue = useRef<ReviewCardDto[]>([]);

  const { data, isLoading, isError, refetch, isRefetching } = useQuery({
    queryKey: ['review-queue', deckIds ?? 'all', mode, mistakesOnly ?? false],
    queryFn: () =>
      vocabularyApi.queue({
        deckIds,
        limit: SESSION_SIZE,
        modes: queueModes(mode, speechAvailable),
        ...(mistakesOnly ? { onlyNeedsRepeat: true } : {}),
      }),
    staleTime: 0,
    gcTime: 0, // Eine Sitzung ist einmalig – nichts davon soll wiederverwendet werden.
  });

  // Lokale Warteschlange, aus den Serverdaten abgeleitet. Wird neu aufgebaut,
  // sobald `data` sich ändert (Start, „Nochmal“) – bewusst ohne useEffect, um
  // keinen Frame mit veralteter Warteschlange zu rendern.
  const [session, setSession] = useState<{ source: ReviewCardDto[] | undefined; steps: Step[] }>({
    source: undefined,
    steps: [],
  });
  if (data !== session.source) {
    setSession({ source: data, steps: data ? buildSteps(data, speechAvailable) : [] });
  }
  const steps = session.steps;
  const step = steps[0];
  const card = step?.kind === 'card' ? step.card : undefined;

  const submit = useMutation({
    mutationFn: vocabularyApi.review,
    onSuccess: (result) => {
      setSummary((prev) => ({ ...prev, xp: prev.xp + result.xpEarned }));
    },
  });

  // Der Begriff wird vorgelesen, sobald eine Auswahlkarte ihn vorwärts zeigt
  // und das Vorlesen eingeschaltet ist. Beim Aussprechen nicht – da soll der
  // Nutzer es erst selbst versuchen.
  const cardKey = step ? `${turn}` : null;
  useEffect(() => {
    if (!card) return;
    if (card.mode === 'LISTENING' || (autoSpeak && card.direction === 'FORWARD' && card.mode !== 'SPEAKING')) {
      void speakTerm(card.item.term, learningLanguage);
    }
    // Nur beim Wechsel der Karte, nicht bei jedem Umschalten des Lautsprechers.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardKey]);

  useEffect(() => stopSpeaking, []);

  function showToast(text: string) {
    setToast(text);
    toastAnim.setValue(0);
    Animated.sequence([
      Animated.spring(toastAnim, { toValue: 1, useNativeDriver: true, friction: 5 }),
      Animated.delay(900),
      Animated.timing(toastAnim, { toValue: 0, duration: 250, useNativeDriver: true }),
    ]).start(() => setToast(null));
  }

  function shake() {
    shakeAnim.setValue(0);
    Animated.sequence([
      Animated.timing(shakeAnim, { toValue: 1, duration: 60, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: -1, duration: 60, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 1, duration: 60, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 0, duration: 60, useNativeDriver: true }),
    ]).start();
  }

  /**
   * Die Antwort zählt sofort – Note ans Backend, Serie und Statistik lokal.
   * Das Weiterblättern (`advance`) ist davon getrennt, damit die Rückmeldung
   * stehen bleiben kann, bis der Nutzer sie gelesen hat.
   */
  function answer(target: ReviewCardDto, grade: number, answerMode: VocabMode) {
    const correct = grade >= 3;
    submit.mutate({
      cardId: target.cardId,
      grade,
      mode: answerMode,
      durationMs: Date.now() - shownAt.current,
      combo: summary.combo,
    });

    const nextCombo = correct ? summary.combo + 1 : 0;
    if (!correct) missedIds.current.add(target.cardId);
    if (correct && COMBO_MILESTONES.includes(nextCombo)) {
      showToast(t('reviewComboToast', { count: nextCombo }));
    }
    setSummary((prev) => ({
      ...prev,
      reviewed: prev.reviewed + 1,
      correct: prev.correct + (correct ? 1 : 0),
      combo: nextCombo,
      bestCombo: Math.max(prev.bestCombo, nextCombo),
      missed: missedIds.current.size,
    }));
    if (!correct && answerMode !== 'MATCHING') shake();
    // Rückwärts wird der Begriff erst mit der Lösung sichtbar – dann auch hörbar.
    if (target.direction === 'REVERSE' && autoSpeak) void speakTerm(target.item.term, learningLanguage);
  }

  /** Zum nächsten Schritt. `requeue` hängt Karten ans Ende, die gleich nochmal drankommen. */
  function advance(requeue: ReviewCardDto[] = []) {
    if (!step) return;
    setRevealed(false);
    setChoiceIndex(null);
    setPairsMatched(0);
    setTurn((value) => value + 1);
    shownAt.current = Date.now();

    const nextSteps: Step[] = [...steps.slice(1), ...requeue.map((again) => ({ kind: 'card' as const, card: again }))];
    setSession((prev) => ({ ...prev, steps: nextSteps }));

    if (nextSteps.length === 0) {
      void queryClient.invalidateQueries({ queryKey: ['decks'] });
      void queryClient.invalidateQueries({ queryKey: ['deck'] });
      void queryClient.invalidateQueries({ queryKey: ['vocab-stats'] });
      void queryClient.invalidateQueries({ queryKey: ['dashboard'] });
    }
  }

  /** Eine einzelne Karte ist beantwortet – in einer Fehler-Runde kommt sie bei Fehlern zurück. */
  function finishCard(correct: boolean) {
    if (!card) return;
    advance(!correct && mistakesOnly ? [card] : []);
  }

  function restart() {
    missedIds.current.clear();
    setSummary(EMPTY_SUMMARY);
    void refetch();
  }

  if (isLoading || isRefetching) return <Loading label={t('reviewLoadingCards')} />;
  if (isError) return <ErrorState message={t('reviewStartError')} onRetry={refetch} />;

  if ((data ?? []).length === 0) {
    return (
      <Screen>
        <EmptyState
          emoji={mistakesOnly ? '🎉' : '🗂️'}
          title={mistakesOnly ? t('trainerNoMistakesTitle') : t('vocabEmptyTitle')}
          description={mistakesOnly ? t('trainerNoMistakesBody') : t('trainerEmptyBody')}
          action={{ label: t('commonBack'), onPress: () => navigation.goBack() }}
        />
      </Screen>
    );
  }

  // --------------------------------------------------------- Abschluss
  if (!step) {
    return (
      <SessionEnd
        summary={summary}
        onAgain={restart}
        onRepeatMistakes={
          summary.missed > 0 && !mistakesOnly
            ? () =>
                navigation.replace('Review', {
                  mode,
                  deckIds,
                  mistakesOnly: true,
                  title: t('trainerMistakesTitle'),
                })
            : undefined
        }
        onDone={() => navigation.goBack()}
      />
    );
  }

  const done = summary.reviewed;
  const remainingItems = steps.reduce((sum, entry) => sum + stepSize(entry), 0) - pairsMatched;
  const total = done + remainingItems;
  const remaining = steps.length - 1;
  const shakeStyle = {
    transform: [{ translateX: shakeAnim.interpolate({ inputRange: [-1, 1], outputRange: [-8, 8] }) }],
  };
  const stepMode: VocabMode = step.kind === 'pairs' ? 'MATCHING' : step.card.mode;

  return (
    <Screen style={{ flex: 1 }}>
      <Row gap={spacing.sm}>
        <Caption>{t('reviewProgress', { done, total })}</Caption>
        <View style={{ flex: 1 }} />
        {summary.combo >= 2 ? (
          <View style={comboPill}>
            <Text style={comboText}>🔥 {summary.combo}</Text>
          </View>
        ) : null}
        <View style={xpPill}>
          <Text style={xpText}>⚡ {summary.xp}</Text>
        </View>
        <IconButton
          label={autoSpeak ? t('reviewSoundOff') : t('reviewSoundOn')}
          icon={autoSpeak ? '🔊' : '🔇'}
          onPress={() => setAutoSpeak(!autoSpeak)}
        />
      </Row>
      <ProgressBar value={total ? (done / total) * 100 : 0} height={6} color={colors.success} />
      <Caption>{step.kind === 'pairs' ? t('matchHint') : tVocabMode(stepMode)}</Caption>

      <Animated.View style={[{ flex: 1 }, shakeStyle]}>
        {step.kind === 'pairs' ? (
          <PairsBoard
            key={cardKey}
            items={step.cards.map((entry) => ({ ...entry.item, id: entry.cardId }))}
            languageCode={learningLanguage}
            autoSpeak={autoSpeak}
            onMatch={(cardId, clean) => {
              const target = step.cards.find((entry) => entry.cardId === cardId);
              if (!target) return;
              setPairsMatched((value) => value + 1);
              answer(target, clean ? 4 : 1, 'MATCHING');
              if (!clean && mistakesOnly) pairsToRequeue.current.push(asChoiceCard(target));
            }}
            onComplete={() => {
              const again = pairsToRequeue.current;
              pairsToRequeue.current = [];
              advance(again);
            }}
          />
        ) : null}

        {card?.mode === 'FLASHCARD' ? (
          <FlashcardMode
            card={card}
            remaining={remaining}
            revealed={revealed}
            languageCode={learningLanguage}
            onReveal={() => setRevealed(true)}
            onGrade={(grade) => {
              answer(card, grade, 'FLASHCARD');
              finishCard(grade >= 3);
            }}
          />
        ) : null}

        {card && (card.mode === 'MULTIPLE_CHOICE' || card.mode === 'TRANSLATE' || card.mode === 'LISTENING') ? (
          <ChoiceMode
            card={card}
            remaining={remaining}
            mistakesOnly={mistakesOnly}
            selected={choiceIndex}
            languageCode={learningLanguage}
            combo={summary.combo}
            onSelect={(index) => {
              setChoiceIndex(index);
              answer(card, index === card.correctChoiceIndex ? 4 : 1, card.mode);
            }}
            onContinue={() => finishCard(choiceIndex === card.correctChoiceIndex)}
          />
        ) : null}

        {card?.mode === 'SPEAKING' ? (
          <SpeakingCard
            key={cardKey}
            card={card}
            remaining={remaining}
            languageCode={learningLanguage}
            onGrade={(grade) => answer(card, grade, 'SPEAKING')}
            onSkip={() => advance()}
            onContinue={finishCard}
          />
        ) : null}
      </Animated.View>

      {toast ? (
        <Animated.View
          pointerEvents="none"
          style={[
            toastStyle,
            {
              opacity: toastAnim,
              transform: [{ scale: toastAnim.interpolate({ inputRange: [0, 1], outputRange: [0.6, 1] }) }],
            },
          ]}
        >
          <Text style={toastText}>{toast}</Text>
        </Animated.View>
      ) : null}
    </Screen>
  );
}

// ------------------------------------------------------------- Bausteine

function IconButton({
  label,
  icon,
  onPress,
  disabled,
}: {
  label: string;
  icon: string;
  onPress: () => void;
  disabled?: boolean;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      disabled={disabled}
      hitSlop={6}
      onPress={onPress}
      style={({ pressed }) => [iconButton, (pressed || disabled) && { opacity: disabled ? 0.35 : 0.6 }]}
    >
      <Text style={{ fontSize: 16 }}>{icon}</Text>
    </Pressable>
  );
}

/** Lautsprecher neben einem Begriff der Lernsprache. */
function SpeakButton({ text, languageCode, big }: { text: string; languageCode?: string; big?: boolean }) {
  const { t } = useTranslation();
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={t('reviewListenA11y')}
      hitSlop={8}
      onPress={() => void speakTerm(text, languageCode)}
      style={({ pressed }) => [big ? speakButtonBig : speakButton, pressed && { opacity: 0.6 }]}
    >
      <Text style={{ fontSize: big ? 40 : 18 }}>🔊</Text>
    </Pressable>
  );
}

/**
 * Die Frage auf der Karte. Vorwärts steht dort der Begriff (mit Lautsprecher),
 * rückwärts die Übersetzung in der Muttersprache. Beim Hören bleibt der
 * Begriff verborgen, bis geantwortet ist.
 */
function Prompt({
  card,
  hint,
  languageCode,
  hideTerm,
}: {
  card: ReviewCardDto;
  hint?: string;
  languageCode?: string;
  hideTerm?: boolean;
}) {
  if (card.mode === 'LISTENING' && hideTerm) {
    return (
      <View style={{ alignItems: 'center', gap: spacing.sm }}>
        {hint ? <Text style={cardEyebrow}>{hint}</Text> : null}
        <SpeakButton text={card.item.term} languageCode={languageCode} big />
      </View>
    );
  }

  const forward = card.direction === 'FORWARD';
  return (
    <View style={{ alignItems: 'center', gap: 6 }}>
      {hint ? <Text style={cardEyebrow}>{hint}</Text> : null}
      <Row gap={spacing.xs} style={{ justifyContent: 'center', flexWrap: 'wrap' }}>
        <Text style={termText}>{forward ? card.item.term : card.item.translation}</Text>
        {forward ? <SpeakButton text={card.item.term} languageCode={languageCode} /> : null}
      </Row>
      {forward && card.item.phonetic ? <Text style={cardMeta}>{card.item.phonetic}</Text> : null}
      {card.item.partOfSpeech ? (
        <View style={posChip}>
          <Text style={posChipText}>{card.item.partOfSpeech}</Text>
        </View>
      ) : null}
    </View>
  );
}

/** Die Lösung – rückwärts ist sie der Begriff, dann mit Lautsprecher. */
function Solution({ card, languageCode }: { card: ReviewCardDto; languageCode?: string }) {
  const forward = card.direction === 'FORWARD';
  const showTerm = !forward || card.mode === 'LISTENING';
  return (
    <View style={{ alignItems: 'center', gap: 4 }}>
      {showTerm ? (
        <Row gap={spacing.xs} style={{ justifyContent: 'center' }}>
          <Text style={answerText}>{card.item.term}</Text>
          <SpeakButton text={card.item.term} languageCode={languageCode} />
        </Row>
      ) : null}
      {forward ? <Text style={showTerm ? cardMeta : answerText}>{card.item.translation}</Text> : null}
      {card.item.exampleSentence ? (
        <View style={{ alignItems: 'center', gap: 2, marginTop: spacing.xs }}>
          <Text style={exampleText}>{card.item.exampleSentence}</Text>
          {card.item.exampleTranslation ? <Text style={cardMeta}>{card.item.exampleTranslation}</Text> : null}
        </View>
      ) : null}
    </View>
  );
}

// ------------------------------------------------------------- Lernmodi

function FlashcardMode({
  card,
  remaining,
  revealed,
  languageCode,
  onReveal,
  onGrade,
}: {
  card: ReviewCardDto;
  remaining: number;
  revealed: boolean;
  languageCode?: string;
  onReveal: () => void;
  onGrade: (grade: number) => void;
}) {
  const { t } = useTranslation();

  return (
    <View style={{ flex: 1, gap: spacing.lg }}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: spacing.md }} showsVerticalScrollIndicator={false}>
        <Pressable onPress={onReveal} accessibilityRole="button">
          <Flashcard stackSize={remaining} variant={revealed ? 'back' : 'front'}>
            <View style={{ minHeight: 210, justifyContent: 'center' }}>
              <Prompt
                card={card}
                languageCode={languageCode}
                hint={revealed ? undefined : t(card.direction === 'FORWARD' ? 'reviewWhatDoesItMean' : 'reviewHowDoYouSay')}
              />

              {revealed ? (
                <View style={{ alignItems: 'center', gap: spacing.sm, marginTop: spacing.lg }}>
                  <View style={faceDivider} />
                  <Solution card={card} languageCode={languageCode} />
                </View>
              ) : (
                <Text style={[cardMeta, { textAlign: 'center', marginTop: spacing.lg }]}>
                  {t('reviewTapToFlip')}
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
              onPress={() => onGrade(button.grade)}
              style={[gradeButtonStyle, { backgroundColor: button.color }]}
            >
              <Text style={[typography.label, { color: colors.textInverse }]}>
                {t(GRADE_LABEL_KEYS[button.grade] ?? 'reviewGradeGood')}
              </Text>
            </Pressable>
          ))}
        </Row>
      ) : (
        <Button label={t('reviewFlip')} onPress={onReveal} />
      )}
    </View>
  );
}

const CHOICE_LETTERS = ['A', 'B', 'C', 'D', 'E'];

function ChoiceMode({
  card,
  remaining,
  mistakesOnly,
  selected,
  languageCode,
  combo,
  onSelect,
  onContinue,
}: {
  card: ReviewCardDto;
  remaining: number;
  mistakesOnly?: boolean;
  selected: number | null;
  languageCode?: string;
  combo: number;
  onSelect: (index: number) => void;
  onContinue: () => void;
}) {
  const { t } = useTranslation();
  const answered = selected !== null;
  const isCorrect = selected === card.correctChoiceIndex;
  const hint =
    card.mode === 'LISTENING'
      ? t('reviewWhatDoYouHear')
      : t(card.direction === 'FORWARD' ? 'reviewWhatDoesItMean' : 'reviewHowDoYouSay');
  const solution = card.direction === 'FORWARD' ? card.item.translation : card.item.term;

  return (
    <View style={{ flex: 1, gap: spacing.md }}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ gap: spacing.md, paddingBottom: spacing.md }}>
        <Flashcard stackSize={remaining}>
          <View style={{ minHeight: 110, justifyContent: 'center', gap: spacing.sm }}>
            <Prompt card={card} hint={hint} languageCode={languageCode} hideTerm={!answered} />
            {answered && card.mode === 'LISTENING' ? (
              <>
                <View style={[faceDivider, { alignSelf: 'center' }]} />
                <Solution card={card} languageCode={languageCode} />
              </>
            ) : null}
          </View>
        </Flashcard>

        {/* Genau einer der Vorschläge stimmt. Die Buchstaben helfen beim Blick
            zurück auf die Karte – man merkt sich „C“, nicht die Position. */}
        <View style={{ gap: spacing.sm }}>
          {(card.choices ?? []).map((choice, index) => {
            const state = !answered
              ? 'idle'
              : index === card.correctChoiceIndex
                ? 'correct'
                : index === selected
                  ? 'wrong'
                  : 'muted';

            return (
              <Pressable
                key={`${choice}-${index}`}
                accessibilityRole="button"
                disabled={answered}
                onPress={() => onSelect(index)}
                style={({ pressed }) => [choiceRow, choiceStates[state], pressed && !answered && { opacity: 0.8, transform: [{ scale: 0.99 }] }]}
              >
                <View style={[choiceLetter, choiceLetterStates[state]]}>
                  <Text style={[choiceLetterText, state !== 'idle' && { color: colors.textInverse }]}>
                    {state === 'correct' ? '✓' : state === 'wrong' ? '✗' : (CHOICE_LETTERS[index] ?? index + 1)}
                  </Text>
                </View>
                <Text style={[choiceText, state === 'muted' && { color: colors.textMuted }]}>{choice}</Text>
                {card.direction === 'REVERSE' && answered && state !== 'muted' ? (
                  <SpeakButton text={choice} languageCode={languageCode} />
                ) : null}
              </Pressable>
            );
          })}
        </View>
      </ScrollView>

      {answered ? (
        <FeedbackBar
          kind={isCorrect ? 'correct' : 'wrong'}
          title={isCorrect ? praise(combo, t) : t(mistakesOnly ? 'trainerWrongAgain' : 'trainerWrongToMistakes')}
          detail={isCorrect ? undefined : t('reviewCorrectAnswerWas', { answer: solution })}
          onContinue={onContinue}
        />
      ) : null}
    </View>
  );
}

// ---------------------------------------------------------- Abschluss

/**
 * Das Ende einer Runde: Sterne für die Trefferquote, die längste Serie, XP –
 * und, wenn Fehler dabei waren, der direkte Weg, sie gleich auszubügeln.
 */
function SessionEnd({
  summary,
  onAgain,
  onRepeatMistakes,
  onDone,
}: {
  summary: SessionSummary;
  onAgain: () => void;
  onRepeatMistakes?: () => void;
  onDone: () => void;
}) {
  const { t } = useTranslation();
  const accuracy = summary.reviewed ? Math.round((summary.correct / summary.reviewed) * 100) : 0;
  const stars = accuracy >= 90 ? 3 : accuracy >= 70 ? 2 : accuracy >= 40 ? 1 : 0;
  const pop = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(pop, { toValue: 1, friction: 4, useNativeDriver: true }).start();
  }, [pop]);

  return (
    <Screen style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', gap: spacing.lg }}>
        <Animated.View style={{ alignItems: 'center', gap: spacing.xs, transform: [{ scale: pop }] }}>
          <Text style={{ fontSize: 44, letterSpacing: 6 }}>
            {'★'.repeat(stars)}
            <Text style={{ color: colors.border }}>{'★'.repeat(3 - stars)}</Text>
          </Text>
          <Text style={summaryHeadline}>{t(STAR_HEADLINES[stars])}</Text>
          <Caption>{t('reviewCorrectOf', { correct: summary.correct, reviewed: summary.reviewed })}</Caption>
        </Animated.View>

        <Row gap={spacing.sm}>
          <StatTile value={`${accuracy}%`} label={t('reviewAccuracy')} />
          <StatTile value={`+${summary.xp}`} label={t('reviewXp')} />
          <StatTile value={`🔥 ${summary.bestCombo}`} label={t('reviewBestCombo')} />
        </Row>

        <View style={{ gap: spacing.sm }}>
          {onRepeatMistakes ? (
            <Button label={t('reviewRepeatMistakes', { count: summary.missed })} variant="danger" onPress={onRepeatMistakes} />
          ) : null}
          <Button label={t('reviewKeepLearning')} onPress={onAgain} />
          <Button label={t('commonDone')} variant="secondary" onPress={onDone} />
        </View>
      </View>
    </Screen>
  );
}

function StatTile({ value, label }: { value: string; label: string }) {
  return (
    <View style={statTile}>
      <Text style={typography.title}>{value}</Text>
      <Caption>{label}</Caption>
    </View>
  );
}

// -------------------------------------------------------------- Helfer

type Translate = ReturnType<typeof useTranslation>['t'];

/** Abwechslung beim Lob – dieselbe Zeile zwanzigmal hintereinander nutzt sich ab. */
function praise(combo: number, t: Translate): string {
  if (combo >= 10) return t('reviewPraiseUnstoppable');
  if (combo >= 5) return t('reviewPraiseOnFire');
  const keys: TranslationKey[] = ['reviewCorrect', 'reviewPraiseGreat', 'reviewPraiseNice'];
  return t(keys[combo % keys.length]);
}

const STAR_HEADLINES: TranslationKey[] = [
  'reviewStars0',
  'reviewStars1',
  'reviewStars2',
  'reviewStars3',
];

/** Die vier Noten des SM-2-Trainers, über ihren Notenwert an die Menüsprache gebunden. */
const GRADE_LABEL_KEYS: Record<number, TranslationKey> = {
  1: 'reviewGradeAgain',
  3: 'reviewGradeHard',
  4: 'reviewGradeGood',
  5: 'reviewGradeEasy',
};

// ------------------------------------------------------------------ Styles

const cardEyebrow = {
  ...typography.label,
  letterSpacing: 1.4,
  textTransform: 'uppercase' as const,
  color: flashcard.inkSoft,
  textAlign: 'center' as const,
};

const termText = {
  fontSize: 32,
  lineHeight: 40,
  fontWeight: '700' as const,
  color: flashcard.ink,
  textAlign: 'center' as const,
};

const cardMeta = {
  fontSize: 15,
  lineHeight: 21,
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

const summaryHeadline = {
  ...typography.title,
  textAlign: 'center' as const,
};

const statTile = {
  flex: 1,
  alignItems: 'center' as const,
  gap: 2,
  paddingVertical: spacing.md,
  borderRadius: radius.md,
  backgroundColor: colors.surface,
  borderWidth: 1,
  borderColor: colors.border,
};

const gradeButtonStyle = {
  flex: 1,
  minHeight: 52,
  borderRadius: radius.md,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
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
  borderBottomWidth: 3,
  borderColor: colors.border,
  backgroundColor: colors.surface,
};

const choiceStates = {
  idle: {},
  muted: { opacity: 0.55 },
  correct: { borderColor: colors.success, borderWidth: 2, borderBottomWidth: 3, backgroundColor: colors.successSoft },
  wrong: { borderColor: colors.danger, borderWidth: 2, borderBottomWidth: 3, backgroundColor: colors.dangerSoft },
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

const comboPill = {
  paddingHorizontal: spacing.sm,
  paddingVertical: 2,
  borderRadius: radius.full,
  backgroundColor: colors.warningSoft,
};

const comboText = {
  ...typography.label,
  color: colors.warning,
};

const xpPill = {
  paddingHorizontal: spacing.sm,
  paddingVertical: 2,
  borderRadius: radius.full,
  backgroundColor: colors.premiumSoft,
};

const xpText = {
  ...typography.label,
  color: colors.premium,
};

const iconButton = {
  width: 32,
  height: 32,
  borderRadius: 16,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  backgroundColor: colors.surfaceAlt,
};

const speakButton = {
  width: 34,
  height: 34,
  borderRadius: 17,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const speakButtonBig = {
  width: 92,
  height: 92,
  borderRadius: 46,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  backgroundColor: colors.primarySoft,
};

const toastStyle = {
  position: 'absolute' as const,
  top: '38%' as const,
  alignSelf: 'center' as const,
  paddingHorizontal: spacing.lg,
  paddingVertical: spacing.md,
  borderRadius: radius.full,
  backgroundColor: colors.text,
};

const toastText = {
  ...typography.heading,
  color: colors.textInverse,
};
