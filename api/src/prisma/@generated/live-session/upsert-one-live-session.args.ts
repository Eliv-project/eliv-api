import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LiveSessionWhereUniqueInput } from './live-session-where-unique.input';
import { Type } from 'class-transformer';
import { LiveSessionCreateInput } from './live-session-create.input';
import { LiveSessionUpdateInput } from './live-session-update.input';

@ArgsType()
export class UpsertOneLiveSessionArgs {

    @Field(() => LiveSessionWhereUniqueInput, {nullable:false})
    @Type(() => LiveSessionWhereUniqueInput)
    where!: LiveSessionWhereUniqueInput;

    @Field(() => LiveSessionCreateInput, {nullable:false})
    @Type(() => LiveSessionCreateInput)
    create!: LiveSessionCreateInput;

    @Field(() => LiveSessionUpdateInput, {nullable:false})
    @Type(() => LiveSessionUpdateInput)
    update!: LiveSessionUpdateInput;
}
