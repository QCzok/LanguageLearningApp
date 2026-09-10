import type Anthropic from '@anthropic-ai/sdk';
import type * as z from 'zod/v4';

/**
 * Gemeinsame Schnittstelle für alle KI-Anbindungen.
 *
 * Zwei Implementierungen: `AnthropicClient` (echter API-Key, pay-per-token)
 * und `ClaudeCliClient` (läuft über die `claude`-CLI und damit über ein
 * Claude-Abo statt über einen API-Key – siehe dort für den Hintergrund).
 * `AiService` kennt nur dieses Interface, nicht die konkrete Implementierung.
 */
export interface TokenUsage {
  inputTokens: number;
  outputTokens: number;
  cachedTokens: number;
}

export interface AiClient {
  readonly model: string;
  readonly isConfigured: boolean;

  /**
   * Strukturierte Antwort gegen ein Zod-Schema. Jede Implementierung wandelt
   * `schema` selbst in ihr eigenes Format um (JSON-Schema fürs Anthropic-SDK
   * bzw. für den `--json-schema`-Parameter der CLI) und validiert danach mit
   * demselben Schema erneut – so gilt dieselbe Laufzeitgarantie unabhängig
   * vom Anbieter.
   */
  parse<T>(params: {
    schema: z.ZodType<T>;
    systemPrefix: string;
    systemSuffix: string;
    userContent: string;
    maxTokens?: number;
    effort?: 'low' | 'medium' | 'high' | 'xhigh' | 'max';
  }): Promise<{ parsed: T; usage: TokenUsage }>;

  completeText(params: {
    systemPrefix: string;
    systemSuffix: string;
    messages: Anthropic.MessageParam[];
    maxTokens?: number;
  }): Promise<{ text: string; usage: TokenUsage }>;

  streamText(params: {
    systemPrefix: string;
    systemSuffix: string;
    messages: Anthropic.MessageParam[];
    maxTokens?: number;
  }): AsyncGenerator<{ type: 'delta'; text: string } | { type: 'done'; text: string; usage: TokenUsage }>;
}

/** DI-Token, da NestJS Interfaces zur Laufzeit nicht kennt. */
export const AI_CLIENT = Symbol('AI_CLIENT');
