import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { IsPublic } from 'src/auth/decorators/is-public/is-public.decorator';
import { VideoUpdateInput } from 'src/prisma/@generated/video/video-update.input';
import { VideoWhereUniqueInput } from 'src/prisma/@generated/video/video-where-unique.input';
import { VideoWhereInput } from 'src/prisma/@generated/video/video-where.input';
import { Video } from 'src/prisma/@generated/video/video.model';
import { UploadService } from 'src/upload/upload.service';
import { VideoCreateInputWithFile } from './interfaces/video-create-input-with-file.dto';
import { VideosService } from './videos.service';

@Resolver(() => Video)
export class VideosResolver {
  constructor(
    private readonly videosService: VideosService,
    private readonly uploadService: UploadService,
  ) {}

  @Mutation(() => Video)
  async createVideo(
    @Args('data')
    { file, ...data }: VideoCreateInputWithFile,
  ) {
    const { createReadStream, filename } = await file;

    // const uploadedPath = await this.uploadService.writeFileToDir({
    //   createReadStream,
    //   filename,
    // });
    // console.log('New video uploaded to', uploadedPath);

    const videoPath = await this.uploadService.convertFileToChunks({
      createReadStream,
      filename,
    });

    return this.videosService.create({ ...data, path: videoPath });
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
}
