import 'reflect-metadata';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import type { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { existsSync } from 'node:fs';
import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { bufferLogs: true });
  const config = app.get(ConfigService);
  const logger = new Logger('Bootstrap');

  const port = config.get<number>('app.port', 3000);
  const apiPrefix = config.get<string>('app.apiPrefix', 'api/v1');
  const corsOrigins = config.get<string[]>('app.corsOrigins', []);
  const isProduction = config.get<string>('app.nodeEnv') === 'production';

  app.setGlobalPrefix(apiPrefix);
  app.use(helmet({ crossOriginResourcePolicy: { policy: 'cross-origin' } }));

  /*
    Medien werden aus einem Verzeichnis neben dem Server ausgeliefert.

    Bis hierher zeigten die Mediathek-Einträge auf `MEDIA_BASE_URL`
    (`/static/audio/…`), aber nichts beantwortete diesen Pfad – jeder Abruf
    endete mit 404, und im Player blieb der Abspielknopf tot. Das Verzeichnis
    liegt bewusst außerhalb des API-Präfixes: Eine Audiodatei ist kein
    API-Aufruf, sie wird später ohnehin von einem CDN geliefert (siehe
    ROADMAP), und bis dahin ist das hier die gleichwertige lokale Adresse.
  */
  const staticDir = config.get<string>('app.staticDir', '');
  if (staticDir) {
    app.useStaticAssets(staticDir, { prefix: '/static', maxAge: isProduction ? '7d' : 0 });
    if (!existsSync(staticDir)) {
      logger.warn(`Medienverzeichnis ${staticDir} existiert nicht – Audios liefern 404.`);
    }
  }

  app.enableCors({
    // In der Entwicklung sind Expo-Clients unter wechselnden Ports erreichbar.
    origin: isProduction
      ? (origin, callback) => callback(null, isAllowedOrigin(origin, corsOrigins))
      : true,
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
  if (staticDir) logger.log(`Medien: http://localhost:${port}/static  (aus ${staticDir})`);
}

void bootstrap();

/** Ein Entwicklungsrechner – gleich unter welchem Port der Dev-Server gerade läuft. */
const LOCALHOST_ORIGIN = /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/;

/**
 * Welche Herkunft im Produktivbetrieb Antworten lesen darf: die ausdrücklich
 * konfigurierten (`CORS_ORIGINS`) – und dazu jeder lokale Entwicklungsrechner.
 *
 * Der Zusatz für localhost steht hier, weil der Expo-Web-Client seinen Port
 * nicht selbst bestimmt: Ist 8081 belegt, läuft er auf 8082, manche Setups
 * öffnen ihn unter 127.0.0.1 statt localhost. Jede dieser Abweichungen endete
 * bisher in „keine Verbindung zum Server“ – der Browser verwarf die Antwort,
 * während dieselbe App auf dem Telefon lief, weil dort keine Herkunft geprüft
 * wird. Eine Liste im Dashboard ist der falsche Ort, um eine Zufälligkeit der
 * lokalen Umgebung nachzupflegen.
 *
 * Tragbar ist das, weil diese API ausschließlich Bearer-Tokens aus dem
 * `Authorization`-Kopf auswertet und keine Cookies: Eine fremde Seite auf dem
 * Rechner eines Nutzers erhielte dadurch keinen Zugang, den sie nicht ohnehin
 * hätte – an den Token in der Ablage einer anderen Herkunft kommt sie nicht.
 *
 * Anfragen ohne `Origin` – die Apps auf iOS und Android, `curl`, Health-Checks –
 * unterliegen keiner Herkunftsprüfung und bleiben erlaubt.
 */
function isAllowedOrigin(origin: string | undefined, allowed: string[]): boolean {
  if (!origin) return true;
  return allowed.includes(origin) || LOCALHOST_ORIGIN.test(origin);
}
