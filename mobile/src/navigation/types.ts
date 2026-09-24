import type { NavigatorScreenParams } from '@react-navigation/native';
import type { CefrLevel, WorkbookBook } from '@lingua/shared';
import type { TrainerMode } from '../features/vocabulary/trainerModes';

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

/**
 * Eine Übung beginnt in drei Schritten: Übungsart (`DeckList`), Umfang
 * (`TrainerScope`: alle Karten, Kategorien oder Wiederholer) und – nur bei
 * „Kategorien" – die Auswahl der Kategorien (`TrainerCategories`).
 */
export type VocabularyStackParamList = {
  /** Startseite des Trainers und Schritt 1: die Übungsart wählen. */
  DeckList: undefined;
  /** Schritt 2: woraus geübt wird. */
  TrainerScope: { mode: TrainerMode };
  /** Schritt 3: eine oder mehrere Kategorien ankreuzen. */
  TrainerCategories: { mode: TrainerMode };
  /** Die Wortliste einer Kategorie – bei eigenen Kategorien auch zum Bearbeiten. */
  DeckDetail: { deckId: string; title: string };
  /**
   * Eine Lernsitzung. Ohne `deckIds` werden die Karten zufällig aus allen
   * Kategorien gezogen, mit `mistakesOnly` nur aus den falsch beantworteten.
   * Paare (`MATCHING`) laufen über `Match`, nicht hierüber.
   */
  Review: {
    mode: Exclude<TrainerMode, 'MATCHING'>;
    deckIds?: string[];
    mistakesOnly?: boolean;
    title?: string;
  };
  VocabStats: undefined;
  /** Paare finden – Begriffe und Übersetzungen gegen die Uhr zuordnen. */
  Match: { deckIds?: string[]; mistakesOnly?: boolean; title?: string };
};

export type StudyStackParamList = {
  /** Einstieg: Punktestand und die 50 Lektionen des Niveaus; die Bücher sind eine Option darunter. */
  StudyHome: undefined;
  /** Eine Lektion: Lernteil, dann Prüfung mit Punkten, dann weiter zur nächsten. */
  StudyLesson: { lessonId: string };
  /** Das Regal mit den vier Büchern. */
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
  Study: NavigatorScreenParams<StudyStackParamList>;
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
