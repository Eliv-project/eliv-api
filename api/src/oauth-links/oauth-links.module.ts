import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { OAuthLinksResolver } from './oauth-links.resolver';
import { OAuthLinksService } from './oauth-links.service';

@Module({
  providers: [OAuthLinksResolver, OAuthLinksService, PrismaService],
})
export class OauthLinksModule {}
