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
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import {
  CreateDeckDto,
  CreateVocabItemDto,
  ListDecksQueryDto,
  ReviewQueueQueryDto,
  SubmitReviewDto,
  UpdateVocabItemDto,
} from './dto/vocabulary.dto';
import { VocabularyService } from './vocabulary.service';

@ApiTags('vocabulary')
@Controller('vocabulary')
export class VocabularyController {
  constructor(private readonly vocabulary: VocabularyService) {}

  @Get('decks')
  @ApiOperation({ summary: 'Decks nach Sprache und Niveau, inkl. Lernfortschritt' })
  listDecks(@CurrentUser('id') userId: string, @Query() query: ListDecksQueryDto) {
    return this.vocabulary.listDecks(userId, query);
  }

  @Get('decks/:id')
  @ApiOperation({ summary: 'Deck mit allen Vokabeln' })
  getDeck(@CurrentUser('id') userId: string, @Param('id') deckId: string) {
    return this.vocabulary.getDeck(userId, deckId);
  }

  @Post('decks')
  @ApiOperation({ summary: 'Eigenes Deck anlegen' })
  createDeck(@CurrentUser('id') userId: string, @Body() dto: CreateDeckDto) {
    return this.vocabulary.createDeck(userId, dto);
  }

  @Delete('decks/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Eigenes Deck löschen' })
  deleteDeck(@CurrentUser('id') userId: string, @Param('id') deckId: string) {
    return this.vocabulary.deleteDeck(userId, deckId);
  }

  @Post('decks/:id/items')
  @ApiOperation({ summary: 'Vokabel zu einem eigenen Deck hinzufügen' })
  addItem(
    @CurrentUser('id') userId: string,
    @Param('id') deckId: string,
    @Body() dto: CreateVocabItemDto,
  ) {
    return this.vocabulary.addItem(userId, deckId, dto);
  }

  @Patch('items/:id')
  @ApiOperation({ summary: 'Eigene Vokabel bearbeiten' })
  updateItem(
    @CurrentUser('id') userId: string,
    @Param('id') itemId: string,
    @Body() dto: UpdateVocabItemDto,
  ) {
    return this.vocabulary.updateItem(userId, itemId, dto);
  }

  @Delete('items/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Eigene Vokabel löschen' })
  deleteItem(@CurrentUser('id') userId: string, @Param('id') itemId: string) {
    return this.vocabulary.deleteItem(userId, itemId);
  }

  @Get('review/queue')
  @ApiOperation({ summary: 'Zufällige Karten aus allen oder einer Kategorie – oder nur die falsch beantworteten' })
  queue(@CurrentUser('id') userId: string, @Query() query: ReviewQueueQueryDto) {
    return this.vocabulary.getReviewQueue(userId, query);
  }

  @Post('review')
  @ApiOperation({ summary: 'Karte bewerten (SM-2 wird serverseitig berechnet)' })
  review(@CurrentUser('id') userId: string, @Body() dto: SubmitReviewDto) {
    return this.vocabulary.submitReview(userId, dto);
  }

  @Get('stats')
  @ApiOperation({ summary: 'Lernstatistik und 7-Tage-Verlauf' })
  stats(@CurrentUser('id') userId: string) {
    return this.vocabulary.getStats(userId);
  }
}
