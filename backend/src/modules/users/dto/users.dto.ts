import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { AVATAR_ICON_IDS } from '@lingua/shared';
import { CefrLevel, LevelSource } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsIn,
  IsInt,
  IsOptional,
  IsString,
  IsUrl,
  Length,
  Max,
  Min,
} from 'class-validator';

import { ERR } from '../../../common/i18n/messages';

export class UpdateProfileDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Length(2, 40)
  displayName?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUrl({}, { message: ERR['validation.avatar_url'] })
  avatarUrl?: string;

  @ApiPropertyOptional({ enum: AVATAR_ICON_IDS })
  @IsOptional()
  @IsIn(AVATAR_ICON_IDS, { message: ERR['validation.avatar_icon'] })
  avatarIcon?: string;

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
