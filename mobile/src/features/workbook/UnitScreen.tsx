import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Modal, Pressable, ScrollView, Text, View } from 'react-native';
import { alert } from '../../utils/alert';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { emptyPageContent, isExerciseBlock } from '@lingua/shared';
import type {
  BlockAnswer,
  BlockResult,
  CefrLevel,
  NotebookPageContent,
  UnitAnswers,
  UnitSummaryDto,
  WorkbookBlock,
} from '@lingua/shared';
import { ErrorState, Loading } from '../../components';
import { workbookApi } from '../../api/endpoints';
import { CACHE } from '../../api/query-client';
import { useTranslation } from '../../i18n';
import { book, bookFont, bookLabel, bookSans, colors, spacing } from '../../theme';
import Canvas from '../notebook/Canvas';
import { DEFAULT_TOOL, ToolDock, ToolState } from '../notebook/ToolDock';
import { BookPage, bookTheme } from './BookPage';
import type { PageFooterNav } from './BookPage';
import { useContentWidth } from '../../navigation/WebLayout';
import {
  AudioPlaceholder,
  Dialogue,
  Heading as HeadingBlockView,
  Info,
  Paragraph,
  SceneImage,
  VocabList,
} from './blocks/ContentBlocks';
import { Choice, Cloze, Matching, Ordering, Writing } from './blocks/ExerciseBlocks';
import type { NotebookStackParamList } from '../../navigation/types';
import { TranslateLayer } from '../translate/TranslateLayer';
import { useTranslateHeaderButton } from '../translate/TranslateButton';

type Props = NativeStackScreenProps<NotebookStackParamList, 'Unit'>;

const AUTOSAVE_DELAY_MS = 1200;
/** Seitenrand links und rechts neben dem Papier. */
const GUTTER = 10;
/** Platz unter der Seite, damit der Werkzeugkasten nichts verdeckt. */
const DOCK_SPACE = 88;

/**
 * Eine Seite des Lernhefts.
 *
 * Die Seite fließt in der Breite des Geräts und ist in echten Gerätepunkten
 * gesetzt (siehe `BookPage`) – kein verkleinertes A4-Blatt mehr, deshalb auch
 * kein Zoom, kein seitliches Schieben und keine Prozentanzeige. Wer allein mit
 * der App übt, soll die Aufgabe lesen, ausfüllen und weiterblättern können,
 * ohne vorher an der Darstellung zu arbeiten.
 *
 * Zum Schreiben mit dem Stift liegt eine Zeichenebene exakt über der Seite.
 * Sie wird über den Werkzeugkasten unten links aktiviert; solange kein
 * Werkzeug in der Hand ist, lässt sie alle Berührungen zu den Aufgabenfeldern
 * durch.
 */
export default function UnitScreen({ route, navigation }: Props) {
  const { unitId } = route.params;
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const translator = useTranslateHeaderButton(navigation);

  // Verfügbare Breite des Anzeigebereichs – im Web die von `WebLayout`
  // gemessene Spalte statt der vollen Fensterbreite (siehe dort für den
  // Hintergrund: ein `onLayout` an dieser Stelle würde, weil die Einheit
  // mehrere Ebenen tief in einem Stack-Navigator liegt, die volle
  // Fensterbreite melden statt der tatsächlich verfügbaren Spalte).
  const pageWidth = useContentWidth() - GUTTER * 2;

  const [answers, setAnswers] = useState<UnitAnswers>({});
  const [results, setResults] = useState<Record<string, BlockResult>>({});
  const [checkingBlock, setCheckingBlock] = useState<string | null>(null);
  const [isDirty, setIsDirty] = useState(false);
  const [summary, setSummary] = useState<{ score: number; xp: number; correct: number; total: number } | null>(null);

  const [tool, setTool] = useState<ToolState>(DEFAULT_TOOL);
  const [notes, setNotes] = useState<NotebookPageContent | null>(null);
  const [notesHistory, setNotesHistory] = useState<NotebookPageContent[]>([]);
  const [editingTextId, setEditingTextId] = useState<string | null>(null);
  /** Gemessene Höhe der Seite in Gerätepunkten – die Zeichenebene muss exakt passen. */
  const [pageHeight, setPageHeight] = useState(0);

  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrollRef = useRef<ScrollView>(null);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['workbook-unit', unitId],
    staleTime: CACHE.PROGRESS,
    queryFn: () => workbookApi.unit(unitId),
    gcTime: 0,
  });

  /*
    Die Seiten des Kapitels der Reihe nach. Damit lässt sich blättern, ohne
    ins Inhaltsverzeichnis zurückzukehren – und weil Erklärung und Übung
    inzwischen auf derselben Seite stehen, führt das Blättern auch nicht mehr
    über die Grenze zwischen zwei Buchteilen.
  */
  const chapterId = data?.chapterId;
  const { data: chapter } = useQuery({
    queryKey: ['workbook-chapter', chapterId],
    staleTime: CACHE.CONTENT,
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
        void queryClient.invalidateQueries({ queryKey: ['workbook-books'] });
        void queryClient.invalidateQueries({ queryKey: ['workbook-book'] });
        void queryClient.invalidateQueries({ queryKey: ['dashboard'] });
      }
    },
    onError: (error: Error) => {
      setCheckingBlock(null);
      alert(t('pageCheckFailedTitle'), error.message);
    },
  });

  const complete = useMutation({
    mutationFn: () => workbookApi.complete(unitId),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['workbook-books'] });
      void queryClient.invalidateQueries({ queryKey: ['workbook-book'] });
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
    // Bis `onLayoutHeight` der neuen Seite ihre Höhe meldet, bekommt die
    // Zeichenebene keine – sonst läge sie kurz in der Höhe der vorigen Seite
    // über dem neuen Text.
    setPageHeight(0);
    scrollRef.current?.scrollTo({ y: 0, animated: false });
  }, [data?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  const flushAnswers = useCallback(() => {
    if (saveTimer.current) {
      clearTimeout(saveTimer.current);
      saveTimer.current = null;
    }
    if (isDirty) saveAnswers.mutate(answers);
  }, [answers, isDirty, saveAnswers]);

  /*
    Beim Verlassen der Seite wird ein ausstehendes Speichern sofort ausgeführt.

    Der Effekt hat bewusst keine Abhängigkeiten und holt sich die jeweils
    aktuelle Fassung von `flushAnswers` über eine Ref. Vorher stand hier
    `useEffect(() => flushAnswers, [flushAnswers])` – der Rückgabewert eines
    Effekts ist seine Aufräumfunktion, und `flushAnswers` änderte seine Identität bei
    jedem Rendern, weil `useMutation` sein Ergebnis als frisches Objekt zurückgibt
    (`{ ...result, mutate }`, siehe @tanstack/react-query). Damit lief das
    „Aufräumen" nach jedem Rendern statt beim Verlassen: Speichern →
    Zustandswechsel der Mutation → Rendern → wieder speichern. React brach
    diese Schleife nach 50 Durchläufen mit „Maximum update depth exceeded" ab.
    Nebenbei löschte sie bei jedem Rendern den Timer, sodass die Verzögerung
    des Autosave nie ablief.
  */
  const flushRef = useRef(flushAnswers);
  flushRef.current = flushAnswers;
  useEffect(() => () => flushRef.current(), []);

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

  /**
   * Gemessene Seitenhöhe übernehmen – aber nur bei echter Änderung.
   *
   * `onLayout` meldet sich nach jedem Layoutdurchgang; ein Zustandswechsel auf
   * denselben Zahlwert bricht React von selbst ab, ein neuer Wert pro Meldung
   * würde dagegen Messen und Rendern gegenseitig antreiben. Der Millimeter
   * Toleranz fängt zusätzlich das Pixelrunden von Android ab.
   */
  const handlePageHeight = useCallback((height: number) => {
    setPageHeight((current) => (Math.abs(current - height) < 1 ? current : height));
  }, []);

  /*
    Der Inhalt der Zeichenebene als ein Objekt, das sich nur ändert, wenn sich
    wirklich etwas geändert hat: Ein bei jedem Rendern neu gebautes Objekt
    hätte die Ebene jedes Mal für „neu" gehalten und sie unnötig komplett neu
    zeichnen lassen. Die Höhe rechnet die gemessene Seitenhöhe in das feste
    Notiz-Koordinatensystem um (siehe `book.pageWidth`).
  */
  const notesContent = useMemo(
    () =>
      notes && pageHeight > 0 && pageWidth > 0
        ? {
            ...notes,
            width: book.pageWidth,
            height: (pageHeight / pageWidth) * book.pageWidth,
          }
        : null,
    [notes, pageHeight, pageWidth],
  );

  if (isLoading) return <Loading />;
  if (isError || !data) {
    return <ErrorState message={t('unitError')} onRetry={refetch} />;
  }

  const theme = bookTheme(data.book);
  const isDrawing = tool.mode === 'DRAW';
  // Eine Seite ganz ohne Aufgaben – im Lehrwerk selten, aber möglich.
  const isReadingPage = exerciseBlocks.length === 0;
  const alreadyDone = data.status === 'COMPLETED';

  // Nummerierung der Aufgaben über die ganze Einheit hinweg.
  let exerciseCounter = 0;

  // Blättern gehört ans Ende der Seite (siehe BookPage) statt in die
  // Werkzeugleiste – ein Buch blättert man am Seitenende um, nicht über ein
  // Bedienpanel daneben.
  const pageNav: PageFooterNav | undefined =
    sequence.length > 0
      ? {
          index: pageIndex,
          total: sequence.length,
          accent: theme.accent,
          hasPrevious: Boolean(previousUnit),
          hasNext: Boolean(nextUnit),
          onPrevious: () => previousUnit && goToUnit(previousUnit),
          onNext: () => nextUnit && goToUnit(nextUnit),
        }
      : undefined;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={['bottom']}>
      <ScrollView
        ref={scrollRef}
        contentContainerStyle={{ padding: GUTTER, paddingBottom: DOCK_SPACE }}
        showsVerticalScrollIndicator={false}
        // Im Stiftmodus darf die Seite nicht unter der Hand wegrutschen.
        scrollEnabled={!isDrawing}
      >
        <View style={{ width: pageWidth, ...paperShadow }}>
          <BookPage
            book={data.book}
            chapterTitle={data.chapterTitle}
            level={data.level}
            chapterOrder={data.chapterOrder}
            unitTitle={data.title}
            unitSubtitle={data.subtitle}
            pageNumber={data.order}
            nav={pageNav}
            onLayoutHeight={handlePageHeight}
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
                  level={data.level}
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
              isReadingPage={isReadingPage}
              alreadyDone={alreadyDone}
              hasResults={Object.keys(results).length > 0}
              allChecked={exerciseBlocks.length > 0 && exerciseBlocks.every((b) => results[b.id])}
              hasNext={Boolean(nextUnit)}
              onNext={() => (nextUnit ? goToUnit(nextUnit) : navigation.goBack())}
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
                alert(t('pageResetTitle'), t('pageResetBody'), [
                  { text: t('commonCancel'), style: 'cancel' },
                  { text: t('pageReset'), style: 'destructive', onPress: () => reset.mutate() },
                ])
              }
            />
          </BookPage>

          {/*
            Zeichenebene exakt über der Seite. Gespeichert wird in einem festen
            Koordinatensystem (`book.pageWidth`), damit dieselbe Notiz auf
            Telefon und Tablet an derselben Stelle über demselben Wort sitzt –
            deshalb rechnet die Höhe die gemessene Seitenhöhe in dieses System
            um. Ohne Werkzeug in der Hand lässt die Ebene alle Berührungen zu
            den Aufgabenfeldern durch.
          */}
          {notesContent ? (
            <View
              pointerEvents={isDrawing ? 'auto' : 'none'}
              style={{ position: 'absolute', left: 0, top: 0, width: pageWidth, height: pageHeight }}
            >
              <Canvas
                content={notesContent}
                tool={tool}
                onChange={handleNotesChange}
                editingTextId={editingTextId}
                onEditText={setEditingTextId}
                transparent
              />
            </View>
          ) : null}
        </View>

        <Text style={saveNote}>
          {saveAnswers.isPending
            ? t('commonSaving')
            : isDirty
              ? t('commonUnsaved')
              : t('commonSaved')}
        </Text>
      </ScrollView>

      <ToolDock
        tool={tool}
        onChange={setTool}
        tools={['PEN', 'HIGHLIGHTER', 'ERASER']}
        clearLabel={t('pageClearNotes')}
        canUndo={notesHistory.length > 0}
        canClear={Boolean(notes?.elements.length)}
        onUndo={() => {
          const previous = notesHistory[notesHistory.length - 1];
          if (!previous) return;
          setNotesHistory((history) => history.slice(0, -1));
          setNotes(previous);
          saveNotes.mutate(previous);
        }}
        onClear={() => {
          if (!notes) return;
          alert(t('pageClearNotesTitle'), t('pageClearNotesBody'), [
            { text: t('commonCancel'), style: 'cancel' },
            {
              text: t('commonDelete'),
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

      <TranslateLayer ref={translator} />
    </SafeAreaView>
  );
}

// ------------------------------------------------------- Aktionen am Seitenende

function PageActions({
  accent,
  isReadingPage,
  alreadyDone,
  hasResults,
  allChecked,
  hasNext,
  answeredCount,
  totalCount,
  locked,
  isSubmitting,
  isCompleting,
  onSubmit,
  onNext,
  onComplete,
  onReset,
}: {
  accent: string;
  isReadingPage: boolean;
  alreadyDone: boolean;
  hasResults: boolean;
  /** Alle Aufgaben der Seite sind kontrolliert – dann ist Weiterblättern der nächste Schritt. */
  allChecked: boolean;
  hasNext: boolean;
  answeredCount: number;
  totalCount: number;
  locked: boolean;
  isSubmitting: boolean;
  isCompleting: boolean;
  onSubmit: () => void;
  onNext: () => void;
  onComplete: () => void;
  onReset: () => void;
}) {
  const { t } = useTranslation();

  return (
    <View style={{ marginTop: 6, gap: 12 }}>
      <View style={{ height: 1, backgroundColor: book.rule }} />

      {isReadingPage ? (
        <Pressable
          onPress={onComplete}
          disabled={alreadyDone || isCompleting || locked}
          style={[primaryAction, { backgroundColor: accent }, (alreadyDone || locked) && { opacity: 0.45 }]}
        >
          <Text style={primaryActionText}>
            {alreadyDone
              ? t('pageAlreadyWorkedThrough')
              : isCompleting
                ? t('commonSaving')
                : t('pageWorkedThrough')}
          </Text>
        </Pressable>
      ) : (
        <>
          <Text style={progressNote}>
            {allChecked
              ? t('pageAllChecked')
              : t('pageAnsweredOf', { answered: answeredCount, total: totalCount })}
          </Text>

          {/*
            Immer genau ein nächster Schritt: solange noch etwas offen ist,
            kontrollieren – danach weiterblättern. Zwei gleichwertige Knöpfe
            nebeneinander hätten den Nutzer vor eine Wahl gestellt, die er gar
            nicht zu treffen hat.
          */}
          {allChecked ? (
            <Pressable
              onPress={onNext}
              disabled={locked}
              style={[primaryAction, { backgroundColor: accent }, locked && { opacity: 0.45 }]}
            >
              <Text style={primaryActionText}>
                {hasNext ? t('pageNext') : t('pageBackToContents')}
              </Text>
            </Pressable>
          ) : (
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
                {isSubmitting ? t('pageEvaluating') : t('pageCheckAll')}
              </Text>
            </Pressable>
          )}

          {(alreadyDone || hasResults) && (
            <Pressable onPress={onReset} disabled={locked} style={secondaryAction}>
              <Text style={secondaryActionText}>{t('pageResetAction')}</Text>
            </Pressable>
          )}
        </>
      )}
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
  level,
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
  level: CefrLevel;
  onChange: (answer: BlockAnswer) => void;
  onCheck: () => void;
}) {
  const exercise = { number, accent, answer, result, onChange, onCheck, isChecking, locked, level };

  switch (block.type) {
    case 'HEADING':
      return <HeadingBlockView block={block} accent={accent} />;
    case 'TEXT':
      return <Paragraph block={block} accent={accent} level={level} />;
    case 'INFO':
      return <Info block={block} accent={accent} level={level} />;
    case 'VOCAB_LIST':
      return <VocabList block={block} accent={accent} />;
    case 'DIALOGUE':
      return <Dialogue block={block} accent={accent} />;
    case 'AUDIO':
      return <AudioPlaceholder block={block} accent={accent} />;
    case 'IMAGE':
      return <SceneImage block={block} accent={accent} />;
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
  const { t } = useTranslation();
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
          <Text style={summaryEyebrow}>{t('pageSummaryEyebrow')}</Text>
          <View style={summaryRule} />

          <Text style={[summaryScore, { color: good ? book.correct : book.attention }]}>
            {summary.score} %
          </Text>
          <Text style={summaryTitle}>
            {t('pageSummaryCorrectOf', { correct: summary.correct, total: summary.total })}
          </Text>

          {summary.xp > 0 ? (
            <Text style={summaryXp}>+{summary.xp} XP</Text>
          ) : (
            <Text style={progressNote}>{t('pageSummaryNoXp')}</Text>
          )}

          <View style={summaryRule} />
          <Text style={[progressNote, { textAlign: 'center' }]}>
            {good
              ? nextUnit
                ? t('pageSummaryGoodNext')
                : t('pageSummaryGoodLast')
              : t('pageSummaryTryAgain')}
          </Text>

          <Pressable
            onPress={() => (nextUnit ? onNext(nextUnit) : onClose())}
            style={[primaryAction, { backgroundColor: book.ink, alignSelf: 'stretch' }]}
          >
            <Text style={primaryActionText}>{nextUnit ? t('pageNext') : t('commonDone')}</Text>
          </Pressable>

          {nextUnit ? (
            <Pressable onPress={onClose} hitSlop={8}>
              <Text style={secondaryActionText}>{t('pageSummaryStay')}</Text>
            </Pressable>
          ) : null}
        </View>
      </View>
    </Modal>
  );
}

// ------------------------------------------------------------------ Styles

/** Das Blatt wirft einen kurzen Schatten – es liegt auf dem Tisch, es ist nicht der Tisch. */
const paperShadow = {
  shadowColor: book.ink,
  shadowOpacity: 0.12,
  shadowRadius: 10,
  shadowOffset: { width: 0, height: 4 },
  elevation: 3,
};

const primaryAction = {
  minHeight: 48,
  borderRadius: 2,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  paddingHorizontal: 20,
};

const primaryActionText = {
  fontFamily: bookSans,
  color: '#FFFFFF',
  fontSize: 16,
  fontWeight: '700' as const,
  letterSpacing: 0.5,
};

const secondaryAction = {
  alignSelf: 'center' as const,
  paddingVertical: 8,
  paddingHorizontal: 12,
};

const secondaryActionText = {
  fontFamily: bookSans,
  fontSize: 14,
  color: book.inkSoft,
  textDecorationLine: 'underline' as const,
};

const progressNote = {
  fontFamily: bookFont,
  fontSize: 15,
  lineHeight: 22,
  color: book.inkSoft,
  textAlign: 'center' as const,
};

/** Speicherstand: eine Zeile unter dem Blatt, so leise wie möglich. */
const saveNote = {
  ...bookLabel,
  fontSize: 10,
  letterSpacing: 1.2,
  color: book.inkFaint,
  textAlign: 'center' as const,
  paddingTop: spacing.md,
};

const overlay = {
  flex: 1,
  backgroundColor: 'rgba(13, 13, 13, 0.55)',
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
  fontSize: 11,
  color: book.inkFaint,
};

const summaryRule = {
  height: 1,
  alignSelf: 'stretch' as const,
  backgroundColor: book.rule,
};

const summaryTitle = {
  fontFamily: bookFont,
  fontSize: 18,
  lineHeight: 26,
  color: book.ink,
  textAlign: 'center' as const,
};

const summaryScore = {
  fontFamily: bookFont,
  fontSize: 46,
  lineHeight: 54,
  fontWeight: '700' as const,
};

const summaryXp = {
  fontFamily: bookSans,
  fontSize: 15,
  fontWeight: '700' as const,
  letterSpacing: 0.5,
  color: book.inkSoft,
};
