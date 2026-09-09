import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';

/** Hebt den global registrierten JwtAuthGuard für einzelne Routen auf. */
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
