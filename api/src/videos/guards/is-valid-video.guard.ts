import {
  Injectable,
  CanActivate,
  ExecutionContext,
  NotFoundException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { VideoWhereUniqueInput } from 'src/prisma/@generated/video/video-where-unique.input';
import { VideosService } from '../videos.service';

@Injectable()
export class IsValidVideo implements CanActivate {
  constructor(private readonly videosService: VideosService) {}

  async canActivate(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const gqlRequest = ctx.getContext();
    const videoWhere: VideoWhereUniqueInput = ctx.getArgs().where;

    const video = await this.videosService.findOne(videoWhere);
    if (!video) {
      throw new NotFoundException('VIDEO_NOT_FOUND');
    }

    gqlRequest.video = video;

    return true;
  }
}
