import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Loading } from '../components';
import { colors } from '../theme';
import { useAuthStore } from '../store/auth.store';
import { WebLayout } from './WebLayout';

import LoginScreen from '../features/auth/LoginScreen';
import RegisterScreen from '../features/auth/RegisterScreen';
import LanguageSelectScreen from '../features/onboarding/LanguageSelectScreen';
import LevelChoiceScreen from '../features/onboarding/LevelChoiceScreen';
import PlacementTestScreen from '../features/onboarding/PlacementTestScreen';
import HomeScreen from '../features/home/HomeScreen';
import DeckListScreen from '../features/vocabulary/DeckListScreen';
import DeckDetailScreen from '../features/vocabulary/DeckDetailScreen';
import ReviewScreen from '../features/vocabulary/ReviewScreen';
import VocabStatsScreen from '../features/vocabulary/VocabStatsScreen';
import ChapterListScreen from '../features/workbook/ChapterListScreen';
import ChapterScreen from '../features/workbook/ChapterScreen';
import UnitScreen from '../features/workbook/UnitScreen';
import NotebookListScreen from '../features/notebook/NotebookListScreen';
import NotebookEditorScreen from '../features/notebook/NotebookEditorScreen';
import LibraryListScreen from '../features/library/LibraryListScreen';
import ReaderScreen from '../features/library/ReaderScreen';
import ExercisesScreen from '../features/library/ExercisesScreen';
import MediaListScreen from '../features/media/MediaListScreen';
import PlayerScreen from '../features/media/PlayerScreen';
import AiHubScreen from '../features/ai/AiHubScreen';
import AiChatScreen from '../features/ai/AiChatScreen';
import GrammarScreen from '../features/ai/GrammarScreen';
import RecommendationsScreen from '../features/ai/RecommendationsScreen';
import ProfileScreen from '../features/profile/ProfileScreen';

import type {
  AiStackParamList,
  AuthStackParamList,
  LibraryStackParamList,
  MainTabParamList,
  MediaStackParamList,
  NotebookStackParamList,
  OnboardingStackParamList,
  RootStackParamList,
  VocabularyStackParamList,
} from './types';

const defaultStackOptions = {
  headerStyle: { backgroundColor: colors.surface },
  headerTitleStyle: { color: colors.text, fontSize: 17, fontWeight: '600' as const },
  headerTintColor: colors.primary,
  contentStyle: { backgroundColor: colors.background },
};

// ------------------------------------------------------------------- Stacks

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
function AuthNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ ...defaultStackOptions, headerShown: false }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
}

const OnboardingStack = createNativeStackNavigator<OnboardingStackParamList>();
function OnboardingNavigator() {
  return (
    <OnboardingStack.Navigator screenOptions={defaultStackOptions}>
      <OnboardingStack.Screen
        name="LanguageSelect"
        component={LanguageSelectScreen}
        options={{ title: 'Sprache wählen' }}
      />
      <OnboardingStack.Screen
        name="LevelChoice"
        component={LevelChoiceScreen}
        options={{ title: 'Dein Niveau' }}
      />
      <OnboardingStack.Screen
        name="PlacementTest"
        component={PlacementTestScreen}
        options={{ title: 'Einstufungstest' }}
      />
    </OnboardingStack.Navigator>
  );
}

const VocabularyStack = createNativeStackNavigator<VocabularyStackParamList>();
function VocabularyNavigator() {
  return (
    <VocabularyStack.Navigator screenOptions={defaultStackOptions}>
      <VocabularyStack.Screen
        name="DeckList"
        component={DeckListScreen}
        options={{ title: 'Vokabeln' }}
      />
      <VocabularyStack.Screen
        name="DeckDetail"
        component={DeckDetailScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
      <VocabularyStack.Screen
        name="Review"
        component={ReviewScreen}
        options={({ route }) => ({ title: route.params.title ?? 'Lernen', headerBackTitle: 'Ende' })}
      />
      <VocabularyStack.Screen
        name="VocabStats"
        component={VocabStatsScreen}
        options={{ title: 'Statistik' }}
      />
    </VocabularyStack.Navigator>
  );
}

const NotebookStack = createNativeStackNavigator<NotebookStackParamList>();
function NotebookNavigator() {
  return (
    <NotebookStack.Navigator screenOptions={defaultStackOptions}>
      <NotebookStack.Screen
        name="ChapterList"
        component={ChapterListScreen}
        options={{ title: 'Lernheft' }}
      />
      <NotebookStack.Screen
        name="Chapter"
        component={ChapterScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
      <NotebookStack.Screen
        name="Unit"
        component={UnitScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
      <NotebookStack.Screen
        name="NotebookList"
        component={NotebookListScreen}
        options={{ title: 'Eigene Notizhefte' }}
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
  return (
    <LibraryStack.Navigator screenOptions={defaultStackOptions}>
      <LibraryStack.Screen
        name="LibraryList"
        component={LibraryListScreen}
        options={{ title: 'Bibliothek' }}
      />
      <LibraryStack.Screen
        name="Reader"
        component={ReaderScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
      <LibraryStack.Screen
        name="Exercises"
        component={ExercisesScreen}
        options={{ title: 'Übungen' }}
      />
    </LibraryStack.Navigator>
  );
}

const MediaStack = createNativeStackNavigator<MediaStackParamList>();
function MediaNavigator() {
  return (
    <MediaStack.Navigator screenOptions={defaultStackOptions}>
      <MediaStack.Screen
        name="MediaList"
        component={MediaListScreen}
        options={{ title: 'Mediathek' }}
      />
      <MediaStack.Screen
        name="Player"
        component={PlayerScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
    </MediaStack.Navigator>
  );
}

const AiStack = createNativeStackNavigator<AiStackParamList>();
function AiNavigator() {
  return (
    <AiStack.Navigator screenOptions={defaultStackOptions}>
      <AiStack.Screen name="AiHub" component={AiHubScreen} options={{ title: 'KI-Assistent' }} />
      <AiStack.Screen
        name="AiChat"
        component={AiChatScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
      <AiStack.Screen name="Grammar" component={GrammarScreen} options={{ title: 'Erklären' }} />
      <AiStack.Screen
        name="Recommendations"
        component={RecommendationsScreen}
        options={{ title: 'Empfehlungen' }}
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
  Media: '🎧',
  Assistant: '✨',
  Profile: '👤',
};

function MainNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle: { backgroundColor: colors.surface, borderTopColor: colors.border },
        tabBarLabelStyle: { fontSize: 11 },
        tabBarIcon: ({ focused }) => (
          <Text style={{ fontSize: 20, opacity: focused ? 1 : 0.55 }}>{tabIcons[route.name]}</Text>
        ),
      })}
    >
      <Tabs.Screen name="Home" component={HomeScreen} options={{ title: 'Start' }} />
      <Tabs.Screen name="Vocabulary" component={VocabularyNavigator} options={{ title: 'Vokabeln' }} />
      <Tabs.Screen name="Notebook" component={NotebookNavigator} options={{ title: 'Heft' }} />
      <Tabs.Screen name="Library" component={LibraryNavigator} options={{ title: 'Lesen' }} />
      <Tabs.Screen name="Media" component={MediaNavigator} options={{ title: 'Hören' }} />
      <Tabs.Screen name="Assistant" component={AiNavigator} options={{ title: 'KI' }} />
      <Tabs.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profil' }} />
    </Tabs.Navigator>
  );
}

// --------------------------------------------------------------------- Root

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const user = useAuthStore((state) => state.user);
  const isBootstrapping = useAuthStore((state) => state.isBootstrapping);

  if (isBootstrapping) return <Loading label="Lingua wird geladen …" />;

  // Der Navigationsbaum leitet sich vollständig aus dem Auth-Zustand ab –
  // kein imperatives navigate() nach Login oder Onboarding nötig.
  const target = !user ? 'Auth' : user.onboardingCompleted ? 'Main' : 'Onboarding';

  return (
    <WebLayout>
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
          {target === 'Auth' && <RootStack.Screen name="Auth" component={AuthNavigator} />}
          {target === 'Onboarding' && (
            <RootStack.Screen name="Onboarding" component={OnboardingNavigator} />
          )}
          {target === 'Main' && <RootStack.Screen name="Main" component={MainNavigator} />}
        </RootStack.Navigator>
      </NavigationContainer>
    </WebLayout>
  );
}
