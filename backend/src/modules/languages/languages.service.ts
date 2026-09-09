import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import type { LanguageDto } from '@lingua/shared';

@Injectable()
export class LanguagesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<LanguageDto[]> {
    const languages = await this.prisma.language.findMany({
      where: { isActive: true },
      orderBy: [{ sortOrder: 'asc' }, { name: 'asc' }],
    });
    return languages.map(toLanguageDto);
  }

  async findByIdOrThrow(id: string): Promise<LanguageDto> {
    const language = await this.prisma.language.findUnique({ where: { id } });
    if (!language) throw new NotFoundException('Sprache nicht gefunden');
    return toLanguageDto(language);
  }
}

export function toLanguageDto(language: {
  id: string;
  code: string;
  name: string;
  nativeName: string;
  flagEmoji: string;
}): LanguageDto {
  return {
    id: language.id,
    code: language.code,
    name: language.name,
    nativeName: language.nativeName,
    flagEmoji: language.flagEmoji,
  };
}
