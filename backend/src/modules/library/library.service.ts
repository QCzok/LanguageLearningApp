import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { ExerciseType, Prisma } from '@prisma/client';
import type {
  ExerciseResultDto,
  LibraryContentDto,
  LibraryExerciseDto,
  Paginated,
} from '@lingua/shared';
import { paginate } from '../../common/dto/pagination.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { toLanguageDto } from '../languages/languages.service';
import { UsersService } from '../users/users.service';
import type { AuthenticatedUser } from '../../common/decorators/current-user.decorator';
import { ListLibraryQueryDto, SubmitExercisesDto, UpdateReadingProgressDto } from './dto/library.dto';

/** XP-Basis pro abgeschlossener Übungseinheit, skaliert mit der Trefferquote. */
const XP_PER_EXERCISE_SET = 20;

const contentInclude = {
  language: true,
  _count: { select: { exercises: true } },
} satisfies Prisma.LibraryContentInclude;

type ContentRow = Prisma.LibraryContentGetPayload<{ include: typeof contentInclude }>;

@Injectable()
export class LibraryService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly users: UsersService,
  ) {}

  /**
   * Listet Inhalte gefiltert nach Sprache, Niveau, Typ und Suchbegriff.
   * Ohne explizite Filter greift das aktive Lernprofil des Nutzers.
   */
  async list(userId: string, query: ListLibraryQueryDto): Promise<Paginated<LibraryContentDto>> {
    const profile = await this.users.getActiveProfileOrThrow(userId);

    const where: Prisma.LibraryContentWhereInput = {
      languageId: query.languageId ?? profile.languageId,
      ...(query.level ? { level: query.level } : {}),
      ...(query.type ? { type: query.type } : {}),
      ...(query.tag ? { tags: { has: query.tag } } : {}),
      ...(query.search
        ? {
            OR: [
              { title: { contains: query.search, mode: 'insensitive' } },
              { summary: { contains: query.search, mode: 'insensitive' } },
            ],
          }
        : {}),
    };

    const [rows, total] = await Promise.all([
      this.prisma.libraryContent.findMany({
        where,
        include: contentInclude,
        orderBy: [{ level: 'asc' }, { publishedAt: 'desc' }],
        skip: query.skip,
        take: query.pageSize,
      }),
      this.prisma.libraryContent.count({ where }),
    ]);

    const progress = await this.prisma.readingProgress.findMany({
      where: { userId, contentId: { in: rows.map((row) => row.id) } },
    });
    const progressById = new Map(progress.map((entry) => [entry.contentId, entry]));

    const items = rows.map((row) => ({
      ...this.toContentDto(row),
      userProgress: progressById.has(row.id)
        ? {
            progressPercent: progressById.get(row.id)!.progressPercent,
            completedAt: progressById.get(row.id)!.completedAt?.toISOString() ?? null,
            bestScore: null,
          }
        : undefined,
    }));

    return paginate(items, total, query.page, query.pageSize);
  }

  /**
   * Detailansicht inklusive Text und Übungen. Lösungen werden hier bewusst
   * entfernt – sie kommen erst als Antwort auf die Abgabe zurück.
   */
  async getById(user: AuthenticatedUser, contentId: string): Promise<LibraryContentDto> {
    const content = await this.prisma.libraryContent.findUnique({
      where: { id: contentId },
      include: { ...contentInclude, exercises: { orderBy: { order: 'asc' } } },
    });
    if (!content) throw new NotFoundException('Inhalt nicht gefunden');

    if (content.isPremium && !this.hasPremium(user)) {
      throw new ForbiddenException('Dieser Inhalt ist Teil von Lingua Premium');
    }

    const [progress, bestAttempt] = await Promise.all([
      this.prisma.readingProgress.findUnique({
        where: { userId_contentId: { userId: user.id, contentId } },
      }),
      this.prisma.libraryAttempt.findFirst({
        where: { userId: user.id, contentId },
        orderBy: { scorePercent: 'desc' },
      }),
    ]);

    return {
      ...this.toContentDto(content),
      body: content.body,
      exercises: content.exercises.map((exercise) => this.toExerciseDto(exercise, false)),
      userProgress: {
        progressPercent: progress?.progressPercent ?? 0,
        completedAt: progress?.completedAt?.toISOString() ?? null,
        bestScore: bestAttempt?.scorePercent ?? null,
      },
    };
  }

  async updateReadingProgress(userId: string, contentId: string, dto: UpdateReadingProgressDto) {
    const completed = dto.progressPercent >= 95;

    const progress = await this.prisma.readingProgress.upsert({
      where: { userId_contentId: { userId, contentId } },
      create: {
        userId,
        contentId,
        progressPercent: dto.progressPercent,
        completedAt: completed ? new Date() : null,
      },
      update: {
        progressPercent: dto.progressPercent,
        // completedAt wird nur einmal gesetzt – erneutes Lesen überschreibt es nicht.
        ...(completed ? { completedAt: new Date() } : {}),
      },
    });

    await this.users.trackActivity(userId, {
      minutes: dto.minutesRead ?? 0,
      readingCount: completed ? 1 : 0,
      xp: completed ? 10 : 0,
    });

    return {
      progressPercent: progress.progressPercent,
      completedAt: progress.completedAt?.toISOString() ?? null,
    };
  }

  /**
   * Wertet die Verständnisfragen aus. Offene Fragen zählen nicht in die Quote –
   * sie werden in der App zur Selbstkontrolle bzw. per KI-Feedback behandelt.
   */
  async submitExercises(
    userId: string,
    contentId: string,
    dto: SubmitExercisesDto,
  ): Promise<ExerciseResultDto> {
    const exercises = await this.prisma.libraryExercise.findMany({
      where: { contentId },
      orderBy: { order: 'asc' },
    });
    if (exercises.length === 0) throw new NotFoundException('Zu diesem Inhalt gibt es keine Übungen');

    const answerById = new Map(dto.answers.map((answer) => [answer.exerciseId, answer]));

    let score = 0;
    let gradable = 0;

    const results = exercises.map((exercise) => {
      const answer = answerById.get(exercise.id);
      const isOpen = exercise.type === ExerciseType.OPEN || exercise.correctIndex < 0;

      if (isOpen) {
        return {
          exerciseId: exercise.id,
          correct: Boolean(answer?.text?.trim()),
          correctIndex: null,
          explanation: exercise.explanation,
        };
      }

      gradable += 1;
      const correct = answer?.selectedIndex === exercise.correctIndex;
      if (correct) score += 1;

      return {
        exerciseId: exercise.id,
        correct,
        correctIndex: exercise.correctIndex,
        explanation: exercise.explanation,
      };
    });

    const scorePercent = gradable > 0 ? Math.round((score / gradable) * 100) : 0;
    const xpEarned = Math.round((XP_PER_EXERCISE_SET * scorePercent) / 100);

    await this.prisma.libraryAttempt.create({
      data: {
        userId,
        contentId,
        answers: dto.answers as unknown as Prisma.InputJsonValue,
        score,
        total: gradable,
        scorePercent,
      },
    });

    await this.users.trackActivity(userId, { xp: xpEarned });

    return { score, total: gradable, scorePercent, xpEarned, results };
  }

  async attempts(userId: string, contentId: string) {
    const attempts = await this.prisma.libraryAttempt.findMany({
      where: { userId, contentId },
      orderBy: { createdAt: 'desc' },
      take: 20,
    });
    return attempts.map((attempt) => ({
      id: attempt.id,
      score: attempt.score,
      total: attempt.total,
      scorePercent: attempt.scorePercent,
      createdAt: attempt.createdAt.toISOString(),
    }));
  }

  private hasPremium(user: AuthenticatedUser): boolean {
    return user.plan === 'PREMIUM' && (!user.premiumUntil || user.premiumUntil.getTime() > Date.now());
  }

  private toContentDto(content: ContentRow): LibraryContentDto {
    return {
      id: content.id,
      type: content.type,
      title: content.title,
      summary: content.summary,
      author: content.author,
      imageUrl: content.imageUrl,
      level: content.level,
      language: toLanguageDto(content.language),
      wordCount: content.wordCount,
      estimatedMinutes: content.estimatedMinutes,
      tags: content.tags,
      exerciseCount: content._count.exercises,
      publishedAt: content.publishedAt.toISOString(),
    };
  }

  private toExerciseDto(
    exercise: {
      id: string;
      order: number;
      type: ExerciseType;
      question: string;
      options: string[];
      correctIndex: number;
      explanation: string | null;
    },
    withSolution: boolean,
  ): LibraryExerciseDto {
    return {
      id: exercise.id,
      order: exercise.order,
      type: exercise.type,
      question: exercise.question,
      options: exercise.options,
      ...(withSolution
        ? { correctIndex: exercise.correctIndex, explanation: exercise.explanation ?? undefined }
        : {}),
    };
  }
}
