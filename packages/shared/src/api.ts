import type { CefrLevel } from './cefr';
import type {
  AiMode,
  AvatarIconId,
  CardStatus,
  ExerciseType,
  LibraryType,
  Plan,
  UserRole,
  VideoTopic,
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
  /**
   * Ob die Sprache als Lernsprache wählbar ist (eigener Kurs mit Kapiteln,
   * Vokabelstapeln, Einstufungstest). Manche Sprachen stehen nur als
   * Muttersprache zur Wahl, weil es (noch) keinen Kurs für sie gibt.
   */
  isLearnable: boolean;
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
  avatarIcon: AvatarIconId | null;
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

/**
 * Zugangsdaten eines still angelegten Geräteprofils.
 *
 * Die App legt Profile ohne Registrierung an: kein Formular, keine E-Mail, kein
 * Passwort. Serverseitig bleibt es trotzdem ein gewöhnliches Konto – diese
 * beiden Werte sind sein Schlüssel. Das Gerät verwahrt sie und meldet das
 * Profil damit später wieder an; sonst wäre es verloren, sobald der
 * Refresh-Token abläuft.
 *
 * Sie entstehen auf dem Server, weil React Native keine kryptografisch sichere
 * Zufallsquelle mitbringt.
 */
export interface GuestCredentials {
  email: string;
  secret: string;
}

export interface GuestAuthResponse extends AuthResponse {
  credentials: GuestCredentials;
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

/**
 * Fragen je Niveau im Einstufungstest – und die Zahl davon, die richtig sein
 * muss, um auf die nächste Stufe zu kommen.
 *
 * Beide Werte stehen hier statt nur im Backend, weil die Oberfläche die Regel
 * ansagt, bevor der Test losgeht („5 Fragen je Stufe, 3 richtig führen
 * weiter"): Sonst müsste sie die Zahlen doppelt führen und könnte still
 * auseinanderlaufen.
 */
export const PLACEMENT_QUESTIONS_PER_LEVEL = 5;
export const PLACEMENT_PASS_CORRECT = 3;

/**
 * Auswertung einer einzelnen Stufe.
 *
 * Der Test läuft Stufe für Stufe: Nach den fünf Fragen eines Niveaus fragt
 * die App hier nach, ob es gereicht hat. Nur so kann sie frühzeitig abbrechen
 * – ohne die Lösungen zu kennen, die das Backend nie herausgibt.
 */
export interface PlacementStageResultDto {
  level: CefrLevel;
  correct: number;
  total: number;
  passed: boolean;
  /** Nächste Stufe – null, wenn durchgefallen oder C2 geschafft. */
  nextLevel: CefrLevel | null;
}

export interface PlacementResultDto {
  attemptId: string;
  correct: number;
  total: number;
  scorePercent: number;
  resultLevel: CefrLevel;
  /** Eine Zeile je angetretener Stufe – die Leiter, wie sie gelaufen ist. */
  perLevel: Array<{ level: CefrLevel; correct: number; total: number; passed: boolean }>;
  recommendation: string;
  /**
   * Jede gestellte Frage mit der gegebenen und der richtigen Antwort – erst
   * nach Testende sichtbar, weil bis dahin die Lösungen den Server nie
   * verlassen (siehe `PlacementService.submitStage`).
   */
  questions: Array<{
    questionId: string;
    level: CefrLevel;
    prompt: string;
    options: string[];
    selectedIndex: number;
    correctIndex: number;
    correct: boolean;
  }>;
}

// ------------------------------------------------------------------ Vokabeln

export interface VocabDeckDto {
  id: string;
  title: string;
  description: string | null;
  /** Themenzeichen des Stapels – trägt die Kachel in der Übersicht. */
  iconEmoji: string;
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

/** Eine Vokabel samt Lernstand – die Wortliste eines Stapels zeigt beides. */
export interface DeckItemDto extends VocabItemDto {
  /** `null`, solange das Wort noch nie bewertet wurde. */
  status: CardStatus | null;
}

export interface VocabDeckDetailDto extends VocabDeckDto {
  items: DeckItemDto[];
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
  /** Die ersten ein bis zwei Sätze des Fließtexts, als Leseprobe auf den Karten der Übersicht. */
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

/**
 * Ein kuratiertes YouTube-Video. Die App bettet es ein, statt es
 * auszuliefern: Aus `youtubeId` bildet der Client Vorschaubild und
 * Einbettungsadresse selbst (siehe `youtubeThumbnailUrl` / `youtubeEmbedUrl`),
 * damit hier keine Adresse gespeichert werden muss, die YouTube jederzeit
 * ändern kann.
 */
export interface VideoItemDto {
  id: string;
  youtubeId: string;
  title: string;
  channelName: string;
  channelUrl: string;
  durationSec: number;
  level: CefrLevel;
  topic: VideoTopic;
  slowSpeech: boolean;
  language: LanguageDto;
  tags: string[];
  publishedAt: string;
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

/**
 * Korrektur zu einem Beitrag des Lernenden. `text` ist dessen Satz in
 * korrigierter Fassung – vollständig, damit die App ihn gegen das Original
 * stellen und die geänderten Stellen hervorheben kann. `notes` sind kurze
 * Begründungen ("Komma vor „dass“"), höchstens eine Handvoll.
 */
export interface AiCorrectionDto {
  text: string;
  notes: string[];
}

export interface AiMessageDto {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  /** Nur bei Beiträgen des Lernenden: wie der Beitrag entstanden ist. */
  source?: AiMessageSource | null;
  /** Nur bei Beiträgen des Lernenden, und nur wenn es etwas zu verbessern gab. */
  correction?: AiCorrectionDto | null;
  createdAt: string;
}

export type AiMessageSource = 'VOICE' | 'TEXT';

/**
 * Ein Gesprächszug: der Beitrag des Lernenden (samt Korrektur) und die Antwort
 * der KI. Beides kommt zusammen zurück, damit die App den eigenen Beitrag
 * anzeigen kann, ohne den Verlauf neu laden zu müssen.
 */
export interface AiTurnDto {
  userMessage: AiMessageDto;
  reply: AiMessageDto;
}

export interface TranscriptionResultDto {
  text: string;
}

export interface GrammarExplanationDto {
  topic: string;
  explanation: string;
  examples: Array<{ sentence: string; translation: string }>;
  commonMistakes: string[];
  relatedTopics: string[];
}

/** Übersetzung eines markierten Worts oder einer Wendung (siehe `POST /ai/translate`). */
export interface TranslationDto {
  /** Das Markierte, so wie es übersetzt wurde (ohne Rand-Leerzeichen). */
  text: string;
  translation: string;
  alternatives: string[];
  note: string | null;
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

/**
 * Das monatliche KI-Kontingent – ohne Plan, weil es keinen mehr gibt.
 *
 * Die Grenze ist ein Missbrauchsschutz und für alle gleich; sie sagt nichts
 * darüber aus, was jemand bezahlt hat (siehe `AiService.getQuota`).
 */
export interface AiQuotaDto {
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
  continueWatching: VideoItemDto | null;
}
