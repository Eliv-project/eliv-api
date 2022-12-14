import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OAuthLinkCreateInput } from 'src/prisma/@generated/o-auth-link/o-auth-link-create.input';
import { OAuthLinkUpdateInput } from 'src/prisma/@generated/o-auth-link/o-auth-link-update.input';
import { OAuthLinkWhereUniqueInput } from 'src/prisma/@generated/o-auth-link/o-auth-link-where-unique.input';
import { OAuthLinkWhereInput } from 'src/prisma/@generated/o-auth-link/o-auth-link-where.input';
import { OAuthLink } from 'src/prisma/@generated/o-auth-link/o-auth-link.model';
import { OAuthLinksService } from './oauth-links.service';

@Resolver(() => OAuthLink)
export class OAuthLinksResolver {
  constructor(private readonly oauthLinksService: OAuthLinksService) {}

  @Mutation(() => OAuthLink)
  createOAuthLink(
    @Args('data')
    data: OAuthLinkCreateInput,
  ) {
    return this.oauthLinksService.create(data);
  }

  @Query(() => [OAuthLink], { name: 'oauthLinks' })
  findAll(
    @Args('where')
    where: OAuthLinkWhereInput,
  ) {
    return this.oauthLinksService.findAll(where);
  }

  @Query(() => OAuthLink, { name: 'oauthLink' })
  findOne(@Args('where') where: OAuthLinkWhereUniqueInput) {
    return this.oauthLinksService.findOne(where);
  }

  @Mutation(() => OAuthLink)
  updateOAuthLink(
    @Args('where') where: OAuthLinkWhereUniqueInput,
    @Args('data')
    data: OAuthLinkUpdateInput,
  ) {
    return this.oauthLinksService.update(where, data);
  }

  @Mutation(() => OAuthLink)
  removeOAuthLink(@Args('where') where: OAuthLinkWhereUniqueInput) {
    return this.oauthLinksService.remove(where);
  }
}
