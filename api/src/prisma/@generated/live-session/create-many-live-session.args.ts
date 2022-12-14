import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LiveSessionCreateManyInput } from './live-session-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyLiveSessionArgs {

    @Field(() => [LiveSessionCreateManyInput], {nullable:false})
    @Type(() => LiveSessionCreateManyInput)
    data!: Array<LiveSessionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
