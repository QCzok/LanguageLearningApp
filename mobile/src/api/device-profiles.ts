import type { AvatarIconId, GuestCredentials, UserDto } from '@lingua/shared';
import { getItem, removeItem, setItem } from './token-storage';

/**
 * Die Profile, die auf diesem Gerät eingerichtet wurden.
 *
 * Die App verlangt keine Registrierung: Wer sie öffnet, legt einen Namen und
 * ein Tier-Icon fest und lernt los (siehe `AuthService.createGuest` im
 * Backend). Damit dasselbe Profil beim nächsten Start wiederzufinden ist,
 * verwahrt das Gerät hier seine Zugangsdaten – der Profilwähler beim Start
 * liest genau diese Liste.
 *
 * Jedes Profil liegt unter einem eigenen Schlüssel statt alle zusammen in
 * einem: Der Secure Store auf Android gibt Werte über rund 2 KB nicht
 * zuverlässig zurück, und eine gemeinsame Liste wüchse mit jedem Familien-
 * mitglied darauf zu. Ein Index-Schlüssel hält nur die IDs zusammen.
 */

const INDEX_KEY = 'lingua.profileIndex';

/** Secure-Store-Schlüssel dürfen nur `[A-Za-z0-9._-]` enthalten – cuids tun das. */
const entryKey = (userId: string) => `lingua.profile.${userId}`;

export interface DeviceProfile {
  userId: string;
  displayName: string;
  avatarIcon: AvatarIconId;
  /**
   * Abbild der Lernsprache für den Profilwähler. Er zeigt das Profil, bevor
   * eine Sitzung besteht – nachfragen kann er also nicht.
   */
  languageFlag: string | null;
  languageCode: string | null;
  languageName: string | null;
  /** Ist das Einrichten durchlaufen? Sonst führt „Weiter" zurück in die Schritte. */
  onboardingCompleted: boolean;
  credentials: GuestCredentials;
  /** Bestimmt die Reihenfolge im Wähler: zuletzt benutzt zuerst. */
  lastUsedAt: string;
}

async function readIndex(): Promise<string[]> {
  const raw = await getItem(INDEX_KEY);
  if (!raw) return [];
  try {
    const ids: unknown = JSON.parse(raw);
    return Array.isArray(ids) ? ids.filter((id): id is string => typeof id === 'string') : [];
  } catch {
    return [];
  }
}

async function writeIndex(ids: string[]): Promise<void> {
  await setItem(INDEX_KEY, JSON.stringify(ids));
}

/**
 * Ein einzelnes Profil. Ein unlesbarer Eintrag gilt als nicht vorhanden –
 * kaputte Ablage soll den Start nicht aufhalten, sondern nur diesen Eintrag
 * kosten (aufgeräumt wird er beim nächsten `list()`).
 */
export async function getProfile(userId: string): Promise<DeviceProfile | null> {
  const raw = await getItem(entryKey(userId)).catch(() => null);
  if (!raw) return null;
  try {
    const profile = JSON.parse(raw) as DeviceProfile;
    return profile.userId && profile.credentials?.email && profile.credentials?.secret
      ? profile
      : null;
  } catch {
    return null;
  }
}

/** Alle Profile, zuletzt benutztes zuerst. Verwaiste Index-Einträge fallen weg. */
export async function listProfiles(): Promise<DeviceProfile[]> {
  const ids = await readIndex();
  const entries = await Promise.all(ids.map((id) => getProfile(id)));
  const profiles = entries.filter((entry): entry is DeviceProfile => entry !== null);

  if (profiles.length !== ids.length) {
    await writeIndex(profiles.map((profile) => profile.userId));
  }

  return profiles.sort((a, b) => b.lastUsedAt.localeCompare(a.lastUsedAt));
}

export async function saveProfile(profile: DeviceProfile): Promise<void> {
  await setItem(entryKey(profile.userId), JSON.stringify(profile));
  const ids = await readIndex();
  if (!ids.includes(profile.userId)) await writeIndex([...ids, profile.userId]);
}

/**
 * Schreibt das Abbild eines Profils fort, sobald frische Nutzerdaten vorliegen.
 *
 * Name, Icon und Lernsprache lassen sich in der App ändern; ohne diesen
 * Abgleich zeigte der Profilwähler beim nächsten Start noch den Stand vom
 * Einrichten. Ein Profil, das dieses Gerät nicht kennt (etwa eine Sitzung aus
 * einer älteren Version mit E-Mail-Anmeldung), bleibt unangetastet – seine
 * Zugangsdaten liegen hier nicht, erfinden lassen sie sich nicht.
 */
export async function syncProfile(user: UserDto): Promise<void> {
  const existing = await getProfile(user.id);
  if (!existing) return;

  const active = user.profiles.find((profile) => profile.isActive);
  await saveProfile({
    ...existing,
    displayName: user.displayName,
    avatarIcon: user.avatarIcon ?? existing.avatarIcon,
    languageFlag: active?.language.flagEmoji ?? null,
    languageCode: active?.language.code ?? null,
    languageName: active?.language.name ?? null,
    onboardingCompleted: user.onboardingCompleted,
    lastUsedAt: new Date().toISOString(),
  });
}

export async function removeProfile(userId: string): Promise<void> {
  await removeItem(entryKey(userId)).catch(() => undefined);
  await writeIndex((await readIndex()).filter((id) => id !== userId));
}
