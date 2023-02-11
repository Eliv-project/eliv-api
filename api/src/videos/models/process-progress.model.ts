import { Field, Float, Int, ObjectType } from '@nestjs/graphql';


export type ProcessStatus = 'failed' | 'processing' | 'success';

@ObjectType()
export class ProcessProgress {
  @Field()
  // Current process status
  status: ProcessStatus;

  @Field({ nullable: true })
  message?: string;

  @Field((type) => Float, { nullable: true })
  progress?: number;
}
