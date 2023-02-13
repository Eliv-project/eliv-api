import {
  Injectable,
  CanActivate,
  ExecutionContext,
  NotFoundException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ViewerWhereUniqueInput } from 'src/prisma/@generated/viewer/viewer-where-unique.input';
import { ViewersService } from '../viewers.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class IsValidViewer implements CanActivate {
  constructor(private viewersService: ViewersService) {}

  async canActivate(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const gqlRequest = ctx.getContext();
    const viewerWhere: ViewerWhereUniqueInput =
      ctx.getArgs().where || ctx.getArgs().viewerWhere;

    const viewer = await this.viewersService.findOne({
      where: viewerWhere as Prisma.ViewerWhereUniqueInput,
    });
    if (!viewer) {
      throw new NotFoundException('VIEWER_NOT_FOUND');
    }

    gqlRequest.viewer = viewer;

    return true;
  }
}
