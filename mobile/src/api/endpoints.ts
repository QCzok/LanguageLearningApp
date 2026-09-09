import type {
  AiConversationDto,
  ChapterDetailDto,
  ChapterSummaryDto,
  AiMessageDto,
  AiQuotaDto,
  AuthResponse,
  CefrLevel,
  DashboardDto,
  ExerciseResultDto,
  GrammarExplanationDto,
  LanguageDto,
  LearningProfileDto,
  LibraryContentDto,
  MediaItemDto,
  NotebookAnalysisDto,
  NotebookDto,
  NotebookPageContent,
  NotebookPageDto,
  Paginated,
  PlacementQuestionDto,
  PlacementResultDto,
  RecommendationDto,
  ReviewCardDto,
  NotebookPageContent as AnnotationContent,
  UnitAnswers,
  UnitCheckResult,
  UnitDetailDto,
  UserDto,
  VocabDeckDto,
  VocabItemDto,
  VocabMode,
  VocabStatsDto,
} from '@lingua/shared';
import { api } from './client';

/**
 * Typisierte Hülle um alle Backend-Routen. Die Screens rufen ausschließlich hier
 * auf und kennen weder URLs noch axios – ein Vertragswechsel wird an einer Stelle
 * nachgezogen.
 */
export const authApi = {
  register: (body: { email: string; password: string; displayName: string }) =>
    api.post<AuthResponse>('/auth/register', body).then((r) => r.data),
  login: (body: { email: string; password: string }) =>
    api.post<AuthResponse>('/auth/login', body).then((r) => r.data),
  logout: (refreshToken: string) => api.post('/auth/logout', { refreshToken }),
};

export const usersApi = {
  me: () => api.get<UserDto>('/users/me').then((r) => r.data),
  update: (body: { displayName?: string; nativeLanguage?: string }) =>
    api.patch<UserDto>('/users/me', body).then((r) => r.data),
  setLearningProfile: (body: {
    languageId: string;
    level: CefrLevel;
    levelSource?: 'SELF_SELECTED' | 'PLACEMENT_TEST';
    dailyGoalMinutes?: number;
  }) => api.post<LearningProfileDto>('/users/me/learning-profiles', body).then((r) => r.data),
  activateProfile: (id: string) =>
    api.post<LearningProfileDto>(`/users/me/learning-profiles/${id}/activate`).then((r) => r.data),
  completeOnboarding: () => api.post<UserDto>('/users/me/complete-onboarding').then((r) => r.data),
};

export const languagesApi = {
  list: () => api.get<LanguageDto[]>('/languages').then((r) => r.data),
};

export const placementApi = {
  getTest: (languageId: string) =>
    api
      .get<PlacementQuestionDto[]>('/placement/test', { params: { languageId } })
      .then((r) => r.data),
  submit: (body: {
    languageId: string;
    answers: Array<{ questionId: string; selectedIndex: number }>;
  }) => api.post<PlacementResultDto>('/placement/submit', body).then((r) => r.data),
};

export const vocabularyApi = {
  decks: (params?: { level?: CefrLevel }) =>
    api.get<VocabDeckDto[]>('/vocabulary/decks', { params }).then((r) => r.data),
  deck: (id: string) =>
    api.get<VocabDeckDto & { items: VocabItemDto[] }>(`/vocabulary/decks/${id}`).then((r) => r.data),
  queue: (params?: {
    deckId?: string;
    level?: CefrLevel;
    limit?: number;
    /** Wie viele neue (nie gesehene) Karten geladen werden. */
    newLimit?: number;
    /** Wie viele fällige Karten geladen werden – 0 blendet den Wiederholen-Stapel aus. */
    dueLimit?: number;
    mode?: VocabMode;
  }) => api.get<ReviewCardDto[]>('/vocabulary/review/queue', { params }).then((r) => r.data),
  review: (body: { cardId: string; grade: number; mode: string; durationMs?: number }) =>
    api
      .post<{
        cardId: string;
        dueAt: string;
        intervalDays: number;
        correct: boolean;
        xpEarned: number;
      }>('/vocabulary/review', body)
      .then((r) => r.data),
  stats: () => api.get<VocabStatsDto>('/vocabulary/stats').then((r) => r.data),
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
  chapters: (params?: { level?: CefrLevel; includeUnpublished?: boolean }) =>
    api.get<ChapterSummaryDto[]>('/workbook/chapters', { params }).then((r) => r.data),
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

export const mediaApi = {
  list: (params: { level?: CefrLevel; type?: string; search?: string; page?: number }) =>
    api.get<Paginated<MediaItemDto>>('/media', { params }).then((r) => r.data),
  detail: (id: string) => api.get<MediaItemDto>(`/media/${id}`).then((r) => r.data),
  saveProgress: (id: string, body: { positionSec: number; minutesListened?: number }) =>
    api.put(`/media/${id}/progress`, body),
};

export const aiApi = {
  quota: () => api.get<AiQuotaDto>('/ai/quota').then((r) => r.data),
  conversations: () => api.get<AiConversationDto[]>('/ai/conversations').then((r) => r.data),
  createConversation: (body: { mode?: string; topic?: string; title?: string }) =>
    api.post<AiConversationDto>('/ai/conversations', body).then((r) => r.data),
  messages: (id: string) =>
    api.get<AiMessageDto[]>(`/ai/conversations/${id}/messages`).then((r) => r.data),
  send: (id: string, content: string) =>
    api.post<AiMessageDto>(`/ai/conversations/${id}/messages`, { content }).then((r) => r.data),
  grammar: (question: string) =>
    api.post<GrammarExplanationDto>('/ai/grammar', { question }).then((r) => r.data),
  recommendations: () => api.get<RecommendationDto>('/ai/recommendations').then((r) => r.data),
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

export const subscriptionApi = {
  status: () =>
    api
      .get<{ plan: 'FREE' | 'PREMIUM'; active: boolean; premiumUntil: string | null }>(
        '/subscription/status',
      )
      .then((r) => r.data),
  activate: () =>
    api
      .post<{ plan: string; premiumUntil: string }>('/subscription/activate', { source: 'DEV' })
      .then((r) => r.data),
};
