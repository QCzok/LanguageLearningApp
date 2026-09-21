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
import { nextStack, STACK_LABEL_KEYS } from './DeckStack';
import type { VocabularyStackParamList } from '../../navigation/types';
import { MAX_WIDTH } from '../../navigation/WebLayout';

type Props = NativeStackScreenProps<VocabularyStackParamList, 'DeckList'>;

/**
 * Der Vokabeltrainer als Karteikasten: ein Fach je Thema.
 *
 * Die Wörter eines Niveaus sind fachlich längst in Themen sortiert („Arbeit &
 * Beruf", „Reisen & Verkehr", je rund 50 Vokabeln) – sichtbar war davon
 * nichts, solange die Übersicht alle Stapel eines Niveaus zu einer einzigen
 * Zahlenreihe zusammenzog. Hier steht deshalb jedes Thema als eigene
 * Karteikarte im Regal: Zeichen, Titel, Umfang und der eigene Fortschritt.
 * Erst im Thema (siehe `DeckDetailScreen`) fällt die Wahl, *wie* geübt wird.
 *
 * Sichtbar ist nur das eigene Niveau – höhere Stufen bleiben gesperrt, bis
 * das Profil-Niveau dort ankommt (das Backend hält dieselbe Grenze, siehe
 * `VocabularyService.listDecks`).
 */
export default function DeckListScreen({ navigation }: Props) {
  const { t } = useTranslation();
  const profile = useActiveProfile();
  const queryClient = useQueryClient();
  const decks = useQuery({
    queryKey: ['decks'],
    queryFn: () => vocabularyApi.decks(),
    staleTime: CACHE.PROGRESS,
  });
  const [showGenerate, setShowGenerate] = useState(false);
  const [createMode, setCreateMode] = useState<'ai' | 'manual'>('ai');
  const [topic, setTopic] = useState('');
  const [manualTitle, setManualTitle] = useState('');

  const generateDeck = useMutation({
    mutationFn: (value: string) => aiApi.generateVocabDeck(value),
    onSuccess: async (deck) => {
      await queryClient.invalidateQueries({ queryKey: ['decks'] });
      setShowGenerate(false);
      setTopic('');
      // Direkt in den neuen Stapel – er ist der Grund, warum der Nutzer hier war.
      navigation.navigate('DeckDetail', { deckId: deck.id, title: deck.title });
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
      navigation.navigate('DeckDetail', { deckId: deck.id, title: deck.title });
    },
  });

  function openGenerator() {
    // Ohne Bezahlstufe führt die Kachel direkt in den Themen-Dialog, statt
    // erst auf einen Hinweis, dass man sie nicht benutzen darf.
    setCreateMode('ai');
    setShowGenerate(true);
  }

  function closeGenerator() {
    if (generateDeck.isPending || createDeck.isPending) return;
    setShowGenerate(false);
    setTopic('');
    setManualTitle('');
    generateDeck.reset();
    createDeck.reset();
  }

  // Kein blindes `refetch` beim Fokus mehr: Die Mutationen, die diesen Stand
  // ändern, entwerten den Schlüssel gezielt. Blind nachladen hiess, bei jedem
  // Zurückkommen erneut drei bis fünf Sekunden auf den Server zu warten.

  if (decks.isLoading) return <Loading />;
  if (decks.isError || !decks.data) {
    return <ErrorState message={t('vocabDecksError')} onRetry={decks.refetch} />;
  }

  // Eigene Stapel (KI-generiert oder manuell angelegt) stehen in einem eigenen
  // Fach – sie gehören zu keinem Niveau-Thema und werden ausschließlich über
  // ihre `deckId` gelernt (siehe Backend, `getReviewQueue`).
  const topicDecks = decks.data.filter((deck) => deck.isSystem);
  const ownDecks = decks.data.filter((deck) => !deck.isSystem);

  if (topicDecks.length === 0 && ownDecks.length === 0) {
    return (
      <EmptyState
        emoji="🗂️"
        title={t('vocabEmptyTitle')}
        description={t('vocabEmptyDescription')}
      />
    );
  }

  const totalWords = topicDecks.reduce((sum, deck) => sum + deck.itemCount, 0);
  const learnedWords = topicDecks.reduce((sum, deck) => sum + learnedIn(deck), 0);

  // Angefangen, aber nicht fertig: der Stapel, den die Übersicht oben zum
  // Weitermachen anbietet, statt ihn im Regal wiederfinden zu lassen. Bei
  // mehreren gewinnt, wer die meisten Fehler offen hat – die liegen am
  // längsten quer.
  const continueDeck = [...topicDecks, ...ownDecks]
    .filter((deck) => isStarted(deck) && !isComplete(deck))
    .sort(
      (a, b) =>
        (b.progress?.needsRepeat ?? 0) - (a.progress?.needsRepeat ?? 0) ||
        learnedIn(b) - learnedIn(a),
    )[0];

  function openDeck(deck: VocabDeckDto) {
    navigation.navigate('DeckDetail', { deckId: deck.id, title: deck.title });
  }

  function continueLearning(deck: VocabDeckDto) {
    // Eigene Decks kennen keine Aufteilung in neu/wiederholen/gelernt – siehe
    // `DeckDetailScreen`.
    const queueType = deck.isSystem ? nextStack(deck.progress) : 'ALL';
    navigation.navigate('Review', {
      deckId: deck.id,
      queueType,
      title: `${deck.title} · ${t(STACK_LABEL_KEYS[queueType])}`,
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

        {profile ? (
          <LevelSummary
            level={profile.level}
            topics={topicDecks.length}
            learned={learnedWords}
            total={totalWords}
          />
        ) : null}

        {continueDeck ? (
          <View style={{ gap: spacing.sm }}>
            <SectionRule label={t('vocabContinueHeading')} />
            <ContinueCard deck={continueDeck} onPress={() => continueLearning(continueDeck)} />
          </View>
        ) : null}

        {topicDecks.length > 0 ? (
          <View style={{ gap: spacing.md }}>
            <SectionRule label={t('vocabTopicsHeading')} trailing={`${topicDecks.length}`} />
            <View style={tileGrid}>
              {topicDecks.map((deck) => (
                <DeckTile key={deck.id} deck={deck} onPress={() => openDeck(deck)} />
              ))}
            </View>
          </View>
        ) : null}

        <View style={{ gap: spacing.md }}>
          <SectionRule
            label={t('vocabOwnDecksHeading')}
            trailing={ownDecks.length > 0 ? `${ownDecks.length}` : undefined}
          />
          <View style={tileGrid}>
            {ownDecks.map((deck) => (
              <DeckTile key={deck.id} deck={deck} onPress={() => openDeck(deck)} />
            ))}
            <NewDeckTile onPress={openGenerator} />
          </View>
        </View>
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

/** Die zwei Reiter im Anlage-Zettel: KI-Thema oder ein leeres eigenes Deck. */
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

// ------------------------------------------------------------------ Kopf

/**
 * Der Kopf des Karteikastens: das eigene Niveau, wie viele Themen darin
 * liegen und wie weit die Wörter insgesamt gelernt sind. Eine Zeile Bilanz
 * statt sechs aufklappbarer Niveaus – die anderen Stufen sind ohnehin
 * gesperrt, bis das Profil-Niveau dort ankommt.
 */
function LevelSummary({
  level,
  topics,
  learned,
  total,
}: {
  level: CefrLevel;
  topics: number;
  learned: number;
  total: number;
}) {
  const { t } = useTranslation();
  const percent = total > 0 ? Math.round((learned / total) * 100) : 0;

  return (
    <View style={summaryCard}>
      <Row gap={spacing.sm}>
        <LevelBadge level={level} />
        <View style={{ flex: 1 }}>
          <Text style={typography.heading}>{t(LEVEL_HEADLINE_KEYS[level])}</Text>
          <Caption>
            {topics === 1 ? t('vocabOneTopic') : t('vocabTopicsCount', { count: topics })}
          </Caption>
        </View>
        <Text style={[summaryPercent, { color: levelColors[level] ?? colors.primary }]}>
          {percent}%
        </Text>
      </Row>

      <ProgressBar value={percent} color={levelColors[level] ?? colors.primary} height={6} />
      <Caption>{t('vocabLevelProgress', { learned, total })}</Caption>
    </View>
  );
}

/** Kolumnentitel mit durchlaufender Haarlinie – wie in der Bibliothek. */
function SectionRule({ label, trailing }: { label: string; trailing?: string }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.sm }}>
      <Text style={[readingLabel, { color: colors.text }]}>{label}</Text>
      <View style={{ flex: 1, height: 1, backgroundColor: colors.border }} />
      {trailing ? <Text style={[readingLabel, { color: colors.textMuted }]}>{trailing}</Text> : null}
    </View>
  );
}

// ----------------------------------------------------------------- Kacheln

/**
 * Der angefangene Stapel, quer über die Breite: Zeichen, Thema, Fortschritt
 * und ein Knopf, der ohne Umweg in die Sitzung führt, die als Nächstes dran
 * ist (erst Fehler ausbügeln, dann Neues – siehe `nextStack`).
 */
function ContinueCard({ deck, onPress }: { deck: VocabDeckDto; onPress: () => void }) {
  const { t } = useTranslation();
  const accent = levelColors[deck.level] ?? colors.primary;
  const learned = learnedIn(deck);
  const percent = deck.itemCount > 0 ? Math.round((learned / deck.itemCount) * 100) : 0;
  const needsRepeat = deck.progress?.needsRepeat ?? 0;

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [continueCard, pressed && { opacity: 0.92 }]}
    >
      <View style={[cardHeadRule, { backgroundColor: accent }]} />

      <Row gap={spacing.md}>
        <Text style={{ fontSize: 30 }}>{deck.iconEmoji}</Text>
        <View style={{ flex: 1, gap: 2 }}>
          <Text style={tileTitle} numberOfLines={1}>
            {deck.title}
          </Text>
          <Caption>
            {`${learned}/${deck.itemCount}`}
            {needsRepeat > 0 ? ` · ${t('vocabToRepeat', { count: needsRepeat })}` : ''}
          </Caption>
        </View>
        <LevelBadge level={deck.level} small />
      </Row>

      <ProgressBar value={percent} color={accent} height={5} />

      <Text style={[continueAction, { color: accent }]}>{t('vocabContinueAction')} →</Text>
    </Pressable>
  );
}

/**
 * Ein Thema als Karteikarte im Regal.
 *
 * Oben die Kopflinie in der Niveaufarbe – dasselbe Erkennungszeichen wie auf
 * der Karte in der Sitzung (siehe `Flashcard`). Darunter steht, was für die
 * Wahl zählt: Zeichen, Thema, Umfang, Fortschritt. Ein fertig gelernter
 * Stapel trägt statt des Balkens einen Haken, ein noch nie geöffneter den
 * Hinweis „neu" – so ist der Zustand aus dem Augenwinkel lesbar.
 */
function DeckTile({ deck, onPress }: { deck: VocabDeckDto; onPress: () => void }) {
  const { t } = useTranslation();
  const accent = levelColors[deck.level] ?? colors.primary;
  const learned = learnedIn(deck);
  const percent = deck.itemCount > 0 ? Math.round((learned / deck.itemCount) * 100) : 0;
  const needsRepeat = deck.progress?.needsRepeat ?? 0;
  const done = isComplete(deck);

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`${deck.title}, ${t('vocabWordCount', { count: deck.itemCount })}`}
      onPress={onPress}
      style={({ pressed }) => [tile, pressed && { opacity: 0.9, transform: [{ scale: 0.98 }] }]}
    >
      <View style={[cardHeadRule, { backgroundColor: accent }]} />

      <Row>
        <Text style={{ fontSize: 26, flex: 1 }}>{deck.iconEmoji}</Text>
        {done ? (
          <View style={doneBadge}>
            <Text style={{ fontSize: 10, color: colors.textInverse }}>✓</Text>
          </View>
        ) : needsRepeat > 0 ? (
          <View style={repeatPill}>
            <Text style={[typography.label, { fontSize: 10, color: colors.warning }]}>
              {needsRepeat}
            </Text>
          </View>
        ) : null}
      </Row>

      <Text style={tileTitle} numberOfLines={2}>
        {deck.title}
      </Text>

      <Text style={tileMeta}>{t('vocabWordCount', { count: deck.itemCount })}</Text>

      <View style={{ flex: 1 }} />

      {isStarted(deck) ? (
        <View style={{ gap: 4 }}>
          <ProgressBar value={percent} color={done ? colors.success : accent} height={4} />
          <Text style={tileState}>
            {done ? t('vocabDeckDone') : `${learned}/${deck.itemCount}`}
          </Text>
        </View>
      ) : (
        <View style={{ gap: 4 }}>
          <View style={emptyTrack} />
          <Text style={tileState}>{t('vocabDeckNew')}</Text>
        </View>
      )}
    </Pressable>
  );
}

/**
 * Das leere Fach am Ende des eigenen Regals: gestrichelter Rand, weil dort
 * noch nichts liegt. Ein Tipp öffnet den Themen-Dialog (siehe
 * `openGenerator`).
 */
function NewDeckTile({ onPress }: { onPress: () => void }) {
  const { t } = useTranslation();

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [tile, newTile, pressed && { opacity: 0.9 }]}
    >
      <Text style={{ fontSize: 26 }}>➕</Text>
      <Text style={tileTitle} numberOfLines={2}>
        {t('vocabNewDeckTile')}
      </Text>
      <Text style={tileMeta}>{t('vocabNewDeckTileMeta')}</Text>
      <View style={{ flex: 1 }} />
      <Text style={[tileState, { color: colors.primary }]}>
        {`${t('vocabNewDeckCta')} →`}
      </Text>
    </Pressable>
  );
}

// ------------------------------------------------------------------ Helfer

/** Wörter, deren letzte Antwort richtig war – dieselbe Lesart wie im Backend. */
function learnedIn(deck: VocabDeckDto): number {
  return deck.progress?.learned ?? 0;
}

function isStarted(deck: VocabDeckDto): boolean {
  return (deck.progress?.learned ?? 0) + (deck.progress?.needsRepeat ?? 0) > 0;
}

function isComplete(deck: VocabDeckDto): boolean {
  return deck.itemCount > 0 && learnedIn(deck) >= deck.itemCount;
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

/** Die Karteikarte selbst: Karton, scharfer Rand, Kopflinie in der Niveaufarbe. */
const tile = {
  flexBasis: '47%' as const,
  flexGrow: 1,
  maxWidth: '47%' as const,
  minHeight: 164,
  gap: spacing.xs,
  padding: spacing.md,
  borderRadius: radius.md,
  backgroundColor: flashcard.paper,
  borderWidth: 1,
  borderColor: flashcard.edge,
  ...shadow.card,
};

/** Noch leer – gestrichelt statt durchgezogen, wie ein unbeschriftetes Fach. */
const newTile = {
  backgroundColor: colors.surface,
  borderStyle: 'dashed' as const,
  borderColor: colors.premium,
  shadowOpacity: 0,
  elevation: 0,
};

const cardHeadRule = {
  height: 2,
  borderRadius: 1,
  marginBottom: spacing.xs,
};

const continueCard = {
  gap: spacing.sm,
  padding: spacing.md,
  borderRadius: radius.md,
  backgroundColor: flashcard.paper,
  borderWidth: 1,
  borderColor: flashcard.edge,
  ...shadow.lift,
};

const continueAction = {
  ...typography.label,
  letterSpacing: 0.4,
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
  fontSize: 10,
  color: flashcard.inkSoft,
};

/** Der Platzhalter für „noch nichts gelernt" – eine Spur des Balkens, der kommt. */
const emptyTrack = {
  height: 4,
  borderRadius: 2,
  backgroundColor: flashcard.rule,
};

const doneBadge = {
  width: 20,
  height: 20,
  borderRadius: 10,
  backgroundColor: colors.success,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const repeatPill = {
  minWidth: 20,
  height: 20,
  paddingHorizontal: 5,
  borderRadius: 10,
  backgroundColor: colors.warningSoft,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
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
