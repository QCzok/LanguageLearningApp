import React, { useMemo, useState } from 'react';
import { Alert, Pressable, Text, View } from 'react-native';
import { useMutation, useQuery } from '@tanstack/react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CEFR_LABELS } from '@lingua/shared';
import type { PlacementResultDto } from '@lingua/shared';
import {
  Body,
  Button,
  Caption,
  Card,
  ErrorState,
  Heading,
  LevelBadge,
  Loading,
  ProgressBar,
  Row,
  Screen,
  Title,
} from '../../components';
import { placementApi, usersApi } from '../../api/endpoints';
import { useAuthStore } from '../../store/auth.store';
import { colors, radius, spacing, typography } from '../../theme';
import type { OnboardingStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<OnboardingStackParamList, 'PlacementTest'>;

export default function PlacementTestScreen({ route }: Props) {
  const { languageId, languageName } = route.params;
  const refreshUser = useAuthStore((state) => state.refreshUser);

  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [result, setResult] = useState<PlacementResultDto | null>(null);

  const { data: questions, isLoading, isError, refetch } = useQuery({
    queryKey: ['placement', languageId],
    queryFn: () => placementApi.getTest(languageId),
    staleTime: Infinity, // Der Test bleibt während eines Durchlaufs stabil
  });

  const submit = useMutation({
    mutationFn: () =>
      placementApi.submit({
        languageId,
        answers: Object.entries(answers).map(([questionId, selectedIndex]) => ({
          questionId,
          selectedIndex,
        })),
      }),
    onSuccess: (data) => setResult(data),
    onError: () =>
      Alert.alert('Auswertung fehlgeschlagen', 'Bitte prüfe deine Verbindung und versuche es erneut.'),
  });

  const finish = useMutation({
    mutationFn: () => usersApi.completeOnboarding(),
    onSuccess: () => refreshUser(),
  });

  const current = questions?.[index];
  const answeredCount = Object.keys(answers).length;
  const progress = questions?.length ? (answeredCount / questions.length) * 100 : 0;

  const levelSummary = useMemo(() => result?.perLevel ?? [], [result]);

  if (isLoading) return <Loading label="Test wird vorbereitet …" />;
  if (isError || !questions?.length) {
    return (
      <ErrorState message={`Für ${languageName} ist noch kein Test verfügbar.`} onRetry={refetch} />
    );
  }

  // ----------------------------------------------------------- Ergebnis
  if (result) {
    return (
      <Screen scroll>
        <View style={{ alignItems: 'center', gap: spacing.md, paddingVertical: spacing.xl }}>
          <Text style={{ fontSize: 56 }}>🎉</Text>
          <Title>Dein Niveau: {result.resultLevel}</Title>
          <LevelBadge level={result.resultLevel} />
          <Body muted>{CEFR_LABELS[result.resultLevel].description}</Body>
        </View>

        <Card>
          <Heading>Ergebnis</Heading>
          <Body>
            {result.correct} von {result.total} richtig ({result.scorePercent} %)
          </Body>
          <ProgressBar value={result.scorePercent} />
        </Card>

        <Card>
          <Heading>Nach Niveau</Heading>
          {levelSummary.map((entry) => (
            <Row key={entry.level} gap={spacing.md}>
              <LevelBadge level={entry.level} small />
              <View style={{ flex: 1 }}>
                <ProgressBar
                  value={entry.total ? (entry.correct / entry.total) * 100 : 0}
                  height={6}
                />
              </View>
              <Caption>
                {entry.correct}/{entry.total}
              </Caption>
            </Row>
          ))}
        </Card>

        <Card style={{ backgroundColor: colors.primarySoft, borderColor: colors.primary }}>
          <Body>{result.recommendation}</Body>
        </Card>

        <Button label="Los geht's" onPress={() => finish.mutate()} loading={finish.isPending} />
      </Screen>
    );
  }

  // -------------------------------------------------------------- Frage
  const selected = current ? answers[current.id] : undefined;
  const isLast = index === questions.length - 1;

  return (
    <Screen>
      <View style={{ gap: spacing.sm }}>
        <Row>
          <Caption>
            Frage {index + 1} von {questions.length}
          </Caption>
          <View style={{ flex: 1 }} />
          {current ? <LevelBadge level={current.level} small /> : null}
        </Row>
        <ProgressBar value={progress} />
      </View>

      {current ? (
        <View style={{ gap: spacing.lg, flex: 1 }}>
          <Card>
            <Heading>{current.prompt}</Heading>
            {current.helperText ? <Caption>{current.helperText}</Caption> : null}
          </Card>

          <View style={{ gap: spacing.sm }}>
            {current.options.map((option, optionIndex) => {
              const isActive = selected === optionIndex;
              return (
                <Pressable
                  key={option}
                  accessibilityRole="radio"
                  accessibilityState={{ selected: isActive }}
                  onPress={() => setAnswers((prev) => ({ ...prev, [current.id]: optionIndex }))}
                  style={[optionStyles.base, isActive && optionStyles.active]}
                >
                  <Text
                    style={[
                      typography.body,
                      { color: isActive ? colors.primaryDark : colors.text, flex: 1 },
                    ]}
                  >
                    {option}
                  </Text>
                </Pressable>
              );
            })}
          </View>

          <View style={{ flex: 1 }} />

          <Row gap={spacing.sm}>
            {index > 0 ? (
              <Button
                label="Zurück"
                variant="secondary"
                onPress={() => setIndex((value) => value - 1)}
                style={{ flex: 1 }}
                fullWidth={false}
              />
            ) : null}
            <Button
              label={isLast ? 'Auswerten' : 'Weiter'}
              onPress={() => (isLast ? submit.mutate() : setIndex((value) => value + 1))}
              disabled={selected === undefined}
              loading={submit.isPending}
              style={{ flex: 2 }}
              fullWidth={false}
            />
          </Row>
        </View>
      ) : null}
    </Screen>
  );
}

const optionStyles = {
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
  active: {
    borderColor: colors.primary,
    borderWidth: 2,
    backgroundColor: colors.primarySoft,
  },
};
