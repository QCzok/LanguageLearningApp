import {
  BadRequestException,
  ForbiddenException,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { AiFeature, AiMode, Prisma } from '@prisma/client';
import type Anthropic from '@anthropic-ai/sdk';
import { extractPlainText } from '@lingua/shared';
import type {
  AiConversationDto,
  AiMessageDto,
  AiQuotaDto,
  CefrLevel,
  GrammarExplanationDto,
  NotebookAnalysisDto,
  NotebookPageContent,
  RecommendationDto,
} from '@lingua/shared';
import { aiConfig } from '../../config/configuration';
import { PrismaService } from '../../prisma/prisma.service';
import { toLanguageDto } from '../languages/languages.service';
import { UsersService } from '../users/users.service';
import { AnthropicClient, TokenUsage } from './anthropic.client';
import { correctionFormat, grammarFormat, recommendationFormat } from './ai.schemas';
import {
  chatInstructions,
  CORRECTION_INSTRUCTIONS,
  GRAMMAR_INSTRUCTIONS,
  learnerContext,
  RECOMMENDATION_INSTRUCTIONS,
  TUTOR_SYSTEM_PREFIX,
} from './prompts';
import { CreateConversationDto, GrammarQuestionDto, SendMessageDto } from './dto/ai.dto';

/** So viele frühere Nachrichten gehen als Kontext mit in den Chat. */
const CHAT_HISTORY_LIMIT = 20;
/** Unter dieser Textlänge lohnt sich keine Korrektur. */
const MIN_TEXT_LENGTH_FOR_ANALYSIS = 15;

@Injectable()
export class AiService {
  private readonly logger = new Logger(AiService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly anthropic: AnthropicClient,
    private readonly users: UsersService,
    @Inject(aiConfig.KEY) private readonly config: ConfigType<typeof aiConfig>,
  ) {}

  // ------------------------------------------------------------ Kontingent

  /**
   * Kontingent pro Kalendermonat. Der Free-Plan bekommt ein kleines Guthaben,
   * damit die KI-Funktionen ausprobiert werden können; Premium hat ein hohes
   * Limit rein als Missbrauchsschutz.
   */
  async getQuota(userId: string): Promise<AiQuotaDto> {
    const user = await this.prisma.user.findUniqueOrThrow({
      where: { id: userId },
      select: { plan: true },
    });

    const { start, next } = this.currentMonthRange();
    const used = await this.prisma.aiUsage.count({
      where: { userId, createdAt: { gte: start, lt: next } },
    });

    return {
      plan: user.plan,
      used,
      limit: user.plan === 'PREMIUM' ? this.config.premiumMonthlyLimit : this.config.freeMonthlyLimit,
      resetsAt: next.toISOString(),
    };
  }

  private async assertQuota(userId: string): Promise<void> {
    const quota = await this.getQuota(userId);
    if (quota.used >= quota.limit) {
      throw new HttpException(
        {
          statusCode: HttpStatus.TOO_MANY_REQUESTS,
          error: 'AiQuotaExceeded',
          message:
            quota.plan === 'PREMIUM'
              ? 'Das monatliche KI-Kontingent ist aufgebraucht.'
              : 'Dein kostenloses KI-Kontingent ist aufgebraucht. Mit Premium geht es weiter.',
        },
        HttpStatus.TOO_MANY_REQUESTS,
      );
    }
  }

  private async recordUsage(userId: string, feature: AiFeature, usage: TokenUsage): Promise<void> {
    await this.prisma.aiUsage.create({
      data: {
        userId,
        feature,
        model: this.anthropic.model,
        inputTokens: usage.inputTokens,
        outputTokens: usage.outputTokens,
        cachedTokens: usage.cachedTokens,
      },
    });
  }

  // ----------------------------------------------- Lernheft-Korrektur (Premium)

  /**
   * Analysiert die Textfelder einer Lernheft-Seite. Handschriftliche Striche
   * werden bewusst nicht interpretiert – korrigiert wird, was als Text vorliegt.
   */
  async analyzeNotebookPage(userId: string, pageId: string): Promise<NotebookAnalysisDto> {
    await this.assertQuota(userId);

    const page = await this.prisma.notebookPage.findUnique({
      where: { id: pageId },
      include: { notebook: { include: { language: true } } },
    });
    if (!page) throw new NotFoundException('Seite nicht gefunden');
    if (page.notebook.userId !== userId) throw new ForbiddenException('Kein Zugriff auf diese Seite');

    const text = extractPlainText(page.content as unknown as NotebookPageContent);
    if (text.length < MIN_TEXT_LENGTH_FOR_ANALYSIS) {
      throw new BadRequestException(
        'Auf dieser Seite steht noch zu wenig Text. Schreibe mit dem Textwerkzeug ein paar Sätze.',
      );
    }

    const [user, profile] = await Promise.all([
      this.prisma.user.findUniqueOrThrow({
        where: { id: userId },
        select: { nativeLanguage: true },
      }),
      this.users.getActiveProfileOrThrow(userId),
    ]);

    const language = page.notebook.language ?? profile.language;

    const { parsed, usage } = await this.anthropic.parse({
      format: correctionFormat,
      systemPrefix: TUTOR_SYSTEM_PREFIX,
      systemSuffix: `${learnerContext({
        targetLanguage: language.nativeName,
        nativeLanguage: user.nativeLanguage,
        level: profile.level as CefrLevel,
      })}\n\n${CORRECTION_INSTRUCTIONS}`,
      userContent: text,
      effort: 'high',
    });

    const analysis = await this.prisma.notebookAnalysis.create({
      data: {
        pageId,
        userId,
        recognizedText: parsed.recognizedText,
        summary: parsed.summary,
        scorePercent: parsed.scorePercent,
        corrections: parsed.corrections as unknown as Prisma.InputJsonValue,
        suggestions: parsed.suggestions,
        model: this.anthropic.model,
      },
    });

    await this.recordUsage(userId, AiFeature.NOTEBOOK_ANALYSIS, usage);
    await this.users.trackActivity(userId, { xp: 15 });

    return this.toAnalysisDto(analysis);
  }

  async listNotebookAnalyses(userId: string, pageId: string): Promise<NotebookAnalysisDto[]> {
    const analyses = await this.prisma.notebookAnalysis.findMany({
      where: { pageId, userId },
      orderBy: { createdAt: 'desc' },
      take: 10,
    });
    return analyses.map((analysis) => this.toAnalysisDto(analysis));
  }

  // ------------------------------------------------------ KI-Chat (Premium)

  async listConversations(userId: string): Promise<AiConversationDto[]> {
    const conversations = await this.prisma.aiConversation.findMany({
      where: { userId },
      include: { language: true, _count: { select: { messages: true } } },
      orderBy: { updatedAt: 'desc' },
      take: 50,
    });

    return conversations.map((conversation) => ({
      id: conversation.id,
      title: conversation.title,
      mode: conversation.mode,
      level: conversation.level as CefrLevel,
      language: toLanguageDto(conversation.language),
      messageCount: conversation._count.messages,
      createdAt: conversation.createdAt.toISOString(),
      updatedAt: conversation.updatedAt.toISOString(),
    }));
  }

  async createConversation(userId: string, dto: CreateConversationDto): Promise<AiConversationDto> {
    const profile = await this.users.getActiveProfileOrThrow(userId);

    const conversation = await this.prisma.aiConversation.create({
      data: {
        userId,
        languageId: profile.languageId,
        mode: dto.mode ?? AiMode.CHAT,
        level: profile.level,
        title: dto.title ?? dto.topic ?? 'Neues Gespräch',
        topic: dto.topic,
      },
      include: { language: true, _count: { select: { messages: true } } },
    });

    return {
      id: conversation.id,
      title: conversation.title,
      mode: conversation.mode,
      level: conversation.level as CefrLevel,
      language: toLanguageDto(conversation.language),
      messageCount: 0,
      createdAt: conversation.createdAt.toISOString(),
      updatedAt: conversation.updatedAt.toISOString(),
    };
  }

  async getMessages(userId: string, conversationId: string): Promise<AiMessageDto[]> {
    await this.assertOwnConversation(userId, conversationId);
    const messages = await this.prisma.aiMessage.findMany({
      where: { conversationId },
      orderBy: { createdAt: 'asc' },
    });
    return messages.map((message) => ({
      id: message.id,
      role: message.role as 'user' | 'assistant',
      content: message.content,
      createdAt: message.createdAt.toISOString(),
    }));
  }

  async deleteConversation(userId: string, conversationId: string): Promise<void> {
    await this.assertOwnConversation(userId, conversationId);
    await this.prisma.aiConversation.delete({ where: { id: conversationId } });
  }

  /** Nicht-streamende Variante – einfacher für Clients ohne SSE. */
  async sendMessage(
    userId: string,
    conversationId: string,
    dto: SendMessageDto,
  ): Promise<AiMessageDto> {
    await this.assertQuota(userId);
    const { systemSuffix, history } = await this.prepareChat(userId, conversationId, dto.content);

    const { text, usage } = await this.anthropic.completeText({
      systemPrefix: TUTOR_SYSTEM_PREFIX,
      systemSuffix,
      messages: history,
    });

    const reply = await this.persistTurn(conversationId, dto.content, text);
    await this.recordUsage(userId, AiFeature.CHAT, usage);
    await this.users.trackActivity(userId, { xp: 5, minutes: 1 });

    return reply;
  }

  /** Streamende Variante – der Controller reicht die Stücke als SSE weiter. */
  async *streamMessage(
    userId: string,
    conversationId: string,
    dto: SendMessageDto,
  ): AsyncGenerator<{ type: 'delta'; text: string } | { type: 'done'; message: AiMessageDto }> {
    await this.assertQuota(userId);
    const { systemSuffix, history } = await this.prepareChat(userId, conversationId, dto.content);

    for await (const event of this.anthropic.streamText({
      systemPrefix: TUTOR_SYSTEM_PREFIX,
      systemSuffix,
      messages: history,
    })) {
      if (event.type === 'delta') {
        yield { type: 'delta', text: event.text };
        continue;
      }

      // Erst nach vollständiger Antwort speichern – ein Abbruch hinterlässt keinen Torso.
      const reply = await this.persistTurn(conversationId, dto.content, event.text);
      await this.recordUsage(userId, AiFeature.CHAT, event.usage);
      await this.users.trackActivity(userId, { xp: 5, minutes: 1 });
      yield { type: 'done', message: reply };
    }
  }

  // ------------------------------------------------ Grammatik & Empfehlungen

  async explainGrammar(userId: string, dto: GrammarQuestionDto): Promise<GrammarExplanationDto> {
    await this.assertQuota(userId);

    const [user, profile] = await Promise.all([
      this.prisma.user.findUniqueOrThrow({
        where: { id: userId },
        select: { nativeLanguage: true },
      }),
      this.users.getActiveProfileOrThrow(userId),
    ]);

    const { parsed, usage } = await this.anthropic.parse({
      format: grammarFormat,
      systemPrefix: TUTOR_SYSTEM_PREFIX,
      systemSuffix: `${learnerContext({
        targetLanguage: profile.language.nativeName,
        nativeLanguage: user.nativeLanguage,
        level: profile.level as CefrLevel,
      })}\n\n${GRAMMAR_INSTRUCTIONS}`,
      userContent: dto.question,
      effort: 'medium',
    });

    await this.recordUsage(userId, AiFeature.GRAMMAR_EXPLANATION, usage);
    return parsed;
  }

  /**
   * Personalisierte Empfehlungen aus dem echten Lernstand. Der Katalog wird
   * mitgeliefert, damit die KI nur auf existierende Inhalte verweisen kann.
   */
  async getRecommendations(userId: string): Promise<RecommendationDto> {
    await this.assertQuota(userId);

    const [user, profile] = await Promise.all([
      this.prisma.user.findUniqueOrThrow({
        where: { id: userId },
        select: { nativeLanguage: true, displayName: true, streakDays: true, xp: true },
      }),
      this.users.getActiveProfileOrThrow(userId),
    ]);

    const [stats, weakCards, decks, contents, media, lastAnalysis] = await Promise.all([
      this.prisma.vocabProgress.groupBy({
        by: ['status'],
        where: { userId },
        _count: { _all: true },
      }),
      this.prisma.vocabProgress.findMany({
        where: { userId, lapses: { gt: 1 } },
        include: { vocabItem: { select: { term: true, translation: true } } },
        orderBy: { lapses: 'desc' },
        take: 12,
      }),
      this.prisma.vocabDeck.findMany({
        where: { languageId: profile.languageId, level: profile.level, isSystem: true },
        select: { id: true, title: true, level: true },
        take: 8,
      }),
      this.prisma.libraryContent.findMany({
        where: { languageId: profile.languageId, level: profile.level },
        select: { id: true, title: true, type: true, level: true },
        take: 8,
      }),
      this.prisma.mediaItem.findMany({
        where: { languageId: profile.languageId, level: profile.level },
        select: { id: true, title: true, type: true, level: true },
        take: 8,
      }),
      this.prisma.notebookAnalysis.findFirst({
        where: { userId },
        orderBy: { createdAt: 'desc' },
        select: { summary: true, corrections: true },
      }),
    ]);

    const payload = {
      lernender: {
        name: user.displayName,
        streakTage: user.streakDays,
        xp: user.xp,
      },
      vokabelstatus: Object.fromEntries(stats.map((row) => [row.status, row._count._all])),
      schwierigeVokabeln: weakCards.map((card) => ({
        wort: card.vocabItem.term,
        uebersetzung: card.vocabItem.translation,
        fehlversuche: card.lapses,
      })),
      letzteKorrektur: lastAnalysis
        ? {
            zusammenfassung: lastAnalysis.summary,
            fehlerarten: (lastAnalysis.corrections as Array<{ category: string }>).map(
              (correction) => correction.category,
            ),
          }
        : null,
      katalog: {
        VOCAB_DECK: decks,
        LIBRARY: contents,
        MEDIA: media,
      },
    };

    const { parsed, usage } = await this.anthropic.parse({
      format: recommendationFormat,
      systemPrefix: TUTOR_SYSTEM_PREFIX,
      systemSuffix: `${learnerContext({
        targetLanguage: profile.language.nativeName,
        nativeLanguage: user.nativeLanguage,
        level: profile.level as CefrLevel,
      })}\n\n${RECOMMENDATION_INSTRUCTIONS}`,
      userContent: JSON.stringify(payload, null, 2),
      effort: 'medium',
    });

    await this.recordUsage(userId, AiFeature.RECOMMENDATIONS, usage);
    return parsed;
  }

  // ---------------------------------------------------------------- Helfer

  private async prepareChat(userId: string, conversationId: string, userMessage: string) {
    const conversation = await this.assertOwnConversation(userId, conversationId);

    const user = await this.prisma.user.findUniqueOrThrow({
      where: { id: userId },
      select: { nativeLanguage: true },
    });

    const previous = await this.prisma.aiMessage.findMany({
      where: { conversationId },
      orderBy: { createdAt: 'desc' },
      take: CHAT_HISTORY_LIMIT,
    });

    const history: Anthropic.MessageParam[] = previous
      .reverse()
      .map((message) => ({
        role: message.role === 'assistant' ? ('assistant' as const) : ('user' as const),
        content: message.content,
      }));
    history.push({ role: 'user', content: userMessage });

    const mode = conversation.mode === AiMode.DISCUSSION ? 'DISCUSSION' : 'CHAT';
    const systemSuffix = `${learnerContext({
      targetLanguage: conversation.language.nativeName,
      nativeLanguage: user.nativeLanguage,
      level: conversation.level as CefrLevel,
    })}\n\n${chatInstructions(mode, conversation.topic ?? undefined)}`;

    return { systemSuffix, history };
  }

  private async persistTurn(
    conversationId: string,
    userMessage: string,
    assistantMessage: string,
  ): Promise<AiMessageDto> {
    const [, reply] = await this.prisma.$transaction([
      this.prisma.aiMessage.create({
        data: { conversationId, role: 'user', content: userMessage },
      }),
      this.prisma.aiMessage.create({
        data: { conversationId, role: 'assistant', content: assistantMessage },
      }),
      this.prisma.aiConversation.update({
        where: { id: conversationId },
        data: { updatedAt: new Date() },
      }),
    ]);

    return {
      id: reply.id,
      role: 'assistant',
      content: reply.content,
      createdAt: reply.createdAt.toISOString(),
    };
  }

  private async assertOwnConversation(userId: string, conversationId: string) {
    const conversation = await this.prisma.aiConversation.findUnique({
      where: { id: conversationId },
      include: { language: true },
    });
    if (!conversation) throw new NotFoundException('Gespräch nicht gefunden');
    if (conversation.userId !== userId) throw new ForbiddenException('Kein Zugriff auf dieses Gespräch');
    return conversation;
  }

  private currentMonthRange(): { start: Date; next: Date } {
    const now = new Date();
    const start = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1));
    const next = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 1));
    return { start, next };
  }

  private toAnalysisDto(analysis: {
    id: string;
    pageId: string;
    recognizedText: string;
    summary: string;
    scorePercent: number;
    corrections: Prisma.JsonValue;
    suggestions: string[];
    createdAt: Date;
  }): NotebookAnalysisDto {
    return {
      id: analysis.id,
      pageId: analysis.pageId,
      recognizedText: analysis.recognizedText,
      summary: analysis.summary,
      scorePercent: analysis.scorePercent,
      corrections: analysis.corrections as NotebookAnalysisDto['corrections'],
      suggestions: analysis.suggestions,
      createdAt: analysis.createdAt.toISOString(),
    };
  }
}
