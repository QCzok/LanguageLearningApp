-- CreateEnum
CREATE TYPE "UnitSection" AS ENUM ('KURSBUCH', 'ARBEITSBUCH');

-- CreateEnum
CREATE TYPE "UnitStatus" AS ENUM ('NOT_STARTED', 'IN_PROGRESS', 'COMPLETED');

-- CreateTable
CREATE TABLE "chapters" (
    "id" TEXT NOT NULL,
    "languageId" TEXT NOT NULL,
    "level" "CefrLevel" NOT NULL,
    "order" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "coverEmoji" TEXT NOT NULL DEFAULT '📗',
    "goals" TEXT[],
    "estimatedMinutes" INTEGER NOT NULL DEFAULT 0,
    "isPublished" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "chapters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chapter_units" (
    "id" TEXT NOT NULL,
    "chapterId" TEXT NOT NULL,
    "section" "UnitSection" NOT NULL,
    "order" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT,
    "estimatedMinutes" INTEGER NOT NULL DEFAULT 10,
    "content" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "chapter_units_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "unit_progress" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "unitId" TEXT NOT NULL,
    "status" "UnitStatus" NOT NULL DEFAULT 'NOT_STARTED',
    "answers" JSONB NOT NULL DEFAULT '{}',
    "annotations" JSONB,
    "scorePercent" INTEGER,
    "completedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "unit_progress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "chapters_languageId_level_idx" ON "chapters"("languageId", "level");

-- CreateIndex
CREATE UNIQUE INDEX "chapters_languageId_level_order_key" ON "chapters"("languageId", "level", "order");

-- CreateIndex
CREATE INDEX "chapter_units_chapterId_idx" ON "chapter_units"("chapterId");

-- CreateIndex
CREATE UNIQUE INDEX "chapter_units_chapterId_section_order_key" ON "chapter_units"("chapterId", "section", "order");

-- CreateIndex
CREATE INDEX "unit_progress_userId_status_idx" ON "unit_progress"("userId", "status");

-- CreateIndex
CREATE UNIQUE INDEX "unit_progress_userId_unitId_key" ON "unit_progress"("userId", "unitId");

-- AddForeignKey
ALTER TABLE "chapters" ADD CONSTRAINT "chapters_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "languages"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chapter_units" ADD CONSTRAINT "chapter_units_chapterId_fkey" FOREIGN KEY ("chapterId") REFERENCES "chapters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "unit_progress" ADD CONSTRAINT "unit_progress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "unit_progress" ADD CONSTRAINT "unit_progress_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "chapter_units"("id") ON DELETE CASCADE ON UPDATE CASCADE;
