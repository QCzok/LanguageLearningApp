import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { PlacementController } from './placement.controller';
import { PlacementService } from './placement.service';

@Module({
  imports: [UsersModule],
  controllers: [PlacementController],
  providers: [PlacementService],
})
export class PlacementModule {}
