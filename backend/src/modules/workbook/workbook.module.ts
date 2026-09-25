import { Module } from '@nestjs/common';
import { AiModule } from '../ai/ai.module';
import { UsersModule } from '../users/users.module';
import { WorkbookController } from './workbook.controller';
import { StudyService } from './study.service';
import { WorkbookService } from './workbook.service';

@Module({
  imports: [UsersModule, AiModule],
  controllers: [WorkbookController],
  providers: [WorkbookService, StudyService],
  exports: [WorkbookService],
})
export class WorkbookModule {}
