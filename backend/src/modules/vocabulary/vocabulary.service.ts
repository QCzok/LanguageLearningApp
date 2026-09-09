import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CardStatus, Prisma, VocabMode } from '@prisma/client';
import { reviewCard, SRS_DEFAULTS, shuffleSeedFree } from './srs.helper';
import { addUtcDays, shuffle, startOfUtcDay, toDateKey } from '../../common/utils/date.util';
import { PrismaService } from '../../prisma/prisma.service';
import { UsersService } from '../users/users.service';
import { toLanguageDto } from '../languages/languages.service';
import type {
  DeckProgressDto,
  ReviewCardDto,
  VocabDeckDto,
  VocabItemDto,
  VocabStatsDto,
} from '@lingua/shared';
import {
  CreateDeckDto,
  CreateVocabItemDto,
  ListDecksQueryDto,
  ReviewQueueQueryDto,
  SubmitReviewDto,
} from './dto/vocabulary.dto';

/** XP pro korrekt beantworteter Karte. */
const XP_PER_CORRECT_REVIEW = 2;
/** Maximale Anzahl neuer Karten, die pro Sitzung eingeführt werden. */
const DEFAULT_NEW_LIMIT = 10;

const deckWithCount = {
  language: true,
  _count: { select: { items: true } },
} satisfies Prisma.VocabDeckInclude;

@Injectable()
export class VocabularyService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly users: UsersService,
  ) {}

  // ------------------------------------------------------------------ Decks

  async listDecks(userId: string, query: ListDecksQueryDto): Promise<VocabDeckDto[]> {
    const profile = await this.users.getActiveProfileOrThrow(userId);
    const languageId = query.languageId ?? profile.languageId;

    const decks = await this.prisma.vocabDeck.findMany({
      where: {
        languageId,
        ...(query.level ? { level: query.level } : {}),
        // Systemdecks plus eigene Decks – fremde Nutzerdecks bleiben unsichtbar.
        OR: [{ isSystem: true }, { ownerId: userId }],
      },
      include: deckWithCount,
      orderBy: [{ level: 'asc' }, { sortOrder: 'asc' }, { title: 'asc' }],
    });

    const progressByDeck = await this.progressByDeck(
      userId,
      decks.map((deck) => deck.id),
    );

    return decks.map((deck) => ({
      id: deck.id,
      title: deck.title,
      description: deck.description,
      level: deck.level,
      language: toLanguageDto(deck.language),
      itemCount: deck._count.items,
      isSystem: deck.isSystem,
      progress: progressByDeck.get(deck.id),
    }));
  }

  async getDeck(userId: string, deckId: string) {
    const deck = await this.prisma.vocabDeck.findUnique({
      where: { id: deckId },
      include: { ...deckWithCount, items: { orderBy: { sortOrder: 'asc' } } },
    });
    if (!deck) throw new NotFoundException('Deck nicht gefunden');
    if (!deck.isSystem && deck.ownerId !== userId) {
      throw new ForbiddenException('Dieses Deck gehört einem anderen Nutzer');
    }

    const progress = (await this.progressByDeck(userId, [deck.id])).get(deck.id);

    return {
      id: deck.id,
      title: deck.title,
      description: deck.description,
      level: deck.level,
      language: toLanguageDto(deck.language),
      itemCount: deck._count.items,
      isSystem: deck.isSystem,
      progress,
      items: deck.items.map(toVocabItemDto),
    };
  }

  async createDeck(userId: string, dto: CreateDeckDto): Promise<VocabDeckDto> {
    const deck = await this.prisma.vocabDeck.create({
      data: {
        languageId: dto.languageId,
        level: dto.level,
        title: dto.title,
        description: dto.description,
        iconEmoji: dto.iconEmoji ?? '📗',
        isSystem: false,
        ownerId: userId,
      },
      include: deckWithCount,
    });

    return {
      id: deck.id,
      title: deck.title,
      description: deck.description,
      level: deck.level,
      language: toLanguageDto(deck.language),
      itemCount: 0,
      isSystem: false,
    };
  }

  async addItem(userId: string, deckId: string, dto: CreateVocabItemDto): Promise<VocabItemDto> {
    await this.assertOwnDeck(userId, deckId);

    const count = await this.prisma.vocabItem.count({ where: { deckId } });
    const item = await this.prisma.vocabItem.create({
      data: { deckId, ...dto, tags: dto.tags ?? [], sortOrder: count },
    });
    return toVocabItemDto(item);
  }

  async deleteItem(userId: string, itemId: string): Promise<void> {
    const item = await this.prisma.vocabItem.findUnique({
      where: { id: itemId },
      include: { deck: true },
    });
    if (!item) throw new NotFoundException('Vokabel nicht gefunden');
    if (item.deck.isSystem || item.deck.ownerId !== userId) {
      throw new ForbiddenException('Diese Vokabel kann nicht gelöscht werden');
    }
    await this.prisma.vocabItem.delete({ where: { id: itemId } });
  }

  async deleteDeck(userId: string, deckId: string): Promise<void> {
    await this.assertOwnDeck(userId, deckId);
    await this.prisma.vocabDeck.delete({ where: { id: deckId } });
  }

  // ----------------------------------------------------------- Lernsitzung

  /**
   * Stellt die Lernwarteschlange zusammen: zuerst fällige Karten (älteste zuerst),
   * danach neue Karten bis zum Limit. Für jede Karte wird ein Lernmodus gewählt
   * und – wo nötig – Distraktoren aus demselben Deck gezogen.
   */
  async getReviewQueue(userId: string, query: ReviewQueueQueryDto): Promise<ReviewCardDto[]> {
    const profile = await this.users.getActiveProfileOrThrow(userId);
    const limit = query.limit ?? 20;
    const now = new Date();

    const deckFilter: Prisma.VocabItemWhereInput = query.deckId
      ? { deckId: query.deckId }
      : {
          deck: {
            languageId: profile.languageId,
            ...(query.level ? { level: query.level } : {}),
            OR: [{ isSystem: true }, { ownerId: userId }],
          },
        };

    // `dueLimit: 0` blendet den Wiederholen-Stapel bewusst aus – für eine
    // Sitzung, die ausschließlich neue Vokabeln zeigt (siehe pickMode/mode).
    const due = await this.prisma.vocabProgress.findMany({
      where: { userId, dueAt: { lte: now }, vocabItem: deckFilter },
      include: { vocabItem: true },
      orderBy: { dueAt: 'asc' },
      take: query.dueLimit ?? limit,
    });

    const remaining = Math.max(0, limit - due.length);
    const newLimit = Math.min(remaining, query.newLimit ?? DEFAULT_NEW_LIMIT);

    let fresh: Array<{ id: string; item: Prisma.VocabItemGetPayload<object> }> = [];
    if (newLimit > 0) {
      // Karten ohne Progress-Eintrag = noch nie gesehen.
      const unseen = await this.prisma.vocabItem.findMany({
        where: { ...deckFilter, progress: { none: { userId } } },
        take: newLimit,
        orderBy: { sortOrder: 'asc' },
      });

      // Progress-Einträge werden beim ersten Ausliefern angelegt, damit der
      // Fortschritt auch dann erhalten bleibt, wenn die Sitzung abgebrochen wird.
      fresh = await this.prisma.$transaction(
        unseen.map((item) =>
          this.prisma.vocabProgress.create({
            data: { userId, vocabItemId: item.id, dueAt: now, ...SRS_DEFAULTS },
            include: { vocabItem: true },
          }),
        ),
      ).then((created) => created.map((entry) => ({ id: entry.id, item: entry.vocabItem })));
    }

    const cards = [
      ...due.map((entry) => ({
        cardId: entry.id,
        item: entry.vocabItem,
        status: entry.status,
        dueAt: entry.dueAt,
      })),
      ...fresh.map((entry) => ({
        cardId: entry.id,
        item: entry.item,
        status: CardStatus.NEW,
        dueAt: now,
      })),
    ];

    if (cards.length === 0) return [];

    const distractorPool = await this.distractorPool(cards.map((card) => card.item.deckId));

    return cards.map((card) => {
      const mode = this.pickMode(card.status, query.mode);
      const base: ReviewCardDto = {
        cardId: card.cardId,
        item: toVocabItemDto(card.item),
        mode,
        status: card.status,
        dueAt: card.dueAt.toISOString(),
      };

      if (mode === VocabMode.MULTIPLE_CHOICE || mode === VocabMode.LISTENING) {
        // Fünf Vorschläge insgesamt: die richtige Übersetzung plus vier
        // Distraktoren aus demselben Deck. Gleichlautende Übersetzungen werden
        // vorher entfernt – sonst stünde dieselbe Antwort zweimal da und eine
        // davon würde als falsch gewertet.
        const distractors = shuffle([
          ...new Set(
            distractorPool
              .filter(
                (entry) =>
                  entry.id !== card.item.id && entry.translation !== card.item.translation,
              )
              .map((entry) => entry.translation),
          ),
        ]).slice(0, 4);
        const choices = shuffle([card.item.translation, ...distractors]);
        base.choices = choices;
        base.correctChoiceIndex = choices.indexOf(card.item.translation);
      }
      return base;
    });
  }

  /**
   * Bewertet eine Karte. Die SM-2-Berechnung erfolgt serverseitig – die App liefert
   * nur die Note, damit der Lernstand nicht manipulierbar ist.
   */
  async submitReview(userId: string, dto: SubmitReviewDto) {
    const card = await this.prisma.vocabProgress.findFirst({
      where: { id: dto.cardId, userId },
      include: { vocabItem: true },
    });
    if (!card) throw new NotFoundException('Karte nicht gefunden');

    const next = reviewCard(
      {
        easeFactor: card.easeFactor,
        intervalDays: card.intervalDays,
        repetitions: card.repetitions,
        lapses: card.lapses,
        status: card.status,
      },
      dto.grade,
    );

    const correct = dto.grade >= 3;

    const [updated] = await this.prisma.$transaction([
      this.prisma.vocabProgress.update({
        where: { id: card.id },
        data: {
          easeFactor: next.easeFactor,
          intervalDays: next.intervalDays,
          repetitions: next.repetitions,
          lapses: next.lapses,
          status: next.status,
          dueAt: next.dueAt,
          lastReviewedAt: new Date(),
        },
      }),
      this.prisma.reviewLog.create({
        data: {
          userId,
          vocabItemId: card.vocabItemId,
          grade: dto.grade,
          correct,
          mode: dto.mode,
          durationMs: dto.durationMs ?? 0,
        },
      }),
    ]);

    await this.users.trackActivity(userId, {
      reviews: 1,
      correctReviews: correct ? 1 : 0,
      xp: correct ? XP_PER_CORRECT_REVIEW : 0,
      minutes: Math.round((dto.durationMs ?? 0) / 60_000),
    });

    return {
      cardId: updated.id,
      status: updated.status,
      dueAt: updated.dueAt.toISOString(),
      intervalDays: updated.intervalDays,
      easeFactor: Number(updated.easeFactor.toFixed(2)),
      correct,
      xpEarned: correct ? XP_PER_CORRECT_REVIEW : 0,
    };
  }

  // ------------------------------------------------------------- Statistik

  async getStats(userId: string): Promise<VocabStatsDto> {
    const now = new Date();
    const today = startOfUtcDay(now);
    const weekAgo = addUtcDays(today, -6);

    const [grouped, dueToday, logs, user] = await Promise.all([
      this.prisma.vocabProgress.groupBy({
        by: ['status'],
        where: { userId },
        _count: { _all: true },
      }),
      this.prisma.vocabProgress.count({ where: { userId, dueAt: { lte: now } } }),
      this.prisma.reviewLog.findMany({
        where: { userId, createdAt: { gte: weekAgo } },
        select: { createdAt: true, correct: true },
      }),
      this.prisma.user.findUniqueOrThrow({
        where: { id: userId },
        select: { streakDays: true },
      }),
    ]);

    const byStatus = { NEW: 0, LEARNING: 0, REVIEW: 0, MASTERED: 0 } as Record<CardStatus, number>;
    for (const row of grouped) byStatus[row.status] = row._count._all;

    const history = new Map<string, { reviews: number; correct: number }>();
    for (let i = 6; i >= 0; i--) {
      history.set(toDateKey(addUtcDays(today, -i)), { reviews: 0, correct: 0 });
    }
    for (const log of logs) {
      const bucket = history.get(toDateKey(log.createdAt));
      if (!bucket) continue;
      bucket.reviews += 1;
      if (log.correct) bucket.correct += 1;
    }

    const totalReviews = logs.length;
    const totalCorrect = logs.filter((log) => log.correct).length;
    const todayKey = toDateKey(today);

    return {
      totalCards: Object.values(byStatus).reduce((sum, value) => sum + value, 0),
      byStatus,
      dueToday,
      reviewedToday: history.get(todayKey)?.reviews ?? 0,
      accuracy7d: totalReviews > 0 ? Math.round((totalCorrect / totalReviews) * 100) : 0,
      streakDays: user.streakDays,
      history: [...history.entries()].map(([date, value]) => ({ date, ...value })),
    };
  }

  // --------------------------------------------------------------- Helfer

  private async assertOwnDeck(userId: string, deckId: string) {
    const deck = await this.prisma.vocabDeck.findUnique({ where: { id: deckId } });
    if (!deck) throw new NotFoundException('Deck nicht gefunden');
    if (deck.isSystem || deck.ownerId !== userId) {
      throw new ForbiddenException('Dieses Deck kann nicht bearbeitet werden');
    }
    return deck;
  }

  private async progressByDeck(
    userId: string,
    deckIds: string[],
  ): Promise<Map<string, DeckProgressDto>> {
    if (deckIds.length === 0) return new Map();

    const rows = await this.prisma.vocabProgress.findMany({
      where: { userId, vocabItem: { deckId: { in: deckIds } } },
      select: { status: true, dueAt: true, vocabItem: { select: { deckId: true } } },
    });

    const totals = await this.prisma.vocabItem.groupBy({
      by: ['deckId'],
      where: { deckId: { in: deckIds } },
      _count: { _all: true },
    });

    const now = Date.now();
    const map = new Map<string, DeckProgressDto>();
    for (const total of totals) {
      map.set(total.deckId, {
        total: total._count._all,
        new: total._count._all,
        learning: 0,
        review: 0,
        mastered: 0,
        dueNow: 0,
      });
    }

    for (const row of rows) {
      const entry = map.get(row.vocabItem.deckId);
      if (!entry) continue;
      if (row.status !== CardStatus.NEW) entry.new = Math.max(0, entry.new - 1);
      if (row.status === CardStatus.LEARNING) entry.learning += 1;
      if (row.status === CardStatus.REVIEW) entry.review += 1;
      if (row.status === CardStatus.MASTERED) entry.mastered += 1;
      if (row.dueAt.getTime() <= now) entry.dueNow += 1;
    }
    return map;
  }

  /**
   * Plausible falsche Antworten stammen aus denselben Decks wie die Zielkarten.
   *
   * Der Pool enthält bewusst auch die Karten der laufenden Sitzung: Wer ein
   * Deck mit zehn Vokabeln komplett neu lernt, hätte sonst gar keine
   * Distraktoren mehr – die jeweils eigene Karte wird erst beim Bauen der
   * Auswahl herausgefiltert.
   */
  private async distractorPool(deckIds: string[]) {
    return this.prisma.vocabItem.findMany({
      where: { deckId: { in: [...new Set(deckIds)] } },
      select: { id: true, translation: true },
      take: 200,
    });
  }

  /**
   * Modusauswahl: Neue Karten werden zuerst als Lernkarte gezeigt, geübte Karten
   * fordern aktives Abrufen. Ein explizit gewünschter Modus hat Vorrang.
   */
  private pickMode(status: CardStatus, requested?: VocabMode): VocabMode {
    if (requested) return requested;
    if (status === CardStatus.NEW) return VocabMode.FLASHCARD;
    if (status === CardStatus.LEARNING) return VocabMode.MULTIPLE_CHOICE;
    return shuffleSeedFree([VocabMode.TYPING, VocabMode.MULTIPLE_CHOICE, VocabMode.FLASHCARD]);
  }
}

export function toVocabItemDto(item: {
  id: string;
  term: string;
  translation: string;
  phonetic: string | null;
  partOfSpeech: string | null;
  exampleSentence: string | null;
  exampleTranslation: string | null;
  audioUrl: string | null;
  tags: string[];
}): VocabItemDto {
  return {
    id: item.id,
    term: item.term,
    translation: item.translation,
    phonetic: item.phonetic,
    partOfSpeech: item.partOfSpeech,
    exampleSentence: item.exampleSentence,
    exampleTranslation: item.exampleTranslation,
    audioUrl: item.audioUrl,
    tags: item.tags,
  };
}
