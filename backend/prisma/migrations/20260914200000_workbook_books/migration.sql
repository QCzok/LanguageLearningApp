-- Vier Bücher statt sechs Niveaus mal zwei Buchteilen.
--
-- Kapitel bekommen ein Buch (Beginner/Intermediate/Advanced entlang der
-- GER-Stufe, Grammatik als eigenes Buch) und laufen darin fortlaufend durch.
-- Lerneinheiten verlieren die Einteilung in Kursbuch und Arbeitsbuch: Auf
-- einer Seite stehen Erklärung und Aufgabe jetzt nebeneinander.

CREATE TYPE "WorkbookBook" AS ENUM ('BEGINNER', 'INTERMEDIATE', 'ADVANCED', 'GRAMMAR');

-- Kapitel: Buch ableiten, dann innerhalb des Buchs neu durchnummerieren.
ALTER TABLE "chapters" ADD COLUMN "book" "WorkbookBook";

UPDATE "chapters" SET "book" = CASE
  WHEN "level" IN ('A1', 'A2') THEN 'BEGINNER'::"WorkbookBook"
  WHEN "level" IN ('B1', 'B2') THEN 'INTERMEDIATE'::"WorkbookBook"
  ELSE 'ADVANCED'::"WorkbookBook"
END;

ALTER TABLE "chapters" ALTER COLUMN "book" SET NOT NULL;

-- Prisma legt @@unique als UNIQUE INDEX an, nicht als Tabellen-Constraint.
DROP INDEX IF EXISTS "chapters_languageId_level_idx";
DROP INDEX IF EXISTS "chapters_languageId_level_order_key";

-- Die untere Stufe eines Buchs behält ihre Nummern, die obere schließt an.
UPDATE "chapters" c SET "order" = c."order" + sub."offset"
FROM (
  SELECT "languageId", "book", "level",
         COALESCE((
           SELECT MAX(inner_c."order") FROM "chapters" inner_c
           WHERE inner_c."languageId" = outer_c."languageId"
             AND inner_c."book" = outer_c."book"
             AND inner_c."level" < outer_c."level"
         ), 0) AS "offset"
  FROM (SELECT DISTINCT "languageId", "book", "level" FROM "chapters") outer_c
) sub
WHERE c."languageId" = sub."languageId" AND c."level" = sub."level" AND sub."offset" > 0;

CREATE UNIQUE INDEX "chapters_languageId_book_order_key" ON "chapters"("languageId", "book", "order");
CREATE INDEX "chapters_languageId_book_idx" ON "chapters"("languageId", "book");

-- Lerneinheiten: Kursbuch- und Arbeitsbuchseiten zu einer Folge zusammenlegen.
DROP INDEX IF EXISTS "chapter_units_chapterId_section_order_key";

UPDATE "chapter_units" u SET "order" = u."order" + (
  SELECT COUNT(*) FROM "chapter_units" k
  WHERE k."chapterId" = u."chapterId" AND k."section" = 'KURSBUCH'
)
WHERE u."section" = 'ARBEITSBUCH';

ALTER TABLE "chapter_units" DROP COLUMN "section";
DROP TYPE "UnitSection";

CREATE UNIQUE INDEX "chapter_units_chapterId_order_key" ON "chapter_units"("chapterId", "order");
