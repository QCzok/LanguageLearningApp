import { z } from 'zod';

/**
 * Fail-fast beim Start: fehlt eine Pflichtvariable, startet der Server gar nicht erst.
 * Produktionsspezifische Regeln verhindern, dass Default-Secrets live gehen.
 */
const schema = z
  .object({
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
    PORT: z.coerce.number().int().positive().default(3000),
    DATABASE_URL: z.string().url({ message: 'DATABASE_URL muss eine gültige URL sein' }),
    API_PREFIX: z.string().default('api/v1'),
    CORS_ORIGINS: z.string().default(''),
    JWT_ACCESS_SECRET: z.string().min(16, 'JWT_ACCESS_SECRET ist zu kurz'),
    JWT_REFRESH_SECRET: z.string().min(16, 'JWT_REFRESH_SECRET ist zu kurz'),
    JWT_ACCESS_TTL: z.string().default('15m'),
    JWT_REFRESH_TTL: z.string().default('30d'),
    ANTHROPIC_API_KEY: z.string().optional().default(''),
    AI_MODEL: z.string().default('claude-opus-5'),
    AI_FREE_MONTHLY_LIMIT: z.coerce.number().int().nonnegative().default(5),
    AI_PREMIUM_MONTHLY_LIMIT: z.coerce.number().int().nonnegative().default(1000),
    MEDIA_BASE_URL: z.string().default('http://localhost:3000/static'),
  })
  .superRefine((env, ctx) => {
    if (env.NODE_ENV !== 'production') return;

    for (const key of ['JWT_ACCESS_SECRET', 'JWT_REFRESH_SECRET'] as const) {
      if (env[key].startsWith('change-me')) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: [key],
          message: `${key} darf in Produktion nicht der Beispielwert sein`,
        });
      }
    }
    if (env.JWT_ACCESS_SECRET === env.JWT_REFRESH_SECRET) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['JWT_REFRESH_SECRET'],
        message: 'Access- und Refresh-Secret müssen unterschiedlich sein',
      });
    }
  });

export type Env = z.infer<typeof schema>;

export function validateEnv(raw: Record<string, unknown>): Env {
  const result = schema.safeParse(raw);
  if (!result.success) {
    const details = result.error.issues
      .map((issue) => `  - ${issue.path.join('.')}: ${issue.message}`)
      .join('\n');
    throw new Error(`Ungültige Umgebungskonfiguration:\n${details}`);
  }
  return result.data;
}
