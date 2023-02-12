import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class OAuthLinksService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.OAuthLinkCreateInput) {
    return this.prisma.oAuthLink.create({ data });
  }

  findAll(where: Prisma.OAuthLinkWhereInput) {
    return this.prisma.oAuthLink.findMany({ where });
  }

  findOne(where: Prisma.OAuthLinkWhereUniqueInput) {
    return this.prisma.oAuthLink.findUnique({ where, include: { user: true } });
  }

  update(
    where: Prisma.OAuthLinkWhereUniqueInput,
    data: Prisma.OAuthLinkUpdateInput,
  ) {
    return this.prisma.oAuthLink.update({
      where,
      data,
    });
  }

  remove(where: Prisma.OAuthLinkWhereUniqueInput) {
    return this.prisma.oAuthLink.delete({ where });
  }
}
