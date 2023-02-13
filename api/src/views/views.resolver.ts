import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { VideoWhereUniqueInput } from 'src/prisma/@generated/video/video-where-unique.input';
import { View } from 'src/prisma/@generated/view/view.model';
import { ViewsService } from './views.service';
import { ViewerWhereUniqueInput } from 'src/prisma/@generated/viewer/viewer-where-unique.input';
import { CurrentViewer } from 'src/viewers/decorators/current-viewer.decorator';
import { Viewer } from 'src/prisma/@generated/viewer/viewer.model';
import { IsValidViewer } from 'src/viewers/guards/is-valid-viewer.guard';
import { UseGuards } from '@nestjs/common';
import { IsValidVideo } from 'src/videos/guards/is-valid-video.guard';
import { CurrentVideo } from 'src/videos/decorators/current-video.decorator';
import { Video } from 'src/prisma/@generated/video/video.model';
import { ViewCreateInput } from 'src/prisma/@generated/view/view-create.input';
import { ViewWhereInput } from 'src/prisma/@generated/view/view-where.input';
import { Prisma } from '@prisma/client';

@Resolver(() => View)
export class ViewsResolver {
  constructor(private readonly viewsService: ViewsService) {}

  @Mutation(() => View)
  @UseGuards(IsValidViewer, IsValidVideo)
  async createView(
    @Args('viewerWhere') viewerWhere: ViewerWhereUniqueInput,
    @Args('videoWhere') videoWhere: VideoWhereUniqueInput,
    @Args('data') data: ViewCreateInput,
    @CurrentViewer() currentViewer: Viewer,
    @CurrentVideo() currentVideo: Video,
  ) {
    if (currentVideo.vodSession) {
      return this.viewsService.create({
        data: {
          ip: data.ip,
          video: { connect: { id: currentVideo.id } },
          viewer: { connect: { id: currentViewer.id } },
        },
      });
    }

    // Get prev active view
    const dateFrom5MinEarlier = new Date(Date.now() - 1000 * (60 * 5));
    const activeView = await this.viewsService.findFirst({
      where: {
        video: { id: currentVideo.id },
        viewer: { id: currentViewer.id },
        updatedAt: {
          gte: dateFrom5MinEarlier,
        },
      },
    });

    // Update view time
    if (activeView) {
      return this.viewsService.update(
        {
          id: activeView.id,
        },
        { ip: data.ip },
      );
    }

    // Create new view if not existed
    return this.viewsService.create({
      data: {
        ip: data.ip,
        video: { connect: { id: currentVideo.id } },
        viewer: { connect: { id: currentViewer.id } },
      },
    });
  }

  @Query(() => Int, { name: 'countView' })
  @IsPublic()
  countView(
    @Args('videoWhere') videoWhere: VideoWhereUniqueInput,
    @Args('viewWhere', { nullable: true }) viewWhere: ViewWhereInput,
  ) {
    return this.viewsService.count({
      ...(viewWhere as Prisma.ViewWhereInput),
      video: {
        is: {
          OR: [
            { id: { equals: videoWhere.id } },
            { dirId: { equals: videoWhere.dirId } },
            { slug: { equals: videoWhere.slug } },
          ],
        },
      },
    });
  }

  // @Query(() => View, { name: 'view' })
  // findOne(@Args('where') where: ViewWhereUniqueInput) {
  //   return this.viewsService.findOne(where);
  // }

  // @Mutation(() => View)
  // updateView(
  //   @Args('where') where: ViewWhereUniqueInput,
  //   @Args('data') data: ViewUpdateInput,
  // ) {
  //   return this.viewsService.update(where, data);
  // }

  // @Mutation(() => View)
  // removeView(@Args('where') where: ViewWhereUniqueInput) {
  //   return this.viewsService.remove(where);
  // }
}
