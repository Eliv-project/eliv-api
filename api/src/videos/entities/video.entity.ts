import { ObjectType, Field, Int, PickType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-scalars';
import { LiveSession } from 'src/live-sessions/entities/live-session.entity';
import { User } from 'src/users/entities/user.entity';

@ObjectType()
export class Video {
  @Field()
  name: string;

  @Field((type) => GraphQLJSON, { nullable: true })
  thumbnail?: JSON;

  @Field()
  slug: string;

  @Field((type) => LiveSession, { nullable: true })
  liveSession?: LiveSession;

  @Field((type) => User)
  user: User;
}
