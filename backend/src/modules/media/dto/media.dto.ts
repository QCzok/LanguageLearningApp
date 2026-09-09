import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CefrLevel, MediaType } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsBoolean, IsEnum, IsInt, IsOptional, IsString, Length, Max, Min } from 'class-validator';
import { PaginationQueryDto } from '../../../common/dto/pagination.dto';

export class ListMediaQueryDto extends PaginationQueryDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  languageId?: string;

  @ApiPropertyOptional({ enum: CefrLevel })
  @IsOptional()
  @IsEnum(CefrLevel)
  level?: CefrLevel;

  @ApiPropertyOptional({ enum: MediaType })
  @IsOptional()
  @IsEnum(MediaType)
  type?: MediaType;

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

export class UpdateMediaProgressDto {
  @ApiProperty({ description: 'Abspielposition in Sekunden' })
  @Type(() => Number)
  @IsInt()
  @Min(0)
  positionSec!: number;

  @ApiPropertyOptional({ description: 'Erzwingt den Status „gehört"' })
  @IsOptional()
  @IsBoolean()
  completed?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  @Max(600)
  minutesListened?: number;
}
