import React from 'react';
import { Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Body, Card, ErrorState, Heading, Loading, Row, Screen, Title } from '../../components';
import { languagesApi } from '../../api/endpoints';
import { spacing, typography } from '../../theme';
import type { OnboardingStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<OnboardingStackParamList, 'LanguageSelect'>;

export default function LanguageSelectScreen({ navigation }: Props) {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['languages'],
    queryFn: languagesApi.list,
    staleTime: 60 * 60 * 1000, // Sprachliste ändert sich praktisch nie
  });

  if (isLoading) return <Loading label="Sprachen werden geladen …" />;
  if (isError || !data) {
    return <ErrorState message="Die Sprachen konnten nicht geladen werden." onRetry={refetch} />;
  }

  return (
    <Screen scroll>
      <View style={{ gap: spacing.sm }}>
        <Title>Was möchtest du lernen?</Title>
        <Body muted>
          Du kannst später jederzeit weitere Sprachen hinzufügen und zwischen ihnen wechseln.
        </Body>
      </View>

      <View style={{ gap: spacing.md }}>
        {data.map((language) => (
          <Card
            key={language.id}
            onPress={() =>
              navigation.navigate('LevelChoice', {
                languageId: language.id,
                languageName: language.name,
              })
            }
          >
            <Row gap={spacing.md}>
              <Text style={{ fontSize: 34 }}>{language.flagEmoji}</Text>
              <View style={{ flex: 1 }}>
                <Heading>{language.name}</Heading>
                <Text style={[typography.caption, { color: '#64748B' }]}>{language.nativeName}</Text>
              </View>
              <Text style={{ fontSize: 20, color: '#94A3B8' }}>›</Text>
            </Row>
          </Card>
        ))}
      </View>
    </Screen>
  );
}
