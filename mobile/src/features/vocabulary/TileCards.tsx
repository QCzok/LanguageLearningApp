import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import type { ReviewCardDto } from '@lingua/shared';
import { Row } from '../../components';
import { useTranslation } from '../../i18n';
import { colors, flashcard, radius, spacing, typography } from '../../theme';
import { FeedbackBar } from './FeedbackBar';
import { Flashcard } from './Flashcard';
import { speakTerm } from './speech';
import { buildSentencePuzzle, buildWordPuzzle, isWordSolved } from './tilePuzzles';
import type { Tile } from './tilePuzzles';

/** Lässt sich aus der Karte eine Legeübung bauen? Sonst wird sie in `ReviewScreen` zur Auswahl. */
export function canBuildTilePuzzle(card: ReviewCardDto): boolean {
  if (card.mode === 'SENTENCE_ORDER') {
    return !!card.item.exampleSentence && buildSentencePuzzle(card.item.exampleSentence, card.item.term) !== null;
  }
  if (card.mode === 'WORD_BUILD') return buildWordPuzzle(card.item.term) !== null;
  return true;
}

interface TileCardProps {
  card: ReviewCardDto;
  remaining: number;
  languageCode?: string;
  /** Überschriften der Rückmeldung – Lob bzw. Hinweis kommen aus der Sitzung. */
  correctTitle: string;
  wrongTitle: string;
  /** Alle Plättchen liegen, die Wertung steht fest – geht sofort ans Backend. */
  onAnswer: (correct: boolean) => void;
  onContinue: (correct: boolean) => void;
}

/**
 * Satz ordnen: Der Beispielsatz steht da, ungefähr drei Wörter fehlen. Ein
 * Tipp auf ein Plättchen legt es in die erste freie Lücke, ein Tipp auf eine
 * gefüllte Lücke nimmt es wieder heraus. Sobald alle Lücken gefüllt sind,
 * wird geprüft.
 */
export function SentenceOrderCard({
  card,
  remaining,
  languageCode,
  correctTitle,
  wrongTitle,
  onAnswer,
  onContinue,
}: TileCardProps) {
  const { t } = useTranslation();
  const sentence = card.item.exampleSentence ?? '';
  const [puzzle] = useState(() => buildSentencePuzzle(sentence, card.item.term));
  const [filled, setFilled] = useState<Array<Tile | null>>(() => (puzzle?.answers ?? []).map(() => null));
  const [correct, setCorrect] = useState<boolean | null>(null);
  if (!puzzle) return null;

  const done = correct !== null;
  const usedIds = new Set(filled.filter((tile): tile is Tile => tile !== null).map((tile) => tile.id));

  function place(tile: Tile) {
    const free = filled.indexOf(null);
    if (done || free < 0 || !puzzle) return;
    const next = [...filled];
    next[free] = tile;
    setFilled(next);
    if (next.every((entry) => entry !== null)) {
      const right = next.every((entry, index) => entry?.text === puzzle.answers[index]);
      setCorrect(right);
      onAnswer(right);
    }
  }

  function takeBack(index: number) {
    if (done) return;
    setFilled(filled.map((tile, position) => (position === index ? null : tile)));
  }

  const hint = card.item.exampleTranslation || card.item.translation;

  return (
    <View style={{ flex: 1, gap: spacing.md }}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ gap: spacing.lg, paddingBottom: spacing.md }}>
        <Flashcard stackSize={remaining}>
          <View style={{ minHeight: 170, justifyContent: 'center', gap: spacing.md }}>
            <Text style={cardEyebrow}>{t('reviewFillTheGaps')}</Text>
            <View style={sentenceRow}>
              {puzzle.parts.map((part, partIndex) => {
                if (part.kind === 'text') {
                  return part.text
                    .split(' ')
                    .filter(Boolean)
                    .map((word, wordIndex) => (
                      <Text key={`${partIndex}-${wordIndex}`} style={sentenceText}>
                        {word}
                      </Text>
                    ));
                }
                const tile = filled[part.index];
                const state = !done ? 'idle' : tile?.text === part.answer ? 'correct' : 'wrong';
                return (
                  <Pressable
                    key={`gap-${part.index}`}
                    accessibilityRole="button"
                    accessibilityLabel={tile ? tile.text : t('reviewEmptyGapA11y')}
                    disabled={!tile || done}
                    onPress={() => takeBack(part.index)}
                    style={[gapSlot, tile ? gapFilled : null, gapStates[state]]}
                  >
                    <Text style={[sentenceText, { fontWeight: '700' }, state === 'wrong' && { color: colors.danger }]}>
                      {tile?.text ?? ' '}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
            {hint ? <Text style={cardMeta}>{hint}</Text> : null}
            {done ? (
              <Row gap={spacing.xs} style={{ justifyContent: 'center' }}>
                <SpeakButton text={sentence} languageCode={languageCode} />
              </Row>
            ) : null}
          </View>
        </Flashcard>

        <TileBank tiles={puzzle.tiles} usedIds={usedIds} disabled={done} onPress={place} />
      </ScrollView>

      {done ? (
        <FeedbackBar
          kind={correct ? 'correct' : 'wrong'}
          title={correct ? correctTitle : wrongTitle}
          detail={correct ? undefined : t('reviewCorrectAnswerWas', { answer: sentence })}
          onContinue={() => onContinue(correct)}
        />
      ) : null}
    </View>
  );
}

/**
 * Wort bauen: Die Übersetzung steht da, darunter liegen die Silben und
 * Buchstaben des Begriffs durcheinander. Ein Tipp hängt ein Plättchen an,
 * ein Tipp auf ein gelegtes nimmt es zurück. Liegen alle, wird geprüft.
 */
export function WordBuildCard({
  card,
  remaining,
  languageCode,
  correctTitle,
  wrongTitle,
  onAnswer,
  onContinue,
}: TileCardProps) {
  const { t } = useTranslation();
  const [puzzle] = useState(() => buildWordPuzzle(card.item.term));
  const [placed, setPlaced] = useState<Tile[]>([]);
  const [correct, setCorrect] = useState<boolean | null>(null);
  if (!puzzle) return null;

  const done = correct !== null;
  const usedIds = new Set(placed.map((tile) => tile.id));

  function place(tile: Tile) {
    if (done || !puzzle) return;
    const next = [...placed, tile];
    setPlaced(next);
    if (next.length === puzzle.tiles.length) {
      const right = isWordSolved(next, puzzle.solution);
      setCorrect(right);
      onAnswer(right);
    }
  }

  function takeBack(id: number) {
    if (done) return;
    setPlaced(placed.filter((tile) => tile.id !== id));
  }

  return (
    <View style={{ flex: 1, gap: spacing.md }}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ gap: spacing.lg, paddingBottom: spacing.md }}>
        <Flashcard stackSize={remaining}>
          <View style={{ minHeight: 170, justifyContent: 'center', alignItems: 'center', gap: spacing.sm }}>
            <Text style={cardEyebrow}>{t('reviewBuildTheWord')}</Text>
            <Text style={termText}>{card.item.translation}</Text>
            {card.item.partOfSpeech ? (
              <View style={posChip}>
                <Text style={posChipText}>{card.item.partOfSpeech}</Text>
              </View>
            ) : null}

            {/* Die Antwortzeile: gelegte Plättchen, Wortgrenzen als Abstand. */}
            <View style={[answerLine, done && (correct ? answerLineCorrect : answerLineWrong)]}>
              {placed.length === 0 ? <Text style={[cardMeta, { opacity: 0.6 }]}>{t('reviewTapTiles')}</Text> : null}
              {placed.map((tile) => (
                <Pressable
                  key={tile.id}
                  accessibilityRole="button"
                  accessibilityLabel={tile.text}
                  disabled={done}
                  onPress={() => takeBack(tile.id)}
                  style={[placedTile, tile.wordEnd && { marginRight: spacing.sm }]}
                >
                  <Text style={tileText}>{tile.text}</Text>
                </Pressable>
              ))}
            </View>

            {done ? (
              <Row gap={spacing.xs} style={{ justifyContent: 'center' }}>
                <Text style={solutionText}>{puzzle.solution}</Text>
                <SpeakButton text={card.item.term} languageCode={languageCode} />
              </Row>
            ) : null}
          </View>
        </Flashcard>

        <TileBank tiles={puzzle.tiles} usedIds={usedIds} disabled={done} onPress={place} />
      </ScrollView>

      {done ? (
        <FeedbackBar
          kind={correct ? 'correct' : 'wrong'}
          title={correct ? correctTitle : wrongTitle}
          detail={correct ? undefined : t('reviewCorrectAnswerWas', { answer: puzzle.solution })}
          onContinue={() => onContinue(correct)}
        />
      ) : null}
    </View>
  );
}

// ------------------------------------------------------------- Bausteine

/** Die noch nicht gelegten Plättchen. Gelegte bleiben als leerer Platz stehen, damit nichts springt. */
function TileBank({
  tiles,
  usedIds,
  disabled,
  onPress,
}: {
  tiles: Tile[];
  usedIds: Set<number>;
  disabled: boolean;
  onPress: (tile: Tile) => void;
}) {
  return (
    <View style={bankRow}>
      {tiles.map((tile) => {
        const used = usedIds.has(tile.id);
        return (
          <Pressable
            key={tile.id}
            accessibilityRole="button"
            accessibilityLabel={tile.text}
            disabled={used || disabled}
            onPress={() => onPress(tile)}
            style={({ pressed }) => [
              bankTile,
              used && bankTileUsed,
              disabled && !used && { opacity: 0.5 },
              pressed && { transform: [{ scale: 0.96 }] },
            ]}
          >
            <Text style={[tileText, used && { opacity: 0 }]}>{tile.text}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

function SpeakButton({ text, languageCode }: { text: string; languageCode?: string }) {
  const { t } = useTranslation();
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={t('reviewListenA11y')}
      hitSlop={8}
      onPress={() => void speakTerm(text, languageCode)}
      style={({ pressed }) => [speakButton, pressed && { opacity: 0.6 }]}
    >
      <Text style={{ fontSize: 18 }}>🔊</Text>
    </Pressable>
  );
}

// ------------------------------------------------------------------ Styles

const cardEyebrow = {
  ...typography.label,
  letterSpacing: 1.4,
  textTransform: 'uppercase' as const,
  color: flashcard.inkSoft,
  textAlign: 'center' as const,
};

const termText = {
  fontSize: 30,
  lineHeight: 38,
  fontWeight: '700' as const,
  color: flashcard.ink,
  textAlign: 'center' as const,
};

const cardMeta = {
  fontSize: 15,
  lineHeight: 21,
  color: flashcard.inkSoft,
  textAlign: 'center' as const,
};

const posChip = {
  alignSelf: 'center' as const,
  borderWidth: 1,
  borderColor: flashcard.edge,
  borderRadius: radius.full,
  paddingHorizontal: spacing.sm,
  paddingVertical: 2,
};

const posChipText = {
  fontSize: 11,
  letterSpacing: 0.6,
  color: flashcard.inkSoft,
};

const sentenceRow = {
  flexDirection: 'row' as const,
  flexWrap: 'wrap' as const,
  justifyContent: 'center' as const,
  alignItems: 'flex-end' as const,
  columnGap: 6,
  rowGap: spacing.sm,
};

const sentenceText = {
  fontSize: 20,
  lineHeight: 30,
  color: flashcard.ink,
};

const gapSlot = {
  minWidth: 64,
  minHeight: 34,
  paddingHorizontal: spacing.sm,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  borderBottomWidth: 2,
  borderColor: flashcard.inkSoft,
};

const gapFilled = {
  borderRadius: radius.sm,
  borderWidth: 1,
  borderBottomWidth: 3,
  borderColor: colors.border,
  backgroundColor: colors.surface,
};

const gapStates = {
  idle: {},
  correct: { borderColor: colors.success, backgroundColor: colors.successSoft },
  wrong: { borderColor: colors.danger, backgroundColor: colors.dangerSoft },
};

const answerLine = {
  alignSelf: 'stretch' as const,
  minHeight: 56,
  marginTop: spacing.md,
  paddingVertical: spacing.sm,
  paddingHorizontal: spacing.xs,
  flexDirection: 'row' as const,
  flexWrap: 'wrap' as const,
  justifyContent: 'center' as const,
  alignItems: 'center' as const,
  gap: 4,
  borderBottomWidth: 2,
  borderColor: flashcard.edge,
};

const answerLineCorrect = { borderColor: colors.success };
const answerLineWrong = { borderColor: colors.danger };

const placedTile = {
  paddingHorizontal: spacing.sm,
  paddingVertical: 6,
  borderRadius: radius.sm,
  borderWidth: 1,
  borderBottomWidth: 3,
  borderColor: colors.border,
  backgroundColor: colors.surface,
};

const solutionText = {
  fontSize: 22,
  lineHeight: 30,
  fontWeight: '700' as const,
  color: colors.primaryDark,
};

const bankRow = {
  flexDirection: 'row' as const,
  flexWrap: 'wrap' as const,
  justifyContent: 'center' as const,
  gap: spacing.sm,
};

const bankTile = {
  minWidth: 48,
  minHeight: 48,
  paddingHorizontal: spacing.md,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  borderRadius: radius.md,
  borderWidth: 1,
  borderBottomWidth: 3,
  borderColor: colors.border,
  backgroundColor: colors.surface,
};

const bankTileUsed = {
  borderStyle: 'dashed' as const,
  borderBottomWidth: 1,
  backgroundColor: colors.surfaceAlt,
};

const tileText = {
  ...typography.heading,
  color: colors.text,
};

const speakButton = {
  width: 34,
  height: 34,
  borderRadius: 17,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};
