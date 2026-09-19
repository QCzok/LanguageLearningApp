import React, { useCallback, useRef, useState } from 'react';
import { Linking, ScrollView, Text, View } from 'react-native';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { youtubeWatchUrl } from '@lingua/shared';
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
  Tag,
  Title,
} from '../../components';
import { videosApi } from '../../api/endpoints';
import { useTranslation } from '../../i18n';
import { colors, spacing, typography } from '../../theme';
import YoutubePlayer from './YoutubePlayer';
import { formatDuration } from './VideoListScreen';
import type { VideoStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<VideoStackParamList, 'VideoPlayer'>;

/** Abstand, in dem die Sehposition ans Backend gemeldet wird. */
const PROGRESS_SYNC_MS = 10_000;

export default function VideoPlayerScreen({ route }: Props) {
  const { videoId } = route.params;
  const { t, tLanguage } = useTranslation();
  const queryClient = useQueryClient();

  const [positionSec, setPositionSec] = useState(0);
  const [unplayable, setUnplayable] = useState(false);
  const lastSync = useRef(0);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['video', videoId],
    queryFn: () => videosApi.detail(videoId),
  });

  const saveProgress = useMutation({
    mutationFn: (payload: { positionSec: number; completed?: boolean; minutesWatched?: number }) =>
      videosApi.saveProgress(videoId, payload),
    onSuccess: () => {
      // Die Liste zeigt denselben Balken – sie darf nicht veralten.
      void queryClient.invalidateQueries({ queryKey: ['videos'] });
    },
  });

  /*
    Der Player meldet jede Sekunde; gespeichert wird viel seltener. Der
    Zwischenstand steht nur im Zustand, damit die Anzeige mitläuft, ohne dass
    jede Sekunde eine Anfrage entsteht.
  */
  const handleProgress = useCallback(
    (seconds: number, playing: boolean) => {
      setPositionSec(seconds);
      if (!playing) return;

      const now = Date.now();
      if (now - lastSync.current > PROGRESS_SYNC_MS) {
        lastSync.current = now;
        saveProgress.mutate({
          positionSec: seconds,
          minutesWatched: PROGRESS_SYNC_MS / 60_000,
        });
      }
    },
    [saveProgress],
  );

  const handleEnded = useCallback(() => {
    saveProgress.mutate({ positionSec: data?.durationSec ?? positionSec, completed: true });
  }, [data?.durationSec, positionSec, saveProgress]);

  if (isLoading) return <Loading />;
  if (isError || !data) {
    return <ErrorState message={t('videoDetailError')} onRetry={refetch} />;
  }

  const startSec = data.userProgress?.completed ? 0 : (data.userProgress?.positionSec ?? 0);
  const percent = data.durationSec ? (Math.max(positionSec, startSec) / data.durationSec) * 100 : 0;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={['left', 'right']}>
      <ScrollView contentContainerStyle={{ padding: spacing.lg, gap: spacing.lg }}>
        <YoutubePlayer
          youtubeId={data.youtubeId}
          startSec={startSec}
          onProgress={handleProgress}
          onEnded={handleEnded}
          onUnplayable={() => setUnplayable(true)}
        />

        <View style={{ gap: spacing.xs }}>
          <ProgressBar value={percent} height={6} />
          <Row>
            <Caption>{formatDuration(Math.min(positionSec, data.durationSec))}</Caption>
            <View style={{ flex: 1 }} />
            <Caption>{formatDuration(data.durationSec)}</Caption>
          </Row>
        </View>

        {/*
          Manche Kanäle untersagen das Einbetten. Der Rahmen bleibt dann
          schwarz, und ohne diesen Hinweis sähe es nach einem Fehler der App
          aus – der Weg zu YouTube führt trotzdem ans Ziel.
        */}
        {unplayable ? (
          <Card style={{ backgroundColor: colors.warningSoft, borderColor: colors.warning }}>
            <Caption>{t('videoEmbedBlocked')}</Caption>
          </Card>
        ) : null}

        <View style={{ gap: spacing.sm }}>
          <Title>{data.title}</Title>
          <Row gap={spacing.sm}>
            <LevelBadge level={data.level} small />
            <Caption>{tLanguage(data.language.code, data.language.name)}</Caption>
            {data.slowSpeech ? <Caption>· {t('videoSlowSpeech')}</Caption> : null}
          </Row>
        </View>

        <Card>
          <Heading>{t('videoSource')}</Heading>
          <Body>{data.channelName}</Body>
          <Caption>{t('videoSourceHint')}</Caption>
          <Row gap={spacing.sm} style={{ flexWrap: 'wrap', paddingTop: spacing.sm }}>
            <Button
              label={t('videoOpenOnYoutube')}
              variant="secondary"
              fullWidth={false}
              onPress={() => void Linking.openURL(youtubeWatchUrl(data.youtubeId, positionSec))}
            />
            {data.channelUrl ? (
              <Button
                label={t('videoOpenChannel')}
                variant="ghost"
                fullWidth={false}
                onPress={() => void Linking.openURL(data.channelUrl)}
              />
            ) : null}
          </Row>
        </Card>

        {data.tags.length > 0 ? (
          <Row gap={spacing.xs} style={{ flexWrap: 'wrap' }}>
            {data.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </Row>
        ) : null}

        <Card>
          <Heading>{t('videoTipsTitle')}</Heading>
          <Text style={[typography.body, { lineHeight: 24 }]}>{t('videoTipsBody')}</Text>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}
