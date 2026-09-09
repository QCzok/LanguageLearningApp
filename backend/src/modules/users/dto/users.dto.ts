import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CefrLevel, LevelSource } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  IsUrl,
  Length,
  Max,
  Min,
} from 'class-validator';

export class UpdateProfileDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Length(2, 40)
  displayName?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUrl({}, { message: 'avatarUrl muss eine gültige URL sein' })
  avatarUrl?: string;

  @ApiPropertyOptional({ example: 'de' })
  @IsOptional()
  @IsString()
  @Length(2, 5)
  nativeLanguage?: string;
}

export class UpsertLearningProfileDto {
  @ApiProperty()
  @IsString()
  languageId!: string;

  @ApiProperty({ enum: CefrLevel })
  @IsEnum(CefrLevel)
  level!: CefrLevel;

  @ApiPropertyOptional({ enum: LevelSource, default: LevelSource.SELF_SELECTED })
  @IsOptional()
  @IsEnum(LevelSource)
  levelSource?: LevelSource;

  @ApiPropertyOptional({ default: 15, minimum: 5, maximum: 240 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(5)
  @Max(240)
  dailyGoalMinutes?: number;

  @ApiPropertyOptional({ default: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
