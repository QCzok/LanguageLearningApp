import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { useFocusEffect } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SECTION_LABELS } from '@lingua/shared';
import type { UnitSection, UnitSummaryDto } from '@lingua/shared';
import { ErrorState, Loading } from '../../components';
import { workbookApi } from '../../api/endpoints';
import { book, bookFont, bookLabel, bookSans, colors, spacing } from '../../theme';
import { CheckMark, ChevronRightIcon } from './BookIcons';
import { SECTION_THEME } from './BookPage';
import type { NotebookStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<NotebookStackParamList, 'Chapter'>;

const SECTIONS: UnitSection[] = ['KURSBUCH', 'ARBEITSBUCH'];

/**
 * Der Kapitelauftakt – im Lehrwerk die Seite, die ein Kapitel eröffnet:
 * Kapitelzahl, Titel, worum es geht, was man danach kann, und der Einstieg in
 * Kursbuch und Arbeitsbuch. Dieselbe Papieroptik wie die Lerneinheiten selbst,
 * damit der ganze Bereich ein Heft bleibt und nicht zwischen Karten-App und
 * Buchseite hin- und herspringt.
 */
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

  const progress = data.progress;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={['left', 'right']}>
      <ScrollView contentContainerStyle={{ padding: 10, paddingBottom: spacing.xxl }}>
        <View style={sheet}>
          <View style={{ paddingHorizontal: book.margin, paddingTop: 22 }}>
            <View style={runningHead}>
              <Text style={[eyebrow, { color: book.kursbuch }]}>Kapitel {data.order}</Text>
              <Text style={eyebrowMeta}>{data.level}</Text>
            </View>
            <View style={headRule} />

            <Text style={chapterTitle}>{data.title}</Text>
            <Text style={chapterSubtitle}>{data.subtitle}</Text>
            <Text style={description}>{data.description}</Text>

            {progress && progress.totalUnits > 0 ? (
              <Text style={progressLine}>
                {progress.completedUnits} von {progress.totalUnits} Seiten erledigt
                {progress.scorePercent !== null ? ` · Durchschnitt ${progress.scorePercent} %` : ''}
              </Text>
            ) : null}
          </View>

          <View style={{ paddingHorizontal: book.margin, paddingTop: 22, gap: 9 }}>
            <Text style={goalsLabel}>Das lernen Sie hier</Text>
            {data.goals.map((goal) => (
              <View key={goal} style={{ flexDirection: 'row', gap: 10, alignItems: 'flex-start' }}>
                <View style={{ paddingTop: 4 }}>
                  <CheckMark color={book.correct} size={13} />
                </View>
                <Text style={goalText}>{goal}</Text>
              </View>
            ))}
          </View>

          {/*
            Zwei Einstiege statt einer Liste aller Seiten: Kursbuch und
            Arbeitsbuch sind die beiden Teile, die man tatsächlich aufschlägt –
            welche Seite als Nächstes drankommt, weiß die App selbst. Innerhalb
            einer Einheit führt ohnehin schon die Fußzeile weiter (siehe
            UnitScreen), eine zusätzliche Liste hier wäre eine zweite,
            redundante Navigationsebene.
          */}
          <View style={{ paddingTop: 22 }}>
            {SECTIONS.map((section) => {
              const units = data.units.filter((unit) => unit.section === section);
              if (units.length === 0) return null;
              return <SectionRow key={section} section={section} units={units} onPress={openUnit} />;
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function SectionRow({
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
  // man aufgehört hat“. Sind alle Seiten fertig, öffnet die Zeile wieder bei
  // Seite eins, zum Wiederholen.
  const resumeUnit = units.find((unit) => unit.status !== 'COMPLETED') ?? units[0];

  return (
    <Pressable
      accessibilityRole="button"
      onPress={() => onPress(resumeUnit)}
      style={({ pressed }) => [sectionRow, pressed && { backgroundColor: book.tint }]}
    >
      <View style={[sectionStripe, { backgroundColor: theme.accent }]} />

      <View style={{ flex: 1, gap: 3 }}>
        <Text style={[sectionLabel, { color: theme.accent }]}>{SECTION_LABELS[section].label}</Text>
        <Text style={sectionResume}>
          {allDone
            ? 'Alle Seiten abgeschlossen · zum Wiederholen öffnen'
            : `${started ? 'Weiter' : 'Beginnen'} mit „${resumeUnit.title}“`}
        </Text>
        <Text style={sectionMeta}>
          {completed} von {total} {total === 1 ? 'Seite' : 'Seiten'} erledigt
        </Text>
      </View>

      {allDone ? (
        <CheckMark color={book.correct} size={17} />
      ) : (
        <ChevronRightIcon color={book.inkFaint} size={17} />
      )}
    </Pressable>
  );
}

// ------------------------------------------------------------------ Styles

const sheet = {
  backgroundColor: book.paper,
  borderWidth: 1,
  borderColor: book.paperEdge,
  paddingBottom: 10,
  shadowColor: book.ink,
  shadowOpacity: 0.12,
  shadowRadius: 10,
  shadowOffset: { width: 0, height: 4 },
  elevation: 3,
};

const runningHead = {
  flexDirection: 'row' as const,
  alignItems: 'baseline' as const,
  justifyContent: 'space-between' as const,
};

const eyebrow = {
  ...bookLabel,
  fontSize: 11,
  letterSpacing: 1.8,
};

const eyebrowMeta = {
  fontFamily: bookSans,
  fontSize: 11,
  letterSpacing: 1.2,
  color: book.inkFaint,
};

const headRule = {
  height: 1,
  backgroundColor: book.kursbuch,
  marginTop: 7,
  marginBottom: 16,
};

const chapterTitle = {
  fontFamily: bookFont,
  fontSize: 25,
  lineHeight: 32,
  fontWeight: '700' as const,
  color: book.ink,
};

const chapterSubtitle = {
  fontFamily: bookFont,
  fontSize: 16,
  lineHeight: 24,
  color: book.inkSoft,
  fontStyle: 'italic' as const,
  marginTop: 2,
};

const description = {
  fontFamily: bookFont,
  fontSize: 16,
  lineHeight: 25,
  color: book.ink,
  marginTop: 12,
};

const progressLine = {
  fontFamily: bookSans,
  fontSize: 12,
  color: book.inkFaint,
  marginTop: 10,
};

const goalsLabel = {
  ...bookLabel,
  fontSize: 11,
  letterSpacing: 1.3,
  color: book.inkFaint,
};

const goalText = {
  flex: 1,
  fontFamily: bookFont,
  fontSize: 16,
  lineHeight: 24,
  color: book.ink,
};

const sectionRow = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  gap: 14,
  paddingRight: book.margin,
  paddingLeft: book.margin - 12,
  paddingVertical: 16,
  borderTopWidth: 1,
  borderTopColor: book.rule,
};

/** Griffregister-Streifen des Buchteils – die einzige Farbe der Zeile. */
const sectionStripe = {
  width: 4,
  alignSelf: 'stretch' as const,
};

const sectionLabel = {
  fontFamily: bookSans,
  fontSize: 12,
  fontWeight: '700' as const,
  letterSpacing: 1.4,
  textTransform: 'uppercase' as const,
};

const sectionResume = {
  fontFamily: bookFont,
  fontSize: 17,
  lineHeight: 24,
  color: book.ink,
};

const sectionMeta = {
  fontFamily: bookSans,
  fontSize: 12,
  color: book.inkFaint,
};
