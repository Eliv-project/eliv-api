import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLiveSessionInput } from './dto/create-live-session.input';
import { UpdateLiveSessionInput } from './dto/update-live-session.input';

@Injectable()
export class LiveSessionsService {
  constructor(private prisma: PrismaService) {}

  create(createLiveSessionInput: Prisma.LiveSessionCreateInput) {
    return this.prisma.liveSession.create({
      data: createLiveSessionInput,
    });
  }

  findAll() {
    return `This action returns all liveSessions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} liveSession`;
  }

  update(id: number, updateLiveSessionInput: UpdateLiveSessionInput) {
    return `This action updates a #${id} liveSession`;
  }

  remove(id: number) {
    return `This action removes a #${id} liveSession`;
  }
}
