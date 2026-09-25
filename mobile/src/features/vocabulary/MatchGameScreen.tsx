import React, { useEffect, useRef, useState } from 'react';
import { Text, View } from 'react-native';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { ReviewCardDto } from '@lingua/shared';
import { Button, Caption, EmptyState, ErrorState, Loading, ProgressBar, Row, Screen } from '../../components';
import { vocabularyApi } from '../../api/endpoints';
import { useTranslation } from '../../i18n';
import { usePointsBatch } from '../../hooks/usePointsBatch';
import { useActiveProfile } from '../../store/auth.store';
import { colors, spacing, typography } from '../../theme';
import { PAIRS_PER_ROUND, PairsBoard, splitIntoRounds } from './PairsBoard';
import { stopSpeaking } from './speech';
import { ALL_CATEGORIES, useTrainerSettings } from './trainerSettings';
import type { VocabularyStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<VocabularyStackParamList, 'Match'>;

const ROUNDS = 3;
/** Jeder Fehlgriff kostet Zeit – sonst lohnte sich wildes Durchprobieren. */
const PENALTY_MS = 2000;

function formatTime(ms: number): string {
  const seconds = ms / 1000;
  return seconds < 60 ? `${seconds.toFixed(1)} s` : `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, '0')}`;
}

/**
 * Paare finden: Begriffe links, Übersetzungen rechts, gegen die Uhr.
 *
 * Die Wörter kommen zufällig aus allen Kategorien, aus den gewählten oder
 * aus den Wiederholern – wie bei jeder anderen Übungsart. Jedes Paar zählt als Antwort: ohne
 * Fehlgriff gefunden heißt gewusst, sonst landet das Wort bei den Fehlern.
 * Wer danebengreift, bekommt zwei Sekunden aufgeschlagen; die Bestzeit je
 * Kategorie bleibt auf dem Gerät gespeichert.
 */
export default function MatchGameScreen({ route, navigation }: Props) {
  const { deckIds, mistakesOnly } = route.params;
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const profile = useActiveProfile();
  const { autoSpeak, bestMatchTimes, recordMatchTime } = useTrainerSettings();
  // Bestzeiten gelten je Auswahl; Wiederholer sind keine faire Strecke dafür.
  const recordKey = mistakesOnly ? null : deckIds?.length ? [...deckIds].sort().join(',') : ALL_CATEGORIES;

  const { data, isLoading, isError, refetch, isRefetching } = useQuery({
    queryKey: ['match-queue', deckIds ?? 'all', mistakesOnly ?? false],
    queryFn: () =>
      vocabularyApi.queue({
        deckIds,
        modes: ['MATCHING'],
        limit: PAIRS_PER_ROUND * ROUNDS,
        ...(mistakesOnly ? { onlyNeedsRepeat: true } : {}),
      }),
    staleTime: 0,
    gcTime: 0,
  });

  const pointsBatch = usePointsBatch();
  const submit = useMutation({
    mutationFn: (body: Parameters<typeof vocabularyApi.review>[0]) =>
      pointsBatch.track(vocabularyApi.review(body)),
  });

  // Die Runden werden aus den geladenen Karten gebildet – neu bei jedem Laden.
  const [game, setGame] = useState<{ source?: ReviewCardDto[]; rounds: ReviewCardDto[][]; id: number }>({
    rounds: [],
    id: 0,
  });
  if (data && data !== game.source) {
    setGame((prev) => ({ source: data, rounds: splitIntoRounds(data).rounds, id: prev.id + 1 }));
  }
  const rounds = game.rounds;
  const [roundIndex, setRoundIndex] = useState(0);
  const [matchedInRound, setMatchedInRound] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [missedWords, setMissedWords] = useState(0);
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [now, setNow] = useState(Date.now());
  const [finishedMs, setFinishedMs] = useState<number | null>(null);
  const [newRecord, setNewRecord] = useState(false);
  const roundStartedAt = useRef(Date.now());

  // Die Uhr läuft ab dem ersten Tipp, nicht schon beim Laden.
  useEffect(() => {
    if (startedAt === null || finishedMs !== null) return;
    const timer = setInterval(() => setNow(Date.now()), 100);
    return () => clearInterval(timer);
  }, [startedAt, finishedMs]);

  useEffect(() => stopSpeaking, []);

  const elapsed = startedAt === null ? 0 : (finishedMs ?? now - startedAt + mistakes * PENALTY_MS);

  function restart() {
    setRoundIndex(0);
    setMatchedInRound(0);
    setMistakes(0);
    setMissedWords(0);
    setStartedAt(null);
    setFinishedMs(null);
    setNewRecord(false);
    void refetch();
  }

  function handleMatch(cardId: string, clean: boolean) {
    setMatchedInRound((value) => value + 1);
    if (!clean) setMissedWords((value) => value + 1);
    submit.mutate({
      cardId,
      grade: clean ? 4 : 1,
      mode: 'MATCHING',
      durationMs: Date.now() - roundStartedAt.current,
    });
  }

  function nextRound() {
    roundStartedAt.current = Date.now();
    if (roundIndex + 1 < rounds.length) {
      setRoundIndex((value) => value + 1);
      setMatchedInRound(0);
      return;
    }
    const total = Date.now() - (startedAt ?? Date.now()) + mistakes * PENALTY_MS;
    setFinishedMs(total);
    setNewRecord(recordKey !== null && recordMatchTime(recordKey, total));
    pointsBatch.finish();
    void queryClient.invalidateQueries({ queryKey: ['decks'] });
    void queryClient.invalidateQueries({ queryKey: ['deck'] });
    void queryClient.invalidateQueries({ queryKey: ['vocab-stats'] });
  }

  if (isLoading || isRefetching) return <Loading label={t('reviewLoadingCards')} />;
  if (isError) return <ErrorState message={t('reviewStartError')} onRetry={refetch} />;

  if (rounds.length === 0) {
    return (
      <Screen>
        <EmptyState
          title={t('matchTooFewTitle')}
          description={t('matchTooFewBody')}
          action={{ label: t('commonBack'), onPress: () => navigation.goBack() }}
        />
      </Screen>
    );
  }

  const totalPairs = rounds.reduce((sum, r) => sum + r.length, 0);
  const pairsDone = rounds.slice(0, roundIndex).reduce((sum, r) => sum + r.length, 0) + matchedInRound;
  const best = recordKey === null ? undefined : bestMatchTimes[recordKey];

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
          {missedWords > 0 ? (
            <Button
              label={t('reviewRepeatMistakes', { count: missedWords })}
              variant="danger"
              // Eine eigene Paar-Runde lohnt sich für ein, zwei Fehler nicht –
              // die gemischte Fehler-Sitzung kommt mit jeder Anzahl zurecht.
              onPress={() =>
                navigation.replace('Review', { mode: 'MIX', deckIds, mistakesOnly: true, title: t('trainerMistakesTitle') })
              }
            />
          ) : null}
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

      <PairsBoard
        key={`${game.id}-${roundIndex}`}
        items={rounds[roundIndex].map((card) => ({ ...card.item, id: card.cardId }))}
        languageCode={profile?.language.code}
        autoSpeak={autoSpeak}
        onFirstTap={() => {
          if (startedAt !== null) return;
          setStartedAt(Date.now());
          setNow(Date.now());
          roundStartedAt.current = Date.now();
        }}
        onMatch={handleMatch}
        onMiss={() => setMistakes((value) => value + 1)}
        onComplete={nextRound}
      />
    </Screen>
  );
}

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
