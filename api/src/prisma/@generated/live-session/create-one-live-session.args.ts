import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LiveSessionCreateInput } from './live-session-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneLiveSessionArgs {

    @Field(() => LiveSessionCreateInput, {nullable:false})
    @Type(() => LiveSessionCreateInput)
    data!: LiveSessionCreateInput;
}
