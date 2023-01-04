import { registerEnumType } from '@nestjs/graphql';

export enum VideoScalarFieldEnum {
    id = "id",
    name = "name",
    thumbnail = "thumbnail",
    slug = "slug",
    privacy = "privacy",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    dirId = "dirId",
    userId = "userId"
}


registerEnumType(VideoScalarFieldEnum, { name: 'VideoScalarFieldEnum', description: undefined })
