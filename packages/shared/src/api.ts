import type { CefrLevel } from './cefr';
import type {
  AiMode,
  CardStatus,
  ExerciseType,
  LibraryType,
  MediaType,
  Plan,
  UserRole,
  VocabMode,
} from './enums';
import type { NotebookPageContent, PageBackground } from './notebook';
import type { TranslatableLanguage } from './workbook';

/** Antwortform aller Listen-Endpunkte. */
export interface Paginated<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export interface LanguageDto {
  id: string;
  code: string;
  name: string;
  nativeName: string;
  flagEmoji: string;
}

export interface LearningProfileDto {
  id: string;
  language: LanguageDto;
  level: CefrLevel;
  levelSource: 'SELF_SELECTED' | 'PLACEMENT_TEST';
  dailyGoalMinutes: number;
  isActive: boolean;
}

export interface UserDto {
  id: string;
  email: string;
  displayName: string;
  avatarUrl: string | null;
  role: UserRole;
  plan: Plan;
  premiumUntil: string | null;
  nativeLanguage: string;
  xp: number;
  streakDays: number;
  onboardingCompleted: boolean;
  profiles: LearningProfileDto[];
  createdAt: string;
}

export interface AuthResponse extends AuthTokens {
  user: UserDto;
}

// ---------------------------------------------------------------- Einstufung

export interface PlacementQuestionDto {
  id: string;
  level: CefrLevel;
  prompt: string;
  helperText: string | null;
  options: string[];
  points: number;
}

export interface PlacementAnswerInput {
  questionId: string;
  selectedIndex: number;
}

export interface PlacementResultDto {
  attemptId: string;
  correct: number;
  total: number;
  scorePercent: number;
  resultLevel: CefrLevel;
  perLevel: Array<{ level: CefrLevel; correct: number; total: number }>;
  recommendation: string;
}

// ------------------------------------------------------------------ Vokabeln

export interface VocabDeckDto {
  id: string;
  title: string;
  description: string | null;
  level: CefrLevel;
  language: LanguageDto;
  itemCount: number;
  isSystem: boolean;
  /** Nur befüllt, wenn der Nutzer das Deck bereits lernt. */
  progress?: DeckProgressDto;
}

export interface DeckProgressDto {
  total: number;
  new: number;
  learning: number;
  review: number;
  mastered: number;
  dueNow: number;
  /** Letzte Antwort war falsch – Basis für den Wiederholen-Stapel, unabhängig von `dueNow`. */
  needsRepeat: number;
  /** Letzte Antwort war richtig – Basis für den Gelernt-Stapel, unabhängig von `mastered`. */
  learned: number;
}

export interface VocabItemDto {
  id: string;
  term: string;
  translation: string;
  phonetic: string | null;
  partOfSpeech: string | null;
  exampleSentence: string | null;
  exampleTranslation: string | null;
  audioUrl: string | null;
  tags: string[];
}

/** Eine Lerneinheit: Karte + modusspezifische Zusatzdaten. */
export interface ReviewCardDto {
  cardId: string;
  item: VocabItemDto;
  mode: VocabMode;
  status: CardStatus;
  dueAt: string;
  /** Nur bei MULTIPLE_CHOICE / LISTENING: Distraktoren inkl. korrekter Antwort, gemischt. */
  choices?: string[];
  correctChoiceIndex?: number;
}

export interface SubmitReviewInput {
  cardId: string;
  grade: 0 | 1 | 2 | 3 | 4 | 5;
  mode: VocabMode;
  durationMs?: number;
}

export interface VocabStatsDto {
  totalCards: number;
  byStatus: Record<CardStatus, number>;
  dueToday: number;
  reviewedToday: number;
  accuracy7d: number;
  streakDays: number;
  history: Array<{ date: string; reviews: number; correct: number }>;
}

// ------------------------------------------------------------------ Lernheft

export interface NotebookDto {
  id: string;
  title: string;
  coverColor: string;
  language: LanguageDto | null;
  pageCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface NotebookPageDto {
  id: string;
  notebookId: string;
  index: number;
  background: PageBackground;
  content: NotebookPageContent;
  updatedAt: string;
}

export interface NotebookAnalysisDto {
  id: string;
  pageId: string;
  recognizedText: string;
  summary: string;
  scorePercent: number;
  corrections: Array<{
    original: string;
    corrected: string;
    explanation: string;
    category: 'GRAMMAR' | 'SPELLING' | 'VOCABULARY' | 'STYLE' | 'PUNCTUATION';
    severity: 'LOW' | 'MEDIUM' | 'HIGH';
  }>;
  suggestions: string[];
  createdAt: string;
}

// ----------------------------------------------------------------- Bibliothek

/** Ein schwieriges Wort oder eine Wendung aus einem Abschnitt, kurz erklärt. */
export interface LibraryGlossaryEntry {
  term: string;
  explanation: string;
}

/**
 * Ein Lesetext ist in Abschnitte gegliedert (in der Regel ein Absatz je
 * Abschnitt) statt ein einzelner Fließtext-String. Jeder Abschnitt trägt
 * optional eine Übersetzung in die Muttersprache (aufklappbar, wie die
 * Erklärungen im Lehrwerk – siehe `InfoBlock.translations`) und ein kleines
 * Glossar für Wörter, die über das Niveau des Texts hinausgehen.
 */
export interface LibrarySection {
  id: string;
  text: string;
  translations?: Partial<Record<TranslatableLanguage, string>>;
  glossary?: LibraryGlossaryEntry[];
}

export interface LibraryContentDto {
  id: string;
  type: LibraryType;
  title: string;
  summary: string;
  /** Erste ~50 Zeichen des Fließtexts, für Kacheln in der Übersicht. */
  excerpt: string;
  author: string | null;
  imageUrl: string | null;
  level: CefrLevel;
  language: LanguageDto;
  wordCount: number;
  estimatedMinutes: number;
  tags: string[];
  exerciseCount: number;
  publishedAt: string;
  /** Nur in Detail-Antworten. */
  body?: LibrarySection[];
  exercises?: LibraryExerciseDto[];
  userProgress?: { progressPercent: number; completedAt: string | null; bestScore: number | null };
}

export interface LibraryExerciseDto {
  id: string;
  order: number;
  type: ExerciseType;
  question: string;
  options: string[];
  /** Wird bei der Ausgabe an Lernende entfernt und erst nach Abgabe geliefert. */
  correctIndex?: number;
  explanation?: string;
}

export interface SubmitExercisesInput {
  answers: Array<{ exerciseId: string; selectedIndex?: number; text?: string }>;
}

export interface ExerciseResultDto {
  score: number;
  total: number;
  scorePercent: number;
  xpEarned: number;
  results: Array<{
    exerciseId: string;
    correct: boolean;
    correctIndex: number | null;
    explanation: string | null;
  }>;
}

// ------------------------------------------------------------------ Mediathek

export interface MediaItemDto {
  id: string;
  type: MediaType;
  title: string;
  description: string;
  audioUrl: string;
  coverUrl: string | null;
  durationSec: number;
  level: CefrLevel;
  language: LanguageDto;
  tags: string[];
  hasTranscript: boolean;
  publishedAt: string;
  transcript?: string;
  userProgress?: { positionSec: number; completed: boolean };
}

// ------------------------------------------------------------------------ KI

export interface AiConversationDto {
  id: string;
  title: string;
  mode: AiMode;
  level: CefrLevel;
  language: LanguageDto;
  messageCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface AiMessageDto {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  createdAt: string;
}

export interface GrammarExplanationDto {
  topic: string;
  explanation: string;
  examples: Array<{ sentence: string; translation: string }>;
  commonMistakes: string[];
  relatedTopics: string[];
}

export interface RecommendationDto {
  focusAreas: string[];
  summary: string;
  actions: Array<{
    type: 'VOCAB_DECK' | 'LIBRARY' | 'MEDIA' | 'NOTEBOOK' | 'AI_CHAT';
    targetId: string | null;
    title: string;
    reason: string;
  }>;
}

export interface AiQuotaDto {
  plan: Plan;
  used: number;
  limit: number;
  resetsAt: string;
}

// -------------------------------------------------------------- Fortschritt

export interface DashboardDto {
  user: Pick<UserDto, 'displayName' | 'xp' | 'streakDays' | 'plan'>;
  activeProfile: LearningProfileDto | null;
  dueCards: number;
  minutesToday: number;
  dailyGoalMinutes: number;
  weeklyActivity: Array<{ date: string; minutes: number; xp: number }>;
  continueReading: LibraryContentDto | null;
  continueListening: MediaItemDto | null;
}
