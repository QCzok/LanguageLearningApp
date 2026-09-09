import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CefrLevel, LibraryType } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  IsArray,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  Length,
  Max,
  Min,
  ValidateNested,
} from 'class-validator';
import { PaginationQueryDto } from '../../../common/dto/pagination.dto';

export class ListLibraryQueryDto extends PaginationQueryDto {
  @ApiPropertyOptional({ description: 'Standard: Sprache des aktiven Lernprofils' })
  @IsOptional()
  @IsString()
  languageId?: string;

  @ApiPropertyOptional({ enum: CefrLevel })
  @IsOptional()
  @IsEnum(CefrLevel)
  level?: CefrLevel;

  @ApiPropertyOptional({ enum: LibraryType })
  @IsOptional()
  @IsEnum(LibraryType)
  type?: LibraryType;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  tag?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Length(1, 80)
  search?: string;
}

export class UpdateReadingProgressDto {
  @ApiProperty({ minimum: 0, maximum: 100 })
  @Type(() => Number)
  @IsInt()
  @Min(0)
  @Max(100)
  progressPercent!: number;

  @ApiPropertyOptional({ description: 'Lesedauer seit dem letzten Update' })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  @Max(600)
  minutesRead?: number;
}

export class ExerciseAnswerDto {
  @ApiProperty()
  @IsString()
  exerciseId!: string;

  @ApiPropertyOptional({ description: 'Bei Auswahlfragen' })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  selectedIndex?: number;

  @ApiPropertyOptional({ description: 'Bei offenen Fragen' })
  @IsOptional()
  @IsString()
  @Length(0, 2000)
  text?: string;
}

export class SubmitExercisesDto {
  @ApiProperty({ type: [ExerciseAnswerDto] })
  @IsArray()
  @ArrayMaxSize(50)
  @ValidateNested({ each: true })
  @Type(() => ExerciseAnswerDto)
  answers!: ExerciseAnswerDto[];
}
