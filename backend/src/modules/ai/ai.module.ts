import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { AiController } from './ai.controller';
import { AiService } from './ai.service';
import { AnthropicClient } from './anthropic.client';

@Module({
  imports: [UsersModule],
  controllers: [AiController],
  providers: [AiService, AnthropicClient],
  exports: [AiService],
})
export class AiModule {}
