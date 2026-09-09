import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Alert, Modal, Pressable, ScrollView, Text, useWindowDimensions, View } from 'react-native';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { emptyPageContent, isExerciseBlock } from '@lingua/shared';
import type {
  BlockAnswer,
  BlockResult,
  NotebookPageContent,
  UnitAnswers,
  UnitSummaryDto,
  WorkbookBlock,
} from '@lingua/shared';
import { ErrorState, Loading } from '../../components';
import { workbookApi } from '../../api/endpoints';
import { book, bookFont, bookLabel, bookSans, spacing } from '../../theme';
import Canvas from '../notebook/Canvas';
import { BookPage, SECTION_THEME } from './BookPage';
import { BookToolbar, BookToolState, DEFAULT_BOOK_TOOL } from './BookToolbar';
import {
  AudioPlaceholder,
  Dialogue,
  Heading as HeadingBlockView,
  Info,
  Paragraph,
  VocabList,
} from './blocks/ContentBlocks';
import { Choice, Cloze, Matching, Ordering, Writing } from './blocks/ExerciseBlocks';
import type { NotebookStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<NotebookStackParamList, 'Unit'>;

const AUTOSAVE_DELAY_MS = 1200;
/** Seitenrand links und rechts neben dem Papier. */
const GUTTER = 12;

export default function UnitScreen({ route, navigation }: Props) {
  const { unitId } = route.params;
  const queryClient = useQueryClient();
  const { width: screenWidth } = useWindowDimensions();

  const [answers, setAnswers] = useState<UnitAnswers>({});
  const [results, setResults] = useState<Record<string, BlockResult>>({});
  const [checkingBlock, setCheckingBlock] = useState<string | null>(null);
  const [isDirty, setIsDirty] = useState(false);
  const [summary, setSummary] = useState<{ score: number; xp: number; correct: number; total: number } | null>(null);

  const [tool, setTool] = useState<BookToolState>(DEFAULT_BOOK_TOOL);
  const [zoom, setZoom] = useState(1);
  const [notes, setNotes] = useState<NotebookPageContent | null>(null);
  const [notesHistory, setNotesHistory] = useState<NotebookPageContent[]>([]);
  const [editingTextId, setEditingTextId] = useState<string | null>(null);
  /** Gemessene Höhe der Seite in Buch-Einheiten – die Zeichenebene muss exakt passen. */
  const [pageHeight, setPageHeight] = useState(book.pageWidth * book.pageRatio);

  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrollRef = useRef<ScrollView>(null);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['workbook-unit', unitId],
    queryFn: () => workbookApi.unit(unitId),
    gcTime: 0,
  });

  /*
    Die Reihenfolge aller Seiten des Kapitels – erst Kursbuch, dann
    Arbeitsbuch, jeweils nach Nummer (siehe workbook.service.ts). Damit lässt
    sich blättern, ohne zur Kapitelübersicht zurückzukehren. Trägt dieselbe
    Query-Kennung wie `ChapterScreen`, sodass ein dort schon geladenes Kapitel
    hier nicht erneut geholt werden muss.
  */
  const chapterId = data?.chapterId;
  const { data: chapter } = useQuery({
    queryKey: ['workbook-chapter', chapterId],
    queryFn: () => workbookApi.chapter(chapterId!),
    enabled: Boolean(chapterId),
  });

  const sequence = chapter?.units ?? [];
  const pageIndex = sequence.findIndex((unit) => unit.id === unitId);
  const previousUnit = pageIndex > 0 ? sequence[pageIndex - 1] : null;
  const nextUnit = pageIndex >= 0 && pageIndex < sequence.length - 1 ? sequence[pageIndex + 1] : null;

  const saveAnswers = useMutation({
    mutationFn: (payload: UnitAnswers) => workbookApi.saveAnswers(unitId, payload),
    onSuccess: () => setIsDirty(false),
  });

  const saveNotes = useMutation({
    mutationFn: (payload: NotebookPageContent) => workbookApi.saveAnnotations(unitId, payload),
  });

  const check = useMutation({
    mutationFn: (blockIds?: string[]) => workbookApi.check(unitId, answers, blockIds),
    onSuccess: (result, blockIds) => {
      setResults((previous) => ({
        ...previous,
        ...Object.fromEntries(result.results.map((entry) => [entry.blockId, entry])),
      }));
      setCheckingBlock(null);

      if (!blockIds) {
        setSummary({
          score: result.scorePercent,
          xp: result.xpEarned,
          correct: result.correctBlocks,
          total: result.totalBlocks,
        });
        void queryClient.invalidateQueries({ queryKey: ['workbook-chapters'] });
        void queryClient.invalidateQueries({ queryKey: ['dashboard'] });
      }
    },
    onError: (error: Error) => {
      setCheckingBlock(null);
      Alert.alert('Prüfen nicht möglich', error.message);
    },
  });

  const complete = useMutation({
    mutationFn: () => workbookApi.complete(unitId),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['workbook-chapters'] });
      // Weiter im Kapitel statt zurück zur Übersicht – nur die letzte Seite
      // eines Kapitels führt zurück, weil dort nichts mehr zum Umblättern ist.
      if (nextUnit) goToUnit(nextUnit);
      else navigation.goBack();
    },
  });

  const reset = useMutation({
    mutationFn: () => workbookApi.reset(unitId),
    onSuccess: async () => {
      setAnswers({});
      setResults({});
      setSummary(null);
      await refetch();
    },
  });

  useEffect(() => {
    if (!data) return;
    setAnswers(data.answers ?? {});
    setNotes(
      (data.annotations as NotebookPageContent | null) ??
        emptyPageContent(book.pageWidth, book.pageWidth * book.pageRatio, 'BLANK'),
    );
    // Beim Blättern bleibt die Bildschirmkomponente dieselbe – nur die
    // Route-Parameter ändern sich (siehe `goToUnit`). Alles, was zur vorigen
    // Seite gehörte, muss deshalb hier von Hand zurückgesetzt werden, sonst
    // hängt z. B. das Auswertungsfenster der letzten Seite noch auf der
    // nächsten.
    setResults({});
    setCheckingBlock(null);
    setIsDirty(false);
    setSummary(null);
    setNotesHistory([]);
    setEditingTextId(null);
    // Bis `onLayoutHeight` der neuen Seite meldet, gilt vorerst wieder die
    // DIN-A4-Standardhöhe – sonst hätte die Zeichenebene kurz die Höhe der
    // vorigen Seite.
    setPageHeight(book.pageWidth * book.pageRatio);
    scrollRef.current?.scrollTo({ y: 0, animated: false });
  }, [data?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  const flushAnswers = useCallback(() => {
    if (saveTimer.current) {
      clearTimeout(saveTimer.current);
      saveTimer.current = null;
    }
    if (isDirty) saveAnswers.mutate(answers);
  }, [answers, isDirty, saveAnswers]);

  useEffect(() => flushAnswers, [flushAnswers]);

  /** Zur angegebenen Seite des Kapitels blättern, ohne über die Kapitelübersicht zu gehen. */
  function goToUnit(unit: UnitSummaryDto): void {
    flushAnswers();
    navigation.navigate('Unit', { unitId: unit.id, title: unit.title });
  }

  function handleAnswer(blockId: string, answer: BlockAnswer) {
    const next = { ...answers, [blockId]: answer };
    setAnswers(next);
    setIsDirty(true);
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => saveAnswers.mutate(next), AUTOSAVE_DELAY_MS);
  }

  function handleNotesChange(next: NotebookPageContent) {
    setNotesHistory((previous) => (notes ? [...previous, notes].slice(-40) : previous));
    setNotes(next);
    saveNotes.mutate(next);
  }

  const exerciseBlocks = useMemo(
    () => (data ? data.content.blocks.filter(isExerciseBlock) : []),
    [data],
  );

  if (isLoading) return <Loading />;
  if (isError || !data) {
    return <ErrorState message="Die Lerneinheit konnte nicht geladen werden." onRetry={refetch} />;
  }

  const theme = SECTION_THEME[data.section];
  const isDrawing = tool.mode === 'DRAW';
  const isCourseUnit = exerciseBlocks.length === 0;
  const alreadyDone = data.status === 'COMPLETED';

  // Die Seite wird in Buch-Einheiten aufgebaut und als Ganzes auf die
  // Bildschirmbreite skaliert. Zoom vergrößert nur diesen Faktor – der Text
  // fließt dabei nicht um, die Seite bleibt Seite.
  const baseScale = (screenWidth - GUTTER * 2) / book.pageWidth;
  const scale = baseScale * zoom;

  // Nummerierung der Aufgaben über die ganze Einheit hinweg.
  let exerciseCounter = 0;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#E8E4DA' }} edges={['bottom']}>
      <ScrollView
        ref={scrollRef}
        contentContainerStyle={{ alignItems: 'center', paddingVertical: 16 }}
        showsVerticalScrollIndicator={false}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={zoom > 1}
          contentContainerStyle={{ paddingHorizontal: GUTTER }}
          scrollEnabled={zoom > 1}
        >
          {/* Skalierter Rahmen: außen die sichtbare Größe, innen Buch-Einheiten. */}
          <View
            style={{
              width: book.pageWidth * scale,
              height: pageHeight * scale,
              shadowColor: '#3F3A2F',
              shadowOpacity: 0.18,
              shadowRadius: 14,
              shadowOffset: { width: 0, height: 6 },
              elevation: 5,
            }}
          >
            {/*
              Skalierung mit Ursprung oben links. `transformOrigin` setzt
              react-native-web nicht zuverlässig um, deshalb wird der Versatz
              der mittigen Standardskalierung selbst herausgerechnet: Der erste
              Eintrag im Array wirkt zuletzt, die Verschiebung zählt also in
              unskalierten Elternkoordinaten.
            */}
            <View
              style={{
                width: book.pageWidth,
                height: pageHeight,
                transform: [
                  { translateX: -(book.pageWidth * (1 - scale)) / 2 },
                  { translateY: -(pageHeight * (1 - scale)) / 2 },
                  { scale },
                ],
              }}
            >
              <BookPage
                section={data.section}
                chapterTitle={data.chapterTitle}
                level={data.level}
                chapterOrder={data.chapterOrder}
                unitTitle={data.title}
                unitSubtitle={data.subtitle}
                pageNumber={data.order}
                onLayoutHeight={setPageHeight}
              >
                {data.content.blocks.map((block) => {
                  if (isExerciseBlock(block)) exerciseCounter += 1;
                  return (
                    <BlockView
                      key={block.id}
                      block={block}
                      number={exerciseCounter}
                      accent={theme.accent}
                      answer={answers[block.id]}
                      result={results[block.id]}
                      isChecking={checkingBlock === block.id}
                      locked={isDrawing}
                      onChange={(answer) => handleAnswer(block.id, answer)}
                      onCheck={() => {
                        flushAnswers();
                        setCheckingBlock(block.id);
                        check.mutate([block.id]);
                      }}
                    />
                  );
                })}

                <PageActions
                  accent={theme.accent}
                  isCourseUnit={isCourseUnit}
                  alreadyDone={alreadyDone}
                  hasResults={Object.keys(results).length > 0}
                  answeredCount={exerciseBlocks.filter((b) => answers[b.id]).length}
                  totalCount={exerciseBlocks.length}
                  locked={isDrawing}
                  isSubmitting={check.isPending && checkingBlock === null}
                  isCompleting={complete.isPending}
                  onSubmit={() => {
                    flushAnswers();
                    check.mutate(undefined);
                  }}
                  onComplete={() => complete.mutate()}
                  onReset={() =>
                    Alert.alert('Zurücksetzen?', 'Alle Antworten dieser Seite werden gelöscht.', [
                      { text: 'Abbrechen', style: 'cancel' },
                      { text: 'Zurücksetzen', style: 'destructive', onPress: () => reset.mutate() },
                    ])
                  }
                />
              </BookPage>

              {/* Zeichenebene exakt über der Seite. Im Bearbeiten-Modus lässt sie
                  alle Berührungen zu den Aufgabenfeldern durch. */}
              {notes ? (
                <View
                  pointerEvents={isDrawing ? 'auto' : 'none'}
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: book.pageWidth,
                    height: pageHeight,
                  }}
                >
                  <Canvas
                    content={{ ...notes, width: book.pageWidth, height: pageHeight }}
                    tool={{ kind: tool.kind, color: tool.color, width: tool.width, fontSize: tool.fontSize }}
                    onChange={handleNotesChange}
                    editingTextId={editingTextId}
                    onEditText={setEditingTextId}
                    transparent
                    externalScale={scale}
                  />
                </View>
              ) : null}
            </View>
          </View>
        </ScrollView>

        <StatusLine
          saving={saveAnswers.isPending}
          dirty={isDirty}
          drawing={isDrawing}
          zoom={zoom}
        />
      </ScrollView>

      <BookToolbar
        tool={tool}
        onChange={setTool}
        zoom={zoom}
        onZoom={setZoom}
        canUndo={notesHistory.length > 0}
        hasNotes={Boolean(notes?.elements.length)}
        page={
          sequence.length > 0
            ? {
                index: pageIndex,
                total: sequence.length,
                accent: theme.accent,
                hasPrevious: Boolean(previousUnit),
                hasNext: Boolean(nextUnit),
                nextSectionLabel:
                  nextUnit && nextUnit.section !== data.section
                    ? SECTION_THEME[nextUnit.section].label
                    : null,
                onPrevious: () => previousUnit && goToUnit(previousUnit),
                onNext: () => nextUnit && goToUnit(nextUnit),
              }
            : null
        }
        onUndo={() => {
          const previous = notesHistory[notesHistory.length - 1];
          if (!previous) return;
          setNotesHistory((history) => history.slice(0, -1));
          setNotes(previous);
          saveNotes.mutate(previous);
        }}
        onClear={() => {
          if (!notes) return;
          Alert.alert('Notizen löschen?', 'Ihre Stiftnotizen auf dieser Seite werden entfernt.', [
            { text: 'Abbrechen', style: 'cancel' },
            {
              text: 'Löschen',
              style: 'destructive',
              onPress: () => handleNotesChange({ ...notes, elements: [] }),
            },
          ]);
        }}
      />

      <SummaryModal
        summary={summary}
        nextUnit={nextUnit}
        onClose={() => setSummary(null)}
        onNext={(unit) => {
          setSummary(null);
          goToUnit(unit);
        }}
      />
    </SafeAreaView>
  );
}

// ------------------------------------------------------- Aktionen am Seitenende

function PageActions({
  accent,
  isCourseUnit,
  alreadyDone,
  hasResults,
  answeredCount,
  totalCount,
  locked,
  isSubmitting,
  isCompleting,
  onSubmit,
  onComplete,
  onReset,
}: {
  accent: string;
  isCourseUnit: boolean;
  alreadyDone: boolean;
  hasResults: boolean;
  answeredCount: number;
  totalCount: number;
  locked: boolean;
  isSubmitting: boolean;
  isCompleting: boolean;
  onSubmit: () => void;
  onComplete: () => void;
  onReset: () => void;
}) {
  return (
    <View style={{ marginTop: 24, gap: 16 }}>
      <View style={{ height: 1, backgroundColor: book.rule }} />

      {isCourseUnit ? (
        <Pressable
          onPress={onComplete}
          disabled={alreadyDone || isCompleting || locked}
          style={[primaryAction, { backgroundColor: accent }, (alreadyDone || locked) && { opacity: 0.45 }]}
        >
          <Text style={primaryActionText}>
            {alreadyDone ? 'Durchgearbeitet' : isCompleting ? 'Speichert …' : 'Seite durchgearbeitet'}
          </Text>
        </Pressable>
      ) : (
        <>
          <Text style={progressNote}>
            {answeredCount} von {totalCount} Aufgaben bearbeitet
          </Text>
          <Pressable
            onPress={onSubmit}
            disabled={answeredCount === 0 || isSubmitting || locked}
            style={[
              primaryAction,
              { backgroundColor: accent },
              (answeredCount === 0 || locked) && { opacity: 0.45 },
            ]}
          >
            <Text style={primaryActionText}>
              {isSubmitting ? 'Wird ausgewertet …' : 'Alle Aufgaben kontrollieren'}
            </Text>
          </Pressable>

          {(alreadyDone || hasResults) && (
            <Pressable onPress={onReset} disabled={locked} style={secondaryAction}>
              <Text style={secondaryActionText}>Seite zurücksetzen</Text>
            </Pressable>
          )}
        </>
      )}
    </View>
  );
}

function StatusLine({
  saving,
  dirty,
  drawing,
  zoom,
}: {
  saving: boolean;
  dirty: boolean;
  drawing: boolean;
  zoom: number;
}) {
  return (
    <View style={statusLine}>
      <Text style={statusText}>
        {saving ? 'Speichert …' : dirty ? 'Nicht gespeichert' : 'Gespeichert'}
        {drawing ? '  ·  Stiftmodus aktiv' : ''}
        {zoom !== 1 ? `  ·  ${Math.round(zoom * 100)} %` : ''}
      </Text>
    </View>
  );
}

// -------------------------------------------------------------- Blockwahl

function BlockView({
  block,
  number,
  accent,
  answer,
  result,
  isChecking,
  locked,
  onChange,
  onCheck,
}: {
  block: WorkbookBlock;
  number: number;
  accent: string;
  answer?: BlockAnswer;
  result?: BlockResult;
  isChecking: boolean;
  locked: boolean;
  onChange: (answer: BlockAnswer) => void;
  onCheck: () => void;
}) {
  const exercise = { number, accent, answer, result, onChange, onCheck, isChecking, locked };

  switch (block.type) {
    case 'HEADING':
      return <HeadingBlockView block={block} accent={accent} />;
    case 'TEXT':
      return <Paragraph block={block} accent={accent} />;
    case 'INFO':
      return <Info block={block} accent={accent} />;
    case 'VOCAB_LIST':
      return <VocabList block={block} accent={accent} />;
    case 'DIALOGUE':
      return <Dialogue block={block} accent={accent} />;
    case 'AUDIO':
      return <AudioPlaceholder block={block} accent={accent} />;
    case 'IMAGE':
      return null;
    case 'CLOZE':
      return <Cloze block={block} {...exercise} />;
    case 'CHOICE':
      return <Choice block={block} {...exercise} />;
    case 'MATCHING':
      return <Matching block={block} {...exercise} />;
    case 'ORDERING':
      return <Ordering block={block} {...exercise} />;
    case 'WRITING':
      return <Writing block={block} {...exercise} />;
    default:
      return null;
  }
}

function SummaryModal({
  summary,
  nextUnit,
  onClose,
  onNext,
}: {
  summary: { score: number; xp: number; correct: number; total: number } | null;
  nextUnit: UnitSummaryDto | null;
  onClose: () => void;
  onNext: (unit: UnitSummaryDto) => void;
}) {
  if (!summary) return null;
  const good = summary.score >= 80;

  /*
    Die Auswertung ist als eingeklebter Korrekturzettel gedacht: Kopfzeile,
    Trennlinie, die Punktzahl gesetzt wie eine Note. Kein Konfetti – ein
    Lehrwerk feiert nicht, es gibt zurück.
  */
  return (
    <Modal visible transparent animationType="fade" onRequestClose={onClose}>
      <View style={overlay}>
        <View style={summaryCard}>
          <Text style={summaryEyebrow}>Auswertung</Text>
          <View style={summaryRule} />

          <Text style={[summaryScore, { color: good ? book.correct : book.attention }]}>
            {summary.score} %
          </Text>
          <Text style={summaryTitle}>
            {summary.correct} von {summary.total} Aufgaben richtig
          </Text>

          {summary.xp > 0 ? (
            <Text style={summaryXp}>+{summary.xp} XP</Text>
          ) : (
            <Text style={progressNote}>Wiederholung – keine weiteren XP</Text>
          )}

          <View style={summaryRule} />
          <Text style={[progressNote, { textAlign: 'center' }]}>
            {good
              ? nextUnit
                ? 'Sehr gut. Weiter zur nächsten Seite.'
                : 'Sehr gut. Das war die letzte Seite des Kapitels.'
              : 'Sehen Sie sich die Korrekturen an und versuchen Sie es noch einmal.'}
          </Text>

          <Pressable
            onPress={() => (nextUnit ? onNext(nextUnit) : onClose())}
            style={[primaryAction, { backgroundColor: book.ink }]}
          >
            <Text style={primaryActionText}>{nextUnit ? 'Nächste Seite' : 'Fertig'}</Text>
          </Pressable>

          {nextUnit ? (
            <Pressable onPress={onClose} hitSlop={8}>
              <Text style={secondaryActionText}>Auf dieser Seite bleiben</Text>
            </Pressable>
          ) : null}
        </View>
      </View>
    </Modal>
  );
}

// ------------------------------------------------------------------ Styles

const primaryAction = {
  minHeight: 54,
  borderRadius: 2,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  paddingHorizontal: 24,
};

const primaryActionText = {
  fontFamily: bookSans,
  color: '#FFFFFF',
  fontSize: 18,
  fontWeight: '700' as const,
  letterSpacing: 0.6,
};

const secondaryAction = {
  alignSelf: 'center' as const,
  paddingVertical: 10,
  paddingHorizontal: 16,
};

const secondaryActionText = {
  fontFamily: bookSans,
  fontSize: 16,
  color: book.inkSoft,
  textDecorationLine: 'underline' as const,
};

const progressNote = {
  fontFamily: bookFont,
  fontSize: 17,
  lineHeight: 26,
  color: book.inkSoft,
  textAlign: 'center' as const,
};

const statusLine = {
  paddingTop: spacing.md,
  paddingBottom: spacing.sm,
  alignItems: 'center' as const,
};

const statusText = {
  fontFamily: bookSans,
  fontSize: 12,
  letterSpacing: 0.6,
  color: book.inkFaint,
};

const overlay = {
  flex: 1,
  backgroundColor: 'rgba(31, 27, 22, 0.55)',
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  padding: spacing.lg,
};

const summaryCard = {
  width: '100%' as const,
  maxWidth: 340,
  backgroundColor: book.paper,
  borderWidth: 1,
  borderColor: book.paperEdge,
  padding: spacing.xl,
  alignItems: 'center' as const,
  gap: spacing.md,
};

const summaryEyebrow = {
  ...bookLabel,
  color: book.inkFaint,
};

const summaryRule = {
  height: 1,
  alignSelf: 'stretch' as const,
  backgroundColor: book.rule,
};

const summaryTitle = {
  fontFamily: bookFont,
  fontSize: 20,
  lineHeight: 28,
  color: book.ink,
  textAlign: 'center' as const,
};

const summaryScore = {
  fontFamily: bookFont,
  fontSize: 52,
  lineHeight: 60,
  fontWeight: '700' as const,
};

const summaryXp = {
  fontFamily: bookSans,
  fontSize: 17,
  fontWeight: '700' as const,
  letterSpacing: 0.6,
  color: book.inkSoft,
};
