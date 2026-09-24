import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import type {
  AudioBlock,
  CefrLevel,
  DialogueBlock,
  HeadingBlock,
  ImageBlock,
  InfoBlock,
  TextBlock,
  TranslatableLanguage,
  VocabListBlock,
} from '@lingua/shared';
import { book, bookFont, bookLabel, bookSans } from '../../../theme';
import { AudioMark } from '../BookIcons';
import { BoxLabel, SectionHeading } from '../BookPage';
import { getSceneComponent } from './SceneIllustrations';
import { useTranslation } from '../../../i18n';
import type { TranslationKey } from '../../../i18n';
import { useAuthStore } from '../../../store/auth.store';
import { asTranslatableLanguage } from '../../../utils/translation';

/**
 * Die Darstellungsblöcke einer Seite, gesetzt wie eine gedruckte Lehrwerksseite:
 * Fließtext in Lesegröße, Kästen mit farbigem Rand statt Karten mit Schatten,
 * Tabellen mit Linien statt Hintergrundflächen.
 *
 * Kästen werden benannt, nicht bebildert: Wo vorher ein Emoji stand, steht
 * jetzt das gesperrte Etikett GRAMMATIK, TIPP, LANDESKUNDE oder WICHTIG – so
 * kennzeichnet ein Lehrwerk seine Kästen, und die Seite bleibt einfarbig
 * lesbar statt bunt gesprenkelt.
 *
 * Alle Maße sind Gerätepunkte: Die Seite fließt in der Breite des Geräts und
 * wird nicht mehr als Ganzes verkleinert (siehe `BookPage`). Die Schriftgrade
 * hier sind deshalb die, die man am Ende auch sieht.
 */
interface BlockProps<B> {
  block: B;
  accent: string;
}

export function Heading({ block, accent }: BlockProps<HeadingBlock>) {
  if (block.level === 1) {
    return <SectionHeading text={block.text} accent={accent} />;
  }
  return (
    <Text selectable style={subHeading}>
      {block.text}
    </Text>
  );
}

export function Paragraph({
  block,
  level,
  translatable = level === 'A1',
}: BlockProps<TextBlock> & { level?: CefrLevel; translatable?: boolean }) {
  const [open, setOpen] = useState(false);

  const { t, tLanguage } = useTranslation();
  const nativeLanguage = useAuthStore((state) => state.user?.nativeLanguage);
  const language = asTranslatableLanguage(nativeLanguage);
  const languageLabel = language ? tLanguage(language) : '';
  const translation = translatable && language ? block.translations?.[language] : undefined;

  return (
    <View style={{ gap: 8 }}>
      <Text selectable style={bodyText}>
        {block.text}
      </Text>
      {translation ? (
        <>
          {open ? (
            <Text selectable style={translationText}>
              {translation}
            </Text>
          ) : null}
          <Pressable onPress={() => setOpen((value) => !value)} hitSlop={8}>
            <Text style={translationToggle}>
              {open
                ? t('blockHideTranslation')
                : t('blockShowInLanguage', { language: languageLabel })}
            </Text>
          </Pressable>
        </>
      ) : null}
    </View>
  );
}

/**
 * Merkkasten: farbiger Balken links, getönter Grund – wie im Lehrwerk.
 *
 * Auf A1 kann man eine Grammatikerklärung noch nicht auf Deutsch verstehen –
 * ist im Profil eine Muttersprache mit hinterlegter Übersetzung eingestellt,
 * lässt sich Titel und Text zusätzlich in dieser Sprache aufklappen (siehe
 * `InfoBlock.translations`). Die Tabelle bleibt deutsch, sie enthält den zu
 * lernenden Stoff selbst.
 */
export function Info({
  block,
  level,
  translatable = level === 'A1',
}: BlockProps<InfoBlock> & {
  level?: CefrLevel;
  /** Übersetzung anbieten – im Buch nur auf A1. */
  translatable?: boolean;
}) {
  const style = INFO_STYLES[block.variant];
  const [open, setOpen] = useState(false);

  const { t, tLanguage } = useTranslation();
  const nativeLanguage = useAuthStore((state) => state.user?.nativeLanguage);
  const language = asTranslatableLanguage(nativeLanguage);
  const languageLabel = language ? tLanguage(language) : '';
  const translation = translatable && language ? block.translations?.[language] : undefined;

  return (
    <View style={[infoBox, { backgroundColor: style.background, borderLeftColor: style.accent }]}>
      <BoxLabel text={t(style.label)} color={style.accent} />
      <Text selectable style={infoTitle}>
        {block.title}
      </Text>
      <Text selectable style={bodyText}>
        {block.text}
      </Text>
      {block.table ? (
        <PrintTable headers={block.table.headers} rows={block.table.rows} accent={style.accent} />
      ) : null}
      {translation ? (
        <>
          {open ? (
            <View style={{ gap: 3, marginTop: 2 }}>
              <Text selectable style={[infoTitle, { fontSize: 15 }]}>
                {translation.title}
              </Text>
              <Text selectable style={translationText}>
                {translation.text}
              </Text>
            </View>
          ) : null}
          <Pressable onPress={() => setOpen((value) => !value)} hitSlop={8}>
            <Text style={translationToggle}>
              {open
                ? t('blockHideTranslation')
                : t('blockShowInLanguage', { language: languageLabel })}
            </Text>
          </Pressable>
        </>
      ) : null}
    </View>
  );
}

/**
 * Kastentypen. Die Tönungen sind Papiertöne, keine Signalfarben: Ein Lehrwerk
 * druckt Kästen in einem zweiten, blasseren Ton derselben Farbe – nicht in
 * Pastellblau, Pastellgelb und Pastellgrün nebeneinander.
 */
const INFO_STYLES: Record<
  InfoBlock['variant'],
  { label: TranslationKey; background: string; accent: string }
> = {
  GRAMMAR: { label: 'blockGrammar', background: '#F1F3F8', accent: book.printRed },
  TIP: { label: 'blockTip', background: book.tint, accent: book.attention },
  CULTURE: { label: 'blockCulture', background: '#EFF3F1', accent: book.printSlate },
  IMPORTANT: { label: 'blockImportant', background: '#F8F0EE', accent: book.wrong },
};

/**
 * Tabellen sind im Buch Linienraster, kein Kartenstapel.
 *
 * Jede Zelle bekommt denselben `flex: 1` (plus `flexBasis: 0`, damit der
 * Inhalt die Breite nicht mehr diktiert) – so füllt die Tabelle immer die
 * volle Breite ihres Kastens, und weil alle Zeilen (Kopf wie Daten) exakt
 * dieselben Spaltenbreiten teilen, können sie nie gegeneinander verrutschen,
 * unabhängig davon, wie lang der Text in einer einzelnen Zeile ist.
 */
function PrintTable({
  headers,
  rows,
  accent,
}: {
  headers: string[];
  rows: string[][];
  accent: string;
}) {
  return (
    <View style={tableFrame}>
      <View style={[tableRow, { borderBottomWidth: 1.5, borderBottomColor: accent }]}>
        {headers.map((header, index) => (
          <View
            key={index}
            style={[tableCell, index < headers.length - 1 && tableCellDivider]}
          >
            <Text selectable style={[tableHeadText, { color: accent }]}>
              {header}
            </Text>
          </View>
        ))}
      </View>

      {rows.map((row, rowIndex) => (
        <View
          key={rowIndex}
          style={[
            tableRow,
            rowIndex < rows.length - 1 && { borderBottomWidth: 1, borderBottomColor: book.rule },
          ]}
        >
          {row.map((cell, cellIndex) => (
            <View key={cellIndex} style={[tableCell, cellIndex < row.length - 1 && tableCellDivider]}>
              <Text selectable style={[tableCellText, cellIndex === 0 && { color: book.inkSoft }]}>
                {cell}
              </Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

/**
 * Dialog.
 *
 * Der Sprechername steht über seiner Zeile, nicht in einer festen Spalte
 * daneben: Auf einem Telefon fraß diese Spalte ein Drittel der Zeilenbreite,
 * und der Dialogtext brach nach drei Wörtern um. Über der Zeile kostet der
 * Name keine Breite und liest sich trotzdem wie ein gedrucktes Skript.
 */
export function Dialogue({ block, accent }: BlockProps<DialogueBlock>) {
  const { t } = useTranslation();
  const [showTranslations, setShowTranslations] = useState(false);
  const hasTranslations = block.lines.some((line) => line.translation);

  return (
    <View style={dialogueBox}>
      <BoxLabel text={block.title ?? t('blockDialogue')} color={accent} />

      <View style={{ gap: 14, marginTop: 14 }}>
        {block.lines.map((line, index) => (
          <View key={index} style={{ gap: 2 }}>
            <Text style={speakerName}>{line.speaker}</Text>
            <Text selectable style={bodyText}>
              {line.text}
            </Text>
            {showTranslations && line.translation ? (
              <Text selectable style={translationText}>
                {line.translation}
              </Text>
            ) : null}
          </View>
        ))}
      </View>

      {hasTranslations ? (
        <Pressable onPress={() => setShowTranslations((value) => !value)} hitSlop={8}>
          <Text style={[translationToggle, { marginTop: 12 }]}>
            {showTranslations ? t('blockHideTranslation') : t('blockShowTranslation')}
          </Text>
        </Pressable>
      ) : null}
    </View>
  );
}

/**
 * Übersetzung eines Vokabeleintrags wählen: die Muttersprache der Lernperson,
 * sonst Englisch als Brückensprache, sonst irgendein vorhandener Eintrag –
 * nie ungeprüft der erstbeste Schlüssel, sonst sieht z. B. eine
 * französischsprachige Person im Spanischkurs deutsche Wörter.
 */
function pickVocabTranslation(
  translations: Partial<Record<TranslatableLanguage, string>>,
  language: TranslatableLanguage | null,
): string | undefined {
  if (language && translations[language]) return translations[language];
  if (translations.en) return translations.en;
  return Object.values(translations)[0];
}

export function VocabList({ block, accent }: BlockProps<VocabListBlock>) {
  const { t } = useTranslation();
  const nativeLanguage = useAuthStore((state) => state.user?.nativeLanguage);
  const language = asTranslatableLanguage(nativeLanguage);

  return (
    <View style={vocabBox}>
      <BoxLabel text={block.title ?? t('blockVocabulary')} color={accent} />

      <View style={{ marginTop: 12 }}>
        {block.items.map((item, index) => (
          <View
            key={index}
            style={[
              { gap: 2, paddingVertical: 9 },
              index < block.items.length - 1 && {
                borderBottomWidth: 1,
                borderBottomColor: book.ruleFaint,
              },
            ]}
          >
            <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: 6, flexWrap: 'wrap' }}>
              {item.article ? (
                <Text style={[articleText, { color: ARTICLE_COLORS[item.article] }]}>
                  {item.article}
                </Text>
              ) : null}
              <Text selectable style={termText}>
                {item.term}
              </Text>
              {item.plural ? (
                <Text style={metaText}>
                  {t('blockPluralShort')} {item.plural}
                </Text>
              ) : null}
            </View>
            <Text selectable style={metaText}>
              {pickVocabTranslation(item.translations, language)}
            </Text>
            {item.example ? (
              <Text selectable style={exampleText}>
                {item.example}
              </Text>
            ) : null}
          </View>
        ))}
      </View>
    </View>
  );
}

/**
 * Feste Artikelfarben (blau / rot / grün) sind im Deutschunterricht Konvention
 * und helfen beim Einprägen des Genus.
 */
const ARTICLE_COLORS: Record<'der' | 'die' | 'das', string> = {
  der: book.printRed,
  die: book.wrong,
  das: book.printSlate,
};

export function AudioPlaceholder({ block, accent }: BlockProps<AudioBlock>) {
  const { t } = useTranslation();

  return (
    <View style={audioBox}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        {/* Gedrucktes Tonzeichen statt Lautsprecher-Emoji. */}
        <AudioMark color={accent} size={24} />
        <View style={{ flex: 1, gap: 1 }}>
          <Text style={[bookLabel, { color: accent, fontSize: 10, letterSpacing: 1.2 }]}>
            {t('blockAudio')}
          </Text>
          <Text selectable style={infoTitle}>
            {block.title}
          </Text>
        </View>
      </View>
      {block.transcript ? (
        <Text selectable style={bodyText}>
          {block.transcript}
        </Text>
      ) : (
        <Text style={metaText}>{t('blockAudioPending')}</Text>
      )}
    </View>
  );
}

/**
 * Bild im Lehrwerk – gerahmt wie ein eingeklebtes Foto, mit Bildunterschrift
 * darunter. Es gibt keine echten Fotos in der Anwendung; `ImageBlock.url`
 * trägt stattdessen einen `illustration:<key>`-Schlüssel, über den
 * `getSceneComponent` eine passende, selbst gezeichnete Szene auswählt (siehe
 * `SceneIllustrations.tsx`). `alt` bleibt Pflichtfeld und wird als
 * Accessibility-Label gereicht, genau wie bei einem echten Bild.
 */
export function SceneImage({ block }: BlockProps<ImageBlock>) {
  const Scene = getSceneComponent(block.url);

  return (
    <View style={{ gap: 7 }}>
      <View style={imageFrame} accessibilityLabel={block.alt} accessible>
        <Scene />
      </View>
      {block.caption ? (
        <Text selectable style={imageCaption}>
          {block.caption}
        </Text>
      ) : null}
    </View>
  );
}

// ------------------------------------------------------------------ Styles

/** Die Lesegröße der Seite. Alles andere staffelt sich um sie herum. */
export const bodyText = {
  fontFamily: bookFont,
  fontSize: 17,
  lineHeight: 27,
  color: book.ink,
};

const subHeading = {
  fontFamily: bookFont,
  fontSize: 20,
  lineHeight: 28,
  fontWeight: '700' as const,
  color: book.ink,
};

const translationToggle = {
  fontFamily: bookSans,
  fontSize: 13,
  letterSpacing: 0.3,
  color: book.inkFaint,
};

const translationText = {
  fontFamily: bookFont,
  fontSize: 15,
  lineHeight: 23,
  color: book.inkSoft,
  fontStyle: 'italic' as const,
};

/*
  Der Kasten trägt eine Haarlinie ringsum und links den kräftigen Balken in
  der Kastenfarbe – die Randfarben werden je Seite gesetzt, damit der
  Aufrufer nur noch den Balken einfärbt.
*/
const infoBox = {
  borderWidth: 1,
  borderLeftWidth: 3,
  borderTopColor: book.rule,
  borderRightColor: book.rule,
  borderBottomColor: book.rule,
  paddingVertical: 14,
  paddingHorizontal: 15,
  gap: 8,
};

const infoTitle = {
  fontFamily: bookSans,
  fontSize: 16,
  fontWeight: '700' as const,
  color: book.ink,
  letterSpacing: 0.1,
};

const dialogueBox = {
  backgroundColor: book.tint,
  borderTopWidth: 1,
  borderBottomWidth: 1,
  borderColor: book.rule,
  paddingVertical: 15,
  paddingHorizontal: 15,
};

const vocabBox = {
  backgroundColor: book.paper,
  borderWidth: 1,
  borderColor: book.rule,
  paddingVertical: 15,
  paddingHorizontal: 15,
};

const audioBox = {
  backgroundColor: book.tint,
  borderWidth: 1,
  borderColor: book.rule,
  paddingVertical: 14,
  paddingHorizontal: 15,
  gap: 10,
};

const speakerName = {
  fontFamily: bookSans,
  fontSize: 11,
  letterSpacing: 1.1,
  textTransform: 'uppercase' as const,
  fontWeight: '700' as const,
  color: book.inkSoft,
};

const tableFrame = {
  width: '100%' as const,
  marginTop: 4,
  borderWidth: 1,
  borderColor: book.rule,
  backgroundColor: book.paper,
  overflow: 'hidden' as const,
};

const tableRow = { flexDirection: 'row' as const };

/**
 * `flexBasis: 0` zusammen mit `flex: 1` ist entscheidend: Ohne sie bestimmt
 * der jeweils längste Zelleninhalt einer Zeile deren Breite, und weil jede
 * Zeile ihr eigener Flex-Container ist, würden die Spalten von Zeile zu Zeile
 * unterschiedlich breit ausfallen. So teilen sich alle Zellen einer Tabelle
 * dieselbe Breite, ganz gleich, was in ihnen steht.
 */
const tableCell = {
  flex: 1,
  flexBasis: 0,
  minWidth: 0,
  paddingHorizontal: 9,
  paddingVertical: 8,
};

const tableCellDivider = {
  borderRightWidth: 1,
  borderRightColor: book.ruleFaint,
};

const tableHeadText = {
  ...bookLabel,
  fontSize: 10,
  letterSpacing: 1,
};

const tableCellText = {
  fontFamily: bookFont,
  fontSize: 15,
  lineHeight: 22,
  color: book.ink,
};

const articleText = {
  fontFamily: bookFont,
  fontSize: 17,
  fontWeight: '700' as const,
};

const termText = {
  fontFamily: bookFont,
  fontSize: 17,
  fontWeight: '700' as const,
  color: book.ink,
};

const metaText = {
  fontFamily: bookFont,
  fontSize: 15,
  lineHeight: 22,
  color: book.inkSoft,
};

const exampleText = {
  fontFamily: bookFont,
  fontSize: 15,
  lineHeight: 22,
  color: book.inkSoft,
  fontStyle: 'italic' as const,
};

/** Rahmen wie bei einem eingeklebten Foto: schmale Kante, leichter Schatten. */
const imageFrame = {
  width: '100%' as const,
  aspectRatio: 320 / 200,
  borderWidth: 1,
  borderColor: book.paperEdge,
  overflow: 'hidden' as const,
  backgroundColor: book.tint,
  shadowColor: book.ink,
  shadowOpacity: 0.1,
  shadowRadius: 6,
  shadowOffset: { width: 0, height: 3 },
};

const imageCaption = {
  fontFamily: bookFont,
  fontSize: 14,
  lineHeight: 20,
  color: book.inkSoft,
  fontStyle: 'italic' as const,
  textAlign: 'center' as const,
};
