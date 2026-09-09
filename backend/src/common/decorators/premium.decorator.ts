import { SetMetadata, UseGuards, applyDecorators } from '@nestjs/common';
import { PremiumGuard } from '../guards/premium.guard';

export const REQUIRES_PREMIUM_KEY = 'requiresPremium';

/**
 * Markiert eine Route als Premium-Funktion. Der PremiumGuard prüft Plan und Laufzeit
 * und antwortet sonst mit 402 (Payment Required) statt 403 – die App zeigt darauf das Upgrade an.
 */
export const RequiresPremium = () =>
  applyDecorators(SetMetadata(REQUIRES_PREMIUM_KEY, true), UseGuards(PremiumGuard));
