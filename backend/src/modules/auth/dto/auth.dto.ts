import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEmail, IsOptional, IsString, Length, Matches, MaxLength, MinLength } from 'class-validator';

export class RegisterDto {
  @ApiProperty({ example: 'lernende@example.com' })
  @IsEmail({}, { message: 'Bitte eine gültige E-Mail-Adresse angeben' })
  @Transform(({ value }) => String(value).trim().toLowerCase())
  email!: string;

  @ApiProperty({ minLength: 8, example: 'MeinPasswort123' })
  @IsString()
  @MinLength(8, { message: 'Das Passwort muss mindestens 8 Zeichen haben' })
  @MaxLength(128)
  @Matches(/[A-Za-z]/, { message: 'Das Passwort muss mindestens einen Buchstaben enthalten' })
  @Matches(/\d/, { message: 'Das Passwort muss mindestens eine Ziffer enthalten' })
  password!: string;

  @ApiProperty({ example: 'Alex' })
  @IsString()
  @Length(2, 40, { message: 'Der Name muss zwischen 2 und 40 Zeichen lang sein' })
  @Transform(({ value }) => String(value).trim())
  displayName!: string;

  @ApiPropertyOptional({ example: 'de', description: 'Muttersprache (ISO-639-1)' })
  @IsOptional()
  @IsString()
  @Length(2, 5)
  nativeLanguage?: string;
}

export class LoginDto {
  @ApiProperty()
  @IsEmail()
  @Transform(({ value }) => String(value).trim().toLowerCase())
  email!: string;

  @ApiProperty()
  @IsString()
  @MinLength(1)
  password!: string;
}

export class RefreshDto {
  @ApiProperty()
  @IsString()
  @MinLength(10)
  refreshToken!: string;
}

export class ChangePasswordDto {
  @ApiProperty()
  @IsString()
  currentPassword!: string;

  @ApiProperty({ minLength: 8 })
  @IsString()
  @MinLength(8)
  @MaxLength(128)
  newPassword!: string;
}
