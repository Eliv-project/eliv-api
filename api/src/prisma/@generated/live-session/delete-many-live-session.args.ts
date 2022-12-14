import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LiveSessionWhereInput } from './live-session-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyLiveSessionArgs {

    @Field(() => LiveSessionWhereInput, {nullable:true})
    @Type(() => LiveSessionWhereInput)
    where?: LiveSessionWhereInput;
}
