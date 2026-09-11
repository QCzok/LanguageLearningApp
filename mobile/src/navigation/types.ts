import type { NavigatorScreenParams } from '@react-navigation/native';
import type { CefrLevel } from '@lingua/shared';

/** Zentrale Routen-Typen – jede navigation.navigate()-Nutzung ist damit typgeprüft. */

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

export type OnboardingStackParamList = {
  LanguageSelect: undefined;
  LevelChoice: { languageId: string; languageName: string };
  PlacementTest: { languageId: string; languageName: string };
  PlacementResult: { languageId: string };
};

export type VocabularyStackParamList = {
  DeckList: undefined;
  DeckDetail: { deckId: string; title: string };
  /**
   * Ohne `deckId` gilt die Sitzung für ein ganzes Niveau. `queueType` legt
   * fest, welchen der drei Stapel der Nutzer gewählt hat: neue Vokabeln
   * (fünf Bedeutungsvorschläge je Wort), den Wiederholen-Stapel (fällige
   * Karten) oder den Gelernt-Stapel (bereits gemeisterte Karten zum
   * Auffrischen).
   */
  Review: {
    deckId?: string;
    level?: CefrLevel;
    queueType?: 'NEW' | 'DUE' | 'MASTERED';
    title?: string;
  };
  VocabStats: undefined;
};

export type NotebookStackParamList = {
  /** Einstieg: die Kapitelübersicht des Lehrwerks. */
  ChapterList: undefined;
  Chapter: { chapterId: string; title: string };
  Unit: { unitId: string; title: string };
  NotebookList: undefined;
  NotebookEditor: { notebookId: string; title: string };
};

export type LibraryStackParamList = {
  LibraryList: undefined;
  Reader: { contentId: string; title: string };
  Exercises: { contentId: string; title: string };
};

export type MediaStackParamList = {
  MediaList: undefined;
  Player: { mediaId: string; title: string };
};

export type AiStackParamList = {
  AiHub: undefined;
  AiChat: { conversationId: string; title: string };
  Grammar: undefined;
  Recommendations: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Vocabulary: NavigatorScreenParams<VocabularyStackParamList>;
  Notebook: NavigatorScreenParams<NotebookStackParamList>;
  Library: NavigatorScreenParams<LibraryStackParamList>;
  Media: NavigatorScreenParams<MediaStackParamList>;
  Assistant: NavigatorScreenParams<AiStackParamList>;
  Profile: undefined;
};

export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;
  Onboarding: NavigatorScreenParams<OnboardingStackParamList>;
  Main: NavigatorScreenParams<MainTabParamList>;
};

export type LevelFilter = CefrLevel | 'ALL';
