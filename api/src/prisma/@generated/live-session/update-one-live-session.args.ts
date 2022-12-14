import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LiveSessionUpdateInput } from './live-session-update.input';
import { Type } from 'class-transformer';
import { LiveSessionWhereUniqueInput } from './live-session-where-unique.input';

@ArgsType()
export class UpdateOneLiveSessionArgs {

    @Field(() => LiveSessionUpdateInput, {nullable:false})
    @Type(() => LiveSessionUpdateInput)
    data!: LiveSessionUpdateInput;

    @Field(() => LiveSessionWhereUniqueInput, {nullable:false})
    @Type(() => LiveSessionWhereUniqueInput)
    where!: LiveSessionWhereUniqueInput;
}
