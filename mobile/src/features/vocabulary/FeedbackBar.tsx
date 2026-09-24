import React from 'react';
import { Text, View } from 'react-native';
import { Button } from '../../components';
import { useTranslation } from '../../i18n';
import { colors, radius, spacing, typography } from '../../theme';

/** Rückmeldung unten am Bildschirm, wie man sie aus Lern-Apps kennt: grün oder rot. */
export function FeedbackBar({
  kind,
  title,
  detail,
  onContinue,
}: {
  kind: 'correct' | 'typo' | 'wrong';
  title: string;
  detail?: string;
  onContinue: () => void;
}) {
  const { t } = useTranslation();
  const tone = kind === 'wrong' ? colors.danger : colors.success;
  const soft = kind === 'wrong' ? colors.dangerSoft : colors.successSoft;
  return (
    <View style={[feedbackBar, { backgroundColor: soft, borderColor: tone }]}>
      <Text style={[feedbackTitle, { color: tone }]}>{title}</Text>
      {detail ? <Text style={feedbackDetail}>{detail}</Text> : null}
      <Button label={t('commonNext')} variant={kind === 'wrong' ? 'danger' : 'primary'} onPress={onContinue} />
    </View>
  );
}

const feedbackBar = {
  gap: spacing.sm,
  padding: spacing.md,
  borderRadius: radius.lg,
  borderWidth: 1.5,
};

const feedbackTitle = {
  ...typography.heading,
};

const feedbackDetail = {
  ...typography.body,
  color: colors.text,
};
