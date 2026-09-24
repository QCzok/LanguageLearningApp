import type {
  AiConversationDto,
  AiMessageDto,
  AiMessageSource,
  AiTurnDto,
  AiQuotaDto,
  AuthResponse,
  AvatarIconId,
  BookDetailDto,
  BookSummaryDto,
  CefrLevel,
  ChapterDetailDto,
  DashboardDto,
  ExerciseResultDto,
  GuestAuthResponse,
  LanguageDto,
  LearningProfileDto,
  LibraryContentDto,
  NotebookAnalysisDto,
  NotebookDto,
  NotebookPageContent,
  NotebookPageDto,
  Paginated,
  PlacementQuestionDto,
  PlacementResultDto,
  PlacementStageResultDto,
  RecommendationDto,
  ReviewCardDto,
  NotebookPageContent as AnnotationContent,
  UnitAnswers,
  UnitCheckResult,
  UnitDetailDto,
  TranslationDto,
  UserDto,
  VideoItemDto,
  VideoTopic,
  VocabDeckDetailDto,
  VocabDeckDto,
  VocabItemDto,
  VocabDirection,
  VocabMode,
  VocabStatsDto,
  SubmitReviewResultDto,
  WorkbookBook,
} from '@lingua/shared';
import { api } from './client';

/**
 * Typisierte Hülle um alle Backend-Routen. Die Screens rufen ausschließlich hier
 * auf und kennen weder URLs noch axios – ein Vertragswechsel wird an einer Stelle
 * nachgezogen.
 */
export const authApi = {
  register: (body: {
    email: string;
    password: string;
    displayName: string;
    /** Muttersprache beim Anlegen – bestimmt die Menüsprache (siehe `auth.store`). */
    nativeLanguage?: string;
  }) =>
    api.post<AuthResponse>('/auth/register', body).then((r) => r.data),
  /**
   * Legt ein Profil ohne Registrierung an. Die zurückgegebenen Zugangsdaten
   * verwahrt das Gerät (siehe `device-profiles`) und meldet das Profil damit
   * später über `login` wieder an.
   */
  guest: (body: { displayName: string; avatarIcon?: AvatarIconId; nativeLanguage?: string }) =>
    api.post<GuestAuthResponse>('/auth/guest', body).then((r) => r.data),
  login: (body: { email: string; password: string }) =>
    api.post<AuthResponse>('/auth/login', body).then((r) => r.data),
  logout: (refreshToken: string) => api.post('/auth/logout', { refreshToken }),
};

export const usersApi = {
  me: () => api.get<UserDto>('/users/me').then((r) => r.data),
  update: (body: { displayName?: string; nativeLanguage?: string; avatarIcon?: AvatarIconId }) =>
    api.patch<UserDto>('/users/me', body).then((r) => r.data),
  setLearningProfile: (body: {
    languageId: string;
    level: CefrLevel;
    levelSource?: 'SELF_SELECTED' | 'PLACEMENT_TEST';
    dailyGoalMinutes?: number;
    isActive?: boolean;
  }) => api.post<LearningProfileDto>('/users/me/learning-profiles', body).then((r) => r.data),
  activateProfile: (id: string) =>
    api.post<LearningProfileDto>(`/users/me/learning-profiles/${id}/activate`).then((r) => r.data),
  completeOnboarding: () => api.post<UserDto>('/users/me/complete-onboarding').then((r) => r.data),
  deleteAccount: () => api.delete('/users/me'),
};

export const languagesApi = {
  list: () => api.get<LanguageDto[]>('/languages').then((r) => r.data),
};

export const placementApi = {
  getTest: (languageId: string) =>
    api
      .get<PlacementQuestionDto[]>('/placement/test', { params: { languageId } })
      .then((r) => r.data),
  /** Eine Stufe auswerten: Hat es für die nächste gereicht? */
  stage: (body: {
    languageId: string;
    answers: Array<{ questionId: string; selectedIndex: number }>;
  }) => api.post<PlacementStageResultDto>('/placement/stage', body).then((r) => r.data),
  submit: (body: {
    languageId: string;
    answers: Array<{ questionId: string; selectedIndex: number }>;
  }) => api.post<PlacementResultDto>('/placement/submit', body).then((r) => r.data),
};

export const vocabularyApi = {
  decks: (params?: { level?: CefrLevel }) =>
    api.get<VocabDeckDto[]>('/vocabulary/decks', { params }).then((r) => r.data),
  deck: (id: string) =>
    api
      .get<VocabDeckDetailDto>(`/vocabulary/decks/${id}`)
      .then((r) => r.data),
  queue: (params?: {
    /** Nur diese Kategorie – ohne: zufällig aus allen. */
    deckId?: string;
    limit?: number;
    /** Nur Karten, deren letzte Antwort falsch war – der Fehler-Stapel. */
    onlyNeedsRepeat?: boolean;
    /** Ohne: gemischt aus Auswahl, Paaren und Aussprechen. */
    mode?: VocabMode;
    /** Lernsprache → Muttersprache (FORWARD), umgekehrt (REVERSE) oder je Karte zufällig. */
    direction?: VocabDirection;
  }) => api.get<ReviewCardDto[]>('/vocabulary/review/queue', { params }).then((r) => r.data),
  review: (body: {
    cardId: string;
    grade: number;
    mode: string;
    durationMs?: number;
    /** Richtige Antworten in Folge vor dieser Karte – bringt Bonus-XP. */
    combo?: number;
  }) => api.post<SubmitReviewResultDto>('/vocabulary/review', body).then((r) => r.data),
  stats: () => api.get<VocabStatsDto>('/vocabulary/stats').then((r) => r.data),
  createDeck: (body: {
    languageId: string;
    level: CefrLevel;
    title: string;
    description?: string;
    iconEmoji?: string;
  }) => api.post<VocabDeckDto>('/vocabulary/decks', body).then((r) => r.data),
  addItem: (
    deckId: string,
    body: {
      term: string;
      translation: string;
      phonetic?: string;
      partOfSpeech?: string;
      exampleSentence?: string;
      exampleTranslation?: string;
    },
  ) => api.post<VocabItemDto>(`/vocabulary/decks/${deckId}/items`, body).then((r) => r.data),
  updateItem: (
    itemId: string,
    body: {
      term?: string;
      translation?: string;
      phonetic?: string;
      partOfSpeech?: string;
      exampleSentence?: string;
      exampleTranslation?: string;
    },
  ) => api.patch<VocabItemDto>(`/vocabulary/items/${itemId}`, body).then((r) => r.data),
  deleteItem: (itemId: string) => api.delete(`/vocabulary/items/${itemId}`),
};

export const notebookApi = {
  list: () => api.get<NotebookDto[]>('/notebooks').then((r) => r.data),
  create: (body: { title: string; coverColor?: string; languageId?: string }) =>
    api.post<NotebookDto>('/notebooks', body).then((r) => r.data),
  remove: (id: string) => api.delete(`/notebooks/${id}`),
  pages: (notebookId: string) =>
    api.get<NotebookPageDto[]>(`/notebooks/${notebookId}/pages`).then((r) => r.data),
  createPage: (notebookId: string, body?: { background?: string }) =>
    api.post<NotebookPageDto>(`/notebooks/${notebookId}/pages`, body ?? {}).then((r) => r.data),
  savePage: (pageId: string, body: { content: NotebookPageContent }) =>
    api.patch<NotebookPageDto>(`/notebooks/pages/${pageId}`, body).then((r) => r.data),
  deletePage: (pageId: string) => api.delete(`/notebooks/pages/${pageId}`),
  analyze: (pageId: string) =>
    api.post<NotebookAnalysisDto>(`/notebooks/pages/${pageId}/analyze`).then((r) => r.data),
};

export const workbookApi = {
  /** Das Regal: die vier Bücher mit Stand und Einstiegsseite. */
  books: () => api.get<BookSummaryDto[]>('/workbook/books').then((r) => r.data),
  /** Das Inhaltsverzeichnis eines Buchs – Kapitel samt Seiten in einer Antwort. */
  bookContents: (book: WorkbookBook) =>
    api.get<BookDetailDto>(`/workbook/books/${book}`).then((r) => r.data),
  chapter: (id: string) =>
    api.get<ChapterDetailDto>(`/workbook/chapters/${id}`).then((r) => r.data),
  unit: (id: string) => api.get<UnitDetailDto>(`/workbook/units/${id}`).then((r) => r.data),
  saveAnswers: (id: string, answers: UnitAnswers) =>
    api.put(`/workbook/units/${id}/answers`, { answers }),
  saveAnnotations: (id: string, annotations: AnnotationContent) =>
    api.put(`/workbook/units/${id}/annotations`, { annotations }),
  /** Ohne blockIds gilt der Aufruf als Abgabe der ganzen Einheit. */
  check: (id: string, answers: UnitAnswers, blockIds?: string[]) =>
    api
      .post<UnitCheckResult>(`/workbook/units/${id}/check`, { answers, blockIds })
      .then((r) => r.data),
  complete: (id: string) =>
    api
      .post<{ status: string; xpEarned: number }>(`/workbook/units/${id}/complete`)
      .then((r) => r.data),
  reset: (id: string) => api.post(`/workbook/units/${id}/reset`),
};

export const libraryApi = {
  list: (params: { level?: CefrLevel; type?: string; search?: string; page?: number }) =>
    api.get<Paginated<LibraryContentDto>>('/library', { params }).then((r) => r.data),
  detail: (id: string) => api.get<LibraryContentDto>(`/library/${id}`).then((r) => r.data),
  saveProgress: (id: string, body: { progressPercent: number; minutesRead?: number }) =>
    api.put(`/library/${id}/progress`, body),
  submitExercises: (
    id: string,
    body: { answers: Array<{ exerciseId: string; selectedIndex?: number; text?: string }> },
  ) => api.post<ExerciseResultDto>(`/library/${id}/exercises/submit`, body).then((r) => r.data),
};

export const videosApi = {
  list: (params: {
    level?: CefrLevel;
    topic?: VideoTopic;
    slowSpeech?: true;
    search?: string;
    page?: number;
  }) => api.get<Paginated<VideoItemDto>>('/videos', { params }).then((r) => r.data),
  detail: (id: string) => api.get<VideoItemDto>(`/videos/${id}`).then((r) => r.data),
  saveProgress: (
    id: string,
    body: { positionSec: number; completed?: boolean; minutesWatched?: number },
  ) => api.put(`/videos/${id}/progress`, body),
};

export const aiApi = {
  quota: () => api.get<AiQuotaDto>('/ai/quota').then((r) => r.data),
  conversations: () => api.get<AiConversationDto[]>('/ai/conversations').then((r) => r.data),
  createConversation: (body: { mode?: string; topic?: string; title?: string }) =>
    api.post<AiConversationDto>('/ai/conversations', body).then((r) => r.data),
  messages: (id: string) =>
    api.get<AiMessageDto[]>(`/ai/conversations/${id}/messages`).then((r) => r.data),
  send: (id: string, content: string, source: AiMessageSource) =>
    api
      .post<AiTurnDto>(`/ai/conversations/${id}/messages`, { content, source })
      .then((r) => r.data),
  recommendations: () => api.get<RecommendationDto>('/ai/recommendations').then((r) => r.data),
  generateVocabDeck: (topic: string) =>
    api.post<VocabDeckDto>('/ai/vocab-decks', { topic }).then((r) => r.data),
  translate: (body: { text: string; context?: string }) =>
    api.post<TranslationDto>('/ai/translate', body).then((r) => r.data),
};

export const progressApi = {
  dashboard: () => api.get<DashboardDto>('/progress/dashboard').then((r) => r.data),
  history: (days = 30) =>
    api
      .get<Array<{ date: string; minutes: number; xp: number; reviews: number }>>(
        '/progress/history',
        { params: { days } },
      )
      .then((r) => r.data),
};


