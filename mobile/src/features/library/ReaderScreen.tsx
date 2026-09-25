import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ErrorState, Loading } from '../../components';
import { libraryApi } from '../../api/endpoints';
import { CACHE } from '../../api/query-client';
import { useTranslation } from '../../i18n';
import { useAuthStore } from '../../store/auth.store';
import { asTranslatableLanguage } from '../../utils/translation';
import { hasTextSelection } from '../../utils/selection';
import { fontFamily, radius, reading, spacing } from '../../theme';
import type { LibraryStackParamList } from '../../navigation/types';
import { libraryCoverSource } from './LibraryCovers';
import { GlossaryPopover } from './GlossaryPopover';
import { PageTapProvider, useTapWithoutResponder } from './pageTap';
import { ReadingSection } from './ReadingSection';
import type { GlossaryAnchor } from './ReadingSection';
import { ReaderSettingsSheet, ReaderStatusLine, ReaderTopBar } from './ReaderChrome';
import { ReaderSettingsProvider, useReaderSettings } from './ReaderSettings';
import { TranslateLayer } from '../translate/TranslateLayer';
import type { TranslateLayerHandle } from '../translate/TranslateLayer';
import { awardPoints } from '../../store/points.store';

type Props = NativeStackScreenProps<LibraryStackParamList, 'Reader'>;

/** Erst ab dieser Änderung wird der Fortschritt erneut gespeichert. */
const PROGRESS_STEP = 10;

/** Höhe, die die Kopfleiste über dem Satzspiegel freihält. */
const TOP_BAR_HEIGHT = 48;

/**
 * Der Leser – ein E-Book-Leser, kein Bildschirm mit einem Text darauf.
 *
 * Vorher war das hier eine Zeitschriftenseite: breites Titelbild, Kicker über
 * dem Aufmacher, ein Bedienstreifen mitten im Satz. Das liest sich gut für
 * zwei Absätze und wird anstrengend, sobald man wirklich liest – genau deshalb
 * sehen Kindle & Co. anders aus, und diese Seite folgt jetzt ihren Regeln:
 *
 * – **Papier statt Oberfläche.** Der Lesende wählt aus vier Papieren (Weiß,
 *   Sepia, Grün, Nacht, siehe `readerThemes`); der ganze Bildschirm nimmt die
 *   Farbe an, inklusive Leisten, Kästen und dem Zettel zum Wort.
 * – **Antiqua statt Grotesk.** Fließtext in einer Serifenschrift, im Blocksatz,
 *   mit Initiale am Anfang – das Bild einer gedruckten Seite. Wer es anders
 *   mag, schaltet im „Aa“ auf die Grotesk der übrigen App.
 * – **Kein Bedienelement im Text.** Oben eine Leiste, die beim Lesen
 *   verschwindet und auf einen Tipp zurückkommt; unten eine Zeile mit Restzeit
 *   und Prozent, die immer bleibt. Dazwischen nichts als der Text.
 * – **Titelseite statt Titelbild.** Der Text beginnt wie ein Buch: Deckel,
 *   Titel, Verfasser, Vorspann, Strich – und dann der erste Satz. Das
 *   Kachelmotiv aus dem Regal steht dabei als kleiner Deckel oben, damit man
 *   sieht, welches Buch man aufgeschlagen hat.
 *
 * Die Erklärungen zum Text stecken weiterhin in den Absätzen selbst (siehe
 * `ReadingSection`); der Zettel zum angetippten Wort liegt als
 * `GlossaryPopover` über der ganzen Seite, weil er den Satzspiegel verlassen
 * können muss.
 */
export default function ReaderScreen(props: Props) {
  // Die Leseeinstellungen umschließen den ganzen Bildschirm: Absatz, Zettel und
  // Leisten müssen dieselben Farben und Größen treffen wie die Seite.
  return (
    <ReaderSettingsProvider>
      <Reader {...props} />
    </ReaderSettingsProvider>
  );
}

function Reader({ route, navigation }: Props) {
  const { contentId, title } = route.params;
  const { t } = useTranslation();
  const settings = useReaderSettings();
  const c = settings.colors;
  const insets = useSafeAreaInsets();
  const nativeLanguage = useAuthStore((state) => state.user?.nativeLanguage);
  const language = asTranslatableLanguage(nativeLanguage);
  const [progress, setProgress] = useState(0);
  const [anchor, setAnchor] = useState<GlossaryAnchor | null>(null);
  // Die Kopfleiste steht beim Aufschlagen da (sonst fände niemand den Weg
  // zurück) und verschwindet, sobald gelesen wird.
  const [chromeVisible, setChromeVisible] = useState(true);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const queryClient = useQueryClient();
  const lastSaved = useRef(0);
  const startedAt = useRef(Date.now());
  const translator = useRef<TranslateLayerHandle>(null);
  const toggleChrome = useCallback(() => setChromeVisible((visible) => !visible), []);
  const pageTap = useTapWithoutResponder(toggleChrome);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['library', contentId],
    staleTime: CACHE.CONTENT,
    queryFn: () => libraryApi.detail(contentId),
  });

  const saveProgress = useMutation({
    mutationFn: (payload: { progressPercent: number; minutesRead?: number }) =>
      libraryApi.saveProgress(contentId, payload),
    onSuccess: (result) => {
      awardPoints(result);
      // Die Übersicht sortiert nach Lesestand („Weiterlesen“ ganz oben) und
      // holt ihn nicht mehr bei jedem Fokus nach. Entwertet wird nur die
      // *Liste*: Ihr Schlüssel trägt an zweiter Stelle das Filterobjekt, der
      // des Textes die ID. Ohne diese Unterscheidung lüde sich der Text, den
      // der Lernende gerade vor sich hat, mitten im Lesen neu.
      void queryClient.invalidateQueries({
        predicate: (query) =>
          query.queryKey[0] === 'library' && typeof query.queryKey[1] === 'object',
      });
    },
  });

  /**
   * Den gespeicherten Lesestand übernehmen, sobald der Text da ist.
   *
   * Vorher begann die Anzeige immer bei null: Ein Text, den die Übersicht als
   * „41 % gelesen“ führte und sogar als „gelesen“ markierte, schlug mit 0 %
   * auf. Die Zahl unten stand damit für die Scrollposition dieses Aufschlagens
   * statt für den Lesestand – zwei verschiedene Dinge unter einer Beschriftung.
   *
   * `lastSaved` wird mitgesetzt, sonst schickte das erste Scrollen denselben
   * Stand sofort wieder an den Server.
   */
  const seeded = useRef(false);
  useEffect(() => {
    if (seeded.current || !data) return;
    seeded.current = true;
    const saved = data.userProgress?.progressPercent ?? 0;
    if (saved > 0) {
      setProgress(saved);
      lastSaved.current = saved;
    }
  }, [data]);

  /**
   * Lesefortschritt aus der Scrollposition. Gespeichert wird in Zehnerschritten,
   * damit nicht jeder Scroll-Frame einen Request auslöst.
   */
  const handleScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
      // Solange der Text kürzer ist als der Bildschirm, gibt es keine
      // Scrollstrecke, aus der sich ein Prozentsatz ableiten ließe. Während
      // Schriften und Bilder noch einlaufen, meldet die Liste genau das – und
      // ein Teiler nahe null ließ die Anzeige ohne jede Bewegung springen.
      const scrollable = contentSize.height - layoutMeasurement.height;
      if (scrollable > 8) {
        const percent = Math.min(100, Math.round((contentOffset.y / scrollable) * 100));
        setProgress((previous) => Math.max(previous, percent));

        if (percent - lastSaved.current >= PROGRESS_STEP) {
          lastSaved.current = percent;
          saveProgress.mutate({ progressPercent: percent });
        }
      }

      // Wer liest, blättert – und braucht die Leiste nicht. Sie kommt auf einen
      // Tipp zurück; genau so verhält sich ein E-Book-Leser.
      if (contentOffset.y > 24) setChromeVisible(false);
      // Der Zettel klebt an einer Bildschirmstelle, nicht am Wort – sobald die
      // Seite sich bewegt, zeigt er ins Leere und wird geschlossen.
      setAnchor((current) => (current ? null : current));
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

  const remaining = Math.max(1, Math.round(data.estimatedMinutes * (1 - progress / 100)));
  const finished = progress >= 98 || Boolean(data.userProgress?.completedAt);
  const hasGlossary = Boolean(data.body?.some((section) => section.glossary?.length));
  // Nicht jeder Text bringt eine Übersetzung in die Muttersprache des Lesenden
  // mit. Fehlt sie überall, bleibt der Schalter weg: Ein Knopf, der nichts
  // bewirkt, sieht aus wie ein Fehler in der App und ist keiner.
  const hasTranslations = Boolean(
    language && data.body?.some((section) => section.translations?.[language]),
  );
  const typeLabel = data.type === 'STORY' ? t('libraryTypeStory') : t('libraryTypeArticle');

  return (
    <View style={{ flex: 1, backgroundColor: c.paper }}>
      {/* Über dunklem Papier muss die Systemleiste hell zeichnen – sonst steht
          dort schwarz auf schwarz. */}
      <StatusBar style={c.statusBar} />

      <ScrollView
        onScroll={handleScroll}
        scrollEventThrottle={200}
        contentContainerStyle={{
          paddingTop: insets.top + TOP_BAR_HEIGHT,
          paddingBottom: spacing.xxl * 2 + insets.bottom,
        }}
      >
        {/* Ein Tipp auf die Seite holt die Leisten zurück oder schickt sie weg.
            Tippen auf ein erklärtes Wort, einen Kasten oder einen Knopf zählt
            nicht mit – diese fangen die Berührung selbst ab.

            Bewusst ohne `accessibilityRole="button"`: Die Fläche ist die ganze
            Seite. Als Knopf angekündigt wäre sie ein Knopf, der alle anderen
            Knöpfe des Texts enthält – im Web wird daraus ein `<button>` im
            `<button>` (ungültig), und eine Sprachausgabe läse die Seite als
            eine einzige Schaltfläche vor. Die Leisten lassen sich über die
            Fußzeile ansagbar schalten (siehe `ReaderStatusLine`); das Tippen
            auf die Seite bleibt die stille Abkürzung daneben.

            Wer gerade Text markiert, meint damit keinen Tipp auf die Seite:
            Im Browser endet das Markieren mit einem Klick genau hier, und
            ohne die Abfrage spränge bei jedem Kopieren die Kopfleiste um
            (siehe `hasTextSelection`).

            Auf Android darf die Fläche kein `Pressable` sein – sonst lässt sich
            darin nichts markieren (siehe `PageTapArea`). */}
        <PageTapProvider value={pageTap.claim}>
          <PageTapArea
            onTap={() => {
              if (hasTextSelection()) return;
              toggleChrome();
            }}
            handlers={pageTap.handlers}
          >
            <View style={[page, { paddingHorizontal: spacing.lg + settings.margin }]}>
              {/* Die Titelseite: Deckel, Kicker, Titel, Verfasser, Vorspann. */}
              <View style={titlePage}>
                <View style={[coverFrame, { backgroundColor: c.paperDeep, shadowColor: c.ink }]}>
                  <Image
                    source={libraryCoverSource(data)}
                    style={{ width: '100%', height: '100%' }}
                    resizeMode="cover"
                    fadeDuration={0}
                    accessibilityIgnoresInvertColors
                  />
                </View>

                <Text style={[titleKicker, { color: c.inkFaint }]}>
                  {typeLabel} · {data.level} · {data.estimatedMinutes} {t('commonMinutesShort')} ·{' '}
                  {t('readerWords', { count: data.wordCount })}
                </Text>

                <Text selectable style={[bookTitle, { color: c.ink }]}>
                  {data.title}
                </Text>

                {data.author ? (
                  <Text selectable style={[bookAuthor, { color: c.inkSoft }]}>
                    {t('readerBy', { author: data.author })}
                  </Text>
                ) : null}

                <Text selectable style={[lead, { color: c.inkSoft }]}>
                  {data.summary}
                </Text>

                <View style={[titleRule, { backgroundColor: c.accent }]} />
              </View>

              {/* Einmal gesagt, wozu die farbigen Wörter da sind – danach erklärt
                sich der Verweis von selbst. */}
              {hasGlossary ? (
                <Text style={[hint, { color: c.inkFaint }]}>{t('readingHint')}</Text>
              ) : null}

              {/* Abschnitte einzeln rendern: jeder trägt seine eigene Übersetzung
                und sein eigenes Glossar, statt einen einzigen Textblock. */}
              <View style={{ gap: spacing.md }}>
                {data.body?.map((section, index) => (
                  <ReadingSection
                    key={section.id}
                    section={section}
                    dropCap={index === 0}
                    activeTermId={anchor?.id}
                    onTermPress={setAnchor}
                  />
                ))}
              </View>

              {/* Schlussvignette – das gedruckte Zeichen dafür, dass der Text hier
                endet und darunter nur noch Zugaben stehen. */}
              <View style={endMark}>
                <View style={[endRule, { backgroundColor: c.rule }]} />
                <Text style={{ fontSize: 13, color: c.accent }}>✦</Text>
                <View style={[endRule, { backgroundColor: c.rule }]} />
              </View>

              {data.exerciseCount > 0 ? (
                <Pressable
                  accessibilityRole="button"
                  onPress={() => {
                    pageTap.claim();
                    navigation.navigate('Exercises', { contentId, title });
                  }}
                  style={({ pressed }) => [
                    exerciseBox,
                    {
                      backgroundColor: c.paperDeep,
                      borderColor: c.edge,
                      borderLeftColor: c.accent,
                    },
                    pressed && { opacity: 0.9 },
                  ]}
                >
                  <Text style={[exerciseLabel, { color: c.accent }]}>{t('readerToTheText')}</Text>
                  <Text style={[exerciseTitle, { color: c.ink }]}>{t('readerUnderstood')}</Text>
                  <Text style={[exerciseHint, { color: c.inkSoft }]}>
                    {data.exerciseCount === 1
                      ? t('readerExerciseCountOne')
                      : t('readerExerciseCount', { count: data.exerciseCount })}
                    {data.userProgress?.bestScore != null
                      ? ` · ${t('readerBestResult', { percent: data.userProgress.bestScore })}`
                      : ''}
                  </Text>
                  <Text style={[exerciseAction, { color: c.accent }]}>
                    {t('readerStartExercises')} →
                  </Text>
                </Pressable>
              ) : null}
            </View>
          </PageTapArea>
        </PageTapProvider>
      </ScrollView>

      {chromeVisible ? (
        <ReaderTopBar
          title={data.title}
          onBack={() => navigation.goBack()}
          onTranslate={() => translator.current?.open()}
          onOpenSettings={() => setSettingsOpen(true)}
        />
      ) : null}

      <ReaderStatusLine
        percent={progress}
        remaining={remaining}
        finished={finished}
        barsVisible={chromeVisible}
        onToggleBars={() => setChromeVisible((visible) => !visible)}
      />

      <ReaderSettingsSheet
        visible={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        hasTranslations={hasTranslations}
      />

      {/* Die Worterklärung liegt über der ganzen Seite, nicht im Absatz –
          nur so kann sie den Satzspiegel verlassen und neben dem Wort stehen. */}
      <GlossaryPopover anchor={anchor} onClose={() => setAnchor(null)} />

      {/* Markiertes übersetzen – im Browser per Knopf an der Markierung, sonst
          über das Zeichen in der Kopfleiste. */}
      <TranslateLayer ref={translator} palette={c} />
    </View>
  );
}

/**
 * Die Fläche, die auf einen Tipp die Leisten schaltet.
 *
 * Im Browser und auf iOS ein gewöhnliches `Pressable`. Auf Android nicht: Dort
 * reißt ein `Pressable` jede Berührung an sich, und der markierbare Text darin
 * bekäme das lange Drücken nie zu sehen (siehe `useTapWithoutResponder`). Die
 * Fläche hört dort nur zu; Knöpfe im Text beanspruchen ihren Tipp über
 * `useClaimPageTap`, damit die Leisten dabei stehen bleiben.
 */
function PageTapArea({
  onTap,
  handlers,
  children,
}: {
  onTap: () => void;
  handlers: ReturnType<typeof useTapWithoutResponder>['handlers'];
  children: React.ReactNode;
}) {
  if (Platform.OS === 'android') return <View {...handlers}>{children}</View>;
  return <Pressable onPress={onTap}>{children}</Pressable>;
}

/** Der Satzspiegel: begrenzte Zeilenbreite, auf breiten Schirmen zentriert. */
const page = {
  width: '100%' as const,
  maxWidth: reading.measure,
  alignSelf: 'center' as const,
  paddingBottom: spacing.lg,
  gap: spacing.lg,
};

/**
 * Die Titelseite. Sie steht mittig und lässt Luft – auf der ersten Seite eines
 * Buchs steht nie ein voller Satzspiegel, und genau diese Pause macht den
 * Unterschied zwischen „Text geöffnet“ und „Buch aufgeschlagen“.
 */
const titlePage = {
  alignItems: 'center' as const,
  gap: spacing.sm,
  paddingTop: spacing.md,
};

/** Der Deckel aus dem Regal, hier klein: ein Lesezeichen, welches Buch das ist. */
const coverFrame = {
  width: 104,
  aspectRatio: 3 / 4,
  borderRadius: 3,
  overflow: 'hidden' as const,
  marginBottom: spacing.sm,
  shadowOpacity: 0.28,
  shadowRadius: 10,
  shadowOffset: { width: 0, height: 5 },
  elevation: 5,
};

const titleKicker = {
  fontFamily: fontFamily.semiBold,
  fontSize: 10.5,
  letterSpacing: 1.4,
  textTransform: 'uppercase' as const,
  textAlign: 'center' as const,
};

const bookTitle = {
  fontFamily: fontFamily.serif,
  fontSize: 27,
  lineHeight: 34,
  fontWeight: '700' as const,
  textAlign: 'center' as const,
};

const bookAuthor = {
  fontFamily: fontFamily.serif,
  fontSize: 14,
  fontStyle: 'italic' as const,
  textAlign: 'center' as const,
};

/** Der Vorspann – kursiv und mittig, wie das Motto vor dem ersten Kapitel. */
const lead = {
  fontFamily: fontFamily.serif,
  fontSize: 15,
  lineHeight: 24,
  fontStyle: 'italic' as const,
  textAlign: 'center' as const,
  marginTop: spacing.xs,
};

/** Der Strich, unter dem der Text beginnt – kurz und mittig, wie eine Vignette. */
const titleRule = {
  width: 54,
  height: 2,
  marginTop: spacing.md,
  marginBottom: spacing.xs,
  opacity: 0.8,
};

/** Die Lesehilfe über dem ersten Absatz – eine Zeile, so leise wie möglich. */
const hint = {
  fontFamily: fontFamily.serif,
  fontSize: 12,
  lineHeight: 17,
  fontStyle: 'italic' as const,
  textAlign: 'center' as const,
  marginBottom: -spacing.xs,
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
};

/**
 * Der Kasten am Fuß der Seite: getöntes Papier mit Rücken in der Akzentfarbe.
 * Die ganze Fläche ist der Knopf – ein eigener Button darin wäre das einzige
 * App-Element auf einer Seite, die sonst nur Buch ist.
 */
const exerciseBox = {
  borderRadius: radius.lg,
  borderWidth: 1,
  borderLeftWidth: 3,
  padding: spacing.lg,
  gap: spacing.xs,
};

const exerciseLabel = {
  fontFamily: fontFamily.semiBold,
  fontSize: 11,
  letterSpacing: 1.4,
  textTransform: 'uppercase' as const,
};

const exerciseTitle = {
  fontFamily: fontFamily.serif,
  fontSize: 19,
  lineHeight: 25,
  fontWeight: '700' as const,
};

const exerciseHint = {
  fontFamily: fontFamily.serif,
  fontSize: 13,
  lineHeight: 19,
};

const exerciseAction = {
  fontFamily: fontFamily.semiBold,
  fontSize: 13,
  marginTop: spacing.xs,
};
