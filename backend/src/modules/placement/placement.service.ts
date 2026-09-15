import { BadRequestException, Injectable } from '@nestjs/common';
import { CefrLevel, LevelSource, Prisma } from '@prisma/client';
import { CEFR_LEVELS, PLACEMENT_QUESTIONS_PER_LEVEL } from '@lingua/shared';
import type {
  PlacementQuestionDto,
  PlacementResultDto,
  PlacementStageResultDto,
} from '@lingua/shared';
import { PrismaService } from '../../prisma/prisma.service';
import { UsersService } from '../users/users.service';
import { SubmitPlacementDto, SubmitStageDto } from './dto/placement.dto';
import { determineLevel, isLevelPassed, nextLevel } from './placement.rules';

/** Fragen pro Niveau im Test – dieselbe Zahl, die die Oberfläche ansagt. */
const QUESTIONS_PER_LEVEL = PLACEMENT_QUESTIONS_PER_LEVEL;

@Injectable()
export class PlacementService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly users: UsersService,
  ) {}

  /**
   * Der vollständige Test: pro Niveau eine feste Zahl Fragen, aufsteigend
   * sortiert. Er wird in einem Stück ausgeliefert und ist damit cachebar –
   * welche Stufen davon tatsächlich gefragt werden, entscheidet die Leiter
   * beim Durchlaufen (siehe `submitStage`).
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
   * Auswertung einer einzelnen Stufe.
   *
   * Die Lösungen verlassen den Server nie, deshalb kann die App nicht selbst
   * entscheiden, ob es weitergeht – sie fragt nach jeder Stufe hier nach. Die
   * Antwort sagt nur, wie viele richtig waren und welche Stufe als Nächstes
   * kommt; welche Frage falsch war, bleibt offen, damit ein zweiter Durchlauf
   * nicht zum Abschreiben wird.
   */
  async submitStage(dto: SubmitStageDto): Promise<PlacementStageResultDto> {
    const questions = await this.prisma.placementQuestion.findMany({
      where: {
        id: { in: dto.answers.map((answer) => answer.questionId) },
        languageId: dto.languageId,
      },
    });

    if (questions.length !== dto.answers.length) {
      throw new BadRequestException('Der Test enthält unbekannte oder fremde Fragen');
    }

    const level = questions[0].level as CefrLevel;
    if (questions.some((question) => question.level !== level)) {
      throw new BadRequestException('Eine Stufe wird immer als Ganzes ausgewertet');
    }

    const byId = new Map(questions.map((question) => [question.id, question]));
    const correct = dto.answers.filter(
      (answer) => byId.get(answer.questionId)!.correctIndex === answer.selectedIndex,
    ).length;

    const passed = isLevelPassed({ correct, total: dto.answers.length });
    return {
      level,
      correct,
      total: dto.answers.length,
      passed,
      nextLevel: passed ? await this.nextLevelWithQuestions(dto.languageId, level) : null,
    };
  }

  /**
   * Abschluss des Tests: alle bisher beantworteten Stufen zusammen auswerten,
   * das Ergebnis im Lernprofil festhalten.
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

    const resultLevel = determineLevel(perLevel);
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
      perLevel: CEFR_LEVELS.filter((level) => perLevel.has(level as CefrLevel)).map((level) => {
        const bucket = perLevel.get(level as CefrLevel)!;
        return {
          level: level as CefrLevel,
          ...bucket,
          passed: isLevelPassed(bucket),
        };
      }),
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

  /** Die nächste Stufe, für die es in dieser Sprache überhaupt Fragen gibt. */
  private async nextLevelWithQuestions(
    languageId: string,
    level: CefrLevel,
  ): Promise<CefrLevel | null> {
    const next = nextLevel(level);
    if (!next) return null;

    const count = await this.prisma.placementQuestion.count({
      where: { languageId, level: next, isActive: true },
    });
    return count > 0 ? next : null;
  }

  private recommendation(level: CefrLevel, scorePercent: number): string {
    if (level === 'C2') {
      return 'Du hast jede Stufe bestanden – wir starten auf C2. Wenn dir etwas zu leicht vorkommt, sag uns im Profil Bescheid.';
    }
    if (scorePercent >= 80) {
      return `Knapp an der nächsten Stufe vorbei: Du steigst auf ${level} ein und hast es nicht weit bis darüber.`;
    }
    return `Auf ${level} hakte es – genau dort setzen wir an. Vokabeln, Texte und Podcasts kommen ab jetzt auf diesem Niveau.`;
  }
}
