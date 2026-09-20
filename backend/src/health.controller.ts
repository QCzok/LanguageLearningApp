import { Controller, Get, Inject } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Public } from './common/decorators/public.decorator';
import { PrismaService } from './prisma/prisma.service';
import { AI_CLIENT, type AiClient } from './modules/ai/ai-client.interface';

@ApiTags('health')
@Controller('health')
export class HealthController {
  constructor(
    private readonly prisma: PrismaService,
    @Inject(AI_CLIENT) private readonly ai: AiClient,
  ) {}

  @Public()
  @Get()
  @ApiOperation({ summary: 'Liveness-, Datenbank- und KI-Check' })
  async check() {
    let database = 'up';
    try {
      await this.prisma.$queryRaw`SELECT 1`;
    } catch {
      database = 'down';
    }

    /*
      Auch der Zustand der KI gehört hierher.

      Der Server startet ohne `ANTHROPIC_API_KEY` bereitwillig durch und meldet
      „ok“ – die KI antwortet dann aber auf jede Anfrage mit 503. Von aussen
      war das nicht zu sehen: Die App zeigte eine Störung, der Health-Check
      zeigte Gesundheit, und wo der Fehler saß, ließ sich nur durch Lesen der
      Serverprotokolle herausfinden. `ai` nennt es jetzt direkt.

      Bewusst nur ja/nein zum hinterlegten Schlüssel, nie der Schlüssel selbst
      oder ein Teil davon – der Endpunkt ist öffentlich.
    */
    const ai = this.ai.isConfigured ? 'configured' : 'not_configured';

    return {
      status: database === 'up' ? 'ok' : 'degraded',
      database,
      ai,
      timestamp: new Date().toISOString(),
    };
  }
}
