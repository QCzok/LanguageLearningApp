import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { SubmitPlacementDto } from './dto/placement.dto';
import { PlacementService } from './placement.service';

@ApiTags('placement')
@Controller('placement')
export class PlacementController {
  constructor(private readonly placement: PlacementService) {}

  @Get('test')
  @ApiQuery({ name: 'languageId', required: true })
  @ApiOperation({ summary: 'Einstufungstest laden (ohne Lösungen)' })
  getTest(@Query('languageId') languageId: string) {
    return this.placement.getTest(languageId);
  }

  @Post('submit')
  @ApiOperation({ summary: 'Test auswerten und Niveau im Lernprofil setzen' })
  submit(@CurrentUser('id') userId: string, @Body() dto: SubmitPlacementDto) {
    return this.placement.submit(userId, dto);
  }

  @Get('history')
  @ApiOperation({ summary: 'Frühere Einstufungen' })
  history(@CurrentUser('id') userId: string, @Query('languageId') languageId?: string) {
    return this.placement.history(userId, languageId);
  }
}
