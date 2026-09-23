import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CardStatus, Prisma, VocabMode } from '@prisma/client';
import { reviewCard, SRS_DEFAULTS, shuffleSeedFree } from './srs.helper';
import { addUtcDays, shuffle, startOfUtcDay, toDateKey } from '../../common/utils/date.util';
import { PrismaService } from '../../prisma/prisma.service';
import { UsersService } from '../users/users.service';
import { toLanguageDto } from '../languages/languages.service';
import type {
  CardDirection,
  DeckProgressDto,
  ReviewCardDto,
  SubmitReviewResultDto,
  VocabDeckDetailDto,
  VocabDeckDto,
  VocabDirection,
  VocabItemDto,
  VocabStatsDto,
} from '@lingua/shared';
import {
  CreateDeckDto,
  CreateVocabItemDto,
  ListDecksQueryDto,
  ReviewQueueQueryDto,
  SubmitReviewDto,
  UpdateVocabItemDto,
} from './dto/vocabulary.dto';

import { ERR } from '../../common/i18n/messages';

/** XP pro korrekt beantworteter Karte. */
const XP_PER_CORRECT_REVIEW = 2;
/** Maximale Anzahl neuer Karten, die pro Sitzung eingeführt werden. */
const DEFAULT_NEW_LIMIT = 10;
/**
 * Mindestzahl unterschiedlicher Distraktoren, ab der eine Mehrfachauswahl noch
 * eine echte Auswahl ist. Reicht der Vorrat nicht, wird die Karte zum
 * Umdrehen gezeigt (siehe `buildCard`).
 */
const MIN_DISTRACTORS_FOR_CHOICES = 3;
/** Vier falsche plus die richtige Antwort. */
const CHOICE_DISTRACTORS = 4;

/**
 * Bonus-XP für eine Serie richtiger Antworten – der spielerische Anreiz,
 * konzentriert zu bleiben. Gedeckelt, damit eine lange Sitzung nicht
 * beliebig viel XP abwirft.
 */
function comboBonus(combo: number): number {
  if (combo >= 10) return 3;
  if (combo >= 5) return 2;
  if (combo >= 3) return 1;
  return 0;
}

const deckWithCount = {
  language: true,
  _count: { select: { items: true } },
} satisfies Prisma.VocabDeckInclude;

type ItemRow = Prisma.VocabItemGetPayload<object>;

/** Ein Eintrag im Distraktoren-Vorrat: Begriff und aufgelöste Übersetzung. */
interface PoolEntry {
  id: string;
  term: string;
  translation: string;
}

@Injectable()
export class VocabularyService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly users: UsersService,
  ) {}

  // ------------------------------------------------------------------ Decks

  async listDecks(userId: string, query: ListDecksQueryDto): Promise<VocabDeckDto[]> {
    const [profile, native] = await Promise.all([
      this.users.getActiveProfileOrThrow(userId),
      this.nativeLanguage(userId),
    ]);
    const languageId = query.languageId ?? profile.languageId;

    // Systemdecks sind auf das aktuelle Profil-Niveau begrenzt – höhere Niveaus
    // bleiben unsichtbar, bis das Profil-Niveau steigt (Platzierungstest oder
    // manuelle Änderung in ProfileScreen). `query.level` kann das für die aktive
    // Sprache absichtlich NICHT umgehen, sonst wäre die Sperre nur kosmetisch.
    // Eigene Decks (KI-generiert oder manuell) sind davon ausgenommen: sie
    // gehören dem Nutzer unabhängig vom Niveau.
    const systemLevel = languageId === profile.languageId ? profile.level : query.level;

    const decks = await this.prisma.vocabDeck.findMany({
      where: {
        languageId,
        OR: [
          { isSystem: true, ...(systemLevel ? { level: systemLevel } : {}) },
          { ownerId: userId },
        ],
      },
      include: deckWithCount,
      orderBy: [{ level: 'asc' }, { sortOrder: 'asc' }, { title: 'asc' }],
    });

    const progressByDeck = await this.progressByDeck(
      userId,
      decks.map((deck) => deck.id),
    );

    return decks.map((deck) => ({
      ...toDeckDto(deck, native),
      progress: progressByDeck.get(deck.id),
    }));
  }

  async getDeck(userId: string, deckId: string): Promise<VocabDeckDetailDto> {
    const [deck, native] = await Promise.all([
      this.prisma.vocabDeck.findUnique({
        where: { id: deckId },
        include: { ...deckWithCount, items: { orderBy: { sortOrder: 'asc' } } },
      }),
      this.nativeLanguage(userId),
    ]);
    if (!deck) throw new NotFoundException(ERR['notfound.deck']);
    if (!deck.isSystem && deck.ownerId !== userId) {
      throw new ForbiddenException(ERR['forbidden.deck_other_user']);
    }

    const [progress, statuses] = await Promise.all([
      this.progressByDeck(userId, [deck.id]).then((map) => map.get(deck.id)),
      // Lernstand je Wort – die Wortliste zeigt an jedem Eintrag, wie er steht.
      // Wörter ohne Zeile waren noch nie dran und bleiben bewusst `null` statt
      // `NEW`: „noch nie gesehen“ und „gesehen, aber noch nicht gekonnt“ sind
      // in der Liste zwei verschiedene Zustände (siehe `progressByDeck`).
      this.prisma.vocabProgress.findMany({
        where: { userId, vocabItem: { deckId: deck.id } },
        select: { vocabItemId: true, status: true },
      }),
    ]);

    const statusByItem = new Map(statuses.map((row) => [row.vocabItemId, row.status]));

    return {
      ...toDeckDto(deck, native),
      progress,
      items: deck.items.map((item) => ({
        ...toVocabItemDto(item, native),
        status: statusByItem.get(item.id) ?? null,
      })),
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

    return toDeckDto(deck);
  }

  async addItem(userId: string, deckId: string, dto: CreateVocabItemDto): Promise<VocabItemDto> {
    await this.assertOwnDeck(userId, deckId);

    // Eigene Vokabeln tragen die Übersetzung in der Muttersprache ihres
    // Besitzers – als Fallback in `translation` und zusätzlich unter dem
    // Sprachcode, damit sie ein Wechsel der Muttersprache nicht verliert.
    const native = await this.nativeLanguage(userId);
    const count = await this.prisma.vocabItem.count({ where: { deckId } });
    const item = await this.prisma.vocabItem.create({
      data: {
        deckId,
        ...dto,
        translations: { [native]: dto.translation },
        tags: dto.tags ?? [],
        sortOrder: count,
      },
    });
    return toVocabItemDto(item, native);
  }

  async updateItem(
    userId: string,
    itemId: string,
    dto: UpdateVocabItemDto,
  ): Promise<VocabItemDto> {
    const item = await this.prisma.vocabItem.findUnique({
      where: { id: itemId },
      include: { deck: true },
    });
    if (!item) throw new NotFoundException(ERR['notfound.vocab_item']);
    if (item.deck.isSystem || item.deck.ownerId !== userId) {
      throw new ForbiddenException(ERR['forbidden.vocab_readonly']);
    }

    const native = await this.nativeLanguage(userId);
    const translations =
      dto.translation !== undefined
        ? { ...asTranslations(item.translations), [native]: dto.translation }
        : undefined;

    const updated = await this.prisma.vocabItem.update({
      where: { id: itemId },
      data: { ...dto, ...(translations ? { translations } : {}) },
    });
    return toVocabItemDto(updated, native);
  }

  async deleteItem(userId: string, itemId: string): Promise<void> {
    const item = await this.prisma.vocabItem.findUnique({
      where: { id: itemId },
      include: { deck: true },
    });
    if (!item) throw new NotFoundException(ERR['notfound.vocab_item']);
    if (item.deck.isSystem || item.deck.ownerId !== userId) {
      throw new ForbiddenException(ERR['forbidden.vocab_readonly']);
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
   * danach neue Karten bis zum Limit. Für jede Karte werden Lernrichtung und
   * Lernmodus gewählt und – wo nötig – Distraktoren aus demselben Deck gezogen.
   */
  async getReviewQueue(userId: string, query: ReviewQueueQueryDto): Promise<ReviewCardDto[]> {
    const native = await this.nativeLanguage(userId);
    const options: CardOptions = { native, mode: query.mode, direction: query.direction };

    // Eigene Decks bleiben ein einziges Deck: keine Aufteilung in neu/
    // wiederholen/gelernt wie bei den 50 Wörter großen Systemdecks – jede
    // Runde zeigt das ganze Deck (siehe `ownDeckQueue`).
    if (query.deckId) {
      const deck = await this.prisma.vocabDeck.findUnique({
        where: { id: query.deckId },
        select: { isSystem: true },
      });
      if (deck && !deck.isSystem) {
        return this.ownDeckQueue(userId, query.deckId, options);
      }
    }

    const profile = await this.users.getActiveProfileOrThrow(userId);
    const limit = query.limit ?? 20;
    const now = new Date();

    // Eine Sitzung ohne `deckId` gilt für ein ganzes Niveau – dort zählen nur
    // Systemdecks. Eigene Decks (KI-generiert oder manuell) haben ihren
    // eigenen Platz in der App und werden ausschließlich über ihre `deckId`
    // gelernt, sonst würden ihre Karten unsichtbar in der Niveau-Summe
    // aufgehen statt als eigener Stapel zu erscheinen (siehe DeckListScreen).
    //
    // Bewusst `profile.level` statt `query.level`: Systemdecks eines höheren
    // Niveaus dürfen erst lernbar sein, wenn das Profil-Niveau dort ankommt –
    // ein von außen mitgegebenes `level` dürfte diese Sperre sonst umgehen.
    const deckFilter: Prisma.VocabItemWhereInput = query.deckId
      ? { deckId: query.deckId }
      : {
          deck: {
            languageId: profile.languageId,
            level: profile.level,
            isSystem: true,
          },
        };

    // Wiederholen-Stapel: die letzte Antwort war falsch. Das steht eindeutig
    // fest, sobald `status = LEARNING` bei `repetitions = 0` ist – nur der
    // Fehler-Zweig von `reviewCard()` setzt beides zusammen (ein erster
    // *richtiger* Versuch erhöht `repetitions` immer auf mindestens 1). Bewusst
    // unabhängig von `dueAt`: die Karte soll sofort im Stapel erscheinen, ohne
    // auf den SM-2-Timer zu warten.
    if (query.onlyNeedsRepeat) {
      return this.queueFromWhere(
        { userId, status: CardStatus.LEARNING, repetitions: 0, vocabItem: deckFilter },
        limit,
        options,
      );
    }

    // Gelernt-Stapel: die letzte Antwort war richtig (`repetitions >= 1`) –
    // unabhängig vom tatsächlichen SM-2-Status oder Intervall. Wer hier etwas
    // falsch beantwortet, fällt regulär über `submitReview` zurück in den
    // Wiederholen-Stapel (Status wechselt zu LEARNING, repetitions auf 0).
    if (query.onlyLearned) {
      return this.queueFromWhere(
        { userId, repetitions: { gte: 1 }, vocabItem: deckFilter },
        limit,
        options,
      );
    }

    // `dueLimit: 0` blendet den Wiederholen-Stapel bewusst aus – für eine
    // Sitzung, die ausschließlich neue Vokabeln zeigt.
    const due = await this.prisma.vocabProgress.findMany({
      where: { userId, dueAt: { lte: now }, vocabItem: deckFilter },
      include: { vocabItem: true },
      orderBy: { dueAt: 'asc' },
      take: query.dueLimit ?? limit,
    });

    const remaining = Math.max(0, limit - due.length);
    const newLimit = Math.min(remaining, query.newLimit ?? DEFAULT_NEW_LIMIT);

    let fresh: ItemRow[] = [];
    if (newLimit > 0) {
      // Karten ohne Progress-Eintrag = noch nie gesehen. Bewusst OHNE hier
      // schon eine Progress-Zeile anzulegen: nur weil eine Karte ausgeliefert
      // wurde, heißt das nicht, dass sie bearbeitet wurde – bricht die Sitzung
      // vorher ab, soll die Karte weiterhin als "neu" zählen (siehe
      // `submitReview`, das die Zeile erst bei der ersten Bewertung anlegt).
      fresh = await this.prisma.vocabItem.findMany({
        where: { ...deckFilter, progress: { none: { userId } } },
        take: newLimit,
        orderBy: { sortOrder: 'asc' },
      });
    }

    const cards: QueueCard[] = [
      ...due.map((entry) => ({
        cardId: entry.id,
        item: entry.vocabItem,
        status: entry.status,
        dueAt: entry.dueAt,
      })),
      // `cardId` ist hier die VocabItem-ID, nicht die einer Progress-Zeile –
      // `submitReview` erkennt das und legt die Zeile bei Bedarf selbst an.
      ...fresh.map((item) => ({
        cardId: item.id,
        item,
        status: CardStatus.NEW,
        dueAt: now,
      })),
    ];

    if (cards.length === 0) return [];

    const pool = await this.distractorPool(
      cards.map((card) => card.item.deckId),
      native,
    );

    // Alle Stapel sind durchmischt – die Reihenfolge (älteste Fälligkeit
    // zuerst, dann neue Karten) ist keine feste Abarbeitungsliste.
    return shuffle(cards).map((card) => this.buildCard(card, pool, options));
  }

  /** Lädt Karten anhand eines Progress-Filters (statt dueAt/newLimit-Kombination) und baut sie durchmischt auf. */
  private async queueFromWhere(
    where: Prisma.VocabProgressWhereInput,
    limit: number,
    options: CardOptions,
  ): Promise<ReviewCardDto[]> {
    const rows = await this.prisma.vocabProgress.findMany({
      where,
      include: { vocabItem: true },
      take: limit,
    });
    if (rows.length === 0) return [];

    const pool = await this.distractorPool(
      rows.map((entry) => entry.vocabItem.deckId),
      options.native,
    );
    return shuffle(rows).map((entry) =>
      this.buildCard(
        { cardId: entry.id, item: entry.vocabItem, status: entry.status, dueAt: entry.dueAt },
        pool,
        options,
      ),
    );
  }

  /**
   * Die Lernwarteschlange eines eigenen Decks: immer das ganze Deck,
   * durchmischt. Anders als bei Systemdecks gibt es hier kein "fällig" oder
   * "neu" – jede Runde zeigt alle Wörter, und eine falsch beantwortete Karte
   * kommt über `submitReview`/SM-2 in der nächsten Runde früher dran.
   *
   * Kleine Decks haben selten genug Wörter für eine echte Auswahl. Dann
   * stammen die falschen Antworten zusätzlich aus den Systemstapeln derselben
   * Sprache und desselben Niveaus – so funktioniert auch ein Deck mit drei
   * eigenen Wörtern als Auswahlübung.
   */
  private async ownDeckQueue(
    userId: string,
    deckId: string,
    options: CardOptions,
  ): Promise<ReviewCardDto[]> {
    const deck = await this.prisma.vocabDeck.findUniqueOrThrow({
      where: { id: deckId },
      include: { items: { orderBy: { sortOrder: 'asc' } } },
    });
    if (deck.ownerId !== userId) throw new ForbiddenException(ERR['forbidden.deck_other_user']);
    if (deck.items.length === 0) return [];

    const progressRows = await this.prisma.vocabProgress.findMany({
      where: { userId, vocabItemId: { in: deck.items.map((item) => item.id) } },
    });
    const progressByItem = new Map(progressRows.map((row) => [row.vocabItemId, row]));
    const now = new Date();

    let pool: PoolEntry[] = deck.items.map((item) => toPoolEntry(item, options.native));
    if (pool.length <= MIN_DISTRACTORS_FOR_CHOICES + 1) {
      const extra = await this.prisma.vocabItem.findMany({
        where: { deck: { languageId: deck.languageId, level: deck.level, isSystem: true } },
        take: 60,
      });
      pool = [...pool, ...extra.map((item) => toPoolEntry(item, options.native))];
    }

    return shuffle(deck.items).map((item) => {
      const progress = progressByItem.get(item.id);
      return this.buildCard(
        {
          // Ohne Progress-Zeile ist die VocabItem-ID der Platzhalter, den
          // `submitReview` beim ersten Bewerten in eine Progress-Zeile
          // überführt – dieselbe Konvention wie bei Systemdecks.
          cardId: progress?.id ?? item.id,
          item,
          status: progress?.status ?? CardStatus.NEW,
          dueAt: progress?.dueAt ?? now,
        },
        pool,
        options,
      );
    });
  }

  /**
   * Baut eine Karte: Richtung, Modus und – bei Auswahlmodi – fünf Vorschläge.
   *
   * FORWARD fragt den Begriff ab, die Vorschläge sind Übersetzungen in der
   * Muttersprache. REVERSE zeigt die Übersetzung, die Vorschläge sind Begriffe
   * der Lernsprache. Die falschen Vorschläge sind zufällig aus demselben
   * Stapel gezogen; gleichlautende werden vorher entfernt, sonst stünde die
   * richtige Antwort zweimal da und eine davon würde als falsch gewertet.
   */
  private buildCard(card: QueueCard, pool: PoolEntry[], options: CardOptions): ReviewCardDto {
    const item = toVocabItemDto(card.item, options.native);
    const direction = pickDirection(options.direction);
    const mode = pickMode(card.status, options.mode, direction);

    const answerOf = (entry: { term: string; translation: string }) =>
      direction === 'FORWARD' ? entry.translation : entry.term;
    const correct = answerOf(item);

    const alternatives = [
      ...new Set(
        pool
          .filter((entry) => entry.id !== item.id)
          .map(answerOf)
          .filter((answer) => answer !== correct),
      ),
    ];

    // Ein Auswahlmodus braucht genug andere Wörter, sonst wäre die "Auswahl"
    // nur die offensichtlich richtige Antwort – dann wird die Karte umgedreht.
    const wantsChoices = mode === VocabMode.MULTIPLE_CHOICE || mode === VocabMode.LISTENING;
    const effectiveMode =
      wantsChoices && alternatives.length < MIN_DISTRACTORS_FOR_CHOICES ? VocabMode.FLASHCARD : mode;

    const base: ReviewCardDto = {
      cardId: card.cardId,
      item,
      mode: effectiveMode,
      direction,
      status: card.status,
      dueAt: card.dueAt.toISOString(),
    };

    if (effectiveMode === VocabMode.MULTIPLE_CHOICE || effectiveMode === VocabMode.LISTENING) {
      const choices = shuffle([correct, ...shuffle(alternatives).slice(0, CHOICE_DISTRACTORS)]);
      base.choices = choices;
      base.correctChoiceIndex = choices.indexOf(correct);
    }
    return base;
  }

  /**
   * Bewertet eine Karte. Die SM-2-Berechnung erfolgt serverseitig – die App liefert
   * nur die Note, damit der Lernstand nicht manipulierbar ist.
   */
  async submitReview(userId: string, dto: SubmitReviewDto): Promise<SubmitReviewResultDto> {
    let card = await this.prisma.vocabProgress.findFirst({
      where: { id: dto.cardId, userId },
      include: { vocabItem: true },
    });

    if (!card) {
      // Keine Progress-Zeile unter dieser ID – `getReviewQueue` liefert für
      // frisch ausgelieferte, noch nie bearbeitete Karten die VocabItem-ID
      // statt einer Progress-ID (siehe dort). Die erste Bewertung legt die
      // Zeile jetzt an, nicht schon beim bloßen Anzeigen.
      const item = await this.prisma.vocabItem.findUnique({ where: { id: dto.cardId } });
      if (!item) throw new NotFoundException(ERR['notfound.card']);
      card = await this.prisma.vocabProgress.upsert({
        where: { userId_vocabItemId: { userId, vocabItemId: item.id } },
        create: { userId, vocabItemId: item.id, dueAt: new Date(), ...SRS_DEFAULTS },
        update: {},
        include: { vocabItem: true },
      });
    }

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
    const xpEarned = correct ? XP_PER_CORRECT_REVIEW + comboBonus(dto.combo ?? 0) : 0;

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
      xp: xpEarned,
      minutes: Math.round((dto.durationMs ?? 0) / 60_000),
    });

    return {
      cardId: updated.id,
      status: updated.status,
      dueAt: updated.dueAt.toISOString(),
      intervalDays: updated.intervalDays,
      easeFactor: Number(updated.easeFactor.toFixed(2)),
      correct,
      xpEarned,
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

  /** Die Muttersprache des Nutzers – bestimmt, in welcher Sprache übersetzt wird. */
  private async nativeLanguage(userId: string): Promise<string> {
    const user = await this.prisma.user.findUniqueOrThrow({
      where: { id: userId },
      select: { nativeLanguage: true },
    });
    return user.nativeLanguage;
  }

  private async assertOwnDeck(userId: string, deckId: string) {
    const deck = await this.prisma.vocabDeck.findUnique({ where: { id: deckId } });
    if (!deck) throw new NotFoundException(ERR['notfound.deck']);
    if (deck.isSystem || deck.ownerId !== userId) {
      throw new ForbiddenException(ERR['forbidden.deck_readonly']);
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
      select: { status: true, dueAt: true, repetitions: true, vocabItem: { select: { deckId: true } } },
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
        needsRepeat: 0,
        learned: 0,
      });
    }

    for (const row of rows) {
      const entry = map.get(row.vocabItem.deckId);
      if (!entry) continue;
      // "Neu" heißt hier dasselbe wie in getReviewQueue: noch nie ausgeliefert,
      // also (noch) kein Progress-Eintrag. Ein Progress-Eintrag entsteht schon
      // beim Ausliefern der Karte (siehe dort), nicht erst bei der Bewertung –
      // eine Karte mit Status NEW, die aber schon einen Eintrag hat, wurde
      // also bereits gezeigt und zählt nicht mehr als neu, sonst zeigt die
      // Übersicht mehr "neue" Karten an, als getReviewQueue tatsächlich noch
      // ausliefern kann.
      entry.new = Math.max(0, entry.new - 1);
      if (row.status === CardStatus.LEARNING) entry.learning += 1;
      if (row.status === CardStatus.REVIEW) entry.review += 1;
      if (row.status === CardStatus.MASTERED) entry.mastered += 1;
      if (row.dueAt.getTime() <= now) entry.dueNow += 1;
      // Wiederholen-/Gelernt-Stapel (DeckListScreen): rein von der letzten
      // Antwort abhängig, nicht vom SM-2-Timer oder Mastery-Intervall – siehe
      // `getReviewQueue`'s `onlyNeedsRepeat`/`onlyLearned`.
      if (row.status === CardStatus.LEARNING && row.repetitions === 0) entry.needsRepeat += 1;
      if (row.repetitions >= 1) entry.learned += 1;
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
  private async distractorPool(deckIds: string[], native: string): Promise<PoolEntry[]> {
    const items = await this.prisma.vocabItem.findMany({
      where: { deckId: { in: [...new Set(deckIds)] } },
      select: { id: true, term: true, translation: true, translations: true },
      take: 400,
    });
    return items.map((item) => toPoolEntry(item, native));
  }
}

// ------------------------------------------------------------------ Karten

interface CardOptions {
  native: string;
  mode?: VocabMode;
  direction?: VocabDirection;
}

interface QueueCard {
  cardId: string;
  item: ItemRow;
  status: CardStatus;
  dueAt: Date;
}

function pickDirection(requested?: VocabDirection): CardDirection {
  if (requested === 'REVERSE') return 'REVERSE';
  if (requested === 'MIXED') return Math.random() < 0.5 ? 'FORWARD' : 'REVERSE';
  return 'FORWARD';
}

/**
 * Modusauswahl, wenn der Nutzer keinen festen Modus gewählt hat: Neue und
 * gerade falsch beantwortete Karten kommen als Auswahl (erkennen ist
 * leichter als abrufen), gefestigte Karten wechseln zwischen Auswahl,
 * Eintippen, Hören und Lernkarte. Hören geht nur vorwärts – vorgelesen wird
 * der Begriff in der Lernsprache.
 */
function pickMode(status: CardStatus, requested: VocabMode | undefined, direction: CardDirection): VocabMode {
  const mode =
    requested ??
    (status === CardStatus.NEW || status === CardStatus.LEARNING
      ? Math.random() < 0.2
        ? VocabMode.LISTENING
        : VocabMode.MULTIPLE_CHOICE
      : shuffleSeedFree([
          VocabMode.MULTIPLE_CHOICE,
          VocabMode.TYPING,
          VocabMode.LISTENING,
          VocabMode.FLASHCARD,
        ]));
  if (mode === VocabMode.LISTENING && direction === 'REVERSE') return VocabMode.MULTIPLE_CHOICE;
  // Zuordnen ist ein eigenes Spiel über mehrere Karten, keine Einzelkarte.
  if (mode === VocabMode.MATCHING) return VocabMode.MULTIPLE_CHOICE;
  return mode;
}

// ------------------------------------------------------------ Umwandlungen

function asTranslations(value: Prisma.JsonValue | undefined): Record<string, string> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return {};
  return Object.fromEntries(
    Object.entries(value).filter((entry): entry is [string, string] => typeof entry[1] === 'string'),
  );
}

/** Die Übersetzung in der Muttersprache, sonst die hinterlegte Standardübersetzung. */
export function resolveTranslation(
  item: { translation: string; translations: Prisma.JsonValue },
  native?: string,
): string {
  if (!native) return item.translation;
  return asTranslations(item.translations)[native] ?? item.translation;
}

function toPoolEntry(
  item: { id: string; term: string; translation: string; translations: Prisma.JsonValue },
  native: string,
): PoolEntry {
  return { id: item.id, term: item.term, translation: resolveTranslation(item, native) };
}

function toDeckDto(
  deck: Prisma.VocabDeckGetPayload<{ include: typeof deckWithCount }>,
  native?: string,
): VocabDeckDto {
  const titles = asTranslations(deck.titles);
  return {
    id: deck.id,
    title: (native && titles[native]) || titles.en || deck.title,
    description: deck.description,
    iconEmoji: deck.iconEmoji,
    level: deck.level,
    language: toLanguageDto(deck.language),
    itemCount: deck._count.items,
    isSystem: deck.isSystem,
  };
}

export function toVocabItemDto(
  item: {
    id: string;
    term: string;
    translation: string;
    translations: Prisma.JsonValue;
    phonetic: string | null;
    partOfSpeech: string | null;
    exampleSentence: string | null;
    exampleTranslation: string | null;
    audioUrl: string | null;
    tags: string[];
  },
  native?: string,
): VocabItemDto {
  return {
    id: item.id,
    term: item.term,
    translation: resolveTranslation(item, native),
    phonetic: item.phonetic,
    partOfSpeech: item.partOfSpeech,
    exampleSentence: item.exampleSentence,
    exampleTranslation: item.exampleTranslation,
    audioUrl: item.audioUrl,
    tags: item.tags,
  };
}
