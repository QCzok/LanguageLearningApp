import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMutation, useQuery } from '@tanstack/react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { emptyPageContent } from '@lingua/shared';
import type {
  BlockAnswer,
  CefrLevel,
  NotebookPageContent,
  StudyAnswerResultDto,
  StudyExerciseBlock,
  StudyLessonDto,
  StudyTheoryBlock,
} from '@lingua/shared';
import { Button, ErrorState, Loading, ProgressBar } from '../../components';
import { aiApi, studyApi } from '../../api/endpoints';
import type { ApiError } from '../../api/client';
import { useTranslation } from '../../i18n';
import {
  book,
  bookLabel,
  colors,
  fontFamily,
  levelColors,
  radius,
  spacing,
  typography,
} from '../../theme';
import { Dialogue, Info, Paragraph, VocabList } from '../workbook/blocks/ContentBlocks';
import { Choice, Cloze, Matching, Ordering } from '../workbook/blocks/ExerciseBlocks';
import { ChevronRightIcon } from '../workbook/BookIcons';
import { TranslateLayer } from '../translate/TranslateLayer';
import { useTranslateHeaderButton } from '../translate/TranslateButton';
import type { StudyStackParamList } from '../../navigation/types';
import { KIND_LABEL } from './StudyHomeScreen';
import { awardPoints } from '../../store/points.store';
import { alert } from '../../utils/alert';
import Canvas from '../notebook/Canvas';
import { DEFAULT_TOOL, ToolDock } from '../notebook/ToolDock';
import type { ToolState } from '../notebook/ToolDock';

type Props = NativeStackScreenProps<StudyStackParamList, 'StudyLesson'>;

/** Der Server nimmt höchstens so viel Text für eine Übersetzung an. */
const MAX_PASSAGE_LENGTH = 4000;
/** Platz unter dem Inhalt, damit der Werkzeugkasten nichts verdeckt. */
const DOCK_SPACE = 88;

/**
 * Eine Lektion: erst der Lernteil, dann die Prüfung, dann weiter.
 *
 * Jede Aufgabe wird einzeln geprüft und bekommt sofort ihre Punkte; sind alle
 * geprüft, erscheint das Ergebnis mit dem Knopf zur nächsten Lektion. Zurück
 * zur Erklärung geht jederzeit, ohne dass Antworten verloren gehen.
 *
 * Übersetzen geht auf zwei Wegen: einzelne Wörter über das Übersetzungsblatt
 * (Kopfzeile oder Markierung, siehe `TranslateLayer`), der ganze Lernteil
 * oder die Aufgabenstellungen über „Mit KI übersetzen“. Der Verweis auf die
 * Buchseite steht in beiden Teilen.
 *
 * Wie im Lehrwerk liegt über dem Inhalt eine Zeichenebene mit dem
 * Werkzeugkasten unten links (siehe `useLessonNotes`).
 */
export default function StudyLessonScreen({ route, navigation }: Props) {
  const { lessonId } = route.params;
  const { t } = useTranslation();
  const translator = useTranslateHeaderButton(navigation);
  const scrollRef = useRef<ScrollView>(null);

  const lesson = useQuery({
    queryKey: ['study-lesson', lessonId],
    queryFn: () => studyApi.lesson(lessonId),
  });

  const [phase, setPhase] = useState<'LEARN' | 'TEST'>('LEARN');
  const [answers, setAnswers] = useState<Record<string, BlockAnswer>>({});
  const [results, setResults] = useState<Record<string, StudyAnswerResultDto>>({});
  const notes = useLessonNotes(`${lessonId}.${phase}`);
  const isDrawing = notes.tool.mode === 'DRAW';

  useEffect(() => {
    if (lesson.data) {
      navigation.setOptions({
        title: t('studyLessonOf', { number: lesson.data.number, total: lesson.data.total }),
      });
    }
  }, [lesson.data, navigation, t]);

  const submit = useMutation({
    mutationFn: (input: { block: StudyExerciseBlock; answer: BlockAnswer }) =>
      studyApi.answer(lessonId, { blockId: input.block.id, answer: input.answer }),
    onSuccess: (result, input) => {
      setResults((previous) => ({ ...previous, [input.block.id]: result }));
      awardPoints(result);
    },
  });

  if (lesson.isLoading) return <Loading />;
  if (lesson.isError || !lesson.data) {
    return <ErrorState message={t('studyError')} onRetry={lesson.refetch} />;
  }

  const data = lesson.data;
  const accent = levelColors[data.level] ?? colors.primary;
  const checked = data.exercises.filter((exercise) => results[exercise.block.id]);
  const allChecked = checked.length === data.exercises.length;
  const lessonPoints = Object.values(results).reduce((sum, entry) => sum + entry.pointsEarned, 0);

  function show(next: 'LEARN' | 'TEST') {
    setPhase(next);
    scrollRef.current?.scrollTo({ y: 0, animated: false });
  }

  function retry() {
    setAnswers({});
    setResults({});
    show('LEARN');
  }

  function goTo(nextId: string) {
    // Ersetzen statt stapeln: „Zurück“ führt zur Übersicht, nicht durch alle
    // Lektionen dieser Sitzung.
    navigation.replace('StudyLesson', { lessonId: nextId });
  }

  const bookLink = data.bookPage ? (
    <BookLink
      lesson={data}
      accent={accent}
      onPress={() =>
        navigation.navigate('Unit', {
          unitId: data.bookPage!.unitId,
          title: data.bookPage!.unitTitle,
        })
      }
    />
  ) : null;

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.background }}
      edges={['left', 'right', 'bottom']}
    >
      <View style={header}>
        <View style={{ flex: 1 }}>
          <ProgressBar value={(data.number / data.total) * 100} color={accent} height={6} />
        </View>
        <Text style={[pointsChip, { color: accent, borderColor: accent }]}>
          {t('pointsEarned', { points: lessonPoints })}
        </Text>
      </View>

      <ScrollView
        ref={scrollRef}
        contentContainerStyle={{ padding: spacing.md, paddingBottom: DOCK_SPACE }}
        keyboardShouldPersistTaps="handled"
        // Im Stiftmodus darf die Seite nicht unter der Hand wegrutschen.
        scrollEnabled={!isDrawing}
      >
        <View style={{ gap: spacing.md }} onLayout={notes.onLayout}>
          {phase === 'LEARN' ? (
            <>
              <View style={[card, { borderTopColor: accent }]}>
                <CardLabel
                  text={`${t('studyLearn')} · ${t(KIND_LABEL[data.kind])}`}
                  color={accent}
                />
                <Text style={lessonTitle}>{data.title}</Text>
                {data.theory.map((block) => (
                  <TheoryBlock key={block.id} block={block} level={data.level} accent={accent} />
                ))}
                <PassageTranslation
                  key={`${data.id}-learn`}
                  text={theoryText(data.theory)}
                  accent={accent}
                />
              </View>
              {bookLink}
              <Button
                label={t('studyToTest')}
                onPress={() => show('TEST')}
                style={{ backgroundColor: accent, borderColor: accent }}
              />
            </>
          ) : (
            <>
              <View style={[card, { borderTopColor: accent }]}>
                <CardLabel text={`${t('studyTest')} · ${data.title}`} color={accent} />
                <PassageTranslation
                  key={`${data.id}-test`}
                  text={exerciseText(data.exercises.map((exercise) => exercise.block))}
                  accent={accent}
                />
                {data.exercises.map((exercise, index) => (
                  <View key={exercise.block.id} style={{ gap: spacing.xs }}>
                    <ExerciseView
                      block={exercise.block}
                      number={index + 1}
                      level={data.level}
                      accent={accent}
                      answer={answers[exercise.block.id]}
                      result={results[exercise.block.id]}
                      isChecking={
                        submit.isPending && submit.variables?.block.id === exercise.block.id
                      }
                      onChange={(answer) =>
                        setAnswers((previous) => ({ ...previous, [exercise.block.id]: answer }))
                      }
                      onCheck={() => {
                        const answer = answers[exercise.block.id];
                        if (answer) submit.mutate({ block: exercise.block, answer });
                      }}
                    />
                    <PointsNote entry={results[exercise.block.id]} accent={accent} />
                  </View>
                ))}
                {submit.isError ? (
                  <Text style={[typography.caption, { color: colors.danger }]}>
                    {t('studyError')}
                  </Text>
                ) : null}
              </View>

              {allChecked ? (
                <ResultCard
                  lesson={data}
                  accent={accent}
                  results={Object.values(results)}
                  points={lessonPoints}
                  onNext={data.nextLessonId ? () => goTo(data.nextLessonId!) : undefined}
                  onRetry={retry}
                  onHome={() => navigation.navigate('StudyHome')}
                />
              ) : (
                <Text
                  style={[typography.caption, { color: colors.textMuted, textAlign: 'center' }]}
                >
                  {t('studyCheckHint')}
                </Text>
              )}

              {bookLink}
              <Button
                label={t('studyBackToLearn')}
                variant="secondary"
                onPress={() => show('LEARN')}
              />
            </>
          )}

          {/*
          Zeichenebene exakt über dem Inhalt; ohne Werkzeug in der Hand lässt
          sie alle Berührungen zu den Aufgabenfeldern durch.
        */}
          {notes.content ? (
            <View
              pointerEvents={isDrawing ? 'auto' : 'none'}
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: notes.layout.width,
                height: notes.layout.height,
              }}
            >
              <Canvas
                content={notes.content}
                tool={notes.tool}
                onChange={notes.change}
                editingTextId={null}
                onEditText={() => undefined}
                transparent
              />
            </View>
          ) : null}
        </View>
      </ScrollView>

      <ToolDock
        tool={notes.tool}
        onChange={notes.setTool}
        tools={['PEN', 'HIGHLIGHTER', 'ERASER']}
        clearLabel={t('pageClearNotes')}
        canUndo={notes.canUndo}
        canClear={notes.canClear}
        onUndo={notes.undo}
        onClear={() =>
          alert(t('pageClearNotesTitle'), t('pageClearNotesBody'), [
            { text: t('commonCancel'), style: 'cancel' },
            { text: t('commonDelete'), style: 'destructive', onPress: notes.clear },
          ])
        }
      />

      <TranslateLayer ref={translator} />
    </SafeAreaView>
  );
}

// ------------------------------------------------------------ Stiftnotizen

/** Feste Referenzbreite der Notizen – dieselbe Notiz sitzt auf jedem Gerät an derselben Stelle. */
const NOTES_WIDTH = book.pageWidth;

/**
 * Die Stiftnotizen einer Lektion, getrennt nach Lern- und Prüfungsteil.
 *
 * Anders als die Buchseiten haben Lektionen keinen Speicherplatz auf dem
 * Server – die Notizen bleiben deshalb auf dem Gerät. Gespeichert wird in
 * Referenzkoordinaten (`NOTES_WIDTH`), die Höhe folgt dem gemessenen Inhalt.
 */
function useLessonNotes(key: string) {
  const storageKey = `lingua.lesson-notes.${key}`;
  const [tool, setTool] = useState<ToolState>(DEFAULT_TOOL);
  const [notes, setNotes] = useState<NotebookPageContent | null>(null);
  const [history, setHistory] = useState<NotebookPageContent[]>([]);
  const [layout, setLayout] = useState({ width: 0, height: 0 });

  useEffect(() => {
    let cancelled = false;
    setNotes(null);
    setHistory([]);
    AsyncStorage.getItem(storageKey)
      .then((raw) => (raw ? (JSON.parse(raw) as NotebookPageContent) : null))
      .catch(() => null)
      .then((stored) => {
        if (!cancelled) setNotes(stored ?? emptyPageContent(NOTES_WIDTH, NOTES_WIDTH, 'BLANK'));
      });
    return () => {
      cancelled = true;
    };
  }, [storageKey]);

  const persist = useCallback(
    (next: NotebookPageContent) => {
      setNotes(next);
      void AsyncStorage.setItem(storageKey, JSON.stringify(next)).catch(() => undefined);
    },
    [storageKey],
  );

  const change = useCallback(
    (next: NotebookPageContent) => {
      setHistory((previous) => (notes ? [...previous, notes].slice(-40) : previous));
      persist(next);
    },
    [notes, persist],
  );

  // Nur bei echter Änderung übernehmen – sonst treiben Messen und Rendern sich gegenseitig an.
  const onLayout = useCallback(
    (event: { nativeEvent: { layout: { width: number; height: number } } }) => {
      const { width, height } = event.nativeEvent.layout;
      setLayout((current) =>
        Math.abs(current.width - width) < 1 && Math.abs(current.height - height) < 1
          ? current
          : { width, height },
      );
    },
    [],
  );

  const content = useMemo(
    () =>
      notes && layout.width > 0 && layout.height > 0
        ? { ...notes, width: NOTES_WIDTH, height: (layout.height / layout.width) * NOTES_WIDTH }
        : null,
    [notes, layout],
  );

  return {
    tool,
    setTool,
    content,
    layout,
    onLayout,
    change,
    canUndo: history.length > 0,
    canClear: Boolean(notes?.elements.length),
    undo: () => {
      const previous = history[history.length - 1];
      if (!previous) return;
      setHistory((entries) => entries.slice(0, -1));
      persist(previous);
    },
    clear: () => {
      if (notes) change({ ...notes, elements: [] });
    },
  };
}

// ------------------------------------------------------------------- Teile

function CardLabel({ text, color }: { text: string; color: string }) {
  return <Text style={[bookLabel, { fontSize: 11, letterSpacing: 1.2, color }]}>{text}</Text>;
}

/** Der Verweis auf die Buchseite, auf der das Thema ausführlich steht. */
function BookLink({
  lesson,
  accent,
  onPress,
}: {
  lesson: StudyLessonDto;
  accent: string;
  onPress: () => void;
}) {
  const { t, tBookLabel } = useTranslation();
  const page = lesson.bookPage!;
  return (
    <Pressable
      accessibilityRole="link"
      onPress={onPress}
      style={({ pressed }) => [bookRow, pressed && { opacity: 0.8 }]}
    >
      <Text style={{ fontSize: 22 }}>📘</Text>
      <View style={{ flex: 1, gap: 2 }}>
        <Text style={[typography.bodyStrong, { color: accent }]}>{t('studyBookLink')}</Text>
        <Text style={[typography.caption, { color: colors.textMuted }]} numberOfLines={2}>
          {tBookLabel(page.book)} ·{' '}
          {t('studyBookRef', { chapter: page.chapterOrder, title: page.chapterTitle })} ·{' '}
          {page.unitTitle}
        </Text>
      </View>
      <ChevronRightIcon color={colors.textMuted} size={16} />
    </Pressable>
  );
}

/**
 * „Mit KI übersetzen“: schickt den ganzen Abschnitt an die KI und zeigt die
 * Übersetzung darunter. Einmal geholt, lässt sie sich ein- und ausblenden,
 * ohne erneut zu fragen.
 */
function PassageTranslation({ text, accent }: { text: string; accent: string }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const translate = useMutation({
    mutationFn: () => aiApi.translatePassage(text.slice(0, MAX_PASSAGE_LENGTH)),
  });

  if (!text.trim()) return null;

  const error = translate.error
    ? (translate.error as ApiError).code === 'AiQuotaExceeded'
      ? t('translateQuota')
      : t('translateFailed')
    : null;

  return (
    <View style={translationBox}>
      <Pressable
        accessibilityRole="button"
        disabled={translate.isPending}
        onPress={() => {
          if (translate.data) setOpen((value) => !value);
          else {
            setOpen(true);
            translate.mutate();
          }
        }}
        hitSlop={8}
        style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.sm }}
      >
        {translate.isPending ? <ActivityIndicator size="small" color={accent} /> : null}
        <Text style={[translationToggle, { color: accent }]}>
          {translate.isPending
            ? t('studyTranslating')
            : open && translate.data
              ? t('studyTranslationHide')
              : `🌐 ${t('studyTranslateAi')}`}
        </Text>
      </Pressable>
      {open && translate.data ? (
        <View style={{ gap: 4 }}>
          <Text style={[bookLabel, { fontSize: 10, color: book.inkFaint }]}>
            {t('studyTranslationTitle')}
          </Text>
          <Text selectable style={translationText}>
            {translate.data.translation}
          </Text>
        </View>
      ) : null}
      {error ? <Text style={[typography.caption, { color: colors.danger }]}>{error}</Text> : null}
      {!open ? (
        <Text style={[typography.caption, { color: book.inkFaint }]}>
          {t('studyTranslateHint')}
        </Text>
      ) : null}
    </View>
  );
}

function PointsNote({
  entry,
  accent,
}: {
  entry: StudyAnswerResultDto | undefined;
  accent: string;
}) {
  const { t } = useTranslation();
  if (!entry) return null;
  if (entry.pointsEarned > 0) {
    return (
      <Text style={[pointsNote, { color: accent }]}>
        {t('pointsEarned', { points: entry.pointsEarned })}
      </Text>
    );
  }
  return entry.result.scorePercent > 0 ? (
    <Text style={[typography.caption, { color: colors.textMuted, textAlign: 'right' }]}>
      {t('studyNoNewPoints')}
    </Text>
  ) : null;
}

function ResultCard({
  lesson,
  accent,
  results,
  points,
  onNext,
  onRetry,
  onHome,
}: {
  lesson: StudyLessonDto;
  accent: string;
  results: StudyAnswerResultDto[];
  points: number;
  onNext?: () => void;
  onRetry: () => void;
  onHome: () => void;
}) {
  const { t } = useTranslation();
  const percent = Math.round(
    results.reduce((sum, entry) => sum + entry.result.scorePercent, 0) /
      Math.max(1, results.length),
  );
  const totalPoints = results[results.length - 1]?.totalPoints;

  return (
    <>
      <View
        style={[
          card,
          { borderTopColor: accent, alignItems: 'center', paddingVertical: spacing.xl },
        ]}
      >
        <Text style={lessonTitle}>{t('studyResultTitle')}</Text>
        <Text style={[resultScore, { color: accent }]}>{t('studyResultScore', { percent })}</Text>
        <Text style={[typography.body, { color: book.inkSoft }]}>
          {t('studyResultPoints', { points })}
        </Text>
        {totalPoints !== undefined ? (
          <Text style={[typography.caption, { color: book.inkFaint }]}>
            {totalPoints} {t('points')}
          </Text>
        ) : null}
        {!onNext ? (
          <Text style={[typography.caption, { color: book.inkSoft, textAlign: 'center' }]}>
            {t('studyLevelDone')}
          </Text>
        ) : null}
      </View>
      {onNext ? (
        <Button
          label={`${t('studyNextLesson')} (${lesson.number + 1}/${lesson.total})`}
          onPress={onNext}
          style={{ backgroundColor: accent, borderColor: accent }}
        />
      ) : null}
      {percent < 100 ? (
        <Button label={t('studyRetry')} variant="secondary" onPress={onRetry} />
      ) : null}
      <Button label={t('studyBackHome')} variant="ghost" onPress={onHome} />
    </>
  );
}

function TheoryBlock({
  block,
  level,
  accent,
}: {
  block: StudyTheoryBlock;
  level: CefrLevel;
  accent: string;
}) {
  switch (block.type) {
    case 'INFO':
      return <Info block={block} accent={accent} level={level} />;
    case 'TEXT':
      return <Paragraph block={block} accent={accent} level={level} />;
    case 'VOCAB_LIST':
      return <VocabList block={block} accent={accent} />;
    case 'DIALOGUE':
      return <Dialogue block={block} accent={accent} />;
  }
}

function ExerciseView({
  block,
  number,
  level,
  accent,
  answer,
  result,
  isChecking,
  onChange,
  onCheck,
}: {
  block: StudyExerciseBlock;
  number: number;
  level: CefrLevel;
  accent: string;
  answer: BlockAnswer | undefined;
  result: StudyAnswerResultDto | undefined;
  isChecking: boolean;
  onChange: (answer: BlockAnswer) => void;
  onCheck: () => void;
}) {
  const props = {
    number,
    accent,
    answer,
    result: result?.result,
    onChange,
    onCheck,
    isChecking,
    locked: Boolean(result),
    level,
  };
  switch (block.type) {
    case 'CLOZE':
      return <Cloze block={block} {...props} />;
    case 'CHOICE':
      return <Choice block={block} {...props} />;
    case 'MATCHING':
      return <Matching block={block} {...props} />;
    case 'ORDERING':
      return <Ordering block={block} {...props} />;
  }
}

// ---------------------------------------------------------------- Helfer

/** Der Lernteil als Klartext für die KI – Tabellen zeilenweise, Wortlisten als Paare. */
function theoryText(blocks: StudyTheoryBlock[]): string {
  return blocks
    .map((block) => {
      switch (block.type) {
        case 'INFO':
          return [
            block.title,
            block.text,
            ...(block.table
              ? [block.table.headers, ...block.table.rows].map((row) =>
                  row.filter(Boolean).join(' – '),
                )
              : []),
          ]
            .filter(Boolean)
            .join('\n');
        case 'TEXT':
          return block.text;
        case 'VOCAB_LIST':
          return [
            block.title ?? '',
            ...block.items.map(
              (item) =>
                [item.article, item.term].filter(Boolean).join(' ') +
                (item.example ? ` (${item.example})` : ''),
            ),
          ]
            .filter(Boolean)
            .join('\n');
        case 'DIALOGUE':
          return [block.title ?? '', ...block.lines.map((line) => `${line.speaker}: ${line.text}`)]
            .filter(Boolean)
            .join('\n');
      }
    })
    .join('\n\n');
}

/**
 * Die Aufgabenstellungen als Klartext – Anweisung und Frage, nicht die
 * Wortkarten und Optionen: Übersetzt werden soll, was verlangt ist, nicht die
 * Lösung.
 */
function exerciseText(blocks: StudyExerciseBlock[]): string {
  return blocks
    .map((block, index) => {
      const question = block.type === 'CHOICE' && block.question ? `\n${block.question}` : '';
      return `${index + 1}. ${block.instruction}${question}`;
    })
    .join('\n');
}

// ------------------------------------------------------------------ Styles

const header = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  gap: spacing.md,
  paddingHorizontal: spacing.lg,
  paddingVertical: spacing.sm,
  backgroundColor: colors.surface,
  borderBottomWidth: 1,
  borderBottomColor: colors.border,
};

const pointsChip = {
  fontFamily: fontFamily.bold,
  fontSize: 13,
  paddingHorizontal: spacing.sm,
  paddingVertical: 2,
  borderWidth: 1,
  borderRadius: radius.full,
  overflow: 'hidden' as const,
};

const card = {
  gap: 14,
  padding: book.margin,
  backgroundColor: book.paper,
  borderWidth: 1,
  borderColor: book.paperEdge,
  borderTopWidth: 3,
  borderRadius: radius.sm,
  shadowColor: book.ink,
  shadowOpacity: 0.08,
  shadowRadius: 8,
  shadowOffset: { width: 0, height: 3 },
  elevation: 2,
};

const lessonTitle = {
  fontFamily: fontFamily.bold,
  fontSize: 22,
  lineHeight: 28,
  fontWeight: '700' as const,
  color: book.ink,
};

const translationBox = {
  gap: spacing.sm,
  padding: spacing.md,
  backgroundColor: book.tint,
  borderRadius: radius.sm,
};

const translationToggle = {
  fontFamily: fontFamily.semiBold,
  fontSize: 14,
};

const translationText = {
  fontFamily: fontFamily.regular,
  fontSize: 15,
  lineHeight: 22,
  color: book.inkSoft,
};

const bookRow = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  gap: spacing.md,
  padding: spacing.md,
  borderRadius: radius.md,
  backgroundColor: colors.surface,
  borderWidth: 1,
  borderColor: colors.border,
};

const pointsNote = {
  fontFamily: fontFamily.bold,
  fontSize: 13,
  textAlign: 'right' as const,
};

const resultScore = {
  fontFamily: fontFamily.bold,
  fontSize: 28,
  fontWeight: '700' as const,
};
