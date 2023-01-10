import { Module } from '@nestjs/common';
import { VodSessionsService } from './vod-sessions.service';
import { VodSessionsResolver } from './vod-sessions.resolver';

@Module({
  providers: [VodSessionsResolver, VodSessionsService]
})
export class VodSessionsModule {}
