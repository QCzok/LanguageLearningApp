import { PrismaClient, Prisma, WorkbookBook } from '@prisma/client';
import { CURRICULUM, type ChapterSeed } from './curriculum';
import { BEGINNER_1_UNITS, type UnitSeed } from './chapter-beginner-1';
import { BEGINNER_2_UNITS } from './chapter-beginner-2';
import { BEGINNER_3_UNITS } from './chapter-beginner-3';
import { BEGINNER_4_UNITS } from './chapter-beginner-4';
import { BEGINNER_5_UNITS } from './chapter-beginner-5';
import { BEGINNER_6_UNITS } from './chapter-beginner-6';
import { BEGINNER_7_UNITS } from './chapter-beginner-7';
import { BEGINNER_8_UNITS } from './chapter-beginner-8';
import { BEGINNER_9_UNITS } from './chapter-beginner-9';
import { BEGINNER_10_UNITS } from './chapter-beginner-10';
import { BEGINNER_11_UNITS } from './chapter-beginner-11';
import { BEGINNER_12_UNITS } from './chapter-beginner-12';
import { INTERMEDIATE_1_UNITS } from './chapter-intermediate-1';
import { INTERMEDIATE_2_UNITS } from './chapter-intermediate-2';
import { INTERMEDIATE_3_UNITS } from './chapter-intermediate-3';
import { INTERMEDIATE_4_UNITS } from './chapter-intermediate-4';
import { INTERMEDIATE_5_UNITS } from './chapter-intermediate-5';
import { INTERMEDIATE_6_UNITS } from './chapter-intermediate-6';
import { INTERMEDIATE_7_UNITS } from './chapter-intermediate-7';
import { INTERMEDIATE_8_UNITS } from './chapter-intermediate-8';
import { INTERMEDIATE_9_UNITS } from './chapter-intermediate-9';
import { INTERMEDIATE_10_UNITS } from './chapter-intermediate-10';
import { INTERMEDIATE_11_UNITS } from './chapter-intermediate-11';
import { INTERMEDIATE_12_UNITS } from './chapter-intermediate-12';
import { ADVANCED_1_UNITS } from './chapter-advanced-1';
import { ADVANCED_2_UNITS } from './chapter-advanced-2';
import { ADVANCED_3_UNITS } from './chapter-advanced-3';
import { ADVANCED_4_UNITS } from './chapter-advanced-4';
import { ADVANCED_5_UNITS } from './chapter-advanced-5';
import { ADVANCED_6_UNITS } from './chapter-advanced-6';
import { ADVANCED_7_UNITS } from './chapter-advanced-7';
import { ADVANCED_8_UNITS } from './chapter-advanced-8';
import { ADVANCED_9_UNITS } from './chapter-advanced-9';
import { ADVANCED_10_UNITS } from './chapter-advanced-10';
import { ADVANCED_11_UNITS } from './chapter-advanced-11';
import { ADVANCED_12_UNITS } from './chapter-advanced-12';
import { GRAMMAR_1_UNITS } from './chapter-grammar-1';
import { GRAMMAR_2_UNITS } from './chapter-grammar-2';
import { GRAMMAR_3_UNITS } from './chapter-grammar-3';
import { GRAMMAR_4_UNITS } from './chapter-grammar-4';
import { GRAMMAR_5_UNITS } from './chapter-grammar-5';
import { GRAMMAR_6_UNITS } from './chapter-grammar-6';
import { GRAMMAR_7_UNITS } from './chapter-grammar-7';
import { GRAMMAR_8_UNITS } from './chapter-grammar-8';
import { GRAMMAR_9_UNITS } from './chapter-grammar-9';
import { GRAMMAR_10_UNITS } from './chapter-grammar-10';
import { GRAMMAR_11_UNITS } from './chapter-grammar-11';
import { GRAMMAR_12_UNITS } from './chapter-grammar-12';
import { SPANISH_CURRICULUM } from './spanish-curriculum';
import { SPANISH_BEGINNER_1_UNITS } from './spanish-chapter-beginner-1';
import { SPANISH_BEGINNER_2_UNITS } from './spanish-chapter-beginner-2';
import { SPANISH_BEGINNER_3_UNITS } from './spanish-chapter-beginner-3';
import { SPANISH_BEGINNER_4_UNITS } from './spanish-chapter-beginner-4';
import { SPANISH_BEGINNER_5_UNITS } from './spanish-chapter-beginner-5';
import { SPANISH_BEGINNER_6_UNITS } from './spanish-chapter-beginner-6';
import { SPANISH_BEGINNER_7_UNITS } from './spanish-chapter-beginner-7';
import { SPANISH_BEGINNER_8_UNITS } from './spanish-chapter-beginner-8';
import { SPANISH_BEGINNER_9_UNITS } from './spanish-chapter-beginner-9';
import { SPANISH_BEGINNER_10_UNITS } from './spanish-chapter-beginner-10';
import { SPANISH_BEGINNER_11_UNITS } from './spanish-chapter-beginner-11';
import { SPANISH_BEGINNER_12_UNITS } from './spanish-chapter-beginner-12';
import { SPANISH_INTERMEDIATE_1_UNITS } from './spanish-chapter-intermediate-1';
import { SPANISH_INTERMEDIATE_2_UNITS } from './spanish-chapter-intermediate-2';
import { SPANISH_INTERMEDIATE_3_UNITS } from './spanish-chapter-intermediate-3';
import { SPANISH_INTERMEDIATE_4_UNITS } from './spanish-chapter-intermediate-4';
import { SPANISH_INTERMEDIATE_5_UNITS } from './spanish-chapter-intermediate-5';
import { SPANISH_INTERMEDIATE_6_UNITS } from './spanish-chapter-intermediate-6';
import { SPANISH_INTERMEDIATE_7_UNITS } from './spanish-chapter-intermediate-7';
import { SPANISH_INTERMEDIATE_8_UNITS } from './spanish-chapter-intermediate-8';
import { SPANISH_INTERMEDIATE_9_UNITS } from './spanish-chapter-intermediate-9';
import { SPANISH_INTERMEDIATE_10_UNITS } from './spanish-chapter-intermediate-10';
import { SPANISH_INTERMEDIATE_11_UNITS } from './spanish-chapter-intermediate-11';
import { SPANISH_INTERMEDIATE_12_UNITS } from './spanish-chapter-intermediate-12';
import { SPANISH_ADVANCED_1_UNITS } from './spanish-chapter-advanced-1';
import { SPANISH_ADVANCED_2_UNITS } from './spanish-chapter-advanced-2';
import { SPANISH_ADVANCED_3_UNITS } from './spanish-chapter-advanced-3';
import { SPANISH_ADVANCED_4_UNITS } from './spanish-chapter-advanced-4';
import { SPANISH_ADVANCED_5_UNITS } from './spanish-chapter-advanced-5';
import { SPANISH_ADVANCED_6_UNITS } from './spanish-chapter-advanced-6';
import { SPANISH_ADVANCED_7_UNITS } from './spanish-chapter-advanced-7';
import { SPANISH_ADVANCED_8_UNITS } from './spanish-chapter-advanced-8';
import { SPANISH_ADVANCED_9_UNITS } from './spanish-chapter-advanced-9';
import { SPANISH_ADVANCED_10_UNITS } from './spanish-chapter-advanced-10';
import { SPANISH_ADVANCED_11_UNITS } from './spanish-chapter-advanced-11';
import { SPANISH_ADVANCED_12_UNITS } from './spanish-chapter-advanced-12';
import { SPANISH_GRAMMAR_1_UNITS } from './spanish-chapter-grammar-1';
import { SPANISH_GRAMMAR_2_UNITS } from './spanish-chapter-grammar-2';
import { SPANISH_GRAMMAR_3_UNITS } from './spanish-chapter-grammar-3';
import { SPANISH_GRAMMAR_4_UNITS } from './spanish-chapter-grammar-4';
import { SPANISH_GRAMMAR_5_UNITS } from './spanish-chapter-grammar-5';
import { SPANISH_GRAMMAR_6_UNITS } from './spanish-chapter-grammar-6';
import { SPANISH_GRAMMAR_7_UNITS } from './spanish-chapter-grammar-7';
import { SPANISH_GRAMMAR_8_UNITS } from './spanish-chapter-grammar-8';
import { SPANISH_GRAMMAR_9_UNITS } from './spanish-chapter-grammar-9';
import { SPANISH_GRAMMAR_10_UNITS } from './spanish-chapter-grammar-10';
import { SPANISH_GRAMMAR_11_UNITS } from './spanish-chapter-grammar-11';
import { SPANISH_GRAMMAR_12_UNITS } from './spanish-chapter-grammar-12';
import { ENGLISH_CURRICULUM } from './english-curriculum';
import { ENGLISH_BEGINNER_1_UNITS } from './english-chapter-beginner-1';
import { ENGLISH_BEGINNER_2_UNITS } from './english-chapter-beginner-2';
import { ENGLISH_BEGINNER_3_UNITS } from './english-chapter-beginner-3';
import { ENGLISH_BEGINNER_4_UNITS } from './english-chapter-beginner-4';
import { ENGLISH_BEGINNER_5_UNITS } from './english-chapter-beginner-5';
import { ENGLISH_BEGINNER_6_UNITS } from './english-chapter-beginner-6';
import { ENGLISH_BEGINNER_7_UNITS } from './english-chapter-beginner-7';
import { ENGLISH_BEGINNER_8_UNITS } from './english-chapter-beginner-8';
import { ENGLISH_BEGINNER_9_UNITS } from './english-chapter-beginner-9';
import { ENGLISH_BEGINNER_10_UNITS } from './english-chapter-beginner-10';
import { ENGLISH_BEGINNER_11_UNITS } from './english-chapter-beginner-11';
import { ENGLISH_BEGINNER_12_UNITS } from './english-chapter-beginner-12';
import { ENGLISH_INTERMEDIATE_1_UNITS } from './english-chapter-intermediate-1';
import { ENGLISH_INTERMEDIATE_2_UNITS } from './english-chapter-intermediate-2';
import { ENGLISH_INTERMEDIATE_3_UNITS } from './english-chapter-intermediate-3';
import { ENGLISH_INTERMEDIATE_4_UNITS } from './english-chapter-intermediate-4';
import { ENGLISH_INTERMEDIATE_5_UNITS } from './english-chapter-intermediate-5';
import { ENGLISH_INTERMEDIATE_6_UNITS } from './english-chapter-intermediate-6';
import { ENGLISH_INTERMEDIATE_7_UNITS } from './english-chapter-intermediate-7';
import { ENGLISH_INTERMEDIATE_8_UNITS } from './english-chapter-intermediate-8';
import { ENGLISH_INTERMEDIATE_9_UNITS } from './english-chapter-intermediate-9';
import { ENGLISH_INTERMEDIATE_10_UNITS } from './english-chapter-intermediate-10';
import { ENGLISH_INTERMEDIATE_11_UNITS } from './english-chapter-intermediate-11';
import { ENGLISH_INTERMEDIATE_12_UNITS } from './english-chapter-intermediate-12';
import { ENGLISH_ADVANCED_1_UNITS } from './english-chapter-advanced-1';
import { ENGLISH_ADVANCED_2_UNITS } from './english-chapter-advanced-2';
import { ENGLISH_ADVANCED_3_UNITS } from './english-chapter-advanced-3';
import { ENGLISH_ADVANCED_4_UNITS } from './english-chapter-advanced-4';
import { ENGLISH_ADVANCED_5_UNITS } from './english-chapter-advanced-5';
import { ENGLISH_ADVANCED_6_UNITS } from './english-chapter-advanced-6';
import { ENGLISH_ADVANCED_7_UNITS } from './english-chapter-advanced-7';
import { ENGLISH_ADVANCED_8_UNITS } from './english-chapter-advanced-8';
import { ENGLISH_ADVANCED_9_UNITS } from './english-chapter-advanced-9';
import { ENGLISH_ADVANCED_10_UNITS } from './english-chapter-advanced-10';
import { ENGLISH_ADVANCED_11_UNITS } from './english-chapter-advanced-11';
import { ENGLISH_ADVANCED_12_UNITS } from './english-chapter-advanced-12';
import { ENGLISH_GRAMMAR_1_UNITS } from './english-chapter-grammar-1';
import { ENGLISH_GRAMMAR_2_UNITS } from './english-chapter-grammar-2';
import { ENGLISH_GRAMMAR_3_UNITS } from './english-chapter-grammar-3';
import { ENGLISH_GRAMMAR_4_UNITS } from './english-chapter-grammar-4';
import { ENGLISH_GRAMMAR_5_UNITS } from './english-chapter-grammar-5';
import { ENGLISH_GRAMMAR_6_UNITS } from './english-chapter-grammar-6';
import { ENGLISH_GRAMMAR_7_UNITS } from './english-chapter-grammar-7';
import { ENGLISH_GRAMMAR_8_UNITS } from './english-chapter-grammar-8';
import { ENGLISH_GRAMMAR_9_UNITS } from './english-chapter-grammar-9';
import { ENGLISH_GRAMMAR_10_UNITS } from './english-chapter-grammar-10';
import { ENGLISH_GRAMMAR_11_UNITS } from './english-chapter-grammar-11';
import { ENGLISH_GRAMMAR_12_UNITS } from './english-chapter-grammar-12';

/**
 * Legt die Lehrwerke an: je Sprache drei Kursbücher zu zwölf Kapiteln und ein
 * Grammatikbuch mit zwölf Kapiteln.
 *
 * Idempotent: Kapitel werden über (languageId, book, order) gefunden und
 * aktualisiert, Seiten der ausgearbeiteten Kapitel vor dem Neuschreiben
 * gelöscht. Ein zweiter Lauf erzeugt keine Duplikate.
 *
 * Veröffentlicht wird nur, was auch Inhalt hat – die übrigen Kapitel bleiben
 * als Gerüst unveröffentlicht und stehen in der App ausgegraut im
 * Inhaltsverzeichnis, damit der Aufbau des Buchs von Anfang an sichtbar ist.
 */

/** Ein ausgearbeitetes Kapitel: welches Buch, welche Nummer, welche Seiten. */
interface ShowcaseUnits {
  book: WorkbookBook;
  order: number;
  units: UnitSeed[];
}

/**
 * Ein Lehrwerk: die Sprache, für die es gilt, ihr Lehrplan und die Kapitel,
 * die schon Seiten haben.
 *
 * Die Sprache steht hier als Code und wird beim Seeden aufgelöst – angelegt
 * sind die Sprachen bereits in `seed.ts`, deshalb genügt hier ein Nachschlagen
 * statt eines weiteren Upserts.
 */
interface WorkbookSeed {
  languageCode: string;
  label: string;
  curriculum: ChapterSeed[];
  showcase: ShowcaseUnits[];
}

const WORKBOOKS: WorkbookSeed[] = [
  {
    languageCode: 'de',
    label: 'Deutsch',
    curriculum: CURRICULUM,
    showcase: [
      // Der Beginner-Band ist vollständig: A1 stellt die Kapitel 1 bis 6,
      // A2 die Kapitel 7 bis 12. Der Intermediate-Band ist ebenfalls
      // vollständig: B1 stellt die Kapitel 1 bis 6, B2 die Kapitel 7 bis 12.
      // Das Grammatikbuch ist vollständig (Kapitel 1 bis 12).
      { book: WorkbookBook.BEGINNER, order: 1, units: BEGINNER_1_UNITS },
      { book: WorkbookBook.BEGINNER, order: 2, units: BEGINNER_2_UNITS },
      { book: WorkbookBook.BEGINNER, order: 3, units: BEGINNER_3_UNITS },
      { book: WorkbookBook.BEGINNER, order: 4, units: BEGINNER_4_UNITS },
      { book: WorkbookBook.BEGINNER, order: 5, units: BEGINNER_5_UNITS },
      { book: WorkbookBook.BEGINNER, order: 6, units: BEGINNER_6_UNITS },
      { book: WorkbookBook.BEGINNER, order: 7, units: BEGINNER_7_UNITS },
      { book: WorkbookBook.BEGINNER, order: 8, units: BEGINNER_8_UNITS },
      { book: WorkbookBook.BEGINNER, order: 9, units: BEGINNER_9_UNITS },
      { book: WorkbookBook.BEGINNER, order: 10, units: BEGINNER_10_UNITS },
      { book: WorkbookBook.BEGINNER, order: 11, units: BEGINNER_11_UNITS },
      { book: WorkbookBook.BEGINNER, order: 12, units: BEGINNER_12_UNITS },
      { book: WorkbookBook.INTERMEDIATE, order: 1, units: INTERMEDIATE_1_UNITS },
      { book: WorkbookBook.INTERMEDIATE, order: 2, units: INTERMEDIATE_2_UNITS },
      { book: WorkbookBook.INTERMEDIATE, order: 3, units: INTERMEDIATE_3_UNITS },
      { book: WorkbookBook.INTERMEDIATE, order: 4, units: INTERMEDIATE_4_UNITS },
      { book: WorkbookBook.INTERMEDIATE, order: 5, units: INTERMEDIATE_5_UNITS },
      { book: WorkbookBook.INTERMEDIATE, order: 6, units: INTERMEDIATE_6_UNITS },
      { book: WorkbookBook.INTERMEDIATE, order: 7, units: INTERMEDIATE_7_UNITS },
      { book: WorkbookBook.INTERMEDIATE, order: 8, units: INTERMEDIATE_8_UNITS },
      { book: WorkbookBook.INTERMEDIATE, order: 9, units: INTERMEDIATE_9_UNITS },
      { book: WorkbookBook.INTERMEDIATE, order: 10, units: INTERMEDIATE_10_UNITS },
      { book: WorkbookBook.INTERMEDIATE, order: 11, units: INTERMEDIATE_11_UNITS },
      { book: WorkbookBook.INTERMEDIATE, order: 12, units: INTERMEDIATE_12_UNITS },
      // Der Advanced-Band ist vollständig: C1 stellt die Kapitel 1 bis 6,
      // C2 die Kapitel 7 bis 12.
      { book: WorkbookBook.ADVANCED, order: 1, units: ADVANCED_1_UNITS },
      { book: WorkbookBook.ADVANCED, order: 2, units: ADVANCED_2_UNITS },
      { book: WorkbookBook.ADVANCED, order: 3, units: ADVANCED_3_UNITS },
      { book: WorkbookBook.ADVANCED, order: 4, units: ADVANCED_4_UNITS },
      { book: WorkbookBook.ADVANCED, order: 5, units: ADVANCED_5_UNITS },
      { book: WorkbookBook.ADVANCED, order: 6, units: ADVANCED_6_UNITS },
      { book: WorkbookBook.ADVANCED, order: 7, units: ADVANCED_7_UNITS },
      { book: WorkbookBook.ADVANCED, order: 8, units: ADVANCED_8_UNITS },
      { book: WorkbookBook.ADVANCED, order: 9, units: ADVANCED_9_UNITS },
      { book: WorkbookBook.ADVANCED, order: 10, units: ADVANCED_10_UNITS },
      { book: WorkbookBook.ADVANCED, order: 11, units: ADVANCED_11_UNITS },
      { book: WorkbookBook.ADVANCED, order: 12, units: ADVANCED_12_UNITS },
      { book: WorkbookBook.GRAMMAR, order: 1, units: GRAMMAR_1_UNITS },
      { book: WorkbookBook.GRAMMAR, order: 2, units: GRAMMAR_2_UNITS },
      { book: WorkbookBook.GRAMMAR, order: 3, units: GRAMMAR_3_UNITS },
      { book: WorkbookBook.GRAMMAR, order: 4, units: GRAMMAR_4_UNITS },
      { book: WorkbookBook.GRAMMAR, order: 5, units: GRAMMAR_5_UNITS },
      { book: WorkbookBook.GRAMMAR, order: 6, units: GRAMMAR_6_UNITS },
      { book: WorkbookBook.GRAMMAR, order: 7, units: GRAMMAR_7_UNITS },
      { book: WorkbookBook.GRAMMAR, order: 8, units: GRAMMAR_8_UNITS },
      { book: WorkbookBook.GRAMMAR, order: 9, units: GRAMMAR_9_UNITS },
      { book: WorkbookBook.GRAMMAR, order: 10, units: GRAMMAR_10_UNITS },
      { book: WorkbookBook.GRAMMAR, order: 11, units: GRAMMAR_11_UNITS },
      { book: WorkbookBook.GRAMMAR, order: 12, units: GRAMMAR_12_UNITS },
    ],
  },
  {
    languageCode: 'es',
    label: 'Spanisch',
    curriculum: SPANISH_CURRICULUM,
    showcase: [
      { book: WorkbookBook.BEGINNER, order: 1, units: SPANISH_BEGINNER_1_UNITS },
      { book: WorkbookBook.BEGINNER, order: 2, units: SPANISH_BEGINNER_2_UNITS },
      { book: WorkbookBook.BEGINNER, order: 3, units: SPANISH_BEGINNER_3_UNITS },
      // Der Beginner-Band ist vollständig: A1 stellt die Kapitel 1 bis 6,
      // A2 die Kapitel 7 bis 12.
      { book: WorkbookBook.BEGINNER, order: 4, units: SPANISH_BEGINNER_4_UNITS },
      { book: WorkbookBook.BEGINNER, order: 5, units: SPANISH_BEGINNER_5_UNITS },
      { book: WorkbookBook.BEGINNER, order: 6, units: SPANISH_BEGINNER_6_UNITS },
      { book: WorkbookBook.BEGINNER, order: 7, units: SPANISH_BEGINNER_7_UNITS },
      { book: WorkbookBook.BEGINNER, order: 8, units: SPANISH_BEGINNER_8_UNITS },
      { book: WorkbookBook.BEGINNER, order: 9, units: SPANISH_BEGINNER_9_UNITS },
      { book: WorkbookBook.BEGINNER, order: 10, units: SPANISH_BEGINNER_10_UNITS },
      { book: WorkbookBook.BEGINNER, order: 11, units: SPANISH_BEGINNER_11_UNITS },
      { book: WorkbookBook.BEGINNER, order: 12, units: SPANISH_BEGINNER_12_UNITS },
      // Der Intermediate-Band ist vollständig: B1 stellt die Kapitel 1 bis 6,
      // B2 die Kapitel 7 bis 12.
      { book: WorkbookBook.INTERMEDIATE, order: 1, units: SPANISH_INTERMEDIATE_1_UNITS },
      { book: WorkbookBook.INTERMEDIATE, order: 2, units: SPANISH_INTERMEDIATE_2_UNITS },
      { book: WorkbookBook.INTERMEDIATE, order: 3, units: SPANISH_INTERMEDIATE_3_UNITS },
      { book: WorkbookBook.INTERMEDIATE, order: 4, units: SPANISH_INTERMEDIATE_4_UNITS },
      { book: WorkbookBook.INTERMEDIATE, order: 5, units: SPANISH_INTERMEDIATE_5_UNITS },
      { book: WorkbookBook.INTERMEDIATE, order: 6, units: SPANISH_INTERMEDIATE_6_UNITS },
      { book: WorkbookBook.INTERMEDIATE, order: 7, units: SPANISH_INTERMEDIATE_7_UNITS },
      { book: WorkbookBook.INTERMEDIATE, order: 8, units: SPANISH_INTERMEDIATE_8_UNITS },
      { book: WorkbookBook.INTERMEDIATE, order: 9, units: SPANISH_INTERMEDIATE_9_UNITS },
      { book: WorkbookBook.INTERMEDIATE, order: 10, units: SPANISH_INTERMEDIATE_10_UNITS },
      { book: WorkbookBook.INTERMEDIATE, order: 11, units: SPANISH_INTERMEDIATE_11_UNITS },
      { book: WorkbookBook.INTERMEDIATE, order: 12, units: SPANISH_INTERMEDIATE_12_UNITS },
      // Der Advanced-Band ist vollständig: C1 stellt die Kapitel 1 bis 6,
      // C2 die Kapitel 7 bis 12.
      { book: WorkbookBook.ADVANCED, order: 1, units: SPANISH_ADVANCED_1_UNITS },
      { book: WorkbookBook.ADVANCED, order: 2, units: SPANISH_ADVANCED_2_UNITS },
      { book: WorkbookBook.ADVANCED, order: 3, units: SPANISH_ADVANCED_3_UNITS },
      { book: WorkbookBook.ADVANCED, order: 4, units: SPANISH_ADVANCED_4_UNITS },
      { book: WorkbookBook.ADVANCED, order: 5, units: SPANISH_ADVANCED_5_UNITS },
      { book: WorkbookBook.ADVANCED, order: 6, units: SPANISH_ADVANCED_6_UNITS },
      { book: WorkbookBook.ADVANCED, order: 7, units: SPANISH_ADVANCED_7_UNITS },
      { book: WorkbookBook.ADVANCED, order: 8, units: SPANISH_ADVANCED_8_UNITS },
      { book: WorkbookBook.ADVANCED, order: 9, units: SPANISH_ADVANCED_9_UNITS },
      { book: WorkbookBook.ADVANCED, order: 10, units: SPANISH_ADVANCED_10_UNITS },
      { book: WorkbookBook.ADVANCED, order: 11, units: SPANISH_ADVANCED_11_UNITS },
      { book: WorkbookBook.ADVANCED, order: 12, units: SPANISH_ADVANCED_12_UNITS },
      { book: WorkbookBook.GRAMMAR, order: 1, units: SPANISH_GRAMMAR_1_UNITS },
      { book: WorkbookBook.GRAMMAR, order: 2, units: SPANISH_GRAMMAR_2_UNITS },
      { book: WorkbookBook.GRAMMAR, order: 3, units: SPANISH_GRAMMAR_3_UNITS },
      { book: WorkbookBook.GRAMMAR, order: 4, units: SPANISH_GRAMMAR_4_UNITS },
      { book: WorkbookBook.GRAMMAR, order: 5, units: SPANISH_GRAMMAR_5_UNITS },
      { book: WorkbookBook.GRAMMAR, order: 6, units: SPANISH_GRAMMAR_6_UNITS },
      { book: WorkbookBook.GRAMMAR, order: 7, units: SPANISH_GRAMMAR_7_UNITS },
      { book: WorkbookBook.GRAMMAR, order: 8, units: SPANISH_GRAMMAR_8_UNITS },
      { book: WorkbookBook.GRAMMAR, order: 9, units: SPANISH_GRAMMAR_9_UNITS },
      { book: WorkbookBook.GRAMMAR, order: 10, units: SPANISH_GRAMMAR_10_UNITS },
      { book: WorkbookBook.GRAMMAR, order: 11, units: SPANISH_GRAMMAR_11_UNITS },
      { book: WorkbookBook.GRAMMAR, order: 12, units: SPANISH_GRAMMAR_12_UNITS },
    ],
  },
  {
    languageCode: 'en',
    label: 'Englisch',
    curriculum: ENGLISH_CURRICULUM,
    showcase: [
      // Alle drei Kursbücher und das Grammatikbuch sind vollständig.
      { book: WorkbookBook.BEGINNER, order: 1, units: ENGLISH_BEGINNER_1_UNITS },
      { book: WorkbookBook.BEGINNER, order: 2, units: ENGLISH_BEGINNER_2_UNITS },
      { book: WorkbookBook.BEGINNER, order: 3, units: ENGLISH_BEGINNER_3_UNITS },
      { book: WorkbookBook.BEGINNER, order: 4, units: ENGLISH_BEGINNER_4_UNITS },
      { book: WorkbookBook.BEGINNER, order: 5, units: ENGLISH_BEGINNER_5_UNITS },
      { book: WorkbookBook.BEGINNER, order: 6, units: ENGLISH_BEGINNER_6_UNITS },
      { book: WorkbookBook.BEGINNER, order: 7, units: ENGLISH_BEGINNER_7_UNITS },
      { book: WorkbookBook.BEGINNER, order: 8, units: ENGLISH_BEGINNER_8_UNITS },
      { book: WorkbookBook.BEGINNER, order: 9, units: ENGLISH_BEGINNER_9_UNITS },
      { book: WorkbookBook.BEGINNER, order: 10, units: ENGLISH_BEGINNER_10_UNITS },
      { book: WorkbookBook.BEGINNER, order: 11, units: ENGLISH_BEGINNER_11_UNITS },
      { book: WorkbookBook.BEGINNER, order: 12, units: ENGLISH_BEGINNER_12_UNITS },
      { book: WorkbookBook.INTERMEDIATE, order: 1, units: ENGLISH_INTERMEDIATE_1_UNITS },
      { book: WorkbookBook.INTERMEDIATE, order: 2, units: ENGLISH_INTERMEDIATE_2_UNITS },
      { book: WorkbookBook.INTERMEDIATE, order: 3, units: ENGLISH_INTERMEDIATE_3_UNITS },
      { book: WorkbookBook.INTERMEDIATE, order: 4, units: ENGLISH_INTERMEDIATE_4_UNITS },
      { book: WorkbookBook.INTERMEDIATE, order: 5, units: ENGLISH_INTERMEDIATE_5_UNITS },
      { book: WorkbookBook.INTERMEDIATE, order: 6, units: ENGLISH_INTERMEDIATE_6_UNITS },
      { book: WorkbookBook.INTERMEDIATE, order: 7, units: ENGLISH_INTERMEDIATE_7_UNITS },
      { book: WorkbookBook.INTERMEDIATE, order: 8, units: ENGLISH_INTERMEDIATE_8_UNITS },
      { book: WorkbookBook.INTERMEDIATE, order: 9, units: ENGLISH_INTERMEDIATE_9_UNITS },
      { book: WorkbookBook.INTERMEDIATE, order: 10, units: ENGLISH_INTERMEDIATE_10_UNITS },
      { book: WorkbookBook.INTERMEDIATE, order: 11, units: ENGLISH_INTERMEDIATE_11_UNITS },
      { book: WorkbookBook.INTERMEDIATE, order: 12, units: ENGLISH_INTERMEDIATE_12_UNITS },
      // Der Advanced-Band ist vollständig: C1 stellt die Kapitel 1 bis 6,
      // C2 die Kapitel 7 bis 12.
      { book: WorkbookBook.ADVANCED, order: 1, units: ENGLISH_ADVANCED_1_UNITS },
      { book: WorkbookBook.ADVANCED, order: 2, units: ENGLISH_ADVANCED_2_UNITS },
      { book: WorkbookBook.ADVANCED, order: 3, units: ENGLISH_ADVANCED_3_UNITS },
      { book: WorkbookBook.ADVANCED, order: 4, units: ENGLISH_ADVANCED_4_UNITS },
      { book: WorkbookBook.ADVANCED, order: 5, units: ENGLISH_ADVANCED_5_UNITS },
      { book: WorkbookBook.ADVANCED, order: 6, units: ENGLISH_ADVANCED_6_UNITS },
      { book: WorkbookBook.ADVANCED, order: 7, units: ENGLISH_ADVANCED_7_UNITS },
      { book: WorkbookBook.ADVANCED, order: 8, units: ENGLISH_ADVANCED_8_UNITS },
      { book: WorkbookBook.ADVANCED, order: 9, units: ENGLISH_ADVANCED_9_UNITS },
      { book: WorkbookBook.ADVANCED, order: 10, units: ENGLISH_ADVANCED_10_UNITS },
      { book: WorkbookBook.ADVANCED, order: 11, units: ENGLISH_ADVANCED_11_UNITS },
      { book: WorkbookBook.ADVANCED, order: 12, units: ENGLISH_ADVANCED_12_UNITS },
      { book: WorkbookBook.GRAMMAR, order: 1, units: ENGLISH_GRAMMAR_1_UNITS },
      { book: WorkbookBook.GRAMMAR, order: 2, units: ENGLISH_GRAMMAR_2_UNITS },
      { book: WorkbookBook.GRAMMAR, order: 3, units: ENGLISH_GRAMMAR_3_UNITS },
      { book: WorkbookBook.GRAMMAR, order: 4, units: ENGLISH_GRAMMAR_4_UNITS },
      { book: WorkbookBook.GRAMMAR, order: 5, units: ENGLISH_GRAMMAR_5_UNITS },
      { book: WorkbookBook.GRAMMAR, order: 6, units: ENGLISH_GRAMMAR_6_UNITS },
      { book: WorkbookBook.GRAMMAR, order: 7, units: ENGLISH_GRAMMAR_7_UNITS },
      { book: WorkbookBook.GRAMMAR, order: 8, units: ENGLISH_GRAMMAR_8_UNITS },
      { book: WorkbookBook.GRAMMAR, order: 9, units: ENGLISH_GRAMMAR_9_UNITS },
      { book: WorkbookBook.GRAMMAR, order: 10, units: ENGLISH_GRAMMAR_10_UNITS },
      { book: WorkbookBook.GRAMMAR, order: 11, units: ENGLISH_GRAMMAR_11_UNITS },
      { book: WorkbookBook.GRAMMAR, order: 12, units: ENGLISH_GRAMMAR_12_UNITS },
    ],
  },
];

export async function seedWorkbook(prisma: PrismaClient): Promise<void> {
  for (const workbook of WORKBOOKS) {
    const language = await prisma.language.findUnique({
      where: { code: workbook.languageCode },
    });

    if (!language) {
      // Die Sprachen legt `seed.ts` vor diesem Aufruf an. Fehlt eine, ist das
      // ein Fehler in der Reihenfolge und keine Lücke, die man still übergeht.
      throw new Error(
        `Lehrwerk ${workbook.label}: Sprache "${workbook.languageCode}" fehlt – wird sie vor seedWorkbook() angelegt?`,
      );
    }

    let created = 0;
    let published = 0;
    let pages = 0;
    let dropped = 0;

    for (const seed of workbook.curriculum) {
      const showcase = workbook.showcase.find(
        (entry) => entry.book === seed.book && entry.order === seed.order,
      );

      const data = {
        title: seed.title,
        subtitle: seed.subtitle,
        description: seed.description,
        coverEmoji: seed.coverEmoji,
        goals: seed.goals,
        estimatedMinutes: seed.estimatedMinutes,
        isPublished: Boolean(showcase),
      };

      const chapter = await prisma.chapter.upsert({
        where: {
          languageId_book_order: {
            languageId: language.id,
            book: seed.book,
            order: seed.order,
          },
        },
        create: {
          languageId: language.id,
          book: seed.book,
          level: seed.level,
          order: seed.order,
          ...data,
        },
        update: { level: seed.level, ...data },
      });

      created += 1;
      if (!showcase) continue;
      published += 1;

      // Seiten über (chapterId, order) aktualisieren statt löschen und neu
      // anlegen. Der Unterschied ist nicht kosmetisch: An `ChapterUnit` hängt
      // `UnitProgress` mit `onDelete: Cascade` (siehe `schema.prisma`). Ein
      // Löschen nähme jeder Lernenden ihren Stand, ihre Antworten und ihre
      // Notizen zu dieser Seite mit – lokal egal, auf einer Datenbank mit
      // echten Nutzern ein nicht behebbarer Datenverlust. Beim Aktualisieren
      // bleibt die ID der Seite erhalten, und damit der Fortschritt daran.
      for (const unit of showcase.units) {
        const data = {
          title: unit.title,
          subtitle: unit.subtitle,
          estimatedMinutes: unit.estimatedMinutes,
          content: unit.content as unknown as Prisma.InputJsonValue,
        };

        await prisma.chapterUnit.upsert({
          where: { chapterId_order: { chapterId: chapter.id, order: unit.order } },
          create: { chapterId: chapter.id, order: unit.order, ...data },
          update: data,
        });
        pages += 1;
      }

      // Wurde ein Kapitel gekürzt, bleiben sonst die überzähligen Seiten
      // stehen. Nur diese verschwinden – der Fortschritt an ihnen ist
      // ohnehin gegenstandslos, weil es die Seite nicht mehr gibt.
      const removed = await prisma.chapterUnit.deleteMany({
        where: {
          chapterId: chapter.id,
          order: { notIn: showcase.units.map((unit) => unit.order) },
        },
      });
      dropped += removed.count;
    }

    console.log(
      `  Lehrwerk ${workbook.label}: ${created} Kapitel (${published} veröffentlicht, ${pages} Seiten` +
        `${dropped > 0 ? `, ${dropped} entfernt` : ''})`,
    );
  }
}
