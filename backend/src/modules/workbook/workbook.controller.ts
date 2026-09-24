import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseEnumPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { WorkbookBook } from '@prisma/client';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import {
  CheckUnitDto,
  ListBooksQueryDto,
  SaveAnnotationsDto,
  SaveAnswersDto,
  StudyAnswerDto,
  StudySessionQueryDto,
} from './dto/workbook.dto';
import { StudyService } from './study.service';
import { WorkbookService } from './workbook.service';

@ApiTags('workbook')
@Controller('workbook')
export class WorkbookController {
  constructor(
    private readonly workbook: WorkbookService,
    private readonly study: StudyService,
  ) {}

  // ------------------------------------------------------ Lernsitzungen

  @Get('study')
  @ApiOperation({ summary: 'Punktestand und Themenfortschritt je Buch' })
  studyOverview(@CurrentUser('id') userId: string) {
    return this.study.overview(userId);
  }

  @Get('study/:book/session')
  @ApiOperation({ summary: 'Nächste Themen eines Buchs als Kartenfolge (ohne Lösungen)' })
  studySession(
    @CurrentUser('id') userId: string,
    @Param('book', new ParseEnumPipe(WorkbookBook)) book: WorkbookBook,
    @Query() query: StudySessionQueryDto,
  ) {
    return this.study.session(userId, book, query.size);
  }

  @Post('study/answer')
  @ApiOperation({ summary: 'Eine Aufgabe der Sitzung auswerten und Punkte vergeben' })
  studyAnswer(@CurrentUser('id') userId: string, @Body() dto: StudyAnswerDto) {
    return this.study.answer(userId, dto);
  }

  // ------------------------------------------------------------ Bücher

  @Get('books')
  @ApiOperation({ summary: 'Die vier Bücher mit Stand und Einstiegsseite' })
  books(@CurrentUser('id') userId: string, @Query() query: ListBooksQueryDto) {
    return this.workbook.listBooks(userId, query.languageId);
  }

  @Get('books/:book')
  @ApiOperation({ summary: 'Inhaltsverzeichnis eines Buchs: Kapitel mit allen Seiten' })
  bookContents(
    @CurrentUser('id') userId: string,
    @Param('book', new ParseEnumPipe(WorkbookBook)) book: WorkbookBook,
    @Query() query: ListBooksQueryDto,
  ) {
    return this.workbook.getBook(userId, book, query.languageId);
  }

  @Get('chapters/:id')
  @ApiOperation({ summary: 'Kapitel mit allen Seiten' })
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
  @ApiOperation({ summary: 'Seite ohne Aufgaben als erledigt markieren' })
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
