import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CefrLevel, VocabMode } from '@prisma/client';
import { Transform, Type } from 'class-transformer';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsBoolean,
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

  @ApiPropertyOptional({
    enum: CefrLevel,
    description:
      'Nur für Fremdsprachen relevant (siehe `languageId`) – für die aktive Sprache gilt für Systemdecks stets deren Profil-Niveau.',
  })
  @IsOptional()
  @IsEnum(CefrLevel)
  level?: CefrLevel;
}

/** Query-Listen kommen als `a,b` oder als wiederholter Parameter – beides wird zum Array. */
const toList = ({ value }: { value: unknown }) =>
  (Array.isArray(value) ? value : String(value).split(','))
    .map((entry) => String(entry).trim())
    .filter(Boolean);

export class ReviewQueueQueryDto {
  @ApiPropertyOptional({
    type: [String],
    description:
      'Nur Vokabeln dieser Kategorien. Ohne: zufällig aus allen Kategorien des Profil-Niveaus plus den eigenen.',
  })
  @IsOptional()
  @Transform(toList)
  @IsArray()
  @ArrayMaxSize(100)
  @IsString({ each: true })
  deckIds?: string[];

  @ApiPropertyOptional({
    enum: VocabMode,
    isArray: true,
    description:
      'Die Übungsarten der Sitzung. Eine: jede Karte in diesem Modus. Mehrere (Mix): die Karten werden fest darauf verteilt. Ohne: Auswahl, Übersetzen, Paare, Aussprechen, Satz ordnen und Wort bauen.',
  })
  @IsOptional()
  @Transform(toList)
  @IsArray()
  @ArrayMinSize(1)
  @IsEnum(VocabMode, { each: true })
  modes?: VocabMode[];

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
