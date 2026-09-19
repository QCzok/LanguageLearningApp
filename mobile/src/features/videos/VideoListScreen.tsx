import React, { useState } from 'react';
import { Image, RefreshControl, ScrollView, Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CEFR_LEVELS, VIDEO_TOPICS, youtubeThumbnailUrl } from '@lingua/shared';
import type { CefrLevel, VideoTopic } from '@lingua/shared';
import {
  Caption,
  Card,
  EmptyState,
  ErrorState,
  Heading,
  Input,
  LevelBadge,
  Loading,
  ProgressBar,
  Row,
  Tag,
} from '../../components';
import { FilterChip } from '../library/LibraryListScreen';
import { videosApi } from '../../api/endpoints';
import { useTranslation } from '../../i18n';
import type { TranslationKey } from '../../i18n';
import { colors, radius, spacing, typography } from '../../theme';
import type { VideoStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<VideoStackParamList, 'VideoList'>;

/** Beschriftung der Themenfilter – dieselbe Reihenfolge wie `VIDEO_TOPICS`. */
const TOPIC_LABELS: Record<VideoTopic, TranslationKey> = {
  EVERYDAY: 'videoTopicEveryday',
  STREET_INTERVIEW: 'videoTopicStreetInterview',
  GRAMMAR: 'videoTopicGrammar',
  VOCABULARY: 'videoTopicVocabulary',
  CULTURE: 'videoTopicCulture',
};

export default function VideoListScreen({ navigation }: Props) {
  const { t } = useTranslation();
  const [topic, setTopic] = useState<VideoTopic | undefined>(undefined);
  const [level, setLevel] = useState<CefrLevel | undefined>(undefined);
  const [slowOnly, setSlowOnly] = useState(false);
  const [search, setSearch] = useState('');

  const { data, isLoading, isError, refetch, isRefetching } = useQuery({
    queryKey: ['videos', { topic, level, slowOnly, search }],
    queryFn: () =>
      videosApi.list({
        topic,
        level,
        // Nur mitschicken, wenn er greift: Ein `false` wäre ein Filter auf
        // „ausdrücklich nicht langsam gesprochen", und das will hier niemand.
        slowSpeech: slowOnly ? true : undefined,
        search: search || undefined,
        page: 1,
      }),
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={['left', 'right']}>
      <ScrollView
        contentContainerStyle={{ padding: spacing.lg, gap: spacing.md, paddingBottom: spacing.xxl }}
        refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={refetch} />}
        keyboardShouldPersistTaps="handled"
      >
        <Caption>{t('videoListIntro')}</Caption>

        <Input
          value={search}
          onChangeText={setSearch}
          placeholder={t('videoSearchPlaceholder')}
          autoCapitalize="none"
        />

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={filterRow}>
          <FilterChip
            label={t('videoTopicAll')}
            active={topic === undefined}
            onPress={() => setTopic(undefined)}
          />
          {VIDEO_TOPICS.map((entry) => (
            <FilterChip
              key={entry}
              label={t(TOPIC_LABELS[entry])}
              active={topic === entry}
              onPress={() => setTopic(entry)}
            />
          ))}
        </ScrollView>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={filterRow}>
          <FilterChip
            label={t('libraryMyLevel')}
            active={level === undefined}
            onPress={() => setLevel(undefined)}
          />
          {CEFR_LEVELS.map((entry) => (
            <FilterChip key={entry} label={entry} active={level === entry} onPress={() => setLevel(entry)} />
          ))}
          <FilterChip
            label={t('videoSlowSpeech')}
            active={slowOnly}
            onPress={() => setSlowOnly((value) => !value)}
          />
        </ScrollView>

        {isLoading ? <Loading /> : null}
        {isError ? <ErrorState message={t('videoError')} onRetry={refetch} /> : null}

        {data?.items.length === 0 ? (
          <EmptyState
            emoji="📺"
            title={t('commonNothingFound')}
            description={t('videoNothingFoundBody')}
          />
        ) : null}

        {data?.items.map((item) => {
          const watched = item.userProgress?.positionSec ?? 0;
          const percent = item.durationSec ? (watched / item.durationSec) * 100 : 0;

          return (
            <Card
              key={item.id}
              onPress={() =>
                navigation.navigate('VideoPlayer', { videoId: item.id, title: item.title })
              }
            >
              {/*
                Das Vorschaubild kommt von YouTube und trägt den Beitrag – ohne
                es sähe eine Liste fremder Videos aus wie eine Liste von
                Dateinamen.
              */}
              <View style={thumbnailStyle}>
                <Image
                  source={{ uri: youtubeThumbnailUrl(item.youtubeId) }}
                  style={{ width: '100%', height: '100%' }}
                  resizeMode="cover"
                  accessibilityIgnoresInvertColors
                />
                <View style={durationBadgeStyle}>
                  <Text style={[typography.label, { color: colors.textInverse }]}>
                    {formatDuration(item.durationSec)}
                  </Text>
                </View>
              </View>

              <View style={{ gap: spacing.xs, paddingTop: spacing.sm }}>
                <Heading>{item.title}</Heading>
                <Row gap={spacing.xs}>
                  <LevelBadge level={item.level} small />
                  <Caption>· {t(TOPIC_LABELS[item.topic])}</Caption>
                  {item.slowSpeech ? <Caption>· {t('videoSlowSpeech')}</Caption> : null}
                </Row>
                <Row gap={spacing.xs}>
                  <Tag label={item.channelName} />
                </Row>
              </View>

              {percent > 0 ? (
                <ProgressBar
                  value={percent}
                  height={4}
                  color={item.userProgress?.completed ? colors.success : colors.primary}
                />
              ) : null}
            </Card>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

export function formatDuration(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return `${minutes}:${String(rest).padStart(2, '0')}`;
}

const filterRow = { flexDirection: 'row' as const, gap: spacing.sm, paddingRight: spacing.lg };

const thumbnailStyle = {
  width: '100%' as const,
  aspectRatio: 16 / 9,
  borderRadius: radius.md,
  overflow: 'hidden' as const,
  backgroundColor: colors.surfaceAlt,
};

const durationBadgeStyle = {
  position: 'absolute' as const,
  right: spacing.sm,
  bottom: spacing.sm,
  paddingHorizontal: spacing.sm,
  paddingVertical: 2,
  borderRadius: radius.sm,
  backgroundColor: 'rgba(13, 13, 13, 0.82)',
};
