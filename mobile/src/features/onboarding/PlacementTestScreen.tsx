import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { useMutation, useQuery } from '@tanstack/react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  CEFR_LABELS,
  CEFR_LEVELS,
  PLACEMENT_PASS_CORRECT,
  PLACEMENT_QUESTIONS_PER_LEVEL,
} from '@lingua/shared';
import type {
  CefrLevel,
  PlacementQuestionDto,
  PlacementResultDto,
  PlacementStageResultDto,
} from '@lingua/shared';
import { Button, ErrorState, Loading } from '../../components';
import { alert } from '../../utils/alert';
import { placementApi, usersApi } from '../../api/endpoints';
import { useAuthStore } from '../../store/auth.store';
import { colors, fontFamily, levelColors, radius, shadow, spacing, typography } from '../../theme';
import type { OnboardingStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<OnboardingStackParamList, 'PlacementTest'>;

/** Antwortmarken A, B, C … – wie im gedruckten Übungsteil. */
const OPTION_LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

/** Die Bilder, die der Test nacheinander zeigt. */
type Phase = 'intro' | 'question' | 'stageBreak' | 'evaluating' | 'result';

/**
 * Der Einstufungstest als Leiter.
 *
 * Statt alle dreißig Fragen am Stück abzufragen, läuft der Test Stufe für
 * Stufe: fünf Fragen je Niveau, drei davon richtig – und es geht eine Stufe
 * höher. Die erste Stufe, die nicht mehr reicht, ist das Ergebnis. Wer auf A2
 * ins Stocken gerät, beantwortet also keine C1-Fragen mehr; der Test ist nach
 * zehn Fragen vorbei statt nach dreißig.
 *
 * Weil die Lösungen den Server nie verlassen, entscheidet nicht die App über
 * das Weiterkommen: Nach jeder Stufe wertet `placementApi.stage` aus und sagt,
 * ob und wohin es weitergeht (siehe `PlacementService`).
 *
 * Der Fortschritt steht deshalb immer doppelt im Bild – die Leiter oben zeigt,
 * welche Stufen geschafft sind und wo man gerade steht, die Punktreihe
 * darunter, die wievielte der fünf Fragen dran ist.
 */
export default function PlacementTestScreen({ route }: Props) {
  const { languageId, languageName } = route.params;
  const refreshUser = useAuthStore((state) => state.refreshUser);

  const [phase, setPhase] = useState<Phase>('intro');
  const [stageIndex, setStageIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [stageResult, setStageResult] = useState<PlacementStageResultDto | null>(null);
  const [result, setResult] = useState<PlacementResultDto | null>(null);

  const { data: questions, isLoading, isError, refetch } = useQuery({
    queryKey: ['placement', languageId],
    queryFn: () => placementApi.getTest(languageId),
    staleTime: Infinity, // Der Test bleibt während eines Durchlaufs stabil
  });

  /** Die Fragen nach Niveau gebündelt – eine Sprosse der Leiter je Eintrag. */
  const stages = useMemo(() => {
    const byLevel = new Map<CefrLevel, PlacementQuestionDto[]>();
    for (const question of questions ?? []) {
      const bucket = byLevel.get(question.level) ?? [];
      bucket.push(question);
      byLevel.set(question.level, bucket);
    }
    return CEFR_LEVELS.filter((level) => byLevel.has(level)).map((level) => ({
      level,
      questions: byLevel.get(level)!,
    }));
  }, [questions]);

  const submit = useMutation({
    mutationFn: () =>
      placementApi.submit({
        languageId,
        answers: Object.entries(answers).map(([questionId, selectedIndex]) => ({
          questionId,
          selectedIndex,
        })),
      }),
    onSuccess: (data) => {
      setResult(data);
      setPhase('result');
    },
    // Bei einem Fehler zurück zur letzten Frage: Von dort führt derselbe Knopf
    // den Abschluss erneut aus, ohne dass Antworten verloren gehen.
    onError: () => {
      setPhase('question');
      alert('Auswertung fehlgeschlagen', 'Bitte prüfe deine Verbindung und versuche es erneut.');
    },
  });

  const stage = useMutation({
    mutationFn: (payload: Array<{ questionId: string; selectedIndex: number }>) =>
      placementApi.stage({ languageId, answers: payload }),
    onSuccess: (data) => {
      setStageResult(data);
      // Durchgefallen oder oben angekommen: Der Test ist vorbei und wird als
      // Ganzes ausgewertet. Sonst erst die Zwischenmeldung zeigen.
      if (data.passed && data.nextLevel) {
        setPhase('stageBreak');
      } else {
        setPhase('evaluating');
        submit.mutate();
      }
    },
    onError: () =>
      alert('Auswertung fehlgeschlagen', 'Bitte prüfe deine Verbindung und versuche es erneut.'),
  });

  // Der Test ist der letzte Schritt des Onboardings – mit dem Ergebnisbild ist es durch.
  const finish = useMutation({
    mutationFn: () => usersApi.completeOnboarding(),
    onSuccess: () => refreshUser(),
  });

  if (isLoading) return <Loading label="Test wird vorbereitet …" />;
  if (isError || !questions?.length || stages.length === 0) {
    return (
      <ErrorState message={`Für ${languageName} ist noch kein Test verfügbar.`} onRetry={refetch} />
    );
  }

  const current = stages[Math.min(stageIndex, stages.length - 1)];
  const question = current.questions[questionIndex];
  const selected = question ? answers[question.id] : undefined;
  const isLastOfStage = questionIndex === current.questions.length - 1;

  /** Die Antworten der laufenden Stufe – nur sie gehen in die Zwischenauswertung. */
  function stageAnswers() {
    return current.questions
      .filter((entry) => answers[entry.id] !== undefined)
      .map((entry) => ({ questionId: entry.id, selectedIndex: answers[entry.id] }));
  }

  function next() {
    if (!isLastOfStage) {
      setQuestionIndex((value) => value + 1);
      return;
    }
    stage.mutate(stageAnswers());
  }

  function continueToNextStage() {
    setStageIndex((value) => value + 1);
    setQuestionIndex(0);
    setStageResult(null);
    setPhase('question');
  }

  // ------------------------------------------------------------- Ergebnis
  if (phase === 'result' && result) {
    return <ResultView result={result} onFinish={() => finish.mutate()} isFinishing={finish.isPending} />;
  }

  // ------------------------------------------------------------ Zwischenstand
  if (phase === 'stageBreak' && stageResult?.nextLevel) {
    return (
      <StageBreak
        stageResult={stageResult}
        stages={stages}
        onContinue={continueToNextStage}
      />
    );
  }

  // ----------------------------------------------------------------- Start
  if (phase === 'intro') {
    return (
      <Intro
        languageName={languageName}
        stages={stages}
        onStart={() => setPhase('question')}
      />
    );
  }

  // Auswertung läuft: kein halber Fragebogen im Hintergrund.
  if (phase === 'evaluating' || submit.isPending) return <Loading label="Wird ausgewertet …" />;

  // ----------------------------------------------------------------- Frage
  return (
    <SafeAreaView style={screen} edges={['top', 'left', 'right']}>
      <View style={{ padding: spacing.lg, gap: spacing.md }}>
        <LevelLadder stages={stages} currentLevel={current.level} />

        <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.sm }}>
          <Text style={microLabel}>Stufe {current.level}</Text>
          <View style={{ flex: 1, height: 1, backgroundColor: colors.border }} />
          <Text style={microLabel}>
            Frage {questionIndex + 1} von {current.questions.length}
          </Text>
        </View>

        {/* Ein Punkt je Frage der Stufe: beantwortet, aktuell, offen. */}
        <View style={{ flexDirection: 'row', gap: 6 }}>
          {current.questions.map((entry, index) => (
            <View
              key={entry.id}
              style={[
                dot,
                answers[entry.id] !== undefined && { backgroundColor: colors.primary },
                index === questionIndex && dotCurrent,
              ]}
            />
          ))}
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{ padding: spacing.lg, paddingTop: 0, gap: spacing.lg }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={{ gap: spacing.xs }}>
          <Text style={promptText}>{question.prompt}</Text>
          {question.helperText ? <Text style={helperStyle}>{question.helperText}</Text> : null}
        </View>

        <View style={{ gap: spacing.sm }}>
          {question.options.map((option, optionIndex) => {
            const isActive = selected === optionIndex;
            return (
              <Pressable
                key={option}
                accessibilityRole="radio"
                accessibilityState={{ selected: isActive }}
                onPress={() => setAnswers((prev) => ({ ...prev, [question.id]: optionIndex }))}
                style={[optionStyles.base, isActive && optionStyles.active]}
              >
                <View style={[letterBadge, isActive && letterBadgeActive]}>
                  <Text style={[letterText, isActive && { color: colors.textInverse }]}>
                    {OPTION_LETTERS[optionIndex] ?? optionIndex + 1}
                  </Text>
                </View>
                <Text
                  style={[
                    typography.body,
                    { flex: 1, fontSize: 16, color: isActive ? colors.primaryDark : colors.text },
                  ]}
                >
                  {option}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>

      {/* Die Knöpfe stehen fest am unteren Rand, nicht am Ende des Inhalts –
          sonst wandern sie bei langen Fragen aus dem Bild. */}
      <SafeAreaView edges={['bottom']} style={footer}>
        {questionIndex > 0 ? (
          <Button
            label="Zurück"
            variant="secondary"
            onPress={() => setQuestionIndex((value) => value - 1)}
            style={{ flex: 1 }}
            fullWidth={false}
          />
        ) : null}
        <Button
          label={isLastOfStage ? `Stufe ${current.level} auswerten` : 'Weiter'}
          onPress={next}
          disabled={selected === undefined}
          loading={stage.isPending}
          style={{ flex: 2 }}
          fullWidth={false}
        />
      </SafeAreaView>
    </SafeAreaView>
  );

}

/**
 * Startbild: Der Test erklärt sich, bevor er losgeht.
 *
 * Drei Sätze zur Regel und die Leiter, die gleich durchlaufen wird – wer
 * weiß, dass eine falsche Antwort nichts kostet, solange drei richtig sind,
 * klickt sich anders durch als jemand, der jede Frage für eine Prüfung hält.
 */
function Intro({
  languageName,
  stages,
  onStart,
}: {
  languageName: string;
  stages: Array<{ level: CefrLevel }>;
  onStart: () => void;
}) {
  const rules = [
    {
      title: `${PLACEMENT_QUESTIONS_PER_LEVEL} Fragen pro Stufe`,
      text: 'Wir fangen ganz unten an, bei A1.',
    },
    {
      title: `${PLACEMENT_PASS_CORRECT} richtig – und du steigst auf`,
      text: 'Reicht es, kommt sofort die nächste Stufe.',
    },
    {
      title: 'Wo es hakt, fängst du an',
      text: 'Die erste Stufe, die nicht reicht, ist dein Niveau.',
    },
  ];

  return (
    <SafeAreaView style={screen} edges={['top', 'left', 'right']}>
      <ScrollView contentContainerStyle={{ padding: spacing.lg, gap: spacing.lg }}>
        <View style={{ gap: spacing.sm, paddingTop: spacing.md }}>
          <Text style={microLabel}>Einstufung</Text>
          <Text style={typography.display}>Wo stehst du in {languageName}?</Text>
          <Text style={[typography.body, { color: colors.textMuted }]}>
            Ein paar Fragen, aufsteigend nach Schwierigkeit. Danach stellen wir Vokabeln, Texte und
            Podcasts auf dein Niveau ein – ändern kannst du es jederzeit im Profil.
          </Text>
        </View>

        <LevelLadder stages={stages} currentLevel={stages[0]?.level} />

        <View style={{ gap: spacing.sm }}>
          {rules.map((rule, index) => (
            <View key={rule.title} style={ruleRow}>
              <View style={ruleNumber}>
                <Text style={ruleNumberText}>{index + 1}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={typography.bodyStrong}>{rule.title}</Text>
                <Text style={[typography.caption, { color: colors.textMuted }]}>{rule.text}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <SafeAreaView edges={['bottom']} style={footer}>
        <Button label="Test starten" onPress={onStart} />
      </SafeAreaView>
    </SafeAreaView>
  );
}

/**
 * Zwischenmeldung nach einer bestandenen Stufe.
 *
 * Sie ist der Moment, in dem der Test seinen Sinn zeigt: Man sieht, dass es
 * gereicht hat, sieht die Leiter einen Schritt höher rücken – und weiß, dass
 * es ab jetzt schwerer wird.
 */
function StageBreak({
  stageResult,
  stages,
  onContinue,
}: {
  stageResult: PlacementStageResultDto;
  stages: Array<{ level: CefrLevel }>;
  onContinue: () => void;
}) {
  const next = stageResult.nextLevel!;

  return (
    <SafeAreaView style={screen} edges={['top', 'left', 'right']}>
      <ScrollView contentContainerStyle={{ padding: spacing.lg, gap: spacing.xl }}>
        <LevelLadder stages={stages} currentLevel={next} passedUpTo={stageResult.level} />

        <View style={{ alignItems: 'center', gap: spacing.sm, paddingTop: spacing.xl }}>
          <View style={[checkCircle, { backgroundColor: levelColors[stageResult.level] }]}>
            <Text style={{ fontSize: 30, color: colors.textInverse }}>✓</Text>
          </View>
          <Text style={typography.display}>{stageResult.level} geschafft</Text>
          <Text style={[typography.body, { color: colors.textMuted }]}>
            {stageResult.correct} von {stageResult.total} richtig
          </Text>
        </View>

        <View style={nextBox}>
          <Text style={microLabel}>Weiter geht es mit</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.sm }}>
            <View style={[levelPill, { backgroundColor: levelColors[next] }]}>
              <Text style={levelPillText}>{next}</Text>
            </View>
            <Text style={[typography.bodyStrong, { flex: 1 }]}>{CEFR_LABELS[next].short}</Text>
          </View>
          <Text style={[typography.caption, { color: colors.textMuted }]}>
            {CEFR_LABELS[next].description}
          </Text>
        </View>
      </ScrollView>

      <SafeAreaView edges={['bottom']} style={footer}>
        <Button label={`Weiter zu ${next}`} onPress={onContinue} />
      </SafeAreaView>
    </SafeAreaView>
  );
}

/**
 * Das Ergebnisbild.
 *
 * Oben das Niveau, darunter die Leiter als Rückblick: jede angetretene Stufe
 * mit ihrem Ergebnis, die letzte als die, auf der es hakte. Das erklärt die
 * Einstufung, ohne sie in Prozent zu übersetzen, die niemand deuten kann.
 */
function ResultView({
  result,
  onFinish,
  isFinishing,
}: {
  result: PlacementResultDto;
  onFinish: () => void;
  isFinishing: boolean;
}) {
  return (
    <SafeAreaView style={screen} edges={['top', 'left', 'right']}>
      <ScrollView contentContainerStyle={{ padding: spacing.lg, gap: spacing.lg }}>
        <View style={{ alignItems: 'center', gap: spacing.sm, paddingVertical: spacing.lg }}>
          <Text style={microLabel}>Dein Niveau</Text>
          <View style={[resultBadge, { backgroundColor: levelColors[result.resultLevel] }]}>
            <Text style={resultBadgeText}>{result.resultLevel}</Text>
          </View>
          <Text style={typography.title}>{CEFR_LABELS[result.resultLevel].short}</Text>
          <Text style={[typography.body, { color: colors.textMuted, textAlign: 'center' }]}>
            {CEFR_LABELS[result.resultLevel].description}
          </Text>
        </View>

        <View style={{ gap: spacing.sm }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.sm }}>
            <Text style={microLabel}>Dein Weg durch den Test</Text>
            <View style={{ flex: 1, height: 1, backgroundColor: colors.border }} />
            <Text style={microLabel}>
              {result.correct}/{result.total}
            </Text>
          </View>

          {result.perLevel.map((entry) => (
            <View key={entry.level} style={recapRow}>
              <View style={[levelPill, { backgroundColor: levelColors[entry.level] }]}>
                <Text style={levelPillText}>{entry.level}</Text>
              </View>

              <View style={{ flex: 1, flexDirection: 'row', gap: 4 }}>
                {Array.from({ length: entry.total }).map((_, index) => (
                  <View
                    key={index}
                    style={[
                      tick,
                      {
                        backgroundColor:
                          index < entry.correct ? levelColors[entry.level] : colors.surfaceAlt,
                      },
                    ]}
                  />
                ))}
              </View>

              <Text style={[typography.caption, { color: colors.textMuted }]}>
                {entry.correct}/{entry.total}
              </Text>
              <Text style={{ fontSize: 13, color: entry.passed ? colors.success : colors.textMuted }}>
                {entry.passed ? '✓' : '—'}
              </Text>
            </View>
          ))}
        </View>

        <View style={recommendationBox}>
          <Text style={[typography.body, { color: colors.primaryDark }]}>
            {result.recommendation}
          </Text>
        </View>
      </ScrollView>

      <SafeAreaView edges={['bottom']} style={footer}>
        <Button label="Los geht's" onPress={onFinish} loading={isFinishing} />
      </SafeAreaView>
    </SafeAreaView>
  );
}

/**
 * Die Leiter: alle Stufen des Tests in einer Reihe.
 *
 * Geschaffte Stufen sind ausgefüllt, die laufende ist umrandet und größer,
 * die kommenden bleiben blass. Damit beantwortet ein Blick beide Fragen, die
 * man während eines Tests hat: Wie weit bin ich – und wie viel kommt noch?
 */
function LevelLadder({
  stages,
  currentLevel,
  passedUpTo,
}: {
  stages: Array<{ level: CefrLevel }>;
  currentLevel?: CefrLevel;
  /** Bis einschließlich dieser Stufe gilt alles als bestanden. */
  passedUpTo?: CefrLevel;
}) {
  const currentIndex = stages.findIndex((entry) => entry.level === currentLevel);
  const passedIndex = passedUpTo
    ? stages.findIndex((entry) => entry.level === passedUpTo)
    : currentIndex - 1;

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {stages.map((entry, index) => {
        const passed = index <= passedIndex;
        const isCurrent = index === currentIndex;

        return (
          <React.Fragment key={entry.level}>
            {index > 0 ? (
              <View
                style={[
                  connector,
                  index <= passedIndex + 1 && { backgroundColor: levelColors[entry.level] },
                ]}
              />
            ) : null}
            <View
              style={[
                rung,
                passed && { backgroundColor: levelColors[entry.level], borderColor: 'transparent' },
                isCurrent && { borderColor: levelColors[entry.level], borderWidth: 2 },
              ]}
            >
              <Text
                style={[
                  rungText,
                  passed && { color: colors.textInverse },
                  isCurrent && { color: levelColors[entry.level] },
                ]}
              >
                {entry.level}
              </Text>
            </View>
          </React.Fragment>
        );
      })}
    </View>
  );
}

const screen = { flex: 1, backgroundColor: colors.background };

const footer = {
  flexDirection: 'row' as const,
  gap: spacing.sm,
  padding: spacing.lg,
  borderTopWidth: 1,
  borderTopColor: colors.border,
  backgroundColor: colors.surface,
};

/** Kleine gesperrte Versalien – die Zwischentitel des Tests. */
const microLabel = {
  fontFamily: fontFamily.semiBold,
  fontSize: 11,
  fontWeight: '700' as const,
  letterSpacing: 1.4,
  textTransform: 'uppercase' as const,
  color: colors.textMuted,
};

const dot = {
  flex: 1,
  height: 5,
  borderRadius: 3,
  backgroundColor: colors.surfaceAlt,
};

const dotCurrent = {
  backgroundColor: colors.primaryDark,
  height: 7,
  marginTop: -1,
};

const promptText = {
  ...typography.title,
  fontSize: 21,
  lineHeight: 29,
  color: colors.text,
};

const helperStyle = {
  ...typography.caption,
  color: colors.textMuted,
};

const optionStyles = {
  base: {
    minHeight: 56,
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
  active: {
    borderColor: colors.primary,
    backgroundColor: colors.primarySoft,
  },
};

const letterBadge = {
  width: 28,
  height: 28,
  borderRadius: 14,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  borderWidth: 1,
  borderColor: colors.border,
  backgroundColor: colors.background,
};

const letterBadgeActive = {
  backgroundColor: colors.primary,
  borderColor: colors.primary,
};

const letterText = {
  fontFamily: fontFamily.bold,
  fontSize: 12,
  color: colors.textMuted,
};

const rung = {
  minWidth: 34,
  height: 30,
  paddingHorizontal: 6,
  borderRadius: radius.sm,
  borderWidth: 1,
  borderColor: colors.border,
  backgroundColor: colors.surface,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const rungText = {
  fontFamily: fontFamily.bold,
  fontSize: 12,
  color: colors.textMuted,
};

const connector = {
  flex: 1,
  height: 2,
  backgroundColor: colors.border,
};

const ruleRow = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  gap: spacing.md,
  padding: spacing.md,
  borderRadius: radius.lg,
  backgroundColor: colors.surface,
  borderWidth: 1,
  borderColor: colors.border,
};

const ruleNumber = {
  width: 28,
  height: 28,
  borderRadius: 14,
  backgroundColor: colors.primarySoft,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const ruleNumberText = {
  fontFamily: fontFamily.bold,
  fontSize: 13,
  color: colors.primary,
};

const checkCircle = {
  width: 72,
  height: 72,
  borderRadius: 36,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  ...shadow.card,
};

const nextBox = {
  gap: spacing.sm,
  padding: spacing.lg,
  borderRadius: radius.lg,
  backgroundColor: colors.surface,
  borderWidth: 1,
  borderColor: colors.border,
  ...shadow.card,
};

const levelPill = {
  minWidth: 34,
  paddingHorizontal: 8,
  paddingVertical: 4,
  borderRadius: radius.sm,
  alignItems: 'center' as const,
};

const levelPillText = {
  fontFamily: fontFamily.bold,
  fontSize: 12,
  color: colors.textInverse,
};

const resultBadge = {
  width: 96,
  height: 96,
  borderRadius: 48,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  ...shadow.card,
};

const resultBadgeText = {
  fontFamily: fontFamily.bold,
  fontSize: 34,
  color: colors.textInverse,
};

const recapRow = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  gap: spacing.sm,
  paddingVertical: spacing.sm,
  paddingHorizontal: spacing.md,
  borderRadius: radius.md,
  backgroundColor: colors.surface,
  borderWidth: 1,
  borderColor: colors.border,
};

const tick = {
  flex: 1,
  height: 6,
  borderRadius: 3,
};

const recommendationBox = {
  padding: spacing.lg,
  borderRadius: radius.lg,
  backgroundColor: colors.primarySoft,
};
