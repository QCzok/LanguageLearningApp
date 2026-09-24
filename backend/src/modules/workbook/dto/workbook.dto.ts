import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  IsArray,
  IsInt,
  IsObject,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';
import type { BlockAnswer, NotebookPageContent, UnitAnswers } from '@lingua/shared';

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

export class StudySessionQueryDto {
  @ApiPropertyOptional({ description: 'Anzahl Themen, Standard 3' })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(10)
  size?: number;
}

export class StudyAnswerDto {
  @ApiProperty()
  @IsString()
  unitId!: string;

  @ApiProperty()
  @IsString()
  blockId!: string;

  @ApiProperty({ description: 'BlockAnswer' })
  @IsObject()
  answer!: BlockAnswer;
}
