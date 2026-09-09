-- CreateEnum
CREATE TYPE "CefrLevel" AS ENUM ('A1', 'A2', 'B1', 'B2', 'C1', 'C2');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('USER', 'EDITOR', 'ADMIN');

-- CreateEnum
CREATE TYPE "Plan" AS ENUM ('FREE', 'PREMIUM');

-- CreateEnum
CREATE TYPE "LevelSource" AS ENUM ('SELF_SELECTED', 'PLACEMENT_TEST');

-- CreateEnum
CREATE TYPE "CardStatus" AS ENUM ('NEW', 'LEARNING', 'REVIEW', 'MASTERED');

-- CreateEnum
CREATE TYPE "VocabMode" AS ENUM ('FLASHCARD', 'MULTIPLE_CHOICE', 'TYPING', 'LISTENING', 'MATCHING');

-- CreateEnum
CREATE TYPE "LibraryType" AS ENUM ('ARTICLE', 'STORY');

-- CreateEnum
CREATE TYPE "ExerciseType" AS ENUM ('MULTIPLE_CHOICE', 'TRUE_FALSE', 'OPEN');

-- CreateEnum
CREATE TYPE "MediaType" AS ENUM ('PODCAST', 'AUDIO_LESSON', 'DIALOGUE');

-- CreateEnum
CREATE TYPE "AiMode" AS ENUM ('CHAT', 'DISCUSSION', 'GRAMMAR', 'CORRECTION');

-- CreateEnum
CREATE TYPE "AiFeature" AS ENUM ('NOTEBOOK_ANALYSIS', 'CHAT', 'GRAMMAR_EXPLANATION', 'RECOMMENDATIONS');

-- CreateEnum
CREATE TYPE "PageBackground" AS ENUM ('BLANK', 'LINED', 'GRID', 'DOTTED');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "avatarUrl" TEXT,
    "role" "UserRole" NOT NULL DEFAULT 'USER',
    "plan" "Plan" NOT NULL DEFAULT 'FREE',
    "premiumUntil" TIMESTAMP(3),
    "nativeLanguage" TEXT NOT NULL DEFAULT 'de',
    "xp" INTEGER NOT NULL DEFAULT 0,
    "streakDays" INTEGER NOT NULL DEFAULT 0,
    "lastActivityDate" TIMESTAMP(3),
    "onboardingCompleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "refresh_tokens" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "tokenHash" TEXT NOT NULL,
    "userAgent" TEXT,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "revokedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "refresh_tokens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "languages" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nativeName" TEXT NOT NULL,
    "flagEmoji" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "languages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "learning_profiles" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "languageId" TEXT NOT NULL,
    "level" "CefrLevel" NOT NULL,
    "levelSource" "LevelSource" NOT NULL DEFAULT 'SELF_SELECTED',
    "dailyGoalMinutes" INTEGER NOT NULL DEFAULT 15,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "learning_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "placement_questions" (
    "id" TEXT NOT NULL,
    "languageId" TEXT NOT NULL,
    "level" "CefrLevel" NOT NULL,
    "prompt" TEXT NOT NULL,
    "helperText" TEXT,
    "options" TEXT[],
    "correctIndex" INTEGER NOT NULL,
    "points" INTEGER NOT NULL DEFAULT 1,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "placement_questions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "placement_attempts" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "languageId" TEXT NOT NULL,
    "answers" JSONB NOT NULL,
    "correct" INTEGER NOT NULL,
    "total" INTEGER NOT NULL,
    "scorePercent" INTEGER NOT NULL,
    "resultLevel" "CefrLevel" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "placement_attempts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vocab_decks" (
    "id" TEXT NOT NULL,
    "languageId" TEXT NOT NULL,
    "level" "CefrLevel" NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "iconEmoji" TEXT NOT NULL DEFAULT '📘',
    "isSystem" BOOLEAN NOT NULL DEFAULT true,
    "ownerId" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "vocab_decks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vocab_items" (
    "id" TEXT NOT NULL,
    "deckId" TEXT NOT NULL,
    "term" TEXT NOT NULL,
    "translation" TEXT NOT NULL,
    "phonetic" TEXT,
    "partOfSpeech" TEXT,
    "exampleSentence" TEXT,
    "exampleTranslation" TEXT,
    "audioUrl" TEXT,
    "imageUrl" TEXT,
    "tags" TEXT[],
    "sortOrder" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "vocab_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vocab_progress" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "vocabItemId" TEXT NOT NULL,
    "status" "CardStatus" NOT NULL DEFAULT 'NEW',
    "easeFactor" DOUBLE PRECISION NOT NULL DEFAULT 2.5,
    "intervalDays" INTEGER NOT NULL DEFAULT 0,
    "repetitions" INTEGER NOT NULL DEFAULT 0,
    "lapses" INTEGER NOT NULL DEFAULT 0,
    "dueAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastReviewedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "vocab_progress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "review_logs" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "vocabItemId" TEXT NOT NULL,
    "grade" INTEGER NOT NULL,
    "correct" BOOLEAN NOT NULL,
    "mode" "VocabMode" NOT NULL,
    "durationMs" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "review_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notebooks" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "languageId" TEXT,
    "title" TEXT NOT NULL,
    "coverColor" TEXT NOT NULL DEFAULT '#2563EB',
    "archivedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "notebooks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notebook_pages" (
    "id" TEXT NOT NULL,
    "notebookId" TEXT NOT NULL,
    "index" INTEGER NOT NULL,
    "background" "PageBackground" NOT NULL DEFAULT 'LINED',
    "content" JSONB NOT NULL,
    "thumbnailUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "notebook_pages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notebook_analyses" (
    "id" TEXT NOT NULL,
    "pageId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "recognizedText" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "scorePercent" INTEGER NOT NULL,
    "corrections" JSONB NOT NULL,
    "suggestions" TEXT[],
    "model" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notebook_analyses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "library_contents" (
    "id" TEXT NOT NULL,
    "languageId" TEXT NOT NULL,
    "level" "CefrLevel" NOT NULL,
    "type" "LibraryType" NOT NULL,
    "title" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "author" TEXT,
    "imageUrl" TEXT,
    "wordCount" INTEGER NOT NULL DEFAULT 0,
    "estimatedMinutes" INTEGER NOT NULL DEFAULT 0,
    "tags" TEXT[],
    "isPremium" BOOLEAN NOT NULL DEFAULT false,
    "publishedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "library_contents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "library_exercises" (
    "id" TEXT NOT NULL,
    "contentId" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "type" "ExerciseType" NOT NULL,
    "question" TEXT NOT NULL,
    "options" TEXT[],
    "correctIndex" INTEGER NOT NULL DEFAULT -1,
    "explanation" TEXT,

    CONSTRAINT "library_exercises_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "library_attempts" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "contentId" TEXT NOT NULL,
    "answers" JSONB NOT NULL,
    "score" INTEGER NOT NULL,
    "total" INTEGER NOT NULL,
    "scorePercent" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "library_attempts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reading_progress" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "contentId" TEXT NOT NULL,
    "progressPercent" INTEGER NOT NULL DEFAULT 0,
    "completedAt" TIMESTAMP(3),
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "reading_progress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "media_items" (
    "id" TEXT NOT NULL,
    "languageId" TEXT NOT NULL,
    "level" "CefrLevel" NOT NULL,
    "type" "MediaType" NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "audioUrl" TEXT NOT NULL,
    "coverUrl" TEXT,
    "durationSec" INTEGER NOT NULL,
    "transcript" TEXT,
    "tags" TEXT[],
    "isPremium" BOOLEAN NOT NULL DEFAULT false,
    "publishedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "media_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "media_progress" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "mediaItemId" TEXT NOT NULL,
    "positionSec" INTEGER NOT NULL DEFAULT 0,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "media_progress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ai_conversations" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "languageId" TEXT NOT NULL,
    "mode" "AiMode" NOT NULL DEFAULT 'CHAT',
    "level" "CefrLevel" NOT NULL,
    "title" TEXT NOT NULL,
    "topic" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ai_conversations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ai_messages" (
    "id" TEXT NOT NULL,
    "conversationId" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ai_messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ai_usage" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "feature" "AiFeature" NOT NULL,
    "model" TEXT NOT NULL,
    "inputTokens" INTEGER NOT NULL DEFAULT 0,
    "outputTokens" INTEGER NOT NULL DEFAULT 0,
    "cachedTokens" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ai_usage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "daily_activities" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "minutes" INTEGER NOT NULL DEFAULT 0,
    "xp" INTEGER NOT NULL DEFAULT 0,
    "reviews" INTEGER NOT NULL DEFAULT 0,
    "correctReviews" INTEGER NOT NULL DEFAULT 0,
    "readingCount" INTEGER NOT NULL DEFAULT 0,
    "listeningCount" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "daily_activities_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "refresh_tokens_userId_idx" ON "refresh_tokens"("userId");

-- CreateIndex
CREATE INDEX "refresh_tokens_expiresAt_idx" ON "refresh_tokens"("expiresAt");

-- CreateIndex
CREATE UNIQUE INDEX "languages_code_key" ON "languages"("code");

-- CreateIndex
CREATE INDEX "learning_profiles_userId_isActive_idx" ON "learning_profiles"("userId", "isActive");

-- CreateIndex
CREATE UNIQUE INDEX "learning_profiles_userId_languageId_key" ON "learning_profiles"("userId", "languageId");

-- CreateIndex
CREATE INDEX "placement_questions_languageId_level_idx" ON "placement_questions"("languageId", "level");

-- CreateIndex
CREATE INDEX "placement_attempts_userId_languageId_idx" ON "placement_attempts"("userId", "languageId");

-- CreateIndex
CREATE INDEX "vocab_decks_languageId_level_idx" ON "vocab_decks"("languageId", "level");

-- CreateIndex
CREATE INDEX "vocab_decks_ownerId_idx" ON "vocab_decks"("ownerId");

-- CreateIndex
CREATE INDEX "vocab_items_deckId_idx" ON "vocab_items"("deckId");

-- CreateIndex
CREATE INDEX "vocab_progress_userId_dueAt_idx" ON "vocab_progress"("userId", "dueAt");

-- CreateIndex
CREATE INDEX "vocab_progress_userId_status_idx" ON "vocab_progress"("userId", "status");

-- CreateIndex
CREATE UNIQUE INDEX "vocab_progress_userId_vocabItemId_key" ON "vocab_progress"("userId", "vocabItemId");

-- CreateIndex
CREATE INDEX "review_logs_userId_createdAt_idx" ON "review_logs"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "notebooks_userId_updatedAt_idx" ON "notebooks"("userId", "updatedAt");

-- CreateIndex
CREATE UNIQUE INDEX "notebook_pages_notebookId_index_key" ON "notebook_pages"("notebookId", "index");

-- CreateIndex
CREATE INDEX "notebook_analyses_pageId_createdAt_idx" ON "notebook_analyses"("pageId", "createdAt");

-- CreateIndex
CREATE INDEX "library_contents_languageId_level_type_idx" ON "library_contents"("languageId", "level", "type");

-- CreateIndex
CREATE INDEX "library_exercises_contentId_order_idx" ON "library_exercises"("contentId", "order");

-- CreateIndex
CREATE INDEX "library_attempts_userId_contentId_idx" ON "library_attempts"("userId", "contentId");

-- CreateIndex
CREATE UNIQUE INDEX "reading_progress_userId_contentId_key" ON "reading_progress"("userId", "contentId");

-- CreateIndex
CREATE INDEX "media_items_languageId_level_type_idx" ON "media_items"("languageId", "level", "type");

-- CreateIndex
CREATE UNIQUE INDEX "media_progress_userId_mediaItemId_key" ON "media_progress"("userId", "mediaItemId");

-- CreateIndex
CREATE INDEX "ai_conversations_userId_updatedAt_idx" ON "ai_conversations"("userId", "updatedAt");

-- CreateIndex
CREATE INDEX "ai_messages_conversationId_createdAt_idx" ON "ai_messages"("conversationId", "createdAt");

-- CreateIndex
CREATE INDEX "ai_usage_userId_createdAt_idx" ON "ai_usage"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "daily_activities_userId_date_idx" ON "daily_activities"("userId", "date");

-- CreateIndex
CREATE UNIQUE INDEX "daily_activities_userId_date_key" ON "daily_activities"("userId", "date");

-- AddForeignKey
ALTER TABLE "refresh_tokens" ADD CONSTRAINT "refresh_tokens_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "learning_profiles" ADD CONSTRAINT "learning_profiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "learning_profiles" ADD CONSTRAINT "learning_profiles_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "languages"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "placement_questions" ADD CONSTRAINT "placement_questions_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "languages"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "placement_attempts" ADD CONSTRAINT "placement_attempts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "placement_attempts" ADD CONSTRAINT "placement_attempts_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "languages"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vocab_decks" ADD CONSTRAINT "vocab_decks_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "languages"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vocab_decks" ADD CONSTRAINT "vocab_decks_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vocab_items" ADD CONSTRAINT "vocab_items_deckId_fkey" FOREIGN KEY ("deckId") REFERENCES "vocab_decks"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vocab_progress" ADD CONSTRAINT "vocab_progress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vocab_progress" ADD CONSTRAINT "vocab_progress_vocabItemId_fkey" FOREIGN KEY ("vocabItemId") REFERENCES "vocab_items"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "review_logs" ADD CONSTRAINT "review_logs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "review_logs" ADD CONSTRAINT "review_logs_vocabItemId_fkey" FOREIGN KEY ("vocabItemId") REFERENCES "vocab_items"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notebooks" ADD CONSTRAINT "notebooks_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notebooks" ADD CONSTRAINT "notebooks_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "languages"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notebook_pages" ADD CONSTRAINT "notebook_pages_notebookId_fkey" FOREIGN KEY ("notebookId") REFERENCES "notebooks"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notebook_analyses" ADD CONSTRAINT "notebook_analyses_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "notebook_pages"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notebook_analyses" ADD CONSTRAINT "notebook_analyses_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "library_contents" ADD CONSTRAINT "library_contents_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "languages"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "library_exercises" ADD CONSTRAINT "library_exercises_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "library_contents"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "library_attempts" ADD CONSTRAINT "library_attempts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "library_attempts" ADD CONSTRAINT "library_attempts_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "library_contents"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reading_progress" ADD CONSTRAINT "reading_progress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reading_progress" ADD CONSTRAINT "reading_progress_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "library_contents"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "media_items" ADD CONSTRAINT "media_items_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "languages"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "media_progress" ADD CONSTRAINT "media_progress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "media_progress" ADD CONSTRAINT "media_progress_mediaItemId_fkey" FOREIGN KEY ("mediaItemId") REFERENCES "media_items"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ai_conversations" ADD CONSTRAINT "ai_conversations_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ai_conversations" ADD CONSTRAINT "ai_conversations_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "languages"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ai_messages" ADD CONSTRAINT "ai_messages_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "ai_conversations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ai_usage" ADD CONSTRAINT "ai_usage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily_activities" ADD CONSTRAINT "daily_activities_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
