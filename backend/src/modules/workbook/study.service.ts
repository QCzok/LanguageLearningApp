import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import {
  CEFR_LEVELS,
  STUDY_POINTS_PER_EXERCISE,
  studyPointsFor,
  type CefrLevel,
  type StudyAnswerResultDto,
  type StudyExerciseBlock,
  type StudyLesson,
  type StudyLessonDto,
  type StudyLessonSummaryDto,
  type StudyOverviewDto,
} from '@lingua/shared';
import { PrismaService } from '../../prisma/prisma.service';
import { UsersService } from '../users/users.service';
import { evaluateBlock, stripSolutions } from './evaluation';
import { StudyAnswerDto } from './dto/workbook.dto';
import { STUDY_CATALOG, findLesson } from './lessons';
import { ERR } from '../../common/i18n/messages';

interface ExerciseProgress {
  bestScore: number;
  points: number;
}

/**
 * Lektionen: je Niveau 50 kurze Einheiten aus Lernteil und Prüfung (siehe
 * `lessons/`). Die Inhalte liegen im Code, der Stand je Aufgabe in
 * `StudyLessonProgress`.
 */
@Injectable()
export class StudyService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly users: UsersService,
  ) {}

  async overview(userId: string, requested?: CefrLevel): Promise<StudyOverviewDto> {
    const profile = await this.users.getActiveProfileOrThrow(userId);
    const catalog = STUDY_CATALOG[profile.language.code] ?? {};
    const available = CEFR_LEVELS.filter((level) => (catalog[level]?.length ?? 0) > 0);

    const level =
      requested && available.includes(requested)
        ? requested
        : closestLevel(profile.level as CefrLevel, available);

    const [progress, total] = await Promise.all([
      this.loadProgress(userId),
      this.totalPoints(userId),
    ]);

    const summaries = (level ? (catalog[level] ?? []) : []).map((lesson, index) =>
      summarize(lesson, index + 1, progress),
    );

    return {
      totalPoints: total,
      level: level ?? (profile.level as CefrLevel),
      levels: available.map((entry) => ({
        level: entry,
        lessonCount: catalog[entry]!.length,
        doneCount: catalog[entry]!.filter((lesson) => isDone(lesson, progress)).length,
      })),
      lessons: summaries,
      nextLessonId: summaries.find((lesson) => !lesson.done)?.id ?? null,
    };
  }

  async lesson(userId: string, lessonId: string): Promise<StudyLessonDto> {
    const profile = await this.users.getActiveProfileOrThrow(userId);
    const found = findLesson(lessonId);
    if (!found) throw new NotFoundException(ERR['notfound.unit']);

    const { lesson, level, index, list } = found;
    const [progress, bookPage] = await Promise.all([
      this.loadProgress(userId),
      this.resolveBookPage(profile.languageId, lesson),
    ]);

    // Lösungen raus – über dieselbe Funktion wie beim Buch, damit Wortkasten
    // und gemischte Reihenfolge übereinstimmen.
    const stripped = stripSolutions({ version: 1, blocks: lesson.exercises })
      .blocks as StudyExerciseBlock[];

    return {
      id: lesson.id,
      number: index + 1,
      total: list.length,
      level,
      kind: lesson.kind,
      title: lesson.title,
      theory: lesson.theory,
      exercises: stripped.map((block) => ({
        block,
        bestScore: progress.get(progressKey(lesson.id, block.id))?.bestScore ?? null,
      })),
      bookPage,
      previousLessonId: list[index - 1]?.id ?? null,
      nextLessonId: list[index + 1]?.id ?? null,
    };
  }

  /** Wertet eine Aufgabe aus, vergibt Punkte und liefert die Lösung mit. */
  async answer(
    userId: string,
    lessonId: string,
    dto: StudyAnswerDto,
  ): Promise<StudyAnswerResultDto> {
    const found = findLesson(lessonId);
    if (!found) throw new NotFoundException(ERR['notfound.unit']);

    const block = found.lesson.exercises.find((candidate) => candidate.id === dto.blockId);
    if (!block || block.type !== dto.answer.type) {
      throw new BadRequestException(ERR['content.no_matching_blocks']);
    }

    const result = evaluateBlock(block, dto.answer);
    const where = { userId_lessonId_blockId: { userId, lessonId, blockId: block.id } };
    const stored = await this.prisma.studyLessonProgress.findUnique({ where });

    const pointsEarned = studyPointsFor(result.scorePercent, stored?.bestScore ?? null);
    const bestScore = Math.max(result.scorePercent, stored?.bestScore ?? 0);

    await this.prisma.studyLessonProgress.upsert({
      where,
      create: { userId, lessonId, blockId: block.id, bestScore, points: pointsEarned, attempts: 1 },
      update: {
        bestScore,
        points: { increment: pointsEarned },
        attempts: { increment: 1 },
        lastAnsweredAt: new Date(),
      },
    });

    // Punkte zählen auch als XP – Serie und Tagesziel sollen eine Lektion
    // genauso sehen wie eine Buchseite.
    if (pointsEarned > 0) await this.users.trackActivity(userId, { xp: pointsEarned });

    return { result, pointsEarned, bestScore, totalPoints: await this.totalPoints(userId) };
  }

  // --------------------------------------------------------------- Helfer

  /**
   * Die Buchseite zum Verweis. Nachgeschlagen über (Sprache, Buch, Kapitel,
   * Seite) statt über eine gespeicherte ID: Die Seiten-IDs entstehen erst beim
   * Seeden und unterscheiden sich je Datenbank.
   */
  private async resolveBookPage(languageId: string, lesson: StudyLesson) {
    const { book, chapter: chapterOrder, unit: unitOrder } = lesson.bookRef;
    const chapter = await this.prisma.chapter.findUnique({
      where: { languageId_book_order: { languageId, book, order: chapterOrder } },
      include: { units: { where: { order: unitOrder } } },
    });
    const unit = chapter?.isPublished ? chapter.units[0] : undefined;
    if (!chapter || !unit) return null;

    return {
      unitId: unit.id,
      book,
      chapterOrder,
      chapterTitle: chapter.title,
      unitTitle: unit.title,
    };
  }

  private async loadProgress(userId: string): Promise<Map<string, ExerciseProgress>> {
    const rows = await this.prisma.studyLessonProgress.findMany({ where: { userId } });
    return new Map(rows.map((row) => [progressKey(row.lessonId, row.blockId), row]));
  }

  private async totalPoints(userId: string): Promise<number> {
    const total = await this.prisma.studyLessonProgress.aggregate({
      where: { userId },
      _sum: { points: true },
    });
    return total._sum.points ?? 0;
  }
}

function progressKey(lessonId: string, blockId: string): string {
  return `${lessonId}:${blockId}`;
}

function rowsOf(lesson: StudyLesson, progress: Map<string, ExerciseProgress>) {
  return lesson.exercises.map((block) => progress.get(progressKey(lesson.id, block.id)));
}

function isDone(lesson: StudyLesson, progress: Map<string, ExerciseProgress>): boolean {
  return rowsOf(lesson, progress).every(Boolean);
}

function summarize(
  lesson: StudyLesson,
  number: number,
  progress: Map<string, ExerciseProgress>,
): StudyLessonSummaryDto {
  const rows = rowsOf(lesson, progress);
  const done = rows.every(Boolean);
  return {
    id: lesson.id,
    number,
    kind: lesson.kind,
    title: lesson.title,
    exerciseCount: lesson.exercises.length,
    done,
    scorePercent: done
      ? Math.round(rows.reduce((sum, row) => sum + row!.bestScore, 0) / rows.length)
      : null,
    points: rows.reduce((sum, row) => sum + (row?.points ?? 0), 0),
    maxPoints: lesson.exercises.length * STUDY_POINTS_PER_EXERCISE,
  };
}

/**
 * Das Niveau, das angezeigt wird, wenn keines gewählt ist: das eigene, sonst
 * das höchste darunter mit Lektionen (C1 ohne Lektionen → B2), sonst das
 * niedrigste vorhandene.
 */
function closestLevel(own: CefrLevel, available: CefrLevel[]): CefrLevel | null {
  if (available.length === 0) return null;
  const ownIndex = CEFR_LEVELS.indexOf(own);
  const below = available.filter((level) => CEFR_LEVELS.indexOf(level) <= ownIndex);
  return below[below.length - 1] ?? available[0];
}
