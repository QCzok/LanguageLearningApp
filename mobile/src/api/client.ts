import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import Constants from 'expo-constants';
import type { AuthTokens } from '@lingua/shared';
import { tokenStorage } from './token-storage';

const API_URL =
  (Constants.expoConfig?.extra as { apiUrl?: string } | undefined)?.apiUrl ??
  'http://localhost:3000/api/v1';

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
    (error.code === 'ECONNABORTED'
      ? 'Zeitüberschreitung – bitte Verbindung prüfen.'
      : 'Keine Verbindung zum Server.');

  const apiError = new Error(message) as ApiError;
  apiError.status = error.response?.status ?? 0;
  apiError.code = data?.error;
  apiError.fieldErrors = messages;
  return apiError;
}
