import { useEffect, useState } from 'react';
import { Platform } from 'react-native';

/** So viel nimmt der Server als markiertes Stück an (siehe `TranslateDto`). */
export const MAX_TRANSLATE_LENGTH = 300;

/** Obergrenze für den mitgeschickten Satz – ein Absatz genügt, ein Kapitel nicht. */
const MAX_CONTEXT_LENGTH = 600;

export interface PageSelection {
  text: string;
  /** Der Satz, in dem das Markierte steht – macht Mehrdeutiges eindeutig. */
  context?: string;
  /** Lage der Markierung in Fensterkoordinaten, für den Knopf daneben. */
  rect: { x: number; y: number; width: number; height: number };
}

/**
 * Was im Browser gerade markiert ist, samt Satz drumherum.
 *
 * Nur im Web: Auf iOS und Android gibt `selectable` die Auswahl nicht an
 * JavaScript heraus – dort bleibt der Weg über Kopieren und Einfügen im
 * Übersetzungsblatt. Markierungen in Eingabefeldern zählen nicht; das wäre
 * etwa das Feld im Blatt selbst oder eine Lücke, in die man gerade schreibt.
 */
export function readPageSelection(): PageSelection | null {
  if (Platform.OS !== 'web' || typeof window.getSelection !== 'function') return null;

  const selection = window.getSelection();
  if (!selection || selection.isCollapsed || selection.rangeCount === 0) return null;

  const text = selection.toString().replace(/\s+/g, ' ').trim();
  if (!text || text.length > MAX_TRANSLATE_LENGTH) return null;

  const range = selection.getRangeAt(0);
  const node = range.commonAncestorContainer;
  const element = node.nodeType === Node.ELEMENT_NODE ? (node as Element) : node.parentElement;
  if (element?.closest('input, textarea, [contenteditable="true"]')) return null;

  const box = range.getBoundingClientRect();
  if (box.width === 0 && box.height === 0) return null;

  // React Native Web setzt einen `<Text>` als `div`, verschachtelte als
  // `span` – der nächste `div` ist also der ganze Absatz, auch wenn das
  // markierte Wort in einem hervorgehobenen Glossarbegriff steckt.
  const paragraph = element?.closest('div')?.textContent ?? '';

  return {
    text,
    context: sentenceAround(paragraph, text),
    rect: { x: box.left, y: box.top, width: box.width, height: box.height },
  };
}

/**
 * Der Satz, in dem `text` steht. Findet er sich nicht (Markierung über
 * mehrere Absätze), geht nur ein kurzer Absatz ganz mit – sonst nichts.
 */
export function sentenceAround(paragraph: string, text: string): string | undefined {
  const full = paragraph.replace(/\s+/g, ' ').trim();
  const index = full.indexOf(text);
  if (index === -1) return full.length <= MAX_CONTEXT_LENGTH && full !== text ? full : undefined;

  let start = index;
  while (start > 0 && !/[.!?…]\s/.test(full.slice(start - 2, start))) start -= 1;
  let end = index + text.length;
  while (end < full.length && !/[.!?…]/.test(full[end - 1] ?? '')) end += 1;

  let sentence = full.slice(start, end).trim();
  if (sentence.length > MAX_CONTEXT_LENGTH) {
    const from = Math.max(0, index - MAX_CONTEXT_LENGTH / 2);
    sentence = full.slice(from, from + MAX_CONTEXT_LENGTH).trim();
  }
  return sentence === text ? undefined : sentence;
}

/**
 * Die aktuelle Markierung im Browser, laufend nachgeführt.
 *
 * Kurz verzögert, weil `selectionchange` beim Ziehen mit der Maus für jedes
 * Zeichen feuert. Die Verzögerung hat einen zweiten Zweck: Ein Klick auf den
 * „Übersetzen“-Knopf hebt die Markierung im Browser auf, noch bevor der Knopf
 * davon erfährt – so steht sie beim Drücken noch zur Verfügung.
 */
export function usePageSelection(enabled: boolean): PageSelection | null {
  const [selection, setSelection] = useState<PageSelection | null>(null);

  useEffect(() => {
    if (Platform.OS !== 'web' || !enabled) {
      setSelection(null);
      return;
    }

    let timer: ReturnType<typeof setTimeout> | undefined;
    const update = () => {
      clearTimeout(timer);
      timer = setTimeout(() => setSelection(readPageSelection()), 150);
    };

    document.addEventListener('selectionchange', update);
    // Mit `capture`, damit auch das Scrollen innerer ScrollViews ankommt –
    // der Knopf muss mit der Markierung mitwandern.
    window.addEventListener('scroll', update, true);
    window.addEventListener('resize', update);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('selectionchange', update);
      window.removeEventListener('scroll', update, true);
      window.removeEventListener('resize', update);
    };
  }, [enabled]);

  return selection;
}
