import React, { useState } from 'react';
import { Pressable, RefreshControl, ScrollView, Text, View } from 'react-native';
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
  Tag,
} from '../../components';
import { libraryApi } from '../../api/endpoints';
import { colors, radius, spacing, typography } from '../../theme';
import type { LibraryStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<LibraryStackParamList, 'LibraryList'>;

const TYPE_FILTERS = [
  { value: undefined, label: 'Alle' },
  { value: 'ARTICLE', label: 'Artikel' },
  { value: 'STORY', label: 'Geschichten' },
] as const;

export default function LibraryListScreen({ navigation }: Props) {
  const [type, setType] = useState<string | undefined>(undefined);
  const [level, setLevel] = useState<CefrLevel | undefined>(undefined);
  const [search, setSearch] = useState('');

  const { data, isLoading, isError, refetch, isRefetching } = useQuery({
    queryKey: ['library', { type, level, search }],
    queryFn: () => libraryApi.list({ type, level, search: search || undefined, page: 1 }),
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
          placeholder="Suchen …"
          autoCapitalize="none"
          returnKeyType="search"
        />

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={filterRow}>
          {TYPE_FILTERS.map((filter) => (
            <FilterChip
              key={filter.label}
              label={filter.label}
              active={type === filter.value}
              onPress={() => setType(filter.value)}
            />
          ))}
        </ScrollView>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={filterRow}>
          <FilterChip label="Mein Niveau" active={level === undefined} onPress={() => setLevel(undefined)} />
          {CEFR_LEVELS.map((entry) => (
            <FilterChip
              key={entry}
              label={entry}
              active={level === entry}
              onPress={() => setLevel(entry)}
            />
          ))}
        </ScrollView>

        {isLoading ? <Loading /> : null}
        {isError ? <ErrorState message="Die Bibliothek konnte nicht geladen werden." onRetry={refetch} /> : null}

        {data?.items.length === 0 ? (
          <EmptyState
            emoji="📚"
            title="Nichts gefunden"
            description="Passe die Filter an oder suche nach einem anderen Begriff."
          />
        ) : null}

        {data?.items.map((content) => (
          <Card
            key={content.id}
            onPress={() =>
              navigation.navigate('Reader', { contentId: content.id, title: content.title })
            }
          >
            <Row gap={spacing.sm}>
              <Text style={{ fontSize: 22 }}>{content.type === 'STORY' ? '📖' : '📰'}</Text>
              <View style={{ flex: 1 }}>
                <Heading>{content.title}</Heading>
                <Row gap={spacing.xs}>
                  <LevelBadge level={content.level} small />
                  <Caption>· {content.estimatedMinutes} Min</Caption>
                  <Caption>· {content.exerciseCount} Übungen</Caption>
                </Row>
              </View>
            </Row>

            <Text style={[typography.body, { color: colors.textMuted }]} numberOfLines={2}>
              {content.summary}
            </Text>

            {content.tags.length > 0 ? (
              <Row gap={spacing.xs}>
                {content.tags.slice(0, 3).map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </Row>
            ) : null}

            {content.userProgress && content.userProgress.progressPercent > 0 ? (
              <>
                <ProgressBar value={content.userProgress.progressPercent} height={5} />
                <Caption>
                  {content.userProgress.completedAt
                    ? 'Gelesen ✓'
                    : `${content.userProgress.progressPercent}% gelesen`}
                </Caption>
              </>
            ) : null}
          </Card>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export function FilterChip({
  label,
  active,
  onPress,
}: {
  label: string;
  active: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected: active }}
      onPress={onPress}
      style={[chipStyle, active && chipActiveStyle]}
    >
      <Text
        style={[typography.label, { color: active ? colors.textInverse : colors.textMuted }]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const filterRow = { flexDirection: 'row' as const, gap: spacing.sm, paddingRight: spacing.lg };

const chipStyle = {
  paddingHorizontal: spacing.md,
  paddingVertical: spacing.sm,
  borderRadius: radius.full,
  backgroundColor: colors.surface,
  borderWidth: 1,
  borderColor: colors.border,
};

const chipActiveStyle = { backgroundColor: colors.primary, borderColor: colors.primary };
