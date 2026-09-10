import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Modal, Pressable, ScrollView, Text, View } from 'react-native';
import { alert } from '../../utils/alert';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NotebookAnalysisDto, NotebookPageContent } from '@lingua/shared';
import { extractPlainText } from '@lingua/shared';
import {
  Body,
  Button,
  Caption,
  Card,
  ErrorState,
  Heading,
  Loading,
  Row,
  Title,
} from '../../components';
import { notebookApi } from '../../api/endpoints';
import { useIsPremium } from '../../store/auth.store';
import { colors, radius, spacing, typography } from '../../theme';
import { CrossMark } from '../workbook/BookIcons';
import Canvas from './Canvas';
import { DEFAULT_TOOL, Toolbar, ToolState } from './toolbar';
import type { NotebookStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<NotebookStackParamList, 'NotebookEditor'>;

/** Wartezeit nach der letzten Änderung, bevor gespeichert wird. */
const AUTOSAVE_DELAY_MS = 1500;
/** Tiefe der lokalen Rückgängig-Historie. */
const HISTORY_LIMIT = 40;

export default function NotebookEditorScreen({ route }: Props) {
  const { notebookId } = route.params;
  const queryClient = useQueryClient();
  const isPremium = useIsPremium();

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
        error.code === 'AiQuotaExceeded' ? 'Kontingent aufgebraucht' : 'Analyse nicht möglich',
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

  // Beim Verlassen des Screens wird ein ausstehender Speichervorgang sofort ausgeführt.
  useEffect(() => flushSave, [flushSave]);

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
    alert('Seite leeren?', 'Alle Inhalte dieser Seite werden entfernt.', [
      { text: 'Abbrechen', style: 'cancel' },
      {
        text: 'Leeren',
        style: 'destructive',
        onPress: () => handleChange({ ...content, elements: [] }),
      },
    ]);
  }

  if (pages.isLoading) return <Loading />;
  if (pages.isError || !pages.data?.length || !content) {
    return <ErrorState message="Das Heft konnte nicht geladen werden." onRetry={pages.refetch} />;
  }

  const textLength = extractPlainText(content).length;
  const canAnalyze = textLength >= 15;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={['bottom']}>
      <ScrollView contentContainerStyle={{ padding: spacing.md, gap: spacing.md }}>
        <Row>
          <Caption>
            Seite {pageIndex + 1} von {pages.data.length}
          </Caption>
          <View style={{ flex: 1 }} />
          <Caption>
            {savePage.isPending ? 'Speichert …' : isDirty ? 'Nicht gespeichert' : 'Gespeichert'}
          </Caption>
        </Row>

        <View style={{ borderRadius: radius.lg, overflow: 'hidden', borderWidth: 1, borderColor: colors.border }}>
          <Canvas
            content={content}
            tool={tool}
            onChange={handleChange}
            editingTextId={editingTextId}
            onEditText={setEditingTextId}
          />
        </View>

        <Row gap={spacing.sm}>
          <Button
            label="‹ Zurück"
            variant="secondary"
            fullWidth={false}
            disabled={pageIndex === 0}
            onPress={() => {
              flushSave();
              setPageIndex((value) => value - 1);
            }}
            style={{ flex: 1 }}
          />
          <Button
            label="Weiter ›"
            variant="secondary"
            fullWidth={false}
            disabled={pageIndex >= pages.data.length - 1}
            onPress={() => {
              flushSave();
              setPageIndex((value) => value + 1);
            }}
            style={{ flex: 1 }}
          />
          <Button
            label="+ Seite"
            fullWidth={false}
            loading={addPage.isPending}
            onPress={() => {
              flushSave();
              addPage.mutate();
            }}
            style={{ flex: 1 }}
          />
        </Row>

        {/* KI-Korrektur ist Premium; für alle anderen steht hier der Hinweis. */}
        <Card style={{ borderColor: colors.premium }}>
          <Row gap={spacing.sm}>
            <View style={{ flex: 1 }}>
              <Heading>KI-Korrektur</Heading>
              <Caption>
                {isPremium
                  ? canAnalyze
                    ? 'Lass deinen geschriebenen Text prüfen und erklären.'
                    : 'Schreibe mit dem Textwerkzeug ein paar Sätze, dann kann die KI korrigieren.'
                  : 'Mit Premium korrigiert die KI deine Texte und erklärt jeden Fehler.'}
              </Caption>
            </View>
          </Row>
          <Button
            label={isPremium ? 'Text prüfen lassen' : 'Premium ansehen'}
            variant="premium"
            disabled={isPremium && !canAnalyze}
            loading={analyze.isPending}
            onPress={() => {
              if (!isPremium) {
                alert(
                  'Lingua Premium',
                  'KI-Korrektur, Chat, Grammatikerklärungen und persönliche Empfehlungen sind Teil von Premium. Du kannst Premium im Profil aktivieren.',
                );
                return;
              }
              flushSave();
              if (currentPage) analyze.mutate(currentPage.id);
            }}
          />
        </Card>
      </ScrollView>

      <Toolbar
        tool={tool}
        onChange={setTool}
        onUndo={handleUndo}
        canUndo={history.length > 0}
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
            <Title>Korrektur</Title>
            <View style={{ flex: 1 }} />
            <Pressable onPress={onClose} accessibilityLabel="Schließen">
              <CrossMark color={colors.textMuted} size={20} />
            </Pressable>
          </Row>

          <Card style={{ backgroundColor: colors.primarySoft, borderColor: colors.primary }}>
            <Row>
              <Heading>Bewertung</Heading>
              <View style={{ flex: 1 }} />
              <Text style={[typography.title, { color: colors.primary }]}>
                {analysis.scorePercent}%
              </Text>
            </Row>
            <Body>{analysis.summary}</Body>
          </Card>

          <Heading>
            {analysis.corrections.length === 0
              ? 'Keine Fehler gefunden'
              : `${analysis.corrections.length} Korrekturen`}
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
              <Heading>Nächste Schritte</Heading>
              {analysis.suggestions.map((suggestion) => (
                <Row key={suggestion} gap={spacing.sm} style={{ alignItems: 'flex-start' }}>
                  <Text>•</Text>
                  <Body>{suggestion}</Body>
                </Row>
              ))}
            </Card>
          ) : null}

          <Button label="Schließen" variant="secondary" onPress={onClose} />
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
}
