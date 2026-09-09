import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { PageBackground } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  IsArray,
  IsEnum,
  IsInt,
  IsObject,
  IsOptional,
  IsString,
  Length,
  Matches,
  Max,
  Min,
} from 'class-validator';
import type { NotebookPageContent } from '@lingua/shared';

const HEX_COLOR = /^#[0-9A-Fa-f]{6}$/;

export class CreateNotebookDto {
  @ApiProperty()
  @IsString()
  @Length(1, 80)
  title!: string;

  @ApiPropertyOptional({ example: '#2563EB' })
  @IsOptional()
  @Matches(HEX_COLOR, { message: 'coverColor muss ein Hex-Farbwert sein (#RRGGBB)' })
  coverColor?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  languageId?: string;

  @ApiPropertyOptional({ enum: PageBackground })
  @IsOptional()
  @IsEnum(PageBackground)
  defaultBackground?: PageBackground;
}

export class UpdateNotebookDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Length(1, 80)
  title?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @Matches(HEX_COLOR)
  coverColor?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  languageId?: string;
}

export class CreatePageDto {
  @ApiPropertyOptional({ enum: PageBackground })
  @IsOptional()
  @IsEnum(PageBackground)
  background?: PageBackground;

  @ApiPropertyOptional({ default: 1000 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(100)
  @Max(5000)
  width?: number;

  @ApiPropertyOptional({ default: 1414 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(100)
  @Max(8000)
  height?: number;
}

export class UpdatePageDto {
  @ApiPropertyOptional({ description: 'Vollständiger Seiteninhalt (NotebookPageContent)' })
  @IsOptional()
  @IsObject()
  content?: NotebookPageContent;

  @ApiPropertyOptional({ enum: PageBackground })
  @IsOptional()
  @IsEnum(PageBackground)
  background?: PageBackground;

  @ApiPropertyOptional({ description: 'Data-URL oder URL der Seitenvorschau' })
  @IsOptional()
  @IsString()
  thumbnailUrl?: string;
}

export class ReorderPagesDto {
  @ApiProperty({ type: [String], description: 'Alle Seiten-IDs in der neuen Reihenfolge' })
  @IsArray()
  @ArrayMaxSize(500)
  @IsString({ each: true })
  pageIds!: string[];
}
