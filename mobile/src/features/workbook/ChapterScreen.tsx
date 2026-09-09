import React from 'react';
import { Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { useFocusEffect } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SECTION_LABELS } from '@lingua/shared';
import type { UnitSection, UnitSummaryDto } from '@lingua/shared';
import {
  Body,
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
import { workbookApi } from '../../api/endpoints';
import { bookFont, colors, radius, spacing, typography } from '../../theme';
import { CheckMark } from './BookIcons';
import type { NotebookStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<NotebookStackParamList, 'Chapter'>;

export default function ChapterScreen({ route, navigation }: Props) {
  const { chapterId } = route.params;

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['workbook-chapter', chapterId],
    queryFn: () => workbookApi.chapter(chapterId),
  });

  // Nach dem Bearbeiten einer Einheit muss der Fortschritt hier aktuell sein.
  useFocusEffect(
    React.useCallback(() => {
      void refetch();
    }, [refetch]),
  );

  if (isLoading) return <Loading />;
  if (isError || !data) {
    return <ErrorState message="Das Kapitel konnte nicht geladen werden." onRetry={refetch} />;
  }

  const sections: UnitSection[] = ['KURSBUCH', 'ARBEITSBUCH'];

  return (
    <Screen scroll>
      <Card style={{ backgroundColor: colors.primarySoft, borderColor: colors.primary }}>
        <Row gap={spacing.md} style={{ alignItems: 'flex-start' }}>
          <View style={chapterNumeral}>
            <Text style={chapterNumeralText}>{data.order}</Text>
          </View>
          <View style={{ flex: 1, gap: spacing.xs }}>
            <Row gap={spacing.sm}>
              <LevelBadge level={data.level} small />
              <Caption>Kapitel {data.order}</Caption>
            </Row>
            <Title>{data.title}</Title>
            <Caption>{data.subtitle}</Caption>
          </View>
        </Row>

        <Body>{data.description}</Body>

        {data.progress ? (
          <View style={{ gap: spacing.xs, paddingTop: spacing.sm }}>
            <ProgressBar
              value={data.progress.percent}
              color={data.progress.percent === 100 ? colors.success : colors.primary}
            />
            <Caption>
              {data.progress.completedUnits} von {data.progress.totalUnits} Einheiten erledigt
              {data.progress.scorePercent !== null
                ? ` · Durchschnitt ${data.progress.scorePercent} %`
                : ''}
            </Caption>
          </View>
        ) : null}
      </Card>

      <Card>
        <Heading>Das lernen Sie in diesem Kapitel</Heading>
        <View style={{ gap: spacing.xs, paddingTop: spacing.xs }}>
          {data.goals.map((goal) => (
            <Row key={goal} gap={spacing.sm} style={{ alignItems: 'flex-start' }}>
              <View style={{ paddingTop: 3 }}>
                <CheckMark color={colors.success} size={15} />
              </View>
              <Body>{goal}</Body>
            </Row>
          ))}
        </View>
      </Card>

      {sections.map((section) => {
        const units = data.units.filter((unit) => unit.section === section);
        if (units.length === 0) return null;

        return (
          <View key={section} style={{ gap: spacing.md }}>
            {/* Buchteil-Trenner wie im Inhaltsverzeichnis: Name, Linie, Erklärung. */}
            <View style={{ gap: spacing.xs }}>
              <Row gap={spacing.sm}>
                <Text style={sectionLabel}>{SECTION_LABELS[section].label.toUpperCase()}</Text>
                <View style={{ flex: 1, height: 1, backgroundColor: colors.border }} />
              </Row>
              <Caption>{SECTION_LABELS[section].description}</Caption>
            </View>

            {units.map((unit) => (
              <UnitRow
                key={unit.id}
                unit={unit}
                onPress={() =>
                  navigation.navigate('Unit', { unitId: unit.id, title: unit.title })
                }
              />
            ))}
          </View>
        );
      })}
    </Screen>
  );
}

function UnitRow({ unit, onPress }: { unit: UnitSummaryDto; onPress: () => void }) {
  const done = unit.status === 'COMPLETED';
  const started = unit.status === 'IN_PROGRESS';

  return (
    <Card onPress={onPress} style={done ? { borderColor: colors.success } : undefined}>
      <Row gap={spacing.md}>
        <View
          style={[
            statusCircle,
            done
              ? { backgroundColor: colors.success, borderColor: colors.success }
              : started
                ? { borderColor: colors.warning, borderWidth: 3 }
                : null,
          ]}
        >
          {done ? (
            <CheckMark color={colors.textInverse} size={15} />
          ) : (
            <Text style={[typography.label, { color: colors.textMuted }]}>{unit.order}</Text>
          )}
        </View>

        <View style={{ flex: 1 }}>
          <Text style={typography.bodyStrong}>{unit.title}</Text>
          {unit.subtitle ? <Caption>{unit.subtitle}</Caption> : null}
          <Row gap={spacing.xs}>
            <Caption>{unit.estimatedMinutes} Min</Caption>
            {unit.exerciseCount > 0 ? <Caption>· {unit.exerciseCount} Aufgaben</Caption> : null}
            {unit.scorePercent !== null ? (
              <Caption>
                · <Text style={{ color: scoreColor(unit.scorePercent) }}>{unit.scorePercent} %</Text>
              </Caption>
            ) : null}
          </Row>
        </View>

        <Text style={{ fontSize: 18, color: colors.textMuted }}>›</Text>
      </Row>
    </Card>
  );
}

function scoreColor(score: number): string {
  if (score >= 80) return colors.success;
  if (score >= 50) return colors.warning;
  return colors.danger;
}

const sectionLabel = {
  fontSize: 14,
  fontWeight: '700' as const,
  letterSpacing: 1.6,
  color: colors.text,
};

const chapterNumeral = {
  width: 46,
  height: 46,
  borderRadius: radius.sm,
  borderWidth: 1.5,
  borderColor: colors.primary,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const chapterNumeralText = {
  fontFamily: bookFont,
  fontSize: 24,
  lineHeight: 29,
  fontWeight: '700' as const,
  color: colors.primaryDark,
};

const statusCircle = {
  width: 32,
  height: 32,
  borderRadius: 16,
  borderWidth: 2,
  borderColor: colors.border,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};
