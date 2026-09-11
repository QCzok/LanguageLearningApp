import React, { useState } from 'react';
import { Pressable, RefreshControl, ScrollView, Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { useFocusEffect } from '@react-navigation/native';
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
  const profile = useActiveProfile();
  const decks = useQuery({ queryKey: ['decks'], queryFn: () => vocabularyApi.decks() });
  const [expanded, setExpanded] = useState<Set<CefrLevel> | null>(null);

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

  function startSession(level: CefrLevel, queueType: 'NEW' | 'DUE' | 'MASTERED') {
    const stackLabel =
      queueType === 'NEW' ? 'Neue Vokabeln' : queueType === 'DUE' ? 'Wiederholen' : 'Gelernt';
    navigation.navigate('Review', {
      level,
      queueType,
      title: `${levelHeadline(level)} · ${stackLabel}`,
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
}: {
  level: CefrLevel;
  decks: VocabDeckDto[];
  isCurrent: boolean;
  isOpen: boolean;
  onToggle: () => void;
  onStart: (queueType: 'NEW' | 'DUE' | 'MASTERED') => void;
}) {
  const totalItems = decks.reduce((sum, deck) => sum + deck.itemCount, 0);
  const newCount = decks.reduce((sum, deck) => sum + (deck.progress?.new ?? deck.itemCount), 0);
  // Wiederholen/Gelernt hängen an der letzten Antwort (siehe Backend), nicht
  // am SM-2-Timer oder Mastery-Intervall – die Stapel erscheinen so, sobald
  // dort etwas liegt.
  const dueCount = decks.reduce((sum, deck) => sum + (deck.progress?.needsRepeat ?? 0), 0);
  const learnedCount = decks.reduce((sum, deck) => sum + (deck.progress?.learned ?? 0), 0);

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
            {learnedCount > 0 ? ` · ${learnedCount} gelernt` : ''}
          </Caption>
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
                  label="Neue Vokabeln"
                  hint="noch nie geübt"
                  accent={colors.primary}
                  onPress={() => onStart('NEW')}
                />
              ) : null}
              {dueCount > 0 ? (
                <DeckStack
                  count={dueCount}
                  label="Wiederholen"
                  hint="falsch beantwortet"
                  accent={colors.warning}
                  onPress={() => onStart('DUE')}
                />
              ) : null}
              {learnedCount > 0 ? (
                <DeckStack
                  count={learnedCount}
                  label="Gelernt"
                  hint="zum Auffrischen"
                  accent={colors.success}
                  onPress={() => onStart('MASTERED')}
                />
              ) : null}
            </Row>
          ) : (
            <Caption>Für dieses Niveau ist gerade nichts zu tun – alles gelernt 🎉</Caption>
          )}
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

