-- Vokabeltrainer unabhängig von der Muttersprache: Übersetzungen und
-- Kategorietitel je Sprache, dazu ein stabiler Seed-Schlüssel je Kategorie.
ALTER TABLE "vocab_items" ADD COLUMN "translations" JSONB NOT NULL DEFAULT '{}';

ALTER TABLE "vocab_decks" ADD COLUMN "titles" JSONB;
ALTER TABLE "vocab_decks" ADD COLUMN "seedKey" TEXT;

CREATE UNIQUE INDEX "vocab_decks_languageId_seedKey_key" ON "vocab_decks"("languageId", "seedKey");
