import React, { useState } from 'react';
import { Modal, Pressable, RefreshControl, ScrollView, Text, View } from 'react-native';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { CefrLevel, VocabDeckDto } from '@lingua/shared';
import {
  Button,
  Caption,
  EmptyState,
  ErrorState,
  Input,
  LevelBadge,
  Loading,
  ProgressBar,
  Row,
  Title,
} from '../../components';
import { aiApi, vocabularyApi } from '../../api/endpoints';
import { CACHE } from '../../api/query-client';
import { useTranslation } from '../../i18n';
import type { TranslationKey } from '../../i18n';
import { useActiveProfile, useAuthStore } from '../../store/auth.store';
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
import { TRAINER_DIRECTIONS, TRAINER_MODES, useTrainerSettings, type TrainerMode } from './trainerSettings';
import type { VocabularyStackParamList } from '../../navigation/types';
import { MAX_WIDTH } from '../../navigation/WebLayout';

type Props = NativeStackScreenProps<VocabularyStackParamList, 'DeckList'>;

/**
 * Die Startseite des Vokabeltrainers: Übungsart antippen, loslegen.
 *
 * Geübt wird ohne Stapel – die Wörter kommen zufällig aus allen Kategorien
 * des eigenen Niveaus (plus den eigenen Kategorien), oder, wer will, aus
 * einer gewählten. Die Wahl bleibt gespeichert. Daneben steht der Weg zu
 * den Fehlern: alle Wörter, deren letzte Antwort falsch war.
 *
 * Sichtbar ist nur das eigene Niveau – höhere Stufen bleiben gesperrt, bis
 * das Profil-Niveau dort ankommt (das Backend hält dieselbe Grenze, siehe
 * `VocabularyService.listDecks`).
 */
export default function DeckListScreen({ navigation }: Props) {
  const { t } = useTranslation();
  const profile = useActiveProfile();
  const queryClient = useQueryClient();
  const { deckId: storedDeckId, setDeckId } = useTrainerSettings();
  const [speechAvailable] = useState(canRecognizeSpeech);
  const decks = useQuery({
    queryKey: ['decks'],
    queryFn: () => vocabularyApi.decks(),
    staleTime: CACHE.PROGRESS,
  });
  const [showGenerate, setShowGenerate] = useState(false);
  const [createMode, setCreateMode] = useState<'ai' | 'manual'>('ai');
  const [topic, setTopic] = useState('');
  const [manualTitle, setManualTitle] = useState('');

  function openNewCategory(deck: VocabDeckDto) {
    setDeckId(deck.id);
    navigation.navigate('DeckDetail', { deckId: deck.id, title: deck.title });
  }

  const generateDeck = useMutation({
    mutationFn: (value: string) => aiApi.generateVocabDeck(value),
    onSuccess: async (deck) => {
      await queryClient.invalidateQueries({ queryKey: ['decks'] });
      setShowGenerate(false);
      setTopic('');
      openNewCategory(deck);
    },
  });

  const createDeck = useMutation({
    mutationFn: () =>
      vocabularyApi.createDeck({
        languageId: profile!.language.id,
        level: profile!.level,
        title: manualTitle.trim(),
      }),
    onSuccess: async (deck) => {
      await queryClient.invalidateQueries({ queryKey: ['decks'] });
      setShowGenerate(false);
      setManualTitle('');
      openNewCategory(deck);
    },
  });

  function closeGenerator() {
    if (generateDeck.isPending || createDeck.isPending) return;
    setShowGenerate(false);
    setTopic('');
    setManualTitle('');
    generateDeck.reset();
    createDeck.reset();
  }

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

  // Eine gespeicherte Kategorie, die es nicht mehr gibt (gelöscht, anderes
  // Niveau), fällt stillschweigend auf „alle" zurück.
  const selected = allDecks.find((deck) => deck.id === storedDeckId) ?? null;
  const inScope = selected ? [selected] : allDecks;
  const wordCount = inScope.reduce((sum, deck) => sum + deck.itemCount, 0);
  const mistakes = inScope.reduce((sum, deck) => sum + (deck.progress?.needsRepeat ?? 0), 0);
  const scopeTitle = selected ? selected.title : t('trainerAllCategories');

  const totalWords = topicDecks.reduce((sum, deck) => sum + deck.itemCount, 0);
  const learnedWords = topicDecks.reduce((sum, deck) => sum + (deck.progress?.learned ?? 0), 0);

  function start(mode: TrainerMode) {
    const title = `${t(MODE_KEYS[mode].title)} · ${scopeTitle}`;
    if (mode === 'MATCHING') {
      navigation.navigate('Match', { deckId: selected?.id, title });
    } else {
      navigation.navigate('Review', { mode, deckId: selected?.id, title });
    }
  }

  function repeatMistakes() {
    navigation.navigate('Review', {
      mode: 'MIX',
      deckId: selected?.id,
      mistakesOnly: true,
      title: `${t('trainerMistakesTitle')} · ${scopeTitle}`,
    });
  }

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

        {/* ------------------------------------------------ Kategorie */}
        <View style={{ gap: spacing.sm }}>
          <SectionRule label={t('trainerCategoryHeading')} />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: spacing.xs, paddingRight: spacing.lg }}
          >
            <Chip label={`🎲 ${t('trainerAllCategories')}`} active={!selected} onPress={() => setDeckId(null)} />
            {allDecks.map((deck) => (
              <Chip
                key={deck.id}
                label={`${deck.iconEmoji} ${deck.title}`}
                active={selected?.id === deck.id}
                onPress={() => setDeckId(deck.id)}
              />
            ))}
            <Chip label={`＋ ${t('trainerNewCategory')}`} dashed onPress={() => setShowGenerate(true)} />
          </ScrollView>
          <Row>
            <Caption>
              {selected
                ? t('vocabWordCount', { count: wordCount })
                : t('trainerAllCategoriesHint', { count: wordCount })}
            </Caption>
            <View style={{ flex: 1 }} />
            {selected ? (
              <Pressable
                accessibilityRole="link"
                hitSlop={8}
                onPress={() => navigation.navigate('DeckDetail', { deckId: selected.id, title: selected.title })}
              >
                <Text style={linkText}>{`${t('trainerWordList')} →`}</Text>
              </Pressable>
            ) : null}
          </Row>
        </View>

        {/* ------------------------------------------------ Übungsarten */}
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
                  disabled={wordCount === 0 || unavailable}
                  onPress={() => start(mode)}
                />
              );
            })}
          </View>
          <DirectionPicker />
        </View>

        {/* ------------------------------------------------ Fehler */}
        <MistakesCard count={mistakes} onPress={repeatMistakes} />
      </ScrollView>

      <Modal visible={showGenerate} transparent animationType="slide" onRequestClose={closeGenerator}>
        <View style={sheetBackdrop}>
          <SafeAreaView edges={['bottom']} style={sheetStyle}>
            <Row gap={spacing.xs}>
              <ModeTab
                label={t('vocabModeAi')}
                active={createMode === 'ai'}
                onPress={() => setCreateMode('ai')}
              />
              <ModeTab
                label={t('vocabModeManual')}
                active={createMode === 'manual'}
                onPress={() => setCreateMode('manual')}
              />
            </Row>

            {createMode === 'ai' ? (
              <>
                <Title>{t('vocabAiDeckTitle')}</Title>
                <Caption>{t('vocabAiSheetSubtitle')}</Caption>

                <Input
                  label={t('vocabTopicLabel')}
                  value={topic}
                  onChangeText={setTopic}
                  placeholder={t('vocabTopicPlaceholder')}
                  error={generateDeck.isError ? (generateDeck.error as Error).message : undefined}
                />

                <Button
                  label={t('vocabGenerate')}
                  variant="primary"
                  loading={generateDeck.isPending}
                  disabled={topic.trim().length < 2}
                  onPress={() => generateDeck.mutate(topic.trim())}
                />
              </>
            ) : (
              <>
                <Title>{t('vocabManualDeckTitle')}</Title>
                <Caption>{t('vocabManualSheetSubtitle')}</Caption>

                <Input
                  label={t('vocabDeckNameLabel')}
                  value={manualTitle}
                  onChangeText={setManualTitle}
                  placeholder={t('vocabDeckNamePlaceholder')}
                  autoFocus
                  error={createDeck.isError ? (createDeck.error as Error).message : undefined}
                />

                <Button
                  label={t('vocabCreateDeck')}
                  variant="primary"
                  loading={createDeck.isPending}
                  disabled={!profile || manualTitle.trim().length < 2}
                  onPress={() => createDeck.mutate()}
                />
              </>
            )}

            <Button
              label={t('commonCancel')}
              variant="ghost"
              onPress={closeGenerator}
              disabled={generateDeck.isPending || createDeck.isPending}
            />
          </SafeAreaView>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

// ---------------------------------------------------------------- Bausteine

const MODE_KEYS: Record<TrainerMode, { icon: string; title: TranslationKey; hint: TranslationKey }> = {
  MULTIPLE_CHOICE: { icon: '🔘', title: 'trainerModeChoice', hint: 'trainerModeChoiceHint' },
  MATCHING: { icon: '🧩', title: 'matchTitle', hint: 'matchTeaser' },
  SPEAKING: { icon: '🎙️', title: 'trainerModeSpeaking', hint: 'trainerModeSpeakingHint' },
  MIX: { icon: '🔀', title: 'trainerModeMix', hint: 'trainerModeMixHint' },
};

/** Eine Übungsart als Karteikarte – ein Tipp startet die Sitzung. */
function ModeTile({
  icon,
  title,
  hint,
  disabled,
  onPress,
}: {
  icon: string;
  title: string;
  hint: string;
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
 * Die Fehler: alle Wörter, deren letzte Antwort falsch war. Eine falsche
 * Antwort hier schickt das Wort gleich nochmal ans Ende – bis es sitzt.
 */
function MistakesCard({ count, onPress }: { count: number; onPress: () => void }) {
  const { t } = useTranslation();
  const empty = count === 0;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: empty }}
      disabled={empty}
      onPress={onPress}
      style={({ pressed }) => [mistakesCard, empty && mistakesCardEmpty, pressed && { opacity: 0.9 }]}
    >
      <Text style={{ fontSize: 28 }}>{empty ? '🎉' : '🔁'}</Text>
      <View style={{ flex: 1, gap: 2 }}>
        <Text style={tileTitle}>{t('trainerMistakesTitle')}</Text>
        <Text style={tileMeta}>
          {empty ? t('trainerNoMistakesShort') : t('trainerMistakesHint', { count })}
        </Text>
      </View>
      {empty ? null : (
        <View style={repeatPill}>
          <Text style={[typography.label, { color: colors.warning }]}>{count}</Text>
        </View>
      )}
    </Pressable>
  );
}

/**
 * Richtung der Auswahlkarten. Sie nennt die echten Sprachen („Englisch →
 * Spanisch") statt „vorwärts/rückwärts" – wer Englisch mit spanischer
 * Muttersprache lernt, soll nicht überlegen müssen, was gemeint ist.
 */
function DirectionPicker() {
  const { t, tLanguage } = useTranslation();
  const profile = useActiveProfile();
  const nativeCode = useAuthStore((state) => state.user?.nativeLanguage);
  const { direction, setDirection } = useTrainerSettings();

  const learning = tLanguage(profile?.language.code ?? '', profile?.language.nativeName);
  const native = tLanguage(nativeCode ?? '', nativeCode);
  const directionLabel = {
    FORWARD: `${learning} → ${native}`,
    REVERSE: `${native} → ${learning}`,
    MIXED: `🔀 ${t('trainerDirectionMixed')}`,
  } as const;

  return (
    <View style={{ gap: spacing.xs }}>
      <Text style={[readingLabel, { color: colors.textMuted }]}>{t('trainerDirection')}</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: spacing.xs }}>
        {TRAINER_DIRECTIONS.map((value) => (
          <Chip key={value} label={directionLabel[value]} active={direction === value} onPress={() => setDirection(value)} />
        ))}
      </View>
    </View>
  );
}

function Chip({
  label,
  active,
  dashed,
  onPress,
}: {
  label: string;
  active?: boolean;
  dashed?: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected: active }}
      onPress={onPress}
      style={({ pressed }) => [chip, active && chipActive, dashed && chipDashed, pressed && { opacity: 0.8 }]}
    >
      <Text style={[chipText, active && { color: colors.textInverse }, dashed && { color: colors.primary }]}>
        {label}
      </Text>
    </Pressable>
  );
}

/** Die zwei Reiter im Anlage-Zettel: KI-Thema oder eine leere eigene Kategorie. */
function ModeTab({ label, active, onPress }: { label: string; active: boolean; onPress: () => void }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected: active }}
      onPress={onPress}
      style={[modeTab, active && { backgroundColor: colors.primary }]}
    >
      <Text style={[modeTabLabel, active && { color: colors.textInverse }]}>{label}</Text>
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

/** Kolumnentitel mit durchlaufender Haarlinie – wie in der Bibliothek. */
function SectionRule({ label }: { label: string }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.sm }}>
      <Text style={[readingLabel, { color: colors.text }]}>{label}</Text>
      <View style={{ flex: 1, height: 1, backgroundColor: colors.border }} />
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

const mistakesCard = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  gap: spacing.md,
  padding: spacing.md,
  borderRadius: radius.md,
  backgroundColor: colors.warningSoft,
  borderWidth: 1,
  borderBottomWidth: 3,
  borderColor: colors.warning,
};

const mistakesCardEmpty = {
  backgroundColor: colors.surface,
  borderColor: colors.border,
  borderBottomWidth: 1,
};

const repeatPill = {
  minWidth: 28,
  height: 28,
  paddingHorizontal: 6,
  borderRadius: 14,
  backgroundColor: colors.surface,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const linkText = {
  ...typography.label,
  color: colors.primary,
};

const chip = {
  paddingHorizontal: spacing.sm,
  paddingVertical: 6,
  borderRadius: radius.full,
  backgroundColor: colors.surfaceAlt,
  borderWidth: 1,
  borderColor: colors.border,
};

const chipActive = {
  backgroundColor: colors.primary,
  borderColor: colors.primary,
};

const chipDashed = {
  backgroundColor: colors.surface,
  borderStyle: 'dashed' as const,
  borderColor: colors.primary,
};

const chipText = {
  ...typography.label,
  color: colors.text,
};

const sheetBackdrop = {
  flex: 1,
  backgroundColor: 'rgba(15, 23, 42, 0.4)',
  justifyContent: 'flex-end' as const,
  // Im Browser spannt sich das Modal über das ganze Fenster, nicht nur über
  // die telefon-schmale Spalte aus `WebLayout` – ohne diese Zentrierung läge
  // der Zettel über der vollen Fensterbreite statt über der Bühne der App.
  alignItems: 'center' as const,
};

const sheetStyle = {
  width: '100%' as const,
  maxWidth: MAX_WIDTH,
  backgroundColor: colors.background,
  borderTopLeftRadius: radius.xl,
  borderTopRightRadius: radius.xl,
  padding: spacing.lg,
  gap: spacing.md,
};

const modeTab = {
  flex: 1,
  paddingVertical: spacing.xs,
  borderRadius: radius.full,
  backgroundColor: colors.surfaceAlt,
  alignItems: 'center' as const,
};

const modeTabLabel = {
  ...typography.label,
  color: colors.textMuted,
};
