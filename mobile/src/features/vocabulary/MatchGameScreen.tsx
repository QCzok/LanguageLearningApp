import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Animated, Pressable, Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { DeckItemDto, VocabDeckDetailDto } from '@lingua/shared';
import { Button, Caption, EmptyState, ErrorState, Loading, ProgressBar, Row, Screen } from '../../components';
import { vocabularyApi } from '../../api/endpoints';
import { CACHE } from '../../api/query-client';
import { useTranslation } from '../../i18n';
import { useActiveProfile } from '../../store/auth.store';
import { colors, radius, spacing, typography } from '../../theme';
import { speakTerm, stopSpeaking } from './speech';
import { useTrainerSettings } from './trainerSettings';
import type { VocabularyStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<VocabularyStackParamList, 'Match'>;

/** Paare je Runde – mehr passen auf einem Telefon nicht lesbar nebeneinander. */
const PAIRS_PER_ROUND = 5;
const ROUNDS = 3;
/** Jeder Fehlgriff kostet Zeit – sonst lohnte sich wildes Durchprobieren. */
const PENALTY_MS = 2000;

interface Tile {
  key: string;
  pairId: string;
  text: string;
  side: 'term' | 'translation';
}

type TileState = 'idle' | 'selected' | 'matched' | 'wrong';

/** Mindestanzahl Wörter, damit das Spiel angeboten wird. */
export const MATCH_MIN_WORDS = 4;

function shuffled<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Wählt die Wörter für eine Partie: gemischt, und innerhalb einer Runde nie
 * zwei Wörter mit gleichem Begriff oder gleicher Übersetzung – sonst gäbe es
 * zwei richtige Partner für eine Kachel.
 */
function buildRounds(items: DeckItemDto[]): DeckItemDto[][] {
  const pool = shuffled(items);
  const rounds: DeckItemDto[][] = [];
  while (rounds.length < ROUNDS && pool.length > 0) {
    const round: DeckItemDto[] = [];
    const terms = new Set<string>();
    const translations = new Set<string>();
    for (let i = 0; i < pool.length && round.length < PAIRS_PER_ROUND; ) {
      const item = pool[i];
      if (terms.has(item.term) || translations.has(item.translation)) {
        i++;
        continue;
      }
      terms.add(item.term);
      translations.add(item.translation);
      round.push(item);
      pool.splice(i, 1);
    }
    if (round.length < 2) break;
    rounds.push(round);
  }
  return rounds;
}

function tilesFor(round: DeckItemDto[]): { left: Tile[]; right: Tile[] } {
  return {
    left: shuffled(round.map((item) => ({ key: `t-${item.id}`, pairId: item.id, text: item.term, side: 'term' as const }))),
    right: shuffled(
      round.map((item) => ({ key: `r-${item.id}`, pairId: item.id, text: item.translation, side: 'translation' as const })),
    ),
  };
}

function formatTime(ms: number): string {
  const seconds = ms / 1000;
  return seconds < 60 ? `${seconds.toFixed(1)} s` : `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, '0')}`;
}

/**
 * Paare finden: Begriffe links, Übersetzungen rechts, gegen die Uhr.
 *
 * Ein schnelles Spiel zwischendurch, wie man es aus Vokabel-Apps kennt –
 * es zählt nicht in die Wiederholungsplanung, sondern trainiert das
 * Wiedererkennen. Wer danebengreift, bekommt zwei Sekunden aufgeschlagen;
 * die Bestzeit je Stapel bleibt auf dem Gerät gespeichert.
 */
export default function MatchGameScreen({ route, navigation }: Props) {
  const { deckId } = route.params;
  const { t } = useTranslation();
  const profile = useActiveProfile();
  const { autoSpeak, bestMatchTimes, recordMatchTime } = useTrainerSettings();

  const deck = useQuery({
    queryKey: ['deck', deckId],
    queryFn: () => vocabularyApi.deck(deckId),
    staleTime: CACHE.PROGRESS,
  });

  // Die Runden werden aus dem geladenen Stapel gemischt – neu bei jedem
  // Laden und bei jedem „Nochmal spielen“.
  const [game, setGame] = useState<{ source?: VocabDeckDetailDto; rounds: DeckItemDto[][] }>({ rounds: [] });
  if (deck.data && deck.data !== game.source) {
    setGame({ source: deck.data, rounds: buildRounds(deck.data.items) });
  }
  const rounds = game.rounds;
  const [roundIndex, setRoundIndex] = useState(0);
  const [selected, setSelected] = useState<Tile | null>(null);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [wrong, setWrong] = useState<string[]>([]);
  const [mistakes, setMistakes] = useState(0);
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [now, setNow] = useState(Date.now());
  const [finishedMs, setFinishedMs] = useState<number | null>(null);
  const [newRecord, setNewRecord] = useState(false);
  const pop = useRef(new Animated.Value(1)).current;

  const round = rounds[roundIndex];
  const tiles = useMemo(() => (round ? tilesFor(round) : { left: [], right: [] }), [round]);

  // Die Uhr läuft ab dem ersten Tipp, nicht schon beim Laden.
  useEffect(() => {
    if (startedAt === null || finishedMs !== null) return;
    const timer = setInterval(() => setNow(Date.now()), 100);
    return () => clearInterval(timer);
  }, [startedAt, finishedMs]);

  useEffect(() => stopSpeaking, []);

  const elapsed = startedAt === null ? 0 : (finishedMs ?? now - startedAt + mistakes * PENALTY_MS);

  function restart() {
    setGame((prev) => ({ ...prev, rounds: prev.source ? buildRounds(prev.source.items) : [] }));
    setRoundIndex(0);
    setSelected(null);
    setMatched(new Set());
    setWrong([]);
    setMistakes(0);
    setStartedAt(null);
    setFinishedMs(null);
    setNewRecord(false);
  }

  function tap(tile: Tile) {
    if (matched.has(tile.pairId) || wrong.length > 0) return;
    if (startedAt === null) {
      setStartedAt(Date.now());
      setNow(Date.now());
    }
    if (tile.side === 'term' && autoSpeak) void speakTerm(tile.text, profile?.language.code);

    if (!selected || selected.side === tile.side) {
      setSelected(selected?.key === tile.key ? null : tile);
      return;
    }

    if (selected.pairId === tile.pairId) {
      const nextMatched = new Set(matched).add(tile.pairId);
      setMatched(nextMatched);
      setSelected(null);
      pop.setValue(0.9);
      Animated.spring(pop, { toValue: 1, friction: 3, useNativeDriver: true }).start();

      if (round && nextMatched.size === round.length) {
        // Kurz stehen lassen, damit das letzte Paar sichtbar grün wird.
        setTimeout(() => nextRound(), 350);
      }
      return;
    }

    setMistakes((value) => value + 1);
    setWrong([selected.key, tile.key]);
    setSelected(null);
    setTimeout(() => setWrong([]), 550);
  }

  function nextRound() {
    if (roundIndex + 1 < rounds.length) {
      setRoundIndex((value) => value + 1);
      setMatched(new Set());
      return;
    }
    const total = Date.now() - (startedAt ?? Date.now()) + mistakes * PENALTY_MS;
    setFinishedMs(total);
    setNewRecord(recordMatchTime(deckId, total));
  }

  if (deck.isLoading) return <Loading />;
  if (deck.isError || !deck.data) return <ErrorState message={t('deckError')} onRetry={deck.refetch} />;

  if (rounds.length === 0) {
    return (
      <Screen>
        <EmptyState
          emoji="🧩"
          title={t('matchTooFewTitle')}
          description={t('matchTooFewBody', { count: MATCH_MIN_WORDS })}
          action={{ label: t('commonBack'), onPress: () => navigation.goBack() }}
        />
      </Screen>
    );
  }

  const totalPairs = rounds.reduce((sum, r) => sum + r.length, 0);
  const pairsDone = rounds.slice(0, roundIndex).reduce((sum, r) => sum + r.length, 0) + matched.size;
  const best = bestMatchTimes[deckId];

  // ------------------------------------------------------------ Ergebnis
  if (finishedMs !== null) {
    const perPair = finishedMs / totalPairs;
    const stars = mistakes === 0 && perPair < 3000 ? 3 : mistakes <= 2 && perPair < 5000 ? 2 : 1;
    return (
      <Screen style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', gap: spacing.lg }}>
          <View style={{ alignItems: 'center', gap: spacing.xs }}>
            <Text style={{ fontSize: 44, letterSpacing: 6 }}>
              {'★'.repeat(stars)}
              <Text style={{ color: colors.border }}>{'★'.repeat(3 - stars)}</Text>
            </Text>
            <Text style={[typography.title, { textAlign: 'center' }]}>
              {newRecord ? t('matchNewRecord') : t('matchDone')}
            </Text>
            <Text style={bigTime}>{formatTime(finishedMs)}</Text>
            <Caption>
              {t('matchSummary', { pairs: totalPairs, mistakes })}
              {best !== undefined && !newRecord ? ` · ${t('matchBest', { time: formatTime(best) })}` : ''}
            </Caption>
          </View>
          <Button label={t('matchPlayAgain')} onPress={restart} />
          <Button label={t('commonDone')} variant="secondary" onPress={() => navigation.goBack()} />
        </View>
      </Screen>
    );
  }

  // ---------------------------------------------------------------- Spiel
  return (
    <Screen style={{ flex: 1 }}>
      <Row>
        <Caption>{t('matchRound', { round: roundIndex + 1, rounds: rounds.length })}</Caption>
        <View style={{ flex: 1 }} />
        {mistakes > 0 ? <Caption>{`✗ ${mistakes}  `}</Caption> : null}
        <Text style={timerText}>⏱ {formatTime(elapsed)}</Text>
      </Row>
      <ProgressBar value={(pairsDone / totalPairs) * 100} height={6} color={colors.success} />
      <Caption>{startedAt === null ? t('matchHint') : best !== undefined ? t('matchBest', { time: formatTime(best) }) : ' '}</Caption>

      <Animated.View style={{ flex: 1, flexDirection: 'row', gap: spacing.md, transform: [{ scale: pop }] }}>
        {[tiles.left, tiles.right].map((column, columnIndex) => (
          <View key={columnIndex} style={{ flex: 1, gap: spacing.sm }}>
            {column.map((tile) => {
              const state: TileState = matched.has(tile.pairId)
                ? 'matched'
                : wrong.includes(tile.key)
                  ? 'wrong'
                  : selected?.key === tile.key
                    ? 'selected'
                    : 'idle';
              return (
                <Pressable
                  key={tile.key}
                  accessibilityRole="button"
                  accessibilityState={{ selected: state === 'selected', disabled: state === 'matched' }}
                  disabled={state === 'matched'}
                  onPress={() => tap(tile)}
                  style={({ pressed }) => [tileStyle, tileStates[state], pressed && { transform: [{ scale: 0.97 }] }]}
                >
                  <Text style={[tileText, state === 'matched' && { color: colors.success }]} numberOfLines={3}>
                    {tile.text}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        ))}
      </Animated.View>
    </Screen>
  );
}

const tileStyle = {
  flex: 1,
  maxHeight: 88,
  minHeight: 54,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  paddingHorizontal: spacing.sm,
  borderRadius: radius.md,
  borderWidth: 1.5,
  borderBottomWidth: 4,
  borderColor: colors.border,
  backgroundColor: colors.surface,
};

const tileStates = {
  idle: {},
  selected: { borderColor: colors.primary, backgroundColor: colors.primarySoft },
  matched: { borderColor: colors.success, backgroundColor: colors.successSoft, opacity: 0.45 },
  wrong: { borderColor: colors.danger, backgroundColor: colors.dangerSoft },
};

const tileText = {
  ...typography.bodyStrong,
  textAlign: 'center' as const,
  color: colors.text,
};

const timerText = {
  ...typography.bodyStrong,
  color: colors.text,
  fontVariant: ['tabular-nums' as const],
};

const bigTime = {
  fontSize: 40,
  lineHeight: 48,
  fontWeight: '700' as const,
  color: colors.primaryDark,
};
