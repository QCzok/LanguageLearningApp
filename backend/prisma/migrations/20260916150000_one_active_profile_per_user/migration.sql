-- Genau ein aktives Lernprofil pro Nutzer – jetzt von der Datenbank erzwungen.
--
-- Der Kommentar am Feld sagte das schon immer ("Genau ein Profil pro Nutzer
-- ist aktiv"), durchgesetzt hat es aber niemand: `setLearningProfile` und
-- `activateProfile` schalten die anderen Profile brav ab, der Seed dagegen
-- setzte das Englisch-Profil bei jedem Lauf hart auf aktiv. Wer zwischendurch
-- in der App auf Deutsch gewechselt hatte, hatte danach zwei aktive Profile.
--
-- Sichtbar wurde das an zwei Stellen, die sich unterschiedlich entscheiden:
-- Die App nimmt das erste aktive Profil aus `/users/me` (sortiert nach
-- isActive, updatedAt), das Dashboard sucht sich seins selbst. Im Regal stand
-- deshalb "Englisch", während die Kopfzeile 🇩🇪 zeigte.
--
-- Ein partieller Unique-Index löst das an der Wurzel. Prisma kann ihn im
-- Schema nicht ausdrücken (`@@unique` kennt kein WHERE), deshalb steht er
-- hier als reines SQL; im Schema weist ihn ein Kommentar aus.

-- 1. Bestehende Verstöße bereinigen: Pro Nutzer bleibt das zuletzt geänderte
--    aktive Profil aktiv, alle weiteren werden abgeschaltet. `updatedAt` ist
--    dafür das richtige Maß – es ist genau das Feld, nach dem auch die App
--    sortiert, die Auswahl bleibt also die, die der Nutzer zuletzt gesehen
--    hat. Bei gleichem Zeitstempel entscheidet die id, damit das Ergebnis
--    nicht vom Zufall der Zeilenreihenfolge abhängt.
UPDATE "learning_profiles" SET "isActive" = false
WHERE "isActive" = true
  AND "id" NOT IN (
    SELECT DISTINCT ON ("userId") "id"
    FROM "learning_profiles"
    WHERE "isActive" = true
    ORDER BY "userId", "updatedAt" DESC, "id" DESC
  );

-- 2. Ab jetzt unmöglich: zwei aktive Profile für denselben Nutzer. Inaktive
--    Profile bleiben beliebig viele erlaubt – daher der partielle Index und
--    kein `@@unique([userId, isActive])`, das auch die inaktiven auf eins
--    begrenzen würde.
CREATE UNIQUE INDEX "learning_profiles_one_active_per_user"
  ON "learning_profiles"("userId")
  WHERE "isActive";
