import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import type {
  AudioBlock,
  DialogueBlock,
  HeadingBlock,
  InfoBlock,
  TextBlock,
  VocabListBlock,
} from '@lingua/shared';
import { book, bookFont, bookLabel, bookSans } from '../../../theme';
import { AudioMark } from '../BookIcons';
import { BoxLabel, SectionHeading } from '../BookPage';

/**
 * Darstellungsblöcke des Kursbuchs, gesetzt wie eine gedruckte Lehrwerksseite:
 * Serifenschrift im Fließtext, Kästen mit farbigem Rand statt Karten mit
 * Schatten, Tabellen mit Linien statt Hintergrundflächen.
 *
 * Kästen werden benannt, nicht bebildert: Wo vorher ein Emoji stand, steht
 * jetzt das gesperrte Etikett GRAMMATIK, TIPP, LANDESKUNDE oder WICHTIG – so
 * kennzeichnet ein Lehrwerk seine Kästen, und die Seite bleibt einfarbig
 * lesbar statt bunt gesprenkelt.
 *
 * Alle Maße sind Buch-Einheiten – die Seite wird als Ganzes skaliert.
 */
interface BlockProps<B> {
  block: B;
  accent: string;
}

export function Heading({ block, accent }: BlockProps<HeadingBlock>) {
  if (block.level === 1) {
    return <SectionHeading text={block.text} accent={accent} />;
  }
  return <Text style={subHeading}>{block.text}</Text>;
}

export function Paragraph({ block }: BlockProps<TextBlock>) {
  const [open, setOpen] = useState(false);

  return (
    <View style={{ gap: 10 }}>
      <Text style={bodyText}>{block.text}</Text>
      {block.translation ? (
        <>
          {open ? <Text style={translationText}>{block.translation}</Text> : null}
          <Pressable onPress={() => setOpen((value) => !value)} hitSlop={8}>
            <Text style={translationToggle}>
              {open ? 'Übersetzung ausblenden' : 'Übersetzung anzeigen'}
            </Text>
          </Pressable>
        </>
      ) : null}
    </View>
  );
}

/** Merkkasten: farbiger Balken links, getönter Grund – wie im Lehrwerk. */
export function Info({ block }: BlockProps<InfoBlock>) {
  const style = INFO_STYLES[block.variant];

  return (
    <View style={[infoBox, { backgroundColor: style.background, borderLeftColor: style.accent }]}>
      <BoxLabel text={style.label} color={style.accent} />
      <Text style={infoTitle}>{block.title}</Text>
      <Text style={[bodyText, { fontSize: 20, lineHeight: 31 }]}>{block.text}</Text>
      {block.table ? (
        <PrintTable headers={block.table.headers} rows={block.table.rows} accent={style.accent} />
      ) : null}
    </View>
  );
}

/**
 * Kastentypen. Die Tönungen sind Papiertöne, keine Signalfarben: Ein Lehrwerk
 * druckt Kästen in einem zweiten, blasseren Ton derselben Farbe – nicht in
 * Pastellblau, Pastellgelb und Pastellgrün nebeneinander.
 */
const INFO_STYLES: Record<InfoBlock['variant'], { label: string; background: string; accent: string }> = {
  GRAMMAR: { label: 'Grammatik', background: '#F1F3F8', accent: book.kursbuch },
  TIP: { label: 'Tipp', background: book.tint, accent: book.attention },
  CULTURE: { label: 'Landeskunde', background: '#EFF3F1', accent: book.arbeitsbuch },
  IMPORTANT: { label: 'Wichtig', background: '#F8F0EE', accent: book.wrong },
};

/** Tabellen sind im Buch Linienraster, kein Kartenstapel. */
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
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 6 }}>
      <View style={tableFrame}>
        <View style={[tableRow, { borderBottomWidth: 1.5, borderBottomColor: accent }]}>
          {headers.map((header, index) => (
            <View key={index} style={tableCell}>
              <Text style={[tableHeadText, { color: accent }]}>{header}</Text>
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
              <View key={cellIndex} style={tableCell}>
                <Text style={[tableCellText, cellIndex === 0 && { color: book.inkSoft }]}>
                  {cell}
                </Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

export function Dialogue({ block, accent }: BlockProps<DialogueBlock>) {
  const [showTranslations, setShowTranslations] = useState(false);
  const hasTranslations = block.lines.some((line) => line.translation);

  return (
    <View style={dialogueBox}>
      <BoxLabel text={block.title ?? 'Dialog'} color={accent} />

      {/* Sprechernamen stehen in einer festen Spalte am linken Rand – der
          Satzspiegel eines gedruckten Dialogs, nicht ein Chatverlauf. */}
      <View style={{ gap: 15, marginTop: 16 }}>
        {block.lines.map((line, index) => (
          <View key={index} style={{ flexDirection: 'row', gap: 14 }}>
            <Text style={speakerName}>{line.speaker}</Text>
            <View style={{ flex: 1, gap: 4 }}>
              <Text style={[bodyText, { fontSize: 20, lineHeight: 30 }]}>{line.text}</Text>
              {showTranslations && line.translation ? (
                <Text style={translationText}>{line.translation}</Text>
              ) : null}
            </View>
          </View>
        ))}
      </View>

      {hasTranslations ? (
        <Pressable onPress={() => setShowTranslations((value) => !value)} hitSlop={8}>
          <Text style={[translationToggle, { marginTop: 14 }]}>
            {showTranslations ? 'Übersetzung ausblenden' : 'Übersetzung anzeigen'}
          </Text>
        </Pressable>
      ) : null}
    </View>
  );
}

export function VocabList({ block, accent }: BlockProps<VocabListBlock>) {
  return (
    <View style={vocabBox}>
      <BoxLabel text={block.title ?? 'Wortschatz'} color={accent} />

      <View style={{ gap: 13, marginTop: 16 }}>
        {block.items.map((item, index) => (
          <View
            key={index}
            style={[
              { gap: 3, paddingBottom: 13 },
              index < block.items.length - 1 && {
                borderBottomWidth: 1,
                borderBottomColor: book.ruleFaint,
              },
            ]}
          >
            <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}>
              {item.article ? (
                <Text style={[articleText, { color: ARTICLE_COLORS[item.article] }]}>
                  {item.article}
                </Text>
              ) : null}
              <Text style={termText}>{item.term}</Text>
              {item.plural ? <Text style={metaText}>Pl. {item.plural}</Text> : null}
              <Text style={metaText}>— {item.translation}</Text>
            </View>
            {item.example ? <Text style={exampleText}>{item.example}</Text> : null}
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
  der: book.kursbuch,
  die: book.wrong,
  das: book.arbeitsbuch,
};

export function AudioPlaceholder({ block, accent }: BlockProps<AudioBlock>) {
  return (
    <View style={audioBox}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
        {/* Gedrucktes Tonzeichen statt Lautsprecher-Emoji. */}
        <AudioMark color={accent} size={30} />
        <View style={{ flex: 1, gap: 2 }}>
          <Text style={[bookLabel, { color: accent, fontSize: 12 }]}>Hörtext</Text>
          <Text style={infoTitle}>{block.title}</Text>
        </View>
      </View>
      {block.transcript ? (
        <Text style={[bodyText, { fontSize: 19, lineHeight: 30 }]}>{block.transcript}</Text>
      ) : (
        <Text style={metaText}>Die Aufnahme zu dieser Übung folgt.</Text>
      )}
    </View>
  );
}

// ------------------------------------------------------------------ Styles

export const bodyText = {
  fontFamily: bookFont,
  fontSize: 21,
  lineHeight: 34,
  color: book.ink,
};

const subHeading = {
  fontFamily: bookFont,
  fontSize: 25,
  lineHeight: 33,
  fontWeight: '700' as const,
  color: book.ink,
};

const translationToggle = {
  fontFamily: bookSans,
  fontSize: 15,
  letterSpacing: 0.4,
  color: book.inkFaint,
};

const translationText = {
  fontFamily: bookFont,
  fontSize: 18,
  lineHeight: 27,
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
  paddingVertical: 20,
  paddingHorizontal: 22,
  gap: 11,
};

const infoTitle = {
  fontFamily: bookSans,
  fontSize: 19,
  fontWeight: '700' as const,
  color: book.ink,
  letterSpacing: 0.2,
};

const dialogueBox = {
  backgroundColor: book.tint,
  borderTopWidth: 1,
  borderBottomWidth: 1,
  borderColor: book.rule,
  paddingVertical: 22,
  paddingHorizontal: 24,
};

const vocabBox = {
  backgroundColor: '#FFFFFF',
  borderWidth: 1,
  borderColor: book.rule,
  paddingVertical: 22,
  paddingHorizontal: 24,
};

const audioBox = {
  backgroundColor: book.tint,
  borderWidth: 1,
  borderColor: book.rule,
  paddingVertical: 20,
  paddingHorizontal: 22,
  gap: 14,
};

const speakerName = {
  width: 112,
  fontFamily: bookSans,
  fontSize: 15,
  letterSpacing: 0.9,
  textTransform: 'uppercase' as const,
  fontWeight: '700' as const,
  color: book.inkSoft,
  paddingTop: 6,
};

const tableFrame = {
  borderWidth: 1,
  borderColor: book.rule,
  backgroundColor: '#FFFFFF',
  overflow: 'hidden' as const,
};

const tableRow = { flexDirection: 'row' as const };

const tableCell = {
  minWidth: 130,
  paddingHorizontal: 16,
  paddingVertical: 11,
  borderRightWidth: 1,
  borderRightColor: book.ruleFaint,
};

const tableHeadText = {
  ...bookLabel,
  fontSize: 12,
  letterSpacing: 1.2,
};

const tableCellText = {
  fontFamily: bookFont,
  fontSize: 18,
  color: book.ink,
};

const articleText = {
  fontFamily: bookFont,
  fontSize: 19,
  fontWeight: '700' as const,
};

const termText = {
  fontFamily: bookFont,
  fontSize: 20,
  fontWeight: '700' as const,
  color: book.ink,
};

const metaText = {
  fontFamily: bookFont,
  fontSize: 18,
  color: book.inkSoft,
};

const exampleText = {
  fontFamily: bookFont,
  fontSize: 17,
  lineHeight: 26,
  color: book.inkSoft,
  fontStyle: 'italic' as const,
};
