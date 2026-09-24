import React, { useState } from 'react';
import { Modal, Pressable, ScrollView, Text, View } from 'react-native';
import { alert } from '../../utils/alert';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Body, Button, ErrorState, Input, Loading, Row, Title } from '../../components';
import { notebookApi } from '../../api/endpoints';
import { useTranslation } from '../../i18n';
import { useActiveProfile } from '../../store/auth.store';
import { book, bookFont, bookLabel, bookSans, colors, radius, spacing } from '../../theme';
import { BookMark, PlusIcon, TrashIcon } from '../workbook/BookIcons';
import type { StudyStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<StudyStackParamList, 'NotebookList'>;

/**
 * Das Regal mit den eigenen Heften.
 *
 * Ein Blatt, darauf eine Zeile je Heft: farbiger Buchrücken, Titel, wie viele
 * Seiten und wann zuletzt geschrieben. Die Farben stammen aus der Palette der
 * App statt aus einer eigenen, bunten Reihe – ein Heftumschlag darf Farbe
 * tragen, aber dieselbe wie alles andere hier.
 */
const COVER_COLORS = ['#73030D', '#4D0209', '#33363B', '#2F6F4F', '#5C3D74', '#8A5A1E'];

export default function NotebookListScreen({ navigation }: Props) {
  const { t, tLanguage, formatDate } = useTranslation();
  const queryClient = useQueryClient();
  const profile = useActiveProfile();

  const [isCreating, setIsCreating] = useState(false);
  const [title, setTitle] = useState('');
  const [coverColor, setCoverColor] = useState(COVER_COLORS[0]);

  const notebooks = useQuery({ queryKey: ['notebooks'], queryFn: notebookApi.list });

  const create = useMutation({
    mutationFn: () =>
      notebookApi.create({ title: title.trim(), coverColor, languageId: profile?.language.id }),
    onSuccess: async (notebook) => {
      await queryClient.invalidateQueries({ queryKey: ['notebooks'] });
      setIsCreating(false);
      setTitle('');
      navigation.navigate('NotebookEditor', { notebookId: notebook.id, title: notebook.title });
    },
  });

  const remove = useMutation({
    mutationFn: (id: string) => notebookApi.remove(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['notebooks'] }),
  });

  function confirmDelete(id: string, name: string): void {
    alert(t('notebooksDeleteTitle'), t('notebooksDeleteBody', { title: name }), [
      { text: t('commonCancel'), style: 'cancel' },
      { text: t('commonDelete'), style: 'destructive', onPress: () => remove.mutate(id) },
    ]);
  }

  if (notebooks.isLoading) return <Loading />;
  if (notebooks.isError || !notebooks.data) {
    return <ErrorState message={t('notebooksError')} onRetry={notebooks.refetch} />;
  }

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={['left', 'right']}>
        <ScrollView contentContainerStyle={{ padding: 10, paddingBottom: spacing.xxl }}>
          <View style={sheet}>
            <View style={{ paddingHorizontal: book.margin, paddingTop: 22 }}>
              <Text style={eyebrow}>{t('notebooksEyebrow')}</Text>
              <Text style={sheetTitle}>{t('notebooksTitle')}</Text>
              <Text style={sheetSubtitle}>{t('notebooksSubtitle')}</Text>
              <View style={titleRule} />
            </View>

            {notebooks.data.length === 0 ? (
              <Text style={emptyText}>{t('notebooksEmpty')}</Text>
            ) : (
              notebooks.data.map((notebook) => (
                <Pressable
                  key={notebook.id}
                  accessibilityRole="button"
                  onPress={() =>
                    navigation.navigate('NotebookEditor', {
                      notebookId: notebook.id,
                      title: notebook.title,
                    })
                  }
                  style={({ pressed }) => [notebookRow, pressed && { backgroundColor: book.tint }]}
                >
                  <View style={[spine, { backgroundColor: notebook.coverColor }]}>
                    <BookMark color="#FFFFFF" size={16} />
                  </View>

                  <View style={{ flex: 1, gap: 2 }}>
                    <Text style={notebookTitle}>{notebook.title}</Text>
                    <Text style={notebookMeta}>
                      {notebook.pageCount === 1
                        ? t('notebooksPageCountOne')
                        : t('notebooksPageCount', { count: notebook.pageCount })}
                      {' · '}
                      {t('notebooksLastEdited', {
                        date: formatDate(notebook.updatedAt, { day: '2-digit', month: 'short' }),
                      })}
                      {notebook.language
                        ? ` · ${tLanguage(notebook.language.code, notebook.language.name)}`
                        : ''}
                    </Text>
                  </View>

                  <Pressable
                    accessibilityRole="button"
                    accessibilityLabel={t('notebooksDeleteA11y', { title: notebook.title })}
                    hitSlop={8}
                    onPress={() => confirmDelete(notebook.id, notebook.title)}
                    style={{ padding: spacing.sm }}
                  >
                    <TrashIcon color={book.inkFaint} size={18} />
                  </Pressable>
                </Pressable>
              ))
            )}

            <Pressable
              accessibilityRole="button"
              onPress={() => setIsCreating(true)}
              style={({ pressed }) => [newRow, pressed && { backgroundColor: book.tint }]}
            >
              <PlusIcon color={book.ink} size={18} />
              <Text style={newRowLabel}>{t('notebooksNew')}</Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>

      <Modal visible={isCreating} animationType="slide" transparent onRequestClose={() => setIsCreating(false)}>
        <View style={sheetBackdrop}>
          <SafeAreaView edges={['bottom']} style={sheetStyle}>
            <Title>{t('notebooksNewTitle')}</Title>
            <Input
              label={t('notebooksTitleLabel')}
              value={title}
              onChangeText={setTitle}
              placeholder={t('notebooksTitlePlaceholder')}
              autoFocus
            />

            <View style={{ gap: spacing.sm }}>
              <Body muted>{t('notebooksCover')}</Body>
              <Row gap={spacing.sm}>
                {COVER_COLORS.map((color) => (
                  <Pressable
                    key={color}
                    accessibilityRole="button"
                    accessibilityLabel={t('notebooksCoverA11y', { color })}
                    accessibilityState={{ selected: coverColor === color }}
                    onPress={() => setCoverColor(color)}
                    style={[
                      coverSwatch,
                      { backgroundColor: color },
                      coverColor === color && coverSwatchActive,
                    ]}
                  />
                ))}
              </Row>
            </View>

            <Button
              label={t('notebooksCreate')}
              onPress={() => create.mutate()}
              disabled={title.trim().length < 1}
              loading={create.isPending}
            />
            <Button label={t('commonCancel')} variant="ghost" onPress={() => setIsCreating(false)} />
          </SafeAreaView>
        </View>
      </Modal>
    </>
  );
}

// ------------------------------------------------------------------ Styles

const sheet = {
  backgroundColor: book.paper,
  borderWidth: 1,
  borderColor: book.paperEdge,
  paddingBottom: 6,
  shadowColor: book.ink,
  shadowOpacity: 0.12,
  shadowRadius: 10,
  shadowOffset: { width: 0, height: 4 },
  elevation: 3,
};

const eyebrow = {
  ...bookLabel,
  fontSize: 11,
  letterSpacing: 1.8,
  color: book.inkFaint,
};

const sheetTitle = {
  fontFamily: bookFont,
  fontSize: 25,
  lineHeight: 32,
  fontWeight: '700' as const,
  color: book.ink,
  marginTop: 6,
};

const sheetSubtitle = {
  fontFamily: bookFont,
  fontSize: 15,
  lineHeight: 22,
  color: book.inkSoft,
  marginTop: 2,
};

const titleRule = {
  height: 1,
  backgroundColor: book.ink,
  marginTop: 16,
};

const emptyText = {
  fontFamily: bookFont,
  fontSize: 16,
  lineHeight: 24,
  color: book.inkSoft,
  paddingHorizontal: book.margin,
  paddingVertical: 20,
  fontStyle: 'italic' as const,
};

const notebookRow = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  gap: 14,
  paddingHorizontal: book.margin,
  paddingVertical: 12,
  borderBottomWidth: 1,
  borderBottomColor: book.ruleFaint,
};

/** Der Buchrücken: schmal, hochkant, in der Umschlagfarbe. */
const spine = {
  width: 26,
  height: 36,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const notebookTitle = {
  fontFamily: bookFont,
  fontSize: 17,
  lineHeight: 24,
  color: book.ink,
};

const notebookMeta = {
  fontFamily: bookSans,
  fontSize: 12,
  color: book.inkFaint,
};

const newRow = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  gap: 12,
  paddingHorizontal: book.margin,
  paddingVertical: 16,
};

const newRowLabel = {
  fontFamily: bookSans,
  fontSize: 16,
  fontWeight: '700' as const,
  color: book.ink,
};

const sheetBackdrop = {
  flex: 1,
  backgroundColor: 'rgba(13, 13, 13, 0.4)',
  justifyContent: 'flex-end' as const,
};

const sheetStyle = {
  backgroundColor: colors.background,
  borderTopLeftRadius: radius.xl,
  borderTopRightRadius: radius.xl,
  padding: spacing.lg,
  gap: spacing.md,
};

const coverSwatch = {
  width: 40,
  height: 40,
  borderRadius: radius.sm,
  borderWidth: 1,
  borderColor: colors.border,
};

const coverSwatchActive = {
  borderWidth: 3,
  borderColor: colors.text,
};
