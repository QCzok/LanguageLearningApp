import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import type { AuthenticatedUser } from '../decorators/current-user.decorator';

import { ERR } from '../i18n/messages';

/** Antwortet mit 402, damit die App gezielt den Upgrade-Screen öffnen kann. */
@Injectable()
export class PremiumGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const { user } = context.switchToHttp().getRequest<{ user?: AuthenticatedUser }>();

    const active =
      user?.plan === 'PREMIUM' && (!user.premiumUntil || user.premiumUntil.getTime() > Date.now());

    if (!active) {
      throw new HttpException(
        {
          statusCode: HttpStatus.PAYMENT_REQUIRED,
          error: 'PremiumRequired',
          message: ERR['premium.required'],
        },
        HttpStatus.PAYMENT_REQUIRED,
      );
    }
    return true;
  }
}
