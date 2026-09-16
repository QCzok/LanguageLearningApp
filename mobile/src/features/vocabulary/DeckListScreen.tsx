import React, { useState } from 'react';
import { Modal, Pressable, RefreshControl, ScrollView, Text, View } from 'react-native';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useFocusEffect } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CEFR_LEVELS } from '@lingua/shared';
import type { CefrLevel, VocabDeckDto } from '@lingua/shared';
import {
  Button,
  Caption,
  Card,
  EmptyState,
  ErrorState,
  Heading,
  Input,
  LevelBadge,
  Loading,
  Row,
  Title,
} from '../../components';
import { aiApi, vocabularyApi } from '../../api/endpoints';
import { useTranslation } from '../../i18n';
import type { TranslationKey } from '../../i18n';
import { useActiveProfile, useIsPremium } from '../../store/auth.store';
import { alert } from '../../utils/alert';
import { colors, flashcard, radius, spacing, typography } from '../../theme';
import { ChevronDownIcon, ShuffleIcon } from '../workbook/BookIcons';
import type { VocabularyStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<VocabularyStackParamList, 'DeckList'>;

/**
 * Vokabeltrainer als Akkordeon nach Niveau.
 *
 * Pro Niveau gibt es bis zu drei Stapel, die direkt von der letzten Antwort
 * abhängen (nicht vom SM-2-Timer oder Mastery-Intervall): „Neue Vokabeln“
 * zeigt unbekannte Wörter als Auswahl mit fünf Bedeutungsvorschlägen. Eine
 * falsche Antwort schickt die Karte sofort in „Wiederholen“ – dort bleibt sie
 * liegen, bis sie richtig beantwortet wird. Eine richtige Antwort schickt sie
 * nach „Gelernt“ zum Auffrischen; fällt man dort durch, wandert sie zurück
 * nach „Wiederholen“.
 *
 * Jeder Stapel erscheint nur, wenn dort auch etwas liegt – ein leerer Stapel
 * wird nicht angezeigt statt flach dargestellt.
 */
export default function DeckListScreen({ navigation }: Props) {
  const { t } = useTranslation();
  const profile = useActiveProfile();
  const isPremium = useIsPremium();
  const queryClient = useQueryClient();
  const decks = useQuery({ queryKey: ['decks'], queryFn: () => vocabularyApi.decks() });
  const [expanded, setExpanded] = useState<Set<CefrLevel> | null>(null);
  const [ownSectionOpen, setOwnSectionOpen] = useState(false);
  const [expandedTopics, setExpandedTopics] = useState<Set<string>>(new Set());
  const [showGenerate, setShowGenerate] = useState(false);
  const [topic, setTopic] = useState('');

  const generateDeck = useMutation({
    mutationFn: (value: string) => aiApi.generateVocabDeck(value),
    onSuccess: async (deck) => {
      await queryClient.invalidateQueries({ queryKey: ['decks'] });
      setShowGenerate(false);
      setTopic('');
      // Direkt aufgeklappt, statt zu einer separaten Ansicht zu wechseln – der
      // neue Stapel verhält sich sofort wie jeder andere: eigener Platz mit
      // Neu/Wiederholen/Gelernt, hier im gemeinsamen KI-Kollaps.
      setOwnSectionOpen(true);
      setExpandedTopics((prev) => new Set(prev).add(deck.id));
    },
  });

  function openGenerator() {
    if (!isPremium) {
      alert(t('vocabPremiumTitle'), t('vocabPremiumBody'));
      return;
    }
    setShowGenerate(true);
  }

  function closeGenerator() {
    if (generateDeck.isPending) return;
    setShowGenerate(false);
    setTopic('');
    generateDeck.reset();
  }

  // Nach einer (auch abgebrochenen) Lernsitzung müssen die Stapel hier aktuell
  // sein – nicht erst nach Ablauf der 60s-Cachezeit. Bewusst ohne `refetch` in
  // den Abhängigkeiten (siehe ChapterScreen): sonst löst der neue `refetch`
  // bei jedem Aufruf den Effekt erneut aus.
  useFocusEffect(
    React.useCallback(() => {
      void decks.refetch();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  if (decks.isLoading) return <Loading />;
  if (decks.isError || !decks.data) {
    return <ErrorState message={t('vocabDecksError')} onRetry={decks.refetch} />;
  }

  if (decks.data.length === 0) {
    return (
      <EmptyState
        emoji="🗂️"
        title={t('vocabEmptyTitle')}
        description={t('vocabEmptyDescription')}
      />
    );
  }

  // Eigene Decks (KI-generiert oder manuell angelegt) bekommen ihren eigenen
  // Platz in der Liste statt in der Niveau-Summe aufzugehen – siehe Backend
  // (`getReviewQueue`: eine Sitzung ohne `deckId` zählt nur Systemdecks).
  const ownDecks = decks.data.filter((deck) => !deck.isSystem);
  const systemDecks = decks.data.filter((deck) => deck.isSystem);

  const byLevel = CEFR_LEVELS.map((level) => ({
    level: level as CefrLevel,
    decks: systemDecks.filter((deck) => deck.level === level),
  })).filter((group) => group.decks.length > 0);

  const openLevels =
    expanded ??
    new Set<CefrLevel>([
      byLevel.find((group) => group.level === profile?.level)?.level ?? byLevel[0]?.level,
    ]);

  function toggleLevel(level: CefrLevel) {
    const next = new Set(openLevels);
    if (next.has(level)) next.delete(level);
    else next.add(level);
    setExpanded(next);
  }

  function toggleTopic(deckId: string) {
    setExpandedTopics((prev) => {
      const next = new Set(prev);
      if (next.has(deckId)) next.delete(deckId);
      else next.add(deckId);
      return next;
    });
  }

  function stackLabelFor(queueType: 'NEW' | 'DUE' | 'MASTERED'): string {
    return t(
      queueType === 'NEW' ? 'vocabStackNew' : queueType === 'DUE' ? 'vocabStackRepeat' : 'vocabStackLearned',
    );
  }

  function startSession(level: CefrLevel, queueType: 'NEW' | 'DUE' | 'MASTERED') {
    navigation.navigate('Review', {
      level,
      queueType,
      title: `${t(LEVEL_HEADLINE_KEYS[level])} · ${stackLabelFor(queueType)}`,
    });
  }

  function startDeckSession(deck: VocabDeckDto, queueType: 'NEW' | 'DUE' | 'MASTERED') {
    navigation.navigate('Review', {
      deckId: deck.id,
      queueType,
      title: `${deck.title} · ${stackLabelFor(queueType)}`,
    });
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={['left', 'right']}>
      <ScrollView
        contentContainerStyle={{ padding: spacing.lg, gap: spacing.md, paddingBottom: spacing.xxl }}
        refreshControl={<RefreshControl refreshing={decks.isRefetching} onRefresh={decks.refetch} />}
      >
        <Row>
          <View style={{ flex: 1 }}>
            <Title>{t('vocabTitle')}</Title>
            <Caption>{t('vocabSubtitle')}</Caption>
          </View>
          <Button
            label={t('vocabStatsButton')}
            variant="ghost"
            fullWidth={false}
            onPress={() => navigation.navigate('VocabStats')}
          />
        </Row>

        <Card style={{ borderColor: colors.premium }}>
          <Row gap={spacing.sm}>
            <Text style={{ fontSize: 26 }}>✨</Text>
            <View style={{ flex: 1 }}>
              <Heading>{t('vocabAiDeckTitle')}</Heading>
              <Caption>{isPremium ? t('vocabAiDeckPremium') : t('vocabAiDeckFree')}</Caption>
            </View>
          </Row>
          <Button
            label={isPremium ? t('vocabChooseTopic') : t('vocabViewPremium')}
            variant="premium"
            fullWidth={false}
            onPress={openGenerator}
          />
        </Card>

        {ownDecks.length > 0 ? (
          <OwnDecksGroup
            decks={ownDecks}
            isOpen={ownSectionOpen}
            onToggle={() => setOwnSectionOpen((prev) => !prev)}
            openTopics={expandedTopics}
            onToggleTopic={toggleTopic}
            onStart={startDeckSession}
          />
        ) : null}

        {byLevel.map((group) => (
          <LevelSection
            key={group.level}
            level={group.level}
            decks={group.decks}
            isCurrent={group.level === profile?.level}
            isOpen={openLevels.has(group.level)}
            onToggle={() => toggleLevel(group.level)}
            onStart={(queueType) => startSession(group.level, queueType)}
          />
        ))}
      </ScrollView>

      <Modal visible={showGenerate} transparent animationType="slide" onRequestClose={closeGenerator}>
        <View style={sheetBackdrop}>
          <SafeAreaView edges={['bottom']} style={sheetStyle}>
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
              variant="premium"
              loading={generateDeck.isPending}
              disabled={topic.trim().length < 2}
              onPress={() => generateDeck.mutate(topic.trim())}
            />
            <Button
              label={t('commonCancel')}
              variant="ghost"
              onPress={closeGenerator}
              disabled={generateDeck.isPending}
            />
          </SafeAreaView>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

// ----------------------------------------------------------------- Niveau

function LevelSection({
  level,
  decks,
  isCurrent,
  isOpen,
  onToggle,
  onStart,
}: {
  level: CefrLevel;
  decks: VocabDeckDto[];
  isCurrent: boolean;
  isOpen: boolean;
  onToggle: () => void;
  onStart: (queueType: 'NEW' | 'DUE' | 'MASTERED') => void;
}) {
  const { t } = useTranslation();
  const totalItems = decks.reduce((sum, deck) => sum + deck.itemCount, 0);
  const learnedCount = decks.reduce((sum, deck) => sum + (deck.progress?.learned ?? 0), 0);

  return (
    <StackAccordion
      icon={<LevelBadge level={level} />}
      title={
        <Row gap={spacing.xs}>
          <Heading>{t(LEVEL_HEADLINE_KEYS[level])}</Heading>
          {isCurrent ? <CurrentPill /> : null}
        </Row>
      }
      subtitle={
        t('vocabWordCount', { count: totalItems }) +
        (learnedCount > 0 ? ` · ${t('vocabLearnedCount', { count: learnedCount })}` : '')
      }
      isOpen={isOpen}
      onToggle={onToggle}
      newCount={decks.reduce((sum, deck) => sum + (deck.progress?.new ?? deck.itemCount), 0)}
      // Wiederholen/Gelernt hängen an der letzten Antwort (siehe Backend), nicht
      // am SM-2-Timer oder Mastery-Intervall – die Stapel erscheinen so, sobald
      // dort etwas liegt.
      dueCount={decks.reduce((sum, deck) => sum + (deck.progress?.needsRepeat ?? 0), 0)}
      learnedCount={learnedCount}
      onStart={onStart}
      emptyMessage={t('vocabNothingToDoLevel')}
    />
  );
}

// -------------------------------------------------------- Eigene Stapel

/**
 * Ein eigener Stapel (KI-generiert oder manuell angelegt) nimmt genau wie ein
 * Niveau seinen eigenen Platz in der Liste ein: eigenes Auf-/Zuklappen, eigene
 * Neu/Wiederholen/Gelernt-Stapel, unabhängig von jedem Niveau (siehe Backend –
 * eine Sitzung ohne `deckId` zählt nur Systemdecks, eigene Decks laufen
 * ausschließlich über ihre eigene `deckId`).
 */
function TopicSection({
  deck,
  isOpen,
  onToggle,
  onStart,
}: {
  deck: VocabDeckDto;
  isOpen: boolean;
  onToggle: () => void;
  onStart: (queueType: 'NEW' | 'DUE' | 'MASTERED') => void;
}) {
  const { t } = useTranslation();
  const progress = deck.progress;

  return (
    <StackAccordion
      icon={<Text style={{ fontSize: 26 }}>✨</Text>}
      title={
        <Row gap={spacing.xs}>
          <Heading>{deck.title}</Heading>
          <LevelBadge level={deck.level} small />
        </Row>
      }
      subtitle={
        t('vocabWordCount', { count: deck.itemCount }) +
        (progress && progress.learned > 0
          ? ` · ${t('vocabLearnedCount', { count: progress.learned })}`
          : '')
      }
      isOpen={isOpen}
      onToggle={onToggle}
      newCount={progress?.new ?? deck.itemCount}
      dueCount={progress?.needsRepeat ?? 0}
      learnedCount={progress?.learned ?? 0}
      onStart={onStart}
      emptyMessage={t('vocabNothingToDoTopic')}
      containerStyle={nestedSectionContainer}
    />
  );
}

/**
 * Gemeinsamer Kollaps für alle KI-generierten Stapel: ein Klick blendet die
 * gesamte Themenliste ein oder aus, statt jedes Thema als eigenen Eintrag in
 * der Hauptliste zu zeigen. Jedes Thema darin bleibt trotzdem einzeln
 * auf-/zuklappbar (siehe `TopicSection`).
 */
function OwnDecksGroup({
  decks,
  isOpen,
  onToggle,
  openTopics,
  onToggleTopic,
  onStart,
}: {
  decks: VocabDeckDto[];
  isOpen: boolean;
  onToggle: () => void;
  openTopics: Set<string>;
  onToggleTopic: (deckId: string) => void;
  onStart: (deck: VocabDeckDto, queueType: 'NEW' | 'DUE' | 'MASTERED') => void;
}) {
  const { t } = useTranslation();

  return (
    <View style={sectionContainer}>
      <Pressable
        accessibilityRole="button"
        accessibilityState={{ expanded: isOpen }}
        onPress={onToggle}
        style={({ pressed }) => [levelHeader, pressed && { opacity: 0.7 }]}
      >
        <Text style={{ fontSize: 26 }}>✨</Text>
        <View style={{ flex: 1, gap: 2 }}>
          <Heading>{t('vocabAiDeckTitle')}</Heading>
          <Caption>
            {decks.length === 1 ? t('vocabOneTopic') : t('vocabTopicsCount', { count: decks.length })}
          </Caption>
        </View>
        <View style={{ transform: [{ rotate: isOpen ? '180deg' : '0deg' }] }}>
          <ChevronDownIcon color={colors.textMuted} size={18} />
        </View>
      </Pressable>

      {isOpen ? (
        <View style={{ gap: spacing.md, paddingTop: spacing.lg }}>
          {decks.map((deck) => (
            <TopicSection
              key={deck.id}
              deck={deck}
              isOpen={openTopics.has(deck.id)}
              onToggle={() => onToggleTopic(deck.id)}
              onStart={(queueType) => onStart(deck, queueType)}
            />
          ))}
        </View>
      ) : null}
    </View>
  );
}

// --------------------------------------------------- Gemeinsames Akkordeon

/** Kopfzeile plus Neu/Wiederholen/Gelernt-Stapel – gemeinsame Hülle für Niveau- und Themenabschnitte. */
function StackAccordion({
  icon,
  title,
  subtitle,
  isOpen,
  onToggle,
  newCount,
  dueCount,
  learnedCount,
  onStart,
  emptyMessage,
  containerStyle,
}: {
  icon: React.ReactNode;
  title: React.ReactNode;
  subtitle: string;
  isOpen: boolean;
  onToggle: () => void;
  newCount: number;
  dueCount: number;
  learnedCount: number;
  onStart: (queueType: 'NEW' | 'DUE' | 'MASTERED') => void;
  emptyMessage: string;
  containerStyle?: object;
}) {
  const { t } = useTranslation();

  return (
    <View style={[sectionContainer, containerStyle]}>
      <Pressable
        accessibilityRole="button"
        accessibilityState={{ expanded: isOpen }}
        onPress={onToggle}
        style={({ pressed }) => [levelHeader, pressed && { opacity: 0.7 }]}
      >
        {icon}
        <View style={{ flex: 1, gap: 2 }}>
          {title}
          <Caption>{subtitle}</Caption>
        </View>
        <View style={{ transform: [{ rotate: isOpen ? '180deg' : '0deg' }] }}>
          <ChevronDownIcon color={colors.textMuted} size={18} />
        </View>
      </Pressable>

      {isOpen ? (
        <View style={{ gap: spacing.lg, paddingTop: spacing.lg }}>
          {newCount > 0 || dueCount > 0 || learnedCount > 0 ? (
            /* Drei Wege zu lernen, als Stapel nebeneinander – jeder nur, wenn dort etwas liegt. */
            <Row gap={spacing.md} style={{ alignItems: 'flex-start', flexWrap: 'wrap' }}>
              {newCount > 0 ? (
                <DeckStack
                  count={newCount}
                  label={t('vocabStackNew')}
                  hint={t('vocabHintNew')}
                  accent={colors.primary}
                  onPress={() => onStart('NEW')}
                />
              ) : null}
              {dueCount > 0 ? (
                <DeckStack
                  count={dueCount}
                  label={t('vocabStackRepeat')}
                  hint={t('vocabHintRepeat')}
                  accent={colors.warning}
                  onPress={() => onStart('DUE')}
                />
              ) : null}
              {learnedCount > 0 ? (
                <DeckStack
                  count={learnedCount}
                  label={t('vocabStackLearned')}
                  hint={t('vocabHintLearned')}
                  accent={colors.success}
                  onPress={() => onStart('MASTERED')}
                />
              ) : null}
            </Row>
          ) : (
            <Caption>{emptyMessage}</Caption>
          )}
        </View>
      ) : null}
    </View>
  );
}

function CurrentPill() {
  const { t } = useTranslation();

  return (
    <View style={currentPill}>
      <Text style={currentPillText}>{t('vocabCurrentPill')}</Text>
    </View>
  );
}

/**
 * Ein Kartenstapel.
 *
 * Die Schichten dahinter liegen leicht schief, wie von Hand abgelegt, und
 * richten sich nach dem Inhalt: kein Stapel ohne Karten, zwei Schichten erst
 * ab einer nennenswerten Menge. Angetippt werden kann er immer – auch leer,
 * dann erklärt der Lernbildschirm selbst, dass gerade nichts ansteht.
 *
 * Die „Mischen“-Zeile darunter öffnet den Stapel NICHT direkt. Sie zeigt kurz
 * einen Misch-Zustand (Stapel grau, nicht antippbar), damit der Nutzer sieht,
 * dass etwas passiert – erst danach lässt sich der Stapel wieder öffnen oder
 * erneut mischen.
 */
function DeckStack({
  count,
  label,
  hint,
  accent,
  onPress,
}: {
  count: number;
  label: string;
  hint: string;
  accent: string;
  onPress: () => void;
}) {
  const { t } = useTranslation();
  const [isShuffling, setIsShuffling] = useState(false);
  const shuffleTimeout = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(
    () => () => {
      if (shuffleTimeout.current) clearTimeout(shuffleTimeout.current);
    },
    [],
  );

  function handleShuffle() {
    if (isShuffling) return;
    setIsShuffling(true);
    shuffleTimeout.current = setTimeout(() => setIsShuffling(false), 700);
  }

  const layers = count === 0 ? 0 : count >= 5 ? 2 : 1;
  const isGrey = count === 0 || isShuffling;
  const tintColor = isGrey ? colors.textMuted : accent;

  return (
    <View style={{ flex: 1 }}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`${label}, ${count}`}
        accessibilityState={{ disabled: isShuffling }}
        disabled={isShuffling}
        onPress={onPress}
        style={({ pressed }) => [pressed && !isShuffling && { opacity: 0.85 }, isShuffling && { opacity: 0.6 }]}
      >
        <View>
          {layers >= 2 ? <View style={[stackLayer, { transform: [{ rotate: '-3.5deg' }] }]} /> : null}
          {layers >= 1 ? <View style={[stackLayer, { transform: [{ rotate: '2.5deg' }] }]} /> : null}

          <View style={[stackTop, isGrey && { backgroundColor: colors.surfaceAlt }]}>
            {/* Kopflinie in der Stapelfarbe – wie der Reiter einer Karteikarte. */}
            <View style={[stackHeadRule, { backgroundColor: isGrey ? colors.border : accent }]} />
            <Text style={[stackCount, { color: tintColor }]}>{count}</Text>
            <Text style={stackLabel}>{label}</Text>
            <Text style={stackHint}>{isShuffling ? t('vocabShufflingHint') : hint}</Text>
          </View>
        </View>
      </Pressable>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel={t('vocabShuffleA11y', { label })}
        accessibilityState={{ disabled: isShuffling }}
        disabled={isShuffling}
        onPress={handleShuffle}
        style={({ pressed }) => [shuffleRow, pressed && !isShuffling && { opacity: 0.6 }, isShuffling && { opacity: 0.5 }]}
      >
        <ShuffleIcon color={colors.textMuted} size={14} />
        <Text style={shuffleRowText}>{isShuffling ? t('vocabShuffling') : t('vocabShuffle')}</Text>
      </Pressable>
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

const sheetBackdrop = {
  flex: 1,
  backgroundColor: 'rgba(15, 23, 42, 0.4)',
  justifyContent: 'flex-end' as const,
};

const sheetStyle = {
  backgroundColor: colors.background,
  borderTopLeftRadius: radius.xl,
  borderTopRightRadius: radius.xl,
  padding: spacing.lg,
  gap: spacing.md,
};

const sectionContainer = {
  backgroundColor: colors.surface,
  borderRadius: radius.lg,
  borderWidth: 1,
  borderColor: colors.border,
  padding: spacing.md,
};

/** Themen im gemeinsamen KI-Kollaps: flacher als die äußere Box, damit sich nichts doppelt umrahmt. */
const nestedSectionContainer = {
  backgroundColor: colors.surfaceAlt,
  borderWidth: 0,
};

const levelHeader = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  gap: spacing.sm,
};

const currentPill = {
  backgroundColor: colors.primarySoft,
  borderRadius: radius.full,
  paddingHorizontal: spacing.sm,
  paddingVertical: 2,
};

const currentPillText = {
  fontSize: 10,
  fontWeight: '700' as const,
  letterSpacing: 0.8,
  color: colors.primaryDark,
};

/** Die schief liegenden Karten unter der obersten. */
const stackLayer = {
  position: 'absolute' as const,
  top: 4,
  left: 3,
  right: 3,
  bottom: -2,
  backgroundColor: flashcard.stack,
  borderRadius: radius.md,
  borderWidth: 1,
  borderColor: flashcard.edge,
};

const stackTop = {
  backgroundColor: flashcard.paper,
  borderRadius: radius.md,
  borderWidth: 1,
  borderColor: flashcard.edge,
  paddingHorizontal: spacing.md,
  paddingTop: spacing.md,
  paddingBottom: spacing.md,
  gap: 1,
  shadowColor: colors.text,
  shadowOpacity: 0.12,
  shadowRadius: 8,
  shadowOffset: { width: 0, height: 3 },
  elevation: 3,
};

/** Eigene, gut treffbare Zeile unter dem Stapel – dieselbe Aktion wie der Stapel selbst. */
const shuffleRow = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  gap: spacing.xs,
  minHeight: 40,
  marginTop: spacing.xs,
  borderRadius: radius.md,
  borderWidth: 1,
  borderColor: colors.border,
};

const shuffleRowText = {
  ...typography.label,
  color: colors.textMuted,
};

const stackHeadRule = {
  height: 2,
  borderRadius: 1,
  marginBottom: spacing.sm,
};

const stackCount = {
  fontSize: 32,
  lineHeight: 38,
  fontWeight: '700' as const,
};

const stackLabel = {
  ...typography.bodyStrong,
  color: flashcard.ink,
};

const stackHint = {
  fontSize: 12,
  lineHeight: 17,
  color: flashcard.inkSoft,
};

