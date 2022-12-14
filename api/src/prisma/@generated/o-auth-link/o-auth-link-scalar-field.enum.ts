import { registerEnumType } from '@nestjs/graphql';

export enum OAuthLinkScalarFieldEnum {
    provider = "provider",
    providerId = "providerId",
    userId = "userId"
}


registerEnumType(OAuthLinkScalarFieldEnum, { name: 'OAuthLinkScalarFieldEnum', description: undefined })
