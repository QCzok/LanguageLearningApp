import React, { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { useMutation, useQuery } from '@tanstack/react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { ExerciseResultDto } from '@lingua/shared';
import { Button, ErrorState, Loading, Screen } from '../../components';
import { libraryApi } from '../../api/endpoints';
import { useTranslation } from '../../i18n';
import {
  colors,
  fontFamily,
  radius,
  reading,
  readingLabel,
  shadow,
  spacing,
  typography,
} from '../../theme';
import type { LibraryStackParamList } from '../../navigation/types';
import { ReadingSection } from './ReadingSection';

type Props = NativeStackScreenProps<LibraryStackParamList, 'Exercises'>;

/** Ab hier gilt ein Versuch als bestanden – dieselbe Schwelle wie im Backend. */
const PASS_PERCENT = 60;

/** Antwortmarken A, B, C … – wie im gedruckten Übungsteil eines Lehrwerks. */
const OPTION_LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

/**
 * Die Verständnisfragen zu einem Lesetext.
 *
 * Gestaltet als Übungsteil, der zum Text gehört: oben eine Leiste, die den
 * Stand des Durchgangs zeigt (ein Punkt je Frage, gefüllt sobald beantwortet),
 * darunter die Fragen als nummerierte Blöcke. Nach der Abgabe steht an
 * derselben Stelle das Ergebnis – kein Sprung auf einen anderen Bildschirm,
 * damit man Frage, eigene Antwort und Erklärung nebeneinander sieht.
 */
export default function ExercisesScreen({ route, navigation }: Props) {
  const { contentId } = route.params;
  const { t } = useTranslation();

  const [choices, setChoices] = useState<Record<string, number>>({});
  const [texts, setTexts] = useState<Record<string, string>>({});
  const [result, setResult] = useState<ExerciseResultDto | null>(null);
  const [textVisible, setTextVisible] = useState(false);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['library', contentId],
    queryFn: () => libraryApi.detail(contentId),
  });

  const submit = useMutation({
    mutationFn: () =>
      libraryApi.submitExercises(contentId, {
        answers: (data?.exercises ?? []).map((exercise) => ({
          exerciseId: exercise.id,
          selectedIndex: choices[exercise.id],
          text: texts[exercise.id],
        })),
      }),
    onSuccess: setResult,
  });

  if (isLoading) return <Loading />;
  if (isError || !data?.exercises?.length) {
    return <ErrorState message={t('exercisesError')} onRetry={refetch} />;
  }

  const exercises = data.exercises;
  const isAnswered = (id: string) => choices[id] !== undefined || Boolean(texts[id]?.trim());
  const answered = exercises.filter((exercise) => isAnswered(exercise.id)).length;
  const resultById = new Map(result?.results.map((entry) => [entry.exerciseId, entry]));
  const passed = (result?.scorePercent ?? 0) >= PASS_PERCENT;

  return (
    <Screen scroll>
      {result ? (
        <ResultBanner result={result} passed={passed} />
      ) : (
        <View style={{ gap: spacing.sm }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.sm }}>
            <Text style={[readingLabel, { color: colors.text }]}>{t('exercisesHeading')}</Text>
            <View style={{ flex: 1, height: 1, backgroundColor: colors.border }} />
            <Text style={[readingLabel, { color: colors.textMuted }]}>
              {answered} / {exercises.length}
            </Text>
          </View>

          {/* Ein Punkt je Frage statt eines Balkens: Man sieht nicht nur wie
              weit, sondern auch wie viel überhaupt noch kommt. */}
          <View style={{ flexDirection: 'row', gap: 6 }}>
            {exercises.map((exercise) => (
              <View
                key={exercise.id}
                style={[dot, isAnswered(exercise.id) && { backgroundColor: colors.primary }]}
              />
            ))}
          </View>
        </View>
      )}

      {/* Zum Nachlesen während der Aufgaben – standardmäßig eingeklappt,
          damit die Fragen im Vordergrund stehen. */}
      {data.body?.length ? (
        <View style={textBox}>
          <Pressable
            accessibilityRole="button"
            accessibilityState={{ expanded: textVisible }}
            onPress={() => setTextVisible((value) => !value)}
            style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.sm }}
          >
            <Text style={{ fontSize: 13, color: colors.primary }}>{textVisible ? '▾' : '▸'}</Text>
            <Text style={[readingLabel, { color: colors.text }]}>
              {textVisible ? t('exercisesHideText') : t('exercisesShowText')}
            </Text>
          </Pressable>

          {textVisible ? (
            <View style={{ gap: spacing.lg, marginTop: spacing.md }}>
              {data.body.map((section) => (
                <ReadingSection key={section.id} section={section} />
              ))}
            </View>
          ) : null}
        </View>
      ) : null}

      {exercises.map((exercise, index) => {
        const feedback = resultById.get(exercise.id);
        const isOpen = exercise.type === 'OPEN';

        return (
          <View key={exercise.id} style={questionCard}>
            <View style={{ flexDirection: 'row', gap: spacing.md, alignItems: 'flex-start' }}>
              <Text style={questionNumber}>{String(index + 1).padStart(2, '0')}</Text>
              <Text selectable style={questionText}>
                {exercise.question}
              </Text>
            </View>

            {isOpen ? (
              <TextInput
                multiline
                value={texts[exercise.id] ?? ''}
                onChangeText={(value) => setTexts((prev) => ({ ...prev, [exercise.id]: value }))}
                editable={!result}
                placeholder={t('exercisesAnswerPlaceholder')}
                placeholderTextColor={colors.textMuted}
                style={openInputStyle}
              />
            ) : (
              <View style={{ gap: spacing.sm }}>
                {exercise.options.map((option, optionIndex) => {
                  const selected = choices[exercise.id] === optionIndex;
                  const state = !feedback
                    ? selected
                      ? 'selected'
                      : 'idle'
                    : optionIndex === feedback.correctIndex
                      ? 'correct'
                      : selected
                        ? 'wrong'
                        : 'idle';

                  return (
                    <Pressable
                      key={option}
                      accessibilityRole="radio"
                      accessibilityState={{ selected, disabled: Boolean(result) }}
                      disabled={Boolean(result)}
                      onPress={() => setChoices((prev) => ({ ...prev, [exercise.id]: optionIndex }))}
                      style={[optionStyles.base, optionStyles[state]]}
                    >
                      <View style={[letterBadge, letterBadgeStyles[state]]}>
                        <Text style={[letterText, state !== 'idle' && { color: colors.textInverse }]}>
                          {OPTION_LETTERS[optionIndex] ?? optionIndex + 1}
                        </Text>
                      </View>
                      <Text style={[typography.body, { flex: 1 }]}>{option}</Text>
                      {state === 'correct' ? <Text style={{ color: colors.success }}>✓</Text> : null}
                      {state === 'wrong' ? <Text style={{ color: colors.danger }}>✗</Text> : null}
                    </Pressable>
                  );
                })}
              </View>
            )}

            {/* Erklärungen liefert das Backend erst nach der Abgabe mit. */}
            {feedback?.explanation ? (
              <View style={explanationBox}>
                <Text style={[readingLabel, { color: reading.inkFaint }]}>
                  {t('exercisesExplanation')}
                </Text>
                <Text selectable style={explanationText}>
                  {feedback.explanation}
                </Text>
              </View>
            ) : null}
          </View>
        );
      })}

      {result ? (
        <>
          <Button
            label={t('exercisesTryAgain')}
            variant="secondary"
            onPress={() => {
              setResult(null);
              setChoices({});
              setTexts({});
            }}
          />
          <Button label={t('commonDone')} onPress={() => navigation.goBack()} />
        </>
      ) : (
        <Button
          label={t('exercisesSubmit')}
          onPress={() => submit.mutate()}
          disabled={answered === 0}
          loading={submit.isPending}
        />
      )}
    </Screen>
  );
}

/**
 * Das Ergebnis eines Durchgangs.
 *
 * Die Zahl steht groß und allein, daneben die verdienten XP; der Balken
 * darunter zeigt, wie weit es zur Bestehensgrenze war. Die Farbe – Grün oder
 * Gelb – ist dieselbe wie überall in der App für „geschafft“ und „knapp“.
 */
function ResultBanner({ result, passed }: { result: ExerciseResultDto; passed: boolean }) {
  const { t } = useTranslation();
  const tone = passed
    ? { background: colors.successSoft, accent: colors.success }
    : { background: colors.warningSoft, accent: colors.warning };

  return (
    <View style={[resultBox, { backgroundColor: tone.background }]}>
      <Text style={[readingLabel, { color: tone.accent }]}>
        {passed ? t('exercisesPassed') : t('exercisesAlmost')}
      </Text>

      <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: spacing.sm }}>
        <Text style={[resultScore, { color: tone.accent }]}>{result.score}</Text>
        <Text style={resultTotal}>{t('exercisesOfCorrect', { total: result.total })}</Text>
        <View style={{ flex: 1 }} />
        <Text style={[resultXp, { color: tone.accent }]}>+{result.xpEarned} XP</Text>
      </View>

      <View style={resultTrack}>
        <View
          style={{
            width: `${Math.max(0, Math.min(100, result.scorePercent))}%`,
            height: '100%',
            backgroundColor: tone.accent,
            borderRadius: 4,
          }}
        />
      </View>
    </View>
  );
}

const dot = {
  flex: 1,
  height: 5,
  borderRadius: 3,
  backgroundColor: colors.surfaceAlt,
};

const textBox = {
  backgroundColor: reading.paper,
  borderRadius: radius.lg,
  borderWidth: 1,
  borderColor: reading.edge,
  padding: spacing.lg,
};

const questionCard = {
  backgroundColor: colors.surface,
  borderRadius: radius.lg,
  padding: spacing.lg,
  gap: spacing.md,
  borderWidth: 1,
  borderColor: colors.border,
  ...shadow.card,
};

/** Die Fragennummer steht am Rand des Satzspiegels, nicht im Fließtext. */
const questionNumber = {
  fontFamily: fontFamily.bold,
  fontSize: 15,
  color: colors.primary,
  letterSpacing: 0.5,
  paddingTop: 1,
};

const questionText = {
  ...typography.heading,
  flex: 1,
  color: colors.text,
};

const openInputStyle = {
  minHeight: 90,
  borderRadius: radius.md,
  borderWidth: 1,
  borderColor: colors.border,
  backgroundColor: reading.paper,
  padding: spacing.md,
  textAlignVertical: 'top' as const,
  fontFamily: fontFamily.regular,
  fontSize: 15,
  lineHeight: 22,
  color: colors.text,
};

const optionStyles = {
  base: {
    minHeight: 52,
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    gap: spacing.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  idle: {},
  selected: { borderColor: colors.primary, backgroundColor: colors.primarySoft },
  correct: { borderColor: colors.success, backgroundColor: colors.successSoft },
  wrong: { borderColor: colors.danger, backgroundColor: colors.dangerSoft },
};

/** Die Marke A/B/C trägt den Zustand der Antwort – Rahmen bleiben ruhig. */
const letterBadge = {
  width: 26,
  height: 26,
  borderRadius: 13,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  borderWidth: 1,
  borderColor: colors.border,
  backgroundColor: colors.background,
};

const letterBadgeStyles = {
  idle: {},
  selected: { backgroundColor: colors.primary, borderColor: colors.primary },
  correct: { backgroundColor: colors.success, borderColor: colors.success },
  wrong: { backgroundColor: colors.danger, borderColor: colors.danger },
};

const letterText = {
  fontFamily: fontFamily.bold,
  fontSize: 12,
  color: colors.textMuted,
};

const explanationBox = {
  backgroundColor: reading.paperDeep,
  borderRadius: radius.md,
  borderLeftWidth: 3,
  borderLeftColor: colors.primary,
  padding: spacing.md,
  gap: 2,
};

const explanationText = {
  fontFamily: fontFamily.regular,
  fontSize: 14,
  lineHeight: 21,
  color: reading.inkSoft,
};

const resultBox = {
  borderRadius: radius.lg,
  padding: spacing.lg,
  gap: spacing.sm,
  ...shadow.card,
};

const resultScore = {
  fontFamily: fontFamily.bold,
  fontSize: 44,
  lineHeight: 48,
};

const resultTotal = {
  ...typography.body,
  color: colors.text,
  paddingBottom: 6,
};

const resultXp = {
  fontFamily: fontFamily.bold,
  fontSize: 17,
  paddingBottom: 6,
};

const resultTrack = {
  height: 8,
  borderRadius: 4,
  backgroundColor: 'rgba(13,13,13,0.08)',
  overflow: 'hidden' as const,
};
