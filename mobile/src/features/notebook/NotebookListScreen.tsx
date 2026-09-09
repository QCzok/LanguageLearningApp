import React, { useState } from 'react';
import { Alert, Modal, Pressable, Text, View } from 'react-native';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Body,
  Button,
  Caption,
  Card,
  EmptyState,
  ErrorState,
  Heading,
  Input,
  Loading,
  Row,
  Screen,
  Title,
} from '../../components';
import { notebookApi } from '../../api/endpoints';
import { useActiveProfile } from '../../store/auth.store';
import { colors, radius, spacing } from '../../theme';
import { BookMark, TrashIcon } from '../workbook/BookIcons';
import type { NotebookStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<NotebookStackParamList, 'NotebookList'>;

const COVER_COLORS = ['#2563EB', '#059669', '#D97706', '#DC2626', '#7C3AED', '#0F172A'];

export default function NotebookListScreen({ navigation }: Props) {
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
    Alert.alert('Heft löschen?', `„${name}" wird mit allen Seiten unwiderruflich gelöscht.`, [
      { text: 'Abbrechen', style: 'cancel' },
      { text: 'Löschen', style: 'destructive', onPress: () => remove.mutate(id) },
    ]);
  }

  if (notebooks.isLoading) return <Loading />;
  if (notebooks.isError || !notebooks.data) {
    return <ErrorState message="Deine Hefte konnten nicht geladen werden." onRetry={notebooks.refetch} />;
  }

  return (
    <>
      <Screen scroll>
        <Row>
          <View style={{ flex: 1 }}>
            <Title>Deine Hefte</Title>
            <Caption>Schreiben, markieren, später weiterbearbeiten.</Caption>
          </View>
        </Row>

        {notebooks.data.length === 0 ? (
          <EmptyState
            title="Noch kein Heft"
            description="Lege ein Heft an, um Notizen, Übungen und eigene Texte zu sammeln."
            action={{ label: 'Heft anlegen', onPress: () => setIsCreating(true) }}
          />
        ) : (
          notebooks.data.map((notebook) => (
            <Card
              key={notebook.id}
              onPress={() =>
                navigation.navigate('NotebookEditor', {
                  notebookId: notebook.id,
                  title: notebook.title,
                })
              }
            >
              <Row gap={spacing.md}>
                <View
                  style={{
                    width: 44,
                    height: 56,
                    borderRadius: radius.sm,
                    backgroundColor: notebook.coverColor,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <BookMark color="#FFFFFF" size={22} />
                </View>
                <View style={{ flex: 1 }}>
                  <Heading>{notebook.title}</Heading>
                  <Caption>
                    {notebook.pageCount} {notebook.pageCount === 1 ? 'Seite' : 'Seiten'} · zuletzt{' '}
                    {formatDate(notebook.updatedAt)}
                  </Caption>
                  {notebook.language ? (
                    <Caption>
                      {notebook.language.flagEmoji} {notebook.language.name}
                    </Caption>
                  ) : null}
                </View>
                <Pressable
                  accessibilityRole="button"
                  accessibilityLabel={`Heft ${notebook.title} löschen`}
                  hitSlop={8}
                  onPress={() => confirmDelete(notebook.id, notebook.title)}
                  style={{ padding: spacing.sm }}
                >
                  <TrashIcon color={colors.textMuted} size={20} />
                </Pressable>
              </Row>
            </Card>
          ))
        )}

        {notebooks.data.length > 0 ? (
          <Button label="+ Neues Heft" onPress={() => setIsCreating(true)} />
        ) : null}
      </Screen>

      <Modal visible={isCreating} animationType="slide" transparent onRequestClose={() => setIsCreating(false)}>
        <View style={sheetBackdrop}>
          <SafeAreaView edges={['bottom']} style={sheetStyle}>
            <Title>Neues Heft</Title>
            <Input
              label="Titel"
              value={title}
              onChangeText={setTitle}
              placeholder="z. B. Grammatik, Vokabelnotizen …"
              autoFocus
            />

            <View style={{ gap: spacing.sm }}>
              <Body muted>Farbe</Body>
              <Row gap={spacing.sm}>
                {COVER_COLORS.map((color) => (
                  <Button
                    key={color}
                    label=""
                    fullWidth={false}
                    onPress={() => setCoverColor(color)}
                    style={{
                      width: 40,
                      height: 40,
                      minHeight: 40,
                      backgroundColor: color,
                      borderColor: coverColor === color ? colors.text : color,
                      borderWidth: coverColor === color ? 3 : 1,
                    }}
                  />
                ))}
              </Row>
            </View>

            <Button
              label="Heft anlegen"
              onPress={() => create.mutate()}
              disabled={title.trim().length < 1}
              loading={create.isPending}
            />
            <Button label="Abbrechen" variant="ghost" onPress={() => setIsCreating(false)} />
          </SafeAreaView>
        </View>
      </Modal>
    </>
  );
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('de-DE', { day: '2-digit', month: 'short' });
}

const sheetBackdrop = {
  flex: 1,
  backgroundColor: 'rgba(15, 23, 42, 0.4)',
  justifyContent: 'flex-end' as const,
};

const sheetStyle = {
  backgroundColor: colors.background,
  borderTopLeftRadius: radius.xl,
  borderTopRightRadius: radius.xl,
  padding: spacing.lg,
  gap: spacing.md,
};
