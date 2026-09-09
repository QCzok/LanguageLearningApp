import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import type { AuthenticatedUser } from '../../common/decorators/current-user.decorator';
import { ListLibraryQueryDto, SubmitExercisesDto, UpdateReadingProgressDto } from './dto/library.dto';
import { LibraryService } from './library.service';

@ApiTags('library')
@Controller('library')
export class LibraryController {
  constructor(private readonly library: LibraryService) {}

  @Get()
  @ApiOperation({ summary: 'Artikel und Kurzgeschichten, gefiltert nach Sprache und Niveau' })
  list(@CurrentUser('id') userId: string, @Query() query: ListLibraryQueryDto) {
    return this.library.list(userId, query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Inhalt mit Text und Übungen (ohne Lösungen)' })
  detail(@CurrentUser() user: AuthenticatedUser, @Param('id') id: string) {
    return this.library.getById(user, id);
  }

  @Put(':id/progress')
  @ApiOperation({ summary: 'Lesefortschritt speichern' })
  progress(
    @CurrentUser('id') userId: string,
    @Param('id') id: string,
    @Body() dto: UpdateReadingProgressDto,
  ) {
    return this.library.updateReadingProgress(userId, id, dto);
  }

  @Post(':id/exercises/submit')
  @ApiOperation({ summary: 'Verständnisfragen abgeben und auswerten lassen' })
  submit(
    @CurrentUser('id') userId: string,
    @Param('id') id: string,
    @Body() dto: SubmitExercisesDto,
  ) {
    return this.library.submitExercises(userId, id, dto);
  }

  @Get(':id/attempts')
  @ApiOperation({ summary: 'Frühere Übungsversuche' })
  attempts(@CurrentUser('id') userId: string, @Param('id') id: string) {
    return this.library.attempts(userId, id);
  }
}
