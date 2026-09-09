import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useMutation } from '@tanstack/react-query';
import {
  Body,
  Button,
  Caption,
  Card,
  Heading,
  Input,
  Row,
  Screen,
  Title,
} from '../../components';
import { aiApi } from '../../api/endpoints';
import { colors, spacing, typography } from '../../theme';

const SUGGESTIONS = [
  'Wann benutze ich present perfect statt simple past?',
  'Was ist der Unterschied zwischen "make" und "do"?',
  'Wie bilde ich Bedingungssätze (if-clauses)?',
  'Wann steht "the" vor einem Substantiv?',
];

export default function GrammarScreen() {
  const [question, setQuestion] = useState('');

  const ask = useMutation({ mutationFn: (value: string) => aiApi.grammar(value) });
  const result = ask.data;

  function submit(value: string): void {
    const trimmed = value.trim();
    if (trimmed.length < 3) return;
    setQuestion(trimmed);
    ask.mutate(trimmed);
  }

  return (
    <Screen scroll>
      <View style={{ gap: spacing.sm }}>
        <Title>Was möchtest du verstehen?</Title>
        <Body muted>
          Frag nach Grammatikregeln, Wortbedeutungen oder danach, warum eine Korrektur so lautet.
        </Body>
      </View>

      <Input
        value={question}
        onChangeText={setQuestion}
        placeholder="Deine Frage …"
        multiline
        style={{ minHeight: 80, textAlignVertical: 'top', paddingTop: spacing.md }}
      />

      <Button
        label="Erklären lassen"
        variant="premium"
        onPress={() => submit(question)}
        disabled={question.trim().length < 3}
        loading={ask.isPending}
      />

      {!result && !ask.isPending ? (
        <View style={{ gap: spacing.sm }}>
          <Caption>Beispiele</Caption>
          {SUGGESTIONS.map((suggestion) => (
            <Card key={suggestion} onPress={() => submit(suggestion)}>
              <Body>{suggestion}</Body>
            </Card>
          ))}
        </View>
      ) : null}

      {ask.isError ? (
        <Card style={{ backgroundColor: colors.dangerSoft, borderColor: colors.danger }}>
          <Caption>{(ask.error as Error).message}</Caption>
        </Card>
      ) : null}

      {result ? (
        <>
          <Card style={{ backgroundColor: colors.premiumSoft, borderColor: colors.premium }}>
            <Heading>{result.topic}</Heading>
            <Text style={[typography.body, { lineHeight: 24 }]}>{result.explanation}</Text>
          </Card>

          {result.examples.length > 0 ? (
            <Card>
              <Heading>Beispiele</Heading>
              {result.examples.map((example, index) => (
                <View key={index} style={{ gap: 2, paddingVertical: spacing.xs }}>
                  <Text style={typography.bodyStrong}>{example.sentence}</Text>
                  <Caption>{example.translation}</Caption>
                </View>
              ))}
            </Card>
          ) : null}

          {result.commonMistakes.length > 0 ? (
            <Card>
              <Heading>Häufige Fehler</Heading>
              {result.commonMistakes.map((mistake, index) => (
                <Row key={index} gap={spacing.sm} style={{ alignItems: 'flex-start' }}>
                  <Text>⚠️</Text>
                  <Body>{mistake}</Body>
                </Row>
              ))}
            </Card>
          ) : null}

          {result.relatedTopics.length > 0 ? (
            <Card>
              <Heading>Passt dazu</Heading>
              {result.relatedTopics.map((related) => (
                <Button
                  key={related}
                  label={related}
                  variant="ghost"
                  onPress={() => submit(`Erkläre mir: ${related}`)}
                />
              ))}
            </Card>
          ) : null}
        </>
      ) : null}
    </Screen>
  );
}
