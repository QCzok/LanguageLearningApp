import React from 'react';
import { Platform, Text, View } from 'react-native';
import { Button } from './index';
import { colors, spacing, typography } from '../theme';

interface Props {
  children: React.ReactNode;
}

interface State {
  error: Error | null;
}

/**
 * Auffangnetz für die ganze App.
 *
 * Ohne diese Grenze führt ein Absturz irgendwo im Baum (z. B. ein seltener
 * interner Fehler einer Navigations- oder Layout-Bibliothek) dazu, dass React
 * den kompletten Baum abbaut – der Bildschirm wird schlagartig weiß, ohne
 * jede Möglichkeit für die Nutzerin, weiterzumachen. Diese Komponente fängt
 * einen solchen Fehler ab und bietet stattdessen einen Neustart der Ansicht
 * an, statt eine leere Seite zu zeigen.
 */
export class ErrorBoundary extends React.Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error('Unerwarteter Fehler, von der ErrorBoundary aufgefangen:', error, info.componentStack);
  }

  private reset = () => {
    if (Platform.OS === 'web' && typeof window !== 'undefined') {
      window.location.reload();
      return;
    }
    this.setState({ error: null });
  };

  render() {
    if (this.state.error) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: spacing.md, padding: spacing.xl, backgroundColor: colors.background }}>
          <Text style={{ fontSize: 36 }}>⚠️</Text>
          <Text style={[typography.heading, { color: colors.text, textAlign: 'center' }]}>
            Diese Ansicht konnte nicht angezeigt werden.
          </Text>
          <Text style={[typography.body, { color: colors.textMuted, textAlign: 'center' }]}>
            Ein unerwarteter Fehler ist aufgetreten. Ihre Antworten sind gespeichert.
          </Text>
          <Button label="Neu laden" onPress={this.reset} fullWidth={false} />
        </View>
      );
    }

    return this.props.children;
  }
}
