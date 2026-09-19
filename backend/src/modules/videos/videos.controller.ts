import { Body, Controller, Get, Param, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import type { AuthenticatedUser } from '../../common/decorators/current-user.decorator';
import { ListVideosQueryDto, UpdateVideoProgressDto } from './dto/video.dto';
import { VideosService } from './videos.service';

@ApiTags('videos')
@Controller('videos')
export class VideosController {
  constructor(private readonly videos: VideosService) {}

  @Get()
  @ApiOperation({ summary: 'Kuratierte YouTube-Videos nach Sprache, Niveau und Thema' })
  list(@CurrentUser('id') userId: string, @Query() query: ListVideosQueryDto) {
    return this.videos.list(userId, query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Ein Video mit YouTube-Kennung und Sehfortschritt' })
  detail(@CurrentUser() user: AuthenticatedUser, @Param('id') id: string) {
    return this.videos.getById(user, id);
  }

  @Put(':id/progress')
  @ApiOperation({ summary: 'Abspielposition speichern' })
  progress(
    @CurrentUser('id') userId: string,
    @Param('id') id: string,
    @Body() dto: UpdateVideoProgressDto,
  ) {
    return this.videos.updateProgress(userId, id, dto);
  }
}
