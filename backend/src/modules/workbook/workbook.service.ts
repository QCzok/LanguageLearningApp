import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, UnitStatus, WorkbookBook } from '@prisma/client';
import {
  WORKBOOK_BOOKS,
  countExercises,
  isExerciseBlock,
  type BlockAnswer,
  type BookDetailDto,
  type BookSummaryDto,
  type CefrLevel,
  type ChapterDetailDto,
  type ChapterSummaryDto,
  type ExerciseBlock,
  type UnitAnswers,
  type UnitCheckResult,
  type UnitContent,
  type UnitDetailDto,
  type UnitSummaryDto,
  type WorkbookBook as WorkbookBookName,
} from '@lingua/shared';
import { PrismaService } from '../../prisma/prisma.service';
import { UsersService } from '../users/users.service';
import { evaluateBlock, stripSolutions } from './evaluation';
import { CheckUnitDto, SaveAnnotationsDto, SaveAnswersDto } from './dto/workbook.dto';

/** XP für eine vollständig abgeschlossene Lerneinheit, skaliert mit dem Ergebnis. */
const XP_PER_UNIT = 30;

@Injectable()
export class WorkbookService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly users: UsersService,
  ) {}

  // --------------------------------------------------------------- Regal

  /**
   * Das Bücherregal: die vier Bücher mit ihrem Stand und der Seite, auf der es
   * weitergeht.
   *
   * Der Einstiegspunkt jedes Buchs wird hier berechnet und nicht in der App –
   * „die erste Seite, die noch nicht abgeschlossen ist“ braucht den Stand
   * aller Seiten aller Kapitel, und den hat nur der Server ohne weitere
   * Anfragen beisammen.
   */
  async listBooks(userId: string, languageId?: string): Promise<BookSummaryDto[]> {
    const profile = await this.users.getActiveProfileOrThrow(userId);
    const language = languageId ?? profile.languageId;

    const chapters = await this.prisma.chapter.findMany({
      where: { languageId: language },
      include: {
        units: { select: { id: true, order: true, title: true }, orderBy: { order: 'asc' } },
      },
      orderBy: { order: 'asc' },
    });

    const unitIds = chapters.flatMap((chapter) => chapter.units.map((unit) => unit.id));
    const rows = await this.prisma.unitProgress.findMany({
      where: { userId, unitId: { in: unitIds } },
      select: { unitId: true, status: true },
    });
    const statusByUnit = new Map(rows.map((row) => [row.unitId, row.status]));

    return WORKBOOK_BOOKS.map((book) => {
      const ofBook = chapters.filter((chapter) => chapter.book === book);
      const publishedChapters = ofBook.filter((chapter) => chapter.isPublished);
      const pages = publishedChapters.flatMap((chapter) =>
        chapter.units.map((unit) => ({ chapter, unit })),
      );
      const completed = pages.filter(
        (page) => statusByUnit.get(page.unit.id) === UnitStatus.COMPLETED,
      );
      const next = pages.find((page) => statusByUnit.get(page.unit.id) !== UnitStatus.COMPLETED);
      // Alles erledigt: Das Buch führt zum Wiederholen wieder auf Seite eins.
      const resumeAt = next ?? pages[0];

      return {
        book: book as WorkbookBookName,
        chapterCount: ofBook.length,
        publishedChapterCount: publishedChapters.length,
        completedUnits: completed.length,
        totalUnits: pages.length,
        percent: pages.length ? Math.round((completed.length / pages.length) * 100) : 0,
        resume: resumeAt
          ? {
              unitId: resumeAt.unit.id,
              unitTitle: resumeAt.unit.title,
              chapterOrder: resumeAt.chapter.order,
              chapterTitle: resumeAt.chapter.title,
              isStart: completed.length === 0,
            }
          : undefined,
      };
    });
  }

  /**
   * Das Inhaltsverzeichnis eines Buchs: alle Kapitel mit allen Seiten.
   *
   * Auch die noch nicht veröffentlichten Kapitel sind dabei – sie stehen in
   * der App ausgegraut im Verzeichnis, damit der Aufbau des Buchs von Anfang
   * an sichtbar ist und nicht der Eindruck entsteht, es sei zu Ende.
   */
  async getBook(userId: string, book: WorkbookBook, languageId?: string): Promise<BookDetailDto> {
    const profile = await this.users.getActiveProfileOrThrow(userId);

    const chapters = await this.prisma.chapter.findMany({
      where: { languageId: languageId ?? profile.languageId, book },
      include: { units: { orderBy: { order: 'asc' } } },
      orderBy: { order: 'asc' },
    });

    const rows = await this.prisma.unitProgress.findMany({
      where: { userId, unitId: { in: chapters.flatMap((c) => c.units.map((unit) => unit.id)) } },
    });
    const byUnit = new Map(rows.map((row) => [row.unitId, row]));

    return {
      book: book as WorkbookBookName,
      chapters: chapters.map((chapter) => this.toDetail(chapter, chapter.units, byUnit)),
    };
  }

  // ------------------------------------------------------------- Kapitel

  async getChapter(userId: string, chapterId: string): Promise<ChapterDetailDto> {
    const chapter = await this.prisma.chapter.findUnique({
      where: { id: chapterId },
      include: { units: { orderBy: { order: 'asc' } } },
    });
    if (!chapter) throw new NotFoundException('Kapitel nicht gefunden');

    const progressRows = await this.prisma.unitProgress.findMany({
      where: { userId, unitId: { in: chapter.units.map((unit) => unit.id) } },
    });

    return this.toDetail(chapter, chapter.units, new Map(progressRows.map((r) => [r.unitId, r])));
  }

  // --------------------------------------------------------- Lerneinheit

  /**
   * Liefert eine Einheit ohne Lösungen, zusammen mit dem gespeicherten
   * Zwischenstand des Nutzers. Der erste Aufruf legt den Fortschrittseintrag an
   * und markiert die Einheit als begonnen.
   */
  async getUnit(userId: string, unitId: string): Promise<UnitDetailDto> {
    const unit = await this.prisma.chapterUnit.findUnique({
      where: { id: unitId },
      include: { chapter: true },
    });
    if (!unit) throw new NotFoundException('Lerneinheit nicht gefunden');

    const progress = await this.prisma.unitProgress.upsert({
      where: { userId_unitId: { userId, unitId } },
      create: { userId, unitId, status: UnitStatus.IN_PROGRESS },
      update: {},
    });

    return {
      id: unit.id,
      chapterId: unit.chapterId,
      chapterTitle: unit.chapter.title,
      chapterOrder: unit.chapter.order,
      book: unit.chapter.book as WorkbookBookName,
      level: unit.chapter.level as CefrLevel,
      order: unit.order,
      title: unit.title,
      subtitle: unit.subtitle,
      estimatedMinutes: unit.estimatedMinutes,
      content: stripSolutions(unit.content as unknown as UnitContent),
      status: progress.status,
      answers: (progress.answers ?? {}) as unknown as UnitAnswers,
      annotations: progress.annotations ?? null,
      scorePercent: progress.scorePercent,
    };
  }

  /** Autosave der Antworten – ohne Bewertung, damit Tippen nichts auslöst. */
  async saveAnswers(userId: string, unitId: string, dto: SaveAnswersDto): Promise<void> {
    await this.assertUnitExists(unitId);

    await this.prisma.unitProgress.upsert({
      where: { userId_unitId: { userId, unitId } },
      create: {
        userId,
        unitId,
        status: UnitStatus.IN_PROGRESS,
        answers: dto.answers as unknown as Prisma.InputJsonValue,
      },
      // Der Status bleibt unangetastet: Eine abgeschlossene Einheit fällt beim
      // Weiterarbeiten nicht auf "in Bearbeitung" zurück.
      update: { answers: dto.answers as unknown as Prisma.InputJsonValue },
    });
  }

  async saveAnnotations(userId: string, unitId: string, dto: SaveAnnotationsDto): Promise<void> {
    await this.assertUnitExists(unitId);

    await this.prisma.unitProgress.upsert({
      where: { userId_unitId: { userId, unitId } },
      create: {
        userId,
        unitId,
        status: UnitStatus.IN_PROGRESS,
        annotations: dto.annotations as unknown as Prisma.InputJsonValue,
      },
      update: { annotations: dto.annotations as unknown as Prisma.InputJsonValue },
    });
  }

  /**
   * Bewertet einzelne Blöcke oder die ganze Einheit.
   *
   * Ohne `blockIds` gilt es als Abgabe: Der Gesamtwert wird gespeichert, die
   * Einheit auf abgeschlossen gesetzt und XP vergeben. Mit `blockIds` ist es
   * eine Zwischenprüfung einzelner Aufgaben – die verändert den Status nicht.
   */
  async check(userId: string, unitId: string, dto: CheckUnitDto): Promise<UnitCheckResult> {
    const unit = await this.prisma.chapterUnit.findUnique({ where: { id: unitId } });
    if (!unit) throw new NotFoundException('Lerneinheit nicht gefunden');

    const content = unit.content as unknown as UnitContent;
    const exercises = content.blocks.filter(isExerciseBlock);

    if (exercises.length === 0) {
      throw new BadRequestException('Diese Lerneinheit enthält keine Aufgaben');
    }

    const isPartial = Boolean(dto.blockIds?.length);
    const targets: ExerciseBlock[] = isPartial
      ? exercises.filter((block) => dto.blockIds!.includes(block.id))
      : exercises;

    if (targets.length === 0) throw new BadRequestException('Keine passenden Aufgaben gefunden');

    // Gespeicherte Antworten mit den übergebenen zusammenführen, damit eine
    // Zwischenprüfung nicht die restlichen Eingaben verwirft.
    const stored = await this.prisma.unitProgress.findUnique({
      where: { userId_unitId: { userId, unitId } },
    });
    const merged: UnitAnswers = {
      ...((stored?.answers ?? {}) as unknown as UnitAnswers),
      ...dto.answers,
    };

    const results = targets.map((block) =>
      evaluateBlock(block, merged[block.id] as BlockAnswer | undefined),
    );

    const correctBlocks = results.filter((result) => result.correct).length;
    const scorePercent = Math.round(
      results.reduce((sum, result) => sum + result.scorePercent, 0) / results.length,
    );

    let xpEarned = 0;

    if (!isPartial) {
      const alreadyCompleted = stored?.status === UnitStatus.COMPLETED;
      // XP nur beim ersten Abschluss – Wiederholen soll nicht farmen.
      xpEarned = alreadyCompleted ? 0 : Math.round((XP_PER_UNIT * scorePercent) / 100);

      await this.prisma.unitProgress.upsert({
        where: { userId_unitId: { userId, unitId } },
        create: {
          userId,
          unitId,
          status: UnitStatus.COMPLETED,
          answers: merged as unknown as Prisma.InputJsonValue,
          scorePercent,
          completedAt: new Date(),
        },
        update: {
          status: UnitStatus.COMPLETED,
          answers: merged as unknown as Prisma.InputJsonValue,
          scorePercent,
          completedAt: stored?.completedAt ?? new Date(),
        },
      });

      await this.users.trackActivity(userId, {
        xp: xpEarned,
        minutes: unit.estimatedMinutes,
      });
    } else {
      await this.prisma.unitProgress.upsert({
        where: { userId_unitId: { userId, unitId } },
        create: {
          userId,
          unitId,
          status: UnitStatus.IN_PROGRESS,
          answers: merged as unknown as Prisma.InputJsonValue,
        },
        update: { answers: merged as unknown as Prisma.InputJsonValue },
      });
    }

    return {
      unitId,
      results,
      scorePercent,
      correctBlocks,
      totalBlocks: results.length,
      xpEarned,
    };
  }

  /** Reine Leseseiten enthalten keine Aufgaben – sie werden manuell abgehakt. */
  async markComplete(userId: string, unitId: string): Promise<{ status: UnitStatus; xpEarned: number }> {
    const unit = await this.prisma.chapterUnit.findUnique({ where: { id: unitId } });
    if (!unit) throw new NotFoundException('Lerneinheit nicht gefunden');

    const stored = await this.prisma.unitProgress.findUnique({
      where: { userId_unitId: { userId, unitId } },
    });
    const xpEarned = stored?.status === UnitStatus.COMPLETED ? 0 : 10;

    await this.prisma.unitProgress.upsert({
      where: { userId_unitId: { userId, unitId } },
      create: { userId, unitId, status: UnitStatus.COMPLETED, completedAt: new Date() },
      update: { status: UnitStatus.COMPLETED, completedAt: stored?.completedAt ?? new Date() },
    });

    if (xpEarned > 0) {
      await this.users.trackActivity(userId, { xp: xpEarned, minutes: unit.estimatedMinutes });
    }
    return { status: UnitStatus.COMPLETED, xpEarned };
  }

  /** Setzt eine Einheit zurück, damit sie neu bearbeitet werden kann. */
  async reset(userId: string, unitId: string): Promise<void> {
    await this.assertUnitExists(unitId);
    await this.prisma.unitProgress.updateMany({
      where: { userId, unitId },
      data: {
        status: UnitStatus.IN_PROGRESS,
        answers: {},
        scorePercent: null,
        completedAt: null,
      },
    });
  }

  // --------------------------------------------------------------- Helfer

  private async assertUnitExists(unitId: string): Promise<void> {
    const exists = await this.prisma.chapterUnit.count({ where: { id: unitId } });
    if (exists === 0) throw new NotFoundException('Lerneinheit nicht gefunden');
  }

  /**
   * Kapitel plus Seiten plus Stand – die Form, in der sowohl das
   * Inhaltsverzeichnis eines Buchs als auch ein einzelnes Kapitel geliefert
   * werden. `progressByUnit` bringt den schon geladenen Stand mit, damit für
   * ein ganzes Buch nicht pro Kapitel eine eigene Abfrage läuft.
   */
  private toDetail(
    chapter: Prisma.ChapterGetPayload<{ include: { units: true } }>,
    units: Prisma.ChapterUnitGetPayload<Record<string, never>>[],
    progressByUnit: Map<string, { status: UnitStatus; scorePercent: number | null }>,
  ): ChapterDetailDto {
    const summaries: UnitSummaryDto[] = units.map((unit) => {
      const state = progressByUnit.get(unit.id);
      return {
        id: unit.id,
        order: unit.order,
        title: unit.title,
        subtitle: unit.subtitle,
        estimatedMinutes: unit.estimatedMinutes,
        exerciseCount: countExercises(unit.content as unknown as UnitContent),
        status: state?.status ?? UnitStatus.NOT_STARTED,
        scorePercent: state?.scorePercent ?? null,
      };
    });

    const completed = summaries.filter((unit) => unit.status === UnitStatus.COMPLETED);
    const scored = completed.filter((unit) => unit.scorePercent !== null);

    return {
      ...this.toSummary(chapter, summaries.length),
      description: chapter.description,
      units: summaries,
      progress: {
        completedUnits: completed.length,
        totalUnits: summaries.length,
        percent: summaries.length ? Math.round((completed.length / summaries.length) * 100) : 0,
        scorePercent: scored.length
          ? Math.round(scored.reduce((sum, u) => sum + (u.scorePercent ?? 0), 0) / scored.length)
          : null,
      },
    };
  }

  private toSummary(
    chapter: {
      id: string;
      book: WorkbookBook;
      level: string;
      order: number;
      title: string;
      subtitle: string;
      coverEmoji: string;
      goals: string[];
      estimatedMinutes: number;
      isPublished: boolean;
    },
    unitCount: number,
  ): ChapterSummaryDto {
    return {
      id: chapter.id,
      book: chapter.book as WorkbookBookName,
      level: chapter.level as CefrLevel,
      order: chapter.order,
      title: chapter.title,
      subtitle: chapter.subtitle,
      coverEmoji: chapter.coverEmoji,
      goals: chapter.goals,
      estimatedMinutes: chapter.estimatedMinutes,
      unitCount,
      isPublished: chapter.isPublished,
    };
  }
}
