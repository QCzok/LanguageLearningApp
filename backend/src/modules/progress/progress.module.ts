import { Module } from '@nestjs/common';
import { MediaModule } from '../media/media.module';
import { UsersModule } from '../users/users.module';
import { ProgressController } from './progress.controller';
import { ProgressService } from './progress.service';

@Module({
  imports: [UsersModule, MediaModule],
  controllers: [ProgressController],
  providers: [ProgressService],
})
export class ProgressModule {}
