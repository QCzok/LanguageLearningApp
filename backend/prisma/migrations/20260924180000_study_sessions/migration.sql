-- Lernsitzungen: Stand und Punkte je Aufgabe.
CREATE TABLE "study_exercise_progress" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "unitId" TEXT NOT NULL,
    "blockId" TEXT NOT NULL,
    "bestScore" INTEGER NOT NULL,
    "points" INTEGER NOT NULL DEFAULT 0,
    "attempts" INTEGER NOT NULL DEFAULT 0,
    "lastAnsweredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "study_exercise_progress_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "study_exercise_progress_userId_unitId_blockId_key" ON "study_exercise_progress"("userId", "unitId", "blockId");
CREATE INDEX "study_exercise_progress_userId_idx" ON "study_exercise_progress"("userId");

ALTER TABLE "study_exercise_progress" ADD CONSTRAINT "study_exercise_progress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "study_exercise_progress" ADD CONSTRAINT "study_exercise_progress_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "chapter_units"("id") ON DELETE CASCADE ON UPDATE CASCADE;
