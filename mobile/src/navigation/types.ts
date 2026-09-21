import type { NavigatorScreenParams } from '@react-navigation/native';
import type { CefrLevel, WorkbookBook } from '@lingua/shared';

/** Zentrale Routen-Typen – jede navigation.navigate()-Nutzung ist damit typgeprüft. */

/**
 * Der Weg in die App, solange keine Sitzung besteht: ein Profil wählen oder
 * eines anlegen. Eine Anmeldung mit E-Mail gibt es nicht.
 */
export type WelcomeStackParamList = {
  ProfileGate: undefined;
  CreateProfile: undefined;
};

/** Die Schritte 2 bis 4 des Einrichtens; Schritt 1 liegt im Willkommensteil. */
export type OnboardingStackParamList = {
  LanguageSelect: undefined;
  LevelChoice: { languageId: string; languageName: string };
  PlacementTest: { languageId: string; languageName: string };
  Ready: undefined;
};

export type VocabularyStackParamList = {
  DeckList: undefined;
  DeckDetail: { deckId: string; title: string };
  /**
   * Ohne `deckId` gilt die Sitzung für ein ganzes Niveau. `queueType` legt
   * fest, welchen der drei Stapel der Nutzer gewählt hat: neue Vokabeln
   * (fünf Bedeutungsvorschläge je Wort), den Wiederholen-Stapel (fällige
   * Karten) oder den Gelernt-Stapel (bereits gemeisterte Karten zum
   * Auffrischen). `ALL` gilt nur für eigene Decks: das ganze, kleine Deck auf
   * einmal, immer umdrehbar statt Mehrfachauswahl (siehe
   * `VocabularyService.ownDeckQueue`).
   */
  Review: {
    deckId?: string;
    level?: CefrLevel;
    queueType?: 'NEW' | 'DUE' | 'MASTERED' | 'ALL';
    title?: string;
  };
  VocabStats: undefined;
};

export type NotebookStackParamList = {
  /** Einstieg: das Regal mit den vier Büchern. */
  Bookshelf: undefined;
  /** Das Inhaltsverzeichnis eines Buchs – Kapitel mit allen Seiten. */
  BookContents: { book: WorkbookBook };
  Unit: { unitId: string; title: string };
  NotebookList: undefined;
  NotebookEditor: { notebookId: string; title: string };
};

export type LibraryStackParamList = {
  LibraryList: undefined;
  Reader: { contentId: string; title: string };
  Exercises: { contentId: string; title: string };
};

/** Die Mediathek: eine Auswahl fremder YouTube-Videos zur Lernsprache. */
export type VideoStackParamList = {
  VideoList: undefined;
  VideoPlayer: { videoId: string; title: string };
};

export type AiStackParamList = {
  AiHub: undefined;
  AiChat: { conversationId: string; title: string; languageCode?: string };
  Recommendations: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Vocabulary: NavigatorScreenParams<VocabularyStackParamList>;
  Notebook: NavigatorScreenParams<NotebookStackParamList>;
  Library: NavigatorScreenParams<LibraryStackParamList>;
  Videos: NavigatorScreenParams<VideoStackParamList>;
  Assistant: NavigatorScreenParams<AiStackParamList>;
};

export type RootStackParamList = {
  Welcome: NavigatorScreenParams<WelcomeStackParamList>;
  Onboarding: NavigatorScreenParams<OnboardingStackParamList>;
  Main: NavigatorScreenParams<MainTabParamList>;
  /** Liegt über den Reitern, nicht zwischen ihnen – siehe `RootNavigator`. */
  Profile: undefined;
};

export type LevelFilter = CefrLevel | 'ALL';
