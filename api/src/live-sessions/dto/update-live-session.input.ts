import { CreateLiveSessionInput } from './create-live-session.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLiveSessionInput extends PartialType(CreateLiveSessionInput) {
  @Field(() => Int)
  id: number;
}
