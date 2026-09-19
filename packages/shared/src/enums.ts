export const PLANS = ['FREE', 'PREMIUM'] as const;
export type Plan = (typeof PLANS)[number];

export const USER_ROLES = ['USER', 'EDITOR', 'ADMIN'] as const;
export type UserRole = (typeof USER_ROLES)[number];

/**
 * Wählbare Profil-Icons – bewusst Tiere statt echter Fotos, damit sich jedes
 * Profil (auch von Kindern) ohne Foto-Upload individuell darstellen kann.
 */
export const AVATAR_ICONS = [
  { id: 'fox', emoji: '🦊' },
  { id: 'owl', emoji: '🦉' },
  { id: 'cat', emoji: '🐱' },
  { id: 'dog', emoji: '🐶' },
  { id: 'panda', emoji: '🐼' },
  { id: 'koala', emoji: '🐨' },
  { id: 'lion', emoji: '🦁' },
  { id: 'penguin', emoji: '🐧' },
  { id: 'frog', emoji: '🐸' },
  { id: 'rabbit', emoji: '🐰' },
  { id: 'turtle', emoji: '🐢' },
  { id: 'octopus', emoji: '🐙' },
] as const;
export const AVATAR_ICON_IDS = AVATAR_ICONS.map((icon) => icon.id);
export type AvatarIconId = (typeof AVATAR_ICONS)[number]['id'];

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

export const VIDEO_TOPICS = [
  'EVERYDAY',
  'STREET_INTERVIEW',
  'GRAMMAR',
  'VOCABULARY',
  'CULTURE',
] as const;
export type VideoTopic = (typeof VIDEO_TOPICS)[number];

export const AI_MODES = ['CHAT', 'DISCUSSION', 'GRAMMAR', 'CORRECTION'] as const;
export type AiMode = (typeof AI_MODES)[number];

export const AI_FEATURES = [
  'NOTEBOOK_ANALYSIS',
  'CHAT',
  'GRAMMAR_EXPLANATION',
  'RECOMMENDATIONS',
] as const;
export type AiFeature = (typeof AI_FEATURES)[number];
