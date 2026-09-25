import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { AiController } from './ai.controller';
import { AiService } from './ai.service';
import { ClaudeCliClient } from './claude-cli.client';
import { VocabGlossService } from './vocab-gloss.service';
import { WhisperClient } from './whisper.client';
import { AI_CLIENT } from './ai-client.interface';

@Module({
  imports: [UsersModule],
  controllers: [AiController],
  providers: [
    AiService,
    ClaudeCliClient,
    WhisperClient,
    VocabGlossService,
    // Die KI läuft über die `claude`-CLI und damit über das angemeldete
    // Claude-Abo (Claude Code Pro) – kein API-Key nötig. Siehe ClaudeCliClient.
    { provide: AI_CLIENT, useExisting: ClaudeCliClient },
  ],
  // `AI_CLIENT` nach aussen, damit der Health-Check melden kann, ob die KI
  // überhaupt eingerichtet ist (siehe `HealthController`).
  exports: [AiService, VocabGlossService, AI_CLIENT],
})
export class AiModule {}
