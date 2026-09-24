import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { WorkbookController } from './workbook.controller';
import { StudyService } from './study.service';
import { WorkbookService } from './workbook.service';

@Module({
  imports: [UsersModule],
  controllers: [WorkbookController],
  providers: [WorkbookService, StudyService],
  exports: [WorkbookService],
})
export class WorkbookModule {}
