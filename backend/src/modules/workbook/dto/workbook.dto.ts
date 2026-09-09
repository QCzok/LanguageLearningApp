import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CefrLevel } from '@prisma/client';
import { Transform } from 'class-transformer';
import { ArrayMaxSize, IsArray, IsBoolean, IsEnum, IsObject, IsOptional, IsString } from 'class-validator';
import type { NotebookPageContent, UnitAnswers } from '@lingua/shared';

export class ListChaptersQueryDto {
  @ApiPropertyOptional({ description: 'Standard: Sprache des aktiven Lernprofils' })
  @IsOptional()
  @IsString()
  languageId?: string;

  @ApiPropertyOptional({ enum: CefrLevel })
  @IsOptional()
  @IsEnum(CefrLevel)
  level?: CefrLevel;

  @ApiPropertyOptional({ description: 'Auch unveroeffentlichte Kapitel anzeigen' })
  @IsOptional()
  @Transform(({ value }) => value === true || value === 'true')
  @IsBoolean()
  includeUnpublished?: boolean;
}

export class SaveAnswersDto {
  @ApiProperty({ description: 'Antworten je Block-ID (UnitAnswers)' })
  @IsObject()
  answers!: UnitAnswers;
}

export class SaveAnnotationsDto {
  @ApiProperty({ description: 'Freihand-Notizebene (NotebookPageContent)' })
  @IsObject()
  annotations!: NotebookPageContent;
}

export class CheckUnitDto {
  @ApiProperty({ description: 'Antworten je Block-ID' })
  @IsObject()
  answers!: UnitAnswers;

  @ApiPropertyOptional({
    type: [String],
    description: 'Nur diese Bloecke pruefen. Ohne Angabe gilt es als Abgabe der ganzen Einheit.',
  })
  @IsOptional()
  @IsArray()
  @ArrayMaxSize(100)
  @IsString({ each: true })
  blockIds?: string[];
}
