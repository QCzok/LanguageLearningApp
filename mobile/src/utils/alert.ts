import { Alert as NativeAlert, Platform } from 'react-native';

export interface AlertButton {
  text: string;
  style?: 'default' | 'cancel' | 'destructive';
  onPress?: () => void;
}

/**
 * Cross-Platform-Ersatz für `Alert.alert`.
 *
 * `react-native-web` implementiert `Alert.alert` als reinen No-op –
 * `class Alert { static alert() {} }` – ohne Dialog, ohne Aufruf der
 * Buttons. Jede Bestätigung, die darauf aufbaut (Abmelden, Löschen,
 * Zurücksetzen …), wirkte im Web deshalb wie ein toter Knopf: Der Tap kam
 * an, aber weder die Frage noch der `onPress` der gewählten Aktion.
 *
 * Diese Funktion hat dieselbe Signatur wie `Alert.alert` und ist an jeder
 * bisherigen Aufrufstelle ein Drop-in-Ersatz. Auf iOS/Android bleibt sie
 * eine reine Weiterleitung; im Browser nutzt sie `window.alert` bzw.
 * `window.confirm` – blockierend, aber funktionierend.
 */
export function alert(title: string, message?: string, buttons?: AlertButton[]): void {
  if (Platform.OS !== 'web') {
    NativeAlert.alert(title, message, buttons);
    return;
  }

  const text = message ? `${title}\n\n${message}` : title;

  if (!buttons || buttons.length === 0) {
    window.alert(text);
    return;
  }

  const cancelButton = buttons.find((button) => button.style === 'cancel');
  const confirmButton = buttons.find((button) => button.style !== 'cancel') ?? buttons[0];

  if (window.confirm(text)) {
    confirmButton?.onPress?.();
  } else {
    cancelButton?.onPress?.();
  }
}
