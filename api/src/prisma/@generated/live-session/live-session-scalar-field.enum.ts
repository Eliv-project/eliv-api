import { registerEnumType } from '@nestjs/graphql';

export enum LiveSessionScalarFieldEnum {
    id = "id",
    status = "status",
    streamKeyId = "streamKeyId",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    videoId = "videoId"
}


registerEnumType(LiveSessionScalarFieldEnum, { name: 'LiveSessionScalarFieldEnum', description: undefined })
