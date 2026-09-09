import { BadRequestException, Injectable } from '@nestjs/common';
import { CefrLevel, LevelSource, Prisma } from '@prisma/client';
import { CEFR_LEVELS } from '@lingua/shared';
import type { PlacementQuestionDto, PlacementResultDto } from '@lingua/shared';
import { PrismaService } from '../../prisma/prisma.service';
import { UsersService } from '../users/users.service';
import { SubmitPlacementDto } from './dto/placement.dto';

/** Ab dieser Trefferquote gilt ein Niveau als bestanden. */
const PASS_THRESHOLD = 0.6;
/** Fragen pro Niveau im generierten Test. */
const QUESTIONS_PER_LEVEL = 4;

@Injectable()
export class PlacementService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly users: UsersService,
  ) {}

  /**
   * Adaptiv wäre schöner, aber ein fixer Stufentest ist offline-fähig und
   * vollständig cachebar: pro Niveau eine feste Zahl Fragen, aufsteigend sortiert.
   */
  async getTest(languageId: string): Promise<PlacementQuestionDto[]> {
    const questions = await this.prisma.placementQuestion.findMany({
      where: { languageId, isActive: true },
      orderBy: [{ level: 'asc' }, { sortOrder: 'asc' }],
    });

    if (questions.length === 0) {
      throw new BadRequestException('Für diese Sprache gibt es noch keinen Einstufungstest');
    }

    const perLevel = new Map<CefrLevel, typeof questions>();
    for (const question of questions) {
      const bucket = perLevel.get(question.level) ?? [];
      if (bucket.length < QUESTIONS_PER_LEVEL) bucket.push(question);
      perLevel.set(question.level, bucket);
    }

    return CEFR_LEVELS.flatMap((level) => perLevel.get(level as CefrLevel) ?? []).map(
      (question) => ({
        id: question.id,
        level: question.level as CefrLevel,
        prompt: question.prompt,
        helperText: question.helperText,
        options: question.options,
        points: question.points,
      }),
    );
  }

  /**
   * Auswertung: Das Ergebnis ist das höchste Niveau, das – zusammen mit allen
   * darunterliegenden – die Schwelle erreicht. So verhindert ein Glückstreffer auf C1
   * keine realistische Einstufung, wenn B1 bereits durchgefallen ist.
   */
  async submit(userId: string, dto: SubmitPlacementDto): Promise<PlacementResultDto> {
    const questions = await this.prisma.placementQuestion.findMany({
      where: { id: { in: dto.answers.map((answer) => answer.questionId) }, languageId: dto.languageId },
    });

    if (questions.length !== dto.answers.length) {
      throw new BadRequestException('Der Test enthält unbekannte oder fremde Fragen');
    }

    const byId = new Map(questions.map((question) => [question.id, question]));
    const perLevel = new Map<CefrLevel, { correct: number; total: number }>();
    let correct = 0;

    const evaluated = dto.answers.map((answer) => {
      const question = byId.get(answer.questionId)!;
      const isCorrect = question.correctIndex === answer.selectedIndex;
      if (isCorrect) correct += 1;

      const level = question.level as CefrLevel;
      const bucket = perLevel.get(level) ?? { correct: 0, total: 0 };
      bucket.total += 1;
      if (isCorrect) bucket.correct += 1;
      perLevel.set(level, bucket);

      return { questionId: answer.questionId, selectedIndex: answer.selectedIndex, correct: isCorrect };
    });

    const resultLevel = this.determineLevel(perLevel);
    const total = dto.answers.length;
    const scorePercent = total > 0 ? Math.round((correct / total) * 100) : 0;

    const attempt = await this.prisma.placementAttempt.create({
      data: {
        userId,
        languageId: dto.languageId,
        answers: evaluated as unknown as Prisma.InputJsonValue,
        correct,
        total,
        scorePercent,
        resultLevel,
      },
    });

    // Das Ergebnis übernimmt direkt das Lernprofil – der Nutzer kann es danach überschreiben.
    await this.users.upsertLearningProfile(userId, {
      languageId: dto.languageId,
      level: resultLevel,
      levelSource: LevelSource.PLACEMENT_TEST,
      isActive: true,
    });

    return {
      attemptId: attempt.id,
      correct,
      total,
      scorePercent,
      resultLevel,
      perLevel: CEFR_LEVELS.filter((level) => perLevel.has(level as CefrLevel)).map((level) => ({
        level: level as CefrLevel,
        ...perLevel.get(level as CefrLevel)!,
      })),
      recommendation: this.recommendation(resultLevel, scorePercent),
    };
  }

  async history(userId: string, languageId?: string) {
    const attempts = await this.prisma.placementAttempt.findMany({
      where: { userId, ...(languageId ? { languageId } : {}) },
      orderBy: { createdAt: 'desc' },
      take: 20,
      include: { language: true },
    });

    return attempts.map((attempt) => ({
      id: attempt.id,
      language: attempt.language.name,
      resultLevel: attempt.resultLevel,
      scorePercent: attempt.scorePercent,
      correct: attempt.correct,
      total: attempt.total,
      createdAt: attempt.createdAt.toISOString(),
    }));
  }

  private determineLevel(perLevel: Map<CefrLevel, { correct: number; total: number }>): CefrLevel {
    let result: CefrLevel = 'A1';

    for (const level of CEFR_LEVELS) {
      const bucket = perLevel.get(level as CefrLevel);
      if (!bucket || bucket.total === 0) continue;
      if (bucket.correct / bucket.total >= PASS_THRESHOLD) {
        result = level as CefrLevel;
      } else {
        break; // erste nicht bestandene Stufe beendet die Einstufung
      }
    }
    return result;
  }

  private recommendation(level: CefrLevel, scorePercent: number): string {
    if (scorePercent >= 90) {
      return `Sehr starkes Ergebnis. Starte auf ${level} – wenn sich das zu leicht anfühlt, hebe das Niveau im Profil an.`;
    }
    if (scorePercent >= 60) {
      return `Dein Niveau liegt bei ${level}. Wir stellen Vokabeln, Texte und Podcasts passend dazu zusammen.`;
    }
    return `Wir starten mit ${level} und bauen die Grundlagen aus. Du kannst das Niveau jederzeit im Profil ändern.`;
  }
}
