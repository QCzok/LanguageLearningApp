/**
 * Schreibt nur das Lehrwerk fort – und sonst nichts.
 *
 * Der große Seed (`seed.ts`) ist für eine frische Datenbank gedacht. Auf einer
 * laufenden tut er drei Dinge, die man für ein paar neue Kapitel nicht will:
 *
 *   - Er löscht System-Vokabelstapel, deren Titel nicht mehr im Seed steht,
 *     und Vokabeln, deren Begriff nicht mehr vorkommt. An beiden hängen per
 *     `onDelete: Cascade` der SRS-Stand (`VocabProgress`) und die
 *     Lernhistorie (`ReviewLog`) *aller* Nutzer.
 *   - Er leert die Einstufungsfragen je Sprache und legt sie neu an.
 *   - Er legt die Demo-Konten an – mit dem Passwort, das im Quelltext steht,
 *     eines davon auf PREMIUM. Auf einer öffentlich erreichbaren Datenbank ist
 *     das ein offenes Konto.
 *
 * Dieses Skript ruft ausschließlich `seedWorkbook()` auf. Das legt Kapitel
 * über (languageId, book, order) an oder aktualisiert sie, Seiten über
 * (chapterId, order) – beides per Upsert, sodass die IDs und damit der
 * Fortschritt daran erhalten bleiben. Gelöscht werden nur Seiten, die ihr
 * Kapitel nicht mehr enthält.
 *
 * Aufruf (aus dem Projektstamm, DATABASE_URL der Zieldatenbank):
 *
 *   DATABASE_URL='…' npx ts-node --transpile-only backend/prisma/seed-workbook.ts
 *
 * Vorher `npm run shared:build` und `npx prisma generate`, falls beides noch
 * nicht gelaufen ist.
 */
import { PrismaClient } from '@prisma/client';
import { seedWorkbook } from './seed/workbook';

const prisma = new PrismaClient();

/**
 * Nennt die Zieldatenbank, bevor geschrieben wird – ohne das Passwort.
 *
 * Prisma liest `backend/.env` mit ein. Eine dort stehende Entwicklungs-URL
 * überschreibt zwar keine Variable, die schon in der Umgebung steht, aber wer
 * das `DATABASE_URL='…'` vor dem Aufruf vergisst, schreibt sonst wortlos in
 * die lokale Datenbank und hält den Lauf für erledigt.
 */
function describeTarget(): string {
  const url = process.env.DATABASE_URL;
  if (!url) return 'unbekannt (DATABASE_URL nicht gesetzt)';

  try {
    const parsed = new URL(url);
    return `${parsed.host}${parsed.pathname}`;
  } catch {
    return 'unlesbar';
  }
}

async function main(): Promise<void> {
  console.log(`Ziel: ${describeTarget()}`);

  // Die Kapitel hängen an den Sprachen. Fehlen die, läuft hier eine leere
  // Datenbank vor uns und der große Seed ist der richtige Aufruf, nicht dieser.
  const languages = await prisma.language.count();
  if (languages === 0) {
    throw new Error(
      'Keine Sprachen in der Datenbank – auf einer leeren Datenbank gehört `npm run backend:seed` gelaufen, nicht dieses Skript.',
    );
  }

  await seedWorkbook(prisma);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
