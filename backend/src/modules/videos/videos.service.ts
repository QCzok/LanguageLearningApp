import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import type { Paginated, VideoItemDto } from '@lingua/shared';
import { paginate } from '../../common/dto/pagination.dto';
import type { AuthenticatedUser } from '../../common/decorators/current-user.decorator';
import { PrismaService } from '../../prisma/prisma.service';
import { toLanguageDto } from '../languages/languages.service';
import { UsersService } from '../users/users.service';
import { ListVideosQueryDto, UpdateVideoProgressDto } from './dto/video.dto';

import { ERR } from '../../common/i18n/messages';

/** Ab diesem Anteil gilt ein Video als gesehen. */
const COMPLETION_RATIO = 0.9;

const videoInclude = { language: true } satisfies Prisma.VideoItemInclude;
type VideoRow = Prisma.VideoItemGetPayload<{ include: typeof videoInclude }>;

/**
 * Die Mediathek: eine kuratierte Auswahl fremder YouTube-Videos für die
 * Lernsprache und das Niveau des Nutzers.
 *
 * Abgespielt wird nichts von hier – der Dienst liefert nur die Auswahl und
 * merkt sich, wie weit jemand gekommen ist. Das Video selbst holt die App
 * beim Abspielen direkt von YouTube.
 */
@Injectable()
export class VideosService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly users: UsersService,
  ) {}

  async list(userId: string, query: ListVideosQueryDto): Promise<Paginated<VideoItemDto>> {
    const profile = await this.users.getActiveProfileOrThrow(userId);

    const where: Prisma.VideoItemWhereInput = {
      languageId: query.languageId ?? profile.languageId,
      ...(query.level ? { level: query.level } : {}),
      ...(query.topic ? { topic: query.topic } : {}),
      ...(query.slowSpeech ? { slowSpeech: true } : {}),
      ...(query.tag ? { tags: { has: query.tag } } : {}),
      ...(query.search
        ? {
            OR: [
              { title: { contains: query.search, mode: 'insensitive' } },
              { channelName: { contains: query.search, mode: 'insensitive' } },
            ],
          }
        : {}),
    };

    const [rows, total] = await Promise.all([
      this.prisma.videoItem.findMany({
        where,
        include: videoInclude,
        orderBy: [{ level: 'asc' }, { publishedAt: 'desc' }],
        skip: query.skip,
        take: query.pageSize,
      }),
      this.prisma.videoItem.count({ where }),
    ]);

    const progress = await this.prisma.videoProgress.findMany({
      where: { userId, videoItemId: { in: rows.map((row) => row.id) } },
    });
    const progressById = new Map(progress.map((entry) => [entry.videoItemId, entry]));

    const items = rows.map((row) => {
      const entry = progressById.get(row.id);
      return {
        ...this.toDto(row),
        userProgress: entry
          ? { positionSec: entry.positionSec, completed: entry.completed }
          : undefined,
      };
    });

    return paginate(items, total, query.page, query.pageSize);
  }

  async getById(user: AuthenticatedUser, id: string): Promise<VideoItemDto> {
    const item = await this.prisma.videoItem.findUnique({ where: { id }, include: videoInclude });
    if (!item) throw new NotFoundException(ERR['notfound.video']);

    // Siehe LibraryService: `isPremium` sperrt nichts mehr, seit es keine
    // Bezahlstufe gibt.

    const progress = await this.prisma.videoProgress.findUnique({
      where: { userId_videoItemId: { userId: user.id, videoItemId: id } },
    });

    return {
      ...this.toDto(item),
      userProgress: progress
        ? { positionSec: progress.positionSec, completed: progress.completed }
        : { positionSec: 0, completed: false },
    };
  }

  /**
   * Der eingebettete Player meldet die Abspielposition periodisch. Erreicht
   * sie 90 %, zählt das Video als gesehen und fließt in Statistik und XP ein.
   */
  async updateProgress(userId: string, videoItemId: string, dto: UpdateVideoProgressDto) {
    const item = await this.prisma.videoItem.findUnique({ where: { id: videoItemId } });
    if (!item) throw new NotFoundException(ERR['notfound.video']);

    const positionSec = Math.min(dto.positionSec, item.durationSec);
    const completed = dto.completed ?? positionSec >= item.durationSec * COMPLETION_RATIO;

    const existing = await this.prisma.videoProgress.findUnique({
      where: { userId_videoItemId: { userId, videoItemId } },
    });

    const progress = await this.prisma.videoProgress.upsert({
      where: { userId_videoItemId: { userId, videoItemId } },
      create: { userId, videoItemId, positionSec, completed },
      update: { positionSec, completed: completed || existing?.completed || false },
    });

    // XP nur beim ersten Abschluss, damit wiederholtes Abspielen nicht farmt.
    const newlyCompleted = completed && !existing?.completed;
    if (newlyCompleted || dto.minutesWatched) {
      await this.users.trackActivity(userId, {
        minutes: dto.minutesWatched ?? 0,
        listeningCount: newlyCompleted ? 1 : 0,
        xp: newlyCompleted ? 15 : 0,
      });
    }

    return { positionSec: progress.positionSec, completed: progress.completed };
  }

  /** Zuletzt begonnenes, noch nicht beendetes Video – für „weiterschauen“ auf dem Dashboard. */
  async continueWatching(userId: string, languageId: string): Promise<VideoItemDto | null> {
    const progress = await this.prisma.videoProgress.findFirst({
      where: { userId, completed: false, positionSec: { gt: 0 }, videoItem: { languageId } },
      orderBy: { updatedAt: 'desc' },
      include: { videoItem: { include: videoInclude } },
    });
    if (!progress) return null;

    return {
      ...this.toDto(progress.videoItem),
      userProgress: { positionSec: progress.positionSec, completed: false },
    };
  }

  private toDto(item: VideoRow): VideoItemDto {
    return {
      id: item.id,
      youtubeId: item.youtubeId,
      title: item.title,
      channelName: item.channelName,
      channelUrl: item.channelUrl,
      durationSec: item.durationSec,
      level: item.level,
      topic: item.topic,
      slowSpeech: item.slowSpeech,
      language: toLanguageDto(item.language),
      tags: item.tags,
      publishedAt: item.publishedAt.toISOString(),
    };
  }
}
