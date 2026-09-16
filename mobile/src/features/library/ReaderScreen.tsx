import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { useMutation, useQuery } from '@tanstack/react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, ErrorState, LevelBadge, Loading, ProgressBar } from '../../components';
import { libraryApi } from '../../api/endpoints';
import { useTranslation } from '../../i18n';
import {
  colors,
  fontFamily,
  radius,
  reading,
  readingLabel,
  shadow,
  spacing,
  typography,
} from '../../theme';
import type { LibraryStackParamList } from '../../navigation/types';
import { CoverScrim, LibraryCoverArt } from './LibraryCovers';
import { ReadingSection } from './ReadingSection';

type Props = NativeStackScreenProps<LibraryStackParamList, 'Reader'>;

/** Erst ab dieser Änderung wird der Fortschritt erneut gespeichert. */
const PROGRESS_STEP = 10;

/**
 * Die Lesestrecke eines Texts.
 *
 * Aufgebaut wie eine Zeitschriftenseite, nicht wie ein Bildschirm voller
 * Karten: oben ein Titelbild, über das Kicker, Titel und Autor gesetzt sind;
 * darunter der Vorspann; dann der Fließtext auf warmem Papier, mit Initiale
 * am Anfang und einer Schlussvignette am Ende. Zwischen Vorspann und Text
 * sitzt der einzige Bedienstreifen der Seite – Schriftgröße, Restzeit,
 * Übersetzungen –, damit das dort ist, wo man es beim Lesen sucht, und sonst
 * nichts den Text unterbricht.
 */
export default function ReaderScreen({ route, navigation }: Props) {
  const { contentId, title } = route.params;
  const { t } = useTranslation();
  const [progress, setProgress] = useState(0);
  const [sizeStep, setSizeStep] = useState(1);
  const [translationsOpen, setTranslationsOpen] = useState(false);
  const lastSaved = useRef(0);
  const startedAt = useRef(Date.now());

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['library', contentId],
    queryFn: () => libraryApi.detail(contentId),
  });

  const saveProgress = useMutation({
    mutationFn: (payload: { progressPercent: number; minutesRead?: number }) =>
      libraryApi.saveProgress(contentId, payload),
  });

  /**
   * Lesefortschritt aus der Scrollposition. Gespeichert wird in Zehnerschritten,
   * damit nicht jeder Scroll-Frame einen Request auslöst.
   */
  const handleScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
      const scrollable = Math.max(1, contentSize.height - layoutMeasurement.height);
      const percent = Math.min(100, Math.round((contentOffset.y / scrollable) * 100));

      setProgress((previous) => Math.max(previous, percent));

      if (percent - lastSaved.current >= PROGRESS_STEP) {
        lastSaved.current = percent;
        saveProgress.mutate({ progressPercent: percent });
      }
    },
    [saveProgress],
  );

  // Beim Verlassen: Endstand und Lesezeit festhalten.
  useEffect(
    () => () => {
      const minutes = Math.round((Date.now() - startedAt.current) / 60_000);
      if (progress > lastSaved.current || minutes > 0) {
        saveProgress.mutate({ progressPercent: progress, minutesRead: minutes });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [progress],
  );

  if (isLoading) return <Loading />;
  if (isError || !data) {
    return <ErrorState message={t('readerError')} onRetry={refetch} />;
  }

  const fontSize = reading.textSizes[sizeStep];
  const remaining = Math.max(1, Math.round(data.estimatedMinutes * (1 - progress / 100)));
  const finished = progress >= 98 || Boolean(data.userProgress?.completedAt);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: reading.paper }} edges={['left', 'right']}>
      <ScrollView
        onScroll={handleScroll}
        scrollEventThrottle={200}
        contentContainerStyle={{ paddingBottom: spacing.xxl }}
      >
        {/* Titelbild mit Kopfzeile darüber – dasselbe Motiv wie die Kachel im
            Regal, hier nur als breites Band beschnitten. */}
        <View style={hero}>
          <LibraryCoverArt content={data} />
          <CoverScrim />

          <View style={heroContent}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.sm }}>
              <LevelBadge level={data.level} small />
              <Text style={kicker}>
                {data.type === 'STORY' ? t('libraryTypeStory') : t('libraryTypeArticle')} ·{' '}
                {data.estimatedMinutes} {t('commonMinutesShort')} ·{' '}
                {t('readerWords', { count: data.wordCount })}
              </Text>
            </View>

            <Text style={heroTitle}>{data.title}</Text>
            {data.author ? (
              <Text style={heroAuthor}>{t('readerBy', { author: data.author })}</Text>
            ) : null}
          </View>
        </View>

        <View style={page}>
          {/* Vorspann: die Zusammenfassung, gesetzt wie der Anriss über einem
              Zeitschriftenartikel – kursiv an einer Linie in der Leitfarbe,
              statt in einer eigenen Karte. */}
          <View style={lead}>
            <Text style={leadText}>{data.summary}</Text>
          </View>

          <ReaderToolbar
            sizeStep={sizeStep}
            onSizeStep={setSizeStep}
            translationsOpen={translationsOpen}
            onToggleTranslations={() => setTranslationsOpen((value) => !value)}
            remaining={remaining}
            finished={finished}
          />

          {/* Abschnitte einzeln rendern: jeder trägt seine eigene Übersetzung
              und sein eigenes Glossar, statt einen einzigen Textblock. */}
          <View style={{ gap: spacing.xl }}>
            {data.body?.map((section, index) => (
              <ReadingSection
                key={section.id}
                section={section}
                fontSize={fontSize}
                dropCap={index === 0}
                translationsOpen={translationsOpen}
              />
            ))}
          </View>

          {/* Schlussvignette – das gedruckte Zeichen dafür, dass der Text hier
              endet und darunter nur noch Zugaben stehen. */}
          <View style={endMark}>
            <View style={endRule} />
            <Text style={endGlyph}>✦</Text>
            <View style={endRule} />
          </View>

          {data.exerciseCount > 0 ? (
            <View style={exerciseBox}>
              <Text style={[readingLabel, { color: colors.primary }]}>{t('readerToTheText')}</Text>
              <Text style={exerciseTitle}>{t('readerUnderstood')}</Text>
              <Text style={exerciseHint}>
                {data.exerciseCount === 1
                  ? t('readerExerciseCountOne')
                  : t('readerExerciseCount', { count: data.exerciseCount })}
                {data.userProgress?.bestScore != null
                  ? ` · ${t('readerBestResult', { percent: data.userProgress.bestScore })}`
                  : ''}
              </Text>
              <Button
                label={t('readerStartExercises')}
                onPress={() => navigation.navigate('Exercises', { contentId, title })}
              />
            </View>
          ) : null}
        </View>
      </ScrollView>

      {/* Der Fortschritt liegt über der Seite statt in ihr: eine Haarlinie am
          oberen Rand, die beim Scrollen mitwächst. */}
      <View style={progressOverlay} pointerEvents="none">
        <ProgressBar value={progress} height={3} />
      </View>
    </SafeAreaView>
  );
}

/**
 * Der Bedienstreifen der Lesestrecke.
 *
 * Drei Dinge, die beim Lesen tatsächlich gebraucht werden: die Schriftgröße,
 * die verbleibende Lesezeit und der Schalter, der alle Übersetzungen auf
 * einmal aufklappt. Gesetzt zwischen zwei Haarlinien statt in eine Karte,
 * damit der Streifen Teil der Seite bleibt, statt ihr etwas aufzusetzen.
 */
function ReaderToolbar({
  sizeStep,
  onSizeStep,
  translationsOpen,
  onToggleTranslations,
  remaining,
  finished,
}: {
  sizeStep: number;
  onSizeStep: (step: number) => void;
  translationsOpen: boolean;
  onToggleTranslations: () => void;
  remaining: number;
  finished: boolean;
}) {
  const { t } = useTranslation();
  const canShrink = sizeStep > 0;
  const canGrow = sizeStep < reading.textSizes.length - 1;

  return (
    <View style={toolbar}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.xs }}>
        <StepButton
          label="A"
          small
          disabled={!canShrink}
          onPress={() => onSizeStep(sizeStep - 1)}
          accessibilityLabel={t('readerShrinkFont')}
        />
        <StepButton
          label="A"
          disabled={!canGrow}
          onPress={() => onSizeStep(sizeStep + 1)}
          accessibilityLabel={t('readerGrowFont')}
        />
      </View>

      <Text style={[readingLabel, { color: reading.inkFaint, flex: 1, textAlign: 'center' }]}>
        {finished ? t('readerFinished') : t('libraryRemainingMinutes', { count: remaining })}
      </Text>

      <Pressable
        accessibilityRole="button"
        accessibilityState={{ selected: translationsOpen }}
        onPress={onToggleTranslations}
        style={[toolbarChip, translationsOpen && toolbarChipActive]}
      >
        <Text
          style={[readingLabel, { color: translationsOpen ? colors.textInverse : reading.inkSoft }]}
        >
          {t('readerTranslation')}
        </Text>
      </Pressable>
    </View>
  );
}

/** Die beiden „A“ des Lesekopfs – klein verkleinert, groß vergrößert. */
function StepButton({
  label,
  small,
  disabled,
  onPress,
  accessibilityLabel,
}: {
  label: string;
  small?: boolean;
  disabled?: boolean;
  onPress: () => void;
  accessibilityLabel: string;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      accessibilityState={{ disabled }}
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        stepButton,
        pressed && { backgroundColor: colors.primarySoft },
        disabled && { opacity: 0.35 },
      ]}
    >
      <Text style={{ fontFamily: fontFamily.semiBold, fontSize: small ? 12 : 17, color: reading.ink }}>
        {label}
      </Text>
    </Pressable>
  );
}

const hero = {
  width: '100%' as const,
  aspectRatio: 16 / 10,
  justifyContent: 'flex-end' as const,
  backgroundColor: colors.surfaceAlt,
};

const heroContent = {
  position: 'absolute' as const,
  left: spacing.lg,
  right: spacing.lg,
  bottom: spacing.lg,
  gap: spacing.xs,
};

const kicker = {
  ...readingLabel,
  color: 'rgba(255,255,255,0.85)',
};

const heroTitle = {
  fontFamily: fontFamily.bold,
  fontSize: 28,
  lineHeight: 34,
  color: '#FFFFFF',
};

const heroAuthor = {
  fontFamily: fontFamily.regular,
  fontSize: 14,
  fontStyle: 'italic' as const,
  color: 'rgba(255,255,255,0.85)',
};

/** Der Satzspiegel: begrenzte Zeilenbreite, auf breiten Schirmen zentriert. */
const page = {
  width: '100%' as const,
  maxWidth: reading.measure,
  alignSelf: 'center' as const,
  padding: spacing.lg,
  gap: spacing.lg,
};

const lead = {
  borderLeftWidth: 3,
  borderLeftColor: colors.primary,
  paddingLeft: spacing.md,
  paddingVertical: 2,
};

const leadText = {
  fontFamily: fontFamily.medium,
  fontSize: 16,
  lineHeight: 25,
  fontStyle: 'italic' as const,
  color: reading.inkSoft,
};

const toolbar = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  gap: spacing.sm,
  paddingVertical: spacing.sm,
  borderTopWidth: 1,
  borderBottomWidth: 1,
  borderColor: reading.rule,
};

const stepButton = {
  width: 34,
  height: 30,
  borderRadius: radius.sm,
  borderWidth: 1,
  borderColor: reading.rule,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const toolbarChip = {
  paddingHorizontal: spacing.md,
  paddingVertical: 7,
  borderRadius: radius.full,
  borderWidth: 1,
  borderColor: reading.rule,
};

const toolbarChipActive = {
  backgroundColor: colors.primary,
  borderColor: colors.primary,
};

const endMark = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  gap: spacing.md,
  paddingTop: spacing.sm,
};

const endRule = {
  flex: 1,
  height: 1,
  backgroundColor: reading.rule,
};

const endGlyph = {
  fontSize: 13,
  color: colors.primary,
};

/**
 * Der Kasten am Fuß der Seite ist kein Kartenstapel, sondern ein einzelner
 * getönter Block in der Leitfarbe – die eine Sache, die nach dem Lesen noch
 * ansteht.
 */
const exerciseBox = {
  backgroundColor: colors.primarySoft,
  borderRadius: radius.lg,
  padding: spacing.lg,
  gap: spacing.sm,
  ...shadow.card,
};

const exerciseTitle = {
  ...typography.title,
  fontSize: 19,
  lineHeight: 25,
  color: colors.primaryDark,
};

const exerciseHint = {
  fontFamily: fontFamily.regular,
  fontSize: 13,
  lineHeight: 19,
  color: reading.inkSoft,
  marginBottom: spacing.xs,
};

const progressOverlay = {
  position: 'absolute' as const,
  top: 0,
  left: 0,
  right: 0,
};
