import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CardStatus, Prisma, VocabMode } from '@prisma/client';
import { reviewCard, SRS_DEFAULTS } from './srs.helper';
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
/** Karten je Sitzung, wenn die App nichts anderes verlangt. */
const DEFAULT_SESSION_SIZE = 15;
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
   * Stellt die Lernwarteschlange zusammen – zufällig gezogen, ohne Stapel.
   *
   * Der Umfang ist entweder eine Kategorie (`deckId`) oder alles, was der
   * Nutzer gerade lernen kann: die Systemkategorien seines Profil-Niveaus plus
   * seine eigenen Kategorien derselben Sprache. `onlyNeedsRepeat` zieht statt
   * aus allen Wörtern nur aus denen, deren letzte Antwort falsch war.
   */
  async getReviewQueue(userId: string, query: ReviewQueueQueryDto): Promise<ReviewCardDto[]> {
    const [profile, native] = await Promise.all([
      this.users.getActiveProfileOrThrow(userId),
      this.nativeLanguage(userId),
    ]);
    const options: CardOptions = { native, mode: query.mode, direction: query.direction };
    const limit = query.limit ?? DEFAULT_SESSION_SIZE;

    let scope: Prisma.VocabItemWhereInput;
    if (query.deckId) {
      const deck = await this.prisma.vocabDeck.findUnique({ where: { id: query.deckId } });
      if (!deck) throw new NotFoundException(ERR['notfound.deck']);
      if (!deck.isSystem && deck.ownerId !== userId) {
        throw new ForbiddenException(ERR['forbidden.deck_other_user']);
      }
      scope = { deckId: deck.id };
    } else {
      // Bewusst `profile.level` statt eines Parameters: Systemkategorien eines
      // höheren Niveaus bleiben gesperrt, bis das Profil-Niveau dort ankommt.
      scope = {
        deck: {
          languageId: profile.languageId,
          OR: [{ isSystem: true, level: profile.level }, { ownerId: userId }],
        },
      };
    }

    // Fehler-Stapel: die letzte Antwort war falsch. Das steht eindeutig fest,
    // sobald `status = LEARNING` bei `repetitions = 0` ist – nur der
    // Fehler-Zweig von `reviewCard()` setzt beides zusammen (ein erster
    // *richtiger* Versuch erhöht `repetitions` immer auf mindestens 1).
    const candidates = await this.prisma.vocabItem.findMany({
      where: query.onlyNeedsRepeat
        ? {
            ...scope,
            progress: { some: { userId, status: CardStatus.LEARNING, repetitions: 0 } },
          }
        : scope,
      select: { id: true },
    });
    if (candidates.length === 0) return [];

    const pickedIds = shuffle(candidates)
      .slice(0, limit)
      .map((item) => item.id);

    const [items, progressRows] = await Promise.all([
      this.prisma.vocabItem.findMany({ where: { id: { in: pickedIds } } }),
      this.prisma.vocabProgress.findMany({ where: { userId, vocabItemId: { in: pickedIds } } }),
    ]);
    const progressByItem = new Map(progressRows.map((row) => [row.vocabItemId, row]));
    const now = new Date();

    // Falsche Antworten stammen aus denselben Kategorien. Reicht das nicht
    // (eine kleine eigene Kategorie, ein einzelner Fehler), kommen Wörter
    // aus den Systemkategorien des Niveaus dazu.
    let pool = await this.distractorPool(
      items.map((item) => item.deckId),
      native,
    );
    if (pool.length <= MIN_DISTRACTORS_FOR_CHOICES + 1) {
      const extra = await this.prisma.vocabItem.findMany({
        where: { deck: { languageId: profile.languageId, level: profile.level, isSystem: true } },
        select: { id: true, term: true, translation: true, translations: true },
        take: 60,
      });
      pool = [...pool, ...extra.map((item) => toPoolEntry(item, native))];
    }

    return shuffle(items).map((item) => {
      const progress = progressByItem.get(item.id);
      return this.buildCard(
        {
          // Ohne Progress-Zeile ist die VocabItem-ID der Platzhalter, den
          // `submitReview` beim ersten Bewerten in eine Progress-Zeile
          // überführt – nur weil eine Karte ausgeliefert wurde, heißt das
          // nicht, dass sie bearbeitet wurde.
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
   * Baut eine Karte: Richtung, Modus und – wo möglich – fünf Vorschläge.
   *
   * FORWARD fragt den Begriff ab, die Vorschläge sind Übersetzungen in der
   * Muttersprache. REVERSE zeigt die Übersetzung, die Vorschläge sind Begriffe
   * der Lernsprache. Die falschen Vorschläge sind zufällig aus demselben
   * Stapel gezogen; gleichlautende werden vorher entfernt, sonst stünde die
   * richtige Antwort zweimal da und eine davon würde als falsch gewertet.
   *
   * Vorschläge gibt es für jede Karte, nicht nur für Auswahlkarten: Paare
   * und Aussprechen fallen in der App darauf zurück, wenn eine Paar-Runde zu
   * klein wird oder das Gerät keine Spracherkennung hat.
   */
  private buildCard(card: QueueCard, pool: PoolEntry[], options: CardOptions): ReviewCardDto {
    const item = toVocabItemDto(card.item, options.native);
    const mode = pickMode(options.mode);
    // Paare und Aussprechen zeigen immer den Begriff – eine Richtung haben sie nicht.
    const direction =
      mode === VocabMode.MULTIPLE_CHOICE || mode === VocabMode.LISTENING
        ? pickDirection(options.direction)
        : 'FORWARD';

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
    const hasChoices = alternatives.length >= MIN_DISTRACTORS_FOR_CHOICES;

    // Eine Auswahl ohne genug andere Wörter wäre nur die offensichtlich
    // richtige Antwort – dann wird die Karte umgedreht.
    const wantsChoices = mode === VocabMode.MULTIPLE_CHOICE || mode === VocabMode.LISTENING;
    const base: ReviewCardDto = {
      cardId: card.cardId,
      item,
      mode: wantsChoices && !hasChoices ? VocabMode.FLASHCARD : mode,
      direction,
      status: card.status,
      dueAt: card.dueAt.toISOString(),
    };

    if (hasChoices) {
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
 * Der Modus einer Karte. Ohne Vorgabe ist die Sitzung gemischt: meist
 * Auswahl, dazwischen Paare (die App fasst sie zu einer Runde zusammen) und
 * Aussprechen.
 */
function pickMode(requested: VocabMode | undefined): VocabMode {
  if (requested) return requested;
  const roll = Math.random();
  if (roll < 0.5) return VocabMode.MULTIPLE_CHOICE;
  if (roll < 0.75) return VocabMode.MATCHING;
  return VocabMode.SPEAKING;
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
