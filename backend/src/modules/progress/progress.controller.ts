import { Controller, DefaultValuePipe, Get, ParseIntPipe, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { ProgressService } from './progress.service';

@ApiTags('progress')
@Controller('progress')
export class ProgressController {
  constructor(private readonly progress: ProgressService) {}

  @Get('dashboard')
  @ApiOperation({ summary: 'Startbildschirm: Ziel, fällige Karten, Wochenverlauf, Weiterlernen' })
  dashboard(@CurrentUser('id') userId: string) {
    return this.progress.getDashboard(userId);
  }

  @Get('history')
  @ApiOperation({ summary: 'Tagesaktivität der letzten N Tage' })
  history(
    @CurrentUser('id') userId: string,
    @Query('days', new DefaultValuePipe(30), ParseIntPipe) days: number,
  ) {
    return this.progress.getActivityHistory(userId, Math.min(Math.max(days, 1), 365));
  }
}
