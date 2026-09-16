import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import type { Request, Response } from 'express';

import { ERR, resolveLanguage, translateMessage } from '../i18n/messages';

interface ErrorBody {
  statusCode: number;
  error: string;
  message: string | string[];
  path: string;
  timestamp: string;
}

/**
 * Einheitliches Fehlerformat für die App. Prisma-Fehler werden auf sprechende
 * HTTP-Codes gemappt, damit keine DB-Interna nach außen dringen.
 *
 * Hier wird außerdem übersetzt: Services und Guards werfen Schlüssel aus
 * `ERR` (siehe `common/i18n/messages.ts`), und erst an dieser Stelle – der
 * einzigen, die die Anfrage und damit den `Accept-Language`-Kopf kennt –
 * werden daraus Sätze in der Sprache des Lernenden. Eine Meldung, die kein
 * Schlüssel ist (etwa von einer Fremdbibliothek), bleibt unverändert stehen.
 */
@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);

  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const { status, error, message } = this.normalize(exception);
    const language = resolveLanguage(request.headers['accept-language']);

    if (status >= HttpStatus.INTERNAL_SERVER_ERROR) {
      this.logger.error(
        `${request.method} ${request.url} -> ${status}`,
        exception instanceof Error ? exception.stack : String(exception),
      );
    }

    const body: ErrorBody = {
      statusCode: status,
      error,
      message: Array.isArray(message)
        ? message.map((entry) => translateMessage(entry, language))
        : translateMessage(message, language),
      path: request.url,
      timestamp: new Date().toISOString(),
    };
    response.status(status).json(body);
  }

  private normalize(exception: unknown): {
    status: number;
    error: string;
    message: string | string[];
  } {
    if (exception instanceof HttpException) {
      const res = exception.getResponse();
      if (typeof res === 'string') {
        return { status: exception.getStatus(), error: exception.name, message: res };
      }
      const obj = res as { error?: string; message?: string | string[] };
      return {
        status: exception.getStatus(),
        error: obj.error ?? exception.name,
        message: obj.message ?? exception.message,
      };
    }

    if (exception instanceof Prisma.PrismaClientKnownRequestError) {
      switch (exception.code) {
        case 'P2002':
          return {
            status: HttpStatus.CONFLICT,
            error: 'Conflict',
            message: ERR['db.duplicate'],
          };
        case 'P2025':
          return {
            status: HttpStatus.NOT_FOUND,
            error: 'NotFound',
            message: ERR['db.not_found'],
          };
        case 'P2003':
          return {
            status: HttpStatus.BAD_REQUEST,
            error: 'BadRequest',
            message: ERR['db.bad_reference'],
          };
        default:
          break;
      }
    }

    if (exception instanceof Prisma.PrismaClientValidationError) {
      return {
        status: HttpStatus.BAD_REQUEST,
        error: 'BadRequest',
        message: ERR['db.bad_shape'],
      };
    }

    return {
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      error: 'InternalServerError',
      message: ERR['server.unexpected'],
    };
  }
}
