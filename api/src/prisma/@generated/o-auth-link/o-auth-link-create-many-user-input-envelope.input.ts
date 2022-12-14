import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthLinkCreateManyUserInput } from './o-auth-link-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class OAuthLinkCreateManyUserInputEnvelope {

    @Field(() => [OAuthLinkCreateManyUserInput], {nullable:false})
    @Type(() => OAuthLinkCreateManyUserInput)
    data!: Array<OAuthLinkCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
