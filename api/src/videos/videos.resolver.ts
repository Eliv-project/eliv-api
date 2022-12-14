import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { VideoCreateInput } from 'src/prisma/@generated/video/video-create.input';
import { VideoUpdateInput } from 'src/prisma/@generated/video/video-update.input';
import { VideoWhereUniqueInput } from 'src/prisma/@generated/video/video-where-unique.input';
import { VideoWhereInput } from 'src/prisma/@generated/video/video-where.input';
import { Video } from 'src/prisma/@generated/video/video.model';
import { VideosService } from './videos.service';

@Resolver(() => Video)
export class VideosResolver {
  constructor(private readonly videosService: VideosService) {}

  @Mutation(() => Video)
  createVideo(
    @Args('data')
    data: VideoCreateInput,
  ) {
    return this.videosService.create(data);
  }

  @Query(() => [Video], { name: 'videos' })
  findAll(
    @Args('where')
    where: VideoWhereInput,
  ) {
    return this.videosService.findAll(where);
  }

  @Query(() => Video, { name: 'video' })
  findOne(@Args('where') where: VideoWhereUniqueInput) {
    return this.videosService.findOne(where);
  }

  @Mutation(() => Video)
  updateVideo(
    @Args('where') where: VideoWhereUniqueInput,
    @Args('data')
    data: VideoUpdateInput,
  ) {
    return this.videosService.update(where, data);
  }

  @Mutation(() => Video)
  removeVideo(@Args('where') where: VideoWhereUniqueInput) {
    return this.videosService.remove(where);
  }
}
