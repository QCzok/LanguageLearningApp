import { Inject, Injectable, Logger } from '@nestjs/common';
import { TRANSLATABLE_LANGUAGES, type TranslatableLanguage, type VocabListBlock } from '@lingua/shared';
import { PrismaService } from '../../prisma/prisma.service';
import { AI_CLIENT, type AiClient } from './ai-client.interface';
import { vocabGlossSchema } from './ai.schemas';
import { LANGUAGE_NAMES, TUTOR_SYSTEM_PREFIX, VOCAB_GLOSS_INSTRUCTIONS } from './prompts';

/** Höchstens so viele Vokabeln je KI-Aufruf. */
const BATCH_SIZE = 60;
/**
 * So lange wartet eine Seite auf fehlende Übersetzungen. Dauert es länger,
 * kommt sie mit dem, was da ist – die KI arbeitet im Hintergrund weiter und
 * legt ihr Ergebnis ab, beim nächsten Öffnen steht es dann in der Liste.
 */
const WAIT_MS = 30_000;

interface Entry {
  term: string;
  sense: string;
}

/**
 * Wortlisten in der Muttersprache der Lernperson.
 *
 * Die Inhalte von Lehrwerk und Lektionen bringen ihre Übersetzungen nur in
 * einer oder zwei Sprachen mit – im Englisch- und Spanischkurs Deutsch, im
 * Deutschkurs Englisch. Wer eine andere Muttersprache hat, sah dort bisher
 * die deutsche Übersetzung. Fehlt die eigene Sprache, erzeugt die KI sie
 * einmal; abgelegt wird sie in `VocabGloss` und gilt danach für alle.
 *
 * Scheitert still: Ohne Antwort der KI bleibt die Liste, wie sie ist.
 */
@Injectable()
export class VocabGlossService {
  private readonly logger = new Logger(VocabGlossService.name);
  /** Laufende KI-Aufrufe – zwei gleichzeitige Aufrufe derselben Seite fragen nur einmal. */
  private readonly inFlight = new Map<string, Promise<void>>();

  constructor(
    private readonly prisma: PrismaService,
    @Inject(AI_CLIENT) private readonly ai: AiClient,
  ) {}

  /** Ergänzt in allen Wortlisten die Übersetzung in `nativeLanguage`, wo sie fehlt. */
  async localize<T extends { type: string }>(
    blocks: T[],
    termLanguage: string,
    nativeLanguage: string,
  ): Promise<T[]> {
    const language = TRANSLATABLE_LANGUAGES.find((code) => code === nativeLanguage);
    if (!language || language === termLanguage) return blocks;

    const lists = blocks.filter(isVocabList);
    const wanted = uniqueEntries(
      lists.flatMap((block) =>
        block.items
          .filter((item) => !item.translations[language])
          .map((item) => ({ term: item.term, sense: senseOf(item.translations) })),
      ),
    );
    if (wanted.length === 0) return blocks;

    let found = await this.lookup(termLanguage, language, wanted);
    const missing = wanted.filter((entry) => !found.has(keyOf(entry)));
    if (missing.length > 0 && this.ai.isConfigured) {
      await Promise.race([
        this.fill(termLanguage, language, missing),
        new Promise((resolve) => setTimeout(resolve, WAIT_MS)),
      ]);
      found = await this.lookup(termLanguage, language, wanted);
    }
    if (found.size === 0) return blocks;

    return blocks.map((block) =>
      isVocabList(block)
        ? {
            ...block,
            items: block.items.map((item) => {
              const translation =
                item.translations[language] ??
                found.get(keyOf({ term: item.term, sense: senseOf(item.translations) }));
              return translation
                ? { ...item, translations: { ...item.translations, [language]: translation } }
                : item;
            }),
          }
        : block,
    );
  }

  private async lookup(
    termLanguage: string,
    language: TranslatableLanguage,
    entries: Entry[],
  ): Promise<Map<string, string>> {
    const rows = await this.prisma.vocabGloss.findMany({
      where: { termLanguage, language, term: { in: entries.map((entry) => entry.term) } },
      select: { term: true, sense: true, translation: true },
    });
    return new Map(rows.map((row) => [keyOf(row), row.translation]));
  }

  private fill(termLanguage: string, language: TranslatableLanguage, entries: Entry[]): Promise<void> {
    const key = `${termLanguage}>${language}:${entries.map(keyOf).sort().join('\n')}`;
    const running = this.inFlight.get(key);
    if (running) return running;

    const job = (async () => {
      for (let start = 0; start < entries.length; start += BATCH_SIZE) {
        await this.translateBatch(termLanguage, language, entries.slice(start, start + BATCH_SIZE));
      }
    })()
      .catch((error: Error) => this.logger.warn(`Wortlisten-Übersetzung fehlgeschlagen: ${error.message}`))
      .finally(() => this.inFlight.delete(key));
    this.inFlight.set(key, job);
    return job;
  }

  private async translateBatch(
    termLanguage: string,
    language: TranslatableLanguage,
    entries: Entry[],
  ): Promise<void> {
    const { parsed } = await this.ai.parse({
      schema: vocabGlossSchema,
      systemPrefix: TUTOR_SYSTEM_PREFIX,
      systemSuffix: [
        `Sprache der Wörter: ${LANGUAGE_NAMES[termLanguage] ?? termLanguage}`,
        `Übersetze auf: ${LANGUAGE_NAMES[language] ?? language}`,
        '',
        VOCAB_GLOSS_INSTRUCTIONS,
      ].join('\n'),
      userContent: entries
        .map((entry, index) => `${index + 1} | ${entry.term} | ${entry.sense || '–'}`)
        .join('\n'),
      effort: 'low',
    });

    const data = parsed.glosses.flatMap((gloss) => {
      const entry = entries[Number(gloss.id) - 1];
      const translation = gloss.translation.trim();
      return entry && translation ? [{ termLanguage, language, ...entry, translation }] : [];
    });
    if (data.length > 0) {
      await this.prisma.vocabGloss.createMany({ data, skipDuplicates: true });
    }
  }
}

function isVocabList<T extends { type: string }>(block: T): block is T & VocabListBlock {
  return block.type === 'VOCAB_LIST';
}

/** Die vorhandene Übersetzung, die festlegt, welche Bedeutung gemeint ist. */
function senseOf(translations: Partial<Record<TranslatableLanguage, string>>): string {
  return translations.en ?? translations.de ?? Object.values(translations).find(Boolean) ?? '';
}

function keyOf(entry: Entry): string {
  return `${entry.term}\u0000${entry.sense}`;
}

function uniqueEntries(entries: Entry[]): Entry[] {
  return [...new Map(entries.map((entry) => [keyOf(entry), entry])).values()];
}
