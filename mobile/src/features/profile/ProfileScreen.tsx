import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { alert } from '../../utils/alert';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AVATAR_ICONS, CEFR_LEVELS } from '@lingua/shared';
import type { AvatarIconId, CefrLevel, LanguageDto, LearningProfileDto } from '@lingua/shared';
import {
  Body,
  Button,
  Caption,
  Card,
  Heading,
  LevelBadge,
  Row,
  Screen,
  Title,
} from '../../components';
import { languagesApi, usersApi } from '../../api/endpoints';
import { CACHE, resetQueryCache } from '../../api/query-client';
import { useTranslation } from '../../i18n';
import { useAuthStore } from '../../store/auth.store';
import { colors, radius, spacing, typography } from '../../theme';

export default function ProfileScreen() {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const user = useAuthStore((state) => state.user);
  const signOut = useAuthStore((state) => state.signOut);
  const deleteProfile = useAuthStore((state) => state.deleteProfile);
  const hasOtherProfiles = useAuthStore(
    (state) => state.profiles.some((profile) => profile.userId !== state.user?.id),
  );
  const refreshUser = useAuthStore((state) => state.refreshUser);
  const [pickingAvatar, setPickingAvatar] = useState(false);

  const languages = useQuery({
    queryKey: ['languages'],
    queryFn: languagesApi.list,
    staleTime: CACHE.STATIC,
  });

  const setNativeLanguage = useMutation({
    mutationFn: (nativeLanguage: string) => usersApi.update({ nativeLanguage }),
    onSuccess: async () => {
      await refreshUser();
      // Die Menüsprache und die Erklärungen im Heft hängen beide an dieser
      // Einstellung – alles neu laden, damit nichts in der alten Sprache
      // stehen bleibt.
      await queryClient.invalidateQueries();
    },
  });

  const setAvatarIcon = useMutation({
    mutationFn: (avatarIcon: AvatarIconId) => usersApi.update({ avatarIcon }),
    onSuccess: async () => {
      setPickingAvatar(false);
      await refreshUser();
    },
  });

  const switchProfile = useMutation({
    mutationFn: (profileId: string) => usersApi.activateProfile(profileId),
    onSuccess: async () => {
      await refreshUser();
      // Ein anderes Profil heisst anderer Lernstand und oft andere Sprache.
      // Entwerten allein genügt hier nicht – die alten Daten blieben sichtbar,
      // bis nachgeladen ist. Der Cache wird verworfen, auch der gespeicherte.
      await resetQueryCache();
    },
  });

  if (!user) return null;
  const activeProfile = user.profiles.find((profile) => profile.isActive);
  const currentIcon = AVATAR_ICONS.find((icon) => icon.id === user.avatarIcon);

  return (
    <Screen scroll>
      <Card style={{ alignItems: 'center', gap: spacing.sm }}>
        <Pressable onPress={() => setPickingAvatar((value) => !value)} hitSlop={8}>
          <View style={avatarStyle}>
            {currentIcon ? (
              <Text style={{ fontSize: 36 }}>{currentIcon.emoji}</Text>
            ) : (
              <Text style={{ fontSize: 32 }}>{user.displayName.charAt(0).toUpperCase()}</Text>
            )}
          </View>
        </Pressable>
        <Pressable onPress={() => setPickingAvatar((value) => !value)} hitSlop={8}>
          <Text style={changeLevelLink}>
            {pickingAvatar ? t('commonCancel') : t('profileChangeAvatar')}
          </Text>
        </Pressable>
        {pickingAvatar ? (
          <View>
            <Caption>{t('profileChooseAvatar')}</Caption>
            <Row gap={spacing.xs} style={{ flexWrap: 'wrap', justifyContent: 'center', marginTop: spacing.xs }}>
              {AVATAR_ICONS.map((icon) => {
                const active = icon.id === user.avatarIcon;
                return (
                  <Pressable
                    key={icon.id}
                    disabled={setAvatarIcon.isPending}
                    onPress={() => setAvatarIcon.mutate(icon.id)}
                    style={[avatarChip, active && avatarChipActive]}
                  >
                    <Text style={{ fontSize: 24 }}>{icon.emoji}</Text>
                  </Pressable>
                );
              })}
            </Row>
          </View>
        ) : null}
        <Title>{user.displayName}</Title>
      </Card>

      <Row gap={spacing.md}>
        <Card style={{ flex: 1, alignItems: 'center' }}>
          <Text style={typography.title}>{user.xp}</Text>
          <Caption>XP</Caption>
        </Card>
        <Card style={{ flex: 1, alignItems: 'center' }}>
          <Text style={typography.title}>{user.streakDays}</Text>
          <Caption>{t('profileStatStreak')}</Caption>
        </Card>
        <Card style={{ flex: 1, alignItems: 'center' }}>
          <Text style={typography.title}>{user.profiles.length}</Text>
          <Caption>{t('profileStatLanguages')}</Caption>
        </Card>
      </Row>

      <Card>
        <Heading>{t('profileYourLanguages')}</Heading>
        {user.profiles.map((profile) => (
          <LanguageProfileCard
            key={profile.id}
            profile={profile}
            onSwitch={() => switchProfile.mutate(profile.id)}
          />
        ))}
        {activeProfile ? (
          <Caption>
            {t('profileDailyGoal', { minutes: activeProfile.dailyGoalMinutes })}
          </Caption>
        ) : null}
        <AddLanguageSection languages={languages.data ?? []} existingProfiles={user.profiles} />
      </Card>

      <Card>
        <Heading>{t('profileNativeLanguage')}</Heading>
        <Caption>{t('profileNativeLanguageHint')}</Caption>
        <Row gap={spacing.sm} style={{ flexWrap: 'wrap', marginTop: spacing.xs }}>
          {(languages.data ?? []).map((language) => {
            const active = language.code === user.nativeLanguage;
            return (
              <Card
                key={language.id}
                onPress={active ? undefined : () => setNativeLanguage.mutate(language.code)}
                style={[
                  { paddingVertical: spacing.sm, paddingHorizontal: spacing.md, gap: 0 },
                  active
                    ? { borderColor: colors.primary, borderWidth: 2, backgroundColor: colors.primarySoft }
                    : { borderWidth: 1 },
                ]}
              >
                <Row gap={spacing.xs}>
                  <Text style={{ fontSize: 18 }}>{language.flagEmoji}</Text>
                  <Body>{language.nativeName}</Body>
                </Row>
              </Card>
            );
          })}
        </Row>
      </Card>

      {/* Kein Abmelden, sondern ein Wechsel: Das Profil bleibt auf dem Gerät
          und steht beim nächsten Start wieder in der Auswahl. Wirklich
          verschwinden soll es nur über den zweiten, ausdrücklichen Weg –
          und dann auch serverseitig samt Lernstand. */}
      <Button
        label={hasOtherProfiles ? t('profileSwitchProfile') : t('profileLockProfile')}
        variant="secondary"
        onPress={() => void signOut()}
      />

      {/* Das Löschen stand vorher als nackter roter Text unter dem letzten
          Kasten – die folgenreichste Handlung des Bildschirms mit der
          geringsten Fassung darum. Jetzt sitzt sie in einem eigenen Kasten mit
          rotem Rand, der vorher sagt, was verschwindet. Die Rückfrage darunter
          bleibt, wie sie war. */}
      <Card style={{ borderColor: colors.danger, gap: spacing.sm }}>
        <Caption>{t('profileDeleteExplainer')}</Caption>
        <Button
          label={t('profileDeleteProfile')}
          variant="ghost"
          onPress={() =>
            alert(t('profileDeleteTitle'), t('profileDeleteBody', { name: user.displayName }), [
              { text: t('commonCancel'), style: 'cancel' },
              {
                text: t('commonDelete'),
                style: 'destructive',
                onPress: () => void deleteProfile().catch(() => undefined),
              },
            ])
          }
        />
      </Card>
    </Screen>
  );
}

/**
 * Eine Sprachkarte trägt jetzt zwei unabhängige Aktionen: den Kartenkörper
 * zum Wechseln der aktiven Sprache (wie zuvor) und einen eigenen Link zum
 * Ändern des Niveaus – auch für ein gerade nicht aktives Profil. Deshalb
 * `isActive` bei jeder Niveau-Änderung ausdrücklich mitschicken: Ohne dieses
 * Feld setzt der Server es standardmäßig auf `true` und würde ein inaktives
 * Profil allein durchs Ändern des Niveaus versehentlich aktivieren.
 */
function LanguageProfileCard({
  profile,
  onSwitch,
}: {
  profile: LearningProfileDto;
  onSwitch: () => void;
}) {
  const { t, tLanguage, tLevelShort } = useTranslation();
  const refreshUser = useAuthStore((state) => state.refreshUser);
  const [editingLevel, setEditingLevel] = useState(false);

  const setLevel = useMutation({
    mutationFn: (level: CefrLevel) =>
      usersApi.setLearningProfile({
        languageId: profile.language.id,
        level,
        levelSource: 'SELF_SELECTED',
        dailyGoalMinutes: profile.dailyGoalMinutes,
        isActive: profile.isActive,
      }),
    onSuccess: async () => {
      setEditingLevel(false);
      await refreshUser();
      // Sprachabhängige Inhalte (Lehrwerk, Bibliothek, Vokabeln …) richten
      // sich nach dem Niveau – der alte Stand darf nicht stehen bleiben.
      await resetQueryCache();
    },
  });

  return (
    <Card
      style={
        profile.isActive
          ? { borderColor: colors.primary, borderWidth: 2, backgroundColor: colors.primarySoft }
          : { borderWidth: 1 }
      }
      onPress={profile.isActive ? undefined : onSwitch}
    >
      <Row gap={spacing.md}>
        <Text style={{ fontSize: 28 }}>{profile.language.flagEmoji}</Text>
        <View style={{ flex: 1 }}>
          <Body>{tLanguage(profile.language.code, profile.language.name)}</Body>
          <Caption>
            {tLevelShort(profile.level)} ·{' '}
            {profile.levelSource === 'PLACEMENT_TEST'
              ? t('profileLevelFromTest')
              : t('profileLevelSelfSelected')}
          </Caption>
        </View>
        <LevelBadge level={profile.level} />
      </Row>

      <Row gap={spacing.sm}>
        {profile.isActive ? (
          <Caption>{t('profileActive')}</Caption>
        ) : (
          <Caption>{t('profileTapToSwitch')}</Caption>
        )}
        <View style={{ flex: 1 }} />
        <Pressable onPress={() => setEditingLevel((value) => !value)} hitSlop={8}>
          <Text style={changeLevelLink}>
            {editingLevel ? t('commonCancel') : t('profileChangeLevel')}
          </Text>
        </Pressable>
      </Row>

      {editingLevel ? (
        <Row gap={spacing.xs} style={{ flexWrap: 'wrap', marginTop: spacing.xs }}>
          {CEFR_LEVELS.map((level) => {
            const active = level === profile.level;
            return (
              <Pressable
                key={level}
                disabled={setLevel.isPending}
                onPress={() => setLevel.mutate(level)}
                style={[levelChip, active && levelChipActive]}
              >
                <Text style={[typography.label, { color: active ? colors.textInverse : colors.text }]}>
                  {level}
                </Text>
              </Pressable>
            );
          })}
        </Row>
      ) : null}
    </Card>
  );
}

/**
 * Neue Sprache hinzufügen – zweistufig: erst die Sprache aus den noch nicht
 * gelernten auswählen, dann darunter das Startniveau. Die neue Sprache wird
 * bewusst nicht sofort aktiv (kein `isActive`-Feld hier, das Backend setzt
 * neue Profile über den Bestätigungsweg unten gezielt auf `false`) – das
 * Weiterlernen an welcher Sprache man möchte bleibt ein eigener, zweiter
 * Schritt über den schon vorhandenen „Zum Wechseln tippen“-Weg.
 */
function AddLanguageSection({
  languages,
  existingProfiles,
}: {
  languages: LanguageDto[];
  existingProfiles: LearningProfileDto[];
}) {
  const { t, tLanguage } = useTranslation();
  const queryClient = useQueryClient();
  const refreshUser = useAuthStore((state) => state.refreshUser);
  const [open, setOpen] = useState(false);
  const [pickingLanguageId, setPickingLanguageId] = useState<string | null>(null);

  const addLanguage = useMutation({
    mutationFn: (payload: { languageId: string; level: CefrLevel }) =>
      usersApi.setLearningProfile({
        languageId: payload.languageId,
        level: payload.level,
        levelSource: 'SELF_SELECTED',
        isActive: false,
      }),
    onSuccess: async () => {
      setOpen(false);
      setPickingLanguageId(null);
      await refreshUser();
      await queryClient.invalidateQueries();
    },
  });

  const existingLanguageIds = new Set(existingProfiles.map((profile) => profile.language.id));
  const available = languages.filter(
    (language) => language.isLearnable && !existingLanguageIds.has(language.id),
  );

  if (available.length === 0) return null;

  return (
    <View style={{ marginTop: spacing.sm, gap: spacing.sm }}>
      <Pressable
        onPress={() => {
          setOpen((value) => !value);
          setPickingLanguageId(null);
        }}
        hitSlop={8}
      >
        <Text style={changeLevelLink}>
          {open ? t('commonCancel') : t('profileAddLanguage')}
        </Text>
      </Pressable>

      {open
        ? available.map((language) => {
            const picking = pickingLanguageId === language.id;
            return (
              <View key={language.id} style={{ gap: spacing.xs }}>
                <Card
                  onPress={() => setPickingLanguageId(picking ? null : language.id)}
                  style={picking ? { borderColor: colors.primary, borderWidth: 2 } : { borderWidth: 1 }}
                >
                  <Row gap={spacing.md}>
                    <Text style={{ fontSize: 24 }}>{language.flagEmoji}</Text>
                    <View style={{ flex: 1 }}>
                      <Body>{tLanguage(language.code, language.name)}</Body>
                    </View>
                    <Text style={{ fontSize: 20, color: colors.textMuted }}>{picking ? '−' : '+'}</Text>
                  </Row>
                </Card>

                {picking ? (
                  <Row gap={spacing.xs} style={{ flexWrap: 'wrap', paddingLeft: spacing.sm }}>
                    {CEFR_LEVELS.map((level) => (
                      <Pressable
                        key={level}
                        disabled={addLanguage.isPending}
                        onPress={() => addLanguage.mutate({ languageId: language.id, level })}
                        style={levelChip}
                      >
                        <Text style={typography.label}>{level}</Text>
                      </Pressable>
                    ))}
                  </Row>
                ) : null}
              </View>
            );
          })
        : null}
    </View>
  );
}

const changeLevelLink = {
  ...typography.caption,
  color: colors.primary,
  textDecorationLine: 'underline' as const,
};

const levelChip = {
  paddingVertical: spacing.xs,
  paddingHorizontal: spacing.md,
  borderRadius: radius.full,
  borderWidth: 1,
  borderColor: colors.border,
  backgroundColor: colors.surface,
};

const levelChipActive = {
  backgroundColor: colors.primary,
  borderColor: colors.primary,
};

const avatarChip = {
  width: 44,
  height: 44,
  borderRadius: radius.full,
  borderWidth: 1,
  borderColor: colors.border,
  backgroundColor: colors.surface,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const avatarChipActive = {
  borderColor: colors.primary,
  borderWidth: 2,
  backgroundColor: colors.primarySoft,
};

const avatarStyle = {
  width: 72,
  height: 72,
  borderRadius: radius.full,
  backgroundColor: colors.primarySoft,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};
