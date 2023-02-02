import { Field, ObjectType } from '@nestjs/graphql';
import { LiveStatus } from '../enums/status.enum';

@ObjectType()
export class LiveSessionStatus {
  @Field()
  status: LiveStatus;
}
