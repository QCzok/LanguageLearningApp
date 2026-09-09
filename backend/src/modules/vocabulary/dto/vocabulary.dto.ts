import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CefrLevel, VocabMode } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';

export class ListDecksQueryDto {
  @ApiPropertyOptional({ description: 'Standard: Sprache des aktiven Lernprofils' })
  @IsOptional()
  @IsString()
  languageId?: string;

  @ApiPropertyOptional({ enum: CefrLevel })
  @IsOptional()
  @IsEnum(CefrLevel)
  level?: CefrLevel;
}

export class ReviewQueueQueryDto {
  @ApiPropertyOptional({ description: 'Nur Karten dieses Decks' })
  @IsOptional()
  @IsString()
  deckId?: string;

  @ApiPropertyOptional({ enum: CefrLevel })
  @IsOptional()
  @IsEnum(CefrLevel)
  level?: CefrLevel;

  @ApiPropertyOptional({ enum: VocabMode, description: 'Erzwingt einen Lernmodus' })
  @IsOptional()
  @IsEnum(VocabMode)
  mode?: VocabMode;

  @ApiPropertyOptional({ default: 20, minimum: 1, maximum: 100 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  limit?: number;

  @ApiPropertyOptional({ default: 10, minimum: 0, maximum: 50 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  @Max(50)
  newLimit?: number;

  @ApiPropertyOptional({
    minimum: 0,
    maximum: 100,
    description:
      'Wie viele fällige Karten geladen werden (Standard: `limit`). 0 blendet den Wiederholen-Stapel aus – für eine Sitzung mit ausschließlich neuen Vokabeln.',
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  @Max(100)
  dueLimit?: number;
}

export class SubmitReviewDto {
  @ApiProperty()
  @IsString()
  cardId!: string;

  @ApiProperty({ minimum: 0, maximum: 5, description: 'SM-2 Note: <3 = nicht gewusst' })
  @Type(() => Number)
  @IsInt()
  @Min(0)
  @Max(5)
  grade!: number;

  @ApiProperty({ enum: VocabMode })
  @IsEnum(VocabMode)
  mode!: VocabMode;

  @ApiPropertyOptional({ description: 'Antwortzeit in Millisekunden' })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  durationMs?: number;
}

export class CreateDeckDto {
  @ApiProperty()
  @IsString()
  languageId!: string;

  @ApiProperty({ enum: CefrLevel })
  @IsEnum(CefrLevel)
  level!: CefrLevel;

  @ApiProperty()
  @IsString()
  @Length(1, 80)
  title!: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Length(0, 300)
  description?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Length(1, 4)
  iconEmoji?: string;
}

export class CreateVocabItemDto {
  @ApiProperty()
  @IsString()
  @Length(1, 120)
  term!: string;

  @ApiProperty()
  @IsString()
  @Length(1, 200)
  translation!: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  phonetic?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  partOfSpeech?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Length(0, 400)
  exampleSentence?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Length(0, 400)
  exampleTranslation?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  audioUrl?: string;

  @ApiPropertyOptional({ type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];
}
