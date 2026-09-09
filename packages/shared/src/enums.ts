export const PLANS = ['FREE', 'PREMIUM'] as const;
export type Plan = (typeof PLANS)[number];

export const USER_ROLES = ['USER', 'EDITOR', 'ADMIN'] as const;
export type UserRole = (typeof USER_ROLES)[number];

/** Lernmodi des Vokabeltrainers. */
export const VOCAB_MODES = [
  'FLASHCARD', // klassische Lernkarte (Selbsteinschätzung)
  'MULTIPLE_CHOICE', // 4 Antwortoptionen
  'TYPING', // Übersetzung eintippen
  'LISTENING', // Audio hören und zuordnen
  'MATCHING', // Paare zuordnen
] as const;
export type VocabMode = (typeof VOCAB_MODES)[number];

/** Bewertung einer Karte nach SM-2 (0–5). Die App mappt auf 4 Buttons. */
export const REVIEW_GRADES = [0, 1, 2, 3, 4, 5] as const;
export type ReviewGrade = (typeof REVIEW_GRADES)[number];

export const CARD_STATUSES = ['NEW', 'LEARNING', 'REVIEW', 'MASTERED'] as const;
export type CardStatus = (typeof CARD_STATUSES)[number];

export const LIBRARY_TYPES = ['ARTICLE', 'STORY'] as const;
export type LibraryType = (typeof LIBRARY_TYPES)[number];

export const EXERCISE_TYPES = ['MULTIPLE_CHOICE', 'TRUE_FALSE', 'OPEN'] as const;
export type ExerciseType = (typeof EXERCISE_TYPES)[number];

export const MEDIA_TYPES = ['PODCAST', 'AUDIO_LESSON', 'DIALOGUE'] as const;
export type MediaType = (typeof MEDIA_TYPES)[number];

export const AI_MODES = ['CHAT', 'DISCUSSION', 'GRAMMAR', 'CORRECTION'] as const;
export type AiMode = (typeof AI_MODES)[number];

export const AI_FEATURES = [
  'NOTEBOOK_ANALYSIS',
  'CHAT',
  'GRAMMAR_EXPLANATION',
  'RECOMMENDATIONS',
] as const;
export type AiFeature = (typeof AI_FEATURES)[number];
