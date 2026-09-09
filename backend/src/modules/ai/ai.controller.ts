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
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Throttle } from '@nestjs/throttler';
import type { Response } from 'express';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { RequiresPremium } from '../../common/decorators/premium.decorator';
import { AiService } from './ai.service';
import { CreateConversationDto, GrammarQuestionDto, SendMessageDto } from './dto/ai.dto';

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

  @RequiresPremium()
  @Get('conversations')
  @ApiOperation({ summary: 'Premium: bisherige Gespräche' })
  conversations(@CurrentUser('id') userId: string) {
    return this.ai.listConversations(userId);
  }

  @RequiresPremium()
  @Post('conversations')
  @ApiOperation({ summary: 'Premium: neues Gespräch oder neue Diskussion starten' })
  createConversation(@CurrentUser('id') userId: string, @Body() dto: CreateConversationDto) {
    return this.ai.createConversation(userId, dto);
  }

  @RequiresPremium()
  @Get('conversations/:id/messages')
  @ApiOperation({ summary: 'Premium: Verlauf eines Gesprächs' })
  messages(@CurrentUser('id') userId: string, @Param('id') id: string) {
    return this.ai.getMessages(userId, id);
  }

  @RequiresPremium()
  @Delete('conversations/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Premium: Gespräch löschen' })
  deleteConversation(@CurrentUser('id') userId: string, @Param('id') id: string) {
    return this.ai.deleteConversation(userId, id);
  }

  @RequiresPremium()
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
  @RequiresPremium()
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

  // ---------------------------------------------------- Weitere Funktionen

  @RequiresPremium()
  @Throttle({ default: { limit: 15, ttl: 60_000 } })
  @Post('grammar')
  @ApiOperation({ summary: 'Premium: Grammatik, Vokabeln oder Fehler erklären lassen' })
  grammar(@CurrentUser('id') userId: string, @Body() dto: GrammarQuestionDto) {
    return this.ai.explainGrammar(userId, dto);
  }

  @RequiresPremium()
  @Throttle({ default: { limit: 10, ttl: 300_000 } })
  @Get('recommendations')
  @ApiOperation({ summary: 'Premium: personalisierte Lernempfehlungen' })
  recommendations(@CurrentUser('id') userId: string) {
    return this.ai.getRecommendations(userId);
  }
}
