import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import type { Plan, UserRole } from '@prisma/client';

/** Vom JwtStrategy in request.user abgelegt. */
export interface AuthenticatedUser {
  id: string;
  email: string;
  role: UserRole;
  plan: Plan;
  premiumUntil: Date | null;
}

export const CurrentUser = createParamDecorator(
  (data: keyof AuthenticatedUser | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<{ user: AuthenticatedUser }>();
    return data ? request.user?.[data] : request.user;
  },
);
