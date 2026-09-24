import type { NavigatorScreenParams } from '@react-navigation/native';
import type { CefrLevel, WorkbookBook } from '@lingua/shared';
import type { TrainerMode } from '../features/vocabulary/trainerSettings';

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
  /** Startseite des Trainers: Kategorie wählen (oder alle) und direkt loslegen. */
  DeckList: undefined;
  /** Die Wortliste einer Kategorie – bei eigenen Kategorien auch zum Bearbeiten. */
  DeckDetail: { deckId: string; title: string };
  /**
   * Eine Lernsitzung. Ohne `deckId` werden die Karten zufällig aus allen
   * Kategorien gezogen, mit `mistakesOnly` nur aus den falsch beantworteten.
   * Paare (`MATCHING`) laufen über `Match`, nicht hierüber.
   */
  Review: {
    mode: Exclude<TrainerMode, 'MATCHING'>;
    deckId?: string;
    mistakesOnly?: boolean;
    title?: string;
  };
  VocabStats: undefined;
  /** Paare finden – Begriffe und Übersetzungen gegen die Uhr zuordnen. */
  Match: { deckId?: string; title?: string };
};

export type StudyStackParamList = {
  /** Einstieg: Punktestand und Lernsitzungen; die Bücher sind eine Option darunter. */
  StudyHome: undefined;
  /** Eine Lernsitzung: Theorie-, Aufgaben- und Lösungskarten aus einem Buch. */
  StudySession: { book: WorkbookBook };
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
