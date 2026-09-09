import React, { useCallback, useEffect, useRef, useState } from 'react';
import { NativeScrollEvent, NativeSyntheticEvent, ScrollView, Text, View } from 'react-native';
import { useMutation, useQuery } from '@tanstack/react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Button,
  Caption,
  Card,
  ErrorState,
  Heading,
  LevelBadge,
  Loading,
  ProgressBar,
  Row,
} from '../../components';
import { libraryApi } from '../../api/endpoints';
import { colors, spacing, typography } from '../../theme';
import type { LibraryStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<LibraryStackParamList, 'Reader'>;

/** Erst ab dieser Änderung wird der Fortschritt erneut gespeichert. */
const PROGRESS_STEP = 10;

export default function ReaderScreen({ route, navigation }: Props) {
  const { contentId, title } = route.params;
  const [progress, setProgress] = useState(0);
  const lastSaved = useRef(0);
  const startedAt = useRef(Date.now());

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['library', contentId],
    queryFn: () => libraryApi.detail(contentId),
  });

  const saveProgress = useMutation({
    mutationFn: (payload: { progressPercent: number; minutesRead?: number }) =>
      libraryApi.saveProgress(contentId, payload),
  });

  /**
   * Lesefortschritt aus der Scrollposition. Gespeichert wird in Zehnerschritten,
   * damit nicht jeder Scroll-Frame einen Request auslöst.
   */
  const handleScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
      const scrollable = Math.max(1, contentSize.height - layoutMeasurement.height);
      const percent = Math.min(100, Math.round((contentOffset.y / scrollable) * 100));

      setProgress((previous) => Math.max(previous, percent));

      if (percent - lastSaved.current >= PROGRESS_STEP) {
        lastSaved.current = percent;
        saveProgress.mutate({ progressPercent: percent });
      }
    },
    [saveProgress],
  );

  // Beim Verlassen: Endstand und Lesezeit festhalten.
  useEffect(
    () => () => {
      const minutes = Math.round((Date.now() - startedAt.current) / 60_000);
      if (progress > lastSaved.current || minutes > 0) {
        saveProgress.mutate({ progressPercent: progress, minutesRead: minutes });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [progress],
  );

  if (isLoading) return <Loading />;
  if (isError || !data) {
    return <ErrorState message="Der Text konnte nicht geladen werden." onRetry={refetch} />;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={['left', 'right']}>
      <ProgressBar value={progress} height={3} />

      <ScrollView
        onScroll={handleScroll}
        scrollEventThrottle={200}
        contentContainerStyle={{ padding: spacing.lg, gap: spacing.lg, paddingBottom: spacing.xxl }}
      >
        <View style={{ gap: spacing.sm }}>
          <Row gap={spacing.sm}>
            <LevelBadge level={data.level} small />
            <Caption>
              {data.estimatedMinutes} Min · {data.wordCount} Wörter
            </Caption>
          </Row>
          <Text style={typography.display}>{data.title}</Text>
          {data.author ? <Caption>von {data.author}</Caption> : null}
        </View>

        <Card style={{ backgroundColor: colors.surfaceAlt }}>
          <Caption>{data.summary}</Caption>
        </Card>

        {/* Absätze einzeln rendern: bessere Lesbarkeit als ein Textblock. */}
        <View style={{ gap: spacing.lg }}>
          {data.body?.split('\n\n').map((paragraph, index) => (
            <Text key={index} style={[typography.body, { fontSize: 17, lineHeight: 28 }]}>
              {paragraph.trim()}
            </Text>
          ))}
        </View>

        {data.exerciseCount > 0 ? (
          <Card style={{ backgroundColor: colors.primarySoft, borderColor: colors.primary }}>
            <Heading>Verständnisfragen</Heading>
            <Caption>
              {data.exerciseCount} Aufgaben zu diesem Text
              {data.userProgress?.bestScore != null
                ? ` · bestes Ergebnis ${data.userProgress.bestScore} %`
                : ''}
            </Caption>
            <Button
              label="Übungen starten"
              onPress={() => navigation.navigate('Exercises', { contentId, title })}
            />
          </Card>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}
