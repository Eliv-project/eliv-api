import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [UsersResolver, UsersService, PrismaService],
  exports: [
    UsersService,
  ] /* Export service so that it's visible outside module and other can inject it 
  for future use*/,
})
export class UsersModule {}
