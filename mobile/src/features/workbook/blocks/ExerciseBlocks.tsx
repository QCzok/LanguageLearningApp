import React, { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import type {
  BlockAnswer,
  BlockResult,
  ChoiceBlock,
  ClozeBlock,
  MatchingBlock,
  OrderingBlock,
  WritingBlock,
} from '@lingua/shared';
import { book, bookFont, bookLabel, bookSans } from '../../../theme';
import { CheckMark, CrossMark } from '../BookIcons';
import { ExerciseNumber } from '../BookPage';
import { bodyText } from './ContentBlocks';

/**
 * Aufgabenblöcke im Arbeitsbuch-Stil.
 *
 * Gedruckte Optik: nummerierte Aufgaben, Lücken als Schreiblinien statt
 * Eingabefelder mit Rahmen, Ankreuzkästchen statt App-Buttons. Korrekturen
 * erscheinen in Grün- und Rotstift-Tönen am Rand, nicht als farbige Banner.
 * Bewertet wird serverseitig; hier wird nur eingegeben und angezeigt.
 */
interface BlockProps<B> {
  block: B;
  number: number;
  accent: string;
  answer?: BlockAnswer;
  result?: BlockResult;
  onChange: (answer: BlockAnswer) => void;
  onCheck: () => void;
  isChecking: boolean;
  /** Im Zeichenmodus liegt der Stift über der Seite – Eingaben sind gesperrt. */
  locked: boolean;
}

function Frame({
  number,
  instruction,
  accent,
  result,
  onCheck,
  isChecking,
  canCheck,
  locked,
  children,
}: {
  number: number;
  instruction: string;
  accent: string;
  result?: BlockResult;
  onCheck: () => void;
  isChecking: boolean;
  canCheck: boolean;
  locked: boolean;
  children: React.ReactNode;
}) {
  const status = result ? (result.correct ? 'correct' : 'partial') : undefined;

  return (
    <View style={{ gap: 16 }}>
      <ExerciseNumber number={number} instruction={instruction} accent={accent} status={status} />

      <View style={{ paddingLeft: 48, gap: 16 }}>
        {children}

        {result ? (
          <View style={[resultBar, { borderLeftColor: result.correct ? book.correct : book.attention }]}>
            <Text style={[resultText, { color: result.correct ? book.correct : book.attention }]}>
              {result.correct ? 'Richtig gelöst' : `${result.scorePercent} % richtig`}
            </Text>
            {result.explanation ? <Text style={hintText}>{result.explanation}</Text> : null}
          </View>
        ) : (
          <Pressable
            accessibilityRole="button"
            onPress={onCheck}
            disabled={!canCheck || isChecking || locked}
            style={[checkButton, { borderColor: accent }, (!canCheck || locked) && { opacity: 0.4 }]}
          >
            <Text style={[checkLabel, { color: accent }]}>
              {isChecking ? 'Prüfe …' : 'Kontrollieren'}
            </Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}

// -------------------------------------------------------------- Lückentext

export function Cloze(props: BlockProps<ClozeBlock>) {
  const { block, answer, result, onChange, locked } = props;
  const gaps = answer?.type === 'CLOZE' ? answer.gaps : {};
  const solution = result?.solution as Record<string, string> | undefined;

  const gapSegments = block.segments.filter((s) => s.kind === 'GAP');
  const filled = gapSegments.every((s) => {
    const gap = s as Extract<typeof s, { kind: 'GAP' }>;
    return (gaps[gap.gapId] ?? '').trim().length > 0;
  });

  return (
    <Frame {...props} instruction={block.instruction} canCheck={filled}>
      {block.wordBank?.length ? (
        <View style={wordBank}>
          <Text style={wordBankLabel}>Wortkasten</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
            {block.wordBank.map((word) => (
              <Text key={word} style={wordBankItem}>
                {word}
              </Text>
            ))}
          </View>
        </View>
      ) : null}

      {/* Text und Lücken laufen im Fluss; Lücken sind Schreiblinien wie im Heft. */}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-end' }}>
        {block.segments.map((segment, index) => {
          if (segment.kind === 'TEXT') {
            return (
              <Text key={index} style={[bodyText, { lineHeight: 46 }]}>
                {segment.text}
              </Text>
            );
          }

          const isCorrect = result?.details?.[segment.gapId];
          return (
            <View key={index} style={{ marginHorizontal: 4 }}>
              <TextInput
                value={gaps[segment.gapId] ?? ''}
                onChangeText={(value) =>
                  onChange({ type: 'CLOZE', gaps: { ...gaps, [segment.gapId]: value } })
                }
                editable={!result && !locked}
                placeholder={segment.hint ?? ''}
                placeholderTextColor={book.inkFaint}
                autoCapitalize="none"
                autoCorrect={false}
                style={[
                  gapLine,
                  { minWidth: Math.max(90, (segment.width ?? 8) * 13) },
                  result
                    ? {
                        borderBottomColor: isCorrect ? book.correct : book.wrong,
                        color: isCorrect ? book.correct : book.wrong,
                      }
                    : null,
                ]}
              />
              {result && !isCorrect && solution?.[segment.gapId] ? (
                <Text style={correctionText}>{solution[segment.gapId]}</Text>
              ) : null}
            </View>
          );
        })}
      </View>
    </Frame>
  );
}

// ----------------------------------------------------------------- Auswahl

export function Choice(props: BlockProps<ChoiceBlock>) {
  const { block, answer, result, onChange, locked } = props;
  const selected = answer?.type === 'CHOICE' ? answer.selected : [];
  const solution = (result?.solution as string[] | undefined) ?? [];

  function toggle(optionId: string) {
    if (block.multiple) {
      const next = selected.includes(optionId)
        ? selected.filter((id) => id !== optionId)
        : [...selected, optionId];
      onChange({ type: 'CHOICE', selected: next });
    } else {
      onChange({ type: 'CHOICE', selected: [optionId] });
    }
  }

  return (
    <Frame {...props} instruction={block.instruction} canCheck={selected.length > 0}>
      {block.question ? <Text style={bodyText}>{block.question}</Text> : null}
      {block.multiple ? <Text style={hintText}>Mehrere Antworten sind richtig.</Text> : null}

      <View style={{ gap: 12 }}>
        {block.options.map((option) => {
          const isSelected = selected.includes(option.id);
          const isSolution = solution.includes(option.id);
          const wrong = Boolean(result) && isSelected && !isSolution;

          return (
            <Pressable
              key={option.id}
              accessibilityRole={block.multiple ? 'checkbox' : 'radio'}
              accessibilityState={{ checked: isSelected }}
              disabled={Boolean(result) || locked}
              onPress={() => toggle(option.id)}
              style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}
            >
              {/*
                Angekreuzt wird ins Kästchen hinein – der Haken steht im Feld,
                das Feld färbt sich nicht ein. So sieht ein ausgefülltes
                Arbeitsbuch aus.
              */}
              <View
                style={[
                  block.multiple ? checkbox : radioBox,
                  isSelected && { borderColor: book.ink },
                  result && isSolution && { borderColor: book.correct },
                  wrong && { borderColor: book.wrong },
                ]}
              >
                {wrong ? (
                  <CrossMark color={book.wrong} size={17} />
                ) : isSelected || (result && isSolution) ? (
                  <CheckMark color={result && isSolution ? book.correct : book.ink} size={17} />
                ) : null}
              </View>
              <Text style={[bodyText, { flex: 1 }, wrong && { color: book.wrong }]}>
                {option.text}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </Frame>
  );
}

// ---------------------------------------------------------------- Zuordnung

export function Matching(props: BlockProps<MatchingBlock>) {
  const { block, answer, result, onChange, locked } = props;
  const pairs = answer?.type === 'MATCHING' ? answer.pairs : [];
  const byLeft = new Map(pairs.map((p) => [p.leftId, p.rightId]));
  const [activeLeft, setActiveLeft] = useState<string | null>(null);

  function assign(rightId: string) {
    if (!activeLeft) return;
    const next = pairs.filter((p) => p.leftId !== activeLeft && p.rightId !== rightId);
    next.push({ leftId: activeLeft, rightId });
    onChange({ type: 'MATCHING', pairs: next });
    setActiveLeft(null);
  }

  const usedRight = new Set(pairs.map((p) => p.rightId));

  return (
    <Frame {...props} instruction={block.instruction} canCheck={pairs.length === block.left.length}>
      <Text style={hintText}>
        {activeLeft ? 'Jetzt rechts die passende Antwort antippen.' : 'Links antippen, dann rechts zuordnen.'}
      </Text>

      <View style={{ flexDirection: 'row', gap: 16 }}>
        <View style={{ flex: 1, gap: 12 }}>
          {block.left.map((item) => {
            const target = block.right.find((r) => r.id === byLeft.get(item.id));
            const isCorrect = result?.details?.[item.id];

            return (
              <Pressable
                key={item.id}
                disabled={Boolean(result) || locked}
                onPress={() => setActiveLeft(activeLeft === item.id ? null : item.id)}
                style={[
                  matchCard,
                  activeLeft === item.id && { borderColor: book.ink, borderWidth: 1.5 },
                  result
                    ? { borderColor: isCorrect ? book.correct : book.wrong }
                    : null,
                ]}
              >
                <Text style={[bodyText, { fontSize: 19, lineHeight: 27 }]}>{item.text}</Text>
                <Text style={[hintText, result && { color: isCorrect ? book.correct : book.wrong }]}>
                  {target ? `→ ${target.text}` : '→ __________'}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <View style={{ flex: 1, gap: 12 }}>
          {block.right.map((item) => (
            <Pressable
              key={item.id}
              disabled={Boolean(result) || !activeLeft || locked}
              onPress={() => assign(item.id)}
              style={[
                matchCard,
                usedRight.has(item.id) && { opacity: 0.4 },
                activeLeft && !result ? { borderColor: book.ink, borderStyle: 'dashed' } : null,
              ]}
            >
              <Text style={[bodyText, { fontSize: 19, lineHeight: 27 }]}>{item.text}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    </Frame>
  );
}

// -------------------------------------------------------------- Reihenfolge

export function Ordering(props: BlockProps<OrderingBlock>) {
  const { block, answer, result, onChange, locked } = props;
  const order = answer?.type === 'ORDERING' ? answer.order : [];
  const remaining = block.items.filter((item) => !order.includes(item.id));
  const solution = (result?.solution as string[] | undefined) ?? [];
  const label = (id: string) => block.items.find((item) => item.id === id)?.text ?? '';

  return (
    <Frame {...props} instruction={block.instruction} canCheck={remaining.length === 0}>
      {/* Der gebaute Satz steht auf einer Schreiblinie. */}
      <View style={sentenceLine}>
        {order.length === 0 ? (
          <Text style={hintText}>Wörter unten antippen, um den Satz zu bilden.</Text>
        ) : (
          order.map((id, index) => {
            const correctHere = result ? solution[index] === id : undefined;
            return (
              <Pressable
                key={`${id}-${index}`}
                disabled={Boolean(result) || locked}
                onPress={() => onChange({ type: 'ORDERING', order: order.filter((_, i) => i !== index) })}
                style={[
                  tokenChip,
                  tokenPlaced,
                  result ? { borderColor: correctHere ? book.correct : book.wrong } : null,
                ]}
              >
                <Text
                  style={[
                    tokenText,
                    result ? { color: correctHere ? book.correct : book.wrong } : null,
                  ]}
                >
                  {label(id)}
                </Text>
              </Pressable>
            );
          })
        )}
      </View>

      {remaining.length > 0 && !result ? (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
          {remaining.map((item) => (
            <Pressable
              key={item.id}
              disabled={locked}
              onPress={() => onChange({ type: 'ORDERING', order: [...order, item.id] })}
              style={[tokenChip, tokenIdle]}
            >
              <Text style={tokenText}>{item.text}</Text>
            </Pressable>
          ))}
        </View>
      ) : null}

      {result && !result.correct ? (
        <Text style={hintText}>Richtig: {solution.map(label).join(' ')}</Text>
      ) : null}
    </Frame>
  );
}

// ------------------------------------------------------------ Schreibaufgabe

export function Writing(props: BlockProps<WritingBlock>) {
  const { block, answer, result, onChange, locked } = props;
  const text = answer?.type === 'WRITING' ? answer.text : '';
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const sample = result?.solution as string | undefined;

  return (
    <Frame {...props} instruction={block.instruction} canCheck={words >= (block.minWords ?? 1)}>
      {block.prompt ? <Text style={bodyText}>{block.prompt}</Text> : null}

      {/* Liniertes Schreibfeld statt Eingabekasten. */}
      <View style={writingSheet}>
        {[0, 1, 2, 3, 4].map((line) => (
          <View key={line} style={writingRule} />
        ))}
        <TextInput
          multiline
          value={text}
          onChangeText={(value) => onChange({ type: 'WRITING', text: value })}
          editable={!result && !locked}
          placeholder="Hier schreiben …"
          placeholderTextColor={book.inkFaint}
          style={writingInput}
        />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={hintText}>
          {words} {words === 1 ? 'Wort' : 'Wörter'}
          {block.minWords ? ` · mindestens ${block.minWords}` : ''}
        </Text>
        <View style={{ flex: 1 }} />
        {block.aiFeedback ? (
          <Text style={[bookLabel, { fontSize: 11, color: book.inkFaint }]}>mit KI-Korrektur</Text>
        ) : null}
      </View>

      {sample ? (
        <View style={[resultBar, { borderLeftColor: book.correct }]}>
          <Text style={[resultText, { color: book.correct }]}>Musterlösung</Text>
          <Text style={[bodyText, { fontSize: 19, lineHeight: 30 }]}>{sample}</Text>
        </View>
      ) : null}
    </Frame>
  );
}

// ------------------------------------------------------------------ Styles

const gapLine = {
  borderBottomWidth: 1.5,
  borderBottomColor: book.ink,
  paddingHorizontal: 8,
  paddingBottom: 3,
  fontFamily: bookFont,
  fontSize: 21,
  color: book.ink,
  textAlign: 'center' as const,
};

const correctionText = {
  fontFamily: bookFont,
  fontSize: 16,
  color: book.correct,
  textAlign: 'center' as const,
  marginTop: 3,
  fontStyle: 'italic' as const,
};

const wordBank = {
  backgroundColor: book.tint,
  borderWidth: 1,
  borderColor: book.rule,
  padding: 16,
  gap: 11,
};

const wordBankLabel = {
  ...bookLabel,
  fontSize: 12,
  color: book.inkSoft,
};

const wordBankItem = {
  fontFamily: bookFont,
  fontSize: 19,
  color: book.ink,
  backgroundColor: book.paper,
  borderWidth: 1,
  borderColor: book.rule,
  paddingHorizontal: 12,
  paddingVertical: 5,
};

const checkboxBase = {
  width: 28,
  height: 28,
  borderWidth: 1.5,
  borderColor: book.inkSoft,
  backgroundColor: '#FFFFFF',
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};
const checkbox = { ...checkboxBase, borderRadius: 2 };
const radioBox = { ...checkboxBase, borderRadius: 14 };

const matchCard = {
  minHeight: 62,
  justifyContent: 'center' as const,
  paddingHorizontal: 16,
  paddingVertical: 12,
  borderWidth: 1,
  borderColor: book.rule,
  backgroundColor: '#FFFFFF',
  gap: 3,
};

const sentenceLine = {
  flexDirection: 'row' as const,
  flexWrap: 'wrap' as const,
  gap: 10,
  minHeight: 62,
  alignItems: 'center' as const,
  paddingHorizontal: 12,
  paddingVertical: 10,
  borderBottomWidth: 1.5,
  borderBottomColor: book.ink,
};

const tokenChip = {
  paddingHorizontal: 15,
  paddingVertical: 8,
  borderWidth: 1,
};

/** Gesetzte Wörter sitzen auf der Linie, ausgeschnitten wie Wortkarten. */
const tokenPlaced = {
  backgroundColor: book.tintDeep,
  borderColor: book.inkSoft,
};

const tokenIdle = {
  backgroundColor: '#FFFFFF',
  borderColor: book.rule,
};

const tokenText = {
  fontFamily: bookFont,
  fontSize: 19,
  color: book.ink,
};

const writingSheet = {
  backgroundColor: '#FFFFFF',
  borderWidth: 1,
  borderColor: book.rule,
  minHeight: 190,
  paddingVertical: 8,
};

const writingRule = {
  height: 36,
  borderBottomWidth: 1,
  borderBottomColor: book.ruleFaint,
  marginHorizontal: 16,
};

const writingInput = {
  position: 'absolute' as const,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  paddingHorizontal: 18,
  paddingTop: 10,
  fontFamily: bookFont,
  fontSize: 20,
  lineHeight: 36,
  color: book.ink,
  textAlignVertical: 'top' as const,
};

const checkButton = {
  alignSelf: 'flex-start' as const,
  borderWidth: 1.5,
  paddingHorizontal: 20,
  paddingVertical: 9,
};

const checkLabel = {
  fontFamily: bookSans,
  fontSize: 16,
  fontWeight: '700' as const,
  letterSpacing: 0.6,
};

const resultBar = {
  borderLeftWidth: 3,
  paddingVertical: 12,
  paddingHorizontal: 16,
  gap: 6,
};

const resultText = {
  fontFamily: bookSans,
  fontSize: 16,
  fontWeight: '700' as const,
  letterSpacing: 0.4,
};

const hintText = {
  fontFamily: bookFont,
  fontSize: 17,
  lineHeight: 26,
  color: book.inkSoft,
  fontStyle: 'italic' as const,
};
