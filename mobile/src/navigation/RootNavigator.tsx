import React from 'react';
import { Text } from 'react-native';
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Loading } from '../components';
import { colors } from '../theme';
import { useAuthStore } from '../store/auth.store';
import { useTranslation } from '../i18n';
import { WebLayout } from './WebLayout';

import ProfileGateScreen from '../features/welcome/ProfileGateScreen';
import CreateProfileScreen from '../features/welcome/CreateProfileScreen';
import LanguageSelectScreen from '../features/onboarding/LanguageSelectScreen';
import LevelChoiceScreen from '../features/onboarding/LevelChoiceScreen';
import PlacementTestScreen from '../features/onboarding/PlacementTestScreen';
import ReadyScreen from '../features/onboarding/ReadyScreen';
import HomeScreen from '../features/home/HomeScreen';
import DeckListScreen from '../features/vocabulary/DeckListScreen';
import DeckDetailScreen from '../features/vocabulary/DeckDetailScreen';
import ReviewScreen from '../features/vocabulary/ReviewScreen';
import VocabStatsScreen from '../features/vocabulary/VocabStatsScreen';
import MatchGameScreen from '../features/vocabulary/MatchGameScreen';
import BookshelfScreen from '../features/workbook/BookshelfScreen';
import BookContentsScreen from '../features/workbook/BookContentsScreen';
import UnitScreen from '../features/workbook/UnitScreen';
import NotebookListScreen from '../features/notebook/NotebookListScreen';
import NotebookEditorScreen from '../features/notebook/NotebookEditorScreen';
import LibraryListScreen from '../features/library/LibraryListScreen';
import ReaderScreen from '../features/library/ReaderScreen';
import ExercisesScreen from '../features/library/ExercisesScreen';
import VideoListScreen from '../features/videos/VideoListScreen';
import VideoPlayerScreen from '../features/videos/VideoPlayerScreen';
import AiHubScreen from '../features/ai/AiHubScreen';
import AiChatScreen from '../features/ai/AiChatScreen';
import RecommendationsScreen from '../features/ai/RecommendationsScreen';
import ProfileScreen from '../features/profile/ProfileScreen';

import type {
  AiStackParamList,
  LibraryStackParamList,
  MainTabParamList,
  VideoStackParamList,
  NotebookStackParamList,
  OnboardingStackParamList,
  RootStackParamList,
  VocabularyStackParamList,
  WelcomeStackParamList,
} from './types';

const defaultStackOptions = {
  headerStyle: { backgroundColor: colors.surface },
  headerTitleStyle: { color: colors.text, fontSize: 17, fontWeight: '600' as const },
  headerTintColor: colors.primary,
  contentStyle: { backgroundColor: colors.background },
};

// ------------------------------------------------------------------- Stacks

const WelcomeStack = createNativeStackNavigator<WelcomeStackParamList>();

/**
 * Ohne Sitzung: die Profilauswahl – und für den ersten Start der App direkt
 * das Anlegen eines Profils. Welcher Bildschirm zuerst kommt, entscheidet
 * allein die Reihenfolge hier; gibt es noch kein Profil, existiert die
 * Auswahl gar nicht und niemand landet auf einer leeren Liste.
 */
function WelcomeNavigator() {
  const hasProfiles = useAuthStore((state) => state.profiles.length > 0);
  return (
    <WelcomeStack.Navigator screenOptions={{ ...defaultStackOptions, headerShown: false }}>
      {hasProfiles && <WelcomeStack.Screen name="ProfileGate" component={ProfileGateScreen} />}
      <WelcomeStack.Screen name="CreateProfile" component={CreateProfileScreen} />
    </WelcomeStack.Navigator>
  );
}

const OnboardingStack = createNativeStackNavigator<OnboardingStackParamList>();
function OnboardingNavigator() {
  const { t } = useTranslation();
  // Wer die App zwischen Niveauwahl und Startknopf geschlossen hat, hat sein
  // Lernprofil bereits – ihm fehlt nur der letzte Schritt. Ihn noch einmal
  // durch Sprache und Niveau zu schicken, hieße, eine erledigte Wahl erneut
  // abzufragen.
  const hasLearningProfile = useAuthStore((state) => (state.user?.profiles.length ?? 0) > 0);
  return (
    <OnboardingStack.Navigator
      initialRouteName={hasLearningProfile ? 'Ready' : 'LanguageSelect'}
      screenOptions={defaultStackOptions}
    >
      <OnboardingStack.Screen
        name="LanguageSelect"
        component={LanguageSelectScreen}
        options={{ title: t('onboardingLanguageSelect') }}
      />
      <OnboardingStack.Screen
        name="LevelChoice"
        component={LevelChoiceScreen}
        options={{ title: t('onboardingLevelChoice') }}
      />
      <OnboardingStack.Screen
        name="PlacementTest"
        component={PlacementTestScreen}
        options={{ title: t('onboardingPlacementTest') }}
      />
      {/* Der letzte Schritt steht für sich: Zurück führte nur in Entscheidungen,
          die bereits gespeichert sind. */}
      <OnboardingStack.Screen
        name="Ready"
        component={ReadyScreen}
        options={{ headerShown: false }}
      />
    </OnboardingStack.Navigator>
  );
}

const VocabularyStack = createNativeStackNavigator<VocabularyStackParamList>();
function VocabularyNavigator() {
  const { t } = useTranslation();
  return (
    <VocabularyStack.Navigator screenOptions={defaultStackOptions}>
      <VocabularyStack.Screen
        name="DeckList"
        component={DeckListScreen}
        options={{ title: t('vocabularyDeckList') }}
      />
      <VocabularyStack.Screen
        name="DeckDetail"
        component={DeckDetailScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
      <VocabularyStack.Screen
        name="Review"
        component={ReviewScreen}
        options={({ route }) => ({
          title: route.params.title ?? t('vocabularyReviewFallback'),
          headerBackTitle: t('vocabularyReviewBackTitle'),
        })}
      />
      <VocabularyStack.Screen
        name="VocabStats"
        component={VocabStatsScreen}
        options={{ title: t('vocabularyStats') }}
      />
      <VocabularyStack.Screen
        name="Match"
        component={MatchGameScreen}
        options={({ route }) => ({ title: route.params.title ?? t('matchTitle') })}
      />
    </VocabularyStack.Navigator>
  );
}

const NotebookStack = createNativeStackNavigator<NotebookStackParamList>();
function NotebookNavigator() {
  const { t, tBookLabel } = useTranslation();
  return (
    <NotebookStack.Navigator screenOptions={defaultStackOptions}>
      <NotebookStack.Screen
        name="Bookshelf"
        component={BookshelfScreen}
        options={{ title: t('notebookBookshelf') }}
      />
      <NotebookStack.Screen
        name="BookContents"
        component={BookContentsScreen}
        options={({ route }) => ({ title: tBookLabel(route.params.book) })}
      />
      <NotebookStack.Screen
        name="Unit"
        component={UnitScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
      <NotebookStack.Screen
        name="NotebookList"
        component={NotebookListScreen}
        options={{ title: t('notebookList') }}
      />
      <NotebookStack.Screen
        name="NotebookEditor"
        component={NotebookEditorScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
    </NotebookStack.Navigator>
  );
}

const LibraryStack = createNativeStackNavigator<LibraryStackParamList>();
function LibraryNavigator() {
  const { t } = useTranslation();
  return (
    <LibraryStack.Navigator screenOptions={defaultStackOptions}>
      <LibraryStack.Screen
        name="LibraryList"
        component={LibraryListScreen}
        options={{ title: t('libraryList') }}
      />
      {/* Der Leser bringt seine eigene Kopfleiste mit (siehe `ReaderChrome`):
          Sie trägt die Farbe des gewählten Papiers und verschwindet beim Lesen.
          Eine zweite, weiße Navigationsleiste darüber wäre genau das Stück
          App-Oberfläche, das ein E-Book-Leser nicht hat.

          Aus demselben Grund geht auch die Reiterleiste unten weg – die legt
          allerdings der Tab-Navigator, nicht dieser Stack (siehe
          `hideTabBarOn` weiter unten). */}
      <LibraryStack.Screen
        name="Reader"
        component={ReaderScreen}
        options={{ headerShown: false }}
      />
      <LibraryStack.Screen
        name="Exercises"
        component={ExercisesScreen}
        options={{ title: t('libraryExercises') }}
      />
    </LibraryStack.Navigator>
  );
}

const VideoStack = createNativeStackNavigator<VideoStackParamList>();
function VideoNavigator() {
  const { t } = useTranslation();
  return (
    <VideoStack.Navigator screenOptions={defaultStackOptions}>
      <VideoStack.Screen
        name="VideoList"
        component={VideoListScreen}
        options={{ title: t('videoList') }}
      />
      <VideoStack.Screen
        name="VideoPlayer"
        component={VideoPlayerScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
    </VideoStack.Navigator>
  );
}

const AiStack = createNativeStackNavigator<AiStackParamList>();
function AiNavigator() {
  const { t } = useTranslation();
  return (
    <AiStack.Navigator screenOptions={defaultStackOptions}>
      <AiStack.Screen name="AiHub" component={AiHubScreen} options={{ title: t('aiHub') }} />
      <AiStack.Screen
        name="AiChat"
        component={AiChatScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
      <AiStack.Screen
        name="Recommendations"
        component={RecommendationsScreen}
        options={{ title: t('aiRecommendations') }}
      />
    </AiStack.Navigator>
  );
}

// --------------------------------------------------------------------- Tabs

const Tabs = createBottomTabNavigator<MainTabParamList>();

/** Emoji statt Icon-Font: keine zusätzliche Abhängigkeit, überall verfügbar. */
const tabIcons: Record<keyof MainTabParamList, string> = {
  Home: '🏠',
  Vocabulary: '🗂️',
  Notebook: '📓',
  Library: '📚',
  Videos: '🎧',
  Assistant: '✨',
};

/**
 * Bildschirme, auf denen die Reiterleiste unten stört statt zu helfen.
 *
 * Der Leser ist ein E-Book-Leser: Papierfarbe bis an den Rand, Leisten, die
 * beim Lesen verschwinden. Eine weiße Reiterleiste darunter nahm dem
 * Satzspiegel eine Zeile und bot mitten im Text sieben Absprünge an.
 *
 * Gelöst über den Tab-Navigator und nicht im Stack darunter: Nur der Reiter
 * selbst kann seine Leiste verbergen, und `getFocusedRouteNameFromRoute`
 * nennt ihm den Bildschirm, der gerade oben liegt.
 */
const TAB_BAR_HIDDEN_ON = new Set(['Reader']);

function hideTabBarOn(route: Parameters<typeof getFocusedRouteNameFromRoute>[0]) {
  const focused = getFocusedRouteNameFromRoute(route);
  return focused && TAB_BAR_HIDDEN_ON.has(focused) ? { display: 'none' as const } : undefined;
}

function MainNavigator() {
  const { t } = useTranslation();
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle: [
          { backgroundColor: colors.surface, borderTopColor: colors.border },
          hideTabBarOn(route),
        ],
        // Die Beschriftungen wurden unten abgeschnitten, weil die Standardhöhe
        // die Textzeile nicht mitrechnet. Feste Zeilenhöhe und Luft darunter;
        // bei fünf Spalten reicht die normale Schriftgröße wieder.
        tabBarLabelStyle: { fontSize: 11, lineHeight: 14, paddingBottom: 3 },
        tabBarItemStyle: { paddingTop: 4 },
        tabBarAllowFontScaling: false,
        tabBarIcon: ({ focused }) => (
          <Text style={{ fontSize: 20, opacity: focused ? 1 : 0.55 }}>{tabIcons[route.name]}</Text>
        ),
      })}
    >
      {/* Sechs Reiter, benannt nach dem, was man tut. Jeder bekommt denselben
          Anteil der Breite – dafür darf hier kein Bildschirm stehen, der
          keinen Knopf zeigt: Ein Reiter ohne sichtbaren Knopf belegt in der
          Leiste trotzdem seine Spalte, und die übrigen Symbole rückten
          entsprechend nach links statt gleichmäßig zu stehen. Das Profil sitzt
          deshalb im Root-Stack (siehe `RootNavigator`), nicht hier. */}
      <Tabs.Screen name="Home" component={HomeScreen} options={{ title: t('tabHome') }} />
      <Tabs.Screen name="Vocabulary" component={VocabularyNavigator} options={{ title: t('tabVocabulary') }} />
      <Tabs.Screen name="Notebook" component={NotebookNavigator} options={{ title: t('tabNotebook') }} />
      <Tabs.Screen name="Library" component={LibraryNavigator} options={{ title: t('tabLibrary') }} />
      <Tabs.Screen name="Videos" component={VideoNavigator} options={{ title: t('tabVideos') }} />
      <Tabs.Screen name="Assistant" component={AiNavigator} options={{ title: t('tabAssistant') }} />
    </Tabs.Navigator>
  );
}

// --------------------------------------------------------------------- Root

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const { t } = useTranslation();
  const user = useAuthStore((state) => state.user);
  const isBootstrapping = useAuthStore((state) => state.isBootstrapping);

  if (isBootstrapping) return <Loading label={t('commonAppLoading')} />;

  // Der Navigationsbaum leitet sich vollständig aus dem Sitzungszustand ab –
  // kein imperatives navigate() nach Profilwahl oder Onboarding nötig.
  const target = !user ? 'Welcome' : user.onboardingCompleted ? 'Main' : 'Onboarding';

  return (
    <WebLayout>
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
          {target === 'Welcome' && (
            <RootStack.Screen name="Welcome" component={WelcomeNavigator} />
          )}
          {target === 'Onboarding' && (
            <RootStack.Screen name="Onboarding" component={OnboardingNavigator} />
          )}
          {target === 'Main' && <RootStack.Screen name="Main" component={MainNavigator} />}
          {/* Das Profil liegt über den Reitern statt zwischen ihnen: Es ist
              kein Ort, an dem man lernt, sondern einer, den man aufschlägt und
              wieder zuklappt. Über dem Stack bekommt es eine Kopfleiste mit
              Zurück-Pfeil – vorher führte von dort kein Weg zurück außer einem
              Reiter unten –, und die Leiste selbst behält sechs gleich breite
              Spalten. */}
          {target === 'Main' && (
            <RootStack.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                headerShown: true,
                title: t('tabProfile'),
                ...defaultStackOptions,
              }}
            />
          )}
        </RootStack.Navigator>
      </NavigationContainer>
    </WebLayout>
  );
}
