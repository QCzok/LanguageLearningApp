import 'reflect-metadata';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  const config = app.get(ConfigService);
  const logger = new Logger('Bootstrap');

  const port = config.get<number>('app.port', 3000);
  const apiPrefix = config.get<string>('app.apiPrefix', 'api/v1');
  const corsOrigins = config.get<string[]>('app.corsOrigins', []);
  const isProduction = config.get<string>('app.nodeEnv') === 'production';

  app.setGlobalPrefix(apiPrefix);
  app.use(helmet({ crossOriginResourcePolicy: { policy: 'cross-origin' } }));

  app.enableCors({
    // In der Entwicklung sind Expo-Clients unter wechselnden Ports erreichbar.
    origin: isProduction ? corsOrigins : true,
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // unbekannte Felder werden entfernt
      forbidNonWhitelisted: false,
      transform: true, // DTOs werden zu Klasseninstanzen (Type-Konvertierung)
      transformOptions: { enableImplicitConversion: false },
    }),
  );

  if (!isProduction) {
    const swaggerConfig = new DocumentBuilder()
      .setTitle('Lingua API')
      .setDescription('Backend der Lingua-Sprachlern-App')
      .setVersion('1.0')
      .addBearerAuth()
      .build();
    SwaggerModule.setup(`${apiPrefix}/docs`, app, SwaggerModule.createDocument(app, swaggerConfig));
  }

  app.get(PrismaService).enableShutdownHooks(app);
  app.enableShutdownHooks();

  await app.listen(port, '0.0.0.0');
  logger.log(`Lingua API läuft auf http://localhost:${port}/${apiPrefix}`);
  if (!isProduction) logger.log(`Swagger: http://localhost:${port}/${apiPrefix}/docs`);
}

void bootstrap();
