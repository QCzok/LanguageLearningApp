import React, { useRef, useState } from 'react';
import { Animated, Pressable, Text, View } from 'react-native';
import { colors, radius, spacing, typography } from '../../theme';
import { speakTerm } from './speech';

/** Paare je Runde – mehr passen auf einem Telefon nicht lesbar nebeneinander. */
export const PAIRS_PER_ROUND = 5;
/** Kleiner ist eine Runde kein Zuordnen mehr, sondern Raten. */
export const MIN_PAIRS_PER_ROUND = 3;

export interface PairItem {
  id: string;
  term: string;
  translation: string;
}

interface Tile {
  key: string;
  pairId: string;
  text: string;
  side: 'term' | 'translation';
}

type TileState = 'idle' | 'selected' | 'matched' | 'wrong';

export function shuffled<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Teilt Wörter in Runden auf – innerhalb einer Runde nie zwei Wörter mit
 * gleichem Begriff oder gleicher Übersetzung, sonst gäbe es zwei richtige
 * Partner für eine Kachel. Was in keine Runde passt, kommt als Rest zurück.
 */
export function splitIntoRounds<T extends { item: PairItem }>(
  entries: T[],
  perRound = PAIRS_PER_ROUND,
): { rounds: T[][]; rest: T[] } {
  const pool = [...entries];
  const rounds: T[][] = [];
  const rest: T[] = [];
  while (pool.length > 0) {
    const round: T[] = [];
    const terms = new Set<string>();
    const translations = new Set<string>();
    for (let i = 0; i < pool.length && round.length < perRound; ) {
      const { item } = pool[i];
      if (terms.has(item.term) || translations.has(item.translation)) {
        i++;
        continue;
      }
      terms.add(item.term);
      translations.add(item.translation);
      round.push(pool[i]);
      pool.splice(i, 1);
    }
    if (round.length < MIN_PAIRS_PER_ROUND) {
      rest.push(...round, ...pool);
      break;
    }
    rounds.push(round);
  }
  return { rounds, rest };
}

/**
 * Eine Runde „Paare finden": Begriffe links, Übersetzungen rechts.
 *
 * Das Brett kennt nur seine Runde – Uhr, Punkte und Bewertung liegen beim
 * Aufrufer. Jedes gefundene Paar meldet `onMatch`, und zwar mit der Angabe,
 * ob es ohne Fehlgriff gefunden wurde: Wer ein Wort erst falsch zugeordnet
 * hat, hat es nicht gewusst. Neu gemischt wird bei jedem Einhängen – der
 * Aufrufer setzt dafür einen neuen `key`.
 */
export function PairsBoard({
  items,
  languageCode,
  autoSpeak,
  onFirstTap,
  onMatch,
  onMiss,
  onComplete,
}: {
  items: PairItem[];
  languageCode?: string;
  autoSpeak: boolean;
  onFirstTap?: () => void;
  onMatch: (itemId: string, clean: boolean) => void;
  onMiss?: () => void;
  onComplete: () => void;
}) {
  // Einmal beim Einhängen gemischt – nicht bei jedem Render neu.
  const [tiles] = useState(() => ({
    left: shuffled(items.map((item) => ({ key: `t-${item.id}`, pairId: item.id, text: item.term, side: 'term' as const }))),
    right: shuffled(
      items.map((item) => ({ key: `r-${item.id}`, pairId: item.id, text: item.translation, side: 'translation' as const })),
    ),
  }));
  const [selected, setSelected] = useState<Tile | null>(null);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [wrong, setWrong] = useState<string[]>([]);
  const missed = useRef(new Set<string>());
  const started = useRef(false);
  const pop = useRef(new Animated.Value(1)).current;

  function tap(tile: Tile) {
    if (matched.has(tile.pairId) || wrong.length > 0) return;
    if (!started.current) {
      started.current = true;
      onFirstTap?.();
    }
    if (tile.side === 'term' && autoSpeak) void speakTerm(tile.text, languageCode);

    if (!selected || selected.side === tile.side) {
      setSelected(selected?.key === tile.key ? null : tile);
      return;
    }

    if (selected.pairId === tile.pairId) {
      const nextMatched = new Set(matched).add(tile.pairId);
      setMatched(nextMatched);
      setSelected(null);
      onMatch(tile.pairId, !missed.current.has(tile.pairId));
      pop.setValue(0.9);
      Animated.spring(pop, { toValue: 1, friction: 3, useNativeDriver: true }).start();

      // Kurz stehen lassen, damit das letzte Paar sichtbar grün wird.
      if (nextMatched.size === items.length) setTimeout(onComplete, 350);
      return;
    }

    // Nicht gewusst hat, wer ein Wort *gesucht* hat – also die zuerst
    // gewählte Kachel, nicht die, die dabei danebenlag.
    missed.current.add(selected.pairId);
    onMiss?.();
    setWrong([selected.key, tile.key]);
    setSelected(null);
    setTimeout(() => setWrong([]), 550);
  }

  return (
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
