import React, { useState } from 'react';
import { Pressable, RefreshControl, ScrollView, Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { CefrLevel } from '@lingua/shared';
import {
  Button,
  Caption,
  EmptyState,
  ErrorState,
  LevelBadge,
  Loading,
  ProgressBar,
  Row,
  Title,
} from '../../components';
import { vocabularyApi } from '../../api/endpoints';
import { CACHE } from '../../api/query-client';
import { useTranslation } from '../../i18n';
import type { TranslationKey } from '../../i18n';
import { useActiveProfile } from '../../store/auth.store';
import {
  colors,
  flashcard,
  fontFamily,
  levelColors,
  radius,
  readingLabel,
  shadow,
  spacing,
  typography,
} from '../../theme';
import { canRecognizeSpeech } from './SpeakingCard';
import { MODE_KEYS, TRAINER_MODES } from './trainerModes';
import { SectionRule } from './TrainerParts';
import type { VocabularyStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<VocabularyStackParamList, 'DeckList'>;

/**
 * Die Startseite des Vokabeltrainers und zugleich Schritt 1 einer Übung:
 * die Übungsart wählen. Woraus geübt wird (alle Karten, Kategorien oder
 * Wiederholer), fragt der nächste Schritt (`TrainerScopeScreen`).
 *
 * Sichtbar ist nur das eigene Niveau – höhere Stufen bleiben gesperrt, bis
 * das Profil-Niveau dort ankommt (das Backend hält dieselbe Grenze, siehe
 * `VocabularyService.listDecks`).
 */
export default function DeckListScreen({ navigation }: Props) {
  const { t } = useTranslation();
  const profile = useActiveProfile();
  const [speechAvailable] = useState(canRecognizeSpeech);
  const decks = useQuery({
    queryKey: ['decks'],
    queryFn: () => vocabularyApi.decks(),
    staleTime: CACHE.PROGRESS,
  });

  if (decks.isLoading) return <Loading />;
  if (decks.isError || !decks.data) {
    return <ErrorState message={t('vocabDecksError')} onRetry={decks.refetch} />;
  }

  const allDecks = decks.data;
  const topicDecks = allDecks.filter((deck) => deck.isSystem);

  if (allDecks.length === 0) {
    return (
      <EmptyState
        emoji="🗂️"
        title={t('vocabEmptyTitle')}
        description={t('vocabEmptyDescription')}
      />
    );
  }

  const wordCount = allDecks.reduce((sum, deck) => sum + deck.itemCount, 0);
  const totalWords = topicDecks.reduce((sum, deck) => sum + deck.itemCount, 0);
  const learnedWords = topicDecks.reduce((sum, deck) => sum + (deck.progress?.learned ?? 0), 0);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={['left', 'right']}>
      <ScrollView
        contentContainerStyle={{ padding: spacing.lg, gap: spacing.lg, paddingBottom: spacing.xxl }}
        refreshControl={<RefreshControl refreshing={decks.isRefetching} onRefresh={decks.refetch} />}
      >
        <Row>
          <View style={{ flex: 1 }}>
            <Title>{t('vocabTitle')}</Title>
          </View>
          <Button
            label={t('vocabStatsButton')}
            variant="ghost"
            fullWidth={false}
            onPress={() => navigation.navigate('VocabStats')}
          />
        </Row>

        {profile ? <LevelSummary level={profile.level} learned={learnedWords} total={totalWords} /> : null}

        <View style={{ gap: spacing.sm }}>
          <SectionRule label={t('trainerModesHeading')} />
          <View style={tileGrid}>
            {TRAINER_MODES.map((mode) => {
              const unavailable = mode === 'SPEAKING' && !speechAvailable;
              return (
                <ModeTile
                  key={mode}
                  icon={MODE_KEYS[mode].icon}
                  title={t(MODE_KEYS[mode].title)}
                  hint={unavailable ? t('trainerSpeakingUnavailable') : t(MODE_KEYS[mode].hint)}
                  wide={mode === 'MIX'}
                  disabled={wordCount === 0 || unavailable}
                  onPress={() => navigation.navigate('TrainerScope', { mode })}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// ---------------------------------------------------------------- Bausteine

/** Eine Übungsart als Karteikarte – ein Tipp führt zum nächsten Schritt. */
function ModeTile({
  icon,
  title,
  hint,
  wide,
  disabled,
  onPress,
}: {
  icon: string;
  title: string;
  hint: string;
  /** Über die ganze Breite – für die letzte, allein stehende Karte. */
  wide?: boolean;
  disabled?: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      accessibilityLabel={`${title}. ${hint}`}
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        tile,
        wide && { maxWidth: '100%' as const, minHeight: 0 },
        disabled && { opacity: 0.45 },
        pressed && { opacity: 0.9, transform: [{ scale: 0.98 }] },
      ]}
    >
      <View style={[cardHeadRule, { backgroundColor: colors.primary }]} />
      <Text style={{ fontSize: 28 }}>{icon}</Text>
      <Text style={tileTitle} numberOfLines={2}>
        {title}
      </Text>
      <Text style={tileMeta} numberOfLines={3}>
        {hint}
      </Text>
      <View style={{ flex: 1 }} />
      <Text style={[tileState, { color: colors.primary }]}>▶</Text>
    </Pressable>
  );
}

/**
 * Der Kopf des Trainers: das eigene Niveau und wie weit dessen Wörter
 * insgesamt gelernt sind.
 */
function LevelSummary({ level, learned, total }: { level: CefrLevel; learned: number; total: number }) {
  const { t } = useTranslation();
  const percent = total > 0 ? Math.round((learned / total) * 100) : 0;

  return (
    <View style={summaryCard}>
      <Row gap={spacing.sm}>
        <LevelBadge level={level} />
        <View style={{ flex: 1 }}>
          <Text style={typography.heading}>{t(LEVEL_HEADLINE_KEYS[level])}</Text>
          <Caption>{t('vocabLevelProgress', { learned, total })}</Caption>
        </View>
        <Text style={[summaryPercent, { color: levelColors[level] ?? colors.primary }]}>{percent}%</Text>
      </Row>
      <ProgressBar value={percent} color={levelColors[level] ?? colors.primary} height={6} />
    </View>
  );
}

/** Die Zwischentitel der Niveaus – nicht die GER-Kurznamen, sondern der Ton des Trainers. */
const LEVEL_HEADLINE_KEYS: Record<CefrLevel, TranslationKey> = {
  A1: 'vocabLevelA1',
  A2: 'vocabLevelA2',
  B1: 'vocabLevelB1',
  B2: 'vocabLevelB2',
  C1: 'vocabLevelC1',
  C2: 'vocabLevelC2',
};

// ------------------------------------------------------------------ Styles

const summaryCard = {
  gap: spacing.sm,
  padding: spacing.md,
  borderRadius: radius.lg,
  backgroundColor: colors.surface,
  borderWidth: 1,
  borderColor: colors.border,
};

const summaryPercent = {
  fontFamily: fontFamily.bold,
  fontSize: 22,
  lineHeight: 26,
};

const tileGrid = {
  flexDirection: 'row' as const,
  flexWrap: 'wrap' as const,
  gap: spacing.md,
};

/** Die Karteikarte selbst: Karton, scharfer Rand, farbige Kopflinie. */
const tile = {
  flexBasis: '47%' as const,
  flexGrow: 1,
  maxWidth: '47%' as const,
  minHeight: 150,
  gap: spacing.xs,
  padding: spacing.md,
  borderRadius: radius.md,
  backgroundColor: flashcard.paper,
  borderWidth: 1,
  borderColor: flashcard.edge,
  ...shadow.card,
};

const cardHeadRule = {
  height: 2,
  borderRadius: 1,
  marginBottom: spacing.xs,
};

const tileTitle = {
  fontFamily: fontFamily.bold,
  fontSize: 15,
  lineHeight: 20,
  color: flashcard.ink,
};

const tileMeta = {
  fontFamily: fontFamily.regular,
  fontSize: 12,
  lineHeight: 16,
  color: flashcard.inkSoft,
};

const tileState = {
  ...readingLabel,
  fontSize: 12,
  color: flashcard.inkSoft,
};
