import { Injectable } from '@nestjs/common';
import type { DashboardDto, LibraryContentDto, LibrarySection } from '@lingua/shared';
import { addUtcDays, startOfUtcDay, toDateKey } from '../../common/utils/date.util';
import { excerptOf, plainTextOf } from '../../common/utils/text.util';
import { PrismaService } from '../../prisma/prisma.service';
import { toLanguageDto } from '../languages/languages.service';
import { MediaService } from '../media/media.service';
import { UsersService } from '../users/users.service';

@Injectable()
export class ProgressService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly users: UsersService,
    private readonly media: MediaService,
  ) {}

  /**
   * Ein Aufruf für den Startbildschirm: Alles, was die App beim Öffnen braucht,
   * kommt in einer Antwort – das spart Roundtrips auf mobilen Verbindungen.
   */
  async getDashboard(userId: string): Promise<DashboardDto> {
    const profile = await this.prisma.learningProfile.findFirst({
      where: { userId, isActive: true },
      include: { language: true },
    });

    const today = startOfUtcDay();
    const weekStart = addUtcDays(today, -6);

    const [user, dueCards, activities, reading, listening] = await Promise.all([
      this.prisma.user.findUniqueOrThrow({
        where: { id: userId },
        select: { displayName: true, xp: true, streakDays: true, plan: true },
      }),
      profile
        ? this.prisma.vocabProgress.count({
            where: {
              userId,
              dueAt: { lte: new Date() },
              vocabItem: { deck: { languageId: profile.languageId } },
            },
          })
        : Promise.resolve(0),
      this.prisma.dailyActivity.findMany({
        where: { userId, date: { gte: weekStart } },
        orderBy: { date: 'asc' },
      }),
      profile ? this.continueReading(userId, profile.languageId) : Promise.resolve(null),
      profile ? this.media.continueListening(userId, profile.languageId) : Promise.resolve(null),
    ]);

    // Lücken auffüllen, damit die App eine durchgehende Wochenkurve zeichnen kann.
    const byDate = new Map(activities.map((entry) => [toDateKey(entry.date), entry]));
    const weeklyActivity = Array.from({ length: 7 }, (_, offset) => {
      const key = toDateKey(addUtcDays(weekStart, offset));
      const entry = byDate.get(key);
      return { date: key, minutes: entry?.minutes ?? 0, xp: entry?.xp ?? 0 };
    });

    return {
      user,
      activeProfile: profile ? this.users.toProfileDto(profile) : null,
      dueCards,
      minutesToday: byDate.get(toDateKey(today))?.minutes ?? 0,
      dailyGoalMinutes: profile?.dailyGoalMinutes ?? 15,
      weeklyActivity,
      continueReading: reading,
      continueListening: listening,
    };
  }

  /** Verlauf für die Statistikansicht. */
  async getActivityHistory(userId: string, days: number) {
    const from = addUtcDays(startOfUtcDay(), -(days - 1));
    const activities = await this.prisma.dailyActivity.findMany({
      where: { userId, date: { gte: from } },
      orderBy: { date: 'asc' },
    });

    const byDate = new Map(activities.map((entry) => [toDateKey(entry.date), entry]));
    return Array.from({ length: days }, (_, offset) => {
      const key = toDateKey(addUtcDays(from, offset));
      const entry = byDate.get(key);
      return {
        date: key,
        minutes: entry?.minutes ?? 0,
        xp: entry?.xp ?? 0,
        reviews: entry?.reviews ?? 0,
        correctReviews: entry?.correctReviews ?? 0,
        readingCount: entry?.readingCount ?? 0,
        listeningCount: entry?.listeningCount ?? 0,
      };
    });
  }

  private async continueReading(
    userId: string,
    languageId: string,
  ): Promise<LibraryContentDto | null> {
    const progress = await this.prisma.readingProgress.findFirst({
      where: {
        userId,
        completedAt: null,
        progressPercent: { gt: 0 },
        content: { languageId },
      },
      orderBy: { updatedAt: 'desc' },
      include: {
        content: { include: { language: true, _count: { select: { exercises: true } } } },
      },
    });
    if (!progress) return null;

    const content = progress.content;
    return {
      id: content.id,
      type: content.type,
      title: content.title,
      summary: content.summary,
      excerpt: excerptOf(plainTextOf(content.body as unknown as LibrarySection[])),
      author: content.author,
      imageUrl: content.imageUrl,
      level: content.level,
      language: toLanguageDto(content.language),
      wordCount: content.wordCount,
      estimatedMinutes: content.estimatedMinutes,
      tags: content.tags,
      exerciseCount: content._count.exercises,
      publishedAt: content.publishedAt.toISOString(),
      userProgress: {
        progressPercent: progress.progressPercent,
        completedAt: null,
        bestScore: null,
      },
    };
  }
}
