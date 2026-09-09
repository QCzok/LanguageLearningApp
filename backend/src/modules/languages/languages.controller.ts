import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Public } from '../../common/decorators/public.decorator';
import { LanguagesService } from './languages.service';

@ApiTags('languages')
@Controller('languages')
export class LanguagesController {
  constructor(private readonly languages: LanguagesService) {}

  @Public()
  @Get()
  @ApiOperation({ summary: 'Verfügbare Lernsprachen (für das Onboarding)' })
  findAll() {
    return this.languages.findAll();
  }

  @Public()
  @Get(':id')
  @ApiOperation({ summary: 'Eine Sprache' })
  findOne(@Param('id') id: string) {
    return this.languages.findByIdOrThrow(id);
  }
}
