-- Lektionen statt aus Buchseiten geschnittener Sitzungen: Der Stand hängt jetzt
-- an (Lektion, Aufgabe). Der alte Stand je Buchaufgabe hat kein Gegenstück
-- mehr; die damit verdienten XP bleiben am Nutzer.
DROP TABLE "study_exercise_progress";

CREATE TABLE "study_lesson_progress" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "lessonId" TEXT NOT NULL,
    "blockId" TEXT NOT NULL,
    "bestScore" INTEGER NOT NULL,
    "points" INTEGER NOT NULL DEFAULT 0,
    "attempts" INTEGER NOT NULL DEFAULT 0,
    "lastAnsweredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "study_lesson_progress_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "study_lesson_progress_userId_lessonId_blockId_key" ON "study_lesson_progress"("userId", "lessonId", "blockId");
CREATE INDEX "study_lesson_progress_userId_idx" ON "study_lesson_progress"("userId");

ALTER TABLE "study_lesson_progress" ADD CONSTRAINT "study_lesson_progress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
