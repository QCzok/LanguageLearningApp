import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import Constants from 'expo-constants';
import type { AuthTokens } from '@lingua/shared';
import { deviceLocale, translate, type SupportedLocale } from '../i18n/translations';
import { tokenStorage } from './token-storage';

const API_URL =
  (Constants.expoConfig?.extra as { apiUrl?: string } | undefined)?.apiUrl ??
  'http://localhost:3000/api/v1';

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

/**
 * Großzügig bemessen, weil die erste Anfrage nach einer Ruhephase nicht nur
 * beantwortet, sondern der Server erst hochgefahren werden muss (siehe
 * `warmUpApi`). Mit den ursprünglichen 20 Sekunden brach genau dieser Fall ab:
 * Das Anlegen eines Profils endete in einer Zeitüberschreitung, obwohl nichts
 * kaputt war – der Server war nur noch nicht wach.
 */
const REQUEST_TIMEOUT = 45_000;

export const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: REQUEST_TIMEOUT,
  headers: { 'Content-Type': 'application/json' },
});

/**
 * Weckt den Server, ohne auf ihn zu warten.
 *
 * Der Dienst läuft auf einem Tarif, der die Instanz nach einiger Zeit ohne
 * Anfragen anhält. Die nächste Anfrage startet sie wieder und wartet dabei auf
 * Containerstart, Migrationslauf und Datenbankverbindung – zusammen ein
 * Vielfaches einer gewöhnlichen Antwort. Träfe das den ersten echten Aufruf
 * der App, stünde der Lernende vor einem Fehler, bevor er irgendetwas getan
 * hat.
 *
 * Deshalb geht dieser Weckruf schon beim Start hinaus: Der Server wacht auf,
 * während Schriften und Bilder laden und der Lernende seinen Namen eintippt.
 * Eigene axios-Instanz und verschlucktes Ergebnis – der Aufruf braucht weder
 * Token noch Fehlerbehandlung, es zählt allein, dass er ankommt.
 */
export function warmUpApi(): void {
  void axios.get(`${API_URL}/health`, { timeout: REQUEST_TIMEOUT }).catch(() => undefined);
}

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
