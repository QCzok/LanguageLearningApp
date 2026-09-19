-- Die Mediathek zeigt keine eigenen Aufnahmen mehr, sondern kuratierte
-- YouTube-Videos. Die alten Tabellen werden ersatzlos entfernt: Ihr Inhalt
-- war reines Seed-Material (vier Folgen je Sprache aus der Sprachsynthese),
-- das ohne die zugehörigen MP3-Dateien ohnehin nichts mehr abspielt. Der
-- Hörfortschritt daran geht mit unter – er verweist auf nicht mehr
-- vorhandene Inhalte und ließe sich auf kein Video abbilden.
DROP TABLE "media_progress";
DROP TABLE "media_items";
DROP TYPE "MediaType";

CREATE TYPE "VideoTopic" AS ENUM ('EVERYDAY', 'STREET_INTERVIEW', 'GRAMMAR', 'VOCABULARY', 'CULTURE');

CREATE TABLE "video_items" (
    "id" TEXT NOT NULL,
    "languageId" TEXT NOT NULL,
    "level" "CefrLevel" NOT NULL,
    "topic" "VideoTopic" NOT NULL,
    "youtubeId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "channelName" TEXT NOT NULL,
    "channelUrl" TEXT NOT NULL,
    "durationSec" INTEGER NOT NULL,
    "slowSpeech" BOOLEAN NOT NULL DEFAULT false,
    "tags" TEXT[],
    "isPremium" BOOLEAN NOT NULL DEFAULT false,
    "publishedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "video_items_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "video_progress" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "videoItemId" TEXT NOT NULL,
    "positionSec" INTEGER NOT NULL DEFAULT 0,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "video_progress_pkey" PRIMARY KEY ("id")
);

-- Derselbe Beitrag darf in einer Sprache nur einmal stehen; der Seed stützt
-- sein Upsert auf diesen Index.
CREATE UNIQUE INDEX "video_items_languageId_youtubeId_key" ON "video_items"("languageId", "youtubeId");
CREATE INDEX "video_items_languageId_level_topic_idx" ON "video_items"("languageId", "level", "topic");
CREATE UNIQUE INDEX "video_progress_userId_videoItemId_key" ON "video_progress"("userId", "videoItemId");

ALTER TABLE "video_items" ADD CONSTRAINT "video_items_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "languages"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "video_progress" ADD CONSTRAINT "video_progress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "video_progress" ADD CONSTRAINT "video_progress_videoItemId_fkey" FOREIGN KEY ("videoItemId") REFERENCES "video_items"("id") ON DELETE CASCADE ON UPDATE CASCADE;
