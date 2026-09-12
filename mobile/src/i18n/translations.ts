/**
 * Übersetzungen für die Menüführung (Tab-Leiste, Bildschirmtitel). Deutsch ist
 * die vollständige Quelle – die anderen Locales müssen jeden Schlüssel aus
 * `de` abdecken (siehe `assertComplete` unten). Inhaltliche Texte (Lektionen,
 * KI-Antworten, …) laufen separat über `utils/translation.ts` und sind hier
 * nicht gemeint.
 */

const de = {
  tabHome: 'Start',
  tabVocabulary: 'Vokabeln',
  tabNotebook: 'Heft',
  tabLibrary: 'Lesen',
  tabMedia: 'Hören',
  tabAssistant: 'KI',
  tabProfile: 'Profil',

  onboardingLanguageSelect: 'Sprache wählen',
  onboardingLevelChoice: 'Dein Niveau',
  onboardingPlacementTest: 'Einstufungstest',

  vocabularyDeckList: 'Vokabeln',
  vocabularyReviewFallback: 'Lernen',
  vocabularyReviewBackTitle: 'Ende',
  vocabularyStats: 'Statistik',

  notebookChapterList: 'Lernheft',
  notebookList: 'Eigene Notizhefte',

  libraryList: 'Bibliothek',
  libraryExercises: 'Übungen',

  mediaList: 'Mediathek',

  aiHub: 'KI-Assistent',
  aiRecommendations: 'Empfehlungen',
} as const;

const en: Record<keyof typeof de, string> = {
  tabHome: 'Home',
  tabVocabulary: 'Vocabulary',
  tabNotebook: 'Notebook',
  tabLibrary: 'Read',
  tabMedia: 'Listen',
  tabAssistant: 'AI',
  tabProfile: 'Profile',

  onboardingLanguageSelect: 'Choose a language',
  onboardingLevelChoice: 'Your level',
  onboardingPlacementTest: 'Placement test',

  vocabularyDeckList: 'Vocabulary',
  vocabularyReviewFallback: 'Practice',
  vocabularyReviewBackTitle: 'Done',
  vocabularyStats: 'Statistics',

  notebookChapterList: 'Workbook',
  notebookList: 'My notebooks',

  libraryList: 'Library',
  libraryExercises: 'Exercises',

  mediaList: 'Media library',

  aiHub: 'AI Assistant',
  aiRecommendations: 'Recommendations',
};

const es: Record<keyof typeof de, string> = {
  tabHome: 'Inicio',
  tabVocabulary: 'Vocabulario',
  tabNotebook: 'Cuaderno',
  tabLibrary: 'Leer',
  tabMedia: 'Escuchar',
  tabAssistant: 'IA',
  tabProfile: 'Perfil',

  onboardingLanguageSelect: 'Elige un idioma',
  onboardingLevelChoice: 'Tu nivel',
  onboardingPlacementTest: 'Prueba de nivel',

  vocabularyDeckList: 'Vocabulario',
  vocabularyReviewFallback: 'Practicar',
  vocabularyReviewBackTitle: 'Terminar',
  vocabularyStats: 'Estadísticas',

  notebookChapterList: 'Cuaderno de ejercicios',
  notebookList: 'Mis cuadernos',

  libraryList: 'Biblioteca',
  libraryExercises: 'Ejercicios',

  mediaList: 'Mediateca',

  aiHub: 'Asistente de IA',
  aiRecommendations: 'Recomendaciones',
};

const fr: Record<keyof typeof de, string> = {
  tabHome: 'Accueil',
  tabVocabulary: 'Vocabulaire',
  tabNotebook: 'Cahier',
  tabLibrary: 'Lire',
  tabMedia: 'Écouter',
  tabAssistant: 'IA',
  tabProfile: 'Profil',

  onboardingLanguageSelect: 'Choisir une langue',
  onboardingLevelChoice: 'Ton niveau',
  onboardingPlacementTest: 'Test de niveau',

  vocabularyDeckList: 'Vocabulaire',
  vocabularyReviewFallback: 'Réviser',
  vocabularyReviewBackTitle: 'Terminer',
  vocabularyStats: 'Statistiques',

  notebookChapterList: "Cahier d'exercices",
  notebookList: 'Mes cahiers',

  libraryList: 'Bibliothèque',
  libraryExercises: 'Exercices',

  mediaList: 'Médiathèque',

  aiHub: 'Assistant IA',
  aiRecommendations: 'Recommandations',
};

const it: Record<keyof typeof de, string> = {
  tabHome: 'Home',
  tabVocabulary: 'Vocabolario',
  tabNotebook: 'Quaderno',
  tabLibrary: 'Leggi',
  tabMedia: 'Ascolta',
  tabAssistant: 'IA',
  tabProfile: 'Profilo',

  onboardingLanguageSelect: 'Scegli una lingua',
  onboardingLevelChoice: 'Il tuo livello',
  onboardingPlacementTest: 'Test di livello',

  vocabularyDeckList: 'Vocabolario',
  vocabularyReviewFallback: 'Esercitati',
  vocabularyReviewBackTitle: 'Fine',
  vocabularyStats: 'Statistiche',

  notebookChapterList: 'Quaderno di esercizi',
  notebookList: 'I miei quaderni',

  libraryList: 'Biblioteca',
  libraryExercises: 'Esercizi',

  mediaList: 'Mediateca',

  aiHub: 'Assistente IA',
  aiRecommendations: 'Consigli',
};

export const translations = { de, en, es, fr, it };

export type SupportedLocale = keyof typeof translations;
export type TranslationKey = keyof typeof de;

export const SUPPORTED_LOCALES = Object.keys(translations) as SupportedLocale[];
