import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { RequiresPremium } from '../../common/decorators/premium.decorator';
import { AiService } from '../ai/ai.service';
import {
  CreateNotebookDto,
  CreatePageDto,
  ReorderPagesDto,
  UpdateNotebookDto,
  UpdatePageDto,
} from './dto/notebook.dto';
import { NotebookService } from './notebook.service';

@ApiTags('notebook')
@Controller('notebooks')
export class NotebookController {
  constructor(
    private readonly notebooks: NotebookService,
    private readonly ai: AiService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Alle Hefte des Nutzers' })
  list(@CurrentUser('id') userId: string) {
    return this.notebooks.listNotebooks(userId);
  }

  @Post()
  @ApiOperation({ summary: 'Neues Heft anlegen (inkl. erster Seite)' })
  create(@CurrentUser('id') userId: string, @Body() dto: CreateNotebookDto) {
    return this.notebooks.createNotebook(userId, dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Heft umbenennen oder Farbe ändern' })
  update(
    @CurrentUser('id') userId: string,
    @Param('id') notebookId: string,
    @Body() dto: UpdateNotebookDto,
  ) {
    return this.notebooks.updateNotebook(userId, notebookId, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Heft mit allen Seiten löschen' })
  remove(@CurrentUser('id') userId: string, @Param('id') notebookId: string) {
    return this.notebooks.deleteNotebook(userId, notebookId);
  }

  @Get(':id/pages')
  @ApiOperation({ summary: 'Alle Seiten eines Hefts' })
  pages(@CurrentUser('id') userId: string, @Param('id') notebookId: string) {
    return this.notebooks.listPages(userId, notebookId);
  }

  @Post(':id/pages')
  @ApiOperation({ summary: 'Neue Seite anlegen' })
  createPage(
    @CurrentUser('id') userId: string,
    @Param('id') notebookId: string,
    @Body() dto: CreatePageDto,
  ) {
    return this.notebooks.createPage(userId, notebookId, dto);
  }

  @Post(':id/pages/reorder')
  @ApiOperation({ summary: 'Seitenreihenfolge ändern' })
  reorder(
    @CurrentUser('id') userId: string,
    @Param('id') notebookId: string,
    @Body() dto: ReorderPagesDto,
  ) {
    return this.notebooks.reorderPages(userId, notebookId, dto);
  }

  @Get('pages/:pageId')
  @ApiOperation({ summary: 'Einzelne Seite mit Canvas-Inhalt laden' })
  page(@CurrentUser('id') userId: string, @Param('pageId') pageId: string) {
    return this.notebooks.getPage(userId, pageId);
  }

  @Patch('pages/:pageId')
  @ApiOperation({ summary: 'Seiteninhalt speichern (Autosave)' })
  savePage(
    @CurrentUser('id') userId: string,
    @Param('pageId') pageId: string,
    @Body() dto: UpdatePageDto,
  ) {
    return this.notebooks.updatePage(userId, pageId, dto);
  }

  @Delete('pages/:pageId')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Seite löschen' })
  removePage(@CurrentUser('id') userId: string, @Param('pageId') pageId: string) {
    return this.notebooks.deletePage(userId, pageId);
  }

  // ------------------------------------------------------------- Premium

  @RequiresPremium()
  @Post('pages/:pageId/analyze')
  @ApiOperation({ summary: 'Premium: KI korrigiert den geschriebenen Text der Seite' })
  analyze(@CurrentUser('id') userId: string, @Param('pageId') pageId: string) {
    return this.ai.analyzeNotebookPage(userId, pageId);
  }

  @RequiresPremium()
  @Get('pages/:pageId/analyses')
  @ApiOperation({ summary: 'Premium: frühere Korrekturen einer Seite' })
  analyses(@CurrentUser('id') userId: string, @Param('pageId') pageId: string) {
    return this.ai.listNotebookAnalyses(userId, pageId);
  }
}
