import React, { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { useMutation, useQuery } from '@tanstack/react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { ExerciseResultDto } from '@lingua/shared';
import {
  Body,
  Button,
  Caption,
  Card,
  ErrorState,
  Heading,
  Loading,
  ProgressBar,
  Row,
  Screen,
  Title,
} from '../../components';
import { libraryApi } from '../../api/endpoints';
import { colors, radius, spacing, typography } from '../../theme';
import type { LibraryStackParamList } from '../../navigation/types';
import { ReadingSection } from './ReadingSection';

type Props = NativeStackScreenProps<LibraryStackParamList, 'Exercises'>;

export default function ExercisesScreen({ route, navigation }: Props) {
  const { contentId } = route.params;

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
    return <ErrorState message="Zu diesem Text gibt es keine Übungen." onRetry={refetch} />;
  }

  const exercises = data.exercises;
  const answered = exercises.filter(
    (exercise) => choices[exercise.id] !== undefined || texts[exercise.id]?.trim(),
  ).length;
  const resultById = new Map(result?.results.map((entry) => [entry.exerciseId, entry]));

  return (
    <Screen scroll>
      {result ? (
        <Card
          style={{
            backgroundColor: result.scorePercent >= 60 ? colors.successSoft : colors.warningSoft,
            borderColor: result.scorePercent >= 60 ? colors.success : colors.warning,
          }}
        >
          <Row>
            <Title>
              {result.score} / {result.total} richtig
            </Title>
            <View style={{ flex: 1 }} />
            <Text style={typography.title}>+{result.xpEarned} XP</Text>
          </Row>
          <ProgressBar
            value={result.scorePercent}
            color={result.scorePercent >= 60 ? colors.success : colors.warning}
          />
        </Card>
      ) : (
        <View style={{ gap: spacing.sm }}>
          <Caption>
            {answered} von {exercises.length} beantwortet
          </Caption>
          <ProgressBar value={(answered / exercises.length) * 100} height={6} />
        </View>
      )}

      {/* Zum Nachlesen während der Aufgaben – standardmäßig eingeklappt,
          damit die Fragen im Vordergrund stehen. */}
      {data.body?.length ? (
        <Card>
          <Pressable
            accessibilityRole="button"
            onPress={() => setTextVisible((value) => !value)}
            style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.sm }}
          >
            <Text style={{ fontSize: 18 }}>{textVisible ? '▾' : '▸'}</Text>
            <Heading>{textVisible ? 'Text ausblenden' : 'Text anzeigen'}</Heading>
          </Pressable>
          {textVisible ? (
            <View style={{ gap: spacing.lg, marginTop: spacing.sm }}>
              {data.body.map((section) => (
                <ReadingSection key={section.id} section={section} />
              ))}
            </View>
          ) : null}
        </Card>
      ) : null}

      {exercises.map((exercise, index) => {
        const feedback = resultById.get(exercise.id);
        const isOpen = exercise.type === 'OPEN';

        return (
          <Card key={exercise.id}>
            <Row gap={spacing.sm} style={{ alignItems: 'flex-start' }}>
              <Text style={[typography.label, { color: colors.textMuted }]}>{index + 1}</Text>
              <Heading>{exercise.question}</Heading>
            </Row>

            {isOpen ? (
              <TextInput
                multiline
                value={texts[exercise.id] ?? ''}
                onChangeText={(value) => setTexts((prev) => ({ ...prev, [exercise.id]: value }))}
                editable={!result}
                placeholder="Deine Antwort …"
                placeholderTextColor={colors.textMuted}
                style={openInputStyle}
              />
            ) : (
              exercise.options.map((option, optionIndex) => {
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
                    disabled={Boolean(result)}
                    onPress={() => setChoices((prev) => ({ ...prev, [exercise.id]: optionIndex }))}
                    style={[optionStyles.base, optionStyles[state]]}
                  >
                    <Text style={[typography.body, { flex: 1 }]}>{option}</Text>
                    {state === 'correct' ? <Text>✓</Text> : null}
                    {state === 'wrong' ? <Text>✗</Text> : null}
                  </Pressable>
                );
              })
            )}

            {/* Erklärungen liefert das Backend erst nach der Abgabe mit. */}
            {feedback?.explanation ? (
              <Card style={{ backgroundColor: colors.surfaceAlt, borderWidth: 0 }}>
                <Caption>{feedback.explanation}</Caption>
              </Card>
            ) : null}
          </Card>
        );
      })}

      {result ? (
        <>
          <Button
            label="Nochmal versuchen"
            variant="secondary"
            onPress={() => {
              setResult(null);
              setChoices({});
              setTexts({});
            }}
          />
          <Button label="Fertig" onPress={() => navigation.goBack()} />
        </>
      ) : (
        <Button
          label="Antworten abgeben"
          onPress={() => submit.mutate()}
          disabled={answered === 0}
          loading={submit.isPending}
        />
      )}
    </Screen>
  );
}

const openInputStyle = {
  minHeight: 90,
  borderRadius: radius.md,
  borderWidth: 1,
  borderColor: colors.border,
  backgroundColor: colors.surface,
  padding: spacing.md,
  textAlignVertical: 'top' as const,
  fontSize: 15,
  color: colors.text,
};

const optionStyles = {
  base: {
    minHeight: 50,
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  idle: {},
  selected: { borderColor: colors.primary, borderWidth: 2, backgroundColor: colors.primarySoft },
  correct: { borderColor: colors.success, borderWidth: 2, backgroundColor: colors.successSoft },
  wrong: { borderColor: colors.danger, borderWidth: 2, backgroundColor: colors.dangerSoft },
};
