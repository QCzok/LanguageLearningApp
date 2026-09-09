import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';
import type { AuthTokens } from '@lingua/shared';

const ACCESS_KEY = 'lingua.accessToken';
const REFRESH_KEY = 'lingua.refreshToken';

/**
 * Tokens gehören in den Secure Store (Keychain / Keystore), nicht in AsyncStorage.
 * Im Web gibt es keinen Secure Store – dort fällt die Ablage auf localStorage zurück,
 * was für die Entwicklung genügt.
 */
const isWeb = Platform.OS === 'web';

async function setItem(key: string, value: string): Promise<void> {
  if (isWeb) {
    globalThis.localStorage?.setItem(key, value);
    return;
  }
  await SecureStore.setItemAsync(key, value);
}

async function getItem(key: string): Promise<string | null> {
  if (isWeb) return globalThis.localStorage?.getItem(key) ?? null;
  return SecureStore.getItemAsync(key);
}

async function removeItem(key: string): Promise<void> {
  if (isWeb) {
    globalThis.localStorage?.removeItem(key);
    return;
  }
  await SecureStore.deleteItemAsync(key);
}

export const tokenStorage = {
  async save(tokens: Pick<AuthTokens, 'accessToken' | 'refreshToken'>): Promise<void> {
    await Promise.all([
      setItem(ACCESS_KEY, tokens.accessToken),
      setItem(REFRESH_KEY, tokens.refreshToken),
    ]);
  },

  getAccessToken: () => getItem(ACCESS_KEY),
  getRefreshToken: () => getItem(REFRESH_KEY),

  async clear(): Promise<void> {
    await Promise.all([removeItem(ACCESS_KEY), removeItem(REFRESH_KEY)]);
  },
};
