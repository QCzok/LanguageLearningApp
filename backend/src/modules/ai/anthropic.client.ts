import { Inject, Injectable, Logger, ServiceUnavailableException } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import Anthropic from '@anthropic-ai/sdk';
import type { AutoParseableOutputFormat } from '@anthropic-ai/sdk/lib/parser';
import { aiConfig } from '../../config/configuration';

export interface TokenUsage {
  inputTokens: number;
  outputTokens: number;
  cachedTokens: number;
}

/**
 * Dünne Kapsel um das Anthropic-SDK.
 *
 * Zweck: ein einziger Ort für Modellwahl, Fehlerübersetzung und Token-Buchhaltung.
 * Die Fachlogik (Prompts, Persistenz, Kontingente) liegt im AiService.
 */
@Injectable()
export class AnthropicClient {
  private readonly logger = new Logger(AnthropicClient.name);
  private readonly client: Anthropic | null;

  constructor(@Inject(aiConfig.KEY) private readonly config: ConfigType<typeof aiConfig>) {
    // Ohne Schlüssel startet der Server trotzdem – KI-Routen antworten dann mit 503.
    this.client = config.apiKey ? new Anthropic({ apiKey: config.apiKey }) : null;
    if (!this.client) {
      this.logger.warn('ANTHROPIC_API_KEY fehlt – KI-Funktionen sind deaktiviert');
    }
  }

  get model(): string {
    return this.config.model;
  }

  get isConfigured(): boolean {
    return this.client !== null;
  }

  private get sdk(): Anthropic {
    if (!this.client) {
      throw new ServiceUnavailableException('Die KI-Funktionen sind derzeit nicht verfügbar');
    }
    return this.client;
  }

  /**
   * Strukturierte Antwort gegen ein Zod-Schema. `messages.parse` validiert die
   * Antwort direkt gegen das Schema – kein manuelles JSON-Parsen nötig.
   */
  async parse<T>(params: {
    /** Von `zodOutputFormat(...)` erzeugt – siehe ai.schemas.ts. */
    format: AutoParseableOutputFormat<T>;
    systemPrefix: string;
    systemSuffix: string;
    userContent: string;
    maxTokens?: number;
    effort?: 'low' | 'medium' | 'high' | 'xhigh' | 'max';
  }): Promise<{ parsed: T; usage: TokenUsage }> {
    try {
      const response = await this.sdk.messages.parse({
        model: this.model,
        max_tokens: params.maxTokens ?? 8000,
        // Der stabile Präfix trägt den Cache-Breakpoint; der variable Teil steht dahinter.
        system: [
          { type: 'text', text: params.systemPrefix, cache_control: { type: 'ephemeral' } },
          { type: 'text', text: params.systemSuffix },
        ],
        output_config: {
          format: params.format,
          ...(params.effort ? { effort: params.effort } : {}),
        },
        messages: [{ role: 'user', content: params.userContent }],
      });

      this.assertNotRefused(response.stop_reason);

      if (!response.parsed_output) {
        throw new ServiceUnavailableException('Die KI-Antwort hatte ein unerwartetes Format');
      }

      return { parsed: response.parsed_output as T, usage: this.toUsage(response.usage) };
    } catch (error) {
      throw this.translate(error);
    }
  }

  /**
   * Freitext-Antwort für den Chat. Gestreamt, damit lange Antworten nicht in
   * HTTP-Timeouts laufen; der Aufrufer bekommt die fertige Nachricht.
   */
  async completeText(params: {
    systemPrefix: string;
    systemSuffix: string;
    messages: Anthropic.MessageParam[];
    maxTokens?: number;
  }): Promise<{ text: string; usage: TokenUsage }> {
    try {
      const stream = this.sdk.messages.stream({
        model: this.model,
        max_tokens: params.maxTokens ?? 2000,
        system: [
          { type: 'text', text: params.systemPrefix, cache_control: { type: 'ephemeral' } },
          { type: 'text', text: params.systemSuffix },
        ],
        messages: params.messages,
      });

      const response = await stream.finalMessage();
      this.assertNotRefused(response.stop_reason);

      const text = response.content
        .filter((block): block is Anthropic.TextBlock => block.type === 'text')
        .map((block) => block.text)
        .join('')
        .trim();

      return { text, usage: this.toUsage(response.usage) };
    } catch (error) {
      throw this.translate(error);
    }
  }

  /** Wie `completeText`, liefert die Teilstücke aber sofort weiter (SSE). */
  async *streamText(params: {
    systemPrefix: string;
    systemSuffix: string;
    messages: Anthropic.MessageParam[];
    maxTokens?: number;
  }): AsyncGenerator<{ type: 'delta'; text: string } | { type: 'done'; text: string; usage: TokenUsage }> {
    const stream = this.sdk.messages.stream({
      model: this.model,
      max_tokens: params.maxTokens ?? 2000,
      system: [
        { type: 'text', text: params.systemPrefix, cache_control: { type: 'ephemeral' } },
        { type: 'text', text: params.systemSuffix },
      ],
      messages: params.messages,
    });

    let text = '';
    try {
      for await (const event of stream) {
        if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
          text += event.delta.text;
          yield { type: 'delta', text: event.delta.text };
        }
      }

      const final = await stream.finalMessage();
      this.assertNotRefused(final.stop_reason);
      yield { type: 'done', text: text.trim(), usage: this.toUsage(final.usage) };
    } catch (error) {
      throw this.translate(error);
    }
  }

  /**
   * Die API kann eine Anfrage aus Sicherheitsgründen ablehnen – das kommt als
   * HTTP 200 mit stop_reason "refusal" zurück, nicht als Fehler.
   */
  private assertNotRefused(stopReason: string | null): void {
    if (stopReason === 'refusal') {
      throw new ServiceUnavailableException(
        'Diese Anfrage konnte nicht bearbeitet werden. Bitte formuliere sie anders.',
      );
    }
  }

  private toUsage(usage: Anthropic.Usage): TokenUsage {
    return {
      inputTokens: usage.input_tokens ?? 0,
      outputTokens: usage.output_tokens ?? 0,
      cachedTokens: usage.cache_read_input_tokens ?? 0,
    };
  }

  private translate(error: unknown): Error {
    if (error instanceof Anthropic.RateLimitError) {
      this.logger.warn('Anthropic Rate-Limit erreicht');
      return new ServiceUnavailableException(
        'Gerade sind sehr viele Anfragen unterwegs – bitte in einem Moment erneut versuchen.',
      );
    }
    if (error instanceof Anthropic.AuthenticationError) {
      this.logger.error('Anthropic-Authentifizierung fehlgeschlagen – API-Key prüfen');
      return new ServiceUnavailableException('Die KI-Funktionen sind derzeit nicht verfügbar');
    }
    if (error instanceof Anthropic.APIError) {
      this.logger.error(`Anthropic API-Fehler ${error.status}: ${error.message}`);
      return new ServiceUnavailableException('Die KI-Antwort konnte nicht erzeugt werden');
    }
    return error instanceof Error ? error : new Error(String(error));
  }
}
