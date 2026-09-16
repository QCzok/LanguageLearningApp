import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import type { Request } from 'express';
import { resolveLanguage, type MessageLanguage } from '../i18n/messages';

/**
 * Die Sprache der Anfrage aus dem `Accept-Language`-Kopf, den die App auf ihre
 * Menüsprache setzt (siehe `api/client.ts` in der App).
 *
 * Gebraucht wird das nur dort, wo ein Text als *Daten* zurückgeht – etwa die
 * Empfehlung am Ende des Einstufungstests. Fehlermeldungen brauchen ihn nicht:
 * Die werden als Schlüssel geworfen und erst im `AllExceptionsFilter`
 * übersetzt.
 */
export const RequestLanguage = createParamDecorator(
  (_data: unknown, context: ExecutionContext): MessageLanguage => {
    const request = context.switchToHttp().getRequest<Request>();
    return resolveLanguage(request.headers['accept-language']);
  },
);
