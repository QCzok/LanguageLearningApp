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
 */
@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);

  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const { status, error, message } = this.normalize(exception);

    if (status >= HttpStatus.INTERNAL_SERVER_ERROR) {
      this.logger.error(
        `${request.method} ${request.url} -> ${status}`,
        exception instanceof Error ? exception.stack : String(exception),
      );
    }

    const body: ErrorBody = {
      statusCode: status,
      error,
      message,
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
            message: 'Dieser Eintrag existiert bereits.',
          };
        case 'P2025':
          return {
            status: HttpStatus.NOT_FOUND,
            error: 'NotFound',
            message: 'Der angeforderte Eintrag wurde nicht gefunden.',
          };
        case 'P2003':
          return {
            status: HttpStatus.BAD_REQUEST,
            error: 'BadRequest',
            message: 'Ungültige Referenz auf einen verknüpften Datensatz.',
          };
        default:
          break;
      }
    }

    if (exception instanceof Prisma.PrismaClientValidationError) {
      return {
        status: HttpStatus.BAD_REQUEST,
        error: 'BadRequest',
        message: 'Die Anfrage passt nicht zum Datenmodell.',
      };
    }

    return {
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      error: 'InternalServerError',
      message: 'Unerwarteter Serverfehler.',
    };
  }
}
