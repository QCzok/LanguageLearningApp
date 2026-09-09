import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

/** Global, damit jeder Feature-Service den PrismaService ohne erneuten Import bekommt. */
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
