import { create } from 'zustand';
import type { AuthResponse, LearningProfileDto, UserDto } from '@lingua/shared';
import { setUnauthorizedHandler } from '../api/client';
import { authApi, usersApi } from '../api/endpoints';
import { tokenStorage } from '../api/token-storage';

interface AuthState {
  user: UserDto | null;
  /** true bis der gespeicherte Token beim App-Start geprüft wurde. */
  isBootstrapping: boolean;
  isSubmitting: boolean;
  error: string | null;

  bootstrap: () => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, displayName: string) => Promise<void>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  isBootstrapping: true,
  isSubmitting: false,
  error: null,

  /** Beim Start: gespeicherten Token gegen /users/me prüfen. */
  async bootstrap() {
    try {
      const token = await tokenStorage.getAccessToken();
      if (!token) {
        set({ isBootstrapping: false });
        return;
      }
      const user = await usersApi.me();
      set({ user, isBootstrapping: false });
    } catch {
      await tokenStorage.clear();
      set({ user: null, isBootstrapping: false });
    }
  },

  async login(email, password) {
    set({ isSubmitting: true, error: null });
    try {
      const response = await authApi.login({ email, password });
      await applyAuth(response);
      set({ user: response.user, isSubmitting: false });
    } catch (error) {
      set({ isSubmitting: false, error: toMessage(error) });
      throw error;
    }
  },

  async register(email, password, displayName) {
    set({ isSubmitting: true, error: null });
    try {
      const response = await authApi.register({ email, password, displayName });
      await applyAuth(response);
      set({ user: response.user, isSubmitting: false });
    } catch (error) {
      set({ isSubmitting: false, error: toMessage(error) });
      throw error;
    }
  },

  async logout() {
    const refreshToken = await tokenStorage.getRefreshToken();
    // Der Server-Aufruf darf scheitern (offline) – lokal wird trotzdem abgemeldet.
    if (refreshToken) await authApi.logout(refreshToken).catch(() => undefined);
    await tokenStorage.clear();
    set({ user: null, error: null });
  },

  async refreshUser() {
    if (!get().user) return;
    const user = await usersApi.me().catch(() => null);
    if (user) set({ user });
  },

  clearError: () => set({ error: null }),
}));

async function applyAuth(response: AuthResponse): Promise<void> {
  await tokenStorage.save(response);
}

function toMessage(error: unknown): string {
  return error instanceof Error ? error.message : 'Etwas ist schiefgelaufen.';
}

/** Läuft die Sitzung serverseitig ab, fällt die App zurück auf den Login. */
setUnauthorizedHandler(() => {
  void tokenStorage.clear();
  useAuthStore.setState({ user: null });
});

/** Bequemer Zugriff auf das aktive Lernprofil. */
export function useActiveProfile(): LearningProfileDto | null {
  return useAuthStore((state) => state.user?.profiles.find((p) => p.isActive) ?? null);
}

export function useIsPremium(): boolean {
  return useAuthStore((state) => {
    const user = state.user;
    if (!user || user.plan !== 'PREMIUM') return false;
    return !user.premiumUntil || new Date(user.premiumUntil).getTime() > Date.now();
  });
}
