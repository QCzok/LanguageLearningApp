/**
 * Frischt nur die Lesetexte der Bibliothek auf – und sonst nichts.
 *
 * Der große Seed (`seed.ts`) baut die System-Vokabelstapel bei jedem Lauf neu
 * auf und löscht dabei deren `VocabItem`s. An denen hängen per
 * `onDelete: Cascade` der SRS-Stand (`VocabProgress`) und die Lernhistorie
 * (`ReviewLog`) *aller* Nutzer. Auf einer frischen Datenbank ist das richtig;
 * auf einer laufenden wäre es stiller Datenverlust.
 *
 * Deshalb schreibt dieses Skript ausschließlich das `body`-Feld der
 * Lesetexte neu – das Feld, in dem Absätze, Glossar und Übersetzungen
 * stehen. Übungen, Vokabeln und Nutzerdaten bleiben unberührt, und ein
 * zweiter Lauf ändert nichts mehr.
 *
 * Aufruf (aus dem Projektstamm):
 *
 *   DATABASE_URL='…' npx ts-node --transpile-only backend/prisma/seed-library.ts
 */
import { Prisma, PrismaClient } from '@prisma/client';
import type { LibrarySection } from '@lingua/shared';
import {
  LIBRARY_SEEDS_DE,
  LIBRARY_SEEDS_EN,
  LIBRARY_SEEDS_ES,
  type LibraryContentSeed,
} from './seed/library';

const prisma = new PrismaClient();

/**
 * Zugeordnet wird über den Titel, genau wie im großen Seed: Die IDs der
 * Lesetexte stehen nicht im Quelltext, also ist der Titel der einzige
 * stabile Schlüssel zwischen Datei und Datenbank.
 */
async function updateLibrary(code: string, seeds: LibraryContentSeed[]): Promise<void> {
  const language = await prisma.language.findUnique({ where: { code }, select: { id: true } });

  if (!language) {
    console.warn(`${code}: Sprache nicht in der Datenbank – übersprungen`);
    return;
  }

  for (const seed of seeds) {
    const existing = await prisma.libraryContent.findFirst({
      where: { languageId: language.id, title: seed.title },
      select: { id: true },
    });

    // Ein Text, den es dort noch nicht gibt, wird hier nicht angelegt – dafür
    // ist der große Seed zuständig. Dieses Skript aktualisiert nur.
    if (!existing) {
      console.warn(`${code}: „${seed.title}" fehlt in der Datenbank – übersprungen`);
      continue;
    }

    const body: LibrarySection[] = seed.sections.map((section, index) => ({
      id: `sec-${index}`,
      text: section.text,
      translations: section.translations,
      glossary: section.glossary,
    }));

    await prisma.libraryContent.update({
      where: { id: existing.id },
      data: { body: body as unknown as Prisma.InputJsonValue },
    });

    const translated = seed.sections.filter((section) => section.translations).length;
    console.log(
      `${code}: „${seed.title}" – ${seed.sections.length} Abschnitte, davon ${translated} mit Übersetzung`,
    );
  }
}

async function main(): Promise<void> {
  await updateLibrary('de', LIBRARY_SEEDS_DE);
  await updateLibrary('en', LIBRARY_SEEDS_EN);
  await updateLibrary('es', LIBRARY_SEEDS_ES);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
