import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { Audio, AVPlaybackStatus } from 'expo-av';
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

  const soundRef = useRef<Audio.Sound | null>(null);
  const lastSync = useRef(0);
  const [status, setStatus] = useState<{
    isLoaded: boolean;
    isPlaying: boolean;
    positionSec: number;
    durationSec: number;
  }>({ isLoaded: false, isPlaying: false, positionSec: 0, durationSec: 0 });
  const [speed, setSpeed] = useState(1);
  const [showTranscript, setShowTranscript] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['media', mediaId],
    queryFn: () => mediaApi.detail(mediaId),
  });

  const saveProgress = useMutation({
    mutationFn: (payload: { positionSec: number; minutesListened?: number }) =>
      mediaApi.saveProgress(mediaId, payload),
  });

  const onPlaybackStatus = useCallback(
    (playbackStatus: AVPlaybackStatus) => {
      if (!playbackStatus.isLoaded) return;

      const positionSec = Math.floor(playbackStatus.positionMillis / 1000);
      setStatus({
        isLoaded: true,
        isPlaying: playbackStatus.isPlaying,
        positionSec,
        durationSec: Math.floor((playbackStatus.durationMillis ?? 0) / 1000),
      });

      // Position regelmäßig sichern, damit „weiterhören" auch nach einem
      // App-Absturz funktioniert.
      const now = Date.now();
      if (playbackStatus.isPlaying && now - lastSync.current > PROGRESS_SYNC_MS) {
        lastSync.current = now;
        saveProgress.mutate({ positionSec, minutesListened: PROGRESS_SYNC_MS / 60_000 });
      }
      if (playbackStatus.didJustFinish) {
        saveProgress.mutate({ positionSec: Math.floor((playbackStatus.durationMillis ?? 0) / 1000) });
      }
    },
    [saveProgress],
  );

  // Audio laden, sobald die Metadaten da sind – und beim Verlassen wieder freigeben.
  useEffect(() => {
    if (!data) return;
    let cancelled = false;

    async function load() {
      try {
        await Audio.setAudioModeAsync({ playsInSilentModeIOS: true, staysActiveInBackground: false });
        const { sound } = await Audio.Sound.createAsync(
          { uri: data!.audioUrl },
          {
            shouldPlay: false,
            positionMillis: (data!.userProgress?.positionSec ?? 0) * 1000,
            progressUpdateIntervalMillis: 500,
          },
          onPlaybackStatus,
        );
        if (cancelled) {
          await sound.unloadAsync();
          return;
        }
        soundRef.current = sound;
      } catch {
        if (!cancelled) {
          setLoadError('Die Audiodatei konnte nicht geladen werden.');
        }
      }
    }

    void load();

    return () => {
      cancelled = true;
      const sound = soundRef.current;
      soundRef.current = null;
      void sound?.unloadAsync();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.id]);

  async function togglePlay(): Promise<void> {
    const sound = soundRef.current;
    if (!sound) return;
    if (status.isPlaying) {
      await sound.pauseAsync();
      saveProgress.mutate({ positionSec: status.positionSec });
    } else {
      await sound.playAsync();
    }
  }

  async function skip(seconds: number): Promise<void> {
    const sound = soundRef.current;
    if (!sound) return;
    const target = Math.max(0, Math.min(status.durationSec, status.positionSec + seconds));
    await sound.setPositionAsync(target * 1000);
  }

  async function changeSpeed(value: number): Promise<void> {
    setSpeed(value);
    // Tonhöhenkorrektur ist beim Sprachenlernen wichtig – sonst klingt es unnatürlich.
    await soundRef.current?.setRateAsync(value, true);
  }

  if (isLoading) return <Loading />;
  if (isError || !data) {
    return <ErrorState message="Die Folge konnte nicht geladen werden." onRetry={refetch} />;
  }

  const duration = status.durationSec || data.durationSec;
  const percent = duration ? (status.positionSec / duration) * 100 : 0;

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
            <Caption>{formatDuration(status.positionSec)}</Caption>
            <View style={{ flex: 1 }} />
            <Caption>{formatDuration(duration)}</Caption>
          </Row>
        </View>

        {loadError ? (
          <Card style={{ backgroundColor: colors.warningSoft, borderColor: colors.warning }}>
            <Caption>{loadError}</Caption>
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
            accessibilityLabel={status.isPlaying ? 'Pause' : 'Abspielen'}
            onPress={togglePlay}
            disabled={!status.isLoaded}
            style={[playButtonStyle, !status.isLoaded && { opacity: 0.5 }]}
          >
            <Text style={{ fontSize: 32 }}>{status.isPlaying ? '⏸' : '▶️'}</Text>
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
