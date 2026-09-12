import { registerAs } from '@nestjs/config';

export const appConfig = registerAs('app', () => ({
  port: parseInt(process.env.PORT ?? '3000', 10),
  nodeEnv: process.env.NODE_ENV ?? 'development',
  apiPrefix: process.env.API_PREFIX ?? 'api/v1',
  corsOrigins: (process.env.CORS_ORIGINS ?? '')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean),
  mediaBaseUrl: process.env.MEDIA_BASE_URL ?? 'http://localhost:3000/static',
}));

/**
 * Die TTL-Werte werden als `ms`-Zeitspanne (z. B. "15m", "30d") an @nestjs/jwt
 * gereicht. Dessen Typ dafür ist nicht öffentlich exportiert, deshalb der Alias.
 */
export type JwtDuration = `${number}${'s' | 'm' | 'h' | 'd'}`;

export const authConfig = registerAs('auth', () => ({
  accessSecret: process.env.JWT_ACCESS_SECRET ?? 'change-me-access-secret',
  refreshSecret: process.env.JWT_REFRESH_SECRET ?? 'change-me-refresh-secret',
  accessTtl: (process.env.JWT_ACCESS_TTL ?? '15m') as JwtDuration,
  refreshTtl: (process.env.JWT_REFRESH_TTL ?? '30d') as JwtDuration,
}));

export const aiConfig = registerAs('ai', () => ({
  apiKey: process.env.ANTHROPIC_API_KEY ?? '',
  model: process.env.AI_MODEL ?? 'claude-opus-5',
  freeMonthlyLimit: parseInt(process.env.AI_FREE_MONTHLY_LIMIT ?? '5', 10),
  premiumMonthlyLimit: parseInt(process.env.AI_PREMIUM_MONTHLY_LIMIT ?? '1000', 10),
  /**
   * "subscription" läuft über die lokal installierte `claude`-CLI (Claude-
   * Abo) statt über einen Anthropic-API-Key – siehe ClaudeCliClient für den
   * Hintergrund. Ausdrücklich eine Entwicklungs-Übergangslösung; Standard
   * bleibt "api" für den echten API-Key-Pfad.
   */
  provider: (process.env.AI_PROVIDER ?? 'api') as 'api' | 'subscription',
  /**
   * Für die Sprachaufnahme im Chat (Alternative zum Tippen). Läuft separat
   * über die OpenAI-Whisper-API, da Anthropic keine Audio-Transkription anbietet.
   */
  transcriptionApiKey: process.env.OPENAI_API_KEY ?? '',
  transcriptionModel: process.env.OPENAI_TRANSCRIBE_MODEL ?? 'whisper-1',
}));
