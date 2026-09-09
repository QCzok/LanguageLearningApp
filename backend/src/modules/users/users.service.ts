import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CefrLevel, LevelSource, Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { startOfUtcDay, differenceInUtcDays } from '../../common/utils/date.util';
import type { LearningProfileDto, UserDto } from '@lingua/shared';
import { UpdateProfileDto, UpsertLearningProfileDto } from './dto/users.dto';

/** Für Prisma-Includes wiederverwendet, damit Mapper und Query nicht auseinanderlaufen. */
const userWithProfiles = {
  profiles: {
    include: { language: true },
    orderBy: [{ isActive: 'desc' as const }, { updatedAt: 'desc' as const }],
  },
} satisfies Prisma.UserInclude;

type UserWithProfiles = Prisma.UserGetPayload<{ include: typeof userWithProfiles }>;

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async getProfile(userId: string): Promise<UserDto> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: userWithProfiles,
    });
    if (!user) throw new NotFoundException('Nutzer nicht gefunden');
    return this.toUserDto(user);
  }

  async updateProfile(userId: string, dto: UpdateProfileDto): Promise<UserDto> {
    const user = await this.prisma.user.update({
      where: { id: userId },
      data: {
        displayName: dto.displayName,
        avatarUrl: dto.avatarUrl,
        nativeLanguage: dto.nativeLanguage,
      },
      include: userWithProfiles,
    });
    return this.toUserDto(user);
  }

  /**
   * Legt ein Lernprofil an oder aktualisiert es. Setzt das Profil auf aktiv,
   * werden alle anderen Profile in derselben Transaktion deaktiviert –
   * die Invariante "genau ein aktives Profil" bleibt so garantiert.
   */
  async upsertLearningProfile(
    userId: string,
    dto: UpsertLearningProfileDto,
  ): Promise<LearningProfileDto> {
    const language = await this.prisma.language.findUnique({ where: { id: dto.languageId } });
    if (!language || !language.isActive) {
      throw new BadRequestException('Diese Sprache wird nicht angeboten');
    }

    const makeActive = dto.isActive ?? true;

    const profile = await this.prisma.$transaction(async (tx) => {
      if (makeActive) {
        await tx.learningProfile.updateMany({
          where: { userId, isActive: true },
          data: { isActive: false },
        });
      }

      return tx.learningProfile.upsert({
        where: { userId_languageId: { userId, languageId: dto.languageId } },
        create: {
          userId,
          languageId: dto.languageId,
          level: dto.level,
          levelSource: dto.levelSource ?? LevelSource.SELF_SELECTED,
          dailyGoalMinutes: dto.dailyGoalMinutes ?? 15,
          isActive: makeActive,
        },
        update: {
          level: dto.level,
          levelSource: dto.levelSource ?? undefined,
          dailyGoalMinutes: dto.dailyGoalMinutes ?? undefined,
          isActive: makeActive,
        },
        include: { language: true },
      });
    });

    return this.toProfileDto(profile);
  }

  async activateProfile(userId: string, profileId: string): Promise<LearningProfileDto> {
    const existing = await this.prisma.learningProfile.findFirst({
      where: { id: profileId, userId },
    });
    if (!existing) throw new NotFoundException('Lernprofil nicht gefunden');

    const profile = await this.prisma.$transaction(async (tx) => {
      await tx.learningProfile.updateMany({
        where: { userId, isActive: true },
        data: { isActive: false },
      });
      return tx.learningProfile.update({
        where: { id: profileId },
        data: { isActive: true },
        include: { language: true },
      });
    });
    return this.toProfileDto(profile);
  }

  async listProfiles(userId: string): Promise<LearningProfileDto[]> {
    const profiles = await this.prisma.learningProfile.findMany({
      where: { userId },
      include: { language: true },
      orderBy: [{ isActive: 'desc' }, { updatedAt: 'desc' }],
    });
    return profiles.map((profile) => this.toProfileDto(profile));
  }

  /**
   * Liefert das aktive Lernprofil. Die meisten Feature-Endpunkte hängen daran –
   * fehlt es, ist das Onboarding nicht abgeschlossen.
   */
  async getActiveProfileOrThrow(userId: string) {
    const profile = await this.prisma.learningProfile.findFirst({
      where: { userId, isActive: true },
      include: { language: true },
    });
    if (!profile) {
      throw new BadRequestException(
        'Kein aktives Lernprofil – bitte zuerst eine Lernsprache auswählen',
      );
    }
    return profile;
  }

  async completeOnboarding(userId: string): Promise<UserDto> {
    await this.getActiveProfileOrThrow(userId);
    const user = await this.prisma.user.update({
      where: { id: userId },
      data: { onboardingCompleted: true },
      include: userWithProfiles,
    });
    return this.toUserDto(user);
  }

  async deleteAccount(userId: string): Promise<void> {
    // Alle abhängigen Daten hängen per onDelete: Cascade am Nutzer.
    await this.prisma.user.delete({ where: { id: userId } });
  }

  /**
   * Schreibt Tagesaktivität fort und pflegt die Streak.
   * Wird von Vokabeln, Bibliothek, Mediathek und Lernheft aufgerufen.
   */
  async trackActivity(
    userId: string,
    delta: {
      minutes?: number;
      xp?: number;
      reviews?: number;
      correctReviews?: number;
      readingCount?: number;
      listeningCount?: number;
    },
  ): Promise<void> {
    const today = startOfUtcDay();

    await this.prisma.$transaction(async (tx) => {
      await tx.dailyActivity.upsert({
        where: { userId_date: { userId, date: today } },
        create: {
          userId,
          date: today,
          minutes: delta.minutes ?? 0,
          xp: delta.xp ?? 0,
          reviews: delta.reviews ?? 0,
          correctReviews: delta.correctReviews ?? 0,
          readingCount: delta.readingCount ?? 0,
          listeningCount: delta.listeningCount ?? 0,
        },
        update: {
          minutes: { increment: delta.minutes ?? 0 },
          xp: { increment: delta.xp ?? 0 },
          reviews: { increment: delta.reviews ?? 0 },
          correctReviews: { increment: delta.correctReviews ?? 0 },
          readingCount: { increment: delta.readingCount ?? 0 },
          listeningCount: { increment: delta.listeningCount ?? 0 },
        },
      });

      const user = await tx.user.findUniqueOrThrow({
        where: { id: userId },
        select: { lastActivityDate: true, streakDays: true },
      });

      const streakDays = this.nextStreak(user.lastActivityDate, user.streakDays, today);

      await tx.user.update({
        where: { id: userId },
        data: {
          xp: { increment: delta.xp ?? 0 },
          lastActivityDate: today,
          streakDays,
        },
      });
    });
  }

  /** Gestern aktiv -> +1, heute schon aktiv -> unverändert, sonst Neustart bei 1. */
  private nextStreak(lastActivity: Date | null, currentStreak: number, today: Date): number {
    if (!lastActivity) return 1;
    const gap = differenceInUtcDays(today, lastActivity);
    if (gap === 0) return Math.max(currentStreak, 1);
    if (gap === 1) return currentStreak + 1;
    return 1;
  }

  toUserDto(user: UserWithProfiles): UserDto {
    return {
      id: user.id,
      email: user.email,
      displayName: user.displayName,
      avatarUrl: user.avatarUrl,
      role: user.role,
      plan: user.plan,
      premiumUntil: user.premiumUntil?.toISOString() ?? null,
      nativeLanguage: user.nativeLanguage,
      xp: user.xp,
      streakDays: user.streakDays,
      onboardingCompleted: user.onboardingCompleted,
      profiles: user.profiles.map((profile) => this.toProfileDto(profile)),
      createdAt: user.createdAt.toISOString(),
    };
  }

  toProfileDto(
    profile: Prisma.LearningProfileGetPayload<{ include: { language: true } }>,
  ): LearningProfileDto {
    return {
      id: profile.id,
      language: {
        id: profile.language.id,
        code: profile.language.code,
        name: profile.language.name,
        nativeName: profile.language.nativeName,
        flagEmoji: profile.language.flagEmoji,
      },
      level: profile.level as CefrLevel,
      levelSource: profile.levelSource,
      dailyGoalMinutes: profile.dailyGoalMinutes,
      isActive: profile.isActive,
    };
  }
}
