import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Inject } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { authConfig } from '../../../config/configuration';
import { PrismaService } from '../../../prisma/prisma.service';
import type { AuthenticatedUser } from '../../../common/decorators/current-user.decorator';

export interface JwtPayload {
  sub: string;
  email: string;
  type: 'access';
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    @Inject(authConfig.KEY) config: ConfigType<typeof authConfig>,
    private readonly prisma: PrismaService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.accessSecret,
    });
  }

  /**
   * Der Token allein reicht nicht: Plan und Rolle werden pro Request frisch geladen,
   * damit ein Downgrade oder eine Sperre sofort greift.
   */
  async validate(payload: JwtPayload): Promise<AuthenticatedUser> {
    if (payload.type !== 'access') throw new UnauthorizedException('Falscher Token-Typ');

    const user = await this.prisma.user.findUnique({
      where: { id: payload.sub },
      select: { id: true, email: true, role: true, plan: true, premiumUntil: true },
    });
    if (!user) throw new UnauthorizedException('Konto existiert nicht mehr');

    return user;
  }
}
