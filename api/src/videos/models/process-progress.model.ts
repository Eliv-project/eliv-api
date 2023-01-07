import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProcessProgress {
  @Field((type) => Float, { nullable: false })
  progress: number;
}
