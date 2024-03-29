import {
  Inject,
  InternalServerErrorException,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  Resolver,
  Query,
  Mutation,
  Args,
  Subscription,
  Int,
} from '@nestjs/graphql';
import { randomUUID } from 'crypto';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
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
import slugify from 'slugify';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { User } from 'src/prisma/@generated/user/user.model';
import { VideoOrderByWithRelationInput } from 'src/prisma/@generated/video/video-order-by-with-relation.input';
import { IsValidVideo } from './guards/is-valid-video.guard';
import { CurrentVideo } from './decorators/current-video.decorator';
import { ConfigService } from '@nestjs/config';
import path from 'path';
import { FfmpegService } from 'src/ffmpeg/ffmpeg.service';
import { Prisma } from '@prisma/client';
import { BadRequestException } from '@nestjs/common/exceptions/bad-request.exception';
import { LiveStatus } from 'src/live-sessions/enums/status.enum';

@Resolver(() => Video)
export class VideosResolver {
  constructor(
    @Inject(PUB_SUB) private pubSub: RedisPubSub,
    private readonly videosService: VideosService,
    private readonly uploadService: UploadService,
    private readonly configService: ConfigService,
    private readonly ffmpegService: FfmpegService,
  ) {}

  @Mutation(() => Video)
  async createVideo(
    @Args('data')
    { file, ...data }: VideoCreateInputWithFile,
    @CurrentUser() me: User,
  ) {
    const { createReadStream, filename } = await file;
    let createdVideo: Video = null;
    const dirId = randomUUID();
    // Move uploaded file to tmp for transcoding
    const uploadedFile = await this.uploadService.writeFileToDir({
      createReadStream,
      filename,
    });

    const videoInfo = await this.ffmpegService.getVideoInfo(uploadedFile.path);

    const MAX_DURATION = 60 * 5;
    if (videoInfo.format.duration > MAX_DURATION) {
      throw new BadRequestException('MEDIA_DURATION_TOO_LONG');
    }

    try {
      // Create private video with default vod session
      createdVideo = await this.videosService.create({
        ...data,
        user: {
          connect: { id: me.id },
        },
        duration: videoInfo.format.duration,
        dirId,
        privacy: VideoPrivacy.private,
        vodSession: {
          create: {
            status: VodStatus.waiting,
          },
        },
      } as Prisma.VideoCreateInput);
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
    @Args({
      name: 'orderBy',
      type: () => [VideoOrderByWithRelationInput],
      nullable: true,
    })
    orderBy?: VideoOrderByWithRelationInput[],
    @Args({
      name: 'take',
      type: () => Int,
      nullable: true,
    })
    take?: number,
  ) {
    return this.videosService.findAll(
      {
        where,
        orderBy,
        take,
      },
      {
        _count: true,
        vodSession: true,
        liveSession: { include: { _count: true } },
        user: {
          include: { _count: { select: { subscribers: true } } },
        },
      },
    );
  }

  @Query(() => Video, { name: 'video', nullable: true })
  @IsPublic(true)
  async findOne(
    @Args('where') where: VideoWhereUniqueInput,
    @CurrentUser() me: User,
  ) {
    const video = await this.videosService.findOne(where, {
      vodSession: true,
      liveSession: {
        include: { streamKey: true },
      },
      _count: true,
      user: true,
    });

    // Only serve private videos to its owner
    if (!me && video.privacy === VideoPrivacy.private) {
      return null;
    }

    return video;
  }

  @Query(() => Int)
  @IsPublic()
  countVideo(@Args('where') where: VideoWhereInput) {
    return this.videosService.count(where);
  }

  @Mutation(() => Video)
  @UseGuards(IsValidVideo)
  updateVideo(
    @Args('where') where: VideoWhereUniqueInput,
    @Args('data')
    data: VideoUpdateInput,
    @CurrentVideo() video: Video,
  ) {
    const searchableName = slugify(data.name.set, {
      strict: true,
      lower: true,
    });
    return this.videosService.update(
      {
        id: video.id,
      },
      {
        ...data,
        searchableName: { set: searchableName },
      } as Prisma.VideoUpdateInput,
    );
  }

  @Mutation(() => Video)
  @UseGuards(IsValidVideo)
  async removeVideo(
    @Args('where') where: VideoWhereUniqueInput,
    @CurrentVideo() video: Video,
  ) {
    if (video.vodSession?.status === VodStatus.processing) {
      throw new BadRequestException('CANNOT_REMOVE_PROCESSING_VIDEO');
    }

    if (video.liveSession?.status === LiveStatus.ON_LIVE) {
      throw new BadRequestException('CANNOT_REMOVE_LIVE_VIDEO');
    }

    // Remove queued job
    const job = await this.videosService.getJob(video.dirId);
    if (job && !(await job.isActive())) {
      job.remove().then(() => console.log('Job removed'));
    }

    // Remove files
    const dirPath = path.join(this.configService.get('hlsPath'), video.dirId);
    fs.rm(dirPath, { recursive: true, force: true }, (err) => {
      if (err) {
        console.error(err);
      }
    });

    return this.videosService.remove({ id: video.id });
  }

  @IsPublic()
  @Subscription(() => ProcessProgress)
  currentProcessProgress(@Args('dirId') dirId: string) {
    return this.pubSub.asyncIterator(
      [SubscriptionEvents.UPLOAD_VIDEO_PROGRESS, dirId].join('_'),
    );
  }
}
