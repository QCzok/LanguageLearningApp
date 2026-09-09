import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { UpdateProfileDto, UpsertLearningProfileDto } from './dto/users.dto';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly users: UsersService) {}

  @Get('me')
  @ApiOperation({ summary: 'Eigenes Profil inkl. Lernprofilen' })
  me(@CurrentUser('id') userId: string) {
    return this.users.getProfile(userId);
  }

  @Patch('me')
  @ApiOperation({ summary: 'Profil aktualisieren' })
  update(@CurrentUser('id') userId: string, @Body() dto: UpdateProfileDto) {
    return this.users.updateProfile(userId, dto);
  }

  @Get('me/learning-profiles')
  @ApiOperation({ summary: 'Alle Lernprofile' })
  profiles(@CurrentUser('id') userId: string) {
    return this.users.listProfiles(userId);
  }

  @Post('me/learning-profiles')
  @ApiOperation({ summary: 'Lernsprache und Niveau festlegen' })
  upsertProfile(@CurrentUser('id') userId: string, @Body() dto: UpsertLearningProfileDto) {
    return this.users.upsertLearningProfile(userId, dto);
  }

  @Post('me/learning-profiles/:id/activate')
  @ApiOperation({ summary: 'Lernsprache wechseln' })
  activate(@CurrentUser('id') userId: string, @Param('id') profileId: string) {
    return this.users.activateProfile(userId, profileId);
  }

  @Post('me/complete-onboarding')
  @ApiOperation({ summary: 'Onboarding abschließen' })
  complete(@CurrentUser('id') userId: string) {
    return this.users.completeOnboarding(userId);
  }

  @Delete('me')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Konto und alle Daten löschen' })
  remove(@CurrentUser('id') userId: string) {
    return this.users.deleteAccount(userId);
  }
}
