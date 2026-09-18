import React, { useEffect, useMemo, useState } from 'react';
import { GestureResponderEvent, Pressable, Text, View } from 'react-native';
import type { LibraryGlossaryEntry, LibrarySection } from '@lingua/shared';
import { useTranslation } from '../../i18n';
import { useAuthStore } from '../../store/auth.store';
import { asTranslatableLanguage } from '../../utils/translation';
import { colors, fontFamily, radius, reading, readingLabel, spacing } from '../../theme';

/** Das angetippte Wort samt Druckstelle – daraus setzt `GlossaryPopover` den Zettel. */
export type GlossaryAnchor = {
  /** `${sectionId}:${index}`; markiert im Absatz, welches Wort gerade offen ist. */
  id: string;
  entry: LibraryGlossaryEntry;
  /** Bildschirmkoordinaten des Tippens. */
  x: number;
  y: number;
  /** Zeilenhöhe des Absatzes – daraus wird die Ober- und Unterkante des Worts geschätzt. */
  lineHeight: number;
};

/** Einzug der Folgeabsätze: zwei Geviertspatien, wie im Blocksatz eines Buchs. */
const INDENT = '\u2003\u2003';

/** So viele Zeichen des ersten Absatzes werden höchstens in Versalien gesetzt. */
const SMALL_CAPS_MAX = 20;

/**
 * Begleiter, die im Glossar vor dem Stichwort stehen, im Text aber ein anderer
 * sein können: „la casualidad“ steht dort als „casualidad“, „el sistema de
 * recomendación“ als „un sistema de recomendación“.
 *
 * Eine Liste für alle fünf Sprachen der App genügt, weil nur der *Begriff*
 * gekürzt wird und nie der Text: Ein Wort, das hier fälschlich als Artikel
 * gilt, kann die Suche nur weiter machen, nie falsch. Zuerst wird ohnehin die
 * volle Wörterbuchform probiert.
 */
const ARTICLES = new Set([
  'der', 'die', 'das', 'den', 'dem', 'des', 'ein', 'eine', 'einen', 'einem', 'einer',
  'the', 'a', 'an', 'to',
  'el', 'la', 'los', 'las', 'un', 'una', 'unos', 'unas',
  'le', 'les', 'du', 'de',
  'il', 'lo', 'gli', 'i', 'uno',
]);

/**
 * Endungen, die ein Stichwort im Satz zusätzlich tragen darf: „la métrica“
 * steht dort als „métricas“, „die Schlange“ als „Schlangen“.
 *
 * Bewusst eine kurze, geschlossene Liste statt einer Stammform-Regel – und
 * nur an Wörtern ab fünf Buchstaben, damit aus „Rat“ nie „Rate“ wird. Alles
 * darüber hinaus (Stammwechsel wie „predecir“ → „predice“) bleibt ununter-
 * strichen und wandert als Marke unter den Absatz.
 */
const INFLECTIONS = ['s', 'es', 'e', 'en', 'n', 'er', 'a', 'as', 'os', 'i'];

/** Ab dieser Wortlänge ist eine angehängte Endung mehr Beugung als Zufall. */
const INFLECTABLE_MIN = 5;

/**
 * Ein Abschnitt eines Lesetexts – in der Regel ein Absatz.
 *
 * Gesetzt wie eine Buchseite, nicht wie ein Bildschirm: Blocksatz, die
 * Folgeabsätze mit Einzug statt mit Leerraum getrennt, der erste mit Initiale
 * und den ersten Wörtern in Versalien. Was den Text erklärt, drängt sich
 * nicht dazwischen, sondern hängt an ihm:
 *
 * – Schwierige Wörter stehen unterstrichen und in der Leitfarbe *im Satz*,
 *   wie ein Verweis. Ein Tippen darauf öffnet den Zettel mit der Erklärung
 *   (`GlossaryPopover`); der Absatz selbst bleibt dabei stehen, wo er ist.
 * – Die Übersetzung steht als kleiner, eingerückter Kasten unter dem Absatz,
 *   wie die Prosafassung unter dem Vers in einer zweisprachigen Ausgabe.
 *   Tippen auf den Kasten klappt ihn weg, der Lesekopf schaltet alle auf
 *   einmal.
 *
 * Beides ist bewusst leiser gesetzt als der Absatz – getöntes Papier,
 * Haarlinien, gesperrte Versalien als Etikett –, damit der Text die Seite
 * behält.
 */
export function ReadingSection({
  section,
  fontSize = reading.textSizes[1],
  dropCap = false,
  translationsOpen = true,
  activeTermId,
  onTermPress,
}: {
  section: LibrarySection;
  /** Vom Lesekopf eingestellte Schriftgröße (siehe `ReaderScreen`). */
  fontSize?: number;
  /** Nur der erste Absatz eines Texts bekommt Initiale und Versalien. */
  dropCap?: boolean;
  /** Stand des „Übersetzung“-Schalters im Lesekopf. */
  translationsOpen?: boolean;
  /** Welches Wort gerade erklärt wird – es bleibt so lange hervorgehoben. */
  activeTermId?: string | null;
  onTermPress?: (anchor: GlossaryAnchor) => void;
}) {
  const [translationOpen, setTranslationOpen] = useState(translationsOpen);

  // Der Schalter im Lesekopf setzt alle Absätze gleichzeitig; danach kann
  // jeder Absatz wieder für sich auf- und zugeklappt werden.
  useEffect(() => setTranslationOpen(translationsOpen), [translationsOpen]);

  const { t, tLanguage } = useTranslation();
  const nativeLanguage = useAuthStore((state) => state.user?.nativeLanguage);
  const language = asTranslatableLanguage(nativeLanguage);
  const languageLabel = language ? tLanguage(language) : '';
  const translation = language ? section.translations?.[language] : undefined;

  const lineHeight = Math.round(fontSize * reading.lineHeightRatio);
  const { segments, unmatched } = useMemo(
    () => markTerms(section.text, section.glossary ?? [], dropCap),
    [section.text, section.glossary, dropCap],
  );

  function openTerm(entry: LibraryGlossaryEntry, index: number, event: GestureResponderEvent) {
    const { pageX, pageY } = event.nativeEvent;
    onTermPress?.({ id: `${section.id}:${index}`, entry, x: pageX, y: pageY, lineHeight });
  }

  return (
    <View>
      <Text style={[bodyText, { fontSize, lineHeight }]}>
        {segments.map((segment, position) => {
          if (segment.kind === 'initial') {
            return (
              <Text
                key={position}
                style={[initialStyle, { fontSize: fontSize * 2.1, lineHeight: lineHeight * 1.25 }]}
              >
                {segment.text}
              </Text>
            );
          }

          if (segment.kind === 'smallCaps') {
            return (
              <Text key={position} style={smallCapsStyle}>
                {segment.text}
              </Text>
            );
          }

          if (segment.kind === 'term') {
            const active = activeTermId === `${section.id}:${segment.index}`;
            return (
              <Text
                key={position}
                accessibilityRole="button"
                accessibilityLabel={t('readingExplainWord', { word: segment.entry.term })}
                suppressHighlighting
                onPress={(event) => openTerm(segment.entry, segment.index, event)}
                style={[termStyle, active && termActiveStyle]}
              >
                {segment.text}
              </Text>
            );
          }

          return <Text key={position}>{segment.text}</Text>;
        })}
      </Text>

      {/* Begriffe, die im Absatz nicht wörtlich vorkommen (gebeugte Formen,
          Wendungen), lassen sich nicht unterstreichen – sie stehen deshalb als
          kleine Marken unter dem Absatz und öffnen denselben Zettel. */}
      {unmatched.length ? (
        <View style={strayRow}>
          <Text style={apparatusLabel}>{t('readingWordsLabel')}</Text>
          {unmatched.map(({ entry, index }) => {
            const active = activeTermId === `${section.id}:${index}`;
            return (
              <Pressable
                key={entry.term}
                accessibilityRole="button"
                accessibilityLabel={t('readingExplainWord', { word: entry.term })}
                onPress={(event) => openTerm(entry, index, event)}
                style={[strayChip, active && strayChipActive]}
              >
                <Text style={strayChipText}>{entry.term}</Text>
              </Pressable>
            );
          })}
        </View>
      ) : null}

      {translation ? (
        translationOpen ? (
          <Pressable
            accessibilityRole="button"
            accessibilityState={{ expanded: true }}
            accessibilityLabel={t('blockHideTranslation')}
            onPress={() => setTranslationOpen(false)}
            style={translationBox}
          >
            <Text style={translationLabel}>{languageLabel}</Text>
            <Text style={[translationText, { fontSize: fontSize - 3, lineHeight: lineHeight - 5 }]}>
              {translation}
            </Text>
          </Pressable>
        ) : (
          <Pressable
            accessibilityRole="button"
            accessibilityState={{ expanded: false }}
            onPress={() => setTranslationOpen(true)}
            hitSlop={8}
            style={translationHandle}
          >
            <View style={translationHandleRule} />
            <Text style={translationHandleText}>
              {t('readingReadInLanguage', { language: languageLabel })}
            </Text>
          </Pressable>
        )
      ) : null}
    </View>
  );
}

type Segment =
  | { kind: 'text'; text: string }
  | { kind: 'initial'; text: string }
  | { kind: 'smallCaps'; text: string }
  | { kind: 'term'; text: string; entry: LibraryGlossaryEntry; index: number };

/**
 * Ein Buchstabe? Geprüft über den Groß-/Kleinschreibungs-Unterschied statt
 * über eine Zeichenliste: das gilt für jedes lateinische Alphabet, das die App
 * unterstützt, ohne dass Umlaute einzeln aufgezählt werden müssten.
 */
function isLetter(character: string) {
  return character.length > 0 && character.toLowerCase() !== character.toUpperCase();
}

/**
 * Die Schreibweisen, unter denen ein Stichwort im Absatz gesucht wird – von
 * der genauesten zur weitesten: die volle Wörterbuchform, dieselbe ohne
 * nachgestellte Lesart-Angabe, ohne Artikel und ohne das vorangestellte
 * Apostroph-„l’“ des Französischen und Italienischen.
 *
 * Weiter geht die Suche bewusst nicht. Eine Stammform zu raten („predecir“ →
 * „predice“) würde irgendwann das falsche Wort unterstreichen, und ein falscher
 * Verweis im Satz ist schlimmer als eine Marke unter dem Absatz.
 */
function searchForms(term: string) {
  // Ein nachgestellter Zusatz sagt, in welcher Bedeutung das Wort gemeint ist
  // („die Schlange (hier)“) – im Satz steht er nicht mit.
  const plain = term.replace(/\s*\([^)]*\)\s*$/, '').trim();
  const forms = plain === term ? [term] : [term, plain];
  const space = plain.indexOf(' ');

  if (space > 0 && ARTICLES.has(plain.slice(0, space).toLowerCase())) {
    forms.push(plain.slice(space + 1));
  }

  if (/^l['’]/i.test(plain)) forms.push(plain.slice(2));

  // Erst wenn keine Schreibweise wörtlich im Satz steht, wird gebeugt gesucht –
  // die genaue Fundstelle soll immer gewinnen.
  const inflected = forms.flatMap((form) =>
    lastWordLength(form) >= INFLECTABLE_MIN ? INFLECTIONS.map((ending) => form + ending) : [],
  );

  return [...forms, ...inflected];
}

/** Länge des letzten Worts – nur daran hängt eine Beugungsendung. */
function lastWordLength(form: string) {
  return form.length - form.lastIndexOf(' ') - 1;
}

/** Erste Fundstelle einer Schreibweise, an Wortgrenzen – sonst `-1`. */
function findWord(text: string, lower: string, needle: string) {
  for (let at = lower.indexOf(needle); at >= 0; at = lower.indexOf(needle, at + 1)) {
    // Nur ganze Wörter: „Rat“ soll nicht in „Verrat“ unterstrichen werden.
    if (!isLetter(text.charAt(at - 1)) && !isLetter(text.charAt(at + needle.length))) return at;
  }
  return -1;
}

/**
 * Zerlegt den Absatz in die Stücke, aus denen er gesetzt wird: Fließtext,
 * Initiale, Versalien und die Glossar-Begriffe, die als Verweis im Satz
 * stehen.
 *
 * Ein Begriff wird nur an seinem *ersten* Vorkommen markiert – ein Wort, das
 * in jedem Satz unterstrichen ist, liest sich wie ein Fehler, nicht wie eine
 * Anmerkung. Überschneiden sich zwei Begriffe, gewinnt der weiter vorn
 * beginnende. Begriffe, die nicht wörtlich im Absatz stehen, kommen als
 * `unmatched` zurück und werden als Marken darunter gezeigt, damit keine
 * Erklärung verlorengeht.
 */
function markTerms(text: string, glossary: LibraryGlossaryEntry[], dropCap: boolean) {
  const lower = text.toLowerCase();
  const hits: Array<{ start: number; end: number; entry: LibraryGlossaryEntry; index: number }> = [];
  const unmatched: Array<{ entry: LibraryGlossaryEntry; index: number }> = [];

  glossary.forEach((entry, index) => {
    for (const form of searchForms(entry.term.trim())) {
      const needle = form.toLowerCase();
      if (!needle) continue;

      const start = findWord(text, lower, needle);
      if (start >= 0) {
        hits.push({ start, end: start + needle.length, entry, index });
        return;
      }
    }

    unmatched.push({ entry, index });
  });

  hits.sort((a, b) => a.start - b.start);

  const segments: Segment[] = [];
  let cursor = 0;

  for (const hit of hits) {
    if (hit.start < cursor) {
      unmatched.push({ entry: hit.entry, index: hit.index });
      continue;
    }
    // `cursor === 0` auch bei leerem Stück: Beginnt der Absatz direkt mit
    // einem Begriff, muss der Einzug trotzdem gesetzt werden.
    if (hit.start > cursor || cursor === 0) {
      pushProse(segments, text.slice(cursor, hit.start), cursor === 0, dropCap);
    }
    segments.push({
      kind: 'term',
      text: text.slice(hit.start, hit.end),
      entry: hit.entry,
      index: hit.index,
    });
    cursor = hit.end;
  }

  if (cursor < text.length) pushProse(segments, text.slice(cursor), cursor === 0, dropCap);

  return { segments, unmatched };
}

/**
 * Fügt ein Stück Fließtext an – und setzt am Textanfang den Buchanfang:
 * Initiale und Versalien beim ersten Absatz, Einzug bei allen anderen.
 *
 * Die Initiale trägt nur, wenn der Absatz mit einem Buchstaben beginnt – vor
 * einem Anführungszeichen oder einer Ziffer sähe sie wie ein Fehler aus. Und
 * sie entfällt, wenn ausgerechnet das erste Wort ein Glossar-Begriff ist:
 * ein unterstrichener Verweis in Initialgröße wäre ein Bild zu viel.
 */
function pushProse(segments: Segment[], text: string, atStart: boolean, dropCap: boolean) {
  if (!atStart) {
    segments.push({ kind: 'text', text });
    return;
  }

  // Beginnt der Absatz mit einem Begriff, bleibt hier nichts zu setzen – außer
  // dem Einzug, den auch ein Absatz ohne eigenen Textanfang braucht.
  if (!text) {
    if (!dropCap) segments.push({ kind: 'text', text: INDENT });
    return;
  }

  if (!dropCap) {
    segments.push({ kind: 'text', text: INDENT + text });
    return;
  }

  if (!isLetter(text.charAt(0))) {
    segments.push({ kind: 'text', text });
    return;
  }

  segments.push({ kind: 'initial', text: text.charAt(0) });

  // Die Versalien laufen bis zum letzten Wortende vor der Höchstlänge, damit
  // die Sperrung nie mitten in einem Wort abbricht.
  const rest = text.slice(1);
  const cut = rest.slice(0, SMALL_CAPS_MAX).lastIndexOf(' ');

  if (cut > 0) {
    segments.push({ kind: 'smallCaps', text: rest.slice(0, cut).toUpperCase() });
    segments.push({ kind: 'text', text: rest.slice(cut) });
  } else {
    segments.push({ kind: 'text', text: rest });
  }
}

/**
 * Blocksatz gibt der Spalte die geschlossene Kante, an der man eine gedruckte
 * Seite erkennt. Android setzt ihn erst ab API 26 um und fällt sonst still auf
 * Flattersatz zurück – ein Verlust an Anmutung, kein Fehler im Bild.
 */
const bodyText = {
  fontFamily: fontFamily.regular,
  color: reading.ink,
  textAlign: 'justify' as const,
};

/**
 * Initiale des ersten Absatzes. Eine echte, vom Text umflossene Initiale kann
 * React Native nicht setzen – ein deutlich größerer erster Buchstabe in
 * derselben Zeile kommt dem Bild eines gedruckten Textanfangs am nächsten und
 * kostet keine Sonderbehandlung des Umbruchs.
 */
const initialStyle = {
  fontFamily: fontFamily.bold,
  color: colors.primary,
};

/** Die ersten Wörter in gesperrten Versalien – der zweite Teil des Buchanfangs. */
const smallCapsStyle = {
  fontFamily: fontFamily.semiBold,
  letterSpacing: 0.8,
  color: reading.ink,
};

/**
 * Der Verweis im Satz: Leitfarbe und Unterstreichung, sonst nichts. Kein
 * eigener Schnitt und keine Fläche – das Wort soll seine Zeile nicht
 * auseinanderziehen, sondern nur als anklickbar zu erkennen sein.
 */
const termStyle = {
  color: colors.primary,
  textDecorationLine: 'underline' as const,
  textDecorationColor: colors.primary,
};

/** Solange der Zettel offen ist, bleibt das Wort als getönte Stelle sichtbar. */
const termActiveStyle = {
  backgroundColor: colors.primarySoft,
  color: colors.primaryDark,
};

const apparatusLabel = {
  ...readingLabel,
  color: reading.inkFaint,
  marginRight: spacing.xs,
};

const strayRow = {
  flexDirection: 'row' as const,
  flexWrap: 'wrap' as const,
  alignItems: 'center' as const,
  gap: spacing.xs,
  marginTop: spacing.sm,
};

const strayChip = {
  paddingHorizontal: spacing.sm,
  paddingVertical: 3,
  borderRadius: radius.full,
  borderWidth: 1,
  borderStyle: 'dashed' as const,
  borderColor: colors.primary,
  backgroundColor: colors.primarySoft,
};

const strayChipActive = {
  borderStyle: 'solid' as const,
};

const strayChipText = {
  fontFamily: fontFamily.semiBold,
  fontSize: 12,
  fontWeight: '600' as const,
  color: colors.primary,
};

/**
 * Der Übersetzungskasten. Eingerückt und getönt, mit Rücken in der Leitfarbe –
 * er soll unter dem Absatz hängen wie eine Fußnote, nicht neben ihm stehen
 * wie ein zweiter Absatz.
 */
const translationBox = {
  marginTop: spacing.sm,
  marginLeft: spacing.lg,
  backgroundColor: reading.paperDeep,
  borderRadius: radius.md,
  borderWidth: 1,
  borderColor: reading.edge,
  borderLeftWidth: 3,
  borderLeftColor: colors.primary,
  paddingVertical: spacing.sm,
  paddingHorizontal: spacing.md,
  gap: 2,
};

const translationLabel = {
  ...readingLabel,
  color: colors.primary,
};

const translationText = {
  fontFamily: fontFamily.regular,
  fontStyle: 'italic' as const,
  color: reading.inkSoft,
};

/** Ist der Kasten zugeklappt, bleibt nur ein Haken am linken Rand zurück. */
const translationHandle = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  gap: spacing.sm,
  marginTop: spacing.xs,
  marginLeft: spacing.lg,
};

const translationHandleRule = {
  width: 14,
  height: 1,
  backgroundColor: reading.rule,
};

const translationHandleText = {
  ...readingLabel,
  color: reading.inkFaint,
};
