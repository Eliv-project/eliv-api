import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LiveSessionWhereInput } from './live-session-where.input';

@InputType()
export class LiveSessionRelationFilter {

    @Field(() => LiveSessionWhereInput, {nullable:true})
    is?: LiveSessionWhereInput;

    @Field(() => LiveSessionWhereInput, {nullable:true})
    isNot?: LiveSessionWhereInput;
}
