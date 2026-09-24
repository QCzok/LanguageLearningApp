import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ArrayMaxSize, IsArray, IsIn, IsObject, IsOptional, IsString } from 'class-validator';
import { CEFR_LEVELS } from '@lingua/shared';
import type { BlockAnswer, CefrLevel, NotebookPageContent, UnitAnswers } from '@lingua/shared';

export class ListBooksQueryDto {
  @ApiPropertyOptional({ description: 'Standard: Sprache des aktiven Lernprofils' })
  @IsOptional()
  @IsString()
  languageId?: string;
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

export class StudyOverviewQueryDto {
  @ApiPropertyOptional({
    enum: CEFR_LEVELS,
    description: 'Standard: Niveau des aktiven Lernprofils',
  })
  @IsOptional()
  @IsIn(CEFR_LEVELS)
  level?: CefrLevel;
}

export class StudyAnswerDto {
  @ApiProperty()
  @IsString()
  blockId!: string;

  @ApiProperty({ description: 'BlockAnswer' })
  @IsObject()
  answer!: BlockAnswer;
}
