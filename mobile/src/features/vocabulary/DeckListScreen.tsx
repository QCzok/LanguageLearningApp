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
  Card,
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
import { colors, radius, spacing, typography } from '../../theme';
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
 * fällig“ vor). „Wiederholen“ zeigt genau diesen Stapel – alles, was fällig
 * ist, gemischt aus Lernkarte, Auswahl und Eintippen je nach Stand der Karte.
 * Themendecks bleiben als zweite, kleinere Ebene erreichbar, für wer gezielt
 * ein Thema üben will.
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
            {totalItems} Vokabeln · {decks.length} {decks.length === 1 ? 'Deck' : 'Decks'}
          </Caption>
        </View>
        <View style={{ transform: [{ rotate: isOpen ? '180deg' : '0deg' }] }}>
          <ChevronDownIcon color={colors.textMuted} size={18} />
        </View>
      </Pressable>

      {isOpen ? (
        <View style={{ gap: spacing.md, paddingTop: spacing.md }}>
          {/* Die beiden einzigen Wege zu lernen – neue Vokabeln oder der
              Wiederholen-Stapel. Kein dritter, uneindeutiger Button daneben. */}
          <Row gap={spacing.sm}>
            <ActionTile
              icon="🆕"
              label="Neue Vokabeln"
              count={newCount}
              hint={newCount > 0 ? `${newCount} bereit` : 'Alles gelernt'}
              accent={colors.primary}
              onPress={() => onStart('NEW')}
            />
            <ActionTile
              icon="🔁"
              label="Wiederholen"
              count={dueCount}
              hint={dueCount > 0 ? `${dueCount} fällig` : 'Nichts fällig'}
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

/** Eine der beiden Lernrichtungen – bewusst gleich groß, keine ist die Standardwahl. */
function ActionTile({
  icon,
  label,
  count,
  hint,
  accent,
  onPress,
}: {
  icon: string;
  label: string;
  count: number;
  hint: string;
  accent: string;
  onPress: () => void;
}) {
  // Bewusst nie gesperrt: der Nutzer soll immer wählen können, auch wenn
  // gerade nichts ansteht – der leere Stapel erklärt sich dann im
  // Lernbildschirm selbst (siehe ReviewScreen).
  const empty = count === 0;
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={onPress}
      style={({ pressed }) => [
        actionTile,
        { borderColor: empty ? colors.border : accent },
        pressed && { opacity: 0.85 },
        empty && { opacity: 0.6 },
      ]}
    >
      <Text style={{ fontSize: 22 }}>{icon}</Text>
      <Text style={actionTileLabel}>{label}</Text>
      <Text style={[actionTileHint, { color: empty ? colors.textMuted : accent }]}>{hint}</Text>
    </Pressable>
  );
}

function DeckRow({ deck, onPress }: { deck: VocabDeckDto; onPress: () => void }) {
  const progress = deck.progress;
  const learned = progress ? progress.total - progress.new : 0;
  const percent = progress?.total ? (learned / progress.total) * 100 : 0;

  return (
    <Card onPress={onPress} style={deckRowCard}>
      <Row gap={spacing.md}>
        <View style={{ flex: 1, gap: 2 }}>
          <Text style={typography.bodyStrong}>{deck.title}</Text>
          {deck.description ? <Caption>{deck.description}</Caption> : null}
        </View>
        {progress && progress.dueNow > 0 ? (
          <View style={dueBadge}>
            <Text style={[typography.label, { color: colors.textInverse }]}>{progress.dueNow}</Text>
          </View>
        ) : null}
      </Row>
      <ProgressBar value={percent} height={5} />
      <Caption>{deck.itemCount} Vokabeln</Caption>
    </Card>
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

const actionTile = {
  flex: 1,
  gap: 2,
  backgroundColor: colors.surface,
  borderRadius: radius.md,
  borderWidth: 1.5,
  padding: spacing.md,
};

const actionTileLabel = {
  ...typography.bodyStrong,
  color: colors.text,
};

const actionTileHint = {
  ...typography.caption,
  fontWeight: '600' as const,
};

// Deck-Zeilen innerhalb eines aufgeklappten Niveaus brauchen keinen eigenen
// Schatten – die Gruppe trägt schon einen Rahmen.
const deckRowCard = {
  shadowOpacity: 0,
  elevation: 0,
  borderWidth: 1,
  borderColor: colors.border,
  gap: spacing.xs,
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
