import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { aiConfig, appConfig, authConfig } from './config/configuration';
import { validateEnv } from './config/env.validation';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';
import { JwtAuthGuard } from './common/guards/jwt-auth.guard';
import { RolesGuard } from './common/guards/roles.guard';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';
import { HealthController } from './health.controller';
import { PrismaModule } from './prisma/prisma.module';
import { AiModule } from './modules/ai/ai.module';
import { AuthModule } from './modules/auth/auth.module';
import { LanguagesModule } from './modules/languages/languages.module';
import { LibraryModule } from './modules/library/library.module';
import { MediaModule } from './modules/media/media.module';
import { NotebookModule } from './modules/notebook/notebook.module';
import { PlacementModule } from './modules/placement/placement.module';
import { ProgressModule } from './modules/progress/progress.module';
import { SubscriptionModule } from './modules/subscription/subscription.module';
import { UsersModule } from './modules/users/users.module';
import { VocabularyModule } from './modules/vocabulary/vocabulary.module';
import { WorkbookModule } from './modules/workbook/workbook.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [appConfig, authConfig, aiConfig],
      validate: validateEnv,
    }),
    // Basisschutz gegen Brute Force; einzelne Routen verschärfen das per @Throttle.
    ThrottlerModule.forRoot([{ name: 'default', ttl: 60_000, limit: 120 }]),
    PrismaModule,

    AuthModule,
    UsersModule,
    LanguagesModule,
    PlacementModule,
    VocabularyModule,
    NotebookModule,
    WorkbookModule,
    LibraryModule,
    MediaModule,
    AiModule,
    ProgressModule,
    SubscriptionModule,
  ],
  controllers: [HealthController],
  providers: [
    // Reihenfolge zählt: erst Rate-Limit, dann Authentifizierung, dann Rollen.
    { provide: APP_GUARD, useClass: ThrottlerGuard },
    { provide: APP_GUARD, useClass: JwtAuthGuard },
    { provide: APP_GUARD, useClass: RolesGuard },
    { provide: APP_FILTER, useClass: AllExceptionsFilter },
    { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor },
  ],
})
export class AppModule {}
