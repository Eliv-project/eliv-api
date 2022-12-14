import { Injectable } from '@nestjs/common';
import { OAuthLinkCreateInput } from 'src/prisma/@generated/o-auth-link/o-auth-link-create.input';
import { OAuthLinkUpdateInput } from 'src/prisma/@generated/o-auth-link/o-auth-link-update.input';
import { OAuthLinkWhereUniqueInput } from 'src/prisma/@generated/o-auth-link/o-auth-link-where-unique.input';
import { OAuthLinkWhereInput } from 'src/prisma/@generated/o-auth-link/o-auth-link-where.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OAuthLinksService {
  constructor(private prisma: PrismaService) {}

  create(data: OAuthLinkCreateInput) {
    return this.prisma.oAuthLink.create({ data });
  }

  findAll(where: OAuthLinkWhereInput) {
    return this.prisma.oAuthLink.findMany({ where });
  }

  findOne(where: OAuthLinkWhereUniqueInput) {
    return this.prisma.oAuthLink.findUnique({ where });
  }

  update(where: OAuthLinkWhereUniqueInput, data: OAuthLinkUpdateInput) {
    return this.prisma.oAuthLink.update({
      where,
      data,
    });
  }

  remove(where: OAuthLinkWhereUniqueInput) {
    return this.prisma.oAuthLink.delete({ where });
  }
}
