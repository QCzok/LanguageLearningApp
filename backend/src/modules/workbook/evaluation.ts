import {
  isExerciseBlock,
  normalizeAnswer,
  type BlockAnswer,
  type BlockResult,
  type ChoiceBlock,
  type ClozeBlock,
  type ExerciseBlock,
  type MatchingBlock,
  type OrderingBlock,
  type UnitContent,
  type WorkbookBlock,
  type WritingBlock,
} from '@lingua/shared';

/**
 * Auswertung der Aufgabenblöcke.
 *
 * Läuft ausschließlich serverseitig: Die Lösungen werden aus dem Inhalt entfernt,
 * bevor eine Einheit an die App geht, und erst als Antwort auf eine Prüfung
 * zurückgegeben. Reine Funktionen ohne Datenbankzugriff – dadurch direkt testbar.
 */

/** Teilpunkte: Ab dieser Quote gilt ein Block insgesamt als richtig. */
const BLOCK_PASS_RATIO = 1;

export function evaluateBlock(block: ExerciseBlock, answer: BlockAnswer | undefined): BlockResult {
  switch (block.type) {
    case 'CLOZE':
      return evaluateCloze(block, answer);
    case 'CHOICE':
      return evaluateChoice(block, answer);
    case 'MATCHING':
      return evaluateMatching(block, answer);
    case 'ORDERING':
      return evaluateOrdering(block, answer);
    case 'WRITING':
      return evaluateWriting(block, answer);
  }
}

function evaluateCloze(block: ClozeBlock, answer: BlockAnswer | undefined): BlockResult {
  const gaps = block.segments.filter(
    (segment): segment is Extract<typeof segment, { kind: 'GAP' }> => segment.kind === 'GAP',
  );
  const given = answer?.type === 'CLOZE' ? answer.gaps : {};

  const details: Record<string, boolean> = {};
  let correctCount = 0;

  for (const gap of gaps) {
    const accepted = gap.solution ?? [];
    const value = given[gap.gapId] ?? '';
    const isCorrect = accepted.some(
      (candidate) =>
        normalizeAnswer(value, block.caseSensitive) ===
        normalizeAnswer(candidate, block.caseSensitive),
    );
    details[gap.gapId] = isCorrect;
    if (isCorrect) correctCount += 1;
  }

  return withScore(block.id, correctCount, gaps.length, {
    details,
    solution: Object.fromEntries(gaps.map((gap) => [gap.gapId, gap.solution?.[0] ?? ''])),
  });
}

function evaluateChoice(block: ChoiceBlock, answer: BlockAnswer | undefined): BlockResult {
  const expected = new Set(block.solution ?? []);
  const selected = new Set(answer?.type === 'CHOICE' ? answer.selected : []);

  // Mengenvergleich: Eine zusätzlich angekreuzte Option ist ein Fehler,
  // sonst wäre "alles ankreuzen" bei Mehrfachauswahl immer richtig.
  const details: Record<string, boolean> = {};
  for (const option of block.options) {
    details[option.id] = expected.has(option.id) === selected.has(option.id);
  }

  const correct =
    expected.size === selected.size && [...expected].every((id) => selected.has(id));

  return {
    blockId: block.id,
    correct,
    scorePercent: correct ? 100 : 0,
    details,
    solution: block.solution ?? [],
    explanation: block.explanation,
    explanationTranslations: block.explanationTranslations,
  };
}

function evaluateMatching(block: MatchingBlock, answer: BlockAnswer | undefined): BlockResult {
  const expected = new Map((block.solution ?? []).map((pair) => [pair.leftId, pair.rightId]));
  const given = new Map(
    (answer?.type === 'MATCHING' ? answer.pairs : []).map((pair) => [pair.leftId, pair.rightId]),
  );

  const details: Record<string, boolean> = {};
  let correctCount = 0;

  for (const item of block.left) {
    const isCorrect = expected.get(item.id) === given.get(item.id);
    details[item.id] = isCorrect;
    if (isCorrect) correctCount += 1;
  }

  return withScore(block.id, correctCount, block.left.length, {
    details,
    solution: block.solution ?? [],
  });
}

function evaluateOrdering(block: OrderingBlock, answer: BlockAnswer | undefined): BlockResult {
  const expected = block.solution ?? [];
  const given = answer?.type === 'ORDERING' ? answer.order : [];

  const details: Record<string, boolean> = {};
  let correctCount = 0;

  expected.forEach((itemId, index) => {
    const isCorrect = given[index] === itemId;
    details[itemId] = isCorrect;
    if (isCorrect) correctCount += 1;
  });

  return withScore(block.id, correctCount, expected.length, {
    details,
    solution: expected,
  });
}

/**
 * Freie Schreibaufgaben lassen sich nicht mechanisch bewerten. Geprüft wird nur,
 * ob überhaupt und im geforderten Umfang geschrieben wurde; die inhaltliche
 * Rückmeldung liefert die KI-Korrektur (Premium).
 */
function evaluateWriting(block: WritingBlock, answer: BlockAnswer | undefined): BlockResult {
  const text = answer?.type === 'WRITING' ? answer.text.trim() : '';
  const words = text ? text.split(/\s+/).length : 0;
  const enough = words >= (block.minWords ?? 1);

  return {
    blockId: block.id,
    correct: enough,
    scorePercent: enough ? 100 : 0,
    solution: block.sampleAnswer,
    explanation: enough
      ? undefined
      : `Schreibe mindestens ${block.minWords ?? 1} Wörter (aktuell: ${words}).`,
  };
}

function withScore(
  blockId: string,
  correctCount: number,
  total: number,
  extra: Pick<BlockResult, 'details' | 'solution' | 'explanation'>,
): BlockResult {
  const ratio = total > 0 ? correctCount / total : 0;
  return {
    blockId,
    correct: ratio >= BLOCK_PASS_RATIO,
    scorePercent: Math.round(ratio * 100),
    ...extra,
  };
}

/**
 * Entfernt alle Lösungsangaben aus einem Einheitsinhalt.
 *
 * Wird auf jedem Weg nach außen angewendet. Neue Blocktypen mit Lösungsfeldern
 * müssen hier ergänzt werden – deshalb ist das `switch` bewusst vollständig
 * über die Aufgabentypen und nicht über einen generischen Feldfilter gelöst.
 */
export function stripSolutions(content: UnitContent): UnitContent {
  return {
    ...content,
    blocks: content.blocks.map((block) => stripBlock(block)),
  };
}

function stripBlock(block: WorkbookBlock): WorkbookBlock {
  if (!isExerciseBlock(block)) return block;

  switch (block.type) {
    case 'CLOZE':
      return {
        ...block,
        segments: block.segments.map((segment) =>
          segment.kind === 'GAP'
            ? { kind: 'GAP', gapId: segment.gapId, hint: segment.hint, width: segment.width }
            : segment,
        ),
      };
    case 'CHOICE': {
      const {
        solution: _solution,
        explanation: _explanation,
        explanationTranslations: _explanationTranslations,
        ...rest
      } = block;
      return rest;
    }
    case 'MATCHING': {
      const { solution: _solution, ...rest } = block;
      return rest;
    }
    case 'ORDERING': {
      // Ohne Lösung wäre die Ausgangsreihenfolge sonst die richtige Reihenfolge.
      const { solution: _solution, ...rest } = block;
      return { ...rest, items: shuffleDeterministic(block.items, block.id) };
    }
    case 'WRITING': {
      const { sampleAnswer: _sampleAnswer, ...rest } = block;
      return rest;
    }
  }
}

/**
 * Mischt anhand der Block-ID statt zufällig: Die Reihenfolge bleibt über
 * Requests hinweg stabil, sodass gespeicherte Antworten weiter passen.
 */
function shuffleDeterministic<T>(items: T[], seed: string): T[] {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;

  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    hash = (hash * 1103515245 + 12345) >>> 0;
    const j = hash % (i + 1);
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
