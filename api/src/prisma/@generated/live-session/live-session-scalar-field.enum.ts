import { registerEnumType } from '@nestjs/graphql';

export enum LiveSessionScalarFieldEnum {
    id = "id",
    status = "status",
    streamKey = "streamKey",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    videoId = "videoId"
}


registerEnumType(LiveSessionScalarFieldEnum, { name: 'LiveSessionScalarFieldEnum', description: undefined })
