import { Inject, InternalServerErrorException } from '@nestjs/common';
import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  Subscription,
} from '@nestjs/graphql';
import { randomUUID } from 'crypto';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { IsPublic } from 'src/auth/decorators/is-public/is-public.decorator';
import { SubscriptionEvents } from 'src/common/constants/subscription-events.constant';
import { VideoUpdateInput } from 'src/prisma/@generated/video/video-update.input';
import { VideoWhereUniqueInput } from 'src/prisma/@generated/video/video-where-unique.input';
import { VideoWhereInput } from 'src/prisma/@generated/video/video-where.input';
import { Video } from 'src/prisma/@generated/video/video.model';
import { PUB_SUB } from 'src/pub-sub/pub-sub.module';
import { UploadService } from 'src/upload/upload.service';
import { VideoCreateInputWithFile } from './interfaces/create-video-with-file.input';
import { ProcessProgress } from './models/process-progress.model';
import { VideosService } from './videos.service';
import fs from 'fs';
import { VodStatus } from 'src/vod-sessions/enums/status.enum';
import { VideoPrivacy } from './enums/privacy.enum';

@Resolver(() => Video)
export class VideosResolver {
  constructor(
    @Inject(PUB_SUB) private pubSub: RedisPubSub,
    private readonly videosService: VideosService,
    private readonly uploadService: UploadService,
  ) {}

  @Mutation(() => Video)
  async createVideo(
    @Args('data')
    { file, ...data }: VideoCreateInputWithFile,
  ) {
    const { createReadStream, filename } = await file;
    let createdVideo: Video = null;
    const dirId = randomUUID();
    // Move uploaded file to tmp for transcoding
    const uploadedFile = await this.uploadService.writeFileToDir({
      createReadStream,
      filename,
    });

    try {
      // Create private video with default vod session
      createdVideo = await this.videosService.create({
        ...data,
        dirId,
        privacy: VideoPrivacy.private,
        vodSession: {
          create: {
            status: VodStatus.empty,
          },
        },
      });
    } catch (err) {
      console.error(err);
      // Remove tmp file
      fs.unlinkSync(uploadedFile.path);
      throw new InternalServerErrorException();
    }

    // Request transcoding
    await this.videosService.toHls(uploadedFile.path, dirId);
    return createdVideo;
  }

  @Query(() => [Video], { name: 'videos' })
  @IsPublic()
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

  @IsPublic()
  @Subscription(() => ProcessProgress)
  currentProcessProgress(@Args('dirId') dirId: string) {
    return this.pubSub.asyncIterator(
      [SubscriptionEvents.UPLOAD_VIDEO_PROGRESS, dirId].join('_'),
    );
  }
}
