import { INestApplication, Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PrismaService.name);

  constructor() {
    super({
      log:
        process.env.NODE_ENV === 'development'
          ? [{ emit: 'event', level: 'query' }, 'warn', 'error']
          : ['warn', 'error'],
    });
  }

  async onModuleInit(): Promise<void> {
    await this.$connect();
    this.logger.log('Datenbankverbindung hergestellt');
  }

  async onModuleDestroy(): Promise<void> {
    await this.$disconnect();
  }

  /** Für e2e-Tests: leert alle Tabellen in korrekter Reihenfolge. */
  async truncateAll(): Promise<void> {
    if (process.env.NODE_ENV === 'production') {
      throw new Error('truncateAll ist in Produktion gesperrt');
    }
    const tables = await this.$queryRaw<Array<{ tablename: string }>>`
      SELECT tablename FROM pg_tables WHERE schemaname = 'public' AND tablename != '_prisma_migrations'
    `;
    const list = tables.map((t) => `"public"."${t.tablename}"`).join(', ');
    if (list) await this.$executeRawUnsafe(`TRUNCATE TABLE ${list} CASCADE;`);
  }

  enableShutdownHooks(app: INestApplication): void {
    process.on('beforeExit', () => {
      void app.close();
    });
  }
}
