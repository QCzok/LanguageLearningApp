import React, { useState } from 'react';
import { Modal, Pressable, Text, View } from 'react-native';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { VocabDeckDto } from '@lingua/shared';
import { Button, Caption, Input, Row, Title } from '../../components';
import { aiApi, vocabularyApi } from '../../api/endpoints';
import { useTranslation } from '../../i18n';
import { useActiveProfile } from '../../store/auth.store';
import { colors, radius, spacing, typography } from '../../theme';
import { MAX_WIDTH } from '../../navigation/WebLayout';

/**
 * Der Anlage-Zettel für eine eigene Kategorie: ein Thema, zu dem die KI
 * Vokabeln erzeugt, oder eine leere Kategorie zum selbst Befüllen.
 */
export function NewCategorySheet({
  visible,
  onClose,
  onCreated,
}: {
  visible: boolean;
  onClose: () => void;
  onCreated: (deck: VocabDeckDto) => void;
}) {
  const { t } = useTranslation();
  const profile = useActiveProfile();
  const queryClient = useQueryClient();
  const [createMode, setCreateMode] = useState<'ai' | 'manual'>('ai');
  const [topic, setTopic] = useState('');
  const [manualTitle, setManualTitle] = useState('');

  const generateDeck = useMutation({
    mutationFn: (value: string) => aiApi.generateVocabDeck(value),
    onSuccess: async (deck) => {
      await queryClient.invalidateQueries({ queryKey: ['decks'] });
      setTopic('');
      onCreated(deck);
    },
  });

  const createDeck = useMutation({
    mutationFn: () =>
      vocabularyApi.createDeck({
        languageId: profile!.language.id,
        level: profile!.level,
        title: manualTitle.trim(),
      }),
    onSuccess: async (deck) => {
      await queryClient.invalidateQueries({ queryKey: ['decks'] });
      setManualTitle('');
      onCreated(deck);
    },
  });

  const busy = generateDeck.isPending || createDeck.isPending;

  function close() {
    if (busy) return;
    setTopic('');
    setManualTitle('');
    generateDeck.reset();
    createDeck.reset();
    onClose();
  }

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={close}>
      <View style={sheetBackdrop}>
        <SafeAreaView edges={['bottom']} style={sheetStyle}>
          <Row gap={spacing.xs}>
            <ModeTab label={t('vocabModeAi')} active={createMode === 'ai'} onPress={() => setCreateMode('ai')} />
            <ModeTab label={t('vocabModeManual')} active={createMode === 'manual'} onPress={() => setCreateMode('manual')} />
          </Row>

          {createMode === 'ai' ? (
            <>
              <Title>{t('vocabAiDeckTitle')}</Title>
              <Caption>{t('vocabAiSheetSubtitle')}</Caption>

              <Input
                label={t('vocabTopicLabel')}
                value={topic}
                onChangeText={setTopic}
                placeholder={t('vocabTopicPlaceholder')}
                error={generateDeck.isError ? (generateDeck.error as Error).message : undefined}
              />

              <Button
                label={t('vocabGenerate')}
                variant="primary"
                loading={generateDeck.isPending}
                disabled={topic.trim().length < 2}
                onPress={() => generateDeck.mutate(topic.trim())}
              />
            </>
          ) : (
            <>
              <Title>{t('vocabManualDeckTitle')}</Title>
              <Caption>{t('vocabManualSheetSubtitle')}</Caption>

              <Input
                label={t('vocabDeckNameLabel')}
                value={manualTitle}
                onChangeText={setManualTitle}
                placeholder={t('vocabDeckNamePlaceholder')}
                autoFocus
                error={createDeck.isError ? (createDeck.error as Error).message : undefined}
              />

              <Button
                label={t('vocabCreateDeck')}
                variant="primary"
                loading={createDeck.isPending}
                disabled={!profile || manualTitle.trim().length < 2}
                onPress={() => createDeck.mutate()}
              />
            </>
          )}

          <Button label={t('commonCancel')} variant="ghost" onPress={close} disabled={busy} />
        </SafeAreaView>
      </View>
    </Modal>
  );
}

/** Die zwei Reiter im Anlage-Zettel: KI-Thema oder eine leere eigene Kategorie. */
function ModeTab({ label, active, onPress }: { label: string; active: boolean; onPress: () => void }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected: active }}
      onPress={onPress}
      style={[modeTab, active && { backgroundColor: colors.primary }]}
    >
      <Text style={[modeTabLabel, active && { color: colors.textInverse }]}>{label}</Text>
    </Pressable>
  );
}

const sheetBackdrop = {
  flex: 1,
  backgroundColor: 'rgba(15, 23, 42, 0.4)',
  justifyContent: 'flex-end' as const,
  // Im Browser spannt sich das Modal über das ganze Fenster, nicht nur über
  // die telefon-schmale Spalte aus `WebLayout` – ohne diese Zentrierung läge
  // der Zettel über der vollen Fensterbreite statt über der Bühne der App.
  alignItems: 'center' as const,
};

const sheetStyle = {
  width: '100%' as const,
  maxWidth: MAX_WIDTH,
  backgroundColor: colors.background,
  borderTopLeftRadius: radius.xl,
  borderTopRightRadius: radius.xl,
  padding: spacing.lg,
  gap: spacing.md,
};

const modeTab = {
  flex: 1,
  paddingVertical: spacing.xs,
  borderRadius: radius.full,
  backgroundColor: colors.surfaceAlt,
  alignItems: 'center' as const,
};

const modeTabLabel = {
  ...typography.label,
  color: colors.textMuted,
};
