import React from 'react';
import { Modal, Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTranslation } from '../../i18n';
import type { TranslationKey } from '../../i18n';
import { READER_THEME_NAMES, fontFamily, radius, reading, readerThemes, spacing } from '../../theme';
import type { ReaderThemeName } from '../../theme';
import { TranslateButton } from '../translate/TranslateButton';
import { ArrowLeftIcon, CheckIcon, LineSpacingGlyph, MarginGlyph } from './ReaderIcons';
import { useReaderSettings } from './ReaderSettings';

/**
 * Die Bedienelemente des Lesers – alles, was *nicht* der Text ist.
 *
 * Aufgeteilt in genau die drei Teile, die ein E-Book-Leser hat: die Kopfleiste,
 * die beim Lesen verschwindet; die Fußzeile, die immer bleibt, weil „wie weit
 * bin ich?“ keine Frage ist, für die man erst etwas antippen möchte; und das
 * Einstellblatt hinter dem „Aa“, in dem Papier, Schrift, Durchschuss und Rand
 * zusammen an einer Stelle liegen.
 *
 * Alle drei holen ihre Farben aus `useReaderSettings` und nicht aus den
 * App-Tokens: Über Nachtpapier gehört eine dunkle Leiste, nicht die weiße
 * Oberfläche der übrigen App.
 */

// -------------------------------------------------------------- Kopfleiste

/**
 * Die Kopfleiste über dem Text: zurück, Titel, Übersetzen, „Aa“.
 *
 * Sie liegt über der Seite statt über ihr zu stehen – deshalb absolut
 * positioniert und nicht im Fluss: Wenn sie beim Lesen verschwindet, soll der
 * Text nicht nachrutschen, sondern genau dort stehenbleiben, wo das Auge ihn
 * verlassen hat.
 */
export function ReaderTopBar({
  title,
  onBack,
  onTranslate,
  onOpenSettings,
}: {
  title: string;
  onBack: () => void;
  onTranslate: () => void;
  onOpenSettings: () => void;
}) {
  const { t } = useTranslation();
  const { colors: c } = useReaderSettings();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        topBar,
        {
          paddingTop: insets.top + spacing.xs,
          backgroundColor: c.chrome,
          borderBottomColor: c.rule,
        },
      ]}
    >
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={t('readerBack')}
        onPress={onBack}
        hitSlop={10}
        style={({ pressed }) => [barButton, pressed && { opacity: 0.5 }]}
      >
        <ArrowLeftIcon color={c.ink} size={22} />
      </Pressable>

      <Text style={[barTitle, { color: c.inkSoft }]} numberOfLines={1}>
        {title}
      </Text>

      <TranslateButton color={c.ink} onPress={onTranslate} />

      <Pressable
        accessibilityRole="button"
        accessibilityLabel={t('readerSettingsOpen')}
        onPress={onOpenSettings}
        hitSlop={10}
        style={({ pressed }) => [barButton, pressed && { opacity: 0.5 }]}
      >
        <Text style={{ fontFamily: fontFamily.serif, fontSize: 19, color: c.ink }}>Aa</Text>
      </Pressable>
    </View>
  );
}

// ---------------------------------------------------------------- Fußzeile

/**
 * Die Fußzeile: Restzeit links, Prozent rechts, darüber die Fortschrittslinie.
 *
 * Bleibt immer sichtbar, auch wenn die Kopfleiste weg ist. Ein E-Book-Leser
 * macht das genauso, und aus demselben Grund: Die Zeile ist keine Bedienung,
 * sondern Teil des Buchs – so wie die Seitenzahl am Fuß einer gedruckten Seite,
 * die auch niemand erst aufklappt.
 *
 * Sie ist zugleich der *ansagbare* Weg zu den Leisten. Auf der Seite selbst
 * genügt ein Tipp irgendwohin, aber diese Fläche kann sich nicht als Knopf
 * ausgeben, ohne den ganzen Text zu einer Schaltfläche zu erklären (siehe
 * `ReaderScreen`). Deshalb trägt die Fußzeile die Beschriftung: ein kleines
 * Ziel, das eine Sprachausgabe findet und benennen kann.
 */
export function ReaderStatusLine({
  percent,
  remaining,
  finished,
  barsVisible,
  onToggleBars,
}: {
  percent: number;
  remaining: number;
  finished: boolean;
  /** Steht die Kopfleiste gerade? Entscheidet nur über die Beschriftung. */
  barsVisible: boolean;
  onToggleBars: () => void;
}) {
  const { t } = useTranslation();
  const { colors: c } = useReaderSettings();
  const insets = useSafeAreaInsets();
  const clamped = Math.max(0, Math.min(100, percent));

  return (
    // `box-none`: Die Fläche selbst fängt nichts ab – ein Wischen, das am
    // unteren Rand beginnt, scrollt weiter die Seite. Nur die beschriftete
    // Zeile darin nimmt Berührungen an.
    <View
      style={[
        statusLine,
        {
          backgroundColor: c.paper,
          paddingBottom: Math.max(insets.bottom, spacing.sm),
          pointerEvents: 'box-none',
        },
      ]}
    >
      <View style={[progressTrack, { backgroundColor: c.rule }]}>
        <View style={{ width: `${clamped}%`, height: '100%', backgroundColor: c.accent }} />
      </View>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel={barsVisible ? t('readerHideBars') : t('readerShowBars')}
        onPress={onToggleBars}
        style={statusRow}
      >
        <Text style={[statusText, { color: c.inkFaint }]}>
          {finished ? t('readerFinished') : t('libraryRemainingMinutes', { count: remaining })}
        </Text>
        <Text style={[statusText, { color: c.inkFaint }]}>{clamped} %</Text>
      </Pressable>
    </View>
  );
}

// ----------------------------------------------------------- Einstellblatt

/** Die vier Papiere mit ihrer Beschriftung – Reihenfolge wie in `readerThemes`. */
const THEME_LABELS: Record<ReaderThemeName, TranslationKey> = {
  paper: 'readerThemePaper',
  sepia: 'readerThemeSepia',
  green: 'readerThemeGreen',
  night: 'readerThemeNight',
};

/**
 * Das Blatt hinter dem „Aa“ – Schriftgröße, Schrift, Durchschuss, Rand, Papier
 * und der Schalter für die Übersetzungen.
 *
 * Alles auf einem Blatt, das von unten hereinfährt und beim Tippen daneben
 * wieder verschwindet: Jede Einstellung wirkt sofort auf den Text dahinter, und
 * das ist der Grund, warum sie hier steht und nicht im Profil – man probiert
 * sie am laufenden Text aus.
 */
export function ReaderSettingsSheet({
  visible,
  onClose,
  hasTranslations,
}: {
  visible: boolean;
  onClose: () => void;
  /** Ohne hinterlegte Übersetzung fehlt der Schalter – ein Knopf ohne Wirkung wirkt kaputt. */
  hasTranslations: boolean;
}) {
  const { t } = useTranslation();
  const settings = useReaderSettings();
  const c = settings.colors;
  const insets = useSafeAreaInsets();

  if (!visible) return null;

  return (
    <Modal visible transparent animationType="slide" onRequestClose={onClose}>
      {/* Der Hintergrund schließt das Blatt, kündigt sich aber nicht als Knopf
          an: Er umschließt das Blatt mit all seinen Schaltern, und ein Knopf im
          Knopf ist im Web ungültiges Markup und für eine Sprachausgabe eine
          Fläche, die alles verschluckt. Zum Schließen gibt es den Griff oben. */}
      <Pressable onPress={onClose} style={[sheetBackdrop, { backgroundColor: c.scrim }]}>
        {/* Ein Tippen auf das Blatt selbst darf es nicht schließen – hier wird
            eingestellt, nicht weggeklickt. */}
        <Pressable
          onPress={() => undefined}
          style={[
            sheet,
            {
              backgroundColor: c.chrome,
              borderColor: c.edge,
              paddingBottom: Math.max(insets.bottom, spacing.md) + spacing.sm,
            },
          ]}
        >
          {/* Der Griff ist der benannte Schließen-Knopf – dasselbe, was der
              Daumen ohnehin trifft, wenn das Blatt wieder weg soll. */}
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={t('readerClose')}
            onPress={onClose}
            hitSlop={10}
            style={sheetHandleRow}
          >
            <View style={[sheetHandle, { backgroundColor: c.edge }]} />
          </Pressable>

          <SettingRow label={t('readerFontSizeLabel')}>
            <View style={[segmentGroup, { borderColor: c.edge }]}>
              <Segment
                active={false}
                disabled={settings.sizeStep === 0}
                onPress={() => settings.set('sizeStep', settings.sizeStep - 1)}
                accessibilityLabel={t('readerShrinkFont')}
                first
              >
                <Text style={{ fontFamily: fontFamily.serif, fontSize: 13, color: c.ink }}>A</Text>
              </Segment>
              <View style={[segmentDivider, { backgroundColor: c.edge }]} />
              <Segment
                active={false}
                disabled={settings.sizeStep >= reading.textSizes.length - 1}
                onPress={() => settings.set('sizeStep', settings.sizeStep + 1)}
                accessibilityLabel={t('readerGrowFont')}
                last
              >
                <Text style={{ fontFamily: fontFamily.serif, fontSize: 21, color: c.ink }}>A</Text>
              </Segment>
            </View>
          </SettingRow>

          {/* Wie viele Stufen es gibt und auf welcher man steht – als Punktreihe,
              damit die beiden „A“ darüber ohne Zahl auskommen. */}
          <View style={dotRow}>
            {reading.textSizes.map((size, step) => (
              <View
                key={size}
                style={[
                  dot,
                  {
                    backgroundColor: step === settings.sizeStep ? c.accent : c.edge,
                    width: step === settings.sizeStep ? 8 : 5,
                    height: step === settings.sizeStep ? 8 : 5,
                  },
                ]}
              />
            ))}
          </View>

          <SettingRow label={t('readerTypefaceLabel')}>
            <View style={[segmentGroup, { borderColor: c.edge }]}>
              <Segment
                active={settings.serif}
                onPress={() => settings.set('serif', true)}
                accessibilityLabel={t('readerTypefaceSerif')}
                first
              >
                <Text
                  style={{
                    fontFamily: fontFamily.serif,
                    fontSize: 14,
                    color: settings.serif ? c.accentInk : c.ink,
                  }}
                >
                  {t('readerTypefaceSerif')}
                </Text>
              </Segment>
              <View style={[segmentDivider, { backgroundColor: c.edge }]} />
              <Segment
                active={!settings.serif}
                onPress={() => settings.set('serif', false)}
                accessibilityLabel={t('readerTypefaceSans')}
                last
              >
                <Text
                  style={{
                    fontFamily: fontFamily.medium,
                    fontSize: 13,
                    color: settings.serif ? c.ink : c.accentInk,
                  }}
                >
                  {t('readerTypefaceSans')}
                </Text>
              </Segment>
            </View>
          </SettingRow>

          <SettingRow label={t('readerLineSpacingLabel')}>
            <StepSegments
              count={reading.lineHeights.length}
              value={settings.lineStep}
              onChange={(step) => settings.set('lineStep', step)}
              label={(step) => t('readerLineSpacingStep', { step: step + 1 })}
              render={(step, active) => (
                <LineSpacingGlyph level={step} color={active ? c.accentInk : c.ink} size={20} />
              )}
            />
          </SettingRow>

          <SettingRow label={t('readerMarginLabel')}>
            <StepSegments
              count={reading.margins.length}
              value={settings.marginStep}
              onChange={(step) => settings.set('marginStep', step)}
              label={(step) => t('readerMarginStep', { step: step + 1 })}
              render={(step, active) => (
                <MarginGlyph level={step} color={active ? c.accentInk : c.ink} size={20} />
              )}
            />
          </SettingRow>

          <View style={{ height: 1, backgroundColor: c.rule, marginVertical: spacing.xs }} />

          {/* Die Papiere als echte Proben: jede Fläche zeigt ihre eigene Farbe
              samt Tinte, statt sie zu benennen. */}
          <Text style={[settingLabel, { color: c.inkFaint }]}>{t('readerColorLabel')}</Text>
          <View style={paperRow}>
            {READER_THEME_NAMES.map((name) => {
              const candidate = readerThemes[name];
              const active = settings.theme === name;
              return (
                <Pressable
                  key={name}
                  accessibilityRole="button"
                  accessibilityState={{ selected: active }}
                  accessibilityLabel={t(THEME_LABELS[name])}
                  onPress={() => settings.set('theme', name)}
                  style={paperSwatchWrap}
                >
                  <View
                    style={[
                      paperSwatch,
                      {
                        backgroundColor: candidate.paper,
                        borderColor: active ? c.accent : candidate.edge,
                        borderWidth: active ? 2 : 1,
                      },
                    ]}
                  >
                    {active ? (
                      <CheckIcon color={candidate.accent} size={18} />
                    ) : (
                      <Text
                        style={{ fontFamily: fontFamily.serif, fontSize: 17, color: candidate.ink }}
                      >
                        Aa
                      </Text>
                    )}
                  </View>
                  <Text
                    style={[paperSwatchLabel, { color: active ? c.ink : c.inkFaint }]}
                    numberOfLines={1}
                  >
                    {t(THEME_LABELS[name])}
                  </Text>
                </Pressable>
              );
            })}
          </View>

          {hasTranslations ? (
            <>
              <View style={{ height: 1, backgroundColor: c.rule, marginVertical: spacing.xs }} />
              <SettingRow label={t('readerTranslation')}>
                <View style={[segmentGroup, { borderColor: c.edge }]}>
                  <Segment
                    active={settings.translations}
                    onPress={() => settings.set('translations', true)}
                    accessibilityLabel={t('readerTranslationsOn')}
                    first
                  >
                    <Text
                      style={[segmentText, { color: settings.translations ? c.accentInk : c.ink }]}
                    >
                      {t('readerTranslationsOn')}
                    </Text>
                  </Segment>
                  <View style={[segmentDivider, { backgroundColor: c.edge }]} />
                  <Segment
                    active={!settings.translations}
                    onPress={() => settings.set('translations', false)}
                    accessibilityLabel={t('readerTranslationsOff')}
                    last
                  >
                    <Text
                      style={[segmentText, { color: settings.translations ? c.ink : c.accentInk }]}
                    >
                      {t('readerTranslationsOff')}
                    </Text>
                  </Segment>
                </View>
              </SettingRow>
            </>
          ) : null}
        </Pressable>
      </Pressable>
    </Modal>
  );
}

/** Eine Zeile des Einstellblatts: Beschriftung links, Bedienung rechts. */
function SettingRow({ label, children }: { label: string; children: React.ReactNode }) {
  const { colors: c } = useReaderSettings();
  return (
    <View style={settingRow}>
      <Text style={[settingLabel, { color: c.inkFaint }]}>{label}</Text>
      {children}
    </View>
  );
}

/** Eine Reihe gleichwertiger Stufen – Durchschuss, Rand. */
function StepSegments({
  count,
  value,
  onChange,
  label,
  render,
}: {
  count: number;
  value: number;
  onChange: (step: number) => void;
  label: (step: number) => string;
  render: (step: number, active: boolean) => React.ReactNode;
}) {
  const { colors: c } = useReaderSettings();
  return (
    <View style={[segmentGroup, { borderColor: c.edge }]}>
      {Array.from({ length: count }, (_, step) => (
        <React.Fragment key={step}>
          {step > 0 ? <View style={[segmentDivider, { backgroundColor: c.edge }]} /> : null}
          <Segment
            active={value === step}
            onPress={() => onChange(step)}
            accessibilityLabel={label(step)}
            first={step === 0}
            last={step === count - 1}
          >
            {render(step, value === step)}
          </Segment>
        </React.Fragment>
      ))}
    </View>
  );
}

/**
 * Ein Feld einer Segmentreihe. Der aktive Zustand ist eine gefüllte Fläche in
 * der Akzentfarbe – im Leser die einzige Stelle, an der Farbe etwas bedient,
 * und deshalb bewusst nicht zusätzlich umrandet.
 */
function Segment({
  children,
  active,
  disabled,
  onPress,
  accessibilityLabel,
  first,
  last,
}: {
  children: React.ReactNode;
  active: boolean;
  disabled?: boolean;
  onPress: () => void;
  accessibilityLabel: string;
  first?: boolean;
  last?: boolean;
}) {
  const { colors: c } = useReaderSettings();
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected: active, disabled }}
      accessibilityLabel={accessibilityLabel}
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        segment,
        first && { borderTopLeftRadius: radius.sm, borderBottomLeftRadius: radius.sm },
        last && { borderTopRightRadius: radius.sm, borderBottomRightRadius: radius.sm },
        active && { backgroundColor: c.accent },
        pressed && !active && { backgroundColor: c.paperDeep },
        disabled && { opacity: 0.3 },
      ]}
    >
      {children}
    </Pressable>
  );
}

// ------------------------------------------------------------------ Styles

const topBar = {
  position: 'absolute' as const,
  top: 0,
  left: 0,
  right: 0,
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  gap: spacing.sm,
  paddingHorizontal: spacing.sm,
  paddingBottom: spacing.xs,
  borderBottomWidth: 1,
};

const barButton = {
  minWidth: 40,
  height: 40,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

/** Der Titel in der Kopfleiste ist Beschriftung, nicht Überschrift – deshalb leise. */
const barTitle = {
  flex: 1,
  fontFamily: fontFamily.serif,
  fontSize: 14,
  textAlign: 'center' as const,
};

const statusLine = {
  position: 'absolute' as const,
  bottom: 0,
  left: 0,
  right: 0,
};

const progressTrack = {
  height: 2,
  flexDirection: 'row' as const,
};

const statusRow = {
  flexDirection: 'row' as const,
  justifyContent: 'space-between' as const,
  paddingHorizontal: spacing.lg,
  paddingTop: 5,
};

const statusText = {
  fontFamily: fontFamily.medium,
  fontSize: 11,
  letterSpacing: 0.4,
};

const sheetBackdrop = {
  flex: 1,
  justifyContent: 'flex-end' as const,
};

const sheet = {
  borderTopLeftRadius: radius.xl,
  borderTopRightRadius: radius.xl,
  borderTopWidth: 1,
  paddingHorizontal: spacing.lg,
  paddingTop: spacing.sm,
  gap: spacing.sm,
};

const sheetHandleRow = {
  alignItems: 'center' as const,
  paddingBottom: spacing.xs,
};

const sheetHandle = {
  width: 44,
  height: 4,
  borderRadius: 2,
};

const settingRow = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  justifyContent: 'space-between' as const,
  gap: spacing.md,
  minHeight: 44,
};

const settingLabel = {
  fontFamily: fontFamily.semiBold,
  fontSize: 11,
  letterSpacing: 1.4,
  textTransform: 'uppercase' as const,
};

const segmentGroup = {
  flexDirection: 'row' as const,
  alignItems: 'stretch' as const,
  borderWidth: 1,
  borderRadius: radius.sm,
  overflow: 'hidden' as const,
};

const segment = {
  minWidth: 52,
  height: 36,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const segmentDivider = {
  width: 1,
};

const segmentText = {
  fontFamily: fontFamily.semiBold,
  fontSize: 12,
};

const dotRow = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  gap: 6,
  marginTop: -spacing.xs,
};

const dot = {
  borderRadius: 4,
};

const paperRow = {
  flexDirection: 'row' as const,
  gap: spacing.sm,
};

const paperSwatchWrap = {
  flex: 1,
  alignItems: 'center' as const,
  gap: 5,
};

const paperSwatch = {
  width: '100%' as const,
  height: 52,
  borderRadius: radius.md,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const paperSwatchLabel = {
  fontFamily: fontFamily.medium,
  fontSize: 11,
};
