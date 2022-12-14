import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { VideoRelationFilter } from '../video/video-relation-filter.input';

@InputType()
export class LiveSessionWhereInput {

    @Field(() => [LiveSessionWhereInput], {nullable:true})
    AND?: Array<LiveSessionWhereInput>;

    @Field(() => [LiveSessionWhereInput], {nullable:true})
    OR?: Array<LiveSessionWhereInput>;

    @Field(() => [LiveSessionWhereInput], {nullable:true})
    NOT?: Array<LiveSessionWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    status?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    streamKey?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => VideoRelationFilter, {nullable:true})
    video?: VideoRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    videoId?: IntFilter;
}
