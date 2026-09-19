/**
 * Füllt allein die Mediathek – ohne den übrigen Seed.
 *
 *   npm run videos:seed
 *
 * Gedacht fürs Ausrollen: Der Start auf dem Server führt nur die Migrationen
 * aus (siehe render.yaml), nicht den Seed. Die Tabelle `video_items` ist nach
 * der Migration also leer, und die Mediathek zeigt die Leermeldung. Dieses
 * Skript trägt den Katalog nach, ohne Demo-Konten anzulegen oder Bibliothek
 * und Lehrwerk anzufassen.
 *
 * Gegen eine andere Datenbank läuft es über `DATABASE_URL`:
 *
 *   DATABASE_URL="postgresql://…" npm run videos:seed
 */
import { PrismaClient } from '@prisma/client';
import { seedVideos } from '../prisma/seed/videos';

const prisma = new PrismaClient();

async function main(): Promise<void> {
  // Ohne Sprachen gibt es nichts zuzuordnen – dann fehlt der Grund-Seed.
  const languages = await prisma.language.count();
  if (languages === 0) {
    throw new Error(
      'Keine Sprachen in der Datenbank. Erst `npm run seed` laufen lassen, dann diesen Aufruf.',
    );
  }

  const written = await seedVideos(prisma);
  const total = await prisma.videoItem.count();
  console.log(`\n${written} Videos geschrieben, ${total} stehen jetzt in der Mediathek.`);
}

void main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
