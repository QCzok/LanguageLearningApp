import { Module } from '@nestjs/common';
import { AiModule } from '../ai/ai.module';
import { NotebookController } from './notebook.controller';
import { NotebookService } from './notebook.service';

@Module({
  imports: [AiModule],
  controllers: [NotebookController],
  providers: [NotebookService],
  exports: [NotebookService],
})
export class NotebookModule {}
