import { Inject, Injectable, Logger, ServiceUnavailableException } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import OpenAI, { toFile } from 'openai';
import { aiConfig } from '../../config/configuration';

/**
 * Transkribiert Sprachaufnahmen über die OpenAI-Whisper-API. Läuft bewusst
 * getrennt vom Anthropic-Chat-Client (`AiClient`), da Anthropic keine
 * Audio-Transkription anbietet.
 */
@Injectable()
export class WhisperClient {
  private readonly logger = new Logger(WhisperClient.name);
  private readonly client: OpenAI | null;

  constructor(@Inject(aiConfig.KEY) private readonly config: ConfigType<typeof aiConfig>) {
    this.client = config.transcriptionApiKey ? new OpenAI({ apiKey: config.transcriptionApiKey }) : null;
    if (!this.client) {
      this.logger.warn('OPENAI_API_KEY fehlt – Sprachaufnahme im Chat ist deaktiviert.');
    }
  }

  get isConfigured(): boolean {
    return this.client !== null;
  }

  get model(): string {
    return this.config.transcriptionModel;
  }

  async transcribe(buffer: Buffer, filename: string, mimeType: string): Promise<string> {
    if (!this.client) {
      throw new ServiceUnavailableException('Spracherkennung ist derzeit nicht verfügbar.');
    }

    const file = await toFile(buffer, filename, { type: mimeType });
    const result = await this.client.audio.transcriptions.create({
      file,
      model: this.model,
    });
    return result.text.trim();
  }
}
