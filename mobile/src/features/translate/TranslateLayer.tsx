import React, { useImperativeHandle, useRef, useState } from 'react';
import type { Ref } from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useIsFocused } from '@react-navigation/native';
import { useMutation } from '@tanstack/react-query';
import type { TranslationDto } from '@lingua/shared';
import { aiApi } from '../../api/endpoints';
import type { ApiError } from '../../api/client';
import { useTranslation } from '../../i18n';
import { fontFamily, radius, readerThemes, shadow, spacing } from '../../theme';
import type { ReaderTheme } from '../../theme';
import { MAX_TRANSLATE_LENGTH, usePageSelection } from './pageSelection';
import type { PageSelection } from './pageSelection';
import { TranslateIcon } from './TranslateIcon';

export interface TranslateLayerHandle {
  /** Öffnet das Blatt – mit der aktuellen Markierung, falls es eine gibt. */
  open: () => void;
}

/** Geschätzte Breite des Knopfs an der Markierung, zum Zentrieren. */
const PILL_WIDTH = 132;
const PILL_HEIGHT = 36;

/**
 * Übersetzen per KI, für Lehrwerk und Bibliothek.
 *
 * Zwei Wege führen hinein:
 * – **Im Browser** erscheint neben jeder Markierung ein kleiner Knopf
 *   „Übersetzen“. Ein Druck darauf öffnet das Blatt und übersetzt sofort,
 *   samt dem Satz, in dem das Markierte steht.
 * – **Überall** öffnet der Knopf mit dem Übersetzungszeichen in der Kopfzeile
 *   dasselbe Blatt. Auf iOS und Android ist das der Hauptweg: Die Textauswahl
 *   dort gibt ihren Inhalt nicht an die App heraus, also kopiert man das Wort
 *   über das Systemmenü und fügt es im Blatt ein.
 *
 * Das Blatt nimmt die Farben des Papiers an (`palette`), damit es über dem
 * Nachtpapier des Lesers nicht als weißer Kasten aufleuchtet.
 */
export function TranslateLayer({
  ref,
  palette = readerThemes.paper,
}: {
  ref?: Ref<TranslateLayerHandle>;
  palette?: ReaderTheme;
}) {
  const { t } = useTranslation();
  const isFocused = useIsFocused();
  const [visible, setVisible] = useState(false);
  const [draft, setDraft] = useState('');
  const selection = usePageSelection(isFocused && !visible);
  // Der Kopfzeilenknopf hebt im Browser die Markierung auf, bevor er gedrückt
  // gilt – der zuletzt gesehene Stand steht deshalb in einer Ref bereit.
  const selectionRef = useRef<PageSelection | null>(null);
  selectionRef.current = selection;
  const contextRef = useRef<{ text: string; context?: string } | null>(null);

  const translate = useMutation({
    mutationFn: (body: { text: string; context?: string }) => aiApi.translate(body),
  });

  function openWith(picked: PageSelection | null) {
    translate.reset();
    setVisible(true);
    if (picked) {
      setDraft(picked.text);
      contextRef.current = { text: picked.text, context: picked.context };
      translate.mutate({ text: picked.text, context: picked.context });
    } else {
      setDraft('');
      contextRef.current = null;
    }
  }

  useImperativeHandle(ref, () => ({ open: () => openWith(selectionRef.current) }));

  function submit() {
    const text = draft.replace(/\s+/g, ' ').trim();
    if (!text || translate.isPending) return;
    // Der Satz von der Seite gilt nur, solange das Wort noch das markierte ist.
    const context = contextRef.current?.text === text ? contextRef.current.context : undefined;
    translate.mutate({ text, context });
  }

  function close() {
    setVisible(false);
    // Die Markierung auf der Seite hat ihren Zweck erfüllt – bliebe sie
    // stehen, tauchte der Knopf daneben sofort wieder auf.
    if (Platform.OS === 'web') window.getSelection?.()?.removeAllRanges();
  }

  return (
    <>
      {selection && !visible ? (
        <SelectionPill
          selection={selection}
          palette={palette}
          onPress={() => openWith(selection)}
        />
      ) : null}

      <TranslateSheet
        visible={visible}
        palette={palette}
        draft={draft}
        onChangeDraft={setDraft}
        onSubmit={submit}
        onClose={close}
        isPending={translate.isPending}
        result={translate.data ?? null}
        error={
          translate.error
            ? (translate.error as ApiError).code === 'AiQuotaExceeded'
              ? t('translateQuota')
              : t('translateFailed')
            : null
        }
      />
    </>
  );
}

/**
 * Der Knopf an der Markierung. Er steht über ihr, damit er weder den Finger
 * noch die nächste Zeile verdeckt; ist oben kein Platz, darunter.
 *
 * Reagiert schon beim Hinunterdrücken (`onPressIn`): Der Klick hebt die
 * Markierung im Browser auf, und damit verschwände der Knopf, bevor der
 * Klick zu Ende ist.
 */
function SelectionPill({
  selection,
  palette,
  onPress,
}: {
  selection: PageSelection;
  palette: ReaderTheme;
  onPress: () => void;
}) {
  const { t } = useTranslation();
  const window = useWindowDimensions();
  const { rect } = selection;
  const above = rect.y - PILL_HEIGHT - spacing.sm > spacing.sm;
  const top = above ? rect.y - PILL_HEIGHT - spacing.sm : rect.y + rect.height + spacing.sm;
  const left = Math.max(
    spacing.sm,
    Math.min(rect.x + rect.width / 2 - PILL_WIDTH / 2, window.width - PILL_WIDTH - spacing.sm),
  );

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={t('translateAction')}
      onPressIn={onPress}
      style={[
        pill,
        // `fixed` gibt es nur im Web – und nur dort erscheint der Knopf.
        { position: 'fixed' as 'absolute', top, left, backgroundColor: palette.accent },
      ]}
    >
      <TranslateIcon color={palette.accentInk} size={16} />
      <Text style={[pillText, { color: palette.accentInk }]}>{t('translateAction')}</Text>
    </Pressable>
  );
}

function TranslateSheet({
  visible,
  palette: c,
  draft,
  onChangeDraft,
  onSubmit,
  onClose,
  isPending,
  result,
  error,
}: {
  visible: boolean;
  palette: ReaderTheme;
  draft: string;
  onChangeDraft: (text: string) => void;
  onSubmit: () => void;
  onClose: () => void;
  isPending: boolean;
  result: TranslationDto | null;
  error: string | null;
}) {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const canSubmit = draft.trim().length > 0 && !isPending;

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={t('commonClose')}
          onPress={onClose}
          style={{ flex: 1, backgroundColor: c.scrim }}
        />

        <View
          style={[
            sheet,
            {
              backgroundColor: c.paper,
              borderColor: c.edge,
              paddingBottom: Math.max(insets.bottom, spacing.lg),
            },
          ]}
        >
          <View style={sheetHead}>
            <TranslateIcon color={c.accent} size={16} />
            <Text style={[label, { color: c.accent }]}>{t('translateTitle')}</Text>
            <View style={{ flex: 1 }} />
            <Pressable
              accessibilityRole="button"
              onPress={onClose}
              hitSlop={10}
              style={({ pressed }) => pressed && { opacity: 0.5 }}
            >
              <Text style={[closeText, { color: c.inkSoft }]}>{t('commonClose')}</Text>
            </Pressable>
          </View>

          <View style={[inputRow, { borderColor: c.edge, backgroundColor: c.paperDeep }]}>
            <TextInput
              value={draft}
              onChangeText={onChangeDraft}
              onSubmitEditing={onSubmit}
              placeholder={t('translatePlaceholder')}
              placeholderTextColor={c.inkFaint}
              maxLength={MAX_TRANSLATE_LENGTH}
              returnKeyType="go"
              submitBehavior="blurAndSubmit"
              multiline
              autoFocus={!draft}
              style={[input, { color: c.ink }]}
            />
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={t('translateAction')}
              onPress={onSubmit}
              disabled={!canSubmit}
              style={({ pressed }) => [
                goButton,
                { backgroundColor: c.accent },
                !canSubmit && { opacity: 0.35 },
                pressed && { opacity: 0.8 },
              ]}
            >
              <Text style={[goText, { color: c.accentInk }]}>{t('translateAction')}</Text>
            </Pressable>
          </View>

          {isPending ? (
            <ActivityIndicator color={c.accent} style={{ paddingVertical: spacing.lg }} />
          ) : error ? (
            <Text style={[bodyText, { color: c.accent }]}>{error}</Text>
          ) : result ? (
            <View style={{ gap: spacing.xs }}>
              <Text selectable style={[translationText, { color: c.ink }]}>
                {result.translation}
              </Text>
              {result.alternatives.length > 0 ? (
                <Text selectable style={[bodyText, { color: c.inkSoft }]}>
                  {t('translateAlso')}: {result.alternatives.join(' · ')}
                </Text>
              ) : null}
              {result.note ? (
                <>
                  <View style={[rule, { backgroundColor: c.rule }]} />
                  <Text selectable style={[noteText, { color: c.inkSoft }]}>
                    {result.note}
                  </Text>
                </>
              ) : null}
            </View>
          ) : (
            <Text style={[noteText, { color: c.inkFaint }]}>
              {Platform.OS === 'web' ? t('translateHintWeb') : t('translateHintNative')}
            </Text>
          )}
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const pill = {
  zIndex: 1000,
  height: PILL_HEIGHT,
  minWidth: PILL_WIDTH,
  paddingHorizontal: spacing.md,
  borderRadius: radius.full,
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  gap: spacing.xs,
  ...shadow.lift,
};

const pillText = {
  fontFamily: fontFamily.semiBold,
  fontSize: 13,
  fontWeight: '600' as const,
};

/**
 * Das Blatt kommt von unten und bleibt schmal genug, dass die Seite darüber
 * sichtbar bleibt – man will das Wort im Satz sehen, während man die
 * Übersetzung liest. Auf breiten Schirmen mittig statt über die ganze Breite.
 */
const sheet = {
  width: '100%' as const,
  maxWidth: 560,
  alignSelf: 'center' as const,
  borderTopLeftRadius: radius.lg,
  borderTopRightRadius: radius.lg,
  borderWidth: 1,
  borderBottomWidth: 0,
  paddingTop: spacing.lg,
  paddingHorizontal: spacing.lg,
  gap: spacing.md,
};

const sheetHead = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  gap: spacing.xs,
};

const label = {
  fontFamily: fontFamily.semiBold,
  fontSize: 11,
  fontWeight: '700' as const,
  letterSpacing: 1.4,
  textTransform: 'uppercase' as const,
};

const closeText = {
  fontFamily: fontFamily.medium,
  fontSize: 13,
};

const inputRow = {
  flexDirection: 'row' as const,
  alignItems: 'flex-end' as const,
  gap: spacing.sm,
  borderWidth: 1,
  borderRadius: radius.md,
  padding: spacing.xs,
  paddingLeft: spacing.md,
};

const input = {
  flex: 1,
  minHeight: 36,
  maxHeight: 110,
  paddingVertical: spacing.sm,
  fontFamily: fontFamily.serif,
  fontSize: 16,
};

const goButton = {
  height: 36,
  paddingHorizontal: spacing.md,
  borderRadius: radius.sm,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const goText = {
  fontFamily: fontFamily.semiBold,
  fontSize: 13,
  fontWeight: '600' as const,
};

const translationText = {
  fontFamily: fontFamily.serif,
  fontSize: 21,
  lineHeight: 28,
  fontWeight: '700' as const,
};

const bodyText = {
  fontFamily: fontFamily.serif,
  fontSize: 15,
  lineHeight: 22,
};

const noteText = {
  fontFamily: fontFamily.serif,
  fontSize: 14,
  lineHeight: 21,
  fontStyle: 'italic' as const,
};

const rule = {
  height: 1,
  marginVertical: spacing.xs,
};
