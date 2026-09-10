import * as z from 'zod/v4';

/**
 * Antwortschemas der KI-Aufrufe.
 *
 * Sie sind gleichzeitig Prompt (die API erzwingt die Struktur) und Laufzeitvalidierung –
 * der Service kann sich auf die Felder verlassen, ohne defensiv zu prüfen.
 */

export const correctionSchema = z.object({
  recognizedText: z.string().describe('Der Text des Lernenden, unverändert übernommen'),
  summary: z.string().describe('Zwei ermutigende Sätze: Gelungenes und nächster Schritt'),
  scorePercent: z.number().int().min(0).max(100).describe('Anteil fehlerfreier Sätze'),
  corrections: z.array(
    z.object({
      original: z.string().describe('Die fehlerhafte Stelle im Original'),
      corrected: z.string().describe('Die korrigierte Fassung'),
      explanation: z.string().describe('Kurze Begründung in der Muttersprache'),
      category: z.enum(['GRAMMAR', 'SPELLING', 'VOCABULARY', 'STYLE', 'PUNCTUATION']),
      severity: z.enum(['LOW', 'MEDIUM', 'HIGH']),
    }),
  ),
  suggestions: z.array(z.string()).describe('2–4 konkrete nächste Übungsschritte'),
});
export type CorrectionResult = z.infer<typeof correctionSchema>;

export const grammarSchema = z.object({
  topic: z.string(),
  explanation: z.string().describe('Erklärung in der Muttersprache des Lernenden'),
  examples: z.array(
    z.object({
      sentence: z.string().describe('Beispielsatz in der Zielsprache'),
      translation: z.string().describe('Übersetzung in die Muttersprache'),
    }),
  ),
  commonMistakes: z.array(z.string()),
  relatedTopics: z.array(z.string()),
});
export type GrammarResult = z.infer<typeof grammarSchema>;

export const recommendationSchema = z.object({
  summary: z.string(),
  focusAreas: z.array(z.string()),
  actions: z.array(
    z.object({
      type: z.enum(['VOCAB_DECK', 'LIBRARY', 'MEDIA', 'NOTEBOOK', 'AI_CHAT']),
      targetId: z.string().nullable().describe('ID aus dem gelieferten Katalog oder null'),
      title: z.string(),
      reason: z.string(),
    }),
  ),
});
export type RecommendationResult = z.infer<typeof recommendationSchema>;
