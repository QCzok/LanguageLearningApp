import React, { useCallback, useMemo, useRef, useState } from 'react';
import { PanResponder, Pressable, Text, TextInput, View } from 'react-native';
import type {
  BlockAnswer,
  BlockResult,
  CefrLevel,
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
import { useTranslation } from '../../../i18n';
import { useAuthStore } from '../../../store/auth.store';
import { asTranslatableLanguage } from '../../../utils/translation';

/**
 * Die Aufgabenblöcke einer Seite, gesetzt wie gedruckte Übungen.
 *
 * Gedruckte Optik: nummerierte Aufgaben, Lücken als Schreiblinien statt
 * Eingabefelder mit Rahmen, Ankreuzkästchen statt App-Buttons. Korrekturen
 * erscheinen in Grün- und Rotstift-Tönen am Rand, nicht als farbige Banner.
 * Bewertet wird serverseitig; hier wird nur eingegeben und angezeigt.
 *
 * Jede Aufgabe beginnt mit einer Haarlinie über die Satzbreite. Vorher rückte
 * der Aufgabeninhalt stattdessen weit nach rechts ein, um unter der Nummer zu
 * stehen – auf einem Telefon ging dabei ein Sechstel der Zeilenbreite
 * verloren, ausgerechnet dort, wo Lückentexte und Wortkarten am meisten Platz
 * brauchen. Die Linie trennt genauso deutlich und kostet keine Breite.
 *
 * **Gelöst wird mit Wortkarten, nicht mit der Tastatur.** Lückentext,
 * Zuordnung und Reihenfolge arbeiten alle drei mit demselben Handgriff: eine
 * Karte anfassen, an ihren Platz ziehen, loslassen – oder antippen, wenn
 * Ziehen gerade nicht geht (siehe `DragTile`). Auf einem Telefon ist das
 * schneller als tippen, es verdeckt nichts mit einer Tastatur, und es ist
 * dieselbe Geste wie beim Ausschneiden und Aufkleben im gedruckten Heft.
 * Getippt wird nur noch in der Schreibaufgabe – dort ist der eigene Text die
 * Aufgabe.
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
  /** Für Lösungshinweise auf A1, siehe `Choice`. */
  level: CefrLevel;
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
  level,
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
  level: CefrLevel;
  children: React.ReactNode;
}) {
  const status = result ? (result.correct ? 'correct' : 'partial') : undefined;

  const { t, tLanguage } = useTranslation();
  const [translationOpen, setTranslationOpen] = useState(false);
  const nativeLanguage = useAuthStore((state) => state.user?.nativeLanguage);
  const language = asTranslatableLanguage(nativeLanguage);
  const languageLabel = language ? tLanguage(language) : '';
  const explanationTranslation =
    level === 'A1' && language ? result?.explanationTranslations?.[language] : undefined;

  return (
    <View style={{ gap: 13 }}>
      <View style={exerciseRule} />
      <ExerciseNumber number={number} instruction={instruction} accent={accent} status={status} />

      {children}

      {result ? (
        <View style={[resultBar, { borderLeftColor: result.correct ? book.correct : book.attention }]}>
          <Text style={[resultText, { color: result.correct ? book.correct : book.attention }]}>
            {result.correct
              ? t('exerciseSolvedCorrectly')
              : t('exercisePercentCorrect', { percent: result.scorePercent })}
          </Text>
          {result.explanation ? (
            <Text selectable style={hintText}>
              {result.explanation}
            </Text>
          ) : null}
          {explanationTranslation ? (
            <>
              {translationOpen ? (
                <Text selectable style={[hintText, { fontStyle: 'normal' }]}>
                  {explanationTranslation}
                </Text>
              ) : null}
              <Pressable onPress={() => setTranslationOpen((value) => !value)} hitSlop={8}>
                <Text style={translationToggle}>
                  {translationOpen
                    ? t('blockHideTranslation')
                    : t('blockShowInLanguage', { language: languageLabel })}
                </Text>
              </Pressable>
            </>
          ) : null}
        </View>
      ) : (
        <Pressable
          accessibilityRole="button"
          onPress={onCheck}
          disabled={!canCheck || isChecking || locked}
          style={[checkButton, { borderColor: accent }, (!canCheck || locked) && { opacity: 0.4 }]}
        >
          <Text style={[checkLabel, { color: accent }]}>
            {isChecking ? t('exerciseChecking') : t('exerciseCheck')}
          </Text>
        </Pressable>
      )}
    </View>
  );
}

// ------------------------------------------------------- Karten und Ablagen

/** Schwelle in Bildschirmpixeln: darunter zählt eine Geste als Antippen, nicht als Ziehen. */
const DRAG_TAP_THRESHOLD = 6;

/** So weit neben eine Ablagefläche darf losgelassen werden, siehe `findAt`. */
const SNAP_DISTANCE = 24;

type ZoneRect = { id: string; x: number; y: number; width: number; height: number };

/**
 * Die Ablageflächen einer Aufgabe: die Lücken eines Lückentexts, die Zeilen
 * einer Zuordnung, die Schreiblinie einer Reihenfolge.
 *
 * Jede Fläche meldet sich über `register(id)` als Ref an. Gemessen wird erst,
 * wenn eine Karte angefasst wird (`measure`) – während einer Geste verschiebt
 * sich keine Fläche, und bei jeder Bewegung neu zu messen wäre unnötige
 * Arbeit. Gesucht wird dann über `findAt` in Bildschirmkoordinaten, also in
 * derselben Einheit, in der der `PanResponder` die Fingerposition meldet.
 */
function useDropZones() {
  const nodes = useRef(new Map<string, View>()).current;
  const refCallbacks = useRef(new Map<string, (node: View | null) => void>()).current;
  const rects = useRef<ZoneRect[]>([]);

  /*
    Je Fläche derselbe Callback über alle Renderdurchgänge hinweg: Ein bei
    jedem Rendern neu gebauter Ref-Callback lässt React die alte Ref mit
    `null` abmelden und die neue wieder anmelden – jedes Mal, für jede Lücke.
  */
  const register = useCallback(
    (id: string) => {
      const existing = refCallbacks.get(id);
      if (existing) return existing;

      const callback = (node: View | null) => {
        // Bewusst als Anweisung und nicht als Ausdruck: Ein Ref-Callback, der
        // etwas zurückgibt, gilt in React 19 als Aufräumfunktion.
        if (node) nodes.set(id, node);
        else nodes.delete(id);
      };
      refCallbacks.set(id, callback);
      return callback;
    },
    [nodes, refCallbacks],
  );

  const measure = useCallback(() => {
    rects.current = [];
    nodes.forEach((node, id) => {
      node.measureInWindow((x, y, width, height) => {
        // Eine Fläche, die gerade nicht im Layout steht, meldet Nullmaße –
        // die darf nicht mitzählen, sonst schluckt sie jede Ablage.
        if (width > 0 && height > 0) rects.current.push({ id, x, y, width, height });
      });
    });
  }, [nodes]);

  /**
   * Die Fläche unter dem Finger – oder die nächstgelegene, wenn er knapp
   * daneben liegt.
   *
   * Eine Lücke im Satz ist ein kleines Ziel, und beim Ziehen liegt die Hand
   * darüber: Ohne diesen Spielraum landet eine Karte auf dem Telefon öfter
   * neben der Lücke als darin. Weiter als `SNAP_DISTANCE` reicht er nicht,
   * damit bei zwei Lücken nebeneinander immer noch die gemeinte gewinnt.
   */
  const findAt = useCallback((x: number, y: number): string | null => {
    let closest: { id: string; distance: number } | null = null;

    for (const zone of rects.current) {
      const dx = Math.max(zone.x - x, 0, x - (zone.x + zone.width));
      const dy = Math.max(zone.y - y, 0, y - (zone.y + zone.height));
      const distance = Math.hypot(dx, dy);
      if (distance === 0) return zone.id;
      if (!closest || distance < closest.distance) closest = { id: zone.id, distance };
    }

    return closest && closest.distance <= SNAP_DISTANCE ? closest.id : null;
  }, []);

  return useMemo(() => ({ register, measure, findAt }), [register, measure, findAt]);
}

type DropZones = ReturnType<typeof useDropZones>;

/**
 * Eine ziehbare Wortkarte.
 *
 * Trägt ihren eigenen `PanResponder` statt eines `Pressable` – beides auf
 * demselben Element würde um die Touch-Antwortzuständigkeit konkurrieren
 * (dasselbe Problem wie beim Zeichen-Canvas, siehe dort). Eine Geste ohne
 * nennenswerte Bewegung zählt als Antippen und meldet `null` als Ziel; wer
 * nicht ziehen kann oder will, kommt damit genauso ans Ziel, nur legt dann
 * die Aufgabe den Platz fest. Eine Geste, die über einer Ablagefläche endet,
 * meldet deren ID.
 */
function DragTile({
  label,
  a11yLabel,
  disabled,
  zones,
  onDrop,
  onHoverChange,
  style,
  textStyle,
}: {
  label: string;
  a11yLabel: string;
  disabled: boolean;
  zones: DropZones;
  /** `null` = angetippt statt abgelegt; die Aufgabe entscheidet dann über den Platz. */
  onDrop: (zoneId: string | null) => void;
  onHoverChange: (zoneId: string | null) => void;
  style?: object;
  textStyle?: object;
}) {
  const [drag, setDrag] = useState({ dx: 0, dy: 0, active: false });

  const disabledRef = useRef(disabled);
  const onDropRef = useRef(onDrop);
  const onHoverChangeRef = useRef(onHoverChange);
  disabledRef.current = disabled;
  onDropRef.current = onDrop;
  onHoverChangeRef.current = onHoverChange;

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => !disabledRef.current,
        onMoveShouldSetPanResponder: () => !disabledRef.current,

        onPanResponderGrant: () => {
          setDrag({ dx: 0, dy: 0, active: true });
          zones.measure();
        },

        onPanResponderMove: (_event, gestureState) => {
          setDrag({ dx: gestureState.dx, dy: gestureState.dy, active: true });
          onHoverChangeRef.current(zones.findAt(gestureState.moveX, gestureState.moveY));
        },

        onPanResponderRelease: (_event, gestureState) => {
          const distance = Math.hypot(gestureState.dx, gestureState.dy);
          const zoneId =
            distance < DRAG_TAP_THRESHOLD
              ? null
              : zones.findAt(gestureState.moveX, gestureState.moveY);
          const missed = distance >= DRAG_TAP_THRESHOLD && zoneId === null;

          setDrag({ dx: 0, dy: 0, active: false });
          onHoverChangeRef.current(null);
          // Eine Karte, die neben jeder Ablage losgelassen wird, geht zurück
          // an ihren Platz – sonst landete sie irgendwo, nur weil die Hand
          // gerutscht ist.
          if (!missed && !disabledRef.current) onDropRef.current(zoneId);
        },

        onPanResponderTerminate: () => {
          setDrag({ dx: 0, dy: 0, active: false });
          onHoverChangeRef.current(null);
        },
      }),
    // Absichtlich ohne weitere Abhängigkeiten: alles Veränderliche läuft über
    // Refs, und `zones` ist selbst stabil.
    [zones],
  );

  return (
    <View
      {...panResponder.panHandlers}
      accessibilityRole="button"
      accessibilityLabel={a11yLabel}
      style={[
        tokenChip,
        tokenIdle,
        style,
        { transform: [{ translateX: drag.dx }, { translateY: drag.dy }] },
        drag.active && tokenDragging,
      ]}
    >
      <Text style={[tokenText, textStyle]}>{label}</Text>
    </View>
  );
}

/**
 * Der Wortkasten über der Aufgabe: die Karten, die noch zu verteilen sind.
 *
 * Bereits abgelegte Wörter bleiben stehen, nur blasser. Sie zu entfernen wäre
 * falsch: Ein Wort kann in mehrere Lücken gehören (in den Aufgaben vom Typ
 * „I oder S?“ füllen zwei Karten fünf Lücken), und ein Kasten darf Ablenker
 * enthalten, die nirgends hingehören.
 */
function WordBank({
  words,
  usedWords,
  disabled,
  zones,
  onDrop,
  onHoverChange,
}: {
  words: string[];
  usedWords: Set<string>;
  disabled: boolean;
  zones: DropZones;
  onDrop: (word: string, zoneId: string | null) => void;
  onHoverChange: (zoneId: string | null) => void;
}) {
  const { t } = useTranslation();

  return (
    <View style={wordBank}>
      <Text style={wordBankLabel}>{t('exerciseWordBank')}</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
        {words.map((word, index) => (
          <DragTile
            key={`${word}-${index}`}
            label={word}
            a11yLabel={t('exerciseWordTileA11y', { word })}
            disabled={disabled}
            zones={zones}
            onDrop={(zoneId) => onDrop(word, zoneId)}
            onHoverChange={onHoverChange}
            style={usedWords.has(word) ? tokenUsed : undefined}
          />
        ))}
      </View>
    </View>
  );
}

// -------------------------------------------------------------- Lückentext

export function Cloze(props: BlockProps<ClozeBlock>) {
  const { t } = useTranslation();
  const { block, answer, result, onChange, locked } = props;
  const gaps = answer?.type === 'CLOZE' ? answer.gaps : {};
  const solution = result?.solution as Record<string, string> | undefined;

  const zones = useDropZones();
  const [hoverGap, setHoverGap] = useState<string | null>(null);

  const gapIds = block.segments.flatMap((segment) =>
    segment.kind === 'GAP' ? [segment.gapId] : [],
  );
  const filled = gapIds.every((gapId) => (gaps[gapId] ?? '').trim().length > 0);
  const usedWords = new Set(Object.values(gaps).filter(Boolean));

  // Ohne Wortkasten bliebe die Lücke unfüllbar; der Server baut deshalb beim
  // Ausliefern einen aus den Lösungen (siehe `stripSolutions`). Für Inhalte,
  // die trotzdem ohne ankommen, bleibt die Tastatur als Notweg.
  const bank = block.wordBank ?? [];
  const typed = bank.length === 0;

  function setGap(gapId: string, value: string) {
    onChange({ type: 'CLOZE', gaps: { ...gaps, [gapId]: value } });
  }

  /** Karte abgelegt – oder angetippt, dann geht sie in die erste freie Lücke. */
  function placeWord(word: string, gapId: string | null) {
    const target = gapId ?? gapIds.find((id) => !(gaps[id] ?? '').trim());
    if (target) setGap(target, word);
  }

  return (
    <Frame {...props} instruction={block.instruction} canCheck={filled}>
      {!typed && !result ? (
        <>
          <WordBank
            words={bank}
            usedWords={usedWords}
            disabled={locked}
            zones={zones}
            onDrop={placeWord}
            onHoverChange={setHoverGap}
          />
          <Text style={hintText}>{t('exerciseClozeHint')}</Text>
        </>
      ) : null}

      {/* Text und Lücken laufen im Fluss; Lücken sind Schreiblinien wie im Heft. */}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-end' }}>
        {block.segments.map((segment, index) => {
          if (segment.kind === 'TEXT') {
            return (
              <Text key={index} selectable style={[bodyText, { lineHeight: 38 }]}>
                {segment.text}
              </Text>
            );
          }

          const isCorrect = result?.details?.[segment.gapId];
          const value = gaps[segment.gapId] ?? '';
          const minWidth = Math.max(62, (segment.width ?? 8) * 9);
          const correction =
            result && !isCorrect && solution?.[segment.gapId] ? (
              <Text style={correctionText}>{solution[segment.gapId]}</Text>
            ) : null;

          if (typed) {
            return (
              <View key={index} style={{ marginHorizontal: 3 }}>
                <TextInput
                  value={value}
                  onChangeText={(next) => setGap(segment.gapId, next)}
                  editable={!result && !locked}
                  placeholder={segment.hint ?? ''}
                  placeholderTextColor={book.inkFaint}
                  autoCapitalize="none"
                  autoCorrect={false}
                  style={[
                    gapLine,
                    { minWidth },
                    result
                      ? {
                          borderBottomColor: isCorrect ? book.correct : book.wrong,
                          color: isCorrect ? book.correct : book.wrong,
                        }
                      : null,
                  ]}
                />
                {correction}
              </View>
            );
          }

          return (
            <View key={index} style={{ marginHorizontal: 3 }}>
              {/*
                Die Lücke ist Ablagefläche und Knopf in einem: Hier landet die
                gezogene Karte, und ein Tippen auf die gefüllte Lücke gibt das
                Wort wieder frei. Der Hinweis („hablar“) bleibt sichtbar,
                solange nichts darin liegt – er gehört zur Aufgabe, nicht zur
                Eingabe.
              */}
              <Pressable
                ref={zones.register(segment.gapId)}
                accessibilityRole="button"
                accessibilityLabel={
                  value ? t('exerciseGapFilledA11y', { word: value }) : t('exerciseGapEmptyA11y')
                }
                disabled={Boolean(result) || locked || !value}
                onPress={() => setGap(segment.gapId, '')}
                style={[
                  gapSlot,
                  { minWidth },
                  hoverGap === segment.gapId && gapSlotActive,
                  value && !result ? gapSlotFilled : null,
                  result
                    ? { borderBottomColor: isCorrect ? book.correct : book.wrong }
                    : null,
                ]}
              >
                <Text
                  style={[
                    gapValue,
                    !value && { color: book.inkFaint, fontStyle: 'italic' },
                    result ? { color: isCorrect ? book.correct : book.wrong } : null,
                  ]}
                  numberOfLines={1}
                >
                  {value || segment.hint || ' '}
                </Text>
              </Pressable>
              {correction}
            </View>
          );
        })}
      </View>
    </Frame>
  );
}

// ----------------------------------------------------------------- Auswahl

export function Choice(props: BlockProps<ChoiceBlock>) {
  const { t } = useTranslation();
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
      {block.question ? (
        <Text selectable style={bodyText}>
          {block.question}
        </Text>
      ) : null}
      {block.multiple ? <Text style={hintText}>{t('exerciseMultipleCorrect')}</Text> : null}

      <View style={{ gap: 10 }}>
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
              style={{ flexDirection: 'row', alignItems: 'center', gap: 11, minHeight: 40 }}
            >
              {/*
                Angekreuzt wird ins Kästchen hinein – der Haken steht im Feld,
                das Feld färbt sich nicht ein. So sieht eine ausgefüllte
                Buchseite aus.
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
                  <CrossMark color={book.wrong} size={14} />
                ) : isSelected || (result && isSolution) ? (
                  <CheckMark color={result && isSolution ? book.correct : book.ink} size={14} />
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

/**
 * Zuordnung – die beiden Hälften werden zusammengeschoben, nicht verbunden.
 *
 * Vorher stand hier ein Verbindungsspiel ohne Verbindungslinien: links
 * antippen, rechts antippen, und das Paar war nur daran zu erkennen, dass
 * beide Karten dieselbe Tönung trugen. Wer den Kopf einmal gehoben hatte,
 * musste jedes Paar neu zusammensuchen. Jetzt hat jede Karte der linken Seite
 * eine leere Stelle neben sich, und die passende Karte wird dorthin gezogen:
 * Das Paar steht danach nebeneinander in einer Zeile und liest sich als eine
 * Zeile – wie eine ausgefüllte Zuordnungsaufgabe im Heft. Was noch nicht
 * zugeordnet ist, liegt darunter im Kasten.
 */
export function Matching(props: BlockProps<MatchingBlock>) {
  const { t } = useTranslation();
  const { block, answer, result, onChange, locked } = props;
  const pairs = answer?.type === 'MATCHING' ? answer.pairs : [];
  const byLeft = new Map(pairs.map((pair) => [pair.leftId, pair.rightId]));

  const zones = useDropZones();
  const [hoverLeft, setHoverLeft] = useState<string | null>(null);

  const rightById = new Map(block.right.map((item) => [item.id, item]));
  const remaining = block.right.filter((item) => !pairs.some((pair) => pair.rightId === item.id));

  function assign(rightId: string, leftId: string | null) {
    // Angetippt statt gezogen: Die Karte geht in die erste freie Zeile.
    const target = leftId ?? block.left.find((item) => !byLeft.has(item.id))?.id;
    if (!target) return;
    const next = pairs.filter((pair) => pair.leftId !== target && pair.rightId !== rightId);
    next.push({ leftId: target, rightId });
    onChange({ type: 'MATCHING', pairs: next });
  }

  function release(leftId: string) {
    onChange({ type: 'MATCHING', pairs: pairs.filter((pair) => pair.leftId !== leftId) });
  }

  return (
    <Frame {...props} instruction={block.instruction} canCheck={pairs.length === block.left.length}>
      <View style={{ gap: 8 }}>
        {block.left.map((item) => {
          const rightId = byLeft.get(item.id);
          const matched = rightId ? rightById.get(rightId) : undefined;
          const isCorrect = result?.details?.[item.id];

          return (
            <View
              key={item.id}
              style={[
                matchRow,
                matched && !result ? matchRowLinked : null,
                result ? { borderColor: isCorrect ? book.correct : book.wrong } : null,
              ]}
            >
              <Text selectable style={matchText}>
                {item.text}
              </Text>

              {/* Die Stelle, an der die passende Karte liegt. Leer bleibt sie
                  auch leer – ein gestricheltes Feld heißt im Heft „hier fehlt
                  etwas“, und die Zeile darunter sagt schon einmal, wie es
                  dorthin kommt. Fünfmal „Karte hierher“ untereinander wäre
                  dieselbe Auskunft, nur lauter. */}
              <Pressable
                ref={zones.register(item.id)}
                accessibilityRole="button"
                accessibilityLabel={
                  matched
                    ? t('exerciseGapFilledA11y', { word: matched.text })
                    : t('exerciseMatchSlotA11y', { item: item.text })
                }
                disabled={Boolean(result) || locked || !matched}
                onPress={() => release(item.id)}
                style={[
                  matchSlot,
                  hoverLeft === item.id && matchSlotActive,
                  matched ? matchSlotFilled : null,
                ]}
              >
                <Text
                  selectable={Boolean(matched)}
                  style={[
                    matchSlotText,
                    result ? { color: isCorrect ? book.correct : book.wrong } : null,
                  ]}
                >
                  {matched?.text ?? ' '}
                </Text>
              </Pressable>
            </View>
          );
        })}
      </View>

      {remaining.length > 0 && !result ? (
        <>
          <View style={wordBank}>
            <Text style={wordBankLabel}>{t('exerciseWordBank')}</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
              {remaining.map((item) => (
                <DragTile
                  key={item.id}
                  label={item.text}
                  a11yLabel={t('exerciseWordTileA11y', { word: item.text })}
                  disabled={locked}
                  zones={zones}
                  onDrop={(leftId) => assign(item.id, leftId)}
                  onHoverChange={setHoverLeft}
                  style={matchTile}
                  textStyle={matchTileText}
                />
              ))}
            </View>
          </View>
          <Text style={hintText}>{t('exerciseMatchHint')}</Text>
        </>
      ) : null}
    </Frame>
  );
}

// -------------------------------------------------------------- Reihenfolge

/** Die eine Ablagefläche der Reihenfolge-Aufgabe: die Schreiblinie. */
const SENTENCE_ZONE = 'sentence';

export function Ordering(props: BlockProps<OrderingBlock>) {
  const { t } = useTranslation();
  const { block, answer, result, onChange, locked } = props;
  const order = answer?.type === 'ORDERING' ? answer.order : [];
  const remaining = block.items.filter((item) => !order.includes(item.id));
  const solution = (result?.solution as string[] | undefined) ?? [];
  const label = (id: string) => block.items.find((item) => item.id === id)?.text ?? '';

  const zones = useDropZones();
  const [zoneHighlighted, setZoneHighlighted] = useState(false);

  return (
    <Frame {...props} instruction={block.instruction} canCheck={remaining.length === 0}>
      {/* Der gebaute Satz steht auf einer Schreiblinie – dem Zielbereich für
          die gezogenen Wortkarten. */}
      <View
        ref={zones.register(SENTENCE_ZONE)}
        style={[sentenceLine, zoneHighlighted && sentenceLineActive]}
      >
        {order.length === 0 ? (
          <Text style={hintText}>{t('exerciseOrderHint')}</Text>
        ) : (
          order.map((id, index) => {
            const correctHere = result ? solution[index] === id : undefined;
            return (
              <Pressable
                key={`${id}-${index}`}
                accessibilityRole="button"
                accessibilityLabel={t('exerciseGapFilledA11y', { word: label(id) })}
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
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
          {remaining.map((item) => (
            <DragTile
              key={item.id}
              label={item.text}
              a11yLabel={t('exerciseWordTileA11y', { word: item.text })}
              disabled={locked}
              zones={zones}
              onDrop={() => onChange({ type: 'ORDERING', order: [...order, item.id] })}
              onHoverChange={(zoneId) => setZoneHighlighted(zoneId === SENTENCE_ZONE)}
            />
          ))}
        </View>
      ) : null}

      {result && !result.correct ? (
        <Text selectable style={hintText}>
          {t('exerciseOrderSolution', { solution: solution.map(label).join(' ') })}
        </Text>
      ) : null}
    </Frame>
  );
}

// ------------------------------------------------------------ Schreibaufgabe

export function Writing(props: BlockProps<WritingBlock>) {
  const { t } = useTranslation();
  const { block, answer, result, onChange, locked } = props;
  const text = answer?.type === 'WRITING' ? answer.text : '';
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const sample = result?.solution as string | undefined;

  return (
    <Frame {...props} instruction={block.instruction} canCheck={words >= (block.minWords ?? 1)}>
      {block.prompt ? (
        <Text selectable style={bodyText}>
          {block.prompt}
        </Text>
      ) : null}

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
          placeholder={t('exerciseWritePlaceholder')}
          placeholderTextColor={book.inkFaint}
          style={writingInput}
        />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={hintText}>
          {words === 1 ? t('exerciseWordCountOne') : t('exerciseWordCount', { count: words })}
          {block.minWords ? ` · ${t('exerciseMinWords', { count: block.minWords })}` : ''}
        </Text>
        <View style={{ flex: 1 }} />
        {block.aiFeedback ? (
          <Text style={[bookLabel, { fontSize: 10, color: book.inkFaint }]}>
            {t('exerciseWithAi')}
          </Text>
        ) : null}
      </View>

      {sample ? (
        <View style={[resultBar, { borderLeftColor: book.correct }]}>
          <Text style={[resultText, { color: book.correct }]}>{t('exerciseSample')}</Text>
          <Text selectable style={bodyText}>
            {sample}
          </Text>
        </View>
      ) : null}
    </Frame>
  );
}

// ------------------------------------------------------------------ Styles

/** Haarlinie über jeder Aufgabe – die Trennung, die früher die Einrückung leistete. */
const exerciseRule = {
  height: 1,
  backgroundColor: book.ruleFaint,
};

const gapLine = {
  borderBottomWidth: 1.5,
  borderBottomColor: book.ink,
  paddingHorizontal: 6,
  paddingBottom: 2,
  fontFamily: bookFont,
  fontSize: 17,
  color: book.ink,
  textAlign: 'center' as const,
};

/**
 * Die Lücke als Ablagefläche: dieselbe Schreiblinie wie zuvor das
 * Eingabefeld, nur dass hier eine Karte landet statt eines Tastendrucks. Die
 * Höhe ist die einer Wortkarte, damit die Zeile beim Füllen nicht springt.
 */
const gapSlot = {
  minHeight: 34,
  justifyContent: 'center' as const,
  paddingHorizontal: 6,
  paddingBottom: 2,
  borderBottomWidth: 1.5,
  borderBottomColor: book.ink,
};

/** Zeigt sich, während eine Karte über der Lücke schwebt. */
const gapSlotActive = {
  backgroundColor: book.tint,
  borderBottomColor: book.correct,
};

/** Gefüllt heißt: das Wort sitzt als Karte auf der Linie. */
const gapSlotFilled = {
  backgroundColor: book.tintDeep,
};

const gapValue = {
  fontFamily: bookFont,
  fontSize: 17,
  color: book.ink,
  textAlign: 'center' as const,
};

const correctionText = {
  fontFamily: bookFont,
  fontSize: 14,
  color: book.correct,
  textAlign: 'center' as const,
  marginTop: 2,
  fontStyle: 'italic' as const,
};

const wordBank = {
  backgroundColor: book.tint,
  borderWidth: 1,
  borderColor: book.rule,
  padding: 12,
  gap: 9,
};

const wordBankLabel = {
  ...bookLabel,
  fontSize: 10,
  letterSpacing: 1.2,
  color: book.inkSoft,
};

const checkboxBase = {
  width: 24,
  height: 24,
  borderWidth: 1.5,
  borderColor: book.inkSoft,
  backgroundColor: book.paper,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};
const checkbox = { ...checkboxBase, borderRadius: 2 };
const radioBox = { ...checkboxBase, borderRadius: 12 };

/** Eine Zeile der Zuordnung: links der Begriff, rechts seine Stelle. */
const matchRow = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  gap: 10,
  minHeight: 48,
  paddingHorizontal: 10,
  paddingVertical: 8,
  borderWidth: 1,
  borderColor: book.rule,
  backgroundColor: book.paper,
};

/** Zugeordnet heißt: dieselbe Tönung wie eine gefüllte Lücke. */
const matchRowLinked = {
  backgroundColor: book.tint,
  borderColor: book.inkSoft,
};

const matchText = {
  flex: 1,
  fontFamily: bookFont,
  fontSize: 15,
  lineHeight: 21,
  color: book.ink,
};

/**
 * Die leere Stelle neben dem Begriff – gestrichelt wie eine vorgedruckte
 * Linie, auf die man etwas schreiben soll. Sie nimmt die halbe Zeile ein,
 * damit die Zeilen untereinander dieselbe Kante haben.
 */
const matchSlot = {
  flex: 1,
  minHeight: 34,
  justifyContent: 'center' as const,
  paddingHorizontal: 9,
  paddingVertical: 5,
  borderWidth: 1,
  borderColor: book.rule,
  borderStyle: 'dashed' as const,
  backgroundColor: book.paper,
};

const matchSlotActive = {
  borderStyle: 'solid' as const,
  borderColor: book.correct,
  backgroundColor: book.tint,
};

const matchSlotFilled = {
  borderStyle: 'solid' as const,
  borderColor: book.inkSoft,
  backgroundColor: book.tintDeep,
};

const matchSlotText = {
  fontFamily: bookFont,
  fontSize: 15,
  lineHeight: 21,
  color: book.ink,
};

/** Karten der Zuordnung tragen ganze Wendungen – sie dürfen umbrechen. */
const matchTile = {
  maxWidth: '100%' as const,
};

const matchTileText = {
  fontSize: 15,
  lineHeight: 21,
};

const sentenceLine = {
  flexDirection: 'row' as const,
  flexWrap: 'wrap' as const,
  gap: 8,
  minHeight: 52,
  alignItems: 'center' as const,
  paddingHorizontal: 8,
  paddingVertical: 8,
  borderBottomWidth: 1.5,
  borderBottomColor: book.ink,
};

/** Zeigt sich, während eine gezogene Karte über der Schreiblinie schwebt. */
const sentenceLineActive = {
  backgroundColor: book.tint,
  borderBottomColor: book.correct,
};

const tokenChip = {
  paddingHorizontal: 12,
  paddingVertical: 7,
  borderWidth: 1,
};

/** Gesetzte Wörter sitzen auf der Linie, ausgeschnitten wie Wortkarten. */
const tokenPlaced = {
  backgroundColor: book.tintDeep,
  borderColor: book.inkSoft,
};

const tokenIdle = {
  backgroundColor: book.paper,
  borderColor: book.rule,
};

/** Schon irgendwo abgelegt – bleibt greifbar, tritt aber zurück. */
const tokenUsed = {
  opacity: 0.4,
};

/** Während des Ziehens: leicht angehoben, mit Schlagschatten wie eine echte Karte. */
const tokenDragging = {
  zIndex: 20,
  elevation: 8,
  opacity: 1,
  borderColor: book.ink,
  shadowColor: book.ink,
  shadowOpacity: 0.3,
  shadowRadius: 8,
  shadowOffset: { width: 0, height: 4 },
};

const tokenText = {
  fontFamily: bookFont,
  fontSize: 16,
  color: book.ink,
};

const writingSheet = {
  backgroundColor: book.paper,
  borderWidth: 1,
  borderColor: book.rule,
  minHeight: 156,
  paddingVertical: 6,
};

const writingRule = {
  height: 30,
  borderBottomWidth: 1,
  borderBottomColor: book.ruleFaint,
  marginHorizontal: 12,
};

const writingInput = {
  position: 'absolute' as const,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  paddingHorizontal: 13,
  paddingTop: 7,
  fontFamily: bookFont,
  fontSize: 17,
  lineHeight: 30,
  color: book.ink,
  textAlignVertical: 'top' as const,
};

const checkButton = {
  alignSelf: 'flex-start' as const,
  borderWidth: 1.5,
  paddingHorizontal: 16,
  paddingVertical: 8,
};

const checkLabel = {
  fontFamily: bookSans,
  fontSize: 14,
  fontWeight: '700' as const,
  letterSpacing: 0.5,
};

const resultBar = {
  borderLeftWidth: 3,
  paddingVertical: 10,
  paddingHorizontal: 13,
  gap: 5,
};

const resultText = {
  fontFamily: bookSans,
  fontSize: 14,
  fontWeight: '700' as const,
  letterSpacing: 0.3,
};

const hintText = {
  fontFamily: bookFont,
  fontSize: 15,
  lineHeight: 22,
  color: book.inkSoft,
  fontStyle: 'italic' as const,
};

const translationToggle = {
  fontFamily: bookSans,
  fontSize: 13,
  letterSpacing: 0.3,
  color: book.inkFaint,
  marginTop: 1,
};
