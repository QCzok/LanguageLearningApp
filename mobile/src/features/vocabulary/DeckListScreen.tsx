import React, { useState } from 'react';
import { Pressable, RefreshControl, ScrollView, Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CEFR_LEVELS } from '@lingua/shared';
import type { CefrLevel, VocabDeckDto } from '@lingua/shared';
import {
  Button,
  Caption,
  EmptyState,
  ErrorState,
  Heading,
  LevelBadge,
  Loading,
  ProgressBar,
  Row,
  Title,
} from '../../components';
import { vocabularyApi } from '../../api/endpoints';
import { useActiveProfile } from '../../store/auth.store';
import { colors, flashcard, radius, spacing, typography } from '../../theme';
import { ChevronDownIcon } from '../workbook/BookIcons';
import type { VocabularyStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<VocabularyStackParamList, 'DeckList'>;

/**
 * Vokabeltrainer als Akkordeon nach Niveau.
 *
 * Pro Niveau gibt es genau zwei Wege zu lernen – nie einen dritten,
 * verwirrenden Mittelweg: „Neue Vokabeln“ zeigt unbekannte Wörter als Auswahl
 * mit fünf Bedeutungsvorschlägen; eine falsche Auswahl schickt die Karte auf
 * den Wiederholen-Stapel (Serverseite: `dueAt` rückt auf „gleich wieder
 * fällig“ vor). „Wiederholen“ zeigt genau diesen Stapel.
 *
 * Beide werden als das dargestellt, was sie sind: zwei Kartenstapel. Die
 * Schichten dahinter sind keine Dekoration, sondern zeigen an, ob überhaupt
 * etwas im Stapel liegt – ein leerer Stapel ist flach.
 */
export default function DeckListScreen({ navigation }: Props) {
  const profile = useActiveProfile();
  const decks = useQuery({ queryKey: ['decks'], queryFn: () => vocabularyApi.decks() });
  const [expanded, setExpanded] = useState<Set<CefrLevel> | null>(null);

  if (decks.isLoading) return <Loading />;
  if (decks.isError || !decks.data) {
    return <ErrorState message="Decks konnten nicht geladen werden." onRetry={decks.refetch} />;
  }

  if (decks.data.length === 0) {
    return (
      <EmptyState
        emoji="🗂️"
        title="Noch keine Vokabeln"
        description="Für dein Niveau sind noch keine Vokabelsammlungen hinterlegt."
      />
    );
  }

  const byLevel = CEFR_LEVELS.map((level) => ({
    level: level as CefrLevel,
    decks: decks.data.filter((deck) => deck.level === level),
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

  function startSession(level: CefrLevel, queueType: 'NEW' | 'DUE') {
    navigation.navigate('Review', {
      level,
      queueType,
      title: `${levelHeadline(level)} · ${queueType === 'NEW' ? 'Neue Vokabeln' : 'Wiederholen'}`,
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
            <Title>Vokabeltrainer</Title>
            <Caption>Neue Wörter lernen und Gelerntes wiederholen.</Caption>
          </View>
          <Button
            label="Statistik"
            variant="ghost"
            fullWidth={false}
            onPress={() => navigation.navigate('VocabStats')}
          />
        </Row>

        {byLevel.map((group) => (
          <LevelSection
            key={group.level}
            level={group.level}
            decks={group.decks}
            isCurrent={group.level === profile?.level}
            isOpen={openLevels.has(group.level)}
            onToggle={() => toggleLevel(group.level)}
            onStart={(queueType) => startSession(group.level, queueType)}
            onOpenDeck={(deck) => navigation.navigate('DeckDetail', { deckId: deck.id, title: deck.title })}
          />
        ))}
      </ScrollView>
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
  onOpenDeck,
}: {
  level: CefrLevel;
  decks: VocabDeckDto[];
  isCurrent: boolean;
  isOpen: boolean;
  onToggle: () => void;
  onStart: (queueType: 'NEW' | 'DUE') => void;
  onOpenDeck: (deck: VocabDeckDto) => void;
}) {
  const totalItems = decks.reduce((sum, deck) => sum + deck.itemCount, 0);
  const newCount = decks.reduce((sum, deck) => sum + (deck.progress?.new ?? deck.itemCount), 0);
  const dueCount = decks.reduce((sum, deck) => sum + (deck.progress?.dueNow ?? 0), 0);
  const masteredCount = decks.reduce((sum, deck) => sum + (deck.progress?.mastered ?? 0), 0);

  return (
    <View style={sectionContainer}>
      <Pressable
        accessibilityRole="button"
        accessibilityState={{ expanded: isOpen }}
        onPress={onToggle}
        style={({ pressed }) => [levelHeader, pressed && { opacity: 0.7 }]}
      >
        <LevelBadge level={level} />
        <View style={{ flex: 1, gap: 2 }}>
          <Row gap={spacing.xs}>
            <Heading>{levelHeadline(level)}</Heading>
            {isCurrent ? <CurrentPill /> : null}
          </Row>
          <Caption>
            {totalItems} Vokabeln
            {masteredCount > 0 ? ` · ${masteredCount} gemeistert` : ''}
          </Caption>
        </View>
        <View style={{ transform: [{ rotate: isOpen ? '180deg' : '0deg' }] }}>
          <ChevronDownIcon color={colors.textMuted} size={18} />
        </View>
      </Pressable>

      {isOpen ? (
        <View style={{ gap: spacing.lg, paddingTop: spacing.lg }}>
          {/* Die beiden einzigen Wege zu lernen, als zwei Stapel nebeneinander. */}
          <Row gap={spacing.md} style={{ alignItems: 'flex-start' }}>
            <DeckStack
              count={newCount}
              label="Neue Vokabeln"
              hint={newCount > 0 ? 'noch nie geübt' : 'alles kennengelernt'}
              accent={colors.primary}
              onPress={() => onStart('NEW')}
            />
            <DeckStack
              count={dueCount}
              label="Wiederholen"
              hint={dueCount > 0 ? 'jetzt fällig' : 'nichts fällig'}
              accent={colors.warning}
              onPress={() => onStart('DUE')}
            />
          </Row>

          <View style={{ gap: spacing.sm }}>
            <Caption>Oder gezielt nach Thema üben</Caption>
            {decks.map((deck) => (
              <DeckRow key={deck.id} deck={deck} onPress={() => onOpenDeck(deck)} />
            ))}
          </View>
        </View>
      ) : null}
    </View>
  );
}

function CurrentPill() {
  return (
    <View style={currentPill}>
      <Text style={currentPillText}>AKTUELL</Text>
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
  const layers = count === 0 ? 0 : count >= 5 ? 2 : 1;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`${label}, ${count}`}
      onPress={onPress}
      style={({ pressed }) => [{ flex: 1 }, pressed && { opacity: 0.85 }]}
    >
      <View>
        {layers >= 2 ? <View style={[stackLayer, { transform: [{ rotate: '-3.5deg' }] }]} /> : null}
        {layers >= 1 ? <View style={[stackLayer, { transform: [{ rotate: '2.5deg' }] }]} /> : null}

        <View style={[stackTop, count === 0 && { backgroundColor: colors.surfaceAlt }]}>
          {/* Kopflinie in der Stapelfarbe – wie der Reiter einer Karteikarte. */}
          <View style={[stackHeadRule, { backgroundColor: count === 0 ? colors.border : accent }]} />
          <Text style={[stackCount, { color: count === 0 ? colors.textMuted : accent }]}>{count}</Text>
          <Text style={stackLabel}>{label}</Text>
          <Text style={stackHint}>{hint}</Text>
        </View>
      </View>
    </Pressable>
  );
}

function DeckRow({ deck, onPress }: { deck: VocabDeckDto; onPress: () => void }) {
  const progress = deck.progress;
  const learned = progress ? progress.total - progress.new : 0;
  const percent = progress?.total ? (learned / progress.total) * 100 : 0;

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [deckRow, pressed && { opacity: 0.85 }]}
    >
      {/* Angedeutete Kartenkante links – auch ein Themendeck ist ein Stapel. */}
      <View style={deckRowSpine} />

      <View style={{ flex: 1, gap: 5 }}>
        <Row gap={spacing.sm}>
          <Text style={[typography.bodyStrong, { flex: 1 }]}>{deck.title}</Text>
          {progress && progress.dueNow > 0 ? (
            <View style={dueBadge}>
              <Text style={[typography.label, { color: colors.textInverse }]}>{progress.dueNow}</Text>
            </View>
          ) : null}
        </Row>
        {deck.description ? <Caption>{deck.description}</Caption> : null}
        <ProgressBar value={percent} height={4} />
        <Caption>
          {deck.itemCount} Vokabeln
          {progress ? ` · ${progress.new} neu` : ''}
        </Caption>
      </View>
    </Pressable>
  );
}

function levelHeadline(level: CefrLevel): string {
  const map: Record<CefrLevel, string> = {
    A1: 'Erste Schritte',
    A2: 'Grundlagen',
    B1: 'Selbstständig',
    B2: 'Sicher im Alltag',
    C1: 'Fortgeschritten',
    C2: 'Nahezu muttersprachlich',
  };
  return map[level];
}

// ------------------------------------------------------------------ Styles

const sectionContainer = {
  backgroundColor: colors.surface,
  borderRadius: radius.lg,
  borderWidth: 1,
  borderColor: colors.border,
  padding: spacing.md,
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

const deckRow = {
  flexDirection: 'row' as const,
  alignItems: 'stretch' as const,
  gap: spacing.md,
  backgroundColor: colors.surface,
  borderRadius: radius.md,
  borderWidth: 1,
  borderColor: colors.border,
  padding: spacing.md,
};

const deckRowSpine = {
  width: 4,
  borderRadius: 2,
  backgroundColor: flashcard.stack,
  borderWidth: 1,
  borderColor: flashcard.edge,
};

const dueBadge = {
  backgroundColor: colors.warning,
  minWidth: 26,
  height: 26,
  borderRadius: 13,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  paddingHorizontal: 6,
};
