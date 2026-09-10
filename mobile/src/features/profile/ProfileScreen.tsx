import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { alert } from '../../utils/alert';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { CEFR_LABELS, CEFR_LEVELS } from '@lingua/shared';
import type { CefrLevel, LanguageDto, LearningProfileDto } from '@lingua/shared';
import {
  Body,
  Button,
  Caption,
  Card,
  Heading,
  LevelBadge,
  PremiumBadge,
  Row,
  Screen,
  Title,
} from '../../components';
import { languagesApi, subscriptionApi, usersApi } from '../../api/endpoints';
import { useAuthStore, useIsPremium } from '../../store/auth.store';
import { colors, radius, spacing, typography } from '../../theme';

export default function ProfileScreen() {
  const queryClient = useQueryClient();
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const refreshUser = useAuthStore((state) => state.refreshUser);
  const isPremium = useIsPremium();

  const subscription = useQuery({ queryKey: ['subscription'], queryFn: subscriptionApi.status });
  const languages = useQuery({ queryKey: ['languages'], queryFn: languagesApi.list });

  const setNativeLanguage = useMutation({
    mutationFn: (nativeLanguage: string) => usersApi.update({ nativeLanguage }),
    onSuccess: async () => {
      await refreshUser();
      // Erklärungen im Heft übersetzen sich anhand dieser Einstellung.
      await queryClient.invalidateQueries({ queryKey: ['workbook-unit'] });
    },
  });

  const activatePremium = useMutation({
    mutationFn: subscriptionApi.activate,
    onSuccess: async () => {
      await refreshUser();
      await queryClient.invalidateQueries({ queryKey: ['subscription'] });
      await queryClient.invalidateQueries({ queryKey: ['ai-quota'] });
      alert('Premium aktiv', 'Alle KI-Funktionen stehen dir jetzt zur Verfügung.');
    },
  });

  const switchProfile = useMutation({
    mutationFn: (profileId: string) => usersApi.activateProfile(profileId),
    onSuccess: async () => {
      await refreshUser();
      // Alles Sprachabhängige neu laden.
      await queryClient.invalidateQueries();
    },
  });

  if (!user) return null;
  const activeProfile = user.profiles.find((profile) => profile.isActive);

  return (
    <Screen scroll>
      <Card style={{ alignItems: 'center', gap: spacing.sm }}>
        <View style={avatarStyle}>
          <Text style={{ fontSize: 32 }}>{user.displayName.charAt(0).toUpperCase()}</Text>
        </View>
        <Title>{user.displayName}</Title>
        <Caption>{user.email}</Caption>
        {isPremium ? <PremiumBadge /> : null}
      </Card>

      <Row gap={spacing.md}>
        <Card style={{ flex: 1, alignItems: 'center' }}>
          <Text style={typography.title}>{user.xp}</Text>
          <Caption>XP</Caption>
        </Card>
        <Card style={{ flex: 1, alignItems: 'center' }}>
          <Text style={typography.title}>{user.streakDays}</Text>
          <Caption>Tage Serie</Caption>
        </Card>
        <Card style={{ flex: 1, alignItems: 'center' }}>
          <Text style={typography.title}>{user.profiles.length}</Text>
          <Caption>Sprachen</Caption>
        </Card>
      </Row>

      <Card>
        <Heading>Deine Sprachen</Heading>
        {user.profiles.map((profile) => (
          <LanguageProfileCard
            key={profile.id}
            profile={profile}
            onSwitch={() => switchProfile.mutate(profile.id)}
          />
        ))}
        {activeProfile ? (
          <Caption>Tagesziel: {activeProfile.dailyGoalMinutes} Minuten</Caption>
        ) : null}
        <AddLanguageSection languages={languages.data ?? []} existingProfiles={user.profiles} />
      </Card>

      <Card>
        <Heading>Muttersprache</Heading>
        <Caption>
          Grammatik-Erklärungen und Lösungshinweise auf A1 erscheinen zusätzlich in dieser Sprache.
        </Caption>
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

      <Card style={{ borderColor: isPremium ? colors.premium : colors.border }}>
        <Row gap={spacing.sm}>
          <Text style={{ fontSize: 24 }}>✨</Text>
          <View style={{ flex: 1 }}>
            <Heading>Lingua Premium</Heading>
            <Caption>
              {isPremium
                ? `Aktiv${
                    subscription.data?.premiumUntil
                      ? ` bis ${new Date(subscription.data.premiumUntil).toLocaleDateString('de-DE')}`
                      : ''
                  }`
                : 'KI-Korrektur, Chat, Grammatikerklärungen und Empfehlungen'}
            </Caption>
          </View>
        </Row>
        {!isPremium ? (
          <>
            <Button
              label="Premium aktivieren"
              variant="premium"
              loading={activatePremium.isPending}
              onPress={() => activatePremium.mutate()}
            />
            {/* Entwicklungsstand: Die Store-Anbindung (StoreKit / Play Billing)
                ersetzt diesen Knopf später durch den echten Kaufvorgang. */}
            <Caption>Testmodus – noch ohne Zahlungsanbieter.</Caption>
          </>
        ) : null}
      </Card>

      <Button
        label="Abmelden"
        variant="secondary"
        onPress={() =>
          alert('Abmelden?', 'Du kannst dich jederzeit wieder anmelden.', [
            { text: 'Abbrechen', style: 'cancel' },
            { text: 'Abmelden', style: 'destructive', onPress: () => void logout() },
          ])
        }
      />
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
  const queryClient = useQueryClient();
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
      // sich nach dem Niveau – ohne Neuladen zeigten sie noch die alte Stufe.
      await queryClient.invalidateQueries();
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
          <Body>{profile.language.name}</Body>
          <Caption>
            {CEFR_LABELS[profile.level].short} ·{' '}
            {profile.levelSource === 'PLACEMENT_TEST' ? 'per Test ermittelt' : 'selbst gewählt'}
          </Caption>
        </View>
        <LevelBadge level={profile.level} />
      </Row>

      <Row gap={spacing.sm}>
        {profile.isActive ? <Caption>Aktiv</Caption> : <Caption>Zum Wechseln tippen</Caption>}
        <View style={{ flex: 1 }} />
        <Pressable onPress={() => setEditingLevel((value) => !value)} hitSlop={8}>
          <Text style={changeLevelLink}>{editingLevel ? 'Abbrechen' : 'Niveau ändern'}</Text>
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
  const available = languages.filter((language) => !existingLanguageIds.has(language.id));

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
        <Text style={changeLevelLink}>{open ? 'Abbrechen' : '+ Sprache hinzufügen'}</Text>
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
                      <Body>{language.name}</Body>
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

const avatarStyle = {
  width: 72,
  height: 72,
  borderRadius: radius.full,
  backgroundColor: colors.primarySoft,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};
