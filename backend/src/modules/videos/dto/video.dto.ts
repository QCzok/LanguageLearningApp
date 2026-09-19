import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CefrLevel, VideoTopic } from '@prisma/client';
import { Transform, Type } from 'class-transformer';
import { IsBoolean, IsEnum, IsInt, IsOptional, IsString, Length, Max, Min } from 'class-validator';
import { PaginationQueryDto } from '../../../common/dto/pagination.dto';

export class ListVideosQueryDto extends PaginationQueryDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  languageId?: string;

  @ApiPropertyOptional({ enum: CefrLevel })
  @IsOptional()
  @IsEnum(CefrLevel)
  level?: CefrLevel;

  @ApiPropertyOptional({ enum: VideoTopic })
  @IsOptional()
  @IsEnum(VideoTopic)
  topic?: VideoTopic;

  /*
    Nicht `@Type(() => Boolean)`: In einer Abfragezeichenfolge kommt der Wert
    als Text an, und `Boolean('false')` ist `true`. Der Filter würde also
    genau dann falsch greifen, wenn jemand ihn ausdrücklich abschaltet.
  */
  @ApiPropertyOptional({ description: 'Nur langsam gesprochene Videos' })
  @IsOptional()
  @Transform(({ value }) => value === true || value === 'true' || value === '1')
  @IsBoolean()
  slowSpeech?: boolean;

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

export class UpdateVideoProgressDto {
  @ApiProperty({ description: 'Abspielposition in Sekunden' })
  @Type(() => Number)
  @IsInt()
  @Min(0)
  positionSec!: number;

  @ApiPropertyOptional({ description: 'Erzwingt den Status „gesehen“' })
  @IsOptional()
  @IsBoolean()
  completed?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  @Max(600)
  minutesWatched?: number;
}
