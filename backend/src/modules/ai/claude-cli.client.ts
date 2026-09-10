import { Inject, Injectable, Logger, ServiceUnavailableException } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { execFileSync, spawn } from 'node:child_process';
import { createInterface } from 'node:readline';
import { existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import type Anthropic from '@anthropic-ai/sdk';
import * as z from 'zod/v4';
import { aiConfig } from '../../config/configuration';
import type { AiClient, TokenUsage } from './ai-client.interface';

/**
 * KI-Anbindung über die `claude`-CLI statt über einen API-Key.
 *
 * Hintergrund: Wer bereits ein Claude-Abo (Pro/Max) hat, kann damit auch
 * ohne Anthropic-API-Guthaben ausprobieren, wie sich die KI-Funktionen der
 * App anfühlen. Die CLI meldet sich über dasselbe OAuth-Login an, mit dem
 * auch Claude Code selbst läuft – kein API-Key nötig.
 *
 * Ausdrücklich eine Entwicklungs-Übergangslösung, keine Produktionslösung:
 * Jede Anfrage zählt gegen das persönliche 5-Stunden-Kontingent des Abos
 * (dasselbe, das auch für interaktive Claude-Code-Sitzungen gilt) und läuft
 * über einen eigenen Prozess pro Anfrage – spürbar langsamer als ein
 * direkter API-Aufruf. Für eine App mit echten Endnutzern ist laut Anthropics
 * Nutzungsbedingungen weiterhin ein API-Key vorgesehen (siehe AnthropicClient).
 *
 * Sicherheitsprinzip dieser Klasse: Nutzergenerierter Text (Chat-Nachrichten,
 * Heft-Text, Freitext) geht ausschließlich über STDIN an den Kindprozess –
 * niemals als Kommandozeilen-Argument. Alle Argumente sind entweder feste
 * Konstanten, Werte aus einer festen Aufzählung (Modellname, Effort-Stufe)
 * oder JSON, das aus einem fest im Code hinterlegten Zod-Schema erzeugt
 * wird. So bleibt die Kindprozess-Erstellung sicher, ganz ohne Shell.
 */
@Injectable()
export class ClaudeCliClient implements AiClient {
  private readonly logger = new Logger(ClaudeCliClient.name);
  private executablePath: string | null = null;

  constructor(@Inject(aiConfig.KEY) private readonly config: ConfigType<typeof aiConfig>) {}

  get model(): string {
    return this.config.model;
  }

  /**
   * Optimistisch `true`: Ob die CLI wirklich angemeldet und erreichbar ist,
   * zeigt sich erst beim tatsächlichen Aufruf (dort dann als 503).
   */
  get isConfigured(): boolean {
    return true;
  }

  async parse<T>(params: {
    schema: z.ZodType<T>;
    systemPrefix: string;
    systemSuffix: string;
    userContent: string;
    maxTokens?: number;
    effort?: 'low' | 'medium' | 'high' | 'xhigh' | 'max';
  }): Promise<{ parsed: T; usage: TokenUsage }> {
    // `$schema` (Meta-Schema-Verweis) kennt die CLI-eigene Validierung nicht
    // und lehnt das Schema dann komplett ab – deshalb entfernen.
    const { $schema: _unused, ...jsonSchemaObject } = z.toJSONSchema(params.schema) as Record<string, unknown>;
    const jsonSchema = JSON.stringify(jsonSchemaObject);
    const args = [
      '-p',
      '--output-format',
      'json',
      '--tools',
      '',
      '--permission-prompts',
      'none',
      '--model',
      this.model,
      '--system-prompt',
      params.systemPrefix,
      '--json-schema',
      jsonSchema,
      '--max-budget-usd',
      MAX_BUDGET_USD,
      ...(params.effort ? ['--effort', params.effort] : []),
    ];

    const result = await this.run(args, params.systemSuffix + '\n\n' + params.userContent);

    // `structured_output` ist bereits gegen das JSON-Schema geprüft – zur
    // Sicherheit trotzdem noch einmal mit demselben Zod-Schema validieren,
    // damit dieselbe Laufzeitgarantie wie beim API-Key-Pfad gilt.
    const parsed = params.schema.safeParse(result.structuredOutput);
    if (!parsed.success) {
      this.logger.error(`Unerwartetes Antwortformat: ${parsed.error.message}`);
      throw new ServiceUnavailableException('Die KI-Antwort hatte ein unerwartetes Format');
    }

    return { parsed: parsed.data, usage: result.usage };
  }

  async completeText(params: {
    systemPrefix: string;
    systemSuffix: string;
    messages: Anthropic.MessageParam[];
    maxTokens?: number;
  }): Promise<{ text: string; usage: TokenUsage }> {
    const args = [
      '-p',
      '--output-format',
      'json',
      '--tools',
      '',
      '--permission-prompts',
      'none',
      '--model',
      this.model,
      '--system-prompt',
      params.systemPrefix,
      '--max-budget-usd',
      MAX_BUDGET_USD,
    ];

    const result = await this.run(args, this.transcriptFor(params.systemSuffix, params.messages));
    return { text: result.text.trim(), usage: result.usage };
  }

  async *streamText(params: {
    systemPrefix: string;
    systemSuffix: string;
    messages: Anthropic.MessageParam[];
    maxTokens?: number;
  }): AsyncGenerator<{ type: 'delta'; text: string } | { type: 'done'; text: string; usage: TokenUsage }> {
    const args = [
      '-p',
      '--output-format',
      'stream-json',
      '--include-partial-messages',
      '--verbose',
      '--tools',
      '',
      '--permission-prompts',
      'none',
      '--model',
      this.model,
      '--system-prompt',
      params.systemPrefix,
      '--max-budget-usd',
      MAX_BUDGET_USD,
    ];

    yield* this.runStreaming(args, this.transcriptFor(params.systemSuffix, params.messages));
  }

  /**
   * Die App führt ihre eigene Konversationshistorie (aus der Datenbank) statt
   * einer CLI-Sitzung – deshalb wird der bisherige Verlauf als Transkript in
   * den Prompt geschrieben, nicht über `--resume` fortgesetzt.
   */
  private transcriptFor(systemSuffix: string, messages: Anthropic.MessageParam[]): string {
    const turns = messages
      .map((message) => {
        const speaker = message.role === 'assistant' ? 'Assistent' : 'Lernende Person';
        const text = typeof message.content === 'string' ? message.content : JSON.stringify(message.content);
        return `${speaker}: ${text}`;
      })
      .join('\n\n');

    return [
      systemSuffix,
      '',
      'Bisheriger Gesprächsverlauf:',
      turns,
      '',
      'Antworte jetzt als Assistent auf die letzte Nachricht der lernenden Person.',
    ].join('\n');
  }

  /** Pfad zur echten ausführbaren Datei hinter der `claude`-CLI, siehe Klassendoku. */
  private resolveExecutable(): string {
    if (this.executablePath) return this.executablePath;
    if (process.env.CLAUDE_CLI_PATH) {
      this.executablePath = process.env.CLAUDE_CLI_PATH;
      return this.executablePath;
    }

    // Auf macOS/Linux ist die CLI ein normales, direkt ausführbares Skript –
    // `spawn` findet es selbst über PATH, ganz ohne Shell.
    if (process.platform !== 'win32') {
      this.executablePath = 'claude';
      return this.executablePath;
    }

    // Windows: Der globale `claude`-Befehl ist ein .cmd-Shim. .cmd-Dateien
    // lassen sich ohne Shell nicht starten, und mit Shell werden Argumente
    // nur aneinandergehängt statt sicher escaped – für ein JSON-Schema als
    // Argument bricht das. Deshalb direkt die dahinterliegende .exe suchen.
    try {
      const globalRoot = execFileSync('npm', ['root', '-g'], { encoding: 'utf8', shell: true }).trim();
      const exe = join(globalRoot, '@anthropic-ai', 'claude-code', 'bin', 'claude.exe');
      if (existsSync(exe)) {
        this.executablePath = exe;
        return exe;
      }
    } catch (error) {
      this.logger.warn(`claude-CLI-Pfad konnte nicht ermittelt werden: ${String(error)}`);
    }

    throw new ServiceUnavailableException(
      'Die claude-CLI wurde nicht gefunden. CLAUDE_CLI_PATH in .env setzen oder "npm install -g @anthropic-ai/claude-code" ausführen.',
    );
  }

  private spawnClaude(args: string[]) {
    const executable = this.resolveExecutable();
    // ANTHROPIC_API_KEY steht (für den anderen Anbieter-Pfad, AnthropicClient)
    // im eigenen Prozess-Environment und würde sonst an die CLI vererbt –
    // die zieht einen gesetzten API-Key dann dem Abo-Login vor. Für diesen
    // Kindprozess deshalb gezielt entfernen, damit die CLI die
    // OAuth-Anmeldung des Claude-Abos nutzt.
    const env = { ...process.env };
    delete env.ANTHROPIC_API_KEY;
    return spawn(executable, args, { windowsHide: true, cwd: tmpdir(), env });
  }

  private run(
    args: string[],
    stdin: string,
  ): Promise<{ text: string; structuredOutput: unknown; usage: TokenUsage }> {
    return new Promise((resolve, reject) => {
      let child: ReturnType<typeof spawn>;
      try {
        child = this.spawnClaude(args);
      } catch (error) {
        reject(error instanceof Error ? error : new Error(String(error)));
        return;
      }

      let stdout = '';
      let stderr = '';
      let settled = false;

      const timer = setTimeout(() => {
        if (settled) return;
        settled = true;
        child.kill();
        reject(new ServiceUnavailableException('Die KI-Antwort hat zu lange gedauert'));
      }, TIMEOUT_MS);

      child.stdout!.on('data', (chunk) => {
        stdout += chunk;
      });
      child.stderr!.on('data', (chunk) => {
        stderr += chunk;
      });
      child.on('error', (error) => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        this.logger.error(`claude-CLI konnte nicht gestartet werden: ${error.message}`);
        reject(new ServiceUnavailableException('Die KI-Funktionen sind derzeit nicht verfügbar'));
      });
      child.on('close', () => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);

        const parsed = this.parseResultLine(stdout);
        if (!parsed || parsed.is_error || parsed.subtype !== 'success') {
          this.logger.error(
            `claude-CLI Fehler: ${stderr.trim() || parsed?.result || 'unbekannte Antwort'}`,
          );
          reject(new ServiceUnavailableException('Die KI-Antwort konnte nicht erzeugt werden'));
          return;
        }

        resolve({
          text: typeof parsed.result === 'string' ? parsed.result : '',
          structuredOutput: parsed.structured_output,
          usage: this.toUsage(parsed.usage),
        });
      });

      child.stdin!.write(stdin);
      child.stdin!.end();
    });
  }

  private async *runStreaming(
    args: string[],
    stdin: string,
  ): AsyncGenerator<{ type: 'delta'; text: string } | { type: 'done'; text: string; usage: TokenUsage }> {
    const child = this.spawnClaude(args);
    child.on('error', (error) => {
      this.logger.error(`claude-CLI konnte nicht gestartet werden: ${error.message}`);
    });

    const timer = setTimeout(() => child.kill(), TIMEOUT_MS);
    child.stdin!.write(stdin);
    child.stdin!.end();

    const lines = createInterface({ input: child.stdout! });
    let text = '';
    let usage: TokenUsage = { inputTokens: 0, outputTokens: 0, cachedTokens: 0 };
    let errored = false;

    try {
      for await (const line of lines) {
        if (!line.trim()) continue;
        let event: Record<string, unknown>;
        try {
          event = JSON.parse(line);
        } catch {
          continue;
        }

        if (event.type === 'stream_event') {
          const inner = (event.event ?? {}) as Record<string, unknown>;
          const delta = (inner.delta ?? {}) as Record<string, unknown>;
          if (inner.type === 'content_block_delta' && delta.type === 'text_delta') {
            const chunk = String(delta.text ?? '');
            text += chunk;
            yield { type: 'delta', text: chunk };
          }
        } else if (event.type === 'result') {
          usage = this.toUsage(event.usage);
          errored = Boolean(event.is_error) || event.subtype !== 'success';
        }
      }
    } finally {
      clearTimeout(timer);
      child.kill();
    }

    if (errored) {
      throw new ServiceUnavailableException('Die KI-Antwort konnte nicht erzeugt werden');
    }
    yield { type: 'done', text: text.trim(), usage };
  }

  /** `--output-format json` liefert genau eine Zeile; robust trotzdem die letzte nicht-leere Zeile nehmen. */
  private parseResultLine(stdout: string): {
    is_error?: boolean;
    subtype?: string;
    result?: unknown;
    structured_output?: unknown;
    usage?: unknown;
  } | null {
    const lines = stdout.split('\n').map((line) => line.trim()).filter(Boolean);
    const last = lines[lines.length - 1];
    if (!last) return null;
    try {
      return JSON.parse(last);
    } catch {
      return null;
    }
  }

  private toUsage(usage: unknown): TokenUsage {
    const raw = (usage ?? {}) as { input_tokens?: number; output_tokens?: number; cache_read_input_tokens?: number };
    return {
      inputTokens: raw.input_tokens ?? 0,
      outputTokens: raw.output_tokens ?? 0,
      cachedTokens: raw.cache_read_input_tokens ?? 0,
    };
  }
}

/** Harte Kappung pro Aufruf – Sicherheitsnetz, kein erwarteter Normalfall. */
const MAX_BUDGET_USD = '1.00';
/** Verhindert, dass eine hängende CLI die Anfrage unbegrenzt offen hält. */
const TIMEOUT_MS = 120_000;
