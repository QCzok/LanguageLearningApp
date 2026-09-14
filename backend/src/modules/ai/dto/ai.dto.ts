import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { AiMode } from '@prisma/client';
import { IsEnum, IsIn, IsOptional, IsString, Length } from 'class-validator';

export class CreateConversationDto {
  @ApiPropertyOptional({ enum: AiMode, default: AiMode.CHAT })
  @IsOptional()
  @IsEnum(AiMode)
  mode?: AiMode;

  @ApiPropertyOptional({ example: 'Reisen und Urlaub' })
  @IsOptional()
  @IsString()
  @Length(1, 120)
  topic?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Length(1, 120)
  title?: string;
}

export class SendMessageDto {
  @ApiProperty({ maxLength: 4000 })
  @IsString()
  @Length(1, 4000)
  content!: string;

  /**
   * Gesprochen oder getippt. Entscheidet über die Strenge der Korrektur: In
   * einem Diktat der Spracherkennung stammen Kommas und Großschreibung nicht
   * vom Lernenden, in einem getippten Satz schon. Fehlt die Angabe, gilt der
   * vorsichtigere Fall.
   */
  @ApiPropertyOptional({ enum: ['VOICE', 'TEXT'], default: 'VOICE' })
  @IsOptional()
  @IsIn(['VOICE', 'TEXT'])
  source?: 'VOICE' | 'TEXT';
}

export class GrammarQuestionDto {
  @ApiProperty({ example: 'Wann benutze ich present perfect statt simple past?' })
  @IsString()
  @Length(3, 500)
  question!: string;
}

export class GenerateVocabDeckDto {
  @ApiProperty({ example: 'Kochen', description: 'Thema, zu dem 30 Vokabeln generiert werden' })
  @IsString()
  @Length(2, 80)
  topic!: string;
}
