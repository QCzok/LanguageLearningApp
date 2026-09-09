import { Body, Controller, Get, Param, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import type { AuthenticatedUser } from '../../common/decorators/current-user.decorator';
import { ListMediaQueryDto, UpdateMediaProgressDto } from './dto/media.dto';
import { MediaService } from './media.service';

@ApiTags('media')
@Controller('media')
export class MediaController {
  constructor(private readonly media: MediaService) {}

  @Get()
  @ApiOperation({ summary: 'Podcasts und Audioinhalte nach Sprache und Niveau' })
  list(@CurrentUser('id') userId: string, @Query() query: ListMediaQueryDto) {
    return this.media.list(userId, query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Folge mit Audio-URL und Transkript' })
  detail(@CurrentUser() user: AuthenticatedUser, @Param('id') id: string) {
    return this.media.getById(user, id);
  }

  @Put(':id/progress')
  @ApiOperation({ summary: 'Abspielposition speichern' })
  progress(
    @CurrentUser('id') userId: string,
    @Param('id') id: string,
    @Body() dto: UpdateMediaProgressDto,
  ) {
    return this.media.updateProgress(userId, id, dto);
  }
}
