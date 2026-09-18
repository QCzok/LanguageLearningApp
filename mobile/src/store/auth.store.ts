import { create } from 'zustand';
import type { AvatarIconId, LearningProfileDto, UserDto } from '@lingua/shared';
import { setApiLocale, setUnauthorizedHandler, type ApiError } from '../api/client';
import { authApi, usersApi } from '../api/endpoints';
import * as deviceProfiles from '../api/device-profiles';
import type { DeviceProfile } from '../api/device-profiles';
import { tokenStorage } from '../api/token-storage';
import { deviceLocale, resolveLocale, translate } from '../i18n/translations';

/**
 * Der Sitzungszustand der App – und zugleich die Verwaltung der Profile, die
 * auf diesem Gerät eingerichtet sind.
 *
 * Die App verlangt keine Anmeldung: Statt E-Mail und Passwort gibt man einen
 * Namen und ein Tier-Icon an, und das Gerät merkt sich das Profil (siehe
 * `api/device-profiles`). Serverseitig bleibt jedes Profil ein gewöhnliches
 * Konto – nur eines, dessen Zugangsdaten niemand kennen muss.
 */
interface AuthState {
  user: UserDto | null;
  /** Die auf diesem Gerät eingerichteten Profile – die Auswahl beim Start. */
  profiles: DeviceProfile[];
  /** true bis die gespeicherte Sitzung beim App-Start geprüft wurde. */
  isBootstrapping: boolean;
  isSubmitting: boolean;
  error: string | null;

  bootstrap: () => Promise<void>;
  createProfile: (input: { displayName: string; avatarIcon: AvatarIconId }) => Promise<void>;
  continueAs: (userId: string) => Promise<void>;
  /** Zurück zur Profilauswahl; das Profil bleibt auf dem Gerät. */
  signOut: () => Promise<void>;
  /** Löscht Konto und Lernstand endgültig und entfernt das Profil vom Gerät. */
  deleteProfile: () => Promise<void>;
  refreshUser: () => Promise<void>;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  profiles: [],
  isBootstrapping: true,
  isSubmitting: false,
  error: null,

  /**
   * Beim Start: die Profilliste laden und die letzte Sitzung fortsetzen.
   *
   * Der gespeicherte Token ist der schnelle Weg – wer die App zuletzt benutzt
   * hat, landet ohne Umweg wieder in seinem Lernstand. Trägt er nicht mehr,
   * erscheint die Profilauswahl.
   */
  async bootstrap() {
    const profiles = await deviceProfiles.listProfiles().catch(() => []);
    set({ profiles });

    const token = await tokenStorage.getAccessToken();
    if (!token) {
      set({ isBootstrapping: false });
      return;
    }

    try {
      const user = await usersApi.me();
      applyLocale(user);
      await deviceProfiles.syncProfile(user);
      set({ user, profiles: await deviceProfiles.listProfiles(), isBootstrapping: false });
    } catch (error) {
      // Nur eine abgelehnte Sitzung entwertet die Tokens. Bei einem
      // Netzwerkfehler bleiben sie liegen: Sie sind womöglich noch gültig, und
      // sie wegzuwerfen hieße, den Lernstand an einem schlechten WLAN zu
      // verlieren.
      if ((error as ApiError).status === 401) await tokenStorage.clear();
      set({ user: null, isBootstrapping: false });
    }
  },

  /** Schritt 1 des Einrichtens: Name und Icon – mehr braucht ein Profil nicht. */
  async createProfile({ displayName, avatarIcon }) {
    set({ isSubmitting: true, error: null });
    try {
      // Die Gerätesprache wird gleich als Muttersprache hinterlegt: Ohne sie
      // legt das Backend jedes Konto mit `de` an, und ein englischsprachiger
      // Lernender fände die App danach auf Deutsch vor. Änderbar bleibt sie
      // jederzeit im Profil.
      const response = await authApi.guest({
        displayName,
        avatarIcon,
        nativeLanguage: deviceLocale(),
      });

      await tokenStorage.save(response);
      applyLocale(response.user);
      await deviceProfiles.saveProfile({
        userId: response.user.id,
        displayName: response.user.displayName,
        avatarIcon,
        languageFlag: null,
        languageCode: null,
        languageName: null,
        onboardingCompleted: response.user.onboardingCompleted,
        credentials: response.credentials,
        lastUsedAt: new Date().toISOString(),
      });

      set({
        user: response.user,
        profiles: await deviceProfiles.listProfiles(),
        isSubmitting: false,
      });
    } catch (error) {
      set({ isSubmitting: false, error: toMessage(error) });
      throw error;
    }
  },

  /**
   * Ein Profil aus der Auswahl fortsetzen: Anmeldung mit den Zugangsdaten, die
   * beim Einrichten auf dem Gerät hinterlegt wurden.
   */
  async continueAs(userId) {
    const profile = await deviceProfiles.getProfile(userId);
    if (!profile) {
      set({ profiles: await deviceProfiles.listProfiles() });
      return;
    }

    set({ isSubmitting: true, error: null });
    try {
      const response = await authApi.login({
        email: profile.credentials.email,
        password: profile.credentials.secret,
      });

      await tokenStorage.save(response);
      applyLocale(response.user);
      await deviceProfiles.syncProfile(response.user);
      set({
        user: response.user,
        profiles: await deviceProfiles.listProfiles(),
        isSubmitting: false,
      });
    } catch (error) {
      // Weist der Server die Zugangsdaten ab, gibt es das Konto nicht mehr
      // (gelöscht, Datenbank neu aufgesetzt). Der Eintrag führt dann ins
      // Leere und verschwindet aus der Auswahl, statt bei jedem Versuch
      // erneut zu scheitern.
      const gone = (error as ApiError).status === 401;
      if (gone) await deviceProfiles.removeProfile(userId);
      set({
        isSubmitting: false,
        error: gone
          ? translate(resolveLocale(undefined), 'welcomeProfileGone')
          : toMessage(error),
        profiles: gone ? await deviceProfiles.listProfiles() : get().profiles,
      });
    }
  },

  async signOut() {
    const refreshToken = await tokenStorage.getRefreshToken();
    // Der Server-Aufruf darf scheitern (offline) – lokal wird trotzdem beendet.
    if (refreshToken) await authApi.logout(refreshToken).catch(() => undefined);
    await tokenStorage.clear();
    set({ user: null, error: null, profiles: await deviceProfiles.listProfiles() });
  },

  async deleteProfile() {
    const user = get().user;
    if (!user) return;

    set({ isSubmitting: true, error: null });
    try {
      await usersApi.deleteAccount();
      await deviceProfiles.removeProfile(user.id);
      await tokenStorage.clear();
      set({
        user: null,
        error: null,
        isSubmitting: false,
        profiles: await deviceProfiles.listProfiles(),
      });
    } catch (error) {
      set({ isSubmitting: false, error: toMessage(error) });
      throw error;
    }
  },

  async refreshUser() {
    if (!get().user) return;
    const user = await usersApi.me().catch(() => null);
    if (user) {
      applyLocale(user);
      await deviceProfiles.syncProfile(user);
      set({ user, profiles: await deviceProfiles.listProfiles() });
    }
  },

  clearError: () => set({ error: null }),
}));

/**
 * Die Menüsprache folgt der Muttersprache des Profils – auch für die Teile,
 * die außerhalb von React liegen: die Meldungen der API-Schicht und den
 * `Accept-Language`-Kopf, mit dem das Backend seine Fehlertexte übersetzt.
 */
function applyLocale(user: UserDto): void {
  setApiLocale(resolveLocale(user.nativeLanguage));
}

function toMessage(error: unknown): string {
  return error instanceof Error
    ? error.message
    : translate(resolveLocale(useAuthStore.getState().user?.nativeLanguage), 'commonSomethingWentWrong');
}

/** Läuft die Sitzung serverseitig ab, fällt die App zurück auf die Profilauswahl. */
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
