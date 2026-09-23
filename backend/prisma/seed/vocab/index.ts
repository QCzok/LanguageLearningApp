import type { PrismaClient } from '@prisma/client';
import { VOCAB_A1 } from './a1';
import { VOCAB_A2 } from './a2';
import { VOCAB_B1 } from './b1';
import { VOCAB_B2 } from './b2';
import { VOCAB_C1 } from './c1';
import { VOCAB_C2 } from './c2';
import { parseWords, VOCAB_COLUMNS, VOCAB_LEARNABLE, type VocabColumn } from './types';

/** Alle Kategorien: sechs Niveaus × acht Kategorien × 50 Begriffe. */
export const VOCAB_CATEGORIES = [
  ...VOCAB_A1,
  ...VOCAB_A2,
  ...VOCAB_B1,
  ...VOCAB_B2,
  ...VOCAB_C1,
  ...VOCAB_C2,
];

/**
 * Legt die Systemstapel aller Lernsprachen an oder gleicht sie ab.
 *
 * Jede Kategorie wird je Lernsprache ein Stapel: Die Spalte der Lernsprache
 * ist der Begriff, alle anderen Spalten sind seine Übersetzungen. Der Stapel
 * trägt die Titel aller Sprachen – angezeigt wird der in der Muttersprache.
 *
 * Lernfortschritt bleibt erhalten: `VocabProgress` und `ReviewLog` hängen per
 * `onDelete: Cascade` an der Vokabel. Deshalb wird eine vorhandene Vokabel
 * mit gleichem Begriff in derselben Sprache wiederverwendet – auch wenn sie
 * bisher in einem anderen (alten) Stapel lag – und nur umgehängt, statt sie
 * zu löschen und neu anzulegen. Erst danach verschwinden Systemstapel, die
 * es nicht mehr gibt, samt der Vokabeln, die niemand übernommen hat.
 */
export async function seedVocabulary(prisma: PrismaClient, languageIds: Record<string, string>) {
  const categories = VOCAB_CATEGORIES.map((category) => ({
    ...category,
    rows: parseWords(category.words),
  }));

  for (const lang of VOCAB_LEARNABLE) {
    const languageId = languageIds[lang];
    if (!languageId) continue;

    // Alle bestehenden System-Vokabeln der Sprache, nach Begriff gruppiert.
    // Kommt ein Begriff mehrfach vor (z. B. in zwei Niveaus), wird jede
    // Fundstelle höchstens einmal übernommen.
    const existing = await prisma.vocabItem.findMany({
      where: { deck: { languageId, isSystem: true } },
      select: {
        id: true,
        term: true,
        deckId: true,
        translation: true,
        translations: true,
        exampleSentence: true,
        sortOrder: true,
        tags: true,
      },
    });
    type Existing = (typeof existing)[number];
    const pool = new Map<string, Existing[]>();
    for (const item of existing) {
      const list = pool.get(item.term) ?? [];
      list.push(item);
      pool.set(item.term, list);
    }

    const keptDeckIds: string[] = [];

    for (const [index, category] of categories.entries()) {
      const deck = await prisma.vocabDeck.upsert({
        where: { languageId_seedKey: { languageId, seedKey: category.key } },
        create: {
          languageId,
          seedKey: category.key,
          level: category.level,
          title: category.titles.de,
          titles: category.titles,
          iconEmoji: category.icon,
          isSystem: true,
          sortOrder: index,
        },
        update: {
          level: category.level,
          title: category.titles.de,
          titles: category.titles,
          iconEmoji: category.icon,
          description: null,
          sortOrder: index,
        },
      });
      keptDeckIds.push(deck.id);

      const creates: Array<{
        deckId: string;
        term: string;
        translation: string;
        translations: Record<string, string>;
        tags: string[];
        sortOrder: number;
      }> = [];

      for (const [itemIndex, row] of category.rows.entries()) {
        const term = row[lang];
        const translations = Object.fromEntries(
          VOCAB_COLUMNS.filter((code) => code !== lang).map((code) => [code, row[code]]),
        ) as Partial<Record<VocabColumn, string>>;
        // Fallback für Muttersprachen ohne eigene Spalte (uk, pl, tr …):
        // Englisch, für Englisch-Lernende Deutsch.
        const translation = lang === 'en' ? row.de : row.en;
        const data = {
          translation,
          translations,
          partOfSpeech: null,
          exampleSentence: null,
          exampleTranslation: null,
          tags: [category.level],
          sortOrder: itemIndex,
        };

        // Bevorzugt die Fundstelle, die schon in diesem Stapel liegt.
        const candidates = pool.get(term);
        const matchIndex = candidates?.findIndex((c) => c.deckId === deck.id) ?? -1;
        const match =
          candidates && candidates.length > 0
            ? candidates.splice(matchIndex >= 0 ? matchIndex : 0, 1)[0]
            : undefined;

        // Nur schreiben, was sich unterscheidet – ein Lauf ohne Änderung
        // kostet sonst 7 200 UPDATEs über eine womöglich entfernte Verbindung.
        const unchanged =
          match &&
          match.deckId === deck.id &&
          match.translation === data.translation &&
          match.exampleSentence === null &&
          match.sortOrder === data.sortOrder &&
          match.tags.join(',') === data.tags.join(',') &&
          sameTranslations(match.translations, data.translations);

        if (match && !unchanged) {
          await prisma.vocabItem.update({
            where: { id: match.id },
            data: { ...data, deckId: deck.id },
          });
        } else if (!match) {
          creates.push({ deckId: deck.id, term, ...data });
        }
      }

      if (creates.length > 0) await prisma.vocabItem.createMany({ data: creates });
    }

    // Nicht übernommene Vokabeln und nicht mehr vorhandene Systemstapel.
    const leftover = [...pool.values()].flat().map((item) => item.id);
    if (leftover.length > 0) await prisma.vocabItem.deleteMany({ where: { id: { in: leftover } } });
    await prisma.vocabDeck.deleteMany({
      where: { languageId, isSystem: true, id: { notIn: keptDeckIds } },
    });

    console.log(`  Vokabeln ${lang}: ${categories.length} Stapel, ${categories.length * 50} Begriffe`);
  }
}

/** JSONB sortiert Schlüssel um – verglichen wird deshalb Eintrag für Eintrag. */
function sameTranslations(stored: unknown, next: Record<string, string>): boolean {
  if (!stored || typeof stored !== 'object') return false;
  const current = stored as Record<string, unknown>;
  const keys = Object.keys(next);
  return (
    Object.keys(current).length === keys.length && keys.every((key) => current[key] === next[key])
  );
}
