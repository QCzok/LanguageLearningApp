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
import { bookFont, bookSans, colors, radius, spacing } from '../../theme';
import { CheckMark } from './BookIcons';
import { SECTION_THEME } from './BookPage';
import type { NotebookStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<NotebookStackParamList, 'Chapter'>;

const SECTIONS: UnitSection[] = ['KURSBUCH', 'ARBEITSBUCH'];

export default function ChapterScreen({ route, navigation }: Props) {
  const { chapterId } = route.params;

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['workbook-chapter', chapterId],
    queryFn: () => workbookApi.chapter(chapterId),
  });

  // Nach dem Bearbeiten einer Einheit muss der Fortschritt hier aktuell sein.
  //
  // Bewusst ohne `refetch` in den Abhängigkeiten: `refetch` ist zwischen
  // Renders nicht zuverlässig referenzgleich. Mit `[refetch]` als Abhängigkeit
  // bekam `useCallback` bei jedem Aufruf eine neue Referenz, wodurch
  // `useFocusEffect` seinen Effekt erneut auslöste – jeder Refetch feuerte so
  // sofort den nächsten, eine Anfrageschleife ohne Ende. `refetch` bezieht
  // sich ohnehin auf den festen `queryKey` dieser Seite, eine veraltete
  // Closure ist hier unproblematisch.
  useFocusEffect(
    React.useCallback(() => {
      void refetch();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  if (isLoading) return <Loading />;
  if (isError || !data) {
    return <ErrorState message="Das Kapitel konnte nicht geladen werden." onRetry={refetch} />;
  }

  function openUnit(unit: UnitSummaryDto) {
    navigation.navigate('Unit', { unitId: unit.id, title: unit.title });
  }

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

      {/*
        Zwei Karten statt einer Liste aller Seiten: Kursbuch und Arbeitsbuch
        sind die beiden Bücher, die ein Nutzer tatsächlich aufschlägt – welche
        Einheit dahinter als Nächstes drankommt, entscheidet die App selbst.
        Innerhalb einer Einheit führt ohnehin schon die Blätterleiste weiter
        (siehe UnitScreen), eine zusätzliche Liste hier wäre eine zweite,
        redundante Navigationsebene.
      */}
      <View style={{ gap: spacing.md }}>
        {SECTIONS.map((section) => {
          const units = data.units.filter((unit) => unit.section === section);
          if (units.length === 0) return null;
          return (
            <SectionCard key={section} section={section} units={units} onPress={openUnit} />
          );
        })}
      </View>
    </Screen>
  );
}

function SectionCard({
  section,
  units,
  onPress,
}: {
  section: UnitSection;
  units: UnitSummaryDto[];
  onPress: (unit: UnitSummaryDto) => void;
}) {
  const theme = SECTION_THEME[section];
  const total = units.length;
  const completed = units.filter((unit) => unit.status === 'COMPLETED').length;
  const started = units.some((unit) => unit.status !== 'NOT_STARTED');
  const allDone = completed === total;
  // Die erste noch offene Seite ist die Anschlussstelle – „weitermachen, wo
  // man aufgehört hat“. Sind alle Seiten fertig, öffnet die Karte wieder bei
  // Seite eins, zum Wiederholen.
  const resumeUnit = units.find((unit) => unit.status !== 'COMPLETED') ?? units[0];

  return (
    <Card onPress={() => onPress(resumeUnit)} style={{ borderLeftWidth: 4, borderLeftColor: theme.accent }}>
      <Row gap={spacing.sm} style={{ alignItems: 'center' }}>
        <View style={{ flex: 1, gap: 2 }}>
          <Text style={[sectionCardLabel, { color: theme.accent }]}>
            {SECTION_LABELS[section].label.toUpperCase()}
          </Text>
          <Caption>{SECTION_LABELS[section].description}</Caption>
        </View>
        <Text style={{ fontSize: 22, color: colors.textMuted }}>›</Text>
      </Row>

      <View style={{ gap: spacing.xs, paddingTop: spacing.sm }}>
        <ProgressBar
          value={total > 0 ? Math.round((completed / total) * 100) : 0}
          color={allDone ? colors.success : theme.accent}
        />
        <Caption>
          {completed} von {total} {total === 1 ? 'Seite' : 'Seiten'} erledigt
        </Caption>
      </View>

      <Text style={[resumeLabel, { color: allDone ? colors.success : colors.text }]}>
        {allDone
          ? 'Alle Seiten abgeschlossen · zum Wiederholen öffnen'
          : `${started ? 'Weiter' : 'Beginnen'} mit „${resumeUnit.title}“`}
      </Text>
    </Card>
  );
}

const sectionCardLabel = {
  fontFamily: bookSans,
  fontSize: 15,
  fontWeight: '700' as const,
  letterSpacing: 1.6,
};

const resumeLabel = {
  fontSize: 15,
  fontWeight: '600' as const,
  paddingTop: spacing.sm,
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
