-- Sprachen ohne eigenen Kurs (z. B. Ukrainisch, Polnisch, Türkisch) sollen
-- als Muttersprache wählbar sein, ohne in der Lernsprachen-Auswahl als
-- leerer Kurs aufzutauchen. `isActive` allein reicht dafür nicht, weil es
-- bereits von `LanguagesService.findAll` genutzt wird, um überhaupt
-- irgendwo angezeigt zu werden. Deshalb ein zweites Flag: Standardwert
-- `true`, damit alle bestehenden (Kurs-)Sprachen unverändert lernbar bleiben.
ALTER TABLE "languages" ADD COLUMN "isLearnable" BOOLEAN NOT NULL DEFAULT true;
