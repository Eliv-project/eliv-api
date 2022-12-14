import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LiveSessionWhereUniqueInput } from './live-session-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueLiveSessionArgs {

    @Field(() => LiveSessionWhereUniqueInput, {nullable:false})
    @Type(() => LiveSessionWhereUniqueInput)
    where!: LiveSessionWhereUniqueInput;
}
