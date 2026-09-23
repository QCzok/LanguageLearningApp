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
  AiTurnDto,
  AiQuotaDto,
  CefrLevel,
  GrammarExplanationDto,
  NotebookAnalysisDto,
  NotebookPageContent,
  RecommendationDto,
  TranslationDto,
  VocabDeckDto,
} from '@lingua/shared';
import { aiConfig } from '../../config/configuration';
import { PrismaService } from '../../prisma/prisma.service';
import { toLanguageDto } from '../languages/languages.service';
import { UsersService } from '../users/users.service';
import { AI_CLIENT, AiClient, TokenUsage } from './ai-client.interface';
import { WhisperClient } from './whisper.client';
import {
  correctionSchema,
  grammarSchema,
  recommendationSchema,
  translationSchema,
  vocabDeckGenerationSchema,
  VOCAB_DECK_GENERATION_COUNT,
} from './ai.schemas';
import {
  chatInstructions,
  CORRECTION_INSTRUCTIONS,
  CORRECTION_MARKER,
  CORRECTION_NOTE_MARKER,
  GRAMMAR_INSTRUCTIONS,
  learnerContext,
  RECOMMENDATION_INSTRUCTIONS,
  TRANSLATION_INSTRUCTIONS,
  TUTOR_SYSTEM_PREFIX,
  vocabDeckInstructions,
} from './prompts';
import type { MessageSource } from './prompts';
import {
  CreateConversationDto,
  GenerateVocabDeckDto,
  GrammarQuestionDto,
  SendMessageDto,
  TranslateDto,
} from './dto/ai.dto';

import { ERR, t, type MessageLanguage } from '../../common/i18n/messages';

/** So viele frühere Nachrichten gehen als Kontext mit in den Chat. */
const CHAT_HISTORY_LIMIT = 20;

/**
 * Die ID als zweites Sortierkriterium. `createdAt` allein genügt nicht: Zwei
 * Nachrichten desselben Zuges liegen nur eine Millisekunde auseinander, und
 * ältere Gespräche (vor der Migration) tragen sogar denselben Zeitstempel.
 * cuids beginnen mit der Entstehungszeit, ordnen also in Entstehungsreihenfolge.
 */
/** Mehr Hinweise als das passen nicht neben eine Nachricht – und helfen auch nicht. */
const MAX_CORRECTION_NOTES = 3;

const MESSAGE_ORDER = [
  { createdAt: 'asc' },
  { id: 'asc' },
] satisfies Prisma.AiMessageOrderByWithRelationInput[];
/** Unter dieser Textlänge lohnt sich keine Korrektur. */
const MIN_TEXT_LENGTH_FOR_ANALYSIS = 15;

@Injectable()
export class AiService {
  private readonly logger = new Logger(AiService.name);

  constructor(
    private readonly prisma: PrismaService,
    @Inject(AI_CLIENT) private readonly aiClient: AiClient,
    private readonly whisper: WhisperClient,
    private readonly users: UsersService,
    @Inject(aiConfig.KEY) private readonly config: ConfigType<typeof aiConfig>,
  ) {}

  // ------------------------------------------------------------ Kontingent

  /**
   * Kontingent pro Kalendermonat – dasselbe für jeden.
   *
   * Der Plan des Nutzers spielt hier keine Rolle mehr: Es gibt keine
   * Bezahlstufe, die KI steht allen offen. Die Obergrenze bleibt als
   * Missbrauchsschutz (siehe `aiConfig.monthlyLimit`), nicht als Anreiz,
   * irgendetwas zu kaufen.
   */
  async getQuota(userId: string): Promise<AiQuotaDto> {
    const { start, next } = this.currentMonthRange();
    const used = await this.prisma.aiUsage.count({
      where: { userId, createdAt: { gte: start, lt: next } },
    });

    return {
      used,
      limit: this.config.monthlyLimit,
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
          message: ERR['ai.quota'],
        },
        HttpStatus.TOO_MANY_REQUESTS,
      );
    }
  }

  private async recordUsage(
    userId: string,
    feature: AiFeature,
    usage: TokenUsage,
    model: string = this.aiClient.model,
  ): Promise<void> {
    await this.prisma.aiUsage.create({
      data: {
        userId,
        feature,
        model,
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
    if (!page) throw new NotFoundException(ERR['notfound.page']);
    if (page.notebook.userId !== userId)
      throw new ForbiddenException(ERR['forbidden.page']);

    const text = extractPlainText(page.content as unknown as NotebookPageContent);
    if (text.length < MIN_TEXT_LENGTH_FOR_ANALYSIS) {
      throw new BadRequestException(ERR['ai.text_too_short']);
    }

    const [user, profile] = await Promise.all([
      this.prisma.user.findUniqueOrThrow({
        where: { id: userId },
        select: { nativeLanguage: true },
      }),
      this.users.getActiveProfileOrThrow(userId),
    ]);

    const language = page.notebook.language ?? profile.language;

    const { parsed, usage } = await this.aiClient.parse({
      schema: correctionSchema,
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
        model: this.aiClient.model,
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

  async createConversation(
    userId: string,
    dto: CreateConversationDto,
    language: MessageLanguage,
  ): Promise<AiConversationDto> {
    const profile = await this.users.getActiveProfileOrThrow(userId);

    const conversation = await this.prisma.aiConversation.create({
      data: {
        userId,
        languageId: profile.languageId,
        mode: dto.mode ?? AiMode.CHAT,
        level: profile.level,
        // Der Titel wird gespeichert und später in der Liste angezeigt – er
        // muss deshalb in der Sprache stehen, in der die App gerade läuft.
        title: dto.title ?? dto.topic ?? t(language, 'ai.new_conversation'),
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
      orderBy: MESSAGE_ORDER,
    });
    return messages.map((message) => this.toMessageDto(message));
  }

  async deleteConversation(userId: string, conversationId: string): Promise<void> {
    await this.assertOwnConversation(userId, conversationId);
    await this.prisma.aiConversation.delete({ where: { id: conversationId } });
  }

  /**
   * Nicht-streamende Variante – einfacher für Clients ohne SSE.
   *
   * Gibt den ganzen Gesprächszug zurück, nicht nur die Antwort: Die App zeigt
   * den eigenen Beitrag damit sofort in seiner endgültigen Form an (samt
   * Korrektur und echter ID), ohne den Verlauf erneut laden zu müssen.
   */
  async sendMessage(
    userId: string,
    conversationId: string,
    dto: SendMessageDto,
  ): Promise<AiTurnDto> {
    await this.assertQuota(userId);
    const source = dto.source ?? 'VOICE';
    const { systemSuffix, history } = await this.prepareChat(
      userId,
      conversationId,
      dto.content,
      source,
    );

    const { text, usage } = await this.aiClient.completeText({
      systemPrefix: TUTOR_SYSTEM_PREFIX,
      systemSuffix,
      messages: history,
    });

    const turn = await this.persistTurn(conversationId, dto.content, source, text);
    await this.recordUsage(userId, AiFeature.CHAT, usage);
    await this.users.trackActivity(userId, { xp: 5, minutes: 1 });

    return turn;
  }

  /** Streamende Variante – der Controller reicht die Stücke als SSE weiter. */
  async *streamMessage(
    userId: string,
    conversationId: string,
    dto: SendMessageDto,
  ): AsyncGenerator<{ type: 'delta'; text: string } | { type: 'done'; turn: AiTurnDto }> {
    await this.assertQuota(userId);
    const source = dto.source ?? 'VOICE';
    const { systemSuffix, history } = await this.prepareChat(
      userId,
      conversationId,
      dto.content,
      source,
    );

    // Der Korrekturblock steht am Ende der Antwort und gehört nicht in den
    // laufenden Text. Sobald sein Marker auftaucht, hört das Weiterreichen auf;
    // bis dahin wird so viel zurückgehalten, wie ein angefangener Marker lang
    // sein kann, damit er nie halb durchrutscht.
    let streamed = '';
    let markerSeen = false;

    for await (const event of this.aiClient.streamText({
      systemPrefix: TUTOR_SYSTEM_PREFIX,
      systemSuffix,
      messages: history,
    })) {
      if (event.type === 'delta') {
        if (markerSeen) continue;
        streamed += event.text;

        const markerIndex = streamed.indexOf(CORRECTION_MARKER);
        if (markerIndex !== -1) {
          markerSeen = true;
          continue;
        }

        const safeLength = streamed.length - (CORRECTION_MARKER.length - 1);
        if (safeLength > 0) {
          const text = streamed.slice(0, safeLength);
          streamed = streamed.slice(safeLength);
          yield { type: 'delta', text };
        }
        continue;
      }

      // Kam nie ein Marker, hält `streamed` noch das zurückgehaltene Ende der
      // Antwort – ohne diesen Nachschlag fehlten dem Client die letzten Zeichen.
      if (!markerSeen && streamed) yield { type: 'delta', text: streamed };

      // Erst nach vollständiger Antwort speichern – ein Abbruch hinterlässt keinen Torso.
      const turn = await this.persistTurn(conversationId, dto.content, source, event.text);
      await this.recordUsage(userId, AiFeature.CHAT, event.usage);
      await this.users.trackActivity(userId, { xp: 5, minutes: 1 });
      yield { type: 'done', turn };
    }
  }

  /**
   * Wandelt eine Sprachaufnahme in Text um – Alternative zum Tippen im Chat.
   * Zählt wie die anderen KI-Funktionen gegen das monatliche Kontingent.
   */
  async transcribeAudio(userId: string, file?: Express.Multer.File): Promise<{ text: string }> {
    if (!file?.buffer?.length) {
      throw new BadRequestException(ERR['ai.no_audio']);
    }
    await this.assertQuota(userId);

    const text = await this.whisper.transcribe(
      file.buffer,
      file.originalname || 'recording.m4a',
      file.mimetype || 'audio/m4a',
    );

    await this.recordUsage(
      userId,
      AiFeature.VOICE_TRANSCRIPTION,
      { inputTokens: 0, outputTokens: 0, cachedTokens: 0 },
      this.whisper.model,
    );

    return { text };
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

    const { parsed, usage } = await this.aiClient.parse({
      schema: grammarSchema,
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
   * Übersetzt, was der Lernende in Lehrwerk oder Bibliothek markiert hat.
   * Bewusst mit wenig Aufwand (`effort: 'low'`): Man wartet mitten im Lesen
   * darauf, und für ein Wort im Satz braucht es kein langes Nachdenken.
   */
  async translate(userId: string, dto: TranslateDto): Promise<TranslationDto> {
    const text = dto.text.trim();
    if (!text) throw new BadRequestException(ERR['ai.text_too_short']);
    await this.assertQuota(userId);

    const [user, profile] = await Promise.all([
      this.prisma.user.findUniqueOrThrow({
        where: { id: userId },
        select: { nativeLanguage: true },
      }),
      this.users.getActiveProfileOrThrow(userId),
    ]);

    const context = dto.context?.trim();
    const userContent =
      context && context !== text ? `Markiert: ${text}

Kontext: ${context}` : `Markiert: ${text}`;
    const { parsed, usage } = await this.aiClient.parse({
      schema: translationSchema,
      systemPrefix: TUTOR_SYSTEM_PREFIX,
      systemSuffix: `${learnerContext({
        targetLanguage: profile.language.nativeName,
        nativeLanguage: user.nativeLanguage,
        level: profile.level as CefrLevel,
      })}

${TRANSLATION_INSTRUCTIONS}`,
      userContent,
      maxTokens: 400,
      effort: 'low',
    });

    await this.recordUsage(userId, AiFeature.TRANSLATION, usage);
    return { text, ...parsed };
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

    const [stats, weakCards, decks, contents, videos, lastAnalysis] = await Promise.all([
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
      this.prisma.videoItem.findMany({
        where: { languageId: profile.languageId, level: profile.level },
        select: { id: true, title: true, topic: true, level: true },
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
        MEDIA: videos,
      },
    };

    const { parsed, usage } = await this.aiClient.parse({
      schema: recommendationSchema,
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

  // ---------------------------------------------- Vokabelstapel generieren (Premium)

  /**
   * Legt einen eigenes Deck mit `VOCAB_DECK_GENERATION_COUNT` KI-generierten
   * Vokabeln zu einem frei gewählten Thema an. Das Deck gehört danach dem
   * Nutzer (wie ein manuell angelegtes Deck über `VocabularyService.createDeck`)
   * und bleibt ihm erhalten – es zählt nicht als Systemdeck.
   */
  async generateVocabDeck(userId: string, dto: GenerateVocabDeckDto): Promise<VocabDeckDto> {
    await this.assertQuota(userId);

    const [user, profile] = await Promise.all([
      this.prisma.user.findUniqueOrThrow({
        where: { id: userId },
        select: { nativeLanguage: true },
      }),
      this.users.getActiveProfileOrThrow(userId),
    ]);

    const topic = dto.topic.trim();

    const { parsed, usage } = await this.aiClient.parse({
      schema: vocabDeckGenerationSchema,
      systemPrefix: TUTOR_SYSTEM_PREFIX,
      systemSuffix: `${learnerContext({
        targetLanguage: profile.language.nativeName,
        nativeLanguage: user.nativeLanguage,
        level: profile.level as CefrLevel,
      })}\n\n${vocabDeckInstructions(topic, VOCAB_DECK_GENERATION_COUNT)}`,
      userContent: topic,
      effort: 'medium',
    });

    const deck = await this.prisma.vocabDeck.create({
      data: {
        languageId: profile.languageId,
        level: profile.level,
        title: topic,
        description: `KI-generiert · ${VOCAB_DECK_GENERATION_COUNT} Vokabeln zum Thema „${topic}“`,
        iconEmoji: '✨',
        isSystem: false,
        ownerId: userId,
        items: {
          create: parsed.items.map((item, index) => ({
            term: item.term,
            translation: item.translation,
            // Unter dem Sprachcode abgelegt, damit die Übersetzung auch nach
            // einem Wechsel der Muttersprache zugeordnet bleibt.
            translations: { [user.nativeLanguage]: item.translation },
            phonetic: item.phonetic,
            partOfSpeech: item.partOfSpeech,
            exampleSentence: item.exampleSentence,
            exampleTranslation: item.exampleTranslation,
            tags: [],
            sortOrder: index,
          })),
        },
      },
      include: { language: true, _count: { select: { items: true } } },
    });

    await this.recordUsage(userId, AiFeature.VOCAB_GENERATION, usage);
    await this.users.trackActivity(userId, { xp: 10 });

    return {
      id: deck.id,
      title: deck.title,
      description: deck.description,
      iconEmoji: deck.iconEmoji,
      level: deck.level,
      language: toLanguageDto(deck.language),
      itemCount: deck._count.items,
      isSystem: false,
    };
  }

  // ---------------------------------------------------------------- Helfer

  private async prepareChat(
    userId: string,
    conversationId: string,
    userMessage: string,
    source: MessageSource,
  ) {
    const conversation = await this.assertOwnConversation(userId, conversationId);

    const user = await this.prisma.user.findUniqueOrThrow({
      where: { id: userId },
      select: { nativeLanguage: true },
    });

    const previous = await this.prisma.aiMessage.findMany({
      where: { conversationId },
      orderBy: [{ createdAt: 'desc' }, { id: 'desc' }],
      take: CHAT_HISTORY_LIMIT,
    });

    const history: Anthropic.MessageParam[] = previous.reverse().map((message) => ({
      role: message.role === 'assistant' ? ('assistant' as const) : ('user' as const),
      content: message.content,
    }));
    history.push({ role: 'user', content: userMessage });

    const mode = conversation.mode === AiMode.DISCUSSION ? 'DISCUSSION' : 'CHAT';
    const systemSuffix = `${learnerContext({
      targetLanguage: conversation.language.nativeName,
      nativeLanguage: user.nativeLanguage,
      level: conversation.level as CefrLevel,
    })}\n\n${chatInstructions(mode, source, conversation.topic ?? undefined)}`;

    return { systemSuffix, history };
  }

  /**
   * Speichert Frage und Antwort eines Zuges und loest die Korrektur aus dem
   * Antworttext: Sie gehoert an den Beitrag des Lernenden, nicht an die Antwort
   * der KI – dort stuende sie im vorgelesenen Text und im Gespraechsverlauf.
   *
   * Die Zeitstempel werden ausdruecklich gesetzt und liegen eine Millisekunde
   * auseinander. Beide Zeilen entstehen in derselben Transaktion, und
   * `DEFAULT CURRENT_TIMESTAMP` ist in Postgres die *Transaktionszeit* – beide
   * bekaemen exakt denselben Wert, und die Reihenfolge des Verlaufs waere
   * Zufall statt Gespraech.
   */
  private async persistTurn(
    conversationId: string,
    userMessage: string,
    source: MessageSource,
    assistantResponse: string,
  ): Promise<AiTurnDto> {
    const { reply, correction } = splitCorrection(assistantResponse);
    const askedAt = new Date();
    const answeredAt = new Date(askedAt.getTime() + 1);

    const [question, answer] = await this.prisma.$transaction([
      this.prisma.aiMessage.create({
        data: {
          conversationId,
          role: 'user',
          content: userMessage,
          source,
          correctedText: correction?.text ?? null,
          correctionNotes: correction?.notes ?? [],
          createdAt: askedAt,
        },
      }),
      this.prisma.aiMessage.create({
        data: { conversationId, role: 'assistant', content: reply, createdAt: answeredAt },
      }),
      this.prisma.aiConversation.update({
        where: { id: conversationId },
        data: { updatedAt: answeredAt },
      }),
    ]);

    return { userMessage: this.toMessageDto(question), reply: this.toMessageDto(answer) };
  }

  private toMessageDto(message: {
    id: string;
    role: string;
    content: string;
    source: string | null;
    correctedText: string | null;
    correctionNotes: string[];
    createdAt: Date;
  }): AiMessageDto {
    return {
      id: message.id,
      role: message.role === 'assistant' ? 'assistant' : 'user',
      content: message.content,
      source: (message.source as AiMessageDto['source']) ?? null,
      correction: message.correctedText
        ? { text: message.correctedText, notes: message.correctionNotes }
        : null,
      createdAt: message.createdAt.toISOString(),
    };
  }

  private async assertOwnConversation(userId: string, conversationId: string) {
    const conversation = await this.prisma.aiConversation.findUnique({
      where: { id: conversationId },
      include: { language: true },
    });
    if (!conversation) throw new NotFoundException(ERR['notfound.conversation']);
    if (conversation.userId !== userId)
      throw new ForbiddenException(ERR['forbidden.conversation']);
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

/**
 * Trennt den Korrekturblock vom vorgelesenen Antworttext.
 *
 * Erwartet wird das Format aus `prompts.ts`: die Antwort, dann eine Zeile
 * `[KORREKTUR] …` mit dem korrigierten Beitrag und bis zu drei Zeilen
 * `[HINWEIS] …`. Fehlt der Block, gab es nichts zu verbessern. Das Parsen ist
 * bewusst nachsichtig – hält sich das Modell einmal nicht an die Form, geht
 * höchstens die Korrektur verloren, nie die Antwort.
 */
export function splitCorrection(response: string): {
  reply: string;
  correction: { text: string; notes: string[] } | null;
} {
  const markerIndex = response.indexOf(CORRECTION_MARKER);
  if (markerIndex === -1) return { reply: response.trim(), correction: null };

  const reply = response.slice(0, markerIndex).trim();
  const block = response.slice(markerIndex + CORRECTION_MARKER.length);
  const [firstLine, ...rest] = block.split(/\r?\n/);

  const text = firstLine.trim();
  if (!text) return { reply, correction: null };

  const notes = rest
    .map((line) => line.trim())
    .filter((line) => line.startsWith(CORRECTION_NOTE_MARKER))
    .map((line) => line.slice(CORRECTION_NOTE_MARKER.length).trim())
    .filter(Boolean)
    .slice(0, MAX_CORRECTION_NOTES);

  return { reply, correction: { text, notes } };
}
