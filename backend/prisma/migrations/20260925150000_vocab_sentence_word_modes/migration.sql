-- Satz ordnen und Wort bauen als eigene Lernmodi.
ALTER TYPE "VocabMode" ADD VALUE 'SENTENCE_ORDER';
ALTER TYPE "VocabMode" ADD VALUE 'WORD_BUILD';

-- Übersetzungen der (teils KI-erzeugten) Beispielsätze je Muttersprache.
ALTER TABLE "vocab_items" ADD COLUMN "exampleTranslations" JSONB NOT NULL DEFAULT '{}';
