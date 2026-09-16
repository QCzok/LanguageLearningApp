import React from 'react';
import { Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Body, Card, ErrorState, Heading, Loading, Row, Screen, Title } from '../../components';
import { languagesApi } from '../../api/endpoints';
import { useTranslation } from '../../i18n';
import { colors, spacing, typography } from '../../theme';
import type { OnboardingStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<OnboardingStackParamList, 'LanguageSelect'>;

export default function LanguageSelectScreen({ navigation }: Props) {
  const { t, tLanguage } = useTranslation();
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['languages'],
    queryFn: languagesApi.list,
    staleTime: 60 * 60 * 1000, // Sprachliste ändert sich praktisch nie
  });

  if (isLoading) return <Loading label={t('onboardingLanguagesLoading')} />;
  if (isError || !data) {
    return <ErrorState message={t('onboardingLanguagesError')} onRetry={refetch} />;
  }

  return (
    <Screen scroll>
      <View style={{ gap: spacing.sm }}>
        <Title>{t('onboardingWhatToLearn')}</Title>
        <Body muted>{t('onboardingAddLater')}</Body>
      </View>

      <View style={{ gap: spacing.md }}>
        {data
          .filter((language) => language.isLearnable)
          .map((language) => (
            <Card
              key={language.id}
              onPress={() =>
                navigation.navigate('LevelChoice', {
                  languageId: language.id,
                  // Der Name aus der API ist deutsch; weitergereicht wird der
                  // Name in der Muttersprache des Lernenden.
                  languageName: tLanguage(language.code, language.name),
                })
              }
            >
              <Row gap={spacing.md}>
                <Text style={{ fontSize: 34 }}>{language.flagEmoji}</Text>
                <View style={{ flex: 1 }}>
                  <Heading>{tLanguage(language.code, language.name)}</Heading>
                  <Text style={[typography.caption, { color: colors.textMuted }]}>
                    {language.nativeName}
                  </Text>
                </View>
                <Text style={{ fontSize: 20, color: colors.textMuted }}>›</Text>
              </Row>
            </Card>
          ))}
      </View>
    </Screen>
  );
}
