import { Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { aiConfig } from '../../config/configuration';
import { UsersModule } from '../users/users.module';
import { AiController } from './ai.controller';
import { AiService } from './ai.service';
import { AnthropicClient } from './anthropic.client';
import { ClaudeCliClient } from './claude-cli.client';
import { WhisperClient } from './whisper.client';
import { AI_CLIENT } from './ai-client.interface';

@Module({
  imports: [UsersModule],
  controllers: [AiController],
  providers: [
    AiService,
    AnthropicClient,
    ClaudeCliClient,
    WhisperClient,
    {
      provide: AI_CLIENT,
      // `AI_PROVIDER=subscription` schaltet auf die claude-CLI (Claude-Abo)
      // um, sonst greift wie bisher der Anthropic-API-Key. Siehe
      // ClaudeCliClient für den Hintergrund – ausdrücklich eine
      // Entwicklungs-Übergangslösung.
      useFactory: (
        config: ConfigType<typeof aiConfig>,
        anthropicClient: AnthropicClient,
        claudeCliClient: ClaudeCliClient,
      ) => (config.provider === 'subscription' ? claudeCliClient : anthropicClient),
      inject: [aiConfig.KEY, AnthropicClient, ClaudeCliClient],
    },
  ],
  exports: [AiService],
})
export class AiModule {}
