import { Module } from '@nestjs/common';
import { VideosModule } from '../videos/videos.module';
import { UsersModule } from '../users/users.module';
import { ProgressController } from './progress.controller';
import { ProgressService } from './progress.service';

@Module({
  imports: [UsersModule, VideosModule],
  controllers: [ProgressController],
  providers: [ProgressService],
})
export class ProgressModule {}
