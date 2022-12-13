import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Video } from 'src/videos/entities/video.entity';

@ObjectType()
export class LiveSession {
  @Field()
  streamKey: string;

  @Field({ defaultValue: 0 })
  status: boolean;

  @Field((type) => Video)
  video: Video;
}
