import React, { useEffect, useMemo, useState } from 'react';
import { GestureResponderEvent, Pressable, Text, View } from 'react-native';
import type { LibraryGlossaryEntry, LibrarySection } from '@lingua/shared';
import { useTranslation } from '../../i18n';
import { useAuthStore } from '../../store/auth.store';
import { asTranslatableLanguage } from '../../utils/translation';
import { fontFamily, radius, spacing } from '../../theme';
import { useReaderSettings } from './ReaderSettings';

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
const INDENT = '  ';

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
 * und den ersten Wörtern in Versalien. Schrift, Größe, Durchschuss und Papier
 * kommen aus den Leseeinstellungen (`useReaderSettings`) – der Absatz hat
 * keine eigene Farbe und keine eigene Größe, weil sonst das Nachtpapier oder
 * die Großschrift an einer Stelle der Seite nicht mitginge.
 *
 * Was den Text erklärt, drängt sich nicht dazwischen, sondern hängt an ihm:
 *
 * – Schwierige Wörter stehen unterstrichen und in der Akzentfarbe *im Satz*,
 *   wie ein Verweis. Ein Tippen darauf öffnet den Zettel mit der Erklärung
 *   (`GlossaryPopover`); der Absatz selbst bleibt dabei stehen, wo er ist.
 * – Die Übersetzung steht als kleiner, eingerückter Kasten unter dem Absatz,
 *   wie die Prosafassung unter dem Vers in einer zweisprachigen Ausgabe.
 *   Tippen auf den Kasten klappt ihn weg, das Einstellblatt schaltet alle auf
 *   einmal.
 *
 * Beides ist bewusst leiser gesetzt als der Absatz – getöntes Papier,
 * Haarlinien, gesperrte Versalien als Etikett –, damit der Text die Seite
 * behält.
 */
export function ReadingSection({
  section,
  dropCap = false,
  activeTermId,
  onTermPress,
}: {
  section: LibrarySection;
  /** Nur der erste Absatz eines Texts bekommt Initiale und Versalien. */
  dropCap?: boolean;
  /** Welches Wort gerade erklärt wird – es bleibt so lange hervorgehoben. */
  activeTermId?: string | null;
  onTermPress?: (anchor: GlossaryAnchor) => void;
}) {
  const settings = useReaderSettings();
  const c = settings.colors;
  const { fontSize, lineHeight } = settings;
  const [translationOpen, setTranslationOpen] = useState(settings.translations);

  // Der Schalter im Einstellblatt setzt alle Absätze gleichzeitig; danach kann
  // jeder Absatz wieder für sich auf- und zugeklappt werden.
  useEffect(() => setTranslationOpen(settings.translations), [settings.translations]);

  const { t, tLanguage } = useTranslation();
  const nativeLanguage = useAuthStore((state) => state.user?.nativeLanguage);
  const language = asTranslatableLanguage(nativeLanguage);
  const languageLabel = language ? tLanguage(language) : '';
  const translation = language ? section.translations?.[language] : undefined;

  const { segments, unmatched } = useMemo(
    () => markTerms(section.text, section.glossary ?? [], dropCap),
    [section.text, section.glossary, dropCap],
  );

  function openTerm(entry: LibraryGlossaryEntry, index: number, event: GestureResponderEvent) {
    // Der Leser schaltet auf einen Tipp seine Leisten ein und aus (siehe
    // `ReaderScreen`). Ein Tipp auf ein erklärtes Wort ist keiner davon – ohne
    // das hier würde mit jeder Worterklärung auch die Kopfleiste umspringen.
    stopBubbling(event);
    const { pageX, pageY } = event.nativeEvent;
    onTermPress?.({ id: `${section.id}:${index}`, entry, x: pageX, y: pageY, lineHeight });
  }

  return (
    <View>
      <Text
        style={[
          bodyText,
          {
            fontFamily: settings.serif ? fontFamily.serif : fontFamily.regular,
            color: c.ink,
            fontSize,
            lineHeight,
          },
        ]}
      >
        {segments.map((segment, position) => {
          if (segment.kind === 'initial') {
            return (
              <Text
                key={position}
                style={{
                  fontFamily: settings.serif ? fontFamily.serif : fontFamily.bold,
                  fontWeight: '700',
                  color: c.accent,
                  fontSize: fontSize * 2.1,
                  lineHeight: lineHeight * 1.25,
                }}
              >
                {segment.text}
              </Text>
            );
          }

          if (segment.kind === 'smallCaps') {
            return (
              <Text key={position} style={[smallCapsStyle, { color: c.ink }]}>
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
                style={[
                  termStyle,
                  { color: c.accent, textDecorationColor: c.accent },
                  active && { backgroundColor: c.accentSoft },
                ]}
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
          <Text style={[apparatusLabel, { color: c.inkFaint }]}>{t('readingWordsLabel')}</Text>
          {unmatched.map(({ entry, index }) => {
            const active = activeTermId === `${section.id}:${index}`;
            return (
              <Pressable
                key={entry.term}
                accessibilityRole="button"
                accessibilityLabel={t('readingExplainWord', { word: entry.term })}
                onPress={(event) => openTerm(entry, index, event)}
                style={[
                  strayChip,
                  { borderColor: c.accent, backgroundColor: c.accentSoft },
                  active && { borderStyle: 'solid' },
                ]}
              >
                <Text style={[strayChipText, { color: c.accent }]}>{entry.term}</Text>
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
            onPress={(event) => {
              stopBubbling(event);
              setTranslationOpen(false);
            }}
            style={[
              translationBox,
              { backgroundColor: c.paperDeep, borderColor: c.edge, borderLeftColor: c.accent },
            ]}
          >
            <Text style={[translationLabel, { color: c.accent }]}>{languageLabel}</Text>
            <Text
              style={[
                translationText,
                {
                  fontFamily: settings.serif ? fontFamily.serif : fontFamily.regular,
                  color: c.inkSoft,
                  fontSize: fontSize - 3,
                  lineHeight: lineHeight - 5,
                },
              ]}
            >
              {translation}
            </Text>
          </Pressable>
        ) : (
          <Pressable
            accessibilityRole="button"
            accessibilityState={{ expanded: false }}
            onPress={(event) => {
              stopBubbling(event);
              setTranslationOpen(true);
            }}
            hitSlop={8}
            style={translationHandle}
          >
            <View style={[translationHandleRule, { backgroundColor: c.rule }]} />
            <Text style={[apparatusLabel, { color: c.inkFaint }]}>
              {t('readingReadInLanguage', { language: languageLabel })}
            </Text>
          </Pressable>
        )
      ) : null}
    </View>
  );
}

/**
 * Hält einen Tipp im Absatz, statt ihn nach oben weiterzugeben.
 *
 * Nötig fürs Web: Dort reicht React Native ein Ereignis an die umgebende
 * Schaltfläche weiter (den Bildschirm, der die Leisten schaltet), auf dem Gerät
 * fängt es der innere Knopf allein ab. Ein Aufruf, der auf beiden Seiten
 * funktioniert, spart die Plattformabfrage.
 */
function stopBubbling(event: GestureResponderEvent) {
  event.stopPropagation?.();
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
 *
 * Schrift, Größe, Durchschuss und Farbe setzt der Absatz nicht selbst: Sie
 * kommen aus den Leseeinstellungen und werden an der Aufrufstelle beigemischt.
 */
const bodyText = {
  textAlign: 'justify' as const,
};

/** Die ersten Wörter in gesperrten Versalien – der zweite Teil des Buchanfangs. */
const smallCapsStyle = {
  letterSpacing: 0.8,
  fontWeight: '600' as const,
};

/**
 * Der Verweis im Satz: Akzentfarbe und Unterstreichung, sonst nichts. Kein
 * eigener Schnitt und keine Fläche – das Wort soll seine Zeile nicht
 * auseinanderziehen, sondern nur als anklickbar zu erkennen sein. Solange der
 * Zettel offen ist, bleibt es zusätzlich als getönte Stelle sichtbar.
 */
const termStyle = {
  textDecorationLine: 'underline' as const,
};

/** Etikett des Apparats: gesperrte Versalien, wie im Druck. */
const apparatusLabel = {
  fontFamily: fontFamily.semiBold,
  fontSize: 11,
  fontWeight: '700' as const,
  letterSpacing: 1.4,
  textTransform: 'uppercase' as const,
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
};

const strayChipText = {
  fontFamily: fontFamily.semiBold,
  fontSize: 12,
  fontWeight: '600' as const,
};

/**
 * Der Übersetzungskasten. Eingerückt und getönt, mit Rücken in der Akzentfarbe –
 * er soll unter dem Absatz hängen wie eine Fußnote, nicht neben ihm stehen
 * wie ein zweiter Absatz.
 */
const translationBox = {
  marginTop: spacing.sm,
  marginLeft: spacing.lg,
  borderRadius: radius.md,
  borderWidth: 1,
  borderLeftWidth: 3,
  paddingVertical: spacing.sm,
  paddingHorizontal: spacing.md,
  gap: 2,
};

const translationLabel = {
  fontFamily: fontFamily.semiBold,
  fontSize: 11,
  fontWeight: '700' as const,
  letterSpacing: 1.4,
  textTransform: 'uppercase' as const,
};

const translationText = {
  fontStyle: 'italic' as const,
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
};
