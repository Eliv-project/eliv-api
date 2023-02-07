import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LiveChatMessage } from 'src/prisma/@generated/live-chat-message/live-chat-message.model';

@ObjectType()
export class LiveChatChangeData {
  @Field()
  type: 'delete' | 'create';

  @Field(() => LiveChatMessage)
  data: LiveChatMessage;
}
