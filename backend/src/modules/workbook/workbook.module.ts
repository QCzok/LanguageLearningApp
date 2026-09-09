import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { WorkbookController } from './workbook.controller';
import { WorkbookService } from './workbook.service';

@Module({
  imports: [UsersModule],
  controllers: [WorkbookController],
  providers: [WorkbookService],
  exports: [WorkbookService],
})
export class WorkbookModule {}
