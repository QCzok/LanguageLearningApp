import { Module } from '@nestjs/common';
import { AiModule } from '../ai/ai.module';
import { UsersModule } from '../users/users.module';
import { VocabularyController } from './vocabulary.controller';
import { VocabularyService } from './vocabulary.service';

@Module({
  imports: [UsersModule, AiModule],
  controllers: [VocabularyController],
  providers: [VocabularyService],
  exports: [VocabularyService],
})
export class VocabularyModule {}
