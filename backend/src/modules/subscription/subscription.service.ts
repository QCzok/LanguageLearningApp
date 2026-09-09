import { Injectable, Logger } from '@nestjs/common';
import { Plan } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

/**
 * Abo-Verwaltung.
 *
 * Bewusst ohne Zahlungsanbieter: Die App-Stores (StoreKit / Google Play Billing)
 * liefern später Kaufbelege, die hier serverseitig verifiziert werden. Bis dahin
 * kapselt dieser Service die Plan-Logik an genau einer Stelle.
 */
@Injectable()
export class SubscriptionService {
  private readonly logger = new Logger(SubscriptionService.name);

  constructor(private readonly prisma: PrismaService) {}

  async getStatus(userId: string) {
    const user = await this.prisma.user.findUniqueOrThrow({
      where: { id: userId },
      select: { plan: true, premiumUntil: true },
    });

    const active =
      user.plan === Plan.PREMIUM &&
      (!user.premiumUntil || user.premiumUntil.getTime() > Date.now());

    return {
      plan: active ? Plan.PREMIUM : Plan.FREE,
      premiumUntil: user.premiumUntil?.toISOString() ?? null,
      active,
      features: {
        notebookAiCorrection: active,
        aiChat: active,
        grammarExplanations: active,
        personalRecommendations: active,
        premiumLibrary: active,
      },
    };
  }

  /** Wird nach erfolgreicher Beleg-Prüfung aufgerufen. */
  async activatePremium(userId: string, until: Date, source: string) {
    this.logger.log(`Premium aktiviert für ${userId} bis ${until.toISOString()} (${source})`);
    return this.prisma.user.update({
      where: { id: userId },
      data: { plan: Plan.PREMIUM, premiumUntil: until },
      select: { plan: true, premiumUntil: true },
    });
  }

  async cancelPremium(userId: string) {
    return this.prisma.user.update({
      where: { id: userId },
      data: { plan: Plan.FREE, premiumUntil: null },
      select: { plan: true, premiumUntil: true },
    });
  }
}
