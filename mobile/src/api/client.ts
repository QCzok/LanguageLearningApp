import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import Constants from 'expo-constants';
import type { AuthTokens } from '@lingua/shared';
import { deviceLocale, translate, type SupportedLocale } from '../i18n/translations';
import { tokenStorage } from './token-storage';

const API_URL =
  (Constants.expoConfig?.extra as { apiUrl?: string } | undefined)?.apiUrl ??
  'http://localhost:3000/api/v1';

/** Schema und Host der API, ohne Pfad – die Wurzel, unter der auch /static liegt. */
const API_ORIGIN = ((): string => {
  const match = /^([a-z][a-z0-9+.-]*:\/\/[^/]+)/i.exec(API_URL);
  return match ? match[1] : '';
})();

/**
 * Macht aus einer vom Backend gelieferten Medien-Adresse eine abspielbare URL.
 *
 * Das Backend liefert Medien-Pfade relativ (`/static/audio/x.mp3`, siehe
 * `MEDIA_BASE_URL`), weil eine absolute Adresse dort nicht zu bilden ist: Sie
 * wird beim Seed in die Datenbank geschrieben und gilt dann für alle Clients
 * gleichermaßen – aber „localhost" bedeutet auf einem Android-Gerät das Gerät
 * selbst und nicht den Entwicklungsrechner. Welcher Host richtig ist, weiß nur
 * die App, denn sie spricht ihn ohnehin schon an. Genau den setzt diese
 * Funktion davor.
 *
 * Eine absolute Adresse (später ein CDN) bleibt unverändert.
 */
export function resolveMediaUrl(url: string): string {
  if (/^[a-z][a-z0-9+.-]*:\/\//i.test(url) || url.startsWith('data:')) return url;
  return `${API_ORIGIN}${url.startsWith('/') ? '' : '/'}${url}`;
}

/**
 * Menüsprache für die Meldungen dieser Schicht (Zeitüberschreitung, kein
 * Server) und für den `Accept-Language`-Kopf, mit dem das Backend seine
 * Fehlertexte übersetzt.
 *
 * Als Modulzustand statt über den Store gelesen: Der Auth-Store importiert
 * diese Datei bereits, ein Import zurück wäre ein Zyklus. Bis der Nutzer
 * geladen ist, gilt die Gerätesprache.
 */
let locale: SupportedLocale = deviceLocale();
export function setApiLocale(next: SupportedLocale): void {
  locale = next;
}

/** Wird von der Auth-Store gesetzt, damit ein 401 die App ausloggen kann. */
let onUnauthorized: (() => void) | null = null;
export function setUnauthorizedHandler(handler: () => void): void {
  onUnauthorized = handler;
}

export const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 20_000,
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  const token = await tokenStorage.getAccessToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  // Das Backend übersetzt seine Fehlermeldungen anhand dieses Kopfes
  // (siehe `AllExceptionsFilter`); ohne ihn bleibt es bei Deutsch.
  config.headers['Accept-Language'] = locale;
  return config;
});

/**
 * Läuft der Access-Token ab, wird genau *ein* Refresh ausgeführt. Parallele
 * Requests warten auf dieselbe Promise, statt jeweils einen eigenen Refresh
 * auszulösen – sonst würde die Token-Rotation im Backend die Sitzung beenden.
 */
let refreshPromise: Promise<string | null> | null = null;

async function refreshAccessToken(): Promise<string | null> {
  const refreshToken = await tokenStorage.getRefreshToken();
  if (!refreshToken) return null;

  try {
    // Eigene axios-Instanz: Der Interceptor darf sich hier nicht selbst aufrufen.
    const { data } = await axios.post<AuthTokens>(`${API_URL}/auth/refresh`, { refreshToken });
    await tokenStorage.save(data);
    return data.accessToken;
  } catch {
    await tokenStorage.clear();
    return null;
  }
}

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const original = error.config as (InternalAxiosRequestConfig & { _retried?: boolean }) | undefined;

    const isAuthCall = original?.url?.includes('/auth/');
    if (error.response?.status !== 401 || !original || original._retried || isAuthCall) {
      return Promise.reject(normalizeError(error));
    }

    original._retried = true;
    refreshPromise ??= refreshAccessToken().finally(() => {
      refreshPromise = null;
    });

    const token = await refreshPromise;
    if (!token) {
      onUnauthorized?.();
      return Promise.reject(normalizeError(error));
    }

    original.headers.Authorization = `Bearer ${token}`;
    return api(original);
  },
);

export interface ApiError extends Error {
  status: number;
  /** 'PremiumRequired' | 'AiQuotaExceeded' | … – steuert gezielte UI-Reaktionen. */
  code?: string;
  fieldErrors?: string[];
}

/** Übersetzt Axios-Fehler in das einheitliche Fehlerformat des Backends. */
function normalizeError(error: AxiosError): ApiError {
  const data = error.response?.data as
    | { message?: string | string[]; error?: string }
    | undefined;

  const messages = Array.isArray(data?.message) ? data.message : undefined;
  const message =
    messages?.[0] ??
    (typeof data?.message === 'string' ? data.message : undefined) ??
    translate(locale, error.code === 'ECONNABORTED' ? 'commonNetworkTimeout' : 'commonNetworkOffline');

  const apiError = new Error(message) as ApiError;
  apiError.status = error.response?.status ?? 0;
  apiError.code = data?.error;
  apiError.fieldErrors = messages;
  return apiError;
}
