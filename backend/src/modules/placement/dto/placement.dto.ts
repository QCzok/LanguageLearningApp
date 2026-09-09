import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ArrayMaxSize, ArrayMinSize, IsArray, IsInt, IsString, Min, ValidateNested } from 'class-validator';

export class PlacementAnswerDto {
  @ApiProperty()
  @IsString()
  questionId!: string;

  @ApiProperty({ minimum: 0 })
  @Type(() => Number)
  @IsInt()
  @Min(0)
  selectedIndex!: number;
}

export class SubmitPlacementDto {
  @ApiProperty()
  @IsString()
  languageId!: string;

  @ApiProperty({ type: [PlacementAnswerDto] })
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(100)
  @ValidateNested({ each: true })
  @Type(() => PlacementAnswerDto)
  answers!: PlacementAnswerDto[];
}
