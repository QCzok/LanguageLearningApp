import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IsIn, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { SubscriptionService } from './subscription.service';

class ActivatePremiumDto {
  @ApiProperty({ enum: ['APP_STORE', 'PLAY_STORE', 'DEV'] })
  @IsIn(['APP_STORE', 'PLAY_STORE', 'DEV'])
  source!: 'APP_STORE' | 'PLAY_STORE' | 'DEV';

  @ApiPropertyOptional({ description: 'Kaufbeleg des Stores (wird serverseitig geprüft)' })
  @IsOptional()
  @IsString()
  receipt?: string;
}

@ApiTags('subscription')
@Controller('subscription')
export class SubscriptionController {
  constructor(private readonly subscription: SubscriptionService) {}

  @Get('status')
  @ApiOperation({ summary: 'Aktueller Plan und freigeschaltete Funktionen' })
  status(@CurrentUser('id') userId: string) {
    return this.subscription.getStatus(userId);
  }

  /**
   * Platzhalter bis zur Store-Anbindung: Ohne echte Belegprüfung wird der
   * Endpunkt außerhalb der Entwicklung abgelehnt.
   */
  @Post('activate')
  @ApiOperation({ summary: 'Premium nach Kauf aktivieren' })
  async activate(@CurrentUser('id') userId: string, @Body() dto: ActivatePremiumDto) {
    if (dto.source === 'DEV' && process.env.NODE_ENV === 'production') {
      throw new Error('DEV-Aktivierung ist in Produktion gesperrt');
    }

    const until = new Date();
    until.setUTCMonth(until.getUTCMonth() + 1);
    return this.subscription.activatePremium(userId, until, dto.source);
  }

  @Post('cancel')
  @ApiOperation({ summary: 'Premium beenden' })
  cancel(@CurrentUser('id') userId: string) {
    return this.subscription.cancelPremium(userId);
  }
}
