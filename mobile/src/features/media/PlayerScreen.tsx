import React, { useEffect, useRef, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { useAudioPlayer, useAudioPlayerStatus, setAudioModeAsync } from 'expo-audio';
import { useMutation, useQuery } from '@tanstack/react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
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
  Title,
} from '../../components';
import { mediaApi } from '../../api/endpoints';
import { colors, radius, spacing, typography } from '../../theme';
import { formatDuration } from './MediaListScreen';
import type { MediaStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<MediaStackParamList, 'Player'>;

const SKIP_SECONDS = 15;
const SPEEDS = [0.75, 1, 1.25, 1.5];
/** Abstand, in dem die Hörposition ans Backend gemeldet wird. */
const PROGRESS_SYNC_MS = 10_000;

export default function PlayerScreen({ route }: Props) {
  const { mediaId } = route.params;

  const player = useAudioPlayer(undefined, { updateInterval: 500 });
  const status = useAudioPlayerStatus(player);
  const lastSync = useRef(0);
  const hasSeekedInitial = useRef(false);
  const [speed, setSpeed] = useState(1);
  const [showTranscript, setShowTranscript] = useState(false);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['media', mediaId],
    queryFn: () => mediaApi.detail(mediaId),
  });

  const saveProgress = useMutation({
    mutationFn: (payload: { positionSec: number; minutesListened?: number }) =>
      mediaApi.saveProgress(mediaId, payload),
  });

  useEffect(() => {
    void setAudioModeAsync({ playsInSilentMode: true, shouldPlayInBackground: false });
  }, []);

  // Audio laden, sobald die Metadaten da sind.
  useEffect(() => {
    if (!data) return;
    hasSeekedInitial.current = false;
    player.replace({ uri: data.audioUrl });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.id]);

  // Zur gespeicherten Hörposition springen, sobald die Datei geladen ist.
  useEffect(() => {
    if (!hasSeekedInitial.current && status.isLoaded && data?.userProgress?.positionSec) {
      hasSeekedInitial.current = true;
      void player.seekTo(data.userProgress.positionSec);
    }
  }, [status.isLoaded, data, player]);

  // Position regelmäßig sichern, damit „weiterhören" auch nach einem
  // App-Absturz funktioniert.
  useEffect(() => {
    if (!status.playing) return;
    const now = Date.now();
    if (now - lastSync.current > PROGRESS_SYNC_MS) {
      lastSync.current = now;
      saveProgress.mutate({
        positionSec: Math.floor(status.currentTime),
        minutesListened: PROGRESS_SYNC_MS / 60_000,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status.currentTime, status.playing]);

  useEffect(() => {
    if (status.didJustFinish) {
      saveProgress.mutate({ positionSec: Math.floor(status.duration) });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status.didJustFinish]);

  function togglePlay(): void {
    if (status.playing) {
      player.pause();
      saveProgress.mutate({ positionSec: Math.floor(status.currentTime) });
    } else {
      player.play();
    }
  }

  function skip(seconds: number): void {
    const target = Math.max(0, Math.min(status.duration, status.currentTime + seconds));
    void player.seekTo(target);
  }

  function changeSpeed(value: number): void {
    setSpeed(value);
    // Tonhöhenkorrektur ist beim Sprachenlernen wichtig – sonst klingt es unnatürlich.
    player.setPlaybackRate(value, 'high');
  }

  if (isLoading) return <Loading />;
  if (isError || !data) {
    return <ErrorState message="Die Folge konnte nicht geladen werden." onRetry={refetch} />;
  }

  const duration = status.duration || data.durationSec;
  const percent = duration ? (status.currentTime / duration) * 100 : 0;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={['left', 'right']}>
      <ScrollView contentContainerStyle={{ padding: spacing.lg, gap: spacing.lg }}>
        <View style={{ alignItems: 'center', gap: spacing.md, paddingVertical: spacing.lg }}>
          <View style={coverStyle}>
            <Text style={{ fontSize: 56 }}>🎧</Text>
          </View>
          <Title>{data.title}</Title>
          <Row gap={spacing.sm}>
            <LevelBadge level={data.level} small />
            <Caption>{data.language.name}</Caption>
          </Row>
        </View>

        <View style={{ gap: spacing.xs }}>
          <ProgressBar value={percent} height={6} />
          <Row>
            <Caption>{formatDuration(Math.floor(status.currentTime))}</Caption>
            <View style={{ flex: 1 }} />
            <Caption>{formatDuration(duration)}</Caption>
          </Row>
        </View>

        {status.error ? (
          <Card style={{ backgroundColor: colors.warningSoft, borderColor: colors.warning }}>
            <Caption>Die Audiodatei konnte nicht geladen werden.</Caption>
          </Card>
        ) : null}

        <Row gap={spacing.lg} style={{ justifyContent: 'center' }}>
          <Pressable
            accessibilityLabel={`${SKIP_SECONDS} Sekunden zurück`}
            onPress={() => skip(-SKIP_SECONDS)}
            style={secondaryControlStyle}
          >
            <Text style={{ fontSize: 22 }}>⏪</Text>
          </Pressable>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel={status.playing ? 'Pause' : 'Abspielen'}
            onPress={togglePlay}
            disabled={!status.isLoaded}
            style={[playButtonStyle, !status.isLoaded && { opacity: 0.5 }]}
          >
            <Text style={{ fontSize: 32 }}>{status.playing ? '⏸' : '▶️'}</Text>
          </Pressable>

          <Pressable
            accessibilityLabel={`${SKIP_SECONDS} Sekunden vor`}
            onPress={() => skip(SKIP_SECONDS)}
            style={secondaryControlStyle}
          >
            <Text style={{ fontSize: 22 }}>⏩</Text>
          </Pressable>
        </Row>

        <Row gap={spacing.sm} style={{ justifyContent: 'center' }}>
          {SPEEDS.map((value) => (
            <Pressable
              key={value}
              onPress={() => changeSpeed(value)}
              style={[speedChipStyle, speed === value && { backgroundColor: colors.primary }]}
            >
              <Text
                style={[
                  typography.label,
                  { color: speed === value ? colors.textInverse : colors.textMuted },
                ]}
              >
                {value}×
              </Text>
            </Pressable>
          ))}
        </Row>

        <Card>
          <Heading>Beschreibung</Heading>
          <Body>{data.description}</Body>
        </Card>

        {data.transcript ? (
          <Card onPress={() => setShowTranscript((value) => !value)}>
            <Row>
              <Heading>Transkript</Heading>
              <View style={{ flex: 1 }} />
              <Caption>{showTranscript ? 'Ausblenden' : 'Anzeigen'}</Caption>
            </Row>
            {showTranscript ? (
              <Text style={[typography.body, { lineHeight: 26 }]}>{data.transcript}</Text>
            ) : (
              <Caption>Mitlesen hilft beim Hörverstehen.</Caption>
            )}
          </Card>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}

const coverStyle = {
  width: 160,
  height: 160,
  borderRadius: radius.xl,
  backgroundColor: colors.primarySoft,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const playButtonStyle = {
  width: 76,
  height: 76,
  borderRadius: 38,
  backgroundColor: colors.primarySoft,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const secondaryControlStyle = {
  width: 56,
  height: 56,
  borderRadius: 28,
  backgroundColor: colors.surface,
  borderWidth: 1,
  borderColor: colors.border,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const speedChipStyle = {
  paddingHorizontal: spacing.md,
  paddingVertical: spacing.sm,
  borderRadius: radius.full,
  backgroundColor: colors.surface,
  borderWidth: 1,
  borderColor: colors.border,
};
