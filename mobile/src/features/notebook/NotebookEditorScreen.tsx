import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Modal, Pressable, ScrollView, Text, View } from 'react-native';
import { alert } from '../../utils/alert';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NotebookAnalysisDto, NotebookPageContent } from '@lingua/shared';
import { extractPlainText } from '@lingua/shared';
import { Body, Button, Caption, Card, ErrorState, Heading, Loading, Row, Title } from '../../components';
import { notebookApi } from '../../api/endpoints';
import { useTranslation } from '../../i18n';
import { book, bookFont, bookLabel, bookSans, colors, spacing, typography } from '../../theme';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CrossMark,
  PlusIcon,
  SparkMark,
} from '../workbook/BookIcons';
import Canvas from './Canvas';
import { DEFAULT_TOOL, ToolDock, ToolState } from './ToolDock';
import type { StudyStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<StudyStackParamList, 'NotebookEditor'>;

/** Wartezeit nach der letzten Änderung, bevor gespeichert wird. */
const AUTOSAVE_DELAY_MS = 1500;
/** Tiefe der lokalen Rückgängig-Historie. */
const HISTORY_LIMIT = 40;
/** Seitenrand links und rechts neben dem Papier. */
const GUTTER = 10;
/** Platz unter der Seite, damit der Werkzeugkasten nichts verdeckt. */
const DOCK_SPACE = 88;

/**
 * Das eigene Notizheft.
 *
 * Der Bildschirm zeigt vor allem eins: die Seite. Alles, was vorher darum
 * herum stand – eine zweireihige Werkzeugleiste unten, drei Knöpfe zum
 * Blättern, eine ganze Karte für die KI-Korrektur – ist auf eine Fußzeile und
 * eine einzelne Zeile zusammengeschrumpft. Die Stifte liegen unten links
 * bereit (siehe `ToolDock`), sonst ist da Papier.
 */
export default function NotebookEditorScreen({ route }: Props) {
  const { notebookId } = route.params;
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const [pageIndex, setPageIndex] = useState(0);
  const [content, setContent] = useState<NotebookPageContent | null>(null);
  const [tool, setTool] = useState<ToolState>(DEFAULT_TOOL);
  const [editingTextId, setEditingTextId] = useState<string | null>(null);
  const [history, setHistory] = useState<NotebookPageContent[]>([]);
  const [isDirty, setIsDirty] = useState(false);
  const [analysis, setAnalysis] = useState<NotebookAnalysisDto | null>(null);

  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pages = useQuery({
    queryKey: ['notebook-pages', notebookId],
    queryFn: () => notebookApi.pages(notebookId),
  });

  const currentPage = pages.data?.[pageIndex];

  const savePage = useMutation({
    mutationFn: (payload: { pageId: string; content: NotebookPageContent }) =>
      notebookApi.savePage(payload.pageId, { content: payload.content }),
    onSuccess: () => setIsDirty(false),
  });

  const addPage = useMutation({
    mutationFn: () => notebookApi.createPage(notebookId),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['notebook-pages', notebookId] });
      setPageIndex((pages.data?.length ?? 1) - 0);
    },
  });

  const analyze = useMutation({
    mutationFn: (pageId: string) => notebookApi.analyze(pageId),
    onSuccess: (result) => setAnalysis(result),
    onError: (error: Error & { code?: string }) => {
      alert(
        error.code === 'AiQuotaExceeded' ? t('editorQuotaExceeded') : t('editorAnalysisFailed'),
        error.message,
      );
    },
  });

  // Seitenwechsel: den Inhalt der neuen Seite in den lokalen Zustand übernehmen.
  useEffect(() => {
    if (!currentPage) return;
    setContent(currentPage.content);
    setHistory([]);
    setIsDirty(false);
    setEditingTextId(null);
  }, [currentPage?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  const flushSave = useCallback(() => {
    if (saveTimer.current) {
      clearTimeout(saveTimer.current);
      saveTimer.current = null;
    }
    if (currentPage && content && isDirty) {
      savePage.mutate({ pageId: currentPage.id, content });
    }
  }, [currentPage, content, isDirty, savePage]);

  /*
    Beim Verlassen der Seite wird ein ausstehendes Speichern sofort ausgeführt.

    Der Effekt hat bewusst keine Abhängigkeiten und holt sich die jeweils
    aktuelle Fassung von `flushSave` über eine Ref. Vorher stand hier
    `useEffect(() => flushSave, [flushSave])` – der Rückgabewert eines Effekts
    ist seine Aufräumfunktion, und `flushSave` änderte seine Identität bei
    jedem Rendern, weil `useMutation` sein Ergebnis als frisches Objekt zurückgibt
    (`{ ...result, mutate }`, siehe @tanstack/react-query). Damit lief das
    „Aufräumen" nach jedem Rendern statt beim Verlassen: Speichern →
    Zustandswechsel der Mutation → Rendern → wieder speichern. React brach
    diese Schleife nach 50 Durchläufen mit „Maximum update depth exceeded" ab.
    Nebenbei löschte sie bei jedem Rendern den Timer, sodass die Verzögerung
    des Autosave nie ablief.
  */
  const flushRef = useRef(flushSave);
  flushRef.current = flushSave;
  useEffect(() => () => flushRef.current(), []);

  function handleChange(next: NotebookPageContent): void {
    setHistory((previous) => {
      const base = content ? [...previous, content] : previous;
      return base.slice(-HISTORY_LIMIT);
    });
    setContent(next);
    setIsDirty(true);

    // Autosave: Der Timer wird bei jeder Änderung neu gesetzt, gespeichert wird
    // erst, wenn eine Weile nichts mehr passiert ist.
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      if (currentPage) savePage.mutate({ pageId: currentPage.id, content: next });
    }, AUTOSAVE_DELAY_MS);
  }

  function handleUndo(): void {
    setHistory((previous) => {
      if (previous.length === 0) return previous;
      const restored = previous[previous.length - 1];
      setContent(restored);
      setIsDirty(true);
      if (currentPage) {
        if (saveTimer.current) clearTimeout(saveTimer.current);
        saveTimer.current = setTimeout(
          () => savePage.mutate({ pageId: currentPage.id, content: restored }),
          AUTOSAVE_DELAY_MS,
        );
      }
      return previous.slice(0, -1);
    });
  }

  function handleClear(): void {
    if (!content) return;
    alert(t('editorClearPageTitle'), t('editorClearPageBody'), [
      { text: t('commonCancel'), style: 'cancel' },
      {
        text: t('editorClearPageConfirm'),
        style: 'destructive',
        onPress: () => handleChange({ ...content, elements: [] }),
      },
    ]);
  }

  function handleAnalyze(): void {
    // Vorher hing hier eine Bezahlschranke davor. Die Korrektur steht jetzt
    // jedem offen; was bleibt, ist die eine sachliche Bedingung – es muss
    // genug geschrieben sein, damit es etwas zu korrigieren gibt.
    flushSave();
    if (currentPage) analyze.mutate(currentPage.id);
  }

  if (pages.isLoading) return <Loading />;
  if (pages.isError || !pages.data?.length || !content) {
    return <ErrorState message={t('editorError')} onRetry={pages.refetch} />;
  }

  const isDrawing = tool.mode === 'DRAW';
  const canAnalyze = extractPlainText(content).length >= 15;
  const isEmpty = content.elements.length === 0;
  const pageCount = pages.data.length;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={['bottom']}>
      <ScrollView
        contentContainerStyle={{ padding: GUTTER, paddingBottom: DOCK_SPACE }}
        scrollEnabled={!isDrawing}
      >
        <View style={paperFrame}>
          {/* Ohne Werkzeug in der Hand nimmt die Seite keine Berührung an –
              so lässt sie sich mit dem Finger schieben, ohne dass dabei eine
              Linie entsteht. */}
          <View pointerEvents={isDrawing ? 'auto' : 'none'}>
            <Canvas
              content={content}
              tool={tool}
              onChange={handleChange}
              editingTextId={editingTextId}
              onEditText={setEditingTextId}
            />
          </View>

          {isEmpty && !isDrawing ? (
            <View style={emptyHint} pointerEvents="none">
              <Text style={emptyHintText}>{t('editorEmptyHint')}</Text>
            </View>
          ) : null}
        </View>

        {/* Fußzeile wie im Lehrwerk: Seitenzahl in der Mitte, Blättern daneben. */}
        <View style={footer}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={t('pagePrevious')}
            disabled={pageIndex === 0}
            onPress={() => {
              flushSave();
              setPageIndex((value) => value - 1);
            }}
            style={[footerButton, pageIndex === 0 && { opacity: 0.25 }]}
          >
            <ChevronLeftIcon color={book.inkSoft} size={18} />
          </Pressable>

          <Text style={footerCounter}>
            {t('pageOfTotal', { current: pageIndex + 1, total: pageCount })}
          </Text>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel={t('pageNext')}
            disabled={pageIndex >= pageCount - 1}
            onPress={() => {
              flushSave();
              setPageIndex((value) => value + 1);
            }}
            style={[footerButton, pageIndex >= pageCount - 1 && { opacity: 0.25 }]}
          >
            <ChevronRightIcon color={book.inkSoft} size={18} />
          </Pressable>

          <View style={{ flex: 1 }} />

          <Pressable
            accessibilityRole="button"
            accessibilityLabel={t('editorNewPageA11y')}
            disabled={addPage.isPending}
            onPress={() => {
              flushSave();
              addPage.mutate();
            }}
            style={[footerButton, { flexDirection: 'row', gap: 6, width: 'auto', paddingHorizontal: 8 }]}
          >
            <PlusIcon color={book.inkSoft} size={16} />
            <Text style={footerAction}>{t('editorNewPage')}</Text>
          </Pressable>
        </View>

        {/*
          Die KI-Korrektur ist keine Schreibhilfe, sondern eine Handlung an der
          fertigen Seite – deshalb steht sie unter der Fußzeile und nicht bei
          den Stiften. Als eine Zeile, nicht mehr als ganze Karte mit
          Überschrift und Absatz.
        */}
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={t('editorAiCorrection')}
          disabled={!canAnalyze}
          onPress={handleAnalyze}
          style={({ pressed }) => [
            analyzeRow,
            !canAnalyze && { opacity: 0.45 },
            pressed && { backgroundColor: colors.premiumSoft },
          ]}
        >
          <SparkMark color={colors.premium} size={17} />
          <View style={{ flex: 1 }}>
            <Text style={analyzeLabel}>
              {analyze.isPending ? t('editorAiChecking') : t('editorAiCorrection')}
            </Text>
            <Text style={analyzeHint}>
              {canAnalyze ? t('editorAiHintReady') : t('editorAiHintTooShort')}
            </Text>
          </View>
        </Pressable>

        <Text style={saveNote}>
          {savePage.isPending ? t('commonSaving') : isDirty ? t('commonUnsaved') : t('commonSaved')}
        </Text>
      </ScrollView>

      <ToolDock
        tool={tool}
        onChange={setTool}
        tools={['PEN', 'HIGHLIGHTER', 'TEXT', 'ERASER']}
        clearLabel={t('editorClearPageLabel')}
        canUndo={history.length > 0}
        canClear={!isEmpty}
        onUndo={handleUndo}
        onClear={handleClear}
      />

      <AnalysisModal analysis={analysis} onClose={() => setAnalysis(null)} />
    </SafeAreaView>
  );
}

function AnalysisModal({
  analysis,
  onClose,
}: {
  analysis: NotebookAnalysisDto | null;
  onClose: () => void;
}) {
  const { t } = useTranslation();
  if (!analysis) return null;

  const severityColor = {
    HIGH: colors.danger,
    MEDIUM: colors.warning,
    LOW: colors.textMuted,
  } as const;

  return (
    <Modal visible animationType="slide" presentationStyle="pageSheet" onRequestClose={onClose}>
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
        <ScrollView contentContainerStyle={{ padding: spacing.lg, gap: spacing.lg }}>
          <Row>
            <Title>{t('editorAnalysisTitle')}</Title>
            <View style={{ flex: 1 }} />
            <Pressable onPress={onClose} accessibilityLabel={t('commonClose')}>
              <CrossMark color={colors.textMuted} size={20} />
            </Pressable>
          </Row>

          <Card style={{ backgroundColor: colors.primarySoft, borderColor: colors.primary }}>
            <Row>
              <Heading>{t('editorAnalysisRating')}</Heading>
              <View style={{ flex: 1 }} />
              <Text style={[typography.title, { color: colors.primary }]}>
                {analysis.scorePercent}%
              </Text>
            </Row>
            <Body>{analysis.summary}</Body>
          </Card>

          <Heading>
            {analysis.corrections.length === 0
              ? t('editorAnalysisNoErrors')
              : t('editorAnalysisCorrections', { count: analysis.corrections.length })}
          </Heading>

          {analysis.corrections.map((correction, index) => (
            <Card key={`${correction.original}-${index}`}>
              <Row gap={spacing.sm}>
                <View
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: severityColor[correction.severity],
                  }}
                />
                <Caption>{correction.category}</Caption>
              </Row>
              <Text style={[typography.body, { color: colors.danger, textDecorationLine: 'line-through' }]}>
                {correction.original}
              </Text>
              <Text style={[typography.bodyStrong, { color: colors.success }]}>
                {correction.corrected}
              </Text>
              <Caption>{correction.explanation}</Caption>
            </Card>
          ))}

          {analysis.suggestions.length > 0 ? (
            <Card>
              <Heading>{t('editorAnalysisNextSteps')}</Heading>
              {analysis.suggestions.map((suggestion) => (
                <Row key={suggestion} gap={spacing.sm} style={{ alignItems: 'flex-start' }}>
                  <Text>•</Text>
                  <Body>{suggestion}</Body>
                </Row>
              ))}
            </Card>
          ) : null}

          <Button label={t('commonClose')} variant="secondary" onPress={onClose} />
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
}

// ------------------------------------------------------------------ Styles

const paperFrame = {
  backgroundColor: book.paper,
  borderWidth: 1,
  borderColor: book.paperEdge,
  overflow: 'hidden' as const,
  shadowColor: book.ink,
  shadowOpacity: 0.12,
  shadowRadius: 10,
  shadowOffset: { width: 0, height: 4 },
  elevation: 3,
};

const emptyHint = {
  position: 'absolute' as const,
  left: 24,
  right: 24,
  top: '38%' as const,
  alignItems: 'center' as const,
};

const emptyHintText = {
  fontFamily: bookFont,
  fontSize: 15,
  lineHeight: 23,
  color: book.inkFaint,
  textAlign: 'center' as const,
  fontStyle: 'italic' as const,
};

const footer = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  gap: 4,
  paddingTop: spacing.sm,
};

const footerButton = {
  minWidth: 40,
  height: 40,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const footerCounter = {
  fontFamily: bookFont,
  fontSize: 14,
  color: book.inkSoft,
};

const footerAction = {
  fontFamily: bookSans,
  fontSize: 13,
  color: book.inkSoft,
};

const analyzeRow = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  gap: 12,
  marginTop: spacing.sm,
  paddingHorizontal: 14,
  paddingVertical: 12,
  borderWidth: 1,
  borderColor: colors.premium,
  borderLeftWidth: 3,
  backgroundColor: book.paper,
};

const analyzeLabel = {
  fontFamily: bookSans,
  fontSize: 15,
  fontWeight: '700' as const,
  color: colors.premium,
};

const analyzeHint = {
  fontFamily: bookSans,
  fontSize: 12,
  color: book.inkFaint,
  marginTop: 1,
};

/** Speicherstand: eine Zeile unter dem Blatt, so leise wie möglich. */
const saveNote = {
  ...bookLabel,
  fontSize: 10,
  letterSpacing: 1.2,
  color: book.inkFaint,
  textAlign: 'center' as const,
  paddingTop: spacing.xs,
};
