import React, { useMemo, useRef, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import type {
  BlockAnswer,
  CefrLevel,
  StudyAnswerResultDto,
  StudyContextBlock,
  StudyExerciseBlock,
  StudyTheoryBlock,
  StudyTopicDto,
} from '@lingua/shared';
import { Button, EmptyState, ErrorState, Loading, ProgressBar } from '../../components';
import { studyApi } from '../../api/endpoints';
import { useTranslation } from '../../i18n';
import {
  book,
  bookColors,
  bookLabel,
  colors,
  fontFamily,
  radius,
  spacing,
  typography,
} from '../../theme';
import {
  AudioPlaceholder,
  Dialogue,
  Info,
  Paragraph,
  VocabList,
} from '../workbook/blocks/ContentBlocks';
import { Choice, Cloze, Matching, Ordering } from '../workbook/blocks/ExerciseBlocks';
import type { StudyStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<StudyStackParamList, 'StudySession'>;

/** Eine Karte der Sitzung. Die Lösung ist eine eigene Karte, nicht nur ein umgedrehter Zustand. */
type Step =
  | { kind: 'THEORY'; topic: number }
  | { kind: 'EXERCISE'; topic: number; exercise: number }
  | { kind: 'SOLUTION'; topic: number; exercise: number };

function buildSteps(topics: StudyTopicDto[]): Step[] {
  return topics.flatMap((topic, index): Step[] => [
    { kind: 'THEORY', topic: index },
    ...topic.exercises.flatMap((_, exercise): Step[] => [
      { kind: 'EXERCISE', topic: index, exercise },
      { kind: 'SOLUTION', topic: index, exercise },
    ]),
  ]);
}

const answerKey = (topic: StudyTopicDto, block: StudyExerciseBlock) =>
  `${topic.unitId}:${block.id}`;

/**
 * Eine Lernsitzung: Theoriekarte → Aufgabenkarte → Lösungskarte, Thema für Thema.
 *
 * Jede Aufgabe wird einzeln abgeschickt und sofort bewertet – die Lösung
 * steht auf der nächsten Karte, zusammen mit den Punkten dafür. Zurück
 * blättern gibt es nicht: Eine abgeschickte Antwort ist abgeschickt, und die
 * Theorie zum Nachlesen steht ohnehin eine Karte vorher im selben Thema.
 */
export default function StudySessionScreen({ route, navigation }: Props) {
  const { book: bookId } = route.params;
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const accent = bookColors[bookId].accent;

  // Jede neue Sitzung ist ein neuer Schlüssel – sonst käme aus dem Cache
  // dieselbe Themenfolge zurück, die gerade bearbeitet wurde.
  const [round, setRound] = useState(0);
  const session = useQuery({
    queryKey: ['study-session', bookId, round],
    queryFn: () => studyApi.session(bookId),
    staleTime: Infinity,
    gcTime: 0,
  });

  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, BlockAnswer>>({});
  const [results, setResults] = useState<Record<string, StudyAnswerResultDto>>({});
  const scrollRef = useRef<ScrollView>(null);

  const topics = useMemo(() => session.data?.topics ?? [], [session.data]);
  const steps = useMemo(() => buildSteps(topics), [topics]);

  const submit = useMutation({
    mutationFn: (input: { topic: StudyTopicDto; block: StudyExerciseBlock; answer: BlockAnswer }) =>
      studyApi.answer({
        unitId: input.topic.unitId,
        blockId: input.block.id,
        answer: input.answer,
      }),
    onSuccess: (result, input) => {
      setResults((previous) => ({ ...previous, [answerKey(input.topic, input.block)]: result }));
      setStepIndex((index) => index + 1);
      scrollRef.current?.scrollTo({ y: 0, animated: false });
      void queryClient.invalidateQueries({ queryKey: ['study-overview'] });
      void queryClient.invalidateQueries({ queryKey: ['dashboard'] });
    },
  });

  function goTo(index: number) {
    setStepIndex(index);
    scrollRef.current?.scrollTo({ y: 0, animated: false });
  }

  function startAnotherSession() {
    setAnswers({});
    setResults({});
    setStepIndex(0);
    setRound((value) => value + 1);
  }

  if (session.isLoading) return <Loading />;
  if (session.isError || !session.data) {
    return <ErrorState message={t('studyError')} onRetry={session.refetch} />;
  }
  if (steps.length === 0) {
    return <EmptyState emoji="📭" title={t('studyNoExercises')} description={t('studyEmpty')} />;
  }

  const finished = stepIndex >= steps.length;
  const resultList = Object.values(results);
  const sessionPoints = resultList.reduce((sum, entry) => sum + entry.pointsEarned, 0);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.background }}
      edges={['left', 'right', 'bottom']}
    >
      <View style={header}>
        <View style={{ flex: 1 }}>
          <ProgressBar
            value={(Math.min(stepIndex, steps.length) / steps.length) * 100}
            color={accent}
            height={6}
          />
        </View>
        <Text style={[pointsChip, { color: accent, borderColor: accent }]}>
          {t('studyPointsEarned', { points: sessionPoints })}
        </Text>
      </View>

      <ScrollView
        ref={scrollRef}
        contentContainerStyle={{ padding: spacing.md, paddingBottom: spacing.xxl, gap: spacing.md }}
        keyboardShouldPersistTaps="handled"
      >
        {finished ? (
          <DoneCard
            accent={accent}
            points={sessionPoints}
            correct={resultList.filter((entry) => entry.result.correct).length}
            total={resultList.length}
            totalPoints={resultList[resultList.length - 1]?.totalPoints}
            onAnother={startAnotherSession}
            onClose={() => navigation.goBack()}
          />
        ) : (
          <StepCard
            step={steps[stepIndex]}
            nextStep={steps[stepIndex + 1]}
            topics={topics}
            isReview={session.data.isReview && stepIndex === 0}
            accent={accent}
            answers={answers}
            results={results}
            isChecking={submit.isPending}
            onAnswer={(key, answer) => setAnswers((previous) => ({ ...previous, [key]: answer }))}
            onCheck={(topic, block) => {
              const answer = answers[answerKey(topic, block)];
              if (answer) submit.mutate({ topic, block, answer });
            }}
            onNext={() => goTo(stepIndex + 1)}
          />
        )}
        {submit.isError ? (
          <Text style={[typography.caption, { color: colors.danger, textAlign: 'center' }]}>
            {t('studyError')}
          </Text>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}

// ------------------------------------------------------------------- Karten

function StepCard({
  step,
  nextStep,
  topics,
  isReview,
  accent,
  answers,
  results,
  isChecking,
  onAnswer,
  onCheck,
  onNext,
}: {
  step: Step;
  nextStep: Step | undefined;
  topics: StudyTopicDto[];
  isReview: boolean;
  accent: string;
  answers: Record<string, BlockAnswer>;
  results: Record<string, StudyAnswerResultDto>;
  isChecking: boolean;
  onAnswer: (key: string, answer: BlockAnswer) => void;
  onCheck: (topic: StudyTopicDto, block: StudyExerciseBlock) => void;
  onNext: () => void;
}) {
  const { t } = useTranslation();
  const topic = topics[step.topic];
  const topicLine = t('studyTopicOf', { index: step.topic + 1, total: topics.length });

  if (step.kind === 'THEORY') {
    return (
      <>
        {isReview ? (
          <Text style={[typography.caption, { color: colors.textMuted }]}>
            {t('studyReviewNote')}
          </Text>
        ) : null}
        <View style={[card, { borderTopColor: accent }]}>
          <CardLabel text={`${t('studyTheory')} · ${topicLine}`} color={accent} />
          <Text style={topicTitle}>{topic.title}</Text>
          <Text style={source}>
            {topic.chapterOrder}. {topic.chapterTitle} · {topic.unitTitle}
          </Text>
          {topic.theory.map((block) => (
            <TheoryBlock key={block.id} block={block} level={topic.level} accent={accent} />
          ))}
        </View>
        <Button
          label={t('studyToExercise')}
          onPress={onNext}
          style={{ backgroundColor: accent, borderColor: accent }}
        />
      </>
    );
  }

  const exercise = topic.exercises[step.exercise];
  const key = answerKey(topic, exercise.block);
  const entry = results[key];
  const exerciseLine = t('studyExerciseOf', {
    index: step.exercise + 1,
    total: topic.exercises.length,
  });

  const exerciseView = (
    <ExerciseView
      block={exercise.block}
      level={topic.level}
      accent={accent}
      answer={answers[key]}
      result={step.kind === 'SOLUTION' ? entry : undefined}
      isChecking={isChecking}
      onChange={(answer) => onAnswer(key, answer)}
      onCheck={() => onCheck(topic, exercise.block)}
    />
  );

  if (step.kind === 'EXERCISE') {
    return (
      <View style={[card, { borderTopColor: accent }]}>
        <CardLabel text={`${exerciseLine} · ${topicLine}`} color={accent} />
        {exercise.context.length > 0 ? (
          <View style={contextBox}>
            <Text style={[bookLabel, { fontSize: 11, color: book.inkFaint }]}>
              {t('studyContext')}
            </Text>
            {exercise.context.map((block) => (
              <ContextBlock key={block.id} block={block} level={topic.level} accent={accent} />
            ))}
          </View>
        ) : null}
        {exerciseView}
      </View>
    );
  }

  // Lösungskarte
  const correct = entry?.result.correct ?? false;
  const verdictColor = correct
    ? book.correct
    : entry && entry.result.scorePercent > 0
      ? book.attention
      : book.wrong;
  const nextLabel = !nextStep
    ? t('studyFinish')
    : nextStep.kind === 'THEORY'
      ? t('studyNextTopic')
      : t('studyNextExercise');

  return (
    <>
      <View style={[card, { borderTopColor: verdictColor }]}>
        <CardLabel text={`${t('studySolution')} · ${exerciseLine}`} color={verdictColor} />
        <View style={verdictRow}>
          <Text style={[verdict, { color: verdictColor }]}>
            {correct
              ? t('studyCorrect')
              : t('studyPartly', { percent: entry?.result.scorePercent ?? 0 })}
          </Text>
          {entry && entry.pointsEarned > 0 ? (
            <Text style={[pointsBadge, { backgroundColor: verdictColor }]}>
              {t('studyPointsEarned', { points: entry.pointsEarned })}
            </Text>
          ) : null}
        </View>
        {entry && entry.pointsEarned === 0 && entry.result.scorePercent > 0 ? (
          <Text style={[typography.caption, { color: colors.textMuted }]}>
            {t('studyNoNewPoints')}
          </Text>
        ) : null}
        {exerciseView}
      </View>
      <Button
        label={nextLabel}
        onPress={onNext}
        style={{ backgroundColor: accent, borderColor: accent }}
      />
    </>
  );
}

function DoneCard({
  accent,
  points,
  correct,
  total,
  totalPoints,
  onAnother,
  onClose,
}: {
  accent: string;
  points: number;
  correct: number;
  total: number;
  totalPoints: number | undefined;
  onAnother: () => void;
  onClose: () => void;
}) {
  const { t } = useTranslation();
  return (
    <>
      <View
        style={[
          card,
          { borderTopColor: accent, alignItems: 'center', paddingVertical: spacing.xl },
        ]}
      >
        <Text style={{ fontSize: 44 }}>{correct === total ? '🏆' : '🎯'}</Text>
        <Text style={topicTitle}>{t('studyDoneTitle')}</Text>
        <Text style={[doneScore, { color: accent }]}>{t('studyDonePoints', { points })}</Text>
        <Text style={[typography.body, { color: book.inkSoft }]}>
          {t('studyDoneSummary', { correct, total })}
        </Text>
        {totalPoints !== undefined ? (
          <Text style={[typography.caption, { color: book.inkFaint }]}>
            {totalPoints} {t('studyPoints')}
          </Text>
        ) : null}
      </View>
      <Button
        label={t('studyAnotherSession')}
        onPress={onAnother}
        style={{ backgroundColor: accent, borderColor: accent }}
      />
      <Button label={t('studyBackHome')} variant="secondary" onPress={onClose} />
    </>
  );
}

// ------------------------------------------------------------------ Blöcke

function CardLabel({ text, color }: { text: string; color: string }) {
  return <Text style={[bookLabel, { fontSize: 11, letterSpacing: 1.2, color }]}>{text}</Text>;
}

/** Theorie immer mit Übersetzung zum Aufklappen – die Karte soll verstanden werden, nicht entziffert. */
function TheoryBlock({
  block,
  level,
  accent,
}: {
  block: StudyTheoryBlock;
  level: CefrLevel;
  accent: string;
}) {
  switch (block.type) {
    case 'INFO':
      return <Info block={block} accent={accent} level={level} translatable />;
    case 'TEXT':
      return <Paragraph block={block} accent={accent} level={level} translatable />;
    case 'VOCAB_LIST':
      return <VocabList block={block} accent={accent} />;
  }
}

function ContextBlock({
  block,
  level,
  accent,
}: {
  block: StudyContextBlock;
  level: CefrLevel;
  accent: string;
}) {
  switch (block.type) {
    case 'DIALOGUE':
      return <Dialogue block={block} accent={accent} />;
    case 'AUDIO':
      return <AudioPlaceholder block={block} accent={accent} />;
    case 'TEXT':
      return <Paragraph block={block} accent={accent} level={level} />;
  }
}

function ExerciseView({
  block,
  level,
  accent,
  answer,
  result,
  isChecking,
  onChange,
  onCheck,
}: {
  block: StudyExerciseBlock;
  level: CefrLevel;
  accent: string;
  answer: BlockAnswer | undefined;
  result: StudyAnswerResultDto | undefined;
  isChecking: boolean;
  onChange: (answer: BlockAnswer) => void;
  onCheck: () => void;
}) {
  const props = {
    number: 1,
    accent,
    answer,
    result: result?.result,
    onChange,
    onCheck,
    isChecking,
    locked: Boolean(result),
    level,
  };
  switch (block.type) {
    case 'CLOZE':
      return <Cloze block={block} {...props} />;
    case 'CHOICE':
      return <Choice block={block} {...props} />;
    case 'MATCHING':
      return <Matching block={block} {...props} />;
    case 'ORDERING':
      return <Ordering block={block} {...props} />;
  }
}

// ------------------------------------------------------------------ Styles

const header = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  gap: spacing.md,
  paddingHorizontal: spacing.lg,
  paddingVertical: spacing.sm,
  backgroundColor: colors.surface,
  borderBottomWidth: 1,
  borderBottomColor: colors.border,
};

const pointsChip = {
  fontFamily: fontFamily.bold,
  fontSize: 13,
  paddingHorizontal: spacing.sm,
  paddingVertical: 2,
  borderWidth: 1,
  borderRadius: radius.full,
  overflow: 'hidden' as const,
};

const card = {
  gap: 14,
  padding: book.margin,
  backgroundColor: book.paper,
  borderWidth: 1,
  borderColor: book.paperEdge,
  borderTopWidth: 3,
  borderRadius: radius.sm,
  shadowColor: book.ink,
  shadowOpacity: 0.08,
  shadowRadius: 8,
  shadowOffset: { width: 0, height: 3 },
  elevation: 2,
};

const topicTitle = {
  fontFamily: fontFamily.bold,
  fontSize: 22,
  lineHeight: 28,
  fontWeight: '700' as const,
  color: book.ink,
};

const source = {
  fontFamily: fontFamily.regular,
  fontSize: 12,
  color: book.inkFaint,
  marginTop: -8,
};

const contextBox = {
  gap: 10,
  padding: spacing.md,
  backgroundColor: book.tint,
  borderRadius: radius.sm,
};

const verdictRow = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  justifyContent: 'space-between' as const,
  gap: spacing.sm,
};

const verdict = {
  fontFamily: fontFamily.bold,
  fontSize: 22,
  fontWeight: '700' as const,
};

const pointsBadge = {
  fontFamily: fontFamily.bold,
  fontSize: 14,
  color: colors.textInverse,
  paddingHorizontal: spacing.md,
  paddingVertical: 4,
  borderRadius: radius.full,
  overflow: 'hidden' as const,
};

const doneScore = {
  fontFamily: fontFamily.bold,
  fontSize: 28,
  fontWeight: '700' as const,
};
