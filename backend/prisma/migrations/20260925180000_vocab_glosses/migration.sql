-- Übersetzungen für Wortlisten aus Lehrwerk und Lektionen in Muttersprachen,
-- die der Inhalt selbst nicht mitbringt – einmal per KI erzeugt, für alle.
CREATE TABLE "vocab_glosses" (
    "id" TEXT NOT NULL,
    "termLanguage" TEXT NOT NULL,
    "term" TEXT NOT NULL,
    "sense" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "translation" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "vocab_glosses_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "vocab_glosses_termLanguage_term_sense_language_key" ON "vocab_glosses"("termLanguage", "term", "sense", "language");
