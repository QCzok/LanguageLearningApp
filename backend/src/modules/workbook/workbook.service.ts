import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, UnitStatus } from '@prisma/client';
import {
  countExercises,
  isExerciseBlock,
  type BlockAnswer,
  type CefrLevel,
  type ChapterDetailDto,
  type ChapterSummaryDto,
  type ExerciseBlock,
  type UnitAnswers,
  type UnitCheckResult,
  type UnitContent,
  type UnitDetailDto,
  type UnitSummaryDto,
} from '@lingua/shared';
import { PrismaService } from '../../prisma/prisma.service';
import { UsersService } from '../users/users.service';
import { evaluateBlock, stripSolutions } from './evaluation';
import { CheckUnitDto, ListChaptersQueryDto, SaveAnnotationsDto, SaveAnswersDto } from './dto/workbook.dto';

/** XP für eine vollständig abgeschlossene Lerneinheit, skaliert mit dem Ergebnis. */
const XP_PER_UNIT = 30;

@Injectable()
export class WorkbookService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly users: UsersService,
  ) {}

  // ------------------------------------------------------------- Kapitel

  async listChapters(userId: string, query: ListChaptersQueryDto): Promise<ChapterSummaryDto[]> {
    const profile = await this.users.getActiveProfileOrThrow(userId);
    const languageId = query.languageId ?? profile.languageId;

    const chapters = await this.prisma.chapter.findMany({
      where: {
        languageId,
        ...(query.level ? { level: query.level } : {}),
        ...(query.includeUnpublished ? {} : { isPublished: true }),
      },
      include: { _count: { select: { units: true } } },
      orderBy: [{ level: 'asc' }, { order: 'asc' }],
    });

    const progress = await this.progressByChapter(
      userId,
      chapters.map((chapter) => chapter.id),
    );

    return chapters.map((chapter) => ({
      ...this.toSummary(chapter, chapter._count.units),
      progress: progress.get(chapter.id),
    }));
  }

  async getChapter(userId: string, chapterId: string): Promise<ChapterDetailDto> {
    const chapter = await this.prisma.chapter.findUnique({
      where: { id: chapterId },
      include: { units: { orderBy: [{ section: 'asc' }, { order: 'asc' }] } },
    });
    if (!chapter) throw new NotFoundException('Kapitel nicht gefunden');

    const progressRows = await this.prisma.unitProgress.findMany({
      where: { userId, unitId: { in: chapter.units.map((unit) => unit.id) } },
    });
    const byUnit = new Map(progressRows.map((row) => [row.unitId, row]));

    const units: UnitSummaryDto[] = chapter.units.map((unit) => {
      const state = byUnit.get(unit.id);
      return {
        id: unit.id,
        section: unit.section,
        order: unit.order,
        title: unit.title,
        subtitle: unit.subtitle,
        estimatedMinutes: unit.estimatedMinutes,
        exerciseCount: countExercises(unit.content as unknown as UnitContent),
        status: state?.status ?? UnitStatus.NOT_STARTED,
        scorePercent: state?.scorePercent ?? null,
      };
    });

    const completed = units.filter((unit) => unit.status === UnitStatus.COMPLETED);
    const scored = completed.filter((unit) => unit.scorePercent !== null);

    return {
      ...this.toSummary(chapter, chapter.units.length),
      description: chapter.description,
      units,
      progress: {
        completedUnits: completed.length,
        totalUnits: units.length,
        percent: units.length ? Math.round((completed.length / units.length) * 100) : 0,
        scorePercent: scored.length
          ? Math.round(scored.reduce((sum, u) => sum + (u.scorePercent ?? 0), 0) / scored.length)
          : null,
      },
    };
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
      level: unit.chapter.level as CefrLevel,
      section: unit.section,
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

  /** Kursbuchteile enthalten keine Aufgaben – sie werden manuell abgehakt. */
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

  private async progressByChapter(userId: string, chapterIds: string[]) {
    const map = new Map<string, NonNullable<ChapterSummaryDto['progress']>>();
    if (chapterIds.length === 0) return map;

    const units = await this.prisma.chapterUnit.findMany({
      where: { chapterId: { in: chapterIds } },
      select: { id: true, chapterId: true },
    });

    const rows = await this.prisma.unitProgress.findMany({
      where: { userId, unitId: { in: units.map((unit) => unit.id) } },
      select: { unitId: true, status: true, scorePercent: true },
    });
    const byUnit = new Map(rows.map((row) => [row.unitId, row]));

    for (const chapterId of chapterIds) {
      const chapterUnits = units.filter((unit) => unit.chapterId === chapterId);
      const done = chapterUnits.filter(
        (unit) => byUnit.get(unit.id)?.status === UnitStatus.COMPLETED,
      );
      const scores = done
        .map((unit) => byUnit.get(unit.id)?.scorePercent)
        .filter((value): value is number => typeof value === 'number');

      map.set(chapterId, {
        completedUnits: done.length,
        totalUnits: chapterUnits.length,
        percent: chapterUnits.length ? Math.round((done.length / chapterUnits.length) * 100) : 0,
        scorePercent: scores.length
          ? Math.round(scores.reduce((sum, value) => sum + value, 0) / scores.length)
          : null,
      });
    }
    return map;
  }

  private toSummary(
    chapter: {
      id: string;
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
