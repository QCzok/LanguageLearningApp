import React, { useEffect, useRef, useState } from 'react';
import { Animated, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
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
import type { QueueType } from './DeckStack';
import { checkAnswer, type AnswerVerdict } from './answerCheck';
import { speakTerm, stopSpeaking } from './speech';
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

/** Fisher-Yates – alle Stapel sind durchmischbar, keine feste Reihenfolge. */
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
 * Die Warteschlange kommt einmal vom Server, wird aber lokal geführt: „Neue
 * Vokabeln" verlässt eine falsch beantwortete Karte sofort (serverseitig
 * steht sie ab dann im Wiederholen-Stapel); „Wiederholen", „Gelernt" und
 * eigene Decks legen eine falsch beantwortete Karte ans Ende zurück, bis sie
 * sitzt. Jede Bewertung geht sofort ans Backend, damit ein Abbruch keinen
 * Fortschritt kostet – die SM-2-Rechnung passiert serverseitig.
 *
 * Spielerisch wird es über die Serie: Jede richtige Antwort in Folge zählt
 * mit, ab drei gibt es Bonus-XP und eine kurze Einblendung, am Ende Sterne
 * für die Trefferquote. Der Mischen-Knopf wirft die restlichen Karten neu
 * durcheinander.
 */
export default function ReviewScreen({ route, navigation }: Props) {
  const { deckId, level, queueType } = route.params;
  const { t, tVocabMode } = useTranslation();
  const queryClient = useQueryClient();
  const profile = useActiveProfile();
  const learningLanguage = profile?.language.code;
  const { direction, mode, autoSpeak, setAutoSpeak } = useTrainerSettings();

  const [revealed, setRevealed] = useState(false);
  const [typedAnswer, setTypedAnswer] = useState('');
  const [verdict, setVerdict] = useState<AnswerVerdict | null>(null);
  const [choiceIndex, setChoiceIndex] = useState<number | null>(null);
  const [summary, setSummary] = useState<SessionSummary>(EMPTY_SUMMARY);
  const [toast, setToast] = useState<string | null>(null);
  /** Zählt jedes Weiterblättern – auch wenn dieselbe Karte später wiederkommt. */
  const [turn, setTurn] = useState(0);
  const shownAt = useRef(Date.now());
  const toastAnim = useRef(new Animated.Value(0)).current;
  const shakeAnim = useRef(new Animated.Value(0)).current;
  const missedIds = useRef(new Set<string>());

  const { data, isLoading, isError, refetch, isRefetching } = useQuery({
    queryKey: ['review-queue', deckId ?? 'all', level ?? 'any', queueType ?? 'mixed', direction, mode],
    queryFn: () =>
      vocabularyApi.queue({
        deckId,
        level,
        limit: 20,
        direction,
        ...(mode !== 'AUTO' ? { mode } : {}),
        // „Neue Vokabeln“: der Wiederholen-Stapel bleibt außen vor.
        ...(queueType === 'NEW' ? { dueLimit: 0, newLimit: 20 } : {}),
        // „Wiederholen“: Karten, deren letzte Antwort falsch war – sofort,
        // unabhängig vom SM-2-Timer.
        ...(queueType === 'DUE' ? { onlyNeedsRepeat: true } : {}),
        // „Gelernt“: Karten, deren letzte Antwort richtig war.
        ...(queueType === 'MASTERED' ? { onlyLearned: true } : {}),
      }),
    staleTime: 0,
    gcTime: 0, // Eine Sitzung ist einmalig – nichts davon soll wiederverwendet werden.
  });

  // Lokale Warteschlange, aus den Serverdaten gemischt abgeleitet. Wird neu
  // aufgebaut, sobald `data` sich ändert (Start, „Nochmal“) – bewusst ohne
  // useEffect, um keinen Frame mit veralteter Warteschlange zu rendern.
  const [session, setSession] = useState<{ source: ReviewCardDto[] | undefined; queue: ReviewCardDto[] }>(
    { source: undefined, queue: [] },
  );
  if (data !== session.source) {
    setSession({ source: data, queue: data ? shuffled(data) : [] });
  }
  const queue = session.queue;
  const card = queue[0];

  const submit = useMutation({
    mutationFn: vocabularyApi.review,
    onSuccess: (result) => {
      setSummary((prev) => ({ ...prev, xp: prev.xp + result.xpEarned }));
    },
  });

  // Der Begriff wird vorgelesen, sobald eine Karte ihn zeigt – beim Hören
  // immer, sonst nur vorwärts und wenn das Vorlesen eingeschaltet ist.
  const cardKey = card ? `${card.cardId}-${turn}` : null;
  useEffect(() => {
    if (!card) return;
    if (card.mode === 'LISTENING' || (autoSpeak && card.direction === 'FORWARD')) {
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
  function answer(grade: number, answerMode: VocabMode) {
    if (!card) return;
    const correct = grade >= 3;
    submit.mutate({
      cardId: card.cardId,
      grade,
      mode: answerMode,
      durationMs: Date.now() - shownAt.current,
      combo: summary.combo,
    });

    const nextCombo = correct ? summary.combo + 1 : 0;
    if (!correct) {
      missedIds.current.add(card.cardId);
      shake();
    }
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
    // Rückwärts wird der Begriff erst mit der Lösung sichtbar – dann auch hörbar.
    if (card.direction === 'REVERSE' && autoSpeak) void speakTerm(card.item.term, learningLanguage);
  }

  function advance(correct: boolean) {
    if (!card) return;
    setRevealed(false);
    setTypedAnswer('');
    setVerdict(null);
    setChoiceIndex(null);
    setTurn((value) => value + 1);
    shownAt.current = Date.now();

    // „Neue Vokabeln“: ein Versuch pro Karte – falsche Karten landen
    // serverseitig im Wiederholen-Stapel. Sonst bleibt eine falsche Karte im
    // Stapel, bis sie sitzt.
    const requeue = !correct && queueType !== 'NEW';
    const nextQueue = requeue ? [...queue.slice(1), card] : queue.slice(1);
    setSession((prev) => ({ ...prev, queue: nextQueue }));

    if (nextQueue.length === 0) {
      void queryClient.invalidateQueries({ queryKey: ['decks'] });
      void queryClient.invalidateQueries({ queryKey: ['deck'] });
      void queryClient.invalidateQueries({ queryKey: ['vocab-stats'] });
      void queryClient.invalidateQueries({ queryKey: ['dashboard'] });
    }
  }

  function reshuffle() {
    if (queue.length < 3) return;
    // Die aktuelle Karte bleibt oben liegen – gemischt wird, was danach kommt.
    setSession((prev) => ({ ...prev, queue: [prev.queue[0], ...shuffled(prev.queue.slice(1))] }));
    showToast(t('reviewShuffled'));
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
          emoji="🎉"
          title={t(emptyTitleKey(queueType))}
          description={t(emptyDescriptionKey(queueType))}
          action={{ label: t('commonBack'), onPress: () => navigation.goBack() }}
        />
      </Screen>
    );
  }

  // --------------------------------------------------------- Abschluss
  if (!card) {
    return (
      <SessionEnd
        summary={summary}
        onAgain={restart}
        onRepeatMistakes={
          deckId && summary.missed > 0 && queueType !== 'DUE' && queueType !== 'ALL'
            ? () =>
                navigation.replace('Review', {
                  deckId,
                  queueType: 'DUE',
                  title: route.params.title,
                })
            : undefined
        }
        onDone={() => navigation.goBack()}
      />
    );
  }

  const done = summary.reviewed;
  const total = done + queue.length;
  const remaining = queue.length - 1;
  const shakeStyle = {
    transform: [{ translateX: shakeAnim.interpolate({ inputRange: [-1, 1], outputRange: [-8, 8] }) }],
  };

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
          label={t('reviewShuffleA11y')}
          icon="🔀"
          onPress={reshuffle}
          disabled={queue.length < 3}
        />
        <IconButton
          label={autoSpeak ? t('reviewSoundOff') : t('reviewSoundOn')}
          icon={autoSpeak ? '🔊' : '🔇'}
          onPress={() => setAutoSpeak(!autoSpeak)}
        />
      </Row>
      <ProgressBar value={total ? (done / total) * 100 : 0} height={6} color={colors.success} />
      <Row>
        <Caption>{tVocabMode(card.mode)}</Caption>
        <View style={{ flex: 1 }} />
        <Caption>{card.direction === 'FORWARD' ? t('reviewDirectionForwardShort') : t('reviewDirectionReverseShort')}</Caption>
      </Row>

      <Animated.View style={[{ flex: 1 }, shakeStyle]}>
        {card.mode === 'FLASHCARD' ? (
          <FlashcardMode
            card={card}
            remaining={remaining}
            revealed={revealed}
            languageCode={learningLanguage}
            onReveal={() => setRevealed(true)}
            onGrade={(grade) => {
              answer(grade, 'FLASHCARD');
              advance(grade >= 3);
            }}
          />
        ) : null}

        {card.mode === 'MULTIPLE_CHOICE' || card.mode === 'LISTENING' ? (
          <ChoiceMode
            card={card}
            remaining={remaining}
            queueType={queueType}
            selected={choiceIndex}
            languageCode={learningLanguage}
            combo={summary.combo}
            onSelect={(index) => {
              setChoiceIndex(index);
              answer(index === card.correctChoiceIndex ? 4 : 1, card.mode);
            }}
            onContinue={() => advance(choiceIndex === card.correctChoiceIndex)}
          />
        ) : null}

        {card.mode === 'TYPING' || card.mode === 'MATCHING' ? (
          <TypingMode
            card={card}
            remaining={remaining}
            value={typedAnswer}
            verdict={verdict}
            languageCode={learningLanguage}
            onChange={setTypedAnswer}
            onCheck={() => {
              const solution = card.direction === 'FORWARD' ? card.item.translation : card.item.term;
              const result = checkAnswer(typedAnswer, solution);
              setVerdict(result);
              answer(result === 'exact' ? 4 : result === 'typo' ? 3 : 1, 'TYPING');
            }}
            onContinue={() => advance(verdict !== 'wrong')}
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

/** Rückmeldung unten am Bildschirm, wie man sie aus Lern-Apps kennt: grün oder rot. */
function FeedbackBar({
  kind,
  title,
  detail,
  onContinue,
}: {
  kind: 'correct' | 'typo' | 'wrong';
  title: string;
  detail?: string;
  onContinue: () => void;
}) {
  const { t } = useTranslation();
  const tone = kind === 'wrong' ? colors.danger : colors.success;
  const soft = kind === 'wrong' ? colors.dangerSoft : colors.successSoft;
  return (
    <View style={[feedbackBar, { backgroundColor: soft, borderColor: tone }]}>
      <Text style={[feedbackTitle, { color: tone }]}>{title}</Text>
      {detail ? <Text style={feedbackDetail}>{detail}</Text> : null}
      <Button label={t('commonNext')} variant={kind === 'wrong' ? 'danger' : 'primary'} onPress={onContinue} />
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
  queueType,
  selected,
  languageCode,
  combo,
  onSelect,
  onContinue,
}: {
  card: ReviewCardDto;
  remaining: number;
  queueType?: QueueType;
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
          title={isCorrect ? praise(combo, t) : t(wrongLabelKey(queueType))}
          detail={isCorrect ? undefined : t('reviewCorrectAnswerWas', { answer: solution })}
          onContinue={onContinue}
        />
      ) : null}
    </View>
  );
}

function TypingMode({
  card,
  remaining,
  value,
  verdict,
  languageCode,
  onChange,
  onCheck,
  onContinue,
}: {
  card: ReviewCardDto;
  remaining: number;
  value: string;
  verdict: AnswerVerdict | null;
  languageCode?: string;
  onChange: (value: string) => void;
  onCheck: () => void;
  onContinue: () => void;
}) {
  const { t } = useTranslation();
  const checked = verdict !== null;
  const solution = card.direction === 'FORWARD' ? card.item.translation : card.item.term;

  return (
    <View style={{ flex: 1, gap: spacing.md }}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ gap: spacing.lg, paddingBottom: spacing.md }} keyboardShouldPersistTaps="handled">
        <Flashcard stackSize={remaining}>
          <View style={{ minHeight: 150, justifyContent: 'center', gap: spacing.lg }}>
            <Prompt card={card} hint={t('reviewTypeTranslation')} languageCode={languageCode} />

            {/* Die Antwort wird auf die Schreiblinie der Karte geschrieben. */}
            <TextInput
              value={value}
              onChangeText={onChange}
              editable={!checked}
              placeholder={t('reviewAnswerPlaceholder')}
              placeholderTextColor={flashcard.inkSoft}
              autoCapitalize="none"
              autoCorrect={false}
              autoFocus
              onSubmitEditing={() => (checked ? onContinue() : value.trim() && onCheck())}
              style={[
                answerLine,
                checked && { color: verdict === 'wrong' ? colors.danger : colors.success },
              ]}
            />

            {checked ? (
              <>
                <View style={[faceDivider, { alignSelf: 'center' }]} />
                <Solution card={card} languageCode={languageCode} />
              </>
            ) : null}
          </View>
        </Flashcard>
      </ScrollView>

      {checked ? (
        <FeedbackBar
          kind={verdict === 'exact' ? 'correct' : verdict}
          title={
            verdict === 'exact'
              ? t('reviewCorrect')
              : verdict === 'typo'
                ? t('reviewAlmost')
                : t('reviewNotQuite')
          }
          detail={verdict === 'exact' ? undefined : t('reviewCorrectAnswerWas', { answer: solution })}
          onContinue={onContinue}
        />
      ) : (
        <Button label={t('reviewCheck')} onPress={onCheck} disabled={value.trim().length === 0} />
      )}
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

/** Was mit einer falsch beantworteten Karte passiert – abhängig vom Stapel. */
function wrongLabelKey(queueType?: QueueType): TranslationKey {
  if (queueType === 'DUE') return 'reviewWrongDue';
  if (queueType === 'MASTERED') return 'reviewWrongMastered';
  if (queueType === 'ALL') return 'reviewNotQuite';
  return 'reviewWrongNew';
}

function emptyTitleKey(queueType?: QueueType): TranslationKey {
  if (queueType === 'NEW') return 'reviewEmptyNewTitle';
  if (queueType === 'MASTERED') return 'reviewEmptyMasteredTitle';
  if (queueType === 'ALL') return 'reviewEmptyAllTitle';
  return 'reviewEmptyDueTitle';
}

function emptyDescriptionKey(queueType?: QueueType): TranslationKey {
  if (queueType === 'NEW') return 'reviewEmptyNewBody';
  if (queueType === 'MASTERED') return 'reviewEmptyMasteredBody';
  if (queueType === 'ALL') return 'reviewEmptyAllBody';
  return 'reviewEmptyDueBody';
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

const feedbackBar = {
  gap: spacing.sm,
  padding: spacing.md,
  borderRadius: radius.lg,
  borderWidth: 1.5,
};

const feedbackTitle = {
  ...typography.heading,
};

const feedbackDetail = {
  ...typography.body,
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
