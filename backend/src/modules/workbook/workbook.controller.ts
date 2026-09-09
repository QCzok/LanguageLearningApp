import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import {
  CheckUnitDto,
  ListChaptersQueryDto,
  SaveAnnotationsDto,
  SaveAnswersDto,
} from './dto/workbook.dto';
import { WorkbookService } from './workbook.service';

@ApiTags('workbook')
@Controller('workbook')
export class WorkbookController {
  constructor(private readonly workbook: WorkbookService) {}

  @Get('chapters')
  @ApiOperation({ summary: 'Kapitelübersicht nach Sprache und Niveau, inkl. Fortschritt' })
  chapters(@CurrentUser('id') userId: string, @Query() query: ListChaptersQueryDto) {
    return this.workbook.listChapters(userId, query);
  }

  @Get('chapters/:id')
  @ApiOperation({ summary: 'Kapitel mit allen Lerneinheiten (Kursbuch und Arbeitsbuch)' })
  chapter(@CurrentUser('id') userId: string, @Param('id') chapterId: string) {
    return this.workbook.getChapter(userId, chapterId);
  }

  @Get('units/:id')
  @ApiOperation({ summary: 'Lerneinheit mit Blöcken (ohne Lösungen) und eigenem Zwischenstand' })
  unit(@CurrentUser('id') userId: string, @Param('id') unitId: string) {
    return this.workbook.getUnit(userId, unitId);
  }

  @Put('units/:id/answers')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Antworten zwischenspeichern (Autosave, ohne Bewertung)' })
  saveAnswers(
    @CurrentUser('id') userId: string,
    @Param('id') unitId: string,
    @Body() dto: SaveAnswersDto,
  ) {
    return this.workbook.saveAnswers(userId, unitId, dto);
  }

  @Put('units/:id/annotations')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Freihand-Notizebene über den Blöcken speichern' })
  saveAnnotations(
    @CurrentUser('id') userId: string,
    @Param('id') unitId: string,
    @Body() dto: SaveAnnotationsDto,
  ) {
    return this.workbook.saveAnnotations(userId, unitId, dto);
  }

  @Post('units/:id/check')
  @ApiOperation({
    summary: 'Aufgaben auswerten – mit blockIds als Zwischenprüfung, ohne als Abgabe',
  })
  check(
    @CurrentUser('id') userId: string,
    @Param('id') unitId: string,
    @Body() dto: CheckUnitDto,
  ) {
    return this.workbook.check(userId, unitId, dto);
  }

  @Post('units/:id/complete')
  @ApiOperation({ summary: 'Kursbuchteil ohne Aufgaben als erledigt markieren' })
  complete(@CurrentUser('id') userId: string, @Param('id') unitId: string) {
    return this.workbook.markComplete(userId, unitId);
  }

  @Post('units/:id/reset')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Lerneinheit zurücksetzen und neu bearbeiten' })
  reset(@CurrentUser('id') userId: string, @Param('id') unitId: string) {
    return this.workbook.reset(userId, unitId);
  }
}
