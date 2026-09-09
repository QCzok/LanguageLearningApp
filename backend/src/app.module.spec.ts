import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';

/**
 * Baut den kompletten Modulgraphen auf und ruft die Routen über HTTP an.
 *
 * Fängt genau die Fehlerklasse, die der Compiler nicht sieht: fehlende
 * Module-Imports, nicht exportierte Provider, Zirkelbezüge, falsch verdrahtete
 * Guards. Die Datenbank wird ersetzt, damit der Test ohne Postgres läuft.
 */
describe('AppModule', () => {
  let app: INestApplication;

  beforeAll(async () => {
    process.env.DATABASE_URL ??= 'postgresql://test:test@localhost:5432/test';
    process.env.JWT_ACCESS_SECRET ??= 'test-access-secret-value';
    process.env.JWT_REFRESH_SECRET ??= 'test-refresh-secret-value';

    const moduleRef = await Test.createTestingModule({ imports: [AppModule] })
      .overrideProvider(PrismaService)
      .useValue({
        $connect: jest.fn(),
        $disconnect: jest.fn(),
        $queryRaw: jest.fn().mockResolvedValue([{ '?column?': 1 }]),
        enableShutdownHooks: jest.fn(),
        language: { findMany: jest.fn().mockResolvedValue([]) },
      })
      .compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
    await app.init();
  });

  afterAll(async () => {
    await app?.close();
  });

  it('startet und löst alle Abhängigkeiten auf', () => {
    expect(app).toBeDefined();
  });

  it('beantwortet den Health-Check ohne Anmeldung', async () => {
    const response = await request(app.getHttpServer()).get('/health').expect(200);
    expect(response.body).toMatchObject({ status: 'ok', database: 'up' });
  });

  it('gibt öffentliche Routen frei', async () => {
    await request(app.getHttpServer()).get('/languages').expect(200);
  });

  // Jede geschützte Route muss existieren (also nicht 404) und ohne Token
  // mit 401 antworten – das prüft Registrierung und globalen Guard zugleich.
  it.each([
    '/users/me',
    '/users/me/learning-profiles',
    '/placement/test',
    '/vocabulary/decks',
    '/vocabulary/review/queue',
    '/vocabulary/stats',
    '/notebooks',
    '/library',
    '/media',
    '/ai/quota',
    '/progress/dashboard',
    '/subscription/status',
  ])('schützt %s', async (path) => {
    await request(app.getHttpServer()).get(path).expect(401);
  });

  it('validiert Anfragekörper', async () => {
    const response = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ email: 'keine-email', password: '' })
      .expect(400);

    expect(response.body.message).toEqual(
      expect.arrayContaining([expect.stringContaining('email')]),
    );
  });
});
