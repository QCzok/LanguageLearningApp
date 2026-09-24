import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { WorkbookBook } from '@prisma/client';
import {
  STUDY_POINTS_PER_EXERCISE,
  STUDY_SESSION_TOPICS,
  WORKBOOK_BOOKS,
  booksForLevel,
  splitIntoStudyTopics,
  studyPointsFor,
  type CefrLevel,
  type StudyAnswerResultDto,
  type StudyBookProgressDto,
  type StudyExerciseBlock,
  type StudyOverviewDto,
  type StudySessionDto,
  type StudyTopicDraft,
  type StudyTopicDto,
  type UnitContent,
  type WorkbookBook as WorkbookBookName,
} from '@lingua/shared';
import { PrismaService } from '../../prisma/prisma.service';
import { UsersService } from '../users/users.service';
import { evaluateBlock, stripSolutions } from './evaluation';
import { StudyAnswerDto } from './dto/workbook.dto';
import { ERR } from '../../common/i18n/messages';

/** Ein Thema mit allem, was die Auswahl einer Sitzung über es wissen muss. */
interface IndexedTopic {
  draft: StudyTopicDraft;
  unit: { id: string; title: string };
  chapter: { order: number; title: string; level: CefrLevel; book: WorkbookBook };
}

interface ExerciseProgress {
  bestScore: number;
  points: number;
  lastAnsweredAt: Date;
}

/**
 * Lernsitzungen aus dem Lehrwerk (siehe `splitIntoStudyTopics`).
 *
 * Die Themen werden bei jeder Anfrage aus den Seiten geschnitten und nicht
 * gespeichert: Ändert sich eine Seite im Seed, ändert sich das Thema mit, und
 * der Stand hängt an (Seite, Aufgabe) – beides bleibt beim Upsert des Seeds
 * erhalten.
 */
@Injectable()
export class StudyService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly users: UsersService,
  ) {}

  async overview(userId: string): Promise<StudyOverviewDto> {
    const profile = await this.users.getActiveProfileOrThrow(userId);
    const books = booksForLevel(profile.level as CefrLevel);

    const [topics, progress, total] = await Promise.all([
      this.loadTopics(profile.languageId, books as unknown as WorkbookBook[]),
      this.loadProgress(userId),
      this.prisma.studyExerciseProgress.aggregate({ where: { userId }, _sum: { points: true } }),
    ]);

    return {
      totalPoints: total._sum.points ?? 0,
      books: books.map((book): StudyBookProgressDto => {
        const ofBook = topics.filter((topic) => topic.chapter.book === book);
        let points = 0;
        let pointsPossible = 0;
        let topicsDone = 0;
        let topicsMastered = 0;

        for (const topic of ofBook) {
          const rows = topic.draft.exercises.map((exercise) =>
            progress.get(progressKey(topic.unit.id, exercise.block.id)),
          );
          pointsPossible += rows.length * STUDY_POINTS_PER_EXERCISE;
          points += rows.reduce((sum, row) => sum + (row?.points ?? 0), 0);
          if (rows.every(Boolean)) topicsDone++;
          if (rows.every((row) => row?.bestScore === 100)) topicsMastered++;
        }

        return {
          book,
          topicsTotal: ofBook.length,
          topicsDone,
          topicsMastered,
          points,
          pointsPossible,
        };
      }),
    };
  }

  /**
   * Stellt eine Sitzung zusammen: die nächsten noch offenen Themen des Buchs
   * in Buchreihenfolge. Ist alles bearbeitet, kommen die schwächsten Themen
   * zur Wiederholung – bei Gleichstand die am längsten nicht geübten.
   */
  async session(
    userId: string,
    book: WorkbookBook,
    size = STUDY_SESSION_TOPICS,
  ): Promise<StudySessionDto> {
    const profile = await this.users.getActiveProfileOrThrow(userId);
    const [topics, progress] = await Promise.all([
      this.loadTopics(profile.languageId, [book]),
      this.loadProgress(userId),
    ]);

    const rowsOf = (topic: IndexedTopic) =>
      topic.draft.exercises.map((exercise) =>
        progress.get(progressKey(topic.unit.id, exercise.block.id)),
      );

    const open = topics.filter((topic) => !rowsOf(topic).every(Boolean));
    const isReview = open.length === 0;

    let picked: IndexedTopic[];
    if (!isReview) {
      picked = open.slice(0, size);
    } else {
      const scored = topics.map((topic) => {
        const rows = rowsOf(topic) as ExerciseProgress[];
        return {
          topic,
          average: rows.reduce((sum, row) => sum + row.bestScore, 0) / rows.length,
          last: Math.max(...rows.map((row) => row.lastAnsweredAt.getTime())),
        };
      });
      scored.sort((a, b) => a.average - b.average || a.last - b.last);
      picked = scored.slice(0, size).map((entry) => entry.topic);
    }

    return {
      book: book as WorkbookBookName,
      isReview,
      topics: picked.map((topic): StudyTopicDto => {
        // Lösungen raus, bevor die Aufgaben das Haus verlassen – über
        // dieselbe Funktion wie beim Buch, damit Wortkasten und gemischte
        // Reihenfolge übereinstimmen.
        const stripped = stripSolutions({
          version: 1,
          blocks: topic.draft.exercises.map((exercise) => exercise.block),
        }).blocks as StudyExerciseBlock[];

        return {
          id: `${topic.unit.id}:${topic.draft.anchorId}`,
          unitId: topic.unit.id,
          book: topic.chapter.book as WorkbookBookName,
          level: topic.chapter.level,
          chapterOrder: topic.chapter.order,
          chapterTitle: topic.chapter.title,
          unitTitle: topic.unit.title,
          title: topic.draft.title,
          theory: topic.draft.theory,
          exercises: topic.draft.exercises.map((exercise, index) => ({
            block: stripped[index],
            context: exercise.context,
            bestScore:
              progress.get(progressKey(topic.unit.id, exercise.block.id))?.bestScore ?? null,
          })),
        };
      }),
    };
  }

  /** Wertet eine Antwort aus, vergibt Punkte und liefert die Lösung mit. */
  async answer(userId: string, dto: StudyAnswerDto): Promise<StudyAnswerResultDto> {
    const unit = await this.prisma.chapterUnit.findUnique({ where: { id: dto.unitId } });
    if (!unit) throw new NotFoundException(ERR['notfound.unit']);

    const content = unit.content as unknown as UnitContent;
    const block = content.blocks.find((candidate) => candidate.id === dto.blockId);
    if (!block || block.type !== dto.answer.type || block.type === 'WRITING') {
      throw new BadRequestException(ERR['content.no_matching_blocks']);
    }

    const result = evaluateBlock(block as StudyExerciseBlock, dto.answer);
    const where = { userId_unitId_blockId: { userId, unitId: unit.id, blockId: block.id } };
    const stored = await this.prisma.studyExerciseProgress.findUnique({ where });

    const pointsEarned = studyPointsFor(result.scorePercent, stored?.bestScore ?? null);
    const bestScore = Math.max(result.scorePercent, stored?.bestScore ?? 0);

    await this.prisma.studyExerciseProgress.upsert({
      where,
      create: {
        userId,
        unitId: unit.id,
        blockId: block.id,
        bestScore,
        points: pointsEarned,
        attempts: 1,
      },
      update: {
        bestScore,
        points: { increment: pointsEarned },
        attempts: { increment: 1 },
        lastAnsweredAt: new Date(),
      },
    });

    // Punkte zählen auch als XP – Serie und Tagesziel sollen eine Sitzung
    // genauso sehen wie eine Buchseite.
    if (pointsEarned > 0) await this.users.trackActivity(userId, { xp: pointsEarned });

    const total = await this.prisma.studyExerciseProgress.aggregate({
      where: { userId },
      _sum: { points: true },
    });

    return { result, pointsEarned, bestScore, totalPoints: total._sum.points ?? 0 };
  }

  // --------------------------------------------------------------- Helfer

  /** Alle Themen der veröffentlichten Kapitel, in Buchreihenfolge. */
  private async loadTopics(languageId: string, books: WorkbookBook[]): Promise<IndexedTopic[]> {
    const allowed = books.filter((book) => (WORKBOOK_BOOKS as readonly string[]).includes(book));
    const chapters = await this.prisma.chapter.findMany({
      where: { languageId, book: { in: allowed }, isPublished: true },
      include: { units: { orderBy: { order: 'asc' } } },
      orderBy: { order: 'asc' },
    });

    return chapters.flatMap((chapter) =>
      chapter.units.flatMap((unit) =>
        splitIntoStudyTopics(unit.content as unknown as UnitContent, unit.title).map(
          (draft): IndexedTopic => ({
            draft,
            unit: { id: unit.id, title: unit.title },
            chapter: {
              order: chapter.order,
              title: chapter.title,
              level: chapter.level as CefrLevel,
              book: chapter.book,
            },
          }),
        ),
      ),
    );
  }

  private async loadProgress(userId: string): Promise<Map<string, ExerciseProgress>> {
    const rows = await this.prisma.studyExerciseProgress.findMany({ where: { userId } });
    return new Map(rows.map((row) => [progressKey(row.unitId, row.blockId), row]));
  }
}

function progressKey(unitId: string, blockId: string): string {
  return `${unitId}:${blockId}`;
}
