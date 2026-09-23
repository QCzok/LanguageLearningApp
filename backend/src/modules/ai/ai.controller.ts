import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Throttle } from '@nestjs/throttler';
import type { Response } from 'express';
import { memoryStorage } from 'multer';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { RequestLanguage } from '../../common/decorators/request-language.decorator';
import type { MessageLanguage } from '../../common/i18n/messages';
import { AiService } from './ai.service';
import {
  CreateConversationDto,
  GenerateVocabDeckDto,
  GrammarQuestionDto,
  SendMessageDto,
  TranslateDto,
} from './dto/ai.dto';

@ApiTags('ai')
@Controller('ai')
export class AiController {
  constructor(private readonly ai: AiService) {}

  @Get('quota')
  @ApiOperation({ summary: 'Verbleibendes KI-Kontingent des laufenden Monats' })
  quota(@CurrentUser('id') userId: string) {
    return this.ai.getQuota(userId);
  }

  // ------------------------------------------------------------------ Chat

  @Get('conversations')
  @ApiOperation({ summary: 'Premium: bisherige Gespräche' })
  conversations(@CurrentUser('id') userId: string) {
    return this.ai.listConversations(userId);
  }

  @Post('conversations')
  @ApiOperation({ summary: 'Premium: neues Gespräch oder neue Diskussion starten' })
  createConversation(
    @CurrentUser('id') userId: string,
    @Body() dto: CreateConversationDto,
    @RequestLanguage() language: MessageLanguage,
  ) {
    return this.ai.createConversation(userId, dto, language);
  }

  @Get('conversations/:id/messages')
  @ApiOperation({ summary: 'Premium: Verlauf eines Gesprächs' })
  messages(@CurrentUser('id') userId: string, @Param('id') id: string) {
    return this.ai.getMessages(userId, id);
  }

  @Delete('conversations/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Premium: Gespräch löschen' })
  deleteConversation(@CurrentUser('id') userId: string, @Param('id') id: string) {
    return this.ai.deleteConversation(userId, id);
  }

  @Throttle({ default: { limit: 20, ttl: 60_000 } })
  @Post('conversations/:id/messages')
  @ApiOperation({ summary: 'Premium: Nachricht senden und Antwort erhalten' })
  send(
    @CurrentUser('id') userId: string,
    @Param('id') id: string,
    @Body() dto: SendMessageDto,
  ) {
    return this.ai.sendMessage(userId, id, dto);
  }

  /**
   * Streaming-Variante als Server-Sent Events. Die App zeigt die Antwort damit
   * tippend an, statt auf die komplette Nachricht zu warten.
   */
  @Throttle({ default: { limit: 20, ttl: 60_000 } })
  @Post('conversations/:id/messages/stream')
  @ApiOperation({ summary: 'Premium: Nachricht senden, Antwort als SSE-Stream' })
  async stream(
    @CurrentUser('id') userId: string,
    @Param('id') id: string,
    @Body() dto: SendMessageDto,
    @Res() res: Response,
  ): Promise<void> {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache, no-transform');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    try {
      for await (const event of this.ai.streamMessage(userId, id, dto)) {
        res.write(`data: ${JSON.stringify(event)}\n\n`);
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unbekannter Fehler';
      res.write(`event: error\ndata: ${JSON.stringify({ message })}\n\n`);
    } finally {
      res.end();
    }
  }

  /** Sprachaufnahme in Text umwandeln – Alternative zum Tippen im Chat. */
  @Throttle({ default: { limit: 15, ttl: 60_000 } })
  @Post('transcribe')
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ summary: 'Premium: Sprachaufnahme in Text umwandeln' })
  @UseInterceptors(
    FileInterceptor('audio', {
      storage: memoryStorage(),
      limits: { fileSize: 15 * 1024 * 1024 },
    }),
  )
  transcribe(@CurrentUser('id') userId: string, @UploadedFile() file: Express.Multer.File) {
    return this.ai.transcribeAudio(userId, file);
  }

  // ---------------------------------------------------- Weitere Funktionen

  @Throttle({ default: { limit: 15, ttl: 60_000 } })
  @Post('grammar')
  @ApiOperation({ summary: 'Premium: Grammatik, Vokabeln oder Fehler erklären lassen' })
  grammar(@CurrentUser('id') userId: string, @Body() dto: GrammarQuestionDto) {
    return this.ai.explainGrammar(userId, dto);
  }

  /** Markiertes Wort oder markierte Wendung aus Lehrwerk und Bibliothek übersetzen. */
  @Throttle({ default: { limit: 30, ttl: 60_000 } })
  @Post('translate')
  @ApiOperation({ summary: 'Wort oder Wendung im Zusammenhang übersetzen' })
  translate(@CurrentUser('id') userId: string, @Body() dto: TranslateDto) {
    return this.ai.translate(userId, dto);
  }

  @Throttle({ default: { limit: 10, ttl: 300_000 } })
  @Get('recommendations')
  @ApiOperation({ summary: 'Premium: personalisierte Lernempfehlungen' })
  recommendations(@CurrentUser('id') userId: string) {
    return this.ai.getRecommendations(userId);
  }

  @Throttle({ default: { limit: 5, ttl: 300_000 } })
  @Post('vocab-decks')
  @ApiOperation({ summary: 'Premium: eigenes Vokabeldeck mit 30 Vokabeln zu einem Thema generieren' })
  generateVocabDeck(@CurrentUser('id') userId: string, @Body() dto: GenerateVocabDeckDto) {
    return this.ai.generateVocabDeck(userId, dto);
  }
}
