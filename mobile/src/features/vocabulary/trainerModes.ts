import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { VocabMode } from '@lingua/shared';
import type { TranslationKey } from '../../i18n';
import type { VocabularyStackParamList } from '../../navigation/types';

/**
 * Die Übungsarten, aus denen der erste Schritt wählt. `TRANSLATE` ist die
 * Gegenrichtung zur Auswahl (Muttersprache → Lernsprache); `MIX` verteilt
 * die Karten einer Sitzung fest auf alle übrigen.
 */
export type TrainerMode =
  | 'MULTIPLE_CHOICE'
  | 'TRANSLATE'
  | 'MATCHING'
  | 'SPEAKING'
  | 'SENTENCE_ORDER'
  | 'WORD_BUILD'
  | 'MIX';

export const TRAINER_MODES: TrainerMode[] = [
  'MULTIPLE_CHOICE',
  'TRANSLATE',
  'MATCHING',
  'SPEAKING',
  'SENTENCE_ORDER',
  'WORD_BUILD',
  'MIX',
];

export const MODE_KEYS: Record<TrainerMode, { title: TranslationKey; hint: TranslationKey }> = {
  MULTIPLE_CHOICE: { title: 'trainerModeChoice', hint: 'trainerModeChoiceHint' },
  TRANSLATE: { title: 'trainerModeTranslate', hint: 'trainerModeTranslateHint' },
  MATCHING: { title: 'matchTitle', hint: 'matchTeaser' },
  SPEAKING: { title: 'trainerModeSpeaking', hint: 'trainerModeSpeakingHint' },
  SENTENCE_ORDER: { title: 'trainerModeSentence', hint: 'trainerModeSentenceHint' },
  WORD_BUILD: { title: 'trainerModeWordBuild', hint: 'trainerModeWordBuildHint' },
  MIX: { title: 'trainerModeMix', hint: 'trainerModeMixHint' },
};

/**
 * Die Lernmodi, die der Server auf die Karten verteilt. Ohne Spracherkennung
 * fällt Aussprechen aus dem Mix heraus, statt als Auswahlkarte zu enden –
 * sonst bestünde ein Mix im Browser fast nur aus Auswahl.
 */
export function queueModes(mode: Exclude<TrainerMode, 'MATCHING'>, speechAvailable: boolean): VocabMode[] {
  if (mode !== 'MIX') return [mode];
  const modes: VocabMode[] = ['MULTIPLE_CHOICE', 'TRANSLATE', 'MATCHING', 'SENTENCE_ORDER', 'WORD_BUILD'];
  return speechAvailable ? [...modes, 'SPEAKING'] : modes;
}

export interface TrainingScope {
  /** Leer oder fehlend: zufällig aus allen Kategorien. */
  deckIds?: string[];
  mistakesOnly?: boolean;
  title: string;
}

/** Der letzte Schritt: die Sitzung der gewählten Übungsart öffnen. */
export function startTraining(
  navigation: NativeStackNavigationProp<VocabularyStackParamList>,
  mode: TrainerMode,
  scope: TrainingScope,
) {
  if (mode === 'MATCHING') navigation.navigate('Match', scope);
  else navigation.navigate('Review', { mode, ...scope });
}
