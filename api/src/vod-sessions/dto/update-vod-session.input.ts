import { CreateVodSessionInput } from './create-vod-session.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateVodSessionInput extends PartialType(CreateVodSessionInput) {
  @Field(() => Int)
  id: number;
}
