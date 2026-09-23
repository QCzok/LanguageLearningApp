import React, { useState } from 'react';
import { Modal, Pressable, RefreshControl, ScrollView, Text, View } from 'react-native';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { CardStatus, DeckItemDto } from '@lingua/shared';
import { Button, Caption, ErrorState, Input, LevelBadge, Loading, ProgressBar, Row, Title } from '../../components';
import { aiApi, vocabularyApi } from '../../api/endpoints';
import { CACHE } from '../../api/query-client';
import { useTranslation } from '../../i18n';
import type { TranslationKey } from '../../i18n';
import { alert } from '../../utils/alert';
import { useAuthStore } from '../../store/auth.store';
import { PencilIcon, PlusIcon, TrashIcon } from '../workbook/BookIcons';
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
import { DeckStack, STACK_LABEL_KEYS, type QueueType } from './DeckStack';
import { MATCH_MIN_WORDS } from './MatchGameScreen';
import { TrainerOptions } from './TrainerOptions';
import type { VocabularyStackParamList } from '../../navigation/types';
import { MAX_WIDTH } from '../../navigation/WebLayout';

type Props = NativeStackScreenProps<VocabularyStackParamList, 'DeckDetail'>;

/**
 * Ein Thema von innen: der Arbeitsplatz eines Stapels.
 *
 * Hier – und nur hier – fällt die Wahl, *wie* geübt wird: „Neue Vokabeln"
 * zeigt unbekannte Wörter als Auswahl mit fünf Bedeutungsvorschlägen, eine
 * falsche Antwort schickt die Karte sofort nach „Wiederholen", eine richtige
 * nach „Gelernt" zum Auffrischen. Jeder Stapel erscheint nur, wenn dort auch
 * etwas liegt (die Zahlen hängen an der letzten Antwort, nicht am SM-2-Timer
 * – siehe `VocabularyService.getReviewQueue`).
 *
 * Darunter steht die Wortliste des Themas, jedes Wort mit seinem Lernstand
 * als Punkt: So ist ein Stapel auch ohne Sitzung nachschlagbar – wer wissen
 * will, was in „Arbeit & Beruf" steckt, muss ihn nicht erst durchlernen.
 */
export default function DeckDetailScreen({ route, navigation }: Props) {
  const { deckId } = route.params;
  const { t, tLanguage } = useTranslation();
  const nativeCode = useAuthStore((state) => state.user?.nativeLanguage);
  const queryClient = useQueryClient();
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  // `null` = Formular zu, `'new'` = neues Wort, sonst das Wort, das bearbeitet wird.
  const [wordForm, setWordForm] = useState<DeckItemDto | 'new' | null>(null);
  const [term, setTerm] = useState('');
  const [translation, setTranslation] = useState('');
  const [phonetic, setPhonetic] = useState('');
  const [partOfSpeech, setPartOfSpeech] = useState('');
  const [exampleSentence, setExampleSentence] = useState('');
  const [exampleTranslation, setExampleTranslation] = useState('');

  const { data, isLoading, isError, refetch, isRefetching } = useQuery({
    queryKey: ['deck', deckId],
    queryFn: () => vocabularyApi.deck(deckId),
    staleTime: CACHE.PROGRESS,
  });

  const saveWord = useMutation({
    mutationFn: () => {
      const payload = {
        term: term.trim(),
        translation: translation.trim(),
        phonetic: phonetic.trim() || undefined,
        partOfSpeech: partOfSpeech.trim() || undefined,
        exampleSentence: exampleSentence.trim() || undefined,
        exampleTranslation: exampleTranslation.trim() || undefined,
      };
      return wordForm && wordForm !== 'new'
        ? vocabularyApi.updateItem(wordForm.id, payload)
        : vocabularyApi.addItem(deckId, payload);
    },
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['deck', deckId] }),
        queryClient.invalidateQueries({ queryKey: ['decks'] }),
      ]);
      // Kein `closeWordForm()`: die dort geprüfte `isPending`-Flagge stammt
      // noch aus dem Render, der `mutate()` ausgelöst hat, und stand zu diesem
      // Zeitpunkt auf `true` – der Zettel bliebe sonst nach dem Speichern offen.
      resetWordForm();
    },
  });

  // Übersetzung per KI vorschlagen – spart beim Anlegen eigener Wörter das
  // Nachschlagen. Das Ergebnis landet nur im Feld und bleibt editierbar.
  const suggest = useMutation({
    mutationFn: () => aiApi.translate({ text: term.trim() }),
    onSuccess: (result) => setTranslation(result.translation),
  });

  const deleteWord = useMutation({
    mutationFn: (itemId: string) => vocabularyApi.deleteItem(itemId),
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['deck', deckId] }),
        queryClient.invalidateQueries({ queryKey: ['decks'] }),
      ]);
    },
  });

  function resetWordForm() {
    setWordForm(null);
    setTerm('');
    setTranslation('');
    setPhonetic('');
    setPartOfSpeech('');
    setExampleSentence('');
    setExampleTranslation('');
    saveWord.reset();
    suggest.reset();
  }

  function openAddWord() {
    setWordForm('new');
  }

  function openEditWord(item: DeckItemDto) {
    setWordForm(item);
    setTerm(item.term);
    setTranslation(item.translation);
    setPhonetic(item.phonetic ?? '');
    setPartOfSpeech(item.partOfSpeech ?? '');
    setExampleSentence(item.exampleSentence ?? '');
    setExampleTranslation(item.exampleTranslation ?? '');
  }

  function closeWordForm() {
    if (saveWord.isPending) return;
    resetWordForm();
  }

  function confirmDeleteWord(item: DeckItemDto) {
    alert(t('vocabDeleteWordTitle'), t('vocabDeleteWordBody', { term: item.term }), [
      { text: t('commonCancel'), style: 'cancel' },
      { text: t('commonDelete'), style: 'destructive', onPress: () => deleteWord.mutate(item.id) },
    ]);
  }

  // Kein blindes `refetch` beim Fokus mehr: Die Mutationen, die diesen Stand
  // ändern, entwerten den Schlüssel gezielt. Blind nachladen hiess, bei jedem
  // Zurückkommen erneut drei bis fünf Sekunden auf den Server zu warten.

  if (isLoading) return <Loading />;
  if (isError || !data) return <ErrorState message={t('deckError')} onRetry={refetch} />;

  const deck = data;
  const accent = levelColors[deck.level] ?? colors.primary;
  const progress = deck.progress;
  const learned = progress?.learned ?? 0;
  const percent = deck.itemCount > 0 ? Math.round((learned / deck.itemCount) * 100) : 0;
  const newCount = progress?.new ?? deck.itemCount;
  const repeatCount = progress?.needsRepeat ?? 0;

  function toggleWord(itemId: string) {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(itemId)) next.delete(itemId);
      else next.add(itemId);
      return next;
    });
  }

  function startSession(queueType: QueueType) {
    navigation.navigate('Review', {
      deckId,
      queueType,
      title: `${deck.title} · ${t(STACK_LABEL_KEYS[queueType])}`,
    });
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={['left', 'right']}>
      <ScrollView
        contentContainerStyle={{ padding: spacing.lg, gap: spacing.lg, paddingBottom: spacing.xxl }}
        refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={refetch} />}
      >
        <View style={headerCard}>
          <View style={[headRule, { backgroundColor: accent }]} />

          <Row gap={spacing.md}>
            <Text style={{ fontSize: 34 }}>{deck.iconEmoji}</Text>
            <View style={{ flex: 1, gap: 2 }}>
              <Text style={deckTitle}>{deck.title}</Text>
              {deck.description ? (
                <Text style={deckDescription} numberOfLines={2}>
                  {deck.description}
                </Text>
              ) : null}
            </View>
            <LevelBadge level={deck.level} small />
          </Row>

          <ProgressBar value={percent} color={accent} height={6} />
          <Caption>{t('deckWordsLearned', { learned, total: deck.itemCount })}</Caption>
        </View>

        <View style={{ gap: spacing.md }}>
          <SectionRule label={t('deckPracticeHeading')} />

          {deck.itemCount > 0 ? <TrainerOptions /> : null}

          {deck.isSystem ? (
            newCount > 0 || repeatCount > 0 || learned > 0 ? (
              /* Drei Wege zu lernen, als Stapel nebeneinander – jeder nur, wenn dort etwas liegt. */
              <Row gap={spacing.md} style={{ alignItems: 'flex-start' }}>
                {newCount > 0 ? (
                  <DeckStack
                    count={newCount}
                    label={t('vocabStackNew')}
                    hint={t('vocabHintNew')}
                    accent={colors.primary}
                    onPress={() => startSession('NEW')}
                  />
                ) : null}
                {repeatCount > 0 ? (
                  <DeckStack
                    count={repeatCount}
                    label={t('vocabStackRepeat')}
                    hint={t('vocabHintRepeat')}
                    accent={colors.warning}
                    onPress={() => startSession('DUE')}
                  />
                ) : null}
                {learned > 0 ? (
                  <DeckStack
                    count={learned}
                    label={t('vocabStackLearned')}
                    hint={t('vocabHintLearned')}
                    accent={colors.success}
                    onPress={() => startSession('MASTERED')}
                  />
                ) : null}
              </Row>
            ) : (
              <Caption>{t('vocabNothingToDoTopic')}</Caption>
            )
          ) : deck.itemCount > 0 ? (
            // Eigene Decks bleiben ein einziges Deck – keine Aufteilung in
            // neu/wiederholen/gelernt, und immer zum Umdrehen statt einer
            // Mehrfachauswahl (siehe `VocabularyService.ownDeckQueue`).
            <DeckStack
              count={deck.itemCount}
              label={t('vocabPracticeDeck')}
              hint={t('vocabPracticeDeckHint')}
              accent={accent}
              onPress={() => startSession('ALL')}
            />
          ) : (
            <Caption>{t('vocabDeckEmptyHint')}</Caption>
          )}

          {deck.items.length >= MATCH_MIN_WORDS ? (
            <Pressable
              accessibilityRole="button"
              onPress={() => navigation.navigate('Match', { deckId, title: deck.title })}
              style={({ pressed }) => [gameCard, pressed && { opacity: 0.85, transform: [{ scale: 0.99 }] }]}
            >
              <Text style={{ fontSize: 28 }}>🧩</Text>
              <View style={{ flex: 1 }}>
                <Text style={gameTitle}>{t('matchTitle')}</Text>
                <Text style={gameHint}>{t('matchTeaser')}</Text>
              </View>
              <Text style={[gameTitle, { color: colors.primary }]}>▶</Text>
            </Pressable>
          ) : null}
        </View>

        <View style={{ gap: spacing.sm }}>
          <SectionRule label={t('deckAllWords')} trailing={`${deck.items.length}`} />

          <View style={wordList}>
            {deck.items.map((item, index) => (
              <WordRow
                key={item.id}
                item={item}
                isFirst={index === 0}
                isOpen={expanded.has(item.id)}
                onToggle={() => toggleWord(item.id)}
                onEdit={deck.isSystem ? undefined : () => openEditWord(item)}
                onDelete={deck.isSystem ? undefined : () => confirmDeleteWord(item)}
              />
            ))}

            {!deck.isSystem ? (
              <Pressable
                accessibilityRole="button"
                onPress={openAddWord}
                style={({ pressed }) => [
                  addWordRow,
                  deck.items.length > 0 && wordRowDivider,
                  pressed && { opacity: 0.7 },
                ]}
              >
                <PlusIcon color={colors.primary} size={16} />
                <Text style={addWordLabel}>{t('vocabAddWord')}</Text>
              </Pressable>
            ) : null}
          </View>
        </View>
      </ScrollView>

      <Modal visible={wordForm !== null} transparent animationType="slide" onRequestClose={closeWordForm}>
        <View style={sheetBackdrop}>
          <SafeAreaView edges={['bottom']} style={sheetStyle}>
            <ScrollView contentContainerStyle={{ gap: spacing.md }} keyboardShouldPersistTaps="handled">
              <Title>{wordForm !== 'new' && wordForm ? t('vocabEditWordTitle') : t('vocabAddWordTitle')}</Title>

              <Input
                label={t('vocabTermLabel')}
                value={term}
                onChangeText={setTerm}
                placeholder={t('vocabTermPlaceholder')}
                autoFocus
                error={saveWord.isError ? (saveWord.error as Error).message : undefined}
              />
              <Input
                label={`${t('vocabTranslationLabel')} (${tLanguage(nativeCode ?? '', nativeCode)})`}
                value={translation}
                onChangeText={setTranslation}
                placeholder={t('vocabTranslationPlaceholder')}
                error={suggest.isError ? (suggest.error as Error).message : undefined}
              />
              <Button
                label={`✨ ${t('vocabSuggestTranslation')}`}
                variant="secondary"
                loading={suggest.isPending}
                disabled={term.trim().length < 1}
                onPress={() => suggest.mutate()}
              />
              <Input
                label={t('vocabPhoneticLabel')}
                value={phonetic}
                onChangeText={setPhonetic}
              />
              <Input
                label={t('vocabPartOfSpeechLabel')}
                value={partOfSpeech}
                onChangeText={setPartOfSpeech}
              />
              <Input
                label={t('vocabExampleLabel')}
                value={exampleSentence}
                onChangeText={setExampleSentence}
              />
              <Input
                label={t('vocabExampleTranslationLabel')}
                value={exampleTranslation}
                onChangeText={setExampleTranslation}
              />

              <Button
                label={t('vocabSaveWord')}
                variant="primary"
                loading={saveWord.isPending}
                disabled={term.trim().length < 1 || translation.trim().length < 1}
                onPress={() => saveWord.mutate()}
              />
              <Button
                label={t('commonCancel')}
                variant="ghost"
                onPress={closeWordForm}
                disabled={saveWord.isPending}
              />
            </ScrollView>
          </SafeAreaView>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

/**
 * Eine Zeile der Wortliste: Lernstand als Punkt, Wort, Bedeutung.
 *
 * Beispielsatz und Übersetzung liegen eingeklappt darunter – 50 Wörter mit
 * je zwei Beispielsätzen wären eine Textwand, in der nichts mehr auffindbar
 * ist. Angetippt klappt genau die eine Zeile auf.
 */
function WordRow({
  item,
  isFirst,
  isOpen,
  onToggle,
  onEdit,
  onDelete,
}: {
  item: DeckItemDto;
  isFirst: boolean;
  isOpen: boolean;
  onToggle: () => void;
  /** Nur bei eigenen Decks gesetzt – Systemvokabeln lassen sich nicht bearbeiten. */
  onEdit?: () => void;
  /** Nur bei eigenen Decks gesetzt – Systemvokabeln lassen sich nicht löschen. */
  onDelete?: () => void;
}) {
  const { t } = useTranslation();
  const hasDetail = Boolean(item.exampleSentence || item.phonetic);

  return (
    <Pressable
      accessibilityRole={hasDetail ? 'button' : 'text'}
      accessibilityState={hasDetail ? { expanded: isOpen } : undefined}
      onPress={hasDetail ? onToggle : undefined}
      style={({ pressed }) => [wordRow, !isFirst && wordRowDivider, pressed && hasDetail && { opacity: 0.7 }]}
    >
      <Row gap={spacing.sm}>
        <View
          accessibilityLabel={t(STATUS_LABEL_KEYS[item.status ?? 'UNSEEN'])}
          style={[statusDot, statusDotStyle(item.status)]}
        />
        <View style={{ flex: 1 }}>
          <Text style={wordTerm}>{item.term}</Text>
          <Text style={wordTranslation}>{item.translation}</Text>
        </View>
        {item.partOfSpeech ? <Text style={wordPos}>{item.partOfSpeech}</Text> : null}
        {onEdit ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={t('vocabEditWordA11y', { term: item.term })}
            hitSlop={8}
            onPress={(event) => {
              event.stopPropagation?.();
              onEdit();
            }}
            style={{ padding: spacing.xs }}
          >
            <PencilIcon color={flashcard.inkSoft} size={16} />
          </Pressable>
        ) : null}
        {onDelete ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={t('vocabDeleteWordA11y', { term: item.term })}
            hitSlop={8}
            onPress={(event) => {
              event.stopPropagation?.();
              onDelete();
            }}
            style={{ padding: spacing.xs }}
          >
            <TrashIcon color={flashcard.inkSoft} size={16} />
          </Pressable>
        ) : null}
      </Row>

      {isOpen ? (
        <View style={{ gap: 2, paddingLeft: spacing.lg, paddingTop: spacing.xs }}>
          {item.phonetic ? <Text style={wordPhonetic}>{item.phonetic}</Text> : null}
          {item.exampleSentence ? <Text style={wordExample}>{item.exampleSentence}</Text> : null}
          {item.exampleTranslation ? (
            <Text style={wordExampleTranslation}>{item.exampleTranslation}</Text>
          ) : null}
        </View>
      ) : null}
    </Pressable>
  );
}

/** Kolumnentitel mit durchlaufender Haarlinie – wie in der Übersicht. */
function SectionRule({ label, trailing }: { label: string; trailing?: string }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.sm }}>
      <Text style={[readingLabel, { color: colors.text }]}>{label}</Text>
      <View style={{ flex: 1, height: 1, backgroundColor: colors.border }} />
      {trailing ? <Text style={[readingLabel, { color: colors.textMuted }]}>{trailing}</Text> : null}
    </View>
  );
}

/**
 * Der Punkt vor dem Wort. Ungeübte Wörter bekommen einen leeren Ring statt
 * eines grauen Punkts – „noch nie gesehen" ist kein Lernstand, sondern das
 * Fehlen eines solchen.
 */
function statusDotStyle(status: CardStatus | null) {
  if (!status) return { borderWidth: 1.5, borderColor: flashcard.rule };
  return { backgroundColor: STATUS_COLORS[status] };
}

const STATUS_COLORS: Record<CardStatus, string> = {
  NEW: colors.textMuted,
  LEARNING: colors.warning,
  REVIEW: colors.primary,
  MASTERED: colors.success,
};

const STATUS_LABEL_KEYS: Record<CardStatus | 'UNSEEN', TranslationKey> = {
  UNSEEN: 'deckStatUnseen',
  NEW: 'deckStatNew',
  LEARNING: 'deckStatLearning',
  REVIEW: 'deckStatReview',
  MASTERED: 'deckStatMastered',
};

// ------------------------------------------------------------------ Styles

const headerCard = {
  gap: spacing.sm,
  padding: spacing.md,
  borderRadius: radius.md,
  backgroundColor: flashcard.paper,
  borderWidth: 1,
  borderColor: flashcard.edge,
  ...shadow.card,
};

const headRule = {
  height: 2,
  borderRadius: 1,
};

const deckTitle = {
  fontFamily: fontFamily.bold,
  fontSize: 19,
  lineHeight: 24,
  color: flashcard.ink,
};

const deckDescription = {
  fontFamily: fontFamily.regular,
  fontSize: 13,
  lineHeight: 18,
  color: flashcard.inkSoft,
};

const wordList = {
  borderRadius: radius.md,
  backgroundColor: colors.surface,
  borderWidth: 1,
  borderColor: colors.border,
  paddingHorizontal: spacing.md,
};

const wordRow = {
  paddingVertical: spacing.sm,
};

const wordRowDivider = {
  borderTopWidth: 1,
  borderTopColor: flashcard.rule,
};

const addWordRow = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  gap: spacing.sm,
  paddingVertical: spacing.sm,
};

const addWordLabel = {
  ...typography.bodyStrong,
  color: colors.primary,
};

const statusDot = {
  width: 9,
  height: 9,
  borderRadius: 5,
};

const wordTerm = {
  ...typography.bodyStrong,
  color: colors.text,
};

const wordTranslation = {
  ...typography.caption,
  color: colors.textMuted,
};

const wordPos = {
  ...readingLabel,
  fontSize: 9,
  color: flashcard.inkSoft,
};

const wordPhonetic = {
  ...typography.caption,
  color: colors.textMuted,
};

const wordExample = {
  fontFamily: fontFamily.regular,
  fontStyle: 'italic' as const,
  fontSize: 13,
  lineHeight: 18,
  color: colors.text,
};

const wordExampleTranslation = {
  fontFamily: fontFamily.regular,
  fontSize: 12.5,
  lineHeight: 17,
  color: colors.textMuted,
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
  maxHeight: '85%' as const,
};

const gameCard = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  gap: spacing.md,
  padding: spacing.md,
  borderRadius: radius.md,
  backgroundColor: colors.premiumSoft,
  borderWidth: 1,
  borderBottomWidth: 3,
  borderColor: colors.premium,
};

const gameTitle = {
  ...typography.bodyStrong,
  color: colors.text,
};

const gameHint = {
  ...typography.caption,
  color: colors.textMuted,
};
