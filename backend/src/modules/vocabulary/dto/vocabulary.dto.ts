import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CefrLevel, VocabMode } from '@prisma/client';
import { Transform, Type } from 'class-transformer';
import { VOCAB_DIRECTIONS, type VocabDirection } from '@lingua/shared';
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsIn,
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

  @ApiPropertyOptional({
    enum: CefrLevel,
    description:
      'Nur für Fremdsprachen relevant (siehe `languageId`) – für die aktive Sprache gilt für Systemdecks stets deren Profil-Niveau.',
  })
  @IsOptional()
  @IsEnum(CefrLevel)
  level?: CefrLevel;
}

export class ReviewQueueQueryDto {
  @ApiPropertyOptional({
    description:
      'Nur Vokabeln dieser Kategorie. Ohne: zufällig aus allen Kategorien des Profil-Niveaus plus den eigenen.',
  })
  @IsOptional()
  @IsString()
  deckId?: string;

  @ApiPropertyOptional({
    enum: VocabMode,
    description: 'Erzwingt einen Lernmodus. Ohne: gemischt aus Auswahl, Paaren und Aussprechen.',
  })
  @IsOptional()
  @IsEnum(VocabMode)
  mode?: VocabMode;

  @ApiPropertyOptional({
    enum: VOCAB_DIRECTIONS,
    default: 'FORWARD',
    description:
      'FORWARD: Lernsprache → Muttersprache, REVERSE: Muttersprache → Lernsprache, MIXED: je Karte zufällig.',
  })
  @IsOptional()
  @IsIn(VOCAB_DIRECTIONS)
  direction?: VocabDirection;

  @ApiPropertyOptional({ default: 15, minimum: 1, maximum: 100 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  limit?: number;

  @ApiPropertyOptional({
    description: 'Nur Vokabeln, deren letzte Antwort falsch war – der Fehler-Stapel.',
  })
  @IsOptional()
  @Transform(({ value }) => value === true || value === 'true' || value === '1')
  @IsBoolean()
  onlyNeedsRepeat?: boolean;
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

  @ApiPropertyOptional({ description: 'Richtige Antworten in Folge vor dieser Karte (Bonus-XP)' })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  @Max(1000)
  combo?: number;
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

export class UpdateVocabItemDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Length(1, 120)
  term?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Length(1, 200)
  translation?: string;

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
}
