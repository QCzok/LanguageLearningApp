import type { CefrLevel } from '@prisma/client';

/**
 * Die Sprachen, in denen jede Vokabel hinterlegt ist – in dieser Reihenfolge
 * stehen sie auch in jeder Zeile der Wortlisten.
 *
 * Deutsch, Englisch und Spanisch sind Lernsprachen *und* Muttersprachen,
 * Französisch und Italienisch nur Muttersprachen (die Oberfläche gibt es in
 * allen fünf, siehe mobile/src/i18n). Eine Zeile ist damit ein Begriff in
 * allen Sprachen: Für Deutsch als Lernsprache ist die deutsche Spalte der
 * Begriff und jede andere Spalte eine Übersetzung – für Englisch und
 * Spanisch genauso. So braucht es keinen eigenen Wortschatz je Paar aus
 * Lern- und Muttersprache.
 */
export const VOCAB_COLUMNS = ['en', 'de', 'es', 'fr', 'it'] as const;
export type VocabColumn = (typeof VOCAB_COLUMNS)[number];

/** Die Sprachen, in denen es Kurse gibt – für sie werden Stapel angelegt. */
export const VOCAB_LEARNABLE = ['en', 'de', 'es'] as const;

/**
 * Eine Kategorie eines Niveaus: 50 Begriffe zu einem Thema.
 *
 * `words` ist ein Block mit einer Zeile je Begriff, die Spalten durch `|`
 * getrennt, in der Reihenfolge von `VOCAB_COLUMNS`. Nomen tragen in den
 * Sprachen mit grammatischem Geschlecht ihren Artikel („das Haus", „la
 * casa"), englische Verben ein „to". Mehrere Bedeutungen stehen durch Komma
 * getrennt in derselben Spalte.
 */
export interface VocabCategorySeed {
  key: string;
  level: CefrLevel;
  icon: string;
  titles: Record<VocabColumn, string>;
  words: string;
}

/** Zerlegt den Wortblock einer Kategorie in Zeilen je Sprache. */
export function parseWords(block: string): Array<Record<VocabColumn, string>> {
  return block
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .map((line) => {
      const cells = line.split('|').map((cell) => cell.trim());
      if (cells.length !== VOCAB_COLUMNS.length) {
        throw new Error(`Vokabelzeile hat ${cells.length} statt ${VOCAB_COLUMNS.length} Spalten: ${line}`);
      }
      return Object.fromEntries(VOCAB_COLUMNS.map((code, index) => [code, cells[index]])) as Record<
        VocabColumn,
        string
      >;
    });
}
