import React from 'react';
import { Text, View } from 'react-native';
import { alert } from '../../utils/alert';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { CEFR_LABELS } from '@lingua/shared';
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
import { subscriptionApi, usersApi } from '../../api/endpoints';
import { useAuthStore, useIsPremium } from '../../store/auth.store';
import { colors, radius, spacing, typography } from '../../theme';

export default function ProfileScreen() {
  const queryClient = useQueryClient();
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const refreshUser = useAuthStore((state) => state.refreshUser);
  const isPremium = useIsPremium();

  const subscription = useQuery({ queryKey: ['subscription'], queryFn: subscriptionApi.status });

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
          <Card
            key={profile.id}
            style={
              profile.isActive
                ? { borderColor: colors.primary, borderWidth: 2, backgroundColor: colors.primarySoft }
                : { borderWidth: 1 }
            }
            onPress={profile.isActive ? undefined : () => switchProfile.mutate(profile.id)}
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
            {profile.isActive ? <Caption>Aktiv</Caption> : <Caption>Zum Wechseln tippen</Caption>}
          </Card>
        ))}
        {activeProfile ? (
          <Caption>Tagesziel: {activeProfile.dailyGoalMinutes} Minuten</Caption>
        ) : null}
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

const avatarStyle = {
  width: 72,
  height: 72,
  borderRadius: radius.full,
  backgroundColor: colors.primarySoft,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};
