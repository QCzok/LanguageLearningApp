import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import type { MediaItemDto, Paginated } from '@lingua/shared';
import { paginate } from '../../common/dto/pagination.dto';
import type { AuthenticatedUser } from '../../common/decorators/current-user.decorator';
import { PrismaService } from '../../prisma/prisma.service';
import { toLanguageDto } from '../languages/languages.service';
import { UsersService } from '../users/users.service';
import { ListMediaQueryDto, UpdateMediaProgressDto } from './dto/media.dto';

/** Ab diesem Anteil gilt eine Folge als gehört. */
const COMPLETION_RATIO = 0.9;

const mediaInclude = { language: true } satisfies Prisma.MediaItemInclude;
type MediaRow = Prisma.MediaItemGetPayload<{ include: typeof mediaInclude }>;

@Injectable()
export class MediaService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly users: UsersService,
  ) {}

  async list(userId: string, query: ListMediaQueryDto): Promise<Paginated<MediaItemDto>> {
    const profile = await this.users.getActiveProfileOrThrow(userId);

    const where: Prisma.MediaItemWhereInput = {
      languageId: query.languageId ?? profile.languageId,
      ...(query.level ? { level: query.level } : {}),
      ...(query.type ? { type: query.type } : {}),
      ...(query.tag ? { tags: { has: query.tag } } : {}),
      ...(query.search
        ? {
            OR: [
              { title: { contains: query.search, mode: 'insensitive' } },
              { description: { contains: query.search, mode: 'insensitive' } },
            ],
          }
        : {}),
    };

    const [rows, total] = await Promise.all([
      this.prisma.mediaItem.findMany({
        where,
        include: mediaInclude,
        orderBy: [{ level: 'asc' }, { publishedAt: 'desc' }],
        skip: query.skip,
        take: query.pageSize,
      }),
      this.prisma.mediaItem.count({ where }),
    ]);

    const progress = await this.prisma.mediaProgress.findMany({
      where: { userId, mediaItemId: { in: rows.map((row) => row.id) } },
    });
    const progressById = new Map(progress.map((entry) => [entry.mediaItemId, entry]));

    const items = rows.map((row) => ({
      ...this.toDto(row),
      userProgress: progressById.has(row.id)
        ? {
            positionSec: progressById.get(row.id)!.positionSec,
            completed: progressById.get(row.id)!.completed,
          }
        : undefined,
    }));

    return paginate(items, total, query.page, query.pageSize);
  }

  async getById(user: AuthenticatedUser, id: string): Promise<MediaItemDto> {
    const item = await this.prisma.mediaItem.findUnique({ where: { id }, include: mediaInclude });
    if (!item) throw new NotFoundException('Medieninhalt nicht gefunden');

    const premiumActive =
      user.plan === 'PREMIUM' && (!user.premiumUntil || user.premiumUntil.getTime() > Date.now());
    if (item.isPremium && !premiumActive) {
      throw new ForbiddenException('Diese Folge ist Teil von Lingua Premium');
    }

    const progress = await this.prisma.mediaProgress.findUnique({
      where: { userId_mediaItemId: { userId: user.id, mediaItemId: id } },
    });

    return {
      ...this.toDto(item),
      transcript: item.transcript ?? undefined,
      userProgress: progress
        ? { positionSec: progress.positionSec, completed: progress.completed }
        : { positionSec: 0, completed: false },
    };
  }

  /**
   * Der Player meldet die Abspielposition periodisch. Erreicht sie 90 %,
   * zählt die Folge als gehört und fließt in Statistik und XP ein.
   */
  async updateProgress(userId: string, mediaItemId: string, dto: UpdateMediaProgressDto) {
    const item = await this.prisma.mediaItem.findUnique({ where: { id: mediaItemId } });
    if (!item) throw new NotFoundException('Medieninhalt nicht gefunden');

    const positionSec = Math.min(dto.positionSec, item.durationSec);
    const completed = dto.completed ?? positionSec >= item.durationSec * COMPLETION_RATIO;

    const existing = await this.prisma.mediaProgress.findUnique({
      where: { userId_mediaItemId: { userId, mediaItemId } },
    });

    const progress = await this.prisma.mediaProgress.upsert({
      where: { userId_mediaItemId: { userId, mediaItemId } },
      create: { userId, mediaItemId, positionSec, completed },
      update: { positionSec, completed: completed || existing?.completed || false },
    });

    // XP nur beim ersten Abschluss, damit Wiederholtes Abspielen nicht farmt.
    const newlyCompleted = completed && !existing?.completed;
    if (newlyCompleted || dto.minutesListened) {
      await this.users.trackActivity(userId, {
        minutes: dto.minutesListened ?? 0,
        listeningCount: newlyCompleted ? 1 : 0,
        xp: newlyCompleted ? 15 : 0,
      });
    }

    return { positionSec: progress.positionSec, completed: progress.completed };
  }

  /** Zuletzt begonnene, noch nicht beendete Folge – für „weiterhören" auf dem Dashboard. */
  async continueListening(userId: string, languageId: string): Promise<MediaItemDto | null> {
    const progress = await this.prisma.mediaProgress.findFirst({
      where: { userId, completed: false, positionSec: { gt: 0 }, mediaItem: { languageId } },
      orderBy: { updatedAt: 'desc' },
      include: { mediaItem: { include: mediaInclude } },
    });
    if (!progress) return null;

    return {
      ...this.toDto(progress.mediaItem),
      userProgress: { positionSec: progress.positionSec, completed: false },
    };
  }

  private toDto(item: MediaRow): MediaItemDto {
    return {
      id: item.id,
      type: item.type,
      title: item.title,
      description: item.description,
      audioUrl: item.audioUrl,
      coverUrl: item.coverUrl,
      durationSec: item.durationSec,
      level: item.level,
      language: toLanguageDto(item.language),
      tags: item.tags,
      hasTranscript: Boolean(item.transcript),
      publishedAt: item.publishedAt.toISOString(),
    };
  }
}
