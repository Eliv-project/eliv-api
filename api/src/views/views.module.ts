import { Module } from '@nestjs/common';
import { ViewsService } from './views.service';
import { ViewsResolver } from './views.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [ViewsResolver, ViewsService, PrismaService],
})
export class ViewsModule {}
