import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LiveSessionUpdateManyMutationInput } from './live-session-update-many-mutation.input';
import { Type } from 'class-transformer';
import { LiveSessionWhereInput } from './live-session-where.input';

@ArgsType()
export class UpdateManyLiveSessionArgs {

    @Field(() => LiveSessionUpdateManyMutationInput, {nullable:false})
    @Type(() => LiveSessionUpdateManyMutationInput)
    data!: LiveSessionUpdateManyMutationInput;

    @Field(() => LiveSessionWhereInput, {nullable:true})
    @Type(() => LiveSessionWhereInput)
    where?: LiveSessionWhereInput;
}
