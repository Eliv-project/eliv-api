import { Module } from '@nestjs/common';
import { OauthLinksService } from './oauth-links.service';
import { OauthLinksResolver } from './oauth-links.resolver';

@Module({
  providers: [OauthLinksResolver, OauthLinksService]
})
export class OauthLinksModule {}
