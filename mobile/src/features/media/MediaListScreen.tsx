import React, { useState } from 'react';
import { RefreshControl, ScrollView, Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CEFR_LEVELS } from '@lingua/shared';
import type { CefrLevel } from '@lingua/shared';
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
} from '../../components';
import { FilterChip } from '../library/LibraryListScreen';
import { mediaApi } from '../../api/endpoints';
import { useTranslation } from '../../i18n';
import type { TranslationKey } from '../../i18n';
import { colors, radius, spacing, typography } from '../../theme';
import type { MediaStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<MediaStackParamList, 'MediaList'>;

const TYPE_FILTERS: ReadonlyArray<{ value?: string; label: TranslationKey }> = [
  { value: undefined, label: 'mediaFilterAll' },
  { value: 'PODCAST', label: 'mediaFilterPodcasts' },
  { value: 'AUDIO_LESSON', label: 'mediaFilterLessons' },
  { value: 'DIALOGUE', label: 'mediaFilterDialogues' },
];

const TYPE_ICONS: Record<string, string> = {
  PODCAST: '🎙️',
  AUDIO_LESSON: '🎓',
  DIALOGUE: '💬',
};

export default function MediaListScreen({ navigation }: Props) {
  const { t } = useTranslation();
  const [type, setType] = useState<string | undefined>(undefined);
  const [level, setLevel] = useState<CefrLevel | undefined>(undefined);
  const [search, setSearch] = useState('');

  const { data, isLoading, isError, refetch, isRefetching } = useQuery({
    queryKey: ['media', { type, level, search }],
    queryFn: () => mediaApi.list({ type, level, search: search || undefined, page: 1 }),
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={['left', 'right']}>
      <ScrollView
        contentContainerStyle={{ padding: spacing.lg, gap: spacing.md, paddingBottom: spacing.xxl }}
        refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={refetch} />}
        keyboardShouldPersistTaps="handled"
      >
        <Input
          value={search}
          onChangeText={setSearch}
          placeholder={t('mediaSearchPlaceholder')}
          autoCapitalize="none"
        />

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={filterRow}>
          {TYPE_FILTERS.map((filter) => (
            <FilterChip
              key={filter.label}
              label={t(filter.label)}
              active={type === filter.value}
              onPress={() => setType(filter.value)}
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
        </ScrollView>

        {isLoading ? <Loading /> : null}
        {isError ? <ErrorState message={t('mediaError')} onRetry={refetch} /> : null}

        {data?.items.length === 0 ? (
          <EmptyState
            emoji="🎧"
            title={t('commonNothingFound')}
            description={t('mediaNothingFoundBody')}
          />
        ) : null}

        {data?.items.map((item) => {
          const listened = item.userProgress?.positionSec ?? 0;
          const percent = item.durationSec ? (listened / item.durationSec) * 100 : 0;

          return (
            <Card
              key={item.id}
              onPress={() => navigation.navigate('Player', { mediaId: item.id, title: item.title })}
            >
              <Row gap={spacing.md}>
                <View style={coverStyle}>
                  <Text style={{ fontSize: 26 }}>{TYPE_ICONS[item.type] ?? '🎧'}</Text>
                </View>
                <View style={{ flex: 1, gap: spacing.xs }}>
                  <Heading>{item.title}</Heading>
                  <Row gap={spacing.xs}>
                    <LevelBadge level={item.level} small />
                    <Caption>· {formatDuration(item.durationSec)}</Caption>
                    {item.hasTranscript ? <Caption>· {t('mediaTranscriptBadge')}</Caption> : null}
                  </Row>
                  <Text style={[typography.caption, { color: colors.textMuted }]} numberOfLines={2}>
                    {item.description}
                  </Text>
                </View>
              </Row>

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

const coverStyle = {
  width: 60,
  height: 60,
  borderRadius: radius.md,
  backgroundColor: colors.primarySoft,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};
