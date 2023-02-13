import { Module } from '@nestjs/common';
import { ViewersService } from './viewers.service';
import { ViewersResolver } from './viewers.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [ViewersResolver, ViewersService, PrismaService],
})
export class ViewersModule {}
