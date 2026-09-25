import React from 'react';
import { ScrollView, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Caption, ErrorState, Loading, Title } from '../../components';
import { vocabularyApi } from '../../api/endpoints';
import { CACHE } from '../../api/query-client';
import { useTranslation } from '../../i18n';
import { colors, spacing } from '../../theme';
import { MODE_KEYS, startTraining } from './trainerModes';
import { OptionRow } from './TrainerParts';
import type { VocabularyStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<VocabularyStackParamList, 'TrainerScope'>;

/**
 * Schritt 2: woraus geübt wird. Alle Karten und die Wiederholer (die Wörter,
 * deren letzte Antwort falsch war) starten die Übung sofort; „Kategorien"
 * führt zur Auswahl in Schritt 3.
 */
export default function TrainerScopeScreen({ route, navigation }: Props) {
  const { mode } = route.params;
  const { t } = useTranslation();
  const decks = useQuery({
    queryKey: ['decks'],
    queryFn: () => vocabularyApi.decks(),
    staleTime: CACHE.PROGRESS,
  });

  if (decks.isLoading) return <Loading />;
  if (decks.isError || !decks.data) {
    return <ErrorState message={t('vocabDecksError')} onRetry={decks.refetch} />;
  }

  const modeTitle = t(MODE_KEYS[mode].title);
  const wordCount = decks.data.reduce((sum, deck) => sum + deck.itemCount, 0);
  const mistakes = decks.data.reduce((sum, deck) => sum + (deck.progress?.needsRepeat ?? 0), 0);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={['left', 'right']}>
      <ScrollView contentContainerStyle={{ padding: spacing.lg, gap: spacing.md, paddingBottom: spacing.xxl }}>
        <View style={{ gap: spacing.xs, marginBottom: spacing.xs }}>
          <Caption>{modeTitle}</Caption>
          <Title>{t('trainerCategoryHeading')}</Title>
        </View>

        <OptionRow
          title={t('trainerScopeAll')}
          hint={t('trainerAllCategoriesHint', { count: wordCount })}
          disabled={wordCount === 0}
          onPress={() => startTraining(navigation, mode, { title: `${modeTitle} · ${t('trainerScopeAll')}` })}
        />
        <OptionRow
          title={t('trainerScopeCategories')}
          hint={t('trainerScopeCategoriesHint')}
          onPress={() => navigation.navigate('TrainerCategories', { mode })}
        />
        <OptionRow
          title={t('trainerScopeMistakes')}
          hint={mistakes === 0 ? t('trainerNoMistakesShort') : t('trainerMistakesHint', { count: mistakes })}
          badge={mistakes === 0 ? undefined : String(mistakes)}
          tone={mistakes === 0 ? 'default' : 'warning'}
          disabled={mistakes === 0}
          onPress={() =>
            startTraining(navigation, mode, {
              mistakesOnly: true,
              title: `${modeTitle} · ${t('trainerScopeMistakes')}`,
            })
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
}
