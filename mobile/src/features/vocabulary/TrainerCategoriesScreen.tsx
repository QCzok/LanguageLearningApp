import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { VocabDeckDto } from '@lingua/shared';
import { Button, Caption, ErrorState, Loading, Row, Title } from '../../components';
import { vocabularyApi } from '../../api/endpoints';
import { CACHE } from '../../api/query-client';
import { useTranslation } from '../../i18n';
import { colors, radius, spacing, typography } from '../../theme';
import { NewCategorySheet } from './NewCategorySheet';
import { MODE_KEYS, startTraining } from './trainerModes';
import { OptionRow } from './TrainerParts';
import { useTrainerSettings } from './trainerSettings';
import type { VocabularyStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<VocabularyStackParamList, 'TrainerCategories'>;

/**
 * Schritt 3: die Kategorien ankreuzen, aus denen geübt wird – eine oder
 * mehrere. Die Auswahl bleibt gespeichert und ist beim nächsten Mal
 * vorbelegt. Hier liegen auch die Wortlisten und der Weg zu einer neuen,
 * eigenen Kategorie.
 */
export default function TrainerCategoriesScreen({ route, navigation }: Props) {
  const { mode } = route.params;
  const { t } = useTranslation();
  const { deckIds: storedDeckIds, setDeckIds } = useTrainerSettings();
  const [picked, setPicked] = useState<Set<string>>(() => new Set(storedDeckIds));
  const [showCreate, setShowCreate] = useState(false);
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
  // Gespeicherte Kategorien, die es nicht mehr gibt (gelöscht, anderes
  // Niveau), fallen stillschweigend heraus.
  const selected = allDecks.filter((deck) => picked.has(deck.id));
  const wordCount = selected.reduce((sum, deck) => sum + deck.itemCount, 0);
  const allPicked = selected.length === allDecks.length;
  const modeTitle = t(MODE_KEYS[mode].title);

  function toggle(deckId: string) {
    setPicked((prev) => {
      const next = new Set(prev);
      if (next.has(deckId)) next.delete(deckId);
      else next.add(deckId);
      return next;
    });
  }

  function openNewCategory(deck: VocabDeckDto) {
    setShowCreate(false);
    setPicked((prev) => new Set(prev).add(deck.id));
    navigation.navigate('DeckDetail', { deckId: deck.id, title: deck.title });
  }

  function start() {
    const ids = selected.map((deck) => deck.id);
    setDeckIds(ids);
    const scopeTitle = selected.length === 1 ? selected[0].title : t('trainerCategoriesCount', { count: selected.length });
    startTraining(navigation, mode, { deckIds: ids, title: `${modeTitle} · ${scopeTitle}` });
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={['left', 'right', 'bottom']}>
      <ScrollView contentContainerStyle={{ padding: spacing.lg, gap: spacing.sm, paddingBottom: spacing.xl }}>
        <View style={{ gap: spacing.xs, marginBottom: spacing.sm }}>
          <Caption>{modeTitle}</Caption>
          <Title>{t('trainerPickCategoriesHeading')}</Title>
          <Row>
            <View style={{ flex: 1 }}>
              <Caption>{t('trainerPickCategoriesHint')}</Caption>
            </View>
            <Pressable
              accessibilityRole="button"
              hitSlop={8}
              onPress={() => setPicked(allPicked ? new Set() : new Set(allDecks.map((deck) => deck.id)))}
            >
              <Text style={linkText}>{allPicked ? t('trainerSelectNone') : t('trainerSelectAll')}</Text>
            </Pressable>
          </Row>
        </View>

        {allDecks.map((deck) => (
          <OptionRow
            key={deck.id}
            title={deck.title}
            hint={t('vocabWordCount', { count: deck.itemCount })}
            checked={picked.has(deck.id)}
            onPress={() => toggle(deck.id)}
          >
            <Pressable
              accessibilityRole="link"
              hitSlop={6}
              onPress={() => navigation.navigate('DeckDetail', { deckId: deck.id, title: deck.title })}
              style={{ alignSelf: 'flex-start' }}
            >
              <Text style={linkText}>{`${t('trainerWordList')} →`}</Text>
            </Pressable>
          </OptionRow>
        ))}

        <Pressable
          accessibilityRole="button"
          onPress={() => setShowCreate(true)}
          style={({ pressed }) => [newCategory, pressed && { opacity: 0.8 }]}
        >
          <Text style={linkText}>{`＋ ${t('trainerNewCategory')}`}</Text>
        </Pressable>
      </ScrollView>

      <View style={footer}>
        <Button
          label={t('trainerStartSelected', { count: wordCount })}
          disabled={wordCount === 0}
          onPress={start}
        />
      </View>

      <NewCategorySheet visible={showCreate} onClose={() => setShowCreate(false)} onCreated={openNewCategory} />
    </SafeAreaView>
  );
}

const linkText = {
  ...typography.label,
  color: colors.primary,
};

const newCategory = {
  alignItems: 'center' as const,
  padding: spacing.md,
  borderRadius: radius.md,
  borderWidth: 1,
  borderStyle: 'dashed' as const,
  borderColor: colors.primary,
  backgroundColor: colors.surface,
};

const footer = {
  paddingHorizontal: spacing.lg,
  paddingTop: spacing.sm,
  paddingBottom: spacing.md,
  borderTopWidth: 1,
  borderTopColor: colors.border,
  backgroundColor: colors.background,
};
