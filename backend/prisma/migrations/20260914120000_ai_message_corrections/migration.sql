/*
  Die Korrektur zu einem Beitrag des Lernenden haengt jetzt an dessen eigener
  Nachricht statt als "Korrektur:"-Zeile am Ende der KI-Antwort zu kleben. So
  kann die App sie direkt neben dem Original zeigen, und der vorgelesene Text
  bleibt frei davon.

  `source` haelt fest, ob der Beitrag gesprochen oder getippt war: Bei
  gesprochenen Beitraegen waeren Zeichensetzung und Grossschreibung nicht
  bewertbar, weil die Spracherkennung sie erfindet.

  Bestehende Zeilen bleiben unveraendert - alte Gespraeche behalten ihre
  Korrekturzeile im Antworttext.
*/
ALTER TABLE "ai_messages"
  ADD COLUMN "source" TEXT,
  ADD COLUMN "correctedText" TEXT,
  ADD COLUMN "correctionNotes" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[];
