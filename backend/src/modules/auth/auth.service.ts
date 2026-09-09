import {
  ConflictException,
  Inject,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';
import { createHash, randomBytes } from 'node:crypto';
import { authConfig } from '../../config/configuration';
import { PrismaService } from '../../prisma/prisma.service';
import { UsersService } from '../users/users.service';
import { ChangePasswordDto, LoginDto, RegisterDto } from './dto/auth.dto';
import type { AuthResponse, AuthTokens } from '@lingua/shared';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
    private readonly users: UsersService,
    @Inject(authConfig.KEY) private readonly config: ConfigType<typeof authConfig>,
  ) {}

  async register(dto: RegisterDto, userAgent?: string): Promise<AuthResponse> {
    const existing = await this.prisma.user.findUnique({ where: { email: dto.email } });
    if (existing) throw new ConflictException('Für diese E-Mail existiert bereits ein Konto');

    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        passwordHash: await this.hashPassword(dto.password),
        displayName: dto.displayName,
        nativeLanguage: dto.nativeLanguage ?? 'de',
      },
    });

    this.logger.log(`Neues Konto registriert: ${user.id}`);
    return this.buildAuthResponse(user.id, user.email, userAgent);
  }

  async login(dto: LoginDto, userAgent?: string): Promise<AuthResponse> {
    const user = await this.prisma.user.findUnique({ where: { email: dto.email } });

    // Auch bei unbekannter E-Mail wird gehasht, damit die Antwortzeit nichts verrät.
    const valid = user
      ? await argon2.verify(user.passwordHash, dto.password).catch(() => false)
      : await this.dummyVerify(dto.password);

    if (!user || !valid) throw new UnauthorizedException('E-Mail oder Passwort ist falsch');

    return this.buildAuthResponse(user.id, user.email, userAgent);
  }

  /**
   * Refresh mit Rotation: Der genutzte Token wird sofort entwertet. Taucht ein bereits
   * entwerteter Token erneut auf, werden alle Sitzungen beendet (Diebstahlverdacht).
   */
  async refresh(refreshToken: string, userAgent?: string): Promise<AuthTokens> {
    let payload: { sub: string; email: string; type: string };
    try {
      payload = await this.jwt.verifyAsync(refreshToken, { secret: this.config.refreshSecret });
    } catch {
      throw new UnauthorizedException('Refresh-Token ist ungültig oder abgelaufen');
    }
    if (payload.type !== 'refresh') throw new UnauthorizedException('Falscher Token-Typ');

    const tokenHash = this.hashToken(refreshToken);
    const stored = await this.prisma.refreshToken.findFirst({
      where: { userId: payload.sub, tokenHash },
    });

    if (!stored) throw new UnauthorizedException('Refresh-Token ist unbekannt');

    if (stored.revokedAt || stored.expiresAt.getTime() < Date.now()) {
      await this.revokeAllSessions(payload.sub);
      throw new UnauthorizedException('Sitzung abgelaufen – bitte erneut anmelden');
    }

    await this.prisma.refreshToken.update({
      where: { id: stored.id },
      data: { revokedAt: new Date() },
    });

    return this.issueTokens(payload.sub, payload.email, userAgent);
  }

  async logout(refreshToken: string): Promise<void> {
    const tokenHash = this.hashToken(refreshToken);
    await this.prisma.refreshToken.updateMany({
      where: { tokenHash, revokedAt: null },
      data: { revokedAt: new Date() },
    });
  }

  async changePassword(userId: string, dto: ChangePasswordDto): Promise<void> {
    const user = await this.prisma.user.findUniqueOrThrow({ where: { id: userId } });
    const valid = await argon2.verify(user.passwordHash, dto.currentPassword).catch(() => false);
    if (!valid) throw new UnauthorizedException('Das aktuelle Passwort ist falsch');

    await this.prisma.user.update({
      where: { id: userId },
      data: { passwordHash: await this.hashPassword(dto.newPassword) },
    });
    // Passwortwechsel beendet alle bestehenden Sitzungen.
    await this.revokeAllSessions(userId);
  }

  async revokeAllSessions(userId: string): Promise<void> {
    await this.prisma.refreshToken.updateMany({
      where: { userId, revokedAt: null },
      data: { revokedAt: new Date() },
    });
  }

  private async buildAuthResponse(
    userId: string,
    email: string,
    userAgent?: string,
  ): Promise<AuthResponse> {
    const tokens = await this.issueTokens(userId, email, userAgent);
    const user = await this.users.getProfile(userId);
    return { ...tokens, user };
  }

  private async issueTokens(userId: string, email: string, userAgent?: string): Promise<AuthTokens> {
    const accessToken = await this.jwt.signAsync(
      { sub: userId, email, type: 'access' },
      { secret: this.config.accessSecret, expiresIn: this.config.accessTtl },
    );

    // jti macht jeden Refresh-Token einzigartig, auch bei identischem Zeitstempel.
    const refreshToken = await this.jwt.signAsync(
      { sub: userId, email, type: 'refresh', jti: randomBytes(16).toString('hex') },
      { secret: this.config.refreshSecret, expiresIn: this.config.refreshTtl },
    );

    const decoded = this.jwt.decode(refreshToken) as { exp: number };
    await this.prisma.refreshToken.create({
      data: {
        userId,
        tokenHash: this.hashToken(refreshToken),
        userAgent: userAgent?.slice(0, 255),
        expiresAt: new Date(decoded.exp * 1000),
      },
    });

    const accessDecoded = this.jwt.decode(accessToken) as { exp: number; iat: number };
    return { accessToken, refreshToken, expiresIn: accessDecoded.exp - accessDecoded.iat };
  }

  private hashPassword(password: string): Promise<string> {
    return argon2.hash(password, { type: argon2.argon2id, memoryCost: 19456, timeCost: 2 });
  }

  /** SHA-256 genügt: Refresh-Tokens sind bereits hochentropische Zufallswerte. */
  private hashToken(token: string): string {
    return createHash('sha256').update(token).digest('hex');
  }

  private async dummyVerify(password: string): Promise<false> {
    await argon2.hash(password).catch(() => undefined);
    return false;
  }
}
